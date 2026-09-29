// ============================================================
//  MFHFB HQ — Liga-Registry
// ============================================================
//  EINZIGE Stelle, an der die vier Ligen definiert sind. Landing,
//  Switch-Leagues-Menü und Liga-Ansicht lesen alles von hier.
//
//  mode:
//    'legacy' = Phase 0: die bisherige Seite wird eingebettet (iframe,
//               gleiche Origin pizzaratops.github.io). Alte Repos bleiben
//               unangetastet und live.
//    'native' = Liga ist ins Monorepo migriert (ab Phase 1). Dann rendert
//               die Shell die Liga selbst statt der Einbettung.
//
//  nativePreview: true = die neue, native Version kann über den Button
//               "✨ Neue Version" in der Kopfzeile schon getestet werden,
//               während für alle anderen noch die bisherige Seite läuft.
//  scoring:     'points' | 'categories' — steuert, welche Tools gelten
//               (siehe applies in core/pages.js).
//  dataBase:    Ordner der Datendateien. Übergangsweise der data/-Ordner
//               der bisherigen Seite (deren Actions synchronisieren weiter),
//               nach dem Umzug der Sync-Scripts ./leagues/<liga>/data/.
//  notes:       liga-spezifische Hinweistexte für einzelne Tools.
//
//  accent / accent2: Liga-Farben aus den jeweiligen Legacy-Stylesheets
//  (Dark-Mode-Werte), damit jede Liga ihren Look behält.
//
//  Siehe Projekt-Doc claude/mfhfb-hq-migration-plan.md.
// ============================================================

const SPORTS = {
  nba: { label: 'Basketball', emoji: '🏀' },
  nfl: { label: 'Football', emoji: '🏈' },
};

const LEAGUES = [
  {
    key: 'tthq',
    name: 'Taco Tuesday HQ',
    short: 'TTHQ',
    emoji: '🌮',
    sport: 'nba',
    platform: 'ESPN',
    format: 'Dynasty',
    scoring: 'categories',
    platformLeagueId: '44361109',
    accent: '#6c63ff',
    accent2: '#f2b84f',
    mode: 'legacy',
    legacyUrl: 'https://pizzaratops.github.io/Taco-Tuesday-HQ/',
    repo: 'Taco-Tuesday-HQ',
  },
  {
    key: 'funkytown',
    name: 'Citizens of Funkytown',
    short: 'Funkytown',
    emoji: '🕺',
    sport: 'nba',
    platform: 'ESPN',
    format: 'Redraft',
    scoring: 'categories',
    platformLeagueId: '15679',
    accent: '#ff6584',
    accent2: '#6c63ff',
    mode: 'legacy',
    legacyUrl: 'https://pizzaratops.github.io/Citizens-of-Funkytown/',
    repo: 'Citizens-of-Funkytown',
  },
  {
    key: 'bwp',
    name: 'Bear Witch Project',
    short: 'Foodball',
    emoji: '🐻',
    sport: 'nfl',
    platform: 'ESPN',
    format: 'Dynasty',
    scoring: 'points',
    platformLeagueId: '91260355',
    accent: '#e0794a',
    accent2: '#4d7bb0',
    mode: 'legacy',
    nativePreview: true,
    dataBase: 'https://pizzaratops.github.io/Bear-Witch-Project-HQ/data/',
    notes: {
      standings: 'W1 & W2 stammen aus dem Archiv (ESPN-Draft-Reset am 23.09.) und zählen voll für Standings, Playoffs und Draft-Reihenfolge.',
    },
    legacyUrl: 'https://pizzaratops.github.io/Bear-Witch-Project-HQ/',
    repo: 'Bear-Witch-Project-HQ',
  },
  {
    key: 'dope',
    name: 'Dynasty of Pretend Experts',
    short: 'DOPE',
    emoji: '🧐',
    sport: 'nfl',
    platform: 'Sleeper',
    format: 'Dynasty',
    scoring: 'points',
    platformLeagueId: '1312799736218017792',
    accent: '#20d3c2',
    accent2: '#f25c8a',
    mode: 'legacy',
    nativePreview: true,
    dataBase: 'https://pizzaratops.github.io/Dynasty-Of-Pretend-Experts/data/',
    legacyUrl: 'https://pizzaratops.github.io/Dynasty-Of-Pretend-Experts/',
    repo: 'Dynasty-Of-Pretend-Experts',
  },
];
