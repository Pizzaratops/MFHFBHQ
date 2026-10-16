# College Basketball (Dizzle CBB Dynasty)

Seit 16.10.2026 eine ganze Liga im Hub (`#/cbb`). Fantrax-Liga `z8gwfku2mpmwh0xe`,
14 Teams, H2H 9-Cat, je Woche zwei Matchups, Kader 40 (20 aktiv: 8 G, 8 F/C, 4 Flex).

## Automatik: `.github/workflows/cbb-sync.yml` (stündlich :47)

| Schritt | Script | schreibt |
|---|---|---|
| Fantrax (jeder Lauf) | `leagues/cbb/scripts/sync-fantrax.js` | `leagues/cbb/data/` teams-rosters, rosters-live, fantasy-schedule, player-pool |
| Stats (07/10/14/22 Uhr Berlin) | `sports/cbb/scripts/daily-9cat.js` (ESPN, nur Pool-Schulen) | `sports/cbb/scripts/data/*.csv` |
| | NBA-Scripts mit `--dir/--out` (convert-to-livescores/-boxscores, update-all-aggregates `--min-mpg=10 --week-history=false`, build-rolling-archive `--league=ncaab`) | `sports/cbb/data/livescores-*.js`, `rolling-rankings-2026-27.js` |
| Waiver (jeder Lauf) | `leagues/cbb/scripts/build-best-available-board.js` | best-available-board, team-strength |

Manuell: Actions → „CBB Sync“ → `stats` an, optional Datum (YYYY-MM-DD).

## Einmalig je Saison

- `sports/cbb/data/schools.js` — 156 Pool-Schulen (Fantrax ↔ ESPN-ID). Ändert Dizzle den Pool: anpassen.
- `python3 sports/cbb/scripts/build-history.py player_box_<Jahr>.parquet --season 2025-26`
  (hoopR-mbb-data) → `last-season-rankings.js` (Reiter „Vorsaison“) und `rolling-rankings.js`.
- `TEAM_META` in `sync-fantrax.js`: feste Team-IDs, Owner (= Name in der NIL-Auktion), Farben.

## Seiten

Übersicht, Teams & Kader, Tabelle, Spielplan (`tools/cbb-league.js`); Live Scores, Player
Rankings, Rolling Rankings, Waiver (NBA-Tools mit `sport: 'cbb'`, Liga-Schlüssel `ncaab`);
NIL-Auktion (`tools/cbb-auction.js`, Bereich „Draft & Picks“).

Waiver-Board: laufende Saison (60 % Saison + 40 % 30 Tage, Gewicht wächst bis 12 Spiele),
Vorsaison und NIL-Wert (per Regression auf die Vorsaison-Skala gebracht).

Offen (Phase 3): Projections, Dynasty Rankings, Trade Analyzer/Finder, Matchup-Planer.
