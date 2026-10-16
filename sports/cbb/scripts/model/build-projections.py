#!/usr/bin/env python3
# ============================================================
#  CBB Projections 2026/27 + Team-Kontext + Dynasty (Dizzle CBB), 16.10.2026
# ============================================================
#  Aufruf:
#    a) Daten neu aufbereiten (einmal pro Saison, braucht hoopR-mbb-data):
#       HOOPR_DIR=<hoopR-mbb-data> CBB_WORK=sports/cbb/scripts/model/cache python3 sports/cbb/scripts/model/prep.py
#    b) Projektion bauen (wöchentlich in cbb-sync.yml nach dem ESPN-Kader-Abgleich, ohne hoopR):
#       CBB_WORK=sports/cbb/scripts/model/cache python3 sports/cbb/scripts/model/build-projections.py
#
#  Drei Schichten:
#   1. Spieler-Profil: Per-40-Raten der letzten 3 Saisons (Gewicht = Minuten × 0,5^Alter),
#      Level-Anpassung bei Wechsel (Team-SRS), Team-Stil (Gegner-Steals/Blocks, Assist-Quote,
#      3er-Anteil, Rebound-Quoten, FT-Rate, TO-Rate des neuen Teams), Entwicklung je Klasse,
#      geschrumpft Richtung Positions-Prior. Neue ohne Daten: Freshman-Prior × NIL-Faktor
#      (kalibriert an den NIL-Preisen 2025 → Ist 2025-26).
#   2. Team-Kontext: Pace und Stil je Schule (Vorjahr 55 %, Vorvorjahr 15 %, Rest D-I-Schnitt;
#      gemessene Jahr-zu-Jahr-Stabilität 0,5–0,6 — der Coach-Effekt überlebt die Kaderwechsel).
#   3. Minuten & Usage: Logit-Modell je Kader (Vorjahresminuten, Qualität im Kader, Konkurrenz
#      auf der Position, Transfer, Klasse, NIL), normiert auf 200 Teamminuten; Usage (FGA/FTA/
#      PTS/AST/TO) teilweise auf das pace-abhängige Team-Volumen gezogen.
#
#  Schreibt sports/cbb/data/:
#   projections-cbb.js       CBB_PROJECTIONS (pro Spiel + Rolle, Archetyp, Usage, Herkunft, Sicherheit);
#                            live gemischt mit echten Spielen von build-live-projections.js
#   team-context.js          CBB_TEAM_CONTEXT (Pace, Stil, Coach, Rotation je Schule)
#  und leagues/cbb/data/rankings.js  DYNASTY_PLAYERS (Dynasty-Rang: Projektion × Restjahre × Draft-Risiko)
# ============================================================
import os, re, json, unicodedata, sys
import numpy as np, pandas as pd
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from model import *  # noqa

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, '..', '..', '..', '..'))
SD = os.path.join(REPO, 'sports', 'cbb', 'data'); LD = os.path.join(REPO, 'leagues', 'cbb', 'data')
Y = int(os.environ.get('CBB_SEASON', '2027'))
PRM = dict(rho1=0.55, rho2=0.15, decay=0.5, lvl=1.25, dev=1.2, m0=150, nilk=0,
           sty={'stl': 0.5, 'blk': 0.3, 'ast': 0.5, 'tpa': 0.3, 'tpm': 0.3, 'oreb': 0.5, 'dreb': 0.5, 'fta': 0.3, 'ftm': 0.3, 'to': 0.4},
           fga_per_poss=0.87, gam=0.5)

def jsconst(path, name):
    s = open(path, encoding='utf8').read()
    i = s.index(f'const {name} = ') + len(f'const {name} = ')
    depth, j, instr, esc = 0, i, False, False
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
    txt = s[i:j + 1]
    txt = re.sub(r'([{,]\s*)([A-Za-z_][A-Za-z0-9_]*)\s*:', r'\1"\2":', txt)  # JS-Objektschlüssel ohne Quotes
    return json.loads(txt)

def key(n):
    n = unicodedata.normalize('NFD', str(n).lower()); n = ''.join(c for c in n if unicodedata.category(c) != 'Mn')
    n = re.sub(r"[.'’`]", '', n); n = re.sub(r'\b(jr|sr|iii|ii|iv|v)\b', '', n); n = re.sub(r'[^a-z ]', ' ', n)
    return ' '.join(n.split())

SCH = jsconst(os.path.join(SD, 'schools.js'), 'CBB_SCHOOLS')
TID = {s['short']: int(s['espn']) for s in SCH}; SHORT = {v: k for k, v in TID.items()}; SNAME = {s['short']: s['name'] for s in SCH}
ESPN = jsconst(os.path.join(SD, 'espn-rosters.js'), 'CBB_ESPN_ROSTERS')
COACH = jsconst(os.path.join(SD, 'espn-rosters.js'), 'CBB_ESPN_COACHES')
try:
    COACH_PREV = jsconst(os.path.join(SD, 'espn-rosters.js'), 'CBB_ESPN_COACHES_PREV')
except Exception:
    COACH_PREV = {}
POOL = jsconst(os.path.join(LD, 'player-pool.js'), 'CBB_PLAYER_POOL')
NILP = jsconst(os.path.join(LD, 'nil-auction.js'), 'CBB_POOL')
NIL = {key(p['name']): p for p in NILP}
DRAFT = {}
try:
    s = open(os.path.join(REPO, 'sports', 'nba', 'data', 'draft2027.js'), encoding='utf8').read()
    for m in re.finditer(r'name:"([^"]+)"', s): DRAFT[key(m.group(1))] = len(DRAFT) + 1
except Exception:
    pass
CLSN = {'FR': 1, 'SO': 2, 'JR': 3, 'SR': 4, 'GR': 5, 'Freshman': 1, 'Sophomore': 2, 'Junior': 3, 'Senior': 4, 'Graduate': 5}

import model as _m
_m.COACH_CHANGE.update(TID[s] for s in TID if COACH.get(s) and COACH_PREV.get(s) and key(COACH[s][0]) != key(COACH_PREV[s]))
print('Trainerwechsel laut ESPN:', ', '.join(sorted(f"{SNAME[s]} ({COACH_PREV[s]} → {COACH[s][0]})" for s in TID if TID[s] in _m.COACH_CHANGE)) or '–')

# ---------- Kader 2026/27: ESPN-Kader (IDs, Klasse, Größe) + Fantrax-Pool ----------
rows, cls, seen = [], {}, set()
hist_names = P[P.season >= Y - 3].sort_values('season').drop_duplicates('pid', keep='last')
by_name = {}
for r in hist_names.itertuples(): by_name.setdefault(key(r.name), []).append(r.pid)
for short, lst in ESPN.items():
    tid = TID.get(short)
    if tid is None: continue
    for pid, name, pos, h, w, c, yrs in lst:
        try: pid = int(pid)
        except Exception: continue
        rows.append(dict(pid=pid, tid=tid, name=name, pos=(pos or 'G')[:1], h=h, school=short, fx=None))
        cls[pid] = (CLSN.get(c, 0), h, pos); seen.add((short, key(name)))
import difflib
espn_names = {short: {key(x[1]): x for x in lst} for short, lst in ESPN.items()}
alias = {}   # (Schule, Fantrax-Key) → ESPN-Key (Spitznamen: Will/William, Kam/Kameron …)
for fx, name, school, pos, elig, status in POOL:
    k = key(name)
    if school not in espn_names or k in espn_names[school]: continue
    last = k.split(' ')[-1]
    c = [e for e in difflib.get_close_matches(k, list(espn_names[school]), n=3, cutoff=0.72) if e.split(' ')[-1] == last]
    if c: alias[(school, k)] = c[0]; seen.add((school, k))
neg = -1
# Fantrax-Spieler, die (noch) nicht im ESPN-Kader stehen (ESPN-Kader teils unvollständig): trotzdem einplanen —
# außer Senior/Graduate der Vorsaison an derselben Schule, deren ESPN-Kader schon voll ist (≥ 12):
# Spielberechtigung vermutlich vorbei (Fantrax-Pool hat noch alte Spieler, z. B. Richie Saunders/BYU).
CLS_LAST = classes(Y - 1)
TEAM_LAST = P[P.season == Y - 1].sort_values('min').drop_duplicates('pid', keep='last').set_index('pid')['tid'].to_dict()
GONE = []
for fx, name, school, pos, elig, status in POOL:
    if school not in TID or (school, key(name)) in seen: continue
    cands = by_name.get(key(name), [])
    pid = cands[0] if len(cands) == 1 else neg
    if pid == neg: neg -= 1
    if pid > 0 and CLS_LAST.get(pid, (0,))[0] >= 4 and TEAM_LAST.get(pid) == TID[school] and len(ESPN.get(school, [])) >= 12:
        GONE.append([name, school]); seen.add((school, key(name))); continue
    rows.append(dict(pid=pid, tid=TID[school], name=name, pos=(pos or 'G')[:1], h=None, school=school, fx=fx))
    seen.add((school, key(name)))
R = pd.DataFrame(rows).drop_duplicates('pid')
R['nil'] = R.name.map(lambda n: (NIL.get(key(n)) or {}).get('value'))
print(f'Vermutlich ohne Spielberechtigung (Senior/Grad, nicht im vollen ESPN-Kader): {len(GONE)} — ' + ', '.join(f'{n} ({sc})' for n, sc in GONE[:12]))
print(f'Kader {Y}: {len(R)} Spieler an {R.tid.nunique()} Schulen ({(R.pid < 0).sum()} ohne ESPN-/Historie-ID), {R.nil.notna().sum()} mit NIL-Wert')

# ---------- Minuten-Modell auf der letzten Saison fitten ----------
Xf = project(Y - 1, roster_from_boxes(Y - 1), classes(Y - 1), PRM)
a = P[P.season == Y - 1].sort_values('min').drop_duplicates('pid', keep='last').set_index('pid')
Xf = Xf[Xf.pid.isin(a.index)]
yv = lg(a.loc[Xf.pid, 'mpg'].values / 40); wv = np.sqrt(a.loc[Xf.pid, 'g'].values)
F = np.column_stack(feat(Xf))[:, :-1]
coef = np.append(np.linalg.lstsq(F * wv[:, None], yv * wv, rcond=None)[0], 0.0)

X = usage(minutes(project(Y, R, cls, PRM), coef), PRM)
X = X.merge(R[['pid', 'h', 'school', 'fx']], on='pid', how='left')

# ---------- Usage %, Rolle, Archetyp ----------
X['poss40'] = X.fga40 + 0.44 * X.fta40 + X.to40
tot = X.assign(v=X.poss40 * X.mpg_hat / 40).groupby('tid').v.sum()
X['usg'] = 100 * X.poss40 / X.tid.map(tot)  # Anteil am Team-Ballbesitz, während er auf dem Feld steht
X['mrank'] = X.groupby('tid').mpg_hat.rank(ascending=False, method='first')
X['role'] = np.where(X.mrank <= 5, 'Starter', np.where(X.mpg_hat >= 15, 'Rotation', np.where(X.mpg_hat >= 8, 'Bank', 'Tiefe')))
X['reb40'] = X.oreb40 + X.dreb40
def arche(r):
    big = r.pos in ('F', 'C') and ((r.h or 0) >= 80 or r.reb40 >= 9)
    t = []
    if r.blk40 >= 2.2: t.append('Rim Protector')
    if big and r.tpa40 >= 4.5: t.append('Stretch Big')
    if big and r.reb40 >= 11: t.append('Rebounder')
    if r.pos != 'G' and r.ast40 >= 4.5: t.append('Point Forward')
    if r.pos == 'G' and r.ast40 >= 6: t.append('Floor General')
    if r.usg >= 26 and r.pts40 >= 19: t.append('Volumen-Scorer')
    if r.tpa40 >= 8.5: t.append('Shooter')
    elif r.tpa40 >= 5.5 and r.stl40 >= 1.6: t.append('3&D')
    if r.fta40 >= 6.5: t.append('Slasher')
    if r.stl40 >= 2.3: t.append('Balldieb')
    return t[:2] or ['Rollenspieler']
X['arche'] = X.apply(arche, axis=1)
X['src'] = np.where(X.W == 0, np.where(X.cls == 1, 'Freshman', 'Neu'), np.where(X.transfer, 'Transfer', 'Rückkehrer'))
X['conf'] = np.clip(X.W / (X.W + 600), 0.05, 0.95).round(2)
last_team = P[P.season == Y - 1].sort_values('min').drop_duplicates('pid', keep='last').set_index('pid')['tid']
X['from'] = X.pid.map(last_team).map(lambda t: SHORT.get(t) or (None if pd.isna(t) else int(t)))
tm = P[P.season == Y - 1][['tid']].drop_duplicates()
try:
    names = pd.read_parquet(B + f'player_box/parquet/player_box_{Y - 1}.parquet', columns=['team_id', 'team_location']).drop_duplicates('team_id')
    LOC = dict(zip(names.team_id.astype(int), names.team_location))
except Exception:
    LOC = {int(k): v for k, v in json.load(open(os.path.join(WORK, 'team_names.json'))).items()} if os.path.exists(os.path.join(WORK, 'team_names.json')) else {}
X['fromName'] = X.pid.map(last_team).map(lambda t: SNAME.get(SHORT.get(t)) if SHORT.get(t) else LOC.get(t))

# ---------- Pro Spiel + 9-Cat-z (Pool: Spieler der Pool-Schulen ab 10 Min.) ----------
G_EXP = 30
pg = lambda k: X[k + '_pg']
X['fgPct'] = 100 * X.fgm40 / X.fga40.replace(0, np.nan); X['ftPct'] = 100 * X.ftm40 / X.fta40.replace(0, np.nan)
pool = X[X.mpg_hat >= 10]
fgp = pool.fgm_pg.sum() / pool.fga_pg.sum(); ftp = pool.ftm_pg.sum() / pool.fta_pg.sum()
V = {'pts': pg('pts'), 'reb': pg('reb'), 'ast': pg('ast'), 'stl': pg('stl'), 'blk': pg('blk'), 'tpm': pg('tpm'), 'to': -pg('to'),
     'fgImpact': X.fgm_pg - fgp * X.fga_pg, 'ftImpact': X.ftm_pg - ftp * X.fta_pg}
Z = {}
for k, v in V.items():
    m, s = v[X.mpg_hat >= 10].mean(), v[X.mpg_hat >= 10].std()
    Z[k] = (v - m) / s
X['z'] = sum(Z.values())
for k in Z: X['z_' + k] = Z[k]

# ---------- Dynasty: Restjahre, Entwicklung, Draft-Risiko ----------
left = {1: 4, 2: 3, 3: 2, 4: 1, 5: 1}
seasons_played = P[P.season < Y].groupby('pid').season.nunique()
def years_left(r):
    if r.cls in left: return left[r.cls]
    n = seasons_played.get(r.pid, 0)
    return max(1, 4 - n)
X['yrs'] = X.apply(years_left, axis=1)
GROW = {1: 1.0, 2: 0.6, 3: 0.35, 4: 0.1, 5: 0.0}   # erwarteter z-Zuwachs pro Jahr je Klasse (aus den Entwicklungsfaktoren)
def leave_p(r):
    k = key(r['name'])
    d = DRAFT.get(k)
    n = NIL.get(k) or {}
    if d and d <= 10: return 0.9
    if d: return 0.75
    if n.get('dp'): return 0.55
    if r.z >= 9 and r.cls >= 3: return 0.5
    return 0.0
X['leave'] = X.apply(leave_p, axis=1)
fant = X[X.fx.notna() | X.name.map(key).isin({key(p[1]) for p in POOL})]
repl = fant.z.sort_values(ascending=False).iloc[min(300, len(fant) - 1)]
def dyn(r):
    v, tot, stay = r.z, 0.0, 1.0
    c = r.cls or (5 - r.yrs)
    for t in range(int(r.yrs)):
        if t >= 1:
            stay *= (1 - r.leave) if t == 1 else 1.0
            v += GROW.get(max(1, c + t - 1), 0)
        tot += (0.8 ** t) * stay * max(0.0, v - repl)
    return tot
X['dyn'] = X.apply(dyn, axis=1)

# ---------- Fantrax-Namen + Schreiben ----------
pool_by = {(p[2], key(p[1])): p for p in POOL}
for (school, fk), ek in alias.items():
    p = pool_by.get((school, fk))
    if p: pool_by[(school, ek)] = p
def fxname(r):
    p = pool_by.get((r.school, key(r['name'])))
    return p[1] if p else r['name']
X['fname'] = X.apply(fxname, axis=1)
X['inpool'] = X.apply(lambda r: (r.school, key(r['name'])) in pool_by, axis=1)
r1 = lambda v: None if pd.isna(v) else round(float(v), 1)
r2 = lambda v: None if pd.isna(v) else round(float(v), 2)
OUT = X[X.inpool | (X.mpg_hat >= 12)].copy().sort_values('z', ascending=False)
ts = pd.Timestamp.now('UTC').strftime('%Y-%m-%d')

proj = []
for r in OUT.itertuples():
    proj.append({'name': r.fname, 'team': r.school, 'pos': r.pos, 'h': None if pd.isna(r.h) else int(r.h), 'cls': int(r.cls) if r.cls else None,
                 'src': r.src, 'from': r.fromName if r.src == 'Transfer' else None, 'role': r.role, 'arche': r.arche, 'conf': r.conf,
                 'min': r1(r.mpg_hat), 'usg': r1(r.usg), 'pts': r1(r.pts_pg), 'reb': r1(r.reb_pg), 'ast': r1(r.ast_pg), 'stl': r2(r.stl_pg), 'blk': r2(r.blk_pg),
                 'tpm': r2(r.tpm_pg), 'tov': r2(r.to_pg), 'fgm': r2(r.fgm_pg), 'fga': r2(r.fga_pg), 'ftm': r2(r.ftm_pg), 'fta': r2(r.fta_pg),
                 'fgPct': r1(r.fgPct), 'ftPct': r1(r.ftPct), 'z': r2(r.z), 'zc': {k: r2(getattr(r, 'z_' + k)) for k in Z},
                 'nil': None if pd.isna(r.nil) else int(r.nil), 'yrs': int(r.yrs), 'leave': r.leave, 'dyn': r2(r.dyn), 'fx': r.inpool})
with open(os.path.join(SD, 'projections-cbb.js'), 'w', encoding='utf8') as f:
    f.write(f"""// ============================================================
//  CBB_PROJECTIONS — College 2026/27 mit Kontext, erzeugt von build-projections.py (Stand {ts})
// ============================================================
//  pro Spiel; min/usg = erwartete Minuten und Usage-% (Anteil am Team-Ballbesitz, wenn er spielt);
//  role Starter/Rotation/Bank/Tiefe; arche = Spielertyp aus dem Per-40-Profil; src = Rückkehrer/
//  Transfer/Freshman/Neu; conf = Datensicherheit (0–1, Minuten-Historie); z = 9-Cat-Summe (Pool ab
//  10 Min.); zc = je Kategorie; yrs = College-Jahre inkl. dieser Saison; leave = Wahrscheinlichkeit
//  NBA-Draft nach der Saison; dyn = Dynasty-Wert; fx = im Fantrax-Pool.
// ============================================================

const CBB_PROJECTIONS = [
""" + ',\n'.join('  ' + json.dumps(p, ensure_ascii=False, separators=(',', ':')) for p in proj) + "\n];\n\n"
            + "// Fantrax-Pool-Spieler, vermutlich ohne Spielberechtigung (Senior/Grad der Vorsaison, nicht im vollen ESPN-Kader)\n"
            + "const CBB_GONE = " + json.dumps(GONE, ensure_ascii=False) + ";\n")

TP = team_prior(Y, PRM['rho1'], PRM['rho2'])
ctx = {}
for short, tid in TID.items():
    tp = TP.get(tid, {c: TM[c] for c in STYLE_COLS})
    g = X[X.tid == tid].sort_values('mpg_hat', ascending=False)
    ret = g[(g.src == 'Rückkehrer')].mpg_hat.mul(np.interp(g[(g.src == 'Rückkehrer')].mpg_hat, PART_M, PART_S)).sum()
    allm = g.mpg_hat.mul(np.interp(g.mpg_hat, PART_M, PART_S)).sum()
    ctx[short] = {'name': SNAME[short], 'coach': (COACH.get(short) or [None])[0], 'coachPrev': COACH_PREV.get(short), 'newCoach': tid in _m.COACH_CHANGE,
                  'pace': r1(tp['pace']), 'srs': r1(tp['srs']),
                  'style': {k: round(float(tp[c] / TM[c]), 3) for k, c in [('stl', 'stl_r'), ('blk', 'blk_r'), ('ast', 'ast_r'), ('tpa', 'tpa_r'), ('orb', 'orb_r'), ('drb', 'drb_r'), ('fta', 'fta_r'), ('tov', 'tov_r')]},
                  'paceRel': round(float(tp['pace'] / TM['pace']), 3),
                  'ret': round(float(ret / allm), 2) if allm else None,
                  'rot': [[r.fname, r.pos, r1(r.mpg_hat), r1(r.usg), r.src, r.arche[0], r2(r.z)] for r in g.head(11).itertuples()]}
with open(os.path.join(SD, 'team-context.js'), 'w', encoding='utf8') as f:
    f.write(f"""// ============================================================
//  CBB_TEAM_CONTEXT — Team-Kontext 2026/27 je Pool-Schule (build-projections.py, Stand {ts})
// ============================================================
//  pace = erwartete Ballbesitze/Spiel; paceRel/style = Faktor gegenüber D-I-Schnitt (1,10 = 10 % mehr):
//  stl = Steals pro Gegner-Ballbesitz, blk = Blocks pro Gegner-Wurf, ast = Assist-Quote, tpa = 3er-Anteil,
//  orb/drb = Rebound-Quoten, fta = Freiwurf-Rate, tov = Ballverluste. Gewichtet Vorjahr 55 %, Vorvorjahr 15 %.
//  ret = Anteil der Minuten für Rückkehrer; rot = [Name, Pos, Min, Usage-%, Herkunft, Typ, z] (Top 11).
//  coach laut ESPN (nicht immer aktuell).
// ============================================================

const CBB_TEAM_CONTEXT = {json.dumps(ctx, ensure_ascii=False, separators=(',', ':'))};
""")

dynp = OUT[OUT.inpool].sort_values(['dyn', 'z'], ascending=False)
with open(os.path.join(LD, 'rankings.js'), 'w', encoding='utf8') as f:
    clsl = {1: 'Fr', 2: 'So', 3: 'Jr', 4: 'Sr', 5: 'Gr'}
    lines = [json.dumps([i + 1, r.fname, r.school, r.pos, None, clsl.get(int(r.cls)) if r.cls else None, r2(r.dyn), r2(r.z), int(r.yrs), r.leave], ensure_ascii=False) for i, r in enumerate(dynp.itertuples())]
    f.write(f"""// ============================================================
//  DYNASTY_PLAYERS — Dizzle CBB Dynasty-Rang (build-projections.py, Stand {ts})
// ============================================================
//  Format wie NBA: [rank, name, school, pos, dob(null), Klasse, Dynasty-Wert, z 26/27, Restjahre, Draft-Wahrscheinlichkeit]
//  Dynasty-Wert = Σ über die Restjahre 0,8^t × Verbleib × max(0, z_t − Ersatzniveau),
//  z_t = Projektion 26/27 + erwarteter Zuwachs je Klasse; Verbleib sinkt mit dem NBA-Draft-Risiko
//  (MFHFB 2027 Big Board, Dizzles Draft-Prospect-Markierung, starke Upperclassmen).
// ============================================================

const DYNASTY_PLAYERS = [
  """ + ',\n  '.join(lines) + "\n];\n")
print('geschrieben:', len(proj), 'Projections,', len(ctx), 'Teams,', len(dynp), 'Dynasty-Ränge. Ersatzniveau z =', round(float(repl), 2))
print(OUT[OUT.inpool].head(25)[['fname', 'school', 'cls', 'src', 'role', 'mpg_hat', 'usg', 'pts_pg', 'reb_pg', 'ast_pg', 'z', 'dyn']].round(1).to_string())
