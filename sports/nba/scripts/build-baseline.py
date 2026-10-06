#!/usr/bin/env python3
"""Erzeugt data/preseason-baseline-<Saison>.json (Vorsaison-Werte pro ESPN-Athlete-ID + Positions-Referenz).

Einmal pro Jahr nach Ende der Regular Season laufen lassen (z.B. im September):
    pip install pandas pyarrow
    python3 scripts/build-baseline.py 2027   # im Ordner sports/nba; 2027 = Saison 2026-27 (Endjahr)
                                             # Ausgabe: sports/nba/data/preseason-baseline-2026-27.json

Datenquelle: ESPN-Boxscores via sportsdataverse/hoopR (GitHub-Release, frei zugänglich, auch aus GitHub Actions).
Die Formeln sind identisch mit preseason-score.js (rates/aggregate) – nicht einzeln ändern.
"""
import sys, os, json, io, urllib.request
import pandas as pd

END_YEAR = int(sys.argv[1]) if len(sys.argv) > 1 else 2026
URL = f'https://github.com/sportsdataverse/sportsdataverse-data/releases/download/espn_nba_player_boxscores/player_box_{END_YEAR}.parquet'
KEEP = ['ORB%', 'DRB%', 'BLK%', 'AST%', 'USG%', 'STL%', 'TOV%', '3PAr', 'FTr', 'TS%', 'PTS/36', 'FTA/36', 'TRB/36', 'AST/36']

raw = urllib.request.urlopen(URL, timeout=120).read()
d = pd.read_parquet(io.BytesIO(raw))
d = d[d.season_type == 2].rename(columns={
    'field_goals_made': 'fgm', 'field_goals_attempted': 'fga', 'three_point_field_goals_made': 'fg3m',
    'three_point_field_goals_attempted': 'fg3a', 'free_throws_made': 'ftm', 'free_throws_attempted': 'fta',
    'offensive_rebounds': 'orb', 'defensive_rebounds': 'drb', 'assists': 'ast', 'steals': 'stl', 'blocks': 'blk',
    'turnovers': 'tov', 'fouls': 'pf', 'points': 'pts', 'minutes': 'mp', 'athlete_id': 'pid',
    'athlete_display_name': 'name', 'athlete_position_abbreviation': 'pos'})
num = ['mp', 'fgm', 'fga', 'fg3m', 'fg3a', 'ftm', 'fta', 'orb', 'drb', 'ast', 'stl', 'blk', 'tov', 'pf', 'pts']
for c in num:
    d[c] = pd.to_numeric(d[c], errors='coerce')
d = d[(d.did_not_play != True) & (d.mp > 0)].dropna(subset=['mp', 'fga', 'pts'])

g = d.groupby(['game_id', 'team_id'])[['mp', 'fgm', 'fga', 'fg3a', 'fta', 'orb', 'drb', 'tov']].sum().add_prefix('tm_').reset_index()
d = d.merge(g, on=['game_id', 'team_id'])
o = g.rename(columns=lambda c: c.replace('tm_', 'op_')).rename(columns={'team_id': 'opponent_team_id'})
d = d.merge(o, on=['game_id', 'opponent_team_id'])
d = d[d.tm_mp >= 200].copy()

f = d.mp / (d.tm_mp / 5)
d['d_stl'] = f * (d.op_fga + 0.44 * d.op_fta - d.op_orb + d.op_tov)
d['d_blk'] = f * (d.op_fga - d.op_fg3a)
d['d_orb'] = f * (d.tm_orb + d.op_drb)
d['d_drb'] = f * (d.tm_drb + d.op_orb)
d['d_ast'] = (f * d.tm_fgm - d.fgm).clip(lower=0)
d['d_usg'] = f * (d.tm_fga + 0.44 * d.tm_fta + d.tm_tov)
d['plays'] = d.fga + 0.44 * d.fta + d.tov

S = d.groupby('pid')[num + ['d_stl', 'd_blk', 'd_orb', 'd_drb', 'd_ast', 'd_usg', 'plays']].sum()
gp = d.groupby('pid').size()
nz = lambda s: s.where(s != 0)
R = pd.DataFrame({
    'PTS/36': S.pts / nz(S.mp) * 36, 'TRB/36': (S.orb + S.drb) / nz(S.mp) * 36, 'AST/36': S.ast / nz(S.mp) * 36,
    'FTA/36': S.fta / nz(S.mp) * 36, 'ORB%': S.orb / nz(S.d_orb), 'DRB%': S.drb / nz(S.d_drb),
    'BLK%': S.blk / nz(S.d_blk), 'STL%': S.stl / nz(S.d_stl), 'AST%': S.ast / nz(S.d_ast),
    'USG%': S.plays / nz(S.d_usg), 'TOV%': S.tov / nz(S.plays), '3PAr': S.fg3a / nz(S.fga),
    'FTr': S.fta / nz(S.fga), 'TS%': S.pts / nz(2 * (S.fga + 0.44 * S.fta))})

def grp(p):
    p = str(p or '').upper()
    if p in ('C', 'FC', 'C-F', 'F-C'): return 'C'
    if p.startswith('G') or p in ('PG', 'SG'): return 'G'
    return 'F'

pos = d.groupby('pid').pos.agg(lambda x: x.dropna().mode().iloc[0] if x.dropna().size else None)
name = d.sort_values('game_date').groupby('pid').name.last()
players = {}
for pid in S.index:
    players[str(int(pid))] = {
        'name': name[pid], 'pos': grp(pos.get(pid)), 'gp': int(gp[pid]), 'min': round(float(S.loc[pid, 'mp']), 1),
        'mpg': round(float(S.loc[pid, 'mp'] / gp[pid]), 1),
        'rates': {k: (None if pd.isna(R.loc[pid, k]) else round(float(R.loc[pid, k]), 4)) for k in KEEP}}

q = R[S.mp >= 500].copy()
q['g'] = [grp(pos.get(p)) for p in q.index]
ref = {g_: {k: {'mean': round(float(x[k].mean()), 4), 'sd': round(float(x[k].std()), 4)} for k in KEEP} for g_, x in q.groupby('g')}
ref['ALL'] = {k: {'mean': round(float(q[k].mean()), 4), 'sd': round(float(q[k].std()), 4)} for k in KEEP}

season = f'{END_YEAR - 1}-{str(END_YEAR)[-2:]}'
out = {'season': season, 'source': 'ESPN box scores (hoopR / sportsdataverse), Regular Season',
       'min_ref_minutes': 500, 'n_players': len(players), 'position_reference': ref, 'players': players}
fn = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'data', f'preseason-baseline-{season}.json')  # MFHFB HQ: direkt nach sports/nba/data/
json.dump(out, open(fn, 'w'), ensure_ascii=False, separators=(',', ':'))
print('geschrieben:', fn, len(players), 'Spieler')
