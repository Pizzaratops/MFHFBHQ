// ============================================================
//  ROSTERS_LIVE — automatisch von ESPN synchronisiert
// ============================================================
//  AUTO-GENERIERT von scripts/sync-espn-rosters.js über die
//  "Daily 9cat Live Scores" GitHub Action. Nicht von Hand editieren.
//  Zuletzt synchronisiert: 2026-10-10T16:12:25.567Z
//
//  Wird von js/admin.js beim Seitenstart als Basis für ROSTERS geladen
//  (ersetzt die statischen Rosters aus data/teams-rosters.js), bevor
//  manuelle Overrides (localStorage bzw. der "ESPN Sync jetzt"-Knopf
//  für einen sofortigen Zwischenstand) angewendet werden.
// ============================================================

const ROSTERS_LIVE = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: []
};

// Draft-Status/-Einstellungen aus ESPN (mDraftDetail + mSettings). drafted:false
// = Liga ist noch vor dem Draft, alle Kader leer. Genutzt von der Hub-Seite
// "Auction Draft" (Budget, Kadergröße) und als Pre-Draft-Erkennung.
const LEAGUE_DRAFT_INFO = {"drafted":false,"inProgress":false,"type":"AUCTION","budget":200,"date":"2026-10-11T18:30:00.000Z","rosterSize":14};

// W-L-T Bilanzen je Team aus derselben ESPN-Antwort (mTeam).
// "season" ist die ESPN-Saisonkennung (2027 = Saison 2026/27). Das UI
// (js/navigation.js, _displayRecord) zeigt diese Bilanzen nur, wenn
// season >= 2027 -- ESPN_SEASON in js/espn-sync.js steht seit 05.08.2026
// auf 2027, die Bilanzen laufen also bereits live durch diesen Pfad
// (anfangs plausibel 0-0-0, bis der Spielbetrieb im Oktober beginnt).
const TEAM_RECORDS_LIVE = {
  season: 2027,
  records: {"1":"0-0-0","2":"0-0-0","3":"0-0-0","4":"0-0-0","5":"0-0-0","6":"0-0-0","7":"0-0-0","8":"0-0-0","9":"0-0-0","10":"0-0-0"}
};
