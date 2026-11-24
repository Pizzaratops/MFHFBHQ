#!/usr/bin/env python3
# ============================================================
#  PROSPECT-COMP-POOL (🏈 NFL Comps, College Scouting) — 25.11.2026
# ============================================================
#  Ersetzt den alten NFL Profile Comp (Produktion + Größe/Gewicht,
#  Mahalanobis), weil dessen Comps den NFL-Erfolg praktisch nicht
#  vorhersagten (Backtest Drafts 2015–2023, Comps nur aus anderen
#  Jahrgängen, Spearman ρ zwischen Ø-Outcome der 10 Comps und eigenem
#  Outcome): WR 0,08 · RB 0,19 · TE 0,11 · QB 0,25. Größe + Gewicht allein
#  ≈ 0 (WR-Gewicht sogar negativ).
#
#  Neue Distanz (gewichtet, standardisiert, euklidisch), gleich für alle
#  Positionen, in beiden Zeiträumen (2015–19 / 2020–23) stabil:
#    Produktions-z der letzten Saison (5 Features) × 0,5
#    Volumen-z (2 Features)                         × 0,5
#    Breakout-Jahr (erstes College-Jahr mit Ø Produktions-z > 0,5, nie = 6) × 2
#    College-Jahr der letzten Saison (yrs, seit HS-Abschluss)               × 1
#    Karriere-Bestwert Ø Produktions-z (bestProd)                           × 1
#  Backtest neu: WR 0,28 · RB 0,30 · TE 0,16 · QB 0,50 (zum Vergleich:
#  Draftpick allein 0,54–0,62). Die Werte rechnet das Script bei jedem Lauf
#  neu (meta.backtest).
#
#  Pool = alle gedrafteten QB/RB/WR/TE der Drafts 2014–(aktuell−1) mit
#  CFBD-Historie (Zuordnung wie build-prospect-draft-model.py) + NFL-Outcome
#  Jahr 1–3 (nflverse, PPR-Gesamtpunkte, Top-24 WR/RB bzw. Top-12 TE/QB).
#  Jahrgänge ohne volle 3 Jahre: Outcome „bisher“ (done = false).
#
#  Im Browser (tools/nfl-collegescouting.js, CP) werden die Prospect-Werte
#  exakt so gebaut (gleiche z je Saison + Position, gleiche Breakout-Regel)
#  und mit meta.mu/sd/w standardisiert.
#
#  Lokal/manuell ausführen (pandas, numpy, scipy; lädt nflverse-CSV), z. B.
#  jährlich nach der NFL-Saison bzw. nach dem Draft:
#    python3 sports/nfl/scripts/build-prospect-comp.py
# ============================================================
import io, json, re, subprocess, unicodedata, datetime, urllib.request, os
import numpy as np, pandas as pd
from scipy.stats import spearmanr

REL = 'https://github.com/nflverse/nflverse-data/releases/download'
OUT = 'sports/nfl/data/prospect-comp.js'
CACHE = os.environ.get('NFLVERSE_CACHE', '/tmp/nflverse-cache')
os.makedirs(CACHE, exist_ok=True)

def get_csv(path):
    f = os.path.join(CACHE, path.replace('/', '_'))
    if not os.path.exists(f):
        with urllib.request.urlopen(f'{REL}/{path}', timeout=300) as r, open(f, 'wb') as o: o.write(r.read())
    return pd.read_csv(f, low_memory=False)

def load_js(path, name):
    out = subprocess.run(['node', '-e', f"const fs=require('fs');process.stdout.write(JSON.stringify(new Function(fs.readFileSync('{path}','utf8')+';return {name}')()))"],
                         capture_output=True, text=True, check=True).stdout
    return json.loads(out)

S = load_js('sports/nfl/data/college-scouting.js', 'COLLEGE_SCOUTING')
A = load_js('sports/nfl/data/nfl-draft-athletic-profiles.js', 'NFL_DRAFT_ATHLETIC_PROFILES')
RM = load_js('sports/nfl/data/prospect-recruit.js', 'PROSPECT_RECRUIT')
CUR = int(S['meta']['currentSeason'])
feats = S['meta']['features']
POS = ['WR', 'RB', 'TE', 'QB']
VOL = {'WR': ['yds', 'td'], 'TE': ['yds', 'td'], 'RB': ['rushYds', 'recYds'], 'QB': ['passYds', 'rushYds']}
TOP = {'WR': 24, 'RB': 24, 'TE': 12, 'QB': 12}
W = {'prod': 0.5, 'vol': 0.5, 'boY': 2.0, 'yrs': 1.0, 'bestProd': 1.0}
BO_NEVER = 6

def nk(s):
    s = unicodedata.normalize('NFD', s or '').encode('ascii', 'ignore').decode().lower()
    s = re.sub(r'\b(jr|sr|ii|iii|iv|v)\b\.?', '', s); return re.sub(r'[^a-z0-9]', '', s)
def last_tok(n):
    t = re.sub(r'\b(jr|sr|ii|iii|iv|v)\b\.?', '', unicodedata.normalize('NFD', n).encode('ascii', 'ignore').decode().lower()).replace('.', '').split()
    return t[-1] if t else ''
def tnorm(s): return re.sub(r'[^a-z]', '', unicodedata.normalize('NFD', s or '').encode('ascii', 'ignore').decode().lower())

dr, by_last = {}, {}
for pos, l in A.items():
    for x in l:
        x['pos'] = pos; dr.setdefault(x['nameKey'], []).append(x); by_last.setdefault(last_tok(x['name']), []).append(x)
def label(r):
    for c in dr.get(nk(r['name']), []):
        if r['year'] < c['draftYear'] <= r['year'] + 2: return dict(c, exact=1)
    cs = [c for c in by_last.get(last_tok(r['name']), []) if r['year'] < c['draftYear'] <= r['year'] + 2
          and tnorm(r['team']) and any(tnorm(r['team']) == tnorm(col) for col in (c.get('college') or '').split(';'))]
    return dict(cs[0], exact=0) if len(cs) == 1 else None

# ---------- College-Features (identisch zum Browser: z je Saison + Position) ----------
rows = [dict(r, pos=pos, year=int(y)) for y, bp in S['seasons'].items() for pos, lst in bp.items() if pos in POS for r in lst]
d = pd.DataFrame(rows); d['rawId'] = d.rawId.astype(str)
first_all = d.groupby('rawId').year.min()  # Browser: collegeYear() über alle Positionen
d['hs'] = d.rawId.map(lambda k: (RM.get(k) or [None])[0])
d['yrs'] = np.where(d.hs.notna(), d.year - d.hs + 1, d.year - d.rawId.map(first_all) + 1)
parts = []
for pos in POS:
    x = d[d.pos == pos].copy()
    for f in feats[pos] + VOL[pos]:
        g = x.groupby('year')[f]
        x[f + '_z'] = (x[f] - g.transform('mean')) / (g.transform('std') + 1e-9)
    zc = [f + '_z' for f in feats[pos]]
    # Browser: fehlender Wert → z = 0, Mittel über alle Produktions-Features
    x['prodZ'] = x[zc].fillna(0).mean(axis=1)
    x = x.sort_values('year')
    x['bestProd'] = x.groupby('rawId').prodZ.cummax()
    x['boYrs'] = np.where(x.prodZ > 0.5, x.yrs, np.nan)
    x['boY'] = x.groupby('rawId').boYrs.transform(lambda v: v.cummin().ffill()).fillna(BO_NEVER)
    last = x.groupby('rawId').tail(1).copy()
    parts.append(last)
c = pd.concat(parts)
lab = c.apply(label, axis=1)
c['draftYear'] = lab.map(lambda v: v['draftYear'] if v else np.nan)
c['draftPick'] = lab.map(lambda v: v['draftPick'] if v else np.nan)
c['exact'] = lab.map(lambda v: v.get('exact', 0) if v else 0)
c = c[c.draftPick.notna() & c.draftYear.between(2014, CUR - 1)].copy()
c['draftYear'] = c.draftYear.astype(int); c['draftPick'] = c.draftPick.astype(int)
c['gap'] = (c.draftYear - c.year).abs()
c = c.sort_values(['exact', 'gap'], ascending=[False, True]).drop_duplicates(['draftYear', 'draftPick'])

dp = get_csv('draft_picks/draft_picks.csv')
dp = dp[dp.season.between(2014, CUR - 1)][['season', 'pick', 'round', 'gsis_id', 'pfr_player_name', 'position']]
dp.columns = ['draftYear', 'draftPick', 'round', 'gsis', 'nflName', 'dpPos']
c = c.merge(dp, on=['draftYear', 'draftPick'], how='inner')
c = c[c.dpPos == c.pos].copy()  # Position muss passen (sonst falsche Zuordnung)

# ---------- NFL-Outcome Jahre 1–3 ----------
st = get_csv('player_stats/player_stats_season.csv')
st = st[st.season_type == 'REG'][['player_id', 'season', 'position', 'fantasy_points_ppr', 'games']]
extra = []
for y in range(int(st.season.max()) + 1, CUR + 1):
    try:
        s2 = get_csv(f'stats_player/stats_player_reg_{y}.csv')[['player_id', 'season', 'position', 'fantasy_points_ppr', 'games']]
        extra.append(s2)
    except Exception as e:
        print('übersprungen', y, e)
st = pd.concat([st] + extra, ignore_index=True)
st = st[st.season >= 2014]
st['rank'] = st.groupby(['season', 'position']).fantasy_points_ppr.rank(ascending=False, method='min')
done_seasons = set(range(2014, CUR))  # laufende Saison zählt nicht als abgeschlossen
def outcome(r):
    p = st[(st.player_id == r.gsis) & st.season.between(r.draftYear, r.draftYear + 2) & st.season.isin(done_seasons)]
    best = p['rank'].min() if len(p) else np.nan
    nTop = int((p['rank'] <= TOP[r.pos]).sum())
    return pd.Series({'best': None if best != best else int(best), 'nTop': nTop, 'done': bool(r.draftYear + 2 <= CUR - 1)})
c = c.join(c.apply(outcome, axis=1))
c['hit'] = (c.nTop > 0).astype(int)

# ---------- Comp-Vektoren + Backtest ----------
def cols(pos): return [f + '_z' for f in feats[pos]] + [f + '_z' for f in VOL[pos]] + ['boY', 'yrs', 'bestProd']
def wvec(pos): return np.array([W['prod']] * len(feats[pos]) + [W['vol']] * len(VOL[pos]) + [W['boY'], W['yrs'], W['bestProd']])

def loco(dd, Z, y):
    yrs = dd.draftYear.values; pr = []
    for i in range(len(dd)):
        m = yrs != yrs[i]; dist = ((Z[m] - Z[i]) ** 2).sum(1); idx = np.argsort(dist)[:10]; pr.append(y[m][idx].mean())
    return float(spearmanr(pr, y).correlation)

model = {'version': 1, 'builtAt': datetime.date.today().isoformat(), 'weights': W, 'boNever': BO_NEVER, 'top': TOP, 'pos': {}, 'pool': {}, 'backtest': {}}
for pos in POS:
    x = c[c.pos == pos].copy()
    F = cols(pos)
    X = x[F].astype(float).fillna(0).values
    mu, sd = X.mean(0), X.std(0) + 1e-9
    w = wvec(pos)
    # Backtest auf Jahrgängen mit vollem Outcome
    bt = x[x.done]
    if len(bt) > 30:
        Xb = bt[F].astype(float).fillna(0).values
        Zb = (Xb - Xb.mean(0)) / (Xb.std(0) + 1e-9) * np.sqrt(w)
        yb = -np.log(bt.best.fillna(150).astype(float).clip(upper=150).values)
        Zp = (Xb - Xb.mean(0)) / (Xb.std(0) + 1e-9)
        model['backtest'][pos] = {'n': int(len(bt)), 'rhoNew': round(loco(bt, Zb, yb), 3), 'rhoProdOnly': round(loco(bt, Zp[:, :len(feats[pos])], yb), 3),
                                  'classes': f'{int(bt.draftYear.min())}–{int(bt.draftYear.max())}'}
    model['pos'][pos] = {'features': F, 'prod': feats[pos], 'vol': VOL[pos], 'mu': [round(float(v), 5) for v in mu], 'sd': [round(float(v), 5) for v in sd],
                         'w': [float(v) for v in w], 'n': int(len(x))}
    model['pool'][pos] = [{'id': str(r.rawId), 'n': r.nflName, 'cn': r['name'], 't': r.team, 'yr': int(r.year), 'dy': int(r.draftYear), 'pk': int(r.draftPick),
                           'v': [None if (v != v) else round(float(v), 4) for v in r[F].values],
                           'b': r.best, 'k': int(r.nTop), 'd': bool(r.done)} for _, r in x.iterrows()]
    print(pos, 'Pool', len(x), 'Backtest', model['backtest'].get(pos))

with open(OUT, 'w', encoding='utf-8') as f:
    f.write(f"""// ============================================================
//  PROSPECT_COMP — Comp-Pool für 🏈 NFL Comps (College Scouting)
// ============================================================
//  GENERIERT von sports/nfl/scripts/build-prospect-comp.py
//  ({model['builtAt']}). Nicht von Hand editieren. Methodik + Backtest
//  siehe Script-Kopf bzw. meta „backtest“ unten.
//  pool[pos][]: id = CFBD-rawId, n = NFL-Name, cn = College-Name, t = College,
//  yr = letzte College-Saison, dy/pk = Draftjahr/-pick, v = Rohwerte in der
//  Reihenfolge pos[POS].features, b = bester PPR-Positionsrang in Jahr 1–3,
//  k = Anzahl Top-Saisons (Top-24 WR/RB, Top-12 TE/QB), d = 3 Jahre komplett.
// ============================================================

const PROSPECT_COMP = {json.dumps(model, ensure_ascii=False, separators=(',', ':'))};
""")
print('geschrieben', OUT, os.path.getsize(OUT) // 1024, 'KB')
