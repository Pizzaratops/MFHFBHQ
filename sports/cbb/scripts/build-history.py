#!/usr/bin/env python3
# ============================================================
#  CBB-Historie aus hoopR (sportsdataverse/hoopR-mbb-data, ESPN-Boxscores)
# ============================================================
#  Einmalig pro Saison (nach Saisonende) laufen lassen:
#    python3 sports/cbb/scripts/build-history.py <player_box_YYYY.parquet> [--season 2025-26] [--sim-dir DIR]
#  Quelle: https://github.com/sportsdataverse/hoopR-mbb-data/releases (player_box_<Jahr>.parquet)
#
#  Schreibt nach sports/cbb/data/:
#   last-season-rankings.js  LAST_SEASON_RANKINGS — ganze Saison je Spieler (pro Spiel),
#                            9-Cat-z über alle D-I-Spieler mit >= 8 Spielen und >= 12 Min.,
#                            gleiche Mathe wie sports/nba/scripts/aggregate-core.js
#                            (FG%/FT% als Impact = (Quote − Pool-Quote) × Versuche/Spiel).
#   rolling-rankings.js      ROLLING_RANKINGS + RR_WEEKS + RR_MONTHS — Rang je Kalender-
#                            monat/-woche mit den festen Gewichten aus build-rolling-archive.js
#                            (gleiches Format wie die NBA-Datei → Seite „Rolling Rankings“).
#  --sim-dir: zusätzlich Tages-CSVs im daily-9cat-Format (nur Pool-Schulen) zum Testen.
# ============================================================
import sys, json, math, argparse, os
import pandas as pd

ap = argparse.ArgumentParser()
ap.add_argument('parquet')
ap.add_argument('--season', default='2025-26')
ap.add_argument('--sim-dir', default=None)
a = ap.parse_args()

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, '..', 'data')

def load_schools():
    src = open(os.path.join(DATA, 'schools.js'), encoding='utf8').read()
    out = {}
    for line in src.splitlines():
        line = line.strip()
        if line.startswith('{ fx:'):
            # { fx: "61280", name: "Memphis", short: "Mem", espn: 235, espnName: "..." }
            import re
            m = re.search(r'short: ("(?:[^"\\]|\\.)*"), espn: (\d+)', line)
            out[int(m.group(2))] = json.loads(m.group(1))
    return out
SCHOOLS = load_schools()

d = pd.read_parquet(a.parquet)
d = d[(d['did_not_play'] != True) & (d['minutes'].fillna(0) > 0) & (d['season_type'] == 2)].copy()
d['date'] = pd.to_datetime(d['game_date']).dt.strftime('%Y-%m-%d')
d['team'] = [SCHOOLS.get(int(t), s) for t, s in zip(d['team_id'], d['team_short_display_name'])]
num = {'minutes': 'min', 'points': 'pts', 'rebounds': 'reb', 'assists': 'ast', 'steals': 'stl', 'blocks': 'blk', 'turnovers': 'to',
       'three_point_field_goals_made': 'tpm', 'field_goals_made': 'fgm', 'field_goals_attempted': 'fga', 'free_throws_made': 'ftm', 'free_throws_attempted': 'fta'}
for k, v in num.items():
    d[v] = d[k].fillna(0).astype(float)
d['name'] = d['athlete_display_name']
d['pid'] = d['athlete_id'].astype('int64')
CATS = [('pts', 'pts', False), ('reb', 'reb', False), ('ast', 'ast', False), ('stl', 'stl', False), ('blk', 'blk', False),
        ('tpm', 'tpm', False), ('fgImpact', 'fgi', False), ('ftImpact', 'fti', False), ('to', 'to', True)]
WEIGHTS = {'pts': 0.9, 'reb': 1, 'ast': 1, 'stl': 0.75, 'blk': 0.75, 'tpm': 0.75, 'fgImpact': 1, 'ftImpact': 0.85, 'to': 0.25}

def aggregate(rows, min_games, min_min=0):
    g = rows.groupby('pid')
    s = g[['min', 'pts', 'reb', 'ast', 'stl', 'blk', 'to', 'tpm', 'fgm', 'fga', 'ftm', 'fta']].sum()
    s['games'] = g.size()
    last = rows.sort_values('date').groupby('pid').last()
    s['name'] = last['name']; s['team'] = last['team']
    s = s[(s['games'] >= min_games)]
    s = s[(s['min'] / s['games'] >= min_min)]
    if s.empty:
        return s, 0, 0
    lfg = s['fgm'].sum() / max(1, s['fga'].sum()); lft = s['ftm'].sum() / max(1, s['fta'].sum())
    pg = s.copy()
    for k in ['min', 'pts', 'reb', 'ast', 'stl', 'blk', 'to', 'tpm']:
        pg[k] = s[k] / s['games']
    pg['fgi'] = [((m / at) - lfg) * (at / gm) if at > 0 else 0 for m, at, gm in zip(s['fgm'], s['fga'], s['games'])]
    pg['fti'] = [((m / at) - lft) * (at / gm) if at > 0 else 0 for m, at, gm in zip(s['ftm'], s['fta'], s['games'])]
    comp = 0
    for key, col, inv in CATS:
        m, sd = pg[col].mean(), pg[col].std(ddof=0)
        z = (pg[col] - m) / sd if sd > 0 else 0 * pg[col]
        if inv: z = -z
        pg['z_' + key] = z
        comp = comp + z
    pg['composite'] = comp
    pg['weighted'] = sum(pg['z_' + k] * w for k, w in WEIGHTS.items())
    pg['fgPct'] = [100 * m / at if at > 0 else 0 for m, at in zip(s['fgm'], s['fga'])]
    pg['ftPct'] = [100 * m / at if at > 0 else 0 for m, at in zip(s['ftm'], s['fta'])]
    return pg.sort_values('composite', ascending=False), lfg, lft

r1 = lambda x: round(float(x), 1)
r2 = lambda x: round(float(x), 2)

# ---------- 1) ganze Saison ----------
season, lfg, lft = aggregate(d, 8, 12)
players = []
for i, (pid, p) in enumerate(season.iterrows()):
    players.append({'rank': i + 1, 'name': p['name'], 'team': p['team'], 'games': int(p['games']), 'min': r1(p['min']),
                    'pts': r1(p['pts']), 'reb': r1(p['reb']), 'ast': r1(p['ast']), 'stl': r1(p['stl']), 'blk': r1(p['blk']), 'to': r1(p['to']),
                    'tpm': r1(p['tpm']), 'fgPct': r1(p['fgPct']), 'ftPct': r1(p['ftPct']), 'composite': r2(p['composite']),
                    'zScores': {k: r2(p['z_' + k]) for k, _, _ in CATS}})
dates = sorted(d['date'].unique())
entry = {'season': a.season, 'windowStart': dates[0], 'windowEnd': dates[-1], 'windowDays': len(dates), 'daysInWindow': len(dates),
         'minGames': 8, 'leagueAvg': {'fg': r1(lfg * 100), 'ft': r1(lft * 100)}, 'players': players}
with open(os.path.join(DATA, 'last-season-rankings.js'), 'w', encoding='utf8') as f:
    f.write(f"""// ============================================================
//  LAST_SEASON_RANKINGS — College Basketball {a.season} (reguläre Saison, ganze D-I)
// ============================================================
//  Erzeugt von sports/cbb/scripts/build-history.py aus hoopR (ESPN-Boxscores).
//  >= 8 Spiele und >= 12 Min./Spiel; z über diesen Pool, Format wie ein
//  Eintrag in livescores-season.js. team = Fantrax-Kürzel (Pool-Schulen) bzw. ESPN-Kurzname.
// ============================================================

const LAST_SEASON_RANKINGS = {json.dumps(entry, ensure_ascii=False, separators=(',', ':'))};
""")
print('last-season-rankings:', len(players), 'Spieler')

# ---------- 2) Rolling (Monat/Woche) ----------
keep = set(season.index)
MON = {11: 'Nov', 12: 'Dez', 1: 'Jan', 2: 'Feb', 3: 'März'}
d['month'] = pd.to_datetime(d['date']).dt.month
dd = pd.to_datetime(d['date'])
d['wk'] = (dd - pd.to_timedelta(dd.dt.weekday, unit='D')).dt.strftime('%Y-%m-%d')
roll = {pid: {'name': season.loc[pid, 'name'], 'rankings': {}, 'weeklyRanks': {}, 'eosRank': None} for pid in keep}
def ranks(rows, min_games):
    pg, _, _ = aggregate(rows, min_games)
    pg = pg[pg.index.isin(keep)].sort_values('weighted', ascending=False)
    return {pid: i + 1 for i, pid in enumerate(pg.index)}
months = [m for m in [11, 12, 1, 2, 3] if (d['month'] == m).any()]
for m in months:
    for pid, rk in ranks(d[d['month'] == m], 3).items():
        roll[pid]['rankings'][MON[m]] = rk
weeks = sorted(d['wk'].unique())
for i, w in enumerate(weeks, 1):
    for pid, rk in ranks(d[d['wk'] == w], 1).items():
        roll[pid]['weeklyRanks'][str(i)] = rk
for pid, rk in ranks(d, 8).items():
    roll[pid]['eosRank'] = rk
rows = sorted(roll.values(), key=lambda p: p['eosRank'] or 9999)
with open(os.path.join(DATA, 'rolling-rankings.js'), 'w', encoding='utf8') as f:
    f.write(f"""// ============================================================
//  ROLLING RANKINGS — College Basketball {a.season} (Archiv)
// ============================================================
//  Erzeugt von sports/cbb/scripts/build-history.py (hoopR/ESPN-Boxscores).
//  Rang je Kalendermonat / Kalenderwoche (Mo–So) mit den festen Gewichten aus
//  sports/nba/scripts/build-rolling-archive.js; eosRank = ganze Saison.
//  Gleiches Format wie sports/nba/data/rolling-rankings.js.
// ============================================================

const RR_MONTHS = {json.dumps([MON[m] for m in months], ensure_ascii=False)};
const RR_WEEKS = {json.dumps(list(range(1, len(weeks) + 1)))};
const ROLLING_RANKINGS = [
""" + ',\n'.join('  ' + json.dumps(p, ensure_ascii=False, separators=(',', ':')) for p in rows) + '\n];\n')
print('rolling:', len(rows), 'Spieler,', len(months), 'Monate,', len(weeks), 'Wochen')

# ---------- 3) Test-CSVs (optional) ----------
if a.sim_dir:
    os.makedirs(a.sim_dir, exist_ok=True)
    pool = d[d['team_id'].astype(int).isin(SCHOOLS.keys())]
    for date, rows_ in pool.groupby('date'):
        r = rows_.copy()
        lf = r['fgm'].sum() / max(1, r['fga'].sum()); lt = r['ftm'].sum() / max(1, r['fta'].sum())
        r['fgi'] = [((m / at) - lf) * at if at > 0 else 0 for m, at in zip(r['fgm'], r['fga'])]
        r['fti'] = [((m / at) - lt) * at if at > 0 else 0 for m, at in zip(r['ftm'], r['fta'])]
        comp = 0
        for key, col, inv in CATS:
            m, sd = r[col].mean(), r[col].std(ddof=0)
            z = (r[col] - m) / sd if sd > 0 else 0 * r[col]
            comp = comp + (-z if inv else z)
        r['comp'] = comp
        r = r.sort_values('comp', ascending=False)
        lines = ['Rank,Name,Team,MIN,PTS,REB,AST,STL,BLK,TO,3PM,FGM,FGA,FTM,FTA,FG%,FT%,FGImpact,FTImpact,Composite']
        for i, (_, p) in enumerate(r.iterrows(), 1):
            nm = str(p['name']).replace('"', "'")
            lines.append(','.join(str(x) for x in [i, f'"{nm}"', p['team'], int(p['min']), int(p['pts']), int(p['reb']), int(p['ast']), int(p['stl']), int(p['blk']), int(p['to']), int(p['tpm']),
                int(p['fgm']), int(p['fga']), int(p['ftm']), int(p['fta']), f"{100*p['fgm']/p['fga']:.1f}" if p['fga'] else '', f"{100*p['ftm']/p['fta']:.1f}" if p['fta'] else '',
                f"{p['fgi']:.2f}", f"{p['fti']:.2f}", f"{p['comp']:.2f}"]))
        open(os.path.join(a.sim_dir, f'daily-9cat_ncaab_{date}.csv'), 'w').write('\n'.join(lines))
        games = rows_.drop_duplicates('game_id')
        json.dump({'league': 'ncaab', 'date': date, 'games': [f"{g.team_display_name} vs {g.opponent_team_display_name}" for g in games.itertuples()],
                   'leagueAvg': {'fg': r1(lf * 100), 'ft': r1(lt * 100)}}, open(os.path.join(a.sim_dir, f'daily-9cat_ncaab_{date}.meta.json'), 'w'))
        json.dump({'league': 'ncaab', 'date': date, 'games': []}, open(os.path.join(a.sim_dir, f'daily-9cat_ncaab_{date}.games.json'), 'w'))
    print('Test-CSVs:', pool['date'].nunique(), 'Tage →', a.sim_dir)
