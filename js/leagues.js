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
//  dues:        Beitragsregeln (siehe tools/league.js).
//  announcements: Aushänge auf der Seite "Regeln & Erklärung".
//  lineupSlots: Starter-Slots (Sleeper-Keys: QB, RB, WR, TE, FLEX, DEF, K,
//               SUPER_FLEX …). Fehlt das Feld, nehmen die Tools die Slots
//               aus den synchronisierten Liga-Settings (LEAGUE_INFO bei
//               Sleeper) bzw. den NFL-Standard.
//  files:       abweichende Datendatei-Namen je Liga ({ logischerName: 'datei' }),
//               z.B. BWP { draft: 'draft2026' }.
//  keepers:     true = Keeper-Liga (Keeper-Übersicht, Keeper im Draft Board).
//  futureRounds: wie viele Runden die Future Draft Boards zeigen (Standard:
//               alle Draft-Runden).
//  legacyStoragePrefix: localStorage-Präfix der bisherigen Seite ('bwp',
//               'dpe'), damit z.B. dort gesicherte Matchup-Snapshots
//               weiter gefunden werden (nur lesend).
//
//  accent / accent2: Liga-Farben aus den jeweiligen Legacy-Stylesheets
//  (Dark-Mode-Werte), damit jede Liga ihren Look behält.
//
//  Siehe Projekt-Doc claude/mfhfb-hq-migration-plan.md.
// ============================================================

// Sportweite Datenquellen: Dateien, die für alle Ligen eines Sports gleich
// sind (per "sport:<datei>" in einem Tool angefordert). Übergangsweise der
// data/-Ordner von BWP (dort laufen die nflverse-/CFBD-Syncs); nach dem
// Umzug der Sync-Scripts ./sports/nfl/data/.
const SPORT_DATA = {
  nfl: { dataBase: 'https://pizzaratops.github.io/Bear-Witch-Project-HQ/data/' },
};

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
    lineupSlots: ['QB', 'RB', 'RB', 'WR', 'WR', 'TE', 'FLEX', 'DEF', 'K'],
    legacyStoragePrefix: 'bwp',
    files: { draft: 'draft2026' },
    keepers: true,
    futureRounds: 5,
    notes: {
      standings: 'W1 & W2 stammen aus dem Archiv (ESPN-Draft-Reset am 23.09.) und zählen voll für Standings, Playoffs und Draft-Reihenfolge.',
    },
    // Liga-Beiträge: unbezahlt in der laufenden Saison = "muss zahlen";
    // Zukunftsjahre ebenso, sobald das Team an einem Pick-Trade dieses Jahres beteiligt ist
    dues: { currentOwes: true, tradedPicksOwe: true },
    // Aushänge auf "Regeln & Erklärung" (HTML, von Hand gepflegt)
    announcements: [
      { title: '🎯 Der ESPN-Draft wurde zurückgesetzt <small class="muted">· 23.09.2026</small>', html: '<p>Ich weiß nicht wie, aber alle Picks weg, Liga-Status wieder "pre-draft") und kann nicht rückgängig gemacht werden. ESPN zählt die Saison danach ab der aktuellen Woche neu, Woche 1 und 2 kennt ESPN selbst nicht mehr.</p><p>Ich habe alle Spieler hoffentlich korrekt hinzugefügt.</p>' },
      { title: '✅ Was auf dieser Seite trotzdem sicher ist', html: '<ul><li>Woche 1 &amp; 2 Ergebnisse, Punkte und Bilanzen sind fest im System hinterlegt und werden durch nichts mehr überschrieben, auch wenn ESPN sie vergessen hat.</li><li>Draft-Board 2026 &amp; Keeper-Übersicht, werden auf dieser Seite ohnehin nie automatisch synchronisiert, sondern von Hand gepflegt. Davon ist also nichts betroffen.</li></ul>' },
      { title: '📈 Wie es weitergeht', html: '<p>Ab jetzt läuft der automatische Sync mit ESPN wieder normal, aber mit einer wichtigen Ausnahme: Woche 1 und 2 bleiben stehen, und alles, was ESPN ab jetzt an neuen Wochen liefert, wird einfach oben draufaddiert.</p><p>Damit stimmen auf dieser Seite Standings, PF/PA, Playoff-Seeding und die Draft-Reihenfolge fürs nächste Jahr über die komplette Saison, auch wenn ESPN selbst nur ab der neuen Startwoche zählt.</p>' },
      { title: '⚠️ Wichtig für alle Owner', highlight: true, html: '<p><b>Maßgeblich ist ab jetzt diese Website, nicht die ESPN-App.</b> ESPN selbst zeigt intern eine falsche bzw. unvollständige Bilanz und ein falsches Playoff-Bild, weil ESPN Woche 1 und 2 nicht mehr kennt.</p>' },
    ],
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
    legacyStoragePrefix: 'dpe',
    notes: {
      dues: '2026 ist von allen bezahlt.',
    },
    legacyUrl: 'https://pizzaratops.github.io/Dynasty-Of-Pretend-Experts/',
    repo: 'Dynasty-Of-Pretend-Experts',
  },
];
