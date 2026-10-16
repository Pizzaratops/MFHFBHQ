# ============================================================
#  CBB-Modell, Schritt 1: Spieler- und Team-Saisons aus hoopR (ESPN-Boxscores)
#  HOOPR_DIR = Checkout von github.com/sportsdataverse/hoopR-mbb-data (player_box, team_box, rosters)
#  CBB_WORK  = Arbeitsordner für die Parquet-Zwischenstände
# ============================================================
# Datenaufbereitung: Spieler-Saisons + Team-Saisons aus hoopR (2022–2026)
import pandas as pd, numpy as np, json
import os
B = os.environ.get('HOOPR_DIR', '/home/claude/sportsdataverse/hoopr-mbb-data') + '/mbb/'
WORK = os.environ.get('CBB_WORK', '/tmp/cbb-model')
os.makedirs(WORK, exist_ok=True)
NUM = {'minutes': 'min', 'points': 'pts', 'rebounds': 'reb', 'offensive_rebounds': 'oreb', 'defensive_rebounds': 'dreb', 'assists': 'ast', 'steals': 'stl',
       'blocks': 'blk', 'turnovers': 'to', 'three_point_field_goals_made': 'tpm', 'three_point_field_goals_attempted': 'tpa', 'field_goals_made': 'fgm',
       'field_goals_attempted': 'fga', 'free_throws_made': 'ftm', 'free_throws_attempted': 'fta', 'fouls': 'pf'}
ps, ts = [], []
import sys
LAST = int(os.environ.get('CBB_LAST_SEASON', '2026'))
for y in range(int(os.environ.get('CBB_FIRST', LAST - 4)), LAST + 1):
    d = pd.read_parquet(B + f'player_box/parquet/player_box_{y}.parquet')
    d = d[(d.did_not_play != True) & (d.minutes.fillna(0) > 0) & d.season_type.isin([2, 3]) & d.athlete_id.notna()]
    for k, v in NUM.items(): d[v] = d[k].fillna(0).astype(float)
    d['pid'] = d.athlete_id.astype('int64'); d['tid'] = d.team_id.astype(int)
    g = d.groupby(['pid', 'tid'])
    a = g[list(NUM.values())].sum(); a['g'] = g.size(); a['starts'] = g['starter'].sum()
    a['name'] = g['athlete_display_name'].last(); a['pos'] = g['athlete_position_abbreviation'].last()
    a = a.reset_index(); a['season'] = y; ps.append(a)
    t = pd.read_parquet(B + f'team_box/parquet/team_box_{y}.parquet')
    t = t[t.season_type.isin([2, 3])]
    for c in ['field_goals_attempted', 'offensive_rebounds', 'defensive_rebounds', 'turnovers', 'total_turnovers', 'free_throws_attempted', 'steals', 'blocks', 'assists',
              'field_goals_made', 'three_point_field_goals_attempted', 'team_score', 'opponent_team_score']:
        t[c] = pd.to_numeric(t[c], errors='coerce').fillna(0)
    t['tov'] = np.where(t.total_turnovers > 0, t.total_turnovers, t.turnovers)
    t['poss'] = t.field_goals_attempted - t.offensive_rebounds + t.tov + 0.475 * t.free_throws_attempted
    # Gegner-Werte (für Steal-/Block-Raten pro Gegner-Ballbesitz, DReb%)
    o = t[['game_id', 'team_id', 'poss', 'field_goals_attempted', 'three_point_field_goals_attempted', 'offensive_rebounds', 'defensive_rebounds', 'field_goals_made']].rename(
        columns={'team_id': 'opponent_team_id', 'poss': 'opp_poss', 'field_goals_attempted': 'opp_fga', 'three_point_field_goals_attempted': 'opp_3pa',
                 'offensive_rebounds': 'opp_oreb', 'defensive_rebounds': 'opp_dreb', 'field_goals_made': 'opp_fgm'})
    t = t.merge(o, on=['game_id', 'opponent_team_id'], how='left')
    t['tid'] = t.team_id.astype(int)
    tg = t.groupby('tid')
    s = pd.DataFrame({'games': tg.size(), 'poss': tg.poss.sum(), 'opp_poss': tg.opp_poss.sum(), 'pts': tg.team_score.sum(), 'opp_pts': tg.opponent_team_score.sum(),
                      'stl': tg.steals.sum(), 'blk': tg.blocks.sum(), 'ast': tg.assists.sum(), 'fgm': tg.field_goals_made.sum(), 'fga': tg.field_goals_attempted.sum(),
                      'tpa': tg.three_point_field_goals_attempted.sum(), 'fta': tg.free_throws_attempted.sum(), 'oreb': tg.offensive_rebounds.sum(),
                      'dreb': tg.defensive_rebounds.sum(), 'opp_oreb': tg.opp_oreb.sum(), 'opp_dreb': tg.opp_dreb.sum(), 'opp_fga': tg.opp_fga.sum(), 'opp_fgm': tg.opp_fgm.sum(), 'tov': tg.tov.sum()})
    s['pace'] = (s.poss + s.opp_poss) / 2 / s.games            # Ballbesitze pro Spiel
    s['ortg'] = 100 * s.pts / s.poss; s['drtg'] = 100 * s.opp_pts / s.opp_poss
    s['net'] = s.ortg - s.drtg
    s['stl_r'] = 100 * s.stl / s.opp_poss                      # Steals pro 100 Gegner-Ballbesitze
    s['blk_r'] = 100 * s.blk / (s.opp_fga - 0)                 # Blocks pro 100 Gegner-Würfe
    s['ast_r'] = s.ast / s.fgm                                 # Assist-Quote
    s['tpa_r'] = s.tpa / s.fga                                 # 3er-Anteil
    s['fta_r'] = s.fta / s.fga
    s['orb_r'] = s.oreb / (s.oreb + s.opp_dreb)
    s['drb_r'] = s.dreb / (s.dreb + s.opp_oreb)
    s['tov_r'] = 100 * s.tov / s.poss
    s = s.reset_index(); s['season'] = y
    # Gegnerstärke (einfaches SRS über Net-Rating der Gegner, 3 Iterationen)
    gm = t[['tid', 'opponent_team_id']].copy(); gm['opp'] = gm.opponent_team_id.astype(int)
    net = dict(zip(s.tid, s.net)); srs = dict(net)
    for _ in range(5):
        sos = gm.assign(v=gm.opp.map(srs).fillna(-15)).groupby('tid').v.mean()
        srs = {k: net[k] + sos.get(k, 0) for k in net}
    s['srs'] = s.tid.map(srs)
    ts.append(s)
P = pd.concat(ps, ignore_index=True); T = pd.concat(ts, ignore_index=True)
T = T[T.games >= 10]
# Cache für build-projections.py ohne hoopR: Klassen der letzten Saison + Teamnamen

try:
    rr = pd.read_parquet(B + f'rosters/parquet/rosters_{LAST}.parquet', columns=['athlete_id', 'experience_display_value', 'height', 'position_abbreviation'])
    rr.to_parquet(WORK + f'/rosters_{LAST}.parquet')
except Exception as e:
    print('Kader-Cache fehlt:', e)
nm = pd.read_parquet(B + f'player_box/parquet/player_box_{LAST}.parquet', columns=['team_id', 'team_location']).drop_duplicates('team_id')
json.dump({str(int(a)): b for a, b in zip(nm.team_id, nm.team_location)}, open(WORK + '/team_names.json', 'w'))
P.to_parquet(WORK + '/players.parquet'); T.to_parquet(WORK + '/teams.parquet')
print(P.shape, T.shape)
print(T[T.season == 2026].sort_values('srs', ascending=False)[['tid', 'pace', 'net', 'srs', 'stl_r', 'blk_r', 'tpa_r']].head(8))
