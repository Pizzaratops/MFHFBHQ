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
#   - yrs    = College-Jahr seit HS-Abschluss (Recruiting-Jahrgang, max 5);
#              ohne Recruiting-Eintrag Untergrenze ab erster FBS-Saison
#   - p5     = Power-Conference (SEC, Big Ten, ACC, Big 12, Pac-12)
#   - prodYoung2 = Ø Produktions-z × (4 − yrs): junge Produzenten
#   - ratingZ / unrated = 247-Composite-Rating als Talent-Prior (fehlend = 0,80)
#   - bestProd / bestVol / nSeas = Karriere: beste Saison (Produktion bzw.
#              Volumen, z) bis inkl. dieser Saison, Anzahl erfasster Saisons
#              (nur WR + QB: bei RB/TE verschlechterte es den Backtest)
#  Backtest: zwei zeitliche Folds (Train ≤ 2018 → Test 2019–21, Train ≤ 2021
#  → Test 2022–aktuell−2), Mittelwert in meta.backtest.
#  v2 (17.11.2026) gegenüber v1 im selben Backtest: Pick-Reihenfolge ρ WR 0,44→0,57,
#  RB 0,35→0,44, TE 0,31→0,40, QB 0,44→0,55; Draft-AUC gleich oder besser.
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
RM = load_js('sports/nfl/data/prospect-recruit.js', 'PROSPECT_RECRUIT')  # build-prospect-recruit-map.js
REC = {'impute': 0.80, 'center': 0.86, 'scale': 0.05}
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
d['hs'] = d.rawId.map(lambda k: (RM.get(k) or [None])[0])
d['yrs'] = np.where(d.hs.notna(), d.year - d.hs + 1, d.cyear).clip(1, 5)
d['rating'] = d.rawId.map(lambda k: (RM.get(k) or [None, None])[1])
d['ratingZ'] = ((d.rating.fillna(REC['impute']) - REC['center']) / REC['scale']).clip(-3, 3)
d['unrated'] = d.rating.isna().astype(int)
CAREER = {'WR': True, 'RB': False, 'TE': False, 'QB': True}

model = {'version': 2, 'P5': P5, 'vol': VOL, 'recruit': REC, 'pos': {}, 'backtest': {}}
for pos in ['WR', 'RB', 'TE', 'QB']:
    x = d[d.pos == pos].copy()
    base = feats[pos] + VOL[pos] + ['heightIn', 'weightLb']
    for f in base:
        x[f + '_z'] = x.groupby('year')[f].transform(lambda s: (s - s.mean()) / (s.std() + 1e-9)).fillna(0)
    x['prodZ'] = x[[f + '_z' for f in feats[pos]]].mean(axis=1)
    x['volZ'] = x[[f + '_z' for f in VOL[pos]]].mean(axis=1)
    x['prodYoung2'] = x.prodZ * (4 - x.yrs.clip(1, 4))
    x = x.sort_values('year')
    x['bestProd'] = x.groupby('rawId').prodZ.cummax()
    x['bestVol'] = x.groupby('rawId').volZ.cummax()
    x['nSeas'] = x.groupby('rawId').cumcount() + 1
    F = [f + '_z' for f in base] + ['yrs', 'p5', 'prodYoung2', 'ratingZ', 'unrated'] + (['bestProd', 'bestVol', 'nSeas'] if CAREER[pos] else [])
    last = x.groupby('rawId').tail(1).copy()
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
    bt = []
    for trmax, a, b in ((2018, 2019, 2021), (2021, 2022, cur - 2)):
        tr, te = h[h.year <= trmax], h[(h.year >= a) & (h.year <= b)]
        lg, rg, sd, cal = fit(tr)
        p = lg.predict_proba(te[F])[:, 1]
        tdd = te[te.dr == 1]
        bt.append((roc_auc_score(te.dr, p), spearmanr(rg.predict(tdd[F]), tdd.pick).correlation,
                   np.median(np.abs(np.interp(rg.predict(tdd[F]), cal[0], cal[1]) - np.log(tdd.pick))), len(te), int(te.dr.sum())))
    model['backtest'][pos] = {'test': f'2019-{int(cur - 2)}', 'n': int(sum(b[3] for b in bt)), 'drafted': int(sum(b[4] for b in bt)),
                             'aucDrafted': round(float(np.mean([b[0] for b in bt])), 3),
                             'spearmanPick': round(float(np.mean([b[1] for b in bt])), 3),
                             'medAbsLogErr': round(float(np.mean([b[2] for b in bt])), 3)}
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
