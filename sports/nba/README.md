# NBA — sportweite Daten & Syncs (+ Liga-Ketten TTHQ / Funkytown)

Umgezogen aus Taco-Tuesday-HQ (TTHQ, ESPN 44361109, Dynasty) und
Citizens-of-Funkytown (ESPN 15679, Redraft) am 29.09.2026.
**Stand: vorbereitet, noch nicht aktiv** — der Hub liest die NBA-Daten weiter aus
den alten Repos (`js/leagues.js`), bis der Cutover unten erledigt ist.

## Aufbau

```
sports/nba/                 sportweit = für JEDE NBA-Liga gleich
├─ data/                    Tools laden sie mit "sport:<datei>"
├─ scripts/                 Pipeline + Builder (Pfade relativ wie im alten Repo)
│  ├─ data/                 Roh-Tagesdateien daily-9cat_<liga>_<datum>.csv/.meta.json/.games.json
│  └─ lib/nba-sportsdataverse.js
└─ nba.js                   (Frontend, unverändert)

leagues/tthq/               Repo-Layout von Taco-Tuesday-HQ gespiegelt
├─ data/  scripts/ (+ scripts/data: pick-trades-manual.txt, consensus-keep-list.txt)
└─ js/espn-sync.js, best-available.js, trade-analyzer.js   (nur als Config/Daten für die Scripts)

leagues/funkytown/          Repo-Layout von Citizens-of-Funkytown gespiegelt
├─ data/  scripts/ (+ lib/espn-matchups.js, scripts/data/consensus-keep-list.txt)
└─ js/espn-sync.js, best-available.js
```

### Sportweit (`sports/nba/data/`)
| Datei | erzeugt von | Hinweis |
|---|---|---|
| livescores-daily.js | convert-to-livescores.js | Tages-Z-Scores je ESPN-Liga (nba, nba-preseason, Summer Leagues) |
| livescores-boxscores.js | convert-to-boxscores.js | Box Scores je Spiel |
| livescores-aggregate.js | update-all-aggregates.js | Weekly/Monthly |
| offseason-rankings.js | build-offseason-rankings.js | Summer League + Preseason |
| rolling-rankings-2026-27.js | build-rolling-archive.js | laufende Saison |
| postdraft-board.js | build-postdraft-board.js | Big Board + Draft Capital + Off-Season + Sticky Score (GitHub-CSV) |
| nba-power-rankings.js, nba-power-score.js | build-nba-power-rankings.js / -score.js | Matchup-Wochen aus der TTHQ-Liga (`leagues/tthq/js/espn-sync.js`) |
| preseason-score.js (+ preseason/<Saison>/games/*.json Cache) | update-preseason-score.js (Logik: preseason-score.js) | Preseason Score, Seite „🌱 Preseason“; lädt schon vor dem Cutover aus dem Hub (`./`-Pfad in `files`) |
| preseason-baseline-2025-26.json | build-baseline.py (jährlich) | Vorsaison-Werte je ESPN-Athlete-ID + Positions-Referenz |
| aliases.js, rolling-rankings.js, season-rankings.js, last-season-stats-2003-04 … 2024-25, draft-class-2025/2026, draft2026/2027, draft-capital-2026 | statisch / manuell | in beiden Repos identisch (aliases: TTHQ-Fassung = Obermenge) |

### Liga-eigen (`leagues/<liga>/data/`)
- **beide:** teams-rosters, rosters-live, live-projections, projections-baseline/-consensus,
  team-analytics, best-available-board, last-season-stats-2025-26 (Versionen unterscheiden sich!),
  stats.js, draft-results-*
- **TTHQ:** rankings, hashtag, dynasty-live, dynasty-rolling, picks, picks-live, trade-history,
  fantasy-power-score, season-2021-22 … 2025-26
- **Funkytown:** players, season-history, season-matchups, league-dues

Nicht übernommen: `projectionsbaseline.js`/`projectionsconsensus.js` und die
Script-Duplikate ohne Bindestrich (nirgends referenziert), `scripts/lib/aggregate-core.js`
(unbenutzt), `bump-data-version.js`, `probe-espn-picks.js`, `draft-capital-2026.js` im
Script-Ordner (Kopie der Datendatei), der `projections/`-Ordner (Fantrax/ADP-Toolkit).

## Datenfluss

```
nba-sync.yml  (halbstündlich 06–22 Uhr Berlin, :07/:37)
 gate ──► sport (sports/nba)                                   ──► tthq      (leagues/tthq)
          daily-9cat ─► convert-to-livescores                        sync-espn-rosters (+Trades)
                     └► convert-to-boxscores                         sync-espn-picks
          prune-raw-data (CSV 400 d, games.json 120 d)               build-live-projections ◄─ Roh-CSVs, aliases
          update-all-aggregates                                      build-team-analytics
          build-offseason-rankings ─► build-postdraft-board          build-best-available-board ◄─ aggregate, offseason,
          build-rolling-archive                                      build-dynasty-live             rolling, postdraft …
          (09/21 Uhr: build-nba-power-rankings/-score)          ──► funkytown (leagues/funkytown)
                                                                     sync-espn-rosters, sync-espn-matchups,
                                                                     build-live-projections, build-team-analytics,
                                                                     build-best-available-board
```

Die Liga-Scripts lesen sportweite Eingaben über `SPORT_DATA`
(`sports/nba/data/`) bzw. die Roh-CSVs aus `sports/nba/scripts/data/` — jede
Änderung ist im Script mit `MFHFB HQ` kommentiert. Formeln unverändert.

## Workflows (`_workflows-nach-github-kopieren/`)

| Workflow | Auslöser | schreibt | concurrency |
|---|---|---|---|
| nba-sync.yml | 35 Crons (halbstündlich 06–22 Berlin) + manuell (Datum, Liga-Slug, Power) | sports/nba/data, sports/nba/scripts/data — ruft danach tthq-sync + funkytown-sync auf | nba-data |
| tthq-sync.yml | von nba-sync (workflow_call) + manuell | leagues/tthq/data | tthq-data (Job) |
| funkytown-sync.yml | von nba-sync (workflow_call) + manuell | leagues/funkytown/data | funkytown-data (Job) |
| funkytown-standings.yml | manuell (Saison/Bereich) | leagues/funkytown/data/season-history.js | funkytown-data |
| nba-backfill.yml | manuell | sports/nba | nba-data |
| nba-draft-results.yml | manuell, Liga wählbar | leagues/<liga>/data/draft-results-*.js | <liga>-data |
| tthq-pick-journal.yml | manuell | leagues/tthq/data/picks-live.js | tthq-data |
| nba-preseason.yml | täglich 10:00 UTC + manuell (force) | sports/nba/data/preseason-score.js, data/preseason/ | nba-preseason |

**Warum so:** Die Liga-Ketten brauchen die Sportdaten desselben Laufs. Ein
einziger geplanter Workflow mit `needs: sport` garantiert die Reihenfolge, das
Zeitfenster wird einmal geprüft (ein `workflow_run`-Trigger würde auch nach jedem
der übersprungenen Doppel-Crons feuern), und `nba-data` verhindert überlappende
Läufe. Jeder Job committet nur seinen eigenen Ordner → der Rebase in der
Push-Schleife ist immer konfliktfrei (auch gegenüber BWP/DOPE/NFL). Jeder Schritt
hat `continue-on-error`; am Ende ein Commit, der Job wird trotzdem rot, wenn ein
Schritt scheiterte. Die Liga-Jobs laufen auch, wenn der Sport-Job rot ist
(Kader/Trade-Erkennung sollen nicht an ESPN-Scoreboard-Fehlern hängen). Die
Liga-Jobs checken die Branch-Spitze aus (`ref: github.ref`), also inklusive des
Sport-Commits.

Zusammengelegt/entfallen gegenüber den alten Repos:
- TTHQ `daily-9cat.yml` + Funkytown `daily-9cat.yml` → nba-sync + tthq-sync + funkytown-sync
- TTHQ `workflow-nba-power-rankings.yml` / `-power-score.yml` → Schritte in nba-sync (09/21 Uhr)
- `backfill-9cat.yml` (2×) → nba-backfill; `fetch-draft-results.yml` (2×) → nba-draft-results
- Funkytown `fetch-espn-standings.yml` → funkytown-standings; TTHQ `apply-pick-journal.yml` → tthq-pick-journal
- **entfällt:** bump-data-version (Hub hat keine versionierten Script-Tags, der Loader
  macht stündliches Cache-Busting), `probe-espn-picks.yml` (einmalige Diagnose),
  `projections-*.yml` (3×, Fantrax/ADP-Toolkit unter `projections/` — im Hub kein
  Verbraucher; laufen bei Bedarf im alten Repo weiter)
- `build-fantasy-power-score.js` (TTHQ) liegt bei, war aber schon vorher in keinem
  Workflow — bei Bedarf lokal starten.

## Scripts lokal

Aus dem jeweiligen Ordner (wie im alten Repo):
```
cd sports/nba        && node scripts/daily-9cat.js [YYYY-MM-DD] [--league=auto|nba|nba-summer-…]
cd leagues/tthq      && node scripts/build-best-available-board.js
cd leagues/funkytown && node scripts/build-live-projections.js --league=nba
```
Manuelle Liga-Tools (unverändert, nur Pfade): import-projections-baseline,
build-consensus-projections (rosters-data.js als 3. Argument, `projections/` ist nicht
umgezogen), blend-dynasty-with-external, build-dynasty-rolling,
import-dynasty-rolling-snapshot (TTHQ); `convert-bbm-last-season.py` (sportweit).

## Änderungen an Scripts (alle mit `MFHFB HQ` kommentiert)

- `daily-9cat.js`: TTHQ-Fassung (Box Scores, geplante Spiele) + Auto-Modus aus Funkytown
  (gestern+heute, Juli = Summer-League-Slugs, **Preseason → Liga `nba-preseason`**).
  Mit Mock-ESPN gegengeprüft: reguläre Spieltage byte-identisch zur TTHQ-Ausgabe,
  Preseason-CSV byte-identisch zur Funkytown-Ausgabe.
- `convert-to-livescores.js` / `convert-to-boxscores.js`: Auto-Modus (alle Ligen mit Tagesdatei).
- `prune-raw-data.js`: optional `--keep-days-games`; Workflow: CSV 400 Tage, games.json 120.
- `build-offseason-rankings.js`: nur CSVs ab 1. Juni des laufenden Off-Season-Jahres (`--since`).
- `build-live-projections.js` (beide Ligen): nur CSVs ab 1. August des Saisonjahres (`--since`);
  CSV-Ordner = `sports/nba/scripts/data`; wenn die Baseline keine z-Werte hat (TTHQ, alle 0),
  wird z mit derselben Pool-Formel wie ab Saisonstart berechnet.
- `build-nba-power-*.js`: ESPN-Config aus `leagues/tthq/js/espn-sync.js`.
- `backfill-9cat.js`: konvertiert mit `--league=auto` (wegen Preseason-Aufteilung).
- Liga-Scripts: sportweite Dateien über `SPORT_DATA`.

## Cutover (To-do Beyaz)

1. Alle 7 Dateien aus `_workflows-nach-github-kopieren/` nach `.github/workflows/`
   verschieben (tthq-sync.yml und funkytown-sync.yml werden von nba-sync.yml aufgerufen,
   müssen also mit). Pushen. Keine Secrets nötig.
2. Actions → „NBA Sync“ → *Run workflow* einmal manuell starten, dabei **Power**
   anhaken. Prüfen: Jobs gate/sport/tthq/funkytown grün, drei Commits
   (`chore: nba sync (sportweit)`, `chore: tthq sync`, `chore: funkytown sync`).
3. Ein paar Tage parallel laufen lassen (alte Repos laufen weiter, der Hub liest noch
   von dort). Stichprobe: `sports/nba/data/livescores-daily.js` vs. alte Repos.

### Umstelltag (Checkliste)

Erledigt: Schritte 1–3 (Workflows laufen seit 29.09. parallel).

4. **Handgepflegte Dateien holen:** Actions → „NBA Umstelltag — handgepflegte
   Dateien …“ (`nba-import-manual.yml`, liegt in `_workflows-nach-github-kopieren/`)
   erst mit *dry_run* ✔ starten und im Log prüfen, dann ohne dry_run. Holt u. a.
   TTHQ `rankings.js`, `hashtag.js`, `projections-*`, `picks.js`, `trade-history.js`,
   `teams-rosters.js`, `pick-trades-manual.txt`; Funkytown `league-dues.js`,
   `players.js`, `projections-*`, `teams-rosters.js`; sportweit `aliases.js`,
   `draft2027.js` und das `DRAFT_2026`-Array (Hub-`draft2026.js` bleibt ohne UI-Code).
5. **Umschalten:** in `js/leagues.js` `const NBA_CUTOVER = false;` → `true`.
   Das stellt `SPORT_DATA.nba` auf `sports/nba/data/`, TTHQ/Funkytown auf
   `leagues/<liga>/data/` und beide Ligen auf `mode: 'native'` (Button
   „✨ Neue Version“ verschwindet). Pushen, Seite prüfen.
6. **Weiterleitungen:** `_fuer-alte-repos/Taco-Tuesday-HQ/index.html` bzw.
   `…/Citizens-of-Funkytown/index.html` ins jeweilige alte Repo kopieren und pushen.
   Alte Links (`#matchup`, `#rankings`, `#beitraege` …) landen auf der passenden
   Hub-Seite; `?legacy=1` öffnet die alte Seite weiterhin.
   ⚠️ Vorher dort `bump-data-version` abschalten (schreibt sonst `index.html` um).
7. **Alte Workflows abschalten** — TTHQ: daily-9cat, bump-data-version,
   workflow-nba-power-rankings, workflow-nba-power-score, backfill-9cat,
   fetch-draft-results, apply-pick-journal, probe-espn-picks (projections-* nur,
   wenn das Fantrax/ADP-Toolkit nicht mehr gebraucht wird); Funkytown: alle.
   Den externen cron-job.org-Trigger für TTHQ `daily-9cat` deaktivieren.
8. Danach (Claude): iframe/Legacy-Code aus `js/hub.js` entfernen, sobald keine
   Liga mehr `legacy` ist.

## Bekannte Daten-Bugs (Stand 29.09.2026)

- **TTHQ LIVE_PROJECTIONS alle z=0** — Ursache: `projections-baseline.js` hat für alle 533
  Spieler z:0; vor Saisonstart übernimmt das Script den Baseline-z. **Im Hub behoben**
  (z per Pool-Formel, Top: Wembanyama, Jokić, SGA); greift beim ersten Lauf. Alte Seite unverändert.
- **prune 120 Tage vs. Saison-Summen** — war noch nicht eingetreten, hätte aber ab ~31.10.
  die Summer-League-CSVs aus den Off-Season-Rankings gelöscht und ab ~Feb. den
  Saisonanfang aus den Live-Projections. **Im Hub behoben** (s. o.).
- **TTHQ daily-9cat ohne Preseason-Schutz** — **im Hub behoben** (Auto-Modus). Die alte
  TTHQ-Action würde ab Preseason-Start (Anfang Oktober) Preseason-Spiele als `nba` speichern.
- **Funkytown `stats.js` SEASON_STATS = TTHQ-Werte** — weiterhin vorhanden (Seed-Kopie). Der
  Hub nutzt SEASON_STATS nicht (`tools/nba-analytics.js` lässt sie weg); echte
  Funkytown-Werte bräuchten die Saison-Totals 2025/26 je Team.

## Preseason Score (seit 06.10.2026)

Skill-Profil für die neue Saison aus Preseason + Vorsaison (Shrinkage je Stat,
Preseason-Korrektur, Tiers A–E, Rolle über Preseason-Minuten, „echte
Veränderungen“ als Badges). Statistik extern validiert (2014–2026), **Formeln und
Konstanten in `scripts/preseason-score.js` nicht ändern** (Ausnahme:
`parseEspnSummary()`, falls ESPN das Boxscore-Format ändert).

- Workflow `nba-preseason.yml` → `scripts/update-preseason-score.js` (im Ordner
  sports/nba): ESPN-Scoreboard `seasontype=1` ab 25.09. → neue Spiele per Summary
  laden → Cache `data/preseason/<Saison>/games/<id>.json` (nie neu geladen) →
  `data/preseason-score.js`. Außerhalb von 25.09. + 40 Tagen sofort Ende; manuell
  mit `force=true`. Schreibt nur bei inhaltlicher Änderung.
- Eigener ESPN-Abruf statt der daily-9cat-Rohdateien: dort fehlen OREB/DREB, PF,
  Starter, Athlete-IDs und Team-Summen, die der Score braucht.
- Seite `tools/nba-preseason.js` (#/<liga>/preseason), eine Datei für beide Ligen.
  Liga-Status (Mein Team / FA / Fantasy-Team) über die Kader per Namen (die
  Kader-Dateien haben keine ESPN-IDs); „Mein Team“ wird je Liga im Browser gemerkt.
  Redraft-Ligen starten mit „Waiver-Kandidaten“ (FA + Rolle ⬆️ oder ↑-Badge).
- **Jedes Jahr im September:** `python3 scripts/build-baseline.py 2027` (im Ordner
  sports/nba, braucht pandas + pyarrow) → `data/preseason-baseline-2026-27.json`
  committen. Das Script wählt automatisch die Baseline der Vorsaison.

