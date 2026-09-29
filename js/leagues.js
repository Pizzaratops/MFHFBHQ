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
    platformLeagueId: '91260355',
    accent: '#e0794a',
    accent2: '#4d7bb0',
    mode: 'legacy',
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
    platformLeagueId: '1312799736218017792',
    accent: '#20d3c2',
    accent2: '#f25c8a',
    mode: 'legacy',
    legacyUrl: 'https://pizzaratops.github.io/Dynasty-Of-Pretend-Experts/',
    repo: 'Dynasty-Of-Pretend-Experts',
  },
];
