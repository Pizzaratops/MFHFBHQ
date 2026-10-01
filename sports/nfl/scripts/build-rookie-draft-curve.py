#!/usr/bin/env python3
# ============================================================
#  ROOKIE-DRAFT-KURVE: NFL-Draft-Pick -> erwarteter Dynasty-Rookie-Rang
# ============================================================
#  Lernt je Position (QB/RB/WR/TE), auf welchem Rang im Dynasty-Rookie-
#  Draft ein Spieler nach seinem NFL-Draft-Pick typischerweise landet.
#  Ergebnis: sports/nfl/data/rookie-draft-curve.js (ROOKIE_DRAFT_CURVE),
#  genutzt von tools/nfl-collegescouting.js („📈 Draft Range“).
#
#  Datenquellen (offen, frei, DynastyProcess / FantasyPros):
#   - db_fpecr.parquet  : FantasyPros-Experten-Konsens (ECR), wöchentliche
#                         Snapshots seit 12/2019, darin die Dynasty-Rookie-
#                         Rankings (fp_page .../rookies.php).
#   - db_playerids.csv  : ID-Abgleich FantasyPros -> NFL-Draft (draft_year,
#                         draft_ovr = Gesamtpick).
#  Rookie-Rang je Jahrgang = Mittel aller Rookie-Rankings zwischen 08.05.
#  und 31.07. (nach dem NFL-Draft, vor der Saison) ≈ Rookie-Draft-ADP.
#  Undrafted Free Agents bekommen Pick 260.
#  Modell je Position: log(Rang) = a + b·log(NFL-Pick), dazu die 25/75-
#  Quantile der Residuen als Band. FantasyPros-Rookie-Rankings sind
#  1QB-Rankings. Zusätzlich eine Superflex-Kurve (posSF) aus den Dynasty-
#  Superflex-Rankings (ab Herbst 2020 verfügbar), nur Rookies des Jahrgangs.
#
#  Lokal/manuell, einmal pro Jahr nach dem Rookie-Draft-Sommer ausführen
#  (braucht pandas + pyarrow, daher NICHT in GitHub Actions):
#    pip install pandas pyarrow
#    python3 sports/nfl/scripts/build-rookie-draft-curve.py
# ============================================================
import io, json, datetime, urllib.request
import numpy as np, pandas as pd

BASE = 'https://raw.githubusercontent.com/dynastyprocess/data/master/files/'
OUT = 'sports/nfl/data/rookie-draft-curve.js'

def get(name):
    # Optional lokale Kopie: LOCAL_DIR=/pfad (Datei dort unter gleichem Namen)
    import os
    loc = os.environ.get('LOCAL_DIR')
    if loc and os.path.exists(os.path.join(loc, name)):
        return open(os.path.join(loc, name), 'rb').read()
    with urllib.request.urlopen(BASE + name) as r:
        return r.read()

ecr = pd.read_parquet(io.BytesIO(get('db_fpecr.parquet')))
ids = pd.read_csv(io.BytesIO(get('db_playerids.csv')), low_memory=False)
ids = ids[ids.fantasypros_id.notna()].copy()
ids['fpid'] = ids.fantasypros_id.astype(int).astype(str)

def points(page_pat, rookies_only_page):
    r = ecr[ecr.fp_page.str.contains(page_pat, na=False)].copy()
    r['sd'] = pd.to_datetime(r.scrape_date)
    rows, years = [], []
    for y in range(2020, datetime.date.today().year + 1):
        w = r[(r.sd >= f'{y}-05-08') & (r.sd <= f'{y}-07-31') & r.pos.isin(['QB', 'RB', 'WR', 'TE'])]
        if w.empty:
            continue
        g = w.groupby(['id', 'player', 'pos']).agg(ecr=('ecr', 'mean'), n=('ecr', 'size')).reset_index()
        g = g[g.n >= g.n.max() * 0.5]
        g['fpid'] = g.id.astype(str)
        m = g.merge(ids[['fpid', 'draft_year', 'draft_ovr']], on='fpid', how='left')
        if rookies_only_page:
            m = m[m.draft_year.isna() | (m.draft_year == y)]
        else:  # Gesamt-Ranking (Superflex): nur die Rookies dieses Jahrgangs herausfiltern
            m = m[m.draft_year == y]
        m = m.sort_values('ecr'); m['rank'] = np.arange(1, len(m) + 1)
        m['pick'] = m.draft_ovr.fillna(260).clip(upper=260)
        rows.append(m); years.append(y)
    a = pd.concat(rows)
    return a[a['rank'] <= 120], years

def fit(a):
    out = {}
    for pos in ['QB', 'RB', 'WR', 'TE']:
        s = a[a.pos == pos]
        x, yv = np.log(s.pick.values), np.log(s['rank'].values)
        b, c = np.polyfit(x, yv, 1)
        res = yv - (b * x + c)
        q25, q75 = np.quantile(res, [0.25, 0.75])
        out[pos] = {'a': round(float(c), 4), 'b': round(float(b), 4), 'q25': round(float(q25), 4),
                    'q75': round(float(q75), 4), 'n': int(len(s)), 'r2': round(float(1 - res.var() / yv.var()), 3)}
    return out

a1, years = points('rookies', True)               # Dynasty-Rookie-Rankings (1QB)
asf, years_sf = points('dynasty-superflex', False)  # Dynasty Superflex, Rookies herausgefiltert
pos_out, pos_sf = fit(a1), fit(asf)

with open(OUT, 'w', encoding='utf-8') as f:
    f.write(f"""// ============================================================
//  ROOKIE_DRAFT_CURVE — NFL-Draft-Pick -> Dynasty-Rookie-Rang
// ============================================================
//  GENERIERT von sports/nfl/scripts/build-rookie-draft-curve.py
//  ({datetime.date.today().isoformat()}). Nicht von Hand editieren.
//  Quelle: FantasyPros Dynasty-Rookie-ECR (Mai–Juli nach dem NFL-Draft)
//  der Jahrgänge {years[0]}–{years[-1]}, via DynastyProcess (offene Daten).
//  Je Position: Rang = exp(a + b·ln(Pick)), Band = exp(… + q25 / q75).
//  pos   = 1QB (FantasyPros-Dynasty-Rookie-Rankings)  — Standard
//  posSF = Superflex (FantasyPros-Dynasty-Superflex, nur Rookies des Jahrgangs,
//          Jahrgänge {years_sf[0]}–{years_sf[-1]}) — für Ligen mit superflex: true
// ============================================================

const ROOKIE_DRAFT_CURVE = {json.dumps({'years': years, 'yearsSF': years_sf, 'pos': pos_out, 'posSF': pos_sf}, indent=1)};
""")
print('geschrieben:', OUT); print('1QB', pos_out); print('SF ', pos_sf)
