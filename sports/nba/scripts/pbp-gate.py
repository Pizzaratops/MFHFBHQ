#!/usr/bin/env python3
# ============================================================
#  Gate für die Play-by-Play-Schritte im nba-sync (seit 23.10.2026)
# ============================================================
#  Nur Standardbibliothek. Prüft per HEAD, ob die Play-by-Play-Datei der
#  laufenden Saison (Ramiro Bentes, github.com/ramirobentes/nba_data) neuer ist
#  als der Stand in data/xstats-pbp.js bzw. data/pbp-insights.js. Schreibt
#  run=true/false nach $GITHUB_OUTPUT – erst dann installiert der Workflow
#  Python-Pakete und rechnet (spart bei 30-Minuten-Takt Zeit).
#  Aufruf (im Ordner sports/nba): python3 scripts/pbp-gate.py [--force]
# ============================================================
import json, os, re, sys
from datetime import date

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import pbp_lib as L  # noqa: E402  (nur urllib-Teile)

today = date.today()
END = today.year + (1 if today.month >= 8 else 0)
SEASON = f'{END - 1}-{str(END % 100).zfill(2)}'


def meta(path):
    p = os.path.join(HERE, '..', 'data', path)
    if not os.path.exists(p):
        return {}
    m = re.search(r'^//  META (\{.*\})$', open(p, encoding='utf-8').read(), re.M)
    return json.loads(m.group(1)) if m else {}


stamp = L.head_stamp(L.url('pbp', END))
reason = 'erzwungen' if '--force' in sys.argv else None
if stamp is None:
    run, reason = False, f'pbp {END} noch nicht veröffentlicht'
elif reason:
    run = True
else:
    stale = [f for f in ('xstats-pbp.js', 'pbp-insights.js') if meta(f).get('assetUpdated') != stamp or meta(f).get('season') != SEASON]
    run = bool(stale)
    reason = ('neu: ' + ', '.join(stale)) if stale else f'unverändert seit {stamp}'
print(f'PbP-Gate: run={str(run).lower()} ({reason})')
out = os.environ.get('GITHUB_OUTPUT')
if out:
    with open(out, 'a') as f:
        f.write(f'run={str(run).lower()}\n')
