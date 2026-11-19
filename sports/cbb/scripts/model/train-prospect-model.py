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
         'stlPct', 'ftr', 'tpa40', 'tpPct', 'ftPct', 'rimPct', 'rimRate', 'dunk40', 'pts40', 'mpg', 'minPct']
# Merkmale des Draft-Modells
FEATS = ['age', 'cls', 'rec', 'recTop', 'unrec', 'htIn', 'power', 'bpm', 'obpm', 'dbpm', 'usg', 'ts',
         'orbPct', 'drbPct', 'astPct', 'toPct', 'blkPct', 'stlPct', 'ftr', 'tpa40', 'tpPct',
         'ftPct', 'rimPct', 'dunk40', 'mpg', 'minPct', 'bpmJump']
# Merkmale des VORSAISON-Modells (ohne Produktion der laufenden Saison): früh in der Saison
# ist die Produktion ein winziges Sample — dann tragen Recruiting, Alter, Größe und Vorjahr.
# build-college-prospects.js blendet: Gewicht Produktionsmodell = min(1, Saison-Minuten / BLEND_MIN).
PRE = ['age', 'cls', 'rec', 'recTop', 'unrec', 'htIn', 'power', 'hasPrev', 'prevBpm', 'prevObpm', 'prevMpg', 'prevUsg']
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
    ht = D.ht.fillna('').str.extract(r'(\d+)-(\d+)').astype(float)
    D['htIn'] = ht[0] * 12 + ht[1]
    D['clsN'] = D.cls.map(CLS)
    D['power'] = D.conf.isin(POWER).astype(float)
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
        'power': sorted(POWER), 'bucket': BUCKET, 'comp': {'feats': COMP, 'cov': cov, 'pool': comp_pool},
    }
    with open(OUT, 'w') as f: json.dump(model, f, separators=(',', ':'), ensure_ascii=False)
    print(f'→ {os.path.relpath(OUT)} ({os.path.getsize(OUT) // 1024} KB)')

    # Stichprobe: Vorhersage für die eigenen Trainingsdaten 2026 (Plausibilität)
    t26 = T[T.year == LAST_DRAFT].copy()
    xs = sc.transform(X.loc[t26.index])
    t26['p'] = lg.predict_proba(xs)[:, 1]; t26['ePick'] = np.exp(rg.predict(xs))
    print(t26.sort_values('p', ascending=False).head(15)[['name', 'team', 'cls', 'p', 'ePick', 'pick']].to_string(index=False))


if __name__ == '__main__':
    main()
