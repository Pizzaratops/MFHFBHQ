#!/usr/bin/env python3
# ============================================================
#  train-intl-model.py — Modell für internationale NBA-Draft-Prospects (25.11.2026)
# ============================================================
#  Problem: Für Prospects aus Europa/Australien (Joksimović, Yimga-Moukouri, Dash Daniels …) gibt es
#  keine Barttorvik-Daten. Öffentlich erreichbar sind nur EuroLeague/EuroCup (feeds.incrowdsports.com)
#  und die NBL (nblR-Daten) — das deckt nur rund die Hälfte der internationalen Draftees ab.
#
#  Backtest (25.11.2026, Draftees 2008–2022, Folds ≤2014 → 2015–18 und ≤2018 → 2019–22):
#   - Draft-Position ist das tragende Signal (Scouts sehen Spiele, die wir nicht haben).
#   - Bei gleicher Draft-Position schaffen es Spieler ohne College seltener (Rotation, Impact, Fantasy).
#   - Box-Score-Produktion aus EuroLeague/EuroCup/NBL bringt über die Draft-Position hinaus keinen
#     belastbaren Gewinn (n = 59 mit ≥ 250 Min., LOO-AUC schwankt um ±0,05) → nicht im Modell,
#     nur als Statline angezeigt.
#   - Alter am Draft-Tag: kein zusätzlicher Effekt (Schätzung zu unsicher, Geburtsdaten fehlen oft).
#  Modell: logistische Regression je Ziel auf ln(Pick) + „ohne College“ (gepoolt mit allen Draftees),
#  plus Bootstrap (200) für die 80-%-Spanne, danach Platt-Nachkalibrierung auf den Out-of-Fold-Vorhersagen
#  der internationalen Draftees (roh zu optimistisch: Impact 25 % vorhergesagt, 13 % eingetreten). Ziele wie NBA-DNA (ersten 4 NBA-Saisons):
#  rot = Saison mit 40+ Spielen und 18+ Min.; imp = Saison mit 1.000+ Min. und BPM ≥ 0;
#  fan = BBM-9-Cat-Top-150-Saison.
#
#  Eingaben: cache/nba-draft-history.csv.gz, cache/nba-advanced.csv.gz, sports/nba/data/last-season-stats-*.js
#  Ausgabe: sports/cbb/data/intl-model.js (INTL_MODEL, klein, lädt im Browser)
#  Lokal ausführen (pandas, sklearn), jährlich nach dem NBA-Draft.
# ============================================================
import os, re, glob, json, unicodedata
import numpy as np, pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import roc_auc_score, brier_score_loss

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..', '..', '..'))
CACHE = os.path.join(HERE, 'cache')
OUT = os.path.join(ROOT, 'sports', 'cbb', 'data', 'intl-model.js')
LAST_LABEL_DRAFT = 2022  # Draftees mit 4 vollen NBA-Jahren (Saison 2025/26 ist die letzte komplette)
FOLDS = [(2014, range(2015, 2019)), (2018, range(2019, LAST_LABEL_DRAFT + 1))]
N_BOOT = 200


def nk(s):
    s = unicodedata.normalize('NFD', str(s)); s = ''.join(c for c in s if unicodedata.category(c) != 'Mn').lower()
    s = re.sub(r"\b(jr|sr|ii|iii|iv)\b", '', s); return re.sub(r'[^a-z]', '', s)


def bbm_ranks():
    out = []
    for f in glob.glob(os.path.join(ROOT, 'sports', 'nba', 'data', 'last-season-stats-*.js')):
        y = int(f[-10:-6]) + 1; txt = open(f, encoding='utf-8').read()
        rows = [(nk(m.group(1)), float(m.group(3))) for m in re.finditer(r'\{ name: "([^"]+)".*?games: (\d+).*?composite: (-?[\d.]+)', txt)]
        rows.sort(key=lambda x: -x[1])
        out += [(y, k, i + 1) for i, (k, _) in enumerate(rows)]
    return pd.DataFrame(out, columns=['season', 'k', 'rk'])


def main():
    D = pd.read_csv(os.path.join(CACHE, 'nba-draft-history.csv.gz')).drop_duplicates('player_id')
    D = D[D.season.between(2008, 2030)].copy()
    A = pd.read_csv(os.path.join(CACHE, 'nba-advanced.csv.gz'))
    tot = A[A.team.astype(str).str.match(r'^\dTM$') | ~A.duplicated(['season', 'player_id'], keep=False)]
    B = bbm_ranks()
    D['k'] = D.player.map(nk); D['intl'] = D.college.isna().astype(float)
    lab = []
    for _, r in D.iterrows():
        t = tot[tot.player_id == r.player_id]
        seas = [s for s in sorted(t.season.unique())[:4] if s <= r.season + 6]
        tt = t[t.season.isin(seas)]
        rot = bool(((tt.g >= 40) & (tt.mp / tt.g.clip(lower=1) >= 18)).any())
        imp = bool(((tt.mp >= 1000) & (tt.bpm >= 0)).any())
        b = B[(B.k == r.k) & (B.season.isin(seas))]
        best = int(b.rk.min()) if len(b) else None
        bestBpm = float(tt[tt.mp >= 500].bpm.max()) if (tt.mp >= 500).any() else None
        lab.append((rot, imp, bool(best is not None and best <= 150), len(seas), best, bestBpm))
    D[['rot', 'imp', 'fan', 'nseas', 'bestRk', 'bestBpm']] = pd.DataFrame(lab, index=D.index)
    D['lnpick'] = np.log(D.overall_pick.astype(float))
    T = D[D.season <= LAST_LABEL_DRAFT].copy()
    F = ['lnpick', 'intl']

    # ---------- Backtest ----------
    bt = {}; calib = {}
    for tgt in ['rot', 'imp', 'fan']:
        res = {}
        for name, feats in [('pick', ['lnpick']), ('pick+intl', F)]:
            ps, ys, gi = [], [], []
            for end, te in FOLDS:
                tr = T[T.season <= end]; ts = T[T.season.isin(te)]
                m = LogisticRegression(C=1.0, max_iter=2000).fit(tr[feats].values, tr[tgt])
                ps += list(m.predict_proba(ts[feats].values)[:, 1]); ys += list(ts[tgt]); gi += list(ts.intl == 1)
            ps, ys, gi = np.array(ps), np.array(ys), np.array(gi)
            if name == 'pick+intl':
                # Platt-Nachkalibrierung auf den Out-of-Fold-Vorhersagen der internationalen Draftees:
                # das Modell war für sie zu optimistisch (z. B. Impact 25 % vorhergesagt, 13 % eingetreten)
                q = np.clip(ps[gi], 1e-4, 1 - 1e-4); lg = np.log(q / (1 - q)).reshape(-1, 1)
                pc = LogisticRegression(C=100.0, max_iter=2000).fit(lg, ys[gi])
                calib[tgt] = {'a': round(float(pc.coef_[0][0]), 4), 'b': round(float(pc.intercept_[0]), 4)}
                pcal = pc.predict_proba(lg)[:, 1]
                res['kalibriert'] = {'brierIntl': round(brier_score_loss(ys[gi], pcal), 4), 'predIntl': round(float(pcal.mean()), 3), 'hinweis': 'in-sample auf OOF'}
            res[name] = {'auc': round(roc_auc_score(ys, ps), 3), 'aucIntl': round(roc_auc_score(ys[gi], ps[gi]), 3),
                         'brierIntl': round(brier_score_loss(ys[gi], ps[gi]), 4),
                         'predIntl': round(float(ps[gi].mean()), 3), 'realIntl': round(float(ys[gi].mean()), 3), 'nIntl': int(gi.sum())}
        bt[tgt] = res
        print(tgt, res)

    # ---------- Endmodell + Bootstrap ----------
    rng = np.random.default_rng(11)
    mods = {}
    for tgt in ['rot', 'imp', 'fan']:
        m = LogisticRegression(C=1.0, max_iter=2000).fit(T[F].values, T[tgt])
        boot = []
        for _ in range(N_BOOT):
            i = rng.integers(0, len(T), len(T))
            mb = LogisticRegression(C=1.0, max_iter=2000).fit(T[F].values[i], T[tgt].values[i])
            boot.append([round(float(mb.intercept_[0]), 4)] + [round(float(c), 4) for c in mb.coef_[0]])
        mods[tgt] = {'icpt': round(float(m.intercept_[0]), 5), 'coef': [round(float(c), 5) for c in m.coef_[0]], 'boot': boot}

    # Gleiche Pick-Bänder: ohne College vs. College (zur Anzeige)
    T['band'] = pd.cut(T.overall_pick, [0, 5, 14, 30, 60], labels=['1–5', '6–14', '15–30', '31–60'])
    bands = []
    for b, g in T.groupby('band', observed=True):
        row = {'band': str(b)}
        for grp, gg in [('intl', g[g.intl == 1]), ('col', g[g.intl == 0])]:
            row[grp] = {'n': int(len(gg)), 'rot': round(float(gg.rot.mean()), 2), 'imp': round(float(gg.imp.mean()), 2), 'fan': round(float(gg.fan.mean()), 2)}
        bands.append(row)

    # Historische internationale Picks (für „Vergleichbare Intl-Picks“)
    I = D[(D.intl == 1) & (D.season <= 2025)].sort_values(['season', 'overall_pick'])
    def outcome(r):
        if r.season > LAST_LABEL_DRAFT: return 'zu früh'
        if r.nseas == 0: return 'nie in der NBA'
        if r.imp: return 'Impact'
        if r.rot: return 'Rotation'
        return 'kurz in der NBA'
    hist = [[r.player, int(r.season), int(r.overall_pick), outcome(r), r.bestRk if pd.notna(r.bestRk) else None,
             round(r.bestBpm, 1) if pd.notna(r.bestBpm) else None] for _, r in I.iterrows()]

    model = {'built': pd.Timestamp.now().strftime('%Y-%m-%d'), 'feats': F, 'lastLabelDraft': LAST_LABEL_DRAFT,
             'n': int(len(T)), 'nIntl': int(T.intl.sum()), 'models': mods, 'backtest': bt, 'bands': bands, 'hist': hist,
             'pickSigma': 0.45, 'calib': calib}
    js = ('// ============================================================\n'
          '//  INTL_MODEL — Modell für internationale Draft-Prospects (auto-generiert)\n'
          '//  sports/cbb/scripts/model/train-intl-model.py — Details/Backtest dort.\n'
          '// ============================================================\n'
          'const INTL_MODEL = ' + json.dumps(model, separators=(',', ':'), ensure_ascii=False) + ';\n')
    open(OUT, 'w', encoding='utf-8').write(js)
    print(f'→ {os.path.relpath(OUT, ROOT)} ({os.path.getsize(OUT) // 1024} KB)')


if __name__ == '__main__':
    main()
