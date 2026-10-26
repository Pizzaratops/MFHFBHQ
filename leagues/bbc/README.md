# Banana Boat Crew (ESPN 1761634032)

H2H **Points**, Redraft, 10 Teams, Auktions-Draft ($200), Aufstellung PG/SG/SF/PF/C/UTIL + 4 Bank + 1 IR,
täglicher Lineup-Lock je Spiel, 18 Hauptrunden-Wochen, Top 6 in die Playoffs, zusätzlich jede Woche ein
Spiel gegen den Median. Beyaz = **Flying Illini** (Team 2). Im Hub seit 26.10.2026.

Scoring: PTS +1 · REB +1 · AST +2 · STL +4 · BLK +4 · TO −2 · FGM +2 · FGA −1 · FTM +1 · FTA −1 · 3PM +1
(wird bei jedem Sync aus ESPN gelesen, Seiten rechnen immer mit dem aktuellen Stand).

## Daten (`data/`, bbc-sync.yml nach dem sportweiten nba-sync)

| Datei | Script | Inhalt |
|---|---|---|
| teams.js | sync-espn.js | TEAMS (Name, Kürzel, Owner, Bilanz, Farben, Logo); id = ESPN-Team-ID |
| rosters-live.js | sync-espn.js | ROSTERS_LIVE mit Slot, Positionen, Verletzung |
| league-info.js | sync-espn.js | Scoring, Aufstellung, Wochen → Spieltage, alle Matchups mit Tagespunkten, Median-Flag |
| nba-schedule.js | sync-espn.js | NBA-Spielplan je Team und ESPN-Spieltag (Planer, Streaming, Rest-Spiele) |
| players.js | sync-espn.js | alle aktiven NBA-Spieler: Positionen, Team, Verletzung (für freie Spieler) |
| draft-results.js | sync-espn.js | Auktion mit Geboten |
| transactions.js | sync-espn.js | Adds/Drops/Trades (inkrementell, letzte 3 Spieltage je Lauf) |
| points.js | build-points.js | FP je Spieler mit Liga-Scoring: Saison, letzte Nacht, 7/14/30 Tage, Projektion, Preseason, Rest-FP |
| sync-status.js | sync-espn.js | Diagnose des letzten Laufs |

**Die Liga ist privat:** ESPN liefert nur mit Beyaz' Cookies (Repo-Secrets `ESPN_S2` + `SWID`, dieselben wie BWP).
Laufen die Cookies ab, steht in `sync-status.js` ein HTTP 401 → neue Cookies als Secrets hinterlegen.

**Wochen → Spieltage:** ESPN gibt in `matchupPeriods` nur `[Woche]` zurück. Abgeschlossene Wochen: echte
Spieltage aus `pointsByScoringPeriod`; künftige: Montag–Sonntag, die All-Star-Woche im Februar wird mit der
folgenden verbunden. (Gleiche Logik jetzt auch im 9-Cat-Planer, `MFHFB.nba.periodDays`.)

## Seiten (`tools/nba-points.js`, nur Points-Ligen)

Übersicht · Tabelle (inkl. Median, All-Play, Glück) · Matchups (Tagespunkte, Projektion, Siegchance) ·
Matchup-Planer (beste Aufstellung je Tag, Streaming-Vorschläge) · Teams & Kader · Waiver & Streaming ·
Transaktionen · Trade Analyzer (FP/Tag mit bester Aufstellung, Kadergröße konstant) · Spieler-Rankings.
Dazu die allgemeinen Seiten Draft Results (mit $), Rollen & Matchups (Δ FP), NBA-Teams, Spielplan.

Projektion je Tag: projizierte FP/Spiel × Pace/Gegner × (1 − Back-to-back-Pause) aus dem Play-by-Play.
Siegchance: Normalverteilung aus Spiel-Streuung (CV 0,38 je Spieler-Spiel) + 8 % Modell-Unsicherheit.
