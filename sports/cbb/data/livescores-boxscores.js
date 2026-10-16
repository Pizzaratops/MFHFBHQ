// ============================================================
//  LIVE SCORES — Box Scores (pro Spiel, inkl. FGM/FGA/FTM/FTA)
// ============================================================
//  AUTO-GENERIERT von scripts/convert-to-boxscores.js über die
//  "Daily 9cat Live Scores" GitHub Action. Nicht von Hand editieren
//  — Änderungen werden beim nächsten Lauf überschrieben.
//
//  Shape:
//  LIVESCORES_BOXSCORES[league][date] = {
//    games: [
//      {
//        id, line,  // abgeschlossen: "Memphis Grizzlies 84 @ Portland Trail Blazers 91 (Final)"
//                    // noch ausstehend: "Miami Heat @ Toronto Raptors (7:00 PM ET)" (kein Punktestand)
//        completed,  // false = Spiel noch nicht gestartet -- players ist dann [] auf beiden Seiten
//        statusText, // Tip-off-Zeit ("7:00 PM ET") wenn !completed, sonst "Final"/Live-Status
//        away: { abbr, name, score, players: [ {...} ] },  // score ist null wenn !completed
//        home: { abbr, name, score, players: [ {...} ] },
//      },
//      ...
//    ]
//  }
//
//  Jeder Spieler-Eintrag: { name, min, pts, reb, ast, stl, blk, to, tpm,
//    fgm, fga, ftm, fta, composite, zScores }
//  zScores/composite sind aus dem Tages-Pool des Spiels berechnet (identisch
//  zu data/livescores-daily.js für denselben Tag) — dienen hier nur der
//  Farbkodierung einzelner Statzeilen, nicht als eigener Ranking-Pool.
//
//  date format: "YYYY-MM-DD"
//  league keys match the ESPN league slugs used in daily-9cat.js:
//    "nba-summer-las-vegas" | "nba-preseason" | "nba"
// ============================================================

const LIVESCORES_BOXSCORES = {
  "ncaab": {
    "2026-02-14": {
    games: [
      {
      id: "401827679",
      line: "Texas Tech Red Raiders 78 @ Arizona Wildcats 75 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "TxTch", name: "Texas Tech Red Raiders", score: 78,
        players: [
          { name: "JT Toppin", min: 44, pts: 31, reb: 13, ast: 3, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 13, fga: 22, ftm: 4, fta: 6, composite: 12.36, zScores: { pts: 3.111, reb: 3.37, ast: 0.842, stl: 1.486, blk: 0.895, tpm: 0.105, fgImpact: 2.228, ftImpact: -0.571, to: 0.901 } },
          { name: "LeJuan Watts", min: 30, pts: 9, reb: 4, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 7, ftm: 5, fta: 7, composite: -5.09, zScores: { pts: 0.105, reb: 0.238, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.919, ftImpact: -0.192, to: -1.657 } },
          { name: "Jaylen Petty", min: 12, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.5, zScores: { pts: -0.851, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.634, ftImpact: 0, to: 0.901 } },
          { name: "Donovan Atwell", min: 44, pts: 11, reb: 5, ast: 0, stl: 1, blk: 1, to: 1, tpm: 3, fgm: 3, fga: 11, ftm: 2, fta: 2, composite: 2.42, zScores: { pts: 0.378, reb: 0.586, ast: -0.819, stl: 0.407, blk: 0.895, tpm: 1.718, fgImpact: -1.553, ftImpact: 0.758, to: 0.048 } },
          { name: "Christian Anderson", min: 45, pts: 19, reb: 6, ast: 8, stl: 0, blk: 1, to: 3, tpm: 6, fgm: 6, fga: 18, ftm: 1, fta: 2, composite: 6.34, zScores: { pts: 1.471, reb: 0.934, ast: 3.611, stl: -0.671, blk: 0.895, tpm: 4.137, fgImpact: -1.71, ftImpact: -0.665, to: -1.657 } },
          { name: "Josiah Moseley", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.69, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Luke Bamgboye", min: 13, pts: 1, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -2.44, zScores: { pts: -0.988, reb: -0.11, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: -0.665, to: 0.901 } },
          { name: "Leon Horner", min: 26, pts: 5, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.53, zScores: { pts: -0.441, reb: 0.586, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.128, ftImpact: 0, to: 0.048 } },
          { name: "Tyeree Bryan", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } }
        ]
      },
      home: {
        abbr: "Ariz", name: "Arizona Wildcats", score: 75,
        players: [
          { name: "Ivan Kharchenkov", min: 38, pts: 13, reb: 4, ast: 3, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 14, ftm: 4, fta: 5, composite: 1.54, zScores: { pts: 0.652, reb: 0.238, ast: 0.842, stl: 1.486, blk: -0.467, tpm: 0.105, fgImpact: -1.838, ftImpact: 0.473, to: 0.048 } },
          { name: "Koa Peat", min: 11, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 4, composite: -4.19, zScores: { pts: -0.851, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: -1.329, to: 0.901 } },
          { name: "Motiejus Krivas", min: 38, pts: 10, reb: 11, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 8, ftm: 2, fta: 3, composite: 1.05, zScores: { pts: 0.242, reb: 2.674, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.256, ftImpact: -0.285, to: -0.805 } },
          { name: "Brayden Burries", min: 38, pts: 16, reb: 5, ast: 2, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 12, ftm: 7, fta: 8, composite: 2.72, zScores: { pts: 1.061, reb: 0.586, ast: 0.288, stl: 1.486, blk: -0.467, tpm: 0.105, fgImpact: -1.14, ftImpact: 1.61, to: -0.805 } },
          { name: "Jaden Bradley", min: 41, pts: 11, reb: 1, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 14, ftm: 3, fta: 4, composite: -2.57, zScores: { pts: 0.378, reb: -0.806, ast: 1.396, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -1.838, ftImpact: 0.094, to: 0.048 } },
          { name: "Tobe Awaka", min: 37, pts: 16, reb: 12, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 6, ftm: 5, fta: 7, composite: 4.91, zScores: { pts: 1.061, reb: 3.022, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 1.716, ftImpact: -0.192, to: 0.048 } },
          { name: "Sidi Gueye", min: 1, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.35, zScores: { pts: -0.851, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: 0, to: 0.901 } },
          { name: "Anthony Dell'Orso", min: 21, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.07, zScores: { pts: -0.441, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.57, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401825514",
      line: "UCLA Bruins 56 @ Michigan Wolverines 86 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UCLA", name: "UCLA Bruins", score: 56,
        players: [
          { name: "Tyler Bilodeau", min: 35, pts: 10, reb: 6, ast: 0, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 12, ftm: 0, fta: 0, composite: -1.82, zScores: { pts: 0.242, reb: 0.934, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -1.14, ftImpact: 0, to: -0.805 } },
          { name: "Eric Dailey Jr.", min: 14, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: -4.58, zScores: { pts: -0.715, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.983, ftImpact: -0.665, to: 0.901 } },
          { name: "Xavier Booker", min: 18, pts: 5, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 2, composite: -4.63, zScores: { pts: -0.441, reb: -0.458, ast: -0.819, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.919, ftImpact: -2.087, to: 0.048 } },
          { name: "Donovan Dent", min: 33, pts: 10, reb: 1, ast: 4, stl: 2, blk: 0, to: 5, tpm: 0, fgm: 5, fga: 12, ftm: 0, fta: 2, composite: -4.68, zScores: { pts: 0.242, reb: -0.806, ast: 1.396, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -0.378, ftImpact: -2.087, to: -3.363 } },
          { name: "Trent Perry", min: 33, pts: 14, reb: 4, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 9, ftm: 3, fta: 4, composite: 0.76, zScores: { pts: 0.788, reb: 0.238, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: 0.669, ftImpact: 0.094, to: -0.805 } },
          { name: "Steven Jamerson II", min: 16, pts: 4, reb: 2, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.46, zScores: { pts: -0.578, reb: -0.458, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.826, ftImpact: 0, to: 0.048 } },
          { name: "Brandon Williams", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Jamar Brown", min: 24, pts: 2, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -1.37, zScores: { pts: -0.851, reb: 0.238, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.634, ftImpact: 0, to: 0.901 } },
          { name: "Eric Freeny", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.74, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.901 } },
          { name: "Skyy Clark", min: 16, pts: 8, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -0.74, zScores: { pts: -0.032, reb: -1.154, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 0.128, ftImpact: 0.758, to: 0.048 } }
        ]
      },
      home: {
        abbr: "Mich", name: "Michigan Wolverines", score: 86,
        players: [
          { name: "Yaxel Lendeborg", min: 30, pts: 17, reb: 8, ast: 1, stl: 1, blk: 2, to: 1, tpm: 2, fgm: 4, fga: 8, ftm: 7, fta: 10, composite: 5.96, zScores: { pts: 1.198, reb: 1.63, ast: -0.266, stl: 0.407, blk: 2.256, tpm: 0.911, fgImpact: 0.256, ftImpact: -0.477, to: 0.048 } },
          { name: "Morez Johnson Jr.", min: 24, pts: 15, reb: 3, ast: 1, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 6, fga: 6, ftm: 3, fta: 3, composite: 5.61, zScores: { pts: 0.925, reb: -0.11, ast: -0.266, stl: 2.565, blk: -0.467, tpm: -0.702, fgImpact: 2.478, ftImpact: 1.137, to: 0.048 } },
          { name: "Aday Mara", min: 23, pts: 9, reb: 8, ast: 3, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 3, fta: 6, composite: 3.92, zScores: { pts: 0.105, reb: 1.63, ast: 0.842, stl: -0.671, blk: 3.617, tpm: -0.702, fgImpact: 0.192, ftImpact: -1.994, to: 0.901 } },
          { name: "Elliot Cadeau", min: 26, pts: 9, reb: 1, ast: 5, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 3, fta: 5, composite: -0.95, zScores: { pts: 0.105, reb: -0.806, ast: 1.95, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.541, ftImpact: -0.95, to: 0.048 } },
          { name: "Nimari Burnett", min: 19, pts: 12, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 9, ftm: 0, fta: 1, composite: -0.05, zScores: { pts: 0.515, reb: -1.154, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 0.669, ftImpact: -1.044, to: 0.901 } },
          { name: "Oscar Goodman", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Will Tschetter", min: 11, pts: 4, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 0.09, zScores: { pts: -0.578, reb: 0.238, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.826, ftImpact: 0, to: 0.901 } },
          { name: "L.J. Cason", min: 20, pts: 13, reb: 0, ast: 2, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 8, ftm: 1, fta: 1, composite: -0.7, zScores: { pts: 0.652, reb: -1.154, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 1.018, ftImpact: 0.379, to: -1.657 } },
          { name: "Roddy Gayle Jr.", min: 24, pts: 5, reb: 3, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 0.36, zScores: { pts: -0.441, reb: -0.11, ast: 0.842, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: 0.826, ftImpact: 0, to: -0.805 } },
          { name: "Trey McKenney", min: 20, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.5, zScores: { pts: -0.851, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.634, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401827681",
      line: "Kansas State Wildcats 64 @ Houston Cougars 78 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "KSU", name: "Kansas State Wildcats", score: 64,
        players: [
          { name: "Taj Manning", min: 30, pts: 10, reb: 6, ast: 3, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 4, ftm: 4, fta: 7, composite: -0.05, zScores: { pts: 0.242, reb: 0.934, ast: 0.842, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: 0.89, ftImpact: -1.615, to: -1.657 } },
          { name: "Khamari McGriff", min: 14, pts: 2, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -3.11, zScores: { pts: -0.851, reb: 0.238, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0.758, to: -0.805 } },
          { name: "PJ Haggerty", min: 40, pts: 23, reb: 5, ast: 2, stl: 3, blk: 0, to: 4, tpm: 2, fgm: 7, fga: 20, ftm: 7, fta: 12, composite: -0.82, zScores: { pts: 2.018, reb: 0.586, ast: 0.288, stl: 2.565, blk: -0.467, tpm: 0.911, fgImpact: -1.646, ftImpact: -2.565, to: -2.51 } },
          { name: "Nate Johnson", min: 40, pts: 12, reb: 10, ast: 4, stl: 3, blk: 1, to: 2, tpm: 3, fgm: 3, fga: 11, ftm: 3, fta: 4, composite: 7.15, zScores: { pts: 0.515, reb: 2.326, ast: 1.396, stl: 2.565, blk: 0.895, tpm: 1.718, fgImpact: -1.553, ftImpact: 0.094, to: -0.805 } },
          { name: "David Castillo", min: 38, pts: 8, reb: 5, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -0.52, zScores: { pts: -0.032, reb: 0.586, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: -0.855, ftImpact: 0, to: -0.805 } },
          { name: "Marcus Johnson", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -6.09, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: -0.805 } },
          { name: "Dorin Buca", min: 14, pts: 4, reb: 4, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.45, zScores: { pts: -0.578, reb: 0.238, ast: -0.266, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: 0.128, ftImpact: 0, to: 0.048 } },
          { name: "CJ Jones", min: 23, pts: 5, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -2.34, zScores: { pts: -0.441, reb: -0.806, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.919, ftImpact: 0, to: 0.048 } }
        ]
      },
      home: {
        abbr: "Hou", name: "Houston Cougars", score: 78,
        players: [
          { name: "Chris Cenac Jr.", min: 23, pts: 9, reb: 4, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 1, fta: 4, composite: -0.68, zScores: { pts: 0.105, reb: 0.238, ast: 0.288, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: 0.541, ftImpact: -2.752, to: 0.048 } },
          { name: "Joseph Tugler", min: 14, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.3, zScores: { pts: -0.851, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: 0, to: 0.048 } },
          { name: "Kingston Flemings", min: 30, pts: 12, reb: 7, ast: 4, stl: 1, blk: 1, to: 4, tpm: 0, fgm: 2, fga: 13, ftm: 8, fta: 8, composite: 1.3, zScores: { pts: 0.515, reb: 1.282, ast: 1.396, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: -3.013, ftImpact: 3.033, to: -2.51 } },
          { name: "Milos Uzan", min: 33, pts: 12, reb: 2, ast: 8, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: 5.39, zScores: { pts: 0.515, reb: -0.458, ast: 3.611, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: -0.029, ftImpact: 0, to: 0.901 } },
          { name: "Emanuel Sharp", min: 30, pts: 23, reb: 6, ast: 2, stl: 3, blk: 0, to: 4, tpm: 3, fgm: 6, fga: 14, ftm: 8, fta: 9, composite: 6.22, zScores: { pts: 2.018, reb: 0.934, ast: 0.288, stl: 2.565, blk: -0.467, tpm: 1.718, fgImpact: -0.314, ftImpact: 1.989, to: -2.51 } },
          { name: "Kalifa Sakho", min: 19, pts: 6, reb: 6, ast: 0, stl: 0, blk: 2, to: 3, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 1, composite: -0.77, zScores: { pts: -0.305, reb: 0.934, ast: -0.819, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: 1.239, ftImpact: -1.044, to: -1.657 } },
          { name: "Chase McCarty", min: 14, pts: 4, reb: 2, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.46, zScores: { pts: -0.578, reb: -0.458, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.826, ftImpact: 0, to: 0.048 } },
          { name: "Cedric Lath", min: 6, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -2.31, zScores: { pts: -0.851, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0.758, to: 0.901 } },
          { name: "Isiah Harwell", min: 19, pts: 3, reb: 6, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: -1.6, zScores: { pts: -0.715, reb: 0.934, ast: -0.819, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: -0.983, ftImpact: -0.665, to: 0.048 } },
          { name: "Mercy Miller", min: 9, pts: 4, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -1.39, zScores: { pts: -0.578, reb: -0.806, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.634, ftImpact: 0.758, to: 0.901 } },
          { name: "Ramon Walker Jr.", min: 3, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -4.91, zScores: { pts: -0.988, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: -0.665, to: 0.901 } }
        ]
      }
    },
      {
      id: "401820740",
      line: "Clemson Tigers 54 @ Duke Blue Devils 67 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Clem", name: "Clemson Tigers", score: 54,
        players: [
          { name: "Carter Welling", min: 21, pts: 12, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 4, fta: 4, composite: 2.02, zScores: { pts: 0.515, reb: 0.586, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.605, ftImpact: 1.516, to: 0.901 } },
          { name: "Jake Wahlin", min: 24, pts: 6, reb: 3, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: 0.43, zScores: { pts: -0.305, reb: -0.11, ast: -0.266, stl: -0.671, blk: 0.895, tpm: 0.911, fgImpact: -0.919, ftImpact: 0, to: 0.901 } },
          { name: "RJ Godfrey", min: 31, pts: 10, reb: 8, ast: 1, stl: 1, blk: 2, to: 3, tpm: 0, fgm: 4, fga: 10, ftm: 2, fta: 2, composite: 2.23, zScores: { pts: 0.242, reb: 1.63, ast: -0.266, stl: 0.407, blk: 2.256, tpm: -0.702, fgImpact: -0.442, ftImpact: 0.758, to: -1.657 } },
          { name: "Jestin Porter", min: 32, pts: 4, reb: 1, ast: 0, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -0.89, zScores: { pts: -0.578, reb: -0.806, ast: -0.819, stl: 1.486, blk: 0.895, tpm: -0.702, fgImpact: -1.268, ftImpact: 0, to: 0.901 } },
          { name: "Dillon Hunter", min: 27, pts: 4, reb: 5, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -0.91, zScores: { pts: -0.578, reb: 0.586, ast: 0.288, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.634, ftImpact: -0.665, to: 0.048 } },
          { name: "Chase Thompson", min: 7, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Dallas Thomas", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Nick Davidson", min: 17, pts: 7, reb: 0, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -1.48, zScores: { pts: -0.168, reb: -1.154, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.541, ftImpact: 0, to: 0.048 } },
          { name: "Ace Buckner", min: 22, pts: 7, reb: 0, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 12, ftm: 0, fta: 0, composite: -3.92, zScores: { pts: -0.168, reb: -1.154, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -1.902, ftImpact: 0, to: 0.048 } },
          { name: "Butta Johnson", min: 17, pts: 4, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -2.54, zScores: { pts: -0.578, reb: 0.238, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.285, ftImpact: -0.665, to: 0.048 } }
        ]
      },
      home: {
        abbr: "Duke", name: "Duke Blue Devils", score: 67,
        players: [
          { name: "Cameron Boozer", min: 37, pts: 18, reb: 8, ast: 4, stl: 2, blk: 1, to: 2, tpm: 2, fgm: 7, fga: 14, ftm: 2, fta: 3, composite: 7.01, zScores: { pts: 1.335, reb: 1.63, ast: 1.396, stl: 1.486, blk: 0.895, tpm: 0.911, fgImpact: 0.448, ftImpact: -0.285, to: -0.805 } },
          { name: "Dame Sarr", min: 29, pts: 6, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -1.27, zScores: { pts: -0.305, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.57, ftImpact: 0, to: 0.901 } },
          { name: "Patrick Ngongba II", min: 19, pts: 6, reb: 6, ast: 3, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 4, fta: 6, composite: 2.12, zScores: { pts: -0.305, reb: 0.934, ast: 0.842, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: -0.285, ftImpact: -0.571, to: 0.901 } },
          { name: "Isaiah Evans", min: 31, pts: 17, reb: 4, ast: 1, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 12, ftm: 3, fta: 3, composite: 5.52, zScores: { pts: 1.198, reb: 0.238, ast: -0.266, stl: 1.486, blk: -0.467, tpm: 2.524, fgImpact: -0.378, ftImpact: 1.137, to: 0.048 } },
          { name: "Caleb Foster", min: 25, pts: 3, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -0.715, reb: -0.11, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.634, ftImpact: 0, to: -0.805 } },
          { name: "Maliq Brown", min: 18, pts: 0, reb: 6, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -1.03, zScores: { pts: -1.124, reb: 0.934, ast: 0.288, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.048 } },
          { name: "Nik Khamenia", min: 17, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.38, zScores: { pts: -0.441, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.477, ftImpact: 0, to: 0.901 } },
          { name: "Cayden Boozer", min: 22, pts: 12, reb: 2, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 8, ftm: 2, fta: 3, composite: -1.01, zScores: { pts: 0.515, reb: -0.458, ast: 0.842, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 1.018, ftImpact: -0.285, to: -0.805 } },
          { name: "Darren Harris", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.74, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401827682",
      line: "Kansas Jayhawks 56 @ Iowa State Cyclones 74 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Kan", name: "Kansas Jayhawks", score: 56,
        players: [
          { name: "Flory Bidunga", min: 34, pts: 11, reb: 13, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 13, ftm: 1, fta: 2, composite: 2.18, zScores: { pts: 0.378, reb: 3.37, ast: -0.819, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: -0.727, ftImpact: -0.665, to: 0.048 } },
          { name: "Bryson Tiller", min: 30, pts: 8, reb: 5, ast: 0, stl: 1, blk: 2, to: 4, tpm: 0, fgm: 2, fga: 2, ftm: 4, fta: 4, composite: 1.53, zScores: { pts: -0.032, reb: 0.586, ast: -0.819, stl: 0.407, blk: 2.256, tpm: -0.702, fgImpact: 0.826, ftImpact: 1.516, to: -2.51 } },
          { name: "Melvin Council Jr.", min: 34, pts: 15, reb: 5, ast: 4, stl: 2, blk: 0, to: 4, tpm: 3, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 3.87, zScores: { pts: 0.925, reb: 0.586, ast: 1.396, stl: 1.486, blk: -0.467, tpm: 1.718, fgImpact: 0.733, ftImpact: 0, to: -2.51 } },
          { name: "Tre White", min: 23, pts: 2, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -2.96, zScores: { pts: -0.851, reb: 0.238, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -1.047, ftImpact: 0.758, to: 0.048 } },
          { name: "Darryn Peterson", min: 24, pts: 10, reb: 0, ast: 0, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 10, ftm: 2, fta: 2, composite: -4.06, zScores: { pts: 0.242, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -1.204, ftImpact: 0.758, to: -1.657 } },
          { name: "Samis Calderon", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Paul Mbiya", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Nginyu Ngala", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Kohl Rosario", min: 10, pts: 2, reb: 0, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -1.79, zScores: { pts: -0.851, reb: -1.154, ast: -0.266, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.698, ftImpact: 0.758, to: 0.901 } },
          { name: "Jayden Dawson", min: 6, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.901 } },
          { name: "Jamari McDowell", min: 14, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.901 } },
          { name: "Elmarko Jackson", min: 22, pts: 8, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 1, fta: 3, composite: -2.75, zScores: { pts: -0.032, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.192, ftImpact: -1.708, to: 0.901 } }
        ]
      },
      home: {
        abbr: "IaSt", name: "Iowa State Cyclones", score: 74,
        players: [
          { name: "Blake Buchanan", min: 22, pts: 11, reb: 6, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 6, ftm: 1, fta: 1, composite: 2.71, zScores: { pts: 0.378, reb: 0.934, ast: -0.266, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 1.716, ftImpact: 0.379, to: 0.048 } },
          { name: "Joshua Jefferson", min: 26, pts: 11, reb: 5, ast: 4, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 8, ftm: 5, fta: 9, composite: -1.71, zScores: { pts: 0.378, reb: 0.586, ast: 1.396, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.506, ftImpact: -2.279, to: -0.805 } },
          { name: "Milan Momcilovic", min: 34, pts: 18, reb: 3, ast: 1, stl: 2, blk: 0, to: 0, tpm: 4, fgm: 7, fga: 13, ftm: 0, fta: 0, composite: 6.2, zScores: { pts: 1.335, reb: -0.11, ast: -0.266, stl: 1.486, blk: -0.467, tpm: 2.524, fgImpact: 0.797, ftImpact: 0, to: 0.901 } },
          { name: "Killyan Toure", min: 22, pts: 7, reb: 0, ast: 2, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -1.01, zScores: { pts: -0.168, reb: -1.154, ast: 0.288, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: -1.204, ftImpact: 0, to: 0.901 } },
          { name: "Tamin Lipsey", min: 33, pts: 11, reb: 3, ast: 4, stl: 3, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 10, ftm: 3, fta: 5, composite: 1.71, zScores: { pts: 0.378, reb: -0.11, ast: 1.396, stl: 2.565, blk: -0.467, tpm: 0.911, fgImpact: -1.204, ftImpact: -0.95, to: -0.805 } },
          { name: "Dominykas Pleta", min: 19, pts: 2, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 2, composite: -4.9, zScores: { pts: -0.851, reb: 0.586, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.064, ftImpact: -2.087, to: 0.048 } },
          { name: "Jamarion Batemon", min: 18, pts: 11, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 0.84, zScores: { pts: 0.378, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 1.718, fgImpact: -0.093, ftImpact: 0, to: 0.901 } },
          { name: "Nate Heise", min: 26, pts: 3, reb: 5, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -0.64, zScores: { pts: -0.715, reb: 0.586, ast: -0.819, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.634, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401822942",
      line: "Georgetown Hoyas 75 @ UConn Huskies 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "GTown", name: "Georgetown Hoyas", score: 75,
        players: [
          { name: "Isaiah Abraham", min: 15, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -3.84, zScores: { pts: -1.124, reb: -0.11, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -1.396, ftImpact: 0, to: 0.901 } },
          { name: "Caleb Williams", min: 18, pts: 2, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.07, zScores: { pts: -0.851, reb: -1.154, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.064, ftImpact: 0, to: 0.901 } },
          { name: "Julius Halaifonua", min: 15, pts: 4, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -3.12, zScores: { pts: -0.578, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: 0.758, to: -0.805 } },
          { name: "Malik Mack", min: 27, pts: 8, reb: 0, ast: 2, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -3.29, zScores: { pts: -0.032, reb: -1.154, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.506, ftImpact: 0, to: -1.657 } },
          { name: "KJ Lewis", min: 35, pts: 24, reb: 9, ast: 3, stl: 5, blk: 0, to: 3, tpm: 4, fgm: 9, fga: 18, ftm: 2, fta: 3, composite: 10.39, zScores: { pts: 2.154, reb: 1.978, ast: 0.842, stl: 4.722, blk: -0.467, tpm: 2.524, fgImpact: 0.576, ftImpact: -0.285, to: -1.657 } },
          { name: "Jayden Fort", min: 21, pts: 3, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 2, composite: -4.75, zScores: { pts: -0.715, reb: 0.238, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.634, ftImpact: -2.087, to: -0.805 } },
          { name: "Vince Iwuchukwu", min: 25, pts: 16, reb: 7, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 8, fta: 12, composite: 0.4, zScores: { pts: 1.061, reb: 1.282, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.954, ftImpact: -1.142, to: 0.901 } },
          { name: "Kayvaun Mulready", min: 24, pts: 15, reb: 3, ast: 0, stl: 1, blk: 1, to: 0, tpm: 4, fgm: 4, fga: 7, ftm: 3, fta: 4, composite: 5.42, zScores: { pts: 0.925, reb: -0.11, ast: -0.819, stl: 0.407, blk: 0.895, tpm: 2.524, fgImpact: 0.605, ftImpact: 0.094, to: 0.901 } },
          { name: "Jeremiah Williams", min: 20, pts: 3, reb: 1, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.54, zScores: { pts: -0.715, reb: -0.806, ast: 1.95, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.983, ftImpact: 0, to: 0.048 } }
        ]
      },
      home: {
        abbr: "UConn", name: "UConn Huskies", score: 79,
        players: [
          { name: "Alex Karaban", min: 38, pts: 18, reb: 3, ast: 1, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 8, ftm: 4, fta: 4, composite: 7.08, zScores: { pts: 1.335, reb: -0.11, ast: -0.266, stl: 1.486, blk: -0.467, tpm: 2.524, fgImpact: 1.018, ftImpact: 1.516, to: 0.048 } },
          { name: "Tarris Reed Jr.", min: 18, pts: 4, reb: 1, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 4, composite: -1.98, zScores: { pts: -0.578, reb: -0.806, ast: -0.266, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: 0.064, ftImpact: -1.329, to: 0.048 } },
          { name: "Braylon Mullins", min: 27, pts: 10, reb: 4, ast: 0, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 3, fga: 10, ftm: 2, fta: 2, composite: -0.46, zScores: { pts: 0.242, reb: 0.238, ast: -0.819, stl: -0.671, blk: 0.895, tpm: 0.911, fgImpact: -1.204, ftImpact: 0.758, to: -0.805 } },
          { name: "Silas Demary Jr.", min: 34, pts: 15, reb: 12, ast: 9, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 6, ftm: 9, fta: 10, composite: 8.54, zScores: { pts: 0.925, reb: 3.022, ast: 4.165, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.192, ftImpact: 2.368, to: -1.657 } },
          { name: "Solo Ball", min: 37, pts: 20, reb: 6, ast: 4, stl: 0, blk: 0, to: 2, tpm: 5, fgm: 7, fga: 17, ftm: 1, fta: 2, composite: 4.06, zScores: { pts: 1.608, reb: 0.934, ast: 1.396, stl: -0.671, blk: -0.467, tpm: 3.331, fgImpact: -0.599, ftImpact: -0.665, to: -0.805 } },
          { name: "Jayden Ross", min: 14, pts: 2, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.32, zScores: { pts: -0.851, reb: -0.458, ast: 0.288, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: 0, to: 0.048 } },
          { name: "Jaylin Stewart", min: 4, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 2, composite: -5.57, zScores: { pts: -1.124, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: -2.087, to: 0.901 } },
          { name: "Eric Reibe", min: 22, pts: 10, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 7, ftm: 0, fta: 1, composite: -1.65, zScores: { pts: 0.242, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 1.367, ftImpact: -1.044, to: 0.901 } },
          { name: "Malachi Smith", min: 6, pts: 0, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.2, zScores: { pts: -1.124, reb: -1.154, ast: 0.288, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401825515",
      line: "Northwestern Wildcats 49 @ Nebraska Cornhuskers 68 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NW", name: "Northwestern Wildcats", score: 49,
        players: [
          { name: "Tre Singleton", min: 28, pts: 5, reb: 3, ast: 3, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 1, composite: -1.97, zScores: { pts: -0.441, reb: -0.11, ast: 0.842, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.221, ftImpact: 0.379, to: -1.657 } },
          { name: "Tyler Kropp", min: 12, pts: 4, reb: 1, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -0.578, reb: -0.806, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.826, ftImpact: 0, to: -1.657 } },
          { name: "Nick Martinelli", min: 35, pts: 11, reb: 3, ast: 1, stl: 0, blk: 2, to: 3, tpm: 0, fgm: 4, fga: 12, ftm: 3, fta: 4, composite: -1.82, zScores: { pts: 0.378, reb: -0.11, ast: -0.266, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: -1.14, ftImpact: 0.094, to: -1.657 } },
          { name: "Jake West", min: 34, pts: 2, reb: 2, ast: 4, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -1, zScores: { pts: -0.851, reb: -0.458, ast: 1.396, stl: 2.565, blk: -0.467, tpm: -0.702, fgImpact: -1.681, ftImpact: 0, to: -0.805 } },
          { name: "Jayden Reid", min: 22, pts: 7, reb: 2, ast: 1, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -4.59, zScores: { pts: -0.168, reb: -0.458, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.157, ftImpact: 0, to: -2.51 } },
          { name: "Arrinten Page", min: 21, pts: 6, reb: 3, ast: 3, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 4, composite: 0.73, zScores: { pts: -0.305, reb: -0.11, ast: 0.842, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: 0.128, ftImpact: -1.329, to: 0.901 } },
          { name: "Phoenix Gill", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Angelo Ciaravino", min: 24, pts: 9, reb: 4, ast: 1, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 2, composite: 0.62, zScores: { pts: 0.105, reb: 0.238, ast: -0.266, stl: 1.486, blk: -0.467, tpm: 0.105, fgImpact: 0.605, ftImpact: -2.087, to: 0.901 } },
          { name: "Jordan Clayton", min: 22, pts: 5, reb: 0, ast: 0, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.18, zScores: { pts: -0.441, reb: -1.154, ast: -0.819, stl: 0.407, blk: 0.895, tpm: 0.105, fgImpact: -0.221, ftImpact: 0, to: 0.048 } }
        ]
      },
      home: {
        abbr: "Nebras", name: "Nebraska Cornhuskers", score: 68,
        players: [
          { name: "Pryce Sandfort", min: 36, pts: 29, reb: 6, ast: 0, stl: 0, blk: 0, to: 1, tpm: 6, fgm: 10, fga: 21, ftm: 3, fta: 3, composite: 7.43, zScores: { pts: 2.837, reb: 0.934, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 4.137, fgImpact: 0.291, ftImpact: 1.137, to: 0.048 } },
          { name: "Rienk Mast", min: 26, pts: 3, reb: 9, ast: 4, stl: 0, blk: 0, to: 6, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 1, composite: -3.65, zScores: { pts: -0.715, reb: 1.978, ast: 1.396, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.634, ftImpact: 0.379, to: -4.216 } },
          { name: "Berke Buyuktuncel", min: 27, pts: 2, reb: 4, ast: 4, stl: 1, blk: 3, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 3.02, zScores: { pts: -0.851, reb: 0.238, ast: 1.396, stl: 0.407, blk: 3.617, tpm: -0.702, fgImpact: -0.285, ftImpact: 0, to: -0.805 } },
          { name: "Jamarques Lawrence", min: 18, pts: 2, reb: 2, ast: 2, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.65, zScores: { pts: -0.851, reb: -0.458, ast: 0.288, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -0.285, ftImpact: 0, to: -1.657 } },
          { name: "Sam Hoiberg", min: 37, pts: 14, reb: 7, ast: 5, stl: 4, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 8, ftm: 3, fta: 4, composite: 8.46, zScores: { pts: 0.788, reb: 1.282, ast: 1.95, stl: 3.643, blk: -0.467, tpm: 0.105, fgImpact: 1.018, ftImpact: 0.094, to: 0.048 } },
          { name: "Justin Bolis", min: 2, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.96, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Braden Frager", min: 23, pts: 8, reb: 3, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 7, ftm: 2, fta: 4, composite: -2.61, zScores: { pts: -0.032, reb: -0.11, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: -0.919, ftImpact: -1.329, to: -0.805 } },
          { name: "Jared Garcia", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.53, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Kendall Blue", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Cale Jacobsen", min: 27, pts: 10, reb: 6, ast: 0, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 4.07, zScores: { pts: 0.242, reb: 0.934, ast: -0.819, stl: 0.407, blk: 0.895, tpm: 0.911, fgImpact: 0.605, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401820742",
      line: "Pittsburgh Panthers 65 @ North Carolina Tar Heels 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Pitt", name: "Pittsburgh Panthers", score: 65,
        players: [
          { name: "Roman Siulepa", min: 33, pts: 14, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 6, fga: 10, ftm: 2, fta: 4, composite: 0.24, zScores: { pts: 0.788, reb: -0.458, ast: -0.266, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 1.082, ftImpact: -1.329, to: 0.901 } },
          { name: "Cameron Corhen", min: 36, pts: 23, reb: 6, ast: 6, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 10, fga: 17, ftm: 0, fta: 0, composite: 7.77, zScores: { pts: 2.018, reb: 0.934, ast: 2.504, stl: -0.671, blk: -0.467, tpm: 1.718, fgImpact: 1.687, ftImpact: 0, to: 0.048 } },
          { name: "Omari Witherspoon", min: 23, pts: 6, reb: 2, ast: 3, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: -3.7, zScores: { pts: -0.305, reb: -0.458, ast: 0.842, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -1.268, ftImpact: 0.758, to: -2.51 } },
          { name: "Nojus Indrusaitis", min: 26, pts: 7, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.94, zScores: { pts: -0.168, reb: -0.11, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: 0.541, ftImpact: 0, to: 0.901 } },
          { name: "Barry Dunning Jr.", min: 37, pts: 10, reb: 8, ast: 2, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 3.13, zScores: { pts: 0.242, reb: 1.63, ast: 0.288, stl: 0.407, blk: 0.895, tpm: 0.911, fgImpact: -0.442, ftImpact: 0, to: -0.805 } },
          { name: "Kieran Mullen", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Macari Moore", min: 13, pts: 2, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -3.26, zScores: { pts: -0.851, reb: -0.806, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0.758, to: -0.805 } },
          { name: "Damarco Minor", min: 27, pts: 3, reb: 7, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.52, zScores: { pts: -0.715, reb: 1.282, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.983, ftImpact: 0, to: -0.805 } }
        ]
      },
      home: {
        abbr: "UNC", name: "North Carolina Tar Heels", score: 79,
        players: [
          { name: "Zayden High", min: 32, pts: 15, reb: 7, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 7, fga: 11, ftm: 1, fta: 2, composite: 3.46, zScores: { pts: 0.925, reb: 1.282, ast: 0.288, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 1.495, ftImpact: -0.665, to: 0.901 } },
          { name: "Jarin Stevenson", min: 36, pts: 19, reb: 3, ast: 2, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 6, fga: 7, ftm: 4, fta: 4, composite: 8.14, zScores: { pts: 1.471, reb: -0.11, ast: 0.288, stl: -0.671, blk: 0.895, tpm: 1.718, fgImpact: 2.129, ftImpact: 1.516, to: 0.901 } },
          { name: "Luka Bogavac", min: 34, pts: 15, reb: 1, ast: 4, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 15, ftm: 0, fta: 0, composite: 2.56, zScores: { pts: 0.925, reb: -0.806, ast: 1.396, stl: 0.407, blk: -0.467, tpm: 1.718, fgImpact: -0.663, ftImpact: 0, to: 0.048 } },
          { name: "Derek Dixon", min: 30, pts: 3, reb: 7, ast: 7, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: 2.73, zScores: { pts: -0.715, reb: 1.282, ast: 3.058, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.983, ftImpact: 0, to: 0.048 } },
          { name: "Seth Trimble", min: 35, pts: 19, reb: 3, ast: 0, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 13, ftm: 9, fta: 11, composite: 0.65, zScores: { pts: 1.471, reb: -0.11, ast: -0.819, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -0.727, ftImpact: 1.325, to: -0.805 } },
          { name: "Jonathan Powell", min: 15, pts: 5, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.82, zScores: { pts: -0.441, reb: -0.458, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.477, ftImpact: 0, to: 0.901 } },
          { name: "Kyan Evans", min: 10, pts: 0, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.28, zScores: { pts: -1.124, reb: -1.154, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Jaydon Young", min: 8, pts: 3, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.76, zScores: { pts: -0.715, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.983, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401829245",
      line: "Gonzaga Bulldogs 94 @ Santa Clara Broncos 86 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Gonz", name: "Gonzaga Bulldogs", score: 94,
        players: [
          { name: "Graham Ike", min: 36, pts: 21, reb: 15, ast: 4, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 10, fga: 15, ftm: 0, fta: 3, composite: 5.13, zScores: { pts: 1.744, reb: 4.066, ast: 1.396, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: 2.385, ftImpact: -3.131, to: -1.657 } },
          { name: "Emmanuel Innocenti", min: 39, pts: 16, reb: 6, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 6, fga: 11, ftm: 4, fta: 5, composite: 2.78, zScores: { pts: 1.061, reb: 0.934, ast: 0.288, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.733, ftImpact: 0.473, to: 0.048 } },
          { name: "Braeden Smith", min: 7, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.63, zScores: { pts: -1.124, reb: -0.806, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -1.047, ftImpact: 0, to: 0.901 } },
          { name: "Jalen Warley", min: 13, pts: 2, reb: 2, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.15, zScores: { pts: -0.851, reb: -0.458, ast: -0.266, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: 0.064, ftImpact: 0, to: 0.048 } },
          { name: "Adam Miller", min: 27, pts: 21, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 9, ftm: 7, fta: 8, composite: 4.44, zScores: { pts: 1.744, reb: -0.458, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 1.431, ftImpact: 1.61, to: 0.048 } },
          { name: "Ismaila Diagne", min: 3, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.41, zScores: { pts: -1.124, reb: -1.154, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Mario Saint-Supery", min: 33, pts: 8, reb: 4, ast: 5, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 0.11, zScores: { pts: -0.032, reb: 0.238, ast: 1.95, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.157, ftImpact: 0.758, to: -0.805 } },
          { name: "Davis Fogle", min: 14, pts: 6, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -0.65, zScores: { pts: -0.305, reb: -0.458, ast: 0.288, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.541, ftImpact: 0, to: 0.048 } },
          { name: "Tyon Grant-Foster", min: 28, pts: 20, reb: 7, ast: 3, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 7, fga: 12, ftm: 6, fta: 11, composite: 4.51, zScores: { pts: 1.608, reb: 1.282, ast: 0.842, stl: 1.486, blk: 0.895, tpm: -0.702, fgImpact: 1.146, ftImpact: -2.944, to: 0.901 } }
        ]
      },
      home: {
        abbr: "SCla", name: "Santa Clara Broncos", score: 86,
        players: [
          { name: "Elijah Mahi", min: 29, pts: 15, reb: 5, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 15, ftm: 2, fta: 2, composite: 1.43, zScores: { pts: 0.925, reb: 0.586, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.663, ftImpact: 0.758, to: 0.048 } },
          { name: "Bukky Oboye", min: 30, pts: 7, reb: 8, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: 2.57, zScores: { pts: -0.168, reb: 1.63, ast: -0.266, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: -0.221, ftImpact: 0.094, to: 0.901 } },
          { name: "Christian Hammond", min: 36, pts: 16, reb: 3, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 7, fga: 14, ftm: 1, fta: 2, composite: 0.82, zScores: { pts: 1.061, reb: -0.11, ast: 0.842, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: 0.448, ftImpact: -0.665, to: -0.805 } },
          { name: "Jake Ensminger", min: 21, pts: 6, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 1.04, zScores: { pts: -0.305, reb: -0.11, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: 0.826, ftImpact: 0, to: 0.048 } },
          { name: "Brenton Knapper", min: 17, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -0.715, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.285, ftImpact: 0, to: -0.805 } },
          { name: "Allen Graves", min: 21, pts: 13, reb: 3, ast: 3, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 9, fta: 10, composite: 3.2, zScores: { pts: 0.652, reb: -0.11, ast: 0.842, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -0.919, ftImpact: 2.368, to: 0.048 } },
          { name: "Sash Gavalyugov", min: 23, pts: 10, reb: 0, ast: 4, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 11, ftm: 0, fta: 0, composite: -2.19, zScores: { pts: 0.242, reb: -1.154, ast: 1.396, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.791, ftImpact: 0, to: -1.657 } },
          { name: "KJ Cochran", min: 11, pts: 9, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 4, ftm: 0, fta: 1, composite: 0.2, zScores: { pts: 0.105, reb: -0.11, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 1.652, ftImpact: -1.044, to: 0.901 } },
          { name: "Thierry Darlan", min: 12, pts: 7, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: 0.35, zScores: { pts: -0.168, reb: 0.586, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.128, ftImpact: 0.758, to: 0.901 } }
        ]
      }
    },
      {
      id: "401825513",
      line: "Purdue Boilermakers 78 @ Iowa Hawkeyes 57 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Pur", name: "Purdue Boilermakers", score: 78,
        players: [
          { name: "Trey Kaufman-Renn", min: 31, pts: 12, reb: 12, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 8, ftm: 2, fta: 2, composite: 2.7, zScores: { pts: 0.515, reb: 3.022, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 1.018, ftImpact: 0.758, to: 0.048 } },
          { name: "Oscar Cluff", min: 20, pts: 4, reb: 5, ast: 3, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: 3.52, zScores: { pts: -0.578, reb: 0.586, ast: 0.842, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: 0.413, ftImpact: 0.758, to: 0.901 } },
          { name: "C.J. Cox", min: 20, pts: 14, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 3.2, zScores: { pts: 0.788, reb: -0.458, ast: -0.819, stl: 0.407, blk: -0.467, tpm: 2.524, fgImpact: 0.32, ftImpact: 0, to: 0.901 } },
          { name: "Braden Smith", min: 36, pts: 5, reb: 7, ast: 12, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 3, fta: 4, composite: 5.06, zScores: { pts: -0.441, reb: 1.282, ast: 5.827, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.983, ftImpact: 0.094, to: 0.048 } },
          { name: "Fletcher Loyer", min: 27, pts: 12, reb: 0, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 7, ftm: 4, fta: 4, composite: 2.24, zScores: { pts: 0.515, reb: -1.154, ast: 0.842, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.157, ftImpact: 1.516, to: 0.901 } },
          { name: "Daniel Jacobsen", min: 20, pts: 6, reb: 4, ast: 0, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 4, composite: 0.71, zScores: { pts: -0.305, reb: 0.238, ast: -0.819, stl: -0.671, blk: 3.617, tpm: -0.702, fgImpact: -0.221, ftImpact: -1.329, to: 0.901 } },
          { name: "Omer Mayer", min: 16, pts: 6, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 1, composite: -3.17, zScores: { pts: -0.305, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.57, ftImpact: -1.044, to: 0.048 } },
          { name: "Jack Benter", min: 10, pts: 5, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.72, zScores: { pts: -0.441, reb: -1.154, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.128, ftImpact: 0, to: 0.048 } },
          { name: "Gicarri Harris", min: 20, pts: 14, reb: 5, ast: 0, stl: 3, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 7, ftm: 3, fta: 3, composite: 7.01, zScores: { pts: 0.788, reb: 0.586, ast: -0.819, stl: 2.565, blk: -0.467, tpm: 1.718, fgImpact: 0.605, ftImpact: 1.137, to: 0.901 } }
        ]
      },
      home: {
        abbr: "Iowa", name: "Iowa Hawkeyes", score: 57,
        players: [
          { name: "Cam Manyawu", min: 24, pts: 8, reb: 8, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 3, composite: -1.11, zScores: { pts: -0.032, reb: 1.63, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.192, ftImpact: -0.285, to: 0.048 } },
          { name: "Cooper Koch", min: 19, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.61, zScores: { pts: -0.715, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.634, ftImpact: 0, to: 0.048 } },
          { name: "Bennett Stirtz", min: 38, pts: 19, reb: 5, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 7, fga: 12, ftm: 3, fta: 3, composite: 6.11, zScores: { pts: 1.471, reb: 0.586, ast: -0.266, stl: -0.671, blk: 0.895, tpm: 0.911, fgImpact: 1.146, ftImpact: 1.137, to: 0.901 } },
          { name: "Tavion Banks", min: 24, pts: 9, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 8, ftm: 3, fta: 5, composite: -1.97, zScores: { pts: 0.105, reb: 0.586, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.506, ftImpact: -0.95, to: 0.901 } },
          { name: "Kael Combs", min: 13, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -5.73, zScores: { pts: -1.124, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -1.745, ftImpact: 0, to: 0.048 } },
          { name: "Joey Matteoni", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 1, composite: -4.73, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: -1.044, to: 0.901 } },
          { name: "Alvaro Folgueiras", min: 26, pts: 5, reb: 2, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.69, zScores: { pts: -0.441, reb: -0.458, ast: 0.842, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: 0.128, ftImpact: 0, to: -0.805 } },
          { name: "Trevin Jirak", min: 10, pts: 6, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 3, fta: 4, composite: -2.05, zScores: { pts: -0.305, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.634, ftImpact: 0.094, to: 0.901 } },
          { name: "Tate Sage", min: 9, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.35, zScores: { pts: -0.851, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.064, ftImpact: 0, to: 0.901 } },
          { name: "Isaia Howard", min: 26, pts: 2, reb: 1, ast: 4, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 1, composite: -0.88, zScores: { pts: -0.851, reb: -0.806, ast: 1.396, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: 0.064, ftImpact: -1.044, to: 0.048 } },
          { name: "Brendan Hausen", min: 10, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -3.25, zScores: { pts: -0.715, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -1.332, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401808234",
      line: "Kentucky Wildcats 83 @ Florida Gators 92 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "KY", name: "Kentucky Wildcats", score: 83,
        players: [
          { name: "Andrija Jelavic", min: 17, pts: 7, reb: 4, ast: 0, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -2.56, zScores: { pts: -0.168, reb: 0.238, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.128, ftImpact: 0.758, to: -1.657 } },
          { name: "Malachi Moreno", min: 21, pts: 11, reb: 11, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 3, fta: 3, composite: 4.1, zScores: { pts: 0.378, reb: 2.674, ast: -0.266, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.605, ftImpact: 1.137, to: 0.048 } },
          { name: "Collin Chandler", min: 34, pts: 18, reb: 3, ast: 2, stl: 3, blk: 0, to: 2, tpm: 5, fgm: 6, fga: 10, ftm: 1, fta: 2, composite: 6.55, zScores: { pts: 1.335, reb: -0.11, ast: 0.288, stl: 2.565, blk: -0.467, tpm: 3.331, fgImpact: 1.082, ftImpact: -0.665, to: -0.805 } },
          { name: "Otega Oweh", min: 37, pts: 13, reb: 5, ast: 2, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 14, ftm: 5, fta: 7, composite: -1.84, zScores: { pts: 0.652, reb: 0.586, ast: 0.288, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -1.838, ftImpact: -0.192, to: -1.657 } },
          { name: "Denzel Aberdeen", min: 34, pts: 19, reb: 1, ast: 4, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 8, fga: 21, ftm: 2, fta: 3, composite: -0.22, zScores: { pts: 1.471, reb: -0.806, ast: 1.396, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -1.233, ftImpact: -0.285, to: -0.805 } },
          { name: "Trent Noah", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.69, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Mo Dioubate", min: 25, pts: 9, reb: 5, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 5, fta: 8, composite: -0.69, zScores: { pts: 0.105, reb: 0.586, ast: 0.288, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.57, ftImpact: -1.236, to: 0.901 } },
          { name: "Brandon Garrison", min: 17, pts: 0, reb: 3, ast: 1, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -0.69, zScores: { pts: -1.124, reb: -0.11, ast: -0.266, stl: 0.407, blk: 2.256, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: -0.805 } },
          { name: "Jasper Johnson", min: 12, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.28, zScores: { pts: -0.305, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 0.826, ftImpact: 0, to: 0.048 } }
        ]
      },
      home: {
        abbr: "Fla", name: "Florida Gators", score: 92,
        players: [
          { name: "Alex Condon", min: 35, pts: 14, reb: 11, ast: 2, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 4, fga: 9, ftm: 6, fta: 9, composite: 0.66, zScores: { pts: 0.788, reb: 2.674, ast: 0.288, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.093, ftImpact: -0.856, to: -1.657 } },
          { name: "Thomas Haugh", min: 34, pts: 17, reb: 8, ast: 2, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 5, fga: 12, ftm: 6, fta: 10, composite: 3.14, zScores: { pts: 1.198, reb: 1.63, ast: 0.288, stl: 0.407, blk: 0.895, tpm: 0.105, fgImpact: -0.378, ftImpact: -1.9, to: 0.901 } },
          { name: "Rueben Chinyelu", min: 23, pts: 10, reb: 12, ast: 1, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 3.81, zScores: { pts: 0.242, reb: 3.022, ast: -0.266, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: 0.256, ftImpact: 0.758, to: -0.805 } },
          { name: "Boogie Fland", min: 26, pts: 8, reb: 4, ast: 2, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 10, ftm: 4, fta: 6, composite: -1.45, zScores: { pts: -0.032, reb: 0.238, ast: 0.288, stl: 2.565, blk: -0.467, tpm: -0.702, fgImpact: -1.966, ftImpact: -0.571, to: -0.805 } },
          { name: "Xaivian Lee", min: 25, pts: 22, reb: 2, ast: 3, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 7, fga: 12, ftm: 4, fta: 4, composite: 6.59, zScores: { pts: 1.881, reb: -0.458, ast: 0.842, stl: 0.407, blk: -0.467, tpm: 2.524, fgImpact: 1.146, ftImpact: 1.516, to: -0.805 } },
          { name: "Micah Handlogten", min: 17, pts: 2, reb: 5, ast: 1, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 1, composite: -1.65, zScores: { pts: -0.851, reb: 0.586, ast: -0.266, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: -1.044, to: -0.805 } },
          { name: "Urban Klavzar", min: 29, pts: 19, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 5, fgm: 7, fga: 13, ftm: 0, fta: 0, composite: 3.74, zScores: { pts: 1.471, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 3.331, fgImpact: 0.797, ftImpact: 0, to: 0.901 } },
          { name: "Isaiah Brown", min: 11, pts: 0, reb: 1, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -1.12, zScores: { pts: -1.124, reb: -0.806, ast: 0.288, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401817516",
      line: "Virginia Cavaliers 70 @ Ohio State Buckeyes 66 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UVA", name: "Virginia Cavaliers", score: 70,
        players: [
          { name: "Thijs De Ridder", min: 26, pts: 6, reb: 6, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 7, ftm: 2, fta: 3, composite: -2.12, zScores: { pts: -0.305, reb: 0.934, ast: -0.266, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.919, ftImpact: -0.285, to: -0.805 } },
          { name: "Johann Grunloh", min: 19, pts: 4, reb: 2, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.73, zScores: { pts: -0.578, reb: -0.458, ast: -0.819, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: 0.477, ftImpact: 0, to: 0.048 } },
          { name: "Sam Lewis", min: 28, pts: 12, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 7, fta: 9, composite: -0.33, zScores: { pts: 0.515, reb: -0.11, ast: -0.819, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.57, ftImpact: 0.566, to: 0.048 } },
          { name: "Dallin Hall", min: 31, pts: 7, reb: 1, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: -4.13, zScores: { pts: -0.168, reb: -0.806, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.192, ftImpact: -0.665, to: -1.657 } },
          { name: "Malik Thomas", min: 22, pts: 13, reb: 6, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 10, ftm: 3, fta: 4, composite: 1.35, zScores: { pts: 0.652, reb: 0.934, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.442, ftImpact: 0.094, to: 0.048 } },
          { name: "Devin Tillis", min: 14, pts: 5, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.27, zScores: { pts: -0.441, reb: -0.11, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.128, ftImpact: 0, to: 0.901 } },
          { name: "Ugonna Onyenso", min: 22, pts: 8, reb: 10, ast: 1, stl: 1, blk: 4, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 4, fta: 7, composite: 4.92, zScores: { pts: -0.032, reb: 2.326, ast: -0.266, stl: 0.407, blk: 4.979, tpm: -0.702, fgImpact: -0.221, ftImpact: -1.615, to: 0.048 } },
          { name: "Chance Mallory", min: 23, pts: 12, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 5, fta: 7, composite: -0.85, zScores: { pts: 0.515, reb: -0.11, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.192, ftImpact: -0.192, to: 0.048 } },
          { name: "Jacari White", min: 15, pts: 3, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.28, zScores: { pts: -0.715, reb: -0.11, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.285, ftImpact: 0, to: 0.048 } }
        ]
      },
      home: {
        abbr: "OhSt", name: "Ohio State Buckeyes", score: 66,
        players: [
          { name: "Amare Bynum", min: 33, pts: 15, reb: 6, ast: 0, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 7, ftm: 2, fta: 2, composite: 4.02, zScores: { pts: 0.925, reb: 0.934, ast: -0.819, stl: 0.407, blk: -0.467, tpm: 1.718, fgImpact: 1.367, ftImpact: 0.758, to: -0.805 } },
          { name: "Devin Royal", min: 33, pts: 4, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 12, ftm: 0, fta: 0, composite: -5.27, zScores: { pts: -0.578, reb: 0.586, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -2.664, ftImpact: 0, to: 0.048 } },
          { name: "Christoph Tilly", min: 26, pts: 11, reb: 3, ast: 2, stl: 1, blk: 2, to: 0, tpm: 1, fgm: 4, fga: 12, ftm: 2, fta: 3, composite: 2.8, zScores: { pts: 0.378, reb: -0.11, ast: 0.288, stl: 0.407, blk: 2.256, tpm: 0.105, fgImpact: -1.14, ftImpact: -0.285, to: 0.901 } },
          { name: "Bruce Thornton", min: 38, pts: 28, reb: 4, ast: 3, stl: 3, blk: 1, to: 1, tpm: 2, fgm: 12, fga: 21, ftm: 2, fta: 4, composite: 8.68, zScores: { pts: 2.701, reb: 0.238, ast: 0.842, stl: 2.565, blk: 0.895, tpm: 0.911, fgImpact: 1.815, ftImpact: -1.329, to: 0.048 } },
          { name: "Taison Chatman", min: 31, pts: 4, reb: 1, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -3.44, zScores: { pts: -0.578, reb: -0.806, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.221, ftImpact: 0, to: -0.805 } },
          { name: "Colin White", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Ivan Njegovan", min: 14, pts: 4, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.27, zScores: { pts: -0.578, reb: 0.586, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.477, ftImpact: 0, to: 0.901 } },
          { name: "Gabe Cupps", min: 13, pts: 0, reb: 0, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.15, zScores: { pts: -1.124, reb: -1.154, ast: 0.842, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Puff Johnson", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401822943",
      line: "St. John's Red Storm 79 @ Providence Friars 69 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "StJon", name: "St. John's Red Storm", score: 79,
        players: [
          { name: "Dillon Mitchell", min: 24, pts: 5, reb: 6, ast: 6, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 1, fta: 2, composite: 4.06, zScores: { pts: -0.441, reb: 0.934, ast: 2.504, stl: 2.565, blk: -0.467, tpm: -0.702, fgImpact: -0.57, ftImpact: -0.665, to: 0.901 } },
          { name: "Zuby Ejiofor", min: 32, pts: 14, reb: 4, ast: 3, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 7, ftm: 6, fta: 9, composite: 0.05, zScores: { pts: 0.788, reb: 0.238, ast: 0.842, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.605, ftImpact: -0.856, to: -0.805 } },
          { name: "Bryce Hopkins", min: 35, pts: 9, reb: 9, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 14, ftm: 3, fta: 4, composite: -0.32, zScores: { pts: 0.105, reb: 1.978, ast: -0.266, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -2.6, ftImpact: 0.094, to: 0.048 } },
          { name: "Oziyah Sellers", min: 32, pts: 11, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 11, ftm: 1, fta: 2, composite: -1.63, zScores: { pts: 0.378, reb: -0.11, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.029, ftImpact: -0.665, to: 0.901 } },
          { name: "Ian Jackson", min: 15, pts: 9, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: -0.04, zScores: { pts: 0.105, reb: -0.806, ast: -0.819, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: -0.506, ftImpact: 0.758, to: 0.901 } },
          { name: "Ruben Prey", min: 8, pts: 0, reb: 1, ast: 1, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -0.03, zScores: { pts: -1.124, reb: -0.806, ast: -0.266, stl: 0.407, blk: 2.256, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.901 } },
          { name: "Kelvin Odih", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.89, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Lefteris Liotopoulos", min: 8, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.86, zScores: { pts: -0.715, reb: -0.458, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.285, ftImpact: 0, to: 0.901 } },
          { name: "Joson Sanon", min: 18, pts: 5, reb: 2, ast: 0, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 2, composite: -2.07, zScores: { pts: -0.441, reb: -0.458, ast: -0.819, stl: 0.407, blk: 0.895, tpm: 0.105, fgImpact: -0.57, ftImpact: -2.087, to: 0.901 } },
          { name: "Dylan Darling", min: 27, pts: 23, reb: 8, ast: 0, stl: 3, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 11, ftm: 8, fta: 9, composite: 10.27, zScores: { pts: 2.018, reb: 1.63, ast: -0.819, stl: 2.565, blk: -0.467, tpm: 1.718, fgImpact: 0.733, ftImpact: 1.989, to: 0.901 } }
        ]
      },
      home: {
        abbr: "Prov", name: "Providence Friars", score: 69,
        players: [
          { name: "Oswin Erhunmwunse", min: 23, pts: 7, reb: 4, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 1, fta: 2, composite: 0.75, zScores: { pts: -0.168, reb: 0.238, ast: -0.819, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: 1.239, ftImpact: -0.665, to: 0.048 } },
          { name: "Jamier Jones", min: 26, pts: 12, reb: 2, ast: 1, stl: 1, blk: 1, to: 5, tpm: 0, fgm: 3, fga: 11, ftm: 6, fta: 8, composite: -4.34, zScores: { pts: 0.515, reb: -0.458, ast: -0.266, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: -1.553, ftImpact: 0.187, to: -3.363 } },
          { name: "Stefan Vaaks", min: 34, pts: 20, reb: 5, ast: 3, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 19, ftm: 7, fta: 8, composite: 2.68, zScores: { pts: 1.608, reb: 0.586, ast: 0.842, stl: 0.407, blk: -0.467, tpm: 1.718, fgImpact: -2.821, ftImpact: 1.61, to: -0.805 } },
          { name: "Ryan Mela", min: 38, pts: 14, reb: 9, ast: 3, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 13, ftm: 4, fta: 4, composite: 4.19, zScores: { pts: 0.788, reb: 1.978, ast: 0.842, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: -0.727, ftImpact: 1.516, to: -0.805 } },
          { name: "Jaylin Sellers", min: 20, pts: 13, reb: 7, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 15, ftm: 2, fta: 2, composite: -1.39, zScores: { pts: 0.652, reb: 1.282, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -1.425, ftImpact: 0.758, to: -0.805 } },
          { name: "Peteris Pinnis", min: 10, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.2, zScores: { pts: -1.124, reb: 0.238, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.048 } },
          { name: "Cole Hargrove", min: 12, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.54, zScores: { pts: -1.124, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.048 } },
          { name: "Duncan Powell", min: 16, pts: 3, reb: 5, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: 0.9, zScores: { pts: -0.715, reb: 0.586, ast: -0.266, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: 0.064, ftImpact: 0, to: 0.901 } },
          { name: "Jack Williams", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Nilavan Daniels", min: 19, pts: 0, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.98, zScores: { pts: -1.124, reb: -0.458, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401808238",
      line: "Texas A&M Aggies 69 @ Vanderbilt Commodores 82 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TAMU", name: "Texas A&M Aggies", score: 69,
        players: [
          { name: "Rashaun Agee", min: 27, pts: 8, reb: 11, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 12, ftm: 2, fta: 4, composite: -0.48, zScores: { pts: -0.032, reb: 2.674, ast: -0.819, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: -1.902, ftImpact: -1.329, to: 0.048 } },
          { name: "Ruben Dominguez", min: 19, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -4.66, zScores: { pts: -0.715, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -1.332, ftImpact: 0, to: 0.048 } },
          { name: "Marcus Hill", min: 31, pts: 20, reb: 4, ast: 1, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 9, fga: 16, ftm: 1, fta: 2, composite: 2.51, zScores: { pts: 1.608, reb: 0.238, ast: -0.266, stl: 1.486, blk: -0.467, tpm: 0.105, fgImpact: 1.274, ftImpact: -0.665, to: -0.805 } },
          { name: "Jacari Lane", min: 20, pts: 3, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -3.05, zScores: { pts: -0.715, reb: -1.154, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -1.332, ftImpact: 0, to: 0.901 } },
          { name: "Rylan Griffen", min: 22, pts: 5, reb: 2, ast: 4, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -1.76, zScores: { pts: -0.441, reb: -0.458, ast: 1.396, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -1.268, ftImpact: 0, to: 0.048 } },
          { name: "Federiko Federiko", min: 14, pts: 2, reb: 4, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: 0.18, zScores: { pts: -0.851, reb: 0.238, ast: -0.266, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: 0.413, ftImpact: 0, to: 0.048 } },
          { name: "Jamie Vinson", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.54, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Zach Clemence", min: 14, pts: 9, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: -1.71, zScores: { pts: 0.105, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 1.303, ftImpact: 0, to: -0.805 } },
          { name: "Josh Holloway", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.7, zScores: { pts: -0.851, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.064, ftImpact: 0, to: 0.901 } },
          { name: "Pop Isaacs", min: 24, pts: 8, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 1.04, zScores: { pts: -0.032, reb: -0.458, ast: 0.288, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: -0.506, ftImpact: 0, to: 0.901 } },
          { name: "Ali Dibba", min: 22, pts: 9, reb: 8, ast: 0, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 2, fta: 4, composite: 0.25, zScores: { pts: 0.105, reb: 1.63, ast: -0.819, stl: 1.486, blk: -0.467, tpm: 0.105, fgImpact: -0.506, ftImpact: -1.329, to: 0.048 } }
        ]
      },
      home: {
        abbr: "Vand", name: "Vanderbilt Commodores", score: 82,
        players: [
          { name: "Jalen Washington", min: 20, pts: 2, reb: 8, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 4, composite: -2.88, zScores: { pts: -0.851, reb: 1.63, ast: 0.288, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -1.047, ftImpact: -1.329, to: -0.805 } },
          { name: "AK Okereke", min: 33, pts: 23, reb: 5, ast: 3, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 8, ftm: 11, fta: 14, composite: 6.63, zScores: { pts: 2.018, reb: 0.586, ast: 0.842, stl: 1.486, blk: -0.467, tpm: 0.911, fgImpact: 1.018, ftImpact: 1.039, to: -0.805 } },
          { name: "Tyler Nickel", min: 35, pts: 25, reb: 3, ast: 1, stl: 0, blk: 1, to: 1, tpm: 5, fgm: 8, fga: 14, ftm: 4, fta: 5, composite: 7.2, zScores: { pts: 2.291, reb: -0.11, ast: -0.266, stl: -0.671, blk: 0.895, tpm: 3.331, fgImpact: 1.21, ftImpact: 0.473, to: 0.048 } },
          { name: "Devin McGlockton", min: 27, pts: 17, reb: 8, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 6, fga: 10, ftm: 4, fta: 4, composite: 5.83, zScores: { pts: 1.198, reb: 1.63, ast: -0.819, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: 1.082, ftImpact: 1.516, to: 0.901 } },
          { name: "Tyler Tanner", min: 31, pts: 4, reb: 3, ast: 6, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 10, ftm: 0, fta: 0, composite: 1.29, zScores: { pts: -0.578, reb: -0.11, ast: 2.504, stl: 2.565, blk: -0.467, tpm: -0.702, fgImpact: -1.966, ftImpact: 0, to: 0.048 } },
          { name: "Tyler Harris", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.59, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.048 } },
          { name: "Chandler Bing", min: 31, pts: 11, reb: 6, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 1.53, zScores: { pts: 0.378, reb: 0.934, ast: -0.819, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: -0.093, ftImpact: 0.758, to: 0.048 } },
          { name: "Mike James", min: 18, pts: 0, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.24, zScores: { pts: -1.124, reb: -0.11, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401808233",
      line: "Auburn Tigers 75 @ Arkansas Razorbacks 88 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Aub", name: "Auburn Tigers", score: 75,
        players: [
          { name: "Sebastian Williams-Adams", min: 34, pts: 6, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 4, composite: -3.87, zScores: { pts: -0.305, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.221, ftImpact: -1.329, to: 0.901 } },
          { name: "KeShawn Murphy", min: 34, pts: 22, reb: 12, ast: 1, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 9, fga: 16, ftm: 4, fta: 6, composite: 8.2, zScores: { pts: 1.881, reb: 3.022, ast: -0.266, stl: 0.407, blk: 2.256, tpm: -0.702, fgImpact: 1.274, ftImpact: -0.571, to: 0.901 } },
          { name: "Elyjah Freeman", min: 36, pts: 9, reb: 9, ast: 0, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 3, fga: 10, ftm: 1, fta: 2, composite: 0.8, zScores: { pts: 0.105, reb: 1.978, ast: -0.819, stl: 0.407, blk: 0.895, tpm: 0.911, fgImpact: -1.204, ftImpact: -0.665, to: -0.805 } },
          { name: "Kevin Overton", min: 39, pts: 5, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 13, ftm: 3, fta: 3, composite: -4.9, zScores: { pts: -0.441, reb: 0.238, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -3.775, ftImpact: 1.137, to: 0.048 } },
          { name: "Tahaad Pettiford", min: 38, pts: 29, reb: 3, ast: 7, stl: 0, blk: 0, to: 3, tpm: 4, fgm: 11, fga: 18, ftm: 3, fta: 3, composite: 8.75, zScores: { pts: 2.837, reb: -0.11, ast: 3.058, stl: -0.671, blk: -0.467, tpm: 2.524, fgImpact: 2.1, ftImpact: 1.137, to: -1.657 } },
          { name: "Filip Jovic", min: 14, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -3.17, zScores: { pts: -0.578, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.285, ftImpact: 0.758, to: 0.048 } },
          { name: "Simon Walker", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Blake Muschalek", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } }
        ]
      },
      home: {
        abbr: "Ark", name: "Arkansas Razorbacks", score: 88,
        players: [
          { name: "Nick Pringle", min: 21, pts: 2, reb: 1, ast: 1, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 4, composite: -1.47, zScores: { pts: -0.851, reb: -0.806, ast: -0.266, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: 0, ftImpact: -1.329, to: 0.901 } },
          { name: "Trevon Brazile", min: 36, pts: 11, reb: 7, ast: 1, stl: 1, blk: 4, to: 2, tpm: 1, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: 5.7, zScores: { pts: 0.378, reb: 1.282, ast: -0.266, stl: 0.407, blk: 4.979, tpm: 0.105, fgImpact: -0.378, ftImpact: 0, to: -0.805 } },
          { name: "Darius Acuff Jr.", min: 38, pts: 31, reb: 2, ast: 7, stl: 0, blk: 0, to: 1, tpm: 7, fgm: 10, fga: 15, ftm: 4, fta: 5, composite: 12.42, zScores: { pts: 3.111, reb: -0.458, ast: 3.058, stl: -0.671, blk: -0.467, tpm: 4.944, fgImpact: 2.385, ftImpact: 0.473, to: 0.048 } },
          { name: "Billy Richmond III", min: 38, pts: 25, reb: 3, ast: 4, stl: 3, blk: 2, to: 1, tpm: 0, fgm: 12, fga: 15, ftm: 1, fta: 1, composite: 12.03, zScores: { pts: 2.291, reb: -0.11, ast: 1.396, stl: 2.565, blk: 2.256, tpm: -0.702, fgImpact: 3.908, ftImpact: 0.379, to: 0.048 } },
          { name: "Meleek Thomas", min: 36, pts: 8, reb: 10, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 9, ftm: 2, fta: 3, composite: 1.28, zScores: { pts: -0.032, reb: 2.326, ast: 0.842, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.855, ftImpact: -0.285, to: 0.048 } },
          { name: "Malique Ewin", min: 19, pts: 8, reb: 1, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 1.43, zScores: { pts: -0.032, reb: -0.806, ast: -0.819, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: 1.303, ftImpact: 0, to: 0.901 } },
          { name: "Karter Knox", min: 6, pts: 1, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -3.46, zScores: { pts: -0.988, reb: -0.458, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: -0.665, to: 0.901 } },
          { name: "DJ Wagner", min: 6, pts: 2, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.07, zScores: { pts: -0.851, reb: -0.806, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.285, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401827680",
      line: "Colorado Buffaloes 86 @ BYU Cougars 90 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "Col", name: "Colorado Buffaloes", score: 86,
        players: [
          { name: "Bangot Dak", min: 35, pts: 15, reb: 7, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 7, fga: 12, ftm: 1, fta: 1, composite: 3.89, zScores: { pts: 0.925, reb: 1.282, ast: -0.266, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 1.146, ftImpact: 0.379, to: 0.901 } },
          { name: "Sebastian Rancik", min: 36, pts: 9, reb: 10, ast: 6, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 9, ftm: 5, fta: 6, composite: 4.76, zScores: { pts: 0.105, reb: 2.326, ast: 2.504, stl: 2.565, blk: -0.467, tpm: -0.702, fgImpact: -1.617, ftImpact: 0.852, to: -0.805 } },
          { name: "Isaiah Johnson", min: 43, pts: 27, reb: 3, ast: 4, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 10, fga: 23, ftm: 3, fta: 4, composite: 4.34, zScores: { pts: 2.564, reb: -0.11, ast: 1.396, stl: 0.407, blk: -0.467, tpm: 2.524, fgImpact: -0.407, ftImpact: 0.094, to: -1.657 } },
          { name: "Jalin Holland", min: 33, pts: 9, reb: 6, ast: 1, stl: 1, blk: 2, to: 1, tpm: 1, fgm: 4, fga: 9, ftm: 0, fta: 4, composite: -0.68, zScores: { pts: 0.105, reb: 0.934, ast: -0.266, stl: 0.407, blk: 2.256, tpm: 0.105, fgImpact: -0.093, ftImpact: -4.175, to: 0.048 } },
          { name: "Barrington Hargress", min: 41, pts: 20, reb: 5, ast: 4, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 7, fga: 11, ftm: 2, fta: 3, composite: 7.31, zScores: { pts: 1.608, reb: 0.586, ast: 1.396, stl: 0.407, blk: -0.467, tpm: 2.524, fgImpact: 1.495, ftImpact: -0.285, to: 0.048 } },
          { name: "Alon Michaeli", min: 9, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.05, zScores: { pts: -0.851, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.983, ftImpact: 0, to: 0.901 } },
          { name: "Tacko Ifaola", min: 5, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.35, zScores: { pts: -0.851, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: 0, to: 0.901 } },
          { name: "Elijah Malone", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.901 } },
          { name: "Josiah Sanders", min: 16, pts: 2, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.59, zScores: { pts: -0.851, reb: -1.154, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.064, ftImpact: 0, to: 0.901 } },
          { name: "Ian Inman", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } }
        ]
      },
      home: {
        abbr: "BYU", name: "BYU Cougars", score: 90,
        players: [
          { name: "AJ Dybantsa", min: 43, pts: 20, reb: 13, ast: 8, stl: 3, blk: 1, to: 7, tpm: 1, fgm: 6, fga: 20, ftm: 7, fta: 10, composite: 4.2, zScores: { pts: 1.608, reb: 3.37, ast: 3.611, stl: 2.565, blk: 0.895, tpm: 0.105, fgImpact: -2.408, ftImpact: -0.477, to: -5.068 } },
          { name: "Keba Keita", min: 19, pts: 4, reb: 6, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.9, zScores: { pts: -0.578, reb: 0.934, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.128, ftImpact: 0, to: -0.805 } },
          { name: "Kennard Davis Jr.", min: 39, pts: 9, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 1.3, zScores: { pts: 0.105, reb: -0.11, ast: 0.842, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.157, ftImpact: 0.758, to: 0.901 } },
          { name: "Richie Saunders", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Robert Wright III", min: 40, pts: 39, reb: 5, ast: 4, stl: 0, blk: 0, to: 4, tpm: 4, fgm: 12, fga: 16, ftm: 11, fta: 13, composite: 10.7, zScores: { pts: 4.203, reb: 0.586, ast: 1.396, stl: -0.671, blk: -0.467, tpm: 2.524, fgImpact: 3.559, ftImpact: 2.083, to: -2.51 } },
          { name: "Khadim Mboup", min: 14, pts: 2, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.93, zScores: { pts: -0.851, reb: -0.11, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.285, ftImpact: 0, to: 0.901 } },
          { name: "Mihailo Boskovic", min: 15, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -0.715, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.634, ftImpact: 0, to: 0.048 } },
          { name: "Tyler Mrus", min: 16, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.28, zScores: { pts: -0.305, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 0.477, ftImpact: 0, to: 0.048 } },
          { name: "Abdullah Ahmed", min: 23, pts: 1, reb: 5, ast: 0, stl: 0, blk: 5, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: 3.63, zScores: { pts: -0.988, reb: 0.586, ast: -0.819, stl: -0.671, blk: 6.34, tpm: -0.702, fgImpact: -0.349, ftImpact: -0.665, to: 0.901 } },
          { name: "Aleksej Kostic", min: 15, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.98, zScores: { pts: -0.305, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 0.128, ftImpact: 0, to: 0.048 } }
        ]
      }
    },
      {
      id: "401817250",
      line: "Louisville Cardinals 82 @ Baylor Bears 71 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Lou", name: "Louisville Cardinals", score: 82,
        players: [
          { name: "Sananda Fru", min: 27, pts: 8, reb: 7, ast: 1, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 4, fga: 4, ftm: 0, fta: 0, composite: 4.42, zScores: { pts: -0.032, reb: 1.282, ast: -0.266, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: 1.652, ftImpact: 0, to: 0.901 } },
          { name: "Ryan Conwell", min: 31, pts: 14, reb: 4, ast: 4, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 10, ftm: 5, fta: 7, composite: -0.05, zScores: { pts: 0.788, reb: 0.238, ast: 1.396, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.442, ftImpact: -0.192, to: -0.805 } },
          { name: "Mikel Brown Jr.", min: 35, pts: 29, reb: 3, ast: 6, stl: 5, blk: 0, to: 6, tpm: 4, fgm: 8, fga: 14, ftm: 9, fta: 9, composite: 12.42, zScores: { pts: 2.837, reb: -0.11, ast: 2.504, stl: 4.722, blk: -0.467, tpm: 2.524, fgImpact: 1.21, ftImpact: 3.412, to: -4.216 } },
          { name: "Isaac McKneely", min: 19, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.9, zScores: { pts: -0.851, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.634, ftImpact: 0, to: 0.048 } },
          { name: "J'Vonne Hadley", min: 31, pts: 20, reb: 5, ast: 3, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 7, fga: 10, ftm: 4, fta: 4, composite: 8.15, zScores: { pts: 1.608, reb: 0.586, ast: 0.842, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: 1.844, ftImpact: 1.516, to: 0.901 } },
          { name: "Khani Rooths", min: 24, pts: 0, reb: 3, ast: 1, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -0.07, zScores: { pts: -1.124, reb: -0.11, ast: -0.266, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Kasean Pryor", min: 5, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -0.851, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: 0, to: 0.048 } },
          { name: "Aly Khalifa", min: 13, pts: 0, reb: 2, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -1.124, reb: -0.458, ast: 0.842, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: -0.805 } },
          { name: "Adrian Wooley", min: 10, pts: 7, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -2.24, zScores: { pts: -0.168, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.89, ftImpact: 0, to: 0.048 } },
          { name: "Kobe Rodgers", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.89, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.048 } }
        ]
      },
      home: {
        abbr: "Baylor", name: "Baylor Bears", score: 71,
        players: [
          { name: "Caden Powell", min: 22, pts: 8, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 6, fta: 8, composite: -2, zScores: { pts: -0.032, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.285, ftImpact: 0.187, to: 0.901 } },
          { name: "Isaac Williams IV", min: 29, pts: 20, reb: 2, ast: 3, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 8, fga: 12, ftm: 4, fta: 5, composite: 5.02, zScores: { pts: 1.608, reb: -0.458, ast: 0.842, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: 1.908, ftImpact: 0.473, to: 0.048 } },
          { name: "Obi Agbim", min: 33, pts: 4, reb: 5, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 7, ftm: 4, fta: 4, composite: -2.2, zScores: { pts: -0.578, reb: 0.586, ast: 0.288, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -2.443, ftImpact: 1.516, to: -0.805 } },
          { name: "Cameron Carr", min: 35, pts: 5, reb: 3, ast: 3, stl: 0, blk: 2, to: 5, tpm: 1, fgm: 1, fga: 11, ftm: 2, fta: 2, composite: -3.7, zScores: { pts: -0.441, reb: -0.11, ast: 0.842, stl: -0.671, blk: 2.256, tpm: 0.105, fgImpact: -3.077, ftImpact: 0.758, to: -3.363 } },
          { name: "Tounde Yessoufou", min: 36, pts: 16, reb: 4, ast: 1, stl: 4, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 16, ftm: 5, fta: 6, composite: 3.44, zScores: { pts: 1.061, reb: 0.238, ast: -0.266, stl: 3.643, blk: -0.467, tpm: 0.105, fgImpact: -1.774, ftImpact: 0.852, to: 0.048 } },
          { name: "James Nnaji", min: 18, pts: 7, reb: 4, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 3, fta: 3, composite: 3, zScores: { pts: -0.168, reb: 0.238, ast: -0.819, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: 0.826, ftImpact: 1.137, to: 0.901 } },
          { name: "Michael Rataj", min: 27, pts: 11, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 9, ftm: 1, fta: 2, composite: 0.49, zScores: { pts: 0.378, reb: 0.238, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.669, ftImpact: -0.665, to: 0.901 } }
        ]
      }
    },
      {
      id: "401828427",
      line: "Fordham Rams 70 @ Rhode Island Rams 66 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "Ford", name: "Fordham Rams", score: 70,
        players: [
          { name: "Abass Bodija", min: 31, pts: 6, reb: 7, ast: 1, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 4, ftm: 4, fta: 6, composite: -3.99, zScores: { pts: -0.305, reb: 1.282, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.634, ftImpact: -0.571, to: -1.657 } },
          { name: "Akira Jacobs", min: 28, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 6, ftm: 0, fta: 0, composite: -4.74, zScores: { pts: -1.124, reb: 0.238, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -2.094, ftImpact: 0, to: 0.901 } },
          { name: "Rikus Schulte", min: 36, pts: 17, reb: 9, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 8, ftm: 2, fta: 5, composite: 1.54, zScores: { pts: 1.198, reb: 1.978, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 2.542, ftImpact: -2.373, to: 0.048 } },
          { name: "Dejour Reaves", min: 37, pts: 19, reb: 5, ast: 3, stl: 5, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 15, ftm: 6, fta: 6, composite: 8.92, zScores: { pts: 1.471, reb: 0.586, ast: 0.842, stl: 4.722, blk: -0.467, tpm: 0.105, fgImpact: -0.663, ftImpact: 2.275, to: 0.048 } },
          { name: "Louis Lesmond", min: 22, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 2, composite: -6.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: -2.087, to: 0.048 } },
          { name: "Roor Akhuar", min: 33, pts: 9, reb: 6, ast: 1, stl: 0, blk: 2, to: 2, tpm: 3, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 3.81, zScores: { pts: 0.105, reb: 0.934, ast: -0.266, stl: -0.671, blk: 2.256, tpm: 1.718, fgImpact: 0.541, ftImpact: 0, to: -0.805 } },
          { name: "Christian Henry", min: 31, pts: 16, reb: 6, ast: 4, stl: 4, blk: 0, to: 4, tpm: 2, fgm: 6, fga: 13, ftm: 2, fta: 4, composite: 3.67, zScores: { pts: 1.061, reb: 0.934, ast: 1.396, stl: 3.643, blk: -0.467, tpm: 0.911, fgImpact: 0.035, ftImpact: -1.329, to: -2.51 } },
          { name: "Marcus Greene", min: 7, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.91, zScores: { pts: -0.715, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.413, ftImpact: 0, to: 0.048 } }
        ]
      },
      home: {
        abbr: "URI", name: "Rhode Island Rams", score: 66,
        players: [
          { name: "Alex Crawford", min: 34, pts: 5, reb: 5, ast: 1, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 3, fta: 6, composite: -1.31, zScores: { pts: -0.441, reb: 0.586, ast: -0.266, stl: -0.671, blk: 3.617, tpm: -0.702, fgImpact: -0.634, ftImpact: -1.994, to: -0.805 } },
          { name: "Keeyan Itejere", min: 29, pts: 8, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: -1.06, zScores: { pts: -0.032, reb: 0.238, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.89, ftImpact: 0.758, to: -0.805 } },
          { name: "RJ Johnson", min: 30, pts: 7, reb: 3, ast: 5, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 8, ftm: 4, fta: 4, composite: 1.48, zScores: { pts: -0.168, reb: -0.11, ast: 1.95, stl: 1.486, blk: -0.467, tpm: 0.105, fgImpact: -2.03, ftImpact: 1.516, to: -0.805 } },
          { name: "Myles Corey", min: 33, pts: 11, reb: 2, ast: 1, stl: 2, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 11, ftm: 1, fta: 2, composite: 2.39, zScores: { pts: 0.378, reb: -0.458, ast: -0.266, stl: 1.486, blk: 0.895, tpm: 0.911, fgImpact: -0.791, ftImpact: -0.665, to: 0.901 } },
          { name: "Tyler Cochran", min: 43, pts: 25, reb: 9, ast: 2, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 9, fga: 13, ftm: 4, fta: 8, composite: 4.22, zScores: { pts: 2.291, reb: 1.978, ast: 0.288, stl: 0.407, blk: -0.467, tpm: 1.718, fgImpact: 2.321, ftImpact: -2.658, to: -1.657 } },
          { name: "Drissa Traore", min: 18, pts: 0, reb: 5, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.42, zScores: { pts: -1.124, reb: 0.586, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.048 } },
          { name: "Jalen Harper", min: 7, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 4, composite: -4.75, zScores: { pts: -0.851, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: -1.329, to: 0.901 } },
          { name: "Jonah Hinton", min: 31, pts: 8, reb: 1, ast: 4, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -0.25, zScores: { pts: -0.032, reb: -0.806, ast: 1.396, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: -0.855, ftImpact: 0, to: -0.805 } }
        ]
      }
    },
      {
      id: "401827683",
      line: "TCU Horned Frogs 95 @ Oklahoma State Cowboys 92 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "TCU", name: "TCU Horned Frogs", score: 95,
        players: [
          { name: "Xavier Edmonds", min: 30, pts: 15, reb: 10, ast: 2, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 7, fga: 13, ftm: 0, fta: 0, composite: 5.56, zScores: { pts: 0.925, reb: 2.326, ast: 0.288, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: 0.797, ftImpact: 0, to: 0.901 } },
          { name: "David Punch", min: 37, pts: 19, reb: 6, ast: 1, stl: 3, blk: 2, to: 1, tpm: 1, fgm: 6, fga: 15, ftm: 6, fta: 7, composite: 7.68, zScores: { pts: 1.471, reb: 0.934, ast: -0.266, stl: 2.565, blk: 2.256, tpm: 0.105, fgImpact: -0.663, ftImpact: 1.231, to: 0.048 } },
          { name: "Micah Robinson", min: 25, pts: 11, reb: 1, ast: 2, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 11, ftm: 2, fta: 4, composite: -0.24, zScores: { pts: 0.378, reb: -0.806, ast: 0.288, stl: 1.486, blk: -0.467, tpm: 0.105, fgImpact: -0.791, ftImpact: -1.329, to: 0.901 } },
          { name: "Jayden Pierre", min: 43, pts: 18, reb: 6, ast: 4, stl: 0, blk: 2, to: 1, tpm: 4, fgm: 6, fga: 11, ftm: 2, fta: 2, composite: 9.31, zScores: { pts: 1.335, reb: 0.934, ast: 1.396, stl: -0.671, blk: 2.256, tpm: 2.524, fgImpact: 0.733, ftImpact: 0.758, to: 0.048 } },
          { name: "Brock Harding", min: 34, pts: 13, reb: 3, ast: 4, stl: 1, blk: 0, to: 4, tpm: 3, fgm: 3, fga: 7, ftm: 4, fta: 4, composite: 2.44, zScores: { pts: 0.652, reb: -0.11, ast: 1.396, stl: 0.407, blk: -0.467, tpm: 1.718, fgImpact: -0.157, ftImpact: 1.516, to: -2.51 } },
          { name: "Liutauras Lelevicius", min: 19, pts: 8, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 3, fta: 4, composite: -1.03, zScores: { pts: -0.032, reb: 0.238, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.477, ftImpact: 0.094, to: 0.048 } },
          { name: "Vianney Salatchoum", min: 8, pts: 0, reb: 2, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -0.62, zScores: { pts: -1.124, reb: -0.458, ast: -0.819, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Tanner Toolson", min: 27, pts: 11, reb: 4, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 8, ftm: 4, fta: 6, composite: 1.33, zScores: { pts: 0.378, reb: 0.238, ast: 0.842, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.506, ftImpact: -0.571, to: 0.901 } },
          { name: "Jace Posey", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } }
        ]
      },
      home: {
        abbr: "OkSt", name: "Oklahoma State Cowboys", score: 92,
        players: [
          { name: "Parsa Fallah", min: 36, pts: 27, reb: 6, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 10, fga: 13, ftm: 6, fta: 7, composite: 6.01, zScores: { pts: 2.564, reb: 0.934, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 3.083, ftImpact: 1.231, to: 0.048 } },
          { name: "Vyctorius Miller", min: 25, pts: 3, reb: 1, ast: 3, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -1.71, zScores: { pts: -0.715, reb: -0.806, ast: 0.842, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.064, ftImpact: -0.665, to: 0.048 } },
          { name: "Kanye Clary", min: 24, pts: 13, reb: 1, ast: 9, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 8, ftm: 2, fta: 2, composite: 4.8, zScores: { pts: 0.652, reb: -0.806, ast: 4.165, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 1.018, ftImpact: 0.758, to: 0.048 } },
          { name: "Christian Coleman", min: 31, pts: 13, reb: 2, ast: 1, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 4, fga: 4, ftm: 3, fta: 4, composite: 2.86, zScores: { pts: 0.652, reb: -0.458, ast: -0.266, stl: -0.671, blk: 0.895, tpm: 0.911, fgImpact: 1.652, ftImpact: 0.094, to: 0.048 } },
          { name: "Anthony Roy", min: 38, pts: 16, reb: 6, ast: 0, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 14, ftm: 2, fta: 4, composite: 1.28, zScores: { pts: 1.061, reb: 0.934, ast: -0.819, stl: 0.407, blk: -0.467, tpm: 2.524, fgImpact: -1.076, ftImpact: -1.329, to: 0.048 } },
          { name: "Benjamin Ahmed", min: 14, pts: 4, reb: 5, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 2, composite: -2.3, zScores: { pts: -0.578, reb: 0.586, ast: -0.266, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.477, ftImpact: -2.087, to: 0.048 } },
          { name: "Lefteris Mantzoukas", min: 8, pts: 0, reb: 3, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -2.47, zScores: { pts: -1.124, reb: -0.11, ast: -0.266, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -1.396, ftImpact: 0, to: 0.901 } },
          { name: "Ryan Crotty", min: 5, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.901 } },
          { name: "Jaylen Curry", min: 28, pts: 12, reb: 3, ast: 4, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 12, ftm: 2, fta: 2, composite: 2.54, zScores: { pts: 0.515, reb: -0.11, ast: 1.396, stl: 1.486, blk: -0.467, tpm: 0.911, fgImpact: -1.14, ftImpact: 0.758, to: -0.805 } },
          { name: "Isaiah Coleman", min: 16, pts: 4, reb: 1, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.53, zScores: { pts: -0.578, reb: -0.806, ast: -0.266, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: 0.477, ftImpact: 0, to: 0.048 } }
        ]
      }
    },
      {
      id: "401820743",
      line: "Georgia Tech Yellow Jackets 74 @ Notre Dame Fighting Irish 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "GaTec", name: "Georgia Tech Yellow Jackets", score: 74,
        players: [
          { name: "Baye Ndongo", min: 29, pts: 14, reb: 12, ast: 3, stl: 0, blk: 0, to: 5, tpm: 0, fgm: 4, fga: 5, ftm: 6, fta: 6, composite: 3.03, zScores: { pts: 0.788, reb: 3.022, ast: 0.842, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 1.303, ftImpact: 2.275, to: -3.363 } },
          { name: "Kowacie Reeves Jr.", min: 31, pts: 16, reb: 1, ast: 0, stl: 0, blk: 3, to: 3, tpm: 2, fgm: 7, fga: 15, ftm: 0, fta: 0, composite: 1.73, zScores: { pts: 1.061, reb: -0.806, ast: -0.819, stl: -0.671, blk: 3.617, tpm: 0.911, fgImpact: 0.099, ftImpact: 0, to: -1.657 } },
          { name: "Eric Chatfield Jr.", min: 23, pts: 6, reb: 2, ast: 4, stl: 2, blk: 0, to: 3, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.68, zScores: { pts: -0.305, reb: -0.458, ast: 1.396, stl: 1.486, blk: -0.467, tpm: 0.911, fgImpact: -0.221, ftImpact: 0, to: -1.657 } },
          { name: "Akai Fleming", min: 25, pts: 13, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 8, ftm: 4, fta: 4, composite: 1.1, zScores: { pts: 0.652, reb: -1.154, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: 0.256, ftImpact: 1.516, to: 0.048 } },
          { name: "Jaeden Mustaf", min: 35, pts: 14, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 7, ftm: 3, fta: 4, composite: 3, zScores: { pts: 0.788, reb: -0.806, ast: 0.842, stl: -0.671, blk: -0.467, tpm: 1.718, fgImpact: 0.605, ftImpact: 0.094, to: 0.901 } },
          { name: "Davi Remagen", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.89, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Lamar Washington", min: 17, pts: 2, reb: 3, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.4, zScores: { pts: -0.851, reb: -0.11, ast: -0.819, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -0.983, ftImpact: 0, to: 0.048 } },
          { name: "Kam Craft", min: 15, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Chas Kelley III", min: 22, pts: 9, reb: 1, ast: 1, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 1.66, zScores: { pts: 0.105, reb: -0.806, ast: -0.266, stl: 1.486, blk: -0.467, tpm: 1.718, fgImpact: -0.157, ftImpact: 0, to: 0.048 } }
        ]
      },
      home: {
        abbr: "ND", name: "Notre Dame Fighting Irish", score: 89,
        players: [
          { name: "Brady Koehler", min: 17, pts: 3, reb: 4, ast: 2, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 0.98, zScores: { pts: -0.715, reb: 0.238, ast: 0.288, stl: 0.407, blk: 0.895, tpm: 0.105, fgImpact: -0.285, ftImpact: 0, to: 0.048 } },
          { name: "Carson Towt", min: 29, pts: 8, reb: 9, ast: 2, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 4, ftm: 0, fta: 1, composite: 3.72, zScores: { pts: -0.032, reb: 1.978, ast: 0.288, stl: 1.486, blk: 0.895, tpm: -0.702, fgImpact: 1.652, ftImpact: -1.044, to: -0.805 } },
          { name: "Cole Certa", min: 40, pts: 37, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 7, fgm: 12, fga: 20, ftm: 6, fta: 6, composite: 12.14, zScores: { pts: 3.93, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 4.944, fgImpact: 2.164, ftImpact: 2.275, to: 0.901 } },
          { name: "Braeden Shrewsberry", min: 40, pts: 20, reb: 1, ast: 4, stl: 1, blk: 0, to: 4, tpm: 4, fgm: 5, fga: 11, ftm: 6, fta: 6, composite: 4.4, zScores: { pts: 1.608, reb: -0.806, ast: 1.396, stl: 0.407, blk: -0.467, tpm: 2.524, fgImpact: -0.029, ftImpact: 2.275, to: -2.51 } },
          { name: "Logan Imes", min: 36, pts: 14, reb: 9, ast: 3, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 6, fga: 12, ftm: 0, fta: 0, composite: 3.19, zScores: { pts: 0.788, reb: 1.978, ast: 0.842, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: 0.384, ftImpact: 0, to: -1.657 } },
          { name: "Ryder Frost", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Garrett Sundra", min: 12, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 3, fta: 4, composite: -2.15, zScores: { pts: -0.441, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: 0.094, to: 0.901 } },
          { name: "Sir Mohammed", min: 23, pts: 2, reb: 5, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 7, ftm: 2, fta: 2, composite: -2.9, zScores: { pts: -0.851, reb: 0.586, ast: 0.842, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -2.443, ftImpact: 0.758, to: 0.048 } }
        ]
      }
    },
      {
      id: "401820739",
      line: "California Golden Bears 86 @ Boston College Eagles 75 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Cal", name: "California Golden Bears", score: 86,
        players: [
          { name: "Chris Bell", min: 34, pts: 22, reb: 2, ast: 1, stl: 1, blk: 0, to: 2, tpm: 6, fgm: 8, fga: 13, ftm: 0, fta: 0, composite: 5.99, zScores: { pts: 1.881, reb: -0.458, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 4.137, fgImpact: 1.559, ftImpact: 0, to: -0.805 } },
          { name: "John Camden", min: 35, pts: 15, reb: 9, ast: 1, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 7, ftm: 3, fta: 5, composite: 3.73, zScores: { pts: 0.925, reb: 1.978, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 2.524, fgImpact: 0.605, ftImpact: -0.95, to: 0.048 } },
          { name: "Milos Ilic", min: 24, pts: 6, reb: 2, ast: 3, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.6, zScores: { pts: -0.305, reb: -0.458, ast: 0.842, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.89, ftImpact: 0, to: -0.805 } },
          { name: "Justin Pippen", min: 22, pts: 12, reb: 3, ast: 4, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 11, ftm: 3, fta: 5, composite: 0.15, zScores: { pts: 0.515, reb: -0.11, ast: 1.396, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.791, ftImpact: -0.95, to: 0.048 } },
          { name: "Dai Dai Ames", min: 32, pts: 15, reb: 1, ast: 4, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 8, ftm: 2, fta: 2, composite: 5.22, zScores: { pts: 0.925, reb: -0.806, ast: 1.396, stl: 1.486, blk: -0.467, tpm: 0.105, fgImpact: 1.78, ftImpact: 0.758, to: 0.048 } },
          { name: "Sammie Yeanay", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Mantas Kocanas", min: 15, pts: 3, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.08, zScores: { pts: -0.715, reb: -0.11, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: 0.064, ftImpact: 0, to: 0.901 } },
          { name: "Semetri Carr", min: 20, pts: 6, reb: 1, ast: 4, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: 1.59, zScores: { pts: -0.305, reb: -0.806, ast: 1.396, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.128, ftImpact: 0.758, to: 0.901 } },
          { name: "DeJuan Campbell", min: 7, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.74, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.901 } },
          { name: "Nolan Dorsey", min: 7, pts: 7, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: 0.35, zScores: { pts: -0.168, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.826, ftImpact: 0.758, to: 0.901 } }
        ]
      },
      home: {
        abbr: "BC", name: "Boston College Eagles", score: 75,
        players: [
          { name: "Boden Kapke", min: 26, pts: 6, reb: 6, ast: 2, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 3, composite: -1.03, zScores: { pts: -0.305, reb: 0.934, ast: 0.288, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.477, ftImpact: -0.285, to: -1.657 } },
          { name: "Jayden Hastings", min: 33, pts: 12, reb: 8, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 9, ftm: 2, fta: 6, composite: -2.66, zScores: { pts: 0.515, reb: 1.63, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.669, ftImpact: -3.417, to: 0.048 } },
          { name: "Luka Toews", min: 30, pts: 12, reb: 1, ast: 5, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 1.8, zScores: { pts: 0.515, reb: -0.806, ast: 1.95, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 0.32, ftImpact: 0, to: 0.048 } },
          { name: "Chase Forte", min: 30, pts: 14, reb: 2, ast: 1, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 5, fga: 10, ftm: 1, fta: 2, composite: -1.36, zScores: { pts: 0.788, reb: -0.458, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 1.718, fgImpact: 0.32, ftImpact: -0.665, to: -1.657 } },
          { name: "Fred Payne", min: 33, pts: 16, reb: 5, ast: 2, stl: 2, blk: 0, to: 4, tpm: 2, fgm: 5, fga: 15, ftm: 4, fta: 5, composite: 0.4, zScores: { pts: 1.061, reb: 0.586, ast: 0.288, stl: 1.486, blk: -0.467, tpm: 0.911, fgImpact: -1.425, ftImpact: 0.473, to: -2.51 } },
          { name: "Jason Asemota", min: 10, pts: 7, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -1.04, zScores: { pts: -0.168, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 1.239, ftImpact: 0, to: 0.901 } },
          { name: "Marko Radunovic", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.69, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Aidan Shaw", min: 21, pts: 8, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 0.51, zScores: { pts: -0.032, reb: -0.11, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 1.303, ftImpact: 0, to: 0.901 } },
          { name: "Caleb Steger", min: 15, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -4.74, zScores: { pts: -1.124, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -1.745, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401828226",
      line: "East Carolina Pirates 85 @ Rice Owls 75 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ECU", name: "East Carolina Pirates", score: 85,
        players: [
          { name: "Luke Davis", min: 7, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 1, composite: -2.14, zScores: { pts: -0.715, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: 0.379, to: 0.901 } },
          { name: "Giovanni Emejuru", min: 36, pts: 17, reb: 7, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 6, ftm: 7, fta: 12, composite: 0.1, zScores: { pts: 1.198, reb: 1.282, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 1.716, ftImpact: -2.565, to: 0.048 } },
          { name: "Corey Caulker", min: 30, pts: 14, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 8, ftm: 2, fta: 2, composite: 2.56, zScores: { pts: 0.788, reb: -0.11, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 1.018, ftImpact: 0.758, to: 0.048 } },
          { name: "Demitri Gardner", min: 35, pts: 21, reb: 3, ast: 2, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 6, fga: 9, ftm: 6, fta: 6, composite: 6.48, zScores: { pts: 1.744, reb: -0.11, ast: 0.288, stl: 0.407, blk: -0.467, tpm: 1.718, fgImpact: 1.431, ftImpact: 2.275, to: -0.805 } },
          { name: "Jordan Riley", min: 40, pts: 22, reb: 6, ast: 4, stl: 3, blk: 2, to: 1, tpm: 3, fgm: 8, fga: 19, ftm: 3, fta: 5, composite: 9.31, zScores: { pts: 1.881, reb: 0.934, ast: 1.396, stl: 2.565, blk: 2.256, tpm: 1.718, fgImpact: -0.535, ftImpact: -0.95, to: 0.048 } },
          { name: "Vito Perkovic", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Reid Cason", min: 7, pts: 2, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.29, zScores: { pts: -0.851, reb: -0.458, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.413, ftImpact: 0, to: 0.901 } },
          { name: "Eli DeLaurier", min: 22, pts: 6, reb: 2, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -0.97, zScores: { pts: -0.305, reb: -0.458, ast: 1.396, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.192, ftImpact: 0, to: 0.048 } },
          { name: "Isaiah Mbeng", min: 19, pts: 0, reb: 3, ast: 2, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -2.48, zScores: { pts: -1.124, reb: -0.11, ast: 0.288, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -1.047, ftImpact: 0, to: -0.805 } }
        ]
      },
      home: {
        abbr: "Rice", name: "Rice Owls", score: 75,
        players: [
          { name: "Jimmy Oladokun Jr.", min: 15, pts: 2, reb: 2, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.39, zScores: { pts: -0.851, reb: -0.458, ast: 0.288, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.064, ftImpact: 0, to: 0.048 } },
          { name: "Nick Anderson", min: 30, pts: 7, reb: 6, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: 0.73, zScores: { pts: -0.168, reb: 0.934, ast: -0.819, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.919, ftImpact: 0.758, to: 0.901 } },
          { name: "Cam Carroll", min: 19, pts: 4, reb: 2, ast: 1, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: -3.43, zScores: { pts: -0.578, reb: -0.458, ast: -0.266, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: -0.983, ftImpact: -0.665, to: -0.805 } },
          { name: "Trae Broadnax", min: 36, pts: 27, reb: 4, ast: 4, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 10, fga: 20, ftm: 6, fta: 6, composite: 6.35, zScores: { pts: 2.564, reb: 0.238, ast: 1.396, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: 0.64, ftImpact: 2.275, to: -0.805 } },
          { name: "Jalen Smith", min: 34, pts: 6, reb: 2, ast: 5, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 10, ftm: 1, fta: 2, composite: 1.66, zScores: { pts: -0.305, reb: -0.458, ast: 1.95, stl: 2.565, blk: -0.467, tpm: 0.105, fgImpact: -1.966, ftImpact: -0.665, to: 0.901 } },
          { name: "Eternity Eguagie", min: 9, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.24, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.048 } },
          { name: "Andrew Akuchie", min: 20, pts: 8, reb: 8, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 2, fta: 2, composite: 3.47, zScores: { pts: -0.032, reb: 1.63, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 1.239, ftImpact: 0.758, to: 0.901 } },
          { name: "Trey Patterson", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.24, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.048 } },
          { name: "Stephen Giwa", min: 9, pts: 2, reb: 6, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -3.32, zScores: { pts: -0.851, reb: 0.934, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0.758, to: -0.805 } },
          { name: "Bodey Howell", min: 23, pts: 19, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 5, fgm: 7, fga: 16, ftm: 0, fta: 0, composite: 4.46, zScores: { pts: 1.471, reb: -0.11, ast: -0.819, stl: 0.407, blk: -0.467, tpm: 3.331, fgImpact: -0.25, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401820745",
      line: "Florida State Seminoles 92 @ Virginia Tech Hokies 69 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "FSU", name: "Florida State Seminoles", score: 92,
        players: [
          { name: "Alex Steen", min: 21, pts: 2, reb: 1, ast: 1, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.08, zScores: { pts: -0.851, reb: -0.806, ast: -0.266, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: 0.064, ftImpact: 0, to: 0.901 } },
          { name: "Thomas Bassong", min: 27, pts: 8, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 1, fta: 3, composite: -1.56, zScores: { pts: -0.032, reb: 0.238, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.89, ftImpact: -1.708, to: 0.901 } },
          { name: "Chauncey Wiggins", min: 30, pts: 19, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 7, fga: 8, ftm: 2, fta: 2, composite: 5.37, zScores: { pts: 1.471, reb: 0.238, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 1.718, fgImpact: 2.542, ftImpact: 0.758, to: 0.048 } },
          { name: "Lajae Jones", min: 32, pts: 17, reb: 7, ast: 1, stl: 0, blk: 3, to: 0, tpm: 1, fgm: 7, fga: 10, ftm: 2, fta: 2, composite: 8.77, zScores: { pts: 1.198, reb: 1.282, ast: -0.266, stl: -0.671, blk: 3.617, tpm: 0.105, fgImpact: 1.844, ftImpact: 0.758, to: 0.901 } },
          { name: "Robert McCray V", min: 28, pts: 17, reb: 2, ast: 4, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 12, ftm: 6, fta: 8, composite: -0.75, zScores: { pts: 1.198, reb: -0.458, ast: 1.396, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.378, ftImpact: 0.187, to: -1.657 } },
          { name: "AJ Swinton", min: 20, pts: 6, reb: 2, ast: 1, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 1.86, zScores: { pts: -0.305, reb: -0.458, ast: -0.266, stl: 0.407, blk: 0.895, tpm: 0.911, fgImpact: -0.221, ftImpact: 0, to: 0.901 } },
          { name: "Martin Somerville", min: 30, pts: 23, reb: 4, ast: 6, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 9, fga: 11, ftm: 1, fta: 2, composite: 10.48, zScores: { pts: 2.018, reb: 0.238, ast: 2.504, stl: 0.407, blk: -0.467, tpm: 2.524, fgImpact: 3.019, ftImpact: -0.665, to: 0.901 } },
          { name: "Kobe MaGee", min: 12, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.84, zScores: { pts: -1.124, reb: -0.458, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -1.047, ftImpact: 0, to: 0.901 } }
        ]
      },
      home: {
        abbr: "VaTec", name: "Virginia Tech Hokies", score: 69,
        players: [
          { name: "Tobi Lawal", min: 32, pts: 16, reb: 7, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 8, ftm: 3, fta: 4, composite: 1.56, zScores: { pts: 1.061, reb: 1.282, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 1.78, ftImpact: 0.094, to: -0.805 } },
          { name: "Amani Hansberry", min: 28, pts: 10, reb: 5, ast: 1, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 10, ftm: 6, fta: 6, composite: -1.32, zScores: { pts: 0.242, reb: 0.586, ast: -0.266, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -1.966, ftImpact: 2.275, to: -2.51 } },
          { name: "Neo Avdalas", min: 33, pts: 10, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 8, ftm: 1, fta: 2, composite: 0.03, zScores: { pts: 0.242, reb: -0.806, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 1.718, fgImpact: -0.506, ftImpact: -0.665, to: 0.901 } },
          { name: "Jailen Bedford", min: 28, pts: 13, reb: 2, ast: 4, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 5, fga: 13, ftm: 2, fta: 2, composite: 3.07, zScores: { pts: 0.652, reb: -0.458, ast: 1.396, stl: 0.407, blk: 0.895, tpm: 0.105, fgImpact: -0.727, ftImpact: 0.758, to: 0.048 } },
          { name: "Ben Hammond", min: 35, pts: 16, reb: 5, ast: 2, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 7, ftm: 0, fta: 1, composite: 4.45, zScores: { pts: 1.061, reb: 0.586, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 2.524, fgImpact: 2.129, ftImpact: -1.044, to: 0.048 } },
          { name: "Antonio Dorn", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.68, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Christian Gurdak", min: 17, pts: 2, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.23, zScores: { pts: -0.851, reb: -0.11, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.285, ftImpact: 0, to: 0.048 } },
          { name: "Izaiah Pasha", min: 8, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.15, zScores: { pts: -0.851, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.285, ftImpact: 0, to: 0.901 } },
          { name: "Jaden Schutt", min: 15, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.08, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -1.047, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401820744",
      line: "SMU Mustangs 78 @ Syracuse Orange 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SMU", name: "SMU Mustangs", score: 78,
        players: [
          { name: "Corey Washington", min: 25, pts: 13, reb: 9, ast: 3, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 5, fga: 13, ftm: 2, fta: 2, composite: 5.81, zScores: { pts: 0.652, reb: 1.978, ast: 0.842, stl: 0.407, blk: 0.895, tpm: 0.105, fgImpact: -0.727, ftImpact: 0.758, to: 0.901 } },
          { name: "Samet Yigitoglu", min: 19, pts: 11, reb: 4, ast: 1, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 5, ftm: 1, fta: 2, composite: -1.75, zScores: { pts: 0.378, reb: 0.238, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 2.065, ftImpact: -0.665, to: -1.657 } },
          { name: "B.J. Edwards", min: 35, pts: 10, reb: 6, ast: 3, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 9, ftm: 1, fta: 1, composite: 3.47, zScores: { pts: 0.242, reb: 0.934, ast: 0.842, stl: 1.486, blk: -0.467, tpm: 0.105, fgImpact: -0.093, ftImpact: 0.379, to: 0.048 } },
          { name: "Boopie Miller", min: 33, pts: 11, reb: 6, ast: 7, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 11, ftm: 2, fta: 2, composite: 5.28, zScores: { pts: 0.378, reb: 0.934, ast: 3.058, stl: 0.407, blk: -0.467, tpm: 1.718, fgImpact: -1.553, ftImpact: 0.758, to: 0.048 } },
          { name: "Jaron Pierre Jr.", min: 34, pts: 12, reb: 5, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 12, ftm: 2, fta: 2, composite: 2.76, zScores: { pts: 0.515, reb: 0.586, ast: 0.288, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: -1.14, ftImpact: 0.758, to: 0.901 } },
          { name: "Jaden Toombs", min: 30, pts: 19, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 7, fga: 11, ftm: 5, fta: 8, composite: 0.56, zScores: { pts: 1.471, reb: 0.586, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 1.495, ftImpact: -1.236, to: 0.901 } },
          { name: "Jermaine O'Neal Jr.", min: 14, pts: 2, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -3.39, zScores: { pts: -0.851, reb: -1.154, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.983, ftImpact: 0, to: 0.901 } },
          { name: "Sam Walters", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.89, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.048 } },
          { name: "B.J. Davis-Ray", min: 4, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.96, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } }
        ]
      },
      home: {
        abbr: "Syr", name: "Syracuse Orange", score: 79,
        players: [
          { name: "William Kyle III", min: 28, pts: 4, reb: 7, ast: 0, stl: 0, blk: 3, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: 2.65, zScores: { pts: -0.578, reb: 1.282, ast: -0.819, stl: -0.671, blk: 3.617, tpm: -0.702, fgImpact: -0.285, ftImpact: 0.758, to: 0.048 } },
          { name: "Donnie Freeman", min: 33, pts: 18, reb: 5, ast: 3, stl: 1, blk: 3, to: 1, tpm: 1, fgm: 5, fga: 11, ftm: 7, fta: 10, composite: 6.43, zScores: { pts: 1.335, reb: 0.586, ast: 0.842, stl: 0.407, blk: 3.617, tpm: 0.105, fgImpact: -0.029, ftImpact: -0.477, to: 0.048 } },
          { name: "Nate Kingz", min: 35, pts: 13, reb: 5, ast: 2, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 5, fga: 11, ftm: 0, fta: 1, composite: 2.44, zScores: { pts: 0.652, reb: 0.586, ast: 0.288, stl: -0.671, blk: 0.895, tpm: 1.718, fgImpact: -0.029, ftImpact: -1.044, to: 0.048 } },
          { name: "Naithan George", min: 37, pts: 16, reb: 4, ast: 6, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 9, ftm: 4, fta: 4, composite: 6.03, zScores: { pts: 1.061, reb: 0.238, ast: 2.504, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: 0.669, ftImpact: 1.516, to: -0.805 } },
          { name: "J.J. Starling", min: 19, pts: 4, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -3.32, zScores: { pts: -0.578, reb: -0.11, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.57, ftImpact: 0, to: 0.048 } },
          { name: "Sadiq White Jr.", min: 7, pts: 3, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.05, zScores: { pts: -0.715, reb: -0.806, ast: -0.819, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: 0.064, ftImpact: 0, to: 0.901 } },
          { name: "Tyler Betsey", min: 17, pts: 8, reb: 5, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -1.25, zScores: { pts: -0.032, reb: 0.586, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.506, ftImpact: 0, to: -0.805 } },
          { name: "Kiyan Anthony", min: 24, pts: 13, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 10, ftm: 1, fta: 1, composite: 1.3, zScores: { pts: 0.652, reb: -0.458, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 0.32, ftImpact: 0.379, to: 0.901 } }
        ]
      }
    },
      {
      id: "401804932",
      line: "Liberty Flames 73 @ UTEP Miners 64 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LIB", name: "Liberty Flames", score: 73,
        players: [

        ]
      },
      home: {
        abbr: "UTEP", name: "UTEP Miners", score: 64,
        players: [
          { name: "Jamal West Jr.", min: 25, pts: 8, reb: 5, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: 0.11, zScores: { pts: -0.032, reb: 0.586, ast: -0.266, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.506, ftImpact: 0.758, to: 0.048 } },
          { name: "Kaseem Watson", min: 34, pts: 10, reb: 7, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 10, ftm: 2, fta: 2, composite: 2.27, zScores: { pts: 0.242, reb: 1.282, ast: 0.288, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: -1.204, ftImpact: 0.758, to: 0.048 } },
          { name: "Elijah Jones", min: 33, pts: 15, reb: 8, ast: 1, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 6, fga: 12, ftm: 1, fta: 3, composite: 2.15, zScores: { pts: 0.925, reb: 1.63, ast: -0.266, stl: -0.671, blk: 0.895, tpm: 0.911, fgImpact: 0.384, ftImpact: -1.708, to: 0.048 } },
          { name: "KJ Thomas", min: 33, pts: 14, reb: 0, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 7, ftm: 0, fta: 0, composite: 1.54, zScores: { pts: 0.788, reb: -1.154, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: 2.129, ftImpact: 0, to: -0.805 } },
          { name: "Caleb Blackwell", min: 38, pts: 10, reb: 4, ast: 3, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -0.66, zScores: { pts: 0.242, reb: 0.238, ast: 0.842, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.093, ftImpact: 0, to: -1.657 } },
          { name: "Mouhamed Mbaye", min: 7, pts: 1, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -3.14, zScores: { pts: -0.988, reb: -0.806, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: -0.665, to: 0.901 } },
          { name: "Cassius Brooks", min: 16, pts: 2, reb: 3, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.93, zScores: { pts: -0.851, reb: -0.11, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: 0, to: -0.805 } },
          { name: "Trey Horton III", min: 6, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.69, zScores: { pts: -1.124, reb: -1.154, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.048 } },
          { name: "LA Hayes", min: 8, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -2.32, zScores: { pts: -0.578, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.064, ftImpact: 0.758, to: 0.901 } }
        ]
      }
    },
      {
      id: "401822944",
      line: "Villanova Wildcats 80 @ Creighton Bluejays 69 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Vill", name: "Villanova Wildcats", score: 80,
        players: [
          { name: "Matt Hodge", min: 26, pts: 7, reb: 3, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 8, ftm: 1, fta: 1, composite: -0.25, zScores: { pts: -0.168, reb: -0.11, ast: -0.266, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.506, ftImpact: 0.379, to: 0.901 } },
          { name: "Duke Brennan", min: 32, pts: 21, reb: 12, ast: 2, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 8, fga: 9, ftm: 5, fta: 8, composite: 4.35, zScores: { pts: 1.744, reb: 3.022, ast: 0.288, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 2.955, ftImpact: -1.236, to: -1.657 } },
          { name: "Tyler Perkins", min: 36, pts: 17, reb: 11, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 7, fga: 12, ftm: 2, fta: 2, composite: 5.89, zScores: { pts: 1.198, reb: 2.674, ast: -0.266, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: 1.146, ftImpact: 0.758, to: 0.048 } },
          { name: "Bryce Lindsay", min: 13, pts: 2, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.29, zScores: { pts: -0.851, reb: -1.154, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.634, ftImpact: 0, to: 0.901 } },
          { name: "Acaden Lewis", min: 35, pts: 8, reb: 3, ast: 4, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 10, ftm: 2, fta: 4, composite: -1.77, zScores: { pts: -0.032, reb: -0.11, ast: 1.396, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -1.204, ftImpact: -1.329, to: -0.805 } },
          { name: "Braden Pierce", min: 8, pts: 2, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.68, zScores: { pts: -0.851, reb: 0.238, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.064, ftImpact: 0, to: 0.901 } },
          { name: "Malachi Palmer", min: 21, pts: 10, reb: 2, ast: 0, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 3, ftm: 2, fta: 2, composite: 2.94, zScores: { pts: 0.242, reb: -0.458, ast: -0.819, stl: 1.486, blk: -0.467, tpm: 0.911, fgImpact: 1.239, ftImpact: 0.758, to: 0.048 } },
          { name: "Chris Jeffrey", min: 3, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.14, zScores: { pts: -1.124, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Devin Askew", min: 26, pts: 13, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 17, ftm: 2, fta: 2, composite: 0.91, zScores: { pts: 0.652, reb: -0.458, ast: 0.288, stl: 0.407, blk: -0.467, tpm: 1.718, fgImpact: -2.885, ftImpact: 0.758, to: 0.901 } }
        ]
      },
      home: {
        abbr: "Crei", name: "Creighton Bluejays", score: 69,
        players: [
          { name: "Jasen Green", min: 33, pts: 5, reb: 11, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 1, fta: 3, composite: -0.44, zScores: { pts: -0.441, reb: 2.674, ast: 1.396, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.57, ftImpact: -1.708, to: 0.048 } },
          { name: "Owen Freeman", min: 5, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.69, zScores: { pts: -1.124, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.901 } },
          { name: "Blake Harper", min: 14, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.56, zScores: { pts: -0.851, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.634, ftImpact: 0, to: 0.048 } },
          { name: "Nik Graves", min: 30, pts: 15, reb: 3, ast: 5, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 10, ftm: 4, fta: 5, composite: 0.87, zScores: { pts: 0.925, reb: -0.11, ast: 1.95, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.32, ftImpact: 0.473, to: -1.657 } },
          { name: "Josh Dix", min: 36, pts: 14, reb: 5, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 12, ftm: 1, fta: 1, composite: 1.99, zScores: { pts: 0.788, reb: 0.586, ast: 0.842, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.384, ftImpact: 0.379, to: 0.048 } },
          { name: "Kerem Konan", min: 7, pts: 3, reb: 1, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -0.89, zScores: { pts: -0.715, reb: -0.806, ast: -0.266, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: 0.064, ftImpact: -0.665, to: 0.901 } },
          { name: "Isaac Traudt", min: 13, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.55, zScores: { pts: -0.715, reb: -0.458, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.983, ftImpact: 0, to: 0.901 } },
          { name: "Ty Davis", min: 7, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.49, zScores: { pts: -1.124, reb: -0.458, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.901 } },
          { name: "Austin Swartz", min: 19, pts: 12, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: -1.13, zScores: { pts: 0.515, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 0.32, ftImpact: 0, to: -0.805 } },
          { name: "Hudson Greer", min: 22, pts: 8, reb: 5, ast: 0, stl: 4, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 1, composite: 2.32, zScores: { pts: -0.032, reb: 0.586, ast: -0.819, stl: 3.643, blk: -0.467, tpm: 0.911, fgImpact: -0.506, ftImpact: -1.044, to: 0.048 } },
          { name: "Fedor Zugic", min: 14, pts: 7, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -2.54, zScores: { pts: -0.168, reb: -1.154, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.89, ftImpact: 0, to: -0.805 } }
        ]
      }
    },
      {
      id: "401825516",
      line: "Penn State Nittany Lions 72 @ Oregon Ducks 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PSU", name: "Penn State Nittany Lions", score: 72,
        players: [
          { name: "Ivan Juric", min: 26, pts: 8, reb: 5, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: -2.31, zScores: { pts: -0.032, reb: 0.586, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.157, ftImpact: 0.758, to: -0.805 } },
          { name: "Josh Reed", min: 34, pts: 13, reb: 3, ast: 1, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 7, ftm: 8, fta: 10, composite: -1.31, zScores: { pts: 0.652, reb: -0.11, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.919, ftImpact: 0.945, to: -1.657 } },
          { name: "Dominick Stewart", min: 27, pts: 8, reb: 3, ast: 2, stl: 3, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 3.55, zScores: { pts: -0.032, reb: -0.11, ast: 0.288, stl: 2.565, blk: -0.467, tpm: 0.911, fgImpact: -0.506, ftImpact: 0, to: 0.901 } },
          { name: "Kayden Mingo", min: 34, pts: 24, reb: 1, ast: 2, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 9, fga: 13, ftm: 4, fta: 6, composite: 5.36, zScores: { pts: 2.154, reb: -0.806, ast: 0.288, stl: 1.486, blk: -0.467, tpm: 0.911, fgImpact: 2.321, ftImpact: -0.571, to: 0.048 } },
          { name: "Freddie Dilione V", min: 27, pts: 10, reb: 1, ast: 1, stl: 3, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 11, ftm: 2, fta: 2, composite: 1.94, zScores: { pts: 0.242, reb: -0.806, ast: -0.266, stl: 2.565, blk: 0.895, tpm: -0.702, fgImpact: -0.791, ftImpact: 0.758, to: 0.048 } },
          { name: "Sasa Ciani", min: 9, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Mason Blackwood", min: 6, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.14, zScores: { pts: -1.124, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Justin Houser", min: 1, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.34, zScores: { pts: -1.124, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Melih Tunca", min: 14, pts: 2, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.3, zScores: { pts: -0.851, reb: -0.11, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.285, ftImpact: 0, to: 0.048 } },
          { name: "Eli Rice", min: 22, pts: 7, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 4, fta: 4, composite: -1.55, zScores: { pts: -0.168, reb: 0.238, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -1.332, ftImpact: 1.516, to: 0.048 } }
        ]
      },
      home: {
        abbr: "Oreg", name: "Oregon Ducks", score: 83,
        players: [
          { name: "Sean Stewart", min: 22, pts: 3, reb: 2, ast: 1, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: 0.47, zScores: { pts: -0.715, reb: -0.458, ast: -0.266, stl: 0.407, blk: 2.256, tpm: -0.702, fgImpact: -0.285, ftImpact: -0.665, to: 0.901 } },
          { name: "Kwame Evans Jr.", min: 33, pts: 6, reb: 9, ast: 1, stl: 0, blk: 3, to: 3, tpm: 0, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: 1.83, zScores: { pts: -0.305, reb: 1.978, ast: -0.266, stl: -0.671, blk: 3.617, tpm: -0.702, fgImpact: -0.919, ftImpact: 0.758, to: -1.657 } },
          { name: "Nate Bittle", min: 34, pts: 22, reb: 7, ast: 5, stl: 0, blk: 2, to: 2, tpm: 2, fgm: 6, fga: 9, ftm: 8, fta: 11, composite: 8.14, zScores: { pts: 1.881, reb: 1.282, ast: 1.95, stl: -0.671, blk: 2.256, tpm: 0.911, fgImpact: 1.431, ftImpact: -0.098, to: -0.805 } },
          { name: "Drew Carter", min: 19, pts: 3, reb: 2, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.01, zScores: { pts: -0.715, reb: -0.458, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.285, ftImpact: 0, to: -0.805 } },
          { name: "Takai Simpkins", min: 35, pts: 22, reb: 5, ast: 2, stl: 0, blk: 0, to: 4, tpm: 4, fgm: 5, fga: 9, ftm: 8, fta: 8, composite: 5.33, zScores: { pts: 1.881, reb: 0.586, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 2.524, fgImpact: 0.669, ftImpact: 3.033, to: -2.51 } },
          { name: "Dez Lindsay", min: 27, pts: 16, reb: 1, ast: 5, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 6.88, zScores: { pts: 1.061, reb: -0.806, ast: 1.95, stl: 1.486, blk: -0.467, tpm: 2.524, fgImpact: 1.082, ftImpact: 0, to: 0.048 } },
          { name: "Wei Lin", min: 21, pts: 5, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -1.25, zScores: { pts: -0.441, reb: -0.458, ast: 0.288, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.634, ftImpact: 0.758, to: -0.805 } },
          { name: "Jamari Phillips", min: 9, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.13, zScores: { pts: -0.305, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 0.477, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401822945",
      line: "Marquette Golden Eagles 88 @ Xavier Musketeers 96 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Marq", name: "Marquette Golden Eagles", score: 88,
        players: [
          { name: "Ben Gold", min: 30, pts: 10, reb: 4, ast: 3, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 2.76, zScores: { pts: 0.242, reb: 0.238, ast: 0.842, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 1.018, ftImpact: 0, to: 0.901 } },
          { name: "Royce Parham", min: 35, pts: 24, reb: 10, ast: 2, stl: 0, blk: 2, to: 1, tpm: 2, fgm: 9, fga: 14, ftm: 4, fta: 4, composite: 10.8, zScores: { pts: 2.154, reb: 2.326, ast: 0.288, stl: -0.671, blk: 2.256, tpm: 0.911, fgImpact: 1.972, ftImpact: 1.516, to: 0.048 } },
          { name: "Adrien Stevens", min: 30, pts: 8, reb: 0, ast: 0, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -2.12, zScores: { pts: -0.032, reb: -1.154, ast: -0.819, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: -0.157, ftImpact: 0, to: -0.805 } },
          { name: "Nigel James Jr.", min: 33, pts: 30, reb: 4, ast: 12, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 13, fga: 22, ftm: 2, fta: 3, composite: 11.03, zScores: { pts: 2.974, reb: 0.238, ast: 5.827, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: 2.228, ftImpact: -0.285, to: -0.805 } },
          { name: "Chase Ross", min: 29, pts: 9, reb: 6, ast: 5, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 12, ftm: 2, fta: 4, composite: 0.13, zScores: { pts: 0.105, reb: 0.934, ast: 1.95, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: -1.902, ftImpact: -1.329, to: 0.048 } },
          { name: "Caedin Hamilton", min: 10, pts: 0, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.94, zScores: { pts: -1.124, reb: 0.238, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Michael Phillips II", min: 5, pts: 3, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.05, zScores: { pts: -0.715, reb: -1.154, ast: -0.819, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: 0.413, ftImpact: 0, to: 0.901 } },
          { name: "Damarius Owens", min: 14, pts: 2, reb: 1, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.4, zScores: { pts: -0.851, reb: -0.806, ast: -0.819, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -0.285, ftImpact: 0, to: 0.048 } },
          { name: "Tre Norman", min: 14, pts: 2, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.3, zScores: { pts: -0.851, reb: -0.11, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.285, ftImpact: 0, to: 0.048 } }
        ]
      },
      home: {
        abbr: "Xav", name: "Xavier Musketeers", score: 96,
        players: [
          { name: "Filip Borovicanin", min: 33, pts: 15, reb: 11, ast: 7, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 4, fga: 13, ftm: 4, fta: 4, composite: 8.67, zScores: { pts: 0.925, reb: 2.674, ast: 3.058, stl: -0.671, blk: 0.895, tpm: 1.718, fgImpact: -1.489, ftImpact: 1.516, to: 0.048 } },
          { name: "Jovan Milicevic", min: 32, pts: 23, reb: 5, ast: 0, stl: 1, blk: 0, to: 1, tpm: 5, fgm: 8, fga: 13, ftm: 2, fta: 2, composite: 7.42, zScores: { pts: 2.018, reb: 0.586, ast: -0.819, stl: 0.407, blk: -0.467, tpm: 3.331, fgImpact: 1.559, ftImpact: 0.758, to: 0.048 } },
          { name: "Tre Carroll", min: 28, pts: 18, reb: 7, ast: 4, stl: 1, blk: 1, to: 3, tpm: 2, fgm: 6, fga: 15, ftm: 4, fta: 4, composite: 5.42, zScores: { pts: 1.335, reb: 1.282, ast: 1.396, stl: 0.407, blk: 0.895, tpm: 0.911, fgImpact: -0.663, ftImpact: 1.516, to: -1.657 } },
          { name: "All Wright", min: 30, pts: 19, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 8, ftm: 4, fta: 5, composite: 5.76, zScores: { pts: 1.471, reb: -0.806, ast: 0.288, stl: 0.407, blk: -0.467, tpm: 1.718, fgImpact: 1.78, ftImpact: 0.473, to: 0.901 } },
          { name: "Malik Messina-Moore", min: 36, pts: 9, reb: 5, ast: 11, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 9, ftm: 3, fta: 4, composite: 6.42, zScores: { pts: 0.105, reb: 0.586, ast: 5.273, stl: 1.486, blk: -0.467, tpm: 0.911, fgImpact: -1.617, ftImpact: 0.094, to: 0.048 } },
          { name: "Anthony Robinson", min: 8, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.57, zScores: { pts: -0.988, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: -0.665, to: 0.901 } },
          { name: "Roddie Anderson", min: 13, pts: 7, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 0.32, zScores: { pts: -0.168, reb: -0.11, ast: -0.819, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: 0.192, ftImpact: 0, to: 0.901 } },
          { name: "Isaiah Walker", min: 20, pts: 4, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.09, zScores: { pts: -0.578, reb: -0.458, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.477, ftImpact: 0, to: 0.048 } }
        ]
      }
    },
      {
      id: "401808674",
      line: "UL Monroe Warhawks 84 @ Texas State Bobcats 95 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ULM", name: "UL Monroe Warhawks", score: 84,
        players: [

        ]
      },
      home: {
        abbr: "TxSt", name: "Texas State Bobcats", score: 95,
        players: [
          { name: "DJ Hall", min: 33, pts: 27, reb: 9, ast: 5, stl: 2, blk: 1, to: 3, tpm: 0, fgm: 11, fga: 17, ftm: 5, fta: 5, composite: 10.86, zScores: { pts: 2.564, reb: 1.978, ast: 1.95, stl: 1.486, blk: 0.895, tpm: -0.702, fgImpact: 2.449, ftImpact: 1.896, to: -1.657 } },
          { name: "Tay Knox", min: 12, pts: 4, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.13, zScores: { pts: -0.578, reb: -0.458, ast: 0.288, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.477, ftImpact: 0, to: 0.901 } },
          { name: "Mark Drone", min: 29, pts: 16, reb: 2, ast: 3, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 12, ftm: 0, fta: 0, composite: 1.56, zScores: { pts: 1.061, reb: -0.458, ast: 0.842, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 1.146, ftImpact: 0, to: -0.805 } },
          { name: "Kaden Gumbs", min: 26, pts: 10, reb: 1, ast: 5, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 1.31, zScores: { pts: 0.242, reb: -0.806, ast: 1.95, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 1.716, ftImpact: 0, to: 0.048 } },
          { name: "Kyndall Davis", min: 29, pts: 4, reb: 3, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.1, zScores: { pts: -0.578, reb: -0.11, ast: -0.266, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: 0.128, ftImpact: 0, to: 0.048 } },
          { name: "Robert Fields", min: 13, pts: 12, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 7, ftm: 2, fta: 4, composite: -0.62, zScores: { pts: 0.515, reb: 0.586, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 1.367, ftImpact: -1.329, to: 0.901 } },
          { name: "Makai Willis", min: 14, pts: 9, reb: 3, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 1, fta: 2, composite: 0.9, zScores: { pts: 0.105, reb: -0.11, ast: -0.819, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: 0.605, ftImpact: -0.665, to: 0.901 } },
          { name: "Franck Emmou", min: 21, pts: 5, reb: 1, ast: 4, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.49, zScores: { pts: -0.441, reb: -0.806, ast: 1.396, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.477, ftImpact: 0, to: 0.901 } },
          { name: "Jalen Bolden", min: 23, pts: 8, reb: 3, ast: 2, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 3.52, zScores: { pts: -0.032, reb: -0.11, ast: 0.288, stl: 1.486, blk: -0.467, tpm: 0.911, fgImpact: 0.541, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401808239",
      line: "Georgia Bulldogs 78 @ Oklahoma Sooners 94 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UGA", name: "Georgia Bulldogs", score: 78,
        players: [
          { name: "Kanon Catchings", min: 13, pts: 3, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 2, composite: -5.79, zScores: { pts: -0.715, reb: -0.806, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.634, ftImpact: -2.087, to: -0.805 } },
          { name: "Kareem Stagg", min: 27, pts: 10, reb: 4, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 2.16, zScores: { pts: 0.242, reb: 0.238, ast: -0.266, stl: -0.671, blk: 0.895, tpm: 0.911, fgImpact: -0.093, ftImpact: 0, to: 0.901 } },
          { name: "Somto Cyril", min: 21, pts: 9, reb: 4, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 4, ftm: 1, fta: 3, composite: -0.96, zScores: { pts: 0.105, reb: 0.238, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 1.652, ftImpact: -1.708, to: 0.048 } },
          { name: "Marcus Millender", min: 31, pts: 16, reb: 4, ast: 5, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 12, ftm: 4, fta: 4, composite: 5.51, zScores: { pts: 1.061, reb: 0.238, ast: 1.95, stl: 1.486, blk: -0.467, tpm: 0.911, fgImpact: -0.378, ftImpact: 1.516, to: -0.805 } },
          { name: "Blue Cain", min: 34, pts: 20, reb: 5, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 9, fga: 15, ftm: 0, fta: 0, composite: 5.33, zScores: { pts: 1.608, reb: 0.586, ast: 0.842, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 1.623, ftImpact: 0, to: 0.901 } },
          { name: "Justin Abson", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Jake Wilkins", min: 11, pts: 2, reb: 1, ast: 0, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.6, zScores: { pts: -0.851, reb: -0.806, ast: -0.819, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -0.634, ftImpact: 0, to: -0.805 } },
          { name: "Dylan James", min: 18, pts: 7, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 1, fta: 1, composite: 0.25, zScores: { pts: -0.168, reb: -0.806, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 1.239, ftImpact: 0.379, to: 0.901 } },
          { name: "Justin Bailey", min: 18, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.71, zScores: { pts: -0.715, reb: -0.458, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.285, ftImpact: 0, to: 0.048 } },
          { name: "Jordan Ross", min: 26, pts: 8, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 4, fta: 4, composite: -0.35, zScores: { pts: -0.032, reb: -0.458, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.128, ftImpact: 1.516, to: 0.048 } }
        ]
      },
      home: {
        abbr: "Okla", name: "Oklahoma Sooners", score: 94,
        players: [
          { name: "Mohamed Wague", min: 16, pts: 5, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: -0.44, zScores: { pts: -0.441, reb: 0.238, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.826, ftImpact: -0.665, to: 0.901 } },
          { name: "Tae Davis", min: 34, pts: 19, reb: 5, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 7, fga: 10, ftm: 5, fta: 7, composite: 1.91, zScores: { pts: 1.471, reb: 0.586, ast: 0.842, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 1.844, ftImpact: -0.192, to: -0.805 } },
          { name: "Derrion Reid", min: 20, pts: 3, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 1, fta: 2, composite: -3.47, zScores: { pts: -0.715, reb: -0.11, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -1.332, ftImpact: -0.665, to: 0.901 } },
          { name: "Xzayvier Brown", min: 30, pts: 5, reb: 1, ast: 3, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 8, ftm: 1, fta: 2, composite: -1.75, zScores: { pts: -0.441, reb: -0.806, ast: 0.842, stl: 2.565, blk: -0.467, tpm: -0.702, fgImpact: -1.268, ftImpact: -0.665, to: -0.805 } },
          { name: "Nijel Pack", min: 31, pts: 18, reb: 6, ast: 3, stl: 1, blk: 1, to: 1, tpm: 4, fgm: 6, fga: 10, ftm: 2, fta: 2, composite: 8.82, zScores: { pts: 1.335, reb: 0.934, ast: 0.842, stl: 0.407, blk: 0.895, tpm: 2.524, fgImpact: 1.082, ftImpact: 0.758, to: 0.048 } },
          { name: "Kuol Atak", min: 17, pts: 18, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 6, fgm: 6, fga: 7, ftm: 0, fta: 0, composite: 4.03, zScores: { pts: 1.335, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 4.137, fgImpact: 2.129, ftImpact: 0, to: -0.805 } },
          { name: "Kirill Elatontsev", min: 18, pts: 7, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -0.34, zScores: { pts: -0.168, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 1.239, ftImpact: 0, to: 0.901 } },
          { name: "Dayton Forsythe", min: 20, pts: 13, reb: 3, ast: 3, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 6, ftm: 4, fta: 4, composite: 5.88, zScores: { pts: 0.652, reb: -0.11, ast: 0.842, stl: 1.486, blk: -0.467, tpm: 0.105, fgImpact: 0.954, ftImpact: 1.516, to: 0.901 } },
          { name: "Jadon Jones", min: 14, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 3, composite: -4.61, zScores: { pts: -0.305, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 0.128, ftImpact: -3.131, to: 0.901 } }
        ]
      }
    },
      {
      id: "401830826",
      line: "Wyoming Cowboys 68 @ Colorado State Rams 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Wyo", name: "Wyoming Cowboys", score: 68,
        players: [
          { name: "Simm-Marten Saadi", min: 13, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.61, zScores: { pts: -0.715, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.285, ftImpact: 0, to: 0.048 } },
          { name: "Nasir Meyer", min: 22, pts: 12, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 1.89, zScores: { pts: 0.515, reb: -0.806, ast: 0.842, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.093, ftImpact: 0.758, to: 0.901 } },
          { name: "Damarion Dennis", min: 34, pts: 21, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 9, fga: 14, ftm: 2, fta: 2, composite: 4.54, zScores: { pts: 1.744, reb: 0.238, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: 1.972, ftImpact: 0.758, to: 0.048 } },
          { name: "Khaden Bennett", min: 39, pts: 13, reb: 9, ast: 3, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 14, ftm: 0, fta: 0, composite: 3.88, zScores: { pts: 0.652, reb: 1.978, ast: 0.842, stl: -0.671, blk: -0.467, tpm: 1.718, fgImpact: -1.076, ftImpact: 0, to: 0.901 } },
          { name: "Leland Walker", min: 36, pts: 11, reb: 2, ast: 3, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 14, ftm: 1, fta: 2, composite: -3.4, zScores: { pts: 0.378, reb: -0.458, ast: 0.842, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -1.076, ftImpact: -0.665, to: -1.657 } },
          { name: "Kiani Saxon", min: 21, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.49, zScores: { pts: -1.124, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Abou Magassa", min: 8, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 2, composite: -4.74, zScores: { pts: -0.851, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.064, ftImpact: -2.087, to: 0.901 } },
          { name: "Uriyah Rojas", min: 10, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Adam Harakow", min: 17, pts: 6, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -1.45, zScores: { pts: -0.305, reb: -0.806, ast: -0.819, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: -1.268, ftImpact: 0, to: 0.901 } }
        ]
      },
      home: {
        abbr: "ColSt", name: "Colorado State Rams", score: 79,
        players: [
          { name: "Kyle Jorgensen", min: 26, pts: 11, reb: 2, ast: 2, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 1.1, zScores: { pts: 0.378, reb: -0.458, ast: 0.288, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: 1.367, ftImpact: 0, to: -0.805 } },
          { name: "Carey Booth", min: 24, pts: 6, reb: 4, ast: 0, stl: 0, blk: 6, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: 6.61, zScores: { pts: -0.305, reb: 0.238, ast: -0.819, stl: -0.671, blk: 7.701, tpm: 0.105, fgImpact: 0.128, ftImpact: -0.665, to: 0.901 } },
          { name: "Josh Pascarelli", min: 8, pts: 3, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -0.5, zScores: { pts: -0.715, reb: -0.458, ast: -0.266, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: -0.285, ftImpact: 0, to: 0.901 } },
          { name: "Jase Butler", min: 30, pts: 18, reb: 3, ast: 6, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 4, ftm: 11, fta: 12, composite: 9.99, zScores: { pts: 1.335, reb: -0.11, ast: 2.504, stl: 2.565, blk: -0.467, tpm: 0.105, fgImpact: 0.89, ftImpact: 3.126, to: 0.048 } },
          { name: "Brandon Rechsteiner", min: 32, pts: 11, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 0.49, zScores: { pts: 0.378, reb: -0.11, ast: -0.819, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: -0.093, ftImpact: 0.758, to: 0.048 } },
          { name: "Augustinas Kiudulas", min: 12, pts: 1, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -4.87, zScores: { pts: -0.988, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: -0.665, to: 0.048 } },
          { name: "Rashaan Mbemba", min: 18, pts: 14, reb: 8, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 3, ftm: 8, fta: 10, composite: 1.36, zScores: { pts: 0.788, reb: 1.63, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 1.239, ftImpact: 0.945, to: -1.657 } },
          { name: "Jojo McIver", min: 14, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.9, zScores: { pts: -1.124, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: -1.657 } },
          { name: "Jevin Muniz", min: 36, pts: 15, reb: 5, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 6, fga: 8, ftm: 2, fta: 2, composite: 4.76, zScores: { pts: 0.925, reb: 0.586, ast: 0.842, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 1.78, ftImpact: 0.758, to: 0.901 } }
        ]
      }
    },
      {
      id: "401828426",
      line: "Duquesne Dukes 78 @ St. Bonaventure Bonnies 73 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Duques", name: "Duquesne Dukes", score: 78,
        players: [
          { name: "Jakub Necas", min: 22, pts: 2, reb: 7, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -1.36, zScores: { pts: -0.851, reb: 1.282, ast: -0.819, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -1.332, ftImpact: 0, to: 0.048 } },
          { name: "David Dixon", min: 23, pts: 9, reb: 4, ast: 0, stl: 3, blk: 2, to: 1, tpm: 0, fgm: 4, fga: 4, ftm: 1, fta: 2, composite: 4.68, zScores: { pts: 0.105, reb: 0.238, ast: -0.819, stl: 2.565, blk: 2.256, tpm: -0.702, fgImpact: 1.652, ftImpact: -0.665, to: 0.048 } },
          { name: "Tarence Guinyard", min: 32, pts: 18, reb: 3, ast: 3, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 6, fga: 17, ftm: 3, fta: 3, composite: 1.62, zScores: { pts: 1.335, reb: -0.11, ast: 0.842, stl: -0.671, blk: -0.467, tpm: 1.718, fgImpact: -1.361, ftImpact: 1.137, to: -0.805 } },
          { name: "Jimmie Williams", min: 33, pts: 19, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 7, fga: 11, ftm: 2, fta: 5, composite: 3.38, zScores: { pts: 1.471, reb: 0.238, ast: 0.842, stl: 0.407, blk: -0.467, tpm: 1.718, fgImpact: 1.495, ftImpact: -2.373, to: 0.048 } },
          { name: "Brandon Hall", min: 28, pts: 6, reb: 0, ast: 4, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: 0.66, zScores: { pts: -0.305, reb: -1.154, ast: 1.396, stl: 0.407, blk: 0.895, tpm: 0.105, fgImpact: -0.919, ftImpact: -0.665, to: 0.901 } },
          { name: "Alex Williams", min: 23, pts: 12, reb: 6, ast: 0, stl: 1, blk: 2, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 4, fta: 4, composite: 6.11, zScores: { pts: 0.515, reb: 0.934, ast: -0.819, stl: 0.407, blk: 2.256, tpm: 0.911, fgImpact: -0.506, ftImpact: 1.516, to: 0.901 } },
          { name: "John Hugley IV", min: 7, pts: 2, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.42, zScores: { pts: -0.851, reb: -0.806, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.634, ftImpact: 0, to: 0.901 } },
          { name: "Stef van Bussel", min: 5, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.19, zScores: { pts: -1.124, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Jake DiMichele", min: 16, pts: 7, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.48, zScores: { pts: -0.168, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.89, ftImpact: 0, to: 0.901 } },
          { name: "Cam Crawford", min: 11, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.2, zScores: { pts: -0.715, reb: -1.154, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.064, ftImpact: 0, to: 0.901 } }
        ]
      },
      home: {
        abbr: "StBon", name: "St. Bonaventure Bonnies", score: 73,
        players: [
          { name: "Daniel Egbuniwe", min: 22, pts: 0, reb: 2, ast: 2, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.124, reb: -0.458, ast: 0.288, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: -1.657 } },
          { name: "Frank Mitchell", min: 35, pts: 20, reb: 13, ast: 4, stl: 1, blk: 1, to: 4, tpm: 0, fgm: 9, fga: 15, ftm: 2, fta: 3, composite: 5.8, zScores: { pts: 1.608, reb: 3.37, ast: 1.396, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: 1.623, ftImpact: -0.285, to: -2.51 } },
          { name: "Cayden Charles", min: 33, pts: 16, reb: 7, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 6, fga: 11, ftm: 4, fta: 6, composite: 2.08, zScores: { pts: 1.061, reb: 1.282, ast: 0.288, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.733, ftImpact: -0.571, to: 0.048 } },
          { name: "Darryl Simmons II", min: 37, pts: 11, reb: 5, ast: 2, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 12, ftm: 1, fta: 2, composite: -2.44, zScores: { pts: 0.378, reb: 0.586, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -1.14, ftImpact: -0.665, to: -1.657 } },
          { name: "Dasonte Bowen", min: 37, pts: 18, reb: 2, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 8, ftm: 8, fta: 8, composite: 2.57, zScores: { pts: 1.335, reb: -0.458, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 1.018, ftImpact: 3.033, to: -0.805 } },
          { name: "Andrew Osasuyi", min: 14, pts: 5, reb: 4, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 3, composite: -0.7, zScores: { pts: -0.441, reb: 0.238, ast: -0.266, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: 0.826, ftImpact: -1.708, to: 0.048 } },
          { name: "Joe Grahovac", min: 16, pts: 3, reb: 3, ast: 0, stl: 0, blk: 3, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 1.67, zScores: { pts: -0.715, reb: -0.11, ast: -0.819, stl: -0.671, blk: 3.617, tpm: 0.105, fgImpact: -0.634, ftImpact: 0, to: 0.901 } },
          { name: "Achille Lonati", min: 6, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.49, zScores: { pts: -1.124, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401820746",
      line: "Stanford Cardinal 63 @ Wake Forest Demon Deacons 68 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Stan", name: "Stanford Cardinal", score: 63,
        players: [
          { name: "Donavin Young", min: 10, pts: 0, reb: 2, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.98, zScores: { pts: -1.124, reb: -0.458, ast: -0.266, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.048 } },
          { name: "AJ Rohosy", min: 22, pts: 5, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 3, composite: -3.49, zScores: { pts: -0.441, reb: -0.11, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.826, ftImpact: -1.708, to: 0.048 } },
          { name: "Ebuka Okorie", min: 38, pts: 26, reb: 0, ast: 2, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 10, fga: 21, ftm: 3, fta: 4, composite: 2.8, zScores: { pts: 2.427, reb: -1.154, ast: 0.288, stl: 0.407, blk: -0.467, tpm: 1.718, fgImpact: 0.291, ftImpact: 0.094, to: -0.805 } },
          { name: "Benny Gealer", min: 35, pts: 11, reb: 1, ast: 2, stl: 3, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 4.13, zScores: { pts: 0.378, reb: -0.806, ast: 0.288, stl: 2.565, blk: -0.467, tpm: 1.718, fgImpact: -0.442, ftImpact: 0, to: 0.901 } },
          { name: "Ryan Agarwal", min: 14, pts: 0, reb: 5, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.7, zScores: { pts: -1.124, reb: 0.586, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: -0.805 } },
          { name: "Aidan Cammann", min: 33, pts: 10, reb: 11, ast: 2, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 5, fta: 6, composite: 5.29, zScores: { pts: 0.242, reb: 2.674, ast: 0.288, stl: 0.407, blk: 0.895, tpm: 0.105, fgImpact: -0.221, ftImpact: 0.852, to: 0.048 } },
          { name: "Jaylen Thompson", min: 17, pts: 3, reb: 0, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.9, zScores: { pts: -0.715, reb: -1.154, ast: -0.819, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: 0.413, ftImpact: 0, to: 0.048 } },
          { name: "Oskar Giltay", min: 15, pts: 2, reb: 3, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 1, composite: -2.11, zScores: { pts: -0.851, reb: -0.11, ast: -0.819, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: 0.064, ftImpact: -1.044, to: 0.048 } },
          { name: "Jeremy Dent-Smith", min: 16, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -2.68, zScores: { pts: -0.305, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.919, ftImpact: 0, to: 0.048 } }
        ]
      },
      home: {
        abbr: "Wake", name: "Wake Forest Demon Deacons", score: 68,
        players: [
          { name: "Tre'Von Spillers", min: 25, pts: 9, reb: 6, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 5, fta: 6, composite: 0.99, zScores: { pts: 0.105, reb: 0.934, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.221, ftImpact: 0.852, to: 0.901 } },
          { name: "Cooper Schwieger", min: 25, pts: 4, reb: 2, ast: 2, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: 1.73, zScores: { pts: -0.578, reb: -0.458, ast: 0.288, stl: 0.407, blk: 2.256, tpm: -0.702, fgImpact: -0.285, ftImpact: 0.758, to: 0.048 } },
          { name: "Sebastian Akins", min: 9, pts: 2, reb: 1, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.48, zScores: { pts: -0.851, reb: -0.806, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: 0, to: -1.657 } },
          { name: "Juke Harris", min: 40, pts: 25, reb: 7, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 15, ftm: 12, fta: 13, composite: 5.16, zScores: { pts: 2.291, reb: 1.282, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.663, ftImpact: 3.506, to: 0.048 } },
          { name: "Myles Colvin", min: 14, pts: 7, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 5, fta: 5, composite: -2.67, zScores: { pts: -0.168, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.983, ftImpact: 1.896, to: 0.048 } },
          { name: "Omaha Biliew", min: 25, pts: 5, reb: 0, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 4, composite: -4.17, zScores: { pts: -0.441, reb: -1.154, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.285, ftImpact: 0.094, to: -0.805 } },
          { name: "Marqus Marion", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Isaac Carr", min: 31, pts: 6, reb: 4, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: 0.45, zScores: { pts: -0.305, reb: 0.238, ast: 0.842, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.477, ftImpact: -0.665, to: 0.901 } },
          { name: "Mekhi Mason", min: 27, pts: 10, reb: 2, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: -0.18, zScores: { pts: 0.242, reb: -0.458, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: 0.256, ftImpact: 0, to: -0.805 } }
        ]
      }
    },
      {
      id: "401820741",
      line: "Miami Hurricanes 77 @ NC State Wolfpack 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Mia-FL", name: "Miami Hurricanes", score: 77,
        players: [
          { name: "Malik Reneau", min: 36, pts: 26, reb: 6, ast: 1, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 12, fga: 19, ftm: 1, fta: 2, composite: 4.69, zScores: { pts: 2.427, reb: 0.934, ast: -0.266, stl: 0.407, blk: 0.895, tpm: 0.105, fgImpact: 2.513, ftImpact: -0.665, to: -1.657 } },
          { name: "Shelton Henderson", min: 35, pts: 17, reb: 9, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 8, fga: 13, ftm: 1, fta: 4, composite: 2.08, zScores: { pts: 1.198, reb: 1.978, ast: -0.266, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: 1.559, ftImpact: -2.752, to: 0.048 } },
          { name: "Ernest Udeh Jr.", min: 30, pts: 1, reb: 8, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 4, composite: -2.08, zScores: { pts: -0.988, reb: 1.63, ast: -0.266, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: -0.349, ftImpact: -2.752, to: 0.048 } },
          { name: "Dante Allen", min: 22, pts: 6, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 2, composite: -2.44, zScores: { pts: -0.305, reb: -0.458, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.541, ftImpact: -2.087, to: 0.901 } },
          { name: "Tre Donaldson", min: 39, pts: 14, reb: 5, ast: 4, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 17, ftm: 4, fta: 5, composite: -0.22, zScores: { pts: 0.788, reb: 0.586, ast: 1.396, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -2.123, ftImpact: 0.473, to: -1.657 } },
          { name: "Timo Malovec", min: 13, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.901 } },
          { name: "Salih Altuntas", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Noam Dovrat", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Tru Washington", min: 20, pts: 13, reb: 6, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 10, ftm: 3, fta: 3, composite: 1.28, zScores: { pts: 0.652, reb: 0.934, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.442, ftImpact: 1.137, to: 0.048 } }
        ]
      },
      home: {
        abbr: "NCSU", name: "NC State Wolfpack", score: 76,
        players: [
          { name: "Darrion Williams", min: 33, pts: 11, reb: 3, ast: 3, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: 0.48, zScores: { pts: 0.378, reb: -0.11, ast: 0.842, stl: 0.407, blk: 0.895, tpm: 0.105, fgImpact: -0.378, ftImpact: 0, to: -1.657 } },
          { name: "Ven-Allen Lubin", min: 32, pts: 17, reb: 9, ast: 0, stl: 0, blk: 4, to: 1, tpm: 0, fgm: 7, fga: 9, ftm: 3, fta: 4, composite: 8.3, zScores: { pts: 1.198, reb: 1.978, ast: -0.819, stl: -0.671, blk: 4.979, tpm: -0.702, fgImpact: 2.193, ftImpact: 0.094, to: 0.048 } },
          { name: "Tre Holloman", min: 33, pts: 2, reb: 1, ast: 4, stl: 4, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 5, ftm: 2, fta: 2, composite: 1.27, zScores: { pts: -0.851, reb: -0.806, ast: 1.396, stl: 3.643, blk: -0.467, tpm: -0.702, fgImpact: -1.745, ftImpact: 0.758, to: 0.048 } },
          { name: "Paul McNeil Jr.", min: 31, pts: 14, reb: 4, ast: 0, stl: 0, blk: 2, to: 1, tpm: 4, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 5.38, zScores: { pts: 0.788, reb: 0.238, ast: -0.819, stl: -0.671, blk: 2.256, tpm: 2.524, fgImpact: 1.018, ftImpact: 0, to: 0.048 } },
          { name: "Quadir Copeland", min: 26, pts: 11, reb: 3, ast: 5, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 10, ftm: 4, fta: 5, composite: 0.73, zScores: { pts: 0.378, reb: -0.11, ast: 1.95, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -1.204, ftImpact: 0.473, to: -0.805 } },
          { name: "Musa Sagnia", min: 9, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.85, zScores: { pts: -1.124, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Matt Able", min: 22, pts: 17, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 6, fga: 10, ftm: 2, fta: 2, composite: 4.25, zScores: { pts: 1.198, reb: -0.806, ast: -0.819, stl: -0.671, blk: 0.895, tpm: 1.718, fgImpact: 1.082, ftImpact: 0.758, to: 0.901 } },
          { name: "Terrance Arceneaux", min: 14, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -2.13, zScores: { pts: -0.578, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: 0.758, to: 0.048 } }
        ]
      }
    },
      {
      id: "401829246",
      line: "Loyola Marymount Lions 89 @ Pepperdine Waves 90 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LoyMa", name: "Loyola Marymount Lions", score: 89,
        players: [
          { name: "Rokas Jocius", min: 24, pts: 7, reb: 11, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 0.97, zScores: { pts: -0.168, reb: 2.674, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.506, ftImpact: 0, to: -0.805 } },
          { name: "Aaron McBride", min: 25, pts: 7, reb: 2, ast: 0, stl: 3, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 4, composite: -2.21, zScores: { pts: -0.168, reb: -0.458, ast: -0.819, stl: 2.565, blk: 0.895, tpm: -0.702, fgImpact: 0.89, ftImpact: -2.752, to: -1.657 } },
          { name: "Jan Vide", min: 35, pts: 17, reb: 4, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 8, fga: 14, ftm: 0, fta: 0, composite: 3.61, zScores: { pts: 1.198, reb: 0.238, ast: 1.95, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 1.21, ftImpact: 0, to: 0.048 } },
          { name: "Rodney Brown", min: 30, pts: 12, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 11, ftm: 3, fta: 4, composite: -0.26, zScores: { pts: 0.515, reb: -0.458, ast: 0.288, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.791, ftImpact: 0.094, to: 0.048 } },
          { name: "Myron Amey Jr.", min: 35, pts: 25, reb: 4, ast: 2, stl: 3, blk: 0, to: 0, tpm: 3, fgm: 9, fga: 16, ftm: 4, fta: 7, composite: 7.19, zScores: { pts: 2.291, reb: 0.238, ast: 0.288, stl: 2.565, blk: -0.467, tpm: 1.718, fgImpact: 1.274, ftImpact: -1.615, to: 0.901 } },
          { name: "Josh Dalton", min: 25, pts: 15, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 6, ftm: 3, fta: 3, composite: 5.07, zScores: { pts: 0.925, reb: 0.586, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 2.524, fgImpact: 0.954, ftImpact: 1.137, to: 0.901 } },
          { name: "Jael Martin", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "AJ Thomas", min: 12, pts: 2, reb: 2, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.34, zScores: { pts: -0.851, reb: -0.458, ast: 0.842, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.064, ftImpact: 0, to: 0.901 } },
          { name: "Nakyel Shelton", min: 13, pts: 4, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -2.46, zScores: { pts: -0.578, reb: -1.154, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.285, ftImpact: 0.758, to: 0.901 } }
        ]
      },
      home: {
        abbr: "Pepp", name: "Pepperdine Waves", score: 90,
        players: [
          { name: "Yonatan Levy", min: 16, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -1.77, zScores: { pts: -0.578, reb: -0.458, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.285, ftImpact: 0.758, to: 0.901 } },
          { name: "Danilo Dozic", min: 34, pts: 16, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 12, ftm: 1, fta: 2, composite: 1.24, zScores: { pts: 1.061, reb: -0.458, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 1.718, fgImpact: 0.384, ftImpact: -0.665, to: 0.048 } },
          { name: "Styles Phipps", min: 36, pts: 11, reb: 6, ast: 7, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 10, ftm: 1, fta: 1, composite: 1.57, zScores: { pts: 0.378, reb: 0.934, ast: 3.058, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.32, ftImpact: 0.379, to: -1.657 } },
          { name: "Aaron Clark", min: 34, pts: 33, reb: 7, ast: 1, stl: 1, blk: 0, to: 2, tpm: 5, fgm: 9, fga: 17, ftm: 10, fta: 12, composite: 9.49, zScores: { pts: 3.384, reb: 1.282, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 3.331, fgImpact: 0.925, ftImpact: 1.704, to: -0.805 } },
          { name: "Javon Cooley", min: 33, pts: 11, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 6, ftm: 1, fta: 2, composite: 2.3, zScores: { pts: 0.378, reb: -0.11, ast: 0.842, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: 0.954, ftImpact: -0.665, to: 0.048 } },
          { name: "Pavle Stosic", min: 10, pts: 2, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.71, zScores: { pts: -0.851, reb: 0.934, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: 0, to: 0.901 } },
          { name: "Stefan Cicic", min: 22, pts: 13, reb: 6, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 6, ftm: 3, fta: 6, composite: 1.16, zScores: { pts: 0.652, reb: 0.934, ast: 0.288, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 1.716, ftImpact: -1.994, to: 0.048 } },
          { name: "Luka Vudragovic", min: 11, pts: 0, reb: 0, ast: 2, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.17, zScores: { pts: -1.124, reb: -1.154, ast: 0.288, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -1.047, ftImpact: 0, to: -1.657 } },
          { name: "David Mager", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401823802",
      line: "Grand Canyon Lopes 94 @ San José State Spartans 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "GrCan", name: "Grand Canyon Lopes", score: 94,
        players: [
          { name: "Nana Owusu-Anane", min: 38, pts: 5, reb: 6, ast: 3, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 3.14, zScores: { pts: -0.441, reb: 0.934, ast: 0.842, stl: 1.486, blk: 0.895, tpm: 0.105, fgImpact: 0.128, ftImpact: 0, to: -0.805 } },
          { name: "Efe Demirel", min: 19, pts: 15, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 7, ftm: 5, fta: 5, composite: 0.96, zScores: { pts: 0.925, reb: 0.238, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 1.367, ftImpact: 1.896, to: -0.805 } },
          { name: "Makaih Williams", min: 30, pts: 14, reb: 8, ast: 6, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 10, ftm: 1, fta: 1, composite: 6.48, zScores: { pts: 0.788, reb: 1.63, ast: 2.504, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: 1.082, ftImpact: 0.379, to: 0.048 } },
          { name: "Brian Moore Jr.", min: 26, pts: 12, reb: 3, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 7, ftm: 2, fta: 4, composite: -0.55, zScores: { pts: 0.515, reb: -0.11, ast: 0.288, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 1.367, ftImpact: -1.329, to: -0.805 } },
          { name: "Jaden Henley", min: 36, pts: 24, reb: 5, ast: 8, stl: 1, blk: 0, to: 4, tpm: 2, fgm: 9, fga: 13, ftm: 4, fta: 4, composite: 8.53, zScores: { pts: 2.154, reb: 0.586, ast: 3.611, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: 2.321, ftImpact: 1.516, to: -2.51 } },
          { name: "Kaleb Smith", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Wilhelm Breidenbach", min: 16, pts: 6, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -1.58, zScores: { pts: -0.305, reb: -0.458, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 1.239, ftImpact: 0, to: 0.048 } },
          { name: "Dennis Evans", min: 5, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.67, zScores: { pts: -0.578, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.826, ftImpact: 0, to: 0.901 } },
          { name: "Evan Boisdur", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.59, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.048 } },
          { name: "Dusty Stromer", min: 25, pts: 14, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 10, ftm: 4, fta: 5, composite: 0.91, zScores: { pts: 0.788, reb: 0.238, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.442, ftImpact: 0.473, to: 0.901 } }
        ]
      },
      home: {
        abbr: "SJSU", name: "San José State Spartans", score: 79,
        players: [
          { name: "Adrian Myers", min: 36, pts: 13, reb: 4, ast: 0, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 6, ftm: 2, fta: 2, composite: 4.57, zScores: { pts: 0.652, reb: 0.238, ast: -0.819, stl: 1.486, blk: -0.467, tpm: 1.718, fgImpact: 0.954, ftImpact: 0.758, to: 0.048 } },
          { name: "Sadraque NgaNga", min: 29, pts: 14, reb: 1, ast: 1, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 7, fta: 7, composite: 3.32, zScores: { pts: 0.788, reb: -0.806, ast: -0.266, stl: 0.407, blk: 0.895, tpm: 0.105, fgImpact: -0.506, ftImpact: 2.654, to: 0.048 } },
          { name: "Colby Garland", min: 40, pts: 23, reb: 1, ast: 7, stl: 2, blk: 0, to: 3, tpm: 2, fgm: 9, fga: 16, ftm: 3, fta: 4, composite: 5.91, zScores: { pts: 2.018, reb: -0.806, ast: 3.058, stl: 1.486, blk: -0.467, tpm: 0.911, fgImpact: 1.274, ftImpact: 0.094, to: -1.657 } },
          { name: "Pasha Goodarzi", min: 38, pts: 15, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 11, ftm: 1, fta: 2, composite: 3.04, zScores: { pts: 0.925, reb: 0.238, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 2.524, fgImpact: -0.029, ftImpact: -0.665, to: 0.901 } },
          { name: "Melvin Bell Jr.", min: 39, pts: 9, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 3, fta: 4, composite: -1.05, zScores: { pts: 0.105, reb: -0.11, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.157, ftImpact: 0.094, to: 0.048 } },
          { name: "Japhet Moupadele", min: 18, pts: 5, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 4, composite: -0.66, zScores: { pts: -0.441, reb: -0.458, ast: 0.288, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.285, ftImpact: 0.094, to: 0.901 } }
        ]
      }
    },
      {
      id: "401820570",
      line: "Air Force Falcons 63 @ Fresno State Bulldogs 93 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "AF", name: "Air Force Falcons", score: 63,
        players: [
          { name: "Lucas Hobin", min: 30, pts: 26, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 5, fgm: 8, fga: 14, ftm: 5, fta: 5, composite: 7.35, zScores: { pts: 2.427, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 3.331, fgImpact: 1.21, ftImpact: 1.896, to: 0.901 } },
          { name: "Eli Robinson", min: 19, pts: 0, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -3.38, zScores: { pts: -1.124, reb: -0.458, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -1.396, ftImpact: 0, to: 0.901 } },
          { name: "Wesley Celichowski", min: 14, pts: 2, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.88, zScores: { pts: -0.851, reb: -0.458, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: 0, to: 0.048 } },
          { name: "Ethan Greenberg", min: 27, pts: 8, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: -1.65, zScores: { pts: -0.032, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.57, ftImpact: 0.758, to: 0.048 } },
          { name: "Kam Sanders", min: 30, pts: 10, reb: 5, ast: 11, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 2, fga: 8, ftm: 5, fta: 6, composite: 3.22, zScores: { pts: 0.242, reb: 0.586, ast: 5.273, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -1.268, ftImpact: 0.852, to: -2.51 } },
          { name: "Sam Imade", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Brendan Martin", min: 7, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.74, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.901 } },
          { name: "Riley Dering", min: 23, pts: 13, reb: 5, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 0.01, zScores: { pts: 0.652, reb: 0.586, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 1.431, ftImpact: 0, to: -0.805 } },
          { name: "Caleb Walker", min: 18, pts: 4, reb: 8, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 2, composite: -4.88, zScores: { pts: -0.578, reb: 1.63, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.477, ftImpact: -2.087, to: -1.657 } },
          { name: "Kolby Gilles", min: 10, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.03, zScores: { pts: -1.124, reb: -1.154, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.048 } },
          { name: "Josh Gatete", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.89, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Justin Hinds", min: 6, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.66, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.901 } },
          { name: "Elliott Taite", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "A.J. Patterson", min: 10, pts: 0, reb: 1, ast: 1, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.74, zScores: { pts: -1.124, reb: -0.806, ast: -0.266, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: -2.51 } }
        ]
      },
      home: {
        abbr: "Fres", name: "Fresno State Bulldogs", score: 93,
        players: [
          { name: "DeShawn Gory", min: 28, pts: 18, reb: 4, ast: 4, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 8, fga: 16, ftm: 2, fta: 2, composite: 6.19, zScores: { pts: 1.335, reb: 0.238, ast: 1.396, stl: 2.565, blk: 0.895, tpm: -0.702, fgImpact: 0.512, ftImpact: 0.758, to: -0.805 } },
          { name: "Wilson Jacques", min: 28, pts: 18, reb: 9, ast: 0, stl: 2, blk: 2, to: 0, tpm: 0, fgm: 6, fga: 6, ftm: 6, fta: 9, composite: 8.05, zScores: { pts: 1.335, reb: 1.978, ast: -0.819, stl: 1.486, blk: 2.256, tpm: -0.702, fgImpact: 2.478, ftImpact: -0.856, to: 0.901 } },
          { name: "Gasper Kocevar", min: 19, pts: 2, reb: 1, ast: 2, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 4, composite: -2.9, zScores: { pts: -0.851, reb: -0.806, ast: 0.288, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: 0, ftImpact: -1.329, to: -0.805 } },
          { name: "Aram Vladimir Soqui Urbano", min: 22, pts: 7, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -1.31, zScores: { pts: -0.168, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.221, ftImpact: -0.665, to: 0.901 } },
          { name: "Zaon Collins", min: 27, pts: 11, reb: 3, ast: 4, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 2.43, zScores: { pts: 0.378, reb: -0.11, ast: 1.396, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: 0.669, ftImpact: 0, to: 0.048 } },
          { name: "Makhan Diouf", min: 8, pts: 2, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.91, zScores: { pts: -0.851, reb: 0.238, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.064, ftImpact: 0, to: -0.805 } },
          { name: "Jac Mani", min: 13, pts: 9, reb: 6, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 3, fta: 5, composite: -1.83, zScores: { pts: 0.105, reb: 0.934, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.157, ftImpact: -0.95, to: 0.901 } },
          { name: "Bastien Rieber", min: 18, pts: 12, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 5, ftm: 1, fta: 2, composite: 1.06, zScores: { pts: 0.515, reb: -0.458, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 1.718, fgImpact: 1.303, ftImpact: -0.665, to: 0.048 } },
          { name: "Matteo Porto", min: 7, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -3.36, zScores: { pts: -0.851, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0.758, to: 0.901 } },
          { name: "DJ Stickman", min: 14, pts: 7, reb: 1, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 5, fta: 5, composite: 1.29, zScores: { pts: -0.168, reb: -0.806, ast: 0.288, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -0.285, ftImpact: 1.896, to: 0.048 } },
          { name: "Cameron Faas", min: 16, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.72, zScores: { pts: -0.441, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.128, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401809134",
      line: "Long Beach State Beach 54 @ UC Davis Aggies 71 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LBSU", name: "Long Beach State Beach", score: 54,
        players: [

        ]
      },
      home: {
        abbr: "UCDav", name: "UC Davis Aggies", score: 71,
        players: [
          { name: "Niko Rocak", min: 27, pts: 9, reb: 10, ast: 1, stl: 2, blk: 3, to: 3, tpm: 2, fgm: 3, fga: 8, ftm: 1, fta: 2, composite: 5.35, zScores: { pts: 0.105, reb: 2.326, ast: -0.266, stl: 1.486, blk: 3.617, tpm: 0.911, fgImpact: -0.506, ftImpact: -0.665, to: -1.657 } },
          { name: "Jalen Stokes", min: 12, pts: 6, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -1.75, zScores: { pts: -0.305, reb: -0.806, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.89, ftImpact: 0, to: 0.048 } },
          { name: "Marcus Wilson", min: 27, pts: 18, reb: 4, ast: 6, stl: 0, blk: 2, to: 1, tpm: 2, fgm: 7, fga: 15, ftm: 2, fta: 2, composite: 7.48, zScores: { pts: 1.335, reb: 0.238, ast: 2.504, stl: -0.671, blk: 2.256, tpm: 0.911, fgImpact: 0.099, ftImpact: 0.758, to: 0.048 } },
          { name: "Nils Cooper", min: 22, pts: 6, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -1.08, zScores: { pts: -0.305, reb: 0.238, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.192, ftImpact: 0, to: 0.901 } },
          { name: "Connor Sevilla", min: 35, pts: 10, reb: 1, ast: 3, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 9, ftm: 4, fta: 4, composite: 1.3, zScores: { pts: 0.242, reb: -0.806, ast: 0.842, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -0.855, ftImpact: 1.516, to: 0.048 } },
          { name: "Omer Suljanovic", min: 16, pts: 9, reb: 4, ast: 0, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: 0.69, zScores: { pts: 0.105, reb: 0.238, ast: -0.819, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: 0.89, ftImpact: 0.758, to: -0.805 } },
          { name: "Abdullah Amzil", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Isaiah Chappell", min: 23, pts: 8, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -1.65, zScores: { pts: -0.032, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.506, ftImpact: 0, to: 0.048 } },
          { name: "Cyril Franklin Jr.", min: 10, pts: 0, reb: 1, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.62, zScores: { pts: -1.124, reb: -0.806, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: -1.657 } },
          { name: "Chase Rawlins", min: 1, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.81, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Brayden Fagbemi", min: 26, pts: 5, reb: 3, ast: 5, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 1.12, zScores: { pts: -0.441, reb: -0.11, ast: 1.95, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: 0.477, ftImpact: 0, to: -0.805 } }
        ]
      }
    },
      {
      id: "401828428",
      line: "VCU Rams 78 @ Richmond Spiders 67 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "VCU", name: "VCU Rams", score: 78,
        players: [
          { name: "Lazar Djokovic", min: 33, pts: 5, reb: 9, ast: 2, stl: 1, blk: 3, to: 3, tpm: 0, fgm: 0, fga: 3, ftm: 5, fta: 6, composite: 3.29, zScores: { pts: -0.441, reb: 1.978, ast: 0.288, stl: 0.407, blk: 3.617, tpm: -0.702, fgImpact: -1.047, ftImpact: 0.852, to: -1.657 } },
          { name: "Barry Evans", min: 23, pts: 5, reb: 4, ast: 4, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: 0.67, zScores: { pts: -0.441, reb: 0.238, ast: 1.396, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -0.221, ftImpact: -0.665, to: 0.048 } },
          { name: "Nyk Lewis", min: 27, pts: 10, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 1.33, zScores: { pts: 0.242, reb: 0.238, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 0.541, ftImpact: 0.758, to: 0.048 } },
          { name: "Terrence Hill Jr.", min: 36, pts: 20, reb: 5, ast: 3, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 14, ftm: 4, fta: 5, composite: 5.71, zScores: { pts: 1.608, reb: 0.586, ast: 0.842, stl: 0.407, blk: -0.467, tpm: 2.524, fgImpact: -0.314, ftImpact: 0.473, to: 0.048 } },
          { name: "Jadrian Tracey", min: 24, pts: 14, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 13, ftm: 0, fta: 0, composite: -0.08, zScores: { pts: 0.788, reb: -0.458, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 0.035, ftImpact: 0, to: 0.048 } },
          { name: "Keyshawn Mitchell", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Michael Belle", min: 18, pts: 7, reb: 10, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 8, ftm: 1, fta: 2, composite: 0.59, zScores: { pts: -0.168, reb: 2.326, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.506, ftImpact: -0.665, to: 0.901 } },
          { name: "Brandon Jennings", min: 20, pts: 7, reb: 3, ast: 4, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: 1.18, zScores: { pts: -0.168, reb: -0.11, ast: 1.396, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: -0.221, ftImpact: 0.758, to: -0.805 } },
          { name: "Ahmad Nowell", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Tyrell Ward", min: 12, pts: 10, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: -0.26, zScores: { pts: 0.242, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 0.541, ftImpact: 0.758, to: 0.048 } }
        ]
      },
      home: {
        abbr: "Rich", name: "Richmond Spiders", score: 67,
        players: [
          { name: "Mike Walz", min: 27, pts: 10, reb: 9, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 6, fta: 6, composite: 3.62, zScores: { pts: 0.242, reb: 1.978, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.221, ftImpact: 2.275, to: 0.901 } },
          { name: "Mikkel Tyne", min: 14, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.31, zScores: { pts: -0.715, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.634, ftImpact: 0, to: 0.048 } },
          { name: "Collin Tanner", min: 21, pts: 4, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 4, composite: -4.01, zScores: { pts: -0.578, reb: 0.238, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.285, ftImpact: -1.329, to: 0.048 } },
          { name: "Will Johnston", min: 38, pts: 17, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 14, ftm: 1, fta: 1, composite: 4.81, zScores: { pts: 1.198, reb: -0.11, ast: 0.288, stl: 0.407, blk: -0.467, tpm: 2.524, fgImpact: -0.314, ftImpact: 0.379, to: 0.901 } },
          { name: "AJ Lopez", min: 37, pts: 14, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 13, ftm: 6, fta: 6, composite: 0.67, zScores: { pts: 0.788, reb: -0.806, ast: 0.842, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -1.489, ftImpact: 2.275, to: 0.901 } },
          { name: "Jaylen Robinson", min: 7, pts: 2, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.57, zScores: { pts: -0.851, reb: -1.154, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: 0, to: 0.048 } },
          { name: "Jaden Daughtry", min: 14, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -5.42, zScores: { pts: -0.578, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.919, ftImpact: 0, to: -0.805 } },
          { name: "Jonathan Beagle", min: 11, pts: 4, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.95, zScores: { pts: -0.578, reb: -0.458, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.477, ftImpact: 0, to: -0.805 } },
          { name: "Aiden Argabright", min: 25, pts: 9, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 9, fta: 10, composite: 0.66, zScores: { pts: 0.105, reb: 0.238, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -1.396, ftImpact: 2.368, to: 0.901 } },
          { name: "David Thomas", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401827684",
      line: "West Virginia Mountaineers 74 @ UCF Knights 67 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WVU", name: "West Virginia Mountaineers", score: 74,
        players: [
          { name: "Brenen Lorient", min: 29, pts: 11, reb: 8, ast: 1, stl: 2, blk: 1, to: 3, tpm: 0, fgm: 5, fga: 11, ftm: 1, fta: 1, composite: 2.11, zScores: { pts: 0.378, reb: 1.63, ast: -0.266, stl: 1.486, blk: 0.895, tpm: -0.702, fgImpact: -0.029, ftImpact: 0.379, to: -1.657 } },
          { name: "Harlan Obioha", min: 22, pts: 0, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.5, zScores: { pts: -1.124, reb: 0.586, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.048 } },
          { name: "Treysen Eaglestaff", min: 36, pts: 8, reb: 4, ast: 3, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 9, ftm: 4, fta: 4, composite: 1.31, zScores: { pts: -0.032, reb: 0.238, ast: 0.842, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -1.617, ftImpact: 1.516, to: 0.048 } },
          { name: "Jasper Floyd", min: 31, pts: 17, reb: 5, ast: 3, stl: 2, blk: 0, to: 4, tpm: 3, fgm: 6, fga: 8, ftm: 2, fta: 4, composite: 3.3, zScores: { pts: 1.198, reb: 0.586, ast: 0.842, stl: 1.486, blk: -0.467, tpm: 1.718, fgImpact: 1.78, ftImpact: -1.329, to: -2.51 } },
          { name: "Honor Huff", min: 26, pts: 21, reb: 1, ast: 0, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 12, ftm: 8, fta: 8, composite: 3.63, zScores: { pts: 1.744, reb: -0.806, ast: -0.819, stl: 0.407, blk: -0.467, tpm: 1.718, fgImpact: -0.378, ftImpact: 3.033, to: -0.805 } },
          { name: "DJ Thomas", min: 15, pts: 1, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 1, fta: 2, composite: -3.91, zScores: { pts: -0.988, reb: -0.11, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -1.745, ftImpact: -0.665, to: 0.901 } },
          { name: "Amir Jenkins", min: 12, pts: 4, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.83, zScores: { pts: -0.578, reb: -0.806, ast: 0.288, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.128, ftImpact: 0, to: 0.901 } },
          { name: "Morris Ugusuk", min: 7, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.34, zScores: { pts: -1.124, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Chance Moore", min: 22, pts: 12, reb: 5, ast: 0, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 4.22, zScores: { pts: 0.515, reb: 0.586, ast: -0.819, stl: 0.407, blk: 2.256, tpm: -0.702, fgImpact: 1.082, ftImpact: 0, to: 0.901 } }
        ]
      },
      home: {
        abbr: "UCF", name: "UCF Knights", score: 67,
        players: [
          { name: "Jordan Burks", min: 31, pts: 10, reb: 8, ast: 0, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 4.71, zScores: { pts: 0.242, reb: 1.63, ast: -0.819, stl: 2.565, blk: -0.467, tpm: 0.911, fgImpact: 0.605, ftImpact: 0, to: 0.048 } },
          { name: "Devan Cambridge", min: 25, pts: 5, reb: 3, ast: 2, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 1, composite: 1.62, zScores: { pts: -0.441, reb: -0.11, ast: 0.288, stl: 1.486, blk: 0.895, tpm: -0.702, fgImpact: -0.221, ftImpact: 0.379, to: 0.048 } },
          { name: "John Bol", min: 28, pts: 7, reb: 6, ast: 1, stl: 1, blk: 5, to: 3, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: 4.76, zScores: { pts: -0.168, reb: 0.934, ast: -0.266, stl: 0.407, blk: 6.34, tpm: -0.702, fgImpact: 0.541, ftImpact: -0.665, to: -1.657 } },
          { name: "Riley Kugel", min: 36, pts: 13, reb: 2, ast: 2, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 10, ftm: 5, fta: 5, composite: 3.15, zScores: { pts: 0.652, reb: -0.458, ast: 0.288, stl: 1.486, blk: -0.467, tpm: 0.911, fgImpact: -1.204, ftImpact: 1.896, to: 0.048 } },
          { name: "Themus Fulks", min: 35, pts: 19, reb: 4, ast: 7, stl: 0, blk: 0, to: 6, tpm: 1, fgm: 7, fga: 16, ftm: 4, fta: 5, composite: -0.26, zScores: { pts: 1.471, reb: 0.238, ast: 3.058, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.25, ftImpact: 0.473, to: -4.216 } },
          { name: "Jeremy Foumena", min: 7, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -1.047, ftImpact: 0, to: 0.901 } },
          { name: "Carmelo Pacheco", min: 5, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.41, zScores: { pts: -0.715, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.413, ftImpact: 0, to: 0.901 } },
          { name: "Chris Johnson", min: 21, pts: 10, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 2, fta: 3, composite: -3.21, zScores: { pts: 0.242, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.256, ftImpact: -0.285, to: 0.048 } },
          { name: "George Beale Jr.", min: 10, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.03, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.901 } },
          { name: "Kris Parker", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401818562",
      line: "Brown Bears 79 @ Dartmouth Big Green 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Brown", name: "Brown Bears", score: 79,
        players: [
          { name: "N'famara Dabo", min: 20, pts: 6, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 0.17, zScores: { pts: -0.305, reb: 0.238, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.89, ftImpact: 0, to: 0.901 } },
          { name: "Landon Lewis", min: 30, pts: 30, reb: 10, ast: 2, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 12, fga: 15, ftm: 4, fta: 6, composite: 10.05, zScores: { pts: 2.974, reb: 2.326, ast: 0.288, stl: 1.486, blk: -0.467, tpm: 0.911, fgImpact: 3.908, ftImpact: -0.571, to: -0.805 } },
          { name: "Luke Paragon", min: 26, pts: 7, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 3, ftm: 1, fta: 1, composite: -0.56, zScores: { pts: -0.168, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 0.477, ftImpact: 0.379, to: 0.048 } },
          { name: "Malcolm Wrisby-Jefferson", min: 21, pts: 7, reb: 1, ast: 4, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -1.23, zScores: { pts: -0.168, reb: -0.806, ast: 1.396, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.192, ftImpact: 0, to: -0.805 } },
          { name: "Jeremiah Jenkins", min: 35, pts: 4, reb: 5, ast: 5, stl: 4, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 10, ftm: 0, fta: 2, composite: -1.28, zScores: { pts: -0.578, reb: 0.586, ast: 1.95, stl: 3.643, blk: -0.467, tpm: -0.702, fgImpact: -1.966, ftImpact: -2.087, to: -1.657 } },
          { name: "Charlie O'Sullivan", min: 7, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.78, zScores: { pts: -0.305, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 0.477, ftImpact: 0, to: 0.901 } },
          { name: "David Rochester", min: 23, pts: 12, reb: 1, ast: 2, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 5, ftm: 2, fta: 4, composite: 1.1, zScores: { pts: 0.515, reb: -0.806, ast: 0.288, stl: 1.486, blk: -0.467, tpm: 0.911, fgImpact: 1.303, ftImpact: -1.329, to: -0.805 } },
          { name: "Isaiah Langham", min: 24, pts: 5, reb: 2, ast: 1, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 4, composite: -4.63, zScores: { pts: -0.441, reb: -0.458, ast: -0.266, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -0.221, ftImpact: -2.752, to: -0.805 } },
          { name: "Adrian Uchidiuno", min: 14, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -5.41, zScores: { pts: -0.851, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.983, ftImpact: 0, to: -0.805 } }
        ]
      },
      home: {
        abbr: "Dart", name: "Dartmouth Big Green", score: 76,
        players: [
          { name: "Jackson Munro", min: 23, pts: 6, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0, zScores: { pts: -0.305, reb: -0.458, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: 0.128, ftImpact: 0, to: 0.048 } },
          { name: "Jayden Williams", min: 33, pts: 24, reb: 6, ast: 1, stl: 1, blk: 0, to: 2, tpm: 5, fgm: 8, fga: 13, ftm: 3, fta: 4, composite: 6.94, zScores: { pts: 2.154, reb: 0.934, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 3.331, fgImpact: 1.559, ftImpact: 0.094, to: -0.805 } },
          { name: "Brandon Mitchell-Day", min: 29, pts: 10, reb: 7, ast: 3, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 5, fga: 9, ftm: 0, fta: 1, composite: -1.28, zScores: { pts: 0.242, reb: 1.282, ast: 0.842, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.669, ftImpact: -1.044, to: -2.51 } },
          { name: "Kareem Thomas", min: 27, pts: 22, reb: 5, ast: 0, stl: 0, blk: 0, to: 5, tpm: 2, fgm: 5, fga: 7, ftm: 10, fta: 11, composite: 2.17, zScores: { pts: 1.881, reb: 0.586, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 1.367, ftImpact: 2.747, to: -3.363 } },
          { name: "Connor Amundsen", min: 34, pts: 9, reb: 0, ast: 4, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 2, ftm: 6, fta: 7, composite: -1.05, zScores: { pts: 0.105, reb: -1.154, ast: 1.396, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.064, ftImpact: 1.231, to: -1.657 } },
          { name: "Anton Strelnikov", min: 9, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.83, zScores: { pts: -1.124, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.901 } },
          { name: "Cam Hiatt", min: 12, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.59, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.048 } },
          { name: "Cameron McNamee", min: 18, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -3.48, zScores: { pts: -0.851, reb: -1.154, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0.758, to: 0.048 } },
          { name: "Nikola Abusara", min: 12, pts: 3, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -1.97, zScores: { pts: -0.715, reb: -0.458, ast: -0.266, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.285, ftImpact: -0.665, to: 0.901 } },
          { name: "Ben Brown", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401818544",
      line: "Columbia Lions 75 @ Princeton Tigers 65 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Colum", name: "Columbia Lions", score: 75,
        players: [
          { name: "Connor Igoe", min: 23, pts: 9, reb: 7, ast: 7, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 5, ftm: 0, fta: 2, composite: 3.75, zScores: { pts: 0.105, reb: 1.282, ast: 3.058, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: 1.303, ftImpact: -2.087, to: 0.048 } },
          { name: "Mason Ritter", min: 32, pts: 11, reb: 5, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 3, fta: 7, composite: -3.32, zScores: { pts: 0.378, reb: 0.586, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.256, ftImpact: -3.037, to: 0.048 } },
          { name: "Blair Thompson", min: 31, pts: 14, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 6, fga: 8, ftm: 0, fta: 0, composite: 2.31, zScores: { pts: 0.788, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 1.78, ftImpact: 0, to: 0.901 } },
          { name: "Miles Franklin", min: 32, pts: 12, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 10, ftm: 2, fta: 2, composite: 1.01, zScores: { pts: 0.515, reb: -0.458, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: -0.442, ftImpact: 0.758, to: 0.048 } },
          { name: "Kenny Noland", min: 37, pts: 9, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 1, fta: 4, composite: -2.47, zScores: { pts: 0.105, reb: -0.806, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: -0.506, ftImpact: -2.752, to: 0.901 } },
          { name: "Leland Coleman", min: 7, pts: 0, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.98, zScores: { pts: -1.124, reb: -0.458, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Richard Nweke", min: 8, pts: 4, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 3, composite: -0.75, zScores: { pts: -0.578, reb: -0.458, ast: -0.266, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.413, ftImpact: -0.285, to: 0.901 } },
          { name: "Hampton Sanders", min: 16, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.63, zScores: { pts: -0.305, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 0.128, ftImpact: 0, to: 0.048 } },
          { name: "Gerard O'Keefe", min: 14, pts: 10, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 5, ftm: 1, fta: 2, composite: -1.23, zScores: { pts: 0.242, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 1.303, ftImpact: -0.665, to: 0.901 } }
        ]
      },
      home: {
        abbr: "Princ", name: "Princeton Tigers", score: 65,
        players: [
          { name: "CJ Happy", min: 17, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 1, composite: -3.97, zScores: { pts: -0.441, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.57, ftImpact: -1.044, to: 0.048 } },
          { name: "Malik Abdullahi", min: 37, pts: 14, reb: 7, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 9, ftm: 4, fta: 7, composite: -2.34, zScores: { pts: 0.788, reb: 1.282, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.669, ftImpact: -1.615, to: -0.805 } },
          { name: "Landon Clark", min: 33, pts: 7, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.21, zScores: { pts: -0.168, reb: 0.238, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.541, ftImpact: 0, to: 0.901 } },
          { name: "Dalen Davis", min: 38, pts: 19, reb: 3, ast: 4, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 7, fga: 14, ftm: 4, fta: 5, composite: 1.84, zScores: { pts: 1.471, reb: -0.11, ast: 1.396, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.448, ftImpact: 0.473, to: -0.805 } },
          { name: "Jackson Hicke", min: 35, pts: 18, reb: 4, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 7, fga: 10, ftm: 4, fta: 4, composite: 0.62, zScores: { pts: 1.335, reb: 0.238, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 1.844, ftImpact: 1.516, to: -1.657 } },
          { name: "Jacob Hammond", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Jacob Huggins", min: 24, pts: 2, reb: 6, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -0.15, zScores: { pts: -0.851, reb: 0.934, ast: -0.819, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -0.634, ftImpact: 0, to: 0.901 } },
          { name: "Sebastian Whitfield", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Peyton Seals", min: 13, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.24, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.048 } }
        ]
      }
    },
      {
      id: "401812594",
      line: "Cornell Big Red 76 @ Pennsylvania Quakers 82 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Corn", name: "Cornell Big Red", score: 76,
        players: [
          { name: "Jake Fiegen", min: 30, pts: 17, reb: 8, ast: 1, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 7, fga: 16, ftm: 2, fta: 3, composite: 4.05, zScores: { pts: 1.198, reb: 1.63, ast: -0.266, stl: 1.486, blk: -0.467, tpm: 0.105, fgImpact: -0.25, ftImpact: -0.285, to: 0.901 } },
          { name: "Jacob Beccles", min: 25, pts: 10, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: -0.67, zScores: { pts: 0.242, reb: -0.806, ast: 0.288, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.32, ftImpact: 0, to: 0.048 } },
          { name: "Cooper Noard", min: 32, pts: 13, reb: 3, ast: 3, stl: 0, blk: 0, to: 4, tpm: 3, fgm: 5, fga: 9, ftm: 0, fta: 1, composite: -0.92, zScores: { pts: 0.652, reb: -0.11, ast: 0.842, stl: -0.671, blk: -0.467, tpm: 1.718, fgImpact: 0.669, ftImpact: -1.044, to: -2.51 } },
          { name: "Josh Baldwin", min: 21, pts: 10, reb: 6, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 6, fta: 9, composite: -2.26, zScores: { pts: 0.242, reb: 0.934, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.221, ftImpact: -0.856, to: -0.805 } },
          { name: "Adam Hinton", min: 30, pts: 10, reb: 7, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 10, ftm: 0, fta: 3, composite: -2.49, zScores: { pts: 0.242, reb: 1.282, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.442, ftImpact: -3.131, to: 0.048 } },
          { name: "Gioacchino Panzini", min: 11, pts: 4, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -2.1, zScores: { pts: -0.578, reb: -0.458, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.285, ftImpact: 0.758, to: 0.048 } },
          { name: "Kaspar Sepp", min: 20, pts: 10, reb: 8, ast: 2, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 6, ftm: 0, fta: 3, composite: 0.26, zScores: { pts: 0.242, reb: 1.63, ast: 0.288, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: 1.716, ftImpact: -3.131, to: -0.805 } },
          { name: "DJ Nix", min: 6, pts: 2, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.84, zScores: { pts: -0.851, reb: -0.806, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.064, ftImpact: 0, to: 0.048 } },
          { name: "Anthony Nimani", min: 18, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.64, zScores: { pts: -1.124, reb: -0.806, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: -0.805 } },
          { name: "Corbin Zentner", min: 7, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.69, zScores: { pts: -1.124, reb: -1.154, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.048 } }
        ]
      },
      home: {
        abbr: "Penn", name: "Pennsylvania Quakers", score: 82,
        players: [
          { name: "Augustus Gerhart", min: 8, pts: 0, reb: 2, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.53, zScores: { pts: -1.124, reb: -0.458, ast: 0.842, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "TJ Power", min: 36, pts: 17, reb: 8, ast: 0, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 14, ftm: 1, fta: 1, composite: 3.73, zScores: { pts: 1.198, reb: 1.63, ast: -0.819, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: 0.448, ftImpact: 0.379, to: 0.048 } },
          { name: "Michael Zanoni", min: 23, pts: 5, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -2.89, zScores: { pts: -0.441, reb: -0.458, ast: -0.819, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -1.268, ftImpact: 0, to: 0.048 } },
          { name: "Ethan Roberts", min: 28, pts: 14, reb: 7, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 13, ftm: 4, fta: 7, composite: -3.74, zScores: { pts: 0.788, reb: 1.282, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.727, ftImpact: -1.615, to: -0.805 } },
          { name: "AJ Levine", min: 30, pts: 16, reb: 3, ast: 4, stl: 5, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 12, ftm: 8, fta: 12, composite: 1.96, zScores: { pts: 1.061, reb: -0.11, ast: 1.396, stl: 4.722, blk: -0.467, tpm: -0.702, fgImpact: -1.14, ftImpact: -1.142, to: -1.657 } },
          { name: "Dalton Scantlebury", min: 15, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 4, composite: -4.75, zScores: { pts: -0.851, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: -1.329, to: 0.901 } },
          { name: "Lucas Lueth", min: 21, pts: 11, reb: 6, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 3, fta: 6, composite: 1.29, zScores: { pts: 0.378, reb: 0.934, ast: -0.266, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: 1.303, ftImpact: -1.994, to: 0.048 } },
          { name: "Niklas Polonowski", min: 6, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.96, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Jay Jones", min: 28, pts: 17, reb: 5, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 9, fta: 11, composite: 4.69, zScores: { pts: 1.198, reb: 0.586, ast: 0.842, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.605, ftImpact: 1.325, to: 0.901 } },
          { name: "Cam Thrower", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401808237",
      line: "LSU Tigers 63 @ Tennessee Volunteers 73 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LSU", name: "LSU Tigers", score: 63,
        players: [
          { name: "Marquel Sutton", min: 32, pts: 15, reb: 9, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 6, fga: 15, ftm: 2, fta: 2, composite: 3.12, zScores: { pts: 0.925, reb: 1.978, ast: -0.819, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.663, ftImpact: 0.758, to: 0.901 } },
          { name: "Pablo Tamba", min: 32, pts: 13, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 8, ftm: 3, fta: 8, composite: -3.22, zScores: { pts: 0.652, reb: -0.458, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 0.256, ftImpact: -4.081, to: 0.901 } },
          { name: "Mike Nwoko", min: 21, pts: 10, reb: 5, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 4, fta: 5, composite: -0.11, zScores: { pts: 0.242, reb: 0.586, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.157, ftImpact: 0.473, to: 0.048 } },
          { name: "Rashad King", min: 20, pts: 2, reb: 0, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -2.36, zScores: { pts: -0.851, reb: -1.154, ast: 0.842, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -1.332, ftImpact: 0, to: 0.901 } },
          { name: "Jalen Reece", min: 40, pts: 15, reb: 0, ast: 4, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 8, ftm: 4, fta: 4, composite: 3.57, zScores: { pts: 0.925, reb: -1.154, ast: 1.396, stl: -0.671, blk: -0.467, tpm: 1.718, fgImpact: 0.256, ftImpact: 1.516, to: 0.048 } },
          { name: "Robert Miller III", min: 17, pts: 2, reb: 4, ast: 0, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: 1.21, zScores: { pts: -0.851, reb: 0.238, ast: -0.819, stl: 1.486, blk: 0.895, tpm: -0.702, fgImpact: 0.064, ftImpact: 0, to: 0.901 } },
          { name: "Mazi Mosley", min: 22, pts: 6, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -0.37, zScores: { pts: -0.305, reb: -0.458, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.57, ftImpact: 0, to: 0.901 } },
          { name: "PJ Carter", min: 16, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.38, zScores: { pts: -1.124, reb: -1.154, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -1.047, ftImpact: 0, to: 0.048 } }
        ]
      },
      home: {
        abbr: "Tenn", name: "Tennessee Volunteers", score: 73,
        players: [
          { name: "Nate Ament", min: 36, pts: 22, reb: 9, ast: 1, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 6, fga: 19, ftm: 10, fta: 11, composite: 6.06, zScores: { pts: 1.881, reb: 1.978, ast: -0.266, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: -2.059, ftImpact: 2.747, to: 0.901 } },
          { name: "Felix Okpara", min: 27, pts: 3, reb: 7, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -2.49, zScores: { pts: -0.715, reb: 1.282, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.634, ftImpact: -0.665, to: 0.901 } },
          { name: "J.P. Estrella", min: 28, pts: 16, reb: 9, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 9, ftm: 2, fta: 4, composite: 1.29, zScores: { pts: 1.061, reb: 1.978, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 2.193, ftImpact: -1.329, to: 0.048 } },
          { name: "Ja'Kobi Gillespie", min: 35, pts: 12, reb: 2, ast: 6, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 4.13, zScores: { pts: 0.515, reb: -0.458, ast: 2.504, stl: 0.407, blk: -0.467, tpm: 2.524, fgImpact: -0.093, ftImpact: 0, to: -0.805 } },
          { name: "Bishop Boswell", min: 22, pts: 2, reb: 3, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.85, zScores: { pts: -0.851, reb: -0.11, ast: 0.842, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.064, ftImpact: 0, to: 0.048 } },
          { name: "DeWayne Brown II", min: 11, pts: 3, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 3, fta: 4, composite: -2.08, zScores: { pts: -0.715, reb: -0.458, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0.094, to: 0.901 } },
          { name: "Jaylen Carey", min: 13, pts: 7, reb: 5, ast: 3, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: -0.43, zScores: { pts: -0.168, reb: 0.586, ast: 0.842, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.541, ftImpact: -0.665, to: -0.805 } },
          { name: "Ethan Burg", min: 18, pts: 8, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.6, zScores: { pts: -0.032, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 0.89, ftImpact: 0, to: 0.048 } },
          { name: "Troy Henderson", min: 3, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.69, zScores: { pts: -1.124, reb: -1.154, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.048 } },
          { name: "Amari Evans", min: 7, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.79, zScores: { pts: -1.124, reb: -0.458, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401812621",
      line: "Yale Bulldogs 76 @ Harvard Crimson 75 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "Yale", name: "Yale Bulldogs", score: 76,
        players: [
          { name: "Isaac Celiscar", min: 41, pts: 17, reb: 14, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 9, fta: 12, composite: 4.47, zScores: { pts: 1.198, reb: 3.718, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.256, ftImpact: 0.281, to: 0.048 } },
          { name: "Nick Townsend", min: 17, pts: 4, reb: 1, ast: 3, stl: 3, blk: 0, to: 4, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -0.83, zScores: { pts: -0.578, reb: -0.806, ast: 0.842, stl: 2.565, blk: -0.467, tpm: -0.702, fgImpact: 0.064, ftImpact: 0.758, to: -2.51 } },
          { name: "Samson Aletan", min: 36, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.17, zScores: { pts: -0.578, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.128, ftImpact: 0, to: 0.048 } },
          { name: "Trevor Mullin", min: 32, pts: 8, reb: 3, ast: 2, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 2, fga: 10, ftm: 2, fta: 2, composite: -2.95, zScores: { pts: -0.032, reb: -0.11, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -1.966, ftImpact: 0.758, to: -1.657 } },
          { name: "Casey Simmons", min: 39, pts: 16, reb: 8, ast: 1, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 6, fga: 10, ftm: 2, fta: 2, composite: 5.45, zScores: { pts: 1.061, reb: 1.63, ast: -0.266, stl: -0.671, blk: 0.895, tpm: 0.911, fgImpact: 1.082, ftImpact: 0.758, to: 0.048 } },
          { name: "Jack Sullivan", min: 3, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.49, zScores: { pts: -1.124, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Riley Fox", min: 18, pts: 7, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -2.93, zScores: { pts: -0.168, reb: -1.154, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -1.204, ftImpact: 0, to: 0.901 } },
          { name: "Jordan Brathwaite", min: 26, pts: 17, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 5, fgm: 5, fga: 10, ftm: 2, fta: 2, composite: 4.3, zScores: { pts: 1.198, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 3.331, fgImpact: 0.32, ftImpact: 0.758, to: 0.901 } },
          { name: "Devon Arlington", min: 13, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.55, zScores: { pts: -0.715, reb: -1.154, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.285, ftImpact: 0, to: 0.901 } }
        ]
      },
      home: {
        abbr: "Harv", name: "Harvard Crimson", score: 75,
        players: [
          { name: "Thomas Batties II", min: 42, pts: 23, reb: 7, ast: 1, stl: 0, blk: 4, to: 2, tpm: 4, fgm: 9, fga: 15, ftm: 1, fta: 2, composite: 10.02, zScores: { pts: 2.018, reb: 1.282, ast: -0.266, stl: -0.671, blk: 4.979, tpm: 2.524, fgImpact: 1.623, ftImpact: -0.665, to: -0.805 } },
          { name: "Tey Barbour", min: 40, pts: 12, reb: 5, ast: 3, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 12, ftm: 1, fta: 1, composite: 3.97, zScores: { pts: 0.515, reb: 0.586, ast: 0.842, stl: 1.486, blk: -0.467, tpm: 0.105, fgImpact: -0.378, ftImpact: 0.379, to: 0.901 } },
          { name: "Ben Eisendrath", min: 40, pts: 13, reb: 3, ast: 2, stl: 3, blk: 2, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 5, fta: 5, composite: 7.85, zScores: { pts: 0.652, reb: -0.11, ast: 0.288, stl: 2.565, blk: 2.256, tpm: -0.702, fgImpact: 0.954, ftImpact: 1.896, to: 0.048 } },
          { name: "Robert Hinton", min: 41, pts: 12, reb: 7, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 6, fga: 13, ftm: 0, fta: 0, composite: 1.41, zScores: { pts: 0.515, reb: 1.282, ast: 0.288, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.035, ftImpact: 0, to: 0.048 } },
          { name: "Chandler Pigge", min: 41, pts: 13, reb: 6, ast: 3, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 4.56, zScores: { pts: 0.652, reb: 0.934, ast: 0.842, stl: 2.565, blk: -0.467, tpm: 0.105, fgImpact: 0.733, ftImpact: 0, to: -0.805 } },
          { name: "Kenan Parrish", min: 7, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.51, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.048 } },
          { name: "Frankie Mannino", min: 9, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -0.851, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: 0, to: 0.048 } },
          { name: "Xavier Nesbitt", min: 5, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.49, zScores: { pts: -1.124, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401808235",
      line: "Mississippi State Bulldogs 90 @ Ole Miss Rebels 78 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MissSt", name: "Mississippi State Bulldogs", score: 90,
        players: [
          { name: "Achor Achor", min: 22, pts: 18, reb: 5, ast: 1, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 8, ftm: 3, fta: 4, composite: 5.23, zScores: { pts: 1.335, reb: 0.586, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 1.718, fgImpact: 1.78, ftImpact: 0.094, to: 0.048 } },
          { name: "Quincy Ballard", min: 16, pts: 6, reb: 4, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: 1.33, zScores: { pts: -0.305, reb: 0.238, ast: -0.266, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 1.239, ftImpact: 0, to: 0.901 } },
          { name: "Jayden Epps", min: 33, pts: 12, reb: 7, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 13, ftm: 5, fta: 5, composite: 1.3, zScores: { pts: 0.515, reb: 1.282, ast: 0.842, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -2.251, ftImpact: 1.896, to: 0.048 } },
          { name: "Shawn Jones Jr.", min: 22, pts: 4, reb: 8, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: 1.16, zScores: { pts: -0.578, reb: 1.63, ast: 0.842, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.064, ftImpact: -0.665, to: 0.901 } },
          { name: "Josh Hubbard", min: 36, pts: 32, reb: 2, ast: 6, stl: 0, blk: 0, to: 5, tpm: 4, fgm: 12, fga: 16, ftm: 4, fta: 7, composite: 5.26, zScores: { pts: 3.247, reb: -0.458, ast: 2.504, stl: -0.671, blk: -0.467, tpm: 2.524, fgImpact: 3.559, ftImpact: -1.615, to: -3.363 } },
          { name: "Sergej Macura", min: 15, pts: 5, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 1.16, zScores: { pts: -0.441, reb: -0.11, ast: 0.288, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: 0.477, ftImpact: 0, to: 0.901 } },
          { name: "Jamarion Davis-Fleming", min: 25, pts: 6, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 3, composite: -4.22, zScores: { pts: -0.305, reb: 0.586, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 1.239, ftImpact: -3.131, to: 0.048 } },
          { name: "Ja'Borri McGhee", min: 28, pts: 7, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 1, composite: -1.1, zScores: { pts: -0.168, reb: -0.11, ast: 0.288, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.157, ftImpact: -1.044, to: 0.048 } },
          { name: "King Grace", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.37, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.901 } }
        ]
      },
      home: {
        abbr: "Miss", name: "Ole Miss Rebels", score: 78,
        players: [
          { name: "Augusto Cassia", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -5.43, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -1.396, ftImpact: 0, to: 0.901 } },
          { name: "Malik Dia", min: 30, pts: 32, reb: 7, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 11, fga: 20, ftm: 9, fta: 12, composite: 4.96, zScores: { pts: 3.247, reb: 1.282, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 1.402, ftImpact: 0.281, to: 0.048 } },
          { name: "Ilias Kamardine", min: 30, pts: 5, reb: 3, ast: 5, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: 1.96, zScores: { pts: -0.441, reb: -0.11, ast: 1.95, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.285, ftImpact: 0.758, to: 0.048 } },
          { name: "Eduardo Klafke", min: 31, pts: 6, reb: 5, ast: 4, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: 3.2, zScores: { pts: -0.305, reb: 0.586, ast: 1.396, stl: 2.565, blk: -0.467, tpm: 0.105, fgImpact: -0.919, ftImpact: -0.665, to: 0.901 } },
          { name: "Patton Pinkins", min: 21, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -5.16, zScores: { pts: -0.715, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.983, ftImpact: 0, to: -0.805 } },
          { name: "Niko Bundalo", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "James Scott", min: 11, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -3.18, zScores: { pts: -0.715, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: -0.665, to: 0.901 } },
          { name: "Corey Chest", min: 5, pts: 3, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 1, composite: -2.23, zScores: { pts: -0.715, reb: -0.806, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: 0.379, to: 0.048 } },
          { name: "Zach Day", min: 7, pts: 0, reb: 0, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.32, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Max Smith", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.68, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Koren Johnson", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.4, zScores: { pts: -0.851, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.634, ftImpact: 0, to: 0.901 } },
          { name: "AJ Storr", min: 32, pts: 21, reb: 6, ast: 5, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 8, fga: 16, ftm: 2, fta: 2, composite: 9.54, zScores: { pts: 1.744, reb: 0.934, ast: 1.95, stl: 1.486, blk: -0.467, tpm: 1.718, fgImpact: 0.512, ftImpact: 0.758, to: 0.901 } },
          { name: "Travis Perry", min: 22, pts: 3, reb: 3, ast: 2, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 0.06, zScores: { pts: -0.715, reb: -0.11, ast: 0.288, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: -0.634, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401828227",
      line: "Tulsa Golden Hurricane 77 @ Wichita State Shockers 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Tuls", name: "Tulsa Golden Hurricane", score: 77,
        players: [
          { name: "Tyler Behrend", min: 20, pts: 4, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.72, zScores: { pts: -0.578, reb: 0.238, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.128, ftImpact: 0, to: 0.048 } },
          { name: "David Green", min: 31, pts: 10, reb: 3, ast: 1, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 2, fga: 10, ftm: 5, fta: 6, composite: -2.58, zScores: { pts: 0.242, reb: -0.11, ast: -0.266, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: -1.966, ftImpact: 0.852, to: -1.657 } },
          { name: "Ade Popoola", min: 32, pts: 5, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -3.02, zScores: { pts: -0.441, reb: 0.238, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -1.268, ftImpact: 0, to: -0.805 } },
          { name: "Miles Barnstable", min: 33, pts: 19, reb: 6, ast: 1, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 9, ftm: 5, fta: 5, composite: 8.29, zScores: { pts: 1.471, reb: 0.934, ast: -0.266, stl: 1.486, blk: -0.467, tpm: 2.524, fgImpact: 0.669, ftImpact: 1.896, to: 0.048 } },
          { name: "Tylen Riley", min: 30, pts: 21, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 9, fga: 14, ftm: 2, fta: 2, composite: 2.91, zScores: { pts: 1.744, reb: 0.238, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 1.972, ftImpact: 0.758, to: 0.048 } },
          { name: "KJ Martin Jr.", min: 14, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -5.09, zScores: { pts: -1.124, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -1.745, ftImpact: 0, to: 0.901 } },
          { name: "Romad Dean", min: 10, pts: 3, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.78, zScores: { pts: -0.715, reb: -0.806, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: 0.064, ftImpact: 0, to: 0.901 } },
          { name: "Ian Smikle", min: 6, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.44, zScores: { pts: -1.124, reb: -0.11, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Jaylen Lawal", min: 11, pts: 10, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 3, fta: 6, composite: -1.02, zScores: { pts: 0.242, reb: 0.238, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.89, ftImpact: -1.994, to: 0.901 } },
          { name: "Myles Rigsby", min: 13, pts: 5, reb: 0, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.44, zScores: { pts: -0.441, reb: -1.154, ast: 0.288, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.221, ftImpact: 0, to: 0.048 } }
        ]
      },
      home: {
        abbr: "WichSt", name: "Wichita State Shockers", score: 81,
        players: [
          { name: "Dillon Battie", min: 24, pts: 13, reb: 3, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 6, fga: 7, ftm: 1, fta: 2, composite: 2.69, zScores: { pts: 0.652, reb: -0.11, ast: -0.819, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: 2.129, ftImpact: -0.665, to: 0.901 } },
          { name: "Karon Boyd", min: 25, pts: 5, reb: 8, ast: 1, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -1.02, zScores: { pts: -0.441, reb: 1.63, ast: -0.266, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: -0.221, ftImpact: -0.665, to: -1.657 } },
          { name: "Emmanuel Okorafor", min: 15, pts: 4, reb: 4, ast: 1, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 2, zScores: { pts: -0.578, reb: 0.238, ast: -0.266, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: 0.826, ftImpact: 0, to: 0.901 } },
          { name: "Kenyon Giles", min: 40, pts: 31, reb: 5, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 13, fga: 27, ftm: 4, fta: 4, composite: 6.93, zScores: { pts: 3.111, reb: 0.586, ast: 0.288, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: 0.483, ftImpact: 1.516, to: 0.901 } },
          { name: "Michael Gray Jr.", min: 33, pts: 4, reb: 1, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -0.63, zScores: { pts: -0.578, reb: -0.806, ast: 0.842, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.983, ftImpact: 0.758, to: 0.901 } },
          { name: "William Berg", min: 25, pts: 12, reb: 7, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 6, fta: 12, composite: -3.95, zScores: { pts: 0.515, reb: 1.282, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.506, ftImpact: -3.988, to: 0.048 } },
          { name: "Dre Kindell", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.69, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Brian Amuneke", min: 15, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.41, zScores: { pts: -0.715, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.064, ftImpact: 0, to: 0.901 } },
          { name: "TJ Williams", min: 16, pts: 9, reb: 8, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 3, fta: 5, composite: 0, zScores: { pts: 0.105, reb: 1.63, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.192, ftImpact: -0.95, to: 0.048 } }
        ]
      }
    },
      {
      id: "401809162",
      line: "UC Santa Barbara Gauchos 79 @ Cal Poly Mustangs 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UCSB", name: "UC Santa Barbara Gauchos", score: 79,
        players: [
          { name: "Colin Smith", min: 34, pts: 17, reb: 6, ast: 3, stl: 1, blk: 1, to: 4, tpm: 3, fgm: 4, fga: 9, ftm: 6, fta: 8, composite: 3.58, zScores: { pts: 1.198, reb: 0.934, ast: 0.842, stl: 0.407, blk: 0.895, tpm: 1.718, fgImpact: -0.093, ftImpact: 0.187, to: -2.51 } },
          { name: "Hosana Kitenge", min: 22, pts: 2, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 1, composite: -3.79, zScores: { pts: -0.851, reb: -0.11, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.285, ftImpact: -1.044, to: 0.048 } },
          { name: "Zion Sensley", min: 35, pts: 21, reb: 9, ast: 0, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 8, fga: 16, ftm: 1, fta: 1, composite: 6.08, zScores: { pts: 1.744, reb: 1.978, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 2.524, fgImpact: 0.512, ftImpact: 0.379, to: 0.901 } },
          { name: "CJ Shaw", min: 36, pts: 13, reb: 2, ast: 3, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 14, ftm: 3, fta: 3, composite: 0.38, zScores: { pts: 0.652, reb: -0.458, ast: 0.842, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: -1.838, ftImpact: 1.137, to: -0.805 } },
          { name: "Aidan Mahaney", min: 33, pts: 21, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 8, fga: 13, ftm: 2, fta: 3, composite: 3.63, zScores: { pts: 1.744, reb: -1.154, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 1.718, fgImpact: 1.559, ftImpact: -0.285, to: 0.901 } },
          { name: "Michael Simcoe", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Koat Keat Tong", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Luke Zuffelato", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "ZZ Clark", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 1, composite: -5.08, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: -1.044, to: 0.901 } },
          { name: "Marvin McGhee IV", min: 25, pts: 5, reb: 6, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: 0.79, zScores: { pts: -0.441, reb: 0.934, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.285, ftImpact: 0.758, to: 0.048 } }
        ]
      },
      home: {
        abbr: "CP", name: "Cal Poly Mustangs", score: 89,
        players: [

        ]
      }
    },
      {
      id: "401826802",
      line: "Memphis Tigers 75 @ Utah State Aggies 99 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Mem", name: "Memphis Tigers", score: 75,
        players: [
          { name: "Aaron Bradshaw", min: 24, pts: 7, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 3, fta: 4, composite: 0.86, zScores: { pts: -0.168, reb: 0.586, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.477, ftImpact: 0.094, to: 0.901 } },
          { name: "Thierno Sylla", min: 16, pts: 2, reb: 4, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.45, zScores: { pts: -0.851, reb: 0.238, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.413, ftImpact: 0, to: 0.048 } },
          { name: "Julius Thedford", min: 24, pts: 7, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 11, ftm: 1, fta: 1, composite: -4.41, zScores: { pts: -0.168, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -1.553, ftImpact: 0.379, to: 0.048 } },
          { name: "Dug McDaniel", min: 33, pts: 10, reb: 2, ast: 3, stl: 4, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 12, ftm: 4, fta: 6, composite: -0.18, zScores: { pts: 0.242, reb: -0.458, ast: 0.842, stl: 3.643, blk: -0.467, tpm: -0.702, fgImpact: -1.902, ftImpact: -0.571, to: -0.805 } },
          { name: "Curtis Givens III", min: 32, pts: 18, reb: 4, ast: 2, stl: 0, blk: 0, to: 4, tpm: 3, fgm: 5, fga: 12, ftm: 5, fta: 5, composite: 1.45, zScores: { pts: 1.335, reb: 0.238, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 1.718, fgImpact: -0.378, ftImpact: 1.896, to: -2.51 } },
          { name: "William Whorton", min: 13, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 4, composite: -3.36, zScores: { pts: -0.578, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: -1.329, to: 0.901 } },
          { name: "Arop Arop", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -6.13, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: -2.087, to: 0.901 } },
          { name: "Ashton Hardaway", min: 20, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -5.05, zScores: { pts: -0.851, reb: -1.154, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.983, ftImpact: 0, to: 0.048 } },
          { name: "Simon Majok", min: 6, pts: 4, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -0.26, zScores: { pts: -0.578, reb: -0.458, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.413, ftImpact: 0.758, to: 0.901 } },
          { name: "Sincere Parker", min: 30, pts: 21, reb: 10, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 14, ftm: 10, fta: 10, composite: 5.21, zScores: { pts: 1.744, reb: 2.326, ast: -0.819, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -1.076, ftImpact: 3.791, to: -0.805 } }
        ]
      },
      home: {
        abbr: "UtSt", name: "Utah State Aggies", score: 99,
        players: [
          { name: "Adlan Elamin", min: 14, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -1.73, zScores: { pts: -0.441, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.983, ftImpact: 0.758, to: 0.901 } },
          { name: "Zach Keller", min: 16, pts: 5, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 2, fta: 4, composite: -3.62, zScores: { pts: -0.441, reb: 0.238, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.285, ftImpact: -1.329, to: 0.048 } },
          { name: "Mason Falslev", min: 38, pts: 20, reb: 6, ast: 2, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 8, fga: 13, ftm: 1, fta: 4, composite: 3.34, zScores: { pts: 1.608, reb: 0.934, ast: 0.288, stl: 0.407, blk: -0.467, tpm: 1.718, fgImpact: 1.559, ftImpact: -2.752, to: 0.048 } },
          { name: "Drake Allen", min: 13, pts: 3, reb: 0, ast: 1, stl: 1, blk: 1, to: 4, tpm: 0, fgm: 0, fga: 4, ftm: 3, fta: 3, composite: -4.3, zScores: { pts: -0.715, reb: -1.154, ast: -0.266, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: -1.396, ftImpact: 1.137, to: -2.51 } },
          { name: "MJ Collins Jr.", min: 32, pts: 24, reb: 3, ast: 4, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 10, fga: 14, ftm: 3, fta: 5, composite: 5.09, zScores: { pts: 2.154, reb: -0.11, ast: 1.396, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 2.734, ftImpact: -0.95, to: 0.901 } },
          { name: "Karson Templin", min: 24, pts: 20, reb: 4, ast: 1, stl: 1, blk: 2, to: 2, tpm: 2, fgm: 4, fga: 8, ftm: 10, fta: 10, composite: 8.4, zScores: { pts: 1.608, reb: 0.238, ast: -0.266, stl: 0.407, blk: 2.256, tpm: 0.911, fgImpact: 0.256, ftImpact: 3.791, to: -0.805 } },
          { name: "Garry Clark", min: 15, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 3, fta: 4, composite: -2.15, zScores: { pts: -0.441, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.064, ftImpact: 0.094, to: 0.901 } },
          { name: "Elijah Perryman", min: 27, pts: 10, reb: 1, ast: 9, stl: 4, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 3, fta: 4, composite: 7.56, zScores: { pts: 0.242, reb: -0.806, ast: 4.165, stl: 3.643, blk: -0.467, tpm: 0.105, fgImpact: 0.541, ftImpact: 0.094, to: 0.048 } },
          { name: "Kolby King", min: 21, pts: 7, reb: 5, ast: 5, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 2.78, zScores: { pts: -0.168, reb: 0.586, ast: 1.95, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.541, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401809147",
      line: "Hawai'i Rainbow Warriors 60 @ Cal State Northridge Matadors 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "HI", name: "Hawai'i Rainbow Warriors", score: 60,
        players: [
          { name: "Harry Rouhliadeff", min: 27, pts: 7, reb: 7, ast: 0, stl: 0, blk: 1, to: 4, tpm: 0, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: -2.82, zScores: { pts: -0.168, reb: 1.282, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.221, ftImpact: 0.094, to: -2.51 } },
          { name: "Isaac Finlinson", min: 24, pts: 13, reb: 2, ast: 1, stl: 3, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 7, ftm: 4, fta: 7, composite: -0.54, zScores: { pts: 0.652, reb: -0.458, ast: -0.266, stl: 2.565, blk: -0.467, tpm: 0.105, fgImpact: 0.605, ftImpact: -1.615, to: -1.657 } },
          { name: "Isaac Johnson", min: 16, pts: 9, reb: 5, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: -1.37, zScores: { pts: 0.105, reb: 0.586, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.157, ftImpact: 0.758, to: -0.805 } },
          { name: "Dre Bullock", min: 22, pts: 5, reb: 5, ast: 0, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 2, fga: 11, ftm: 0, fta: 0, composite: -6.53, zScores: { pts: -0.441, reb: 0.586, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -2.315, ftImpact: 0, to: -2.51 } },
          { name: "Hunter Erickson", min: 29, pts: 5, reb: 3, ast: 4, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 1, composite: -0.1, zScores: { pts: -0.441, reb: -0.11, ast: 1.396, stl: 1.486, blk: -0.467, tpm: 0.105, fgImpact: -0.221, ftImpact: -1.044, to: -0.805 } },
          { name: "Gytis Nemeiksa", min: 25, pts: 7, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 6, ftm: 1, fta: 2, composite: -1.4, zScores: { pts: -0.168, reb: -0.11, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.57, ftImpact: -0.665, to: 0.048 } },
          { name: "Yacine Toumi", min: 9, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: -2.85, zScores: { pts: -0.441, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.826, ftImpact: -0.665, to: 0.901 } },
          { name: "Hunter Carter", min: 5, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.61, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "AJ Economou", min: 14, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -3.7, zScores: { pts: -0.851, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.983, ftImpact: 0, to: 0.901 } },
          { name: "Isaiah Kerr", min: 29, pts: 7, reb: 5, ast: 1, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: -0.04, zScores: { pts: -0.168, reb: 0.586, ast: -0.266, stl: 1.486, blk: -0.467, tpm: 0.105, fgImpact: -1.268, ftImpact: 0.758, to: -0.805 } }
        ]
      },
      home: {
        abbr: "CSUN", name: "Cal State Northridge Matadors", score: 84,
        players: [

        ]
      }
    },
      {
      id: "401808240",
      line: "South Carolina Gamecocks 75 @ Alabama Crimson Tide 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SouthCar", name: "South Carolina Gamecocks", score: 75,
        players: [
          { name: "Elijah Strong", min: 12, pts: 4, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -3.81, zScores: { pts: -0.578, reb: -0.458, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -1.268, ftImpact: 0, to: 0.048 } },
          { name: "Mike Sharavjamts", min: 33, pts: 14, reb: 8, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 13, ftm: 0, fta: 0, composite: 3.64, zScores: { pts: 0.788, reb: 1.63, ast: 0.288, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: 0.035, ftImpact: 0, to: 0.048 } },
          { name: "Kobe Knox", min: 35, pts: 21, reb: 6, ast: 6, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 8, fga: 13, ftm: 4, fta: 5, composite: 8.38, zScores: { pts: 1.744, reb: 0.934, ast: 2.504, stl: 1.486, blk: -0.467, tpm: 0.105, fgImpact: 1.559, ftImpact: 0.473, to: 0.048 } },
          { name: "Meechie Johnson", min: 34, pts: 26, reb: 3, ast: 4, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 8, fga: 17, ftm: 7, fta: 8, composite: 5.49, zScores: { pts: 2.427, reb: -0.11, ast: 1.396, stl: 0.407, blk: -0.467, tpm: 1.718, fgImpact: 0.163, ftImpact: 1.61, to: -1.657 } },
          { name: "Myles Stute", min: 19, pts: 3, reb: 7, ast: 1, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 1.97, zScores: { pts: -0.715, reb: 1.282, ast: -0.266, stl: 0.407, blk: 0.895, tpm: 0.105, fgImpact: -0.634, ftImpact: 0, to: 0.901 } },
          { name: "Nordin Kapic", min: 11, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.05, zScores: { pts: -0.851, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.634, ftImpact: 0, to: 0.901 } },
          { name: "EJ Walker", min: 14, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.03, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Grant Polk", min: 15, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 5, fta: 5, composite: -2.16, zScores: { pts: -0.441, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -1.047, ftImpact: 1.896, to: 0.901 } },
          { name: "Eli Ellis", min: 27, pts: 0, reb: 1, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.11, zScores: { pts: -1.124, reb: -0.806, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: -0.805 } }
        ]
      },
      home: {
        abbr: "Bama", name: "Alabama Crimson Tide", score: 89,
        players: [
          { name: "London Jemison", min: 26, pts: 2, reb: 8, ast: 2, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 5, ftm: 2, fta: 2, composite: 0.73, zScores: { pts: -0.851, reb: 1.63, ast: 0.288, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: -1.745, ftImpact: 0.758, to: 0.048 } },
          { name: "Aiden Sherrell", min: 28, pts: 11, reb: 6, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 10, ftm: 1, fta: 3, composite: -0.77, zScores: { pts: 0.378, reb: 0.934, ast: -0.266, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.32, ftImpact: -1.708, to: 0.048 } },
          { name: "Amari Allen", min: 27, pts: 8, reb: 10, ast: 3, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 2, composite: 2.87, zScores: { pts: -0.032, reb: 2.326, ast: 0.842, stl: 1.486, blk: -0.467, tpm: 0.911, fgImpact: -0.157, ftImpact: -2.087, to: 0.048 } },
          { name: "Labaron Philon Jr.", min: 32, pts: 19, reb: 0, ast: 6, stl: 0, blk: 0, to: 3, tpm: 4, fgm: 5, fga: 8, ftm: 5, fta: 6, composite: 4.42, zScores: { pts: 1.471, reb: -1.154, ast: 2.504, stl: -0.671, blk: -0.467, tpm: 2.524, fgImpact: 1.018, ftImpact: 0.852, to: -1.657 } },
          { name: "Aden Holloway", min: 27, pts: 20, reb: 4, ast: 3, stl: 0, blk: 0, to: 3, tpm: 4, fgm: 6, fga: 9, ftm: 4, fta: 4, composite: 5.36, zScores: { pts: 1.608, reb: 0.238, ast: 0.842, stl: -0.671, blk: -0.467, tpm: 2.524, fgImpact: 1.431, ftImpact: 1.516, to: -1.657 } },
          { name: "Noah Williamson", min: 4, pts: 1, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -3.99, zScores: { pts: -0.988, reb: -0.806, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: -0.665, to: 0.048 } },
          { name: "Jalil Bethea", min: 6, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -2.84, zScores: { pts: -0.305, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.128, ftImpact: 0.758, to: 0.048 } },
          { name: "Houston Mallette", min: 23, pts: 3, reb: 6, ast: 2, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 1.9, zScores: { pts: -0.715, reb: 0.934, ast: 0.288, stl: 1.486, blk: -0.467, tpm: 0.105, fgImpact: -0.634, ftImpact: 0, to: 0.901 } },
          { name: "Latrell Wrightsell Jr.", min: 27, pts: 19, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 11, ftm: 4, fta: 6, composite: 4.07, zScores: { pts: 1.471, reb: -0.11, ast: 0.842, stl: 0.407, blk: -0.467, tpm: 1.718, fgImpact: 0.733, ftImpact: -0.571, to: 0.048 } }
        ]
      }
    },
      {
      id: "401808236",
      line: "Texas Longhorns 85 @ Missouri Tigers 68 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Tex", name: "Texas Longhorns", score: 85,
        players: [
          { name: "Camden Heide", min: 36, pts: 0, reb: 4, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 6, ftm: 0, fta: 0, composite: -3.66, zScores: { pts: -1.124, reb: 0.238, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -2.094, ftImpact: 0, to: 0.901 } },
          { name: "Matas Vokietaitis", min: 25, pts: 19, reb: 10, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 6, fga: 10, ftm: 7, fta: 8, composite: 6.6, zScores: { pts: 1.471, reb: 2.326, ast: -0.819, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: 1.082, ftImpact: 1.61, to: 0.048 } },
          { name: "Jordan Pope", min: 25, pts: 15, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 13, ftm: 3, fta: 4, composite: 0.47, zScores: { pts: 0.925, reb: -0.458, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: -0.727, ftImpact: 0.094, to: 0.048 } },
          { name: "Dailyn Swain", min: 37, pts: 25, reb: 6, ast: 2, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 9, fga: 16, ftm: 4, fta: 4, composite: 9.09, zScores: { pts: 2.291, reb: 0.934, ast: 0.288, stl: 1.486, blk: -0.467, tpm: 1.718, fgImpact: 1.274, ftImpact: 1.516, to: 0.048 } },
          { name: "Tramon Mark", min: 30, pts: 8, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 9, ftm: 2, fta: 2, composite: -2.5, zScores: { pts: -0.032, reb: 0.238, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.855, ftImpact: 0.758, to: 0.048 } },
          { name: "Nic Codie", min: 15, pts: 9, reb: 6, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 1, fta: 1, composite: 2.32, zScores: { pts: 0.105, reb: 0.934, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 1.303, ftImpact: 0.379, to: 0.901 } },
          { name: "Chendall Weaver", min: 11, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.14, zScores: { pts: -1.124, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Simeon Wilcher", min: 21, pts: 9, reb: 1, ast: 4, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 2, ftm: 4, fta: 4, composite: 1.42, zScores: { pts: 0.105, reb: -0.806, ast: 1.396, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: 0.826, ftImpact: 1.516, to: -1.657 } }
        ]
      },
      home: {
        abbr: "Mizzou", name: "Missouri Tigers", score: 68,
        players: [
          { name: "T.O. Barrett", min: 31, pts: 5, reb: 0, ast: 2, stl: 3, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 9, ftm: 1, fta: 2, composite: -0.78, zScores: { pts: -0.441, reb: -1.154, ast: 0.288, stl: 2.565, blk: 0.895, tpm: -0.702, fgImpact: -1.617, ftImpact: -0.665, to: 0.048 } },
          { name: "Shawn Phillips Jr.", min: 18, pts: 5, reb: 2, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 3, fta: 4, composite: -1.64, zScores: { pts: -0.441, reb: -0.458, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.413, ftImpact: 0.094, to: 0.048 } },
          { name: "Trent Pierce", min: 32, pts: 4, reb: 4, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: 0.49, zScores: { pts: -0.578, reb: 0.238, ast: 0.288, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.634, ftImpact: 0.758, to: 0.901 } },
          { name: "Mark Mitchell Jr.", min: 39, pts: 16, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 9, ftm: 6, fta: 10, composite: -1.99, zScores: { pts: 1.061, reb: 0.238, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.669, ftImpact: -1.9, to: 0.048 } },
          { name: "Jayden Stone", min: 34, pts: 16, reb: 5, ast: 0, stl: 1, blk: 0, to: 4, tpm: 2, fgm: 4, fga: 9, ftm: 6, fta: 7, composite: 0.31, zScores: { pts: 1.061, reb: 0.586, ast: -0.819, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: -0.093, ftImpact: 1.231, to: -2.51 } },
          { name: "Nicholas Randall", min: 9, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -3.54, zScores: { pts: -0.441, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.128, ftImpact: -0.665, to: 0.901 } },
          { name: "Trent Burns", min: 2, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.51, zScores: { pts: -0.851, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.413, ftImpact: 0, to: 0.048 } },
          { name: "Anthony Robinson II", min: 21, pts: 11, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 3, fta: 6, composite: -1.27, zScores: { pts: 0.378, reb: -0.806, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: 0.192, ftImpact: -1.994, to: 0.901 } },
          { name: "Jacob Crews", min: 14, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 4, fta: 5, composite: -4.22, zScores: { pts: -0.578, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0.473, to: 0.048 } }
        ]
      }
    },
      {
      id: "401825517",
      line: "Minnesota Golden Gophers 57 @ Washington Huskies 69 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Minn", name: "Minnesota Golden Gophers", score: 57,
        players: [
          { name: "Grayson Grove", min: 27, pts: 4, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 1, composite: -2.6, zScores: { pts: -0.578, reb: -0.11, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.221, ftImpact: -1.044, to: 0.901 } },
          { name: "Bobby Durkin", min: 40, pts: 13, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 1.05, zScores: { pts: 0.652, reb: -1.154, ast: -0.819, stl: 0.407, blk: -0.467, tpm: 1.718, fgImpact: 0.669, ftImpact: 0, to: 0.048 } },
          { name: "Isaac Asuma", min: 40, pts: 11, reb: 2, ast: 2, stl: 2, blk: 1, to: 6, tpm: 1, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: -1.55, zScores: { pts: 0.378, reb: -0.458, ast: 0.288, stl: 1.486, blk: 0.895, tpm: 0.105, fgImpact: -0.029, ftImpact: 0, to: -4.216 } },
          { name: "Cade Tyson", min: 40, pts: 22, reb: 9, ast: 2, stl: 3, blk: 0, to: 3, tpm: 3, fgm: 6, fga: 12, ftm: 7, fta: 8, composite: 8.3, zScores: { pts: 1.881, reb: 1.978, ast: 0.288, stl: 2.565, blk: -0.467, tpm: 1.718, fgImpact: 0.384, ftImpact: 1.61, to: -1.657 } },
          { name: "Langston Reynolds", min: 36, pts: 7, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 8, ftm: 1, fta: 2, composite: -3.08, zScores: { pts: -0.168, reb: -0.458, ast: 0.288, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.506, ftImpact: -0.665, to: -0.805 } },
          { name: "Maximus Gizzi", min: 10, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 1, composite: -4, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: -1.044, to: 0.901 } },
          { name: "Kai Shinholster", min: 7, pts: 0, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.1, zScores: { pts: -1.124, reb: -0.806, ast: -0.266, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -1.047, ftImpact: 0, to: 0.901 } }
        ]
      },
      home: {
        abbr: "Wash", name: "Washington Huskies", score: 69,
        players: [
          { name: "Hannes Steinbach", min: 39, pts: 26, reb: 9, ast: 2, stl: 3, blk: 2, to: 3, tpm: 0, fgm: 12, fga: 17, ftm: 2, fta: 3, composite: 10.08, zScores: { pts: 2.427, reb: 1.978, ast: 0.288, stl: 2.565, blk: 2.256, tpm: -0.702, fgImpact: 3.21, ftImpact: -0.285, to: -1.657 } },
          { name: "Franck Kepnang", min: 20, pts: 6, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 2, composite: -4.73, zScores: { pts: -0.305, reb: 0.238, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.89, ftImpact: -2.087, to: -0.805 } },
          { name: "Zoom Diallo", min: 30, pts: 17, reb: 3, ast: 4, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 7, fga: 8, ftm: 2, fta: 2, composite: 3.09, zScores: { pts: 1.198, reb: -0.11, ast: 1.396, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 2.542, ftImpact: 0.758, to: -1.657 } },
          { name: "Quimari Peterson", min: 37, pts: 5, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -0.53, zScores: { pts: -0.441, reb: -0.458, ast: 0.842, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -0.57, ftImpact: 0, to: 0.048 } },
          { name: "Wesley Yates III", min: 30, pts: 5, reb: 2, ast: 1, stl: 4, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: 1.94, zScores: { pts: -0.441, reb: -0.458, ast: -0.266, stl: 3.643, blk: -0.467, tpm: 0.105, fgImpact: -0.983, ftImpact: 0.758, to: 0.048 } },
          { name: "Nikola Dzepina", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -6.13, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: -2.087, to: 0.901 } },
          { name: "Jacob Ognacevic", min: 13, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -3.44, zScores: { pts: -0.578, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: 0.413, ftImpact: -0.665, to: 0.048 } },
          { name: "Lathan Sommerville", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.54, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "BJ Roy", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Courtland Muldrew", min: 22, pts: 6, reb: 5, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 1.55, zScores: { pts: -0.305, reb: 0.586, ast: -0.266, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: 0.89, ftImpact: 0, to: 0.048 } }
        ]
      }
    },
      {
      id: "401823781",
      line: "Nevada Wolf Pack 57 @ San Diego State Aztecs 71 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Nev", name: "Nevada Wolf Pack", score: 57,
        players: [
          { name: "Elijah Price", min: 34, pts: 17, reb: 10, ast: 1, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 7, ftm: 13, fta: 15, composite: 3.84, zScores: { pts: 1.198, reb: 2.326, ast: -0.266, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -0.919, ftImpact: 2.841, to: -1.657 } },
          { name: "Kaleb Lowery", min: 22, pts: 5, reb: 5, ast: 2, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.81, zScores: { pts: -0.441, reb: 0.586, ast: 0.288, stl: 0.407, blk: 0.895, tpm: 0.105, fgImpact: -0.221, ftImpact: 0, to: -0.805 } },
          { name: "Vaughn Weems", min: 29, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -4.22, zScores: { pts: -0.578, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.221, ftImpact: 0, to: 0.048 } },
          { name: "Corey Camper Jr.", min: 34, pts: 16, reb: 5, ast: 0, stl: 2, blk: 0, to: 3, tpm: 4, fgm: 6, fga: 15, ftm: 0, fta: 0, composite: 2.05, zScores: { pts: 1.061, reb: 0.586, ast: -0.819, stl: 1.486, blk: -0.467, tpm: 2.524, fgImpact: -0.663, ftImpact: 0, to: -1.657 } },
          { name: "Tayshawn Comer", min: 25, pts: 6, reb: 0, ast: 2, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 7, ftm: 1, fta: 4, composite: -7.53, zScores: { pts: -0.305, reb: -1.154, ast: 0.288, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.919, ftImpact: -2.752, to: -1.657 } },
          { name: "Joel Armotrading", min: 10, pts: 3, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -2.17, zScores: { pts: -0.715, reb: -0.11, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -0.285, ftImpact: -0.665, to: 0.901 } },
          { name: "Jeriah Coleman", min: 6, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.47, zScores: { pts: -0.578, reb: -0.11, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.826, ftImpact: 0, to: 0.048 } },
          { name: "Peyton White", min: 6, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.83, zScores: { pts: -1.124, reb: -1.154, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Myles Walker", min: 7, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Chuck Bailey III", min: 12, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -3.71, zScores: { pts: -0.851, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -1.047, ftImpact: 0.758, to: 0.901 } },
          { name: "Amire Robinson", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.89, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.048 } },
          { name: "Tyler Rolison", min: 8, pts: 0, reb: 0, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.02, zScores: { pts: -1.124, reb: -1.154, ast: -0.266, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.901 } }
        ]
      },
      home: {
        abbr: "SDSU", name: "San Diego State Aztecs", score: 71,
        players: [
          { name: "Miles Heide", min: 17, pts: 2, reb: 7, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.04, zScores: { pts: -0.851, reb: 1.282, ast: -0.819, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.064, ftImpact: 0, to: 0.048 } },
          { name: "Jeremiah Oden", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Reese Dixon-Waters", min: 32, pts: 20, reb: 2, ast: 1, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 7, fga: 14, ftm: 4, fta: 4, composite: 2.04, zScores: { pts: 1.608, reb: -0.458, ast: -0.266, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: 0.448, ftImpact: 1.516, to: -1.657 } },
          { name: "BJ Davis", min: 27, pts: 14, reb: 4, ast: 5, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 12, ftm: 4, fta: 4, composite: 2.32, zScores: { pts: 0.788, reb: 0.238, ast: 1.95, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -1.14, ftImpact: 1.516, to: -0.805 } },
          { name: "Miles Byrd", min: 30, pts: 4, reb: 5, ast: 2, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 2, fta: 3, composite: 0.98, zScores: { pts: -0.578, reb: 0.586, ast: 0.288, stl: 2.565, blk: 0.895, tpm: -0.702, fgImpact: -0.983, ftImpact: -0.285, to: -0.805 } },
          { name: "Tae Simmons", min: 20, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -2.49, zScores: { pts: -0.305, reb: -0.458, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.89, ftImpact: 0, to: 0.048 } },
          { name: "Magoon Gwath", min: 13, pts: 13, reb: 3, ast: 1, stl: 0, blk: 5, to: 0, tpm: 3, fgm: 3, fga: 3, ftm: 4, fta: 4, composite: 11.32, zScores: { pts: 0.652, reb: -0.11, ast: -0.266, stl: -0.671, blk: 6.34, tpm: 1.718, fgImpact: 1.239, ftImpact: 1.516, to: 0.901 } },
          { name: "Pharaoh Compton", min: 14, pts: 9, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 3, fta: 3, composite: 0.93, zScores: { pts: 0.105, reb: -0.458, ast: -0.819, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.541, ftImpact: 1.137, to: 0.901 } },
          { name: "Sean Newman Jr.", min: 17, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.124, reb: -0.806, ast: 0.288, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.048 } },
          { name: "Taj DeGourville", min: 23, pts: 3, reb: 1, ast: 4, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: 2.28, zScores: { pts: -0.715, reb: -0.806, ast: 1.396, stl: 1.486, blk: 0.895, tpm: 0.105, fgImpact: -0.983, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401809099",
      line: "UC Riverside Highlanders 66 @ UC San Diego Tritons 72 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UCR", name: "UC Riverside Highlanders", score: 66,
        players: [

        ]
      },
      home: {
        abbr: "UCSD", name: "UC San Diego Tritons", score: 72,
        players: [
          { name: "Leo Beath", min: 29, pts: 7, reb: 1, ast: 3, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: 0.73, zScores: { pts: -0.168, reb: -0.806, ast: 0.842, stl: 0.407, blk: -0.467, tpm: 0.911, fgImpact: -0.221, ftImpact: -0.665, to: 0.901 } },
          { name: "Bol Dengdit", min: 27, pts: 16, reb: 8, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 16, ftm: 3, fta: 4, composite: 1.85, zScores: { pts: 1.061, reb: 1.63, ast: 0.842, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: -1.012, ftImpact: 0.094, to: -0.805 } },
          { name: "Hudson Mayes", min: 35, pts: 24, reb: 7, ast: 4, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 12, ftm: 9, fta: 9, composite: 9.48, zScores: { pts: 2.154, reb: 1.282, ast: 1.396, stl: 0.407, blk: -0.467, tpm: 0.105, fgImpact: 1.146, ftImpact: 3.412, to: 0.048 } },
          { name: "Alex Chaikin", min: 25, pts: 3, reb: 0, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -1.54, zScores: { pts: -0.715, reb: -1.154, ast: -0.266, stl: -0.671, blk: 0.895, tpm: 0.105, fgImpact: -0.634, ftImpact: 0, to: 0.901 } },
          { name: "Tom Beattie", min: 34, pts: 7, reb: 8, ast: 4, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 10, ftm: 1, fta: 3, composite: -1.62, zScores: { pts: -0.168, reb: 1.63, ast: 1.396, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: -1.204, ftImpact: -1.708, to: -0.805 } },
          { name: "Jaden Vance", min: 12, pts: 2, reb: 2, ast: 1, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -3.62, zScores: { pts: -0.851, reb: -0.458, ast: -0.266, stl: 0.407, blk: 0.895, tpm: -0.702, fgImpact: -0.983, ftImpact: 0, to: -1.657 } },
          { name: "Dimitrije Vukicevic", min: 11, pts: 11, reb: 6, ast: 0, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 7, ftm: 1, fta: 2, composite: 0.71, zScores: { pts: 0.378, reb: 0.934, ast: -0.819, stl: 1.486, blk: -0.467, tpm: -0.702, fgImpact: 1.367, ftImpact: -0.665, to: -0.805 } },
          { name: "Trap Johnson", min: 8, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.65, zScores: { pts: -1.124, reb: 0.238, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0, ftImpact: 0, to: 0.901 } },
          { name: "Aidan Burke", min: 18, pts: 2, reb: 1, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.61, zScores: { pts: -0.851, reb: -0.806, ast: 0.842, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.064, ftImpact: 0, to: 0.901 } }
        ]
      }
    },
      {
      id: "401829248",
      line: "Saint Mary's Gaels 72 @ Pacific Tigers 61 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "StMar", name: "Saint Mary's Gaels", score: 72,
        players: [
          { name: "Paulius Murauskas", min: 37, pts: 32, reb: 15, ast: 3, stl: 1, blk: 1, to: 2, tpm: 3, fgm: 11, fga: 16, ftm: 7, fta: 8, composite: 14.78, zScores: { pts: 3.247, reb: 4.066, ast: 0.842, stl: 0.407, blk: 0.895, tpm: 1.718, fgImpact: 2.798, ftImpact: 1.61, to: -0.805 } },
          { name: "Harry Wessels", min: 15, pts: 4, reb: 2, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: 0.05, zScores: { pts: -0.578, reb: -0.458, ast: -0.819, stl: -0.671, blk: 2.256, tpm: -0.702, fgImpact: -0.634, ftImpact: 0.758, to: 0.901 } },
          { name: "Dillan Shaw", min: 40, pts: 2, reb: 4, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 8, ftm: 0, fta: 0, composite: -1.93, zScores: { pts: -0.851, reb: 0.238, ast: 0.288, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: -2.03, ftImpact: 0, to: 0.901 } },
          { name: "Mikey Lewis", min: 32, pts: 10, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 12, ftm: 0, fta: 0, composite: -1.3, zScores: { pts: 0.242, reb: -0.806, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -1.14, ftImpact: 0, to: 0.901 } },
          { name: "Joshua Dent", min: 40, pts: 15, reb: 3, ast: 8, stl: 5, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 17, ftm: 0, fta: 0, composite: 9.09, zScores: { pts: 0.925, reb: -0.11, ast: 3.611, stl: 4.722, blk: -0.467, tpm: 1.718, fgImpact: -1.361, ftImpact: 0, to: 0.048 } },
          { name: "Andrew McKeever", min: 25, pts: 9, reb: 7, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 3, fta: 4, composite: 2.35, zScores: { pts: 0.105, reb: 1.282, ast: 1.396, stl: 0.407, blk: -0.467, tpm: -0.702, fgImpact: 0.192, ftImpact: 0.094, to: 0.048 } },
          { name: "Mantas Juzenas", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.349, ftImpact: 0, to: 0.901 } },
          { name: "Liam Campbell", min: 8, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.124, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.698, ftImpact: 0, to: 0.901 } }
        ]
      },
      home: {
        abbr: "Pacif", name: "Pacific Tigers", score: 61,
        players: [
          { name: "Elias Ralph", min: 39, pts: 17, reb: 12, ast: 4, stl: 1, blk: 2, to: 2, tpm: 3, fgm: 5, fga: 15, ftm: 4, fta: 4, composite: 9.28, zScores: { pts: 1.198, reb: 3.022, ast: 1.396, stl: 0.407, blk: 2.256, tpm: 1.718, fgImpact: -1.425, ftImpact: 1.516, to: -0.805 } },
          { name: "Isaac Jack", min: 23, pts: 4, reb: 3, ast: 1, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -4.68, zScores: { pts: -0.578, reb: -0.11, ast: -0.266, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: -0.983, ftImpact: 0.758, to: -1.657 } },
          { name: "Jaden Clayton", min: 30, pts: 12, reb: 5, ast: 7, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 5, fga: 11, ftm: 0, fta: 1, composite: 0.35, zScores: { pts: 0.515, reb: 0.586, ast: 3.058, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.029, ftImpact: -1.044, to: -2.51 } },
          { name: "Justin Rochelin", min: 21, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -6.17, zScores: { pts: -0.715, reb: -0.806, ast: -0.819, stl: -0.671, blk: -0.467, tpm: 0.105, fgImpact: -0.285, ftImpact: 0, to: -2.51 } },
          { name: "TJ Wainwright", min: 39, pts: 12, reb: 7, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 2.02, zScores: { pts: 0.515, reb: 1.282, ast: -0.266, stl: -0.671, blk: -0.467, tpm: 0.911, fgImpact: -0.093, ftImpact: 0.758, to: 0.048 } },
          { name: "Jaion Pitt", min: 19, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.67, zScores: { pts: -0.578, reb: -1.154, ast: -0.819, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.826, ftImpact: 0, to: 0.901 } },
          { name: "KC Ibekwe", min: 17, pts: 7, reb: 1, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: -2.14, zScores: { pts: -0.168, reb: -0.806, ast: -0.266, stl: -0.671, blk: 0.895, tpm: -0.702, fgImpact: 0.192, ftImpact: -0.665, to: 0.048 } },
          { name: "Kajus Kublickas", min: 12, pts: 2, reb: 4, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.65, zScores: { pts: -0.851, reb: 0.238, ast: 0.842, stl: -0.671, blk: -0.467, tpm: -0.702, fgImpact: 0.064, ftImpact: 0, to: 0.901 } }
        ]
      }
    }
    ]
  }
  }
};
