#!/usr/bin/env python3
# ============================================================
#  x3PM / xFGM täglich aus Play-by-Play (seit 22.10.2026)
# ============================================================
#  DATENQUELLE: Ramiro Bentes, github.com/ramirobentes/nba_data
#  (frei, öffentlich, Parquet, laufende Saison täglich aktualisiert;
#  R-Paket dazu: github.com/ramirobentes/nbadatar). Nicht unser Projekt –
#  wir lesen nur die veröffentlichten Dateien. Methode: Josh Lloyds xStats
#  (joshlloydfantasy.com/research/xstats-method).
#
#  Läuft im nba-sync (GitHub Actions). stats.nba.com blockt Cloud-IPs, die
#  Release-Dateien auf GitHub nicht – deshalb gehen x3PM und xFGM hier
#  täglich ohne Beyaz' Rechner. xSTL/xTO brauchen Tracking-Daten
#  (Deflections, Touches) und bleiben im Montagslauf (xstats-browser.js).
#
#  Zonen nur über die Wurfdistanz (area/locX/locY sind 2026-27 leer):
#    3PT < 23,6 ft = Ecke · übrige 3PT = Above the Break (inkl. Backcourt)
#    2PT < 4 ft = Restricted Area · < 14 ft = Paint · sonst Mid-Range
#  x = Versuche × Liga-Quote der Zone. Liga-Quote = laufende Saison,
#  am Anfang gedämpft Richtung Vorsaison (PRIOR, je Zone 2.000 Versuche).
#  Abgleich mit nba.com am 20.10.2026: x3PM r = 0,987, xFGM r = 0,997.
#
#  Holt die Datei nur, wenn sich das Release-Asset seit dem letzten Lauf
#  geändert hat. Ausgabe: sports/nba/data/xstats-pbp.js
#  Aufruf (im Ordner sports/nba): python3 scripts/xstats-pbp.py [--force]
#  Braucht pyarrow (im Workflow per pip, nur wenn es etwas zu tun gibt).
# ============================================================
import json, os, re, sys, tempfile, urllib.error, urllib.request
from datetime import date

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', 'data', 'xstats-pbp.js')
FORCE = '--force' in sys.argv
CREDIT = 'Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data'

# Vorsaison 2025-26 (219.158 Würfe), gleiche Zonen-Definition
PRIOR = {'C3': 0.3872, 'AB3': 0.3538, 'RA': 0.6712, 'PAINT': 0.4439, 'MID': 0.4117}
PRIOR_ATT = 2000

today = date.today()
end_year = today.year + (1 if today.month >= 8 else 0)  # Datei-Jahr = Saisonende
season = f'{end_year - 1}-{str(end_year % 100).zfill(2)}'
asset_name = f'pbp_regular_{end_year}.parquet'


URL = f'https://github.com/ramirobentes/nba_data/releases/download/pbp/{asset_name}'


def http(url, method='GET'):
    req = urllib.request.Request(url, method=method, headers={'User-Agent': 'mfhfb-hq'})
    return urllib.request.urlopen(req, timeout=120)


def old_meta():
    if not os.path.exists(OUT):
        return {}
    m = re.search(r'^//  META (\{.*\})$', open(OUT, encoding='utf-8').read(), re.M)
    return json.loads(m.group(1)) if m else {}


try:
    with http(URL, 'HEAD') as r:
        stamp = r.headers.get('Last-Modified') or r.headers.get('ETag') or ''
except urllib.error.HTTPError as e:
    if e.code == 404:
        print(f'{asset_name} (noch) nicht veröffentlicht – nichts zu tun.')
        sys.exit(0)
    raise
prev = old_meta()
if not FORCE and stamp and prev.get('assetUpdated') == stamp and prev.get('season') == season:
    print(f'{asset_name} unverändert seit {stamp} – nichts zu tun.')
    sys.exit(0)

try:  # erst hier: ohne Änderung braucht der Lauf kein pyarrow
    import pyarrow.parquet as pq
except ImportError:
    import subprocess
    pip = [sys.executable, '-m', 'pip', 'install', '--quiet', '--user', 'pyarrow']
    if subprocess.call(pip) != 0:
        subprocess.check_call(pip + ['--break-system-packages'])
    import site, importlib
    sys.path.append(site.getusersitepackages()); importlib.invalidate_caches()
    import pyarrow.parquet as pq

with tempfile.TemporaryDirectory() as tmp:
    fn = os.path.join(tmp, asset_name)
    with http(URL) as r, open(fn, 'wb') as f:
        f.write(r.read())
    cols = ['game_id', 'game_date', 'msg_type', 'description', 'shot_distance', 'player1_name', 'lineup_home', 'lineup_away']
    rows = pq.read_table(fn, columns=cols).to_pylist()


def strip_id(s):
    s = (s or '').strip()
    return s.split(' ', 1)[1].strip() if s and ' ' in s and s.split(' ', 1)[0].isdigit() else (s or '').strip()


def zone(three, d):
    if three:
        return 'C3' if d < 23.6 else 'AB3'
    return 'RA' if d < 4 else ('PAINT' if d < 14 else 'MID')


shots, games, through = [], {}, ''
for r in rows:
    gd = str(r['game_date'])[:10]
    through = max(through, gd)
    for lu in (r['lineup_home'], r['lineup_away']):  # Einsätze: wer stand je auf dem Feld
        if lu:
            for p in lu.split(','):
                games.setdefault(strip_id(p), set()).add(r['game_id'])
    if r['msg_type'] in (1, 2) and r['shot_distance'] is not None and r['player1_name']:
        three = '3PT' in (r['description'] or '')
        shots.append((strip_id(r['player1_name']), zone(three, r['shot_distance']), three, 1 if r['msg_type'] == 1 else 0))

if len(shots) < 500:
    print(f'Nur {len(shots)} Würfe in {asset_name} – Abbruch, alte Datei bleibt.')
    sys.exit(0)

agg = {z: [0, 0] for z in PRIOR}
for _, z, _, m in shots:
    agg[z][0] += m; agg[z][1] += 1
rate = {z: (agg[z][0] + PRIOR[z] * PRIOR_ATT) / (agg[z][1] + PRIOR_ATT) for z in PRIOR}

pl = {}
for name, z, three, m in shots:
    e = pl.setdefault(name, {'fga': 0, 'fgm': 0, 'tpm': 0, 'xfgm': 0.0, 'xtpm': 0.0})
    e['fga'] += 1; e['fgm'] += m; e['xfgm'] += rate[z]
    if three:
        e['tpm'] += m; e['xtpm'] += rate[z]
players = {}
for name, g in games.items():
    e = pl.get(name, {'fga': 0, 'fgm': 0, 'tpm': 0, 'xfgm': 0.0, 'xtpm': 0.0})
    players[name] = {'gp': len(g), 'tpm': e['tpm'], 'xtpm': round(e['xtpm'], 2), 'fgm': e['fgm'], 'xfgm': round(e['xfgm'], 2), 'fga': e['fga']}

meta = {'season': season, 'through': through, 'players': len(players), 'games': len({r['game_id'] for r in rows}),
        'shots': len(shots), 'assetUpdated': stamp, 'zoneRates': {z: round(v, 4) for z, v in rate.items()},
        'source': CREDIT}
head = f"""// ============================================================
//  x3PM / xFGM der laufenden Saison aus Play-by-Play
//  {CREDIT} (nicht unser Projekt, frei veröffentlichte Daten)
//  Methode: Josh Lloyd (joshlloydfantasy.com/research/xstats-method)
//  Erzeugt von scripts/xstats-pbp.py am {today.isoformat()} · Saison {season} · Stand {through}
//  Wird von scripts/build-live-projections.js gelesen (3PM, FG%).
//  META {json.dumps({'season': season, 'assetUpdated': stamp})}
// ============================================================
"""
body = json.dumps({'meta': meta, 'players': dict(sorted(players.items()))}, ensure_ascii=False, indent=1)
open(OUT, 'w', encoding='utf-8').write(head + 'const XSTATS_PBP = ' + body + ';\n')
print(f'{OUT}: {len(players)} Spieler, {meta["games"]} Spiele, {len(shots)} Würfe, Stand {through} · Zonen {meta["zoneRates"]}')
