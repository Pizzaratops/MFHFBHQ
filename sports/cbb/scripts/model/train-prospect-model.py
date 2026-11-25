#!/usr/bin/env python3
# ============================================================
#  College Scouting (Basketball): Draft-Range-Modell + Production-Comp-Pool
# ============================================================
#  Lokal ausführen (pandas/sklearn), jährlich nach dem NBA-Draft neu trainieren:
#    1. Workflow „CBB Barttorvik-Historie“ mit 2008-<aktuell> laufen lassen
#    2. python3 sports/cbb/scripts/model/train-prospect-model.py
#  Schreibt sports/cbb/scripts/model/prospect-model.json — die Parameter, mit denen
#  sports/cbb/scripts/build-college-prospects.js (täglich im CBB-Sync, ohne Python)
#  die aktuellen Prospects bewertet. Die Formeln hier und dort müssen identisch sein
#  (features() ↔ featuresOf() in build-college-prospects.js).
#
#  Daten: Barttorvik je Spieler-Saison 2008–heute (sync-torvik.js). Der spätere NBA-Pick
#  steht dort an jeder Saison des Spielers.
#  Trainings-Zeile = LETZTE College-Saison eines Spielers 2010–2026 (Wurfzonen erst ab 2010) („er ging nach dieser
#  Saison“), Profil = Minuten-gewichteter Mix aus letzter (Gewicht 1) und vorletzter
#  Saison (Gewicht 0,5), dazu 150 Pseudo-Minuten Pool-Schnitt (Schrumpfung kleiner Samples).
#  Ziele: P(gedraftet) — logistische Regression; erwarteter Pick — Ridge auf ln(Pick) der
#  Gedrafteten, Spannweite aus den Residuen-Quantilen.
#
#  ALTER: Barttorvik hat nur bei ~30 % der aktuellen Spieler ein echtes Geburtsdatum
#  (sonst Platzhalter JJJJ-10-15), bei späteren Draftees aber bei ~90 % (nachgetragen).
#  „Echtes Datum vorhanden“ wäre damit ein Leck → nie als Merkmal. Platzhalter werden
#  durch den Alters-Schnitt der Klasse ersetzt (aus echten Daten gelernt).
#
#  Backtest: zwei zeitliche Folds (≤2016 → 2017–2020, ≤2020 → 2021–2025), wie bei NFL.
# ============================================================
import os, glob, json, math
import numpy as np, pandas as pd
from sklearn.linear_model import LogisticRegression, Ridge
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import roc_auc_score
from scipy.stats import spearmanr

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(HERE, 'cache', 'torvik')
OUT = os.path.join(HERE, 'prospect-model.json')
LAST_DRAFT = int(os.environ.get('CBB_LAST_DRAFT', '2026'))

CLS = {'Fr': 1, 'So': 2, 'Jr': 3, 'Sr': 4}
POWER = {'ACC', 'B10', 'B12', 'SEC', 'BE', 'P12'}
BUCKET = {'Pure PG': 'G', 'Scoring PG': 'G', 'Combo G': 'G', 'Wing G': 'W', 'Wing F': 'W',
          'Stretch 4': 'B', 'PF/C': 'B', 'C': 'B'}
# Rate-Werte, die zwischen Saisons Minuten-gewichtet gemischt werden
RATES = ['bpm', 'obpm', 'dbpm', 'usg', 'ts', 'orbPct', 'drbPct', 'astPct', 'toPct', 'blkPct',
         'stlPct', 'ftr', 'tpa40', 'tpPct', 'ftPct', 'rimPct', 'rimRate', 'dunk40', 'pts40', 'mpg', 'minPct',
         'reb40', 'ast40', 'stl40', 'blk40', 'tpm40', 'fta40']
# Zusätzliche Merkmale nur fürs NBA-DNA-Kategorie-Profil (absolute Per-40-Werte)
CATF_EXTRA = ['pts40', 'reb40', 'ast40', 'stl40', 'blk40', 'tpm40', 'fta40', 'rimRate']
# Merkmale des Draft-Modells
FEATS = ['age', 'cls', 'rec', 'recTop', 'unrec', 'htIn', 'power', 'bpm', 'obpm', 'dbpm', 'usg', 'ts',
         'orbPct', 'drbPct', 'astPct', 'toPct', 'blkPct', 'stlPct', 'ftr', 'tpa40', 'tpPct',
         'ftPct', 'rimPct', 'dunk40', 'mpg', 'minPct', 'bpmJump', 'confStr']
# Merkmale des VORSAISON-Modells (ohne Produktion der laufenden Saison): früh in der Saison
# ist die Produktion ein winziges Sample — dann tragen Recruiting, Alter, Größe und Vorjahr.
# build-college-prospects.js blendet: Gewicht Produktionsmodell = min(1, Saison-Minuten / BLEND_MIN).
PRE = ['age', 'cls', 'rec', 'recTop', 'unrec', 'htIn', 'power', 'hasPrev', 'prevBpm', 'prevObpm', 'prevMpg', 'prevUsg', 'confStr']
BLEND_MIN = 700.0
# Merkmale des College Production Comp (nur Produktion, kein Alter/Größe/Recruiting)
COMP = ['bpm', 'obpm', 'dbpm', 'usg', 'ts', 'orbPct', 'drbPct', 'astPct', 'toPct', 'blkPct',
        'stlPct', 'ftr', 'tpa40', 'rimRate', 'pts40']
PRIOR_MIN = 150.0


def load():
    fs = sorted(glob.glob(os.path.join(CACHE, 'torvik_*.csv.gz')))
    D = pd.concat([pd.read_csv(f, dtype={'pid': str, 'dob': str, 'cls': str, 'ht': str}) for f in fs], ignore_index=True)
    D = D[D.cls.isin(CLS.keys())].copy()
    for c in ['gp', 'minPct', 'mpg', 'tpa', 'tpm', 'fta', 'ftm', 'rimM', 'rimA', 'midA', 'dunkM', 'twoPa', 'pts']:
        D[c] = pd.to_numeric(D[c], errors='coerce').fillna(0)
    D['min'] = D.mpg * D.gp
    m = D['min'].clip(lower=1)
    D['tpa40'] = 40 * D.tpa / m
    D['tpPct'] = (D.tpm + 0.33 * 40) / (D.tpa + 40)
    D['ftPct'] = (D.ftm + 0.70 * 25) / (D.fta + 25)
    D['rimPct'] = (D.rimM + 0.58 * 30) / (D.rimA + 30)
    fga = D.twoPa + D.tpa
    D['rimRate'] = (D.rimA + 0.30 * 20) / (fga + 20)
    D['dunk40'] = 40 * D.dunkM / m
    D['pts40'] = 40 * D.pts * D.gp / m
    for c in ['oreb', 'dreb', 'ast', 'stl', 'blk']:
        D[c] = pd.to_numeric(D[c], errors='coerce').fillna(0)
    D['reb40'] = 40 * (D.oreb + D.dreb) * D.gp / m
    D['ast40'] = 40 * D.ast * D.gp / m
    D['stl40'] = 40 * D.stl * D.gp / m
    D['blk40'] = 40 * D.blk * D.gp / m
    D['tpm40'] = 40 * D.tpm / m
    D['fta40'] = 40 * D.fta / m
    ht = D.ht.fillna('').str.extract(r'(\d+)-(\d+)').astype(float)
    D['htIn'] = ht[0] * 12 + ht[1]
    D['clsN'] = D.cls.map(CLS)
    D['power'] = D.conf.isin(POWER).astype(float)
    # Konferenz-Stärke (seit 25.11.2026, Idee: Engelmann „How to adjust college stats“ — Gegnerstärke):
    # minutengewichteter Ø-BPM aller Spieler der Konferenz in der Saison (Barttorvik-BPM ist gegner-bereinigt,
    # stärkere Konferenzen haben im Schnitt höhere BPM). Backtest: Vorsaison-Modell Pick-ρ 0,580→0,590 /
    # 0,438→0,455, Typ-Modell 0,333→0,340, sonst unverändert.
    w = D['min'].clip(lower=0)
    cs = D.assign(_w=w, _b=pd.to_numeric(D.bpm, errors='coerce').fillna(0) * w).groupby(['year', 'conf'])[['_b', '_w']].sum()
    cs = (cs._b / cs._w.clip(lower=1)).rename('confStr')
    D = D.join(cs, on=['year', 'conf'])
    D['bucket'] = D.role.map(BUCKET).fillna('W')
    # Wurfzonen (Ring, Dunks) erst ab 2010 erfasst — davor als fehlend behandeln (→ Pool-Schnitt)
    D.loc[D.year < 2010, ['rimPct', 'rimRate', 'dunk40']] = np.nan
    D['realDob'] = ~D.dob.fillna('').str.endswith('-10-15') & D.dob.notna()
    dob = pd.to_datetime(D.dob, errors='coerce')
    D['ageReal'] = (pd.to_datetime(D.year.astype(str) + '-06-25') - dob).dt.days / 365.25
    return D


def class_age(D):
    r = D[D.realDob & D.ageReal.between(17, 28)]
    return {c: round(float(r[r.clsN == n].ageReal.median()), 3) for c, n in CLS.items()}


def profiles(D, rows, cage, means):
    """Profil je Zeile: Mix letzte + vorletzte Saison + Pseudo-Minuten Pool-Schnitt."""
    prev = D.set_index(['pid', 'year'])
    out = []
    for _, r in rows.iterrows():
        w1 = max(r['min'], 0)
        p = prev.loc[(r.pid, r.year - 1)] if (r.pid, r.year - 1) in prev.index else None
        if isinstance(p, pd.DataFrame): p = p.iloc[0]
        w0 = 0.5 * max(p['min'], 0) if p is not None else 0.0
        v = {}
        for c in RATES:
            a = r[c] if pd.notna(r[c]) else means[c]
            b = (p[c] if pd.notna(p[c]) else means[c]) if p is not None else 0
            v[c] = (w1 * a + w0 * b + PRIOR_MIN * means[c]) / (w1 + w0 + PRIOR_MIN)
        has = p is not None and float(p['min']) >= 100
        v['hasPrev'] = 1.0 if has else 0.0
        for c, k in [('bpm', 'prevBpm'), ('obpm', 'prevObpm'), ('mpg', 'prevMpg'), ('usg', 'prevUsg')]:
            v[k] = float(p[c]) if has and pd.notna(p[c]) else means[c]
        v['bpmJump'] = (float(r['bpm']) - float(p['bpm'])) if p is not None and pd.notna(p['bpm']) and pd.notna(r['bpm']) else 0.0
        v['age'] = float(r.ageReal) if r.realDob and 17 < r.ageReal < 28 else cage[r.cls]
        v['cls'] = float(r.clsN)
        v['rec'] = float(r.rec) if pd.notna(r.rec) else 0.0
        v['unrec'] = 0.0 if pd.notna(r.rec) else 1.0
        # Recruiting wirkt ganz oben stark nichtlinear (Perzentil ≥ 99,5: 98 % gedraftet, Median-Pick 4;
        # 95–97: 46 %) → log-Abstand zur Spitze; ohne Rang = Wert eines Perzentil-0-Recruits
        v['recTop'] = -math.log(100.5 - (float(r.rec) if pd.notna(r.rec) else 0.0))
        v['htIn'] = float(r.htIn) if pd.notna(r.htIn) else means['htIn']
        v['power'] = float(r.power)
        v['confStr'] = float(r.confStr) if pd.notna(r.confStr) else 0.0
        out.append(v)
    return pd.DataFrame(out, index=rows.index)


def main():
    D = load()
    cage = class_age(D)
    pool = D[(D.minPct >= 20) & (D.gp >= 8)]
    means = {c: float(pool[c].mean()) for c in RATES + ['htIn']}
    D['L'] = D.groupby('pid').year.transform('max')
    T = D[(D.year == D.L) & D.year.between(2010, LAST_DRAFT) & (D.gp >= 5)].copy()
    T['drafted'] = T.pick.notna()
    T['lnPick'] = np.log(T.pick.where(T.drafted))
    PR = profiles(D, T, cage, means)
    X = PR[FEATS]; XP = PR[PRE]
    print(f'Trainings-Zeilen (letzte Saison 2010–{LAST_DRAFT}): {len(T)} · gedraftet {int(T.drafted.sum())}')

    def fit(tr, X=X):
        sc = StandardScaler().fit(X[tr])
        lg = LogisticRegression(C=0.5, max_iter=4000).fit(sc.transform(X[tr]), T.drafted[tr])
        dr = tr & T.drafted
        rg = Ridge(alpha=5.0).fit(sc.transform(X[dr]), T.lnPick[dr])
        return sc, lg, rg

    # ---------- Backtest ----------
    bt = []
    for a, b0, b1 in [(2016, 2017, 2020), (2020, 2021, 2025)]:
        tr = T.year <= a; te = T.year.between(b0, b1)
        sc, lg, rg = fit(tr)
        p = lg.predict_proba(sc.transform(X[te]))[:, 1]
        auc = roc_auc_score(T.drafted[te], p)
        dte = te & T.drafted
        rho = spearmanr(rg.predict(sc.transform(X[dte])), T.lnPick[dte]).correlation
        # Top-60 je Jahrgang: wie viele davon wurden gedraftet?
        t = T[te].assign(p=p)
        hit = t.sort_values('p', ascending=False).groupby('year').head(45).drafted.mean()
        bt.append({'train': f'≤{a}', 'test': f'{b0}–{b1}', 'auc': round(auc, 3), 'pickRho': round(rho, 3), 'top45Hit': round(float(hit), 3)})
        print(f'Fold ≤{a} → {b0}–{b1}: AUC {auc:.3f} · Pick-ρ {rho:.3f} · Top-45 je Jahr gedraftet {100 * hit:.0f} %')

    rel_ = (T.bpm >= 3) | (T.rec >= 80) | T.drafted
    for a, b0, b1 in [(2016, 2017, 2020), (2020, 2021, 2025)]:
        tr = T.year <= a; te = T.year.between(b0, b1)
        scp, lgp, rgp = fit(tr, XP)
        ter = te & rel_
        auc = roc_auc_score(T.drafted[ter], lgp.predict_proba(scp.transform(XP[ter]))[:, 1])
        dte = te & T.drafted
        rho = spearmanr(rgp.predict(scp.transform(XP[dte])), T.lnPick[dte]).correlation
        aucf = roc_auc_score(T.drafted[ter], fit(tr)[1].predict_proba(fit(tr)[0].transform(X[ter]))[:, 1])
        for r_ in bt:
            if r_['train'] == f'≤{a}': r_.update(aucRel=round(aucf, 3), preAucRel=round(auc, 3), prePickRho=round(rho, 3))
        print(f'Vorsaison-Modell ≤{a} → {b0}–{b1}: AUC (relevante Spieler) {auc:.3f} · Pick-ρ {rho:.3f}  | Produktionsmodell AUC rel. {aucf:.3f}')
    scp, lgp, rgp = fit(pd.Series(True, index=T.index), XP)
    resp = T.lnPick[T.drafted] - rgp.predict(scp.transform(XP[T.drafted]))

    # ---------- Endmodell auf allen Jahren ----------
    allr = pd.Series(True, index=T.index)
    sc, lg, rg = fit(allr)
    dr = T.drafted
    res = T.lnPick[dr] - rg.predict(sc.transform(X[dr]))
    qs = {str(q): round(float(np.quantile(res, q)), 4) for q in [0.1, 0.25, 0.5, 0.75, 0.9]}
    coef = sorted(zip(FEATS, lg.coef_[0]), key=lambda x: -abs(x[1]))
    print('Draft-Chance, wichtigste Merkmale:', ', '.join(f'{f} {c:+.2f}' for f, c in coef[:10]))
    rcoef = sorted(zip(FEATS, rg.coef_), key=lambda x: -abs(x[1]))
    print('Pick (ln), wichtigste Merkmale:', ', '.join(f'{f} {c:+.2f}' for f, c in rcoef[:8]))

    # ---------- Production-Comp-Pool ----------
    # Alle Saisons (nicht nur letzte) mit echter Rolle, von Spielern, die später gedraftet
    # wurden ODER eine Top-Saison hatten — erkennbare Namen, überschaubare Größe.
    D['everPick'] = D.groupby('pid').pick.transform(lambda s: s.notna().any())
    D['bestBpm'] = D.groupby('pid').bpm.transform('max')
    D['bestRec'] = D.groupby('pid').rec.transform('max')
    C = D[(D.year.between(2010, LAST_DRAFT)) & (D.minPct >= 40) & (D.gp >= 10) &
          (D.everPick | (D.bestBpm >= 8) | (D.bestRec >= 90))].copy()
    CP = profiles(D, C, cage, means)
    comp_pool = []
    for i, r in C.iterrows():
        comp_pool.append([r['name'], r.team, int(r.year), r.cls, r.bucket, int(r.pick) if pd.notna(r.pick) else None,
                          [round(float(CP.at[i, c]), 4) for c in COMP]])
    cov = {}
    for b in ['G', 'W', 'B']:
        M = np.array([p[6] for p in comp_pool if p[4] == b])
        mu = M.mean(0); sd = M.std(0)
        Z = (M - mu) / sd
        cov[b] = {'mu': mu.round(5).tolist(), 'sd': sd.round(5).tolist(),
                  'inv': np.linalg.inv(np.cov(Z.T) + 1e-6 * np.eye(len(COMP))).round(6).tolist(), 'n': int(len(M))}
    print(f'Production-Comp-Pool: {len(comp_pool)} Saisons (G {cov["G"]["n"]}, W {cov["W"]["n"]}, B {cov["B"]["n"]})')

    dna = build_dna(D, T, PR, means)

    model = {
        'built': pd.Timestamp.now().strftime('%Y-%m-%d'), 'lastDraft': LAST_DRAFT, 'n': int(len(T)), 'nDrafted': int(T.drafted.sum()),
        'backtest': bt, 'classAge': cage, 'means': {k: round(v, 5) for k, v in means.items()}, 'priorMin': PRIOR_MIN,
        'rates': RATES, 'feats': FEATS, 'scaler': {'mean': sc.mean_.round(6).tolist(), 'scale': sc.scale_.round(6).tolist()},
        'logit': {'coef': lg.coef_[0].round(6).tolist(), 'icpt': round(float(lg.intercept_[0]), 6)},
        'ridge': {'coef': rg.coef_.round(6).tolist(), 'icpt': round(float(rg.intercept_), 6), 'resQ': qs},
        'pre': {'feats': PRE, 'blendMin': BLEND_MIN, 'scaler': {'mean': scp.mean_.round(6).tolist(), 'scale': scp.scale_.round(6).tolist()},
                'logit': {'coef': lgp.coef_[0].round(6).tolist(), 'icpt': round(float(lgp.intercept_[0]), 6)},
                'ridge': {'coef': rgp.coef_.round(6).tolist(), 'icpt': round(float(rgp.intercept_), 6),
                          'resQ': {str(q): round(float(np.quantile(resp, q)), 4) for q in [0.1, 0.25, 0.5, 0.75, 0.9]}}},
        'power': sorted(POWER), 'bucket': BUCKET, 'comp': {'feats': COMP, 'cov': cov, 'pool': comp_pool}, 'dna': dna,
    }
    with open(OUT, 'w') as f: json.dump(model, f, separators=(',', ':'), ensure_ascii=False)
    print(f'→ {os.path.relpath(OUT)} ({os.path.getsize(OUT) // 1024} KB)')

    # Stichprobe: Vorhersage für die eigenen Trainingsdaten 2026 (Plausibilität)
    t26 = T[T.year == LAST_DRAFT].copy()
    xs = sc.transform(X.loc[t26.index])
    t26['p'] = lg.predict_proba(xs)[:, 1]; t26['ePick'] = np.exp(rg.predict(xs))
    print(t26.sort_values('p', ascending=False).head(15)[['name', 'team', 'cls', 'p', 'ePick', 'pick']].to_string(index=False))


# ============================================================
#  🧬 NBA-DNA auf Barttorvik-Basis (ersetzt im College Scouting die hoopR-Version nba-translation.py,
#  damit sie auch für die LAUFENDE Saison und Freshmen rechnet — mit Minutenhinweis im UI)
#  Ziel je letzter College-Saison 2010–2022 → NBA-Saisons 1–4 (BBM-Exporte im Repo):
#   rot = Saison mit ≥ 40 Spielen und ≥ 18 Min. · fan = Top-150-Saison (9-Cat, BBM-Wert, ≥ 40 Spiele)
#   nz  = mittleres NBA-z je Kategorie (Saisons ≥ 30 Spiele), nur wer es in die NBA schaffte
#  rot/fan: Vorsaison- und Produktionsmodell wie beim Draft (Überblendung nach Minuten),
#  nz: nur Produktionsprofil. Comps: nächste NBA-Spieler (Mahalanobis, gleiche Gruppe).
# ============================================================
CATS = ['pts', 'tpm', 'reb', 'ast', 'stl', 'blk', 'fgImpact', 'ftImpact', 'to']


def nkey(n):
    import unicodedata, re
    n = unicodedata.normalize('NFKD', str(n)).encode('ascii', 'ignore').decode().lower()
    n = re.sub(r'\b(jr|sr|ii|iii|iv|v)\b\.?', '', n)
    return re.sub(r'[^a-z]', '', n)


def load_nba():
    import re
    repo = os.path.abspath(os.path.join(HERE, '..', '..', '..', '..'))
    out = {}
    for f in sorted(glob.glob(os.path.join(repo, 'sports', 'nba', 'data', 'last-season-stats-*.js'))):
        y = int(re.search(r'(\d{4})-(\d{2})\.js$', f).group(1)) + 1
        txt = open(f, encoding='utf8').read()
        body = txt[txt.index('= [') + 2: txt.rindex(']') + 1]
        body = re.sub(r'([{,]\s*)([A-Za-z_][A-Za-z0-9_]*)\s*:', r'\1"\2":', body)
        body = re.sub(r',\s*([\]}])', r'\1', body)
        out[y] = json.loads(body)
    return out


# ---------- Real-Life-Impact (Basketball-Reference: cache/nba-advanced.csv.gz, aus dem öffentlichen
# Datensatz github.com/sumitrodatta/bball-reference-datasets, getrimmt ab 2008) ----------
TYPF_EXTRA = ['astTo']


def nba_adv():
    A = pd.read_csv(os.path.join(HERE, 'cache', 'nba-advanced.csv.gz'))
    A = A.sort_values('mp').drop_duplicates(['player_id', 'season'], keep='last')  # 2TM/3TM = Gesamtzeile
    A['k'] = A.player.map(nkey)
    return A


def adv_outcomes(R, A):
    """Erste 4 NBA-Saisons nach der letzten College-Saison L. Zuordnung über den Namen, nur wenn
    genau eine bbref-ID ihre erste NBA-Saison in L+1…L+3 hat."""
    first = A.groupby('player_id').season.min()
    ids = A.groupby('k').player_id.unique().to_dict()
    by = {pid: g.set_index('season') for pid, g in A.groupby('player_id')}
    out = []
    for k, L in zip(R.k, R.year):
        cand = [q for q in ids.get(k, []) if L < first[q] <= L + 3]
        if len(cand) != 1: out.append(None); continue
        g = by[cand[0]]; S = g[(g.index > L) & (g.index <= L + 4)]
        mp = float(S.mp.sum())
        out.append(dict(mp=mp, vorp=float(S.vorp.sum()),
                        bpmW=float((S.bpm * S.mp).sum() / mp) if mp >= 1000 else None,
                        impact=bool(((S.mp >= 1000) & (S.bpm >= 0)).any())))
    return out


def build_dna(D, T, PR, means):
    NBA = load_nba()
    first, seas = {}, {}
    for y in sorted(NBA):
        rows = [r for r in NBA[y] if r.get('games')]
        elig = sorted([r for r in rows if r['games'] >= 40], key=lambda r: -(r.get('composite') or -99))
        rk = {nkey(r['name']): i + 1 for i, r in enumerate(elig)}
        for r in rows:
            k = nkey(r['name']); first.setdefault(k, y); seas.setdefault(k, {})[y] = dict(r, rank=rk.get(k))
    years = sorted(NBA)
    print(f'NBA-DNA: BBM-Saisons {years[0]}–{years[-1]} ({len(years)} Dateien, fehlende Jahre: {sorted(set(range(years[0], years[-1] + 1)) - set(years))})')

    def outcome(k, L):
        if k not in first or first[k] <= L: return None
        S = [seas[k][y] for y in range(L + 1, L + 5) if y in seas[k]]
        if not S: return None
        zs = [s['zScores'] for s in S if s['games'] >= 30 and s.get('zScores')]
        best = min([s['rank'] for s in S if s['rank']] or [999])
        bs = min(S, key=lambda s: s['rank'] or 999)
        return dict(rot=any(s['games'] >= 40 and s['min'] >= 18 for s in S),
                    fan=any(s['games'] >= 40 and s['rank'] and s['rank'] <= 150 for s in S),
                    nz={c: float(np.mean([z.get(c, 0) for z in zs])) for c in CATS} if zs else None,
                    best=best, c=bs.get('composite'))

    R = T[T.year.between(2010, 2022) & (T['min'] >= 200)].copy()
    R['k'] = R['name'].map(nkey)
    R = R[R.groupby(['k', 'year']).pid.transform('count') == 1]
    O = [outcome(k, L) for k, L in zip(R.k, R.year)]
    R['rot'] = [bool(o and o['rot']) for o in O]; R['fan'] = [bool(o and o['fan']) for o in O]
    R['ok'] = [o is not None for o in O]
    AO = adv_outcomes(R, nba_adv())
    R['impact'] = [bool(o and o['impact']) for o in AO]
    R['bpmW'] = [o['bpmW'] if o and o['bpmW'] is not None else np.nan for o in AO]
    R['vorp'] = [o['vorp'] if o else 0.0 for o in AO]
    # Ø Fantasy-Wert (BBM composite) der NBA-Saisons mit ≥ 30 Spielen
    def fan_avg(k, L):
        S = [seas[k][y] for y in range(L + 1, L + 5) if k in seas and y in seas[k] and seas[k][y]['games'] >= 30]
        return float(np.mean([q['composite'] for q in S])) if S else np.nan
    R['fanAvg'] = [fan_avg(k, L) for k, L in zip(R.k, R.year)]
    X = PR.loc[R.index].copy()
    X['astTo'] = X.astPct / X.toPct.clip(lower=1)
    print(f'NBA-DNA: Real-Life-Impact (Saison ≥ 1000 Min. & BPM ≥ 0, bbref) {int(R.impact.sum())} Spieler')
    print(f'NBA-DNA: {len(R)} letzte Saisons 2010–2022 · NBA erreicht {int(R.ok.sum())} · Rotation {int(R.rot.sum())} · Fantasy-Top-150 {int(R.fan.sum())}')

    def logit(cols, y, tr):
        sc = StandardScaler().fit(X.loc[tr, cols]); m = LogisticRegression(C=0.3, max_iter=4000).fit(sc.transform(X.loc[tr, cols]), y[tr]); return sc, m

    rel = (R.bpm >= 3) | (R.rec >= 80) | R.ok
    res = {}
    tr, te = R.year <= 2016, R.year >= 2017
    calib = {}
    for tgt in ['rot', 'fan', 'impact']:
        for nm, cols in [('prod', FEATS), ('pre', PRE)]:
            sc, m = logit(cols, R[tgt], tr)
            p = m.predict_proba(sc.transform(X.loc[te, cols]))[:, 1]
            res[f'{tgt}_{nm}'] = round(roc_auc_score(R[tgt][te], p), 3)
            res[f'{tgt}_{nm}_rel'] = round(roc_auc_score(R[tgt][te & rel], m.predict_proba(sc.transform(X.loc[te & rel, cols]))[:, 1]), 3)
            if nm == 'prod':
                # Nachkalibrierung (Platt) auf den Testjahren: die rohen Chancen waren im Backtest zu
                # optimistisch (z. B. Impact 0,5–0,7 → real 26 %). p_kal = σ(a·logit(p) + b)
                lp = np.log(np.clip(p, 1e-6, 1 - 1e-6) / (1 - np.clip(p, 1e-6, 1 - 1e-6)))
                pl = LogisticRegression(C=1e6, max_iter=4000).fit(lp.reshape(-1, 1), R[tgt][te])
                calib[tgt] = {'a': round(float(pl.coef_[0][0]), 5), 'b': round(float(pl.intercept_[0]), 5)}
                pc = pl.predict_proba(lp.reshape(-1, 1))[:, 1]
                t_ = pd.DataFrame({'p': pc, 'y': R[tgt][te].values}); t_['bin'] = pd.cut(t_.p, [0, .05, .15, .3, .5, .7, 1])
                print(f'  Kalibrierung {tgt} (nachkalibriert, 2017–22):', ', '.join(f'{i}: {g.p.mean():.2f}→{g.y.mean():.2f} (n {len(g)})' for i, g in t_.groupby('bin', observed=True)))
    print('NBA-DNA Backtest (≤2016 → 2017–22), AUC alle / relevante:', ', '.join(f'{k} {v}' for k, v in res.items()))
    allr = pd.Series(True, index=R.index)
    mods = {}
    for tgt in ['rot', 'fan', 'impact']:
        for nm, cols in [('prod', FEATS), ('pre', PRE)]:
            sc, m = logit(cols, R[tgt], allr)
            mods[f'{tgt}_{nm}'] = {'mean': sc.mean_.round(6).tolist(), 'scale': sc.scale_.round(6).tolist(), 'coef': m.coef_[0].round(6).tolist(), 'icpt': round(float(m.intercept_[0]), 6)}
    # ---------- Typ: mehr Real-Life-Impact oder mehr Fantasy-Wert, FALLS er es schafft ----------
    # Unter NBA-Spielern (≥ 1000 Min. in 4 J.): Rest der minutengewichteten NBA-BPM gegenüber dem, was
    # sein Fantasy-Ø erwarten lässt (lineare Regression BPM ~ Fantasy-Ø). > 0 = mehr Impact als Fantasy.
    TYPF = list(dict.fromkeys(FEATS + CATF_EXTRA + TYPF_EXTRA))
    N = R[R.bpmW.notna() & R.fanAvg.notna()].copy()
    sl = np.polyfit(N.fanAvg, N.bpmW, 1)
    N['typ'] = N.bpmW - np.polyval(sl, N.fanAvg)
    XN = X.loc[N.index, TYPF]
    trn, ten = N.year <= 2016, N.year >= 2017
    typ = {}
    cross = {}
    for tgt in ['typ', 'bpmW', 'fanAvg']:
        sc = StandardScaler().fit(XN[trn]); rg = Ridge(alpha=30).fit(sc.transform(XN[trn]), N.loc[trn, tgt])
        pr_ = rg.predict(sc.transform(XN[ten]))
        cross[tgt] = {t2: round(float(spearmanr(pr_, N.loc[ten, t2]).correlation), 3) for t2 in ['typ', 'bpmW', 'fanAvg']}
        sc = StandardScaler().fit(XN); rg = Ridge(alpha=30).fit(sc.transform(XN), N[tgt])
        typ[tgt] = {'mean': sc.mean_.round(6).tolist(), 'scale': sc.scale_.round(6).tolist(), 'coef': rg.coef_.round(6).tolist(), 'icpt': round(float(rg.intercept_), 6),
                    'sd': round(float(N[tgt].std()), 4)}
    print(f'NBA-DNA Typ-Modell (n {len(N)}, Test 2017–22) ρ — trainiert auf → getestet gegen:', cross)
    tw = sorted(zip(TYPF, typ['typ']['coef']), key=lambda x: -abs(x[1]))
    print('  Typ-Gewichte (+ = Impact-Typ):', ', '.join(f'{f} {c:+.2f}' for f, c in tw[:12]))

    # Kategorie-Profil (nur Produktionsprofil), Test-r je Kategorie
    Z = R[[o is not None and o['nz'] is not None for o in O]].copy()
    NZ = pd.DataFrame([o['nz'] for o in O if o is not None and o['nz'] is not None], index=Z.index)
    CATF = FEATS + [f for f in CATF_EXTRA if f not in FEATS]
    XZ = X.loc[Z.index, CATF]
    catR, cat = {}, {}
    for c in CATS:
        trz, tez = Z.year <= 2016, Z.year >= 2017
        sc = StandardScaler().fit(XZ[trz]); rg = Ridge(alpha=10).fit(sc.transform(XZ[trz]), NZ.loc[trz, c])
        catR[c] = round(float(np.corrcoef(rg.predict(sc.transform(XZ[tez])), NZ.loc[tez, c])[0, 1]), 2)
        sc = StandardScaler().fit(XZ); rg = Ridge(alpha=10).fit(sc.transform(XZ), NZ[c])
        cat[c] = {'mean': sc.mean_.round(6).tolist(), 'scale': sc.scale_.round(6).tolist(), 'coef': rg.coef_.round(6).tolist(), 'icpt': round(float(rg.intercept_), 6)}
    print('NBA-DNA Kategorie-Übersetzung r (Test 2017–22):', catR)
    # Comps: Spieler mit NBA-Saisons, Produktionsprofil, je Gruppe
    H = R[R.ok]
    pool = []
    for i, r in H.iterrows():
        o = O[R.index.get_loc(i)]
        lab = f'Top {int(o["best"])}' if o['best'] <= 150 else ('Rotation' if o['rot'] else 'kurz in der NBA')
        pool.append([r['name'], int(r.year), r.bucket, lab, None if o['c'] is None else round(float(o['c']), 1), [round(float(PR.at[i, f]), 4) for f in COMP],
                     # NBA-9-Cat-Profil (Ø z der ersten 4 NBA-Jahre, CATS-Reihenfolge) fürs DNA-Netz (seit 24.11.2026)
                     None if o['nz'] is None else [round(o['nz'][c], 2) for c in CATS]])
    print(f'NBA-DNA Comp-Pool: {len(pool)} Spieler mit NBA-Karriere')
    return {'models': mods, 'calib': calib, 'cat': cat, 'catFeats': CATF, 'catR': catR, 'auc': res, 'pool': pool, 'n': int(len(R)), 'nNba': int(R.ok.sum()), 'nRot': int(R.rot.sum()), 'nFan': int(R.fan.sum()),
            'nImpact': int(R.impact.sum()), 'typ': typ, 'typFeats': TYPF, 'typCross': cross, 'typN': int(len(N)), 'typSlope': [round(float(x), 5) for x in sl],
            'base': {'rot': round(float(R.rot.mean()), 4), 'fan': round(float(R.fan.mean()), 4), 'impact': round(float(R.impact.mean()), 4)}, 'years': [2010, 2022], 'reliableMin': 250}


if __name__ == '__main__':
    main()
