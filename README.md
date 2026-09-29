# MFHFB HQ

Ein Hauptquartier für alle MFHFB-Ligen: Taco Tuesday, Citizens of Funkytown, Foodball (Bear Witch Project) und Dynasty of Pretend Experts.

Live: https://pizzaratops.github.io/MFHFBHQ/

## Aufbau

| Datei | Zweck |
|---|---|
| `index.html` | Shell: Landing + Liga-Ansicht |
| `js/leagues.js` | **Liga-Registry** – einzige Stelle, an der die Ligen definiert sind (Name, Sport, Plattform, Farben, Modus, alte URL) |
| `js/hub.js` | Routing (`#/`, `#/<liga>`, `#/<liga>/<unterseite>`), Landing, Switch-Leagues-Menü, Theme |
| `css/hub.css` | Styles Shell (MFHFB-Navy/Orange, Barlow Condensed, Hell/Dunkel) |
| `css/app.css` | Styles der nativen Liga-Ansicht (Tabellen, Karten, Navigation) |
| `core/data.js` | Daten-Loader pro Liga (ohne globale Variablen, Ligen kollidieren nicht) |
| `core/pages.js` | Seiten-Registry + UI-Helfer; Tools deklarieren, für welche Ligen sie gelten |
| `tools/*.js` | Die Tools/Seiten (Übersicht, Standings, Matchups, Teams & Roster, …) |

### Neues Tool hinzufügen
1. Datei `tools/<name>.js` anlegen, darin `MFHFB.pages.register({ id, section, label, icon, applies, data, render })`.
2. In `index.html` vor `js/hub.js` einbinden.
3. `applies` bestimmt automatisch, in welchen Ligen es erscheint (z.B. `{ sport: ['nfl'] }`, `{ format: ['dynasty'] }`).

Modi pro Liga (`js/leagues.js`): `legacy` bettet die bisherige Seite ein. Mit `nativePreview: true` gibt es in der Kopfzeile den Button „✨ Neue Version“, über den man die neu gebaute Version schon testen kann (wird pro Liga im Browser gemerkt). Ist die neue Version vollständig, wird `mode` auf `native` gestellt und gilt für alle.

Daten: Übergangsweise liest die neue Version die Datendateien direkt aus den bisherigen Repos (`dataBase`), deren GitHub Actions synchronisieren weiter. Nach dem Umzug der Sync-Scripts zeigt `dataBase` auf `./leagues/<liga>/data/`.

Migrationsplan: Projekt-Doc `claude/mfhfb-hq-migration-plan.md`.

## Konventionen

- localStorage-Keys immer mit Präfix `mfhfb:` (alle GitHub-Pages-Seiten unter `pizzaratops.github.io` teilen sich die Origin).
- Keine npm-Abhängigkeiten in GitHub Actions.
- UI auf Deutsch.
