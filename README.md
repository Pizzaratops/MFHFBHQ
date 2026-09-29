# MFHFB HQ

Ein Hauptquartier für alle MFHFB-Ligen: Taco Tuesday, Citizens of Funkytown, Foodball (Bear Witch Project) und Dynasty of Pretend Experts.

Live: https://pizzaratops.github.io/MFHFBHQ/

## Aufbau (Phase 0)

| Datei | Zweck |
|---|---|
| `index.html` | Shell: Landing + Liga-Ansicht |
| `js/leagues.js` | **Liga-Registry** – einzige Stelle, an der die Ligen definiert sind (Name, Sport, Plattform, Farben, Modus, alte URL) |
| `js/hub.js` | Routing (`#/`, `#/<liga>`, `#/<liga>/<unterseite>`), Landing, Switch-Leagues-Menü, Theme |
| `css/hub.css` | Styles (MFHFB-Navy/Orange, Barlow Condensed, Hell/Dunkel) |

In Phase 0 laufen alle Ligen im Modus `legacy`: Die bisherige Seite wird eingebettet und bleibt unverändert live. Sobald eine Liga migriert ist, wird ihr `mode` in `js/leagues.js` auf `native` gestellt.

Migrationsplan: Projekt-Doc `claude/mfhfb-hq-migration-plan.md`.

## Konventionen

- localStorage-Keys immer mit Präfix `mfhfb:` (alle GitHub-Pages-Seiten unter `pizzaratops.github.io` teilen sich die Origin).
- Keine npm-Abhängigkeiten in GitHub Actions.
- UI auf Deutsch.
