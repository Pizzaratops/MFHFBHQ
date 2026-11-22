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
  "nba": {
    "2026-11-08": {
    games: [
      {
      id: "401909945",
      line: "Philadelphia 76ers 127 @ Chicago Bulls 121 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PHI", name: "Philadelphia 76ers", score: 127,
        players: [
          { name: "LeBron James", min: 33, pts: 22, reb: 5, ast: 5, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 8, fga: 16, ftm: 4, fta: 5, composite: 2.33, zScores: { pts: 1.424, reb: 0.451, ast: 1.091, stl: 0.363, blk: -0.476, tpm: 0.567, fgImpact: 0.224, ftImpact: 0.045, to: -1.357 } },
          { name: "Joel Embiid", min: 29, pts: 18, reb: 10, ast: 5, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 7, fga: 19, ftm: 4, fta: 4, composite: 3.25, zScores: { pts: 0.947, reb: 2.038, ast: 1.091, stl: 1.488, blk: -0.476, tpm: -0.776, fgImpact: -1.65, ftImpact: 1.173, to: -0.582 } },
          { name: "Jaylen Brown", min: 35, pts: 29, reb: 7, ast: 4, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 11, fga: 22, ftm: 5, fta: 8, composite: 3.08, zScores: { pts: 2.259, reb: 1.086, ast: 0.696, stl: 0.363, blk: -0.476, tpm: 0.567, fgImpact: 0.309, ftImpact: -1.918, to: 0.193 } },
          { name: "Tyrese Maxey", min: 36, pts: 27, reb: 4, ast: 7, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 9, fga: 16, ftm: 6, fta: 6, composite: 6.98, zScores: { pts: 2.021, reb: 0.134, ast: 1.881, stl: -0.762, blk: -0.476, tpm: 1.239, fgImpact: 0.991, ftImpact: 1.759, to: 0.193 } },
          { name: "VJ Edgecombe", min: 35, pts: 13, reb: 6, ast: 3, stl: 3, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 10, ftm: 2, fta: 2, composite: 5.72, zScores: { pts: 0.35, reb: 0.769, ast: 0.302, stl: 2.613, blk: -0.476, tpm: 1.239, fgImpact: -0.626, ftImpact: 0.586, to: 0.968 } },
          { name: "Dean Wade", min: 18, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.202, reb: -0.818, ast: -0.488, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0, ftImpact: 0, to: 0.968 } },
          { name: "Jabari Walker", min: 19, pts: 9, reb: 11, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 1.08, zScores: { pts: -0.127, reb: 2.355, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.104, fgImpact: 0.112, ftImpact: 0, to: 0.968 } },
          { name: "Kentavious Caldwell-Pope", min: 21, pts: 6, reb: 6, ast: 3, stl: 1, blk: 2, to: 1, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 4.17, zScores: { pts: -0.486, reb: 0.769, ast: 0.302, stl: 0.363, blk: 2.038, tpm: 0.567, fgImpact: 0.425, ftImpact: 0, to: 0.193 } },
          { name: "Anfernee Simons", min: 16, pts: 3, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -3.03, zScores: { pts: -0.844, reb: 0.134, ast: -0.093, stl: -0.762, blk: -0.476, tpm: -0.104, fgImpact: -1.08, ftImpact: 0, to: 0.193 } }
        ]
      },
      home: {
        abbr: "CHI", name: "Chicago Bulls", score: 121,
        players: [
          { name: "Jalen Smith", min: 30, pts: 17, reb: 8, ast: 2, stl: 0, blk: 4, to: 0, tpm: 2, fgm: 7, fga: 11, ftm: 1, fta: 2, composite: 7.93, zScores: { pts: 0.827, reb: 1.403, ast: -0.093, stl: -0.762, blk: 4.552, tpm: 0.567, fgImpact: 1.304, ftImpact: -0.835, to: 0.968 } },
          { name: "Isaac Okoro", min: 25, pts: 12, reb: 2, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 5, ftm: 4, fta: 5, composite: -0.96, zScores: { pts: 0.231, reb: -0.501, ast: -0.488, stl: 0.363, blk: -0.476, tpm: -0.776, fgImpact: 1.22, ftImpact: 0.045, to: -0.582 } },
          { name: "Matas Buzelis", min: 31, pts: 19, reb: 5, ast: 2, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 6, fga: 10, ftm: 4, fta: 4, composite: 5.73, zScores: { pts: 1.066, reb: 0.451, ast: -0.093, stl: -0.762, blk: 0.781, tpm: 1.239, fgImpact: 0.907, ftImpact: 1.173, to: 0.968 } },
          { name: "Caleb Wilson", min: 32, pts: 18, reb: 5, ast: 0, stl: 2, blk: 0, to: 3, tpm: 2, fgm: 7, fga: 18, ftm: 2, fta: 2, composite: 0.04, zScores: { pts: 0.947, reb: 0.451, ast: -0.883, stl: 1.488, blk: -0.476, tpm: 0.567, fgImpact: -1.281, ftImpact: 0.586, to: -1.357 } },
          { name: "Josh Giddey", min: 34, pts: 19, reb: 7, ast: 15, stl: 1, blk: 0, to: 5, tpm: 1, fgm: 7, fga: 12, ftm: 4, fta: 5, composite: 5.05, zScores: { pts: 1.066, reb: 1.086, ast: 5.039, stl: 0.363, blk: -0.476, tpm: -0.104, fgImpact: 0.935, ftImpact: 0.045, to: -2.907 } },
          { name: "Patrick Williams", min: 25, pts: 7, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -0.56, zScores: { pts: -0.366, reb: -0.183, ast: 0.302, stl: 0.363, blk: -0.476, tpm: -0.104, fgImpact: -0.285, ftImpact: 0, to: 0.193 } },
          { name: "Noa Essengue", min: 15, pts: 10, reb: 7, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 4, fta: 5, composite: -0.7, zScores: { pts: -0.008, reb: 1.086, ast: -0.488, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: -0.285, ftImpact: 0.045, to: 0.968 } },
          { name: "Nic Claxton", min: 18, pts: 4, reb: 4, ast: 4, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 1.22, zScores: { pts: -0.724, reb: 0.134, ast: 0.696, stl: -0.762, blk: 2.038, tpm: -0.776, fgImpact: 0.425, ftImpact: 0, to: 0.193 } },
          { name: "Tre Jones", min: 14, pts: 6, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -3.14, zScores: { pts: -0.486, reb: -0.818, ast: -0.488, stl: 0.363, blk: -0.476, tpm: -0.776, fgImpact: -0.654, ftImpact: 0, to: 0.193 } },
          { name: "Jordan Hawkins", min: 17, pts: 9, reb: 0, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -0.39, zScores: { pts: -0.127, reb: -1.135, ast: -0.488, stl: -0.762, blk: 0.781, tpm: -0.104, fgImpact: 0.482, ftImpact: 0, to: 0.968 } }
        ]
      }
    },
      {
      id: "401909946",
      line: "Los Angeles Lakers 121 @ Detroit Pistons 116 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LAL", name: "Los Angeles Lakers", score: 121,
        players: [
          { name: "Jake LaRavia", min: 29, pts: 5, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 4, composite: -3.15, zScores: { pts: -0.605, reb: -0.818, ast: -0.093, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: -0.341, ftImpact: -0.248, to: 0.968 } },
          { name: "Walker Kessler", min: 29, pts: 12, reb: 16, ast: 4, stl: 1, blk: 3, to: 4, tpm: 0, fgm: 5, fga: 10, ftm: 2, fta: 3, composite: 5.22, zScores: { pts: 0.231, reb: 3.941, ast: 0.696, stl: 0.363, blk: 3.295, tpm: -0.776, fgImpact: 0.14, ftImpact: -0.542, to: -2.132 } },
          { name: "Matisse Thybulle", min: 28, pts: 4, reb: 2, ast: 0, stl: 4, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 1.03, zScores: { pts: -0.724, reb: -0.501, ast: -0.883, stl: 3.738, blk: -0.476, tpm: -0.776, fgImpact: -0.313, ftImpact: 0, to: 0.968 } },
          { name: "Austin Reaves", min: 37, pts: 43, reb: 5, ast: 4, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 14, fga: 27, ftm: 11, fta: 11, composite: 9.93, zScores: { pts: 3.93, reb: 0.451, ast: 0.696, stl: -0.762, blk: -0.476, tpm: 1.91, fgImpact: 0.762, ftImpact: 3.226, to: 0.193 } },
          { name: "Quentin Grimes", min: 32, pts: 12, reb: 1, ast: 4, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 4, fga: 12, ftm: 2, fta: 4, composite: -1.8, zScores: { pts: 0.231, reb: -0.818, ast: 0.696, stl: 0.363, blk: 0.781, tpm: 0.567, fgImpact: -1.365, ftImpact: -1.67, to: -0.582 } },
          { name: "Jarred Vanderbilt", min: 14, pts: 2, reb: 10, ast: 3, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 1, composite: -0.69, zScores: { pts: -0.963, reb: 2.038, ast: 0.302, stl: -0.762, blk: 0.781, tpm: -0.776, fgImpact: 0.397, ftImpact: -1.128, to: -0.582 } },
          { name: "Sandro Mamukelashvili", min: 18, pts: 7, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -2.9, zScores: { pts: -0.366, reb: -0.183, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.104, fgImpact: 0.453, ftImpact: 0, to: -0.582 } },
          { name: "Ziaire Williams", min: 21, pts: 17, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 4, fgm: 6, fga: 10, ftm: 1, fta: 2, composite: 2.41, zScores: { pts: 0.827, reb: -0.501, ast: -0.883, stl: -0.762, blk: 0.781, tpm: 1.91, fgImpact: 0.907, ftImpact: -0.835, to: 0.968 } },
          { name: "Adou Thiero", min: 8, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.77, zScores: { pts: -0.963, reb: -0.501, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0.397, ftImpact: 0, to: 0.193 } },
          { name: "Collin Sexton", min: 24, pts: 17, reb: 2, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 10, ftm: 7, fta: 8, composite: -1.3, zScores: { pts: 0.827, reb: -0.501, ast: -0.093, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0.14, ftImpact: 0.925, to: -0.582 } }
        ]
      },
      home: {
        abbr: "DET", name: "Detroit Pistons", score: 116,
        players: [
          { name: "Duncan Robinson", min: 27, pts: 12, reb: 0, ast: 3, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 12, ftm: 1, fta: 2, composite: -2.61, zScores: { pts: 0.231, reb: -1.135, ast: 0.302, stl: -0.762, blk: -0.476, tpm: 1.239, fgImpact: -1.365, ftImpact: -0.835, to: 0.193 } },
          { name: "John Collins", min: 32, pts: 8, reb: 4, ast: 1, stl: 1, blk: 2, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 1, fta: 2, composite: 0.77, zScores: { pts: -0.247, reb: 0.134, ast: -0.488, stl: 0.363, blk: 2.038, tpm: -0.104, fgImpact: -0.285, ftImpact: -0.835, to: 0.193 } },
          { name: "Paul Reed", min: 20, pts: 8, reb: 10, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 8, ftm: 0, fta: 2, composite: -3.83, zScores: { pts: -0.247, reb: 2.038, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0.112, ftImpact: -2.256, to: -0.582 } },
          { name: "Cade Cunningham", min: 38, pts: 14, reb: 4, ast: 8, stl: 2, blk: 0, to: 4, tpm: 1, fgm: 6, fga: 15, ftm: 1, fta: 2, composite: -0.12, zScores: { pts: 0.469, reb: 0.134, ast: 2.276, stl: 1.488, blk: -0.476, tpm: -0.104, fgImpact: -0.939, ftImpact: -0.835, to: -2.132 } },
          { name: "Ausar Thompson", min: 24, pts: 7, reb: 11, ast: 3, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 9, ftm: 1, fta: 2, composite: -1.04, zScores: { pts: -0.366, reb: 2.355, ast: 0.302, stl: 0.363, blk: -0.476, tpm: -0.776, fgImpact: -1.024, ftImpact: -0.835, to: -0.582 } },
          { name: "Ronald Holland II", min: 14, pts: 5, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -2.46, zScores: { pts: -0.605, reb: -0.501, ast: -0.488, stl: -0.762, blk: -0.476, tpm: -0.104, fgImpact: -1.08, ftImpact: 0.586, to: 0.968 } },
          { name: "Javonte Green", min: 17, pts: 7, reb: 2, ast: 2, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 1.76, zScores: { pts: -0.366, reb: -0.501, ast: -0.093, stl: 2.613, blk: -0.476, tpm: -0.104, fgImpact: -0.285, ftImpact: 0, to: 0.968 } },
          { name: "Kevin Huerter", min: 35, pts: 24, reb: 5, ast: 5, stl: 2, blk: 5, to: 1, tpm: 4, fgm: 9, fga: 14, ftm: 2, fta: 3, composite: 13.79, zScores: { pts: 1.663, reb: 0.451, ast: 1.091, stl: 1.488, blk: 5.809, tpm: 1.91, fgImpact: 1.73, ftImpact: -0.542, to: 0.193 } },
          { name: "Daniss Jenkins", min: 32, pts: 31, reb: 5, ast: 4, stl: 1, blk: 0, to: 1, tpm: 8, fgm: 9, fga: 17, ftm: 5, fta: 5, composite: 10.41, zScores: { pts: 2.498, reb: 0.451, ast: 0.696, stl: 0.363, blk: -0.476, tpm: 4.596, fgImpact: 0.622, ftImpact: 1.466, to: 0.193 } }
        ]
      }
    },
      {
      id: "401909947",
      line: "Utah Jazz 100 @ Minnesota Timberwolves 115 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UTAH", name: "Utah Jazz", score: 100,
        players: [
          { name: "Jaxson Hayes", min: 29, pts: 18, reb: 6, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 6, fga: 6, ftm: 6, fta: 7, composite: 2.9, zScores: { pts: 0.947, reb: 0.769, ast: -0.488, stl: -0.762, blk: 0.781, tpm: -0.776, fgImpact: 2.384, ftImpact: 0.631, to: -0.582 } },
          { name: "Josh Green", min: 28, pts: 10, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 3, fta: 5, composite: -3.3, zScores: { pts: -0.008, reb: -1.135, ast: -0.488, stl: -0.762, blk: -0.476, tpm: -0.104, fgImpact: 0.084, ftImpact: -1.377, to: 0.968 } },
          { name: "Keyonte George", min: 30, pts: 19, reb: 5, ast: 8, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 13, ftm: 9, fta: 10, composite: 3.99, zScores: { pts: 1.066, reb: 0.451, ast: 2.276, stl: 1.488, blk: -0.476, tpm: -0.776, fgImpact: -0.968, ftImpact: 1.511, to: -0.582 } },
          { name: "Ace Bailey", min: 32, pts: 7, reb: 2, ast: 3, stl: 4, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 0.99, zScores: { pts: -0.366, reb: -0.501, ast: 0.302, stl: 3.738, blk: -0.476, tpm: -0.104, fgImpact: -1.024, ftImpact: 0, to: -0.582 } },
          { name: "Darryn Peterson", min: 35, pts: 26, reb: 6, ast: 4, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 11, fga: 21, ftm: 0, fta: 0, composite: 4.48, zScores: { pts: 1.901, reb: 0.769, ast: 0.696, stl: 0.363, blk: -0.476, tpm: 1.91, fgImpact: 0.678, ftImpact: 0, to: -1.357 } },
          { name: "Kyle Filipowski", min: 15, pts: 9, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: -1.62, zScores: { pts: -0.127, reb: 0.769, ast: -0.488, stl: -0.762, blk: -0.476, tpm: -0.104, fgImpact: -0.626, ftImpact: 0, to: 0.193 } },
          { name: "Brice Sensabaugh", min: 13, pts: 2, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 10, ftm: 0, fta: 0, composite: -4.88, zScores: { pts: -0.963, reb: -0.183, ast: -0.883, stl: 0.363, blk: -0.476, tpm: -0.776, fgImpact: -2.926, ftImpact: 0, to: 0.968 } },
          { name: "Tony Bradley", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.95, zScores: { pts: -1.202, reb: -0.818, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0, ftImpact: 0, to: 0.968 } },
          { name: "Mo Bamba", min: 17, pts: 3, reb: 3, ast: 1, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: 0.64, zScores: { pts: -0.844, reb: -0.183, ast: -0.488, stl: 0.363, blk: 2.038, tpm: -0.776, fgImpact: 0.397, ftImpact: -0.835, to: 0.968 } },
          { name: "Svi Mykhailiuk", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5, zScores: { pts: -1.202, reb: -1.135, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: -0.739, ftImpact: 0, to: 0.968 } },
          { name: "Josh Okogie", min: 17, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.71, zScores: { pts: -1.202, reb: -0.818, ast: -0.883, stl: 0.363, blk: -0.476, tpm: -0.776, fgImpact: -1.108, ftImpact: 0, to: 0.193 } },
          { name: "Isaiah Collier", min: 16, pts: 6, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -2.96, zScores: { pts: -0.486, reb: 0.134, ast: -0.093, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0.084, ftImpact: 0, to: -0.582 } }
        ]
      },
      home: {
        abbr: "MIN", name: "Minnesota Timberwolves", score: 115,
        players: [
          { name: "Jaden McDaniels", min: 33, pts: 16, reb: 6, ast: 3, stl: 1, blk: 1, to: 4, tpm: 2, fgm: 5, fga: 9, ftm: 4, fta: 4, composite: 3.04, zScores: { pts: 0.708, reb: 0.769, ast: 0.302, stl: 0.363, blk: 0.781, tpm: 0.567, fgImpact: 0.51, ftImpact: 1.173, to: -2.132 } },
          { name: "Jonathan Kuminga", min: 25, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -6.43, zScores: { pts: -0.724, reb: -1.135, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: -0.313, ftImpact: 0, to: -1.357 } },
          { name: "Rudy Gobert", min: 31, pts: 10, reb: 15, ast: 2, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 4, ftm: 2, fta: 4, composite: 0.07, zScores: { pts: -0.008, reb: 3.624, ast: -0.093, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 1.589, ftImpact: -1.67, to: -1.357 } },
          { name: "Ayo Dosunmu", min: 30, pts: 26, reb: 4, ast: 1, stl: 2, blk: 0, to: 5, tpm: 4, fgm: 7, fga: 13, ftm: 8, fta: 8, composite: 4.47, zScores: { pts: 1.901, reb: 0.134, ast: -0.488, stl: 1.488, blk: -0.476, tpm: 1.91, fgImpact: 0.566, ftImpact: 2.346, to: -2.907 } },
          { name: "LaMelo Ball", min: 30, pts: 24, reb: 3, ast: 5, stl: 2, blk: 0, to: 5, tpm: 4, fgm: 10, fga: 20, ftm: 0, fta: 0, composite: 2.87, zScores: { pts: 1.663, reb: -0.183, ast: 1.091, stl: 1.488, blk: -0.476, tpm: 1.91, fgImpact: 0.281, ftImpact: 0, to: -2.907 } },
          { name: "Trey Lyles", min: 21, pts: 9, reb: 6, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 2, fta: 3, composite: 0.84, zScores: { pts: -0.127, reb: 0.769, ast: -0.093, stl: 0.363, blk: -0.476, tpm: -0.104, fgImpact: 0.084, ftImpact: -0.542, to: 0.968 } },
          { name: "Cody Williams", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.202, reb: -1.135, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0, ftImpact: 0, to: 0.968 } },
          { name: "Isaiah Evans", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.202, reb: -1.135, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0, ftImpact: 0, to: 0.968 } },
          { name: "Joan Beringer", min: 16, pts: 4, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.93, zScores: { pts: -0.724, reb: -0.183, ast: -0.883, stl: -0.762, blk: 0.781, tpm: -0.776, fgImpact: 0.425, ftImpact: 0, to: 0.193 } },
          { name: "Rocco Zikarsky", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.72, zScores: { pts: -1.202, reb: -0.818, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0, ftImpact: 0, to: 0.193 } },
          { name: "Jaylen Clark", min: 19, pts: 3, reb: 2, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 3, fta: 3, composite: -0.88, zScores: { pts: -0.844, reb: -0.501, ast: -0.883, stl: 1.488, blk: -0.476, tpm: -0.776, fgImpact: -0.739, ftImpact: 0.88, to: 0.968 } },
          { name: "Terrence Shannon Jr.", min: 18, pts: 5, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 7, ftm: 3, fta: 4, composite: -3.6, zScores: { pts: -0.605, reb: -0.183, ast: 0.302, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: -1.818, ftImpact: -0.248, to: 0.968 } },
          { name: "Bones Hyland", min: 13, pts: 14, reb: 2, ast: 2, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 4, fga: 8, ftm: 5, fta: 6, composite: 1.21, zScores: { pts: 0.469, reb: -0.501, ast: -0.093, stl: -0.762, blk: 0.781, tpm: -0.104, fgImpact: 0.112, ftImpact: 0.338, to: 0.968 } }
        ]
      }
    },
      {
      id: "401909948",
      line: "Brooklyn Nets 93 @ Dallas Mavericks 130 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BKN", name: "Brooklyn Nets", score: 93,
        players: [
          { name: "Julius Randle", min: 30, pts: 13, reb: 4, ast: 4, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 5, fga: 10, ftm: 3, fta: 6, composite: -3.3, zScores: { pts: 0.35, reb: 0.134, ast: 0.696, stl: -0.762, blk: 0.781, tpm: -0.776, fgImpact: 0.14, ftImpact: -2.505, to: -1.357 } },
          { name: "Michael Porter Jr.", min: 29, pts: 19, reb: 9, ast: 0, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 5, fga: 15, ftm: 5, fta: 7, composite: -0.15, zScores: { pts: 1.066, reb: 1.72, ast: -0.883, stl: 0.363, blk: -0.476, tpm: 1.91, fgImpact: -1.706, ftImpact: -0.79, to: -1.357 } },
          { name: "Danny Wolf", min: 36, pts: 10, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 5, fta: 6, composite: -1.02, zScores: { pts: -0.008, reb: -0.183, ast: -0.093, stl: 0.363, blk: -0.476, tpm: -0.104, fgImpact: -1.052, ftImpact: 0.338, to: 0.193 } },
          { name: "Day'Ron Sharpe", min: 20, pts: 6, reb: 4, ast: 6, stl: 2, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: 4.35, zScores: { pts: -0.486, reb: 0.134, ast: 1.486, stl: 1.488, blk: 2.038, tpm: -0.776, fgImpact: -0.313, ftImpact: 0.586, to: 0.193 } },
          { name: "Nolan Traore", min: 21, pts: 14, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 15, ftm: 0, fta: 0, composite: -1.86, zScores: { pts: 0.469, reb: -0.818, ast: -0.093, stl: -0.762, blk: -0.476, tpm: 0.567, fgImpact: -0.939, ftImpact: 0, to: 0.193 } },
          { name: "Josh Minott", min: 12, pts: 10, reb: 2, ast: 1, stl: 2, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 2.18, zScores: { pts: -0.008, reb: -0.501, ast: -0.488, stl: 1.488, blk: 0.781, tpm: 0.567, fgImpact: -0.626, ftImpact: 0, to: 0.968 } },
          { name: "Noah Clowney", min: 8, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -5.14, zScores: { pts: -0.963, reb: -1.135, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: -0.341, ftImpact: 0, to: 0.193 } },
          { name: "Chaney Johnson", min: 15, pts: 2, reb: 0, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -4.21, zScores: { pts: -0.963, reb: -1.135, ast: -0.488, stl: 0.363, blk: -0.476, tpm: -0.776, fgImpact: -0.739, ftImpact: 0.586, to: -0.582 } },
          { name: "Moritz Wagner", min: 16, pts: 12, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 5, ftm: 3, fta: 5, composite: -1.75, zScores: { pts: 0.231, reb: -0.183, ast: -0.488, stl: -0.762, blk: -0.476, tpm: -0.104, fgImpact: 1.22, ftImpact: -1.377, to: 0.193 } },
          { name: "Terance Mann", min: 22, pts: 0, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.17, zScores: { pts: -1.202, reb: -0.818, ast: -0.488, stl: 0.363, blk: -0.476, tpm: -0.776, fgImpact: -0.739, ftImpact: 0, to: 0.968 } },
          { name: "Keon Ellis", min: 22, pts: 3, reb: 1, ast: 4, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -1.7, zScores: { pts: -0.844, reb: -0.818, ast: 0.696, stl: 0.363, blk: -0.476, tpm: -0.104, fgImpact: -0.71, ftImpact: 0, to: 0.193 } },
          { name: "Drake Powell", min: 9, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.52, zScores: { pts: -0.963, reb: -0.501, ast: -0.488, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0.028, ftImpact: 0, to: -0.582 } }
        ]
      },
      home: {
        abbr: "DAL", name: "Dallas Mavericks", score: 130,
        players: [
          { name: "Caleb Martin", min: 19, pts: 2, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.72, zScores: { pts: -0.963, reb: -0.501, ast: -0.093, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: -0.341, ftImpact: 0, to: 0.193 } },
          { name: "Daniel Gafford", min: 19, pts: 18, reb: 5, ast: 2, stl: 0, blk: 3, to: 1, tpm: 0, fgm: 7, fga: 8, ftm: 4, fta: 6, composite: 4.58, zScores: { pts: 0.947, reb: 0.451, ast: -0.093, stl: -0.762, blk: 3.295, tpm: -0.776, fgImpact: 2.412, ftImpact: -1.083, to: 0.193 } },
          { name: "P.J. Washington", min: 25, pts: 6, reb: 5, ast: 0, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.64, zScores: { pts: -0.486, reb: 0.451, ast: -0.883, stl: 0.363, blk: 0.781, tpm: 0.567, fgImpact: 0.425, ftImpact: 0, to: -0.582 } },
          { name: "Cooper Flagg", min: 28, pts: 25, reb: 5, ast: 12, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 8, fga: 13, ftm: 6, fta: 6, composite: 8.95, zScores: { pts: 1.782, reb: 0.451, ast: 3.855, stl: 0.363, blk: -0.476, tpm: 1.239, fgImpact: 1.332, ftImpact: 1.759, to: -1.357 } },
          { name: "Kyrie Irving", min: 29, pts: 21, reb: 3, ast: 4, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 9, fga: 15, ftm: 1, fta: 1, composite: 2.57, zScores: { pts: 1.305, reb: -0.183, ast: 0.696, stl: 0.363, blk: -0.476, tpm: 0.567, fgImpact: 1.36, ftImpact: 0.293, to: -1.357 } },
          { name: "Naji Marshall", min: 15, pts: 8, reb: 1, ast: 2, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 6, ftm: 1, fta: 1, composite: -2.36, zScores: { pts: -0.247, reb: -0.818, ast: -0.093, stl: 0.363, blk: -0.476, tpm: -0.104, fgImpact: 0.084, ftImpact: 0.293, to: -1.357 } },
          { name: "Santi Aldama", min: 15, pts: 12, reb: 2, ast: 0, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: -0.81, zScores: { pts: 0.231, reb: -0.501, ast: -0.883, stl: 0.363, blk: -0.476, tpm: 0.567, fgImpact: 1.248, ftImpact: 0, to: -1.357 } },
          { name: "Morez Johnson Jr.", min: 19, pts: 4, reb: 9, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 7, ftm: 2, fta: 2, composite: -1.77, zScores: { pts: -0.724, reb: 1.72, ast: -0.488, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: -1.818, ftImpact: 0.586, to: 0.968 } },
          { name: "Tobi Lawal", min: 5, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.63, zScores: { pts: -0.963, reb: -1.135, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0.397, ftImpact: 0, to: 0.968 } },
          { name: "Zaccharie Risacher", min: 16, pts: 11, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 0.12, zScores: { pts: 0.111, reb: 0.769, ast: -0.488, stl: -0.762, blk: -0.476, tpm: -0.104, fgImpact: 0.879, ftImpact: 0, to: 0.193 } },
          { name: "Moussa Cisse", min: 5, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -2.73, zScores: { pts: -0.963, reb: -0.818, ast: -0.488, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0, ftImpact: 0.586, to: 0.968 } },
          { name: "Marcus Sasser", min: 9, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -3.17, zScores: { pts: -0.724, reb: -1.135, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0.028, ftImpact: 0.586, to: 0.968 } },
          { name: "Max Christie", min: 17, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -3.82, zScores: { pts: -0.605, reb: -0.501, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.104, fgImpact: -0.682, ftImpact: 0, to: 0.193 } },
          { name: "Walter Clayton Jr.", min: 16, pts: 5, reb: 4, ast: 6, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 1.77, zScores: { pts: -0.605, reb: 0.134, ast: 1.486, stl: 1.488, blk: -0.476, tpm: -0.104, fgImpact: 0.425, ftImpact: 0, to: -0.582 } },
          { name: "Jett Howard", min: 3, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -2.07, zScores: { pts: -0.605, reb: -0.818, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.104, fgImpact: 0.028, ftImpact: 0.586, to: 0.968 } }
        ]
      }
    },
      {
      id: "401909949",
      line: "Boston Celtics 117 @ Milwaukee Bucks 97 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BOS", name: "Boston Celtics", score: 117,
        players: [
          { name: "Paul George", min: 28, pts: 27, reb: 3, ast: 1, stl: 2, blk: 0, to: 2, tpm: 5, fgm: 11, fga: 18, ftm: 0, fta: 0, composite: 6.15, zScores: { pts: 2.021, reb: -0.183, ast: -0.488, stl: 1.488, blk: -0.476, tpm: 2.581, fgImpact: 1.786, ftImpact: 0, to: -0.582 } },
          { name: "Jayson Tatum", min: 29, pts: 21, reb: 4, ast: 6, stl: 1, blk: 1, to: 1, tpm: 5, fgm: 6, fga: 19, ftm: 4, fta: 4, composite: 5.6, zScores: { pts: 1.305, reb: 0.134, ast: 1.486, stl: 0.363, blk: 0.781, tpm: 2.581, fgImpact: -2.417, ftImpact: 1.173, to: 0.193 } },
          { name: "Neemias Queta", min: 22, pts: 13, reb: 9, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 6, fga: 11, ftm: 1, fta: 2, composite: 0.65, zScores: { pts: 0.35, reb: 1.72, ast: 0.696, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0.538, ftImpact: -0.835, to: 0.193 } },
          { name: "Mike Conley", min: 10, pts: 3, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.64, zScores: { pts: -0.844, reb: -0.183, ast: -0.488, stl: -0.762, blk: -0.476, tpm: -0.104, fgImpact: 0.028, ftImpact: 0, to: 0.193 } },
          { name: "Derrick White", min: 27, pts: 9, reb: 3, ast: 7, stl: 2, blk: 2, to: 1, tpm: 1, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 4.56, zScores: { pts: -0.127, reb: -0.183, ast: 1.881, stl: 1.488, blk: 2.038, tpm: -0.104, fgImpact: -0.626, ftImpact: 0, to: 0.193 } },
          { name: "Sam Hauser", min: 23, pts: 7, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -1.73, zScores: { pts: -0.366, reb: -0.183, ast: -0.488, stl: -0.762, blk: -0.476, tpm: -0.104, fgImpact: 0.453, ftImpact: 0, to: 0.193 } },
          { name: "Luka Garza", min: 9, pts: 4, reb: 5, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 4, composite: -2.59, zScores: { pts: -0.724, reb: 0.451, ast: -0.883, stl: -0.762, blk: 0.781, tpm: -0.776, fgImpact: 0.028, ftImpact: -1.67, to: 0.968 } },
          { name: "Mitchell Robinson", min: 18, pts: 12, reb: 7, ast: 2, stl: 4, blk: 1, to: 0, tpm: 0, fgm: 6, fga: 6, ftm: 0, fta: 2, composite: 6.06, zScores: { pts: 0.231, reb: 1.086, ast: -0.093, stl: 3.738, blk: 0.781, tpm: -0.776, fgImpact: 2.384, ftImpact: -2.256, to: 0.968 } },
          { name: "Payton Pritchard", min: 29, pts: 12, reb: 5, ast: 4, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 12, ftm: 0, fta: 0, composite: 2.78, zScores: { pts: 0.231, reb: 0.451, ast: 0.696, stl: 0.363, blk: -0.476, tpm: 1.91, fgImpact: -1.365, ftImpact: 0, to: 0.968 } },
          { name: "Ron Harper Jr.", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.4, zScores: { pts: -0.963, reb: -1.135, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0.397, ftImpact: 0, to: 0.193 } },
          { name: "Baylor Scheierman", min: 19, pts: 7, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: -2.19, zScores: { pts: -0.366, reb: -0.818, ast: -0.883, stl: 0.363, blk: -0.476, tpm: -0.104, fgImpact: -0.682, ftImpact: 0.586, to: 0.193 } },
          { name: "Jordan Walsh", min: 11, pts: 0, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.7, zScores: { pts: -1.202, reb: -0.183, ast: -0.883, stl: 0.363, blk: -0.476, tpm: -0.776, fgImpact: -0.739, ftImpact: 0, to: 0.193 } },
          { name: "Hugo Gonzalez", min: 10, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.61, zScores: { pts: -1.202, reb: -0.501, ast: -0.488, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: -0.369, ftImpact: 0, to: 0.968 } }
        ]
      },
      home: {
        abbr: "MIL", name: "Milwaukee Bucks", score: 97,
        players: [
          { name: "Kyle Kuzma", min: 31, pts: 27, reb: 4, ast: 0, stl: 1, blk: 2, to: 1, tpm: 6, fgm: 10, fga: 17, ftm: 1, fta: 2, composite: 7.67, zScores: { pts: 2.021, reb: 0.134, ast: -0.883, stl: 0.363, blk: 2.038, tpm: 3.253, fgImpact: 1.388, ftImpact: -0.835, to: 0.193 } },
          { name: "Jaime Jaquez Jr.", min: 23, pts: 4, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -0.99, zScores: { pts: -0.724, reb: -0.501, ast: -0.093, stl: 0.363, blk: -0.476, tpm: -0.776, fgImpact: -0.341, ftImpact: 0.586, to: 0.968 } },
          { name: "Myles Turner", min: 24, pts: 3, reb: 5, ast: 7, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 8, ftm: 1, fta: 1, composite: -1.74, zScores: { pts: -0.844, reb: 0.451, ast: 1.881, stl: -0.762, blk: 0.781, tpm: -0.776, fgImpact: -2.188, ftImpact: 0.293, to: -0.582 } },
          { name: "Tyler Herro", min: 27, pts: 13, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 12, ftm: 2, fta: 2, composite: -1.72, zScores: { pts: 0.35, reb: -0.818, ast: -0.093, stl: -0.762, blk: -0.476, tpm: -0.104, fgImpact: -0.598, ftImpact: 0.586, to: 0.193 } },
          { name: "Brayden Burries", min: 29, pts: 13, reb: 8, ast: 4, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 5, fga: 11, ftm: 2, fta: 2, composite: 2.91, zScores: { pts: 0.35, reb: 1.403, ast: 0.696, stl: -0.762, blk: 0.781, tpm: -0.104, fgImpact: -0.229, ftImpact: 0.586, to: 0.193 } },
          { name: "Ousmane Dieng", min: 15, pts: 10, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 3, ftm: 2, fta: 2, composite: 0.37, zScores: { pts: -0.008, reb: -0.818, ast: -0.883, stl: -0.762, blk: -0.476, tpm: 0.567, fgImpact: 1.192, ftImpact: 0.586, to: 0.968 } },
          { name: "Nate Ament", min: 23, pts: 12, reb: 5, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 1.35, zScores: { pts: 0.231, reb: 0.451, ast: -0.488, stl: 0.363, blk: -0.476, tpm: 0.567, fgImpact: 0.51, ftImpact: 0, to: 0.193 } },
          { name: "Jericho Sims", min: 15, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.51, zScores: { pts: -0.963, reb: -0.501, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: -0.341, ftImpact: 0, to: 0.193 } },
          { name: "Kel'el Ware", min: 9, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.202, reb: -1.135, ast: -0.488, stl: 0.363, blk: -0.476, tpm: -0.776, fgImpact: -0.739, ftImpact: 0, to: 0.193 } },
          { name: "AJ Green", min: 18, pts: 5, reb: 1, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.49, zScores: { pts: -0.605, reb: -0.818, ast: -0.488, stl: -0.762, blk: 0.781, tpm: -0.104, fgImpact: -0.682, ftImpact: 0, to: 0.193 } },
          { name: "Ryan Rollins", min: 20, pts: 7, reb: 5, ast: 6, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 2, fga: 4, ftm: 1, fta: 1, composite: 1.02, zScores: { pts: -0.366, reb: 0.451, ast: 1.486, stl: 0.363, blk: -0.476, tpm: 0.567, fgImpact: 0.056, ftImpact: 0.293, to: -1.357 } },
          { name: "Kasparas Jakucionis", min: 7, pts: 1, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -6.27, zScores: { pts: -1.082, reb: -0.501, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: -0.369, ftImpact: -0.835, to: -0.582 } }
        ]
      }
    },
      {
      id: "401909950",
      line: "New Orleans Pelicans 123 @ LA Clippers 139 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NO", name: "New Orleans Pelicans", score: 123,
        players: [
          { name: "Zion Williamson", min: 31, pts: 25, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 9, fga: 9, ftm: 7, fta: 9, composite: 2.6, zScores: { pts: 1.782, reb: 0.134, ast: -0.093, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 3.576, ftImpact: -0.204, to: -0.582 } },
          { name: "Trey Murphy III", min: 30, pts: 26, reb: 7, ast: 3, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 9, fga: 17, ftm: 4, fta: 4, composite: 5.52, zScores: { pts: 1.901, reb: 1.086, ast: 0.302, stl: 0.363, blk: -0.476, tpm: 1.91, fgImpact: 0.622, ftImpact: 1.173, to: -1.357 } },
          { name: "Karlo Matkovic", min: 19, pts: 3, reb: 3, ast: 2, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.98, zScores: { pts: -0.844, reb: -0.183, ast: -0.093, stl: -0.762, blk: 0.781, tpm: -0.104, fgImpact: 0.028, ftImpact: 0, to: 0.193 } },
          { name: "Dejounte Murray", min: 28, pts: 6, reb: 3, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 4, fta: 4, composite: -2.46, zScores: { pts: -0.486, reb: -0.183, ast: 0.302, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: -1.449, ftImpact: 1.173, to: 0.193 } },
          { name: "Jeremiah Fears", min: 29, pts: 25, reb: 6, ast: 5, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 10, fga: 14, ftm: 2, fta: 4, composite: 6.14, zScores: { pts: 1.782, reb: 0.769, ast: 1.091, stl: 1.488, blk: -0.476, tpm: 1.239, fgImpact: 2.496, ftImpact: -1.67, to: -0.582 } },
          { name: "Herbert Jones", min: 20, pts: 4, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -4.85, zScores: { pts: -0.724, reb: -1.135, ast: -0.488, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: -0.682, ftImpact: 0, to: 0.193 } },
          { name: "Saddiq Bey", min: 26, pts: 13, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 12, ftm: 6, fta: 6, composite: 0.39, zScores: { pts: 0.35, reb: 0.134, ast: 0.302, stl: 0.363, blk: -0.476, tpm: -0.104, fgImpact: -2.131, ftImpact: 1.759, to: 0.193 } },
          { name: "Trendon Watford", min: 17, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.99, zScores: { pts: -0.605, reb: -0.183, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.104, fgImpact: 0.056, ftImpact: 0, to: 0.968 } },
          { name: "Julian Reese", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.202, reb: -1.135, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0, ftImpact: 0, to: 0.968 } },
          { name: "Derik Queen", min: 21, pts: 8, reb: 5, ast: 3, stl: 1, blk: 1, to: 4, tpm: 0, fgm: 1, fga: 5, ftm: 6, fta: 6, composite: -0.58, zScores: { pts: -0.247, reb: 0.451, ast: 0.302, stl: 0.363, blk: 0.781, tpm: -0.776, fgImpact: -1.08, ftImpact: 1.759, to: -2.132 } },
          { name: "Bryce McGowens", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.04, zScores: { pts: -1.202, reb: -1.135, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0, ftImpact: 0, to: 0.193 } },
          { name: "Bennedict Mathurin", min: 9, pts: 6, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -1.76, zScores: { pts: -0.486, reb: -1.135, ast: -0.488, stl: 0.363, blk: -0.476, tpm: -0.776, fgImpact: -0.313, ftImpact: 0.586, to: 0.968 } },
          { name: "AJ Johnson", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.63, zScores: { pts: -0.963, reb: -1.135, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0.397, ftImpact: 0, to: 0.968 } }
        ]
      },
      home: {
        abbr: "LAC", name: "LA Clippers", score: 139,
        players: [
          { name: "Derrick Jones Jr.", min: 29, pts: 8, reb: 4, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 4, fta: 6, composite: -3.03, zScores: { pts: -0.247, reb: 0.134, ast: 0.302, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: -0.313, ftImpact: -1.083, to: 0.193 } },
          { name: "Rui Hachimura", min: 26, pts: 14, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 6, fga: 13, ftm: 0, fta: 0, composite: 1.41, zScores: { pts: 0.469, reb: -0.183, ast: -0.093, stl: 0.363, blk: -0.476, tpm: 0.567, fgImpact: -0.201, ftImpact: 0, to: 0.968 } },
          { name: "Brook Lopez", min: 26, pts: 20, reb: 7, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 8, fga: 11, ftm: 3, fta: 4, composite: 3.23, zScores: { pts: 1.185, reb: 1.086, ast: -0.488, stl: -0.762, blk: -0.476, tpm: -0.104, fgImpact: 2.071, ftImpact: -0.248, to: 0.968 } },
          { name: "Kris Dunn", min: 24, pts: 14, reb: 5, ast: 4, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 7, ftm: 4, fta: 4, composite: 3.92, zScores: { pts: 0.469, reb: 0.451, ast: 0.696, stl: 0.363, blk: -0.476, tpm: 0.567, fgImpact: 0.482, ftImpact: 1.173, to: 0.193 } },
          { name: "Darius Garland", min: 32, pts: 24, reb: 0, ast: 10, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 6, fga: 11, ftm: 9, fta: 12, composite: 3.93, zScores: { pts: 1.663, reb: -1.135, ast: 3.065, stl: 0.363, blk: -0.476, tpm: 1.239, fgImpact: 0.538, ftImpact: -0.745, to: -0.582 } },
          { name: "Baba Miller", min: 20, pts: 12, reb: 5, ast: 4, stl: 2, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 9, ftm: 6, fta: 6, composite: 5.06, zScores: { pts: 0.231, reb: 0.451, ast: 0.696, stl: 1.488, blk: 2.038, tpm: -0.776, fgImpact: -1.024, ftImpact: 1.759, to: 0.193 } },
          { name: "Nick Martinelli", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.63, zScores: { pts: -0.963, reb: -1.135, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0.397, ftImpact: 0, to: 0.968 } },
          { name: "Max Strus", min: 19, pts: 7, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -0.62, zScores: { pts: -0.366, reb: 0.134, ast: -0.093, stl: -0.762, blk: -0.476, tpm: -0.104, fgImpact: 0.084, ftImpact: 0, to: 0.968 } },
          { name: "Jalen Pickett", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.04, zScores: { pts: -1.202, reb: -1.135, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0, ftImpact: 0, to: 0.193 } },
          { name: "Kobe Sanders", min: 22, pts: 8, reb: 2, ast: 4, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -3.1, zScores: { pts: -0.247, reb: -0.501, ast: 0.696, stl: -0.762, blk: -0.476, tpm: 0.567, fgImpact: -1.024, ftImpact: 0, to: -1.357 } },
          { name: "Cam Christie", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.202, reb: -1.135, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0, ftImpact: 0, to: 0.968 } },
          { name: "Gradey Dick", min: 17, pts: 15, reb: 4, ast: 0, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 6, fga: 7, ftm: 1, fta: 2, composite: 3.57, zScores: { pts: 0.589, reb: 0.134, ast: -0.883, stl: 1.488, blk: -0.476, tpm: 0.567, fgImpact: 2.015, ftImpact: -0.835, to: 0.968 } },
          { name: "Keaton Wagler", min: 18, pts: 15, reb: 2, ast: 4, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 5, ftm: 4, fta: 4, composite: 3.72, zScores: { pts: 0.589, reb: -0.501, ast: 0.696, stl: 0.363, blk: -0.476, tpm: 1.239, fgImpact: 1.22, ftImpact: 1.173, to: -0.582 } }
        ]
      }
    },
      {
      id: "401909951",
      line: "Miami Heat 114 @ Sacramento Kings 108 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIA", name: "Miami Heat", score: 114,
        players: [
          { name: "Giannis Antetokounmpo", min: 34, pts: 29, reb: 14, ast: 3, stl: 2, blk: 2, to: 5, tpm: 0, fgm: 14, fga: 23, ftm: 1, fta: 7, composite: 1.47, zScores: { pts: 2.259, reb: 3.307, ast: 0.302, stl: 1.488, blk: 2.038, tpm: -0.776, fgImpact: 2.239, ftImpact: -6.476, to: -2.907 } },
          { name: "Bam Adebayo", min: 34, pts: 18, reb: 8, ast: 4, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 15, ftm: 3, fta: 3, composite: 5.98, zScores: { pts: 0.947, reb: 1.403, ast: 0.696, stl: 2.613, blk: -0.476, tpm: -0.104, fgImpact: -0.173, ftImpact: 0.88, to: 0.193 } },
          { name: "Klay Thompson", min: 32, pts: 23, reb: 2, ast: 4, stl: 0, blk: 2, to: 0, tpm: 7, fgm: 8, fga: 15, ftm: 0, fta: 0, composite: 8.5, zScores: { pts: 1.543, reb: -0.501, ast: 0.696, stl: -0.762, blk: 2.038, tpm: 3.924, fgImpact: 0.594, ftImpact: 0, to: 0.968 } },
          { name: "Davion Mitchell", min: 40, pts: 17, reb: 3, ast: 11, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 6, fga: 10, ftm: 3, fta: 6, composite: 2.51, zScores: { pts: 0.827, reb: -0.183, ast: 3.46, stl: -0.762, blk: 0.781, tpm: 0.567, fgImpact: 0.907, ftImpact: -2.505, to: -0.582 } },
          { name: "Pelle Larsson", min: 22, pts: 11, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 2.03, zScores: { pts: 0.111, reb: -0.183, ast: 0.302, stl: 0.363, blk: -0.476, tpm: 1.239, fgImpact: 0.482, ftImpact: 0, to: 0.193 } },
          { name: "Andrew Wiggins", min: 32, pts: 6, reb: 3, ast: 1, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -1.06, zScores: { pts: -0.486, reb: -0.183, ast: -0.488, stl: -0.762, blk: 0.781, tpm: 0.567, fgImpact: -0.682, ftImpact: 0, to: 0.193 } },
          { name: "Bobby Portis", min: 20, pts: 4, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -3.95, zScores: { pts: -0.724, reb: -0.818, ast: -0.488, stl: -0.762, blk: -0.476, tpm: -0.104, fgImpact: -0.71, ftImpact: -0.835, to: 0.968 } },
          { name: "Tim Hardaway Jr.", min: 7, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -6.15, zScores: { pts: -1.202, reb: -1.135, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: -1.108, ftImpact: 0, to: 0.193 } },
          { name: "Ryan Conwell", min: 19, pts: 6, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.52, zScores: { pts: -0.486, reb: -0.501, ast: -0.093, stl: 0.363, blk: -0.476, tpm: 0.567, fgImpact: -0.313, ftImpact: 0, to: -0.582 } }
        ]
      },
      home: {
        abbr: "SAC", name: "Sacramento Kings", score: 108,
        players: [
          { name: "De'Andre Hunter", min: 31, pts: 14, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 11, ftm: 4, fta: 4, composite: -0.5, zScores: { pts: 0.469, reb: -0.183, ast: -0.488, stl: -0.762, blk: -0.476, tpm: 0.567, fgImpact: -0.996, ftImpact: 1.173, to: 0.193 } },
          { name: "Precious Achiuwa", min: 36, pts: 7, reb: 14, ast: 2, stl: 0, blk: 1, to: 6, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: -1.97, zScores: { pts: -0.366, reb: 3.307, ast: -0.093, stl: -0.762, blk: 0.781, tpm: -0.776, fgImpact: 0.453, ftImpact: -0.835, to: -3.682 } },
          { name: "Dylan Cardwell", min: 18, pts: 4, reb: 9, ast: 3, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.38, zScores: { pts: -0.724, reb: 1.72, ast: 0.302, stl: -0.762, blk: 0.781, tpm: -0.776, fgImpact: 0.425, ftImpact: 0, to: -0.582 } },
          { name: "Zach LaVine", min: 25, pts: 15, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 10, ftm: 2, fta: 2, composite: 0.2, zScores: { pts: 0.589, reb: 0.134, ast: -0.093, stl: -0.762, blk: -0.476, tpm: -0.104, fgImpact: 0.907, ftImpact: 0.586, to: -0.582 } },
          { name: "Darius Acuff Jr.", min: 39, pts: 32, reb: 5, ast: 10, stl: 1, blk: 0, to: 5, tpm: 3, fgm: 11, fga: 21, ftm: 7, fta: 7, composite: 7.08, zScores: { pts: 2.617, reb: 0.451, ast: 3.065, stl: 0.363, blk: -0.476, tpm: 1.239, fgImpact: 0.678, ftImpact: 2.053, to: -2.907 } },
          { name: "Leaky Black", min: 20, pts: 6, reb: 5, ast: 1, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 2.21, zScores: { pts: -0.486, reb: 0.451, ast: -0.488, stl: 0.363, blk: 0.781, tpm: 0.567, fgImpact: 0.056, ftImpact: 0, to: 0.968 } },
          { name: "Keegan Murray", min: 23, pts: 10, reb: 1, ast: 2, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 10, ftm: 4, fta: 4, composite: 1.32, zScores: { pts: -0.008, reb: -0.818, ast: -0.093, stl: 1.488, blk: 0.781, tpm: -0.776, fgImpact: -1.393, ftImpact: 1.173, to: 0.968 } },
          { name: "Jonathan Mogbo", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.202, reb: -1.135, ast: -0.883, stl: -0.762, blk: -0.476, tpm: -0.776, fgImpact: 0, ftImpact: 0, to: 0.968 } },
          { name: "Malik Monk", min: 21, pts: 9, reb: 2, ast: 3, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 9, ftm: 3, fta: 4, composite: -3.07, zScores: { pts: -0.127, reb: -0.501, ast: 0.302, stl: 0.363, blk: -0.476, tpm: -0.776, fgImpact: -1.024, ftImpact: -0.248, to: -0.582 } },
          { name: "Daeqwon Plowden", min: 12, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.15, zScores: { pts: -0.486, reb: -1.135, ast: -0.883, stl: -0.762, blk: -0.476, tpm: 0.567, fgImpact: 0.056, ftImpact: 0, to: 0.968 } },
          { name: "Emanuel Sharp", min: 12, pts: 5, reb: 1, ast: 0, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.74, zScores: { pts: -0.605, reb: -0.818, ast: -0.883, stl: 1.488, blk: -0.476, tpm: -0.104, fgImpact: -0.313, ftImpact: 0, to: 0.968 } }
        ]
      }
    }
    ]
  },
    "2026-11-09": {
    games: [
      {
      id: "401909952",
      line: "Los Angeles Lakers 124 @ Atlanta Hawks 114 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LAL", name: "Los Angeles Lakers", score: 124,
        players: [
          { name: "Ziaire Williams", min: 28, pts: 12, reb: 2, ast: 2, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 2.02, zScores: { pts: 0.236, reb: -0.485, ast: -0.151, stl: 1.449, blk: -0.521, tpm: 0.555, fgImpact: 0.168, ftImpact: 0, to: 0.767 } },
          { name: "Jake LaRavia", min: 32, pts: 4, reb: 3, ast: 3, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -0.653, reb: -0.177, ast: 0.253, stl: 0.355, blk: -0.521, tpm: -0.77, fgImpact: -0.604, ftImpact: 0, to: -1.29 } },
          { name: "Walker Kessler", min: 30, pts: 21, reb: 10, ast: 4, stl: 1, blk: 1, to: 4, tpm: 0, fgm: 8, fga: 12, ftm: 5, fta: 6, composite: 3.95, zScores: { pts: 1.236, reb: 1.983, ast: 0.657, stl: 0.355, blk: 0.515, tpm: -0.77, fgImpact: 1.611, ftImpact: 0.341, to: -1.976 } },
          { name: "Matisse Thybulle", min: 23, pts: 6, reb: 0, ast: 1, stl: 3, blk: 1, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 1.34, zScores: { pts: -0.431, reb: -1.102, ast: -0.555, stl: 2.543, blk: 0.515, tpm: 0.555, fgImpact: -0.268, ftImpact: 0, to: 0.082 } },
          { name: "Luka Doncic", min: 39, pts: 32, reb: 8, ast: 10, stl: 5, blk: 2, to: 6, tpm: 3, fgm: 11, fga: 22, ftm: 7, fta: 7, composite: 13.7, zScores: { pts: 2.458, reb: 1.366, ast: 3.082, stl: 4.731, blk: 1.552, tpm: 1.218, fgImpact: 0.369, ftImpact: 2.267, to: -3.347 } },
          { name: "Jarred Vanderbilt", min: 13, pts: 4, reb: 2, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -0.49, zScores: { pts: -0.653, reb: -0.485, ast: -0.959, stl: 0.355, blk: 0.515, tpm: -0.77, fgImpact: 0.738, ftImpact: 0, to: 0.767 } },
          { name: "Sandro Mamukelashvili", min: 32, pts: 23, reb: 8, ast: 3, stl: 1, blk: 1, to: 0, tpm: 5, fgm: 7, fga: 13, ftm: 4, fta: 4, composite: 9.12, zScores: { pts: 1.458, reb: 1.366, ast: 0.253, stl: 0.355, blk: 0.515, tpm: 2.544, fgImpact: 0.57, ftImpact: 1.295, to: 0.767 } },
          { name: "Adou Thiero", min: 7, pts: 2, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.05, zScores: { pts: -0.875, reb: -0.485, ast: -0.555, stl: 0.355, blk: -0.521, tpm: -0.77, fgImpact: 0.034, ftImpact: 0, to: 0.767 } },
          { name: "Collin Sexton", min: 27, pts: 18, reb: 2, ast: 6, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 11, ftm: 3, fta: 6, composite: 0.69, zScores: { pts: 0.903, reb: -0.485, ast: 1.465, stl: 0.355, blk: -0.521, tpm: 1.218, fgImpact: 0.537, ftImpact: -2.862, to: 0.082 } },
          { name: "Cameron Carr", min: 7, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.24, zScores: { pts: -0.875, reb: -0.177, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0.034, ftImpact: 0, to: 0.767 } }
        ]
      },
      home: {
        abbr: "ATL", name: "Atlanta Hawks", score: 114,
        players: [
          { name: "Onyeka Okongwu", min: 30, pts: 16, reb: 9, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 11, ftm: 2, fta: 4, composite: 1.71, zScores: { pts: 0.68, reb: 1.674, ast: 0.253, stl: 0.355, blk: -0.521, tpm: 0.555, fgImpact: 0.537, ftImpact: -1.908, to: 0.082 } },
          { name: "Jalen Johnson", min: 38, pts: 15, reb: 7, ast: 4, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 6, fga: 14, ftm: 3, fta: 4, composite: -0.31, zScores: { pts: 0.569, reb: 1.057, ast: 0.657, stl: 1.449, blk: -0.521, tpm: -0.77, fgImpact: -0.47, ftImpact: -0.306, to: -1.976 } },
          { name: "Nickeil Alexander-Walker", min: 34, pts: 20, reb: 4, ast: 4, stl: 2, blk: 2, to: 0, tpm: 4, fgm: 6, fga: 19, ftm: 4, fta: 4, composite: 6.71, zScores: { pts: 1.125, reb: 0.132, ast: 0.657, stl: 1.449, blk: 1.552, tpm: 1.881, fgImpact: -2.148, ftImpact: 1.295, to: 0.767 } },
          { name: "Dyson Daniels", min: 31, pts: 10, reb: 6, ast: 8, stl: 4, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 4, ftm: 1, fta: 2, composite: 6.65, zScores: { pts: 0.014, reb: 0.749, ast: 2.274, stl: 3.637, blk: -0.521, tpm: -0.107, fgImpact: 1.476, ftImpact: -0.954, to: 0.082 } },
          { name: "Kingston Flemings", min: 24, pts: 8, reb: 3, ast: 4, stl: 2, blk: 0, to: 4, tpm: 1, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: -1.46, zScores: { pts: -0.208, reb: -0.177, ast: 0.657, stl: 1.449, blk: -0.521, tpm: -0.107, fgImpact: -0.268, ftImpact: -0.306, to: -1.976 } },
          { name: "Zuby Ejiofor", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.39, zScores: { pts: -1.097, reb: -1.102, ast: -0.959, stl: -0.739, blk: 0.515, tpm: -0.77, fgImpact: 0, ftImpact: 0, to: 0.767 } },
          { name: "Jock Landale", min: 14, pts: 5, reb: 5, ast: 1, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.19, zScores: { pts: -0.542, reb: 0.44, ast: -0.555, stl: -0.739, blk: 0.515, tpm: -0.107, fgImpact: 0.403, ftImpact: 0, to: -0.604 } },
          { name: "CJ McCollum", min: 24, pts: 21, reb: 0, ast: 4, stl: 0, blk: 1, to: 3, tpm: 3, fgm: 8, fga: 15, ftm: 2, fta: 2, composite: 1.75, zScores: { pts: 1.236, reb: -1.102, ast: 0.657, stl: -0.739, blk: 0.515, tpm: 1.218, fgImpact: 0.604, ftImpact: 0.648, to: -1.29 } },
          { name: "Luguentz Dort", min: 18, pts: 4, reb: 3, ast: 2, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 1, fta: 2, composite: -2.4, zScores: { pts: -0.653, reb: -0.177, ast: -0.151, stl: 0.355, blk: 0.515, tpm: -0.107, fgImpact: -1.309, ftImpact: -0.954, to: 0.082 } },
          { name: "Aaron Wiggins", min: 23, pts: 15, reb: 3, ast: 3, stl: 0, blk: 0, to: 3, tpm: 4, fgm: 5, fga: 11, ftm: 1, fta: 1, composite: 0.13, zScores: { pts: 0.569, reb: -0.177, ast: 0.253, stl: -0.739, blk: -0.521, tpm: 1.881, fgImpact: -0.168, ftImpact: 0.324, to: -1.29 } }
        ]
      }
    },
      {
      id: "401909953",
      line: "Cleveland Cavaliers 112 @ Charlotte Hornets 124 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CLE", name: "Cleveland Cavaliers", score: 112,
        players: [
          { name: "Jarrett Allen", min: 19, pts: 12, reb: 7, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 5, fga: 5, ftm: 1, fta: 2, composite: 1.38, zScores: { pts: 0.236, reb: 1.057, ast: -0.555, stl: -0.739, blk: 0.515, tpm: -0.107, fgImpact: 1.846, ftImpact: -0.954, to: 0.082 } },
          { name: "Evan Mobley", min: 24, pts: 9, reb: 2, ast: 3, stl: 2, blk: 1, to: 4, tpm: 2, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: -0.3, zScores: { pts: -0.097, reb: -0.485, ast: 0.253, stl: 1.449, blk: 0.515, tpm: 0.555, fgImpact: 0.436, ftImpact: -0.954, to: -1.976 } },
          { name: "James Harden", min: 25, pts: 11, reb: 3, ast: 5, stl: 1, blk: 0, to: 4, tpm: 2, fgm: 3, fga: 9, ftm: 3, fta: 3, composite: -0.51, zScores: { pts: 0.125, reb: -0.177, ast: 1.061, stl: 0.355, blk: -0.521, tpm: 0.555, fgImpact: -0.906, ftImpact: 0.971, to: -1.976 } },
          { name: "Donovan Mitchell", min: 23, pts: 11, reb: 2, ast: 4, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 11, ftm: 2, fta: 2, composite: 0.57, zScores: { pts: 0.125, reb: -0.485, ast: 0.657, stl: 0.355, blk: -0.521, tpm: -0.107, fgImpact: -0.872, ftImpact: 0.648, to: 0.767 } },
          { name: "Peyton Watson", min: 21, pts: 13, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 9, ftm: 1, fta: 2, composite: -2.45, zScores: { pts: 0.347, reb: -0.485, ast: -0.555, stl: -0.739, blk: -0.521, tpm: 0.555, fgImpact: 0.503, ftImpact: -0.954, to: -0.604 } },
          { name: "Mario Hezonja", min: 17, pts: 10, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: -1.52, zScores: { pts: 0.014, reb: -0.177, ast: -0.959, stl: -0.739, blk: 0.515, tpm: -0.77, fgImpact: -0.168, ftImpact: 0, to: 0.767 } },
          { name: "Riley Minix", min: 17, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.22, zScores: { pts: -0.875, reb: -0.485, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: -0.638, ftImpact: 0, to: 0.767 } },
          { name: "Thomas Bryant", min: 15, pts: 11, reb: 2, ast: 0, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 3, fta: 3, composite: 2.28, zScores: { pts: 0.125, reb: -0.485, ast: -0.959, stl: 0.355, blk: 0.515, tpm: 0.555, fgImpact: 0.436, ftImpact: 0.971, to: 0.767 } },
          { name: "Norchad Omier", min: 12, pts: 0, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.02, zScores: { pts: -1.097, reb: -0.177, ast: -0.151, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: -0.336, ftImpact: 0, to: 0.767 } },
          { name: "Craig Porter Jr.", min: 17, pts: 9, reb: 2, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 1, fta: 1, composite: 0.35, zScores: { pts: -0.097, reb: -0.485, ast: 0.657, stl: 0.355, blk: -0.521, tpm: -0.77, fgImpact: 0.805, ftImpact: 0.324, to: 0.082 } },
          { name: "Tyrese Proctor", min: 23, pts: 6, reb: 1, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 3, composite: -1.98, zScores: { pts: -0.431, reb: -0.794, ast: 0.657, stl: 0.355, blk: -0.521, tpm: -0.77, fgImpact: 0.067, ftImpact: -0.63, to: 0.082 } },
          { name: "Meleek Thomas", min: 27, pts: 18, reb: 3, ast: 3, stl: 2, blk: 2, to: 0, tpm: 4, fgm: 7, fga: 12, ftm: 0, fta: 0, composite: 7.53, zScores: { pts: 0.903, reb: -0.177, ast: 0.253, stl: 1.449, blk: 1.552, tpm: 1.881, fgImpact: 0.906, ftImpact: 0, to: 0.767 } }
        ]
      },
      home: {
        abbr: "CHA", name: "Charlotte Hornets", score: 124,
        players: [
          { name: "Naz Reid", min: 32, pts: 25, reb: 13, ast: 4, stl: 2, blk: 0, to: 3, tpm: 4, fgm: 10, fga: 26, ftm: 1, fta: 2, composite: 4.13, zScores: { pts: 1.68, reb: 2.909, ast: 0.657, stl: 1.449, blk: -0.521, tpm: 1.881, fgImpact: -1.678, ftImpact: -0.954, to: -1.29 } },
          { name: "Ryan Kalkbrenner", min: 35, pts: 8, reb: 15, ast: 3, stl: 1, blk: 3, to: 2, tpm: 0, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 5.61, zScores: { pts: -0.208, reb: 3.526, ast: 0.253, stl: 0.355, blk: 2.588, tpm: -0.77, fgImpact: 0.47, ftImpact: 0, to: -0.604 } },
          { name: "Grayson Allen", min: 34, pts: 27, reb: 4, ast: 6, stl: 2, blk: 0, to: 3, tpm: 6, fgm: 8, fga: 14, ftm: 5, fta: 6, composite: 7.63, zScores: { pts: 1.903, reb: 0.132, ast: 1.465, stl: 1.449, blk: -0.521, tpm: 3.206, fgImpact: 0.94, ftImpact: 0.341, to: -1.29 } },
          { name: "Coby White", min: 20, pts: 10, reb: 2, ast: 9, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 12, ftm: 4, fta: 5, composite: -3.01, zScores: { pts: 0.014, reb: -0.485, ast: 2.678, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: -1.913, ftImpact: 0.018, to: -1.29 } },
          { name: "Sion James", min: 33, pts: 11, reb: 4, ast: 4, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 3.63, zScores: { pts: 0.125, reb: 0.132, ast: 0.657, stl: 1.449, blk: -0.521, tpm: 1.218, fgImpact: -0.201, ftImpact: 0, to: 0.767 } },
          { name: "Royce O'Neale", min: 23, pts: 10, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 0.57, zScores: { pts: 0.014, reb: -0.177, ast: -0.555, stl: 0.355, blk: -0.521, tpm: 0.555, fgImpact: 0.134, ftImpact: 0, to: 0.767 } },
          { name: "Tidjane Salaun", min: 18, pts: 14, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 6, ftm: 3, fta: 3, composite: 2.92, zScores: { pts: 0.458, reb: -0.177, ast: -0.959, stl: 0.355, blk: -0.521, tpm: 1.218, fgImpact: 0.805, ftImpact: 0.971, to: 0.767 } },
          { name: "Hannes Steinbach", min: 13, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -0.875, reb: -0.177, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: -0.302, ftImpact: 0, to: 0.082 } },
          { name: "Christian Anderson", min: 16, pts: 9, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -1.66, zScores: { pts: -0.097, reb: -0.794, ast: -0.555, stl: -0.739, blk: -0.521, tpm: 1.218, fgImpact: 0.436, ftImpact: 0, to: -0.604 } },
          { name: "Liam McNeeley", min: 16, pts: 8, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -0.39, zScores: { pts: -0.208, reb: -0.794, ast: -0.555, stl: -0.739, blk: -0.521, tpm: 0.555, fgImpact: 1.107, ftImpact: 0, to: 0.767 } }
        ]
      }
    },
      {
      id: "401909954",
      line: "Washington Wizards 111 @ Detroit Pistons 122 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WSH", name: "Washington Wizards", score: 111,
        players: [
          { name: "Anthony Davis", min: 34, pts: 44, reb: 13, ast: 1, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 16, fga: 21, ftm: 10, fta: 11, composite: 11.43, zScores: { pts: 3.791, reb: 2.909, ast: -0.555, stl: 0.355, blk: -0.521, tpm: 0.555, fgImpact: 4.228, ftImpact: 1.96, to: -1.29 } },
          { name: "AJ Dybantsa", min: 37, pts: 21, reb: 8, ast: 1, stl: 0, blk: 2, to: 5, tpm: 1, fgm: 8, fga: 17, ftm: 4, fta: 6, composite: -1.24, zScores: { pts: 1.236, reb: 1.366, ast: -0.555, stl: -0.739, blk: 1.552, tpm: -0.107, fgImpact: -0.067, ftImpact: -1.26, to: -2.662 } },
          { name: "Kyshawn George", min: 35, pts: 12, reb: 3, ast: 2, stl: 1, blk: 1, to: 5, tpm: 2, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: -1.83, zScores: { pts: 0.236, reb: -0.177, ast: -0.151, stl: 0.355, blk: 0.515, tpm: 0.555, fgImpact: -0.503, ftImpact: 0, to: -2.662 } },
          { name: "Alex Sarr", min: 25, pts: 4, reb: 8, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.33, zScores: { pts: -0.653, reb: 1.366, ast: -0.959, stl: 0.355, blk: 0.515, tpm: -0.77, fgImpact: -0.268, ftImpact: 0, to: 0.082 } },
          { name: "Trae Young", min: 38, pts: 20, reb: 1, ast: 7, stl: 2, blk: 0, to: 3, tpm: 3, fgm: 6, fga: 17, ftm: 5, fta: 9, composite: -1.91, zScores: { pts: 1.125, reb: -0.794, ast: 1.869, stl: 1.449, blk: -0.521, tpm: 1.218, fgImpact: -1.476, ftImpact: -3.492, to: -1.29 } },
          { name: "Anthony Gill", min: 2, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.097, reb: -0.485, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0, ftImpact: 0, to: 0.767 } },
          { name: "Felix Okpara", min: 2, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.52, zScores: { pts: -0.875, reb: -0.794, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0.369, ftImpact: 0, to: 0.767 } },
          { name: "Deandre Ayton", min: 13, pts: 2, reb: 8, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.03, zScores: { pts: -0.875, reb: 1.366, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: -0.302, ftImpact: 0, to: 0.767 } },
          { name: "Tre Mann", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.76, zScores: { pts: -1.097, reb: -1.102, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: -0.336, ftImpact: 0, to: 0.767 } },
          { name: "Bub Carrington", min: 19, pts: 4, reb: 0, ast: 4, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -3.98, zScores: { pts: -0.653, reb: -1.102, ast: 0.657, stl: -0.739, blk: -0.521, tpm: -0.107, fgImpact: -0.638, ftImpact: -0.954, to: 0.082 } },
          { name: "Will Riley", min: 4, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.02, zScores: { pts: -1.097, reb: -1.102, ast: -0.555, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0, ftImpact: 0, to: 0.767 } },
          { name: "Tre Johnson", min: 29, pts: 2, reb: 2, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 8, ftm: 0, fta: 0, composite: -3.37, zScores: { pts: -0.875, reb: -0.485, ast: -0.959, stl: 1.449, blk: -0.521, tpm: -0.77, fgImpact: -1.98, ftImpact: 0, to: 0.767 } }
        ]
      },
      home: {
        abbr: "DET", name: "Detroit Pistons", score: 122,
        players: [
          { name: "Duncan Robinson", min: 34, pts: 22, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 11, ftm: 6, fta: 7, composite: 3.61, zScores: { pts: 1.347, reb: -0.177, ast: -0.151, stl: -0.739, blk: -0.521, tpm: 1.881, fgImpact: 0.537, ftImpact: 0.665, to: 0.767 } },
          { name: "John Collins", min: 28, pts: 24, reb: 10, ast: 3, stl: 2, blk: 1, to: 0, tpm: 2, fgm: 9, fga: 13, ftm: 4, fta: 4, composite: 10.37, zScores: { pts: 1.569, reb: 1.983, ast: 0.253, stl: 1.449, blk: 0.515, tpm: 0.555, fgImpact: 1.98, ftImpact: 1.295, to: 0.767 } },
          { name: "Cade Cunningham", min: 27, pts: 17, reb: 3, ast: 7, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 7, fga: 16, ftm: 3, fta: 3, composite: 2.85, zScores: { pts: 0.792, reb: -0.177, ast: 1.869, stl: 0.355, blk: -0.521, tpm: -0.77, fgImpact: -0.436, ftImpact: 0.971, to: 0.767 } },
          { name: "Ausar Thompson", min: 28, pts: 8, reb: 5, ast: 4, stl: 2, blk: 1, to: 5, tpm: 0, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: -0.5, zScores: { pts: -0.208, reb: 0.44, ast: 0.657, stl: 1.449, blk: 0.515, tpm: -0.77, fgImpact: -0.57, ftImpact: 0.648, to: -2.662 } },
          { name: "Daniss Jenkins", min: 36, pts: 22, reb: 6, ast: 8, stl: 4, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 16, ftm: 6, fta: 6, composite: 8.94, zScores: { pts: 1.347, reb: 0.749, ast: 2.274, stl: 3.637, blk: -0.521, tpm: 0.555, fgImpact: -0.436, ftImpact: 1.943, to: -0.604 } },
          { name: "Paul Reed", min: 21, pts: 4, reb: 10, ast: 2, stl: 1, blk: 3, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: 3.09, zScores: { pts: -0.653, reb: 1.983, ast: -0.151, stl: 0.355, blk: 2.588, tpm: -0.77, fgImpact: -0.302, ftImpact: 0.648, to: -0.604 } },
          { name: "Ronald Holland II", min: 15, pts: 1, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 1, fta: 2, composite: -4.26, zScores: { pts: -0.986, reb: 0.44, ast: -0.151, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: -1.342, ftImpact: -0.954, to: 0.767 } },
          { name: "Isaac Jones", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.42, zScores: { pts: -1.097, reb: -1.102, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0, ftImpact: 0, to: 0.767 } },
          { name: "Javonte Green", min: 11, pts: 7, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 1, composite: -2.58, zScores: { pts: -0.319, reb: -0.794, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0.436, ftImpact: 0.324, to: 0.767 } },
          { name: "Kevin Huerter", min: 33, pts: 12, reb: 2, ast: 3, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 12, ftm: 2, fta: 3, composite: -0.95, zScores: { pts: 0.236, reb: -0.485, ast: 0.253, stl: 0.355, blk: 0.515, tpm: -0.77, fgImpact: -0.503, ftImpact: -0.63, to: 0.082 } },
          { name: "Chaz Lanier", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.42, zScores: { pts: -1.097, reb: -1.102, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0, ftImpact: 0, to: 0.767 } },
          { name: "Ebuka Okorie", min: 6, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 1, composite: -3.14, zScores: { pts: -0.542, reb: -1.102, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0.403, ftImpact: 0.324, to: 0.767 } }
        ]
      }
    },
      {
      id: "401909955",
      line: "Memphis Grizzlies 118 @ Toronto Raptors 102 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MEM", name: "Memphis Grizzlies", score: 118,
        players: [
          { name: "Cedric Coward", min: 28, pts: 3, reb: 6, ast: 4, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: 1.96, zScores: { pts: -0.764, reb: 0.749, ast: 0.657, stl: 1.449, blk: 0.515, tpm: -0.107, fgImpact: -1.309, ftImpact: 0, to: 0.767 } },
          { name: "Cameron Boozer", min: 33, pts: 22, reb: 7, ast: 8, stl: 1, blk: 0, to: 6, tpm: 0, fgm: 9, fga: 16, ftm: 4, fta: 5, composite: 1.38, zScores: { pts: 1.347, reb: 1.057, ast: 2.274, stl: 0.355, blk: -0.521, tpm: -0.77, fgImpact: 0.973, ftImpact: 0.018, to: -3.347 } },
          { name: "Jaylen Wells", min: 26, pts: 14, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 2.26, zScores: { pts: 0.458, reb: 0.132, ast: -0.555, stl: -0.739, blk: -0.521, tpm: 1.881, fgImpact: 0.839, ftImpact: 0, to: 0.767 } },
          { name: "Zach Edey", min: 23, pts: 8, reb: 9, ast: 1, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 2, fga: 3, ftm: 4, fta: 4, composite: 0.33, zScores: { pts: -0.208, reb: 1.674, ast: -0.555, stl: -0.739, blk: 0.515, tpm: -0.77, fgImpact: 0.403, ftImpact: 1.295, to: -1.29 } },
          { name: "Ty Jerome", min: 32, pts: 27, reb: 6, ast: 2, stl: 0, blk: 0, to: 3, tpm: 5, fgm: 9, fga: 19, ftm: 4, fta: 4, composite: 3.76, zScores: { pts: 1.903, reb: 0.749, ast: -0.151, stl: -0.739, blk: -0.521, tpm: 2.544, fgImpact: -0.034, ftImpact: 1.295, to: -1.29 } },
          { name: "Jerami Grant", min: 22, pts: 17, reb: 3, ast: 2, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 6, fga: 9, ftm: 2, fta: 2, composite: 5.18, zScores: { pts: 0.792, reb: -0.177, ast: -0.151, stl: 0.355, blk: 0.515, tpm: 1.218, fgImpact: 1.208, ftImpact: 0.648, to: 0.767 } },
          { name: "Kris Murray", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.42, zScores: { pts: -1.097, reb: -1.102, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0, ftImpact: 0, to: 0.767 } },
          { name: "Olivier-Maxence Prosper", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.42, zScores: { pts: -1.097, reb: -1.102, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0, ftImpact: 0, to: 0.767 } },
          { name: "Taylor Hendricks", min: 16, pts: 9, reb: 3, ast: 0, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 0.07, zScores: { pts: -0.097, reb: -0.177, ast: -0.959, stl: 0.355, blk: 0.515, tpm: -0.107, fgImpact: 1.141, ftImpact: 0, to: -0.604 } },
          { name: "GG Jackson", min: 17, pts: 2, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -3.21, zScores: { pts: -0.875, reb: -0.794, ast: -0.959, stl: -0.739, blk: 0.515, tpm: -0.77, fgImpact: -1.007, ftImpact: 0.648, to: 0.767 } },
          { name: "Quinten Post", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.11, zScores: { pts: -1.097, reb: -0.794, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0, ftImpact: 0, to: 0.767 } },
          { name: "Cam Spencer", min: 17, pts: 7, reb: 2, ast: 4, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -0.18, zScores: { pts: -0.319, reb: -0.485, ast: 0.657, stl: 1.449, blk: -0.521, tpm: -0.107, fgImpact: 0.436, ftImpact: 0, to: -1.29 } },
          { name: "Javon Small", min: 24, pts: 9, reb: 2, ast: 5, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 0.96, zScores: { pts: -0.097, reb: -0.485, ast: 1.061, stl: -0.739, blk: -0.521, tpm: -0.107, fgImpact: 0.436, ftImpact: 0.648, to: 0.767 } }
        ]
      },
      home: {
        abbr: "TOR", name: "Toronto Raptors", score: 102,
        players: [
          { name: "Kyle Anderson", min: 16, pts: 6, reb: 2, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.52, zScores: { pts: -0.431, reb: -0.485, ast: -0.151, stl: -0.739, blk: 0.515, tpm: -0.77, fgImpact: 0.772, ftImpact: 0, to: 0.767 } },
          { name: "RJ Barrett", min: 36, pts: 19, reb: 3, ast: 2, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 7, fga: 21, ftm: 4, fta: 9, composite: -6.77, zScores: { pts: 1.014, reb: -0.177, ast: -0.151, stl: -0.739, blk: 0.515, tpm: -0.107, fgImpact: -2.114, ftImpact: -5.093, to: 0.082 } },
          { name: "Jakob Poeltl", min: 31, pts: 18, reb: 8, ast: 2, stl: 1, blk: 4, to: 3, tpm: 0, fgm: 9, fga: 12, ftm: 0, fta: 0, composite: 6.35, zScores: { pts: 0.903, reb: 1.366, ast: -0.151, stl: 0.355, blk: 3.624, tpm: -0.77, fgImpact: 2.315, ftImpact: 0, to: -1.29 } },
          { name: "Jamal Shead", min: 36, pts: 20, reb: 2, ast: 11, stl: 2, blk: 0, to: 3, tpm: 4, fgm: 6, fga: 17, ftm: 4, fta: 4, composite: 5.46, zScores: { pts: 1.125, reb: -0.485, ast: 3.486, stl: 1.449, blk: -0.521, tpm: 1.881, fgImpact: -1.476, ftImpact: 1.295, to: -1.29 } },
          { name: "Ja'Kobe Walter", min: 34, pts: 12, reb: 6, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 13, ftm: 2, fta: 2, composite: -1.49, zScores: { pts: 0.236, reb: 0.749, ast: -0.959, stl: -0.739, blk: -0.521, tpm: 0.555, fgImpact: -1.544, ftImpact: 0.648, to: 0.082 } },
          { name: "Trayce Jackson-Davis", min: 14, pts: 4, reb: 6, ast: 1, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 1.22, zScores: { pts: -0.653, reb: 0.749, ast: -0.555, stl: 1.449, blk: 0.515, tpm: -0.77, fgImpact: 0.403, ftImpact: 0, to: 0.082 } },
          { name: "Jamison Battle", min: 29, pts: 18, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 6, fga: 12, ftm: 1, fta: 2, composite: 0.57, zScores: { pts: 0.903, reb: -0.794, ast: -0.151, stl: -0.739, blk: -0.521, tpm: 2.544, fgImpact: 0.201, ftImpact: -0.954, to: 0.082 } },
          { name: "Allen Graves", min: 13, pts: 3, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -1.95, zScores: { pts: -0.764, reb: -0.485, ast: -0.555, stl: 0.355, blk: -0.521, tpm: -0.107, fgImpact: -0.638, ftImpact: 0, to: 0.767 } },
          { name: "Malachi Smith", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.42, zScores: { pts: -1.097, reb: -1.102, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0, ftImpact: 0, to: 0.767 } },
          { name: "Jaden Bradley", min: 9, pts: 0, reb: 1, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.097, reb: -0.794, ast: 0.253, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0, ftImpact: 0, to: -0.604 } },
          { name: "Alijah Martin", min: 21, pts: 2, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.29, zScores: { pts: -0.875, reb: -0.177, ast: 0.253, stl: 0.355, blk: -0.521, tpm: -0.77, fgImpact: -0.638, ftImpact: 0, to: 0.082 } }
        ]
      }
    },
      {
      id: "401909956",
      line: "Indiana Pacers 122 @ Dallas Mavericks 125 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "IND", name: "Indiana Pacers", score: 122,
        players: [
          { name: "Pascal Siakam", min: 35, pts: 29, reb: 9, ast: 8, stl: 2, blk: 0, to: 0, tpm: 5, fgm: 9, fga: 16, ftm: 6, fta: 8, composite: 10.67, zScores: { pts: 2.125, reb: 1.674, ast: 2.274, stl: 1.449, blk: -0.521, tpm: 2.544, fgImpact: 0.973, ftImpact: -0.613, to: 0.767 } },
          { name: "Ivica Zubac", min: 28, pts: 16, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 7, ftm: 6, fta: 8, composite: -1.84, zScores: { pts: 0.68, reb: -0.177, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 1.174, ftImpact: -0.613, to: 0.082 } },
          { name: "Andrew Nembhard", min: 34, pts: 12, reb: 3, ast: 12, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 5, fga: 10, ftm: 1, fta: 1, composite: 2.82, zScores: { pts: 0.236, reb: -0.177, ast: 3.89, stl: -0.739, blk: 0.515, tpm: -0.107, fgImpact: 0.168, ftImpact: 0.324, to: -1.29 } },
          { name: "Aaron Nesmith", min: 34, pts: 18, reb: 2, ast: 2, stl: 1, blk: 1, to: 2, tpm: 4, fgm: 5, fga: 14, ftm: 4, fta: 6, composite: -0.02, zScores: { pts: 0.903, reb: -0.485, ast: -0.151, stl: 0.355, blk: 0.515, tpm: 1.881, fgImpact: -1.174, ftImpact: -1.26, to: -0.604 } },
          { name: "Braden Smith", min: 10, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.33, zScores: { pts: -1.097, reb: -1.102, ast: -0.959, stl: 0.355, blk: -0.521, tpm: -0.77, fgImpact: 0, ftImpact: 0, to: 0.767 } },
          { name: "Larry Nance Jr.", min: 14, pts: 4, reb: 0, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -1.44, zScores: { pts: -0.653, reb: -1.102, ast: -0.959, stl: 1.449, blk: -0.521, tpm: -0.77, fgImpact: -0.302, ftImpact: 0.648, to: 0.767 } },
          { name: "Obi Toppin", min: 19, pts: 10, reb: 2, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: -0.24, zScores: { pts: 0.014, reb: -0.485, ast: 0.657, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0.839, ftImpact: 0, to: 0.767 } },
          { name: "Jarace Walker", min: 10, pts: 7, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: -3.9, zScores: { pts: -0.319, reb: -0.794, ast: -0.959, stl: -0.739, blk: -0.521, tpm: 0.555, fgImpact: -0.94, ftImpact: -0.954, to: 0.767 } },
          { name: "T.J. McConnell", min: 8, pts: 2, reb: 0, ast: 3, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.6, zScores: { pts: -0.875, reb: -1.102, ast: 0.253, stl: 0.355, blk: -0.521, tpm: -0.77, fgImpact: 0.034, ftImpact: 0, to: -1.976 } },
          { name: "Kelly Oubre Jr.", min: 23, pts: 14, reb: 2, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 9, ftm: 1, fta: 1, composite: -0.62, zScores: { pts: 0.458, reb: -0.485, ast: -0.151, stl: -0.739, blk: -0.521, tpm: -0.107, fgImpact: 1.208, ftImpact: 0.324, to: -0.604 } },
          { name: "Quenton Jackson", min: 25, pts: 10, reb: 5, ast: 4, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 3.48, zScores: { pts: 0.014, reb: 0.44, ast: 0.657, stl: 1.449, blk: -0.521, tpm: 0.555, fgImpact: 0.805, ftImpact: 0, to: 0.082 } }
        ]
      },
      home: {
        abbr: "DAL", name: "Dallas Mavericks", score: 125,
        players: [
          { name: "Caleb Martin", min: 19, pts: 0, reb: 3, ast: 5, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -1.05, zScores: { pts: -1.097, reb: -0.177, ast: 1.061, stl: 0.355, blk: -0.521, tpm: -0.77, fgImpact: -0.671, ftImpact: 0, to: 0.767 } },
          { name: "Daniel Gafford", min: 20, pts: 8, reb: 2, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 4, fta: 5, composite: -0.19, zScores: { pts: -0.208, reb: -0.485, ast: 0.253, stl: 0.355, blk: -0.521, tpm: -0.77, fgImpact: 0.403, ftImpact: 0.018, to: 0.767 } },
          { name: "P.J. Washington", min: 35, pts: 13, reb: 9, ast: 1, stl: 2, blk: 2, to: 2, tpm: 2, fgm: 4, fga: 12, ftm: 3, fta: 6, composite: 0.35, zScores: { pts: 0.347, reb: 1.674, ast: -0.555, stl: 1.449, blk: 1.552, tpm: 0.555, fgImpact: -1.208, ftImpact: -2.862, to: -0.604 } },
          { name: "Cooper Flagg", min: 39, pts: 43, reb: 10, ast: 6, stl: 3, blk: 1, to: 5, tpm: 3, fgm: 16, fga: 25, ftm: 8, fta: 8, composite: 14.22, zScores: { pts: 3.68, reb: 1.983, ast: 1.465, stl: 2.543, blk: 0.515, tpm: 1.218, fgImpact: 2.886, ftImpact: 2.59, to: -2.662 } },
          { name: "Kyrie Irving", min: 38, pts: 35, reb: 0, ast: 4, stl: 0, blk: 0, to: 2, tpm: 7, fgm: 11, fga: 18, ftm: 6, fta: 7, composite: 6.73, zScores: { pts: 2.791, reb: -1.102, ast: 0.657, stl: -0.739, blk: -0.521, tpm: 3.869, fgImpact: 1.711, ftImpact: 0.665, to: -0.604 } },
          { name: "Naji Marshall", min: 25, pts: 6, reb: 5, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 5, composite: -4.11, zScores: { pts: -0.431, reb: 0.44, ast: -0.151, stl: 0.355, blk: -0.521, tpm: -0.77, fgImpact: 0.067, ftImpact: -3.185, to: 0.082 } },
          { name: "Santi Aldama", min: 19, pts: 10, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 9, ftm: 1, fta: 1, composite: -2.26, zScores: { pts: 0.014, reb: 0.132, ast: -0.555, stl: -0.739, blk: -0.521, tpm: -0.107, fgImpact: -0.201, ftImpact: 0.324, to: -0.604 } },
          { name: "Zaccharie Risacher", min: 15, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.98, zScores: { pts: -0.653, reb: -0.485, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0.067, ftImpact: 0, to: 0.082 } },
          { name: "Max Christie", min: 5, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.097, reb: -0.485, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0, ftImpact: 0, to: 0.767 } },
          { name: "Walter Clayton Jr.", min: 25, pts: 6, reb: 6, ast: 4, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 6, ftm: 1, fta: 2, composite: -0.42, zScores: { pts: -0.431, reb: 0.749, ast: 0.657, stl: 0.355, blk: 0.515, tpm: -0.107, fgImpact: -0.604, ftImpact: -0.954, to: -0.604 } }
        ]
      }
    },
      {
      id: "401909957",
      line: "Denver Nuggets 100 @ Houston Rockets 110 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DEN", name: "Denver Nuggets", score: 100,
        players: [
          { name: "Aaron Gordon", min: 30, pts: 3, reb: 5, ast: 2, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 6, ftm: 1, fta: 2, composite: -6.06, zScores: { pts: -0.764, reb: 0.44, ast: -0.151, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: -1.309, ftImpact: -0.954, to: -1.29 } },
          { name: "Cameron Johnson", min: 31, pts: 8, reb: 2, ast: 1, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 6, ftm: 2, fta: 3, composite: -1.6, zScores: { pts: -0.208, reb: -0.485, ast: -0.555, stl: 1.449, blk: -0.521, tpm: 0.555, fgImpact: -0.604, ftImpact: -0.63, to: -0.604 } },
          { name: "Nikola Jokic", min: 39, pts: 25, reb: 16, ast: 9, stl: 1, blk: 2, to: 3, tpm: 1, fgm: 11, fga: 21, ftm: 2, fta: 2, composite: 10.05, zScores: { pts: 1.68, reb: 3.834, ast: 2.678, stl: 0.355, blk: 1.552, tpm: -0.107, fgImpact: 0.705, ftImpact: 0.648, to: -1.29 } },
          { name: "Jamal Murray", min: 39, pts: 38, reb: 2, ast: 2, stl: 1, blk: 2, to: 1, tpm: 5, fgm: 14, fga: 23, ftm: 5, fta: 5, composite: 10.79, zScores: { pts: 3.125, reb: -0.485, ast: -0.151, stl: 0.355, blk: 1.552, tpm: 2.544, fgImpact: 2.148, ftImpact: 1.619, to: 0.082 } },
          { name: "Christian Braun", min: 32, pts: 4, reb: 5, ast: 3, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 2, composite: -2.12, zScores: { pts: -0.653, reb: 0.44, ast: 0.253, stl: 2.543, blk: -0.521, tpm: -0.77, fgImpact: -0.94, ftImpact: -2.555, to: 0.082 } },
          { name: "Alpha Diallo", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.42, zScores: { pts: -1.097, reb: -1.102, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0, ftImpact: 0, to: 0.767 } },
          { name: "Marvin Bagley III", min: 12, pts: 6, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 4, composite: -2.96, zScores: { pts: -0.431, reb: -0.177, ast: -0.959, stl: -0.739, blk: 0.515, tpm: -0.77, fgImpact: 0.738, ftImpact: -1.908, to: 0.767 } },
          { name: "DaRon Holmes II", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.42, zScores: { pts: -1.097, reb: -1.102, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0, ftImpact: 0, to: 0.767 } },
          { name: "Bryce Hopkins", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.17, zScores: { pts: -0.875, reb: -1.102, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0.034, ftImpact: 0, to: 0.767 } },
          { name: "Spencer Jones", min: 14, pts: 0, reb: 0, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.99, zScores: { pts: -1.097, reb: -1.102, ast: -0.555, stl: -0.739, blk: 0.515, tpm: -0.77, fgImpact: -1.007, ftImpact: 0, to: 0.767 } },
          { name: "Trevon Brazile", min: 14, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: -3.8, zScores: { pts: -0.542, reb: -0.485, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0.403, ftImpact: -0.954, to: 0.767 } },
          { name: "DeMar DeRozan", min: 19, pts: 7, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 8, ftm: 3, fta: 3, composite: -1.91, zScores: { pts: -0.319, reb: 0.132, ast: -0.151, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: -1.275, ftImpact: 0.971, to: 0.767 } },
          { name: "Tyus Jones", min: 6, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -4.22, zScores: { pts: -0.875, reb: -1.102, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: -0.671, ftImpact: 0.648, to: 0.767 } }
        ]
      },
      home: {
        abbr: "HOU", name: "Houston Rockets", score: 110,
        players: [
          { name: "Kevin Durant", min: 36, pts: 23, reb: 12, ast: 8, stl: 0, blk: 1, to: 6, tpm: 1, fgm: 6, fga: 15, ftm: 10, fta: 10, composite: 5.09, zScores: { pts: 1.458, reb: 2.6, ast: 2.274, stl: -0.739, blk: 0.515, tpm: -0.107, fgImpact: -0.805, ftImpact: 3.238, to: -3.347 } },
          { name: "Jabari Smith Jr.", min: 38, pts: 14, reb: 7, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 6, fga: 13, ftm: 0, fta: 0, composite: 1.7, zScores: { pts: 0.458, reb: 1.057, ast: 0.253, stl: -0.739, blk: -0.521, tpm: 0.555, fgImpact: -0.134, ftImpact: 0, to: 0.767 } },
          { name: "Alperen Sengun", min: 35, pts: 20, reb: 12, ast: 8, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 9, fga: 17, ftm: 1, fta: 3, composite: 4.56, zScores: { pts: 1.125, reb: 2.6, ast: 2.274, stl: 0.355, blk: 0.515, tpm: -0.107, fgImpact: 0.638, ftImpact: -2.232, to: -0.604 } },
          { name: "Fred VanVleet", min: 30, pts: 12, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 9, ftm: 1, fta: 2, composite: -1.82, zScores: { pts: 0.236, reb: -0.794, ast: -0.151, stl: -0.739, blk: -0.521, tpm: 1.218, fgImpact: -0.201, ftImpact: -0.954, to: 0.082 } },
          { name: "Amen Thompson", min: 35, pts: 8, reb: 9, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: 0.94, zScores: { pts: -0.208, reb: 1.674, ast: 0.253, stl: 0.355, blk: -0.521, tpm: -0.77, fgImpact: -0.57, ftImpact: 0.648, to: 0.082 } },
          { name: "Tari Eason", min: 19, pts: 12, reb: 5, ast: 2, stl: 2, blk: 1, to: 0, tpm: 2, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: 3.64, zScores: { pts: 0.236, reb: 0.44, ast: -0.151, stl: 1.449, blk: 0.515, tpm: 0.555, fgImpact: -0.168, ftImpact: 0, to: 0.767 } },
          { name: "Isaiah Crawford", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.42, zScores: { pts: -1.097, reb: -1.102, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0, ftImpact: 0, to: 0.767 } },
          { name: "Marcus Smart", min: 17, pts: 5, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.95, zScores: { pts: -0.542, reb: -0.485, ast: -0.151, stl: 0.355, blk: -0.521, tpm: -0.107, fgImpact: -0.268, ftImpact: 0, to: 0.767 } },
          { name: "Bogdan Bogdanovic", min: 12, pts: 8, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -0.44, zScores: { pts: -0.208, reb: -0.177, ast: -0.555, stl: -0.739, blk: -0.521, tpm: 0.555, fgImpact: 0.436, ftImpact: 0, to: 0.767 } },
          { name: "Reed Sheppard", min: 17, pts: 8, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -2.78, zScores: { pts: -0.208, reb: -1.102, ast: -0.959, stl: -0.739, blk: -0.521, tpm: 0.555, fgImpact: -0.57, ftImpact: 0, to: 0.767 } },
          { name: "Bruce Thornton", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.42, zScores: { pts: -1.097, reb: -1.102, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0, ftImpact: 0, to: 0.767 } }
        ]
      }
    },
      {
      id: "401909958",
      line: "San Antonio Spurs 122 @ Phoenix Suns 96 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SA", name: "San Antonio Spurs", score: 122,
        players: [
          { name: "Julian Champagnie", min: 27, pts: 11, reb: 3, ast: 2, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 11, ftm: 0, fta: 0, composite: 0.47, zScores: { pts: 0.125, reb: -0.177, ast: -0.151, stl: 1.449, blk: -0.521, tpm: 1.218, fgImpact: -0.872, ftImpact: 0, to: -0.604 } },
          { name: "Victor Wembanyama", min: 25, pts: 40, reb: 11, ast: 3, stl: 0, blk: 9, to: 1, tpm: 2, fgm: 15, fga: 19, ftm: 8, fta: 10, composite: 18.82, zScores: { pts: 3.347, reb: 2.292, ast: 0.253, stl: -0.739, blk: 8.806, tpm: 0.555, fgImpact: 4.194, ftImpact: 0.035, to: 0.082 } },
          { name: "De'Aaron Fox", min: 29, pts: 15, reb: 9, ast: 6, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 8, ftm: 3, fta: 3, composite: 4.9, zScores: { pts: 0.569, reb: 1.674, ast: 1.465, stl: -0.739, blk: -0.521, tpm: 0.555, fgImpact: 0.839, ftImpact: 0.971, to: 0.082 } },
          { name: "Stephon Castle", min: 30, pts: 4, reb: 8, ast: 7, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 10, ftm: 0, fta: 2, composite: -3.46, zScores: { pts: -0.653, reb: 1.366, ast: 1.869, stl: 0.355, blk: -0.521, tpm: -0.77, fgImpact: -1.946, ftImpact: -2.555, to: -0.604 } },
          { name: "Dylan Harper", min: 26, pts: 17, reb: 5, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 7, fga: 10, ftm: 3, fta: 5, composite: 0.62, zScores: { pts: 0.792, reb: 0.44, ast: 0.657, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 1.577, ftImpact: -1.584, to: 0.767 } },
          { name: "Harrison Barnes", min: 21, pts: 11, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 3, fta: 3, composite: -0.86, zScores: { pts: 0.125, reb: -0.485, ast: -0.959, stl: -0.739, blk: -0.521, tpm: 0.555, fgImpact: -0.57, ftImpact: 0.971, to: 0.767 } },
          { name: "Keldon Johnson", min: 26, pts: 4, reb: 5, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -1.83, zScores: { pts: -0.653, reb: 0.44, ast: 0.253, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: -0.604, ftImpact: 0, to: 0.767 } },
          { name: "David Jones Garcia", min: 8, pts: 2, reb: 0, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -3.67, zScores: { pts: -0.875, reb: -1.102, ast: -0.959, stl: 1.449, blk: -0.521, tpm: -0.77, fgImpact: -0.973, ftImpact: 0, to: 0.082 } },
          { name: "Carter Bryant", min: 14, pts: 8, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -0.78, zScores: { pts: -0.208, reb: -0.794, ast: -0.555, stl: -0.739, blk: -0.521, tpm: 0.555, fgImpact: 0.067, ftImpact: 0.648, to: 0.767 } },
          { name: "Luke Kornet", min: 13, pts: 2, reb: 4, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.16, zScores: { pts: -0.875, reb: 0.132, ast: -0.555, stl: -0.739, blk: 0.515, tpm: -0.77, fgImpact: 0.369, ftImpact: 0, to: 0.767 } },
          { name: "Tarris Reed Jr.", min: 9, pts: 4, reb: 3, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.89, zScores: { pts: -0.653, reb: -0.177, ast: -0.555, stl: -0.739, blk: 0.515, tpm: -0.77, fgImpact: 0.403, ftImpact: 0, to: 0.082 } },
          { name: "Jordan McLaughlin", min: 11, pts: 4, reb: 4, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.8, zScores: { pts: -0.653, reb: 0.132, ast: -0.151, stl: 0.355, blk: -0.521, tpm: -0.77, fgImpact: -0.268, ftImpact: 0, to: 0.082 } }
        ]
      },
      home: {
        abbr: "PHX", name: "Phoenix Suns", score: 96,
        players: [
          { name: "Dillon Brooks", min: 26, pts: 7, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 14, ftm: 0, fta: 0, composite: -5.02, zScores: { pts: -0.319, reb: 0.132, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.107, fgImpact: -2.584, ftImpact: 0, to: 0.082 } },
          { name: "Miles Bridges", min: 26, pts: 7, reb: 5, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 3, fga: 9, ftm: 1, fta: 1, composite: -0.61, zScores: { pts: -0.319, reb: 0.44, ast: -0.959, stl: -0.739, blk: 1.552, tpm: -0.77, fgImpact: -0.906, ftImpact: 0.324, to: 0.767 } },
          { name: "Oso Ighodaro", min: 18, pts: 7, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: -2.86, zScores: { pts: -0.319, reb: 0.132, ast: -0.151, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: -0.268, ftImpact: -0.306, to: 0.082 } },
          { name: "Devin Booker", min: 29, pts: 32, reb: 2, ast: 4, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 10, fga: 17, ftm: 9, fta: 10, composite: 8.46, zScores: { pts: 2.458, reb: -0.485, ast: 0.657, stl: 0.355, blk: 0.515, tpm: 1.218, fgImpact: 1.342, ftImpact: 1.637, to: 0.767 } },
          { name: "Jalen Green", min: 24, pts: 6, reb: 5, ast: 4, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: -3.28, zScores: { pts: -0.431, reb: 0.44, ast: 0.657, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: -1.275, ftImpact: 0.648, to: -1.29 } },
          { name: "Ryan Dunn", min: 23, pts: 3, reb: 2, ast: 0, stl: 1, blk: 2, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -0.95, zScores: { pts: -0.764, reb: -0.485, ast: -0.959, stl: 0.355, blk: 1.552, tpm: -0.107, fgImpact: -1.309, ftImpact: 0, to: 0.767 } },
          { name: "Koa Peat", min: 6, pts: 4, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.17, zScores: { pts: -0.653, reb: -1.102, ast: -0.555, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0.403, ftImpact: 0, to: 0.767 } },
          { name: "Rasheer Fleming", min: 9, pts: 2, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.1, zScores: { pts: -0.875, reb: -0.794, ast: -0.959, stl: 0.355, blk: -0.521, tpm: -0.77, fgImpact: -0.302, ftImpact: 0, to: 0.767 } },
          { name: "Duop Reath", min: 6, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.88, zScores: { pts: -0.875, reb: -0.485, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: -0.302, ftImpact: 0, to: 0.767 } },
          { name: "Khaman Maluach", min: 20, pts: 11, reb: 5, ast: 2, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 4, fga: 6, ftm: 2, fta: 2, composite: 2.3, zScores: { pts: 0.125, reb: 0.44, ast: -0.151, stl: -0.739, blk: 0.515, tpm: -0.107, fgImpact: 0.805, ftImpact: 0.648, to: 0.767 } },
          { name: "Luke Kennard", min: 14, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.75, zScores: { pts: -0.764, reb: -0.794, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.107, fgImpact: -0.638, ftImpact: 0, to: 0.767 } },
          { name: "Collin Gillespie", min: 24, pts: 6, reb: 2, ast: 3, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -1.89, zScores: { pts: -0.431, reb: -0.485, ast: 0.253, stl: -0.739, blk: -0.521, tpm: 0.555, fgImpact: -0.604, ftImpact: 0, to: 0.082 } },
          { name: "Jamaree Bouyea", min: 9, pts: 4, reb: 0, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.03, zScores: { pts: -0.653, reb: -1.102, ast: 0.253, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0.738, ftImpact: 0, to: 0.767 } },
          { name: "Pat Spencer", min: 6, pts: 2, reb: 2, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.73, zScores: { pts: -0.875, reb: -0.485, ast: -0.151, stl: -0.739, blk: 0.515, tpm: -0.77, fgImpact: -0.302, ftImpact: 0, to: 0.082 } }
        ]
      }
    },
      {
      id: "401909959",
      line: "New Orleans Pelicans 87 @ Golden State Warriors 138 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NO", name: "New Orleans Pelicans", score: 87,
        players: [
          { name: "Herbert Jones", min: 24, pts: 10, reb: 6, ast: 1, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -0.27, zScores: { pts: 0.014, reb: 0.749, ast: -0.555, stl: -0.739, blk: 0.515, tpm: 0.555, fgImpact: -0.201, ftImpact: 0, to: -0.604 } },
          { name: "Saddiq Bey", min: 24, pts: 9, reb: 0, ast: 4, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 9, ftm: 2, fta: 2, composite: -1.4, zScores: { pts: -0.097, reb: -1.102, ast: 0.657, stl: -0.739, blk: -0.521, tpm: -0.107, fgImpact: -0.906, ftImpact: 0.648, to: 0.767 } },
          { name: "Karlo Matkovic", min: 17, pts: 4, reb: 6, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.94, zScores: { pts: -0.653, reb: 0.749, ast: -0.151, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0.067, ftImpact: 0, to: 0.082 } },
          { name: "Dejounte Murray", min: 18, pts: 12, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: -0.95, zScores: { pts: 0.236, reb: -0.177, ast: -0.555, stl: -0.739, blk: -0.521, tpm: 0.555, fgImpact: 0.168, ftImpact: 0, to: 0.082 } },
          { name: "Jeremiah Fears", min: 29, pts: 11, reb: 3, ast: 8, stl: 0, blk: 1, to: 6, tpm: 1, fgm: 4, fga: 12, ftm: 2, fta: 2, composite: -2.02, zScores: { pts: 0.125, reb: -0.177, ast: 2.274, stl: -0.739, blk: 0.515, tpm: -0.107, fgImpact: -1.208, ftImpact: 0.648, to: -3.347 } },
          { name: "Julian Reese", min: 9, pts: 2, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.47, zScores: { pts: -0.875, reb: -1.102, ast: -0.959, stl: -0.739, blk: 0.515, tpm: -0.77, fgImpact: -0.302, ftImpact: 0, to: 0.767 } },
          { name: "Derik Queen", min: 21, pts: 16, reb: 4, ast: 0, stl: 0, blk: 3, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 8, fta: 10, composite: 1.18, zScores: { pts: 0.68, reb: 0.132, ast: -0.959, stl: -0.739, blk: 2.588, tpm: -0.77, fgImpact: 0.134, ftImpact: 0.035, to: 0.082 } },
          { name: "Jordan Poole", min: 34, pts: 7, reb: 3, ast: 2, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 4, fta: 4, composite: -1.26, zScores: { pts: -0.319, reb: -0.177, ast: -0.151, stl: -0.739, blk: 0.515, tpm: -0.107, fgImpact: -0.973, ftImpact: 1.295, to: -0.604 } },
          { name: "Bryce McGowens", min: 28, pts: 8, reb: 2, ast: 0, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 8, ftm: 1, fta: 2, composite: -1.65, zScores: { pts: -0.208, reb: -0.485, ast: -0.959, stl: 0.355, blk: 0.515, tpm: -0.107, fgImpact: -0.57, ftImpact: -0.954, to: 0.767 } },
          { name: "Bennedict Mathurin", min: 24, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 9, ftm: 4, fta: 4, composite: -4.16, zScores: { pts: -0.431, reb: -0.485, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: -2.315, ftImpact: 1.295, to: 0.767 } },
          { name: "AJ Johnson", min: 12, pts: 2, reb: 2, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.58, zScores: { pts: -0.875, reb: -0.485, ast: 0.253, stl: 0.355, blk: -0.521, tpm: -0.77, fgImpact: -0.302, ftImpact: 0, to: 0.767 } }
        ]
      },
      home: {
        abbr: "GS", name: "Golden State Warriors", score: 138,
        players: [
          { name: "Draymond Green", min: 21, pts: 2, reb: 3, ast: 6, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.76, zScores: { pts: -0.875, reb: -0.177, ast: 1.465, stl: 0.355, blk: -0.521, tpm: -0.77, fgImpact: 0.369, ftImpact: 0, to: -0.604 } },
          { name: "Gui Santos", min: 21, pts: 3, reb: 7, ast: 4, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 3, fta: 4, composite: -0.59, zScores: { pts: -0.764, reb: 1.057, ast: 0.657, stl: -0.739, blk: 0.515, tpm: -0.77, fgImpact: -1.007, ftImpact: -0.306, to: 0.767 } },
          { name: "Yaxel Lendeborg", min: 27, pts: 23, reb: 7, ast: 4, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 8, fga: 10, ftm: 3, fta: 4, composite: 6.26, zScores: { pts: 1.458, reb: 1.057, ast: 0.657, stl: 0.355, blk: -0.521, tpm: 1.881, fgImpact: 2.282, ftImpact: -0.306, to: -0.604 } },
          { name: "Stephen Curry", min: 21, pts: 25, reb: 5, ast: 2, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 10, ftm: 9, fta: 9, composite: 6.46, zScores: { pts: 1.68, reb: 0.44, ast: -0.151, stl: -0.739, blk: -0.521, tpm: 1.881, fgImpact: 0.872, ftImpact: 2.914, to: 0.082 } },
          { name: "Brandin Podziemski", min: 26, pts: 25, reb: 2, ast: 4, stl: 1, blk: 1, to: 0, tpm: 5, fgm: 10, fga: 19, ftm: 0, fta: 0, composite: 6.7, zScores: { pts: 1.68, reb: -0.485, ast: 0.657, stl: 0.355, blk: 0.515, tpm: 2.544, fgImpact: 0.671, ftImpact: 0, to: 0.767 } },
          { name: "Georges Niang", min: 19, pts: 9, reb: 2, ast: 2, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -0.51, zScores: { pts: -0.097, reb: -0.485, ast: -0.151, stl: -0.739, blk: 0.515, tpm: -0.107, fgImpact: 0.47, ftImpact: 0, to: 0.082 } },
          { name: "Graham Ike", min: 12, pts: 4, reb: 5, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.21, zScores: { pts: -0.653, reb: 0.44, ast: -0.151, stl: -0.739, blk: 0.515, tpm: -0.77, fgImpact: 0.067, ftImpact: 0, to: 0.082 } },
          { name: "Malevy Leons", min: 12, pts: 0, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.48, zScores: { pts: -1.097, reb: -0.177, ast: -0.959, stl: -0.739, blk: 0.515, tpm: -0.77, fgImpact: -0.336, ftImpact: 0, to: 0.082 } },
          { name: "Al Horford", min: 15, pts: 5, reb: 2, ast: 6, stl: 2, blk: 3, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 4.87, zScores: { pts: -0.542, reb: -0.485, ast: 1.465, stl: 1.449, blk: 2.588, tpm: -0.107, fgImpact: -0.268, ftImpact: 0, to: 0.767 } },
          { name: "Charles Bassey", min: 18, pts: 12, reb: 10, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 6, fga: 8, ftm: 0, fta: 0, composite: 2.3, zScores: { pts: 0.236, reb: 1.983, ast: -0.555, stl: -0.739, blk: 0.515, tpm: -0.77, fgImpact: 1.544, ftImpact: 0, to: 0.082 } },
          { name: "De'Anthony Melton", min: 26, pts: 16, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 11, ftm: 2, fta: 2, composite: 3.34, zScores: { pts: 0.68, reb: 0.132, ast: 0.253, stl: 0.355, blk: -0.521, tpm: 1.881, fgImpact: -0.168, ftImpact: 0.648, to: 0.082 } },
          { name: "Brandon Williams", min: 2, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.57, zScores: { pts: -0.653, reb: -1.102, ast: -0.959, stl: -0.739, blk: -0.521, tpm: -0.77, fgImpact: 0.403, ftImpact: 0, to: 0.767 } },
          { name: "LJ Cryer", min: 20, pts: 10, reb: 0, ast: 3, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -1.66, zScores: { pts: 0.014, reb: -1.102, ast: 0.253, stl: -0.739, blk: -0.521, tpm: 0.555, fgImpact: -0.201, ftImpact: 0, to: 0.082 } }
        ]
      }
    }
    ]
  },
    "2026-11-10": {
    games: [
      {
      id: "401909960",
      line: "Milwaukee Bucks 85 @ New York Knicks 117 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIL", name: "Milwaukee Bucks", score: 85,
        players: [
          { name: "Kyle Kuzma", min: 26, pts: 5, reb: 5, ast: 3, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: 0.53, zScores: { pts: -0.56, reb: 0.44, ast: 0.482, stl: -0.695, blk: 0.976, tpm: -0.197, fgImpact: -0.633, ftImpact: 0.662, to: 0.052 } },
          { name: "Jaime Jaquez Jr.", min: 25, pts: 16, reb: 5, ast: 3, stl: 1, blk: 0, to: 4, tpm: 2, fgm: 6, fga: 13, ftm: 2, fta: 2, composite: 0.78, zScores: { pts: 0.838, reb: 0.44, ast: 0.482, stl: 0.578, blk: -0.457, tpm: 0.497, fgImpact: 0.128, ftImpact: 0.662, to: -2.392 } },
          { name: "Myles Turner", min: 27, pts: 3, reb: 3, ast: 2, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -3.48, zScores: { pts: -0.814, reb: -0.235, ast: -0.049, stl: -0.695, blk: 0.976, tpm: -0.197, fgImpact: -1.704, ftImpact: 0, to: -0.763 } },
          { name: "Ryan Rollins", min: 24, pts: 14, reb: 5, ast: 2, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 4.61, zScores: { pts: 0.584, reb: 0.44, ast: -0.049, stl: 0.578, blk: -0.457, tpm: 1.885, fgImpact: 0.761, ftImpact: 0, to: 0.867 } },
          { name: "Brayden Burries", min: 26, pts: 3, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -2.4, zScores: { pts: -0.814, reb: -0.235, ast: 0.482, stl: -0.695, blk: -0.457, tpm: -0.197, fgImpact: -1.347, ftImpact: 0, to: 0.867 } },
          { name: "Ousmane Dieng", min: 24, pts: 8, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -2.6, zScores: { pts: -0.178, reb: -0.235, ast: -1.111, stl: -0.695, blk: -0.457, tpm: 0.497, fgImpact: -0.472, ftImpact: 0, to: 0.052 } },
          { name: "Nate Ament", min: 22, pts: 10, reb: 2, ast: 1, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 8, ftm: 0, fta: 1, composite: 0.72, zScores: { pts: 0.076, reb: -0.572, ast: -0.58, stl: 1.851, blk: -0.457, tpm: 0.497, fgImpact: 0.323, ftImpact: -1.282, to: 0.867 } },
          { name: "Bogoljub Markovic", min: 4, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.52, zScores: { pts: -1.195, reb: -0.572, ast: -0.58, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: 0, ftImpact: 0, to: 0.867 } },
          { name: "Jericho Sims", min: 8, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -0.941, reb: -1.247, ast: -1.111, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: 0.438, ftImpact: 0, to: 0.867 } },
          { name: "Kel'el Ware", min: 17, pts: 8, reb: 4, ast: 1, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 2, fga: 6, ftm: 4, fta: 4, composite: 0.18, zScores: { pts: -0.178, reb: 0.103, ast: -0.58, stl: -0.695, blk: 2.409, tpm: -0.891, fgImpact: -0.552, ftImpact: 1.323, to: -0.763 } },
          { name: "Gary Trent Jr.", min: 6, pts: 5, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.78, zScores: { pts: -0.56, reb: -1.247, ast: -1.111, stl: 0.578, blk: -0.457, tpm: -0.197, fgImpact: 0.162, ftImpact: 0, to: 0.052 } },
          { name: "AJ Green", min: 8, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.81, zScores: { pts: -1.195, reb: -1.247, ast: -1.111, stl: 0.578, blk: -0.457, tpm: -0.891, fgImpact: -0.357, ftImpact: 0, to: 0.867 } },
          { name: "Kasparas Jakucionis", min: 23, pts: 11, reb: 0, ast: 4, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 12, ftm: 1, fta: 1, composite: -0.14, zScores: { pts: 0.203, reb: -1.247, ast: 1.013, stl: 0.578, blk: -0.457, tpm: 0.497, fgImpact: -1.105, ftImpact: 0.331, to: 0.052 } }
        ]
      },
      home: {
        abbr: "NY", name: "New York Knicks", score: 117,
        players: [
          { name: "OG Anunoby", min: 29, pts: 19, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 6, fga: 12, ftm: 2, fta: 2, composite: 3.56, zScores: { pts: 1.22, reb: -0.235, ast: -0.049, stl: -0.695, blk: -0.457, tpm: 2.58, fgImpact: 0.485, ftImpact: 0.662, to: 0.052 } },
          { name: "Karl-Anthony Towns", min: 27, pts: 21, reb: 16, ast: 3, stl: 2, blk: 1, to: 3, tpm: 2, fgm: 5, fga: 14, ftm: 9, fta: 14, composite: 3.4, zScores: { pts: 1.474, reb: 4.153, ast: 0.482, stl: 1.851, blk: 0.976, tpm: 0.497, fgImpact: -1.024, ftImpact: -3.432, to: -1.577 } },
          { name: "Mikal Bridges", min: 17, pts: 4, reb: 5, ast: 1, stl: 3, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: 2.7, zScores: { pts: -0.687, reb: 0.44, ast: -0.58, stl: 3.125, blk: 0.976, tpm: -0.891, fgImpact: -0.552, ftImpact: 0, to: 0.867 } },
          { name: "Landry Shamet", min: 28, pts: 10, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 0.68, zScores: { pts: 0.076, reb: -0.235, ast: -0.049, stl: -0.695, blk: -0.457, tpm: 0.497, fgImpact: 0.68, ftImpact: 0, to: 0.867 } },
          { name: "Jalen Brunson", min: 28, pts: 23, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 18, ftm: 8, fta: 8, composite: 2.27, zScores: { pts: 1.728, reb: 0.103, ast: -0.049, stl: -0.695, blk: -0.457, tpm: -0.197, fgImpact: -0.862, ftImpact: 2.646, to: 0.052 } },
          { name: "Dalton Knecht", min: 8, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.57, zScores: { pts: -0.814, reb: -1.247, ast: -1.111, stl: -0.695, blk: -0.457, tpm: -0.197, fgImpact: 0.081, ftImpact: 0, to: 0.867 } },
          { name: "Pacome Dadiet", min: 6, pts: 8, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 1, fta: 1, composite: -1.41, zScores: { pts: -0.178, reb: -0.572, ast: -1.111, stl: -0.695, blk: -0.457, tpm: -0.197, fgImpact: 0.599, ftImpact: 0.331, to: 0.867 } },
          { name: "Mohamed Diawara", min: 18, pts: 5, reb: 3, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.98, zScores: { pts: -0.56, reb: -0.235, ast: 0.482, stl: -0.695, blk: -0.457, tpm: -0.197, fgImpact: -0.552, ftImpact: 0, to: -0.763 } },
          { name: "Andre Drummond", min: 16, pts: 2, reb: 14, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: 1.46, zScores: { pts: -0.941, reb: 3.478, ast: 0.482, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: 0.438, ftImpact: 0, to: 0.052 } },
          { name: "James Wiseman", min: 5, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.12, zScores: { pts: -1.195, reb: -0.91, ast: -1.111, stl: 0.578, blk: -0.457, tpm: -0.891, fgImpact: 0, ftImpact: 0, to: 0.867 } },
          { name: "Jordan Clarkson", min: 11, pts: 2, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -3.05, zScores: { pts: -0.941, reb: 0.103, ast: -0.049, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: -0.99, ftImpact: 0, to: 0.867 } },
          { name: "Jose Alvarado", min: 6, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.03, zScores: { pts: -1.195, reb: -0.91, ast: -0.58, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: -0.357, ftImpact: 0, to: 0.052 } },
          { name: "Miles McBride", min: 25, pts: 8, reb: 0, ast: 3, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 0.78, zScores: { pts: -0.178, reb: -1.247, ast: 0.482, stl: 0.578, blk: -0.457, tpm: 0.497, fgImpact: 0.242, ftImpact: 0, to: 0.867 } },
          { name: "Tyler Kolek", min: 15, pts: 12, reb: 3, ast: 4, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 3.77, zScores: { pts: 0.33, reb: -0.235, ast: 1.013, stl: -0.695, blk: 0.976, tpm: 0.497, fgImpact: 1.832, ftImpact: 0, to: 0.052 } }
        ]
      }
    },
      {
      id: "401909961",
      line: "Boston Celtics 123 @ Philadelphia 76ers 101 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BOS", name: "Boston Celtics", score: 123,
        players: [
          { name: "Paul George", min: 30, pts: 36, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 6, fgm: 14, fga: 22, ftm: 2, fta: 2, composite: 9.35, zScores: { pts: 3.38, reb: 0.44, ast: -0.58, stl: -0.695, blk: -0.457, tpm: 3.274, fgImpact: 3.273, ftImpact: 0.662, to: 0.052 } },
          { name: "Jayson Tatum", min: 32, pts: 21, reb: 6, ast: 4, stl: 0, blk: 2, to: 3, tpm: 3, fgm: 8, fga: 17, ftm: 2, fta: 2, composite: 5.54, zScores: { pts: 1.474, reb: 0.778, ast: 1.013, stl: -0.695, blk: 2.409, tpm: 1.191, fgImpact: 0.289, ftImpact: 0.662, to: -1.577 } },
          { name: "Neemias Queta", min: 22, pts: 4, reb: 6, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.26, zScores: { pts: -0.687, reb: 0.778, ast: 0.482, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: 0.162, ftImpact: 0, to: 0.052 } },
          { name: "Derrick White", min: 22, pts: 5, reb: 1, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.84, zScores: { pts: -0.56, reb: -0.91, ast: 0.482, stl: -0.695, blk: -0.457, tpm: -0.197, fgImpact: -0.552, ftImpact: 0, to: 0.052 } },
          { name: "Jordan Walsh", min: 19, pts: 8, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 1, fta: 1, composite: 0.21, zScores: { pts: -0.178, reb: -0.572, ast: -0.049, stl: 0.578, blk: -0.457, tpm: -0.197, fgImpact: -0.115, ftImpact: 0.331, to: 0.867 } },
          { name: "Sam Hauser", min: 18, pts: 12, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 3.36, zScores: { pts: 0.33, reb: 0.44, ast: -0.049, stl: -0.695, blk: -0.457, tpm: 1.885, fgImpact: 1.037, ftImpact: 0, to: 0.867 } },
          { name: "Luka Garza", min: 9, pts: 2, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.33, zScores: { pts: -0.941, reb: -1.247, ast: -0.049, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: 0.081, ftImpact: 0, to: 0.867 } },
          { name: "Mitchell Robinson", min: 17, pts: 2, reb: 6, ast: 2, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: 0.33, zScores: { pts: -0.941, reb: 0.778, ast: -0.049, stl: 0.578, blk: 0.976, tpm: -0.891, fgImpact: -0.99, ftImpact: 0, to: 0.867 } },
          { name: "Payton Pritchard", min: 30, pts: 18, reb: 6, ast: 5, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 7, fga: 15, ftm: 0, fta: 0, composite: 6.5, zScores: { pts: 1.092, reb: 0.778, ast: 1.544, stl: 0.578, blk: -0.457, tpm: 1.885, fgImpact: 0.208, ftImpact: 0, to: 0.867 } },
          { name: "Ron Harper Jr.", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.92, zScores: { pts: -1.195, reb: -0.91, ast: -1.111, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: -0.714, ftImpact: 0, to: 0.052 } },
          { name: "Baylor Scheierman", min: 18, pts: 5, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.81, zScores: { pts: -0.56, reb: -0.235, ast: -0.049, stl: -0.695, blk: -0.457, tpm: -0.197, fgImpact: 0.519, ftImpact: 0, to: 0.867 } },
          { name: "Hugo Gonzalez", min: 19, pts: 10, reb: 2, ast: 2, stl: 3, blk: 1, to: 1, tpm: 2, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 5.14, zScores: { pts: 0.076, reb: -0.572, ast: -0.049, stl: 3.125, blk: 0.976, tpm: 0.497, fgImpact: 1.037, ftImpact: 0, to: 0.052 } }
        ]
      },
      home: {
        abbr: "PHI", name: "Philadelphia 76ers", score: 101,
        players: [
          { name: "LeBron James", min: 29, pts: 11, reb: 8, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 12, ftm: 2, fta: 2, composite: 1.46, zScores: { pts: 0.203, reb: 1.453, ast: 1.544, stl: -0.695, blk: -0.457, tpm: -0.197, fgImpact: -1.105, ftImpact: 0.662, to: 0.052 } },
          { name: "Joel Embiid", min: 31, pts: 16, reb: 6, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 9, ftm: 11, fta: 13, composite: -1.62, zScores: { pts: 0.838, reb: 0.778, ast: -0.58, stl: -0.695, blk: -0.457, tpm: -0.197, fgImpact: -1.623, ftImpact: 1.075, to: -0.763 } },
          { name: "Jaylen Brown", min: 26, pts: 13, reb: 5, ast: 2, stl: 2, blk: 1, to: 4, tpm: 1, fgm: 4, fga: 9, ftm: 4, fta: 6, composite: -0.19, zScores: { pts: 0.457, reb: 0.44, ast: -0.049, stl: 1.851, blk: 0.976, tpm: -0.197, fgImpact: -0.034, ftImpact: -1.241, to: -2.392 } },
          { name: "Tyrese Maxey", min: 34, pts: 24, reb: 1, ast: 4, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 8, fga: 12, ftm: 5, fta: 5, composite: 4.96, zScores: { pts: 1.855, reb: -0.91, ast: 1.013, stl: -0.695, blk: -0.457, tpm: 1.191, fgImpact: 2.074, ftImpact: 1.654, to: -0.763 } },
          { name: "VJ Edgecombe", min: 32, pts: 8, reb: 4, ast: 5, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 11, ftm: 0, fta: 0, composite: 1.44, zScores: { pts: -0.178, reb: 0.103, ast: 1.544, stl: 0.578, blk: 0.976, tpm: -0.891, fgImpact: -0.748, ftImpact: 0, to: 0.052 } },
          { name: "Dean Wade", min: 23, pts: 8, reb: 9, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 1.31, zScores: { pts: -0.178, reb: 1.79, ast: -1.111, stl: -0.695, blk: -0.457, tpm: 0.497, fgImpact: 0.599, ftImpact: 0, to: 0.867 } },
          { name: "Jabari Walker", min: 15, pts: 2, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.22, zScores: { pts: -0.941, reb: 0.103, ast: -1.111, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: -0.276, ftImpact: 0, to: 0.052 } },
          { name: "Justin Edwards", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.55, zScores: { pts: -1.195, reb: -1.247, ast: -1.111, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: 0, ftImpact: 0, to: 0.052 } },
          { name: "Kentavious Caldwell-Pope", min: 16, pts: 0, reb: 0, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.95, zScores: { pts: -1.195, reb: -1.247, ast: -0.049, stl: -0.695, blk: 0.976, tpm: -0.891, fgImpact: -0.714, ftImpact: 0, to: 0.867 } },
          { name: "Anfernee Simons", min: 18, pts: 17, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 7, fga: 13, ftm: 0, fta: 0, composite: 1.45, zScores: { pts: 0.965, reb: -0.235, ast: -1.111, stl: -0.695, blk: -0.457, tpm: 1.191, fgImpact: 0.922, ftImpact: 0, to: 0.867 } },
          { name: "Labaron Philon Jr.", min: 6, pts: 2, reb: 1, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -3.06, zScores: { pts: -0.941, reb: -0.91, ast: 0.482, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: -0.357, ftImpact: 0.662, to: 0.052 } },
          { name: "Rayan Rupert", min: 6, pts: 0, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.3, zScores: { pts: -1.195, reb: -0.91, ast: -0.58, stl: 0.578, blk: -0.457, tpm: -0.891, fgImpact: -0.714, ftImpact: 0, to: 0.867 } }
        ]
      }
    },
      {
      id: "401909962",
      line: "LA Clippers 110 @ Phoenix Suns 133 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LAC", name: "LA Clippers", score: 110,
        players: [
          { name: "Derrick Jones Jr.", min: 24, pts: 11, reb: 3, ast: 0, stl: 2, blk: 1, to: 1, tpm: 2, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: 1.61, zScores: { pts: 0.203, reb: -0.235, ast: -1.111, stl: 1.851, blk: 0.976, tpm: 0.497, fgImpact: 0.323, ftImpact: -0.951, to: 0.052 } },
          { name: "Rui Hachimura", min: 23, pts: 13, reb: 5, ast: 1, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 10, ftm: 2, fta: 3, composite: 1.94, zScores: { pts: 0.457, reb: 0.44, ast: -0.58, stl: 1.851, blk: -0.457, tpm: 1.191, fgImpact: -0.391, ftImpact: -0.62, to: 0.052 } },
          { name: "Brook Lopez", min: 19, pts: 8, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 1, fta: 3, composite: -3.49, zScores: { pts: -0.178, reb: 0.103, ast: -0.58, stl: -0.695, blk: -0.457, tpm: -0.197, fgImpact: -0.115, ftImpact: -2.233, to: 0.867 } },
          { name: "Kris Dunn", min: 19, pts: 3, reb: 2, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.65, zScores: { pts: -0.814, reb: -0.572, ast: 0.482, stl: -0.695, blk: -0.457, tpm: -0.197, fgImpact: -0.633, ftImpact: 0, to: -0.763 } },
          { name: "Darius Garland", min: 25, pts: 13, reb: 5, ast: 6, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 5, fga: 12, ftm: 2, fta: 2, composite: -0.42, zScores: { pts: 0.457, reb: 0.44, ast: 2.076, stl: -0.695, blk: -0.457, tpm: -0.197, fgImpact: -0.31, ftImpact: 0.662, to: -2.392 } },
          { name: "Isaiah Jackson", min: 16, pts: 4, reb: 4, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.08, zScores: { pts: -0.687, reb: 0.103, ast: -1.111, stl: 0.578, blk: -0.457, tpm: -0.891, fgImpact: 0.519, ftImpact: 0, to: 0.867 } },
          { name: "Baba Miller", min: 16, pts: 13, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 4, fga: 4, ftm: 4, fta: 6, composite: 0.91, zScores: { pts: 0.457, reb: 0.103, ast: -1.111, stl: -0.695, blk: 0.976, tpm: -0.197, fgImpact: 1.751, ftImpact: -1.241, to: 0.867 } },
          { name: "Max Strus", min: 22, pts: 12, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: 0.48, zScores: { pts: 0.33, reb: -0.235, ast: 0.482, stl: -0.695, blk: -0.457, tpm: 0.497, fgImpact: -0.31, ftImpact: 0, to: 0.867 } },
          { name: "Jalen Pickett", min: 8, pts: 3, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.79, zScores: { pts: -0.814, reb: -0.91, ast: -0.58, stl: 0.578, blk: -0.457, tpm: -0.197, fgImpact: -0.276, ftImpact: 0, to: 0.867 } },
          { name: "Kobe Sanders", min: 26, pts: 9, reb: 3, ast: 7, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 6, ftm: 4, fta: 4, composite: 1.44, zScores: { pts: -0.051, reb: -0.235, ast: 2.607, stl: 0.578, blk: -0.457, tpm: -0.197, fgImpact: -0.552, ftImpact: 1.323, to: -1.577 } },
          { name: "Gradey Dick", min: 19, pts: 10, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 9, ftm: 1, fta: 1, composite: 0.88, zScores: { pts: 0.076, reb: -0.235, ast: -0.049, stl: 0.578, blk: -0.457, tpm: -0.197, fgImpact: -0.034, ftImpact: 0.331, to: 0.867 } },
          { name: "Keaton Wagler", min: 23, pts: 11, reb: 0, ast: 4, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 12, ftm: 4, fta: 5, composite: -0.64, zScores: { pts: 0.203, reb: -1.247, ast: 1.013, stl: 1.851, blk: -0.457, tpm: -0.197, fgImpact: -1.9, ftImpact: 0.041, to: 0.052 } }
        ]
      },
      home: {
        abbr: "PHX", name: "Phoenix Suns", score: 133,
        players: [
          { name: "Dillon Brooks", min: 22, pts: 8, reb: 4, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 12, ftm: 0, fta: 0, composite: -1.13, zScores: { pts: -0.178, reb: 0.103, ast: -0.049, stl: 0.578, blk: -0.457, tpm: -0.891, fgImpact: -1.105, ftImpact: 0, to: 0.867 } },
          { name: "Miles Bridges", min: 18, pts: 8, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -1.2, zScores: { pts: -0.178, reb: 0.103, ast: -0.049, stl: -0.695, blk: -0.457, tpm: 0.497, fgImpact: -0.472, ftImpact: 0, to: 0.052 } },
          { name: "Oso Ighodaro", min: 20, pts: 6, reb: 7, ast: 2, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 0.06, zScores: { pts: -0.433, reb: 1.115, ast: -0.049, stl: 0.578, blk: 0.976, tpm: -0.891, fgImpact: -0.472, ftImpact: 0, to: -0.763 } },
          { name: "Devin Booker", min: 29, pts: 17, reb: 3, ast: 5, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 6, fga: 14, ftm: 3, fta: 4, composite: -1.29, zScores: { pts: 0.965, reb: -0.235, ast: 1.544, stl: -0.695, blk: -0.457, tpm: 0.497, fgImpact: -0.229, ftImpact: -0.289, to: -2.392 } },
          { name: "Jalen Green", min: 21, pts: 13, reb: 5, ast: 1, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 5, fga: 7, ftm: 0, fta: 2, composite: -2.31, zScores: { pts: 0.457, reb: 0.44, ast: -0.58, stl: -0.695, blk: -0.457, tpm: 1.191, fgImpact: 1.475, ftImpact: -2.564, to: -1.577 } },
          { name: "Ryan Dunn", min: 25, pts: 10, reb: 8, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 5, ftm: 1, fta: 2, composite: 0.62, zScores: { pts: 0.076, reb: 1.453, ast: -0.049, stl: -0.695, blk: -0.457, tpm: -0.197, fgImpact: 1.394, ftImpact: -0.951, to: 0.052 } },
          { name: "Koa Peat", min: 6, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 1, composite: -3.72, zScores: { pts: -0.56, reb: -0.91, ast: -1.111, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: 0.519, ftImpact: 0.331, to: 0.052 } },
          { name: "Rasheer Fleming", min: 12, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -5, zScores: { pts: -0.687, reb: -0.572, ast: -1.111, stl: -0.695, blk: -0.457, tpm: -0.197, fgImpact: 0.438, ftImpact: -0.951, to: -0.763 } },
          { name: "Khaman Maluach", min: 22, pts: 11, reb: 7, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 3, fta: 3, composite: 3.01, zScores: { pts: 0.203, reb: 1.115, ast: 0.482, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: 1.394, ftImpact: 0.992, to: 0.867 } },
          { name: "Luke Kennard", min: 22, pts: 14, reb: 1, ast: 3, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 5, fga: 7, ftm: 1, fta: 3, composite: -2.14, zScores: { pts: 0.584, reb: -0.91, ast: 0.482, stl: -0.695, blk: -0.457, tpm: 1.191, fgImpact: 1.475, ftImpact: -2.233, to: -1.577 } },
          { name: "Jordan Goodwin", min: 14, pts: 18, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 6, fgm: 6, fga: 7, ftm: 0, fta: 0, composite: 6.81, zScores: { pts: 1.092, reb: -0.235, ast: -0.58, stl: 0.578, blk: -0.457, tpm: 3.274, fgImpact: 2.27, ftImpact: 0, to: 0.867 } },
          { name: "Collin Gillespie", min: 22, pts: 12, reb: 2, ast: 8, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 4.92, zScores: { pts: 0.33, reb: -0.572, ast: 3.138, stl: 0.578, blk: -0.457, tpm: 1.885, fgImpact: -0.034, ftImpact: 0, to: 0.052 } },
          { name: "Jamaree Bouyea", min: 8, pts: 7, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 3, fta: 3, composite: -0.04, zScores: { pts: -0.306, reb: -0.91, ast: 0.482, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: 0.876, ftImpact: 0.992, to: 0.867 } }
        ]
      }
    },
      {
      id: "401909963",
      line: "Miami Heat 115 @ Utah Jazz 109 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIA", name: "Miami Heat", score: 115,
        players: [
          { name: "Giannis Antetokounmpo", min: 31, pts: 30, reb: 11, ast: 4, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 12, fga: 21, ftm: 5, fta: 9, composite: 3.37, zScores: { pts: 2.617, reb: 2.465, ast: 1.013, stl: -0.695, blk: -0.457, tpm: -0.197, fgImpact: 2.04, ftImpact: -3.473, to: 0.052 } },
          { name: "Bam Adebayo", min: 37, pts: 11, reb: 8, ast: 4, stl: 3, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 8, ftm: 9, fta: 12, composite: 5.25, zScores: { pts: 0.203, reb: 1.453, ast: 1.013, stl: 3.125, blk: 2.409, tpm: -0.891, fgImpact: -2.061, ftImpact: -0.868, to: 0.867 } },
          { name: "Klay Thompson", min: 30, pts: 11, reb: 1, ast: 2, stl: 1, blk: 2, to: 1, tpm: 2, fgm: 3, fga: 13, ftm: 3, fta: 3, composite: 1.52, zScores: { pts: 0.203, reb: -0.91, ast: -0.049, stl: 0.578, blk: 2.409, tpm: 0.497, fgImpact: -2.256, ftImpact: 0.992, to: 0.052 } },
          { name: "Davion Mitchell", min: 38, pts: 19, reb: 5, ast: 8, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 13, ftm: 6, fta: 8, composite: 5.37, zScores: { pts: 1.22, reb: 0.44, ast: 3.138, stl: 1.851, blk: -0.457, tpm: 1.191, fgImpact: -0.667, ftImpact: -0.579, to: -0.763 } },
          { name: "Pelle Larsson", min: 31, pts: 14, reb: 7, ast: 2, stl: 1, blk: 0, to: 4, tpm: 2, fgm: 4, fga: 7, ftm: 4, fta: 4, composite: 1.88, zScores: { pts: 0.584, reb: 1.115, ast: -0.049, stl: 0.578, blk: -0.457, tpm: 0.497, fgImpact: 0.68, ftImpact: 1.323, to: -2.392 } },
          { name: "Andrew Wiggins", min: 19, pts: 13, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 8, ftm: 1, fta: 1, composite: -0.24, zScores: { pts: 0.457, reb: -1.247, ast: -1.111, stl: -0.695, blk: -0.457, tpm: 0.497, fgImpact: 1.118, ftImpact: 0.331, to: 0.867 } },
          { name: "Bobby Portis", min: 17, pts: 5, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -2.17, zScores: { pts: -0.56, reb: -0.91, ast: -0.58, stl: 0.578, blk: -0.457, tpm: -0.197, fgImpact: -0.909, ftImpact: 0, to: 0.867 } },
          { name: "Simone Fontecchio", min: 7, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 3, composite: -6.86, zScores: { pts: -0.814, reb: -1.247, ast: -1.111, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: -0.276, ftImpact: -2.233, to: 0.867 } },
          { name: "Myron Gardner", min: 10, pts: 4, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -1.94, zScores: { pts: -0.687, reb: -0.235, ast: -0.58, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: 0.081, ftImpact: 0.662, to: 0.867 } },
          { name: "Ryan Conwell", min: 21, pts: 5, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 7, ftm: 2, fta: 2, composite: -2.03, zScores: { pts: -0.56, reb: 0.103, ast: -0.049, stl: -0.695, blk: -0.457, tpm: -0.197, fgImpact: -1.704, ftImpact: 0.662, to: 0.867 } }
        ]
      },
      home: {
        abbr: "UTAH", name: "Utah Jazz", score: 109,
        players: [
          { name: "Jaxson Hayes", min: 17, pts: 6, reb: 2, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -0.27, zScores: { pts: -0.433, reb: -0.572, ast: -0.58, stl: 0.578, blk: 0.976, tpm: -0.891, fgImpact: 0.599, ftImpact: 0, to: 0.052 } },
          { name: "Josh Okogie", min: 21, pts: 6, reb: 4, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 8, ftm: 4, fta: 5, composite: -2.05, zScores: { pts: -0.433, reb: 0.103, ast: 1.013, stl: 0.578, blk: -0.457, tpm: -0.891, fgImpact: -2.061, ftImpact: 0.041, to: 0.052 } },
          { name: "Josh Green", min: 30, pts: 2, reb: 5, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.47, zScores: { pts: -0.941, reb: 0.44, ast: 1.013, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: -0.99, ftImpact: 0, to: 0.052 } },
          { name: "Ace Bailey", min: 35, pts: 23, reb: 7, ast: 2, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 10, fga: 15, ftm: 0, fta: 0, composite: 4.66, zScores: { pts: 1.728, reb: 1.115, ast: -0.049, stl: -0.695, blk: -0.457, tpm: 1.191, fgImpact: 2.593, ftImpact: 0, to: -0.763 } },
          { name: "Darryn Peterson", min: 31, pts: 25, reb: 4, ast: 4, stl: 1, blk: 0, to: 5, tpm: 4, fgm: 10, fga: 19, ftm: 1, fta: 2, composite: 2.11, zScores: { pts: 1.982, reb: 0.103, ast: 1.013, stl: 0.578, blk: -0.457, tpm: 1.885, fgImpact: 1.165, ftImpact: -0.951, to: -3.207 } },
          { name: "Kyle Filipowski", min: 15, pts: 7, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 3, composite: -5.22, zScores: { pts: -0.306, reb: 0.103, ast: -0.58, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: 0.599, ftImpact: -2.233, to: -0.763 } },
          { name: "Brice Sensabaugh", min: 14, pts: 5, reb: 4, ast: 4, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.48, zScores: { pts: -0.56, reb: 0.103, ast: 1.013, stl: 0.578, blk: -0.457, tpm: -0.197, fgImpact: -0.195, ftImpact: 0, to: -0.763 } },
          { name: "Tony Bradley", min: 14, pts: 4, reb: 5, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: 0, zScores: { pts: -0.687, reb: 0.44, ast: -1.111, stl: -0.695, blk: 0.976, tpm: -0.891, fgImpact: 0.438, ftImpact: 0.662, to: 0.867 } },
          { name: "Mo Bamba", min: 17, pts: 7, reb: 7, ast: 0, stl: 0, blk: 3, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 3, fta: 4, composite: 2.24, zScores: { pts: -0.306, reb: 1.115, ast: -1.111, stl: -0.695, blk: 3.842, tpm: -0.891, fgImpact: 0.519, ftImpact: -0.289, to: 0.052 } },
          { name: "Svi Mykhailiuk", min: 21, pts: 7, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -0.89, zScores: { pts: -0.306, reb: -0.572, ast: 0.482, stl: 0.578, blk: -0.457, tpm: -0.197, fgImpact: -0.472, ftImpact: 0, to: 0.052 } },
          { name: "Isaiah Collier", min: 24, pts: 17, reb: 5, ast: 5, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 5, fga: 10, ftm: 3, fta: 6, composite: 1.74, zScores: { pts: 0.965, reb: 0.44, ast: 1.544, stl: 0.578, blk: -0.457, tpm: 1.885, fgImpact: 0.404, ftImpact: -2.853, to: -0.763 } }
        ]
      }
    },
      {
      id: "401909964",
      line: "Orlando Magic 107 @ Sacramento Kings 100 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ORL", name: "Orlando Magic", score: 107,
        players: [
          { name: "Jamal Cain", min: 20, pts: 5, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.59, zScores: { pts: -0.56, reb: -0.235, ast: -0.58, stl: 0.578, blk: -0.457, tpm: -0.197, fgImpact: -0.195, ftImpact: 0, to: 0.052 } },
          { name: "Franz Wagner", min: 38, pts: 33, reb: 7, ast: 7, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 11, fga: 23, ftm: 10, fta: 10, composite: 10.18, zScores: { pts: 2.999, reb: 1.115, ast: 2.607, stl: 1.851, blk: -0.457, tpm: -0.197, fgImpact: 0.532, ftImpact: 3.308, to: -1.577 } },
          { name: "Wendell Carter Jr.", min: 33, pts: 8, reb: 11, ast: 1, stl: 1, blk: 3, to: 0, tpm: 0, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 6.07, zScores: { pts: -0.178, reb: 2.465, ast: -0.58, stl: 0.578, blk: 3.842, tpm: -0.891, fgImpact: -0.034, ftImpact: 0, to: 0.867 } },
          { name: "Desmond Bane", min: 36, pts: 15, reb: 6, ast: 4, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 5, fga: 19, ftm: 1, fta: 2, composite: -1.29, zScores: { pts: 0.711, reb: 0.778, ast: 1.013, stl: -0.695, blk: -0.457, tpm: 1.885, fgImpact: -2.809, ftImpact: -0.951, to: -0.763 } },
          { name: "Anthony Black", min: 33, pts: 26, reb: 7, ast: 5, stl: 4, blk: 0, to: 4, tpm: 2, fgm: 10, fga: 17, ftm: 4, fta: 4, composite: 10.02, zScores: { pts: 2.109, reb: 1.115, ast: 1.544, stl: 4.398, blk: -0.457, tpm: 0.497, fgImpact: 1.879, ftImpact: 1.323, to: -2.392 } },
          { name: "Nikola Vucevic", min: 18, pts: 5, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.53, zScores: { pts: -0.56, reb: 0.103, ast: -0.58, stl: -0.695, blk: -0.457, tpm: -0.197, fgImpact: -0.195, ftImpact: 0, to: 0.052 } },
          { name: "Goga Bitadze", min: 15, pts: 2, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.4, zScores: { pts: -0.941, reb: -0.572, ast: -0.58, stl: -0.695, blk: 0.976, tpm: -0.891, fgImpact: 0.438, ftImpact: 0, to: 0.867 } },
          { name: "Jevon Carter", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.9, zScores: { pts: -1.195, reb: -1.247, ast: -1.111, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: -0.357, ftImpact: 0, to: 0.052 } },
          { name: "Alex Morales", min: 29, pts: 7, reb: 7, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -0.54, zScores: { pts: -0.306, reb: 1.115, ast: -1.111, stl: -0.695, blk: -0.457, tpm: -0.197, fgImpact: 0.242, ftImpact: 0, to: 0.867 } },
          { name: "Jase Richardson", min: 15, pts: 6, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -1, zScores: { pts: -0.433, reb: -0.91, ast: -0.58, stl: 0.578, blk: -0.457, tpm: -0.891, fgImpact: 0.162, ftImpact: 0.662, to: 0.867 } }
        ]
      },
      home: {
        abbr: "SAC", name: "Sacramento Kings", score: 100,
        players: [
          { name: "Domantas Sabonis", min: 24, pts: 0, reb: 2, ast: 5, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 2, composite: -4.68, zScores: { pts: -1.195, reb: -0.572, ast: 1.544, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: -0.714, ftImpact: -2.564, to: 0.867 } },
          { name: "De'Andre Hunter", min: 34, pts: 15, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 11, ftm: 2, fta: 2, composite: 0.75, zScores: { pts: 0.711, reb: 0.103, ast: -0.049, stl: -0.695, blk: -0.457, tpm: 1.191, fgImpact: 0.047, ftImpact: 0.662, to: -0.763 } },
          { name: "Precious Achiuwa", min: 14, pts: 10, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 3, fta: 3, composite: 0.76, zScores: { pts: 0.076, reb: -0.235, ast: -1.111, stl: 0.578, blk: -0.457, tpm: -0.197, fgImpact: 0.242, ftImpact: 0.992, to: 0.867 } },
          { name: "Zach LaVine", min: 33, pts: 31, reb: 3, ast: 2, stl: 2, blk: 0, to: 5, tpm: 6, fgm: 10, fga: 16, ftm: 5, fta: 5, composite: 7.81, zScores: { pts: 2.745, reb: -0.235, ast: -0.049, stl: 1.851, blk: -0.457, tpm: 3.274, fgImpact: 2.236, ftImpact: 1.654, to: -3.207 } },
          { name: "Darius Acuff Jr.", min: 40, pts: 29, reb: 4, ast: 6, stl: 2, blk: 0, to: 4, tpm: 4, fgm: 10, fga: 21, ftm: 5, fta: 6, composite: 6.38, zScores: { pts: 2.49, reb: 0.103, ast: 2.076, stl: 1.851, blk: -0.457, tpm: 1.885, fgImpact: 0.451, ftImpact: 0.372, to: -2.392 } },
          { name: "Leaky Black", min: 18, pts: 0, reb: 3, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -2.65, zScores: { pts: -1.195, reb: -0.235, ast: -0.049, stl: -0.695, blk: 0.976, tpm: -0.891, fgImpact: -1.428, ftImpact: 0, to: 0.867 } },
          { name: "Keegan Murray", min: 24, pts: 11, reb: 2, ast: 1, stl: 0, blk: 4, to: 2, tpm: 2, fgm: 4, fga: 9, ftm: 1, fta: 2, composite: 2.38, zScores: { pts: 0.203, reb: -0.572, ast: -0.58, stl: -0.695, blk: 5.276, tpm: 0.497, fgImpact: -0.034, ftImpact: -0.951, to: -0.763 } },
          { name: "Dylan Cardwell", min: 29, pts: 1, reb: 11, ast: 1, stl: 2, blk: 2, to: 4, tpm: 0, fgm: 0, fga: 3, ftm: 1, fta: 1, composite: 1.05, zScores: { pts: -1.068, reb: 2.465, ast: -0.58, stl: 1.851, blk: 2.409, tpm: -0.891, fgImpact: -1.071, ftImpact: 0.331, to: -2.392 } },
          { name: "Malik Monk", min: 3, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 1, composite: -5.09, zScores: { pts: -1.068, reb: -1.247, ast: -1.111, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: 0, ftImpact: 0.331, to: 0.052 } },
          { name: "Daeqwon Plowden", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.55, zScores: { pts: -1.195, reb: -1.247, ast: -1.111, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: 0, ftImpact: 0, to: 0.052 } },
          { name: "Emanuel Sharp", min: 19, pts: 2, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.62, zScores: { pts: -0.941, reb: -0.572, ast: -1.111, stl: 0.578, blk: -0.457, tpm: -0.891, fgImpact: -0.276, ftImpact: 0, to: 0.052 } }
        ]
      }
    },
      {
      id: "401909965",
      line: "Oklahoma City Thunder 103 @ Portland Trail Blazers 123 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OKC", name: "Oklahoma City Thunder", score: 103,
        players: [
          { name: "Isaiah Hartenstein", min: 24, pts: 7, reb: 9, ast: 5, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: 2.58, zScores: { pts: -0.306, reb: 1.79, ast: 1.544, stl: -0.695, blk: 0.976, tpm: -0.891, fgImpact: 0.242, ftImpact: -0.951, to: 0.867 } },
          { name: "Kenrich Williams", min: 19, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.26, zScores: { pts: -0.814, reb: -0.572, ast: -1.111, stl: -0.695, blk: -0.457, tpm: -0.197, fgImpact: -0.276, ftImpact: 0, to: 0.867 } },
          { name: "Shai Gilgeous-Alexander", min: 29, pts: 26, reb: 8, ast: 3, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 8, fga: 22, ftm: 10, fta: 11, composite: 3.2, zScores: { pts: 2.109, reb: 1.453, ast: 0.482, stl: -0.695, blk: 0.976, tpm: -0.891, fgImpact: -1.496, ftImpact: 2.026, to: -0.763 } },
          { name: "Jared McCain", min: 31, pts: 21, reb: 3, ast: 3, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 12, ftm: 5, fta: 6, composite: 3.36, zScores: { pts: 1.474, reb: -0.235, ast: 0.482, stl: -0.695, blk: -0.457, tpm: 1.885, fgImpact: 0.485, ftImpact: 0.372, to: 0.052 } },
          { name: "Ajay Mitchell", min: 28, pts: 14, reb: 3, ast: 3, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 10, ftm: 2, fta: 2, composite: 1.16, zScores: { pts: 0.584, reb: -0.235, ast: 0.482, stl: 0.578, blk: -0.457, tpm: -0.891, fgImpact: 1.199, ftImpact: 0.662, to: -0.763 } },
          { name: "Brooks Barnhizer", min: 5, pts: 0, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.95, zScores: { pts: -1.195, reb: -0.91, ast: -0.58, stl: 0.578, blk: -0.457, tpm: -0.891, fgImpact: -0.357, ftImpact: 0, to: 0.867 } },
          { name: "Aday Mara", min: 26, pts: 10, reb: 10, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 9, ftm: 0, fta: 1, composite: 1.89, zScores: { pts: 0.076, reb: 2.128, ast: -0.049, stl: -0.695, blk: 0.976, tpm: -0.891, fgImpact: 0.761, ftImpact: -1.282, to: 0.867 } },
          { name: "Alex Caruso", min: 19, pts: 5, reb: 2, ast: 1, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -3.53, zScores: { pts: -0.56, reb: -0.572, ast: -0.58, stl: -0.695, blk: 0.976, tpm: -0.197, fgImpact: -0.99, ftImpact: 0.662, to: -1.577 } },
          { name: "Micah Peavy", min: 21, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 2, composite: -6.77, zScores: { pts: -1.195, reb: -0.572, ast: -1.111, stl: 0.578, blk: -0.457, tpm: -0.891, fgImpact: -1.428, ftImpact: -2.564, to: 0.867 } },
          { name: "Nique Clifford", min: 20, pts: 4, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.99, zScores: { pts: -0.687, reb: 0.103, ast: -0.58, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: 0.162, ftImpact: 0, to: 0.052 } },
          { name: "Bennett Stirtz", min: 18, pts: 13, reb: 1, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 8, ftm: 1, fta: 1, composite: 0.27, zScores: { pts: 0.457, reb: -0.91, ast: -0.58, stl: 0.578, blk: -0.457, tpm: 0.497, fgImpact: 1.118, ftImpact: 0.331, to: -0.763 } }
        ]
      },
      home: {
        abbr: "POR", name: "Portland Trail Blazers", score: 123,
        players: [
          { name: "Toumani Camara", min: 30, pts: 12, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 9, ftm: 4, fta: 4, composite: 1.28, zScores: { pts: 0.33, reb: -0.235, ast: 0.482, stl: -0.695, blk: -0.457, tpm: 0.497, fgImpact: -0.829, ftImpact: 1.323, to: 0.867 } },
          { name: "Deni Avdija", min: 34, pts: 24, reb: 6, ast: 8, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 8, fga: 15, ftm: 6, fta: 8, composite: 5.24, zScores: { pts: 1.855, reb: 0.778, ast: 3.138, stl: 0.578, blk: -0.457, tpm: 0.497, fgImpact: 1.003, ftImpact: -0.579, to: -1.577 } },
          { name: "Donovan Clingan", min: 26, pts: 7, reb: 13, ast: 3, stl: 0, blk: 2, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 5.13, zScores: { pts: -0.306, reb: 3.14, ast: 0.482, stl: -0.695, blk: 2.409, tpm: -0.197, fgImpact: 0.242, ftImpact: 0, to: 0.052 } },
          { name: "Damian Lillard", min: 24, pts: 25, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 8, fga: 15, ftm: 5, fta: 5, composite: 7.76, zScores: { pts: 1.982, reb: -0.235, ast: 0.482, stl: 0.578, blk: -0.457, tpm: 1.885, fgImpact: 1.003, ftImpact: 1.654, to: 0.867 } },
          { name: "Sidy Cissoko", min: 33, pts: 17, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 14, ftm: 4, fta: 4, composite: 3.69, zScores: { pts: 0.965, reb: -0.235, ast: 0.482, stl: 0.578, blk: -0.457, tpm: 1.191, fgImpact: -1.024, ftImpact: 1.323, to: 0.867 } },
          { name: "Robert Williams III", min: 15, pts: 6, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -2.12, zScores: { pts: -0.433, reb: 0.103, ast: -1.111, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: 1.313, ftImpact: 0, to: 0.052 } },
          { name: "Micah Potter", min: 5, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.89, zScores: { pts: -1.195, reb: -0.235, ast: -1.111, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: -0.357, ftImpact: 0, to: 0.052 } },
          { name: "Branden Carlson", min: 8, pts: 2, reb: 5, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -0.2, zScores: { pts: -0.941, reb: 0.44, ast: -1.111, stl: -0.695, blk: 2.409, tpm: -0.891, fgImpact: -0.276, ftImpact: 0, to: 0.867 } },
          { name: "Yang Hansen", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.195, reb: -0.91, ast: -1.111, stl: -0.695, blk: -0.457, tpm: -0.891, fgImpact: 0, ftImpact: 0, to: 0.867 } },
          { name: "Jrue Holiday", min: 25, pts: 11, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 8, ftm: 1, fta: 1, composite: -0.71, zScores: { pts: 0.203, reb: -0.91, ast: -0.049, stl: -0.695, blk: -0.457, tpm: 0.497, fgImpact: 0.323, ftImpact: 0.331, to: 0.052 } },
          { name: "Scoot Henderson", min: 23, pts: 11, reb: 1, ast: 4, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 12, ftm: 2, fta: 2, composite: -0.84, zScores: { pts: 0.203, reb: -0.91, ast: 1.013, stl: -0.695, blk: -0.457, tpm: 1.191, fgImpact: -1.9, ftImpact: 0.662, to: 0.052 } },
          { name: "Chris Youngblood", min: 14, pts: 8, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -0.25, zScores: { pts: -0.178, reb: -0.91, ast: -1.111, stl: 0.578, blk: -0.457, tpm: 0.497, fgImpact: -0.195, ftImpact: 0.662, to: 0.867 } }
        ]
      }
    }
    ]
  },
    "2026-11-11": {
    games: [
      {
      id: "401909966",
      line: "Washington Wizards 101 @ Indiana Pacers 114 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WSH", name: "Washington Wizards", score: 101,
        players: [
          { name: "Anthony Davis", min: 34, pts: 21, reb: 13, ast: 0, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 7, fga: 20, ftm: 7, fta: 9, composite: 2.06, zScores: { pts: 1.297, reb: 3.028, ast: -0.989, stl: 0.326, blk: 1.644, tpm: -0.907, fgImpact: -1.704, ftImpact: -0.753, to: 0.123 } },
          { name: "AJ Dybantsa", min: 34, pts: 13, reb: 4, ast: 2, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 6, fga: 15, ftm: 1, fta: 4, composite: -5.91, zScores: { pts: 0.333, reb: 0.11, ast: -0.126, stl: 0.326, blk: 0.516, tpm: -0.907, fgImpact: -0.712, ftImpact: -4.051, to: -1.401 } },
          { name: "Kyshawn George", min: 39, pts: 25, reb: 9, ast: 3, stl: 0, blk: 0, to: 6, tpm: 5, fgm: 9, fga: 20, ftm: 2, fta: 2, composite: 1.76, zScores: { pts: 1.778, reb: 1.731, ast: 0.306, stl: -0.76, blk: -0.612, tpm: 2.579, fgImpact: -0.194, ftImpact: 0.615, to: -3.686 } },
          { name: "Alex Sarr", min: 25, pts: 5, reb: 8, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -3.02, zScores: { pts: -0.631, reb: 1.407, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: -0.587, ftImpact: 0, to: -0.639 } },
          { name: "Trae Young", min: 34, pts: 15, reb: 3, ast: 4, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 10, ftm: 2, fta: 2, composite: 3.78, zScores: { pts: 0.574, reb: -0.214, ast: 0.738, stl: 0.326, blk: -0.612, tpm: 1.185, fgImpact: 0.281, ftImpact: 0.615, to: 0.885 } },
          { name: "Deandre Ayton", min: 9, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.62, zScores: { pts: -0.992, reb: -0.538, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: 0.056, ftImpact: 0, to: 0.123 } },
          { name: "Bub Carrington", min: 10, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.5, zScores: { pts: -1.233, reb: -1.186, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: -0.699, ftImpact: 0, to: 0.885 } },
          { name: "Bilal Coulibaly", min: 25, pts: 5, reb: 6, ast: 2, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -0.56, zScores: { pts: -0.631, reb: 0.759, ast: -0.126, stl: 0.326, blk: 0.516, tpm: -0.907, fgImpact: -0.237, ftImpact: -1.145, to: 0.885 } },
          { name: "Tre Johnson", min: 29, pts: 15, reb: 3, ast: 1, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 10, ftm: 3, fta: 3, composite: 3.5, zScores: { pts: 0.574, reb: -0.214, ast: -0.558, stl: 2.5, blk: -0.612, tpm: 0.488, fgImpact: 0.281, ftImpact: 0.923, to: 0.123 } }
        ]
      },
      home: {
        abbr: "IND", name: "Indiana Pacers", score: 114,
        players: [
          { name: "Pascal Siakam", min: 32, pts: 28, reb: 8, ast: 5, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 17, ftm: 12, fta: 12, composite: 7.31, zScores: { pts: 2.14, reb: 1.407, ast: 1.17, stl: 0.326, blk: -0.612, tpm: 0.488, fgImpact: -0.656, ftImpact: 3.69, to: -0.639 } },
          { name: "Ivica Zubac", min: 31, pts: 20, reb: 12, ast: 1, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 9, fga: 15, ftm: 2, fta: 2, composite: 4.83, zScores: { pts: 1.176, reb: 2.704, ast: -0.558, stl: -0.76, blk: 1.644, tpm: -0.907, fgImpact: 1.553, ftImpact: 0.615, to: -0.639 } },
          { name: "Kelly Oubre Jr.", min: 34, pts: 14, reb: 6, ast: 1, stl: 4, blk: 1, to: 0, tpm: 0, fgm: 7, fga: 15, ftm: 0, fta: 0, composite: 4.78, zScores: { pts: 0.453, reb: 0.759, ast: -0.558, stl: 3.586, blk: 0.516, tpm: -0.907, fgImpact: 0.043, ftImpact: 0, to: 0.885 } },
          { name: "Andrew Nembhard", min: 34, pts: 17, reb: 2, ast: 10, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 11, ftm: 2, fta: 2, composite: 4.84, zScores: { pts: 0.815, reb: -0.538, ast: 3.328, stl: -0.76, blk: -0.612, tpm: 1.185, fgImpact: 0.686, ftImpact: 0.615, to: 0.123 } },
          { name: "Aaron Nesmith", min: 22, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -5.15, zScores: { pts: -0.992, reb: -0.862, ast: -0.558, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: -1.342, ftImpact: 0, to: 0.885 } },
          { name: "Larry Nance Jr.", min: 5, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.69, zScores: { pts: -0.631, reb: -1.186, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: 0.811, ftImpact: 0, to: 0.885 } },
          { name: "Obi Toppin", min: 16, pts: 8, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -2.75, zScores: { pts: -0.27, reb: -0.214, ast: -0.558, stl: -0.76, blk: -0.612, tpm: 0.488, fgImpact: -0.181, ftImpact: 0, to: -0.639 } },
          { name: "Jalen Slawson", min: 12, pts: 2, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.01, zScores: { pts: -0.992, reb: -0.214, ast: -0.558, stl: 0.326, blk: -0.612, tpm: -0.907, fgImpact: 0.056, ftImpact: 0, to: 0.885 } },
          { name: "Jarace Walker", min: 7, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -6.61, zScores: { pts: -1.113, reb: -0.862, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: -0.349, ftImpact: -1.145, to: 0.123 } },
          { name: "Jay Huff", min: 11, pts: 6, reb: 4, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 3, composite: -3.6, zScores: { pts: -0.511, reb: 0.11, ast: -0.989, stl: 0.326, blk: -0.612, tpm: -0.907, fgImpact: 0.462, ftImpact: -0.838, to: -0.639 } },
          { name: "T.J. McConnell", min: 14, pts: 7, reb: 3, ast: 7, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 1, composite: 1.6, zScores: { pts: -0.39, reb: -0.214, ast: 2.033, stl: 0.326, blk: -0.612, tpm: -0.907, fgImpact: 0.168, ftImpact: 0.308, to: 0.885 } },
          { name: "Quenton Jackson", min: 21, pts: 4, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -3.58, zScores: { pts: -0.751, reb: -0.538, ast: -0.126, stl: 0.326, blk: -0.612, tpm: -0.209, fgImpact: -0.643, ftImpact: -1.145, to: 0.123 } }
        ]
      }
    },
      {
      id: "401909967",
      line: "Cleveland Cavaliers 115 @ New York Knicks 107 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CLE", name: "Cleveland Cavaliers", score: 115,
        players: [
          { name: "Jarrett Allen", min: 32, pts: 11, reb: 14, ast: 3, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 3, fta: 3, composite: 6.07, zScores: { pts: 0.092, reb: 3.352, ast: 0.306, stl: 0.326, blk: 0.516, tpm: -0.907, fgImpact: 0.574, ftImpact: 0.923, to: 0.885 } },
          { name: "Evan Mobley", min: 33, pts: 10, reb: 5, ast: 3, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 8, ftm: 2, fta: 4, composite: -1.62, zScores: { pts: -0.029, reb: 0.435, ast: 0.306, stl: -0.76, blk: 0.516, tpm: -0.907, fgImpact: 0.224, ftImpact: -2.29, to: 0.885 } },
          { name: "James Harden", min: 33, pts: 32, reb: 2, ast: 4, stl: 2, blk: 0, to: 2, tpm: 5, fgm: 9, fga: 14, ftm: 9, fta: 11, composite: 7.33, zScores: { pts: 2.622, reb: -0.538, ast: 0.738, stl: 1.413, blk: -0.612, tpm: 2.579, fgImpact: 1.903, ftImpact: -0.138, to: -0.639 } },
          { name: "Donovan Mitchell", min: 36, pts: 23, reb: 7, ast: 6, stl: 2, blk: 1, to: 4, tpm: 2, fgm: 8, fga: 15, ftm: 5, fta: 5, composite: 6.81, zScores: { pts: 1.538, reb: 1.083, ast: 1.601, stl: 1.413, blk: 0.516, tpm: 0.488, fgImpact: 0.798, ftImpact: 1.538, to: -2.163 } },
          { name: "Peyton Watson", min: 30, pts: 7, reb: 5, ast: 4, stl: 0, blk: 4, to: 0, tpm: 2, fgm: 2, fga: 12, ftm: 1, fta: 2, composite: 1.47, zScores: { pts: -0.39, reb: 0.435, ast: 0.738, stl: -0.76, blk: 3.899, tpm: 0.488, fgImpact: -2.683, ftImpact: -1.145, to: 0.885 } },
          { name: "Mario Hezonja", min: 7, pts: 0, reb: 0, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.94, zScores: { pts: -1.233, reb: -1.186, ast: -0.989, stl: 0.326, blk: 0.516, tpm: -0.907, fgImpact: -0.349, ftImpact: 0, to: 0.885 } },
          { name: "Jaylon Tyson", min: 23, pts: 3, reb: 0, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -3.94, zScores: { pts: -0.872, reb: -1.186, ast: -0.558, stl: -0.76, blk: 0.516, tpm: -0.209, fgImpact: -0.992, ftImpact: 0, to: 0.123 } },
          { name: "Tyrese Proctor", min: 23, pts: 15, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 12, ftm: 0, fta: 0, composite: 0.07, zScores: { pts: 0.574, reb: -0.214, ast: -0.558, stl: -0.76, blk: -0.612, tpm: 1.185, fgImpact: 0.337, ftImpact: 0, to: 0.123 } },
          { name: "Meleek Thomas", min: 22, pts: 14, reb: 4, ast: 1, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 2.1, zScores: { pts: 0.453, reb: 0.11, ast: -0.558, stl: 1.413, blk: -0.612, tpm: 0.488, fgImpact: 0.686, ftImpact: 0, to: 0.123 } }
        ]
      },
      home: {
        abbr: "NY", name: "New York Knicks", score: 107,
        players: [
          { name: "OG Anunoby", min: 34, pts: 14, reb: 6, ast: 2, stl: 2, blk: 1, to: 3, tpm: 2, fgm: 3, fga: 9, ftm: 6, fta: 6, composite: 3.07, zScores: { pts: 0.453, reb: 0.759, ast: -0.126, stl: 1.413, blk: 0.516, tpm: 0.488, fgImpact: -0.88, ftImpact: 1.845, to: -1.401 } },
          { name: "Karl-Anthony Towns", min: 34, pts: 21, reb: 11, ast: 8, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 7, fga: 11, ftm: 5, fta: 5, composite: 8.72, zScores: { pts: 1.297, reb: 2.38, ast: 2.465, stl: -0.76, blk: 0.516, tpm: 0.488, fgImpact: 1.441, ftImpact: 1.538, to: -0.639 } },
          { name: "Josh Hart", min: 26, pts: 6, reb: 4, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -2.02, zScores: { pts: -0.511, reb: 0.11, ast: 0.306, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: -0.531, ftImpact: 0, to: 0.885 } },
          { name: "Mikal Bridges", min: 17, pts: 2, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -5.19, zScores: { pts: -0.992, reb: -0.862, ast: -0.126, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: -0.293, ftImpact: 0, to: -0.639 } },
          { name: "Jalen Brunson", min: 35, pts: 27, reb: 3, ast: 5, stl: 1, blk: 1, to: 2, tpm: 3, fgm: 12, fga: 23, ftm: 0, fta: 0, composite: 5.39, zScores: { pts: 2.019, reb: -0.214, ast: 1.17, stl: 0.326, blk: 0.516, tpm: 1.185, fgImpact: 1.023, ftImpact: 0, to: -0.639 } },
          { name: "Mohamed Diawara", min: 11, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.86, zScores: { pts: -0.992, reb: -1.186, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: -0.293, ftImpact: 0, to: 0.885 } },
          { name: "Andre Drummond", min: 14, pts: 0, reb: 4, ast: 3, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.54, zScores: { pts: -1.233, reb: 0.11, ast: 0.306, stl: -0.76, blk: 0.516, tpm: -0.907, fgImpact: -0.699, ftImpact: 0, to: 0.123 } },
          { name: "Landry Shamet", min: 29, pts: 12, reb: 2, ast: 4, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 0.63, zScores: { pts: 0.212, reb: -0.538, ast: 0.738, stl: -0.76, blk: -0.612, tpm: 0.488, fgImpact: 0.979, ftImpact: 0, to: 0.123 } },
          { name: "Miles McBride", min: 27, pts: 19, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 5, fgm: 7, fga: 13, ftm: 0, fta: 0, composite: 4.31, zScores: { pts: 1.056, reb: -0.538, ast: -0.126, stl: 0.326, blk: -0.612, tpm: 2.579, fgImpact: 0.742, ftImpact: 0, to: 0.885 } },
          { name: "Tyler Kolek", min: 13, pts: 4, reb: 1, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.72, zScores: { pts: -0.751, reb: -0.862, ast: 0.738, stl: 0.326, blk: -0.612, tpm: -0.907, fgImpact: 0.462, ftImpact: 0, to: 0.885 } }
        ]
      }
    },
      {
      id: "401909968",
      line: "Boston Celtics 98 @ Toronto Raptors 93 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BOS", name: "Boston Celtics", score: 98,
        players: [
          { name: "Jayson Tatum", min: 38, pts: 24, reb: 7, ast: 8, stl: 0, blk: 2, to: 2, tpm: 2, fgm: 6, fga: 21, ftm: 10, fta: 12, composite: 3.3, zScores: { pts: 1.658, reb: 1.083, ast: 2.465, stl: -0.76, blk: 1.644, tpm: 0.488, fgImpact: -2.808, ftImpact: 0.17, to: -0.639 } },
          { name: "Luka Garza", min: 11, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -2.86, zScores: { pts: -0.631, reb: -0.862, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: -0.293, ftImpact: 0.615, to: 0.885 } },
          { name: "Neemias Queta", min: 31, pts: 11, reb: 13, ast: 3, stl: 1, blk: 3, to: 5, tpm: 1, fgm: 2, fga: 4, ftm: 6, fta: 8, composite: 2.44, zScores: { pts: 0.092, reb: 3.028, ast: 0.306, stl: 0.326, blk: 2.771, tpm: -0.209, fgImpact: 0.112, ftImpact: -1.06, to: -2.924 } },
          { name: "Derrick White", min: 38, pts: 19, reb: 1, ast: 7, stl: 1, blk: 4, to: 2, tpm: 3, fgm: 7, fga: 15, ftm: 2, fta: 2, composite: 7.66, zScores: { pts: 1.056, reb: -0.862, ast: 2.033, stl: 0.326, blk: 3.899, tpm: 1.185, fgImpact: 0.043, ftImpact: 0.615, to: -0.639 } },
          { name: "Baylor Scheierman", min: 29, pts: 9, reb: 7, ast: 3, stl: 2, blk: 1, to: 0, tpm: 3, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 5.76, zScores: { pts: -0.149, reb: 1.083, ast: 0.306, stl: 1.413, blk: 0.516, tpm: 1.185, fgImpact: 0.518, ftImpact: 0, to: 0.885 } },
          { name: "Sam Hauser", min: 24, pts: 8, reb: 9, ast: 0, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: 1.91, zScores: { pts: -0.27, reb: 1.731, ast: -0.989, stl: 1.413, blk: -0.612, tpm: 0.488, fgImpact: -0.587, ftImpact: 0.615, to: 0.123 } },
          { name: "Mitchell Robinson", min: 11, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -0.992, reb: -0.538, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: 0.406, ftImpact: 0, to: 0.123 } },
          { name: "Payton Pritchard", min: 31, pts: 14, reb: 1, ast: 1, stl: 0, blk: 0, to: 5, tpm: 2, fgm: 5, fga: 13, ftm: 2, fta: 2, composite: -4.93, zScores: { pts: 0.453, reb: -0.862, ast: -0.558, stl: -0.76, blk: -0.612, tpm: 0.488, fgImpact: -0.768, ftImpact: 0.615, to: -2.924 } },
          { name: "Jordan Walsh", min: 18, pts: 6, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -1.92, zScores: { pts: -0.511, reb: -0.214, ast: -0.989, stl: 0.326, blk: -0.612, tpm: -0.907, fgImpact: 0.867, ftImpact: 0, to: 0.123 } },
          { name: "Hugo Gonzalez", min: 8, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.59, zScores: { pts: -1.233, reb: -0.862, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: -0.349, ftImpact: 0, to: 0.123 } }
        ]
      },
      home: {
        abbr: "TOR", name: "Toronto Raptors", score: 93,
        players: [
          { name: "RJ Barrett", min: 31, pts: 12, reb: 8, ast: 7, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 16, ftm: 2, fta: 2, composite: 2.83, zScores: { pts: 0.212, reb: 1.407, ast: 2.033, stl: 1.413, blk: 0.516, tpm: -0.907, fgImpact: -1.816, ftImpact: 0.615, to: -0.639 } },
          { name: "Collin Murray-Boyles", min: 20, pts: 5, reb: 4, ast: 3, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 9, ftm: 2, fta: 4, composite: -5.99, zScores: { pts: -0.631, reb: 0.11, ast: 0.306, stl: -0.76, blk: 0.516, tpm: -0.209, fgImpact: -2.39, ftImpact: -2.29, to: -0.639 } },
          { name: "Jakob Poeltl", min: 32, pts: 6, reb: 9, ast: 1, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -1.37, zScores: { pts: -0.511, reb: 1.731, ast: -0.558, stl: -0.76, blk: 0.516, tpm: -0.907, fgImpact: 0.518, ftImpact: 0, to: -1.401 } },
          { name: "Immanuel Quickley", min: 28, pts: 11, reb: 4, ast: 4, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 14, ftm: 4, fta: 4, composite: -1.59, zScores: { pts: 0.092, reb: 0.11, ast: 0.738, stl: 0.326, blk: -0.612, tpm: -0.209, fgImpact: -2.627, ftImpact: 1.23, to: -0.639 } },
          { name: "Ja'Kobe Walter", min: 35, pts: 17, reb: 3, ast: 1, stl: 2, blk: 0, to: 1, tpm: 5, fgm: 5, fga: 11, ftm: 2, fta: 2, composite: 4.09, zScores: { pts: 0.815, reb: -0.214, ast: -0.558, stl: 1.413, blk: -0.612, tpm: 2.579, fgImpact: -0.069, ftImpact: 0.615, to: 0.123 } },
          { name: "Kyle Anderson", min: 11, pts: 2, reb: 3, ast: 4, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 2, composite: -4.28, zScores: { pts: -0.992, reb: -0.214, ast: 0.738, stl: -0.76, blk: 0.516, tpm: -0.907, fgImpact: -0.643, ftImpact: -2.905, to: 0.885 } },
          { name: "Jamison Battle", min: 25, pts: 12, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 0.2, zScores: { pts: 0.212, reb: -0.538, ast: -0.989, stl: 0.326, blk: -0.612, tpm: 0.488, fgImpact: 0.574, ftImpact: 0.615, to: 0.123 } },
          { name: "Allen Graves", min: 18, pts: 13, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 1.46, zScores: { pts: 0.333, reb: 0.435, ast: -0.989, stl: -0.76, blk: -0.612, tpm: 1.185, fgImpact: 0.979, ftImpact: 0, to: 0.885 } },
          { name: "Jamal Shead", min: 22, pts: 3, reb: 3, ast: 6, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 6, ftm: 1, fta: 2, composite: -3.8, zScores: { pts: -0.872, reb: -0.214, ast: 1.601, stl: 0.326, blk: -0.612, tpm: -0.907, fgImpact: -1.342, ftImpact: -1.145, to: -0.639 } },
          { name: "Alijah Martin", min: 16, pts: 12, reb: 1, ast: 0, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 2.44, zScores: { pts: 0.212, reb: -0.862, ast: -0.989, stl: 1.413, blk: -0.612, tpm: 1.882, fgImpact: 1.273, ftImpact: 0, to: 0.123 } }
        ]
      }
    },
      {
      id: "401909969",
      line: "San Antonio Spurs 124 @ Chicago Bulls 119 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SA", name: "San Antonio Spurs", score: 124,
        players: [
          { name: "Julian Champagnie", min: 35, pts: 12, reb: 0, ast: 2, stl: 2, blk: 1, to: 0, tpm: 3, fgm: 4, fga: 7, ftm: 1, fta: 1, composite: 3.78, zScores: { pts: 0.212, reb: -1.186, ast: -0.126, stl: 1.413, blk: 0.516, tpm: 1.185, fgImpact: 0.574, ftImpact: 0.308, to: 0.885 } },
          { name: "Victor Wembanyama", min: 32, pts: 32, reb: 9, ast: 1, stl: 2, blk: 5, to: 1, tpm: 2, fgm: 13, fga: 18, ftm: 4, fta: 5, composite: 14.15, zScores: { pts: 2.622, reb: 1.731, ast: -0.558, stl: 1.413, blk: 5.027, tpm: 0.488, fgImpact: 3.525, ftImpact: -0.223, to: 0.123 } },
          { name: "De'Aaron Fox", min: 31, pts: 17, reb: 4, ast: 9, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 17, ftm: 1, fta: 2, composite: 4.52, zScores: { pts: 0.815, reb: 0.11, ast: 2.897, stl: 2.5, blk: -0.612, tpm: 0.488, fgImpact: -0.656, ftImpact: -1.145, to: 0.123 } },
          { name: "Stephon Castle", min: 29, pts: 11, reb: 1, ast: 3, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 13, ftm: 0, fta: 0, composite: -1.28, zScores: { pts: 0.092, reb: -0.862, ast: 0.306, stl: 1.413, blk: -0.612, tpm: -0.209, fgImpact: -0.768, ftImpact: 0, to: -0.639 } },
          { name: "Dylan Harper", min: 36, pts: 18, reb: 6, ast: 10, stl: 4, blk: 1, to: 0, tpm: 2, fgm: 7, fga: 18, ftm: 2, fta: 2, composite: 10.11, zScores: { pts: 0.935, reb: 0.759, ast: 3.328, stl: 3.586, blk: 0.516, tpm: 0.488, fgImpact: -1.005, ftImpact: 0.615, to: 0.885 } },
          { name: "Harrison Barnes", min: 13, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.48, zScores: { pts: -0.872, reb: -0.862, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: -0.293, ftImpact: 0, to: 0.123 } },
          { name: "Keldon Johnson", min: 28, pts: 10, reb: 6, ast: 4, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 2, fta: 4, composite: 0.12, zScores: { pts: -0.029, reb: 0.759, ast: 0.738, stl: 1.413, blk: -0.612, tpm: -0.907, fgImpact: 0.923, ftImpact: -2.29, to: 0.123 } },
          { name: "David Jones Garcia", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.8, zScores: { pts: -1.233, reb: -1.186, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.885 } },
          { name: "Carter Bryant", min: 15, pts: 10, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 0.64, zScores: { pts: -0.029, reb: -0.862, ast: -0.126, stl: 0.326, blk: -0.612, tpm: 0.488, fgImpact: 0.574, ftImpact: 0, to: 0.885 } },
          { name: "Luke Kornet", min: 14, pts: 7, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 1, fta: 2, composite: -3.23, zScores: { pts: -0.39, reb: 0.435, ast: -0.558, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: -0.181, ftImpact: -1.145, to: 0.885 } },
          { name: "Tarris Reed Jr.", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.15, zScores: { pts: -1.233, reb: -1.186, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: -0.349, ftImpact: 0, to: 0.885 } },
          { name: "Jordan McLaughlin", min: 2, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -3.3, zScores: { pts: -0.751, reb: -1.186, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: 0.406, ftImpact: 0.615, to: 0.885 } }
        ]
      },
      home: {
        abbr: "CHI", name: "Chicago Bulls", score: 119,
        players: [
          { name: "Jalen Smith", min: 30, pts: 23, reb: 4, ast: 3, stl: 0, blk: 0, to: 0, tpm: 5, fgm: 8, fga: 9, ftm: 2, fta: 2, composite: 7.56, zScores: { pts: 1.538, reb: 0.11, ast: 0.306, stl: -0.76, blk: -0.612, tpm: 2.579, fgImpact: 2.895, ftImpact: 0.615, to: 0.885 } },
          { name: "Isaac Okoro", min: 23, pts: 0, reb: 2, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.89, zScores: { pts: -1.233, reb: -0.538, ast: 0.738, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: -0.699, ftImpact: 0, to: 0.123 } },
          { name: "Matas Buzelis", min: 31, pts: 13, reb: 3, ast: 2, stl: 0, blk: 0, to: 6, tpm: 3, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: -4.3, zScores: { pts: 0.333, reb: -0.214, ast: -0.126, stl: -0.76, blk: -0.612, tpm: 1.185, fgImpact: -0.418, ftImpact: 0, to: -3.686 } },
          { name: "Caleb Wilson", min: 15, pts: 15, reb: 5, ast: 0, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 7, ftm: 3, fta: 3, composite: 1.83, zScores: { pts: 0.574, reb: 0.435, ast: -0.989, stl: 0.326, blk: -0.612, tpm: 0.488, fgImpact: 1.329, ftImpact: 0.923, to: -0.639 } },
          { name: "Josh Giddey", min: 25, pts: 9, reb: 2, ast: 7, stl: 0, blk: 0, to: 7, tpm: 1, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -4.81, zScores: { pts: -0.149, reb: -0.538, ast: 2.033, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: -0.125, ftImpact: 0, to: -4.448 } },
          { name: "Zach Collins", min: 3, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.43, zScores: { pts: -0.992, reb: -0.538, ast: -0.558, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: 0.056, ftImpact: 0, to: 0.885 } },
          { name: "Patrick Williams", min: 28, pts: 9, reb: 7, ast: 4, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 4, ftm: 1, fta: 1, composite: 3.34, zScores: { pts: -0.149, reb: 1.083, ast: 0.738, stl: -0.76, blk: 0.516, tpm: -0.907, fgImpact: 1.622, ftImpact: 0.308, to: 0.885 } },
          { name: "Leonard Miller", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.8, zScores: { pts: -1.233, reb: -1.186, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.885 } },
          { name: "Noa Essengue", min: 11, pts: 8, reb: 4, ast: 3, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 1, fta: 1, composite: 1.4, zScores: { pts: -0.27, reb: 0.11, ast: 0.306, stl: -0.76, blk: 0.516, tpm: -0.209, fgImpact: 0.518, ftImpact: 0.308, to: 0.885 } },
          { name: "Nic Claxton", min: 16, pts: 17, reb: 6, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 6, ftm: 7, fta: 9, composite: 1.68, zScores: { pts: 0.815, reb: 0.759, ast: -0.558, stl: -0.76, blk: 0.516, tpm: -0.907, fgImpact: 1.678, ftImpact: -0.753, to: 0.885 } },
          { name: "Tre Jones", min: 28, pts: 13, reb: 1, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 11, ftm: 2, fta: 2, composite: -1.9, zScores: { pts: 0.333, reb: -0.862, ast: 0.306, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: -0.069, ftImpact: 0.615, to: -0.639 } },
          { name: "Jordan Hawkins", min: 24, pts: 7, reb: 4, ast: 2, stl: 2, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 0.91, zScores: { pts: -0.39, reb: 0.11, ast: -0.126, stl: 1.413, blk: 0.516, tpm: -0.209, fgImpact: -0.531, ftImpact: 0, to: 0.123 } },
          { name: "Jaylin Sellers", min: 2, pts: 3, reb: 0, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.04, zScores: { pts: -0.872, reb: -1.186, ast: 0.306, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: 0.406, ftImpact: 0, to: 0.885 } }
        ]
      }
    },
      {
      id: "401909970",
      line: "Denver Nuggets 123 @ Memphis Grizzlies 118 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DEN", name: "Denver Nuggets", score: 123,
        players: [
          { name: "Aaron Gordon", min: 27, pts: 9, reb: 3, ast: 2, stl: 1, blk: 2, to: 1, tpm: 1, fgm: 3, fga: 11, ftm: 2, fta: 2, composite: 0.43, zScores: { pts: -0.149, reb: -0.214, ast: -0.126, stl: 0.326, blk: 1.644, tpm: -0.209, fgImpact: -1.579, ftImpact: 0.615, to: 0.123 } },
          { name: "Cameron Johnson", min: 30, pts: 23, reb: 4, ast: 3, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 9, fga: 15, ftm: 1, fta: 1, composite: 6.3, zScores: { pts: 1.538, reb: 0.11, ast: 0.306, stl: 0.326, blk: -0.612, tpm: 1.882, fgImpact: 1.553, ftImpact: 0.308, to: 0.885 } },
          { name: "Nikola Jokic", min: 37, pts: 27, reb: 11, ast: 8, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 10, fga: 16, ftm: 6, fta: 8, composite: 8.52, zScores: { pts: 2.019, reb: 2.38, ast: 2.465, stl: 0.326, blk: 0.516, tpm: -0.209, fgImpact: 1.959, ftImpact: -1.06, to: 0.123 } },
          { name: "Jamal Murray", min: 32, pts: 30, reb: 4, ast: 8, stl: 0, blk: 2, to: 1, tpm: 4, fgm: 12, fga: 19, ftm: 2, fta: 3, composite: 9.43, zScores: { pts: 2.381, reb: 0.11, ast: 2.465, stl: -0.76, blk: 1.644, tpm: 1.882, fgImpact: 2.421, ftImpact: -0.838, to: 0.123 } },
          { name: "Christian Braun", min: 37, pts: 12, reb: 5, ast: 4, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 5, fga: 13, ftm: 0, fta: 0, composite: 2.83, zScores: { pts: 0.212, reb: 0.435, ast: 0.738, stl: 0.326, blk: 0.516, tpm: 0.488, fgImpact: -0.768, ftImpact: 0, to: 0.885 } },
          { name: "Marvin Bagley III", min: 12, pts: 4, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.7, zScores: { pts: -0.751, reb: -0.538, ast: -0.558, stl: -0.76, blk: 0.516, tpm: -0.907, fgImpact: -0.587, ftImpact: 0, to: 0.885 } },
          { name: "Spencer Jones", min: 22, pts: 3, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.35, zScores: { pts: -0.872, reb: -0.862, ast: -0.989, stl: -0.76, blk: 0.516, tpm: -0.209, fgImpact: -0.293, ftImpact: 0, to: 0.123 } },
          { name: "Trevon Brazile", min: 13, pts: 7, reb: 5, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 0.35, zScores: { pts: -0.39, reb: 0.435, ast: -0.989, stl: -0.76, blk: 0.516, tpm: -0.209, fgImpact: 0.867, ftImpact: 0, to: 0.885 } },
          { name: "DeMar DeRozan", min: 20, pts: 8, reb: 1, ast: 4, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 9, ftm: 0, fta: 2, composite: -3.69, zScores: { pts: -0.27, reb: -0.862, ast: 0.738, stl: -0.76, blk: 0.516, tpm: -0.907, fgImpact: -0.125, ftImpact: -2.905, to: 0.885 } },
          { name: "Tyus Jones", min: 11, pts: 0, reb: 1, ast: 4, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.32, zScores: { pts: -1.233, reb: -0.862, ast: 0.738, stl: -0.76, blk: 0.516, tpm: -0.907, fgImpact: -0.699, ftImpact: 0, to: 0.885 } }
        ]
      },
      home: {
        abbr: "MEM", name: "Memphis Grizzlies", score: 118,
        players: [
          { name: "Cedric Coward", min: 27, pts: 15, reb: 11, ast: 4, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 12, ftm: 4, fta: 4, composite: 3.04, zScores: { pts: 0.574, reb: 2.38, ast: 0.738, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: -0.418, ftImpact: 1.23, to: 0.123 } },
          { name: "Cameron Boozer", min: 33, pts: 13, reb: 11, ast: 5, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 13, ftm: 1, fta: 2, composite: 1.53, zScores: { pts: 0.333, reb: 2.38, ast: 1.17, stl: 0.326, blk: -0.612, tpm: 0.488, fgImpact: -0.768, ftImpact: -1.145, to: -0.639 } },
          { name: "Jaylen Wells", min: 31, pts: 22, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 5, fgm: 6, fga: 13, ftm: 5, fta: 5, composite: 2.41, zScores: { pts: 1.417, reb: -0.538, ast: -0.558, stl: -0.76, blk: -0.612, tpm: 2.579, fgImpact: -0.013, ftImpact: 1.538, to: -0.639 } },
          { name: "Zach Edey", min: 20, pts: 2, reb: 5, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.22, zScores: { pts: -0.992, reb: 0.435, ast: -0.989, stl: -0.76, blk: 0.516, tpm: -0.907, fgImpact: -0.643, ftImpact: 0, to: 0.123 } },
          { name: "Ty Jerome", min: 32, pts: 22, reb: 2, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 9, fga: 18, ftm: 3, fta: 3, composite: 2.02, zScores: { pts: 1.417, reb: -0.538, ast: 1.17, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: 0.505, ftImpact: 0.923, to: 0.123 } },
          { name: "Jerami Grant", min: 20, pts: 14, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 0.41, zScores: { pts: 0.453, reb: -0.538, ast: -0.126, stl: -0.76, blk: -0.612, tpm: 0.488, fgImpact: 1.385, ftImpact: 0, to: 0.123 } },
          { name: "Taylor Hendricks", min: 11, pts: 7, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 4, fta: 4, composite: -0.55, zScores: { pts: -0.39, reb: -0.538, ast: -0.558, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: 0.406, ftImpact: 1.23, to: 0.885 } },
          { name: "GG Jackson", min: 13, pts: 2, reb: 1, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 1, composite: -3.77, zScores: { pts: -0.992, reb: -0.862, ast: -0.989, stl: 0.326, blk: 0.516, tpm: -0.907, fgImpact: -0.293, ftImpact: -1.453, to: 0.885 } },
          { name: "Isaiah Stewart", min: 18, pts: 3, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.61, zScores: { pts: -0.872, reb: -0.862, ast: -0.126, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: -0.293, ftImpact: 0, to: 0.123 } },
          { name: "Cam Spencer", min: 20, pts: 15, reb: 3, ast: 3, stl: 0, blk: 1, to: 2, tpm: 3, fgm: 5, fga: 7, ftm: 2, fta: 2, composite: 2.91, zScores: { pts: 0.574, reb: -0.214, ast: 0.306, stl: -0.76, blk: 0.516, tpm: 1.185, fgImpact: 1.329, ftImpact: 0.615, to: -0.639 } },
          { name: "Javon Small", min: 15, pts: 3, reb: 1, ast: 4, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.56, zScores: { pts: -0.872, reb: -0.862, ast: 0.738, stl: -0.76, blk: 0.516, tpm: -0.209, fgImpact: -0.992, ftImpact: 0, to: 0.885 } }
        ]
      }
    },
      {
      id: "401909971",
      line: "Los Angeles Lakers 123 @ Milwaukee Bucks 112 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LAL", name: "Los Angeles Lakers", score: 123,
        players: [
          { name: "Jake LaRavia", min: 21, pts: 0, reb: 9, ast: 6, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -1.45, zScores: { pts: -1.233, reb: 1.731, ast: 1.601, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: -1.398, ftImpact: 0, to: 0.123 } },
          { name: "Walker Kessler", min: 29, pts: 10, reb: 11, ast: 3, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 3, zScores: { pts: -0.029, reb: 2.38, ast: 0.306, stl: 0.326, blk: 0.516, tpm: -0.907, fgImpact: 0.281, ftImpact: 0, to: 0.123 } },
          { name: "Matisse Thybulle", min: 23, pts: 8, reb: 5, ast: 1, stl: 3, blk: 1, to: 2, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 2.64, zScores: { pts: -0.27, reb: 0.435, ast: -0.558, stl: 2.5, blk: 0.516, tpm: 0.488, fgImpact: 0.168, ftImpact: 0, to: -0.639 } },
          { name: "Luka Doncic", min: 32, pts: 32, reb: 5, ast: 5, stl: 2, blk: 0, to: 5, tpm: 5, fgm: 10, fga: 25, ftm: 7, fta: 10, composite: 1.29, zScores: { pts: 2.622, reb: 0.435, ast: 1.17, stl: 1.413, blk: -0.612, tpm: 2.579, fgImpact: -1.186, ftImpact: -2.206, to: -2.924 } },
          { name: "Austin Reaves", min: 25, pts: 18, reb: 3, ast: 5, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 10, ftm: 5, fta: 5, composite: 6.27, zScores: { pts: 0.935, reb: -0.214, ast: 1.17, stl: 2.5, blk: -0.612, tpm: -0.209, fgImpact: 1.036, ftImpact: 1.538, to: 0.123 } },
          { name: "Kevon Looney", min: 4, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.15, zScores: { pts: -1.233, reb: -0.538, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.885 } },
          { name: "Jarred Vanderbilt", min: 9, pts: 4, reb: 3, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -0.98, zScores: { pts: -0.751, reb: -0.214, ast: -0.558, stl: -0.76, blk: 0.516, tpm: -0.907, fgImpact: 0.811, ftImpact: 0, to: 0.885 } },
          { name: "Sandro Mamukelashvili", min: 26, pts: 23, reb: 3, ast: 2, stl: 1, blk: 0, to: 2, tpm: 5, fgm: 9, fga: 15, ftm: 0, fta: 0, composite: 4.41, zScores: { pts: 1.538, reb: -0.214, ast: -0.126, stl: 0.326, blk: -0.612, tpm: 2.579, fgImpact: 1.553, ftImpact: 0, to: -0.639 } },
          { name: "Ziaire Williams", min: 20, pts: 9, reb: 1, ast: 5, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 2.91, zScores: { pts: -0.149, reb: -0.862, ast: 1.17, stl: 1.413, blk: -0.612, tpm: -0.209, fgImpact: 1.273, ftImpact: 0, to: 0.885 } },
          { name: "Adou Thiero", min: 14, pts: 2, reb: 2, ast: 1, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -3.22, zScores: { pts: -0.992, reb: -0.538, ast: -0.558, stl: 0.326, blk: 0.516, tpm: -0.907, fgImpact: -1.048, ftImpact: 0.615, to: -0.639 } },
          { name: "Collin Sexton", min: 13, pts: 10, reb: 1, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: -0.81, zScores: { pts: -0.029, reb: -0.862, ast: 0.306, stl: 0.326, blk: -0.612, tpm: -0.907, fgImpact: 0.224, ftImpact: 0.615, to: 0.123 } },
          { name: "Bronny James", min: 4, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 4, fta: 4, composite: -3.44, zScores: { pts: -0.751, reb: -1.186, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: -0.349, ftImpact: 1.23, to: 0.885 } },
          { name: "Jaden Hardy", min: 4, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -0.872, reb: -0.862, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: -0.293, ftImpact: 0, to: 0.885 } },
          { name: "Cameron Carr", min: 13, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -6.73, zScores: { pts: -1.233, reb: -0.538, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: -1.048, ftImpact: 0, to: -0.639 } }
        ]
      },
      home: {
        abbr: "MIL", name: "Milwaukee Bucks", score: 112,
        players: [
          { name: "Kyle Kuzma", min: 24, pts: 9, reb: 1, ast: 1, stl: 2, blk: 1, to: 3, tpm: 1, fgm: 2, fga: 8, ftm: 4, fta: 4, composite: -1.31, zScores: { pts: -0.149, reb: -0.862, ast: -0.558, stl: 1.413, blk: 0.516, tpm: -0.209, fgImpact: -1.286, ftImpact: 1.23, to: -1.401 } },
          { name: "Nate Ament", min: 22, pts: 2, reb: 4, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.52, zScores: { pts: -0.992, reb: 0.11, ast: -0.558, stl: -0.76, blk: 0.516, tpm: -0.907, fgImpact: -0.293, ftImpact: 0, to: -0.639 } },
          { name: "Kel'el Ware", min: 23, pts: 8, reb: 5, ast: 1, stl: 1, blk: 3, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: 2.01, zScores: { pts: -0.27, reb: 0.435, ast: -0.558, stl: 0.326, blk: 2.771, tpm: -0.907, fgImpact: -0.531, ftImpact: 0.615, to: 0.123 } },
          { name: "Tyler Herro", min: 35, pts: 27, reb: 2, ast: 7, stl: 0, blk: 1, to: 3, tpm: 2, fgm: 8, fga: 16, ftm: 9, fta: 10, composite: 4.12, zScores: { pts: 2.019, reb: -0.538, ast: 2.033, stl: -0.76, blk: 0.516, tpm: 0.488, fgImpact: 0.449, ftImpact: 1.315, to: -1.401 } },
          { name: "Brayden Burries", min: 23, pts: 8, reb: 5, ast: 1, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 7, ftm: 1, fta: 2, composite: -1.77, zScores: { pts: -0.27, reb: 0.435, ast: -0.558, stl: 1.413, blk: -0.612, tpm: -0.209, fgImpact: -0.181, ftImpact: -1.145, to: -0.639 } },
          { name: "Pete Nance", min: 4, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -4.77, zScores: { pts: -0.872, reb: -0.862, ast: -0.558, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: 0.056, ftImpact: -1.145, to: 0.885 } },
          { name: "Jaime Jaquez Jr.", min: 30, pts: 25, reb: 5, ast: 3, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 16, ftm: 9, fta: 9, composite: 6.39, zScores: { pts: 1.778, reb: 0.435, ast: 0.306, stl: 1.413, blk: -0.612, tpm: 0.488, fgImpact: -0.306, ftImpact: 2.768, to: 0.123 } },
          { name: "Ousmane Dieng", min: 18, pts: 9, reb: 2, ast: 4, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: 0.51, zScores: { pts: -0.149, reb: -0.538, ast: 0.738, stl: 0.326, blk: -0.612, tpm: 0.488, fgImpact: 0.518, ftImpact: -1.145, to: 0.885 } },
          { name: "Bogoljub Markovic", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.8, zScores: { pts: -1.233, reb: -1.186, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.885 } },
          { name: "Jericho Sims", min: 18, pts: 0, reb: 4, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.06, zScores: { pts: -1.233, reb: 0.11, ast: -0.558, stl: -0.76, blk: 0.516, tpm: -0.907, fgImpact: -0.349, ftImpact: 0, to: 0.123 } },
          { name: "Gary Trent Jr.", min: 4, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.55, zScores: { pts: -0.511, reb: -0.862, ast: -0.989, stl: -0.76, blk: -0.612, tpm: 0.488, fgImpact: 0.811, ftImpact: 0, to: 0.885 } },
          { name: "AJ Green", min: 8, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.58, zScores: { pts: -0.872, reb: -0.862, ast: -0.558, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: 0.406, ftImpact: 0, to: 0.885 } },
          { name: "Ryan Rollins", min: 24, pts: 8, reb: 7, ast: 4, stl: 1, blk: 0, to: 4, tpm: 2, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -1.64, zScores: { pts: -0.27, reb: 1.083, ast: 0.738, stl: 0.326, blk: -0.612, tpm: 0.488, fgImpact: -1.229, ftImpact: 0, to: -2.163 } },
          { name: "Kasparas Jakucionis", min: 4, pts: 4, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -1.91, zScores: { pts: -0.751, reb: -0.538, ast: -0.989, stl: 0.326, blk: -0.612, tpm: -0.907, fgImpact: 0.056, ftImpact: 0.615, to: 0.885 } }
        ]
      }
    },
      {
      id: "401909972",
      line: "Brooklyn Nets 145 @ New Orleans Pelicans 111 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BKN", name: "Brooklyn Nets", score: 145,
        players: [
          { name: "Julius Randle", min: 29, pts: 17, reb: 4, ast: 5, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 16, ftm: 5, fta: 6, composite: -1.8, zScores: { pts: 0.815, reb: 0.11, ast: 1.17, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: -1.061, ftImpact: 0.085, to: -0.639 } },
          { name: "Michael Porter Jr.", min: 28, pts: 22, reb: 6, ast: 3, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 7, fga: 14, ftm: 4, fta: 4, composite: 5.82, zScores: { pts: 1.417, reb: 0.759, ast: 0.306, stl: 0.326, blk: -0.612, tpm: 1.882, fgImpact: 0.393, ftImpact: 1.23, to: 0.123 } },
          { name: "Danny Wolf", min: 29, pts: 10, reb: 11, ast: 4, stl: 1, blk: 2, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 3, fta: 4, composite: 3.15, zScores: { pts: -0.029, reb: 2.38, ast: 0.738, stl: 0.326, blk: 1.644, tpm: -0.209, fgImpact: -0.531, ftImpact: -0.53, to: -0.639 } },
          { name: "Day'Ron Sharpe", min: 19, pts: 15, reb: 4, ast: 5, stl: 1, blk: 4, to: 2, tpm: 2, fgm: 5, fga: 6, ftm: 3, fta: 4, composite: 7.08, zScores: { pts: 0.574, reb: 0.11, ast: 1.17, stl: 0.326, blk: 3.899, tpm: 0.488, fgImpact: 1.678, ftImpact: -0.53, to: -0.639 } },
          { name: "Egor Demin", min: 23, pts: 22, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 8, ftm: 8, fta: 10, composite: 2.25, zScores: { pts: 1.417, reb: -0.862, ast: -0.558, stl: 0.326, blk: -0.612, tpm: 1.882, fgImpact: 0.979, ftImpact: -0.445, to: 0.123 } },
          { name: "Josh Minott", min: 7, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.92, zScores: { pts: -1.233, reb: -0.538, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.123 } },
          { name: "Noah Clowney", min: 19, pts: 16, reb: 3, ast: 0, stl: 2, blk: 1, to: 1, tpm: 2, fgm: 5, fga: 7, ftm: 4, fta: 5, composite: 3.14, zScores: { pts: 0.694, reb: -0.214, ast: -0.989, stl: 1.413, blk: 0.516, tpm: 0.488, fgImpact: 1.329, ftImpact: -0.223, to: 0.123 } },
          { name: "Chaney Johnson", min: 15, pts: 4, reb: 3, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -1.45, zScores: { pts: -0.751, reb: -0.214, ast: -0.126, stl: -0.76, blk: 0.516, tpm: -0.907, fgImpact: 0.056, ftImpact: 0.615, to: 0.123 } },
          { name: "Moritz Wagner", min: 19, pts: 16, reb: 3, ast: 4, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 8, ftm: 2, fta: 2, composite: 2.81, zScores: { pts: 0.694, reb: -0.214, ast: 0.738, stl: -0.76, blk: -0.612, tpm: 0.488, fgImpact: 1.734, ftImpact: 0.615, to: 0.123 } },
          { name: "Terance Mann", min: 18, pts: 6, reb: 1, ast: 3, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.13, zScores: { pts: -0.511, reb: -0.862, ast: 0.306, stl: 0.326, blk: -0.612, tpm: 0.488, fgImpact: 0.112, ftImpact: 0, to: 0.885 } },
          { name: "Keon Ellis", min: 26, pts: 11, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 4, ftm: 3, fta: 3, composite: 2.62, zScores: { pts: 0.092, reb: 0.11, ast: 0.306, stl: 0.326, blk: -0.612, tpm: 0.488, fgImpact: 0.867, ftImpact: 0.923, to: 0.123 } },
          { name: "Drake Powell", min: 7, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: -3.72, zScores: { pts: -0.511, reb: -1.186, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: 0.811, ftImpact: -1.145, to: 0.885 } }
        ]
      },
      home: {
        abbr: "NO", name: "New Orleans Pelicans", score: 111,
        players: [
          { name: "Herbert Jones", min: 25, pts: 2, reb: 2, ast: 3, stl: 3, blk: 2, to: 2, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: 0.03, zScores: { pts: -0.992, reb: -0.538, ast: 0.306, stl: 2.5, blk: 1.644, tpm: -0.907, fgImpact: -1.342, ftImpact: 0, to: -0.639 } },
          { name: "Zion Williamson", min: 30, pts: 29, reb: 4, ast: 2, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 8, fga: 14, ftm: 12, fta: 14, composite: 3.08, zScores: { pts: 2.26, reb: 0.11, ast: -0.126, stl: -0.76, blk: 0.516, tpm: -0.209, fgImpact: 1.148, ftImpact: 0.785, to: -0.639 } },
          { name: "Karlo Matkovic", min: 22, pts: 4, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -4.7, zScores: { pts: -0.751, reb: 0.11, ast: -0.558, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: -0.587, ftImpact: 0, to: -0.639 } },
          { name: "Dejounte Murray", min: 28, pts: 5, reb: 2, ast: 4, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 1, composite: -3.6, zScores: { pts: -0.631, reb: -0.538, ast: 0.738, stl: 0.326, blk: -0.612, tpm: -0.209, fgImpact: -0.587, ftImpact: -1.453, to: -0.639 } },
          { name: "Jeremiah Fears", min: 28, pts: 14, reb: 4, ast: 5, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 6, fga: 12, ftm: 0, fta: 0, composite: -0.98, zScores: { pts: 0.453, reb: 0.11, ast: 1.17, stl: -0.76, blk: -0.612, tpm: 0.488, fgImpact: 0.337, ftImpact: 0, to: -2.163 } },
          { name: "Saddiq Bey", min: 29, pts: 15, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 11, ftm: 2, fta: 3, composite: -0.62, zScores: { pts: 0.574, reb: -0.862, ast: -0.126, stl: -0.76, blk: -0.612, tpm: 1.185, fgImpact: -0.069, ftImpact: -0.838, to: 0.885 } },
          { name: "Julian Reese", min: 7, pts: 2, reb: 2, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -0.65, zScores: { pts: -0.992, reb: -0.538, ast: -0.558, stl: 0.326, blk: 0.516, tpm: -0.907, fgImpact: 0, ftImpact: 0.615, to: 0.885 } },
          { name: "DeAndre Jordan", min: 11, pts: 0, reb: 3, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.62, zScores: { pts: -1.233, reb: -0.214, ast: -0.989, stl: 0.326, blk: 0.516, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.885 } },
          { name: "Derik Queen", min: 14, pts: 9, reb: 0, ast: 0, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 4, fta: 4, composite: 0.08, zScores: { pts: -0.149, reb: -1.186, ast: -0.989, stl: 1.413, blk: -0.612, tpm: -0.209, fgImpact: 0.462, ftImpact: 1.23, to: 0.123 } },
          { name: "Jordan Poole", min: 21, pts: 14, reb: 0, ast: 1, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 5, fga: 8, ftm: 2, fta: 4, composite: -3, zScores: { pts: 0.453, reb: -1.186, ast: -0.558, stl: -0.76, blk: 0.516, tpm: 0.488, fgImpact: 0.979, ftImpact: -2.29, to: -0.639 } },
          { name: "Bryce McGowens", min: 13, pts: 11, reb: 1, ast: 1, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 8, fta: 8, composite: 1.55, zScores: { pts: 0.092, reb: -0.862, ast: -0.558, stl: 1.413, blk: -0.612, tpm: -0.209, fgImpact: -0.293, ftImpact: 2.46, to: 0.123 } },
          { name: "Jaron Pierre Jr.", min: 7, pts: 4, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 1, fta: 2, composite: -4.81, zScores: { pts: -0.751, reb: 0.11, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: -1.342, ftImpact: -1.145, to: 0.885 } },
          { name: "AJ Johnson", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.18, zScores: { pts: -0.992, reb: -0.862, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: 0.056, ftImpact: 0, to: 0.885 } }
        ]
      }
    },
      {
      id: "401909973",
      line: "Orlando Magic 123 @ Utah Jazz 108 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ORL", name: "Orlando Magic", score: 123,
        players: [
          { name: "Franz Wagner", min: 39, pts: 38, reb: 8, ast: 1, stl: 1, blk: 0, to: 4, tpm: 3, fgm: 13, fga: 23, ftm: 9, fta: 10, composite: 6.02, zScores: { pts: 3.345, reb: 1.407, ast: -0.558, stl: 0.326, blk: -0.612, tpm: 1.185, fgImpact: 1.778, ftImpact: 1.315, to: -2.163 } },
          { name: "Wendell Carter Jr.", min: 28, pts: 9, reb: 7, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 3, fta: 3, composite: -0.24, zScores: { pts: -0.149, reb: 1.083, ast: 0.306, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: 0.518, ftImpact: 0.923, to: -0.639 } },
          { name: "Desmond Bane", min: 34, pts: 25, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 7, fgm: 9, fga: 16, ftm: 0, fta: 0, composite: 6.45, zScores: { pts: 1.778, reb: -0.214, ast: -0.126, stl: 0.326, blk: -0.612, tpm: 3.973, fgImpact: 1.204, ftImpact: 0, to: 0.123 } },
          { name: "Alex Morales", min: 18, pts: 5, reb: 4, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.8, zScores: { pts: -0.631, reb: 0.11, ast: 0.306, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: 0.112, ftImpact: 0, to: 0.885 } },
          { name: "Anthony Black", min: 39, pts: 22, reb: 7, ast: 8, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 6, fga: 14, ftm: 7, fta: 9, composite: 3.35, zScores: { pts: 1.417, reb: 1.083, ast: 2.465, stl: 0.326, blk: -0.612, tpm: 1.185, fgImpact: -0.362, ftImpact: -0.753, to: -1.401 } },
          { name: "Nikola Vucevic", min: 14, pts: 3, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 1, composite: -2.37, zScores: { pts: -0.872, reb: 0.435, ast: -0.558, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: -0.293, ftImpact: 0.308, to: 0.885 } },
          { name: "Goga Bitadze", min: 20, pts: 4, reb: 7, ast: 0, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 4, composite: -0.94, zScores: { pts: -0.751, reb: 1.083, ast: -0.989, stl: 0.326, blk: 1.644, tpm: -0.907, fgImpact: 0.056, ftImpact: -2.29, to: 0.885 } },
          { name: "Colin Castleton", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.8, zScores: { pts: -1.233, reb: -1.186, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.885 } },
          { name: "Jevon Carter", min: 28, pts: 11, reb: 3, ast: 4, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 12, ftm: 0, fta: 0, composite: 2.31, zScores: { pts: 0.092, reb: -0.214, ast: 0.738, stl: 1.413, blk: -0.612, tpm: 1.185, fgImpact: -1.173, ftImpact: 0, to: 0.885 } },
          { name: "Jase Richardson", min: 20, pts: 6, reb: 1, ast: 2, stl: 1, blk: 2, to: 1, tpm: 1, fgm: 2, fga: 8, ftm: 1, fta: 1, composite: -0.59, zScores: { pts: -0.511, reb: -0.862, ast: -0.126, stl: 0.326, blk: 1.644, tpm: -0.209, fgImpact: -1.286, ftImpact: 0.308, to: 0.123 } }
        ]
      },
      home: {
        abbr: "UTAH", name: "Utah Jazz", score: 108,
        players: [
          { name: "Jaxson Hayes", min: 30, pts: 11, reb: 8, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 3, fta: 4, composite: 0.57, zScores: { pts: 0.092, reb: 1.407, ast: -0.989, stl: 1.413, blk: -0.612, tpm: -0.907, fgImpact: 0.574, ftImpact: -0.53, to: 0.123 } },
          { name: "Josh Green", min: 26, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -0.872, reb: -0.538, ast: -0.558, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: -0.643, ftImpact: 0, to: 0.123 } },
          { name: "Keyonte George", min: 33, pts: 13, reb: 7, ast: 7, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 13, ftm: 5, fta: 5, composite: 0.42, zScores: { pts: 0.333, reb: 1.083, ast: 2.033, stl: -0.76, blk: -0.612, tpm: 0.488, fgImpact: -2.278, ftImpact: 1.538, to: -1.401 } },
          { name: "Ace Bailey", min: 31, pts: 18, reb: 7, ast: 2, stl: 2, blk: 4, to: 2, tpm: 3, fgm: 6, fga: 17, ftm: 3, fta: 4, composite: 5.81, zScores: { pts: 0.935, reb: 1.083, ast: -0.126, stl: 1.413, blk: 3.899, tpm: 1.185, fgImpact: -1.411, ftImpact: -0.53, to: -0.639 } },
          { name: "Darryn Peterson", min: 33, pts: 22, reb: 4, ast: 5, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 7, fga: 19, ftm: 6, fta: 6, composite: 4.64, zScores: { pts: 1.417, reb: 0.11, ast: 1.17, stl: 0.326, blk: 0.516, tpm: 0.488, fgImpact: -1.355, ftImpact: 1.845, to: 0.123 } },
          { name: "Brice Sensabaugh", min: 23, pts: 19, reb: 3, ast: 1, stl: 1, blk: 1, to: 1, tpm: 3, fgm: 6, fga: 10, ftm: 4, fta: 5, composite: 3.25, zScores: { pts: 1.056, reb: -0.214, ast: -0.558, stl: 0.326, blk: 0.516, tpm: 1.185, fgImpact: 1.036, ftImpact: -0.223, to: 0.123 } },
          { name: "Mo Bamba", min: 18, pts: 5, reb: 1, ast: 1, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: -1.87, zScores: { pts: -0.631, reb: -0.862, ast: -0.558, stl: -0.76, blk: 1.644, tpm: -0.907, fgImpact: 0.462, ftImpact: -1.145, to: 0.885 } },
          { name: "Svi Mykhailiuk", min: 20, pts: 3, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.17, zScores: { pts: -0.872, reb: -1.186, ast: -0.126, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: -0.293, ftImpact: 0, to: 0.885 } },
          { name: "Josh Okogie", min: 15, pts: 7, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 4, fta: 4, composite: -1.77, zScores: { pts: -0.39, reb: -0.214, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: 0.056, ftImpact: 1.23, to: 0.123 } },
          { name: "Isaiah Collier", min: 12, pts: 7, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 2, fta: 4, composite: -4.02, zScores: { pts: -0.39, reb: -0.214, ast: -0.126, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: 0.462, ftImpact: -2.29, to: 0.123 } }
        ]
      }
    },
      {
      id: "401909974",
      line: "Golden State Warriors 108 @ Houston Rockets 115 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "GS", name: "Golden State Warriors", score: 108,
        players: [
          { name: "Draymond Green", min: 27, pts: 7, reb: 5, ast: 7, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 2.26, zScores: { pts: -0.39, reb: 0.435, ast: 2.033, stl: -0.76, blk: 0.516, tpm: -0.209, fgImpact: 0.518, ftImpact: 0, to: 0.123 } },
          { name: "Yaxel Lendeborg", min: 36, pts: 25, reb: 10, ast: 0, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 9, fga: 19, ftm: 5, fta: 8, composite: 0.83, zScores: { pts: 1.778, reb: 2.055, ast: -0.989, stl: 1.413, blk: -0.612, tpm: 0.488, fgImpact: 0.156, ftImpact: -2.821, to: -0.639 } },
          { name: "Al Horford", min: 21, pts: 2, reb: 1, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -4.2, zScores: { pts: -0.992, reb: -0.862, ast: 0.738, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: -1.691, ftImpact: 0, to: 0.885 } },
          { name: "Stephen Curry", min: 6, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.8, zScores: { pts: -0.872, reb: -1.186, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: -0.293, ftImpact: 0, to: 0.123 } },
          { name: "Brandin Podziemski", min: 37, pts: 22, reb: 6, ast: 4, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 7, fga: 15, ftm: 4, fta: 5, composite: 5.54, zScores: { pts: 1.417, reb: 0.759, ast: 0.738, stl: 1.413, blk: -0.612, tpm: 1.882, fgImpact: 0.043, ftImpact: -0.223, to: 0.123 } },
          { name: "Georges Niang", min: 19, pts: 5, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 7, ftm: 2, fta: 3, composite: -4.41, zScores: { pts: -0.631, reb: 0.435, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: -1.691, ftImpact: -0.838, to: 0.885 } },
          { name: "Graham Ike", min: 4, pts: 4, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -3.22, zScores: { pts: -0.751, reb: -1.186, ast: -0.558, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: 0.056, ftImpact: 0.615, to: 0.885 } },
          { name: "Malevy Leons", min: 4, pts: 0, reb: 3, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -1.92, zScores: { pts: -1.233, reb: -0.214, ast: -0.989, stl: -0.76, blk: 1.644, tpm: -0.907, fgImpact: -0.349, ftImpact: 0, to: 0.885 } },
          { name: "Gui Santos", min: 12, pts: 0, reb: 3, ast: 1, stl: 0, blk: 1, to: 4, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -6.37, zScores: { pts: -1.233, reb: -0.214, ast: -0.558, stl: -0.76, blk: 0.516, tpm: -0.907, fgImpact: -1.048, ftImpact: 0, to: -2.163 } },
          { name: "Charles Bassey", min: 13, pts: 7, reb: 6, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: -1.16, zScores: { pts: -0.39, reb: 0.759, ast: -0.989, stl: -0.76, blk: 0.516, tpm: -0.907, fgImpact: 0.867, ftImpact: -1.145, to: 0.885 } },
          { name: "De'Anthony Melton", min: 25, pts: 11, reb: 4, ast: 4, stl: 0, blk: 1, to: 2, tpm: 3, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 1.68, zScores: { pts: 0.092, reb: 0.11, ast: 0.738, stl: -0.76, blk: 0.516, tpm: 1.185, fgImpact: -0.181, ftImpact: 0.615, to: -0.639 } },
          { name: "LJ Cryer", min: 18, pts: 13, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 0.1, zScores: { pts: 0.333, reb: -0.862, ast: -0.558, stl: -0.76, blk: -0.612, tpm: 1.185, fgImpact: -0.125, ftImpact: 0.615, to: 0.885 } },
          { name: "Will Richard", min: 19, pts: 9, reb: 4, ast: 0, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: -2.44, zScores: { pts: -0.149, reb: 0.11, ast: -0.989, stl: 0.326, blk: -0.612, tpm: 0.488, fgImpact: 0.168, ftImpact: -1.145, to: -0.639 } }
        ]
      },
      home: {
        abbr: "HOU", name: "Houston Rockets", score: 115,
        players: [
          { name: "Kevin Durant", min: 34, pts: 20, reb: 4, ast: 5, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 8, fga: 17, ftm: 3, fta: 4, composite: -0.2, zScores: { pts: 1.176, reb: 0.11, ast: 1.17, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: 0.099, ftImpact: -0.53, to: -0.639 } },
          { name: "Jabari Smith Jr.", min: 35, pts: 14, reb: 8, ast: 0, stl: 1, blk: 3, to: 2, tpm: 2, fgm: 5, fga: 14, ftm: 2, fta: 2, composite: 3.32, zScores: { pts: 0.453, reb: 1.407, ast: -0.989, stl: 0.326, blk: 2.771, tpm: 0.488, fgImpact: -1.117, ftImpact: 0.615, to: -0.639 } },
          { name: "Alperen Sengun", min: 37, pts: 19, reb: 13, ast: 9, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 8, fga: 14, ftm: 2, fta: 4, composite: 5.83, zScores: { pts: 1.056, reb: 3.028, ast: 2.897, stl: 0.326, blk: 0.516, tpm: -0.209, fgImpact: 1.148, ftImpact: -2.29, to: -0.639 } },
          { name: "Fred VanVleet", min: 30, pts: 18, reb: 2, ast: 6, stl: 3, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 9, ftm: 2, fta: 2, composite: 8.65, zScores: { pts: 0.935, reb: -0.538, ast: 1.601, stl: 2.5, blk: -0.612, tpm: 1.882, fgImpact: 1.385, ftImpact: 0.615, to: 0.885 } },
          { name: "Amen Thompson", min: 29, pts: 19, reb: 7, ast: 4, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 8, fga: 11, ftm: 3, fta: 5, composite: 3.51, zScores: { pts: 1.056, reb: 1.083, ast: 0.738, stl: 0.326, blk: 1.644, tpm: -0.907, fgImpact: 2.196, ftImpact: -1.983, to: -0.639 } },
          { name: "Jae'Sean Tate", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.8, zScores: { pts: -1.233, reb: -1.186, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.885 } },
          { name: "Tari Eason", min: 22, pts: 6, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 11, ftm: 2, fta: 2, composite: -4.46, zScores: { pts: -0.511, reb: -0.214, ast: -0.989, stl: -0.76, blk: 0.516, tpm: -0.907, fgImpact: -2.334, ftImpact: 0.615, to: 0.123 } },
          { name: "Isaiah Crawford", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.8, zScores: { pts: -1.233, reb: -1.186, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.885 } },
          { name: "Oscar Tshiebwe", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.8, zScores: { pts: -1.233, reb: -1.186, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.885 } },
          { name: "Marcus Smart", min: 17, pts: 6, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.56, zScores: { pts: -0.511, reb: -0.538, ast: -0.558, stl: -0.76, blk: -0.612, tpm: 0.488, fgImpact: 0.811, ftImpact: 0, to: 0.123 } },
          { name: "Bogdan Bogdanovic", min: 10, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.8, zScores: { pts: -1.233, reb: -1.186, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.885 } },
          { name: "Reed Sheppard", min: 20, pts: 13, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 0.57, zScores: { pts: 0.333, reb: -0.862, ast: -0.558, stl: 0.326, blk: -0.612, tpm: 1.185, fgImpact: 0.63, ftImpact: 0, to: 0.123 } },
          { name: "Bruce Thornton", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.8, zScores: { pts: -1.233, reb: -1.186, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.885 } }
        ]
      }
    },
      {
      id: "401909975",
      line: "Oklahoma City Thunder 108 @ Portland Trail Blazers 118 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OKC", name: "Oklahoma City Thunder", score: 108,
        players: [
          { name: "Isaiah Hartenstein", min: 34, pts: 20, reb: 11, ast: 6, stl: 2, blk: 0, to: 6, tpm: 0, fgm: 10, fga: 14, ftm: 0, fta: 0, composite: 4.02, zScores: { pts: 1.176, reb: 2.38, ast: 1.601, stl: 1.413, blk: -0.612, tpm: -0.907, fgImpact: 2.658, ftImpact: 0, to: -3.686 } },
          { name: "Aday Mara", min: 32, pts: 11, reb: 6, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 8, ftm: 3, fta: 4, composite: -1.37, zScores: { pts: 0.092, reb: 0.759, ast: -0.126, stl: -0.76, blk: 0.516, tpm: -0.907, fgImpact: 0.224, ftImpact: -0.53, to: -0.639 } },
          { name: "Alex Caruso", min: 29, pts: 14, reb: 7, ast: 2, stl: 3, blk: 0, to: 3, tpm: 4, fgm: 4, fga: 6, ftm: 2, fta: 2, composite: 5.32, zScores: { pts: 0.453, reb: 1.083, ast: -0.126, stl: 2.5, blk: -0.612, tpm: 1.882, fgImpact: 0.923, ftImpact: 0.615, to: -1.401 } },
          { name: "Shai Gilgeous-Alexander", min: 36, pts: 31, reb: 4, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 9, fga: 20, ftm: 13, fta: 14, composite: 3.01, zScores: { pts: 2.501, reb: 0.11, ast: -0.126, stl: 0.326, blk: -0.612, tpm: -0.907, fgImpact: -0.194, ftImpact: 2.545, to: -0.639 } },
          { name: "Jared McCain", min: 31, pts: 10, reb: 6, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 14, ftm: 2, fta: 4, composite: -3.56, zScores: { pts: -0.029, reb: 0.759, ast: 0.306, stl: 0.326, blk: -0.612, tpm: 0.488, fgImpact: -2.627, ftImpact: -2.29, to: 0.123 } },
          { name: "Kenrich Williams", min: 26, pts: 11, reb: 2, ast: 2, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 10, ftm: 3, fta: 4, composite: -1.2, zScores: { pts: 0.092, reb: -0.538, ast: -0.126, stl: -0.76, blk: 0.516, tpm: 0.488, fgImpact: -1.229, ftImpact: -0.53, to: 0.885 } },
          { name: "Micah Peavy", min: 12, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.53, zScores: { pts: -1.233, reb: -0.214, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: -0.699, ftImpact: 0, to: 0.885 } },
          { name: "Nique Clifford", min: 16, pts: 5, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.34, zScores: { pts: -0.631, reb: -0.214, ast: -0.558, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: -0.237, ftImpact: 0, to: 0.885 } },
          { name: "Bennett Stirtz", min: 25, pts: 6, reb: 1, ast: 1, stl: 3, blk: 1, to: 1, tpm: 2, fgm: 2, fga: 9, ftm: 0, fta: 0, composite: 0.06, zScores: { pts: -0.511, reb: -0.862, ast: -0.558, stl: 2.5, blk: 0.516, tpm: 0.488, fgImpact: -1.635, ftImpact: 0, to: 0.123 } }
        ]
      },
      home: {
        abbr: "POR", name: "Portland Trail Blazers", score: 118,
        players: [
          { name: "Toumani Camara", min: 38, pts: 14, reb: 5, ast: 3, stl: 1, blk: 2, to: 0, tpm: 2, fgm: 5, fga: 10, ftm: 2, fta: 2, composite: 5.43, zScores: { pts: 0.453, reb: 0.435, ast: 0.306, stl: 0.326, blk: 1.644, tpm: 0.488, fgImpact: 0.281, ftImpact: 0.615, to: 0.885 } },
          { name: "Deni Avdija", min: 35, pts: 28, reb: 3, ast: 6, stl: 4, blk: 2, to: 5, tpm: 4, fgm: 9, fga: 20, ftm: 6, fta: 6, composite: 9.37, zScores: { pts: 2.14, reb: -0.214, ast: 1.601, stl: 3.586, blk: 1.644, tpm: 1.882, fgImpact: -0.194, ftImpact: 1.845, to: -2.924 } },
          { name: "Donovan Clingan", min: 30, pts: 5, reb: 12, ast: 2, stl: 1, blk: 3, to: 2, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 4.31, zScores: { pts: -0.631, reb: 2.704, ast: -0.126, stl: 0.326, blk: 2.771, tpm: -0.209, fgImpact: 0.112, ftImpact: 0, to: -0.639 } },
          { name: "Damian Lillard", min: 32, pts: 18, reb: 3, ast: 3, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 14, ftm: 6, fta: 6, composite: 1.32, zScores: { pts: 0.935, reb: -0.214, ast: 0.306, stl: 0.326, blk: -0.612, tpm: 0.488, fgImpact: -1.117, ftImpact: 1.845, to: -0.639 } },
          { name: "Sidy Cissoko", min: 29, pts: 19, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 6, fga: 9, ftm: 3, fta: 4, composite: 0.25, zScores: { pts: 1.056, reb: -0.538, ast: -0.989, stl: -0.76, blk: -0.612, tpm: 1.882, fgImpact: 1.385, ftImpact: -0.53, to: -0.639 } },
          { name: "Robert Williams III", min: 17, pts: 10, reb: 7, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 4, fta: 4, composite: 1.13, zScores: { pts: -0.029, reb: 1.083, ast: -0.989, stl: -0.76, blk: 0.516, tpm: -0.907, fgImpact: 0.867, ftImpact: 1.23, to: 0.123 } },
          { name: "Branden Carlson", min: 10, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.27, zScores: { pts: -1.233, reb: -0.538, ast: -0.989, stl: -0.76, blk: -0.612, tpm: -0.907, fgImpact: -0.349, ftImpact: 0, to: 0.123 } },
          { name: "Jrue Holiday", min: 30, pts: 19, reb: 3, ast: 5, stl: 2, blk: 0, to: 3, tpm: 5, fgm: 5, fga: 12, ftm: 4, fta: 4, composite: 4.8, zScores: { pts: 1.056, reb: -0.214, ast: 1.17, stl: 1.413, blk: -0.612, tpm: 2.579, fgImpact: -0.418, ftImpact: 1.23, to: -1.401 } },
          { name: "Scoot Henderson", min: 19, pts: 5, reb: 2, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -4.45, zScores: { pts: -0.631, reb: -0.538, ast: -0.126, stl: -0.76, blk: -0.612, tpm: -0.209, fgImpact: -0.936, ftImpact: 0, to: -0.639 } }
        ]
      }
    }
    ]
  },
    "2026-11-12": {
    games: [
      {
      id: "401909976",
      line: "Toronto Raptors 112 @ Philadelphia 76ers 123 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TOR", name: "Toronto Raptors", score: 112,
        players: [
          { name: "RJ Barrett", min: 37, pts: 31, reb: 14, ast: 5, stl: 0, blk: 0, to: 3, tpm: 4, fgm: 13, fga: 20, ftm: 1, fta: 2, composite: 6.7, zScores: { pts: 2.124, reb: 3.031, ast: 0.863, stl: -0.859, blk: -0.613, tpm: 1.895, fgImpact: 2.417, ftImpact: -0.935, to: -1.219 } },
          { name: "Collin Murray-Boyles", min: 32, pts: 14, reb: 0, ast: 4, stl: 1, blk: 5, to: 2, tpm: 1, fgm: 5, fga: 9, ftm: 3, fta: 4, composite: 4.95, zScores: { pts: 0.364, reb: -1.143, ast: 0.519, stl: 0.312, blk: 5.387, tpm: -0.143, fgImpact: 0.515, ftImpact: -0.356, to: -0.502 } },
          { name: "Jakob Poeltl", min: 25, pts: 9, reb: 5, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 3, fta: 4, composite: -0.37, zScores: { pts: -0.153, reb: 0.348, ast: 0.176, stl: 0.312, blk: -0.613, tpm: -0.823, fgImpact: -0.198, ftImpact: -0.356, to: 0.933 } },
          { name: "Immanuel Quickley", min: 28, pts: 26, reb: 4, ast: 6, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 8, fga: 16, ftm: 7, fta: 8, composite: 7.03, zScores: { pts: 1.606, reb: 0.05, ast: 1.206, stl: 0.312, blk: 0.587, tpm: 1.215, fgImpact: 0.318, ftImpact: 0.803, to: 0.933 } },
          { name: "Ja'Kobe Walter", min: 32, pts: 6, reb: 5, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 8, ftm: 1, fta: 2, composite: -4.04, zScores: { pts: -0.463, reb: 0.348, ast: -0.855, stl: 0.312, blk: -0.613, tpm: -0.143, fgImpact: -1.188, ftImpact: -0.935, to: -0.502 } },
          { name: "Kyle Anderson", min: 5, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.82, zScores: { pts: -1.084, reb: -1.143, ast: -0.512, stl: -0.859, blk: -0.613, tpm: -0.823, fgImpact: 0, ftImpact: 0, to: 0.215 } },
          { name: "Jamison Battle", min: 25, pts: 13, reb: 1, ast: 1, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 2.47, zScores: { pts: 0.261, reb: -0.845, ast: -0.512, stl: 0.312, blk: 0.587, tpm: 1.215, fgImpact: 0.515, ftImpact: 0, to: 0.933 } },
          { name: "Allen Graves", min: 13, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.2, zScores: { pts: -1.084, reb: -0.547, ast: -0.855, stl: -0.859, blk: -0.613, tpm: -0.823, fgImpact: -0.634, ftImpact: 0, to: 0.215 } },
          { name: "Malachi Smith", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.76, zScores: { pts: -1.084, reb: -1.143, ast: -0.855, stl: -0.859, blk: -0.613, tpm: -0.823, fgImpact: -0.317, ftImpact: 0, to: 0.933 } },
          { name: "Jamal Shead", min: 22, pts: 5, reb: 1, ast: 5, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: -2.14, zScores: { pts: -0.567, reb: -0.845, ast: 0.863, stl: 0.312, blk: -0.613, tpm: -0.143, fgImpact: -1.227, ftImpact: 0.579, to: -0.502 } },
          { name: "Jaden Bradley", min: 2, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -5.28, zScores: { pts: -0.981, reb: -1.143, ast: -0.855, stl: -0.859, blk: -0.613, tpm: -0.823, fgImpact: 0, ftImpact: -0.935, to: 0.933 } },
          { name: "Alijah Martin", min: 18, pts: 7, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -0.93, zScores: { pts: -0.36, reb: 0.05, ast: -0.512, stl: 0.312, blk: -0.613, tpm: -0.143, fgImpact: 0.119, ftImpact: 0, to: 0.215 } }
        ]
      },
      home: {
        abbr: "PHI", name: "Philadelphia 76ers", score: 123,
        players: [
          { name: "Dean Wade", min: 34, pts: 6, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -0.84, zScores: { pts: -0.463, reb: 0.348, ast: -0.168, stl: -0.859, blk: -0.613, tpm: 0.536, fgImpact: -0.554, ftImpact: 0, to: 0.933 } },
          { name: "Joel Embiid", min: 28, pts: 20, reb: 4, ast: 3, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 7, fga: 17, ftm: 6, fta: 7, composite: 0.63, zScores: { pts: 0.985, reb: 0.05, ast: 0.176, stl: 0.312, blk: 0.587, tpm: -0.823, fgImpact: -0.672, ftImpact: 0.513, to: -0.502 } },
          { name: "Jaylen Brown", min: 36, pts: 18, reb: 6, ast: 2, stl: 2, blk: 1, to: 5, tpm: 0, fgm: 8, fga: 15, ftm: 2, fta: 4, composite: -1.39, zScores: { pts: 0.778, reb: 0.646, ast: -0.168, stl: 1.484, blk: 0.587, tpm: -0.823, fgImpact: 0.634, ftImpact: -1.87, to: -2.654 } },
          { name: "Tyrese Maxey", min: 35, pts: 27, reb: 2, ast: 8, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 8, fga: 13, ftm: 10, fta: 12, composite: 6.2, zScores: { pts: 1.71, reb: -0.547, ast: 1.893, stl: 1.484, blk: 0.587, tpm: -0.143, fgImpact: 1.268, ftImpact: 0.447, to: -0.502 } },
          { name: "VJ Edgecombe", min: 36, pts: 15, reb: 8, ast: 8, stl: 3, blk: 1, to: 0, tpm: 1, fgm: 7, fga: 12, ftm: 0, fta: 0, composite: 8.55, zScores: { pts: 0.468, reb: 1.242, ast: 1.893, stl: 2.655, blk: 0.587, tpm: -0.143, fgImpact: 0.912, ftImpact: 0, to: 0.933 } },
          { name: "Jabari Walker", min: 16, pts: 9, reb: 8, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 0.05, zScores: { pts: -0.153, reb: 1.242, ast: -0.512, stl: -0.859, blk: -0.613, tpm: -0.143, fgImpact: 0.159, ftImpact: 0, to: 0.933 } },
          { name: "Justin Edwards", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.86, zScores: { pts: -1.084, reb: -0.845, ast: -0.855, stl: -0.859, blk: -0.613, tpm: -0.823, fgImpact: 0, ftImpact: 0, to: 0.215 } },
          { name: "Tacko Fall", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.44, zScores: { pts: -1.084, reb: -1.143, ast: -0.855, stl: -0.859, blk: -0.613, tpm: -0.823, fgImpact: 0, ftImpact: 0, to: 0.933 } },
          { name: "Kentavious Caldwell-Pope", min: 27, pts: 11, reb: 4, ast: 5, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 4.49, zScores: { pts: 0.054, reb: 0.05, ast: 0.863, stl: 0.312, blk: 0.587, tpm: 1.215, fgImpact: 0.476, ftImpact: 0, to: 0.933 } },
          { name: "Anfernee Simons", min: 23, pts: 17, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 5, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 3.48, zScores: { pts: 0.675, reb: -0.248, ast: -0.168, stl: -0.859, blk: -0.613, tpm: 2.574, fgImpact: 1.189, ftImpact: 0, to: 0.933 } },
          { name: "Caleb Love", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.44, zScores: { pts: -1.084, reb: -1.143, ast: -0.855, stl: -0.859, blk: -0.613, tpm: -0.823, fgImpact: 0, ftImpact: 0, to: 0.933 } },
          { name: "Labaron Philon Jr.", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.76, zScores: { pts: -1.084, reb: -1.143, ast: -0.855, stl: -0.859, blk: -0.613, tpm: -0.823, fgImpact: -0.317, ftImpact: 0, to: 0.933 } }
        ]
      }
    },
      {
      id: "401909977",
      line: "Detroit Pistons 144 @ Washington Wizards 140 (Final/2OT)",
      completed: true,
      statusText: "Final/2OT",
      away: {
        abbr: "DET", name: "Detroit Pistons", score: 144,
        players: [
          { name: "Duncan Robinson", min: 41, pts: 13, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 14, ftm: 0, fta: 0, composite: -0.44, zScores: { pts: 0.261, reb: -0.248, ast: -0.512, stl: 0.312, blk: -0.613, tpm: 1.215, fgImpact: -1.069, ftImpact: 0, to: 0.215 } },
          { name: "John Collins", min: 25, pts: 10, reb: 4, ast: 0, stl: 0, blk: 1, to: 3, tpm: 2, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: -1.75, zScores: { pts: -0.049, reb: 0.05, ast: -0.855, stl: -0.859, blk: 0.587, tpm: 0.536, fgImpact: -0.514, ftImpact: 0.579, to: -1.219 } },
          { name: "Cade Cunningham", min: 48, pts: 52, reb: 5, ast: 11, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 16, fga: 25, ftm: 17, fta: 18, composite: 17.17, zScores: { pts: 4.297, reb: 0.348, ast: 2.924, stl: 0.312, blk: 0.587, tpm: 1.215, fgImpact: 2.853, ftImpact: 3.699, to: 0.933 } },
          { name: "Ausar Thompson", min: 43, pts: 17, reb: 11, ast: 11, stl: 3, blk: 3, to: 3, tpm: 0, fgm: 8, fga: 15, ftm: 1, fta: 2, composite: 9.03, zScores: { pts: 0.675, reb: 2.137, ast: 2.924, stl: 2.655, blk: 2.987, tpm: -0.823, fgImpact: 0.634, ftImpact: -0.935, to: -1.219 } },
          { name: "Daniss Jenkins", min: 42, pts: 21, reb: 6, ast: 0, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 11, ftm: 6, fta: 6, composite: 6.19, zScores: { pts: 1.089, reb: 0.646, ast: -0.855, stl: 1.484, blk: -0.613, tpm: 1.215, fgImpact: 0.555, ftImpact: 1.738, to: 0.933 } },
          { name: "Paul Reed", min: 38, pts: 13, reb: 11, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 9, ftm: 3, fta: 6, composite: -2.51, zScores: { pts: 0.261, reb: 2.137, ast: 0.176, stl: -0.859, blk: -0.613, tpm: -0.823, fgImpact: 0.515, ftImpact: -2.805, to: -0.502 } },
          { name: "Ronald Holland II", min: 14, pts: 2, reb: 5, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -2.8, zScores: { pts: -0.877, reb: 0.348, ast: -0.168, stl: -0.859, blk: 0.587, tpm: -0.823, fgImpact: -1.227, ftImpact: 0, to: 0.215 } },
          { name: "Javonte Green", min: 15, pts: 5, reb: 1, ast: 0, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.53, zScores: { pts: -0.567, reb: -0.845, ast: -0.855, stl: 1.484, blk: -0.613, tpm: -0.143, fgImpact: 0.079, ftImpact: 0, to: 0.933 } },
          { name: "Kevin Huerter", min: 24, pts: 11, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 4, fta: 5, composite: -2.14, zScores: { pts: 0.054, reb: -0.845, ast: -0.855, stl: 0.312, blk: -0.613, tpm: -0.143, fgImpact: -0.198, ftImpact: -0.066, to: 0.215 } }
        ]
      },
      home: {
        abbr: "WSH", name: "Washington Wizards", score: 140,
        players: [
          { name: "Anthony Davis", min: 44, pts: 30, reb: 15, ast: 4, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 13, fga: 21, ftm: 4, fta: 4, composite: 7.5, zScores: { pts: 2.02, reb: 3.329, ast: 0.519, stl: 0.312, blk: -0.613, tpm: -0.823, fgImpact: 2.1, ftImpact: 1.159, to: -0.502 } },
          { name: "AJ Dybantsa", min: 44, pts: 5, reb: 8, ast: 4, stl: 1, blk: 1, to: 4, tpm: 1, fgm: 2, fga: 10, ftm: 0, fta: 0, composite: -1.81, zScores: { pts: -0.567, reb: 1.242, ast: 0.519, stl: 0.312, blk: 0.587, tpm: -0.143, fgImpact: -1.821, ftImpact: 0, to: -1.937 } },
          { name: "Kyshawn George", min: 26, pts: 14, reb: 1, ast: 5, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 5, fga: 7, ftm: 1, fta: 2, composite: 1.75, zScores: { pts: 0.364, reb: -0.845, ast: 0.863, stl: -0.859, blk: 0.587, tpm: 1.215, fgImpact: 1.149, ftImpact: -0.935, to: 0.215 } },
          { name: "Alex Sarr", min: 44, pts: 30, reb: 9, ast: 2, stl: 2, blk: 1, to: 2, tpm: 4, fgm: 12, fga: 14, ftm: 2, fta: 4, composite: 8.63, zScores: { pts: 2.02, reb: 1.54, ast: -0.168, stl: 1.484, blk: 0.587, tpm: 1.895, fgImpact: 3.644, ftImpact: -1.87, to: -0.502 } },
          { name: "Trae Young", min: 45, pts: 37, reb: 2, ast: 14, stl: 0, blk: 0, to: 4, tpm: 4, fgm: 8, fga: 23, ftm: 17, fta: 17, composite: 7.66, zScores: { pts: 2.745, reb: -0.547, ast: 3.955, stl: -0.859, blk: -0.613, tpm: 1.895, fgImpact: -1.9, ftImpact: 4.924, to: -1.937 } },
          { name: "Deandre Ayton", min: 9, pts: 2, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.49, zScores: { pts: -0.877, reb: 0.05, ast: -0.855, stl: -0.859, blk: 0.587, tpm: -0.823, fgImpact: 0.356, ftImpact: 0, to: 0.933 } },
          { name: "Bub Carrington", min: 16, pts: 2, reb: 0, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -5.5, zScores: { pts: -0.877, reb: -1.143, ast: -0.168, stl: -0.859, blk: -0.613, tpm: -0.823, fgImpact: -1.227, ftImpact: 0, to: 0.215 } },
          { name: "Bilal Coulibaly", min: 29, pts: 4, reb: 7, ast: 0, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 1.39, zScores: { pts: -0.67, reb: 0.944, ast: -0.855, stl: 0.312, blk: 1.787, tpm: -0.823, fgImpact: -0.237, ftImpact: 0, to: 0.933 } },
          { name: "Will Riley", min: 3, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.1, zScores: { pts: -0.774, reb: -1.143, ast: -0.855, stl: -0.859, blk: -0.613, tpm: -0.143, fgImpact: 0.356, ftImpact: 0, to: 0.933 } },
          { name: "Tre Johnson", min: 30, pts: 13, reb: 4, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 14, ftm: 2, fta: 2, composite: -1.29, zScores: { pts: 0.261, reb: 0.05, ast: -0.168, stl: 0.312, blk: -0.613, tpm: -0.143, fgImpact: -1.069, ftImpact: 0.579, to: -0.502 } }
        ]
      }
    },
      {
      id: "401909978",
      line: "Dallas Mavericks 94 @ Minnesota Timberwolves 133 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DAL", name: "Dallas Mavericks", score: 94,
        players: [
          { name: "Caleb Martin", min: 21, pts: 7, reb: 2, ast: 5, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 1.02, zScores: { pts: -0.36, reb: -0.547, ast: 0.863, stl: 1.484, blk: -0.613, tpm: -0.143, fgImpact: 0.119, ftImpact: 0, to: 0.215 } },
          { name: "Daniel Gafford", min: 16, pts: 3, reb: 3, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -2.11, zScores: { pts: -0.774, reb: -0.248, ast: -0.512, stl: -0.859, blk: 1.787, tpm: -0.823, fgImpact: 0.04, ftImpact: -0.935, to: 0.215 } },
          { name: "P.J. Washington", min: 16, pts: 10, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 7, ftm: 1, fta: 1, composite: -2.51, zScores: { pts: -0.049, reb: -0.248, ast: -0.855, stl: -0.859, blk: -0.613, tpm: -0.143, fgImpact: 0.476, ftImpact: 0.29, to: -0.502 } },
          { name: "Cooper Flagg", min: 27, pts: 12, reb: 7, ast: 3, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 12, ftm: 1, fta: 2, composite: 0.13, zScores: { pts: 0.158, reb: 0.944, ast: 0.176, stl: 1.484, blk: -0.613, tpm: -0.143, fgImpact: -0.435, ftImpact: -0.935, to: -0.502 } },
          { name: "Kyrie Irving", min: 27, pts: 10, reb: 3, ast: 4, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 4, fga: 11, ftm: 0, fta: 0, composite: -0.09, zScores: { pts: -0.049, reb: -0.248, ast: 0.519, stl: -0.859, blk: 0.587, tpm: 0.536, fgImpact: -0.791, ftImpact: 0, to: 0.215 } },
          { name: "Naji Marshall", min: 23, pts: 13, reb: 1, ast: 4, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 10, ftm: 4, fta: 4, composite: 0.84, zScores: { pts: 0.261, reb: -0.845, ast: 0.519, stl: 1.484, blk: -0.613, tpm: -0.143, fgImpact: -0.475, ftImpact: 1.159, to: -0.502 } },
          { name: "Santi Aldama", min: 10, pts: 3, reb: 1, ast: 1, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -2.39, zScores: { pts: -0.774, reb: -0.845, ast: -0.512, stl: 0.312, blk: 0.587, tpm: -0.143, fgImpact: -1.227, ftImpact: 0, to: 0.215 } },
          { name: "Morez Johnson Jr.", min: 13, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -6.55, zScores: { pts: -1.084, reb: -0.547, ast: -0.855, stl: -0.859, blk: -0.613, tpm: -0.823, fgImpact: -1.267, ftImpact: 0, to: -0.502 } },
          { name: "Tobi Lawal", min: 12, pts: 0, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.95, zScores: { pts: -1.084, reb: 0.646, ast: -0.512, stl: -0.859, blk: -0.613, tpm: -0.823, fgImpact: -0.634, ftImpact: 0, to: 0.933 } },
          { name: "Zaccharie Risacher", min: 25, pts: 22, reb: 6, ast: 3, stl: 2, blk: 1, to: 1, tpm: 4, fgm: 9, fga: 14, ftm: 0, fta: 0, composite: 7.82, zScores: { pts: 1.192, reb: 0.646, ast: 0.176, stl: 1.484, blk: 0.587, tpm: 1.895, fgImpact: 1.624, ftImpact: 0, to: 0.215 } },
          { name: "Moussa Cisse", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -1.084, reb: -1.143, ast: -0.855, stl: -0.859, blk: 0.587, tpm: -0.823, fgImpact: -0.317, ftImpact: 0, to: 0.933 } },
          { name: "Marcus Sasser", min: 9, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: -6.4, zScores: { pts: -0.774, reb: -0.845, ast: -0.855, stl: -0.859, blk: -0.613, tpm: -0.823, fgImpact: -0.911, ftImpact: -0.935, to: 0.215 } },
          { name: "Max Christie", min: 7, pts: 3, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.62, zScores: { pts: -0.774, reb: -0.547, ast: -0.855, stl: -0.859, blk: 0.587, tpm: -0.143, fgImpact: 0.04, ftImpact: 0, to: 0.933 } },
          { name: "Walter Clayton Jr.", min: 22, pts: 5, reb: 1, ast: 4, stl: 0, blk: 0, to: 5, tpm: 0, fgm: 1, fga: 8, ftm: 3, fta: 3, composite: -6.83, zScores: { pts: -0.567, reb: -0.845, ast: 0.519, stl: -0.859, blk: -0.613, tpm: -0.823, fgImpact: -1.861, ftImpact: 0.869, to: -2.654 } },
          { name: "Jett Howard", min: 5, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.05, zScores: { pts: -0.774, reb: -1.143, ast: -0.855, stl: -0.859, blk: -0.613, tpm: -0.143, fgImpact: -0.594, ftImpact: 0, to: 0.933 } }
        ]
      },
      home: {
        abbr: "MIN", name: "Minnesota Timberwolves", score: 133,
        players: [
          { name: "Jaden McDaniels", min: 25, pts: 16, reb: 9, ast: 3, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 7, fga: 12, ftm: 2, fta: 2, composite: 1.46, zScores: { pts: 0.571, reb: 1.54, ast: 0.176, stl: -0.859, blk: 0.587, tpm: -0.823, fgImpact: 0.912, ftImpact: 0.579, to: -1.219 } },
          { name: "Jonathan Kuminga", min: 24, pts: 14, reb: 8, ast: 5, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 6, fga: 11, ftm: 1, fta: 2, composite: 1.6, zScores: { pts: 0.364, reb: 1.242, ast: 0.863, stl: 1.484, blk: -0.613, tpm: -0.143, fgImpact: 0.555, ftImpact: -0.935, to: -1.219 } },
          { name: "Rudy Gobert", min: 23, pts: 9, reb: 6, ast: 1, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 1, fta: 1, composite: 2.56, zScores: { pts: -0.153, reb: 0.646, ast: -0.512, stl: 0.312, blk: 1.787, tpm: -0.823, fgImpact: 0.792, ftImpact: 0.29, to: 0.215 } },
          { name: "Ayo Dosunmu", min: 27, pts: 18, reb: 2, ast: 1, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 8, fga: 15, ftm: 0, fta: 0, composite: 2, zScores: { pts: 0.778, reb: -0.547, ast: -0.512, stl: 0.312, blk: 0.587, tpm: 0.536, fgImpact: 0.634, ftImpact: 0, to: 0.215 } },
          { name: "LaMelo Ball", min: 25, pts: 22, reb: 3, ast: 9, stl: 2, blk: 0, to: 4, tpm: 6, fgm: 8, fga: 14, ftm: 0, fta: 0, composite: 6.32, zScores: { pts: 1.192, reb: -0.248, ast: 2.237, stl: 1.484, blk: -0.613, tpm: 3.254, fgImpact: 0.951, ftImpact: 0, to: -1.937 } },
          { name: "Trey Lyles", min: 15, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.88, zScores: { pts: -0.877, reb: -1.143, ast: -0.855, stl: -0.859, blk: -0.613, tpm: -0.823, fgImpact: 0.356, ftImpact: 0, to: 0.933 } },
          { name: "Cody Williams", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.86, zScores: { pts: -1.084, reb: -0.845, ast: -0.855, stl: -0.859, blk: -0.613, tpm: -0.823, fgImpact: 0, ftImpact: 0, to: 0.215 } },
          { name: "Isaiah Evans", min: 8, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.22, zScores: { pts: -0.877, reb: -0.845, ast: -0.855, stl: -0.859, blk: -0.613, tpm: -0.823, fgImpact: -0.277, ftImpact: 0, to: 0.933 } },
          { name: "Joan Beringer", min: 22, pts: 13, reb: 9, ast: 0, stl: 0, blk: 3, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 5, fta: 8, composite: 1.35, zScores: { pts: 0.261, reb: 1.54, ast: -0.855, stl: -0.859, blk: 2.987, tpm: -0.823, fgImpact: 1.109, ftImpact: -2.226, to: 0.215 } },
          { name: "Jaylen Clark", min: 19, pts: 7, reb: 6, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.32, zScores: { pts: -0.36, reb: 0.646, ast: -0.168, stl: 0.312, blk: -0.613, tpm: -0.143, fgImpact: 0.436, ftImpact: 0, to: 0.215 } },
          { name: "Terrence Shannon Jr.", min: 21, pts: 6, reb: 2, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -1.91, zScores: { pts: -0.463, reb: -0.547, ast: 0.519, stl: 0.312, blk: -0.613, tpm: -0.823, fgImpact: -0.514, ftImpact: 0, to: 0.215 } },
          { name: "Bones Hyland", min: 23, pts: 24, reb: 3, ast: 8, stl: 2, blk: 0, to: 1, tpm: 5, fgm: 7, fga: 10, ftm: 5, fta: 6, composite: 8.47, zScores: { pts: 1.399, reb: -0.248, ast: 1.893, stl: 1.484, blk: -0.613, tpm: 2.574, fgImpact: 1.545, ftImpact: 0.223, to: 0.215 } }
        ]
      }
    },
      {
      id: "401909979",
      line: "Charlotte Hornets 96 @ Phoenix Suns 101 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHA", name: "Charlotte Hornets", score: 96,
        players: [
          { name: "Moussa Diabate", min: 32, pts: 7, reb: 13, ast: 2, stl: 0, blk: 1, to: 4, tpm: 0, fgm: 3, fga: 7, ftm: 1, fta: 2, composite: -1.96, zScores: { pts: -0.36, reb: 2.733, ast: -0.168, stl: -0.859, blk: 0.587, tpm: -0.823, fgImpact: -0.198, ftImpact: -0.935, to: -1.937 } },
          { name: "Naz Reid", min: 34, pts: 16, reb: 8, ast: 3, stl: 2, blk: 1, to: 4, tpm: 1, fgm: 6, fga: 18, ftm: 3, fta: 5, composite: -1.26, zScores: { pts: 0.571, reb: 1.242, ast: 0.176, stl: 1.484, blk: 0.587, tpm: -0.143, fgImpact: -1.662, ftImpact: -1.581, to: -1.937 } },
          { name: "Grayson Allen", min: 34, pts: 14, reb: 4, ast: 6, stl: 1, blk: 0, to: 4, tpm: 4, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: 1.16, zScores: { pts: 0.364, reb: 0.05, ast: 1.206, stl: 0.312, blk: -0.613, tpm: 1.895, fgImpact: -0.118, ftImpact: 0, to: -1.937 } },
          { name: "Coby White", min: 20, pts: 21, reb: 3, ast: 3, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 8, fga: 16, ftm: 3, fta: 3, composite: -0.67, zScores: { pts: 1.089, reb: -0.248, ast: 0.176, stl: -0.859, blk: -0.613, tpm: 0.536, fgImpact: 0.318, ftImpact: 0.869, to: -1.937 } },
          { name: "Sion James", min: 32, pts: 3, reb: 8, ast: 6, stl: 1, blk: 0, to: 5, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: -3.95, zScores: { pts: -0.774, reb: 1.242, ast: 1.206, stl: 0.312, blk: -0.613, tpm: -0.823, fgImpact: -0.911, ftImpact: -0.935, to: -2.654 } },
          { name: "Royce O'Neale", min: 22, pts: 7, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 5, ftm: 1, fta: 1, composite: -2.55, zScores: { pts: -0.36, reb: 0.05, ast: -0.855, stl: -0.859, blk: -0.613, tpm: 0.536, fgImpact: -0.237, ftImpact: 0.29, to: -0.502 } },
          { name: "Grant Williams", min: 16, pts: 11, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 3, fta: 3, composite: 1.5, zScores: { pts: 0.054, reb: -0.547, ast: -0.512, stl: -0.859, blk: 0.587, tpm: 0.536, fgImpact: 0.436, ftImpact: 0.869, to: 0.933 } },
          { name: "Tidjane Salaun", min: 16, pts: 2, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.32, zScores: { pts: -0.877, reb: 0.05, ast: -0.855, stl: -0.859, blk: -0.613, tpm: -0.823, fgImpact: -0.277, ftImpact: 0, to: 0.933 } },
          { name: "Ryan Kalkbrenner", min: 16, pts: 2, reb: 6, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -0.64, zScores: { pts: -0.877, reb: 0.646, ast: -0.512, stl: -0.859, blk: 0.587, tpm: -0.823, fgImpact: -0.317, ftImpact: 0.579, to: 0.933 } },
          { name: "Christian Anderson", min: 18, pts: 13, reb: 0, ast: 2, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: -1.39, zScores: { pts: 0.261, reb: -1.143, ast: -0.168, stl: -0.859, blk: -0.613, tpm: 1.215, fgImpact: -0.158, ftImpact: 0.579, to: -0.502 } }
        ]
      },
      home: {
        abbr: "PHX", name: "Phoenix Suns", score: 101,
        players: [
          { name: "Dillon Brooks", min: 30, pts: 15, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 13, ftm: 0, fta: 0, composite: 1.48, zScores: { pts: 0.468, reb: -0.248, ast: -0.512, stl: 0.312, blk: -0.613, tpm: 1.215, fgImpact: -0.078, ftImpact: 0, to: 0.933 } },
          { name: "Miles Bridges", min: 25, pts: 11, reb: 6, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 9, ftm: 5, fta: 5, composite: 1.3, zScores: { pts: 0.054, reb: 0.646, ast: 0.176, stl: 0.312, blk: -0.613, tpm: -0.823, fgImpact: -0.831, ftImpact: 1.448, to: 0.933 } },
          { name: "Oso Ighodaro", min: 32, pts: 2, reb: 3, ast: 7, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 2, composite: -2.15, zScores: { pts: -0.877, reb: -0.248, ast: 1.55, stl: -0.859, blk: 0.587, tpm: -0.823, fgImpact: 0.04, ftImpact: -2.45, to: 0.933 } },
          { name: "Devin Booker", min: 35, pts: 30, reb: 1, ast: 7, stl: 3, blk: 1, to: 2, tpm: 4, fgm: 12, fga: 20, ftm: 2, fta: 2, composite: 9.68, zScores: { pts: 2.02, reb: -0.845, ast: 1.55, stl: 2.655, blk: 0.587, tpm: 1.895, fgImpact: 1.744, ftImpact: 0.579, to: -0.502 } },
          { name: "Jalen Green", min: 21, pts: 12, reb: 4, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 9, ftm: 5, fta: 6, composite: -2.2, zScores: { pts: 0.158, reb: 0.05, ast: -0.855, stl: 0.312, blk: -0.613, tpm: -0.143, fgImpact: -0.831, ftImpact: 0.223, to: -0.502 } },
          { name: "Ryan Dunn", min: 10, pts: 0, reb: 4, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.71, zScores: { pts: -1.084, reb: 0.05, ast: -0.855, stl: 0.312, blk: -0.613, tpm: -0.823, fgImpact: -0.634, ftImpact: 0, to: 0.933 } },
          { name: "Khaman Maluach", min: 16, pts: 4, reb: 2, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.33, zScores: { pts: -0.67, reb: -0.547, ast: -0.512, stl: -0.859, blk: 1.787, tpm: -0.823, fgImpact: 0.079, ftImpact: 0, to: 0.215 } },
          { name: "Luke Kennard", min: 21, pts: 8, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -3.13, zScores: { pts: -0.256, reb: -0.845, ast: -0.512, stl: -0.859, blk: -0.613, tpm: -0.823, fgImpact: -0.158, ftImpact: 0, to: 0.933 } },
          { name: "Jordan Goodwin", min: 24, pts: 6, reb: 5, ast: 2, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 11, ftm: 0, fta: 0, composite: -0.08, zScores: { pts: -0.463, reb: 0.348, ast: -0.168, stl: 1.484, blk: -0.613, tpm: 0.536, fgImpact: -2.138, ftImpact: 0, to: 0.933 } },
          { name: "Collin Gillespie", min: 27, pts: 13, reb: 2, ast: 1, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 13, ftm: 0, fta: 0, composite: 0.03, zScores: { pts: 0.261, reb: -0.547, ast: -0.512, stl: 1.484, blk: -0.613, tpm: 1.215, fgImpact: -0.752, ftImpact: 0, to: -0.502 } }
        ]
      }
    }
    ]
  },
    "2026-11-13": {
    games: [
      {
      id: "401909296",
      line: "New York Knicks 104 @ Indiana Pacers 106 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NY", name: "New York Knicks", score: 104,
        players: [
          { name: "OG Anunoby", min: 33, pts: 11, reb: 2, ast: 1, stl: 1, blk: 1, to: 3, tpm: 2, fgm: 4, fga: 13, ftm: 1, fta: 2, composite: -3.03, zScores: { pts: 0.031, reb: -0.665, ast: -0.596, stl: 0.343, blk: 0.685, tpm: 0.455, fgImpact: -1.177, ftImpact: -0.756, to: -1.348 } },
          { name: "Karl-Anthony Towns", min: 34, pts: 23, reb: 15, ast: 5, stl: 3, blk: 0, to: 1, tpm: 3, fgm: 9, fga: 19, ftm: 2, fta: 3, composite: 8.47, zScores: { pts: 1.325, reb: 3.241, ast: 0.933, stl: 2.59, blk: -0.65, tpm: 1.111, fgImpact: 0.247, ftImpact: -0.477, to: 0.152 } },
          { name: "Josh Hart", min: 23, pts: 0, reb: 5, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -2.88, zScores: { pts: -1.156, reb: 0.237, ast: 0.55, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -1.13, ftImpact: 0, to: 0.902 } },
          { name: "Mikal Bridges", min: 29, pts: 18, reb: 3, ast: 3, stl: 2, blk: 0, to: 3, tpm: 2, fgm: 8, fga: 12, ftm: 0, fta: 0, composite: 2.11, zScores: { pts: 0.786, reb: -0.364, ast: 0.168, stl: 1.467, blk: -0.65, tpm: 0.455, fgImpact: 1.601, ftImpact: 0, to: -1.348 } },
          { name: "Jalen Brunson", min: 36, pts: 33, reb: 1, ast: 11, stl: 2, blk: 0, to: 4, tpm: 4, fgm: 11, fga: 22, ftm: 7, fta: 8, composite: 6.72, zScores: { pts: 2.404, reb: -0.965, ast: 3.226, stl: 1.467, blk: -0.65, tpm: 1.767, fgImpact: 0.647, ftImpact: 0.919, to: -2.098 } },
          { name: "Pacome Dadiet", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.78, zScores: { pts: -1.156, reb: -1.266, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: 0, ftImpact: 0, to: 0.902 } },
          { name: "Andre Drummond", min: 14, pts: 0, reb: 6, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -1.56, zScores: { pts: -1.156, reb: 0.537, ast: -0.978, stl: 0.343, blk: 0.685, tpm: -0.856, fgImpact: -0.283, ftImpact: 0, to: 0.152 } },
          { name: "Jordan Clarkson", min: 9, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.05, zScores: { pts: -1.156, reb: -0.965, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -0.565, ftImpact: 0, to: 0.902 } },
          { name: "Landry Shamet", min: 21, pts: 5, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.38, zScores: { pts: -0.617, reb: -0.364, ast: -0.596, stl: 0.343, blk: -0.65, tpm: -0.2, fgImpact: -0.447, ftImpact: 0, to: 0.152 } },
          { name: "Miles McBride", min: 22, pts: 9, reb: 1, ast: 1, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 0.91, zScores: { pts: -0.185, reb: -0.965, ast: -0.596, stl: 0.343, blk: 0.685, tpm: 1.111, fgImpact: -0.389, ftImpact: 0, to: 0.902 } },
          { name: "Tyler Kolek", min: 19, pts: 5, reb: 6, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.9, zScores: { pts: -0.617, reb: 0.537, ast: -0.214, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: 0.118, ftImpact: 0, to: 0.902 } }
        ]
      },
      home: {
        abbr: "IND", name: "Indiana Pacers", score: 106,
        players: [
          { name: "Pascal Siakam", min: 32, pts: 19, reb: 3, ast: 2, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 13, ftm: 7, fta: 12, composite: -5.78, zScores: { pts: 0.894, reb: -0.364, ast: -0.214, stl: -0.78, blk: -0.65, tpm: 0.455, fgImpact: -0.553, ftImpact: -3.222, to: -1.348 } },
          { name: "Ivica Zubac", min: 26, pts: 12, reb: 13, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 6, fga: 12, ftm: 0, fta: 0, composite: 1.74, zScores: { pts: 0.139, reb: 2.64, ast: -0.596, stl: -0.78, blk: 0.685, tpm: -0.856, fgImpact: 0.353, ftImpact: 0, to: 0.152 } },
          { name: "Kelly Oubre Jr.", min: 30, pts: 16, reb: 5, ast: 0, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 5, fga: 13, ftm: 5, fta: 6, composite: 2.49, zScores: { pts: 0.57, reb: 0.237, ast: -0.978, stl: 1.467, blk: 0.685, tpm: -0.2, fgImpact: -0.553, ftImpact: 0.361, to: 0.902 } },
          { name: "Andrew Nembhard", min: 34, pts: 12, reb: 4, ast: 6, stl: 0, blk: 0, to: 6, tpm: 1, fgm: 4, fga: 14, ftm: 3, fta: 3, composite: -4.46, zScores: { pts: 0.139, reb: -0.064, ast: 1.315, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: -1.46, ftImpact: 0.838, to: -3.598 } },
          { name: "Aaron Nesmith", min: 33, pts: 18, reb: 7, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 10, ftm: 2, fta: 2, composite: 2.3, zScores: { pts: 0.786, reb: 0.837, ast: -0.596, stl: -0.78, blk: -0.65, tpm: 0.455, fgImpact: 1.542, ftImpact: 0.558, to: 0.152 } },
          { name: "Larry Nance Jr.", min: 14, pts: 2, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.4, zScores: { pts: -0.94, reb: -0.665, ast: -0.596, stl: 0.343, blk: -0.65, tpm: -0.856, fgImpact: 0.059, ftImpact: 0, to: 0.902 } },
          { name: "Obi Toppin", min: 16, pts: 9, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: -1.07, zScores: { pts: -0.185, reb: -0.364, ast: -0.596, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: 0.8, ftImpact: 0, to: 0.902 } },
          { name: "Jalen Slawson", min: 10, pts: 1, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -5.55, zScores: { pts: -1.048, reb: -0.064, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -0.565, ftImpact: -0.756, to: 0.152 } },
          { name: "Jay Huff", min: 8, pts: 8, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -0.52, zScores: { pts: -0.293, reb: -0.965, ast: -0.978, stl: -0.78, blk: 0.685, tpm: 0.455, fgImpact: 0.459, ftImpact: 0, to: 0.902 } },
          { name: "T.J. McConnell", min: 17, pts: 6, reb: 3, ast: 7, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -0.49, zScores: { pts: -0.509, reb: -0.364, ast: 1.697, stl: 1.467, blk: -0.65, tpm: -0.856, fgImpact: -0.671, ftImpact: 0, to: -0.598 } },
          { name: "Quenton Jackson", min: 20, pts: 3, reb: 5, ast: 4, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -0.91, zScores: { pts: -0.832, reb: 0.237, ast: 0.55, stl: 0.343, blk: -0.65, tpm: -0.2, fgImpact: -0.506, ftImpact: 0, to: 0.152 } }
        ]
      }
    },
      {
      id: "401909297",
      line: "Milwaukee Bucks 99 @ Orlando Magic 107 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIL", name: "Milwaukee Bucks", score: 99,
        players: [
          { name: "Kyle Kuzma", min: 31, pts: 14, reb: 4, ast: 2, stl: 2, blk: 1, to: 3, tpm: 1, fgm: 3, fga: 9, ftm: 7, fta: 15, composite: -6.32, zScores: { pts: 0.354, reb: -0.064, ast: -0.214, stl: 1.467, blk: 0.685, tpm: -0.2, fgImpact: -0.671, ftImpact: -6.328, to: -1.348 } },
          { name: "Ousmane Dieng", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.07, zScores: { pts: -1.156, reb: -1.266, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -0.283, ftImpact: 0, to: 0.902 } },
          { name: "Myles Turner", min: 31, pts: 14, reb: 11, ast: 3, stl: 2, blk: 0, to: 4, tpm: 4, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 3.62, zScores: { pts: 0.354, reb: 2.039, ast: 0.168, stl: 1.467, blk: -0.65, tpm: 1.767, fgImpact: 0.577, ftImpact: 0, to: -2.098 } },
          { name: "Tyler Herro", min: 34, pts: 18, reb: 1, ast: 2, stl: 2, blk: 1, to: 1, tpm: 2, fgm: 5, fga: 17, ftm: 6, fta: 7, composite: 1.32, zScores: { pts: 0.786, reb: -0.965, ast: -0.214, stl: 1.467, blk: 0.685, tpm: 0.455, fgImpact: -1.684, ftImpact: 0.64, to: 0.152 } },
          { name: "Brayden Burries", min: 19, pts: 3, reb: 4, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -1.96, zScores: { pts: -0.832, reb: -0.064, ast: 0.168, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: -0.506, ftImpact: 0, to: 0.902 } },
          { name: "Jaime Jaquez Jr.", min: 28, pts: 22, reb: 6, ast: 4, stl: 0, blk: 0, to: 2, tpm: 5, fgm: 8, fga: 15, ftm: 1, fta: 3, composite: 1.66, zScores: { pts: 1.218, reb: 0.537, ast: 0.55, stl: -0.78, blk: -0.65, tpm: 2.422, fgImpact: 0.753, ftImpact: -1.791, to: -0.598 } },
          { name: "Nate Ament", min: 22, pts: 9, reb: 3, ast: 1, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 1, fta: 1, composite: 0.92, zScores: { pts: -0.185, reb: -0.364, ast: -0.596, stl: 1.467, blk: -0.65, tpm: 0.455, fgImpact: -0.389, ftImpact: 0.279, to: 0.902 } },
          { name: "Kel'el Ware", min: 17, pts: 10, reb: 6, ast: 1, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 2.3, zScores: { pts: -0.077, reb: 0.537, ast: -0.596, stl: 0.343, blk: 0.685, tpm: 0.455, fgImpact: 0.8, ftImpact: 0, to: 0.152 } },
          { name: "Gary Trent Jr.", min: 16, pts: 1, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 1, fta: 3, composite: -7.22, zScores: { pts: -1.048, reb: -1.266, ast: -0.978, stl: 0.343, blk: -0.65, tpm: -0.856, fgImpact: -1.13, ftImpact: -1.791, to: 0.152 } },
          { name: "AJ Green", min: 8, pts: 0, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.3, zScores: { pts: -1.156, reb: -1.266, ast: -0.214, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -0.283, ftImpact: 0, to: 0.902 } },
          { name: "Ryan Rollins", min: 29, pts: 8, reb: 10, ast: 2, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: -1.11, zScores: { pts: -0.293, reb: 1.739, ast: -0.214, stl: 0.343, blk: -0.65, tpm: -0.856, fgImpact: -0.389, ftImpact: 0.558, to: -1.348 } }
        ]
      },
      home: {
        abbr: "ORL", name: "Orlando Magic", score: 107,
        players: [
          { name: "Franz Wagner", min: 36, pts: 35, reb: 9, ast: 12, stl: 1, blk: 1, to: 3, tpm: 3, fgm: 13, fga: 22, ftm: 6, fta: 6, composite: 12.03, zScores: { pts: 2.62, reb: 1.438, ast: 3.608, stl: 0.343, blk: 0.685, tpm: 1.111, fgImpact: 1.895, ftImpact: 1.675, to: -1.348 } },
          { name: "Tristan da Silva", min: 31, pts: 12, reb: 6, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 11, ftm: 2, fta: 2, composite: -0.42, zScores: { pts: 0.139, reb: 0.537, ast: -0.214, stl: -0.78, blk: -0.65, tpm: 0.455, fgImpact: -0.612, ftImpact: 0.558, to: 0.152 } },
          { name: "Wendell Carter Jr.", min: 30, pts: 12, reb: 8, ast: 0, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 5, fga: 9, ftm: 1, fta: 1, composite: 1.38, zScores: { pts: 0.139, reb: 1.138, ast: -0.978, stl: 0.343, blk: 0.685, tpm: -0.2, fgImpact: 0.577, ftImpact: 0.279, to: -0.598 } },
          { name: "Desmond Bane", min: 35, pts: 21, reb: 5, ast: 3, stl: 2, blk: 0, to: 0, tpm: 6, fgm: 7, fga: 13, ftm: 1, fta: 1, composite: 7.28, zScores: { pts: 1.11, reb: 0.237, ast: 0.168, stl: 1.467, blk: -0.65, tpm: 3.078, fgImpact: 0.694, ftImpact: 0.279, to: 0.902 } },
          { name: "Anthony Black", min: 37, pts: 5, reb: 2, ast: 5, stl: 1, blk: 2, to: 5, tpm: 1, fgm: 1, fga: 9, ftm: 2, fta: 2, composite: -2.39, zScores: { pts: -0.617, reb: -0.665, ast: 0.933, stl: 0.343, blk: 2.02, tpm: -0.2, fgImpact: -1.919, ftImpact: 0.558, to: -2.848 } },
          { name: "Jamal Cain", min: 4, pts: 0, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.48, zScores: { pts: -1.156, reb: -0.064, ast: -0.596, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -0.283, ftImpact: 0, to: 0.902 } },
          { name: "Nikola Vucevic", min: 11, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.17, zScores: { pts: -0.94, reb: -0.364, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -0.506, ftImpact: 0, to: 0.902 } },
          { name: "Goga Bitadze", min: 18, pts: 12, reb: 4, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 5, ftm: 2, fta: 2, composite: 2.07, zScores: { pts: 0.139, reb: -0.064, ast: -0.596, stl: 0.343, blk: 0.685, tpm: -0.856, fgImpact: 1.707, ftImpact: 0.558, to: 0.152 } },
          { name: "Jevon Carter", min: 17, pts: 5, reb: 2, ast: 2, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.07, zScores: { pts: -0.617, reb: -0.665, ast: -0.214, stl: 0.343, blk: 0.685, tpm: -0.2, fgImpact: -0.165, ftImpact: 0, to: 0.902 } },
          { name: "Jalen Suggs", min: 21, pts: 3, reb: 2, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 8, ftm: 0, fta: 0, composite: -4.44, zScores: { pts: -0.832, reb: -0.665, ast: 0.168, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: -1.636, ftImpact: 0, to: 0.152 } }
        ]
      }
    },
      {
      id: "401909298",
      line: "Cleveland Cavaliers 121 @ Miami Heat 133 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CLE", name: "Cleveland Cavaliers", score: 121,
        players: [
          { name: "Jarrett Allen", min: 32, pts: 9, reb: 8, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 3, fta: 4, composite: 1.22, zScores: { pts: -0.185, reb: 1.138, ast: -0.596, stl: 0.343, blk: 0.685, tpm: -0.856, fgImpact: 0.742, ftImpact: -0.198, to: 0.152 } },
          { name: "James Harden", min: 35, pts: 20, reb: 6, ast: 8, stl: 3, blk: 1, to: 2, tpm: 2, fgm: 5, fga: 13, ftm: 8, fta: 8, composite: 8.43, zScores: { pts: 1.002, reb: 0.537, ast: 2.079, stl: 2.59, blk: 0.685, tpm: 0.455, fgImpact: -0.553, ftImpact: 2.233, to: -0.598 } },
          { name: "Donovan Mitchell", min: 33, pts: 25, reb: 4, ast: 7, stl: 0, blk: 0, to: 3, tpm: 5, fgm: 9, fga: 21, ftm: 2, fta: 4, composite: 0.99, zScores: { pts: 1.541, reb: -0.064, ast: 1.697, stl: -0.78, blk: -0.65, tpm: 2.422, fgImpact: -0.318, ftImpact: -1.512, to: -1.348 } },
          { name: "Peyton Watson", min: 30, pts: 4, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 10, ftm: 0, fta: 0, composite: -5.46, zScores: { pts: -0.725, reb: -0.064, ast: -0.214, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -1.578, ftImpact: 0, to: -0.598 } },
          { name: "Jaylon Tyson", min: 30, pts: 16, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 2.61, zScores: { pts: 0.57, reb: -0.364, ast: -0.596, stl: 0.343, blk: -0.65, tpm: 1.767, fgImpact: 0.635, ftImpact: 0, to: 0.902 } },
          { name: "Mario Hezonja", min: 9, pts: 4, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -3.22, zScores: { pts: -0.725, reb: -0.064, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: 0.683, ftImpact: 0, to: 0.152 } },
          { name: "Thomas Bryant", min: 16, pts: 9, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 8, ftm: 3, fta: 5, composite: -3.63, zScores: { pts: -0.185, reb: -0.965, ast: -0.596, stl: 0.343, blk: -0.65, tpm: -0.856, fgImpact: -0.389, ftImpact: -1.233, to: 0.902 } },
          { name: "Craig Porter Jr.", min: 9, pts: 0, reb: 2, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.08, zScores: { pts: -1.156, reb: -0.665, ast: -0.214, stl: -0.78, blk: 0.685, tpm: -0.856, fgImpact: 0, ftImpact: 0, to: 0.902 } },
          { name: "Tyrese Proctor", min: 27, pts: 22, reb: 4, ast: 3, stl: 1, blk: 0, to: 0, tpm: 5, fgm: 7, fga: 9, ftm: 3, fta: 4, composite: 5.97, zScores: { pts: 1.218, reb: -0.064, ast: 0.168, stl: 0.343, blk: -0.65, tpm: 2.422, fgImpact: 1.824, ftImpact: -0.198, to: 0.902 } },
          { name: "Meleek Thomas", min: 18, pts: 12, reb: 0, ast: 3, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 0.95, zScores: { pts: 0.139, reb: -1.266, ast: 0.168, stl: 0.343, blk: -0.65, tpm: 0.455, fgImpact: 0.859, ftImpact: 0, to: 0.902 } }
        ]
      },
      home: {
        abbr: "MIA", name: "Miami Heat", score: 133,
        players: [
          { name: "Giannis Antetokounmpo", min: 31, pts: 37, reb: 9, ast: 2, stl: 0, blk: 1, to: 4, tpm: 1, fgm: 15, fga: 20, ftm: 6, fta: 11, composite: 1.87, zScores: { pts: 2.836, reb: 1.438, ast: -0.214, stl: -0.78, blk: 0.685, tpm: -0.2, fgImpact: 3.708, ftImpact: -3.501, to: -2.098 } },
          { name: "Myron Gardner", min: 19, pts: 0, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.67, zScores: { pts: -1.156, reb: -0.064, ast: -0.214, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -0.848, ftImpact: 0, to: 0.902 } },
          { name: "Bam Adebayo", min: 38, pts: 37, reb: 14, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 13, fga: 19, ftm: 9, fta: 10, composite: 10.09, zScores: { pts: 2.836, reb: 2.94, ast: 0.168, stl: -0.78, blk: -0.65, tpm: 0.455, fgImpact: 2.742, ftImpact: 1.477, to: 0.902 } },
          { name: "Tim Hardaway Jr.", min: 20, pts: 4, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: -2.08, zScores: { pts: -0.725, reb: -0.364, ast: -0.214, stl: 0.343, blk: -0.65, tpm: -0.856, fgImpact: -1.071, ftImpact: 0.558, to: 0.902 } },
          { name: "Davion Mitchell", min: 39, pts: 22, reb: 5, ast: 17, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 7, fga: 14, ftm: 5, fta: 6, composite: 8.91, zScores: { pts: 1.218, reb: 0.237, ast: 5.518, stl: -0.78, blk: 0.685, tpm: 1.111, fgImpact: 0.412, ftImpact: 0.361, to: 0.152 } },
          { name: "Andrew Wiggins", min: 32, pts: 8, reb: 3, ast: 4, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: -1.2, zScores: { pts: -0.293, reb: -0.364, ast: 0.55, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: -0.165, ftImpact: -0.198, to: 0.902 } },
          { name: "Bobby Portis", min: 15, pts: 5, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -3.12, zScores: { pts: -0.617, reb: -0.364, ast: -0.214, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: -0.447, ftImpact: 0, to: 0.152 } },
          { name: "Simone Fontecchio", min: 7, pts: 0, reb: 0, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.77, zScores: { pts: -1.156, reb: -1.266, ast: -0.214, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: 0, ftImpact: 0, to: 0.152 } },
          { name: "Dru Smith", min: 6, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.25, zScores: { pts: -1.156, reb: -1.266, ast: -0.596, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -0.848, ftImpact: 0, to: 0.902 } },
          { name: "Ryan Conwell", min: 33, pts: 20, reb: 5, ast: 2, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 6, fga: 12, ftm: 4, fta: 4, composite: 2.23, zScores: { pts: 1.002, reb: 0.237, ast: -0.214, stl: -0.78, blk: -0.65, tpm: 1.767, fgImpact: 0.353, ftImpact: 1.117, to: -0.598 } }
        ]
      }
    },
      {
      id: "401909299",
      line: "Atlanta Hawks 117 @ Chicago Bulls 125 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "ATL", name: "Atlanta Hawks", score: 117,
        players: [
          { name: "Onyeka Okongwu", min: 35, pts: 17, reb: 6, ast: 1, stl: 2, blk: 2, to: 2, tpm: 2, fgm: 7, fga: 13, ftm: 1, fta: 2, composite: 3.9, zScores: { pts: 0.678, reb: 0.537, ast: -0.596, stl: 1.467, blk: 2.02, tpm: 0.455, fgImpact: 0.694, ftImpact: -0.756, to: -0.598 } },
          { name: "Jalen Johnson", min: 40, pts: 27, reb: 11, ast: 10, stl: 1, blk: 0, to: 5, tpm: 0, fgm: 11, fga: 26, ftm: 5, fta: 6, composite: 2.51, zScores: { pts: 1.757, reb: 2.039, ast: 2.843, stl: 0.343, blk: -0.65, tpm: -0.856, fgImpact: -0.483, ftImpact: 0.361, to: -2.848 } },
          { name: "Nickeil Alexander-Walker", min: 41, pts: 16, reb: 6, ast: 3, stl: 3, blk: 1, to: 3, tpm: 1, fgm: 6, fga: 19, ftm: 3, fta: 4, composite: 1.18, zScores: { pts: 0.57, reb: 0.537, ast: 0.168, stl: 2.59, blk: 0.685, tpm: -0.2, fgImpact: -1.625, ftImpact: -0.198, to: -1.348 } },
          { name: "Dyson Daniels", min: 36, pts: 6, reb: 9, ast: 4, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 2.8, zScores: { pts: -0.509, reb: 1.438, ast: 0.55, stl: 1.467, blk: -0.65, tpm: -0.856, fgImpact: 0.459, ftImpact: 0, to: 0.902 } },
          { name: "Kingston Flemings", min: 17, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.13, zScores: { pts: -1.156, reb: -0.965, ast: -0.596, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -0.283, ftImpact: 0, to: 0.152 } },
          { name: "Jock Landale", min: 18, pts: 12, reb: 5, ast: 0, stl: 1, blk: 1, to: 4, tpm: 1, fgm: 3, fga: 7, ftm: 5, fta: 6, composite: -1.62, zScores: { pts: 0.139, reb: 0.237, ast: -0.978, stl: 0.343, blk: 0.685, tpm: -0.2, fgImpact: -0.106, ftImpact: 0.361, to: -2.098 } },
          { name: "CJ McCollum", min: 32, pts: 20, reb: 5, ast: 5, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 9, fga: 16, ftm: 0, fta: 0, composite: 4.53, zScores: { pts: 1.002, reb: 0.237, ast: 0.933, stl: -0.78, blk: 0.685, tpm: 0.455, fgImpact: 1.095, ftImpact: 0, to: 0.902 } },
          { name: "Luguentz Dort", min: 20, pts: 10, reb: 1, ast: 2, stl: 4, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 10, ftm: 1, fta: 2, composite: 0.67, zScores: { pts: -0.077, reb: -0.965, ast: -0.214, stl: 3.713, blk: -0.65, tpm: -0.2, fgImpact: -0.33, ftImpact: -0.756, to: 0.152 } },
          { name: "Aaron Wiggins", min: 26, pts: 9, reb: 4, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: -1.89, zScores: { pts: -0.185, reb: -0.064, ast: 0.168, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: -0.33, ftImpact: 0, to: 0.152 } }
        ]
      },
      home: {
        abbr: "CHI", name: "Chicago Bulls", score: 125,
        players: [
          { name: "Jalen Smith", min: 32, pts: 15, reb: 12, ast: 3, stl: 3, blk: 0, to: 4, tpm: 1, fgm: 6, fga: 15, ftm: 2, fta: 2, composite: 2.67, zScores: { pts: 0.462, reb: 2.34, ast: 0.168, stl: 2.59, blk: -0.65, tpm: -0.2, fgImpact: -0.495, ftImpact: 0.558, to: -2.098 } },
          { name: "Isaac Okoro", min: 41, pts: 15, reb: 3, ast: 2, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 5, fga: 10, ftm: 3, fta: 4, composite: 0.87, zScores: { pts: 0.462, reb: -0.364, ast: -0.214, stl: 0.343, blk: 0.685, tpm: 0.455, fgImpact: 0.294, ftImpact: -0.198, to: -0.598 } },
          { name: "Matas Buzelis", min: 29, pts: 11, reb: 6, ast: 2, stl: 1, blk: 3, to: 2, tpm: 3, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: 4.74, zScores: { pts: 0.031, reb: 0.537, ast: -0.214, stl: 0.343, blk: 3.356, tpm: 1.111, fgImpact: -0.389, ftImpact: 0.558, to: -0.598 } },
          { name: "Norman Powell", min: 31, pts: 33, reb: 5, ast: 2, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 12, fga: 19, ftm: 5, fta: 6, composite: 5.02, zScores: { pts: 2.404, reb: 0.237, ast: -0.214, stl: 0.343, blk: -0.65, tpm: 1.767, fgImpact: 2.119, ftImpact: 0.361, to: -1.348 } },
          { name: "Josh Giddey", min: 39, pts: 15, reb: 10, ast: 14, stl: 0, blk: 3, to: 4, tpm: 3, fgm: 5, fga: 10, ftm: 2, fta: 5, composite: 5.91, zScores: { pts: 0.462, reb: 1.739, ast: 4.372, stl: -0.78, blk: 3.356, tpm: 1.111, fgImpact: 0.294, ftImpact: -2.548, to: -2.098 } },
          { name: "Patrick Williams", min: 24, pts: 13, reb: 4, ast: 2, stl: 2, blk: 0, to: 2, tpm: 4, fgm: 4, fga: 7, ftm: 1, fta: 2, composite: 1.71, zScores: { pts: 0.247, reb: -0.064, ast: -0.214, stl: 1.467, blk: -0.65, tpm: 1.767, fgImpact: 0.518, ftImpact: -0.756, to: -0.598 } },
          { name: "Noa Essengue", min: 8, pts: 5, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.22, zScores: { pts: -0.617, reb: -0.965, ast: -0.596, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: 0.683, ftImpact: 0, to: 0.902 } },
          { name: "Nic Claxton", min: 22, pts: 2, reb: 6, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.64, zScores: { pts: -0.94, reb: 0.537, ast: -0.214, stl: -0.78, blk: 0.685, tpm: -0.856, fgImpact: -0.224, ftImpact: 0, to: 0.152 } },
          { name: "Buddy Hield", min: 25, pts: 12, reb: 3, ast: 3, stl: 2, blk: 1, to: 3, tpm: 2, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 1.5, zScores: { pts: 0.139, reb: -0.364, ast: 0.168, stl: 1.467, blk: 0.685, tpm: 0.455, fgImpact: 0.294, ftImpact: 0, to: -1.348 } },
          { name: "Tre Jones", min: 15, pts: 4, reb: 1, ast: 3, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -3.43, zScores: { pts: -0.725, reb: -0.965, ast: 0.168, stl: 0.343, blk: 0.685, tpm: -0.856, fgImpact: -0.73, ftImpact: 0, to: -1.348 } }
        ]
      }
    },
      {
      id: "401909300",
      line: "Memphis Grizzlies 142 @ New Orleans Pelicans 111 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MEM", name: "Memphis Grizzlies", score: 142,
        players: [
          { name: "Cedric Coward", min: 30, pts: 14, reb: 7, ast: 6, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 12, ftm: 4, fta: 4, composite: 3.09, zScores: { pts: 0.354, reb: 0.837, ast: 1.315, stl: 0.343, blk: -0.65, tpm: -0.856, fgImpact: -0.271, ftImpact: 1.117, to: 0.902 } },
          { name: "Cameron Boozer", min: 25, pts: 12, reb: 10, ast: 3, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 4, fga: 9, ftm: 3, fta: 4, composite: 3.15, zScores: { pts: 0.139, reb: 1.739, ast: 0.168, stl: 1.467, blk: 0.685, tpm: -0.2, fgImpact: -0.047, ftImpact: -0.198, to: -0.598 } },
          { name: "Jaylen Wells", min: 27, pts: 11, reb: 2, ast: 1, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 9, ftm: 3, fta: 3, composite: 1.48, zScores: { pts: 0.031, reb: -0.665, ast: -0.596, stl: 2.59, blk: -0.65, tpm: 0.455, fgImpact: -0.671, ftImpact: 0.838, to: 0.152 } },
          { name: "Isaiah Stewart", min: 20, pts: 12, reb: 5, ast: 0, stl: 0, blk: 4, to: 1, tpm: 0, fgm: 5, fga: 7, ftm: 2, fta: 2, composite: 4.3, zScores: { pts: 0.139, reb: 0.237, ast: -0.978, stl: -0.78, blk: 4.691, tpm: -0.856, fgImpact: 1.142, ftImpact: 0.558, to: 0.152 } },
          { name: "Ty Jerome", min: 29, pts: 17, reb: 2, ast: 9, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 6, fga: 18, ftm: 3, fta: 3, composite: 0.77, zScores: { pts: 0.678, reb: -0.665, ast: 2.461, stl: 0.343, blk: -0.65, tpm: 0.455, fgImpact: -1.342, ftImpact: 0.838, to: -1.348 } },
          { name: "Jerami Grant", min: 26, pts: 22, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 7, fga: 10, ftm: 5, fta: 5, composite: 2.43, zScores: { pts: 1.218, reb: -0.965, ast: -0.596, stl: -0.78, blk: -0.65, tpm: 1.111, fgImpact: 1.542, ftImpact: 1.396, to: 0.152 } },
          { name: "Kris Murray", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.48, zScores: { pts: -1.156, reb: -0.965, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: 0, ftImpact: 0, to: 0.902 } },
          { name: "Olivier-Maxence Prosper", min: 2, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 4, fta: 6, composite: -4.45, zScores: { pts: -0.509, reb: -0.965, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: 0.341, ftImpact: -0.954, to: 0.902 } },
          { name: "Taylor Hendricks", min: 19, pts: 10, reb: 12, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 2, fta: 3, composite: 2.33, zScores: { pts: -0.077, reb: 2.34, ast: -0.214, stl: 0.343, blk: -0.65, tpm: 0.455, fgImpact: 0.459, ftImpact: -0.477, to: 0.152 } },
          { name: "GG Jackson", min: 22, pts: 14, reb: 6, ast: 4, stl: 2, blk: 1, to: 1, tpm: 3, fgm: 4, fga: 11, ftm: 3, fta: 4, composite: 4.05, zScores: { pts: 0.354, reb: 0.537, ast: 0.55, stl: 1.467, blk: 0.685, tpm: 1.111, fgImpact: -0.612, ftImpact: -0.198, to: 0.152 } },
          { name: "Cam Spencer", min: 24, pts: 14, reb: 2, ast: 5, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 5, ftm: 5, fta: 5, composite: 1.56, zScores: { pts: 0.354, reb: -0.665, ast: 0.933, stl: -0.78, blk: -0.65, tpm: 1.111, fgImpact: 0.459, ftImpact: 1.396, to: -0.598 } },
          { name: "Javon Small", min: 15, pts: 10, reb: 2, ast: 5, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: 1.42, zScores: { pts: -0.077, reb: -0.665, ast: 0.933, stl: -0.78, blk: -0.65, tpm: 0.455, fgImpact: 0.742, ftImpact: 0.558, to: 0.902 } }
        ]
      },
      home: {
        abbr: "NO", name: "New Orleans Pelicans", score: 111,
        players: [
          { name: "Herbert Jones", min: 32, pts: 8, reb: 2, ast: 3, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 11, ftm: 0, fta: 1, composite: -1.36, zScores: { pts: -0.293, reb: -0.665, ast: 0.168, stl: 0.343, blk: 0.685, tpm: -0.856, fgImpact: -0.612, ftImpact: -1.035, to: 0.902 } },
          { name: "Zion Williamson", min: 33, pts: 22, reb: 5, ast: 4, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 7, fga: 15, ftm: 8, fta: 8, composite: 6.19, zScores: { pts: 1.218, reb: 0.237, ast: 0.55, stl: 2.59, blk: 0.685, tpm: -0.856, fgImpact: 0.129, ftImpact: 2.233, to: -0.598 } },
          { name: "Saddiq Bey", min: 35, pts: 30, reb: 10, ast: 0, stl: 0, blk: 1, to: 0, tpm: 6, fgm: 11, fga: 20, ftm: 2, fta: 3, composite: 7.46, zScores: { pts: 2.081, reb: 1.739, ast: -0.978, stl: -0.78, blk: 0.685, tpm: 3.078, fgImpact: 1.212, ftImpact: -0.477, to: 0.902 } },
          { name: "DeAndre Jordan", min: 17, pts: 6, reb: 8, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: -0.77, zScores: { pts: -0.509, reb: 1.138, ast: -0.596, stl: 0.343, blk: -0.65, tpm: -0.856, fgImpact: 0.4, ftImpact: 0.558, to: -0.598 } },
          { name: "Jeremiah Fears", min: 34, pts: 18, reb: 5, ast: 7, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 6, fga: 15, ftm: 6, fta: 6, composite: 4.81, zScores: { pts: 0.786, reb: 0.237, ast: 1.697, stl: 0.343, blk: 2.02, tpm: -0.856, fgImpact: -0.495, ftImpact: 1.675, to: -0.598 } },
          { name: "Julian Reese", min: 4, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.18, zScores: { pts: -1.156, reb: -0.665, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: 0, ftImpact: 0, to: 0.902 } },
          { name: "Malik Dia", min: 4, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.41, zScores: { pts: -0.94, reb: -1.266, ast: -0.596, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -0.224, ftImpact: 0, to: 0.902 } },
          { name: "Karlo Matkovic", min: 19, pts: 1, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -3.76, zScores: { pts: -1.048, reb: -0.364, ast: -0.978, stl: -0.78, blk: 0.685, tpm: -0.856, fgImpact: -0.565, ftImpact: -0.756, to: 0.902 } },
          { name: "Derik Queen", min: 23, pts: 10, reb: 6, ast: 2, stl: 1, blk: 2, to: 5, tpm: 0, fgm: 4, fga: 8, ftm: 2, fta: 3, composite: -1.34, zScores: { pts: -0.077, reb: 0.537, ast: -0.214, stl: 0.343, blk: 2.02, tpm: -0.856, fgImpact: 0.235, ftImpact: -0.477, to: -2.848 } },
          { name: "Jordan Poole", min: 21, pts: 13, reb: 2, ast: 5, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 7, ftm: 10, fta: 10, composite: 1.22, zScores: { pts: 0.247, reb: -0.665, ast: 0.933, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: -1.354, ftImpact: 2.792, to: 0.902 } },
          { name: "Bennedict Mathurin", min: 10, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.82, zScores: { pts: -1.156, reb: -1.266, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -0.283, ftImpact: 0, to: 0.152 } },
          { name: "Jaron Pierre Jr.", min: 4, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.44, zScores: { pts: -1.156, reb: -1.266, ast: -0.978, stl: 0.343, blk: -0.65, tpm: -0.856, fgImpact: -0.283, ftImpact: 0, to: -0.598 } },
          { name: "AJ Johnson", min: 4, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -6.18, zScores: { pts: -1.048, reb: -1.266, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: 0, ftImpact: -0.756, to: 0.152 } }
        ]
      }
    },
      {
      id: "401909301",
      line: "Utah Jazz 118 @ Houston Rockets 125 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UTAH", name: "Utah Jazz", score: 118,
        players: [
          { name: "Jaxson Hayes", min: 13, pts: 12, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 6, ftm: 2, fta: 2, composite: 0.38, zScores: { pts: 0.139, reb: 0.237, ast: -0.596, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: 1.424, ftImpact: 0.558, to: 0.902 } },
          { name: "Josh Okogie", min: 22, pts: 7, reb: 2, ast: 1, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: -0.76, zScores: { pts: -0.401, reb: -0.665, ast: -0.596, stl: 0.343, blk: 0.685, tpm: 0.455, fgImpact: -0.73, ftImpact: -0.756, to: 0.902 } },
          { name: "Keyonte George", min: 38, pts: 27, reb: 4, ast: 7, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 8, fga: 18, ftm: 7, fta: 8, composite: 4.33, zScores: { pts: 1.757, reb: -0.064, ast: 1.697, stl: 0.343, blk: -0.65, tpm: 1.767, fgImpact: -0.094, ftImpact: 0.919, to: -1.348 } },
          { name: "Ace Bailey", min: 35, pts: 21, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 7, fga: 13, ftm: 4, fta: 4, composite: 2.54, zScores: { pts: 1.11, reb: -0.364, ast: -0.596, stl: -0.78, blk: -0.65, tpm: 1.111, fgImpact: 0.694, ftImpact: 1.117, to: 0.902 } },
          { name: "Darryn Peterson", min: 34, pts: 28, reb: 7, ast: 2, stl: 2, blk: 1, to: 2, tpm: 4, fgm: 9, fga: 20, ftm: 6, fta: 7, composite: 6.41, zScores: { pts: 1.865, reb: 0.837, ast: -0.214, stl: 1.467, blk: 0.685, tpm: 1.767, fgImpact: -0.036, ftImpact: 0.64, to: -0.598 } },
          { name: "Kyle Filipowski", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 1, composite: -5.26, zScores: { pts: -0.94, reb: -1.266, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: 0.341, ftImpact: -1.035, to: 0.902 } },
          { name: "Brice Sensabaugh", min: 27, pts: 7, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -4.54, zScores: { pts: -0.401, reb: -0.364, ast: -0.596, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: -0.954, ftImpact: 0, to: -0.598 } },
          { name: "Tony Bradley", min: 12, pts: 0, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.18, zScores: { pts: -1.156, reb: 0.237, ast: -0.596, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -0.283, ftImpact: 0, to: 0.902 } },
          { name: "Mo Bamba", min: 20, pts: 9, reb: 9, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 1, fta: 2, composite: 1.52, zScores: { pts: -0.185, reb: 1.438, ast: -0.596, stl: -0.78, blk: 2.02, tpm: -0.856, fgImpact: 1.083, ftImpact: -0.756, to: 0.152 } },
          { name: "Svi Mykhailiuk", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.48, zScores: { pts: -1.156, reb: -0.965, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: 0, ftImpact: 0, to: 0.902 } },
          { name: "Josh Green", min: 14, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -5.08, zScores: { pts: -0.94, reb: -1.266, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -0.506, ftImpact: 0, to: 0.902 } },
          { name: "Isaiah Collier", min: 16, pts: 3, reb: 2, ast: 5, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.3, zScores: { pts: -0.832, reb: -0.665, ast: 0.933, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: -0.506, ftImpact: 0, to: -0.598 } }
        ]
      },
      home: {
        abbr: "HOU", name: "Houston Rockets", score: 125,
        players: [
          { name: "Kevin Durant", min: 33, pts: 22, reb: 3, ast: 6, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 14, ftm: 10, fta: 10, composite: 2.55, zScores: { pts: 1.218, reb: -0.364, ast: 1.315, stl: -0.78, blk: -0.65, tpm: 0.455, fgImpact: -0.836, ftImpact: 2.792, to: -0.598 } },
          { name: "Jabari Smith Jr.", min: 24, pts: 6, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 9, ftm: 1, fta: 2, composite: -3.3, zScores: { pts: -0.509, reb: -0.364, ast: -0.978, stl: -0.78, blk: 0.685, tpm: -0.2, fgImpact: -1.295, ftImpact: -0.756, to: 0.902 } },
          { name: "Alperen Sengun", min: 37, pts: 43, reb: 12, ast: 5, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 17, fga: 24, ftm: 8, fta: 12, composite: 9.65, zScores: { pts: 3.483, reb: 2.34, ast: 0.933, stl: 0.343, blk: 0.685, tpm: -0.2, fgImpact: 3.825, ftImpact: -1.908, to: 0.152 } },
          { name: "Fred VanVleet", min: 34, pts: 17, reb: 2, ast: 3, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 6, fga: 11, ftm: 2, fta: 3, composite: 2.26, zScores: { pts: 0.678, reb: -0.665, ast: 0.168, stl: -0.78, blk: 0.685, tpm: 1.111, fgImpact: 0.635, ftImpact: -0.477, to: 0.902 } },
          { name: "Amen Thompson", min: 41, pts: 12, reb: 10, ast: 3, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 8, ftm: 4, fta: 5, composite: 0.81, zScores: { pts: 0.139, reb: 1.739, ast: 0.168, stl: -0.78, blk: 0.685, tpm: -0.856, fgImpact: 0.235, ftImpact: 0.081, to: -0.598 } },
          { name: "Tari Eason", min: 33, pts: 14, reb: 11, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 13, ftm: 0, fta: 0, composite: 1.43, zScores: { pts: 0.354, reb: 2.039, ast: -0.214, stl: -0.78, blk: -0.65, tpm: 0.455, fgImpact: 0.07, ftImpact: 0, to: 0.152 } },
          { name: "Oscar Tshiebwe", min: 6, pts: 0, reb: 5, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.98, zScores: { pts: -1.156, reb: 0.237, ast: -0.978, stl: -0.78, blk: 0.685, tpm: -0.856, fgImpact: -0.283, ftImpact: 0, to: 0.152 } },
          { name: "Bogdan Bogdanovic", min: 12, pts: 11, reb: 1, ast: 3, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: 1.7, zScores: { pts: 0.031, reb: -0.965, ast: 0.168, stl: -0.78, blk: 0.685, tpm: 1.111, fgImpact: 0.742, ftImpact: 0.558, to: 0.152 } },
          { name: "Reed Sheppard", min: 19, pts: 0, reb: 0, ast: 3, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 0, fga: 7, ftm: 0, fta: 0, composite: -1.82, zScores: { pts: -1.156, reb: -1.266, ast: 0.168, stl: 0.343, blk: 2.02, tpm: -0.856, fgImpact: -1.978, ftImpact: 0, to: 0.902 } }
        ]
      }
    },
      {
      id: "401909302",
      line: "Golden State Warriors 85 @ San Antonio Spurs 123 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "GS", name: "Golden State Warriors", score: 85,
        players: [
          { name: "Draymond Green", min: 16, pts: 4, reb: 3, ast: 3, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.85, zScores: { pts: -0.725, reb: -0.364, ast: 0.168, stl: 0.343, blk: -0.65, tpm: -0.856, fgImpact: -0.165, ftImpact: 0, to: -0.598 } },
          { name: "Yaxel Lendeborg", min: 24, pts: 3, reb: 7, ast: 1, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 13, ftm: 1, fta: 2, composite: -6.7, zScores: { pts: -0.832, reb: 0.837, ast: -0.596, stl: -0.78, blk: 0.685, tpm: -0.856, fgImpact: -3.049, ftImpact: -0.756, to: -1.348 } },
          { name: "De'Anthony Melton", min: 18, pts: 8, reb: 4, ast: 3, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 11, ftm: 0, fta: 0, composite: 0.96, zScores: { pts: -0.293, reb: -0.064, ast: 0.168, stl: 0.343, blk: 0.685, tpm: 0.455, fgImpact: -1.236, ftImpact: 0, to: 0.902 } },
          { name: "Brandin Podziemski", min: 22, pts: 8, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 10, ftm: 2, fta: 2, composite: -1.39, zScores: { pts: -0.293, reb: -0.364, ast: -0.978, stl: -0.78, blk: 0.685, tpm: 0.455, fgImpact: -1.578, ftImpact: 0.558, to: 0.902 } },
          { name: "Will Richard", min: 30, pts: 7, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -2.61, zScores: { pts: -0.401, reb: -0.064, ast: -0.596, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: 0.118, ftImpact: 0.558, to: -0.598 } },
          { name: "Georges Niang", min: 15, pts: 5, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.81, zScores: { pts: -0.617, reb: -0.364, ast: -0.214, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: 0.118, ftImpact: 0, to: 0.902 } },
          { name: "Graham Ike", min: 13, pts: 5, reb: 2, ast: 3, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -0.86, zScores: { pts: -0.617, reb: -0.665, ast: 0.168, stl: 0.343, blk: 0.685, tpm: -0.2, fgImpact: -0.73, ftImpact: 0, to: 0.152 } },
          { name: "Malevy Leons", min: 14, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -2.67, zScores: { pts: -0.617, reb: -0.965, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: 0.059, ftImpact: 0.558, to: 0.902 } },
          { name: "Gui Santos", min: 21, pts: 7, reb: 4, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 1, composite: -2.63, zScores: { pts: -0.401, reb: -0.064, ast: -0.596, stl: -0.78, blk: 0.685, tpm: -0.2, fgImpact: -0.389, ftImpact: -1.035, to: 0.152 } },
          { name: "Al Horford", min: 10, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.156, reb: -0.364, ast: -0.596, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -0.565, ftImpact: 0, to: 0.902 } },
          { name: "Charles Bassey", min: 20, pts: 11, reb: 5, ast: 2, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 7, ftm: 1, fta: 2, composite: -3.2, zScores: { pts: 0.031, reb: 0.237, ast: -0.214, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: 1.142, ftImpact: -0.756, to: -1.348 } },
          { name: "Gary Payton II", min: 13, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.94, zScores: { pts: -0.94, reb: -0.665, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -0.224, ftImpact: 0, to: 0.152 } },
          { name: "LJ Cryer", min: 24, pts: 20, reb: 2, ast: 6, stl: 1, blk: 0, to: 0, tpm: 6, fgm: 7, fga: 17, ftm: 0, fta: 0, composite: 4.89, zScores: { pts: 1.002, reb: -0.665, ast: 1.315, stl: 0.343, blk: -0.65, tpm: 3.078, fgImpact: -0.436, ftImpact: 0, to: 0.902 } }
        ]
      },
      home: {
        abbr: "SA", name: "San Antonio Spurs", score: 123,
        players: [
          { name: "Victor Wembanyama", min: 21, pts: 12, reb: 12, ast: 6, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 5, fga: 11, ftm: 2, fta: 3, composite: 4.24, zScores: { pts: 0.139, reb: 2.34, ast: 1.315, stl: 0.343, blk: 2.02, tpm: -0.856, fgImpact: 0.012, ftImpact: -0.477, to: -0.598 } },
          { name: "De'Aaron Fox", min: 17, pts: 7, reb: 5, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 6, ftm: 5, fta: 5, composite: -2.2, zScores: { pts: -0.401, reb: 0.237, ast: -0.596, stl: 0.343, blk: -0.65, tpm: -0.856, fgImpact: -1.071, ftImpact: 1.396, to: -0.598 } },
          { name: "Devin Vassell", min: 23, pts: 7, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: -3.24, zScores: { pts: -0.401, reb: -0.665, ast: -0.214, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: 0.176, ftImpact: -0.756, to: 0.902 } },
          { name: "Stephon Castle", min: 25, pts: 32, reb: 5, ast: 6, stl: 0, blk: 1, to: 1, tpm: 5, fgm: 12, fga: 18, ftm: 3, fta: 3, composite: 9.57, zScores: { pts: 2.297, reb: 0.237, ast: 1.315, stl: -0.78, blk: 0.685, tpm: 2.422, fgImpact: 2.401, ftImpact: 0.838, to: 0.152 } },
          { name: "Dylan Harper", min: 25, pts: 9, reb: 3, ast: 4, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 0.63, zScores: { pts: -0.185, reb: -0.364, ast: 0.55, stl: 0.343, blk: -0.65, tpm: -0.2, fgImpact: 0.235, ftImpact: 0, to: 0.902 } },
          { name: "Harrison Barnes", min: 21, pts: 11, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -1.75, zScores: { pts: 0.031, reb: -0.965, ast: -0.596, stl: -0.78, blk: -0.65, tpm: 1.111, fgImpact: -0.047, ftImpact: 0, to: 0.152 } },
          { name: "Keldon Johnson", min: 25, pts: 18, reb: 4, ast: 4, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 11, ftm: 4, fta: 6, composite: 0.5, zScores: { pts: 0.786, reb: -0.064, ast: 0.55, stl: 0.343, blk: -0.65, tpm: 0.455, fgImpact: 0.635, ftImpact: -0.954, to: -0.598 } },
          { name: "Julian Champagnie", min: 23, pts: 7, reb: 8, ast: 3, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 0.37, zScores: { pts: -0.401, reb: 1.138, ast: 0.168, stl: -0.78, blk: 0.685, tpm: -0.2, fgImpact: -0.389, ftImpact: 0, to: 0.152 } },
          { name: "Carter Bryant", min: 19, pts: 8, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -1.9, zScores: { pts: -0.293, reb: -0.364, ast: -0.214, stl: -0.78, blk: -0.65, tpm: 0.455, fgImpact: -0.954, ftImpact: 0, to: 0.902 } },
          { name: "Luke Kornet", min: 16, pts: 6, reb: 7, ast: 2, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 2.36, zScores: { pts: -0.509, reb: 0.837, ast: -0.214, stl: -0.78, blk: 2.02, tpm: -0.856, fgImpact: 0.4, ftImpact: 0.558, to: 0.902 } },
          { name: "Tarris Reed Jr.", min: 11, pts: 2, reb: 4, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 2, composite: -2.75, zScores: { pts: -0.94, reb: -0.064, ast: -0.596, stl: 1.467, blk: -0.65, tpm: -0.856, fgImpact: 0.059, ftImpact: -2.071, to: 0.902 } },
          { name: "Jordan McLaughlin", min: 14, pts: 4, reb: 6, ast: 2, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 1.07, zScores: { pts: -0.725, reb: 0.537, ast: -0.214, stl: 0.343, blk: 0.685, tpm: -0.856, fgImpact: 0.4, ftImpact: 0, to: 0.902 } }
        ]
      }
    },
      {
      id: "401909303",
      line: "Portland Trail Blazers 120 @ Sacramento Kings 107 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "POR", name: "Portland Trail Blazers", score: 120,
        players: [
          { name: "Toumani Camara", min: 36, pts: 14, reb: 2, ast: 1, stl: 2, blk: 1, to: 2, tpm: 2, fgm: 5, fga: 7, ftm: 2, fta: 2, composite: 2.8, zScores: { pts: 0.354, reb: -0.665, ast: -0.596, stl: 1.467, blk: 0.685, tpm: 0.455, fgImpact: 1.142, ftImpact: 0.558, to: -0.598 } },
          { name: "Deni Avdija", min: 35, pts: 34, reb: 6, ast: 4, stl: 0, blk: 1, to: 3, tpm: 3, fgm: 11, fga: 13, ftm: 9, fta: 9, composite: 8.97, zScores: { pts: 2.512, reb: 0.537, ast: 0.55, stl: -0.78, blk: 0.685, tpm: 1.111, fgImpact: 3.19, ftImpact: 2.513, to: -1.348 } },
          { name: "Donovan Clingan", min: 27, pts: 13, reb: 11, ast: 2, stl: 2, blk: 2, to: 0, tpm: 1, fgm: 6, fga: 13, ftm: 0, fta: 0, composite: 6.33, zScores: { pts: 0.247, reb: 2.039, ast: -0.214, stl: 1.467, blk: 2.02, tpm: -0.2, fgImpact: 0.07, ftImpact: 0, to: 0.902 } },
          { name: "Damian Lillard", min: 33, pts: 29, reb: 2, ast: 6, stl: 0, blk: 0, to: 4, tpm: 6, fgm: 6, fga: 18, ftm: 11, fta: 11, composite: 3.9, zScores: { pts: 1.973, reb: -0.665, ast: 1.315, stl: -0.78, blk: -0.65, tpm: 3.078, fgImpact: -1.342, ftImpact: 3.071, to: -2.098 } },
          { name: "Sidy Cissoko", min: 26, pts: 3, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -3.01, zScores: { pts: -0.832, reb: -0.064, ast: -0.596, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: -0.789, ftImpact: 0, to: 0.902 } },
          { name: "Robert Williams III", min: 17, pts: 2, reb: 7, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.32, zScores: { pts: -0.94, reb: 0.837, ast: -0.596, stl: 0.343, blk: 0.685, tpm: -0.856, fgImpact: 0.059, ftImpact: 0, to: 0.152 } },
          { name: "Branden Carlson", min: 8, pts: 5, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -0.45, zScores: { pts: -0.617, reb: -0.364, ast: -0.978, stl: -0.78, blk: 0.685, tpm: -0.2, fgImpact: 0.341, ftImpact: 0.558, to: 0.902 } },
          { name: "Jrue Holiday", min: 27, pts: 6, reb: 5, ast: 5, stl: 1, blk: 0, to: 6, tpm: 0, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: -4.27, zScores: { pts: -0.509, reb: 0.237, ast: 0.933, stl: 0.343, blk: -0.65, tpm: -0.856, fgImpact: -0.73, ftImpact: 0.558, to: -3.598 } },
          { name: "Scoot Henderson", min: 23, pts: 11, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 10, ftm: 3, fta: 5, composite: -4.09, zScores: { pts: 0.031, reb: -1.266, ast: -0.596, stl: -0.78, blk: -0.65, tpm: 0.455, fgImpact: -0.954, ftImpact: -1.233, to: 0.902 } },
          { name: "Jayson Kent", min: 11, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.16, zScores: { pts: -0.832, reb: -0.965, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: 0.341, ftImpact: 0, to: 0.902 } }
        ]
      },
      home: {
        abbr: "SAC", name: "Sacramento Kings", score: 107,
        players: [
          { name: "Domantas Sabonis", min: 35, pts: 21, reb: 12, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 9, fga: 16, ftm: 2, fta: 2, composite: 4.56, zScores: { pts: 1.11, reb: 2.34, ast: 0.933, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: 1.095, ftImpact: 0.558, to: 0.152 } },
          { name: "De'Andre Hunter", min: 42, pts: 24, reb: 5, ast: 2, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 13, ftm: 8, fta: 9, composite: 4.77, zScores: { pts: 1.433, reb: 0.237, ast: -0.214, stl: 1.467, blk: -0.65, tpm: 0.455, fgImpact: 0.694, ftImpact: 1.198, to: 0.152 } },
          { name: "Keegan Murray", min: 40, pts: 16, reb: 7, ast: 4, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 7, fga: 14, ftm: 0, fta: 0, composite: 4.54, zScores: { pts: 0.57, reb: 0.837, ast: 0.55, stl: 1.467, blk: -0.65, tpm: 0.455, fgImpact: 0.412, ftImpact: 0, to: 0.902 } },
          { name: "Zach LaVine", min: 36, pts: 12, reb: 3, ast: 6, stl: 1, blk: 1, to: 1, tpm: 3, fgm: 4, fga: 9, ftm: 1, fta: 2, composite: 2.58, zScores: { pts: 0.139, reb: -0.364, ast: 1.315, stl: 0.343, blk: 0.685, tpm: 1.111, fgImpact: -0.047, ftImpact: -0.756, to: 0.152 } },
          { name: "Darius Acuff Jr.", min: 35, pts: 17, reb: 4, ast: 6, stl: 2, blk: 0, to: 4, tpm: 3, fgm: 6, fga: 19, ftm: 2, fta: 2, composite: 0.69, zScores: { pts: 0.678, reb: -0.064, ast: 1.315, stl: 1.467, blk: -0.65, tpm: 1.111, fgImpact: -1.625, ftImpact: 0.558, to: -2.098 } },
          { name: "Leaky Black", min: 12, pts: 0, reb: 0, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.64, zScores: { pts: -1.156, reb: -1.266, ast: -0.978, stl: 0.343, blk: 0.685, tpm: -0.856, fgImpact: -0.565, ftImpact: 0, to: 0.152 } },
          { name: "Dylan Cardwell", min: 13, pts: 6, reb: 3, ast: 3, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 4, composite: -2.9, zScores: { pts: -0.509, reb: -0.364, ast: 0.168, stl: -0.78, blk: 0.685, tpm: -0.856, fgImpact: 0.118, ftImpact: -1.512, to: 0.152 } },
          { name: "Malik Monk", min: 18, pts: 7, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: -1.67, zScores: { pts: -0.401, reb: -0.064, ast: 0.168, stl: 0.343, blk: -0.65, tpm: -0.856, fgImpact: -0.165, ftImpact: -0.198, to: 0.152 } },
          { name: "Daeqwon Plowden", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.07, zScores: { pts: -1.156, reb: -1.266, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -0.283, ftImpact: 0, to: 0.902 } },
          { name: "Emanuel Sharp", min: 7, pts: 4, reb: 0, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.24, zScores: { pts: -0.725, reb: -1.266, ast: -0.978, stl: 0.343, blk: 0.685, tpm: -0.856, fgImpact: 0.4, ftImpact: 0, to: 0.152 } }
        ]
      }
    },
      {
      id: "401909304",
      line: "Oklahoma City Thunder 112 @ LA Clippers 113 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OKC", name: "Oklahoma City Thunder", score: 112,
        players: [
          { name: "Isaiah Hartenstein", min: 30, pts: 21, reb: 16, ast: 6, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 9, fga: 10, ftm: 3, fta: 4, composite: 6.8, zScores: { pts: 1.11, reb: 3.541, ast: 1.315, stl: 0.343, blk: -0.65, tpm: -0.856, fgImpact: 2.79, ftImpact: -0.198, to: -0.598 } },
          { name: "Aday Mara", min: 21, pts: 10, reb: 3, ast: 0, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 1.13, zScores: { pts: -0.077, reb: -0.364, ast: -0.978, stl: -0.78, blk: 3.356, tpm: -0.856, fgImpact: 1.424, ftImpact: 0, to: -0.598 } },
          { name: "Kenrich Williams", min: 35, pts: 8, reb: 8, ast: 4, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 11, ftm: 0, fta: 0, composite: 2.77, zScores: { pts: -0.293, reb: 1.138, ast: 0.55, stl: 2.59, blk: -0.65, tpm: -0.856, fgImpact: -0.612, ftImpact: 0, to: 0.902 } },
          { name: "Shai Gilgeous-Alexander", min: 39, pts: 40, reb: 4, ast: 5, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 15, fga: 26, ftm: 8, fta: 11, composite: 3.97, zScores: { pts: 3.16, reb: -0.064, ast: 0.933, stl: 0.343, blk: -0.65, tpm: 0.455, fgImpact: 2.013, ftImpact: -0.872, to: -1.348 } },
          { name: "Jared McCain", min: 31, pts: 23, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 7, fgm: 8, fga: 17, ftm: 0, fta: 0, composite: 2.94, zScores: { pts: 1.325, reb: -0.064, ast: -0.214, stl: -0.78, blk: -0.65, tpm: 3.733, fgImpact: 0.188, ftImpact: 0, to: -0.598 } },
          { name: "Alex Caruso", min: 27, pts: 5, reb: 1, ast: 4, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 9, ftm: 2, fta: 2, composite: -1.41, zScores: { pts: -0.617, reb: -0.965, ast: 0.55, stl: 0.343, blk: 0.685, tpm: -0.2, fgImpact: -1.919, ftImpact: 0.558, to: 0.152 } },
          { name: "Nique Clifford", min: 12, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 2, composite: -7.14, zScores: { pts: -1.156, reb: -1.266, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -0.283, ftImpact: -2.071, to: 0.902 } },
          { name: "Josh Dix", min: 17, pts: 0, reb: 4, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 6, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.156, reb: -0.064, ast: 0.168, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -1.695, ftImpact: 0, to: 0.902 } },
          { name: "Nikola Topic", min: 16, pts: 0, reb: 4, ast: 3, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -2.82, zScores: { pts: -1.156, reb: -0.064, ast: 0.168, stl: 1.467, blk: -0.65, tpm: -0.856, fgImpact: -1.13, ftImpact: 0, to: -0.598 } },
          { name: "Bennett Stirtz", min: 12, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.17, zScores: { pts: -0.617, reb: -0.965, ast: -0.978, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: 0.118, ftImpact: 0, to: 0.902 } }
        ]
      },
      home: {
        abbr: "LAC", name: "LA Clippers", score: 113,
        players: [
          { name: "Derrick Jones Jr.", min: 29, pts: 14, reb: 5, ast: 0, stl: 1, blk: 4, to: 1, tpm: 4, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 6.86, zScores: { pts: 0.354, reb: 0.237, ast: -0.978, stl: 0.343, blk: 4.691, tpm: 1.767, fgImpact: 0.294, ftImpact: 0, to: 0.152 } },
          { name: "Rui Hachimura", min: 32, pts: 7, reb: 11, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 9, ftm: 2, fta: 2, composite: -0.04, zScores: { pts: -0.401, reb: 2.039, ast: 0.168, stl: 0.343, blk: -0.65, tpm: -0.2, fgImpact: -1.295, ftImpact: 0.558, to: -0.598 } },
          { name: "Brook Lopez", min: 31, pts: 26, reb: 7, ast: 4, stl: 1, blk: 1, to: 1, tpm: 3, fgm: 11, fga: 21, ftm: 1, fta: 2, composite: 5.5, zScores: { pts: 1.649, reb: 0.837, ast: 0.55, stl: 0.343, blk: 0.685, tpm: 1.111, fgImpact: 0.93, ftImpact: -0.756, to: 0.152 } },
          { name: "Kris Dunn", min: 20, pts: 2, reb: 3, ast: 6, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -1.88, zScores: { pts: -0.94, reb: -0.364, ast: 1.315, stl: -0.78, blk: -0.65, tpm: -0.856, fgImpact: -0.506, ftImpact: 0, to: 0.902 } },
          { name: "Darius Garland", min: 37, pts: 24, reb: 4, ast: 7, stl: 0, blk: 1, to: 3, tpm: 3, fgm: 8, fga: 17, ftm: 5, fta: 5, composite: 4.32, zScores: { pts: 1.433, reb: -0.064, ast: 1.697, stl: -0.78, blk: 0.685, tpm: 1.111, fgImpact: 0.188, ftImpact: 1.396, to: -1.348 } },
          { name: "Isaiah Jackson", min: 17, pts: 5, reb: 3, ast: 3, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 1, fta: 2, composite: -2.82, zScores: { pts: -0.617, reb: -0.364, ast: 0.168, stl: -0.78, blk: 0.685, tpm: -0.856, fgImpact: -0.447, ftImpact: -0.756, to: 0.152 } },
          { name: "Max Strus", min: 23, pts: 3, reb: 2, ast: 3, stl: 4, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 3, fta: 3, composite: 0.74, zScores: { pts: -0.832, reb: -0.665, ast: 0.168, stl: 3.713, blk: -0.65, tpm: -0.856, fgImpact: -1.13, ftImpact: 0.838, to: 0.152 } },
          { name: "Kobe Sanders", min: 15, pts: 5, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.81, zScores: { pts: -0.617, reb: -1.266, ast: -0.596, stl: -0.78, blk: -0.65, tpm: -0.2, fgImpact: 0.4, ftImpact: 0, to: 0.902 } },
          { name: "Gradey Dick", min: 19, pts: 13, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 7, ftm: 1, fta: 3, composite: -1.82, zScores: { pts: 0.247, reb: -0.364, ast: -0.978, stl: -0.78, blk: -0.65, tpm: 0.455, fgImpact: 1.142, ftImpact: -1.791, to: 0.902 } },
          { name: "Keaton Wagler", min: 18, pts: 14, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 7, ftm: 4, fta: 4, composite: -0.85, zScores: { pts: 0.354, reb: -0.665, ast: -0.596, stl: -0.78, blk: -0.65, tpm: 0.455, fgImpact: 0.518, ftImpact: 1.117, to: -0.598 } }
        ]
      }
    }
    ]
  },
    "2026-11-14": {
    games: [
      {
      id: "401909980",
      line: "Denver Nuggets 116 @ New Orleans Pelicans 108 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DEN", name: "Denver Nuggets", score: 116,
        players: [
          { name: "Aaron Gordon", min: 33, pts: 11, reb: 5, ast: 1, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 4, fga: 6, ftm: 2, fta: 5, composite: -0.43, zScores: { pts: -0.008, reb: 0.254, ast: -0.664, stl: 0.244, blk: 0.524, tpm: -0.139, fgImpact: 0.813, ftImpact: -2.456, to: 0.999 } },
          { name: "Cameron Johnson", min: 31, pts: 12, reb: 5, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 11, ftm: 5, fta: 6, composite: -0.43, zScores: { pts: 0.115, reb: 0.254, ast: -0.265, stl: 0.244, blk: -0.644, tpm: -0.139, fgImpact: -1.435, ftImpact: 0.437, to: 0.999 } },
          { name: "Nikola Jokic", min: 37, pts: 26, reb: 8, ast: 10, stl: 3, blk: 0, to: 4, tpm: 1, fgm: 9, fga: 14, ftm: 7, fta: 7, composite: 8.86, zScores: { pts: 1.84, reb: 1.19, ast: 2.928, stl: 2.18, blk: -0.644, tpm: -0.139, fgImpact: 1.671, ftImpact: 2.028, to: -2.192 } },
          { name: "Jamal Murray", min: 38, pts: 23, reb: 7, ast: 9, stl: 0, blk: 2, to: 4, tpm: 0, fgm: 9, fga: 16, ftm: 5, fta: 6, composite: 4.28, zScores: { pts: 1.47, reb: 0.878, ast: 2.529, stl: -0.724, blk: 1.692, tpm: -0.848, fgImpact: 1.042, ftImpact: 0.437, to: -2.192 } },
          { name: "Christian Braun", min: 28, pts: 17, reb: 7, ast: 1, stl: 4, blk: 1, to: 0, tpm: 1, fgm: 6, fga: 14, ftm: 4, fta: 5, composite: 5.27, zScores: { pts: 0.731, reb: 0.878, ast: -0.664, stl: 3.148, blk: 0.524, tpm: -0.139, fgImpact: -0.354, ftImpact: 0.147, to: 0.999 } },
          { name: "Marvin Bagley III", min: 13, pts: 7, reb: 7, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: -1.8, zScores: { pts: -0.501, reb: 0.878, ast: -1.063, stl: -0.724, blk: 0.524, tpm: -0.848, fgImpact: 0.452, ftImpact: -0.722, to: 0.201 } },
          { name: "Spencer Jones", min: 12, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.03, zScores: { pts: -0.87, reb: -0.683, ast: -0.664, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: 0.406, ftImpact: 0, to: 0.999 } },
          { name: "Trevon Brazile", min: 16, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: -5.31, zScores: { pts: -0.747, reb: -0.37, ast: -1.063, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: 0.406, ftImpact: -0.722, to: -0.596 } },
          { name: "DeMar DeRozan", min: 24, pts: 9, reb: 3, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 3, fta: 4, composite: -3.71, zScores: { pts: -0.254, reb: -0.37, ast: -0.265, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: 0.138, ftImpact: -0.143, to: -0.596 } },
          { name: "Tyus Jones", min: 10, pts: 2, reb: 0, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.117, reb: -1.307, ast: 0.134, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: 0.046, ftImpact: 0, to: 0.201 } }
        ]
      },
      home: {
        abbr: "NO", name: "New Orleans Pelicans", score: 108,
        players: [
          { name: "Herbert Jones", min: 27, pts: 10, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 8, ftm: 2, fta: 3, composite: -3.8, zScores: { pts: -0.131, reb: -0.683, ast: -0.664, stl: -0.724, blk: -0.644, tpm: 0.57, fgImpact: -0.491, ftImpact: -0.432, to: -0.596 } },
          { name: "Zion Williamson", min: 31, pts: 24, reb: 6, ast: 2, stl: 0, blk: 2, to: 2, tpm: 2, fgm: 9, fga: 16, ftm: 4, fta: 8, composite: 0.99, zScores: { pts: 1.593, reb: 0.566, ast: -0.265, stl: -0.724, blk: 1.692, tpm: 0.57, fgImpact: 1.042, ftImpact: -2.888, to: -0.596 } },
          { name: "Saddiq Bey", min: 41, pts: 16, reb: 6, ast: 4, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 15, ftm: 6, fta: 6, composite: 2.6, zScores: { pts: 0.608, reb: 0.566, ast: 0.533, stl: 0.244, blk: -0.644, tpm: 0.57, fgImpact: -2.018, ftImpact: 1.738, to: 0.999 } },
          { name: "Yves Missi", min: 22, pts: 3, reb: 8, ast: 1, stl: 0, blk: 4, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 4, composite: -1.14, zScores: { pts: -0.994, reb: 1.19, ast: -0.664, stl: -0.724, blk: 4.027, tpm: -0.848, fgImpact: -0.583, ftImpact: -2.745, to: 0.201 } },
          { name: "Jeremiah Fears", min: 33, pts: 13, reb: 4, ast: 7, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 15, ftm: 0, fta: 1, composite: 0.06, zScores: { pts: 0.238, reb: -0.058, ast: 1.731, stl: 1.212, blk: -0.644, tpm: -0.139, fgImpact: -0.668, ftImpact: -1.012, to: -0.596 } },
          { name: "Karlo Matkovic", min: 14, pts: 5, reb: 3, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.72, zScores: { pts: -0.747, reb: -0.37, ast: -0.664, stl: -0.724, blk: 0.524, tpm: -0.139, fgImpact: 0.406, ftImpact: 0, to: 0.999 } },
          { name: "Derik Queen", min: 25, pts: 10, reb: 5, ast: 4, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 10, ftm: 0, fta: 2, composite: -1.27, zScores: { pts: -0.131, reb: 0.254, ast: 0.533, stl: 1.212, blk: -0.644, tpm: 0.57, fgImpact: -0.446, ftImpact: -2.023, to: -0.596 } },
          { name: "Jordan Poole", min: 24, pts: 14, reb: 2, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 7, fta: 7, composite: 1.16, zScores: { pts: 0.362, reb: -0.683, ast: 0.932, stl: -0.724, blk: -0.644, tpm: -0.139, fgImpact: -0.177, ftImpact: 2.028, to: 0.201 } },
          { name: "Jaron Pierre Jr.", min: 23, pts: 13, reb: 2, ast: 0, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 5, fga: 11, ftm: 1, fta: 2, composite: 0.02, zScores: { pts: 0.238, reb: -0.683, ast: -1.063, stl: 0.244, blk: 0.524, tpm: 0.57, fgImpact: -0.085, ftImpact: -0.722, to: 0.999 } }
        ]
      }
    },
      {
      id: "401909981",
      line: "Dallas Mavericks 117 @ Cleveland Cavaliers 127 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DAL", name: "Dallas Mavericks", score: 117,
        players: [
          { name: "Caleb Martin", min: 33, pts: 15, reb: 8, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 7, ftm: 2, fta: 2, composite: 3.9, zScores: { pts: 0.485, reb: 1.19, ast: 0.134, stl: 0.244, blk: -0.644, tpm: -0.139, fgImpact: 1.848, ftImpact: 0.579, to: 0.201 } },
          { name: "Daniel Gafford", min: 17, pts: 10, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 5, ftm: 1, fta: 2, composite: -2.07, zScores: { pts: -0.131, reb: -0.37, ast: -0.664, stl: -0.724, blk: -0.644, tpm: -0.139, fgImpact: 1.127, ftImpact: -0.722, to: 0.201 } },
          { name: "P.J. Washington", min: 26, pts: 10, reb: 3, ast: 1, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 3, fga: 9, ftm: 2, fta: 2, composite: -0.82, zScores: { pts: -0.131, reb: -0.37, ast: -0.664, stl: -0.724, blk: 0.524, tpm: 0.57, fgImpact: -0.806, ftImpact: 0.579, to: 0.201 } },
          { name: "Cooper Flagg", min: 38, pts: 18, reb: 8, ast: 5, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 6, fga: 19, ftm: 6, fta: 8, composite: 0.72, zScores: { pts: 0.854, reb: 1.19, ast: 0.932, stl: -0.724, blk: 0.524, tpm: -0.848, fgImpact: -1.927, ftImpact: -0.285, to: 0.999 } },
          { name: "Kyrie Irving", min: 37, pts: 34, reb: 6, ast: 5, stl: 3, blk: 1, to: 1, tpm: 7, fgm: 11, fga: 25, ftm: 5, fta: 7, composite: 10.33, zScores: { pts: 2.825, reb: 0.566, ast: 0.932, stl: 2.18, blk: 0.524, tpm: 4.115, fgImpact: -0.439, ftImpact: -0.575, to: 0.201 } },
          { name: "Naji Marshall", min: 30, pts: 12, reb: 3, ast: 5, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 10, ftm: 4, fta: 4, composite: -1.25, zScores: { pts: 0.115, reb: -0.37, ast: 0.932, stl: 0.244, blk: -0.644, tpm: -0.848, fgImpact: -0.446, ftImpact: 1.159, to: -1.394 } },
          { name: "Santi Aldama", min: 16, pts: 7, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 6, ftm: 1, fta: 2, composite: -1.94, zScores: { pts: -0.501, reb: -0.683, ast: -0.664, stl: 0.244, blk: -0.644, tpm: 0.57, fgImpact: -0.537, ftImpact: -0.722, to: 0.999 } },
          { name: "Morez Johnson Jr.", min: 15, pts: 4, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 4, fta: 4, composite: -2.34, zScores: { pts: -0.87, reb: -0.683, ast: -1.063, stl: 0.244, blk: -0.644, tpm: -0.848, fgImpact: -0.629, ftImpact: 1.159, to: 0.999 } },
          { name: "Zaccharie Risacher", min: 14, pts: 5, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.26, zScores: { pts: -0.747, reb: -0.683, ast: -1.063, stl: 0.244, blk: -0.644, tpm: -0.139, fgImpact: -0.223, ftImpact: 0, to: 0.999 } },
          { name: "Walter Clayton Jr.", min: 13, pts: 2, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.18, zScores: { pts: -1.117, reb: -0.683, ast: -0.265, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: -0.898, ftImpact: 0, to: 0.999 } }
        ]
      },
      home: {
        abbr: "CLE", name: "Cleveland Cavaliers", score: 127,
        players: [
          { name: "Mario Hezonja", min: 34, pts: 22, reb: 7, ast: 4, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 9, fga: 12, ftm: 2, fta: 2, composite: 4.24, zScores: { pts: 1.347, reb: 0.878, ast: 0.533, stl: -0.724, blk: -0.644, tpm: 0.57, fgImpact: 2.301, ftImpact: 0.579, to: -0.596 } },
          { name: "Thomas Bryant", min: 27, pts: 19, reb: 11, ast: 3, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 12, ftm: 3, fta: 4, composite: 3.45, zScores: { pts: 0.977, reb: 2.127, ast: 0.134, stl: -0.724, blk: -0.644, tpm: 0.57, fgImpact: 0.95, ftImpact: -0.143, to: 0.201 } },
          { name: "Jaylon Tyson", min: 34, pts: 18, reb: 4, ast: 4, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 13, ftm: 5, fta: 5, composite: 1.38, zScores: { pts: 0.854, reb: -0.058, ast: 0.533, stl: -0.724, blk: -0.644, tpm: 1.279, fgImpact: -0.714, ftImpact: 1.449, to: -0.596 } },
          { name: "Tyrese Proctor", min: 34, pts: 24, reb: 11, ast: 10, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 10, fga: 19, ftm: 0, fta: 0, composite: 8.24, zScores: { pts: 1.593, reb: 2.127, ast: 2.928, stl: -0.724, blk: -0.644, tpm: 1.988, fgImpact: 0.774, ftImpact: 0, to: 0.201 } },
          { name: "Meleek Thomas", min: 34, pts: 20, reb: 4, ast: 2, stl: 0, blk: 0, to: 4, tpm: 3, fgm: 8, fga: 17, ftm: 1, fta: 2, composite: -2.17, zScores: { pts: 1.101, reb: -0.058, ast: -0.265, stl: -0.724, blk: -0.644, tpm: 1.279, fgImpact: 0.053, ftImpact: -0.722, to: -2.192 } },
          { name: "Riley Minix", min: 22, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -5.92, zScores: { pts: -1.117, reb: -1.307, ast: -1.063, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: -1.212, ftImpact: 0, to: 0.999 } },
          { name: "Norchad Omier", min: 27, pts: 13, reb: 8, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 5, ftm: 2, fta: 2, composite: 3.21, zScores: { pts: 0.238, reb: 1.19, ast: -0.265, stl: 0.244, blk: -0.644, tpm: -0.139, fgImpact: 1.802, ftImpact: 0.579, to: 0.201 } },
          { name: "Craig Porter Jr.", min: 28, pts: 9, reb: 9, ast: 6, stl: 1, blk: 1, to: 5, tpm: 0, fgm: 3, fga: 6, ftm: 3, fta: 3, composite: 0.52, zScores: { pts: -0.254, reb: 1.502, ast: 1.331, stl: 0.244, blk: 0.524, tpm: -0.848, fgImpact: 0.138, ftImpact: 0.869, to: -2.989 } }
        ]
      }
    },
      {
      id: "401909982",
      line: "Detroit Pistons 117 @ Miami Heat 137 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DET", name: "Detroit Pistons", score: 117,
        players: [
          { name: "Duncan Robinson", min: 17, pts: 10, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: -1.5, zScores: { pts: -0.131, reb: -0.995, ast: -0.664, stl: -0.724, blk: -0.644, tpm: 0.57, fgImpact: -0.491, ftImpact: 0.579, to: 0.999 } },
          { name: "John Collins", min: 26, pts: 8, reb: 7, ast: 0, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 13, ftm: 0, fta: 0, composite: -4.02, zScores: { pts: -0.378, reb: 0.878, ast: -1.063, stl: -0.724, blk: -0.644, tpm: 0.57, fgImpact: -2.064, ftImpact: 0, to: -0.596 } },
          { name: "Cade Cunningham", min: 36, pts: 33, reb: 5, ast: 8, stl: 1, blk: 1, to: 3, tpm: 3, fgm: 8, fga: 20, ftm: 14, fta: 14, composite: 8.9, zScores: { pts: 2.702, reb: 0.254, ast: 2.13, stl: 0.244, blk: 0.524, tpm: 1.279, fgImpact: -0.891, ftImpact: 4.056, to: -1.394 } },
          { name: "Ausar Thompson", min: 18, pts: 10, reb: 8, ast: 5, stl: 2, blk: 2, to: 2, tpm: 0, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 4.31, zScores: { pts: -0.131, reb: 1.19, ast: 0.932, stl: 1.212, blk: 1.692, tpm: -0.848, fgImpact: 0.859, ftImpact: 0, to: -0.596 } },
          { name: "Daniss Jenkins", min: 35, pts: 10, reb: 1, ast: 5, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 14, ftm: 1, fta: 2, composite: -1.99, zScores: { pts: -0.131, reb: -0.995, ast: 0.932, stl: 1.212, blk: -0.644, tpm: -0.139, fgImpact: -1.704, ftImpact: -0.722, to: 0.201 } },
          { name: "Taurean Prince", min: 8, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.57, zScores: { pts: -1.117, reb: -1.307, ast: -0.664, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: -0.269, ftImpact: 0, to: 0.999 } },
          { name: "Paul Reed", min: 23, pts: 9, reb: 9, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 3, fta: 4, composite: -0.78, zScores: { pts: -0.254, reb: 1.502, ast: -0.664, stl: 0.244, blk: -0.644, tpm: -0.848, fgImpact: -0.177, ftImpact: -0.143, to: 0.201 } },
          { name: "Tolu Smith", min: 1, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 3, composite: -5.33, zScores: { pts: -0.994, reb: -0.683, ast: -1.063, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: 0.36, ftImpact: -1.734, to: 0.999 } },
          { name: "Ronald Holland II", min: 22, pts: 5, reb: 7, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: 0.19, zScores: { pts: -0.747, reb: 0.878, ast: 0.134, stl: 0.244, blk: -0.644, tpm: -0.139, fgImpact: -0.537, ftImpact: 0, to: 0.999 } },
          { name: "Isaac Jones", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.95, zScores: { pts: -1.363, reb: -0.995, ast: -1.063, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: -0.315, ftImpact: 0, to: 0.999 } },
          { name: "Javonte Green", min: 12, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 5, fta: 5, composite: -3.37, zScores: { pts: -0.747, reb: -0.995, ast: -1.063, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: 0, ftImpact: 1.449, to: 0.201 } },
          { name: "Kevin Huerter", min: 38, pts: 20, reb: 4, ast: 7, stl: 1, blk: 3, to: 3, tpm: 2, fgm: 9, fga: 15, ftm: 0, fta: 0, composite: 6.41, zScores: { pts: 1.101, reb: -0.058, ast: 1.731, stl: 0.244, blk: 2.859, tpm: 0.57, fgImpact: 1.357, ftImpact: 0, to: -1.394 } },
          { name: "Elijah Harkless", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -5.24, zScores: { pts: -1.117, reb: -1.307, ast: -1.063, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: -0.315, ftImpact: 0.579, to: 0.201 } }
        ]
      },
      home: {
        abbr: "MIA", name: "Miami Heat", score: 137,
        players: [
          { name: "Giannis Antetokounmpo", min: 31, pts: 34, reb: 14, ast: 8, stl: 1, blk: 3, to: 3, tpm: 1, fgm: 13, fga: 17, ftm: 7, fta: 9, composite: 13.02, zScores: { pts: 2.825, reb: 3.063, ast: 2.13, stl: 0.244, blk: 2.859, tpm: -0.139, fgImpact: 3.428, ftImpact: 0.005, to: -1.394 } },
          { name: "Myron Gardner", min: 26, pts: 5, reb: 9, ast: 3, stl: 0, blk: 2, to: 2, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: 0.58, zScores: { pts: -0.747, reb: 1.502, ast: 0.134, stl: -0.724, blk: 1.692, tpm: -0.139, fgImpact: -0.537, ftImpact: 0, to: -0.596 } },
          { name: "Bam Adebayo", min: 36, pts: 20, reb: 5, ast: 4, stl: 3, blk: 2, to: 1, tpm: 1, fgm: 5, fga: 8, ftm: 9, fta: 13, composite: 5.24, zScores: { pts: 1.101, reb: 0.254, ast: 0.533, stl: 2.18, blk: 1.692, tpm: -0.139, fgImpact: 0.859, ftImpact: -1.439, to: 0.201 } },
          { name: "Klay Thompson", min: 20, pts: 26, reb: 1, ast: 4, stl: 0, blk: 1, to: 0, tpm: 6, fgm: 10, fga: 17, ftm: 0, fta: 0, composite: 6.99, zScores: { pts: 1.84, reb: -0.995, ast: 0.533, stl: -0.724, blk: 0.524, tpm: 3.406, fgImpact: 1.403, ftImpact: 0, to: 0.999 } },
          { name: "Davion Mitchell", min: 32, pts: 15, reb: 4, ast: 9, stl: 2, blk: 2, to: 4, tpm: 3, fgm: 4, fga: 7, ftm: 4, fta: 4, composite: 6.6, zScores: { pts: 0.485, reb: -0.058, ast: 2.529, stl: 1.212, blk: 1.692, tpm: 1.279, fgImpact: 0.498, ftImpact: 1.159, to: -2.192 } },
          { name: "Andrew Wiggins", min: 23, pts: 10, reb: 2, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 8, ftm: 4, fta: 4, composite: 0.11, zScores: { pts: -0.131, reb: -0.683, ast: -0.664, stl: 0.244, blk: 0.524, tpm: -0.848, fgImpact: -0.491, ftImpact: 1.159, to: 0.999 } },
          { name: "Bobby Portis", min: 18, pts: 7, reb: 4, ast: 2, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: 0.22, zScores: { pts: -0.501, reb: -0.058, ast: -0.265, stl: 0.244, blk: 0.524, tpm: -0.139, fgImpact: -1.166, ftImpact: 0.579, to: 0.999 } },
          { name: "Simone Fontecchio", min: 14, pts: 7, reb: 5, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -0.78, zScores: { pts: -0.501, reb: 0.254, ast: -1.063, stl: -0.724, blk: 0.524, tpm: -0.139, fgImpact: 0.092, ftImpact: 0.579, to: 0.201 } },
          { name: "Keshad Johnson", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.95, zScores: { pts: -1.363, reb: -1.307, ast: -1.063, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: 0, ftImpact: 0, to: 0.999 } },
          { name: "Nikola Jovic", min: 11, pts: 2, reb: 1, ast: 2, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -1.51, zScores: { pts: -1.117, reb: -0.995, ast: -0.265, stl: 0.244, blk: 0.524, tpm: -0.848, fgImpact: -0.629, ftImpact: 0.579, to: 0.999 } },
          { name: "Tre Donaldson", min: 1, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -4.92, zScores: { pts: -1.117, reb: -1.307, ast: -1.063, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: 0, ftImpact: 0.579, to: 0.201 } },
          { name: "Ryan Conwell", min: 26, pts: 9, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 10, ftm: 1, fta: 2, composite: -2.45, zScores: { pts: -0.254, reb: -0.058, ast: -0.664, stl: 0.244, blk: -0.644, tpm: 0.57, fgImpact: -1.121, ftImpact: -0.722, to: 0.201 } }
        ]
      }
    },
      {
      id: "401909983",
      line: "Brooklyn Nets 110 @ Memphis Grizzlies 129 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BKN", name: "Brooklyn Nets", score: 110,
        players: [
          { name: "Julius Randle", min: 31, pts: 22, reb: 4, ast: 5, stl: 3, blk: 0, to: 4, tpm: 3, fgm: 8, fga: 16, ftm: 3, fta: 6, composite: 1.05, zScores: { pts: 1.347, reb: -0.058, ast: 0.932, stl: 2.18, blk: -0.644, tpm: 1.279, fgImpact: 0.367, ftImpact: -2.166, to: -2.192 } },
          { name: "Noah Clowney", min: 35, pts: 15, reb: 7, ast: 3, stl: 0, blk: 3, to: 2, tpm: 3, fgm: 6, fga: 14, ftm: 0, fta: 0, composite: 3.96, zScores: { pts: 0.485, reb: 0.878, ast: 0.134, stl: -0.724, blk: 2.859, tpm: 1.279, fgImpact: -0.354, ftImpact: 0, to: -0.596 } },
          { name: "Danny Wolf", min: 28, pts: 14, reb: 6, ast: 1, stl: 0, blk: 1, to: 1, tpm: 4, fgm: 5, fga: 13, ftm: 0, fta: 0, composite: 1.54, zScores: { pts: 0.362, reb: 0.566, ast: -0.664, stl: -0.724, blk: 0.524, tpm: 1.988, fgImpact: -0.714, ftImpact: 0, to: 0.201 } },
          { name: "Day'Ron Sharpe", min: 28, pts: 16, reb: 11, ast: 5, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 7, fga: 14, ftm: 2, fta: 2, composite: 2.72, zScores: { pts: 0.608, reb: 2.127, ast: 0.932, stl: 0.244, blk: -0.644, tpm: -0.848, fgImpact: 0.321, ftImpact: 0.579, to: -0.596 } },
          { name: "Egor Demin", min: 27, pts: 11, reb: 1, ast: 2, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 3, fga: 8, ftm: 2, fta: 3, composite: -3.67, zScores: { pts: -0.008, reb: -0.995, ast: -0.265, stl: -0.724, blk: -0.644, tpm: 1.279, fgImpact: -0.491, ftImpact: -0.432, to: -1.394 } },
          { name: "Josh Minott", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -6.06, zScores: { pts: -1.363, reb: -1.307, ast: -1.063, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: -0.315, ftImpact: 0, to: 0.201 } },
          { name: "Chaney Johnson", min: 12, pts: 1, reb: 5, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -3.13, zScores: { pts: -1.24, reb: 0.254, ast: -1.063, stl: -0.724, blk: 0.524, tpm: -0.848, fgImpact: -0.315, ftImpact: -0.722, to: 0.999 } },
          { name: "Moritz Wagner", min: 18, pts: 10, reb: 6, ast: 4, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: 1.72, zScores: { pts: -0.131, reb: 0.566, ast: 0.533, stl: -0.724, blk: -0.644, tpm: 0.57, fgImpact: 0.767, ftImpact: 0.579, to: 0.201 } },
          { name: "Terance Mann", min: 9, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.117, reb: -0.995, ast: -0.664, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: -0.269, ftImpact: 0, to: 0.999 } },
          { name: "Keon Ellis", min: 7, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.58, zScores: { pts: -1.363, reb: -1.307, ast: -0.664, stl: 0.244, blk: -0.644, tpm: -0.848, fgImpact: 0, ftImpact: 0, to: 0.999 } },
          { name: "Drake Powell", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.34, zScores: { pts: -1.117, reb: -1.307, ast: -1.063, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: 0.36, ftImpact: 0, to: 0.999 } },
          { name: "Mikel Brown Jr.", min: 20, pts: 6, reb: 1, ast: 2, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.77, zScores: { pts: -0.624, reb: -0.995, ast: -0.265, stl: 1.212, blk: -0.644, tpm: 0.57, fgImpact: -0.223, ftImpact: 0, to: 0.201 } },
          { name: "Nolan Traore", min: 20, pts: 11, reb: 1, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 13, ftm: 1, fta: 2, composite: -3.55, zScores: { pts: -0.008, reb: -0.995, ast: -0.265, stl: -0.724, blk: 0.524, tpm: -0.848, fgImpact: -0.714, ftImpact: -0.722, to: 0.201 } }
        ]
      },
      home: {
        abbr: "MEM", name: "Memphis Grizzlies", score: 129,
        players: [
          { name: "Cedric Coward", min: 33, pts: 23, reb: 12, ast: 4, stl: 2, blk: 2, to: 2, tpm: 4, fgm: 7, fga: 13, ftm: 5, fta: 6, composite: 9.81, zScores: { pts: 1.47, reb: 2.439, ast: 0.533, stl: 1.212, blk: 1.692, tpm: 1.988, fgImpact: 0.636, ftImpact: 0.437, to: -0.596 } },
          { name: "Cameron Boozer", min: 29, pts: 15, reb: 8, ast: 5, stl: 2, blk: 2, to: 2, tpm: 0, fgm: 7, fga: 13, ftm: 1, fta: 3, composite: 2.97, zScores: { pts: 0.485, reb: 1.19, ast: 0.932, stl: 1.212, blk: 1.692, tpm: -0.848, fgImpact: 0.636, ftImpact: -1.734, to: -0.596 } },
          { name: "Jaylen Wells", min: 25, pts: 5, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 2, fta: 3, composite: -2.9, zScores: { pts: -0.747, reb: -0.683, ast: -0.265, stl: -0.724, blk: -0.644, tpm: -0.139, fgImpact: -0.269, ftImpact: -0.432, to: 0.999 } },
          { name: "Isaiah Stewart", min: 15, pts: 11, reb: 3, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 11, ftm: 1, fta: 2, composite: -3.86, zScores: { pts: -0.008, reb: -0.37, ast: 0.134, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: -0.085, ftImpact: -0.722, to: -0.596 } },
          { name: "Cam Spencer", min: 34, pts: 17, reb: 1, ast: 8, stl: 2, blk: 0, to: 3, tpm: 3, fgm: 6, fga: 10, ftm: 2, fta: 2, composite: 3.8, zScores: { pts: 0.731, reb: -0.995, ast: 2.13, stl: 1.212, blk: -0.644, tpm: 1.279, fgImpact: 0.905, ftImpact: 0.579, to: -1.394 } },
          { name: "Kris Murray", min: 19, pts: 3, reb: 2, ast: 3, stl: 4, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: 0.92, zScores: { pts: -0.994, reb: -0.683, ast: 0.134, stl: 3.148, blk: -0.644, tpm: -0.139, fgImpact: -0.898, ftImpact: 0, to: 0.999 } },
          { name: "Olivier-Maxence Prosper", min: 20, pts: 11, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 7, ftm: 1, fta: 1, composite: 1.03, zScores: { pts: -0.008, reb: -0.058, ast: -1.063, stl: -0.724, blk: 0.524, tpm: 0.57, fgImpact: 0.498, ftImpact: 0.29, to: 0.999 } },
          { name: "Taylor Hendricks", min: 29, pts: 22, reb: 5, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 9, fga: 13, ftm: 4, fta: 6, composite: 0.44, zScores: { pts: 1.347, reb: 0.254, ast: 0.533, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: 1.986, ftImpact: -0.865, to: -0.596 } },
          { name: "GG Jackson", min: 3, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.51, zScores: { pts: -0.994, reb: -1.307, ast: -1.063, stl: -0.724, blk: -0.644, tpm: -0.139, fgImpact: 0.36, ftImpact: 0, to: 0.999 } },
          { name: "Karim Lopez", min: 2, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.33, zScores: { pts: -1.363, reb: -0.683, ast: -1.063, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: 0, ftImpact: 0, to: 0.999 } },
          { name: "Jahmai Mashack", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.95, zScores: { pts: -1.363, reb: -1.307, ast: -1.063, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: 0, ftImpact: 0, to: 0.999 } },
          { name: "Javon Small", min: 30, pts: 19, reb: 2, ast: 5, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 11, ftm: 6, fta: 6, composite: 3.96, zScores: { pts: 0.977, reb: -0.683, ast: 0.932, stl: 0.244, blk: -0.644, tpm: 1.279, fgImpact: -0.085, ftImpact: 1.738, to: 0.201 } }
        ]
      }
    },
      {
      id: "401909984",
      line: "Chicago Bulls 117 @ Minnesota Timberwolves 106 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHI", name: "Chicago Bulls", score: 117,
        players: [
          { name: "Zach Collins", min: 28, pts: 8, reb: 6, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 11, ftm: 0, fta: 0, composite: -2.85, zScores: { pts: -0.378, reb: 0.566, ast: 0.533, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: -0.76, ftImpact: 0, to: -0.596 } },
          { name: "Isaac Okoro", min: 31, pts: 9, reb: 7, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 9, ftm: 3, fta: 5, composite: -2.02, zScores: { pts: -0.254, reb: 0.878, ast: 0.533, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: -0.806, ftImpact: -1.154, to: 0.999 } },
          { name: "Matas Buzelis", min: 30, pts: 18, reb: 9, ast: 2, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 9, ftm: 6, fta: 6, composite: 2.98, zScores: { pts: 0.854, reb: 1.502, ast: -0.265, stl: -0.724, blk: -0.644, tpm: 0.57, fgImpact: 0.544, ftImpact: 1.738, to: -0.596 } },
          { name: "Norman Powell", min: 30, pts: 24, reb: 5, ast: 3, stl: 1, blk: 2, to: 4, tpm: 3, fgm: 10, fga: 19, ftm: 1, fta: 2, composite: 3.06, zScores: { pts: 1.593, reb: 0.254, ast: 0.134, stl: 0.244, blk: 1.692, tpm: 1.279, fgImpact: 0.774, ftImpact: -0.722, to: -2.192 } },
          { name: "Josh Giddey", min: 26, pts: 8, reb: 8, ast: 5, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: 1.2, zScores: { pts: -0.378, reb: 1.19, ast: 0.932, stl: -0.724, blk: 0.524, tpm: 0.57, fgImpact: -1.121, ftImpact: 0, to: 0.201 } },
          { name: "Patrick Williams", min: 26, pts: 14, reb: 5, ast: 1, stl: 2, blk: 1, to: 1, tpm: 2, fgm: 5, fga: 9, ftm: 2, fta: 2, composite: 3.58, zScores: { pts: 0.362, reb: 0.254, ast: -0.664, stl: 1.212, blk: 0.524, tpm: 0.57, fgImpact: 0.544, ftImpact: 0.579, to: 0.201 } },
          { name: "Leonard Miller", min: 17, pts: 4, reb: 3, ast: 4, stl: 3, blk: 2, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: 1.23, zScores: { pts: -0.87, reb: -0.37, ast: 0.533, stl: 2.18, blk: 1.692, tpm: -0.848, fgImpact: -0.269, ftImpact: 0.579, to: -1.394 } },
          { name: "Noa Essengue", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.95, zScores: { pts: -1.363, reb: -0.995, ast: -1.063, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: -0.315, ftImpact: 0, to: 0.999 } },
          { name: "Buddy Hield", min: 20, pts: 16, reb: 4, ast: 2, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 2.18, zScores: { pts: 0.608, reb: -0.058, ast: -0.265, stl: 0.244, blk: -0.644, tpm: 1.988, fgImpact: 0.905, ftImpact: 0, to: -0.596 } },
          { name: "Tre Jones", min: 24, pts: 16, reb: 0, ast: 4, stl: 0, blk: 2, to: 3, tpm: 1, fgm: 7, fga: 9, ftm: 1, fta: 1, composite: 1.45, zScores: { pts: 0.608, reb: -1.307, ast: 0.533, stl: -0.724, blk: 1.692, tpm: -0.139, fgImpact: 1.894, ftImpact: 0.29, to: -1.394 } }
        ]
      },
      home: {
        abbr: "MIN", name: "Minnesota Timberwolves", score: 106,
        players: [
          { name: "Jaden McDaniels", min: 37, pts: 18, reb: 5, ast: 6, stl: 2, blk: 1, to: 3, tpm: 2, fgm: 7, fga: 11, ftm: 2, fta: 2, composite: 5.2, zScores: { pts: 0.854, reb: 0.254, ast: 1.331, stl: 1.212, blk: 0.524, tpm: 0.57, fgImpact: 1.265, ftImpact: 0.579, to: -1.394 } },
          { name: "Jonathan Kuminga", min: 35, pts: 11, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 10, ftm: 5, fta: 6, composite: -1.97, zScores: { pts: -0.008, reb: -0.37, ast: 0.134, stl: 0.244, blk: -0.644, tpm: -0.848, fgImpact: -1.121, ftImpact: 0.437, to: 0.201 } },
          { name: "Rudy Gobert", min: 27, pts: 1, reb: 10, ast: 4, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 7, ftm: 1, fta: 2, composite: -2.66, zScores: { pts: -1.24, reb: 1.814, ast: 0.533, stl: -0.724, blk: 0.524, tpm: -0.848, fgImpact: -2.202, ftImpact: -0.722, to: 0.201 } },
          { name: "Ayo Dosunmu", min: 33, pts: 24, reb: 4, ast: 0, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 10, fga: 16, ftm: 4, fta: 4, composite: 3.44, zScores: { pts: 1.593, reb: -0.058, ast: -1.063, stl: 2.18, blk: -0.644, tpm: -0.848, fgImpact: 1.717, ftImpact: 1.159, to: -0.596 } },
          { name: "LaMelo Ball", min: 30, pts: 19, reb: 8, ast: 6, stl: 4, blk: 0, to: 1, tpm: 4, fgm: 7, fga: 25, ftm: 1, fta: 2, composite: 4.33, zScores: { pts: 0.977, reb: 1.19, ast: 1.331, stl: 3.148, blk: -0.644, tpm: 1.988, fgImpact: -3.139, ftImpact: -0.722, to: 0.201 } },
          { name: "Trey Lyles", min: 19, pts: 5, reb: 1, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 3, fta: 4, composite: -2.78, zScores: { pts: -0.747, reb: -0.995, ast: -0.265, stl: -0.724, blk: 0.524, tpm: -0.848, fgImpact: -0.583, ftImpact: -0.143, to: 0.999 } },
          { name: "Joan Beringer", min: 13, pts: 2, reb: 5, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 2, composite: -3.84, zScores: { pts: -1.117, reb: 0.254, ast: -1.063, stl: 0.244, blk: -0.644, tpm: -0.848, fgImpact: 0.36, ftImpact: -2.023, to: 0.999 } },
          { name: "Jaylen Clark", min: 3, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.3, zScores: { pts: -1.363, reb: -1.307, ast: -1.063, stl: 0.244, blk: -0.644, tpm: -0.848, fgImpact: -0.315, ftImpact: 0, to: 0.999 } },
          { name: "Terrence Shannon Jr.", min: 22, pts: 14, reb: 6, ast: 0, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 6, fga: 9, ftm: 2, fta: 3, composite: -3.76, zScores: { pts: 0.362, reb: 0.566, ast: -1.063, stl: -0.724, blk: -0.644, tpm: -0.848, fgImpact: 1.219, ftImpact: -0.432, to: -2.192 } },
          { name: "Bones Hyland", min: 21, pts: 12, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 7, ftm: 3, fta: 3, composite: -1.14, zScores: { pts: 0.115, reb: -0.995, ast: -0.265, stl: -0.724, blk: -0.644, tpm: 1.279, fgImpact: -0.177, ftImpact: 0.869, to: -0.596 } }
        ]
      }
    }
    ]
  },
    "2026-11-15": {
    games: [
      {
      id: "401909985",
      line: "Indiana Pacers 124 @ Philadelphia 76ers 131 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "IND", name: "Indiana Pacers", score: 124,
        players: [
          { name: "Pascal Siakam", min: 34, pts: 31, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 12, fga: 19, ftm: 7, fta: 8, composite: 3.88, zScores: { pts: 2.457, reb: -0.643, ast: -0.21, stl: 0.241, blk: -0.496, tpm: -0.917, fgImpact: 2.041, ftImpact: 1.179, to: 0.23 } },
          { name: "Ivica Zubac", min: 22, pts: 8, reb: 5, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: -1.42, zScores: { pts: -0.305, reb: 0.307, ast: -0.21, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0.112, ftImpact: 0.679, to: 0.23 } },
          { name: "Kelly Oubre Jr.", min: 29, pts: 16, reb: 4, ast: 2, stl: 1, blk: 1, to: 3, tpm: 2, fgm: 6, fga: 11, ftm: 2, fta: 2, composite: 1.96, zScores: { pts: 0.656, reb: -0.01, ast: -0.21, stl: 0.241, blk: 0.753, tpm: 0.487, fgImpact: 0.542, ftImpact: 0.679, to: -1.181 } },
          { name: "Aaron Nesmith", min: 36, pts: 12, reb: 4, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 11, ftm: 4, fta: 4, composite: -0.67, zScores: { pts: 0.176, reb: -0.01, ast: 0.625, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: -0.806, ftImpact: 1.358, to: 0.23 } },
          { name: "Quenton Jackson", min: 30, pts: 15, reb: 6, ast: 8, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 12, ftm: 2, fta: 3, composite: 2.21, zScores: { pts: 0.536, reb: 0.624, ast: 2.293, stl: 0.241, blk: -0.496, tpm: -0.215, fgImpact: 0.224, ftImpact: -0.518, to: -0.475 } },
          { name: "Larry Nance Jr.", min: 7, pts: 4, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -3.06, zScores: { pts: -0.785, reb: -0.643, ast: -0.21, stl: -0.826, blk: -0.496, tpm: -0.215, fgImpact: 0.037, ftImpact: -0.857, to: 0.936 } },
          { name: "Obi Toppin", min: 14, pts: 5, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 1, fta: 1, composite: -3.78, zScores: { pts: -0.665, reb: -0.643, ast: -0.627, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: -0.881, ftImpact: 0.339, to: 0.936 } },
          { name: "Jalen Slawson", min: 14, pts: 8, reb: 5, ast: 2, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 3, ftm: 1, fta: 1, composite: 1.85, zScores: { pts: -0.305, reb: 0.307, ast: -0.21, stl: -0.826, blk: 0.753, tpm: -0.215, fgImpact: 1.068, ftImpact: 0.339, to: 0.936 } },
          { name: "Jarace Walker", min: 14, pts: 2, reb: 5, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.9, zScores: { pts: -1.025, reb: 0.307, ast: -0.21, stl: -0.826, blk: 0.753, tpm: -0.917, fgImpact: -0.918, ftImpact: 0, to: 0.936 } },
          { name: "Jay Huff", min: 18, pts: 11, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 1.54, zScores: { pts: 0.056, reb: -1.276, ast: -0.21, stl: 0.241, blk: -0.496, tpm: 1.188, fgImpact: 1.105, ftImpact: 0, to: 0.936 } },
          { name: "T.J. McConnell", min: 19, pts: 12, reb: 5, ast: 5, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 0.74, zScores: { pts: 0.176, reb: 0.307, ast: 1.042, stl: 0.241, blk: -0.496, tpm: -0.917, fgImpact: 0.861, ftImpact: 0, to: -0.475 } },
          { name: "Kobe Brown", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.89, zScores: { pts: -1.265, reb: -1.276, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0, ftImpact: 0, to: 0.936 } }
        ]
      },
      home: {
        abbr: "PHI", name: "Philadelphia 76ers", score: 131,
        players: [
          { name: "LeBron James", min: 33, pts: 15, reb: 7, ast: 11, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 8, ftm: 5, fta: 6, composite: 4.88, zScores: { pts: 0.536, reb: 0.94, ast: 3.544, stl: -0.826, blk: 0.753, tpm: -0.917, fgImpact: 0.824, ftImpact: 0.5, to: -0.475 } },
          { name: "Jabari Walker", min: 25, pts: 11, reb: 7, ast: 1, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 0.98, zScores: { pts: 0.056, reb: 0.94, ast: -0.627, stl: 0.241, blk: -0.496, tpm: 1.188, fgImpact: 0.149, ftImpact: 0, to: -0.475 } },
          { name: "Jaylen Brown", min: 32, pts: 31, reb: 2, ast: 2, stl: 1, blk: 0, to: 5, tpm: 3, fgm: 12, fga: 18, ftm: 4, fta: 6, composite: 1.27, zScores: { pts: 2.457, reb: -0.643, ast: -0.21, stl: 0.241, blk: -0.496, tpm: 1.188, fgImpact: 2.359, ftImpact: -1.036, to: -2.592 } },
          { name: "Tyrese Maxey", min: 36, pts: 27, reb: 4, ast: 6, stl: 1, blk: 0, to: 1, tpm: 5, fgm: 9, fga: 19, ftm: 4, fta: 5, composite: 6.17, zScores: { pts: 1.977, reb: -0.01, ast: 1.459, stl: 0.241, blk: -0.496, tpm: 2.591, fgImpact: 0.017, ftImpact: 0.161, to: 0.23 } },
          { name: "VJ Edgecombe", min: 31, pts: 11, reb: 4, ast: 6, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 11, ftm: 1, fta: 2, composite: -0.43, zScores: { pts: 0.056, reb: -0.01, ast: 1.459, stl: 0.241, blk: -0.496, tpm: -0.917, fgImpact: -0.132, ftImpact: -0.857, to: 0.23 } },
          { name: "Dean Wade", min: 35, pts: 12, reb: 7, ast: 3, stl: 0, blk: 2, to: 0, tpm: 3, fgm: 4, fga: 5, ftm: 1, fta: 1, composite: 6.07, zScores: { pts: 0.176, reb: 0.94, ast: 0.208, stl: -0.826, blk: 2.002, tpm: 1.188, fgImpact: 1.105, ftImpact: 0.339, to: 0.936 } },
          { name: "Tacko Fall", min: 5, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.94, zScores: { pts: -1.265, reb: -0.326, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0, ftImpact: 0, to: 0.936 } },
          { name: "Kentavious Caldwell-Pope", min: 22, pts: 9, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: -1.95, zScores: { pts: -0.185, reb: 0.307, ast: -1.044, stl: -0.826, blk: -0.496, tpm: 0.487, fgImpact: -0.244, ftImpact: -0.179, to: 0.23 } },
          { name: "Anfernee Simons", min: 15, pts: 12, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 9, ftm: 1, fta: 1, composite: -1.9, zScores: { pts: 0.176, reb: -1.276, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.215, fgImpact: 0.505, ftImpact: 0.339, to: 0.936 } },
          { name: "Labaron Philon Jr.", min: 6, pts: 3, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.4, zScores: { pts: -0.905, reb: -0.959, ast: -1.044, stl: 0.241, blk: -0.496, tpm: -0.215, fgImpact: 0.037, ftImpact: 0, to: 0.936 } }
        ]
      }
    },
      {
      id: "401909986",
      line: "Los Angeles Lakers 131 @ Phoenix Suns 123 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LAL", name: "Los Angeles Lakers", score: 131,
        players: [
          { name: "Jake LaRavia", min: 32, pts: 12, reb: 3, ast: 3, stl: 1, blk: 3, to: 0, tpm: 2, fgm: 4, fga: 10, ftm: 2, fta: 2, composite: 5.16, zScores: { pts: 0.176, reb: -0.326, ast: 0.208, stl: 0.241, blk: 3.25, tpm: 0.487, fgImpact: -0.488, ftImpact: 0.679, to: 0.936 } },
          { name: "Walker Kessler", min: 32, pts: 14, reb: 12, ast: 3, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 4, fga: 5, ftm: 6, fta: 6, composite: 7.14, zScores: { pts: 0.416, reb: 2.523, ast: 0.208, stl: 0.241, blk: 2.002, tpm: -0.917, fgImpact: 1.105, ftImpact: 2.036, to: -0.475 } },
          { name: "Matisse Thybulle", min: 26, pts: 12, reb: 8, ast: 0, stl: 3, blk: 2, to: 4, tpm: 2, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 3.88, zScores: { pts: 0.176, reb: 1.257, ast: -1.044, stl: 2.375, blk: 2.002, tpm: 0.487, fgImpact: -0.169, ftImpact: 0.679, to: -1.886 } },
          { name: "Luka Doncic", min: 36, pts: 43, reb: 3, ast: 9, stl: 1, blk: 0, to: 2, tpm: 5, fgm: 13, fga: 28, ftm: 12, fta: 14, composite: 9.67, zScores: { pts: 3.898, reb: -0.326, ast: 2.71, stl: 0.241, blk: -0.496, tpm: 2.591, fgImpact: -0.152, ftImpact: 1.679, to: -0.475 } },
          { name: "Quentin Grimes", min: 37, pts: 22, reb: 6, ast: 1, stl: 2, blk: 0, to: 3, tpm: 5, fgm: 7, fga: 10, ftm: 3, fta: 4, composite: 4.95, zScores: { pts: 1.376, reb: 0.624, ast: -0.627, stl: 1.308, blk: -0.496, tpm: 2.591, fgImpact: 1.535, ftImpact: -0.179, to: -1.181 } },
          { name: "Jarred Vanderbilt", min: 12, pts: 2, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 2, composite: -4.49, zScores: { pts: -1.025, reb: -0.01, ast: -1.044, stl: -0.826, blk: 0.753, tpm: -0.917, fgImpact: 0.037, ftImpact: -2.394, to: 0.936 } },
          { name: "Sandro Mamukelashvili", min: 21, pts: 4, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -3.36, zScores: { pts: -0.785, reb: -0.643, ast: 0.208, stl: 0.241, blk: -0.496, tpm: -0.917, fgImpact: -1.199, ftImpact: 0, to: 0.23 } },
          { name: "Ziaire Williams", min: 19, pts: 6, reb: 2, ast: 3, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 0.22, zScores: { pts: -0.545, reb: -0.643, ast: 0.208, stl: 1.308, blk: -0.496, tpm: -0.917, fgImpact: 0.393, ftImpact: 0.679, to: 0.23 } },
          { name: "Collin Sexton", min: 24, pts: 16, reb: 0, ast: 3, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 11, ftm: 2, fta: 4, composite: -2.89, zScores: { pts: 0.656, reb: -1.276, ast: 0.208, stl: -0.826, blk: -0.496, tpm: 0.487, fgImpact: 0.542, ftImpact: -1.715, to: -0.475 } }
        ]
      },
      home: {
        abbr: "PHX", name: "Phoenix Suns", score: 123,
        players: [
          { name: "Dillon Brooks", min: 22, pts: 1, reb: 2, ast: 0, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -8.45, zScores: { pts: -1.145, reb: -0.643, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: -0.637, ftImpact: -0.857, to: -1.886 } },
          { name: "Miles Bridges", min: 24, pts: 14, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 6, fga: 10, ftm: 0, fta: 1, composite: 0.06, zScores: { pts: 0.416, reb: -0.326, ast: 0.208, stl: -0.826, blk: -0.496, tpm: 0.487, fgImpact: 0.861, ftImpact: -1.197, to: 0.936 } },
          { name: "Oso Ighodaro", min: 17, pts: 4, reb: 2, ast: 3, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.29, zScores: { pts: -0.785, reb: -0.643, ast: 0.208, stl: -0.826, blk: 0.753, tpm: -0.917, fgImpact: 0.393, ftImpact: 0, to: -0.475 } },
          { name: "Devin Booker", min: 28, pts: 17, reb: 4, ast: 7, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 14, ftm: 9, fta: 9, composite: 2.99, zScores: { pts: 0.776, reb: -0.01, ast: 1.876, stl: 0.241, blk: -0.496, tpm: -0.917, fgImpact: -1.762, ftImpact: 3.055, to: 0.23 } },
          { name: "Jalen Green", min: 21, pts: 9, reb: 2, ast: 1, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 11, ftm: 0, fta: 0, composite: -2.14, zScores: { pts: -0.185, reb: -0.643, ast: -0.627, stl: 1.308, blk: -0.496, tpm: -0.215, fgImpact: -0.806, ftImpact: 0, to: -0.475 } },
          { name: "Ryan Dunn", min: 24, pts: 3, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.5, zScores: { pts: -0.905, reb: 0.624, ast: -0.627, stl: -0.826, blk: -0.496, tpm: -0.215, fgImpact: -0.281, ftImpact: 0, to: 0.23 } },
          { name: "Koa Peat", min: 8, pts: 10, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: -2.62, zScores: { pts: -0.065, reb: -0.643, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 1.142, ftImpact: 0, to: 0.23 } },
          { name: "Khaman Maluach", min: 13, pts: 7, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: -1.64, zScores: { pts: -0.425, reb: -0.01, ast: -1.044, stl: -0.826, blk: 0.753, tpm: -0.917, fgImpact: 0.749, ftImpact: -0.857, to: 0.936 } },
          { name: "Luke Kennard", min: 23, pts: 18, reb: 6, ast: 4, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 7, fga: 14, ftm: 1, fta: 1, composite: 3.55, zScores: { pts: 0.896, reb: 0.624, ast: 0.625, stl: -0.826, blk: -0.496, tpm: 1.188, fgImpact: 0.261, ftImpact: 0.339, to: 0.936 } },
          { name: "Jordan Goodwin", min: 31, pts: 14, reb: 7, ast: 6, stl: 1, blk: 1, to: 4, tpm: 1, fgm: 3, fga: 10, ftm: 7, fta: 9, composite: 0.53, zScores: { pts: 0.416, reb: 0.94, ast: 1.459, stl: 0.241, blk: 0.753, tpm: -0.215, fgImpact: -1.162, ftImpact: -0.018, to: -1.886 } },
          { name: "Collin Gillespie", min: 28, pts: 26, reb: 4, ast: 4, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 8, fga: 14, ftm: 5, fta: 6, composite: 5.41, zScores: { pts: 1.857, reb: -0.01, ast: 0.625, stl: -0.826, blk: -0.496, tpm: 2.591, fgImpact: 0.936, ftImpact: 0.5, to: 0.23 } }
        ]
      }
    },
      {
      id: "401909987",
      line: "Charlotte Hornets 105 @ LA Clippers 113 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHA", name: "Charlotte Hornets", score: 105,
        players: [
          { name: "Moussa Diabate", min: 26, pts: 12, reb: 12, ast: 2, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 5, fga: 9, ftm: 2, fta: 2, composite: 4.71, zScores: { pts: 0.176, reb: 2.523, ast: -0.21, stl: -0.826, blk: 3.25, tpm: -0.917, fgImpact: 0.505, ftImpact: 0.679, to: -0.475 } },
          { name: "Brandon Miller", min: 24, pts: 5, reb: 2, ast: 4, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 10, ftm: 2, fta: 3, composite: -3.95, zScores: { pts: -0.665, reb: -0.643, ast: 0.625, stl: 0.241, blk: -0.496, tpm: -0.215, fgImpact: -2.511, ftImpact: -0.518, to: 0.23 } },
          { name: "Naz Reid", min: 27, pts: 17, reb: 4, ast: 3, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 7, fga: 20, ftm: 0, fta: 0, composite: -0.22, zScores: { pts: 0.776, reb: -0.01, ast: 0.208, stl: 0.241, blk: -0.496, tpm: 1.188, fgImpact: -1.65, ftImpact: 0, to: -0.475 } },
          { name: "Coby White", min: 20, pts: 21, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 13, ftm: 5, fta: 5, composite: 0.32, zScores: { pts: 1.256, reb: -1.276, ast: -0.627, stl: -0.826, blk: -0.496, tpm: 0.487, fgImpact: 0.58, ftImpact: 1.697, to: -0.475 } },
          { name: "Sion James", min: 35, pts: 3, reb: 8, ast: 4, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -1.21, zScores: { pts: -0.905, reb: 1.257, ast: 0.625, stl: 0.241, blk: -0.496, tpm: -0.215, fgImpact: -1.237, ftImpact: 0, to: -0.475 } },
          { name: "Royce O'Neale", min: 19, pts: 3, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.1, zScores: { pts: -0.905, reb: -0.326, ast: -0.627, stl: -0.826, blk: -0.496, tpm: -0.215, fgImpact: 0.356, ftImpact: 0, to: 0.936 } },
          { name: "Grant Williams", min: 20, pts: 11, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -1.29, zScores: { pts: 0.056, reb: -0.643, ast: -0.627, stl: -0.826, blk: -0.496, tpm: 1.188, fgImpact: -0.169, ftImpact: 0, to: 0.23 } },
          { name: "Tidjane Salaun", min: 5, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.265, reb: -0.643, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0, ftImpact: 0, to: 0.936 } },
          { name: "Ryan Kalkbrenner", min: 18, pts: 5, reb: 5, ast: 1, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 3, fta: 4, composite: -0.21, zScores: { pts: -0.665, reb: 0.307, ast: -0.627, stl: 0.241, blk: 2.002, tpm: -0.917, fgImpact: -0.6, ftImpact: -0.179, to: 0.23 } },
          { name: "Grayson Allen", min: 25, pts: 12, reb: 5, ast: 4, stl: 2, blk: 0, to: 4, tpm: 2, fgm: 3, fga: 10, ftm: 4, fta: 4, composite: 0.72, zScores: { pts: 0.176, reb: 0.307, ast: 0.625, stl: 1.308, blk: -0.496, tpm: 0.487, fgImpact: -1.162, ftImpact: 1.358, to: -1.886 } },
          { name: "Christian Anderson", min: 18, pts: 16, reb: 3, ast: 2, stl: 2, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 10, ftm: 2, fta: 2, composite: 4.62, zScores: { pts: 0.656, reb: -0.326, ast: -0.21, stl: 1.308, blk: -0.496, tpm: 1.89, fgImpact: 0.187, ftImpact: 0.679, to: 0.936 } },
          { name: "Liam McNeeley", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.89, zScores: { pts: -1.265, reb: -1.276, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0, ftImpact: 0, to: 0.936 } }
        ]
      },
      home: {
        abbr: "LAC", name: "LA Clippers", score: 113,
        players: [
          { name: "Derrick Jones Jr.", min: 26, pts: 13, reb: 4, ast: 1, stl: 0, blk: 1, to: 3, tpm: 3, fgm: 5, fga: 5, ftm: 0, fta: 0, composite: 1.37, zScores: { pts: 0.296, reb: -0.01, ast: -0.627, stl: -0.826, blk: 0.753, tpm: 1.188, fgImpact: 1.779, ftImpact: 0, to: -1.181 } },
          { name: "Rui Hachimura", min: 22, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 2, fta: 4, composite: -7.82, zScores: { pts: -0.785, reb: -0.643, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: -0.918, ftImpact: -1.715, to: -0.475 } },
          { name: "Brook Lopez", min: 29, pts: 7, reb: 5, ast: 8, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 10, ftm: 0, fta: 2, composite: -0.37, zScores: { pts: -0.425, reb: 0.307, ast: 2.293, stl: 0.241, blk: 0.753, tpm: -0.215, fgImpact: -1.162, ftImpact: -2.394, to: 0.23 } },
          { name: "Kris Dunn", min: 18, pts: 7, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 1, composite: -1.23, zScores: { pts: -0.425, reb: -0.326, ast: -0.627, stl: 0.241, blk: -0.496, tpm: -0.917, fgImpact: 0.749, ftImpact: 0.339, to: 0.23 } },
          { name: "Darius Garland", min: 35, pts: 27, reb: 6, ast: 7, stl: 1, blk: 0, to: 6, tpm: 3, fgm: 10, fga: 18, ftm: 4, fta: 6, composite: 2.09, zScores: { pts: 1.977, reb: 0.624, ast: 1.876, stl: 0.241, blk: -0.496, tpm: 1.188, fgImpact: 1.01, ftImpact: -1.036, to: -3.297 } },
          { name: "Isaiah Jackson", min: 15, pts: 13, reb: 2, ast: 2, stl: 1, blk: 3, to: 1, tpm: 1, fgm: 4, fga: 5, ftm: 4, fta: 4, composite: 5.41, zScores: { pts: 0.296, reb: -0.643, ast: -0.21, stl: 0.241, blk: 3.25, tpm: -0.215, fgImpact: 1.105, ftImpact: 1.358, to: 0.23 } },
          { name: "Baba Miller", min: 5, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.93, zScores: { pts: -1.025, reb: -1.276, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: -0.281, ftImpact: 0, to: 0.936 } },
          { name: "Max Strus", min: 25, pts: 14, reb: 3, ast: 4, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 3.04, zScores: { pts: 0.416, reb: -0.326, ast: 0.625, stl: -0.826, blk: -0.496, tpm: 1.89, fgImpact: 0.824, ftImpact: 0, to: 0.936 } },
          { name: "Kobe Sanders", min: 20, pts: 2, reb: 6, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.04, zScores: { pts: -1.025, reb: 0.624, ast: 0.625, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0.037, ftImpact: 0, to: 0.936 } },
          { name: "Gradey Dick", min: 19, pts: 12, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: -0.97, zScores: { pts: 0.176, reb: -0.643, ast: -1.044, stl: -0.826, blk: -0.496, tpm: 0.487, fgImpact: 1.142, ftImpact: 0, to: 0.23 } },
          { name: "Keaton Wagler", min: 28, pts: 12, reb: 4, ast: 5, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 7, ftm: 4, fta: 5, composite: 1.99, zScores: { pts: 0.176, reb: -0.01, ast: 1.042, stl: 1.308, blk: -0.496, tpm: 0.487, fgImpact: -0.207, ftImpact: 0.161, to: -0.475 } }
        ]
      }
    },
      {
      id: "401909988",
      line: "San Antonio Spurs 110 @ Utah Jazz 102 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SA", name: "San Antonio Spurs", score: 110,
        players: [
          { name: "Julian Champagnie", min: 24, pts: 4, reb: 5, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 6, ftm: 1, fta: 1, composite: -4.01, zScores: { pts: -0.785, reb: 0.307, ast: -0.627, stl: -0.826, blk: -0.496, tpm: -0.215, fgImpact: -1.237, ftImpact: 0.339, to: -0.475 } },
          { name: "Victor Wembanyama", min: 35, pts: 26, reb: 10, ast: 6, stl: 1, blk: 5, to: 2, tpm: 4, fgm: 10, fga: 21, ftm: 2, fta: 3, composite: 12.15, zScores: { pts: 1.857, reb: 1.89, ast: 1.459, stl: 0.241, blk: 5.747, tpm: 1.89, fgImpact: 0.055, ftImpact: -0.518, to: -0.475 } },
          { name: "Devin Vassell", min: 32, pts: 6, reb: 6, ast: 1, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 11, ftm: 0, fta: 0, composite: -0.84, zScores: { pts: -0.545, reb: 0.624, ast: -0.627, stl: 2.375, blk: -0.496, tpm: -0.917, fgImpact: -1.481, ftImpact: 0, to: 0.23 } },
          { name: "Stephon Castle", min: 35, pts: 20, reb: 4, ast: 9, stl: 4, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 11, ftm: 8, fta: 9, composite: 7.45, zScores: { pts: 1.136, reb: -0.01, ast: 2.71, stl: 3.442, blk: -0.496, tpm: -0.917, fgImpact: 0.542, ftImpact: 1.518, to: -0.475 } },
          { name: "Dylan Harper", min: 34, pts: 31, reb: 9, ast: 4, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 12, fga: 23, ftm: 5, fta: 5, composite: 6.17, zScores: { pts: 2.457, reb: 1.573, ast: 0.625, stl: 0.241, blk: -0.496, tpm: 0.487, fgImpact: 0.766, ftImpact: 1.697, to: -1.181 } },
          { name: "Harrison Barnes", min: 14, pts: 0, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.05, zScores: { pts: -1.265, reb: -1.276, ast: -0.21, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0, ftImpact: 0, to: 0.936 } },
          { name: "Keldon Johnson", min: 29, pts: 11, reb: 10, ast: 2, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 5, ftm: 2, fta: 2, composite: 4.35, zScores: { pts: 0.056, reb: 1.89, ast: -0.21, stl: 1.308, blk: -0.496, tpm: -0.215, fgImpact: 1.105, ftImpact: 0.679, to: 0.23 } },
          { name: "Carter Bryant", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.89, zScores: { pts: -1.265, reb: -0.959, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: -0.319, ftImpact: 0, to: 0.936 } },
          { name: "Luke Kornet", min: 13, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.98, zScores: { pts: -1.025, reb: -0.643, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0.037, ftImpact: 0, to: 0.936 } },
          { name: "Jordan McLaughlin", min: 19, pts: 10, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 1.04, zScores: { pts: -0.065, reb: -0.959, ast: -0.21, stl: 0.241, blk: -0.496, tpm: 0.487, fgImpact: 1.105, ftImpact: 0, to: 0.936 } }
        ]
      },
      home: {
        abbr: "UTAH", name: "Utah Jazz", score: 102,
        players: [
          { name: "Mo Bamba", min: 36, pts: 26, reb: 5, ast: 4, stl: 2, blk: 1, to: 1, tpm: 6, fgm: 10, fga: 13, ftm: 0, fta: 3, composite: 7.39, zScores: { pts: 1.857, reb: 0.307, ast: 0.625, stl: 1.308, blk: 0.753, tpm: 3.293, fgImpact: 2.603, ftImpact: -3.591, to: 0.23 } },
          { name: "Josh Green", min: 15, pts: 6, reb: 1, ast: 1, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.04, zScores: { pts: -0.545, reb: -0.959, ast: -0.627, stl: 0.241, blk: 0.753, tpm: 0.487, fgImpact: -0.244, ftImpact: 0, to: 0.936 } },
          { name: "Keyonte George", min: 34, pts: 13, reb: 4, ast: 8, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 5, fga: 17, ftm: 2, fta: 2, composite: -2.21, zScores: { pts: 0.296, reb: -0.01, ast: 2.293, stl: -0.826, blk: -0.496, tpm: -0.215, fgImpact: -2.043, ftImpact: 0.679, to: -1.886 } },
          { name: "Ace Bailey", min: 30, pts: 7, reb: 8, ast: 4, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -0.76, zScores: { pts: -0.425, reb: 1.257, ast: 0.625, stl: -0.826, blk: -0.496, tpm: -0.215, fgImpact: -0.207, ftImpact: 0, to: -0.475 } },
          { name: "Darryn Peterson", min: 34, pts: 17, reb: 5, ast: 4, stl: 1, blk: 1, to: 2, tpm: 3, fgm: 7, fga: 20, ftm: 0, fta: 0, composite: 1.77, zScores: { pts: 0.776, reb: 0.307, ast: 0.625, stl: 0.241, blk: 0.753, tpm: 1.188, fgImpact: -1.65, ftImpact: 0, to: -0.475 } },
          { name: "Brice Sensabaugh", min: 30, pts: 14, reb: 7, ast: 2, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 7, fga: 13, ftm: 0, fta: 0, composite: -0.44, zScores: { pts: 0.416, reb: 0.94, ast: -0.21, stl: -0.826, blk: 0.753, tpm: -0.917, fgImpact: 0.58, ftImpact: 0, to: -1.181 } },
          { name: "Tony Bradley", min: 12, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -3.1, zScores: { pts: -0.545, reb: -0.643, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0.43, ftImpact: 0, to: 0.936 } },
          { name: "Svi Mykhailiuk", min: 21, pts: 6, reb: 2, ast: 3, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.19, zScores: { pts: -0.545, reb: -0.643, ast: 0.208, stl: -0.826, blk: -0.496, tpm: 0.487, fgImpact: 0.393, ftImpact: 0, to: 0.23 } },
          { name: "Josh Okogie", min: 27, pts: 7, reb: 6, ast: 0, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 6, ftm: 1, fta: 1, composite: 1.53, zScores: { pts: -0.425, reb: 0.624, ast: -1.044, stl: 2.375, blk: -0.496, tpm: 0.487, fgImpact: -0.562, ftImpact: 0.339, to: 0.23 } }
        ]
      }
    },
      {
      id: "401909989",
      line: "Dallas Mavericks 94 @ Boston Celtics 131 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DAL", name: "Dallas Mavericks", score: 94,
        players: [
          { name: "Caleb Martin", min: 34, pts: 12, reb: 5, ast: 5, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 4.61, zScores: { pts: 0.176, reb: 0.307, ast: 1.042, stl: 1.308, blk: -0.496, tpm: 1.89, fgImpact: 0.149, ftImpact: 0, to: 0.23 } },
          { name: "Daniel Gafford", min: 19, pts: 3, reb: 4, ast: 2, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: 0.29, zScores: { pts: -0.905, reb: -0.01, ast: -0.21, stl: -0.826, blk: 3.25, tpm: -0.917, fgImpact: 0.037, ftImpact: 0.339, to: -0.475 } },
          { name: "P.J. Washington", min: 25, pts: 8, reb: 5, ast: 4, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 11, ftm: 2, fta: 3, composite: -3.54, zScores: { pts: -0.305, reb: 0.307, ast: 0.625, stl: -0.826, blk: 0.753, tpm: -0.917, fgImpact: -1.481, ftImpact: -0.518, to: -1.181 } },
          { name: "Naji Marshall", min: 23, pts: 13, reb: 2, ast: 2, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 4, fga: 10, ftm: 2, fta: 2, composite: -0.61, zScores: { pts: 0.296, reb: -0.643, ast: -0.21, stl: 0.241, blk: -0.496, tpm: 1.188, fgImpact: -0.488, ftImpact: 0.679, to: -1.181 } },
          { name: "Cooper Flagg", min: 27, pts: 17, reb: 3, ast: 4, stl: 1, blk: 1, to: 3, tpm: 2, fgm: 5, fga: 15, ftm: 5, fta: 5, composite: 1.67, zScores: { pts: 0.776, reb: -0.326, ast: 0.625, stl: 0.241, blk: 0.753, tpm: 0.487, fgImpact: -1.406, ftImpact: 1.697, to: -1.181 } },
          { name: "Morez Johnson Jr.", min: 26, pts: 2, reb: 6, ast: 4, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 10, ftm: 0, fta: 0, composite: -1.98, zScores: { pts: -1.025, reb: 0.624, ast: 0.625, stl: 0.241, blk: 0.753, tpm: -0.917, fgImpact: -2.511, ftImpact: 0, to: 0.23 } },
          { name: "Tobi Lawal", min: 9, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.29, zScores: { pts: -1.025, reb: -0.643, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: -0.281, ftImpact: 0, to: 0.936 } },
          { name: "Zaccharie Risacher", min: 27, pts: 18, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 8, fga: 9, ftm: 1, fta: 2, composite: 0.52, zScores: { pts: 0.896, reb: 0.307, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.215, fgImpact: 2.528, ftImpact: -0.857, to: 0.23 } },
          { name: "Moussa Cisse", min: 4, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -6.01, zScores: { pts: -1.145, reb: -0.959, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0, ftImpact: -0.857, to: 0.23 } },
          { name: "Marcus Sasser", min: 18, pts: 5, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -3, zScores: { pts: -0.665, reb: -0.959, ast: -0.21, stl: -0.826, blk: -0.496, tpm: -0.215, fgImpact: -0.562, ftImpact: 0, to: 0.936 } },
          { name: "Walter Clayton Jr.", min: 23, pts: 13, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 2.49, zScores: { pts: 0.296, reb: -0.01, ast: 0.208, stl: 0.241, blk: -0.496, tpm: 1.188, fgImpact: 0.149, ftImpact: 0.679, to: 0.23 } },
          { name: "Jett Howard", min: 7, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.43, zScores: { pts: -1.265, reb: -1.276, ast: -0.627, stl: 0.241, blk: -0.496, tpm: -0.917, fgImpact: -0.319, ftImpact: 0, to: 0.23 } }
        ]
      },
      home: {
        abbr: "BOS", name: "Boston Celtics", score: 131,
        players: [
          { name: "Paul George", min: 25, pts: 7, reb: 7, ast: 6, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 11, ftm: 0, fta: 0, composite: 0.62, zScores: { pts: -0.425, reb: 0.94, ast: 1.459, stl: 1.308, blk: -0.496, tpm: -0.215, fgImpact: -1.481, ftImpact: 0, to: -0.475 } },
          { name: "Jayson Tatum", min: 30, pts: 32, reb: 6, ast: 6, stl: 0, blk: 0, to: 2, tpm: 5, fgm: 11, fga: 18, ftm: 5, fta: 6, composite: 7.64, zScores: { pts: 2.577, reb: 0.624, ast: 1.459, stl: -0.826, blk: -0.496, tpm: 2.591, fgImpact: 1.685, ftImpact: 0.5, to: -0.475 } },
          { name: "Neemias Queta", min: 15, pts: 8, reb: 6, ast: 2, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 3, ftm: 1, fta: 2, composite: 0.97, zScores: { pts: -0.305, reb: 0.624, ast: -0.21, stl: -0.826, blk: 0.753, tpm: -0.215, fgImpact: 1.068, ftImpact: -0.857, to: 0.936 } },
          { name: "Derrick White", min: 23, pts: 16, reb: 4, ast: 2, stl: 2, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 4.62, zScores: { pts: 0.656, reb: -0.01, ast: -0.21, stl: 1.308, blk: -0.496, tpm: 1.89, fgImpact: 0.542, ftImpact: 0, to: 0.936 } },
          { name: "Jordan Walsh", min: 21, pts: 11, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 9, ftm: 1, fta: 2, composite: -1.81, zScores: { pts: 0.056, reb: -0.959, ast: -1.044, stl: 0.241, blk: -0.496, tpm: 0.487, fgImpact: -0.169, ftImpact: -0.857, to: 0.936 } },
          { name: "Sam Hauser", min: 11, pts: 8, reb: 1, ast: 0, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 0.68, zScores: { pts: -0.305, reb: -0.959, ast: -1.044, stl: 1.308, blk: -0.496, tpm: 0.487, fgImpact: 0.749, ftImpact: 0, to: 0.936 } },
          { name: "Chris Cenac Jr.", min: 7, pts: 6, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -2.79, zScores: { pts: -0.545, reb: -0.326, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0.43, ftImpact: 0, to: 0.936 } },
          { name: "Luka Garza", min: 14, pts: 2, reb: 3, ast: 5, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.28, zScores: { pts: -1.025, reb: -0.326, ast: 1.042, stl: -0.826, blk: 0.753, tpm: -0.917, fgImpact: -0.918, ftImpact: 0, to: 0.936 } },
          { name: "Mitchell Robinson", min: 15, pts: 0, reb: 7, ast: 1, stl: 0, blk: 3, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: 0.79, zScores: { pts: -1.265, reb: 0.94, ast: -0.627, stl: -0.826, blk: 3.25, tpm: -0.917, fgImpact: 0, ftImpact: 0, to: 0.23 } },
          { name: "Payton Pritchard", min: 19, pts: 10, reb: 1, ast: 6, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 1.43, zScores: { pts: -0.065, reb: -0.959, ast: 1.459, stl: 0.241, blk: -0.496, tpm: 0.487, fgImpact: -0.169, ftImpact: 0, to: 0.936 } },
          { name: "Ron Harper Jr.", min: 12, pts: 10, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: -1.18, zScores: { pts: -0.065, reb: -0.959, ast: -1.044, stl: -0.826, blk: -0.496, tpm: 0.487, fgImpact: 0.786, ftImpact: 0, to: 0.936 } },
          { name: "Devin Carter", min: 12, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.88, zScores: { pts: -1.265, reb: -0.643, ast: -0.627, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: -0.637, ftImpact: 0, to: -0.475 } },
          { name: "Baylor Scheierman", min: 18, pts: 12, reb: 5, ast: 3, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 6, ftm: 4, fta: 4, composite: 3.69, zScores: { pts: 0.176, reb: 0.307, ast: 0.208, stl: 1.308, blk: -0.496, tpm: 0.487, fgImpact: 0.112, ftImpact: 1.358, to: 0.23 } },
          { name: "Hugo Gonzalez", min: 18, pts: 9, reb: 5, ast: 2, stl: 1, blk: 0, to: 4, tpm: 2, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: -2.49, zScores: { pts: -0.185, reb: 0.307, ast: -0.21, stl: 0.241, blk: -0.496, tpm: 0.487, fgImpact: 0.112, ftImpact: -0.857, to: -1.886 } }
        ]
      }
    },
      {
      id: "401909990",
      line: "New York Knicks 112 @ Toronto Raptors 108 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "NY", name: "New York Knicks", score: 112,
        players: [
          { name: "OG Anunoby", min: 44, pts: 21, reb: 9, ast: 1, stl: 1, blk: 2, to: 3, tpm: 2, fgm: 6, fga: 12, ftm: 7, fta: 8, composite: 5.15, zScores: { pts: 1.256, reb: 1.573, ast: -0.627, stl: 0.241, blk: 2.002, tpm: 0.487, fgImpact: 0.224, ftImpact: 1.179, to: -1.181 } },
          { name: "Karl-Anthony Towns", min: 43, pts: 28, reb: 17, ast: 3, stl: 1, blk: 0, to: 4, tpm: 3, fgm: 10, fga: 21, ftm: 5, fta: 7, composite: 4.82, zScores: { pts: 2.097, reb: 4.106, ast: 0.208, stl: 0.241, blk: -0.496, tpm: 1.188, fgImpact: 0.055, ftImpact: -0.697, to: -1.886 } },
          { name: "Josh Hart", min: 26, pts: 0, reb: 5, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -1.93, zScores: { pts: -1.265, reb: 0.307, ast: -0.21, stl: 1.308, blk: -0.496, tpm: -0.917, fgImpact: -1.593, ftImpact: 0, to: 0.936 } },
          { name: "Mikal Bridges", min: 32, pts: 5, reb: 7, ast: 3, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: 0.05, zScores: { pts: -0.665, reb: 0.94, ast: 0.208, stl: 1.308, blk: 0.753, tpm: -0.917, fgImpact: -0.244, ftImpact: -0.857, to: -0.475 } },
          { name: "Jalen Brunson", min: 41, pts: 28, reb: 1, ast: 9, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 9, fga: 22, ftm: 7, fta: 8, composite: 4.55, zScores: { pts: 2.097, reb: -0.959, ast: 2.71, stl: 0.241, blk: -0.496, tpm: 1.188, fgImpact: -0.938, ftImpact: 1.179, to: -0.475 } },
          { name: "Andre Drummond", min: 7, pts: 2, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.09, zScores: { pts: -1.025, reb: -0.326, ast: -1.044, stl: -0.826, blk: 0.753, tpm: -0.917, fgImpact: 0.356, ftImpact: 0, to: 0.936 } },
          { name: "James Wiseman", min: 3, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.94, zScores: { pts: -1.265, reb: -0.326, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0, ftImpact: 0, to: 0.936 } },
          { name: "Jordan Clarkson", min: 7, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.36, zScores: { pts: -1.025, reb: -0.643, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0.356, ftImpact: 0, to: 0.23 } },
          { name: "Landry Shamet", min: 30, pts: 23, reb: 2, ast: 0, stl: 1, blk: 1, to: 2, tpm: 4, fgm: 8, fga: 12, ftm: 3, fta: 3, composite: 4.81, zScores: { pts: 1.497, reb: -0.643, ast: -1.044, stl: 0.241, blk: 0.753, tpm: 1.89, fgImpact: 1.573, ftImpact: 1.018, to: -0.475 } },
          { name: "Jose Alvarado", min: 2, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.11, zScores: { pts: -1.265, reb: -1.276, ast: -0.627, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: -0.637, ftImpact: 0, to: 0.936 } },
          { name: "Miles McBride", min: 14, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.79, zScores: { pts: -0.905, reb: -0.959, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.215, fgImpact: -0.281, ftImpact: 0, to: 0.936 } },
          { name: "Tyler Kolek", min: 16, pts: 0, reb: 0, ast: 7, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -2.56, zScores: { pts: -1.265, reb: -1.276, ast: 1.876, stl: 0.241, blk: -0.496, tpm: -0.917, fgImpact: -0.956, ftImpact: 0, to: 0.23 } }
        ]
      },
      home: {
        abbr: "TOR", name: "Toronto Raptors", score: 108,
        players: [
          { name: "RJ Barrett", min: 37, pts: 14, reb: 5, ast: 6, stl: 0, blk: 0, to: 5, tpm: 0, fgm: 6, fga: 11, ftm: 2, fta: 2, composite: -1.43, zScores: { pts: 0.416, reb: 0.307, ast: 1.459, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0.542, ftImpact: 0.679, to: -2.592 } },
          { name: "Scottie Barnes", min: 36, pts: 30, reb: 9, ast: 4, stl: 1, blk: 2, to: 0, tpm: 4, fgm: 13, fga: 27, ftm: 0, fta: 3, composite: 6.18, zScores: { pts: 2.337, reb: 1.573, ast: 0.625, stl: 0.241, blk: 2.002, tpm: 1.89, fgImpact: 0.167, ftImpact: -3.591, to: 0.936 } },
          { name: "Collin Murray-Boyles", min: 40, pts: 6, reb: 13, ast: 2, stl: 1, blk: 2, to: 4, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: 1.64, zScores: { pts: -0.545, reb: 2.839, ast: -0.21, stl: 0.241, blk: 2.002, tpm: -0.917, fgImpact: -0.562, ftImpact: 0.679, to: -1.886 } },
          { name: "Immanuel Quickley", min: 38, pts: 17, reb: 6, ast: 6, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 7, fga: 18, ftm: 0, fta: 0, composite: 3.37, zScores: { pts: 0.776, reb: 0.624, ast: 1.459, stl: 1.308, blk: -0.496, tpm: 1.188, fgImpact: -1.013, ftImpact: 0, to: -0.475 } },
          { name: "Ja'Kobe Walter", min: 36, pts: 7, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: -3.52, zScores: { pts: -0.425, reb: -0.643, ast: -0.627, stl: -0.826, blk: -0.496, tpm: -0.215, fgImpact: -1.199, ftImpact: 0.679, to: 0.23 } },
          { name: "Jamison Battle", min: 8, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.89, zScores: { pts: -1.265, reb: -0.326, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: -0.956, ftImpact: 0, to: 0.936 } },
          { name: "Allen Graves", min: 16, pts: 2, reb: 5, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.66, zScores: { pts: -1.025, reb: 0.307, ast: 0.208, stl: 0.241, blk: -0.496, tpm: -0.917, fgImpact: -0.918, ftImpact: 0, to: 0.936 } },
          { name: "Jakob Poeltl", min: 17, pts: 11, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 7, ftm: 1, fta: 3, composite: -1.41, zScores: { pts: 0.056, reb: 0.307, ast: -0.627, stl: 0.241, blk: -0.496, tpm: -0.917, fgImpact: 1.142, ftImpact: -2.054, to: 0.936 } },
          { name: "Jamal Shead", min: 26, pts: 19, reb: 2, ast: 4, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 7, fga: 12, ftm: 2, fta: 3, composite: 0.77, zScores: { pts: 1.016, reb: -0.643, ast: 0.625, stl: -0.826, blk: -0.496, tpm: 1.188, fgImpact: 0.898, ftImpact: -0.518, to: -0.475 } },
          { name: "Alijah Martin", min: 12, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 4, composite: -6.44, zScores: { pts: -1.025, reb: -0.326, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: -0.319, ftImpact: -1.715, to: 0.23 } }
        ]
      }
    },
      {
      id: "401909991",
      line: "Houston Rockets 147 @ Washington Wizards 119 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "HOU", name: "Houston Rockets", score: 147,
        players: [
          { name: "Kevin Durant", min: 30, pts: 25, reb: 4, ast: 5, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 8, fga: 13, ftm: 7, fta: 8, composite: 4.96, zScores: { pts: 1.737, reb: -0.01, ast: 1.042, stl: 0.241, blk: -0.496, tpm: 0.487, fgImpact: 1.254, ftImpact: 1.179, to: -0.475 } },
          { name: "Jabari Smith Jr.", min: 28, pts: 9, reb: 6, ast: 5, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 15, ftm: 2, fta: 2, composite: -0.65, zScores: { pts: -0.185, reb: 0.624, ast: 1.042, stl: -0.826, blk: 0.753, tpm: -0.215, fgImpact: -2.755, ftImpact: 0.679, to: 0.23 } },
          { name: "Steven Adams", min: 12, pts: 6, reb: 7, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.95, zScores: { pts: -0.545, reb: 0.94, ast: -0.627, stl: -0.826, blk: 0.753, tpm: -0.917, fgImpact: 0.749, ftImpact: 0, to: -0.475 } },
          { name: "Alperen Sengun", min: 28, pts: 19, reb: 8, ast: 8, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 8, ftm: 8, fta: 9, composite: 7.74, zScores: { pts: 1.016, reb: 1.257, ast: 2.293, stl: 1.308, blk: -0.496, tpm: -0.215, fgImpact: 0.824, ftImpact: 1.518, to: 0.23 } },
          { name: "Amen Thompson", min: 29, pts: 26, reb: 7, ast: 7, stl: 1, blk: 1, to: 3, tpm: 3, fgm: 9, fga: 11, ftm: 5, fta: 6, composite: 8.74, zScores: { pts: 1.857, reb: 0.94, ast: 1.876, stl: 0.241, blk: 0.753, tpm: 1.188, fgImpact: 2.566, ftImpact: 0.5, to: -1.181 } },
          { name: "Jae'Sean Tate", min: 8, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -3.77, zScores: { pts: -0.785, reb: -0.643, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0.712, ftImpact: 0, to: 0.23 } },
          { name: "Tari Eason", min: 30, pts: 25, reb: 7, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 10, fga: 14, ftm: 2, fta: 3, composite: 3.91, zScores: { pts: 1.737, reb: 0.94, ast: -0.627, stl: -0.826, blk: -0.496, tpm: 1.188, fgImpact: 2.284, ftImpact: -0.518, to: 0.23 } },
          { name: "Isaiah Crawford", min: 9, pts: 4, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.31, zScores: { pts: -0.785, reb: -0.643, ast: -1.044, stl: 0.241, blk: -0.496, tpm: -0.917, fgImpact: 0.393, ftImpact: 0, to: 0.936 } },
          { name: "Oscar Tshiebwe", min: 12, pts: 4, reb: 9, ast: 3, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 1.34, zScores: { pts: -0.785, reb: 1.573, ast: 0.208, stl: -0.826, blk: 0.753, tpm: -0.917, fgImpact: 0.393, ftImpact: 0, to: 0.936 } },
          { name: "Bogdan Bogdanovic", min: 22, pts: 12, reb: 3, ast: 4, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 6, ftm: 2, fta: 4, composite: -1.06, zScores: { pts: 0.176, reb: -0.326, ast: 0.625, stl: -0.826, blk: -0.496, tpm: 0.487, fgImpact: 0.786, ftImpact: -1.715, to: 0.23 } },
          { name: "Reed Sheppard", min: 26, pts: 11, reb: 1, ast: 6, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 2.62, zScores: { pts: 0.056, reb: -0.959, ast: 1.459, stl: 1.308, blk: -0.496, tpm: 1.188, fgImpact: -0.169, ftImpact: 0, to: 0.23 } },
          { name: "Bruce Thornton", min: 6, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -5.31, zScores: { pts: -1.025, reb: -1.276, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: -0.637, ftImpact: 0.679, to: 0.23 } }
        ]
      },
      home: {
        abbr: "WSH", name: "Washington Wizards", score: 119,
        players: [
          { name: "Anthony Davis", min: 31, pts: 14, reb: 8, ast: 5, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 4, fga: 11, ftm: 6, fta: 6, composite: 4.8, zScores: { pts: 0.416, reb: 1.257, ast: 1.042, stl: 0.241, blk: 2.002, tpm: -0.917, fgImpact: -0.806, ftImpact: 2.036, to: -0.475 } },
          { name: "AJ Dybantsa", min: 30, pts: 16, reb: 7, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 18, ftm: 2, fta: 4, composite: -2.68, zScores: { pts: 0.656, reb: 0.94, ast: -0.627, stl: 0.241, blk: -0.496, tpm: 0.487, fgImpact: -1.687, ftImpact: -1.715, to: -0.475 } },
          { name: "Kyshawn George", min: 30, pts: 11, reb: 2, ast: 4, stl: 3, blk: 1, to: 0, tpm: 1, fgm: 4, fga: 13, ftm: 2, fta: 4, composite: 0.73, zScores: { pts: 0.056, reb: -0.643, ast: 0.625, stl: 2.375, blk: 0.753, tpm: -0.215, fgImpact: -1.443, ftImpact: -1.715, to: 0.936 } },
          { name: "Alex Sarr", min: 27, pts: 25, reb: 9, ast: 2, stl: 0, blk: 3, to: 1, tpm: 3, fgm: 9, fga: 13, ftm: 4, fta: 8, composite: 5.44, zScores: { pts: 1.737, reb: 1.573, ast: -0.21, stl: -0.826, blk: 3.25, tpm: 1.188, fgImpact: 1.929, ftImpact: -3.43, to: 0.23 } },
          { name: "Trae Young", min: 26, pts: 0, reb: 1, ast: 8, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -2.81, zScores: { pts: -1.265, reb: -0.959, ast: 2.293, stl: 1.308, blk: -0.496, tpm: -0.917, fgImpact: -1.593, ftImpact: 0, to: -1.181 } },
          { name: "Khris Middleton", min: 9, pts: 8, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.94, zScores: { pts: -0.305, reb: -1.276, ast: -0.21, stl: -0.826, blk: -0.496, tpm: 0.487, fgImpact: 0.749, ftImpact: 0, to: 0.936 } },
          { name: "Anthony Gill", min: 6, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 1, composite: -2.92, zScores: { pts: -0.665, reb: -0.959, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0.712, ftImpact: 0.339, to: 0.936 } },
          { name: "Deandre Ayton", min: 10, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.68, zScores: { pts: -1.025, reb: -0.959, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0.356, ftImpact: 0, to: 0.23 } },
          { name: "Tre Mann", min: 11, pts: 4, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -5.2, zScores: { pts: -0.785, reb: -0.959, ast: -0.627, stl: -0.826, blk: -0.496, tpm: -0.215, fgImpact: 0.037, ftImpact: -0.857, to: -0.475 } },
          { name: "Bub Carrington", min: 23, pts: 11, reb: 0, ast: 4, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 0.36, zScores: { pts: 0.056, reb: -1.276, ast: 0.625, stl: -0.826, blk: -0.496, tpm: 1.188, fgImpact: 0.149, ftImpact: 0, to: 0.936 } },
          { name: "Bilal Coulibaly", min: 21, pts: 9, reb: 2, ast: 0, stl: 1, blk: 2, to: 0, tpm: 1, fgm: 2, fga: 7, ftm: 4, fta: 4, composite: 1.57, zScores: { pts: -0.185, reb: -0.643, ast: -1.044, stl: 0.241, blk: 2.002, tpm: -0.215, fgImpact: -0.881, ftImpact: 1.358, to: 0.936 } },
          { name: "Will Riley", min: 16, pts: 14, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 6, ftm: 4, fta: 5, composite: 1.16, zScores: { pts: 0.416, reb: -0.326, ast: -1.044, stl: 0.241, blk: -0.496, tpm: 0.487, fgImpact: 0.786, ftImpact: 0.161, to: 0.936 } }
        ]
      }
    },
      {
      id: "401909992",
      line: "Atlanta Hawks 113 @ Milwaukee Bucks 106 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ATL", name: "Atlanta Hawks", score: 113,
        players: [
          { name: "Onyeka Okongwu", min: 36, pts: 16, reb: 11, ast: 0, stl: 2, blk: 1, to: 2, tpm: 3, fgm: 6, fga: 12, ftm: 1, fta: 2, composite: 3.96, zScores: { pts: 0.656, reb: 2.206, ast: -1.044, stl: 1.308, blk: 0.753, tpm: 1.188, fgImpact: 0.224, ftImpact: -0.857, to: -0.475 } },
          { name: "Jalen Johnson", min: 35, pts: 14, reb: 11, ast: 5, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 5, fga: 13, ftm: 4, fta: 8, composite: -4.66, zScores: { pts: 0.416, reb: 2.206, ast: 1.042, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: -0.769, ftImpact: -3.43, to: -1.886 } },
          { name: "CJ McCollum", min: 30, pts: 20, reb: 4, ast: 2, stl: 4, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 10, ftm: 9, fta: 9, composite: 7.83, zScores: { pts: 1.136, reb: -0.01, ast: -0.21, stl: 3.442, blk: -0.496, tpm: -0.215, fgImpact: 0.187, ftImpact: 3.055, to: 0.936 } },
          { name: "Nickeil Alexander-Walker", min: 33, pts: 20, reb: 5, ast: 4, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 7, fga: 15, ftm: 4, fta: 5, composite: 3.18, zScores: { pts: 1.136, reb: 0.307, ast: 0.625, stl: 0.241, blk: 0.753, tpm: 0.487, fgImpact: -0.057, ftImpact: 0.161, to: -0.475 } },
          { name: "Dyson Daniels", min: 27, pts: 9, reb: 10, ast: 5, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 9, ftm: 1, fta: 2, composite: 0.44, zScores: { pts: -0.185, reb: 1.89, ast: 1.042, stl: 1.308, blk: -0.496, tpm: -0.917, fgImpact: -0.169, ftImpact: -0.857, to: -1.181 } },
          { name: "Corey Kispert", min: 16, pts: 14, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 8, ftm: 3, fta: 3, composite: 2.5, zScores: { pts: 0.416, reb: -0.326, ast: -0.627, stl: 0.241, blk: -0.496, tpm: 1.188, fgImpact: 0.149, ftImpact: 1.018, to: 0.936 } },
          { name: "Zuby Ejiofor", min: 12, pts: 4, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -2.83, zScores: { pts: -0.785, reb: -0.326, ast: -1.044, stl: 0.241, blk: -0.496, tpm: -0.215, fgImpact: -0.281, ftImpact: -0.857, to: 0.936 } },
          { name: "Luguentz Dort", min: 18, pts: 3, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -6.13, zScores: { pts: -0.905, reb: -0.01, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: -0.6, ftImpact: -0.857, to: -0.475 } },
          { name: "Aaron Wiggins", min: 24, pts: 7, reb: 3, ast: 3, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -3.11, zScores: { pts: -0.425, reb: -0.326, ast: 0.208, stl: 0.241, blk: -0.496, tpm: -0.215, fgImpact: -0.207, ftImpact: 0, to: -1.886 } },
          { name: "RayJ Dennis", min: 10, pts: 6, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 1, fta: 1, composite: -2.12, zScores: { pts: -0.545, reb: -0.959, ast: 0.208, stl: -0.826, blk: -0.496, tpm: -0.215, fgImpact: -0.562, ftImpact: 0.339, to: 0.936 } }
        ]
      },
      home: {
        abbr: "MIL", name: "Milwaukee Bucks", score: 106,
        players: [
          { name: "Kyle Kuzma", min: 22, pts: 14, reb: 6, ast: 2, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 11, ftm: 1, fta: 2, composite: -0.77, zScores: { pts: 0.416, reb: 0.624, ast: -0.21, stl: -0.826, blk: -0.496, tpm: 1.188, fgImpact: -0.132, ftImpact: -0.857, to: -0.475 } },
          { name: "Myles Turner", min: 23, pts: 8, reb: 7, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 1, fta: 1, composite: 1.11, zScores: { pts: -0.305, reb: 0.94, ast: -0.627, stl: -0.826, blk: 0.753, tpm: -0.215, fgImpact: 0.112, ftImpact: 0.339, to: 0.936 } },
          { name: "Jericho Sims", min: 11, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -4.79, zScores: { pts: -0.785, reb: -0.643, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0.393, ftImpact: 0, to: -0.475 } },
          { name: "Tyler Herro", min: 20, pts: 5, reb: 5, ast: 3, stl: 1, blk: 0, to: 5, tpm: 0, fgm: 2, fga: 13, ftm: 1, fta: 1, composite: -6.37, zScores: { pts: -0.665, reb: 0.307, ast: 0.208, stl: 0.241, blk: -0.496, tpm: -0.917, fgImpact: -2.792, ftImpact: 0.339, to: -2.592 } },
          { name: "Brayden Burries", min: 29, pts: 13, reb: 8, ast: 4, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 9, ftm: 5, fta: 6, composite: 2.66, zScores: { pts: 0.296, reb: 1.257, ast: 0.625, stl: 1.308, blk: -0.496, tpm: 0.487, fgImpact: -0.844, ftImpact: 0.5, to: -0.475 } },
          { name: "Jaime Jaquez Jr.", min: 30, pts: 6, reb: 5, ast: 4, stl: 2, blk: 0, to: 5, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -1.79, zScores: { pts: -0.545, reb: 0.307, ast: 0.625, stl: 1.308, blk: -0.496, tpm: 0.487, fgImpact: -0.881, ftImpact: 0, to: -2.592 } },
          { name: "Nate Ament", min: 17, pts: 5, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -3.48, zScores: { pts: -0.665, reb: -0.643, ast: -0.627, stl: -0.826, blk: -0.496, tpm: -0.215, fgImpact: -0.244, ftImpact: 0, to: 0.23 } },
          { name: "Kel'el Ware", min: 25, pts: 8, reb: 11, ast: 2, stl: 0, blk: 3, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 3, fta: 4, composite: 3.07, zScores: { pts: -0.305, reb: 2.206, ast: -0.21, stl: -0.826, blk: 3.25, tpm: -0.215, fgImpact: -0.881, ftImpact: -0.179, to: 0.23 } },
          { name: "Gary Trent Jr.", min: 30, pts: 18, reb: 2, ast: 1, stl: 3, blk: 0, to: 0, tpm: 4, fgm: 7, fga: 16, ftm: 0, fta: 1, composite: 2.76, zScores: { pts: 0.896, reb: -0.643, ast: -0.627, stl: 2.375, blk: -0.496, tpm: 1.89, fgImpact: -0.376, ftImpact: -1.197, to: 0.936 } },
          { name: "AJ Green", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.84, zScores: { pts: -1.265, reb: -1.276, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: -0.956, ftImpact: 0, to: 0.936 } },
          { name: "Kasparas Jakucionis", min: 26, pts: 25, reb: 5, ast: 5, stl: 3, blk: 0, to: 2, tpm: 4, fgm: 9, fga: 16, ftm: 3, fta: 3, composite: 8.37, zScores: { pts: 1.737, reb: 0.307, ast: 1.042, stl: 2.375, blk: -0.496, tpm: 1.89, fgImpact: 0.973, ftImpact: 1.018, to: -0.475 } }
        ]
      }
    },
      {
      id: "401909993",
      line: "Oklahoma City Thunder 125 @ Sacramento Kings 103 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OKC", name: "Oklahoma City Thunder", score: 125,
        players: [
          { name: "Isaiah Hartenstein", min: 18, pts: 3, reb: 11, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -1.42, zScores: { pts: -0.905, reb: 2.206, ast: -0.21, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0.356, ftImpact: -0.857, to: 0.23 } },
          { name: "Kenrich Williams", min: 19, pts: 10, reb: 1, ast: 2, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 2.11, zScores: { pts: -0.065, reb: -0.959, ast: -0.21, stl: 1.308, blk: -0.496, tpm: 0.487, fgImpact: 1.105, ftImpact: 0, to: 0.936 } },
          { name: "Shai Gilgeous-Alexander", min: 30, pts: 37, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 13, fga: 20, ftm: 7, fta: 7, composite: 8.6, zScores: { pts: 3.178, reb: -0.643, ast: -0.21, stl: -0.826, blk: -0.496, tpm: 1.89, fgImpact: 2.396, ftImpact: 2.376, to: 0.936 } },
          { name: "Jared McCain", min: 30, pts: 12, reb: 1, ast: 1, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 12, ftm: 5, fta: 6, composite: -1.88, zScores: { pts: 0.176, reb: -0.959, ast: -0.627, stl: 1.308, blk: -0.496, tpm: -0.215, fgImpact: -1.799, ftImpact: 0.5, to: 0.23 } },
          { name: "Ajay Mitchell", min: 27, pts: 14, reb: 3, ast: 5, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 14, ftm: 1, fta: 1, composite: 1.89, zScores: { pts: 0.416, reb: -0.326, ast: 1.042, stl: 1.308, blk: -0.496, tpm: -0.215, fgImpact: -0.413, ftImpact: 0.339, to: 0.23 } },
          { name: "Brooks Barnhizer", min: 4, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.82, zScores: { pts: -1.265, reb: -1.276, ast: -1.044, stl: 0.241, blk: -0.496, tpm: -0.917, fgImpact: 0, ftImpact: 0, to: 0.936 } },
          { name: "Aday Mara", min: 26, pts: 16, reb: 13, ast: 3, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 8, fga: 11, ftm: 0, fta: 0, composite: 1.47, zScores: { pts: 0.656, reb: 2.839, ast: 0.208, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 1.891, ftImpact: 0, to: -1.886 } },
          { name: "Alex Caruso", min: 18, pts: 11, reb: 2, ast: 3, stl: 4, blk: 1, to: 3, tpm: 1, fgm: 3, fga: 6, ftm: 4, fta: 4, composite: 3.89, zScores: { pts: 0.056, reb: -0.643, ast: 0.208, stl: 3.442, blk: 0.753, tpm: -0.215, fgImpact: 0.112, ftImpact: 1.358, to: -1.181 } },
          { name: "Micah Peavy", min: 13, pts: 5, reb: 3, ast: 1, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 2, fta: 4, composite: -2.85, zScores: { pts: -0.665, reb: -0.326, ast: -0.627, stl: 0.241, blk: 0.753, tpm: -0.215, fgImpact: -1.237, ftImpact: -1.715, to: 0.936 } },
          { name: "Nique Clifford", min: 24, pts: 9, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 3, fta: 4, composite: -1.22, zScores: { pts: -0.185, reb: -0.326, ast: -1.044, stl: 0.241, blk: -0.496, tpm: -0.917, fgImpact: 0.749, ftImpact: -0.179, to: 0.936 } },
          { name: "Nikola Topic", min: 13, pts: 8, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: -4.55, zScores: { pts: -0.305, reb: -1.276, ast: -1.044, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0.786, ftImpact: 0, to: -0.475 } },
          { name: "Bennett Stirtz", min: 17, pts: 0, reb: 1, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -2.56, zScores: { pts: -1.265, reb: -0.959, ast: -0.21, stl: 1.308, blk: -0.496, tpm: -0.917, fgImpact: -0.956, ftImpact: 0, to: 0.936 } }
        ]
      },
      home: {
        abbr: "SAC", name: "Sacramento Kings", score: 103,
        players: [
          { name: "Domantas Sabonis", min: 29, pts: 11, reb: 13, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 5, fta: 6, composite: 1.71, zScores: { pts: 0.056, reb: 2.839, ast: 0.208, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 0.112, ftImpact: 0.5, to: 0.23 } },
          { name: "Keegan Murray", min: 21, pts: 6, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 2, fga: 9, ftm: 0, fta: 0, composite: -3.42, zScores: { pts: -0.545, reb: -0.959, ast: -1.044, stl: -0.826, blk: 0.753, tpm: 0.487, fgImpact: -1.518, ftImpact: 0, to: 0.23 } },
          { name: "Dylan Cardwell", min: 19, pts: 10, reb: 6, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 6, ftm: 0, fta: 3, composite: -3.08, zScores: { pts: -0.065, reb: 0.624, ast: -0.21, stl: -0.826, blk: -0.496, tpm: -0.917, fgImpact: 1.461, ftImpact: -3.591, to: 0.936 } },
          { name: "Malik Monk", min: 29, pts: 14, reb: 1, ast: 10, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 13, ftm: 1, fta: 1, composite: 1.88, zScores: { pts: 0.416, reb: -0.959, ast: 3.127, stl: 0.241, blk: -0.496, tpm: -0.215, fgImpact: -0.095, ftImpact: 0.339, to: -0.475 } },
          { name: "Darius Acuff Jr.", min: 33, pts: 26, reb: 0, ast: 6, stl: 0, blk: 0, to: 9, tpm: 3, fgm: 10, fga: 25, ftm: 3, fta: 4, composite: -4.91, zScores: { pts: 1.857, reb: -1.276, ast: 1.459, stl: -0.826, blk: -0.496, tpm: 1.188, fgImpact: -1.219, ftImpact: -0.179, to: -5.414 } },
          { name: "Leaky Black", min: 29, pts: 12, reb: 9, ast: 2, stl: 4, blk: 1, to: 2, tpm: 4, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 8.25, zScores: { pts: 0.176, reb: 1.573, ast: -0.21, stl: 3.442, blk: 0.753, tpm: 1.89, fgImpact: 1.105, ftImpact: 0, to: -0.475 } },
          { name: "Alex Karaban", min: 29, pts: 0, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -2.78, zScores: { pts: -1.265, reb: 0.307, ast: -0.627, stl: 0.241, blk: -0.496, tpm: -0.917, fgImpact: -0.956, ftImpact: 0, to: 0.936 } },
          { name: "Mason Plumlee", min: 5, pts: 2, reb: 0, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -4.13, zScores: { pts: -1.025, reb: -1.276, ast: -1.044, stl: -0.826, blk: 0.753, tpm: -0.917, fgImpact: 0, ftImpact: 0.679, to: -0.475 } },
          { name: "Daeqwon Plowden", min: 24, pts: 13, reb: 2, ast: 1, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 6, ftm: 2, fta: 2, composite: 0.95, zScores: { pts: 0.296, reb: -0.643, ast: -0.627, stl: 0.241, blk: -0.496, tpm: 1.188, fgImpact: 0.786, ftImpact: 0.679, to: -0.475 } },
          { name: "Emanuel Sharp", min: 21, pts: 9, reb: 0, ast: 2, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 9, ftm: 2, fta: 2, composite: -1.71, zScores: { pts: -0.185, reb: -1.276, ast: -0.21, stl: 1.308, blk: -0.496, tpm: -0.215, fgImpact: -0.844, ftImpact: 0.679, to: -0.475 } }
        ]
      }
    }
    ]
  },
    "2026-11-16": {
    games: [
      {
      id: "401909994",
      line: "Orlando Magic 115 @ Boston Celtics 105 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ORL", name: "Orlando Magic", score: 115,
        players: [
          { name: "Franz Wagner", min: 38, pts: 21, reb: 8, ast: 9, stl: 0, blk: 1, to: 4, tpm: 0, fgm: 8, fga: 21, ftm: 5, fta: 5, composite: 2.59, zScores: { pts: 1.271, reb: 1.185, ast: 2.668, stl: -0.774, blk: 0.744, tpm: -0.883, fgImpact: -1.163, ftImpact: 1.581, to: -2.036 } },
          { name: "Wendell Carter Jr.", min: 28, pts: 10, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 10, ftm: 3, fta: 4, composite: -2.58, zScores: { pts: -0.011, reb: -0.284, ast: -0.534, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: -1.124, ftImpact: -0.046, to: 0.869 } },
          { name: "Desmond Bane", min: 39, pts: 24, reb: 8, ast: 5, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 8, fga: 13, ftm: 5, fta: 5, composite: 8.18, zScores: { pts: 1.621, reb: 1.185, ast: 1.067, stl: 0.283, blk: -0.565, tpm: 1.436, fgImpact: 1.427, ftImpact: 1.581, to: 0.143 } },
          { name: "Jalen Suggs", min: 25, pts: 12, reb: 6, ast: 4, stl: 0, blk: 2, to: 1, tpm: 2, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 4.5, zScores: { pts: 0.222, reb: 0.597, ast: 0.667, stl: -0.774, blk: 2.052, tpm: 0.663, fgImpact: 0.932, ftImpact: 0, to: 0.143 } },
          { name: "Anthony Black", min: 33, pts: 20, reb: 2, ast: 7, stl: 3, blk: 1, to: 4, tpm: 3, fgm: 7, fga: 13, ftm: 3, fta: 4, composite: 5.66, zScores: { pts: 1.155, reb: -0.578, ast: 1.868, stl: 2.396, blk: 0.744, tpm: 1.436, fgImpact: 0.723, ftImpact: -0.046, to: -2.036 } },
          { name: "Jamal Cain", min: 15, pts: 2, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 4, composite: -4.61, zScores: { pts: -0.944, reb: 0.303, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: -0.324, ftImpact: -1.358, to: 0.869 } },
          { name: "Tristan da Silva", min: 31, pts: 13, reb: 6, ast: 3, stl: 3, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 6, ftm: 2, fta: 3, composite: 4.4, zScores: { pts: 0.338, reb: 0.597, ast: 0.267, stl: 2.396, blk: -0.565, tpm: 1.436, fgImpact: 0.875, ftImpact: -0.363, to: -0.583 } },
          { name: "Goga Bitadze", min: 20, pts: 10, reb: 6, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 0.61, zScores: { pts: -0.011, reb: 0.597, ast: -0.534, stl: 0.283, blk: -0.565, tpm: -0.883, fgImpact: 1.58, ftImpact: 0, to: 0.143 } },
          { name: "Jevon Carter", min: 12, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.11, zScores: { pts: -0.828, reb: -0.578, ast: -0.534, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: -0.591, ftImpact: 0, to: 0.869 } }
        ]
      },
      home: {
        abbr: "BOS", name: "Boston Celtics", score: 105,
        players: [
          { name: "Paul George", min: 36, pts: 22, reb: 8, ast: 3, stl: 1, blk: 0, to: 1, tpm: 5, fgm: 7, fga: 13, ftm: 3, fta: 6, composite: 4.37, zScores: { pts: 1.388, reb: 1.185, ast: 0.267, stl: 0.283, blk: -0.565, tpm: 2.982, fgImpact: 0.723, ftImpact: -2.036, to: 0.143 } },
          { name: "Jayson Tatum", min: 36, pts: 24, reb: 12, ast: 4, stl: 2, blk: 1, to: 5, tpm: 3, fgm: 9, fga: 23, ftm: 3, fta: 5, composite: 3.26, zScores: { pts: 1.621, reb: 2.36, ast: 0.667, stl: 1.34, blk: 0.744, tpm: 1.436, fgImpact: -1.106, ftImpact: -1.041, to: -2.762 } },
          { name: "Luka Garza", min: 18, pts: 3, reb: 0, ast: 4, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -0.78, zScores: { pts: -0.828, reb: -1.166, ast: 0.667, stl: 0.283, blk: 0.744, tpm: -0.11, fgImpact: -1.238, ftImpact: 0, to: 0.869 } },
          { name: "Derrick White", min: 32, pts: 9, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 12, ftm: 0, fta: 1, composite: -3.19, zScores: { pts: -0.128, reb: -0.284, ast: -0.133, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: -1.067, ftImpact: -0.995, to: 0.869 } },
          { name: "Jordan Walsh", min: 17, pts: 6, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.95, zScores: { pts: -0.478, reb: -0.578, ast: -0.934, stl: 0.283, blk: -0.565, tpm: 0.663, fgImpact: -0.21, ftImpact: 0, to: 0.869 } },
          { name: "Sam Hauser", min: 25, pts: 12, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 1.83, zScores: { pts: 0.222, reb: -0.872, ast: -0.133, stl: -0.774, blk: -0.565, tpm: 2.209, fgImpact: 0.875, ftImpact: 0, to: 0.869 } },
          { name: "Chris Cenac Jr.", min: 12, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -4.19, zScores: { pts: -0.711, reb: -0.578, ast: -0.534, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0.438, ftImpact: 0, to: -0.583 } },
          { name: "Mitchell Robinson", min: 18, pts: 4, reb: 5, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 2, composite: -3.84, zScores: { pts: -0.711, reb: 0.303, ast: -0.133, stl: 0.283, blk: -0.565, tpm: -0.883, fgImpact: 0.438, ftImpact: -1.99, to: -0.583 } },
          { name: "Payton Pritchard", min: 32, pts: 21, reb: 4, ast: 5, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 7, fga: 16, ftm: 3, fta: 3, composite: 4.79, zScores: { pts: 1.271, reb: 0.01, ast: 1.067, stl: -0.774, blk: -0.565, tpm: 2.209, fgImpact: -0.249, ftImpact: 0.948, to: 0.869 } },
          { name: "Baylor Scheierman", min: 11, pts: 0, reb: 1, ast: 1, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -1.41, zScores: { pts: -1.178, reb: -0.872, ast: -0.534, stl: 2.396, blk: -0.565, tpm: -0.883, fgImpact: -0.648, ftImpact: 0, to: 0.869 } },
          { name: "Hugo Gonzalez", min: 4, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.09, zScores: { pts: -1.178, reb: -0.578, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: -0.324, ftImpact: 0, to: 0.143 } }
        ]
      }
    },
      {
      id: "401909995",
      line: "Chicago Bulls 115 @ Cleveland Cavaliers 126 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHI", name: "Chicago Bulls", score: 115,
        players: [
          { name: "Jalen Smith", min: 28, pts: 17, reb: 11, ast: 3, stl: 2, blk: 2, to: 1, tpm: 3, fgm: 6, fga: 9, ftm: 2, fta: 3, composite: 9.06, zScores: { pts: 0.805, reb: 2.066, ast: 0.267, stl: 1.34, blk: 2.052, tpm: 1.436, fgImpact: 1.313, ftImpact: -0.363, to: 0.143 } },
          { name: "Isaac Okoro", min: 32, pts: 13, reb: 6, ast: 2, stl: 4, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: 5.63, zScores: { pts: 0.338, reb: 0.597, ast: -0.133, stl: 3.453, blk: -0.565, tpm: 1.436, fgImpact: -0.363, ftImpact: 0, to: 0.869 } },
          { name: "Matas Buzelis", min: 31, pts: 23, reb: 3, ast: 0, stl: 1, blk: 1, to: 3, tpm: 3, fgm: 8, fga: 14, ftm: 4, fta: 4, composite: 3.81, zScores: { pts: 1.505, reb: -0.284, ast: -0.934, stl: 0.283, blk: 0.744, tpm: 1.436, fgImpact: 1.103, ftImpact: 1.265, to: -1.31 } },
          { name: "Norman Powell", min: 33, pts: 27, reb: 2, ast: 6, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 10, fga: 18, ftm: 7, fta: 11, composite: -0.89, zScores: { pts: 1.971, reb: -0.578, ast: 1.467, stl: 0.283, blk: -0.565, tpm: -0.883, fgImpact: 1.217, ftImpact: -1.767, to: -2.036 } },
          { name: "Josh Giddey", min: 24, pts: 4, reb: 4, ast: 8, stl: 0, blk: 1, to: 6, tpm: 1, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: -3.66, zScores: { pts: -0.711, reb: 0.01, ast: 2.268, stl: -0.774, blk: 0.744, tpm: -0.11, fgImpact: -0.914, ftImpact: -0.679, to: -3.489 } },
          { name: "Patrick Williams", min: 13, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -6.73, zScores: { pts: -1.178, reb: -1.166, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: -0.648, ftImpact: 0, to: -0.583 } },
          { name: "Leonard Miller", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.63, zScores: { pts: -1.178, reb: -1.166, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0, ftImpact: 0, to: 0.869 } },
          { name: "Noa Essengue", min: 14, pts: 1, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 1, fta: 2, composite: -4.44, zScores: { pts: -1.061, reb: -0.578, ast: -0.534, stl: 0.283, blk: -0.565, tpm: -0.883, fgImpact: -1.295, ftImpact: -0.679, to: 0.869 } },
          { name: "Nic Claxton", min: 17, pts: 8, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: -1.57, zScores: { pts: -0.245, reb: -0.578, ast: -0.534, stl: 0.283, blk: -0.565, tpm: -0.883, fgImpact: 0.171, ftImpact: 0.632, to: 0.143 } },
          { name: "Buddy Hield", min: 19, pts: 6, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -1.59, zScores: { pts: -0.478, reb: 0.01, ast: -0.133, stl: -0.774, blk: -0.565, tpm: 0.663, fgImpact: -1.181, ftImpact: 0, to: 0.869 } },
          { name: "Tre Jones", min: 23, pts: 16, reb: 2, ast: 6, stl: 4, blk: 0, to: 0, tpm: 0, fgm: 6, fga: 11, ftm: 4, fta: 4, composite: 6.38, zScores: { pts: 0.688, reb: -0.578, ast: 1.467, stl: 3.453, blk: -0.565, tpm: -0.883, fgImpact: 0.666, ftImpact: 1.265, to: 0.869 } },
          { name: "Jordan Hawkins", min: 4, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.55, zScores: { pts: -1.178, reb: -1.166, ast: -0.534, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: -0.324, ftImpact: 0, to: 0.869 } },
          { name: "Dailyn Swain", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.34, zScores: { pts: -1.178, reb: -0.872, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0, ftImpact: 0, to: 0.869 } }
        ]
      },
      home: {
        abbr: "CLE", name: "Cleveland Cavaliers", score: 126,
        players: [
          { name: "Jarrett Allen", min: 30, pts: 13, reb: 14, ast: 3, stl: 1, blk: 1, to: 4, tpm: 0, fgm: 6, fga: 9, ftm: 1, fta: 2, composite: 2.3, zScores: { pts: 0.338, reb: 2.948, ast: 0.267, stl: 0.283, blk: 0.744, tpm: -0.883, fgImpact: 1.313, ftImpact: -0.679, to: -2.036 } },
          { name: "James Harden", min: 34, pts: 9, reb: 4, ast: 10, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 10, ftm: 1, fta: 2, composite: 0.94, zScores: { pts: -0.128, reb: 0.01, ast: 3.068, stl: 0.283, blk: -0.565, tpm: 0.663, fgImpact: -1.124, ftImpact: -0.679, to: -0.583 } },
          { name: "Donovan Mitchell", min: 36, pts: 39, reb: 4, ast: 4, stl: 3, blk: 0, to: 3, tpm: 2, fgm: 16, fga: 25, ftm: 5, fta: 5, composite: 9.99, zScores: { pts: 3.37, reb: 0.01, ast: 0.667, stl: 2.396, blk: -0.565, tpm: 0.663, fgImpact: 3.178, ftImpact: 1.581, to: -1.31 } },
          { name: "Peyton Watson", min: 22, pts: 14, reb: 4, ast: 0, stl: 0, blk: 1, to: 3, tpm: 2, fgm: 5, fga: 10, ftm: 2, fta: 4, composite: -2.22, zScores: { pts: 0.455, reb: 0.01, ast: -0.934, stl: -0.774, blk: 0.744, tpm: 0.663, fgImpact: 0.285, ftImpact: -1.358, to: -1.31 } },
          { name: "Tyrese Proctor", min: 29, pts: 17, reb: 3, ast: 2, stl: 2, blk: 1, to: 4, tpm: 2, fgm: 6, fga: 13, ftm: 3, fta: 5, composite: 0.07, zScores: { pts: 0.805, reb: -0.284, ast: -0.133, stl: 1.34, blk: 0.744, tpm: 0.663, fgImpact: 0.018, ftImpact: -1.041, to: -2.036 } },
          { name: "Mario Hezonja", min: 15, pts: 9, reb: 4, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -0.68, zScores: { pts: -0.128, reb: 0.01, ast: -0.133, stl: 0.283, blk: -0.565, tpm: -0.11, fgImpact: 0.552, ftImpact: 0, to: -0.583 } },
          { name: "Thomas Bryant", min: 18, pts: 9, reb: 5, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 4, ftm: 1, fta: 1, composite: 2.39, zScores: { pts: -0.128, reb: 0.303, ast: 0.667, stl: 0.283, blk: -0.565, tpm: -0.883, fgImpact: 1.523, ftImpact: 0.316, to: 0.869 } },
          { name: "Norchad Omier", min: 13, pts: 4, reb: 6, ast: 2, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.88, zScores: { pts: -0.711, reb: 0.597, ast: -0.133, stl: 0.283, blk: 0.744, tpm: -0.883, fgImpact: 0.114, ftImpact: 0, to: 0.869 } },
          { name: "Craig Porter Jr.", min: 14, pts: 2, reb: 1, ast: 3, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.46, zScores: { pts: -0.944, reb: -0.872, ast: 0.267, stl: 1.34, blk: -0.565, tpm: -0.883, fgImpact: 0.057, ftImpact: 0, to: 0.143 } },
          { name: "Meleek Thomas", min: 30, pts: 10, reb: 6, ast: 3, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 13, ftm: 1, fta: 2, composite: -0.41, zScores: { pts: -0.011, reb: 0.597, ast: 0.267, stl: 1.34, blk: -0.565, tpm: -0.11, fgImpact: -1.391, ftImpact: -0.679, to: 0.143 } }
        ]
      }
    },
      {
      id: "401909996",
      line: "Memphis Grizzlies 136 @ Washington Wizards 120 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MEM", name: "Memphis Grizzlies", score: 136,
        players: [
          { name: "Cedric Coward", min: 27, pts: 18, reb: 8, ast: 6, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 7, fga: 10, ftm: 2, fta: 2, composite: 7.01, zScores: { pts: 0.921, reb: 1.185, ast: 1.467, stl: 0.283, blk: 0.744, tpm: 0.663, fgImpact: 1.694, ftImpact: 0.632, to: -0.583 } },
          { name: "Cameron Boozer", min: 29, pts: 29, reb: 7, ast: 7, stl: 0, blk: 1, to: 5, tpm: 7, fgm: 10, fga: 21, ftm: 2, fta: 2, composite: 7.58, zScores: { pts: 2.204, reb: 0.891, ast: 1.868, stl: -0.774, blk: 0.744, tpm: 4.528, fgImpact: 0.246, ftImpact: 0.632, to: -2.762 } },
          { name: "Jaylen Wells", min: 27, pts: 8, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 1.05, zScores: { pts: -0.245, reb: 0.01, ast: 0.267, stl: 0.283, blk: -0.565, tpm: 0.663, fgImpact: 0.495, ftImpact: 0, to: 0.143 } },
          { name: "Zach Edey", min: 21, pts: 23, reb: 10, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 10, fga: 15, ftm: 3, fta: 3, composite: 4.38, zScores: { pts: 1.505, reb: 1.773, ast: -0.534, stl: -0.774, blk: 0.744, tpm: -0.883, fgImpact: 2.189, ftImpact: 0.948, to: -0.583 } },
          { name: "Cam Spencer", min: 32, pts: 12, reb: 6, ast: 9, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 10, ftm: 3, fta: 3, composite: 2.71, zScores: { pts: 0.222, reb: 0.597, ast: 2.668, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: -0.42, ftImpact: 0.948, to: 0.143 } },
          { name: "Jerami Grant", min: 23, pts: 8, reb: 1, ast: 2, stl: 3, blk: 2, to: 0, tpm: 2, fgm: 3, fga: 9, ftm: 0, fta: 1, composite: 2.94, zScores: { pts: -0.245, reb: -0.872, ast: -0.133, stl: 2.396, blk: 2.052, tpm: 0.663, fgImpact: -0.8, ftImpact: -0.995, to: 0.869 } },
          { name: "Kris Murray", min: 6, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.28, zScores: { pts: -1.178, reb: -0.872, ast: -0.934, stl: 0.283, blk: -0.565, tpm: -0.883, fgImpact: 0, ftImpact: 0, to: 0.869 } },
          { name: "Olivier-Maxence Prosper", min: 16, pts: 12, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 4, ftm: 3, fta: 3, composite: 0.41, zScores: { pts: 0.222, reb: -1.166, ast: -0.534, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: 1.523, ftImpact: 0.948, to: 0.869 } },
          { name: "Taylor Hendricks", min: 19, pts: 9, reb: 3, ast: 0, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: -3.23, zScores: { pts: -0.128, reb: -0.284, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: 0.875, ftImpact: 0, to: -1.31 } },
          { name: "Karim Lopez", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.63, zScores: { pts: -1.178, reb: -1.166, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0, ftImpact: 0, to: 0.869 } },
          { name: "Quinten Post", min: 9, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -3.73, zScores: { pts: -0.595, reb: -0.284, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0.114, ftImpact: -0.679, to: 0.869 } },
          { name: "Jahmai Mashack", min: 2, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.68, zScores: { pts: -1.178, reb: -1.166, ast: -0.534, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0, ftImpact: 0, to: -0.583 } },
          { name: "Javon Small", min: 29, pts: 12, reb: 5, ast: 12, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 11, ftm: 0, fta: 1, composite: 1.26, zScores: { pts: 0.222, reb: 0.303, ast: 3.868, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0.666, ftImpact: -0.995, to: -0.583 } }
        ]
      },
      home: {
        abbr: "WSH", name: "Washington Wizards", score: 120,
        players: [
          { name: "Anthony Davis", min: 35, pts: 23, reb: 4, ast: 0, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 8, fga: 15, ftm: 7, fta: 8, composite: 4.17, zScores: { pts: 1.505, reb: 0.01, ast: -0.934, stl: 0.283, blk: 2.052, tpm: -0.883, fgImpact: 0.78, ftImpact: 1.218, to: 0.143 } },
          { name: "AJ Dybantsa", min: 32, pts: 21, reb: 5, ast: 3, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 16, ftm: 6, fta: 8, composite: 3.36, zScores: { pts: 1.271, reb: 0.303, ast: 0.267, stl: 2.396, blk: -0.565, tpm: -0.11, fgImpact: -0.249, ftImpact: -0.093, to: 0.143 } },
          { name: "Kyshawn George", min: 38, pts: 18, reb: 6, ast: 1, stl: 1, blk: 1, to: 3, tpm: 2, fgm: 7, fga: 10, ftm: 2, fta: 2, composite: 3.69, zScores: { pts: 0.921, reb: 0.597, ast: -0.534, stl: 0.283, blk: 0.744, tpm: 0.663, fgImpact: 1.694, ftImpact: 0.632, to: -1.31 } },
          { name: "Alex Sarr", min: 31, pts: 6, reb: 4, ast: 1, stl: 0, blk: 2, to: 2, tpm: 1, fgm: 2, fga: 9, ftm: 1, fta: 2, composite: -2.6, zScores: { pts: -0.478, reb: 0.01, ast: -0.534, stl: -0.774, blk: 2.052, tpm: -0.11, fgImpact: -1.505, ftImpact: -0.679, to: -0.583 } },
          { name: "Trae Young", min: 33, pts: 13, reb: 2, ast: 12, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 10, ftm: 5, fta: 6, composite: 3.95, zScores: { pts: 0.338, reb: -0.578, ast: 3.868, stl: 1.34, blk: -0.565, tpm: 0.663, fgImpact: -1.124, ftImpact: 0.586, to: -0.583 } },
          { name: "Khris Middleton", min: 18, pts: 9, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 1, fta: 1, composite: 1.19, zScores: { pts: -0.128, reb: -0.284, ast: 0.267, stl: 0.283, blk: -0.565, tpm: 0.663, fgImpact: 0.495, ftImpact: 0.316, to: 0.143 } },
          { name: "Anthony Gill", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -4.49, zScores: { pts: -0.944, reb: -1.166, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0, ftImpact: 0.632, to: 0.143 } },
          { name: "Deandre Ayton", min: 8, pts: 4, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.27, zScores: { pts: -0.711, reb: -1.166, ast: -0.534, stl: 0.283, blk: -0.565, tpm: -0.883, fgImpact: 0.438, ftImpact: 0, to: 0.869 } },
          { name: "Tre Mann", min: 2, pts: 2, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -2.31, zScores: { pts: -0.944, reb: -1.166, ast: -0.534, stl: 0.283, blk: -0.565, tpm: -0.883, fgImpact: 0, ftImpact: 0.632, to: 0.869 } },
          { name: "Bub Carrington", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.63, zScores: { pts: -1.178, reb: -1.166, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0, ftImpact: 0, to: 0.869 } },
          { name: "Bilal Coulibaly", min: 16, pts: 11, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 7, ftm: 2, fta: 3, composite: -1.64, zScores: { pts: 0.105, reb: 0.303, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: 0.552, ftImpact: -0.363, to: 0.143 } },
          { name: "Will Riley", min: 2, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.05, zScores: { pts: -0.944, reb: -0.872, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0.057, ftImpact: 0, to: 0.869 } },
          { name: "Tre Johnson", min: 21, pts: 9, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 1, fta: 2, composite: -1.69, zScores: { pts: -0.128, reb: -0.872, ast: 0.267, stl: -0.774, blk: -0.565, tpm: 0.663, fgImpact: -0.477, ftImpact: -0.679, to: 0.869 } }
        ]
      }
    },
      {
      id: "401909997",
      line: "Philadelphia 76ers 135 @ Brooklyn Nets 123 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PHI", name: "Philadelphia 76ers", score: 135,
        players: [
          { name: "Dean Wade", min: 32, pts: 8, reb: 11, ast: 1, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 1, fta: 1, composite: 4.29, zScores: { pts: -0.245, reb: 2.066, ast: -0.534, stl: 1.34, blk: 0.744, tpm: -0.11, fgImpact: -0.153, ftImpact: 0.316, to: 0.869 } },
          { name: "Joel Embiid", min: 32, pts: 37, reb: 5, ast: 1, stl: 1, blk: 2, to: 3, tpm: 2, fgm: 13, fga: 22, ftm: 9, fta: 10, composite: 8.48, zScores: { pts: 3.137, reb: 0.303, ast: -0.534, stl: 0.283, blk: 2.052, tpm: 0.663, fgImpact: 2.036, ftImpact: 1.85, to: -1.31 } },
          { name: "Jaylen Brown", min: 33, pts: 31, reb: 13, ast: 4, stl: 1, blk: 1, to: 1, tpm: 3, fgm: 9, fga: 19, ftm: 10, fta: 13, composite: 8.73, zScores: { pts: 2.437, reb: 2.654, ast: 0.667, stl: 0.283, blk: 0.744, tpm: 1.436, fgImpact: 0.189, ftImpact: 0.177, to: 0.143 } },
          { name: "Tyrese Maxey", min: 35, pts: 24, reb: 1, ast: 9, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 7, fga: 12, ftm: 6, fta: 6, composite: 6.98, zScores: { pts: 1.621, reb: -0.872, ast: 2.668, stl: 0.283, blk: -0.565, tpm: 2.209, fgImpact: 1.046, ftImpact: 1.897, to: -1.31 } },
          { name: "VJ Edgecombe", min: 33, pts: 14, reb: 9, ast: 4, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 10, ftm: 5, fta: 6, composite: 2.12, zScores: { pts: 0.455, reb: 1.479, ast: 0.667, stl: 1.34, blk: -0.565, tpm: -0.11, fgImpact: -0.42, ftImpact: 0.586, to: -1.31 } },
          { name: "Jabari Walker", min: 16, pts: 12, reb: 5, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 5, fga: 7, ftm: 1, fta: 2, composite: 1.3, zScores: { pts: 0.222, reb: 0.303, ast: -0.534, stl: -0.774, blk: 0.744, tpm: -0.11, fgImpact: 1.256, ftImpact: -0.679, to: 0.869 } },
          { name: "Kentavious Caldwell-Pope", min: 31, pts: 0, reb: 2, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -2.76, zScores: { pts: -1.178, reb: -0.578, ast: 0.267, stl: 0.283, blk: -0.565, tpm: -0.883, fgImpact: -0.971, ftImpact: 0, to: 0.869 } },
          { name: "Anfernee Simons", min: 26, pts: 9, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: -1.15, zScores: { pts: -0.128, reb: -0.872, ast: -0.133, stl: 0.283, blk: -0.565, tpm: -0.11, fgImpact: 0.228, ftImpact: 0, to: 0.143 } }
        ]
      },
      home: {
        abbr: "BKN", name: "Brooklyn Nets", score: 123,
        players: [
          { name: "Julius Randle", min: 34, pts: 33, reb: 6, ast: 1, stl: 2, blk: 1, to: 1, tpm: 2, fgm: 13, fga: 20, ftm: 5, fta: 5, composite: 9.89, zScores: { pts: 2.671, reb: 0.597, ast: -0.534, stl: 1.34, blk: 0.744, tpm: 0.663, fgImpact: 2.683, ftImpact: 1.581, to: 0.143 } },
          { name: "Michael Porter Jr.", min: 40, pts: 25, reb: 6, ast: 2, stl: 0, blk: 2, to: 1, tpm: 2, fgm: 8, fga: 15, ftm: 7, fta: 8, composite: 6.28, zScores: { pts: 1.738, reb: 0.597, ast: -0.133, stl: -0.774, blk: 2.052, tpm: 0.663, fgImpact: 0.78, ftImpact: 1.218, to: 0.143 } },
          { name: "Day'Ron Sharpe", min: 25, pts: 6, reb: 9, ast: 5, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 3, composite: 0.02, zScores: { pts: -0.478, reb: 1.479, ast: 1.067, stl: 1.34, blk: -0.565, tpm: -0.883, fgImpact: 0.171, ftImpact: -2.985, to: 0.869 } },
          { name: "Egor Demin", min: 26, pts: 9, reb: 3, ast: 4, stl: 0, blk: 1, to: 5, tpm: 2, fgm: 3, fga: 10, ftm: 1, fta: 3, composite: -4.67, zScores: { pts: -0.128, reb: -0.284, ast: 0.667, stl: -0.774, blk: 0.744, tpm: 0.663, fgImpact: -1.124, ftImpact: -1.674, to: -2.762 } },
          { name: "Nolan Traore", min: 30, pts: 23, reb: 1, ast: 4, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 12, ftm: 7, fta: 8, composite: 4.42, zScores: { pts: 1.505, reb: -0.872, ast: 0.667, stl: 1.34, blk: -0.565, tpm: 0.663, fgImpact: 1.046, ftImpact: 1.218, to: -0.583 } },
          { name: "Noah Clowney", min: 24, pts: 9, reb: 3, ast: 3, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 2, fta: 3, composite: 0.39, zScores: { pts: -0.128, reb: -0.284, ast: 0.267, stl: -0.774, blk: 0.744, tpm: -0.11, fgImpact: 0.171, ftImpact: -0.363, to: 0.869 } },
          { name: "Danny Wolf", min: 11, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 2, composite: -5.1, zScores: { pts: -0.828, reb: -0.578, ast: -0.534, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: -0.591, ftImpact: -1.99, to: 0.869 } },
          { name: "Chaney Johnson", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.63, zScores: { pts: -1.178, reb: -1.166, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0, ftImpact: 0, to: 0.869 } },
          { name: "Moritz Wagner", min: 10, pts: 4, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 2, composite: -3.85, zScores: { pts: -0.711, reb: 0.303, ast: -0.534, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0.438, ftImpact: -1.99, to: 0.869 } },
          { name: "Keon Ellis", min: 20, pts: 8, reb: 2, ast: 0, stl: 1, blk: 2, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 1.88, zScores: { pts: -0.245, reb: -0.578, ast: -0.934, stl: 0.283, blk: 2.052, tpm: 0.663, fgImpact: 0.495, ftImpact: 0, to: 0.143 } },
          { name: "Mikel Brown Jr.", min: 18, pts: 3, reb: 1, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -3.5, zScores: { pts: -0.828, reb: -0.872, ast: 1.067, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: -1.562, ftImpact: 0, to: 0.143 } }
        ]
      }
    },
      {
      id: "401909998",
      line: "Houston Rockets 110 @ Miami Heat 128 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "HOU", name: "Houston Rockets", score: 110,
        players: [
          { name: "Kevin Durant", min: 29, pts: 22, reb: 2, ast: 3, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 8, fga: 19, ftm: 4, fta: 4, composite: 2.6, zScores: { pts: 1.388, reb: -0.578, ast: 0.267, stl: -0.774, blk: 0.744, tpm: 0.663, fgImpact: -0.515, ftImpact: 1.265, to: 0.143 } },
          { name: "Jabari Smith Jr.", min: 32, pts: 12, reb: 10, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 12, ftm: 3, fta: 4, composite: -0.96, zScores: { pts: 0.222, reb: 1.773, ast: -0.534, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: -1.067, ftImpact: -0.046, to: 0.143 } },
          { name: "Tari Eason", min: 27, pts: 7, reb: 7, ast: 3, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 8, ftm: 3, fta: 3, composite: -1.91, zScores: { pts: -0.361, reb: 0.891, ast: 0.267, stl: 0.283, blk: -0.565, tpm: -0.883, fgImpact: -1.181, ftImpact: 0.948, to: -1.31 } },
          { name: "Alperen Sengun", min: 30, pts: 23, reb: 7, ast: 2, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 8, fga: 11, ftm: 6, fta: 7, composite: 3.54, zScores: { pts: 1.505, reb: 0.891, ast: -0.133, stl: 0.283, blk: -0.565, tpm: -0.11, fgImpact: 2.075, ftImpact: 0.902, to: -1.31 } },
          { name: "Fred VanVleet", min: 26, pts: 8, reb: 5, ast: 6, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: 2.23, zScores: { pts: -0.245, reb: 0.303, ast: 1.467, stl: 0.283, blk: 0.744, tpm: 0.663, fgImpact: -1.124, ftImpact: 0, to: 0.143 } },
          { name: "Jae'Sean Tate", min: 12, pts: 3, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -2.89, zScores: { pts: -0.828, reb: -0.284, ast: -0.133, stl: 0.283, blk: -0.565, tpm: -0.883, fgImpact: 0.057, ftImpact: -0.679, to: 0.143 } },
          { name: "Isaiah Crawford", min: 21, pts: 11, reb: 10, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 4, fta: 4, composite: 2.6, zScores: { pts: 0.105, reb: 1.773, ast: 0.267, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: 0.495, ftImpact: 1.265, to: 0.143 } },
          { name: "Oscar Tshiebwe", min: 6, pts: 6, reb: 6, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 2, composite: -4.39, zScores: { pts: -0.478, reb: 0.597, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0.495, ftImpact: -1.99, to: 0.143 } },
          { name: "Bogdan Bogdanovic", min: 26, pts: 6, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -3.57, zScores: { pts: -0.478, reb: -1.166, ast: -0.534, stl: -0.774, blk: -0.565, tpm: 0.663, fgImpact: -0.857, ftImpact: 0, to: 0.143 } },
          { name: "Reed Sheppard", min: 19, pts: 5, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 1, composite: -4.79, zScores: { pts: -0.595, reb: -0.578, ast: -0.133, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: -1.181, ftImpact: -0.995, to: 0.143 } },
          { name: "Bruce Thornton", min: 12, pts: 7, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 3, fta: 3, composite: -3.07, zScores: { pts: -0.361, reb: -1.166, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: -0.21, ftImpact: 0.948, to: 0.869 } }
        ]
      },
      home: {
        abbr: "MIA", name: "Miami Heat", score: 128,
        players: [
          { name: "Giannis Antetokounmpo", min: 29, pts: 20, reb: 13, ast: 6, stl: 1, blk: 3, to: 1, tpm: 0, fgm: 8, fga: 11, ftm: 4, fta: 6, composite: 9.53, zScores: { pts: 1.155, reb: 2.654, ast: 1.467, stl: 0.283, blk: 3.36, tpm: -0.883, fgImpact: 2.075, ftImpact: -0.725, to: 0.143 } },
          { name: "Myron Gardner", min: 24, pts: 14, reb: 2, ast: 3, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 5, fga: 7, ftm: 0, fta: 1, composite: 0.69, zScores: { pts: 0.455, reb: -0.578, ast: 0.267, stl: -0.774, blk: -0.565, tpm: 2.209, fgImpact: 1.256, ftImpact: -0.995, to: -0.583 } },
          { name: "Bam Adebayo", min: 16, pts: 4, reb: 1, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 4, composite: -3.31, zScores: { pts: -0.711, reb: -0.872, ast: -0.133, stl: 1.34, blk: -0.565, tpm: -0.883, fgImpact: -0.267, ftImpact: -1.358, to: 0.143 } },
          { name: "Klay Thompson", min: 22, pts: 17, reb: 0, ast: 2, stl: 0, blk: 1, to: 1, tpm: 5, fgm: 5, fga: 10, ftm: 2, fta: 2, composite: 3.52, zScores: { pts: 0.805, reb: -1.166, ast: -0.133, stl: -0.774, blk: 0.744, tpm: 2.982, fgImpact: 0.285, ftImpact: 0.632, to: 0.143 } },
          { name: "Davion Mitchell", min: 33, pts: 16, reb: 3, ast: 10, stl: 4, blk: 0, to: 0, tpm: 1, fgm: 7, fga: 15, ftm: 1, fta: 1, composite: 7.51, zScores: { pts: 0.688, reb: -0.284, ast: 3.068, stl: 3.453, blk: -0.565, tpm: -0.11, fgImpact: 0.075, ftImpact: 0.316, to: 0.869 } },
          { name: "Andrew Wiggins", min: 34, pts: 17, reb: 5, ast: 1, stl: 1, blk: 3, to: 0, tpm: 3, fgm: 6, fga: 9, ftm: 2, fta: 3, composite: 7.47, zScores: { pts: 0.805, reb: 0.303, ast: -0.534, stl: 0.283, blk: 3.36, tpm: 1.436, fgImpact: 1.313, ftImpact: -0.363, to: 0.869 } },
          { name: "Bobby Portis", min: 23, pts: 16, reb: 6, ast: 0, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 14, ftm: 0, fta: 0, composite: 2.33, zScores: { pts: 0.688, reb: 0.597, ast: -0.934, stl: 1.34, blk: -0.565, tpm: 0.663, fgImpact: 0.399, ftImpact: 0, to: 0.143 } },
          { name: "Simone Fontecchio", min: 19, pts: 10, reb: 6, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: -0.5, zScores: { pts: -0.011, reb: 0.597, ast: -0.133, stl: -0.774, blk: -0.565, tpm: 0.663, fgImpact: -0.42, ftImpact: 0, to: 0.143 } },
          { name: "Keshad Johnson", min: 3, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -1.178, reb: -0.578, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0, ftImpact: 0, to: 0.869 } },
          { name: "Nick Richards", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.63, zScores: { pts: -1.178, reb: -1.166, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0, ftImpact: 0, to: 0.869 } },
          { name: "Tre Donaldson", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.6, zScores: { pts: -1.178, reb: -1.166, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: -0.971, ftImpact: 0, to: 0.869 } },
          { name: "Ryan Conwell", min: 30, pts: 14, reb: 2, ast: 3, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 3, fga: 10, ftm: 7, fta: 8, composite: 0.57, zScores: { pts: 0.455, reb: -0.578, ast: 0.267, stl: 0.283, blk: 0.744, tpm: -0.11, fgImpact: -1.124, ftImpact: 1.218, to: -0.583 } }
        ]
      }
    },
      {
      id: "401909999",
      line: "Portland Trail Blazers 98 @ Minnesota Timberwolves 106 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "POR", name: "Portland Trail Blazers", score: 98,
        players: [
          { name: "Toumani Camara", min: 26, pts: 3, reb: 0, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 10, ftm: 1, fta: 1, composite: -4.13, zScores: { pts: -0.828, reb: -1.166, ast: -0.934, stl: 0.283, blk: 0.744, tpm: -0.883, fgImpact: -2.533, ftImpact: 0.316, to: 0.869 } },
          { name: "Deni Avdija", min: 30, pts: 27, reb: 8, ast: 4, stl: 1, blk: 1, to: 5, tpm: 3, fgm: 11, fga: 19, ftm: 2, fta: 4, composite: 3.76, zScores: { pts: 1.971, reb: 1.185, ast: 0.667, stl: 0.283, blk: 0.744, tpm: 1.436, fgImpact: 1.598, ftImpact: -1.358, to: -2.762 } },
          { name: "Donovan Clingan", min: 22, pts: 10, reb: 10, ast: 1, stl: 1, blk: 5, to: 1, tpm: 0, fgm: 5, fga: 5, ftm: 0, fta: 0, composite: 8.65, zScores: { pts: -0.011, reb: 1.773, ast: -0.534, stl: 0.283, blk: 5.977, tpm: -0.883, fgImpact: 1.904, ftImpact: 0, to: 0.143 } },
          { name: "Damian Lillard", min: 24, pts: 9, reb: 2, ast: 4, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 15, ftm: 3, fta: 3, composite: -1.04, zScores: { pts: -0.128, reb: -0.578, ast: 0.667, stl: -0.774, blk: 0.744, tpm: 0.663, fgImpact: -3.447, ftImpact: 0.948, to: 0.869 } },
          { name: "Sidy Cissoko", min: 28, pts: 5, reb: 4, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.56, zScores: { pts: -0.595, reb: 0.01, ast: 0.267, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: -0.21, ftImpact: 0, to: -0.583 } },
          { name: "John Tonje", min: 7, pts: 7, reb: 4, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: -1.62, zScores: { pts: -0.361, reb: 0.01, ast: 0.267, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: -0.857, ftImpact: 0.632, to: 0.143 } },
          { name: "Robert Williams III", min: 15, pts: 2, reb: 5, ast: 2, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -0.35, zScores: { pts: -0.944, reb: 0.303, ast: -0.133, stl: 0.283, blk: 0.744, tpm: -0.883, fgImpact: -0.591, ftImpact: 0, to: 0.869 } },
          { name: "Micah Potter", min: 7, pts: 2, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.09, zScores: { pts: -0.944, reb: 0.01, ast: -0.534, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: -0.267, ftImpact: 0, to: 0.869 } },
          { name: "Branden Carlson", min: 14, pts: 5, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.4, zScores: { pts: -0.595, reb: 0.597, ast: -0.534, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: 0.438, ftImpact: 0, to: 0.143 } },
          { name: "Yang Hansen", min: 7, pts: 0, reb: 1, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.13, zScores: { pts: -1.178, reb: -0.872, ast: 0.267, stl: 0.283, blk: -0.565, tpm: -0.883, fgImpact: -0.324, ftImpact: 0, to: 0.143 } },
          { name: "Jrue Holiday", min: 25, pts: 10, reb: 4, ast: 3, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 0.21, zScores: { pts: -0.011, reb: 0.01, ast: 0.267, stl: -0.774, blk: -0.565, tpm: 0.663, fgImpact: -0.153, ftImpact: 0.632, to: 0.143 } },
          { name: "Scoot Henderson", min: 23, pts: 10, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 11, ftm: 2, fta: 2, composite: -4.01, zScores: { pts: -0.011, reb: -0.872, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: -0.743, ftImpact: 0.632, to: 0.143 } },
          { name: "Jayson Kent", min: 11, pts: 8, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 1, composite: -2.65, zScores: { pts: -0.245, reb: -1.166, ast: -0.934, stl: -0.774, blk: -0.565, tpm: 0.663, fgImpact: 0.495, ftImpact: -0.995, to: 0.869 } }
        ]
      },
      home: {
        abbr: "MIN", name: "Minnesota Timberwolves", score: 106,
        players: [
          { name: "Jaden McDaniels", min: 31, pts: 13, reb: 6, ast: 3, stl: 2, blk: 2, to: 2, tpm: 0, fgm: 5, fga: 11, ftm: 3, fta: 3, composite: 4.04, zScores: { pts: 0.338, reb: 0.597, ast: 0.267, stl: 1.34, blk: 2.052, tpm: -0.883, fgImpact: -0.039, ftImpact: 0.948, to: -0.583 } },
          { name: "Jonathan Kuminga", min: 29, pts: 13, reb: 9, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 12, ftm: 2, fta: 2, composite: 0.25, zScores: { pts: 0.338, reb: 1.479, ast: -0.534, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: -0.363, ftImpact: 0.632, to: 0.143 } },
          { name: "Rudy Gobert", min: 32, pts: 18, reb: 15, ast: 3, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 5, fga: 10, ftm: 8, fta: 14, composite: 1.09, zScores: { pts: 0.921, reb: 3.242, ast: 0.267, stl: -0.774, blk: 2.052, tpm: -0.883, fgImpact: 0.285, ftImpact: -3.44, to: -0.583 } },
          { name: "Ayo Dosunmu", min: 30, pts: 8, reb: 5, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 11, ftm: 0, fta: 0, composite: -2.06, zScores: { pts: -0.245, reb: 0.303, ast: -0.133, stl: -0.774, blk: -0.565, tpm: 0.663, fgImpact: -1.448, ftImpact: 0, to: 0.143 } },
          { name: "LaMelo Ball", min: 24, pts: 6, reb: 5, ast: 0, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 13, ftm: 0, fta: 1, composite: -3.32, zScores: { pts: -0.478, reb: 0.303, ast: -0.934, stl: 1.34, blk: -0.565, tpm: 0.663, fgImpact: -2.8, ftImpact: -0.995, to: 0.143 } },
          { name: "Trey Lyles", min: 19, pts: 9, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: -0.94, zScores: { pts: -0.128, reb: -0.284, ast: -0.534, stl: -0.774, blk: -0.565, tpm: 0.663, fgImpact: 0.495, ftImpact: -0.679, to: 0.869 } },
          { name: "Cody Williams", min: 4, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.01, zScores: { pts: -1.178, reb: -0.872, ast: -0.934, stl: 0.283, blk: -0.565, tpm: -0.883, fgImpact: 0, ftImpact: 0, to: 0.143 } },
          { name: "Isaiah Evans", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.6, zScores: { pts: -1.178, reb: -1.166, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: -0.971, ftImpact: 0, to: 0.869 } },
          { name: "Joan Beringer", min: 16, pts: 0, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.47, zScores: { pts: -1.178, reb: 0.01, ast: -0.934, stl: -0.774, blk: 0.744, tpm: -0.883, fgImpact: -0.324, ftImpact: 0, to: 0.869 } },
          { name: "Terrence Shannon Jr.", min: 35, pts: 34, reb: 3, ast: 6, stl: 1, blk: 0, to: 4, tpm: 3, fgm: 8, fga: 11, ftm: 15, fta: 16, composite: 8.91, zScores: { pts: 2.787, reb: -0.284, ast: 1.467, stl: 0.283, blk: -0.565, tpm: 1.436, fgImpact: 2.075, ftImpact: 3.747, to: -2.036 } },
          { name: "Bones Hyland", min: 13, pts: 5, reb: 1, ast: 5, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 9, ftm: 1, fta: 1, composite: -2.61, zScores: { pts: -0.595, reb: -0.872, ast: 1.067, stl: 0.283, blk: -0.565, tpm: -0.883, fgImpact: -1.505, ftImpact: 0.316, to: 0.143 } },
          { name: "Zyon Pullin", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.66, zScores: { pts: -1.178, reb: -0.872, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: -0.324, ftImpact: 0, to: 0.869 } }
        ]
      }
    },
      {
      id: "401910000",
      line: "Golden State Warriors 94 @ New Orleans Pelicans 115 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "GS", name: "Golden State Warriors", score: 94,
        players: [
          { name: "Draymond Green", min: 25, pts: 2, reb: 8, ast: 5, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 2.05, zScores: { pts: -0.944, reb: 1.185, ast: 1.067, stl: 0.283, blk: 0.744, tpm: -0.883, fgImpact: -0.267, ftImpact: 0, to: 0.869 } },
          { name: "Yaxel Lendeborg", min: 33, pts: 28, reb: 8, ast: 3, stl: 1, blk: 2, to: 4, tpm: 2, fgm: 9, fga: 23, ftm: 8, fta: 8, composite: 5.92, zScores: { pts: 2.088, reb: 1.185, ast: 0.267, stl: 0.283, blk: 2.052, tpm: 0.663, fgImpact: -1.106, ftImpact: 2.529, to: -2.036 } },
          { name: "Al Horford", min: 14, pts: 0, reb: 5, ast: 0, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -0.53, zScores: { pts: -1.178, reb: 0.303, ast: -0.934, stl: -0.774, blk: 3.36, tpm: -0.883, fgImpact: -1.295, ftImpact: 0, to: 0.869 } },
          { name: "LJ Cryer", min: 24, pts: 7, reb: 1, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 10, ftm: 2, fta: 2, composite: -3.47, zScores: { pts: -0.361, reb: -0.872, ast: 0.267, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: -1.829, ftImpact: 0.632, to: 0.143 } },
          { name: "Brandin Podziemski", min: 30, pts: 15, reb: 6, ast: 3, stl: 1, blk: 2, to: 4, tpm: 3, fgm: 3, fga: 8, ftm: 6, fta: 7, composite: 3.6, zScores: { pts: 0.572, reb: 0.597, ast: 0.267, stl: 0.283, blk: 2.052, tpm: 1.436, fgImpact: -0.477, ftImpact: 0.902, to: -2.036 } },
          { name: "Georges Niang", min: 14, pts: 0, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -5, zScores: { pts: -1.178, reb: 0.01, ast: -0.133, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: -1.619, ftImpact: 0, to: 0.143 } },
          { name: "Graham Ike", min: 8, pts: 3, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -2.71, zScores: { pts: -0.828, reb: 0.303, ast: -0.534, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0.381, ftImpact: -0.679, to: 0.869 } },
          { name: "Malevy Leons", min: 6, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.37, zScores: { pts: -0.944, reb: -0.872, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: -0.267, ftImpact: 0, to: 0.869 } },
          { name: "Gui Santos", min: 19, pts: 12, reb: 7, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 7, fta: 8, composite: 0.36, zScores: { pts: 0.222, reb: 0.891, ast: -0.133, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: -0.534, ftImpact: 1.218, to: 0.143 } },
          { name: "Charles Bassey", min: 16, pts: 4, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -2.17, zScores: { pts: -0.711, reb: -1.166, ast: -0.934, stl: -0.774, blk: 0.744, tpm: -0.883, fgImpact: 0.057, ftImpact: 0.632, to: 0.869 } },
          { name: "Gary Payton II", min: 8, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.02, zScores: { pts: -0.944, reb: -1.166, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0.381, ftImpact: 0, to: 0.869 } },
          { name: "De'Anthony Melton", min: 21, pts: 8, reb: 2, ast: 1, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -3.49, zScores: { pts: -0.245, reb: -0.578, ast: -0.534, stl: -0.774, blk: -0.565, tpm: 0.663, fgImpact: -0.153, ftImpact: 0, to: -1.31 } },
          { name: "Will Richard", min: 23, pts: 11, reb: 3, ast: 1, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 11, ftm: 1, fta: 1, composite: 0.44, zScores: { pts: 0.105, reb: -0.284, ast: -0.534, stl: 1.34, blk: -0.565, tpm: 0.663, fgImpact: -0.743, ftImpact: 0.316, to: 0.143 } }
        ]
      },
      home: {
        abbr: "NO", name: "New Orleans Pelicans", score: 115,
        players: [
          { name: "Herbert Jones", min: 24, pts: 8, reb: 2, ast: 3, stl: 3, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 11, ftm: 0, fta: 0, composite: 1.36, zScores: { pts: -0.245, reb: -0.578, ast: 0.267, stl: 2.396, blk: -0.565, tpm: 0.663, fgImpact: -1.448, ftImpact: 0, to: 0.869 } },
          { name: "Zion Williamson", min: 25, pts: 16, reb: 6, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 6, fga: 13, ftm: 4, fta: 5, composite: 2.2, zScores: { pts: 0.688, reb: 0.597, ast: -0.133, stl: 1.34, blk: -0.565, tpm: -0.883, fgImpact: 0.018, ftImpact: 0.27, to: 0.869 } },
          { name: "Saddiq Bey", min: 33, pts: 23, reb: 6, ast: 3, stl: 1, blk: 1, to: 0, tpm: 5, fgm: 8, fga: 15, ftm: 2, fta: 2, composite: 8.66, zScores: { pts: 1.505, reb: 0.597, ast: 0.267, stl: 0.283, blk: 0.744, tpm: 2.982, fgImpact: 0.78, ftImpact: 0.632, to: 0.869 } },
          { name: "Yves Missi", min: 23, pts: 6, reb: 14, ast: 1, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 1, composite: 2.46, zScores: { pts: -0.478, reb: 2.948, ast: -0.534, stl: 2.396, blk: 0.744, tpm: -0.883, fgImpact: -0.153, ftImpact: -0.995, to: -0.583 } },
          { name: "Jeremiah Fears", min: 29, pts: 19, reb: 10, ast: 10, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 6, fga: 13, ftm: 6, fta: 7, composite: 4.04, zScores: { pts: 1.038, reb: 1.773, ast: 3.068, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: 0.018, ftImpact: 0.902, to: -1.31 } },
          { name: "Julian Reese", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.66, zScores: { pts: -1.178, reb: -0.872, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: -0.324, ftImpact: 0, to: 0.869 } },
          { name: "Malik Dia", min: 5, pts: 2, reb: 1, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.66, zScores: { pts: -0.944, reb: -0.872, ast: -0.534, stl: -0.774, blk: 0.744, tpm: -0.883, fgImpact: -0.267, ftImpact: 0, to: 0.869 } },
          { name: "Karlo Matkovic", min: 20, pts: 3, reb: 2, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 7, ftm: 1, fta: 1, composite: -5.08, zScores: { pts: -0.828, reb: -0.578, ast: -0.934, stl: -0.774, blk: 0.744, tpm: -0.883, fgImpact: -1.562, ftImpact: 0.316, to: -0.583 } },
          { name: "Derik Queen", min: 21, pts: 17, reb: 10, ast: 0, stl: 0, blk: 1, to: 0, tpm: 4, fgm: 6, fga: 9, ftm: 1, fta: 2, composite: 5.33, zScores: { pts: 0.805, reb: 1.773, ast: -0.934, stl: -0.774, blk: 0.744, tpm: 2.209, fgImpact: 1.313, ftImpact: -0.679, to: 0.869 } },
          { name: "Jordan Poole", min: 31, pts: 11, reb: 2, ast: 5, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 4, fta: 6, composite: -0.86, zScores: { pts: 0.105, reb: -0.578, ast: 1.067, stl: 0.283, blk: -0.565, tpm: -0.11, fgImpact: -0.477, ftImpact: -0.725, to: 0.143 } },
          { name: "Jaron Pierre Jr.", min: 19, pts: 10, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: -2.61, zScores: { pts: -0.011, reb: 0.01, ast: -0.934, stl: -0.774, blk: -0.565, tpm: 0.663, fgImpact: -0.42, ftImpact: 0, to: -0.583 } },
          { name: "AJ Johnson", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.95, zScores: { pts: -1.178, reb: -1.166, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: -0.324, ftImpact: 0, to: 0.869 } }
        ]
      }
    },
      {
      id: "401910001",
      line: "Phoenix Suns 117 @ Denver Nuggets 105 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PHX", name: "Phoenix Suns", score: 117,
        players: [
          { name: "Dillon Brooks", min: 27, pts: 15, reb: 4, ast: 4, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 6, fga: 17, ftm: 0, fta: 1, composite: -2.24, zScores: { pts: 0.572, reb: 0.01, ast: 0.667, stl: -0.774, blk: -0.565, tpm: 1.436, fgImpact: -1.277, ftImpact: -0.995, to: -1.31 } },
          { name: "Miles Bridges", min: 29, pts: 16, reb: 8, ast: 2, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 7, fga: 15, ftm: 0, fta: 0, composite: 3.65, zScores: { pts: 0.688, reb: 1.185, ast: -0.133, stl: 0.283, blk: 0.744, tpm: 0.663, fgImpact: 0.075, ftImpact: 0, to: 0.143 } },
          { name: "Oso Ighodaro", min: 33, pts: 8, reb: 11, ast: 3, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 8, composite: -3.19, zScores: { pts: -0.245, reb: 2.066, ast: 0.267, stl: 0.283, blk: 0.744, tpm: -0.883, fgImpact: 0.495, ftImpact: -5.337, to: -0.583 } },
          { name: "Devin Booker", min: 37, pts: 20, reb: 4, ast: 8, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 14, ftm: 9, fta: 10, composite: 3.3, zScores: { pts: 1.155, reb: 0.01, ast: 2.268, stl: 0.283, blk: -0.565, tpm: -0.11, fgImpact: -1.01, ftImpact: 1.85, to: -0.583 } },
          { name: "Jalen Green", min: 27, pts: 16, reb: 5, ast: 3, stl: 3, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 10, ftm: 4, fta: 6, composite: 2, zScores: { pts: 0.688, reb: 0.303, ast: 0.267, stl: 2.396, blk: -0.565, tpm: 0.663, fgImpact: 0.285, ftImpact: -0.725, to: -1.31 } },
          { name: "Ryan Dunn", min: 12, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.27, zScores: { pts: -0.595, reb: -0.872, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: 0.438, ftImpact: 0, to: 0.143 } },
          { name: "Koa Peat", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.34, zScores: { pts: -1.178, reb: -0.872, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0, ftImpact: 0, to: 0.869 } },
          { name: "Khaman Maluach", min: 11, pts: 4, reb: 6, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.01, zScores: { pts: -0.711, reb: 0.597, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0.114, ftImpact: 0, to: 0.143 } },
          { name: "Luke Kennard", min: 17, pts: 12, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 1.66, zScores: { pts: 0.222, reb: -0.578, ast: -0.934, stl: 0.283, blk: -0.565, tpm: 2.209, fgImpact: 0.875, ftImpact: 0, to: 0.143 } },
          { name: "Jordan Goodwin", min: 20, pts: 11, reb: 6, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 1.25, zScores: { pts: 0.105, reb: 0.597, ast: -0.133, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: 1.256, ftImpact: 0, to: 0.869 } },
          { name: "Collin Gillespie", min: 26, pts: 10, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 1.77, zScores: { pts: -0.011, reb: -0.284, ast: 0.267, stl: 0.283, blk: -0.565, tpm: 0.663, fgImpact: 0.552, ftImpact: 0, to: 0.869 } }
        ]
      },
      home: {
        abbr: "DEN", name: "Denver Nuggets", score: 105,
        players: [
          { name: "Aaron Gordon", min: 24, pts: 11, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 6, ftm: 1, fta: 2, composite: -2.36, zScores: { pts: 0.105, reb: -0.872, ast: -0.534, stl: -0.774, blk: -0.565, tpm: 0.663, fgImpact: 0.875, ftImpact: -0.679, to: -0.583 } },
          { name: "Cameron Johnson", min: 27, pts: 9, reb: 0, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 11, ftm: 1, fta: 1, composite: -4, zScores: { pts: -0.128, reb: -1.166, ast: -0.534, stl: 0.283, blk: -0.565, tpm: -0.883, fgImpact: -0.743, ftImpact: 0.316, to: -0.583 } },
          { name: "Nikola Jokic", min: 38, pts: 28, reb: 15, ast: 7, stl: 1, blk: 1, to: 7, tpm: 2, fgm: 12, fga: 21, ftm: 2, fta: 2, composite: 6.96, zScores: { pts: 2.088, reb: 3.242, ast: 1.868, stl: 0.283, blk: 0.744, tpm: 0.663, fgImpact: 1.655, ftImpact: 0.632, to: -4.215 } },
          { name: "Jamal Murray", min: 35, pts: 28, reb: 4, ast: 4, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 9, fga: 19, ftm: 9, fta: 9, composite: 5.15, zScores: { pts: 2.088, reb: 0.01, ast: 0.667, stl: 1.34, blk: -0.565, tpm: -0.11, fgImpact: 0.189, ftImpact: 2.845, to: -1.31 } },
          { name: "Christian Braun", min: 33, pts: 10, reb: 3, ast: 3, stl: 2, blk: 1, to: 2, tpm: 2, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 2.69, zScores: { pts: -0.011, reb: -0.284, ast: 0.267, stl: 1.34, blk: 0.744, tpm: 0.663, fgImpact: 0.552, ftImpact: 0, to: -0.583 } },
          { name: "Marvin Bagley III", min: 10, pts: 4, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 3, composite: -2.9, zScores: { pts: -0.711, reb: -0.578, ast: -0.934, stl: -0.774, blk: 0.744, tpm: -0.883, fgImpact: -0.267, ftImpact: -0.363, to: 0.869 } },
          { name: "Bryce Hopkins", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.98, zScores: { pts: -1.178, reb: -0.872, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: -0.648, ftImpact: 0, to: 0.869 } },
          { name: "Spencer Jones", min: 21, pts: 4, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -1.92, zScores: { pts: -0.711, reb: -0.284, ast: 0.267, stl: 0.283, blk: -0.565, tpm: -0.11, fgImpact: -0.267, ftImpact: -0.679, to: 0.143 } },
          { name: "Trevon Brazile", min: 23, pts: 9, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: -0.43, zScores: { pts: -0.128, reb: 0.01, ast: -0.934, stl: -0.774, blk: -0.565, tpm: -0.11, fgImpact: 1.199, ftImpact: 0, to: 0.869 } },
          { name: "DeMar DeRozan", min: 14, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -5.67, zScores: { pts: -0.944, reb: -0.872, ast: -0.534, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: -1.238, ftImpact: 0, to: 0.143 } },
          { name: "Tyus Jones", min: 10, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.54, zScores: { pts: -1.178, reb: -0.872, ast: -0.133, stl: -0.774, blk: -0.565, tpm: -0.883, fgImpact: 0, ftImpact: 0, to: 0.869 } }
        ]
      }
    }
    ]
  },
    "2026-11-17": {
    games: [
      {
      id: "401910002",
      line: "New York Knicks 111 @ Toronto Raptors 102 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NY", name: "New York Knicks", score: 111,
        players: [
          { name: "OG Anunoby", min: 36, pts: 16, reb: 4, ast: 0, stl: 1, blk: 2, to: 1, tpm: 1, fgm: 5, fga: 11, ftm: 5, fta: 6, composite: 2.94, zScores: { pts: 0.536, reb: -0.04, ast: -1.01, stl: 0.28, blk: 2.12, tpm: -0.217, fgImpact: -0.091, ftImpact: 1.129, to: 0.231 } },
          { name: "Karl-Anthony Towns", min: 36, pts: 16, reb: 16, ast: 8, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 7, fga: 9, ftm: 1, fta: 1, composite: 7.26, zScores: { pts: 0.536, reb: 3.233, ast: 2.236, stl: 0.28, blk: -0.6, tpm: -0.217, fgImpact: 1.929, ftImpact: 0.417, to: -0.555 } },
          { name: "Josh Hart", min: 31, pts: 5, reb: 4, ast: 2, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.01, zScores: { pts: -0.58, reb: -0.04, ast: -0.199, stl: 0.28, blk: 0.76, tpm: -0.217, fgImpact: -0.229, ftImpact: 0, to: 0.231 } },
          { name: "Mikal Bridges", min: 30, pts: 17, reb: 5, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 11, ftm: 1, fta: 2, composite: -0.58, zScores: { pts: 0.637, reb: 0.233, ast: -0.605, stl: -0.739, blk: -0.6, tpm: 0.298, fgImpact: 1.286, ftImpact: -0.54, to: -0.555 } },
          { name: "Jalen Brunson", min: 34, pts: 31, reb: 5, ast: 5, stl: 0, blk: 1, to: 2, tpm: 4, fgm: 10, fga: 22, ftm: 7, fta: 7, composite: 6.84, zScores: { pts: 2.057, reb: 0.233, ast: 1.018, stl: -0.739, blk: 0.76, tpm: 1.327, fgImpact: -0.181, ftImpact: 2.92, to: -0.555 } },
          { name: "Andre Drummond", min: 11, pts: 2, reb: 8, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.64, zScores: { pts: -0.884, reb: 1.051, ast: -1.01, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: 0.046, ftImpact: 0, to: 0.231 } },
          { name: "Jordan Clarkson", min: 8, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 1, composite: -4.62, zScores: { pts: -0.783, reb: -1.131, ast: -1.01, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: -0.275, ftImpact: 0.417, to: 0.231 } },
          { name: "Landry Shamet", min: 24, pts: 12, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: -0.02, zScores: { pts: 0.13, reb: -0.858, ast: -0.605, stl: -0.739, blk: -0.6, tpm: 0.298, fgImpact: 0.506, ftImpact: 0.834, to: 1.017 } },
          { name: "Jose Alvarado", min: 7, pts: 2, reb: 0, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.41, zScores: { pts: -0.884, reb: -1.131, ast: 0.613, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: 0.046, ftImpact: 0, to: 1.017 } },
          { name: "Miles McBride", min: 9, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.48, zScores: { pts: -0.783, reb: -1.131, ast: -0.605, stl: -0.739, blk: -0.6, tpm: -0.217, fgImpact: 0.367, ftImpact: 0, to: 0.231 } },
          { name: "Tyler Kolek", min: 13, pts: 4, reb: 1, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -3.4, zScores: { pts: -0.681, reb: -0.858, ast: 0.207, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: -0.229, ftImpact: 0, to: 0.231 } }
        ]
      },
      home: {
        abbr: "TOR", name: "Toronto Raptors", score: 102,
        players: [
          { name: "RJ Barrett", min: 39, pts: 22, reb: 5, ast: 5, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 9, fga: 17, ftm: 2, fta: 6, composite: 1.47, zScores: { pts: 1.145, reb: 0.233, ast: 1.018, stl: -0.739, blk: 0.76, tpm: 0.298, fgImpact: 0.736, ftImpact: -2.996, to: 1.017 } },
          { name: "Scottie Barnes", min: 34, pts: 20, reb: 4, ast: 2, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 7, fga: 14, ftm: 5, fta: 6, composite: 4.33, zScores: { pts: 0.942, reb: -0.04, ast: -0.199, stl: -0.739, blk: 2.12, tpm: -0.217, fgImpact: 0.323, ftImpact: 1.129, to: 1.017 } },
          { name: "Collin Murray-Boyles", min: 33, pts: 8, reb: 1, ast: 3, stl: 1, blk: 3, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 3.16, zScores: { pts: -0.275, reb: -0.858, ast: 0.207, stl: 0.28, blk: 3.48, tpm: -0.732, fgImpact: 0.827, ftImpact: 0, to: 0.231 } },
          { name: "Immanuel Quickley", min: 34, pts: 14, reb: 1, ast: 7, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 1.09, zScores: { pts: 0.333, reb: -0.858, ast: 1.83, stl: -0.739, blk: -0.6, tpm: 0.298, fgImpact: 0.598, ftImpact: 0, to: 0.231 } },
          { name: "Ja'Kobe Walter", min: 33, pts: 25, reb: 1, ast: 2, stl: 2, blk: 0, to: 1, tpm: 7, fgm: 9, fga: 15, ftm: 0, fta: 0, composite: 5.57, zScores: { pts: 1.449, reb: -0.858, ast: -0.199, stl: 1.298, blk: -0.6, tpm: 2.872, fgImpact: 1.379, ftImpact: 0, to: 0.231 } },
          { name: "Jamison Battle", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.65, zScores: { pts: -1.087, reb: -0.858, ast: -1.01, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: -0.642, ftImpact: 0, to: 1.017 } },
          { name: "Allen Graves", min: 13, pts: 3, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.55, zScores: { pts: -0.783, reb: -0.586, ast: -0.605, stl: 0.28, blk: -0.6, tpm: -0.217, fgImpact: -0.275, ftImpact: 0, to: 0.231 } },
          { name: "Jakob Poeltl", min: 18, pts: 3, reb: 6, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -1.73, zScores: { pts: -0.783, reb: 0.505, ast: -0.605, stl: 0.28, blk: -0.6, tpm: -0.732, fgImpact: -0.275, ftImpact: -0.54, to: 1.017 } },
          { name: "Jamal Shead", min: 20, pts: 7, reb: 0, ast: 6, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 2, fta: 4, composite: -3.36, zScores: { pts: -0.377, reb: -1.131, ast: 1.424, stl: -0.739, blk: -0.6, tpm: -0.217, fgImpact: -0.871, ftImpact: -1.081, to: 0.231 } },
          { name: "Alijah Martin", min: 8, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -1.087, reb: -0.586, ast: -1.01, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: 0, ftImpact: 0, to: 1.017 } }
        ]
      }
    },
      {
      id: "401910003",
      line: "Portland Trail Blazers 105 @ Minnesota Timberwolves 106 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "POR", name: "Portland Trail Blazers", score: 105,
        players: [
          { name: "Toumani Camara", min: 33, pts: 10, reb: 8, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 16, ftm: 0, fta: 0, composite: -2.59, zScores: { pts: -0.073, reb: 1.051, ast: -0.605, stl: 0.28, blk: -0.6, tpm: 0.298, fgImpact: -2.385, ftImpact: 0, to: -0.555 } },
          { name: "Donovan Clingan", min: 32, pts: 12, reb: 12, ast: 5, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 6, fga: 14, ftm: 0, fta: 3, composite: -0.98, zScores: { pts: 0.13, reb: 2.142, ast: 1.018, stl: 0.28, blk: 0.76, tpm: -0.732, fgImpact: -0.366, ftImpact: -2.873, to: -1.341 } },
          { name: "Damian Lillard", min: 31, pts: 25, reb: 3, ast: 5, stl: 1, blk: 0, to: 4, tpm: 5, fgm: 8, fga: 19, ftm: 4, fta: 5, composite: 1.67, zScores: { pts: 1.449, reb: -0.313, ast: 1.018, stl: 0.28, blk: -0.6, tpm: 1.842, fgImpact: -0.595, ftImpact: 0.711, to: -2.126 } },
          { name: "Jayson Kent", min: 27, pts: 8, reb: 3, ast: 0, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -0.23, zScores: { pts: -0.275, reb: -0.313, ast: -1.01, stl: 1.298, blk: -0.6, tpm: 0.298, fgImpact: 0.138, ftImpact: 0, to: 0.231 } },
          { name: "Sidy Cissoko", min: 32, pts: 6, reb: 5, ast: 1, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.81, zScores: { pts: -0.478, reb: 0.233, ast: -0.605, stl: 0.28, blk: 0.76, tpm: 0.298, fgImpact: 0.092, ftImpact: 0, to: 0.231 } },
          { name: "Robert Williams III", min: 16, pts: 6, reb: 8, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: 0.13, zScores: { pts: -0.478, reb: 1.051, ast: 0.613, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: 0.735, ftImpact: 0.834, to: -0.555 } },
          { name: "Micah Potter", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.087, reb: -1.131, ast: -1.01, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: 0, ftImpact: 0, to: 1.017 } },
          { name: "Branden Carlson", min: 14, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: -2.15, zScores: { pts: -0.478, reb: -0.858, ast: -1.01, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: 0.413, ftImpact: 0.834, to: 1.017 } },
          { name: "Jrue Holiday", min: 31, pts: 23, reb: 5, ast: 6, stl: 2, blk: 1, to: 2, tpm: 5, fgm: 7, fga: 19, ftm: 4, fta: 6, composite: 4.72, zScores: { pts: 1.246, reb: 0.233, ast: 1.424, stl: 1.298, blk: 0.76, tpm: 1.842, fgImpact: -1.283, ftImpact: -0.246, to: -0.555 } },
          { name: "Scoot Henderson", min: 21, pts: 9, reb: 1, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 13, ftm: 1, fta: 2, composite: -3.06, zScores: { pts: -0.174, reb: -0.858, ast: -0.605, stl: 0.28, blk: 0.76, tpm: -0.732, fgImpact: -1.421, ftImpact: -0.54, to: 0.231 } }
        ]
      },
      home: {
        abbr: "MIN", name: "Minnesota Timberwolves", score: 106,
        players: [
          { name: "Jaden McDaniels", min: 37, pts: 22, reb: 5, ast: 4, stl: 3, blk: 1, to: 2, tpm: 2, fgm: 10, fga: 16, ftm: 0, fta: 0, composite: 6.56, zScores: { pts: 1.145, reb: 0.233, ast: 0.613, stl: 2.317, blk: 0.76, tpm: 0.298, fgImpact: 1.746, ftImpact: 0, to: -0.555 } },
          { name: "Cody Williams", min: 13, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.95, zScores: { pts: -1.087, reb: -0.858, ast: -1.01, stl: 0.28, blk: -0.6, tpm: -0.732, fgImpact: -0.964, ftImpact: 0, to: 1.017 } },
          { name: "Rudy Gobert", min: 22, pts: 0, reb: 4, ast: 2, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 2, composite: -7.62, zScores: { pts: -1.087, reb: -0.04, ast: -0.199, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: -0.964, ftImpact: -1.915, to: -1.341 } },
          { name: "Ayo Dosunmu", min: 39, pts: 30, reb: 4, ast: 5, stl: 1, blk: 0, to: 4, tpm: 7, fgm: 11, fga: 19, ftm: 1, fta: 2, composite: 4.29, zScores: { pts: 1.956, reb: -0.04, ast: 1.018, stl: 0.28, blk: -0.6, tpm: 2.872, fgImpact: 1.471, ftImpact: -0.54, to: -2.126 } },
          { name: "LaMelo Ball", min: 31, pts: 18, reb: 9, ast: 2, stl: 1, blk: 0, to: 5, tpm: 3, fgm: 7, fga: 17, ftm: 1, fta: 1, composite: -0.78, zScores: { pts: 0.739, reb: 1.324, ast: -0.199, stl: 0.28, blk: -0.6, tpm: 0.813, fgImpact: -0.641, ftImpact: 0.417, to: -2.912 } },
          { name: "Trey Lyles", min: 31, pts: 8, reb: 7, ast: 4, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 2, fta: 4, composite: 0.36, zScores: { pts: -0.275, reb: 0.778, ast: 0.613, stl: -0.739, blk: 0.76, tpm: 0.298, fgImpact: -0.229, ftImpact: -1.081, to: 0.231 } },
          { name: "Joan Beringer", min: 26, pts: 3, reb: 13, ast: 0, stl: 1, blk: 4, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 6, composite: 0.6, zScores: { pts: -0.783, reb: 2.415, ast: -1.01, stl: 0.28, blk: 4.84, tpm: -0.732, fgImpact: -0.275, ftImpact: -4.37, to: 0.231 } },
          { name: "Terrence Shannon Jr.", min: 24, pts: 12, reb: 1, ast: 4, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 5, fta: 6, composite: -0.49, zScores: { pts: 0.13, reb: -0.858, ast: 0.613, stl: -0.739, blk: -0.6, tpm: -0.217, fgImpact: -0.183, ftImpact: 1.129, to: 0.231 } },
          { name: "Bones Hyland", min: 17, pts: 13, reb: 2, ast: 1, stl: 2, blk: 0, to: 3, tpm: 3, fgm: 4, fga: 9, ftm: 2, fta: 3, composite: -1.05, zScores: { pts: 0.232, reb: -0.586, ast: -0.605, stl: 1.298, blk: -0.6, tpm: 0.813, fgImpact: -0.137, ftImpact: -0.123, to: -1.341 } }
        ]
      }
    },
      {
      id: "401910004",
      line: "Detroit Pistons 105 @ San Antonio Spurs 93 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DET", name: "Detroit Pistons", score: 105,
        players: [
          { name: "John Collins", min: 23, pts: 11, reb: 1, ast: 0, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 4, fta: 4, composite: 2.13, zScores: { pts: 0.029, reb: -0.858, ast: -1.01, stl: 0.28, blk: 0.76, tpm: -0.217, fgImpact: 0.46, ftImpact: 1.669, to: 1.017 } },
          { name: "Kevin Huerter", min: 36, pts: 9, reb: 7, ast: 1, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 4, fga: 9, ftm: 1, fta: 1, composite: -3.92, zScores: { pts: -0.174, reb: 0.778, ast: -0.605, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: -0.137, ftImpact: 0.417, to: -2.126 } },
          { name: "Cade Cunningham", min: 38, pts: 27, reb: 5, ast: 6, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 12, fga: 25, ftm: 2, fta: 3, composite: 2.67, zScores: { pts: 1.652, reb: 0.233, ast: 1.424, stl: -0.739, blk: 0.76, tpm: -0.217, fgImpact: 0.232, ftImpact: -0.123, to: -0.555 } },
          { name: "Ausar Thompson", min: 29, pts: 14, reb: 9, ast: 12, stl: 5, blk: 0, to: 2, tpm: 0, fgm: 7, fga: 13, ftm: 0, fta: 0, composite: 8.63, zScores: { pts: 0.333, reb: 1.324, ast: 3.859, stl: 4.354, blk: -0.6, tpm: -0.732, fgImpact: 0.644, ftImpact: 0, to: -0.555 } },
          { name: "Daniss Jenkins", min: 38, pts: 25, reb: 5, ast: 5, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 11, fga: 21, ftm: 0, fta: 0, composite: 4.25, zScores: { pts: 1.449, reb: 0.233, ast: 1.018, stl: 0.28, blk: -0.6, tpm: 0.813, fgImpact: 0.828, ftImpact: 0, to: 0.231 } },
          { name: "Paul Reed", min: 25, pts: 10, reb: 6, ast: 5, stl: 3, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 8, ftm: 0, fta: 1, composite: 4.73, zScores: { pts: -0.073, reb: 0.505, ast: 1.018, stl: 2.317, blk: 0.76, tpm: -0.732, fgImpact: 0.873, ftImpact: -0.958, to: 1.017 } },
          { name: "Javonte Green", min: 23, pts: 6, reb: 6, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 3, composite: -2.71, zScores: { pts: -0.478, reb: 0.505, ast: -1.01, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: -0.55, ftImpact: -0.123, to: 1.017 } },
          { name: "Elijah Harkless", min: 4, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.6, zScores: { pts: -1.087, reb: -0.858, ast: -0.605, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: 0, ftImpact: 0, to: 1.017 } },
          { name: "Chaz Lanier", min: 25, pts: 3, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.84, zScores: { pts: -0.783, reb: -0.313, ast: -0.605, stl: -0.739, blk: -0.6, tpm: -0.217, fgImpact: -0.596, ftImpact: 0, to: 1.017 } }
        ]
      },
      home: {
        abbr: "SA", name: "San Antonio Spurs", score: 93,
        players: [
          { name: "Victor Wembanyama", min: 34, pts: 25, reb: 18, ast: 4, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 11, fga: 23, ftm: 2, fta: 2, composite: 6.34, zScores: { pts: 1.449, reb: 3.779, ast: 0.613, stl: 0.28, blk: 0.76, tpm: -0.217, fgImpact: 0.186, ftImpact: 0.834, to: -1.341 } },
          { name: "De'Aaron Fox", min: 34, pts: 6, reb: 2, ast: 2, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -3.78, zScores: { pts: -0.478, reb: -0.586, ast: -0.199, stl: 1.298, blk: -0.6, tpm: -0.732, fgImpact: -1.146, ftImpact: 0, to: -1.341 } },
          { name: "Devin Vassell", min: 36, pts: 12, reb: 5, ast: 4, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 10, ftm: 2, fta: 3, composite: 1.39, zScores: { pts: 0.13, reb: 0.233, ast: 0.613, stl: 0.28, blk: -0.6, tpm: 0.298, fgImpact: -0.458, ftImpact: -0.123, to: 1.017 } },
          { name: "Stephon Castle", min: 31, pts: 10, reb: 2, ast: 7, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 11, ftm: 2, fta: 4, composite: -3.76, zScores: { pts: -0.073, reb: -0.586, ast: 1.83, stl: -0.739, blk: -0.6, tpm: 0.298, fgImpact: -1.468, ftImpact: -1.081, to: -1.341 } },
          { name: "Dylan Harper", min: 35, pts: 20, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 8, fga: 14, ftm: 4, fta: 5, composite: -0.2, zScores: { pts: 0.942, reb: -0.04, ast: -0.199, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: 1.011, ftImpact: 0.711, to: -0.555 } },
          { name: "Harrison Barnes", min: 10, pts: 0, reb: 3, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -2.8, zScores: { pts: -1.087, reb: -0.313, ast: 0.613, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: -0.964, ftImpact: 0, to: 1.017 } },
          { name: "Keldon Johnson", min: 15, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -4.73, zScores: { pts: -0.681, reb: -0.586, ast: -0.605, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: -0.229, ftImpact: 0, to: -0.555 } },
          { name: "Julian Champagnie", min: 30, pts: 14, reb: 6, ast: 0, stl: 0, blk: 1, to: 0, tpm: 4, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 2.42, zScores: { pts: 0.333, reb: 0.505, ast: -1.01, stl: -0.739, blk: 0.76, tpm: 1.327, fgImpact: 0.231, ftImpact: 0, to: 1.017 } },
          { name: "Carter Bryant", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.6, zScores: { pts: -1.087, reb: -1.131, ast: -1.01, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: -0.321, ftImpact: 0, to: 1.017 } },
          { name: "Luke Kornet", min: 14, pts: 2, reb: 1, ast: 1, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.63, zScores: { pts: -0.884, reb: -0.858, ast: -0.605, stl: -0.739, blk: 2.12, tpm: -0.732, fgImpact: 0.046, ftImpact: 0, to: 1.017 } }
        ]
      }
    },
      {
      id: "401910006",
      line: "Utah Jazz 132 @ LA Clippers 107 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UTAH", name: "Utah Jazz", score: 132,
        players: [
          { name: "Mo Bamba", min: 31, pts: 15, reb: 10, ast: 3, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 6, fga: 7, ftm: 2, fta: 2, composite: 4.99, zScores: { pts: 0.435, reb: 1.597, ast: 0.207, stl: -0.739, blk: 0.76, tpm: -0.217, fgImpact: 1.883, ftImpact: 0.834, to: 0.231 } },
          { name: "Josh Green", min: 13, pts: 9, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: -3.01, zScores: { pts: -0.174, reb: -0.858, ast: -1.01, stl: -0.739, blk: -0.6, tpm: -0.217, fgImpact: 1.148, ftImpact: 0, to: -0.555 } },
          { name: "Keyonte George", min: 35, pts: 30, reb: 2, ast: 11, stl: 0, blk: 2, to: 2, tpm: 4, fgm: 10, fga: 17, ftm: 6, fta: 6, composite: 10.9, zScores: { pts: 1.956, reb: -0.586, ast: 3.453, stl: -0.739, blk: 2.12, tpm: 1.327, fgImpact: 1.425, ftImpact: 2.503, to: -0.555 } },
          { name: "Ace Bailey", min: 23, pts: 5, reb: 1, ast: 4, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -0.29, zScores: { pts: -0.58, reb: -0.858, ast: 0.613, stl: 2.317, blk: -0.6, tpm: -0.217, fgImpact: -1.192, ftImpact: 0, to: 0.231 } },
          { name: "Darryn Peterson", min: 31, pts: 13, reb: 5, ast: 2, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 10, ftm: 5, fta: 7, composite: -2.07, zScores: { pts: 0.232, reb: 0.233, ast: -0.199, stl: 0.28, blk: -0.6, tpm: 0.298, fgImpact: -1.146, ftImpact: 0.171, to: -1.341 } },
          { name: "Brice Sensabaugh", min: 35, pts: 40, reb: 11, ast: 5, stl: 0, blk: 1, to: 2, tpm: 8, fgm: 16, fga: 21, ftm: 0, fta: 1, composite: 12.02, zScores: { pts: 2.97, reb: 1.869, ast: 1.018, stl: -0.739, blk: 0.76, tpm: 3.387, fgImpact: 4.271, ftImpact: -0.958, to: -0.555 } },
          { name: "Tony Bradley", min: 17, pts: 3, reb: 7, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -4.05, zScores: { pts: -0.783, reb: 0.778, ast: -0.605, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: -0.275, ftImpact: -0.54, to: -0.555 } },
          { name: "Svi Mykhailiuk", min: 33, pts: 8, reb: 7, ast: 5, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 1.55, zScores: { pts: -0.275, reb: 0.778, ast: 1.018, stl: 0.28, blk: -0.6, tpm: 0.298, fgImpact: -0.183, ftImpact: 0, to: 0.231 } },
          { name: "Josh Okogie", min: 22, pts: 9, reb: 2, ast: 4, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 1.39, zScores: { pts: -0.174, reb: -0.586, ast: 0.613, stl: 1.298, blk: -0.6, tpm: -0.217, fgImpact: 0.827, ftImpact: 0, to: 0.231 } }
        ]
      },
      home: {
        abbr: "LAC", name: "LA Clippers", score: 107,
        players: [
          { name: "Derrick Jones Jr.", min: 28, pts: 5, reb: 1, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 6, composite: -3.63, zScores: { pts: -0.58, reb: -0.858, ast: -0.605, stl: -0.739, blk: 0.76, tpm: -0.732, fgImpact: -0.275, ftImpact: -1.621, to: 1.017 } },
          { name: "Rui Hachimura", min: 27, pts: 20, reb: 5, ast: 1, stl: 1, blk: 1, to: 1, tpm: 4, fgm: 7, fga: 10, ftm: 2, fta: 4, composite: 3.69, zScores: { pts: 0.942, reb: 0.233, ast: -0.605, stl: 0.28, blk: 0.76, tpm: 1.327, fgImpact: 1.607, ftImpact: -1.081, to: 0.231 } },
          { name: "Brook Lopez", min: 23, pts: 23, reb: 6, ast: 2, stl: 1, blk: 1, to: 1, tpm: 4, fgm: 8, fga: 16, ftm: 3, fta: 3, composite: 5.77, zScores: { pts: 1.246, reb: 0.505, ast: -0.199, stl: 0.28, blk: 0.76, tpm: 1.327, fgImpact: 0.369, ftImpact: 1.252, to: 0.231 } },
          { name: "Kris Dunn", min: 26, pts: 2, reb: 5, ast: 5, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: 1.24, zScores: { pts: -0.884, reb: 0.233, ast: 1.018, stl: 2.317, blk: 0.76, tpm: -0.732, fgImpact: -0.917, ftImpact: 0, to: -0.555 } },
          { name: "Darius Garland", min: 30, pts: 20, reb: 3, ast: 7, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 5, fga: 15, ftm: 8, fta: 8, composite: 5.99, zScores: { pts: 0.942, reb: -0.313, ast: 1.83, stl: 0.28, blk: 0.76, tpm: 0.298, fgImpact: -1.375, ftImpact: 3.338, to: 0.231 } },
          { name: "Isaiah Jackson", min: 19, pts: 8, reb: 5, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 0.65, zScores: { pts: -0.275, reb: 0.233, ast: -1.01, stl: -0.739, blk: 2.12, tpm: -0.732, fgImpact: 0.827, ftImpact: 0, to: 0.231 } },
          { name: "Baba Miller", min: 4, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.99, zScores: { pts: -0.783, reb: -1.131, ast: -1.01, stl: -0.739, blk: -0.6, tpm: -0.217, fgImpact: 0.046, ftImpact: 0, to: -0.555 } },
          { name: "Nick Martinelli", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.01, zScores: { pts: -1.087, reb: -0.858, ast: -1.01, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: 0, ftImpact: 0, to: 1.017 } },
          { name: "Max Strus", min: 21, pts: 3, reb: 2, ast: 1, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -0.69, zScores: { pts: -0.783, reb: -0.586, ast: -0.605, stl: 2.317, blk: -0.6, tpm: -0.217, fgImpact: -1.239, ftImpact: 0, to: 1.017 } },
          { name: "Kobe Sanders", min: 18, pts: 5, reb: 1, ast: 3, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 6, ftm: 1, fta: 1, composite: -1.95, zScores: { pts: -0.58, reb: -0.858, ast: 0.207, stl: 1.298, blk: -0.6, tpm: -0.732, fgImpact: -0.55, ftImpact: 0.417, to: -0.555 } },
          { name: "Cam Christie", min: 4, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -0.783, reb: -1.131, ast: -1.01, stl: -0.739, blk: -0.6, tpm: -0.217, fgImpact: -0.275, ftImpact: 0, to: 1.017 } },
          { name: "Gradey Dick", min: 17, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.52, zScores: { pts: -1.087, reb: -1.131, ast: -0.605, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: -0.642, ftImpact: 0, to: 1.017 } },
          { name: "Keaton Wagler", min: 18, pts: 15, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 9, ftm: 4, fta: 5, composite: -1.22, zScores: { pts: 0.435, reb: -0.586, ast: -1.01, stl: -0.739, blk: -0.6, tpm: -0.217, fgImpact: 0.552, ftImpact: 0.711, to: 0.231 } }
        ]
      }
    },
      {
      id: "401910005",
      line: "Charlotte Hornets 114 @ Los Angeles Lakers 118 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "CHA", name: "Charlotte Hornets", score: 114,
        players: [
          { name: "Grant Williams", min: 30, pts: 12, reb: 4, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 14, ftm: 0, fta: 0, composite: -0.98, zScores: { pts: 0.13, reb: -0.04, ast: -1.01, stl: 0.28, blk: -0.6, tpm: 0.298, fgImpact: -1.054, ftImpact: 0, to: 1.017 } },
          { name: "Moussa Diabate", min: 38, pts: 5, reb: 16, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: 1.38, zScores: { pts: -0.58, reb: 3.233, ast: -0.199, stl: -0.739, blk: 0.76, tpm: -0.732, fgImpact: 0.735, ftImpact: -0.54, to: -0.555 } },
          { name: "Brandon Miller", min: 32, pts: 28, reb: 2, ast: 4, stl: 0, blk: 1, to: 5, tpm: 5, fgm: 10, fga: 19, ftm: 3, fta: 3, composite: 2.77, zScores: { pts: 1.753, reb: -0.586, ast: 0.613, stl: -0.739, blk: 0.76, tpm: 1.842, fgImpact: 0.782, ftImpact: 1.252, to: -2.912 } },
          { name: "Naz Reid", min: 42, pts: 23, reb: 11, ast: 4, stl: 2, blk: 2, to: 0, tpm: 4, fgm: 8, fga: 18, ftm: 3, fta: 4, composite: 9.51, zScores: { pts: 1.246, reb: 1.869, ast: 0.613, stl: 1.298, blk: 2.12, tpm: 1.327, fgImpact: -0.273, ftImpact: 0.294, to: 1.017 } },
          { name: "Coby White", min: 26, pts: 19, reb: 3, ast: 4, stl: 3, blk: 0, to: 4, tpm: 2, fgm: 6, fga: 12, ftm: 5, fta: 7, composite: 1.48, zScores: { pts: 0.84, reb: -0.313, ast: 0.613, stl: 2.317, blk: -0.6, tpm: 0.298, fgImpact: 0.277, ftImpact: 0.171, to: -2.126 } },
          { name: "Royce O'Neale", min: 34, pts: 13, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 4, fga: 9, ftm: 1, fta: 1, composite: -0.7, zScores: { pts: 0.232, reb: -0.04, ast: -0.605, stl: -0.739, blk: -0.6, tpm: 1.327, fgImpact: -0.137, ftImpact: 0.417, to: -0.555 } },
          { name: "Tidjane Salaun", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.01, zScores: { pts: -1.087, reb: -0.858, ast: -1.01, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: 0, ftImpact: 0, to: 1.017 } },
          { name: "Ryan Kalkbrenner", min: 14, pts: 6, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: -0.65, zScores: { pts: -0.478, reb: -0.313, ast: -0.605, stl: 0.28, blk: -0.6, tpm: -0.732, fgImpact: 0.735, ftImpact: 0.834, to: 0.231 } },
          { name: "Sion James", min: 30, pts: 3, reb: 6, ast: 4, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 1, composite: -2.93, zScores: { pts: -0.783, reb: 0.505, ast: 0.613, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: -0.275, ftImpact: 0.417, to: -1.341 } },
          { name: "Christian Anderson", min: 14, pts: 5, reb: 1, ast: 4, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -2, zScores: { pts: -0.58, reb: -0.858, ast: 0.613, stl: 0.28, blk: -0.6, tpm: -0.217, fgImpact: -0.871, ftImpact: 0, to: 0.231 } }
        ]
      },
      home: {
        abbr: "LAL", name: "Los Angeles Lakers", score: 118,
        players: [
          { name: "Kevon Looney", min: 17, pts: 4, reb: 8, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.28, zScores: { pts: -0.681, reb: 1.051, ast: -1.01, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: 0.413, ftImpact: 0, to: 1.017 } },
          { name: "Jake LaRavia", min: 23, pts: 4, reb: 5, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.36, zScores: { pts: -0.681, reb: 0.233, ast: -0.199, stl: -0.739, blk: 0.76, tpm: -0.732, fgImpact: -0.229, ftImpact: 0, to: 0.231 } },
          { name: "Matisse Thybulle", min: 31, pts: 7, reb: 6, ast: 0, stl: 3, blk: 1, to: 1, tpm: 2, fgm: 2, fga: 6, ftm: 1, fta: 2, composite: 1.63, zScores: { pts: -0.377, reb: 0.505, ast: -1.01, stl: 2.317, blk: 0.76, tpm: 0.298, fgImpact: -0.55, ftImpact: -0.54, to: 0.231 } },
          { name: "Luka Doncic", min: 42, pts: 36, reb: 6, ast: 7, stl: 1, blk: 1, to: 5, tpm: 5, fgm: 13, fga: 34, ftm: 5, fta: 7, composite: 3.07, zScores: { pts: 2.565, reb: 0.505, ast: 1.83, stl: 0.28, blk: 0.76, tpm: 1.842, fgImpact: -1.97, ftImpact: 0.171, to: -2.912 } },
          { name: "Quentin Grimes", min: 42, pts: 47, reb: 6, ast: 3, stl: 1, blk: 0, to: 3, tpm: 10, fgm: 16, fga: 24, ftm: 5, fta: 6, composite: 11.58, zScores: { pts: 3.68, reb: 0.505, ast: 0.207, stl: 0.28, blk: -0.6, tpm: 4.416, fgImpact: 3.307, ftImpact: 1.129, to: -1.341 } },
          { name: "Jarred Vanderbilt", min: 14, pts: 4, reb: 7, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 2, composite: -3.47, zScores: { pts: -0.681, reb: 0.778, ast: -1.01, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: 0.413, ftImpact: -1.915, to: 1.017 } },
          { name: "Sandro Mamukelashvili", min: 23, pts: 3, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 8, ftm: 1, fta: 2, composite: -4.54, zScores: { pts: -0.783, reb: -0.313, ast: -0.199, stl: 0.28, blk: -0.6, tpm: -0.732, fgImpact: -1.881, ftImpact: -0.54, to: 0.231 } },
          { name: "Ziaire Williams", min: 24, pts: 0, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.91, zScores: { pts: -1.087, reb: -0.858, ast: -0.605, stl: 0.28, blk: -0.6, tpm: -0.732, fgImpact: -0.321, ftImpact: 0, to: 1.017 } },
          { name: "Adou Thiero", min: 6, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.5, zScores: { pts: -1.087, reb: -1.131, ast: -0.605, stl: 0.28, blk: -0.6, tpm: -0.732, fgImpact: -0.642, ftImpact: 0, to: 1.017 } },
          { name: "Carson Cooper", min: 18, pts: 3, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 3, fta: 6, composite: -4.02, zScores: { pts: -0.783, reb: -0.04, ast: -0.199, stl: -0.739, blk: -0.6, tpm: -0.732, fgImpact: -0.321, ftImpact: -1.621, to: 1.017 } },
          { name: "Collin Sexton", min: 25, pts: 10, reb: 4, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 12, ftm: 3, fta: 4, composite: -3.51, zScores: { pts: -0.073, reb: -0.04, ast: 0.207, stl: -0.739, blk: -0.6, tpm: -0.217, fgImpact: -1.789, ftImpact: 0.294, to: -0.555 } }
        ]
      }
    }
    ]
  },
    "2026-11-18": {
    games: [
      {
      id: "401910007",
      line: "Memphis Grizzlies 124 @ Cleveland Cavaliers 121 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MEM", name: "Memphis Grizzlies", score: 124,
        players: [
          { name: "Cedric Coward", min: 33, pts: 20, reb: 3, ast: 5, stl: 2, blk: 0, to: 2, tpm: 4, fgm: 6, fga: 11, ftm: 4, fta: 6, composite: 3.96, zScores: { pts: 1.24, reb: -0.181, ast: 1.079, stl: 1.378, blk: -0.575, tpm: 1.856, fgImpact: 0.564, ftImpact: -0.858, to: -0.539 } },
          { name: "Cameron Boozer", min: 28, pts: 18, reb: 8, ast: 5, stl: 4, blk: 1, to: 1, tpm: 1, fgm: 5, fga: 9, ftm: 7, fta: 7, composite: 11.01, zScores: { pts: 0.996, reb: 1.451, ast: 1.079, stl: 3.544, blk: 0.839, tpm: -0.157, fgImpact: 0.532, ftImpact: 2.542, to: 0.188 } },
          { name: "Jaylen Wells", min: 26, pts: 5, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.26, zScores: { pts: -0.59, reb: 0.146, ast: -0.169, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: -0.313, ftImpact: 0, to: 0.188 } },
          { name: "Zach Edey", min: 21, pts: 11, reb: 2, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 7, ftm: 1, fta: 1, composite: 0.86, zScores: { pts: 0.142, reb: -0.507, ast: -0.585, stl: 1.378, blk: -0.575, tpm: -0.828, fgImpact: 1.284, ftImpact: 0.363, to: 0.188 } },
          { name: "Cam Spencer", min: 29, pts: 26, reb: 1, ast: 7, stl: 0, blk: 1, to: 2, tpm: 5, fgm: 9, fga: 11, ftm: 3, fta: 4, composite: 7.93, zScores: { pts: 1.972, reb: -0.834, ast: 1.911, stl: -0.787, blk: 0.839, tpm: 2.526, fgImpact: 2.911, ftImpact: -0.066, to: -0.539 } },
          { name: "Jerami Grant", min: 20, pts: 8, reb: 0, ast: 1, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 3, fta: 3, composite: -1.84, zScores: { pts: -0.224, reb: -1.16, ast: -0.585, stl: -0.787, blk: 0.839, tpm: -0.157, fgImpact: -0.313, ftImpact: 1.089, to: -0.539 } },
          { name: "Kris Murray", min: 6, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -3.67, zScores: { pts: -0.59, reb: -1.16, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: -0.313, ftImpact: 0, to: 0.916 } },
          { name: "Olivier-Maxence Prosper", min: 16, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -5.2, zScores: { pts: -0.59, reb: -0.507, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.313, ftImpact: -0.792, to: 0.188 } },
          { name: "Taylor Hendricks", min: 21, pts: 18, reb: 6, ast: 2, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 6, fga: 7, ftm: 5, fta: 6, composite: 6.58, zScores: { pts: 0.996, reb: 0.799, ast: -0.169, stl: -0.787, blk: 2.253, tpm: -0.157, fgImpact: 2.066, ftImpact: 0.66, to: 0.916 } },
          { name: "Quinten Post", min: 6, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.54, zScores: { pts: -0.834, reb: -0.507, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: 0.407, ftImpact: 0, to: 0.916 } },
          { name: "Jahmai Mashack", min: 13, pts: 3, reb: 2, ast: 2, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -2.17, zScores: { pts: -0.834, reb: -0.507, ast: -0.169, stl: -0.787, blk: 0.839, tpm: -0.157, fgImpact: -1.471, ftImpact: 0, to: 0.916 } },
          { name: "Javon Small", min: 21, pts: 2, reb: 4, ast: 5, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -2.12, zScores: { pts: -0.957, reb: 0.146, ast: 1.079, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: -1.471, ftImpact: 0, to: 0.188 } }
        ]
      },
      home: {
        abbr: "CLE", name: "Cleveland Cavaliers", score: 121,
        players: [
          { name: "Mario Hezonja", min: 28, pts: 16, reb: 7, ast: 5, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 7, fga: 12, ftm: 0, fta: 0, composite: 5.08, zScores: { pts: 0.752, reb: 1.125, ast: 1.079, stl: 0.296, blk: -0.575, tpm: 0.514, fgImpact: 0.971, ftImpact: 0, to: 0.916 } },
          { name: "Jarrett Allen", min: 30, pts: 19, reb: 9, ast: 4, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 7, fga: 15, ftm: 5, fta: 5, composite: 2.12, zScores: { pts: 1.118, reb: 1.778, ast: 0.663, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: -0.156, ftImpact: 1.816, to: -1.994 } },
          { name: "James Harden", min: 36, pts: 14, reb: 6, ast: 9, stl: 0, blk: 1, to: 3, tpm: 3, fgm: 4, fga: 10, ftm: 3, fta: 3, composite: 4.48, zScores: { pts: 0.508, reb: 0.799, ast: 2.742, stl: -0.787, blk: 0.839, tpm: 1.185, fgImpact: -0.626, ftImpact: 1.089, to: -1.266 } },
          { name: "Donovan Mitchell", min: 35, pts: 34, reb: 4, ast: 3, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 14, fga: 27, ftm: 4, fta: 4, composite: 4.58, zScores: { pts: 2.949, reb: 0.146, ast: 0.247, stl: 0.296, blk: -0.575, tpm: 0.514, fgImpact: 0.815, ftImpact: 1.453, to: -1.266 } },
          { name: "Tyrese Proctor", min: 26, pts: 8, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -1.48, zScores: { pts: -0.224, reb: -0.834, ast: -0.585, stl: -0.787, blk: -0.575, tpm: 0.514, fgImpact: 0.094, ftImpact: 0, to: 0.916 } },
          { name: "Thomas Bryant", min: 12, pts: 5, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -0.63, zScores: { pts: -0.59, reb: 0.146, ast: -1.001, stl: -0.787, blk: 0.839, tpm: -0.157, fgImpact: -0.72, ftImpact: 0.726, to: 0.916 } },
          { name: "Norchad Omier", min: 16, pts: 2, reb: 7, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: 0.42, zScores: { pts: -0.957, reb: 1.125, ast: -1.001, stl: 0.296, blk: 0.839, tpm: -0.828, fgImpact: 0.031, ftImpact: 0, to: 0.916 } },
          { name: "Sam Merrill", min: 23, pts: 7, reb: 2, ast: 3, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 2, fta: 4, composite: -1.32, zScores: { pts: -0.346, reb: -0.507, ast: 0.247, stl: 1.378, blk: -0.575, tpm: -0.157, fgImpact: -0.688, ftImpact: -1.584, to: 0.916 } },
          { name: "Craig Porter Jr.", min: 12, pts: 2, reb: 3, ast: 1, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 2, fta: 2, composite: -0.94, zScores: { pts: -0.957, reb: -0.181, ast: -0.585, stl: -0.787, blk: 2.253, tpm: -0.828, fgImpact: -1.502, ftImpact: 0.726, to: 0.916 } },
          { name: "Meleek Thomas", min: 22, pts: 14, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 2.13, zScores: { pts: 0.508, reb: -0.507, ast: -0.169, stl: 0.296, blk: -0.575, tpm: 1.856, fgImpact: 0.532, ftImpact: 0, to: 0.188 } }
        ]
      }
    },
      {
      id: "401910008",
      line: "Houston Rockets 119 @ Indiana Pacers 104 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "HOU", name: "Houston Rockets", score: 119,
        players: [
          { name: "Kevin Durant", min: 32, pts: 21, reb: 2, ast: 3, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 7, fga: 9, ftm: 3, fta: 4, composite: 3.09, zScores: { pts: 1.362, reb: -0.507, ast: 0.247, stl: -0.787, blk: -0.575, tpm: 1.856, fgImpact: 2.097, ftImpact: -0.066, to: -0.539 } },
          { name: "Jabari Smith Jr.", min: 26, pts: 17, reb: 4, ast: 2, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 7, fga: 10, ftm: 0, fta: 0, composite: 4.73, zScores: { pts: 0.874, reb: 0.146, ast: -0.169, stl: -0.787, blk: 0.839, tpm: 1.185, fgImpact: 1.722, ftImpact: 0, to: 0.916 } },
          { name: "Alperen Sengun", min: 14, pts: 7, reb: 7, ast: 1, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -4, zScores: { pts: -0.346, reb: 1.125, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: -1.408, ftImpact: 0, to: -1.266 } },
          { name: "Fred VanVleet", min: 27, pts: 15, reb: 2, ast: 6, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 6, fga: 13, ftm: 0, fta: 0, composite: 1.8, zScores: { pts: 0.63, reb: -0.507, ast: 1.495, stl: 0.296, blk: -0.575, tpm: 1.185, fgImpact: -0.187, ftImpact: 0, to: -0.539 } },
          { name: "Amen Thompson", min: 31, pts: 15, reb: 9, ast: 3, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 6, fga: 11, ftm: 3, fta: 4, composite: 2.19, zScores: { pts: 0.63, reb: 1.778, ast: 0.247, stl: 0.296, blk: 0.839, tpm: -0.828, fgImpact: 0.564, ftImpact: -0.066, to: -1.266 } },
          { name: "Jae'Sean Tate", min: 1, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.22, zScores: { pts: -1.201, reb: -1.16, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0, ftImpact: 0, to: 0.916 } },
          { name: "Tari Eason", min: 25, pts: 11, reb: 4, ast: 3, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 11, ftm: 2, fta: 3, composite: -1.52, zScores: { pts: 0.142, reb: 0.146, ast: 0.247, stl: 1.378, blk: -0.575, tpm: -0.157, fgImpact: -1.001, ftImpact: -0.429, to: -1.266 } },
          { name: "Isaiah Crawford", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.01, zScores: { pts: -1.201, reb: -1.16, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.376, ftImpact: 0, to: 0.916 } },
          { name: "Steven Adams", min: 16, pts: 4, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2, zScores: { pts: -0.712, reb: 0.472, ast: -0.169, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.313, ftImpact: 0, to: 0.916 } },
          { name: "Oscar Tshiebwe", min: 11, pts: 4, reb: 4, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: 0.25, zScores: { pts: -0.712, reb: 0.146, ast: 0.247, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: 0.031, ftImpact: 0.726, to: 0.916 } },
          { name: "Marcus Smart", min: 18, pts: 4, reb: 2, ast: 4, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -1.63, zScores: { pts: -0.712, reb: -0.507, ast: 0.663, stl: 0.296, blk: 0.839, tpm: -0.157, fgImpact: -0.72, ftImpact: -0.792, to: -0.539 } },
          { name: "Bogdan Bogdanovic", min: 11, pts: 1, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 1, fta: 2, composite: -6.18, zScores: { pts: -1.079, reb: -0.181, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -1.127, ftImpact: -0.792, to: 0.188 } },
          { name: "Reed Sheppard", min: 25, pts: 20, reb: 4, ast: 2, stl: 1, blk: 1, to: 0, tpm: 6, fgm: 7, fga: 10, ftm: 0, fta: 0, composite: 8.19, zScores: { pts: 1.24, reb: 0.146, ast: -0.169, stl: 0.296, blk: 0.839, tpm: 3.197, fgImpact: 1.722, ftImpact: 0, to: 0.916 } },
          { name: "Bruce Thornton", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.63, zScores: { pts: -1.201, reb: -1.16, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0, ftImpact: 0, to: 0.916 } }
        ]
      },
      home: {
        abbr: "IND", name: "Indiana Pacers", score: 104,
        players: [
          { name: "Pascal Siakam", min: 33, pts: 24, reb: 4, ast: 3, stl: 3, blk: 1, to: 1, tpm: 2, fgm: 10, fga: 17, ftm: 2, fta: 2, composite: 8.29, zScores: { pts: 1.728, reb: 0.146, ast: 0.247, stl: 2.461, blk: 0.839, tpm: 0.514, fgImpact: 1.44, ftImpact: 0.726, to: 0.188 } },
          { name: "Ivica Zubac", min: 24, pts: 4, reb: 3, ast: 4, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.75, zScores: { pts: -0.712, reb: -0.181, ast: 0.663, stl: -0.787, blk: 0.839, tpm: -0.828, fgImpact: 0.063, ftImpact: 0, to: 0.188 } },
          { name: "Kelly Oubre Jr.", min: 23, pts: 17, reb: 4, ast: 0, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 7, fga: 10, ftm: 1, fta: 1, composite: 2.13, zScores: { pts: 0.874, reb: 0.146, ast: -1.001, stl: -0.787, blk: 0.839, tpm: 0.514, fgImpact: 1.722, ftImpact: 0.363, to: -0.539 } },
          { name: "Aaron Nesmith", min: 29, pts: 2, reb: 3, ast: 3, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -2.24, zScores: { pts: -0.957, reb: -0.181, ast: 0.247, stl: 0.296, blk: 0.839, tpm: -0.828, fgImpact: -1.847, ftImpact: 0, to: 0.188 } },
          { name: "Quenton Jackson", min: 22, pts: 15, reb: 2, ast: 3, stl: 3, blk: 0, to: 3, tpm: 2, fgm: 6, fga: 9, ftm: 1, fta: 1, composite: 3.18, zScores: { pts: 0.63, reb: -0.507, ast: 0.247, stl: 2.461, blk: -0.575, tpm: 0.514, fgImpact: 1.315, ftImpact: 0.363, to: -1.266 } },
          { name: "Larry Nance Jr.", min: 9, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.62, zScores: { pts: -0.834, reb: -0.834, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: -0.344, ftImpact: 0, to: 0.916 } },
          { name: "Obi Toppin", min: 17, pts: 6, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 3, composite: -3.9, zScores: { pts: -0.468, reb: -0.834, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.313, ftImpact: -0.429, to: 0.916 } },
          { name: "Jalen Slawson", min: 12, pts: 5, reb: 4, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.45, zScores: { pts: -0.59, reb: 0.146, ast: -0.169, stl: 0.296, blk: -0.575, tpm: -0.157, fgImpact: -0.313, ftImpact: 0, to: 0.916 } },
          { name: "Jarace Walker", min: 17, pts: 1, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 5, ftm: 1, fta: 2, composite: -5.43, zScores: { pts: -1.079, reb: -0.181, ast: -0.585, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: -1.878, ftImpact: -0.792, to: 0.188 } },
          { name: "Jay Huff", min: 15, pts: 5, reb: 3, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 1, fta: 1, composite: -0.92, zScores: { pts: -0.59, reb: -0.181, ast: -1.001, stl: -0.787, blk: 2.253, tpm: -0.828, fgImpact: -1.064, ftImpact: 0.363, to: 0.916 } },
          { name: "T.J. McConnell", min: 18, pts: 14, reb: 2, ast: 5, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 7, fga: 10, ftm: 0, fta: 0, composite: 2.24, zScores: { pts: 0.508, reb: -0.507, ast: 1.079, stl: 1.378, blk: -0.575, tpm: -0.828, fgImpact: 1.722, ftImpact: 0, to: -0.539 } },
          { name: "Kobe Brown", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.63, zScores: { pts: -1.201, reb: -1.16, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0, ftImpact: 0, to: 0.916 } },
          { name: "Braden Smith", min: 18, pts: 8, reb: 5, ast: 3, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 3.2, zScores: { pts: -0.224, reb: 0.472, ast: 0.247, stl: 1.378, blk: -0.575, tpm: 0.514, fgImpact: 0.47, ftImpact: 0, to: 0.916 } }
        ]
      }
    },
      {
      id: "401910009",
      line: "Milwaukee Bucks 130 @ Miami Heat 137 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIL", name: "Milwaukee Bucks", score: 130,
        players: [
          { name: "Kyle Kuzma", min: 30, pts: 26, reb: 5, ast: 1, stl: 2, blk: 1, to: 3, tpm: 2, fgm: 9, fga: 16, ftm: 6, fta: 10, composite: 1.92, zScores: { pts: 1.972, reb: 0.472, ast: -0.585, stl: 1.378, blk: 0.839, tpm: 0.514, fgImpact: 1.033, ftImpact: -2.442, to: -1.266 } },
          { name: "Myles Turner", min: 21, pts: 4, reb: 5, ast: 4, stl: 0, blk: 3, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 2.35, zScores: { pts: -0.712, reb: 0.472, ast: 0.663, stl: -0.787, blk: 3.667, tpm: -0.828, fgImpact: -0.313, ftImpact: 0, to: 0.188 } },
          { name: "Jericho Sims", min: 18, pts: 4, reb: 6, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -2.43, zScores: { pts: -0.712, reb: 0.799, ast: -0.169, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.344, ftImpact: 0.726, to: -0.539 } },
          { name: "Tyler Herro", min: 24, pts: 8, reb: 2, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 11, ftm: 0, fta: 1, composite: -2.42, zScores: { pts: -0.224, reb: -0.507, ast: 0.663, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: -1.001, ftImpact: -1.155, to: 0.916 } },
          { name: "Brayden Burries", min: 25, pts: 20, reb: 7, ast: 1, stl: 2, blk: 0, to: 3, tpm: 3, fgm: 6, fga: 9, ftm: 5, fta: 6, composite: 4.48, zScores: { pts: 1.24, reb: 1.125, ast: -0.585, stl: 1.378, blk: -0.575, tpm: 1.185, fgImpact: 1.315, ftImpact: 0.66, to: -1.266 } },
          { name: "Jaime Jaquez Jr.", min: 23, pts: 10, reb: 2, ast: 5, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 7, ftm: 3, fta: 4, composite: -1.81, zScores: { pts: 0.02, reb: -0.507, ast: 1.079, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: -0.281, ftImpact: -0.066, to: -0.539 } },
          { name: "Nate Ament", min: 17, pts: 7, reb: 4, ast: 1, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 5, ftm: 5, fta: 5, composite: -3.52, zScores: { pts: -0.346, reb: 0.146, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -1.095, ftImpact: 1.816, to: -1.266 } },
          { name: "Kel'el Ware", min: 17, pts: 11, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 1.14, zScores: { pts: 0.142, reb: -0.181, ast: -0.585, stl: 0.296, blk: -0.575, tpm: -0.157, fgImpact: 1.284, ftImpact: 0, to: 0.916 } },
          { name: "Caris LeVert", min: 8, pts: 8, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 1, fta: 1, composite: -1.07, zScores: { pts: -0.224, reb: -0.181, ast: -0.169, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: 0.47, ftImpact: 0.363, to: 0.188 } },
          { name: "Gary Trent Jr.", min: 16, pts: 1, reb: 1, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 1, fta: 2, composite: -4.69, zScores: { pts: -1.079, reb: -0.834, ast: -1.001, stl: 1.378, blk: -0.575, tpm: -0.828, fgImpact: -1.878, ftImpact: -0.792, to: 0.916 } },
          { name: "AJ Green", min: 14, pts: 11, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 0.33, zScores: { pts: 0.142, reb: -1.16, ast: -0.585, stl: -0.787, blk: -0.575, tpm: 1.185, fgImpact: 0.47, ftImpact: 0.726, to: 0.916 } },
          { name: "Kasparas Jakucionis", min: 26, pts: 20, reb: 3, ast: 5, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 8, ftm: 5, fta: 6, composite: 7.39, zScores: { pts: 1.24, reb: -0.181, ast: 1.079, stl: 1.378, blk: -0.575, tpm: 1.185, fgImpact: 1.69, ftImpact: 0.66, to: 0.916 } }
        ]
      },
      home: {
        abbr: "MIA", name: "Miami Heat", score: 137,
        players: [
          { name: "Giannis Antetokounmpo", min: 32, pts: 27, reb: 14, ast: 9, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 7, fga: 11, ftm: 13, fta: 16, composite: 10.62, zScores: { pts: 2.094, reb: 3.41, ast: 2.742, stl: 0.296, blk: 0.839, tpm: -0.828, fgImpact: 1.346, ftImpact: 1.255, to: -0.539 } },
          { name: "Bam Adebayo", min: 30, pts: 26, reb: 4, ast: 2, stl: 2, blk: 0, to: 3, tpm: 3, fgm: 7, fga: 15, ftm: 9, fta: 13, composite: 1.16, zScores: { pts: 1.972, reb: 0.146, ast: -0.169, stl: 1.378, blk: -0.575, tpm: 1.185, fgImpact: -0.156, ftImpact: -1.352, to: -1.266 } },
          { name: "Klay Thompson", min: 23, pts: 13, reb: 1, ast: 1, stl: 0, blk: 1, to: 0, tpm: 4, fgm: 4, fga: 10, ftm: 1, fta: 1, composite: 1.53, zScores: { pts: 0.386, reb: -0.834, ast: -0.585, stl: -0.787, blk: 0.839, tpm: 1.856, fgImpact: -0.626, ftImpact: 0.363, to: 0.916 } },
          { name: "Davion Mitchell", min: 36, pts: 24, reb: 2, ast: 6, stl: 0, blk: 1, to: 4, tpm: 6, fgm: 8, fga: 11, ftm: 2, fta: 2, composite: 6.83, zScores: { pts: 1.728, reb: -0.507, ast: 1.495, stl: -0.787, blk: 0.839, tpm: 3.197, fgImpact: 2.129, ftImpact: 0.726, to: -1.994 } },
          { name: "Pelle Larsson", min: 15, pts: 4, reb: 2, ast: 2, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -3.85, zScores: { pts: -0.712, reb: -0.507, ast: -0.169, stl: 0.296, blk: -0.575, tpm: -0.157, fgImpact: 0.031, ftImpact: -0.792, to: -1.266 } },
          { name: "Andrew Wiggins", min: 26, pts: 11, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 6, fta: 6, composite: 0, zScores: { pts: 0.142, reb: -0.507, ast: -0.169, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: -0.313, ftImpact: 2.179, to: 0.188 } },
          { name: "Bobby Portis", min: 17, pts: 9, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -3.59, zScores: { pts: -0.102, reb: -0.181, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: -0.25, ftImpact: 0, to: -0.539 } },
          { name: "Simone Fontecchio", min: 18, pts: 6, reb: 5, ast: 1, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 1.36, zScores: { pts: -0.468, reb: 0.472, ast: -0.585, stl: 1.378, blk: -0.575, tpm: 0.514, fgImpact: 0.438, ftImpact: 0, to: 0.188 } },
          { name: "Nikola Jovic", min: 14, pts: 4, reb: 1, ast: 4, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -3.04, zScores: { pts: -0.712, reb: -0.834, ast: 0.663, stl: -0.787, blk: 0.839, tpm: -0.157, fgImpact: -0.72, ftImpact: -0.792, to: -0.539 } },
          { name: "Nick Richards", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.63, zScores: { pts: -1.201, reb: -1.16, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0, ftImpact: 0, to: 0.916 } },
          { name: "Tre Donaldson", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -6.11, zScores: { pts: -1.201, reb: -1.16, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.751, ftImpact: 0, to: 0.188 } },
          { name: "Ryan Conwell", min: 26, pts: 13, reb: 3, ast: 1, stl: 1, blk: 1, to: 1, tpm: 3, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 2.98, zScores: { pts: 0.386, reb: -0.181, ast: -0.585, stl: 0.296, blk: 0.839, tpm: 1.185, fgImpact: 0.125, ftImpact: 0.726, to: 0.188 } }
        ]
      }
    },
      {
      id: "401910010",
      line: "Philadelphia 76ers 121 @ Orlando Magic 116 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PHI", name: "Philadelphia 76ers", score: 121,
        players: [
          { name: "LeBron James", min: 31, pts: 22, reb: 3, ast: 6, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 8, fga: 16, ftm: 5, fta: 6, composite: 2.38, zScores: { pts: 1.484, reb: -0.181, ast: 1.495, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: 0.251, ftImpact: 0.66, to: 0.188 } },
          { name: "Joel Embiid", min: 36, pts: 26, reb: 6, ast: 7, stl: 2, blk: 3, to: 3, tpm: 0, fgm: 7, fga: 18, ftm: 12, fta: 14, composite: 8.4, zScores: { pts: 1.972, reb: 0.799, ast: 1.911, stl: 1.378, blk: 3.667, tpm: -0.828, fgImpact: -1.283, ftImpact: 2.047, to: -1.266 } },
          { name: "Kentavious Caldwell-Pope", min: 32, pts: 8, reb: 8, ast: 1, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 3.35, zScores: { pts: -0.224, reb: 1.451, ast: -0.585, stl: 1.378, blk: -0.575, tpm: 0.514, fgImpact: 0.47, ftImpact: 0, to: 0.916 } },
          { name: "Anfernee Simons", min: 38, pts: 18, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 7, fga: 12, ftm: 1, fta: 1, composite: 2.39, zScores: { pts: 0.996, reb: -0.507, ast: -0.169, stl: -0.787, blk: -0.575, tpm: 1.185, fgImpact: 0.971, ftImpact: 0.363, to: 0.916 } },
          { name: "VJ Edgecombe", min: 43, pts: 24, reb: 8, ast: 6, stl: 2, blk: 0, to: 4, tpm: 4, fgm: 8, fga: 15, ftm: 4, fta: 4, composite: 7.42, zScores: { pts: 1.728, reb: 1.451, ast: 1.495, stl: 1.378, blk: -0.575, tpm: 1.856, fgImpact: 0.626, ftImpact: 1.453, to: -1.994 } },
          { name: "Jabari Walker", min: 13, pts: 6, reb: 5, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 1, fta: 1, composite: -0.69, zScores: { pts: -0.468, reb: 0.472, ast: -0.169, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: 0.438, ftImpact: 0.363, to: 0.188 } },
          { name: "Justin Edwards", min: 13, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.41, zScores: { pts: -0.957, reb: -0.834, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.344, ftImpact: 0, to: 0.916 } },
          { name: "Tacko Fall", min: 10, pts: 2, reb: 3, ast: 0, stl: 0, blk: 3, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: 0.51, zScores: { pts: -0.957, reb: -0.181, ast: -1.001, stl: -0.787, blk: 3.667, tpm: -0.828, fgImpact: 0.407, ftImpact: 0, to: 0.188 } },
          { name: "Caleb Love", min: 6, pts: 3, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.84, zScores: { pts: -0.834, reb: -0.834, ast: -0.585, stl: 0.296, blk: -0.575, tpm: -0.157, fgImpact: -0.344, ftImpact: 0, to: 0.188 } },
          { name: "Labaron Philon Jr.", min: 17, pts: 10, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: -0.39, zScores: { pts: 0.02, reb: -0.834, ast: -0.169, stl: -0.787, blk: -0.575, tpm: 0.514, fgImpact: 1.252, ftImpact: 0, to: 0.188 } }
        ]
      },
      home: {
        abbr: "ORL", name: "Orlando Magic", score: 116,
        players: [
          { name: "Franz Wagner", min: 36, pts: 27, reb: 8, ast: 11, stl: 2, blk: 2, to: 1, tpm: 1, fgm: 12, fga: 22, ftm: 2, fta: 3, composite: 11.48, zScores: { pts: 2.094, reb: 1.451, ast: 3.574, stl: 1.378, blk: 2.253, tpm: -0.157, fgImpact: 1.127, ftImpact: -0.429, to: 0.188 } },
          { name: "Wendell Carter Jr.", min: 32, pts: 15, reb: 8, ast: 3, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 5, fga: 11, ftm: 3, fta: 3, composite: 4.68, zScores: { pts: 0.63, reb: 1.451, ast: 0.247, stl: -0.787, blk: 0.839, tpm: 0.514, fgImpact: -0.219, ftImpact: 1.089, to: 0.916 } },
          { name: "Desmond Bane", min: 38, pts: 15, reb: 3, ast: 3, stl: 1, blk: 0, to: 2, tpm: 5, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 2.94, zScores: { pts: 0.63, reb: -0.181, ast: 0.247, stl: 0.296, blk: -0.575, tpm: 2.526, fgImpact: 0.532, ftImpact: 0, to: -0.539 } },
          { name: "Jalen Suggs", min: 31, pts: 18, reb: 8, ast: 4, stl: 2, blk: 1, to: 5, tpm: 5, fgm: 5, fga: 10, ftm: 3, fta: 6, composite: 2.91, zScores: { pts: 0.996, reb: 1.451, ast: 0.663, stl: 1.378, blk: 0.839, tpm: 2.526, fgImpact: 0.157, ftImpact: -2.376, to: -2.721 } },
          { name: "Anthony Black", min: 37, pts: 15, reb: 2, ast: 6, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 6, fga: 16, ftm: 1, fta: 3, composite: -0.53, zScores: { pts: 0.63, reb: -0.507, ast: 1.495, stl: 0.296, blk: 0.839, tpm: 0.514, fgImpact: -1.314, ftImpact: -1.947, to: -0.539 } },
          { name: "Jamal Cain", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.31, zScores: { pts: -1.201, reb: -0.834, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0, ftImpact: 0, to: 0.916 } },
          { name: "Tristan da Silva", min: 27, pts: 12, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 0.11, zScores: { pts: 0.264, reb: -0.507, ast: -1.001, stl: -0.787, blk: -0.575, tpm: 0.514, fgImpact: 1.284, ftImpact: 0, to: 0.916 } },
          { name: "Goga Bitadze", min: 20, pts: 8, reb: 3, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 2, composite: -0.82, zScores: { pts: -0.224, reb: -0.181, ast: -0.585, stl: 0.296, blk: 0.839, tpm: -0.828, fgImpact: 1.252, ftImpact: -2.31, to: 0.916 } },
          { name: "Jevon Carter", min: 16, pts: 6, reb: 2, ast: 3, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.33, zScores: { pts: -0.468, reb: -0.507, ast: 0.247, stl: -0.787, blk: -0.575, tpm: 0.514, fgImpact: 0.063, ftImpact: 0, to: 0.188 } }
        ]
      }
    },
      {
      id: "401910011",
      line: "Chicago Bulls 137 @ Brooklyn Nets 107 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHI", name: "Chicago Bulls", score: 137,
        players: [
          { name: "Jalen Smith", min: 21, pts: 14, reb: 6, ast: 3, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 1.81, zScores: { pts: 0.508, reb: 0.799, ast: 0.247, stl: 0.296, blk: -0.575, tpm: 0.514, fgImpact: 0.564, ftImpact: 0, to: -0.539 } },
          { name: "Isaac Okoro", min: 25, pts: 12, reb: 3, ast: 4, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 3.01, zScores: { pts: 0.264, reb: -0.181, ast: 0.663, stl: 0.296, blk: -0.575, tpm: 1.856, fgImpact: 0.501, ftImpact: 0, to: 0.188 } },
          { name: "Matas Buzelis", min: 30, pts: 25, reb: 5, ast: 4, stl: 2, blk: 1, to: 2, tpm: 5, fgm: 9, fga: 16, ftm: 2, fta: 2, composite: 8.95, zScores: { pts: 1.85, reb: 0.472, ast: 0.663, stl: 1.378, blk: 0.839, tpm: 2.526, fgImpact: 1.033, ftImpact: 0.726, to: -0.539 } },
          { name: "Norman Powell", min: 26, pts: 17, reb: 2, ast: 5, stl: 1, blk: 0, to: 0, tpm: 5, fgm: 6, fga: 16, ftm: 0, fta: 0, composite: 3.29, zScores: { pts: 0.874, reb: -0.507, ast: 1.079, stl: 0.296, blk: -0.575, tpm: 2.526, fgImpact: -1.314, ftImpact: 0, to: 0.916 } },
          { name: "Josh Giddey", min: 28, pts: 18, reb: 14, ast: 9, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 8, fga: 12, ftm: 1, fta: 1, composite: 6.84, zScores: { pts: 0.996, reb: 3.41, ast: 2.742, stl: 0.296, blk: -0.575, tpm: -0.157, fgImpact: 1.753, ftImpact: 0.363, to: -1.994 } },
          { name: "Zach Collins", min: 11, pts: 3, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.88, zScores: { pts: -0.834, reb: -0.507, ast: -1.001, stl: -0.787, blk: 0.839, tpm: -0.157, fgImpact: -0.344, ftImpact: 0, to: 0.916 } },
          { name: "Patrick Williams", min: 13, pts: 2, reb: 1, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.79, zScores: { pts: -0.957, reb: -0.834, ast: -0.169, stl: -0.787, blk: 0.839, tpm: -0.828, fgImpact: 0.031, ftImpact: 0, to: 0.916 } },
          { name: "Leonard Miller", min: 7, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.06, zScores: { pts: -0.712, reb: -0.507, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0.438, ftImpact: 0, to: 0.916 } },
          { name: "Noa Essengue", min: 15, pts: 5, reb: 3, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 4, ftm: 3, fta: 4, composite: -4.93, zScores: { pts: -0.59, reb: -0.181, ast: -1.001, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: -0.72, ftImpact: -0.066, to: -1.266 } },
          { name: "Nic Claxton", min: 22, pts: 14, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 6, fga: 7, ftm: 2, fta: 3, composite: 1.52, zScores: { pts: 0.508, reb: 0.146, ast: -0.585, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: 2.066, ftImpact: -0.429, to: 0.916 } },
          { name: "Buddy Hield", min: 19, pts: 11, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 1.09, zScores: { pts: 0.142, reb: -0.834, ast: -0.169, stl: 0.296, blk: -0.575, tpm: 1.185, fgImpact: 0.125, ftImpact: 0, to: 0.916 } },
          { name: "Tre Jones", min: 16, pts: 10, reb: 2, ast: 6, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: -0.06, zScores: { pts: 0.02, reb: -0.507, ast: 1.495, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 1.659, ftImpact: 0, to: -0.539 } },
          { name: "Dailyn Swain", min: 6, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 2, fta: 2, composite: -4.84, zScores: { pts: -0.957, reb: -0.834, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -1.502, ftImpact: 0.726, to: 0.916 } }
        ]
      },
      home: {
        abbr: "BKN", name: "Brooklyn Nets", score: 107,
        players: [
          { name: "Julius Randle", min: 27, pts: 17, reb: 0, ast: 4, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 10, ftm: 4, fta: 4, composite: 2.35, zScores: { pts: 0.874, reb: -1.16, ast: 0.663, stl: 0.296, blk: -0.575, tpm: 1.185, fgImpact: 0.157, ftImpact: 1.453, to: -0.539 } },
          { name: "Michael Porter Jr.", min: 27, pts: 5, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 7, ftm: 2, fta: 2, composite: -2.72, zScores: { pts: -0.59, reb: -0.181, ast: -0.585, stl: 0.296, blk: -0.575, tpm: -0.157, fgImpact: -1.847, ftImpact: 0.726, to: 0.188 } },
          { name: "Day'Ron Sharpe", min: 22, pts: 6, reb: 5, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -1.05, zScores: { pts: -0.468, reb: 0.472, ast: -0.585, stl: -0.787, blk: 0.839, tpm: -0.828, fgImpact: 0.845, ftImpact: 0, to: -0.539 } },
          { name: "Egor Demin", min: 31, pts: 22, reb: 4, ast: 4, stl: 3, blk: 0, to: 2, tpm: 3, fgm: 9, fga: 22, ftm: 1, fta: 1, composite: 3.97, zScores: { pts: 1.484, reb: 0.146, ast: 0.663, stl: 2.461, blk: -0.575, tpm: 1.185, fgImpact: -1.22, ftImpact: 0.363, to: -0.539 } },
          { name: "Nolan Traore", min: 23, pts: 13, reb: 1, ast: 4, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 9, ftm: 0, fta: 1, composite: -0.96, zScores: { pts: 0.386, reb: -0.834, ast: 0.663, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: 1.315, ftImpact: -1.155, to: 0.188 } },
          { name: "Josh Minott", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.22, zScores: { pts: -1.201, reb: -1.16, ast: -1.001, stl: -0.787, blk: 0.839, tpm: -0.828, fgImpact: 0, ftImpact: 0, to: 0.916 } },
          { name: "Noah Clowney", min: 19, pts: 7, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -2.35, zScores: { pts: -0.346, reb: -0.181, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: 0.094, ftImpact: 0, to: 0.188 } },
          { name: "Danny Wolf", min: 23, pts: 6, reb: 6, ast: 2, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: -2.98, zScores: { pts: -0.468, reb: 0.799, ast: -0.169, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: 0.438, ftImpact: -0.792, to: -1.266 } },
          { name: "Chaney Johnson", min: 6, pts: 2, reb: 2, ast: 1, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -1.21, zScores: { pts: -0.957, reb: -0.507, ast: -0.585, stl: -0.787, blk: 2.253, tpm: -0.828, fgImpact: -0.72, ftImpact: 0, to: 0.916 } },
          { name: "Moritz Wagner", min: 20, pts: 11, reb: 2, ast: 3, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 4, ftm: 1, fta: 3, composite: -0.74, zScores: { pts: 0.142, reb: -0.507, ast: 0.247, stl: 0.296, blk: -0.575, tpm: 0.514, fgImpact: 1.628, ftImpact: -1.947, to: -0.539 } },
          { name: "Terance Mann", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.04, zScores: { pts: -1.201, reb: -0.834, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0, ftImpact: 0, to: 0.188 } },
          { name: "Keon Ellis", min: 6, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.24, zScores: { pts: -0.834, reb: -0.834, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: 0.031, ftImpact: 0, to: 0.916 } },
          { name: "Mikel Brown Jr.", min: 27, pts: 15, reb: 1, ast: 4, stl: 0, blk: 0, to: 5, tpm: 2, fgm: 4, fga: 10, ftm: 5, fta: 6, composite: -3.07, zScores: { pts: 0.63, reb: -0.834, ast: 0.663, stl: -0.787, blk: -0.575, tpm: 0.514, fgImpact: -0.626, ftImpact: 0.66, to: -2.721 } }
        ]
      }
    },
      {
      id: "401910012",
      line: "Washington Wizards 103 @ Toronto Raptors 99 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WSH", name: "Washington Wizards", score: 103,
        players: [
          { name: "Anthony Davis", min: 34, pts: 25, reb: 14, ast: 2, stl: 1, blk: 2, to: 3, tpm: 2, fgm: 9, fga: 16, ftm: 5, fta: 7, composite: 7.43, zScores: { pts: 1.85, reb: 3.41, ast: -0.169, stl: 0.296, blk: 2.253, tpm: 0.514, fgImpact: 1.033, ftImpact: -0.495, to: -1.266 } },
          { name: "AJ Dybantsa", min: 38, pts: 23, reb: 12, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 9, fga: 17, ftm: 5, fta: 6, composite: 3.87, zScores: { pts: 1.606, reb: 2.757, ast: -0.169, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: 0.658, ftImpact: 0.66, to: -0.539 } },
          { name: "Kyshawn George", min: 40, pts: 20, reb: 2, ast: 4, stl: 1, blk: 1, to: 1, tpm: 4, fgm: 7, fga: 16, ftm: 2, fta: 2, composite: 4.77, zScores: { pts: 1.24, reb: -0.507, ast: 0.663, stl: 0.296, blk: 0.839, tpm: 1.856, fgImpact: -0.532, ftImpact: 0.726, to: 0.188 } },
          { name: "Alex Sarr", min: 22, pts: 13, reb: 2, ast: 3, stl: 0, blk: 3, to: 1, tpm: 3, fgm: 5, fga: 6, ftm: 0, fta: 1, composite: 4.88, zScores: { pts: 0.386, reb: -0.507, ast: 0.247, stl: -0.787, blk: 3.667, tpm: 1.185, fgImpact: 1.659, ftImpact: -1.155, to: 0.188 } },
          { name: "Trae Young", min: 32, pts: 11, reb: 1, ast: 8, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 9, ftm: 6, fta: 7, composite: -0.86, zScores: { pts: 0.142, reb: -0.834, ast: 2.326, stl: 0.296, blk: -0.575, tpm: -0.157, fgImpact: -1.815, ftImpact: 1.024, to: -1.266 } },
          { name: "Khris Middleton", min: 20, pts: 8, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 7, ftm: 1, fta: 2, composite: -3.79, zScores: { pts: -0.224, reb: 0.146, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: -0.281, ftImpact: -0.792, to: -0.539 } },
          { name: "Deandre Ayton", min: 9, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.03, zScores: { pts: -1.201, reb: -0.181, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.376, ftImpact: 0, to: 0.916 } },
          { name: "Bilal Coulibaly", min: 26, pts: 3, reb: 8, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -1.28, zScores: { pts: -0.834, reb: 1.451, ast: -0.169, stl: -0.787, blk: 0.839, tpm: -0.828, fgImpact: -0.344, ftImpact: -0.792, to: 0.188 } },
          { name: "Will Riley", min: 10, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.86, zScores: { pts: -1.201, reb: -0.181, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.751, ftImpact: 0, to: -0.539 } },
          { name: "Tre Johnson", min: 8, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.73, zScores: { pts: -1.201, reb: -0.507, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.751, ftImpact: 0, to: 0.916 } }
        ]
      },
      home: {
        abbr: "TOR", name: "Toronto Raptors", score: 99,
        players: [
          { name: "Jamison Battle", min: 33, pts: 19, reb: 5, ast: 0, stl: 1, blk: 0, to: 0, tpm: 5, fgm: 7, fga: 15, ftm: 0, fta: 0, composite: 3.6, zScores: { pts: 1.118, reb: 0.472, ast: -1.001, stl: 0.296, blk: -0.575, tpm: 2.526, fgImpact: -0.156, ftImpact: 0, to: 0.916 } },
          { name: "Collin Murray-Boyles", min: 5, pts: 1, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -4.99, zScores: { pts: -1.079, reb: -0.507, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.751, ftImpact: -0.792, to: 0.916 } },
          { name: "Jakob Poeltl", min: 29, pts: 8, reb: 9, ast: 5, stl: 3, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 8, ftm: 2, fta: 3, composite: 2.75, zScores: { pts: -0.224, reb: 1.778, ast: 1.079, stl: 2.461, blk: 0.839, tpm: -0.828, fgImpact: -0.657, ftImpact: -0.429, to: -1.266 } },
          { name: "Immanuel Quickley", min: 34, pts: 24, reb: 3, ast: 5, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 9, fga: 21, ftm: 2, fta: 6, composite: -0.35, zScores: { pts: 1.728, reb: -0.181, ast: 1.079, stl: 0.296, blk: -0.575, tpm: 1.856, fgImpact: -0.844, ftImpact: -3.894, to: 0.188 } },
          { name: "Ja'Kobe Walter", min: 38, pts: 18, reb: 7, ast: 6, stl: 3, blk: 0, to: 2, tpm: 3, fgm: 7, fga: 16, ftm: 1, fta: 1, composite: 5.98, zScores: { pts: 0.996, reb: 1.125, ast: 1.495, stl: 2.461, blk: -0.575, tpm: 1.185, fgImpact: -0.532, ftImpact: 0.363, to: -0.539 } },
          { name: "Kyle Anderson", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.39, zScores: { pts: -1.201, reb: -1.16, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.751, ftImpact: 0, to: 0.916 } },
          { name: "Trayce Jackson-Davis", min: 17, pts: 3, reb: 7, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: -0.96, zScores: { pts: -0.834, reb: 1.125, ast: -0.585, stl: 0.296, blk: 0.839, tpm: -0.828, fgImpact: -1.095, ftImpact: -0.792, to: 0.916 } },
          { name: "Allen Graves", min: 31, pts: 9, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 0.36, zScores: { pts: -0.102, reb: 0.146, ast: -1.001, stl: -0.787, blk: 0.839, tpm: -0.157, fgImpact: 0.501, ftImpact: 0, to: 0.916 } },
          { name: "Malachi Smith", min: 8, pts: 0, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.81, zScores: { pts: -1.201, reb: -0.834, ast: 0.247, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.751, ftImpact: 0, to: 0.916 } },
          { name: "Jamal Shead", min: 24, pts: 15, reb: 1, ast: 6, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 12, ftm: 0, fta: 0, composite: 0.93, zScores: { pts: 0.63, reb: -0.834, ast: 1.495, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: 0.971, ftImpact: 0, to: 0.188 } },
          { name: "Alijah Martin", min: 17, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -0.957, reb: -0.507, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0.031, ftImpact: 0, to: 0.916 } }
        ]
      }
    },
      {
      id: "401910013",
      line: "Detroit Pistons 122 @ New Orleans Pelicans 109 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DET", name: "Detroit Pistons", score: 122,
        players: [
          { name: "John Collins", min: 30, pts: 20, reb: 7, ast: 2, stl: 0, blk: 1, to: 2, tpm: 4, fgm: 6, fga: 10, ftm: 4, fta: 4, composite: 5.96, zScores: { pts: 1.24, reb: 1.125, ast: -0.169, stl: -0.787, blk: 0.839, tpm: 1.856, fgImpact: 0.939, ftImpact: 1.453, to: -0.539 } },
          { name: "Javonte Green", min: 35, pts: 18, reb: 7, ast: 0, stl: 2, blk: 1, to: 0, tpm: 3, fgm: 7, fga: 12, ftm: 1, fta: 1, composite: 6.77, zScores: { pts: 0.996, reb: 1.125, ast: -1.001, stl: 1.378, blk: 0.839, tpm: 1.185, fgImpact: 0.971, ftImpact: 0.363, to: 0.916 } },
          { name: "Kevin Huerter", min: 36, pts: 11, reb: 1, ast: 7, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 9, ftm: 6, fta: 7, composite: 0.87, zScores: { pts: 0.142, reb: -0.834, ast: 1.911, stl: 0.296, blk: 0.839, tpm: -0.157, fgImpact: -1.815, ftImpact: 1.024, to: -0.539 } },
          { name: "Ausar Thompson", min: 34, pts: 10, reb: 7, ast: 4, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 4, fga: 6, ftm: 2, fta: 2, composite: 1.39, zScores: { pts: 0.02, reb: 1.125, ast: 0.663, stl: 1.378, blk: -0.575, tpm: -0.828, fgImpact: 0.877, ftImpact: 0.726, to: -1.994 } },
          { name: "Daniss Jenkins", min: 36, pts: 17, reb: 4, ast: 9, stl: 0, blk: 0, to: 4, tpm: 3, fgm: 7, fga: 16, ftm: 0, fta: 0, composite: 1.06, zScores: { pts: 0.874, reb: 0.146, ast: 2.742, stl: -0.787, blk: -0.575, tpm: 1.185, fgImpact: -0.532, ftImpact: 0, to: -1.994 } },
          { name: "Paul Reed", min: 20, pts: 17, reb: 7, ast: 1, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 7, fga: 9, ftm: 3, fta: 4, composite: 3.55, zScores: { pts: 0.874, reb: 1.125, ast: -0.585, stl: -0.787, blk: 2.253, tpm: -0.828, fgImpact: 2.097, ftImpact: -0.066, to: -0.539 } },
          { name: "Tolu Smith", min: 3, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -4.65, zScores: { pts: -0.834, reb: -1.16, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0.407, ftImpact: -0.792, to: 0.916 } },
          { name: "Isaiah Joe", min: 16, pts: 11, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 6, ftm: 2, fta: 3, composite: 0.95, zScores: { pts: 0.142, reb: -0.507, ast: -0.169, stl: 0.296, blk: -0.575, tpm: 1.185, fgImpact: 0.094, ftImpact: -0.429, to: 0.916 } },
          { name: "Elijah Harkless", min: 14, pts: 6, reb: 2, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 4, fta: 4, composite: 0.25, zScores: { pts: -0.468, reb: -0.507, ast: 0.663, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: 0.031, ftImpact: 1.453, to: 0.188 } },
          { name: "Chaz Lanier", min: 16, pts: 9, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -1.1, zScores: { pts: -0.102, reb: -0.834, ast: -1.001, stl: -0.787, blk: -0.575, tpm: 1.185, fgImpact: 0.094, ftImpact: 0, to: 0.916 } }
        ]
      },
      home: {
        abbr: "NO", name: "New Orleans Pelicans", score: 109,
        players: [
          { name: "Herbert Jones", min: 32, pts: 9, reb: 1, ast: 3, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 0.46, zScores: { pts: -0.102, reb: -0.834, ast: 0.247, stl: -0.787, blk: 0.839, tpm: 1.185, fgImpact: -0.281, ftImpact: 0, to: 0.188 } },
          { name: "Zion Williamson", min: 32, pts: 24, reb: 7, ast: 1, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 9, fga: 14, ftm: 6, fta: 9, composite: -0.69, zScores: { pts: 1.728, reb: 1.125, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 1.785, ftImpact: -1.287, to: -1.266 } },
          { name: "Saddiq Bey", min: 42, pts: 10, reb: 8, ast: 6, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 13, ftm: 2, fta: 2, composite: 0.85, zScores: { pts: 0.02, reb: 1.451, ast: 1.495, stl: 0.296, blk: -0.575, tpm: 0.514, fgImpact: -2.535, ftImpact: 0.726, to: -0.539 } },
          { name: "Yves Missi", min: 17, pts: 4, reb: 5, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.97, zScores: { pts: -0.712, reb: 0.472, ast: -0.169, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0.438, ftImpact: 0, to: 0.188 } },
          { name: "Jeremiah Fears", min: 31, pts: 16, reb: 5, ast: 4, stl: 1, blk: 1, to: 4, tpm: 2, fgm: 6, fga: 12, ftm: 2, fta: 2, composite: 2.46, zScores: { pts: 0.752, reb: 0.472, ast: 0.663, stl: 0.296, blk: 0.839, tpm: 0.514, fgImpact: 0.188, ftImpact: 0.726, to: -1.994 } },
          { name: "Karlo Matkovic", min: 10, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.03, zScores: { pts: -1.201, reb: -0.507, ast: -1.001, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: -1.127, ftImpact: 0, to: 0.916 } },
          { name: "DeAndre Jordan", min: 10, pts: 8, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 4, fta: 5, composite: -1.85, zScores: { pts: -0.224, reb: -0.507, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0.438, ftImpact: 0.297, to: 0.916 } },
          { name: "Derik Queen", min: 19, pts: 9, reb: 5, ast: 0, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 6, ftm: 1, fta: 1, composite: 0.38, zScores: { pts: -0.102, reb: 0.472, ast: -1.001, stl: 0.296, blk: 0.839, tpm: -0.828, fgImpact: 0.877, ftImpact: 0.363, to: -0.539 } },
          { name: "Jordan Poole", min: 30, pts: 22, reb: 1, ast: 5, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 11, ftm: 9, fta: 9, composite: 6.96, zScores: { pts: 1.484, reb: -0.834, ast: 1.079, stl: 1.378, blk: -0.575, tpm: 1.185, fgImpact: -0.219, ftImpact: 3.268, to: 0.188 } },
          { name: "Jaron Pierre Jr.", min: 17, pts: 7, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -3.4, zScores: { pts: -0.346, reb: -0.834, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: -1.033, ftImpact: 0, to: 0.916 } }
        ]
      }
    },
      {
      id: "401910014",
      line: "Atlanta Hawks 117 @ Oklahoma City Thunder 112 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ATL", name: "Atlanta Hawks", score: 117,
        players: [
          { name: "Onyeka Okongwu", min: 36, pts: 28, reb: 9, ast: 2, stl: 0, blk: 1, to: 5, tpm: 5, fgm: 11, fga: 21, ftm: 1, fta: 3, composite: 2.46, zScores: { pts: 2.216, reb: 1.778, ast: -0.169, stl: -0.787, blk: 0.839, tpm: 2.526, fgImpact: 0.721, ftImpact: -1.947, to: -2.721 } },
          { name: "Jalen Johnson", min: 34, pts: 16, reb: 12, ast: 11, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 5, fga: 15, ftm: 5, fta: 5, composite: 5.81, zScores: { pts: 0.752, reb: 2.757, ast: 3.574, stl: -0.787, blk: 0.839, tpm: -0.157, fgImpact: -1.721, ftImpact: 1.816, to: -1.266 } },
          { name: "Nickeil Alexander-Walker", min: 32, pts: 19, reb: 4, ast: 7, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 8, fga: 16, ftm: 0, fta: 0, composite: 4.52, zScores: { pts: 1.118, reb: 0.146, ast: 1.911, stl: 0.296, blk: -0.575, tpm: 1.185, fgImpact: 0.251, ftImpact: 0, to: 0.188 } },
          { name: "Aaron Wiggins", min: 26, pts: 14, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 13, ftm: 0, fta: 0, composite: 0.54, zScores: { pts: 0.508, reb: -0.181, ast: -0.585, stl: 0.296, blk: -0.575, tpm: 1.856, fgImpact: -0.97, ftImpact: 0, to: 0.188 } },
          { name: "Dyson Daniels", min: 37, pts: 10, reb: 10, ast: 4, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 3.48, zScores: { pts: 0.02, reb: 2.104, ast: 0.663, stl: 1.378, blk: -0.575, tpm: -0.828, fgImpact: 0.532, ftImpact: 0, to: 0.188 } },
          { name: "Dorian Finney-Smith", min: 5, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.9, zScores: { pts: -1.201, reb: -0.507, ast: -1.001, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: 0, ftImpact: 0, to: 0.916 } },
          { name: "Corey Kispert", min: 17, pts: 8, reb: 1, ast: 2, stl: 0, blk: 2, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: 2.08, zScores: { pts: -0.224, reb: -0.834, ast: -0.169, stl: -0.787, blk: 2.253, tpm: 0.514, fgImpact: -0.313, ftImpact: 0.726, to: 0.916 } },
          { name: "Zuby Ejiofor", min: 12, pts: 3, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.69, zScores: { pts: -0.834, reb: -0.181, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: -0.344, ftImpact: 0, to: 0.188 } },
          { name: "Luguentz Dort", min: 31, pts: 16, reb: 3, ast: 0, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 11, ftm: 1, fta: 2, composite: 2.25, zScores: { pts: 0.752, reb: -0.181, ast: -1.001, stl: 1.378, blk: -0.575, tpm: 1.185, fgImpact: 0.564, ftImpact: -0.792, to: 0.916 } },
          { name: "RayJ Dennis", min: 10, pts: 3, reb: 3, ast: 5, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -1.65, zScores: { pts: -0.834, reb: -0.181, ast: 1.079, stl: 0.296, blk: -0.575, tpm: -0.157, fgImpact: -1.471, ftImpact: 0, to: 0.188 } }
        ]
      },
      home: {
        abbr: "OKC", name: "Oklahoma City Thunder", score: 112,
        players: [
          { name: "Isaiah Hartenstein", min: 27, pts: 6, reb: 17, ast: 6, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 6.03, zScores: { pts: -0.468, reb: 4.389, ast: 1.495, stl: -0.787, blk: 0.839, tpm: -0.828, fgImpact: 0.47, ftImpact: 0, to: 0.916 } },
          { name: "Aday Mara", min: 27, pts: 10, reb: 6, ast: 8, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 2, fta: 4, composite: 1.85, zScores: { pts: 0.02, reb: 0.799, ast: 2.326, stl: -0.787, blk: 0.839, tpm: -0.828, fgImpact: 0.877, ftImpact: -1.584, to: 0.188 } },
          { name: "Shai Gilgeous-Alexander", min: 36, pts: 34, reb: 5, ast: 3, stl: 2, blk: 2, to: 4, tpm: 1, fgm: 14, fga: 29, ftm: 5, fta: 10, composite: 1.25, zScores: { pts: 2.949, reb: 0.472, ast: 0.247, stl: 1.378, blk: 2.253, tpm: -0.157, fgImpact: 0.063, ftImpact: -3.96, to: -1.994 } },
          { name: "Jared McCain", min: 33, pts: 18, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 7, fga: 14, ftm: 0, fta: 0, composite: 2.21, zScores: { pts: 0.996, reb: -0.181, ast: -0.585, stl: 0.296, blk: -0.575, tpm: 1.856, fgImpact: 0.22, ftImpact: 0, to: 0.188 } },
          { name: "Ajay Mitchell", min: 34, pts: 13, reb: 6, ast: 6, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 5, fga: 11, ftm: 3, fta: 3, composite: 3.65, zScores: { pts: 0.386, reb: 0.799, ast: 1.495, stl: -0.787, blk: 2.253, tpm: -0.828, fgImpact: -0.219, ftImpact: 1.089, to: -0.539 } },
          { name: "Jaylin Williams", min: 16, pts: 3, reb: 1, ast: 1, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 2, composite: -5.55, zScores: { pts: -0.834, reb: -0.834, ast: -0.585, stl: -0.787, blk: 0.839, tpm: -0.157, fgImpact: -0.344, ftImpact: -2.31, to: -0.539 } },
          { name: "Alex Caruso", min: 9, pts: 5, reb: 0, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -5.09, zScores: { pts: -0.59, reb: -1.16, ast: -0.585, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: -0.313, ftImpact: -0.792, to: -0.539 } },
          { name: "Kenrich Williams", min: 23, pts: 10, reb: 5, ast: 1, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 3.45, zScores: { pts: 0.02, reb: 0.472, ast: -0.585, stl: 0.296, blk: 2.253, tpm: -0.828, fgImpact: 0.908, ftImpact: 0, to: 0.916 } },
          { name: "Nique Clifford", min: 13, pts: 7, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -3.02, zScores: { pts: -0.346, reb: -1.16, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: 0.094, ftImpact: 0, to: 0.916 } },
          { name: "Nikola Topic", min: 5, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.95, zScores: { pts: -1.201, reb: -1.16, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0, ftImpact: 0, to: 0.188 } },
          { name: "Bennett Stirtz", min: 17, pts: 6, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.29, zScores: { pts: -0.468, reb: -1.16, ast: -0.169, stl: -0.787, blk: -0.575, tpm: 0.514, fgImpact: 0.438, ftImpact: 0, to: 0.916 } }
        ]
      }
    },
      {
      id: "401910016",
      line: "Golden State Warriors 94 @ Dallas Mavericks 116 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "GS", name: "Golden State Warriors", score: 94,
        players: [
          { name: "Draymond Green", min: 23, pts: 3, reb: 1, ast: 2, stl: 1, blk: 2, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: 1.15, zScores: { pts: -0.834, reb: -0.834, ast: -0.169, stl: 0.296, blk: 2.253, tpm: -0.157, fgImpact: 0.407, ftImpact: 0, to: 0.188 } },
          { name: "Yaxel Lendeborg", min: 30, pts: 13, reb: 5, ast: 4, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 6, fga: 18, ftm: 1, fta: 2, composite: -0.44, zScores: { pts: 0.386, reb: 0.472, ast: 0.663, stl: 1.378, blk: -0.575, tpm: -0.828, fgImpact: -2.065, ftImpact: -0.792, to: 0.916 } },
          { name: "Charles Bassey", min: 22, pts: 10, reb: 8, ast: 0, stl: 1, blk: 1, to: 4, tpm: 0, fgm: 5, fga: 8, ftm: 0, fta: 2, composite: -2.62, zScores: { pts: 0.02, reb: 1.451, ast: -1.001, stl: 0.296, blk: 0.839, tpm: -0.828, fgImpact: 0.908, ftImpact: -2.31, to: -1.994 } },
          { name: "LJ Cryer", min: 19, pts: 9, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -1.35, zScores: { pts: -0.102, reb: -1.16, ast: -0.169, stl: -0.787, blk: -0.575, tpm: 1.185, fgImpact: -0.657, ftImpact: 0, to: 0.916 } },
          { name: "Brandin Podziemski", min: 29, pts: 10, reb: 3, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 13, ftm: 0, fta: 2, composite: -4.05, zScores: { pts: 0.02, reb: -0.181, ast: 0.663, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.97, ftImpact: -2.31, to: 0.916 } },
          { name: "Georges Niang", min: 14, pts: 11, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 11, ftm: 1, fta: 1, composite: -2.57, zScores: { pts: 0.142, reb: -0.834, ast: -0.585, stl: -0.787, blk: -0.575, tpm: 0.514, fgImpact: -1.001, ftImpact: 0.363, to: 0.188 } },
          { name: "Graham Ike", min: 15, pts: 2, reb: 2, ast: 2, stl: 1, blk: 3, to: 3, tpm: 0, fgm: 0, fga: 4, ftm: 2, fta: 2, composite: -0.54, zScores: { pts: -0.957, reb: -0.507, ast: -0.169, stl: 0.296, blk: 3.667, tpm: -0.828, fgImpact: -1.502, ftImpact: 0.726, to: -1.266 } },
          { name: "Malevy Leons", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -3.34, zScores: { pts: -0.957, reb: -0.834, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0, ftImpact: 0.726, to: 0.916 } },
          { name: "Gui Santos", min: 17, pts: 6, reb: 6, ast: 6, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 4, composite: -1.37, zScores: { pts: -0.468, reb: 0.799, ast: 1.495, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: -0.688, ftImpact: -1.584, to: 0.188 } },
          { name: "Gary Payton II", min: 16, pts: 8, reb: 8, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 2.33, zScores: { pts: -0.224, reb: 1.451, ast: -0.169, stl: 0.296, blk: -0.575, tpm: 0.514, fgImpact: 0.845, ftImpact: 0, to: 0.188 } },
          { name: "De'Anthony Melton", min: 19, pts: 0, reb: 2, ast: 2, stl: 3, blk: 0, to: 4, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.94, zScores: { pts: -1.201, reb: -0.507, ast: -0.169, stl: 2.461, blk: -0.575, tpm: -0.828, fgImpact: -1.127, ftImpact: 0, to: -1.994 } },
          { name: "Will Richard", min: 27, pts: 20, reb: 0, ast: 3, stl: 4, blk: 0, to: 2, tpm: 1, fgm: 9, fga: 13, ftm: 1, fta: 2, composite: 3.97, zScores: { pts: 1.24, reb: -1.16, ast: 0.247, stl: 3.544, blk: -0.575, tpm: -0.157, fgImpact: 2.16, ftImpact: -0.792, to: -0.539 } }
        ]
      },
      home: {
        abbr: "DAL", name: "Dallas Mavericks", score: 116,
        players: [
          { name: "Caleb Martin", min: 20, pts: 8, reb: 5, ast: 3, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 2.09, zScores: { pts: -0.224, reb: 0.472, ast: 0.247, stl: 1.378, blk: -0.575, tpm: 0.514, fgImpact: 0.094, ftImpact: 0, to: 0.188 } },
          { name: "Daniel Gafford", min: 24, pts: 6, reb: 6, ast: 2, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 2, composite: -1.23, zScores: { pts: -0.468, reb: 0.799, ast: -0.169, stl: -0.787, blk: 2.253, tpm: -0.828, fgImpact: 0.094, ftImpact: -2.31, to: 0.188 } },
          { name: "P.J. Washington", min: 25, pts: 21, reb: 5, ast: 2, stl: 1, blk: 3, to: 0, tpm: 5, fgm: 7, fga: 10, ftm: 2, fta: 2, composite: 11.52, zScores: { pts: 1.362, reb: 0.472, ast: -0.169, stl: 0.296, blk: 3.667, tpm: 2.526, fgImpact: 1.722, ftImpact: 0.726, to: 0.916 } },
          { name: "Cooper Flagg", min: 34, pts: 33, reb: 5, ast: 9, stl: 4, blk: 0, to: 5, tpm: 3, fgm: 11, fga: 15, ftm: 8, fta: 8, composite: 13.35, zScores: { pts: 2.827, reb: 0.472, ast: 2.742, stl: 3.544, blk: -0.575, tpm: 1.185, fgImpact: 2.974, ftImpact: 2.905, to: -2.721 } },
          { name: "Kyrie Irving", min: 29, pts: 17, reb: 6, ast: 5, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 15, ftm: 2, fta: 2, composite: 4.16, zScores: { pts: 0.874, reb: 0.799, ast: 1.079, stl: 1.378, blk: -0.575, tpm: -0.157, fgImpact: -0.156, ftImpact: 0.726, to: 0.188 } },
          { name: "Naji Marshall", min: 27, pts: 12, reb: 5, ast: 2, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 2.2, zScores: { pts: 0.264, reb: 0.472, ast: -0.169, stl: 1.378, blk: -0.575, tpm: 0.514, fgImpact: 0.125, ftImpact: 0.726, to: -0.539 } },
          { name: "Santi Aldama", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.39, zScores: { pts: -1.201, reb: -1.16, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.751, ftImpact: 0, to: 0.916 } },
          { name: "Morez Johnson Jr.", min: 15, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 3, composite: -8.02, zScores: { pts: -0.834, reb: -0.834, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -1.095, ftImpact: -1.947, to: -0.539 } },
          { name: "Zaccharie Risacher", min: 18, pts: 3, reb: 3, ast: 0, stl: 0, blk: 2, to: 2, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -2.72, zScores: { pts: -0.834, reb: -0.181, ast: -1.001, stl: -0.787, blk: 2.253, tpm: -0.157, fgImpact: -1.471, ftImpact: 0, to: -0.539 } },
          { name: "Moussa Cisse", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.04, zScores: { pts: -1.201, reb: -0.834, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0, ftImpact: 0, to: 0.188 } },
          { name: "Marcus Sasser", min: 4, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.57, zScores: { pts: -1.201, reb: -0.507, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0, ftImpact: 0, to: 0.916 } },
          { name: "Max Christie", min: 8, pts: 5, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.48, zScores: { pts: -0.59, reb: -0.834, ast: -0.169, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: 0.438, ftImpact: 0, to: 0.188 } },
          { name: "Walter Clayton Jr.", min: 27, pts: 8, reb: 2, ast: 7, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -1.22, zScores: { pts: -0.224, reb: -0.507, ast: 1.911, stl: -0.787, blk: -0.575, tpm: 0.514, fgImpact: -0.281, ftImpact: 0, to: -1.266 } }
        ]
      }
    },
      {
      id: "401910015",
      line: "Boston Celtics 101 @ Denver Nuggets 105 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BOS", name: "Boston Celtics", score: 101,
        players: [
          { name: "Paul George", min: 23, pts: 10, reb: 4, ast: 1, stl: 3, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 12, ftm: 3, fta: 3, composite: 1.84, zScores: { pts: 0.02, reb: 0.146, ast: -0.585, stl: 2.461, blk: 0.839, tpm: -0.157, fgImpact: -2.159, ftImpact: 1.089, to: 0.188 } },
          { name: "Jayson Tatum", min: 37, pts: 24, reb: 8, ast: 3, stl: 1, blk: 0, to: 6, tpm: 3, fgm: 10, fga: 22, ftm: 1, fta: 2, composite: -0.35, zScores: { pts: 1.728, reb: 1.451, ast: 0.247, stl: 0.296, blk: -0.575, tpm: 1.185, fgImpact: -0.438, ftImpact: -0.792, to: -3.449 } },
          { name: "Neemias Queta", min: 27, pts: 17, reb: 10, ast: 3, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 8, fga: 14, ftm: 1, fta: 1, composite: 4.03, zScores: { pts: 0.874, reb: 2.104, ast: 0.247, stl: 1.378, blk: -0.575, tpm: -0.828, fgImpact: 1.002, ftImpact: 0.363, to: -0.539 } },
          { name: "Derrick White", min: 35, pts: 12, reb: 3, ast: 8, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 16, ftm: 2, fta: 2, composite: 1.18, zScores: { pts: 0.264, reb: -0.181, ast: 2.326, stl: -0.787, blk: 0.839, tpm: -0.828, fgImpact: -2.097, ftImpact: 0.726, to: 0.916 } },
          { name: "Jordan Walsh", min: 4, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.3, zScores: { pts: -1.201, reb: -1.16, ast: -1.001, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: -0.751, ftImpact: 0, to: 0.916 } },
          { name: "Sam Hauser", min: 17, pts: 9, reb: 2, ast: 2, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 2.55, zScores: { pts: -0.102, reb: -0.507, ast: -0.169, stl: 0.296, blk: 0.839, tpm: 1.185, fgImpact: 0.094, ftImpact: 0, to: 0.916 } },
          { name: "Chris Cenac Jr.", min: 17, pts: 6, reb: 6, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: -0.21, zScores: { pts: -0.468, reb: 0.799, ast: -1.001, stl: -0.787, blk: 0.839, tpm: -0.157, fgImpact: 0.438, ftImpact: -0.792, to: 0.916 } },
          { name: "Luka Garza", min: 5, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.201, reb: -0.834, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.376, ftImpact: 0, to: 0.916 } },
          { name: "Mitchell Robinson", min: 16, pts: 6, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: -2.1, zScores: { pts: -0.468, reb: 0.146, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0.814, ftImpact: 0.726, to: -0.539 } },
          { name: "Payton Pritchard", min: 30, pts: 15, reb: 1, ast: 2, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: -1.25, zScores: { pts: 0.63, reb: -0.834, ast: -0.169, stl: -0.787, blk: -0.575, tpm: 1.185, fgImpact: 0.564, ftImpact: 0, to: -1.266 } },
          { name: "Baylor Scheierman", min: 13, pts: 0, reb: 1, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -3.23, zScores: { pts: -1.201, reb: -0.834, ast: -0.585, stl: 1.378, blk: -0.575, tpm: -0.828, fgImpact: -1.502, ftImpact: 0, to: 0.916 } },
          { name: "Hugo Gonzalez", min: 16, pts: 2, reb: 6, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.84, zScores: { pts: -0.957, reb: 0.799, ast: -1.001, stl: -0.787, blk: 0.839, tpm: -0.828, fgImpact: -1.095, ftImpact: 0, to: 0.188 } }
        ]
      },
      home: {
        abbr: "DEN", name: "Denver Nuggets", score: 105,
        players: [
          { name: "Aaron Gordon", min: 31, pts: 13, reb: 8, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 10, ftm: 3, fta: 6, composite: -2.2, zScores: { pts: 0.386, reb: 1.451, ast: -0.169, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: 0.157, ftImpact: -2.376, to: -0.539 } },
          { name: "Cameron Johnson", min: 26, pts: 8, reb: 5, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 4, fta: 4, composite: -1.24, zScores: { pts: -0.224, reb: 0.472, ast: -0.585, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: -1.44, ftImpact: 1.453, to: 0.188 } },
          { name: "Nikola Jokic", min: 39, pts: 24, reb: 8, ast: 9, stl: 0, blk: 1, to: 2, tpm: 3, fgm: 9, fga: 17, ftm: 3, fta: 3, composite: 8.37, zScores: { pts: 1.728, reb: 1.451, ast: 2.742, stl: -0.787, blk: 0.839, tpm: 1.185, fgImpact: 0.658, ftImpact: 1.089, to: -0.539 } },
          { name: "Jamal Murray", min: 38, pts: 21, reb: 7, ast: 2, stl: 4, blk: 2, to: 3, tpm: 2, fgm: 7, fga: 15, ftm: 5, fta: 5, composite: 9.02, zScores: { pts: 1.362, reb: 1.125, ast: -0.169, stl: 3.544, blk: 2.253, tpm: 0.514, fgImpact: -0.156, ftImpact: 1.816, to: -1.266 } },
          { name: "Christian Braun", min: 35, pts: 15, reb: 5, ast: 3, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 16, ftm: 2, fta: 2, composite: 0.87, zScores: { pts: 0.63, reb: 0.472, ast: 0.247, stl: 1.378, blk: -0.575, tpm: -0.157, fgImpact: -1.314, ftImpact: 0.726, to: -0.539 } },
          { name: "Marvin Bagley III", min: 9, pts: 4, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 1, composite: -2.85, zScores: { pts: -0.712, reb: -0.181, ast: -1.001, stl: -0.787, blk: 0.839, tpm: -0.828, fgImpact: 0.063, ftImpact: -1.155, to: 0.916 } },
          { name: "Spencer Jones", min: 17, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -5.51, zScores: { pts: -0.957, reb: -0.507, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0.407, ftImpact: 0, to: -1.266 } },
          { name: "Trevon Brazile", min: 11, pts: 0, reb: 6, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.201, reb: 0.799, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0, ftImpact: 0, to: -0.539 } },
          { name: "DeMar DeRozan", min: 25, pts: 18, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 11, ftm: 7, fta: 8, composite: 0.89, zScores: { pts: 0.996, reb: -0.507, ast: -0.169, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: -0.219, ftImpact: 1.387, to: 0.916 } },
          { name: "Tyus Jones", min: 9, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -7.22, zScores: { pts: -1.201, reb: -1.16, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -1.127, ftImpact: 0, to: -0.539 } }
        ]
      }
    },
      {
      id: "401910017",
      line: "Utah Jazz 109 @ Los Angeles Lakers 97 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UTAH", name: "Utah Jazz", score: 109,
        players: [
          { name: "Mo Bamba", min: 23, pts: 6, reb: 16, ast: 0, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 4.97, zScores: { pts: -0.468, reb: 4.063, ast: -1.001, stl: 0.296, blk: 2.253, tpm: -0.828, fgImpact: 0.47, ftImpact: 0, to: 0.188 } },
          { name: "Josh Green", min: 28, pts: 11, reb: 2, ast: 2, stl: 2, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 4, ftm: 1, fta: 1, composite: 5.1, zScores: { pts: 0.142, reb: -0.507, ast: -0.169, stl: 1.378, blk: 0.839, tpm: 0.514, fgImpact: 1.628, ftImpact: 0.363, to: 0.916 } },
          { name: "Keyonte George", min: 39, pts: 30, reb: 1, ast: 10, stl: 1, blk: 0, to: 4, tpm: 5, fgm: 9, fga: 17, ftm: 7, fta: 9, composite: 5.93, zScores: { pts: 2.46, reb: -0.834, ast: 3.158, stl: 0.296, blk: -0.575, tpm: 2.526, fgImpact: 0.658, ftImpact: 0.232, to: -1.994 } },
          { name: "Ace Bailey", min: 27, pts: 19, reb: 8, ast: 3, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 19, ftm: 3, fta: 3, composite: 1.94, zScores: { pts: 1.118, reb: 1.451, ast: 0.247, stl: 0.296, blk: -0.575, tpm: 0.514, fgImpact: -1.658, ftImpact: 1.089, to: -0.539 } },
          { name: "Darryn Peterson", min: 19, pts: 11, reb: 1, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 5, ftm: 4, fta: 6, composite: -2.89, zScores: { pts: 0.142, reb: -0.834, ast: 0.247, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: 0.47, ftImpact: -0.858, to: -0.539 } },
          { name: "Kyle Filipowski", min: 6, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.38, zScores: { pts: -1.201, reb: -0.181, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0, ftImpact: 0, to: 0.188 } },
          { name: "Brice Sensabaugh", min: 14, pts: 8, reb: 3, ast: 2, stl: 0, blk: 0, to: 5, tpm: 0, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: -5.36, zScores: { pts: -0.224, reb: -0.181, ast: -0.169, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0.125, ftImpact: 0, to: -2.721 } },
          { name: "Jaxson Hayes", min: 25, pts: 6, reb: 7, ast: 2, stl: 2, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: 3.14, zScores: { pts: -0.468, reb: 1.125, ast: -0.169, stl: 1.378, blk: 2.253, tpm: -0.828, fgImpact: -1.064, ftImpact: 0.726, to: 0.188 } },
          { name: "Svi Mykhailiuk", min: 34, pts: 15, reb: 3, ast: 5, stl: 2, blk: 0, to: 4, tpm: 4, fgm: 4, fga: 10, ftm: 3, fta: 4, composite: 1.5, zScores: { pts: 0.63, reb: -0.181, ast: 1.079, stl: 1.378, blk: -0.575, tpm: 1.856, fgImpact: -0.626, ftImpact: -0.066, to: -1.994 } },
          { name: "Josh Okogie", min: 15, pts: 3, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -3.95, zScores: { pts: -0.834, reb: -1.16, ast: -1.001, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: 0.031, ftImpact: -0.792, to: 0.916 } },
          { name: "Isaiah Collier", min: 10, pts: 0, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.12, zScores: { pts: -1.201, reb: -0.834, ast: -0.169, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: 0, ftImpact: 0, to: 0.188 } }
        ]
      },
      home: {
        abbr: "LAL", name: "Los Angeles Lakers", score: 97,
        players: [
          { name: "Ziaire Williams", min: 18, pts: 7, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: -2.02, zScores: { pts: -0.346, reb: -0.507, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: 0.438, ftImpact: 0.726, to: 0.188 } },
          { name: "Walker Kessler", min: 31, pts: 10, reb: 11, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 4, fta: 10, composite: -5.89, zScores: { pts: 0.02, reb: 2.431, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.281, ftImpact: -5.478, to: 0.188 } },
          { name: "Matisse Thybulle", min: 21, pts: 2, reb: 1, ast: 3, stl: 4, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 1.48, zScores: { pts: -0.957, reb: -0.834, ast: 0.247, stl: 3.544, blk: 0.839, tpm: -0.828, fgImpact: -0.72, ftImpact: 0, to: 0.188 } },
          { name: "Luka Doncic", min: 37, pts: 29, reb: 5, ast: 7, stl: 2, blk: 0, to: 9, tpm: 2, fgm: 10, fga: 28, ftm: 7, fta: 7, composite: 0.26, zScores: { pts: 2.338, reb: 0.472, ast: 1.911, stl: 1.378, blk: -0.575, tpm: 0.514, fgImpact: -2.691, ftImpact: 2.542, to: -5.631 } },
          { name: "Quentin Grimes", min: 35, pts: 20, reb: 7, ast: 4, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 8, fga: 20, ftm: 0, fta: 0, composite: 2.46, zScores: { pts: 1.24, reb: 1.125, ast: 0.663, stl: -0.787, blk: -0.575, tpm: 1.856, fgImpact: -1.251, ftImpact: 0, to: 0.188 } },
          { name: "Jarred Vanderbilt", min: 12, pts: 0, reb: 5, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 2, composite: -3.36, zScores: { pts: -1.201, reb: 0.472, ast: 0.247, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: -0.376, ftImpact: -2.31, to: 0.916 } },
          { name: "Sandro Mamukelashvili", min: 21, pts: 6, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 10, ftm: 4, fta: 4, composite: -4.44, zScores: { pts: -0.468, reb: -0.181, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -2.973, ftImpact: 1.453, to: 0.916 } },
          { name: "Jake LaRavia", min: 30, pts: 4, reb: 6, ast: 2, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 1.6, zScores: { pts: -0.712, reb: 0.799, ast: -0.169, stl: 2.461, blk: -0.575, tpm: -0.828, fgImpact: 0.438, ftImpact: 0, to: 0.188 } },
          { name: "Adou Thiero", min: 6, pts: 0, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -1.201, reb: -0.834, ast: -0.585, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: -0.751, ftImpact: 0, to: 0.916 } },
          { name: "Carson Cooper", min: 2, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.66, zScores: { pts: -0.957, reb: -0.834, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0.407, ftImpact: 0, to: 0.916 } },
          { name: "Collin Sexton", min: 20, pts: 12, reb: 0, ast: 1, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 8, ftm: 3, fta: 3, composite: -3.05, zScores: { pts: 0.264, reb: -1.16, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: 0.125, ftImpact: 1.089, to: -1.266 } },
          { name: "Bronny James", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.63, zScores: { pts: -1.201, reb: -1.16, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0, ftImpact: 0, to: 0.916 } },
          { name: "Jaden Hardy", min: 2, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.22, zScores: { pts: -1.201, reb: -1.16, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0, ftImpact: 0, to: 0.916 } },
          { name: "Cameron Carr", min: 2, pts: 5, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.12, zScores: { pts: -0.59, reb: -1.16, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: 0.814, ftImpact: 0, to: 0.916 } }
        ]
      }
    },
      {
      id: "401910018",
      line: "Phoenix Suns 128 @ Sacramento Kings 107 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PHX", name: "Phoenix Suns", score: 128,
        players: [
          { name: "Dillon Brooks", min: 31, pts: 29, reb: 3, ast: 5, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 12, fga: 18, ftm: 0, fta: 1, composite: 6.06, zScores: { pts: 2.338, reb: -0.181, ast: 1.079, stl: -0.787, blk: -0.575, tpm: 2.526, fgImpact: 2.63, ftImpact: -1.155, to: 0.188 } },
          { name: "Miles Bridges", min: 29, pts: 13, reb: 6, ast: 5, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 6, fga: 8, ftm: 0, fta: 0, composite: 5.85, zScores: { pts: 0.386, reb: 0.799, ast: 1.079, stl: 0.296, blk: 0.839, tpm: -0.157, fgImpact: 1.69, ftImpact: 0, to: 0.916 } },
          { name: "Oso Ighodaro", min: 21, pts: 7, reb: 4, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: 0.58, zScores: { pts: -0.346, reb: 0.146, ast: -0.169, stl: 1.378, blk: -0.575, tpm: -0.828, fgImpact: 0.845, ftImpact: -0.792, to: 0.916 } },
          { name: "Devin Booker", min: 33, pts: 29, reb: 2, ast: 6, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 10, fga: 18, ftm: 7, fta: 7, composite: 7.36, zScores: { pts: 2.338, reb: -0.507, ast: 1.495, stl: 0.296, blk: -0.575, tpm: 0.514, fgImpact: 1.065, ftImpact: 2.542, to: 0.188 } },
          { name: "Jalen Green", min: 30, pts: 18, reb: 7, ast: 7, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 6, fga: 14, ftm: 2, fta: 2, composite: 5.23, zScores: { pts: 0.996, reb: 1.125, ast: 1.911, stl: 0.296, blk: -0.575, tpm: 1.856, fgImpact: -0.563, ftImpact: 0.726, to: -0.539 } },
          { name: "Ryan Dunn", min: 13, pts: 6, reb: 5, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 4, composite: -4.06, zScores: { pts: -0.468, reb: 0.472, ast: -0.169, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.313, ftImpact: -1.584, to: 0.188 } },
          { name: "Koa Peat", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.57, zScores: { pts: -0.957, reb: -1.16, ast: -1.001, stl: -0.787, blk: 0.839, tpm: -0.828, fgImpact: 0.407, ftImpact: 0, to: 0.916 } },
          { name: "Rasheer Fleming", min: 4, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.62, zScores: { pts: -1.201, reb: -0.834, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0, ftImpact: 0, to: 0.188 } },
          { name: "Khaman Maluach", min: 21, pts: 10, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 5, ftm: 2, fta: 2, composite: -2.24, zScores: { pts: 0.02, reb: -0.507, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 1.252, ftImpact: 0.726, to: -0.539 } },
          { name: "Luke Kennard", min: 17, pts: 3, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.92, zScores: { pts: -0.834, reb: -0.181, ast: -0.585, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: -0.72, ftImpact: 0, to: 0.916 } },
          { name: "Jordan Goodwin", min: 17, pts: 2, reb: 5, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.4, zScores: { pts: -0.957, reb: 0.472, ast: 0.247, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: 0.031, ftImpact: 0, to: 0.916 } },
          { name: "Collin Gillespie", min: 17, pts: 9, reb: 3, ast: 1, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 2, fga: 4, ftm: 3, fta: 4, composite: -1.9, zScores: { pts: -0.102, reb: -0.181, ast: -0.585, stl: 0.296, blk: -0.575, tpm: 0.514, fgImpact: 0.063, ftImpact: -0.066, to: -1.266 } },
          { name: "Jamaree Bouyea", min: 4, pts: 0, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.19, zScores: { pts: -1.201, reb: -0.834, ast: -0.585, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: -0.376, ftImpact: 0, to: 0.916 } }
        ]
      },
      home: {
        abbr: "SAC", name: "Sacramento Kings", score: 107,
        players: [
          { name: "Domantas Sabonis", min: 24, pts: 8, reb: 13, ast: 8, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 3.31, zScores: { pts: -0.224, reb: 3.084, ast: 2.326, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: 0.501, ftImpact: 0, to: -1.266 } },
          { name: "De'Andre Hunter", min: 35, pts: 7, reb: 1, ast: 4, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 11, ftm: 0, fta: 0, composite: -3.28, zScores: { pts: -0.346, reb: -0.834, ast: 0.663, stl: 0.296, blk: -0.575, tpm: -0.157, fgImpact: -1.784, ftImpact: 0, to: -0.539 } },
          { name: "Keegan Murray", min: 31, pts: 12, reb: 7, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 1.66, zScores: { pts: 0.264, reb: 1.125, ast: 0.247, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: 0.939, ftImpact: 0, to: 0.188 } },
          { name: "Zach LaVine", min: 32, pts: 18, reb: 5, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 8, fga: 12, ftm: 0, fta: 0, composite: 3.48, zScores: { pts: 0.996, reb: 0.472, ast: -0.169, stl: 0.296, blk: -0.575, tpm: 0.514, fgImpact: 1.753, ftImpact: 0, to: 0.188 } },
          { name: "Darius Acuff Jr.", min: 35, pts: 36, reb: 4, ast: 6, stl: 0, blk: 2, to: 2, tpm: 6, fgm: 11, fga: 22, ftm: 8, fta: 10, composite: 9.9, zScores: { pts: 3.193, reb: 0.146, ast: 1.495, stl: -0.787, blk: 2.253, tpm: 3.197, fgImpact: 0.345, ftImpact: 0.595, to: -0.539 } },
          { name: "Leaky Black", min: 17, pts: 3, reb: 0, ast: 2, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.45, zScores: { pts: -0.834, reb: -1.16, ast: -0.169, stl: -0.787, blk: 0.839, tpm: -0.157, fgImpact: -1.095, ftImpact: 0, to: 0.916 } },
          { name: "Precious Achiuwa", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.74, zScores: { pts: -1.201, reb: -1.16, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.376, ftImpact: 0, to: 0.188 } },
          { name: "Alex Karaban", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.06, zScores: { pts: -1.201, reb: -0.834, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: -0.751, ftImpact: 0, to: 0.916 } },
          { name: "Mason Plumlee", min: 4, pts: 0, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.21, zScores: { pts: -1.201, reb: -0.507, ast: -0.585, stl: 0.296, blk: -0.575, tpm: -0.828, fgImpact: 0, ftImpact: 0, to: 0.188 } },
          { name: "Dylan Cardwell", min: 12, pts: 6, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: -1.78, zScores: { pts: -0.468, reb: 0.146, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.828, fgImpact: 0.814, ftImpact: 0.726, to: 0.188 } },
          { name: "Malik Monk", min: 20, pts: 8, reb: 1, ast: 2, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -2.16, zScores: { pts: -0.224, reb: -0.834, ast: -0.169, stl: 0.296, blk: -0.575, tpm: 0.514, fgImpact: 0.094, ftImpact: 0, to: -1.266 } },
          { name: "Daeqwon Plowden", min: 4, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 2, composite: -6.25, zScores: { pts: -0.834, reb: -1.16, ast: -1.001, stl: -0.787, blk: -0.575, tpm: -0.157, fgImpact: -0.344, ftImpact: -2.31, to: 0.916 } },
          { name: "Emanuel Sharp", min: 14, pts: 6, reb: 2, ast: 1, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 7, ftm: 1, fta: 1, composite: -0.7, zScores: { pts: -0.468, reb: -0.507, ast: -0.585, stl: 1.378, blk: -0.575, tpm: -0.157, fgImpact: -1.064, ftImpact: 0.363, to: 0.916 } }
        ]
      }
    }
    ]
  },
    "2026-11-19": {
    games: [
      {
      id: "401910019",
      line: "Golden State Warriors 98 @ Memphis Grizzlies 126 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "GS", name: "Golden State Warriors", score: 98,
        players: [
          { name: "Gui Santos", min: 23, pts: 8, reb: 3, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 9, ftm: 2, fta: 4, composite: -8.35, zScores: { pts: -0.265, reb: -0.165, ast: -0.938, stl: -0.862, blk: -0.505, tpm: -0.829, fgImpact: -1.095, ftImpact: -2.78, to: -0.911 } },
          { name: "Yaxel Lendeborg", min: 33, pts: 11, reb: 8, ast: 7, stl: 1, blk: 2, to: 3, tpm: 1, fgm: 3, fga: 11, ftm: 4, fta: 4, composite: 3.96, zScores: { pts: 0.113, reb: 1.541, ast: 1.912, stl: 0.051, blk: 2.137, tpm: -0.158, fgImpact: -1.9, ftImpact: 1.175, to: -0.911 } },
          { name: "Charles Bassey", min: 25, pts: 16, reb: 13, ast: 1, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 6, fga: 7, ftm: 4, fta: 5, composite: 6.3, zScores: { pts: 0.745, reb: 3.248, ast: -0.531, stl: 0.051, blk: 2.137, tpm: -0.829, fgImpact: 2.24, ftImpact: -0.509, to: -0.252 } },
          { name: "De'Anthony Melton", min: 25, pts: 9, reb: 1, ast: 5, stl: 2, blk: 2, to: 2, tpm: 1, fgm: 3, fga: 10, ftm: 2, fta: 2, composite: 1.89, zScores: { pts: -0.139, reb: -0.847, ast: 1.098, stl: 0.965, blk: 2.137, tpm: -0.158, fgImpact: -1.498, ftImpact: 0.588, to: -0.252 } },
          { name: "Brandin Podziemski", min: 32, pts: 15, reb: 3, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 12, ftm: 5, fta: 6, composite: -2.03, zScores: { pts: 0.618, reb: -0.165, ast: -0.124, stl: 0.051, blk: -0.505, tpm: -0.829, fgImpact: -0.617, ftImpact: -0.215, to: -0.252 } },
          { name: "Georges Niang", min: 15, pts: 5, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -4.49, zScores: { pts: -0.644, reb: -0.506, ast: -0.938, stl: 0.051, blk: -0.505, tpm: -0.158, fgImpact: -1.535, ftImpact: 0, to: -0.252 } },
          { name: "Graham Ike", min: 4, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 3, fta: 4, composite: -4.92, zScores: { pts: -0.644, reb: -1.189, ast: -0.938, stl: -0.862, blk: -0.505, tpm: -0.829, fgImpact: 0.44, ftImpact: -0.802, to: 0.407 } },
          { name: "Malevy Leons", min: 4, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.84, zScores: { pts: -1.275, reb: -0.506, ast: -0.531, stl: -0.862, blk: -0.505, tpm: -0.829, fgImpact: -0.403, ftImpact: 0, to: 1.066 } },
          { name: "Al Horford", min: 17, pts: 3, reb: 2, ast: 2, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 1, composite: -2.62, zScores: { pts: -0.896, reb: -0.506, ast: -0.124, stl: 0.051, blk: 0.816, tpm: -0.829, fgImpact: -1.17, ftImpact: 0.294, to: -0.252 } },
          { name: "Gary Payton II", min: 24, pts: 2, reb: 1, ast: 1, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.41, zScores: { pts: -1.023, reb: -0.847, ast: -0.531, stl: 1.878, blk: -0.505, tpm: -0.829, fgImpact: 0.038, ftImpact: 0, to: 0.407 } },
          { name: "LJ Cryer", min: 12, pts: 9, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: -1.62, zScores: { pts: -0.139, reb: -1.189, ast: -0.531, stl: -0.862, blk: -0.505, tpm: -0.158, fgImpact: 0.113, ftImpact: 0.588, to: 1.066 } },
          { name: "Will Richard", min: 27, pts: 15, reb: 5, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 8, ftm: 4, fta: 4, composite: 0.59, zScores: { pts: 0.618, reb: 0.518, ast: -0.938, stl: -0.862, blk: -0.505, tpm: -0.158, fgImpact: 0.994, ftImpact: 1.175, to: -0.252 } }
        ]
      },
      home: {
        abbr: "MEM", name: "Memphis Grizzlies", score: 126,
        players: [
          { name: "Taylor Hendricks", min: 20, pts: 11, reb: 1, ast: 1, stl: 4, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 9, ftm: 3, fta: 3, composite: 1.23, zScores: { pts: 0.113, reb: -0.847, ast: -0.531, stl: 2.791, blk: -0.505, tpm: -0.829, fgImpact: -0.252, ftImpact: 0.881, to: 0.407 } },
          { name: "Cedric Coward", min: 25, pts: 19, reb: 4, ast: 4, stl: 1, blk: 1, to: 1, tpm: 5, fgm: 7, fga: 14, ftm: 0, fta: 0, composite: 6.05, zScores: { pts: 1.123, reb: 0.176, ast: 0.691, stl: 0.051, blk: 0.816, tpm: 2.523, fgImpact: 0.264, ftImpact: 0, to: 0.407 } },
          { name: "Cameron Boozer", min: 27, pts: 16, reb: 6, ast: 5, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 6, fga: 6, ftm: 4, fta: 4, composite: 4.74, zScores: { pts: 0.745, reb: 0.859, ast: 1.098, stl: -0.862, blk: 0.816, tpm: -0.829, fgImpact: 2.643, ftImpact: 1.175, to: -0.911 } },
          { name: "Jaylen Wells", min: 24, pts: 22, reb: 7, ast: 0, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 8, fga: 10, ftm: 2, fta: 2, composite: 5.96, zScores: { pts: 1.502, reb: 1.2, ast: -0.938, stl: -0.862, blk: -0.505, tpm: 1.853, fgImpact: 2.718, ftImpact: 0.588, to: 0.407 } },
          { name: "Cam Spencer", min: 27, pts: 9, reb: 2, ast: 11, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: 2.59, zScores: { pts: -0.139, reb: -0.506, ast: 3.541, stl: 0.051, blk: -0.505, tpm: -0.158, fgImpact: -0.692, ftImpact: 0.588, to: 0.407 } },
          { name: "Jerami Grant", min: 5, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -0.896, reb: -1.189, ast: -0.938, stl: -0.862, blk: -0.505, tpm: -0.158, fgImpact: 0.038, ftImpact: 0, to: 0.407 } },
          { name: "Kris Murray", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.59, zScores: { pts: -1.275, reb: -0.847, ast: -0.938, stl: -0.862, blk: -0.505, tpm: -0.829, fgImpact: -0.403, ftImpact: 0, to: 1.066 } },
          { name: "Olivier-Maxence Prosper", min: 24, pts: 16, reb: 5, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 12, ftm: 3, fta: 3, composite: 0.98, zScores: { pts: 0.745, reb: 0.518, ast: -0.531, stl: 0.051, blk: -0.505, tpm: -0.158, fgImpact: 0.227, ftImpact: 0.881, to: -0.252 } },
          { name: "Karim Lopez", min: 4, pts: 3, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.12, zScores: { pts: -0.896, reb: -1.189, ast: -0.938, stl: -0.862, blk: 0.816, tpm: -0.158, fgImpact: 0.038, ftImpact: 0, to: 1.066 } },
          { name: "Isaiah Stewart", min: 18, pts: 8, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -2, zScores: { pts: -0.265, reb: 0.176, ast: -0.531, stl: -0.862, blk: -0.505, tpm: -0.829, fgImpact: -0.252, ftImpact: 0, to: 1.066 } },
          { name: "Quinten Post", min: 10, pts: 5, reb: 1, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 1, composite: -3.85, zScores: { pts: -0.644, reb: -0.847, ast: -0.938, stl: 0.051, blk: -0.505, tpm: -0.829, fgImpact: 0.478, ftImpact: 0.294, to: -0.911 } },
          { name: "Jahmai Mashack", min: 26, pts: 0, reb: 3, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -1.77, zScores: { pts: -1.275, reb: -0.165, ast: 0.691, stl: 0.051, blk: -0.505, tpm: -0.829, fgImpact: -0.805, ftImpact: 0, to: 1.066 } },
          { name: "Javon Small", min: 25, pts: 14, reb: 7, ast: 7, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 5, fga: 12, ftm: 2, fta: 2, composite: 1.15, zScores: { pts: 0.492, reb: 1.2, ast: 1.912, stl: -0.862, blk: -0.505, tpm: 0.512, fgImpact: -0.617, ftImpact: 0.588, to: -1.569 } }
        ]
      }
    },
      {
      id: "401910020",
      line: "Portland Trail Blazers 124 @ Milwaukee Bucks 114 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "POR", name: "Portland Trail Blazers", score: 124,
        players: [
          { name: "Toumani Camara", min: 37, pts: 18, reb: 6, ast: 4, stl: 2, blk: 3, to: 2, tpm: 4, fgm: 6, fga: 11, ftm: 2, fta: 2, composite: 9.79, zScores: { pts: 0.997, reb: 0.859, ast: 0.691, stl: 0.965, blk: 3.458, tpm: 1.853, fgImpact: 0.629, ftImpact: 0.588, to: -0.252 } },
          { name: "Donovan Clingan", min: 26, pts: 7, reb: 13, ast: 2, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: 1.39, zScores: { pts: -0.392, reb: 3.248, ast: -0.124, stl: 0.051, blk: 0.816, tpm: -0.829, fgImpact: -0.327, ftImpact: -0.802, to: -0.252 } },
          { name: "Damian Lillard", min: 35, pts: 33, reb: 6, ast: 0, stl: 0, blk: 0, to: 4, tpm: 5, fgm: 10, fga: 18, ftm: 8, fta: 9, composite: 4.25, zScores: { pts: 2.891, reb: 0.859, ast: -0.938, stl: -0.862, blk: -0.505, tpm: 2.523, fgImpact: 1.183, ftImpact: 0.667, to: -1.569 } },
          { name: "Jayson Kent", min: 17, pts: 2, reb: 1, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.89, zScores: { pts: -1.023, reb: -0.847, ast: -0.124, stl: 0.051, blk: -0.505, tpm: -0.829, fgImpact: -0.365, ftImpact: 0, to: -0.252 } },
          { name: "Sidy Cissoko", min: 31, pts: 13, reb: 5, ast: 3, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 8, ftm: 2, fta: 3, composite: 3.35, zScores: { pts: 0.366, reb: 0.518, ast: 0.284, stl: 1.878, blk: -0.505, tpm: -0.158, fgImpact: 0.994, ftImpact: -1.096, to: 1.066 } },
          { name: "John Tonje", min: 6, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.72, zScores: { pts: -1.275, reb: -0.165, ast: -0.938, stl: -0.862, blk: -0.505, tpm: -0.829, fgImpact: -1.208, ftImpact: 0, to: 1.066 } },
          { name: "Branden Carlson", min: 10, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.25, zScores: { pts: -1.275, reb: -0.847, ast: -0.938, stl: -0.862, blk: -0.505, tpm: -0.829, fgImpact: -0.403, ftImpact: 0, to: 0.407 } },
          { name: "Yang Hansen", min: 12, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 2, composite: -8.18, zScores: { pts: -1.023, reb: -0.847, ast: -0.531, stl: -0.862, blk: -0.505, tpm: -0.829, fgImpact: 0.038, ftImpact: -3.367, to: -0.252 } },
          { name: "Jrue Holiday", min: 31, pts: 22, reb: 2, ast: 7, stl: 4, blk: 0, to: 4, tpm: 2, fgm: 8, fga: 14, ftm: 4, fta: 5, composite: 4.74, zScores: { pts: 1.502, reb: -0.506, ast: 1.912, stl: 2.791, blk: -0.505, tpm: 0.512, fgImpact: 1.108, ftImpact: -0.509, to: -1.569 } },
          { name: "Scoot Henderson", min: 35, pts: 27, reb: 7, ast: 3, stl: 1, blk: 1, to: 3, tpm: 5, fgm: 8, fga: 12, ftm: 6, fta: 7, composite: 8.09, zScores: { pts: 2.133, reb: 1.2, ast: 0.284, stl: 0.051, blk: 0.816, tpm: 2.523, fgImpact: 1.913, ftImpact: 0.079, to: -0.911 } }
        ]
      },
      home: {
        abbr: "MIL", name: "Milwaukee Bucks", score: 114,
        players: [
          { name: "Pete Nance", min: 28, pts: 7, reb: 3, ast: 3, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -0.1, zScores: { pts: -0.392, reb: -0.165, ast: 0.284, stl: -0.862, blk: 0.816, tpm: -0.158, fgImpact: -0.692, ftImpact: 0, to: 1.066 } },
          { name: "Nate Ament", min: 35, pts: 18, reb: 9, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 6, fga: 11, ftm: 4, fta: 4, composite: 3.96, zScores: { pts: 0.997, reb: 1.883, ast: -0.938, stl: -0.862, blk: -0.505, tpm: 0.512, fgImpact: 0.629, ftImpact: 1.175, to: 1.066 } },
          { name: "Kel'el Ware", min: 26, pts: 11, reb: 5, ast: 0, stl: 2, blk: 0, to: 4, tpm: 2, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: -2.14, zScores: { pts: 0.113, reb: 0.518, ast: -0.938, stl: 0.965, blk: -0.505, tpm: 0.512, fgImpact: 0.151, ftImpact: -1.39, to: -1.569 } },
          { name: "Tyler Herro", min: 31, pts: 19, reb: 4, ast: 3, stl: 1, blk: 0, to: 4, tpm: 4, fgm: 7, fga: 13, ftm: 1, fta: 3, composite: -0.99, zScores: { pts: 1.123, reb: 0.176, ast: 0.284, stl: 0.051, blk: -0.505, tpm: 1.853, fgImpact: 0.667, ftImpact: -3.074, to: -1.569 } },
          { name: "Brayden Burries", min: 28, pts: 14, reb: 3, ast: 3, stl: 2, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 13, ftm: 2, fta: 3, composite: -1.44, zScores: { pts: 0.492, reb: -0.165, ast: 0.284, stl: 0.965, blk: -0.505, tpm: 0.512, fgImpact: -1.019, ftImpact: -1.096, to: -0.911 } },
          { name: "Jaime Jaquez Jr.", min: 22, pts: 9, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 11, ftm: 2, fta: 2, composite: -2.63, zScores: { pts: -0.139, reb: -0.847, ast: -0.124, stl: 0.051, blk: -0.505, tpm: -0.158, fgImpact: -1.9, ftImpact: 0.588, to: 0.407 } },
          { name: "Jericho Sims", min: 10, pts: 0, reb: 0, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.7, zScores: { pts: -1.275, reb: -1.189, ast: -0.531, stl: 0.965, blk: -0.505, tpm: -0.829, fgImpact: -0.403, ftImpact: 0, to: 1.066 } },
          { name: "Caris LeVert", min: 11, pts: 3, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -1.48, zScores: { pts: -0.896, reb: -0.165, ast: -0.531, stl: 0.051, blk: -0.505, tpm: -0.829, fgImpact: 0.038, ftImpact: 0.294, to: 1.066 } },
          { name: "Gary Trent Jr.", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.99, zScores: { pts: -1.275, reb: -0.847, ast: -0.938, stl: -0.862, blk: -0.505, tpm: -0.829, fgImpact: -0.805, ftImpact: 0, to: 1.066 } },
          { name: "Ryan Rollins", min: 21, pts: 15, reb: 3, ast: 6, stl: 4, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 11, ftm: 4, fta: 6, composite: 0.77, zScores: { pts: 0.618, reb: -0.165, ast: 1.505, stl: 2.791, blk: -0.505, tpm: -0.158, fgImpact: -0.214, ftImpact: -2.192, to: -0.911 } },
          { name: "Kasparas Jakucionis", min: 22, pts: 18, reb: 3, ast: 2, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 6, fga: 11, ftm: 3, fta: 5, composite: -0.67, zScores: { pts: 0.997, reb: -0.165, ast: -0.124, stl: 0.051, blk: -0.505, tpm: 1.183, fgImpact: 0.629, ftImpact: -2.486, to: -0.252 } }
        ]
      }
    },
      {
      id: "401910021",
      line: "New York Knicks 102 @ Minnesota Timberwolves 99 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NY", name: "New York Knicks", score: 102,
        players: [
          { name: "OG Anunoby", min: 36, pts: 15, reb: 7, ast: 2, stl: 1, blk: 2, to: 1, tpm: 1, fgm: 6, fga: 12, ftm: 2, fta: 2, composite: 4.95, zScores: { pts: 0.618, reb: 1.2, ast: -0.124, stl: 0.051, blk: 2.137, tpm: -0.158, fgImpact: 0.227, ftImpact: 0.588, to: 0.407 } },
          { name: "Karl-Anthony Towns", min: 33, pts: 22, reb: 12, ast: 4, stl: 0, blk: 3, to: 4, tpm: 2, fgm: 9, fga: 20, ftm: 2, fta: 2, composite: 6.76, zScores: { pts: 1.502, reb: 2.906, ast: 0.691, stl: -0.862, blk: 3.458, tpm: 0.512, fgImpact: -0.466, ftImpact: 0.588, to: -1.569 } },
          { name: "Josh Hart", min: 28, pts: 11, reb: 6, ast: 2, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 0.16, zScores: { pts: 0.113, reb: 0.859, ast: -0.124, stl: -0.862, blk: -0.505, tpm: 1.183, fgImpact: -0.252, ftImpact: 0, to: -0.252 } },
          { name: "Mikal Bridges", min: 31, pts: 8, reb: 3, ast: 3, stl: 2, blk: 1, to: 1, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 2.26, zScores: { pts: -0.265, reb: -0.165, ast: 0.284, stl: 0.965, blk: 0.816, tpm: 0.512, fgImpact: -0.289, ftImpact: 0, to: 0.407 } },
          { name: "Jalen Brunson", min: 35, pts: 21, reb: 2, ast: 7, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 8, fga: 20, ftm: 1, fta: 1, composite: 4.49, zScores: { pts: 1.376, reb: -0.506, ast: 1.912, stl: 0.965, blk: -0.505, tpm: 1.853, fgImpact: -1.309, ftImpact: 0.294, to: 0.407 } },
          { name: "Andre Drummond", min: 15, pts: 4, reb: 4, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.59, zScores: { pts: -0.77, reb: 0.176, ast: -0.938, stl: 0.051, blk: -0.505, tpm: -0.829, fgImpact: 0.478, ftImpact: 0, to: -0.252 } },
          { name: "Landry Shamet", min: 30, pts: 10, reb: 1, ast: 2, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: 0.33, zScores: { pts: -0.013, reb: -0.847, ast: -0.124, stl: 0.051, blk: -0.505, tpm: 0.512, fgImpact: 0.919, ftImpact: 0.588, to: -0.252 } },
          { name: "Jose Alvarado", min: 13, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.023, reb: -0.506, ast: -0.531, stl: -0.862, blk: -0.505, tpm: -0.829, fgImpact: -0.365, ftImpact: 0, to: 1.066 } },
          { name: "Miles McBride", min: 8, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 1, composite: -4.22, zScores: { pts: -0.896, reb: -1.189, ast: -0.938, stl: -0.862, blk: -0.505, tpm: -0.829, fgImpact: -0.365, ftImpact: 0.294, to: 1.066 } },
          { name: "Tyler Kolek", min: 12, pts: 6, reb: 3, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 3, fta: 3, composite: -0.59, zScores: { pts: -0.518, reb: -0.165, ast: 1.098, stl: -0.862, blk: -0.505, tpm: -0.158, fgImpact: -0.768, ftImpact: 0.881, to: 0.407 } }
        ]
      },
      home: {
        abbr: "MIN", name: "Minnesota Timberwolves", score: 99,
        players: [
          { name: "Jaden McDaniels", min: 39, pts: 17, reb: 4, ast: 1, stl: 2, blk: 2, to: 3, tpm: 4, fgm: 6, fga: 10, ftm: 1, fta: 1, composite: 5.89, zScores: { pts: 0.871, reb: 0.176, ast: -0.531, stl: 0.965, blk: 2.137, tpm: 1.853, fgImpact: 1.032, ftImpact: 0.294, to: -0.911 } },
          { name: "Jonathan Kuminga", min: 35, pts: 23, reb: 3, ast: 3, stl: 0, blk: 3, to: 5, tpm: 2, fgm: 7, fga: 13, ftm: 7, fta: 7, composite: 5.35, zScores: { pts: 1.628, reb: -0.165, ast: 0.284, stl: -0.862, blk: 3.458, tpm: 0.512, fgImpact: 0.667, ftImpact: 2.057, to: -2.228 } },
          { name: "Rudy Gobert", min: 35, pts: 9, reb: 7, ast: 0, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 6, ftm: 1, fta: 2, composite: -0.93, zScores: { pts: -0.139, reb: 1.2, ast: -0.938, stl: 0.965, blk: -0.505, tpm: -0.829, fgImpact: 0.957, ftImpact: -1.39, to: -0.252 } },
          { name: "Ayo Dosunmu", min: 32, pts: 6, reb: 4, ast: 4, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 2, fga: 9, ftm: 0, fta: 0, composite: -2.44, zScores: { pts: -0.518, reb: 0.176, ast: 0.691, stl: 0.051, blk: -0.505, tpm: 0.512, fgImpact: -1.938, ftImpact: 0, to: -0.911 } },
          { name: "LaMelo Ball", min: 35, pts: 15, reb: 8, ast: 8, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 21, ftm: 0, fta: 0, composite: 1.3, zScores: { pts: 0.618, reb: 1.541, ast: 2.32, stl: -0.862, blk: -0.505, tpm: 1.183, fgImpact: -3.398, ftImpact: 0, to: 0.407 } },
          { name: "Trey Lyles", min: 16, pts: 8, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -0.21, zScores: { pts: -0.265, reb: 0.518, ast: -0.531, stl: -0.862, blk: -0.505, tpm: 0.512, fgImpact: 0.516, ftImpact: 0, to: 0.407 } },
          { name: "Joan Beringer", min: 13, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 3, fta: 4, composite: -3.24, zScores: { pts: -0.644, reb: -0.165, ast: -0.938, stl: -0.862, blk: -0.505, tpm: -0.829, fgImpact: 0.44, ftImpact: -0.802, to: 1.066 } },
          { name: "Terrence Shannon Jr.", min: 21, pts: 10, reb: 4, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 0.57, zScores: { pts: -0.013, reb: 0.176, ast: 0.284, stl: 0.051, blk: -0.505, tpm: -0.829, fgImpact: -0.252, ftImpact: 0.588, to: 1.066 } },
          { name: "Bones Hyland", min: 15, pts: 6, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 1, fta: 1, composite: -3.05, zScores: { pts: -0.518, reb: -0.847, ast: -0.531, stl: -0.862, blk: -0.505, tpm: -0.158, fgImpact: -0.327, ftImpact: 0.294, to: 0.407 } }
        ]
      }
    },
      {
      id: "401910022",
      line: "LA Clippers 112 @ San Antonio Spurs 124 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LAC", name: "LA Clippers", score: 112,
        players: [
          { name: "Derrick Jones Jr.", min: 27, pts: 8, reb: 2, ast: 1, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 4, fta: 5, composite: -1.95, zScores: { pts: -0.265, reb: -0.506, ast: -0.531, stl: 0.965, blk: -0.505, tpm: -0.829, fgImpact: 0.478, ftImpact: -0.509, to: -0.252 } },
          { name: "Rui Hachimura", min: 32, pts: 17, reb: 7, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 13, ftm: 1, fta: 1, composite: 3.37, zScores: { pts: 0.871, reb: 1.2, ast: -0.124, stl: 0.051, blk: -0.505, tpm: 0.512, fgImpact: 0.667, ftImpact: 0.294, to: 0.407 } },
          { name: "Brook Lopez", min: 27, pts: 23, reb: 3, ast: 4, stl: 1, blk: 0, to: 3, tpm: 5, fgm: 8, fga: 10, ftm: 2, fta: 2, composite: 6.62, zScores: { pts: 1.628, reb: -0.165, ast: 0.691, stl: 0.051, blk: -0.505, tpm: 2.523, fgImpact: 2.718, ftImpact: 0.588, to: -0.911 } },
          { name: "Max Strus", min: 32, pts: 18, reb: 5, ast: 4, stl: 0, blk: 0, to: 4, tpm: 5, fgm: 5, fga: 10, ftm: 3, fta: 3, composite: 2.86, zScores: { pts: 0.997, reb: 0.518, ast: 0.691, stl: -0.862, blk: -0.505, tpm: 2.523, fgImpact: 0.189, ftImpact: 0.881, to: -1.569 } },
          { name: "Darius Garland", min: 35, pts: 23, reb: 0, ast: 5, stl: 2, blk: 1, to: 1, tpm: 3, fgm: 8, fga: 17, ftm: 4, fta: 4, composite: 5.98, zScores: { pts: 1.628, reb: -1.189, ast: 1.098, stl: 0.965, blk: 0.816, tpm: 1.183, fgImpact: -0.101, ftImpact: 1.175, to: 0.407 } },
          { name: "Isaiah Jackson", min: 9, pts: 6, reb: 4, ast: 2, stl: 3, blk: 2, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 4.3, zScores: { pts: -0.518, reb: 0.176, ast: -0.124, stl: 1.878, blk: 2.137, tpm: -0.829, fgImpact: 0.516, ftImpact: 0, to: 1.066 } },
          { name: "Baba Miller", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.53, zScores: { pts: -1.275, reb: -1.189, ast: -0.938, stl: -0.862, blk: -0.505, tpm: -0.829, fgImpact: 0, ftImpact: 0, to: 1.066 } },
          { name: "Yanic Konan Niederhauser", min: 11, pts: 2, reb: 3, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.43, zScores: { pts: -1.023, reb: -0.165, ast: -0.938, stl: 0.051, blk: -0.505, tpm: -0.829, fgImpact: -0.768, ftImpact: 0, to: -0.252 } },
          { name: "Kris Dunn", min: 20, pts: 6, reb: 2, ast: 2, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -3.58, zScores: { pts: -0.518, reb: -0.506, ast: -0.124, stl: -0.862, blk: 0.816, tpm: -0.158, fgImpact: 0.076, ftImpact: -1.39, to: -0.911 } },
          { name: "Jalen Pickett", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.53, zScores: { pts: -1.275, reb: -1.189, ast: -0.938, stl: -0.862, blk: -0.505, tpm: -0.829, fgImpact: 0, ftImpact: 0, to: 1.066 } },
          { name: "Kobe Sanders", min: 14, pts: 0, reb: 1, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.27, zScores: { pts: -1.275, reb: -0.847, ast: -0.531, stl: -0.862, blk: 0.816, tpm: -0.829, fgImpact: -0.805, ftImpact: 0, to: 1.066 } },
          { name: "Cam Christie", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.53, zScores: { pts: -1.275, reb: -1.189, ast: -0.938, stl: -0.862, blk: -0.505, tpm: -0.829, fgImpact: 0, ftImpact: 0, to: 1.066 } },
          { name: "Gradey Dick", min: 13, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.21, zScores: { pts: -1.023, reb: -0.506, ast: -0.531, stl: -0.862, blk: -0.505, tpm: -0.829, fgImpact: -0.365, ftImpact: 0, to: 0.407 } },
          { name: "Keaton Wagler", min: 17, pts: 7, reb: 5, ast: 2, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -3.68, zScores: { pts: -0.392, reb: 0.518, ast: -0.124, stl: 0.051, blk: -0.505, tpm: -0.158, fgImpact: -1.498, ftImpact: 0, to: -1.569 } }
        ]
      },
      home: {
        abbr: "SA", name: "San Antonio Spurs", score: 124,
        players: [
          { name: "Julian Champagnie", min: 29, pts: 20, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 8, fga: 14, ftm: 0, fta: 2, composite: -0.47, zScores: { pts: 1.25, reb: 0.176, ast: -0.531, stl: -0.862, blk: -0.505, tpm: 1.853, fgImpact: 1.108, ftImpact: -3.367, to: 0.407 } },
          { name: "Victor Wembanyama", min: 33, pts: 32, reb: 11, ast: 3, stl: 1, blk: 1, to: 3, tpm: 2, fgm: 13, fga: 26, ftm: 4, fta: 4, composite: 7.75, zScores: { pts: 2.765, reb: 2.565, ast: 0.284, stl: 0.051, blk: 0.816, tpm: 0.512, fgImpact: 0.491, ftImpact: 1.175, to: -0.911 } },
          { name: "De'Aaron Fox", min: 32, pts: 10, reb: 2, ast: 5, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 5, ftm: 6, fta: 6, composite: -0.84, zScores: { pts: -0.013, reb: -0.506, ast: 1.098, stl: 0.051, blk: -0.505, tpm: -0.829, fgImpact: -0.327, ftImpact: 1.763, to: -1.569 } },
          { name: "Devin Vassell", min: 32, pts: 15, reb: 4, ast: 4, stl: 3, blk: 1, to: 1, tpm: 1, fgm: 6, fga: 12, ftm: 2, fta: 2, composite: 5.24, zScores: { pts: 0.618, reb: 0.176, ast: 0.691, stl: 1.878, blk: 0.816, tpm: -0.158, fgImpact: 0.227, ftImpact: 0.588, to: 0.407 } },
          { name: "Stephon Castle", min: 33, pts: 21, reb: 6, ast: 12, stl: 4, blk: 0, to: 8, tpm: 2, fgm: 7, fga: 12, ftm: 5, fta: 5, composite: 7.32, zScores: { pts: 1.376, reb: 0.859, ast: 3.948, stl: 2.791, blk: -0.505, tpm: 0.512, fgImpact: 1.07, ftImpact: 1.469, to: -4.205 } },
          { name: "Harrison Barnes", min: 16, pts: 9, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -2.4, zScores: { pts: -0.139, reb: -0.506, ast: -0.531, stl: -0.862, blk: -0.505, tpm: -0.158, fgImpact: 0.554, ftImpact: 0, to: -0.252 } },
          { name: "Keldon Johnson", min: 27, pts: 10, reb: 5, ast: 3, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 2.63, zScores: { pts: -0.013, reb: 0.518, ast: 0.284, stl: 0.965, blk: -0.505, tpm: -0.829, fgImpact: 0.554, ftImpact: 0.588, to: 1.066 } },
          { name: "Carter Bryant", min: 13, pts: 3, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.19, zScores: { pts: -0.896, reb: -0.847, ast: -0.938, stl: 0.051, blk: -0.505, tpm: -0.158, fgImpact: 0.038, ftImpact: 0, to: 1.066 } },
          { name: "Luke Kornet", min: 15, pts: 4, reb: 0, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -1.78, zScores: { pts: -0.77, reb: -1.189, ast: 0.284, stl: -0.862, blk: -0.505, tpm: -0.829, fgImpact: 0.44, ftImpact: 0.588, to: 1.066 } },
          { name: "Jordan McLaughlin", min: 11, pts: 0, reb: 1, ast: 5, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: 0.18, zScores: { pts: -1.275, reb: -0.847, ast: 1.098, stl: 1.878, blk: -0.505, tpm: -0.829, fgImpact: -0.403, ftImpact: 0, to: 1.066 } }
        ]
      }
    }
    ]
  },
    "2026-11-20": {
    games: [
      {
      id: "401909305",
      line: "Charlotte Hornets 97 @ Atlanta Hawks 111 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHA", name: "Charlotte Hornets", score: 97,
        players: [
          { name: "Moussa Diabate", min: 30, pts: 21, reb: 15, ast: 2, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 9, fga: 12, ftm: 3, fta: 5, composite: 2.18, zScores: { pts: 1.128, reb: 3.29, ast: -0.236, stl: 0.258, blk: -0.594, tpm: -0.855, fgImpact: 2.1, ftImpact: -0.952, to: -1.961 } },
          { name: "Brandon Miller", min: 33, pts: 19, reb: 8, ast: 3, stl: 1, blk: 0, to: 3, tpm: 5, fgm: 7, fga: 18, ftm: 0, fta: 0, composite: 2.25, zScores: { pts: 0.901, reb: 1.157, ast: 0.149, stl: 0.258, blk: -0.594, tpm: 2.601, fgImpact: -0.992, ftImpact: 0, to: -1.232 } },
          { name: "Naz Reid", min: 39, pts: 12, reb: 10, ast: 3, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 19, ftm: 2, fta: 4, composite: -4.53, zScores: { pts: 0.106, reb: 1.766, ast: 0.149, stl: -0.737, blk: -0.594, tpm: 0.527, fgImpact: -3.207, ftImpact: -1.306, to: -1.232 } },
          { name: "Coby White", min: 26, pts: 11, reb: 4, ast: 9, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 5, fga: 17, ftm: 1, fta: 1, composite: -0.19, zScores: { pts: -0.008, reb: -0.062, ast: 2.455, stl: 0.258, blk: 0.859, tpm: -0.855, fgImpact: -1.964, ftImpact: 0.354, to: -1.232 } },
          { name: "Sion James", min: 32, pts: 9, reb: 1, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 8, ftm: 0, fta: 2, composite: -4.34, zScores: { pts: -0.235, reb: -0.976, ast: -0.236, stl: 0.258, blk: -0.594, tpm: -0.164, fgImpact: 0.126, ftImpact: -2.014, to: -0.503 } },
          { name: "Royce O'Neale", min: 21, pts: 9, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -1.28, zScores: { pts: -0.235, reb: -0.976, ast: -1.005, stl: -0.737, blk: -0.594, tpm: 1.218, fgImpact: 0.094, ftImpact: 0, to: 0.954 } },
          { name: "Tidjane Salaun", min: 13, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -3.87, zScores: { pts: -0.802, reb: -0.672, ast: -0.62, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: -0.543, ftImpact: 0, to: 0.954 } },
          { name: "Ryan Kalkbrenner", min: 17, pts: 6, reb: 6, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: -1.62, zScores: { pts: -0.575, reb: 0.547, ast: -1.005, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: 0.669, ftImpact: 0.708, to: 0.226 } },
          { name: "Christian Anderson", min: 21, pts: 4, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -3.54, zScores: { pts: -0.802, reb: -0.976, ast: -0.236, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: -0.272, ftImpact: 0.708, to: 0.226 } },
          { name: "Liam McNeeley", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.51, zScores: { pts: -1.029, reb: -0.976, ast: -1.005, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: -0.272, ftImpact: 0, to: 0.954 } }
        ]
      },
      home: {
        abbr: "ATL", name: "Atlanta Hawks", score: 111,
        players: [
          { name: "Onyeka Okongwu", min: 34, pts: 16, reb: 7, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 10, ftm: 2, fta: 2, composite: 1.98, zScores: { pts: 0.56, reb: 0.852, ast: -0.62, stl: 0.258, blk: -0.594, tpm: 0.527, fgImpact: 0.794, ftImpact: 0.708, to: -0.503 } },
          { name: "Jalen Johnson", min: 36, pts: 26, reb: 6, ast: 6, stl: 4, blk: 1, to: 4, tpm: 3, fgm: 10, fga: 15, ftm: 3, fta: 4, composite: 8.79, zScores: { pts: 1.696, reb: 0.547, ast: 1.302, stl: 3.244, blk: 0.859, tpm: 1.218, fgImpact: 1.829, ftImpact: 0.055, to: -1.961 } },
          { name: "Nickeil Alexander-Walker", min: 32, pts: 17, reb: 4, ast: 3, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 20, ftm: 1, fta: 1, composite: -1.06, zScores: { pts: 0.674, reb: -0.062, ast: 0.149, stl: -0.737, blk: -0.594, tpm: 0.527, fgImpact: -1.598, ftImpact: 0.354, to: 0.226 } },
          { name: "Aaron Wiggins", min: 34, pts: 19, reb: 2, ast: 3, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 7, fga: 12, ftm: 1, fta: 2, composite: 3.08, zScores: { pts: 0.901, reb: -0.672, ast: 0.149, stl: 0.258, blk: -0.594, tpm: 1.91, fgImpact: 0.826, ftImpact: -0.653, to: 0.954 } },
          { name: "Dyson Daniels", min: 35, pts: 11, reb: 8, ast: 10, stl: 4, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 6.13, zScores: { pts: -0.008, reb: 1.157, ast: 2.839, stl: 3.244, blk: -0.594, tpm: -0.164, fgImpact: 0.157, ftImpact: 0, to: -0.503 } },
          { name: "Dorian Finney-Smith", min: 3, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.69, zScores: { pts: -1.256, reb: -1.281, ast: -0.62, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: -0.303, ftImpact: 0, to: 0.954 } },
          { name: "Corey Kispert", min: 16, pts: 7, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -2.28, zScores: { pts: -0.462, reb: -0.367, ast: -1.005, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: 0.094, ftImpact: 0, to: 0.954 } },
          { name: "Zuby Ejiofor", min: 14, pts: 5, reb: 2, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: -1.36, zScores: { pts: -0.689, reb: -0.672, ast: -0.236, stl: -0.737, blk: 0.859, tpm: -0.855, fgImpact: 0.669, ftImpact: -0.653, to: 0.954 } },
          { name: "Luguentz Dort", min: 23, pts: 2, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -3.67, zScores: { pts: -1.029, reb: -0.976, ast: -1.005, stl: -0.737, blk: 0.859, tpm: -0.855, fgImpact: -0.877, ftImpact: 0, to: 0.954 } },
          { name: "RayJ Dennis", min: 13, pts: 8, reb: 4, ast: 2, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 4, fta: 4, composite: 0.44, zScores: { pts: -0.348, reb: -0.062, ast: -0.236, stl: 1.253, blk: -0.594, tpm: -0.855, fgImpact: 0.366, ftImpact: 1.416, to: -0.503 } }
        ]
      }
    },
      {
      id: "401909306",
      line: "Orlando Magic 113 @ Brooklyn Nets 111 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ORL", name: "Orlando Magic", score: 113,
        players: [
          { name: "Franz Wagner", min: 36, pts: 35, reb: 5, ast: 7, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 13, fga: 25, ftm: 7, fta: 9, composite: 5.97, zScores: { pts: 2.717, reb: 0.242, ast: 1.686, stl: -0.737, blk: 0.859, tpm: 0.527, fgImpact: 0.711, ftImpact: 0.464, to: -0.503 } },
          { name: "Wendell Carter Jr.", min: 35, pts: 8, reb: 8, ast: 2, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 4, fta: 4, composite: 3, zScores: { pts: -0.348, reb: 1.157, ast: -0.236, stl: -0.737, blk: 2.312, tpm: -0.855, fgImpact: 0.063, ftImpact: 1.416, to: 0.226 } },
          { name: "Desmond Bane", min: 31, pts: 21, reb: 2, ast: 3, stl: 5, blk: 1, to: 1, tpm: 7, fgm: 7, fga: 17, ftm: 0, fta: 0, composite: 9.22, zScores: { pts: 1.128, reb: -0.672, ast: 0.149, stl: 4.239, blk: 0.859, tpm: 3.983, fgImpact: -0.689, ftImpact: 0, to: 0.226 } },
          { name: "Jalen Suggs", min: 30, pts: 8, reb: 6, ast: 2, stl: 1, blk: 0, to: 4, tpm: 2, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -2.92, zScores: { pts: -0.348, reb: 0.547, ast: -0.236, stl: 0.258, blk: -0.594, tpm: 0.527, fgImpact: -1.118, ftImpact: 0, to: -1.961 } },
          { name: "Anthony Black", min: 37, pts: 13, reb: 7, ast: 6, stl: 3, blk: 2, to: 5, tpm: 2, fgm: 4, fga: 11, ftm: 3, fta: 8, composite: 0.02, zScores: { pts: 0.22, reb: 0.852, ast: 1.302, stl: 2.249, blk: 2.312, tpm: 0.527, fgImpact: -0.783, ftImpact: -3.972, to: -2.69 } },
          { name: "Tristan da Silva", min: 24, pts: 6, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.18, zScores: { pts: -0.575, reb: -0.976, ast: -0.236, stl: -0.737, blk: -0.594, tpm: 0.527, fgImpact: -0.543, ftImpact: 0, to: 0.954 } },
          { name: "Nikola Vucevic", min: 23, pts: 15, reb: 8, ast: 1, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 5, ftm: 2, fta: 2, composite: 2.75, zScores: { pts: 0.447, reb: 1.157, ast: -0.62, stl: -0.737, blk: -0.594, tpm: 1.218, fgImpact: 1.672, ftImpact: 0.708, to: -0.503 } },
          { name: "Goga Bitadze", min: 15, pts: 4, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.78, zScores: { pts: -0.802, reb: -0.062, ast: -0.62, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: 0.669, ftImpact: 0, to: 0.226 } },
          { name: "Jevon Carter", min: 10, pts: 3, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.41, zScores: { pts: -0.916, reb: -1.281, ast: -1.005, stl: 0.258, blk: -0.594, tpm: -0.164, fgImpact: 0.334, ftImpact: 0, to: 0.954 } }
        ]
      },
      home: {
        abbr: "BKN", name: "Brooklyn Nets", score: 111,
        players: [
          { name: "Julius Randle", min: 39, pts: 27, reb: 9, ast: 6, stl: 3, blk: 0, to: 3, tpm: 1, fgm: 9, fga: 20, ftm: 8, fta: 11, composite: 4.32, zScores: { pts: 1.809, reb: 1.461, ast: 1.302, stl: 2.249, blk: -0.594, tpm: -0.164, fgImpact: -0.323, ftImpact: -0.189, to: -1.232 } },
          { name: "Michael Porter Jr.", min: 34, pts: 16, reb: 4, ast: 5, stl: 2, blk: 0, to: 3, tpm: 3, fgm: 6, fga: 14, ftm: 1, fta: 2, composite: 0.99, zScores: { pts: 0.56, reb: -0.062, ast: 0.917, stl: 1.253, blk: -0.594, tpm: 1.218, fgImpact: -0.417, ftImpact: -0.653, to: -1.232 } },
          { name: "Danny Wolf", min: 26, pts: 20, reb: 5, ast: 2, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 6, fga: 10, ftm: 4, fta: 4, composite: 3.57, zScores: { pts: 1.014, reb: 0.242, ast: -0.236, stl: 0.258, blk: -0.594, tpm: 1.91, fgImpact: 0.794, ftImpact: 1.416, to: -1.232 } },
          { name: "Day'Ron Sharpe", min: 26, pts: 17, reb: 11, ast: 2, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 7, fga: 9, ftm: 3, fta: 3, composite: 5.79, zScores: { pts: 0.674, reb: 2.071, ast: -0.236, stl: 0.258, blk: 0.859, tpm: -0.855, fgImpact: 1.734, ftImpact: 1.062, to: 0.226 } },
          { name: "Nolan Traore", min: 18, pts: 4, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -4.09, zScores: { pts: -0.802, reb: -1.281, ast: -0.236, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: -0.543, ftImpact: 0, to: 0.954 } },
          { name: "Noah Clowney", min: 22, pts: 0, reb: 2, ast: 2, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -2.16, zScores: { pts: -1.256, reb: -0.672, ast: -0.236, stl: 0.258, blk: 0.859, tpm: -0.855, fgImpact: -1.212, ftImpact: 0, to: 0.954 } },
          { name: "Moritz Wagner", min: 22, pts: 3, reb: 5, ast: 2, stl: 2, blk: 0, to: 4, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.65, zScores: { pts: -0.916, reb: 0.242, ast: -0.236, stl: 1.253, blk: -0.594, tpm: -0.164, fgImpact: -0.272, ftImpact: 0, to: -1.961 } },
          { name: "Keon Ellis", min: 8, pts: 0, reb: 1, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.63, zScores: { pts: -1.256, reb: -0.976, ast: -0.62, stl: -0.737, blk: 0.859, tpm: -0.855, fgImpact: 0, ftImpact: 0, to: 0.954 } },
          { name: "Mikel Brown Jr.", min: 24, pts: 18, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 14, ftm: 3, fta: 3, composite: -0.44, zScores: { pts: 0.787, reb: -0.976, ast: -1.005, stl: -0.737, blk: -0.594, tpm: 1.218, fgImpact: -0.417, ftImpact: 1.062, to: 0.226 } },
          { name: "Egor Demin", min: 21, pts: 6, reb: 3, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 6, ftm: 4, fta: 4, composite: -3.63, zScores: { pts: -0.575, reb: -0.367, ast: -0.236, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: -1.18, ftImpact: 1.416, to: -0.503 } }
        ]
      }
    },
      {
      id: "401909307",
      line: "Indiana Pacers 119 @ Cleveland Cavaliers 128 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "IND", name: "Indiana Pacers", score: 119,
        players: [
          { name: "Pascal Siakam", min: 30, pts: 21, reb: 7, ast: 2, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 8, fga: 17, ftm: 3, fta: 6, composite: -1.57, zScores: { pts: 1.128, reb: 0.852, ast: -0.236, stl: -0.737, blk: -0.594, tpm: 0.527, fgImpact: -0.052, ftImpact: -1.959, to: -0.503 } },
          { name: "Ivica Zubac", min: 27, pts: 21, reb: 10, ast: 2, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 8, fga: 11, ftm: 5, fta: 6, composite: 6.86, zScores: { pts: 1.128, reb: 1.766, ast: -0.236, stl: -0.737, blk: 3.765, tpm: -0.855, fgImpact: 1.766, ftImpact: 0.763, to: -0.503 } },
          { name: "Kelly Oubre Jr.", min: 23, pts: 17, reb: 6, ast: 0, stl: 0, blk: 2, to: 1, tpm: 3, fgm: 6, fga: 10, ftm: 2, fta: 2, composite: 4.74, zScores: { pts: 0.674, reb: 0.547, ast: -1.005, stl: -0.737, blk: 2.312, tpm: 1.218, fgImpact: 0.794, ftImpact: 0.708, to: 0.226 } },
          { name: "Andrew Nembhard", min: 26, pts: 12, reb: 3, ast: 8, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 10, ftm: 3, fta: 4, composite: 1.13, zScores: { pts: 0.106, reb: -0.367, ast: 2.071, stl: 0.258, blk: -0.594, tpm: 1.218, fgImpact: -1.118, ftImpact: 0.055, to: -0.503 } },
          { name: "Aaron Nesmith", min: 29, pts: 2, reb: 10, ast: 7, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 1, composite: 1.91, zScores: { pts: -1.029, reb: 1.766, ast: 1.686, stl: -0.737, blk: 2.312, tpm: -0.855, fgImpact: -1.18, ftImpact: -1.007, to: 0.954 } },
          { name: "Larry Nance Jr.", min: 11, pts: 7, reb: 2, ast: 0, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 0.32, zScores: { pts: -0.462, reb: -0.672, ast: -1.005, stl: -0.737, blk: 2.312, tpm: -0.164, fgImpact: 0.094, ftImpact: 0, to: 0.954 } },
          { name: "Obi Toppin", min: 26, pts: 17, reb: 3, ast: 2, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 11, ftm: 3, fta: 4, composite: -0.69, zScores: { pts: 0.674, reb: -0.367, ast: -0.236, stl: -0.737, blk: -0.594, tpm: 0.527, fgImpact: 0.491, ftImpact: 0.055, to: -0.503 } },
          { name: "Jalen Slawson", min: 14, pts: 4, reb: 2, ast: 2, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.14, zScores: { pts: -0.802, reb: -0.672, ast: -0.236, stl: 1.253, blk: 0.859, tpm: -0.855, fgImpact: 0.366, ftImpact: 0, to: 0.226 } },
          { name: "Jarace Walker", min: 11, pts: 8, reb: 1, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 2, ftm: 3, fta: 4, composite: -1.72, zScores: { pts: -0.348, reb: -0.976, ast: 0.149, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: 0.669, ftImpact: 0.055, to: 0.226 } },
          { name: "Jay Huff", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.77, zScores: { pts: -1.256, reb: -1.281, ast: -1.005, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: 0, ftImpact: 0, to: 0.954 } },
          { name: "T.J. McConnell", min: 11, pts: 2, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.05, zScores: { pts: -1.029, reb: -0.976, ast: -0.236, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: -0.574, ftImpact: 0, to: 0.954 } },
          { name: "Quenton Jackson", min: 18, pts: 3, reb: 2, ast: 2, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.71, zScores: { pts: -0.916, reb: -0.672, ast: -0.236, stl: 1.253, blk: -0.594, tpm: -0.164, fgImpact: -0.877, ftImpact: 0, to: -0.503 } },
          { name: "Braden Smith", min: 11, pts: 5, reb: 3, ast: 5, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.35, zScores: { pts: -0.689, reb: -0.367, ast: 0.917, stl: 0.258, blk: -0.594, tpm: -0.164, fgImpact: 0.063, ftImpact: 0, to: 0.226 } }
        ]
      },
      home: {
        abbr: "CLE", name: "Cleveland Cavaliers", score: 128,
        players: [
          { name: "Jarrett Allen", min: 31, pts: 6, reb: 8, ast: 4, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 1.85, zScores: { pts: -0.575, reb: 1.157, ast: 0.533, stl: -0.737, blk: 2.312, tpm: -0.855, fgImpact: -0.209, ftImpact: 0, to: 0.226 } },
          { name: "James Harden", min: 40, pts: 51, reb: 6, ast: 6, stl: 1, blk: 0, to: 2, tpm: 7, fgm: 15, fga: 26, ftm: 14, fta: 14, composite: 16.16, zScores: { pts: 4.534, reb: 0.547, ast: 1.302, stl: 0.258, blk: -0.594, tpm: 3.983, fgImpact: 1.683, ftImpact: 4.955, to: -0.503 } },
          { name: "Donovan Mitchell", min: 29, pts: 20, reb: 3, ast: 3, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 8, fga: 17, ftm: 2, fta: 4, composite: -1.87, zScores: { pts: 1.014, reb: -0.367, ast: 0.149, stl: -0.737, blk: -0.594, tpm: 0.527, fgImpact: -0.052, ftImpact: -1.306, to: -0.503 } },
          { name: "Peyton Watson", min: 29, pts: 15, reb: 4, ast: 3, stl: 2, blk: 1, to: 4, tpm: 3, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 3, zScores: { pts: 0.447, reb: -0.062, ast: 0.149, stl: 1.253, blk: 0.859, tpm: 1.218, fgImpact: 1.097, ftImpact: 0, to: -1.961 } },
          { name: "Tyrese Proctor", min: 24, pts: 5, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.98, zScores: { pts: -0.689, reb: -0.976, ast: -0.236, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: -0.543, ftImpact: 0, to: 0.954 } },
          { name: "Mario Hezonja", min: 20, pts: 10, reb: 10, ast: 3, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 1.34, zScores: { pts: -0.121, reb: 1.766, ast: 0.149, stl: -0.737, blk: -0.594, tpm: 0.527, fgImpact: 0.126, ftImpact: 0, to: 0.226 } },
          { name: "Thomas Bryant", min: 16, pts: 9, reb: 6, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: 0.5, zScores: { pts: -0.235, reb: 0.547, ast: -1.005, stl: 0.258, blk: -0.594, tpm: 0.527, fgImpact: 0.7, ftImpact: -0.653, to: 0.954 } },
          { name: "Norchad Omier", min: 6, pts: 2, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.52, zScores: { pts: -1.029, reb: -0.976, ast: -1.005, stl: 0.258, blk: -0.594, tpm: -0.855, fgImpact: -0.272, ftImpact: 0, to: 0.954 } },
          { name: "Sam Merrill", min: 25, pts: 6, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -2.87, zScores: { pts: -0.575, reb: -0.976, ast: -0.62, stl: -0.737, blk: -0.594, tpm: 0.527, fgImpact: -0.846, ftImpact: 0, to: 0.954 } },
          { name: "Meleek Thomas", min: 20, pts: 4, reb: 1, ast: 4, stl: 4, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -1.1, zScores: { pts: -0.802, reb: -0.976, ast: 0.533, stl: 3.244, blk: -0.594, tpm: -0.855, fgImpact: -1.149, ftImpact: 0, to: -0.503 } }
        ]
      }
    },
      {
      id: "401909308",
      line: "Toronto Raptors 105 @ Detroit Pistons 102 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TOR", name: "Toronto Raptors", score: 105,
        players: [
          { name: "Scottie Barnes", min: 37, pts: 29, reb: 5, ast: 5, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 14, fga: 21, ftm: 1, fta: 2, composite: 2.68, zScores: { pts: 2.036, reb: 0.242, ast: 0.917, stl: 0.258, blk: -0.594, tpm: -0.855, fgImpact: 2.56, ftImpact: -0.653, to: -1.232 } },
          { name: "Allen Graves", min: 33, pts: 20, reb: 10, ast: 1, stl: 3, blk: 1, to: 0, tpm: 2, fgm: 6, fga: 9, ftm: 6, fta: 6, composite: 9.97, zScores: { pts: 1.014, reb: 1.766, ast: -0.62, stl: 2.249, blk: 0.859, tpm: 0.527, fgImpact: 1.097, ftImpact: 2.124, to: 0.954 } },
          { name: "Jakob Poeltl", min: 32, pts: 10, reb: 9, ast: 3, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 4.23, zScores: { pts: -0.121, reb: 1.461, ast: 0.149, stl: -0.737, blk: 2.312, tpm: -0.855, fgImpact: 1.066, ftImpact: 0, to: 0.954 } },
          { name: "Immanuel Quickley", min: 33, pts: 18, reb: 3, ast: 10, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 6, fga: 10, ftm: 3, fta: 4, composite: 2.76, zScores: { pts: 0.787, reb: -0.367, ast: 2.839, stl: -0.737, blk: -0.594, tpm: 1.218, fgImpact: 0.794, ftImpact: 0.055, to: -1.232 } },
          { name: "Ja'Kobe Walter", min: 33, pts: 8, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 11, ftm: 2, fta: 2, composite: -1.5, zScores: { pts: -0.348, reb: -0.367, ast: 0.149, stl: 0.258, blk: -0.594, tpm: 0.527, fgImpact: -2.058, ftImpact: 0.708, to: 0.226 } },
          { name: "Trayce Jackson-Davis", min: 16, pts: 8, reb: 2, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 4, ftm: 0, fta: 0, composite: 0.91, zScores: { pts: -0.348, reb: -0.672, ast: -0.62, stl: 0.258, blk: 0.859, tpm: -0.855, fgImpact: 1.337, ftImpact: 0, to: 0.954 } },
          { name: "Jamison Battle", min: 20, pts: 10, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: -0.73, zScores: { pts: -0.121, reb: 0.242, ast: -1.005, stl: -0.737, blk: -0.594, tpm: 0.527, fgImpact: 0.731, ftImpact: 0, to: 0.226 } },
          { name: "Malachi Smith", min: 5, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.56, zScores: { pts: -1.029, reb: -1.281, ast: -0.62, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: 0.334, ftImpact: 0, to: 0.226 } },
          { name: "Jamal Shead", min: 15, pts: 0, reb: 1, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -5.6, zScores: { pts: -1.256, reb: -0.976, ast: 0.533, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: -1.212, ftImpact: 0, to: -0.503 } },
          { name: "Alijah Martin", min: 16, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -5.72, zScores: { pts: -1.256, reb: -0.672, ast: -0.62, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: -1.212, ftImpact: 0, to: 0.226 } }
        ]
      },
      home: {
        abbr: "DET", name: "Detroit Pistons", score: 102,
        players: [
          { name: "John Collins", min: 20, pts: 3, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 1, composite: -3.17, zScores: { pts: -0.916, reb: 0.547, ast: -0.62, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: -0.574, ftImpact: 0.354, to: 0.226 } },
          { name: "Kevin Huerter", min: 36, pts: 20, reb: 3, ast: 3, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 7, fga: 15, ftm: 2, fta: 3, composite: 1.48, zScores: { pts: 1.014, reb: -0.367, ast: 0.149, stl: 0.258, blk: -0.594, tpm: 1.91, fgImpact: -0.083, ftImpact: -0.299, to: -0.503 } },
          { name: "Cade Cunningham", min: 36, pts: 23, reb: 5, ast: 9, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 10, fga: 22, ftm: 1, fta: 4, composite: 0.05, zScores: { pts: 1.355, reb: 0.242, ast: 2.455, stl: 0.258, blk: -0.594, tpm: 0.527, fgImpact: -0.292, ftImpact: -2.666, to: -1.232 } },
          { name: "Ausar Thompson", min: 33, pts: 13, reb: 6, ast: 3, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 6, fga: 9, ftm: 1, fta: 2, composite: 1.39, zScores: { pts: 0.22, reb: 0.547, ast: 0.149, stl: 1.253, blk: -0.594, tpm: -0.855, fgImpact: 1.097, ftImpact: -0.653, to: 0.226 } },
          { name: "Daniss Jenkins", min: 39, pts: 14, reb: 4, ast: 1, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 14, ftm: 2, fta: 2, composite: 0.72, zScores: { pts: 0.333, reb: -0.062, ast: -0.62, stl: 1.253, blk: -0.594, tpm: 0.527, fgImpact: -1.055, ftImpact: 0.708, to: 0.226 } },
          { name: "Paul Reed", min: 28, pts: 8, reb: 7, ast: 3, stl: 3, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 4.23, zScores: { pts: -0.348, reb: 0.852, ast: 0.149, stl: 2.249, blk: 0.859, tpm: -0.855, fgImpact: 0.397, ftImpact: 0.708, to: 0.226 } },
          { name: "Javonte Green", min: 23, pts: 12, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 4, ftm: 3, fta: 3, composite: 0.73, zScores: { pts: 0.106, reb: -0.976, ast: -1.005, stl: -0.737, blk: -0.594, tpm: 1.218, fgImpact: 0.7, ftImpact: 1.062, to: 0.954 } },
          { name: "Isaiah Joe", min: 18, pts: 9, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 7, ftm: 4, fta: 4, composite: -3.64, zScores: { pts: -0.235, reb: -0.976, ast: -1.005, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: -0.846, ftImpact: 1.416, to: -0.503 } },
          { name: "Chaz Lanier", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.08, zScores: { pts: -1.256, reb: -1.281, ast: -1.005, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: -0.303, ftImpact: 0, to: 0.954 } }
        ]
      }
    },
      {
      id: "401909309",
      line: "Washington Wizards 98 @ Chicago Bulls 94 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WSH", name: "Washington Wizards", score: 98,
        players: [
          { name: "Anthony Davis", min: 34, pts: 36, reb: 11, ast: 3, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 16, fga: 26, ftm: 4, fta: 9, composite: 0.33, zScores: { pts: 2.831, reb: 2.071, ast: 0.149, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: 2.32, ftImpact: -3.618, to: -1.232 } },
          { name: "AJ Dybantsa", min: 37, pts: 20, reb: 10, ast: 6, stl: 2, blk: 1, to: 3, tpm: 2, fgm: 9, fga: 18, ftm: 0, fta: 0, composite: 5.77, zScores: { pts: 1.014, reb: 1.766, ast: 1.302, stl: 1.253, blk: 0.859, tpm: 0.527, fgImpact: 0.283, ftImpact: 0, to: -1.232 } },
          { name: "Kyshawn George", min: 35, pts: 11, reb: 7, ast: 5, stl: 1, blk: 2, to: 3, tpm: 1, fgm: 5, fga: 17, ftm: 0, fta: 0, composite: 0.97, zScores: { pts: -0.008, reb: 0.852, ast: 0.917, stl: 0.258, blk: 2.312, tpm: -0.164, fgImpact: -1.964, ftImpact: 0, to: -1.232 } },
          { name: "Alex Sarr", min: 20, pts: 3, reb: 3, ast: 0, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.11, zScores: { pts: -0.916, reb: -0.367, ast: -1.005, stl: 0.258, blk: 0.859, tpm: -0.164, fgImpact: -0.272, ftImpact: 0, to: -0.503 } },
          { name: "Trae Young", min: 35, pts: 16, reb: 2, ast: 5, stl: 3, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 13, ftm: 4, fta: 4, composite: 4.62, zScores: { pts: 0.56, reb: -0.672, ast: 0.917, stl: 2.249, blk: -0.594, tpm: 1.91, fgImpact: -1.389, ftImpact: 1.416, to: 0.226 } },
          { name: "Khris Middleton", min: 28, pts: 5, reb: 2, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -3.34, zScores: { pts: -0.689, reb: -0.672, ast: 0.149, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: -0.24, ftImpact: -0.653, to: 0.954 } },
          { name: "Deandre Ayton", min: 11, pts: 0, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.47, zScores: { pts: -1.256, reb: -0.062, ast: -0.62, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: -0.303, ftImpact: 0, to: 0.954 } },
          { name: "Bub Carrington", min: 6, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -0.916, reb: -1.281, ast: -1.005, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: 0.031, ftImpact: 0, to: 0.954 } },
          { name: "Bilal Coulibaly", min: 24, pts: 2, reb: 5, ast: 0, stl: 2, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 1.6, zScores: { pts: -1.029, reb: 0.242, ast: -1.005, stl: 1.253, blk: 2.312, tpm: -0.855, fgImpact: -0.272, ftImpact: 0, to: 0.954 } },
          { name: "Will Riley", min: 6, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -6.1, zScores: { pts: -1.256, reb: -0.976, ast: -0.62, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: 0, ftImpact: -2.014, to: 0.954 } },
          { name: "Tre Johnson", min: 4, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.21, zScores: { pts: -1.029, reb: -0.976, ast: -1.005, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: 0.031, ftImpact: 0, to: 0.954 } }
        ]
      },
      home: {
        abbr: "CHI", name: "Chicago Bulls", score: 94,
        players: [
          { name: "Isaac Okoro", min: 29, pts: 9, reb: 7, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 4, fta: 4, composite: 1.2, zScores: { pts: -0.235, reb: 0.852, ast: -0.62, stl: 0.258, blk: -0.594, tpm: -0.164, fgImpact: 0.063, ftImpact: 1.416, to: 0.226 } },
          { name: "Matas Buzelis", min: 25, pts: 9, reb: 5, ast: 1, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: -2.82, zScores: { pts: -0.235, reb: 0.242, ast: -0.62, stl: 0.258, blk: -0.594, tpm: -0.164, fgImpact: -0.48, ftImpact: 0, to: -1.232 } },
          { name: "Nic Claxton", min: 29, pts: 11, reb: 7, ast: 1, stl: 0, blk: 2, to: 3, tpm: 0, fgm: 4, fga: 8, ftm: 3, fta: 3, composite: 0.9, zScores: { pts: -0.008, reb: 0.852, ast: -0.62, stl: -0.737, blk: 2.312, tpm: -0.855, fgImpact: 0.126, ftImpact: 1.062, to: -1.232 } },
          { name: "Norman Powell", min: 33, pts: 16, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 18, ftm: 1, fta: 2, composite: -1.96, zScores: { pts: 0.56, reb: -0.367, ast: -0.236, stl: 0.258, blk: -0.594, tpm: -0.164, fgImpact: -0.992, ftImpact: -0.653, to: 0.226 } },
          { name: "Josh Giddey", min: 23, pts: 2, reb: 6, ast: 7, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -2.67, zScores: { pts: -1.029, reb: 0.547, ast: 1.686, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: -1.18, ftImpact: 0, to: -0.503 } },
          { name: "Zach Collins", min: 15, pts: 6, reb: 2, ast: 4, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 1.75, zScores: { pts: -0.575, reb: -0.672, ast: 0.533, stl: 0.258, blk: 2.312, tpm: -0.855, fgImpact: -0.209, ftImpact: 0, to: 0.954 } },
          { name: "Patrick Williams", min: 23, pts: 6, reb: 3, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: -1.52, zScores: { pts: -0.575, reb: -0.367, ast: -0.62, stl: 0.258, blk: 0.859, tpm: -0.855, fgImpact: -1.149, ftImpact: 0.708, to: 0.226 } },
          { name: "Noa Essengue", min: 15, pts: 8, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 3, ftm: 0, fta: 2, composite: -2.01, zScores: { pts: -0.348, reb: -0.062, ast: -1.005, stl: 0.258, blk: -0.594, tpm: 0.527, fgImpact: 1.003, ftImpact: -2.014, to: 0.226 } },
          { name: "Buddy Hield", min: 23, pts: 15, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 5, fga: 10, ftm: 1, fta: 1, composite: -0.03, zScores: { pts: 0.447, reb: -0.062, ast: -1.005, stl: -0.737, blk: -0.594, tpm: 1.91, fgImpact: 0.157, ftImpact: 0.354, to: -0.503 } },
          { name: "Tre Jones", min: 25, pts: 12, reb: 1, ast: 7, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 14, ftm: 2, fta: 2, composite: 0.23, zScores: { pts: 0.106, reb: -0.976, ast: 1.686, stl: 0.258, blk: -0.594, tpm: -0.855, fgImpact: -1.055, ftImpact: 0.708, to: 0.954 } }
        ]
      }
    },
      {
      id: "401909310",
      line: "New Orleans Pelicans 120 @ Oklahoma City Thunder 126 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NO", name: "New Orleans Pelicans", score: 120,
        players: [
          { name: "Herbert Jones", min: 33, pts: 14, reb: 2, ast: 3, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 1.41, zScores: { pts: 0.333, reb: -0.672, ast: 0.149, stl: 0.258, blk: -0.594, tpm: 1.91, fgImpact: -0.177, ftImpact: 0.708, to: -0.503 } },
          { name: "Zion Williamson", min: 37, pts: 22, reb: 6, ast: 7, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 9, fga: 19, ftm: 4, fta: 6, composite: 2.89, zScores: { pts: 1.241, reb: 0.547, ast: 1.686, stl: 1.253, blk: -0.594, tpm: -0.855, fgImpact: -0.02, ftImpact: -0.598, to: 0.226 } },
          { name: "Saddiq Bey", min: 37, pts: 21, reb: 6, ast: 3, stl: 0, blk: 1, to: 0, tpm: 4, fgm: 8, fga: 17, ftm: 1, fta: 1, composite: 5.11, zScores: { pts: 1.128, reb: 0.547, ast: 0.149, stl: -0.737, blk: 0.859, tpm: 1.91, fgImpact: -0.052, ftImpact: 0.354, to: 0.954 } },
          { name: "Yves Missi", min: 23, pts: 4, reb: 8, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -2.6, zScores: { pts: -0.802, reb: 1.157, ast: -1.005, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: 0.031, ftImpact: 0.708, to: -0.503 } },
          { name: "Jeremiah Fears", min: 38, pts: 22, reb: 6, ast: 5, stl: 0, blk: 0, to: 4, tpm: 3, fgm: 9, fga: 20, ftm: 1, fta: 2, composite: -0.34, zScores: { pts: 1.241, reb: 0.547, ast: 0.917, stl: -0.737, blk: -0.594, tpm: 1.218, fgImpact: -0.323, ftImpact: -0.653, to: -1.961 } },
          { name: "Trey Murphy III", min: 29, pts: 17, reb: 4, ast: 1, stl: 2, blk: 1, to: 0, tpm: 3, fgm: 5, fga: 10, ftm: 4, fta: 5, composite: 4.84, zScores: { pts: 0.674, reb: -0.062, ast: -0.62, stl: 1.253, blk: 0.859, tpm: 1.218, fgImpact: 0.157, ftImpact: 0.409, to: 0.954 } },
          { name: "Karlo Matkovic", min: 8, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -6.96, zScores: { pts: -1.256, reb: -0.672, ast: -1.005, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: -0.606, ftImpact: 0, to: -1.232 } },
          { name: "Derik Queen", min: 18, pts: 11, reb: 7, ast: 3, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 5, fta: 6, composite: 0.74, zScores: { pts: -0.008, reb: 0.852, ast: 0.149, stl: -0.737, blk: 0.859, tpm: -0.855, fgImpact: -0.512, ftImpact: 0.763, to: 0.226 } },
          { name: "Jordan Poole", min: 13, pts: 6, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.69, zScores: { pts: -0.575, reb: -1.281, ast: -0.62, stl: -0.737, blk: -0.594, tpm: 0.527, fgImpact: 0.366, ftImpact: 0, to: 0.226 } },
          { name: "Jaron Pierre Jr.", min: 4, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.4, zScores: { pts: -0.916, reb: -0.672, ast: -1.005, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: -0.272, ftImpact: 0, to: 0.954 } }
        ]
      },
      home: {
        abbr: "OKC", name: "Oklahoma City Thunder", score: 126,
        players: [
          { name: "Isaiah Hartenstein", min: 28, pts: 5, reb: 8, ast: 4, stl: 1, blk: 2, to: 4, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 1, composite: 1.47, zScores: { pts: -0.689, reb: 1.157, ast: 0.533, stl: 0.258, blk: 2.312, tpm: -0.855, fgImpact: 0.366, ftImpact: 0.354, to: -1.961 } },
          { name: "Aday Mara", min: 29, pts: 22, reb: 16, ast: 2, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 11, fga: 15, ftm: 0, fta: 0, composite: 8.01, zScores: { pts: 1.241, reb: 3.594, ast: -0.236, stl: -0.737, blk: 2.312, tpm: -0.855, fgImpact: 2.466, ftImpact: 0, to: 0.226 } },
          { name: "Shai Gilgeous-Alexander", min: 37, pts: 40, reb: 3, ast: 8, stl: 0, blk: 1, to: 3, tpm: 4, fgm: 14, fga: 24, ftm: 8, fta: 11, composite: 7.25, zScores: { pts: 3.285, reb: -0.367, ast: 2.071, stl: -0.737, blk: 0.859, tpm: 1.91, fgImpact: 1.651, ftImpact: -0.189, to: -1.232 } },
          { name: "Jared McCain", min: 30, pts: 18, reb: 3, ast: 0, stl: 1, blk: 1, to: 2, tpm: 3, fgm: 7, fga: 14, ftm: 1, fta: 2, composite: 0.81, zScores: { pts: 0.787, reb: -0.367, ast: -1.005, stl: 0.258, blk: 0.859, tpm: 1.218, fgImpact: 0.22, ftImpact: -0.653, to: -0.503 } },
          { name: "Ajay Mitchell", min: 31, pts: 8, reb: 2, ast: 4, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 12, ftm: 1, fta: 2, composite: -3.4, zScores: { pts: -0.348, reb: -0.672, ast: 0.533, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: -1.723, ftImpact: -0.653, to: 0.954 } },
          { name: "Jaylin Williams", min: 9, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.63, zScores: { pts: -0.916, reb: -0.976, ast: -0.62, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: -0.574, ftImpact: 0, to: 0.954 } },
          { name: "Kenrich Williams", min: 28, pts: 6, reb: 2, ast: 4, stl: 3, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 1, fta: 2, composite: 1.99, zScores: { pts: -0.575, reb: -0.672, ast: 0.533, stl: 2.249, blk: 0.859, tpm: -0.164, fgImpact: -0.543, ftImpact: -0.653, to: 0.954 } },
          { name: "Micah Peavy", min: 9, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.029, reb: -0.672, ast: -1.005, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: 0.031, ftImpact: 0, to: 0.954 } },
          { name: "Nique Clifford", min: 15, pts: 4, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -0.68, zScores: { pts: -0.802, reb: 0.242, ast: -0.62, stl: 0.258, blk: -0.594, tpm: -0.855, fgImpact: 0.031, ftImpact: 0.708, to: 0.954 } },
          { name: "Bennett Stirtz", min: 25, pts: 18, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 7, fga: 10, ftm: 0, fta: 0, composite: 3.84, zScores: { pts: 0.787, reb: -0.672, ast: -0.236, stl: 0.258, blk: -0.594, tpm: 1.91, fgImpact: 1.431, ftImpact: 0, to: 0.954 } }
        ]
      }
    },
      {
      id: "401909311",
      line: "Phoenix Suns 111 @ Utah Jazz 101 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PHX", name: "Phoenix Suns", score: 111,
        players: [
          { name: "Dillon Brooks", min: 25, pts: 18, reb: 3, ast: 3, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 14, ftm: 2, fta: 3, composite: -0.09, zScores: { pts: 0.787, reb: -0.367, ast: 0.149, stl: -0.737, blk: -0.594, tpm: 0.527, fgImpact: 0.22, ftImpact: -0.299, to: 0.226 } },
          { name: "Miles Bridges", min: 25, pts: 18, reb: 9, ast: 4, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 7, fga: 12, ftm: 3, fta: 4, composite: 5.57, zScores: { pts: 0.787, reb: 1.461, ast: 0.533, stl: 0.258, blk: 0.859, tpm: -0.164, fgImpact: 0.826, ftImpact: 0.055, to: 0.954 } },
          { name: "Oso Ighodaro", min: 27, pts: 3, reb: 7, ast: 3, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 3, fta: 6, composite: -1.42, zScores: { pts: -0.916, reb: 0.852, ast: 0.149, stl: 1.253, blk: -0.594, tpm: -0.855, fgImpact: -0.303, ftImpact: -1.959, to: 0.954 } },
          { name: "Devin Booker", min: 38, pts: 23, reb: 2, ast: 3, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 9, fga: 21, ftm: 4, fta: 6, composite: -3.85, zScores: { pts: 1.355, reb: -0.672, ast: 0.149, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: -0.626, ftImpact: -0.598, to: -1.961 } },
          { name: "Jalen Green", min: 25, pts: 14, reb: 4, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 13, ftm: 3, fta: 3, composite: 0.19, zScores: { pts: 0.333, reb: -0.062, ast: 0.149, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: -0.752, ftImpact: 1.062, to: 0.954 } },
          { name: "Ryan Dunn", min: 9, pts: 0, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.256, reb: 0.242, ast: -1.005, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: -0.303, ftImpact: 0, to: 0.954 } },
          { name: "Koa Peat", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.77, zScores: { pts: -1.256, reb: -1.281, ast: -1.005, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: 0, ftImpact: 0, to: 0.954 } },
          { name: "Khaman Maluach", min: 18, pts: 9, reb: 6, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 1, fta: 2, composite: -0.74, zScores: { pts: -0.235, reb: 0.547, ast: -0.62, stl: -0.737, blk: 0.859, tpm: -0.855, fgImpact: 0.731, ftImpact: -0.653, to: 0.226 } },
          { name: "Luke Kennard", min: 15, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.45, zScores: { pts: -0.689, reb: -1.281, ast: -1.005, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: 0.063, ftImpact: 0, to: 0.954 } },
          { name: "Jordan Goodwin", min: 28, pts: 5, reb: 9, ast: 4, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: 1.61, zScores: { pts: -0.689, reb: 1.461, ast: 0.533, stl: 1.253, blk: -0.594, tpm: -0.164, fgImpact: -1.149, ftImpact: 0, to: 0.954 } },
          { name: "Collin Gillespie", min: 27, pts: 16, reb: 4, ast: 5, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 6, fga: 12, ftm: 1, fta: 1, composite: 0.61, zScores: { pts: 0.56, reb: -0.062, ast: 0.917, stl: -0.737, blk: -0.594, tpm: 1.218, fgImpact: 0.188, ftImpact: 0.354, to: -1.232 } }
        ]
      },
      home: {
        abbr: "UTAH", name: "Utah Jazz", score: 101,
        players: [
          { name: "Jaxson Hayes", min: 28, pts: 18, reb: 14, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 8, ftm: 4, fta: 8, composite: 0.23, zScores: { pts: 0.787, reb: 2.985, ast: -1.005, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: 2.037, ftImpact: -2.612, to: 0.226 } },
          { name: "Josh Green", min: 29, pts: 8, reb: 4, ast: 0, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 3, ftm: 2, fta: 4, composite: -0.21, zScores: { pts: -0.348, reb: -0.062, ast: -1.005, stl: 1.253, blk: -0.594, tpm: 0.527, fgImpact: 0.366, ftImpact: -1.306, to: 0.954 } },
          { name: "Keyonte George", min: 36, pts: 14, reb: 2, ast: 6, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 4, fga: 17, ftm: 6, fta: 7, composite: -3.67, zScores: { pts: 0.333, reb: -0.672, ast: 1.302, stl: 0.258, blk: -0.594, tpm: -0.855, fgImpact: -2.601, ftImpact: 1.117, to: -1.961 } },
          { name: "Ace Bailey", min: 24, pts: 7, reb: 7, ast: 1, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 11, ftm: 1, fta: 2, composite: -4.27, zScores: { pts: -0.462, reb: 0.852, ast: -0.62, stl: -0.737, blk: 0.859, tpm: -0.855, fgImpact: -1.42, ftImpact: -0.653, to: -1.232 } },
          { name: "Darryn Peterson", min: 32, pts: 20, reb: 10, ast: 8, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 7, fga: 20, ftm: 6, fta: 8, composite: 4.85, zScores: { pts: 1.014, reb: 1.766, ast: 2.071, stl: 1.253, blk: 0.859, tpm: -0.855, fgImpact: -1.598, ftImpact: 0.11, to: 0.226 } },
          { name: "Brice Sensabaugh", min: 26, pts: 18, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 5, fgm: 6, fga: 13, ftm: 1, fta: 2, composite: 1.26, zScores: { pts: 0.787, reb: -0.367, ast: -0.62, stl: -0.737, blk: -0.594, tpm: 2.601, fgImpact: -0.115, ftImpact: -0.653, to: 0.954 } },
          { name: "Mo Bamba", min: 20, pts: 2, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.76, zScores: { pts: -1.029, reb: -0.672, ast: -1.005, stl: -0.737, blk: 0.859, tpm: -0.855, fgImpact: -0.272, ftImpact: 0, to: 0.954 } },
          { name: "Svi Mykhailiuk", min: 28, pts: 11, reb: 7, ast: 2, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 0, zScores: { pts: -0.008, reb: 0.852, ast: -0.236, stl: -0.737, blk: -0.594, tpm: 1.218, fgImpact: 0.731, ftImpact: 0, to: -1.232 } },
          { name: "Josh Okogie", min: 17, pts: 3, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 3, composite: -5.45, zScores: { pts: -0.916, reb: -0.672, ast: -0.236, stl: 0.258, blk: -0.594, tpm: -0.855, fgImpact: -0.272, ftImpact: -1.66, to: -0.503 } }
        ]
      }
    },
      {
      id: "401909312",
      line: "Houston Rockets 124 @ Denver Nuggets 133 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "HOU", name: "Houston Rockets", score: 124,
        players: [
          { name: "Kevin Durant", min: 35, pts: 16, reb: 4, ast: 4, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 6, fga: 9, ftm: 4, fta: 4, composite: 0.13, zScores: { pts: 0.56, reb: -0.062, ast: 0.533, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: 1.097, ftImpact: 1.416, to: -1.232 } },
          { name: "Jabari Smith Jr.", min: 32, pts: 21, reb: 4, ast: 3, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 7, fga: 8, ftm: 4, fta: 5, composite: 3.04, zScores: { pts: 1.128, reb: -0.062, ast: 0.149, stl: -0.737, blk: -0.594, tpm: 1.218, fgImpact: 2.037, ftImpact: 0.409, to: -0.503 } },
          { name: "Alperen Sengun", min: 36, pts: 28, reb: 11, ast: 10, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 9, fga: 16, ftm: 9, fta: 13, composite: 7.33, zScores: { pts: 1.923, reb: 2.071, ast: 2.839, stl: 0.258, blk: 0.859, tpm: -0.164, fgImpact: 0.888, ftImpact: -0.842, to: -0.503 } },
          { name: "Fred VanVleet", min: 33, pts: 25, reb: 1, ast: 9, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 10, fga: 21, ftm: 2, fta: 5, composite: 1.14, zScores: { pts: 1.582, reb: -0.976, ast: 2.455, stl: 0.258, blk: -0.594, tpm: 1.218, fgImpact: 0.011, ftImpact: -2.313, to: -0.503 } },
          { name: "Amen Thompson", min: 26, pts: 22, reb: 6, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 10, fga: 12, ftm: 2, fta: 6, composite: -1.49, zScores: { pts: 1.241, reb: 0.547, ast: -1.005, stl: 0.258, blk: -0.594, tpm: -0.855, fgImpact: 2.737, ftImpact: -3.319, to: -0.503 } },
          { name: "Tari Eason", min: 23, pts: 7, reb: 6, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.05, zScores: { pts: -0.462, reb: 0.547, ast: -0.62, stl: -0.737, blk: 0.859, tpm: -0.164, fgImpact: 0.397, ftImpact: 0, to: 0.226 } },
          { name: "Steven Adams", min: 12, pts: 2, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -2.76, zScores: { pts: -1.029, reb: -0.672, ast: -0.236, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: -0.303, ftImpact: 0.708, to: 0.954 } },
          { name: "Marcus Smart", min: 23, pts: 3, reb: 2, ast: 2, stl: 1, blk: 2, to: 2, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -1.1, zScores: { pts: -0.916, reb: -0.672, ast: -0.236, stl: 0.258, blk: 2.312, tpm: -0.164, fgImpact: -1.18, ftImpact: 0, to: -0.503 } },
          { name: "Bogdan Bogdanovic", min: 5, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.78, zScores: { pts: -1.256, reb: -0.976, ast: -1.005, stl: 0.258, blk: -0.594, tpm: -0.855, fgImpact: -0.303, ftImpact: 0, to: 0.954 } },
          { name: "Reed Sheppard", min: 14, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -4.38, zScores: { pts: -1.256, reb: -0.672, ast: -1.005, stl: 0.258, blk: -0.594, tpm: -0.855, fgImpact: -1.212, ftImpact: 0, to: 0.954 } }
        ]
      },
      home: {
        abbr: "DEN", name: "Denver Nuggets", score: 133,
        players: [
          { name: "Aaron Gordon", min: 31, pts: 18, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 6, fga: 9, ftm: 5, fta: 5, composite: 2.51, zScores: { pts: 0.787, reb: -0.367, ast: -0.236, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: 1.097, ftImpact: 1.77, to: 0.954 } },
          { name: "Cameron Johnson", min: 29, pts: 19, reb: 3, ast: 6, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 13, ftm: 3, fta: 4, composite: 3.83, zScores: { pts: 0.901, reb: -0.367, ast: 1.302, stl: 1.253, blk: -0.594, tpm: 0.527, fgImpact: 0.523, ftImpact: 0.055, to: 0.226 } },
          { name: "Nikola Jokic", min: 38, pts: 26, reb: 7, ast: 11, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 10, fga: 15, ftm: 4, fta: 4, composite: 6.25, zScores: { pts: 1.696, reb: 0.852, ast: 3.224, stl: -0.737, blk: -0.594, tpm: 0.527, fgImpact: 1.829, ftImpact: 1.416, to: -1.961 } },
          { name: "Jamal Murray", min: 36, pts: 14, reb: 2, ast: 7, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 10, ftm: 5, fta: 6, composite: -0.37, zScores: { pts: 0.333, reb: -0.672, ast: 1.686, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: -0.48, ftImpact: 0.763, to: -0.503 } },
          { name: "Christian Braun", min: 31, pts: 19, reb: 5, ast: 3, stl: 4, blk: 1, to: 0, tpm: 3, fgm: 7, fga: 10, ftm: 2, fta: 2, composite: 9.71, zScores: { pts: 0.901, reb: 0.242, ast: 0.149, stl: 3.244, blk: 0.859, tpm: 1.218, fgImpact: 1.431, ftImpact: 0.708, to: 0.954 } },
          { name: "Marvin Bagley III", min: 10, pts: 10, reb: 6, ast: 0, stl: 2, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 3.44, zScores: { pts: -0.121, reb: 0.547, ast: -1.005, stl: 1.253, blk: 0.859, tpm: 0.527, fgImpact: 0.428, ftImpact: 0, to: 0.954 } },
          { name: "Spencer Jones", min: 18, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.32, zScores: { pts: -0.916, reb: -0.976, ast: -0.62, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: -0.272, ftImpact: 0, to: 0.954 } },
          { name: "Trevon Brazile", min: 11, pts: 4, reb: 4, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.44, zScores: { pts: -0.802, reb: -0.062, ast: -1.005, stl: -0.737, blk: 2.312, tpm: -0.855, fgImpact: -0.24, ftImpact: 0, to: 0.954 } },
          { name: "DeMar DeRozan", min: 22, pts: 15, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 11, ftm: 7, fta: 7, composite: 0.27, zScores: { pts: 0.447, reb: -0.672, ast: -0.236, stl: 0.258, blk: -0.594, tpm: -0.855, fgImpact: -0.783, ftImpact: 2.478, to: 0.226 } },
          { name: "Tyus Jones", min: 14, pts: 5, reb: 3, ast: 4, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.16, zScores: { pts: -0.689, reb: -0.367, ast: 0.533, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: 0.366, ftImpact: 0, to: -0.503 } }
        ]
      }
    },
      {
      id: "401909313",
      line: "Sacramento Kings 104 @ Los Angeles Lakers 106 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SAC", name: "Sacramento Kings", score: 104,
        players: [
          { name: "Domantas Sabonis", min: 38, pts: 19, reb: 16, ast: 1, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 8, fga: 13, ftm: 2, fta: 3, composite: 2.01, zScores: { pts: 0.901, reb: 3.594, ast: -0.62, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: 1.16, ftImpact: -0.299, to: -1.232 } },
          { name: "De'Andre Hunter", min: 37, pts: 30, reb: 6, ast: 2, stl: 0, blk: 1, to: 0, tpm: 5, fgm: 12, fga: 16, ftm: 1, fta: 1, composite: 9.29, zScores: { pts: 2.15, reb: 0.547, ast: -0.236, stl: -0.737, blk: 0.859, tpm: 2.601, fgImpact: 2.8, ftImpact: 0.354, to: 0.954 } },
          { name: "Keegan Murray", min: 40, pts: 13, reb: 7, ast: 4, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 10, ftm: 1, fta: 2, composite: 0.8, zScores: { pts: 0.22, reb: 0.852, ast: 0.533, stl: 0.258, blk: -0.594, tpm: 0.527, fgImpact: 0.157, ftImpact: -0.653, to: -0.503 } },
          { name: "Zach LaVine", min: 39, pts: 19, reb: 7, ast: 4, stl: 2, blk: 1, to: 1, tpm: 2, fgm: 7, fga: 17, ftm: 3, fta: 4, composite: 4.52, zScores: { pts: 0.901, reb: 0.852, ast: 0.533, stl: 1.253, blk: 0.859, tpm: 0.527, fgImpact: -0.689, ftImpact: 0.055, to: 0.226 } },
          { name: "Darius Acuff Jr.", min: 36, pts: 18, reb: 1, ast: 12, stl: 1, blk: 0, to: 6, tpm: 2, fgm: 8, fga: 23, ftm: 0, fta: 0, composite: -1.68, zScores: { pts: 0.787, reb: -0.976, ast: 3.608, stl: 0.258, blk: -0.594, tpm: 0.527, fgImpact: -1.869, ftImpact: 0, to: -3.419 } },
          { name: "Leaky Black", min: 19, pts: 0, reb: 3, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -1.79, zScores: { pts: -1.256, reb: -0.367, ast: -0.62, stl: 1.253, blk: -0.594, tpm: -0.855, fgImpact: -0.303, ftImpact: 0, to: 0.954 } },
          { name: "Dylan Cardwell", min: 10, pts: 0, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.1, zScores: { pts: -1.256, reb: -0.062, ast: -1.005, stl: -0.737, blk: 0.859, tpm: -0.855, fgImpact: 0, ftImpact: 0, to: 0.954 } },
          { name: "Malik Monk", min: 12, pts: 2, reb: 0, ast: 3, stl: 0, blk: 1, to: 4, tpm: 0, fgm: 0, fga: 5, ftm: 2, fta: 2, composite: -5.66, zScores: { pts: -1.029, reb: -1.281, ast: 0.149, stl: -0.737, blk: 0.859, tpm: -0.855, fgImpact: -1.515, ftImpact: 0.708, to: -1.961 } },
          { name: "Emanuel Sharp", min: 10, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.23, zScores: { pts: -0.916, reb: -1.281, ast: -0.62, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: -0.877, ftImpact: 0, to: 0.954 } }
        ]
      },
      home: {
        abbr: "LAL", name: "Los Angeles Lakers", score: 106,
        players: [
          { name: "Ziaire Williams", min: 28, pts: 5, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -0.689, reb: -1.281, ast: -0.62, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: -1.149, ftImpact: 0, to: 0.954 } },
          { name: "Walker Kessler", min: 30, pts: 15, reb: 7, ast: 2, stl: 1, blk: 3, to: 2, tpm: 1, fgm: 7, fga: 11, ftm: 0, fta: 2, composite: 3.53, zScores: { pts: 0.447, reb: 0.852, ast: -0.236, stl: 0.258, blk: 3.765, tpm: -0.164, fgImpact: 1.129, ftImpact: -2.014, to: -0.503 } },
          { name: "Matisse Thybulle", min: 27, pts: 14, reb: 1, ast: 1, stl: 1, blk: 1, to: 0, tpm: 4, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 3.48, zScores: { pts: 0.333, reb: -0.976, ast: -0.62, stl: 0.258, blk: 0.859, tpm: 1.91, fgImpact: 0.763, ftImpact: 0, to: 0.954 } },
          { name: "Luka Doncic", min: 36, pts: 25, reb: 4, ast: 8, stl: 2, blk: 0, to: 6, tpm: 2, fgm: 9, fga: 18, ftm: 5, fta: 6, composite: 2.4, zScores: { pts: 1.582, reb: -0.062, ast: 2.071, stl: 1.253, blk: -0.594, tpm: 0.527, fgImpact: 0.283, ftImpact: 0.763, to: -3.419 } },
          { name: "Quentin Grimes", min: 35, pts: 13, reb: 5, ast: 7, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 7, ftm: 8, fta: 9, composite: 0.4, zScores: { pts: 0.22, reb: 0.242, ast: 1.686, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: -0.846, ftImpact: 1.825, to: -1.232 } },
          { name: "Jarred Vanderbilt", min: 10, pts: 4, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.39, zScores: { pts: -0.802, reb: -0.062, ast: -0.236, stl: -0.737, blk: -0.594, tpm: -0.855, fgImpact: 0.669, ftImpact: 0, to: 0.226 } },
          { name: "Sandro Mamukelashvili", min: 20, pts: 9, reb: 9, ast: 2, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 8, ftm: 1, fta: 1, composite: 1.23, zScores: { pts: -0.235, reb: 1.461, ast: -0.236, stl: 0.258, blk: 0.859, tpm: -0.855, fgImpact: 0.126, ftImpact: 0.354, to: -0.503 } },
          { name: "Jake LaRavia", min: 24, pts: 6, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -3.08, zScores: { pts: -0.575, reb: -0.367, ast: -1.005, stl: -0.737, blk: -0.594, tpm: -0.164, fgImpact: 0.063, ftImpact: -0.653, to: 0.954 } },
          { name: "Collin Sexton", min: 18, pts: 10, reb: 1, ast: 4, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 1.33, zScores: { pts: -0.121, reb: -0.976, ast: 0.533, stl: 1.253, blk: -0.594, tpm: -0.855, fgImpact: 0.428, ftImpact: 0.708, to: 0.954 } },
          { name: "Cameron Carr", min: 12, pts: 5, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.46, zScores: { pts: -0.689, reb: -0.976, ast: -1.005, stl: 0.258, blk: -0.594, tpm: -0.164, fgImpact: -0.24, ftImpact: 0, to: 0.954 } }
        ]
      }
    }
    ]
  },
    "2026-11-21": {
    games: [
      {
      id: "401910023",
      line: "Milwaukee Bucks 129 @ Philadelphia 76ers 132 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIL", name: "Milwaukee Bucks", score: 129,
        players: [
          { name: "Kyle Kuzma", min: 33, pts: 12, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 16, ftm: 2, fta: 2, composite: -1.03, zScores: { pts: 0.218, reb: 0.123, ast: -0.497, stl: -0.674, blk: -0.605, tpm: 0.552, fgImpact: -1.658, ftImpact: 0.635, to: 0.877 } },
          { name: "Jaime Jaquez Jr.", min: 25, pts: 9, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -1.76, zScores: { pts: -0.11, reb: -1.195, ast: -0.497, stl: -0.674, blk: -0.605, tpm: -0.117, fgImpact: 0.563, ftImpact: 0, to: 0.877 } },
          { name: "Myles Turner", min: 26, pts: 5, reb: 6, ast: 5, stl: 1, blk: 4, to: 1, tpm: 1, fgm: 1, fga: 8, ftm: 2, fta: 2, composite: 4.56, zScores: { pts: -0.548, reb: 0.387, ast: 1.267, stl: 0.349, blk: 3.814, tpm: -0.117, fgImpact: -1.401, ftImpact: 0.635, to: 0.169 } },
          { name: "Tyler Herro", min: 40, pts: 50, reb: 11, ast: 7, stl: 1, blk: 0, to: 2, tpm: 7, fgm: 15, fga: 23, ftm: 13, fta: 13, composite: 18.37, zScores: { pts: 4.379, reb: 1.705, ast: 2.149, stl: 0.349, blk: -0.605, tpm: 3.893, fgImpact: 2.912, ftImpact: 4.129, to: -0.54 } },
          { name: "Ryan Rollins", min: 28, pts: 8, reb: 6, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -1.05, zScores: { pts: -0.22, reb: 0.387, ast: -0.497, stl: -0.674, blk: 0.5, tpm: -0.785, fgImpact: 0.069, ftImpact: 0, to: 0.169 } },
          { name: "Nate Ament", min: 14, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.85, zScores: { pts: -0.877, reb: -0.931, ast: -0.938, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: 0.079, ftImpact: 0, to: 0.877 } },
          { name: "Kel'el Ware", min: 22, pts: 6, reb: 8, ast: 3, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 2.04, zScores: { pts: -0.439, reb: 0.914, ast: 0.385, stl: 0.349, blk: 0.5, tpm: -0.785, fgImpact: 0.237, ftImpact: 0, to: 0.877 } },
          { name: "Caris LeVert", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.29, zScores: { pts: -1.096, reb: -0.931, ast: -0.938, stl: -0.674, blk: 0.5, tpm: -0.785, fgImpact: -0.247, ftImpact: 0, to: 0.877 } },
          { name: "AJ Green", min: 12, pts: 9, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -0.45, zScores: { pts: -0.11, reb: -1.195, ast: -0.938, stl: -0.674, blk: -0.605, tpm: 1.22, fgImpact: 0.977, ftImpact: 0, to: 0.877 } },
          { name: "Brayden Burries", min: 26, pts: 26, reb: 8, ast: 4, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 12, fga: 20, ftm: 0, fta: 1, composite: 4.96, zScores: { pts: 1.751, reb: 0.914, ast: 0.826, stl: -0.674, blk: 0.5, tpm: 0.552, fgImpact: 1.935, ftImpact: -1.013, to: 0.169 } },
          { name: "Kasparas Jakucionis", min: 10, pts: 2, reb: 3, ast: 3, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -5.12, zScores: { pts: -0.877, reb: -0.404, ast: 0.385, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: -0.908, ftImpact: 0, to: -1.249 } }
        ]
      },
      home: {
        abbr: "PHI", name: "Philadelphia 76ers", score: 132,
        players: [
          { name: "LeBron James", min: 35, pts: 21, reb: 6, ast: 6, stl: 3, blk: 1, to: 1, tpm: 0, fgm: 9, fga: 14, ftm: 3, fta: 3, composite: 8.23, zScores: { pts: 1.203, reb: 0.387, ast: 1.708, stl: 2.396, blk: 0.5, tpm: -0.785, fgImpact: 1.698, ftImpact: 0.953, to: 0.169 } },
          { name: "Joel Embiid", min: 34, pts: 26, reb: 17, ast: 9, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 7, fga: 17, ftm: 12, fta: 14, composite: 8.88, zScores: { pts: 1.751, reb: 3.287, ast: 3.031, stl: -0.674, blk: 0.5, tpm: -0.785, fgImpact: -0.187, ftImpact: 1.784, to: 0.169 } },
          { name: "Kentavious Caldwell-Pope", min: 35, pts: 11, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 0.75, zScores: { pts: 0.109, reb: -0.931, ast: -0.056, stl: -0.674, blk: -0.605, tpm: 1.22, fgImpact: 0.809, ftImpact: 0, to: 0.877 } },
          { name: "Tyrese Maxey", min: 36, pts: 17, reb: 4, ast: 4, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 11, ftm: 9, fta: 10, composite: 2.08, zScores: { pts: 0.766, reb: -0.14, ast: 0.826, stl: -0.674, blk: 0.5, tpm: -0.785, fgImpact: -0.424, ftImpact: 1.845, to: 0.169 } },
          { name: "VJ Edgecombe", min: 38, pts: 16, reb: 3, ast: 6, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 5, fga: 12, ftm: 5, fta: 5, composite: 6.08, zScores: { pts: 0.656, reb: -0.404, ast: 1.708, stl: 1.373, blk: 0.5, tpm: -0.117, fgImpact: -0.098, ftImpact: 1.588, to: 0.877 } },
          { name: "Jabari Walker", min: 20, pts: 9, reb: 7, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 1, fta: 2, composite: 0.05, zScores: { pts: -0.11, reb: 0.651, ast: 0.826, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: 0.563, ftImpact: -0.696, to: 0.877 } },
          { name: "Dominick Barlow", min: 11, pts: 12, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 6, ftm: 1, fta: 1, composite: 0.05, zScores: { pts: 0.218, reb: -0.14, ast: -0.497, stl: -0.674, blk: -0.605, tpm: -0.117, fgImpact: 1.382, ftImpact: 0.318, to: 0.169 } },
          { name: "Anfernee Simons", min: 26, pts: 18, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 13, ftm: 2, fta: 2, composite: 1.53, zScores: { pts: 0.875, reb: -1.195, ast: -0.497, stl: -0.674, blk: -0.605, tpm: 1.888, fgImpact: 0.227, ftImpact: 0.635, to: 0.877 } },
          { name: "Labaron Philon Jr.", min: 6, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -0.877, reb: -1.195, ast: -0.938, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: 0.079, ftImpact: 0, to: 0.877 } }
        ]
      }
    },
      {
      id: "401910024",
      line: "Portland Trail Blazers 96 @ New York Knicks 97 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "POR", name: "Portland Trail Blazers", score: 96,
        players: [
          { name: "Toumani Camara", min: 35, pts: 6, reb: 5, ast: 0, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 2, fga: 10, ftm: 1, fta: 1, composite: -3.8, zScores: { pts: -0.439, reb: 0.123, ast: -0.938, stl: -0.674, blk: 0.5, tpm: -0.117, fgImpact: -1.322, ftImpact: 0.318, to: -1.249 } },
          { name: "Deni Avdija", min: 36, pts: 20, reb: 9, ast: 5, stl: 0, blk: 2, to: 2, tpm: 2, fgm: 7, fga: 13, ftm: 4, fta: 7, composite: 3.51, zScores: { pts: 1.094, reb: 1.178, ast: 1.267, stl: -0.674, blk: 1.605, tpm: 0.552, fgImpact: 0.8, ftImpact: -1.769, to: -0.54 } },
          { name: "Donovan Clingan", min: 31, pts: 22, reb: 13, ast: 4, stl: 1, blk: 1, to: 1, tpm: 3, fgm: 9, fga: 11, ftm: 1, fta: 1, composite: 9.36, zScores: { pts: 1.313, reb: 2.232, ast: 0.826, stl: 0.349, blk: 0.5, tpm: 1.22, fgImpact: 2.438, ftImpact: 0.318, to: 0.169 } },
          { name: "Damian Lillard", min: 33, pts: 15, reb: 3, ast: 3, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 5, fga: 16, ftm: 4, fta: 4, composite: 0.59, zScores: { pts: 0.547, reb: -0.404, ast: 0.385, stl: -0.674, blk: 0.5, tpm: -0.117, fgImpact: -1.085, ftImpact: 1.27, to: 0.169 } },
          { name: "Sidy Cissoko", min: 23, pts: 11, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: 0.46, zScores: { pts: 0.109, reb: -0.667, ast: -0.497, stl: 0.349, blk: -0.605, tpm: 1.22, fgImpact: -0.256, ftImpact: 0.635, to: 0.169 } },
          { name: "Robert Williams III", min: 17, pts: 4, reb: 3, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -0.41, zScores: { pts: -0.658, reb: -0.404, ast: -0.938, stl: 0.349, blk: 0.5, tpm: -0.785, fgImpact: 0.651, ftImpact: 0, to: 0.877 } },
          { name: "Branden Carlson", min: 9, pts: 2, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.75, zScores: { pts: -0.877, reb: -0.931, ast: -0.938, stl: -0.674, blk: 0.5, tpm: -0.785, fgImpact: 0.079, ftImpact: 0, to: 0.877 } },
          { name: "Jrue Holiday", min: 31, pts: 13, reb: 9, ast: 7, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 14, ftm: 0, fta: 0, composite: 3.75, zScores: { pts: 0.328, reb: 1.178, ast: 2.149, stl: 1.373, blk: -0.605, tpm: -0.117, fgImpact: -0.019, ftImpact: 0, to: -0.54 } },
          { name: "Scoot Henderson", min: 23, pts: 3, reb: 1, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 8, ftm: 1, fta: 2, composite: -6.58, zScores: { pts: -0.767, reb: -0.931, ast: -0.497, stl: 0.349, blk: -0.605, tpm: -0.785, fgImpact: -1.401, ftImpact: -0.696, to: -1.249 } },
          { name: "Jayson Kent", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.4, zScores: { pts: -1.096, reb: -0.931, ast: -0.938, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: -0.247, ftImpact: 0, to: 0.877 } }
        ]
      },
      home: {
        abbr: "NY", name: "New York Knicks", score: 97,
        players: [
          { name: "Andre Drummond", min: 23, pts: 7, reb: 13, ast: 1, stl: 1, blk: 3, to: 2, tpm: 1, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: 3.06, zScores: { pts: -0.329, reb: 2.232, ast: -0.497, stl: 0.349, blk: 2.71, tpm: -0.117, fgImpact: -0.75, ftImpact: 0, to: -0.54 } },
          { name: "Josh Hart", min: 35, pts: 0, reb: 8, ast: 6, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 7, ftm: 0, fta: 0, composite: -0.05, zScores: { pts: -1.096, reb: 0.914, ast: 1.708, stl: 1.373, blk: -0.605, tpm: -0.785, fgImpact: -1.727, ftImpact: 0, to: 0.169 } },
          { name: "Mikal Bridges", min: 28, pts: 12, reb: 2, ast: 3, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: -0.13, zScores: { pts: 0.218, reb: -0.667, ast: 0.385, stl: 0.349, blk: -0.605, tpm: 0.552, fgImpact: 0.888, ftImpact: 0, to: -1.249 } },
          { name: "Landry Shamet", min: 36, pts: 20, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 6, fgm: 7, fga: 14, ftm: 0, fta: 0, composite: 3.92, zScores: { pts: 1.094, reb: -0.931, ast: 0.385, stl: -0.674, blk: -0.605, tpm: 3.225, fgImpact: 0.553, ftImpact: 0, to: 0.877 } },
          { name: "Jalen Brunson", min: 36, pts: 30, reb: 7, ast: 5, stl: 0, blk: 0, to: 3, tpm: 6, fgm: 11, fga: 23, ftm: 2, fta: 3, composite: 5.05, zScores: { pts: 2.189, reb: 0.651, ast: 1.267, stl: -0.674, blk: -0.605, tpm: 3.225, fgImpact: 0.622, ftImpact: -0.378, to: -1.249 } },
          { name: "Dalton Knecht", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.66, zScores: { pts: -1.096, reb: -1.195, ast: -0.938, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: -0.247, ftImpact: 0, to: 0.877 } },
          { name: "Pacome Dadiet", min: 11, pts: 5, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.89, zScores: { pts: -0.548, reb: -1.195, ast: -0.056, stl: 0.349, blk: -0.605, tpm: -0.117, fgImpact: 0.405, ftImpact: 0, to: 0.877 } },
          { name: "James Wiseman", min: 25, pts: 5, reb: 6, ast: 2, stl: 0, blk: 3, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: 0.91, zScores: { pts: -0.548, reb: 0.387, ast: -0.056, stl: -0.674, blk: 2.71, tpm: -0.785, fgImpact: 0.405, ftImpact: -0.696, to: 0.169 } },
          { name: "Jose Alvarado", min: 15, pts: 8, reb: 2, ast: 2, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -0.41, zScores: { pts: -0.22, reb: -0.667, ast: -0.056, stl: -0.674, blk: 0.5, tpm: 0.552, fgImpact: -0.01, ftImpact: 0, to: 0.169 } },
          { name: "Miles McBride", min: 14, pts: 3, reb: 0, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.29, zScores: { pts: -0.767, reb: -1.195, ast: -0.497, stl: -0.674, blk: 0.5, tpm: -0.117, fgImpact: -0.414, ftImpact: 0, to: 0.877 } },
          { name: "Tyler Kolek", min: 13, pts: 7, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 1, fta: 1, composite: -2.24, zScores: { pts: -0.329, reb: -0.404, ast: -0.938, stl: 0.349, blk: -0.605, tpm: -0.785, fgImpact: -0.01, ftImpact: 0.318, to: 0.169 } }
        ]
      }
    },
      {
      id: "401910025",
      line: "LA Clippers 100 @ Dallas Mavericks 110 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LAC", name: "LA Clippers", score: 100,
        players: [
          { name: "Derrick Jones Jr.", min: 26, pts: 4, reb: 7, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 7, ftm: 1, fta: 4, composite: -5.61, zScores: { pts: -0.658, reb: 0.651, ast: -0.497, stl: -0.674, blk: -0.605, tpm: -0.117, fgImpact: -1.154, ftImpact: -2.722, to: 0.169 } },
          { name: "Rui Hachimura", min: 29, pts: 19, reb: 8, ast: 1, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 7, fga: 12, ftm: 1, fta: 2, composite: 1.82, zScores: { pts: 0.985, reb: 0.914, ast: -0.497, stl: -0.674, blk: -0.605, tpm: 1.888, fgImpact: 1.046, ftImpact: -0.696, to: -0.54 } },
          { name: "Brook Lopez", min: 25, pts: 21, reb: 6, ast: 0, stl: 0, blk: 1, to: 4, tpm: 1, fgm: 8, fga: 15, ftm: 4, fta: 4, composite: 0.55, zScores: { pts: 1.203, reb: 0.387, ast: -0.938, stl: -0.674, blk: 0.5, tpm: -0.117, fgImpact: 0.879, ftImpact: 1.27, to: -1.957 } },
          { name: "Max Strus", min: 29, pts: 5, reb: 6, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: -1.28, zScores: { pts: -0.548, reb: 0.387, ast: 0.385, stl: -0.674, blk: -0.605, tpm: -0.117, fgImpact: -0.908, ftImpact: 0.635, to: 0.169 } },
          { name: "Darius Garland", min: 32, pts: 16, reb: 1, ast: 2, stl: 0, blk: 2, to: 3, tpm: 2, fgm: 5, fga: 10, ftm: 4, fta: 4, composite: 1.57, zScores: { pts: 0.656, reb: -0.931, ast: -0.056, stl: -0.674, blk: 1.605, tpm: 0.552, fgImpact: 0.395, ftImpact: 1.27, to: -1.249 } },
          { name: "Isaiah Jackson", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.97, zScores: { pts: -1.096, reb: -1.195, ast: -0.938, stl: -0.674, blk: 0.5, tpm: -0.785, fgImpact: -0.247, ftImpact: 0, to: -0.54 } },
          { name: "Baba Miller", min: 3, pts: 1, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -5.27, zScores: { pts: -0.986, reb: -1.195, ast: -0.497, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: 0, ftImpact: -0.696, to: 0.169 } },
          { name: "Yanic Konan Niederhauser", min: 16, pts: 6, reb: 6, ast: 1, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 2.54, zScores: { pts: -0.439, reb: 0.387, ast: -0.497, stl: 0.349, blk: 1.605, tpm: -0.785, fgImpact: 0.405, ftImpact: 0.635, to: 0.877 } },
          { name: "Kris Dunn", min: 19, pts: 3, reb: 4, ast: 5, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: 2.25, zScores: { pts: -0.767, reb: -0.14, ast: 1.267, stl: 2.396, blk: -0.605, tpm: -0.117, fgImpact: -0.661, ftImpact: 0, to: 0.877 } },
          { name: "Kobe Sanders", min: 19, pts: 9, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -0.94, zScores: { pts: -0.11, reb: -0.404, ast: -0.497, stl: -0.674, blk: -0.605, tpm: 1.22, fgImpact: -0.75, ftImpact: 0, to: 0.877 } },
          { name: "Cam Christie", min: 3, pts: 3, reb: 0, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.55, zScores: { pts: -0.767, reb: -1.195, ast: -0.497, stl: -0.674, blk: 0.5, tpm: -0.117, fgImpact: 0.326, ftImpact: 0, to: 0.877 } },
          { name: "Gradey Dick", min: 16, pts: 6, reb: 5, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -1.5, zScores: { pts: -0.439, reb: 0.123, ast: -0.056, stl: 0.349, blk: -0.605, tpm: -0.785, fgImpact: -0.256, ftImpact: 0, to: 0.169 } },
          { name: "Keaton Wagler", min: 19, pts: 7, reb: 7, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 8, ftm: 4, fta: 4, composite: 0.37, zScores: { pts: -0.329, reb: 0.651, ast: 0.385, stl: 0.349, blk: -0.605, tpm: -0.117, fgImpact: -1.401, ftImpact: 1.27, to: 0.169 } }
        ]
      },
      home: {
        abbr: "DAL", name: "Dallas Mavericks", score: 110,
        players: [
          { name: "Caleb Martin", min: 20, pts: 0, reb: 4, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.2, zScores: { pts: -1.096, reb: -0.14, ast: 0.385, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: -0.74, ftImpact: 0, to: -0.54 } },
          { name: "Daniel Gafford", min: 31, pts: 10, reb: 10, ast: 3, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 2, fta: 2, composite: 4.77, zScores: { pts: -0.001, reb: 1.441, ast: 0.385, stl: 1.373, blk: 0.5, tpm: -0.785, fgImpact: 1.056, ftImpact: 0.635, to: 0.169 } },
          { name: "Cooper Flagg", min: 36, pts: 22, reb: 6, ast: 8, stl: 0, blk: 1, to: 3, tpm: 3, fgm: 6, fga: 16, ftm: 7, fta: 13, composite: -0.28, zScores: { pts: 1.313, reb: 0.387, ast: 2.59, stl: -0.674, blk: 0.5, tpm: 1.22, fgImpact: -0.513, ftImpact: -3.856, to: -1.249 } },
          { name: "Zaccharie Risacher", min: 29, pts: 11, reb: 7, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: 0.92, zScores: { pts: 0.109, reb: 0.651, ast: -0.497, stl: 0.349, blk: -0.605, tpm: -0.117, fgImpact: 0.148, ftImpact: 0, to: 0.877 } },
          { name: "Kyrie Irving", min: 35, pts: 25, reb: 6, ast: 4, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 8, fga: 24, ftm: 6, fta: 7, composite: 3.22, zScores: { pts: 1.641, reb: 0.387, ast: 0.826, stl: -0.674, blk: -0.605, tpm: 1.22, fgImpact: -1.342, ftImpact: 0.892, to: 0.877 } },
          { name: "Naji Marshall", min: 14, pts: 4, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 4, fta: 6, composite: -3.71, zScores: { pts: -0.658, reb: -0.404, ast: -0.497, stl: 0.349, blk: -0.605, tpm: -0.785, fgImpact: -1.233, ftImpact: -0.756, to: 0.877 } },
          { name: "Santi Aldama", min: 9, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.64, zScores: { pts: -1.096, reb: -0.931, ast: -0.938, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: -0.493, ftImpact: 0, to: 0.877 } },
          { name: "Morez Johnson Jr.", min: 17, pts: 9, reb: 7, ast: 2, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 1.37, zScores: { pts: -0.11, reb: 0.651, ast: -0.056, stl: 1.373, blk: -0.605, tpm: -0.117, fgImpact: 0.069, ftImpact: 0, to: 0.169 } },
          { name: "Max Christie", min: 24, pts: 13, reb: 4, ast: 0, stl: 3, blk: 1, to: 1, tpm: 3, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 4.67, zScores: { pts: 0.328, reb: -0.14, ast: -0.938, stl: 2.396, blk: 0.5, tpm: 1.22, fgImpact: 1.135, ftImpact: 0, to: 0.169 } },
          { name: "Walter Clayton Jr.", min: 25, pts: 16, reb: 5, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 8, ftm: 4, fta: 6, composite: 0.88, zScores: { pts: 0.656, reb: 0.123, ast: -0.497, stl: 0.349, blk: -0.605, tpm: 0.552, fgImpact: 0.888, ftImpact: -0.756, to: 0.169 } }
        ]
      }
    },
      {
      id: "401910026",
      line: "Memphis Grizzlies 95 @ Minnesota Timberwolves 104 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MEM", name: "Memphis Grizzlies", score: 95,
        players: [
          { name: "Cedric Coward", min: 30, pts: 23, reb: 7, ast: 2, stl: 4, blk: 0, to: 6, tpm: 4, fgm: 8, fga: 16, ftm: 3, fta: 5, composite: 2.9, zScores: { pts: 1.422, reb: 0.651, ast: -0.056, stl: 3.419, blk: -0.605, tpm: 1.888, fgImpact: 0.632, ftImpact: -1.074, to: -3.375 } },
          { name: "Jaylen Wells", min: 25, pts: 8, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 11, ftm: 2, fta: 2, composite: -2.61, zScores: { pts: -0.22, reb: -0.931, ast: -0.938, stl: 0.349, blk: -0.605, tpm: -0.785, fgImpact: -0.997, ftImpact: 0.635, to: 0.877 } },
          { name: "Zach Edey", min: 23, pts: 8, reb: 2, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 4, ftm: 0, fta: 0, composite: -0.37, zScores: { pts: -0.22, reb: -0.667, ast: -0.938, stl: 1.373, blk: -0.605, tpm: -0.785, fgImpact: 1.303, ftImpact: 0, to: 0.169 } },
          { name: "Ty Jerome", min: 27, pts: 18, reb: 4, ast: 6, stl: 2, blk: 0, to: 5, tpm: 3, fgm: 7, fga: 17, ftm: 1, fta: 1, composite: 1.89, zScores: { pts: 0.875, reb: -0.14, ast: 1.708, stl: 1.373, blk: -0.605, tpm: 1.22, fgImpact: -0.187, ftImpact: 0.318, to: -2.666 } },
          { name: "Jahmai Mashack", min: 22, pts: 0, reb: 2, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -1.57, zScores: { pts: -1.096, reb: -0.667, ast: -0.497, stl: 0.349, blk: 0.5, tpm: -0.785, fgImpact: -0.247, ftImpact: 0, to: 0.877 } },
          { name: "Kris Murray", min: 12, pts: 7, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -1.23, zScores: { pts: -0.329, reb: -1.195, ast: -0.938, stl: 0.349, blk: -0.605, tpm: -0.117, fgImpact: 0.73, ftImpact: 0, to: 0.877 } },
          { name: "Olivier-Maxence Prosper", min: 23, pts: 7, reb: 6, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 11, ftm: 1, fta: 3, composite: -4.46, zScores: { pts: -0.329, reb: 0.387, ast: -0.938, stl: 0.349, blk: -0.605, tpm: -0.785, fgImpact: -0.997, ftImpact: -1.709, to: 0.169 } },
          { name: "Taylor Hendricks", min: 27, pts: 5, reb: 7, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 9, ftm: 1, fta: 2, composite: -3.62, zScores: { pts: -0.548, reb: 0.651, ast: -0.056, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: -1.075, ftImpact: -0.696, to: 0.169 } },
          { name: "Isaiah Stewart", min: 21, pts: 10, reb: 2, ast: 1, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 0.5, zScores: { pts: -0.001, reb: -0.667, ast: -0.497, stl: -0.674, blk: 2.71, tpm: -0.785, fgImpact: 0.316, ftImpact: 0.635, to: -0.54 } },
          { name: "Cam Spencer", min: 30, pts: 9, reb: 5, ast: 5, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 8, ftm: 1, fta: 1, composite: 2.77, zScores: { pts: -0.11, reb: 0.123, ast: 1.267, stl: 1.373, blk: -0.605, tpm: -0.785, fgImpact: 0.316, ftImpact: 0.318, to: 0.877 } }
        ]
      },
      home: {
        abbr: "MIN", name: "Minnesota Timberwolves", score: 104,
        players: [
          { name: "Jaden McDaniels", min: 36, pts: 25, reb: 5, ast: 4, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 11, fga: 17, ftm: 2, fta: 2, composite: 3.71, zScores: { pts: 1.641, reb: 0.123, ast: 0.826, stl: 0.349, blk: -0.605, tpm: -0.117, fgImpact: 2.102, ftImpact: 0.635, to: -1.249 } },
          { name: "Jonathan Kuminga", min: 37, pts: 16, reb: 4, ast: 2, stl: 0, blk: 1, to: 4, tpm: 2, fgm: 6, fga: 9, ftm: 2, fta: 2, composite: 0.73, zScores: { pts: 0.656, reb: -0.14, ast: -0.056, stl: -0.674, blk: 0.5, tpm: 0.552, fgImpact: 1.214, ftImpact: 0.635, to: -1.957 } },
          { name: "Rudy Gobert", min: 32, pts: 7, reb: 11, ast: 2, stl: 1, blk: 3, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 3, fta: 4, composite: 4.35, zScores: { pts: -0.329, reb: 1.705, ast: -0.056, stl: 0.349, blk: 2.71, tpm: -0.785, fgImpact: 0.651, ftImpact: -0.06, to: 0.169 } },
          { name: "Ayo Dosunmu", min: 34, pts: 19, reb: 2, ast: 2, stl: 3, blk: 0, to: 5, tpm: 1, fgm: 9, fga: 14, ftm: 0, fta: 0, composite: 0.97, zScores: { pts: 0.985, reb: -0.667, ast: -0.056, stl: 2.396, blk: -0.605, tpm: -0.117, fgImpact: 1.698, ftImpact: 0, to: -2.666 } },
          { name: "LaMelo Ball", min: 32, pts: 12, reb: 5, ast: 7, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 5, fga: 10, ftm: 1, fta: 2, composite: 1.67, zScores: { pts: 0.218, reb: 0.123, ast: 2.149, stl: 0.349, blk: 0.5, tpm: -0.117, fgImpact: 0.395, ftImpact: -0.696, to: -1.249 } },
          { name: "Trey Lyles", min: 12, pts: 3, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.77, zScores: { pts: -0.767, reb: -0.404, ast: -0.497, stl: -0.674, blk: -0.605, tpm: -0.117, fgImpact: -0.168, ftImpact: 0, to: -0.54 } },
          { name: "Joan Beringer", min: 16, pts: 0, reb: 4, ast: 0, stl: 1, blk: 3, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: 0.27, zScores: { pts: -1.096, reb: -0.14, ast: -0.938, stl: 0.349, blk: 2.71, tpm: -0.785, fgImpact: 0, ftImpact: 0, to: 0.169 } },
          { name: "Terrence Shannon Jr.", min: 26, pts: 15, reb: 5, ast: 2, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 1.05, zScores: { pts: 0.547, reb: 0.123, ast: -0.056, stl: 0.349, blk: -0.605, tpm: 1.22, fgImpact: 0.721, ftImpact: 0, to: -1.249 } },
          { name: "Bones Hyland", min: 16, pts: 7, reb: 0, ast: 4, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -1.47, zScores: { pts: -0.329, reb: -1.195, ast: 0.826, stl: -0.674, blk: -0.605, tpm: -0.117, fgImpact: -0.256, ftImpact: 0, to: 0.877 } }
        ]
      }
    },
      {
      id: "401910027",
      line: "New Orleans Pelicans 91 @ San Antonio Spurs 114 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NO", name: "New Orleans Pelicans", score: 91,
        players: [
          { name: "Herbert Jones", min: 25, pts: 2, reb: 4, ast: 2, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 8, ftm: 0, fta: 2, composite: -4.03, zScores: { pts: -0.877, reb: -0.14, ast: -0.056, stl: 2.396, blk: -0.605, tpm: -0.785, fgImpact: -1.401, ftImpact: -2.026, to: -0.54 } },
          { name: "Saddiq Bey", min: 32, pts: 2, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 12, ftm: 0, fta: 1, composite: -5.4, zScores: { pts: -0.877, reb: 0.123, ast: -0.056, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: -2.388, ftImpact: -1.013, to: 0.877 } },
          { name: "Derik Queen", min: 35, pts: 15, reb: 15, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 7, fga: 16, ftm: 1, fta: 2, composite: -0.56, zScores: { pts: 0.547, reb: 2.759, ast: -0.938, stl: 0.349, blk: -0.605, tpm: -0.785, fgImpact: 0.06, ftImpact: -0.696, to: -1.249 } },
          { name: "Yves Missi", min: 35, pts: 9, reb: 13, ast: 1, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 8, ftm: 3, fta: 6, composite: 1.25, zScores: { pts: -0.11, reb: 2.232, ast: -0.497, stl: 1.373, blk: 0.5, tpm: -0.785, fgImpact: -0.256, ftImpact: -2.087, to: 0.877 } },
          { name: "Jeremiah Fears", min: 34, pts: 29, reb: 5, ast: 4, stl: 2, blk: 0, to: 5, tpm: 2, fgm: 9, fga: 17, ftm: 9, fta: 10, composite: 4.48, zScores: { pts: 2.079, reb: 0.123, ast: 0.826, stl: 1.373, blk: -0.605, tpm: 0.552, fgImpact: 0.958, ftImpact: 1.845, to: -2.666 } },
          { name: "Karlo Matkovic", min: 15, pts: 3, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.65, zScores: { pts: -0.767, reb: -0.404, ast: -0.938, stl: -0.674, blk: 0.5, tpm: -0.117, fgImpact: -0.414, ftImpact: 0, to: 0.169 } },
          { name: "Jordan Poole", min: 31, pts: 25, reb: 3, ast: 2, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 9, fga: 16, ftm: 4, fta: 4, composite: 3.06, zScores: { pts: 1.641, reb: -0.404, ast: -0.056, stl: -0.674, blk: -0.605, tpm: 1.22, fgImpact: 1.204, ftImpact: 1.27, to: -0.54 } },
          { name: "Jaron Pierre Jr.", min: 25, pts: 6, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -2.39, zScores: { pts: -0.439, reb: 0.123, ast: -0.938, stl: -0.674, blk: -0.605, tpm: 0.552, fgImpact: -0.582, ftImpact: 0, to: 0.169 } },
          { name: "AJ Johnson", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.91, zScores: { pts: -1.096, reb: -1.195, ast: -0.938, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: -0.493, ftImpact: 0, to: 0.877 } }
        ]
      },
      home: {
        abbr: "SA", name: "San Antonio Spurs", score: 114,
        players: [
          { name: "Julian Champagnie", min: 25, pts: 9, reb: 3, ast: 3, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: 1.04, zScores: { pts: -0.11, reb: -0.404, ast: 0.385, stl: -0.674, blk: 0.5, tpm: 1.22, fgImpact: -0.75, ftImpact: 0, to: 0.877 } },
          { name: "Victor Wembanyama", min: 32, pts: 50, reb: 19, ast: 1, stl: 4, blk: 5, to: 3, tpm: 5, fgm: 20, fga: 29, ftm: 5, fta: 6, composite: 22.21, zScores: { pts: 4.379, reb: 3.814, ast: -0.497, stl: 3.419, blk: 4.919, tpm: 2.556, fgImpact: 4.293, ftImpact: 0.575, to: -1.249 } },
          { name: "De'Aaron Fox", min: 26, pts: 5, reb: 2, ast: 10, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 4, ftm: 3, fta: 3, composite: -0.52, zScores: { pts: -0.548, reb: -0.667, ast: 3.472, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: -0.414, ftImpact: 0.953, to: -1.249 } },
          { name: "Devin Vassell", min: 26, pts: 10, reb: 3, ast: 2, stl: 0, blk: 2, to: 1, tpm: 2, fgm: 2, fga: 7, ftm: 4, fta: 5, composite: 0.87, zScores: { pts: -0.001, reb: -0.404, ast: -0.056, stl: -0.674, blk: 1.605, tpm: 0.552, fgImpact: -0.582, ftImpact: 0.257, to: 0.169 } },
          { name: "Stephon Castle", min: 29, pts: 19, reb: 3, ast: 6, stl: 0, blk: 0, to: 2, tpm: 5, fgm: 7, fga: 12, ftm: 0, fta: 0, composite: 4.07, zScores: { pts: 0.985, reb: -0.404, ast: 1.708, stl: -0.674, blk: -0.605, tpm: 2.556, fgImpact: 1.046, ftImpact: 0, to: -0.54 } },
          { name: "Harrison Barnes", min: 21, pts: 3, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 7, ftm: 1, fta: 2, composite: -3.74, zScores: { pts: -0.767, reb: 0.123, ast: -0.056, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: -1.154, ftImpact: -0.696, to: 0.877 } },
          { name: "Keldon Johnson", min: 23, pts: 10, reb: 4, ast: 4, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 2, fta: 4, composite: -0.81, zScores: { pts: -0.001, reb: -0.14, ast: 0.826, stl: -0.674, blk: -0.605, tpm: 0.552, fgImpact: -0.256, ftImpact: -1.391, to: 0.877 } },
          { name: "David Jones Garcia", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.15, zScores: { pts: -1.096, reb: -0.931, ast: -0.938, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: 0, ftImpact: 0, to: 0.877 } },
          { name: "Carter Bryant", min: 20, pts: 8, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -3.09, zScores: { pts: -0.22, reb: -0.404, ast: -0.938, stl: -0.674, blk: -0.605, tpm: 0.552, fgImpact: -0.256, ftImpact: 0, to: -0.54 } },
          { name: "Luke Kornet", min: 10, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.62, zScores: { pts: -1.096, reb: -0.404, ast: -0.938, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: 0, ftImpact: 0, to: 0.877 } },
          { name: "Tarris Reed Jr.", min: 6, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.32, zScores: { pts: -1.096, reb: -0.14, ast: -0.938, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: -0.247, ftImpact: 0, to: 0.169 } },
          { name: "Jordan McLaughlin", min: 18, pts: 0, reb: 3, ast: 2, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -2.06, zScores: { pts: -1.096, reb: -0.404, ast: -0.056, stl: 0.349, blk: 0.5, tpm: -0.785, fgImpact: -0.74, ftImpact: 0, to: 0.169 } }
        ]
      }
    },
      {
      id: "401910028",
      line: "Boston Celtics 96 @ Sacramento Kings 97 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BOS", name: "Boston Celtics", score: 96,
        players: [
          { name: "Paul George", min: 37, pts: 19, reb: 8, ast: 5, stl: 4, blk: 1, to: 3, tpm: 2, fgm: 6, fga: 21, ftm: 5, fta: 6, composite: 5.22, zScores: { pts: 0.985, reb: 0.914, ast: 1.267, stl: 3.419, blk: 0.5, tpm: 0.552, fgImpact: -1.746, ftImpact: 0.575, to: -1.249 } },
          { name: "Sam Hauser", min: 31, pts: 14, reb: 6, ast: 2, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 13, ftm: 0, fta: 0, composite: 1.91, zScores: { pts: 0.437, reb: 0.387, ast: -0.056, stl: -0.674, blk: -0.605, tpm: 1.888, fgImpact: -0.345, ftImpact: 0, to: 0.877 } },
          { name: "Neemias Queta", min: 30, pts: 15, reb: 7, ast: 1, stl: 0, blk: 2, to: 2, tpm: 1, fgm: 5, fga: 9, ftm: 4, fta: 10, composite: -3.19, zScores: { pts: 0.547, reb: 0.651, ast: -0.497, stl: -0.674, blk: 1.605, tpm: -0.117, fgImpact: 0.642, ftImpact: -4.809, to: -0.54 } },
          { name: "Payton Pritchard", min: 34, pts: 9, reb: 6, ast: 8, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 17, ftm: 1, fta: 2, composite: -0.92, zScores: { pts: -0.11, reb: 0.387, ast: 2.59, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: -1.904, ftImpact: -0.696, to: 0.877 } },
          { name: "Hugo Gonzalez", min: 17, pts: 5, reb: 4, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.44, zScores: { pts: -0.548, reb: -0.14, ast: -0.497, stl: -0.674, blk: 0.5, tpm: -0.117, fgImpact: 0.158, ftImpact: 0, to: 0.877 } },
          { name: "Chris Cenac Jr.", min: 12, pts: 2, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -3.75, zScores: { pts: -0.877, reb: -0.404, ast: -0.938, stl: 0.349, blk: -0.605, tpm: -0.785, fgImpact: -0.661, ftImpact: 0, to: 0.169 } },
          { name: "Luka Garza", min: 17, pts: 5, reb: 5, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 6, ftm: 1, fta: 2, composite: -4.56, zScores: { pts: -0.548, reb: 0.123, ast: -0.497, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: -0.335, ftImpact: -0.696, to: -0.54 } },
          { name: "Mike Conley", min: 18, pts: 19, reb: 4, ast: 2, stl: 3, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 7, ftm: 3, fta: 3, composite: 7.3, zScores: { pts: 0.985, reb: -0.14, ast: -0.056, stl: 2.396, blk: -0.605, tpm: 1.888, fgImpact: 1.707, ftImpact: 0.953, to: 0.169 } },
          { name: "Ron Harper Jr.", min: 13, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.39, zScores: { pts: -0.767, reb: -1.195, ast: -0.497, stl: -0.674, blk: -0.605, tpm: -0.117, fgImpact: -0.414, ftImpact: 0, to: 0.877 } },
          { name: "Devin Carter", min: 4, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.84, zScores: { pts: -1.096, reb: -0.667, ast: -0.938, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: -0.247, ftImpact: 0, to: 0.169 } },
          { name: "Baylor Scheierman", min: 18, pts: 4, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 11, ftm: 0, fta: 0, composite: -5.02, zScores: { pts: -0.658, reb: -0.404, ast: -0.497, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: -1.569, ftImpact: 0, to: 0.169 } },
          { name: "Jordan Walsh", min: 8, pts: 1, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 1, fta: 2, composite: -4.69, zScores: { pts: -0.986, reb: -0.14, ast: -0.938, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: -0.74, ftImpact: -0.696, to: 0.877 } }
        ]
      },
      home: {
        abbr: "SAC", name: "Sacramento Kings", score: 97,
        players: [
          { name: "Domantas Sabonis", min: 32, pts: 15, reb: 17, ast: 4, stl: 0, blk: 1, to: 7, tpm: 0, fgm: 5, fga: 10, ftm: 5, fta: 5, composite: 1.6, zScores: { pts: 0.547, reb: 3.287, ast: 0.826, stl: -0.674, blk: 0.5, tpm: -0.785, fgImpact: 0.395, ftImpact: 1.588, to: -4.084 } },
          { name: "De'Andre Hunter", min: 41, pts: 20, reb: 6, ast: 2, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 5, fga: 11, ftm: 8, fta: 9, composite: 3.65, zScores: { pts: 1.094, reb: 0.387, ast: -0.056, stl: -0.674, blk: 0.5, tpm: 0.552, fgImpact: 0.148, ftImpact: 1.527, to: 0.169 } },
          { name: "Keegan Murray", min: 40, pts: 15, reb: 12, ast: 0, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 7, fga: 14, ftm: 1, fta: 2, composite: -1.56, zScores: { pts: 0.547, reb: 1.969, ast: -0.938, stl: 0.349, blk: -0.605, tpm: -0.785, fgImpact: 0.553, ftImpact: -0.696, to: -1.957 } },
          { name: "Zach LaVine", min: 30, pts: 13, reb: 3, ast: 0, stl: 1, blk: 1, to: 3, tpm: 2, fgm: 4, fga: 10, ftm: 3, fta: 4, composite: -1.1, zScores: { pts: 0.328, reb: -0.404, ast: -0.938, stl: 0.349, blk: 0.5, tpm: 0.552, fgImpact: -0.177, ftImpact: -0.06, to: -1.249 } },
          { name: "Darius Acuff Jr.", min: 40, pts: 21, reb: 6, ast: 8, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 23, ftm: 5, fta: 7, composite: 1.52, zScores: { pts: 1.203, reb: 0.387, ast: 2.59, stl: -0.674, blk: -0.605, tpm: 0.552, fgImpact: -1.667, ftImpact: -0.439, to: 0.169 } },
          { name: "Leaky Black", min: 4, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.09, zScores: { pts: -0.877, reb: -1.195, ast: -0.938, stl: 0.349, blk: -0.605, tpm: -0.785, fgImpact: 0.079, ftImpact: 0, to: 0.877 } },
          { name: "Precious Achiuwa", min: 22, pts: 5, reb: 7, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: -1.23, zScores: { pts: -0.548, reb: 0.651, ast: -0.497, stl: -0.674, blk: 0.5, tpm: -0.785, fgImpact: 0.651, ftImpact: -0.696, to: 0.169 } },
          { name: "Dylan Cardwell", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.15, zScores: { pts: -1.096, reb: -0.931, ast: -0.938, stl: -0.674, blk: -0.605, tpm: -0.785, fgImpact: 0, ftImpact: 0, to: 0.877 } },
          { name: "Malik Monk", min: 10, pts: 3, reb: 0, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 3, fta: 3, composite: -2.3, zScores: { pts: -0.767, reb: -1.195, ast: -0.497, stl: -0.674, blk: 0.5, tpm: -0.785, fgImpact: 0, ftImpact: 0.953, to: 0.169 } },
          { name: "Emanuel Sharp", min: 16, pts: 3, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -3.3, zScores: { pts: -0.767, reb: -1.195, ast: -0.938, stl: 0.349, blk: -0.605, tpm: -0.117, fgImpact: -0.908, ftImpact: 0, to: 0.877 } }
        ]
      }
    }
    ]
  },
    "2026-11-22": {
    games: [
      {
      id: "401910029",
      line: "Detroit Pistons @ Atlanta Hawks (6:38 - 1st)",
      completed: false,
      statusText: "6:38 - 1st",
      away: {
        abbr: "DET", name: "Detroit Pistons", score: null,
        players: [

        ]
      },
      home: {
        abbr: "ATL", name: "Atlanta Hawks", score: null,
        players: [

        ]
      }
    },
      {
      id: "401910030",
      line: "Oklahoma City Thunder @ Miami Heat (11/22 - 6:00 PM EST)",
      completed: false,
      statusText: "11/22 - 6:00 PM EST",
      away: {
        abbr: "OKC", name: "Oklahoma City Thunder", score: null,
        players: [

        ]
      },
      home: {
        abbr: "MIA", name: "Miami Heat", score: null,
        players: [

        ]
      }
    },
      {
      id: "401910031",
      line: "Orlando Magic @ Washington Wizards (11/22 - 7:00 PM EST)",
      completed: false,
      statusText: "11/22 - 7:00 PM EST",
      away: {
        abbr: "ORL", name: "Orlando Magic", score: null,
        players: [

        ]
      },
      home: {
        abbr: "WSH", name: "Washington Wizards", score: null,
        players: [

        ]
      }
    },
      {
      id: "401910032",
      line: "Denver Nuggets @ Chicago Bulls (11/22 - 7:00 PM EST)",
      completed: false,
      statusText: "11/22 - 7:00 PM EST",
      away: {
        abbr: "DEN", name: "Denver Nuggets", score: null,
        players: [

        ]
      },
      home: {
        abbr: "CHI", name: "Chicago Bulls", score: null,
        players: [

        ]
      }
    },
      {
      id: "401910033",
      line: "Dallas Mavericks @ Utah Jazz (11/22 - 7:00 PM EST)",
      completed: false,
      statusText: "11/22 - 7:00 PM EST",
      away: {
        abbr: "DAL", name: "Dallas Mavericks", score: null,
        players: [

        ]
      },
      home: {
        abbr: "UTAH", name: "Utah Jazz", score: null,
        players: [

        ]
      }
    },
      {
      id: "401910034",
      line: "Indiana Pacers @ New York Knicks (11/22 - 8:00 PM EST)",
      completed: false,
      statusText: "11/22 - 8:00 PM EST",
      away: {
        abbr: "IND", name: "Indiana Pacers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "NY", name: "New York Knicks", score: null,
        players: [

        ]
      }
    },
      {
      id: "401910035",
      line: "Boston Celtics @ Golden State Warriors (11/22 - 8:30 PM EST)",
      completed: false,
      statusText: "11/22 - 8:30 PM EST",
      away: {
        abbr: "BOS", name: "Boston Celtics", score: null,
        players: [

        ]
      },
      home: {
        abbr: "GS", name: "Golden State Warriors", score: null,
        players: [

        ]
      }
    }
    ]
  }
  },
  "nba-preseason": {

  }
};
