# College Basketball (Dizzle CBB Dynasty)

Seit 16.10.2026 eine ganze Liga im Hub (`#/cbb`). Fantrax-Liga `z8gwfku2mpmwh0xe`,
14 Teams, H2H 9-Cat, je Woche zwei Matchups, Kader 40 (20 aktiv: 8 G, 8 F/C, 4 Flex).

## Automatik: `.github/workflows/cbb-sync.yml` (stündlich :47)

| Schritt | Script | schreibt |
|---|---|---|
| Fantrax (jeder Lauf) | `leagues/cbb/scripts/sync-fantrax.js` | `leagues/cbb/data/` teams-rosters, rosters-live, fantasy-schedule, player-pool |
| Stats (07/10/14/22 Uhr Berlin) | `sports/cbb/scripts/daily-9cat.js` (ESPN, nur Pool-Schulen) | `sports/cbb/scripts/data/*.csv` |
| | NBA-Scripts mit `--dir/--out` (convert-to-livescores/-boxscores, update-all-aggregates `--min-mpg=10 --week-history=false`, build-rolling-archive `--league=ncaab`) | `sports/cbb/data/livescores-*.js`, `rolling-rankings-2026-27.js` |
| Live-Projections (mit den Stats) | `sports/cbb/scripts/build-live-projections.js` | `sports/cbb/data/live-projections-cbb.js` |
| Wöchentlich (Mo 07 Uhr / `rosters`) | `sports/cbb/scripts/sync-espn-rosters.js` | `espn-rosters.js` (Kader, Klasse, Größe, Coach + Vorjahres-Coach, Spieltage) |
| | `sports/cbb/scripts/model/build-projections.py` (Python, Cache im Repo) | `projections-cbb.js`, `team-context.js`, `leagues/cbb/data/rankings.js` |
| Waiver (jeder Lauf) | `leagues/cbb/scripts/build-best-available-board.js` | best-available-board, team-strength |

Manuell: Actions → „CBB Sync“ → `stats` an, optional Datum (YYYY-MM-DD); `rosters` an = ESPN-Kader + Modell.

## Einmalig je Saison

- `sports/cbb/data/schools.js` — 156 Pool-Schulen (Fantrax ↔ ESPN-ID). Ändert Dizzle den Pool: anpassen.
- `python3 sports/cbb/scripts/build-history.py player_box_<Jahr>.parquet --season 2025-26`
  (hoopR-mbb-data) → `last-season-rankings.js` (Reiter „Vorsaison“) und `rolling-rankings.js`.
- Modell-Cache neu bauen (neue Vorsaison): `HOOPR_DIR=<hoopR-mbb-data> CBB_WORK=sports/cbb/scripts/model/cache
  python3 sports/cbb/scripts/model/prep.py` (player_box/team_box 5 Jahre, rosters der Vorsaison), dann committen.
- `TEAM_META` in `sync-fantrax.js`: feste Team-IDs, Owner (= Name in der NIL-Auktion), Farben.

## Seiten

Übersicht, Teams & Kader, Tabelle, Spielplan (`tools/cbb-league.js`); Live Scores, Player
Rankings, Rolling Rankings, Waiver (NBA-Tools mit `sport: 'cbb'`, Liga-Schlüssel `ncaab`);
NIL-Auktion (`tools/cbb-auction.js`, Bereich „Draft & Picks“). Seit Phase 3 (`tools/cbb-model.js`):
Projections, Schulen & Kontext, Dynasty Rankings, Trade Analyzer + Finder, Matchup-Planer.

## Modell (Phase 3)

College-Kader drehen sich stark, feste Spielerwerte reichen nicht. Drei Schichten:

1. **Spieler-Profil**: Per-40 der letzten 3 Saisons (Minuten × 0,5^Alter), Entwicklung je Klasse
   (Fr→So Punkte/40 +21 % gemessen), Transfer-Niveau (−10 % Punkte je +10 SRS), geschrumpft zum
   Positions- bzw. Freshman-Prior. Neue ohne Daten: NIL-Wert (kalibriert NIL 2025 → Ist 25/26).
2. **Team-Kontext**: Tempo und Stil je Schule (Steals, Blocks, Assist-Quote, 3er-Anteil, Rebounds,
   FT-Rate, TO), Vorjahr 55 % + Vorvorjahr 15 % (gemessene Stabilität 0,5–0,6). Neuer Coach
   (ESPN-Coach ≠ Vorjahr): Stil zählt nur 40 % (Heuristik, nicht getestet).
3. **Minuten & Usage**: Logit je Kader (Vorjahresminuten, Qualität, Positionskonkurrenz, Klasse,
   Transfer, NIL), normiert auf 200 Teamminuten; Usage teils ans pace-abhängige Teamvolumen gebunden.

Backtest 24/25 → 25/26 (Pool-Schulen, ≥ 10 Spiele): Punkte r = 0,62 (Rückkehrer 0,77, naiv 0,49),
9-Cat r = 0,63, Minuten-MAE 5,6.

Dynasty-Wert = Σ Restjahre 0,8^t × Verbleib × max(0, z_t − Ersatzniveau); Verbleib sinkt mit
NBA-Draft-Risiko (MFHFB-Big-Board 2027, Draft-Prospect-Markierung, starke Upperclassmen).
Live: Projektion zählt wie 1 + 3 × Datensicherheit Spiele, dann echte Spiele.

Waiver-Board: laufende Saison (Gewicht wächst bis 12 Spiele) + Projektion (sonst Vorsaison/NIL).
Senior/Grad der Vorsaison, die nicht mehr im vollen ESPN-Kader stehen (`CBB_GONE`), rutschen ans Ende
und bekommen auf der Kaderseite „WEG?“.

## NBA-DNA (`sports/cbb/scripts/model/nba-translation.py`)

Letzte College-Saison 2009–2022 (hoopR) → erste 4 NBA-Jahre (BBM-Exporte in sports/nba/data):
P(NBA-Rotation), P(Fantasy-Top-150), erwartetes NBA-z je Kategorie, historische Vergleiche.
Test 2017–22: AUC 0,97; Translation r: BLK 0,85 · REB 0,74 · AST 0,72 · FG% 0,71 · FT% 0,64 ·
3PM 0,63 · TO 0,63 · STL 0,56 · PTS 0,50. Läuft nicht automatisch (braucht hoopR 2006–2026):
einmal pro Saison nach dem Saisonende bzw. wenn neue Spieler dazukommen:
`CBB_FIRST=2006 CBB_WORK=/tmp/cbbhist HOOPR_DIR=… python3 sports/cbb/scripts/model/prep.py`,
NBA-Saisons als JSON nach /tmp/cbbhist/nba.json (siehe Script-Kopf), dann
`CBB_HIST=/tmp/cbbhist python3 sports/cbb/scripts/model/nba-translation.py` → `sports/cbb/data/nba-dna.js`.
