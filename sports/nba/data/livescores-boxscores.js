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
    "2026-10-29": {
    games: [
      {
      id: "401909893",
      line: "Cleveland Cavaliers 111 @ Atlanta Hawks 114 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CLE", name: "Cleveland Cavaliers", score: 111,
        players: [
          { name: "Jarrett Allen", min: 30, pts: 14, reb: 8, ast: 1, stl: 0, blk: 2, to: 1, tpm: 1, fgm: 5, fga: 8, ftm: 3, fta: 4, composite: 3.03, zScores: { pts: 0.404, reb: 1.173, ast: -0.55, stl: -0.664, blk: 1.728, tpm: -0.186, fgImpact: 0.837, ftImpact: 0.037, to: 0.25 } },
          { name: "Evan Mobley", min: 33, pts: 11, reb: 4, ast: 7, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 9, ftm: 3, fta: 4, composite: 0.51, zScores: { pts: 0.04, reb: -0.046, ast: 1.395, stl: -0.664, blk: 0.642, tpm: -0.953, fgImpact: -0.194, ftImpact: 0.037, to: 0.25 } },
          { name: "James Harden", min: 36, pts: 24, reb: 5, ast: 4, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 7, fga: 14, ftm: 7, fta: 9, composite: 2.22, zScores: { pts: 1.617, reb: 0.259, ast: 0.422, stl: -0.664, blk: -0.444, tpm: 1.348, fgImpact: 0.242, ftImpact: 0.509, to: -1.07 } },
          { name: "Donovan Mitchell", min: 33, pts: 22, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 7, fga: 19, ftm: 7, fta: 8, composite: 1.99, zScores: { pts: 1.375, reb: -0.351, ast: 0.098, stl: 0.23, blk: -0.444, tpm: -0.186, fgImpact: -1.42, ftImpact: 1.776, to: 0.91 } },
          { name: "Peyton Watson", min: 22, pts: 4, reb: 4, ast: 3, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 1, fga: 8, ftm: 2, fta: 4, composite: -4.68, zScores: { pts: -0.809, reb: -0.046, ast: 0.098, stl: -0.664, blk: 1.728, tpm: -0.953, fgImpact: -1.959, ftImpact: -1.664, to: -0.41 } },
          { name: "Mario Hezonja", min: 17, pts: 10, reb: 6, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 2.34, zScores: { pts: -0.081, reb: 0.563, ast: -0.226, stl: 0.23, blk: -0.444, tpm: 0.581, fgImpact: 0.803, ftImpact: 0, to: 0.91 } },
          { name: "Sam Merrill", min: 27, pts: 16, reb: 2, ast: 3, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 2.12, zScores: { pts: 0.647, reb: -0.656, ast: 0.098, stl: 0.23, blk: -0.444, tpm: 2.116, fgImpact: 0.539, ftImpact: 0, to: -0.41 } },
          { name: "Jaylon Tyson", min: 18, pts: 3, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -2.93, zScores: { pts: -0.93, reb: 0.563, ast: -0.55, stl: -0.664, blk: -0.444, tpm: -0.186, fgImpact: -1.627, ftImpact: 0, to: 0.91 } },
          { name: "Craig Porter Jr.", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.294, reb: -0.961, ast: -0.874, stl: -0.664, blk: -0.444, tpm: -0.953, fgImpact: 0, ftImpact: 0, to: 0.91 } },
          { name: "Tyrese Proctor", min: 20, pts: 7, reb: 6, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -0.06, zScores: { pts: -0.445, reb: 0.563, ast: -0.226, stl: -0.664, blk: -0.444, tpm: -0.186, fgImpact: 0.436, ftImpact: 0, to: 0.91 } }
        ]
      },
      home: {
        abbr: "ATL", name: "Atlanta Hawks", score: 114,
        players: [
          { name: "Onyeka Okongwu", min: 33, pts: 29, reb: 12, ast: 2, stl: 1, blk: 1, to: 1, tpm: 4, fgm: 11, fga: 17, ftm: 3, fta: 4, composite: 9.71, zScores: { pts: 2.224, reb: 2.392, ast: -0.226, stl: 0.23, blk: 0.642, tpm: 2.116, fgImpact: 2.041, ftImpact: 0.037, to: 0.25 } },
          { name: "Jalen Johnson", min: 34, pts: 17, reb: 8, ast: 7, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 7, fga: 16, ftm: 1, fta: 1, composite: 1.09, zScores: { pts: 0.768, reb: 1.173, ast: 1.395, stl: -0.664, blk: -0.444, tpm: 0.581, fgImpact: -0.423, ftImpact: 0.435, to: -1.73 } },
          { name: "CJ McCollum", min: 31, pts: 5, reb: 3, ast: 8, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 1, fga: 8, ftm: 3, fta: 4, composite: -3.24, zScores: { pts: -0.687, reb: -0.351, ast: 1.719, stl: 1.124, blk: -0.444, tpm: -0.953, fgImpact: -1.959, ftImpact: 0.037, to: -1.73 } },
          { name: "Nickeil Alexander-Walker", min: 31, pts: 25, reb: 3, ast: 1, stl: 0, blk: 1, to: 0, tpm: 4, fgm: 8, fga: 17, ftm: 5, fta: 5, composite: 5.96, zScores: { pts: 1.738, reb: -0.351, ast: -0.55, stl: -0.664, blk: 0.642, tpm: 2.116, fgImpact: -0.056, ftImpact: 2.173, to: 0.91 } },
          { name: "Dyson Daniels", min: 32, pts: 4, reb: 6, ast: 5, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -1.02, zScores: { pts: -0.809, reb: 0.563, ast: 0.747, stl: 0.23, blk: -0.444, tpm: -0.953, fgImpact: -1.26, ftImpact: 0, to: 0.91 } },
          { name: "Jock Landale", min: 15, pts: 6, reb: 10, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 2, composite: -2.08, zScores: { pts: -0.566, reb: 1.783, ast: -0.55, stl: -0.664, blk: -0.444, tpm: 0.581, fgImpact: -0.596, ftImpact: -2.533, to: 0.91 } },
          { name: "Luguentz Dort", min: 22, pts: 6, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -3.28, zScores: { pts: -0.566, reb: -0.351, ast: -0.226, stl: -0.664, blk: -0.444, tpm: -0.186, fgImpact: -0.263, ftImpact: -0.832, to: 0.25 } },
          { name: "Aaron Wiggins", min: 24, pts: 20, reb: 7, ast: 3, stl: 0, blk: 1, to: 1, tpm: 4, fgm: 8, fga: 14, ftm: 0, fta: 0, composite: 5.38, zScores: { pts: 1.132, reb: 0.868, ast: 0.098, stl: -0.664, blk: 0.642, tpm: 2.116, fgImpact: 0.941, ftImpact: 0, to: 0.25 } },
          { name: "Kingston Flemings", min: 16, pts: 2, reb: 1, ast: 5, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.05, zScores: { pts: -1.051, reb: -0.961, ast: 0.747, stl: -0.664, blk: -0.444, tpm: -0.953, fgImpact: -0.63, ftImpact: 0, to: 0.91 } }
        ]
      }
    },
      {
      id: "401909894",
      line: "Sacramento Kings 120 @ New Orleans Pelicans 132 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SAC", name: "Sacramento Kings", score: 120,
        players: [
          { name: "Domantas Sabonis", min: 40, pts: 9, reb: 15, ast: 7, stl: 2, blk: 1, to: 7, tpm: 0, fgm: 4, fga: 7, ftm: 1, fta: 2, composite: 1.24, zScores: { pts: -0.202, reb: 3.306, ast: 1.395, stl: 1.124, blk: 0.642, tpm: -0.953, fgImpact: 0.47, ftImpact: -0.832, to: -3.71 } },
          { name: "De'Andre Hunter", min: 37, pts: 24, reb: 5, ast: 1, stl: 0, blk: 0, to: 3, tpm: 4, fgm: 7, fga: 13, ftm: 6, fta: 6, composite: 4.45, zScores: { pts: 1.617, reb: 0.259, ast: -0.55, stl: -0.664, blk: -0.444, tpm: 2.116, fgImpact: 0.574, ftImpact: 2.608, to: -1.07 } },
          { name: "Precious Achiuwa", min: 41, pts: 24, reb: 9, ast: 2, stl: 4, blk: 0, to: 1, tpm: 0, fgm: 12, fga: 17, ftm: 0, fta: 1, composite: 6.11, zScores: { pts: 1.617, reb: 1.478, ast: -0.226, stl: 2.912, blk: -0.444, tpm: -0.953, fgImpact: 2.74, ftImpact: -1.267, to: 0.25 } },
          { name: "Zach LaVine", min: 39, pts: 21, reb: 3, ast: 5, stl: 3, blk: 0, to: 3, tpm: 3, fgm: 7, fga: 17, ftm: 4, fta: 6, composite: 1.95, zScores: { pts: 1.253, reb: -0.351, ast: 0.747, stl: 2.018, blk: -0.444, tpm: 1.348, fgImpact: -0.755, ftImpact: -0.795, to: -1.07 } },
          { name: "Darius Acuff Jr.", min: 41, pts: 34, reb: 6, ast: 14, stl: 1, blk: 0, to: 6, tpm: 3, fgm: 13, fga: 26, ftm: 5, fta: 5, composite: 7.76, zScores: { pts: 2.83, reb: 0.563, ast: 3.664, stl: 0.23, blk: -0.444, tpm: 1.348, fgImpact: 0.449, ftImpact: 2.173, to: -3.05 } },
          { name: "Alex Karaban", min: 12, pts: 6, reb: 0, ast: 0, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.01, zScores: { pts: -0.566, reb: -1.265, ast: -0.874, stl: 0.23, blk: -0.444, tpm: 0.581, fgImpact: 0.401, ftImpact: 0, to: -1.07 } },
          { name: "Malik Monk", min: 8, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -5.33, zScores: { pts: -1.051, reb: -0.961, ast: -0.55, stl: -0.664, blk: -0.444, tpm: -0.953, fgImpact: -0.298, ftImpact: 0, to: -0.41 } },
          { name: "Nique Clifford", min: 4, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.294, reb: -1.265, ast: -0.55, stl: -0.664, blk: -0.444, tpm: -0.953, fgImpact: 0, ftImpact: 0, to: 0.91 } },
          { name: "Emanuel Sharp", min: 18, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.36, zScores: { pts: -1.294, reb: -1.265, ast: -0.874, stl: 0.23, blk: -0.444, tpm: -0.953, fgImpact: -0.665, ftImpact: 0, to: 0.91 } }
        ]
      },
      home: {
        abbr: "NO", name: "New Orleans Pelicans", score: 132,
        players: [
          { name: "Herbert Jones", min: 32, pts: 16, reb: 4, ast: 1, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 7, fga: 12, ftm: 2, fta: 3, composite: -0.78, zScores: { pts: 0.647, reb: -0.046, ast: -0.55, stl: 1.124, blk: -0.444, tpm: -0.953, fgImpact: 0.906, ftImpact: -0.397, to: -1.07 } },
          { name: "Zion Williamson", min: 31, pts: 22, reb: 6, ast: 2, stl: 5, blk: 1, to: 3, tpm: 0, fgm: 10, fga: 12, ftm: 2, fta: 4, composite: 5.48, zScores: { pts: 1.375, reb: 0.563, ast: -0.226, stl: 3.805, blk: 0.642, tpm: -0.953, fgImpact: 3.003, ftImpact: -1.664, to: -1.07 } },
          { name: "Trey Murphy III", min: 32, pts: 19, reb: 5, ast: 3, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 6, fga: 12, ftm: 5, fta: 8, composite: 1.22, zScores: { pts: 1.011, reb: 0.259, ast: 0.098, stl: 0.23, blk: -0.444, tpm: 0.581, fgImpact: 0.207, ftImpact: -1.627, to: 0.91 } },
          { name: "Karlo Matkovic", min: 28, pts: 12, reb: 4, ast: 1, stl: 3, blk: 1, to: 2, tpm: 1, fgm: 4, fga: 7, ftm: 3, fta: 4, composite: 2.14, zScores: { pts: 0.162, reb: -0.046, ast: -0.55, stl: 2.018, blk: 0.642, tpm: -0.186, fgImpact: 0.47, ftImpact: 0.037, to: -0.41 } },
          { name: "Jeremiah Fears", min: 29, pts: 22, reb: 8, ast: 13, stl: 2, blk: 4, to: 3, tpm: 3, fgm: 9, fga: 16, ftm: 1, fta: 3, composite: 10.07, zScores: { pts: 1.375, reb: 1.173, ast: 3.34, stl: 1.124, blk: 3.9, tpm: 1.348, fgImpact: 0.975, ftImpact: -2.099, to: -1.07 } },
          { name: "Trendon Watford", min: 17, pts: 8, reb: 1, ast: 2, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 4, fta: 5, composite: 0.23, zScores: { pts: -0.323, reb: -0.961, ast: -0.226, stl: 2.018, blk: -0.444, tpm: -0.953, fgImpact: 0.401, ftImpact: 0.472, to: 0.25 } },
          { name: "Derik Queen", min: 22, pts: 9, reb: 2, ast: 3, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -2.42, zScores: { pts: -0.202, reb: -0.656, ast: 0.098, stl: 0.23, blk: -0.444, tpm: -0.186, fgImpact: 0.47, ftImpact: 0, to: -1.73 } },
          { name: "Saddiq Bey", min: 24, pts: 10, reb: 4, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 3, fta: 3, composite: 0.33, zScores: { pts: -0.081, reb: -0.046, ast: 0.098, stl: -0.664, blk: -0.444, tpm: -0.186, fgImpact: 0.104, ftImpact: 1.304, to: 0.25 } },
          { name: "Bryce McGowens", min: 6, pts: 4, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.51, zScores: { pts: -0.809, reb: -0.961, ast: -0.226, stl: 0.23, blk: -0.444, tpm: -0.953, fgImpact: 0.401, ftImpact: 0, to: 0.25 } },
          { name: "Bennedict Mathurin", min: 19, pts: 10, reb: 3, ast: 2, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: -0.62, zScores: { pts: -0.081, reb: -0.351, ast: -0.226, stl: -0.664, blk: -0.444, tpm: 0.581, fgImpact: 0.104, ftImpact: 0.869, to: -0.41 } }
        ]
      }
    },
      {
      id: "401909895",
      line: "Memphis Grizzlies 124 @ Portland Trail Blazers 103 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MEM", name: "Memphis Grizzlies", score: 124,
        players: [
          { name: "Cedric Coward", min: 27, pts: 17, reb: 7, ast: 4, stl: 3, blk: 0, to: 2, tpm: 3, fgm: 7, fga: 14, ftm: 0, fta: 0, composite: 4.81, zScores: { pts: 0.768, reb: 0.868, ast: 0.422, stl: 2.018, blk: -0.444, tpm: 1.348, fgImpact: 0.242, ftImpact: 0, to: -0.41 } },
          { name: "Cameron Boozer", min: 28, pts: 18, reb: 12, ast: 12, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 6, fga: 10, ftm: 2, fta: 2, composite: 8.64, zScores: { pts: 0.889, reb: 2.392, ast: 3.016, stl: -0.664, blk: -0.444, tpm: 2.116, fgImpact: 0.872, ftImpact: 0.869, to: -0.41 } },
          { name: "Jaylen Wells", min: 25, pts: 10, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -1.73, zScores: { pts: -0.081, reb: -0.961, ast: -0.874, stl: -0.664, blk: -0.444, tpm: 0.581, fgImpact: -0.194, ftImpact: 0, to: 0.91 } },
          { name: "Zach Edey", min: 19, pts: 13, reb: 7, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 6, fga: 8, ftm: 0, fta: 0, composite: 1.43, zScores: { pts: 0.283, reb: 0.868, ast: -0.874, stl: -0.664, blk: -0.444, tpm: -0.186, fgImpact: 1.536, ftImpact: 0, to: 0.91 } },
          { name: "Ty Jerome", min: 24, pts: 10, reb: 2, ast: 3, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 12, ftm: 3, fta: 3, composite: -1.8, zScores: { pts: -0.081, reb: -0.656, ast: 0.098, stl: 1.124, blk: -0.444, tpm: -0.186, fgImpact: -1.89, ftImpact: 1.304, to: -1.07 } },
          { name: "Jerami Grant", min: 27, pts: 2, reb: 1, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 8, ftm: 0, fta: 0, composite: -5.68, zScores: { pts: -1.051, reb: -0.961, ast: 0.098, stl: -0.664, blk: -0.444, tpm: -0.953, fgImpact: -1.959, ftImpact: 0, to: 0.25 } },
          { name: "Kris Murray", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.61, zScores: { pts: -1.294, reb: -0.961, ast: -0.874, stl: -0.664, blk: -0.444, tpm: -0.953, fgImpact: -0.332, ftImpact: 0, to: 0.91 } },
          { name: "Olivier-Maxence Prosper", min: 3, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -0.809, reb: -0.961, ast: -0.874, stl: -0.664, blk: -0.444, tpm: -0.953, fgImpact: 0.069, ftImpact: 0, to: 0.91 } },
          { name: "Taylor Hendricks", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.61, zScores: { pts: -1.294, reb: -0.961, ast: -0.874, stl: -0.664, blk: -0.444, tpm: -0.953, fgImpact: -0.332, ftImpact: 0, to: 0.91 } },
          { name: "GG Jackson", min: 21, pts: 12, reb: 7, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 12, ftm: 2, fta: 2, composite: 0.87, zScores: { pts: 0.162, reb: 0.868, ast: -0.226, stl: -0.664, blk: -0.444, tpm: 0.581, fgImpact: -1.191, ftImpact: 0.869, to: 0.91 } },
          { name: "Karim Lopez", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.61, zScores: { pts: -1.294, reb: -0.961, ast: -0.874, stl: -0.664, blk: -0.444, tpm: -0.953, fgImpact: -0.332, ftImpact: 0, to: 0.91 } },
          { name: "Isaiah Stewart", min: 16, pts: 18, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 7, fga: 10, ftm: 2, fta: 2, composite: 2.91, zScores: { pts: 0.889, reb: -0.351, ast: -0.874, stl: -0.664, blk: 0.642, tpm: 0.581, fgImpact: 1.571, ftImpact: 0.869, to: 0.25 } },
          { name: "Quinten Post", min: 7, pts: 10, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 0.69, zScores: { pts: -0.081, reb: -0.046, ast: -0.874, stl: -0.664, blk: -0.444, tpm: 0.581, fgImpact: 0.436, ftImpact: 0.869, to: 0.91 } },
          { name: "Scotty Pippen Jr.", min: 14, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.98, zScores: { pts: -1.051, reb: -1.265, ast: -0.874, stl: -0.664, blk: -0.444, tpm: -0.953, fgImpact: 0.367, ftImpact: 0, to: 0.91 } },
          { name: "Cam Spencer", min: 23, pts: 8, reb: 6, ast: 8, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 1, fta: 1, composite: 3.24, zScores: { pts: -0.323, reb: 0.563, ast: 1.719, stl: 1.124, blk: -0.444, tpm: -0.186, fgImpact: 0.104, ftImpact: 0.435, to: 0.25 } }
        ]
      },
      home: {
        abbr: "POR", name: "Portland Trail Blazers", score: 103,
        players: [
          { name: "Toumani Camara", min: 26, pts: 13, reb: 2, ast: 1, stl: 2, blk: 2, to: 2, tpm: 3, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 3.04, zScores: { pts: 0.283, reb: -0.656, ast: -0.55, stl: 1.124, blk: 1.728, tpm: 1.348, fgImpact: 0.173, ftImpact: 0, to: -0.41 } },
          { name: "Deni Avdija", min: 32, pts: 24, reb: 9, ast: 7, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 8, fga: 16, ftm: 8, fta: 12, composite: 3.11, zScores: { pts: 1.617, reb: 1.478, ast: 1.395, stl: -0.664, blk: 0.642, tpm: -0.953, fgImpact: 0.276, ftImpact: -1.589, to: 0.91 } },
          { name: "Donovan Clingan", min: 29, pts: 11, reb: 8, ast: 1, stl: 1, blk: 5, to: 2, tpm: 1, fgm: 5, fga: 9, ftm: 0, fta: 1, composite: 4.52, zScores: { pts: 0.04, reb: 1.173, ast: -0.55, stl: 0.23, blk: 4.986, tpm: -0.186, fgImpact: 0.505, ftImpact: -1.267, to: -0.41 } },
          { name: "Damian Lillard", min: 30, pts: 9, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 13, ftm: 2, fta: 4, composite: -6.01, zScores: { pts: -0.202, reb: -0.656, ast: -0.226, stl: -0.664, blk: -0.444, tpm: -0.186, fgImpact: -2.222, ftImpact: -1.664, to: 0.25 } },
          { name: "Ja Morant", min: 23, pts: 14, reb: 2, ast: 3, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 14, ftm: 0, fta: 0, composite: -0.89, zScores: { pts: 0.404, reb: -0.656, ast: 0.098, stl: -0.664, blk: -0.444, tpm: 0.581, fgImpact: -0.458, ftImpact: 0, to: 0.25 } },
          { name: "John Tonje", min: 5, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -2.31, zScores: { pts: -0.687, reb: -1.265, ast: -0.874, stl: -0.664, blk: -0.444, tpm: -0.186, fgImpact: 0.035, ftImpact: 0.869, to: 0.91 } },
          { name: "Micah Potter", min: 9, pts: 1, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 1, composite: -5.4, zScores: { pts: -1.172, reb: -0.656, ast: -0.874, stl: -0.664, blk: -0.444, tpm: -0.953, fgImpact: -0.665, ftImpact: 0.435, to: -0.41 } },
          { name: "Branden Carlson", min: 12, pts: 2, reb: 2, ast: 1, stl: 0, blk: 2, to: 3, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.18, zScores: { pts: -1.051, reb: -0.656, ast: -0.55, stl: -0.664, blk: 1.728, tpm: -0.953, fgImpact: 0.035, ftImpact: 0, to: -1.07 } },
          { name: "Yang Hansen", min: 5, pts: 3, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.07, zScores: { pts: -0.93, reb: -0.656, ast: -0.55, stl: -0.664, blk: 0.642, tpm: -0.186, fgImpact: 0.367, ftImpact: 0, to: 0.91 } },
          { name: "Jrue Holiday", min: 24, pts: 6, reb: 6, ast: 4, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -0.55, zScores: { pts: -0.566, reb: 0.563, ast: 0.422, stl: 0.23, blk: -0.444, tpm: 0.581, fgImpact: -0.928, ftImpact: 0, to: -0.41 } },
          { name: "Vit Krejci", min: 8, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -3.81, zScores: { pts: -1.051, reb: -1.265, ast: -0.55, stl: -0.664, blk: -0.444, tpm: -0.953, fgImpact: -0.665, ftImpact: 0.869, to: 0.91 } },
          { name: "Scoot Henderson", min: 19, pts: 9, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: -2.52, zScores: { pts: -0.202, reb: -0.046, ast: -0.874, stl: -0.664, blk: -0.444, tpm: -0.186, fgImpact: -0.561, ftImpact: 0.869, to: -0.41 } },
          { name: "Sidy Cissoko", min: 19, pts: 4, reb: 6, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 2, composite: -4.18, zScores: { pts: -0.809, reb: 0.563, ast: -0.226, stl: 0.23, blk: -0.444, tpm: -0.953, fgImpact: -0.263, ftImpact: -2.533, to: 0.25 } }
        ]
      }
    }
    ]
  },
    "2026-10-30": {
    games: [
      {
      id: "401909277",
      line: "Charlotte Hornets 79 @ Washington Wizards 95 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHA", name: "Charlotte Hornets", score: 79,
        players: [
          { name: "Moussa Diabate", min: 31, pts: 10, reb: 12, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: 2.19, zScores: { pts: 0.039, reb: 2.554, ast: -0.498, stl: 1.203, blk: -0.552, tpm: -0.761, fgImpact: -0.003, ftImpact: 0, to: 0.207 } },
          { name: "Brandon Miller", min: 37, pts: 19, reb: 7, ast: 2, stl: 1, blk: 1, to: 2, tpm: 3, fgm: 7, fga: 24, ftm: 2, fta: 2, composite: 1.53, zScores: { pts: 1.049, reb: 0.996, ast: -0.117, stl: 0.232, blk: 0.907, tpm: 1.121, fgImpact: -2.886, ftImpact: 0.766, to: -0.537 } },
          { name: "Naz Reid", min: 31, pts: 12, reb: 11, ast: 1, stl: 3, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 17, ftm: 0, fta: 2, composite: -1.68, zScores: { pts: 0.264, reb: 2.242, ast: -0.498, stl: 2.175, blk: -0.552, tpm: 0.494, fgImpact: -2.014, ftImpact: -2.515, to: -1.28 } },
          { name: "Dennis Schroder", min: 29, pts: 8, reb: 2, ast: 8, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 7, ftm: 3, fta: 4, composite: 1.39, zScores: { pts: -0.185, reb: -0.562, ast: 2.164, stl: 2.175, blk: -0.552, tpm: -0.134, fgImpact: -0.872, ftImpact: -0.109, to: -0.537 } },
          { name: "Sion James", min: 29, pts: 6, reb: 5, ast: 4, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 10, ftm: 1, fta: 2, composite: -1.42, zScores: { pts: -0.409, reb: 0.373, ast: 0.643, stl: 1.203, blk: -0.552, tpm: -0.134, fgImpact: -1.878, ftImpact: -0.875, to: 0.207 } },
          { name: "Royce O'Neale", min: 17, pts: 7, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 9, ftm: 1, fta: 2, composite: -3.31, zScores: { pts: -0.297, reb: -0.251, ast: -0.498, stl: -0.739, blk: -0.552, tpm: 0.494, fgImpact: -1.543, ftImpact: -0.875, to: 0.95 } },
          { name: "Tidjane Salaun", min: 9, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -0.89, zScores: { pts: -0.409, reb: -0.562, ast: -0.878, stl: -0.739, blk: -0.552, tpm: 0.494, fgImpact: 0.803, ftImpact: 0, to: 0.95 } },
          { name: "Hannes Steinbach", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -1.082, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.335, ftImpact: 0, to: 0.95 } },
          { name: "Ryan Kalkbrenner", min: 15, pts: 2, reb: 4, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.4, zScores: { pts: -0.858, reb: 0.061, ast: -0.878, stl: 0.232, blk: -0.552, tpm: -0.761, fgImpact: 0.402, ftImpact: 0, to: 0.95 } },
          { name: "PJ Hall", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.082, reb: -0.874, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.335, ftImpact: 0, to: 0.95 } },
          { name: "Grayson Allen", min: 21, pts: 5, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 10, ftm: 0, fta: 0, composite: -3.98, zScores: { pts: -0.521, reb: -0.251, ast: -0.117, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: -1.878, ftImpact: 0, to: 0.207 } },
          { name: "Christian Anderson", min: 14, pts: 4, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -2.93, zScores: { pts: -0.633, reb: -0.251, ast: 0.263, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -1.208, ftImpact: 0, to: 0.95 } },
          { name: "Liam McNeeley", min: 3, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.62, zScores: { pts: -1.082, reb: -0.562, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: 0, ftImpact: 0, to: 0.95 } }
        ]
      },
      home: {
        abbr: "WSH", name: "Washington Wizards", score: 95,
        players: [
          { name: "Anthony Davis", min: 34, pts: 25, reb: 13, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 8, fga: 18, ftm: 9, fta: 10, composite: 6.72, zScores: { pts: 1.721, reb: 2.866, ast: -0.498, stl: 0.232, blk: 0.907, tpm: -0.761, fgImpact: -0.138, ftImpact: 2.187, to: 0.207 } },
          { name: "AJ Dybantsa", min: 30, pts: 17, reb: 8, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 11, ftm: 6, fta: 7, composite: 2.42, zScores: { pts: 0.824, reb: 1.308, ast: -0.498, stl: 0.232, blk: -0.552, tpm: -0.134, fgImpact: -0.003, ftImpact: 1.039, to: 0.207 } },
          { name: "Kyshawn George", min: 32, pts: 12, reb: 3, ast: 3, stl: 1, blk: 1, to: 2, tpm: 4, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 2.22, zScores: { pts: 0.264, reb: -0.251, ast: 0.263, stl: 0.232, blk: 0.907, tpm: 1.748, fgImpact: -0.404, ftImpact: 0, to: -0.537 } },
          { name: "Alex Sarr", min: 29, pts: 3, reb: 8, ast: 0, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.7, zScores: { pts: -0.745, reb: 1.308, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: -0.939, ftImpact: 0, to: -2.023 } },
          { name: "Trae Young", min: 38, pts: 21, reb: 7, ast: 9, stl: 3, blk: 1, to: 4, tpm: 1, fgm: 4, fga: 9, ftm: 12, fta: 14, composite: 7.75, zScores: { pts: 1.273, reb: 0.996, ast: 2.544, stl: 2.175, blk: 0.907, tpm: -0.134, fgImpact: -0.069, ftImpact: 2.078, to: -2.023 } },
          { name: "Khris Middleton", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -1.082, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.335, ftImpact: 0, to: 0.95 } },
          { name: "Deandre Ayton", min: 17, pts: 3, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -4.82, zScores: { pts: -0.745, reb: -0.251, ast: -0.498, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.604, ftImpact: -0.875, to: 0.207 } },
          { name: "Tre Mann", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -1.082, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.335, ftImpact: 0, to: 0.95 } },
          { name: "Bub Carrington", min: 20, pts: 9, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 0.78, zScores: { pts: -0.073, reb: 0.061, ast: -0.117, stl: -0.739, blk: -0.552, tpm: 1.121, fgImpact: 0.87, ftImpact: 0, to: 0.207 } },
          { name: "Bilal Coulibaly", min: 22, pts: 1, reb: 5, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -2.28, zScores: { pts: -0.97, reb: 0.373, ast: -0.498, stl: -0.739, blk: 0.907, tpm: -0.761, fgImpact: -0.67, ftImpact: -0.875, to: 0.95 } },
          { name: "Will Riley", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -1.082, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.335, ftImpact: 0, to: 0.95 } },
          { name: "Tre Johnson", min: 13, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -4.05, zScores: { pts: -0.633, reb: -0.562, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.872, ftImpact: 0, to: 0.95 } }
        ]
      }
    },
      {
      id: "401909278",
      line: "Chicago Bulls 111 @ Boston Celtics 125 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHI", name: "Chicago Bulls", score: 111,
        players: [
          { name: "Jalen Smith", min: 27, pts: 5, reb: 12, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 1, fta: 2, composite: 0.53, zScores: { pts: -0.521, reb: 2.554, ast: -0.498, stl: -0.739, blk: 2.366, tpm: -0.761, fgImpact: -1.208, ftImpact: -0.875, to: 0.207 } },
          { name: "Matas Buzelis", min: 20, pts: 14, reb: 5, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 11, ftm: 2, fta: 2, composite: -0.21, zScores: { pts: 0.488, reb: 0.373, ast: -0.498, stl: -0.739, blk: -0.552, tpm: 0.494, fgImpact: -0.003, ftImpact: 0.766, to: -0.537 } },
          { name: "Caleb Wilson", min: 31, pts: 23, reb: 5, ast: 4, stl: 1, blk: 2, to: 1, tpm: 6, fgm: 7, fga: 16, ftm: 3, fta: 6, composite: 5.49, zScores: { pts: 1.497, reb: 0.373, ast: 0.643, stl: 0.232, blk: 2.366, tpm: 3.003, fgImpact: -0.205, ftImpact: -2.625, to: 0.207 } },
          { name: "Norman Powell", min: 31, pts: 16, reb: 2, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 11, ftm: 7, fta: 8, composite: 0.62, zScores: { pts: 0.712, reb: -0.562, ast: 0.263, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: -0.739, ftImpact: 1.422, to: 0.95 } },
          { name: "Josh Giddey", min: 25, pts: 13, reb: 4, ast: 5, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 4, fga: 8, ftm: 3, fta: 4, composite: -1.2, zScores: { pts: 0.376, reb: 0.061, ast: 1.023, stl: -0.739, blk: -0.552, tpm: 0.494, fgImpact: 0.266, ftImpact: -0.109, to: -2.023 } },
          { name: "Zach Collins", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.33, zScores: { pts: -1.082, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.335, ftImpact: 0, to: 0.207 } },
          { name: "Isaac Okoro", min: 18, pts: 6, reb: 3, ast: 2, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 1, fta: 1, composite: -0.36, zScores: { pts: -0.409, reb: -0.251, ast: -0.117, stl: -0.739, blk: 0.907, tpm: -0.134, fgImpact: -0.202, ftImpact: 0.383, to: 0.207 } },
          { name: "Leonard Miller", min: 11, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -3.96, zScores: { pts: -0.858, reb: -0.562, ast: -0.498, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.939, ftImpact: 0, to: 0.95 } },
          { name: "Tobe Awaka", min: 12, pts: 2, reb: 7, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 6, composite: -6.24, zScores: { pts: -0.858, reb: 0.996, ast: -0.498, stl: 0.232, blk: -0.552, tpm: -0.761, fgImpact: 0, ftImpact: -4.265, to: -0.537 } },
          { name: "Noa Essengue", min: 16, pts: 10, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 7, ftm: 3, fta: 5, composite: -4.24, zScores: { pts: 0.039, reb: 0.061, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: -0.136, ftImpact: -1.367, to: -0.537 } },
          { name: "Buddy Hield", min: 17, pts: 5, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.72, zScores: { pts: -0.521, reb: -0.251, ast: -0.498, stl: 0.232, blk: -0.552, tpm: -0.134, fgImpact: -0.202, ftImpact: 0, to: 0.207 } },
          { name: "Tre Jones", min: 20, pts: 12, reb: 4, ast: 4, stl: 4, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 10, ftm: 4, fta: 6, composite: 3.08, zScores: { pts: 0.264, reb: 0.061, ast: 0.643, stl: 3.146, blk: 0.907, tpm: -0.761, fgImpact: -0.404, ftImpact: -0.984, to: 0.207 } },
          { name: "Jordan Hawkins", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.92, zScores: { pts: -1.082, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.67, ftImpact: 0, to: 0.95 } },
          { name: "Jaylin Sellers", min: 3, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.17, zScores: { pts: -0.745, reb: -1.186, ast: -0.498, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: -0.269, ftImpact: 0, to: 0.95 } }
        ]
      },
      home: {
        abbr: "BOS", name: "Boston Celtics", score: 125,
        players: [
          { name: "Paul George", min: 27, pts: 18, reb: 6, ast: 8, stl: 3, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 15, ftm: 2, fta: 2, composite: 6.26, zScores: { pts: 0.936, reb: 0.684, ast: 2.164, stl: 2.175, blk: -0.552, tpm: 0.494, fgImpact: 0.13, ftImpact: 0.766, to: -0.537 } },
          { name: "Jayson Tatum", min: 35, pts: 26, reb: 7, ast: 7, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 9, fga: 20, ftm: 6, fta: 8, composite: 1.5, zScores: { pts: 1.833, reb: 0.996, ast: 1.784, stl: -0.739, blk: -0.552, tpm: 0.494, fgImpact: -0.072, ftImpact: -0.219, to: -2.023 } },
          { name: "Mitchell Robinson", min: 19, pts: 11, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 4, ftm: 3, fta: 5, composite: -0.07, zScores: { pts: 0.152, reb: 0.061, ast: -0.878, stl: -0.739, blk: 0.907, tpm: -0.761, fgImpact: 1.607, ftImpact: -1.367, to: 0.95 } },
          { name: "Derrick White", min: 26, pts: 9, reb: 2, ast: 4, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 1.67, zScores: { pts: -0.073, reb: -0.562, ast: 0.643, stl: 1.203, blk: -0.552, tpm: -0.134, fgImpact: 0.936, ftImpact: 0, to: 0.207 } },
          { name: "Jordan Walsh", min: 11, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.67, zScores: { pts: -0.858, reb: -0.562, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.269, ftImpact: 0, to: 0.95 } },
          { name: "Sam Hauser", min: 18, pts: 6, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.49, zScores: { pts: -0.409, reb: -0.251, ast: -0.117, stl: -0.739, blk: -0.552, tpm: 0.494, fgImpact: 0.133, ftImpact: 0, to: 0.95 } },
          { name: "Chris Cenac Jr.", min: 2, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -5.25, zScores: { pts: -0.745, reb: -0.562, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: 0.402, ftImpact: -0.875, to: -0.537 } },
          { name: "Luka Garza", min: 7, pts: 5, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 4, composite: -3.37, zScores: { pts: -0.521, reb: -0.874, ast: -0.498, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.269, ftImpact: -0.109, to: 0.95 } },
          { name: "Neemias Queta", min: 20, pts: 13, reb: 6, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 7, fta: 10, composite: 0.21, zScores: { pts: 0.376, reb: 0.684, ast: -0.878, stl: 0.232, blk: 0.907, tpm: -0.761, fgImpact: 0.535, ftImpact: -1.094, to: 0.207 } },
          { name: "Payton Pritchard", min: 35, pts: 30, reb: 3, ast: 3, stl: 2, blk: 0, to: 3, tpm: 3, fgm: 9, fga: 17, ftm: 9, fta: 9, composite: 7.17, zScores: { pts: 2.282, reb: -0.251, ast: 0.263, stl: 1.203, blk: -0.552, tpm: 1.121, fgImpact: 0.934, ftImpact: 3.445, to: -1.28 } },
          { name: "Ron Harper Jr.", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.99, zScores: { pts: -1.082, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: 0, ftImpact: 0, to: 0.207 } },
          { name: "Baylor Scheierman", min: 23, pts: 2, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.24, zScores: { pts: -0.858, reb: -0.251, ast: 0.263, stl: 0.232, blk: -0.552, tpm: -0.761, fgImpact: -0.269, ftImpact: 0, to: 0.95 } },
          { name: "Hugo Gonzalez", min: 15, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.99, zScores: { pts: -1.082, reb: -0.562, ast: -0.878, stl: 0.232, blk: -0.552, tpm: -0.761, fgImpact: -0.335, ftImpact: 0, to: 0.95 } }
        ]
      }
    },
      {
      id: "401909279",
      line: "Detroit Pistons 110 @ Brooklyn Nets 94 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DET", name: "Detroit Pistons", score: 110,
        players: [
          { name: "Duncan Robinson", min: 26, pts: 17, reb: 4, ast: 2, stl: 3, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 11, ftm: 5, fta: 5, composite: 5.75, zScores: { pts: 0.824, reb: 0.061, ast: -0.117, stl: 2.175, blk: -0.552, tpm: 0.494, fgImpact: -0.003, ftImpact: 1.914, to: 0.95 } },
          { name: "John Collins", min: 26, pts: 4, reb: 9, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 2, composite: -3.82, zScores: { pts: -0.633, reb: 1.619, ast: -0.878, stl: 0.232, blk: -0.552, tpm: -0.761, fgImpact: -0.537, ftImpact: -2.515, to: 0.207 } },
          { name: "Paul Reed", min: 31, pts: 12, reb: 4, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 12, ftm: 0, fta: 0, composite: -1.39, zScores: { pts: 0.264, reb: 0.061, ast: -0.498, stl: 0.232, blk: -0.552, tpm: -0.761, fgImpact: 0.399, ftImpact: 0, to: -0.537 } },
          { name: "Cade Cunningham", min: 28, pts: 20, reb: 5, ast: 4, stl: 0, blk: 1, to: 4, tpm: 1, fgm: 6, fga: 15, ftm: 7, fta: 7, composite: 2.26, zScores: { pts: 1.161, reb: 0.373, ast: 0.643, stl: -0.739, blk: 0.907, tpm: -0.134, fgImpact: -0.606, ftImpact: 2.679, to: -2.023 } },
          { name: "Ausar Thompson", min: 26, pts: 11, reb: 8, ast: 6, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 9, ftm: 1, fta: 2, composite: 3.5, zScores: { pts: 0.152, reb: 1.308, ast: 1.403, stl: 1.203, blk: -0.552, tpm: -0.761, fgImpact: 0.668, ftImpact: -0.875, to: 0.95 } },
          { name: "Tolu Smith", min: 3, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.93, zScores: { pts: -0.858, reb: -0.874, ast: -0.498, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: 0.402, ftImpact: 0, to: 0.95 } },
          { name: "Ronald Holland II", min: 22, pts: 18, reb: 3, ast: 2, stl: 4, blk: 1, to: 2, tpm: 2, fgm: 6, fga: 10, ftm: 4, fta: 7, composite: 3.41, zScores: { pts: 0.936, reb: -0.251, ast: -0.117, stl: 3.146, blk: 0.907, tpm: 0.494, fgImpact: 1.069, ftImpact: -2.242, to: -0.537 } },
          { name: "Isaac Jones", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -1.082, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.335, ftImpact: 0, to: 0.95 } },
          { name: "Javonte Green", min: 22, pts: 6, reb: 3, ast: 1, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 3, fta: 3, composite: 1.64, zScores: { pts: -0.409, reb: -0.251, ast: -0.498, stl: 1.203, blk: 0.907, tpm: -0.134, fgImpact: -1.274, ftImpact: 1.148, to: 0.95 } },
          { name: "Kevin Huerter", min: 24, pts: 8, reb: 1, ast: 3, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: -1.27, zScores: { pts: -0.185, reb: -0.874, ast: 0.263, stl: 0.232, blk: -0.552, tpm: 0.494, fgImpact: -0.872, ftImpact: 0.766, to: -0.537 } },
          { name: "Chaz Lanier", min: 3, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.52, zScores: { pts: -0.409, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: 0.494, fgImpact: 0.803, ftImpact: 0, to: 0.95 } },
          { name: "Daniss Jenkins", min: 24, pts: 6, reb: 3, ast: 5, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -0.69, zScores: { pts: -0.409, reb: -0.251, ast: 1.023, stl: -0.739, blk: -0.552, tpm: 0.494, fgImpact: -1.208, ftImpact: 0, to: 0.95 } },
          { name: "Ebuka Okorie", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.66, zScores: { pts: -1.082, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.67, ftImpact: 0, to: 0.207 } }
        ]
      },
      home: {
        abbr: "BKN", name: "Brooklyn Nets", score: 94,
        players: [
          { name: "Julius Randle", min: 25, pts: 15, reb: 8, ast: 3, stl: 0, blk: 0, to: 5, tpm: 3, fgm: 4, fga: 13, ftm: 4, fta: 4, composite: -0.64, zScores: { pts: 0.6, reb: 1.308, ast: 0.263, stl: -0.739, blk: -0.552, tpm: 1.121, fgImpact: -1.41, ftImpact: 1.531, to: -2.767 } },
          { name: "Michael Porter Jr.", min: 26, pts: 13, reb: 7, ast: 1, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 4, fga: 9, ftm: 3, fta: 3, composite: 2.82, zScores: { pts: 0.376, reb: 0.996, ast: -0.498, stl: -0.739, blk: 0.907, tpm: 0.494, fgImpact: -0.069, ftImpact: 1.148, to: 0.207 } },
          { name: "Chaney Johnson", min: 19, pts: 6, reb: 2, ast: 0, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -1.44, zScores: { pts: -0.409, reb: -0.562, ast: -0.878, stl: 0.232, blk: 0.907, tpm: -0.761, fgImpact: -0.202, ftImpact: 0.766, to: -0.537 } },
          { name: "Day'Ron Sharpe", min: 24, pts: 3, reb: 7, ast: 1, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -0.43, zScores: { pts: -0.745, reb: 0.996, ast: -0.498, stl: 0.232, blk: 2.366, tpm: -0.761, fgImpact: -0.604, ftImpact: -0.875, to: -0.537 } },
          { name: "Nolan Traore", min: 26, pts: 9, reb: 2, ast: 2, stl: 1, blk: 2, to: 3, tpm: 0, fgm: 3, fga: 11, ftm: 3, fta: 4, composite: -1.78, zScores: { pts: -0.073, reb: -0.562, ast: -0.117, stl: 0.232, blk: 2.366, tpm: -0.761, fgImpact: -1.476, ftImpact: -0.109, to: -1.28 } },
          { name: "Josh Minott", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.96, zScores: { pts: -0.858, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: 0.067, ftImpact: 0, to: 0.95 } },
          { name: "Noah Clowney", min: 22, pts: 3, reb: 8, ast: 1, stl: 2, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -1.01, zScores: { pts: -0.745, reb: 1.308, ast: -0.498, stl: 1.203, blk: 0.907, tpm: -0.761, fgImpact: -0.269, ftImpact: -0.875, to: -1.28 } },
          { name: "Danny Wolf", min: 12, pts: 9, reb: 6, ast: 2, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.32, zScores: { pts: -0.073, reb: 0.684, ast: -0.117, stl: -0.739, blk: -0.552, tpm: 1.121, fgImpact: 0.535, ftImpact: 0, to: -0.537 } },
          { name: "Moritz Wagner", min: 23, pts: 16, reb: 8, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 10, ftm: 1, fta: 1, composite: 3.46, zScores: { pts: 0.712, reb: 1.308, ast: -0.498, stl: 0.232, blk: -0.552, tpm: -0.134, fgImpact: 1.806, ftImpact: 0.383, to: 0.207 } },
          { name: "Terance Mann", min: 12, pts: 2, reb: 0, ast: 2, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.43, zScores: { pts: -0.858, reb: -1.186, ast: -0.117, stl: 0.232, blk: 0.907, tpm: -0.761, fgImpact: 0.402, ftImpact: 0, to: 0.95 } },
          { name: "Keon Ellis", min: 21, pts: 6, reb: 2, ast: 1, stl: 0, blk: 2, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.66, zScores: { pts: -0.409, reb: -0.562, ast: -0.498, stl: -0.739, blk: 2.366, tpm: 0.494, fgImpact: -0.202, ftImpact: 0, to: 0.207 } },
          { name: "Drake Powell", min: 6, pts: 0, reb: 0, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.23, zScores: { pts: -1.082, reb: -1.186, ast: -0.117, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: 0, ftImpact: 0, to: 0.207 } },
          { name: "Mikel Brown Jr.", min: 23, pts: 10, reb: 0, ast: 4, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 9, ftm: 6, fta: 8, composite: -3.88, zScores: { pts: 0.039, reb: -1.186, ast: 0.643, stl: 0.232, blk: -0.552, tpm: -0.761, fgImpact: -1.543, ftImpact: -0.219, to: -0.537 } }
        ]
      }
    },
      {
      id: "401909280",
      line: "New York Knicks 93 @ Philadelphia 76ers 98 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NY", name: "New York Knicks", score: 93,
        players: [
          { name: "OG Anunoby", min: 34, pts: 9, reb: 4, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: -1.14, zScores: { pts: -0.073, reb: 0.061, ast: 0.263, stl: 0.232, blk: -0.552, tpm: -0.134, fgImpact: -0.404, ftImpact: 0, to: -0.537 } },
          { name: "Karl-Anthony Towns", min: 35, pts: 22, reb: 12, ast: 3, stl: 0, blk: 1, to: 2, tpm: 3, fgm: 8, fga: 15, ftm: 3, fta: 3, composite: 6.97, zScores: { pts: 1.385, reb: 2.554, ast: 0.263, stl: -0.739, blk: 0.907, tpm: 1.121, fgImpact: 0.867, ftImpact: 1.148, to: -0.537 } },
          { name: "Josh Hart", min: 31, pts: 7, reb: 6, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 9, ftm: 1, fta: 2, composite: -1.39, zScores: { pts: -0.297, reb: 0.684, ast: 0.263, stl: 0.232, blk: -0.552, tpm: 0.494, fgImpact: -1.543, ftImpact: -0.875, to: 0.207 } },
          { name: "Mikal Bridges", min: 30, pts: 12, reb: 5, ast: 2, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 3.85, zScores: { pts: 0.264, reb: 0.373, ast: -0.117, stl: 2.175, blk: -0.552, tpm: 0.494, fgImpact: 1.003, ftImpact: 0, to: 0.207 } },
          { name: "Jalen Brunson", min: 35, pts: 24, reb: 5, ast: 6, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 8, fga: 22, ftm: 5, fta: 6, composite: 3.8, zScores: { pts: 1.609, reb: 0.373, ast: 1.403, stl: 1.203, blk: -0.552, tpm: 1.121, fgImpact: -1.479, ftImpact: 0.656, to: -0.537 } },
          { name: "Andre Drummond", min: 12, pts: 3, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -3.14, zScores: { pts: -0.745, reb: 0.684, ast: -0.498, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.604, ftImpact: -0.875, to: 0.95 } },
          { name: "Jordan Clarkson", min: 9, pts: 4, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 1, composite: -3.27, zScores: { pts: -0.633, reb: -0.251, ast: -0.878, stl: -0.739, blk: 0.907, tpm: -0.761, fgImpact: 0.133, ftImpact: -1.258, to: 0.207 } },
          { name: "Landry Shamet", min: 16, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.77, zScores: { pts: -1.082, reb: -1.186, ast: -0.878, stl: 0.232, blk: -0.552, tpm: -0.761, fgImpact: -1.005, ftImpact: 0, to: -0.537 } },
          { name: "Miles McBride", min: 24, pts: 10, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: -0.29, zScores: { pts: 0.039, reb: -0.251, ast: -0.498, stl: -0.739, blk: -0.552, tpm: 0.494, fgImpact: 0.266, ftImpact: 0, to: 0.95 } },
          { name: "Tyler Kolek", min: 13, pts: 2, reb: 1, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.95, zScores: { pts: -0.858, reb: -0.874, ast: 0.643, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.269, ftImpact: 0, to: -0.537 } }
        ]
      },
      home: {
        abbr: "PHI", name: "Philadelphia 76ers", score: 98,
        players: [
          { name: "LeBron James", min: 34, pts: 20, reb: 9, ast: 8, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 8, fga: 15, ftm: 2, fta: 3, composite: 6.42, zScores: { pts: 1.161, reb: 1.619, ast: 2.164, stl: 0.232, blk: 0.907, tpm: 0.494, fgImpact: 0.867, ftImpact: -0.492, to: -0.537 } },
          { name: "Dean Wade", min: 27, pts: 0, reb: 2, ast: 1, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -0.33, zScores: { pts: -1.082, reb: -0.562, ast: -0.498, stl: 2.175, blk: -0.552, tpm: -0.761, fgImpact: 0, ftImpact: 0, to: 0.95 } },
          { name: "Joel Embiid", min: 33, pts: 10, reb: 7, ast: 7, stl: 1, blk: 1, to: 4, tpm: 0, fgm: 3, fga: 12, ftm: 4, fta: 4, composite: 0.89, zScores: { pts: 0.039, reb: 0.996, ast: 1.784, stl: 0.232, blk: 0.907, tpm: -0.761, fgImpact: -1.811, ftImpact: 1.531, to: -2.023 } },
          { name: "Tyrese Maxey", min: 38, pts: 27, reb: 4, ast: 4, stl: 1, blk: 1, to: 2, tpm: 3, fgm: 10, fga: 19, ftm: 4, fta: 7, composite: 3.13, zScores: { pts: 1.946, reb: 0.061, ast: 0.643, stl: 0.232, blk: 0.907, tpm: 1.121, fgImpact: 1, ftImpact: -2.242, to: -0.537 } },
          { name: "VJ Edgecombe", min: 36, pts: 13, reb: 8, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 0.67, zScores: { pts: 0.376, reb: 1.308, ast: -0.117, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: 1.069, ftImpact: 0, to: -0.537 } },
          { name: "Adem Bona", min: 14, pts: 0, reb: 2, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.65, zScores: { pts: -1.082, reb: -0.562, ast: -0.878, stl: -0.739, blk: 0.907, tpm: -0.761, fgImpact: 0, ftImpact: 0, to: -0.537 } },
          { name: "Kentavious Caldwell-Pope", min: 21, pts: 5, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.21, zScores: { pts: -0.521, reb: -0.251, ast: 0.263, stl: 0.232, blk: -0.552, tpm: -0.134, fgImpact: -0.202, ftImpact: 0, to: 0.95 } },
          { name: "Anfernee Simons", min: 31, pts: 21, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 7, fga: 11, ftm: 2, fta: 2, composite: 3.74, zScores: { pts: 1.273, reb: -0.562, ast: -0.498, stl: -0.739, blk: -0.552, tpm: 2.375, fgImpact: 1.471, ftImpact: 0.766, to: 0.207 } },
          { name: "Labaron Philon Jr.", min: 6, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.41, zScores: { pts: -0.858, reb: -0.562, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.269, ftImpact: 0, to: 0.207 } }
        ]
      }
    },
      {
      id: "401909281",
      line: "Orlando Magic 121 @ Toronto Raptors 114 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ORL", name: "Orlando Magic", score: 121,
        players: [
          { name: "Franz Wagner", min: 39, pts: 26, reb: 5, ast: 11, stl: 1, blk: 0, to: 4, tpm: 2, fgm: 8, fga: 18, ftm: 8, fta: 9, composite: 5.33, zScores: { pts: 1.833, reb: 0.373, ast: 3.304, stl: 0.232, blk: -0.552, tpm: 0.494, fgImpact: -0.138, ftImpact: 1.805, to: -2.023 } },
          { name: "Wendell Carter Jr.", min: 39, pts: 20, reb: 7, ast: 1, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 11, ftm: 7, fta: 8, composite: 3.8, zScores: { pts: 1.161, reb: 0.996, ast: -0.498, stl: 1.203, blk: -0.552, tpm: -0.134, fgImpact: 0.734, ftImpact: 1.422, to: -0.537 } },
          { name: "Desmond Bane", min: 39, pts: 28, reb: 2, ast: 6, stl: 0, blk: 1, to: 4, tpm: 6, fgm: 8, fga: 18, ftm: 6, fta: 6, composite: 6.2, zScores: { pts: 2.058, reb: -0.562, ast: 1.403, stl: -0.739, blk: 0.907, tpm: 3.003, fgImpact: -0.138, ftImpact: 2.297, to: -2.023 } },
          { name: "Anthony Black", min: 31, pts: 17, reb: 6, ast: 10, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 5, fga: 8, ftm: 4, fta: 6, composite: 5.95, zScores: { pts: 0.824, reb: 0.684, ast: 2.924, stl: -0.739, blk: 0.907, tpm: 1.121, fgImpact: 1.003, ftImpact: -0.984, to: 0.207 } },
          { name: "Jase Richardson", min: 33, pts: 4, reb: 6, ast: 2, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 1.29, zScores: { pts: -0.633, reb: 0.684, ast: -0.117, stl: 1.203, blk: 0.907, tpm: -0.761, fgImpact: -0.202, ftImpact: 0, to: 0.207 } },
          { name: "Jamal Cain", min: 15, pts: 13, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 5, ftm: 0, fta: 0, composite: 1.1, zScores: { pts: 0.376, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: 1.121, fgImpact: 2.008, ftImpact: 0, to: 0.95 } },
          { name: "Tristan da Silva", min: 23, pts: 8, reb: 0, ast: 0, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -0.84, zScores: { pts: -0.185, reb: -1.186, ast: -0.878, stl: -0.739, blk: 0.907, tpm: 0.494, fgImpact: 0.535, ftImpact: 0, to: 0.207 } },
          { name: "Nikola Vucevic", min: 6, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.57, zScores: { pts: -0.745, reb: -0.874, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: 0.402, ftImpact: 0, to: 0.95 } },
          { name: "Goga Bitadze", min: 6, pts: 2, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.59, zScores: { pts: -0.858, reb: 0.061, ast: -0.878, stl: -0.739, blk: 0.907, tpm: -0.761, fgImpact: -0.269, ftImpact: 0, to: 0.95 } },
          { name: "Alex Morales", min: 9, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.93, zScores: { pts: -1.082, reb: -0.874, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: 0, ftImpact: 0, to: 0.95 } }
        ]
      },
      home: {
        abbr: "TOR", name: "Toronto Raptors", score: 114,
        players: [
          { name: "RJ Barrett", min: 34, pts: 9, reb: 3, ast: 5, stl: 0, blk: 1, to: 5, tpm: 1, fgm: 3, fga: 10, ftm: 2, fta: 4, composite: -4.92, zScores: { pts: -0.073, reb: -0.251, ast: 1.023, stl: -0.739, blk: 0.907, tpm: -0.134, fgImpact: -1.141, ftImpact: -1.75, to: -2.767 } },
          { name: "Scottie Barnes", min: 39, pts: 41, reb: 5, ast: 5, stl: 2, blk: 0, to: 4, tpm: 1, fgm: 19, fga: 34, ftm: 2, fta: 3, composite: 5.52, zScores: { pts: 3.515, reb: 0.373, ast: 1.023, stl: 1.203, blk: -0.552, tpm: -0.134, fgImpact: 2.605, ftImpact: -0.492, to: -2.023 } },
          { name: "Jakob Poeltl", min: 23, pts: 12, reb: 11, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 10, ftm: 2, fta: 2, composite: 3.74, zScores: { pts: 0.264, reb: 2.242, ast: 0.263, stl: 0.232, blk: -0.552, tpm: -0.761, fgImpact: 0.333, ftImpact: 0.766, to: 0.95 } },
          { name: "Immanuel Quickley", min: 37, pts: 17, reb: 6, ast: 8, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 14, ftm: 1, fta: 2, composite: 3.93, zScores: { pts: 0.824, reb: 0.684, ast: 2.164, stl: -0.739, blk: -0.552, tpm: 1.748, fgImpact: -0.271, ftImpact: -0.875, to: 0.95 } },
          { name: "Ja'Kobe Walter", min: 32, pts: 9, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 1.47, zScores: { pts: -0.073, reb: -0.251, ast: -0.498, stl: 0.232, blk: -0.552, tpm: 1.121, fgImpact: 0.535, ftImpact: 0, to: 0.95 } },
          { name: "Trayce Jackson-Davis", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.082, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: 0, ftImpact: 0, to: 0.95 } },
          { name: "Jamison Battle", min: 19, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.29, zScores: { pts: -0.858, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.269, ftImpact: 0, to: 0.95 } },
          { name: "Collin Murray-Boyles", min: 23, pts: 15, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 10, ftm: 0, fta: 0, composite: 1.06, zScores: { pts: 0.6, reb: 0.373, ast: -0.498, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: 1.806, ftImpact: 0, to: 0.207 } },
          { name: "Allen Graves", min: 9, pts: 7, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: -0.02, zScores: { pts: -0.297, reb: 0.061, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: 0.803, ftImpact: 0.766, to: 0.95 } },
          { name: "Jamal Shead", min: 23, pts: 2, reb: 1, ast: 8, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: 0.78, zScores: { pts: -0.858, reb: -0.874, ast: 2.164, stl: 0.232, blk: 0.907, tpm: -0.761, fgImpact: -1.005, ftImpact: 0.766, to: 0.207 } }
        ]
      }
    },
      {
      id: "401909282",
      line: "Indiana Pacers 125 @ Miami Heat 145 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "IND", name: "Indiana Pacers", score: 125,
        players: [
          { name: "Pascal Siakam", min: 29, pts: 13, reb: 5, ast: 4, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 17, ftm: 3, fta: 5, composite: -3.38, zScores: { pts: 0.376, reb: 0.373, ast: 0.643, stl: 1.203, blk: -0.552, tpm: -0.761, fgImpact: -2.014, ftImpact: -1.367, to: -1.28 } },
          { name: "Jay Huff", min: 19, pts: 13, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 1.08, zScores: { pts: 0.376, reb: -0.874, ast: -0.878, stl: -0.739, blk: -0.552, tpm: 1.121, fgImpact: 1.673, ftImpact: 0, to: 0.95 } },
          { name: "Kelly Oubre Jr.", min: 22, pts: 10, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 7, ftm: 1, fta: 2, composite: -1.89, zScores: { pts: 0.039, reb: 0.061, ast: -0.498, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: 0.601, ftImpact: -0.875, to: 0.207 } },
          { name: "Andrew Nembhard", min: 30, pts: 22, reb: 2, ast: 9, stl: 0, blk: 0, to: 2, tpm: 5, fgm: 8, fga: 16, ftm: 1, fta: 1, composite: 4.83, zScores: { pts: 1.385, reb: -0.562, ast: 2.544, stl: -0.739, blk: -0.552, tpm: 2.375, fgImpact: 0.532, ftImpact: 0.383, to: -0.537 } },
          { name: "Aaron Nesmith", min: 21, pts: 9, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 4, fta: 4, composite: 0.01, zScores: { pts: -0.073, reb: -0.251, ast: -0.117, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: 0.133, ftImpact: 1.531, to: 0.207 } },
          { name: "Larry Nance Jr.", min: 18, pts: 6, reb: 2, ast: 1, stl: 4, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 4.16, zScores: { pts: -0.409, reb: -0.562, ast: -0.498, stl: 3.146, blk: 0.907, tpm: 0.494, fgImpact: 0.133, ftImpact: 0, to: 0.95 } },
          { name: "Jalen Slawson", min: 18, pts: 4, reb: 4, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 3, composite: -3.11, zScores: { pts: -0.633, reb: 0.061, ast: -0.498, stl: 0.232, blk: -0.552, tpm: -0.761, fgImpact: 0.067, ftImpact: -0.492, to: -0.537 } },
          { name: "Jarace Walker", min: 28, pts: 14, reb: 6, ast: 4, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 11, ftm: 1, fta: 2, composite: 1.2, zScores: { pts: 0.488, reb: 0.684, ast: 0.643, stl: 0.232, blk: -0.552, tpm: 1.121, fgImpact: -0.003, ftImpact: -0.875, to: -0.537 } },
          { name: "Kobe Brown", min: 20, pts: 9, reb: 6, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 3, fta: 4, composite: -1.17, zScores: { pts: -0.073, reb: 0.684, ast: 0.643, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.471, ftImpact: -0.109, to: 0.207 } },
          { name: "Quenton Jackson", min: 24, pts: 24, reb: 4, ast: 1, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 9, fga: 13, ftm: 4, fta: 4, composite: 6.33, zScores: { pts: 1.609, reb: 0.061, ast: -0.498, stl: 1.203, blk: -0.552, tpm: 0.494, fgImpact: 2.274, ftImpact: 1.531, to: 0.207 } },
          { name: "Braden Smith", min: 12, pts: 1, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 1, fta: 2, composite: -4.66, zScores: { pts: -0.97, reb: -1.186, ast: -0.498, stl: 0.232, blk: -0.552, tpm: -0.761, fgImpact: -1.005, ftImpact: -0.875, to: 0.95 } }
        ]
      },
      home: {
        abbr: "MIA", name: "Miami Heat", score: 145,
        players: [
          { name: "Giannis Antetokounmpo", min: 31, pts: 31, reb: 18, ast: 10, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 13, fga: 19, ftm: 4, fta: 6, composite: 12.21, zScores: { pts: 2.394, reb: 4.424, ast: 2.924, stl: -0.739, blk: 0.907, tpm: -0.134, fgImpact: 3.211, ftImpact: -0.984, to: 0.207 } },
          { name: "Andrew Wiggins", min: 30, pts: 12, reb: 2, ast: 1, stl: 2, blk: 1, to: 2, tpm: 2, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 1.94, zScores: { pts: 0.264, reb: -0.562, ast: -0.498, stl: 1.203, blk: 0.907, tpm: 0.494, fgImpact: 0.668, ftImpact: 0, to: -0.537 } },
          { name: "Bam Adebayo", min: 33, pts: 27, reb: 9, ast: 3, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 11, fga: 14, ftm: 5, fta: 5, composite: 9.48, zScores: { pts: 1.946, reb: 1.619, ast: 0.263, stl: 2.175, blk: -0.552, tpm: -0.761, fgImpact: 3.413, ftImpact: 1.914, to: -0.537 } },
          { name: "Klay Thompson", min: 26, pts: 25, reb: 0, ast: 3, stl: 0, blk: 0, to: 2, tpm: 7, fgm: 9, fga: 14, ftm: 0, fta: 0, composite: 4.54, zScores: { pts: 1.721, reb: -1.186, ast: 0.263, stl: -0.739, blk: -0.552, tpm: 3.63, fgImpact: 1.939, ftImpact: 0, to: -0.537 } },
          { name: "Davion Mitchell", min: 35, pts: 15, reb: 6, ast: 11, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 6, fga: 16, ftm: 0, fta: 0, composite: 3.17, zScores: { pts: 0.6, reb: 0.684, ast: 3.304, stl: 0.232, blk: -0.552, tpm: 1.121, fgImpact: -0.942, ftImpact: 0, to: -1.28 } },
          { name: "Bobby Portis", min: 17, pts: 8, reb: 3, ast: 1, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -0.2, zScores: { pts: -0.185, reb: -0.251, ast: -0.498, stl: -0.739, blk: 0.907, tpm: 0.494, fgImpact: -0.136, ftImpact: 0, to: 0.207 } },
          { name: "Simone Fontecchio", min: 2, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.9, zScores: { pts: -0.745, reb: -0.874, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: 0.067, ftImpact: 0, to: 0.95 } },
          { name: "Myron Gardner", min: 2, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.3, zScores: { pts: -1.082, reb: -0.874, ast: -0.498, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: 0, ftImpact: 0, to: 0.207 } },
          { name: "Nikola Jovic", min: 16, pts: 0, reb: 4, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -1.89, zScores: { pts: -1.082, reb: 0.061, ast: 0.263, stl: 0.232, blk: -0.552, tpm: -0.761, fgImpact: -1.005, ftImpact: 0, to: 0.95 } },
          { name: "Nick Richards", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.99, zScores: { pts: -1.082, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: 0, ftImpact: 0, to: 0.207 } },
          { name: "Tim Hardaway Jr.", min: 12, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -3.24, zScores: { pts: -0.858, reb: -0.874, ast: -0.498, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.67, ftImpact: 0.766, to: 0.95 } },
          { name: "Dru Smith", min: 4, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.35, zScores: { pts: -1.082, reb: -1.186, ast: -0.498, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: 0, ftImpact: 0, to: -0.537 } },
          { name: "Pelle Larsson", min: 24, pts: 18, reb: 3, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 5, ftm: 7, fta: 8, composite: 3.16, zScores: { pts: 0.936, reb: -0.251, ast: 0.263, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: 2.008, ftImpact: 1.422, to: 0.207 } },
          { name: "Ryan Conwell", min: 7, pts: 4, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -3.01, zScores: { pts: -0.633, reb: -1.186, ast: -0.878, stl: 0.232, blk: -0.552, tpm: -0.134, fgImpact: 0.067, ftImpact: -0.875, to: 0.95 } }
        ]
      }
    },
      {
      id: "401909283",
      line: "Houston Rockets 111 @ Dallas Mavericks 116 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "HOU", name: "Houston Rockets", score: 111,
        players: [
          { name: "Kevin Durant", min: 37, pts: 28, reb: 5, ast: 1, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 9, fga: 20, ftm: 9, fta: 13, composite: -2.43, zScores: { pts: 2.058, reb: 0.373, ast: -0.498, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: -0.072, ftImpact: -1.586, to: -1.28 } },
          { name: "Jabari Smith Jr.", min: 35, pts: 22, reb: 3, ast: 2, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 7, fga: 15, ftm: 5, fta: 5, composite: 2.58, zScores: { pts: 1.385, reb: -0.251, ast: -0.117, stl: 0.232, blk: -0.552, tpm: 1.121, fgImpact: 0.13, ftImpact: 1.914, to: -1.28 } },
          { name: "Clint Capela", min: 30, pts: 5, reb: 11, ast: 5, stl: 2, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 1, fta: 2, composite: 5.09, zScores: { pts: -0.521, reb: 2.242, ast: 1.023, stl: 1.203, blk: 2.366, tpm: -0.761, fgImpact: -0.537, ftImpact: -0.875, to: 0.95 } },
          { name: "Fred VanVleet", min: 33, pts: 16, reb: 5, ast: 6, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 17, ftm: 1, fta: 2, composite: 2.09, zScores: { pts: 0.712, reb: 0.373, ast: 1.403, stl: 0.232, blk: -0.552, tpm: 1.121, fgImpact: -1.277, ftImpact: -0.875, to: 0.95 } },
          { name: "Amen Thompson", min: 39, pts: 15, reb: 3, ast: 6, stl: 4, blk: 0, to: 0, tpm: 0, fgm: 7, fga: 15, ftm: 1, fta: 4, composite: 1.28, zScores: { pts: 0.6, reb: -0.251, ast: 1.403, stl: 3.146, blk: -0.552, tpm: -0.761, fgImpact: 0.13, ftImpact: -3.39, to: 0.95 } },
          { name: "Tari Eason", min: 26, pts: 11, reb: 13, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 12, ftm: 3, fta: 3, composite: 2.84, zScores: { pts: 0.152, reb: 2.866, ast: -0.117, stl: 0.232, blk: -0.552, tpm: -0.761, fgImpact: -1.075, ftImpact: 1.148, to: 0.95 } },
          { name: "Oscar Tshiebwe", min: 11, pts: 0, reb: 5, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.05, zScores: { pts: -1.082, reb: 0.373, ast: -0.878, stl: -0.739, blk: 0.907, tpm: -0.761, fgImpact: -0.335, ftImpact: 0, to: -0.537 } },
          { name: "Marcus Smart", min: 17, pts: 8, reb: 2, ast: 4, stl: 3, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 0.41, zScores: { pts: -0.185, reb: -0.562, ast: 0.643, stl: 2.175, blk: -0.552, tpm: -0.761, fgImpact: 0.936, ftImpact: 0, to: -1.28 } },
          { name: "Bogdan Bogdanovic", min: 11, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 4, fta: 4, composite: -3.08, zScores: { pts: -0.409, reb: -0.874, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.604, ftImpact: 1.531, to: 0.207 } }
        ]
      },
      home: {
        abbr: "DAL", name: "Dallas Mavericks", score: 116,
        players: [
          { name: "Daniel Gafford", min: 29, pts: 18, reb: 7, ast: 2, stl: 0, blk: 2, to: 3, tpm: 0, fgm: 6, fga: 7, ftm: 6, fta: 9, composite: 2, zScores: { pts: 0.936, reb: 0.996, ast: -0.117, stl: -0.739, blk: 2.366, tpm: -0.761, fgImpact: 2.075, ftImpact: -1.476, to: -1.28 } },
          { name: "P.J. Washington", min: 34, pts: 3, reb: 10, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 8, ftm: 0, fta: 0, composite: -2.47, zScores: { pts: -0.745, reb: 1.931, ast: -0.498, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: -1.944, ftImpact: 0, to: 0.207 } },
          { name: "Cooper Flagg", min: 39, pts: 33, reb: 9, ast: 6, stl: 2, blk: 1, to: 3, tpm: 0, fgm: 13, fga: 19, ftm: 7, fta: 10, composite: 7.83, zScores: { pts: 2.618, reb: 1.619, ast: 1.403, stl: 1.203, blk: 0.907, tpm: -0.761, fgImpact: 3.211, ftImpact: -1.094, to: -1.28 } },
          { name: "Kyrie Irving", min: 35, pts: 35, reb: 4, ast: 9, stl: 0, blk: 0, to: 2, tpm: 5, fgm: 12, fga: 19, ftm: 6, fta: 6, composite: 10.77, zScores: { pts: 2.843, reb: 0.061, ast: 2.544, stl: -0.739, blk: -0.552, tpm: 2.375, fgImpact: 2.474, ftImpact: 2.297, to: -0.537 } },
          { name: "Max Christie", min: 18, pts: 2, reb: 1, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.12, zScores: { pts: -0.858, reb: -0.874, ast: -0.878, stl: 1.203, blk: -0.552, tpm: -0.761, fgImpact: -0.604, ftImpact: 0, to: 0.207 } },
          { name: "Caleb Martin", min: 25, pts: 8, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -1.56, zScores: { pts: -0.185, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: 0.494, fgImpact: 0.535, ftImpact: 0, to: 0.95 } },
          { name: "Morez Johnson Jr.", min: 17, pts: 2, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.39, zScores: { pts: -0.858, reb: -0.562, ast: -0.498, stl: 0.232, blk: -0.552, tpm: -0.761, fgImpact: -0.604, ftImpact: 0, to: 0.207 } },
          { name: "Zaccharie Risacher", min: 28, pts: 12, reb: 6, ast: 3, stl: 3, blk: 1, to: 2, tpm: 3, fgm: 4, fga: 9, ftm: 1, fta: 2, composite: 3.93, zScores: { pts: 0.264, reb: 0.684, ast: 0.263, stl: 2.175, blk: 0.907, tpm: 1.121, fgImpact: -0.069, ftImpact: -0.875, to: -0.537 } },
          { name: "Marcus Sasser", min: 7, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.28, zScores: { pts: -1.082, reb: -1.186, ast: -0.498, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.67, ftImpact: 0, to: 0.207 } },
          { name: "Walter Clayton Jr.", min: 9, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -5.11, zScores: { pts: -0.745, reb: -0.562, ast: -0.498, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: -0.604, ftImpact: 0, to: -1.28 } }
        ]
      }
    },
      {
      id: "401909284",
      line: "LA Clippers 101 @ Minnesota Timberwolves 127 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LAC", name: "LA Clippers", score: 101,
        players: [
          { name: "Derrick Jones Jr.", min: 26, pts: 10, reb: 1, ast: 1, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 0.81, zScores: { pts: 0.039, reb: -0.874, ast: -0.498, stl: -0.739, blk: 0.907, tpm: 0.494, fgImpact: 1.272, ftImpact: 0, to: 0.207 } },
          { name: "Rui Hachimura", min: 26, pts: 12, reb: 5, ast: 0, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 11, ftm: 2, fta: 3, composite: -0.86, zScores: { pts: 0.264, reb: 0.373, ast: -0.878, stl: 1.203, blk: -0.552, tpm: 0.494, fgImpact: -0.739, ftImpact: -0.492, to: -0.537 } },
          { name: "Isaiah Jackson", min: 22, pts: 10, reb: 7, ast: 4, stl: 3, blk: 4, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 4, fta: 4, composite: 10.31, zScores: { pts: 0.039, reb: 0.996, ast: 0.643, stl: 2.175, blk: 5.283, tpm: -0.761, fgImpact: 0.2, ftImpact: 1.531, to: 0.207 } },
          { name: "Kris Dunn", min: 31, pts: 5, reb: 5, ast: 7, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 3, fta: 4, composite: -0.92, zScores: { pts: -0.521, reb: 0.373, ast: 1.784, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.604, ftImpact: -0.109, to: 0.207 } },
          { name: "Darius Garland", min: 31, pts: 24, reb: 2, ast: 5, stl: 1, blk: 0, to: 5, tpm: 4, fgm: 10, fga: 22, ftm: 0, fta: 0, composite: 0.73, zScores: { pts: 1.609, reb: -0.562, ast: 1.023, stl: 0.232, blk: -0.552, tpm: 1.748, fgImpact: -0.005, ftImpact: 0, to: -2.767 } },
          { name: "Baba Miller", min: 5, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.96, zScores: { pts: -1.082, reb: -0.874, ast: -0.878, stl: 0.232, blk: -0.552, tpm: -0.761, fgImpact: 0, ftImpact: 0, to: 0.95 } },
          { name: "Nick Martinelli", min: 5, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -4.2, zScores: { pts: -0.745, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: 0.067, ftImpact: 0.383, to: 0.207 } },
          { name: "Brook Lopez", min: 21, pts: 13, reb: 6, ast: 0, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 5, fga: 10, ftm: 2, fta: 2, composite: 0.78, zScores: { pts: 0.376, reb: 0.684, ast: -0.878, stl: -0.739, blk: 0.907, tpm: -0.134, fgImpact: 0.333, ftImpact: 0.766, to: -0.537 } },
          { name: "Blake Wesley", min: 5, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -4.34, zScores: { pts: -1.082, reb: 0.061, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -1.341, ftImpact: 0, to: 0.95 } },
          { name: "Kobe Sanders", min: 24, pts: 7, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 0.04, zScores: { pts: -0.297, reb: 0.061, ast: -0.117, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: 0.87, ftImpact: 0, to: 0.95 } },
          { name: "Cam Christie", min: 5, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -5.42, zScores: { pts: -0.858, reb: -0.874, ast: -0.498, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.604, ftImpact: 0, to: -0.537 } },
          { name: "Gradey Dick", min: 12, pts: 3, reb: 0, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.38, zScores: { pts: -0.745, reb: -1.186, ast: -0.498, stl: -0.739, blk: 0.907, tpm: -0.134, fgImpact: 0.067, ftImpact: 0, to: 0.95 } },
          { name: "Keaton Wagler", min: 25, pts: 12, reb: 6, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 11, ftm: 7, fta: 8, composite: -1.54, zScores: { pts: 0.264, reb: 0.684, ast: 0.263, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: -2.213, ftImpact: 1.422, to: -0.537 } }
        ]
      },
      home: {
        abbr: "MIN", name: "Minnesota Timberwolves", score: 127,
        players: [
          { name: "Jaden McDaniels", min: 33, pts: 23, reb: 6, ast: 7, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 11, fga: 15, ftm: 0, fta: 0, composite: 7.51, zScores: { pts: 1.497, reb: 0.684, ast: 1.784, stl: 0.232, blk: 0.907, tpm: -0.134, fgImpact: 3.078, ftImpact: 0, to: -0.537 } },
          { name: "Jonathan Kuminga", min: 22, pts: 5, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.57, zScores: { pts: -0.521, reb: -0.874, ast: -0.878, stl: -0.739, blk: 0.907, tpm: -0.134, fgImpact: -0.537, ftImpact: 0, to: 0.207 } },
          { name: "Rudy Gobert", min: 30, pts: 9, reb: 13, ast: 4, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 1, fta: 3, composite: 2.49, zScores: { pts: -0.073, reb: 2.866, ast: 0.643, stl: 0.232, blk: 0.907, tpm: -0.761, fgImpact: 0.601, ftImpact: -2.133, to: 0.207 } },
          { name: "Ayo Dosunmu", min: 30, pts: 15, reb: 7, ast: 2, stl: 0, blk: 1, to: 3, tpm: 3, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 2.22, zScores: { pts: 0.6, reb: 0.996, ast: -0.117, stl: -0.739, blk: 0.907, tpm: 1.121, fgImpact: 0.734, ftImpact: 0, to: -1.28 } },
          { name: "LaMelo Ball", min: 29, pts: 24, reb: 4, ast: 7, stl: 2, blk: 0, to: 2, tpm: 6, fgm: 9, fga: 20, ftm: 0, fta: 0, composite: 6.5, zScores: { pts: 1.609, reb: 0.061, ast: 1.784, stl: 1.203, blk: -0.552, tpm: 3.003, fgImpact: -0.072, ftImpact: 0, to: -0.537 } },
          { name: "Trey Lyles", min: 17, pts: 10, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 1, fta: 2, composite: -1.21, zScores: { pts: 0.039, reb: 0.373, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: 0.601, ftImpact: -0.875, to: 0.95 } },
          { name: "Cody Williams", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.082, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: 0, ftImpact: 0, to: 0.95 } },
          { name: "Isaiah Evans", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -1.082, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.335, ftImpact: 0, to: 0.95 } },
          { name: "Joan Beringer", min: 18, pts: 4, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -0.6, zScores: { pts: -0.633, reb: 0.061, ast: -0.878, stl: -0.739, blk: 0.907, tpm: -0.761, fgImpact: -0.269, ftImpact: 0.766, to: 0.95 } },
          { name: "Jaylen Clark", min: 17, pts: 5, reb: 0, ast: 2, stl: 2, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.83, zScores: { pts: -0.521, reb: -1.186, ast: -0.117, stl: 1.203, blk: 0.907, tpm: -0.134, fgImpact: 0.468, ftImpact: 0, to: 0.207 } },
          { name: "Terrence Shannon Jr.", min: 20, pts: 11, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 3, fta: 4, composite: 0.03, zScores: { pts: 0.152, reb: -0.251, ast: -0.117, stl: -0.739, blk: -0.552, tpm: 0.494, fgImpact: 0.2, ftImpact: -0.109, to: 0.95 } },
          { name: "Bones Hyland", min: 20, pts: 19, reb: 0, ast: 8, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 8, fga: 16, ftm: 0, fta: 0, composite: 3.57, zScores: { pts: 1.049, reb: -1.186, ast: 2.164, stl: 0.232, blk: -0.552, tpm: 1.121, fgImpact: 0.532, ftImpact: 0, to: 0.207 } },
          { name: "Zyon Pullin", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.62, zScores: { pts: -0.858, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: 0.402, ftImpact: 0, to: 0.95 } }
        ]
      }
    },
      {
      id: "401909285",
      line: "Los Angeles Lakers 95 @ Golden State Warriors 112 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LAL", name: "Los Angeles Lakers", score: 95,
        players: [
          { name: "Jake LaRavia", min: 28, pts: 10, reb: 2, ast: 0, stl: 1, blk: 1, to: 3, tpm: 2, fgm: 3, fga: 7, ftm: 2, fta: 4, composite: -2.93, zScores: { pts: 0.039, reb: -0.562, ast: -0.878, stl: 0.232, blk: 0.907, tpm: 0.494, fgImpact: -0.136, ftImpact: -1.75, to: -1.28 } },
          { name: "Walker Kessler", min: 31, pts: 10, reb: 13, ast: 2, stl: 0, blk: 5, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 2, fta: 3, composite: 8.35, zScores: { pts: 0.039, reb: 2.866, ast: -0.117, stl: -0.739, blk: 6.742, tpm: -0.761, fgImpact: 0.601, ftImpact: -0.492, to: 0.207 } },
          { name: "Matisse Thybulle", min: 28, pts: 10, reb: 3, ast: 0, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 5, fta: 5, composite: 1.98, zScores: { pts: 0.039, reb: -0.251, ast: -0.878, stl: 2.175, blk: -0.552, tpm: -0.134, fgImpact: -0.537, ftImpact: 1.914, to: 0.207 } },
          { name: "Luka Doncic", min: 37, pts: 37, reb: 7, ast: 5, stl: 1, blk: 2, to: 3, tpm: 6, fgm: 12, fga: 27, ftm: 7, fta: 8, composite: 10.62, zScores: { pts: 3.067, reb: 0.996, ast: 1.023, stl: 0.232, blk: 2.366, tpm: 3.003, fgImpact: -0.207, ftImpact: 1.422, to: -1.28 } },
          { name: "Austin Reaves", min: 37, pts: 21, reb: 4, ast: 5, stl: 1, blk: 1, to: 8, tpm: 1, fgm: 9, fga: 19, ftm: 2, fta: 2, composite: -0.61, zScores: { pts: 1.273, reb: 0.061, ast: 1.023, stl: 0.232, blk: 0.907, tpm: -0.134, fgImpact: 0.264, ftImpact: 0.766, to: -4.997 } },
          { name: "Jarred Vanderbilt", min: 13, pts: 0, reb: 3, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.91, zScores: { pts: -1.082, reb: -0.251, ast: 0.263, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: 0, ftImpact: 0, to: 0.207 } },
          { name: "Sandro Mamukelashvili", min: 20, pts: 4, reb: 7, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -0.47, zScores: { pts: -0.633, reb: 0.996, ast: -0.878, stl: 0.232, blk: 0.907, tpm: -0.761, fgImpact: -0.537, ftImpact: 0, to: 0.207 } },
          { name: "Collin Sexton", min: 16, pts: 0, reb: 2, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 6, ftm: 0, fta: 0, composite: -3.57, zScores: { pts: -1.082, reb: -0.562, ast: -0.498, stl: 0.232, blk: 0.907, tpm: -0.761, fgImpact: -2.011, ftImpact: 0, to: 0.207 } },
          { name: "Quentin Grimes", min: 26, pts: 3, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 2, composite: -5.11, zScores: { pts: -0.745, reb: -0.251, ast: -0.117, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: -0.269, ftImpact: -2.515, to: 0.207 } },
          { name: "Bronny James", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -1.082, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.335, ftImpact: 0, to: 0.95 } },
          { name: "Chris Manon", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.082, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: 0, ftImpact: 0, to: 0.95 } },
          { name: "Jaden Hardy", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.93, zScores: { pts: -1.082, reb: -0.874, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: 0, ftImpact: 0, to: 0.95 } }
        ]
      },
      home: {
        abbr: "GS", name: "Golden State Warriors", score: 112,
        players: [
          { name: "Draymond Green", min: 32, pts: 2, reb: 4, ast: 9, stl: 3, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 4.01, zScores: { pts: -0.858, reb: 0.061, ast: 2.544, stl: 2.175, blk: 0.907, tpm: -0.761, fgImpact: -0.269, ftImpact: 0, to: 0.207 } },
          { name: "Gui Santos", min: 16, pts: 2, reb: 5, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.17, zScores: { pts: -0.858, reb: 0.373, ast: -0.498, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.604, ftImpact: 0, to: -0.537 } },
          { name: "Yaxel Lendeborg", min: 24, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 5, tpm: 1, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: -6.76, zScores: { pts: -0.409, reb: -0.874, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: 0.468, ftImpact: -0.875, to: -2.767 } },
          { name: "Stephen Curry", min: 31, pts: 31, reb: 4, ast: 6, stl: 1, blk: 1, to: 2, tpm: 8, fgm: 11, fga: 23, ftm: 1, fta: 1, composite: 9.5, zScores: { pts: 2.394, reb: 0.061, ast: 1.403, stl: 0.232, blk: 0.907, tpm: 4.257, fgImpact: 0.397, ftImpact: 0.383, to: -0.537 } },
          { name: "Brandin Podziemski", min: 33, pts: 21, reb: 5, ast: 6, stl: 2, blk: 1, to: 1, tpm: 4, fgm: 7, fga: 15, ftm: 3, fta: 5, composite: 5.88, zScores: { pts: 1.273, reb: 0.373, ast: 1.403, stl: 1.203, blk: 0.907, tpm: 1.748, fgImpact: 0.13, ftImpact: -1.367, to: 0.207 } },
          { name: "Georges Niang", min: 19, pts: 11, reb: 5, ast: 1, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 2.79, zScores: { pts: 0.152, reb: 0.373, ast: -0.498, stl: -0.739, blk: 0.907, tpm: 1.121, fgImpact: 1.272, ftImpact: 0, to: 0.207 } },
          { name: "Al Horford", min: 17, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -4.68, zScores: { pts: -0.745, reb: -0.562, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: -1.274, ftImpact: 0, to: 0.207 } },
          { name: "Charles Bassey", min: 9, pts: 6, reb: 4, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -0.33, zScores: { pts: -0.409, reb: 0.061, ast: -0.498, stl: -0.739, blk: 0.907, tpm: -0.761, fgImpact: 0.133, ftImpact: 0.766, to: 0.207 } },
          { name: "Gary Payton II", min: 8, pts: 2, reb: 4, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.77, zScores: { pts: -0.858, reb: 0.061, ast: -0.878, stl: 1.203, blk: -0.552, tpm: -0.761, fgImpact: -0.939, ftImpact: 0, to: 0.95 } },
          { name: "De'Anthony Melton", min: 21, pts: 16, reb: 5, ast: 3, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 10, ftm: 2, fta: 2, composite: 5.05, zScores: { pts: 0.712, reb: 0.373, ast: 0.263, stl: 1.203, blk: -0.552, tpm: 1.748, fgImpact: 0.333, ftImpact: 0.766, to: 0.207 } },
          { name: "Brandon Williams", min: 17, pts: 9, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 8, ftm: 5, fta: 5, composite: -0.56, zScores: { pts: -0.073, reb: -0.562, ast: -0.498, stl: 0.232, blk: -0.552, tpm: -0.761, fgImpact: -1.208, ftImpact: 1.914, to: 0.95 } },
          { name: "Will Richard", min: 13, pts: 3, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.86, zScores: { pts: -0.745, reb: -0.251, ast: -0.117, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: -0.269, ftImpact: 0, to: 0.95 } }
        ]
      }
    },
      {
      id: "401909286",
      line: "Denver Nuggets 127 @ Phoenix Suns 120 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DEN", name: "Denver Nuggets", score: 127,
        players: [
          { name: "Aaron Gordon", min: 29, pts: 15, reb: 4, ast: 5, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 9, ftm: 5, fta: 5, composite: 1.45, zScores: { pts: 0.6, reb: 0.061, ast: 1.023, stl: -0.739, blk: -0.552, tpm: 0.494, fgImpact: -0.069, ftImpact: 1.914, to: -1.28 } },
          { name: "Cameron Johnson", min: 34, pts: 12, reb: 9, ast: 3, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 13, ftm: 0, fta: 2, composite: -1.4, zScores: { pts: 0.264, reb: 1.619, ast: 0.263, stl: 0.232, blk: -0.552, tpm: 0.494, fgImpact: -0.673, ftImpact: -2.515, to: -0.537 } },
          { name: "Nikola Jokic", min: 37, pts: 18, reb: 7, ast: 10, stl: 3, blk: 0, to: 5, tpm: 0, fgm: 8, fga: 13, ftm: 2, fta: 2, composite: 5.26, zScores: { pts: 0.936, reb: 0.996, ast: 2.924, stl: 2.175, blk: -0.552, tpm: -0.761, fgImpact: 1.538, ftImpact: 0.766, to: -2.767 } },
          { name: "Jamal Murray", min: 37, pts: 39, reb: 8, ast: 5, stl: 1, blk: 1, to: 5, tpm: 7, fgm: 10, fga: 18, ftm: 12, fta: 15, composite: 9.78, zScores: { pts: 3.291, reb: 1.308, ast: 1.023, stl: 0.232, blk: 0.907, tpm: 3.63, fgImpact: 1.336, ftImpact: 0.82, to: -2.767 } },
          { name: "Christian Braun", min: 37, pts: 31, reb: 3, ast: 1, stl: 3, blk: 0, to: 1, tpm: 7, fgm: 11, fga: 16, ftm: 2, fta: 2, composite: 10.61, zScores: { pts: 2.394, reb: -0.251, ast: -0.498, stl: 2.175, blk: -0.552, tpm: 3.63, fgImpact: 2.743, ftImpact: 0.766, to: 0.207 } },
          { name: "Marvin Bagley III", min: 11, pts: 0, reb: 5, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.23, zScores: { pts: -1.082, reb: 0.373, ast: -0.878, stl: -0.739, blk: 0.907, tpm: -0.761, fgImpact: 0, ftImpact: 0, to: 0.95 } },
          { name: "Trevon Brazile", min: 19, pts: 6, reb: 3, ast: 1, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: 0.39, zScores: { pts: -0.409, reb: -0.251, ast: -0.498, stl: 0.232, blk: 0.907, tpm: -0.134, fgImpact: 0.468, ftImpact: -0.875, to: 0.95 } },
          { name: "DeMar DeRozan", min: 24, pts: 3, reb: 1, ast: 5, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: -2.31, zScores: { pts: -0.745, reb: -0.874, ast: 1.023, stl: 1.203, blk: -0.552, tpm: -0.761, fgImpact: -0.939, ftImpact: -0.875, to: 0.207 } },
          { name: "Tyus Jones", min: 11, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.29, zScores: { pts: -0.745, reb: -1.186, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: -0.269, ftImpact: 0, to: 0.207 } }
        ]
      },
      home: {
        abbr: "PHX", name: "Phoenix Suns", score: 120,
        players: [
          { name: "Dillon Brooks", min: 21, pts: 22, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 9, fga: 12, ftm: 0, fta: 0, composite: 4.64, zScores: { pts: 1.385, reb: -0.874, ast: -0.117, stl: 0.232, blk: -0.552, tpm: 1.748, fgImpact: 2.61, ftImpact: 0, to: 0.207 } },
          { name: "Miles Bridges", min: 37, pts: 24, reb: 10, ast: 2, stl: 1, blk: 3, to: 0, tpm: 2, fgm: 10, fga: 19, ftm: 2, fta: 2, composite: 10.69, zScores: { pts: 1.609, reb: 1.931, ast: -0.117, stl: 0.232, blk: 3.824, tpm: 0.494, fgImpact: 1, ftImpact: 0.766, to: 0.95 } },
          { name: "Khaman Maluach", min: 17, pts: 9, reb: 6, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 6, ftm: 1, fta: 1, composite: -1.54, zScores: { pts: -0.073, reb: 0.684, ast: -0.878, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: 0.936, ftImpact: 0.383, to: -0.537 } },
          { name: "Devin Booker", min: 39, pts: 20, reb: 2, ast: 5, stl: 2, blk: 0, to: 4, tpm: 3, fgm: 7, fga: 19, ftm: 3, fta: 4, composite: 0.05, zScores: { pts: 1.161, reb: -0.562, ast: 1.023, stl: 1.203, blk: -0.552, tpm: 1.121, fgImpact: -1.21, ftImpact: -0.109, to: -2.023 } },
          { name: "Jalen Green", min: 25, pts: 2, reb: 2, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -5.4, zScores: { pts: -0.858, reb: -0.562, ast: -0.117, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -1.274, ftImpact: 0, to: -0.537 } },
          { name: "Oso Ighodaro", min: 21, pts: 2, reb: 9, ast: 5, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.56, zScores: { pts: -0.858, reb: 1.619, ast: 1.023, stl: -0.739, blk: -0.552, tpm: -0.761, fgImpact: -0.269, ftImpact: 0, to: -2.023 } },
          { name: "Ryan Dunn", min: 11, pts: 5, reb: 3, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.15, zScores: { pts: -0.521, reb: -0.251, ast: -0.498, stl: -0.739, blk: 0.907, tpm: -0.134, fgImpact: 0.133, ftImpact: 0, to: 0.95 } },
          { name: "Luke Kennard", min: 12, pts: 9, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 4, fta: 4, composite: 0.13, zScores: { pts: -0.073, reb: -0.874, ast: -0.117, stl: -0.739, blk: -0.552, tpm: -0.134, fgImpact: 0.133, ftImpact: 1.531, to: 0.95 } },
          { name: "Jordan Goodwin", min: 25, pts: 11, reb: 5, ast: 5, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 3.87, zScores: { pts: 0.152, reb: 0.373, ast: 1.023, stl: 1.203, blk: -0.552, tpm: 1.121, fgImpact: -0.404, ftImpact: 0, to: 0.95 } },
          { name: "Collin Gillespie", min: 33, pts: 16, reb: 3, ast: 10, stl: 4, blk: 1, to: 2, tpm: 4, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 9.38, zScores: { pts: 0.712, reb: -0.251, ast: 2.924, stl: 3.146, blk: 0.907, tpm: 1.748, fgImpact: 0.734, ftImpact: 0, to: -0.537 } }
        ]
      }
    }
    ]
  },
    "2026-10-31": {
    games: [
      {
      id: "401909896",
      line: "Portland Trail Blazers 112 @ Utah Jazz 90 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "POR", name: "Portland Trail Blazers", score: 112,
        players: [
          { name: "Toumani Camara", min: 31, pts: 14, reb: 4, ast: 0, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 3.1, zScores: { pts: 0.509, reb: 0.105, ast: -1.021, stl: 1.381, blk: -0.513, tpm: 1.827, fgImpact: -0.079, ftImpact: 0.66, to: 0.228 } },
          { name: "Deni Avdija", min: 30, pts: 24, reb: 5, ast: 2, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 6, fga: 12, ftm: 10, fta: 13, composite: 0.56, zScores: { pts: 1.71, reb: 0.458, ast: -0.118, stl: 0.264, blk: -0.513, tpm: 0.548, fgImpact: 0.377, ftImpact: -0.896, to: -1.268 } },
          { name: "Donovan Clingan", min: 15, pts: 4, reb: 9, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: 0.64, zScores: { pts: -0.692, reb: 1.869, ast: -1.021, stl: -0.853, blk: 0.701, tpm: -0.731, fgImpact: -0.267, ftImpact: 0.66, to: 0.975 } },
          { name: "Damian Lillard", min: 27, pts: 22, reb: 5, ast: 4, stl: 2, blk: 1, to: 5, tpm: 3, fgm: 6, fga: 17, ftm: 7, fta: 8, composite: 2.86, zScores: { pts: 1.47, reb: 0.458, ast: 0.786, stl: 1.381, blk: 0.701, tpm: 1.188, fgImpact: -1.273, ftImpact: 0.911, to: -2.763 } },
          { name: "Scoot Henderson", min: 31, pts: 14, reb: 3, ast: 1, stl: 3, blk: 0, to: 4, tpm: 1, fgm: 4, fga: 11, ftm: 5, fta: 6, composite: -0.92, zScores: { pts: 0.509, reb: -0.248, ast: -0.57, stl: 2.498, blk: -0.513, tpm: -0.091, fgImpact: -0.739, ftImpact: 0.251, to: -2.015 } },
          { name: "Robert Williams III", min: 14, pts: 3, reb: 3, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -2.17, zScores: { pts: -0.812, reb: -0.248, ast: -0.57, stl: 0.264, blk: 0.701, tpm: -0.731, fgImpact: 0.063, ftImpact: -1.069, to: 0.228 } },
          { name: "Micah Potter", min: 4, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -3.37, zScores: { pts: -0.933, reb: -0.953, ast: -1.021, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: 0, ftImpact: 0.66, to: 0.975 } },
          { name: "Branden Carlson", min: 4, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.79, zScores: { pts: -1.173, reb: -0.6, ast: -0.57, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: -0.33, ftImpact: 0, to: 0.975 } },
          { name: "Yang Hansen", min: 13, pts: 6, reb: 5, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.24, zScores: { pts: -0.452, reb: 0.458, ast: -0.57, stl: 0.264, blk: -0.513, tpm: 0.548, fgImpact: -0.204, ftImpact: 0, to: 0.228 } },
          { name: "Jrue Holiday", min: 22, pts: 14, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 6, ftm: 4, fta: 4, composite: 3.71, zScores: { pts: 0.509, reb: 0.105, ast: 0.334, stl: 0.264, blk: -0.513, tpm: 0.548, fgImpact: 0.911, ftImpact: 1.32, to: 0.228 } },
          { name: "Vit Krejci", min: 24, pts: 5, reb: 4, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -0.48, zScores: { pts: -0.572, reb: 0.105, ast: -0.118, stl: 0.264, blk: -0.513, tpm: -0.091, fgImpact: -0.534, ftImpact: 0, to: 0.975 } },
          { name: "Chris Youngblood", min: 7, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.22, zScores: { pts: -0.812, reb: -1.306, ast: -1.021, stl: -0.853, blk: -0.513, tpm: -0.091, fgImpact: -0.597, ftImpact: 0, to: 0.975 } },
          { name: "Sidy Cissoko", min: 19, pts: 1, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -3.69, zScores: { pts: -1.053, reb: -0.248, ast: -0.57, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: 0, ftImpact: -1.069, to: 0.228 } }
        ]
      },
      home: {
        abbr: "UTAH", name: "Utah Jazz", score: 90,
        players: [
          { name: "Lauri Markkanen", min: 29, pts: 13, reb: 6, ast: 1, stl: 2, blk: 2, to: 2, tpm: 2, fgm: 3, fga: 14, ftm: 5, fta: 6, composite: 1.75, zScores: { pts: 0.389, reb: 0.811, ast: -0.57, stl: 1.381, blk: 1.915, tpm: 0.548, fgImpact: -2.451, ftImpact: 0.251, to: -0.52 } },
          { name: "Jaxson Hayes", min: 20, pts: 7, reb: 7, ast: 2, stl: 2, blk: 1, to: 3, tpm: 0, fgm: 2, fga: 7, ftm: 3, fta: 4, composite: -0.48, zScores: { pts: -0.332, reb: 1.164, ast: -0.118, stl: 1.381, blk: 0.701, tpm: -0.731, fgImpact: -0.864, ftImpact: -0.409, to: -1.268 } },
          { name: "Keyonte George", min: 29, pts: 8, reb: 3, ast: 4, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 10, ftm: 4, fta: 4, composite: -2.46, zScores: { pts: -0.212, reb: -0.248, ast: 0.786, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: -1.854, ftImpact: 1.32, to: -1.268 } },
          { name: "Ace Bailey", min: 37, pts: 9, reb: 7, ast: 1, stl: 2, blk: 3, to: 3, tpm: 1, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 3.24, zScores: { pts: -0.092, reb: 1.164, ast: -0.57, stl: 1.381, blk: 3.129, tpm: -0.091, fgImpact: -0.409, ftImpact: 0, to: -1.268 } },
          { name: "Darryn Peterson", min: 36, pts: 16, reb: 4, ast: 4, stl: 1, blk: 1, to: 3, tpm: 3, fgm: 6, fga: 15, ftm: 1, fta: 2, composite: 0.84, zScores: { pts: 0.749, reb: 0.105, ast: 0.786, stl: 0.264, blk: 0.701, tpm: 1.188, fgImpact: -0.613, ftImpact: -1.069, to: -1.268 } },
          { name: "Kyle Filipowski", min: 6, pts: 5, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -0.58, zScores: { pts: -0.572, reb: -1.306, ast: -0.118, stl: 0.264, blk: -0.513, tpm: -0.091, fgImpact: 0.785, ftImpact: 0, to: 0.975 } },
          { name: "Brice Sensabaugh", min: 19, pts: 12, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 7, ftm: 4, fta: 4, composite: 0.49, zScores: { pts: 0.269, reb: -0.248, ast: -0.118, stl: -0.853, blk: -0.513, tpm: 0.548, fgImpact: -0.142, ftImpact: 1.32, to: 0.228 } },
          { name: "Mo Bamba", min: 11, pts: 6, reb: 4, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: 0.07, zScores: { pts: -0.452, reb: 0.105, ast: -1.021, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: 0.785, ftImpact: 0.66, to: 0.975 } },
          { name: "Svi Mykhailiuk", min: 18, pts: 6, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.12, zScores: { pts: -0.452, reb: -0.953, ast: 0.334, stl: -0.853, blk: -0.513, tpm: 0.548, fgImpact: -0.204, ftImpact: 0, to: 0.975 } },
          { name: "Josh Okogie", min: 14, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.35, zScores: { pts: -1.173, reb: -0.953, ast: -1.021, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: -0.33, ftImpact: 0, to: 0.228 } },
          { name: "Josh Green", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.62, zScores: { pts: -1.173, reb: -1.306, ast: -1.021, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: 0, ftImpact: 0, to: 0.975 } },
          { name: "Isaiah Collier", min: 20, pts: 8, reb: 1, ast: 4, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 4, composite: -3.13, zScores: { pts: -0.212, reb: -0.953, ast: 0.786, stl: 1.381, blk: -0.513, tpm: -0.731, fgImpact: 0.518, ftImpact: -2.137, to: -1.268 } }
        ]
      }
    },
      {
      id: "401909897",
      line: "Philadelphia 76ers 109 @ Charlotte Hornets 104 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PHI", name: "Philadelphia 76ers", score: 109,
        players: [
          { name: "Dean Wade", min: 30, pts: 4, reb: 5, ast: 10, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 4.64, zScores: { pts: -0.692, reb: 0.458, ast: 3.496, stl: 1.381, blk: 0.701, tpm: -0.731, fgImpact: -0.204, ftImpact: 0, to: 0.228 } },
          { name: "Adem Bona", min: 22, pts: 2, reb: 5, ast: 3, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 2, composite: -2, zScores: { pts: -0.933, reb: 0.458, ast: 0.334, stl: 0.264, blk: 0.701, tpm: -0.731, fgImpact: -0.267, ftImpact: -2.797, to: 0.975 } },
          { name: "Jaylen Brown", min: 38, pts: 16, reb: 4, ast: 4, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 6, fga: 15, ftm: 4, fta: 7, composite: -2.98, zScores: { pts: 0.749, reb: 0.105, ast: 0.786, stl: 1.381, blk: -0.513, tpm: -0.731, fgImpact: -0.613, ftImpact: -2.876, to: -1.268 } },
          { name: "Tyrese Maxey", min: 38, pts: 38, reb: 4, ast: 4, stl: 2, blk: 0, to: 2, tpm: 4, fgm: 13, fga: 23, ftm: 8, fta: 9, composite: 9.5, zScores: { pts: 3.392, reb: 0.105, ast: 0.786, stl: 1.381, blk: -0.513, tpm: 1.827, fgImpact: 1.806, ftImpact: 1.241, to: -0.52 } },
          { name: "VJ Edgecombe", min: 37, pts: 10, reb: 8, ast: 3, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 13, ftm: 0, fta: 0, composite: 2.97, zScores: { pts: 0.028, reb: 1.516, ast: 0.334, stl: 0.264, blk: 0.701, tpm: 0.548, fgImpact: -1.399, ftImpact: 0, to: 0.975 } },
          { name: "Jabari Walker", min: 19, pts: 12, reb: 6, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 8, ftm: 1, fta: 1, composite: 0.88, zScores: { pts: 0.269, reb: 0.811, ast: -1.021, stl: -0.853, blk: -0.513, tpm: -0.091, fgImpact: 0.974, ftImpact: 0.33, to: 0.975 } },
          { name: "Justin Edwards", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.6, zScores: { pts: -1.173, reb: -0.953, ast: -1.021, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: -0.33, ftImpact: 0, to: 0.975 } },
          { name: "Kentavious Caldwell-Pope", min: 18, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -0.812, reb: -0.6, ast: -0.57, stl: -0.853, blk: -0.513, tpm: -0.091, fgImpact: 0.063, ftImpact: 0, to: -0.52 } },
          { name: "Anfernee Simons", min: 25, pts: 19, reb: 0, ast: 2, stl: 3, blk: 0, to: 0, tpm: 5, fgm: 6, fga: 12, ftm: 2, fta: 2, composite: 6.15, zScores: { pts: 1.109, reb: -1.306, ast: -0.118, stl: 2.498, blk: -0.513, tpm: 2.467, fgImpact: 0.377, ftImpact: 0.66, to: 0.975 } },
          { name: "Labaron Philon Jr.", min: 10, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 2, composite: -5.7, zScores: { pts: -0.572, reb: -0.953, ast: -1.021, stl: -0.853, blk: -0.513, tpm: -0.091, fgImpact: 0.126, ftImpact: -2.797, to: 0.975 } }
        ]
      },
      home: {
        abbr: "CHA", name: "Charlotte Hornets", score: 104,
        players: [
          { name: "Moussa Diabate", min: 28, pts: 10, reb: 8, ast: 3, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 5, fga: 5, ftm: 0, fta: 0, composite: 4.4, zScores: { pts: 0.028, reb: 1.516, ast: 0.334, stl: -0.853, blk: 1.915, tpm: -0.731, fgImpact: 1.963, ftImpact: 0, to: 0.228 } },
          { name: "Brandon Miller", min: 33, pts: 24, reb: 5, ast: 5, stl: 2, blk: 1, to: 2, tpm: 5, fgm: 8, fga: 20, ftm: 3, fta: 4, composite: 6.21, zScores: { pts: 1.71, reb: 0.458, ast: 1.237, stl: 1.381, blk: 0.701, tpm: 2.467, fgImpact: -0.818, ftImpact: -0.409, to: -0.52 } },
          { name: "Naz Reid", min: 36, pts: 14, reb: 5, ast: 2, stl: 0, blk: 1, to: 4, tpm: 0, fgm: 4, fga: 12, ftm: 6, fta: 6, composite: -1.14, zScores: { pts: 0.509, reb: 0.458, ast: -0.118, stl: -0.853, blk: 0.701, tpm: -0.731, fgImpact: -1.069, ftImpact: 1.98, to: -2.015 } },
          { name: "Dennis Schroder", min: 35, pts: 4, reb: 3, ast: 7, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 1, fga: 11, ftm: 2, fta: 3, composite: -6.56, zScores: { pts: -0.692, reb: -0.248, ast: 2.141, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: -2.906, ftImpact: -0.739, to: -2.015 } },
          { name: "Sion James", min: 18, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.61, zScores: { pts: -0.692, reb: -0.6, ast: -0.57, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: 0.126, ftImpact: 0, to: 0.228 } },
          { name: "Royce O'Neale", min: 23, pts: 8, reb: 6, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 1, fta: 1, composite: 1.94, zScores: { pts: -0.212, reb: 0.811, ast: -0.57, stl: -0.853, blk: 0.701, tpm: -0.091, fgImpact: 0.848, ftImpact: 0.33, to: 0.975 } },
          { name: "Tidjane Salaun", min: 12, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.55, zScores: { pts: -0.572, reb: -0.6, ast: -1.021, stl: -0.853, blk: -0.513, tpm: -0.091, fgImpact: 0.126, ftImpact: 0, to: 0.975 } },
          { name: "Ryan Kalkbrenner", min: 19, pts: 6, reb: 3, ast: 4, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: 1.73, zScores: { pts: -0.452, reb: -0.248, ast: 0.786, stl: 0.264, blk: 0.701, tpm: -0.731, fgImpact: 1.178, ftImpact: 0, to: 0.228 } },
          { name: "Grayson Allen", min: 30, pts: 27, reb: 4, ast: 3, stl: 1, blk: 1, to: 3, tpm: 7, fgm: 9, fga: 12, ftm: 2, fta: 2, composite: 9.16, zScores: { pts: 2.07, reb: 0.105, ast: 0.334, stl: 0.264, blk: 0.701, tpm: 3.745, fgImpact: 2.544, ftImpact: 0.66, to: -1.268 } },
          { name: "Christian Anderson", min: 8, pts: 2, reb: 0, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -0.933, reb: -1.306, ast: -1.021, stl: -0.853, blk: 0.701, tpm: -0.731, fgImpact: 0.393, ftImpact: 0, to: -0.52 } }
        ]
      }
    },
      {
      id: "401909898",
      line: "Atlanta Hawks 99 @ New Orleans Pelicans 121 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ATL", name: "Atlanta Hawks", score: 99,
        players: [
          { name: "Onyeka Okongwu", min: 28, pts: 6, reb: 10, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 12, ftm: 0, fta: 0, composite: -1.25, zScores: { pts: -0.452, reb: 2.222, ast: -0.57, stl: -0.853, blk: 0.701, tpm: -0.731, fgImpact: -1.791, ftImpact: 0, to: 0.228 } },
          { name: "Jalen Johnson", min: 28, pts: 13, reb: 7, ast: 4, stl: 0, blk: 1, to: 4, tpm: 1, fgm: 5, fga: 11, ftm: 2, fta: 2, composite: 0.72, zScores: { pts: 0.389, reb: 1.164, ast: 0.786, stl: -0.853, blk: 0.701, tpm: -0.091, fgImpact: -0.016, ftImpact: 0.66, to: -2.015 } },
          { name: "CJ McCollum", min: 24, pts: 14, reb: 2, ast: 2, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 9, ftm: 2, fta: 2, composite: 0.13, zScores: { pts: 0.509, reb: -0.6, ast: -0.118, stl: 0.264, blk: -0.513, tpm: 0.548, fgImpact: 0.644, ftImpact: 0.66, to: -1.268 } },
          { name: "Nickeil Alexander-Walker", min: 29, pts: 12, reb: 2, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 12, ftm: 6, fta: 6, composite: -2.96, zScores: { pts: 0.269, reb: -0.6, ast: -0.57, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: -1.791, ftImpact: 1.98, to: -1.268 } },
          { name: "Dyson Daniels", min: 27, pts: 8, reb: 4, ast: 3, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 3, composite: 0.41, zScores: { pts: -0.212, reb: 0.105, ast: 0.334, stl: 2.498, blk: -0.513, tpm: -0.731, fgImpact: 0.188, ftImpact: -0.739, to: -0.52 } },
          { name: "Dorian Finney-Smith", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.95, zScores: { pts: -1.173, reb: -1.306, ast: -1.021, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: -0.33, ftImpact: 0, to: 0.975 } },
          { name: "Corey Kispert", min: 5, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.5, zScores: { pts: -1.173, reb: -1.306, ast: -0.57, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: -0.33, ftImpact: 0, to: 0.975 } },
          { name: "Asa Newell", min: 19, pts: 13, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 11, ftm: 2, fta: 2, composite: -0.66, zScores: { pts: 0.389, reb: 0.105, ast: -0.57, stl: -0.853, blk: -0.513, tpm: -0.091, fgImpact: -0.016, ftImpact: 0.66, to: 0.228 } },
          { name: "Jock Landale", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.62, zScores: { pts: -1.173, reb: -1.306, ast: -1.021, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: 0, ftImpact: 0, to: 0.975 } },
          { name: "Luguentz Dort", min: 29, pts: 11, reb: 3, ast: 0, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 9, ftm: 4, fta: 5, composite: -0.15, zScores: { pts: 0.148, reb: -0.248, ast: -1.021, stl: 0.264, blk: 0.701, tpm: -0.091, fgImpact: -0.801, ftImpact: -0.079, to: 0.975 } },
          { name: "Aaron Wiggins", min: 23, pts: 10, reb: 2, ast: 1, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 4, fga: 11, ftm: 0, fta: 0, composite: -0.89, zScores: { pts: 0.028, reb: -0.6, ast: -0.57, stl: 0.264, blk: 0.701, tpm: 0.548, fgImpact: -0.739, ftImpact: 0, to: -0.52 } },
          { name: "Kingston Flemings", min: 25, pts: 12, reb: 2, ast: 6, stl: 4, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 8, ftm: 3, fta: 3, composite: 4.34, zScores: { pts: 0.269, reb: -0.6, ast: 1.689, stl: 3.615, blk: -0.513, tpm: -0.091, fgImpact: 0.251, ftImpact: 0.99, to: -1.268 } }
        ]
      },
      home: {
        abbr: "NO", name: "New Orleans Pelicans", score: 121,
        players: [
          { name: "Herbert Jones", min: 25, pts: 11, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: -0.02, zScores: { pts: 0.148, reb: -0.248, ast: -0.118, stl: 0.264, blk: -0.513, tpm: -0.091, fgImpact: 0.314, ftImpact: 0, to: 0.228 } },
          { name: "Zion Williamson", min: 30, pts: 15, reb: 6, ast: 4, stl: 3, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 8, ftm: 5, fta: 8, composite: 0.64, zScores: { pts: 0.629, reb: 0.811, ast: 0.786, stl: 2.498, blk: -0.513, tpm: -0.731, fgImpact: 0.974, ftImpact: -2.546, to: -1.268 } },
          { name: "Trey Murphy III", min: 29, pts: 15, reb: 5, ast: 5, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 4, fga: 10, ftm: 6, fta: 6, composite: 4.25, zScores: { pts: 0.629, reb: 0.458, ast: 1.237, stl: 0.264, blk: 0.701, tpm: -0.091, fgImpact: -0.409, ftImpact: 1.98, to: -0.52 } },
          { name: "Karlo Matkovic", min: 18, pts: 8, reb: 10, ast: 1, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 3.28, zScores: { pts: -0.212, reb: 2.222, ast: -0.57, stl: 0.264, blk: 0.701, tpm: 0.548, fgImpact: 0.848, ftImpact: 0, to: -0.52 } },
          { name: "Jeremiah Fears", min: 31, pts: 20, reb: 5, ast: 7, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 9, fga: 12, ftm: 1, fta: 2, composite: 3.7, zScores: { pts: 1.23, reb: 0.458, ast: 2.141, stl: 0.264, blk: -0.513, tpm: -0.091, fgImpact: 2.544, ftImpact: -1.069, to: -1.268 } },
          { name: "Saddiq Bey", min: 26, pts: 25, reb: 6, ast: 1, stl: 4, blk: 0, to: 3, tpm: 1, fgm: 9, fga: 13, ftm: 6, fta: 7, composite: 6.61, zScores: { pts: 1.83, reb: 0.811, ast: -0.57, stl: 3.615, blk: -0.513, tpm: -0.091, fgImpact: 2.214, ftImpact: 0.581, to: -1.268 } },
          { name: "Trendon Watford", min: 18, pts: 7, reb: 4, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 3, fta: 4, composite: -3.03, zScores: { pts: -0.332, reb: 0.105, ast: -1.021, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: 0.126, ftImpact: -0.409, to: -0.52 } },
          { name: "Julian Reese", min: 3, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.38, zScores: { pts: -0.933, reb: -0.953, ast: -1.021, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: 0.393, ftImpact: 0, to: 0.228 } },
          { name: "Derik Queen", min: 23, pts: 8, reb: 8, ast: 4, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 0.69, zScores: { pts: -0.212, reb: 1.516, ast: 0.786, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: 0.188, ftImpact: 0.66, to: -1.268 } },
          { name: "Bryce McGowens", min: 15, pts: 3, reb: 0, ast: 1, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 3, fta: 4, composite: -1.43, zScores: { pts: -0.812, reb: -1.306, ast: -0.57, stl: 1.381, blk: 0.701, tpm: -0.731, fgImpact: -0.66, ftImpact: -0.409, to: 0.975 } },
          { name: "Bennedict Mathurin", min: 19, pts: 7, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -2.92, zScores: { pts: -0.332, reb: -0.953, ast: -0.118, stl: -0.853, blk: -0.513, tpm: -0.091, fgImpact: -0.204, ftImpact: 0.66, to: -0.52 } },
          { name: "AJ Johnson", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.49, zScores: { pts: -1.173, reb: -1.306, ast: -1.021, stl: -0.853, blk: 0.701, tpm: -0.731, fgImpact: -0.33, ftImpact: 0, to: 0.228 } }
        ]
      }
    },
      {
      id: "401909899",
      line: "Sacramento Kings 105 @ Memphis Grizzlies 136 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SAC", name: "Sacramento Kings", score: 105,
        players: [
          { name: "Domantas Sabonis", min: 38, pts: 11, reb: 14, ast: 8, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 5, fta: 6, composite: 5.64, zScores: { pts: 0.148, reb: 3.633, ast: 2.592, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: 0.518, ftImpact: 0.251, to: -0.52 } },
          { name: "De'Andre Hunter", min: 32, pts: 19, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 8, fga: 18, ftm: 1, fta: 3, composite: -1.51, zScores: { pts: 1.109, reb: -0.248, ast: -1.021, stl: 0.264, blk: -0.513, tpm: 0.548, fgImpact: -0.158, ftImpact: -2.467, to: 0.975 } },
          { name: "Precious Achiuwa", min: 25, pts: 6, reb: 5, ast: 1, stl: 1, blk: 2, to: 3, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 4, composite: -3.06, zScores: { pts: -0.452, reb: 0.458, ast: -0.57, stl: 0.264, blk: 1.915, tpm: -0.731, fgImpact: -0.534, ftImpact: -2.137, to: -1.268 } },
          { name: "Zach LaVine", min: 21, pts: 11, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 9, ftm: 3, fta: 3, composite: -3.43, zScores: { pts: 0.148, reb: -1.306, ast: -0.57, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: -0.079, ftImpact: 0.99, to: -0.52 } },
          { name: "Darius Acuff Jr.", min: 37, pts: 38, reb: 5, ast: 5, stl: 0, blk: 0, to: 3, tpm: 9, fgm: 12, fga: 25, ftm: 5, fta: 5, composite: 9.55, zScores: { pts: 3.392, reb: 0.458, ast: 1.237, stl: -0.853, blk: -0.513, tpm: 5.024, fgImpact: 0.423, ftImpact: 1.65, to: -1.268 } },
          { name: "Alex Karaban", min: 10, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.22, zScores: { pts: -1.173, reb: -0.953, ast: -0.57, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: -0.66, ftImpact: 0, to: 0.228 } },
          { name: "Jonathan Mogbo", min: 25, pts: 6, reb: 3, ast: 3, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: 2.75, zScores: { pts: -0.452, reb: -0.248, ast: 0.334, stl: 1.381, blk: 0.701, tpm: -0.731, fgImpact: 0.126, ftImpact: 0.66, to: 0.975 } },
          { name: "Malik Monk", min: 14, pts: 8, reb: 0, ast: 3, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 6, fta: 6, composite: 0.15, zScores: { pts: -0.212, reb: -1.306, ast: 0.334, stl: 1.381, blk: -0.513, tpm: -0.731, fgImpact: -0.267, ftImpact: 1.98, to: -0.52 } },
          { name: "Daeqwon Plowden", min: 4, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.69, zScores: { pts: -0.692, reb: -1.306, ast: -1.021, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: 0.455, ftImpact: 0, to: 0.975 } },
          { name: "Nique Clifford", min: 11, pts: 0, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -3.57, zScores: { pts: -1.173, reb: -0.953, ast: -0.118, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: -1.32, ftImpact: 0, to: 0.975 } },
          { name: "Emanuel Sharp", min: 24, pts: 2, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -4.05, zScores: { pts: -0.933, reb: -0.953, ast: -0.57, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: -1.587, ftImpact: 0, to: 0.975 } }
        ]
      },
      home: {
        abbr: "MEM", name: "Memphis Grizzlies", score: 136,
        players: [
          { name: "Cedric Coward", min: 23, pts: 10, reb: 7, ast: 2, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: 2.91, zScores: { pts: 0.028, reb: 1.164, ast: -0.118, stl: 1.381, blk: -0.513, tpm: 0.548, fgImpact: -0.472, ftImpact: 0.66, to: 0.228 } },
          { name: "Cameron Boozer", min: 26, pts: 27, reb: 9, ast: 3, stl: 0, blk: 1, to: 7, tpm: 3, fgm: 8, fga: 14, ftm: 8, fta: 8, composite: 4.85, zScores: { pts: 2.07, reb: 1.869, ast: 0.334, stl: -0.853, blk: 0.701, tpm: 1.188, fgImpact: 1.162, ftImpact: 2.639, to: -4.258 } },
          { name: "Jaylen Wells", min: 22, pts: 4, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -3.27, zScores: { pts: -0.692, reb: -0.6, ast: -1.021, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: -0.204, ftImpact: 0, to: 0.228 } },
          { name: "Zach Edey", min: 18, pts: 4, reb: 6, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.51, zScores: { pts: -0.692, reb: 0.811, ast: -1.021, stl: -0.853, blk: 0.701, tpm: -0.731, fgImpact: -0.204, ftImpact: 0, to: -0.52 } },
          { name: "Cam Spencer", min: 25, pts: 10, reb: 5, ast: 13, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 6.53, zScores: { pts: 0.028, reb: 0.458, ast: 4.851, stl: 0.264, blk: -0.513, tpm: 0.548, fgImpact: -0.079, ftImpact: 0, to: 0.975 } },
          { name: "Jerami Grant", min: 23, pts: 14, reb: 2, ast: 1, stl: 0, blk: 2, to: 3, tpm: 1, fgm: 5, fga: 10, ftm: 3, fta: 5, composite: -2.45, zScores: { pts: 0.509, reb: -0.6, ast: -0.57, stl: -0.853, blk: 1.915, tpm: -0.091, fgImpact: 0.314, ftImpact: -1.807, to: -1.268 } },
          { name: "Kris Murray", min: 21, pts: 2, reb: 1, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.51, zScores: { pts: -0.933, reb: -0.953, ast: -0.57, stl: 0.264, blk: 0.701, tpm: -0.731, fgImpact: -0.267, ftImpact: 0, to: 0.975 } },
          { name: "Olivier-Maxence Prosper", min: 4, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.18, zScores: { pts: -0.933, reb: -0.953, ast: -0.57, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: 0.393, ftImpact: 0, to: 0.975 } },
          { name: "Taylor Hendricks", min: 4, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.48, zScores: { pts: -0.452, reb: -0.953, ast: -1.021, stl: -0.853, blk: -0.513, tpm: 0.548, fgImpact: 0.785, ftImpact: 0, to: 0.975 } },
          { name: "GG Jackson", min: 21, pts: 21, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 7, fga: 10, ftm: 2, fta: 2, composite: 4.73, zScores: { pts: 1.35, reb: -0.248, ast: -0.118, stl: -0.853, blk: -0.513, tpm: 2.467, fgImpact: 1.759, ftImpact: 0.66, to: 0.228 } },
          { name: "Karim Lopez", min: 4, pts: 2, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.42, zScores: { pts: -0.933, reb: -0.953, ast: -1.021, stl: -0.853, blk: 0.701, tpm: -0.731, fgImpact: 0.393, ftImpact: 0, to: 0.975 } },
          { name: "Isaiah Stewart", min: 21, pts: 24, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 8, fga: 9, ftm: 6, fta: 6, composite: 5.74, zScores: { pts: 1.71, reb: 0.105, ast: -1.021, stl: -0.853, blk: -0.513, tpm: 0.548, fgImpact: 2.811, ftImpact: 1.98, to: 0.975 } },
          { name: "Carson Cooper", min: 3, pts: 1, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -5.16, zScores: { pts: -1.053, reb: -0.6, ast: -0.57, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: 0, ftImpact: -1.069, to: 0.228 } },
          { name: "Jahmai Mashack", min: 4, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.54, zScores: { pts: -0.933, reb: -1.306, ast: -0.57, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: 0.393, ftImpact: 0, to: 0.975 } },
          { name: "Javon Small", min: 20, pts: 7, reb: 1, ast: 5, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: -2.57, zScores: { pts: -0.332, reb: -0.953, ast: 1.237, stl: -0.853, blk: -0.513, tpm: 0.548, fgImpact: -0.864, ftImpact: -1.069, to: 0.228 } }
        ]
      }
    },
      {
      id: "401909900",
      line: "Cleveland Cavaliers 136 @ Milwaukee Bucks 111 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CLE", name: "Cleveland Cavaliers", score: 136,
        players: [
          { name: "Jarrett Allen", min: 24, pts: 25, reb: 11, ast: 4, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 12, fga: 16, ftm: 1, fta: 4, composite: 3.22, zScores: { pts: 1.83, reb: 2.575, ast: 0.786, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: 3.392, ftImpact: -3.866, to: -0.52 } },
          { name: "Evan Mobley", min: 25, pts: 27, reb: 5, ast: 3, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 11, fga: 16, ftm: 2, fta: 3, composite: 6.71, zScores: { pts: 2.07, reb: 0.458, ast: 0.334, stl: 0.264, blk: -0.513, tpm: 1.188, fgImpact: 2.67, ftImpact: -0.739, to: 0.975 } },
          { name: "James Harden", min: 26, pts: 13, reb: 6, ast: 7, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 4.67, zScores: { pts: 0.389, reb: 0.811, ast: 2.141, stl: 0.264, blk: -0.513, tpm: 1.188, fgImpact: 0.251, ftImpact: 0.66, to: -0.52 } },
          { name: "Donovan Mitchell", min: 24, pts: 15, reb: 4, ast: 3, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 7, ftm: 3, fta: 3, composite: 2.02, zScores: { pts: 0.629, reb: 0.105, ast: 0.334, stl: -0.853, blk: -0.513, tpm: 0.548, fgImpact: 1.303, ftImpact: 0.99, to: -0.52 } },
          { name: "Peyton Watson", min: 22, pts: 5, reb: 2, ast: 6, stl: 1, blk: 2, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: 2.3, zScores: { pts: -0.572, reb: -0.6, ast: 1.689, stl: 0.264, blk: 1.915, tpm: -0.091, fgImpact: -0.534, ftImpact: 0, to: 0.228 } },
          { name: "Mario Hezonja", min: 20, pts: 8, reb: 11, ast: 4, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: 0.29, zScores: { pts: -0.212, reb: 2.575, ast: 0.786, stl: -0.853, blk: -0.513, tpm: -0.091, fgImpact: 0.188, ftImpact: -1.069, to: -0.52 } },
          { name: "Tristan Enaruna", min: 6, pts: 2, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.18, zScores: { pts: -0.933, reb: -0.953, ast: -1.021, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: -0.267, ftImpact: 0, to: 0.975 } },
          { name: "Riley Minix", min: 6, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.55, zScores: { pts: -1.173, reb: -0.248, ast: -1.021, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: -0.99, ftImpact: 0, to: 0.975 } },
          { name: "Thomas Bryant", min: 11, pts: 11, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 1.06, zScores: { pts: 0.148, reb: -0.6, ast: -1.021, stl: -0.853, blk: 0.701, tpm: 1.188, fgImpact: -0.142, ftImpact: 0.66, to: 0.975 } },
          { name: "Sam Merrill", min: 19, pts: 6, reb: 4, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -0.32, zScores: { pts: -0.452, reb: 0.105, ast: 0.334, stl: 0.264, blk: -0.513, tpm: -0.091, fgImpact: 0.126, ftImpact: -1.069, to: 0.975 } },
          { name: "Craig Porter Jr.", min: 16, pts: 2, reb: 2, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.88, zScores: { pts: -0.933, reb: -0.6, ast: 0.786, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: -0.267, ftImpact: 0, to: 0.228 } },
          { name: "Tyrese Proctor", min: 18, pts: 9, reb: 4, ast: 5, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 2.36, zScores: { pts: -0.092, reb: 0.105, ast: 1.237, stl: 0.264, blk: -0.513, tpm: 1.188, fgImpact: -0.801, ftImpact: 0, to: 0.975 } },
          { name: "Meleek Thomas", min: 23, pts: 13, reb: 1, ast: 2, stl: 1, blk: 1, to: 1, tpm: 3, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: 1.35, zScores: { pts: 0.389, reb: -0.953, ast: -0.118, stl: 0.264, blk: 0.701, tpm: 1.188, fgImpact: -0.346, ftImpact: 0, to: 0.228 } }
        ]
      },
      home: {
        abbr: "MIL", name: "Milwaukee Bucks", score: 111,
        players: [
          { name: "Kyle Kuzma", min: 23, pts: 14, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 12, ftm: 0, fta: 2, composite: -1.3, zScores: { pts: 0.509, reb: -0.248, ast: 0.334, stl: 0.264, blk: -0.513, tpm: 0.548, fgImpact: 0.377, ftImpact: -2.797, to: 0.228 } },
          { name: "Jaime Jaquez Jr.", min: 23, pts: 8, reb: 7, ast: 5, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 1, fta: 2, composite: -1.33, zScores: { pts: -0.212, reb: 1.164, ast: 1.237, stl: -0.853, blk: -0.513, tpm: -0.091, fgImpact: -0.472, ftImpact: -1.069, to: -0.52 } },
          { name: "Myles Turner", min: 24, pts: 10, reb: 7, ast: 2, stl: 1, blk: 2, to: 0, tpm: 1, fgm: 4, fga: 10, ftm: 1, fta: 2, composite: 2.66, zScores: { pts: 0.028, reb: 1.164, ast: -0.118, stl: 0.264, blk: 1.915, tpm: -0.091, fgImpact: -0.409, ftImpact: -1.069, to: 0.975 } },
          { name: "Tyler Herro", min: 27, pts: 15, reb: 3, ast: 2, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 5, fga: 18, ftm: 1, fta: 1, composite: -0.67, zScores: { pts: 0.629, reb: -0.248, ast: -0.118, stl: 0.264, blk: -0.513, tpm: 1.827, fgImpact: -2.325, ftImpact: 0.33, to: -0.52 } },
          { name: "Ryan Rollins", min: 26, pts: 9, reb: 3, ast: 7, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 11, ftm: 0, fta: 0, composite: 0.58, zScores: { pts: -0.092, reb: -0.248, ast: 2.141, stl: -0.853, blk: -0.513, tpm: -0.091, fgImpact: -0.739, ftImpact: 0, to: 0.975 } },
          { name: "Ousmane Dieng", min: 6, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.37, zScores: { pts: -1.173, reb: -0.953, ast: -0.118, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: 0, ftImpact: 0, to: 0.975 } },
          { name: "Nate Ament", min: 19, pts: 14, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 8, ftm: 0, fta: 0, composite: 0.54, zScores: { pts: 0.509, reb: -0.953, ast: -0.118, stl: -0.853, blk: -0.513, tpm: 0.548, fgImpact: 1.696, ftImpact: 0, to: 0.228 } },
          { name: "Kel'el Ware", min: 24, pts: 19, reb: 10, ast: 3, stl: 1, blk: 2, to: 4, tpm: 3, fgm: 6, fga: 16, ftm: 4, fta: 5, composite: 3.99, zScores: { pts: 1.109, reb: 2.222, ast: 0.334, stl: 0.264, blk: 1.915, tpm: 1.188, fgImpact: -0.943, ftImpact: -0.079, to: -2.015 } },
          { name: "Gary Trent Jr.", min: 6, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.75, zScores: { pts: -0.812, reb: -0.953, ast: -0.57, stl: -0.853, blk: -0.513, tpm: -0.091, fgImpact: 0.063, ftImpact: 0, to: 0.975 } },
          { name: "AJ Green", min: 20, pts: 0, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -1.173, reb: -0.248, ast: -0.118, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: -0.33, ftImpact: 0, to: 0.228 } },
          { name: "Brayden Burries", min: 21, pts: 14, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 5, fta: 6, composite: 1.16, zScores: { pts: 0.509, reb: -0.248, ast: -0.57, stl: 0.264, blk: -0.513, tpm: -0.091, fgImpact: 0.581, ftImpact: 0.251, to: 0.975 } },
          { name: "Kasparas Jakucionis", min: 21, pts: 5, reb: 3, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -3.33, zScores: { pts: -0.572, reb: -0.248, ast: 0.334, stl: -0.853, blk: -0.513, tpm: -0.091, fgImpact: -0.864, ftImpact: 0, to: -0.52 } }
        ]
      }
    },
      {
      id: "401909901",
      line: "Minnesota Timberwolves 111 @ San Antonio Spurs 121 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIN", name: "Minnesota Timberwolves", score: 111,
        players: [
          { name: "Jaden McDaniels", min: 39, pts: 19, reb: 3, ast: 3, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 17, ftm: 3, fta: 4, composite: 1.13, zScores: { pts: 1.109, reb: -0.248, ast: 0.334, stl: 1.381, blk: -0.513, tpm: 0.548, fgImpact: -0.55, ftImpact: -0.409, to: -0.52 } },
          { name: "Jonathan Kuminga", min: 40, pts: 19, reb: 6, ast: 3, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 8, fga: 19, ftm: 1, fta: 1, composite: 3.47, zScores: { pts: 1.109, reb: 0.811, ast: 0.334, stl: -0.853, blk: 0.701, tpm: 0.548, fgImpact: -0.488, ftImpact: 0.33, to: 0.975 } },
          { name: "Joan Beringer", min: 34, pts: 12, reb: 6, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 8, ftm: 4, fta: 5, composite: 1.13, zScores: { pts: 0.269, reb: 0.811, ast: -0.118, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: 0.251, ftImpact: -0.079, to: 0.975 } },
          { name: "Ayo Dosunmu", min: 38, pts: 27, reb: 9, ast: 3, stl: 3, blk: 0, to: 3, tpm: 2, fgm: 11, fga: 17, ftm: 3, fta: 3, composite: 8.87, zScores: { pts: 2.07, reb: 1.869, ast: 0.334, stl: 2.498, blk: -0.513, tpm: 0.548, fgImpact: 2.34, ftImpact: 0.99, to: -1.268 } },
          { name: "LaMelo Ball", min: 20, pts: 10, reb: 8, ast: 4, stl: 3, blk: 0, to: 5, tpm: 0, fgm: 2, fga: 10, ftm: 6, fta: 6, composite: 0.95, zScores: { pts: 0.028, reb: 1.516, ast: 0.786, stl: 2.498, blk: -0.513, tpm: -0.731, fgImpact: -1.854, ftImpact: 1.98, to: -2.763 } },
          { name: "Trey Lyles", min: 17, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 3, ftm: 3, fta: 4, composite: -6.18, zScores: { pts: -0.452, reb: -1.306, ast: -1.021, stl: -0.853, blk: -0.513, tpm: -0.091, fgImpact: -0.267, ftImpact: -0.409, to: -1.268 } },
          { name: "Jaylen Clark", min: 20, pts: 10, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 1.08, zScores: { pts: 0.028, reb: -0.6, ast: -0.57, stl: -0.853, blk: 0.701, tpm: 0.548, fgImpact: 0.188, ftImpact: 0.66, to: 0.975 } },
          { name: "Terrence Shannon Jr.", min: 18, pts: 2, reb: 3, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 8, ftm: 0, fta: 1, composite: -4.83, zScores: { pts: -0.933, reb: -0.248, ast: 0.786, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: -1.917, ftImpact: -1.398, to: 0.975 } },
          { name: "Bones Hyland", min: 14, pts: 6, reb: 1, ast: 3, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -0.19, zScores: { pts: -0.452, reb: -0.953, ast: 0.334, stl: 1.381, blk: -0.513, tpm: -0.731, fgImpact: 0.518, ftImpact: 0, to: 0.228 } }
        ]
      },
      home: {
        abbr: "SA", name: "San Antonio Spurs", score: 121,
        players: [
          { name: "Victor Wembanyama", min: 34, pts: 43, reb: 7, ast: 4, stl: 1, blk: 6, to: 3, tpm: 3, fgm: 17, fga: 34, ftm: 6, fta: 9, composite: 11.75, zScores: { pts: 3.992, reb: 1.164, ast: 0.786, stl: 0.264, blk: 6.77, tpm: 1.188, fgImpact: 1.067, ftImpact: -2.216, to: -1.268 } },
          { name: "De'Aaron Fox", min: 35, pts: 22, reb: 8, ast: 7, stl: 0, blk: 1, to: 4, tpm: 0, fgm: 8, fga: 10, ftm: 6, fta: 7, composite: 5.29, zScores: { pts: 1.47, reb: 1.516, ast: 2.141, stl: -0.853, blk: 0.701, tpm: -0.731, fgImpact: 2.481, ftImpact: 0.581, to: -2.015 } },
          { name: "Devin Vassell", min: 34, pts: 9, reb: 5, ast: 2, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 6, ftm: 5, fta: 6, composite: 0.8, zScores: { pts: -0.092, reb: 0.458, ast: -0.118, stl: 1.381, blk: 0.701, tpm: -0.731, fgImpact: -0.534, ftImpact: 0.251, to: -0.52 } },
          { name: "Stephon Castle", min: 22, pts: 0, reb: 5, ast: 4, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -3.5, zScores: { pts: -1.173, reb: 0.458, ast: 0.786, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: -1.32, ftImpact: 0, to: -1.268 } },
          { name: "Dylan Harper", min: 39, pts: 25, reb: 7, ast: 6, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 9, fga: 17, ftm: 5, fta: 6, composite: 5.61, zScores: { pts: 1.83, reb: 1.164, ast: 1.689, stl: 0.264, blk: -0.513, tpm: 0.548, fgImpact: 0.895, ftImpact: 0.251, to: -0.52 } },
          { name: "Keldon Johnson", min: 24, pts: 2, reb: 6, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.53, zScores: { pts: -0.933, reb: 0.811, ast: -1.021, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: -0.267, ftImpact: 0, to: 0.975 } },
          { name: "Julian Champagnie", min: 27, pts: 12, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 7, ftm: 3, fta: 3, composite: 2.21, zScores: { pts: 0.269, reb: -0.248, ast: -0.57, stl: 0.264, blk: -0.513, tpm: 1.188, fgImpact: -0.142, ftImpact: 0.99, to: 0.975 } },
          { name: "Carter Bryant", min: 11, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.24, zScores: { pts: -0.452, reb: -1.306, ast: -1.021, stl: -0.853, blk: -0.513, tpm: 0.548, fgImpact: 0.126, ftImpact: 0, to: 0.228 } },
          { name: "Luke Kornet", min: 14, pts: 2, reb: 8, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.28, zScores: { pts: -0.933, reb: 1.516, ast: -1.021, stl: -0.853, blk: 0.701, tpm: -0.731, fgImpact: 0.063, ftImpact: 0, to: 0.975 } }
        ]
      }
    },
      {
      id: "401909902",
      line: "Oklahoma City Thunder 98 @ Houston Rockets 119 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OKC", name: "Oklahoma City Thunder", score: 98,
        players: [
          { name: "Isaiah Hartenstein", min: 25, pts: 10, reb: 7, ast: 0, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 8, ftm: 4, fta: 4, composite: 1.75, zScores: { pts: 0.028, reb: 1.164, ast: -1.021, stl: 2.498, blk: -0.513, tpm: -0.731, fgImpact: -0.472, ftImpact: 1.32, to: -0.52 } },
          { name: "Kenrich Williams", min: 21, pts: 11, reb: 7, ast: 3, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 1.47, zScores: { pts: 0.148, reb: 1.164, ast: 0.334, stl: -0.853, blk: -0.513, tpm: 1.188, fgImpact: -0.142, ftImpact: 0.66, to: -0.52 } },
          { name: "Shai Gilgeous-Alexander", min: 31, pts: 26, reb: 4, ast: 3, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 10, fga: 20, ftm: 3, fta: 4, composite: 3.03, zScores: { pts: 1.95, reb: 0.105, ast: 0.334, stl: 0.264, blk: -0.513, tpm: 1.188, fgImpact: 0.628, ftImpact: -0.409, to: -0.52 } },
          { name: "Jared McCain", min: 28, pts: 10, reb: 4, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 14, ftm: 0, fta: 0, composite: -2.49, zScores: { pts: 0.028, reb: 0.105, ast: -0.118, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: -1.006, ftImpact: 0, to: -0.52 } },
          { name: "Ajay Mitchell", min: 26, pts: 6, reb: 3, ast: 5, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -1.02, zScores: { pts: -0.452, reb: -0.248, ast: 1.237, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: -0.801, ftImpact: 0, to: 0.228 } },
          { name: "Jaylin Williams", min: 26, pts: 3, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 1, fta: 1, composite: -2.96, zScores: { pts: -0.812, reb: 0.105, ast: -0.57, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: -1.257, ftImpact: 0.33, to: 0.228 } },
          { name: "Brooks Barnhizer", min: 6, pts: 5, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 3, fta: 3, composite: -0.82, zScores: { pts: -0.572, reb: -0.6, ast: -1.021, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: 0.393, ftImpact: 0.99, to: 0.975 } },
          { name: "Aday Mara", min: 28, pts: 7, reb: 9, ast: 3, stl: 0, blk: 4, to: 2, tpm: 0, fgm: 3, fga: 7, ftm: 1, fta: 1, composite: 4.3, zScores: { pts: -0.332, reb: 1.869, ast: 0.334, stl: -0.853, blk: 4.343, tpm: -0.731, fgImpact: -0.142, ftImpact: 0.33, to: -0.52 } },
          { name: "Micah Peavy", min: 14, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.97, zScores: { pts: -0.933, reb: -0.953, ast: -1.021, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: 0.063, ftImpact: 0, to: 0.975 } },
          { name: "Josh Dix", min: 9, pts: 7, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -1.96, zScores: { pts: -0.332, reb: -1.306, ast: -1.021, stl: -0.853, blk: -0.513, tpm: -0.091, fgImpact: 1.178, ftImpact: 0, to: 0.975 } },
          { name: "Bennett Stirtz", min: 26, pts: 11, reb: 1, ast: 3, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: -0.17, zScores: { pts: 0.148, reb: -0.953, ast: 0.334, stl: -0.853, blk: -0.513, tpm: 1.188, fgImpact: 0.251, ftImpact: 0, to: 0.228 } }
        ]
      },
      home: {
        abbr: "HOU", name: "Houston Rockets", score: 119,
        players: [
          { name: "Kevin Durant", min: 27, pts: 14, reb: 3, ast: 4, stl: 1, blk: 3, to: 1, tpm: 0, fgm: 4, fga: 9, ftm: 6, fta: 6, composite: 5.84, zScores: { pts: 0.509, reb: -0.248, ast: 0.786, stl: 0.264, blk: 3.129, tpm: -0.731, fgImpact: -0.079, ftImpact: 1.98, to: 0.228 } },
          { name: "Jabari Smith Jr.", min: 33, pts: 30, reb: 9, ast: 5, stl: 0, blk: 1, to: 1, tpm: 6, fgm: 10, fga: 18, ftm: 4, fta: 5, composite: 9.93, zScores: { pts: 2.431, reb: 1.869, ast: 1.237, stl: -0.853, blk: 0.701, tpm: 3.106, fgImpact: 1.287, ftImpact: -0.079, to: 0.228 } },
          { name: "Alperen Sengun", min: 33, pts: 16, reb: 9, ast: 9, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 6, fga: 17, ftm: 4, fta: 6, composite: 1.51, zScores: { pts: 0.749, reb: 1.869, ast: 3.044, stl: -0.853, blk: 0.701, tpm: -0.731, fgImpact: -1.273, ftImpact: -1.477, to: -0.52 } },
          { name: "Marcus Smart", min: 36, pts: 24, reb: 5, ast: 3, stl: 1, blk: 0, to: 1, tpm: 7, fgm: 7, fga: 10, ftm: 3, fta: 3, composite: 8.97, zScores: { pts: 1.71, reb: 0.458, ast: 0.334, stl: 0.264, blk: -0.513, tpm: 3.745, fgImpact: 1.759, ftImpact: 0.99, to: 0.228 } },
          { name: "Amen Thompson", min: 28, pts: 8, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: -0.85, zScores: { pts: -0.212, reb: -0.248, ast: -0.57, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: -0.472, ftImpact: 0.66, to: 0.975 } },
          { name: "Jae'Sean Tate", min: 6, pts: 0, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -2.98, zScores: { pts: -1.173, reb: -0.248, ast: -0.57, stl: 0.264, blk: -0.513, tpm: -0.731, fgImpact: -0.99, ftImpact: 0, to: 0.975 } },
          { name: "Tari Eason", min: 19, pts: 8, reb: 3, ast: 2, stl: 1, blk: 2, to: 2, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 1.49, zScores: { pts: -0.212, reb: -0.248, ast: -0.118, stl: 0.264, blk: 1.915, tpm: 0.548, fgImpact: -0.142, ftImpact: 0, to: -0.52 } },
          { name: "Isaiah Crawford", min: 19, pts: 8, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -1.84, zScores: { pts: -0.212, reb: -0.953, ast: -1.021, stl: -0.853, blk: -0.513, tpm: 0.548, fgImpact: 0.188, ftImpact: 0, to: 0.975 } },
          { name: "Clint Capela", min: 10, pts: 0, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.05, zScores: { pts: -1.173, reb: 0.105, ast: -0.118, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: 0, ftImpact: 0, to: 0.228 } },
          { name: "Oscar Tshiebwe", min: 4, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 1, composite: -4.58, zScores: { pts: -0.933, reb: -0.953, ast: -0.57, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: 0.393, ftImpact: -1.398, to: 0.975 } },
          { name: "Bogdan Bogdanovic", min: 19, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -5.34, zScores: { pts: -0.692, reb: -0.6, ast: -0.57, stl: -0.853, blk: -0.513, tpm: -0.731, fgImpact: -0.864, ftImpact: 0, to: -0.52 } },
          { name: "Bruce Thornton", min: 6, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.9, zScores: { pts: -0.572, reb: -0.953, ast: -1.021, stl: -0.853, blk: -0.513, tpm: -0.091, fgImpact: 0.126, ftImpact: 0, to: 0.975 } }
        ]
      }
    }
    ]
  },
    "2026-11-01": {
    games: [
      {
      id: "401909903",
      line: "Boston Celtics 108 @ Orlando Magic 97 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BOS", name: "Boston Celtics", score: 108,
        players: [
          { name: "Paul George", min: 33, pts: 17, reb: 6, ast: 8, stl: 2, blk: 2, to: 4, tpm: 3, fgm: 6, fga: 14, ftm: 2, fta: 2, composite: 7.26, zScores: { pts: 0.79, reb: 0.656, ast: 2.369, stl: 1.099, blk: 2.83, tpm: 0.956, fgImpact: -0.245, ftImpact: 0.598, to: -1.796 } },
          { name: "Jayson Tatum", min: 34, pts: 32, reb: 4, ast: 7, stl: 0, blk: 2, to: 4, tpm: 1, fgm: 8, fga: 19, ftm: 15, fta: 17, composite: 6.32, zScores: { pts: 2.469, reb: 0.048, ast: 1.949, stl: -0.664, blk: 2.83, tpm: -0.226, fgImpact: -0.439, ftImpact: 2.153, to: -1.796 } },
          { name: "Neemias Queta", min: 27, pts: 8, reb: 8, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 2.04, zScores: { pts: -0.218, reb: 1.265, ast: -0.571, stl: -0.664, blk: 2.83, tpm: -0.816, fgImpact: -0.052, ftImpact: 0, to: 0.262 } },
          { name: "Derrick White", min: 34, pts: 12, reb: 2, ast: 2, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 1.64, zScores: { pts: 0.23, reb: -0.561, ast: -0.151, stl: 1.099, blk: -0.484, tpm: 0.365, fgImpact: 0.283, ftImpact: 0.598, to: 0.262 } },
          { name: "Hugo Gonzalez", min: 14, pts: 7, reb: 1, ast: 1, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 1, composite: -1.05, zScores: { pts: -0.33, reb: -0.865, ast: -0.571, stl: 1.099, blk: -0.484, tpm: -0.226, fgImpact: 0.547, ftImpact: -1.166, to: 0.948 } },
          { name: "Sam Hauser", min: 17, pts: 3, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.14, zScores: { pts: -0.777, reb: -0.561, ast: -0.991, stl: 0.218, blk: -0.484, tpm: -0.226, fgImpact: -0.264, ftImpact: 0, to: 0.948 } },
          { name: "Luka Garza", min: 21, pts: 12, reb: 6, ast: 4, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 7, ftm: 2, fta: 3, composite: 2.67, zScores: { pts: 0.23, reb: 0.656, ast: 0.689, stl: 0.218, blk: -0.484, tpm: 0.365, fgImpact: 0.618, ftImpact: -0.568, to: 0.948 } },
          { name: "Payton Pritchard", min: 27, pts: 7, reb: 7, ast: 3, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 11, ftm: 1, fta: 1, composite: 0.57, zScores: { pts: -0.33, reb: 0.96, ast: 0.269, stl: 0.218, blk: 1.173, tpm: -0.816, fgImpact: -1.462, ftImpact: 0.299, to: 0.262 } },
          { name: "Baylor Scheierman", min: 20, pts: 10, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 0.33, zScores: { pts: 0.006, reb: -0.561, ast: -0.571, stl: -0.664, blk: -0.484, tpm: 0.365, fgImpact: 1.287, ftImpact: 0, to: 0.948 } },
          { name: "Jordan Walsh", min: 13, pts: 0, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.23, zScores: { pts: -1.113, reb: -0.256, ast: -0.151, stl: -0.664, blk: -0.484, tpm: -0.816, fgImpact: -1.004, ftImpact: 0, to: 0.262 } }
        ]
      },
      home: {
        abbr: "ORL", name: "Orlando Magic", score: 97,
        players: [
          { name: "Franz Wagner", min: 40, pts: 14, reb: 6, ast: 12, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 20, ftm: 3, fta: 4, composite: -0.59, zScores: { pts: 0.454, reb: 0.656, ast: 4.049, stl: -0.664, blk: -0.484, tpm: -0.226, fgImpact: -2.994, ftImpact: -0.269, to: -1.11 } },
          { name: "Wendell Carter Jr.", min: 35, pts: 7, reb: 10, ast: 0, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 6, ftm: 2, fta: 4, composite: -2.43, zScores: { pts: -0.33, reb: 1.873, ast: -0.991, stl: 1.099, blk: -0.484, tpm: -0.226, fgImpact: -0.528, ftImpact: -1.734, to: -1.11 } },
          { name: "Desmond Bane", min: 40, pts: 19, reb: 2, ast: 1, stl: 2, blk: 1, to: 3, tpm: 5, fgm: 7, fga: 13, ftm: 0, fta: 0, composite: 4.01, zScores: { pts: 1.014, reb: -0.561, ast: -0.571, stl: 1.099, blk: 1.173, tpm: 2.137, fgImpact: 0.83, ftImpact: 0, to: -1.11 } },
          { name: "Anthony Black", min: 33, pts: 23, reb: 8, ast: 3, stl: 2, blk: 0, to: 4, tpm: 1, fgm: 6, fga: 12, ftm: 10, fta: 11, composite: 3.84, zScores: { pts: 1.461, reb: 1.265, ast: 0.269, stl: 1.099, blk: -0.484, tpm: -0.226, fgImpact: 0.424, ftImpact: 1.824, to: -1.796 } },
          { name: "Jase Richardson", min: 26, pts: 4, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -3.47, zScores: { pts: -0.665, reb: -0.865, ast: 0.269, stl: -0.664, blk: -0.484, tpm: -0.816, fgImpact: -1.198, ftImpact: 0, to: 0.948 } },
          { name: "Jamal Cain", min: 18, pts: 5, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.61, zScores: { pts: -0.553, reb: -0.865, ast: -0.571, stl: -0.664, blk: -0.484, tpm: -0.226, fgImpact: -0.193, ftImpact: 0, to: 0.948 } },
          { name: "Tristan da Silva", min: 35, pts: 23, reb: 10, ast: 2, stl: 0, blk: 0, to: 2, tpm: 5, fgm: 9, fga: 14, ftm: 0, fta: 0, composite: 5.72, zScores: { pts: 1.461, reb: 1.873, ast: -0.151, stl: -0.664, blk: -0.484, tpm: 2.137, fgImpact: 1.976, ftImpact: 0, to: -0.424 } },
          { name: "Nikola Vucevic", min: 7, pts: 2, reb: 4, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.97, zScores: { pts: -0.889, reb: 0.048, ast: -0.151, stl: -0.664, blk: 1.173, tpm: -0.816, fgImpact: 0.071, ftImpact: 0, to: 0.262 } },
          { name: "Goga Bitadze", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.32, zScores: { pts: -1.113, reb: -0.865, ast: -0.991, stl: -0.664, blk: -0.484, tpm: -0.816, fgImpact: -0.335, ftImpact: 0, to: 0.948 } }
        ]
      }
    },
      {
      id: "401909904",
      line: "Brooklyn Nets 98 @ Indiana Pacers 90 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BKN", name: "Brooklyn Nets", score: 98,
        players: [
          { name: "Julius Randle", min: 37, pts: 20, reb: 5, ast: 6, stl: 2, blk: 0, to: 4, tpm: 4, fgm: 5, fga: 15, ftm: 6, fta: 6, composite: 3.85, zScores: { pts: 1.126, reb: 0.352, ast: 1.529, stl: 1.099, blk: -0.484, tpm: 1.547, fgImpact: -1.32, ftImpact: 1.794, to: -1.796 } },
          { name: "Michael Porter Jr.", min: 36, pts: 23, reb: 9, ast: 3, stl: 1, blk: 0, to: 4, tpm: 3, fgm: 7, fga: 16, ftm: 6, fta: 9, composite: 0.31, zScores: { pts: 1.461, reb: 1.569, ast: 0.269, stl: 0.218, blk: -0.484, tpm: 0.956, fgImpact: -0.175, ftImpact: -1.704, to: -1.796 } },
          { name: "Chaney Johnson", min: 31, pts: 2, reb: 2, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -2.56, zScores: { pts: -0.889, reb: -0.561, ast: -0.991, stl: -0.664, blk: 1.173, tpm: -0.816, fgImpact: -0.67, ftImpact: 0.598, to: 0.262 } },
          { name: "Day'Ron Sharpe", min: 26, pts: 15, reb: 13, ast: 4, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 7, ftm: 4, fta: 5, composite: 3.63, zScores: { pts: 0.566, reb: 2.786, ast: 0.689, stl: -0.664, blk: -0.484, tpm: -0.226, fgImpact: 1.358, ftImpact: 0.03, to: -0.424 } },
          { name: "Nolan Traore", min: 30, pts: 16, reb: 2, ast: 6, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 14, ftm: 0, fta: 0, composite: 2.94, zScores: { pts: 0.678, reb: -0.561, ast: 1.529, stl: 0.218, blk: -0.484, tpm: 1.547, fgImpact: -0.245, ftImpact: 0, to: 0.262 } },
          { name: "Noah Clowney", min: 24, pts: 8, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 2, fta: 3, composite: -3.17, zScores: { pts: -0.218, reb: -0.256, ast: -0.991, stl: -0.664, blk: -0.484, tpm: -0.816, fgImpact: -0.123, ftImpact: -0.568, to: 0.948 } },
          { name: "Moritz Wagner", min: 21, pts: 14, reb: 6, ast: 0, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 4, fga: 6, ftm: 5, fta: 6, composite: 1.26, zScores: { pts: 0.454, reb: 0.656, ast: -0.991, stl: -0.664, blk: 1.173, tpm: -0.226, fgImpact: 0.952, ftImpact: 0.329, to: -0.424 } },
          { name: "Terance Mann", min: 15, pts: 0, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.02, zScores: { pts: -1.113, reb: -0.865, ast: -0.571, stl: 0.218, blk: -0.484, tpm: -0.816, fgImpact: -0.335, ftImpact: 0, to: 0.948 } },
          { name: "Keon Ellis", min: 20, pts: 0, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -4.74, zScores: { pts: -1.113, reb: -0.561, ast: -0.571, stl: 0.218, blk: -0.484, tpm: -0.816, fgImpact: -1.674, ftImpact: 0, to: 0.262 } }
        ]
      },
      home: {
        abbr: "IND", name: "Indiana Pacers", score: 90,
        players: [
          { name: "Pascal Siakam", min: 36, pts: 17, reb: 5, ast: 5, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 6, fga: 14, ftm: 5, fta: 6, composite: 0.14, zScores: { pts: 0.79, reb: 0.352, ast: 1.109, stl: 0.218, blk: -0.484, tpm: -0.816, fgImpact: -0.245, ftImpact: 0.329, to: -1.11 } },
          { name: "Jay Huff", min: 17, pts: 0, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.39, zScores: { pts: -1.113, reb: -0.256, ast: -0.991, stl: -0.664, blk: 1.173, tpm: -0.816, fgImpact: -0.67, ftImpact: 0, to: 0.948 } },
          { name: "Kelly Oubre Jr.", min: 20, pts: 11, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 3, fta: 4, composite: 0.08, zScores: { pts: 0.118, reb: -0.561, ast: -0.571, stl: -0.664, blk: 1.173, tpm: 0.365, fgImpact: -0.457, ftImpact: -0.269, to: 0.948 } },
          { name: "Andrew Nembhard", min: 35, pts: 23, reb: 3, ast: 4, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 7, fga: 19, ftm: 5, fta: 6, composite: 1.21, zScores: { pts: 1.461, reb: -0.256, ast: 0.689, stl: 0.218, blk: -0.484, tpm: 1.547, fgImpact: -1.179, ftImpact: 0.329, to: -1.11 } },
          { name: "Aaron Nesmith", min: 30, pts: 11, reb: 3, ast: 4, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 8, ftm: 5, fta: 6, composite: -1.77, zScores: { pts: 0.118, reb: -0.256, ast: 0.689, stl: 0.218, blk: -0.484, tpm: -0.816, fgImpact: -0.457, ftImpact: 0.329, to: -1.11 } },
          { name: "Larry Nance Jr.", min: 26, pts: 4, reb: 6, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 1, fta: 4, composite: -5.63, zScores: { pts: -0.665, reb: 0.656, ast: -0.571, stl: 0.218, blk: -0.484, tpm: -0.226, fgImpact: -0.934, ftImpact: -3.199, to: -0.424 } },
          { name: "Jalen Slawson", min: 18, pts: 3, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -3.58, zScores: { pts: -0.777, reb: 0.352, ast: -0.991, stl: -0.664, blk: -0.484, tpm: -0.816, fgImpact: 0.405, ftImpact: -0.867, to: 0.262 } },
          { name: "Jarace Walker", min: 20, pts: 6, reb: 6, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.99, zScores: { pts: -0.441, reb: 0.656, ast: 0.269, stl: 0.218, blk: -0.484, tpm: 0.365, fgImpact: 0.141, ftImpact: 0, to: 0.262 } },
          { name: "Kobe Brown", min: 15, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.92, zScores: { pts: -0.777, reb: -0.865, ast: -0.571, stl: -0.664, blk: -0.484, tpm: -0.226, fgImpact: 0.405, ftImpact: 0, to: 0.262 } },
          { name: "Quenton Jackson", min: 24, pts: 12, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: 0, zScores: { pts: 0.23, reb: -0.256, ast: -0.151, stl: -0.664, blk: -0.484, tpm: 0.956, fgImpact: 0.283, ftImpact: -0.867, to: 0.948 } },
          { name: "Braden Smith", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.29, zScores: { pts: -1.113, reb: -1.169, ast: -0.991, stl: -0.664, blk: -0.484, tpm: -0.816, fgImpact: 0, ftImpact: 0, to: 0.948 } }
        ]
      }
    },
      {
      id: "401909905",
      line: "LA Clippers 112 @ Golden State Warriors 124 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LAC", name: "LA Clippers", score: 112,
        players: [
          { name: "Derrick Jones Jr.", min: 28, pts: 9, reb: 7, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 11, ftm: 2, fta: 2, composite: -2.38, zScores: { pts: -0.106, reb: 0.96, ast: -0.571, stl: -0.664, blk: -0.484, tpm: -0.226, fgImpact: -1.462, ftImpact: 0.598, to: -0.424 } },
          { name: "Rui Hachimura", min: 30, pts: 24, reb: 7, ast: 0, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 10, fga: 16, ftm: 0, fta: 0, composite: 3.56, zScores: { pts: 1.573, reb: 0.96, ast: -0.991, stl: -0.664, blk: -0.484, tpm: 1.547, fgImpact: 2.046, ftImpact: 0, to: -0.424 } },
          { name: "Isaiah Jackson", min: 22, pts: 5, reb: 8, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: -2.87, zScores: { pts: -0.553, reb: 1.265, ast: -0.151, stl: -0.664, blk: -0.484, tpm: -0.816, fgImpact: -0.863, ftImpact: -0.867, to: 0.262 } },
          { name: "Kris Dunn", min: 27, pts: 12, reb: 2, ast: 4, stl: 7, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 8, ftm: 2, fta: 2, composite: 7.13, zScores: { pts: 0.23, reb: -0.561, ast: 0.689, stl: 5.506, blk: -0.484, tpm: -0.816, fgImpact: 1.023, ftImpact: 0.598, to: 0.948 } },
          { name: "Darius Garland", min: 33, pts: 15, reb: 0, ast: 7, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 12, ftm: 6, fta: 6, composite: 0.48, zScores: { pts: 0.566, reb: -1.169, ast: 1.949, stl: 0.218, blk: -0.484, tpm: -0.226, fgImpact: -1.056, ftImpact: 1.794, to: -1.11 } },
          { name: "Baba Miller", min: 6, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -2.77, zScores: { pts: -0.889, reb: -0.561, ast: -0.571, stl: -0.664, blk: -0.484, tpm: -0.816, fgImpact: -0.335, ftImpact: 0.598, to: 0.948 } },
          { name: "Nick Martinelli", min: 6, pts: 10, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 0.21, zScores: { pts: 0.006, reb: -0.256, ast: -0.991, stl: -0.664, blk: -0.484, tpm: 0.365, fgImpact: 1.287, ftImpact: 0, to: 0.948 } },
          { name: "Brook Lopez", min: 19, pts: 7, reb: 2, ast: 0, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -2.37, zScores: { pts: -0.33, reb: -0.561, ast: -0.991, stl: 1.099, blk: -0.484, tpm: -0.226, fgImpact: -0.457, ftImpact: 0, to: -0.424 } },
          { name: "Jalen Pickett", min: 6, pts: 0, reb: 2, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.76, zScores: { pts: -1.113, reb: -0.561, ast: 0.269, stl: -0.664, blk: -0.484, tpm: -0.816, fgImpact: -0.335, ftImpact: 0, to: 0.948 } },
          { name: "Blake Wesley", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -3.47, zScores: { pts: -0.889, reb: -1.169, ast: -0.991, stl: -0.664, blk: -0.484, tpm: -0.816, fgImpact: 0, ftImpact: 0.598, to: 0.948 } },
          { name: "Kobe Sanders", min: 30, pts: 16, reb: 3, ast: 0, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 1.03, zScores: { pts: 0.678, reb: -0.256, ast: -0.991, stl: 0.218, blk: -0.484, tpm: 1.547, fgImpact: 1.429, ftImpact: 0, to: -1.11 } },
          { name: "Cam Christie", min: 6, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.99, zScores: { pts: -0.777, reb: -0.865, ast: -0.991, stl: -0.664, blk: -0.484, tpm: -0.226, fgImpact: 0.071, ftImpact: 0, to: 0.948 } },
          { name: "Gradey Dick", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.99, zScores: { pts: -1.113, reb: -0.865, ast: -0.991, stl: -0.664, blk: -0.484, tpm: -0.816, fgImpact: -1.004, ftImpact: 0, to: 0.948 } },
          { name: "Keaton Wagler", min: 19, pts: 7, reb: 4, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 3, fta: 3, composite: -1.6, zScores: { pts: -0.33, reb: 0.048, ast: 0.689, stl: -0.664, blk: -0.484, tpm: -0.816, fgImpact: -1.198, ftImpact: 0.897, to: 0.262 } }
        ]
      },
      home: {
        abbr: "GS", name: "Golden State Warriors", score: 124,
        players: [
          { name: "Georges Niang", min: 21, pts: 3, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -5.19, zScores: { pts: -0.777, reb: -0.865, ast: -0.151, stl: -0.664, blk: -0.484, tpm: -0.226, fgImpact: -1.603, ftImpact: 0, to: -0.424 } },
          { name: "Yaxel Lendeborg", min: 34, pts: 37, reb: 4, ast: 6, stl: 1, blk: 0, to: 2, tpm: 6, fgm: 13, fga: 19, ftm: 5, fta: 6, composite: 10.24, zScores: { pts: 3.029, reb: 0.048, ast: 1.529, stl: 0.218, blk: -0.484, tpm: 2.728, fgImpact: 3.263, ftImpact: 0.329, to: -0.424 } },
          { name: "Charles Bassey", min: 20, pts: 6, reb: 10, ast: 2, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 3.02, zScores: { pts: -0.441, reb: 1.873, ast: -0.151, stl: 0.218, blk: 1.173, tpm: -0.816, fgImpact: 0.212, ftImpact: 0, to: 0.948 } },
          { name: "De'Anthony Melton", min: 28, pts: 21, reb: 6, ast: 3, stl: 2, blk: 1, to: 4, tpm: 6, fgm: 6, fga: 9, ftm: 3, fta: 4, composite: 6.53, zScores: { pts: 1.238, reb: 0.656, ast: 0.269, stl: 1.099, blk: 1.173, tpm: 2.728, fgImpact: 1.429, ftImpact: -0.269, to: -1.796 } },
          { name: "Brandin Podziemski", min: 37, pts: 17, reb: 8, ast: 8, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 14, ftm: 1, fta: 1, composite: 4.7, zScores: { pts: 0.79, reb: 1.265, ast: 2.369, stl: -0.664, blk: -0.484, tpm: 0.365, fgImpact: 0.495, ftImpact: 0.299, to: 0.262 } },
          { name: "Graham Ike", min: 6, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.05, zScores: { pts: -0.889, reb: -0.561, ast: -0.991, stl: -0.664, blk: -0.484, tpm: -0.816, fgImpact: 0.405, ftImpact: 0, to: 0.948 } },
          { name: "Gui Santos", min: 9, pts: 4, reb: 3, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.4, zScores: { pts: -0.665, reb: -0.256, ast: -0.571, stl: -0.664, blk: 1.173, tpm: -0.816, fgImpact: 0.141, ftImpact: 0, to: 0.262 } },
          { name: "Al Horford", min: 22, pts: 9, reb: 5, ast: 2, stl: 0, blk: 1, to: 3, tpm: 3, fgm: 3, fga: 7, ftm: 0, fta: 1, composite: -0.84, zScores: { pts: -0.106, reb: 0.352, ast: -0.151, stl: -0.664, blk: 1.173, tpm: 0.956, fgImpact: -0.123, ftImpact: -1.166, to: -1.11 } },
          { name: "Gary Payton II", min: 15, pts: 5, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.35, zScores: { pts: -0.553, reb: -0.561, ast: -0.151, stl: 0.218, blk: -0.484, tpm: -0.226, fgImpact: 0.141, ftImpact: 0, to: 0.262 } },
          { name: "Brandon Williams", min: 25, pts: 17, reb: 3, ast: 3, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 7, fga: 11, ftm: 1, fta: 2, composite: 2.57, zScores: { pts: 0.79, reb: -0.256, ast: 0.269, stl: -0.664, blk: 1.173, tpm: 0.365, fgImpact: 1.499, ftImpact: -0.867, to: 0.262 } },
          { name: "LJ Cryer", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.62, zScores: { pts: -1.113, reb: -1.169, ast: -0.991, stl: -0.664, blk: -0.484, tpm: -0.816, fgImpact: -0.335, ftImpact: 0, to: 0.948 } },
          { name: "Will Richard", min: 22, pts: 3, reb: 0, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.37, zScores: { pts: -0.777, reb: -1.169, ast: 0.269, stl: -0.664, blk: -0.484, tpm: -0.226, fgImpact: -0.264, ftImpact: 0, to: 0.948 } }
        ]
      }
    },
      {
      id: "401909906",
      line: "Toronto Raptors 125 @ Los Angeles Lakers 131 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TOR", name: "Toronto Raptors", score: 125,
        players: [
          { name: "RJ Barrett", min: 32, pts: 22, reb: 10, ast: 5, stl: 0, blk: 0, to: 3, tpm: 4, fgm: 9, fga: 18, ftm: 0, fta: 0, composite: 4.26, zScores: { pts: 1.35, reb: 1.873, ast: 1.109, stl: -0.664, blk: -0.484, tpm: 1.547, fgImpact: 0.636, ftImpact: 0, to: -1.11 } },
          { name: "Trayce Jackson-Davis", min: 9, pts: 5, reb: 5, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 1, composite: 0.33, zScores: { pts: -0.553, reb: 0.352, ast: -0.991, stl: 1.099, blk: -0.484, tpm: -0.816, fgImpact: 0.476, ftImpact: 0.299, to: 0.948 } },
          { name: "Scottie Barnes", min: 36, pts: 29, reb: 6, ast: 5, stl: 2, blk: 0, to: 5, tpm: 0, fgm: 11, fga: 20, ftm: 7, fta: 13, composite: -2.24, zScores: { pts: 2.133, reb: 0.656, ast: 1.109, stl: 1.099, blk: -0.484, tpm: -0.816, fgImpact: 1.447, ftImpact: -4.904, to: -2.483 } },
          { name: "Immanuel Quickley", min: 33, pts: 12, reb: 6, ast: 7, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 13, ftm: 3, fta: 3, composite: 2.55, zScores: { pts: 0.23, reb: 0.656, ast: 1.949, stl: 0.218, blk: -0.484, tpm: 0.956, fgImpact: -2.131, ftImpact: 0.897, to: 0.262 } },
          { name: "Ja'Kobe Walter", min: 33, pts: 11, reb: 4, ast: 2, stl: 1, blk: 1, to: 1, tpm: 3, fgm: 4, fga: 12, ftm: 0, fta: 0, composite: 1.57, zScores: { pts: 0.118, reb: 0.048, ast: -0.151, stl: 0.218, blk: 1.173, tpm: 0.956, fgImpact: -1.056, ftImpact: 0, to: 0.262 } },
          { name: "Kyle Anderson", min: 4, pts: 2, reb: 3, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.51, zScores: { pts: -0.889, reb: -0.256, ast: 0.269, stl: -0.664, blk: -0.484, tpm: -0.816, fgImpact: 0.071, ftImpact: 0, to: 0.262 } },
          { name: "Jamison Battle", min: 17, pts: 20, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 7, fga: 14, ftm: 2, fta: 2, composite: 2.24, zScores: { pts: 1.126, reb: 0.352, ast: -0.991, stl: -0.664, blk: -0.484, tpm: 1.547, fgImpact: 0.495, ftImpact: 0.598, to: 0.262 } },
          { name: "Collin Murray-Boyles", min: 20, pts: 4, reb: 3, ast: 1, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: -1.22, zScores: { pts: -0.665, reb: -0.256, ast: -0.571, stl: 1.981, blk: -0.484, tpm: -0.816, fgImpact: -1.268, ftImpact: 0.598, to: 0.262 } },
          { name: "Allen Graves", min: 10, pts: 3, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: -4.87, zScores: { pts: -0.777, reb: -1.169, ast: -0.991, stl: 0.218, blk: -0.484, tpm: -0.816, fgImpact: -0.934, ftImpact: -0.867, to: 0.948 } },
          { name: "Jamal Shead", min: 25, pts: 9, reb: 2, ast: 6, stl: 3, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 6, ftm: 1, fta: 1, composite: 2.81, zScores: { pts: -0.106, reb: -0.561, ast: 1.529, stl: 1.981, blk: -0.484, tpm: 0.365, fgImpact: 0.212, ftImpact: 0.299, to: -0.424 } },
          { name: "Jaden Bradley", min: 4, pts: 3, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -1.56, zScores: { pts: -0.777, reb: -0.865, ast: -0.151, stl: 0.218, blk: -0.484, tpm: -0.816, fgImpact: 0.071, ftImpact: 0.299, to: 0.948 } },
          { name: "Alijah Martin", min: 16, pts: 5, reb: 2, ast: 4, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.71, zScores: { pts: -0.553, reb: -0.561, ast: 0.689, stl: -0.664, blk: -0.484, tpm: -0.226, fgImpact: 0.141, ftImpact: 0, to: 0.948 } }
        ]
      },
      home: {
        abbr: "LAL", name: "Los Angeles Lakers", score: 131,
        players: [
          { name: "Jake LaRavia", min: 25, pts: 8, reb: 2, ast: 4, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 1.46, zScores: { pts: -0.218, reb: -0.561, ast: 0.689, stl: 0.218, blk: 1.173, tpm: 0.365, fgImpact: 0.212, ftImpact: 0, to: -0.424 } },
          { name: "Walker Kessler", min: 31, pts: 16, reb: 15, ast: 1, stl: 1, blk: 3, to: 2, tpm: 0, fgm: 6, fga: 6, ftm: 4, fta: 4, composite: 10.59, zScores: { pts: 0.678, reb: 3.394, ast: -0.571, stl: 0.218, blk: 4.488, tpm: -0.816, fgImpact: 2.433, ftImpact: 1.196, to: -0.424 } },
          { name: "Matisse Thybulle", min: 25, pts: 6, reb: 2, ast: 3, stl: 2, blk: 2, to: 1, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: 3.3, zScores: { pts: -0.441, reb: -0.561, ast: 0.269, stl: 1.099, blk: 2.83, tpm: 0.365, fgImpact: -0.528, ftImpact: 0, to: 0.262 } },
          { name: "Luka Doncic", min: 35, pts: 45, reb: 15, ast: 6, stl: 5, blk: 1, to: 7, tpm: 8, fgm: 12, fga: 23, ftm: 13, fta: 13, composite: 18.89, zScores: { pts: 3.924, reb: 3.394, ast: 1.529, stl: 3.743, blk: 1.173, tpm: 3.91, fgImpact: 1.183, ftImpact: 3.887, to: -3.855 } },
          { name: "Austin Reaves", min: 39, pts: 19, reb: 3, ast: 4, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 6, fga: 16, ftm: 5, fta: 6, composite: -1.03, zScores: { pts: 1.014, reb: -0.256, ast: 0.689, stl: -0.664, blk: -0.484, tpm: 0.365, fgImpact: -0.915, ftImpact: 0.329, to: -1.11 } },
          { name: "Jarred Vanderbilt", min: 12, pts: 4, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.5, zScores: { pts: -0.665, reb: -0.256, ast: -0.571, stl: 0.218, blk: -0.484, tpm: -0.816, fgImpact: 0.811, ftImpact: 0, to: 0.262 } },
          { name: "Sandro Mamukelashvili", min: 24, pts: 11, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 7, ftm: 1, fta: 1, composite: -0.24, zScores: { pts: 0.118, reb: -0.865, ast: -0.571, stl: -0.664, blk: -0.484, tpm: 0.365, fgImpact: 0.618, ftImpact: 0.299, to: 0.948 } },
          { name: "Collin Sexton", min: 19, pts: 14, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 10, ftm: 1, fta: 2, composite: 0.46, zScores: { pts: 0.454, reb: -0.256, ast: 0.269, stl: 0.218, blk: -0.484, tpm: -0.226, fgImpact: 1.094, ftImpact: -0.867, to: 0.262 } },
          { name: "Quentin Grimes", min: 26, pts: 7, reb: 1, ast: 3, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 4, composite: -5.69, zScores: { pts: -0.33, reb: -0.865, ast: 0.269, stl: -0.664, blk: -0.484, tpm: -0.226, fgImpact: 0.141, ftImpact: -1.734, to: -1.796 } },
          { name: "Bronny James", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.98, zScores: { pts: -1.113, reb: -1.169, ast: -0.991, stl: -0.664, blk: -0.484, tpm: -0.816, fgImpact: 0, ftImpact: 0, to: 0.262 } },
          { name: "Jaden Hardy", min: 1, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -5.04, zScores: { pts: -1.001, reb: -1.169, ast: -0.991, stl: -0.664, blk: -0.484, tpm: -0.816, fgImpact: 0, ftImpact: -0.867, to: 0.948 } },
          { name: "Cameron Carr", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.29, zScores: { pts: -1.113, reb: -1.169, ast: -0.991, stl: -0.664, blk: -0.484, tpm: -0.816, fgImpact: 0, ftImpact: 0, to: 0.948 } }
        ]
      }
    }
    ]
  },
    "2026-11-02": {
    games: [
      {
      id: "401909907",
      line: "Oklahoma City Thunder 117 @ Cleveland Cavaliers 112 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OKC", name: "Oklahoma City Thunder", score: 117,
        players: [
          { name: "Jaylin Williams", min: 20, pts: 3, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -2.7, zScores: { pts: -0.843, reb: -0.284, ast: -0.132, stl: 0.289, blk: -0.574, tpm: -0.146, fgImpact: -1.21, ftImpact: 0, to: 0.2 } },
          { name: "Isaiah Hartenstein", min: 28, pts: 5, reb: 14, ast: 4, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 1, fta: 2, composite: 1.51, zScores: { pts: -0.605, reb: 3.176, ast: 0.644, stl: 1.334, blk: -0.574, tpm: -0.811, fgImpact: -1.154, ftImpact: -0.7, to: 0.2 } },
          { name: "Kenrich Williams", min: 31, pts: 12, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 0.74, zScores: { pts: 0.228, reb: -0.284, ast: -0.52, stl: -0.755, blk: -0.574, tpm: 0.519, fgImpact: 1.233, ftImpact: 0, to: 0.897 } },
          { name: "Shai Gilgeous-Alexander", min: 39, pts: 43, reb: 3, ast: 8, stl: 2, blk: 1, to: 1, tpm: 4, fgm: 14, fga: 35, ftm: 11, fta: 12, composite: 11.08, zScores: { pts: 3.917, reb: -0.284, ast: 2.196, stl: 1.334, blk: 0.688, tpm: 1.849, fgImpact: -1.424, ftImpact: 2.608, to: 0.2 } },
          { name: "Ajay Mitchell", min: 35, pts: 20, reb: 5, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 7, fga: 16, ftm: 6, fta: 6, composite: 2.77, zScores: { pts: 1.18, reb: 0.345, ast: -0.52, stl: -0.755, blk: 0.688, tpm: -0.811, fgImpact: -0.237, ftImpact: 1.985, to: 0.897 } },
          { name: "Aday Mara", min: 20, pts: 10, reb: 9, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 0.54, zScores: { pts: -0.01, reb: 1.603, ast: -0.908, stl: -0.755, blk: 0.688, tpm: -0.811, fgImpact: 1.233, ftImpact: 0, to: -0.498 } },
          { name: "Micah Peavy", min: 16, pts: 8, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -0.65, zScores: { pts: -0.248, reb: 0.345, ast: -0.908, stl: -0.755, blk: -0.574, tpm: 0.519, fgImpact: 0.113, ftImpact: 0.662, to: 0.2 } },
          { name: "Jared McCain", min: 27, pts: 7, reb: 9, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 11, ftm: 1, fta: 1, composite: -1.92, zScores: { pts: -0.367, reb: 1.603, ast: -0.132, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -1.414, ftImpact: 0.331, to: 0.2 } },
          { name: "Josh Dix", min: 12, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3, zScores: { pts: -1.2, reb: -0.913, ast: -0.908, stl: -0.755, blk: 0.688, tpm: -0.811, fgImpact: 0, ftImpact: 0, to: 0.897 } },
          { name: "Bennett Stirtz", min: 12, pts: 9, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.78, zScores: { pts: -0.129, reb: -0.599, ast: -0.908, stl: -0.755, blk: -0.574, tpm: 1.184, fgImpact: 0.803, ftImpact: 0, to: 0.2 } }
        ]
      },
      home: {
        abbr: "CLE", name: "Cleveland Cavaliers", score: 112,
        players: [
          { name: "Jarrett Allen", min: 28, pts: 14, reb: 6, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 10, ftm: 4, fta: 6, composite: 1.21, zScores: { pts: 0.466, reb: 0.659, ast: -0.52, stl: 0.289, blk: 0.688, tpm: -0.811, fgImpact: 0.283, ftImpact: -0.739, to: 0.897 } },
          { name: "Evan Mobley", min: 33, pts: 16, reb: 7, ast: 4, stl: 1, blk: 2, to: 2, tpm: 1, fgm: 6, fga: 11, ftm: 3, fta: 4, composite: 4.54, zScores: { pts: 0.704, reb: 0.974, ast: 0.644, stl: 0.289, blk: 1.951, tpm: -0.146, fgImpact: 0.657, ftImpact: -0.039, to: -0.498 } },
          { name: "James Harden", min: 33, pts: 14, reb: 4, ast: 6, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 10, ftm: 1, fta: 3, composite: 1.57, zScores: { pts: 0.466, reb: 0.03, ast: 1.42, stl: 0.289, blk: -0.574, tpm: 1.184, fgImpact: 0.283, ftImpact: -1.732, to: 0.2 } },
          { name: "Donovan Mitchell", min: 36, pts: 17, reb: 5, ast: 11, stl: 0, blk: 0, to: 3, tpm: 4, fgm: 6, fga: 17, ftm: 1, fta: 4, composite: -0.15, zScores: { pts: 0.823, reb: 0.345, ast: 3.361, stl: -0.755, blk: -0.574, tpm: 1.849, fgImpact: -1.244, ftImpact: -2.763, to: -1.196 } },
          { name: "Meleek Thomas", min: 26, pts: 17, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 7, fga: 16, ftm: 0, fta: 0, composite: 2.21, zScores: { pts: 0.823, reb: 0.345, ast: -0.52, stl: 0.289, blk: -0.574, tpm: 1.184, fgImpact: -0.237, ftImpact: 0, to: 0.897 } },
          { name: "Mario Hezonja", min: 27, pts: 12, reb: 8, ast: 3, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 9, ftm: 1, fta: 2, composite: 3.82, zScores: { pts: 0.228, reb: 1.289, ast: 0.256, stl: 1.334, blk: -0.574, tpm: 1.184, fgImpact: -0.09, ftImpact: -0.7, to: 0.897 } },
          { name: "Thomas Bryant", min: 5, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 1, composite: -5.34, zScores: { pts: -0.724, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.203, ftImpact: -1.031, to: 0.897 } },
          { name: "Sam Merrill", min: 26, pts: 8, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: -0.02, zScores: { pts: -0.248, reb: -0.284, ast: -0.132, stl: 0.289, blk: -0.574, tpm: 0.519, fgImpact: -1.154, ftImpact: 0.662, to: 0.897 } },
          { name: "Craig Porter Jr.", min: 8, pts: 0, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.93, zScores: { pts: -1.2, reb: 0.03, ast: -0.52, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0, ftImpact: 0, to: 0.897 } },
          { name: "Tyrese Proctor", min: 19, pts: 10, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: 0.74, zScores: { pts: -0.01, reb: 0.03, ast: -0.132, stl: -0.755, blk: -0.574, tpm: 0.519, fgImpact: 0.803, ftImpact: 0.662, to: 0.2 } }
        ]
      }
    },
      {
      id: "401909908",
      line: "Detroit Pistons 124 @ Charlotte Hornets 91 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DET", name: "Detroit Pistons", score: 124,
        players: [
          { name: "Duncan Robinson", min: 32, pts: 24, reb: 2, ast: 3, stl: 3, blk: 0, to: 1, tpm: 6, fgm: 8, fga: 11, ftm: 2, fta: 2, composite: 9.19, zScores: { pts: 1.656, reb: -0.599, ast: 0.256, stl: 2.378, blk: -0.574, tpm: 3.178, fgImpact: 2.037, ftImpact: 0.662, to: 0.2 } },
          { name: "John Collins", min: 19, pts: 4, reb: 3, ast: 1, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -1.78, zScores: { pts: -0.724, reb: -0.284, ast: -0.52, stl: 0.289, blk: 0.688, tpm: -0.811, fgImpact: -0.577, ftImpact: 0.662, to: -0.498 } },
          { name: "Paul Reed", min: 28, pts: 11, reb: 5, ast: 4, stl: 2, blk: 2, to: 1, tpm: 0, fgm: 5, fga: 6, ftm: 1, fta: 2, composite: 4.62, zScores: { pts: 0.109, reb: 0.345, ast: 0.644, stl: 1.334, blk: 1.951, tpm: -0.811, fgImpact: 1.55, ftImpact: -0.7, to: 0.2 } },
          { name: "Cade Cunningham", min: 27, pts: 33, reb: 5, ast: 7, stl: 5, blk: 0, to: 3, tpm: 4, fgm: 13, fga: 20, ftm: 3, fta: 4, composite: 12.02, zScores: { pts: 2.727, reb: 0.345, ast: 1.808, stl: 4.466, blk: -0.574, tpm: 1.849, fgImpact: 2.637, ftImpact: -0.039, to: -1.196 } },
          { name: "Ausar Thompson", min: 26, pts: 14, reb: 6, ast: 4, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 7, ftm: 4, fta: 5, composite: 1.92, zScores: { pts: 0.466, reb: 0.659, ast: 0.644, stl: -0.755, blk: 0.688, tpm: -0.811, fgImpact: 1.233, ftImpact: 0.292, to: -0.498 } },
          { name: "Tolu Smith", min: 8, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.22, zScores: { pts: -1.2, reb: -0.599, ast: -0.908, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: -0.317, ftImpact: 0, to: 0.897 } },
          { name: "Ronald Holland II", min: 20, pts: 11, reb: 2, ast: 0, stl: 0, blk: 1, to: 2, tpm: 3, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: -0.55, zScores: { pts: 0.109, reb: -0.599, ast: -0.908, stl: -0.755, blk: 0.688, tpm: 1.184, fgImpact: 0.227, ftImpact: 0, to: -0.498 } },
          { name: "Isaac Jones", min: 6, pts: 2, reb: 5, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.57, zScores: { pts: -0.962, reb: 0.345, ast: -0.908, stl: -0.755, blk: 1.951, tpm: -0.811, fgImpact: 0.373, ftImpact: 0, to: 0.2 } },
          { name: "Javonte Green", min: 20, pts: 5, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.22, zScores: { pts: -0.605, reb: -0.599, ast: -0.908, stl: 0.289, blk: -0.574, tpm: -0.146, fgImpact: 0.43, ftImpact: 0, to: 0.897 } },
          { name: "Kevin Huerter", min: 20, pts: 9, reb: 2, ast: 3, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 1.49, zScores: { pts: -0.129, reb: -0.599, ast: 0.256, stl: 0.289, blk: -0.574, tpm: 1.184, fgImpact: 0.17, ftImpact: 0, to: 0.897 } },
          { name: "Chaz Lanier", min: 7, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.21, zScores: { pts: -0.605, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: 0.113, ftImpact: 0, to: 0.897 } },
          { name: "Daniss Jenkins", min: 23, pts: 2, reb: 1, ast: 7, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.28, zScores: { pts: -0.962, reb: -0.913, ast: 1.808, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.577, ftImpact: 0, to: -0.498 } },
          { name: "Ebuka Okorie", min: 6, pts: 4, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -2.88, zScores: { pts: -0.724, reb: -0.599, ast: -0.52, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: -0.837, ftImpact: 0, to: 0.897 } }
        ]
      },
      home: {
        abbr: "CHA", name: "Charlotte Hornets", score: 91,
        players: [
          { name: "Moussa Diabate", min: 24, pts: 7, reb: 9, ast: 2, stl: 3, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 1, composite: 4.76, zScores: { pts: -0.367, reb: 1.603, ast: -0.132, stl: 2.378, blk: 0.688, tpm: -0.811, fgImpact: 0.17, ftImpact: 0.331, to: 0.897 } },
          { name: "Brandon Miller", min: 31, pts: 17, reb: 1, ast: 4, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 7, fga: 18, ftm: 0, fta: 0, composite: -0.26, zScores: { pts: 0.823, reb: -0.913, ast: 0.644, stl: -0.755, blk: -0.574, tpm: 1.184, fgImpact: -0.87, ftImpact: 0, to: 0.2 } },
          { name: "Naz Reid", min: 27, pts: 13, reb: 6, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 11, ftm: 3, fta: 6, composite: -2.56, zScores: { pts: 0.347, reb: 0.659, ast: -0.132, stl: -0.755, blk: -0.574, tpm: 0.519, fgImpact: -0.724, ftImpact: -2.101, to: 0.2 } },
          { name: "Coby White", min: 16, pts: 7, reb: 0, ast: 3, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -4.79, zScores: { pts: -0.367, reb: -1.228, ast: 0.256, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: -0.78, ftImpact: 0, to: -1.196 } },
          { name: "Sion James", min: 21, pts: 11, reb: 4, ast: 3, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: -0.09, zScores: { pts: 0.109, reb: 0.03, ast: 0.256, stl: -0.755, blk: -0.574, tpm: 1.184, fgImpact: 0.86, ftImpact: 0, to: -1.196 } },
          { name: "Royce O'Neale", min: 18, pts: 2, reb: 4, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -3.72, zScores: { pts: -0.962, reb: 0.03, ast: -0.908, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: -0.95, ftImpact: 0.662, to: -0.498 } },
          { name: "Tidjane Salaun", min: 19, pts: 1, reb: 7, ast: 0, stl: 2, blk: 2, to: 1, tpm: 0, fgm: 0, fga: 5, ftm: 1, fta: 2, composite: -0.63, zScores: { pts: -1.081, reb: 0.974, ast: -0.908, stl: 1.334, blk: 1.951, tpm: -0.811, fgImpact: -1.584, ftImpact: -0.7, to: 0.2 } },
          { name: "Hannes Steinbach", min: 9, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.66, zScores: { pts: -0.962, reb: -0.599, ast: -0.52, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0.057, ftImpact: 0, to: -0.498 } },
          { name: "Ryan Kalkbrenner", min: 16, pts: 4, reb: 6, ast: 0, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -0.68, zScores: { pts: -0.724, reb: 0.659, ast: -0.908, stl: -0.755, blk: 1.951, tpm: -0.811, fgImpact: -0.26, ftImpact: 0.662, to: -0.498 } },
          { name: "Dennis Schroder", min: 23, pts: 5, reb: 2, ast: 1, stl: 2, blk: 0, to: 5, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -4.95, zScores: { pts: -0.605, reb: -0.599, ast: -0.52, stl: 1.334, blk: -0.574, tpm: -0.811, fgImpact: 0.113, ftImpact: -0.7, to: -2.592 } },
          { name: "Grayson Allen", min: 19, pts: 11, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: -1.84, zScores: { pts: 0.109, reb: -0.913, ast: -0.908, stl: -0.755, blk: -0.574, tpm: 1.184, fgImpact: -0.147, ftImpact: 0.662, to: -0.498 } },
          { name: "Christian Anderson", min: 9, pts: 8, reb: 2, ast: 2, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 3, fga: 5, ftm: 1, fta: 1, composite: -0.87, zScores: { pts: -0.248, reb: -0.599, ast: -0.132, stl: -0.755, blk: 0.688, tpm: -0.146, fgImpact: 0.487, ftImpact: 0.331, to: -0.498 } },
          { name: "Liam McNeeley", min: 9, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 1, composite: -5.09, zScores: { pts: -0.843, reb: -1.228, ast: -0.52, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.894, ftImpact: 0.331, to: 0.2 } }
        ]
      }
    },
      {
      id: "401909909",
      line: "Atlanta Hawks 108 @ Indiana Pacers 104 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ATL", name: "Atlanta Hawks", score: 108,
        players: [
          { name: "Onyeka Okongwu", min: 33, pts: 13, reb: 10, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 11, ftm: 1, fta: 2, composite: 1.87, zScores: { pts: 0.347, reb: 1.918, ast: 0.256, stl: -0.755, blk: -0.574, tpm: 0.519, fgImpact: -0.034, ftImpact: -0.7, to: 0.897 } },
          { name: "CJ McCollum", min: 32, pts: 13, reb: 9, ast: 12, stl: 1, blk: 1, to: 3, tpm: 2, fgm: 4, fga: 17, ftm: 3, fta: 4, composite: 3.34, zScores: { pts: 0.347, reb: 1.603, ast: 3.749, stl: 0.289, blk: 0.688, tpm: 0.519, fgImpact: -2.624, ftImpact: -0.039, to: -1.196 } },
          { name: "Nickeil Alexander-Walker", min: 31, pts: 34, reb: 4, ast: 4, stl: 4, blk: 0, to: 4, tpm: 9, fgm: 12, fga: 25, ftm: 1, fta: 1, composite: 10.34, zScores: { pts: 2.846, reb: 0.03, ast: 0.644, stl: 3.422, blk: -0.574, tpm: 5.173, fgImpact: 0.363, ftImpact: 0.331, to: -1.894 } },
          { name: "Luguentz Dort", min: 31, pts: 14, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 1.7, zScores: { pts: 0.466, reb: -0.599, ast: -0.908, stl: 0.289, blk: -0.574, tpm: 1.849, fgImpact: 0.283, ftImpact: 0, to: 0.897 } },
          { name: "Dyson Daniels", min: 31, pts: 6, reb: 9, ast: 4, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: 2.42, zScores: { pts: -0.486, reb: 1.603, ast: 0.644, stl: 2.378, blk: 0.688, tpm: -0.811, fgImpact: -1.097, ftImpact: 0, to: -0.498 } },
          { name: "Corey Kispert", min: 18, pts: 14, reb: 1, ast: 0, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 0.31, zScores: { pts: 0.466, reb: -0.913, ast: -0.908, stl: 0.289, blk: -0.574, tpm: 1.849, fgImpact: 0.6, ftImpact: 0, to: -0.498 } },
          { name: "Asa Newell", min: 17, pts: 0, reb: 4, ast: 1, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.34, zScores: { pts: -1.2, reb: 0.03, ast: -0.52, stl: 0.289, blk: 0.688, tpm: -0.811, fgImpact: -0.317, ftImpact: 0, to: -0.498 } },
          { name: "Zuby Ejiofor", min: 15, pts: 3, reb: 5, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.48, zScores: { pts: -0.843, reb: 0.345, ast: -0.132, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: -0.577, ftImpact: 0, to: 0.2 } },
          { name: "Aaron Wiggins", min: 24, pts: 7, reb: 3, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 12, ftm: 0, fta: 1, composite: -4.47, zScores: { pts: -0.367, reb: -0.284, ast: -0.132, stl: 0.289, blk: -0.574, tpm: -0.146, fgImpact: -1.731, ftImpact: -1.031, to: -0.498 } },
          { name: "RayJ Dennis", min: 8, pts: 4, reb: 2, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.32, zScores: { pts: -0.724, reb: -0.599, ast: -0.132, stl: -0.755, blk: 0.688, tpm: -0.811, fgImpact: 0.113, ftImpact: 0, to: 0.897 } }
        ]
      },
      home: {
        abbr: "IND", name: "Indiana Pacers", score: 104,
        players: [
          { name: "Jalen Slawson", min: 41, pts: 12, reb: 7, ast: 3, stl: 3, blk: 3, to: 2, tpm: 2, fgm: 3, fga: 11, ftm: 4, fta: 4, composite: 6.98, zScores: { pts: 0.228, reb: 0.974, ast: 0.256, stl: 2.378, blk: 3.213, tpm: 0.519, fgImpact: -1.414, ftImpact: 1.324, to: -0.498 } },
          { name: "Jarace Walker", min: 45, pts: 15, reb: 7, ast: 3, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 6, fga: 15, ftm: 2, fta: 3, composite: 1.87, zScores: { pts: 0.585, reb: 0.974, ast: 0.256, stl: 0.289, blk: 0.688, tpm: -0.146, fgImpact: -0.61, ftImpact: -0.369, to: 0.2 } },
          { name: "Jay Huff", min: 40, pts: 22, reb: 8, ast: 2, stl: 0, blk: 2, to: 4, tpm: 0, fgm: 8, fga: 14, ftm: 6, fta: 7, composite: 3.11, zScores: { pts: 1.418, reb: 1.289, ast: -0.132, stl: -0.755, blk: 1.951, tpm: -0.811, fgImpact: 1.087, ftImpact: 0.954, to: -1.894 } },
          { name: "Quenton Jackson", min: 35, pts: 20, reb: 7, ast: 3, stl: 4, blk: 2, to: 5, tpm: 1, fgm: 7, fga: 16, ftm: 5, fta: 5, composite: 6.46, zScores: { pts: 1.18, reb: 0.974, ast: 0.256, stl: 3.422, blk: 1.951, tpm: -0.146, fgImpact: -0.237, ftImpact: 1.654, to: -2.592 } },
          { name: "Braden Smith", min: 42, pts: 19, reb: 4, ast: 10, stl: 3, blk: 1, to: 5, tpm: 2, fgm: 8, fga: 13, ftm: 1, fta: 2, composite: 5.76, zScores: { pts: 1.061, reb: 0.03, ast: 2.972, stl: 2.378, blk: 0.688, tpm: 0.519, fgImpact: 1.403, ftImpact: -0.7, to: -2.592 } },
          { name: "Kobe Brown", min: 38, pts: 16, reb: 6, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 11, ftm: 2, fta: 2, composite: 2.6, zScores: { pts: 0.704, reb: 0.659, ast: -0.52, stl: 0.289, blk: -0.574, tpm: 0.519, fgImpact: 0.657, ftImpact: 0.662, to: 0.2 } }
        ]
      }
    },
      {
      id: "401909910",
      line: "Brooklyn Nets 90 @ New York Knicks 103 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BKN", name: "Brooklyn Nets", score: 90,
        players: [
          { name: "Julius Randle", min: 36, pts: 21, reb: 11, ast: 2, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 5, fga: 16, ftm: 11, fta: 15, composite: -1.69, zScores: { pts: 1.299, reb: 2.232, ast: -0.132, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: -1.617, ftImpact: -0.485, to: -1.894 } },
          { name: "Michael Porter Jr.", min: 37, pts: 18, reb: 5, ast: 2, stl: 1, blk: 1, to: 0, tpm: 4, fgm: 6, fga: 13, ftm: 2, fta: 3, composite: 4.53, zScores: { pts: 0.942, reb: 0.345, ast: -0.132, stl: 0.289, blk: 0.688, tpm: 1.849, fgImpact: 0.023, ftImpact: -0.369, to: 0.897 } },
          { name: "Chaney Johnson", min: 28, pts: 4, reb: 3, ast: 2, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: -1.36, zScores: { pts: -0.724, reb: -0.284, ast: -0.132, stl: 1.334, blk: 0.688, tpm: -0.146, fgImpact: -0.894, ftImpact: -0.7, to: -0.498 } },
          { name: "Day'Ron Sharpe", min: 22, pts: 4, reb: 6, ast: 3, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -2.11, zScores: { pts: -0.724, reb: 0.659, ast: 0.256, stl: -0.755, blk: 0.688, tpm: -0.811, fgImpact: -0.894, ftImpact: 0.662, to: -1.196 } },
          { name: "Nolan Traore", min: 24, pts: 17, reb: 3, ast: 4, stl: 1, blk: 1, to: 2, tpm: 5, fgm: 6, fga: 8, ftm: 0, fta: 0, composite: 5.78, zScores: { pts: 0.823, reb: -0.284, ast: 0.644, stl: 0.289, blk: 0.688, tpm: 2.513, fgImpact: 1.607, ftImpact: 0, to: -0.498 } },
          { name: "Noah Clowney", min: 20, pts: 2, reb: 6, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.94, zScores: { pts: -0.962, reb: 0.659, ast: -0.132, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.26, ftImpact: 0, to: 0.897 } },
          { name: "Moritz Wagner", min: 20, pts: 6, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 7, ftm: 1, fta: 1, composite: -1.57, zScores: { pts: -0.486, reb: -0.913, ast: -0.132, stl: 0.289, blk: -0.574, tpm: -0.146, fgImpact: -0.837, ftImpact: 0.331, to: 0.897 } },
          { name: "Keon Ellis", min: 25, pts: 5, reb: 1, ast: 0, stl: 1, blk: 3, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 2, composite: -0.76, zScores: { pts: -0.605, reb: -0.913, ast: -0.908, stl: 0.289, blk: 3.213, tpm: -0.146, fgImpact: -0.52, ftImpact: -2.062, to: 0.897 } },
          { name: "Mikel Brown Jr.", min: 27, pts: 13, reb: 2, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 13, ftm: 2, fta: 2, composite: -1.97, zScores: { pts: 0.347, reb: -0.599, ast: 0.256, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: -0.667, ftImpact: 0.662, to: -0.498 } }
        ]
      },
      home: {
        abbr: "NY", name: "New York Knicks", score: 103,
        players: [
          { name: "OG Anunoby", min: 38, pts: 18, reb: 4, ast: 2, stl: 2, blk: 1, to: 3, tpm: 3, fgm: 4, fga: 10, ftm: 7, fta: 8, composite: 3.73, zScores: { pts: 0.942, reb: 0.03, ast: -0.132, stl: 1.334, blk: 0.688, tpm: 1.184, fgImpact: -0.407, ftImpact: 1.285, to: -1.196 } },
          { name: "Karl-Anthony Towns", min: 35, pts: 11, reb: 16, ast: 5, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 4, fga: 11, ftm: 2, fta: 3, composite: 0.48, zScores: { pts: 0.109, reb: 3.805, ast: 1.032, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: -0.724, ftImpact: -0.369, to: -1.894 } },
          { name: "Josh Hart", min: 27, pts: 8, reb: 6, ast: 7, stl: 3, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 3.52, zScores: { pts: -0.248, reb: 0.659, ast: 1.808, stl: 2.378, blk: -0.574, tpm: 0.519, fgImpact: 0.17, ftImpact: 0, to: -1.196 } },
          { name: "Mikal Bridges", min: 16, pts: 6, reb: 2, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 7, ftm: 4, fta: 4, composite: -1.83, zScores: { pts: -0.486, reb: -0.599, ast: -0.908, stl: 0.289, blk: 0.688, tpm: -0.811, fgImpact: -1.527, ftImpact: 1.324, to: 0.2 } },
          { name: "Jalen Brunson", min: 34, pts: 19, reb: 2, ast: 6, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 16, ftm: 3, fta: 6, composite: -0.43, zScores: { pts: 1.061, reb: -0.599, ast: 1.42, stl: -0.755, blk: -0.574, tpm: 1.849, fgImpact: -0.927, ftImpact: -2.101, to: 0.2 } },
          { name: "Mohamed Diawara", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -1.2, reb: -0.913, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.317, ftImpact: 0, to: 0.897 } },
          { name: "Andre Drummond", min: 13, pts: 4, reb: 9, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -1, zScores: { pts: -0.724, reb: 1.603, ast: -0.908, stl: -0.755, blk: 0.688, tpm: -0.811, fgImpact: -0.26, ftImpact: 0.662, to: -0.498 } },
          { name: "Jordan Clarkson", min: 11, pts: 7, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -1.33, zScores: { pts: -0.367, reb: -1.228, ast: -0.908, stl: -0.755, blk: 0.688, tpm: -0.146, fgImpact: 0.487, ftImpact: 0, to: 0.897 } },
          { name: "Landry Shamet", min: 30, pts: 22, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 8, ftm: 6, fta: 6, composite: 4.99, zScores: { pts: 1.418, reb: -0.913, ast: -0.52, stl: -0.755, blk: -0.574, tpm: 1.849, fgImpact: 1.607, ftImpact: 1.985, to: 0.897 } },
          { name: "Jose Alvarado", min: 9, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.63, zScores: { pts: -1.2, reb: -1.228, ast: -0.908, stl: -0.755, blk: 0.688, tpm: -0.811, fgImpact: -0.317, ftImpact: 0, to: 0.897 } },
          { name: "Miles McBride", min: 17, pts: 6, reb: 1, ast: 2, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.06, zScores: { pts: -0.486, reb: -0.913, ast: -0.132, stl: 1.334, blk: -0.574, tpm: 0.519, fgImpact: 0.113, ftImpact: 0, to: 0.2 } },
          { name: "Tyler Kolek", min: 5, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -0.962, reb: -0.913, ast: -0.52, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.26, ftImpact: 0, to: 0.897 } }
        ]
      }
    },
      {
      id: "401909911",
      line: "Washington Wizards 103 @ Orlando Magic 94 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WSH", name: "Washington Wizards", score: 103,
        players: [
          { name: "Anthony Davis", min: 34, pts: 27, reb: 9, ast: 1, stl: 4, blk: 0, to: 5, tpm: 1, fgm: 12, fga: 17, ftm: 2, fta: 2, composite: 6.76, zScores: { pts: 2.013, reb: 1.603, ast: -0.52, stl: 3.422, blk: -0.574, tpm: -0.146, fgImpact: 2.897, ftImpact: 0.662, to: -2.592 } },
          { name: "AJ Dybantsa", min: 33, pts: 21, reb: 5, ast: 2, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 7, fga: 17, ftm: 6, fta: 6, composite: 4.1, zScores: { pts: 1.299, reb: 0.345, ast: -0.132, stl: 2.378, blk: -0.574, tpm: -0.146, fgImpact: -0.554, ftImpact: 1.985, to: -0.498 } },
          { name: "Kyshawn George", min: 37, pts: 22, reb: 4, ast: 5, stl: 1, blk: 1, to: 1, tpm: 4, fgm: 9, fga: 15, ftm: 0, fta: 1, composite: 5.93, zScores: { pts: 1.418, reb: 0.03, ast: 1.032, stl: 0.289, blk: 0.688, tpm: 1.849, fgImpact: 1.46, ftImpact: -1.031, to: 0.2 } },
          { name: "Deandre Ayton", min: 24, pts: 4, reb: 6, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.33, zScores: { pts: -0.724, reb: 0.659, ast: -0.132, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0.113, ftImpact: 0, to: 0.897 } },
          { name: "Trae Young", min: 34, pts: 15, reb: 3, ast: 9, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 12, ftm: 3, fta: 5, composite: 0.5, zScores: { pts: 0.585, reb: -0.284, ast: 2.584, stl: 0.289, blk: -0.574, tpm: 0.519, fgImpact: -0.35, ftImpact: -1.07, to: -1.196 } },
          { name: "Bub Carrington", min: 19, pts: 3, reb: 4, ast: 4, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: 0.19, zScores: { pts: -0.843, reb: 0.03, ast: 0.644, stl: -0.755, blk: 0.688, tpm: -0.146, fgImpact: 0.373, ftImpact: 0, to: 0.2 } },
          { name: "Bilal Coulibaly", min: 33, pts: 7, reb: 1, ast: 2, stl: 1, blk: 3, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: 1.96, zScores: { pts: -0.367, reb: -0.913, ast: -0.132, stl: 0.289, blk: 3.213, tpm: -0.811, fgImpact: 0.487, ftImpact: -0.7, to: 0.897 } },
          { name: "Will Riley", min: 4, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.19, zScores: { pts: -1.2, reb: -1.228, ast: -0.52, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0, ftImpact: 0, to: 0.897 } },
          { name: "Tre Johnson", min: 22, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -4.47, zScores: { pts: -0.724, reb: -0.284, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.577, ftImpact: 0.662, to: -0.498 } }
        ]
      },
      home: {
        abbr: "ORL", name: "Orlando Magic", score: 94,
        players: [
          { name: "Jamal Cain", min: 25, pts: 10, reb: 3, ast: 1, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: -2.34, zScores: { pts: -0.01, reb: -0.284, ast: -0.52, stl: -0.755, blk: -0.574, tpm: 0.519, fgImpact: 1.177, ftImpact: 0, to: -1.894 } },
          { name: "Franz Wagner", min: 38, pts: 24, reb: 3, ast: 6, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 10, fga: 18, ftm: 3, fta: 3, composite: 3.36, zScores: { pts: 1.656, reb: -0.284, ast: 1.42, stl: 0.289, blk: -0.574, tpm: -0.146, fgImpact: 1.2, ftImpact: 0.993, to: -1.196 } },
          { name: "Wendell Carter Jr.", min: 34, pts: 6, reb: 9, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 0.4, zScores: { pts: -0.486, reb: 1.603, ast: -0.908, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: 0.43, ftImpact: 0.662, to: 0.2 } },
          { name: "Desmond Bane", min: 36, pts: 20, reb: 3, ast: 3, stl: 1, blk: 0, to: 4, tpm: 4, fgm: 8, fga: 17, ftm: 0, fta: 0, composite: 0.96, zScores: { pts: 1.18, reb: -0.284, ast: 0.256, stl: 0.289, blk: -0.574, tpm: 1.849, fgImpact: 0.136, ftImpact: 0, to: -1.894 } },
          { name: "Jase Richardson", min: 29, pts: 9, reb: 1, ast: 5, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 8, ftm: 3, fta: 3, composite: 0.32, zScores: { pts: -0.129, reb: -0.913, ast: 1.032, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: -0.464, ftImpact: 0.993, to: 0.897 } },
          { name: "Tristan da Silva", min: 32, pts: 10, reb: 4, ast: 3, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 4, fga: 14, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -0.01, reb: 0.03, ast: 0.256, stl: -0.755, blk: -0.574, tpm: 0.519, fgImpact: -1.674, ftImpact: 0, to: -1.894 } },
          { name: "Nikola Vucevic", min: 14, pts: 7, reb: 6, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 0.63, zScores: { pts: -0.367, reb: 0.659, ast: -0.52, stl: -0.755, blk: 0.688, tpm: -0.146, fgImpact: 0.17, ftImpact: 0, to: 0.897 } },
          { name: "Jevon Carter", min: 18, pts: 5, reb: 1, ast: 4, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -2.29, zScores: { pts: -0.605, reb: -0.913, ast: 0.644, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: -0.837, ftImpact: 0, to: 0.897 } },
          { name: "Alex Morales", min: 14, pts: 3, reb: 2, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -2.85, zScores: { pts: -0.843, reb: -0.599, ast: -0.908, stl: 1.334, blk: -0.574, tpm: -0.811, fgImpact: 0.057, ftImpact: -0.7, to: 0.2 } }
        ]
      }
    },
      {
      id: "401909912",
      line: "Chicago Bulls 107 @ Philadelphia 76ers 126 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHI", name: "Chicago Bulls", score: 107,
        players: [
          { name: "Jalen Smith", min: 28, pts: 13, reb: 7, ast: 4, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 6, fga: 10, ftm: 0, fta: 1, composite: 1.33, zScores: { pts: 0.347, reb: 0.974, ast: 0.644, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: 0.973, ftImpact: -1.031, to: 0.897 } },
          { name: "Matas Buzelis", min: 23, pts: 4, reb: 3, ast: 2, stl: 0, blk: 1, to: 5, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -4.81, zScores: { pts: -0.724, reb: -0.284, ast: -0.132, stl: -0.755, blk: 0.688, tpm: -0.811, fgImpact: -0.203, ftImpact: 0, to: -2.592 } },
          { name: "Caleb Wilson", min: 34, pts: 24, reb: 7, ast: 4, stl: 4, blk: 0, to: 2, tpm: 4, fgm: 9, fga: 17, ftm: 2, fta: 3, composite: 7.93, zScores: { pts: 1.656, reb: 0.974, ast: 0.644, stl: 3.422, blk: -0.574, tpm: 1.849, fgImpact: 0.827, ftImpact: -0.369, to: -0.498 } },
          { name: "Norman Powell", min: 29, pts: 18, reb: 3, ast: 0, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 13, ftm: 7, fta: 11, composite: -1.22, zScores: { pts: 0.942, reb: -0.284, ast: -0.908, stl: 1.334, blk: -0.574, tpm: -0.146, fgImpact: -0.667, ftImpact: -1.809, to: 0.897 } },
          { name: "Josh Giddey", min: 32, pts: 13, reb: 4, ast: 10, stl: 1, blk: 2, to: 3, tpm: 2, fgm: 5, fga: 15, ftm: 1, fta: 2, composite: 2.91, zScores: { pts: 0.347, reb: 0.03, ast: 2.972, stl: 0.289, blk: 1.951, tpm: 0.519, fgImpact: -1.3, ftImpact: -0.7, to: -1.196 } },
          { name: "Zach Collins", min: 10, pts: 2, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.3, zScores: { pts: -0.962, reb: -0.284, ast: -0.908, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: 0.057, ftImpact: 0, to: 0.897 } },
          { name: "Isaac Okoro", min: 21, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 6, ftm: 4, fta: 4, composite: -4.37, zScores: { pts: -0.724, reb: -0.913, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -1.9, ftImpact: 1.324, to: 0.897 } },
          { name: "Leonard Miller", min: 9, pts: 2, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.08, zScores: { pts: -0.962, reb: -0.284, ast: -0.908, stl: -0.755, blk: 0.688, tpm: -0.811, fgImpact: 0.057, ftImpact: 0, to: 0.897 } },
          { name: "Tobe Awaka", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3, zScores: { pts: -1.2, reb: -0.913, ast: -0.908, stl: -0.755, blk: 0.688, tpm: -0.811, fgImpact: 0, ftImpact: 0, to: 0.897 } },
          { name: "Noa Essengue", min: 14, pts: 8, reb: 6, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 1, fta: 2, composite: -1.36, zScores: { pts: -0.248, reb: 0.659, ast: -0.908, stl: -0.755, blk: 0.688, tpm: -0.146, fgImpact: -0.147, ftImpact: -0.7, to: 0.2 } },
          { name: "Buddy Hield", min: 12, pts: 6, reb: 1, ast: 3, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 1, fta: 1, composite: -1.03, zScores: { pts: -0.486, reb: -0.913, ast: 0.256, stl: -0.755, blk: 0.688, tpm: -0.146, fgImpact: -0.203, ftImpact: 0.331, to: 0.2 } },
          { name: "Tre Jones", min: 19, pts: 8, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 4, composite: -1.77, zScores: { pts: -0.248, reb: -0.284, ast: 0.256, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: 0.803, ftImpact: -1.401, to: 0.2 } },
          { name: "Jordan Hawkins", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -4.31, zScores: { pts: -0.962, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.633, ftImpact: 0.662, to: 0.897 } },
          { name: "Jaylin Sellers", min: 2, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -4.55, zScores: { pts: -0.843, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0.373, ftImpact: -0.7, to: 0.897 } }
        ]
      },
      home: {
        abbr: "PHI", name: "Philadelphia 76ers", score: 126,
        players: [
          { name: "LeBron James", min: 31, pts: 15, reb: 7, ast: 9, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 6, fga: 13, ftm: 3, fta: 5, composite: 0.8, zScores: { pts: 0.585, reb: 0.974, ast: 2.584, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: 0.023, ftImpact: -1.07, to: -1.196 } },
          { name: "Joel Embiid", min: 25, pts: 15, reb: 8, ast: 3, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 11, ftm: 5, fta: 6, composite: -0.62, zScores: { pts: 0.585, reb: 1.289, ast: 0.256, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.034, ftImpact: 0.623, to: -1.196 } },
          { name: "Jaylen Brown", min: 33, pts: 25, reb: 11, ast: 5, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 9, fga: 15, ftm: 3, fta: 4, composite: 8.92, zScores: { pts: 1.775, reb: 2.232, ast: 1.032, stl: 0.289, blk: -0.574, tpm: 1.849, fgImpact: 1.46, ftImpact: -0.039, to: 0.897 } },
          { name: "Tyrese Maxey", min: 36, pts: 26, reb: 4, ast: 11, stl: 2, blk: 2, to: 4, tpm: 1, fgm: 10, fga: 15, ftm: 5, fta: 6, composite: 9.3, zScores: { pts: 1.894, reb: 0.03, ast: 3.361, stl: 1.334, blk: 1.951, tpm: -0.146, fgImpact: 2.15, ftImpact: 0.623, to: -1.894 } },
          { name: "VJ Edgecombe", min: 33, pts: 21, reb: 3, ast: 5, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 9, fga: 12, ftm: 1, fta: 3, composite: 4.42, zScores: { pts: 1.299, reb: -0.284, ast: 1.032, stl: 0.289, blk: 0.688, tpm: 0.519, fgImpact: 2.41, ftImpact: -1.732, to: 0.2 } },
          { name: "Dean Wade", min: 23, pts: 8, reb: 2, ast: 1, stl: 2, blk: 1, to: 1, tpm: 2, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 2.18, zScores: { pts: -0.248, reb: -0.599, ast: -0.52, stl: 1.334, blk: 0.688, tpm: 0.519, fgImpact: 0.803, ftImpact: 0, to: 0.2 } },
          { name: "Jabari Walker", min: 2, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.51, zScores: { pts: -1.2, reb: -1.228, ast: -0.52, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.317, ftImpact: 0, to: 0.897 } },
          { name: "Justin Edwards", min: 2, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.65, zScores: { pts: -0.962, reb: -0.913, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0.373, ftImpact: 0, to: 0.897 } },
          { name: "Adem Bona", min: 14, pts: 3, reb: 6, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -3.74, zScores: { pts: -0.843, reb: 0.659, ast: -0.908, stl: -0.755, blk: 0.688, tpm: -0.811, fgImpact: -0.577, ftImpact: -0.7, to: -0.498 } },
          { name: "Kentavious Caldwell-Pope", min: 13, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.19, zScores: { pts: -0.843, reb: -0.913, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: 0.057, ftImpact: 0, to: 0.897 } },
          { name: "Anfernee Simons", min: 24, pts: 6, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 11, ftm: 1, fta: 1, composite: -3.96, zScores: { pts: -0.486, reb: -0.599, ast: -0.52, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: -2.104, ftImpact: 0.331, to: 0.897 } },
          { name: "Labaron Philon Jr.", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.9, zScores: { pts: -1.2, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.317, ftImpact: 0, to: 0.897 } },
          { name: "Rayan Rupert", min: 2, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.34, zScores: { pts: -0.962, reb: -0.599, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0.373, ftImpact: 0, to: 0.897 } }
        ]
      }
    },
      {
      id: "401909913",
      line: "Sacramento Kings 115 @ Dallas Mavericks 100 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SAC", name: "Sacramento Kings", score: 115,
        players: [
          { name: "Domantas Sabonis", min: 31, pts: 9, reb: 7, ast: 4, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 4, fga: 4, ftm: 1, fta: 2, composite: -0.71, zScores: { pts: -0.129, reb: 0.974, ast: 0.644, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: 1.494, ftImpact: -0.7, to: -1.894 } },
          { name: "De'Andre Hunter", min: 36, pts: 6, reb: 7, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 13, ftm: 0, fta: 0, composite: -4.33, zScores: { pts: -0.486, reb: 0.974, ast: -0.132, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -2.047, ftImpact: 0, to: -0.498 } },
          { name: "Precious Achiuwa", min: 27, pts: 6, reb: 10, ast: 3, stl: 2, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 3, composite: 4.42, zScores: { pts: -0.486, reb: 1.918, ast: 0.256, stl: 1.334, blk: 1.951, tpm: -0.811, fgImpact: 0.43, ftImpact: -0.369, to: 0.2 } },
          { name: "Zach LaVine", min: 28, pts: 23, reb: 4, ast: 1, stl: 0, blk: 0, to: 3, tpm: 5, fgm: 8, fga: 14, ftm: 2, fta: 2, composite: 2.78, zScores: { pts: 1.537, reb: 0.03, ast: -0.52, stl: -0.755, blk: -0.574, tpm: 2.513, fgImpact: 1.087, ftImpact: 0.662, to: -1.196 } },
          { name: "Darius Acuff Jr.", min: 37, pts: 25, reb: 5, ast: 6, stl: 1, blk: 0, to: 5, tpm: 2, fgm: 10, fga: 21, ftm: 3, fta: 4, composite: 1.39, zScores: { pts: 1.775, reb: 0.345, ast: 1.42, stl: 0.289, blk: -0.574, tpm: 0.519, fgImpact: 0.25, ftImpact: -0.039, to: -2.592 } },
          { name: "Leaky Black", min: 25, pts: 12, reb: 3, ast: 1, stl: 4, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 5.56, zScores: { pts: 0.228, reb: -0.284, ast: -0.52, stl: 3.422, blk: -0.574, tpm: 1.849, fgImpact: 0.543, ftImpact: 0, to: 0.897 } },
          { name: "Malik Monk", min: 30, pts: 24, reb: 1, ast: 7, stl: 0, blk: 1, to: 2, tpm: 5, fgm: 9, fga: 14, ftm: 1, fta: 2, composite: 5.58, zScores: { pts: 1.656, reb: -0.913, ast: 1.808, stl: -0.755, blk: 0.688, tpm: 2.513, fgImpact: 1.777, ftImpact: -0.7, to: -0.498 } },
          { name: "Daeqwon Plowden", min: 3, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -5.48, zScores: { pts: -1.081, reb: -0.913, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.633, ftImpact: -0.7, to: 0.897 } },
          { name: "Nique Clifford", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -1.2, reb: -0.913, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.317, ftImpact: 0, to: 0.897 } },
          { name: "Emanuel Sharp", min: 20, pts: 9, reb: 3, ast: 1, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: 3.25, zScores: { pts: -0.129, reb: -0.284, ast: -0.52, stl: 0.289, blk: 0.688, tpm: 1.184, fgImpact: 1.12, ftImpact: 0, to: 0.897 } }
        ]
      },
      home: {
        abbr: "DAL", name: "Dallas Mavericks", score: 100,
        players: [
          { name: "Caleb Martin", min: 21, pts: 5, reb: 6, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -1.73, zScores: { pts: -0.605, reb: 0.659, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: -0.26, ftImpact: 0.662, to: 0.2 } },
          { name: "Daniel Gafford", min: 26, pts: 20, reb: 7, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 9, fga: 10, ftm: 2, fta: 2, composite: 5.32, zScores: { pts: 1.18, reb: 0.974, ast: -0.908, stl: 0.289, blk: 0.688, tpm: -0.811, fgImpact: 3.044, ftImpact: 0.662, to: 0.2 } },
          { name: "P.J. Washington", min: 38, pts: 12, reb: 5, ast: 1, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 9, ftm: 6, fta: 8, composite: -0.71, zScores: { pts: 0.228, reb: 0.345, ast: -0.52, stl: 1.334, blk: -0.574, tpm: 0.519, fgImpact: -1.47, ftImpact: -0.077, to: -0.498 } },
          { name: "Cooper Flagg", min: 40, pts: 17, reb: 4, ast: 6, stl: 2, blk: 0, to: 6, tpm: 0, fgm: 3, fga: 19, ftm: 11, fta: 11, composite: -1.38, zScores: { pts: 0.823, reb: 0.03, ast: 1.42, stl: 1.334, blk: -0.574, tpm: -0.811, fgImpact: -3.948, ftImpact: 3.64, to: -3.289 } },
          { name: "Max Christie", min: 8, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -5.19, zScores: { pts: -1.2, reb: -0.599, ast: -0.908, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: -1.584, ftImpact: 0, to: 0.2 } },
          { name: "Naji Marshall", min: 24, pts: 5, reb: 2, ast: 7, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 9, ftm: 1, fta: 2, composite: -2.12, zScores: { pts: -0.605, reb: -0.599, ast: 1.808, stl: 1.334, blk: -0.574, tpm: -0.811, fgImpact: -1.47, ftImpact: -0.7, to: -0.498 } },
          { name: "Morez Johnson Jr.", min: 17, pts: 13, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 5, ftm: 3, fta: 6, composite: -1.2, zScores: { pts: 0.347, reb: -0.599, ast: -0.52, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: 1.867, ftImpact: -2.101, to: 0.897 } },
          { name: "Tobi Lawal", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.97, zScores: { pts: -0.962, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0.373, ftImpact: 0, to: 0.897 } },
          { name: "Zaccharie Risacher", min: 19, pts: 0, reb: 5, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.92, zScores: { pts: -1.2, reb: 0.345, ast: -0.52, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: -0.95, ftImpact: 0, to: -0.498 } },
          { name: "Moussa Cisse", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -1.2, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0, ftImpact: 0, to: 0.897 } },
          { name: "Marcus Sasser", min: 19, pts: 4, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.98, zScores: { pts: -0.724, reb: -0.913, ast: -0.52, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0.113, ftImpact: 0, to: 0.2 } },
          { name: "Walter Clayton Jr.", min: 24, pts: 20, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 9, ftm: 4, fta: 4, composite: 5.21, zScores: { pts: 1.18, reb: -0.913, ast: -0.132, stl: 0.289, blk: -0.574, tpm: 1.849, fgImpact: 1.29, ftImpact: 1.324, to: 0.897 } },
          { name: "Jett Howard", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.97, zScores: { pts: -0.962, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0.373, ftImpact: 0, to: 0.897 } }
        ]
      }
    },
      {
      id: "401909914",
      line: "New Orleans Pelicans 135 @ Memphis Grizzlies 134 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "NO", name: "New Orleans Pelicans", score: 135,
        players: [
          { name: "Herbert Jones", min: 28, pts: 9, reb: 4, ast: 3, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 0.09, zScores: { pts: -0.129, reb: 0.03, ast: 0.256, stl: 0.289, blk: -0.574, tpm: 1.184, fgImpact: -0.464, ftImpact: 0, to: -0.498 } },
          { name: "Zion Williamson", min: 35, pts: 25, reb: 11, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 9, fga: 15, ftm: 7, fta: 9, composite: 5.12, zScores: { pts: 1.775, reb: 2.232, ast: 0.644, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 1.46, ftImpact: 0.254, to: 0.897 } },
          { name: "Trey Murphy III", min: 40, pts: 18, reb: 5, ast: 5, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 11, ftm: 5, fta: 5, composite: 4.69, zScores: { pts: 0.942, reb: 0.345, ast: 1.032, stl: -0.755, blk: -0.574, tpm: 1.184, fgImpact: -0.034, ftImpact: 1.654, to: 0.897 } },
          { name: "Karlo Matkovic", min: 29, pts: 25, reb: 6, ast: 1, stl: 2, blk: 1, to: 1, tpm: 5, fgm: 9, fga: 13, ftm: 2, fta: 4, composite: 7.34, zScores: { pts: 1.775, reb: 0.659, ast: -0.52, stl: 1.334, blk: 0.688, tpm: 2.513, fgImpact: 2.094, ftImpact: -1.401, to: 0.2 } },
          { name: "Jeremiah Fears", min: 38, pts: 12, reb: 4, ast: 7, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 5, fga: 17, ftm: 2, fta: 2, composite: -3.24, zScores: { pts: 0.228, reb: 0.03, ast: 1.808, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -1.934, ftImpact: 0.662, to: -1.894 } },
          { name: "Saddiq Bey", min: 36, pts: 18, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 7, fga: 16, ftm: 2, fta: 2, composite: 2.32, zScores: { pts: 0.942, reb: 0.345, ast: -0.52, stl: 0.289, blk: -0.574, tpm: 0.519, fgImpact: -0.237, ftImpact: 0.662, to: 0.897 } },
          { name: "Trendon Watford", min: 16, pts: 4, reb: 4, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -0.79, zScores: { pts: -0.724, reb: 0.03, ast: -0.52, stl: -0.755, blk: 0.688, tpm: -0.811, fgImpact: -0.26, ftImpact: 0.662, to: 0.897 } },
          { name: "Derik Queen", min: 24, pts: 20, reb: 7, ast: 5, stl: 2, blk: 1, to: 1, tpm: 1, fgm: 7, fga: 13, ftm: 5, fta: 6, composite: 6.6, zScores: { pts: 1.18, reb: 0.974, ast: 1.032, stl: 1.334, blk: 0.688, tpm: -0.146, fgImpact: 0.713, ftImpact: 0.623, to: 0.2 } },
          { name: "Bryce McGowens", min: 6, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.54, zScores: { pts: -1.2, reb: -0.913, ast: -0.908, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: -0.317, ftImpact: 0, to: 0.897 } },
          { name: "Bennedict Mathurin", min: 13, pts: 4, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.95, zScores: { pts: -0.724, reb: -1.228, ast: -0.908, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: 0.113, ftImpact: 0, to: 0.897 } }
        ]
      },
      home: {
        abbr: "MEM", name: "Memphis Grizzlies", score: 134,
        players: [
          { name: "Cedric Coward", min: 31, pts: 10, reb: 9, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 2, fta: 4, composite: 0.71, zScores: { pts: -0.01, reb: 1.603, ast: 0.256, stl: -0.755, blk: -0.574, tpm: 0.519, fgImpact: 0.17, ftImpact: -1.401, to: 0.897 } },
          { name: "Cameron Boozer", min: 38, pts: 18, reb: 9, ast: 5, stl: 0, blk: 2, to: 3, tpm: 2, fgm: 5, fga: 11, ftm: 6, fta: 7, composite: 5.02, zScores: { pts: 0.942, reb: 1.603, ast: 1.032, stl: -0.755, blk: 1.951, tpm: 0.519, fgImpact: -0.034, ftImpact: 0.954, to: -1.196 } },
          { name: "Jaylen Wells", min: 34, pts: 16, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 11, ftm: 1, fta: 1, composite: 3.46, zScores: { pts: 0.704, reb: -0.284, ast: 0.256, stl: 0.289, blk: -0.574, tpm: 1.184, fgImpact: 0.657, ftImpact: 0.331, to: 0.897 } },
          { name: "Zach Edey", min: 19, pts: 6, reb: 9, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: 1.32, zScores: { pts: -0.486, reb: 1.603, ast: -0.52, stl: -0.755, blk: 1.951, tpm: -0.811, fgImpact: -0.52, ftImpact: 0.662, to: 0.2 } },
          { name: "Ty Jerome", min: 37, pts: 40, reb: 5, ast: 5, stl: 2, blk: 0, to: 4, tpm: 5, fgm: 14, fga: 22, ftm: 7, fta: 8, composite: 10.29, zScores: { pts: 3.56, reb: 0.345, ast: 1.032, stl: 1.334, blk: -0.574, tpm: 2.513, fgImpact: 2.693, ftImpact: 1.285, to: -1.894 } },
          { name: "Jerami Grant", min: 24, pts: 11, reb: 4, ast: 2, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: 0.19, zScores: { pts: 0.109, reb: 0.03, ast: -0.132, stl: -0.755, blk: 0.688, tpm: 0.519, fgImpact: 0.227, ftImpact: -0.7, to: 0.2 } },
          { name: "Kris Murray", min: 19, pts: 0, reb: 4, ast: 1, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: 0, zScores: { pts: -1.2, reb: 0.03, ast: -0.52, stl: 0.289, blk: 1.951, tpm: -0.811, fgImpact: -0.633, ftImpact: 0, to: 0.897 } },
          { name: "GG Jackson", min: 16, pts: 6, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -5.34, zScores: { pts: -0.486, reb: -1.228, ast: -0.52, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.464, ftImpact: 0, to: -0.498 } },
          { name: "Isaiah Stewart", min: 28, pts: 14, reb: 5, ast: 2, stl: 0, blk: 2, to: 2, tpm: 2, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 2.87, zScores: { pts: 0.466, reb: 0.345, ast: -0.132, stl: -0.755, blk: 1.951, tpm: 0.519, fgImpact: 0.973, ftImpact: 0, to: -0.498 } },
          { name: "Cam Spencer", min: 19, pts: 13, reb: 1, ast: 7, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 7, ftm: 3, fta: 3, composite: 0.77, zScores: { pts: 0.347, reb: -0.913, ast: 1.808, stl: -0.755, blk: -0.574, tpm: 0.519, fgImpact: 0.543, ftImpact: 0.993, to: -1.196 } }
        ]
      }
    },
      {
      id: "401909915",
      line: "Milwaukee Bucks 100 @ Minnesota Timberwolves 112 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIL", name: "Milwaukee Bucks", score: 100,
        players: [
          { name: "Kyle Kuzma", min: 22, pts: 2, reb: 2, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -2.71, zScores: { pts: -0.962, reb: -0.599, ast: 0.256, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: -1.21, ftImpact: 0, to: 0.897 } },
          { name: "Jaime Jaquez Jr.", min: 28, pts: 19, reb: 8, ast: 2, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 8, fga: 17, ftm: 1, fta: 1, composite: 1.72, zScores: { pts: 1.061, reb: 1.289, ast: -0.132, stl: 0.289, blk: -0.574, tpm: 0.519, fgImpact: 0.136, ftImpact: 0.331, to: -1.196 } },
          { name: "Myles Turner", min: 31, pts: 13, reb: 5, ast: 2, stl: 0, blk: 5, to: 1, tpm: 3, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 7.21, zScores: { pts: 0.347, reb: 0.345, ast: -0.132, stl: -0.755, blk: 5.738, tpm: 1.184, fgImpact: 0.283, ftImpact: 0, to: 0.2 } },
          { name: "Tyler Herro", min: 31, pts: 21, reb: 6, ast: 3, stl: 3, blk: 0, to: 2, tpm: 4, fgm: 8, fga: 18, ftm: 1, fta: 2, composite: 4.49, zScores: { pts: 1.299, reb: 0.659, ast: 0.256, stl: 2.378, blk: -0.574, tpm: 1.849, fgImpact: -0.18, ftImpact: -0.7, to: -0.498 } },
          { name: "Brayden Burries", min: 26, pts: 9, reb: 9, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 15, ftm: 0, fta: 0, composite: -2.31, zScores: { pts: -0.129, reb: 1.603, ast: -0.52, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: -1.991, ftImpact: 0, to: 0.2 } },
          { name: "Nate Ament", min: 8, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -3.45, zScores: { pts: -0.724, reb: -0.913, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0.373, ftImpact: 0.662, to: 0.2 } },
          { name: "Jericho Sims", min: 15, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -1.2, reb: -0.599, ast: -0.52, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0, ftImpact: 0, to: 0.897 } },
          { name: "Kel'el Ware", min: 17, pts: 2, reb: 9, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -0.89, zScores: { pts: -0.962, reb: 1.603, ast: -0.908, stl: -0.755, blk: 1.951, tpm: -0.811, fgImpact: -1.21, ftImpact: 0, to: 0.2 } },
          { name: "AJ Green", min: 24, pts: 13, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 8, ftm: 1, fta: 1, composite: 2.29, zScores: { pts: 0.347, reb: -0.284, ast: 0.256, stl: -0.755, blk: -0.574, tpm: 1.849, fgImpact: 0.227, ftImpact: 0.331, to: 0.897 } },
          { name: "Ryan Rollins", min: 17, pts: 10, reb: 3, ast: 2, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 4, fga: 11, ftm: 1, fta: 2, composite: -3.26, zScores: { pts: -0.01, reb: -0.284, ast: -0.132, stl: -0.755, blk: 0.688, tpm: -0.146, fgImpact: -0.724, ftImpact: -0.7, to: -1.196 } },
          { name: "Kasparas Jakucionis", min: 22, pts: 7, reb: 5, ast: 7, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 7, ftm: 3, fta: 4, composite: -3.12, zScores: { pts: -0.367, reb: 0.345, ast: 1.808, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.837, ftImpact: -0.039, to: -1.894 } }
        ]
      },
      home: {
        abbr: "MIN", name: "Minnesota Timberwolves", score: 112,
        players: [
          { name: "Jaden McDaniels", min: 29, pts: 13, reb: 6, ast: 3, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 14, ftm: 1, fta: 3, composite: -2.76, zScores: { pts: 0.347, reb: 0.659, ast: 0.256, stl: -0.755, blk: -0.574, tpm: 0.519, fgImpact: -0.984, ftImpact: -1.732, to: -0.498 } },
          { name: "Jonathan Kuminga", min: 33, pts: 8, reb: 10, ast: 3, stl: 0, blk: 4, to: 4, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 3.81, zScores: { pts: -0.248, reb: 1.918, ast: 0.256, stl: -0.755, blk: 4.475, tpm: 0.519, fgImpact: -0.464, ftImpact: 0, to: -1.894 } },
          { name: "Rudy Gobert", min: 31, pts: 10, reb: 10, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 4, fta: 12, composite: -5.35, zScores: { pts: -0.01, reb: 1.918, ast: -0.52, stl: -0.755, blk: 0.688, tpm: -0.811, fgImpact: 0.17, ftImpact: -6.926, to: 0.897 } },
          { name: "Ayo Dosunmu", min: 37, pts: 19, reb: 12, ast: 8, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 8, fga: 18, ftm: 2, fta: 2, composite: 6.62, zScores: { pts: 1.061, reb: 2.547, ast: 2.196, stl: 0.289, blk: 0.688, tpm: -0.146, fgImpact: -0.18, ftImpact: 0.662, to: -0.498 } },
          { name: "LaMelo Ball", min: 33, pts: 34, reb: 6, ast: 3, stl: 1, blk: 0, to: 3, tpm: 6, fgm: 12, fga: 21, ftm: 4, fta: 5, composite: 7.38, zScores: { pts: 2.846, reb: 0.659, ast: 0.256, stl: 0.289, blk: -0.574, tpm: 3.178, fgImpact: 1.63, ftImpact: 0.292, to: -1.196 } },
          { name: "Trey Lyles", min: 21, pts: 12, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 0.01, zScores: { pts: 0.228, reb: 0.03, ast: -0.908, stl: -0.755, blk: -0.574, tpm: 0.519, fgImpact: -0.09, ftImpact: 0.662, to: 0.897 } },
          { name: "Cody Williams", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -1.2, reb: -0.913, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.317, ftImpact: 0, to: 0.897 } },
          { name: "Joan Beringer", min: 14, pts: 2, reb: 7, ast: 2, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 1.63, zScores: { pts: -0.962, reb: 0.974, ast: -0.132, stl: 0.289, blk: 1.951, tpm: -0.811, fgImpact: -0.577, ftImpact: 0, to: 0.897 } },
          { name: "Jaylen Clark", min: 21, pts: 4, reb: 2, ast: 0, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 1, fta: 2, composite: -2.63, zScores: { pts: -0.724, reb: -0.599, ast: -0.908, stl: 1.334, blk: -0.574, tpm: -0.146, fgImpact: -1.21, ftImpact: -0.7, to: 0.897 } },
          { name: "Bones Hyland", min: 14, pts: 10, reb: 1, ast: 3, stl: 2, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 2.68, zScores: { pts: -0.01, reb: -0.913, ast: 0.256, stl: 1.334, blk: 0.688, tpm: 0.519, fgImpact: -0.09, ftImpact: 0, to: 0.897 } }
        ]
      }
    },
      {
      id: "401909916",
      line: "Boston Celtics 93 @ Houston Rockets 109 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BOS", name: "Boston Celtics", score: 93,
        players: [
          { name: "Jayson Tatum", min: 32, pts: 19, reb: 6, ast: 9, stl: 1, blk: 0, to: 5, tpm: 1, fgm: 5, fga: 16, ftm: 8, fta: 8, composite: 2.31, zScores: { pts: 1.061, reb: 0.659, ast: 2.584, stl: 0.289, blk: -0.574, tpm: -0.146, fgImpact: -1.617, ftImpact: 2.647, to: -2.592 } },
          { name: "Neemias Queta", min: 26, pts: 16, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 7, ftm: 3, fta: 4, composite: 1.45, zScores: { pts: 0.704, reb: 0.659, ast: -0.52, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: 1.924, ftImpact: -0.039, to: 0.2 } },
          { name: "Derrick White", min: 30, pts: 7, reb: 2, ast: 3, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 12, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -0.367, reb: -0.599, ast: 0.256, stl: 0.289, blk: -0.574, tpm: -0.146, fgImpact: -1.731, ftImpact: 0, to: -1.196 } },
          { name: "Baylor Scheierman", min: 27, pts: 11, reb: 5, ast: 2, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 0.63, zScores: { pts: 0.109, reb: 0.345, ast: -0.132, stl: 0.289, blk: -0.574, tpm: 1.184, fgImpact: -0.09, ftImpact: 0, to: -0.498 } },
          { name: "Hugo Gonzalez", min: 16, pts: 6, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -1.71, zScores: { pts: -0.486, reb: -0.284, ast: -0.908, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: 0.17, ftImpact: 0, to: 0.897 } },
          { name: "Sam Hauser", min: 19, pts: 2, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -3.49, zScores: { pts: -0.962, reb: -0.599, ast: -0.52, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: -1.21, ftImpact: 0, to: 0.897 } },
          { name: "Dillon Mitchell", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -1.2, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0, ftImpact: 0, to: 0.897 } },
          { name: "Chris Cenac Jr.", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.97, zScores: { pts: -0.962, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0.373, ftImpact: 0, to: 0.897 } },
          { name: "Luka Garza", min: 18, pts: 14, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 4, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 2.52, zScores: { pts: 0.466, reb: -0.284, ast: -0.908, stl: -0.755, blk: 0.688, tpm: 1.849, fgImpact: -0.09, ftImpact: 0.662, to: 0.897 } },
          { name: "Mitchell Robinson", min: 15, pts: 4, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -3.49, zScores: { pts: -0.724, reb: 0.03, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0.747, ftImpact: 0, to: -0.498 } },
          { name: "Mike Conley", min: 4, pts: 3, reb: 0, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.62, zScores: { pts: -0.843, reb: -1.228, ast: -0.908, stl: -0.755, blk: 0.688, tpm: -0.146, fgImpact: 0.373, ftImpact: 0, to: 0.2 } },
          { name: "Payton Pritchard", min: 30, pts: 4, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 7, ftm: 4, fta: 6, composite: -4.6, zScores: { pts: -0.724, reb: -0.284, ast: 0.256, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: -2.217, ftImpact: -0.739, to: 0.2 } },
          { name: "Ron Harper Jr.", min: 7, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.83, zScores: { pts: -1.2, reb: -0.913, ast: -0.52, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.95, ftImpact: 0, to: 0.897 } },
          { name: "Jordan Walsh", min: 12, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.26, zScores: { pts: -0.605, reb: -0.284, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: 0.113, ftImpact: 0, to: 0.897 } }
        ]
      },
      home: {
        abbr: "HOU", name: "Houston Rockets", score: 109,
        players: [
          { name: "Kevin Durant", min: 33, pts: 12, reb: 3, ast: 3, stl: 2, blk: 1, to: 4, tpm: 0, fgm: 5, fga: 6, ftm: 2, fta: 3, composite: 0.7, zScores: { pts: 0.228, reb: -0.284, ast: 0.256, stl: 1.334, blk: 0.688, tpm: -0.811, fgImpact: 1.55, ftImpact: -0.369, to: -1.894 } },
          { name: "Jabari Smith Jr.", min: 36, pts: 14, reb: 10, ast: 0, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 3.18, zScores: { pts: 0.466, reb: 1.918, ast: -0.908, stl: -0.755, blk: -0.574, tpm: 1.849, fgImpact: 0.283, ftImpact: 0, to: 0.897 } },
          { name: "Alperen Sengun", min: 38, pts: 26, reb: 7, ast: 10, stl: 2, blk: 2, to: 1, tpm: 1, fgm: 12, fga: 15, ftm: 1, fta: 2, composite: 12.01, zScores: { pts: 1.894, reb: 0.974, ast: 2.972, stl: 1.334, blk: 1.951, tpm: -0.146, fgImpact: 3.53, ftImpact: -0.7, to: 0.2 } },
          { name: "Fred VanVleet", min: 27, pts: 8, reb: 2, ast: 9, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 1.39, zScores: { pts: -0.248, reb: -0.599, ast: 2.584, stl: 0.289, blk: -0.574, tpm: 0.519, fgImpact: -0.78, ftImpact: 0, to: 0.2 } },
          { name: "Amen Thompson", min: 25, pts: 14, reb: 3, ast: 3, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 9, ftm: 4, fta: 5, composite: -0.26, zScores: { pts: 0.466, reb: -0.284, ast: 0.256, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: 0.6, ftImpact: 0.292, to: -0.498 } },
          { name: "Jae'Sean Tate", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -1.2, reb: -0.913, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.317, ftImpact: 0, to: 0.897 } },
          { name: "Tari Eason", min: 27, pts: 13, reb: 4, ast: 3, stl: 0, blk: 2, to: 2, tpm: 3, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 3.43, zScores: { pts: 0.347, reb: 0.03, ast: 0.256, stl: -0.755, blk: 1.951, tpm: 1.184, fgImpact: 0.917, ftImpact: 0, to: -0.498 } },
          { name: "Isaiah Crawford", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -1.2, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0, ftImpact: 0, to: 0.897 } },
          { name: "Oscar Tshiebwe", min: 7, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 1, composite: -4.07, zScores: { pts: -0.724, reb: -0.913, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0.747, ftImpact: -1.031, to: 0.897 } },
          { name: "Marcus Smart", min: 20, pts: 8, reb: 4, ast: 4, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 10, ftm: 2, fta: 2, composite: 0.08, zScores: { pts: -0.248, reb: 0.03, ast: 0.644, stl: 1.334, blk: -0.574, tpm: 0.519, fgImpact: -1.787, ftImpact: 0.662, to: -0.498 } },
          { name: "Bogdan Bogdanovic", min: 5, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.51, zScores: { pts: -1.2, reb: -1.228, ast: -0.52, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.317, ftImpact: 0, to: 0.897 } },
          { name: "Reed Sheppard", min: 17, pts: 8, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -2.44, zScores: { pts: -0.248, reb: -0.913, ast: -0.52, stl: -0.755, blk: -0.574, tpm: 0.519, fgImpact: -0.147, ftImpact: 0, to: 0.2 } },
          { name: "Bruce Thornton", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.97, zScores: { pts: -0.962, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0.373, ftImpact: 0, to: 0.897 } }
        ]
      }
    },
      {
      id: "401909917",
      line: "Utah Jazz 97 @ San Antonio Spurs 119 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UTAH", name: "Utah Jazz", score: 97,
        players: [
          { name: "Lauri Markkanen", min: 31, pts: 22, reb: 8, ast: 3, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 8, fga: 16, ftm: 2, fta: 2, composite: 6.54, zScores: { pts: 1.418, reb: 1.289, ast: 0.256, stl: 0.289, blk: -0.574, tpm: 1.849, fgImpact: 0.453, ftImpact: 0.662, to: 0.897 } },
          { name: "Jaxson Hayes", min: 22, pts: 9, reb: 5, ast: 0, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 4, fga: 9, ftm: 1, fta: 1, composite: 1.18, zScores: { pts: -0.129, reb: 0.345, ast: -0.908, stl: 0.289, blk: 1.951, tpm: -0.811, fgImpact: -0.09, ftImpact: 0.331, to: 0.2 } },
          { name: "Keyonte George", min: 22, pts: 7, reb: 7, ast: 0, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 12, ftm: 0, fta: 0, composite: -4.7, zScores: { pts: -0.367, reb: 0.974, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: -1.731, ftImpact: 0, to: -1.196 } },
          { name: "Ace Bailey", min: 24, pts: 5, reb: 6, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 11, ftm: 0, fta: 0, composite: -1.72, zScores: { pts: -0.605, reb: 0.659, ast: -0.132, stl: 0.289, blk: -0.574, tpm: -0.146, fgImpact: -2.104, ftImpact: 0, to: 0.897 } },
          { name: "Darryn Peterson", min: 33, pts: 14, reb: 4, ast: 6, stl: 3, blk: 3, to: 1, tpm: 2, fgm: 5, fga: 13, ftm: 2, fta: 2, composite: 8.22, zScores: { pts: 0.466, reb: 0.03, ast: 1.42, stl: 2.378, blk: 3.213, tpm: 0.519, fgImpact: -0.667, ftImpact: 0.662, to: 0.2 } },
          { name: "Kyle Filipowski", min: 8, pts: 1, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -5.16, zScores: { pts: -1.081, reb: -0.599, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.633, ftImpact: -0.7, to: 0.897 } },
          { name: "Brice Sensabaugh", min: 14, pts: 7, reb: 2, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 10, ftm: 2, fta: 2, composite: -3.54, zScores: { pts: -0.367, reb: -0.599, ast: -0.52, stl: 0.289, blk: -0.574, tpm: -0.146, fgImpact: -1.787, ftImpact: 0.662, to: -0.498 } },
          { name: "Tony Bradley", min: 7, pts: 2, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 2, composite: -4.36, zScores: { pts: -0.962, reb: -0.284, ast: -0.908, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: 0.057, ftImpact: -2.062, to: 0.897 } },
          { name: "Mo Bamba", min: 18, pts: 8, reb: 8, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 3, composite: 0.83, zScores: { pts: -0.248, reb: 1.289, ast: -0.908, stl: -0.755, blk: 1.951, tpm: -0.811, fgImpact: 0.487, ftImpact: -0.369, to: 0.2 } },
          { name: "Svi Mykhailiuk", min: 14, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -4.45, zScores: { pts: -0.843, reb: -0.599, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: -1.527, ftImpact: 0, to: 0.897 } },
          { name: "Josh Okogie", min: 19, pts: 9, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 6, fta: 6, composite: 1.27, zScores: { pts: -0.129, reb: -0.284, ast: -0.132, stl: 0.289, blk: -0.574, tpm: -0.146, fgImpact: 0.057, ftImpact: 1.985, to: 0.2 } },
          { name: "Josh Green", min: 15, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.2, zScores: { pts: -0.843, reb: -0.913, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: -0.26, ftImpact: 0, to: 0.2 } },
          { name: "Isaiah Collier", min: 12, pts: 7, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: -2.94, zScores: { pts: -0.367, reb: -0.599, ast: -0.132, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0.803, ftImpact: -0.7, to: 0.2 } }
        ]
      },
      home: {
        abbr: "SA", name: "San Antonio Spurs", score: 119,
        players: [
          { name: "Victor Wembanyama", min: 24, pts: 12, reb: 11, ast: 5, stl: 1, blk: 3, to: 5, tpm: 0, fgm: 5, fga: 15, ftm: 2, fta: 3, composite: 1.92, zScores: { pts: 0.228, reb: 2.232, ast: 1.032, stl: 0.289, blk: 3.213, tpm: -0.811, fgImpact: -1.3, ftImpact: -0.369, to: -2.592 } },
          { name: "De'Aaron Fox", min: 22, pts: 12, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 8, ftm: 1, fta: 2, composite: -0.13, zScores: { pts: 0.228, reb: -0.599, ast: 0.256, stl: 0.289, blk: -0.574, tpm: -0.146, fgImpact: 0.917, ftImpact: -0.7, to: 0.2 } },
          { name: "Devin Vassell", min: 25, pts: 11, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 9, ftm: 3, fta: 3, composite: -1, zScores: { pts: 0.109, reb: -0.599, ast: -0.52, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: -0.09, ftImpact: 0.993, to: 0.2 } },
          { name: "Stephon Castle", min: 26, pts: 16, reb: 5, ast: 4, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 7, fga: 16, ftm: 0, fta: 0, composite: 2.81, zScores: { pts: 0.704, reb: 0.345, ast: 0.644, stl: -0.755, blk: 0.688, tpm: 0.519, fgImpact: -0.237, ftImpact: 0, to: 0.897 } },
          { name: "Dylan Harper", min: 27, pts: 17, reb: 7, ast: 8, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 10, ftm: 4, fta: 5, composite: 5.37, zScores: { pts: 0.823, reb: 0.974, ast: 2.196, stl: 1.334, blk: -0.574, tpm: -0.146, fgImpact: 0.973, ftImpact: 0.292, to: -0.498 } },
          { name: "Harrison Barnes", min: 21, pts: 13, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 4, ftm: 4, fta: 4, composite: 1.09, zScores: { pts: 0.347, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: 1.184, fgImpact: 0.803, ftImpact: 1.324, to: 0.897 } },
          { name: "Keldon Johnson", min: 27, pts: 15, reb: 7, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 12, ftm: 4, fta: 6, composite: -0.63, zScores: { pts: 0.585, reb: 0.974, ast: -0.52, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: -0.35, ftImpact: -0.739, to: 0.897 } },
          { name: "Julian Champagnie", min: 22, pts: 8, reb: 6, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 2, fta: 3, composite: -1.68, zScores: { pts: -0.248, reb: 0.659, ast: -0.908, stl: -0.755, blk: -0.574, tpm: 0.519, fgImpact: -0.203, ftImpact: -0.369, to: 0.2 } },
          { name: "Carter Bryant", min: 14, pts: 3, reb: 0, ast: 0, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.52, zScores: { pts: -0.843, reb: -1.228, ast: -0.908, stl: 0.289, blk: 0.688, tpm: -0.146, fgImpact: -0.577, ftImpact: 0, to: 0.2 } },
          { name: "Luke Kornet", min: 17, pts: 8, reb: 5, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 2, fta: 2, composite: 1.77, zScores: { pts: -0.248, reb: 0.345, ast: -0.132, stl: -0.755, blk: 0.688, tpm: -0.811, fgImpact: 1.12, ftImpact: 0.662, to: 0.897 } },
          { name: "Tarris Reed Jr.", min: 7, pts: 4, reb: 7, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -0.3, zScores: { pts: -0.724, reb: 0.974, ast: -0.908, stl: -0.755, blk: 0.688, tpm: -0.811, fgImpact: 0.373, ftImpact: 0.662, to: 0.2 } },
          { name: "Jordan McLaughlin", min: 8, pts: 0, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -4.37, zScores: { pts: -1.2, reb: -0.913, ast: 0.256, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -1.267, ftImpact: 0, to: 0.897 } }
        ]
      }
    },
      {
      id: "401909918",
      line: "Portland Trail Blazers 118 @ Denver Nuggets 110 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "POR", name: "Portland Trail Blazers", score: 118,
        players: [
          { name: "Toumani Camara", min: 31, pts: 9, reb: 5, ast: 1, stl: 0, blk: 0, to: 4, tpm: 3, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -2.81, zScores: { pts: -0.129, reb: 0.345, ast: -0.52, stl: -0.755, blk: -0.574, tpm: 1.184, fgImpact: -0.464, ftImpact: 0, to: -1.894 } },
          { name: "Deni Avdija", min: 35, pts: 28, reb: 3, ast: 5, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 10, fga: 22, ftm: 6, fta: 9, composite: 0.4, zScores: { pts: 2.132, reb: -0.284, ast: 1.032, stl: -0.755, blk: -0.574, tpm: 0.519, fgImpact: -0.067, ftImpact: -1.108, to: -0.498 } },
          { name: "Donovan Clingan", min: 32, pts: 17, reb: 18, ast: 3, stl: 0, blk: 4, to: 2, tpm: 1, fgm: 8, fga: 16, ftm: 0, fta: 0, composite: 9.04, zScores: { pts: 0.823, reb: 4.434, ast: 0.256, stl: -0.755, blk: 4.475, tpm: -0.146, fgImpact: 0.453, ftImpact: 0, to: -0.498 } },
          { name: "Damian Lillard", min: 30, pts: 20, reb: 6, ast: 6, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 11, ftm: 9, fta: 10, composite: 4.24, zScores: { pts: 1.18, reb: 0.659, ast: 1.42, stl: 0.289, blk: -0.574, tpm: -0.146, fgImpact: -0.034, ftImpact: 1.947, to: -0.498 } },
          { name: "Scoot Henderson", min: 26, pts: 8, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -1.64, zScores: { pts: -0.248, reb: -0.599, ast: -0.132, stl: 0.289, blk: -0.574, tpm: 0.519, fgImpact: -1.097, ftImpact: 0, to: 0.2 } },
          { name: "Robert Williams III", min: 15, pts: 2, reb: 6, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.95, zScores: { pts: -0.962, reb: 0.659, ast: -0.132, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.577, ftImpact: 0, to: 0.2 } },
          { name: "Jrue Holiday", min: 31, pts: 17, reb: 8, ast: 10, stl: 1, blk: 1, to: 2, tpm: 3, fgm: 7, fga: 11, ftm: 0, fta: 0, composite: 8.09, zScores: { pts: 0.823, reb: 1.289, ast: 2.972, stl: 0.289, blk: 0.688, tpm: 1.184, fgImpact: 1.347, ftImpact: 0, to: -0.498 } },
          { name: "Vit Krejci", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.97, zScores: { pts: -0.962, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0.373, ftImpact: 0, to: 0.897 } },
          { name: "Chris Youngblood", min: 15, pts: 7, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: -1.92, zScores: { pts: -0.367, reb: -0.599, ast: -0.52, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: -0.52, ftImpact: 0.662, to: 0.897 } },
          { name: "Sidy Cissoko", min: 22, pts: 8, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -1.63, zScores: { pts: -0.248, reb: -0.284, ast: -0.908, stl: -0.755, blk: -0.574, tpm: 0.519, fgImpact: 1.12, ftImpact: 0, to: -0.498 } }
        ]
      },
      home: {
        abbr: "DEN", name: "Denver Nuggets", score: 110,
        players: [
          { name: "Aaron Gordon", min: 30, pts: 5, reb: 6, ast: 2, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -0.26, zScores: { pts: -0.605, reb: 0.659, ast: -0.132, stl: 0.289, blk: 0.688, tpm: -0.146, fgImpact: -0.52, ftImpact: 0, to: -0.498 } },
          { name: "Cameron Johnson", min: 34, pts: 7, reb: 4, ast: 2, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -0.59, zScores: { pts: -0.367, reb: 0.03, ast: -0.132, stl: 1.334, blk: -0.574, tpm: -0.146, fgImpact: -0.203, ftImpact: 0.662, to: -1.196 } },
          { name: "Nikola Jokic", min: 36, pts: 26, reb: 9, ast: 8, stl: 4, blk: 1, to: 2, tpm: 2, fgm: 10, fga: 22, ftm: 4, fta: 4, composite: 11.08, zScores: { pts: 1.894, reb: 1.603, ast: 2.196, stl: 3.422, blk: 0.688, tpm: 0.519, fgImpact: -0.067, ftImpact: 1.324, to: -0.498 } },
          { name: "Jamal Murray", min: 39, pts: 35, reb: 5, ast: 6, stl: 1, blk: 1, to: 2, tpm: 4, fgm: 10, fga: 19, ftm: 11, fta: 11, composite: 11.58, zScores: { pts: 2.965, reb: 0.345, ast: 1.42, stl: 0.289, blk: 0.688, tpm: 1.849, fgImpact: 0.883, ftImpact: 3.64, to: -0.498 } },
          { name: "Christian Braun", min: 37, pts: 14, reb: 3, ast: 3, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 7, ftm: 5, fta: 6, composite: 2.42, zScores: { pts: 0.466, reb: -0.284, ast: 0.256, stl: 1.334, blk: -0.574, tpm: -0.146, fgImpact: 0.543, ftImpact: 0.623, to: 0.2 } },
          { name: "Alpha Diallo", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -1.2, reb: -0.913, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.317, ftImpact: 0, to: 0.897 } },
          { name: "Marvin Bagley III", min: 12, pts: 6, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 4, composite: -4.18, zScores: { pts: -0.486, reb: 0.03, ast: -0.908, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: -0.52, ftImpact: -1.401, to: 0.2 } },
          { name: "Trevon Brazile", min: 18, pts: 6, reb: 5, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 2, composite: -1.46, zScores: { pts: -0.486, reb: 0.345, ast: -0.52, stl: 1.334, blk: -0.574, tpm: -0.811, fgImpact: 1.12, ftImpact: -2.062, to: 0.2 } },
          { name: "DeMar DeRozan", min: 20, pts: 9, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 3, fta: 3, composite: -2.27, zScores: { pts: -0.129, reb: -1.228, ast: -0.52, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.147, ftImpact: 0.993, to: 0.897 } },
          { name: "Tyus Jones", min: 8, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -3.61, zScores: { pts: -0.962, reb: -1.228, ast: -0.52, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.317, ftImpact: 0.662, to: 0.897 } }
        ]
      }
    },
      {
      id: "401909919",
      line: "Phoenix Suns 113 @ Golden State Warriors 116 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PHX", name: "Phoenix Suns", score: 113,
        players: [
          { name: "Dillon Brooks", min: 34, pts: 18, reb: 8, ast: 4, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 5, fga: 8, ftm: 6, fta: 7, composite: 2.04, zScores: { pts: 0.942, reb: 1.289, ast: 0.644, stl: -0.755, blk: -0.574, tpm: 0.519, fgImpact: 0.917, ftImpact: 0.954, to: -1.894 } },
          { name: "Miles Bridges", min: 35, pts: 21, reb: 6, ast: 3, stl: 4, blk: 1, to: 1, tpm: 3, fgm: 7, fga: 14, ftm: 4, fta: 5, composite: 8.4, zScores: { pts: 1.299, reb: 0.659, ast: 0.256, stl: 3.422, blk: 0.688, tpm: 1.184, fgImpact: 0.397, ftImpact: 0.292, to: 0.2 } },
          { name: "Khaman Maluach", min: 13, pts: 5, reb: 2, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: -1.32, zScores: { pts: -0.605, reb: -0.599, ast: -0.908, stl: 0.289, blk: 0.688, tpm: -0.811, fgImpact: 0.43, ftImpact: -0.7, to: 0.897 } },
          { name: "Devin Booker", min: 35, pts: 26, reb: 3, ast: 5, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 8, fga: 18, ftm: 8, fta: 8, composite: 3.8, zScores: { pts: 1.894, reb: -0.284, ast: 1.032, stl: -0.755, blk: -0.574, tpm: 0.519, fgImpact: -0.18, ftImpact: 2.647, to: -0.498 } },
          { name: "Jalen Green", min: 36, pts: 11, reb: 8, ast: 8, stl: 2, blk: 2, to: 4, tpm: 0, fgm: 5, fga: 14, ftm: 1, fta: 6, composite: -1.64, zScores: { pts: 0.109, reb: 1.289, ast: 2.196, stl: 1.334, blk: 1.951, tpm: -0.811, fgImpact: -0.984, ftImpact: -4.825, to: -1.894 } },
          { name: "Oso Ighodaro", min: 24, pts: 14, reb: 2, ast: 2, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 6, fga: 6, ftm: 2, fta: 2, composite: 0.56, zScores: { pts: 0.466, reb: -0.599, ast: -0.132, stl: -0.755, blk: 0.688, tpm: -0.811, fgImpact: 2.24, ftImpact: 0.662, to: -1.196 } },
          { name: "Ryan Dunn", min: 10, pts: 5, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.15, zScores: { pts: -0.605, reb: -0.284, ast: -0.52, stl: 0.289, blk: -0.574, tpm: -0.146, fgImpact: -0.203, ftImpact: 0, to: 0.897 } },
          { name: "Luke Kennard", min: 18, pts: 6, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.04, zScores: { pts: -0.486, reb: -0.599, ast: -0.52, stl: -0.755, blk: -0.574, tpm: 0.519, fgImpact: -0.52, ftImpact: 0, to: 0.897 } },
          { name: "Jordan Goodwin", min: 10, pts: 4, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.92, zScores: { pts: -0.724, reb: -0.599, ast: -0.132, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: 0.43, ftImpact: 0, to: 0.2 } },
          { name: "Collin Gillespie", min: 24, pts: 3, reb: 1, ast: 2, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 8, ftm: 0, fta: 0, composite: -2.22, zScores: { pts: -0.843, reb: -0.913, ast: -0.132, stl: 1.334, blk: -0.574, tpm: -0.146, fgImpact: -1.844, ftImpact: 0, to: 0.897 } }
        ]
      },
      home: {
        abbr: "GS", name: "Golden State Warriors", score: 116,
        players: [
          { name: "Draymond Green", min: 17, pts: 4, reb: 4, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -1, zScores: { pts: -0.724, reb: 0.03, ast: -0.132, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: 0.057, ftImpact: 0.662, to: 0.2 } },
          { name: "Yaxel Lendeborg", min: 29, pts: 16, reb: 5, ast: 5, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 3, fga: 10, ftm: 8, fta: 9, composite: 3.6, zScores: { pts: 0.704, reb: 0.345, ast: 1.032, stl: 0.289, blk: 0.688, tpm: 0.519, fgImpact: -1.097, ftImpact: 1.616, to: -0.498 } },
          { name: "Stephen Curry", min: 33, pts: 34, reb: 6, ast: 7, stl: 1, blk: 0, to: 3, tpm: 5, fgm: 9, fga: 21, ftm: 11, fta: 12, composite: 8.51, zScores: { pts: 2.846, reb: 0.659, ast: 1.808, stl: 0.289, blk: -0.574, tpm: 2.513, fgImpact: -0.44, ftImpact: 2.608, to: -1.196 } },
          { name: "Brandin Podziemski", min: 33, pts: 20, reb: 3, ast: 2, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 7, fga: 15, ftm: 3, fta: 4, composite: 0.51, zScores: { pts: 1.18, reb: -0.284, ast: -0.132, stl: 0.289, blk: -0.574, tpm: 1.184, fgImpact: 0.08, ftImpact: -0.039, to: -1.196 } },
          { name: "Will Richard", min: 28, pts: 6, reb: 5, ast: 0, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -1.23, zScores: { pts: -0.486, reb: 0.345, ast: -0.908, stl: -0.755, blk: 0.688, tpm: 0.519, fgImpact: -0.837, ftImpact: 0, to: 0.2 } },
          { name: "Georges Niang", min: 22, pts: 13, reb: 4, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 6, ftm: 2, fta: 3, composite: 1.24, zScores: { pts: 0.347, reb: 0.03, ast: 0.256, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: 1.55, ftImpact: -0.369, to: 0.897 } },
          { name: "Graham Ike", min: 7, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -1.2, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0, ftImpact: 0, to: 0.897 } },
          { name: "Charles Bassey", min: 23, pts: 19, reb: 8, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 10, ftm: 5, fta: 6, composite: 2.18, zScores: { pts: 1.061, reb: 1.289, ast: -0.52, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 1.663, ftImpact: 0.623, to: 0.2 } },
          { name: "Gary Payton II", min: 20, pts: 2, reb: 2, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.94, zScores: { pts: -0.962, reb: -0.599, ast: -0.52, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: -0.26, ftImpact: 0, to: -0.498 } },
          { name: "De'Anthony Melton", min: 28, pts: 2, reb: 7, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 9, ftm: 0, fta: 1, composite: -2.47, zScores: { pts: -0.962, reb: 0.974, ast: -0.132, stl: 1.334, blk: -0.574, tpm: -0.811, fgImpact: -2.161, ftImpact: -1.031, to: 0.897 } },
          { name: "LJ Cryer", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.9, zScores: { pts: -1.2, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.317, ftImpact: 0, to: 0.897 } }
        ]
      }
    },
      {
      id: "401909920",
      line: "Toronto Raptors 125 @ LA Clippers 118 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TOR", name: "Toronto Raptors", score: 125,
        players: [
          { name: "RJ Barrett", min: 37, pts: 26, reb: 6, ast: 3, stl: 0, blk: 2, to: 2, tpm: 2, fgm: 10, fga: 19, ftm: 4, fta: 8, composite: 2.11, zScores: { pts: 1.894, reb: 0.659, ast: 0.256, stl: -0.755, blk: 1.951, tpm: 0.519, fgImpact: 0.883, ftImpact: -2.801, to: -0.498 } },
          { name: "Scottie Barnes", min: 38, pts: 22, reb: 15, ast: 8, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 7, fga: 15, ftm: 8, fta: 15, composite: 1.37, zScores: { pts: 1.418, reb: 3.491, ast: 2.196, stl: 1.334, blk: -0.574, tpm: -0.811, fgImpact: 0.08, ftImpact: -4.572, to: -1.196 } },
          { name: "Collin Murray-Boyles", min: 28, pts: 18, reb: 7, ast: 0, stl: 0, blk: 2, to: 2, tpm: 1, fgm: 7, fga: 14, ftm: 3, fta: 4, composite: 1.92, zScores: { pts: 0.942, reb: 0.974, ast: -0.908, stl: -0.755, blk: 1.951, tpm: -0.146, fgImpact: 0.397, ftImpact: -0.039, to: -0.498 } },
          { name: "Immanuel Quickley", min: 38, pts: 27, reb: 4, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 8, fga: 13, ftm: 10, fta: 11, composite: 4.66, zScores: { pts: 2.013, reb: 0.03, ast: -0.132, stl: 0.289, blk: -0.574, tpm: -0.146, fgImpact: 1.403, ftImpact: 2.278, to: -0.498 } },
          { name: "Ja'Kobe Walter", min: 35, pts: 10, reb: 6, ast: 5, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 6, fta: 10, composite: -1.87, zScores: { pts: -0.01, reb: 0.659, ast: 1.032, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: -0.52, ftImpact: -2.14, to: 0.2 } },
          { name: "Kyle Anderson", min: 8, pts: 2, reb: 0, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.36, zScores: { pts: -0.962, reb: -1.228, ast: -0.908, stl: 0.289, blk: 0.688, tpm: -0.811, fgImpact: 0.373, ftImpact: 0, to: 0.2 } },
          { name: "Trayce Jackson-Davis", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -1.2, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0, ftImpact: 0, to: 0.897 } },
          { name: "Jamison Battle", min: 21, pts: 12, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -0.65, zScores: { pts: 0.228, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: 1.849, fgImpact: 0.543, ftImpact: 0, to: 0.2 } },
          { name: "Allen Graves", min: 7, pts: 0, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.2, reb: -1.228, ast: -0.132, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0, ftImpact: 0, to: 0.897 } },
          { name: "Jamal Shead", min: 20, pts: 6, reb: 1, ast: 6, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -1.02, zScores: { pts: -0.486, reb: -0.913, ast: 1.42, stl: 0.289, blk: -0.574, tpm: -0.811, fgImpact: -0.147, ftImpact: 0, to: 0.2 } },
          { name: "Alijah Martin", min: 6, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.34, zScores: { pts: -0.962, reb: -0.599, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0.373, ftImpact: 0, to: 0.897 } }
        ]
      },
      home: {
        abbr: "LAC", name: "LA Clippers", score: 118,
        players: [
          { name: "Brook Lopez", min: 22, pts: 12, reb: 6, ast: 1, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 5, fga: 10, ftm: 1, fta: 2, composite: 1.68, zScores: { pts: 0.228, reb: 0.659, ast: -0.52, stl: 0.289, blk: 0.688, tpm: -0.146, fgImpact: 0.283, ftImpact: -0.7, to: 0.897 } },
          { name: "Kris Dunn", min: 30, pts: 12, reb: 4, ast: 1, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 11, ftm: 3, fta: 3, composite: 0.82, zScores: { pts: 0.228, reb: 0.03, ast: -0.52, stl: 1.334, blk: -0.574, tpm: -0.146, fgImpact: -0.724, ftImpact: 0.993, to: 0.2 } },
          { name: "Darius Garland", min: 36, pts: 16, reb: 4, ast: 8, stl: 0, blk: 0, to: 7, tpm: 1, fgm: 5, fga: 14, ftm: 5, fta: 6, composite: -2.89, zScores: { pts: 0.704, reb: 0.03, ast: 2.196, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: -0.984, ftImpact: 0.623, to: -3.987 } },
          { name: "Kobe Sanders", min: 38, pts: 26, reb: 4, ast: 3, stl: 0, blk: 1, to: 0, tpm: 5, fgm: 8, fga: 17, ftm: 5, fta: 5, composite: 7.32, zScores: { pts: 1.894, reb: 0.03, ast: 0.256, stl: -0.755, blk: 0.688, tpm: 2.513, fgImpact: 0.136, ftImpact: 1.654, to: 0.897 } },
          { name: "Gradey Dick", min: 29, pts: 12, reb: 4, ast: 3, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 11, ftm: 2, fta: 2, composite: 1.29, zScores: { pts: 0.228, reb: 0.03, ast: 0.256, stl: 1.334, blk: -0.574, tpm: -0.811, fgImpact: -0.034, ftImpact: 0.662, to: 0.2 } },
          { name: "Isaiah Jackson", min: 26, pts: 19, reb: 8, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 9, fga: 11, ftm: 0, fta: 0, composite: 2.97, zScores: { pts: 1.061, reb: 1.289, ast: -0.132, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: 2.727, ftImpact: 0, to: -0.498 } },
          { name: "Baba Miller", min: 12, pts: 4, reb: 0, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -3.13, zScores: { pts: -0.724, reb: -1.228, ast: -0.52, stl: -0.755, blk: 0.688, tpm: -0.146, fgImpact: 0.057, ftImpact: -0.7, to: 0.2 } },
          { name: "Max Strus", min: 23, pts: 11, reb: 4, ast: 6, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 10, ftm: 2, fta: 3, composite: 1.19, zScores: { pts: 0.109, reb: 0.03, ast: 1.42, stl: 0.289, blk: -0.574, tpm: 1.184, fgImpact: -1.097, ftImpact: -0.369, to: 0.2 } },
          { name: "Keaton Wagler", min: 24, pts: 6, reb: 4, ast: 4, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 4, composite: -2.09, zScores: { pts: -0.486, reb: 0.03, ast: 0.644, stl: -0.755, blk: 0.688, tpm: -0.811, fgImpact: -0.203, ftImpact: -1.401, to: 0.2 } }
        ]
      }
    },
      {
      id: "401909921",
      line: "Miami Heat 117 @ Los Angeles Lakers 138 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIA", name: "Miami Heat", score: 117,
        players: [
          { name: "Giannis Antetokounmpo", min: 34, pts: 30, reb: 12, ast: 7, stl: 1, blk: 2, to: 7, tpm: 0, fgm: 10, fga: 17, ftm: 10, fta: 15, composite: 3.84, zScores: { pts: 2.37, reb: 2.547, ast: 1.808, stl: 0.289, blk: 1.951, tpm: -0.811, fgImpact: 1.517, ftImpact: -1.847, to: -3.987 } },
          { name: "Andrew Wiggins", min: 24, pts: 7, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: -3.18, zScores: { pts: -0.367, reb: -1.228, ast: -0.132, stl: -0.755, blk: -0.574, tpm: 0.519, fgImpact: -0.837, ftImpact: -0.7, to: 0.897 } },
          { name: "Bam Adebayo", min: 31, pts: 16, reb: 9, ast: 4, stl: 2, blk: 2, to: 3, tpm: 1, fgm: 5, fga: 10, ftm: 5, fta: 7, composite: 4.77, zScores: { pts: 0.704, reb: 1.603, ast: 0.644, stl: 1.334, blk: 1.951, tpm: -0.146, fgImpact: 0.283, ftImpact: -0.408, to: -1.196 } },
          { name: "Klay Thompson", min: 27, pts: 19, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 7, fga: 11, ftm: 1, fta: 1, composite: 2.02, zScores: { pts: 1.061, reb: -0.913, ast: -0.52, stl: -0.755, blk: -0.574, tpm: 1.849, fgImpact: 1.347, ftImpact: 0.331, to: 0.2 } },
          { name: "Davion Mitchell", min: 29, pts: 15, reb: 0, ast: 7, stl: 0, blk: 1, to: 1, tpm: 4, fgm: 5, fga: 5, ftm: 1, fta: 2, composite: 4.31, zScores: { pts: 0.585, reb: -1.228, ast: 1.808, stl: -0.755, blk: 0.688, tpm: 1.849, fgImpact: 1.867, ftImpact: -0.7, to: 0.2 } },
          { name: "Bobby Portis", min: 18, pts: 2, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.88, zScores: { pts: -0.962, reb: -0.284, ast: -0.132, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.26, ftImpact: 0, to: 0.897 } },
          { name: "Myron Gardner", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -1.2, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0, ftImpact: 0, to: 0.897 } },
          { name: "Nikola Jovic", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.98, zScores: { pts: -0.962, reb: -0.913, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.26, ftImpact: 0, to: 0.2 } },
          { name: "Nick Richards", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.2, reb: -0.913, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0, ftImpact: 0, to: 0.897 } },
          { name: "Tim Hardaway Jr.", min: 19, pts: 9, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -3.06, zScores: { pts: -0.129, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: 1.184, fgImpact: -0.147, ftImpact: 0, to: -0.498 } },
          { name: "Dru Smith", min: 11, pts: 3, reb: 3, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 3, fta: 4, composite: -1.09, zScores: { pts: -0.843, reb: -0.284, ast: -0.132, stl: 1.334, blk: -0.574, tpm: -0.811, fgImpact: -0.633, ftImpact: -0.039, to: 0.897 } },
          { name: "Pelle Larsson", min: 30, pts: 9, reb: 3, ast: 2, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 2, fga: 6, ftm: 4, fta: 4, composite: -2.07, zScores: { pts: -0.129, reb: -0.284, ast: -0.132, stl: 0.289, blk: -0.574, tpm: -0.146, fgImpact: -0.52, ftImpact: 1.324, to: -1.894 } },
          { name: "Ryan Conwell", min: 8, pts: 5, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.46, zScores: { pts: -0.605, reb: -0.913, ast: -0.52, stl: 0.289, blk: -0.574, tpm: -0.146, fgImpact: 0.113, ftImpact: 0, to: 0.897 } }
        ]
      },
      home: {
        abbr: "LAL", name: "Los Angeles Lakers", score: 138,
        players: [
          { name: "Jake LaRavia", min: 26, pts: 7, reb: 4, ast: 2, stl: 1, blk: 2, to: 4, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 0.53, zScores: { pts: -0.367, reb: 0.03, ast: -0.132, stl: 0.289, blk: 1.951, tpm: -0.146, fgImpact: 0.803, ftImpact: 0, to: -1.894 } },
          { name: "Walker Kessler", min: 32, pts: 15, reb: 15, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 13, ftm: 1, fta: 3, composite: 3.07, zScores: { pts: 0.585, reb: 3.491, ast: -0.132, stl: 1.334, blk: -0.574, tpm: -0.811, fgImpact: 0.713, ftImpact: -1.732, to: 0.2 } },
          { name: "Matisse Thybulle", min: 19, pts: 6, reb: 1, ast: 2, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -1.4, zScores: { pts: -0.486, reb: -0.913, ast: -0.132, stl: -0.755, blk: 0.688, tpm: 0.519, fgImpact: -0.52, ftImpact: 0, to: 0.2 } },
          { name: "Luka Doncic", min: 36, pts: 42, reb: 7, ast: 13, stl: 2, blk: 0, to: 2, tpm: 6, fgm: 14, fga: 24, ftm: 8, fta: 10, composite: 14.99, zScores: { pts: 3.798, reb: 0.974, ast: 4.137, stl: 1.334, blk: -0.574, tpm: 3.178, fgImpact: 2.06, ftImpact: 0.585, to: -0.498 } },
          { name: "Austin Reaves", min: 34, pts: 27, reb: 2, ast: 5, stl: 0, blk: 0, to: 5, tpm: 4, fgm: 10, fga: 15, ftm: 3, fta: 4, composite: 2.49, zScores: { pts: 2.013, reb: -0.599, ast: 1.032, stl: -0.755, blk: -0.574, tpm: 1.849, fgImpact: 2.15, ftImpact: -0.039, to: -2.592 } },
          { name: "Jarred Vanderbilt", min: 6, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.35, zScores: { pts: -0.962, reb: -0.913, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0.373, ftImpact: 0, to: 0.2 } },
          { name: "Sandro Mamukelashvili", min: 28, pts: 13, reb: 3, ast: 4, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 10, ftm: 1, fta: 2, composite: 1.07, zScores: { pts: 0.347, reb: -0.284, ast: 0.644, stl: 1.334, blk: -0.574, tpm: 0.519, fgImpact: 0.283, ftImpact: -0.7, to: -0.498 } },
          { name: "Ziaire Williams", min: 15, pts: 9, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 1.11, zScores: { pts: -0.129, reb: -0.599, ast: -0.132, stl: 0.289, blk: -0.574, tpm: 1.184, fgImpact: 0.17, ftImpact: 0, to: 0.897 } },
          { name: "Lawson Lovering", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.2, reb: -0.913, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0, ftImpact: 0, to: 0.897 } },
          { name: "Collin Sexton", min: 16, pts: 6, reb: 1, ast: 5, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.81, zScores: { pts: -0.486, reb: -0.913, ast: 1.032, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0.803, ftImpact: 0, to: 0.897 } },
          { name: "Quentin Grimes", min: 23, pts: 7, reb: 4, ast: 4, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 3, composite: -0.53, zScores: { pts: -0.367, reb: 0.03, ast: 0.644, stl: -0.755, blk: -0.574, tpm: -0.146, fgImpact: 0.113, ftImpact: -0.369, to: 0.897 } },
          { name: "Bronny James", min: 1, pts: 2, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.71, zScores: { pts: -0.962, reb: -1.228, ast: -0.908, stl: -0.755, blk: 0.688, tpm: -0.811, fgImpact: 0.373, ftImpact: 0, to: 0.897 } },
          { name: "Jaden Hardy", min: 1, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -4, zScores: { pts: -0.962, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: -0.317, ftImpact: 0.662, to: 0.897 } },
          { name: "Cameron Carr", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -1.2, reb: -1.228, ast: -0.908, stl: -0.755, blk: -0.574, tpm: -0.811, fgImpact: 0, ftImpact: 0, to: 0.897 } }
        ]
      }
    }
    ]
  },
    "2026-11-04": {
    games: [
      {
      id: "401909922",
      line: "Philadelphia 76ers 112 @ Detroit Pistons 106 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PHI", name: "Philadelphia 76ers", score: 112,
        players: [
          { name: "LeBron James", min: 33, pts: 13, reb: 10, ast: 8, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 5, fga: 10, ftm: 2, fta: 2, composite: 4.88, zScores: { pts: 0.32, reb: 1.642, ast: 2.372, stl: 0.364, blk: 0.536, tpm: -0.079, fgImpact: 0.366, ftImpact: 0.655, to: -1.293 } },
          { name: "Joel Embiid", min: 33, pts: 26, reb: 15, ast: 2, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 8, fga: 18, ftm: 10, fta: 10, composite: 4.88, zScores: { pts: 1.772, reb: 3.017, ast: -0.129, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -0.071, ftImpact: 3.274, to: -2.03 } },
          { name: "Jaylen Brown", min: 37, pts: 30, reb: 7, ast: 1, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 11, fga: 19, ftm: 5, fta: 7, composite: 6.65, zScores: { pts: 2.218, reb: 0.818, ast: -0.546, stl: 0.364, blk: 0.536, tpm: 1.299, fgImpact: 1.789, ftImpact: -0.744, to: 0.918 } },
          { name: "Tyrese Maxey", min: 34, pts: 19, reb: 1, ast: 7, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 16, ftm: 6, fta: 6, composite: 2.67, zScores: { pts: 0.99, reb: -0.832, ast: 1.955, stl: -0.736, blk: -0.55, tpm: 1.299, fgImpact: -1.602, ftImpact: 1.964, to: 0.181 } },
          { name: "VJ Edgecombe", min: 35, pts: 11, reb: 6, ast: 3, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: -0.59, zScores: { pts: 0.097, reb: 0.543, ast: 0.288, stl: 0.364, blk: -0.55, tpm: -0.079, fgImpact: 0.038, ftImpact: 0, to: -1.293 } },
          { name: "Dean Wade", min: 22, pts: 3, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -2.56, zScores: { pts: -0.797, reb: 0.268, ast: -0.546, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -0.583, ftImpact: -0.863, to: 0.918 } },
          { name: "Adem Bona", min: 15, pts: 5, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 1, composite: -1.24, zScores: { pts: -0.573, reb: -0.557, ast: -0.546, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: 0.146, ftImpact: 0.327, to: 0.918 } },
          { name: "Kentavious Caldwell-Pope", min: 21, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.34, zScores: { pts: -0.573, reb: -0.832, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: 0.474, ftImpact: 0, to: 0.918 } },
          { name: "Anfernee Simons", min: 10, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.13, zScores: { pts: -1.132, reb: -0.832, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.328, ftImpact: 0, to: 0.181 } }
        ]
      },
      home: {
        abbr: "DET", name: "Detroit Pistons", score: 106,
        players: [
          { name: "Duncan Robinson", min: 37, pts: 27, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 7, fgm: 8, fga: 12, ftm: 4, fta: 6, composite: 6.53, zScores: { pts: 1.883, reb: -0.832, ast: -0.129, stl: 0.364, blk: -0.55, tpm: 4.054, fgImpact: 1.897, ftImpact: -1.071, to: 0.918 } },
          { name: "John Collins", min: 26, pts: 16, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 7, fga: 9, ftm: 2, fta: 2, composite: 0.53, zScores: { pts: 0.655, reb: -0.832, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 2.152, ftImpact: 0.655, to: 0.918 } },
          { name: "Paul Reed", min: 30, pts: 8, reb: 7, ast: 4, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 14, ftm: 0, fta: 0, composite: -1.9, zScores: { pts: -0.238, reb: 0.818, ast: 0.705, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -1.675, ftImpact: 0, to: -0.556 } },
          { name: "Cade Cunningham", min: 40, pts: 26, reb: 7, ast: 11, stl: 2, blk: 1, to: 4, tpm: 1, fgm: 9, fga: 22, ftm: 7, fta: 7, composite: 7.74, zScores: { pts: 1.772, reb: 0.818, ast: 3.623, stl: 1.464, blk: 0.536, tpm: -0.079, fgImpact: -0.653, ftImpact: 2.292, to: -2.03 } },
          { name: "Ausar Thompson", min: 34, pts: 11, reb: 17, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 10, ftm: 3, fta: 4, composite: 2.61, zScores: { pts: 0.097, reb: 3.566, ast: 0.288, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -0.363, ftImpact: -0.208, to: 0.181 } },
          { name: "Tolu Smith", min: 5, pts: 1, reb: 1, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -2.64, zScores: { pts: -1.02, reb: -0.832, ast: -0.962, stl: -0.736, blk: 1.621, tpm: -0.768, fgImpact: 0, ftImpact: -0.863, to: 0.918 } },
          { name: "Ronald Holland II", min: 12, pts: 3, reb: 2, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.01, zScores: { pts: -0.797, reb: -0.557, ast: -0.962, stl: -0.736, blk: 0.536, tpm: -0.079, fgImpact: 0.401, ftImpact: 0, to: 0.181 } },
          { name: "Javonte Green", min: 15, pts: 1, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -4.17, zScores: { pts: -1.02, reb: -0.282, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.328, ftImpact: -0.863, to: 0.918 } },
          { name: "Kevin Huerter", min: 20, pts: 8, reb: 1, ast: 0, stl: 0, blk: 2, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -0.06, zScores: { pts: -0.238, reb: -0.832, ast: -0.962, stl: -0.736, blk: 1.621, tpm: 0.61, fgImpact: -0.436, ftImpact: 0, to: 0.918 } },
          { name: "Daniss Jenkins", min: 21, pts: 5, reb: 1, ast: 4, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -4.6, zScores: { pts: -0.573, reb: -0.832, ast: 0.705, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: -0.51, ftImpact: 0, to: -2.03 } }
        ]
      }
    },
      {
      id: "401909923",
      line: "Atlanta Hawks 120 @ Washington Wizards 105 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ATL", name: "Atlanta Hawks", score: 120,
        players: [
          { name: "Onyeka Okongwu", min: 31, pts: 14, reb: 16, ast: 4, stl: 2, blk: 1, to: 3, tpm: 2, fgm: 5, fga: 9, ftm: 2, fta: 2, composite: 7.09, zScores: { pts: 0.432, reb: 3.292, ast: 0.705, stl: 1.464, blk: 0.536, tpm: 0.61, fgImpact: 0.694, ftImpact: 0.655, to: -1.293 } },
          { name: "Nickeil Alexander-Walker", min: 32, pts: 26, reb: 4, ast: 2, stl: 0, blk: 0, to: 3, tpm: 6, fgm: 9, fga: 20, ftm: 2, fta: 2, composite: 3.08, zScores: { pts: 1.772, reb: -0.007, ast: -0.129, stl: -0.736, blk: -0.55, tpm: 3.365, fgImpact: 0.003, ftImpact: 0.655, to: -1.293 } },
          { name: "Luguentz Dort", min: 31, pts: 6, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 10, ftm: 0, fta: 0, composite: -0.93, zScores: { pts: -0.462, reb: -0.282, ast: 0.288, stl: 0.364, blk: -0.55, tpm: 0.61, fgImpact: -1.821, ftImpact: 0, to: 0.918 } },
          { name: "Dyson Daniels", min: 34, pts: 8, reb: 16, ast: 8, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 13, ftm: 0, fta: 0, composite: 1.47, zScores: { pts: -0.238, reb: 3.292, ast: 2.372, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -1.347, ftImpact: 0, to: -0.556 } },
          { name: "Kingston Flemings", min: 23, pts: 14, reb: 3, ast: 4, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 1.05, zScores: { pts: 0.432, reb: -0.282, ast: 0.705, stl: -0.736, blk: -0.55, tpm: 0.61, fgImpact: 1.423, ftImpact: 0, to: -0.556 } },
          { name: "Corey Kispert", min: 8, pts: 9, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: -1.02, zScores: { pts: -0.127, reb: -1.107, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: 0.547, ftImpact: 0.655, to: 0.918 } },
          { name: "Asa Newell", min: 10, pts: 2, reb: 3, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.37, zScores: { pts: -0.908, reb: -0.282, ast: 0.288, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0.401, ftImpact: 0, to: 0.181 } },
          { name: "Zuby Ejiofor", min: 17, pts: 11, reb: 3, ast: 2, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 6, ftm: 2, fta: 4, composite: -0.08, zScores: { pts: 0.097, reb: -0.282, ast: -0.129, stl: 1.464, blk: -0.55, tpm: -0.079, fgImpact: 0.949, ftImpact: -1.726, to: 0.181 } },
          { name: "CJ McCollum", min: 25, pts: 15, reb: 5, ast: 5, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 14, ftm: 3, fta: 4, composite: 2.48, zScores: { pts: 0.543, reb: 0.268, ast: 1.122, stl: 1.464, blk: -0.55, tpm: 0.61, fgImpact: -0.946, ftImpact: -0.208, to: 0.181 } },
          { name: "Aaron Wiggins", min: 29, pts: 15, reb: 4, ast: 2, stl: 2, blk: 1, to: 2, tpm: 3, fgm: 6, fga: 14, ftm: 0, fta: 0, composite: 2.93, zScores: { pts: 0.543, reb: -0.007, ast: -0.129, stl: 1.464, blk: 0.536, tpm: 1.299, fgImpact: -0.217, ftImpact: 0, to: -0.556 } }
        ]
      },
      home: {
        abbr: "WSH", name: "Washington Wizards", score: 105,
        players: [
          { name: "Anthony Davis", min: 30, pts: 26, reb: 10, ast: 3, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 12, fga: 19, ftm: 2, fta: 2, composite: 9, zScores: { pts: 1.772, reb: 1.642, ast: 0.288, stl: -0.736, blk: 2.707, tpm: -0.768, fgImpact: 2.518, ftImpact: 0.655, to: 0.918 } },
          { name: "AJ Dybantsa", min: 32, pts: 9, reb: 6, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 12, ftm: 1, fta: 4, composite: -4.69, zScores: { pts: -0.127, reb: 0.543, ast: 0.288, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -1.019, ftImpact: -3.244, to: 0.918 } },
          { name: "Kyshawn George", min: 35, pts: 25, reb: 4, ast: 7, stl: 0, blk: 0, to: 4, tpm: 3, fgm: 10, fga: 14, ftm: 2, fta: 3, composite: 3.76, zScores: { pts: 1.66, reb: -0.007, ast: 1.955, stl: -0.736, blk: -0.55, tpm: 1.299, fgImpact: 2.699, ftImpact: -0.536, to: -2.03 } },
          { name: "Alex Sarr", min: 23, pts: 11, reb: 9, ast: 1, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 5, fta: 6, composite: 3, zScores: { pts: 0.097, reb: 1.367, ast: -0.546, stl: 1.464, blk: 0.536, tpm: -0.768, fgImpact: 0.22, ftImpact: 0.446, to: 0.181 } },
          { name: "Trae Young", min: 34, pts: 18, reb: 2, ast: 6, stl: 2, blk: 1, to: 4, tpm: 2, fgm: 6, fga: 12, ftm: 4, fta: 4, composite: 4.19, zScores: { pts: 0.878, reb: -0.557, ast: 1.539, stl: 1.464, blk: 0.536, tpm: 0.61, fgImpact: 0.439, ftImpact: 1.31, to: -2.03 } },
          { name: "Felix Okpara", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.132, reb: -0.832, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.328, ftImpact: 0, to: 0.918 } },
          { name: "Deandre Ayton", min: 11, pts: 5, reb: 4, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: -0.89, zScores: { pts: -0.573, reb: -0.007, ast: -0.546, stl: -0.736, blk: 1.621, tpm: -0.768, fgImpact: 0.802, ftImpact: -0.863, to: 0.181 } },
          { name: "Tre Mann", min: 3, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.61, zScores: { pts: -0.908, reb: -1.107, ast: -0.962, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: 0.401, ftImpact: 0, to: 0.918 } },
          { name: "Bub Carrington", min: 19, pts: 0, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -3.44, zScores: { pts: -1.132, reb: -0.832, ast: -0.129, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -1.312, ftImpact: 0, to: 0.918 } },
          { name: "Bilal Coulibaly", min: 23, pts: 6, reb: 2, ast: 2, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.81, zScores: { pts: -0.462, reb: -0.557, ast: -0.129, stl: 1.464, blk: 0.536, tpm: -0.768, fgImpact: 0.547, ftImpact: 0, to: 0.181 } },
          { name: "Will Riley", min: 13, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.23, zScores: { pts: -1.132, reb: -1.107, ast: -0.962, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: -0.984, ftImpact: 0, to: 0.918 } },
          { name: "Tre Johnson", min: 14, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 9, ftm: 0, fta: 0, composite: -5.72, zScores: { pts: -0.797, reb: -0.557, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: -2.223, ftImpact: 0, to: 0.181 } }
        ]
      }
    },
      {
      id: "401909924",
      line: "Milwaukee Bucks 102 @ Boston Celtics 109 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIL", name: "Milwaukee Bucks", score: 102,
        players: [
          { name: "Kyle Kuzma", min: 27, pts: 6, reb: 5, ast: 4, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -2.09, zScores: { pts: -0.462, reb: 0.268, ast: 0.705, stl: 0.364, blk: -0.55, tpm: -0.079, fgImpact: -0.182, ftImpact: -0.863, to: -1.293 } },
          { name: "Jaime Jaquez Jr.", min: 31, pts: 18, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 7, fga: 16, ftm: 0, fta: 2, composite: -0.35, zScores: { pts: 0.878, reb: -0.557, ast: -0.129, stl: 0.364, blk: -0.55, tpm: 1.987, fgImpact: -0.144, ftImpact: -2.381, to: 0.181 } },
          { name: "Myles Turner", min: 36, pts: 12, reb: 9, ast: 6, stl: 2, blk: 2, to: 1, tpm: 4, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 9.32, zScores: { pts: 0.208, reb: 1.367, ast: 1.539, stl: 1.464, blk: 1.621, tpm: 1.987, fgImpact: 0.949, ftImpact: 0, to: 0.181 } },
          { name: "Tyler Herro", min: 33, pts: 25, reb: 5, ast: 3, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 8, fga: 17, ftm: 5, fta: 5, composite: 4.99, zScores: { pts: 1.66, reb: 0.268, ast: 0.288, stl: -0.736, blk: -0.55, tpm: 1.987, fgImpact: 0.257, ftImpact: 1.637, to: 0.181 } },
          { name: "Brayden Burries", min: 22, pts: 9, reb: 5, ast: 3, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 7, ftm: 3, fta: 4, composite: -2.13, zScores: { pts: -0.127, reb: 0.268, ast: 0.288, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -0.108, ftImpact: -0.208, to: -1.293 } },
          { name: "Ousmane Dieng", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.99, zScores: { pts: -1.132, reb: -1.107, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.656, ftImpact: 0, to: 0.918 } },
          { name: "Nate Ament", min: 18, pts: 9, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 9, ftm: 1, fta: 2, composite: -3.03, zScores: { pts: -0.127, reb: -0.557, ast: -0.962, stl: -0.736, blk: -0.55, tpm: 0.61, fgImpact: -0.764, ftImpact: -0.863, to: 0.918 } },
          { name: "Jericho Sims", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.34, zScores: { pts: -1.132, reb: -1.107, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0, ftImpact: 0, to: 0.918 } },
          { name: "Kel'el Ware", min: 16, pts: 2, reb: 5, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -3.21, zScores: { pts: -0.908, reb: 0.268, ast: -0.546, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: -1.239, ftImpact: 0, to: 0.181 } },
          { name: "AJ Green", min: 20, pts: 5, reb: 2, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -1.54, zScores: { pts: -0.573, reb: -0.557, ast: 0.288, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: -0.911, ftImpact: 0.655, to: 0.918 } },
          { name: "Ryan Rollins", min: 24, pts: 13, reb: 9, ast: 5, stl: 1, blk: 1, to: 4, tpm: 2, fgm: 5, fga: 10, ftm: 1, fta: 2, composite: 1.79, zScores: { pts: 0.32, reb: 1.367, ast: 1.122, stl: 0.364, blk: 0.536, tpm: 0.61, fgImpact: 0.366, ftImpact: -0.863, to: -2.03 } },
          { name: "Kasparas Jakucionis", min: 12, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.55, zScores: { pts: -0.797, reb: -0.832, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: 0.073, ftImpact: 0, to: 0.918 } }
        ]
      },
      home: {
        abbr: "BOS", name: "Boston Celtics", score: 109,
        players: [
          { name: "Paul George", min: 35, pts: 25, reb: 3, ast: 5, stl: 4, blk: 0, to: 6, tpm: 5, fgm: 8, fga: 18, ftm: 4, fta: 7, composite: 2.45, zScores: { pts: 1.66, reb: -0.282, ast: 1.122, stl: 3.664, blk: -0.55, tpm: 2.676, fgImpact: -0.071, ftImpact: -2.262, to: -3.504 } },
          { name: "Sam Hauser", min: 30, pts: 11, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 11, ftm: 0, fta: 0, composite: -1.18, zScores: { pts: 0.097, reb: -0.557, ast: -0.962, stl: -0.736, blk: -0.55, tpm: 1.299, fgImpact: -0.691, ftImpact: 0, to: 0.918 } },
          { name: "Neemias Queta", min: 29, pts: 9, reb: 12, ast: 3, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 4, fga: 8, ftm: 1, fta: 3, composite: 1.63, zScores: { pts: -0.127, reb: 2.192, ast: 0.288, stl: -0.736, blk: 1.621, tpm: -0.768, fgImpact: 0.293, ftImpact: -2.054, to: 0.918 } },
          { name: "Derrick White", min: 36, pts: 24, reb: 4, ast: 7, stl: 1, blk: 2, to: 2, tpm: 1, fgm: 7, fga: 18, ftm: 9, fta: 9, composite: 6.99, zScores: { pts: 1.548, reb: -0.007, ast: 1.955, stl: 0.364, blk: 1.621, tpm: -0.079, fgImpact: -0.8, ftImpact: 2.947, to: -0.556 } },
          { name: "Hugo Gonzalez", min: 14, pts: 4, reb: 2, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -2.59, zScores: { pts: -0.685, reb: -0.557, ast: -0.962, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: -0.255, ftImpact: 0.655, to: 0.181 } },
          { name: "Luka Garza", min: 18, pts: 11, reb: 5, ast: 2, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 2.15, zScores: { pts: 0.097, reb: 0.268, ast: -0.129, stl: 0.364, blk: -0.55, tpm: 1.299, fgImpact: 0.621, ftImpact: 0, to: 0.181 } },
          { name: "Mitchell Robinson", min: 20, pts: 3, reb: 10, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 8, ftm: 1, fta: 2, composite: -2.14, zScores: { pts: -0.797, reb: 1.642, ast: -0.546, stl: 0.364, blk: 0.536, tpm: -0.768, fgImpact: -1.895, ftImpact: -0.863, to: 0.181 } },
          { name: "Payton Pritchard", min: 18, pts: 10, reb: 1, ast: 5, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 0.42, zScores: { pts: -0.015, reb: -0.832, ast: 1.122, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0.621, ftImpact: 0.655, to: 0.918 } },
          { name: "Baylor Scheierman", min: 29, pts: 9, reb: 11, ast: 1, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 2.43, zScores: { pts: -0.127, reb: 1.917, ast: -0.546, stl: 0.364, blk: -0.55, tpm: 1.299, fgImpact: -0.108, ftImpact: 0, to: 0.181 } },
          { name: "Jordan Walsh", min: 12, pts: 3, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.8, zScores: { pts: -0.797, reb: -0.007, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: -0.583, ftImpact: 0, to: 0.918 } }
        ]
      }
    },
      {
      id: "401909925",
      line: "Charlotte Hornets 104 @ Brooklyn Nets 114 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHA", name: "Charlotte Hornets", score: 104,
        players: [
          { name: "Moussa Diabate", min: 29, pts: 7, reb: 6, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 3, fta: 5, composite: -3.8, zScores: { pts: -0.35, reb: 0.543, ast: -0.129, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0.146, ftImpact: -1.399, to: -0.556 } },
          { name: "Brandon Miller", min: 26, pts: 10, reb: 4, ast: 1, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 15, ftm: 5, fta: 5, composite: -5.05, zScores: { pts: -0.015, reb: -0.007, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: -3.461, ftImpact: 1.637, to: -1.293 } },
          { name: "Naz Reid", min: 36, pts: 28, reb: 9, ast: 2, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 11, fga: 18, ftm: 4, fta: 5, composite: 5.32, zScores: { pts: 1.995, reb: 1.367, ast: -0.129, stl: -0.736, blk: 0.536, tpm: 0.61, fgImpact: 2.117, ftImpact: 0.119, to: -0.556 } },
          { name: "Coby White", min: 18, pts: 4, reb: 5, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 9, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -0.685, reb: 0.268, ast: -0.129, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: -1.493, ftImpact: 0, to: -0.556 } },
          { name: "Kon Knueppel", min: 6, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 3, fta: 3, composite: -4.82, zScores: { pts: -0.797, reb: -1.107, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.328, ftImpact: 0.982, to: -0.556 } },
          { name: "Royce O'Neale", min: 18, pts: 0, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.23, zScores: { pts: -1.132, reb: -0.282, ast: -0.129, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -0.656, ftImpact: 0, to: 0.918 } },
          { name: "Tidjane Salaun", min: 10, pts: 9, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 4, ftm: 0, fta: 2, composite: -2.5, zScores: { pts: -0.127, reb: -0.832, ast: -0.962, stl: -0.736, blk: -0.55, tpm: 1.299, fgImpact: 0.875, ftImpact: -2.381, to: 0.918 } },
          { name: "Ryan Kalkbrenner", min: 19, pts: 6, reb: 4, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 4, fta: 4, composite: -0.41, zScores: { pts: -0.462, reb: -0.007, ast: -0.129, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: 0.401, ftImpact: 1.31, to: -0.556 } },
          { name: "Dennis Schroder", min: 20, pts: 5, reb: 5, ast: 4, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -0.68, zScores: { pts: -0.573, reb: 0.268, ast: 0.705, stl: 0.364, blk: -0.55, tpm: -0.079, fgImpact: -0.911, ftImpact: 0.655, to: -0.556 } },
          { name: "Grayson Allen", min: 27, pts: 22, reb: 2, ast: 4, stl: 1, blk: 1, to: 2, tpm: 5, fgm: 6, fga: 11, ftm: 5, fta: 5, composite: 6.9, zScores: { pts: 1.325, reb: -0.557, ast: 0.705, stl: 0.364, blk: 0.536, tpm: 2.676, fgImpact: 0.767, ftImpact: 1.637, to: -0.556 } },
          { name: "Sion James", min: 31, pts: 10, reb: 2, ast: 1, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 4, fta: 5, composite: 1.06, zScores: { pts: -0.015, reb: -0.557, ast: -0.546, stl: 2.564, blk: -0.55, tpm: -0.768, fgImpact: -0.108, ftImpact: 0.119, to: 0.918 } }
        ]
      },
      home: {
        abbr: "BKN", name: "Brooklyn Nets", score: 114,
        players: [
          { name: "Julius Randle", min: 31, pts: 22, reb: 3, ast: 4, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 13, ftm: 6, fta: 7, composite: 3.23, zScores: { pts: 1.325, reb: -0.282, ast: 0.705, stl: 0.364, blk: -0.55, tpm: 0.61, fgImpact: 0.84, ftImpact: 0.774, to: -0.556 } },
          { name: "Michael Porter Jr.", min: 38, pts: 26, reb: 10, ast: 0, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 8, fga: 17, ftm: 6, fta: 10, composite: 0.06, zScores: { pts: 1.772, reb: 1.642, ast: -0.962, stl: -0.736, blk: -0.55, tpm: 1.987, fgImpact: 0.257, ftImpact: -2.798, to: -0.556 } },
          { name: "Chaney Johnson", min: 9, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.35, zScores: { pts: -1.132, reb: -0.557, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.984, ftImpact: 0, to: 0.918 } },
          { name: "Day'Ron Sharpe", min: 27, pts: 6, reb: 5, ast: 8, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 3, composite: 3.52, zScores: { pts: -0.462, reb: 0.268, ast: 2.372, stl: 0.364, blk: 1.621, tpm: -0.768, fgImpact: 0.474, ftImpact: -0.536, to: 0.181 } },
          { name: "Nolan Traore", min: 27, pts: 16, reb: 4, ast: 2, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 11, ftm: 0, fta: 0, composite: 4.82, zScores: { pts: 0.655, reb: -0.007, ast: -0.129, stl: 2.564, blk: -0.55, tpm: 0.61, fgImpact: 1.496, ftImpact: 0, to: 0.181 } },
          { name: "Josh Minott", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.132, reb: -0.832, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0, ftImpact: 0, to: 0.918 } },
          { name: "Noah Clowney", min: 17, pts: 7, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -2.69, zScores: { pts: -0.35, reb: -0.832, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: 0.22, ftImpact: 0, to: 0.181 } },
          { name: "Danny Wolf", min: 19, pts: 12, reb: 5, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 6, ftm: 2, fta: 2, composite: 2.61, zScores: { pts: 0.208, reb: 0.268, ast: 0.288, stl: -0.736, blk: -0.55, tpm: 0.61, fgImpact: 0.949, ftImpact: 0.655, to: 0.918 } },
          { name: "Moritz Wagner", min: 20, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -2.52, zScores: { pts: -0.462, reb: -0.832, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0.875, ftImpact: 0, to: 0.918 } },
          { name: "Terance Mann", min: 16, pts: 0, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -3.16, zScores: { pts: -1.132, reb: -0.557, ast: -0.129, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -1.312, ftImpact: 0, to: 0.918 } },
          { name: "Keon Ellis", min: 10, pts: 1, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -3.77, zScores: { pts: -1.02, reb: -0.557, ast: -0.962, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -0.328, ftImpact: -0.863, to: 0.918 } },
          { name: "Mikel Brown Jr.", min: 20, pts: 18, reb: 2, ast: 4, stl: 1, blk: 1, to: 4, tpm: 3, fgm: 6, fga: 11, ftm: 3, fta: 4, composite: 1.75, zScores: { pts: 0.878, reb: -0.557, ast: 0.705, stl: 0.364, blk: 0.536, tpm: 1.299, fgImpact: 0.767, ftImpact: -0.208, to: -2.03 } }
        ]
      }
    },
      {
      id: "401909926",
      line: "Chicago Bulls 105 @ New York Knicks 135 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHI", name: "Chicago Bulls", score: 105,
        players: [
          { name: "Jalen Smith", min: 7, pts: 3, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.93, zScores: { pts: -0.797, reb: -0.557, ast: -0.962, stl: -0.736, blk: 0.536, tpm: -0.079, fgImpact: -0.255, ftImpact: 0, to: 0.918 } },
          { name: "Matas Buzelis", min: 26, pts: 12, reb: 5, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 11, ftm: 1, fta: 1, composite: 1.05, zScores: { pts: 0.208, reb: 0.268, ast: 0.288, stl: 0.364, blk: -0.55, tpm: -0.079, fgImpact: 0.038, ftImpact: 0.327, to: 0.181 } },
          { name: "Caleb Wilson", min: 22, pts: 5, reb: 5, ast: 0, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 12, ftm: 0, fta: 0, composite: -5.3, zScores: { pts: -0.573, reb: 0.268, ast: -0.962, stl: 0.364, blk: -0.55, tpm: -0.079, fgImpact: -2.477, ftImpact: 0, to: -1.293 } },
          { name: "Norman Powell", min: 22, pts: 12, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 12, ftm: 6, fta: 7, composite: -4.75, zScores: { pts: 0.208, reb: -0.832, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -1.748, ftImpact: 0.774, to: -0.556 } },
          { name: "Josh Giddey", min: 27, pts: 10, reb: 1, ast: 6, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 7, ftm: 1, fta: 2, composite: -2.21, zScores: { pts: -0.015, reb: -0.832, ast: 1.539, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: 0.621, ftImpact: -0.863, to: -1.293 } },
          { name: "Zach Collins", min: 14, pts: 3, reb: 1, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 1, composite: -2.37, zScores: { pts: -0.797, reb: -0.832, ast: 0.288, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -0.583, ftImpact: 0.327, to: 0.181 } },
          { name: "Patrick Williams", min: 20, pts: 4, reb: 0, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: -2.55, zScores: { pts: -0.685, reb: -1.107, ast: -0.129, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: -1.239, ftImpact: 0.655, to: 0.918 } },
          { name: "Isaac Okoro", min: 15, pts: 6, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -2.07, zScores: { pts: -0.462, reb: -0.832, ast: -0.962, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: 0.22, ftImpact: 0, to: 0.918 } },
          { name: "Leonard Miller", min: 19, pts: 4, reb: 6, ast: 3, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 4, composite: -1.88, zScores: { pts: -0.685, reb: 0.543, ast: 0.288, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: -0.255, ftImpact: -1.726, to: 0.918 } },
          { name: "Noa Essengue", min: 14, pts: 6, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 4, composite: -5.08, zScores: { pts: -0.462, reb: -0.282, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.51, ftImpact: -1.726, to: 0.918 } },
          { name: "Buddy Hield", min: 8, pts: 7, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 1, composite: -1.72, zScores: { pts: -0.35, reb: -0.832, ast: -0.546, stl: 0.364, blk: -0.55, tpm: -0.079, fgImpact: 0.547, ftImpact: -1.191, to: 0.918 } },
          { name: "Tre Jones", min: 18, pts: 14, reb: 3, ast: 4, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 8, ftm: 3, fta: 3, composite: 1.68, zScores: { pts: 0.432, reb: -0.282, ast: 0.705, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: 1.022, ftImpact: 0.982, to: 0.181 } },
          { name: "Jordan Hawkins", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.09, zScores: { pts: -0.908, reb: -0.832, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.255, ftImpact: 0, to: 0.918 } },
          { name: "Dailyn Swain", min: 7, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -2.91, zScores: { pts: -0.797, reb: -0.832, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0.073, ftImpact: 0.327, to: 0.918 } },
          { name: "Jaylin Sellers", min: 14, pts: 14, reb: 3, ast: 1, stl: 1, blk: 1, to: 0, tpm: 4, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 4.36, zScores: { pts: 0.432, reb: -0.282, ast: -0.546, stl: 0.364, blk: 0.536, tpm: 1.987, fgImpact: 0.293, ftImpact: 0.655, to: 0.918 } }
        ]
      },
      home: {
        abbr: "NY", name: "New York Knicks", score: 135,
        players: [
          { name: "OG Anunoby", min: 24, pts: 18, reb: 5, ast: 2, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 10, ftm: 11, fta: 12, composite: 3.72, zScores: { pts: 0.878, reb: 0.268, ast: -0.129, stl: 2.564, blk: -0.55, tpm: -0.079, fgImpact: -1.092, ftImpact: 2.411, to: -0.556 } },
          { name: "Karl-Anthony Towns", min: 25, pts: 17, reb: 12, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 5, ftm: 5, fta: 7, composite: 4.28, zScores: { pts: 0.767, reb: 2.192, ast: -0.546, stl: 0.364, blk: -0.55, tpm: 0.61, fgImpact: 2.006, ftImpact: -0.744, to: 0.181 } },
          { name: "Mikal Bridges", min: 22, pts: 7, reb: 4, ast: 4, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.07, zScores: { pts: -0.35, reb: -0.007, ast: 0.705, stl: 0.364, blk: -0.55, tpm: -0.079, fgImpact: 0.547, ftImpact: 0, to: -0.556 } },
          { name: "Landry Shamet", min: 25, pts: 7, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 2, composite: -4.71, zScores: { pts: -0.35, reb: -0.557, ast: -0.129, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: -0.108, ftImpact: -2.381, to: 0.181 } },
          { name: "Jalen Brunson", min: 28, pts: 33, reb: 2, ast: 4, stl: 0, blk: 0, to: 0, tpm: 5, fgm: 10, fga: 17, ftm: 8, fta: 9, composite: 8.15, zScores: { pts: 2.553, reb: -0.557, ast: 0.705, stl: -0.736, blk: -0.55, tpm: 2.676, fgImpact: 1.716, ftImpact: 1.429, to: 0.918 } },
          { name: "Dalton Knecht", min: 16, pts: 10, reb: 7, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 2.53, zScores: { pts: -0.015, reb: 0.818, ast: -0.546, stl: -0.736, blk: 0.536, tpm: 0.61, fgImpact: 0.949, ftImpact: 0, to: 0.918 } },
          { name: "Pacome Dadiet", min: 9, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -0.685, reb: -1.107, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0.146, ftImpact: 0, to: 0.918 } },
          { name: "Mohamed Diawara", min: 21, pts: 8, reb: 6, ast: 4, stl: 0, blk: 2, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: 1.61, zScores: { pts: -0.238, reb: 0.543, ast: 0.705, stl: -0.736, blk: 1.621, tpm: -0.079, fgImpact: -0.182, ftImpact: -0.208, to: 0.181 } },
          { name: "Andre Drummond", min: 12, pts: 6, reb: 9, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: -1.78, zScores: { pts: -0.462, reb: 1.367, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.51, ftImpact: 0.655, to: 0.181 } },
          { name: "James Wiseman", min: 10, pts: 8, reb: 8, ast: 0, stl: 0, blk: 3, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 2.55, zScores: { pts: -0.238, reb: 1.093, ast: -0.962, stl: -0.736, blk: 2.707, tpm: -0.768, fgImpact: 1.277, ftImpact: 0, to: 0.181 } },
          { name: "Jordan Clarkson", min: 15, pts: 10, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -1.92, zScores: { pts: -0.015, reb: -0.832, ast: -0.546, stl: -0.736, blk: -0.55, tpm: 0.61, fgImpact: -0.035, ftImpact: 0, to: 0.181 } },
          { name: "Jose Alvarado", min: 9, pts: 0, reb: 0, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -6.29, zScores: { pts: -1.132, reb: -1.107, ast: -0.129, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -1.312, ftImpact: 0, to: -0.556 } },
          { name: "Miles McBride", min: 11, pts: 7, reb: 1, ast: 1, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 1, fta: 1, composite: 0.45, zScores: { pts: -0.35, reb: -0.832, ast: -0.546, stl: 1.464, blk: -0.55, tpm: 0.61, fgImpact: 0.146, ftImpact: 0.327, to: 0.181 } },
          { name: "Tyler Kolek", min: 11, pts: 0, reb: 0, ast: 5, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.25, zScores: { pts: -1.132, reb: -1.107, ast: 1.122, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0, ftImpact: 0, to: 0.918 } }
        ]
      }
    },
      {
      id: "401909927",
      line: "Indiana Pacers 107 @ Memphis Grizzlies 103 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "IND", name: "Indiana Pacers", score: 107,
        players: [
          { name: "Pascal Siakam", min: 30, pts: 20, reb: 4, ast: 2, stl: 2, blk: 1, to: 0, tpm: 2, fgm: 8, fga: 13, ftm: 2, fta: 2, composite: 6.72, zScores: { pts: 1.102, reb: -0.007, ast: -0.129, stl: 1.464, blk: 0.536, tpm: 0.61, fgImpact: 1.569, ftImpact: 0.655, to: 0.918 } },
          { name: "Ivica Zubac", min: 19, pts: 1, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 5, ftm: 1, fta: 2, composite: -6.27, zScores: { pts: -1.02, reb: -0.007, ast: -0.129, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -1.64, ftImpact: -0.863, to: -0.556 } },
          { name: "Andrew Nembhard", min: 38, pts: 22, reb: 2, ast: 5, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 8, fga: 15, ftm: 4, fta: 4, composite: 5.07, zScores: { pts: 1.325, reb: -0.557, ast: 1.122, stl: 0.364, blk: 0.536, tpm: 0.61, fgImpact: 0.913, ftImpact: 1.31, to: -0.556 } },
          { name: "Aaron Nesmith", min: 30, pts: 16, reb: 2, ast: 2, stl: 3, blk: 1, to: 1, tpm: 2, fgm: 7, fga: 16, ftm: 0, fta: 1, composite: 2.53, zScores: { pts: 0.655, reb: -0.557, ast: -0.129, stl: 2.564, blk: 0.536, tpm: 0.61, fgImpact: -0.144, ftImpact: -1.191, to: 0.181 } },
          { name: "Braden Smith", min: 24, pts: 10, reb: 1, ast: 5, stl: 2, blk: 2, to: 3, tpm: 0, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 1.99, zScores: { pts: -0.015, reb: -0.832, ast: 1.122, stl: 1.464, blk: 1.621, tpm: -0.768, fgImpact: 0.694, ftImpact: 0, to: -1.293 } },
          { name: "Larry Nance Jr.", min: 14, pts: 4, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.9, zScores: { pts: -0.685, reb: -0.007, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0.474, ftImpact: 0, to: 0.918 } },
          { name: "Obi Toppin", min: 19, pts: 11, reb: 5, ast: 1, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 6, ftm: 4, fta: 4, composite: -1.31, zScores: { pts: 0.097, reb: 0.268, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: 0.22, ftImpact: 1.31, to: -1.293 } },
          { name: "Jalen Slawson", min: 6, pts: 2, reb: 2, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -2.8, zScores: { pts: -0.908, reb: -0.557, ast: -0.546, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: -0.656, ftImpact: 0.655, to: 0.181 } },
          { name: "Jarace Walker", min: 17, pts: 2, reb: 8, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.82, zScores: { pts: -0.908, reb: 1.093, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.583, ftImpact: 0, to: 0.181 } },
          { name: "Jay Huff", min: 14, pts: 6, reb: 3, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.19, zScores: { pts: -0.462, reb: -0.282, ast: -0.546, stl: -0.736, blk: 0.536, tpm: 0.61, fgImpact: 0.146, ftImpact: 0, to: 0.918 } },
          { name: "Kobe Brown", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.72, zScores: { pts: -1.132, reb: -0.832, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.656, ftImpact: 0, to: 0.918 } },
          { name: "Quenton Jackson", min: 22, pts: 13, reb: 7, ast: 2, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 3.29, zScores: { pts: 0.32, reb: 0.818, ast: -0.129, stl: 1.464, blk: -0.55, tpm: 1.299, fgImpact: -0.035, ftImpact: 0.655, to: -0.556 } }
        ]
      },
      home: {
        abbr: "MEM", name: "Memphis Grizzlies", score: 103,
        players: [
          { name: "Cedric Coward", min: 33, pts: 23, reb: 9, ast: 4, stl: 4, blk: 0, to: 3, tpm: 4, fgm: 8, fga: 19, ftm: 3, fta: 4, composite: 6.71, zScores: { pts: 1.437, reb: 1.367, ast: 0.705, stl: 3.664, blk: -0.55, tpm: 1.987, fgImpact: -0.398, ftImpact: -0.208, to: -1.293 } },
          { name: "Cameron Boozer", min: 33, pts: 10, reb: 6, ast: 4, stl: 1, blk: 0, to: 4, tpm: 2, fgm: 4, fga: 14, ftm: 0, fta: 0, composite: -2.05, zScores: { pts: -0.015, reb: 0.543, ast: 0.705, stl: 0.364, blk: -0.55, tpm: 0.61, fgImpact: -1.675, ftImpact: 0, to: -2.03 } },
          { name: "Jaylen Wells", min: 21, pts: 0, reb: 1, ast: 3, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.45, zScores: { pts: -1.132, reb: -0.832, ast: 0.288, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: -0.984, ftImpact: 0, to: 0.181 } },
          { name: "Zach Edey", min: 25, pts: 11, reb: 13, ast: 1, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 4, fga: 6, ftm: 3, fta: 5, composite: 1.13, zScores: { pts: 0.097, reb: 2.467, ast: -0.546, stl: -0.736, blk: 1.621, tpm: -0.768, fgImpact: 0.949, ftImpact: -1.399, to: -0.556 } },
          { name: "Ty Jerome", min: 29, pts: 23, reb: 4, ast: 3, stl: 0, blk: 1, to: 4, tpm: 2, fgm: 10, fga: 20, ftm: 1, fta: 2, composite: -0.03, zScores: { pts: 1.437, reb: -0.007, ast: 0.288, stl: -0.736, blk: 0.536, tpm: 0.61, fgImpact: 0.732, ftImpact: -0.863, to: -2.03 } },
          { name: "Jerami Grant", min: 24, pts: 11, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 10, ftm: 1, fta: 2, composite: -0.75, zScores: { pts: 0.097, reb: -0.832, ast: -0.129, stl: 0.364, blk: -0.55, tpm: 0.61, fgImpact: -0.363, ftImpact: -0.863, to: 0.918 } },
          { name: "Kris Murray", min: 15, pts: 5, reb: 1, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.9, zScores: { pts: -0.573, reb: -0.832, ast: -0.546, stl: -0.736, blk: 0.536, tpm: -0.079, fgImpact: 0.146, ftImpact: 0, to: 0.181 } },
          { name: "Olivier-Maxence Prosper", min: 7, pts: 4, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.17, zScores: { pts: -0.685, reb: -0.282, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0.474, ftImpact: 0, to: 0.918 } },
          { name: "GG Jackson", min: 7, pts: 1, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -5.6, zScores: { pts: -1.02, reb: -0.557, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.328, ftImpact: -0.863, to: 0.181 } },
          { name: "Isaiah Stewart", min: 10, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -2.52, zScores: { pts: -0.462, reb: -0.832, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0.875, ftImpact: 0, to: 0.918 } },
          { name: "Quinten Post", min: 11, pts: 2, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -0.908, reb: -0.832, ast: -0.962, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -0.255, ftImpact: 0, to: 0.181 } },
          { name: "Cam Spencer", min: 24, pts: 7, reb: 6, ast: 9, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 3.04, zScores: { pts: -0.35, reb: 0.543, ast: 2.789, stl: 0.364, blk: -0.55, tpm: -0.079, fgImpact: 0.875, ftImpact: 0, to: -0.556 } }
        ]
      }
    },
      {
      id: "401909928",
      line: "Utah Jazz 113 @ New Orleans Pelicans 120 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "UTAH", name: "Utah Jazz", score: 113,
        players: [
          { name: "Lauri Markkanen", min: 39, pts: 21, reb: 10, ast: 4, stl: 1, blk: 2, to: 3, tpm: 5, fgm: 6, fga: 15, ftm: 4, fta: 6, composite: 5.31, zScores: { pts: 1.213, reb: 1.642, ast: 0.705, stl: 0.364, blk: 1.621, tpm: 2.676, fgImpact: -0.545, ftImpact: -1.071, to: -1.293 } },
          { name: "Jaxson Hayes", min: 21, pts: 2, reb: 7, ast: 1, stl: 0, blk: 1, to: 4, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -0.908, reb: 0.818, ast: -0.546, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: 0.073, ftImpact: 0, to: -2.03 } },
          { name: "Keyonte George", min: 44, pts: 39, reb: 2, ast: 9, stl: 4, blk: 1, to: 3, tpm: 2, fgm: 14, fga: 26, ftm: 9, fta: 13, composite: 8.84, zScores: { pts: 3.223, reb: -0.557, ast: 2.789, stl: 3.664, blk: 0.536, tpm: 0.61, fgImpact: 1.68, ftImpact: -1.816, to: -1.293 } },
          { name: "Ace Bailey", min: 35, pts: 15, reb: 5, ast: 1, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 6, fga: 14, ftm: 2, fta: 3, composite: -2.06, zScores: { pts: 0.543, reb: 0.268, ast: -0.546, stl: -0.736, blk: 0.536, tpm: -0.079, fgImpact: -0.217, ftImpact: -0.536, to: -1.293 } },
          { name: "Darryn Peterson", min: 30, pts: 7, reb: 2, ast: 7, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 8, ftm: 3, fta: 4, composite: -2.93, zScores: { pts: -0.35, reb: -0.557, ast: 1.955, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -1.165, ftImpact: -0.208, to: -0.556 } },
          { name: "Brice Sensabaugh", min: 12, pts: 6, reb: 2, ast: 0, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -2.42, zScores: { pts: -0.462, reb: -0.557, ast: -0.962, stl: 1.464, blk: -0.55, tpm: -0.079, fgImpact: 0.146, ftImpact: -0.863, to: -0.556 } },
          { name: "Mo Bamba", min: 15, pts: 7, reb: 10, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: 0.38, zScores: { pts: -0.35, reb: 1.642, ast: -0.546, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: 0.547, ftImpact: -0.863, to: 0.918 } },
          { name: "Svi Mykhailiuk", min: 17, pts: 6, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -2.91, zScores: { pts: -0.462, reb: -0.282, ast: -0.962, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -0.436, ftImpact: 0, to: 0.181 } },
          { name: "Josh Okogie", min: 26, pts: 3, reb: 6, ast: 1, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.22, zScores: { pts: -0.797, reb: 0.543, ast: -0.546, stl: -0.736, blk: 0.536, tpm: -0.079, fgImpact: -0.583, ftImpact: 0, to: -0.556 } },
          { name: "Josh Green", min: 23, pts: 7, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -2.7, zScores: { pts: -0.35, reb: -0.832, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: -0.108, ftImpact: 0, to: 0.918 } },
          { name: "Isaiah Collier", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.132, reb: -0.832, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.328, ftImpact: 0, to: 0.918 } }
        ]
      },
      home: {
        abbr: "NO", name: "New Orleans Pelicans", score: 120,
        players: [
          { name: "Herbert Jones", min: 37, pts: 2, reb: 5, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -3.54, zScores: { pts: -0.908, reb: 0.268, ast: -0.546, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: -1.567, ftImpact: 0, to: 0.181 } },
          { name: "Zion Williamson", min: 38, pts: 23, reb: 4, ast: 2, stl: 2, blk: 2, to: 2, tpm: 0, fgm: 6, fga: 14, ftm: 11, fta: 13, composite: 4.07, zScores: { pts: 1.437, reb: -0.007, ast: -0.129, stl: 1.464, blk: 1.621, tpm: -0.768, fgImpact: -0.217, ftImpact: 1.22, to: -0.556 } },
          { name: "Karlo Matkovic", min: 21, pts: 5, reb: 4, ast: 2, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.33, zScores: { pts: -0.573, reb: -0.007, ast: -0.129, stl: -0.736, blk: 0.536, tpm: -0.079, fgImpact: 0.474, ftImpact: 0, to: 0.181 } },
          { name: "Dejounte Murray", min: 45, pts: 20, reb: 8, ast: 4, stl: 4, blk: 0, to: 4, tpm: 1, fgm: 4, fga: 7, ftm: 11, fta: 11, composite: 8.13, zScores: { pts: 1.102, reb: 1.093, ast: 0.705, stl: 3.664, blk: -0.55, tpm: -0.079, fgImpact: 0.621, ftImpact: 3.601, to: -2.03 } },
          { name: "Jeremiah Fears", min: 34, pts: 19, reb: 6, ast: 2, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 16, ftm: 6, fta: 6, composite: 2.77, zScores: { pts: 0.99, reb: 0.543, ast: -0.129, stl: 1.464, blk: -0.55, tpm: -0.079, fgImpact: -0.873, ftImpact: 1.964, to: -0.556 } },
          { name: "Saddiq Bey", min: 29, pts: 22, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 9, fga: 14, ftm: 2, fta: 3, composite: 3.65, zScores: { pts: 1.325, reb: -0.007, ast: 0.288, stl: 0.364, blk: -0.55, tpm: 0.61, fgImpact: 1.97, ftImpact: -0.536, to: 0.181 } },
          { name: "Trendon Watford", min: 20, pts: 7, reb: 3, ast: 2, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 1, ftm: 5, fta: 6, composite: -1.07, zScores: { pts: -0.35, reb: -0.282, ast: -0.129, stl: 0.364, blk: 0.536, tpm: -0.768, fgImpact: 0.401, ftImpact: 0.446, to: -1.293 } },
          { name: "Derik Queen", min: 27, pts: 20, reb: 9, ast: 6, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 8, fga: 21, ftm: 4, fta: 4, composite: 2.74, zScores: { pts: 1.102, reb: 1.367, ast: 1.539, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: -1.054, ftImpact: 1.31, to: -0.556 } },
          { name: "Bennedict Mathurin", min: 15, pts: 2, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -4.3, zScores: { pts: -0.908, reb: 0.268, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -1.239, ftImpact: 0, to: 0.181 } }
        ]
      }
    },
      {
      id: "401909929",
      line: "Cleveland Cavaliers 116 @ Oklahoma City Thunder 124 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CLE", name: "Cleveland Cavaliers", score: 116,
        players: [
          { name: "Jarrett Allen", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.132, reb: -0.832, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.328, ftImpact: 0, to: 0.918 } },
          { name: "Evan Mobley", min: 33, pts: 16, reb: 10, ast: 3, stl: 0, blk: 3, to: 2, tpm: 1, fgm: 7, fga: 15, ftm: 1, fta: 2, composite: 3.24, zScores: { pts: 0.655, reb: 1.642, ast: 0.288, stl: -0.736, blk: 2.707, tpm: -0.079, fgImpact: 0.184, ftImpact: -0.863, to: -0.556 } },
          { name: "James Harden", min: 35, pts: 19, reb: 9, ast: 6, stl: 0, blk: 2, to: 3, tpm: 3, fgm: 5, fga: 16, ftm: 6, fta: 6, composite: 5.15, zScores: { pts: 0.99, reb: 1.367, ast: 1.539, stl: -0.736, blk: 1.621, tpm: 1.299, fgImpact: -1.602, ftImpact: 1.964, to: -1.293 } },
          { name: "Donovan Mitchell", min: 33, pts: 27, reb: 3, ast: 6, stl: 1, blk: 0, to: 2, tpm: 5, fgm: 10, fga: 17, ftm: 2, fta: 2, composite: 7.44, zScores: { pts: 1.883, reb: -0.282, ast: 1.539, stl: 0.364, blk: -0.55, tpm: 2.676, fgImpact: 1.716, ftImpact: 0.655, to: -0.556 } },
          { name: "Tyrese Proctor", min: 22, pts: 11, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 7, ftm: 1, fta: 1, composite: 0.59, zScores: { pts: 0.097, reb: -0.832, ast: -0.962, stl: 0.364, blk: -0.55, tpm: 0.61, fgImpact: 0.621, ftImpact: 0.327, to: 0.918 } },
          { name: "Mario Hezonja", min: 23, pts: 12, reb: 8, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: -0.11, zScores: { pts: 0.208, reb: 1.093, ast: -0.546, stl: -0.736, blk: -0.55, tpm: 0.61, fgImpact: 0.366, ftImpact: 0, to: -0.556 } },
          { name: "Tristan Enaruna", min: 16, pts: 4, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -2.11, zScores: { pts: -0.685, reb: -0.007, ast: -0.546, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -0.838, ftImpact: 0, to: 0.918 } },
          { name: "Thomas Bryant", min: 13, pts: 8, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 5, fta: 6, composite: -2.89, zScores: { pts: -0.238, reb: -1.107, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: -0.583, ftImpact: 0.446, to: 0.918 } },
          { name: "Sam Merrill", min: 27, pts: 10, reb: 7, ast: 1, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 3.23, zScores: { pts: -0.015, reb: 0.818, ast: -0.546, stl: 0.364, blk: 0.536, tpm: 0.61, fgImpact: -0.108, ftImpact: 0.655, to: 0.918 } },
          { name: "Craig Porter Jr.", min: 14, pts: 0, reb: 1, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.3, zScores: { pts: -1.132, reb: -0.832, ast: -0.546, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: 0, ftImpact: 0, to: 0.181 } },
          { name: "Meleek Thomas", min: 18, pts: 9, reb: 1, ast: 0, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -2.13, zScores: { pts: -0.127, reb: -0.832, ast: -0.962, stl: 0.364, blk: -0.55, tpm: 1.299, fgImpact: -0.764, ftImpact: 0, to: -0.556 } }
        ]
      },
      home: {
        abbr: "OKC", name: "Oklahoma City Thunder", score: 124,
        players: [
          { name: "Isaiah Hartenstein", min: 26, pts: 3, reb: 12, ast: 4, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: 2.37, zScores: { pts: -0.797, reb: 2.192, ast: 0.705, stl: 1.464, blk: -0.55, tpm: -0.768, fgImpact: 0.073, ftImpact: -0.863, to: 0.918 } },
          { name: "Aday Mara", min: 25, pts: 9, reb: 5, ast: 2, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 1, fta: 2, composite: 2.22, zScores: { pts: -0.127, reb: 0.268, ast: -0.129, stl: -0.736, blk: 2.707, tpm: -0.768, fgImpact: 0.949, ftImpact: -0.863, to: 0.918 } },
          { name: "Kenrich Williams", min: 29, pts: 13, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 1.07, zScores: { pts: 0.32, reb: -0.007, ast: -0.129, stl: -0.736, blk: -0.55, tpm: 1.299, fgImpact: 0.694, ftImpact: 0, to: 0.181 } },
          { name: "Shai Gilgeous-Alexander", min: 35, pts: 42, reb: 4, ast: 8, stl: 0, blk: 1, to: 4, tpm: 5, fgm: 11, fga: 26, ftm: 15, fta: 19, composite: 6.01, zScores: { pts: 3.558, reb: -0.007, ast: 2.372, stl: -0.736, blk: 0.536, tpm: 2.676, fgImpact: -0.507, ftImpact: 0.149, to: -2.03 } },
          { name: "Ajay Mitchell", min: 32, pts: 23, reb: 7, ast: 4, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 9, fga: 17, ftm: 4, fta: 6, composite: 2.79, zScores: { pts: 1.437, reb: 0.818, ast: 0.705, stl: 0.364, blk: -0.55, tpm: -0.079, fgImpact: 0.987, ftImpact: -1.071, to: 0.181 } },
          { name: "Alex Caruso", min: 20, pts: 7, reb: 4, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 4, fta: 4, composite: -0.2, zScores: { pts: -0.35, reb: -0.007, ast: 0.288, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: -0.255, ftImpact: 1.31, to: 0.181 } },
          { name: "Micah Peavy", min: 26, pts: 2, reb: 9, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -1.36, zScores: { pts: -0.908, reb: 1.367, ast: -0.546, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -1.239, ftImpact: 0, to: 0.918 } },
          { name: "Jared McCain", min: 25, pts: 9, reb: 1, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 11, ftm: 2, fta: 2, composite: -3.51, zScores: { pts: -0.127, reb: -0.832, ast: -0.962, stl: 0.364, blk: -0.55, tpm: -0.079, fgImpact: -1.42, ftImpact: 0.655, to: -0.556 } },
          { name: "Bennett Stirtz", min: 22, pts: 16, reb: 1, ast: 1, stl: 2, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 4.52, zScores: { pts: 0.655, reb: -0.832, ast: -0.546, stl: 1.464, blk: -0.55, tpm: 1.987, fgImpact: 1.423, ftImpact: 0, to: 0.918 } }
        ]
      }
    },
      {
      id: "401909930",
      line: "Minnesota Timberwolves 117 @ Houston Rockets 107 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIN", name: "Minnesota Timberwolves", score: 117,
        players: [
          { name: "Jaden McDaniels", min: 37, pts: 14, reb: 8, ast: 4, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 7, fga: 14, ftm: 0, fta: 0, composite: 2.33, zScores: { pts: 0.432, reb: 1.093, ast: 0.705, stl: 1.464, blk: -0.55, tpm: -0.768, fgImpact: 0.512, ftImpact: 0, to: -0.556 } },
          { name: "Jonathan Kuminga", min: 32, pts: 16, reb: 8, ast: 5, stl: 1, blk: 1, to: 1, tpm: 4, fgm: 5, fga: 10, ftm: 2, fta: 4, composite: 4.58, zScores: { pts: 0.655, reb: 1.093, ast: 1.122, stl: 0.364, blk: 0.536, tpm: 1.987, fgImpact: 0.366, ftImpact: -1.726, to: 0.181 } },
          { name: "Rudy Gobert", min: 33, pts: 8, reb: 11, ast: 2, stl: 1, blk: 4, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 2, fta: 6, composite: 1.64, zScores: { pts: -0.238, reb: 1.917, ast: -0.129, stl: 0.364, blk: 3.792, tpm: -0.768, fgImpact: -0.108, ftImpact: -4.107, to: 0.918 } },
          { name: "Ayo Dosunmu", min: 34, pts: 21, reb: 1, ast: 6, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 10, fga: 20, ftm: 1, fta: 2, composite: 2.85, zScores: { pts: 1.213, reb: -0.832, ast: 1.539, stl: 1.464, blk: -0.55, tpm: -0.768, fgImpact: 0.732, ftImpact: -0.863, to: 0.918 } },
          { name: "LaMelo Ball", min: 31, pts: 20, reb: 2, ast: 6, stl: 3, blk: 1, to: 7, tpm: 4, fgm: 6, fga: 11, ftm: 4, fta: 5, composite: 3.82, zScores: { pts: 1.102, reb: -0.557, ast: 1.539, stl: 2.564, blk: 0.536, tpm: 1.987, fgImpact: 0.767, ftImpact: 0.119, to: -4.241 } },
          { name: "Trey Lyles", min: 20, pts: 5, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.98, zScores: { pts: -0.573, reb: -0.557, ast: -0.962, stl: -0.736, blk: 0.536, tpm: -0.079, fgImpact: 0.474, ftImpact: 0, to: 0.918 } },
          { name: "Joan Beringer", min: 13, pts: 4, reb: 7, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.88, zScores: { pts: -0.685, reb: 0.818, ast: -0.962, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: 0.474, ftImpact: 0, to: -0.556 } },
          { name: "Jaylen Clark", min: 25, pts: 10, reb: 4, ast: 1, stl: 2, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 0.61, zScores: { pts: -0.015, reb: -0.007, ast: -0.546, stl: 1.464, blk: -0.55, tpm: 0.61, fgImpact: 0.949, ftImpact: 0, to: -1.293 } },
          { name: "Bones Hyland", min: 16, pts: 19, reb: 2, ast: 4, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 7, fga: 13, ftm: 1, fta: 2, composite: 2.36, zScores: { pts: 0.99, reb: -0.557, ast: 0.705, stl: 0.364, blk: -0.55, tpm: 1.987, fgImpact: 0.84, ftImpact: -0.863, to: -0.556 } }
        ]
      },
      home: {
        abbr: "HOU", name: "Houston Rockets", score: 107,
        players: [
          { name: "Kevin Durant", min: 35, pts: 21, reb: 5, ast: 2, stl: 1, blk: 1, to: 4, tpm: 2, fgm: 7, fga: 14, ftm: 5, fta: 6, composite: 1.79, zScores: { pts: 1.213, reb: 0.268, ast: -0.129, stl: 0.364, blk: 0.536, tpm: 0.61, fgImpact: 0.512, ftImpact: 0.446, to: -2.03 } },
          { name: "Jabari Smith Jr.", min: 35, pts: 11, reb: 4, ast: 2, stl: 0, blk: 3, to: 1, tpm: 2, fgm: 3, fga: 4, ftm: 3, fta: 4, composite: 3.39, zScores: { pts: 0.097, reb: -0.007, ast: -0.129, stl: -0.736, blk: 2.707, tpm: 0.61, fgImpact: 0.875, ftImpact: -0.208, to: 0.181 } },
          { name: "Alperen Sengun", min: 39, pts: 17, reb: 12, ast: 10, stl: 0, blk: 3, to: 4, tpm: 0, fgm: 5, fga: 15, ftm: 7, fta: 9, composite: 3.97, zScores: { pts: 0.767, reb: 2.192, ast: 3.206, stl: -0.736, blk: 2.707, tpm: -0.768, fgImpact: -1.274, ftImpact: -0.089, to: -2.03 } },
          { name: "Fred VanVleet", min: 30, pts: 18, reb: 3, ast: 3, stl: 0, blk: 0, to: 4, tpm: 4, fgm: 6, fga: 12, ftm: 2, fta: 2, composite: 0.65, zScores: { pts: 0.878, reb: -0.282, ast: 0.288, stl: -0.736, blk: -0.55, tpm: 1.987, fgImpact: 0.439, ftImpact: 0.655, to: -2.03 } },
          { name: "Amen Thompson", min: 32, pts: 11, reb: 8, ast: 1, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 9, ftm: 5, fta: 6, composite: -3.02, zScores: { pts: 0.097, reb: 1.093, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.764, ftImpact: 0.446, to: -1.293 } },
          { name: "Tari Eason", min: 24, pts: 9, reb: 6, ast: 1, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 1.26, zScores: { pts: -0.127, reb: 0.543, ast: -0.546, stl: 1.464, blk: -0.55, tpm: -0.079, fgImpact: -0.363, ftImpact: 0, to: 0.918 } },
          { name: "Oscar Tshiebwe", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -0.908, reb: -1.107, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0.401, ftImpact: 0, to: 0.918 } },
          { name: "Marcus Smart", min: 18, pts: 4, reb: 1, ast: 1, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: -4.67, zScores: { pts: -0.685, reb: -0.832, ast: -0.546, stl: -0.736, blk: 0.536, tpm: -0.079, fgImpact: -0.911, ftImpact: -0.863, to: -0.556 } },
          { name: "Bogdan Bogdanovic", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.34, zScores: { pts: -1.132, reb: -1.107, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0, ftImpact: 0, to: 0.918 } },
          { name: "Reed Sheppard", min: 21, pts: 14, reb: 2, ast: 2, stl: 3, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 12, ftm: 1, fta: 1, composite: 4.01, zScores: { pts: 0.432, reb: -0.557, ast: -0.129, stl: 2.564, blk: -0.55, tpm: 1.299, fgImpact: -0.29, ftImpact: 0.327, to: 0.918 } }
        ]
      }
    },
      {
      id: "401909931",
      line: "Toronto Raptors 109 @ Denver Nuggets 128 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TOR", name: "Toronto Raptors", score: 109,
        players: [
          { name: "RJ Barrett", min: 33, pts: 22, reb: 5, ast: 3, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 7, fga: 17, ftm: 5, fta: 8, composite: 0.41, zScores: { pts: 1.325, reb: 0.268, ast: 0.288, stl: -0.736, blk: -0.55, tpm: 1.299, fgImpact: -0.472, ftImpact: -1.935, to: 0.918 } },
          { name: "Scottie Barnes", min: 32, pts: 17, reb: 6, ast: 6, stl: 3, blk: 0, to: 5, tpm: 1, fgm: 7, fga: 15, ftm: 2, fta: 4, composite: 0.47, zScores: { pts: 0.767, reb: 0.543, ast: 1.539, stl: 2.564, blk: -0.55, tpm: -0.079, fgImpact: 0.184, ftImpact: -1.726, to: -2.767 } },
          { name: "Collin Murray-Boyles", min: 23, pts: 13, reb: 3, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: -0.92, zScores: { pts: 0.32, reb: -0.282, ast: -0.129, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: 1.095, ftImpact: 0, to: -0.556 } },
          { name: "Immanuel Quickley", min: 32, pts: 13, reb: 1, ast: 7, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 12, ftm: 1, fta: 1, composite: 3.19, zScores: { pts: 0.32, reb: -0.832, ast: 1.955, stl: 1.464, blk: -0.55, tpm: 0.61, fgImpact: -0.29, ftImpact: 0.327, to: 0.181 } },
          { name: "Ja'Kobe Walter", min: 27, pts: 8, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 1, fta: 2, composite: -4.42, zScores: { pts: -0.238, reb: -0.832, ast: -0.129, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: -0.436, ftImpact: -0.863, to: -0.556 } },
          { name: "Kyle Anderson", min: 4, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.62, zScores: { pts: -0.908, reb: -1.107, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0.073, ftImpact: 0, to: 0.918 } },
          { name: "Trayce Jackson-Davis", min: 4, pts: 1, reb: 0, ast: 0, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -1.79, zScores: { pts: -1.02, reb: -1.107, ast: -0.962, stl: 2.564, blk: -0.55, tpm: -0.768, fgImpact: 0, ftImpact: -0.863, to: 0.918 } },
          { name: "Jamison Battle", min: 19, pts: 9, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 1, fta: 1, composite: -0.8, zScores: { pts: -0.127, reb: -0.832, ast: -0.962, stl: -0.736, blk: -0.55, tpm: 0.61, fgImpact: 0.547, ftImpact: 0.327, to: 0.918 } },
          { name: "Allen Graves", min: 14, pts: 5, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.25, zScores: { pts: -0.573, reb: -0.832, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: 0.146, ftImpact: 0, to: 0.918 } },
          { name: "Jakob Poeltl", min: 19, pts: 8, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: -0.37, zScores: { pts: -0.238, reb: 0.268, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 1.277, ftImpact: 0, to: 0.918 } },
          { name: "Jamal Shead", min: 20, pts: 3, reb: 3, ast: 6, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.35, zScores: { pts: -0.797, reb: -0.282, ast: 1.539, stl: 0.364, blk: -0.55, tpm: -0.079, fgImpact: -0.255, ftImpact: 0, to: -1.293 } },
          { name: "Jaden Bradley", min: 4, pts: 2, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -2.08, zScores: { pts: -0.908, reb: -0.832, ast: -0.962, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: 0, ftImpact: 0.655, to: 0.918 } },
          { name: "Alijah Martin", min: 9, pts: 6, reb: 1, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: -2.65, zScores: { pts: -0.462, reb: -0.832, ast: -0.962, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: 0.474, ftImpact: 0.655, to: -0.556 } }
        ]
      },
      home: {
        abbr: "DEN", name: "Denver Nuggets", score: 128,
        players: [
          { name: "Aaron Gordon", min: 25, pts: 17, reb: 1, ast: 0, stl: 2, blk: 1, to: 1, tpm: 1, fgm: 7, fga: 9, ftm: 2, fta: 2, composite: 3.88, zScores: { pts: 0.767, reb: -0.832, ast: -0.962, stl: 1.464, blk: 0.536, tpm: -0.079, fgImpact: 2.152, ftImpact: 0.655, to: 0.181 } },
          { name: "Cameron Johnson", min: 30, pts: 12, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 1.14, zScores: { pts: 0.208, reb: -0.557, ast: -0.129, stl: 0.364, blk: -0.55, tpm: 1.987, fgImpact: -0.363, ftImpact: 0, to: 0.181 } },
          { name: "Nikola Jokic", min: 30, pts: 32, reb: 10, ast: 11, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 13, fga: 19, ftm: 6, fta: 7, composite: 12.42, zScores: { pts: 2.442, reb: 1.642, ast: 3.623, stl: 2.564, blk: -0.55, tpm: -0.768, fgImpact: 3.247, ftImpact: 0.774, to: -0.556 } },
          { name: "Jamal Murray", min: 28, pts: 14, reb: 5, ast: 7, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 11, ftm: 4, fta: 4, composite: 2.4, zScores: { pts: 0.432, reb: 0.268, ast: 1.955, stl: 0.364, blk: -0.55, tpm: 0.61, fgImpact: -0.691, ftImpact: 1.31, to: -1.293 } },
          { name: "Christian Braun", min: 28, pts: 11, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 5, ftm: 2, fta: 2, composite: 1.95, zScores: { pts: 0.097, reb: -0.282, ast: 0.288, stl: 0.364, blk: -0.55, tpm: -0.079, fgImpact: 1.277, ftImpact: 0.655, to: 0.181 } },
          { name: "Alpha Diallo", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.4, zScores: { pts: -1.132, reb: -1.107, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.328, ftImpact: 0, to: 0.181 } },
          { name: "Marvin Bagley III", min: 14, pts: 10, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 2, fta: 2, composite: -0.64, zScores: { pts: -0.015, reb: -0.557, ast: -0.129, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 1.277, ftImpact: 0.655, to: 0.181 } },
          { name: "Zeke Nnaji", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -3.46, zScores: { pts: -0.908, reb: -1.107, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0, ftImpact: 0.655, to: 0.918 } },
          { name: "DaRon Holmes II", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.8, zScores: { pts: -1.132, reb: -0.832, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0, ftImpact: 0, to: 0.181 } },
          { name: "Bryce Hopkins", min: 28, pts: 18, reb: 4, ast: 1, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 7, ftm: 5, fta: 8, composite: 0.75, zScores: { pts: 0.878, reb: -0.007, ast: -0.546, stl: 1.464, blk: -0.55, tpm: -0.079, fgImpact: 2.079, ftImpact: -1.935, to: -0.556 } },
          { name: "Trevon Brazile", min: 23, pts: 6, reb: 7, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -0.01, zScores: { pts: -0.462, reb: 0.818, ast: -0.546, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: 0.22, ftImpact: 0, to: 0.918 } },
          { name: "Tyus Jones", min: 18, pts: 6, reb: 1, ast: 8, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 0.08, zScores: { pts: -0.462, reb: -0.832, ast: 2.372, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0.875, ftImpact: 0, to: 0.181 } },
          { name: "Ryan Nembhard", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.4, zScores: { pts: -1.132, reb: -1.107, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.328, ftImpact: 0, to: 0.181 } }
        ]
      }
    },
      {
      id: "401909932",
      line: "Portland Trail Blazers 132 @ Phoenix Suns 119 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "POR", name: "Portland Trail Blazers", score: 132,
        players: [
          { name: "Toumani Camara", min: 32, pts: 11, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 9, ftm: 2, fta: 6, composite: -6.1, zScores: { pts: 0.097, reb: -0.007, ast: -0.129, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: -0.035, ftImpact: -4.107, to: -0.556 } },
          { name: "Deni Avdija", min: 35, pts: 21, reb: 7, ast: 12, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 7, fga: 16, ftm: 6, fta: 9, composite: 1.66, zScores: { pts: 1.213, reb: 0.818, ast: 4.04, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: -0.144, ftImpact: -1.607, to: -1.293 } },
          { name: "Donovan Clingan", min: 29, pts: 24, reb: 11, ast: 1, stl: 1, blk: 3, to: 4, tpm: 1, fgm: 9, fga: 12, ftm: 5, fta: 6, composite: 6.95, zScores: { pts: 1.548, reb: 1.917, ast: -0.546, stl: 0.364, blk: 2.707, tpm: -0.079, fgImpact: 2.626, ftImpact: 0.446, to: -2.03 } },
          { name: "Damian Lillard", min: 33, pts: 25, reb: 3, ast: 5, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 9, fga: 17, ftm: 5, fta: 5, composite: 4.63, zScores: { pts: 1.66, reb: -0.282, ast: 1.122, stl: -0.736, blk: -0.55, tpm: 0.61, fgImpact: 0.987, ftImpact: 1.637, to: 0.181 } },
          { name: "Scoot Henderson", min: 22, pts: 9, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 6, fta: 8, composite: -3.74, zScores: { pts: -0.127, reb: -0.557, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: -0.911, ftImpact: -0.417, to: 0.181 } },
          { name: "Robert Williams III", min: 16, pts: 9, reb: 8, ast: 1, stl: 2, blk: 3, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 1, fta: 1, composite: 4.62, zScores: { pts: -0.127, reb: 1.093, ast: -0.546, stl: 1.464, blk: 2.707, tpm: -0.768, fgImpact: 0.293, ftImpact: 0.327, to: 0.181 } },
          { name: "Micah Potter", min: 2, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -3.39, zScores: { pts: -0.685, reb: -0.832, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: 0.401, ftImpact: -0.863, to: 0.918 } },
          { name: "Branden Carlson", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -0.908, reb: -1.107, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0.401, ftImpact: 0, to: 0.918 } },
          { name: "Yang Hansen", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.07, zScores: { pts: -1.132, reb: -1.107, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0, ftImpact: 0, to: 0.181 } },
          { name: "Jrue Holiday", min: 28, pts: 15, reb: 4, ast: 0, stl: 1, blk: 0, to: 3, tpm: 5, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 1.47, zScores: { pts: 0.543, reb: -0.007, ast: -0.962, stl: 0.364, blk: -0.55, tpm: 2.676, fgImpact: 0.694, ftImpact: 0, to: -1.293 } },
          { name: "Vit Krejci", min: 12, pts: 5, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.61, zScores: { pts: -0.573, reb: -0.282, ast: -0.129, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: -0.182, ftImpact: 0, to: 0.918 } },
          { name: "Chris Youngblood", min: 4, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.66, zScores: { pts: -1.132, reb: -1.107, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0, ftImpact: 0, to: 0.181 } },
          { name: "Sidy Cissoko", min: 21, pts: 7, reb: 4, ast: 4, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 4, fta: 4, composite: 3.13, zScores: { pts: -0.35, reb: -0.007, ast: 0.705, stl: -0.736, blk: 1.621, tpm: -0.079, fgImpact: -0.255, ftImpact: 1.31, to: 0.918 } }
        ]
      },
      home: {
        abbr: "PHX", name: "Phoenix Suns", score: 119,
        players: [
          { name: "Dillon Brooks", min: 35, pts: 15, reb: 6, ast: 2, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 7, fga: 15, ftm: 1, fta: 2, composite: -2.7, zScores: { pts: 0.543, reb: 0.543, ast: -0.129, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: 0.184, ftImpact: -0.863, to: -2.03 } },
          { name: "Miles Bridges", min: 31, pts: 18, reb: 7, ast: 5, stl: 2, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 13, ftm: 2, fta: 3, composite: 6.21, zScores: { pts: 0.878, reb: 0.818, ast: 1.122, stl: 1.464, blk: -0.55, tpm: 1.987, fgImpact: 0.111, ftImpact: -0.536, to: 0.918 } },
          { name: "Khaman Maluach", min: 16, pts: 6, reb: 6, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -0.21, zScores: { pts: -0.462, reb: 0.543, ast: -0.129, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: -0.108, ftImpact: 0, to: 0.918 } },
          { name: "Devin Booker", min: 34, pts: 33, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 9, fga: 19, ftm: 13, fta: 13, composite: 4.95, zScores: { pts: 2.553, reb: -0.832, ast: -0.129, stl: -0.736, blk: -0.55, tpm: 0.61, fgImpact: 0.331, ftImpact: 4.256, to: -0.556 } },
          { name: "Jalen Green", min: 32, pts: 22, reb: 2, ast: 2, stl: 0, blk: 2, to: 2, tpm: 2, fgm: 6, fga: 17, ftm: 8, fta: 8, composite: 3, zScores: { pts: 1.325, reb: -0.557, ast: -0.129, stl: -0.736, blk: 1.621, tpm: 0.61, fgImpact: -1.201, ftImpact: 2.619, to: -0.556 } },
          { name: "Oso Ighodaro", min: 23, pts: 9, reb: 7, ast: 7, stl: 0, blk: 3, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 1, fta: 3, composite: 2.93, zScores: { pts: -0.127, reb: 0.818, ast: 1.955, stl: -0.736, blk: 2.707, tpm: -0.768, fgImpact: 0.949, ftImpact: -2.054, to: 0.181 } },
          { name: "Ryan Dunn", min: 18, pts: 2, reb: 6, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -1.13, zScores: { pts: -0.908, reb: 0.543, ast: -0.129, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: -0.583, ftImpact: 0, to: 0.918 } },
          { name: "Koa Peat", min: 3, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -3.18, zScores: { pts: -0.908, reb: -0.832, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0, ftImpact: 0.655, to: 0.918 } },
          { name: "Duop Reath", min: 7, pts: 7, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -1.99, zScores: { pts: -0.35, reb: -1.107, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: 0.875, ftImpact: 0, to: 0.918 } },
          { name: "Luke Kennard", min: 14, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.66, zScores: { pts: -1.132, reb: -1.107, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0, ftImpact: 0, to: 0.181 } },
          { name: "Collin Gillespie", min: 23, pts: 2, reb: 3, ast: 2, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.64, zScores: { pts: -0.908, reb: -0.282, ast: -0.129, stl: 1.464, blk: -0.55, tpm: -0.768, fgImpact: -0.911, ftImpact: 0, to: -0.556 } },
          { name: "Jamaree Bouyea", min: 3, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.91, zScores: { pts: -0.797, reb: -1.107, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: 0.401, ftImpact: 0, to: 0.918 } },
          { name: "Pat Spencer", min: 3, pts: 0, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.83, zScores: { pts: -1.132, reb: -1.107, ast: -0.129, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.328, ftImpact: 0, to: 0.918 } }
        ]
      }
    },
      {
      id: "401909933",
      line: "Dallas Mavericks 111 @ San Antonio Spurs 112 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DAL", name: "Dallas Mavericks", score: 111,
        players: [
          { name: "Daniel Gafford", min: 18, pts: 2, reb: 4, ast: 1, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 1, composite: -3.23, zScores: { pts: -0.908, reb: -0.007, ast: -0.546, stl: 0.364, blk: 1.621, tpm: -0.768, fgImpact: -1.239, ftImpact: -1.191, to: -0.556 } },
          { name: "P.J. Washington", min: 39, pts: 21, reb: 10, ast: 3, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 7, fga: 18, ftm: 4, fta: 5, composite: 3.74, zScores: { pts: 1.213, reb: 1.642, ast: 0.288, stl: -0.736, blk: 0.536, tpm: 1.299, fgImpact: -0.8, ftImpact: 0.119, to: 0.181 } },
          { name: "Cooper Flagg", min: 40, pts: 19, reb: 10, ast: 5, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 19, ftm: 5, fta: 7, composite: 0.01, zScores: { pts: 0.99, reb: 1.642, ast: 1.122, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -1.128, ftImpact: -0.744, to: 0.181 } },
          { name: "Zaccharie Risacher", min: 18, pts: 2, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.22, zScores: { pts: -0.908, reb: -0.832, ast: -0.129, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -0.583, ftImpact: 0, to: 0.181 } },
          { name: "Kyrie Irving", min: 36, pts: 29, reb: 7, ast: 5, stl: 1, blk: 0, to: 1, tpm: 5, fgm: 9, fga: 27, ftm: 6, fta: 8, composite: 4.01, zScores: { pts: 2.107, reb: 0.818, ast: 1.122, stl: 0.364, blk: -0.55, tpm: 2.676, fgImpact: -2.293, ftImpact: -0.417, to: 0.181 } },
          { name: "Caleb Martin", min: 20, pts: 0, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.58, zScores: { pts: -1.132, reb: -0.282, ast: -0.129, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: 0, ftImpact: 0, to: 0.918 } },
          { name: "Naji Marshall", min: 26, pts: 22, reb: 5, ast: 3, stl: 0, blk: 1, to: 2, tpm: 3, fgm: 9, fga: 12, ftm: 1, fta: 1, composite: 5.38, zScores: { pts: 1.325, reb: 0.268, ast: 0.288, stl: -0.736, blk: 0.536, tpm: 1.299, fgImpact: 2.626, ftImpact: 0.327, to: -0.556 } },
          { name: "Morez Johnson Jr.", min: 18, pts: 8, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 3, fta: 4, composite: -1.13, zScores: { pts: -0.238, reb: -0.282, ast: -0.546, stl: 0.364, blk: -0.55, tpm: -0.079, fgImpact: -0.51, ftImpact: -0.208, to: 0.918 } },
          { name: "Marcus Sasser", min: 5, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -1.132, reb: -0.832, ast: -0.129, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.328, ftImpact: 0, to: 0.918 } },
          { name: "Walter Clayton Jr.", min: 21, pts: 8, reb: 6, ast: 5, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 0.9, zScores: { pts: -0.238, reb: 0.543, ast: 1.122, stl: -0.736, blk: -0.55, tpm: 0.61, fgImpact: -0.764, ftImpact: 0, to: 0.918 } }
        ]
      },
      home: {
        abbr: "SA", name: "San Antonio Spurs", score: 112,
        players: [
          { name: "Victor Wembanyama", min: 34, pts: 52, reb: 24, ast: 2, stl: 2, blk: 8, to: 1, tpm: 1, fgm: 16, fga: 28, ftm: 19, fta: 23, composite: 23.68, zScores: { pts: 4.675, reb: 5.491, ast: -0.129, stl: 1.464, blk: 8.134, tpm: -0.079, fgImpact: 2.483, ftImpact: 1.458, to: 0.181 } },
          { name: "De'Aaron Fox", min: 33, pts: 10, reb: 3, ast: 4, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 10, ftm: 4, fta: 4, composite: -0.54, zScores: { pts: -0.015, reb: -0.282, ast: 0.705, stl: 0.364, blk: 0.536, tpm: -0.768, fgImpact: -1.092, ftImpact: 1.31, to: -1.293 } },
          { name: "Devin Vassell", min: 36, pts: 2, reb: 7, ast: 4, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 8, ftm: 2, fta: 2, composite: 0.8, zScores: { pts: -0.908, reb: 0.818, ast: 0.705, stl: 1.464, blk: 0.536, tpm: -0.768, fgImpact: -2.624, ftImpact: 0.655, to: 0.918 } },
          { name: "Stephon Castle", min: 35, pts: 17, reb: 10, ast: 3, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 20, ftm: 3, fta: 4, composite: -0.93, zScores: { pts: 0.767, reb: 1.642, ast: 0.288, stl: -0.736, blk: -0.55, tpm: 0.61, fgImpact: -2.185, ftImpact: -0.208, to: -0.556 } },
          { name: "Dylan Harper", min: 36, pts: 21, reb: 5, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 9, fga: 15, ftm: 2, fta: 2, composite: 0.9, zScores: { pts: 1.213, reb: 0.268, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: 1.642, ftImpact: 0.655, to: -0.556 } },
          { name: "Harrison Barnes", min: 13, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -3.44, zScores: { pts: -0.685, reb: -0.557, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: 0.073, ftImpact: -0.863, to: 0.918 } },
          { name: "Keldon Johnson", min: 19, pts: 4, reb: 5, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -3.41, zScores: { pts: -0.685, reb: 0.268, ast: -0.129, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.911, ftImpact: 0.655, to: -0.556 } },
          { name: "Julian Champagnie", min: 21, pts: 0, reb: 4, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 6, ftm: 0, fta: 0, composite: -2.85, zScores: { pts: -1.132, reb: -0.007, ast: 0.288, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -1.968, ftImpact: 0, to: 0.918 } },
          { name: "Luke Kornet", min: 14, pts: 2, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.6, zScores: { pts: -0.908, reb: -0.832, ast: -0.129, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0.401, ftImpact: 0, to: 0.918 } }
        ]
      }
    },
      {
      id: "401909934",
      line: "Los Angeles Lakers 116 @ Sacramento Kings 103 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LAL", name: "Los Angeles Lakers", score: 116,
        players: [
          { name: "Jake LaRavia", min: 21, pts: 9, reb: 2, ast: 2, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 3, fga: 3, ftm: 1, fta: 2, composite: 1.22, zScores: { pts: -0.127, reb: -0.557, ast: -0.129, stl: 0.364, blk: 0.536, tpm: 0.61, fgImpact: 1.203, ftImpact: -0.863, to: 0.181 } },
          { name: "Walker Kessler", min: 29, pts: 15, reb: 8, ast: 0, stl: 3, blk: 4, to: 0, tpm: 0, fgm: 6, fga: 8, ftm: 3, fta: 4, composite: 8.72, zScores: { pts: 0.543, reb: 1.093, ast: -0.962, stl: 2.564, blk: 3.792, tpm: -0.768, fgImpact: 1.751, ftImpact: -0.208, to: 0.918 } },
          { name: "Matisse Thybulle", min: 23, pts: 3, reb: 1, ast: 2, stl: 2, blk: 2, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: 1.26, zScores: { pts: -0.797, reb: -0.832, ast: -0.129, stl: 1.464, blk: 1.621, tpm: -0.079, fgImpact: -0.911, ftImpact: 0, to: 0.918 } },
          { name: "Luka Doncic", min: 35, pts: 40, reb: 9, ast: 7, stl: 1, blk: 1, to: 6, tpm: 6, fgm: 11, fga: 23, ftm: 12, fta: 13, composite: 10.63, zScores: { pts: 3.335, reb: 1.367, ast: 1.955, stl: 0.364, blk: 0.536, tpm: 3.365, fgImpact: 0.477, ftImpact: 2.738, to: -3.504 } },
          { name: "Austin Reaves", min: 37, pts: 21, reb: 3, ast: 4, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 7, fga: 15, ftm: 6, fta: 6, composite: 3.34, zScores: { pts: 1.213, reb: -0.282, ast: 0.705, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: 0.184, ftImpact: 1.964, to: 0.918 } },
          { name: "Jarred Vanderbilt", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.98, zScores: { pts: -1.132, reb: -0.832, ast: -0.962, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: 0, ftImpact: 0, to: 0.918 } },
          { name: "Sandro Mamukelashvili", min: 19, pts: 2, reb: 6, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 2, fta: 2, composite: -2.35, zScores: { pts: -0.908, reb: 0.543, ast: -0.546, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: -1.312, ftImpact: 0.655, to: 0.181 } },
          { name: "Ziaire Williams", min: 23, pts: 10, reb: 4, ast: 1, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 3, fta: 3, composite: 2.06, zScores: { pts: -0.015, reb: -0.007, ast: -0.546, stl: 1.464, blk: -0.55, tpm: -0.079, fgImpact: -0.108, ftImpact: 0.982, to: 0.918 } },
          { name: "Lawson Lovering", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.25, zScores: { pts: -1.132, reb: -1.107, ast: -0.962, stl: -0.736, blk: 0.536, tpm: -0.768, fgImpact: 0, ftImpact: 0, to: 0.918 } },
          { name: "Collin Sexton", min: 16, pts: 10, reb: 3, ast: 1, stl: 0, blk: 2, to: 2, tpm: 1, fgm: 2, fga: 7, ftm: 5, fta: 6, composite: -0.98, zScores: { pts: -0.015, reb: -0.282, ast: -0.546, stl: -0.736, blk: 1.621, tpm: -0.079, fgImpact: -0.838, ftImpact: 0.446, to: -0.556 } },
          { name: "Quentin Grimes", min: 25, pts: 6, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -2.14, zScores: { pts: -0.462, reb: -0.832, ast: -0.546, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -0.182, ftImpact: 0.655, to: 0.181 } },
          { name: "Bronny James", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.34, zScores: { pts: -1.132, reb: -1.107, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0, ftImpact: 0, to: 0.918 } },
          { name: "Jaden Hardy", min: 1, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.82, zScores: { pts: -1.132, reb: -1.107, ast: -0.546, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: 0, ftImpact: 0, to: 0.918 } },
          { name: "Cameron Carr", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.66, zScores: { pts: -1.132, reb: -1.107, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.328, ftImpact: 0, to: 0.918 } }
        ]
      },
      home: {
        abbr: "SAC", name: "Sacramento Kings", score: 103,
        players: [
          { name: "Domantas Sabonis", min: 35, pts: 16, reb: 17, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 10, ftm: 6, fta: 9, composite: 0.93, zScores: { pts: 0.655, reb: 3.566, ast: -0.546, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: 0.366, ftImpact: -1.607, to: -0.556 } },
          { name: "De'Andre Hunter", min: 38, pts: 14, reb: 2, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 10, ftm: 5, fta: 6, composite: -2.09, zScores: { pts: 0.432, reb: -0.557, ast: -0.129, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: -0.363, ftImpact: 0.446, to: -0.556 } },
          { name: "Precious Achiuwa", min: 17, pts: 7, reb: 3, ast: 1, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 0.44, zScores: { pts: -0.35, reb: -0.282, ast: -0.546, stl: -0.736, blk: 1.621, tpm: -0.079, fgImpact: -0.108, ftImpact: 0, to: 0.918 } },
          { name: "Zach LaVine", min: 35, pts: 21, reb: 4, ast: 1, stl: 1, blk: 2, to: 6, tpm: 3, fgm: 6, fga: 14, ftm: 6, fta: 7, composite: 1, zScores: { pts: 1.213, reb: -0.007, ast: -0.546, stl: 0.364, blk: 1.621, tpm: 1.299, fgImpact: -0.217, ftImpact: 0.774, to: -3.504 } },
          { name: "Darius Acuff Jr.", min: 42, pts: 22, reb: 3, ast: 12, stl: 2, blk: 0, to: 4, tpm: 3, fgm: 8, fga: 24, ftm: 3, fta: 4, composite: 3.02, zScores: { pts: 1.325, reb: -0.282, ast: 4.04, stl: 1.464, blk: -0.55, tpm: 1.299, fgImpact: -2.038, ftImpact: -0.208, to: -2.03 } },
          { name: "Leaky Black", min: 22, pts: 3, reb: 6, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -2.28, zScores: { pts: -0.797, reb: 0.543, ast: -0.546, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -0.583, ftImpact: -0.863, to: 0.918 } },
          { name: "Dylan Cardwell", min: 13, pts: 4, reb: 6, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.67, zScores: { pts: -0.685, reb: 0.543, ast: -0.962, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: 0.474, ftImpact: 0, to: 0.918 } },
          { name: "Malik Monk", min: 24, pts: 13, reb: 2, ast: 3, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 16, ftm: 0, fta: 0, composite: -2.09, zScores: { pts: 0.32, reb: -0.557, ast: 0.288, stl: -0.736, blk: -0.55, tpm: 1.299, fgImpact: -1.602, ftImpact: 0, to: -0.556 } },
          { name: "Nique Clifford", min: 3, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.52, zScores: { pts: -1.132, reb: -0.557, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0, ftImpact: 0, to: 0.181 } },
          { name: "Emanuel Sharp", min: 10, pts: 3, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.13, zScores: { pts: -0.797, reb: -0.832, ast: -0.129, stl: -0.736, blk: -0.55, tpm: -0.079, fgImpact: 0.073, ftImpact: 0, to: 0.918 } }
        ]
      }
    },
      {
      id: "401909935",
      line: "Miami Heat 117 @ LA Clippers 116 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "MIA", name: "Miami Heat", score: 117,
        players: [
          { name: "Giannis Antetokounmpo", min: 41, pts: 27, reb: 14, ast: 6, stl: 2, blk: 3, to: 3, tpm: 0, fgm: 8, fga: 20, ftm: 11, fta: 13, composite: 8.77, zScores: { pts: 1.883, reb: 2.742, ast: 1.539, stl: 1.464, blk: 2.707, tpm: -0.768, fgImpact: -0.726, ftImpact: 1.22, to: -1.293 } },
          { name: "Andrew Wiggins", min: 23, pts: 3, reb: 4, ast: 1, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.99, zScores: { pts: -0.797, reb: -0.007, ast: -0.546, stl: 0.364, blk: 0.536, tpm: -0.079, fgImpact: -0.911, ftImpact: 0, to: -0.556 } },
          { name: "Bam Adebayo", min: 41, pts: 35, reb: 10, ast: 4, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 14, fga: 20, ftm: 6, fta: 8, composite: 8.27, zScores: { pts: 2.777, reb: 1.642, ast: 0.705, stl: 0.364, blk: -0.55, tpm: -0.079, fgImpact: 3.648, ftImpact: -0.417, to: 0.181 } },
          { name: "Klay Thompson", min: 35, pts: 30, reb: 5, ast: 3, stl: 0, blk: 1, to: 2, tpm: 8, fgm: 11, fga: 22, ftm: 0, fta: 0, composite: 7.57, zScores: { pts: 2.218, reb: 0.268, ast: 0.288, stl: -0.736, blk: 0.536, tpm: 4.742, fgImpact: 0.805, ftImpact: 0, to: -0.556 } },
          { name: "Davion Mitchell", min: 43, pts: 11, reb: 2, ast: 10, stl: 4, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 13, ftm: 1, fta: 1, composite: 6.07, zScores: { pts: 0.097, reb: -0.557, ast: 3.206, stl: 3.664, blk: 0.536, tpm: -0.768, fgImpact: -0.618, ftImpact: 0.327, to: 0.181 } },
          { name: "Bobby Portis", min: 18, pts: 4, reb: 10, ast: 5, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: 0.8, zScores: { pts: -0.685, reb: 1.642, ast: 1.122, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -0.51, ftImpact: 0, to: 0.181 } },
          { name: "Simone Fontecchio", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.99, zScores: { pts: -1.132, reb: -1.107, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.656, ftImpact: 0, to: 0.918 } },
          { name: "Tim Hardaway Jr.", min: 7, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.99, zScores: { pts: -1.132, reb: -1.107, ast: -0.962, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.656, ftImpact: 0, to: 0.918 } },
          { name: "Pelle Larsson", min: 35, pts: 7, reb: 3, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 3, fta: 4, composite: -1.75, zScores: { pts: -0.35, reb: -0.282, ast: 0.705, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -0.838, ftImpact: -0.208, to: 0.181 } },
          { name: "Ryan Conwell", min: 17, pts: 0, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.67, zScores: { pts: -1.132, reb: -0.557, ast: -0.129, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -0.984, ftImpact: 0, to: 0.181 } }
        ]
      },
      home: {
        abbr: "LAC", name: "LA Clippers", score: 116,
        players: [
          { name: "Derrick Jones Jr.", min: 37, pts: 12, reb: 8, ast: 1, stl: 1, blk: 3, to: 1, tpm: 2, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: 4.65, zScores: { pts: 0.208, reb: 1.093, ast: -0.546, stl: 0.364, blk: 2.707, tpm: 0.61, fgImpact: 0.038, ftImpact: 0, to: 0.181 } },
          { name: "Rui Hachimura", min: 37, pts: 21, reb: 9, ast: 7, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 18, ftm: 6, fta: 7, composite: 4.43, zScores: { pts: 1.213, reb: 1.367, ast: 1.955, stl: 0.364, blk: -0.55, tpm: -0.079, fgImpact: -0.8, ftImpact: 0.774, to: 0.181 } },
          { name: "Brook Lopez", min: 35, pts: 20, reb: 8, ast: 1, stl: 0, blk: 2, to: 1, tpm: 2, fgm: 8, fga: 11, ftm: 2, fta: 5, composite: 2.63, zScores: { pts: 1.102, reb: 1.093, ast: -0.546, stl: -0.736, blk: 1.621, tpm: 0.61, fgImpact: 2.225, ftImpact: -2.917, to: 0.181 } },
          { name: "Kris Dunn", min: 35, pts: 5, reb: 5, ast: 3, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 1.49, zScores: { pts: -0.573, reb: 0.268, ast: 0.288, stl: 1.464, blk: 0.536, tpm: -0.079, fgImpact: 0.146, ftImpact: 0, to: -0.556 } },
          { name: "Darius Garland", min: 39, pts: 26, reb: 1, ast: 7, stl: 0, blk: 0, to: 6, tpm: 4, fgm: 10, fga: 14, ftm: 2, fta: 2, composite: 3.45, zScores: { pts: 1.772, reb: -0.832, ast: 1.955, stl: -0.736, blk: -0.55, tpm: 1.987, fgImpact: 2.699, ftImpact: 0.655, to: -3.504 } },
          { name: "Isaiah Jackson", min: 13, pts: 2, reb: 4, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 2, composite: -5.52, zScores: { pts: -0.908, reb: -0.007, ast: -0.129, stl: 0.364, blk: -0.55, tpm: -0.768, fgImpact: -0.583, ftImpact: -2.381, to: -0.556 } },
          { name: "Baba Miller", min: 6, pts: 2, reb: 1, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.57, zScores: { pts: -0.908, reb: -0.832, ast: -0.546, stl: 0.364, blk: 0.536, tpm: -0.768, fgImpact: 0.401, ftImpact: 0, to: 0.181 } },
          { name: "Max Strus", min: 23, pts: 9, reb: 5, ast: 5, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 11, ftm: 0, fta: 0, composite: 1.14, zScores: { pts: -0.127, reb: 0.268, ast: 1.122, stl: 0.364, blk: -0.55, tpm: 1.299, fgImpact: -1.42, ftImpact: 0, to: 0.181 } },
          { name: "Kobe Sanders", min: 18, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 7, ftm: 2, fta: 2, composite: -6.05, zScores: { pts: -0.685, reb: -0.557, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: -1.567, ftImpact: 0.655, to: -1.293 } },
          { name: "Gradey Dick", min: 7, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.45, zScores: { pts: -0.685, reb: -0.557, ast: -0.546, stl: -0.736, blk: -0.55, tpm: -0.768, fgImpact: 0.474, ftImpact: 0, to: 0.918 } },
          { name: "Keaton Wagler", min: 16, pts: 11, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 0.8, zScores: { pts: 0.097, reb: -0.557, ast: -0.546, stl: -0.736, blk: -0.55, tpm: 1.299, fgImpact: 0.22, ftImpact: 0.655, to: 0.918 } }
        ]
      }
    }
    ]
  },
    "2026-11-05": {
    games: [
      {
      id: "401909936",
      line: "Orlando Magic 104 @ Phoenix Suns 117 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ORL", name: "Orlando Magic", score: 104,
        players: [
          { name: "Franz Wagner", min: 38, pts: 15, reb: 8, ast: 15, stl: 4, blk: 0, to: 6, tpm: 0, fgm: 7, fga: 13, ftm: 1, fta: 4, composite: 2.85, zScores: { pts: 0.773, reb: 1.3, ast: 4.174, stl: 2.832, blk: -0.563, tpm: -0.759, fgImpact: 0.643, ftImpact: -2.707, to: -2.839 } },
          { name: "Wendell Carter Jr.", min: 34, pts: 27, reb: 13, ast: 2, stl: 1, blk: 1, to: 3, tpm: 2, fgm: 10, fga: 12, ftm: 5, fta: 6, composite: 10.24, zScores: { pts: 2.196, reb: 2.641, ast: -0.108, stl: 0.171, blk: 0.9, tpm: 0.579, fgImpact: 3.693, ftImpact: 1.135, to: -0.962 } },
          { name: "Desmond Bane", min: 32, pts: 15, reb: 6, ast: 0, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 12, ftm: 2, fta: 3, composite: -0.46, zScores: { pts: 0.773, reb: 0.763, ast: -0.766, stl: -0.717, blk: -0.563, tpm: 1.249, fgImpact: -0.687, ftImpact: -0.175, to: -0.337 } },
          { name: "Anthony Black", min: 31, pts: 10, reb: 7, ast: 6, stl: 1, blk: 0, to: 5, tpm: 1, fgm: 3, fga: 8, ftm: 3, fta: 4, composite: -0.76, zScores: { pts: 0.18, reb: 1.032, ast: 1.21, stl: 0.171, blk: -0.563, tpm: -0.09, fgImpact: -0.75, ftImpact: 0.262, to: -2.213 } },
          { name: "Jase Richardson", min: 26, pts: 10, reb: 2, ast: 3, stl: 2, blk: 2, to: 3, tpm: 2, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 2.83, zScores: { pts: 0.18, reb: -0.309, ast: 0.222, stl: 1.058, blk: 2.363, tpm: 0.579, fgImpact: -0.296, ftImpact: 0, to: -0.962 } },
          { name: "Jamal Cain", min: 25, pts: 5, reb: 5, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 9, ftm: 0, fta: 1, composite: -5.49, zScores: { pts: -0.413, reb: 0.495, ast: -0.766, stl: -0.717, blk: -0.563, tpm: -0.09, fgImpact: -2.048, ftImpact: -1.048, to: -0.337 } },
          { name: "Tristan da Silva", min: 30, pts: 18, reb: 2, ast: 1, stl: 0, blk: 0, to: 3, tpm: 4, fgm: 6, fga: 15, ftm: 2, fta: 2, composite: -0.15, zScores: { pts: 1.129, reb: -0.309, ast: -0.437, stl: -0.717, blk: -0.563, tpm: 1.918, fgImpact: -1.078, ftImpact: 0.873, to: -0.962 } },
          { name: "Nikola Vucevic", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.16, zScores: { pts: -1.006, reb: -0.846, ast: -0.766, stl: -0.717, blk: -0.563, tpm: -0.759, fgImpact: -0.422, ftImpact: 0, to: 0.914 } },
          { name: "Goga Bitadze", min: 8, pts: 4, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 4, composite: -5.84, zScores: { pts: -0.531, reb: 0.495, ast: -0.766, stl: -0.717, blk: -0.563, tpm: -0.759, fgImpact: 0.907, ftImpact: -4.191, to: 0.289 } },
          { name: "Colin Castleton", min: 2, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.006, reb: -0.846, ast: -0.437, stl: -0.717, blk: -0.563, tpm: -0.759, fgImpact: 0, ftImpact: 0, to: 0.914 } },
          { name: "Jevon Carter", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -1.006, reb: -0.846, ast: -0.766, stl: -0.717, blk: -0.563, tpm: -0.759, fgImpact: 0, ftImpact: 0, to: 0.914 } },
          { name: "Alex Morales", min: 6, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.86, zScores: { pts: -1.006, reb: -0.846, ast: -0.766, stl: 0.171, blk: -0.563, tpm: -0.759, fgImpact: 0, ftImpact: 0, to: 0.914 } }
        ]
      },
      home: {
        abbr: "PHX", name: "Phoenix Suns", score: 117,
        players: [
          { name: "Dillon Brooks", min: 29, pts: 24, reb: 1, ast: 1, stl: 2, blk: 1, to: 1, tpm: 4, fgm: 9, fga: 16, ftm: 2, fta: 2, composite: 6.99, zScores: { pts: 1.84, reb: -0.578, ast: -0.437, stl: 1.058, blk: 0.9, tpm: 1.918, fgImpact: 1.128, ftImpact: 0.873, to: 0.289 } },
          { name: "Miles Bridges", min: 31, pts: 18, reb: 13, ast: 5, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 10, ftm: 3, fta: 3, composite: 9.03, zScores: { pts: 1.129, reb: 2.641, ast: 0.88, stl: 1.058, blk: -0.563, tpm: 1.249, fgImpact: 1.033, ftImpact: 1.31, to: 0.289 } },
          { name: "Oso Ighodaro", min: 24, pts: 2, reb: 5, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 2, composite: -3.69, zScores: { pts: -0.768, reb: 0.495, ast: -0.437, stl: -0.717, blk: 0.9, tpm: -0.759, fgImpact: 0.031, ftImpact: -2.096, to: -0.337 } },
          { name: "Devin Booker", min: 34, pts: 30, reb: 1, ast: 8, stl: 3, blk: 0, to: 3, tpm: 4, fgm: 11, fga: 22, ftm: 4, fta: 4, composite: 8.27, zScores: { pts: 2.551, reb: -0.578, ast: 1.868, stl: 1.945, blk: -0.563, tpm: 1.918, fgImpact: 0.346, ftImpact: 1.746, to: -0.962 } },
          { name: "Jalen Green", min: 24, pts: 6, reb: 0, ast: 3, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -1.85, zScores: { pts: -0.294, reb: -0.846, ast: 0.222, stl: 1.058, blk: -0.563, tpm: -0.759, fgImpact: -0.328, ftImpact: 0, to: -0.337 } },
          { name: "Ryan Dunn", min: 25, pts: 11, reb: 3, ast: 3, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 2.91, zScores: { pts: 0.299, reb: -0.041, ast: 0.222, stl: -0.717, blk: 0.9, tpm: -0.09, fgImpact: 1.424, ftImpact: 0, to: 0.914 } },
          { name: "Koa Peat", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.47, zScores: { pts: -1.006, reb: -0.578, ast: -0.766, stl: -0.717, blk: -0.563, tpm: -0.759, fgImpact: 0, ftImpact: 0, to: 0.914 } },
          { name: "Duop Reath", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -1.006, reb: -0.846, ast: -0.766, stl: -0.717, blk: -0.563, tpm: -0.759, fgImpact: 0, ftImpact: 0, to: 0.914 } },
          { name: "Khaman Maluach", min: 22, pts: 8, reb: 6, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 1.59, zScores: { pts: -0.057, reb: 0.763, ast: -0.108, stl: 1.058, blk: -0.563, tpm: -0.759, fgImpact: 0.97, ftImpact: 0, to: 0.289 } },
          { name: "Luke Kennard", min: 21, pts: 12, reb: 1, ast: 5, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: 1.12, zScores: { pts: 0.417, reb: -0.578, ast: 0.88, stl: -0.717, blk: -0.563, tpm: 1.249, fgImpact: 0.126, ftImpact: -0.611, to: 0.914 } },
          { name: "Collin Gillespie", min: 24, pts: 6, reb: 2, ast: 2, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 9, ftm: 0, fta: 0, composite: -0.51, zScores: { pts: -0.294, reb: -0.309, ast: -0.108, stl: 1.945, blk: -0.563, tpm: 0.579, fgImpact: -2.048, ftImpact: 0, to: 0.289 } },
          { name: "Jamaree Bouyea", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.37, zScores: { pts: -1.006, reb: -0.846, ast: -0.766, stl: -0.717, blk: -0.563, tpm: -0.759, fgImpact: 0, ftImpact: 0, to: 0.289 } },
          { name: "Pat Spencer", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.99, zScores: { pts: -1.006, reb: -0.846, ast: -0.766, stl: -0.717, blk: -0.563, tpm: -0.759, fgImpact: 0, ftImpact: 0, to: -0.337 } }
        ]
      }
    },
      {
      id: "401909937",
      line: "Miami Heat 100 @ Golden State Warriors 120 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIA", name: "Miami Heat", score: 100,
        players: [
          { name: "Giannis Antetokounmpo", min: 31, pts: 20, reb: 14, ast: 4, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 7, fga: 13, ftm: 5, fta: 7, composite: 2.6, zScores: { pts: 1.366, reb: 2.909, ast: 0.551, stl: -0.717, blk: -0.563, tpm: -0.09, fgImpact: 0.643, ftImpact: 0.087, to: -1.588 } },
          { name: "Andrew Wiggins", min: 21, pts: 2, reb: 6, ast: 4, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -2.02, zScores: { pts: -0.768, reb: 0.763, ast: 0.551, stl: -0.717, blk: 0.9, tpm: -0.759, fgImpact: -1.658, ftImpact: 0, to: -0.337 } },
          { name: "Bam Adebayo", min: 33, pts: 18, reb: 10, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 7, fga: 12, ftm: 4, fta: 7, composite: 3.09, zScores: { pts: 1.129, reb: 1.836, ast: -0.766, stl: 0.171, blk: 0.9, tpm: -0.759, fgImpact: 1.065, ftImpact: -1.397, to: 0.914 } },
          { name: "Klay Thompson", min: 23, pts: 11, reb: 0, ast: 3, stl: 0, blk: 2, to: 3, tpm: 2, fgm: 3, fga: 10, ftm: 3, fta: 3, composite: 0.65, zScores: { pts: 0.299, reb: -0.846, ast: 0.222, stl: -0.717, blk: 2.363, tpm: 0.579, fgImpact: -1.595, ftImpact: 1.31, to: -0.962 } },
          { name: "Davion Mitchell", min: 38, pts: 22, reb: 2, ast: 8, stl: 1, blk: 0, to: 5, tpm: 4, fgm: 9, fga: 18, ftm: 0, fta: 0, composite: 2.76, zScores: { pts: 1.603, reb: -0.309, ast: 1.868, stl: 0.171, blk: -0.563, tpm: 1.918, fgImpact: 0.283, ftImpact: 0, to: -2.213 } },
          { name: "Bobby Portis", min: 14, pts: 0, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.67, zScores: { pts: -1.006, reb: 0.495, ast: -0.766, stl: -0.717, blk: -0.563, tpm: -0.759, fgImpact: -1.267, ftImpact: 0, to: 0.914 } },
          { name: "Myron Gardner", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -1.006, reb: -0.846, ast: -0.766, stl: -0.717, blk: -0.563, tpm: -0.759, fgImpact: 0, ftImpact: 0, to: 0.914 } },
          { name: "Nikola Jovic", min: 12, pts: 1, reb: 0, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -3.29, zScores: { pts: -0.887, reb: -0.846, ast: -0.437, stl: -0.717, blk: 0.9, tpm: -0.759, fgImpact: -0.845, ftImpact: -0.611, to: 0.914 } },
          { name: "Nick Richards", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -1.006, reb: -0.846, ast: -0.766, stl: -0.717, blk: -0.563, tpm: -0.759, fgImpact: 0, ftImpact: 0, to: 0.914 } },
          { name: "Tim Hardaway Jr.", min: 4, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.68, zScores: { pts: -1.006, reb: -0.846, ast: -0.437, stl: -0.717, blk: -0.563, tpm: -0.759, fgImpact: -1.267, ftImpact: 0, to: 0.914 } },
          { name: "Dru Smith", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.16, zScores: { pts: -1.006, reb: -0.846, ast: -0.766, stl: -0.717, blk: -0.563, tpm: -0.759, fgImpact: -0.422, ftImpact: 0, to: 0.914 } },
          { name: "Pelle Larsson", min: 29, pts: 13, reb: 1, ast: 4, stl: 3, blk: 0, to: 5, tpm: 3, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 1.5, zScores: { pts: 0.536, reb: -0.578, ast: 0.551, stl: 1.945, blk: -0.563, tpm: 1.249, fgImpact: -0.296, ftImpact: 0.873, to: -2.213 } },
          { name: "Ryan Conwell", min: 30, pts: 13, reb: 1, ast: 2, stl: 3, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 3.97, zScores: { pts: 0.536, reb: -0.578, ast: -0.108, stl: 1.945, blk: -0.563, tpm: 1.249, fgImpact: -0.296, ftImpact: 0.873, to: 0.914 } }
        ]
      },
      home: {
        abbr: "GS", name: "Golden State Warriors", score: 120,
        players: [
          { name: "Draymond Green", min: 27, pts: 2, reb: 5, ast: 11, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 1.54, zScores: { pts: -0.768, reb: 0.495, ast: 2.856, stl: 0.171, blk: 0.9, tpm: -0.759, fgImpact: -0.391, ftImpact: 0, to: -0.962 } },
          { name: "Yaxel Lendeborg", min: 30, pts: 17, reb: 8, ast: 6, stl: 3, blk: 1, to: 2, tpm: 1, fgm: 6, fga: 14, ftm: 4, fta: 6, composite: 4.93, zScores: { pts: 1.01, reb: 1.3, ast: 1.21, stl: 1.945, blk: 0.9, tpm: -0.09, fgImpact: -0.656, ftImpact: -0.349, to: -0.337 } },
          { name: "Stephen Curry", min: 28, pts: 29, reb: 1, ast: 4, stl: 1, blk: 0, to: 0, tpm: 6, fgm: 9, fga: 19, ftm: 5, fta: 5, composite: 8.23, zScores: { pts: 2.433, reb: -0.578, ast: 0.551, stl: 0.171, blk: -0.563, tpm: 3.257, fgImpact: -0.139, ftImpact: 2.183, to: 0.914 } },
          { name: "Brandin Podziemski", min: 32, pts: 9, reb: 6, ast: 3, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 3, fga: 8, ftm: 1, fta: 2, composite: 1.62, zScores: { pts: 0.062, reb: 0.763, ast: 0.222, stl: 0.171, blk: 0.9, tpm: 0.579, fgImpact: -0.75, ftImpact: -0.611, to: 0.289 } },
          { name: "Will Richard", min: 16, pts: 10, reb: 0, ast: 2, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 1.25, zScores: { pts: 0.18, reb: -0.846, ast: -0.108, stl: -0.717, blk: 0.9, tpm: 0.579, fgImpact: 0.97, ftImpact: 0, to: 0.289 } },
          { name: "Georges Niang", min: 22, pts: 13, reb: 4, ast: 3, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 8, ftm: 1, fta: 2, composite: 1.23, zScores: { pts: 0.536, reb: 0.227, ast: 0.222, stl: 0.171, blk: -0.563, tpm: 0.579, fgImpact: 1.002, ftImpact: -0.611, to: -0.337 } },
          { name: "Graham Ike", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.47, zScores: { pts: -1.006, reb: -0.578, ast: -0.766, stl: -0.717, blk: -0.563, tpm: -0.759, fgImpact: 0, ftImpact: 0, to: 0.914 } },
          { name: "Malevy Leons", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -1.006, reb: -0.846, ast: -0.766, stl: -0.717, blk: -0.563, tpm: -0.759, fgImpact: 0, ftImpact: 0, to: 0.914 } },
          { name: "Al Horford", min: 18, pts: 8, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: 1.58, zScores: { pts: -0.057, reb: 0.495, ast: -0.437, stl: -0.717, blk: -0.563, tpm: 0.579, fgImpact: 1.361, ftImpact: 0, to: 0.914 } },
          { name: "Charles Bassey", min: 14, pts: 8, reb: 7, ast: 0, stl: 0, blk: 3, to: 3, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: 3.41, zScores: { pts: -0.057, reb: 1.032, ast: -0.766, stl: -0.717, blk: 3.825, tpm: -0.759, fgImpact: 0.939, ftImpact: 0.873, to: -0.962 } },
          { name: "Gary Payton II", min: 10, pts: 9, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 3, ftm: 2, fta: 2, composite: 0.49, zScores: { pts: 0.062, reb: -0.846, ast: -0.766, stl: 0.171, blk: -0.563, tpm: -0.09, fgImpact: 1.361, ftImpact: 0.873, to: 0.289 } },
          { name: "De'Anthony Melton", min: 17, pts: 5, reb: 6, ast: 2, stl: 3, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 5, ftm: 3, fta: 4, composite: -1.07, zScores: { pts: -0.413, reb: 0.763, ast: -0.108, stl: 1.945, blk: -0.563, tpm: -0.759, fgImpact: -1.235, ftImpact: 0.262, to: -0.962 } },
          { name: "Brandon Williams", min: 21, pts: 10, reb: 1, ast: 4, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 2.12, zScores: { pts: 0.18, reb: -0.578, ast: 0.551, stl: -0.717, blk: 2.363, tpm: -0.759, fgImpact: 0.548, ftImpact: 0.873, to: -0.337 } },
          { name: "LJ Cryer", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -1.006, reb: -0.846, ast: -0.766, stl: -0.717, blk: -0.563, tpm: -0.759, fgImpact: 0, ftImpact: 0, to: 0.914 } }
        ]
      }
    }
    ]
  },
    "2026-11-06": {
    games: [
      {
      id: "401909287",
      line: "Washington Wizards 132 @ Atlanta Hawks 139 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WSH", name: "Washington Wizards", score: 132,
        players: [
          { name: "AJ Dybantsa", min: 36, pts: 11, reb: 9, ast: 3, stl: 4, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 13, ftm: 4, fta: 4, composite: 3.08, zScores: { pts: 0.087, reb: 1.529, ast: 0.263, stl: 3.274, blk: -0.589, tpm: -0.145, fgImpact: -2.015, ftImpact: 1.087, to: -0.41 } },
          { name: "Kyshawn George", min: 39, pts: 33, reb: 4, ast: 8, stl: 1, blk: 2, to: 2, tpm: 5, fgm: 10, fga: 19, ftm: 8, fta: 10, composite: 10.54, zScores: { pts: 2.599, reb: 0.018, ast: 2.157, stl: 0.266, blk: 2.433, tpm: 2.497, fgImpact: 1.028, ftImpact: -0.045, to: -0.41 } },
          { name: "Deandre Ayton", min: 23, pts: 8, reb: 11, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 3.18, zScores: { pts: -0.256, reb: 2.134, ast: 0.263, stl: 0.266, blk: -0.589, tpm: -0.806, fgImpact: 1.239, ftImpact: 0, to: 0.933 } },
          { name: "Alex Sarr", min: 30, pts: 13, reb: 8, ast: 3, stl: 2, blk: 2, to: 2, tpm: 1, fgm: 5, fga: 10, ftm: 2, fta: 2, composite: 5.85, zScores: { pts: 0.315, reb: 1.227, ast: 0.263, stl: 1.268, blk: 2.433, tpm: -0.145, fgImpact: 0.355, ftImpact: 0.544, to: -0.41 } },
          { name: "Trae Young", min: 37, pts: 23, reb: 2, ast: 10, stl: 1, blk: 0, to: 9, tpm: 3, fgm: 7, fga: 16, ftm: 6, fta: 6, composite: 1.02, zScores: { pts: 1.457, reb: -0.586, ast: 2.914, stl: 0.266, blk: -0.589, tpm: 1.176, fgImpact: -0.14, ftImpact: 1.631, to: -5.11 } },
          { name: "Bub Carrington", min: 15, pts: 5, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.44, zScores: { pts: -0.598, reb: -0.889, ast: -0.873, stl: 0.266, blk: -0.589, tpm: -0.145, fgImpact: 0.46, ftImpact: 0, to: 0.933 } },
          { name: "Bilal Coulibaly", min: 24, pts: 9, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: -0.83, zScores: { pts: -0.142, reb: 0.32, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: 0.531, ftImpact: 0.544, to: 0.262 } },
          { name: "Will Riley", min: 9, pts: 7, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -2.12, zScores: { pts: -0.37, reb: -1.191, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: 0.849, ftImpact: 0, to: 0.933 } },
          { name: "Tre Johnson", min: 27, pts: 23, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 5, fgm: 9, fga: 16, ftm: 0, fta: 0, composite: 3.45, zScores: { pts: 1.457, reb: -0.889, ast: -0.494, stl: -0.737, blk: -0.589, tpm: 2.497, fgImpact: 1.275, ftImpact: 0, to: 0.933 } }
        ]
      },
      home: {
        abbr: "ATL", name: "Atlanta Hawks", score: 139,
        players: [
          { name: "Onyeka Okongwu", min: 33, pts: 22, reb: 10, ast: 1, stl: 4, blk: 0, to: 1, tpm: 2, fgm: 8, fga: 12, ftm: 4, fta: 4, composite: 9.07, zScores: { pts: 1.343, reb: 1.832, ast: -0.494, stl: 3.274, blk: -0.589, tpm: 0.515, fgImpact: 1.841, ftImpact: 1.087, to: 0.262 } },
          { name: "Nickeil Alexander-Walker", min: 33, pts: 28, reb: 2, ast: 2, stl: 2, blk: 0, to: 3, tpm: 4, fgm: 7, fga: 20, ftm: 10, fta: 10, composite: 4.07, zScores: { pts: 2.028, reb: -0.586, ast: -0.116, stl: 1.268, blk: -0.589, tpm: 1.836, fgImpact: -1.413, ftImpact: 2.718, to: -1.081 } },
          { name: "Luguentz Dort", min: 32, pts: 25, reb: 7, ast: 4, stl: 2, blk: 0, to: 1, tpm: 5, fgm: 9, fga: 15, ftm: 2, fta: 3, composite: 7.72, zScores: { pts: 1.686, reb: 0.925, ast: 0.642, stl: 1.268, blk: -0.589, tpm: 2.497, fgImpact: 1.594, ftImpact: -0.566, to: 0.262 } },
          { name: "Dyson Daniels", min: 35, pts: 13, reb: 9, ast: 12, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 9, ftm: 1, fta: 1, composite: 6.63, zScores: { pts: 0.315, reb: 1.529, ast: 3.672, stl: 1.268, blk: -0.589, tpm: -0.806, fgImpact: 1.381, ftImpact: 0.272, to: -0.41 } },
          { name: "Kingston Flemings", min: 25, pts: 11, reb: 1, ast: 6, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: -0.61, zScores: { pts: 0.087, reb: -0.889, ast: 1.399, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: 0.673, ftImpact: 0, to: -0.41 } },
          { name: "Corey Kispert", min: 16, pts: 7, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -2.13, zScores: { pts: -0.37, reb: -0.586, ast: -0.494, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: 0.531, ftImpact: 0, to: 0.262 } },
          { name: "Zuby Ejiofor", min: 15, pts: 10, reb: 5, ast: 5, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 2.07, zScores: { pts: -0.027, reb: 0.32, ast: 1.021, stl: 0.266, blk: -0.589, tpm: -0.806, fgImpact: 1.628, ftImpact: 0, to: 0.262 } },
          { name: "CJ McCollum", min: 23, pts: 4, reb: 3, ast: 4, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 10, ftm: 2, fta: 2, composite: -3.99, zScores: { pts: -0.713, reb: -0.284, ast: 0.642, stl: -0.737, blk: 0.922, tpm: -0.806, fgImpact: -2.475, ftImpact: 0.544, to: -1.081 } },
          { name: "Aaron Wiggins", min: 29, pts: 19, reb: 4, ast: 3, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 8, fga: 12, ftm: 0, fta: 0, composite: 2.56, zScores: { pts: 1, reb: 0.018, ast: 0.263, stl: -0.737, blk: -0.589, tpm: 1.176, fgImpact: 1.841, ftImpact: 0, to: -0.41 } }
        ]
      }
    },
      {
      id: "401909288",
      line: "Boston Celtics 119 @ Charlotte Hornets 80 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BOS", name: "Boston Celtics", score: 119,
        players: [
          { name: "Paul George", min: 22, pts: 8, reb: 5, ast: 1, stl: 1, blk: 2, to: 3, tpm: 2, fgm: 3, fga: 11, ftm: 0, fta: 0, composite: 0.32, zScores: { pts: -0.256, reb: 0.32, ast: -0.494, stl: 0.266, blk: 2.433, tpm: 0.515, fgImpact: -1.378, ftImpact: 0, to: -1.081 } },
          { name: "Jayson Tatum", min: 29, pts: 34, reb: 8, ast: 9, stl: 1, blk: 1, to: 4, tpm: 5, fgm: 9, fga: 16, ftm: 11, fta: 11, composite: 12.67, zScores: { pts: 2.713, reb: 1.227, ast: 2.536, stl: 0.266, blk: 0.922, tpm: 2.497, fgImpact: 1.275, ftImpact: 2.99, to: -1.753 } },
          { name: "Neemias Queta", min: 15, pts: 4, reb: 3, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.03, zScores: { pts: -0.713, reb: -0.284, ast: -0.494, stl: -0.737, blk: 0.922, tpm: -0.806, fgImpact: -0.176, ftImpact: 0, to: 0.262 } },
          { name: "Derrick White", min: 25, pts: 18, reb: 4, ast: 5, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 6, fga: 10, ftm: 2, fta: 2, composite: 4.63, zScores: { pts: 0.886, reb: 0.018, ast: 1.021, stl: 0.266, blk: -0.589, tpm: 1.836, fgImpact: 1.062, ftImpact: 0.544, to: -0.41 } },
          { name: "Jordan Walsh", min: 22, pts: 6, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 1, fta: 1, composite: -2.44, zScores: { pts: -0.484, reb: -0.284, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: 0.142, ftImpact: 0.272, to: 0.262 } },
          { name: "Sam Hauser", min: 17, pts: 9, reb: 3, ast: 3, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 2.66, zScores: { pts: -0.142, reb: -0.284, ast: 0.263, stl: -0.737, blk: 0.922, tpm: 1.176, fgImpact: 0.531, ftImpact: 0, to: 0.933 } },
          { name: "Luka Garza", min: 19, pts: 6, reb: 8, ast: 4, stl: 0, blk: 2, to: 2, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 2, composite: 0.15, zScores: { pts: -0.484, reb: 1.227, ast: 0.642, stl: -0.737, blk: 2.433, tpm: 0.515, fgImpact: -0.813, ftImpact: -2.219, to: -0.41 } },
          { name: "Mitchell Robinson", min: 15, pts: 6, reb: 7, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 1, composite: -0.7, zScores: { pts: -0.484, reb: 0.925, ast: -0.873, stl: -0.737, blk: 0.922, tpm: -0.806, fgImpact: 0.531, ftImpact: -1.11, to: 0.933 } },
          { name: "Mike Conley", min: 11, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.37, zScores: { pts: -1.169, reb: -1.191, ast: -0.494, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -0.318, ftImpact: 0, to: 0.933 } },
          { name: "Payton Pritchard", min: 23, pts: 12, reb: 6, ast: 5, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 2.59, zScores: { pts: 0.201, reb: 0.623, ast: 1.021, stl: 0.266, blk: -0.589, tpm: 1.836, fgImpact: -0.353, ftImpact: 0, to: -0.41 } },
          { name: "Ron Harper Jr.", min: 10, pts: 3, reb: 0, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.27, zScores: { pts: -0.827, reb: -1.191, ast: -0.116, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: 0.071, ftImpact: 0, to: 0.262 } },
          { name: "Baylor Scheierman", min: 15, pts: 5, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -0.92, zScores: { pts: -0.598, reb: -0.284, ast: -0.116, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: 0.071, ftImpact: 0.544, to: 0.933 } },
          { name: "Hugo Gonzalez", min: 15, pts: 8, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: -4.37, zScores: { pts: -0.256, reb: -0.889, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: -0.176, ftImpact: -0.294, to: -0.41 } }
        ]
      },
      home: {
        abbr: "CHA", name: "Charlotte Hornets", score: 80,
        players: [
          { name: "Brandon Miller", min: 14, pts: 8, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 10, ftm: 2, fta: 2, composite: -2.05, zScores: { pts: -0.256, reb: -0.586, ast: -0.494, stl: 0.266, blk: -0.589, tpm: -0.806, fgImpact: -1.06, ftImpact: 0.544, to: 0.933 } },
          { name: "Naz Reid", min: 26, pts: 14, reb: 6, ast: 2, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 17, ftm: 0, fta: 0, composite: -0.45, zScores: { pts: 0.429, reb: 0.623, ast: -0.116, stl: 0.266, blk: -0.589, tpm: 0.515, fgImpact: -1.165, ftImpact: 0, to: -0.41 } },
          { name: "Ryan Kalkbrenner", min: 21, pts: 4, reb: 5, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -2.87, zScores: { pts: -0.713, reb: 0.32, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0.389, ftImpact: 0.544, to: -0.41 } },
          { name: "Grayson Allen", min: 22, pts: 0, reb: 2, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -3.28, zScores: { pts: -1.169, reb: -0.586, ast: 0.263, stl: 0.266, blk: -0.589, tpm: -0.806, fgImpact: -1.591, ftImpact: 0, to: 0.933 } },
          { name: "Coby White", min: 16, pts: 7, reb: 1, ast: 1, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 8, ftm: 4, fta: 4, composite: -5.06, zScores: { pts: -0.37, reb: -0.889, ast: -0.494, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: -1.839, ftImpact: 1.087, to: -1.081 } },
          { name: "Royce O'Neale", min: 26, pts: 7, reb: 4, ast: 2, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 6, ftm: 1, fta: 1, composite: 0.77, zScores: { pts: -0.37, reb: 0.018, ast: -0.116, stl: 1.268, blk: -0.589, tpm: 0.515, fgImpact: -0.495, ftImpact: 0.272, to: 0.262 } },
          { name: "Tidjane Salaun", min: 23, pts: 13, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 11, ftm: 5, fta: 6, composite: -2.22, zScores: { pts: 0.315, reb: 0.018, ast: -0.873, stl: -0.737, blk: -0.589, tpm: 0.515, fgImpact: -1.378, ftImpact: 0.249, to: 0.262 } },
          { name: "Hannes Steinbach", min: 27, pts: 4, reb: 11, ast: 1, stl: 0, blk: 3, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 3.41, zScores: { pts: -0.713, reb: 2.134, ast: -0.494, stl: -0.737, blk: 3.944, tpm: -0.806, fgImpact: -0.176, ftImpact: 0, to: 0.262 } },
          { name: "Sion James", min: 21, pts: 11, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 0, zScores: { pts: 0.087, reb: -0.284, ast: -0.873, stl: -0.737, blk: -0.589, tpm: 1.176, fgImpact: 0.284, ftImpact: 0, to: 0.933 } },
          { name: "Christian Anderson", min: 25, pts: 4, reb: 3, ast: 5, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 10, ftm: 0, fta: 0, composite: -5.63, zScores: { pts: -0.713, reb: -0.284, ast: 1.021, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -1.768, ftImpact: 0, to: -1.753 } },
          { name: "Liam McNeeley", min: 19, pts: 8, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 11, ftm: 1, fta: 2, composite: -3, zScores: { pts: -0.256, reb: -0.586, ast: 0.263, stl: 0.266, blk: -0.589, tpm: -0.145, fgImpact: -1.378, ftImpact: -0.838, to: 0.262 } }
        ]
      }
    },
      {
      id: "401909289",
      line: "Philadelphia 76ers 95 @ Cleveland Cavaliers 119 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PHI", name: "Philadelphia 76ers", score: 95,
        players: [
          { name: "LeBron James", min: 32, pts: 8, reb: 7, ast: 3, stl: 2, blk: 1, to: 6, tpm: 0, fgm: 3, fga: 12, ftm: 2, fta: 2, composite: -1.93, zScores: { pts: -0.256, reb: 0.925, ast: 0.263, stl: 1.268, blk: 0.922, tpm: -0.806, fgImpact: -1.697, ftImpact: 0.544, to: -3.095 } },
          { name: "Joel Embiid", min: 25, pts: 6, reb: 7, ast: 1, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 0, fga: 9, ftm: 6, fta: 6, composite: -0.81, zScores: { pts: -0.484, reb: 0.925, ast: -0.494, stl: -0.737, blk: 2.433, tpm: -0.806, fgImpact: -2.864, ftImpact: 1.631, to: -0.41 } },
          { name: "Jaylen Brown", min: 34, pts: 20, reb: 5, ast: 5, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 9, fga: 19, ftm: 0, fta: 0, composite: 2.56, zScores: { pts: 1.115, reb: 0.32, ast: 1.021, stl: 0.266, blk: -0.589, tpm: 0.515, fgImpact: 0.321, ftImpact: 0, to: -0.41 } },
          { name: "Tyrese Maxey", min: 32, pts: 17, reb: 3, ast: 4, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 15, ftm: 5, fta: 6, composite: 1.27, zScores: { pts: 0.772, reb: -0.284, ast: 0.642, stl: 0.266, blk: -0.589, tpm: 0.515, fgImpact: -1.236, ftImpact: 0.249, to: 0.933 } },
          { name: "VJ Edgecombe", min: 32, pts: 19, reb: 3, ast: 2, stl: 4, blk: 0, to: 0, tpm: 3, fgm: 8, fga: 13, ftm: 0, fta: 0, composite: 6.92, zScores: { pts: 1, reb: -0.284, ast: -0.116, stl: 3.274, blk: -0.589, tpm: 1.176, fgImpact: 1.523, ftImpact: 0, to: 0.933 } },
          { name: "Dean Wade", min: 21, pts: 0, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -4.49, zScores: { pts: -1.169, reb: 0.32, ast: -0.494, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -1.273, ftImpact: 0, to: 0.262 } },
          { name: "Jabari Walker", min: 17, pts: 8, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 4, fta: 8, composite: -4.84, zScores: { pts: -0.256, reb: 0.32, ast: -0.494, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0.142, ftImpact: -3.351, to: 0.933 } },
          { name: "Justin Edwards", min: 4, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -0.827, reb: -0.889, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: 0.071, ftImpact: 0, to: 0.262 } },
          { name: "Tacko Fall", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.169, reb: -0.889, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0, ftImpact: 0, to: 0.933 } },
          { name: "Kentavious Caldwell-Pope", min: 17, pts: 5, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -0.15, zScores: { pts: -0.598, reb: -0.586, ast: -0.873, stl: -0.737, blk: 0.922, tpm: -0.145, fgImpact: 0.389, ftImpact: 0.544, to: 0.933 } },
          { name: "Anfernee Simons", min: 19, pts: 6, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 3, fta: 3, composite: -1.83, zScores: { pts: -0.484, reb: -0.586, ast: -0.116, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: -0.247, ftImpact: 0.815, to: 0.262 } },
          { name: "Labaron Philon Jr.", min: 4, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -5.84, zScores: { pts: -0.827, reb: -0.889, ast: -0.494, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -0.247, ftImpact: -0.838, to: -0.41 } }
        ]
      },
      home: {
        abbr: "CLE", name: "Cleveland Cavaliers", score: 119,
        players: [
          { name: "Evan Mobley", min: 32, pts: 22, reb: 6, ast: 4, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 8, fga: 13, ftm: 3, fta: 4, composite: 7.13, zScores: { pts: 1.343, reb: 0.623, ast: 0.642, stl: 0.266, blk: 0.922, tpm: 1.176, fgImpact: 1.523, ftImpact: -0.294, to: 0.933 } },
          { name: "James Harden", min: 30, pts: 17, reb: 6, ast: 3, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 4, fga: 11, ftm: 6, fta: 7, composite: 0.28, zScores: { pts: 0.772, reb: 0.623, ast: 0.263, stl: -0.737, blk: -0.589, tpm: 1.176, fgImpact: -0.671, ftImpact: 0.521, to: -1.081 } },
          { name: "Donovan Mitchell", min: 33, pts: 23, reb: 7, ast: 8, stl: 2, blk: 1, to: 4, tpm: 1, fgm: 7, fga: 18, ftm: 8, fta: 10, composite: 4.01, zScores: { pts: 1.457, reb: 0.925, ast: 2.157, stl: 1.268, blk: 0.922, tpm: -0.145, fgImpact: -0.776, ftImpact: -0.045, to: -1.753 } },
          { name: "Sam Merrill", min: 13, pts: 0, reb: 3, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.15, zScores: { pts: -1.169, reb: -0.284, ast: -0.873, stl: 1.268, blk: -0.589, tpm: -0.806, fgImpact: -0.955, ftImpact: 0, to: 0.262 } },
          { name: "Peyton Watson", min: 28, pts: 13, reb: 9, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 6, fga: 14, ftm: 0, fta: 1, composite: -0.13, zScores: { pts: 0.315, reb: 1.529, ast: -0.116, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: -0.211, ftImpact: -1.11, to: 0.933 } },
          { name: "Mario Hezonja", min: 27, pts: 15, reb: 10, ast: 1, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 6, fga: 13, ftm: 1, fta: 2, composite: 0.26, zScores: { pts: 0.544, reb: 1.832, ast: -0.494, stl: 0.266, blk: -0.589, tpm: 0.515, fgImpact: 0.108, ftImpact: -0.838, to: -1.081 } },
          { name: "Tristan Enaruna", min: 8, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -5.16, zScores: { pts: -1.055, reb: -1.191, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0, ftImpact: -0.838, to: 0.933 } },
          { name: "Thomas Bryant", min: 16, pts: 13, reb: 6, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 5, ftm: 4, fta: 5, composite: 0.07, zScores: { pts: 0.315, reb: 0.623, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: 1.239, ftImpact: -0.022, to: 0.262 } },
          { name: "Norchad Omier", min: 3, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.45, zScores: { pts: -1.169, reb: -0.586, ast: -0.494, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0, ftImpact: 0, to: 0.933 } },
          { name: "Craig Porter Jr.", min: 3, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.43, zScores: { pts: -1.169, reb: -1.191, ast: -0.873, stl: 0.266, blk: -0.589, tpm: -0.806, fgImpact: 0, ftImpact: 0, to: 0.933 } },
          { name: "Tyrese Proctor", min: 19, pts: 3, reb: 6, ast: 3, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 1, composite: -0.1, zScores: { pts: -0.827, reb: 0.623, ast: 0.263, stl: 1.268, blk: -0.589, tpm: -0.806, fgImpact: -0.566, ftImpact: 0.272, to: 0.262 } },
          { name: "Meleek Thomas", min: 27, pts: 12, reb: 1, ast: 3, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 1.51, zScores: { pts: 0.201, reb: -0.889, ast: 0.263, stl: 1.268, blk: -0.589, tpm: 0.515, fgImpact: 0.602, ftImpact: 0.544, to: -0.41 } }
        ]
      }
    },
      {
      id: "401909290",
      line: "Utah Jazz 100 @ Dallas Mavericks 112 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UTAH", name: "Utah Jazz", score: 100,
        players: [
          { name: "Lauri Markkanen", min: 34, pts: 24, reb: 8, ast: 1, stl: 0, blk: 0, to: 2, tpm: 8, fgm: 8, fga: 20, ftm: 0, fta: 0, composite: 4.34, zScores: { pts: 1.571, reb: 1.227, ast: -0.494, stl: -0.737, blk: -0.589, tpm: 4.479, fgImpact: -0.705, ftImpact: 0, to: -0.41 } },
          { name: "Jaxson Hayes", min: 28, pts: 8, reb: 6, ast: 3, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: 2.67, zScores: { pts: -0.256, reb: 0.623, ast: 0.263, stl: 0.266, blk: 0.922, tpm: -0.806, fgImpact: 0.849, ftImpact: 0.544, to: 0.262 } },
          { name: "Keyonte George", min: 32, pts: 16, reb: 6, ast: 9, stl: 0, blk: 1, to: 5, tpm: 1, fgm: 6, fga: 13, ftm: 3, fta: 4, composite: 1.24, zScores: { pts: 0.658, reb: 0.623, ast: 2.536, stl: -0.737, blk: 0.922, tpm: -0.145, fgImpact: 0.108, ftImpact: -0.294, to: -2.424 } },
          { name: "Ace Bailey", min: 29, pts: 12, reb: 6, ast: 0, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: -1.01, zScores: { pts: 0.201, reb: 0.623, ast: -0.873, stl: -0.737, blk: 0.922, tpm: -0.806, fgImpact: 0.744, ftImpact: 0, to: -1.081 } },
          { name: "Darryn Peterson", min: 30, pts: 21, reb: 2, ast: 5, stl: 2, blk: 3, to: 2, tpm: 3, fgm: 6, fga: 12, ftm: 6, fta: 6, composite: 9.7, zScores: { pts: 1.229, reb: -0.586, ast: 1.021, stl: 1.268, blk: 3.944, tpm: 1.176, fgImpact: 0.426, ftImpact: 1.631, to: -0.41 } },
          { name: "Kyle Filipowski", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.43, zScores: { pts: -1.169, reb: -1.191, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0, ftImpact: 0, to: 0.933 } },
          { name: "Brice Sensabaugh", min: 10, pts: 0, reb: 2, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.169, reb: -0.586, ast: -0.116, stl: -0.737, blk: 0.922, tpm: -0.806, fgImpact: -0.955, ftImpact: 0, to: -0.41 } },
          { name: "Tony Bradley", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.169, reb: -0.889, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0, ftImpact: 0, to: 0.933 } },
          { name: "Svi Mykhailiuk", min: 14, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.35, zScores: { pts: -1.169, reb: -1.191, ast: -0.494, stl: 0.266, blk: -0.589, tpm: -0.806, fgImpact: -0.955, ftImpact: 0, to: -0.41 } },
          { name: "Josh Okogie", min: 24, pts: 12, reb: 4, ast: 0, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 10, ftm: 2, fta: 2, composite: 0.99, zScores: { pts: 0.201, reb: 0.018, ast: -0.873, stl: 1.268, blk: -0.589, tpm: 0.515, fgImpact: -0.353, ftImpact: 0.544, to: 0.262 } },
          { name: "Josh Green", min: 24, pts: 3, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -1.71, zScores: { pts: -0.827, reb: -0.284, ast: -0.494, stl: 0.266, blk: -0.589, tpm: -0.145, fgImpact: -0.566, ftImpact: 0, to: 0.933 } },
          { name: "Isaiah Collier", min: 13, pts: 4, reb: 3, ast: 3, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -3.17, zScores: { pts: -0.713, reb: -0.284, ast: 0.263, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0.778, ftImpact: 0, to: -1.081 } }
        ]
      },
      home: {
        abbr: "DAL", name: "Dallas Mavericks", score: 112,
        players: [
          { name: "Caleb Martin", min: 11, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.75, zScores: { pts: -1.169, reb: -1.191, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -0.318, ftImpact: 0, to: 0.933 } },
          { name: "Daniel Gafford", min: 18, pts: 7, reb: 1, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 3, fta: 3, composite: 0.99, zScores: { pts: -0.37, reb: -0.889, ast: -0.494, stl: -0.737, blk: 2.433, tpm: -0.806, fgImpact: 0.778, ftImpact: 0.815, to: 0.262 } },
          { name: "P.J. Washington", min: 33, pts: 26, reb: 6, ast: 1, stl: 1, blk: 1, to: 0, tpm: 6, fgm: 7, fga: 14, ftm: 6, fta: 7, composite: 8.22, zScores: { pts: 1.8, reb: 0.623, ast: -0.494, stl: 0.266, blk: 0.922, tpm: 3.158, fgImpact: 0.497, ftImpact: 0.521, to: 0.933 } },
          { name: "Cooper Flagg", min: 33, pts: 21, reb: 10, ast: 7, stl: 3, blk: 1, to: 3, tpm: 1, fgm: 7, fga: 16, ftm: 6, fta: 6, composite: 8.3, zScores: { pts: 1.229, reb: 1.832, ast: 1.778, stl: 2.271, blk: 0.922, tpm: -0.145, fgImpact: -0.14, ftImpact: 1.631, to: -1.081 } },
          { name: "Kyrie Irving", min: 28, pts: 14, reb: 2, ast: 2, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 7, fga: 20, ftm: 0, fta: 0, composite: 0.12, zScores: { pts: 0.429, reb: -0.586, ast: -0.116, stl: 2.271, blk: -0.589, tpm: -0.806, fgImpact: -1.413, ftImpact: 0, to: 0.933 } },
          { name: "Naji Marshall", min: 25, pts: 7, reb: 1, ast: 5, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 10, ftm: 1, fta: 2, composite: -1.49, zScores: { pts: -0.37, reb: -0.889, ast: 1.021, stl: 0.266, blk: 0.922, tpm: -0.806, fgImpact: -1.06, ftImpact: -0.838, to: 0.262 } },
          { name: "Santi Aldama", min: 13, pts: 8, reb: 9, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 4, fta: 5, composite: -1.64, zScores: { pts: -0.256, reb: 1.529, ast: -0.494, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0.142, ftImpact: -0.022, to: -0.41 } },
          { name: "Morez Johnson Jr.", min: 24, pts: 13, reb: 17, ast: 2, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 5, fga: 8, ftm: 2, fta: 2, composite: 5.64, zScores: { pts: 0.315, reb: 3.947, ast: -0.116, stl: 0.266, blk: 0.922, tpm: -0.145, fgImpact: 0.991, ftImpact: 0.544, to: -1.081 } },
          { name: "Tobi Lawal", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.75, zScores: { pts: -1.169, reb: -1.191, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -0.318, ftImpact: 0, to: 0.933 } },
          { name: "Zaccharie Risacher", min: 21, pts: 4, reb: 4, ast: 1, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 2, composite: -2.4, zScores: { pts: -0.713, reb: 0.018, ast: -0.494, stl: -0.737, blk: 2.433, tpm: -0.806, fgImpact: -0.813, ftImpact: -2.219, to: 0.933 } },
          { name: "Moussa Cisse", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.43, zScores: { pts: -1.169, reb: -1.191, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0, ftImpact: 0, to: 0.933 } },
          { name: "Max Christie", min: 9, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.74, zScores: { pts: -1.169, reb: -0.889, ast: -0.494, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -0.318, ftImpact: 0, to: 0.262 } },
          { name: "Walter Clayton Jr.", min: 23, pts: 12, reb: 4, ast: 2, stl: 2, blk: 0, to: 4, tpm: 1, fgm: 4, fga: 8, ftm: 3, fta: 4, composite: -1.13, zScores: { pts: 0.201, reb: 0.018, ast: -0.116, stl: 1.268, blk: -0.589, tpm: -0.145, fgImpact: 0.284, ftImpact: -0.294, to: -1.753 } },
          { name: "Jett Howard", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.75, zScores: { pts: -1.169, reb: -1.191, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -0.318, ftImpact: 0, to: 0.933 } }
        ]
      }
    },
      {
      id: "401909291",
      line: "Oklahoma City Thunder 128 @ Memphis Grizzlies 97 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OKC", name: "Oklahoma City Thunder", score: 128,
        players: [
          { name: "Isaiah Hartenstein", min: 26, pts: 2, reb: 6, ast: 7, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 0.19, zScores: { pts: -0.941, reb: 0.623, ast: 1.778, stl: 0.266, blk: 0.922, tpm: -0.806, fgImpact: -0.566, ftImpact: 0, to: -1.081 } },
          { name: "Kenrich Williams", min: 19, pts: 4, reb: 6, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -1.77, zScores: { pts: -0.713, reb: 0.623, ast: 0.263, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: -0.566, ftImpact: -0.838, to: 0.933 } },
          { name: "Shai Gilgeous-Alexander", min: 30, pts: 28, reb: 3, ast: 4, stl: 1, blk: 1, to: 4, tpm: 3, fgm: 11, fga: 22, ftm: 3, fta: 3, composite: 4.59, zScores: { pts: 2.028, reb: -0.284, ast: 0.642, stl: 0.266, blk: 0.922, tpm: 1.176, fgImpact: 0.781, ftImpact: 0.815, to: -1.753 } },
          { name: "Jared McCain", min: 29, pts: 21, reb: 5, ast: 0, stl: 4, blk: 1, to: 1, tpm: 3, fgm: 9, fga: 14, ftm: 0, fta: 0, composite: 8.22, zScores: { pts: 1.229, reb: 0.32, ast: -0.873, stl: 3.274, blk: 0.922, tpm: 1.176, fgImpact: 1.912, ftImpact: 0, to: 0.262 } },
          { name: "Ajay Mitchell", min: 30, pts: 35, reb: 1, ast: 5, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 14, fga: 20, ftm: 3, fta: 5, composite: 5.2, zScores: { pts: 2.828, reb: -0.889, ast: 1.021, stl: -0.737, blk: -0.589, tpm: 1.836, fgImpact: 3.54, ftImpact: -1.404, to: -0.41 } },
          { name: "Brooks Barnhizer", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.43, zScores: { pts: -1.169, reb: -1.191, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0, ftImpact: 0, to: 0.933 } },
          { name: "Aday Mara", min: 18, pts: 9, reb: 7, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 1, fta: 4, composite: -2.59, zScores: { pts: -0.142, reb: 0.925, ast: -0.873, stl: -0.737, blk: 0.922, tpm: -0.806, fgImpact: 0.92, ftImpact: -3.057, to: 0.262 } },
          { name: "Alex Caruso", min: 20, pts: 5, reb: 6, ast: 2, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 1.67, zScores: { pts: -0.598, reb: 0.623, ast: -0.116, stl: 0.266, blk: 0.922, tpm: -0.145, fgImpact: 0.46, ftImpact: 0, to: 0.262 } },
          { name: "Micah Peavy", min: 18, pts: 7, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -0.68, zScores: { pts: -0.37, reb: 0.018, ast: -0.873, stl: -0.737, blk: 0.922, tpm: -0.145, fgImpact: -0.424, ftImpact: 0, to: 0.933 } },
          { name: "Dalen Terry", min: 5, pts: 0, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.48, zScores: { pts: -1.169, reb: 0.018, ast: -0.494, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -0.637, ftImpact: 0, to: 0.933 } },
          { name: "Josh Dix", min: 15, pts: 5, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.07, zScores: { pts: -0.598, reb: -0.586, ast: -0.494, stl: 0.266, blk: -0.589, tpm: -0.145, fgImpact: 0.142, ftImpact: 0, to: 0.933 } },
          { name: "Bennett Stirtz", min: 24, pts: 12, reb: 1, ast: 2, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 5, ftm: 2, fta: 2, composite: 3.11, zScores: { pts: 0.201, reb: -0.889, ast: -0.116, stl: 1.268, blk: -0.589, tpm: 0.515, fgImpact: 1.239, ftImpact: 0.544, to: 0.933 } }
        ]
      },
      home: {
        abbr: "MEM", name: "Memphis Grizzlies", score: 97,
        players: [
          { name: "Cedric Coward", min: 23, pts: 10, reb: 9, ast: 0, stl: 2, blk: 0, to: 4, tpm: 2, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 0.04, zScores: { pts: -0.027, reb: 1.529, ast: -0.873, stl: 1.268, blk: -0.589, tpm: 0.515, fgImpact: -0.034, ftImpact: 0, to: -1.753 } },
          { name: "Cameron Boozer", min: 31, pts: 8, reb: 12, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 14, ftm: 4, fta: 4, composite: -1.67, zScores: { pts: -0.256, reb: 2.436, ast: 0.642, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -3.041, ftImpact: 1.087, to: -0.41 } },
          { name: "Jaylen Wells", min: 25, pts: 7, reb: 0, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: -3.58, zScores: { pts: -0.37, reb: -1.191, ast: -0.873, stl: 0.266, blk: -0.589, tpm: -0.145, fgImpact: -0.813, ftImpact: 0.544, to: -0.41 } },
          { name: "Zach Edey", min: 20, pts: 14, reb: 6, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 7, ftm: 8, fta: 8, composite: 0.09, zScores: { pts: 0.429, reb: 0.623, ast: -0.494, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -0.105, ftImpact: 2.175, to: -0.41 } },
          { name: "Ty Jerome", min: 28, pts: 21, reb: 2, ast: 5, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 7, fga: 14, ftm: 5, fta: 5, composite: 1.63, zScores: { pts: 1.229, reb: -0.586, ast: 1.021, stl: -0.737, blk: -0.589, tpm: 0.515, fgImpact: 0.497, ftImpact: 1.359, to: -1.081 } },
          { name: "Jerami Grant", min: 22, pts: 10, reb: 0, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: -0.96, zScores: { pts: -0.027, reb: -1.191, ast: -0.116, stl: -0.737, blk: -0.589, tpm: 0.515, fgImpact: 0.92, ftImpact: 0, to: 0.262 } },
          { name: "Kris Murray", min: 13, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -3.63, zScores: { pts: -0.941, reb: -0.586, ast: -0.494, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -0.955, ftImpact: 0.544, to: 0.933 } },
          { name: "Olivier-Maxence Prosper", min: 11, pts: 2, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.16, zScores: { pts: -0.941, reb: -0.284, ast: -0.494, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -0.566, ftImpact: 0, to: 0.262 } },
          { name: "Taylor Hendricks", min: 4, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -3.48, zScores: { pts: -0.713, reb: -0.586, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: 0.071, ftImpact: -0.838, to: 0.933 } },
          { name: "Karim Lopez", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -3.66, zScores: { pts: -0.941, reb: -1.191, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0, ftImpact: 0.544, to: 0.933 } },
          { name: "Quinten Post", min: 15, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 7, ftm: 0, fta: 0, composite: -5.05, zScores: { pts: -1.169, reb: -0.586, ast: -0.873, stl: 0.266, blk: -0.589, tpm: -0.806, fgImpact: -2.228, ftImpact: 0, to: 0.933 } },
          { name: "Cam Spencer", min: 19, pts: 7, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -1.3, zScores: { pts: -0.37, reb: -0.889, ast: -0.873, stl: 0.266, blk: -0.589, tpm: -0.145, fgImpact: -0.176, ftImpact: 0.544, to: 0.933 } },
          { name: "Jahmai Mashack", min: 4, pts: 0, reb: 0, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.66, zScores: { pts: -1.169, reb: -1.191, ast: -0.116, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -0.318, ftImpact: 0, to: 0.262 } },
          { name: "Javon Small", min: 21, pts: 10, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 9, ftm: 3, fta: 4, composite: -3.04, zScores: { pts: -0.027, reb: 0.018, ast: -0.116, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: -0.742, ftImpact: -0.294, to: -0.41 } }
        ]
      }
    },
      {
      id: "401909292",
      line: "Toronto Raptors 121 @ Milwaukee Bucks 107 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TOR", name: "Toronto Raptors", score: 121,
        players: [
          { name: "RJ Barrett", min: 37, pts: 27, reb: 7, ast: 4, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 9, fga: 21, ftm: 9, fta: 11, composite: -0.49, zScores: { pts: 1.914, reb: 0.925, ast: 0.642, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -0.316, ftImpact: 0.227, to: -1.753 } },
          { name: "Collin Murray-Boyles", min: 34, pts: 19, reb: 7, ast: 2, stl: 4, blk: 1, to: 3, tpm: 0, fgm: 7, fga: 12, ftm: 5, fta: 5, composite: 6.61, zScores: { pts: 1, reb: 0.925, ast: -0.116, stl: 3.274, blk: 0.922, tpm: -0.806, fgImpact: 1.133, ftImpact: 1.359, to: -1.081 } },
          { name: "Jakob Poeltl", min: 31, pts: 19, reb: 11, ast: 2, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 9, fga: 14, ftm: 1, fta: 1, composite: 7.18, zScores: { pts: 1, reb: 2.134, ast: -0.116, stl: 2.271, blk: 0.922, tpm: -0.806, fgImpact: 1.912, ftImpact: 0.272, to: -0.41 } },
          { name: "Jamal Shead", min: 34, pts: 10, reb: 3, ast: 16, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 10, ftm: 1, fta: 2, composite: 4.48, zScores: { pts: -0.027, reb: -0.284, ast: 5.187, stl: 1.268, blk: -0.589, tpm: -0.145, fgImpact: -0.353, ftImpact: -0.838, to: 0.262 } },
          { name: "Ja'Kobe Walter", min: 29, pts: 7, reb: 6, ast: 2, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 12, ftm: 2, fta: 3, composite: -1.53, zScores: { pts: -0.37, reb: 0.623, ast: -0.116, stl: 0.266, blk: 0.922, tpm: -0.145, fgImpact: -2.404, ftImpact: -0.566, to: 0.262 } },
          { name: "Jamison Battle", min: 21, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 1, fta: 2, composite: -3.81, zScores: { pts: -0.484, reb: -0.586, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: -0.495, ftImpact: -0.838, to: 0.933 } },
          { name: "Allen Graves", min: 16, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 1, composite: -4.1, zScores: { pts: -0.827, reb: -0.586, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -0.884, ftImpact: 0.272, to: 0.933 } },
          { name: "Jaden Bradley", min: 8, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -5.15, zScores: { pts: -0.827, reb: -1.191, ast: -0.494, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0.071, ftImpact: -0.838, to: 0.262 } },
          { name: "Alijah Martin", min: 31, pts: 27, reb: 4, ast: 1, stl: 2, blk: 1, to: 4, tpm: 6, fgm: 9, fga: 11, ftm: 3, fta: 4, composite: 7.61, zScores: { pts: 1.914, reb: 0.018, ast: -0.494, stl: 1.268, blk: 0.922, tpm: 3.158, fgImpact: 2.867, ftImpact: -0.294, to: -1.753 } }
        ]
      },
      home: {
        abbr: "MIL", name: "Milwaukee Bucks", score: 107,
        players: [
          { name: "Kyle Kuzma", min: 32, pts: 13, reb: 4, ast: 3, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 1.43, zScores: { pts: 0.315, reb: 0.018, ast: 0.263, stl: 1.268, blk: -0.589, tpm: -0.145, fgImpact: 1.381, ftImpact: 0, to: -1.081 } },
          { name: "Jaime Jaquez Jr.", min: 28, pts: 14, reb: 3, ast: 3, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 4, fga: 10, ftm: 4, fta: 4, composite: 2.11, zScores: { pts: 0.429, reb: -0.284, ast: 0.263, stl: -0.737, blk: 0.922, tpm: 0.515, fgImpact: -0.353, ftImpact: 1.087, to: 0.262 } },
          { name: "Myles Turner", min: 24, pts: 0, reb: 7, ast: 0, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 0, fga: 7, ftm: 0, fta: 0, composite: -1.86, zScores: { pts: -1.169, reb: 0.925, ast: -0.873, stl: 0.266, blk: 2.433, tpm: -0.806, fgImpact: -2.228, ftImpact: 0, to: -0.41 } },
          { name: "Tyler Herro", min: 35, pts: 23, reb: 5, ast: 10, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 7, fga: 16, ftm: 8, fta: 10, composite: 2.96, zScores: { pts: 1.457, reb: 0.32, ast: 2.914, stl: 0.266, blk: -0.589, tpm: -0.145, fgImpact: -0.14, ftImpact: -0.045, to: -1.081 } },
          { name: "Brayden Burries", min: 38, pts: 21, reb: 11, ast: 6, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 8, fga: 14, ftm: 4, fta: 6, composite: 5.14, zScores: { pts: 1.229, reb: 2.134, ast: 1.399, stl: -0.737, blk: 0.922, tpm: -0.145, fgImpact: 1.204, ftImpact: -1.132, to: 0.262 } },
          { name: "Nate Ament", min: 15, pts: 7, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 1, composite: -1.69, zScores: { pts: -0.37, reb: -0.889, ast: -0.873, stl: -0.737, blk: 0.922, tpm: -0.806, fgImpact: 0.531, ftImpact: 0.272, to: 0.262 } },
          { name: "Jericho Sims", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.169, reb: -0.889, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0, ftImpact: 0, to: 0.933 } },
          { name: "Kel'el Ware", min: 13, pts: 4, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -3.04, zScores: { pts: -0.713, reb: -0.284, ast: -0.873, stl: -0.737, blk: 0.922, tpm: -0.806, fgImpact: -0.813, ftImpact: 0, to: 0.262 } },
          { name: "AJ Green", min: 24, pts: 12, reb: 1, ast: 0, stl: 0, blk: 1, to: 2, tpm: 4, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 0.02, zScores: { pts: 0.201, reb: -0.889, ast: -0.873, stl: -0.737, blk: 0.922, tpm: 1.836, fgImpact: -0.034, ftImpact: 0, to: -0.41 } },
          { name: "Ryan Rollins", min: 14, pts: 10, reb: 1, ast: 1, stl: 2, blk: 0, to: 5, tpm: 1, fgm: 3, fga: 3, ftm: 3, fta: 3, composite: -1.32, zScores: { pts: -0.027, reb: -0.889, ast: -0.494, stl: 1.268, blk: -0.589, tpm: -0.145, fgImpact: 1.168, ftImpact: 0.815, to: -2.424 } },
          { name: "Kasparas Jakucionis", min: 10, pts: 3, reb: 0, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -2.66, zScores: { pts: -0.827, reb: -1.191, ast: -0.116, stl: 0.266, blk: -0.589, tpm: -0.806, fgImpact: 0.071, ftImpact: 0.272, to: 0.262 } }
        ]
      }
    },
      {
      id: "401909293",
      line: "Minnesota Timberwolves 115 @ New Orleans Pelicans 109 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIN", name: "Minnesota Timberwolves", score: 115,
        players: [
          { name: "Jaden McDaniels", min: 40, pts: 23, reb: 6, ast: 5, stl: 1, blk: 2, to: 2, tpm: 2, fgm: 8, fga: 19, ftm: 5, fta: 5, composite: 6.88, zScores: { pts: 1.457, reb: 0.623, ast: 1.021, stl: 0.266, blk: 2.433, tpm: 0.515, fgImpact: -0.387, ftImpact: 1.359, to: -0.41 } },
          { name: "Jonathan Kuminga", min: 34, pts: 17, reb: 8, ast: 4, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 12, ftm: 6, fta: 12, composite: -3.55, zScores: { pts: 0.772, reb: 1.227, ast: 0.642, stl: 0.266, blk: -0.589, tpm: -0.145, fgImpact: -0.282, ftImpact: -5.027, to: -0.41 } },
          { name: "Rudy Gobert", min: 25, pts: 8, reb: 11, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 2, composite: 0.34, zScores: { pts: -0.256, reb: 2.134, ast: -0.873, stl: -0.737, blk: 0.922, tpm: -0.806, fgImpact: 1.239, ftImpact: -2.219, to: 0.933 } },
          { name: "Ayo Dosunmu", min: 39, pts: 26, reb: 2, ast: 4, stl: 0, blk: 1, to: 3, tpm: 4, fgm: 8, fga: 14, ftm: 6, fta: 6, composite: 5.63, zScores: { pts: 1.8, reb: -0.586, ast: 0.642, stl: -0.737, blk: 0.922, tpm: 1.836, fgImpact: 1.204, ftImpact: 1.631, to: -1.081 } },
          { name: "LaMelo Ball", min: 35, pts: 22, reb: 2, ast: 8, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 7, fga: 15, ftm: 5, fta: 5, composite: 3.22, zScores: { pts: 1.343, reb: -0.586, ast: 2.157, stl: -0.737, blk: -0.589, tpm: 1.176, fgImpact: 0.179, ftImpact: 1.359, to: -1.081 } },
          { name: "Trey Lyles", min: 29, pts: 5, reb: 13, ast: 2, stl: 3, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: 3.02, zScores: { pts: -0.598, reb: 2.738, ast: -0.116, stl: 2.271, blk: 0.922, tpm: -0.806, fgImpact: -0.813, ftImpact: -0.838, to: 0.262 } },
          { name: "Joan Beringer", min: 7, pts: 2, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -1.24, zScores: { pts: -0.941, reb: -0.284, ast: -0.873, stl: -0.737, blk: 0.922, tpm: -0.806, fgImpact: 0, ftImpact: 0.544, to: 0.933 } },
          { name: "Jaylen Clark", min: 21, pts: 8, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 9, ftm: 1, fta: 1, composite: -2.42, zScores: { pts: -0.256, reb: -0.284, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: -0.742, ftImpact: 0.272, to: 0.933 } },
          { name: "Bones Hyland", min: 10, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 7, ftm: 1, fta: 2, composite: -5.37, zScores: { pts: -0.713, reb: -0.889, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: -1.52, ftImpact: -0.838, to: 0.933 } }
        ]
      },
      home: {
        abbr: "NO", name: "New Orleans Pelicans", score: 109,
        players: [
          { name: "Zion Williamson", min: 36, pts: 13, reb: 8, ast: 4, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 10, ftm: 3, fta: 4, composite: 3.05, zScores: { pts: 0.315, reb: 1.227, ast: 0.642, stl: 1.268, blk: -0.589, tpm: -0.806, fgImpact: 0.355, ftImpact: -0.294, to: 0.933 } },
          { name: "Trey Murphy III", min: 34, pts: 10, reb: 4, ast: 5, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 3, fga: 7, ftm: 3, fta: 3, composite: 3.36, zScores: { pts: -0.027, reb: 0.018, ast: 1.021, stl: 1.268, blk: 0.922, tpm: -0.145, fgImpact: -0.105, ftImpact: 0.815, to: -0.41 } },
          { name: "Karlo Matkovic", min: 18, pts: 18, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 7, fga: 13, ftm: 0, fta: 0, composite: 1.02, zScores: { pts: 0.886, reb: -0.284, ast: -0.494, stl: -0.737, blk: -0.589, tpm: 1.836, fgImpact: 0.815, ftImpact: 0, to: -0.41 } },
          { name: "Dejounte Murray", min: 35, pts: 7, reb: 2, ast: 4, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 3, fga: 11, ftm: 0, fta: 0, composite: -1.06, zScores: { pts: -0.37, reb: -0.586, ast: 0.642, stl: 0.266, blk: 0.922, tpm: -0.145, fgImpact: -1.378, ftImpact: 0, to: -0.41 } },
          { name: "Jeremiah Fears", min: 36, pts: 24, reb: 5, ast: 5, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 9, fga: 16, ftm: 6, fta: 7, composite: 4.17, zScores: { pts: 1.571, reb: 0.32, ast: 1.021, stl: 1.268, blk: -0.589, tpm: -0.806, fgImpact: 1.275, ftImpact: 0.521, to: -0.41 } },
          { name: "Herbert Jones", min: 14, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.18, zScores: { pts: -1.169, reb: 0.018, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -0.955, ftImpact: 0, to: 0.933 } },
          { name: "Saddiq Bey", min: 31, pts: 17, reb: 5, ast: 4, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 5, fga: 13, ftm: 4, fta: 4, composite: 3.84, zScores: { pts: 0.772, reb: 0.32, ast: 0.642, stl: -0.737, blk: 0.922, tpm: 1.176, fgImpact: -0.6, ftImpact: 1.087, to: 0.262 } },
          { name: "Trendon Watford", min: 19, pts: 12, reb: 6, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 3, fta: 4, composite: 1.61, zScores: { pts: 0.201, reb: 0.623, ast: -0.494, stl: -0.737, blk: 0.922, tpm: -0.145, fgImpact: 0.602, ftImpact: -0.294, to: 0.933 } },
          { name: "Derik Queen", min: 10, pts: 6, reb: 4, ast: 1, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 4, composite: -6.38, zScores: { pts: -0.484, reb: 0.018, ast: -0.494, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0.142, ftImpact: -1.676, to: -1.753 } },
          { name: "Bennedict Mathurin", min: 7, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -0.941, reb: -1.191, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0.071, ftImpact: 0, to: 0.933 } }
        ]
      }
    },
      {
      id: "401909294",
      line: "Portland Trail Blazers 118 @ Los Angeles Lakers 124 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "POR", name: "Portland Trail Blazers", score: 118,
        players: [
          { name: "Toumani Camara", min: 30, pts: 18, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 7, fga: 12, ftm: 0, fta: 0, composite: 2.92, zScores: { pts: 0.886, reb: 0.623, ast: -0.494, stl: -0.737, blk: -0.589, tpm: 1.836, fgImpact: 1.133, ftImpact: 0, to: 0.262 } },
          { name: "Deni Avdija", min: 39, pts: 22, reb: 9, ast: 11, stl: 2, blk: 0, to: 8, tpm: 1, fgm: 6, fga: 12, ftm: 9, fta: 14, composite: -0.42, zScores: { pts: 1.343, reb: 1.529, ast: 3.293, stl: 1.268, blk: -0.589, tpm: -0.145, fgImpact: 0.426, ftImpact: -3.102, to: -4.438 } },
          { name: "Donovan Clingan", min: 28, pts: 17, reb: 11, ast: 1, stl: 1, blk: 2, to: 3, tpm: 3, fgm: 6, fga: 8, ftm: 2, fta: 3, composite: 6.34, zScores: { pts: 0.772, reb: 2.134, ast: -0.494, stl: 0.266, blk: 2.433, tpm: 1.176, fgImpact: 1.699, ftImpact: -0.566, to: -1.081 } },
          { name: "Damian Lillard", min: 37, pts: 22, reb: 0, ast: 4, stl: 1, blk: 0, to: 4, tpm: 4, fgm: 5, fga: 13, ftm: 8, fta: 8, composite: 2.13, zScores: { pts: 1.343, reb: -1.191, ast: 0.642, stl: 0.266, blk: -0.589, tpm: 1.836, fgImpact: -0.6, ftImpact: 2.175, to: -1.753 } },
          { name: "Scoot Henderson", min: 23, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 5, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 4, composite: -9.27, zScores: { pts: -0.941, reb: -0.586, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -0.637, ftImpact: -1.676, to: -2.424 } },
          { name: "Robert Williams III", min: 16, pts: 9, reb: 5, ast: 2, stl: 2, blk: 2, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 1, fta: 1, composite: 4.73, zScores: { pts: -0.142, reb: 0.32, ast: -0.116, stl: 1.268, blk: 2.433, tpm: -0.806, fgImpact: 1.239, ftImpact: 0.272, to: 0.262 } },
          { name: "Yang Hansen", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -4.33, zScores: { pts: -0.941, reb: -1.191, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0, ftImpact: 0.544, to: 0.262 } },
          { name: "Jrue Holiday", min: 31, pts: 12, reb: 1, ast: 7, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 7, ftm: 1, fta: 1, composite: 2.75, zScores: { pts: 0.201, reb: -0.889, ast: 1.778, stl: -0.737, blk: -0.589, tpm: 1.176, fgImpact: 0.602, ftImpact: 0.272, to: 0.933 } },
          { name: "Chris Youngblood", min: 11, pts: 7, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -2.37, zScores: { pts: -0.37, reb: -0.889, ast: -0.873, stl: 0.266, blk: -0.589, tpm: 0.515, fgImpact: 0.142, ftImpact: -0.838, to: 0.262 } },
          { name: "Sidy Cissoko", min: 22, pts: 7, reb: 2, ast: 3, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: -0.71, zScores: { pts: -0.37, reb: -0.586, ast: 0.263, stl: -0.737, blk: 0.922, tpm: 0.515, fgImpact: -0.813, ftImpact: -0.838, to: 0.933 } }
        ]
      },
      home: {
        abbr: "LAL", name: "Los Angeles Lakers", score: 124,
        players: [
          { name: "Jake LaRavia", min: 25, pts: 7, reb: 8, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 1, fta: 4, composite: -1.66, zScores: { pts: -0.37, reb: 1.227, ast: 0.263, stl: 0.266, blk: -0.589, tpm: 0.515, fgImpact: -0.176, ftImpact: -3.057, to: 0.262 } },
          { name: "Walker Kessler", min: 37, pts: 16, reb: 12, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 10, ftm: 2, fta: 3, composite: 3.31, zScores: { pts: 0.658, reb: 2.436, ast: -0.116, stl: 0.266, blk: -0.589, tpm: -0.806, fgImpact: 1.77, ftImpact: -0.566, to: 0.262 } },
          { name: "Matisse Thybulle", min: 24, pts: 2, reb: 2, ast: 0, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -1.71, zScores: { pts: -0.941, reb: -0.586, ast: -0.873, stl: 2.271, blk: -0.589, tpm: -0.806, fgImpact: -0.318, ftImpact: 0.544, to: -0.41 } },
          { name: "Luka Doncic", min: 38, pts: 53, reb: 5, ast: 5, stl: 1, blk: 0, to: 3, tpm: 5, fgm: 17, fga: 33, ftm: 14, fta: 18, composite: 8.21, zScores: { pts: 4.883, reb: 0.32, ast: 1.021, stl: 0.266, blk: -0.589, tpm: 2.497, fgImpact: 1.525, ftImpact: -0.633, to: -1.081 } },
          { name: "Austin Reaves", min: 38, pts: 25, reb: 3, ast: 2, stl: 4, blk: 0, to: 2, tpm: 1, fgm: 8, fga: 22, ftm: 8, fta: 8, composite: 4.25, zScores: { pts: 1.686, reb: -0.284, ast: -0.116, stl: 3.274, blk: -0.589, tpm: -0.145, fgImpact: -1.342, ftImpact: 2.175, to: -0.41 } },
          { name: "Sandro Mamukelashvili", min: 20, pts: 7, reb: 3, ast: 1, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: 0.88, zScores: { pts: -0.37, reb: -0.284, ast: -0.494, stl: 0.266, blk: 0.922, tpm: -0.145, fgImpact: -0.495, ftImpact: 0.544, to: 0.933 } },
          { name: "Ziaire Williams", min: 20, pts: 8, reb: 3, ast: 1, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.95, zScores: { pts: -0.256, reb: -0.284, ast: -0.494, stl: 1.268, blk: -0.589, tpm: 0.515, fgImpact: 0.531, ftImpact: 0, to: 0.262 } },
          { name: "Adou Thiero", min: 7, pts: 4, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.87, zScores: { pts: -0.713, reb: 0.018, ast: -0.116, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0.142, ftImpact: 0, to: 0.933 } },
          { name: "Collin Sexton", min: 11, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -5.33, zScores: { pts: -1.169, reb: -1.191, ast: -0.494, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -1.273, ftImpact: 0, to: 0.933 } },
          { name: "Quentin Grimes", min: 20, pts: 2, reb: 0, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.12, zScores: { pts: -0.941, reb: -1.191, ast: -0.873, stl: 1.268, blk: -0.589, tpm: -0.806, fgImpact: -0.247, ftImpact: 0, to: 0.262 } }
        ]
      }
    },
      {
      id: "401909295",
      line: "San Antonio Spurs 124 @ Sacramento Kings 109 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SA", name: "San Antonio Spurs", score: 124,
        players: [
          { name: "Victor Wembanyama", min: 26, pts: 30, reb: 14, ast: 2, stl: 0, blk: 2, to: 3, tpm: 4, fgm: 10, fga: 18, ftm: 6, fta: 9, composite: 7.28, zScores: { pts: 2.257, reb: 3.041, ast: -0.116, stl: -0.737, blk: 2.433, tpm: 1.836, fgImpact: 1.346, ftImpact: -1.698, to: -1.081 } },
          { name: "De'Aaron Fox", min: 26, pts: 9, reb: 2, ast: 4, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 6, ftm: 5, fta: 6, composite: -0.36, zScores: { pts: -0.142, reb: -0.586, ast: 0.642, stl: 0.266, blk: 0.922, tpm: -0.806, fgImpact: -0.495, ftImpact: 0.249, to: -0.41 } },
          { name: "Devin Vassell", min: 27, pts: 19, reb: 2, ast: 2, stl: 1, blk: 1, to: 0, tpm: 5, fgm: 6, fga: 10, ftm: 2, fta: 2, composite: 6.52, zScores: { pts: 1, reb: -0.586, ast: -0.116, stl: 0.266, blk: 0.922, tpm: 2.497, fgImpact: 1.062, ftImpact: 0.544, to: 0.933 } },
          { name: "Stephon Castle", min: 28, pts: 19, reb: 3, ast: 7, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 13, ftm: 4, fta: 5, composite: 2.08, zScores: { pts: 1, reb: -0.284, ast: 1.778, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: 0.815, ftImpact: -0.022, to: 0.262 } },
          { name: "Dylan Harper", min: 28, pts: 19, reb: 2, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 10, ftm: 8, fta: 9, composite: 0.89, zScores: { pts: 1, reb: -0.586, ast: 0.263, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: 0.355, ftImpact: 1.065, to: 0.262 } },
          { name: "Harrison Barnes", min: 19, pts: 13, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 7, ftm: 3, fta: 4, composite: -0.01, zScores: { pts: 0.315, reb: -0.889, ast: -0.873, stl: 0.266, blk: -0.589, tpm: 0.515, fgImpact: 0.602, ftImpact: -0.294, to: 0.933 } },
          { name: "Keldon Johnson", min: 27, pts: 3, reb: 6, ast: 6, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 3, composite: -3.54, zScores: { pts: -0.827, reb: 0.623, ast: 1.399, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -0.247, ftImpact: -1.948, to: -0.41 } },
          { name: "Julian Champagnie", min: 22, pts: 8, reb: 7, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.54, zScores: { pts: -0.256, reb: 0.925, ast: -0.116, stl: -0.737, blk: -0.589, tpm: 0.515, fgImpact: 0.531, ftImpact: 0, to: 0.262 } },
          { name: "David Jones Garcia", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.07, zScores: { pts: -1.169, reb: -1.191, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -0.637, ftImpact: 0, to: 0.933 } },
          { name: "Carter Bryant", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.75, zScores: { pts: -1.169, reb: -1.191, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -0.318, ftImpact: 0, to: 0.933 } },
          { name: "Luke Kornet", min: 18, pts: 2, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -2.1, zScores: { pts: -0.941, reb: 0.623, ast: -0.494, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: -0.637, ftImpact: 0.544, to: 0.933 } },
          { name: "Tarris Reed Jr.", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.169, reb: -0.889, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0, ftImpact: 0, to: 0.933 } },
          { name: "Jordan McLaughlin", min: 8, pts: 2, reb: 2, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -1.98, zScores: { pts: -0.941, reb: -0.586, ast: -0.494, stl: 1.268, blk: -0.589, tpm: -0.806, fgImpact: -0.637, ftImpact: 0.544, to: 0.262 } }
        ]
      },
      home: {
        abbr: "SAC", name: "Sacramento Kings", score: 109,
        players: [
          { name: "Domantas Sabonis", min: 31, pts: 17, reb: 12, ast: 5, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 8, fga: 12, ftm: 0, fta: 1, composite: 1.74, zScores: { pts: 0.772, reb: 2.436, ast: 1.021, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: 1.841, ftImpact: -1.11, to: -1.753 } },
          { name: "Leaky Black", min: 40, pts: 12, reb: 3, ast: 5, stl: 2, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 4.99, zScores: { pts: 0.201, reb: -0.284, ast: 1.021, stl: 1.268, blk: -0.589, tpm: 1.836, fgImpact: 0.602, ftImpact: 0, to: 0.933 } },
          { name: "Precious Achiuwa", min: 22, pts: 9, reb: 4, ast: 0, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 1.14, zScores: { pts: -0.142, reb: 0.018, ast: -0.873, stl: -0.737, blk: 2.433, tpm: -0.145, fgImpact: -0.353, ftImpact: 0, to: 0.933 } },
          { name: "Zach LaVine", min: 35, pts: 14, reb: 4, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 12, ftm: 5, fta: 5, composite: 1.55, zScores: { pts: 0.429, reb: 0.018, ast: 0.263, stl: 0.266, blk: -0.589, tpm: -0.145, fgImpact: -0.989, ftImpact: 1.359, to: 0.933 } },
          { name: "Darius Acuff Jr.", min: 33, pts: 22, reb: 3, ast: 8, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 9, fga: 20, ftm: 1, fta: 2, composite: 3.83, zScores: { pts: 1.343, reb: -0.284, ast: 2.157, stl: 1.268, blk: -0.589, tpm: 1.176, fgImpact: 0.002, ftImpact: -0.838, to: -0.41 } },
          { name: "Alex Karaban", min: 11, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.169, reb: -0.889, ast: -0.873, stl: -0.737, blk: -0.589, tpm: -0.806, fgImpact: 0, ftImpact: 0, to: 0.933 } },
          { name: "Dylan Cardwell", min: 15, pts: 9, reb: 2, ast: 3, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 3, fta: 7, composite: -1.72, zScores: { pts: -0.142, reb: -0.586, ast: 0.263, stl: 0.266, blk: 2.433, tpm: -0.806, fgImpact: 0.213, ftImpact: -3.623, to: 0.262 } },
          { name: "Malik Monk", min: 18, pts: 12, reb: 0, ast: 7, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 6, ftm: 4, fta: 4, composite: 0.87, zScores: { pts: 0.201, reb: -1.191, ast: 1.778, stl: -0.737, blk: -0.589, tpm: 0.515, fgImpact: 0.213, ftImpact: 1.087, to: -0.41 } },
          { name: "Nique Clifford", min: 5, pts: 5, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.73, zScores: { pts: -0.598, reb: -0.586, ast: -0.116, stl: -0.737, blk: -0.589, tpm: -0.145, fgImpact: 0.778, ftImpact: 0, to: 0.262 } },
          { name: "Emanuel Sharp", min: 31, pts: 9, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -0.69, zScores: { pts: -0.142, reb: 0.32, ast: -0.873, stl: -0.737, blk: -0.589, tpm: 1.176, fgImpact: -0.105, ftImpact: 0, to: 0.262 } }
        ]
      }
    }
    ]
  },
    "2026-11-07": {
    games: [
      {
      id: "401909938",
      line: "Denver Nuggets 114 @ Indiana Pacers 102 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DEN", name: "Denver Nuggets", score: 114,
        players: [
          { name: "Aaron Gordon", min: 27, pts: 12, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 13, ftm: 2, fta: 4, composite: -4.09, zScores: { pts: 0.239, reb: 0.21, ast: -0.923, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: -0.439, ftImpact: -1.873, to: 0.881 } },
          { name: "Cameron Johnson", min: 29, pts: 18, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 8, fga: 12, ftm: 0, fta: 0, composite: 2.72, zScores: { pts: 0.981, reb: -0.1, ast: -0.546, stl: 0.336, blk: -0.596, tpm: 0.629, fgImpact: 1.876, ftImpact: 0, to: 0.137 } },
          { name: "Nikola Jokic", min: 36, pts: 19, reb: 13, ast: 8, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 7, fga: 20, ftm: 4, fta: 4, composite: 7.12, zScores: { pts: 1.105, reb: 2.689, ast: 2.093, stl: 0.336, blk: 0.58, tpm: -0.136, fgImpact: -1.142, ftImpact: 1.457, to: 0.137 } },
          { name: "Jamal Murray", min: 34, pts: 16, reb: 6, ast: 8, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 13, ftm: 2, fta: 2, composite: 3.79, zScores: { pts: 0.734, reb: 0.52, ast: 2.093, stl: -0.686, blk: -0.596, tpm: 0.629, fgImpact: 0.235, ftImpact: 0.728, to: 0.137 } },
          { name: "Christian Braun", min: 29, pts: 6, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: -1.69, zScores: { pts: -0.503, reb: -0.1, ast: -0.546, stl: 0.336, blk: -0.596, tpm: -0.9, fgImpact: -0.996, ftImpact: 0.728, to: 0.881 } },
          { name: "Marvin Bagley III", min: 12, pts: 10, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 4, fta: 4, composite: -0.92, zScores: { pts: -0.008, reb: -0.41, ast: -0.923, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: 0.264, ftImpact: 1.457, to: 0.881 } },
          { name: "Bryce Hopkins", min: 3, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -3.67, zScores: { pts: -0.874, reb: -1.029, ast: -0.923, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: 0.088, ftImpact: 0.364, to: 0.881 } },
          { name: "Spencer Jones", min: 21, pts: 13, reb: 6, ast: 0, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 3.74, zScores: { pts: 0.363, reb: 0.52, ast: -0.923, stl: -0.686, blk: 0.58, tpm: 1.393, fgImpact: 1.612, ftImpact: 0, to: 0.881 } },
          { name: "Trevon Brazile", min: 14, pts: 3, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.88, zScores: { pts: -0.874, reb: -0.1, ast: -0.169, stl: -0.686, blk: -0.596, tpm: -0.136, fgImpact: -0.205, ftImpact: 0, to: 0.881 } },
          { name: "DeMar DeRozan", min: 22, pts: 11, reb: 1, ast: 5, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 9, ftm: 1, fta: 2, composite: -1.46, zScores: { pts: 0.116, reb: -1.029, ast: 0.962, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: 0.733, ftImpact: -0.937, to: 0.881 } },
          { name: "Tyus Jones", min: 13, pts: 3, reb: 4, ast: 4, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -0.4, zScores: { pts: -0.874, reb: -0.1, ast: 0.585, stl: 0.336, blk: -0.596, tpm: -0.136, fgImpact: -0.498, ftImpact: 0, to: 0.881 } }
        ]
      },
      home: {
        abbr: "IND", name: "Indiana Pacers", score: 102,
        players: [
          { name: "Pascal Siakam", min: 32, pts: 23, reb: 2, ast: 5, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 10, fga: 18, ftm: 1, fta: 2, composite: 2.6, zScores: { pts: 1.6, reb: -0.72, ast: 0.962, stl: -0.686, blk: -0.596, tpm: 0.629, fgImpact: 1.466, ftImpact: -0.937, to: 0.881 } },
          { name: "Ivica Zubac", min: 19, pts: 10, reb: 12, ast: 5, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 5, ftm: 2, fta: 2, composite: 2.5, zScores: { pts: -0.008, reb: 2.379, ast: 0.962, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: 1.231, ftImpact: 0.728, to: -0.607 } },
          { name: "Andrew Nembhard", min: 31, pts: 9, reb: 1, ast: 8, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 9, ftm: 0, fta: 1, composite: -0.74, zScores: { pts: -0.132, reb: -1.029, ast: 2.093, stl: -0.686, blk: -0.596, tpm: 1.393, fgImpact: -0.615, ftImpact: -1.301, to: 0.137 } },
          { name: "Aaron Nesmith", min: 27, pts: 8, reb: 5, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 11, ftm: 0, fta: 0, composite: -3.05, zScores: { pts: -0.255, reb: 0.21, ast: -0.546, stl: -0.686, blk: -0.596, tpm: 0.629, fgImpact: -1.201, ftImpact: 0, to: -0.607 } },
          { name: "Braden Smith", min: 12, pts: 0, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -4.2, zScores: { pts: -1.245, reb: -1.339, ast: -0.169, stl: 0.336, blk: -0.596, tpm: -0.9, fgImpact: -1.172, ftImpact: 0, to: 0.881 } },
          { name: "Larry Nance Jr.", min: 13, pts: 15, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 2.44, zScores: { pts: 0.61, reb: -0.72, ast: -0.546, stl: -0.686, blk: -0.596, tpm: 2.921, fgImpact: 1.319, ftImpact: 0, to: 0.137 } },
          { name: "Obi Toppin", min: 22, pts: 10, reb: 7, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 11, ftm: 0, fta: 0, composite: -0.39, zScores: { pts: -0.008, reb: 0.83, ast: -0.169, stl: -0.686, blk: -0.596, tpm: 0.629, fgImpact: -0.527, ftImpact: 0, to: 0.137 } },
          { name: "Jalen Slawson", min: 12, pts: 4, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.76, zScores: { pts: -0.75, reb: -1.029, ast: -0.169, stl: 0.336, blk: -0.596, tpm: -0.9, fgImpact: 0.469, ftImpact: 0, to: 0.881 } },
          { name: "Jarace Walker", min: 20, pts: 9, reb: 5, ast: 2, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 2.42, zScores: { pts: -0.132, reb: 0.21, ast: -0.169, stl: -0.686, blk: 1.756, tpm: -0.136, fgImpact: -0.029, ftImpact: 0.728, to: 0.881 } },
          { name: "Jay Huff", min: 10, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.76, zScores: { pts: -1.245, reb: -0.41, ast: -0.923, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: -0.879, ftImpact: 0, to: 0.881 } },
          { name: "T.J. McConnell", min: 9, pts: 6, reb: 2, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -2.08, zScores: { pts: -0.503, reb: -0.72, ast: -0.546, stl: -0.686, blk: 0.58, tpm: -0.9, fgImpact: 0.557, ftImpact: 0, to: 0.137 } },
          { name: "Kelly Oubre Jr.", min: 16, pts: 2, reb: 1, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.69, zScores: { pts: -0.998, reb: -1.029, ast: -0.923, stl: -0.686, blk: 1.756, tpm: -0.9, fgImpact: -0.791, ftImpact: 0, to: 0.881 } },
          { name: "Quenton Jackson", min: 17, pts: 6, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -3.09, zScores: { pts: -0.503, reb: -0.1, ast: -0.546, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: 0.85, ftImpact: 0, to: -0.607 } }
        ]
      }
    },
      {
      id: "401909939",
      line: "Brooklyn Nets 121 @ Atlanta Hawks 124 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BKN", name: "Brooklyn Nets", score: 121,
        players: [
          { name: "Julius Randle", min: 34, pts: 19, reb: 7, ast: 8, stl: 2, blk: 0, to: 6, tpm: 1, fgm: 8, fga: 14, ftm: 2, fta: 2, composite: 3.09, zScores: { pts: 1.105, reb: 0.83, ast: 2.093, stl: 1.358, blk: -0.596, tpm: -0.136, fgImpact: 1.29, ftImpact: 0.728, to: -3.581 } },
          { name: "Michael Porter Jr.", min: 36, pts: 25, reb: 9, ast: 1, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 8, fga: 17, ftm: 6, fta: 8, composite: 2.53, zScores: { pts: 1.847, reb: 1.449, ast: -0.546, stl: 0.336, blk: -0.596, tpm: 1.393, fgImpact: 0.411, ftImpact: -0.416, to: -1.35 } },
          { name: "Danny Wolf", min: 31, pts: 11, reb: 9, ast: 1, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 10, ftm: 1, fta: 4, composite: -4.76, zScores: { pts: 0.116, reb: 1.449, ast: -0.546, stl: -0.686, blk: -0.596, tpm: 0.629, fgImpact: -0.234, ftImpact: -3.538, to: -1.35 } },
          { name: "Day'Ron Sharpe", min: 32, pts: 12, reb: 10, ast: 13, stl: 0, blk: 1, to: 4, tpm: 0, fgm: 4, fga: 8, ftm: 4, fta: 4, composite: 4.69, zScores: { pts: 0.239, reb: 1.759, ast: 3.978, stl: -0.686, blk: 0.58, tpm: -0.9, fgImpact: 0.352, ftImpact: 1.457, to: -2.094 } },
          { name: "Nolan Traore", min: 23, pts: 19, reb: 1, ast: 2, stl: 4, blk: 0, to: 1, tpm: 2, fgm: 8, fga: 10, ftm: 1, fta: 2, composite: 5, zScores: { pts: 1.105, reb: -1.029, ast: -0.169, stl: 3.402, blk: -0.596, tpm: 0.629, fgImpact: 2.462, ftImpact: -0.937, to: 0.137 } },
          { name: "Noah Clowney", min: 21, pts: 3, reb: 10, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.11, zScores: { pts: -0.874, reb: 1.759, ast: -0.923, stl: -0.686, blk: -0.596, tpm: -0.136, fgImpact: -0.791, ftImpact: 0, to: 0.137 } },
          { name: "Chaney Johnson", min: 8, pts: 5, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.7, zScores: { pts: -0.627, reb: -0.72, ast: -0.546, stl: -0.686, blk: -0.596, tpm: -0.136, fgImpact: 0.469, ftImpact: 0, to: 0.137 } },
          { name: "Moritz Wagner", min: 16, pts: 9, reb: 2, ast: 0, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 0.43, zScores: { pts: -0.132, reb: -0.72, ast: -0.923, stl: 1.358, blk: -0.596, tpm: -0.136, fgImpact: -0.029, ftImpact: 0.728, to: 0.881 } },
          { name: "Terance Mann", min: 13, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.52, zScores: { pts: -1.245, reb: -0.72, ast: -0.923, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: -0.586, ftImpact: 0, to: 0.137 } },
          { name: "Mikel Brown Jr.", min: 25, pts: 18, reb: 1, ast: 3, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 13, ftm: 5, fta: 7, composite: -0.53, zScores: { pts: 0.981, reb: -1.029, ast: 0.208, stl: 0.336, blk: -0.596, tpm: 1.393, fgImpact: -0.439, ftImpact: -0.781, to: -0.607 } }
        ]
      },
      home: {
        abbr: "ATL", name: "Atlanta Hawks", score: 124,
        players: [
          { name: "Onyeka Okongwu", min: 30, pts: 16, reb: 2, ast: 5, stl: 0, blk: 4, to: 0, tpm: 2, fgm: 5, fga: 10, ftm: 4, fta: 6, composite: 5.2, zScores: { pts: 0.734, reb: -0.72, ast: 0.962, stl: -0.686, blk: 4.107, tpm: 0.629, fgImpact: 0.44, ftImpact: -1.145, to: 0.881 } },
          { name: "Jalen Johnson", min: 36, pts: 30, reb: 7, ast: 6, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 11, fga: 17, ftm: 8, fta: 10, composite: 4.87, zScores: { pts: 2.465, reb: 0.83, ast: 1.339, stl: 0.336, blk: -0.596, tpm: -0.9, fgImpact: 2.433, ftImpact: 0.312, to: -1.35 } },
          { name: "Nickeil Alexander-Walker", min: 31, pts: 20, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 17, ftm: 4, fta: 5, composite: -0.35, zScores: { pts: 1.229, reb: -0.41, ast: -0.546, stl: -0.686, blk: -0.596, tpm: 0.629, fgImpact: -0.263, ftImpact: 0.156, to: 0.137 } },
          { name: "Dyson Daniels", min: 31, pts: 9, reb: 10, ast: 7, stl: 6, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 9, ftm: 1, fta: 2, composite: 6.98, zScores: { pts: -0.132, reb: 1.759, ast: 1.716, stl: 5.446, blk: 0.58, tpm: -0.9, fgImpact: 0.059, ftImpact: -0.937, to: -0.607 } },
          { name: "Kingston Flemings", min: 27, pts: 10, reb: 2, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 0.06, zScores: { pts: -0.008, reb: -0.72, ast: -0.546, stl: -0.686, blk: 1.756, tpm: -0.9, fgImpact: 1.026, ftImpact: 0, to: 0.137 } },
          { name: "Zuby Ejiofor", min: 18, pts: 7, reb: 6, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -0.33, zScores: { pts: -0.379, reb: 0.52, ast: -0.923, stl: -0.686, blk: 0.58, tpm: -0.136, fgImpact: 0.557, ftImpact: 0, to: 0.137 } },
          { name: "CJ McCollum", min: 21, pts: 9, reb: 4, ast: 3, stl: 2, blk: 2, to: 3, tpm: 1, fgm: 4, fga: 14, ftm: 0, fta: 0, composite: 0.2, zScores: { pts: -0.132, reb: -0.1, ast: 0.208, stl: 1.358, blk: 1.756, tpm: -0.136, fgImpact: -1.406, ftImpact: 0, to: -1.35 } },
          { name: "Luguentz Dort", min: 20, pts: 3, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -3.48, zScores: { pts: -0.874, reb: -0.72, ast: -0.546, stl: 0.336, blk: -0.596, tpm: -0.136, fgImpact: -1.084, ftImpact: 0, to: 0.137 } },
          { name: "Aaron Wiggins", min: 26, pts: 20, reb: 4, ast: 6, stl: 1, blk: 0, to: 0, tpm: 5, fgm: 7, fga: 19, ftm: 1, fta: 2, composite: 4.22, zScores: { pts: 1.229, reb: -0.1, ast: 1.339, stl: 0.336, blk: -0.596, tpm: 2.921, fgImpact: -0.849, ftImpact: -0.937, to: 0.881 } }
        ]
      }
    },
      {
      id: "401909940",
      line: "New York Knicks 109 @ Cleveland Cavaliers 97 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NY", name: "New York Knicks", score: 109,
        players: [
          { name: "OG Anunoby", min: 34, pts: 15, reb: 6, ast: 2, stl: 1, blk: 1, to: 2, tpm: 3, fgm: 4, fga: 13, ftm: 4, fta: 4, composite: 3.01, zScores: { pts: 0.61, reb: 0.52, ast: -0.169, stl: 0.336, blk: 0.58, tpm: 1.393, fgImpact: -1.113, ftImpact: 1.457, to: -0.607 } },
          { name: "Karl-Anthony Towns", min: 34, pts: 29, reb: 13, ast: 3, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 11, fga: 21, ftm: 5, fta: 5, composite: 10.59, zScores: { pts: 2.342, reb: 2.689, ast: 0.208, stl: 1.358, blk: -0.596, tpm: 0.629, fgImpact: 1.261, ftImpact: 1.821, to: 0.881 } },
          { name: "Mikal Bridges", min: 31, pts: 9, reb: 6, ast: 4, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 4, fga: 13, ftm: 0, fta: 0, composite: 1.67, zScores: { pts: -0.132, reb: 0.52, ast: 0.585, stl: -0.686, blk: 1.756, tpm: -0.136, fgImpact: -1.113, ftImpact: 0, to: 0.881 } },
          { name: "Landry Shamet", min: 29, pts: 9, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -0.76, zScores: { pts: -0.132, reb: -1.029, ast: -0.546, stl: 0.336, blk: -0.596, tpm: 1.393, fgImpact: -0.322, ftImpact: 0, to: 0.137 } },
          { name: "Jalen Brunson", min: 34, pts: 31, reb: 6, ast: 9, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 12, fga: 25, ftm: 4, fta: 5, composite: 6.75, zScores: { pts: 2.589, reb: 0.52, ast: 2.47, stl: -0.686, blk: -0.596, tpm: 1.393, fgImpact: 0.763, ftImpact: 0.156, to: 0.137 } },
          { name: "Dalton Knecht", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.81, zScores: { pts: -1.245, reb: -1.339, ast: -0.923, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: 0, ftImpact: 0, to: 0.881 } },
          { name: "Mohamed Diawara", min: 14, pts: 2, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3, zScores: { pts: -0.998, reb: -0.41, ast: 0.208, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: -0.498, ftImpact: 0, to: 0.881 } },
          { name: "Andre Drummond", min: 14, pts: 0, reb: 8, ast: 0, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -0.15, zScores: { pts: -1.245, reb: 1.14, ast: -0.923, stl: 1.358, blk: 0.58, tpm: -0.9, fgImpact: -0.293, ftImpact: 0, to: 0.137 } },
          { name: "Jordan Clarkson", min: 15, pts: 9, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: -1.08, zScores: { pts: -0.132, reb: -0.72, ast: -0.923, stl: -0.686, blk: -0.596, tpm: -0.136, fgImpact: 1.231, ftImpact: 0, to: 0.881 } },
          { name: "Miles McBride", min: 16, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.25, zScores: { pts: -0.627, reb: -1.339, ast: -0.923, stl: -0.686, blk: -0.596, tpm: -0.136, fgImpact: 0.176, ftImpact: 0, to: 0.881 } },
          { name: "Tyler Kolek", min: 14, pts: 0, reb: 4, ast: 5, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.73, zScores: { pts: -1.245, reb: -0.1, ast: 0.962, stl: 0.336, blk: -0.596, tpm: -0.9, fgImpact: -0.586, ftImpact: 0, to: -0.607 } }
        ]
      },
      home: {
        abbr: "CLE", name: "Cleveland Cavaliers", score: 97,
        players: [
          { name: "Evan Mobley", min: 33, pts: 12, reb: 9, ast: 5, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 11, ftm: 1, fta: 2, composite: -0.91, zScores: { pts: 0.239, reb: 1.449, ast: 0.962, stl: -0.686, blk: -0.596, tpm: -0.136, fgImpact: 0.147, ftImpact: -0.937, to: -1.35 } },
          { name: "James Harden", min: 34, pts: 7, reb: 2, ast: 5, stl: 0, blk: 2, to: 2, tpm: 1, fgm: 2, fga: 9, ftm: 2, fta: 2, composite: -0.37, zScores: { pts: -0.379, reb: -0.72, ast: 0.962, stl: -0.686, blk: 1.756, tpm: -0.136, fgImpact: -1.289, ftImpact: 0.728, to: -0.607 } },
          { name: "Donovan Mitchell", min: 37, pts: 37, reb: 4, ast: 4, stl: 2, blk: 1, to: 5, tpm: 5, fgm: 13, fga: 22, ftm: 6, fta: 11, composite: 3.84, zScores: { pts: 3.331, reb: -0.1, ast: 0.585, stl: 1.358, blk: 0.58, tpm: 2.921, fgImpact: 2.316, ftImpact: -4.319, to: -2.838 } },
          { name: "Peyton Watson", min: 29, pts: 12, reb: 6, ast: 3, stl: 1, blk: 2, to: 0, tpm: 1, fgm: 5, fga: 11, ftm: 1, fta: 2, composite: 3.01, zScores: { pts: 0.239, reb: 0.52, ast: 0.208, stl: 0.336, blk: 1.756, tpm: -0.136, fgImpact: 0.147, ftImpact: -0.937, to: 0.881 } },
          { name: "Meleek Thomas", min: 24, pts: 9, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -1.81, zScores: { pts: -0.132, reb: -0.1, ast: -0.923, stl: -0.686, blk: -0.596, tpm: 1.393, fgImpact: -0.908, ftImpact: 0, to: 0.137 } },
          { name: "Mario Hezonja", min: 19, pts: 0, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 6, ftm: 0, fta: 0, composite: -4.64, zScores: { pts: -1.245, reb: 0.21, ast: -0.546, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: -1.758, ftImpact: 0, to: 0.881 } },
          { name: "Riley Minix", min: 10, pts: 8, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.51, zScores: { pts: -0.255, reb: -0.41, ast: -0.923, stl: -0.686, blk: -0.596, tpm: 0.629, fgImpact: 0.85, ftImpact: 0, to: 0.881 } },
          { name: "Thomas Bryant", min: 15, pts: 5, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.94, zScores: { pts: -0.627, reb: -0.41, ast: -0.546, stl: -0.686, blk: -0.596, tpm: -0.136, fgImpact: 0.176, ftImpact: 0, to: 0.881 } },
          { name: "Craig Porter Jr.", min: 15, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.245, reb: -1.029, ast: -0.546, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: 0, ftImpact: 0, to: 0.881 } },
          { name: "Tyrese Proctor", min: 23, pts: 7, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -1.41, zScores: { pts: -0.379, reb: -0.41, ast: 0.208, stl: -0.686, blk: -0.596, tpm: 0.629, fgImpact: -0.117, ftImpact: -0.937, to: 0.881 } }
        ]
      }
    },
      {
      id: "401909941",
      line: "Washington Wizards 75 @ Oklahoma City Thunder 114 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WSH", name: "Washington Wizards", score: 75,
        players: [
          { name: "AJ Dybantsa", min: 31, pts: 19, reb: 6, ast: 3, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 7, fga: 15, ftm: 4, fta: 6, composite: -1.76, zScores: { pts: 1.105, reb: 0.52, ast: 0.208, stl: -0.686, blk: -0.596, tpm: -0.136, fgImpact: 0.323, ftImpact: -1.145, to: -1.35 } },
          { name: "Kyshawn George", min: 30, pts: 14, reb: 7, ast: 6, stl: 0, blk: 3, to: 1, tpm: 2, fgm: 5, fga: 16, ftm: 2, fta: 2, composite: 5.08, zScores: { pts: 0.487, reb: 0.83, ast: 1.339, stl: -0.686, blk: 2.931, tpm: 0.629, fgImpact: -1.318, ftImpact: 0.728, to: 0.137 } },
          { name: "Alex Sarr", min: 28, pts: 15, reb: 14, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 7, fga: 17, ftm: 0, fta: 0, composite: 2.26, zScores: { pts: 0.61, reb: 2.999, ast: -0.546, stl: -0.686, blk: -0.596, tpm: -0.136, fgImpact: -0.263, ftImpact: 0, to: 0.881 } },
          { name: "Trae Young", min: 28, pts: 4, reb: 5, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 2, fta: 3, composite: -3.01, zScores: { pts: -0.75, reb: 0.21, ast: 0.208, stl: 0.336, blk: -0.596, tpm: -0.9, fgImpact: -1.084, ftImpact: -0.572, to: 0.137 } },
          { name: "Bilal Coulibaly", min: 20, pts: 0, reb: 5, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 8, ftm: 0, fta: 0, composite: -7.09, zScores: { pts: -1.245, reb: 0.21, ast: -0.923, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: -2.344, ftImpact: 0, to: -0.607 } },
          { name: "Anthony Gill", min: 9, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 1, fta: 2, composite: -6.48, zScores: { pts: -1.121, reb: -1.029, ast: -0.923, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: -1.172, ftImpact: -0.937, to: 0.881 } },
          { name: "Deandre Ayton", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.91, zScores: { pts: -0.998, reb: -1.029, ast: -0.923, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: 0.088, ftImpact: 0, to: 0.137 } },
          { name: "Tre Mann", min: 18, pts: 2, reb: 0, ast: 2, stl: 2, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -0.95, zScores: { pts: -0.998, reb: -1.339, ast: -0.169, stl: 1.358, blk: 1.756, tpm: -0.9, fgImpact: -0.791, ftImpact: 0, to: 0.137 } },
          { name: "Bub Carrington", min: 21, pts: 9, reb: 6, ast: 1, stl: 2, blk: 1, to: 1, tpm: 3, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 3.87, zScores: { pts: -0.132, reb: 0.52, ast: -0.546, stl: 1.358, blk: 0.58, tpm: 1.393, fgImpact: 0.557, ftImpact: 0, to: 0.137 } },
          { name: "Will Riley", min: 20, pts: 5, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -4.25, zScores: { pts: -0.627, reb: -0.72, ast: -0.546, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: -0.117, ftImpact: -0.937, to: 0.881 } },
          { name: "Tre Johnson", min: 28, pts: 4, reb: 0, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 15, ftm: 0, fta: 0, composite: -5.95, zScores: { pts: -0.75, reb: -1.339, ast: 0.208, stl: 0.336, blk: -0.596, tpm: -0.9, fgImpact: -3.047, ftImpact: 0, to: 0.137 } }
        ]
      },
      home: {
        abbr: "OKC", name: "Oklahoma City Thunder", score: 114,
        players: [
          { name: "Isaiah Hartenstein", min: 18, pts: 2, reb: 14, ast: 6, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: 3.29, zScores: { pts: -0.998, reb: 2.999, ast: 1.339, stl: 1.358, blk: -0.596, tpm: -0.9, fgImpact: -0.791, ftImpact: 0, to: 0.881 } },
          { name: "Aday Mara", min: 27, pts: 18, reb: 8, ast: 3, stl: 0, blk: 3, to: 1, tpm: 1, fgm: 8, fga: 10, ftm: 1, fta: 2, composite: 6.1, zScores: { pts: 0.981, reb: 1.14, ast: 0.208, stl: -0.686, blk: 2.931, tpm: -0.136, fgImpact: 2.462, ftImpact: -0.937, to: 0.137 } },
          { name: "Kenrich Williams", min: 23, pts: 9, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 2, fta: 3, composite: -1.54, zScores: { pts: -0.132, reb: -0.1, ast: -0.169, stl: -0.686, blk: -0.596, tpm: -0.136, fgImpact: -0.029, ftImpact: -0.572, to: 0.881 } },
          { name: "Shai Gilgeous-Alexander", min: 29, pts: 30, reb: 2, ast: 9, stl: 0, blk: 1, to: 2, tpm: 3, fgm: 11, fga: 20, ftm: 5, fta: 6, composite: 6.97, zScores: { pts: 2.465, reb: -0.72, ast: 2.47, stl: -0.686, blk: 0.58, tpm: 1.393, fgImpact: 1.554, ftImpact: 0.52, to: -0.607 } },
          { name: "Ajay Mitchell", min: 22, pts: 12, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 14, ftm: 2, fta: 3, composite: -3.11, zScores: { pts: 0.239, reb: -0.1, ast: -0.923, stl: 0.336, blk: -0.596, tpm: -0.9, fgImpact: -0.732, ftImpact: -0.572, to: 0.137 } },
          { name: "Brooks Barnhizer", min: 8, pts: 2, reb: 4, ast: 3, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.41, zScores: { pts: -0.998, reb: -0.1, ast: 0.208, stl: -0.686, blk: 0.58, tpm: -0.9, fgImpact: 0.088, ftImpact: 0, to: -0.607 } },
          { name: "Alex Caruso", min: 13, pts: 0, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.31, zScores: { pts: -1.245, reb: -0.41, ast: 0.208, stl: 0.336, blk: -0.596, tpm: -0.9, fgImpact: -0.586, ftImpact: 0, to: 0.881 } },
          { name: "Micah Peavy", min: 23, pts: 7, reb: 3, ast: 0, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 1.08, zScores: { pts: -0.379, reb: -0.41, ast: -0.923, stl: 2.38, blk: -0.596, tpm: -0.136, fgImpact: 0.264, ftImpact: 0, to: 0.881 } },
          { name: "Dalen Terry", min: 6, pts: 2, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.02, zScores: { pts: -0.998, reb: -0.72, ast: -0.923, stl: 0.336, blk: -0.596, tpm: -0.9, fgImpact: 0.381, ftImpact: 0, to: -0.607 } },
          { name: "Jared McCain", min: 23, pts: 19, reb: 5, ast: 2, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 8, fga: 10, ftm: 1, fta: 1, composite: 4.91, zScores: { pts: 1.105, reb: 0.21, ast: -0.169, stl: 0.336, blk: 0.58, tpm: 0.629, fgImpact: 2.462, ftImpact: 0.364, to: -0.607 } },
          { name: "Josh Dix", min: 21, pts: 2, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.7, zScores: { pts: -0.998, reb: -1.029, ast: -0.169, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: -0.205, ftImpact: 0, to: 0.881 } },
          { name: "Bennett Stirtz", min: 29, pts: 11, reb: 5, ast: 3, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 12, ftm: 3, fta: 3, composite: 1.54, zScores: { pts: 0.116, reb: 0.21, ast: 0.208, stl: -0.686, blk: 0.58, tpm: 0.629, fgImpact: -1.494, ftImpact: 1.093, to: 0.881 } }
        ]
      }
    },
      {
      id: "401909942",
      line: "Orlando Magic 119 @ Golden State Warriors 126 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "ORL", name: "Orlando Magic", score: 119,
        players: [
          { name: "Franz Wagner", min: 40, pts: 30, reb: 6, ast: 11, stl: 2, blk: 0, to: 6, tpm: 3, fgm: 11, fga: 22, ftm: 5, fta: 5, composite: 7.57, zScores: { pts: 2.465, reb: 0.52, ast: 3.224, stl: 1.358, blk: -0.596, tpm: 1.393, fgImpact: 0.968, ftImpact: 1.821, to: -3.581 } },
          { name: "Tristan da Silva", min: 39, pts: 19, reb: 7, ast: 2, stl: 1, blk: 0, to: 1, tpm: 5, fgm: 7, fga: 21, ftm: 0, fta: 0, composite: 3.13, zScores: { pts: 1.105, reb: 0.83, ast: -0.169, stl: 0.336, blk: -0.596, tpm: 2.921, fgImpact: -1.435, ftImpact: 0, to: 0.137 } },
          { name: "Wendell Carter Jr.", min: 40, pts: 19, reb: 11, ast: 0, stl: 0, blk: 2, to: 2, tpm: 3, fgm: 6, fga: 12, ftm: 4, fta: 9, composite: -0.41, zScores: { pts: 1.105, reb: 2.069, ast: -0.923, stl: -0.686, blk: 1.756, tpm: 1.393, fgImpact: 0.528, ftImpact: -5.047, to: -0.607 } },
          { name: "Anthony Black", min: 38, pts: 18, reb: 8, ast: 6, stl: 4, blk: 3, to: 2, tpm: 2, fgm: 7, fga: 19, ftm: 2, fta: 3, composite: 8.39, zScores: { pts: 0.981, reb: 1.14, ast: 1.339, stl: 3.402, blk: 2.931, tpm: 0.629, fgImpact: -0.849, ftImpact: -0.572, to: -0.607 } },
          { name: "Jase Richardson", min: 30, pts: 2, reb: 4, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 13, ftm: 0, fta: 0, composite: -5.69, zScores: { pts: -0.998, reb: -0.1, ast: 0.585, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: -3.135, ftImpact: 0, to: 0.137 } },
          { name: "Jamal Cain", min: 36, pts: 18, reb: 12, ast: 1, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 6, fga: 14, ftm: 4, fta: 4, composite: 5.15, zScores: { pts: 0.981, reb: 2.379, ast: -0.546, stl: 0.336, blk: 0.58, tpm: 0.629, fgImpact: -0.058, ftImpact: 1.457, to: -0.607 } },
          { name: "Nikola Vucevic", min: 6, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.33, zScores: { pts: -1.245, reb: -1.029, ast: -0.169, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: -0.586, ftImpact: 0, to: 0.881 } },
          { name: "Goga Bitadze", min: 7, pts: 4, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.54, zScores: { pts: -0.75, reb: 0.21, ast: -0.169, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: 0.469, ftImpact: 0, to: 0.881 } },
          { name: "Jevon Carter", min: 15, pts: 9, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -0.1, zScores: { pts: -0.132, reb: -1.029, ast: -0.923, stl: 0.336, blk: -0.596, tpm: 1.393, fgImpact: -0.029, ftImpact: 0, to: 0.881 } },
          { name: "Alex Morales", min: 15, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.81, zScores: { pts: -1.245, reb: -0.72, ast: -0.546, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: 0, ftImpact: 0, to: 0.881 } }
        ]
      },
      home: {
        abbr: "GS", name: "Golden State Warriors", score: 126,
        players: [
          { name: "Draymond Green", min: 34, pts: 2, reb: 6, ast: 13, stl: 2, blk: 2, to: 4, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 2, composite: 0.23, zScores: { pts: -0.998, reb: 0.52, ast: 3.978, stl: 1.358, blk: 1.756, tpm: -0.9, fgImpact: -0.791, ftImpact: -2.602, to: -2.094 } },
          { name: "Gui Santos", min: 12, pts: 3, reb: 1, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -5.44, zScores: { pts: -0.874, reb: -1.029, ast: -0.923, stl: 0.336, blk: -0.596, tpm: -0.9, fgImpact: 0.088, ftImpact: -0.937, to: -0.607 } },
          { name: "Yaxel Lendeborg", min: 37, pts: 23, reb: 8, ast: 3, stl: 0, blk: 3, to: 6, tpm: 2, fgm: 9, fga: 15, ftm: 3, fta: 4, composite: 3.7, zScores: { pts: 1.6, reb: 1.14, ast: 0.208, stl: -0.686, blk: 2.931, tpm: 0.629, fgImpact: 1.671, ftImpact: -0.208, to: -3.581 } },
          { name: "Stephen Curry", min: 36, pts: 41, reb: 6, ast: 6, stl: 0, blk: 0, to: 3, tpm: 5, fgm: 13, fga: 19, ftm: 10, fta: 10, composite: 12.81, zScores: { pts: 3.826, reb: 0.52, ast: 1.339, stl: -0.686, blk: -0.596, tpm: 2.921, fgImpact: 3.195, ftImpact: 3.642, to: -1.35 } },
          { name: "Brandin Podziemski", min: 39, pts: 15, reb: 7, ast: 1, stl: 2, blk: 1, to: 0, tpm: 4, fgm: 5, fga: 7, ftm: 1, fta: 2, composite: 6.25, zScores: { pts: 0.61, reb: 0.83, ast: -0.546, stl: 1.358, blk: 0.58, tpm: 2.157, fgImpact: 1.319, ftImpact: -0.937, to: 0.881 } },
          { name: "Georges Niang", min: 25, pts: 11, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 1.8, zScores: { pts: 0.116, reb: -0.72, ast: -0.546, stl: 0.336, blk: -0.596, tpm: 1.393, fgImpact: 0.938, ftImpact: 0, to: 0.881 } },
          { name: "Al Horford", min: 13, pts: 2, reb: 5, ast: 4, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 0.35, zScores: { pts: -0.998, reb: 0.21, ast: 0.585, stl: -0.686, blk: 1.756, tpm: -0.9, fgImpact: -0.498, ftImpact: 0, to: 0.881 } },
          { name: "Charles Bassey", min: 11, pts: 8, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 4, fta: 4, composite: 0.23, zScores: { pts: -0.255, reb: -0.1, ast: -0.923, stl: -0.686, blk: 0.58, tpm: -0.9, fgImpact: 0.176, ftImpact: 1.457, to: 0.881 } },
          { name: "Gary Payton II", min: 13, pts: 4, reb: 0, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -3.13, zScores: { pts: -0.75, reb: -1.339, ast: -0.923, stl: 1.358, blk: -0.596, tpm: -0.9, fgImpact: -0.117, ftImpact: 0, to: 0.137 } },
          { name: "De'Anthony Melton", min: 17, pts: 4, reb: 1, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: -3.41, zScores: { pts: -0.75, reb: -1.029, ast: -0.546, stl: -0.686, blk: 0.58, tpm: -0.136, fgImpact: -0.791, ftImpact: -0.937, to: 0.881 } },
          { name: "Brandon Williams", min: 17, pts: 9, reb: 0, ast: 2, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 7, ftm: 3, fta: 3, composite: -1.32, zScores: { pts: -0.132, reb: -1.339, ast: -0.169, stl: 1.358, blk: -0.596, tpm: -0.9, fgImpact: -0.029, ftImpact: 1.093, to: -0.607 } },
          { name: "Will Richard", min: 12, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -2.21, zScores: { pts: -0.75, reb: -0.72, ast: -0.546, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: 0.381, ftImpact: 0.728, to: 0.881 } }
        ]
      }
    },
      {
      id: "401909943",
      line: "Houston Rockets 99 @ Phoenix Suns 102 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "HOU", name: "Houston Rockets", score: 99,
        players: [
          { name: "Kevin Durant", min: 38, pts: 21, reb: 10, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 14, ftm: 10, fta: 11, composite: 3.93, zScores: { pts: 1.352, reb: 1.759, ast: 0.208, stl: 0.336, blk: -0.596, tpm: -0.136, fgImpact: -0.732, ftImpact: 2.342, to: -0.607 } },
          { name: "Jabari Smith Jr.", min: 39, pts: 15, reb: 9, ast: 2, stl: 3, blk: 1, to: 1, tpm: 1, fgm: 7, fga: 12, ftm: 0, fta: 0, composite: 6.05, zScores: { pts: 0.61, reb: 1.449, ast: -0.169, stl: 2.38, blk: 0.58, tpm: -0.136, fgImpact: 1.202, ftImpact: 0, to: 0.137 } },
          { name: "Alperen Sengun", min: 32, pts: 15, reb: 6, ast: 5, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 5, fga: 16, ftm: 4, fta: 4, composite: 1.38, zScores: { pts: 0.61, reb: 0.52, ast: 0.962, stl: -0.686, blk: 0.58, tpm: -0.136, fgImpact: -1.318, ftImpact: 1.457, to: -0.607 } },
          { name: "Fred VanVleet", min: 31, pts: 16, reb: 3, ast: 4, stl: 0, blk: 1, to: 2, tpm: 4, fgm: 6, fga: 12, ftm: 0, fta: 0, composite: 2.88, zScores: { pts: 0.734, reb: -0.41, ast: 0.585, stl: -0.686, blk: 0.58, tpm: 2.157, fgImpact: 0.528, ftImpact: 0, to: -0.607 } },
          { name: "Amen Thompson", min: 39, pts: 17, reb: 7, ast: 0, stl: 1, blk: 4, to: 1, tpm: 0, fgm: 7, fga: 14, ftm: 3, fta: 4, composite: 4.85, zScores: { pts: 0.858, reb: 0.83, ast: -0.923, stl: 0.336, blk: 4.107, tpm: -0.9, fgImpact: 0.616, ftImpact: -0.208, to: 0.137 } },
          { name: "Tari Eason", min: 23, pts: 2, reb: 7, ast: 2, stl: 1, blk: 1, to: 4, tpm: 0, fgm: 1, fga: 8, ftm: 0, fta: 0, composite: -4.08, zScores: { pts: -0.998, reb: 0.83, ast: -0.169, stl: 0.336, blk: 0.58, tpm: -0.9, fgImpact: -1.67, ftImpact: 0, to: -2.094 } },
          { name: "Oscar Tshiebwe", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.18, zScores: { pts: -0.998, reb: -1.339, ast: -0.923, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: 0.381, ftImpact: 0, to: 0.881 } },
          { name: "Marcus Smart", min: 20, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -0.627, reb: -0.72, ast: -0.923, stl: -0.686, blk: -0.596, tpm: -0.136, fgImpact: -0.703, ftImpact: 0, to: 0.137 } },
          { name: "Bogdan Bogdanovic", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.79, zScores: { pts: -1.245, reb: -1.029, ast: -0.923, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: -0.293, ftImpact: 0, to: 0.881 } },
          { name: "Reed Sheppard", min: 13, pts: 6, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -3.25, zScores: { pts: -0.503, reb: -1.339, ast: -0.923, stl: 0.336, blk: -0.596, tpm: 0.629, fgImpact: -0.996, ftImpact: 0, to: 0.137 } }
        ]
      },
      home: {
        abbr: "PHX", name: "Phoenix Suns", score: 102,
        players: [
          { name: "Dillon Brooks", min: 37, pts: 11, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: -0.52, zScores: { pts: 0.116, reb: -0.1, ast: -0.546, stl: -0.686, blk: -0.596, tpm: 1.393, fgImpact: -0.234, ftImpact: 0, to: 0.137 } },
          { name: "Miles Bridges", min: 31, pts: 13, reb: 10, ast: 7, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 5, fga: 12, ftm: 2, fta: 2, composite: 5.06, zScores: { pts: 0.363, reb: 1.759, ast: 1.716, stl: -0.686, blk: 0.58, tpm: -0.136, fgImpact: -0.146, ftImpact: 0.728, to: 0.881 } },
          { name: "Oso Ighodaro", min: 23, pts: 4, reb: 6, ast: 3, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.08, zScores: { pts: -0.75, reb: 0.52, ast: 0.208, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: 0.469, ftImpact: 0, to: -1.35 } },
          { name: "Devin Booker", min: 39, pts: 24, reb: 2, ast: 3, stl: 3, blk: 0, to: 4, tpm: 2, fgm: 10, fga: 24, ftm: 2, fta: 2, composite: 1.97, zScores: { pts: 1.723, reb: -0.72, ast: 0.208, stl: 2.38, blk: -0.596, tpm: 0.629, fgImpact: -0.293, ftImpact: 0.728, to: -2.094 } },
          { name: "Jalen Green", min: 34, pts: 16, reb: 3, ast: 6, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 7, fga: 14, ftm: 2, fta: 4, composite: -2.85, zScores: { pts: 0.734, reb: -0.41, ast: 1.339, stl: 0.336, blk: -0.596, tpm: -0.9, fgImpact: 0.616, ftImpact: -1.873, to: -2.094 } },
          { name: "Ryan Dunn", min: 23, pts: 8, reb: 5, ast: 3, stl: 3, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 4.01, zScores: { pts: -0.255, reb: 0.21, ast: 0.208, stl: 2.38, blk: -0.596, tpm: 0.629, fgImpact: 0.557, ftImpact: 0, to: 0.881 } },
          { name: "Khaman Maluach", min: 18, pts: 8, reb: 10, ast: 0, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 3, composite: 1.44, zScores: { pts: -0.255, reb: 1.759, ast: -0.923, stl: 0.336, blk: 1.756, tpm: -0.9, fgImpact: 0.85, ftImpact: -0.572, to: -0.607 } },
          { name: "Luke Kennard", min: 14, pts: 11, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -0.19, zScores: { pts: 0.116, reb: -1.029, ast: -0.169, stl: -0.686, blk: -0.596, tpm: 1.393, fgImpact: 0.645, ftImpact: 0, to: 0.137 } },
          { name: "Collin Gillespie", min: 20, pts: 7, reb: 3, ast: 4, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -0.48, zScores: { pts: -0.379, reb: -0.41, ast: 0.585, stl: -0.686, blk: -0.596, tpm: -0.136, fgImpact: 0.264, ftImpact: 0, to: 0.881 } }
        ]
      }
    },
      {
      id: "401909944",
      line: "San Antonio Spurs 125 @ Portland Trail Blazers 103 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SA", name: "San Antonio Spurs", score: 125,
        players: [
          { name: "Victor Wembanyama", min: 24, pts: 29, reb: 7, ast: 3, stl: 1, blk: 1, to: 2, tpm: 3, fgm: 9, fga: 13, ftm: 8, fta: 9, composite: 8.95, zScores: { pts: 2.342, reb: 0.83, ast: 0.208, stl: 0.336, blk: 0.58, tpm: 1.393, fgImpact: 2.257, ftImpact: 1.613, to: -0.607 } },
          { name: "De'Aaron Fox", min: 22, pts: 8, reb: 3, ast: 6, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 5, fta: 6, composite: 1.91, zScores: { pts: -0.255, reb: -0.41, ast: 1.339, stl: 0.336, blk: 0.58, tpm: -0.136, fgImpact: -0.205, ftImpact: 0.52, to: 0.137 } },
          { name: "Devin Vassell", min: 21, pts: 15, reb: 2, ast: 3, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 8, ftm: 5, fta: 5, composite: 4.54, zScores: { pts: 0.61, reb: -0.72, ast: 0.208, stl: 1.358, blk: -0.596, tpm: 0.629, fgImpact: 0.352, ftImpact: 1.821, to: 0.881 } },
          { name: "Stephon Castle", min: 24, pts: 14, reb: 7, ast: 5, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 5, fga: 12, ftm: 2, fta: 2, composite: 2.78, zScores: { pts: 0.487, reb: 0.83, ast: 0.962, stl: -0.686, blk: 0.58, tpm: 0.629, fgImpact: -0.146, ftImpact: 0.728, to: -0.607 } },
          { name: "Dylan Harper", min: 28, pts: 13, reb: 7, ast: 3, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 6, fga: 13, ftm: 0, fta: 0, composite: 1.53, zScores: { pts: 0.363, reb: 0.83, ast: 0.208, stl: -0.686, blk: 0.58, tpm: -0.136, fgImpact: 0.235, ftImpact: 0, to: 0.137 } },
          { name: "Harrison Barnes", min: 19, pts: 5, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -2.32, zScores: { pts: -0.627, reb: -0.41, ast: -0.923, stl: -0.686, blk: 0.58, tpm: -0.136, fgImpact: -0.996, ftImpact: 0, to: 0.881 } },
          { name: "Keldon Johnson", min: 27, pts: 10, reb: 7, ast: 4, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 3, fga: 10, ftm: 4, fta: 4, composite: -0.28, zScores: { pts: -0.008, reb: 0.83, ast: 0.585, stl: 1.358, blk: -0.596, tpm: -0.9, fgImpact: -0.908, ftImpact: 1.457, to: -2.094 } },
          { name: "Julian Champagnie", min: 21, pts: 14, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 2.59, zScores: { pts: 0.487, reb: -0.1, ast: -0.923, stl: -0.686, blk: -0.596, tpm: 2.157, fgImpact: 0.645, ftImpact: 0.728, to: 0.881 } },
          { name: "Carter Bryant", min: 17, pts: 6, reb: 4, ast: 1, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -1.64, zScores: { pts: -0.503, reb: -0.1, ast: -0.546, stl: -0.686, blk: 0.58, tpm: 0.629, fgImpact: -0.41, ftImpact: 0, to: -0.607 } },
          { name: "Luke Kornet", min: 15, pts: 6, reb: 4, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -1.03, zScores: { pts: -0.503, reb: -0.1, ast: -0.169, stl: -0.686, blk: 0.58, tpm: -0.9, fgImpact: -0.117, ftImpact: 0.728, to: 0.137 } },
          { name: "Tarris Reed Jr.", min: 9, pts: 2, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.95, zScores: { pts: -0.998, reb: -0.41, ast: -0.546, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: -0.205, ftImpact: 0, to: -0.607 } },
          { name: "Jordan McLaughlin", min: 12, pts: 3, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.31, zScores: { pts: -0.874, reb: -1.339, ast: -0.923, stl: 0.336, blk: -0.596, tpm: -0.136, fgImpact: 0.088, ftImpact: 0, to: 0.137 } }
        ]
      },
      home: {
        abbr: "POR", name: "Portland Trail Blazers", score: 103,
        players: [
          { name: "Toumani Camara", min: 21, pts: 4, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -4.52, zScores: { pts: -0.75, reb: -0.1, ast: -0.923, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: -0.703, ftImpact: 0, to: 0.137 } },
          { name: "Deni Avdija", min: 24, pts: 15, reb: 4, ast: 1, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 13, ftm: 3, fta: 4, composite: -1.66, zScores: { pts: 0.61, reb: -0.1, ast: -0.546, stl: 0.336, blk: -0.596, tpm: 0.629, fgImpact: -0.439, ftImpact: -0.208, to: -1.35 } },
          { name: "Donovan Clingan", min: 22, pts: 6, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -2.25, zScores: { pts: -0.503, reb: 0.21, ast: -0.923, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: 0.264, ftImpact: 0, to: 0.881 } },
          { name: "Damian Lillard", min: 20, pts: 12, reb: 0, ast: 7, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 8, ftm: 2, fta: 3, composite: -1.61, zScores: { pts: 0.239, reb: -1.339, ast: 1.716, stl: -0.686, blk: -0.596, tpm: 0.629, fgImpact: 0.352, ftImpact: -0.572, to: -1.35 } },
          { name: "Scoot Henderson", min: 24, pts: 13, reb: 2, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 10, ftm: 5, fta: 6, composite: -0.46, zScores: { pts: 0.363, reb: -0.72, ast: -0.546, stl: 0.336, blk: 0.58, tpm: -0.9, fgImpact: -0.234, ftImpact: 0.52, to: 0.137 } },
          { name: "Micah Potter", min: 14, pts: 7, reb: 3, ast: 1, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.88, zScores: { pts: -0.379, reb: -0.41, ast: -0.546, stl: 0.336, blk: 0.58, tpm: -0.136, fgImpact: 0.557, ftImpact: 0, to: 0.881 } },
          { name: "Branden Carlson", min: 12, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.22, zScores: { pts: -0.75, reb: -0.72, ast: -0.923, stl: -0.686, blk: -0.596, tpm: -0.9, fgImpact: 0.469, ftImpact: 0, to: 0.881 } },
          { name: "Yang Hansen", min: 26, pts: 12, reb: 10, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 7, ftm: 5, fta: 6, composite: 0.94, zScores: { pts: 0.239, reb: 1.759, ast: -0.546, stl: 0.336, blk: -0.596, tpm: -0.136, fgImpact: -0.029, ftImpact: 0.52, to: -0.607 } },
          { name: "Jrue Holiday", min: 20, pts: 11, reb: 0, ast: 0, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 8, ftm: 4, fta: 4, composite: -2.76, zScores: { pts: 0.116, reb: -1.339, ast: -0.923, stl: 0.336, blk: -0.596, tpm: -0.136, fgImpact: -0.322, ftImpact: 1.457, to: -1.35 } },
          { name: "Jayson Kent", min: 12, pts: 4, reb: 1, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.74, zScores: { pts: -0.75, reb: -1.029, ast: -0.546, stl: 1.358, blk: -0.596, tpm: -0.9, fgImpact: -0.41, ftImpact: 0, to: 0.137 } },
          { name: "Chris Youngblood", min: 30, pts: 11, reb: 4, ast: 4, stl: 1, blk: 1, to: 3, tpm: 2, fgm: 3, fga: 8, ftm: 3, fta: 4, composite: 0.27, zScores: { pts: 0.116, reb: -0.1, ast: 0.585, stl: 0.336, blk: 0.58, tpm: 0.629, fgImpact: -0.322, ftImpact: -0.208, to: -1.35 } },
          { name: "Sidy Cissoko", min: 16, pts: 4, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 3, composite: -2.76, zScores: { pts: -0.75, reb: -0.41, ast: -0.546, stl: 0.336, blk: -0.596, tpm: -0.9, fgImpact: -0.205, ftImpact: -0.572, to: 0.881 } }
        ]
      }
    }
    ]
  },
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
      line: "Toronto Raptors @ Philadelphia 76ers (10:51 - 3rd)",
      completed: false,
      statusText: "10:51 - 3rd",
      away: {
        abbr: "TOR", name: "Toronto Raptors", score: null,
        players: [

        ]
      },
      home: {
        abbr: "PHI", name: "Philadelphia 76ers", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909977",
      line: "Detroit Pistons @ Washington Wizards (11:24 - 3rd)",
      completed: false,
      statusText: "11:24 - 3rd",
      away: {
        abbr: "DET", name: "Detroit Pistons", score: null,
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
      id: "401909978",
      line: "Dallas Mavericks @ Minnesota Timberwolves (5:16 - 1st)",
      completed: false,
      statusText: "5:16 - 1st",
      away: {
        abbr: "DAL", name: "Dallas Mavericks", score: null,
        players: [

        ]
      },
      home: {
        abbr: "MIN", name: "Minnesota Timberwolves", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909979",
      line: "Charlotte Hornets @ Phoenix Suns (11/12 - 9:00 PM EST)",
      completed: false,
      statusText: "11/12 - 9:00 PM EST",
      away: {
        abbr: "CHA", name: "Charlotte Hornets", score: null,
        players: [

        ]
      },
      home: {
        abbr: "PHX", name: "Phoenix Suns", score: null,
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
