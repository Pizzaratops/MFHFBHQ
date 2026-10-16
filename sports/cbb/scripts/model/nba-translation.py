#!/usr/bin/env python3
# ============================================================
#  NBA-Translation („Player DNA“) für College-Spieler (Dizzle CBB), 16.10.2026
# ============================================================
#  Frage: Setzt sich ein College-Spieler in der NBA durch, und welche seiner Fantasy-
#  Kategorien nimmt er mit?
#
#  Lernt aus 2009–2022: letzte College-Saison (hoopR-Boxscores, ESPN) → NBA-Saisons 1–4
#  (BBM-Exporte sports/nba/data/last-season-stats-*.js). Ziel:
#   - P(Rotation): mind. eine Saison mit ≥ 40 Spielen und ≥ 18 Min.
#   - P(Fantasy):  mind. eine Saison in den Top 150 (9-Cat, BBM-Wert pro Spiel, ≥ 40 Spiele)
#   - NBA-Kategorie-Profil (z je Kategorie), nur aus Spielern, die es geschafft haben
#  Merkmale: Per-40 (Punkte, Rebounds off/def, Assists, Steals, Blocks, TO, Fouls, Dreier-
#  Versuche), Wurfquoten (geschrumpft), Usage, Minuten, Schule (SRS), College-Jahr, Position.
#  Test: trainiert bis 2016, geprüft an 2017–2022 (AUC). Danach auf allen Jahren für die Ausgabe.
#
#  Aufruf: CBB_HIST=<Ordner mit players/teams.parquet 2006–2026 + nba.json> python3 nba-translation.py
#  Schreibt sports/cbb/data/nba-dna.js (CBB_NBA_DNA).
# ============================================================
import os, re, json, unicodedata
import numpy as np, pandas as pd
from sklearn.linear_model import LogisticRegression, Ridge
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import roc_auc_score

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, '..', '..', '..', '..'))
H = os.environ.get('CBB_HIST', '/home/claude/cbbhist')
CUR = int(os.environ.get('CBB_LAST_SEASON', '2026'))   # letzte abgeschlossene College-Saison

def key(n):
    n = unicodedata.normalize('NFD', str(n).lower()); n = ''.join(c for c in n if unicodedata.category(c) != 'Mn')
    n = re.sub(r"[.'’`]", '', n); n = re.sub(r'\b(jr|sr|iii|ii|iv|v)\b', '', n); n = re.sub(r'[^a-z ]', ' ', n)
    return ' '.join(n.split())

# ---------- College: Spieler-Saisons (über Teams summiert) ----------
P0 = pd.read_parquet(H + '/players.parquet'); T = pd.read_parquet(H + '/teams.parquet')
ST = ['min', 'pts', 'reb', 'oreb', 'dreb', 'ast', 'stl', 'blk', 'to', 'tpm', 'tpa', 'fgm', 'fga', 'ftm', 'fta', 'pf', 'g', 'starts']
main = P0.sort_values('min').drop_duplicates(['pid', 'season'], keep='last')[['pid', 'season', 'tid', 'name', 'pos']]
P = P0.groupby(['pid', 'season'])[ST].sum().reset_index().merge(main, on=['pid', 'season'])
P = P.merge(T[['tid', 'season', 'srs', 'pace']], on=['tid', 'season'], how='left')
P['srs'] = P.srs.fillna(T.srs.quantile(0.2))
P = P.sort_values(['pid', 'season'])
P['yr'] = P.groupby('pid').cumcount() + 1                    # College-Jahr (ab 2006 gezählt)
P['first'] = P.groupby('pid').season.transform('min')
P['last'] = P.groupby('pid').season.transform('max')
P['k'] = P.name.map(key)

def features(D):
    m = D['min'].clip(lower=1)
    f = pd.DataFrame(index=D.index)
    for s in ['pts', 'oreb', 'dreb', 'ast', 'stl', 'blk', 'to', 'tpa', 'pf', 'fta']:
        f[s + '40'] = 40 * D[s] / m
    f['ft'] = (D.ftm + 0.70 * 25) / (D.fta + 25)              # Quoten Richtung Schnitt geschrumpft
    f['tp'] = (D.tpm + 0.33 * 40) / (D.tpa + 40)
    f['two'] = ((D.fgm - D.tpm) + 0.48 * 50) / ((D.fga - D.tpa) + 50)
    f['usg'] = 40 * (D.fga + 0.44 * D.fta + D.to) / m
    f['mpg'] = D['min'] / D.g.clip(lower=1)
    f['srs'] = D.srs
    f['yr'] = D.yr.clip(upper=5)
    f['young'] = (D.yr == 1).astype(float)
    f['big'] = D.pos.fillna('').str.startswith(('C', 'F')).astype(float) * 0 + D.pos.fillna('').eq('C').astype(float)
    f['guard'] = D.pos.fillna('').eq('G').astype(float)
    f['stlblk'] = np.log1p(f.stl40) + np.log1p(f.blk40)       # „Athletik“-Signal (Steals + Blocks)
    return f

# ---------- NBA ----------
NBA = {int(y): v for y, v in json.load(open(H + '/nba.json')).items()}
first_nba, seasons = {}, {}
for y in sorted(NBA):
    rows = [r for r in NBA[y] if r.get('g')]
    elig = sorted([r for r in rows if r['g'] >= 40], key=lambda r: -(r.get('c') or -99))
    rk = {key(r['name']): i + 1 for i, r in enumerate(elig)}
    for r in rows:
        k = key(r['name'])
        first_nba.setdefault(k, y)
        seasons.setdefault(k, {})[y] = dict(r, rank=rk.get(k))

def outcome(k, L):
    if k not in first_nba or first_nba[k] <= L: return None   # vor der letzten College-Saison schon NBA → anderer Spieler
    S = [seasons[k][y] for y in range(L + 1, L + 5) if y in seasons[k]]
    rot = any(s['g'] >= 40 and s['min'] >= 18 for s in S)
    fan = any(s['g'] >= 40 and s['rank'] and s['rank'] <= 150 for s in S)
    best = min([s['rank'] for s in S if s['rank']] or [999])
    zs = [s['z'] for s in S if s['g'] >= 30 and s.get('z')]
    z = {c: float(np.mean([q[c] for q in zs])) for c in zs[0]} if zs else None
    best_s = min(S, key=lambda s: s['rank'] or 999) if S else None
    return dict(rot=rot, fan=fan, best=best, z=z, ok=bool(S), bs=best_s)

# Trainings-Pool: letzte College-Saison 2009–2022, mind. 300 Minuten (Spieler, die gingen)
D = P[(P.season == P['last']) & (P.season.between(2009, 2022)) & (P['min'] >= 300) & (P['first'] >= 2007)].copy()
# Namen, die im selben Abschlussjahr doppelt vorkommen, sind nicht eindeutig zuzuordnen
dup = D.groupby(['k', 'season']).pid.transform('count') > 1
D = D[~dup]
O = [outcome(k, L) for k, L in zip(D.k, D.season)]
D['rot'] = [bool(o and o['rot']) for o in O]; D['fan'] = [bool(o and o['fan']) for o in O]
D['nba'] = [bool(o and o['ok']) for o in O]; D['best'] = [o['best'] if o else 999 for o in O]
D['nz'] = [o['z'] if o else None for o in O]; D['bs'] = [o['bs'] if o else None for o in O]
X = features(D)
FEATS = list(X.columns)
print(f'Training: {len(D)} Abschluss-Saisons 2009–2022 · NBA-Spiele {D.nba.sum()} · Rotation {D.rot.sum()} · Fantasy-Top-150 {D.fan.sum()}')

def fit(Xa, ya, C=0.3):
    sc = StandardScaler().fit(Xa); m = LogisticRegression(C=C, max_iter=3000, class_weight=None).fit(sc.transform(Xa), ya)
    return sc, m
tr, te = D.season <= 2016, D.season >= 2017
res = {}
for tgt in ['rot', 'fan']:
    sc, m = fit(X[tr], D.loc[tr, tgt])
    p = m.predict_proba(sc.transform(X[te]))[:, 1]
    res[tgt] = roc_auc_score(D.loc[te, tgt], p)
    # Top-k-Trefferquote im Test: von den 30 höchsten Wahrscheinlichkeiten je Jahr
    t = D[te].assign(p=p)
    hit = t.sort_values('p', ascending=False).groupby('season').head(30)[tgt].mean()
    print(f'{tgt}: AUC Test 2017–22 = {res[tgt]:.3f} · Top-30 je Jahrgang treffen {100 * hit:.0f} % (Basis {100 * D.loc[te, tgt].mean():.1f} %)')

# Endmodelle auf allen Jahren
SC_R, M_R = fit(X, D.rot); SC_F, M_F = fit(X, D.fan)
coef = sorted(zip(FEATS, M_R.coef_[0]), key=lambda x: -abs(x[1]))
print('Wichtigste Merkmale (Rotation):', ', '.join(f'{f} {c:+.2f}' for f, c in coef[:10]))

# ---------- Kategorie-Translation (nur NBA-Rotationsspieler) ----------
CATS = ['pts', 'tpm', 'reb', 'ast', 'stl', 'blk', 'fgImpact', 'ftImpact', 'to']
R = D[D.rot & D.nz.notna()].copy()
XR = features(R)
CAT_SRC = {'pts': 'pts40', 'tpm': 'tpa40', 'reb': 'dreb40', 'ast': 'ast40', 'stl': 'stl40', 'blk': 'blk40', 'fgImpact': 'two', 'ftImpact': 'ft', 'to': 'to40'}
TRANS, CAT_R = {}, {}
for c in CATS:
    y = np.array([z[c] for z in R.nz])
    sc = StandardScaler().fit(XR); m = Ridge(alpha=10).fit(sc.transform(XR), y)
    # Test: wie gut sagt das College-Profil die NBA-Kategorie voraus (Rotationsspieler, Zeit-Split)
    rtr, rte = R.season <= 2016, R.season >= 2017
    sc2 = StandardScaler().fit(XR[rtr]); m2 = Ridge(alpha=10).fit(sc2.transform(XR[rtr]), y[rtr.values])
    pr = m2.predict(sc2.transform(XR[rte]))
    CAT_R[c] = float(np.corrcoef(pr, y[rte.values])[0, 1])
    TRANS[c] = (sc, m)
print('Translation je Kategorie (r, Test):', ', '.join(f'{c} {CAT_R[c]:.2f}' for c in CATS))
print(f'Rotationsspieler mit Profil: {len(R)}')

# ---------- Historische Vergleiche: Spieler mit NBA-Karriere ----------
HC = D[D.nba].copy()
XH = features(HC); SH = StandardScaler().fit(X)
COMP_F = ['pts40', 'oreb40', 'dreb40', 'ast40', 'stl40', 'blk40', 'to40', 'tpa40', 'ft', 'tp', 'two', 'usg', 'yr', 'srs']
W = np.array([1.0 if f not in ('yr', 'srs') else 0.6 for f in COMP_F])
sc_c = StandardScaler().fit(X[COMP_F]); HV = sc_c.transform(XH[COMP_F]) * W

# ---------- Anwenden: aktuelle College-Spieler ----------
SD = os.path.join(REPO, 'sports', 'cbb', 'data')
def jsconst(path, name):
    s = open(path, encoding='utf8').read(); i = s.index(f'const {name} = ') + len(f'const {name} = ')
    depth = 0; instr = esc = False
    for j in range(i, len(s)):
        ch = s[j]
        if instr:
            if esc: esc = False
            elif ch == '\\': esc = True
            elif ch == '"': instr = False
            continue
        if ch == '"': instr = True
        elif ch in '[{': depth += 1
        elif ch in ']}':
            depth -= 1
            if depth == 0: break
    return json.loads(re.sub(r'([{,]\s*)([A-Za-z_][A-Za-z0-9_]*)\s*:', r'\1"\2":', s[i:j + 1]))
PROJ = jsconst(os.path.join(SD, 'projections-cbb.js'), 'CBB_PROJECTIONS')
ESPN = jsconst(os.path.join(SD, 'espn-rosters.js'), 'CBB_ESPN_ROSTERS')
espn_id = {}
for sc_, lst in ESPN.items():
    for r in lst: espn_id[(sc_, key(r[1]))] = int(r[0])
C = P[P.season <= CUR].sort_values('season').drop_duplicates('pid', keep='last')
C = C[C['min'] >= 250]
by_pid = C.set_index('pid'); by_k = C.groupby('k').pid.apply(list).to_dict()
NAMES = P.drop_duplicates(['tid']).set_index('tid')
out, nmiss = {}, 0
XC_all = features(C)
for p in PROJ:
    if not p.get('fx') and (p.get('min') or 0) < 15: continue
    k = key(p['name'])
    pid = espn_id.get((p['team'], k))
    if pid is None or pid not in by_pid.index:
        c = by_k.get(k, [])
        pid = c[0] if len(c) == 1 else None
    if pid is None or pid not in by_pid.index: nmiss += 1; continue
    row = by_pid.loc[pid]
    xf = XC_all.loc[[C.index[C.pid == pid][0]]]
    pr = float(M_R.predict_proba(SC_R.transform(xf))[0, 1]); pf = float(M_F.predict_proba(SC_F.transform(xf))[0, 1])
    nz = {c: round(float(TRANS[c][1].predict(TRANS[c][0].transform(xf))[0]), 2) for c in CATS}
    v = sc_c.transform(xf[COMP_F]) * W
    d = np.sqrt(((HV - v) ** 2).sum(1))
    idx = np.argsort(d)[:5]
    comps = []
    for i in idx:
        h = HC.iloc[i]; bs = h.bs
        comps.append([h['name'], int(h.season), round(float(100 / (1 + d[i])), 0),
                      'Top ' + str(int(h.best)) if h.best <= 150 else ('Rotation' if h.rot else 'kurz in der NBA'),
                      round(float(bs['c']), 1) if bs and bs.get('c') is not None else None])
    out[p['name'] + '|' + p['team']] = {'season': int(row.season), 'yr': int(row.yr), 'min': int(row['min']), 'rot': round(pr, 3), 'fan': round(pf, 3), 'nz': nz, 'comps': comps}
print(f'DNA für {len(out)} Spieler ({nmiss} ohne College-Daten ab 250 Min.)')

meta = {'auc': {k: round(v, 3) for k, v in res.items()}, 'n': int(len(D)), 'nNba': int(D.nba.sum()), 'nRot': int(D.rot.sum()), 'nFan': int(D.fan.sum()),
        'catR': {c: round(v, 2) for c, v in CAT_R.items()}, 'base': {'rot': round(float(D.rot.mean()), 4), 'fan': round(float(D.fan.mean()), 4)},
        'years': [2009, 2022], 'cur': CUR,
        'coef': [[f, round(float(c), 2)] for f, c in coef]}
with open(os.path.join(SD, 'nba-dna.js'), 'w', encoding='utf8') as f:
    f.write(f"""// ============================================================
//  CBB_NBA_DNA — NBA-Translation je College-Spieler (sports/cbb/scripts/model/nba-translation.py)
// ============================================================
//  Gelernt aus letzten College-Saisons 2009–2022 → NBA-Saisons 1–4 (BBM 9-Cat).
//  rot = P(NBA-Rotation: Saison mit ≥ 40 Spielen, ≥ 18 Min.), fan = P(Fantasy-Top-150),
//  nz = erwartetes NBA-z je Kategorie (falls er es schafft), comps = ähnlichste College-Profile
//  mit NBA-Karriere [Name, letzte College-Saison, Ähnlichkeit, NBA-Ergebnis, bester BBM-Wert].
//  Basis = letzte College-Saison ({CUR - 1}/{str(CUR)[2:]} oder früher) — „wenn er jetzt ginge“.
// ============================================================

const CBB_NBA_DNA = {json.dumps({'meta': meta, 'p': out}, ensure_ascii=False, separators=(',', ':'))};
""")
