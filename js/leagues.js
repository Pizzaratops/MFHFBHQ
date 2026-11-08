// ============================================================
//  MFHFB HQ — Liga-Registry
// ============================================================
//  EINZIGE Stelle, an der die Ligen definiert sind. Landing,
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
//  dataBase:    Ordner der Datendateien. Migrierte Ligen: leagues/<liga>/data/
//               (Syncs: leagues/<liga>/scripts/ + .github/workflows/<liga>-*.yml).
//               Noch nicht migrierte: der data/-Ordner der bisherigen Seite.
//  notes:       liga-spezifische Hinweistexte für einzelne Tools.
//  dues:        Beitragsregeln (siehe tools/nfl-league.js).
//  announcements: Aushänge auf der Seite "Regeln & Erklärung".
//  countdowns:  zusätzliche Termine für die Übersicht [{ label, iso }].
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
// sind (per "sport:<datei>" in einem Tool angefordert). Liegen im Hub selbst
// (sports/<sport>/data/), gesynct von .github/workflows/nfl-*.yml mit den
// Scripts aus sports/<sport>/scripts/.
// ------------------------------------------------------------
//  NBA-CUTOVER-SCHALTER
//  false = TTHQ + Funkytown zeigen standardmäßig die alte Seite (iframe),
//          die neue Version per „✨ Neue Version“; Daten aus den alten Repos.
//  true  = beide Ligen nativ für alle, Daten aus sports/nba/data +
//          leagues/<liga>/data (Hub-Syncs). Vorher: Checkliste in
//          sports/nba/README.md („Umstelltag“).
// ------------------------------------------------------------
const NBA_CUTOVER = true; // umgestellt 15.10.2026 (nach dem Funkytown-Draft)

const SPORT_DATA = {
  nfl: { dataBase: 'sports/nfl/data/' },
  // NBA: seit dem Cutover (15.10.2026) aus dem Hub; vorher aus dem alten TTHQ-Repo
  nba: { dataBase: NBA_CUTOVER ? 'sports/nba/data/' : 'https://pizzaratops.github.io/Taco-Tuesday-HQ/data/' },
  // College Basketball (Dizzle CBB): Stats aus sports/cbb (cbb-sync.yml)
  cbb: { dataBase: 'sports/cbb/data/' },
};

const SPORTS = {
  nba: { label: 'Basketball', emoji: '🏀' },
  nfl: { label: 'Football', emoji: '🏈' },
  cbb: { label: 'College Basketball', emoji: '🎓' },
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
    myTeam: 1, // Beyaz (Fighting Illini) – Standard für Royal Rumble
    platformLeagueId: '44361109',
    accent: '#6c63ff',
    accent2: '#f2b84f',
    mode: NBA_CUTOVER ? 'native' : 'legacy',
    nativePreview: !NBA_CUTOVER, // bis zum Cutover: neue Version zum Testen (Button „✨ Neue Version“)
    dataBase: NBA_CUTOVER ? 'leagues/tthq/data/' : 'https://pizzaratops.github.io/Taco-Tuesday-HQ/data/',
    files: { teams: 'teams-rosters', 'live-draft': './leagues/tthq/data/live-draft-2026', 'live-draft-espn': './leagues/tthq/data/live-draft-espn', 'nba-draft': './sports/nba/data/nba-draft-2026', 'preseason-score': './sports/nba/data/preseason-score' },
    keepers: true,
    // Live-Draft-Seite (#/tthq/livedraft): Jahr des laufenden Drafts. Nach dem
    // Draft entfernen oder auf das nächste Jahr setzen.
    liveDraft: 2026,
    // ESPN-Team-ID → interne Team-ID (TEAMS in teams-rosters.js); 12 + 13 = Taxi Squads
    espn: { season: 2027, toTeam: { 1: 1, 2: 2, 4: 3, 7: 4, 5: 5, 11: 6, 8: 7, 10: 8, 6: 9, 14: 10, 3: 11, 9: 12 } },
    // Saison-Archiv (data/season-XXXX-YY.js: Endstand + Kader) — Liga-Historie
    seasonArchive: ['2021-22', '2022-23', '2023-24', '2024-25', '2025-26'],
    seasonMatchups: true,      // data/season-matchups.js (tthq-sync, seit 16.10.2026) → Seite „Tabellenverlauf“
    // Endplatzierungen (nach Playoffs) je Saison wie oben, pro HEUTIGER Team-ID —
    // aus dem alten Standings-Chart (js/standings.js), von Beyaz bestätigt
    // (29.09.2026). Ordnet auch Vorgänger-Franchises zu (z. B. Seagulls ←
    // Angry Ducks). Die Archivdateien liefern nur Bilanz/Kader der regulären
    // Saison. null = in der Saison nicht dabei.
    finalPlaces: {
      1: [1, 3, 2, 1, 1],       // Fighting Illini
      2: [9, 8, 6, 2, 2],       // Seagulls
      3: [10, 11, 4, 4, 3],     // Neukoelln Hustlers
      4: [5, 6, 8, 7, 8],       // Leaveland Cavaliers
      5: [8, 7, 5, 3, 4],       // Anadolu Ballers
      6: [7, 5, 12, 11, 5],     // 3-POINT MAFIA
      7: [6, 10, 7, 6, 7],      // Always Money In The BananaStand
      8: [4, 4, 3, 12, 6],      // Kawhi So Serious
      9: [2, 2, 11, 8, 10],     // Cooking Show
      10: [null, 9, 9, 9, 9],   // S-Town Grizzlies
      11: [null, 12, 10, 10, 12], // Double Dribble Trouble
      12: [3, 1, 1, 5, 11],     // Vancouver Curry-Wurst
    },
    legacyStoragePrefix: 'tthq',
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
    myTeam: 1, // Beyaz (Fighting Illini) – Standard für Royal Rumble
    platformLeagueId: '15679',
    accent: '#ff6584',
    accent2: '#6c63ff',
    // Seit 08.10.2026 vorgezogen (Beyaz: Funkytown soll wie TTHQ aussehen,
    // Draft Day 11.10.): native Hub-Version für alle, Daten aus den
    // Hub-Syncs (leagues/funkytown/data/, handgepflegte Dateien dort sind
    // identisch mit dem alten Repo). Die alte Seite bleibt über „✨“ /
    // ?legacy erreichbar. Projections seit 15.10.2026 sportweit
    // (sports/nba/data/projections-*.js, eine Quelle für alle NBA-Ligen).
    mode: 'native',
    dataBase: 'leagues/funkytown/data/',
    files: { teams: 'teams-rosters', 'draft-results-active': 'draft-results-active', 'preseason-score': './sports/nba/data/preseason-score' },
    countdowns: [{ label: '📋 Draft Day', iso: '2026-10-11T20:30:00+02:00' }],
    // Auction Draft (#/funkytown/auction): Budget + Kaderplätze als Vorgabe;
    // ESPN-Werte aus LEAGUE_DRAFT_INFO (rosters-live.js) haben Vorrang,
    // jeder kann sie auf der Seite für sich überschreiben.
    // basic: öffentliche Liga-Seite → nur Geld/Kader, keine Projection-Werte
    auctionDraft: {
      budget: 200, rosterSize: 14, basic: true,
      // ESPN live: Workflow funkytown-live-auction.yml bzw. Bookmarklet (tools/nba-auction.js)
      espnLive: { file: './leagues/funkytown/data/live-auction', leagueId: 15679, season: 2027, teamMap: { 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 8: 6, 9: 7, 10: 8, 11: 9, 13: 10, 14: 11, 15: 12 } },
    },
    // ESPN-Team-ID → interne Team-ID (Stand 17.08.2026)
    espn: { season: 2027, toTeam: { 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 8: 6, 9: 7, 10: 8, 11: 9, 13: 10, 14: 11, 15: 12 } },
    nbaDues: true,             // data/league-dues.js (LEAGUE_DUES_PAID) → Seite „Liga-Beiträge“
    seasonMatchups: true,      // data/season-matchups.js (Wochenergebnisse) → Seite „Tabellenverlauf“
    legacyStoragePrefix: 'cof',
    legacyUrl: 'https://pizzaratops.github.io/Citizens-of-Funkytown/',
    repo: 'Citizens-of-Funkytown',
  },
  {
    // Banana Boat Crew (seit 26.10.2026): ESPN H2H Points, Redraft, 10 Teams.
    // Eigene Points-Seiten (tools/nba-points.js), weil die 9-Cat-Tools mit
    // Kategorie-Z-Werten rechnen. Daten: leagues/bbc/data/ (bbc-sync.yml nach
    // dem sportweiten nba-sync). Team-IDs = ESPN-Team-IDs. Beyaz = Flying Illini (2).
    key: 'bbc',
    name: 'Banana Boat Crew',
    short: 'BBC',
    emoji: '🍌',
    sport: 'nba',
    platform: 'ESPN',
    format: 'Redraft',
    scoring: 'points',
    platformLeagueId: '1761634032',
    accent: '#f5c518',
    accent2: '#2b6cb0',
    mode: 'native',
    dataBase: 'leagues/bbc/data/',
    files: { 'draft-results-active': 'draft-results' },
    myTeam: 2,
    espn: { season: 2027 },
    pages: ['ptshome', 'schedule', 'ptsstand', 'ptsrolling', 'ptsmatch', 'ptsplanner', 'ptsteams', 'ptswaiver', 'ptstx', 'ptstrade', 'draftresults', 'ptsplayers', 'insights', 'nbateams'],
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
    myTeam: 'bear-witch-project', // Beyaz – Standard für Royal Rumble
    platformLeagueId: '91260355',
    accent: '#e0794a',
    accent2: '#4d7bb0',
    mode: 'native',           // Cutover 29.09.2026 — Daten + Syncs unter leagues/bwp/
    dataBase: 'leagues/bwp/data/',
    lineupSlots: ['QB', 'RB', 'RB', 'WR', 'WR', 'TE', 'FLEX', 'DEF', 'K'],
    legacyStoragePrefix: 'bwp',
    files: { draft: 'draft2026' },
    rookieDraft: { teams: 12, rounds: 4 }, // für 📈 Draft Range (College Scouting)
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
    legacyUrl: 'https://pizzaratops.github.io/Bear-Witch-Project-HQ/?legacy=1',
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
    mode: 'native',           // Cutover 29.09.2026 — Daten + Syncs unter leagues/dope/
    dataBase: 'leagues/dope/data/',
    rookieDraft: { teams: 14, rounds: 4 }, // für 📈 Draft Range (College Scouting)
    // Zusätzliche Countdowns auf der Übersicht (aus LEAGUE_COUNTDOWNS, js/league-config.js)
    countdowns: [{ label: '🏆 Playoffs (Woche 15)', iso: '2026-12-18T02:15:00+01:00' }],
    legacyStoragePrefix: 'dpe',
    notes: {
      dues: '2026 ist von allen bezahlt.',
    },
    // Aushänge auf „Regeln & Erklärung“ — u. a. Wetten zwischen Ownern (Einsatz = Picks)
    announcements: [
      { title: '🤝 Wette um den 1st 2031 <small class="muted">· vereinbart 06.11.2026 im Gruppenchat</small>', highlight: true,
        html: '<p><b>San José Salamancas</b> 🦎 (Pat) gegen <b>South Steglitz Sharknados</b> 🦈 (Luca).</p><ul><li><b>Wette:</b> Pat ist in der <b>nächsten Saison (2027)</b> besser als Luca.</li><li><b>Einsatz:</b> der eigene <b>1st-Round-Pick 2031</b>. Wer verliert, gibt seinen 1st 2031 an den anderen ab.</li><li><b>Fällig:</b> nach Abschluss der Saison 2027, Pick-Übertrag in Sleeper durch den Commissioner.</li><li><b>Noch offen:</b> was „besser“ genau heißt (Endplatzierung inkl. Playoffs oder Platz nach der regulären Saison).</li></ul>' },
    ],
    // Randnotizen an Teams (Team-Kachel + Team-Seite), Schlüssel = Team-ID aus data/teams.js
    teamNotes: {
      lovethecheesehead: [{ icon: '🤝', short: 'Wette: 1st 2031', text: 'Wette mit den South Steglitz Sharknados (Luca): Pat ist 2027 besser als Luca. Einsatz: 1st 2031, der Verlierer gibt seinen ab. Details unter Regeln & Erklärung.', page: 'erklaerung' }],
      dickvanhurik: [{ icon: '🤝', short: 'Wette: 1st 2031', text: 'Wette mit den San José Salamancas (Pat): Pat ist 2027 besser als Luca. Einsatz: 1st 2031, der Verlierer gibt seinen ab. Details unter Regeln & Erklärung.', page: 'erklaerung' }],
    },
    legacyUrl: 'https://pizzaratops.github.io/Dynasty-Of-Pretend-Experts/?legacy=1',
    repo: 'Dynasty-Of-Pretend-Experts',
  },
  {
    // 31.10.2026: Alle 32 NFL-Teams als Fantasy-Teams. Pro Woche zählt die
    // bestmögliche Aufstellung aus den eigenen Spielern (QB, 2 RB, 2 WR, TE,
    // 2 FLEX, K, DEF) mit DOPE-Scoring; Wertung nur All-Play (kein H2H).
    // Daten: leagues/nfl32/scripts/sync-nfl32.js (nflverse, dienstags).
    key: 'nfl32',
    name: 'NFL 32',
    short: 'NFL 32',
    emoji: '🏟️',
    sport: 'nfl',
    platform: 'nflverse',
    format: 'All-Play, Best Ball',
    scoring: 'allplay',
    accent: '#3b82f6',
    accent2: '#f59e0b',
    mode: 'native',
    dataBase: 'leagues/nfl32/data/',
    pages: ['home', 'n32table', 'n32rolling', 'n32sched', 'n32week', 'n32team', 'n32compare', 'n32pos', 'nflrankings'],
  },
  {
    // 01.11.2026: Gegenstück zu NFL 32 — alle 30 NBA-Teams als Fantasy-Teams.
    // Pro Spiel die beste Aufstellung (PG/SG/SF/PF/C/UTIL) mit dem Points-
    // Scoring der Banana Boat Crew, Woche = Summe aller Spiele (BBC-Perioden),
    // Wertung All-Play. Daten: leagues/nba30/scripts/sync-nba30.js (NBA-Sync).
    key: 'nba30',
    name: 'NBA 30',
    short: 'NBA 30',
    emoji: '🏀',
    sport: 'nba',
    platform: 'ESPN Box Scores',
    format: 'All-Play, Best Ball',
    scoring: 'allplay',
    accent: '#f97316',
    accent2: '#3b82f6',
    mode: 'native',
    dataBase: 'leagues/nba30/data/',
    pages: ['home', 'n32table', 'n32rolling', 'n32sched', 'n32week', 'n32team', 'n32compare', 'n32pos'],
  },
  {
    // Fantrax NBA World Cup 2026-27 — ganze Liga seit 08.11.2026 (vorher nur Draft-Hilfe).
    // Conference West = Fantrax-Liga nq58zcxtmutve46g mit 12 Divisionen à 12 Teams; gespielt
    // wird nur in der Division (Seattle), 9-Cat H2H, Free Agents je Division, keine Trades.
    // Daten: leagues/worldcup/scripts/sync-fantrax.js (worldcup-sync.yml, stündlich) →
    // leagues/worldcup/data. Tabelle/Spielplan: tools/wc-league.js, Rest = NBA-Tools.
    key: 'worldcup',
    name: 'Fantrax World Cup',
    short: 'World Cup',
    emoji: '🌍',
    sport: 'nba',
    platform: 'Fantrax',
    format: 'Waiver, keine Trades',
    scoring: 'categories',
    accent: '#16a34a',
    accent2: '#f2b84f',
    mode: 'native',
    dataBase: 'leagues/worldcup/data/',
    sportDataBase: 'sports/nba/data/',
    platformLeagueId: 'nq58zcxtmutve46g',
    myTeam: 1, // flyingillini (Beyaz)
    // Best-Available-Board ist ligaunabhängig (gegen die Kader wird erst im Browser gefiltert)
    files: { teams: 'teams-rosters', 'best-available-board': './leagues/funkytown/data/best-available-board' },
    pages: ['home', 'wctable', 'wcschedule', 'livescores', 'teams', 'waiver', 'players', 'projections', 'rolling', 'catweb', 'insights', 'nbateams'],
  },
  {
    // basketball.de US-Manager (Salary-Cap-Spiel, seit 19.10.2026): 15 Spieler
    // (min. 5 G / 5 F / 2 C), 63 Mio Budget, alle 15 punkten. Kein Liga-Sync —
    // Gehälter-Basis in leagues/usm/data/usm-base.js (Stand 18.10.2026), wöchentliche
    // Updates per Bookmarklet (tools/usm.js, Seite „Import“), Spielerwerte aus den
    // sportweiten NBA-Projections.
    key: 'usm',
    name: 'basketball.de US-Manager',
    short: 'US-Manager',
    emoji: '💶',
    sport: 'nba',
    platform: 'basketball.de',
    format: 'Salary Cap',
    scoring: 'points',
    accent: '#e84a0c',
    accent2: '#3b82f6',
    mode: 'native',
    dataBase: 'leagues/usm/data/',
    pages: ['usmdraft', 'usmteam', 'usmsalary', 'usmimport'],
  },
  {
    // College Basketball (Dizzles Liga) — ganze Liga seit 16.10.2026 (tools/cbb-league.js + NBA-Tools),
    // (tools/cbb-auction.js). Daten: leagues/cbb/data/nil-auction.js, von Hand
    // aus Dizzle_CBB_Off-season.xlsx erzeugt; Budgets dort in CBB_TEAMS pflegen.
    key: 'cbb',
    name: 'Dizzle CBB',
    short: 'CBB',
    emoji: '🎓',
    sport: 'cbb',
    platform: 'Fantrax',
    format: 'Dynasty',
    scoring: 'categories',
    accent: '#3b82f6',
    accent2: '#f2b84f',
    mode: 'native',
    dataBase: 'leagues/cbb/data/',
    platformLeagueId: 'z8gwfku2mpmwh0xe',
    // Seit 16.10.2026 ganze Liga: Fantrax-Sync (cbb-sync.yml) → Übersicht, Kader,
    // Tabelle, Spielplan; College-Stats (sports/cbb) → Live Scores, Rankings,
    // Rolling, Waiver. NIL-Auktion bleibt unter „Draft & Picks“.
    files: { teams: 'teams-rosters' },
    // Google Sheet der NIL-Auktion (öffentlich lesbar): Tabelle „ACTIVE BIDS“ +
    // „SIGNED PLAYERS“ → Seite „Live-Gebote“. Zeiten im Sheet sind UTC
    // (tzOffsetMin 0; geprüft 01.10.2026 über die NOW()-Zelle oben im Sheet).
    // hours = so lange hat man Zeit, ein Gebot zu überbieten.
    sheet: { id: '18Mv6nb029xyrk9W5tM8e0tYCbVqfMNANIUDnY1xyT-A', gid: 0, tzOffsetMin: 0, hours: 24 },
  },
];
