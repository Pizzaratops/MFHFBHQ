# MFHFB HQ

Ein Hauptquartier für alle MFHFB-Ligen: Taco Tuesday (TTHQ), Citizens of Funkytown, Foodball (Bear Witch Project), Dynasty of Pretend Experts (DOPE) und Dizzle CBB (College Basketball, NIL-Auktion).

Live: https://pizzaratops.github.io/MFHFBHQ/ · als App installierbar (Manifest; öffnet dann direkt die zuletzt genutzte Liga).

## Aufbau

```
index.html            Shell: Landing + Liga-Ansicht. Script-Reihenfolge: leagues → core → sports → tools → hub
manifest.webmanifest  PWA (Icons in icons/)
js/leagues.js         Liga-Registry: einzige Stelle, an der die Ligen definiert sind
js/hub.js             Routing (#/<liga>/<seite>/<params…>), Landing, Switch Leagues, Theme,
                      gruppierte Navigation (Desktop: klappbare Bereiche · Mobil: Bereich-Chips + Unterseiten),
                      iframe für Ligen im Legacy-Modus
core/data.js          Daten-Loader (const-Datendateien per fetch, ohne Globals; "?name" optional,
                      "sport:name" = sportweite Daten aus SPORT_DATA[sport].dataBase)
core/pages.js         Seiten-Registry (applies / when / data) + UI-Helfer
core/charts.js        SVG-Radar, Bump-Chart, Modal
core/espn.js          ESPN-Abruf im Browser über den eigenen Cloudflare-Worker (+ Fallback-Proxies)
core/share.js         „📸 Teilen“: Bereiche mit data-share (+ Standard-Karten) als PNG teilen/speichern
vendor/               html2canvas 1.4.1 (MIT), nur beim Teilen nachgeladen
sports/nfl/           NFL-weit: Teams, Matchup-Engine, Matchup Advantage, Fantasy Units … + scripts/ + data/
sports/nba/           NBA-weit: nba.js (Kategorien, Score-Modi, Namen) + scripts/ + data/  (siehe README dort)
leagues/<liga>/       Liga-Daten + Sync-Scripts (Layout der alten Repos gespiegelt)
tools/nfl-*.js        NFL-Seiten (BWP, DOPE)
tools/nba-*.js        NBA-Seiten (TTHQ, Funkytown)
tools/cbb-auction.js  CBB: NIL-Auktion (Board, Mein Plan, Budgets, Preise 2025) — Daten leagues/cbb/data/nil-auction.js
tools/home.js         Übersicht (alle Ligen)
css/hub.css           Shell (MFHFB-Navy/Orange, Barlow Condensed, Hell/Dunkel)
css/app.css           Basis der nativen Ansicht (Layout, Navigation, Tabellen, Karten, Charts, Teilen)
css/nfl.css, nba.css, cbb.css  sportspezifische Styles
.github/workflows/    Sync-Workflows (nfl-*, bwp-*, dope-*, nba-*, tthq-*, funkytown-*)
```

### Neues Tool hinzufügen
1. Datei `tools/<sport>-<name>.js` anlegen, darin `MFHFB.pages.register({ id, section, label, icon, applies, data, render, mount })`.
2. In `index.html` vor `js/hub.js` einbinden.
3. `applies` bestimmt, in welchen Ligen es erscheint (z. B. `{ sport: ['nba'], keepers: [true] }`); `when: league => …` für Sonderfälle (z. B. nur Ligen mit Saison-Archiv).
4. Teilbare Bereiche mit `data-share="Titel"` markieren — der Hub hängt den „📸 Teilen“-Knopf automatisch an.

Modi pro Liga (`js/leagues.js`): `legacy` bettet die bisherige Seite ein; mit `nativePreview: true` gibt es den Button „✨ Neue Version“ (pro Liga im Browser gemerkt). `native` = neue Version für alle.

Stand: BWP + DOPE `native` mit Daten im Hub. TTHQ + Funkytown noch `legacy` + Vorschau, Daten noch aus den alten Repos — die Hub-Syncs laufen parallel (Cutover-Schritte: `sports/nba/README.md`).

Migrationsplan: Projekt-Docs `claude/mfhfb-hq-migration-plan.md` und `claude/mfhfb-nba-phase2-status.md`.

## Konventionen

- localStorage-Keys immer mit Präfix `mfhfb:` bzw. `mfhfb:<liga>:` (alle GitHub-Pages-Seiten unter `pizzaratops.github.io` teilen sich die Origin).
- Keine npm-Abhängigkeiten in GitHub Actions; Secrets nur als GitHub-Secrets, nie in Dateien.
- Sync-Workflows: `continue-on-error` je Schritt, ein Commit am Ende, Push mit Retry, `concurrency` je Datenbereich.
- UI auf Deutsch.
