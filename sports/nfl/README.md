# NFL — sportweite Daten & Syncs

Alles hier gilt für **jede** NFL-Liga im Hub (BWP, DOPE, künftige). Tools fordern
diese Dateien mit `sport:<datei>` an (siehe `core/data.js`, `js/leagues.js` → `SPORT_DATA`).

| Datei (`data/`) | Script (`scripts/`) | Workflow | Nutzt |
|---|---|---|---|
| nfl-power-rankings.js | sync-espn-nfl-standings.js | nfl-sync.yml | Power Rankings, NFL Teams |
| nfl-power-score.js | sync-nfl-power-score.js | nfl-sync.yml | NFL Teams (Power Score) |
| matchup-advantage.js | sync-matchup-advantage.js | nfl-sync.yml | Matchup Advantage, Badges, Countdown |
| player-dna.js | sync-player-dna.js | nfl-sync.yml | Player DNA |
| air-yards.js | sync-air-yards.js | nfl-sync.yml | Player DNA |
| player-style.js | sync-player-style.js | nfl-sync.yml | Player DNA |
| college-scouting.js | sync-college-scouting.js (Secret `CFBD_API_KEY`) | nfl-college-scouting.yml | College Scouting |
| nfl-draft-athletic-profiles.js | build-nfl-draft-athletic-profiles.js | nfl-college-scouting.yml | (Zwischenstufe) |
| nfl-profile-comp.js | build-nfl-profile-comp.js | nfl-college-scouting.yml | College Scouting |
| draft-capital-curve.js | build-draft-capital-curve.js | – (einmalig, bei Bedarf lokal) | Athletic Profiles |

Scripts lokal starten: `node sports/nfl/scripts/<script>.js` (aus dem Repo-Root).
Sie schreiben nach `sports/nfl/data/` und nutzen nur Node-Bordmittel.
Umgezogen aus Bear-Witch-Project-HQ am 29.09.2026 (Pfade unverändert relativ,
einzige Änderung: `sync-player-dna.js` bestimmt die Saison selbst statt aus
`js/espn-sync.js`; Override weiter per `DNA_SEASON`).
