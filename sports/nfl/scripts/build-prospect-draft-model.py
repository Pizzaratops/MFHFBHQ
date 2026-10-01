#!/usr/bin/env python3
# ============================================================
#  PROSPECT-DRAFT-MODELL (📈 Draft Range, College Scouting)
# ============================================================
#  Lernt aus der eigenen CFBD-Historie (sports/nfl/data/college-scouting.js)
#  und den tatsächlichen NFL-Drafts (nfl-draft-athletic-profiles.js):
#   1. P(gedraftet)          — logistische Regression
#   2. ln(NFL-Pick | gedraftet) — Ridge-Regression, dazu Residuen-Streuung
#  je Position (QB/RB/WR/TE). Trainings-Beispiel = LETZTE College-Saison
#  jedes Spielers mit Ausgang bekannt (Saison ≤ aktuelle − 2).
#  Features (im Browser identisch nachgebaut, tools/nfl-collegescouting.js):
#   - Produktions-Features + Volumen + Größe/Gewicht, je Saison z-standardisiert
#   - cyear  = College-Jahr (Untergrenze, ab erstem Jahr mit Mindest-Volumen, max 5)
#   - p5     = Power-Conference (SEC, Big Ten, ACC, Big 12, Pac-12)
#   - prodYoung = Ø Produktions-z × (4 − College-Jahr): junge Produzenten
#  Backtest (Train ≤ 2021, Test 2022–aktuell−2) steht in meta.backtest.
#
#  Lokal/manuell ausführen (pandas, numpy, scikit-learn), z. B. jährlich
#  nach dem NFL-Draft:  python3 sports/nfl/scripts/build-prospect-draft-model.py
# ============================================================
import json, re, subprocess, unicodedata, datetime
import numpy as np, pandas as pd
from sklearn.linear_model import LogisticRegression, Ridge
from sklearn.metrics import roc_auc_score
from scipy.stats import spearmanr

def load_js(path, name):
    out = subprocess.run(['node', '-e', f"const fs=require('fs');process.stdout.write(JSON.stringify(new Function(fs.readFileSync('{path}','utf8')+';return {name}')()))"], capture_output=True, text=True, check=True).stdout
    return json.loads(out)

S = load_js('sports/nfl/data/college-scouting.js', 'COLLEGE_SCOUTING')
A = load_js('sports/nfl/data/nfl-draft-athletic-profiles.js', 'NFL_DRAFT_ATHLETIC_PROFILES')
cur = S['meta']['currentSeason']
P5 = ['SEC', 'Big Ten', 'ACC', 'Big 12', 'Pac-12']
VOL = {'WR': ['yds', 'td'], 'TE': ['yds', 'td'], 'RB': ['rushYds', 'recYds'], 'QB': ['passYds', 'rushYds']}
feats = S['meta']['features']

def nk(s):
    s = unicodedata.normalize('NFD', s or '').encode('ascii', 'ignore').decode().lower()
    s = re.sub(r'\b(jr|sr|ii|iii|iv|v)\b\.?', '', s); return re.sub(r'[^a-z0-9]', '', s)
def last_tok(n):
    t = re.sub(r'\b(jr|sr|ii|iii|iv|v)\b\.?', '', unicodedata.normalize('NFD', n).encode('ascii', 'ignore').decode().lower()).replace('.', '').split()
    return t[-1] if t else ''
def tnorm(s): return re.sub(r'[^a-z]', '', unicodedata.normalize('NFD', s or '').encode('ascii', 'ignore').decode().lower())
dr, by_last = {}, {}
for l in A.values():
    for x in l:
        dr.setdefault(x['nameKey'], []).append(x); by_last.setdefault(last_tok(x['name']), []).append(x)
def label(r):
    for c in dr.get(nk(r['name']), []):
        if r['year'] < c['draftYear'] <= r['year'] + 2: return c['draftPick']
    cs = [c for c in by_last.get(last_tok(r['name']), []) if r['year'] < c['draftYear'] <= r['year'] + 2
          and tnorm(r['team']) and any(tnorm(r['team']) == tnorm(col) for col in (c.get('college') or '').split(';'))]
    return cs[0]['draftPick'] if len(cs) == 1 else np.nan

rows = [dict(r, pos=pos, year=int(y)) for y, bp in S['seasons'].items() for pos, lst in bp.items() for r in lst]
d = pd.DataFrame(rows)
d['rawId'] = d.rawId.astype(str)
first = d.groupby('rawId').year.min()
d['cyear'] = (d.year - d.rawId.map(first) + 1).clip(upper=5)
d['p5'] = d.conf.isin(P5).astype(int)

model = {'P5': P5, 'vol': VOL, 'pos': {}, 'backtest': {}}
for pos in ['WR', 'RB', 'TE', 'QB']:
    x = d[d.pos == pos].copy()
    base = feats[pos] + VOL[pos] + ['heightIn', 'weightLb']
    for f in base:
        x[f + '_z'] = x.groupby('year')[f].transform(lambda s: (s - s.mean()) / (s.std() + 1e-9)).fillna(0)
    x['prodYoung'] = x[[f + '_z' for f in feats[pos]]].mean(axis=1) * (4 - x.cyear.clip(1, 4))
    F = [f + '_z' for f in base] + ['cyear', 'p5', 'prodYoung']
    last = x.sort_values('year').groupby('rawId').tail(1).copy()
    last['pick'] = last.apply(label, axis=1); last['dr'] = last.pick.notna().astype(int)
    h = last[last.year <= cur - 2]
    QS = np.linspace(0, 1, 21)
    def fit(tr):
        lg = LogisticRegression(C=0.5, max_iter=3000).fit(tr[F], tr.dr)
        dd = tr[tr.dr == 1]
        rg = Ridge(alpha=5).fit(dd[F], np.log(dd.pick))
        # Kalibrierung (Quantil-Mapping): Ridge zieht alles zur Mitte, die
        # Reihenfolge stimmt aber -> vorhergesagte Quantile auf die echte
        # Pick-Verteilung abbilden, damit Top-Prospects auch Top-Picks bekommen.
        pr = rg.predict(dd[F])
        cal = [list(np.quantile(pr, QS)), list(np.quantile(np.log(dd.pick), QS))]
        sd = float(np.std(np.log(dd.pick) - np.interp(pr, cal[0], cal[1])))
        return lg, rg, sd, cal
    tr, te = h[h.year <= 2021], h[h.year >= 2022]
    lg, rg, sd, cal = fit(tr)
    p = lg.predict_proba(te[F])[:, 1]
    tdd = te[te.dr == 1]
    model['backtest'][pos] = {'test': f'{int(te.year.min())}-{int(te.year.max())}', 'n': int(len(te)), 'drafted': int(te.dr.sum()),
                             'aucDrafted': round(float(roc_auc_score(te.dr, p)), 3),
                             'spearmanPick': round(float(spearmanr(rg.predict(tdd[F]), tdd.pick).correlation), 3),
                             'medAbsLogErr': round(float(np.median(np.abs(np.interp(rg.predict(tdd[F]), cal[0], cal[1]) - np.log(tdd.pick)))), 3)}
    lg, rg, sd, cal = fit(h)  # final: alle Jahrgänge mit bekanntem Ausgang
    model['pos'][pos] = {'base': base, 'prod': feats[pos], 'features': F,
                         'logit': {'coef': [round(float(c), 5) for c in lg.coef_[0]], 'b': round(float(lg.intercept_[0]), 5)},
                         'pick': {'coef': [round(float(c), 5) for c in rg.coef_], 'b': round(float(rg.intercept_), 5), 'sd': round(sd, 4),
                                  'cal': [[round(float(v), 4) for v in cal[0]], [round(float(v), 4) for v in cal[1]]]},
                         'n': int(len(h)), 'drafted': int(h.dr.sum())}
    print(pos, model['backtest'][pos])

model['builtAt'] = datetime.date.today().isoformat()
model['trainedThrough'] = int(cur - 2)
with open('sports/nfl/data/prospect-draft-model.js', 'w', encoding='utf-8') as f:
    f.write(f"""// ============================================================
//  PROSPECT_DRAFT_MODEL — P(gedraftet) + erwarteter NFL-Pick je Position
// ============================================================
//  GENERIERT von sports/nfl/scripts/build-prospect-draft-model.py
//  ({model['builtAt']}). Nicht von Hand editieren. Methodik + Backtest
//  siehe Script-Kopf bzw. meta „backtest“ unten.
// ============================================================

const PROSPECT_DRAFT_MODEL = {json.dumps(model)};
""")
print('geschrieben')
