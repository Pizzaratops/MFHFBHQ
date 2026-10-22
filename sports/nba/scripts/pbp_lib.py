# ============================================================
#  Hilfsfunktionen für das NBA-Play-by-Play (seit 22.10.2026)
# ============================================================
#  DATENQUELLE: Ramiro Bentes, github.com/ramirobentes/nba_data (fremdes
#  Projekt, frei veröffentlichte Parquet-Dateien; R-Paket: nbadatar).
#  Genutzt von build-pbp-insights.py (täglich im nba-sync) und den
#  Backtest-Scripts. Liest pbp_regular_<Saisonende>.parquet.
#
#  Ereignis-Zuordnung (geprüft an 2025-26):
#    msg 1 Treffer: player1 Werfer, player2 Assist · msg 2 Fehlwurf: player2 = Blocker
#    msg 3 Freiwurf ("MISS" = vorbei) · msg 4 Rebound · msg 5 Turnover: player2 = Steal
#    msg 6 Foul: player1 Foulender · secs_played = Zeit seit dem letzten Ereignis,
#    lineup_home/away = wer in dieser Zeit auf dem Feld stand.
# ============================================================
import os, sys, urllib.request, urllib.error

BASE = 'https://github.com/ramirobentes/nba_data/releases/download'
COLS = ['game_id', 'game_date', 'team_home', 'team_away', 'msg_type', 'act_type', 'period', 'secs_game', 'secs_played',
        'team_abb', 'description', 'shot_pts', 'hs', 'vs', 'player1_name', 'player2_name', 'lineup_home', 'lineup_away',
        'garbage_time', 'margin_before', 'shot_distance', 'player3_name', 'poss_home', 'poss_away', 'total_starters_home', 'total_starters_away', 'type_foul']


def ensure(pkgs=('pandas', 'pyarrow')):
    """pandas/pyarrow bei Bedarf nachinstallieren (GitHub Actions hat sie nicht)."""
    missing = []
    for p in pkgs:
        try:
            __import__(p)
        except ImportError:
            missing.append(p)
    if not missing:
        return
    import subprocess, site, importlib
    pip = [sys.executable, '-m', 'pip', 'install', '--quiet', '--user', *missing]
    if subprocess.call(pip) != 0:
        subprocess.check_call(pip + ['--break-system-packages'])
    sys.path.append(site.getusersitepackages())
    importlib.invalidate_caches()


def url(table, end_year, season_type='regular'):
    return f'{BASE}/{table}/{table}_{season_type}_{end_year}.parquet'


def head_stamp(u):
    req = urllib.request.Request(u, method='HEAD', headers={'User-Agent': 'mfhfb-hq'})
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return r.headers.get('Last-Modified') or r.headers.get('ETag') or ''
    except urllib.error.HTTPError as e:
        if e.code == 404:
            return None
        raise


def download(u, path):
    req = urllib.request.Request(u, headers={'User-Agent': 'mfhfb-hq'})
    with urllib.request.urlopen(req, timeout=300) as r, open(path, 'wb') as f:
        f.write(r.read())
    return path


def strip_id(s):
    if not isinstance(s, str):
        return ''
    s = s.strip()
    head, _, rest = s.partition(' ')
    return rest.strip() if head.isdigit() and rest else s


def load(path):
    import pandas as pd
    import pyarrow.parquet as pq
    cols = [c for c in COLS if c in pq.read_schema(path).names]
    df = pq.read_table(path, columns=cols).to_pandas()
    df['game_date'] = pd.to_datetime(df['game_date']).dt.strftime('%Y-%m-%d')
    df['secs_played'] = df['secs_played'].fillna(0).clip(lower=0)
    df['garbage_time'] = df['garbage_time'].fillna(0)
    for c in ('lineup_home', 'lineup_away', 'description', 'player1_name', 'player2_name', 'player3_name', 'team_home', 'team_away', 'team_abb'):
        if c in df:
            df[c] = df[c].astype(object).where(df[c].notna(), '')
    return df


def stints(df):
    """Spielzeit je (Spiel, Team, Lineup): Sekunden, Garbage-Sekunden, enge Schlussphase."""
    import pandas as pd
    d = df[df['secs_played'] > 0]
    close = ((d['period'] >= 4) & (d['secs_game'] >= 2160) & ((d['hs'] - d['vs']).abs() <= 6)).astype(int)
    out = []
    for side, team in (('lineup_home', 'team_home'), ('lineup_away', 'team_away')):
        x = pd.DataFrame({'game_id': d['game_id'], 'game_date': d['game_date'], 'team': d[team], 'lineup': d[side],
                          'opp': d['team_away' if team == 'team_home' else 'team_home'],
                          'secs': d['secs_played'], 'gt_secs': d['secs_played'] * d['garbage_time'], 'clutch_secs': d['secs_played'] * close})
        out.append(x)
    s = pd.concat(out).groupby(['game_id', 'game_date', 'team', 'opp', 'lineup'], as_index=False)[['secs', 'gt_secs', 'clutch_secs']].sum()
    return s


def player_minutes(st):
    """Minuten je (Spiel, Team, Spieler) aus den Stints."""
    import pandas as pd
    rows = []
    for r in st.itertuples(index=False):
        for p in (r.lineup or '').split(','):
            n = strip_id(p)
            if n:
                rows.append((r.game_id, r.game_date, r.team, n, r.secs, r.gt_secs, r.clutch_secs))
    m = pd.DataFrame(rows, columns=['game_id', 'game_date', 'team', 'player', 'secs', 'gt_secs', 'clutch_secs'])
    return m.groupby(['game_id', 'game_date', 'team', 'player'], as_index=False).sum()


def starters(df):
    """Starter je Spiel: Lineup beim ersten Ereignis mit Spielzeit."""
    rows = []
    first = df.sort_values(['game_id', 'secs_game']).groupby('game_id').head(3).groupby('game_id').first()
    for gid, r in first.iterrows():
        for side, team in (('lineup_home', 'team_home'), ('lineup_away', 'team_away')):
            for p in (r[side] or '').split(','):
                n = strip_id(p)
                if n:
                    rows.append((gid, r[team], n))
    import pandas as pd
    return pd.DataFrame(rows, columns=['game_id', 'team', 'player']).assign(start=1)


def stat_events(df):
    """Lange Tabelle: ein Eintrag je Spieler-Statistik mit Kontext (eigene Lineup, Garbage Time)."""
    import pandas as pd
    import numpy as np
    d = df
    desc = d['description'].fillna('')
    p1 = d['player1_name'].map(strip_id)
    p2 = d['player2_name'].map(strip_id)
    p3 = d['player3_name'].map(strip_id) if 'player3_name' in d else p2.where(False, '')
    # Altes Format (bis 2024-25): Blocker/Stealer in player3, "3pt" klein.
    p23 = p3.where(p3 != '', p2)
    home_team = d['team_home']
    is3 = desc.str.contains('3PT', case=False)
    made = d['msg_type'] == 1
    miss = d['msg_type'] == 2
    ft = d['msg_type'] == 3
    ftm = ft & ~desc.str.contains('MISS', case=False)
    parts = []

    def add(mask, who, stat, val=1.0, team_from='abb'):
        m = mask & (who != '')
        if not m.any():
            return
        x = d.loc[m]
        parts.append(pd.DataFrame({'idx': x.index, 'player': who[m].values, 'stat': stat,
                                   'val': (val[m].values if hasattr(val, 'values') else val)}))

    add(made, p1, 'fgm'); add(made | miss, p1, 'fga')
    add(made & is3, p1, 'tpm'); add((made | miss) & is3, p1, 'tpa')
    add(made, p1, 'pts', d['shot_pts'].fillna(0))
    add(ftm, p1, 'pts'); add(ftm, p1, 'ftm'); add(ft, p1, 'fta')
    add(made, p2, 'ast')
    rim = desc.str.contains('layup|dunk|tip|alley|putback|finger roll', case=False) & ~is3
    add((made | miss) & rim, p1, 'rima'); add(made & rim, p1, 'rimm')
    add(made & (p2 == ''), p1, 'uast')
    add(miss & desc.str.contains('block', case=False), p23, 'blk')
    add(d['msg_type'] == 4, p1, 'reb')
    add(d['msg_type'] == 5, p1, 'tov')
    add(d['msg_type'] == 5, p23, 'stl')
    add((d['msg_type'] == 6) & ~desc.str.contains('T.FOUL|Technical', case=False), p1, 'pf')
    ev = pd.concat(parts, ignore_index=True)
    ctx = d.loc[ev['idx'], ['game_id', 'game_date', 'team_home', 'team_away', 'lineup_home', 'lineup_away', 'garbage_time', 'shot_distance']].reset_index(drop=True)
    ev = pd.concat([ev.drop(columns='idx'), ctx], axis=1)
    # Team des Spielers: steht er in der Heim-Lineup?
    in_home = np.array([(pl in (lh or '')) for pl, lh in zip(ev['player'], ev['lineup_home'])])
    ev['team'] = np.where(in_home, ev['team_home'], ev['team_away'])
    ev['opp'] = np.where(in_home, ev['team_away'], ev['team_home'])
    ev['lineup'] = np.where(in_home, ev['lineup_home'], ev['lineup_away'])
    return ev.drop(columns=['team_home', 'team_away', 'lineup_home', 'lineup_away'])
