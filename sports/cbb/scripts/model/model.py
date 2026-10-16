# ============================================================
#  CBB-Modell, Schritt 2: Projection je Spieler (siehe build-projections.py)
#  Backtest 2024-25 → 2025-26 (Pool-Schulen, ≥ 10 Spiele): PTS r=0,62 (Rückkehrer 0,77),
#  9-Cat-Gesamt r=0,63, Minuten-MAE 5,6. Naiv (Vorjahr pro Spiel) PTS r=0,49.
# ============================================================
# CBB-Projection-Modell: Spielerraten (Level/Stil/Entwicklung) + Team-Kontext + Minuten/Usage
import pandas as pd, numpy as np, json, sys
import os
B = os.environ.get('HOOPR_DIR', '/home/claude/sportsdataverse/hoopr-mbb-data') + '/mbb/'
WORK = os.environ.get('CBB_WORK', '/tmp/cbb-model')
os.makedirs(WORK, exist_ok=True)
P0 = pd.read_parquet(WORK + '/players.parquet')
T = pd.read_parquet(WORK + '/teams.parquet')
RATE = ['pts', 'oreb', 'dreb', 'ast', 'stl', 'blk', 'to', 'tpm', 'tpa', 'fga', 'fgm', 'fta', 'ftm', 'pf']
STYLE = {'stl': 'stl_r', 'blk': 'blk_r', 'ast': 'ast_r', 'tpa': 'tpa_r', 'tpm': 'tpa_r', 'oreb': 'orb_r', 'dreb': 'drb_r', 'fta': 'fta_r', 'ftm': 'fta_r', 'to': 'tov_r'}
STYLE_COLS = sorted(set(STYLE.values())) + ['pace', 'srs']
CLS = {'Freshman': 1, 'Sophomore': 2, 'Junior': 3, 'Senior': 4, 'Graduate Student': 5, 'Graduate': 5, 'FR': 1, 'SO': 2, 'JR': 3, 'SR': 4, 'GR': 5}

# Hauptteam je Spieler-Saison
P = P0.sort_values('min', ascending=False).drop_duplicates(['pid', 'season']).copy()
P = P.merge(T[['tid', 'season'] + STYLE_COLS], on=['tid', 'season'], how='left')
for k in RATE: P[k + '40'] = P[k] / P['min'] * 40
P['mpg'] = P['min'] / P['g']
TM = {c: T[c].mean() for c in STYLE_COLS}

COACH_CHANGE = set()   # ESPN-Team-IDs mit neuem Head Coach → Stil weniger stabil (Faktor 0,4)

def team_prior(Y, rho1=0.55, rho2=0.15):
    a = T[T.season == Y - 1].set_index('tid'); b = T[T.season == Y - 2].set_index('tid')
    out = {}
    for tid in set(a.index) | set(b.index):
        out[tid] = {}
        for c in STYLE_COLS:
            r1 = rho1 if c != 'srs' else 0.7
            cc = 0.4 if (tid in COACH_CHANGE and c != 'srs') else 1.0
            v = TM[c]
            if tid in a.index and pd.notna(a.at[tid, c]): v += cc * r1 * (a.at[tid, c] - TM[c])
            if tid in b.index and pd.notna(b.at[tid, c]): v += cc * rho2 * (b.at[tid, c] - TM[c])
            out[tid][c] = v
    return out

def classes(Y):
    cols = ['athlete_id', 'experience_display_value', 'height', 'position_abbreviation']
    try:
        r = pd.read_parquet(B + f'rosters/parquet/rosters_{Y}.parquet', columns=cols)
    except Exception:
        try:  # Cache im Repo (sports/cbb/scripts/model/cache, von prep.py) — für GitHub Actions ohne hoopR
            r = pd.read_parquet(WORK + f'/rosters_{Y}.parquet', columns=cols)
        except Exception:
            return {}
    r['pid'] = pd.to_numeric(r.athlete_id, errors='coerce')
    return {int(p): (CLS.get(c, 0), h, pos) for p, c, h, pos in zip(r.pid, r.experience_display_value, r.height, r.position_abbreviation) if pd.notna(p)}

# Entwicklung je Schritt (aus effects.py, Rückkehrer gleiches Team), Faktor auf Per-40-Raten
DEV = {1: {'pts': 1.15, 'ast': 1.14, 'tpm': 1.18, 'tpa': 1.15, 'fga': 1.12, 'fgm': 1.13, 'fta': 1.10, 'ftm': 1.12, 'to': 1.04},
       2: {'pts': 1.10, 'ast': 1.12, 'tpm': 1.09, 'tpa': 1.07, 'fga': 1.07, 'fgm': 1.08, 'fta': 1.06, 'ftm': 1.07, 'to': 1.03},
       3: {'pts': 1.05, 'ast': 1.09, 'tpm': 1.09, 'tpa': 1.05, 'fga': 1.04, 'fgm': 1.05, 'fta': 1.03, 'ftm': 1.04, 'to': 1.02},
       4: {'pts': 1.02, 'ast': 1.04, 'tpm': 1.03, 'tpa': 1.02, 'fga': 1.01, 'fgm': 1.02}}
LEVEL = {'pts': -0.10, 'oreb': -0.02, 'dreb': -0.03, 'ast': -0.06, 'stl': -0.03, 'blk': -0.03, 'to': -0.11, 'tpm': -0.05, 'tpa': -0.04,
         'fga': -0.09, 'fgm': -0.10, 'fta': -0.14, 'ftm': -0.14, 'pf': -0.03}

def project(Y, roster, cls, prm):
    """roster: DataFrame pid, tid, name, pos (+ optional nil) — Kader der Saison Y. Vektorisiert."""
    TP = pd.DataFrame(team_prior(Y, prm['rho1'], prm['rho2'])).T
    R = roster.copy()
    R['pos'] = R['pos'].fillna('G').astype(str).str[:1].where(lambda x: x.isin(list('GFC')), 'G')
    R['cls'] = R.pid.map(lambda p: cls.get(p, (0,))[0]).fillna(0).astype(int)
    for c in STYLE_COLS: R['tp_' + c] = R.tid.map(TP[c]) if c in TP else np.nan
    for c in STYLE_COLS: R['tp_' + c] = R['tp_' + c].fillna(TM[c])
    H = P[(P.season < Y) & (P.season >= Y - 3) & P.pid.isin(R.pid)].merge(R[['pid', 'cls'] + ['tp_' + c for c in STYLE_COLS]], on='pid')
    H['w'] = H['min'] * prm['decay'] ** (Y - 1 - H.season)
    steps = Y - H.season
    for k in RATE:
        v = H[k + '40'] * np.exp(LEVEL.get(k, 0) * prm['lvl'] * ((H['tp_srs'] - H['srs'].fillna(0)) / 10))
        if k in STYLE:
            c = STYLE[k]; old = H[c]
            ratio = (H['tp_' + c] / old).where(old > 0, 1.0).fillna(1.0)
            v = v * ratio ** prm['sty'].get(k, 0)
        dv = np.ones(len(H))
        for st in range(3):
            cl = H['cls'] - steps + st
            f = cl.map(lambda x: DEV.get(int(x), {}).get(k, 1.0) if x >= 1 else 1.0)
            dv = dv * np.where(st < steps, f, 1.0)
        H[k + 'a'] = v * dv ** prm['dev'] * H['w']
    G = H.groupby('pid')
    agg = G[[k + 'a' for k in RATE] + ['w']].sum()
    last = H[H.season == Y - 1].set_index('pid')
    pool = P[(P.season < Y) & (P.season >= Y - 3) & (P['min'].between(100, 500))].assign(pg=lambda d: d.pos.fillna('G').str[0])
    prior = {g: {k: pool[pool.pg == g][k].sum() / pool[pool.pg == g]['min'].sum() * 40 for k in RATE} for g in ['G', 'F', 'C']}
    fresh = P[(P.season < Y) & (P.season >= Y - 3)].sort_values('season').drop_duplicates('pid')
    fresh = fresh[fresh['min'] >= 60].assign(pg=lambda d: d.pos.fillna('G').str[0])
    fprior = {g: {k: fresh[fresh.pg == g][k].sum() / fresh[fresh.pg == g]['min'].sum() * 40 for k in RATE} for g in ['G', 'F', 'C']}
    X = R[['pid', 'tid', 'name', 'pos', 'cls'] + (['nil'] if 'nil' in R else [])].copy()
    W = X.pid.map(agg['w']).fillna(0).values
    X['W'] = W
    # Neue Spieler mit NIL-Wert (Dizzle-Liste): je Kategorie kalibriert an den Neuen 2025-26
    # (NIL-Preise 2025 → tatsächliche Per-40-Raten): log(Faktor) = a + b·log1p(NIL/10)
    NILC = {'pts': (-0.02, 0.21), 'fga': (-0.02, 0.21), 'fgm': (-0.02, 0.21), 'fta': (-0.02, 0.21), 'ftm': (-0.02, 0.21),
            'ast': (-0.21, 0.275), 'tpm': (-0.52, 0.375), 'tpa': (-0.52, 0.375), 'stl': (-0.18, 0.06), 'blk': (-0.14, 0.02), 'to': (-0.10, 0.12)}
    nil = X['nil'].fillna(0).values if 'nil' in X else np.zeros(len(X))
    hasnil = (W == 0) & (nil > 0)
    for k in RATE:
        a_, b_ = NILC.get(k, (0, 0))
        mult = np.where(hasnil, np.exp(a_ + b_ * np.log1p(nil / 10)), 1.0)
        pr = np.where(W == 0, X.pos.map(lambda g: fprior[g][k]), X.pos.map(lambda g: prior[g][k])) * mult
        X[k + '40'] = (X.pid.map(agg[k + 'a']).fillna(0).values + prm['m0'] * pr) / (W + prm['m0'])
    X['prev_mpg'] = X.pid.map(last['mpg']) if len(last) else np.nan
    X['prev_min'] = X.pid.map(last['min']) if len(last) else np.nan
    X['prev_starts'] = X.pid.map(last['starts'] / last['g']) if len(last) else np.nan
    prev_tid = X.pid.map(last['tid']) if len(last) else pd.Series(np.nan, index=X.index)
    X['transfer'] = prev_tid.notna() & (prev_tid != X.tid)
    prev_srs = X.pid.map(last['srs']) if len(last) else np.nan
    X['team_srs'] = X.tid.map(TP['srs']).fillna(TM['srs']); X['team_pace'] = X.tid.map(TP['pace']).fillna(TM['pace'])
    X['dsrs'] = ((X.team_srs - prev_srs) / 10).fillna(0)
    X['q40'] = X.pts40 + 0.4 * X.fgm40 - 0.7 * X.fga40 - 0.4 * (X.fta40 - X.ftm40) + 0.7 * X.oreb40 + 0.3 * X.dreb40 + X.stl40 + 0.7 * X.ast40 + 0.7 * X.blk40 - 0.4 * X.pf40 - X.to40
    X['qz'] = X.groupby('tid').q40.transform(lambda s: (s - s.mean()) / (s.std() + 1e-6))
    X['qrank'] = X.groupby('tid').q40.rank(ascending=False)
    # Konkurrenz auf der eigenen Position (Bigs = F/C zusammen, Guards = G)
    X['pgrp'] = np.where(X.pos == 'G', 'G', 'B')
    X['posrank'] = X.groupby(['tid', 'pgrp']).q40.rank(ascending=False)
    # Qualität relativ zu den Top 7 des Kaders (wer reicht an die Rotation heran?)
    top7 = X.groupby('tid').q40.transform(lambda s: s.nlargest(7).mean())
    X['qrel'] = X.q40 - top7
    return X

def lg(p): p = np.clip(p, 0.01, 0.99); return np.log(p / (1 - p))

PART_M = [0, 1.5, 4.5, 8, 12.5, 17.5, 22.5, 27.5, 32.5, 38]
PART_S = [0.1, 0.17, 0.32, 0.57, 0.75, 0.85, 0.89, 0.92, 0.95, 0.97]

def minutes(X, coef, team_minutes=200):
    f = np.column_stack(feat(X))
    l = f @ coef
    # Neue mit NIL-Wert: kalibriert an 2025-26 (Residuum = 0,8 + 0,5·log1p(NIL/10))
    if 'nil' in X:
        nil = X['nil'].fillna(0).values
        l = l + np.where((X.W.values == 0) & (nil > 0), 0.8 + 0.5 * np.log1p(nil / 10), 0)
    X = X.copy(); X['l'] = l
    out = []
    for tid, g in X.groupby('tid'):
        lo, hi = -10, 10
        for _ in range(40):  # Konstante so wählen, dass Σ mpg·Teilnahme = 200
            c = (lo + hi) / 2
            m = 40 / (1 + np.exp(-(g.l + c)))
            part = np.interp(m, PART_M, PART_S)  # Anteil gespielter Spiele je Minutenniveau (2025-26)
            tot = (m * part).sum()
            if tot > team_minutes: hi = c
            else: lo = c
        out.append(pd.Series(np.minimum(m, 37.5), index=g.index))
    X['mpg_hat'] = pd.concat(out)
    return X

def feat(X):
    has = X.prev_mpg.notna().astype(float)
    lp = np.where(has > 0, lg(X.prev_mpg.fillna(0) / 40), 0)
    return [np.ones(len(X)), has, lp, X.qz.values, (X.qrank <= 5).astype(float).values, X.transfer.astype(float).values,
            X.dsrs.values * has, (X.cls == 1).astype(float).values, np.minimum(X.prev_min.fillna(0), 1200) / 1000,
            X.prev_starts.fillna(0).values, np.minimum(X.posrank.values, 6) / 6, X.qrel.values / 5,
            np.log1p(X.get('nil', pd.Series(0, index=X.index)).fillna(0).values) * (1 - has)]

def usage(X, prm):
    X = X.copy()
    pts_team = X.pts40 * X.mpg_hat / 40
    # Usage: Team-Schüsse auf ein pace-abhängiges Ziel ziehen (teilweise)
    for tid, g in X.groupby('tid'):
        tgt = g.team_pace.iloc[0] * prm['fga_per_poss']
        cur = (g.fga40 * g.mpg_hat / 40).sum()
        f = (tgt / cur) ** prm['gam'] if cur > 0 else 1
        for k in ['pts', 'fga', 'fgm', 'tpm', 'tpa', 'fta', 'ftm', 'ast', 'to']:
            X.loc[g.index, k + '40'] *= f
    for k in RATE: X[k + '_pg'] = X[k + '40'] * X.mpg_hat / 40
    X['reb_pg'] = X.oreb_pg + X.dreb_pg
    return X

def actual(Y, pids=None):
    a = P[P.season == Y].copy()
    for k in RATE: a[k + '_pg'] = a[k] / a.g
    a['reb_pg'] = a.oreb_pg + a.dreb_pg
    return a

def roster_from_boxes(Y):
    a = P[P.season == Y][['pid', 'tid', 'name', 'pos']].copy()
    return a

if __name__ == '__main__':
    pass
