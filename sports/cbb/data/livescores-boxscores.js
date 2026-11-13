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
    "2026-11-06": {
    games: [
      {
      id: "401920685",
      line: "UConn Huskies 85 @ Michigan Wolverines 77 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UConn", name: "UConn Huskies", score: 85,
        players: [
          { name: "Nik Khamenia", min: 23, pts: 7, reb: 2, ast: 1, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -1.84, zScores: { pts: -0.097, reb: -0.402, ast: -0.281, stl: -0.722, blk: 0.955, tpm: 0.14, fgImpact: 0.461, ftImpact: 0, to: -1.893 } },
          { name: "Jayden Ross", min: 30, pts: 9, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 6, ftm: 3, fta: 4, composite: -2.3, zScores: { pts: 0.198, reb: 0.296, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: -0.736, ftImpact: -0.004, to: -0.993 } },
          { name: "Na'jai Hines", min: 22, pts: 7, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 5, fta: 6, composite: -1.98, zScores: { pts: -0.097, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.023, ftImpact: 0.736, to: -0.094 } },
          { name: "Braylon Mullins", min: 27, pts: 23, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 12, ftm: 10, fta: 11, composite: 5.14, zScores: { pts: 2.263, reb: 0.296, ast: -0.812, stl: 0.286, blk: -0.475, tpm: 1.757, fgImpact: -0.666, ftImpact: 2.586, to: -0.094 } },
          { name: "Silas Demary Jr.", min: 36, pts: 21, reb: 7, ast: 4, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 7, fga: 17, ftm: 5, fta: 7, composite: 5.81, zScores: { pts: 1.968, reb: 1.343, ast: 1.311, stl: 1.294, blk: -0.475, tpm: 0.949, fgImpact: -1.01, ftImpact: -0.379, to: 0.806 } },
          { name: "Colben Landrew", min: 22, pts: 14, reb: 8, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 8, ftm: 5, fta: 6, composite: 3.46, zScores: { pts: 0.935, reb: 1.692, ast: 0.249, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.093, ftImpact: 0.736, to: 0.806 } },
          { name: "Oskar Giltay", min: 18, pts: 2, reb: 2, ast: 0, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.15, zScores: { pts: -0.835, reb: -0.402, ast: -0.812, stl: 1.294, blk: 0.955, tpm: -0.668, fgImpact: 0.414, ftImpact: 0, to: -0.094 } },
          { name: "Junior County", min: 17, pts: 2, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -3.25, zScores: { pts: -0.835, reb: -0.751, ast: -0.281, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -1.173, ftImpact: 0.74, to: -0.094 } },
          { name: "Nils Machowski", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.14, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } }
        ]
      },
      home: {
        abbr: "Mich", name: "Michigan Wolverines", score: 77,
        players: [
          { name: "J.P. Estrella", min: 33, pts: 19, reb: 9, ast: 3, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 7, ftm: 7, fta: 8, composite: 6.21, zScores: { pts: 1.673, reb: 2.041, ast: 0.78, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 2.095, ftImpact: 1.476, to: -0.993 } },
          { name: "Moustapha Thiam", min: 15, pts: 2, reb: 5, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.7, zScores: { pts: -0.835, reb: 0.645, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.368, ftImpact: 0, to: -0.993 } },
          { name: "Roddy Gayle Jr.", min: 31, pts: 18, reb: 1, ast: 1, stl: 3, blk: 0, to: 3, tpm: 0, fgm: 6, fga: 12, ftm: 6, fta: 6, composite: 2.12, zScores: { pts: 1.525, reb: -0.751, ast: -0.281, stl: 2.302, blk: -0.475, tpm: -0.668, fgImpact: 0.14, ftImpact: 2.22, to: -1.893 } },
          { name: "Trey McKenney", min: 36, pts: 22, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 8, fga: 18, ftm: 2, fta: 2, composite: 4.1, zScores: { pts: 2.115, reb: -0.053, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 2.566, fgImpact: -0.596, ftImpact: 0.74, to: 0.806 } },
          { name: "Elliot Cadeau", min: 28, pts: 8, reb: 3, ast: 3, stl: 0, blk: 0, to: 5, tpm: 1, fgm: 3, fga: 11, ftm: 1, fta: 3, composite: -7.71, zScores: { pts: 0.05, reb: -0.053, ast: 0.78, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -1.886, ftImpact: -1.859, to: -3.692 } },
          { name: "Quinn Costello", min: 18, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 2, composite: -6.78, zScores: { pts: -0.687, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -1.15, ftImpact: -2.229, to: -0.094 } },
          { name: "Oscar Goodman", min: 10, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.98, zScores: { pts: -1.13, reb: -0.751, ast: 0.249, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: -0.094 } },
          { name: "Jalen Reed", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Ricky Liburd", min: 20, pts: 5, reb: 4, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: 0.78, zScores: { pts: -0.392, reb: 0.296, ast: -0.281, stl: -0.722, blk: 0.955, tpm: 0.14, fgImpact: -0.759, ftImpact: 0.74, to: 0.806 } },
          { name: "Kenny Noland", min: 6, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.35, zScores: { pts: -1.13, reb: -1.1, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.782, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401920423",
      line: "Northeastern Huskies 72 @ Virginia Cavaliers 97 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NE", name: "Northeastern Huskies", score: 72,
        players: [

        ]
      },
      home: {
        abbr: "UVA", name: "Virginia Cavaliers", score: 97,
        players: [
          { name: "Nolan Adekunle", min: 25, pts: 3, reb: 5, ast: 2, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 2.03, zScores: { pts: -0.687, reb: 0.645, ast: 0.249, stl: 0.286, blk: 0.955, tpm: 0.14, fgImpact: -0.368, ftImpact: 0, to: 0.806 } },
          { name: "Thijs De Ridder", min: 25, pts: 16, reb: 6, ast: 4, stl: 4, blk: 0, to: 2, tpm: 1, fgm: 7, fga: 9, ftm: 1, fta: 2, composite: 6.89, zScores: { pts: 1.23, reb: 0.994, ast: 1.311, stl: 3.31, blk: -0.475, tpm: 0.14, fgImpact: 2.119, ftImpact: -0.744, to: -0.993 } },
          { name: "Johann Grunloh", min: 21, pts: 13, reb: 4, ast: 3, stl: 1, blk: 2, to: 2, tpm: 1, fgm: 5, fga: 9, ftm: 2, fta: 2, composite: 4.93, zScores: { pts: 0.788, reb: 0.296, ast: 0.78, stl: 0.286, blk: 2.386, tpm: 0.14, fgImpact: 0.508, ftImpact: 0.74, to: -0.993 } },
          { name: "Sam Lewis", min: 30, pts: 20, reb: 2, ast: 4, stl: 1, blk: 0, to: 6, tpm: 2, fgm: 5, fga: 11, ftm: 8, fta: 8, composite: 1.58, zScores: { pts: 1.82, reb: -0.402, ast: 1.311, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: -0.274, ftImpact: 2.96, to: -4.591 } },
          { name: "Chance Mallory", min: 27, pts: 20, reb: 2, ast: 5, stl: 4, blk: 0, to: 1, tpm: 3, fgm: 7, fga: 12, ftm: 3, fta: 4, composite: 8.7, zScores: { pts: 1.82, reb: -0.402, ast: 1.842, stl: 3.31, blk: -0.475, tpm: 1.757, fgImpact: 0.945, ftImpact: -0.004, to: -0.094 } },
          { name: "Silas Barksdale", min: 3, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.05, zScores: { pts: -1.13, reb: -0.053, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Kalu Anya", min: 12, pts: 2, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 1, composite: -3.84, zScores: { pts: -0.835, reb: -1.1, ast: 0.249, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.023, ftImpact: -1.114, to: 0.806 } },
          { name: "Carter Lang", min: 2, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.86, zScores: { pts: -0.835, reb: -1.1, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.414, ftImpact: 0, to: 0.806 } },
          { name: "Favour Ibe", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Quincy Watson", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Nick Rotter", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Christian Harmon", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.39, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: -0.094 } },
          { name: "Owen Odom", min: 1, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -3.07, zScores: { pts: -0.835, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0.74, to: 0.806 } },
          { name: "Martin Carrere", min: 8, pts: 5, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.28, zScores: { pts: -0.392, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.047, ftImpact: 0, to: 0.806 } },
          { name: "Jan Vide", min: 8, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.95, zScores: { pts: -0.835, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.368, ftImpact: 0, to: 0.806 } },
          { name: "Elijah Gertrude", min: 17, pts: 10, reb: 5, ast: 1, stl: 1, blk: 1, to: 1, tpm: 3, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: 3.33, zScores: { pts: 0.345, reb: 0.645, ast: -0.281, stl: 0.286, blk: 0.955, tpm: 1.757, fgImpact: 0.461, ftImpact: -0.744, to: -0.094 } },
          { name: "Jurian Dixon", min: 15, pts: 2, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.66, zScores: { pts: -0.835, reb: -0.751, ast: 0.249, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.368, ftImpact: 0, to: -0.094 } }
        ]
      }
    },
      {
      id: "401921719",
      line: "Wagner Seahawks 57 @ Miami Hurricanes 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WAG", name: "Wagner Seahawks", score: 57,
        players: [

        ]
      },
      home: {
        abbr: "Mia-FL", name: "Miami Hurricanes", score: 83,
        players: [
          { name: "Caleb Gaskins", min: 29, pts: 11, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 8, ftm: 0, fta: 1, composite: -0.16, zScores: { pts: 0.493, reb: 0.994, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.899, ftImpact: -1.114, to: -0.094 } },
          { name: "Malik Reneau", min: 23, pts: 12, reb: 4, ast: 1, stl: 2, blk: 1, to: 3, tpm: 0, fgm: 5, fga: 7, ftm: 2, fta: 2, composite: 2.37, zScores: { pts: 0.64, reb: 0.296, ast: -0.281, stl: 1.294, blk: 0.955, tpm: -0.668, fgImpact: 1.29, ftImpact: 0.74, to: -1.893 } },
          { name: "Shelton Henderson", min: 27, pts: 19, reb: 3, ast: 5, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 8, fga: 12, ftm: 3, fta: 3, composite: 7.39, zScores: { pts: 1.673, reb: -0.053, ast: 1.842, stl: 2.302, blk: -0.475, tpm: -0.668, fgImpact: 1.751, ftImpact: 1.11, to: -0.094 } },
          { name: "Somto Cyril", min: 18, pts: 9, reb: 2, ast: 1, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 5, fta: 6, composite: 0.97, zScores: { pts: 0.198, reb: -0.402, ast: -0.281, stl: 2.302, blk: -0.475, tpm: -0.668, fgImpact: -0.344, ftImpact: 0.736, to: -0.094 } },
          { name: "Acaden Lewis", min: 29, pts: 5, reb: 2, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 1, composite: 0.49, zScores: { pts: -0.392, reb: -0.402, ast: 1.311, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.344, ftImpact: 0.37, to: 0.806 } },
          { name: "DeSean Goode", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.14, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } },
          { name: "Christopher Birden Jr.", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.094 } },
          { name: "Robert Miller III", min: 9, pts: 7, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 1, composite: -1.85, zScores: { pts: -0.097, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.852, ftImpact: 0.37, to: 0.806 } },
          { name: "Egor Ryzhov", min: 11, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.69, zScores: { pts: -1.13, reb: -0.402, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: -0.094 } },
          { name: "Nick Dorn", min: 15, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.71, zScores: { pts: -0.687, reb: -0.402, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -0.759, ftImpact: 0, to: -0.993 } },
          { name: "Dante Allen", min: 17, pts: 8, reb: 6, ast: 5, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 4, fta: 4, composite: 4.24, zScores: { pts: 0.05, reb: 0.994, ast: 1.842, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0.829, ftImpact: 1.48, to: -0.094 } },
          { name: "Brent Bland", min: 14, pts: 9, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 0.13, zScores: { pts: 0.198, reb: -0.053, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 1.757, fgImpact: -1.103, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401909785",
      line: "Middle Tennessee Blue Raiders 45 @ Kansas Jayhawks 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MTSU", name: "Middle Tennessee Blue Raiders", score: 45,
        players: [

        ]
      },
      home: {
        abbr: "Kan", name: "Kansas Jayhawks", score: 89,
        players: [
          { name: "Trey Kaufman-Renn", min: 18, pts: 17, reb: 4, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 7, fga: 8, ftm: 3, fta: 5, composite: 3.69, zScores: { pts: 1.378, reb: 0.296, ast: 0.249, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 2.51, ftImpact: -1.119, to: 0.806 } },
          { name: "Melvin Council Jr.", min: 20, pts: 6, reb: 1, ast: 3, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 2.6, zScores: { pts: -0.245, reb: -0.751, ast: 0.78, stl: 2.302, blk: -0.475, tpm: -0.668, fgImpact: 0.852, ftImpact: 0, to: 0.806 } },
          { name: "Taylen Kinney", min: 21, pts: 3, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -2.83, zScores: { pts: -0.687, reb: -0.751, ast: 0.78, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.368, ftImpact: -0.744, to: 0.806 } },
          { name: "Tyran Stokes", min: 21, pts: 8, reb: 5, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 4, fta: 7, composite: -2.69, zScores: { pts: 0.05, reb: 0.645, ast: 0.249, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: -0.344, ftImpact: -1.863, to: -0.993 } },
          { name: "Tre White", min: 17, pts: 9, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 7, ftm: 1, fta: 2, composite: -0.99, zScores: { pts: 0.198, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: -0.321, ftImpact: -0.744, to: 0.806 } },
          { name: "Atticus Richmond", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.14, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } },
          { name: "Davion Adkins", min: 11, pts: 2, reb: 1, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.94, zScores: { pts: -0.835, reb: -0.751, ast: -0.281, stl: -0.722, blk: 2.386, tpm: -0.668, fgImpact: 0.023, ftImpact: 0, to: -0.094 } },
          { name: "Keanu Dawes", min: 19, pts: 8, reb: 8, ast: 1, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 2, composite: -0.12, zScores: { pts: 0.05, reb: 1.692, ast: -0.281, stl: -0.722, blk: 0.955, tpm: 0.949, fgImpact: 0.461, ftImpact: -2.229, to: -0.993 } },
          { name: "Paul Mbiya", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -5.23, zScores: { pts: -0.835, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.023, ftImpact: 0, to: -0.993 } },
          { name: "Christian Reeves", min: 11, pts: 10, reb: 5, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 5, ftm: 0, fta: 0, composite: 1.72, zScores: { pts: 0.345, reb: 0.645, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 2.072, ftImpact: 0, to: -0.094 } },
          { name: "Leroy Blyden Jr.", min: 19, pts: 6, reb: 1, ast: 2, stl: 3, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.41, zScores: { pts: -0.245, reb: -0.751, ast: 0.249, stl: 2.302, blk: 0.955, tpm: -0.668, fgImpact: 0.461, ftImpact: 0, to: -1.893 } },
          { name: "Will Thengvall", min: 3, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.4, zScores: { pts: -1.13, reb: -0.402, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Luke Barnett", min: 7, pts: 9, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 0.5, zScores: { pts: 0.198, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 1.757, fgImpact: 0.852, ftImpact: 0, to: 0.806 } },
          { name: "Trent Perry", min: 10, pts: 3, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 3, fta: 4, composite: -2.25, zScores: { pts: -0.687, reb: -0.751, ast: 0.249, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: -0.004, to: 0.806 } },
          { name: "Dennis Parker Jr.", min: 13, pts: 6, reb: 7, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -0.2, zScores: { pts: -0.245, reb: 1.343, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0.461, ftImpact: 0, to: -0.094 } }
        ]
      }
    },
      {
      id: "401909772",
      line: "Southern Miss Golden Eagles 57 @ Iowa State Cyclones 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "USM", name: "Southern Miss Golden Eagles", score: 57,
        players: [

        ]
      },
      home: {
        abbr: "IaSt", name: "Iowa State Cyclones", score: 83,
        players: [
          { name: "Dominykas Pleta", min: 17, pts: 8, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: -0.34, zScores: { pts: 0.05, reb: 0.645, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.461, ftImpact: 0.74, to: -0.094 } },
          { name: "Tre Singleton", min: 30, pts: 28, reb: 9, ast: 1, stl: 1, blk: 3, to: 3, tpm: 1, fgm: 10, fga: 17, ftm: 7, fta: 10, composite: 7.76, zScores: { pts: 3, reb: 2.041, ast: -0.281, stl: 0.286, blk: 3.816, tpm: 0.14, fgImpact: 1.407, ftImpact: -0.753, to: -1.893 } },
          { name: "Jamarion Batemon", min: 22, pts: 8, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 6, fta: 6, composite: -2.6, zScores: { pts: 0.05, reb: -0.053, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -1.15, ftImpact: 2.22, to: -0.993 } },
          { name: "Ryan Prather Jr.", min: 30, pts: 9, reb: 3, ast: 1, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 3, fta: 4, composite: 2.59, zScores: { pts: 0.198, reb: -0.053, ast: -0.281, stl: 2.302, blk: -0.475, tpm: 0.949, fgImpact: 0.047, ftImpact: -0.004, to: -0.094 } },
          { name: "Tamin Lipsey", min: 23, pts: 7, reb: 4, ast: 1, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: -3.73, zScores: { pts: -0.097, reb: 0.296, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.852, ftImpact: -0.744, to: -1.893 } },
          { name: "Dorian Rinaldo-Komlan", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Taj Manning", min: 22, pts: 4, reb: 3, ast: 0, stl: 1, blk: 4, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: 3.62, zScores: { pts: -0.54, reb: -0.053, ast: -0.812, stl: 0.286, blk: 5.246, tpm: -0.668, fgImpact: 0.414, ftImpact: 0.74, to: -0.993 } },
          { name: "Xzavion Mitchell", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.39, zScores: { pts: -0.835, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.414, ftImpact: 0, to: 0.806 } },
          { name: "Blake Buchanan", min: 14, pts: 3, reb: 3, ast: 3, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 3, composite: -0.92, zScores: { pts: -0.687, reb: -0.053, ast: 0.78, stl: 0.286, blk: 0.955, tpm: -0.668, fgImpact: 0.414, ftImpact: -1.859, to: -0.094 } },
          { name: "Anthony Rise", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Jaquan Johnson", min: 19, pts: 10, reb: 4, ast: 4, stl: 4, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 9, ftm: 2, fta: 5, composite: 1.12, zScores: { pts: 0.345, reb: 0.296, ast: 1.311, stl: 3.31, blk: -0.475, tpm: -0.668, fgImpact: -0.298, ftImpact: -2.603, to: -0.094 } },
          { name: "Yusef Gray Jr.", min: 3, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.61, zScores: { pts: -1.13, reb: -0.751, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } },
          { name: "Leon Bond III", min: 13, pts: 4, reb: 2, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -2.59, zScores: { pts: -0.54, reb: -0.402, ast: -0.812, stl: -0.722, blk: 0.955, tpm: 0.14, fgImpact: -0.368, ftImpact: -0.744, to: -0.094 } }
        ]
      }
    },
      {
      id: "401906758",
      line: "Arkansas State Red Wolves 86 @ Alabama Crimson Tide 101 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ARST", name: "Arkansas State Red Wolves", score: 86,
        players: [

        ]
      },
      home: {
        abbr: "Bama", name: "Alabama Crimson Tide", score: 101,
        players: [
          { name: "London Jemison", min: 21, pts: 8, reb: 3, ast: 1, stl: 1, blk: 2, to: 0, tpm: 2, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: 2.65, zScores: { pts: 0.05, reb: -0.053, ast: -0.281, stl: 0.286, blk: 2.386, tpm: 0.949, fgImpact: -1.494, ftImpact: 0, to: 0.806 } },
          { name: "Drew Fielder", min: 20, pts: 16, reb: 5, ast: 3, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 11, ftm: 3, fta: 7, composite: 1.52, zScores: { pts: 1.23, reb: 0.645, ast: 0.78, stl: 1.294, blk: -0.475, tpm: 1.757, fgImpact: -0.274, ftImpact: -3.347, to: -0.094 } },
          { name: "Brandon Garrison", min: 19, pts: 14, reb: 10, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 7, ftm: 3, fta: 6, composite: 1.96, zScores: { pts: 0.935, reb: 2.39, ast: -0.281, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: 1.29, ftImpact: -2.233, to: -0.094 } },
          { name: "Qayden Samuels", min: 21, pts: 17, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 13, ftm: 8, fta: 8, composite: 1.8, zScores: { pts: 1.378, reb: -0.053, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 1.757, fgImpact: -2.668, ftImpact: 2.96, to: -0.094 } },
          { name: "Amari Allen", min: 31, pts: 16, reb: 13, ast: 11, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 3, fga: 8, ftm: 7, fta: 8, composite: 9.13, zScores: { pts: 1.23, reb: 3.437, ast: 5.028, stl: -0.722, blk: -0.475, tpm: 1.757, fgImpact: -0.712, ftImpact: 1.476, to: -1.893 } },
          { name: "Tarris Bouie", min: 16, pts: 12, reb: 0, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 8, ftm: 4, fta: 4, composite: -0.21, zScores: { pts: 0.64, reb: -1.1, ast: -0.281, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: -0.712, ftImpact: 1.48, to: -0.993 } },
          { name: "Keitenn Bristow", min: 20, pts: 7, reb: 9, ast: 0, stl: 0, blk: 3, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: 3.11, zScores: { pts: -0.097, reb: 2.041, ast: -0.812, stl: -0.722, blk: 3.816, tpm: -0.668, fgImpact: -0.344, ftImpact: -0.004, to: -0.094 } },
          { name: "Jamarion Davis-Fleming", min: 19, pts: 8, reb: 7, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 4, fta: 6, composite: 0.84, zScores: { pts: 0.05, reb: 1.343, ast: -0.812, stl: 1.294, blk: -0.475, tpm: -0.668, fgImpact: 0.047, ftImpact: -0.749, to: 0.806 } },
          { name: "TJ St. Louis", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.14, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } },
          { name: "Collins Onyejiaka", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Anderson Diaz", min: 9, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -7.12, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.782, ftImpact: 0, to: -2.792 } },
          { name: "Cole Cloer", min: 20, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -4.8, zScores: { pts: -0.687, reb: -0.751, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -1.932, ftImpact: 0, to: -0.094 } },
          { name: "Preston Murphy Jr.", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401922219",
      line: "North Florida Ospreys 63 @ UCLA Bruins 114 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UNF", name: "North Florida Ospreys", score: 63,
        players: [

        ]
      },
      home: {
        abbr: "UCLA", name: "UCLA Bruins", score: 114,
        players: [
          { name: "Nikola Kusturica", min: 23, pts: 29, reb: 6, ast: 3, stl: 1, blk: 2, to: 0, tpm: 4, fgm: 10, fga: 12, ftm: 5, fta: 5, composite: 16.18, zScores: { pts: 3.148, reb: 0.994, ast: 0.78, stl: 0.286, blk: 2.386, tpm: 2.566, fgImpact: 3.362, ftImpact: 1.85, to: 0.806 } },
          { name: "Brandon Williams", min: 23, pts: 8, reb: 4, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 1.03, zScores: { pts: 0.05, reb: 0.296, ast: -0.281, stl: 0.286, blk: 0.955, tpm: -0.668, fgImpact: 0.484, ftImpact: 0, to: -0.094 } },
          { name: "Eric Dailey Jr.", min: 29, pts: 11, reb: 9, ast: 4, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 11, ftm: 1, fta: 2, composite: 0.08, zScores: { pts: 0.493, reb: 2.041, ast: 1.311, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.274, ftImpact: -0.744, to: -1.893 } },
          { name: "Jaylen Petty", min: 25, pts: 22, reb: 4, ast: 3, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 8, fga: 12, ftm: 3, fta: 4, composite: 6.31, zScores: { pts: 2.115, reb: 0.296, ast: 0.78, stl: -0.722, blk: -0.475, tpm: 1.757, fgImpact: 1.751, ftImpact: -0.004, to: 0.806 } },
          { name: "Trent Perry", min: 22, pts: 11, reb: 5, ast: 6, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 6, ftm: 5, fta: 8, composite: 2.96, zScores: { pts: 0.493, reb: 0.645, ast: 2.373, stl: 1.294, blk: -0.475, tpm: 0.949, fgImpact: -0.736, ftImpact: -1.493, to: -0.094 } },
          { name: "Gunars Grinvalds", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.14, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } },
          { name: "Sergej Macura", min: 17, pts: 9, reb: 6, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 3, ftm: 3, fta: 4, composite: 3.07, zScores: { pts: 0.198, reb: 0.994, ast: 0.78, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: 0.438, ftImpact: -0.004, to: -0.094 } },
          { name: "Joe Philon III", min: 21, pts: 17, reb: 3, ast: 0, stl: 5, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 7, ftm: 2, fta: 3, composite: 8.64, zScores: { pts: 1.378, reb: -0.053, ast: -0.812, stl: 4.317, blk: -0.475, tpm: 1.757, fgImpact: 2.095, ftImpact: -0.374, to: 0.806 } },
          { name: "Javonte Floyd", min: 3, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 2, composite: -6.41, zScores: { pts: -1.13, reb: -0.402, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.782, ftImpact: -2.229, to: 0.806 } },
          { name: "Jordan Houegban", min: 3, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -6.38, zScores: { pts: -0.982, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.782, ftImpact: -0.744, to: -0.094 } },
          { name: "Markell Alston", min: 7, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.49, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } },
          { name: "Azavier Robinson", min: 22, pts: 6, reb: 5, ast: 4, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 4, fta: 4, composite: 2.13, zScores: { pts: -0.245, reb: 0.645, ast: 1.311, stl: 0.286, blk: 0.955, tpm: -0.668, fgImpact: -1.541, ftImpact: 1.48, to: -0.094 } }
        ]
      }
    },
      {
      id: "401921802",
      line: "James Madison Dukes 80 @ Kentucky Wildcats 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "JMU", name: "James Madison Dukes", score: 80,
        players: [

        ]
      },
      home: {
        abbr: "KY", name: "Kentucky Wildcats", score: 89,
        players: [
          { name: "Ousmane N'Diaye", min: 17, pts: 3, reb: 2, ast: 0, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -0.08, zScores: { pts: -0.687, reb: -0.402, ast: -0.812, stl: 0.286, blk: 0.955, tpm: 0.14, fgImpact: -0.368, ftImpact: 0, to: 0.806 } },
          { name: "Milan Momcilovic", min: 32, pts: 7, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 9, ftm: 2, fta: 2, composite: -3.28, zScores: { pts: -0.097, reb: -0.053, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -1.909, ftImpact: 0.74, to: -0.094 } },
          { name: "Malachi Moreno", min: 22, pts: 8, reb: 7, ast: 2, stl: 1, blk: 2, to: 3, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 4, composite: 0.73, zScores: { pts: 0.05, reb: 1.343, ast: 0.249, stl: 0.286, blk: 2.386, tpm: -0.668, fgImpact: 0.461, ftImpact: -1.489, to: -1.893 } },
          { name: "Alex Wilkins", min: 22, pts: 16, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 8, ftm: 6, fta: 6, composite: 4.08, zScores: { pts: 1.23, reb: -0.751, ast: -0.281, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: 0.093, ftImpact: 2.22, to: 0.806 } },
          { name: "Zoom Diallo", min: 22, pts: 16, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 7, fga: 11, ftm: 1, fta: 1, composite: 3.89, zScores: { pts: 1.23, reb: -0.053, ast: 0.249, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: 1.337, ftImpact: 0.37, to: 0.806 } },
          { name: "Braydon Hawthorne", min: 21, pts: 10, reb: 4, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 2.64, zScores: { pts: 0.345, reb: 0.296, ast: -0.281, stl: 0.286, blk: 0.955, tpm: -0.668, fgImpact: 0.899, ftImpact: 0, to: 0.806 } },
          { name: "Justin McBride", min: 27, pts: 13, reb: 8, ast: 1, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 6, ftm: 2, fta: 4, composite: 1.15, zScores: { pts: 0.788, reb: 1.692, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 1.757, fgImpact: 0.876, ftImpact: -1.489, to: -0.993 } },
          { name: "Franck Kepnang", min: 4, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.55, zScores: { pts: -0.835, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.023, ftImpact: 0, to: 0.806 } },
          { name: "Mason Williams", min: 24, pts: 12, reb: 2, ast: 5, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 4.55, zScores: { pts: 0.64, reb: -0.402, ast: 1.842, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: 0.899, ftImpact: 0, to: 0.806 } },
          { name: "Kam Williams", min: 9, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -3.36, zScores: { pts: -0.835, reb: -0.751, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -1.173, ftImpact: 0.74, to: 0.806 } }
        ]
      }
    },
      {
      id: "401921739",
      line: "Omaha Mavericks 67 @ BYU Cougars 108 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OMA", name: "Omaha Mavericks", score: 67,
        players: [

        ]
      },
      home: {
        abbr: "BYU", name: "BYU Cougars", score: 108,
        players: [
          { name: "Bruce Branch III", min: 26, pts: 17, reb: 6, ast: 1, stl: 2, blk: 2, to: 3, tpm: 2, fgm: 5, fga: 9, ftm: 5, fta: 6, composite: 6.07, zScores: { pts: 1.378, reb: 0.994, ast: -0.281, stl: 1.294, blk: 2.386, tpm: 0.949, fgImpact: 0.508, ftImpact: 0.736, to: -1.893 } },
          { name: "Jaxon Kohler", min: 20, pts: 11, reb: 7, ast: 2, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 4, fga: 10, ftm: 2, fta: 2, composite: 3.42, zScores: { pts: 0.493, reb: 1.343, ast: 0.249, stl: 0.286, blk: 0.955, tpm: 0.14, fgImpact: -0.689, ftImpact: 0.74, to: -0.094 } },
          { name: "Tyler Betsey", min: 16, pts: 18, reb: 1, ast: 1, stl: 0, blk: 1, to: 0, tpm: 6, fgm: 6, fga: 8, ftm: 0, fta: 0, composite: 7.42, zScores: { pts: 1.525, reb: -0.751, ast: -0.281, stl: -0.722, blk: 0.955, tpm: 4.183, fgImpact: 1.704, ftImpact: 0, to: 0.806 } },
          { name: "Collin Chandler", min: 27, pts: 18, reb: 4, ast: 5, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 7, ftm: 3, fta: 4, composite: 7.12, zScores: { pts: 1.525, reb: 0.296, ast: 1.842, stl: -0.722, blk: -0.475, tpm: 1.757, fgImpact: 2.095, ftImpact: -0.004, to: 0.806 } },
          { name: "Robert Wright III", min: 24, pts: 19, reb: 1, ast: 1, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 8, fga: 11, ftm: 2, fta: 2, composite: 5.29, zScores: { pts: 1.673, reb: -0.751, ast: -0.281, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: 2.142, ftImpact: 0.74, to: 0.806 } },
          { name: "Brooks Bahr", min: 15, pts: 0, reb: 3, ast: 5, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.98, zScores: { pts: -1.13, reb: -0.053, ast: 1.842, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.782, ftImpact: 0, to: -0.993 } },
          { name: "Dean Rueckert", min: 10, pts: 2, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 1, composite: -2.83, zScores: { pts: -0.835, reb: 0.296, ast: 0.249, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.368, ftImpact: -1.114, to: 0.806 } },
          { name: "Khadim Mboup", min: 16, pts: 4, reb: 8, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -1.82, zScores: { pts: -0.54, reb: 1.692, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.736, ftImpact: 0, to: -0.094 } },
          { name: "Brody Kozlowski", min: 10, pts: 1, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 1, fta: 2, composite: -4.64, zScores: { pts: -0.982, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -1.173, ftImpact: -0.744, to: 0.806 } },
          { name: "Jake Wahlin", min: 17, pts: 10, reb: 2, ast: 2, stl: 1, blk: 2, to: 0, tpm: 1, fgm: 4, fga: 5, ftm: 1, fta: 1, composite: 5.45, zScores: { pts: 0.345, reb: -0.402, ast: 0.249, stl: 0.286, blk: 2.386, tpm: 0.14, fgImpact: 1.267, ftImpact: 0.37, to: 0.806 } },
          { name: "Petar Ostojic", min: 2, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.09, zScores: { pts: -0.687, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.414, ftImpact: 0, to: 0.806 } },
          { name: "Nate Pickens", min: 17, pts: 5, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.92, zScores: { pts: -0.392, reb: -0.751, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -0.344, ftImpact: 0, to: -0.094 } }
        ]
      }
    },
      {
      id: "401909552",
      line: "Massachusetts Minutemen 55 @ Boston College Eagles 71 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MASS", name: "Massachusetts Minutemen", score: 55,
        players: [

        ]
      },
      home: {
        abbr: "BC", name: "Boston College Eagles", score: 71,
        players: [
          { name: "Colby Duggan", min: 11, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.78, zScores: { pts: -0.835, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.023, ftImpact: 0, to: 0.806 } },
          { name: "Luke Hunger", min: 23, pts: 6, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: -2.27, zScores: { pts: -0.245, reb: -0.402, ast: -0.281, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -1.127, ftImpact: 0.74, to: -0.094 } },
          { name: "Zak Smrekar", min: 36, pts: 12, reb: 5, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 8, ftm: 5, fta: 6, composite: 1.25, zScores: { pts: 0.64, reb: 0.645, ast: -0.812, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: -0.712, ftImpact: 0.736, to: 0.806 } },
          { name: "Ernest Shelton", min: 36, pts: 2, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 10, ftm: 2, fta: 2, composite: -4.85, zScores: { pts: -0.835, reb: -0.402, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: -3.911, ftImpact: 0.74, to: 0.806 } },
          { name: "Money Williams", min: 40, pts: 35, reb: 9, ast: 5, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 10, fga: 22, ftm: 13, fta: 13, composite: 12.84, zScores: { pts: 4.033, reb: 2.041, ast: 1.842, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: -0.549, ftImpact: 4.81, to: -0.094 } },
          { name: "Brandon Benjamin", min: 13, pts: 10, reb: 8, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 4, ftm: 2, fta: 2, composite: 3.62, zScores: { pts: 0.345, reb: 1.692, ast: -0.281, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 1.658, ftImpact: 0.74, to: -0.094 } },
          { name: "Andrija Bukumirovic", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Aly Tounkara", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Jack Bailey", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Jordan Ghee", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Will Eggemeier", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Armoni Zeigler", min: 32, pts: 4, reb: 2, ast: 3, stl: 5, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 1, composite: 2.5, zScores: { pts: -0.54, reb: -0.402, ast: 0.78, stl: 4.317, blk: 0.955, tpm: -0.668, fgImpact: -0.736, ftImpact: -1.114, to: -0.094 } },
          { name: "JB Frankel", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401909751",
      line: "Arkansas-Pine Bluff Golden Lions 53 @ Baylor Bears 109 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UAPB", name: "Arkansas-Pine Bluff Golden Lions", score: 53,
        players: [

        ]
      },
      home: {
        abbr: "Baylor", name: "Baylor Bears", score: 109,
        players: [
          { name: "Elijah Williams", min: 18, pts: 12, reb: 2, ast: 1, stl: 3, blk: 3, to: 2, tpm: 0, fgm: 5, fga: 13, ftm: 2, fta: 2, composite: 4.1, zScores: { pts: 0.64, reb: -0.402, ast: -0.281, stl: 2.302, blk: 3.816, tpm: -0.668, fgImpact: -1.057, ftImpact: 0.74, to: -0.993 } },
          { name: "Juslin Bodo Bodo", min: 13, pts: 2, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.12, zScores: { pts: -0.835, reb: 0.645, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.414, ftImpact: 0, to: 0.806 } },
          { name: "Brett Decker Jr.", min: 28, pts: 8, reb: 1, ast: 4, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 10, ftm: 2, fta: 2, composite: 0.62, zScores: { pts: 0.05, reb: -0.751, ast: 1.311, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: -2.3, ftImpact: 0.74, to: 0.806 } },
          { name: "Dylan Mingo", min: 19, pts: 15, reb: 5, ast: 3, stl: 6, blk: 1, to: 2, tpm: 0, fgm: 7, fga: 9, ftm: 1, fta: 4, composite: 6.27, zScores: { pts: 1.083, reb: 0.645, ast: 0.78, stl: 5.325, blk: 0.955, tpm: -0.668, fgImpact: 2.119, ftImpact: -2.973, to: -0.993 } },
          { name: "Kayden Mingo", min: 16, pts: 13, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 6, fta: 6, composite: 2.47, zScores: { pts: 0.788, reb: -0.751, ast: 0.78, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -0.321, ftImpact: 2.22, to: 0.806 } },
          { name: "Evan Chatman", min: 20, pts: 9, reb: 6, ast: 0, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 3, fta: 4, composite: 2.04, zScores: { pts: 0.198, reb: 0.994, ast: -0.812, stl: 2.302, blk: 0.955, tpm: -0.668, fgImpact: 0.07, ftImpact: -0.004, to: -0.993 } },
          { name: "Maikcol Perez", min: 8, pts: 2, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 4, composite: -5.78, zScores: { pts: -0.835, reb: -0.402, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: -1.489, to: -0.993 } },
          { name: "Isaac Celiscar", min: 22, pts: 9, reb: 3, ast: 3, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 4, fta: 4, composite: 3.32, zScores: { pts: 0.198, reb: -0.053, ast: 0.78, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: 0.047, ftImpact: 1.48, to: -0.094 } },
          { name: "Tegra Makabu", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Mayo Soyoye", min: 12, pts: 10, reb: 6, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 4, ftm: 2, fta: 2, composite: 3.3, zScores: { pts: 0.345, reb: 0.994, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 1.658, ftImpact: 0.74, to: 0.806 } },
          { name: "Caden Powell", min: 13, pts: 3, reb: 5, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -1.6, zScores: { pts: -0.687, reb: 0.645, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: -0.368, ftImpact: -0.744, to: 0.806 } },
          { name: "Drew Perry", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Isaac Williams IV", min: 25, pts: 26, reb: 4, ast: 6, stl: 5, blk: 0, to: 0, tpm: 1, fgm: 7, fga: 13, ftm: 11, fta: 12, composite: 13.67, zScores: { pts: 2.705, reb: 0.296, ast: 2.373, stl: 4.317, blk: -0.475, tpm: 0.14, fgImpact: 0.554, ftImpact: 2.956, to: 0.806 } },
          { name: "Andre Iguodala II", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "James Goodis", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.49, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401920717",
      line: "Eastern Washington Eagles 71 @ Oregon Ducks 98 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "EWU", name: "Eastern Washington Eagles", score: 71,
        players: [

        ]
      },
      home: {
        abbr: "Oreg", name: "Oregon Ducks", score: 98,
        players: [
          { name: "Andrew Meadow", min: 17, pts: 8, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 1, fta: 1, composite: -1.06, zScores: { pts: 0.05, reb: -1.1, ast: -0.812, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: -0.321, ftImpact: 0.37, to: 0.806 } },
          { name: "Taylor Bol Bowen", min: 14, pts: 6, reb: 5, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -0.67, zScores: { pts: -0.245, reb: 0.645, ast: 0.78, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.047, ftImpact: -0.744, to: -0.094 } },
          { name: "Malique Ewin", min: 19, pts: 10, reb: 7, ast: 7, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 4, fta: 4, composite: 4.97, zScores: { pts: 0.345, reb: 1.343, ast: 2.904, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.852, ftImpact: 1.48, to: -0.094 } },
          { name: "Jasper Johnson", min: 21, pts: 6, reb: 0, ast: 1, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -6.6, zScores: { pts: -0.245, reb: -1.1, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.321, ftImpact: 0, to: -2.792 } },
          { name: "Fred Payne", min: 25, pts: 16, reb: 1, ast: 2, stl: 2, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 6.23, zScores: { pts: 1.23, reb: -0.751, ast: 0.249, stl: 1.294, blk: -0.475, tpm: 2.566, fgImpact: 1.313, ftImpact: 0, to: 0.806 } },
          { name: "Dwayne Aristode", min: 18, pts: 2, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.49, zScores: { pts: -0.835, reb: -0.053, ast: -0.281, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.368, ftImpact: 0, to: -0.094 } },
          { name: "Seven Spurlock", min: 15, pts: 4, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -1.79, zScores: { pts: -0.54, reb: 0.296, ast: 0.249, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.736, ftImpact: 0, to: 0.806 } },
          { name: "Tajh Ariza", min: 14, pts: 7, reb: 3, ast: 3, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: 1.22, zScores: { pts: -0.097, reb: -0.053, ast: 0.78, stl: 0.286, blk: 0.955, tpm: -0.668, fgImpact: 0.852, ftImpact: -0.744, to: -0.094 } },
          { name: "Pharaoh Compton", min: 15, pts: 13, reb: 4, ast: 0, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 6, fga: 6, ftm: 1, fta: 2, composite: 3.5, zScores: { pts: 0.788, reb: 0.296, ast: -0.812, stl: 1.294, blk: 0.955, tpm: -0.668, fgImpact: 2.487, ftImpact: -0.744, to: -0.094 } },
          { name: "Sean Stewart", min: 18, pts: 6, reb: 9, ast: 1, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 1, composite: 1.87, zScores: { pts: -0.245, reb: 2.041, ast: -0.281, stl: 0.286, blk: 2.386, tpm: -0.668, fgImpact: 0.461, ftImpact: -1.114, to: -0.993 } },
          { name: "Wei Lin", min: 21, pts: 20, reb: 0, ast: 4, stl: 3, blk: 0, to: 2, tpm: 3, fgm: 7, fga: 9, ftm: 3, fta: 3, composite: 7.85, zScores: { pts: 1.82, reb: -1.1, ast: 1.311, stl: 2.302, blk: -0.475, tpm: 1.757, fgImpact: 2.119, ftImpact: 1.11, to: -0.993 } },
          { name: "Jerry Easter II", min: 3, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.08, zScores: { pts: -1.13, reb: -0.751, ast: 0.249, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401926131",
      line: "Valparaiso Beacons 83 @ Purdue Boilermakers 80 (Final/2OT)",
      completed: true,
      statusText: "Final/2OT",
      away: {
        abbr: "Valpa", name: "Valparaiso Beacons", score: 83,
        players: [
          { name: "Carter Hopoi", min: 25, pts: 8, reb: 3, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 1.08, zScores: { pts: 0.05, reb: -0.053, ast: -0.812, stl: -0.722, blk: 2.386, tpm: -0.668, fgImpact: 0.093, ftImpact: 0, to: 0.806 } },
          { name: "JT Pettigrew", min: 31, pts: 11, reb: 8, ast: 2, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 4, fga: 10, ftm: 2, fta: 4, composite: 0.64, zScores: { pts: 0.493, reb: 1.692, ast: 0.249, stl: 0.286, blk: 0.955, tpm: 0.14, fgImpact: -0.689, ftImpact: -1.489, to: -0.993 } },
          { name: "Rakim Chaney", min: 41, pts: 35, reb: 8, ast: 6, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 14, fga: 22, ftm: 3, fta: 4, composite: 13.95, zScores: { pts: 4.033, reb: 1.692, ast: 2.373, stl: 0.286, blk: -0.475, tpm: 2.566, fgImpact: 2.673, ftImpact: -0.004, to: 0.806 } },
          { name: "Justus McNair", min: 44, pts: 17, reb: 5, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 13, ftm: 2, fta: 3, composite: 1.78, zScores: { pts: 1.378, reb: 0.645, ast: -0.281, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: 0.554, ftImpact: -0.374, to: -0.094 } },
          { name: "Bruno Alocen", min: 33, pts: 5, reb: 3, ast: 1, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 1, composite: -0.42, zScores: { pts: -0.392, reb: -0.053, ast: -0.281, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: -0.344, ftImpact: -1.114, to: 0.806 } },
          { name: "Hudson Scroggins", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -2.72, zScores: { pts: -0.835, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0.74, to: 0.806 } },
          { name: "Kai Yu", min: 19, pts: 1, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 1, fta: 2, composite: -6.28, zScores: { pts: -0.982, reb: -0.751, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -1.564, ftImpact: -0.744, to: -0.094 } },
          { name: "Terron Garrett", min: 17, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -5.94, zScores: { pts: -0.835, reb: -0.402, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -1.932, ftImpact: 0, to: -0.094 } },
          { name: "Rajan Roberts", min: 12, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -6.66, zScores: { pts: -1.13, reb: -1.1, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: -1.893 } },
          { name: "Sader Servilus", min: 21, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.59, zScores: { pts: -0.835, reb: -0.402, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.414, ftImpact: 0, to: -0.094 } }
        ]
      },
      home: {
        abbr: "Pur", name: "Purdue Boilermakers", score: 80,
        players: [
          { name: "Caden Pierce", min: 41, pts: 2, reb: 7, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.98, zScores: { pts: -0.835, reb: 1.343, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -1.15, ftImpact: 0, to: 0.806 } },
          { name: "Daniel Jacobsen", min: 42, pts: 28, reb: 10, ast: 2, stl: 1, blk: 0, to: 5, tpm: 0, fgm: 9, fga: 13, ftm: 10, fta: 12, composite: 4.73, zScores: { pts: 3, reb: 2.39, ast: 0.249, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 2.165, ftImpact: 1.471, to: -3.692 } },
          { name: "Omer Mayer", min: 26, pts: 2, reb: 3, ast: 5, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 11, ftm: 0, fta: 0, composite: -1.48, zScores: { pts: -0.835, reb: -0.053, ast: 1.842, stl: 2.302, blk: -0.475, tpm: -0.668, fgImpact: -3.497, ftImpact: 0, to: -0.094 } },
          { name: "C.J. Cox", min: 40, pts: 13, reb: 12, ast: 4, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 7, ftm: 7, fta: 8, composite: 4.49, zScores: { pts: 0.788, reb: 3.088, ast: 1.311, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.321, ftImpact: 1.476, to: -0.993 } },
          { name: "Gicarri Harris", min: 33, pts: 11, reb: 6, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 4, fta: 4, composite: 2.67, zScores: { pts: 0.493, reb: 0.994, ast: 0.78, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.07, ftImpact: 1.48, to: -0.094 } },
          { name: "Raleigh Burgess", min: 8, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: -2.04, zScores: { pts: -0.245, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.438, ftImpact: 0.74, to: 0.806 } },
          { name: "Luke Ertel", min: 14, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.5, zScores: { pts: -0.687, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.023, ftImpact: 0, to: -0.094 } },
          { name: "Antione West Jr", min: 23, pts: 7, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 10, ftm: 2, fta: 4, composite: -4.64, zScores: { pts: -0.097, reb: -0.751, ast: 0.249, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -2.3, ftImpact: -1.489, to: 0.806 } },
          { name: "Jack Benter", min: 23, pts: 8, reb: 0, ast: 1, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: 0.86, zScores: { pts: 0.05, reb: -1.1, ast: -0.281, stl: 1.294, blk: -0.475, tpm: 0.949, fgImpact: -1.127, ftImpact: 0.74, to: 0.806 } }
        ]
      }
    },
      {
      id: "401916314",
      line: "Youngstown State Penguins 65 @ Ohio State Buckeyes 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "YSU", name: "Youngstown State Penguins", score: 65,
        players: [

        ]
      },
      home: {
        abbr: "OhSt", name: "Ohio State Buckeyes", score: 89,
        players: [
          { name: "Andrija Jelavic", min: 25, pts: 21, reb: 9, ast: 1, stl: 3, blk: 3, to: 1, tpm: 1, fgm: 10, fga: 16, ftm: 0, fta: 0, composite: 11.69, zScores: { pts: 1.968, reb: 2.041, ast: -0.281, stl: 2.302, blk: 3.816, tpm: 0.14, fgImpact: 1.798, ftImpact: 0, to: -0.094 } },
          { name: "Anthony Thompson", min: 17, pts: 4, reb: 3, ast: 1, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: 0.71, zScores: { pts: -0.54, reb: -0.053, ast: -0.281, stl: 1.294, blk: 0.955, tpm: -0.668, fgImpact: -1.541, ftImpact: 0.74, to: 0.806 } },
          { name: "Amare Bynum", min: 28, pts: 15, reb: 8, ast: 1, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 6, ftm: 9, fta: 10, composite: 2.45, zScores: { pts: 1.083, reb: 1.692, ast: -0.281, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 0.07, ftImpact: 2.216, to: -1.893 } },
          { name: "Justin Pippen", min: 27, pts: 10, reb: 6, ast: 3, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 9, ftm: 3, fta: 5, composite: -2.04, zScores: { pts: 0.345, reb: 0.994, ast: 0.78, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: -1.103, ftImpact: -1.119, to: -1.893 } },
          { name: "John Mobley Jr.", min: 34, pts: 25, reb: 3, ast: 4, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 9, ftm: 9, fta: 9, composite: 9.03, zScores: { pts: 2.558, reb: -0.053, ast: 1.311, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: 2.119, ftImpact: 3.33, to: -0.993 } },
          { name: "Lee Aaliya", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.094 } },
          { name: "Vuk Lazarevic", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Alex Smith", min: 1, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.35, zScores: { pts: -0.982, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: -0.744, to: 0.806 } },
          { name: "Josh Ojianwuna", min: 8, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.43, zScores: { pts: -0.835, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.023, ftImpact: 0, to: 0.806 } },
          { name: "Ivan Njegovan", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.96, zScores: { pts: -0.835, reb: -1.1, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 0.414, ftImpact: 0, to: 0.806 } },
          { name: "Jimmie Williams", min: 18, pts: 4, reb: 4, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -2.34, zScores: { pts: -0.54, reb: 0.296, ast: 0.78, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.759, ftImpact: 0.74, to: -0.993 } },
          { name: "Braylen Nash", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "LJ Smith", min: 24, pts: 5, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 3, fta: 4, composite: -3.5, zScores: { pts: -0.392, reb: -0.751, ast: 0.249, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -1.541, ftImpact: -0.004, to: 0.806 } },
          { name: "Curtis Givens III", min: 9, pts: 0, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.05, zScores: { pts: -1.13, reb: -0.053, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401926135",
      line: "New Haven Chargers 54 @ Rutgers Scarlet Knights 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NHVN", name: "New Haven Chargers", score: 54,
        players: [

        ]
      },
      home: {
        abbr: "Rut", name: "Rutgers Scarlet Knights", score: 81,
        players: [
          { name: "Christian Gurdak", min: 17, pts: 12, reb: 4, ast: 3, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 6, ftm: 4, fta: 4, composite: 2.33, zScores: { pts: 0.64, reb: 0.296, ast: 0.78, stl: 1.294, blk: -0.475, tpm: -0.668, fgImpact: 0.876, ftImpact: 1.48, to: -1.893 } },
          { name: "Lino Mark", min: 19, pts: 4, reb: 3, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -3.42, zScores: { pts: -0.54, reb: -0.053, ast: -0.281, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: -0.759, ftImpact: -0.744, to: -0.993 } },
          { name: "Darin Smith Jr.", min: 21, pts: 9, reb: 6, ast: 1, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 8, ftm: 0, fta: 1, composite: 1.65, zScores: { pts: 0.198, reb: 0.994, ast: -0.281, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: 0.093, ftImpact: -1.114, to: 0.806 } },
          { name: "Tariq Francis", min: 24, pts: 14, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 14, ftm: 3, fta: 3, composite: -0.15, zScores: { pts: 0.935, reb: -0.751, ast: 0.249, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -1.448, ftImpact: 1.11, to: 0.806 } },
          { name: "Darren Buchanan Jr.", min: 22, pts: 5, reb: 3, ast: 3, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 2, composite: -2.36, zScores: { pts: -0.392, reb: -0.053, ast: 0.78, stl: 0.286, blk: 0.955, tpm: 0.14, fgImpact: 0.047, ftImpact: -2.229, to: -1.893 } },
          { name: "Martin Tonejc", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Mervedi Miteo", min: 12, pts: 3, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 1, composite: -3.75, zScores: { pts: -0.687, reb: -0.402, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.368, ftImpact: 0.37, to: -0.993 } },
          { name: "Will Sydnor", min: 5, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.45, zScores: { pts: -0.835, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.023, ftImpact: 0, to: -0.094 } },
          { name: "Dorin Buca", min: 2, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.61, zScores: { pts: -1.13, reb: -0.751, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } },
          { name: "Gevonte Ware", min: 9, pts: 1, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -4.04, zScores: { pts: -0.982, reb: -0.053, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: -0.744, to: 0.806 } },
          { name: "Diego Garavaglia", min: 15, pts: 2, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.41, zScores: { pts: -0.835, reb: -0.402, ast: 0.249, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.368, ftImpact: 0, to: 0.806 } },
          { name: "Max Fradkin", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.49, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } },
          { name: "Imahri Wooten", min: 11, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 1, composite: -4.37, zScores: { pts: -0.835, reb: -1.1, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.023, ftImpact: -1.114, to: 0.806 } },
          { name: "Jamichael Davis", min: 19, pts: 13, reb: 5, ast: 1, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 5, ftm: 2, fta: 2, composite: 6.74, zScores: { pts: 0.788, reb: 0.645, ast: -0.281, stl: 2.302, blk: -0.475, tpm: 0.14, fgImpact: 2.072, ftImpact: 0.74, to: 0.806 } },
          { name: "Rasheed Jones", min: 19, pts: 14, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 3.23, zScores: { pts: 0.935, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 2.566, fgImpact: 1.681, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401921767",
      line: "Stetson Hatters 53 @ West Virginia Mountaineers 91 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "STET", name: "Stetson Hatters", score: 53,
        players: [

        ]
      },
      home: {
        abbr: "WVU", name: "West Virginia Mountaineers", score: 91,
        players: [
          { name: "Brenen Lorient", min: 19, pts: 0, reb: 6, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -2.9, zScores: { pts: -1.13, reb: 0.994, ast: 0.249, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -1.956, ftImpact: 0, to: 0.806 } },
          { name: "Mouhamed Sylla", min: 17, pts: 11, reb: 6, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 7, fta: 8, composite: -0.04, zScores: { pts: 0.493, reb: 0.994, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -1.127, ftImpact: 1.476, to: 0.806 } },
          { name: "Miles Sadler", min: 24, pts: 25, reb: 3, ast: 6, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 11, fga: 16, ftm: 0, fta: 1, composite: 6.94, zScores: { pts: 2.558, reb: -0.053, ast: 2.373, stl: 0.286, blk: -0.475, tpm: 1.757, fgImpact: 2.603, ftImpact: -1.114, to: -0.993 } },
          { name: "Seydou Traore", min: 19, pts: 8, reb: 6, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 1.97, zScores: { pts: 0.05, reb: 0.994, ast: 0.78, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.461, ftImpact: 0.74, to: 0.806 } },
          { name: "Finley Bizjack", min: 26, pts: 13, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 7, ftm: 5, fta: 6, composite: 2.31, zScores: { pts: 0.788, reb: 0.296, ast: 0.249, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: -0.321, ftImpact: 0.736, to: 0.806 } },
          { name: "Max Olejasz", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -7.23, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: -2.229, to: -0.094 } },
          { name: "Javan Buchanan", min: 21, pts: 2, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 4, composite: -5.44, zScores: { pts: -0.835, reb: 0.296, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -1.173, ftImpact: -1.489, to: -0.094 } },
          { name: "Amadou Seini", min: 20, pts: 8, reb: 10, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 4, ftm: 0, fta: 0, composite: 3.23, zScores: { pts: 0.05, reb: 2.39, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 1.658, ftImpact: 0, to: 0.806 } },
          { name: "Aliou Dioum", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.094 } },
          { name: "Jelani McKoy", min: 3, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.74, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Keonte Greybear", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.78, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.782, ftImpact: 0, to: -0.094 } },
          { name: "Martin Somerville", min: 22, pts: 6, reb: 2, ast: 4, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.37, zScores: { pts: -0.245, reb: -0.402, ast: 1.311, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: 0.047, ftImpact: 0, to: -0.094 } },
          { name: "Joson Sanon", min: 19, pts: 18, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 6, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 6.42, zScores: { pts: 1.525, reb: -0.402, ast: -0.812, stl: 0.286, blk: -0.475, tpm: 4.183, fgImpact: 1.313, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401921754",
      line: "Yale Bulldogs 75 @ UCF Knights 87 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Yale", name: "Yale Bulldogs", score: 75,
        players: [
          { name: "Daniel Ogunyemi", min: 25, pts: 6, reb: 9, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -0.05, zScores: { pts: -0.245, reb: 2.041, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.344, ftImpact: 0.74, to: -0.094 } },
          { name: "Jack Sullivan", min: 31, pts: 3, reb: 7, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 0.79, zScores: { pts: -0.687, reb: 1.343, ast: -0.281, stl: -0.722, blk: 0.955, tpm: 0.14, fgImpact: -0.759, ftImpact: 0, to: 0.806 } },
          { name: "Riley Fox", min: 35, pts: 24, reb: 7, ast: 0, stl: 0, blk: 0, to: 4, tpm: 4, fgm: 9, fga: 14, ftm: 2, fta: 2, composite: 4.03, zScores: { pts: 2.41, reb: 1.343, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 2.566, fgImpact: 1.774, ftImpact: 0.74, to: -2.792 } },
          { name: "Jordan Brathwaite", min: 31, pts: 11, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 11, ftm: 2, fta: 4, composite: -3.38, zScores: { pts: 0.493, reb: -0.402, ast: 0.249, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -1.08, ftImpact: -1.489, to: -0.094 } },
          { name: "Trevor Mullin", min: 35, pts: 17, reb: 2, ast: 4, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 12, ftm: 5, fta: 5, composite: 1.33, zScores: { pts: 1.378, reb: -0.402, ast: 1.311, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: -0.666, ftImpact: 1.85, to: -1.893 } },
          { name: "Connor May", min: 9, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.094 } },
          { name: "Jonas Oware", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.06, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } },
          { name: "Courtney Wallace", min: 29, pts: 14, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 13, ftm: 0, fta: 0, composite: 0.54, zScores: { pts: 0.935, reb: -0.053, ast: 0.249, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: -0.251, ftImpact: 0, to: -0.094 } },
          { name: "Jeannot Basima", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } }
        ]
      },
      home: {
        abbr: "UCF", name: "UCF Knights", score: 87,
        players: [
          { name: "Isaiah Malone", min: 20, pts: 8, reb: 6, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: 1.15, zScores: { pts: 0.05, reb: 0.994, ast: -0.281, stl: -0.722, blk: 0.955, tpm: 0.14, fgImpact: 0.852, ftImpact: -0.744, to: -0.094 } },
          { name: "John Bol", min: 17, pts: 4, reb: 6, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 0.05, zScores: { pts: -0.54, reb: 0.994, ast: -0.281, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0.829, ftImpact: 0, to: -0.094 } },
          { name: "Arturo Dean", min: 28, pts: 10, reb: 1, ast: 5, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 10, ftm: 4, fta: 5, composite: 0.26, zScores: { pts: 0.345, reb: -0.751, ast: 1.842, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -1.494, ftImpact: 0.366, to: 0.806 } },
          { name: "Riley Kugel", min: 21, pts: 10, reb: 2, ast: 2, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 14, ftm: 2, fta: 3, composite: -1.06, zScores: { pts: 0.345, reb: -0.402, ast: 0.249, stl: 0.286, blk: 0.955, tpm: -0.668, fgImpact: -2.253, ftImpact: -0.374, to: 0.806 } },
          { name: "Dior Johnson", min: 34, pts: 28, reb: 7, ast: 2, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 9, fga: 17, ftm: 8, fta: 8, composite: 10.73, zScores: { pts: 3, reb: 1.343, ast: 0.249, stl: 1.294, blk: -0.475, tpm: 0.949, fgImpact: 0.601, ftImpact: 2.96, to: 0.806 } },
          { name: "Lewis Walker", min: 18, pts: 9, reb: 0, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 3, fta: 4, composite: -1.14, zScores: { pts: 0.198, reb: -1.1, ast: -0.281, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: -0.321, ftImpact: -0.004, to: 0.806 } },
          { name: "Jason Asemota", min: 5, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -3.54, zScores: { pts: -0.835, reb: -0.402, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -1.173, ftImpact: 0.74, to: 0.806 } },
          { name: "Churchill Abass", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Elijah Hulsewe", min: 20, pts: 10, reb: 10, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 5, ftm: 0, fta: 0, composite: 4.37, zScores: { pts: 0.345, reb: 2.39, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 2.072, ftImpact: 0, to: 0.806 } },
          { name: "Jahda Swann", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.49, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } },
          { name: "Carmelo Pacheco", min: 15, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.55, zScores: { pts: -0.245, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: 0.047, ftImpact: 0, to: 0.806 } },
          { name: "Mister Dean", min: 3, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.09, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Cayden Vasko", min: 10, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.08, zScores: { pts: -1.13, reb: -0.751, ast: 0.249, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401921285",
      line: "Holy Cross Crusaders 66 @ Villanova Wildcats 95 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "HC", name: "Holy Cross Crusaders", score: 66,
        players: [

        ]
      },
      home: {
        abbr: "Vill", name: "Villanova Wildcats", score: 95,
        players: [
          { name: "Devin Royal", min: 29, pts: 22, reb: 7, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 9, fga: 16, ftm: 4, fta: 5, composite: 4.65, zScores: { pts: 2.115, reb: 1.343, ast: 0.78, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0.992, ftImpact: 0.366, to: -0.094 } },
          { name: "Luigi Suigo", min: 26, pts: 16, reb: 15, ast: 5, stl: 2, blk: 4, to: 2, tpm: 0, fgm: 8, fga: 9, ftm: 0, fta: 1, composite: 13.9, zScores: { pts: 1.23, reb: 4.135, ast: 1.842, stl: 1.294, blk: 5.246, tpm: -0.668, fgImpact: 2.924, ftImpact: -1.114, to: -0.993 } },
          { name: "Tyler Perkins", min: 24, pts: 4, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 12, ftm: 0, fta: 0, composite: -4.36, zScores: { pts: -0.54, reb: -0.402, ast: -0.281, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -3.082, ftImpact: 0, to: 0.806 } },
          { name: "Jake Fiegen", min: 24, pts: 15, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 5, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 4.67, zScores: { pts: 1.083, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 3.375, fgImpact: 1.29, ftImpact: 0, to: 0.806 } },
          { name: "Elijah Crawford", min: 20, pts: 4, reb: 1, ast: 8, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.23, zScores: { pts: -0.54, reb: -0.751, ast: 3.435, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.047, ftImpact: 0, to: -0.094 } },
          { name: "Abdou Samb", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Nico Onyekwere", min: 13, pts: 4, reb: 7, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 1, composite: 0.61, zScores: { pts: -0.54, reb: 1.343, ast: -0.812, stl: -0.722, blk: 2.386, tpm: -0.668, fgImpact: 0.829, ftImpact: -1.114, to: -0.094 } },
          { name: "Adam Oumiddoch", min: 22, pts: 17, reb: 6, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 10, ftm: 2, fta: 3, composite: 5.01, zScores: { pts: 1.378, reb: 0.994, ast: -0.281, stl: 0.286, blk: -0.475, tpm: 1.757, fgImpact: 0.922, ftImpact: -0.374, to: 0.806 } },
          { name: "Carter Fisk", min: 12, pts: 3, reb: 3, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 3, fta: 4, composite: -1.24, zScores: { pts: -0.687, reb: -0.053, ast: -0.281, stl: 1.294, blk: -0.475, tpm: -0.668, fgImpact: -1.173, ftImpact: -0.004, to: 0.806 } },
          { name: "Wade Chiddick", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Darryl Simmons II", min: 25, pts: 10, reb: 0, ast: 6, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 11, ftm: 0, fta: 0, composite: 1.1, zScores: { pts: 0.345, reb: -1.1, ast: 2.373, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: -1.08, ftImpact: 0, to: 0.806 } },
          { name: "Brady Muller", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401920305",
      line: "Georgia Southern Eagles 83 @ Georgia Tech Yellow Jackets 95 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "GASO", name: "Georgia Southern Eagles", score: 83,
        players: [

        ]
      },
      home: {
        abbr: "GaTec", name: "Georgia Tech Yellow Jackets", score: 95,
        players: [
          { name: "Tylis Jordan", min: 24, pts: 11, reb: 4, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 5, fta: 6, composite: -0.68, zScores: { pts: 0.493, reb: 0.296, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0.461, ftImpact: 0.736, to: -0.993 } },
          { name: "Jackson Fields", min: 28, pts: 3, reb: 5, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 4, composite: -7.05, zScores: { pts: -0.687, reb: 0.645, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.368, ftImpact: -2.973, to: -0.993 } },
          { name: "Colby Garland", min: 32, pts: 11, reb: 3, ast: 6, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 9, fta: 10, composite: 1.41, zScores: { pts: 0.493, reb: -0.053, ast: 2.373, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.759, ftImpact: 2.216, to: -0.993 } },
          { name: "Nasir Whitlock", min: 33, pts: 29, reb: 7, ast: 6, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 6, fga: 11, ftm: 13, fta: 14, composite: 11.58, zScores: { pts: 3.148, reb: 1.343, ast: 2.373, stl: 0.286, blk: -0.475, tpm: 2.566, fgImpact: 0.531, ftImpact: 3.696, to: -1.893 } },
          { name: "Kam Craft", min: 23, pts: 11, reb: 4, ast: 1, stl: 0, blk: 2, to: 1, tpm: 3, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 4.32, zScores: { pts: 0.493, reb: 0.296, ast: -0.281, stl: -0.722, blk: 2.386, tpm: 1.757, fgImpact: 0.484, ftImpact: 0, to: -0.094 } },
          { name: "Ilja Kurucs", min: 13, pts: 6, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 2, composite: -3.44, zScores: { pts: -0.245, reb: -0.053, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0.852, ftImpact: -2.229, to: -0.094 } },
          { name: "Victor Valdes", min: 7, pts: 5, reb: 2, ast: 1, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -3.26, zScores: { pts: -0.392, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.023, ftImpact: 0.74, to: -1.893 } },
          { name: "Jackson McVey", min: 10, pts: 6, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 4, fta: 6, composite: -3.26, zScores: { pts: -0.245, reb: -0.053, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.023, ftImpact: -0.749, to: -0.094 } },
          { name: "Courtland Muldrew", min: 5, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 1, composite: -4.28, zScores: { pts: -0.835, reb: -1.1, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.368, ftImpact: -1.114, to: 0.806 } },
          { name: "Kayden Allen", min: 12, pts: 8, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: -1.02, zScores: { pts: 0.05, reb: -0.402, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.461, ftImpact: 0.74, to: 0.806 } },
          { name: "Kaiden Bailey", min: 13, pts: 3, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.68, zScores: { pts: -0.687, reb: -1.1, ast: -0.281, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: -0.368, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401920072",
      line: "Coppin State Eagles 51 @ George Mason Patriots 68 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "COPP", name: "Coppin State Eagles", score: 51,
        players: [

        ]
      },
      home: {
        abbr: "GMas", name: "George Mason Patriots", score: 68,
        players: [
          { name: "Emmanuel Kanga", min: 22, pts: 11, reb: 6, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 8, ftm: 1, fta: 2, composite: -0.12, zScores: { pts: 0.493, reb: 0.994, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0.899, ftImpact: -0.744, to: -0.094 } },
          { name: "Elijah Jones", min: 17, pts: 6, reb: 3, ast: 0, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 1, fta: 1, composite: 0.2, zScores: { pts: -0.245, reb: -0.053, ast: -0.812, stl: 0.286, blk: 0.955, tpm: 0.14, fgImpact: -0.344, ftImpact: 0.37, to: -0.094 } },
          { name: "Efeosa Oliogu-Elabor", min: 23, pts: 2, reb: 2, ast: 6, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.38, zScores: { pts: -0.835, reb: -0.402, ast: 2.373, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.759, ftImpact: 0, to: -1.893 } },
          { name: "Baraka Okojie", min: 31, pts: 14, reb: 4, ast: 4, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 8, ftm: 8, fta: 10, composite: 2.73, zScores: { pts: 0.935, reb: 0.296, ast: 1.311, stl: 2.302, blk: -0.475, tpm: -0.668, fgImpact: -0.712, ftImpact: 0.731, to: -0.993 } },
          { name: "Brayden O'Connor", min: 27, pts: 4, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -2.33, zScores: { pts: -0.54, reb: -0.402, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.368, ftImpact: 0.74, to: -0.094 } },
          { name: "Bryton Barrett", min: 4, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.22, zScores: { pts: -1.13, reb: -0.751, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Emmett Adair", min: 10, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.53, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.782, ftImpact: 0, to: 0.806 } },
          { name: "Ryan-Preston Mendy", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.39, zScores: { pts: -0.835, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.414, ftImpact: 0, to: 0.806 } },
          { name: "Shane Pendergrass", min: 18, pts: 13, reb: 4, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 8, ftm: 2, fta: 2, composite: 2.83, zScores: { pts: 0.788, reb: 0.296, ast: 0.249, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: 0.899, ftImpact: 0.74, to: -0.094 } },
          { name: "Michael Marcus Jr.", min: 6, pts: 2, reb: 1, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.39, zScores: { pts: -0.835, reb: -0.751, ast: -0.812, stl: 0.286, blk: 0.955, tpm: -0.668, fgImpact: -0.368, ftImpact: 0, to: 0.806 } },
          { name: "Peyton Miller", min: 7, pts: 3, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 3, fta: 4, composite: -3.91, zScores: { pts: -0.687, reb: -0.053, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: -0.004, to: -0.094 } },
          { name: "Makhai Valentine", min: 24, pts: 9, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 2, fta: 4, composite: -3.1, zScores: { pts: 0.198, reb: -0.053, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -0.321, ftImpact: -1.489, to: -0.094 } },
          { name: "Malik Presley", min: 8, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.76, zScores: { pts: -0.835, reb: -1.1, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.414, ftImpact: 0, to: -0.094 } }
        ]
      }
    },
      {
      id: "401918956",
      line: "East Tennessee State Buccaneers 63 @ NC State Wolfpack 77 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ETSU", name: "East Tennessee State Buccaneers", score: 63,
        players: [

        ]
      },
      home: {
        abbr: "NCSU", name: "NC State Wolfpack", score: 77,
        players: [
          { name: "Kyle Evans", min: 24, pts: 8, reb: 6, ast: 2, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 4, fta: 4, composite: 5.63, zScores: { pts: 0.05, reb: 0.994, ast: 0.249, stl: 0.286, blk: 2.386, tpm: -0.668, fgImpact: 0.047, ftImpact: 1.48, to: 0.806 } },
          { name: "Ven-Allen Lubin", min: 26, pts: 5, reb: 5, ast: 3, stl: 1, blk: 1, to: 4, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.33, zScores: { pts: -0.392, reb: 0.645, ast: 0.78, stl: 0.286, blk: 0.955, tpm: 0.14, fgImpact: 0.047, ftImpact: 0, to: -2.792 } },
          { name: "Darius Adams", min: 12, pts: 3, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.83, zScores: { pts: -0.687, reb: -0.053, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -0.759, ftImpact: 0, to: -0.993 } },
          { name: "Preston Edmead", min: 38, pts: 20, reb: 1, ast: 10, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 10, ftm: 7, fta: 7, composite: 11.66, zScores: { pts: 1.82, reb: -0.751, ast: 4.497, stl: 1.294, blk: -0.475, tpm: 1.757, fgImpact: 0.117, ftImpact: 2.59, to: 0.806 } },
          { name: "Paul McNeil Jr.", min: 32, pts: 16, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 5, fga: 14, ftm: 1, fta: 1, composite: 2.78, zScores: { pts: 1.23, reb: 0.296, ast: 0.249, stl: -0.722, blk: -0.475, tpm: 3.375, fgImpact: -1.448, ftImpact: 0.37, to: -0.094 } },
          { name: "Robert Jurkovic", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.04, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: -0.094 } },
          { name: "Eemeli Yalaho", min: 21, pts: 7, reb: 5, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 0.56, zScores: { pts: -0.097, reb: 0.645, ast: -0.812, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: 0.07, ftImpact: 0, to: 0.806 } },
          { name: "Zymicah Wilkins", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.43, zScores: { pts: -0.835, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.023, ftImpact: 0, to: 0.806 } },
          { name: "Christian Hammond", min: 31, pts: 13, reb: 4, ast: 1, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 2.2, zScores: { pts: 0.788, reb: 0.296, ast: -0.281, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: 0.531, ftImpact: 0, to: -0.094 } },
          { name: "R.J. Keene II", min: 7, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.38, zScores: { pts: -0.687, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.023, ftImpact: 0, to: -0.094 } }
        ]
      }
    },
      {
      id: "401913100",
      line: "Wofford Terriers 70 @ North Carolina Tar Heels 109 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WOF", name: "Wofford Terriers", score: 70,
        players: [

        ]
      },
      home: {
        abbr: "UNC", name: "North Carolina Tar Heels", score: 109,
        players: [
          { name: "Jarin Stevenson", min: 14, pts: 10, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 3, fta: 5, composite: -0.28, zScores: { pts: 0.345, reb: -0.053, ast: -0.281, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: 0.07, ftImpact: -1.119, to: 0.806 } },
          { name: "Sayon Keita", min: 14, pts: 6, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -1.34, zScores: { pts: -0.245, reb: 0.296, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.852, ftImpact: 0, to: -0.094 } },
          { name: "Neo Avdalas", min: 20, pts: 8, reb: 4, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 0.41, zScores: { pts: 0.05, reb: 0.296, ast: 1.311, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.298, ftImpact: 0, to: -0.094 } },
          { name: "Matt Able", min: 17, pts: 6, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -1.14, zScores: { pts: -0.245, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.852, ftImpact: 0, to: 0.806 } },
          { name: "Terrence Brown", min: 18, pts: 21, reb: 1, ast: 1, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 11, ftm: 6, fta: 8, composite: 3.13, zScores: { pts: 1.968, reb: -0.751, ast: -0.281, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: 1.337, ftImpact: -0.009, to: -0.094 } },
          { name: "Alex Samodurov", min: 18, pts: 13, reb: 7, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 4, fga: 5, ftm: 4, fta: 4, composite: 5.78, zScores: { pts: 0.788, reb: 1.343, ast: -0.281, stl: -0.722, blk: 0.955, tpm: 0.14, fgImpact: 1.267, ftImpact: 1.48, to: 0.806 } },
          { name: "John Holbrook", min: 3, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.74, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Maximo Adams", min: 22, pts: 11, reb: 11, ast: 1, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 5.68, zScores: { pts: 0.493, reb: 2.739, ast: -0.281, stl: -0.722, blk: 2.386, tpm: 0.14, fgImpact: 0.117, ftImpact: 0, to: 0.806 } },
          { name: "Cade Bennerman", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Evan Smith", min: 3, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.51, zScores: { pts: -0.835, reb: -0.751, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.414, ftImpact: 0, to: 0.806 } },
          { name: "Isaiah Denis", min: 20, pts: 7, reb: 6, ast: 5, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 10, ftm: 2, fta: 2, composite: 1.94, zScores: { pts: -0.097, reb: 0.994, ast: 1.842, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: -2.3, ftImpact: 0.74, to: 0.806 } },
          { name: "Kevin Thomas", min: 8, pts: 2, reb: 4, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -2.04, zScores: { pts: -0.835, reb: 0.296, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 0, ftImpact: 0.74, to: -0.993 } },
          { name: "Jaydon Young", min: 20, pts: 15, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 8, ftm: 3, fta: 4, composite: 2.13, zScores: { pts: 1.083, reb: -0.402, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 2.566, fgImpact: 0.093, ftImpact: -0.004, to: 0.806 } },
          { name: "Angelo Brizzi", min: 20, pts: 8, reb: 2, ast: 2, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: -0.96, zScores: { pts: 0.05, reb: -0.402, ast: 0.249, stl: 0.286, blk: 0.955, tpm: 0.14, fgImpact: -0.344, ftImpact: -0.004, to: -1.893 } }
        ]
      }
    },
      {
      id: "401912208",
      line: "American University Eagles 73 @ Clemson Tigers 82 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "AMER", name: "American University Eagles", score: 73,
        players: [

        ]
      },
      home: {
        abbr: "Clem", name: "Clemson Tigers", score: 82,
        players: [
          { name: "Liutauras Lelevicius", min: 29, pts: 17, reb: 10, ast: 2, stl: 0, blk: 1, to: 1, tpm: 5, fgm: 5, fga: 8, ftm: 2, fta: 2, composite: 9.17, zScores: { pts: 1.378, reb: 2.39, ast: 0.249, stl: -0.722, blk: 0.955, tpm: 3.375, fgImpact: 0.899, ftImpact: 0.74, to: -0.094 } },
          { name: "Dylan Faulkner", min: 33, pts: 12, reb: 6, ast: 2, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 6, fta: 8, composite: 3.04, zScores: { pts: 0.64, reb: 0.994, ast: 0.249, stl: 1.294, blk: 0.955, tpm: -0.668, fgImpact: -0.321, ftImpact: -0.009, to: -0.094 } },
          { name: "David Fuchs", min: 14, pts: 2, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -1.47, zScores: { pts: -0.835, reb: 0.296, ast: 0.78, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.759, ftImpact: 0, to: -0.094 } },
          { name: "Ace Buckner", min: 36, pts: 26, reb: 0, ast: 6, stl: 1, blk: 0, to: 3, tpm: 5, fgm: 9, fga: 14, ftm: 3, fta: 5, composite: 5.93, zScores: { pts: 2.705, reb: -1.1, ast: 2.373, stl: 0.286, blk: -0.475, tpm: 3.375, fgImpact: 1.774, ftImpact: -1.119, to: -1.893 } },
          { name: "Cole Certa", min: 29, pts: 10, reb: 3, ast: 0, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 12, ftm: 5, fta: 6, composite: -2, zScores: { pts: 0.345, reb: -0.053, ast: -0.812, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: -3.082, ftImpact: 0.736, to: -0.094 } },
          { name: "Chase Thompson", min: 30, pts: 8, reb: 5, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 9, ftm: 2, fta: 2, composite: 0.53, zScores: { pts: 0.05, reb: 0.645, ast: -0.281, stl: 0.286, blk: 0.955, tpm: -0.668, fgImpact: -1.103, ftImpact: 0.74, to: -0.094 } },
          { name: "Trent Steinour", min: 2, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.38, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: -0.094 } },
          { name: "Dallas Thomas", min: 27, pts: 7, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 1, composite: -1.58, zScores: { pts: -0.097, reb: 0.994, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.07, ftImpact: -1.114, to: -0.094 } }
        ]
      }
    },
      {
      id: "401911305",
      line: "Boston University Terriers 72 @ Brown Bears 67 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BU", name: "Boston University Terriers", score: 72,
        players: [

        ]
      },
      home: {
        abbr: "Brown", name: "Brown Bears", score: 67,
        players: [
          { name: "N'famara Dabo", min: 24, pts: 13, reb: 6, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 8, ftm: 3, fta: 4, composite: 1.44, zScores: { pts: 0.788, reb: 0.994, ast: -0.281, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0.899, ftImpact: -0.004, to: -0.094 } },
          { name: "Timmy Bollin", min: 23, pts: 4, reb: 7, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 3, composite: -2.04, zScores: { pts: -0.54, reb: 1.343, ast: 0.249, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.759, ftImpact: -0.374, to: -0.094 } },
          { name: "Brady Loughlin", min: 31, pts: 12, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: 1, zScores: { pts: 0.64, reb: 0.296, ast: 0.249, stl: -0.722, blk: -0.475, tpm: 1.757, fgImpact: 0.093, ftImpact: -0.744, to: -0.094 } },
          { name: "Jerrell Barron Jr.", min: 21, pts: 3, reb: 0, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 1, composite: -1.06, zScores: { pts: -0.687, reb: -1.1, ast: 0.78, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.368, ftImpact: 0.37, to: 0.806 } },
          { name: "Jeremiah Jenkins", min: 25, pts: 9, reb: 1, ast: 7, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 12, ftm: 2, fta: 2, composite: 0.78, zScores: { pts: 0.198, reb: -0.751, ast: 2.904, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: -2.277, ftImpact: 0.74, to: -0.993 } },
          { name: "Charlie O'Sullivan", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.75, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Wyatt DeGraaf", min: 14, pts: 2, reb: 2, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 2, composite: -3.21, zScores: { pts: -0.835, reb: -0.402, ast: 0.249, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: -0.368, ftImpact: -2.229, to: 0.806 } },
          { name: "Rykan Woo", min: 14, pts: 6, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -1.37, zScores: { pts: -0.245, reb: -0.402, ast: 0.249, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: -0.736, ftImpact: 0, to: -0.993 } },
          { name: "Isaiah Langham", min: 15, pts: 7, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 4, composite: -3.64, zScores: { pts: -0.097, reb: -0.751, ast: -0.812, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: -0.344, ftImpact: -1.489, to: -0.094 } },
          { name: "Ray Cuevas", min: 11, pts: 6, reb: 1, ast: 1, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -1.24, zScores: { pts: -0.245, reb: -0.751, ast: -0.281, stl: 1.294, blk: -0.475, tpm: 0.949, fgImpact: -0.736, ftImpact: 0, to: -0.993 } },
          { name: "David Rochester", min: 17, pts: 5, reb: 2, ast: 0, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.11, zScores: { pts: -0.392, reb: -0.402, ast: -0.812, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: 0.438, ftImpact: 0, to: -1.893 } },
          { name: "Malcolm Wrisby-Jefferson", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.49, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401911249",
      line: "Saint Louis Billikens 90 @ Missouri Tigers 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "StLou", name: "Saint Louis Billikens", score: 90,
        players: [
          { name: "Alon Michaeli", min: 25, pts: 13, reb: 9, ast: 6, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 12, ftm: 3, fta: 4, composite: 2.68, zScores: { pts: 0.788, reb: 2.041, ast: 2.373, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.666, ftImpact: -0.004, to: -0.993 } },
          { name: "Ishan Sharma", min: 36, pts: 17, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 10, ftm: 2, fta: 2, composite: 4.42, zScores: { pts: 1.378, reb: 0.296, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 1.757, fgImpact: 0.922, ftImpact: 0.74, to: 0.806 } },
          { name: "Amari McCottry", min: 29, pts: 17, reb: 5, ast: 5, stl: 3, blk: 1, to: 2, tpm: 2, fgm: 7, fga: 11, ftm: 1, fta: 2, composite: 7.67, zScores: { pts: 1.378, reb: 0.645, ast: 1.842, stl: 2.302, blk: 0.955, tpm: 0.949, fgImpact: 1.337, ftImpact: -0.744, to: -0.993 } },
          { name: "Quentin Jones", min: 35, pts: 14, reb: 4, ast: 5, stl: 0, blk: 0, to: 3, tpm: 4, fgm: 4, fga: 11, ftm: 2, fta: 4, composite: -0.02, zScores: { pts: 0.935, reb: 0.296, ast: 1.842, stl: -0.722, blk: -0.475, tpm: 2.566, fgImpact: -1.08, ftImpact: -1.489, to: -1.893 } },
          { name: "Trey Green", min: 37, pts: 16, reb: 1, ast: 6, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 5.67, zScores: { pts: 1.23, reb: -0.751, ast: 2.373, stl: 0.286, blk: -0.475, tpm: 2.566, fgImpact: 0.531, ftImpact: 0, to: -0.094 } },
          { name: "Jax Kerr", min: 9, pts: 0, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.44, zScores: { pts: -1.13, reb: -0.402, ast: -0.281, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Luke Laczkowski", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Cam Hutson", min: 11, pts: 5, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -1.68, zScores: { pts: -0.392, reb: -1.1, ast: -0.812, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: 0.023, ftImpact: 0.74, to: -0.094 } },
          { name: "Kellen Thames", min: 15, pts: 8, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: -1.55, zScores: { pts: 0.05, reb: 0.296, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.876, ftImpact: 0, to: -0.094 } }
        ]
      },
      home: {
        abbr: "Mizzou", name: "Missouri Tigers", score: 84,
        players: [
          { name: "Toni Bryant", min: 13, pts: 1, reb: 2, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -3.7, zScores: { pts: -0.982, reb: -0.402, ast: 0.249, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: -0.391, ftImpact: -0.744, to: -0.993 } },
          { name: "Bryson Tiller", min: 35, pts: 26, reb: 9, ast: 1, stl: 1, blk: 4, to: 2, tpm: 5, fgm: 9, fga: 18, ftm: 3, fta: 4, composite: 12.58, zScores: { pts: 2.705, reb: 2.041, ast: -0.281, stl: 0.286, blk: 5.246, tpm: 3.375, fgImpact: 0.21, ftImpact: -0.004, to: -0.993 } },
          { name: "Jason Crowe Jr.", min: 34, pts: 8, reb: 4, ast: 7, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 18, ftm: 2, fta: 2, composite: -3.49, zScores: { pts: 0.05, reb: 0.296, ast: 2.904, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -4.623, ftImpact: 0.74, to: -0.993 } },
          { name: "Trent Pierce", min: 23, pts: 3, reb: 7, ast: 0, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 1.24, zScores: { pts: -0.687, reb: 1.343, ast: -0.812, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: -0.368, ftImpact: 0, to: 0.806 } },
          { name: "Mark Mitchell Jr.", min: 32, pts: 21, reb: 4, ast: 2, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 8, fga: 11, ftm: 4, fta: 7, composite: 4.08, zScores: { pts: 1.968, reb: 0.296, ast: 0.249, stl: 0.286, blk: 0.955, tpm: 0.14, fgImpact: 2.142, ftImpact: -1.863, to: -0.094 } },
          { name: "Trent Burns", min: 4, pts: 1, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -2.96, zScores: { pts: -0.982, reb: -0.402, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: -0.391, ftImpact: -0.744, to: 0.806 } },
          { name: "Cord Stansberry", min: 10, pts: 2, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 3, composite: -2.29, zScores: { pts: -0.835, reb: -0.751, ast: -0.281, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: -0.374, to: 0.806 } },
          { name: "Jamier Jones", min: 19, pts: 13, reb: 10, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 10, ftm: 3, fta: 4, composite: -0.38, zScores: { pts: 0.788, reb: 2.39, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.117, ftImpact: -0.004, to: -0.993 } },
          { name: "Kennard Davis Jr.", min: 30, pts: 9, reb: 2, ast: 3, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 9, ftm: 2, fta: 2, composite: 1.08, zScores: { pts: 0.198, reb: -0.402, ast: 0.78, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: -1.103, ftImpact: 0.74, to: -0.094 } }
        ]
      }
    },
      {
      id: "401911005",
      line: "Indiana State Sycamores 69 @ Ball State Cardinals 66 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "IndSt", name: "Indiana State Sycamores", score: 69,
        players: [
          { name: "Alessio Calamita", min: 12, pts: 0, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.57, zScores: { pts: -1.13, reb: 0.296, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } },
          { name: "Jackson Cooper", min: 28, pts: 12, reb: 7, ast: 2, stl: 1, blk: 0, to: 4, tpm: 2, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: -0.07, zScores: { pts: 0.64, reb: 1.343, ast: 0.249, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: -0.274, ftImpact: 0, to: -2.792 } },
          { name: "Maguire Mitchell", min: 35, pts: 6, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: -2.96, zScores: { pts: -0.245, reb: -1.1, ast: -0.281, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -1.127, ftImpact: 0.74, to: -0.094 } },
          { name: "EJ McQuillan", min: 17, pts: 6, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 2, composite: -2.42, zScores: { pts: -0.245, reb: -0.402, ast: 0.249, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: 0.438, ftImpact: -2.229, to: -0.993 } },
          { name: "Karmani Gregory", min: 35, pts: 20, reb: 1, ast: 3, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 5, fga: 13, ftm: 8, fta: 10, composite: -1.52, zScores: { pts: 1.82, reb: -0.751, ast: 0.78, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: -1.057, ftImpact: 0.731, to: -2.792 } },
          { name: "Kade Speckman", min: 8, pts: 2, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.08, zScores: { pts: -0.835, reb: -0.402, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0.023, ftImpact: 0, to: 0.806 } },
          { name: "Aleksa Vlajic", min: 9, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.84, zScores: { pts: -1.13, reb: -0.053, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.782, ftImpact: 0, to: 0.806 } },
          { name: "Duce Paschal", min: 18, pts: 8, reb: 11, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 4, fta: 5, composite: 1.41, zScores: { pts: 0.05, reb: 2.739, ast: -0.281, stl: 1.294, blk: -0.475, tpm: -0.668, fgImpact: -1.518, ftImpact: 0.366, to: -0.094 } },
          { name: "Meechie White", min: 14, pts: 7, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: -1.08, zScores: { pts: -0.097, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.438, ftImpact: 0.74, to: 0.806 } },
          { name: "Chance Puryear", min: 24, pts: 8, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: -0.69, zScores: { pts: 0.05, reb: -0.402, ast: -0.812, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: 0.461, ftImpact: -0.744, to: 0.806 } }
        ]
      },
      home: {
        abbr: "BALL", name: "Ball State Cardinals", score: 66,
        players: [

        ]
      }
    },
      {
      id: "401909695",
      line: "Troy Trojans 68 @ Florida State Seminoles 91 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TROY", name: "Troy Trojans", score: 68,
        players: [

        ]
      },
      home: {
        abbr: "FSU", name: "Florida State Seminoles", score: 91,
        players: [
          { name: "Sebastian Rancik", min: 31, pts: 18, reb: 3, ast: 2, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 4, fga: 9, ftm: 8, fta: 8, composite: 5.47, zScores: { pts: 1.525, reb: -0.053, ast: 0.249, stl: -0.722, blk: 0.955, tpm: 0.949, fgImpact: -0.298, ftImpact: 2.96, to: -0.094 } },
          { name: "Shon Abaev", min: 31, pts: 20, reb: 7, ast: 6, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 14, ftm: 6, fta: 7, composite: 5.66, zScores: { pts: 1.82, reb: 1.343, ast: 2.373, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: -0.642, ftImpact: 1.106, to: -0.094 } },
          { name: "Marcis Ponder", min: 23, pts: 10, reb: 10, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 4, fta: 6, composite: -0.83, zScores: { pts: 0.345, reb: 2.39, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.852, ftImpact: -0.749, to: -0.993 } },
          { name: "Kam Taylor", min: 25, pts: 15, reb: 4, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 8, fta: 8, composite: 5.95, zScores: { pts: 1.083, reb: 0.296, ast: 0.78, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: 0.07, ftImpact: 2.96, to: 0.806 } },
          { name: "Anthony Robinson II", min: 24, pts: 6, reb: 3, ast: 3, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 10, ftm: 0, fta: 1, composite: -1.96, zScores: { pts: -0.245, reb: -0.053, ast: 0.78, stl: 2.302, blk: -0.475, tpm: -0.668, fgImpact: -1.494, ftImpact: -1.114, to: -0.993 } },
          { name: "Alex Steen", min: 16, pts: 6, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 4, fta: 5, composite: -1.25, zScores: { pts: -0.245, reb: -0.053, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.023, ftImpact: 0.366, to: 0.806 } },
          { name: "Cooper Schwieger", min: 9, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.61, zScores: { pts: -1.13, reb: -0.751, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } },
          { name: "Elise Assui", min: 16, pts: 4, reb: 5, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -1.29, zScores: { pts: -0.54, reb: 0.645, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.368, ftImpact: 0.74, to: -0.094 } },
          { name: "Martay Barnes", min: 10, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -5.33, zScores: { pts: -0.54, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.344, ftImpact: 0, to: -1.893 } },
          { name: "Brandon Bass Jr.", min: 15, pts: 8, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -1.97, zScores: { pts: 0.05, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: 0.047, ftImpact: 0.74, to: -0.993 } }
        ]
      }
    },
      {
      id: "401909542",
      line: "Eastern Michigan Eagles 53 @ Xavier Musketeers 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "EMU", name: "Eastern Michigan Eagles", score: 53,
        players: [

        ]
      },
      home: {
        abbr: "Xav", name: "Xavier Musketeers", score: 76,
        players: [
          { name: "Filip Borovicanin", min: 24, pts: 10, reb: 4, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 0.38, zScores: { pts: 0.345, reb: 0.296, ast: 1.311, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 1.29, ftImpact: 0, to: -0.993 } },
          { name: "Jovan Milicevic", min: 17, pts: 9, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 3, fta: 4, composite: 0.62, zScores: { pts: 0.198, reb: 0.296, ast: -0.281, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0.461, ftImpact: -0.004, to: 0.806 } },
          { name: "Mike Nwoko", min: 28, pts: 9, reb: 6, ast: 0, stl: 2, blk: 1, to: 3, tpm: 0, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: -0.58, zScores: { pts: 0.198, reb: 0.994, ast: -0.812, stl: 1.294, blk: 0.955, tpm: -0.668, fgImpact: 0.093, ftImpact: -0.744, to: -1.893 } },
          { name: "Ruben Dominguez", min: 19, pts: 3, reb: 0, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 1, composite: -2, zScores: { pts: -0.687, reb: -1.1, ast: -0.812, stl: 0.286, blk: 0.955, tpm: -0.668, fgImpact: -1.15, ftImpact: 0.37, to: 0.806 } },
          { name: "Tru Washington", min: 24, pts: 5, reb: 6, ast: 1, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 6, ftm: 3, fta: 4, composite: -2.07, zScores: { pts: -0.392, reb: 0.994, ast: -0.281, stl: 1.294, blk: -0.475, tpm: -0.668, fgImpact: -1.541, ftImpact: -0.004, to: -0.993 } },
          { name: "Rolyns Aligbe", min: 15, pts: 4, reb: 3, ast: 0, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 1, fta: 4, composite: -3.88, zScores: { pts: -0.54, reb: -0.053, ast: -0.812, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: -0.368, ftImpact: -2.973, to: -0.094 } },
          { name: "Gabriel Pozzato", min: 16, pts: 8, reb: 0, ast: 1, stl: 4, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 4, ftm: 1, fta: 3, composite: 1.97, zScores: { pts: 0.05, reb: -1.1, ast: -0.281, stl: 3.31, blk: 0.955, tpm: 0.14, fgImpact: 0.852, ftImpact: -1.859, to: -0.094 } },
          { name: "Nikos Chitikoudis", min: 20, pts: 9, reb: 6, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 4, ftm: 1, fta: 2, composite: 1.24, zScores: { pts: 0.198, reb: 0.994, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 1.658, ftImpact: -0.744, to: 0.806 } },
          { name: "Kalek House", min: 16, pts: 6, reb: 1, ast: 7, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 2.46, zScores: { pts: -0.245, reb: -0.751, ast: 2.904, stl: 0.286, blk: 0.955, tpm: -0.668, fgImpact: 0.07, ftImpact: 0, to: -0.094 } },
          { name: "Chance Westry", min: 21, pts: 13, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 7, ftm: 4, fta: 5, composite: -0.54, zScores: { pts: 0.788, reb: -0.751, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.484, ftImpact: 0.366, to: -0.094 } }
        ]
      }
    },
      {
      id: "401906780",
      line: "Presbyterian Blue Hose 77 @ Georgia Bulldogs 91 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PRES", name: "Presbyterian Blue Hose", score: 77,
        players: [

        ]
      },
      home: {
        abbr: "UGA", name: "Georgia Bulldogs", score: 91,
        players: [
          { name: "Kanon Catchings", min: 25, pts: 12, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 14, ftm: 1, fta: 3, composite: -3.32, zScores: { pts: 0.64, reb: 0.296, ast: -0.812, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: -1.448, ftImpact: -1.859, to: -0.094 } },
          { name: "Kareem Stagg", min: 20, pts: 10, reb: 1, ast: 1, stl: 3, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 3.7, zScores: { pts: 0.345, reb: -0.751, ast: -0.281, stl: 2.302, blk: -0.475, tpm: 0.949, fgImpact: 0.07, ftImpact: 0.74, to: 0.806 } },
          { name: "James Scott", min: 26, pts: 5, reb: 7, ast: 1, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 3, composite: 2.87, zScores: { pts: -0.392, reb: 1.343, ast: -0.281, stl: -0.722, blk: 3.816, tpm: -0.668, fgImpact: 0.829, ftImpact: -1.859, to: 0.806 } },
          { name: "Marcus Millender", min: 26, pts: 12, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: -0.66, zScores: { pts: 0.64, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: -0.274, ftImpact: 0, to: -0.094 } },
          { name: "Blue Cain", min: 31, pts: 20, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 9, fga: 12, ftm: 0, fta: 0, composite: 6.12, zScores: { pts: 1.82, reb: 0.296, ast: 0.78, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: 2.557, ftImpact: 0, to: -0.094 } },
          { name: "David Ugonna Ike", min: 4, pts: 1, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -3.31, zScores: { pts: -0.982, reb: -0.751, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: -0.391, ftImpact: -0.744, to: 0.806 } },
          { name: "Mading Kuany", min: 9, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.22, zScores: { pts: -0.687, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -0.368, ftImpact: 0, to: 0.806 } },
          { name: "Andrew Osasuyi", min: 9, pts: 8, reb: 9, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 4, fta: 6, composite: 1.53, zScores: { pts: 0.05, reb: 2.041, ast: -0.812, stl: 1.294, blk: -0.475, tpm: -0.668, fgImpact: 0.047, ftImpact: -0.749, to: 0.806 } },
          { name: "Brady Dunlap", min: 15, pts: 9, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 3, fta: 4, composite: 0.94, zScores: { pts: 0.198, reb: -0.053, ast: -0.812, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: 0.047, ftImpact: -0.004, to: 0.806 } },
          { name: "Donovan Williams Jr.", min: 10, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 3, composite: -5.46, zScores: { pts: -0.982, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: -1.859, to: 0.806 } },
          { name: "Freddie Dilione V", min: 25, pts: 10, reb: 3, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 10, ftm: 4, fta: 5, composite: 0.42, zScores: { pts: 0.345, reb: -0.053, ast: 1.311, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -1.494, ftImpact: 0.366, to: 0.806 } }
        ]
      }
    },
      {
      id: "401923260",
      line: "Florida Atlantic Owls 71 @ Wright State Raiders 97 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "FAU", name: "Florida Atlantic Owls", score: 71,
        players: [
          { name: "Mason Porter-Brown", min: 28, pts: 13, reb: 2, ast: 1, stl: 4, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 13, ftm: 1, fta: 1, composite: 3.11, zScores: { pts: 0.788, reb: -0.402, ast: -0.281, stl: 3.31, blk: -0.475, tpm: 0.949, fgImpact: -1.057, ftImpact: 0.37, to: -0.094 } },
          { name: "Josh Harris", min: 19, pts: 6, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 10, ftm: 0, fta: 2, composite: -7.16, zScores: { pts: -0.245, reb: -0.053, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -1.494, ftImpact: -2.229, to: -0.993 } },
          { name: "Tacko Ifaola", min: 15, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 4, composite: -4.95, zScores: { pts: -0.835, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: -1.489, to: 0.806 } },
          { name: "Felipe Quinones", min: 36, pts: 11, reb: 9, ast: 4, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 10, ftm: 5, fta: 8, composite: -0.99, zScores: { pts: 0.493, reb: 2.041, ast: 1.311, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -1.494, ftImpact: -1.493, to: -0.993 } },
          { name: "Kanaan Carlyle", min: 40, pts: 25, reb: 4, ast: 3, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 6, fga: 12, ftm: 9, fta: 9, composite: 7.59, zScores: { pts: 2.558, reb: 0.296, ast: 0.78, stl: 0.286, blk: -0.475, tpm: 2.566, fgImpact: 0.14, ftImpact: 3.33, to: -1.893 } },
          { name: "Matthew Puodziukaitis", min: 18, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.22, zScores: { pts: -0.687, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -0.368, ftImpact: 0, to: 0.806 } },
          { name: "David Musis", min: 15, pts: 6, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 0.44, zScores: { pts: -0.245, reb: -0.053, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 0.438, ftImpact: 0.74, to: 0.806 } },
          { name: "Kieran Mullen", min: 11, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.14, zScores: { pts: -0.835, reb: -0.053, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.414, ftImpact: 0, to: -0.993 } },
          { name: "Milhan Charles", min: 18, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.99, zScores: { pts: -0.687, reb: -1.1, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.023, ftImpact: 0, to: -1.893 } }
        ]
      },
      home: {
        abbr: "WRST", name: "Wright State Raiders", score: 97,
        players: [

        ]
      }
    },
      {
      id: "401920894",
      line: "Delaware Blue Hens 64 @ Wisconsin Badgers 73 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DEL", name: "Delaware Blue Hens", score: 64,
        players: [

        ]
      },
      home: {
        abbr: "Wisc", name: "Wisconsin Badgers", score: 73,
        players: [
          { name: "Victory Onuetu", min: 20, pts: 11, reb: 11, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 5, fga: 9, ftm: 1, fta: 1, composite: 4.2, zScores: { pts: 0.493, reb: 2.739, ast: -0.812, stl: -0.722, blk: 2.386, tpm: -0.668, fgImpact: 0.508, ftImpact: 0.37, to: -0.094 } },
          { name: "Nolan Winter", min: 23, pts: 11, reb: 5, ast: 4, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 4, fga: 9, ftm: 2, fta: 4, composite: 0.04, zScores: { pts: 0.493, reb: 0.645, ast: 1.311, stl: -0.722, blk: 0.955, tpm: 0.14, fgImpact: -0.298, ftImpact: -1.489, to: -0.993 } },
          { name: "Owen Foxwell", min: 29, pts: 16, reb: 2, ast: 6, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 9, ftm: 7, fta: 9, composite: 3.01, zScores: { pts: 1.23, reb: -0.402, ast: 2.373, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -0.298, ftImpact: 0.361, to: 0.806 } },
          { name: "Braeden Carrington", min: 30, pts: 16, reb: 2, ast: 0, stl: 2, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 12, ftm: 0, fta: 0, composite: 4.35, zScores: { pts: 1.23, reb: -0.402, ast: -0.812, stl: 1.294, blk: -0.475, tpm: 2.566, fgImpact: 0.14, ftImpact: 0, to: 0.806 } },
          { name: "Eian Elmer", min: 27, pts: 11, reb: 4, ast: 1, stl: 0, blk: 2, to: 2, tpm: 3, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: 2.96, zScores: { pts: 0.493, reb: 0.296, ast: -0.281, stl: -0.722, blk: 2.386, tpm: 1.757, fgImpact: -0.712, ftImpact: 0.74, to: -0.993 } },
          { name: "Austin Rapp", min: 14, pts: 0, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -4.46, zScores: { pts: -1.13, reb: -0.053, ast: 0.249, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -1.564, ftImpact: 0, to: -0.094 } },
          { name: "Will Garlock", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.39, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: -0.094 } },
          { name: "Jackson Ball", min: 13, pts: 0, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -1.13, reb: -0.053, ast: 0.249, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -1.564, ftImpact: 0, to: 0.806 } },
          { name: "Hayden Jones", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Jack Janicki", min: 17, pts: 7, reb: 3, ast: 3, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 2.86, zScores: { pts: -0.097, reb: -0.053, ast: 0.78, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: 0.461, ftImpact: 0, to: 0.806 } },
          { name: "Trey Autry", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.04, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: -0.094 } },
          { name: "Zach Kinziger", min: 15, pts: 1, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -4.21, zScores: { pts: -0.982, reb: -0.751, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: -0.744, to: 0.806 } }
        ]
      }
    },
      {
      id: "401919015",
      line: "Nicholls Colonels 63 @ UAB Blazers 70 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NICH", name: "Nicholls Colonels", score: 63,
        players: [

        ]
      },
      home: {
        abbr: "UAB", name: "UAB Blazers", score: 70,
        players: [
          { name: "Elijah Duval", min: 14, pts: 6, reb: 4, ast: 2, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 4, fta: 4, composite: 2.71, zScores: { pts: -0.245, reb: 0.296, ast: 0.249, stl: -0.722, blk: 2.386, tpm: -0.668, fgImpact: 0.023, ftImpact: 1.48, to: -0.094 } },
          { name: "Jeremy Elyzee", min: 30, pts: 10, reb: 14, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 4, fta: 6, composite: 1.6, zScores: { pts: 0.345, reb: 3.786, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 0.461, ftImpact: -0.749, to: -0.993 } },
          { name: "Salim London", min: 30, pts: 2, reb: 7, ast: 2, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -2.43, zScores: { pts: -0.835, reb: 1.343, ast: 0.249, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -1.173, ftImpact: 0.74, to: -1.893 } },
          { name: "Justyn Fernandez", min: 28, pts: 14, reb: 6, ast: 0, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 12, ftm: 3, fta: 4, composite: -2.5, zScores: { pts: 0.935, reb: 0.994, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -0.666, ftImpact: -0.004, to: -1.893 } },
          { name: "Deuce Jones", min: 32, pts: 14, reb: 6, ast: 4, stl: 2, blk: 0, to: 5, tpm: 1, fgm: 4, fga: 14, ftm: 5, fta: 8, composite: -3.24, zScores: { pts: 0.935, reb: 0.994, ast: 1.311, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: -2.253, ftImpact: -1.493, to: -3.692 } },
          { name: "Aleks Alston", min: 12, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.18, zScores: { pts: -1.13, reb: -0.402, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.782, ftImpact: 0, to: 0.806 } },
          { name: "Antallah Sandlin-El", min: 11, pts: 8, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -0.21, zScores: { pts: 0.05, reb: -0.402, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: -0.344, ftImpact: 0.74, to: 0.806 } },
          { name: "Matt Mbole", min: 9, pts: 2, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2, zScores: { pts: -0.835, reb: 0.296, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.414, ftImpact: 0, to: 0.806 } },
          { name: "Korie Corbett", min: 6, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -4.22, zScores: { pts: -0.835, reb: -1.1, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.782, ftImpact: 0.74, to: -0.094 } },
          { name: "T.J. Caldwell", min: 28, pts: 12, reb: 1, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: -0.12, zScores: { pts: 0.64, reb: -0.751, ast: -0.281, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: 0.508, ftImpact: 0, to: -0.993 } }
        ]
      }
    },
      {
      id: "401928823",
      line: "Robert Morris Colonials 56 @ UIC Flames 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "RMU", name: "Robert Morris Colonials", score: 56,
        players: [

        ]
      },
      home: {
        abbr: "UIC", name: "UIC Flames", score: 79,
        players: [
          { name: "Jayce Nathaniel", min: 26, pts: 6, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 3, composite: -1.88, zScores: { pts: -0.245, reb: -0.053, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.344, ftImpact: -0.374, to: 0.806 } },
          { name: "Rashund Washington Jr.", min: 28, pts: 19, reb: 12, ast: 1, stl: 1, blk: 1, to: 2, tpm: 3, fgm: 8, fga: 13, ftm: 0, fta: 1, composite: 6.73, zScores: { pts: 1.673, reb: 3.088, ast: -0.281, stl: 0.286, blk: 0.955, tpm: 1.757, fgImpact: 1.36, ftImpact: -1.114, to: -0.993 } },
          { name: "Ahmad Henderson II", min: 26, pts: 16, reb: 0, ast: 1, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 9, ftm: 3, fta: 4, composite: 3.73, zScores: { pts: 1.23, reb: -1.1, ast: -0.281, stl: 1.294, blk: -0.475, tpm: 1.757, fgImpact: 0.508, ftImpact: -0.004, to: 0.806 } },
          { name: "Mekhi Lowery", min: 24, pts: 6, reb: 4, ast: 4, stl: 2, blk: 2, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 3, composite: 2.66, zScores: { pts: -0.245, reb: 0.296, ast: 1.311, stl: 1.294, blk: 2.386, tpm: -0.668, fgImpact: -0.344, ftImpact: -0.374, to: -0.993 } },
          { name: "Gabe Cupps", min: 22, pts: 4, reb: 3, ast: 4, stl: 3, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 1, composite: 3.05, zScores: { pts: -0.54, reb: -0.053, ast: 1.311, stl: 2.302, blk: 0.955, tpm: -0.668, fgImpact: 0.047, ftImpact: -1.114, to: 0.806 } },
          { name: "Dikembe Shaw", min: 8, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.44, zScores: { pts: -0.687, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.414, ftImpact: 0, to: 0.806 } },
          { name: "Nano Barrantes", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.04, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: -0.094 } },
          { name: "Lucas Scroggins", min: 21, pts: 10, reb: 4, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 1.72, zScores: { pts: 0.345, reb: 0.296, ast: -0.812, stl: 0.286, blk: 0.955, tpm: -0.668, fgImpact: 0.508, ftImpact: 0, to: 0.806 } },
          { name: "Mario Wooden Jr.", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.094 } },
          { name: "Elijah Garrett", min: 15, pts: 4, reb: 2, ast: 1, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 5, composite: -2.62, zScores: { pts: -0.54, reb: -0.402, ast: -0.281, stl: 2.302, blk: -0.475, tpm: -0.668, fgImpact: -0.759, ftImpact: -2.603, to: 0.806 } },
          { name: "Benny Gealer", min: 23, pts: 11, reb: 0, ast: 6, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 9, ftm: 3, fta: 4, composite: -0.58, zScores: { pts: 0.493, reb: -1.1, ast: 2.373, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: -1.103, ftImpact: -0.004, to: -0.993 } }
        ]
      }
    },
      {
      id: "401921809",
      line: "Texas Southern Tigers 51 @ LSU Tigers 92 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TXSO", name: "Texas Southern Tigers", score: 51,
        players: [

        ]
      },
      home: {
        abbr: "LSU", name: "LSU Tigers", score: 92,
        players: [
          { name: "Saliou Niang", min: 27, pts: 15, reb: 11, ast: 2, stl: 3, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 6, ftm: 7, fta: 8, composite: 5.69, zScores: { pts: 1.083, reb: 2.739, ast: 0.249, stl: 2.302, blk: -0.475, tpm: -0.668, fgImpact: 0.876, ftImpact: 1.476, to: -1.893 } },
          { name: "Mo Dioubate", min: 23, pts: 13, reb: 7, ast: 0, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 6, fga: 8, ftm: 0, fta: 4, composite: 1.76, zScores: { pts: 0.788, reb: 1.343, ast: -0.812, stl: 1.294, blk: 0.955, tpm: 0.14, fgImpact: 1.704, ftImpact: -4.457, to: 0.806 } },
          { name: "Brice Dessert", min: 12, pts: 9, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 6, ftm: 1, fta: 3, composite: -4.86, zScores: { pts: 0.198, reb: -0.402, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.876, ftImpact: -1.859, to: -0.993 } },
          { name: "Donovan Dent", min: 32, pts: 10, reb: 0, ast: 10, stl: 3, blk: 4, to: 0, tpm: 0, fgm: 4, fga: 11, ftm: 2, fta: 5, composite: 7.74, zScores: { pts: 0.345, reb: -1.1, ast: 4.497, stl: 2.302, blk: 5.246, tpm: -0.668, fgImpact: -1.08, ftImpact: -2.603, to: 0.806 } },
          { name: "Skyy Clark", min: 35, pts: 4, reb: 3, ast: 5, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 8, ftm: 2, fta: 2, composite: -2.29, zScores: { pts: -0.54, reb: -0.053, ast: 1.842, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -2.323, ftImpact: 0.74, to: -0.094 } },
          { name: "Jordan Bender", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.39, zScores: { pts: -0.835, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.414, ftImpact: 0, to: 0.806 } },
          { name: "Michael Ruzic", min: 22, pts: 12, reb: 11, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 6, fga: 7, ftm: 0, fta: 0, composite: 6.09, zScores: { pts: 0.64, reb: 2.739, ast: -0.281, stl: -0.722, blk: 2.386, tpm: -0.668, fgImpact: 2.095, ftImpact: 0, to: -0.094 } },
          { name: "Gilad Levy", min: 3, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.69, zScores: { pts: -0.835, reb: -0.402, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.414, ftImpact: 0, to: 0.806 } },
          { name: "Abdi Bashir Jr.", min: 23, pts: 15, reb: 5, ast: 4, stl: 0, blk: 0, to: 3, tpm: 4, fgm: 4, fga: 10, ftm: 3, fta: 3, composite: 2.94, zScores: { pts: 1.083, reb: 0.645, ast: 1.311, stl: -0.722, blk: -0.475, tpm: 2.566, fgImpact: -0.689, ftImpact: 1.11, to: -1.893 } },
          { name: "Divine Ugochukwu", min: 21, pts: 10, reb: 5, ast: 1, stl: 2, blk: 1, to: 4, tpm: 0, fgm: 5, fga: 5, ftm: 0, fta: 0, composite: 1.57, zScores: { pts: 0.345, reb: 0.645, ast: -0.281, stl: 1.294, blk: 0.955, tpm: -0.668, fgImpact: 2.072, ftImpact: 0, to: -2.792 } }
        ]
      }
    },
      {
      id: "401920807",
      line: "Northern Kentucky Norse 67 @ Texas A&M Aggies 104 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NKU", name: "Northern Kentucky Norse", score: 67,
        players: [

        ]
      },
      home: {
        abbr: "TAMU", name: "Texas A&M Aggies", score: 104,
        players: [
          { name: "Jalen Shelley", min: 19, pts: 13, reb: 6, ast: 1, stl: 2, blk: 1, to: 1, tpm: 1, fgm: 5, fga: 10, ftm: 2, fta: 3, composite: 3.54, zScores: { pts: 0.788, reb: 0.994, ast: -0.281, stl: 1.294, blk: 0.955, tpm: 0.14, fgImpact: 0.117, ftImpact: -0.374, to: -0.094 } },
          { name: "Cade Phillips", min: 17, pts: 12, reb: 6, ast: 1, stl: 0, blk: 4, to: 0, tpm: 0, fgm: 6, fga: 8, ftm: 0, fta: 0, composite: 7.72, zScores: { pts: 0.64, reb: 0.994, ast: -0.281, stl: -0.722, blk: 5.246, tpm: -0.668, fgImpact: 1.704, ftImpact: 0, to: 0.806 } },
          { name: "Mackenzie Mgbako", min: 28, pts: 14, reb: 7, ast: 4, stl: 3, blk: 1, to: 1, tpm: 2, fgm: 5, fga: 13, ftm: 2, fta: 4, composite: 5.16, zScores: { pts: 0.935, reb: 1.343, ast: 1.311, stl: 2.302, blk: 0.955, tpm: 0.949, fgImpact: -1.057, ftImpact: -1.489, to: -0.094 } },
          { name: "PJ Haggerty", min: 19, pts: 10, reb: 2, ast: 3, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 6, ftm: 0, fta: 2, composite: 1.04, zScores: { pts: 0.345, reb: -0.402, ast: 0.78, stl: 1.294, blk: -0.475, tpm: 0.949, fgImpact: 0.876, ftImpact: -2.229, to: -0.094 } },
          { name: "Jordan Pope", min: 20, pts: 18, reb: 1, ast: 2, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 7, fga: 9, ftm: 1, fta: 1, composite: 6.9, zScores: { pts: 1.525, reb: -0.751, ast: 0.249, stl: 1.294, blk: -0.475, tpm: 1.757, fgImpact: 2.119, ftImpact: 0.37, to: 0.806 } },
          { name: "Josh Irving", min: 10, pts: 4, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -0.55, zScores: { pts: -0.54, reb: -0.402, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 0.829, ftImpact: 0, to: 0.806 } },
          { name: "Jamie Vinson", min: 8, pts: 1, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -3.86, zScores: { pts: -0.982, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: -0.744, to: 0.806 } },
          { name: "Chris McDermott", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Zach Clemence", min: 14, pts: 8, reb: 4, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 3, composite: 1.03, zScores: { pts: 0.05, reb: 0.296, ast: -0.812, stl: -0.722, blk: 2.386, tpm: -0.668, fgImpact: 0.07, ftImpact: -0.374, to: 0.806 } },
          { name: "Rylan Griffen", min: 16, pts: 8, reb: 2, ast: 2, stl: 2, blk: 0, to: 3, tpm: 2, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: 0.17, zScores: { pts: 0.05, reb: -0.402, ast: 0.249, stl: 1.294, blk: -0.475, tpm: 0.949, fgImpact: -0.344, ftImpact: 0.74, to: -1.893 } },
          { name: "Neiko Mundey", min: 10, pts: 4, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.72, zScores: { pts: -0.54, reb: -0.751, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0.438, ftImpact: 0, to: 0.806 } },
          { name: "Lukas Walls", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.53, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.782, ftImpact: 0, to: 0.806 } },
          { name: "Tyshawn Archie", min: 15, pts: 12, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 0.4, zScores: { pts: 0.64, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: 1.681, ftImpact: 0, to: -0.993 } },
          { name: "Jalen Reece", min: 15, pts: 0, reb: 1, ast: 3, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -1.21, zScores: { pts: -1.13, reb: -0.751, ast: 0.78, stl: 2.302, blk: -0.475, tpm: -0.668, fgImpact: -1.173, ftImpact: 0, to: -0.094 } },
          { name: "Jeremiah Green", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.49, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401920733",
      line: "Stony Brook Seawolves 65 @ Northwestern Wildcats 78 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "STBK", name: "Stony Brook Seawolves", score: 65,
        players: [

        ]
      },
      home: {
        abbr: "NW", name: "Northwestern Wildcats", score: 78,
        players: [
          { name: "Okku Federiko", min: 22, pts: 3, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 3, fta: 4, composite: -3.77, zScores: { pts: -0.687, reb: -0.053, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.782, ftImpact: -0.004, to: -0.094 } },
          { name: "Colin Smith", min: 20, pts: 6, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.07, zScores: { pts: -0.245, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: 0.438, ftImpact: 0, to: 0.806 } },
          { name: "Angelo Ciaravino", min: 38, pts: 8, reb: 7, ast: 1, stl: 2, blk: 4, to: 2, tpm: 0, fgm: 2, fga: 7, ftm: 4, fta: 5, composite: 5.23, zScores: { pts: 0.05, reb: 1.343, ast: -0.281, stl: 1.294, blk: 5.246, tpm: -0.668, fgImpact: -1.127, ftImpact: 0.366, to: -0.993 } },
          { name: "Jake West", min: 38, pts: 23, reb: 3, ast: 6, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 8, fga: 17, ftm: 3, fta: 4, composite: 4.75, zScores: { pts: 2.263, reb: -0.053, ast: 2.373, stl: -0.722, blk: -0.475, tpm: 2.566, fgImpact: -0.205, ftImpact: -0.004, to: -0.993 } },
          { name: "LA Pratt", min: 32, pts: 16, reb: 6, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 11, ftm: 4, fta: 4, composite: 5.25, zScores: { pts: 1.23, reb: 0.994, ast: 0.249, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: -0.274, ftImpact: 1.48, to: 0.806 } },
          { name: "Ryan Soulis", min: 21, pts: 8, reb: 7, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: 0.38, zScores: { pts: 0.05, reb: 1.343, ast: 0.249, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.852, ftImpact: 0.74, to: -0.993 } },
          { name: "Aleksej Kostic", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.39, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: -0.094 } },
          { name: "Phoenix Gill", min: 24, pts: 14, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 2.64, zScores: { pts: 0.935, reb: -0.053, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 2.566, fgImpact: 1.29, ftImpact: 0, to: -0.094 } }
        ]
      }
    },
      {
      id: "401919048",
      line: "Southern Jaguars 54 @ TCU Horned Frogs 106 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SOU", name: "Southern Jaguars", score: 54,
        players: [

        ]
      },
      home: {
        abbr: "TCU", name: "TCU Horned Frogs", score: 106,
        players: [
          { name: "DJ Thomas", min: 27, pts: 11, reb: 3, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 4, ftm: 7, fta: 7, composite: -0.49, zScores: { pts: 0.493, reb: -0.053, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0.047, ftImpact: 2.59, to: -1.893 } },
          { name: "Xavier Edmonds", min: 22, pts: 13, reb: 11, ast: 1, stl: 1, blk: 2, to: 3, tpm: 1, fgm: 5, fga: 10, ftm: 2, fta: 2, composite: 5.02, zScores: { pts: 0.788, reb: 2.739, ast: -0.281, stl: 0.286, blk: 2.386, tpm: 0.14, fgImpact: 0.117, ftImpact: 0.74, to: -1.893 } },
          { name: "Tanner Toolson", min: 25, pts: 13, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 8, ftm: 3, fta: 4, composite: 3.17, zScores: { pts: 0.788, reb: -0.053, ast: 0.78, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: 0.093, ftImpact: -0.004, to: 0.806 } },
          { name: "Brock Harding", min: 22, pts: 10, reb: 2, ast: 12, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 6.65, zScores: { pts: 0.345, reb: -0.402, ast: 5.559, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: 0.484, ftImpact: 0, to: -0.094 } },
          { name: "Micah Robinson", min: 25, pts: 18, reb: 2, ast: 3, stl: 3, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 6, ftm: 4, fta: 5, composite: 8.25, zScores: { pts: 1.525, reb: -0.402, ast: 0.78, stl: 2.302, blk: -0.475, tpm: 2.566, fgImpact: 1.681, ftImpact: 0.366, to: -0.094 } },
          { name: "Ryan Hunt", min: 19, pts: 7, reb: 5, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 1, fta: 2, composite: 0.24, zScores: { pts: -0.097, reb: 0.645, ast: -0.281, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 1.243, ftImpact: -0.744, to: -0.094 } },
          { name: "Milos Sojic", min: 8, pts: 5, reb: 3, ast: 0, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -1.79, zScores: { pts: -0.392, reb: -0.053, ast: -0.812, stl: 2.302, blk: -0.475, tpm: -0.668, fgImpact: 0.047, ftImpact: -0.744, to: -0.993 } },
          { name: "Jack Wegman", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.14, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } },
          { name: "Ricards Aizpurs", min: 12, pts: 7, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 3, fta: 3, composite: -1.69, zScores: { pts: -0.097, reb: -1.1, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.736, ftImpact: 1.11, to: 0.806 } },
          { name: "Trent Lincoln", min: 21, pts: 8, reb: 0, ast: 2, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 7, ftm: 3, fta: 4, composite: -0.17, zScores: { pts: 0.05, reb: -1.1, ast: 0.249, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: -1.127, ftImpact: -0.004, to: 0.806 } },
          { name: "Drew McElroy", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Gavin Sykes", min: 16, pts: 11, reb: 1, ast: 4, stl: 2, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 7, ftm: 5, fta: 5, composite: 5.78, zScores: { pts: 0.493, reb: -0.751, ast: 1.311, stl: 1.294, blk: 0.955, tpm: 0.949, fgImpact: -1.127, ftImpact: 1.85, to: 0.806 } },
          { name: "Gavin Murphy", min: 1, pts: 3, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.82, zScores: { pts: -0.687, reb: -1.1, ast: -0.812, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: 0.023, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401916304",
      line: "St. Thomas Tommies 62 @ Minnesota Golden Gophers 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "STMN", name: "St. Thomas Tommies", score: 62,
        players: [

        ]
      },
      home: {
        abbr: "Minn", name: "Minnesota Golden Gophers", score: 76,
        players: [
          { name: "Grayson Grove", min: 27, pts: 10, reb: 9, ast: 3, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 4, fta: 5, composite: 3.3, zScores: { pts: 0.345, reb: 2.041, ast: 0.78, stl: 0.286, blk: 0.955, tpm: -0.668, fgImpact: -0.712, ftImpact: 0.366, to: -0.094 } },
          { name: "Bobby Durkin", min: 34, pts: 5, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: -0.96, zScores: { pts: -0.392, reb: -0.402, ast: 0.78, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: -1.541, ftImpact: 0.74, to: -0.094 } },
          { name: "Jaylen Crocker-Johnson", min: 23, pts: 16, reb: 10, ast: 3, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 12, ftm: 4, fta: 4, composite: 3.97, zScores: { pts: 1.23, reb: 2.39, ast: 0.78, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: -0.666, ftImpact: 1.48, to: -0.993 } },
          { name: "Isaac Asuma", min: 37, pts: 20, reb: 6, ast: 2, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 6, fga: 10, ftm: 4, fta: 4, composite: 5.95, zScores: { pts: 1.82, reb: 0.994, ast: 0.249, stl: 0.286, blk: -0.475, tpm: 2.566, fgImpact: 0.922, ftImpact: 1.48, to: -1.893 } },
          { name: "Kyan Evans", min: 30, pts: 8, reb: 4, ast: 4, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 11, ftm: 1, fta: 1, composite: 0, zScores: { pts: 0.05, reb: 0.296, ast: 1.311, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: -1.886, ftImpact: 0.37, to: -0.094 } },
          { name: "Malick Kordel", min: 6, pts: 0, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.07, zScores: { pts: -1.13, reb: 0.296, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.094 } },
          { name: "Nolan Groves", min: 29, pts: 15, reb: 7, ast: 1, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 10, ftm: 4, fta: 6, composite: 2.18, zScores: { pts: 1.083, reb: 1.343, ast: -0.281, stl: 0.286, blk: -0.475, tpm: 1.757, fgImpact: -0.689, ftImpact: -0.749, to: -0.094 } },
          { name: "Cedric Tomes", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.78, zScores: { pts: -0.835, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.023, ftImpact: 0, to: 0.806 } },
          { name: "Malachi Palmer", min: 10, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.91, zScores: { pts: -1.13, reb: -0.053, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401909523",
      line: "Detroit Mercy Titans 32 @ Marquette Golden Eagles 93 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DETM", name: "Detroit Mercy Titans", score: 32,
        players: [

        ]
      },
      home: {
        abbr: "Marq", name: "Marquette Golden Eagles", score: 93,
        players: [
          { name: "Sananda Fru", min: 21, pts: 8, reb: 8, ast: 3, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 5.59, zScores: { pts: 0.05, reb: 1.692, ast: 0.78, stl: 0.286, blk: 0.955, tpm: 0.949, fgImpact: 0.07, ftImpact: 0, to: 0.806 } },
          { name: "Royce Parham", min: 20, pts: 12, reb: 7, ast: 2, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 10, ftm: 2, fta: 3, composite: 3.46, zScores: { pts: 0.64, reb: 1.343, ast: 0.249, stl: 1.294, blk: 0.955, tpm: -0.668, fgImpact: 0.117, ftImpact: -0.374, to: -0.094 } },
          { name: "Damarius Owens", min: 14, pts: 12, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 7, ftm: 1, fta: 2, composite: -0.63, zScores: { pts: 0.64, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 1.29, ftImpact: -0.744, to: 0.806 } },
          { name: "Adrien Stevens", min: 17, pts: 12, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 1.9, zScores: { pts: 0.64, reb: -0.053, ast: 0.249, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: 0.508, ftImpact: 0, to: 0.806 } },
          { name: "Nigel James Jr.", min: 22, pts: 5, reb: 2, ast: 8, stl: 4, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 1, fta: 1, composite: 4.35, zScores: { pts: -0.392, reb: -0.402, ast: 3.435, stl: 3.31, blk: -0.475, tpm: -0.668, fgImpact: -0.736, ftImpact: 0.37, to: -0.094 } },
          { name: "Braeden Brenn", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.14, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } },
          { name: "Joshua Clark", min: 20, pts: 8, reb: 8, ast: 1, stl: 1, blk: 3, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 6.58, zScores: { pts: 0.05, reb: 1.692, ast: -0.281, stl: 0.286, blk: 3.816, tpm: -0.668, fgImpact: 0.876, ftImpact: 0, to: 0.806 } },
          { name: "Alex Egbuonu", min: 16, pts: 16, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 7, fga: 11, ftm: 0, fta: 0, composite: 4.15, zScores: { pts: 1.23, reb: 0.296, ast: -0.281, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: 1.337, ftImpact: 0, to: 0.806 } },
          { name: "Michael Phillips II", min: 21, pts: 4, reb: 6, ast: 1, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 7, ftm: 1, fta: 2, composite: -0.32, zScores: { pts: -0.54, reb: 0.994, ast: -0.281, stl: 0.286, blk: 0.955, tpm: 0.14, fgImpact: -1.932, ftImpact: -0.744, to: 0.806 } },
          { name: "Ian Miletic", min: 6, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.9, zScores: { pts: -0.687, reb: -1.1, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.414, ftImpact: 0, to: 0.806 } },
          { name: "Colton Crowdis", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.06, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } },
          { name: "Nash Walker", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Ethan Johnston", min: 15, pts: 3, reb: 2, ast: 4, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 0.61, zScores: { pts: -0.687, reb: -0.402, ast: 1.311, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: -0.368, ftImpact: 0, to: 0.806 } },
          { name: "Nolan Minessale", min: 15, pts: 7, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: -0.92, zScores: { pts: -0.097, reb: -0.402, ast: -0.281, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: -0.736, ftImpact: 0.74, to: -0.094 } },
          { name: "Colin Porter", min: 9, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.34, zScores: { pts: -0.687, reb: -0.751, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -0.368, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401906802",
      line: "Mississippi Valley State Delta Devils 57 @ Oklahoma Sooners 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MVSU", name: "Mississippi Valley State Delta Devils", score: 57,
        players: [

        ]
      },
      home: {
        abbr: "Okla", name: "Oklahoma Sooners", score: 84,
        players: [
          { name: "Derrion Reid", min: 28, pts: 17, reb: 5, ast: 0, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 8, fga: 14, ftm: 0, fta: 0, composite: 3.94, zScores: { pts: 1.378, reb: 0.645, ast: -0.812, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: 0.969, ftImpact: 0, to: 0.806 } },
          { name: "Khani Rooths", min: 15, pts: 5, reb: 5, ast: 0, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -0.01, zScores: { pts: -0.392, reb: 0.645, ast: -0.812, stl: 0.286, blk: 0.955, tpm: 0.14, fgImpact: -0.736, ftImpact: 0, to: -0.094 } },
          { name: "Duke Brennan", min: 20, pts: 9, reb: 4, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 5, ftm: 3, fta: 4, composite: -2.61, zScores: { pts: 0.198, reb: 0.296, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0.461, ftImpact: -0.004, to: -1.893 } },
          { name: "Xzayvier Brown", min: 27, pts: 5, reb: 1, ast: 7, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -0.92, zScores: { pts: -0.392, reb: -0.751, ast: 2.904, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: -0.736, ftImpact: 0, to: -1.893 } },
          { name: "Pop Isaacs", min: 24, pts: 5, reb: 2, ast: 6, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 9, ftm: 0, fta: 0, composite: 0.54, zScores: { pts: -0.392, reb: -0.402, ast: 2.373, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: -1.909, ftImpact: 0, to: -0.094 } },
          { name: "Gage Mayfield", min: 11, pts: 4, reb: 4, ast: 1, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 1.71, zScores: { pts: -0.54, reb: 0.296, ast: -0.281, stl: -0.722, blk: 2.386, tpm: -0.668, fgImpact: 0.438, ftImpact: 0, to: 0.806 } },
          { name: "Kai Rogers", min: 9, pts: 2, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.93, zScores: { pts: -0.835, reb: -0.751, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0.414, ftImpact: 0, to: -0.094 } },
          { name: "Yaak Yaak", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.96, zScores: { pts: -0.835, reb: -1.1, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 0.414, ftImpact: 0, to: 0.806 } },
          { name: "Ben Moser", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.14, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } },
          { name: "Dayton Forsythe", min: 20, pts: 9, reb: 2, ast: 3, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.6, zScores: { pts: 0.198, reb: -0.402, ast: 0.78, stl: -0.722, blk: -0.475, tpm: 1.757, fgImpact: 0.461, ftImpact: 0, to: -0.993 } },
          { name: "Quincy Wadley", min: 13, pts: 8, reb: 7, ast: 4, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 4.18, zScores: { pts: 0.05, reb: 1.343, ast: 1.311, stl: 1.294, blk: -0.475, tpm: 0.949, fgImpact: -1.103, ftImpact: 0, to: 0.806 } },
          { name: "B.J. Edwards", min: 27, pts: 18, reb: 5, ast: 4, stl: 2, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 10, ftm: 2, fta: 2, composite: 9.33, zScores: { pts: 1.525, reb: 0.645, ast: 1.311, stl: 1.294, blk: -0.475, tpm: 2.566, fgImpact: 0.922, ftImpact: 0.74, to: 0.806 } },
          { name: "Tyler Hendricks", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.094 } }
        ]
      }
    },
      {
      id: "401922021",
      line: "Idaho State Bengals 62 @ Wyoming Cowboys 93 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "IDST", name: "Idaho State Bengals", score: 62,
        players: [

        ]
      },
      home: {
        abbr: "Wyo", name: "Wyoming Cowboys", score: 93,
        players: [
          { name: "Gavin Gores", min: 15, pts: 9, reb: 4, ast: 1, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 7, ftm: 1, fta: 1, composite: 0.65, zScores: { pts: 0.198, reb: 0.296, ast: -0.281, stl: 0.286, blk: 0.955, tpm: -0.668, fgImpact: 0.484, ftImpact: 0.37, to: -0.993 } },
          { name: "Mike Mora", min: 22, pts: 7, reb: 4, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 1.12, zScores: { pts: -0.097, reb: 0.296, ast: 0.78, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: 0.438, ftImpact: 0.74, to: -0.993 } },
          { name: "Nasir Meyer", min: 25, pts: 18, reb: 9, ast: 2, stl: 2, blk: 2, to: 1, tpm: 2, fgm: 6, fga: 10, ftm: 4, fta: 6, composite: 8.52, zScores: { pts: 1.525, reb: 2.041, ast: 0.249, stl: 1.294, blk: 2.386, tpm: 0.949, fgImpact: 0.922, ftImpact: -0.749, to: -0.094 } },
          { name: "Khaden Bennett", min: 29, pts: 13, reb: 6, ast: 0, stl: 0, blk: 1, to: 4, tpm: 0, fgm: 6, fga: 11, ftm: 1, fta: 1, composite: -1.36, zScores: { pts: 0.788, reb: 0.994, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 0.531, ftImpact: 0.37, to: -2.792 } },
          { name: "Parker Gerrits", min: 20, pts: 3, reb: 3, ast: 5, stl: 4, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: 1.28, zScores: { pts: -0.687, reb: -0.053, ast: 1.842, stl: 3.31, blk: -0.475, tpm: -0.668, fgImpact: -1.15, ftImpact: -0.744, to: -0.094 } },
          { name: "Chris Pohl", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Neil Summers", min: 10, pts: 6, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 4, composite: -2, zScores: { pts: -0.245, reb: -0.402, ast: -0.281, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 0.047, ftImpact: -1.489, to: 0.806 } },
          { name: "Renars Sondors", min: 14, pts: 14, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 3.78, zScores: { pts: 0.935, reb: 0.645, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 2.566, fgImpact: 0.093, ftImpact: 0.74, to: 0.806 } },
          { name: "Linus Ruf", min: 10, pts: 2, reb: 1, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -3.48, zScores: { pts: -0.835, reb: -0.751, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: -0.391, ftImpact: 0.74, to: -0.993 } },
          { name: "Mattia De Martin", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Kelan Gruver", min: 2, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.44, zScores: { pts: -0.687, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.414, ftImpact: 0, to: 0.806 } },
          { name: "Madden Smiley", min: 11, pts: 8, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 4, ftm: 0, fta: 0, composite: -0.28, zScores: { pts: 0.05, reb: -0.751, ast: -0.281, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 1.658, ftImpact: 0, to: -0.094 } },
          { name: "Uriyah Rojas", min: 21, pts: 6, reb: 8, ast: 2, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 2, fta: 4, composite: 1.47, zScores: { pts: -0.245, reb: 1.692, ast: 0.249, stl: 1.294, blk: 0.955, tpm: -0.668, fgImpact: -1.127, ftImpact: -1.489, to: 0.806 } },
          { name: "Canin Jefferson", min: 13, pts: 4, reb: 2, ast: 5, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 4, fta: 4, composite: 0.15, zScores: { pts: -0.54, reb: -0.402, ast: 1.842, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -1.173, ftImpact: 1.48, to: 0.806 } }
        ]
      }
    },
      {
      id: "401920726",
      line: "Eastern Illinois Panthers 47 @ Iowa Hawkeyes 91 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "EIU", name: "Eastern Illinois Panthers", score: 47,
        players: [

        ]
      },
      home: {
        abbr: "Iowa", name: "Iowa Hawkeyes", score: 91,
        players: [
          { name: "Cam Manyawu", min: 10, pts: 5, reb: 3, ast: 1, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 3, composite: -0.15, zScores: { pts: -0.392, reb: -0.053, ast: -0.281, stl: 1.294, blk: 0.955, tpm: -0.668, fgImpact: 0.047, ftImpact: -1.859, to: 0.806 } },
          { name: "Cooper Koch", min: 26, pts: 6, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 1, fta: 3, composite: -1.39, zScores: { pts: -0.245, reb: 0.296, ast: -0.812, stl: -0.722, blk: 0.955, tpm: 0.14, fgImpact: 0.047, ftImpact: -1.859, to: 0.806 } },
          { name: "Tate Sage", min: 18, pts: 10, reb: 5, ast: 2, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: -0.09, zScores: { pts: 0.345, reb: 0.645, ast: 0.249, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: 0.07, ftImpact: 0.74, to: -1.893 } },
          { name: "Isaia Howard", min: 20, pts: 7, reb: 5, ast: 0, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 2.46, zScores: { pts: -0.097, reb: 0.645, ast: -0.812, stl: 2.302, blk: -0.475, tpm: 0.14, fgImpact: 0.852, ftImpact: 0, to: -0.094 } },
          { name: "Kael Combs", min: 16, pts: 2, reb: 1, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -2.02, zScores: { pts: -0.835, reb: -0.751, ast: 0.78, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0.74, to: -0.094 } },
          { name: "Trey Thompson", min: 13, pts: 11, reb: 2, ast: 2, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 4.6, zScores: { pts: 0.493, reb: -0.402, ast: 0.249, stl: 1.294, blk: -0.475, tpm: 1.757, fgImpact: 0.876, ftImpact: 0, to: 0.806 } },
          { name: "Joey Matteoni", min: 8, pts: 0, reb: 4, ast: 2, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.43, zScores: { pts: -1.13, reb: 0.296, ast: 0.249, stl: 1.294, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.993 } },
          { name: "Trevin Jirak", min: 21, pts: 8, reb: 7, ast: 8, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 3.7, zScores: { pts: 0.05, reb: 1.343, ast: 3.435, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 0.461, ftImpact: 0.74, to: -1.893 } },
          { name: "Jaidyn Coon", min: 17, pts: 7, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: -1.18, zScores: { pts: -0.097, reb: -0.751, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 0.852, ftImpact: -0.744, to: 0.806 } },
          { name: "Ty'Reek Coleman", min: 22, pts: 13, reb: 2, ast: 6, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 5, ftm: 2, fta: 3, composite: 3.52, zScores: { pts: 0.788, reb: -0.402, ast: 2.373, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: 2.072, ftImpact: -0.374, to: -1.893 } },
          { name: "Peyton McCollum", min: 21, pts: 14, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 2.05, zScores: { pts: 0.935, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 2.566, fgImpact: 0.508, ftImpact: 0, to: 0.806 } },
          { name: "Ethan Harris", min: 5, pts: 3, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.58, zScores: { pts: -0.687, reb: -0.053, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.023, ftImpact: 0, to: -0.993 } },
          { name: "Jacob Koch", min: 3, pts: 5, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.59, zScores: { pts: -0.392, reb: -1.1, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.438, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401917914",
      line: "Central Arkansas Bears 60 @ Ole Miss Rebels 92 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CARK", name: "Central Arkansas Bears", score: 60,
        players: [

        ]
      },
      home: {
        abbr: "Miss", name: "Ole Miss Rebels", score: 92,
        players: [
          { name: "Roman Siulepa", min: 22, pts: 4, reb: 7, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 9, ftm: 0, fta: 0, composite: -1.38, zScores: { pts: -0.54, reb: 1.343, ast: 0.249, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: -1.909, ftImpact: 0, to: -0.094 } },
          { name: "Ilias Kamardine", min: 21, pts: 3, reb: 4, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.01, zScores: { pts: -0.687, reb: 0.296, ast: 0.78, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -1.15, ftImpact: 0, to: 0.806 } },
          { name: "Adam Clark", min: 30, pts: 13, reb: 4, ast: 6, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 14, ftm: 0, fta: 0, composite: 2.67, zScores: { pts: 0.788, reb: 0.296, ast: 2.373, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: -0.642, ftImpact: 0, to: -0.094 } },
          { name: "Corey Stephenson", min: 19, pts: 11, reb: 7, ast: 0, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: -0.8, zScores: { pts: 0.493, reb: 1.343, ast: -0.812, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: 0.117, ftImpact: 0, to: -1.893 } },
          { name: "Patton Pinkins", min: 27, pts: 19, reb: 1, ast: 2, stl: 3, blk: 1, to: 0, tpm: 4, fgm: 7, fga: 8, ftm: 1, fta: 1, composite: 10.68, zScores: { pts: 1.673, reb: -0.751, ast: 0.249, stl: 2.302, blk: 0.955, tpm: 2.566, fgImpact: 2.51, ftImpact: 0.37, to: 0.806 } },
          { name: "Daniel Patton", min: 4, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.57, zScores: { pts: -1.13, reb: -1.1, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Christian Brown", min: 12, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 3, composite: -3.15, zScores: { pts: -0.245, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.438, ftImpact: -0.374, to: 0.806 } },
          { name: "Santiago Trouet", min: 19, pts: 8, reb: 7, ast: 2, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 4.75, zScores: { pts: 0.05, reb: 1.343, ast: 0.249, stl: 0.286, blk: 2.386, tpm: -0.668, fgImpact: 0.461, ftImpact: 0.74, to: -0.094 } },
          { name: "Dasear Haskins", min: 4, pts: 1, reb: 0, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -3.13, zScores: { pts: -0.982, reb: -1.1, ast: -0.281, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: -0.391, ftImpact: -0.744, to: 0.806 } },
          { name: "Stefan Cicic", min: 4, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.33, zScores: { pts: -0.54, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.829, ftImpact: 0, to: 0.806 } },
          { name: "Ben Henshall", min: 20, pts: 13, reb: 1, ast: 3, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 8, ftm: 3, fta: 3, composite: 3.69, zScores: { pts: 0.788, reb: -0.751, ast: 0.78, stl: 1.294, blk: -0.475, tpm: 0.949, fgImpact: 0.093, ftImpact: 1.11, to: -0.094 } },
          { name: "Zach Day", min: 6, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.13, reb: -0.751, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.094 } },
          { name: "Jaron Saulsberry", min: 4, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 1, composite: -4.19, zScores: { pts: -0.54, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.438, ftImpact: -1.114, to: 0.806 } },
          { name: "Yohance Connor", min: 8, pts: 6, reb: 1, ast: 1, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: 0.57, zScores: { pts: -0.245, reb: -0.751, ast: -0.281, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: 0.829, ftImpact: -0.744, to: 0.806 } }
        ]
      }
    },
      {
      id: "401922261",
      line: "Idaho Vandals 67 @ Colorado State Rams 78 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "IDHO", name: "Idaho Vandals", score: 67,
        players: [

        ]
      },
      home: {
        abbr: "ColSt", name: "Colorado State Rams", score: 78,
        players: [
          { name: "Kyle Jorgensen", min: 32, pts: 19, reb: 4, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 8, fga: 15, ftm: 3, fta: 4, composite: 0.83, zScores: { pts: 1.673, reb: 0.296, ast: -0.281, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 0.578, ftImpact: -0.004, to: -0.993 } },
          { name: "Carey Booth", min: 31, pts: 13, reb: 10, ast: 0, stl: 1, blk: 3, to: 0, tpm: 3, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 9.15, zScores: { pts: 0.788, reb: 2.39, ast: -0.812, stl: 0.286, blk: 3.816, tpm: 1.757, fgImpact: 0.117, ftImpact: 0, to: 0.806 } },
          { name: "Justin Menard", min: 32, pts: 8, reb: 4, ast: 4, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 0.49, zScores: { pts: 0.05, reb: 0.296, ast: 1.311, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: 0.07, ftImpact: 0, to: -0.993 } },
          { name: "Josh Pascarelli", min: 35, pts: 0, reb: 3, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -1.15, zScores: { pts: -1.13, reb: -0.053, ast: 0.249, stl: 1.294, blk: -0.475, tpm: -0.668, fgImpact: -1.173, ftImpact: 0, to: 0.806 } },
          { name: "Jase Butler", min: 31, pts: 19, reb: 6, ast: 6, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 11, ftm: 6, fta: 9, composite: 5.31, zScores: { pts: 1.673, reb: 0.994, ast: 2.373, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: 0.531, ftImpact: -1.123, to: -0.094 } },
          { name: "Jaden Ghoreishi", min: 14, pts: 6, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -1.22, zScores: { pts: -0.245, reb: 0.296, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.07, ftImpact: 0, to: 0.806 } },
          { name: "Rashaan Mbemba", min: 8, pts: 7, reb: 3, ast: 1, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -1.88, zScores: { pts: -0.097, reb: -0.053, ast: -0.281, stl: -0.722, blk: 0.955, tpm: 0.14, fgImpact: 0.07, ftImpact: 0, to: -1.893 } },
          { name: "Amondo Miller Jr.", min: 4, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.33, zScores: { pts: -0.54, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.829, ftImpact: 0, to: 0.806 } },
          { name: "Pops Dunson", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Jojo McIver", min: 8, pts: 2, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -2.1, zScores: { pts: -0.835, reb: -0.751, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0.74, to: 0.806 } }
        ]
      }
    },
      {
      id: "401921732",
      line: "Northern Colorado Bears 63 @ Arizona State Sun Devils 90 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UNCO", name: "Northern Colorado Bears", score: 63,
        players: [

        ]
      },
      home: {
        abbr: "AzSt", name: "Arizona State Sun Devils", score: 90,
        players: [
          { name: "Paulius Murauskas", min: 33, pts: 33, reb: 5, ast: 2, stl: 2, blk: 0, to: 3, tpm: 2, fgm: 13, fga: 18, ftm: 5, fta: 7, composite: 7.56, zScores: { pts: 3.738, reb: 0.645, ast: 0.249, stl: 1.294, blk: -0.475, tpm: 0.949, fgImpact: 3.432, ftImpact: -0.379, to: -1.893 } },
          { name: "Ben Defty", min: 13, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -2.02, zScores: { pts: -0.245, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.852, ftImpact: 0, to: 0.806 } },
          { name: "JRob Croy", min: 21, pts: 8, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -1.32, zScores: { pts: 0.05, reb: -0.402, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: -0.712, ftImpact: 0, to: 0.806 } },
          { name: "Joel Foxwell", min: 32, pts: 7, reb: 3, ast: 8, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 10, ftm: 2, fta: 2, composite: 4.92, zScores: { pts: -0.097, reb: -0.053, ast: 3.435, stl: 1.294, blk: 0.955, tpm: 0.14, fgImpact: -2.3, ftImpact: 0.74, to: 0.806 } },
          { name: "Dillan Shaw", min: 37, pts: 8, reb: 12, ast: 2, stl: 2, blk: 2, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 6.4, zScores: { pts: 0.05, reb: 3.088, ast: 0.249, stl: 1.294, blk: 2.386, tpm: -0.668, fgImpact: 0.093, ftImpact: 0, to: -0.094 } },
          { name: "Ajak Nyuon", min: 6, pts: 0, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.86, zScores: { pts: -1.13, reb: -0.402, ast: -0.281, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Filip Malesevic", min: 24, pts: 6, reb: 11, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 4, composite: 1.16, zScores: { pts: -0.245, reb: 2.739, ast: 0.249, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 0.438, ftImpact: -1.489, to: -0.094 } },
          { name: "Nate Garcia", min: 3, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.38, zScores: { pts: -0.835, reb: -1.1, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0.414, ftImpact: 0, to: 0.806 } },
          { name: "Jokubas Rudaitis", min: 6, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 1, composite: -4.55, zScores: { pts: -0.835, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.023, ftImpact: -1.114, to: 0.806 } },
          { name: "Vijay Wallace", min: 3, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.7, zScores: { pts: -0.982, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: -0.744, to: 0.806 } },
          { name: "Bryce Ford", min: 22, pts: 17, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 6, fga: 11, ftm: 3, fta: 3, composite: 2.89, zScores: { pts: 1.378, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: 0.531, ftImpact: 1.11, to: 0.806 } }
        ]
      }
    },
      {
      id: "401919040",
      line: "Queens University Royals 68 @ Oklahoma State Cowboys 118 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "QUC", name: "Queens University Royals", score: 68,
        players: [

        ]
      },
      home: {
        abbr: "OkSt", name: "Oklahoma State Cowboys", score: 118,
        players: [
          { name: "Jordan Burks", min: 23, pts: 11, reb: 7, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 8, ftm: 1, fta: 2, composite: 0.76, zScores: { pts: 0.493, reb: 1.343, ast: -0.281, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0.899, ftImpact: -0.744, to: -0.094 } },
          { name: "Julius Halaifonua", min: 15, pts: 13, reb: 3, ast: 0, stl: 1, blk: 3, to: 0, tpm: 2, fgm: 5, fga: 6, ftm: 1, fta: 2, composite: 6.72, zScores: { pts: 0.788, reb: -0.053, ast: -0.812, stl: 0.286, blk: 3.816, tpm: 0.949, fgImpact: 1.681, ftImpact: -0.744, to: 0.806 } },
          { name: "Anthony Felesi", min: 22, pts: 9, reb: 2, ast: 3, stl: 3, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 3, fta: 3, composite: 6.46, zScores: { pts: 0.198, reb: -0.402, ast: 0.78, stl: 2.302, blk: 2.386, tpm: -0.668, fgImpact: 0.852, ftImpact: 1.11, to: -0.094 } },
          { name: "Jacob Walker", min: 21, pts: 7, reb: 4, ast: 9, stl: 1, blk: 0, to: 5, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 0.49, zScores: { pts: -0.097, reb: 0.296, ast: 3.966, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: 0.07, ftImpact: 0, to: -3.692 } },
          { name: "Kashie Natt", min: 14, pts: 4, reb: 5, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 2, composite: -2.5, zScores: { pts: -0.54, reb: 0.645, ast: 1.311, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.736, ftImpact: -2.229, to: -0.094 } },
          { name: "Latrell Allmond", min: 18, pts: 12, reb: 6, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 4, fta: 4, composite: 3.82, zScores: { pts: 0.64, reb: 0.994, ast: 0.78, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0.876, ftImpact: 1.48, to: -0.094 } },
          { name: "Andrija Grbovic", min: 17, pts: 17, reb: 5, ast: 1, stl: 1, blk: 0, to: 1, tpm: 5, fgm: 6, fga: 8, ftm: 0, fta: 0, composite: 6.54, zScores: { pts: 1.378, reb: 0.645, ast: -0.281, stl: 0.286, blk: -0.475, tpm: 3.375, fgImpact: 1.704, ftImpact: 0, to: -0.094 } },
          { name: "Benjamin Ahmed", min: 14, pts: 4, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -1.43, zScores: { pts: -0.54, reb: -0.402, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.368, ftImpact: 0.74, to: 0.806 } },
          { name: "Luka Bogavac", min: 16, pts: 8, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 0.44, zScores: { pts: 0.05, reb: -1.1, ast: 0.249, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: -0.321, ftImpact: 0, to: 0.806 } },
          { name: "Ryan Crotty", min: 11, pts: 10, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 7, ftm: 1, fta: 2, composite: -0.77, zScores: { pts: 0.345, reb: 0.296, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 1.757, fgImpact: -0.321, ftImpact: -0.744, to: -0.094 } },
          { name: "Parker Robinson", min: 16, pts: 14, reb: 0, ast: 3, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 5, ftm: 2, fta: 2, composite: 3.19, zScores: { pts: 0.935, reb: -1.1, ast: 0.78, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: 2.072, ftImpact: 0.74, to: -0.993 } },
          { name: "Jalen Montonati", min: 7, pts: 9, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 1.36, zScores: { pts: 0.198, reb: -0.053, ast: -0.812, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: 1.267, ftImpact: 0, to: 0.806 } },
          { name: "Kanye Clary", min: 6, pts: 0, reb: 0, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.98, zScores: { pts: -1.13, reb: -1.1, ast: 1.311, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401909797",
      line: "Cal State Northridge Matadors 78 @ Kansas State Wildcats 95 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CSUN", name: "Cal State Northridge Matadors", score: 78,
        players: [

        ]
      },
      home: {
        abbr: "KSU", name: "Kansas State Wildcats", score: 95,
        players: [
          { name: "Dez Lindsay", min: 15, pts: 7, reb: 3, ast: 3, stl: 2, blk: 1, to: 3, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 0.41, zScores: { pts: -0.097, reb: -0.053, ast: 0.78, stl: 1.294, blk: 0.955, tpm: 0.14, fgImpact: -0.712, ftImpact: 0, to: -1.893 } },
          { name: "Pape N'Diaye", min: 11, pts: 2, reb: 4, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.36, zScores: { pts: -0.835, reb: 0.296, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 0.414, ftImpact: 0, to: -0.993 } },
          { name: "Isaiah Abraham", min: 32, pts: 8, reb: 5, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 4, fta: 6, composite: -1.74, zScores: { pts: 0.05, reb: 0.645, ast: 0.78, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -1.518, ftImpact: -0.749, to: -0.094 } },
          { name: "Brandon Rechsteiner", min: 32, pts: 26, reb: 3, ast: 5, stl: 1, blk: 0, to: 4, tpm: 6, fgm: 8, fga: 17, ftm: 4, fta: 4, composite: 6.97, zScores: { pts: 2.705, reb: -0.053, ast: 1.842, stl: 0.286, blk: -0.475, tpm: 4.183, fgImpact: -0.205, ftImpact: 1.48, to: -2.792 } },
          { name: "Jaden Schutt", min: 28, pts: 9, reb: 5, ast: 4, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 3.81, zScores: { pts: 0.198, reb: 0.645, ast: 1.311, stl: 1.294, blk: -0.475, tpm: 1.757, fgImpact: 0.07, ftImpact: 0, to: -0.993 } },
          { name: "Devin Hutcherson", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.094 } },
          { name: "Matt Gilhool", min: 17, pts: 12, reb: 4, ast: 1, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 3, fga: 4, ftm: 4, fta: 7, composite: 0.73, zScores: { pts: 0.64, reb: 0.296, ast: -0.281, stl: -0.722, blk: 0.955, tpm: 0.949, fgImpact: 0.852, ftImpact: -1.863, to: -0.094 } },
          { name: "Brock Vice", min: 17, pts: 8, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 1, composite: -1.15, zScores: { pts: 0.05, reb: -0.402, ast: -0.812, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: 0.461, ftImpact: -1.114, to: -0.094 } },
          { name: "JT Rock", min: 10, pts: 3, reb: 5, ast: 1, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: 1.37, zScores: { pts: -0.687, reb: 0.645, ast: -0.281, stl: 0.286, blk: 2.386, tpm: -0.668, fgImpact: -0.368, ftImpact: -0.744, to: 0.806 } },
          { name: "Jaylen Alexander", min: 12, pts: 8, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 3, ftm: 0, fta: 2, composite: -0.77, zScores: { pts: 0.05, reb: -0.751, ast: 0.249, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: 1.243, ftImpact: -2.229, to: -0.094 } },
          { name: "Andrej Kostic", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Montana Wheeler", min: 19, pts: 12, reb: 2, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 8, ftm: 3, fta: 3, composite: 1.97, zScores: { pts: 0.64, reb: -0.402, ast: 0.78, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.093, ftImpact: 1.11, to: 0.806 } }
        ]
      }
    },
      {
      id: "401920952",
      line: "Southern Illinois Salukis 93 @ Kansas City Roos 100 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SIU", name: "Southern Illinois Salukis", score: 93,
        players: [
          { name: "Max Pikaar", min: 25, pts: 9, reb: 8, ast: 3, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 4.83, zScores: { pts: 0.198, reb: 1.692, ast: 0.78, stl: 0.286, blk: 0.955, tpm: 0.14, fgImpact: 0.876, ftImpact: 0, to: -0.094 } },
          { name: "Jaheem Webber", min: 19, pts: 10, reb: 2, ast: 0, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 7, ftm: 2, fta: 3, composite: -1.18, zScores: { pts: 0.345, reb: -0.402, ast: -0.812, stl: 0.286, blk: 0.955, tpm: -0.668, fgImpact: 0.484, ftImpact: -0.374, to: -0.993 } },
          { name: "Damien Mayo Jr.", min: 31, pts: 14, reb: 3, ast: 3, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 2.24, zScores: { pts: 0.935, reb: -0.053, ast: 0.78, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: 0.922, ftImpact: 0, to: -0.094 } },
          { name: "Jeremiah Jackson", min: 34, pts: 18, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 7, fga: 13, ftm: 0, fta: 0, composite: 3.31, zScores: { pts: 1.525, reb: -0.402, ast: 0.249, stl: 0.286, blk: -0.475, tpm: 2.566, fgImpact: 0.554, ftImpact: 0, to: -0.993 } },
          { name: "Jalen Haynes", min: 33, pts: 32, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 10, fga: 23, ftm: 11, fta: 12, composite: 3.22, zScores: { pts: 3.59, reb: -0.053, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -0.94, ftImpact: 2.956, to: -0.993 } },
          { name: "Luke Susko", min: 13, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 4, composite: -4.32, zScores: { pts: -0.54, reb: -0.053, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.368, ftImpact: -1.489, to: 0.806 } },
          { name: "Jaxson Fugate", min: 15, pts: 4, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 3, composite: -1.04, zScores: { pts: -0.54, reb: 0.296, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 0.023, ftImpact: -0.374, to: 0.806 } },
          { name: "Luke Walsh", min: 15, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.96, zScores: { pts: -1.13, reb: -1.1, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } },
          { name: "Caden Hawkins", min: 5, pts: 0, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.43, zScores: { pts: -1.13, reb: -1.1, ast: 0.249, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } },
          { name: "Brock McClure", min: 10, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -3.27, zScores: { pts: -0.835, reb: -0.402, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0.74, to: -0.094 } }
        ]
      },
      home: {
        abbr: "KC", name: "Kansas City Roos", score: 100,
        players: [

        ]
      }
    },
      {
      id: "401929356",
      line: "UT Arlington Mavericks 89 @ Portland Pilots 85 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UTA", name: "UT Arlington Mavericks", score: 89,
        players: [

        ]
      },
      home: {
        abbr: "Portl", name: "Portland Pilots", score: 85,
        players: [
          { name: "James O'Donnell", min: 31, pts: 12, reb: 6, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 8, ftm: 4, fta: 8, composite: -3.49, zScores: { pts: 0.64, reb: 0.994, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 0.093, ftImpact: -2.977, to: -0.993 } },
          { name: "Dante Censori-Hercules", min: 14, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.47, zScores: { pts: -1.13, reb: -1.1, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.094 } },
          { name: "Riley Parker", min: 26, pts: 18, reb: 4, ast: 3, stl: 1, blk: 0, to: 7, tpm: 4, fgm: 6, fga: 10, ftm: 2, fta: 2, composite: 1.15, zScores: { pts: 1.525, reb: 0.296, ast: 0.78, stl: 0.286, blk: -0.475, tpm: 2.566, fgImpact: 0.922, ftImpact: 0.74, to: -5.491 } },
          { name: "Jaxon Olvera", min: 26, pts: 5, reb: 6, ast: 2, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 6, ftm: 1, fta: 3, composite: -5.39, zScores: { pts: -0.392, reb: 0.994, ast: 0.249, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.736, ftImpact: -1.859, to: -2.792 } },
          { name: "Hunter Adam", min: 35, pts: 18, reb: 4, ast: 1, stl: 0, blk: 1, to: 2, tpm: 5, fgm: 5, fga: 10, ftm: 3, fta: 4, composite: 4.27, zScores: { pts: 1.525, reb: 0.296, ast: -0.281, stl: -0.722, blk: 0.955, tpm: 3.375, fgImpact: 0.117, ftImpact: -0.004, to: -0.993 } },
          { name: "Timo George", min: 24, pts: 7, reb: 5, ast: 0, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: -1.36, zScores: { pts: -0.097, reb: 0.645, ast: -0.812, stl: 0.286, blk: 0.955, tpm: -0.668, fgImpact: 0.07, ftImpact: -0.744, to: -0.993 } },
          { name: "Vito Perkovic", min: 6, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.79, zScores: { pts: -1.13, reb: -0.402, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: 0.806 } },
          { name: "Kaia Isaac", min: 14, pts: 0, reb: 0, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 1, composite: -4.91, zScores: { pts: -1.13, reb: -1.1, ast: 0.78, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: -1.114, to: -0.094 } },
          { name: "RJ Nance Jr.", min: 24, pts: 25, reb: 1, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 9, fga: 13, ftm: 5, fta: 7, composite: 5.04, zScores: { pts: 2.558, reb: -0.751, ast: 0.78, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: 2.165, ftImpact: -0.379, to: -0.094 } }
        ]
      }
    },
      {
      id: "401920344",
      line: "California Baptist Lancers 68 @ Oregon State Beavers 96 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CBU", name: "California Baptist Lancers", score: 68,
        players: [

        ]
      },
      home: {
        abbr: "OrSt", name: "Oregon State Beavers", score: 96,
        players: [
          { name: "DeShawn Gory", min: 25, pts: 18, reb: 4, ast: 3, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 8, fga: 13, ftm: 0, fta: 0, composite: 2.72, zScores: { pts: 1.525, reb: 0.296, ast: 0.78, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: 1.36, ftImpact: 0, to: -0.993 } },
          { name: "Xavion Staton", min: 28, pts: 8, reb: 6, ast: 5, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 4.46, zScores: { pts: 0.05, reb: 0.994, ast: 1.842, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 0.461, ftImpact: 0.74, to: 0.806 } },
          { name: "Dennis Evans", min: 9, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.54, zScores: { pts: -0.54, reb: -0.053, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.829, ftImpact: 0, to: -0.094 } },
          { name: "Josiah Lake II", min: 26, pts: 15, reb: 4, ast: 4, stl: 3, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 7, ftm: 2, fta: 2, composite: 9.11, zScores: { pts: 1.083, reb: 0.296, ast: 1.311, stl: 2.302, blk: -0.475, tpm: 1.757, fgImpact: 1.29, ftImpact: 0.74, to: 0.806 } },
          { name: "Daniel Freitag", min: 21, pts: 9, reb: 4, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 11, ftm: 4, fta: 4, composite: 0.82, zScores: { pts: 0.198, reb: 0.296, ast: 0.78, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: -2.691, ftImpact: 1.48, to: 0.806 } },
          { name: "Kahu Treacher", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.75, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Peteris Pinnis", min: 7, pts: 0, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.24, zScores: { pts: -1.13, reb: -0.402, ast: 0.249, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.094 } },
          { name: "Jackson Rasmussen", min: 10, pts: 7, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.18, zScores: { pts: -0.097, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.852, ftImpact: 0, to: 0.806 } },
          { name: "Jemai Lake", min: 18, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -4.96, zScores: { pts: -0.54, reb: -0.402, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.344, ftImpact: 0, to: -0.993 } },
          { name: "Chris Johnson", min: 24, pts: 10, reb: 3, ast: 1, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 2.68, zScores: { pts: 0.345, reb: -0.053, ast: -0.281, stl: 1.294, blk: -0.475, tpm: 0.949, fgImpact: 0.093, ftImpact: 0, to: 0.806 } },
          { name: "Legend Smiley", min: 30, pts: 21, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 9, fga: 13, ftm: 0, fta: 0, composite: 6.05, zScores: { pts: 1.968, reb: 0.296, ast: 0.249, stl: -0.722, blk: -0.475, tpm: 1.757, fgImpact: 2.165, ftImpact: 0, to: 0.806 } }
        ]
      }
    },
      {
      id: "401917515",
      line: "Tarleton State Texans 90 @ San Diego Toreros 96 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "TAR", name: "Tarleton State Texans", score: 90,
        players: [

        ]
      },
      home: {
        abbr: "USD", name: "San Diego Toreros", score: 96,
        players: [
          { name: "Sekou Konneh", min: 19, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 5, fta: 8, composite: -5.61, zScores: { pts: -0.392, reb: -0.053, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: -1.493, to: -0.993 } },
          { name: "Jevon Hill", min: 33, pts: 18, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 6, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 5.17, zScores: { pts: 1.525, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: 4.183, fgImpact: 0.531, ftImpact: 0, to: 0.806 } },
          { name: "Davion Hill", min: 29, pts: 16, reb: 4, ast: 4, stl: 0, blk: 0, to: 5, tpm: 0, fgm: 3, fga: 11, ftm: 10, fta: 10, composite: -0.9, zScores: { pts: 1.23, reb: 0.296, ast: 1.311, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -1.886, ftImpact: 3.7, to: -3.692 } },
          { name: "Marqui Worthy Jr.", min: 20, pts: 10, reb: 2, ast: 3, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 0.08, zScores: { pts: 0.345, reb: -0.402, ast: 0.78, stl: -0.722, blk: -0.475, tpm: 0.949, fgImpact: -0.298, ftImpact: 0, to: -0.094 } },
          { name: "Dusty Stromer", min: 39, pts: 22, reb: 3, ast: 1, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 12, ftm: 12, fta: 12, composite: 7.32, zScores: { pts: 2.115, reb: -0.053, ast: -0.281, stl: 1.294, blk: -0.475, tpm: 0.949, fgImpact: -1.471, ftImpact: 4.44, to: 0.806 } },
          { name: "Brannon Martinsen", min: 10, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -1.4, zScores: { pts: -0.392, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.414, ftImpact: 0.74, to: 0.806 } },
          { name: "Antonio Munoz", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Terry McMorris", min: 20, pts: 0, reb: 9, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 7, ftm: 0, fta: 0, composite: -2.27, zScores: { pts: -1.13, reb: 2.041, ast: -0.812, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: -2.738, ftImpact: 0, to: 0.806 } },
          { name: "Jose Roberto Tanchyn", min: 22, pts: 7, reb: 9, ast: 4, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 1.89, zScores: { pts: -0.097, reb: 2.041, ast: 1.311, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: -0.321, ftImpact: 0, to: -0.993 } },
          { name: "Braylon Roman", min: 4, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.57, zScores: { pts: -1.13, reb: -1.1, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Chace Holley", min: 26, pts: 13, reb: 2, ast: 4, stl: 3, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 5, fta: 7, composite: 4.3, zScores: { pts: 0.788, reb: -0.402, ast: 1.311, stl: 2.302, blk: 0.955, tpm: -0.668, fgImpact: 0.484, ftImpact: -0.379, to: -0.094 } }
        ]
      }
    },
      {
      id: "401921727",
      line: "Oakland Golden Grizzlies 63 @ Stanford Cardinal 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OAK", name: "Oakland Golden Grizzlies", score: 63,
        players: [

        ]
      },
      home: {
        abbr: "Stan", name: "Stanford Cardinal", score: 81,
        players: [
          { name: "Aidan Cammann", min: 23, pts: 13, reb: 2, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 7, ftm: 3, fta: 3, composite: 3.46, zScores: { pts: 0.788, reb: -0.402, ast: -0.281, stl: 1.294, blk: -0.475, tpm: -0.668, fgImpact: 1.29, ftImpact: 1.11, to: 0.806 } },
          { name: "Nick Townsend", min: 37, pts: 25, reb: 8, ast: 4, stl: 4, blk: 1, to: 3, tpm: 1, fgm: 8, fga: 11, ftm: 8, fta: 9, composite: 12.06, zScores: { pts: 2.558, reb: 1.692, ast: 1.311, stl: 3.31, blk: 0.955, tpm: 0.14, fgImpact: 2.142, ftImpact: 1.846, to: -1.893 } },
          { name: "Aziz Olajuwon", min: 22, pts: 6, reb: 6, ast: 1, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 2, fga: 9, ftm: 0, fta: 0, composite: -0.35, zScores: { pts: -0.245, reb: 0.994, ast: -0.281, stl: -0.722, blk: 0.955, tpm: 0.949, fgImpact: -1.909, ftImpact: 0, to: -0.094 } },
          { name: "Isaiah Rogers", min: 25, pts: 6, reb: 0, ast: 1, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -1.05, zScores: { pts: -0.245, reb: -1.1, ast: -0.281, stl: 0.286, blk: 0.955, tpm: 0.949, fgImpact: -1.518, ftImpact: 0, to: -0.094 } },
          { name: "Julius Price", min: 34, pts: 8, reb: 5, ast: 4, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 4, fga: 12, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: 0.05, reb: 0.645, ast: 1.311, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -1.471, ftImpact: 0, to: -2.792 } },
          { name: "Evan Stinson", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.39, zScores: { pts: -0.835, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.414, ftImpact: 0, to: 0.806 } },
          { name: "Austin Maurer", min: 19, pts: 4, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.19, zScores: { pts: -0.54, reb: 0.645, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.047, ftImpact: 0, to: 0.806 } },
          { name: "Anthony Batson Jr.", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.53, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.782, ftImpact: 0, to: 0.806 } },
          { name: "Christian Bliss", min: 30, pts: 17, reb: 8, ast: 1, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 5, fga: 8, ftm: 3, fta: 3, composite: 6.18, zScores: { pts: 1.378, reb: 1.692, ast: -0.281, stl: 0.286, blk: -0.475, tpm: 2.566, fgImpact: 0.899, ftImpact: 1.11, to: -0.993 } }
        ]
      }
    },
      {
      id: "401921061",
      line: "North Dakota State Bison 70 @ San Francisco Dons 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NDSU", name: "North Dakota State Bison", score: 70,
        players: [

        ]
      },
      home: {
        abbr: "USF", name: "San Francisco Dons", score: 79,
        players: [
          { name: "Gustav Knudsen", min: 25, pts: 9, reb: 2, ast: 3, stl: 1, blk: 3, to: 2, tpm: 2, fgm: 3, fga: 5, ftm: 1, fta: 4, composite: 2.12, zScores: { pts: 0.198, reb: -0.402, ast: 0.78, stl: 0.286, blk: 3.816, tpm: 0.949, fgImpact: 0.461, ftImpact: -2.973, to: -0.993 } },
          { name: "Ben Oosterbaan", min: 34, pts: 22, reb: 7, ast: 2, stl: 2, blk: 0, to: 3, tpm: 4, fgm: 9, fga: 13, ftm: 0, fta: 0, composite: 7.37, zScores: { pts: 2.115, reb: 1.343, ast: 0.249, stl: 1.294, blk: -0.475, tpm: 2.566, fgImpact: 2.165, ftImpact: 0, to: -1.893 } },
          { name: "Ismaila Diagne", min: 33, pts: 4, reb: 6, ast: 2, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 1, composite: -2.3, zScores: { pts: -0.54, reb: 0.994, ast: 0.249, stl: -0.722, blk: 0.955, tpm: -0.668, fgImpact: 0.438, ftImpact: -1.114, to: -1.893 } },
          { name: "Dylan Bordon", min: 26, pts: 6, reb: 5, ast: 4, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 6, ftm: 3, fta: 6, composite: -5.01, zScores: { pts: -0.245, reb: 0.645, ast: 1.311, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -1.541, ftImpact: -2.233, to: -1.893 } },
          { name: "Yoav Vitlem", min: 26, pts: 2, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 5, ftm: 2, fta: 2, composite: -2.62, zScores: { pts: -0.835, reb: -0.402, ast: 0.78, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -1.956, ftImpact: 0.74, to: -0.094 } },
          { name: "Jaroslavs Pihtovs", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.806 } },
          { name: "Ndewedo Newbury", min: 18, pts: 11, reb: 0, ast: 0, stl: 0, blk: 2, to: 1, tpm: 2, fgm: 3, fga: 6, ftm: 3, fta: 4, composite: 1.16, zScores: { pts: 0.493, reb: -1.1, ast: -0.812, stl: -0.722, blk: 2.386, tpm: 0.949, fgImpact: 0.07, ftImpact: -0.004, to: -0.094 } },
          { name: "Andrew Hilman", min: 24, pts: 22, reb: 8, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 8, ftm: 10, fta: 11, composite: 8.05, zScores: { pts: 2.115, reb: 1.692, ast: -0.812, stl: 0.286, blk: -0.475, tpm: 0.949, fgImpact: 0.899, ftImpact: 2.586, to: 0.806 } },
          { name: "Jaylen Hunter-Coleman", min: 5, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.48, zScores: { pts: -0.687, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 0.023, ftImpact: 0, to: 0.806 } },
          { name: "Aidan Braccia", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.39, zScores: { pts: -1.13, reb: -1.1, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: 0, to: -0.094 } }
        ]
      }
    },
      {
      id: "401917516",
      line: "Lincoln (CA) Oaklanders 50 @ Loyola Marymount Lions 102 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LNCA", name: "Lincoln (CA) Oaklanders", score: 50,
        players: [

        ]
      },
      home: {
        abbr: "LoyMa", name: "Loyola Marymount Lions", score: 102,
        players: [
          { name: "Jevon Porter", min: 19, pts: 13, reb: 7, ast: 3, stl: 2, blk: 1, to: 0, tpm: 3, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 8.23, zScores: { pts: 0.788, reb: 1.343, ast: 0.78, stl: 1.294, blk: 0.955, tpm: 1.757, fgImpact: 0.508, ftImpact: 0, to: 0.806 } },
          { name: "Zion Sensley", min: 19, pts: 20, reb: 13, ast: 1, stl: 3, blk: 0, to: 0, tpm: 5, fgm: 7, fga: 9, ftm: 1, fta: 2, composite: 12.36, zScores: { pts: 1.82, reb: 3.437, ast: -0.281, stl: 2.302, blk: -0.475, tpm: 3.375, fgImpact: 2.119, ftImpact: -0.744, to: 0.806 } },
          { name: "All Wright", min: 21, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.95, zScores: { pts: -0.835, reb: -0.402, ast: -0.281, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -0.368, ftImpact: 0, to: 0.806 } },
          { name: "Mazi Mosley", min: 20, pts: 15, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 6, fga: 11, ftm: 3, fta: 3, composite: 1.82, zScores: { pts: 1.083, reb: -1.1, ast: 0.249, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 0.531, ftImpact: 1.11, to: 0.806 } },
          { name: "Jasai Miles", min: 17, pts: 5, reb: 6, ast: 5, stl: 3, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: 5.13, zScores: { pts: -0.392, reb: 0.994, ast: 1.842, stl: 2.302, blk: 0.955, tpm: 0.14, fgImpact: -1.518, ftImpact: 0, to: 0.806 } },
          { name: "Donovan Miller", min: 13, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.93, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: -1.173, ftImpact: 0, to: 0.806 } },
          { name: "JJ Harris", min: 18, pts: 16, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 7, fga: 11, ftm: 1, fta: 1, composite: 2.35, zScores: { pts: 1.23, reb: -0.053, ast: -0.812, stl: -0.722, blk: 0.955, tpm: 0.14, fgImpact: 1.337, ftImpact: 0.37, to: -0.094 } },
          { name: "Christian Humphrey-Rembert", min: 17, pts: 3, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 1, fta: 1, composite: -3.14, zScores: { pts: -0.687, reb: -0.053, ast: -0.281, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -1.541, ftImpact: 0.37, to: -0.094 } },
          { name: "Andy Sigiscar", min: 13, pts: 12, reb: 5, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 3.22, zScores: { pts: 0.64, reb: 0.645, ast: -0.281, stl: -0.722, blk: 2.386, tpm: -0.668, fgImpact: 1.313, ftImpact: 0, to: -0.094 } },
          { name: "George Tupy", min: 7, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 1, composite: -4.25, zScores: { pts: -1.13, reb: -0.751, ast: -0.812, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: -0.391, ftImpact: -1.114, to: 0.806 } },
          { name: "Aaron McBride", min: 12, pts: 3, reb: 3, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -1.1, zScores: { pts: -0.687, reb: -0.053, ast: -0.812, stl: 1.294, blk: -0.475, tpm: -0.668, fgImpact: 0.023, ftImpact: 0.37, to: -0.094 } },
          { name: "Cooper Smith", min: 4, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 1, composite: -4.55, zScores: { pts: -0.835, reb: -0.751, ast: -0.812, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 0.023, ftImpact: -1.114, to: 0.806 } },
          { name: "Zamir Paschal", min: 20, pts: 11, reb: 2, ast: 1, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 0.28, zScores: { pts: 0.493, reb: -0.402, ast: -0.281, stl: 1.294, blk: -0.475, tpm: 0.14, fgImpact: 0.508, ftImpact: 0, to: -0.993 } }
        ]
      }
    },
      {
      id: "401929001",
      line: "Bethesda Flames 44 @ Hawai'i Rainbow Warriors 116 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BTHS", name: "Bethesda Flames", score: 44,
        players: [

        ]
      },
      home: {
        abbr: "HI", name: "Hawai'i Rainbow Warriors", score: 116,
        players: [
          { name: "Zack Davidson", min: 23, pts: 20, reb: 9, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 9, fga: 12, ftm: 2, fta: 2, composite: 7.36, zScores: { pts: 1.82, reb: 2.041, ast: 0.249, stl: 0.286, blk: -0.475, tpm: -0.668, fgImpact: 2.557, ftImpact: 0.74, to: 0.806 } },
          { name: "Bol Dengdit", min: 20, pts: 12, reb: 13, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 7, ftm: 2, fta: 6, composite: 0.47, zScores: { pts: 0.64, reb: 3.437, ast: 0.78, stl: -0.722, blk: -0.475, tpm: -0.668, fgImpact: 1.29, ftImpact: -3.717, to: -0.094 } },
          { name: "Jaden Matingou", min: 18, pts: 10, reb: 1, ast: 4, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 3, zScores: { pts: 0.345, reb: -0.751, ast: 1.311, stl: 1.294, blk: -0.475, tpm: 0.949, fgImpact: -0.321, ftImpact: 0.74, to: -0.094 } },
          { name: "Tanner Cuff", min: 16, pts: 14, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 6, ftm: 3, fta: 5, composite: -0.01, zScores: { pts: 0.935, reb: 0.296, ast: 0.249, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: 1.681, ftImpact: -1.119, to: -0.993 } },
          { name: "Chance Trujillo", min: 19, pts: 14, reb: 1, ast: 1, stl: 0, blk: 1, to: 2, tpm: 4, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 2.22, zScores: { pts: 0.935, reb: -0.751, ast: -0.281, stl: -0.722, blk: 0.955, tpm: 2.566, fgImpact: 0.508, ftImpact: 0, to: -0.993 } },
          { name: "Kellen Hampton", min: 22, pts: 13, reb: 3, ast: 0, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 4.01, zScores: { pts: 0.788, reb: -0.053, ast: -0.812, stl: 2.302, blk: -0.475, tpm: 0.14, fgImpact: 1.313, ftImpact: 0, to: 0.806 } },
          { name: "Marcus Adams Jr.", min: 21, pts: 12, reb: 6, ast: 1, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 4, fga: 9, ftm: 3, fta: 4, composite: 4.25, zScores: { pts: 0.64, reb: 0.994, ast: -0.281, stl: 1.294, blk: 0.955, tpm: 0.14, fgImpact: -0.298, ftImpact: -0.004, to: 0.806 } },
          { name: "Tiger Cuff", min: 26, pts: 5, reb: 6, ast: 7, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 2.12, zScores: { pts: -0.392, reb: 0.994, ast: 2.904, stl: 0.286, blk: -0.475, tpm: 0.14, fgImpact: -0.344, ftImpact: 0, to: -0.993 } },
          { name: "Scotty Belnap", min: 9, pts: 3, reb: 0, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -3.7, zScores: { pts: -0.687, reb: -1.1, ast: 0.78, stl: -0.722, blk: -0.475, tpm: 0.14, fgImpact: -1.541, ftImpact: 0, to: -0.094 } },
          { name: "Lueth Awan", min: 12, pts: 9, reb: 9, ast: 1, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 3.66, zScores: { pts: 0.198, reb: 2.041, ast: -0.281, stl: 0.286, blk: 0.955, tpm: 0.14, fgImpact: -0.321, ftImpact: 0.74, to: -0.094 } },
          { name: "Alois Leyrolles", min: 14, pts: 4, reb: 1, ast: 2, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -0.68, zScores: { pts: -0.54, reb: -0.751, ast: 0.249, stl: 1.294, blk: 0.955, tpm: -0.668, fgImpact: -1.127, ftImpact: 0, to: -0.094 } }
        ]
      }
    }
    ]
  },
    "2026-11-07": {
    games: [
      {
      id: "401918948",
      line: "Morehead State Eagles 57 @ Louisville Cardinals 107 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MORE", name: "Morehead State Eagles", score: 57,
        players: [

        ]
      },
      home: {
        abbr: "Lou", name: "Louisville Cardinals", score: 107,
        players: [
          { name: "Alvaro Folgueiras", min: 22, pts: 10, reb: 5, ast: 6, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 3.34, zScores: { pts: 0.334, reb: 0.661, ast: 2.46, stl: -0.737, blk: -0.402, tpm: 0.911, fgImpact: 0.986, ftImpact: 0, to: -0.879 } },
          { name: "Flory Bidunga", min: 17, pts: 10, reb: 7, ast: 1, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 4, fta: 6, composite: 5.24, zScores: { pts: 0.334, reb: 1.412, ast: -0.21, stl: 0.259, blk: 2.231, tpm: -0.67, fgImpact: 1.283, ftImpact: -0.348, to: 0.952 } },
          { name: "Adrian Wooley", min: 23, pts: 12, reb: 5, ast: 4, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 5, ftm: 5, fta: 7, composite: 3.36, zScores: { pts: 0.62, reb: 0.661, ast: 1.392, stl: 1.255, blk: -0.402, tpm: 0.121, fgImpact: 0.558, ftImpact: 0.035, to: -0.879 } },
          { name: "Jackson Shelstad", min: 25, pts: 8, reb: 6, ast: 5, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 11, ftm: 0, fta: 0, composite: 1.2, zScores: { pts: 0.049, reb: 1.037, ast: 1.926, stl: -0.737, blk: -0.402, tpm: 0.911, fgImpact: -1.617, ftImpact: 0, to: 0.037 } },
          { name: "Seth Trimble", min: 24, pts: 11, reb: 6, ast: 2, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 9, ftm: 0, fta: 2, composite: 0.74, zScores: { pts: 0.477, reb: 1.037, ast: 0.324, stl: 1.255, blk: -0.402, tpm: 0.121, fgImpact: 0.688, ftImpact: -1.878, to: -0.879 } },
          { name: "Boyuan Zhang", min: 10, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.26, zScores: { pts: -0.38, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: -0.232, ftImpact: 0, to: 0.952 } },
          { name: "LJ Wells", min: 14, pts: 4, reb: 2, ast: 0, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 3, composite: 0.57, zScores: { pts: -0.523, reb: -0.464, ast: -0.743, stl: 0.259, blk: 2.231, tpm: -0.67, fgImpact: -0.297, ftImpact: -0.174, to: 0.952 } },
          { name: "Obinna Ekezie Jr.", min: 25, pts: 20, reb: 13, ast: 1, stl: 0, blk: 2, to: 0, tpm: 3, fgm: 8, fga: 12, ftm: 1, fta: 2, composite: 10.78, zScores: { pts: 1.764, reb: 3.664, ast: -0.21, stl: -0.737, blk: 2.231, tpm: 1.702, fgImpact: 1.971, ftImpact: -0.557, to: 0.952 } },
          { name: "Will Hanke", min: 2, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.82, zScores: { pts: -0.809, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.428, ftImpact: 0, to: 0.952 } },
          { name: "Isaac Ellis", min: 17, pts: 10, reb: 6, ast: 1, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 3.48, zScores: { pts: 0.334, reb: 1.037, ast: -0.21, stl: 0.259, blk: -0.402, tpm: 0.911, fgImpact: -0.167, ftImpact: 0.765, to: 0.952 } },
          { name: "Karter Knox", min: 21, pts: 15, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 6, fta: 6, composite: 4.73, zScores: { pts: 1.049, reb: 1.037, ast: -0.21, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: 0.623, ftImpact: 2.296, to: 0.952 } }
        ]
      }
    },
      {
      id: "401928788",
      line: "New Mexico State Aggies 68 @ Gonzaga Bulldogs 109 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NMSU", name: "New Mexico State Aggies", score: 68,
        players: [

        ]
      },
      home: {
        abbr: "Gonz", name: "Gonzaga Bulldogs", score: 109,
        players: [
          { name: "Braden Huff", min: 25, pts: 20, reb: 0, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 9, fga: 13, ftm: 2, fta: 3, composite: 4.02, zScores: { pts: 1.764, reb: -1.215, ast: -0.21, stl: 0.259, blk: 0.915, tpm: -0.67, fgImpact: 2.399, ftImpact: -0.174, to: 0.952 } },
          { name: "Massamba Diop", min: 33, pts: 12, reb: 7, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 8, ftm: 1, fta: 2, composite: 2.71, zScores: { pts: 0.62, reb: 1.412, ast: -0.743, stl: 0.259, blk: -0.402, tpm: 0.121, fgImpact: 1.051, ftImpact: -0.557, to: 0.952 } },
          { name: "Davis Fogle", min: 33, pts: 22, reb: 4, ast: 6, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 8, fga: 13, ftm: 3, fta: 4, composite: 9.21, zScores: { pts: 2.05, reb: 0.286, ast: 2.46, stl: 1.255, blk: -0.402, tpm: 1.702, fgImpact: 1.609, ftImpact: 0.209, to: 0.037 } },
          { name: "Xaivian Lee", min: 28, pts: 6, reb: 1, ast: 10, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 3, fta: 4, composite: 1.72, zScores: { pts: -0.237, reb: -0.84, ast: 4.595, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: -1.023, ftImpact: 0.209, to: 0.037 } },
          { name: "Isiah Harwell", min: 30, pts: 22, reb: 5, ast: 0, stl: 3, blk: 0, to: 1, tpm: 4, fgm: 8, fga: 10, ftm: 2, fta: 4, composite: 7.93, zScores: { pts: 2.05, reb: 0.661, ast: -0.743, stl: 2.252, blk: -0.402, tpm: 2.493, fgImpact: 2.696, ftImpact: -1.113, to: 0.037 } },
          { name: "Parker Jefferson", min: 4, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.095, reb: -0.089, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.037 } },
          { name: "Luca Foster", min: 5, pts: 5, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 0.52, zScores: { pts: -0.38, reb: -0.464, ast: -0.743, stl: -0.737, blk: 0.915, tpm: 0.121, fgImpact: 0.855, ftImpact: 0, to: 0.952 } },
          { name: "Sam Funches", min: 4, pts: 3, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 3, fta: 4, composite: -1.96, zScores: { pts: -0.666, reb: -1.215, ast: -0.743, stl: -0.737, blk: 0.915, tpm: -0.67, fgImpact: 0, ftImpact: 0.209, to: 0.952 } },
          { name: "Nathan De Sousa", min: 12, pts: 3, reb: 1, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 3, fta: 4, composite: -1.21, zScores: { pts: -0.666, reb: -0.84, ast: 0.858, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: 0.209, to: 0.037 } },
          { name: "Juwan Ekanga", min: 6, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.72, zScores: { pts: -0.666, reb: -0.84, ast: -0.21, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: 0.065, ftImpact: 0, to: 0.952 } },
          { name: "Alonzo Metz", min: 2, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.88, zScores: { pts: -1.095, reb: -0.464, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.725, ftImpact: 0, to: 0.952 } },
          { name: "Javon Bennett", min: 18, pts: 13, reb: 0, ast: 2, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 6, ftm: 3, fta: 4, composite: 2.87, zScores: { pts: 0.763, reb: -1.215, ast: 0.324, stl: 1.255, blk: -0.402, tpm: 0.911, fgImpact: 0.986, ftImpact: 0.209, to: 0.037 } }
        ]
      }
    },
      {
      id: "401918977",
      line: "UNC Wilmington Seahawks 78 @ East Carolina Pirates 75 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UNCW", name: "UNC Wilmington Seahawks", score: 78,
        players: [

        ]
      },
      home: {
        abbr: "ECU", name: "East Carolina Pirates", score: 75,
        players: [
          { name: "Kaseem Watson", min: 39, pts: 11, reb: 4, ast: 1, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 10, ftm: 4, fta: 4, composite: 2.16, zScores: { pts: 0.477, reb: 0.286, ast: -0.21, stl: 0.259, blk: 0.915, tpm: 0.121, fgImpact: -1.255, ftImpact: 1.53, to: 0.037 } },
          { name: "Maxim Klitschko", min: 12, pts: 4, reb: 5, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 3, composite: -0.25, zScores: { pts: -0.523, reb: 0.661, ast: -0.743, stl: -0.737, blk: 0.915, tpm: -0.67, fgImpact: 0.065, ftImpact: -0.174, to: 0.952 } },
          { name: "Trevor Best", min: 30, pts: 22, reb: 3, ast: 0, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 5, fga: 11, ftm: 8, fta: 9, composite: 4.77, zScores: { pts: 2.05, reb: -0.089, ast: -0.743, stl: 0.259, blk: -0.402, tpm: 2.493, fgImpact: -0.037, ftImpact: 2.122, to: -0.879 } },
          { name: "Cian Medley", min: 38, pts: 23, reb: 2, ast: 12, stl: 3, blk: 0, to: 4, tpm: 1, fgm: 8, fga: 17, ftm: 6, fta: 8, composite: 7.23, zScores: { pts: 2.193, reb: -0.464, ast: 5.663, stl: 2.252, blk: -0.402, tpm: 0.121, fgImpact: 0.159, ftImpact: 0.417, to: -2.71 } },
          { name: "Brycen Blaine", min: 35, pts: 6, reb: 11, ast: 1, stl: 3, blk: 2, to: 4, tpm: 2, fgm: 2, fga: 14, ftm: 0, fta: 0, composite: 1.66, zScores: { pts: -0.237, reb: 2.913, ast: -0.21, stl: 2.252, blk: 2.231, tpm: 0.911, fgImpact: -3.495, ftImpact: 0, to: -2.71 } },
          { name: "Jordyn Buchanan", min: 21, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.99, zScores: { pts: -0.666, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: -0.297, ftImpact: 0, to: 0.952 } },
          { name: "Daithi Quinn", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: 0, to: 0.952 } },
          { name: "Matthew Hinton", min: 7, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -1.02, zScores: { pts: -0.237, reb: -0.464, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 1.283, ftImpact: 0, to: 0.952 } },
          { name: "Eli DeLaurier", min: 15, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.26, zScores: { pts: -1.095, reb: -0.84, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.725, ftImpact: 0, to: 0.952 } }
        ]
      }
    },
      {
      id: "401918986",
      line: "VCU Rams 88 @ Memphis Tigers 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "VCU", name: "VCU Rams", score: 88,
        players: [
          { name: "Lazar Djokovic", min: 29, pts: 8, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 6, fta: 6, composite: 0.42, zScores: { pts: 0.049, reb: -0.089, ast: 0.324, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -1.385, ftImpact: 2.296, to: 0.037 } },
          { name: "Michael Belle", min: 16, pts: 7, reb: 3, ast: 0, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -2.82, zScores: { pts: -0.094, reb: -0.089, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: 0.921, ftImpact: 0, to: -1.794 } },
          { name: "Nyk Lewis", min: 30, pts: 14, reb: 2, ast: 7, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 7, ftm: 6, fta: 8, composite: 1.66, zScores: { pts: 0.906, reb: -0.464, ast: 2.994, stl: -0.737, blk: -0.402, tpm: 0.911, fgImpact: -0.167, ftImpact: 0.417, to: -1.794 } },
          { name: "Blake Harper", min: 36, pts: 22, reb: 3, ast: 4, stl: 0, blk: 0, to: 2, tpm: 5, fgm: 7, fga: 14, ftm: 3, fta: 4, composite: 5.28, zScores: { pts: 2.05, reb: -0.089, ast: 1.392, stl: -0.737, blk: -0.402, tpm: 3.284, fgImpact: 0.456, ftImpact: 0.209, to: -0.879 } },
          { name: "Brandon Jennings", min: 20, pts: 4, reb: 1, ast: 2, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.97, zScores: { pts: -0.523, reb: -0.84, ast: 0.324, stl: 1.255, blk: -0.402, tpm: -0.67, fgImpact: -0.232, ftImpact: 0, to: -0.879 } },
          { name: "Torey Alston", min: 30, pts: 4, reb: 5, ast: 3, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: 3.97, zScores: { pts: -0.523, reb: 0.661, ast: 0.858, stl: -0.737, blk: 2.231, tpm: -0.67, fgImpact: 0.428, ftImpact: 0.765, to: 0.952 } },
          { name: "Sammy Jackson", min: 6, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.63, zScores: { pts: -0.666, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: 0.065, ftImpact: 0, to: 0.952 } },
          { name: "Ahmad Nowell", min: 22, pts: 17, reb: 7, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 10, ftm: 4, fta: 4, composite: 4.99, zScores: { pts: 1.335, reb: 1.412, ast: -0.21, stl: -0.737, blk: -0.402, tpm: 1.702, fgImpact: 0.326, ftImpact: 1.53, to: 0.037 } },
          { name: "Tyrell Ward", min: 11, pts: 9, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 2, fta: 3, composite: 0.67, zScores: { pts: 0.192, reb: -0.089, ast: -0.743, stl: 0.259, blk: -0.402, tpm: 0.121, fgImpact: 0.558, ftImpact: -0.174, to: 0.952 } }
        ]
      },
      home: {
        abbr: "Mem", name: "Memphis Tigers", score: 89,
        players: [
          { name: "Tylik Weeks", min: 28, pts: 17, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 8, ftm: 11, fta: 18, composite: -5.3, zScores: { pts: 1.335, reb: -0.84, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.53, ftImpact: -2.365, to: -0.879 } },
          { name: "Maxim Logue", min: 11, pts: 2, reb: 2, ast: 0, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: 0.86, zScores: { pts: -0.809, reb: -0.464, ast: -0.743, stl: 1.255, blk: 0.915, tpm: -0.67, fgImpact: 0.428, ftImpact: 0, to: 0.952 } },
          { name: "Rihards Vavers", min: 34, pts: 17, reb: 5, ast: 1, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 8, ftm: 3, fta: 4, composite: 6.43, zScores: { pts: 1.335, reb: 0.661, ast: -0.21, stl: 1.255, blk: -0.402, tpm: 2.493, fgImpact: 1.051, ftImpact: 0.209, to: 0.037 } },
          { name: "Luke Almodovar", min: 35, pts: 7, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: -0.49, zScores: { pts: -0.094, reb: -0.464, ast: -0.21, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: 0.493, ftImpact: 0.765, to: 0.037 } },
          { name: "Jayden Reid", min: 35, pts: 32, reb: 1, ast: 7, stl: 3, blk: 0, to: 2, tpm: 3, fgm: 11, fga: 21, ftm: 7, fta: 9, composite: 10.19, zScores: { pts: 3.479, reb: -0.84, ast: 2.994, stl: 2.252, blk: -0.402, tpm: 1.702, fgImpact: 1.079, ftImpact: 0.8, to: -0.879 } },
          { name: "William Whorton", min: 9, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.45, zScores: { pts: -0.809, reb: -0.464, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.428, ftImpact: 0, to: 0.952 } },
          { name: "Corneilous Williams", min: 20, pts: 0, reb: 6, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 2, composite: -1.63, zScores: { pts: -1.095, reb: 1.037, ast: -0.743, stl: -0.737, blk: 2.231, tpm: -0.67, fgImpact: -0.725, ftImpact: -1.878, to: 0.952 } },
          { name: "Cello Jackson Jr.", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.83, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: 0, to: 0.037 } },
          { name: "Julius Thedford", min: 13, pts: 3, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 1, composite: -0.71, zScores: { pts: -0.666, reb: 0.661, ast: -0.21, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -1.023, ftImpact: 0.383, to: 0.952 } },
          { name: "Josh Holloway", min: 11, pts: 9, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: -1.21, zScores: { pts: 0.192, reb: -0.464, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.911, fgImpact: 0.558, ftImpact: -0.557, to: 0.037 } },
          { name: "Brandin Cummings", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.53, zScores: { pts: -1.095, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: 0, to: 0.952 } }
        ]
      }
    },
      {
      id: "401919805",
      line: "Long Island University Sharks 80 @ La Salle Explorers 88 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LIU", name: "Long Island University Sharks", score: 80,
        players: [

        ]
      },
      home: {
        abbr: "LaSal", name: "La Salle Explorers", score: 88,
        players: [
          { name: "Anthony Finkley", min: 32, pts: 19, reb: 3, ast: 4, stl: 3, blk: 1, to: 2, tpm: 3, fgm: 6, fga: 8, ftm: 4, fta: 4, composite: 10.29, zScores: { pts: 1.621, reb: -0.089, ast: 1.392, stl: 2.252, blk: 0.915, tpm: 1.702, fgImpact: 1.841, ftImpact: 1.53, to: -0.879 } },
          { name: "Noah Collier", min: 22, pts: 10, reb: 5, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 2, fta: 4, composite: -0.06, zScores: { pts: 0.334, reb: 0.661, ast: -0.743, stl: 0.259, blk: 0.915, tpm: -0.67, fgImpact: 0.261, ftImpact: -1.113, to: 0.037 } },
          { name: "Jaden Johnson", min: 28, pts: 2, reb: 0, ast: 5, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 4, composite: -2.08, zScores: { pts: -0.809, reb: -1.215, ast: 1.926, stl: 1.255, blk: -0.402, tpm: -0.67, fgImpact: -1.088, ftImpact: -1.113, to: 0.037 } },
          { name: "Kam Burton", min: 24, pts: 11, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 9, ftm: 2, fta: 2, composite: 1.49, zScores: { pts: 0.477, reb: 0.286, ast: -0.743, stl: 0.259, blk: -0.402, tpm: 1.702, fgImpact: -0.892, ftImpact: 0.765, to: 0.037 } },
          { name: "Rob Dockery", min: 29, pts: 18, reb: 6, ast: 7, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 6, fga: 14, ftm: 5, fta: 6, composite: 5.33, zScores: { pts: 1.478, reb: 1.037, ast: 2.994, stl: 1.255, blk: -0.402, tpm: 0.121, fgImpact: -0.334, ftImpact: 0.974, to: -1.794 } },
          { name: "Francois Nkoy-Eale", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.095, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } },
          { name: "Bowyn Beatty", min: 13, pts: 5, reb: 8, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 4, composite: 0.35, zScores: { pts: -0.38, reb: 1.787, ast: -0.21, stl: 0.259, blk: 0.915, tpm: -0.67, fgImpact: 0.13, ftImpact: -2.435, to: 0.952 } },
          { name: "Vice Zanki", min: 9, pts: 6, reb: 3, ast: 0, stl: 2, blk: 1, to: 1, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 2.9, zScores: { pts: -0.237, reb: -0.089, ast: -0.743, stl: 1.255, blk: 0.915, tpm: 0.911, fgImpact: 0.855, ftImpact: 0, to: 0.037 } },
          { name: "RJ Smith", min: 12, pts: 1, reb: 1, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -4.97, zScores: { pts: -0.952, reb: -0.84, ast: -0.21, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.725, ftImpact: -0.557, to: -0.879 } },
          { name: "Devin Booker", min: 16, pts: 13, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 4.14, zScores: { pts: 0.763, reb: -0.464, ast: 0.858, stl: 0.259, blk: -0.402, tpm: 1.702, fgImpact: 0.623, ftImpact: 0.765, to: 0.037 } },
          { name: "Trey Moss", min: 11, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -3.34, zScores: { pts: -0.666, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: -1.023, ftImpact: 0, to: 0.952 } }
        ]
      }
    },
      {
      id: "401909760",
      line: "San Diego State Aztecs 77 @ Colorado Buffaloes 66 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SDSU", name: "San Diego State Aztecs", score: 77,
        players: [
          { name: "Tae Simmons", min: 22, pts: 9, reb: 5, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 2, fta: 4, composite: -3.43, zScores: { pts: 0.192, reb: 0.661, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: -0.53, ftImpact: -1.113, to: -0.879 } },
          { name: "Bear Cherry", min: 21, pts: 8, reb: 5, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 4, fta: 4, composite: 1.15, zScores: { pts: 0.049, reb: 0.661, ast: -0.21, stl: -0.737, blk: 0.915, tpm: -0.67, fgImpact: 0.493, ftImpact: 1.53, to: -0.879 } },
          { name: "Chance Gladden", min: 32, pts: 20, reb: 4, ast: 3, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 6, ftm: 10, fta: 11, composite: 8.79, zScores: { pts: 1.764, reb: 0.286, ast: 0.858, stl: 2.252, blk: -0.402, tpm: -0.67, fgImpact: 1.776, ftImpact: 2.887, to: 0.037 } },
          { name: "Elzie Harrington", min: 33, pts: 8, reb: 3, ast: 2, stl: 1, blk: 2, to: 5, tpm: 0, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: -0.92, zScores: { pts: 0.049, reb: -0.089, ast: 0.324, stl: 0.259, blk: 2.231, tpm: -0.67, fgImpact: -0.167, ftImpact: 0.765, to: -3.625 } },
          { name: "Latrell Davis", min: 34, pts: 18, reb: 1, ast: 1, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 6, fga: 12, ftm: 2, fta: 4, composite: 1.18, zScores: { pts: 1.478, reb: -0.84, ast: -0.21, stl: 0.259, blk: -0.402, tpm: 2.493, fgImpact: 0.391, ftImpact: -1.113, to: -0.879 } },
          { name: "Luca Vincini", min: 18, pts: 1, reb: 7, ast: 0, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -1.94, zScores: { pts: -0.952, reb: 1.412, ast: -0.743, stl: 0.259, blk: 0.915, tpm: -0.67, fgImpact: -0.725, ftImpact: -0.557, to: -0.879 } },
          { name: "Luka Skoric", min: 16, pts: 5, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 2, fta: 4, composite: -4.14, zScores: { pts: -0.38, reb: 0.286, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: -0.297, ftImpact: -1.113, to: -0.879 } },
          { name: "David Torresani", min: 5, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.65, zScores: { pts: -1.095, reb: -1.215, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.037 } },
          { name: "Isaiah Sy", min: 19, pts: 8, reb: 6, ast: 3, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 3.71, zScores: { pts: 0.049, reb: 1.037, ast: 0.858, stl: 0.259, blk: 0.915, tpm: 0.911, fgImpact: 0.558, ftImpact: 0, to: -0.879 } }
        ]
      },
      home: {
        abbr: "Col", name: "Colorado Buffaloes", score: 66,
        players: [
          { name: "Justin Neely", min: 22, pts: 5, reb: 4, ast: 2, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 5, fta: 9, composite: -3.4, zScores: { pts: -0.38, reb: 0.286, ast: 0.324, stl: 1.255, blk: -0.402, tpm: -0.67, fgImpact: -1.088, ftImpact: -1.844, to: -0.879 } },
          { name: "Noah Feddersen", min: 32, pts: 1, reb: 5, ast: 0, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -0.97, zScores: { pts: -0.952, reb: 0.661, ast: -0.743, stl: 1.255, blk: 0.915, tpm: -0.67, fgImpact: 0, ftImpact: -0.557, to: -0.879 } },
          { name: "Josiah Sanders", min: 25, pts: 8, reb: 3, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: -3.16, zScores: { pts: 0.049, reb: -0.089, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.53, ftImpact: 0.765, to: -1.794 } },
          { name: "Jalin Holland", min: 20, pts: 6, reb: 1, ast: 1, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -0.05, zScores: { pts: -0.237, reb: -0.84, ast: -0.21, stl: 2.252, blk: -0.402, tpm: -0.67, fgImpact: -0.892, ftImpact: 0, to: 0.952 } },
          { name: "Barrington Hargress", min: 35, pts: 33, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 5, fgm: 11, fga: 20, ftm: 6, fta: 6, composite: 9.48, zScores: { pts: 3.622, reb: -0.464, ast: 0.324, stl: 0.259, blk: -0.402, tpm: 3.284, fgImpact: 1.442, ftImpact: 2.296, to: -0.879 } },
          { name: "Goc Malual", min: 11, pts: 1, reb: 1, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 4, composite: -4.89, zScores: { pts: -0.952, reb: -0.84, ast: -0.21, stl: -0.737, blk: 0.915, tpm: -0.67, fgImpact: 0, ftImpact: -2.435, to: 0.037 } },
          { name: "David Gomez", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.095, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.725, ftImpact: 0, to: 0.952 } },
          { name: "Alex Dickeson", min: 21, pts: 6, reb: 6, ast: 1, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: 2.71, zScores: { pts: -0.237, reb: 1.037, ast: -0.21, stl: 1.255, blk: -0.402, tpm: 0.911, fgImpact: -0.595, ftImpact: 0, to: 0.952 } },
          { name: "Amir Jones", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -5.79, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: -1.878, to: 0.952 } },
          { name: "Ian Inman", min: 28, pts: 6, reb: 4, ast: 1, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 2, fga: 9, ftm: 0, fta: 0, composite: -2.87, zScores: { pts: -0.237, reb: 0.286, ast: -0.21, stl: 0.259, blk: -0.402, tpm: 0.911, fgImpact: -1.683, ftImpact: 0, to: -1.794 } }
        ]
      }
    },
      {
      id: "401929293",
      line: "Omaha Mavericks 56 @ Utah State Aggies 90 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OMA", name: "Omaha Mavericks", score: 56,
        players: [

        ]
      },
      home: {
        abbr: "UtSt", name: "Utah State Aggies", score: 90,
        players: [
          { name: "Will Hornseth", min: 25, pts: 7, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 4, composite: -3.13, zScores: { pts: -0.094, reb: 0.286, ast: 0.324, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.558, ftImpact: -2.435, to: 0.037 } },
          { name: "Karson Templin", min: 19, pts: 13, reb: 3, ast: 1, stl: 2, blk: 1, to: 1, tpm: 1, fgm: 4, fga: 5, ftm: 4, fta: 5, composite: 4.73, zScores: { pts: 0.763, reb: -0.089, ast: -0.21, stl: 1.255, blk: 0.915, tpm: 0.121, fgImpact: 1.348, ftImpact: 0.591, to: 0.037 } },
          { name: "Solomon Callaghan", min: 24, pts: 16, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 8, ftm: 2, fta: 2, composite: 4.56, zScores: { pts: 1.192, reb: -0.089, ast: -0.743, stl: 0.259, blk: -0.402, tpm: 2.493, fgImpact: 1.051, ftImpact: 0.765, to: 0.037 } },
          { name: "Mason Falslev", min: 34, pts: 22, reb: 10, ast: 7, stl: 4, blk: 0, to: 1, tpm: 1, fgm: 10, fga: 17, ftm: 1, fta: 2, composite: 11.77, zScores: { pts: 2.05, reb: 2.538, ast: 2.994, stl: 3.248, blk: -0.402, tpm: 0.121, fgImpact: 1.739, ftImpact: -0.557, to: 0.037 } },
          { name: "Dallin Hall", min: 32, pts: 9, reb: 7, ast: 7, stl: 0, blk: 2, to: 2, tpm: 1, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 5.59, zScores: { pts: 0.192, reb: 1.412, ast: 2.994, stl: -0.737, blk: 2.231, tpm: 0.121, fgImpact: 0.261, ftImpact: 0, to: -0.879 } },
          { name: "Kingston Tosi", min: 25, pts: 8, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 4, composite: -2.71, zScores: { pts: 0.049, reb: -1.215, ast: -0.21, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: 0.558, ftImpact: -1.113, to: 0.037 } },
          { name: "Sean Felts", min: 8, pts: 0, reb: 2, ast: 3, stl: 0, blk: 3, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -0.4, zScores: { pts: -1.095, reb: -0.464, ast: 0.858, stl: -0.737, blk: 3.548, tpm: -0.67, fgImpact: 0, ftImpact: -1.878, to: 0.037 } },
          { name: "Ace Reiser", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: 0, to: 0.952 } },
          { name: "Jordan Boyd", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -0.809, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.065, ftImpact: 0, to: 0.952 } },
          { name: "Brayden Boe", min: 17, pts: 9, reb: 7, ast: 2, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 4.14, zScores: { pts: 0.192, reb: 1.412, ast: 0.324, stl: -0.737, blk: 0.915, tpm: 0.121, fgImpact: 0.195, ftImpact: 0.765, to: 0.952 } },
          { name: "AJ Bates", min: 10, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -5.95, zScores: { pts: -0.523, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.13, ftImpact: 0, to: -1.794 } }
        ]
      }
    },
      {
      id: "401928352",
      line: "Oakland Golden Grizzlies 67 @ UC Santa Barbara Gauchos 90 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OAK", name: "Oakland Golden Grizzlies", score: 67,
        players: [

        ]
      },
      home: {
        abbr: "UCSB", name: "UC Santa Barbara Gauchos", score: 90,
        players: [
          { name: "Eric Dibami", min: 23, pts: 9, reb: 7, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 3, fta: 4, composite: 1.8, zScores: { pts: 0.192, reb: 1.412, ast: -0.743, stl: 0.259, blk: 0.915, tpm: -0.67, fgImpact: 0.195, ftImpact: 0.209, to: 0.037 } },
          { name: "Marvin McGhee IV", min: 16, pts: 5, reb: 3, ast: 4, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 1.07, zScores: { pts: -0.38, reb: -0.089, ast: 1.392, stl: 0.259, blk: -0.402, tpm: 0.121, fgImpact: 0.13, ftImpact: 0, to: 0.037 } },
          { name: "CJ Shaw", min: 28, pts: 14, reb: 3, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 8, ftm: 4, fta: 4, composite: 4.44, zScores: { pts: 0.906, reb: -0.089, ast: -0.21, stl: -0.737, blk: 0.915, tpm: 0.911, fgImpact: 0.261, ftImpact: 1.53, to: 0.952 } },
          { name: "Miro Little", min: 27, pts: 7, reb: 2, ast: 8, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 3, ftm: 1, fta: 5, composite: -1.02, zScores: { pts: -0.094, reb: -0.464, ast: 3.528, stl: -0.737, blk: -0.402, tpm: 0.911, fgImpact: 0.493, ftImpact: -3.374, to: -0.879 } },
          { name: "Aidan Mahaney", min: 28, pts: 16, reb: 0, ast: 3, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 3.7, zScores: { pts: 1.192, reb: -1.215, ast: 0.858, stl: -0.737, blk: -0.402, tpm: 2.493, fgImpact: 1.478, ftImpact: 0, to: 0.037 } },
          { name: "Declan Duru Jr.", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: 0, to: 0.952 } },
          { name: "Michael Simcoe", min: 13, pts: 3, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.02, zScores: { pts: -0.666, reb: -0.84, ast: -0.743, stl: -0.737, blk: 0.915, tpm: 0.121, fgImpact: -1.023, ftImpact: 0, to: 0.952 } },
          { name: "Bryce Bedgood", min: 1, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.52, zScores: { pts: -1.095, reb: -0.464, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } },
          { name: "Antonio Chol", min: 6, pts: 7, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: 0.1, zScores: { pts: -0.094, reb: -0.089, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.911, fgImpact: 0.855, ftImpact: -0.557, to: 0.952 } },
          { name: "Koat Keat Tong", min: 5, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.53, zScores: { pts: -1.095, reb: -0.464, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } },
          { name: "Marco John Wuol", min: 3, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.82, zScores: { pts: -0.809, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.428, ftImpact: 0, to: 0.952 } },
          { name: "Jordan Charles", min: 3, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -2.85, zScores: { pts: -0.809, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0.765, to: 0.952 } },
          { name: "Luke Zuffelato", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.095, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.725, ftImpact: 0, to: 0.952 } },
          { name: "Viljami Vartiainen", min: 18, pts: 20, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 5, fgm: 7, fga: 12, ftm: 1, fta: 1, composite: 6.74, zScores: { pts: 1.764, reb: -0.089, ast: 0.324, stl: 0.259, blk: -0.402, tpm: 3.284, fgImpact: 1.181, ftImpact: 0.383, to: 0.037 } },
          { name: "RJ Smith", min: 18, pts: 5, reb: 1, ast: 7, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 3.52, zScores: { pts: -0.38, reb: -0.84, ast: 2.994, stl: -0.737, blk: 0.915, tpm: 0.121, fgImpact: 0.493, ftImpact: 0, to: 0.952 } }
        ]
      }
    },
      {
      id: "401924912",
      line: "Samford Bulldogs 79 @ UNLV Rebels 88 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SAM", name: "Samford Bulldogs", score: 79,
        players: [

        ]
      },
      home: {
        abbr: "UNLV", name: "UNLV Rebels", score: 88,
        players: [
          { name: "Tyrin Jones", min: 34, pts: 17, reb: 5, ast: 1, stl: 2, blk: 6, to: 1, tpm: 0, fgm: 5, fga: 13, ftm: 7, fta: 10, composite: 9.01, zScores: { pts: 1.335, reb: 0.661, ast: -0.21, stl: 1.255, blk: 7.497, tpm: -0.67, fgImpact: -0.762, ftImpact: -0.139, to: 0.037 } },
          { name: "Jeremy Foumena", min: 8, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.09, zScores: { pts: -0.809, reb: -0.464, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.297, ftImpact: 0, to: 0.037 } },
          { name: "Cam Miles", min: 36, pts: 20, reb: 4, ast: 2, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 4, fga: 10, ftm: 8, fta: 8, composite: 6.44, zScores: { pts: 1.764, reb: 0.286, ast: 0.324, stl: 0.259, blk: -0.402, tpm: 2.493, fgImpact: -0.465, ftImpact: 3.061, to: -0.879 } },
          { name: "Dontrez Williams", min: 28, pts: 10, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: -1.21, zScores: { pts: 0.334, reb: 0.286, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.688, ftImpact: 0, to: 0.037 } },
          { name: "Sebastian Mack", min: 31, pts: 17, reb: 5, ast: 2, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 7, fga: 13, ftm: 3, fta: 3, composite: -0.23, zScores: { pts: 1.335, reb: 0.661, ast: 0.324, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.819, ftImpact: 1.148, to: -2.71 } },
          { name: "Jackson Kiss", min: 26, pts: 10, reb: 6, ast: 1, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 4, ftm: 2, fta: 3, composite: 3.32, zScores: { pts: 0.334, reb: 1.037, ast: -0.21, stl: 1.255, blk: 0.915, tpm: -0.67, fgImpact: 1.711, ftImpact: -0.174, to: -0.879 } },
          { name: "MJ Thomas", min: 11, pts: 4, reb: 5, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 2, composite: -1.85, zScores: { pts: -0.523, reb: 0.661, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: 0.493, ftImpact: -1.878, to: 0.952 } },
          { name: "Issac Williamson", min: 14, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 5, fta: 6, composite: -2.74, zScores: { pts: -0.38, reb: -0.089, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.725, ftImpact: 0.974, to: 0.037 } },
          { name: "Kota Suttle Jr.", min: 12, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.8, zScores: { pts: -0.666, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: 0.428, ftImpact: 0, to: 0.037 } }
        ]
      }
    },
      {
      id: "401920192",
      line: "Lafayette Leopards 57 @ Saint Joseph's Hawks 67 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "LAF", name: "Lafayette Leopards", score: 57,
        players: [

        ]
      },
      home: {
        abbr: "StJos", name: "Saint Joseph's Hawks", score: 67,
        players: [
          { name: "Davis Kemper", min: 11, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.64, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.725, ftImpact: 0, to: 0.952 } },
          { name: "Sean Logan", min: 37, pts: 5, reb: 11, ast: 1, stl: 3, blk: 6, to: 4, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 5, composite: 5.09, zScores: { pts: -0.38, reb: 2.913, ast: -0.21, stl: 2.252, blk: 7.497, tpm: -0.67, fgImpact: -0.232, ftImpact: -3.374, to: -2.71 } },
          { name: "Khaafiq Myers", min: 36, pts: 24, reb: 4, ast: 4, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 8, fga: 18, ftm: 8, fta: 10, composite: 5.29, zScores: { pts: 2.336, reb: 0.286, ast: 1.392, stl: 2.252, blk: -0.402, tpm: -0.67, fgImpact: -0.204, ftImpact: 1.183, to: -0.879 } },
          { name: "Austin Williford", min: 37, pts: 2, reb: 6, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 9, ftm: 0, fta: 0, composite: -4.15, zScores: { pts: -0.809, reb: 1.037, ast: -0.21, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -2.473, ftImpact: 0, to: -0.879 } },
          { name: "Jaiden Glover-Toscano", min: 42, pts: 18, reb: 7, ast: 1, stl: 3, blk: 0, to: 0, tpm: 2, fgm: 6, fga: 16, ftm: 4, fta: 8, composite: 3.11, zScores: { pts: 1.478, reb: 1.412, ast: -0.21, stl: 2.252, blk: -0.402, tpm: 0.911, fgImpact: -1.059, ftImpact: -2.226, to: 0.952 } },
          { name: "Keoni Sacco", min: 8, pts: 3, reb: 1, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -0.75, zScores: { pts: -0.666, reb: -0.84, ast: -0.21, stl: 0.259, blk: 0.915, tpm: -0.67, fgImpact: 0.065, ftImpact: -0.557, to: 0.952 } },
          { name: "BJ Ranson", min: 32, pts: 13, reb: 3, ast: 2, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 10, ftm: 4, fta: 6, composite: 2.19, zScores: { pts: 0.763, reb: -0.089, ast: 0.324, stl: 2.252, blk: -0.402, tpm: 0.121, fgImpact: -0.465, ftImpact: -0.348, to: 0.037 } },
          { name: "Mekai Johnson", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.45, zScores: { pts: -1.095, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: 0, to: 0.037 } },
          { name: "Logan Carey", min: 12, pts: 2, reb: 0, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.93, zScores: { pts: -0.809, reb: -1.215, ast: -0.743, stl: 1.255, blk: -0.402, tpm: -0.67, fgImpact: -0.297, ftImpact: 0, to: 0.952 } },
          { name: "Owen Verna", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.095, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } }
        ]
      }
    },
      {
      id: "401920062",
      line: "Monmouth Hawks 66 @ Rhode Island Rams 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MONM", name: "Monmouth Hawks", score: 66,
        players: [

        ]
      },
      home: {
        abbr: "URI", name: "Rhode Island Rams", score: 84,
        players: [
          { name: "Matas Deniusas", min: 28, pts: 15, reb: 7, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 9, ftm: 4, fta: 5, composite: 1.1, zScores: { pts: 1.049, reb: 1.412, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: 0.688, ftImpact: 0.591, to: -0.879 } },
          { name: "Jonah Hinton", min: 35, pts: 14, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: 2.13, zScores: { pts: 0.906, reb: -0.089, ast: 0.324, stl: -0.737, blk: -0.402, tpm: 2.493, fgImpact: -0.399, ftImpact: 0, to: 0.037 } },
          { name: "Jason Fontenet II", min: 33, pts: 15, reb: 9, ast: 2, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 4.97, zScores: { pts: 1.049, reb: 2.162, ast: 0.324, stl: 0.259, blk: -0.402, tpm: 1.702, fgImpact: 0.753, ftImpact: 0, to: -0.879 } },
          { name: "Dylan Williamson", min: 31, pts: 11, reb: 2, ast: 3, stl: 4, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 3.62, zScores: { pts: 0.477, reb: -0.464, ast: 0.858, stl: 3.248, blk: -0.402, tpm: 0.121, fgImpact: -0.102, ftImpact: 0.765, to: -0.879 } },
          { name: "Jahmere Tripp", min: 24, pts: 13, reb: 6, ast: 1, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 5, fga: 11, ftm: 1, fta: 4, composite: 1.24, zScores: { pts: 0.763, reb: 1.037, ast: -0.21, stl: 0.259, blk: 0.915, tpm: 0.911, fgImpact: -0.037, ftImpact: -2.435, to: 0.037 } },
          { name: "Nedas Raupelis", min: 23, pts: 11, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 3, fta: 4, composite: 0.53, zScores: { pts: 0.477, reb: 0.286, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.623, ftImpact: 0.209, to: 0.952 } },
          { name: "Javon Perry", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: 0, to: 0.952 } },
          { name: "Mouhamed Sow", min: 4, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.19, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.037 } },
          { name: "Jalen Harper", min: 9, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -3.78, zScores: { pts: -0.666, reb: -0.464, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.428, ftImpact: -0.557, to: 0.037 } },
          { name: "Jaen Chatman", min: 9, pts: 2, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.11, zScores: { pts: -0.809, reb: -0.464, ast: 0.324, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.297, ftImpact: 0, to: 0.952 } },
          { name: "Barrett Loer", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } }
        ]
      }
    },
      {
      id: "401926201",
      line: "VMI Keydets 68 @ UTSA Roadrunners 70 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "VMI", name: "VMI Keydets", score: 68,
        players: [

        ]
      },
      home: {
        abbr: "UTSA", name: "UTSA Roadrunners", score: 70,
        players: [
          { name: "Chinedum Okpukpara", min: 10, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.9, zScores: { pts: -1.095, reb: -0.84, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } },
          { name: "JJ Kelly", min: 13, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.73, zScores: { pts: -1.095, reb: -0.84, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: -0.879 } },
          { name: "Preston Turner", min: 26, pts: 6, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 8, ftm: 0, fta: 1, composite: -2.45, zScores: { pts: -0.237, reb: -0.464, ast: -0.21, stl: -0.737, blk: -0.402, tpm: 0.911, fgImpact: -1.32, ftImpact: -0.939, to: 0.952 } },
          { name: "KJ Tenner", min: 35, pts: 14, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 8, ftm: 5, fta: 7, composite: 1.61, zScores: { pts: 0.906, reb: -0.464, ast: 0.858, stl: 0.259, blk: -0.402, tpm: 0.121, fgImpact: 0.261, ftImpact: 0.035, to: 0.037 } },
          { name: "Isaiah Watts", min: 8, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.39, zScores: { pts: -0.523, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.493, ftImpact: 0, to: 0.037 } },
          { name: "Jayson Peterson", min: 8, pts: 2, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.44, zScores: { pts: -0.809, reb: -0.089, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: 0.065, ftImpact: 0, to: 0.952 } },
          { name: "Mike Broxton Jr.", min: 20, pts: 5, reb: 3, ast: 0, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: 1.45, zScores: { pts: -0.38, reb: -0.089, ast: -0.743, stl: -0.737, blk: 3.548, tpm: -0.67, fgImpact: 0.13, ftImpact: -0.557, to: 0.952 } },
          { name: "Josiah LeGree", min: 26, pts: 14, reb: 4, ast: 4, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 15, ftm: 0, fta: 0, composite: 0.78, zScores: { pts: 0.906, reb: 0.286, ast: 1.392, stl: -0.737, blk: -0.402, tpm: 0.911, fgImpact: -0.697, ftImpact: 0, to: -0.879 } },
          { name: "Shey Eberwein", min: 20, pts: 7, reb: 5, ast: 1, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 11, ftm: 0, fta: 0, composite: 0.99, zScores: { pts: -0.094, reb: 0.661, ast: -0.21, stl: 0.259, blk: 0.915, tpm: 0.121, fgImpact: -1.617, ftImpact: 0, to: 0.952 } },
          { name: "Isaiah Coleman", min: 17, pts: 4, reb: 3, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 1, composite: -2.35, zScores: { pts: -0.523, reb: -0.089, ast: -0.743, stl: 0.259, blk: 0.915, tpm: -0.67, fgImpact: -0.595, ftImpact: -0.939, to: 0.037 } },
          { name: "Demari Williams", min: 17, pts: 14, reb: 0, ast: 2, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 8, ftm: 1, fta: 1, composite: 3.25, zScores: { pts: 0.906, reb: -1.215, ast: 0.324, stl: 1.255, blk: -0.402, tpm: 0.121, fgImpact: 1.841, ftImpact: 0.383, to: 0.037 } }
        ]
      }
    },
      {
      id: "401926112",
      line: "Northern Iowa Panthers 83 @ Furman Paladins 98 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NrthIA", name: "Northern Iowa Panthers", score: 83,
        players: [
          { name: "Isaiah Johnson-Arigu", min: 23, pts: 20, reb: 2, ast: 0, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 6, fga: 10, ftm: 7, fta: 7, composite: 6.92, zScores: { pts: 1.764, reb: -0.464, ast: -0.743, stl: -0.737, blk: 2.231, tpm: 0.121, fgImpact: 1.116, ftImpact: 2.678, to: 0.952 } },
          { name: "Ian Smikle", min: 17, pts: 4, reb: 7, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -0.24, zScores: { pts: -0.523, reb: 1.412, ast: 0.324, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.595, ftImpact: 0, to: 0.952 } },
          { name: "Geon Hutchins", min: 17, pts: 5, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.09, zScores: { pts: -0.38, reb: -0.84, ast: -0.21, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: -0.595, ftImpact: 0, to: 0.952 } },
          { name: "Greyson Uelmen", min: 32, pts: 15, reb: 8, ast: 4, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 6, fga: 16, ftm: 3, fta: 5, composite: 2.66, zScores: { pts: 1.049, reb: 1.787, ast: 1.392, stl: 1.255, blk: -0.402, tpm: -0.67, fgImpact: -1.059, ftImpact: -0.73, to: 0.037 } },
          { name: "Tate McCubbin", min: 32, pts: 11, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 2.33, zScores: { pts: 0.477, reb: 0.286, ast: -0.21, stl: -0.737, blk: -0.402, tpm: 1.702, fgImpact: 0.261, ftImpact: 0, to: 0.952 } },
          { name: "Will Gerdes", min: 9, pts: 3, reb: 3, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 1, ftm: 3, fta: 4, composite: -5.26, zScores: { pts: -0.666, reb: -0.089, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0.209, to: -1.794 } },
          { name: "Jules Isebaert", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.83, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: 0, to: 0.037 } },
          { name: "Kyle Pock", min: 9, pts: 0, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.09, zScores: { pts: -1.095, reb: -0.84, ast: -0.21, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -1.088, ftImpact: 0, to: 0.952 } },
          { name: "Jaydon Kimbrough", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } },
          { name: "Levi Valdo", min: 17, pts: 3, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -0.95, zScores: { pts: -0.666, reb: 0.286, ast: -0.21, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: -0.297, ftImpact: 0, to: 0.952 } },
          { name: "Carson Vis", min: 30, pts: 17, reb: 3, ast: 1, stl: 2, blk: 0, to: 3, tpm: 3, fgm: 6, fga: 12, ftm: 2, fta: 2, composite: 2.95, zScores: { pts: 1.335, reb: -0.089, ast: -0.21, stl: 1.255, blk: -0.402, tpm: 1.702, fgImpact: 0.391, ftImpact: 0.765, to: -1.794 } },
          { name: "Redek Born", min: 9, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 1, composite: -2.48, zScores: { pts: -0.38, reb: -0.464, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.493, ftImpact: 0.383, to: 0.037 } }
        ]
      },
      home: {
        abbr: "FUR", name: "Furman Paladins", score: 98,
        players: [

        ]
      }
    },
      {
      id: "401920411",
      line: "Washington State Cougars 71 @ High Point Panthers 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WaSt", name: "Washington State Cougars", score: 71,
        players: [
          { name: "Tyler Kropp", min: 18, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -6.55, zScores: { pts: -1.095, reb: -0.464, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.725, ftImpact: 0, to: -2.71 } },
          { name: "Ladji Dembele", min: 21, pts: 3, reb: 4, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.96, zScores: { pts: -0.666, reb: 0.286, ast: -0.743, stl: 0.259, blk: -0.402, tpm: 0.121, fgImpact: 0.065, ftImpact: 0, to: -0.879 } },
          { name: "Lazerek Houston", min: 33, pts: 31, reb: 0, ast: 3, stl: 1, blk: 0, to: 1, tpm: 5, fgm: 9, fga: 13, ftm: 8, fta: 9, composite: 10.68, zScores: { pts: 3.336, reb: -1.215, ast: 0.858, stl: 0.259, blk: -0.402, tpm: 3.284, fgImpact: 2.399, ftImpact: 2.122, to: 0.037 } },
          { name: "Sebastian Akins", min: 20, pts: 3, reb: 1, ast: 3, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 10, ftm: 1, fta: 2, composite: -1.91, zScores: { pts: -0.666, reb: -0.84, ast: 0.858, stl: 2.252, blk: -0.402, tpm: -0.67, fgImpact: -2.835, ftImpact: -0.557, to: 0.952 } },
          { name: "Jaylen Harrell", min: 30, pts: 18, reb: 5, ast: 3, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 8, fga: 12, ftm: 0, fta: 0, composite: 3.94, zScores: { pts: 1.478, reb: 0.661, ast: 0.858, stl: 0.259, blk: -0.402, tpm: 0.911, fgImpact: 1.971, ftImpact: 0, to: -1.794 } },
          { name: "Mohamed Sankhe", min: 14, pts: 0, reb: 7, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -1.65, zScores: { pts: -1.095, reb: 1.412, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } },
          { name: "Dominik Robinson", min: 11, pts: 0, reb: 1, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -1.97, zScores: { pts: -1.095, reb: -0.84, ast: -0.21, stl: 0.259, blk: 0.915, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.037 } },
          { name: "Fraser Roxburgh", min: 11, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.27, zScores: { pts: -0.809, reb: -0.464, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.065, ftImpact: 0, to: 0.952 } },
          { name: "RJ Jones", min: 15, pts: 12, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 7, ftm: 0, fta: 1, composite: 1.55, zScores: { pts: 0.62, reb: -0.464, ast: 0.324, stl: -0.737, blk: -0.402, tpm: 2.493, fgImpact: 0.623, ftImpact: -0.939, to: 0.037 } },
          { name: "Casey Jones", min: 21, pts: 2, reb: 3, ast: 3, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -2.29, zScores: { pts: -0.809, reb: -0.089, ast: 0.858, stl: -0.737, blk: 0.915, tpm: -0.67, fgImpact: -0.725, ftImpact: 0.765, to: -1.794 } },
          { name: "Jamari Phillips", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } }
        ]
      },
      home: {
        abbr: "HPU", name: "High Point Panthers", score: 83,
        players: [

        ]
      }
    },
      {
      id: "401926825",
      line: "Hampton Pirates 61 @ George Washington Revolutionaries 75 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "HAMP", name: "Hampton Pirates", score: 61,
        players: [

        ]
      },
      home: {
        abbr: "GrgWas", name: "George Washington Revolutionaries", score: 75,
        players: [
          { name: "Lovro Urbiha", min: 24, pts: 8, reb: 4, ast: 2, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 2, fga: 6, ftm: 3, fta: 6, composite: -3.1, zScores: { pts: 0.049, reb: 0.286, ast: 0.324, stl: -0.737, blk: 0.915, tpm: 0.121, fgImpact: -0.595, ftImpact: -1.67, to: -1.794 } },
          { name: "Dylan James", min: 27, pts: 15, reb: 9, ast: 0, stl: 0, blk: 4, to: 1, tpm: 0, fgm: 6, fga: 6, ftm: 3, fta: 3, composite: 9.68, zScores: { pts: 1.049, reb: 2.162, ast: -0.743, stl: -0.737, blk: 4.864, tpm: -0.67, fgImpact: 2.566, ftImpact: 1.148, to: 0.037 } },
          { name: "Omari Witherspoon", min: 22, pts: 4, reb: 2, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 4, fta: 4, composite: -0.37, zScores: { pts: -0.523, reb: -0.464, ast: 1.392, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -1.45, ftImpact: 1.53, to: 0.952 } },
          { name: "Jean Aranguren", min: 27, pts: 17, reb: 2, ast: 4, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 7, ftm: 7, fta: 9, composite: 4.49, zScores: { pts: 1.335, reb: -0.464, ast: 1.392, stl: 0.259, blk: -0.402, tpm: 0.911, fgImpact: 0.623, ftImpact: 0.8, to: 0.037 } },
          { name: "Terrance Arceneaux", min: 18, pts: 3, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.68, zScores: { pts: -0.666, reb: 0.286, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: -0.66, ftImpact: 0, to: -0.879 } },
          { name: "Ryder Frost", min: 17, pts: 9, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: -2.3, zScores: { pts: 0.192, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: 0.986, ftImpact: 0, to: -0.879 } },
          { name: "Andrija Vukovic", min: 14, pts: 4, reb: 7, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -0.45, zScores: { pts: -0.523, reb: 1.412, ast: 1.392, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.957, ftImpact: 0, to: 0.037 } },
          { name: "Promis N'Landu", min: 17, pts: 5, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 1, composite: -1.92, zScores: { pts: -0.38, reb: -0.089, ast: -0.21, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: -0.232, ftImpact: -0.939, to: 0.952 } },
          { name: "Felix Kossaras", min: 20, pts: 8, reb: 7, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 1.27, zScores: { pts: 0.049, reb: 1.412, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.911, fgImpact: -0.167, ftImpact: 0, to: 0.952 } },
          { name: "Andrew Phillips", min: 14, pts: 2, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.09, zScores: { pts: -0.809, reb: -0.464, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.297, ftImpact: 0, to: 0.037 } }
        ]
      }
    },
      {
      id: "401924895",
      line: "Northern Arizona Lumberjacks 65 @ New Mexico Lobos 94 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NAU", name: "Northern Arizona Lumberjacks", score: 65,
        players: [

        ]
      },
      home: {
        abbr: "NM", name: "New Mexico Lobos", score: 94,
        players: [
          { name: "Federico Grani", min: 12, pts: 6, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -1.91, zScores: { pts: -0.237, reb: 0.286, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.558, ftImpact: 0, to: 0.037 } },
          { name: "Tunde Vahlberg Fasasi", min: 25, pts: 8, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -0.81, zScores: { pts: 0.049, reb: -0.84, ast: -0.21, stl: -0.737, blk: -0.402, tpm: 0.911, fgImpact: -0.53, ftImpact: 0, to: 0.952 } },
          { name: "Hudson Mayes", min: 26, pts: 16, reb: 7, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 8, fga: 17, ftm: 0, fta: 3, composite: 1.48, zScores: { pts: 1.192, reb: 1.412, ast: 1.392, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: 0.159, ftImpact: -2.817, to: 0.952 } },
          { name: "Uriah Tenette", min: 24, pts: 18, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 11, ftm: 7, fta: 8, composite: 2.15, zScores: { pts: 1.478, reb: -1.215, ast: -0.743, stl: 0.259, blk: -0.402, tpm: 0.121, fgImpact: -0.037, ftImpact: 1.739, to: 0.952 } },
          { name: "Jake Hall", min: 26, pts: 23, reb: 6, ast: 1, stl: 3, blk: 0, to: 0, tpm: 2, fgm: 6, fga: 10, ftm: 9, fta: 9, composite: 11.29, zScores: { pts: 2.193, reb: 1.037, ast: -0.21, stl: 2.252, blk: -0.402, tpm: 0.911, fgImpact: 1.116, ftImpact: 3.444, to: 0.952 } },
          { name: "Fynn Lastring", min: 15, pts: 8, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 0.14, zScores: { pts: 0.049, reb: -0.089, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.911, fgImpact: 0.195, ftImpact: 0, to: 0.952 } },
          { name: "Benjamin Schuch", min: 14, pts: 4, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.01, zScores: { pts: -0.523, reb: -0.089, ast: 0.324, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.13, ftImpact: 0, to: 0.952 } },
          { name: "Imran Suljanovic", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } },
          { name: "Dax Hall", min: 26, pts: 6, reb: 4, ast: 3, stl: 4, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 3.68, zScores: { pts: -0.237, reb: 0.286, ast: 0.858, stl: 3.248, blk: -0.402, tpm: -0.67, fgImpact: 0.558, ftImpact: 0, to: 0.037 } },
          { name: "Chris Howell", min: 29, pts: 5, reb: 4, ast: 9, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 4, composite: 5.01, zScores: { pts: -0.38, reb: 0.286, ast: 4.061, stl: 1.255, blk: -0.402, tpm: -0.67, fgImpact: -0.297, ftImpact: 0.209, to: 0.952 } }
        ]
      }
    },
      {
      id: "401925772",
      line: "Mercer Bears 76 @ Davidson Wildcats 88 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MER", name: "Mercer Bears", score: 76,
        players: [

        ]
      },
      home: {
        abbr: "David", name: "Davidson Wildcats", score: 88,
        players: [
          { name: "Josh Scovens", min: 36, pts: 16, reb: 9, ast: 3, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 6, fga: 13, ftm: 3, fta: 4, composite: 3.87, zScores: { pts: 1.192, reb: 2.162, ast: 0.858, stl: -0.737, blk: 0.915, tpm: 0.121, fgImpact: 0.028, ftImpact: 0.209, to: -0.879 } },
          { name: "Jackson Keith", min: 30, pts: 9, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 1, fta: 1, composite: 0.04, zScores: { pts: 0.192, reb: -0.089, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.623, ftImpact: 0.383, to: 0.952 } },
          { name: "Ian Platteeuw", min: 31, pts: 12, reb: 12, ast: 2, stl: 0, blk: 2, to: 2, tpm: 1, fgm: 5, fga: 11, ftm: 1, fta: 3, composite: 3.44, zScores: { pts: 0.62, reb: 3.288, ast: 0.324, stl: -0.737, blk: 2.231, tpm: 0.121, fgImpact: -0.037, ftImpact: -1.496, to: -0.879 } },
          { name: "Sam Brown", min: 26, pts: 18, reb: 2, ast: 3, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 7, fga: 13, ftm: 1, fta: 1, composite: 4.59, zScores: { pts: 1.478, reb: -0.464, ast: 0.858, stl: -0.737, blk: -0.402, tpm: 1.702, fgImpact: 0.819, ftImpact: 0.383, to: 0.952 } },
          { name: "Nick Janowski", min: 33, pts: 25, reb: 4, ast: 3, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 11, fga: 16, ftm: 2, fta: 2, composite: 8.29, zScores: { pts: 2.479, reb: 0.286, ast: 0.858, stl: 1.255, blk: -0.402, tpm: 0.121, fgImpact: 2.892, ftImpact: 0.765, to: 0.037 } },
          { name: "Tom Stoiber", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: 0, to: 0.952 } },
          { name: "JaQualon Roberts", min: 9, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.07, zScores: { pts: -0.809, reb: -0.089, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.428, ftImpact: 0, to: 0.952 } },
          { name: "Eetu Heinonen", min: 9, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.9, zScores: { pts: -1.095, reb: -0.84, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } },
          { name: "Nick Coval", min: 14, pts: 3, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.72, zScores: { pts: -0.666, reb: -1.215, ast: -0.743, stl: 0.259, blk: -0.402, tpm: 0.121, fgImpact: -1.023, ftImpact: 0, to: 0.952 } },
          { name: "John Carter Jr.", min: 8, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.45, zScores: { pts: -0.666, reb: -1.215, ast: -0.21, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: -0.297, ftImpact: 0, to: 0.952 } }
        ]
      }
    },
      {
      id: "401911262",
      line: "St. Bonaventure Bonnies 88 @ Canisius Golden Griffins 49 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "StBon", name: "St. Bonaventure Bonnies", score: 88,
        players: [
          { name: "Benjamin Bill", min: 19, pts: 10, reb: 5, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 5, fga: 5, ftm: 0, fta: 0, composite: 3.25, zScores: { pts: 0.334, reb: 0.661, ast: -0.743, stl: -0.737, blk: 2.231, tpm: -0.67, fgImpact: 2.138, ftImpact: 0, to: 0.037 } },
          { name: "Zach Philipkoski", min: 21, pts: 16, reb: 3, ast: 4, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 6, ftm: 2, fta: 2, composite: 8.42, zScores: { pts: 1.192, reb: -0.089, ast: 1.392, stl: 1.255, blk: -0.402, tpm: 2.493, fgImpact: 1.776, ftImpact: 0.765, to: 0.037 } },
          { name: "Ilia Ermakov", min: 18, pts: 3, reb: 4, ast: 5, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.29, zScores: { pts: -0.666, reb: 0.286, ast: 1.926, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: -1.023, ftImpact: 0, to: -1.794 } },
          { name: "Taj Au-Duke", min: 19, pts: 7, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: -1.41, zScores: { pts: -0.094, reb: -0.84, ast: 0.324, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.232, ftImpact: 0.209, to: 0.037 } },
          { name: "Ari Fulton", min: 22, pts: 18, reb: 8, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 10, ftm: 4, fta: 5, composite: 4.65, zScores: { pts: 1.478, reb: 1.787, ast: -0.21, stl: 0.259, blk: -0.402, tpm: 0.911, fgImpact: 1.116, ftImpact: 0.591, to: -0.879 } },
          { name: "Cameron Blankenberg", min: 18, pts: 8, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 1.63, zScores: { pts: 0.049, reb: 0.661, ast: -0.21, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: 0.986, ftImpact: 0, to: 0.952 } },
          { name: "John Ikpotokin", min: 8, pts: 2, reb: 1, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.97, zScores: { pts: -0.809, reb: -0.84, ast: -0.21, stl: -0.737, blk: 0.915, tpm: -0.67, fgImpact: 0.428, ftImpact: 0, to: 0.952 } },
          { name: "Ryan Kalambay", min: 15, pts: 0, reb: 3, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 3, composite: -5.39, zScores: { pts: -1.095, reb: -0.089, ast: -0.21, stl: -0.737, blk: 0.915, tpm: -0.67, fgImpact: -0.725, ftImpact: -2.817, to: 0.037 } },
          { name: "Chiek Diallo", min: 6, pts: 5, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: -1.89, zScores: { pts: -0.38, reb: -0.84, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: 0.493, ftImpact: -0.557, to: 0.952 } },
          { name: "Leo Kirk", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.2, zScores: { pts: -0.809, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.428, ftImpact: 0, to: 0.952 } },
          { name: "Ryan Heath", min: 21, pts: 4, reb: 2, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 3, composite: 0.07, zScores: { pts: -0.523, reb: -0.464, ast: 1.392, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.297, ftImpact: -0.174, to: 0.952 } },
          { name: "Achille Lonati", min: 12, pts: 3, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.84, zScores: { pts: -0.666, reb: 0.661, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: -1.023, ftImpact: 0, to: 0.952 } },
          { name: "Akbar Waheed III", min: 13, pts: 10, reb: 7, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 2, fta: 4, composite: -1.26, zScores: { pts: 0.334, reb: 1.412, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.623, ftImpact: -1.113, to: 0.037 } },
          { name: "Jack DeRose", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: 0, to: 0.952 } }
        ]
      },
      home: {
        abbr: "CAN", name: "Canisius Golden Griffins", score: 49,
        players: [

        ]
      }
    },
      {
      id: "401911186",
      line: "Northern Illinois Huskies 81 @ Dayton Flyers 76 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "NIU", name: "Northern Illinois Huskies", score: 81,
        players: [

        ]
      },
      home: {
        abbr: "Dayt", name: "Dayton Flyers", score: 76,
        players: [
          { name: "Grant Randall", min: 35, pts: 7, reb: 5, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 1, composite: 0.94, zScores: { pts: -0.094, reb: 0.661, ast: -0.743, stl: 0.259, blk: 0.915, tpm: -0.67, fgImpact: 0.195, ftImpact: 0.383, to: 0.037 } },
          { name: "Amal L'Etang", min: 27, pts: 16, reb: 6, ast: 2, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 6, ftm: 6, fta: 10, composite: 3.49, zScores: { pts: 1.192, reb: 1.037, ast: 0.324, stl: 1.255, blk: 0.915, tpm: -0.67, fgImpact: 1.776, ftImpact: -1.461, to: -0.879 } },
          { name: "Tristian Ford", min: 38, pts: 5, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 8, ftm: 5, fta: 6, composite: -3.06, zScores: { pts: -0.38, reb: -1.215, ast: 0.324, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -2.9, ftImpact: 0.974, to: 0.952 } },
          { name: "Aiden Derkack", min: 40, pts: 20, reb: 10, ast: 2, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 8, ftm: 10, fta: 14, composite: 3.14, zScores: { pts: 1.764, reb: 2.538, ast: 0.324, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: 1.051, ftImpact: 0.07, to: -1.794 } },
          { name: "Travis Perry", min: 13, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.38, zScores: { pts: -1.095, reb: -1.215, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -1.088, ftImpact: 0, to: 0.037 } },
          { name: "Damon Friery", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: 0, to: 0.952 } },
          { name: "Jaiun Simon", min: 16, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.095, reb: -0.84, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.037 } },
          { name: "Malcolm Thomas", min: 14, pts: 4, reb: 1, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -0.05, zScores: { pts: -0.523, reb: -0.84, ast: -0.743, stl: -0.737, blk: 2.231, tpm: -0.67, fgImpact: 0.428, ftImpact: 0.765, to: 0.037 } },
          { name: "Jalen Haynes", min: 6, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 3, fta: 4, composite: -3.1, zScores: { pts: -0.38, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.428, ftImpact: 0.209, to: 0.037 } },
          { name: "Landen Joseph", min: 32, pts: 19, reb: 2, ast: 0, stl: 3, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 15, ftm: 3, fta: 4, composite: 2.6, zScores: { pts: 1.621, reb: -0.464, ast: -0.743, stl: 2.252, blk: -0.402, tpm: 0.911, fgImpact: 0.093, ftImpact: 0.209, to: -0.879 } },
          { name: "Jaron McKie", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: 0, to: 0.952 } }
        ]
      }
    },
      {
      id: "401909532",
      line: "Providence Friars 58 @ Nebraska Cornhuskers 67 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Prov", name: "Providence Friars", score: 58,
        players: [
          { name: "Leonardo Marangon", min: 21, pts: 12, reb: 4, ast: 1, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: -1.72, zScores: { pts: 0.62, reb: 0.286, ast: -0.21, stl: -0.737, blk: -0.402, tpm: 0.911, fgImpact: -0.399, ftImpact: 0, to: -1.794 } },
          { name: "Jacob Bannarbie", min: 21, pts: 6, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -1.78, zScores: { pts: -0.237, reb: -0.84, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 1.283, ftImpact: 0, to: 0.037 } },
          { name: "Malik Mack", min: 29, pts: 8, reb: 2, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 8, ftm: 5, fta: 5, composite: 1.18, zScores: { pts: 0.049, reb: -0.464, ast: 0.858, stl: 0.259, blk: -0.402, tpm: 0.121, fgImpact: -2.11, ftImpact: 1.913, to: 0.952 } },
          { name: "Ryan Mela", min: 27, pts: 9, reb: 8, ast: 2, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 4, fga: 12, ftm: 0, fta: 0, composite: -0.38, zScores: { pts: 0.192, reb: 1.787, ast: 0.324, stl: -0.737, blk: 0.915, tpm: 0.121, fgImpact: -1.19, ftImpact: 0, to: -1.794 } },
          { name: "Miles Byrd", min: 18, pts: 5, reb: 2, ast: 0, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -3.34, zScores: { pts: -0.38, reb: -0.464, ast: -0.743, stl: -0.737, blk: 0.915, tpm: 0.121, fgImpact: -1.023, ftImpact: 0.765, to: -1.794 } },
          { name: "Javon Bardwell", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.73, zScores: { pts: -1.095, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: -0.879 } },
          { name: "Elijah Saunders", min: 22, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -0.809, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -1.023, ftImpact: 0, to: 0.952 } },
          { name: "Ryan Sabol", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } },
          { name: "Devin Vanterpool", min: 26, pts: 11, reb: 6, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 11, ftm: 3, fta: 3, composite: 2.63, zScores: { pts: 0.477, reb: 1.037, ast: 0.858, stl: -0.737, blk: -0.402, tpm: 0.911, fgImpact: -1.617, ftImpact: 1.148, to: 0.952 } },
          { name: "Gavin Hightower", min: 30, pts: 5, reb: 5, ast: 0, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 1, fga: 4, ftm: 3, fta: 4, composite: -4.44, zScores: { pts: -0.38, reb: 0.661, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.66, ftImpact: 0.209, to: -2.71 } }
        ]
      },
      home: {
        abbr: "Nebras", name: "Nebraska Cornhuskers", score: 67,
        players: [
          { name: "Braden Frager", min: 33, pts: 12, reb: 3, ast: 1, stl: 4, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 13, ftm: 5, fta: 7, composite: 1.93, zScores: { pts: 0.62, reb: -0.089, ast: -0.21, stl: 3.248, blk: -0.402, tpm: 0.121, fgImpact: -2.343, ftImpact: 0.035, to: 0.952 } },
          { name: "Boden Kapke", min: 22, pts: 13, reb: 5, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 6, ftm: 2, fta: 2, composite: 1.86, zScores: { pts: 0.763, reb: 0.661, ast: -0.21, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: 1.776, ftImpact: 0.765, to: -0.879 } },
          { name: "Pryce Sandfort", min: 35, pts: 25, reb: 1, ast: 4, stl: 3, blk: 0, to: 1, tpm: 3, fgm: 9, fga: 14, ftm: 4, fta: 4, composite: 10.19, zScores: { pts: 2.479, reb: -0.84, ast: 1.392, stl: 2.252, blk: -0.402, tpm: 1.702, fgImpact: 2.036, ftImpact: 1.53, to: 0.037 } },
          { name: "Cale Jacobsen", min: 36, pts: 11, reb: 2, ast: 2, stl: 3, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 3, ftm: 7, fta: 9, composite: 1.02, zScores: { pts: 0.477, reb: -0.464, ast: 0.324, stl: 2.252, blk: -0.402, tpm: -0.67, fgImpact: 0.493, ftImpact: 0.8, to: -1.794 } },
          { name: "Trevan Leonhardt", min: 15, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } },
          { name: "Damon Wilkinson", min: 17, pts: 6, reb: 7, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -1.26, zScores: { pts: -0.237, reb: 1.412, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: 0.921, ftImpact: 0, to: -1.794 } },
          { name: "Sam Orme", min: 10, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.15, zScores: { pts: -1.095, reb: -0.089, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } },
          { name: "Jacob Lanier", min: 9, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.095, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.725, ftImpact: 0, to: 0.952 } },
          { name: "Taj DeGourville", min: 23, pts: 0, reb: 3, ast: 7, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 2, composite: -3.57, zScores: { pts: -1.095, reb: -0.089, ast: 2.994, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -1.813, ftImpact: -1.878, to: -0.879 } }
        ]
      }
    },
      {
      id: "401926227",
      line: "Denver Pioneers 60 @ UC Riverside Highlanders 64 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Denv", name: "Denver Pioneers", score: 60,
        players: [
          { name: "Oskar Stumer", min: 32, pts: 2, reb: 8, ast: 1, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 0, fga: 5, ftm: 2, fta: 2, composite: -2.57, zScores: { pts: -0.809, reb: 1.787, ast: -0.21, stl: -0.737, blk: 0.915, tpm: -0.67, fgImpact: -1.813, ftImpact: 0.765, to: -1.794 } },
          { name: "Charlie Dimmock", min: 16, pts: 4, reb: 5, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -2.4, zScores: { pts: -0.523, reb: 0.661, ast: -0.21, stl: -0.737, blk: 0.915, tpm: -0.67, fgImpact: -0.957, ftImpact: 0, to: -0.879 } },
          { name: "Shaun Wysocki", min: 35, pts: 13, reb: 9, ast: 1, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 9, ftm: 3, fta: 6, composite: -1.87, zScores: { pts: 0.763, reb: 2.162, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.688, ftImpact: -1.67, to: -1.794 } },
          { name: "Carson Johnson", min: 38, pts: 11, reb: 1, ast: 1, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 14, ftm: 0, fta: 0, composite: -3.51, zScores: { pts: 0.477, reb: -0.84, ast: -0.21, stl: 0.259, blk: -0.402, tpm: 0.121, fgImpact: -1.125, ftImpact: 0, to: -1.794 } },
          { name: "Kam Martin", min: 18, pts: 14, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 8, ftm: 2, fta: 2, composite: 3.36, zScores: { pts: 0.906, reb: 1.037, ast: -0.21, stl: -0.737, blk: -0.402, tpm: 0.911, fgImpact: 1.051, ftImpact: 0.765, to: 0.037 } },
          { name: "Harry Bates", min: 19, pts: 6, reb: 5, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 0.36, zScores: { pts: -0.237, reb: 0.661, ast: -0.21, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: 0.921, ftImpact: 0, to: 0.037 } },
          { name: "Jordan Rogers", min: 10, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.54, zScores: { pts: -1.095, reb: -0.84, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -1.088, ftImpact: 0, to: 0.037 } },
          { name: "Spencer Mahoney", min: 3, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.52, zScores: { pts: -1.095, reb: -0.464, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } },
          { name: "CJ Hyland", min: 10, pts: 7, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 1, fta: 1, composite: -0.33, zScores: { pts: -0.094, reb: -0.84, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 1.283, ftImpact: 0.383, to: 0.952 } },
          { name: "Logan Threatt", min: 20, pts: 3, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 2, composite: -4.25, zScores: { pts: -0.666, reb: -0.464, ast: 0.324, stl: 0.259, blk: -0.402, tpm: 0.121, fgImpact: -0.66, ftImpact: -1.878, to: -0.879 } }
        ]
      },
      home: {
        abbr: "UCR", name: "UC Riverside Highlanders", score: 64,
        players: [

        ]
      }
    },
      {
      id: "401925780",
      line: "Central State Marauders 58 @ Duquesne Dukes 68 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CNSU", name: "Central State Marauders", score: 58,
        players: [

        ]
      },
      home: {
        abbr: "Duques", name: "Duquesne Dukes", score: 68,
        players: [
          { name: "Kerem Konan", min: 26, pts: 11, reb: 8, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 7, ftm: 6, fta: 10, composite: -0.73, zScores: { pts: 0.477, reb: 1.787, ast: 0.324, stl: 0.259, blk: -0.402, tpm: 0.121, fgImpact: -0.957, ftImpact: -1.461, to: -0.879 } },
          { name: "Yoav Berman", min: 35, pts: 22, reb: 7, ast: 4, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 7, fga: 10, ftm: 4, fta: 4, composite: 11.67, zScores: { pts: 2.05, reb: 1.412, ast: 1.392, stl: 1.255, blk: -0.402, tpm: 2.493, fgImpact: 1.906, ftImpact: 1.53, to: 0.037 } },
          { name: "Ege Demir", min: 12, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -2.14, zScores: { pts: -0.523, reb: -0.464, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.065, ftImpact: 0.765, to: 0.037 } },
          { name: "Jackson Williams", min: 14, pts: 2, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.89, zScores: { pts: -0.809, reb: 0.286, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.297, ftImpact: 0, to: 0.952 } },
          { name: "Arness Lawson", min: 27, pts: 10, reb: 8, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 2.84, zScores: { pts: 0.334, reb: 1.787, ast: -0.743, stl: 1.255, blk: -0.402, tpm: -0.67, fgImpact: 0.326, ftImpact: 0, to: 0.952 } },
          { name: "Zoje Owinje", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: 0, to: 0.952 } },
          { name: "Stephen Olowoniyi", min: 15, pts: 7, reb: 3, ast: 0, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 3, fta: 6, composite: -3.16, zScores: { pts: -0.094, reb: -0.089, ast: -0.743, stl: 1.255, blk: -0.402, tpm: -0.67, fgImpact: 0.13, ftImpact: -1.67, to: -0.879 } },
          { name: "Izaiah Pasha", min: 26, pts: 5, reb: 1, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -3.91, zScores: { pts: -0.38, reb: -0.84, ast: -0.21, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.232, ftImpact: -0.557, to: -0.879 } },
          { name: "Brandon Hall", min: 6, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.095, reb: -0.84, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.037 } },
          { name: "Josh Smith", min: 14, pts: 1, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 1, fta: 2, composite: -4.94, zScores: { pts: -0.952, reb: -0.464, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -1.45, ftImpact: -0.557, to: 0.037 } },
          { name: "Jake DiMichele", min: 21, pts: 6, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -2.67, zScores: { pts: -0.237, reb: -0.84, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.53, ftImpact: 0, to: 0.952 } }
        ]
      }
    },
      {
      id: "401909513",
      line: "Maryland Terrapins 74 @ Georgetown Hoyas 86 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MD", name: "Maryland Terrapins", score: 74,
        players: [
          { name: "Tomislav Buljan", min: 21, pts: 4, reb: 10, ast: 1, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -1.69, zScores: { pts: -0.523, reb: 2.538, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.66, ftImpact: 0.765, to: -1.794 } },
          { name: "Pharrel Payne", min: 30, pts: 28, reb: 8, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 10, fga: 14, ftm: 8, fta: 8, composite: 6.24, zScores: { pts: 2.907, reb: 1.787, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 2.827, ftImpact: 3.061, to: -1.794 } },
          { name: "Mike McNair Jr.", min: 21, pts: 0, reb: 0, ast: 0, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.47, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: 1.255, blk: -0.402, tpm: -0.67, fgImpact: -0.725, ftImpact: 0, to: -0.879 } },
          { name: "Andre Mills", min: 19, pts: 9, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 15, ftm: 0, fta: 0, composite: -2.36, zScores: { pts: 0.192, reb: -0.464, ast: -0.743, stl: 0.259, blk: -0.402, tpm: 0.121, fgImpact: -2.277, ftImpact: 0, to: 0.952 } },
          { name: "DJ Wagner", min: 29, pts: 11, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 10, ftm: 3, fta: 3, composite: 1.53, zScores: { pts: 0.477, reb: 0.286, ast: 0.858, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.465, ftImpact: 1.148, to: 0.037 } },
          { name: "Adama Tambedou", min: 1, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -3.23, zScores: { pts: -0.666, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.428, ftImpact: -0.557, to: 0.952 } },
          { name: "Baba Oladotun", min: 18, pts: 2, reb: 2, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 2, composite: -3.06, zScores: { pts: -0.809, reb: -0.464, ast: -0.743, stl: 1.255, blk: -0.402, tpm: -0.67, fgImpact: -0.297, ftImpact: -1.878, to: 0.952 } },
          { name: "Austin Brown", min: 5, pts: 0, reb: 0, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.42, zScores: { pts: -1.095, reb: -1.215, ast: -0.21, stl: -0.737, blk: 0.915, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } },
          { name: "Robert Jennings II", min: 14, pts: 2, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.89, zScores: { pts: -0.809, reb: 0.286, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.065, ftImpact: 0, to: -0.879 } },
          { name: "Kaden House", min: 21, pts: 13, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 5, fta: 7, composite: 1.58, zScores: { pts: 0.763, reb: -0.464, ast: 0.324, stl: -0.737, blk: -0.402, tpm: 0.911, fgImpact: 0.195, ftImpact: 0.035, to: 0.952 } },
          { name: "Bishop Boswell", min: 21, pts: 2, reb: 3, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -0.809, reb: -0.089, ast: 0.324, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -1.023, ftImpact: 0, to: -0.879 } }
        ]
      },
      home: {
        abbr: "GTown", name: "Georgetown Hoyas", score: 86,
        players: [
          { name: "Caleb Williams", min: 27, pts: 6, reb: 5, ast: 1, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 6, fta: 6, composite: 2.6, zScores: { pts: -0.237, reb: 0.661, ast: -0.21, stl: 1.255, blk: 0.915, tpm: -0.67, fgImpact: -1.45, ftImpact: 2.296, to: 0.037 } },
          { name: "Vince Iwuchukwu", min: 22, pts: 12, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 9, ftm: 2, fta: 7, composite: -3.32, zScores: { pts: 0.62, reb: 0.286, ast: -0.21, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: 0.688, ftImpact: -3.931, to: 0.037 } },
          { name: "Kayvaun Mulready", min: 35, pts: 15, reb: 3, ast: 2, stl: 3, blk: 1, to: 1, tpm: 5, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 8.1, zScores: { pts: 1.049, reb: -0.089, ast: 0.324, stl: 2.252, blk: 0.915, tpm: 3.284, fgImpact: 0.326, ftImpact: 0, to: 0.037 } },
          { name: "Elmarko Jackson", min: 32, pts: 17, reb: 2, ast: 2, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 5, fga: 7, ftm: 4, fta: 4, composite: 2.91, zScores: { pts: 1.335, reb: -0.464, ast: 0.324, stl: -0.737, blk: -0.402, tpm: 1.702, fgImpact: 1.413, ftImpact: 1.53, to: -1.794 } },
          { name: "Jaland Lowe", min: 36, pts: 22, reb: 5, ast: 8, stl: 0, blk: 0, to: 3, tpm: 5, fgm: 6, fga: 9, ftm: 5, fta: 8, composite: 7.16, zScores: { pts: 2.05, reb: 0.661, ast: 3.528, stl: -0.737, blk: -0.402, tpm: 3.284, fgImpact: 1.478, ftImpact: -0.904, to: -1.794 } },
          { name: "Josiah Parker", min: 13, pts: 2, reb: 0, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -5.14, zScores: { pts: -0.809, reb: -1.215, ast: -0.21, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.297, ftImpact: 0, to: -1.794 } },
          { name: "Chol Machot", min: 18, pts: 6, reb: 5, ast: 0, stl: 0, blk: 5, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 5.96, zScores: { pts: -0.237, reb: 0.661, ast: -0.743, stl: -0.737, blk: 6.181, tpm: -0.67, fgImpact: 0.558, ftImpact: 0, to: 0.952 } },
          { name: "Seal Diouf", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } },
          { name: "Gabriel Landeira", min: 16, pts: 6, reb: 2, ast: 4, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.63, zScores: { pts: -0.237, reb: -0.464, ast: 1.392, stl: -0.737, blk: -0.402, tpm: 0.911, fgImpact: 0.13, ftImpact: 0, to: 0.037 } }
        ]
      }
    },
      {
      id: "401925077",
      line: "Northwestern State Demons 71 @ Murray State Racers 93 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NWST", name: "Northwestern State Demons", score: 71,
        players: [

        ]
      },
      home: {
        abbr: "Mur", name: "Murray State Racers", score: 93,
        players: [
          { name: "Brigham Rogers", min: 30, pts: 4, reb: 8, ast: 0, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: 2.89, zScores: { pts: -0.523, reb: 1.787, ast: -0.743, stl: 1.255, blk: 0.915, tpm: -0.67, fgImpact: 0.065, ftImpact: 0.765, to: 0.037 } },
          { name: "Talis Soulhac", min: 17, pts: 4, reb: 3, ast: 6, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 1, composite: -3.84, zScores: { pts: -0.523, reb: -0.089, ast: 2.46, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.232, ftImpact: -0.939, to: -2.71 } },
          { name: "Roman Domon", min: 33, pts: 17, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 16, ftm: 9, fta: 11, composite: 0.63, zScores: { pts: 1.335, reb: 0.286, ast: 0.858, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -2.64, ftImpact: 1.565, to: 0.037 } },
          { name: "Brayden Shorter", min: 25, pts: 29, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 8, fgm: 10, fga: 16, ftm: 1, fta: 1, composite: 8.51, zScores: { pts: 3.05, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 5.656, fgImpact: 2.102, ftImpact: 0.383, to: 0.037 } },
          { name: "Lachlan Crate", min: 16, pts: 5, reb: 5, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 4, composite: -2.18, zScores: { pts: -0.38, reb: 0.661, ast: -0.743, stl: 1.255, blk: -0.402, tpm: -0.67, fgImpact: 0.493, ftImpact: -2.435, to: 0.037 } },
          { name: "Jonas Boulefaa", min: 10, pts: 13, reb: 2, ast: 1, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 4, ftm: 2, fta: 2, composite: 3.25, zScores: { pts: 0.763, reb: -0.464, ast: -0.21, stl: 0.259, blk: -0.402, tpm: 1.702, fgImpact: 1.711, ftImpact: 0.765, to: -0.879 } },
          { name: "Pavle Nikolic", min: 8, pts: 0, reb: 2, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 1, composite: -4.86, zScores: { pts: -1.095, reb: -0.464, ast: 0.324, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: -0.939, to: -0.879 } },
          { name: "Mathis Courbon", min: 20, pts: 11, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 4, ftm: 2, fta: 2, composite: 2.91, zScores: { pts: 0.477, reb: -0.84, ast: 0.858, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: 1.711, ftImpact: 0.765, to: 0.952 } },
          { name: "Ben Shtolzberg", min: 13, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.94, zScores: { pts: -0.809, reb: -1.215, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.065, ftImpact: 0, to: 0.037 } },
          { name: "Kaden Magwood", min: 5, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.095, reb: -0.464, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -1.088, ftImpact: 0, to: 0.952 } },
          { name: "Christian Jones", min: 23, pts: 8, reb: 6, ast: 7, stl: 5, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 9.98, zScores: { pts: 0.049, reb: 1.037, ast: 2.994, stl: 4.244, blk: -0.402, tpm: 0.911, fgImpact: 0.195, ftImpact: 0, to: 0.952 } }
        ]
      }
    },
      {
      id: "401923392",
      line: "Southern Indiana Screaming Eagles 76 @ Evansville Purple Aces 78 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "USI", name: "Southern Indiana Screaming Eagles", score: 76,
        players: [

        ]
      },
      home: {
        abbr: "Evans", name: "Evansville Purple Aces", score: 78,
        players: [
          { name: "James Dyson-Merwe", min: 11, pts: 4, reb: 2, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.25, zScores: { pts: -0.523, reb: -0.464, ast: -0.743, stl: -0.737, blk: 0.915, tpm: -0.67, fgImpact: 0.855, ftImpact: 0, to: -0.879 } },
          { name: "AJ Casey", min: 42, pts: 19, reb: 8, ast: 4, stl: 2, blk: 2, to: 1, tpm: 4, fgm: 5, fga: 12, ftm: 5, fta: 8, composite: 9.51, zScores: { pts: 1.621, reb: 1.787, ast: 1.392, stl: 1.255, blk: 2.231, tpm: 2.493, fgImpact: -0.399, ftImpact: -0.904, to: 0.037 } },
          { name: "Bryce Quinet", min: 39, pts: 23, reb: 2, ast: 7, stl: 0, blk: 3, to: 1, tpm: 2, fgm: 7, fga: 19, ftm: 7, fta: 8, composite: 8.86, zScores: { pts: 2.193, reb: -0.464, ast: 2.994, stl: -0.737, blk: 3.548, tpm: 0.911, fgImpact: -1.357, ftImpact: 1.739, to: 0.037 } },
          { name: "Max Langenfeld", min: 31, pts: 14, reb: 7, ast: 1, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: 4.38, zScores: { pts: 0.906, reb: 1.412, ast: -0.21, stl: -0.737, blk: -0.402, tpm: 2.493, fgImpact: -0.037, ftImpact: 0, to: 0.952 } },
          { name: "Makuei Riek", min: 33, pts: 6, reb: 10, ast: 1, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 2, fga: 9, ftm: 0, fta: 0, composite: 0.62, zScores: { pts: -0.237, reb: 2.538, ast: -0.21, stl: -0.737, blk: 0.915, tpm: 0.911, fgImpact: -1.683, ftImpact: 0, to: -0.879 } },
          { name: "Gustav Winther", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: 0, to: 0.952 } },
          { name: "Caden Symons", min: 31, pts: 9, reb: 6, ast: 5, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 8, ftm: 0, fta: 1, composite: 4.28, zScores: { pts: 0.192, reb: 1.037, ast: 1.926, stl: 1.255, blk: -0.402, tpm: 1.702, fgImpact: -0.53, ftImpact: -0.939, to: 0.037 } },
          { name: "JR Kemm", min: 7, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.44, zScores: { pts: -1.095, reb: -0.464, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.037 } },
          { name: "Aaron Gutman", min: 26, pts: 3, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 4, composite: -4.64, zScores: { pts: -0.666, reb: -0.089, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: 0.065, ftImpact: -2.435, to: 0.037 } }
        ]
      }
    },
      {
      id: "401917518",
      line: "Pacific Tigers 63 @ Bradley Braves 52 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Pacif", name: "Pacific Tigers", score: 63,
        players: [
          { name: "Gavin Ripp", min: 30, pts: 6, reb: 12, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 1, composite: 2.54, zScores: { pts: -0.237, reb: 3.288, ast: 0.324, stl: -0.737, blk: 0.915, tpm: -0.67, fgImpact: 0.558, ftImpact: -0.939, to: 0.037 } },
          { name: "Jaylen Thompson", min: 15, pts: 4, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -1.9, zScores: { pts: -0.523, reb: 0.286, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: -0.297, ftImpact: -0.557, to: 0.952 } },
          { name: "Jaion Pitt", min: 33, pts: 14, reb: 7, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 10, ftm: 1, fta: 3, composite: 1.9, zScores: { pts: 0.906, reb: 1.412, ast: 0.858, stl: 0.259, blk: -0.402, tpm: 0.121, fgImpact: 1.116, ftImpact: -1.496, to: -0.879 } },
          { name: "Adriel Nyorha", min: 39, pts: 17, reb: 7, ast: 2, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 15, ftm: 5, fta: 6, composite: 0.54, zScores: { pts: 1.335, reb: 1.412, ast: 0.324, stl: -0.737, blk: -0.402, tpm: 0.911, fgImpact: -1.487, ftImpact: 0.974, to: -1.794 } },
          { name: "Jaden Winston", min: 38, pts: 20, reb: 1, ast: 2, stl: 5, blk: 0, to: 4, tpm: 2, fgm: 7, fga: 13, ftm: 4, fta: 4, composite: 5.64, zScores: { pts: 1.764, reb: -0.84, ast: 0.324, stl: 4.244, blk: -0.402, tpm: 0.911, fgImpact: 0.819, ftImpact: 1.53, to: -2.71 } },
          { name: "Jacob McFarland", min: 15, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.41, zScores: { pts: -1.095, reb: 0.286, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: 0, to: 0.952 } },
          { name: "CJ Jones", min: 22, pts: 0, reb: 4, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 6, ftm: 0, fta: 0, composite: -6.33, zScores: { pts: -1.095, reb: 0.286, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -2.175, ftImpact: 0, to: -1.794 } },
          { name: "Dominick Harris", min: 8, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -2.86, zScores: { pts: -0.809, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: 0.765, to: 0.952 } }
        ]
      },
      home: {
        abbr: "Brad", name: "Bradley Braves", score: 52,
        players: [
          { name: "Josh Ibukunoluwa", min: 33, pts: 9, reb: 8, ast: 2, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 4, fga: 8, ftm: 0, fta: 1, composite: 1.12, zScores: { pts: 0.192, reb: 1.787, ast: 0.324, stl: 0.259, blk: 0.915, tpm: 0.121, fgImpact: 0.261, ftImpact: -0.939, to: -1.794 } },
          { name: "Xander Alarie", min: 25, pts: 4, reb: 8, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 1, composite: -0.38, zScores: { pts: -0.523, reb: 1.787, ast: -0.21, stl: -0.737, blk: 0.915, tpm: -0.67, fgImpact: -0.957, ftImpact: -0.939, to: 0.952 } },
          { name: "Noah Williams", min: 24, pts: 12, reb: 4, ast: 0, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 2.44, zScores: { pts: 0.62, reb: 0.286, ast: -0.743, stl: 1.255, blk: -0.402, tpm: 0.911, fgImpact: 0.623, ftImpact: 0.765, to: -0.879 } },
          { name: "Max Gaspa", min: 26, pts: 0, reb: 2, ast: 3, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 7, ftm: 0, fta: 0, composite: -5.85, zScores: { pts: -1.095, reb: -0.464, ast: 0.858, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -2.538, ftImpact: 0, to: -1.794 } },
          { name: "Trevon Payton", min: 34, pts: 16, reb: 4, ast: 1, stl: 1, blk: 0, to: 4, tpm: 3, fgm: 3, fga: 14, ftm: 7, fta: 8, composite: -0.85, zScores: { pts: 1.192, reb: 0.286, ast: -0.21, stl: 0.259, blk: -0.402, tpm: 1.702, fgImpact: -2.705, ftImpact: 1.739, to: -2.71 } },
          { name: "Ben Thornbrue", min: 22, pts: 4, reb: 5, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -0.43, zScores: { pts: -0.523, reb: 0.661, ast: -0.743, stl: 1.255, blk: -0.402, tpm: -0.67, fgImpact: -0.957, ftImpact: 0, to: 0.952 } },
          { name: "Dimitrije Pavlovic", min: 8, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.65, zScores: { pts: -1.095, reb: -1.215, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.037 } },
          { name: "Kyle Grill", min: 16, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -2.68, zScores: { pts: -0.809, reb: -0.84, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.725, ftImpact: 0.765, to: 0.952 } },
          { name: "Jackson Seastrunk", min: 12, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 1, composite: -2.81, zScores: { pts: -0.38, reb: -0.089, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: -0.595, ftImpact: -0.939, to: 0.952 } }
        ]
      }
    },
      {
      id: "401911345",
      line: "Bethune-Cookman Wildcats 81 @ Grand Canyon Lopes 99 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BCU", name: "Bethune-Cookman Wildcats", score: 81,
        players: [

        ]
      },
      home: {
        abbr: "GrCan", name: "Grand Canyon Lopes", score: 99,
        players: [
          { name: "Blake Barkley", min: 13, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.08, zScores: { pts: -1.095, reb: -0.464, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: 0, to: 0.037 } },
          { name: "Efe Demirel", min: 16, pts: 4, reb: 7, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 7, ftm: 2, fta: 2, composite: -1.69, zScores: { pts: -0.523, reb: 1.412, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -1.748, ftImpact: 0.765, to: 0.952 } },
          { name: "Makaih Williams", min: 30, pts: 18, reb: 2, ast: 2, stl: 4, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 12, ftm: 5, fta: 6, composite: 5.71, zScores: { pts: 1.478, reb: -0.464, ast: 0.324, stl: 3.248, blk: -0.402, tpm: 0.121, fgImpact: 0.391, ftImpact: 0.974, to: 0.037 } },
          { name: "Jaden Henley", min: 30, pts: 21, reb: 3, ast: 3, stl: 2, blk: 0, to: 3, tpm: 2, fgm: 6, fga: 13, ftm: 7, fta: 8, composite: 4.41, zScores: { pts: 1.907, reb: -0.089, ast: 0.858, stl: 1.255, blk: -0.402, tpm: 0.911, fgImpact: 0.028, ftImpact: 1.739, to: -1.794 } },
          { name: "Dylan Darling", min: 24, pts: 11, reb: 4, ast: 3, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 5, fta: 5, composite: 3.04, zScores: { pts: 0.477, reb: 0.286, ast: 0.858, stl: 1.255, blk: -0.402, tpm: -0.67, fgImpact: 0.195, ftImpact: 1.913, to: -0.879 } },
          { name: "Amarion Dickerson", min: 22, pts: 17, reb: 6, ast: 2, stl: 4, blk: 1, to: 2, tpm: 1, fgm: 7, fga: 8, ftm: 2, fta: 6, composite: 5.74, zScores: { pts: 1.335, reb: 1.037, ast: 0.324, stl: 3.248, blk: 0.915, tpm: 0.121, fgImpact: 2.631, ftImpact: -2.991, to: -0.879 } },
          { name: "Tyler Behrend", min: 20, pts: 12, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 4, fta: 6, composite: 0.46, zScores: { pts: 0.62, reb: 0.286, ast: 0.324, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 1.348, ftImpact: -0.348, to: 0.037 } },
          { name: "Omaha Biliew", min: 9, pts: 2, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.48, zScores: { pts: -0.809, reb: -0.089, ast: -0.743, stl: -0.737, blk: 0.915, tpm: -0.67, fgImpact: -0.297, ftImpact: 0, to: 0.952 } },
          { name: "Micah Tucker", min: 3, pts: 0, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.84, zScores: { pts: -1.095, reb: -1.215, ast: 0.324, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: 0, to: 0.952 } },
          { name: "Jaden Zimmerman", min: 7, pts: 7, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -1.22, zScores: { pts: -0.094, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: 0.13, ftImpact: 0.765, to: 0.952 } },
          { name: "Caleb Shaw", min: 10, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 1, composite: -3.37, zScores: { pts: -0.666, reb: -0.464, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: 0.428, ftImpact: -0.939, to: 0.037 } },
          { name: "Tre Holloman", min: 16, pts: 4, reb: 0, ast: 5, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.82, zScores: { pts: -0.523, reb: -1.215, ast: 1.926, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.232, ftImpact: 0, to: 0.037 } }
        ]
      }
    },
      {
      id: "401931195",
      line: "Bethesda Flames 43 @ Pepperdine Waves 116 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BTHS", name: "Bethesda Flames", score: 43,
        players: [

        ]
      },
      home: {
        abbr: "Pepp", name: "Pepperdine Waves", score: 116,
        players: [
          { name: "Oliver Kanden", min: 22, pts: 10, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: 1.71, zScores: { pts: 0.334, reb: -0.464, ast: 0.324, stl: -0.737, blk: -0.402, tpm: 1.702, fgImpact: 0.558, ftImpact: -0.557, to: 0.952 } },
          { name: "Petar Majstorovic", min: 18, pts: 18, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 7, fga: 10, ftm: 4, fta: 5, composite: 1.36, zScores: { pts: 1.478, reb: 0.286, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 1.906, ftImpact: 0.591, to: -0.879 } },
          { name: "Anthony Robinson", min: 18, pts: 14, reb: 7, ast: 0, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 6, fta: 10, composite: 2.59, zScores: { pts: 0.906, reb: 1.412, ast: -0.743, stl: 0.259, blk: 2.231, tpm: -0.67, fgImpact: 0.623, ftImpact: -1.461, to: 0.037 } },
          { name: "Evan Haywood", min: 13, pts: 9, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 1.79, zScores: { pts: 0.192, reb: 0.286, ast: 0.324, stl: -0.737, blk: -0.402, tpm: 1.702, fgImpact: -0.53, ftImpact: 0, to: 0.952 } },
          { name: "Will McClendon", min: 14, pts: 3, reb: 4, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -0.72, zScores: { pts: -0.666, reb: 0.286, ast: 0.858, stl: 0.259, blk: -0.402, tpm: 0.121, fgImpact: -0.297, ftImpact: 0, to: -0.879 } },
          { name: "Alex Constanza", min: 18, pts: 15, reb: 10, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 9, ftm: 6, fta: 6, composite: 4.21, zScores: { pts: 1.049, reb: 2.538, ast: 0.324, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: -0.102, ftImpact: 2.296, to: -0.879 } },
          { name: "Youri Fritz", min: 14, pts: 14, reb: 5, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 6, ftm: 4, fta: 9, composite: 0.57, zScores: { pts: 0.906, reb: 0.661, ast: -0.743, stl: 1.255, blk: -0.402, tpm: -0.67, fgImpact: 1.776, ftImpact: -3.165, to: 0.952 } },
          { name: "Ethan Meuser", min: 7, pts: 4, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -1.77, zScores: { pts: -0.523, reb: 0.286, ast: 0.324, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.065, ftImpact: 0.765, to: -0.879 } },
          { name: "Colin Chou", min: 3, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -4.69, zScores: { pts: -0.952, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: -0.557, to: 0.952 } },
          { name: "Oren Sahar", min: 14, pts: 5, reb: 3, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 3, fta: 3, composite: 1.72, zScores: { pts: -0.38, reb: -0.089, ast: 1.392, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: 0.428, ftImpact: 1.148, to: 0.037 } },
          { name: "Anto Balian", min: 20, pts: 3, reb: 5, ast: 3, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 1.52, zScores: { pts: -0.666, reb: 0.661, ast: 0.858, stl: 0.259, blk: 0.915, tpm: 0.121, fgImpact: -0.66, ftImpact: 0, to: 0.037 } },
          { name: "Jahari Williamson", min: 22, pts: 10, reb: 4, ast: 2, stl: 4, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 7.59, zScores: { pts: 0.334, reb: 0.286, ast: 0.324, stl: 3.248, blk: 0.915, tpm: 0.911, fgImpact: 0.623, ftImpact: 0, to: 0.952 } },
          { name: "David Mager", min: 17, pts: 10, reb: 5, ast: 4, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 4, ftm: 2, fta: 3, composite: 2.94, zScores: { pts: 0.334, reb: 0.661, ast: 1.392, stl: -0.737, blk: -0.402, tpm: 0.911, fgImpact: 0.921, ftImpact: -0.174, to: 0.037 } }
        ]
      }
    },
      {
      id: "401920371",
      line: "Fresno State Bulldogs 65 @ UC San Diego Tritons 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Fres", name: "Fresno State Bulldogs", score: 65,
        players: [
          { name: "Bradey Henige", min: 28, pts: 18, reb: 13, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 9, fga: 11, ftm: 0, fta: 0, composite: 7.98, zScores: { pts: 1.478, reb: 3.664, ast: -0.743, stl: -0.737, blk: 0.915, tpm: -0.67, fgImpact: 3.124, ftImpact: 0, to: 0.952 } },
          { name: "Roger Fabrega Urpina", min: 39, pts: 0, reb: 6, ast: 7, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -0.21, zScores: { pts: -1.095, reb: 1.037, ast: 2.994, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -1.45, ftImpact: 0, to: -0.879 } },
          { name: "Brian Amuneke", min: 27, pts: 12, reb: 2, ast: 4, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: 1.4, zScores: { pts: 0.62, reb: -0.464, ast: 1.392, stl: 0.259, blk: -0.402, tpm: 0.911, fgImpact: -0.037, ftImpact: 0, to: -0.879 } },
          { name: "Dragos Lungu", min: 33, pts: 18, reb: 4, ast: 2, stl: 0, blk: 2, to: 2, tpm: 2, fgm: 6, fga: 16, ftm: 4, fta: 4, composite: 4.09, zScores: { pts: 1.478, reb: 0.286, ast: 0.324, stl: -0.737, blk: 2.231, tpm: 0.911, fgImpact: -1.059, ftImpact: 1.53, to: -0.879 } },
          { name: "Ross Candelino", min: 36, pts: 14, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 5, fga: 17, ftm: 0, fta: 0, composite: -1.66, zScores: { pts: 0.906, reb: -0.089, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 2.493, fgImpact: -2.212, ftImpact: 0, to: -0.879 } },
          { name: "Marko Vuckovic", min: 11, pts: 3, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.42, zScores: { pts: -0.666, reb: -0.089, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: -1.023, ftImpact: 0, to: -0.879 } },
          { name: "Rylan Parsley", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 1, composite: -4.85, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0, ftImpact: -0.939, to: 0.952 } },
          { name: "Baye Fall", min: 12, pts: 0, reb: 4, ast: 0, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: 0.3, zScores: { pts: -1.095, reb: 0.286, ast: -0.743, stl: 0.259, blk: 2.231, tpm: -0.67, fgImpact: 0, ftImpact: 0, to: 0.037 } },
          { name: "KJ Perry", min: 7, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.54, zScores: { pts: -1.095, reb: -0.464, ast: -0.21, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -1.088, ftImpact: 0, to: -0.879 } },
          { name: "Quentin Rhymes", min: 6, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.28, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } }
        ]
      },
      home: {
        abbr: "UCSD", name: "UC San Diego Tritons", score: 81,
        players: [
          { name: "Leo Beath", min: 34, pts: 21, reb: 6, ast: 0, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 9, fga: 12, ftm: 0, fta: 0, composite: 7.55, zScores: { pts: 1.907, reb: 1.037, ast: -0.743, stl: 1.255, blk: -0.402, tpm: 1.702, fgImpact: 2.762, ftImpact: 0, to: 0.037 } },
          { name: "Dimitrije Vukicevic", min: 17, pts: 4, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -1.36, zScores: { pts: -0.523, reb: 0.661, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.66, ftImpact: 0.765, to: 0.952 } },
          { name: "Alex Chaikin", min: 19, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.89, zScores: { pts: -0.38, reb: -0.464, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: -0.232, ftImpact: 0, to: 0.952 } },
          { name: "Treysen Eaglestaff", min: 30, pts: 17, reb: 8, ast: 4, stl: 2, blk: 1, to: 2, tpm: 3, fgm: 6, fga: 11, ftm: 2, fta: 2, composite: 9.03, zScores: { pts: 1.335, reb: 1.787, ast: 1.392, stl: 1.255, blk: 0.915, tpm: 1.702, fgImpact: 0.753, ftImpact: 0.765, to: -0.879 } },
          { name: "Rahmir Barno", min: 32, pts: 16, reb: 4, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 11, ftm: 2, fta: 5, composite: 1.59, zScores: { pts: 1.192, reb: 0.286, ast: 1.392, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: 1.544, ftImpact: -2.052, to: 0.037 } },
          { name: "Jake Holmes", min: 19, pts: 9, reb: 4, ast: 1, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 8, ftm: 0, fta: 1, composite: 0.6, zScores: { pts: 0.192, reb: 0.286, ast: -0.21, stl: 1.255, blk: -0.402, tpm: 0.121, fgImpact: 0.261, ftImpact: -0.939, to: 0.037 } },
          { name: "Olavi Suutela", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.81, zScores: { pts: -1.095, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.037 } },
          { name: "Jaden Vance", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } },
          { name: "Kayde Dotson", min: 23, pts: 0, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -1.095, reb: 0.286, ast: 0.324, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -1.45, ftImpact: 0, to: 0.037 } },
          { name: "Aidan Burke", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } },
          { name: "Tom Beattie", min: 13, pts: 9, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 0.54, zScores: { pts: 0.192, reb: -0.464, ast: -0.743, stl: 0.259, blk: -0.402, tpm: 0.121, fgImpact: 0.623, ftImpact: 0, to: 0.952 } }
        ]
      }
    },
      {
      id: "401917519",
      line: "Sacramento State Hornets 77 @ Santa Clara Broncos 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SAC", name: "Sacramento State Hornets", score: 77,
        players: [

        ]
      },
      home: {
        abbr: "SCla", name: "Santa Clara Broncos", score: 83,
        players: [
          { name: "Chris Tadjo", min: 17, pts: 14, reb: 3, ast: 1, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 5, fga: 8, ftm: 4, fta: 4, composite: 4.13, zScores: { pts: 0.906, reb: -0.089, ast: -0.21, stl: 0.259, blk: 2.231, tpm: -0.67, fgImpact: 1.051, ftImpact: 1.53, to: -0.879 } },
          { name: "Brad Longcor III", min: 21, pts: 7, reb: 6, ast: 2, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 9, ftm: 1, fta: 3, composite: -1.03, zScores: { pts: -0.094, reb: 1.037, ast: 0.324, stl: 1.255, blk: -0.402, tpm: 0.911, fgImpact: -1.683, ftImpact: -1.496, to: -0.879 } },
          { name: "Sash Gavalyugov", min: 31, pts: 12, reb: 7, ast: 5, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 14, ftm: 2, fta: 2, composite: 2.62, zScores: { pts: 0.62, reb: 1.412, ast: 1.926, stl: -0.737, blk: -0.402, tpm: 0.911, fgImpact: -1.915, ftImpact: 0.765, to: 0.037 } },
          { name: "Jake Ensminger", min: 30, pts: 6, reb: 5, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: -0.05, zScores: { pts: -0.237, reb: 0.661, ast: 0.858, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -1.32, ftImpact: 0.765, to: 0.037 } },
          { name: "Fedor Zugic", min: 22, pts: 12, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 8, ftm: 1, fta: 2, composite: 2.03, zScores: { pts: 0.62, reb: 0.661, ast: 0.324, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: 1.051, ftImpact: -0.557, to: 0.952 } },
          { name: "Elijah Mahi", min: 20, pts: 11, reb: 4, ast: 0, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 8, ftm: 1, fta: 1, composite: 0.55, zScores: { pts: 0.477, reb: 0.286, ast: -0.743, stl: 0.259, blk: -0.402, tpm: 0.911, fgImpact: 0.261, ftImpact: 0.383, to: -0.879 } },
          { name: "Sidi Gueye", min: 14, pts: 5, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -2.79, zScores: { pts: -0.38, reb: -0.464, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: 0.13, ftImpact: -0.557, to: 0.037 } },
          { name: "Francis Chukwudebelu", min: 8, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -4.5, zScores: { pts: -0.666, reb: -0.464, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.297, ftImpact: -0.557, to: 0.037 } },
          { name: "Thierry Darlan", min: 11, pts: 0, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -1.45, zScores: { pts: -1.095, reb: -0.089, ast: 0.324, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.725, ftImpact: 0, to: 0.952 } },
          { name: "David Castillo", min: 26, pts: 13, reb: 4, ast: 2, stl: 2, blk: 0, to: 4, tpm: 3, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 2.25, zScores: { pts: 0.763, reb: 0.286, ast: 0.324, stl: 1.255, blk: -0.402, tpm: 1.702, fgImpact: 0.261, ftImpact: 0.765, to: -2.71 } }
        ]
      }
    },
      {
      id: "401917517",
      line: "Portland State Vikings 60 @ Seattle U Redhawks 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PRST", name: "Portland State Vikings", score: 60,
        players: [

        ]
      },
      home: {
        abbr: "SeatU", name: "Seattle U Redhawks", score: 79,
        players: [
          { name: "Will Heimbrodt", min: 31, pts: 18, reb: 5, ast: 3, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 7, fga: 10, ftm: 4, fta: 5, composite: 7.35, zScores: { pts: 1.478, reb: 0.661, ast: 0.858, stl: 0.259, blk: 2.231, tpm: -0.67, fgImpact: 1.906, ftImpact: 0.591, to: 0.037 } },
          { name: "Junseok Yeo", min: 30, pts: 9, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 2, fta: 5, composite: -3.83, zScores: { pts: 0.192, reb: 0.286, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: -0.53, ftImpact: -2.052, to: 0.037 } },
          { name: "Halvine Dzellat", min: 24, pts: 13, reb: 8, ast: 0, stl: 1, blk: 1, to: 4, tpm: 0, fgm: 4, fga: 6, ftm: 5, fta: 7, composite: 0.62, zScores: { pts: 0.763, reb: 1.787, ast: -0.743, stl: 0.259, blk: 0.915, tpm: -0.67, fgImpact: 0.986, ftImpact: 0.035, to: -2.71 } },
          { name: "Tyler Boston", min: 28, pts: 10, reb: 2, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 4, fta: 4, composite: 1.61, zScores: { pts: 0.334, reb: -0.464, ast: -0.21, stl: 1.255, blk: -0.402, tpm: -0.67, fgImpact: 0.195, ftImpact: 1.53, to: 0.037 } },
          { name: "Mason Williams", min: 27, pts: 18, reb: 6, ast: 2, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 11, ftm: 6, fta: 6, composite: 4.07, zScores: { pts: 1.478, reb: 1.037, ast: 0.324, stl: 0.259, blk: -0.402, tpm: 0.911, fgImpact: -0.037, ftImpact: 2.296, to: -1.794 } },
          { name: "Yuto Kawashima", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } },
          { name: "Ray Adams", min: 18, pts: 4, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.28, zScores: { pts: -0.523, reb: -0.089, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: 0.855, ftImpact: 0, to: 0.037 } },
          { name: "Ladji Coulibaly", min: 8, pts: 0, reb: 0, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 2, composite: -4.2, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: 0.259, blk: 0.915, tpm: -0.67, fgImpact: -0.725, ftImpact: -1.878, to: 0.952 } },
          { name: "Amare Larane", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.19, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.037 } },
          { name: "Jaden Bailes", min: 8, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 1, composite: -2.48, zScores: { pts: -0.38, reb: -0.84, ast: -0.743, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: 0.493, ftImpact: -0.939, to: 0.952 } },
          { name: "Maleek Arington", min: 20, pts: 2, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.99, zScores: { pts: -0.809, reb: 0.286, ast: 0.324, stl: -0.737, blk: -0.402, tpm: -0.67, fgImpact: 0.065, ftImpact: 0, to: 0.952 } }
        ]
      }
    },
      {
      id: "401911470",
      line: "San José State Spartans 79 @ UC Irvine Anteaters 91 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SJSU", name: "San José State Spartans", score: 79,
        players: [
          { name: "Zine Eddine Bedri", min: 14, pts: 6, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -1.49, zScores: { pts: -0.237, reb: -0.84, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: 0.195, ftImpact: 0, to: 0.952 } },
          { name: "Robert Vaihola", min: 19, pts: 2, reb: 6, ast: 1, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.84, zScores: { pts: -0.809, reb: 1.037, ast: -0.21, stl: -0.737, blk: 0.915, tpm: -0.67, fgImpact: 0.428, ftImpact: 0, to: -1.794 } },
          { name: "Joey Chammaa", min: 30, pts: 16, reb: 5, ast: 2, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 16, ftm: 0, fta: 0, composite: 2.51, zScores: { pts: 1.192, reb: 0.661, ast: 0.324, stl: -0.737, blk: -0.402, tpm: 2.493, fgImpact: -1.059, ftImpact: 0, to: 0.037 } },
          { name: "JaVaughn Hannah", min: 33, pts: 11, reb: 1, ast: 5, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 4, fta: 7, composite: 1.75, zScores: { pts: 0.477, reb: -0.84, ast: 1.926, stl: 2.252, blk: -0.402, tpm: 0.121, fgImpact: -0.53, ftImpact: -1.287, to: 0.037 } },
          { name: "Mekhi Mason", min: 37, pts: 9, reb: 2, ast: 1, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 9, ftm: 4, fta: 4, composite: -0.54, zScores: { pts: 0.192, reb: -0.464, ast: -0.21, stl: 1.255, blk: -0.402, tpm: 0.121, fgImpact: -1.683, ftImpact: 1.53, to: -0.879 } },
          { name: "KJ Martin Jr.", min: 19, pts: 14, reb: 2, ast: 2, stl: 2, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 6.48, zScores: { pts: 0.906, reb: -0.464, ast: 0.324, stl: 1.255, blk: -0.402, tpm: 2.493, fgImpact: 1.413, ftImpact: 0, to: 0.952 } },
          { name: "Mookie Cook", min: 30, pts: 16, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 14, ftm: 0, fta: 0, composite: 1.4, zScores: { pts: 1.192, reb: -0.84, ast: -0.21, stl: 0.259, blk: -0.402, tpm: 0.911, fgImpact: 0.456, ftImpact: 0, to: 0.037 } },
          { name: "Oliver Kullamae", min: 12, pts: 5, reb: 1, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -0.49, zScores: { pts: -0.38, reb: -0.84, ast: 0.858, stl: -0.737, blk: -0.402, tpm: 0.121, fgImpact: 0.855, ftImpact: 0, to: 0.037 } },
          { name: "Rokiem Green", min: 6, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.28, zScores: { pts: -1.095, reb: -1.215, ast: -0.743, stl: 0.259, blk: -0.402, tpm: -0.67, fgImpact: -0.363, ftImpact: 0, to: 0.952 } }
        ]
      },
      home: {
        abbr: "UCI", name: "UC Irvine Anteaters", score: 91,
        players: [

        ]
      }
    }
    ]
  },
    "2026-11-08": {
    games: [
      {
      id: "401920424",
      line: "Arkansas Razorbacks 72 @ Virginia Cavaliers 91 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Ark", name: "Arkansas Razorbacks", score: 72,
        players: [
          { name: "Miikka Muurinen", min: 19, pts: 12, reb: 3, ast: 1, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 6, ftm: 4, fta: 5, composite: -0.68, zScores: { pts: 0.64, reb: -0.071, ast: -0.226, stl: -0.763, blk: -0.427, tpm: 1.119, fgImpact: 0.214, ftImpact: 0.548, to: -1.715 } },
          { name: "Cooper Bowser", min: 29, pts: 3, reb: 7, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -0.1, zScores: { pts: -0.623, reb: 1.254, ast: -0.808, stl: -0.763, blk: 2.313, tpm: -0.629, fgImpact: -0.327, ftImpact: -0.571, to: 0.055 } },
          { name: "Jeremiah Wilkinson", min: 20, pts: 11, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -0.93, zScores: { pts: 0.5, reb: -1.065, ast: -0.226, stl: -0.763, blk: -0.427, tpm: 1.993, fgImpact: -0.113, ftImpact: 0, to: -0.83 } },
          { name: "Jordan Smith Jr.", min: 31, pts: 19, reb: 2, ast: 3, stl: 4, blk: 1, to: 3, tpm: 1, fgm: 8, fga: 17, ftm: 2, fta: 3, composite: 4.91, zScores: { pts: 1.623, reb: -0.402, ast: 0.939, stl: 3.301, blk: 0.943, tpm: 0.245, fgImpact: 0.173, ftImpact: -0.198, to: -1.715 } },
          { name: "Billy Richmond III", min: 31, pts: 11, reb: 7, ast: 4, stl: 0, blk: 3, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 3, fta: 4, composite: 6.88, zScores: { pts: 0.5, reb: 1.254, ast: 1.521, stl: -0.763, blk: 3.683, tpm: -0.629, fgImpact: 1.083, ftImpact: 0.175, to: 0.055 } },
          { name: "Ilia Frolov", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "Abdou Toure", min: 16, pts: 10, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 8, ftm: 1, fta: 1, composite: -0.2, zScores: { pts: 0.359, reb: -0.402, ast: -0.808, stl: -0.763, blk: -0.427, tpm: 0.245, fgImpact: 0.286, ftImpact: 0.373, to: 0.94 } },
          { name: "Caleb Ourigou", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.09, zScores: { pts: -1.044, reb: -0.733, ast: -0.808, stl: -0.763, blk: 0.943, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "JJ Andrews", min: 10, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.88, zScores: { pts: -1.044, reb: -0.071, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -1.196, ftImpact: 0, to: 0.055 } },
          { name: "Maper Maker", min: 22, pts: 0, reb: 4, ast: 0, stl: 0, blk: 3, to: 3, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 2, composite: -3.7, zScores: { pts: -1.044, reb: 0.26, ast: -0.808, stl: -0.763, blk: 3.683, tpm: -0.629, fgImpact: -0.797, ftImpact: -1.887, to: -1.715 } },
          { name: "Davion Thompson", min: 18, pts: 6, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 1, composite: -3.26, zScores: { pts: -0.202, reb: -0.733, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0.613, ftImpact: -0.944, to: 0.055 } }
        ]
      },
      home: {
        abbr: "UVA", name: "Virginia Cavaliers", score: 91,
        players: [
          { name: "Nolan Adekunle", min: 32, pts: 13, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 8, ftm: 2, fta: 3, composite: 3.66, zScores: { pts: 0.781, reb: 0.26, ast: -0.226, stl: 0.253, blk: -0.427, tpm: 1.993, fgImpact: 0.286, ftImpact: -0.198, to: 0.94 } },
          { name: "Thijs De Ridder", min: 24, pts: 16, reb: 10, ast: 2, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 13, ftm: 0, fta: 2, composite: 3.95, zScores: { pts: 1.202, reb: 2.247, ast: 0.357, stl: 1.269, blk: -0.427, tpm: 1.119, fgImpact: 0.899, ftImpact: -1.887, to: -0.83 } },
          { name: "Johann Grunloh", min: 35, pts: 15, reb: 4, ast: 2, stl: 0, blk: 5, to: 2, tpm: 0, fgm: 5, fga: 9, ftm: 5, fta: 6, composite: 7.56, zScores: { pts: 1.061, reb: 0.26, ast: 0.357, stl: -0.763, blk: 6.423, tpm: -0.629, fgImpact: 0.756, ftImpact: 0.921, to: -0.83 } },
          { name: "Sam Lewis", min: 34, pts: 16, reb: 5, ast: 2, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 15, ftm: 3, fta: 3, composite: 2.62, zScores: { pts: 1.202, reb: 0.591, ast: 0.357, stl: 0.253, blk: -0.427, tpm: 1.993, fgImpact: -1.635, ftImpact: 1.119, to: -0.83 } },
          { name: "Chance Mallory", min: 32, pts: 15, reb: 3, ast: 6, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 13, ftm: 2, fta: 2, composite: 6.47, zScores: { pts: 1.061, reb: -0.071, ast: 2.685, stl: 1.269, blk: -0.427, tpm: 1.993, fgImpact: -0.838, ftImpact: 0.746, to: 0.055 } },
          { name: "Silas Barksdale", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "Kalu Anya", min: 18, pts: 3, reb: 6, ast: 3, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: 3.19, zScores: { pts: -0.623, reb: 0.923, ast: 0.939, stl: 0.253, blk: 0.943, tpm: -0.629, fgImpact: 0.071, ftImpact: 0.373, to: 0.94 } },
          { name: "Favour Ibe", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.04, zScores: { pts: -0.764, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0.47, ftImpact: 0, to: 0.94 } },
          { name: "Christian Harmon", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.19, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.399, ftImpact: 0, to: 0.94 } },
          { name: "Martin Carrere", min: 6, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.22, zScores: { pts: -1.044, reb: -0.071, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "Jan Vide", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "Elijah Gertrude", min: 13, pts: 8, reb: 1, ast: 1, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: 0.92, zScores: { pts: 0.079, reb: -0.733, ast: -0.226, stl: 2.285, blk: -0.427, tpm: 0.245, fgImpact: 0.214, ftImpact: -0.571, to: 0.055 } },
          { name: "Jurian Dixon", min: 2, pts: 3, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 1, composite: -1.52, zScores: { pts: -0.623, reb: -1.065, ast: -0.808, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: 0.47, ftImpact: 0.373, to: 0.94 } }
        ]
      }
    },
      {
      id: "401918053",
      line: "California Golden Bears 68 @ Houston Cougars 86 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Cal", name: "California Golden Bears", score: 68,
        players: [
          { name: "Jake Wilkins", min: 20, pts: 2, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.29, zScores: { pts: -0.764, reb: 0.26, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.327, ftImpact: 0, to: -0.83 } },
          { name: "Sammie Yeanay", min: 15, pts: 9, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 9, ftm: 1, fta: 2, composite: -1.98, zScores: { pts: 0.219, reb: -0.402, ast: -0.226, stl: -0.763, blk: -0.427, tpm: 1.119, fgImpact: -0.981, ftImpact: -0.571, to: 0.055 } },
          { name: "Mantas Kocanas", min: 21, pts: 4, reb: 2, ast: 2, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.52, zScores: { pts: -0.483, reb: -0.402, ast: 0.357, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0.541, ftImpact: 0, to: -1.715 } },
          { name: "Nojus Indrusaitis", min: 30, pts: 6, reb: 4, ast: 0, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -4.11, zScores: { pts: -0.202, reb: 0.26, ast: -0.808, stl: 0.253, blk: -0.427, tpm: 0.245, fgImpact: -0.256, ftImpact: -0.571, to: -2.6 } },
          { name: "Jordan Ross", min: 27, pts: 15, reb: 2, ast: 5, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 7, fga: 11, ftm: 1, fta: 2, composite: 1.37, zScores: { pts: 1.061, reb: -0.402, ast: 2.103, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: 1.696, ftImpact: -0.571, to: -1.715 } },
          { name: "Dhiaukuei Manyiel Dut", min: 15, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -3.43, zScores: { pts: -0.764, reb: -1.065, ast: -0.808, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: -0.797, ftImpact: 0.746, to: 0.055 } },
          { name: "Amier Ali", min: 12, pts: 3, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 1, composite: -1.39, zScores: { pts: -0.623, reb: -0.071, ast: 0.357, stl: 0.253, blk: -0.427, tpm: 0.245, fgImpact: -1.124, ftImpact: -0.944, to: 0.94 } },
          { name: "Dominykas Daubaris", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.57, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: -0.83 } },
          { name: "Michael Cooper", min: 29, pts: 19, reb: 2, ast: 1, stl: 2, blk: 1, to: 0, tpm: 5, fgm: 6, fga: 11, ftm: 2, fta: 2, composite: 9.46, zScores: { pts: 1.623, reb: -0.402, ast: -0.226, stl: 1.269, blk: 0.943, tpm: 3.741, fgImpact: 0.827, ftImpact: 0.746, to: 0.94 } },
          { name: "Semetri Carr", min: 16, pts: 0, reb: 6, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -0.86, zScores: { pts: -1.044, reb: 0.923, ast: 0.939, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.797, ftImpact: 0, to: 0.94 } },
          { name: "Jovani Ruff", min: 12, pts: 8, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 3, composite: -2.07, zScores: { pts: 0.079, reb: -1.065, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0.214, ftImpact: -0.198, to: 0.94 } }
        ]
      },
      home: {
        abbr: "Hou", name: "Houston Cougars", score: 86,
        players: [
          { name: "Delrecco Gillespie", min: 26, pts: 13, reb: 8, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 2.48, zScores: { pts: 0.781, reb: 1.585, ast: -0.226, stl: -0.763, blk: -0.427, tpm: 0.245, fgImpact: 1.226, ftImpact: 0, to: 0.055 } },
          { name: "Chase McCarty", min: 12, pts: 11, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: 2.79, zScores: { pts: 0.5, reb: -0.402, ast: -0.226, stl: 0.253, blk: -0.427, tpm: 1.993, fgImpact: -0.583, ftImpact: 0.746, to: 0.94 } },
          { name: "Joseph Tugler", min: 27, pts: 16, reb: 3, ast: 1, stl: 2, blk: 4, to: 2, tpm: 0, fgm: 7, fga: 12, ftm: 2, fta: 2, composite: 7.81, zScores: { pts: 1.202, reb: -0.071, ast: -0.226, stl: 1.269, blk: 5.053, tpm: -0.629, fgImpact: 1.297, ftImpact: 0.746, to: -0.83 } },
          { name: "Dedan Thomas Jr.", min: 35, pts: 20, reb: 2, ast: 8, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 9, fga: 15, ftm: 1, fta: 1, composite: 8.57, zScores: { pts: 1.763, reb: -0.402, ast: 3.85, stl: 1.269, blk: -0.427, tpm: 0.245, fgImpact: 1.839, ftImpact: 0.373, to: 0.055 } },
          { name: "Mercy Miller", min: 32, pts: 8, reb: 2, ast: 1, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 4, fta: 4, composite: 1.17, zScores: { pts: 0.079, reb: -0.402, ast: -0.226, stl: 2.285, blk: -0.427, tpm: -0.629, fgImpact: -1.053, ftImpact: 1.491, to: 0.055 } },
          { name: "Braden East", min: 16, pts: 8, reb: 5, ast: 0, stl: 0, blk: 2, to: 1, tpm: 1, fgm: 3, fga: 3, ftm: 1, fta: 2, composite: 2.55, zScores: { pts: 0.079, reb: 0.591, ast: -0.808, stl: -0.763, blk: 2.313, tpm: 0.245, fgImpact: 1.41, ftImpact: -0.571, to: 0.055 } },
          { name: "Arafan Diane", min: 11, pts: 2, reb: 1, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.46, zScores: { pts: -0.764, reb: -0.733, ast: 0.357, stl: -0.763, blk: 0.943, tpm: -0.629, fgImpact: 0.071, ftImpact: 0, to: 0.055 } },
          { name: "Corey Hadnot II", min: 21, pts: 2, reb: 1, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.48, zScores: { pts: -0.764, reb: -0.733, ast: -0.226, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: -1.124, ftImpact: 0, to: -0.83 } },
          { name: "Chendall Weaver", min: 15, pts: 6, reb: 6, ast: 0, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 2.69, zScores: { pts: -0.202, reb: 0.923, ast: -0.808, stl: 2.285, blk: -0.427, tpm: -0.629, fgImpact: 0.613, ftImpact: 0, to: 0.94 } },
          { name: "Kordel Jefferson", min: 5, pts: 0, reb: 0, ast: 3, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -0.02, zScores: { pts: -1.044, reb: -1.065, ast: 0.939, stl: 1.269, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } }
        ]
      }
    },
      {
      id: "401924646",
      line: "Iona Gaels 65 @ St. John's Red Storm 104 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "IONA", name: "Iona Gaels", score: 65,
        players: [

        ]
      },
      home: {
        abbr: "StJon", name: "St. John's Red Storm", score: 104,
        players: [
          { name: "Ruben Prey", min: 23, pts: 5, reb: 5, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 3, composite: -0.93, zScores: { pts: -0.342, reb: 0.591, ast: 0.939, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: 0.143, ftImpact: -1.515, to: 0.055 } },
          { name: "Keyshawn Hall", min: 23, pts: 13, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 10, ftm: 2, fta: 2, composite: 1.33, zScores: { pts: 0.781, reb: 0.26, ast: -0.808, stl: -0.763, blk: -0.427, tpm: 0.245, fgImpact: 0.357, ftImpact: 0.746, to: 0.94 } },
          { name: "Quinn Ellis", min: 24, pts: 7, reb: 5, ast: 11, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: 7.45, zScores: { pts: -0.062, reb: 0.591, ast: 5.596, stl: 2.285, blk: -0.427, tpm: -0.629, fgImpact: 0.613, ftImpact: -0.571, to: 0.055 } },
          { name: "Tounde Yessoufou", min: 21, pts: 23, reb: 7, ast: 1, stl: 3, blk: 2, to: 0, tpm: 4, fgm: 9, fga: 14, ftm: 1, fta: 3, composite: 12.34, zScores: { pts: 2.185, reb: 1.254, ast: -0.226, stl: 2.285, blk: 2.313, tpm: 2.867, fgImpact: 2.237, ftImpact: -1.515, to: 0.94 } },
          { name: "Ian Jackson", min: 20, pts: 17, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 7, fga: 12, ftm: 0, fta: 0, composite: 3.5, zScores: { pts: 1.342, reb: -0.071, ast: -0.808, stl: -0.763, blk: -0.427, tpm: 1.993, fgImpact: 1.297, ftImpact: 0, to: 0.94 } },
          { name: "Reed Bailey", min: 16, pts: 4, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -1.55, zScores: { pts: -0.483, reb: -0.071, ast: 0.939, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -1.053, ftImpact: 0, to: 0.94 } },
          { name: "Zsombor Maronka", min: 18, pts: 12, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 4, ftm: 4, fta: 5, composite: 1.78, zScores: { pts: 0.64, reb: -1.065, ast: -0.226, stl: -0.763, blk: -0.427, tpm: 1.119, fgImpact: 1.011, ftImpact: 0.548, to: 0.94 } },
          { name: "Lazar Stojkovic", min: 9, pts: 2, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.74, zScores: { pts: -0.764, reb: -0.733, ast: -0.808, stl: -0.763, blk: 0.943, tpm: -0.629, fgImpact: 0.071, ftImpact: 0, to: 0.94 } },
          { name: "Theo Edema", min: 10, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -2.77, zScores: { pts: -0.764, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0.746, to: 0.94 } },
          { name: "Fotis Konstantinidis", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "Casper Pohto", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.04, zScores: { pts: -0.764, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0.47, ftImpact: 0, to: 0.94 } },
          { name: "Lefteris Liotopoulos", min: 17, pts: 10, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 4, fta: 5, composite: 1.04, zScores: { pts: 0.359, reb: -0.071, ast: -0.808, stl: -0.763, blk: -0.427, tpm: 1.119, fgImpact: 0.143, ftImpact: 0.548, to: 0.94 } },
          { name: "Avery Brown", min: 10, pts: 0, reb: 2, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -0.73, zScores: { pts: -1.044, reb: -0.402, ast: 0.357, stl: 1.269, blk: -0.427, tpm: -0.629, fgImpact: -0.797, ftImpact: 0, to: 0.94 } },
          { name: "Kyle Cuffe Jr.", min: 5, pts: 7, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: -0.56, zScores: { pts: -0.062, reb: -1.065, ast: -0.226, stl: -0.763, blk: -0.427, tpm: 0.245, fgImpact: 0.94, ftImpact: 0.746, to: 0.055 } }
        ]
      }
    },
      {
      id: "401919029",
      line: "Wichita State Shockers 86 @ USC Trojans 93 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WichSt", name: "Wichita State Shockers", score: 86,
        players: [
          { name: "Dillon Battie", min: 30, pts: 10, reb: 4, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 11, ftm: 1, fta: 2, composite: -1.26, zScores: { pts: 0.359, reb: 0.26, ast: 0.357, stl: 0.253, blk: -0.427, tpm: 0.245, fgImpact: -0.91, ftImpact: -0.571, to: -0.83 } },
          { name: "William Berg", min: 21, pts: 17, reb: 11, ast: 2, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 5, fga: 7, ftm: 7, fta: 10, composite: 3.22, zScores: { pts: 1.342, reb: 2.579, ast: 0.357, stl: 1.269, blk: -0.427, tpm: -0.629, fgImpact: 1.553, ftImpact: -0.221, to: -2.6 } },
          { name: "Kenyon Giles", min: 28, pts: 8, reb: 2, ast: 2, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 7, ftm: 1, fta: 2, composite: -0.46, zScores: { pts: 0.079, reb: -0.402, ast: 0.357, stl: 1.269, blk: -0.427, tpm: 0.245, fgImpact: -0.184, ftImpact: -0.571, to: -0.83 } },
          { name: "Bryce Heard", min: 25, pts: 6, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.24, zScores: { pts: -0.202, reb: -0.071, ast: -0.808, stl: -0.763, blk: -0.427, tpm: 1.119, fgImpact: -0.256, ftImpact: 0, to: -0.83 } },
          { name: "Jahari Long", min: 29, pts: 2, reb: 4, ast: 1, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 4, composite: -2.93, zScores: { pts: -0.764, reb: 0.26, ast: -0.226, stl: 0.253, blk: 0.943, tpm: -0.629, fgImpact: -0.797, ftImpact: -1.142, to: -0.83 } },
          { name: "Emmanuel Okorafor", min: 19, pts: 3, reb: 7, ast: 0, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 3, composite: -4.58, zScores: { pts: -0.623, reb: 1.254, ast: -0.808, stl: -0.763, blk: 0.943, tpm: -0.629, fgImpact: -0.726, ftImpact: -1.515, to: -1.715 } },
          { name: "Jaret Valencia", min: 10, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 3, fta: 3, composite: -2.46, zScores: { pts: -0.342, reb: -0.733, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0.071, ftImpact: 1.119, to: 0.055 } },
          { name: "Jordan Frison", min: 20, pts: 17, reb: 1, ast: 6, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 8, ftm: 7, fta: 8, composite: 4.48, zScores: { pts: 1.342, reb: -0.733, ast: 2.685, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: 1.154, ftImpact: 1.666, to: -0.83 } },
          { name: "Michael Gray Jr.", min: 18, pts: 18, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 5, fga: 8, ftm: 3, fta: 4, composite: 4.54, zScores: { pts: 1.483, reb: -0.071, ast: -0.808, stl: -0.763, blk: -0.427, tpm: 3.741, fgImpact: 1.154, ftImpact: 0.175, to: 0.055 } }
        ]
      },
      home: {
        abbr: "USC", name: "USC Trojans", score: 93,
        players: [
          { name: "Adonis Ratliff", min: 33, pts: 10, reb: 13, ast: 0, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 9, ftm: 4, fta: 4, composite: 4.94, zScores: { pts: 0.359, reb: 3.241, ast: -0.808, stl: 1.269, blk: 0.943, tpm: -0.629, fgImpact: -0.981, ftImpact: 1.491, to: 0.055 } },
          { name: "Jacob Cofie", min: 16, pts: 2, reb: 3, ast: 0, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 1.26, zScores: { pts: -0.764, reb: -0.071, ast: -0.808, stl: -0.763, blk: 3.683, tpm: -0.629, fgImpact: -0.327, ftImpact: 0, to: 0.94 } },
          { name: "Darius Ratliff", min: 19, pts: 7, reb: 5, ast: 1, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 2.02, zScores: { pts: -0.062, reb: 0.591, ast: -0.226, stl: 0.253, blk: 0.943, tpm: 0.245, fgImpact: 0.214, ftImpact: 0, to: 0.055 } },
          { name: "Alijah Arenas", min: 39, pts: 30, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 9, fga: 18, ftm: 12, fta: 14, composite: 6.57, zScores: { pts: 3.167, reb: 0.26, ast: -0.226, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: 0.643, ftImpact: 2.587, to: 0.94 } },
          { name: "Rodney Rice", min: 39, pts: 32, reb: 5, ast: 9, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 7, fga: 17, ftm: 17, fta: 18, composite: 10.64, zScores: { pts: 3.448, reb: 0.591, ast: 4.432, stl: 0.253, blk: -0.427, tpm: 0.245, fgImpact: -0.695, ftImpact: 5.395, to: -2.6 } },
          { name: "Joshua Hughes", min: 11, pts: 4, reb: 0, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.09, zScores: { pts: -0.483, reb: -1.065, ast: -0.808, stl: -0.763, blk: 0.943, tpm: -0.629, fgImpact: 0.541, ftImpact: 0, to: -0.83 } },
          { name: "Aaron Hunkin-Claytor", min: 12, pts: 1, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.53, zScores: { pts: -0.904, reb: -1.065, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: -0.571, to: 0.055 } },
          { name: "Isaac Bruns", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "Jalen Cox", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "KJ Lewis", min: 16, pts: 5, reb: 1, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 3, fta: 4, composite: -1, zScores: { pts: -0.342, reb: -0.733, ast: 0.357, stl: 1.269, blk: -0.427, tpm: -0.629, fgImpact: -0.726, ftImpact: 0.175, to: 0.055 } },
          { name: "Jadis Jones", min: 10, pts: 2, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.7, zScores: { pts: -0.764, reb: -0.733, ast: -0.808, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: 0.47, ftImpact: 0, to: 0.94 } }
        ]
      }
    },
      {
      id: "401924734",
      line: "Princeton Tigers 68 @ Siena Saints 82 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Princ", name: "Princeton Tigers", score: 68,
        players: [
          { name: "Jacob Huggins", min: 15, pts: 4, reb: 3, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 4, composite: -3.82, zScores: { pts: -0.483, reb: -0.071, ast: 0.357, stl: -0.763, blk: 0.943, tpm: -0.629, fgImpact: 0.541, ftImpact: -3.775, to: 0.055 } },
          { name: "Malik Abdullahi", min: 20, pts: 8, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 0.52, zScores: { pts: 0.079, reb: -0.071, ast: -0.226, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: 1.481, ftImpact: 0, to: 0.055 } },
          { name: "Jack Stanton", min: 32, pts: 16, reb: 6, ast: 0, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 14, ftm: 0, fta: 0, composite: 3.7, zScores: { pts: 1.202, reb: 0.923, ast: -0.808, stl: 0.253, blk: -0.427, tpm: 2.867, fgImpact: -0.368, ftImpact: 0, to: 0.055 } },
          { name: "Dalen Davis", min: 28, pts: 0, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 10, ftm: 0, fta: 0, composite: -5.6, zScores: { pts: -1.044, reb: -1.065, ast: 0.357, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: -3.985, ftImpact: 0, to: 0.94 } },
          { name: "Jackson Hicke", min: 34, pts: 18, reb: 9, ast: 5, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 16, ftm: 8, fta: 9, composite: 5.78, zScores: { pts: 1.483, reb: 1.916, ast: 2.103, stl: 1.269, blk: -0.427, tpm: -0.629, fgImpact: -2.034, ftImpact: 2.039, to: 0.055 } },
          { name: "Cash McSweeney", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.68, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.055 } },
          { name: "CJ Happy", min: 8, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -3.36, zScores: { pts: -0.623, reb: -0.733, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.327, ftImpact: -0.571, to: 0.94 } },
          { name: "Jacob Hammond", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.46, zScores: { pts: -1.044, reb: -0.733, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "Christopher Kirkpatrick", min: 12, pts: 5, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 2, fta: 3, composite: -4, zScores: { pts: -0.342, reb: -0.733, ast: -0.226, stl: -0.763, blk: -0.427, tpm: 0.245, fgImpact: -0.726, ftImpact: -0.198, to: -0.83 } },
          { name: "Ethan Sabec", min: 9, pts: 2, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.47, zScores: { pts: -0.764, reb: 0.591, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.726, ftImpact: 0, to: 0.055 } },
          { name: "Louis O'Keefe", min: 7, pts: 2, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.38, zScores: { pts: -0.764, reb: -0.733, ast: -0.808, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: -0.327, ftImpact: 0, to: 0.055 } },
          { name: "Sebastian Whitfield", min: 2, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.53, zScores: { pts: -1.044, reb: -0.402, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.399, ftImpact: 0, to: 0.94 } },
          { name: "Jake Sussberg", min: 1, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.92, zScores: { pts: -0.623, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: 0.245, fgImpact: 0.47, ftImpact: 0, to: 0.055 } },
          { name: "Peyton Seals", min: 1, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.21, zScores: { pts: -1.044, reb: -1.065, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "Landon Clark", min: 28, pts: 7, reb: 7, ast: 3, stl: 2, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 3.66, zScores: { pts: -0.062, reb: 1.254, ast: 0.939, stl: 1.269, blk: 0.943, tpm: 0.245, fgImpact: -0.981, ftImpact: 0, to: 0.055 } }
        ]
      },
      home: {
        abbr: "SIE", name: "Siena Saints", score: 82,
        players: [

        ]
      }
    },
      {
      id: "401921820",
      line: "Southeast Missouri State Redhawks 68 @ South Carolina Gamecocks 78 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SEMO", name: "Southeast Missouri State Redhawks", score: 68,
        players: [

        ]
      },
      home: {
        abbr: "SouthCar", name: "South Carolina Gamecocks", score: 78,
        players: [
          { name: "Juan Fernandez", min: 32, pts: 18, reb: 7, ast: 0, stl: 0, blk: 4, to: 4, tpm: 0, fgm: 4, fga: 10, ftm: 10, fta: 13, composite: 3.38, zScores: { pts: 1.483, reb: 1.254, ast: -0.808, stl: -0.763, blk: 5.053, tpm: -0.629, fgImpact: -0.511, ftImpact: 0.897, to: -2.6 } },
          { name: "Aleksas Bieliauskas", min: 21, pts: 8, reb: 4, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: -0.07, zScores: { pts: 0.079, reb: 0.26, ast: -0.808, stl: -0.763, blk: 0.943, tpm: 0.245, fgImpact: -0.256, ftImpact: 0.175, to: 0.055 } },
          { name: "Jakub Necas", min: 34, pts: 12, reb: 6, ast: 3, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 6, ftm: 4, fta: 4, composite: 3.31, zScores: { pts: 0.64, reb: 0.923, ast: 0.939, stl: -0.763, blk: -0.427, tpm: 1.119, fgImpact: 0.214, ftImpact: 1.491, to: -0.83 } },
          { name: "Camden Heide", min: 33, pts: 6, reb: 6, ast: 0, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 3, fta: 4, composite: -1.04, zScores: { pts: -0.202, reb: 0.923, ast: -0.808, stl: -0.763, blk: 0.943, tpm: 0.245, fgImpact: -0.726, ftImpact: 0.175, to: -0.83 } },
          { name: "Kory Mincy", min: 33, pts: 19, reb: 4, ast: 2, stl: 3, blk: 1, to: 4, tpm: 2, fgm: 6, fga: 11, ftm: 5, fta: 6, composite: 5.73, zScores: { pts: 1.623, reb: 0.26, ast: 0.357, stl: 2.285, blk: 0.943, tpm: 1.119, fgImpact: 0.827, ftImpact: 0.921, to: -2.6 } },
          { name: "Hugo Lopez", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.46, zScores: { pts: -1.044, reb: -0.733, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "Marcus Johnson", min: 24, pts: 10, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 8, ftm: 2, fta: 5, composite: -1.6, zScores: { pts: 0.359, reb: -0.071, ast: -0.226, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: 0.286, ftImpact: -2.085, to: 0.94 } },
          { name: "Shane Blakeney", min: 7, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.44, zScores: { pts: -1.044, reb: -0.402, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.055 } },
          { name: "Davion Hannah", min: 13, pts: 5, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 4, composite: -1.67, zScores: { pts: -0.342, reb: -0.071, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.327, ftImpact: 0.175, to: 0.94 } }
        ]
      }
    },
      {
      id: "401924719",
      line: "Keuka Storm 59 @ Cornell Big Red 99 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "KEUK", name: "Keuka Storm", score: 59,
        players: [

        ]
      },
      home: {
        abbr: "Corn", name: "Cornell Big Red", score: 99,
        players: [
          { name: "Quinn Gibson", min: 17, pts: 11, reb: 10, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 9, ftm: 1, fta: 4, composite: 1.67, zScores: { pts: 0.5, reb: 2.247, ast: 0.357, stl: 1.269, blk: -0.427, tpm: -0.629, fgImpact: 0.756, ftImpact: -2.458, to: 0.055 } },
          { name: "Gioacchino Panzini", min: 16, pts: 6, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 2, ftm: 1, fta: 3, composite: 0.55, zScores: { pts: -0.202, reb: 0.26, ast: 0.939, stl: 0.253, blk: -0.427, tpm: 0.245, fgImpact: 0.94, ftImpact: -1.515, to: 0.055 } },
          { name: "Kaspar Sepp", min: 11, pts: 6, reb: 3, ast: 3, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.09, zScores: { pts: -0.202, reb: -0.071, ast: 0.939, stl: -0.763, blk: -0.427, tpm: 1.119, fgImpact: 0.143, ftImpact: 0, to: -0.83 } },
          { name: "Mateen Rafiq", min: 17, pts: 9, reb: 1, ast: 2, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: 2.39, zScores: { pts: 0.219, reb: -0.733, ast: 0.357, stl: 1.269, blk: -0.427, tpm: 1.119, fgImpact: 0.214, ftImpact: -0.571, to: 0.94 } },
          { name: "Jacob Beccles", min: 17, pts: 7, reb: 2, ast: 2, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 0.78, zScores: { pts: -0.062, reb: -0.402, ast: 0.357, stl: -0.763, blk: 0.943, tpm: 0.245, fgImpact: 0.541, ftImpact: 0.746, to: -0.83 } },
          { name: "Carson Davis", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -5.94, zScores: { pts: -1.044, reb: -0.733, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -1.594, ftImpact: 0, to: 0.055 } },
          { name: "Mikehi Williams", min: 14, pts: 6, reb: 5, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 6, fta: 8, composite: -1.13, zScores: { pts: -0.202, reb: 0.591, ast: -0.808, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: -1.196, ftImpact: 0.35, to: 0.94 } },
          { name: "Blake Lecklitner", min: 9, pts: 9, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 3, ftm: 1, fta: 2, composite: 1.96, zScores: { pts: 0.219, reb: 0.26, ast: -0.226, stl: -0.763, blk: -0.427, tpm: 1.119, fgImpact: 1.41, ftImpact: -0.571, to: 0.94 } },
          { name: "Jax Abalos", min: 15, pts: 13, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 4, fga: 7, ftm: 2, fta: 4, composite: 2.23, zScores: { pts: 0.781, reb: -0.402, ast: -0.808, stl: -0.763, blk: 0.943, tpm: 1.993, fgImpact: 0.684, ftImpact: -1.142, to: 0.94 } },
          { name: "Ty Iwanonkiw", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.82, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: 0.943, tpm: -0.629, fgImpact: -0.399, ftImpact: 0, to: 0.94 } },
          { name: "Ian Imegwu", min: 10, pts: 2, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -2.15, zScores: { pts: -0.764, reb: 0.26, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.399, ftImpact: 0.746, to: 0.055 } },
          { name: "Luke Kennevan", min: 15, pts: 8, reb: 2, ast: 1, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: 0.99, zScores: { pts: 0.079, reb: -0.402, ast: -0.226, stl: 0.253, blk: 0.943, tpm: 0.245, fgImpact: 0.613, ftImpact: -0.571, to: 0.055 } },
          { name: "JJ Sanchez", min: 12, pts: 8, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: 1.52, zScores: { pts: 0.079, reb: -0.402, ast: 0.357, stl: 0.253, blk: -0.427, tpm: 1.119, fgImpact: -0.256, ftImpact: 0.746, to: 0.055 } },
          { name: "Trey Williams", min: 8, pts: 2, reb: 4, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: 1.48, zScores: { pts: -0.764, reb: 0.26, ast: 0.357, stl: 1.269, blk: -0.427, tpm: -0.629, fgImpact: 0.47, ftImpact: 0, to: 0.94 } },
          { name: "Ryan Burbach", min: 17, pts: 9, reb: 5, ast: 1, stl: 0, blk: 2, to: 1, tpm: 2, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: 2.95, zScores: { pts: 0.219, reb: 0.591, ast: -0.226, stl: -0.763, blk: 2.313, tpm: 1.119, fgImpact: 0.214, ftImpact: -0.571, to: 0.055 } },
          { name: "Elijah Griffin", min: 11, pts: 3, reb: 0, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.64, zScores: { pts: -0.623, reb: -1.065, ast: 0.357, stl: -0.763, blk: -0.427, tpm: 0.245, fgImpact: 0.47, ftImpact: 0, to: -0.83 } }
        ]
      }
    },
      {
      id: "401920355",
      line: "Harvard Crimson 63 @ Chicago Maroons 47 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Harv", name: "Harvard Crimson", score: 63,
        players: [
          { name: "Luca Ace-Nasteski", min: 16, pts: 6, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -2.47, zScores: { pts: -0.202, reb: -0.402, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 1.011, ftImpact: 0, to: -0.83 } },
          { name: "Thomas Batties II", min: 32, pts: 19, reb: 6, ast: 2, stl: 1, blk: 3, to: 0, tpm: 1, fgm: 9, fga: 14, ftm: 0, fta: 0, composite: 10.26, zScores: { pts: 1.623, reb: 0.923, ast: 0.357, stl: 0.253, blk: 3.683, tpm: 0.245, fgImpact: 2.237, ftImpact: 0, to: 0.94 } },
          { name: "Payton Pitts", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.46, zScores: { pts: -1.044, reb: -0.733, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "Xavier Nesbitt", min: 15, pts: 7, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 0.36, zScores: { pts: -0.062, reb: -1.065, ast: -0.808, stl: 0.253, blk: -0.427, tpm: 0.245, fgImpact: 0.541, ftImpact: 0.746, to: 0.94 } },
          { name: "Robert Hinton", min: 25, pts: 2, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.56, zScores: { pts: -0.764, reb: 0.923, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.726, ftImpact: 0, to: 0.055 } },
          { name: "Julian Adigun", min: 14, pts: 4, reb: 4, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.62, zScores: { pts: -0.483, reb: 0.26, ast: -0.808, stl: 1.269, blk: -0.427, tpm: -0.629, fgImpact: 0.143, ftImpact: 0, to: 0.055 } },
          { name: "Preston Merrick", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "Brandon Burrell", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.59, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.797, ftImpact: 0, to: 0.94 } },
          { name: "Frankie Mannino", min: 9, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.8, zScores: { pts: -0.764, reb: -0.402, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0.47, ftImpact: 0, to: 0.94 } },
          { name: "Jason Singleton", min: 24, pts: 8, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 0, fta: 1, composite: -0.46, zScores: { pts: 0.079, reb: -0.071, ast: 0.939, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: 0.286, ftImpact: -0.944, to: 0.055 } },
          { name: "Tey Barbour", min: 27, pts: 13, reb: 6, ast: 0, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 8, ftm: 1, fta: 1, composite: 4.44, zScores: { pts: 0.781, reb: 0.923, ast: -0.808, stl: 1.269, blk: -0.427, tpm: 1.119, fgImpact: 1.154, ftImpact: 0.373, to: 0.055 } },
          { name: "Ben Eisendrath", min: 22, pts: 2, reb: 1, ast: 5, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -1.48, zScores: { pts: -0.764, reb: -0.733, ast: 2.103, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: -1.196, ftImpact: 0.746, to: -0.83 } }
        ]
      },
      home: {
        abbr: "CHI", name: "Chicago Maroons", score: 47,
        players: [

        ]
      }
    },
      {
      id: "401920233",
      line: "Central Connecticut Blue Devils 78 @ Dartmouth Big Green 71 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "CCSU", name: "Central Connecticut Blue Devils", score: 78,
        players: [

        ]
      },
      home: {
        abbr: "Dart", name: "Dartmouth Big Green", score: 71,
        players: [
          { name: "Dan Civello", min: 13, pts: 4, reb: 2, ast: 1, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.5, zScores: { pts: -0.483, reb: -0.402, ast: -0.226, stl: -0.763, blk: 2.313, tpm: -0.629, fgImpact: -0.256, ftImpact: 0, to: 0.94 } },
          { name: "Cam Hiatt", min: 30, pts: 9, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 4, fta: 4, composite: 3.23, zScores: { pts: 0.219, reb: 0.591, ast: -0.226, stl: 0.253, blk: -0.427, tpm: 0.245, fgImpact: 0.143, ftImpact: 1.491, to: 0.94 } },
          { name: "Landon Williams", min: 30, pts: 4, reb: 4, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -2.2, zScores: { pts: -0.483, reb: 0.26, ast: 0.357, stl: -0.763, blk: 0.943, tpm: -0.629, fgImpact: -1.053, ftImpact: 0, to: -0.83 } },
          { name: "Cameron McNamee", min: 30, pts: 20, reb: 6, ast: 0, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 12, ftm: 4, fta: 6, composite: 4.66, zScores: { pts: 1.763, reb: 0.923, ast: -0.808, stl: 0.253, blk: -0.427, tpm: 2.867, fgImpact: 0.429, ftImpact: -0.396, to: 0.055 } },
          { name: "Nikola Abusara", min: 20, pts: 2, reb: 2, ast: 1, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -2.91, zScores: { pts: -0.764, reb: -0.402, ast: -0.226, stl: 2.285, blk: -0.427, tpm: -0.629, fgImpact: -1.921, ftImpact: 0, to: -0.83 } },
          { name: "Tyler Garrett", min: 8, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.044, reb: -0.733, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.399, ftImpact: 0, to: 0.94 } },
          { name: "Patrick Tivnan Jr.", min: 15, pts: 5, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 4, composite: -2.6, zScores: { pts: -0.342, reb: -0.071, ast: -0.808, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: 0.94, ftImpact: -2.458, to: 0.94 } },
          { name: "Anton Strelnikov", min: 24, pts: 15, reb: 5, ast: 3, stl: 1, blk: 0, to: 5, tpm: 0, fgm: 6, fga: 12, ftm: 3, fta: 4, composite: -1.09, zScores: { pts: 1.061, reb: 0.591, ast: 0.939, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: 0.429, ftImpact: 0.175, to: -3.485 } },
          { name: "Acen Jimenez", min: 15, pts: 5, reb: 2, ast: 0, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.64, zScores: { pts: -0.342, reb: -0.402, ast: -0.808, stl: 1.269, blk: -0.427, tpm: 0.245, fgImpact: 0.541, ftImpact: 0, to: -1.715 } },
          { name: "Ernas Valauskas", min: 15, pts: 2, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -3.99, zScores: { pts: -0.764, reb: -0.733, ast: -0.226, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: -1.523, ftImpact: 0, to: 0.055 } },
          { name: "Ben Brown", min: 25, pts: 5, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: -1.32, zScores: { pts: -0.342, reb: -0.402, ast: -0.808, stl: 0.253, blk: -0.427, tpm: 0.245, fgImpact: -1.523, ftImpact: 0.746, to: 0.94 } }
        ]
      }
    },
      {
      id: "401911306",
      line: "Brown Bears 65 @ Lehigh Mountain Hawks 55 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Brown", name: "Brown Bears", score: 65,
        players: [
          { name: "N'famara Dabo", min: 27, pts: 14, reb: 6, ast: 0, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 7, fga: 12, ftm: 0, fta: 2, composite: -1.72, zScores: { pts: 0.921, reb: 0.923, ast: -0.808, stl: -0.763, blk: 0.943, tpm: -0.629, fgImpact: 1.297, ftImpact: -1.887, to: -1.715 } },
          { name: "Timmy Bollin", min: 20, pts: 7, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 4, composite: -2.66, zScores: { pts: -0.062, reb: 0.26, ast: 0.357, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 1.011, ftImpact: -2.458, to: 0.055 } },
          { name: "Brady Loughlin", min: 31, pts: 6, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.39, zScores: { pts: -0.202, reb: -0.402, ast: 0.357, stl: 0.253, blk: -0.427, tpm: 1.119, fgImpact: -0.256, ftImpact: 0, to: -0.83 } },
          { name: "Jerrell Barron Jr.", min: 13, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.66, zScores: { pts: -1.044, reb: -0.733, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -1.196, ftImpact: 0, to: 0.94 } },
          { name: "Jeremiah Jenkins", min: 33, pts: 13, reb: 6, ast: 5, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 14, ftm: 2, fta: 4, composite: 0.8, zScores: { pts: 0.781, reb: 0.923, ast: 2.103, stl: 1.269, blk: -0.427, tpm: 0.245, fgImpact: -1.237, ftImpact: -1.142, to: -1.715 } },
          { name: "Wyatt DeGraaf", min: 13, pts: 6, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 2, composite: -2.41, zScores: { pts: -0.202, reb: 0.26, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 1.41, ftImpact: -1.887, to: 0.055 } },
          { name: "Rykan Woo", min: 20, pts: 5, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 1, fta: 1, composite: -1.22, zScores: { pts: -0.342, reb: -0.071, ast: 0.357, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.654, ftImpact: 0.373, to: 0.94 } },
          { name: "Isaiah Langham", min: 7, pts: 0, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -2.95, zScores: { pts: -1.044, reb: 0.26, ast: -0.226, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: -1.196, ftImpact: 0, to: 0.055 } },
          { name: "Ray Cuevas", min: 25, pts: 10, reb: 4, ast: 1, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 3.37, zScores: { pts: 0.359, reb: 0.26, ast: -0.226, stl: 1.269, blk: -0.427, tpm: 1.119, fgImpact: 0.214, ftImpact: 0.746, to: 0.055 } },
          { name: "David Rochester", min: 11, pts: 4, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 1, composite: -0.94, zScores: { pts: -0.483, reb: 0.26, ast: -0.808, stl: -0.763, blk: 0.943, tpm: -0.629, fgImpact: 0.541, ftImpact: -0.944, to: 0.94 } }
        ]
      },
      home: {
        abbr: "LEH", name: "Lehigh Mountain Hawks", score: 55,
        players: [

        ]
      }
    },
      {
      id: "401902277",
      line: "Butler Bulldogs 81 @ Boise State Broncos 100 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Butl", name: "Butler Bulldogs", score: 81,
        players: [
          { name: "Asim Djulovic", min: 22, pts: 8, reb: 4, ast: 3, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -1, zScores: { pts: 0.079, reb: 0.26, ast: 0.939, stl: -0.763, blk: -0.427, tpm: 1.119, fgImpact: -1.38, ftImpact: 0, to: -0.83 } },
          { name: "Treyson Anderson", min: 26, pts: 13, reb: 13, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 9, ftm: 4, fta: 4, composite: 3.4, zScores: { pts: 0.781, reb: 3.241, ast: -0.226, stl: -0.763, blk: -0.427, tpm: 0.245, fgImpact: -0.113, ftImpact: 1.491, to: -0.83 } },
          { name: "Drayton Jones", min: 19, pts: 2, reb: 5, ast: 1, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 0.91, zScores: { pts: -0.764, reb: 0.591, ast: -0.226, stl: 1.269, blk: 0.943, tpm: -0.629, fgImpact: -0.327, ftImpact: 0, to: 0.055 } },
          { name: "Eduardo Klafke", min: 31, pts: 19, reb: 7, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 10, ftm: 7, fta: 7, composite: 6.62, zScores: { pts: 1.623, reb: 1.254, ast: -0.226, stl: 0.253, blk: -0.427, tpm: 1.119, fgImpact: 0.357, ftImpact: 2.61, to: 0.055 } },
          { name: "Jalen Jackson", min: 34, pts: 19, reb: 2, ast: 3, stl: 0, blk: 0, to: 5, tpm: 1, fgm: 8, fga: 17, ftm: 2, fta: 3, composite: -2.29, zScores: { pts: 1.623, reb: -0.402, ast: 0.939, stl: -0.763, blk: -0.427, tpm: 0.245, fgImpact: 0.173, ftImpact: -0.198, to: -3.485 } },
          { name: "Samis Calderon", min: 27, pts: 2, reb: 3, ast: 2, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -1.78, zScores: { pts: -0.764, reb: -0.071, ast: 0.357, stl: 0.253, blk: 0.943, tpm: -0.629, fgImpact: -1.921, ftImpact: 0, to: 0.055 } },
          { name: "Samu Adler", min: 17, pts: 2, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -3.92, zScores: { pts: -0.764, reb: 0.26, ast: 0.357, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -1.124, ftImpact: 0, to: -0.83 } },
          { name: "Baron Walker", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.59, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.797, ftImpact: 0, to: 0.94 } },
          { name: "Jordan Ellerbee", min: 18, pts: 16, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 11, ftm: 2, fta: 2, composite: 2.38, zScores: { pts: 1.202, reb: -0.733, ast: 0.357, stl: -0.763, blk: -0.427, tpm: 1.119, fgImpact: 0.827, ftImpact: 0.746, to: 0.055 } }
        ]
      },
      home: {
        abbr: "Bois", name: "Boise State Broncos", score: 100,
        players: [
          { name: "Dovydas Butka", min: 31, pts: 14, reb: 14, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 11, ftm: 4, fta: 5, composite: 5.19, zScores: { pts: 0.921, reb: 3.572, ast: 0.939, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: -0.041, ftImpact: 0.548, to: 0.055 } },
          { name: "Spencer Ahrens", min: 29, pts: 24, reb: 5, ast: 1, stl: 1, blk: 0, to: 1, tpm: 5, fgm: 9, fga: 18, ftm: 1, fta: 4, composite: 4.5, zScores: { pts: 2.325, reb: 0.591, ast: -0.226, stl: 0.253, blk: -0.427, tpm: 3.741, fgImpact: 0.643, ftImpact: -2.458, to: 0.055 } },
          { name: "Aginaldo Neto", min: 38, pts: 25, reb: 6, ast: 5, stl: 3, blk: 1, to: 5, tpm: 4, fgm: 10, fga: 20, ftm: 1, fta: 1, composite: 9.19, zScores: { pts: 2.465, reb: 0.923, ast: 2.103, stl: 2.285, blk: 0.943, tpm: 2.867, fgImpact: 0.715, ftImpact: 0.373, to: -3.485 } },
          { name: "Julian Bowie", min: 17, pts: 2, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 6, ftm: 2, fta: 2, composite: -4.22, zScores: { pts: -0.764, reb: -0.402, ast: 0.357, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -2.391, ftImpact: 0.746, to: 0.055 } },
          { name: "Damari Wheeler-Thomas", min: 22, pts: 12, reb: 1, ast: 6, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 10, ftm: 1, fta: 1, composite: 3.31, zScores: { pts: 0.64, reb: -0.733, ast: 2.685, stl: -0.763, blk: -0.427, tpm: 1.993, fgImpact: -0.511, ftImpact: 0.373, to: 0.055 } },
          { name: "Jerquarius Stanback", min: 11, pts: 6, reb: 6, ast: 1, stl: 0, blk: 2, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: 1.92, zScores: { pts: -0.202, reb: 0.923, ast: -0.226, stl: -0.763, blk: 2.313, tpm: 0.245, fgImpact: 0.143, ftImpact: -0.571, to: 0.055 } },
          { name: "Pearson Carmichael", min: 23, pts: 14, reb: 4, ast: 2, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 9, ftm: 1, fta: 2, composite: 5.5, zScores: { pts: 0.921, reb: 0.26, ast: 0.357, stl: 1.269, blk: -0.427, tpm: 1.993, fgImpact: 0.756, ftImpact: -0.571, to: 0.94 } },
          { name: "Ethan Lathan", min: 9, pts: 0, reb: 4, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: 0.27, zScores: { pts: -1.044, reb: 0.26, ast: -0.808, stl: -0.763, blk: 2.313, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "Rayzhon Bergersen", min: 18, pts: 3, reb: 0, ast: 2, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: 2.18, zScores: { pts: -0.623, reb: -1.065, ast: 0.357, stl: 2.285, blk: -0.427, tpm: 0.245, fgImpact: 0.47, ftImpact: 0, to: 0.94 } }
        ]
      }
    },
      {
      id: "401927362",
      line: "Southern Jaguars 68 @ Drake Bulldogs 75 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SOU", name: "Southern Jaguars", score: 68,
        players: [

        ]
      },
      home: {
        abbr: "Drake", name: "Drake Bulldogs", score: 75,
        players: [
          { name: "Justin Burns", min: 32, pts: 7, reb: 7, ast: 1, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 3, fta: 6, composite: 1.39, zScores: { pts: -0.062, reb: 1.254, ast: -0.226, stl: 0.253, blk: 2.313, tpm: -0.629, fgImpact: 0.143, ftImpact: -1.713, to: 0.055 } },
          { name: "Jon Carroll", min: 34, pts: 21, reb: 11, ast: 2, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 7, fga: 12, ftm: 7, fta: 10, composite: 3.53, zScores: { pts: 1.904, reb: 2.579, ast: 0.357, stl: 1.269, blk: -0.427, tpm: -0.629, fgImpact: 1.297, ftImpact: -0.221, to: -2.6 } },
          { name: "Dre Kindell", min: 32, pts: 17, reb: 1, ast: 3, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 8, ftm: 5, fta: 8, composite: 2.87, zScores: { pts: 1.342, reb: -0.733, ast: 0.939, stl: 1.269, blk: -0.427, tpm: 1.119, fgImpact: 1.154, ftImpact: -0.967, to: -0.83 } },
          { name: "Owen Larson", min: 38, pts: 11, reb: 3, ast: 4, stl: 1, blk: 0, to: 4, tpm: 2, fgm: 4, fga: 13, ftm: 1, fta: 2, composite: -1.98, zScores: { pts: 0.5, reb: -0.071, ast: 1.521, stl: 0.253, blk: -0.427, tpm: 1.119, fgImpact: -1.707, ftImpact: -0.571, to: -2.6 } },
          { name: "Andrew Alia", min: 29, pts: 11, reb: 3, ast: 1, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 6, ftm: 0, fta: 2, composite: 0.39, zScores: { pts: 0.5, reb: -0.071, ast: -0.226, stl: 0.253, blk: -0.427, tpm: 1.993, fgImpact: 1.083, ftImpact: -1.887, to: -0.83 } },
          { name: "Griffen Goodbary", min: 9, pts: 0, reb: 1, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.4, zScores: { pts: -1.044, reb: -0.733, ast: -0.226, stl: -0.763, blk: 0.943, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.055 } },
          { name: "Bryson Bahl", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.68, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.055 } },
          { name: "LJ Rush", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.31, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: 0.943, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.055 } },
          { name: "Dothan Ijadimbola", min: 5, pts: 2, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.33, zScores: { pts: -0.764, reb: -0.733, ast: 0.357, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: -0.327, ftImpact: 0, to: 0.94 } },
          { name: "Eli Shetlar", min: 16, pts: 6, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 3, fta: 3, composite: -0.22, zScores: { pts: -0.202, reb: -0.402, ast: -0.226, stl: 0.253, blk: -0.427, tpm: 0.245, fgImpact: -1.523, ftImpact: 1.119, to: 0.94 } }
        ]
      }
    },
      {
      id: "401911335",
      line: "Idaho State Bengals 82 @ Air Force Falcons 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "IDST", name: "Idaho State Bengals", score: 82,
        players: [

        ]
      },
      home: {
        abbr: "AF", name: "Air Force Falcons", score: 89,
        players: [
          { name: "Lucas Hobin", min: 29, pts: 16, reb: 6, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 10, ftm: 6, fta: 8, composite: 3.04, zScores: { pts: 1.202, reb: 0.923, ast: -0.808, stl: 0.253, blk: -0.427, tpm: 1.119, fgImpact: -0.511, ftImpact: 0.35, to: 0.94 } },
          { name: "Caleb Walker", min: 26, pts: 10, reb: 11, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 9, ftm: 4, fta: 8, composite: -0.87, zScores: { pts: 0.359, reb: 2.579, ast: -0.808, stl: 1.269, blk: -0.427, tpm: -0.629, fgImpact: -0.981, ftImpact: -2.283, to: 0.055 } },
          { name: "Grant Best", min: 33, pts: 25, reb: 5, ast: 3, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 11, ftm: 16, fta: 16, composite: 9.31, zScores: { pts: 2.465, reb: 0.591, ast: 0.939, stl: 1.269, blk: -0.427, tpm: 0.245, fgImpact: -0.91, ftImpact: 5.965, to: -0.83 } },
          { name: "Justin Hinds", min: 17, pts: 6, reb: 6, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: 0.27, zScores: { pts: -0.202, reb: 0.923, ast: -0.808, stl: 1.269, blk: -0.427, tpm: -0.629, fgImpact: -0.654, ftImpact: 0.746, to: 0.055 } },
          { name: "Kam Sanders", min: 26, pts: 18, reb: 3, ast: 3, stl: 2, blk: 1, to: 3, tpm: 0, fgm: 7, fga: 15, ftm: 4, fta: 4, composite: 3.81, zScores: { pts: 1.483, reb: -0.071, ast: 0.939, stl: 1.269, blk: 0.943, tpm: -0.629, fgImpact: 0.102, ftImpact: 1.491, to: -1.715 } },
          { name: "Brendan Martin", min: 22, pts: 9, reb: 7, ast: 2, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 3.89, zScores: { pts: 0.219, reb: 1.254, ast: 0.357, stl: 0.253, blk: 0.943, tpm: 0.245, fgImpact: -0.184, ftImpact: 0.746, to: 0.055 } },
          { name: "Eli Robinson", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.75, zScores: { pts: -1.044, reb: -0.733, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.399, ftImpact: 0, to: 0.055 } },
          { name: "Josh Gatete", min: 13, pts: 2, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.41, zScores: { pts: -0.764, reb: -0.402, ast: -0.808, stl: -0.763, blk: 0.943, tpm: -0.629, fgImpact: 0.071, ftImpact: 0, to: 0.94 } },
          { name: "Ethan Greenberg", min: 11, pts: 3, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.95, zScores: { pts: -0.623, reb: -0.402, ast: -0.808, stl: 0.253, blk: -0.427, tpm: 0.245, fgImpact: -1.124, ftImpact: 0, to: 0.94 } },
          { name: "A.J. Patterson", min: 16, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.47, zScores: { pts: -1.044, reb: -0.733, ast: 0.357, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.399, ftImpact: 0, to: -0.83 } }
        ]
      }
    },
      {
      id: "401911453",
      line: "Saint Mary's Gaels 95 @ Nevada Wolf Pack 96 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "StMar", name: "Saint Mary's Gaels", score: 95,
        players: [
          { name: "Vangelis Zougris", min: 22, pts: 6, reb: 7, ast: 2, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -0.54, zScores: { pts: -0.202, reb: 1.254, ast: 0.357, stl: -0.763, blk: 0.943, tpm: -0.629, fgImpact: 0.214, ftImpact: 0, to: -1.715 } },
          { name: "Jazz Gardner", min: 13, pts: 4, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.51, zScores: { pts: -0.483, reb: -0.071, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0.143, ftImpact: 0, to: 0.94 } },
          { name: "Mantas Juzenas", min: 41, pts: 24, reb: 8, ast: 4, stl: 1, blk: 0, to: 0, tpm: 5, fgm: 7, fga: 18, ftm: 5, fta: 7, composite: 8.82, zScores: { pts: 2.325, reb: 1.585, ast: 1.521, stl: 0.253, blk: -0.427, tpm: 3.741, fgImpact: -1.094, ftImpact: -0.023, to: 0.94 } },
          { name: "Joshua Dent", min: 43, pts: 30, reb: 2, ast: 5, stl: 2, blk: 0, to: 3, tpm: 5, fgm: 10, fga: 17, ftm: 5, fta: 5, composite: 11.51, zScores: { pts: 3.167, reb: -0.402, ast: 2.103, stl: 1.269, blk: -0.427, tpm: 3.741, fgImpact: 1.91, ftImpact: 1.864, to: -1.715 } },
          { name: "Rory Hawke", min: 20, pts: 0, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -4.37, zScores: { pts: -1.044, reb: 0.26, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -1.594, ftImpact: 0, to: 0.055 } },
          { name: "Thomas Ndong", min: 28, pts: 6, reb: 8, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -1.28, zScores: { pts: -0.202, reb: 1.585, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.981, ftImpact: 0, to: 0.94 } },
          { name: "Kevin Gad", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.46, zScores: { pts: -1.044, reb: -0.733, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "Luke Fennell", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.68, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.055 } },
          { name: "Darius Bivins", min: 20, pts: 5, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 4, composite: -1.07, zScores: { pts: -0.342, reb: -1.065, ast: 0.357, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: -0.327, ftImpact: 0.175, to: 0.94 } },
          { name: "Jeremy Dent-Smith", min: 31, pts: 20, reb: 1, ast: 2, stl: 3, blk: 0, to: 2, tpm: 3, fgm: 7, fga: 15, ftm: 3, fta: 3, composite: 5.63, zScores: { pts: 1.763, reb: -0.733, ast: 0.357, stl: 2.285, blk: -0.427, tpm: 1.993, fgImpact: 0.102, ftImpact: 1.119, to: -0.83 } }
        ]
      },
      home: {
        abbr: "Nev", name: "Nevada Wolf Pack", score: 96,
        players: [
          { name: "Elijah Price", min: 38, pts: 11, reb: 11, ast: 3, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 11, ftm: 3, fta: 5, composite: 0.84, zScores: { pts: 0.5, reb: 2.579, ast: 0.939, stl: 1.269, blk: -0.427, tpm: -0.629, fgImpact: -0.91, ftImpact: -0.769, to: -1.715 } },
          { name: "Simon Majok", min: 12, pts: 1, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -2.19, zScores: { pts: -0.904, reb: -0.402, ast: -0.808, stl: -0.763, blk: 0.943, tpm: -0.629, fgImpact: 0, ftImpact: -0.571, to: 0.94 } },
          { name: "Vaughn Weems", min: 35, pts: 33, reb: 5, ast: 1, stl: 3, blk: 1, to: 0, tpm: 4, fgm: 12, fga: 20, ftm: 5, fta: 6, composite: 14.36, zScores: { pts: 3.588, reb: 0.591, ast: -0.226, stl: 2.285, blk: 0.943, tpm: 2.867, fgImpact: 2.452, ftImpact: 0.921, to: 0.94 } },
          { name: "Peter Bandelj", min: 31, pts: 10, reb: 2, ast: 6, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 4, fta: 5, composite: 1.64, zScores: { pts: 0.359, reb: -0.402, ast: 2.685, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0.214, ftImpact: 0.548, to: 0.055 } },
          { name: "Styles Phipps", min: 31, pts: 25, reb: 3, ast: 5, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 10, fga: 12, ftm: 4, fta: 6, composite: 7.25, zScores: { pts: 2.465, reb: -0.071, ast: 2.103, stl: 0.253, blk: -0.427, tpm: 0.245, fgImpact: 3.903, ftImpact: -0.396, to: -0.83 } },
          { name: "Cedric Lath", min: 12, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.53, zScores: { pts: -1.044, reb: -0.402, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.399, ftImpact: 0, to: 0.94 } },
          { name: "TJ Coulter", min: 6, pts: 1, reb: 2, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -2.7, zScores: { pts: -0.904, reb: -0.402, ast: 0.939, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: -0.571, to: 0.055 } },
          { name: "Peyton White", min: 26, pts: 4, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 4, fta: 6, composite: -2.32, zScores: { pts: -0.483, reb: -0.071, ast: -0.226, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: -0.399, ftImpact: -0.396, to: 0.055 } },
          { name: "Myles Walker", min: 14, pts: 2, reb: 2, ast: 5, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 1, composite: -2.58, zScores: { pts: -0.764, reb: -0.402, ast: 2.103, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0.071, ftImpact: -0.944, to: -0.83 } },
          { name: "SJ Madison", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.68, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.055 } },
          { name: "Keyon Kensie Jr.", min: 18, pts: 9, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 1, fta: 3, composite: -3.19, zScores: { pts: 0.219, reb: -0.402, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 1.083, ftImpact: -1.515, to: 0.055 } }
        ]
      }
    },
      {
      id: "401911238",
      line: "Richmond Spiders 79 @ Temple Owls 53 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Rich", name: "Richmond Spiders", score: 79,
        players: [
          { name: "Jamie Kaiser Jr.", min: 31, pts: 16, reb: 8, ast: 2, stl: 4, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 9, ftm: 2, fta: 4, composite: 7.67, zScores: { pts: 1.202, reb: 1.585, ast: 0.357, stl: 3.301, blk: -0.427, tpm: 1.119, fgImpact: 1.624, ftImpact: -1.142, to: 0.055 } },
          { name: "Amon Dorries", min: 21, pts: 11, reb: 1, ast: 5, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 5.01, zScores: { pts: 0.5, reb: -0.733, ast: 2.103, stl: 0.253, blk: 0.943, tpm: 0.245, fgImpact: 0.756, ftImpact: 0, to: 0.94 } },
          { name: "Aiden Argabright", min: 31, pts: 15, reb: 1, ast: 3, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 6, ftm: 5, fta: 6, composite: 6.3, zScores: { pts: 1.061, reb: -0.733, ast: 0.939, stl: 2.285, blk: -0.427, tpm: 1.119, fgImpact: 1.083, ftImpact: 0.921, to: 0.055 } },
          { name: "Derin Saran", min: 30, pts: 10, reb: 12, ast: 6, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 8, ftm: 1, fta: 1, composite: 8.64, zScores: { pts: 0.359, reb: 2.91, ast: 2.685, stl: 1.269, blk: -0.427, tpm: 0.245, fgImpact: 0.286, ftImpact: 0.373, to: 0.94 } },
          { name: "Dominick Stewart", min: 16, pts: 5, reb: 4, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -1.72, zScores: { pts: -0.342, reb: 0.26, ast: -0.226, stl: 0.253, blk: -0.427, tpm: 0.245, fgImpact: -0.654, ftImpact: 0, to: -0.83 } },
          { name: "Chad Cook", min: 14, pts: 2, reb: 0, ast: 4, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -4.29, zScores: { pts: -0.764, reb: -1.065, ast: 1.521, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -1.196, ftImpact: 0.746, to: -1.715 } },
          { name: "Andrew Ball", min: 19, pts: 13, reb: 5, ast: 0, stl: 1, blk: 2, to: 1, tpm: 1, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 5.06, zScores: { pts: 0.781, reb: 0.591, ast: -0.808, stl: 0.253, blk: 2.313, tpm: 0.245, fgImpact: 1.624, ftImpact: 0, to: 0.055 } },
          { name: "Dylan Homenick", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.46, zScores: { pts: -1.044, reb: -0.733, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "Sam Simmons Jr.", min: 9, pts: 0, reb: 1, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.53, zScores: { pts: -1.044, reb: -0.733, ast: -0.226, stl: 1.269, blk: -0.427, tpm: -0.629, fgImpact: -0.797, ftImpact: 0, to: 0.055 } },
          { name: "Will Harper III", min: 12, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.89, zScores: { pts: -0.623, reb: -0.733, ast: -0.808, stl: -0.763, blk: -0.427, tpm: 0.245, fgImpact: -0.726, ftImpact: 0, to: 0.94 } },
          { name: "Donovan Richardson", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.68, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.055 } },
          { name: "Kirby Mooney", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.68, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.055 } },
          { name: "Collin Tanner", min: 13, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -0.483, reb: -0.733, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0.541, ftImpact: 0, to: -0.83 } }
        ]
      },
      home: {
        abbr: "Tem", name: "Temple Owls", score: 53,
        players: [
          { name: "Christian Beam", min: 9, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -2.9, zScores: { pts: -0.483, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0.47, ftImpact: 0.746, to: 0.055 } },
          { name: "Jordan Marsh", min: 18, pts: 4, reb: 5, ast: 2, stl: 1, blk: 2, to: 4, tpm: 0, fgm: 1, fga: 7, ftm: 2, fta: 5, composite: -4.2, zScores: { pts: -0.483, reb: 0.591, ast: 0.357, stl: 0.253, blk: 2.313, tpm: -0.629, fgImpact: -1.921, ftImpact: -2.085, to: -2.6 } },
          { name: "Dez White", min: 13, pts: 3, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.03, zScores: { pts: -0.623, reb: -0.402, ast: -0.808, stl: 0.253, blk: -0.427, tpm: 0.245, fgImpact: -0.327, ftImpact: 0, to: 0.055 } },
          { name: "Gavin Griffiths", min: 24, pts: 3, reb: 2, ast: 1, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -1.63, zScores: { pts: -0.623, reb: -0.402, ast: -0.226, stl: 1.269, blk: -0.427, tpm: 0.245, fgImpact: -1.523, ftImpact: 0, to: 0.055 } },
          { name: "Cam Scott", min: 20, pts: 13, reb: 0, ast: 0, stl: 1, blk: 1, to: 2, tpm: 3, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 3.22, zScores: { pts: 0.781, reb: -1.065, ast: -0.808, stl: 0.253, blk: 0.943, tpm: 1.993, fgImpact: 1.951, ftImpact: 0, to: -0.83 } },
          { name: "Edwin Suarez Jr.", min: 3, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.13, zScores: { pts: -1.044, reb: -0.402, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "Baboucarr Njie", min: 23, pts: 7, reb: 4, ast: 3, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 5, fta: 8, composite: 0.91, zScores: { pts: -0.062, reb: 0.26, ast: 0.939, stl: -0.763, blk: 2.313, tpm: -0.629, fgImpact: -1.124, ftImpact: -0.967, to: 0.94 } },
          { name: "Sir Issac Herron", min: 9, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.47, zScores: { pts: -1.044, reb: 0.26, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "Dallis Dillard", min: 25, pts: 2, reb: 0, ast: 4, stl: 3, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.92, zScores: { pts: -0.764, reb: -1.065, ast: 1.521, stl: 2.285, blk: -0.427, tpm: -0.629, fgImpact: -1.124, ftImpact: 0, to: -1.715 } },
          { name: "Derrick Morton-Rivera", min: 12, pts: 2, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -3.17, zScores: { pts: -0.764, reb: -0.402, ast: -0.808, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: -1.196, ftImpact: 0.746, to: 0.055 } },
          { name: "Cam Wallace", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "Deuce Drake", min: 14, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -4.72, zScores: { pts: -0.483, reb: -0.402, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -1.124, ftImpact: 0.746, to: -0.83 } },
          { name: "Derrian Ford", min: 27, pts: 11, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 13, ftm: 1, fta: 2, composite: -2.01, zScores: { pts: 0.5, reb: 0.591, ast: -0.808, stl: -0.763, blk: -0.427, tpm: 1.119, fgImpact: -1.707, ftImpact: -0.571, to: 0.055 } }
        ]
      }
    },
      {
      id: "401929352",
      line: "Incarnate Word Cardinals 60 @ UTEP Miners 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UIW", name: "Incarnate Word Cardinals", score: 60,
        players: [

        ]
      },
      home: {
        abbr: "UTEP", name: "UTEP Miners", score: 79,
        players: [
          { name: "Youssouf Traore", min: 28, pts: 12, reb: 10, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 4, fta: 5, composite: 4.74, zScores: { pts: 0.64, reb: 2.247, ast: 0.357, stl: 1.269, blk: -0.427, tpm: -0.629, fgImpact: 0.684, ftImpact: 0.548, to: 0.055 } },
          { name: "Augusto Cassia", min: 30, pts: 9, reb: 9, ast: 1, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 3, fta: 8, composite: 0.56, zScores: { pts: 0.219, reb: 1.916, ast: -0.226, stl: 1.269, blk: 0.943, tpm: -0.629, fgImpact: 0.613, ftImpact: -3.6, to: 0.055 } },
          { name: "Cam McDaniels", min: 27, pts: 27, reb: 4, ast: 3, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 10, fga: 18, ftm: 3, fta: 5, composite: 8.32, zScores: { pts: 2.746, reb: 0.26, ast: 0.939, stl: 0.253, blk: -0.427, tpm: 2.867, fgImpact: 1.512, ftImpact: -0.769, to: 0.94 } },
          { name: "Leif Moeller", min: 33, pts: 8, reb: 5, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 2.24, zScores: { pts: 0.079, reb: 0.591, ast: 0.357, stl: 0.253, blk: -0.427, tpm: 1.119, fgImpact: 0.214, ftImpact: 0, to: 0.055 } },
          { name: "Reese Miller", min: 32, pts: 11, reb: 1, ast: 7, stl: 4, blk: 0, to: 3, tpm: 3, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 6.07, zScores: { pts: 0.5, reb: -0.733, ast: 3.268, stl: 3.301, blk: -0.427, tpm: 1.993, fgImpact: -0.113, ftImpact: 0, to: -1.715 } },
          { name: "Ivan Perasovic", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.044, reb: -0.733, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.399, ftImpact: 0, to: 0.94 } },
          { name: "Reid Cason", min: 12, pts: 6, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -0.53, zScores: { pts: -0.202, reb: -1.065, ast: -0.808, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: 1.41, ftImpact: 0, to: 0.94 } },
          { name: "Isaiah Ward", min: 7, pts: 6, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.58, zScores: { pts: -0.202, reb: -0.402, ast: -0.226, stl: -0.763, blk: -0.427, tpm: 1.119, fgImpact: 0.541, ftImpact: 0, to: 0.94 } },
          { name: "Kaleb Jackson", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.23, zScores: { pts: -1.044, reb: -0.733, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: -0.83 } },
          { name: "Donovan Criss", min: 16, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.39, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: 0.943, tpm: -0.629, fgImpact: -1.196, ftImpact: 0, to: -0.83 } },
          { name: "Jace Whiting", min: 10, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.02, zScores: { pts: -1.044, reb: -0.071, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.797, ftImpact: 0, to: 0.94 } }
        ]
      }
    },
      {
      id: "401930195",
      line: "Portland Pilots 130 @ Bethesda Flames 56 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Portl", name: "Portland Pilots", score: 130,
        players: [
          { name: "James O'Donnell", min: 22, pts: 29, reb: 20, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 11, fga: 12, ftm: 7, fta: 9, composite: 11.21, zScores: { pts: 3.027, reb: 5.559, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 4.771, ftImpact: 0.723, to: -0.83 } },
          { name: "Dante Censori-Hercules", min: 19, pts: 4, reb: 4, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: 0.94, zScores: { pts: -0.483, reb: 0.26, ast: -0.808, stl: 1.269, blk: -0.427, tpm: -0.629, fgImpact: 0.071, ftImpact: 0.746, to: 0.94 } },
          { name: "Riley Parker", min: 14, pts: 3, reb: 3, ast: 6, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: 0.99, zScores: { pts: -0.623, reb: -0.071, ast: 2.685, stl: 0.253, blk: -0.427, tpm: 0.245, fgImpact: -1.124, ftImpact: 0, to: 0.055 } },
          { name: "Jaxon Olvera", min: 15, pts: 18, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 10, ftm: 6, fta: 6, composite: 5.92, zScores: { pts: 1.483, reb: -0.402, ast: 0.357, stl: 0.253, blk: -0.427, tpm: 1.119, fgImpact: 0.357, ftImpact: 2.237, to: 0.94 } },
          { name: "Hunter Adam", min: 20, pts: 6, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -0.43, zScores: { pts: -0.202, reb: -0.402, ast: 0.357, stl: -0.763, blk: -0.427, tpm: 1.119, fgImpact: -1.053, ftImpact: 0, to: 0.94 } },
          { name: "Henry Sewell", min: 8, pts: 14, reb: 6, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 6, fga: 7, ftm: 2, fta: 3, composite: 3.98, zScores: { pts: 0.921, reb: 0.923, ast: -0.226, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: 2.421, ftImpact: -0.198, to: 0.94 } },
          { name: "Timo George", min: 12, pts: 13, reb: 4, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 6, fga: 8, ftm: 1, fta: 5, composite: 0.01, zScores: { pts: 0.781, reb: 0.26, ast: -0.808, stl: 1.269, blk: -0.427, tpm: -0.629, fgImpact: 2.023, ftImpact: -3.402, to: 0.94 } },
          { name: "Vito Perkovic", min: 18, pts: 10, reb: 9, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 2, fta: 2, composite: 2.12, zScores: { pts: 0.359, reb: 1.916, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 1.083, ftImpact: 0.746, to: 0.055 } },
          { name: "Dylan Moran", min: 8, pts: 7, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 3, ftm: 0, fta: 1, composite: 0.35, zScores: { pts: -0.062, reb: -0.402, ast: 0.357, stl: -0.763, blk: -0.427, tpm: 0.245, fgImpact: 1.41, ftImpact: -0.944, to: 0.94 } },
          { name: "Austin Foxwell", min: 11, pts: 2, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1, zScores: { pts: -0.764, reb: -0.402, ast: 0.357, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: -0.327, ftImpact: 0, to: 0.94 } },
          { name: "Kaia Isaac", min: 19, pts: 6, reb: 3, ast: 5, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: 0.25, zScores: { pts: -0.202, reb: -0.071, ast: 2.103, stl: 0.253, blk: -0.427, tpm: 0.245, fgImpact: -0.256, ftImpact: -0.571, to: -0.83 } },
          { name: "Marchelo Moreira", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.044, reb: -0.733, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.399, ftImpact: 0, to: 0.94 } },
          { name: "RJ Nance Jr.", min: 16, pts: 10, reb: 5, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 4, fta: 6, composite: 0.96, zScores: { pts: 0.359, reb: 0.591, ast: 0.939, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: 0.214, ftImpact: -0.396, to: 0.055 } },
          { name: "Carlin Briggs", min: 14, pts: 8, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -1.33, zScores: { pts: 0.079, reb: -0.402, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0.684, ftImpact: 0, to: 0.94 } }
        ]
      },
      home: {
        abbr: "BTHS", name: "Bethesda Flames", score: 56,
        players: [

        ]
      }
    },
      {
      id: "401909707",
      line: "Pittsburgh Panthers 82 @ Penn State Nittany Lions 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Pitt", name: "Pittsburgh Panthers", score: 82,
        players: [
          { name: "Akir Souare", min: 13, pts: 7, reb: 4, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: 1.34, zScores: { pts: -0.062, reb: 0.26, ast: -0.808, stl: 0.253, blk: 0.943, tpm: -0.629, fgImpact: 1.011, ftImpact: -0.571, to: 0.94 } },
          { name: "Baye Ndongo", min: 30, pts: 13, reb: 8, ast: 4, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 6, fga: 9, ftm: 1, fta: 2, composite: 5.43, zScores: { pts: 0.781, reb: 1.585, ast: 1.521, stl: -0.763, blk: 0.943, tpm: -0.629, fgImpact: 1.624, ftImpact: -0.571, to: 0.94 } },
          { name: "Naithan George", min: 18, pts: 7, reb: 1, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: -2.86, zScores: { pts: -0.062, reb: -0.733, ast: 0.939, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0.214, ftImpact: -0.571, to: -0.83 } },
          { name: "A'lahn Sumler", min: 39, pts: 26, reb: 0, ast: 4, stl: 2, blk: 0, to: 5, tpm: 3, fgm: 9, fga: 16, ftm: 5, fta: 5, composite: 5.72, zScores: { pts: 2.606, reb: -1.065, ast: 1.521, stl: 1.269, blk: -0.427, tpm: 1.993, fgImpact: 1.44, ftImpact: 1.864, to: -3.485 } },
          { name: "Jonathan Powell", min: 40, pts: 13, reb: 1, ast: 2, stl: 5, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 15, ftm: 1, fta: 3, composite: 2.32, zScores: { pts: 0.781, reb: -0.733, ast: 0.357, stl: 4.316, blk: -0.427, tpm: 1.119, fgImpact: -1.635, ftImpact: -1.515, to: 0.055 } },
          { name: "Chase Foster", min: 27, pts: 6, reb: 6, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 8, ftm: 2, fta: 3, composite: -2.61, zScores: { pts: -0.202, reb: 0.923, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -1.451, ftImpact: -0.198, to: 0.94 } },
          { name: "Armani Mighty", min: 10, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -3.21, zScores: { pts: -0.623, reb: -0.402, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0.071, ftImpact: -0.571, to: 0.94 } },
          { name: "Macari Moore", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.46, zScores: { pts: -1.044, reb: -0.733, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "Jalil Bethea", min: 19, pts: 7, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 3, fta: 3, composite: -1.12, zScores: { pts: -0.062, reb: -0.733, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0.541, ftImpact: 1.119, to: 0.055 } }
        ]
      },
      home: {
        abbr: "PSU", name: "Penn State Nittany Lions", score: 76,
        players: [
          { name: "Roko Prkacin", min: 31, pts: 11, reb: 7, ast: 2, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 6, ftm: 3, fta: 4, composite: 2.75, zScores: { pts: 0.5, reb: 1.254, ast: 0.357, stl: 1.269, blk: -0.427, tpm: -0.629, fgImpact: 1.083, ftImpact: 0.175, to: -0.83 } },
          { name: "Ivan Juric", min: 23, pts: 16, reb: 13, ast: 1, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 3, fga: 8, ftm: 9, fta: 10, composite: 3.52, zScores: { pts: 1.202, reb: 3.241, ast: -0.226, stl: 0.253, blk: -0.427, tpm: 0.245, fgImpact: -0.583, ftImpact: 2.412, to: -2.6 } },
          { name: "Josh Reed", min: 33, pts: 11, reb: 7, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 11, ftm: 3, fta: 4, composite: -1.42, zScores: { pts: 0.5, reb: 1.254, ast: -0.808, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: -0.91, ftImpact: 0.175, to: -0.83 } },
          { name: "Thomas Allard", min: 17, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -6.43, zScores: { pts: -1.044, reb: -0.733, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -1.196, ftImpact: 0, to: -0.83 } },
          { name: "Dasonte Bowen", min: 26, pts: 17, reb: 0, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 8, ftm: 6, fta: 6, composite: 3.27, zScores: { pts: 1.342, reb: -1.065, ast: 0.357, stl: 0.253, blk: -0.427, tpm: 0.245, fgImpact: 1.154, ftImpact: 2.237, to: -0.83 } },
          { name: "Francois Wibaut", min: 24, pts: 9, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 5, fta: 8, composite: -4.86, zScores: { pts: 0.219, reb: -0.402, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -0.256, ftImpact: -0.967, to: -0.83 } },
          { name: "Brant Byers", min: 29, pts: 9, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 7, ftm: 3, fta: 4, composite: -0.09, zScores: { pts: 0.219, reb: -0.071, ast: -0.226, stl: -0.763, blk: -0.427, tpm: 1.119, fgImpact: -1.053, ftImpact: 0.175, to: 0.94 } },
          { name: "Tim Oboh", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.35, zScores: { pts: -1.044, reb: -0.733, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.055 } },
          { name: "Reggie Grodin", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.044, reb: -1.065, ast: -0.808, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 0, ftImpact: 0, to: 0.94 } },
          { name: "Jay Rodgers", min: 14, pts: 3, reb: 0, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.15, zScores: { pts: -0.623, reb: -1.065, ast: 0.357, stl: -0.763, blk: -0.427, tpm: 0.245, fgImpact: 0.071, ftImpact: 0, to: 0.055 } }
        ]
      }
    },
      {
      id: "401929002",
      line: "UT Arlington Mavericks 62 @ Hawai'i Rainbow Warriors 71 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UTA", name: "UT Arlington Mavericks", score: 62,
        players: [

        ]
      },
      home: {
        abbr: "HI", name: "Hawai'i Rainbow Warriors", score: 71,
        players: [
          { name: "Zack Davidson", min: 24, pts: 21, reb: 6, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 8, fga: 13, ftm: 5, fta: 6, composite: 2.64, zScores: { pts: 1.904, reb: 0.923, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 1.767, ftImpact: 0.921, to: -0.83 } },
          { name: "Bol Dengdit", min: 29, pts: 15, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 8, ftm: 5, fta: 7, composite: 0.8, zScores: { pts: 1.061, reb: 0.591, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: 1.154, ftImpact: -0.023, to: 0.055 } },
          { name: "Jaden Matingou", min: 35, pts: 12, reb: 2, ast: 0, stl: 4, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 14, ftm: 1, fta: 1, composite: 1.74, zScores: { pts: 0.64, reb: -0.402, ast: -0.808, stl: 3.301, blk: -0.427, tpm: 0.245, fgImpact: -1.237, ftImpact: 0.373, to: 0.055 } },
          { name: "Tanner Cuff", min: 20, pts: 5, reb: 8, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 8, ftm: 1, fta: 2, composite: -3.65, zScores: { pts: -0.342, reb: 1.585, ast: -0.226, stl: -0.763, blk: -0.427, tpm: -0.629, fgImpact: -1.451, ftImpact: -0.571, to: -0.83 } },
          { name: "Chance Trujillo", min: 39, pts: 12, reb: 4, ast: 4, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 11, ftm: 4, fta: 4, composite: 1.23, zScores: { pts: 0.64, reb: 0.26, ast: 1.521, stl: -0.763, blk: -0.427, tpm: 1.119, fgImpact: -1.778, ftImpact: 1.491, to: -0.83 } },
          { name: "Kellen Hampton", min: 20, pts: 1, reb: 4, ast: 0, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 1, fta: 2, composite: -0.74, zScores: { pts: -0.904, reb: 0.26, ast: -0.808, stl: 0.253, blk: 2.313, tpm: -0.629, fgImpact: -1.594, ftImpact: -0.571, to: 0.94 } },
          { name: "Marcus Adams Jr.", min: 19, pts: 3, reb: 8, ast: 2, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: 0.28, zScores: { pts: -0.623, reb: 1.585, ast: 0.357, stl: -0.763, blk: 0.943, tpm: 0.245, fgImpact: -1.523, ftImpact: 0, to: 0.055 } },
          { name: "Tiger Cuff", min: 14, pts: 2, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.73, zScores: { pts: -0.764, reb: -1.065, ast: -0.226, stl: 0.253, blk: -0.427, tpm: -0.629, fgImpact: 0.071, ftImpact: 0, to: 0.055 } }
        ]
      }
    }
    ]
  },
    "2026-11-09": {
    games: [
      {
      id: "401920686",
      line: "Wagner Seahawks 41 @ UConn Huskies 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WAG", name: "Wagner Seahawks", score: 41,
        players: [

        ]
      },
      home: {
        abbr: "UConn", name: "UConn Huskies", score: 83,
        players: [
          { name: "Nik Khamenia", min: 7, pts: 11, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 0.84, zScores: { pts: 0.559, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: 1.756, fgImpact: 1.383, ftImpact: 0, to: -0.023 } },
          { name: "Jayden Ross", min: 26, pts: 12, reb: 2, ast: 1, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 3.17, zScores: { pts: 0.712, reb: -0.369, ast: -0.275, stl: 1.249, blk: -0.504, tpm: 0.946, fgImpact: 1.431, ftImpact: 0, to: -0.023 } },
          { name: "Na'jai Hines", min: 22, pts: 10, reb: 8, ast: 0, stl: 2, blk: 2, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 6.48, zScores: { pts: 0.407, reb: 1.89, ast: -0.848, stl: 1.249, blk: 2.199, tpm: -0.675, fgImpact: 0.588, ftImpact: 0.785, to: 0.887 } },
          { name: "Braylon Mullins", min: 24, pts: 10, reb: 4, ast: 4, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 12, ftm: 5, fta: 6, composite: -0.78, zScores: { pts: 0.407, reb: 0.384, ast: 1.443, stl: -0.738, blk: 0.848, tpm: 0.135, fgImpact: -3.084, ftImpact: 0.758, to: -0.933 } },
          { name: "Silas Demary Jr.", min: 27, pts: 18, reb: 4, ast: 4, stl: 6, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 12, ftm: 2, fta: 5, composite: 6.48, zScores: { pts: 1.626, reb: 0.384, ast: 1.443, stl: 5.222, blk: -0.504, tpm: 0.946, fgImpact: 1.129, ftImpact: -2.83, to: -0.933 } },
          { name: "Egor Amosov", min: 13, pts: 1, reb: 4, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 1, fta: 2, composite: -2.12, zScores: { pts: -0.965, reb: 0.384, ast: -0.848, stl: 0.255, blk: 0.848, tpm: -0.675, fgImpact: -1.192, ftImpact: -0.813, to: 0.887 } },
          { name: "Colben Landrew", min: 23, pts: 5, reb: 1, ast: 1, stl: 2, blk: 2, to: 2, tpm: 0, fgm: 1, fga: 7, ftm: 3, fta: 3, composite: -0.3, zScores: { pts: -0.355, reb: -0.745, ast: -0.275, stl: 1.249, blk: 2.199, tpm: -0.675, fgImpact: -1.94, ftImpact: 1.178, to: -0.933 } },
          { name: "Jacob Ross", min: 3, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.39, zScores: { pts: -0.812, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0.048, ftImpact: 0, to: 0.887 } },
          { name: "Isaiah Shaw", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Oskar Giltay", min: 17, pts: 6, reb: 4, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: 0.99, zScores: { pts: -0.203, reb: 0.384, ast: -0.275, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: 0.89, ftImpact: 0.785, to: -0.023 } },
          { name: "Elmir Dzafic", min: 1, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.4, zScores: { pts: -0.965, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: -0.813, to: 0.887 } },
          { name: "Junior County", min: 17, pts: 4, reb: 2, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -1.85, zScores: { pts: -0.507, reb: -0.369, ast: 1.443, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.35, ftImpact: 0.785, to: -0.933 } },
          { name: "Nils Machowski", min: 18, pts: 3, reb: 1, ast: 1, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -0.3, zScores: { pts: -0.66, reb: -0.745, ast: -0.275, stl: 0.255, blk: 0.848, tpm: 0.135, fgImpact: -0.747, ftImpact: 0, to: 0.887 } },
          { name: "Jaye Nash", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -1.117, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } }
        ]
      }
    },
      {
      id: "401906865",
      line: "Grambling Tigers 62 @ Texas Longhorns 93 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "GRAM", name: "Grambling Tigers", score: 62,
        players: [

        ]
      },
      home: {
        abbr: "Tex", name: "Texas Longhorns", score: 93,
        players: [
          { name: "David Punch", min: 21, pts: 10, reb: 6, ast: 1, stl: 3, blk: 2, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 2, fta: 3, composite: 6.09, zScores: { pts: 0.407, reb: 1.137, ast: -0.275, stl: 2.242, blk: 2.199, tpm: -0.675, fgImpact: 0.588, ftImpact: -0.42, to: 0.887 } },
          { name: "Matas Vokietaitis", min: 23, pts: 26, reb: 9, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 8, fga: 12, ftm: 10, fta: 12, composite: 8.16, zScores: { pts: 2.846, reb: 2.266, ast: -0.848, stl: 0.255, blk: 0.848, tpm: -0.675, fgImpact: 1.971, ftImpact: 1.517, to: -0.023 } },
          { name: "Elyjah Freeman", min: 20, pts: 11, reb: 6, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 3, fta: 6, composite: -1.55, zScores: { pts: 0.559, reb: 1.137, ast: -0.848, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: 0.986, ftImpact: -2.438, to: -0.023 } },
          { name: "Isaiah Johnson", min: 26, pts: 2, reb: 4, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.16, zScores: { pts: -0.812, reb: 0.384, ast: 1.443, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -1.145, ftImpact: 0, to: 0.887 } },
          { name: "Austin Goosby", min: 23, pts: 3, reb: 4, ast: 2, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -0.66, zScores: { pts: -0.66, reb: 0.384, ast: 0.298, stl: 1.249, blk: -0.504, tpm: 0.135, fgImpact: -1.542, ftImpact: 0, to: -0.023 } },
          { name: "Marcus Spears Jr.", min: 20, pts: 12, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 4, fta: 8, composite: -3.21, zScores: { pts: 0.712, reb: 0.384, ast: 0.298, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0.588, ftImpact: -3.25, to: -0.023 } },
          { name: "John Clark", min: 5, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 1, composite: -3.36, zScores: { pts: -0.66, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0.445, ftImpact: 0.393, to: -0.023 } },
          { name: "Lewis Obiorah", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -4.8, zScores: { pts: -1.117, reb: -0.745, ast: -0.848, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: 0, ftImpact: -2.411, to: 0.887 } },
          { name: "Mantas Laurencikas", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Joe Sterling", min: 16, pts: 13, reb: 1, ast: 3, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 6, ftm: 2, fta: 3, composite: 4.03, zScores: { pts: 0.864, reb: -0.745, ast: 0.87, stl: 1.249, blk: -0.504, tpm: 1.756, fgImpact: 0.986, ftImpact: -0.42, to: -0.023 } },
          { name: "Bo Ogden", min: 16, pts: 8, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 2, fta: 3, composite: -0.25, zScores: { pts: 0.102, reb: -0.369, ast: -0.848, stl: 0.255, blk: -0.504, tpm: 0.946, fgImpact: -0.302, ftImpact: -0.42, to: 0.887 } },
          { name: "Amari Evans", min: 20, pts: 5, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 3, fta: 4, composite: -4.09, zScores: { pts: -0.355, reb: -0.745, ast: -0.275, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.747, ftImpact: -0.027, to: -0.023 } },
          { name: "Anthon McDermott", min: 2, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.12, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } }
        ]
      }
    },
      {
      id: "401906849",
      line: "Radford Highlanders 47 @ Tennessee Volunteers 70 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "RAD", name: "Radford Highlanders", score: 47,
        players: [

        ]
      },
      home: {
        abbr: "Tenn", name: "Tennessee Volunteers", score: 70,
        players: [
          { name: "Braedan Lue", min: 16, pts: 3, reb: 4, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -1.88, zScores: { pts: -0.66, reb: 0.384, ast: -0.848, stl: 0.255, blk: 0.848, tpm: -0.675, fgImpact: -0.35, ftImpact: -0.813, to: -0.023 } },
          { name: "DeWayne Brown II", min: 27, pts: 4, reb: 12, ast: 3, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: 2.7, zScores: { pts: -0.507, reb: 3.395, ast: 0.87, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: -0.35, ftImpact: 0.785, to: -0.933 } },
          { name: "Juke Harris", min: 24, pts: 6, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 9, ftm: 3, fta: 4, composite: -3.55, zScores: { pts: -0.203, reb: -0.745, ast: 0.298, stl: 0.255, blk: -0.504, tpm: 0.135, fgImpact: -2.735, ftImpact: -0.027, to: -0.023 } },
          { name: "Terrence Hill Jr.", min: 28, pts: 18, reb: 3, ast: 3, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 9, ftm: 4, fta: 4, composite: 6.31, zScores: { pts: 1.626, reb: 0.008, ast: 0.87, stl: 1.249, blk: -0.504, tpm: 0.946, fgImpact: 1.479, ftImpact: 1.571, to: -0.933 } },
          { name: "Tyler Lundblade", min: 20, pts: 3, reb: 4, ast: 1, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -5.56, zScores: { pts: -0.66, reb: 0.384, ast: -0.275, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: -1.145, ftImpact: 0, to: -2.753 } },
          { name: "Chris Washington Jr.", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.32, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: 2.199, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: -0.023 } },
          { name: "Christian Fermin", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.16, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: -0.397, ftImpact: 0, to: 0.887 } },
          { name: "Miles Rubin", min: 25, pts: 8, reb: 7, ast: 0, stl: 1, blk: 3, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 1, composite: 4.96, zScores: { pts: 0.102, reb: 1.513, ast: -0.848, stl: 0.255, blk: 3.551, tpm: -0.675, fgImpact: 1.383, ftImpact: -1.205, to: 0.887 } },
          { name: "Jalen Haralson", min: 17, pts: 11, reb: 6, ast: 0, stl: 3, blk: 1, to: 3, tpm: 0, fgm: 4, fga: 6, ftm: 3, fta: 4, composite: 2.38, zScores: { pts: 0.559, reb: 1.137, ast: -0.848, stl: 2.242, blk: 0.848, tpm: -0.675, fgImpact: 0.986, ftImpact: -0.027, to: -1.843 } },
          { name: "Troy Henderson", min: 17, pts: 2, reb: 0, ast: 6, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 0.35, zScores: { pts: -0.812, reb: -1.121, ast: 2.589, stl: 1.249, blk: -0.504, tpm: -0.675, fgImpact: -0.35, ftImpact: 0, to: -0.023 } },
          { name: "Campbell Duncan", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -1.117, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Manny Green", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.37, zScores: { pts: -0.812, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0.445, ftImpact: 0, to: 0.887 } },
          { name: "Dai Dai Ames", min: 18, pts: 13, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 5, fta: 6, composite: 0.24, zScores: { pts: 0.864, reb: -0.745, ast: -0.275, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: 0.588, ftImpact: 0.758, to: -0.023 } }
        ]
      }
    },
      {
      id: "401921720",
      line: "North Florida Ospreys 51 @ Miami Hurricanes 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UNF", name: "North Florida Ospreys", score: 51,
        players: [

        ]
      },
      home: {
        abbr: "Mia-FL", name: "Miami Hurricanes", score: 89,
        players: [
          { name: "Caleb Gaskins", min: 23, pts: 12, reb: 5, ast: 2, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: -0.53, zScores: { pts: 0.712, reb: 0.761, ast: 0.298, stl: -0.738, blk: -0.504, tpm: 0.946, fgImpact: -0.159, ftImpact: 0, to: -1.843 } },
          { name: "Malik Reneau", min: 18, pts: 16, reb: 5, ast: 1, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 10, ftm: 1, fta: 3, composite: 2.57, zScores: { pts: 1.321, reb: 0.761, ast: -0.275, stl: 1.249, blk: -0.504, tpm: 0.135, fgImpact: 1.924, ftImpact: -2.018, to: -0.023 } },
          { name: "Shelton Henderson", min: 26, pts: 14, reb: 7, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 14, ftm: 0, fta: 0, composite: 3.36, zScores: { pts: 1.017, reb: 1.513, ast: 1.443, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: 0.334, ftImpact: 0, to: -0.023 } },
          { name: "Somto Cyril", min: 20, pts: 10, reb: 8, ast: 0, stl: 2, blk: 4, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 6, fta: 8, composite: 7.85, zScores: { pts: 0.407, reb: 1.89, ast: -0.848, stl: 1.249, blk: 4.902, tpm: -0.675, fgImpact: 0.095, ftImpact: -0.054, to: 0.887 } },
          { name: "Acaden Lewis", min: 33, pts: 2, reb: 5, ast: 8, stl: 2, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 8, ftm: 0, fta: 0, composite: 0.92, zScores: { pts: -0.812, reb: 0.761, ast: 3.735, stl: 1.249, blk: 0.848, tpm: -0.675, fgImpact: -2.337, ftImpact: 0, to: -1.843 } },
          { name: "DeSean Goode", min: 7, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.01, zScores: { pts: -1.117, reb: 0.384, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.397, ftImpact: 0, to: 0.887 } },
          { name: "Robert Miller III", min: 17, pts: 10, reb: 8, ast: 1, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 5, fga: 7, ftm: 0, fta: 1, composite: 4.91, zScores: { pts: 0.407, reb: 1.89, ast: -0.275, stl: 0.255, blk: 2.199, tpm: -0.675, fgImpact: 1.431, ftImpact: -1.205, to: 0.887 } },
          { name: "Egor Ryzhov", min: 5, pts: 7, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: -2.21, zScores: { pts: -0.05, reb: 0.384, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0.143, ftImpact: -0.813, to: 0.887 } },
          { name: "Nick Dorn", min: 19, pts: 8, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -2.11, zScores: { pts: 0.102, reb: 0.008, ast: -0.848, stl: -0.738, blk: -0.504, tpm: 0.946, fgImpact: -1.049, ftImpact: 0, to: -0.023 } },
          { name: "Dante Allen", min: 18, pts: 8, reb: 5, ast: 2, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -0.82, zScores: { pts: 0.102, reb: 0.761, ast: 0.298, stl: 1.249, blk: -0.504, tpm: -0.675, fgImpact: -0.207, ftImpact: 0, to: -1.843 } },
          { name: "Brent Bland", min: 14, pts: 2, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -0.812, reb: -0.745, ast: -0.848, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: -0.747, ftImpact: 0, to: -0.023 } }
        ]
      }
    },
      {
      id: "401906759",
      line: "Oakland Golden Grizzlies 68 @ Alabama Crimson Tide 109 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OAK", name: "Oakland Golden Grizzlies", score: 68,
        players: [

        ]
      },
      home: {
        abbr: "Bama", name: "Alabama Crimson Tide", score: 109,
        players: [
          { name: "London Jemison", min: 17, pts: 20, reb: 3, ast: 3, stl: 1, blk: 1, to: 0, tpm: 6, fgm: 7, fga: 7, ftm: 0, fta: 0, composite: 12.1, zScores: { pts: 1.931, reb: 0.008, ast: 0.87, stl: 0.255, blk: 0.848, tpm: 4.188, fgImpact: 3.116, ftImpact: 0, to: 0.887 } },
          { name: "Drew Fielder", min: 16, pts: 8, reb: 4, ast: 3, stl: 1, blk: 1, to: 3, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 1.31, zScores: { pts: 0.102, reb: 0.384, ast: 0.87, stl: 0.255, blk: 0.848, tpm: 0.946, fgImpact: -0.254, ftImpact: 0, to: -1.843 } },
          { name: "Brandon Garrison", min: 22, pts: 9, reb: 1, ast: 1, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 4, fga: 4, ftm: 1, fta: 2, composite: 2.87, zScores: { pts: 0.255, reb: -0.745, ast: -0.275, stl: 0.255, blk: 2.199, tpm: -0.675, fgImpact: 1.781, ftImpact: -0.813, to: 0.887 } },
          { name: "Amari Allen", min: 19, pts: 14, reb: 2, ast: 6, stl: 2, blk: 1, to: 0, tpm: 3, fgm: 4, fga: 5, ftm: 3, fta: 3, composite: 10.54, zScores: { pts: 1.017, reb: -0.369, ast: 2.589, stl: 1.249, blk: 0.848, tpm: 1.756, fgImpact: 1.383, ftImpact: 1.178, to: 0.887 } },
          { name: "Aden Holloway", min: 21, pts: 12, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 2.13, zScores: { pts: 0.712, reb: -0.369, ast: 0.298, stl: -0.738, blk: -0.504, tpm: 2.567, fgImpact: 0.191, ftImpact: 0, to: -0.023 } },
          { name: "Tarris Bouie", min: 17, pts: 10, reb: 2, ast: 2, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: 0.59, zScores: { pts: 0.407, reb: -0.369, ast: 0.298, stl: -0.738, blk: 0.848, tpm: 0.946, fgImpact: -0.652, ftImpact: 0.785, to: -0.933 } },
          { name: "Keitenn Bristow", min: 14, pts: 9, reb: 3, ast: 1, stl: 1, blk: 3, to: 1, tpm: 0, fgm: 4, fga: 4, ftm: 1, fta: 1, composite: 5.27, zScores: { pts: 0.255, reb: 0.008, ast: -0.275, stl: 0.255, blk: 3.551, tpm: -0.675, fgImpact: 1.781, ftImpact: 0.393, to: -0.023 } },
          { name: "Jaxon Richardson", min: 18, pts: 5, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.02, zScores: { pts: -0.355, reb: -0.745, ast: -0.275, stl: 0.255, blk: -0.504, tpm: 0.135, fgImpact: 0.493, ftImpact: 0, to: -0.023 } },
          { name: "TJ St. Louis", min: 2, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.17, zScores: { pts: -1.117, reb: -0.745, ast: -0.275, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Collins Onyejiaka", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.77, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Anderson Diaz", min: 17, pts: 9, reb: 0, ast: 4, stl: 3, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 4.08, zScores: { pts: 0.255, reb: -1.121, ast: 1.443, stl: 2.242, blk: -0.504, tpm: 1.756, fgImpact: 0.938, ftImpact: 0, to: -0.933 } },
          { name: "Qayden Samuels", min: 16, pts: 8, reb: 1, ast: 3, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.45, zScores: { pts: 0.102, reb: -0.745, ast: 0.87, stl: -0.738, blk: -0.504, tpm: 0.946, fgImpact: 0.541, ftImpact: 0, to: -0.023 } },
          { name: "Cole Cloer", min: 16, pts: 5, reb: 6, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -0.57, zScores: { pts: -0.355, reb: 1.137, ast: 0.87, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: -1.097, ftImpact: 0, to: -0.023 } },
          { name: "Preston Murphy Jr.", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } }
        ]
      }
    },
      {
      id: "401916315",
      line: "Marshall Thundering Herd 74 @ Ohio State Buckeyes 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MRSH", name: "Marshall Thundering Herd", score: 74,
        players: [

        ]
      },
      home: {
        abbr: "OhSt", name: "Ohio State Buckeyes", score: 84,
        players: [
          { name: "Andrija Jelavic", min: 26, pts: 11, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 10, ftm: 3, fta: 3, composite: -0.7, zScores: { pts: 0.559, reb: 0.384, ast: -0.275, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.604, ftImpact: 1.178, to: -0.023 } },
          { name: "Anthony Thompson", min: 20, pts: 11, reb: 6, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 7, ftm: 3, fta: 5, composite: 0.95, zScores: { pts: 0.559, reb: 1.137, ast: -0.848, stl: 0.255, blk: -0.504, tpm: 0.946, fgImpact: -0.254, ftImpact: -1.232, to: 0.887 } },
          { name: "Amare Bynum", min: 32, pts: 10, reb: 6, ast: 3, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 9, ftm: 2, fta: 3, composite: 0.01, zScores: { pts: 0.407, reb: 1.137, ast: 0.87, stl: 1.249, blk: -0.504, tpm: -0.675, fgImpact: -0.207, ftImpact: -0.42, to: -1.843 } },
          { name: "Justin Pippen", min: 23, pts: 9, reb: 3, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 5, fta: 8, composite: -2.46, zScores: { pts: 0.255, reb: 0.008, ast: 0.298, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: 0.493, ftImpact: -1.652, to: -0.933 } },
          { name: "John Mobley Jr.", min: 35, pts: 19, reb: 1, ast: 4, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 6, fga: 14, ftm: 4, fta: 5, composite: 2.91, zScores: { pts: 1.779, reb: -0.745, ast: 1.443, stl: 0.255, blk: -0.504, tpm: 1.756, fgImpact: -0.509, ftImpact: 0.366, to: -0.933 } },
          { name: "Lee Aaliya", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Josh Ojianwuna", min: 13, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 3, fta: 4, composite: -4.24, zScores: { pts: -0.66, reb: -0.369, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.397, ftImpact: -0.027, to: -0.023 } },
          { name: "Ivan Njegovan", min: 4, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.78, zScores: { pts: -0.965, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: -0.813, to: 0.887 } },
          { name: "Jimmie Williams", min: 21, pts: 16, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 6, fga: 10, ftm: 3, fta: 3, composite: 4.84, zScores: { pts: 1.321, reb: 0.761, ast: -0.275, stl: 0.255, blk: -0.504, tpm: 0.135, fgImpact: 1.081, ftImpact: 1.178, to: 0.887 } },
          { name: "LJ Smith", min: 14, pts: 0, reb: 2, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -3.37, zScores: { pts: -1.117, reb: -0.369, ast: 0.298, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: -1.59, ftImpact: 0, to: -0.023 } },
          { name: "Curtis Givens III", min: 11, pts: 4, reb: 1, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -3.51, zScores: { pts: -0.507, reb: -0.745, ast: -0.848, stl: 0.255, blk: -0.504, tpm: 0.135, fgImpact: 0.445, ftImpact: -0.813, to: -0.933 } }
        ]
      }
    },
      {
      id: "401921180",
      line: "Howard Bison 65 @ Pennsylvania Quakers 78 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "HOW", name: "Howard Bison", score: 65,
        players: [

        ]
      },
      home: {
        abbr: "Penn", name: "Pennsylvania Quakers", score: 78,
        players: [
          { name: "Augustus Gerhart", min: 13, pts: 2, reb: 0, ast: 2, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.43, zScores: { pts: -0.812, reb: -1.121, ast: 0.298, stl: -0.738, blk: 2.199, tpm: -0.675, fgImpact: 0.445, ftImpact: 0, to: -0.023 } },
          { name: "TJ Power", min: 37, pts: 23, reb: 4, ast: 3, stl: 1, blk: 0, to: 4, tpm: 6, fgm: 8, fga: 19, ftm: 1, fta: 2, composite: 3.21, zScores: { pts: 2.388, reb: 0.384, ast: 0.87, stl: 0.255, blk: -0.504, tpm: 4.188, fgImpact: -0.811, ftImpact: -0.813, to: -2.753 } },
          { name: "AJ Levine", min: 25, pts: 8, reb: 4, ast: 5, stl: 2, blk: 0, to: 5, tpm: 0, fgm: 2, fga: 6, ftm: 4, fta: 4, composite: -0.22, zScores: { pts: 0.102, reb: 0.384, ast: 2.016, stl: 1.249, blk: -0.504, tpm: -0.675, fgImpact: -0.7, ftImpact: 1.571, to: -3.663 } },
          { name: "Sir Mohammed", min: 21, pts: 17, reb: 5, ast: 1, stl: 3, blk: 1, to: 1, tpm: 1, fgm: 4, fga: 6, ftm: 8, fta: 11, composite: 5.67, zScores: { pts: 1.474, reb: 0.761, ast: -0.275, stl: 2.242, blk: 0.848, tpm: 0.135, fgImpact: 0.986, ftImpact: -0.474, to: -0.023 } },
          { name: "Michael Zanoni", min: 39, pts: 12, reb: 2, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 15, ftm: 0, fta: 1, composite: -3.12, zScores: { pts: 0.712, reb: -0.369, ast: -0.275, stl: 0.255, blk: -0.504, tpm: 0.946, fgImpact: -1.749, ftImpact: -1.205, to: -0.933 } },
          { name: "Lucas Lueth", min: 30, pts: 7, reb: 2, ast: 0, stl: 1, blk: 4, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 4.54, zScores: { pts: -0.05, reb: -0.369, ast: -0.848, stl: 0.255, blk: 4.902, tpm: 0.135, fgImpact: 0.541, ftImpact: 0, to: -0.023 } },
          { name: "Dalton Scantlebury", min: 14, pts: 3, reb: 8, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: 1.11, zScores: { pts: -0.66, reb: 1.89, ast: -0.275, stl: 0.255, blk: 0.848, tpm: -0.675, fgImpact: -0.35, ftImpact: -0.813, to: 0.887 } },
          { name: "Ethan Lin", min: 5, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -5.19, zScores: { pts: -0.812, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0.445, ftImpact: 0, to: -0.933 } },
          { name: "Isaiah Carroll", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.03, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: -0.023 } },
          { name: "Jay Jones", min: 14, pts: 4, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 3, composite: -1.12, zScores: { pts: -0.507, reb: 0.008, ast: 0.298, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: 0.445, ftImpact: -0.42, to: -0.023 } }
        ]
      }
    },
      {
      id: "401909718",
      line: "Syracuse Orange 80 @ Indiana Hoosiers 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Syr", name: "Syracuse Orange", score: 80,
        players: [
          { name: "Mark Morano", min: 8, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.05, zScores: { pts: -0.355, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: 0.493, ftImpact: 0, to: 0.887 } },
          { name: "Sadiq White Jr.", min: 29, pts: 13, reb: 3, ast: 0, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 6, fga: 8, ftm: 0, fta: 0, composite: 1.29, zScores: { pts: 0.864, reb: 0.008, ast: -0.848, stl: 0.255, blk: 0.848, tpm: 0.135, fgImpact: 1.876, ftImpact: 0, to: -1.843 } },
          { name: "Luke Wilson", min: 23, pts: 11, reb: 4, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 5, ftm: 3, fta: 4, composite: -0.41, zScores: { pts: 0.559, reb: 0.384, ast: -0.848, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: 1.383, ftImpact: -0.027, to: -0.933 } },
          { name: "Gavin Doty", min: 28, pts: 5, reb: 7, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: -3.3, zScores: { pts: -0.355, reb: 1.513, ast: 0.298, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -1.097, ftImpact: -0.813, to: -0.933 } },
          { name: "Garwey Dual", min: 32, pts: 6, reb: 3, ast: 1, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: 1.77, zScores: { pts: -0.203, reb: 0.008, ast: -0.275, stl: 0.255, blk: 2.199, tpm: -0.675, fgImpact: -0.302, ftImpact: 0.785, to: -0.023 } },
          { name: "Amarri Monroe", min: 12, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.66, zScores: { pts: -0.66, reb: -0.369, ast: -0.848, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: -0.747, ftImpact: 0, to: -0.933 } },
          { name: "Abdramane Siby", min: 16, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 1, composite: -3.82, zScores: { pts: -0.812, reb: -0.369, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0.445, ftImpact: -1.205, to: 0.887 } },
          { name: "Ryan Moesch", min: 26, pts: 19, reb: 0, ast: 6, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 13, ftm: 4, fta: 5, composite: 5.98, zScores: { pts: 1.779, reb: -1.121, ast: 2.589, stl: 1.249, blk: -0.504, tpm: 1.756, fgImpact: -0.111, ftImpact: 0.366, to: -0.023 } },
          { name: "Kiyan Anthony", min: 26, pts: 16, reb: 0, ast: 3, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 4, fga: 9, ftm: 6, fta: 6, composite: 4.25, zScores: { pts: 1.321, reb: -1.121, ast: 0.87, stl: -0.738, blk: 0.848, tpm: 0.946, fgImpact: -0.207, ftImpact: 2.356, to: -0.023 } }
        ]
      },
      home: {
        abbr: "Ind", name: "Indiana Hoosiers", score: 83,
        players: [
          { name: "Aiden Sherrell", min: 18, pts: 6, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 0.68, zScores: { pts: -0.203, reb: -0.745, ast: -0.848, stl: 0.255, blk: -0.504, tpm: 0.946, fgImpact: 0.89, ftImpact: 0, to: 0.887 } },
          { name: "Samet Yigitoglu", min: 26, pts: 8, reb: 10, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 3, composite: 2.39, zScores: { pts: 0.102, reb: 2.642, ast: 0.87, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: 0.143, ftImpact: -0.42, to: -0.023 } },
          { name: "Markus Burton", min: 32, pts: 20, reb: 3, ast: 4, stl: 3, blk: 0, to: 3, tpm: 3, fgm: 7, fga: 12, ftm: 3, fta: 3, composite: 7.34, zScores: { pts: 1.931, reb: 0.008, ast: 1.443, stl: 2.242, blk: -0.504, tpm: 1.756, fgImpact: 1.129, ftImpact: 1.178, to: -1.843 } },
          { name: "Jaeden Mustaf", min: 33, pts: 18, reb: 7, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 11, ftm: 2, fta: 3, composite: 3.65, zScores: { pts: 1.626, reb: 1.513, ast: -0.275, stl: -0.738, blk: -0.504, tpm: 0.946, fgImpact: 1.526, ftImpact: -0.42, to: -0.023 } },
          { name: "Darren Harris", min: 31, pts: 20, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 12, ftm: 10, fta: 10, composite: 6.01, zScores: { pts: 1.931, reb: 0.008, ast: 0.87, stl: 0.255, blk: -0.504, tpm: 0.946, fgImpact: -1.399, ftImpact: 3.927, to: -0.023 } },
          { name: "Trevor Manhertz", min: 13, pts: 0, reb: 2, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -2.43, zScores: { pts: -1.117, reb: -0.369, ast: -0.275, stl: 0.255, blk: 0.848, tpm: -0.675, fgImpact: -1.987, ftImpact: 0, to: 0.887 } },
          { name: "Sam Alexis", min: 13, pts: 0, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.37, zScores: { pts: -1.117, reb: 0.761, ast: -0.275, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.795, ftImpact: 0, to: -0.023 } },
          { name: "Trent Sisley", min: 9, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.57, zScores: { pts: -1.117, reb: -0.745, ast: -0.275, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.397, ftImpact: 0, to: 0.887 } },
          { name: "Bryce Lindsay", min: 25, pts: 11, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 11, ftm: 5, fta: 7, composite: -5.6, zScores: { pts: 0.559, reb: -0.745, ast: -0.275, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -1.844, ftImpact: -0.447, to: -0.933 } }
        ]
      }
    },
      {
      id: "401926181",
      line: "UNC Greensboro Spartans 72 @ UIC Flames 82 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UNCG", name: "UNC Greensboro Spartans", score: 72,
        players: [

        ]
      },
      home: {
        abbr: "UIC", name: "UIC Flames", score: 82,
        players: [
          { name: "Jayce Nathaniel", min: 26, pts: 7, reb: 0, ast: 1, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -0.45, zScores: { pts: -0.05, reb: -1.121, ast: -0.275, stl: 1.249, blk: -0.504, tpm: 0.135, fgImpact: 0.143, ftImpact: 0, to: -0.023 } },
          { name: "Rashund Washington Jr.", min: 29, pts: 17, reb: 6, ast: 3, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 5, fga: 11, ftm: 6, fta: 8, composite: 5.39, zScores: { pts: 1.474, reb: 1.137, ast: 0.87, stl: 0.255, blk: 0.848, tpm: 0.135, fgImpact: -0.159, ftImpact: -0.054, to: 0.887 } },
          { name: "Ahmad Henderson II", min: 22, pts: 8, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 10, ftm: 3, fta: 4, composite: -2.46, zScores: { pts: 0.102, reb: -0.745, ast: -0.275, stl: 0.255, blk: -0.504, tpm: 0.135, fgImpact: -2.289, ftImpact: -0.027, to: 0.887 } },
          { name: "Mekhi Lowery", min: 31, pts: 7, reb: 9, ast: 7, stl: 1, blk: 3, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: 9.12, zScores: { pts: -0.05, reb: 2.266, ast: 3.162, stl: 0.255, blk: 3.551, tpm: -0.675, fgImpact: 0.541, ftImpact: -0.813, to: 0.887 } },
          { name: "Gabe Cupps", min: 28, pts: 14, reb: 3, ast: 4, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 7, ftm: 2, fta: 2, composite: 6.35, zScores: { pts: 1.017, reb: 0.008, ast: 1.443, stl: 1.249, blk: -0.504, tpm: 0.946, fgImpact: 1.431, ftImpact: 0.785, to: -0.023 } },
          { name: "Dikembe Shaw", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -4.33, zScores: { pts: -0.812, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.397, ftImpact: 0.785, to: -0.023 } },
          { name: "Nano Barrantes", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -1.117, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Lucas Scroggins", min: 16, pts: 11, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 6, ftm: 1, fta: 2, composite: -0.3, zScores: { pts: 0.559, reb: 0.008, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 1.828, ftImpact: -0.813, to: 0.887 } },
          { name: "Elijah Garrett", min: 13, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -3.45, zScores: { pts: -0.812, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.795, ftImpact: 0.785, to: 0.887 } },
          { name: "Benny Gealer", min: 30, pts: 14, reb: 1, ast: 3, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 11, ftm: 6, fta: 6, composite: 3.32, zScores: { pts: 1.017, reb: -0.745, ast: 0.87, stl: 1.249, blk: -0.504, tpm: 0.946, fgImpact: -1.844, ftImpact: 2.356, to: -0.023 } }
        ]
      }
    },
      {
      id: "401925681",
      line: "Eastern Illinois Panthers 70 @ Notre Dame Fighting Irish 94 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "EIU", name: "Eastern Illinois Panthers", score: 70,
        players: [

        ]
      },
      home: {
        abbr: "ND", name: "Notre Dame Fighting Irish", score: 94,
        players: [
          { name: "Brady Koehler", min: 26, pts: 14, reb: 6, ast: 1, stl: 1, blk: 2, to: 2, tpm: 2, fgm: 3, fga: 5, ftm: 6, fta: 8, composite: 4.83, zScores: { pts: 1.017, reb: 1.137, ast: -0.275, stl: 0.255, blk: 2.199, tpm: 0.946, fgImpact: 0.541, ftImpact: -0.054, to: -0.933 } },
          { name: "Logan Duncomb", min: 21, pts: 20, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 9, fga: 9, ftm: 2, fta: 5, composite: 0.94, zScores: { pts: 1.931, reb: 0.384, ast: 0.298, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 4.006, ftImpact: -2.83, to: -0.933 } },
          { name: "Ethan Roberts", min: 25, pts: 14, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 9, ftm: 1, fta: 1, composite: 2.62, zScores: { pts: 1.017, reb: -1.121, ast: 0.298, stl: -0.738, blk: -0.504, tpm: 1.756, fgImpact: 0.636, ftImpact: 0.393, to: 0.887 } },
          { name: "Braeden Smith", min: 27, pts: 17, reb: 5, ast: 8, stl: 5, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 8, ftm: 4, fta: 4, composite: 12.34, zScores: { pts: 1.474, reb: 0.761, ast: 3.735, stl: 4.228, blk: -0.504, tpm: 0.135, fgImpact: 1.876, ftImpact: 1.571, to: -0.933 } },
          { name: "Braeden Shrewsberry", min: 28, pts: 12, reb: 3, ast: 5, stl: 3, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 6.41, zScores: { pts: 0.712, reb: 0.008, ast: 2.016, stl: 2.242, blk: -0.504, tpm: 2.567, fgImpact: -0.604, ftImpact: 0, to: -0.023 } },
          { name: "Bryce Ruglass Dortch", min: 16, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 2, composite: -5.2, zScores: { pts: -1.117, reb: -0.745, ast: -0.848, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: -0.397, ftImpact: -2.411, to: 0.887 } },
          { name: "Yoro Diallo", min: 6, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.52, zScores: { pts: -0.812, reb: -0.369, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0.445, ftImpact: 0, to: -0.023 } },
          { name: "Tommy Ahneman", min: 7, pts: 2, reb: 1, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.46, zScores: { pts: -0.812, reb: -0.745, ast: -0.275, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: 0.048, ftImpact: 0, to: 0.887 } },
          { name: "Nick Shrewsberry", min: 4, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.96, zScores: { pts: -1.117, reb: -0.745, ast: -0.275, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.795, ftImpact: 0, to: 0.887 } },
          { name: "Devin Brown", min: 6, pts: 2, reb: 0, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -1.44, zScores: { pts: -0.812, reb: -1.121, ast: -0.848, stl: 1.249, blk: -0.504, tpm: -0.675, fgImpact: -0.397, ftImpact: 0.785, to: 0.887 } },
          { name: "Jonathan Sanderson", min: 15, pts: 2, reb: 0, ast: 0, stl: 4, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -2.07, zScores: { pts: -0.812, reb: -1.121, ast: -0.848, stl: 3.235, blk: -0.504, tpm: -0.675, fgImpact: -1.192, ftImpact: 0.785, to: -0.933 } },
          { name: "Logan Imes", min: 19, pts: 9, reb: 3, ast: 0, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 0.74, zScores: { pts: 0.255, reb: 0.008, ast: -0.848, stl: 1.249, blk: -0.504, tpm: 0.135, fgImpact: 1.383, ftImpact: 0, to: -0.933 } }
        ]
      }
    },
      {
      id: "401919846",
      line: "Stonehill Skyhawks 55 @ Columbia Lions 75 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "STO", name: "Stonehill Skyhawks", score: 55,
        players: [

        ]
      },
      home: {
        abbr: "Colum", name: "Columbia Lions", score: 75,
        players: [
          { name: "Connor Igoe", min: 30, pts: 9, reb: 12, ast: 3, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 2, fta: 4, composite: 4.77, zScores: { pts: 0.255, reb: 3.395, ast: 0.87, stl: 0.255, blk: 0.848, tpm: 0.135, fgImpact: -0.254, ftImpact: -1.625, to: 0.887 } },
          { name: "Mason Ritter", min: 31, pts: 1, reb: 9, ast: 4, stl: 0, blk: 2, to: 3, tpm: 0, fgm: 0, fga: 6, ftm: 1, fta: 3, composite: -2.71, zScores: { pts: -0.965, reb: 2.266, ast: 1.443, stl: -0.738, blk: 2.199, tpm: -0.675, fgImpact: -2.385, ftImpact: -2.018, to: -1.843 } },
          { name: "Michael Madueme", min: 20, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.25, zScores: { pts: -0.66, reb: -0.745, ast: -0.275, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: -0.35, ftImpact: 0, to: 0.887 } },
          { name: "Josh Pratt", min: 20, pts: 3, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -3.78, zScores: { pts: -0.66, reb: -0.745, ast: 0.298, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: -1.542, ftImpact: 0, to: -0.023 } },
          { name: "Gerard O'Keefe", min: 26, pts: 22, reb: 2, ast: 0, stl: 0, blk: 1, to: 1, tpm: 4, fgm: 8, fga: 14, ftm: 2, fta: 2, composite: 5.63, zScores: { pts: 2.236, reb: -0.369, ast: -0.848, stl: -0.738, blk: 0.848, tpm: 2.567, fgImpact: 1.176, ftImpact: 0.785, to: -0.023 } },
          { name: "Douglas Langford", min: 17, pts: 3, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -3.28, zScores: { pts: -0.66, reb: 0.761, ast: -0.275, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.35, ftImpact: -0.813, to: -0.023 } },
          { name: "Richard Nweke", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Trae Nunn", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Gabe Hornberger", min: 17, pts: 8, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -0.8, zScores: { pts: 0.102, reb: 0.008, ast: -0.848, stl: -0.738, blk: -0.504, tpm: 0.946, fgImpact: -0.652, ftImpact: 0, to: 0.887 } },
          { name: "Hampton Sanders", min: 22, pts: 14, reb: 3, ast: 4, stl: 3, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 14, ftm: 0, fta: 0, composite: 5.4, zScores: { pts: 1.017, reb: 0.008, ast: 1.443, stl: 2.242, blk: -0.504, tpm: 2.567, fgImpact: -1.351, ftImpact: 0, to: -0.023 } },
          { name: "Josiah Cunningham", min: 12, pts: 12, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 8, ftm: 1, fta: 1, composite: 1.54, zScores: { pts: 0.712, reb: 0.384, ast: -0.848, stl: 0.255, blk: -0.504, tpm: 0.135, fgImpact: 1.033, ftImpact: 0.393, to: -0.023 } }
        ]
      }
    },
      {
      id: "401918074",
      line: "North Dakota Fighting Hawks 77 @ Clemson Tigers 92 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UND", name: "North Dakota Fighting Hawks", score: 77,
        players: [

        ]
      },
      home: {
        abbr: "Clem", name: "Clemson Tigers", score: 92,
        players: [
          { name: "Liutauras Lelevicius", min: 32, pts: 21, reb: 8, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 7, ftm: 9, fta: 9, composite: 8.92, zScores: { pts: 2.084, reb: 1.89, ast: 0.298, stl: -0.738, blk: -0.504, tpm: 0.946, fgImpact: 1.431, ftImpact: 3.534, to: -0.023 } },
          { name: "Chase Thompson", min: 29, pts: 21, reb: 5, ast: 0, stl: 1, blk: 1, to: 1, tpm: 3, fgm: 9, fga: 10, ftm: 0, fta: 0, composite: 8.44, zScores: { pts: 2.084, reb: 0.761, ast: -0.848, stl: 0.255, blk: 0.848, tpm: 1.756, fgImpact: 3.609, ftImpact: 0, to: -0.023 } },
          { name: "Dylan Faulkner", min: 30, pts: 12, reb: 6, ast: 8, stl: 1, blk: 2, to: 4, tpm: 0, fgm: 5, fga: 7, ftm: 2, fta: 4, composite: 4.42, zScores: { pts: 0.712, reb: 1.137, ast: 3.735, stl: 0.255, blk: 2.199, tpm: -0.675, fgImpact: 1.431, ftImpact: -1.625, to: -2.753 } },
          { name: "Ace Buckner", min: 36, pts: 13, reb: 3, ast: 6, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 8, ftm: 3, fta: 4, composite: 3.52, zScores: { pts: 0.864, reb: 0.008, ast: 2.589, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: 1.033, ftImpact: -0.027, to: -0.023 } },
          { name: "Cole Certa", min: 31, pts: 7, reb: 2, ast: 4, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: -0.42, zScores: { pts: -0.05, reb: -0.369, ast: 1.443, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: -1.097, ftImpact: 0.785, to: -0.023 } },
          { name: "David Fuchs", min: 12, pts: 9, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 3, ftm: 2, fta: 3, composite: 0.71, zScores: { pts: 0.255, reb: -0.745, ast: -0.848, stl: -0.738, blk: 0.848, tpm: 0.135, fgImpact: 1.335, ftImpact: -0.42, to: 0.887 } },
          { name: "Dallas Thomas", min: 20, pts: 9, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: -0.48, zScores: { pts: 0.255, reb: 0.761, ast: -0.848, stl: -0.738, blk: -0.504, tpm: 0.946, fgImpact: -0.302, ftImpact: -0.027, to: -0.023 } },
          { name: "Harris Reynolds", min: 10, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -6.85, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: -1.843 } }
        ]
      }
    },
      {
      id: "401916305",
      line: "Minnesota Golden Gophers 63 @ Cincinnati Bearcats 61 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Minn", name: "Minnesota Golden Gophers", score: 63,
        players: [
          { name: "Grayson Grove", min: 26, pts: 7, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 1.17, zScores: { pts: -0.05, reb: 0.008, ast: 0.298, stl: 0.255, blk: -0.504, tpm: 0.135, fgImpact: 0.143, ftImpact: 0, to: 0.887 } },
          { name: "Bobby Durkin", min: 37, pts: 5, reb: 5, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -0.04, zScores: { pts: -0.355, reb: 0.761, ast: 0.87, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: -1.097, ftImpact: 0, to: 0.887 } },
          { name: "Jaylen Crocker-Johnson", min: 24, pts: 11, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 0.12, zScores: { pts: 0.559, reb: 0.384, ast: -0.275, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: -0.207, ftImpact: 0.785, to: -0.023 } },
          { name: "Isaac Asuma", min: 32, pts: 10, reb: 7, ast: 2, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 3, fga: 9, ftm: 2, fta: 5, composite: -4.71, zScores: { pts: 0.407, reb: 1.513, ast: 0.298, stl: -0.738, blk: -0.504, tpm: 0.946, fgImpact: -1.049, ftImpact: -2.83, to: -2.753 } },
          { name: "Kyan Evans", min: 39, pts: 26, reb: 10, ast: 5, stl: 1, blk: 0, to: 7, tpm: 3, fgm: 11, fga: 19, ftm: 1, fta: 2, composite: 4.43, zScores: { pts: 2.846, reb: 2.642, ast: 2.016, stl: 0.255, blk: -0.504, tpm: 1.756, fgImpact: 1.717, ftImpact: -0.813, to: -5.483 } },
          { name: "Malick Kordel", min: 14, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.99, zScores: { pts: -1.117, reb: -0.369, ast: -0.848, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: -0.795, ftImpact: 0, to: -0.933 } },
          { name: "Nolan Groves", min: 22, pts: 2, reb: 4, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.06, zScores: { pts: -0.812, reb: 0.384, ast: -0.848, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: -0.747, ftImpact: 0, to: 0.887 } },
          { name: "Malachi Palmer", min: 6, pts: 2, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -3.1, zScores: { pts: -0.812, reb: -0.369, ast: -0.848, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0.785, to: -0.933 } }
        ]
      },
      home: {
        abbr: "Cin", name: "Cincinnati Bearcats", score: 61,
        players: [
          { name: "David Iweze", min: 12, pts: 0, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.23, zScores: { pts: -1.117, reb: -0.369, ast: -0.275, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: -0.795, ftImpact: 0, to: 0.887 } },
          { name: "Tyler Tejada", min: 21, pts: 10, reb: 3, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: -0.19, zScores: { pts: 0.407, reb: 0.008, ast: 0.87, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0.588, ftImpact: 0.785, to: -0.933 } },
          { name: "Tylen Riley", min: 32, pts: 25, reb: 5, ast: 3, stl: 0, blk: 1, to: 2, tpm: 6, fgm: 8, fga: 17, ftm: 3, fta: 4, composite: 7.65, zScores: { pts: 2.693, reb: 0.761, ast: 0.87, stl: -0.738, blk: 0.848, tpm: 4.188, fgImpact: -0.016, ftImpact: -0.027, to: -0.933 } },
          { name: "MJ Collins Jr.", min: 27, pts: 6, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 9, ftm: 0, fta: 1, composite: -2.57, zScores: { pts: -0.203, reb: -0.369, ast: 0.298, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: -1.049, ftImpact: -1.205, to: 0.887 } },
          { name: "Myles Colvin", min: 22, pts: 5, reb: 5, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 2, fta: 3, composite: -0.48, zScores: { pts: -0.355, reb: 0.761, ast: -0.848, stl: -0.738, blk: 0.848, tpm: 0.135, fgImpact: -0.747, ftImpact: -0.42, to: 0.887 } },
          { name: "Adlan Elamin", min: 14, pts: 6, reb: 0, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -3.53, zScores: { pts: -0.203, reb: -1.121, ast: -0.848, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: 0.143, ftImpact: 0, to: -0.933 } },
          { name: "Amani Lyles", min: 17, pts: 0, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.24, zScores: { pts: -1.117, reb: -0.369, ast: 0.298, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: -1.192, ftImpact: 0, to: -0.933 } },
          { name: "Riley Allenspach", min: 11, pts: 0, reb: 1, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -1.43, zScores: { pts: -1.117, reb: -0.745, ast: -0.848, stl: -0.738, blk: 2.199, tpm: -0.675, fgImpact: -0.397, ftImpact: 0, to: 0.887 } },
          { name: "Trevian Carson", min: 12, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.18, zScores: { pts: -1.117, reb: -0.369, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: -0.933 } },
          { name: "Elijah Perryman", min: 7, pts: 2, reb: 1, ast: 1, stl: 4, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -0.15, zScores: { pts: -0.812, reb: -0.745, ast: -0.275, stl: 3.235, blk: -0.504, tpm: -0.675, fgImpact: -0.35, ftImpact: 0, to: -0.023 } },
          { name: "Eric Mahaffey", min: 23, pts: 7, reb: 2, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: -0.52, zScores: { pts: -0.05, reb: -0.369, ast: -0.275, stl: 1.249, blk: -0.504, tpm: -0.675, fgImpact: 0.938, ftImpact: -0.813, to: -0.023 } },
          { name: "Akai Fleming", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -1.117, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } }
        ]
      }
    },
      {
      id: "401906781",
      line: "Florida Gulf Coast Eagles 72 @ Georgia Bulldogs 80 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "FGCU", name: "Florida Gulf Coast Eagles", score: 72,
        players: [

        ]
      },
      home: {
        abbr: "UGA", name: "Georgia Bulldogs", score: 80,
        players: [
          { name: "Kanon Catchings", min: 25, pts: 13, reb: 7, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 11, ftm: 3, fta: 5, composite: 0.67, zScores: { pts: 0.864, reb: 1.513, ast: -0.275, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: -0.159, ftImpact: -1.232, to: 0.887 } },
          { name: "Kareem Stagg", min: 25, pts: 13, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 8, ftm: 4, fta: 5, composite: -1.26, zScores: { pts: 0.864, reb: -0.369, ast: -0.275, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: 0.191, ftImpact: 0.366, to: -0.933 } },
          { name: "James Scott", min: 30, pts: 8, reb: 7, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 2, fta: 2, composite: 2.43, zScores: { pts: 0.102, reb: 1.513, ast: -0.275, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 1.335, ftImpact: 0.785, to: 0.887 } },
          { name: "Marcus Millender", min: 29, pts: 13, reb: 2, ast: 6, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 10, ftm: 2, fta: 2, composite: 4.88, zScores: { pts: 0.864, reb: -0.369, ast: 2.589, stl: 0.255, blk: -0.504, tpm: 0.135, fgImpact: 0.238, ftImpact: 0.785, to: 0.887 } },
          { name: "Blue Cain", min: 32, pts: 13, reb: 5, ast: 2, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 10, ftm: 2, fta: 3, composite: 2.38, zScores: { pts: 0.864, reb: 0.761, ast: 0.298, stl: 0.255, blk: -0.504, tpm: 1.756, fgImpact: -0.604, ftImpact: -0.42, to: -0.023 } },
          { name: "David Ugonna Ike", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Mading Kuany", min: 9, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.36, zScores: { pts: -1.117, reb: -0.745, ast: -0.275, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -1.192, ftImpact: 0, to: 0.887 } },
          { name: "Andrew Osasuyi", min: 8, pts: 3, reb: 3, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -0.19, zScores: { pts: -0.66, reb: 0.008, ast: -0.848, stl: -0.738, blk: 2.199, tpm: -0.675, fgImpact: 0.445, ftImpact: -0.813, to: 0.887 } },
          { name: "Brady Dunlap", min: 12, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -2.7, zScores: { pts: -0.203, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: 0.946, fgImpact: -1.494, ftImpact: 0, to: 0.887 } },
          { name: "Donovan Williams Jr.", min: 13, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.68, zScores: { pts: -0.355, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: 0.493, ftImpact: 0, to: 0.887 } },
          { name: "Freddie Dilione V", min: 14, pts: 6, reb: 2, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -3.31, zScores: { pts: -0.203, reb: -0.369, ast: -0.848, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: 0.095, ftImpact: 0.785, to: -1.843 } }
        ]
      }
    },
      {
      id: "401919016",
      line: "Florida A&M Rattlers 64 @ UAB Blazers 92 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "FAMU", name: "Florida A&M Rattlers", score: 64,
        players: [

        ]
      },
      home: {
        abbr: "UAB", name: "UAB Blazers", score: 92,
        players: [
          { name: "Matt Mbole", min: 12, pts: 0, reb: 7, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -1.7, zScores: { pts: -1.117, reb: 1.513, ast: -0.275, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.795, ftImpact: 0, to: 0.887 } },
          { name: "Jeremy Elyzee", min: 26, pts: 9, reb: 7, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 9, ftm: 2, fta: 2, composite: 1.01, zScores: { pts: 0.255, reb: 1.513, ast: -0.275, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: -1.049, ftImpact: 0.785, to: 0.887 } },
          { name: "Salim London", min: 23, pts: 12, reb: 6, ast: 6, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 7, ftm: 2, fta: 3, composite: 5.36, zScores: { pts: 0.712, reb: 1.137, ast: 2.589, stl: 1.249, blk: -0.504, tpm: 0.946, fgImpact: 0.588, ftImpact: -0.42, to: -0.933 } },
          { name: "Justyn Fernandez", min: 23, pts: 20, reb: 3, ast: 0, stl: 2, blk: 1, to: 1, tpm: 2, fgm: 6, fga: 10, ftm: 6, fta: 7, composite: 6.34, zScores: { pts: 1.931, reb: 0.008, ast: -0.848, stl: 1.249, blk: 0.848, tpm: 0.946, fgImpact: 1.081, ftImpact: 1.151, to: -0.023 } },
          { name: "Deuce Jones", min: 26, pts: 20, reb: 3, ast: 4, stl: 2, blk: 0, to: 4, tpm: 2, fgm: 5, fga: 12, ftm: 8, fta: 9, composite: 3.7, zScores: { pts: 1.931, reb: 0.008, ast: 1.443, stl: 1.249, blk: -0.504, tpm: 0.946, fgImpact: -0.556, ftImpact: 1.936, to: -2.753 } },
          { name: "Aleks Alston", min: 19, pts: 7, reb: 8, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 1.17, zScores: { pts: -0.05, reb: 1.89, ast: -0.275, stl: 0.255, blk: -0.504, tpm: 0.135, fgImpact: -0.254, ftImpact: 0, to: -0.023 } },
          { name: "Antallah Sandlin-El", min: 13, pts: 7, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -1.36, zScores: { pts: -0.05, reb: 0.008, ast: -0.848, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: -0.254, ftImpact: 0, to: 0.887 } },
          { name: "Kaleb Davis", min: 10, pts: 2, reb: 3, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: 0.07, zScores: { pts: -0.812, reb: 0.008, ast: -0.848, stl: -0.738, blk: 2.199, tpm: -0.675, fgImpact: 0.048, ftImpact: 0, to: 0.887 } },
          { name: "Tim Holliday", min: 7, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -0.69, zScores: { pts: -0.203, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: 0.946, fgImpact: 0.89, ftImpact: 0, to: 0.887 } },
          { name: "Elijah Duval", min: 17, pts: 4, reb: 2, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -1.74, zScores: { pts: -0.507, reb: -0.369, ast: 0.87, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.7, ftImpact: 0, to: 0.887 } },
          { name: "Korie Corbett", min: 7, pts: 0, reb: 0, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.38, zScores: { pts: -1.117, reb: -1.121, ast: -0.275, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: -1.192, ftImpact: 0, to: 0.887 } },
          { name: "T.J. Caldwell", min: 17, pts: 5, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -1.01, zScores: { pts: -0.355, reb: 0.761, ast: 0.298, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: -1.494, ftImpact: 0, to: 0.887 } }
        ]
      }
    },
      {
      id: "401906793",
      line: "Jackson State Tigers 57 @ Mississippi State Bulldogs 98 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "JKST", name: "Jackson State Tigers", score: 57,
        players: [

        ]
      },
      home: {
        abbr: "MissSt", name: "Mississippi State Bulldogs", score: 98,
        players: [
          { name: "Thomas Bassong", min: 20, pts: 10, reb: 8, ast: 2, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 6, ftm: 0, fta: 1, composite: 2.35, zScores: { pts: 0.407, reb: 1.89, ast: 0.298, stl: 1.249, blk: -0.504, tpm: -0.675, fgImpact: 1.828, ftImpact: -1.205, to: -0.933 } },
          { name: "Kimani Hamilton", min: 22, pts: 11, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 4, fta: 4, composite: 3.33, zScores: { pts: 0.559, reb: 0.761, ast: -0.275, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: 0.938, ftImpact: 1.571, to: 0.887 } },
          { name: "ND Okafor", min: 20, pts: 2, reb: 4, ast: 3, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: 0.89, zScores: { pts: -0.812, reb: 0.384, ast: 0.87, stl: 0.255, blk: 0.848, tpm: -0.675, fgImpact: 0.048, ftImpact: 0, to: -0.023 } },
          { name: "RJ Johnson", min: 18, pts: 12, reb: 5, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 4, fta: 5, composite: 1.38, zScores: { pts: 0.712, reb: 0.761, ast: 0.298, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: 0.191, ftImpact: 0.366, to: -0.023 } },
          { name: "Josh Hubbard", min: 26, pts: 14, reb: 1, ast: 3, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 10, ftm: 3, fta: 4, composite: 1.09, zScores: { pts: 1.017, reb: -0.745, ast: 0.87, stl: 0.255, blk: -0.504, tpm: 1.756, fgImpact: -0.604, ftImpact: -0.027, to: -0.933 } },
          { name: "Kendyl Sanders", min: 17, pts: 5, reb: 6, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.44, zScores: { pts: -0.355, reb: 1.137, ast: 0.298, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: 0.493, ftImpact: 0, to: -0.023 } },
          { name: "Tristan Reed", min: 14, pts: 14, reb: 8, ast: 2, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 7, fga: 10, ftm: 0, fta: 0, composite: 5.53, zScores: { pts: 1.017, reb: 1.89, ast: 0.298, stl: 0.255, blk: 0.848, tpm: -0.675, fgImpact: 1.924, ftImpact: 0, to: -0.023 } },
          { name: "Tee Bartlett", min: 2, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 1, composite: -6.02, zScores: { pts: -0.812, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0.445, ftImpact: -1.205, to: -0.933 } },
          { name: "Gai Chol", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Jalyn Collingwood", min: 13, pts: 4, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.71, zScores: { pts: -0.507, reb: -0.369, ast: -0.848, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: -0.302, ftImpact: 0, to: 0.887 } },
          { name: "Willie Burnett III", min: 11, pts: 6, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.36, zScores: { pts: -0.203, reb: -0.745, ast: -0.275, stl: -0.738, blk: -0.504, tpm: 0.946, fgImpact: 0.095, ftImpact: 0, to: -0.933 } },
          { name: "Tajuan Simpkins", min: 18, pts: 12, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 3.14, zScores: { pts: 0.712, reb: -0.369, ast: 0.298, stl: 0.255, blk: -0.504, tpm: 0.946, fgImpact: 1.828, ftImpact: 0, to: -0.023 } },
          { name: "King Grace", min: 16, pts: 6, reb: 5, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -0.17, zScores: { pts: -0.203, reb: 0.761, ast: 0.87, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: -0.652, ftImpact: 0, to: -0.023 } },
          { name: "Ashton Magee", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } }
        ]
      }
    },
      {
      id: "401921815",
      line: "SIU Edwardsville Cougars 58 @ Missouri Tigers 96 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SIUE", name: "SIU Edwardsville Cougars", score: 58,
        players: [

        ]
      },
      home: {
        abbr: "Mizzou", name: "Missouri Tigers", score: 96,
        players: [
          { name: "Toni Bryant", min: 34, pts: 18, reb: 7, ast: 3, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 6, fga: 8, ftm: 4, fta: 4, composite: 10.39, zScores: { pts: 1.626, reb: 1.513, ast: 0.87, stl: 0.255, blk: 0.848, tpm: 0.946, fgImpact: 1.876, ftImpact: 1.571, to: 0.887 } },
          { name: "Bryson Tiller", min: 28, pts: 11, reb: 7, ast: 1, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 3, fga: 9, ftm: 4, fta: 6, composite: -1.69, zScores: { pts: 0.559, reb: 1.513, ast: -0.275, stl: -0.738, blk: 0.848, tpm: 0.135, fgImpact: -1.049, ftImpact: -0.84, to: -1.843 } },
          { name: "Jason Crowe Jr.", min: 32, pts: 34, reb: 2, ast: 4, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 11, fga: 16, ftm: 8, fta: 9, composite: 11.37, zScores: { pts: 4.065, reb: -0.369, ast: 1.443, stl: 0.255, blk: -0.504, tpm: 2.567, fgImpact: 2.909, ftImpact: 1.936, to: -0.933 } },
          { name: "Trent Pierce", min: 26, pts: 6, reb: 6, ast: 5, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 4.13, zScores: { pts: -0.203, reb: 1.137, ast: 2.016, stl: 2.242, blk: -0.504, tpm: -0.675, fgImpact: 0.143, ftImpact: 0, to: -0.023 } },
          { name: "Mark Mitchell Jr.", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.79, zScores: { pts: -1.117, reb: -0.745, ast: -0.848, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: -0.397, ftImpact: 0, to: 0.887 } },
          { name: "Nicholas Randall", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Luke Northweather", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -1.117, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Trent Burns", min: 9, pts: 2, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -1.73, zScores: { pts: -0.812, reb: -0.745, ast: 0.87, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.795, ftImpact: 0.785, to: 0.887 } },
          { name: "Jordan Crawford", min: 4, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.03, zScores: { pts: -0.66, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: 0.445, ftImpact: 0, to: 0.887 } },
          { name: "Cord Stansberry", min: 6, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.83, zScores: { pts: -0.66, reb: -1.121, ast: -0.275, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: 0.445, ftImpact: 0, to: 0.887 } },
          { name: "Aaron Rowe", min: 6, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.55, zScores: { pts: -1.117, reb: -1.121, ast: -0.275, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Jamier Jones", min: 23, pts: 10, reb: 3, ast: 1, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 3, fga: 3, ftm: 4, fta: 6, composite: 1.48, zScores: { pts: 0.407, reb: 0.008, ast: -0.275, stl: 0.255, blk: 2.199, tpm: -0.675, fgImpact: 1.335, ftImpact: -0.84, to: -0.933 } },
          { name: "Kennard Davis Jr.", min: 25, pts: 9, reb: 1, ast: 4, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 4.48, zScores: { pts: 0.255, reb: -0.745, ast: 1.443, stl: 1.249, blk: -0.504, tpm: 1.756, fgImpact: 0.143, ftImpact: 0, to: 0.887 } }
        ]
      }
    },
      {
      id: "401921810",
      line: "Louisiana Tech Bulldogs 50 @ LSU Tigers 90 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LT", name: "Louisiana Tech Bulldogs", score: 50,
        players: [

        ]
      },
      home: {
        abbr: "LSU", name: "LSU Tigers", score: 90,
        players: [
          { name: "Saliou Niang", min: 24, pts: 6, reb: 6, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 4, fta: 5, composite: 2.24, zScores: { pts: -0.203, reb: 1.137, ast: 1.443, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: 0.445, ftImpact: 0.366, to: -0.023 } },
          { name: "Mo Dioubate", min: 22, pts: 15, reb: 6, ast: 3, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 5, fga: 6, ftm: 4, fta: 6, composite: 4.47, zScores: { pts: 1.169, reb: 1.137, ast: 0.87, stl: 0.255, blk: 0.848, tpm: 0.135, fgImpact: 1.828, ftImpact: -0.84, to: -0.933 } },
          { name: "Brice Dessert", min: 21, pts: 8, reb: 6, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 4, composite: 0.28, zScores: { pts: 0.102, reb: 1.137, ast: -0.275, stl: 0.255, blk: 0.848, tpm: -0.675, fgImpact: 0.541, ftImpact: -1.625, to: -0.023 } },
          { name: "Donovan Dent", min: 30, pts: 12, reb: 1, ast: 5, stl: 5, blk: 2, to: 3, tpm: 1, fgm: 3, fga: 9, ftm: 5, fta: 6, composite: 6.41, zScores: { pts: 0.712, reb: -0.745, ast: 2.016, stl: 4.228, blk: 2.199, tpm: 0.135, fgImpact: -1.049, ftImpact: 0.758, to: -1.843 } },
          { name: "Skyy Clark", min: 29, pts: 9, reb: 3, ast: 1, stl: 5, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 3.1, zScores: { pts: 0.255, reb: 0.008, ast: -0.275, stl: 4.228, blk: -0.504, tpm: 0.135, fgImpact: 0.191, ftImpact: 0, to: -0.933 } },
          { name: "Jordan Bender", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Michael Ruzic", min: 20, pts: 18, reb: 5, ast: 3, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 7, fga: 9, ftm: 3, fta: 4, composite: 6.77, zScores: { pts: 1.626, reb: 0.761, ast: 0.87, stl: 0.255, blk: 0.848, tpm: 0.135, fgImpact: 2.321, ftImpact: -0.027, to: -0.023 } },
          { name: "Strake Pearson", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -1.117, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Gilad Levy", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.03, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: -0.023 } },
          { name: "Bradley Fife", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Luke Stansbury", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 1, composite: -5.34, zScores: { pts: -1.117, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.397, ftImpact: -1.205, to: 0.887 } },
          { name: "Abdi Bashir Jr.", min: 23, pts: 16, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 12, ftm: 2, fta: 2, composite: 3.31, zScores: { pts: 1.321, reb: -0.745, ast: 0.298, stl: -0.738, blk: -0.504, tpm: 2.567, fgImpact: -0.556, ftImpact: 0.785, to: 0.887 } },
          { name: "Divine Ugochukwu", min: 24, pts: 6, reb: 0, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 1, composite: -1.25, zScores: { pts: -0.203, reb: -1.121, ast: 0.298, stl: 1.249, blk: -0.504, tpm: -0.675, fgImpact: 0.938, ftImpact: -1.205, to: -0.023 } }
        ]
      }
    },
      {
      id: "401920734",
      line: "Boston University Terriers 55 @ Northwestern Wildcats 72 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BU", name: "Boston University Terriers", score: 55,
        players: [

        ]
      },
      home: {
        abbr: "NW", name: "Northwestern Wildcats", score: 72,
        players: [
          { name: "Okku Federiko", min: 33, pts: 3, reb: 5, ast: 3, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -0.18, zScores: { pts: -0.66, reb: 0.761, ast: 0.87, stl: 0.255, blk: 0.848, tpm: -0.675, fgImpact: -0.747, ftImpact: -0.813, to: -0.023 } },
          { name: "Colin Smith", min: 12, pts: 3, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.23, zScores: { pts: -0.66, reb: -0.745, ast: -0.848, stl: 0.255, blk: -0.504, tpm: 0.135, fgImpact: -0.747, ftImpact: 0, to: 0.887 } },
          { name: "Angelo Ciaravino", min: 36, pts: 14, reb: 6, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 13, ftm: 2, fta: 2, composite: 1.27, zScores: { pts: 1.017, reb: 1.137, ast: 0.298, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: -0.111, ftImpact: 0.785, to: -0.933 } },
          { name: "Jake West", min: 32, pts: 21, reb: 1, ast: 8, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 8, fga: 16, ftm: 4, fta: 4, composite: 8.88, zScores: { pts: 2.084, reb: -0.745, ast: 3.735, stl: 2.242, blk: -0.504, tpm: 0.135, fgImpact: 0.382, ftImpact: 1.571, to: -0.023 } },
          { name: "LA Pratt", min: 38, pts: 20, reb: 4, ast: 1, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 8, fga: 17, ftm: 2, fta: 2, composite: 5.47, zScores: { pts: 1.931, reb: 0.384, ast: -0.275, stl: 2.242, blk: -0.504, tpm: 0.946, fgImpact: -0.016, ftImpact: 0.785, to: -0.023 } },
          { name: "Ryan Soulis", min: 10, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.81, zScores: { pts: -1.117, reb: 0.008, ast: -0.275, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.397, ftImpact: 0, to: 0.887 } },
          { name: "Aleksej Kostic", min: 14, pts: 0, reb: 0, ast: 0, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -1.57, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: 1.249, blk: 0.848, tpm: -0.675, fgImpact: -0.795, ftImpact: 0, to: 0.887 } },
          { name: "Phoenix Gill", min: 25, pts: 11, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 3, fta: 4, composite: 1.4, zScores: { pts: 0.559, reb: 0.008, ast: -0.275, stl: -0.738, blk: -0.504, tpm: 0.946, fgImpact: 0.541, ftImpact: -0.027, to: 0.887 } }
        ]
      }
    },
      {
      id: "401917978",
      line: "UL Monroe Warhawks 67 @ Texas A&M Aggies 108 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ULM", name: "UL Monroe Warhawks", score: 67,
        players: [

        ]
      },
      home: {
        abbr: "TAMU", name: "Texas A&M Aggies", score: 108,
        players: [
          { name: "Jalen Shelley", min: 16, pts: 5, reb: 9, ast: 4, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 3.76, zScores: { pts: -0.355, reb: 2.266, ast: 1.443, stl: 0.255, blk: 0.848, tpm: 0.135, fgImpact: 0.095, ftImpact: 0, to: -0.933 } },
          { name: "Cade Phillips", min: 16, pts: 4, reb: 5, ast: 2, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 2, composite: 0.31, zScores: { pts: -0.507, reb: 0.761, ast: 0.298, stl: -0.738, blk: 2.199, tpm: -0.675, fgImpact: 0.493, ftImpact: -2.411, to: 0.887 } },
          { name: "Mackenzie Mgbako", min: 15, pts: 5, reb: 2, ast: 1, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: 1.02, zScores: { pts: -0.355, reb: -0.369, ast: -0.275, stl: 1.249, blk: 0.848, tpm: 0.135, fgImpact: -1.097, ftImpact: 0, to: 0.887 } },
          { name: "PJ Haggerty", min: 20, pts: 22, reb: 5, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 9, fga: 13, ftm: 3, fta: 3, composite: 6.42, zScores: { pts: 2.236, reb: 0.761, ast: 0.87, stl: 0.255, blk: -0.504, tpm: 0.135, fgImpact: 2.417, ftImpact: 1.178, to: -0.933 } },
          { name: "Jordan Pope", min: 19, pts: 19, reb: 1, ast: 3, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 6, fga: 11, ftm: 6, fta: 6, composite: 6.71, zScores: { pts: 1.779, reb: -0.745, ast: 0.87, stl: 1.249, blk: -0.504, tpm: 0.135, fgImpact: 0.684, ftImpact: 2.356, to: 0.887 } },
          { name: "Josh Irving", min: 13, pts: 8, reb: 5, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 2, fta: 5, composite: -2.07, zScores: { pts: 0.102, reb: 0.761, ast: -0.848, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: 1.335, ftImpact: -2.83, to: -0.023 } },
          { name: "Jamie Vinson", min: 8, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -5.2, zScores: { pts: -0.965, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.795, ftImpact: -0.813, to: 0.887 } },
          { name: "Chris McDermott", min: 4, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.61, zScores: { pts: -0.812, reb: -0.369, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0.445, ftImpact: 0, to: 0.887 } },
          { name: "Zach Clemence", min: 16, pts: 10, reb: 3, ast: 1, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 5, fta: 5, composite: 3.17, zScores: { pts: 0.407, reb: 0.008, ast: -0.275, stl: 1.249, blk: -0.504, tpm: 0.135, fgImpact: -0.7, ftImpact: 1.964, to: 0.887 } },
          { name: "Neiko Mundey", min: 12, pts: 8, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 1, fta: 1, composite: -1.47, zScores: { pts: 0.102, reb: -1.121, ast: -0.848, stl: 0.255, blk: -0.504, tpm: 0.135, fgImpact: 0.143, ftImpact: 0.393, to: -0.023 } },
          { name: "Lukas Walls", min: 9, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.85, zScores: { pts: -1.117, reb: -1.121, ast: -0.275, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.397, ftImpact: 0, to: -0.023 } },
          { name: "Tyshawn Archie", min: 16, pts: 12, reb: 2, ast: 3, stl: 5, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 8, ftm: 1, fta: 1, composite: 5.57, zScores: { pts: 0.712, reb: -0.369, ast: 0.87, stl: 4.228, blk: -0.504, tpm: 0.135, fgImpact: 1.033, ftImpact: 0.393, to: -0.933 } },
          { name: "Jalen Reece", min: 15, pts: 5, reb: 1, ast: 4, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.51, zScores: { pts: -0.355, reb: -0.745, ast: 1.443, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: 0.095, ftImpact: 0, to: -1.843 } },
          { name: "Rylan Griffen", min: 20, pts: 7, reb: 6, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 4, fta: 4, composite: 2.98, zScores: { pts: -0.05, reb: 1.137, ast: 0.298, stl: 0.255, blk: -0.504, tpm: 0.135, fgImpact: -0.747, ftImpact: 1.571, to: 0.887 } }
        ]
      }
    },
      {
      id: "401906803",
      line: "North Alabama Lions 72 @ Oklahoma Sooners 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UNA", name: "North Alabama Lions", score: 72,
        players: [

        ]
      },
      home: {
        abbr: "Okla", name: "Oklahoma Sooners", score: 81,
        players: [
          { name: "Derrion Reid", min: 33, pts: 10, reb: 6, ast: 1, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 3, fta: 4, composite: 4.5, zScores: { pts: 0.407, reb: 1.137, ast: -0.275, stl: 1.249, blk: 0.848, tpm: 0.135, fgImpact: 0.143, ftImpact: -0.027, to: 0.887 } },
          { name: "Khani Rooths", min: 28, pts: 9, reb: 1, ast: 2, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 5, fta: 8, composite: -1.51, zScores: { pts: 0.255, reb: -0.745, ast: 0.298, stl: 2.242, blk: -0.504, tpm: -0.675, fgImpact: -0.7, ftImpact: -1.652, to: -0.023 } },
          { name: "Duke Brennan", min: 18, pts: 7, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 1, fta: 3, composite: -1.85, zScores: { pts: -0.05, reb: 0.761, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 1.335, ftImpact: -2.018, to: 0.887 } },
          { name: "Xzayvier Brown", min: 33, pts: 19, reb: 6, ast: 3, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 7, fga: 17, ftm: 2, fta: 2, composite: 4.2, zScores: { pts: 1.779, reb: 1.137, ast: 0.87, stl: -0.738, blk: -0.504, tpm: 1.756, fgImpact: -0.859, ftImpact: 0.785, to: -0.023 } },
          { name: "Pop Isaacs", min: 30, pts: 13, reb: 6, ast: 4, stl: 2, blk: 1, to: 2, tpm: 4, fgm: 4, fga: 10, ftm: 1, fta: 2, composite: 5.76, zScores: { pts: 0.864, reb: 1.137, ast: 1.443, stl: 1.249, blk: 0.848, tpm: 2.567, fgImpact: -0.604, ftImpact: -0.813, to: -0.933 } },
          { name: "Gage Mayfield", min: 6, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.36, zScores: { pts: -1.117, reb: -0.369, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Kai Rogers", min: 8, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -1.117, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Dayton Forsythe", min: 14, pts: 6, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: -0.71, zScores: { pts: -0.203, reb: -0.745, ast: 0.298, stl: 0.255, blk: -0.504, tpm: 0.135, fgImpact: 0.89, ftImpact: -0.813, to: -0.023 } },
          { name: "Quincy Wadley", min: 4, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -4.34, zScores: { pts: -1.117, reb: -0.745, ast: -0.848, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: -1.59, ftImpact: 0, to: 0.887 } },
          { name: "B.J. Edwards", min: 26, pts: 17, reb: 3, ast: 3, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 10, ftm: 5, fta: 6, composite: 3.81, zScores: { pts: 1.474, reb: 0.008, ast: 0.87, stl: -0.738, blk: -0.504, tpm: 2.567, fgImpact: -0.604, ftImpact: 0.758, to: -0.023 } }
        ]
      }
    },
      {
      id: "401926132",
      line: "Illinois State Redbirds 59 @ Purdue Boilermakers 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "IlSt", name: "Illinois State Redbirds", score: 59,
        players: [
          { name: "Noah Cleveland", min: 27, pts: 12, reb: 4, ast: 1, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 4, fga: 4, ftm: 4, fta: 5, composite: 4.64, zScores: { pts: 0.712, reb: 0.384, ast: -0.275, stl: -0.738, blk: 2.199, tpm: -0.675, fgImpact: 1.781, ftImpact: 0.366, to: 0.887 } },
          { name: "Mason Klabo", min: 30, pts: 5, reb: 3, ast: 4, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 2.96, zScores: { pts: -0.355, reb: 0.008, ast: 1.443, stl: 1.249, blk: -0.504, tpm: 0.135, fgImpact: 0.095, ftImpact: 0, to: 0.887 } },
          { name: "Johnny Kinziger", min: 40, pts: 12, reb: 1, ast: 2, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 10, ftm: 1, fta: 2, composite: 1.46, zScores: { pts: 0.712, reb: -0.745, ast: 0.298, stl: 1.249, blk: -0.504, tpm: 0.135, fgImpact: 0.238, ftImpact: -0.813, to: 0.887 } },
          { name: "Demarion Burch", min: 20, pts: 10, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -1.07, zScores: { pts: 0.407, reb: 0.008, ast: -0.848, stl: -0.738, blk: -0.504, tpm: 0.946, fgImpact: 0.588, ftImpact: 0, to: -0.933 } },
          { name: "Malik Messina-Moore", min: 27, pts: 11, reb: 1, ast: 2, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: -3.31, zScores: { pts: 0.559, reb: -0.745, ast: 0.298, stl: 0.255, blk: -0.504, tpm: 0.135, fgImpact: -0.556, ftImpact: 0, to: -2.753 } },
          { name: "Nick Allen", min: 5, pts: 0, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.17, zScores: { pts: -1.117, reb: -0.745, ast: -0.275, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Louie Semona III", min: 17, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 4, ftm: 1, fta: 2, composite: -7.81, zScores: { pts: -0.965, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -1.59, ftImpact: -0.813, to: -0.933 } },
          { name: "Chase Walker", min: 11, pts: 2, reb: 0, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.44, zScores: { pts: -0.812, reb: -1.121, ast: 0.87, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.35, ftImpact: 0, to: 0.887 } },
          { name: "Zaxton King", min: 15, pts: 4, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -2.1, zScores: { pts: -0.507, reb: -1.121, ast: -0.275, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0.048, ftImpact: 0.785, to: 0.887 } },
          { name: "Deng Garang", min: 8, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.08, zScores: { pts: -0.812, reb: -1.121, ast: -0.848, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: -0.35, ftImpact: 0, to: -0.023 } }
        ]
      },
      home: {
        abbr: "Pur", name: "Purdue Boilermakers", score: 76,
        players: [
          { name: "Caden Pierce", min: 22, pts: 3, reb: 5, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.96, zScores: { pts: -0.66, reb: 0.761, ast: -0.275, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: -0.747, ftImpact: 0, to: -0.933 } },
          { name: "Daniel Jacobsen", min: 32, pts: 20, reb: 7, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 8, ftm: 7, fta: 8, composite: 5.69, zScores: { pts: 1.931, reb: 1.513, ast: 0.87, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: 1.876, ftImpact: 1.544, to: -0.933 } },
          { name: "C.J. Cox", min: 32, pts: 10, reb: 1, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 0.62, zScores: { pts: 0.407, reb: -0.745, ast: 0.87, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: 1.033, ftImpact: 0, to: -0.023 } },
          { name: "Antione West Jr", min: 31, pts: 17, reb: 2, ast: 2, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 7, fga: 11, ftm: 0, fta: 0, composite: 2.59, zScores: { pts: 1.474, reb: -0.369, ast: 0.298, stl: 0.255, blk: -0.504, tpm: 1.756, fgImpact: 1.526, ftImpact: 0, to: -1.843 } },
          { name: "Jack Benter", min: 27, pts: 14, reb: 5, ast: 3, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 6, ftm: 4, fta: 4, composite: 6.79, zScores: { pts: 1.017, reb: 0.761, ast: 0.87, stl: 0.255, blk: -0.504, tpm: 0.946, fgImpact: 0.986, ftImpact: 1.571, to: 0.887 } },
          { name: "Enzo Shahrvin", min: 6, pts: 0, reb: 4, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -0.62, zScores: { pts: -1.117, reb: 0.384, ast: -0.848, stl: 1.249, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Raleigh Burgess", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.45, zScores: { pts: -1.117, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.795, ftImpact: 0, to: -0.023 } },
          { name: "Omer Mayer", min: 14, pts: 3, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -3.22, zScores: { pts: -0.66, reb: -0.745, ast: 0.298, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: -0.35, ftImpact: -0.813, to: -0.023 } },
          { name: "Luke Ertel", min: 18, pts: 3, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.32, zScores: { pts: -0.66, reb: 0.008, ast: -0.275, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: -0.35, ftImpact: 0, to: -0.933 } },
          { name: "Gicarri Harris", min: 14, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 4, fta: 4, composite: -1.19, zScores: { pts: -0.203, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0.445, ftImpact: 1.571, to: 0.887 } }
        ]
      }
    },
      {
      id: "401920887",
      line: "Seton Hall Pirates 68 @ Charlotte 49ers 62 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Seton", name: "Seton Hall Pirates", score: 68,
        players: [
          { name: "Terry Copeland Jr.", min: 12, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -4.32, zScores: { pts: -0.507, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0.095, ftImpact: 0, to: -0.023 } },
          { name: "Roddie Anderson", min: 28, pts: 17, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 11, ftm: 8, fta: 11, composite: 1.28, zScores: { pts: 1.474, reb: 0.008, ast: -0.275, stl: 0.255, blk: -0.504, tpm: 1.756, fgImpact: -1.844, ftImpact: -0.474, to: 0.887 } },
          { name: "Elijah Fisher", min: 32, pts: 6, reb: 8, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 3, composite: -2.08, zScores: { pts: -0.203, reb: 1.89, ast: -0.275, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: -0.302, ftImpact: -0.42, to: -1.843 } },
          { name: "Del Jones", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.05, zScores: { pts: -1.117, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.397, ftImpact: 0, to: -0.023 } },
          { name: "Simeon Wilcher", min: 29, pts: 0, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -4.52, zScores: { pts: -1.117, reb: 0.384, ast: -0.848, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: -1.987, ftImpact: 0, to: -0.023 } },
          { name: "Mayar Wol", min: 8, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.48, zScores: { pts: -0.66, reb: -0.369, ast: -0.275, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: 0.048, ftImpact: 0, to: 0.887 } },
          { name: "Devin Williams", min: 23, pts: 16, reb: 3, ast: 4, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 5, fga: 11, ftm: 6, fta: 7, composite: 5.44, zScores: { pts: 1.321, reb: 0.008, ast: 1.443, stl: -0.738, blk: 2.199, tpm: -0.675, fgImpact: -0.159, ftImpact: 1.151, to: 0.887 } },
          { name: "Abdulai Fanta Kabba", min: 5, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.36, zScores: { pts: -1.117, reb: -0.745, ast: -0.275, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -1.192, ftImpact: 0, to: 0.887 } },
          { name: "Mihailo Petrovic", min: 30, pts: 12, reb: 2, ast: 6, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 6, ftm: 3, fta: 3, composite: 6.04, zScores: { pts: 0.712, reb: -0.369, ast: 2.589, stl: 2.242, blk: -0.504, tpm: 0.135, fgImpact: 0.986, ftImpact: 1.178, to: -0.933 } },
          { name: "Kareem Thomas", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Trey Parker", min: 13, pts: 7, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.89, zScores: { pts: -0.05, reb: -0.369, ast: -0.275, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: 0.938, ftImpact: 0, to: -0.023 } },
          { name: "Rodney Brown Jr.", min: 12, pts: 3, reb: 1, ast: 0, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.08, zScores: { pts: -0.66, reb: -0.745, ast: -0.848, stl: 0.255, blk: 0.848, tpm: 0.135, fgImpact: 0.048, ftImpact: 0, to: 0.887 } }
        ]
      },
      home: {
        abbr: "UNCC", name: "Charlotte 49ers", score: 62,
        players: [
          { name: "Dylan Grant", min: 13, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.85, zScores: { pts: -1.117, reb: -1.121, ast: -0.275, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.397, ftImpact: 0, to: -0.023 } },
          { name: "Michael Walz", min: 26, pts: 8, reb: 6, ast: 2, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 2.24, zScores: { pts: 0.102, reb: 1.137, ast: 0.298, stl: 0.255, blk: -0.504, tpm: 0.946, fgImpact: 0.938, ftImpact: 0, to: -0.933 } },
          { name: "Jordi Rodriguez-Stegemeijer", min: 15, pts: 3, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 2, composite: -3.49, zScores: { pts: -0.66, reb: 0.008, ast: -0.848, stl: 0.255, blk: -0.504, tpm: 0.135, fgImpact: -0.35, ftImpact: -2.411, to: 0.887 } },
          { name: "Keyshuan Tillery", min: 34, pts: 20, reb: 4, ast: 4, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 7, fga: 14, ftm: 5, fta: 8, composite: -1.42, zScores: { pts: 1.931, reb: 0.384, ast: 1.443, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: 0.334, ftImpact: -1.652, to: -2.753 } },
          { name: "Dorian Finister", min: 26, pts: 6, reb: 3, ast: 4, stl: 0, blk: 1, to: 4, tpm: 1, fgm: 1, fga: 4, ftm: 3, fta: 4, composite: -2.03, zScores: { pts: -0.203, reb: 0.008, ast: 1.443, stl: -0.738, blk: 0.848, tpm: 0.135, fgImpact: -0.747, ftImpact: -0.027, to: -2.753 } },
          { name: "Miguel Allen", min: 22, pts: 2, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.68, zScores: { pts: -0.812, reb: 0.761, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.747, ftImpact: 0, to: 0.887 } },
          { name: "Jayden Fort", min: 7, pts: 0, reb: 3, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.11, zScores: { pts: -1.117, reb: 0.008, ast: 0.298, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: -0.795, ftImpact: 0, to: -0.933 } },
          { name: "Arden Conyers", min: 11, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.6, zScores: { pts: -0.203, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: 0.946, fgImpact: 0.89, ftImpact: 0, to: -0.023 } },
          { name: "Tyler McKinley", min: 12, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 3, composite: -4.48, zScores: { pts: -0.355, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0.89, ftImpact: -2.018, to: 0.887 } },
          { name: "Frank Oguche", min: 16, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.13, zScores: { pts: -0.203, reb: -0.369, ast: -0.848, stl: -0.738, blk: -0.504, tpm: 0.946, fgImpact: -0.302, ftImpact: 0, to: 0.887 } },
          { name: "Chaze Harris", min: 18, pts: 6, reb: 5, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 4, composite: -3.5, zScores: { pts: -0.203, reb: 0.761, ast: -0.275, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: -0.302, ftImpact: -1.625, to: -0.933 } }
        ]
      }
    },
      {
      id: "401920799",
      line: "App State Mountaineers 53 @ Auburn Tigers 75 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "APP", name: "App State Mountaineers", score: 53,
        players: [

        ]
      },
      home: {
        abbr: "Aub", name: "Auburn Tigers", score: 75,
        players: [
          { name: "Thomas Dowd", min: 25, pts: 2, reb: 11, ast: 3, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 3.64, zScores: { pts: -0.812, reb: 3.019, ast: 0.87, stl: 0.255, blk: 0.848, tpm: -0.675, fgImpact: -0.747, ftImpact: 0, to: 0.887 } },
          { name: "Narcisse Ngoy", min: 14, pts: 6, reb: 11, ast: 0, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.1, zScores: { pts: -0.203, reb: 3.019, ast: -0.848, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: 0.541, ftImpact: 0, to: -1.843 } },
          { name: "Caleb Williams", min: 20, pts: 2, reb: 3, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2, zScores: { pts: -0.812, reb: 0.008, ast: -0.848, stl: 0.255, blk: 0.848, tpm: -0.675, fgImpact: -0.747, ftImpact: 0, to: -0.023 } },
          { name: "Kevin Overton", min: 24, pts: 5, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 2, fta: 4, composite: -4.19, zScores: { pts: -0.355, reb: -0.745, ast: 0.298, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: -1.542, ftImpact: -1.625, to: 0.887 } },
          { name: "Tahaad Pettiford", min: 25, pts: 26, reb: 0, ast: 3, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 8, fga: 16, ftm: 7, fta: 7, composite: 8.12, zScores: { pts: 2.846, reb: -1.121, ast: 0.87, stl: 0.255, blk: -0.504, tpm: 1.756, fgImpact: 0.382, ftImpact: 2.749, to: 0.887 } },
          { name: "Adam Olsen", min: 21, pts: 9, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 2.13, zScores: { pts: 0.255, reb: 0.008, ast: -0.275, stl: 0.255, blk: -0.504, tpm: 1.756, fgImpact: -0.254, ftImpact: 0, to: 0.887 } },
          { name: "Owen Freeman", min: 13, pts: 6, reb: 0, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 4, composite: -1.38, zScores: { pts: -0.203, reb: -1.121, ast: -0.275, stl: 1.249, blk: -0.504, tpm: -0.675, fgImpact: 0.89, ftImpact: -1.625, to: 0.887 } },
          { name: "Bukky Oboye", min: 26, pts: 4, reb: 5, ast: 0, stl: 1, blk: 3, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 2, composite: 0.2, zScores: { pts: -0.507, reb: 0.761, ast: -0.848, stl: 0.255, blk: 3.551, tpm: -0.675, fgImpact: 0.095, ftImpact: -2.411, to: -0.023 } },
          { name: "George Kimble III", min: 16, pts: 6, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 9, ftm: 2, fta: 2, composite: -2.37, zScores: { pts: -0.203, reb: -0.745, ast: -0.275, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: -1.892, ftImpact: 0.785, to: 0.887 } },
          { name: "Kolby King", min: 16, pts: 9, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 4, fta: 4, composite: 0.33, zScores: { pts: 0.255, reb: 0.384, ast: -0.848, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: 0.095, ftImpact: 1.571, to: -0.023 } }
        ]
      }
    },
      {
      id: "401909502",
      line: "Alabama A&M Bulldogs 47 @ DePaul Blue Demons 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "AAMU", name: "Alabama A&M Bulldogs", score: 47,
        players: [

        ]
      },
      home: {
        abbr: "DeP", name: "DePaul Blue Demons", score: 84,
        players: [
          { name: "Magoon Gwath", min: 15, pts: 7, reb: 4, ast: 3, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 6, ftm: 5, fta: 5, composite: 1.12, zScores: { pts: -0.05, reb: 0.384, ast: 0.87, stl: 0.255, blk: 0.848, tpm: -0.675, fgImpact: -1.542, ftImpact: 1.964, to: -0.933 } },
          { name: "Fabian Flores", min: 22, pts: 10, reb: 6, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 5, ftm: 0, fta: 0, composite: 3.24, zScores: { pts: 0.407, reb: 1.137, ast: -0.848, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: 2.226, ftImpact: 0, to: 0.887 } },
          { name: "Ade Popoola", min: 33, pts: 13, reb: 2, ast: 2, stl: 3, blk: 1, to: 2, tpm: 4, fgm: 4, fga: 10, ftm: 1, fta: 2, composite: 4.1, zScores: { pts: 0.864, reb: -0.369, ast: 0.298, stl: 2.242, blk: 0.848, tpm: 2.567, fgImpact: -0.604, ftImpact: -0.813, to: -0.933 } },
          { name: "Kruz McClure", min: 26, pts: 2, reb: 7, ast: 6, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 3.58, zScores: { pts: -0.812, reb: 1.513, ast: 2.589, stl: 2.242, blk: -0.504, tpm: -0.675, fgImpact: -0.747, ftImpact: 0, to: -0.023 } },
          { name: "Layden Blocker", min: 34, pts: 20, reb: 3, ast: 4, stl: 2, blk: 0, to: 2, tpm: 4, fgm: 4, fga: 7, ftm: 8, fta: 8, composite: 9.49, zScores: { pts: 1.931, reb: 0.008, ast: 1.443, stl: 1.249, blk: -0.504, tpm: 2.567, fgImpact: 0.588, ftImpact: 3.142, to: -0.933 } },
          { name: "Jonas Johnson", min: 3, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.48, zScores: { pts: -1.117, reb: -0.745, ast: -0.275, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.397, ftImpact: 0, to: -0.023 } },
          { name: "Andrew Jensen", min: 3, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.36, zScores: { pts: -1.117, reb: -0.369, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Wilson Jacques", min: 9, pts: 0, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -1.49, zScores: { pts: -1.117, reb: 0.761, ast: 0.298, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.397, ftImpact: 0, to: 0.887 } },
          { name: "Kahmare Holmes", min: 25, pts: 15, reb: 6, ast: 2, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 4, fga: 9, ftm: 5, fta: 8, composite: 1.86, zScores: { pts: 1.169, reb: 1.137, ast: 0.298, stl: 0.255, blk: 0.848, tpm: 0.946, fgImpact: -0.207, ftImpact: -1.652, to: -0.933 } },
          { name: "Nate Kasher", min: 3, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -2.83, zScores: { pts: -0.812, reb: -1.121, ast: -0.848, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: -0.795, ftImpact: 0.785, to: 0.887 } },
          { name: "Noah Smith", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.02, zScores: { pts: -0.812, reb: -1.121, ast: -0.848, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: 0.445, ftImpact: 0, to: 0.887 } },
          { name: "Koree Cotton", min: 25, pts: 13, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: 2.06, zScores: { pts: 0.864, reb: 1.137, ast: -0.275, stl: -0.738, blk: -0.504, tpm: 1.756, fgImpact: -0.159, ftImpact: 0, to: -0.023 } }
        ]
      }
    },
      {
      id: "401920718",
      line: "Eastern Washington Eagles 84 @ Oregon State Beavers 94 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "EWU", name: "Eastern Washington Eagles", score: 84,
        players: [

        ]
      },
      home: {
        abbr: "OrSt", name: "Oregon State Beavers", score: 94,
        players: [
          { name: "DeShawn Gory", min: 24, pts: 8, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 7, ftm: 6, fta: 8, composite: -5.96, zScores: { pts: 0.102, reb: -0.369, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -1.94, ftImpact: -0.054, to: -0.933 } },
          { name: "Xavion Staton", min: 31, pts: 11, reb: 13, ast: 0, stl: 0, blk: 5, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 6, fta: 8, composite: 10.06, zScores: { pts: 0.559, reb: 3.772, ast: -0.848, stl: -0.738, blk: 6.254, tpm: 0.135, fgImpact: 0.095, ftImpact: -0.054, to: 0.887 } },
          { name: "Dennis Evans", min: 12, pts: 1, reb: 7, ast: 0, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: 1.91, zScores: { pts: -0.965, reb: 1.513, ast: -0.848, stl: -0.738, blk: 3.551, tpm: -0.675, fgImpact: 0, ftImpact: -0.813, to: 0.887 } },
          { name: "Josiah Lake II", min: 29, pts: 15, reb: 2, ast: 4, stl: 2, blk: 1, to: 5, tpm: 2, fgm: 4, fga: 7, ftm: 5, fta: 5, composite: 4.17, zScores: { pts: 1.169, reb: -0.369, ast: 1.443, stl: 1.249, blk: 0.848, tpm: 0.946, fgImpact: 0.588, ftImpact: 1.964, to: -3.663 } },
          { name: "Daniel Freitag", min: 28, pts: 21, reb: 2, ast: 5, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 9, ftm: 10, fta: 10, composite: 9.85, zScores: { pts: 2.084, reb: -0.369, ast: 2.016, stl: 0.255, blk: -0.504, tpm: 1.756, fgImpact: -0.207, ftImpact: 3.927, to: 0.887 } },
          { name: "Kahu Treacher", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Peteris Pinnis", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.65, zScores: { pts: -1.117, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: -0.023 } },
          { name: "Jackson Rasmussen", min: 10, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -0.812, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0.445, ftImpact: 0, to: -0.023 } },
          { name: "Yabi Aklog", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.51, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.397, ftImpact: 0, to: 0.887 } },
          { name: "Jemai Lake", min: 15, pts: 5, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 3, composite: 0.5, zScores: { pts: -0.355, reb: 0.761, ast: 0.298, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.35, ftImpact: 1.178, to: 0.887 } },
          { name: "Sean Blakely Drummond", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Chris Johnson", min: 18, pts: 14, reb: 1, ast: 2, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 8, ftm: 5, fta: 8, composite: -1.86, zScores: { pts: 1.017, reb: -0.745, ast: 0.298, stl: 1.249, blk: -0.504, tpm: 0.135, fgImpact: 0.191, ftImpact: -1.652, to: -1.843 } },
          { name: "Legend Smiley", min: 29, pts: 17, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 5, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 5.19, zScores: { pts: 1.474, reb: -0.369, ast: 0.298, stl: 0.255, blk: -0.504, tpm: 3.378, fgImpact: 0.684, ftImpact: 0, to: -0.023 } }
        ]
      }
    },
      {
      id: "401925737",
      line: "Mississippi Valley State Delta Devils 64 @ Washington Huskies 77 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MVSU", name: "Mississippi Valley State Delta Devils", score: 64,
        players: [

        ]
      },
      home: {
        abbr: "Wash", name: "Washington Huskies", score: 77,
        players: [
          { name: "Nikola Dzepina", min: 19, pts: 3, reb: 5, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -4.01, zScores: { pts: -0.66, reb: 0.761, ast: 0.298, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.747, ftImpact: -0.813, to: -0.933 } },
          { name: "Lathan Sommerville", min: 17, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: -4.37, zScores: { pts: -0.355, reb: 0.008, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0.493, ftImpact: -0.813, to: -0.933 } },
          { name: "Ryan Beasley", min: 34, pts: 16, reb: 10, ast: 6, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 8.62, zScores: { pts: 1.321, reb: 2.642, ast: 2.589, stl: 0.255, blk: -0.504, tpm: 2.567, fgImpact: 0.684, ftImpact: 0, to: -0.933 } },
          { name: "LeJuan Watts", min: 27, pts: 7, reb: 10, ast: 5, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 7, ftm: 1, fta: 2, composite: 0.77, zScores: { pts: -0.05, reb: 2.642, ast: 2.016, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: -0.254, ftImpact: -0.813, to: -1.843 } },
          { name: "Steele Venters", min: 18, pts: 15, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 5, fgm: 5, fga: 13, ftm: 0, fta: 0, composite: 2.1, zScores: { pts: 1.169, reb: -0.369, ast: -0.848, stl: 0.255, blk: -0.504, tpm: 3.378, fgImpact: -0.954, ftImpact: 0, to: -0.023 } },
          { name: "Wini Braga", min: 11, pts: 2, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.58, zScores: { pts: -0.812, reb: 0.008, ast: -0.275, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: 0.445, ftImpact: 0, to: -0.023 } },
          { name: "Jasir Rencher", min: 3, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.96, zScores: { pts: -1.117, reb: -0.745, ast: -0.275, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.795, ftImpact: 0, to: 0.887 } },
          { name: "BJ Roy", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Harun Zrno", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -1.117, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } },
          { name: "Tayshawn Comer", min: 23, pts: 6, reb: 5, ast: 4, stl: 1, blk: 2, to: 1, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 5.87, zScores: { pts: -0.203, reb: 0.761, ast: 1.443, stl: 0.255, blk: 2.199, tpm: 0.946, fgImpact: 0.493, ftImpact: 0, to: -0.023 } },
          { name: "Wesley Yates III", min: 23, pts: 6, reb: 4, ast: 4, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 9, ftm: 1, fta: 1, composite: 0.9, zScores: { pts: -0.203, reb: 0.384, ast: 1.443, stl: 0.255, blk: -0.504, tpm: 0.135, fgImpact: -1.892, ftImpact: 0.393, to: 0.887 } },
          { name: "Parker Friedrichsen", min: 21, pts: 17, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 6, fga: 14, ftm: 0, fta: 0, composite: 1.86, zScores: { pts: 1.474, reb: -0.369, ast: -0.848, stl: -0.738, blk: -0.504, tpm: 3.378, fgImpact: -0.509, ftImpact: 0, to: -0.023 } }
        ]
      }
    },
      {
      id: "401921095",
      line: "Rice Owls 73 @ Stanford Cardinal 91 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Rice", name: "Rice Owls", score: 73,
        players: [
          { name: "Eternity Eguagie", min: 20, pts: 3, reb: 2, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 8, ftm: 1, fta: 1, composite: -5.32, zScores: { pts: -0.66, reb: -0.369, ast: -0.848, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: -2.337, ftImpact: 0.393, to: -0.933 } },
          { name: "Jimmy Oladokun Jr.", min: 16, pts: 4, reb: 5, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2, zScores: { pts: -0.507, reb: 0.761, ast: -0.848, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: 0.095, ftImpact: 0, to: -0.933 } },
          { name: "Jaxson Thompson", min: 26, pts: 14, reb: 0, ast: 2, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 11, ftm: 3, fta: 5, composite: -0.34, zScores: { pts: 1.017, reb: -1.121, ast: 0.298, stl: 1.249, blk: -0.504, tpm: 0.135, fgImpact: -0.159, ftImpact: -1.232, to: -0.023 } },
          { name: "Carmelo Adkins", min: 19, pts: 9, reb: 3, ast: 1, stl: 3, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 0.55, zScores: { pts: 0.255, reb: 0.008, ast: -0.275, stl: 2.242, blk: -0.504, tpm: 0.135, fgImpact: -0.254, ftImpact: 0.785, to: -1.843 } },
          { name: "Jacob Dar", min: 12, pts: 6, reb: 3, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 3, composite: -2.47, zScores: { pts: -0.203, reb: 0.008, ast: -0.848, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: 0.493, ftImpact: -0.42, to: -0.933 } },
          { name: "Zalan Flasar", min: 18, pts: 9, reb: 6, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 3, fta: 4, composite: 1.44, zScores: { pts: 0.255, reb: 1.137, ast: -0.275, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: 0.938, ftImpact: -0.027, to: -0.023 } },
          { name: "Alexander Leeth", min: 17, pts: 4, reb: 4, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 3, composite: -1.93, zScores: { pts: -0.507, reb: 0.384, ast: -0.848, stl: -0.738, blk: 0.848, tpm: -0.675, fgImpact: 0.048, ftImpact: -0.42, to: -0.023 } },
          { name: "Jarne Elouna Eyenga", min: 10, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.16, zScores: { pts: -1.117, reb: -0.369, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.795, ftImpact: 0, to: 0.887 } },
          { name: "Tristan Vukotic", min: 15, pts: 9, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 3, fta: 3, composite: 1.14, zScores: { pts: 0.255, reb: -0.369, ast: 0.298, stl: -0.738, blk: -0.504, tpm: 0.946, fgImpact: 0.095, ftImpact: 1.178, to: -0.023 } },
          { name: "Kaiden Myers", min: 10, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.91, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.795, ftImpact: 0, to: 0.887 } },
          { name: "Bodey Howell", min: 16, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 8, ftm: 0, fta: 0, composite: -4.24, zScores: { pts: -0.66, reb: -0.745, ast: -0.275, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: -2.337, ftImpact: 0, to: 0.887 } },
          { name: "Dallas Hobbs", min: 20, pts: 12, reb: 2, ast: 2, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 6, ftm: 1, fta: 1, composite: -0.09, zScores: { pts: 0.712, reb: -0.369, ast: 0.298, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: 1.828, ftImpact: 0.393, to: -1.843 } }
        ]
      },
      home: {
        abbr: "Stan", name: "Stanford Cardinal", score: 91,
        players: [
          { name: "Aidan Cammann", min: 16, pts: 3, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -3.01, zScores: { pts: -0.66, reb: -0.369, ast: 0.298, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: -1.145, ftImpact: 0, to: -0.023 } },
          { name: "Nick Townsend", min: 33, pts: 31, reb: 8, ast: 6, stl: 2, blk: 1, to: 2, tpm: 2, fgm: 9, fga: 14, ftm: 11, fta: 11, composite: 16.53, zScores: { pts: 3.608, reb: 1.89, ast: 2.589, stl: 1.249, blk: 0.848, tpm: 0.946, fgImpact: 2.019, ftImpact: 4.32, to: -0.933 } },
          { name: "Aziz Olajuwon", min: 21, pts: 7, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -2.03, zScores: { pts: -0.05, reb: -0.745, ast: -0.848, stl: 0.255, blk: -0.504, tpm: 0.135, fgImpact: -0.254, ftImpact: 0, to: -0.023 } },
          { name: "Isaiah Rogers", min: 11, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -5.81, zScores: { pts: -0.812, reb: -1.121, ast: -0.275, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.747, ftImpact: 0, to: -0.933 } },
          { name: "Julius Price", min: 31, pts: 10, reb: 1, ast: 4, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 6, ftm: 1, fta: 1, composite: 0.44, zScores: { pts: 0.407, reb: -0.745, ast: 1.443, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: 0.986, ftImpact: 0.393, to: -0.933 } },
          { name: "Drew Anderson", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -3.42, zScores: { pts: -0.812, reb: -1.121, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -0.397, ftImpact: 0.785, to: 0.887 } },
          { name: "Evan Stinson", min: 18, pts: 6, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -2.84, zScores: { pts: -0.203, reb: 0.008, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0.143, ftImpact: 0, to: -0.023 } },
          { name: "Austin Maurer", min: 27, pts: 14, reb: 11, ast: 0, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 7, fga: 11, ftm: 0, fta: 0, composite: 6.19, zScores: { pts: 1.017, reb: 3.019, ast: -0.848, stl: 2.242, blk: 0.848, tpm: -0.675, fgImpact: 1.526, ftImpact: 0, to: -0.933 } },
          { name: "Elias Obenyah", min: 7, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 3, composite: -3.5, zScores: { pts: -0.507, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0.048, ftImpact: -0.42, to: 0.887 } },
          { name: "Anthony Batson Jr.", min: 4, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.52, zScores: { pts: -1.117, reb: -1.121, ast: -0.848, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: -0.397, ftImpact: 0, to: 0.887 } },
          { name: "Christian Bliss", min: 27, pts: 12, reb: 7, ast: 2, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 4, fta: 4, composite: 7.21, zScores: { pts: 0.712, reb: 1.513, ast: 0.298, stl: 1.249, blk: -0.504, tpm: 0.946, fgImpact: 0.541, ftImpact: 1.571, to: 0.887 } }
        ]
      }
    },
      {
      id: "401929003",
      line: "Portland Pilots 73 @ Hawai'i Rainbow Warriors 66 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Portl", name: "Portland Pilots", score: 73,
        players: [
          { name: "Timo George", min: 23, pts: 6, reb: 6, ast: 3, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 3.11, zScores: { pts: -0.203, reb: 1.137, ast: 0.87, stl: -0.738, blk: 2.199, tpm: -0.675, fgImpact: 0.541, ftImpact: 0, to: -0.023 } },
          { name: "James O'Donnell", min: 38, pts: 18, reb: 9, ast: 2, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 6, fga: 9, ftm: 6, fta: 6, composite: 9.23, zScores: { pts: 1.626, reb: 2.266, ast: 0.298, stl: -0.738, blk: 3.551, tpm: -0.675, fgImpact: 1.479, ftImpact: 2.356, to: -0.933 } },
          { name: "Riley Parker", min: 31, pts: 14, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 1.3, zScores: { pts: 1.017, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: 2.567, fgImpact: -0.207, ftImpact: 0.785, to: -0.023 } },
          { name: "Jaxon Olvera", min: 31, pts: 12, reb: 3, ast: 3, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 9, ftm: 2, fta: 3, composite: 0.94, zScores: { pts: 0.712, reb: 0.008, ast: 0.87, stl: 1.249, blk: -0.504, tpm: -0.675, fgImpact: 0.636, ftImpact: -0.42, to: -0.933 } },
          { name: "Hunter Adam", min: 35, pts: 9, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 6, ftm: 0, fta: 1, composite: -0.78, zScores: { pts: 0.255, reb: 0.384, ast: -0.848, stl: -0.738, blk: -0.504, tpm: 1.756, fgImpact: 0.143, ftImpact: -1.205, to: -0.023 } },
          { name: "Kaia Isaac", min: 12, pts: 6, reb: 4, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 6, fta: 6, composite: 0.58, zScores: { pts: -0.203, reb: 0.384, ast: 0.298, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: -0.397, ftImpact: 2.356, to: -0.933 } },
          { name: "Dante Censori-Hercules", min: 18, pts: 4, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 4, fta: 4, composite: -0.72, zScores: { pts: -0.507, reb: 0.008, ast: -0.848, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 1.571, to: -0.023 } },
          { name: "RJ Nance Jr.", min: 12, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -6.57, zScores: { pts: -0.507, reb: -0.369, ast: -0.275, stl: -0.738, blk: -0.504, tpm: 0.135, fgImpact: -0.747, ftImpact: -0.813, to: -2.753 } }
        ]
      },
      home: {
        abbr: "HI", name: "Hawai'i Rainbow Warriors", score: 66,
        players: [
          { name: "Zack Davidson", min: 31, pts: 18, reb: 0, ast: 0, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 9, fga: 17, ftm: 0, fta: 1, composite: -1.23, zScores: { pts: 1.626, reb: -1.121, ast: -0.848, stl: 0.255, blk: 0.848, tpm: -0.675, fgImpact: 0.827, ftImpact: -1.205, to: -0.933 } },
          { name: "Bol Dengdit", min: 36, pts: 15, reb: 4, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 11, ftm: 4, fta: 4, composite: 2.89, zScores: { pts: 1.169, reb: 0.384, ast: -0.848, stl: 0.255, blk: -0.504, tpm: 0.135, fgImpact: -0.159, ftImpact: 1.571, to: 0.887 } },
          { name: "Tiger Cuff", min: 30, pts: 0, reb: 2, ast: 5, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 8, ftm: 0, fta: 0, composite: -4.59, zScores: { pts: -1.117, reb: -0.369, ast: 2.016, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: -3.18, ftImpact: 0, to: -0.023 } },
          { name: "Tanner Cuff", min: 38, pts: 22, reb: 8, ast: 2, stl: 0, blk: 0, to: 0, tpm: 6, fgm: 7, fga: 15, ftm: 2, fta: 6, composite: 4.16, zScores: { pts: 2.236, reb: 1.89, ast: 0.298, stl: -0.738, blk: -0.504, tpm: 4.188, fgImpact: -0.064, ftImpact: -4.036, to: 0.887 } },
          { name: "Chance Trujillo", min: 35, pts: 11, reb: 5, ast: 7, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 12, ftm: 1, fta: 2, composite: 2.94, zScores: { pts: 0.559, reb: 0.761, ast: 3.162, stl: 0.255, blk: -0.504, tpm: 0.946, fgImpact: -1.399, ftImpact: -0.813, to: -0.023 } },
          { name: "Kellen Hampton", min: 18, pts: 0, reb: 6, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 1, composite: -2.67, zScores: { pts: -1.117, reb: 1.137, ast: -0.848, stl: 1.249, blk: -0.504, tpm: -0.675, fgImpact: -1.59, ftImpact: -1.205, to: 0.887 } },
          { name: "Marcus Adams Jr.", min: 8, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -1.117, reb: -0.369, ast: -0.848, stl: 0.255, blk: -0.504, tpm: -0.675, fgImpact: -1.192, ftImpact: 0, to: 0.887 } },
          { name: "Alois Leyrolles", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -1.117, reb: -0.745, ast: -0.848, stl: -0.738, blk: -0.504, tpm: -0.675, fgImpact: 0, ftImpact: 0, to: 0.887 } }
        ]
      }
    }
    ]
  },
    "2026-11-10": {
    games: [
      {
      id: "401906771",
      line: "Florida Gators 81 @ Florida State Seminoles 72 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Fla", name: "Florida Gators", score: 81,
        players: [
          { name: "Alex Condon", min: 34, pts: 9, reb: 10, ast: 2, stl: 1, blk: 0, to: 5, tpm: 0, fgm: 4, fga: 7, ftm: 1, fta: 5, composite: -4.17, zScores: { pts: 0.203, reb: 2.422, ast: 0.24, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.585, ftImpact: -3.489, to: -3.257 } },
          { name: "Thomas Haugh", min: 34, pts: 21, reb: 10, ast: 0, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 4, fga: 8, ftm: 10, fta: 12, composite: 9.42, zScores: { pts: 1.913, reb: 2.422, ast: -0.763, stl: 0.214, blk: 0.93, tpm: 1.626, fgImpact: 0.219, ftImpact: 1.989, to: 0.874 } },
          { name: "Rueben Chinyelu", min: 31, pts: 8, reb: 6, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 4, fta: 6, composite: 0.01, zScores: { pts: 0.061, reb: 1.002, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 0.475, ftImpact: -0.369, to: 0.048 } },
          { name: "Boogie Fland", min: 33, pts: 14, reb: 5, ast: 4, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 4, fga: 7, ftm: 5, fta: 7, composite: 0.87, zScores: { pts: 0.916, reb: 0.647, ast: 1.243, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: 0.585, ftImpact: 0.024, to: -2.431 } },
          { name: "Denzel Aberdeen", min: 27, pts: 7, reb: 1, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 9, ftm: 2, fta: 2, composite: -2.06, zScores: { pts: -0.082, reb: -0.773, ast: 0.741, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -1.721, ftImpact: 0.786, to: 0.048 } },
          { name: "Domen Petrovic", min: 11, pts: 3, reb: 3, ast: 2, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -1.62, zScores: { pts: -0.652, reb: -0.063, ast: 0.24, stl: -0.732, blk: 0.93, tpm: 0.116, fgImpact: -0.677, ftImpact: 0, to: -0.779 } },
          { name: "Urban Klavzar", min: 18, pts: 10, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 7, ftm: 7, fta: 7, composite: -0.64, zScores: { pts: 0.346, reb: -1.128, ast: -0.763, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: -1.775, ftImpact: 2.751, to: 0.048 } },
          { name: "Isaiah Brown", min: 12, pts: 9, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: 0.48, zScores: { pts: 0.203, reb: -0.063, ast: -0.763, stl: 0.214, blk: -0.447, tpm: 0.871, fgImpact: 0.164, ftImpact: -0.577, to: 0.874 } }
        ]
      },
      home: {
        abbr: "FSU", name: "Florida State Seminoles", score: 72,
        players: [
          { name: "Sebastian Rancik", min: 33, pts: 23, reb: 5, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 8, fga: 17, ftm: 6, fta: 8, composite: 2.56, zScores: { pts: 2.198, reb: 0.647, ast: 0.24, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.071, ftImpact: 0.417, to: 0.048 } },
          { name: "Shon Abaev", min: 31, pts: 10, reb: 6, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 12, ftm: 3, fta: 4, composite: -1.63, zScores: { pts: 0.346, reb: 1.002, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: -2.032, ftImpact: 0.209, to: -0.779 } },
          { name: "Marcis Ponder", min: 21, pts: 4, reb: 3, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.67, zScores: { pts: -0.509, reb: -0.063, ast: -0.763, stl: 0.214, blk: 0.93, tpm: -0.639, fgImpact: 0.109, ftImpact: 0, to: 0.048 } },
          { name: "Kam Taylor", min: 33, pts: 10, reb: 4, ast: 0, stl: 3, blk: 1, to: 3, tpm: 0, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 1.31, zScores: { pts: 0.346, reb: 0.292, ast: -0.763, stl: 2.106, blk: 0.93, tpm: -0.639, fgImpact: 0.639, ftImpact: 0, to: -1.605 } },
          { name: "Anthony Robinson II", min: 35, pts: 19, reb: 1, ast: 3, stl: 1, blk: 1, to: 3, tpm: 2, fgm: 6, fga: 12, ftm: 5, fta: 5, composite: 4.3, zScores: { pts: 1.628, reb: -0.773, ast: 0.741, stl: 0.214, blk: 0.93, tpm: 0.871, fgImpact: 0.328, ftImpact: 1.965, to: -1.605 } },
          { name: "Alex Steen", min: 19, pts: 2, reb: 4, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.22, zScores: { pts: -0.794, reb: 0.292, ast: -0.261, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: 0.421, ftImpact: 0, to: 0.048 } },
          { name: "Cooper Schwieger", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.58, zScores: { pts: -0.794, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.311, ftImpact: 0, to: 0.874 } },
          { name: "Elise Assui", min: 17, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 1, composite: -4.57, zScores: { pts: -0.794, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.677, ftImpact: -0.97, to: 0.874 } },
          { name: "Martay Barnes", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.74, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Brandon Bass Jr.", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } }
        ]
      }
    },
      {
      id: "401909564",
      line: "Michigan State Spartans 79 @ Duke Blue Devils 73 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MSU", name: "Michigan State Spartans", score: 79,
        players: [
          { name: "Jordan Scott", min: 31, pts: 5, reb: 9, ast: 1, stl: 2, blk: 6, to: 0, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: 10.42, zScores: { pts: -0.367, reb: 2.067, ast: -0.261, stl: 1.16, blk: 7.816, tpm: 0.116, fgImpact: -0.989, ftImpact: 0, to: 0.874 } },
          { name: "Coen Carr", min: 17, pts: 9, reb: 2, ast: 0, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 1.22, zScores: { pts: 0.203, reb: -0.418, ast: -0.763, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: 1.317, ftImpact: 0, to: 0.048 } },
          { name: "Anton Bonke", min: 13, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -0.794, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.055, ftImpact: 0, to: 0.048 } },
          { name: "Jasiah Jervis", min: 30, pts: 10, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -0.48, zScores: { pts: 0.346, reb: -0.063, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: 0.585, ftImpact: 0, to: -0.779 } },
          { name: "Jeremy Fears Jr.", min: 33, pts: 18, reb: 7, ast: 11, stl: 1, blk: 1, to: 4, tpm: 0, fgm: 3, fga: 9, ftm: 12, fta: 17, composite: 4.6, zScores: { pts: 1.485, reb: 1.357, ast: 4.753, stl: 0.214, blk: 0.93, tpm: -0.639, fgImpact: -0.934, ftImpact: -0.136, to: -2.431 } },
          { name: "Jesse McCulloch", min: 22, pts: 7, reb: 3, ast: 0, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: 0.5, zScores: { pts: -0.082, reb: -0.063, ast: -0.763, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: -0.257, ftImpact: 0.786, to: 0.048 } },
          { name: "Cam Ward", min: 20, pts: 14, reb: 6, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 7, ftm: 4, fta: 4, composite: 3.71, zScores: { pts: 0.916, reb: 1.002, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 1.371, ftImpact: 1.572, to: 0.048 } },
          { name: "Kaleb Glenn", min: 8, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 3, fta: 4, composite: -4.75, zScores: { pts: -0.652, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -1.83, ftImpact: 0.209, to: 0.874 } },
          { name: "Ethan Taylor", min: 8, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 1, composite: -2.45, zScores: { pts: -0.367, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.475, ftImpact: 0.393, to: 0.048 } },
          { name: "Carlos Medlock Jr.", min: 10, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.45, zScores: { pts: -0.224, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: -0.257, ftImpact: 0, to: 0.874 } },
          { name: "Kur Teng", min: 8, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.57, zScores: { pts: -1.079, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } }
        ]
      },
      home: {
        abbr: "Duke", name: "Duke Blue Devils", score: 73,
        players: [
          { name: "Dame Sarr", min: 26, pts: 6, reb: 2, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 5, ftm: 4, fta: 6, composite: -4.79, zScores: { pts: -0.224, reb: -0.418, ast: -0.261, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -1.043, ftImpact: -0.369, to: -1.605 } },
          { name: "Joaquim Boumtje Boumtje", min: 21, pts: 5, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 1, composite: -1.52, zScores: { pts: -0.367, reb: 0.292, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -0.257, ftImpact: 0.393, to: 0.048 } },
          { name: "Patrick Ngongba II", min: 29, pts: 11, reb: 7, ast: 6, stl: 0, blk: 4, to: 2, tpm: 0, fgm: 2, fga: 7, ftm: 7, fta: 13, composite: 2.94, zScores: { pts: 0.488, reb: 1.357, ast: 2.246, stl: -0.732, blk: 5.062, tpm: -0.639, fgImpact: -0.989, ftImpact: -3.072, to: -0.779 } },
          { name: "John Blackwell", min: 32, pts: 17, reb: 5, ast: 1, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 6, fga: 16, ftm: 1, fta: 2, composite: 0.44, zScores: { pts: 1.343, reb: 0.647, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 2.382, fgImpact: -1.136, ftImpact: -0.577, to: -0.779 } },
          { name: "Cayden Boozer", min: 22, pts: 6, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -0.34, zScores: { pts: -0.224, reb: -0.063, ast: 0.24, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -0.257, ftImpact: 0.786, to: 0.048 } },
          { name: "Drew Scharnowski", min: 15, pts: 8, reb: 6, ast: 2, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 4, fta: 5, composite: 3.76, zScores: { pts: 0.061, reb: 1.002, ast: 0.24, stl: 0.214, blk: 0.93, tpm: -0.639, fgImpact: 0.475, ftImpact: 0.602, to: 0.874 } },
          { name: "Sebastian Wilkins", min: 19, pts: 9, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 4, fta: 4, composite: 1.89, zScores: { pts: 0.203, reb: -0.418, ast: -0.763, stl: -0.732, blk: 0.93, tpm: 0.116, fgImpact: 0.109, ftImpact: 1.572, to: 0.874 } },
          { name: "Deron Rippey Jr.", min: 12, pts: 2, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.84, zScores: { pts: -0.794, reb: -0.418, ast: 0.24, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -1.043, ftImpact: 0, to: 0.048 } },
          { name: "Caleb Foster", min: 24, pts: 9, reb: 5, ast: 4, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 10, ftm: 3, fta: 4, composite: -0.04, zScores: { pts: 0.203, reb: 0.647, ast: 1.243, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: -2.087, ftImpact: 0.209, to: 0.048 } }
        ]
      }
    },
      {
      id: "401913527",
      line: "Illinois Fighting Illini 78 @ Texas Tech Red Raiders 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Ill", name: "Illinois Fighting Illini", score: 78,
        players: [
          { name: "Tomislav Ivisic", min: 30, pts: 14, reb: 6, ast: 3, stl: 2, blk: 0, to: 4, tpm: 1, fgm: 6, fga: 12, ftm: 1, fta: 3, composite: -0.16, zScores: { pts: 0.916, reb: 1.002, ast: 0.741, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: 0.328, ftImpact: -1.548, to: -2.431 } },
          { name: "Ethan Brown", min: 25, pts: 5, reb: 4, ast: 3, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.83, zScores: { pts: -0.367, reb: 0.292, ast: 0.741, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: 0.109, ftImpact: 0, to: -0.779 } },
          { name: "Lincoln Williams", min: 24, pts: 8, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 4, ftm: 0, fta: 1, composite: 0.1, zScores: { pts: 0.061, reb: -0.418, ast: -0.261, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 1.683, ftImpact: -0.97, to: 0.874 } },
          { name: "Quentin Coleman", min: 28, pts: 19, reb: 5, ast: 4, stl: 2, blk: 0, to: 3, tpm: 5, fgm: 7, fga: 9, ftm: 0, fta: 2, composite: 6.03, zScores: { pts: 1.628, reb: 0.647, ast: 1.243, stl: 1.16, blk: -0.447, tpm: 3.137, fgImpact: 2.212, ftImpact: -1.941, to: -1.605 } },
          { name: "Andrej Stojakovic", min: 33, pts: 18, reb: 3, ast: 3, stl: 1, blk: 2, to: 3, tpm: 1, fgm: 6, fga: 11, ftm: 5, fta: 6, composite: 4.89, zScores: { pts: 1.485, reb: -0.063, ast: 0.741, stl: 0.214, blk: 2.307, tpm: 0.116, fgImpact: 0.694, ftImpact: 0.995, to: -1.605 } },
          { name: "Zavier Zens", min: 20, pts: 2, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 1, composite: -4.68, zScores: { pts: -0.794, reb: 0.292, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.677, ftImpact: -0.97, to: 0.048 } },
          { name: "Zvonimir Ivisic", min: 11, pts: 2, reb: 1, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.07, zScores: { pts: -0.794, reb: -0.773, ast: -0.261, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: -0.677, ftImpact: 0, to: 0.874 } },
          { name: "Jason Jakstys", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Stefan Vaaks", min: 22, pts: 10, reb: 3, ast: 0, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 3, fga: 12, ftm: 2, fta: 6, composite: -5.32, zScores: { pts: 0.346, reb: -0.063, ast: -0.763, stl: -0.732, blk: 0.93, tpm: 0.871, fgImpact: -2.032, ftImpact: -3.096, to: -0.779 } },
          { name: "Lucas Morillo", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.38, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.048 } }
        ]
      },
      home: {
        abbr: "TxTch", name: "Texas Tech Red Raiders", score: 84,
        players: [
          { name: "Bassala Bagayoko", min: 13, pts: 4, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.03, zScores: { pts: -0.509, reb: -0.773, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.841, ftImpact: 0, to: 0.048 } },
          { name: "Darrion Williams", min: 29, pts: 4, reb: 5, ast: 2, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 5, ftm: 4, fta: 5, composite: -1.55, zScores: { pts: -0.509, reb: 0.647, ast: 0.24, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: -1.83, ftImpact: 0.602, to: -0.779 } },
          { name: "Donovan Atwell", min: 35, pts: 13, reb: 2, ast: 1, stl: 5, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 8, ftm: 4, fta: 4, composite: 5.5, zScores: { pts: 0.773, reb: -0.418, ast: -0.261, stl: 3.998, blk: -0.447, tpm: 1.626, fgImpact: -0.568, ftImpact: 1.572, to: -0.779 } },
          { name: "Cruz Davis", min: 38, pts: 20, reb: 3, ast: 5, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 7, fga: 16, ftm: 3, fta: 4, composite: 3.1, zScores: { pts: 1.77, reb: -0.063, ast: 1.744, stl: 0.214, blk: -0.447, tpm: 1.626, fgImpact: -0.349, ftImpact: 0.209, to: -1.605 } },
          { name: "Dra Gibbs-Lawhorn", min: 21, pts: 15, reb: 2, ast: 3, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 12, ftm: 0, fta: 0, composite: 3.37, zScores: { pts: 1.058, reb: -0.418, ast: 0.741, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: 1.115, ftImpact: 0, to: 0.048 } },
          { name: "Jamichael Stillwell", min: 26, pts: 11, reb: 13, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 10, ftm: 7, fta: 8, composite: 1.64, zScores: { pts: 0.488, reb: 3.487, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -2.087, ftImpact: 1.781, to: 0.048 } },
          { name: "Josiah Moseley", min: 12, pts: 4, reb: 4, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.5, zScores: { pts: -0.509, reb: 0.292, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.475, ftImpact: 0, to: 0.874 } },
          { name: "Damarion Dennis", min: 19, pts: 10, reb: 3, ast: 0, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: -0.04, zScores: { pts: 0.346, reb: -0.063, ast: -0.763, stl: 0.214, blk: -0.447, tpm: 0.871, fgImpact: -0.202, ftImpact: 0.786, to: -0.779 } },
          { name: "DaKari Spear", min: 7, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 3, fta: 3, composite: -3.87, zScores: { pts: -0.652, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: 1.179, to: 0.048 } }
        ]
      }
    },
      {
      id: "401920425",
      line: "Bucknell Bison 61 @ Virginia Cavaliers 95 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BUCK", name: "Bucknell Bison", score: 61,
        players: [

        ]
      },
      home: {
        abbr: "UVA", name: "Virginia Cavaliers", score: 95,
        players: [
          { name: "Nolan Adekunle", min: 19, pts: 14, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 6, ftm: 1, fta: 2, composite: 3.22, zScores: { pts: 0.916, reb: -0.418, ast: 0.24, stl: -0.732, blk: -0.447, tpm: 1.626, fgImpact: 1.737, ftImpact: -0.577, to: 0.874 } },
          { name: "Thijs De Ridder", min: 21, pts: 15, reb: 8, ast: 4, stl: 4, blk: 1, to: 1, tpm: 3, fgm: 6, fga: 10, ftm: 0, fta: 1, composite: 9.76, zScores: { pts: 1.058, reb: 1.712, ast: 1.243, stl: 3.052, blk: 0.93, tpm: 1.626, fgImpact: 1.06, ftImpact: -0.97, to: 0.048 } },
          { name: "Johann Grunloh", min: 21, pts: 13, reb: 9, ast: 2, stl: 1, blk: 3, to: 0, tpm: 0, fgm: 5, fga: 9, ftm: 3, fta: 6, composite: 6.12, zScores: { pts: 0.773, reb: 2.067, ast: 0.24, stl: 0.214, blk: 3.684, tpm: -0.639, fgImpact: 0.639, ftImpact: -1.732, to: 0.874 } },
          { name: "Sam Lewis", min: 19, pts: 4, reb: 4, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.72, zScores: { pts: -0.509, reb: 0.292, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 0.475, ftImpact: 0, to: -0.779 } },
          { name: "Chance Mallory", min: 21, pts: 16, reb: 2, ast: 6, stl: 3, blk: 0, to: 4, tpm: 3, fgm: 6, fga: 9, ftm: 1, fta: 3, composite: 3.76, zScores: { pts: 1.2, reb: -0.418, ast: 2.246, stl: 2.106, blk: -0.447, tpm: 1.626, fgImpact: 1.426, ftImpact: -1.548, to: -2.431 } },
          { name: "Silas Barksdale", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.38, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Kalu Anya", min: 10, pts: 2, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -1.41, zScores: { pts: -0.794, reb: -0.773, ast: -0.261, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0.786, to: 0.874 } },
          { name: "Carter Lang", min: 3, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.22, zScores: { pts: -0.794, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.055, ftImpact: 0, to: 0.874 } },
          { name: "Favour Ibe", min: 7, pts: 4, reb: 2, ast: 0, stl: 0, blk: 4, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 2.89, zScores: { pts: -0.509, reb: -0.418, ast: -0.763, stl: -0.732, blk: 5.062, tpm: -0.639, fgImpact: 0.841, ftImpact: 0, to: 0.048 } },
          { name: "Quincy Watson", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Nick Rotter", min: 2, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.2, zScores: { pts: -1.079, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Christian Harmon", min: 5, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.7, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: 0, to: 0.874 } },
          { name: "Owen Odom", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.12, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: 0, to: 0.048 } },
          { name: "Martin Carrere", min: 17, pts: 7, reb: 6, ast: 2, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 1.78, zScores: { pts: -0.082, reb: 1.002, ast: 0.24, stl: -0.732, blk: 0.93, tpm: 0.116, fgImpact: -0.568, ftImpact: 0, to: 0.874 } },
          { name: "Jan Vide", min: 17, pts: 6, reb: 5, ast: 4, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: 2.78, zScores: { pts: -0.224, reb: 0.647, ast: 1.243, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: -0.623, ftImpact: 0.786, to: 0.874 } },
          { name: "Elijah Gertrude", min: 13, pts: 5, reb: 3, ast: 7, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 2.42, zScores: { pts: -0.367, reb: -0.063, ast: 2.747, stl: -0.732, blk: 0.93, tpm: 0.116, fgImpact: -0.257, ftImpact: 0, to: 0.048 } },
          { name: "Jurian Dixon", min: 14, pts: 7, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -0.29, zScores: { pts: -0.082, reb: -0.063, ast: 0.24, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -0.202, ftImpact: 0, to: 0.874 } }
        ]
      }
    },
      {
      id: "401909740",
      line: "Northern Arizona Lumberjacks 59 @ Arizona Wildcats 90 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NAU", name: "Northern Arizona Lumberjacks", score: 59,
        players: [

        ]
      },
      home: {
        abbr: "Ariz", name: "Arizona Wildcats", score: 90,
        players: [
          { name: "Ivan Kharchenkov", min: 30, pts: 20, reb: 7, ast: 7, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 10, ftm: 6, fta: 9, composite: 6.34, zScores: { pts: 1.77, reb: 1.357, ast: 2.747, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 1.846, ftImpact: -0.553, to: 0.048 } },
          { name: "Motiejus Krivas", min: 26, pts: 16, reb: 7, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 9, ftm: 2, fta: 3, composite: 2.55, zScores: { pts: 1.2, reb: 1.357, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 2.212, ftImpact: -0.184, to: 0.048 } },
          { name: "Derek Dixon", min: 27, pts: 12, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 1.3, zScores: { pts: 0.631, reb: -0.773, ast: 0.24, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: 0.639, ftImpact: 0, to: 0.874 } },
          { name: "Caleb Holt", min: 27, pts: 17, reb: 5, ast: 3, stl: 3, blk: 1, to: 3, tpm: 1, fgm: 8, fga: 15, ftm: 0, fta: 0, composite: 5.08, zScores: { pts: 1.343, reb: 0.647, ast: 0.741, stl: 2.106, blk: 0.93, tpm: 0.116, fgImpact: 0.803, ftImpact: 0, to: -1.605 } },
          { name: "Bryce James", min: 13, pts: 3, reb: 0, ast: 2, stl: 2, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 0.4, zScores: { pts: -0.652, reb: -1.128, ast: 0.24, stl: 1.16, blk: 0.93, tpm: 0.116, fgImpact: -0.311, ftImpact: 0, to: 0.048 } },
          { name: "Maksim Brnovic", min: 13, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.63, zScores: { pts: -0.367, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.109, ftImpact: 0, to: 0.874 } },
          { name: "Evan Otten", min: 6, pts: 0, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.91, zScores: { pts: -1.079, reb: -1.128, ast: 0.24, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Ugnius Jarusevicius", min: 9, pts: 2, reb: 2, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.97, zScores: { pts: -0.794, reb: -0.418, ast: -0.763, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: 0.055, ftImpact: 0, to: 0.874 } },
          { name: "Cameron Holmes", min: 20, pts: 6, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.21, zScores: { pts: -0.224, reb: -1.128, ast: 0.24, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.896, ftImpact: 0, to: 0.874 } },
          { name: "JJ Mandaquit", min: 27, pts: 9, reb: 2, ast: 7, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 5.7, zScores: { pts: 0.203, reb: -0.418, ast: 2.747, stl: 0.214, blk: -0.447, tpm: 1.626, fgImpact: 0.896, ftImpact: 0, to: 0.874 } },
          { name: "Addison Arnold", min: 2, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.97, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } }
        ]
      }
    },
      {
      id: "401909786",
      line: "Kansas Jayhawks 89 @ Kentucky Wildcats 69 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Kan", name: "Kansas Jayhawks", score: 89,
        players: [
          { name: "Trey Kaufman-Renn", min: 24, pts: 12, reb: 6, ast: 6, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 5, ftm: 3, fta: 4, composite: 7.11, zScores: { pts: 0.631, reb: 1.002, ast: 2.246, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: 1.317, ftImpact: 0.209, to: 0.874 } },
          { name: "Leroy Blyden Jr.", min: 33, pts: 8, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 9, ftm: 4, fta: 6, composite: -3.06, zScores: { pts: 0.061, reb: -0.773, ast: -0.261, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -1.721, ftImpact: -0.369, to: 0.874 } },
          { name: "Taylen Kinney", min: 33, pts: 4, reb: 3, ast: 8, stl: 2, blk: 0, to: 4, tpm: 1, fgm: 1, fga: 9, ftm: 1, fta: 2, composite: -2.01, zScores: { pts: -0.509, reb: -0.063, ast: 3.249, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: -2.507, ftImpact: -0.577, to: -2.431 } },
          { name: "Tyran Stokes", min: 32, pts: 23, reb: 10, ast: 4, stl: 1, blk: 1, to: 1, tpm: 4, fgm: 8, fga: 19, ftm: 3, fta: 3, composite: 9.95, zScores: { pts: 2.198, reb: 2.422, ast: 1.243, stl: 0.214, blk: 0.93, tpm: 2.382, fgImpact: -0.661, ftImpact: 1.179, to: 0.048 } },
          { name: "Tre White", min: 34, pts: 30, reb: 6, ast: 0, stl: 1, blk: 1, to: 2, tpm: 4, fgm: 11, fga: 16, ftm: 4, fta: 4, composite: 10.55, zScores: { pts: 3.195, reb: 1.002, ast: -0.763, stl: 0.214, blk: 0.93, tpm: 2.382, fgImpact: 2.797, ftImpact: 1.572, to: -0.779 } },
          { name: "Davion Adkins", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Keanu Dawes", min: 10, pts: 2, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 2, composite: -5.25, zScores: { pts: -0.794, reb: 0.292, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.055, ftImpact: -1.941, to: -0.779 } },
          { name: "Christian Reeves", min: 12, pts: 8, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 2, composite: -2.34, zScores: { pts: 0.061, reb: 0.292, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.951, ftImpact: -1.941, to: 0.874 } },
          { name: "Trent Perry", min: 9, pts: 2, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.27, zScores: { pts: -0.794, reb: -0.773, ast: 0.24, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.055, ftImpact: 0, to: 0.874 } },
          { name: "Dennis Parker Jr.", min: 12, pts: 0, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.21, zScores: { pts: -1.079, reb: -0.063, ast: 0.24, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } }
        ]
      },
      home: {
        abbr: "KY", name: "Kentucky Wildcats", score: 69,
        players: [
          { name: "Ousmane N'Diaye", min: 13, pts: 4, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 2, composite: -3.48, zScores: { pts: -0.509, reb: -0.418, ast: -0.261, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.475, ftImpact: -1.941, to: 0.048 } },
          { name: "Milan Momcilovic", min: 36, pts: 5, reb: 7, ast: 2, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: 1.95, zScores: { pts: -0.367, reb: 1.357, ast: 0.24, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: -0.989, ftImpact: 0, to: 0.874 } },
          { name: "Malachi Moreno", min: 27, pts: 19, reb: 10, ast: 5, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 8, fga: 11, ftm: 3, fta: 5, composite: 6.2, zScores: { pts: 1.628, reb: 2.422, ast: 1.744, stl: 0.214, blk: 0.93, tpm: -0.639, fgImpact: 2.267, ftImpact: -0.762, to: -1.605 } },
          { name: "Alex Wilkins", min: 29, pts: 8, reb: 2, ast: 1, stl: 0, blk: 0, to: 5, tpm: 0, fgm: 3, fga: 10, ftm: 2, fta: 2, composite: -6.21, zScores: { pts: 0.061, reb: -0.418, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -1.3, ftImpact: 0.786, to: -3.257 } },
          { name: "Zoom Diallo", min: 34, pts: 24, reb: 2, ast: 0, stl: 0, blk: 1, to: 2, tpm: 3, fgm: 10, fga: 15, ftm: 1, fta: 4, composite: 2.06, zScores: { pts: 2.34, reb: -0.418, ast: -0.763, stl: -0.732, blk: 0.93, tpm: 1.626, fgImpact: 2.376, ftImpact: -2.518, to: -0.779 } },
          { name: "Reece Potter", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.92, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Braydon Hawthorne", min: 13, pts: 4, reb: 3, ast: 0, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 1.96, zScores: { pts: -0.509, reb: -0.063, ast: -0.763, stl: -0.732, blk: 3.684, tpm: -0.639, fgImpact: 0.109, ftImpact: 0, to: 0.874 } },
          { name: "Justin McBride", min: 14, pts: 0, reb: 2, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -2.75, zScores: { pts: -1.079, reb: -0.418, ast: 0.24, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: -1.098, ftImpact: 0, to: 0.048 } },
          { name: "Franck Kepnang", min: 10, pts: 1, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -5.2, zScores: { pts: -0.936, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: -0.577, to: 0.048 } },
          { name: "Mason Williams", min: 17, pts: 4, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 4, fta: 4, composite: -1.16, zScores: { pts: -0.509, reb: -0.418, ast: 0.24, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -1.098, ftImpact: 1.572, to: 0.874 } },
          { name: "Kam Williams", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.21, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: -0.779 } }
        ]
      }
    },
      {
      id: "401918987",
      line: "Memphis Tigers 81 @ Vanderbilt Commodores 105 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Mem", name: "Memphis Tigers", score: 81,
        players: [
          { name: "Tylik Weeks", min: 24, pts: 15, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 12, ftm: 5, fta: 6, composite: 0.71, zScores: { pts: 1.058, reb: -1.128, ast: 0.24, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -0.459, ftImpact: 0.995, to: 0.874 } },
          { name: "Maxim Logue", min: 13, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.62, zScores: { pts: -0.509, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.841, ftImpact: 0, to: 0.048 } },
          { name: "Rihards Vavers", min: 22, pts: 5, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -0.62, zScores: { pts: -0.367, reb: -0.418, ast: 0.24, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -0.677, ftImpact: 0.786, to: 0.874 } },
          { name: "Luke Almodovar", min: 24, pts: 21, reb: 4, ast: 0, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 7, fga: 14, ftm: 6, fta: 7, composite: 4.52, zScores: { pts: 1.913, reb: 0.292, ast: -0.763, stl: 0.214, blk: 0.93, tpm: 0.116, fgImpact: 0.383, ftImpact: 1.388, to: 0.048 } },
          { name: "Jayden Reid", min: 30, pts: 11, reb: 2, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 11, ftm: 2, fta: 4, composite: -3.56, zScores: { pts: 0.488, reb: -0.418, ast: 0.24, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -0.879, ftImpact: -1.155, to: -0.779 } },
          { name: "William Whorton", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.54, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Jerry Deng", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.65, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: 0, to: 0.874 } },
          { name: "Corneilous Williams", min: 18, pts: 3, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 3, fta: 6, composite: -2.79, zScores: { pts: -0.652, reb: 0.292, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: -0.366, ftImpact: -1.732, to: 0.874 } },
          { name: "Cello Jackson Jr.", min: 8, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 6, composite: -7.2, zScores: { pts: -0.794, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: -3.096, to: 0.048 } },
          { name: "Julius Thedford", min: 11, pts: 4, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -3.74, zScores: { pts: -0.509, reb: 0.292, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.989, ftImpact: 0, to: 0.048 } },
          { name: "Josh Holloway", min: 19, pts: 7, reb: 5, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 3, fta: 3, composite: 2.89, zScores: { pts: -0.082, reb: 0.647, ast: 0.24, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 0.475, ftImpact: 1.179, to: 0.874 } },
          { name: "Brandin Cummings", min: 23, pts: 9, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -1.29, zScores: { pts: 0.203, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.585, ftImpact: 0, to: 0.874 } }
        ]
      },
      home: {
        abbr: "Vand", name: "Vanderbilt Commodores", score: 105,
        players: [
          { name: "Chandler Bing", min: 28, pts: 5, reb: 7, ast: 3, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 4, composite: -1.9, zScores: { pts: -0.367, reb: 1.357, ast: 0.741, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 0.109, ftImpact: -2.518, to: -0.779 } },
          { name: "Sebastian Williams-Adams", min: 25, pts: 11, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 7, ftm: 1, fta: 2, composite: 1.24, zScores: { pts: 0.488, reb: -0.063, ast: 0.24, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: 0.585, ftImpact: -0.577, to: 0.874 } },
          { name: "Berke Buyuktuncel", min: 30, pts: 16, reb: 8, ast: 4, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 5, fga: 7, ftm: 4, fta: 4, composite: 9.04, zScores: { pts: 1.2, reb: 1.712, ast: 1.243, stl: -0.732, blk: 0.93, tpm: 0.871, fgImpact: 1.371, ftImpact: 1.572, to: 0.874 } },
          { name: "Ace Glass", min: 23, pts: 23, reb: 2, ast: 0, stl: 0, blk: 0, to: 3, tpm: 5, fgm: 8, fga: 14, ftm: 2, fta: 2, composite: 3.33, zScores: { pts: 2.198, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 3.137, fgImpact: 1.169, ftImpact: 0.786, to: -1.605 } },
          { name: "Tyler Tanner", min: 33, pts: 17, reb: 5, ast: 2, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 8, fga: 14, ftm: 0, fta: 0, composite: 6.05, zScores: { pts: 1.343, reb: 0.647, ast: 0.24, stl: 2.106, blk: -0.447, tpm: 0.116, fgImpact: 1.169, ftImpact: 0, to: 0.874 } },
          { name: "Jackson Sheffield", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Ethan Mgbako", min: 2, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.97, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Bangot Dak", min: 17, pts: 11, reb: 5, ast: 2, stl: 0, blk: 3, to: 0, tpm: 2, fgm: 4, fga: 5, ftm: 1, fta: 2, composite: 6.81, zScores: { pts: 0.488, reb: 0.647, ast: 0.24, stl: -0.732, blk: 3.684, tpm: 0.871, fgImpact: 1.317, ftImpact: -0.577, to: 0.874 } },
          { name: "T.O. Barrett", min: 17, pts: 9, reb: 4, ast: 3, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: 2.31, zScores: { pts: 0.203, reb: 0.292, ast: 0.741, stl: -0.732, blk: 0.93, tpm: 0.871, fgImpact: 0.53, ftImpact: -0.577, to: 0.048 } },
          { name: "Jayden Leverett", min: 6, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.97, zScores: { pts: -0.652, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.055, ftImpact: 0, to: 0.874 } },
          { name: "Mavrick Hawkins", min: 2, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -2.14, zScores: { pts: -0.509, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.421, ftImpact: 0.786, to: 0.874 } },
          { name: "Ant Brown Jr.", min: 14, pts: 6, reb: 2, ast: 4, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 3, ftm: 6, fta: 6, composite: -1.56, zScores: { pts: -0.224, reb: -0.418, ast: 1.243, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -1.098, ftImpact: 2.358, to: -1.605 } }
        ]
      }
    },
      {
      id: "401921740",
      line: "Queens University Royals 82 @ BYU Cougars 98 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "QUC", name: "Queens University Royals", score: 82,
        players: [

        ]
      },
      home: {
        abbr: "BYU", name: "BYU Cougars", score: 98,
        players: [
          { name: "Bruce Branch III", min: 28, pts: 15, reb: 6, ast: 3, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 6, fga: 12, ftm: 1, fta: 4, composite: 1.85, zScores: { pts: 1.058, reb: 1.002, ast: 0.741, stl: 0.214, blk: 0.93, tpm: 0.871, fgImpact: 0.328, ftImpact: -2.518, to: -0.779 } },
          { name: "Jaxon Kohler", min: 25, pts: 15, reb: 8, ast: 2, stl: 0, blk: 2, to: 2, tpm: 3, fgm: 5, fga: 8, ftm: 2, fta: 2, composite: 7.23, zScores: { pts: 1.058, reb: 1.712, ast: 0.24, stl: -0.732, blk: 2.307, tpm: 1.626, fgImpact: 1.005, ftImpact: 0.786, to: -0.779 } },
          { name: "Tyler Betsey", min: 21, pts: 6, reb: 4, ast: 0, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.29, zScores: { pts: -0.224, reb: 0.292, ast: -0.763, stl: 0.214, blk: 0.93, tpm: 0.871, fgImpact: -0.257, ftImpact: 0, to: -0.779 } },
          { name: "Collin Chandler", min: 26, pts: 12, reb: 1, ast: 2, stl: 4, blk: 1, to: 1, tpm: 2, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 6, zScores: { pts: 0.631, reb: -0.773, ast: 0.24, stl: 3.052, blk: 0.93, tpm: 0.871, fgImpact: 0.219, ftImpact: 0.786, to: 0.048 } },
          { name: "Robert Wright III", min: 32, pts: 21, reb: 4, ast: 6, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 9, fga: 19, ftm: 1, fta: 2, composite: 3.74, zScores: { pts: 1.913, reb: 0.292, ast: 2.246, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: 0.126, ftImpact: -0.577, to: 0.048 } },
          { name: "Brooks Bahr", min: 10, pts: 3, reb: 0, ast: 3, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: 0.57, zScores: { pts: -0.652, reb: -1.128, ast: 0.741, stl: -0.732, blk: 0.93, tpm: 0.116, fgImpact: 0.421, ftImpact: 0, to: 0.874 } },
          { name: "Dean Rueckert", min: 3, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.079, reb: -1.128, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Khadim Mboup", min: 15, pts: 4, reb: 5, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.84, zScores: { pts: -0.509, reb: 0.647, ast: -0.763, stl: -0.732, blk: 2.307, tpm: -0.639, fgImpact: 0.475, ftImpact: 0, to: 0.048 } },
          { name: "Jake Wahlin", min: 21, pts: 7, reb: 6, ast: 2, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: 0.92, zScores: { pts: -0.082, reb: 1.002, ast: 0.24, stl: 0.214, blk: -0.447, tpm: 0.871, fgImpact: 0.475, ftImpact: -0.577, to: -0.779 } },
          { name: "Nate Pickens", min: 19, pts: 15, reb: 2, ast: 1, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 6, ftm: 4, fta: 5, composite: 4.32, zScores: { pts: 1.058, reb: -0.418, ast: -0.261, stl: 1.16, blk: -0.447, tpm: 1.626, fgImpact: 0.951, ftImpact: 0.602, to: 0.048 } }
        ]
      }
    },
      {
      id: "401920866",
      line: "NJIT Highlanders 64 @ Rutgers Scarlet Knights 101 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NJIT", name: "NJIT Highlanders", score: 64,
        players: [

        ]
      },
      home: {
        abbr: "Rut", name: "Rutgers Scarlet Knights", score: 101,
        players: [
          { name: "Christian Gurdak", min: 18, pts: 12, reb: 4, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 4, fga: 8, ftm: 4, fta: 6, composite: 1.82, zScores: { pts: 0.631, reb: 0.292, ast: -0.763, stl: -0.732, blk: 2.307, tpm: -0.639, fgImpact: 0.219, ftImpact: -0.369, to: 0.874 } },
          { name: "Lino Mark", min: 21, pts: 17, reb: 8, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 9, ftm: 7, fta: 9, composite: 5.75, zScores: { pts: 1.343, reb: 1.712, ast: 1.243, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.639, ftImpact: 0.81, to: 0.874 } },
          { name: "Darin Smith Jr.", min: 15, pts: 9, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: -1.06, zScores: { pts: 0.203, reb: 0.292, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.219, ftImpact: 0, to: 0.048 } },
          { name: "Tariq Francis", min: 26, pts: 17, reb: 1, ast: 6, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 8, ftm: 4, fta: 4, composite: 6.71, zScores: { pts: 1.343, reb: -0.773, ast: 2.246, stl: -0.732, blk: -0.447, tpm: 1.626, fgImpact: 1.005, ftImpact: 1.572, to: 0.874 } },
          { name: "Darren Buchanan Jr.", min: 24, pts: 10, reb: 5, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 4, fta: 6, composite: 1.9, zScores: { pts: 0.346, reb: 0.647, ast: 0.741, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.53, ftImpact: -0.369, to: 0.874 } },
          { name: "Martin Tonejc", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -6.04, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: -1.605 } },
          { name: "Mervedi Miteo", min: 13, pts: 2, reb: 5, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -0.97, zScores: { pts: -0.794, reb: 0.647, ast: -0.763, stl: -0.732, blk: 2.307, tpm: -0.639, fgImpact: -1.043, ftImpact: 0, to: 0.048 } },
          { name: "Will Sydnor", min: 7, pts: 10, reb: 2, ast: 0, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 3, ftm: 5, fta: 6, composite: 2.06, zScores: { pts: 0.346, reb: -0.418, ast: -0.763, stl: 1.16, blk: 0.93, tpm: 0.116, fgImpact: 0.475, ftImpact: 0.995, to: -0.779 } },
          { name: "Gevonte Ware", min: 9, pts: 5, reb: 5, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: 0.22, zScores: { pts: -0.367, reb: 0.647, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 0.841, ftImpact: -0.577, to: 0.874 } },
          { name: "Diego Garavaglia", min: 11, pts: 3, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.26, zScores: { pts: -0.652, reb: 0.292, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.055, ftImpact: 0, to: 0.874 } },
          { name: "Kaden Powers", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.11, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.048 } },
          { name: "Max Fradkin", min: 3, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -2.49, zScores: { pts: -0.794, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0.786, to: 0.874 } },
          { name: "Imahri Wooten", min: 7, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.79, zScores: { pts: -1.079, reb: -0.773, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: 0, to: 0.874 } },
          { name: "Jamichael Davis", min: 21, pts: 8, reb: 1, ast: 1, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 4, fta: 6, composite: 0.3, zScores: { pts: 0.061, reb: -0.773, ast: -0.261, stl: 2.106, blk: -0.447, tpm: -0.639, fgImpact: -0.257, ftImpact: -0.369, to: 0.874 } },
          { name: "Rasheed Jones", min: 16, pts: 6, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 0.5, zScores: { pts: -0.224, reb: -0.418, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: 0.841, ftImpact: 0, to: 0.874 } }
        ]
      }
    },
      {
      id: "401909514",
      line: "Delaware State Hornets 78 @ Georgetown Hoyas 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DSU", name: "Delaware State Hornets", score: 78,
        players: [

        ]
      },
      home: {
        abbr: "GTown", name: "Georgetown Hoyas", score: 83,
        players: [
          { name: "Caleb Williams", min: 25, pts: 10, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 0.35, zScores: { pts: 0.346, reb: -0.063, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: -0.202, ftImpact: 0.786, to: 0.048 } },
          { name: "Vince Iwuchukwu", min: 27, pts: 28, reb: 13, ast: 0, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 9, fga: 11, ftm: 10, fta: 11, composite: 12.75, zScores: { pts: 2.91, reb: 3.487, ast: -0.763, stl: 0.214, blk: 2.307, tpm: -0.639, fgImpact: 3.054, ftImpact: 2.96, to: -0.779 } },
          { name: "Kayvaun Mulready", min: 38, pts: 14, reb: 6, ast: 2, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 12, ftm: 1, fta: 2, composite: 1.74, zScores: { pts: 0.916, reb: 1.002, ast: 0.24, stl: 0.214, blk: -0.447, tpm: 1.626, fgImpact: -0.459, ftImpact: -0.577, to: -0.779 } },
          { name: "Elmarko Jackson", min: 25, pts: 5, reb: 2, ast: 1, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 7, ftm: 1, fta: 1, composite: -4.94, zScores: { pts: -0.367, reb: -0.418, ast: -0.261, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -0.989, ftImpact: 0.393, to: -2.431 } },
          { name: "Jaland Lowe", min: 38, pts: 10, reb: 3, ast: 15, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 8, ftm: 6, fta: 8, composite: 5.83, zScores: { pts: 0.346, reb: -0.063, ast: 6.759, stl: 0.214, blk: 0.93, tpm: -0.639, fgImpact: -1.355, ftImpact: 0.417, to: -0.779 } },
          { name: "Josiah Parker", min: 15, pts: 13, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 5, ftm: 0, fta: 0, composite: 2.84, zScores: { pts: 0.773, reb: -0.773, ast: 0.24, stl: -0.732, blk: -0.447, tpm: 1.626, fgImpact: 2.103, ftImpact: 0, to: 0.048 } },
          { name: "Justin Caldwell", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -5.85, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: -1.941, to: 0.874 } },
          { name: "Chol Machot", min: 10, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -3.66, zScores: { pts: -0.652, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.311, ftImpact: -0.577, to: 0.874 } },
          { name: "Gabriel Landeira", min: 15, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.92, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Mason Moses", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } }
        ]
      }
    },
      {
      id: "401925781",
      line: "Washington State Cougars 71 @ Duquesne Dukes 72 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WaSt", name: "Washington State Cougars", score: 71,
        players: [
          { name: "Ronnie Harrison", min: 22, pts: 6, reb: 5, ast: 2, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: -3.57, zScores: { pts: -0.224, reb: 0.647, ast: 0.24, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -0.989, ftImpact: -0.577, to: -1.605 } },
          { name: "Ladji Dembele", min: 18, pts: 0, reb: 4, ast: 0, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.55, zScores: { pts: -1.079, reb: 0.292, ast: -0.763, stl: 0.214, blk: 0.93, tpm: -0.639, fgImpact: -0.732, ftImpact: 0, to: -0.779 } },
          { name: "Lazerek Houston", min: 29, pts: 12, reb: 1, ast: 5, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 2.83, zScores: { pts: 0.631, reb: -0.773, ast: 1.744, stl: 0.214, blk: -0.447, tpm: 0.871, fgImpact: 0.585, ftImpact: 0.786, to: -0.779 } },
          { name: "Sebastian Akins", min: 22, pts: 9, reb: 5, ast: 3, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 9, ftm: 1, fta: 2, composite: 1.71, zScores: { pts: 0.203, reb: 0.647, ast: 0.741, stl: 1.16, blk: -0.447, tpm: 0.871, fgImpact: -0.934, ftImpact: -0.577, to: 0.048 } },
          { name: "Jaylen Harrell", min: 28, pts: 19, reb: 4, ast: 5, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 7, fga: 10, ftm: 2, fta: 2, composite: 8.56, zScores: { pts: 1.628, reb: 0.292, ast: 1.744, stl: 0.214, blk: -0.447, tpm: 1.626, fgImpact: 1.846, ftImpact: 0.786, to: 0.874 } },
          { name: "Mohamed Sankhe", min: 13, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 3, composite: -2.96, zScores: { pts: -0.794, reb: -0.773, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: -0.184, to: 0.874 } },
          { name: "Dominik Robinson", min: 9, pts: 4, reb: 5, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -2.38, zScores: { pts: -0.509, reb: 0.647, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.055, ftImpact: 0.786, to: -0.779 } },
          { name: "Tyler Kropp", min: 15, pts: 10, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: -0.64, zScores: { pts: 0.346, reb: -1.128, ast: -0.763, stl: 0.214, blk: -0.447, tpm: 0.871, fgImpact: 0.219, ftImpact: 0, to: 0.048 } },
          { name: "RJ Jones", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.74, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Casey Jones", min: 13, pts: 2, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.59, zScores: { pts: -0.794, reb: -1.128, ast: -0.261, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.421, ftImpact: 0, to: 0.048 } },
          { name: "Jamari Phillips", min: 25, pts: 7, reb: 2, ast: 2, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 1.89, zScores: { pts: -0.082, reb: -0.418, ast: 0.24, stl: 1.16, blk: 0.93, tpm: 0.116, fgImpact: -0.934, ftImpact: 0, to: 0.874 } }
        ]
      },
      home: {
        abbr: "Duques", name: "Duquesne Dukes", score: 72,
        players: [
          { name: "Kerem Konan", min: 37, pts: 13, reb: 5, ast: 9, stl: 0, blk: 2, to: 3, tpm: 0, fgm: 4, fga: 7, ftm: 5, fta: 9, composite: 3.17, zScores: { pts: 0.773, reb: 0.647, ast: 3.75, stl: -0.732, blk: 2.307, tpm: -0.639, fgImpact: 0.585, ftImpact: -1.917, to: -1.605 } },
          { name: "Yoav Berman", min: 35, pts: 10, reb: 7, ast: 2, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: 0.81, zScores: { pts: 0.346, reb: 1.357, ast: 0.24, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: 0.219, ftImpact: -0.577, to: -1.605 } },
          { name: "Ege Demir", min: 20, pts: 7, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 1, composite: -1.27, zScores: { pts: -0.082, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.896, ftImpact: 0.393, to: 0.874 } },
          { name: "Izaiah Pasha", min: 16, pts: 5, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -2.66, zScores: { pts: -0.367, reb: -1.128, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -0.677, ftImpact: 0.786, to: 0.048 } },
          { name: "Arness Lawson", min: 29, pts: 12, reb: 6, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 8, ftm: 2, fta: 3, composite: 1.87, zScores: { pts: 0.631, reb: 1.002, ast: 0.24, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 1.005, ftImpact: -0.184, to: 0.048 } },
          { name: "Chaim Galbut", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.75, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.048 } },
          { name: "Stephen Olowoniyi", min: 18, pts: 10, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 4, fta: 6, composite: -1.51, zScores: { pts: 0.346, reb: -0.063, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.164, ftImpact: -0.369, to: 0.048 } },
          { name: "Jackson Williams", min: 4, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.079, reb: -1.128, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Brandon Hall", min: 7, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.4, zScores: { pts: -1.079, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.048 } },
          { name: "Josh Smith", min: 17, pts: 13, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 6, ftm: 5, fta: 6, composite: -0.54, zScores: { pts: 0.773, reb: -1.128, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: 0.164, ftImpact: 0.995, to: -0.779 } },
          { name: "Jake DiMichele", min: 15, pts: 2, reb: 1, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.65, zScores: { pts: -0.794, reb: -0.773, ast: -0.261, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: 0.055, ftImpact: 0, to: 0.048 } }
        ]
      }
    },
      {
      id: "401925773",
      line: "Bradley Braves 45 @ Davidson Wildcats 62 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Brad", name: "Bradley Braves", score: 45,
        players: [
          { name: "Josh Ibukunoluwa", min: 25, pts: 7, reb: 9, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 10, ftm: 1, fta: 2, composite: -1.3, zScores: { pts: -0.082, reb: 2.067, ast: 0.24, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -1.3, ftImpact: -0.577, to: -0.779 } },
          { name: "Xander Alarie", min: 13, pts: 2, reb: 2, ast: 0, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.39, zScores: { pts: -0.794, reb: -0.418, ast: -0.763, stl: 0.214, blk: 0.93, tpm: -0.639, fgImpact: -0.311, ftImpact: 0, to: -1.605 } },
          { name: "Max Gaspa", min: 18, pts: 5, reb: 1, ast: 1, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.84, zScores: { pts: -0.367, reb: -0.773, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: 0.109, ftImpact: 0, to: -2.431 } },
          { name: "Timoty van der Knaap", min: 22, pts: 0, reb: 2, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 11, ftm: 0, fta: 0, composite: -4.91, zScores: { pts: -1.079, reb: -0.418, ast: -0.763, stl: 0.214, blk: 0.93, tpm: -0.639, fgImpact: -4.026, ftImpact: 0, to: 0.874 } },
          { name: "Trevon Payton", min: 31, pts: 11, reb: 2, ast: 1, stl: 3, blk: 0, to: 4, tpm: 2, fgm: 4, fga: 10, ftm: 1, fta: 1, composite: -0.21, zScores: { pts: 0.488, reb: -0.418, ast: -0.261, stl: 2.106, blk: -0.447, tpm: 0.871, fgImpact: -0.513, ftImpact: 0.393, to: -2.431 } },
          { name: "Ben Thornbrue", min: 21, pts: 9, reb: 4, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: -0.44, zScores: { pts: 0.203, reb: 0.292, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: 0.219, ftImpact: 0, to: -0.779 } },
          { name: "Noah Williams", min: 28, pts: 7, reb: 6, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 4, fta: 5, composite: 0.99, zScores: { pts: -0.082, reb: 1.002, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.421, ftImpact: 0.602, to: 0.874 } },
          { name: "Gustavo Guimares", min: 10, pts: 2, reb: 6, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.81, zScores: { pts: -0.794, reb: 1.002, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.311, ftImpact: 0, to: 0.874 } },
          { name: "Dimitrije Pavlovic", min: 14, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.43, zScores: { pts: -1.079, reb: -1.128, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: -0.779 } },
          { name: "Kyle Grill", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Jackson Seastrunk", min: 13, pts: 2, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.58, zScores: { pts: -0.794, reb: -0.773, ast: 0.24, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.311, ftImpact: 0, to: 0.874 } }
        ]
      },
      home: {
        abbr: "David", name: "Davidson Wildcats", score: 62,
        players: [
          { name: "Josh Scovens", min: 28, pts: 12, reb: 5, ast: 2, stl: 4, blk: 2, to: 2, tpm: 0, fgm: 5, fga: 8, ftm: 2, fta: 3, composite: 6.28, zScores: { pts: 0.631, reb: 0.647, ast: 0.24, stl: 3.052, blk: 2.307, tpm: -0.639, fgImpact: 1.005, ftImpact: -0.184, to: -0.779 } },
          { name: "Jackson Keith", min: 13, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.97, zScores: { pts: -0.367, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.475, ftImpact: 0, to: 0.874 } },
          { name: "Ian Platteeuw", min: 28, pts: 12, reb: 14, ast: 1, stl: 2, blk: 3, to: 4, tpm: 0, fgm: 4, fga: 8, ftm: 4, fta: 9, composite: 2.93, zScores: { pts: 0.631, reb: 3.842, ast: -0.261, stl: 1.16, blk: 3.684, tpm: -0.639, fgImpact: 0.219, ftImpact: -3.28, to: -2.431 } },
          { name: "Sam Brown", min: 31, pts: 4, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 11, ftm: 2, fta: 2, composite: -3.11, zScores: { pts: -0.509, reb: -0.063, ast: 0.741, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -3.239, ftImpact: 0.786, to: 0.048 } },
          { name: "Nick Janowski", min: 36, pts: 12, reb: 6, ast: 0, stl: 3, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 15, ftm: 0, fta: 1, composite: -0.73, zScores: { pts: 0.631, reb: 1.002, ast: -0.763, stl: 2.106, blk: -0.447, tpm: 0.871, fgImpact: -1.557, ftImpact: -0.97, to: -1.605 } },
          { name: "Tom Stoiber", min: 16, pts: 3, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.11, zScores: { pts: -0.652, reb: -0.063, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.055, ftImpact: 0, to: 0.874 } },
          { name: "JaQualon Roberts", min: 9, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -5.5, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: -1.941, to: 0.874 } },
          { name: "Eetu Heinonen", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -3.22, zScores: { pts: -0.794, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: 0.786, to: 0.874 } },
          { name: "Nick Coval", min: 9, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.88, zScores: { pts: -1.079, reb: -0.773, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "John Carter Jr.", min: 23, pts: 12, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 2.49, zScores: { pts: 0.631, reb: -0.063, ast: 0.24, stl: 0.214, blk: -0.447, tpm: 2.382, fgImpact: -0.513, ftImpact: 0, to: 0.048 } }
        ]
      }
    },
      {
      id: "401921774",
      line: "La Salle Explorers 59 @ Villanova Wildcats 80 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LaSal", name: "La Salle Explorers", score: 59,
        players: [
          { name: "Anthony Finkley", min: 15, pts: 2, reb: 5, ast: 3, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 2, composite: -1.44, zScores: { pts: -0.794, reb: 0.647, ast: 0.741, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: -1.043, ftImpact: -1.941, to: 0.874 } },
          { name: "Noah Collier", min: 29, pts: 11, reb: 7, ast: 0, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 8, ftm: 3, fta: 4, composite: 1.24, zScores: { pts: 0.488, reb: 1.357, ast: -0.763, stl: 0.214, blk: 0.93, tpm: -0.639, fgImpact: 0.219, ftImpact: 0.209, to: -0.779 } },
          { name: "Jaden Johnson", min: 27, pts: 1, reb: 1, ast: 4, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 5, ftm: 1, fta: 2, composite: -5.35, zScores: { pts: -0.936, reb: -0.773, ast: 1.243, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -1.83, ftImpact: -0.577, to: -1.605 } },
          { name: "Kam Burton", min: 22, pts: 8, reb: 3, ast: 1, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 13, ftm: 0, fta: 0, composite: -3.63, zScores: { pts: 0.061, reb: -0.063, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 0.871, fgImpact: -2.398, ftImpact: 0, to: -1.605 } },
          { name: "Rob Dockery", min: 11, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.62, zScores: { pts: -0.367, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.475, ftImpact: 0, to: -0.779 } },
          { name: "Bowyn Beatty", min: 10, pts: 0, reb: 9, ast: 1, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.32, zScores: { pts: -1.079, reb: 2.067, ast: -0.261, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: -1.605 } },
          { name: "Vice Zanki", min: 17, pts: 6, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: -2.26, zScores: { pts: -0.224, reb: -1.128, ast: 0.24, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.989, ftImpact: 0.786, to: 0.874 } },
          { name: "RJ Smith", min: 22, pts: 13, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 6, fga: 12, ftm: 0, fta: 0, composite: -0.48, zScores: { pts: 0.773, reb: -1.128, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.328, ftImpact: 0, to: 0.874 } },
          { name: "Devin Booker", min: 26, pts: 6, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 3, composite: -2.3, zScores: { pts: -0.224, reb: -0.063, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.623, ftImpact: -0.184, to: 0.874 } },
          { name: "Trey Moss", min: 21, pts: 7, reb: 6, ast: 1, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: 1.55, zScores: { pts: -0.082, reb: 1.002, ast: -0.261, stl: 1.16, blk: -0.447, tpm: 0.871, fgImpact: -0.989, ftImpact: -0.577, to: 0.874 } }
        ]
      },
      home: {
        abbr: "Vill", name: "Villanova Wildcats", score: 80,
        players: [
          { name: "Devin Royal", min: 29, pts: 15, reb: 10, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 12, ftm: 6, fta: 8, composite: 2.38, zScores: { pts: 1.058, reb: 2.422, ast: 0.741, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -1.245, ftImpact: 0.417, to: 0.048 } },
          { name: "Luigi Suigo", min: 31, pts: 19, reb: 12, ast: 5, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 8, fga: 12, ftm: 3, fta: 5, composite: 10.4, zScores: { pts: 1.628, reb: 3.132, ast: 1.744, stl: 0.214, blk: 2.307, tpm: -0.639, fgImpact: 1.901, ftImpact: -0.762, to: 0.874 } },
          { name: "Tyler Perkins", min: 33, pts: 10, reb: 3, ast: 3, stl: 2, blk: 0, to: 6, tpm: 2, fgm: 4, fga: 11, ftm: 0, fta: 1, composite: -3.32, zScores: { pts: 0.346, reb: -0.063, ast: 0.741, stl: 1.16, blk: -0.447, tpm: 0.871, fgImpact: -0.879, ftImpact: -0.97, to: -4.083 } },
          { name: "Jake Fiegen", min: 31, pts: 10, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 0.55, zScores: { pts: 0.346, reb: -1.128, ast: -0.763, stl: 0.214, blk: -0.447, tpm: 0.871, fgImpact: 0.585, ftImpact: 0, to: 0.874 } },
          { name: "Elijah Crawford", min: 32, pts: 5, reb: 2, ast: 6, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 1, composite: 0.65, zScores: { pts: -0.367, reb: -0.418, ast: 2.246, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: 0.109, ftImpact: -0.97, to: -0.779 } },
          { name: "Kwame Evans Jr.", min: 11, pts: 8, reb: 3, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 2, fta: 2, composite: 2.72, zScores: { pts: 0.061, reb: -0.063, ast: 0.24, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 1.262, ftImpact: 0.786, to: 0.874 } },
          { name: "Nico Onyekwere", min: 8, pts: 4, reb: 2, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.24, zScores: { pts: -0.509, reb: -0.418, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 0.841, ftImpact: 0, to: 0.048 } },
          { name: "Adam Oumiddoch", min: 16, pts: 4, reb: 4, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 1, composite: -1.84, zScores: { pts: -0.509, reb: 0.292, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.109, ftImpact: -0.97, to: 0.874 } },
          { name: "Darryl Simmons II", min: 9, pts: 5, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.84, zScores: { pts: -0.367, reb: -1.128, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.109, ftImpact: 0, to: 0.874 } }
        ]
      }
    },
      {
      id: "401921755",
      line: "South Alabama Jaguars 69 @ UCF Knights 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "USA", name: "South Alabama Jaguars", score: 69,
        players: [

        ]
      },
      home: {
        abbr: "UCF", name: "UCF Knights", score: 76,
        players: [
          { name: "Isaiah Malone", min: 22, pts: 3, reb: 7, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -3.31, zScores: { pts: -0.652, reb: 1.357, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -1.409, ftImpact: 0, to: -0.779 } },
          { name: "John Bol", min: 11, pts: 0, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.19, zScores: { pts: -1.079, reb: -0.418, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Arturo Dean", min: 27, pts: 6, reb: 1, ast: 1, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 1, fta: 2, composite: 0.19, zScores: { pts: -0.224, reb: -0.773, ast: -0.261, stl: 2.106, blk: -0.447, tpm: 0.116, fgImpact: -0.623, ftImpact: -0.577, to: 0.874 } },
          { name: "Riley Kugel", min: 14, pts: 5, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -0.367, reb: -0.773, ast: 0.24, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -1.355, ftImpact: 0, to: -0.779 } },
          { name: "Dior Johnson", min: 32, pts: 24, reb: 0, ast: 9, stl: 5, blk: 0, to: 0, tpm: 4, fgm: 7, fga: 12, ftm: 6, fta: 7, composite: 14.27, zScores: { pts: 2.34, reb: -1.128, ast: 3.75, stl: 3.998, blk: -0.447, tpm: 2.382, fgImpact: 1.115, ftImpact: 1.388, to: 0.874 } },
          { name: "Lewis Walker", min: 20, pts: 4, reb: 3, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.88, zScores: { pts: -0.509, reb: -0.063, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.109, ftImpact: 0, to: -0.779 } },
          { name: "Jason Asemota", min: 9, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.07, zScores: { pts: -1.079, reb: -0.418, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Churchill Abass", min: 18, pts: 4, reb: 8, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: 2.58, zScores: { pts: -0.509, reb: 1.712, ast: -0.261, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 0.421, ftImpact: 0.786, to: 0.874 } },
          { name: "Elijah Hulsewe", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 4, composite: -7.81, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: -3.882, to: 0.874 } },
          { name: "Carmelo Pacheco", min: 30, pts: 24, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 8, fgm: 8, fga: 12, ftm: 0, fta: 0, composite: 6.3, zScores: { pts: 2.34, reb: -1.128, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 5.402, fgImpact: 1.901, ftImpact: 0, to: -0.779 } },
          { name: "Cayden Vasko", min: 12, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.9, zScores: { pts: -0.224, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: 0.475, ftImpact: 0, to: 0.048 } }
        ]
      }
    },
      {
      id: "401920378",
      line: "Virginia Tech Hokies 93 @ Iowa Hawkeyes 88 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "VaTec", name: "Virginia Tech Hokies", score: 93,
        players: [
          { name: "Miles Heide", min: 10, pts: 1, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -3.28, zScores: { pts: -0.936, reb: -0.063, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: -0.577, to: 0.874 } },
          { name: "Amani Hansberry", min: 40, pts: 16, reb: 3, ast: 1, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 7, fga: 12, ftm: 0, fta: 2, composite: -2.69, zScores: { pts: 1.2, reb: -0.063, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: 1.115, ftImpact: -1.941, to: -2.431 } },
          { name: "Jaylen Curry", min: 31, pts: 25, reb: 2, ast: 1, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 9, fga: 18, ftm: 5, fta: 7, composite: 0.41, zScores: { pts: 2.483, reb: -0.418, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: 0.492, ftImpact: 0.024, to: -1.605 } },
          { name: "Ben Hammond", min: 33, pts: 32, reb: 5, ast: 4, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 9, fga: 16, ftm: 11, fta: 11, composite: 13.18, zScores: { pts: 3.48, reb: 0.647, ast: 1.243, stl: 0.214, blk: -0.447, tpm: 1.626, fgImpact: 1.224, ftImpact: 4.323, to: 0.874 } },
          { name: "Isaiah Elohim", min: 36, pts: 12, reb: 6, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 4, fta: 5, composite: 0.29, zScores: { pts: 0.631, reb: 1.002, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.585, ftImpact: 0.602, to: 0.048 } },
          { name: "Sin'Cere Jones", min: 12, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.4, zScores: { pts: -1.079, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.048 } },
          { name: "Kuol Atak", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Musa Sagnia", min: 11, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.38, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Solomon Davis", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Tyler Johnson", min: 31, pts: 3, reb: 4, ast: 2, stl: 3, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 3, fta: 4, composite: 2.99, zScores: { pts: -0.652, reb: 0.292, ast: 0.24, stl: 2.106, blk: 0.93, tpm: -0.639, fgImpact: -0.366, ftImpact: 0.209, to: 0.874 } },
          { name: "Butta Johnson", min: 15, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -3.79, zScores: { pts: -0.509, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.421, ftImpact: 0.786, to: -0.779 } }
        ]
      },
      home: {
        abbr: "Iowa", name: "Iowa Hawkeyes", score: 88,
        players: [
          { name: "Cam Manyawu", min: 15, pts: 5, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 4, composite: -4.44, zScores: { pts: -0.367, reb: 0.292, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -0.257, ftImpact: -2.518, to: 0.048 } },
          { name: "Cooper Koch", min: 45, pts: 26, reb: 7, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 11, ftm: 15, fta: 17, composite: 6.24, zScores: { pts: 2.625, reb: 1.357, ast: 0.24, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -0.093, ftImpact: 3.954, to: -0.779 } },
          { name: "Tate Sage", min: 26, pts: 9, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: -1.18, zScores: { pts: 0.203, reb: -0.773, ast: -0.763, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: -0.568, ftImpact: 0.786, to: 0.048 } },
          { name: "Isaia Howard", min: 41, pts: 13, reb: 15, ast: 0, stl: 3, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 8, ftm: 4, fta: 6, composite: 5.78, zScores: { pts: 0.773, reb: 4.197, ast: -0.763, stl: 2.106, blk: -0.447, tpm: 1.626, fgImpact: -0.568, ftImpact: -0.369, to: -0.779 } },
          { name: "Kael Combs", min: 22, pts: 10, reb: 0, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 4, ftm: 2, fta: 4, composite: -1.28, zScores: { pts: 0.346, reb: -1.128, ast: 0.741, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 1.683, ftImpact: -1.155, to: 0.048 } },
          { name: "Trevin Jirak", min: 13, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.9, zScores: { pts: -1.079, reb: -0.773, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: -1.605 } },
          { name: "Andrew McKeever", min: 10, pts: 5, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 5, composite: -3.94, zScores: { pts: -0.367, reb: 0.647, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.475, ftImpact: -3.489, to: 0.874 } },
          { name: "Jaidyn Coon", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Ty'Reek Coleman", min: 31, pts: 20, reb: 3, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 7, fga: 10, ftm: 6, fta: 9, composite: 0.59, zScores: { pts: 1.77, reb: -0.063, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 1.846, ftImpact: -0.553, to: -0.779 } },
          { name: "Peyton McCollum", min: 17, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.94, zScores: { pts: -1.079, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: 0, to: 0.874 } }
        ]
      }
    },
      {
      id: "401920356",
      line: "Harvard Crimson 70 @ Northeastern Huskies 74 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "Harv", name: "Harvard Crimson", score: 70,
        players: [
          { name: "Luca Ace-Nasteski", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Thomas Batties II", min: 40, pts: 21, reb: 7, ast: 5, stl: 2, blk: 3, to: 4, tpm: 0, fgm: 7, fga: 15, ftm: 7, fta: 8, composite: 8.59, zScores: { pts: 1.913, reb: 1.357, ast: 1.744, stl: 1.16, blk: 3.684, tpm: -0.639, fgImpact: 0.017, ftImpact: 1.781, to: -2.431 } },
          { name: "Tey Barbour", min: 37, pts: 5, reb: 7, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 9, ftm: 0, fta: 1, composite: -2.03, zScores: { pts: -0.367, reb: 1.357, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: -1.721, ftImpact: -0.97, to: 0.048 } },
          { name: "Ben Eisendrath", min: 42, pts: 12, reb: 6, ast: 5, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 10, ftm: 2, fta: 2, composite: 3.39, zScores: { pts: 0.631, reb: 1.002, ast: 1.744, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: -0.513, ftImpact: 0.786, to: 0.048 } },
          { name: "Robert Hinton", min: 37, pts: 14, reb: 1, ast: 1, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 6, fga: 13, ftm: 1, fta: 2, composite: -2.46, zScores: { pts: 0.916, reb: -0.773, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: -0.038, ftImpact: -0.577, to: -1.605 } },
          { name: "Julian Adigun", min: 20, pts: 2, reb: 6, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -0.43, zScores: { pts: -0.794, reb: 1.002, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: -0.311, ftImpact: 0, to: 0.874 } },
          { name: "Frankie Mannino", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Jason Singleton", min: 32, pts: 16, reb: 2, ast: 3, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 6, fga: 13, ftm: 2, fta: 6, composite: 1.28, zScores: { pts: 1.2, reb: -0.418, ast: 0.741, stl: 0.214, blk: 0.93, tpm: 0.871, fgImpact: -0.038, ftImpact: -3.096, to: 0.874 } },
          { name: "Xavier Nesbitt", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } }
        ]
      },
      home: {
        abbr: "NE", name: "Northeastern Huskies", score: 74,
        players: [

        ]
      }
    },
      {
      id: "401920306",
      line: "Eastern Kentucky Colonels 71 @ Georgia Tech Yellow Jackets 85 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "EKU", name: "Eastern Kentucky Colonels", score: 71,
        players: [

        ]
      },
      home: {
        abbr: "GaTec", name: "Georgia Tech Yellow Jackets", score: 85,
        players: [
          { name: "Tylis Jordan", min: 35, pts: 27, reb: 6, ast: 2, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 8, fga: 12, ftm: 10, fta: 11, composite: 9.75, zScores: { pts: 2.768, reb: 1.002, ast: 0.24, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: 1.901, ftImpact: 2.96, to: 0.048 } },
          { name: "Jackson Fields", min: 21, pts: 8, reb: 7, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 2.31, zScores: { pts: 0.061, reb: 1.357, ast: 0.24, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 0.219, ftImpact: 0, to: 0.874 } },
          { name: "Colby Garland", min: 27, pts: 17, reb: 5, ast: 1, stl: 1, blk: 0, to: 5, tpm: 0, fgm: 5, fga: 10, ftm: 7, fta: 10, composite: -2.29, zScores: { pts: 1.343, reb: 0.647, ast: -0.261, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.273, ftImpact: -0.16, to: -3.257 } },
          { name: "Nasir Whitlock", min: 26, pts: 5, reb: 7, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -0.26, zScores: { pts: -0.367, reb: 1.357, ast: -0.261, stl: -0.732, blk: 0.93, tpm: 0.116, fgImpact: -1.355, ftImpact: 0, to: 0.048 } },
          { name: "Kam Craft", min: 26, pts: 8, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 11, ftm: 0, fta: 0, composite: -2.54, zScores: { pts: 0.061, reb: -0.418, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: -1.666, ftImpact: 0, to: 0.048 } },
          { name: "Ilja Kurucs", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Moustapha Diop", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.92, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Victor Valdes", min: 28, pts: 17, reb: 6, ast: 6, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 7, ftm: 4, fta: 6, composite: 7.98, zScores: { pts: 1.343, reb: 1.002, ast: 2.246, stl: 1.16, blk: -0.447, tpm: 1.626, fgImpact: 1.371, ftImpact: -0.369, to: 0.048 } },
          { name: "Cole Kirouac", min: 13, pts: 2, reb: 7, ast: 0, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 1.45, zScores: { pts: -0.794, reb: 1.357, ast: -0.763, stl: 1.16, blk: 0.93, tpm: -0.639, fgImpact: -0.677, ftImpact: 0, to: 0.874 } },
          { name: "Jackson McVey", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Courtland Muldrew", min: 2, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -4.71, zScores: { pts: -0.936, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: -0.577, to: 0.874 } },
          { name: "Kayden Allen", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.38, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Kaiden Bailey", min: 10, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -1.079, reb: -1.128, ast: -0.261, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -1.098, ftImpact: 0, to: 0.874 } }
        ]
      }
    },
      {
      id: "401920063",
      line: "Maine Black Bears 65 @ Rhode Island Rams 71 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ME", name: "Maine Black Bears", score: 65,
        players: [

        ]
      },
      home: {
        abbr: "URI", name: "Rhode Island Rams", score: 71,
        players: [
          { name: "Matas Deniusas", min: 24, pts: 12, reb: 5, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 8, fta: 10, composite: 1.58, zScores: { pts: 0.631, reb: 0.647, ast: -0.763, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: -0.257, ftImpact: 1.203, to: 0.048 } },
          { name: "Jonah Hinton", min: 32, pts: 10, reb: 2, ast: 0, stl: 2, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 12, ftm: 2, fta: 2, composite: -2.1, zScores: { pts: 0.346, reb: -0.418, ast: -0.763, stl: 1.16, blk: -0.447, tpm: 0.871, fgImpact: -2.032, ftImpact: 0.786, to: -1.605 } },
          { name: "Jason Fontenet II", min: 31, pts: 13, reb: 12, ast: 1, stl: 3, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 8, ftm: 7, fta: 8, composite: 4.27, zScores: { pts: 0.773, reb: 3.132, ast: -0.261, stl: 2.106, blk: -0.447, tpm: -0.639, fgImpact: -0.568, ftImpact: 1.781, to: -1.605 } },
          { name: "Dylan Williamson", min: 33, pts: 18, reb: 3, ast: 5, stl: 3, blk: 0, to: 0, tpm: 5, fgm: 6, fga: 16, ftm: 1, fta: 2, composite: 7.12, zScores: { pts: 1.485, reb: -0.063, ast: 1.744, stl: 2.106, blk: -0.447, tpm: 3.137, fgImpact: -1.136, ftImpact: -0.577, to: 0.874 } },
          { name: "Jahmere Tripp", min: 27, pts: 10, reb: 6, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 7, ftm: 3, fta: 4, composite: 1.2, zScores: { pts: 0.346, reb: 1.002, ast: 0.741, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: -0.202, ftImpact: 0.209, to: -0.779 } },
          { name: "Nedas Raupelis", min: 15, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.74, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Javon Perry", min: 14, pts: 3, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -2.19, zScores: { pts: -0.652, reb: 0.647, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.421, ftImpact: -0.577, to: 0.048 } },
          { name: "Jalen Harper", min: 7, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.3, zScores: { pts: -1.079, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -1.098, ftImpact: 0, to: 0.874 } },
          { name: "Jaen Chatman", min: 8, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.4, zScores: { pts: -0.794, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.055, ftImpact: 0, to: 0.048 } },
          { name: "Barrett Loer", min: 9, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.32, zScores: { pts: -0.652, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.055, ftImpact: 0, to: 0.874 } }
        ]
      }
    },
      {
      id: "401918957",
      line: "Presbyterian Blue Hose 60 @ NC State Wolfpack 94 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PRES", name: "Presbyterian Blue Hose", score: 60,
        players: [

        ]
      },
      home: {
        abbr: "NCSU", name: "NC State Wolfpack", score: 94,
        players: [
          { name: "Kyle Evans", min: 16, pts: 2, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.49, zScores: { pts: -0.794, reb: 0.647, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.311, ftImpact: 0, to: 0.048 } },
          { name: "Ven-Allen Lubin", min: 25, pts: 21, reb: 10, ast: 1, stl: 0, blk: 2, to: 4, tpm: 0, fgm: 10, fga: 17, ftm: 1, fta: 2, composite: 3.65, zScores: { pts: 1.913, reb: 2.422, ast: -0.261, stl: -0.732, blk: 2.307, tpm: -0.639, fgImpact: 1.644, ftImpact: -0.577, to: -2.431 } },
          { name: "Darius Adams", min: 29, pts: 12, reb: 6, ast: 5, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 4.7, zScores: { pts: 0.631, reb: 1.002, ast: 1.744, stl: 0.214, blk: -0.447, tpm: 0.871, fgImpact: -0.147, ftImpact: 0.786, to: 0.048 } },
          { name: "Preston Edmead", min: 29, pts: 6, reb: 5, ast: 6, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 7, ftm: 2, fta: 3, composite: 0.79, zScores: { pts: -0.224, reb: 0.647, ast: 2.246, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: -0.989, ftImpact: -0.184, to: -0.779 } },
          { name: "Paul McNeil Jr.", min: 28, pts: 12, reb: 12, ast: 1, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 4, fga: 13, ftm: 1, fta: 1, composite: 5.93, zScores: { pts: 0.631, reb: 3.132, ast: -0.261, stl: 0.214, blk: 0.93, tpm: 1.626, fgImpact: -1.611, ftImpact: 0.393, to: 0.874 } },
          { name: "Robert Jurkovic", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.83, zScores: { pts: -0.794, reb: -1.128, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 0.421, ftImpact: 0, to: 0.874 } },
          { name: "Eemeli Yalaho", min: 22, pts: 8, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 1.33, zScores: { pts: 0.061, reb: -0.063, ast: 0.24, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: 0.53, ftImpact: 0, to: 0.874 } },
          { name: "Comeh Emuobor", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Zymicah Wilkins", min: 14, pts: 13, reb: 7, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 5, fta: 7, composite: 0.21, zScores: { pts: 0.773, reb: 1.357, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.585, ftImpact: 0.024, to: 0.048 } },
          { name: "Kingston Whitty", min: 2, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.5, zScores: { pts: -0.509, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.841, ftImpact: 0, to: 0.874 } },
          { name: "Christian Hammond", min: 25, pts: 13, reb: 2, ast: 1, stl: 4, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 5.84, zScores: { pts: 0.773, reb: -0.418, ast: -0.261, stl: 3.052, blk: -0.447, tpm: 1.626, fgImpact: 0.639, ftImpact: 0, to: 0.874 } },
          { name: "R.J. Keene II", min: 7, pts: 1, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -3.64, zScores: { pts: -0.936, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: -0.577, to: 0.874 } }
        ]
      }
    },
      {
      id: "401917520",
      line: "Loyola Marymount Lions 69 @ Troy Trojans 74 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "LoyMa", name: "Loyola Marymount Lions", score: 69,
        players: [
          { name: "Jevon Porter", min: 28, pts: 13, reb: 9, ast: 3, stl: 2, blk: 2, to: 2, tpm: 2, fgm: 5, fga: 9, ftm: 1, fta: 2, composite: 7.2, zScores: { pts: 0.773, reb: 2.067, ast: 0.741, stl: 1.16, blk: 2.307, tpm: 0.871, fgImpact: 0.639, ftImpact: -0.577, to: -0.779 } },
          { name: "Zion Sensley", min: 34, pts: 14, reb: 14, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 15, ftm: 3, fta: 5, composite: 1.99, zScores: { pts: 0.916, reb: 3.842, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -1.557, ftImpact: -0.762, to: 0.874 } },
          { name: "All Wright", min: 38, pts: 8, reb: 2, ast: 7, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 17, ftm: 0, fta: 0, composite: -2.45, zScores: { pts: 0.061, reb: -0.418, ast: 2.747, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -3.075, ftImpact: 0, to: 0.048 } },
          { name: "Mazi Mosley", min: 38, pts: 2, reb: 3, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 8, ftm: 0, fta: 1, composite: -4.12, zScores: { pts: -0.794, reb: -0.063, ast: 0.24, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: -2.141, ftImpact: -0.97, to: 0.048 } },
          { name: "Jasai Miles", min: 36, pts: 17, reb: 4, ast: 0, stl: 0, blk: 1, to: 2, tpm: 4, fgm: 6, fga: 14, ftm: 1, fta: 1, composite: 2.66, zScores: { pts: 1.343, reb: 0.292, ast: -0.763, stl: -0.732, blk: 0.93, tpm: 2.382, fgImpact: -0.404, ftImpact: 0.393, to: -0.779 } },
          { name: "Christian Humphrey-Rembert", min: 10, pts: 3, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.61, zScores: { pts: -0.652, reb: -0.063, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.055, ftImpact: 0, to: 0.874 } },
          { name: "Andy Sigiscar", min: 13, pts: 4, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.45, zScores: { pts: -0.509, reb: 0.292, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.475, ftImpact: 0, to: 0.874 } },
          { name: "Aaron McBride", min: 28, pts: 8, reb: 3, ast: 1, stl: 5, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 4, composite: 2.53, zScores: { pts: 0.061, reb: -0.063, ast: -0.261, stl: 3.998, blk: -0.447, tpm: -0.639, fgImpact: 0.164, ftImpact: -1.155, to: 0.874 } }
        ]
      },
      home: {
        abbr: "TROY", name: "Troy Trojans", score: 74,
        players: [

        ]
      }
    },
      {
      id: "401913101",
      line: "Wyoming Cowboys 63 @ North Carolina Tar Heels 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Wyo", name: "Wyoming Cowboys", score: 63,
        players: [
          { name: "Gavin Gores", min: 19, pts: 9, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: -3.08, zScores: { pts: 0.203, reb: -0.063, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.219, ftImpact: -0.577, to: -0.779 } },
          { name: "Mike Mora", min: 22, pts: 4, reb: 8, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: 0, zScores: { pts: -0.509, reb: 1.712, ast: 0.24, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -0.623, ftImpact: 0, to: 0.048 } },
          { name: "Nasir Meyer", min: 29, pts: 17, reb: 4, ast: 4, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 8, fga: 21, ftm: 0, fta: 0, composite: 0.47, zScores: { pts: 1.343, reb: 0.292, ast: 1.243, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -1.393, ftImpact: 0, to: 0.048 } },
          { name: "Khaden Bennett", min: 28, pts: 2, reb: 7, ast: 4, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -0.67, zScores: { pts: -0.794, reb: 1.357, ast: 1.243, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: -1.775, ftImpact: 0, to: -0.779 } },
          { name: "Parker Gerrits", min: 18, pts: 3, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.38, zScores: { pts: -0.652, reb: -0.773, ast: -0.763, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: 0.055, ftImpact: 0, to: 0.874 } },
          { name: "Neil Summers", min: 8, pts: 2, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.54, zScores: { pts: -0.794, reb: 0.292, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.677, ftImpact: 0, to: -0.779 } },
          { name: "Renars Sondors", min: 22, pts: 12, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 2.59, zScores: { pts: 0.631, reb: 0.292, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 2.382, fgImpact: -0.147, ftImpact: 0, to: 0.874 } },
          { name: "Linus Ruf", min: 9, pts: 4, reb: 0, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.32, zScores: { pts: -0.509, reb: -1.128, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 0.475, ftImpact: 0, to: 0.048 } },
          { name: "Madden Smiley", min: 10, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.87, zScores: { pts: -0.794, reb: -0.063, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.311, ftImpact: 0, to: 0.874 } },
          { name: "Uriyah Rojas", min: 22, pts: 5, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 10, ftm: 0, fta: 0, composite: -2.49, zScores: { pts: -0.367, reb: 0.292, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: -2.087, ftImpact: 0, to: 0.048 } },
          { name: "Canin Jefferson", min: 13, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.75, zScores: { pts: -0.652, reb: -0.418, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.421, ftImpact: 0, to: -0.779 } }
        ]
      },
      home: {
        abbr: "UNC", name: "North Carolina Tar Heels", score: 76,
        players: [
          { name: "Jarin Stevenson", min: 29, pts: 7, reb: 3, ast: 1, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 3, composite: 0.08, zScores: { pts: -0.082, reb: -0.063, ast: -0.261, stl: 1.16, blk: 0.93, tpm: -0.639, fgImpact: 0.53, ftImpact: -1.548, to: 0.048 } },
          { name: "Sayon Keita", min: 27, pts: 13, reb: 8, ast: 0, stl: 3, blk: 6, to: 1, tpm: 0, fgm: 6, fga: 9, ftm: 1, fta: 1, composite: 12.87, zScores: { pts: 0.773, reb: 1.712, ast: -0.763, stl: 2.106, blk: 7.816, tpm: -0.639, fgImpact: 1.426, ftImpact: 0.393, to: 0.048 } },
          { name: "Neo Avdalas", min: 21, pts: 1, reb: 1, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 5, composite: -7.28, zScores: { pts: -0.936, reb: -0.773, ast: 1.243, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: -3.489, to: -0.779 } },
          { name: "Matt Able", min: 26, pts: 11, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 3.65, zScores: { pts: 0.488, reb: -0.063, ast: 0.741, stl: 0.214, blk: -0.447, tpm: 1.626, fgImpact: 0.219, ftImpact: 0, to: 0.874 } },
          { name: "Terrence Brown", min: 31, pts: 14, reb: 5, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 6, fga: 16, ftm: 2, fta: 3, composite: -1.29, zScores: { pts: 0.916, reb: 0.647, ast: 0.24, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -1.136, ftImpact: -0.184, to: 0.048 } },
          { name: "Alex Samodurov", min: 9, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Maximo Adams", min: 25, pts: 13, reb: 9, ast: 1, stl: 1, blk: 1, to: 3, tpm: 2, fgm: 4, fga: 7, ftm: 3, fta: 4, composite: 3.78, zScores: { pts: 0.773, reb: 2.067, ast: -0.261, stl: 0.214, blk: 0.93, tpm: 0.871, fgImpact: 0.585, ftImpact: 0.209, to: -1.605 } },
          { name: "Isaiah Denis", min: 20, pts: 14, reb: 3, ast: 1, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 5, fga: 7, ftm: 1, fta: 2, composite: 3.26, zScores: { pts: 0.916, reb: -0.063, ast: -0.261, stl: -0.732, blk: 0.93, tpm: 1.626, fgImpact: 1.371, ftImpact: -0.577, to: 0.048 } },
          { name: "Jaydon Young", min: 11, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.54, zScores: { pts: -0.652, reb: -1.128, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -0.311, ftImpact: 0, to: 0.874 } },
          { name: "Angelo Brizzi", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } }
        ]
      }
    },
      {
      id: "401911209",
      line: "Elon Phoenix 50 @ George Washington Revolutionaries 69 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ELON", name: "Elon Phoenix", score: 50,
        players: [

        ]
      },
      home: {
        abbr: "GrgWas", name: "George Washington Revolutionaries", score: 69,
        players: [
          { name: "Lovro Urbiha", min: 26, pts: 13, reb: 7, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 8, ftm: 3, fta: 6, composite: 0.92, zScores: { pts: 0.773, reb: 1.357, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: 0.219, ftImpact: -1.732, to: 0.874 } },
          { name: "Dylan James", min: 26, pts: 12, reb: 13, ast: 2, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 8.97, zScores: { pts: 0.631, reb: 3.487, ast: 0.24, stl: -0.732, blk: 3.684, tpm: -0.639, fgImpact: 1.426, ftImpact: 0, to: 0.874 } },
          { name: "Omari Witherspoon", min: 24, pts: 5, reb: 6, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 8, ftm: 3, fta: 4, composite: -2.88, zScores: { pts: -0.367, reb: 1.002, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -2.141, ftImpact: 0.209, to: 0.048 } },
          { name: "Jean Aranguren", min: 23, pts: 12, reb: 4, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 7, ftm: 6, fta: 8, composite: -0.77, zScores: { pts: 0.631, reb: 0.292, ast: -0.261, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -0.202, ftImpact: 0.417, to: -0.779 } },
          { name: "Terrance Arceneaux", min: 16, pts: 2, reb: 2, ast: 0, stl: 3, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 0.99, zScores: { pts: -0.794, reb: -0.418, ast: -0.763, stl: 2.106, blk: 0.93, tpm: -0.639, fgImpact: -0.311, ftImpact: 0, to: 0.874 } },
          { name: "Jayvon Rampersant", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Ryder Frost", min: 12, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -2.18, zScores: { pts: -0.224, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: -0.989, ftImpact: 0, to: 0.874 } },
          { name: "Andrija Vukovic", min: 11, pts: 4, reb: 4, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -3.58, zScores: { pts: -0.509, reb: 0.292, ast: -0.261, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -0.623, ftImpact: 0, to: -1.605 } },
          { name: "Malachi Arrington", min: 2, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.079, reb: -1.128, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Promis N'Landu", min: 19, pts: 10, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 4, fta: 5, composite: -1.8, zScores: { pts: 0.346, reb: -0.418, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.53, ftImpact: 0.602, to: -0.779 } },
          { name: "Jalen Rougier-Roane", min: 4, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.16, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.048 } },
          { name: "Felix Kossaras", min: 23, pts: 3, reb: 2, ast: 1, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 0.13, zScores: { pts: -0.652, reb: -0.418, ast: -0.261, stl: 0.214, blk: 0.93, tpm: 0.116, fgImpact: -0.677, ftImpact: 0, to: 0.874 } },
          { name: "Andrew Phillips", min: 13, pts: 2, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -1.48, zScores: { pts: -0.794, reb: -0.773, ast: 0.24, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0.786, to: 0.874 } }
        ]
      }
    },
      {
      id: "401911196",
      line: "Iona Gaels 72 @ Fordham Rams 78 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "IONA", name: "Iona Gaels", score: 72,
        players: [

        ]
      },
      home: {
        abbr: "Ford", name: "Fordham Rams", score: 78,
        players: [
          { name: "Abass Bodija", min: 19, pts: 8, reb: 6, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: -1.35, zScores: { pts: 0.061, reb: 1.002, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.164, ftImpact: 0.786, to: -0.779 } },
          { name: "Akira Jacobs", min: 24, pts: 12, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 7, ftm: 1, fta: 3, composite: -0.43, zScores: { pts: 0.631, reb: -0.773, ast: -0.763, stl: 0.214, blk: -0.447, tpm: 1.626, fgImpact: 0.585, ftImpact: -1.548, to: 0.048 } },
          { name: "Rikus Schulte", min: 25, pts: 2, reb: 5, ast: 0, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 4, composite: -0.81, zScores: { pts: -0.794, reb: 0.647, ast: -0.763, stl: 2.106, blk: 0.93, tpm: -0.639, fgImpact: -0.366, ftImpact: -1.155, to: -0.779 } },
          { name: "Amir Lindsey", min: 29, pts: 20, reb: 1, ast: 8, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 7, ftm: 7, fta: 7, composite: 8.98, zScores: { pts: 1.77, reb: -0.773, ast: 3.249, stl: 0.214, blk: -0.447, tpm: 1.626, fgImpact: 1.371, ftImpact: 2.751, to: -0.779 } },
          { name: "Hassan Koureissi", min: 17, pts: 2, reb: 1, ast: 1, stl: 1, blk: 1, to: 5, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.53, zScores: { pts: -0.794, reb: -0.773, ast: -0.261, stl: 0.214, blk: 0.93, tpm: -0.639, fgImpact: 0.055, ftImpact: 0, to: -3.257 } },
          { name: "Roor Akhuar", min: 20, pts: 11, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 6, ftm: 1, fta: 3, composite: 1.36, zScores: { pts: 0.488, reb: 0.292, ast: -0.763, stl: -0.732, blk: 0.93, tpm: 0.871, fgImpact: 0.951, ftImpact: -1.548, to: 0.874 } },
          { name: "Jack Whitbourn", min: 15, pts: 6, reb: 4, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 4, fta: 4, composite: 1.95, zScores: { pts: -0.224, reb: 0.292, ast: -0.763, stl: 0.214, blk: 0.93, tpm: -0.639, fgImpact: -0.311, ftImpact: 1.572, to: 0.874 } },
          { name: "Lateef Patrick Jr.", min: 31, pts: 13, reb: 4, ast: 3, stl: 2, blk: 0, to: 4, tpm: 2, fgm: 5, fga: 14, ftm: 1, fta: 2, composite: -0.81, zScores: { pts: 0.773, reb: 0.292, ast: 0.741, stl: 1.16, blk: -0.447, tpm: 0.871, fgImpact: -1.191, ftImpact: -0.577, to: -2.431 } },
          { name: "Kelvin Odih", min: 16, pts: 4, reb: 3, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.36, zScores: { pts: -0.509, reb: -0.063, ast: 0.24, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: -0.257, ftImpact: 0, to: 0.874 } },
          { name: "Desmond Bellot Jr.", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } }
        ]
      }
    },
      {
      id: "401911187",
      line: "Siena Saints 99 @ Dayton Flyers 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SIE", name: "Siena Saints", score: 99,
        players: [

        ]
      },
      home: {
        abbr: "Dayt", name: "Dayton Flyers", score: 89,
        players: [
          { name: "Grant Randall", min: 34, pts: 7, reb: 7, ast: 4, stl: 0, blk: 5, to: 2, tpm: 1, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 6.63, zScores: { pts: -0.082, reb: 1.357, ast: 1.243, stl: -0.732, blk: 6.439, tpm: 0.116, fgImpact: -0.934, ftImpact: 0, to: -0.779 } },
          { name: "Amal L'Etang", min: 19, pts: 9, reb: 4, ast: 1, stl: 1, blk: 3, to: 4, tpm: 1, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 3.13, zScores: { pts: 0.203, reb: 0.292, ast: -0.261, stl: 0.214, blk: 3.684, tpm: 0.116, fgImpact: 1.317, ftImpact: 0, to: -2.431 } },
          { name: "Tristian Ford", min: 30, pts: 21, reb: 1, ast: 3, stl: 1, blk: 0, to: 2, tpm: 5, fgm: 8, fga: 8, ftm: 0, fta: 0, composite: 7.37, zScores: { pts: 1.913, reb: -0.773, ast: 0.741, stl: 0.214, blk: -0.447, tpm: 3.137, fgImpact: 3.365, ftImpact: 0, to: -0.779 } },
          { name: "Landen Joseph", min: 34, pts: 8, reb: 4, ast: 8, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 14, ftm: 0, fta: 2, composite: -2.79, zScores: { pts: 0.061, reb: 0.292, ast: 3.249, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -1.977, ftImpact: -1.941, to: -1.605 } },
          { name: "Aiden Derkack", min: 34, pts: 25, reb: 10, ast: 4, stl: 3, blk: 1, to: 4, tpm: 1, fgm: 9, fga: 13, ftm: 6, fta: 8, composite: 9.61, zScores: { pts: 2.483, reb: 2.422, ast: 1.243, stl: 2.106, blk: 0.93, tpm: 0.116, fgImpact: 2.322, ftImpact: 0.417, to: -2.431 } },
          { name: "Damon Friery", min: 7, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.6, zScores: { pts: -0.652, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.421, ftImpact: 0, to: 0.874 } },
          { name: "Jaiun Simon", min: 11, pts: 5, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.66, zScores: { pts: -0.367, reb: 0.292, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: -0.257, ftImpact: 0, to: 0.048 } },
          { name: "Malcolm Thomas", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.38, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Jalen Haynes", min: 16, pts: 8, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 4, ftm: 0, fta: 2, composite: -2.5, zScores: { pts: 0.061, reb: -0.773, ast: 0.24, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 1.683, ftImpact: -1.941, to: 0.048 } },
          { name: "Travis Perry", min: 14, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -4.51, zScores: { pts: -0.652, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -1.775, ftImpact: 0, to: 0.874 } }
        ]
      }
    },
      {
      id: "401909727",
      line: "Charleston Southern Buccaneers 64 @ Wake Forest Demon Deacons 82 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHSO", name: "Charleston Southern Buccaneers", score: 64,
        players: [

        ]
      },
      home: {
        abbr: "Wake", name: "Wake Forest Demon Deacons", score: 82,
        players: [
          { name: "Gavin Placide", min: 24, pts: 14, reb: 8, ast: 2, stl: 2, blk: 1, to: 2, tpm: 2, fgm: 5, fga: 15, ftm: 2, fta: 4, composite: 2.34, zScores: { pts: 0.916, reb: 1.712, ast: 0.24, stl: 1.16, blk: 0.93, tpm: 0.871, fgImpact: -1.557, ftImpact: -1.155, to: -0.779 } },
          { name: "Antonio Dorn", min: 13, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.44, zScores: { pts: -1.079, reb: -0.773, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: 0, to: -0.779 } },
          { name: "Kevair Kennedy", min: 31, pts: 15, reb: 3, ast: 2, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 9, ftm: 4, fta: 4, composite: 4.32, zScores: { pts: 1.058, reb: -0.063, ast: 0.24, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: 0.639, ftImpact: 1.572, to: 0.048 } },
          { name: "Justin Ray", min: 16, pts: 7, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -0.65, zScores: { pts: -0.082, reb: -0.418, ast: 0.24, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -0.202, ftImpact: 0, to: 0.874 } },
          { name: "Jamari McDowell", min: 28, pts: 11, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 4, fta: 5, composite: 0.64, zScores: { pts: 0.488, reb: -0.418, ast: 0.24, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: -0.202, ftImpact: 0.602, to: 0.048 } },
          { name: "Xander Pintelon", min: 18, pts: 8, reb: 1, ast: 0, stl: 2, blk: 2, to: 1, tpm: 2, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 1.98, zScores: { pts: 0.061, reb: -0.773, ast: -0.763, stl: 1.16, blk: 2.307, tpm: 0.871, fgImpact: -0.934, ftImpact: 0, to: 0.048 } },
          { name: "Ring Nyeri", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Vincent Ricchiuti", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Gallagher Placide", min: 19, pts: 12, reb: 8, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 5, ftm: 2, fta: 4, composite: 2.1, zScores: { pts: 0.631, reb: 1.712, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 0.871, fgImpact: 1.317, ftImpact: -1.155, to: -0.779 } },
          { name: "Justin Abson", min: 4, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.048 } },
          { name: "Lukas Bojovic", min: 13, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.15, zScores: { pts: -1.079, reb: -0.773, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -1.098, ftImpact: 0, to: 0.874 } },
          { name: "Isaac Carr", min: 24, pts: 15, reb: 2, ast: 2, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 8, ftm: 4, fta: 4, composite: 6.11, zScores: { pts: 1.058, reb: -0.418, ast: 0.24, stl: 2.106, blk: -0.447, tpm: 0.116, fgImpact: 1.005, ftImpact: 1.572, to: 0.874 } }
        ]
      }
    },
      {
      id: "401909553",
      line: "Maryland Eastern Shore Hawks 54 @ Boston College Eagles 82 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UMES", name: "Maryland Eastern Shore Hawks", score: 54,
        players: [

        ]
      },
      home: {
        abbr: "BC", name: "Boston College Eagles", score: 82,
        players: [
          { name: "Colby Duggan", min: 27, pts: 14, reb: 2, ast: 0, stl: 1, blk: 1, to: 1, tpm: 4, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 4.31, zScores: { pts: 0.916, reb: -0.418, ast: -0.763, stl: 0.214, blk: 0.93, tpm: 2.382, fgImpact: 0.219, ftImpact: 0.786, to: 0.048 } },
          { name: "Luke Hunger", min: 30, pts: 20, reb: 4, ast: 1, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 5, fga: 8, ftm: 8, fta: 8, composite: 7.07, zScores: { pts: 1.77, reb: 0.292, ast: -0.261, stl: -0.732, blk: 0.93, tpm: 0.871, fgImpact: 1.005, ftImpact: 3.144, to: 0.048 } },
          { name: "Zak Smrekar", min: 26, pts: 16, reb: 3, ast: 2, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 10, ftm: 5, fta: 5, composite: 1.89, zScores: { pts: 1.2, reb: -0.063, ast: 0.24, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: 0.273, ftImpact: 1.965, to: -1.605 } },
          { name: "Ernest Shelton", min: 21, pts: 7, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 3, fta: 3, composite: -3.21, zScores: { pts: -0.082, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -1.355, ftImpact: 1.179, to: 0.048 } },
          { name: "Money Williams", min: 34, pts: 8, reb: 5, ast: 4, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 5, fta: 6, composite: 2.38, zScores: { pts: 0.061, reb: 0.647, ast: 1.243, stl: 0.214, blk: 0.93, tpm: 0.116, fgImpact: -1.043, ftImpact: 0.995, to: -0.779 } },
          { name: "Brandon Benjamin", min: 17, pts: 4, reb: 6, ast: 3, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 1.44, zScores: { pts: -0.509, reb: 1.002, ast: 0.741, stl: 0.214, blk: 0.93, tpm: -0.639, fgImpact: 0.475, ftImpact: 0, to: -0.779 } },
          { name: "Andrija Bukumirovic", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Armoni Zeigler", min: 30, pts: 7, reb: 9, ast: 3, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 2.79, zScores: { pts: -0.082, reb: 2.067, ast: 0.741, stl: 2.106, blk: -0.447, tpm: 0.116, fgImpact: -0.934, ftImpact: 0, to: -0.779 } },
          { name: "JB Frankel", min: 11, pts: 6, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.61, zScores: { pts: -0.224, reb: -0.063, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 0.871, fgImpact: 0.475, ftImpact: 0, to: 0.048 } }
        ]
      }
    },
      {
      id: "401909543",
      line: "Detroit Mercy Titans 55 @ Xavier Musketeers 100 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DETM", name: "Detroit Mercy Titans", score: 55,
        players: [

        ]
      },
      home: {
        abbr: "Xav", name: "Xavier Musketeers", score: 100,
        players: [
          { name: "Filip Borovicanin", min: 19, pts: 5, reb: 8, ast: 5, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: 0.01, zScores: { pts: -0.367, reb: 1.712, ast: 1.744, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: -1.355, ftImpact: 0, to: -1.605 } },
          { name: "Jovan Milicevic", min: 21, pts: 8, reb: 2, ast: 6, stl: 2, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 5.89, zScores: { pts: 0.061, reb: -0.418, ast: 2.246, stl: 1.16, blk: 0.93, tpm: 0.871, fgImpact: 0.164, ftImpact: 0, to: 0.874 } },
          { name: "Mike Nwoko", min: 18, pts: 17, reb: 5, ast: 3, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 8, fga: 9, ftm: 1, fta: 3, composite: 3.79, zScores: { pts: 1.343, reb: 0.647, ast: 0.741, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 2.999, ftImpact: -1.548, to: 0.048 } },
          { name: "Ruben Dominguez", min: 21, pts: 9, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 1.58, zScores: { pts: 0.203, reb: -0.063, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 1.626, fgImpact: -0.568, ftImpact: 0, to: 0.874 } },
          { name: "Tru Washington", min: 21, pts: 14, reb: 7, ast: 3, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 13, ftm: 3, fta: 3, composite: 4.37, zScores: { pts: 0.916, reb: 1.357, ast: 0.741, stl: 2.106, blk: -0.447, tpm: 0.116, fgImpact: -0.825, ftImpact: 1.179, to: -0.779 } },
          { name: "Asher Elson", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.58, zScores: { pts: -0.794, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.311, ftImpact: 0, to: 0.874 } },
          { name: "Rolyns Aligbe", min: 15, pts: 0, reb: 7, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -0.54, zScores: { pts: -1.079, reb: 1.357, ast: 0.741, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: 0, to: 0.048 } },
          { name: "Gabriel Pozzato", min: 17, pts: 6, reb: 0, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.27, zScores: { pts: -0.224, reb: -1.128, ast: -0.763, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: 0.896, ftImpact: 0, to: 0.874 } },
          { name: "Henry Thole", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Nikos Chitikoudis", min: 16, pts: 6, reb: 10, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 1, composite: 0.96, zScores: { pts: -0.224, reb: 2.422, ast: 0.24, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 1.262, ftImpact: -0.97, to: 0.048 } },
          { name: "Kason Westphal", min: 6, pts: 4, reb: 1, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 0.18, zScores: { pts: -0.509, reb: -0.773, ast: -0.763, stl: 0.214, blk: 0.93, tpm: -0.639, fgImpact: 0.841, ftImpact: 0, to: 0.874 } },
          { name: "Gedeon Basson", min: 2, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.94, zScores: { pts: -1.079, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: 0, to: 0.874 } },
          { name: "Kalek House", min: 16, pts: 16, reb: 2, ast: 3, stl: 3, blk: 1, to: 1, tpm: 1, fgm: 6, fga: 8, ftm: 3, fta: 6, composite: 4.78, zScores: { pts: 1.2, reb: -0.418, ast: 0.741, stl: 2.106, blk: 0.93, tpm: 0.116, fgImpact: 1.792, ftImpact: -1.732, to: 0.048 } },
          { name: "Michael Wolf", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Chance Westry", min: 17, pts: 13, reb: 2, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 5, fta: 6, composite: 3.18, zScores: { pts: 0.773, reb: -0.418, ast: 1.243, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.585, ftImpact: 0.995, to: 0.874 } }
        ]
      }
    },
      {
      id: "401909533",
      line: "Bryant Bulldogs 55 @ Providence Friars 78 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BRY", name: "Bryant Bulldogs", score: 55,
        players: [

        ]
      },
      home: {
        abbr: "Prov", name: "Providence Friars", score: 78,
        players: [
          { name: "Leonardo Marangon", min: 11, pts: 0, reb: 0, ast: 0, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.63, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: 2.106, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: 0, to: 0.048 } },
          { name: "Jacob Bannarbie", min: 29, pts: 9, reb: 10, ast: 3, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 4, ftm: 1, fta: 2, composite: 5.15, zScores: { pts: 0.203, reb: 2.422, ast: 0.741, stl: 1.16, blk: 0.93, tpm: -0.639, fgImpact: 1.683, ftImpact: -0.577, to: -0.779 } },
          { name: "Malik Mack", min: 32, pts: 19, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 8, fga: 14, ftm: 0, fta: 0, composite: 4.56, zScores: { pts: 1.628, reb: -0.418, ast: 0.741, stl: 0.214, blk: -0.447, tpm: 1.626, fgImpact: 1.169, ftImpact: 0, to: 0.048 } },
          { name: "Devin Vanterpool", min: 23, pts: 21, reb: 4, ast: 2, stl: 4, blk: 0, to: 1, tpm: 3, fgm: 8, fga: 17, ftm: 2, fta: 2, composite: 7.58, zScores: { pts: 1.913, reb: 0.292, ast: 0.24, stl: 3.052, blk: -0.447, tpm: 1.626, fgImpact: 0.071, ftImpact: 0.786, to: 0.048 } },
          { name: "Miles Byrd", min: 37, pts: 12, reb: 7, ast: 5, stl: 4, blk: 1, to: 4, tpm: 2, fgm: 3, fga: 9, ftm: 4, fta: 4, composite: 6.79, zScores: { pts: 0.631, reb: 1.357, ast: 1.744, stl: 3.052, blk: 0.93, tpm: 0.871, fgImpact: -0.934, ftImpact: 1.572, to: -2.431 } },
          { name: "Clyde Walters", min: 15, pts: 9, reb: 6, ast: 4, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 3, fta: 3, composite: 5.78, zScores: { pts: 0.203, reb: 1.002, ast: 1.243, stl: 2.106, blk: 0.93, tpm: -0.639, fgImpact: 0.53, ftImpact: 1.179, to: -0.779 } },
          { name: "Javon Bardwell", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -6.33, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: -1.941, to: 0.048 } },
          { name: "Elijah Saunders", min: 11, pts: 4, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -3.1, zScores: { pts: -0.509, reb: -1.128, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.257, ftImpact: 0, to: 0.874 } },
          { name: "Ryan Sabol", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Gavin Hightower", min: 32, pts: 4, reb: 2, ast: 2, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -3.3, zScores: { pts: -0.509, reb: -0.418, ast: 0.24, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: -0.257, ftImpact: 0, to: -2.431 } }
        ]
      }
    },
      {
      id: "401927369",
      line: "Evansville Purple Aces 68 @ Middle Tennessee Blue Raiders 73 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Evans", name: "Evansville Purple Aces", score: 68,
        players: [
          { name: "Gustav Winther", min: 22, pts: 7, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: 0.53, zScores: { pts: -0.082, reb: -0.063, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.841, ftImpact: 0.786, to: 0.874 } },
          { name: "AJ Casey", min: 32, pts: 4, reb: 8, ast: 4, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 10, ftm: 4, fta: 6, composite: -5, zScores: { pts: -0.509, reb: 1.712, ast: 1.243, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -3.66, ftImpact: -0.369, to: -1.605 } },
          { name: "Caden Symons", min: 28, pts: 9, reb: 4, ast: 1, stl: 3, blk: 1, to: 1, tpm: 1, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 2.92, zScores: { pts: 0.203, reb: 0.292, ast: -0.261, stl: 2.106, blk: 0.93, tpm: 0.116, fgImpact: -0.513, ftImpact: 0, to: 0.048 } },
          { name: "Bryce Quinet", min: 38, pts: 19, reb: 3, ast: 7, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 8, fga: 19, ftm: 1, fta: 3, composite: 4.68, zScores: { pts: 1.628, reb: -0.063, ast: 2.747, stl: 2.106, blk: -0.447, tpm: 0.871, fgImpact: -0.661, ftImpact: -1.548, to: 0.048 } },
          { name: "Max Langenfeld", min: 35, pts: 18, reb: 5, ast: 0, stl: 0, blk: 0, to: 3, tpm: 5, fgm: 5, fga: 11, ftm: 3, fta: 4, composite: 1.84, zScores: { pts: 1.485, reb: 0.647, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 3.137, fgImpact: -0.093, ftImpact: 0.209, to: -1.605 } },
          { name: "Yannick Pinas", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "JR Kemm", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.12, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: 0, to: 0.048 } },
          { name: "Aaron Gutman", min: 21, pts: 5, reb: 3, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.61, zScores: { pts: -0.367, reb: -0.063, ast: -0.763, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: 0.475, ftImpact: 0, to: -0.779 } },
          { name: "Makuei Riek", min: 17, pts: 6, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 4, fta: 4, composite: -0.52, zScores: { pts: -0.224, reb: -0.063, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -1.043, ftImpact: 1.572, to: 0.874 } }
        ]
      },
      home: {
        abbr: "MTSU", name: "Middle Tennessee Blue Raiders", score: 73,
        players: [

        ]
      }
    },
      {
      id: "401925107",
      line: "Texas State Bobcats 72 @ UT Rio Grande Valley Vaqueros 65 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TxSt", name: "Texas State Bobcats", score: 72,
        players: [
          { name: "DJ Hall", min: 32, pts: 12, reb: 7, ast: 4, stl: 0, blk: 0, to: 5, tpm: 2, fgm: 3, fga: 8, ftm: 4, fta: 4, composite: 0.67, zScores: { pts: 0.631, reb: 1.357, ast: 1.243, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: -0.568, ftImpact: 1.572, to: -3.257 } },
          { name: "Paul Djobet", min: 28, pts: 15, reb: 6, ast: 1, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 8, ftm: 2, fta: 2, composite: 3.26, zScores: { pts: 1.058, reb: 1.002, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 1.626, fgImpact: 1.005, ftImpact: 0.786, to: -0.779 } },
          { name: "Robert Fields", min: 28, pts: 11, reb: 7, ast: 3, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 3, fta: 3, composite: 6.61, zScores: { pts: 0.488, reb: 1.357, ast: 0.741, stl: 2.106, blk: -0.447, tpm: -0.639, fgImpact: 0.951, ftImpact: 1.179, to: 0.874 } },
          { name: "Dimp Pernell", min: 25, pts: 26, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 9, fga: 12, ftm: 4, fta: 4, composite: 8.55, zScores: { pts: 2.625, reb: -0.773, ast: 0.24, stl: 0.214, blk: -0.447, tpm: 2.382, fgImpact: 2.688, ftImpact: 1.572, to: 0.048 } },
          { name: "Kaden Gumbs", min: 27, pts: 3, reb: 1, ast: 3, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.65, zScores: { pts: -0.652, reb: -0.773, ast: 0.741, stl: -0.732, blk: 0.93, tpm: 0.116, fgImpact: -0.677, ftImpact: 0, to: -1.605 } },
          { name: "David Abisogun", min: 9, pts: 0, reb: 0, ast: 0, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -0.21, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: 0.214, blk: 2.307, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Kole Grandison", min: 9, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.28, zScores: { pts: -0.652, reb: -0.773, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.421, ftImpact: 0, to: 0.048 } },
          { name: "Ronald Jessamy", min: 3, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.23, zScores: { pts: -0.794, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.311, ftImpact: 0, to: 0.874 } },
          { name: "KJ Younger", min: 9, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.29, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: 0, to: 0.874 } },
          { name: "Ky Pernell", min: 10, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.66, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -1.098, ftImpact: 0, to: 0.874 } },
          { name: "Quel'Ron House", min: 14, pts: 0, reb: 0, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.079, reb: -1.128, ast: 0.24, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.048 } },
          { name: "Caleb Steger", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.75, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.048 } }
        ]
      },
      home: {
        abbr: "RGV", name: "UT Rio Grande Valley Vaqueros", score: 65,
        players: [

        ]
      }
    },
      {
      id: "401919003",
      line: "Nicholls Colonels 63 @ Tulane Green Wave 77 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NICH", name: "Nicholls Colonels", score: 63,
        players: [

        ]
      },
      home: {
        abbr: "Tul", name: "Tulane Green Wave", score: 77,
        players: [
          { name: "Carson Schwieger", min: 31, pts: 8, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -0.4, zScores: { pts: 0.061, reb: -0.063, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: -0.202, ftImpact: 0, to: 0.874 } },
          { name: "Tyler Ringgold", min: 23, pts: 12, reb: 6, ast: 0, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 2, fga: 5, ftm: 7, fta: 11, composite: -4.01, zScores: { pts: 0.631, reb: 1.002, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -0.257, ftImpact: -1.131, to: -2.431 } },
          { name: "Ryan Blount", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.29, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: 0, to: 0.874 } },
          { name: "Krystian Lewis", min: 39, pts: 35, reb: 7, ast: 1, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 7, fga: 14, ftm: 17, fta: 17, composite: 13.44, zScores: { pts: 3.907, reb: 1.357, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 2.382, fgImpact: 0.383, ftImpact: 6.681, to: -0.779 } },
          { name: "KJ Greene", min: 28, pts: 6, reb: 2, ast: 4, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 3, fta: 6, composite: -0.01, zScores: { pts: -0.224, reb: -0.418, ast: 1.243, stl: 1.16, blk: 0.93, tpm: 0.116, fgImpact: -0.311, ftImpact: -1.732, to: -0.779 } },
          { name: "Joah Chappelle", min: 24, pts: 7, reb: 8, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 3, fta: 4, composite: 1.16, zScores: { pts: -0.082, reb: 1.712, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 0.475, ftImpact: 0.209, to: 0.048 } },
          { name: "Josiah Moore", min: 26, pts: 4, reb: 2, ast: 3, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.32, zScores: { pts: -0.509, reb: -0.418, ast: 0.741, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: -0.257, ftImpact: 0, to: 0.048 } },
          { name: "TJ Nadeau", min: 22, pts: 5, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.87, zScores: { pts: -0.367, reb: -0.418, ast: 0.24, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: -0.257, ftImpact: 0, to: 0.048 } }
        ]
      }
    },
      {
      id: "401927386",
      line: "Green Bay Phoenix 76 @ Northern Iowa Panthers 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "GB", name: "Green Bay Phoenix", score: 76,
        players: [

        ]
      },
      home: {
        abbr: "NrthIA", name: "Northern Iowa Panthers", score: 89,
        players: [
          { name: "Isaiah Johnson-Arigu", min: 31, pts: 14, reb: 3, ast: 3, stl: 0, blk: 2, to: 2, tpm: 2, fgm: 5, fga: 6, ftm: 2, fta: 2, composite: 5.79, zScores: { pts: 0.916, reb: -0.063, ast: 0.741, stl: -0.732, blk: 2.307, tpm: 0.871, fgImpact: 1.737, ftImpact: 0.786, to: -0.779 } },
          { name: "Ian Smikle", min: 12, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.79, zScores: { pts: -1.079, reb: -0.773, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: 0, to: 0.874 } },
          { name: "Carson Vis", min: 32, pts: 17, reb: 3, ast: 5, stl: 4, blk: 0, to: 2, tpm: 3, fgm: 7, fga: 10, ftm: 0, fta: 0, composite: 8.32, zScores: { pts: 1.343, reb: -0.063, ast: 1.744, stl: 3.052, blk: -0.447, tpm: 1.626, fgImpact: 1.846, ftImpact: 0, to: -0.779 } },
          { name: "Greyson Uelmen", min: 33, pts: 27, reb: 2, ast: 4, stl: 0, blk: 0, to: 6, tpm: 3, fgm: 8, fga: 14, ftm: 8, fta: 10, composite: 2.33, zScores: { pts: 2.768, reb: -0.418, ast: 1.243, stl: -0.732, blk: -0.447, tpm: 1.626, fgImpact: 1.169, ftImpact: 1.203, to: -4.083 } },
          { name: "Tate McCubbin", min: 36, pts: 10, reb: 5, ast: 5, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 6, zScores: { pts: 0.346, reb: 0.647, ast: 1.744, stl: 2.106, blk: -0.447, tpm: -0.639, fgImpact: 0.585, ftImpact: 0.786, to: 0.874 } },
          { name: "Will Gerdes", min: 7, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.38, zScores: { pts: -1.079, reb: -0.773, ast: 0.24, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Kyle Pock", min: 14, pts: 4, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -0.66, zScores: { pts: -0.509, reb: -0.418, ast: -0.763, stl: -0.732, blk: 0.93, tpm: 0.116, fgImpact: 0.421, ftImpact: -0.577, to: 0.874 } },
          { name: "Jaydon Kimbrough", min: 2, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.79, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Levi Valdo", min: 23, pts: 15, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 8, ftm: 0, fta: 0, composite: 3.24, zScores: { pts: 1.058, reb: -0.063, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: 2.578, ftImpact: 0, to: 0.048 } },
          { name: "Geon Hutchins", min: 10, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.21, zScores: { pts: -0.794, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.421, ftImpact: 0, to: 0.874 } }
        ]
      }
    },
      {
      id: "401925685",
      line: "Alcorn State Braves 57 @ Murray State Racers 94 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ALCN", name: "Alcorn State Braves", score: 57,
        players: [

        ]
      },
      home: {
        abbr: "Mur", name: "Murray State Racers", score: 94,
        players: [
          { name: "Brigham Rogers", min: 22, pts: 6, reb: 12, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 6, composite: 0.59, zScores: { pts: -0.224, reb: 3.132, ast: 1.243, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.475, ftImpact: -3.096, to: 0.874 } },
          { name: "Talis Soulhac", min: 17, pts: 5, reb: 2, ast: 1, stl: 3, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 4, composite: -1.73, zScores: { pts: -0.367, reb: -0.418, ast: -0.261, stl: 2.106, blk: -0.447, tpm: -0.639, fgImpact: -0.311, ftImpact: 0.209, to: -1.605 } },
          { name: "Roman Domon", min: 28, pts: 29, reb: 5, ast: 5, stl: 1, blk: 1, to: 4, tpm: 2, fgm: 9, fga: 14, ftm: 9, fta: 10, composite: 9.55, zScores: { pts: 3.052, reb: 0.647, ast: 1.744, stl: 0.214, blk: 0.93, tpm: 0.871, fgImpact: 1.956, ftImpact: 2.567, to: -2.431 } },
          { name: "Brayden Shorter", min: 24, pts: 19, reb: 4, ast: 0, stl: 1, blk: 0, to: 2, tpm: 5, fgm: 7, fga: 14, ftm: 0, fta: 0, composite: 3.67, zScores: { pts: 1.628, reb: 0.292, ast: -0.763, stl: 0.214, blk: -0.447, tpm: 3.137, fgImpact: 0.383, ftImpact: 0, to: -0.779 } },
          { name: "Lachlan Crate", min: 19, pts: 4, reb: 3, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 2, composite: -1.36, zScores: { pts: -0.509, reb: -0.063, ast: 0.24, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 0.475, ftImpact: -1.941, to: 0.874 } },
          { name: "Jonas Boulefaa", min: 10, pts: 6, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -0.96, zScores: { pts: -0.224, reb: -0.418, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: -0.623, ftImpact: 0, to: 0.874 } },
          { name: "Pavle Nikolic", min: 13, pts: 6, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 4, composite: -1.55, zScores: { pts: -0.224, reb: -0.063, ast: 0.24, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.475, ftImpact: -1.155, to: 0.048 } },
          { name: "Shon Tupuola", min: 8, pts: 2, reb: 4, ast: 0, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -0.32, zScores: { pts: -0.794, reb: 0.292, ast: -0.763, stl: -0.732, blk: 2.307, tpm: -0.639, fgImpact: 0, ftImpact: 0.786, to: -0.779 } },
          { name: "Dillon Butler", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Mathis Courbon", min: 16, pts: 1, reb: 6, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 7, ftm: 1, fta: 3, composite: -4.3, zScores: { pts: -0.936, reb: 1.002, ast: -0.261, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -2.562, ftImpact: -1.548, to: 0.874 } },
          { name: "Ben Shtolzberg", min: 16, pts: 6, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: -0.75, zScores: { pts: -0.224, reb: -0.418, ast: -0.763, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: 0.475, ftImpact: -0.577, to: 0.874 } },
          { name: "Christian Jones", min: 23, pts: 8, reb: 2, ast: 5, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 1.87, zScores: { pts: 0.061, reb: -0.418, ast: 1.744, stl: 0.214, blk: -0.447, tpm: 0.871, fgImpact: -0.202, ftImpact: 0, to: 0.048 } },
          { name: "Navon Shabazz", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.94, zScores: { pts: -0.794, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.311, ftImpact: 0, to: 0.874 } }
        ]
      }
    },
      {
      id: "401920704",
      line: "Belmont Bruins 75 @ Lipscomb Bisons 88 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Belm", name: "Belmont Bruins", score: 75,
        players: [
          { name: "Vincent Neugebauer", min: 23, pts: 10, reb: 4, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: -1.6, zScores: { pts: 0.346, reb: 0.292, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 1.005, ftImpact: 0, to: -1.605 } },
          { name: "Ethan Sage", min: 24, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.079, reb: -0.418, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: 0, to: 0.048 } },
          { name: "Jack Smiley", min: 36, pts: 23, reb: 3, ast: 1, stl: 1, blk: 0, to: 2, tpm: 5, fgm: 8, fga: 18, ftm: 2, fta: 2, composite: 4.49, zScores: { pts: 2.198, reb: -0.063, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 3.137, fgImpact: -0.295, ftImpact: 0.786, to: -0.779 } },
          { name: "Jabez Jenkins", min: 31, pts: 14, reb: 10, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 12, ftm: 2, fta: 3, composite: 0.12, zScores: { pts: 0.916, reb: 2.422, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.328, ftImpact: -0.184, to: -0.779 } },
          { name: "Isaiah West", min: 19, pts: 4, reb: 4, ast: 5, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 1.64, zScores: { pts: -0.509, reb: 0.292, ast: 1.744, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.109, ftImpact: 0, to: 0.874 } },
          { name: "Charlie Gersmehl", min: 5, pts: 2, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -1.94, zScores: { pts: -0.794, reb: -0.773, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 0, ftImpact: 0.786, to: 0.048 } },
          { name: "Kayden Fish", min: 11, pts: 5, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -2.84, zScores: { pts: -0.367, reb: -0.418, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.109, ftImpact: -0.577, to: 0.048 } },
          { name: "Matthew Zobrist", min: 19, pts: 5, reb: 1, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 1, composite: -1.14, zScores: { pts: -0.367, reb: -0.773, ast: -0.261, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: -0.257, ftImpact: 0.393, to: 0.048 } },
          { name: "Aleksa Ristic", min: 25, pts: 10, reb: 5, ast: 7, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 10, ftm: 1, fta: 2, composite: 0.81, zScores: { pts: 0.346, reb: 0.647, ast: 2.747, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -0.513, ftImpact: -0.577, to: -0.779 } },
          { name: "Cooper Haynes", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.58, zScores: { pts: -0.794, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.311, ftImpact: 0, to: 0.874 } }
        ]
      },
      home: {
        abbr: "LIP", name: "Lipscomb Bisons", score: 88,
        players: [

        ]
      }
    },
      {
      id: "401918969",
      line: "Prairie View A&M Panthers 63 @ SMU Mustangs 98 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PV", name: "Prairie View A&M Panthers", score: 63,
        players: [

        ]
      },
      home: {
        abbr: "SMU", name: "SMU Mustangs", score: 98,
        players: [
          { name: "Jermaine O'Neal Jr.", min: 21, pts: 14, reb: 6, ast: 1, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 6, ftm: 5, fta: 6, composite: 4.48, zScores: { pts: 0.916, reb: 1.002, ast: -0.261, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: 0.951, ftImpact: 0.995, to: 0.048 } },
          { name: "Jaden Toombs", min: 20, pts: 18, reb: 9, ast: 2, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 8, fga: 11, ftm: 2, fta: 2, composite: 7.09, zScores: { pts: 1.485, reb: 2.067, ast: 0.24, stl: 2.106, blk: -0.447, tpm: -0.639, fgImpact: 2.267, ftImpact: 0.786, to: -0.779 } },
          { name: "Rowan Brumbaugh", min: 24, pts: 11, reb: 3, ast: 3, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 3, fta: 5, composite: 0.75, zScores: { pts: 0.488, reb: -0.063, ast: 0.741, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: 0.219, ftImpact: -0.762, to: 0.048 } },
          { name: "Oziyah Sellers", min: 22, pts: 8, reb: 6, ast: 4, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 4, fta: 4, composite: 4.63, zScores: { pts: 0.061, reb: 1.002, ast: 1.243, stl: 0.214, blk: 0.93, tpm: -0.639, fgImpact: -0.623, ftImpact: 1.572, to: 0.874 } },
          { name: "Jakub Szumert", min: 19, pts: 11, reb: 6, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 7, ftm: 5, fta: 7, composite: 0.33, zScores: { pts: 0.488, reb: 1.002, ast: 0.24, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: -0.202, ftImpact: 0.024, to: -0.779 } },
          { name: "Billy White III", min: 20, pts: 6, reb: 1, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -0.3, zScores: { pts: -0.224, reb: -0.773, ast: -0.261, stl: -0.732, blk: 0.93, tpm: 0.871, fgImpact: -0.989, ftImpact: 0, to: 0.874 } },
          { name: "Johan Munch", min: 20, pts: 10, reb: 6, ast: 2, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 3, fga: 3, ftm: 4, fta: 6, composite: 4.02, zScores: { pts: 0.346, reb: 1.002, ast: 0.24, stl: -0.732, blk: 3.684, tpm: -0.639, fgImpact: 1.262, ftImpact: -0.369, to: -0.779 } },
          { name: "Nigel Walls", min: 9, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.32, zScores: { pts: -0.652, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.055, ftImpact: 0, to: 0.874 } },
          { name: "Jacob Patrick", min: 12, pts: 5, reb: 2, ast: 0, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: 0.02, zScores: { pts: -0.367, reb: -0.418, ast: -0.763, stl: 2.106, blk: -0.447, tpm: 0.116, fgImpact: -1.043, ftImpact: 0.786, to: 0.048 } },
          { name: "Cameron Lomax", min: 10, pts: 7, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 3, ftm: 0, fta: 1, composite: -1.84, zScores: { pts: -0.082, reb: -0.773, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 1.262, ftImpact: -0.97, to: 0.048 } },
          { name: "David Terrell Jr.", min: 23, pts: 5, reb: 2, ast: 6, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 3, fta: 3, composite: 0.77, zScores: { pts: -0.367, reb: -0.418, ast: 2.246, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -1.043, ftImpact: 1.179, to: 0.048 } }
        ]
      }
    },
      {
      id: "401911250",
      line: "Northern Kentucky Norse 63 @ Saint Louis Billikens 125 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NKU", name: "Northern Kentucky Norse", score: 63,
        players: [

        ]
      },
      home: {
        abbr: "StLou", name: "Saint Louis Billikens", score: 125,
        players: [
          { name: "Alon Michaeli", min: 13, pts: 4, reb: 7, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -1.18, zScores: { pts: -0.509, reb: 1.357, ast: 0.24, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -0.623, ftImpact: 0, to: -0.779 } },
          { name: "Ishan Sharma", min: 22, pts: 16, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 7, ftm: 5, fta: 5, composite: 5.75, zScores: { pts: 1.2, reb: -0.063, ast: 0.741, stl: -0.732, blk: -0.447, tpm: 1.626, fgImpact: 0.585, ftImpact: 1.965, to: 0.874 } },
          { name: "Amari McCottry", min: 21, pts: 18, reb: 4, ast: 3, stl: 5, blk: 2, to: 2, tpm: 1, fgm: 7, fga: 7, ftm: 3, fta: 3, composite: 12.29, zScores: { pts: 1.485, reb: 0.292, ast: 0.741, stl: 3.998, blk: 2.307, tpm: 0.116, fgImpact: 2.944, ftImpact: 1.179, to: -0.779 } },
          { name: "Quentin Jones", min: 24, pts: 11, reb: 3, ast: 10, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: 6.9, zScores: { pts: 0.488, reb: -0.063, ast: 4.252, stl: 2.106, blk: -0.447, tpm: 0.871, fgImpact: 0.219, ftImpact: -0.577, to: 0.048 } },
          { name: "Trey Green", min: 26, pts: 22, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 7, fgm: 7, fga: 8, ftm: 1, fta: 2, composite: 8.22, zScores: { pts: 2.055, reb: -0.418, ast: 0.24, stl: -0.732, blk: -0.447, tpm: 4.647, fgImpact: 2.578, ftImpact: -0.577, to: 0.874 } },
          { name: "Badara Diakite", min: 8, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.87, zScores: { pts: -0.794, reb: -0.063, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.311, ftImpact: 0, to: 0.874 } },
          { name: "Jamison White", min: 5, pts: 4, reb: 4, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 1, composite: -1.84, zScores: { pts: -0.509, reb: 0.292, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.109, ftImpact: -0.97, to: 0.874 } },
          { name: "Sheek Pearson", min: 11, pts: 8, reb: 1, ast: 1, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 4, fta: 4, composite: 2.11, zScores: { pts: 0.061, reb: -0.773, ast: -0.261, stl: 1.16, blk: 0.93, tpm: -0.639, fgImpact: 0.841, ftImpact: 1.572, to: -0.779 } },
          { name: "Jax Kerr", min: 12, pts: 3, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 7, ftm: 3, fta: 4, composite: -3.04, zScores: { pts: -0.652, reb: 0.292, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: -2.562, ftImpact: 0.209, to: 0.874 } },
          { name: "Elijah Strong", min: 9, pts: 9, reb: 0, ast: 2, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 2.91, zScores: { pts: 0.203, reb: -1.128, ast: 0.24, stl: -0.732, blk: 0.93, tpm: 1.626, fgImpact: 0.896, ftImpact: 0, to: 0.874 } },
          { name: "Yousaf Ahmad", min: 5, pts: 2, reb: 1, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.33, zScores: { pts: -0.794, reb: -0.773, ast: -0.763, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: 0.055, ftImpact: 0, to: 0.874 } },
          { name: "Luke Laczkowski", min: 10, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.15, zScores: { pts: -1.079, reb: -0.773, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -1.098, ftImpact: 0, to: 0.874 } },
          { name: "Cam Hutson", min: 10, pts: 6, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.95, zScores: { pts: -0.224, reb: -0.773, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: -0.257, ftImpact: 0, to: 0.874 } },
          { name: "Jermel Thomas", min: 5, pts: 2, reb: 2, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: 0.4, zScores: { pts: -0.794, reb: -0.418, ast: 0.24, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: 0.421, ftImpact: 0, to: 0.874 } },
          { name: "Isaac Holmes", min: 2, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.079, reb: -1.128, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Kellen Thames", min: 17, pts: 18, reb: 7, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 8, fga: 8, ftm: 2, fta: 2, composite: 8.18, zScores: { pts: 1.485, reb: 1.357, ast: 0.24, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: 3.365, ftImpact: 0.786, to: 0.874 } }
        ]
      }
    },
      {
      id: "401909773",
      line: "Southern Jaguars 47 @ Iowa State Cyclones 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SOU", name: "Southern Jaguars", score: 47,
        players: [

        ]
      },
      home: {
        abbr: "IaSt", name: "Iowa State Cyclones", score: 84,
        players: [
          { name: "Dominykas Pleta", min: 19, pts: 14, reb: 3, ast: 3, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 7, fga: 8, ftm: 0, fta: 0, composite: 3.47, zScores: { pts: 0.916, reb: -0.063, ast: 0.741, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: 2.578, ftImpact: 0, to: -0.779 } },
          { name: "Tre Singleton", min: 21, pts: 19, reb: 3, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 8, fga: 10, ftm: 2, fta: 4, composite: 2.77, zScores: { pts: 1.628, reb: -0.063, ast: 0.741, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 2.633, ftImpact: -1.155, to: 0.048 } },
          { name: "Jamarion Batemon", min: 26, pts: 15, reb: 8, ast: 6, stl: 4, blk: 1, to: 1, tpm: 3, fgm: 4, fga: 13, ftm: 4, fta: 4, composite: 10.63, zScores: { pts: 1.058, reb: 1.712, ast: 2.246, stl: 3.052, blk: 0.93, tpm: 1.626, fgImpact: -1.611, ftImpact: 1.572, to: 0.048 } },
          { name: "Ryan Prather Jr.", min: 26, pts: 11, reb: 2, ast: 2, stl: 4, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 3, fta: 3, composite: 5.27, zScores: { pts: 0.488, reb: -0.418, ast: 0.24, stl: 3.052, blk: -0.447, tpm: 0.871, fgImpact: -0.568, ftImpact: 1.179, to: 0.874 } },
          { name: "Tamin Lipsey", min: 30, pts: 9, reb: 3, ast: 4, stl: 4, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 9, ftm: 2, fta: 2, composite: 4, zScores: { pts: 0.203, reb: -0.063, ast: 1.243, stl: 3.052, blk: -0.447, tpm: 0.116, fgImpact: -0.934, ftImpact: 0.786, to: 0.048 } },
          { name: "Dorian Rinaldo-Komlan", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.92, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Taj Manning", min: 18, pts: 2, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.66, zScores: { pts: -0.794, reb: 0.647, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.311, ftImpact: 0, to: 0.874 } },
          { name: "Xzavion Mitchell", min: 11, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -5.32, zScores: { pts: -0.652, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.311, ftImpact: -0.577, to: -0.779 } },
          { name: "Blake Buchanan", min: 24, pts: 5, reb: 9, ast: 2, stl: 3, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 5, composite: 2.38, zScores: { pts: -0.367, reb: 2.067, ast: 0.24, stl: 2.106, blk: 2.307, tpm: -0.639, fgImpact: 0.109, ftImpact: -3.489, to: 0.048 } },
          { name: "Anthony Rise", min: 1, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.85, zScores: { pts: -0.794, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.421, ftImpact: 0, to: 0.874 } },
          { name: "Jaquan Johnson", min: 14, pts: 4, reb: 1, ast: 1, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -3.79, zScores: { pts: -0.509, reb: -0.773, ast: -0.261, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: -0.677, ftImpact: 0.786, to: -2.431 } },
          { name: "Yusef Gray Jr.", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.92, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Leon Bond III", min: 4, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.41, zScores: { pts: -1.079, reb: -0.063, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: 0, to: 0.048 } }
        ]
      }
    },
      {
      id: "401909752",
      line: "Yale Bulldogs 61 @ Baylor Bears 90 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Yale", name: "Yale Bulldogs", score: 61,
        players: [
          { name: "Daniel Ogunyemi", min: 30, pts: 8, reb: 5, ast: 3, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 2.37, zScores: { pts: 0.061, reb: 0.647, ast: 0.741, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 1.317, ftImpact: 0, to: 0.048 } },
          { name: "Jack Sullivan", min: 23, pts: 3, reb: 5, ast: 2, stl: 0, blk: 1, to: 5, tpm: 0, fgm: 1, fga: 7, ftm: 1, fta: 2, composite: -5.81, zScores: { pts: -0.652, reb: 0.647, ast: 0.24, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: -1.775, ftImpact: -0.577, to: -3.257 } },
          { name: "Riley Fox", min: 30, pts: 13, reb: 6, ast: 2, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 4, fga: 9, ftm: 2, fta: 4, composite: 2.59, zScores: { pts: 0.773, reb: 1.002, ast: 0.24, stl: -0.732, blk: 0.93, tpm: 1.626, fgImpact: -0.147, ftImpact: -1.155, to: 0.048 } },
          { name: "Jordan Brathwaite", min: 31, pts: 10, reb: 4, ast: 4, stl: 2, blk: 0, to: 4, tpm: 2, fgm: 4, fga: 13, ftm: 0, fta: 0, composite: -0.58, zScores: { pts: 0.346, reb: 0.292, ast: 1.243, stl: 1.16, blk: -0.447, tpm: 0.871, fgImpact: -1.611, ftImpact: 0, to: -2.431 } },
          { name: "Trevor Mullin", min: 29, pts: 12, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -0.63, zScores: { pts: 0.631, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 2.382, fgImpact: -0.147, ftImpact: 0, to: -0.779 } },
          { name: "Connor May", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Brady Wooley", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Jonas Oware", min: 11, pts: 0, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.95, zScores: { pts: -1.079, reb: -0.418, ast: -0.261, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.048 } },
          { name: "Alvin Loving", min: 9, pts: 2, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -2.37, zScores: { pts: -0.794, reb: -0.773, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0.786, to: 0.048 } },
          { name: "Courtney Wallace", min: 26, pts: 13, reb: 1, ast: 3, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 5, fga: 8, ftm: 2, fta: 3, composite: 2.04, zScores: { pts: 0.773, reb: -0.773, ast: 0.741, stl: 0.214, blk: 0.93, tpm: 0.116, fgImpact: 1.005, ftImpact: -0.184, to: -0.779 } },
          { name: "Jeannot Basima", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } }
        ]
      },
      home: {
        abbr: "Baylor", name: "Baylor Bears", score: 90,
        players: [
          { name: "Elijah Williams", min: 16, pts: 6, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 1, fta: 3, composite: -2.39, zScores: { pts: -0.224, reb: -0.418, ast: -0.763, stl: -0.732, blk: 0.93, tpm: 0.116, fgImpact: -0.623, ftImpact: -1.548, to: 0.874 } },
          { name: "Juslin Bodo Bodo", min: 15, pts: 0, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.83, zScores: { pts: -1.079, reb: -0.418, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Brett Decker Jr.", min: 21, pts: 18, reb: 0, ast: 0, stl: 2, blk: 0, to: 0, tpm: 4, fgm: 7, fga: 12, ftm: 0, fta: 0, composite: 4.68, zScores: { pts: 1.485, reb: -1.128, ast: -0.763, stl: 1.16, blk: -0.447, tpm: 2.382, fgImpact: 1.115, ftImpact: 0, to: 0.874 } },
          { name: "Dylan Mingo", min: 24, pts: 16, reb: 6, ast: 3, stl: 3, blk: 1, to: 3, tpm: 0, fgm: 6, fga: 8, ftm: 4, fta: 7, composite: 4.19, zScores: { pts: 1.2, reb: 1.002, ast: 0.741, stl: 2.106, blk: 0.93, tpm: -0.639, fgImpact: 1.792, ftImpact: -1.339, to: -1.605 } },
          { name: "Kayden Mingo", min: 28, pts: 15, reb: 5, ast: 2, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 9, ftm: 2, fta: 3, composite: 4.06, zScores: { pts: 1.058, reb: 0.647, ast: 0.24, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: 1.426, ftImpact: -0.184, to: 0.048 } },
          { name: "Evan Chatman", min: 16, pts: 6, reb: 6, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 4, fta: 5, composite: 0.67, zScores: { pts: -0.224, reb: 1.002, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.055, ftImpact: 0.602, to: 0.874 } },
          { name: "Isaac Celiscar", min: 24, pts: 15, reb: 6, ast: 4, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 7, ftm: 3, fta: 5, composite: 3.65, zScores: { pts: 1.058, reb: 1.002, ast: 1.243, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: 1.371, ftImpact: -0.762, to: 0.048 } },
          { name: "Mayo Soyoye", min: 4, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -0.794, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.055, ftImpact: 0, to: 0.048 } },
          { name: "Caden Powell", min: 21, pts: 3, reb: 2, ast: 2, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: 0.54, zScores: { pts: -0.652, reb: -0.418, ast: 0.24, stl: 2.106, blk: -0.447, tpm: -0.639, fgImpact: 0.055, ftImpact: -0.577, to: 0.874 } },
          { name: "Drew Perry", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Isaac Williams IV", min: 27, pts: 9, reb: 0, ast: 5, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 13, ftm: 1, fta: 2, composite: -3.85, zScores: { pts: 0.203, reb: -1.128, ast: 1.744, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -1.611, ftImpact: -0.577, to: -1.605 } },
          { name: "Andre Iguodala II", min: 2, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.42, zScores: { pts: -1.079, reb: -0.773, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } }
        ]
      }
    },
      {
      id: "401920895",
      line: "Fairfield Stags 42 @ Wisconsin Badgers 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "FAIR", name: "Fairfield Stags", score: 42,
        players: [

        ]
      },
      home: {
        abbr: "Wisc", name: "Wisconsin Badgers", score: 89,
        players: [
          { name: "Victory Onuetu", min: 14, pts: 0, reb: 8, ast: 1, stl: 0, blk: 1, to: 4, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 2, composite: -4.81, zScores: { pts: -1.079, reb: 1.712, ast: -0.261, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: -0.366, ftImpact: -1.941, to: -2.431 } },
          { name: "Nolan Winter", min: 17, pts: 2, reb: 5, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -1.98, zScores: { pts: -0.794, reb: 0.647, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: -0.677, ftImpact: 0, to: 0.048 } },
          { name: "Owen Foxwell", min: 22, pts: 14, reb: 5, ast: 3, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 7, ftm: 4, fta: 7, composite: -0.36, zScores: { pts: 0.916, reb: 0.647, ast: 0.741, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: 0.585, ftImpact: -1.339, to: -1.605 } },
          { name: "Braeden Carrington", min: 21, pts: 14, reb: 6, ast: 2, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 8, ftm: 3, fta: 3, composite: 5.82, zScores: { pts: 0.916, reb: 1.002, ast: 0.24, stl: 0.214, blk: -0.447, tpm: 1.626, fgImpact: 0.219, ftImpact: 1.179, to: 0.874 } },
          { name: "Eian Elmer", min: 20, pts: 12, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 5, fta: 6, composite: 0.95, zScores: { pts: 0.631, reb: -0.063, ast: 0.24, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.164, ftImpact: 0.995, to: 0.048 } },
          { name: "Isaac Riddle", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Austin Rapp", min: 21, pts: 15, reb: 6, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 5.13, zScores: { pts: 1.058, reb: 1.002, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 1.626, fgImpact: 1.06, ftImpact: 0, to: 0.874 } },
          { name: "Will Garlock", min: 19, pts: 8, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 4, ftm: 0, fta: 0, composite: -0.5, zScores: { pts: 0.061, reb: 0.292, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 1.683, ftImpact: 0, to: 0.048 } },
          { name: "Jackson Ball", min: 19, pts: 6, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -1.69, zScores: { pts: -0.224, reb: -0.773, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.896, ftImpact: 0, to: 0.048 } },
          { name: "Hayden Jones", min: 5, pts: 6, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -2.29, zScores: { pts: -0.224, reb: -0.063, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.257, ftImpact: 0.786, to: 0.048 } },
          { name: "Jack Janicki", min: 15, pts: 2, reb: 2, ast: 2, stl: 3, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 3, composite: 0.92, zScores: { pts: -0.794, reb: -0.418, ast: 0.24, stl: 2.106, blk: 0.93, tpm: -0.639, fgImpact: -0.366, ftImpact: -0.184, to: 0.048 } },
          { name: "Trey Autry", min: 10, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.83, zScores: { pts: -0.652, reb: -0.418, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -0.311, ftImpact: 0, to: 0.874 } },
          { name: "Zach Kinziger", min: 16, pts: 7, reb: 4, ast: 2, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 4, fta: 4, composite: 1.76, zScores: { pts: -0.082, reb: 0.292, ast: 0.24, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: -0.311, ftImpact: 1.572, to: -0.779 } }
        ]
      }
    },
      {
      id: "401920817",
      line: "SE Louisiana Lions 51 @ Ole Miss Rebels 91 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SELA", name: "SE Louisiana Lions", score: 51,
        players: [

        ]
      },
      home: {
        abbr: "Miss", name: "Ole Miss Rebels", score: 91,
        players: [
          { name: "Roman Siulepa", min: 17, pts: 0, reb: 4, ast: 2, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -0.73, zScores: { pts: -1.079, reb: 0.292, ast: 0.24, stl: 0.214, blk: 0.93, tpm: -0.639, fgImpact: -0.732, ftImpact: 0, to: 0.048 } },
          { name: "Ilias Kamardine", min: 26, pts: 12, reb: 0, ast: 7, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 8, ftm: 5, fta: 5, composite: 4.4, zScores: { pts: 0.631, reb: -1.128, ast: 2.747, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: -0.568, ftImpact: 1.965, to: 0.874 } },
          { name: "Adam Clark", min: 25, pts: 23, reb: 3, ast: 3, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 10, fga: 13, ftm: 2, fta: 4, composite: 5.71, zScores: { pts: 2.198, reb: -0.063, ast: 0.741, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: 3.108, ftImpact: -1.155, to: 0.048 } },
          { name: "Corey Stephenson", min: 24, pts: 12, reb: 4, ast: 1, stl: 3, blk: 2, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 5, fta: 6, composite: 4.84, zScores: { pts: 0.631, reb: 0.292, ast: -0.261, stl: 2.106, blk: 2.307, tpm: 0.116, fgImpact: -0.568, ftImpact: 0.995, to: -0.779 } },
          { name: "Patton Pinkins", min: 27, pts: 3, reb: 2, ast: 3, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 0.7, zScores: { pts: -0.652, reb: -0.418, ast: 0.741, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: -0.677, ftImpact: 0, to: 0.874 } },
          { name: "Daniel Patton", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.9, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Christian Brown", min: 10, pts: 11, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 3, fta: 4, composite: 0.36, zScores: { pts: 0.488, reb: -0.063, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 1.317, ftImpact: 0.209, to: 0.048 } },
          { name: "Santiago Trouet", min: 19, pts: 12, reb: 7, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 6, fga: 8, ftm: 0, fta: 1, composite: 3, zScores: { pts: 0.631, reb: 1.357, ast: -0.763, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: 1.792, ftImpact: -0.97, to: 0.874 } },
          { name: "Dasear Haskins", min: 7, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.6, zScores: { pts: -0.652, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.421, ftImpact: 0, to: 0.874 } },
          { name: "Stefan Cicic", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Ben Henshall", min: 23, pts: 7, reb: 3, ast: 7, stl: 3, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: 4.5, zScores: { pts: -0.082, reb: -0.063, ast: 2.747, stl: 2.106, blk: 0.93, tpm: 0.116, fgImpact: -1.3, ftImpact: 0, to: 0.048 } },
          { name: "Zach Day", min: 5, pts: 3, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.73, zScores: { pts: -0.652, reb: -1.128, ast: -0.763, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: 0.055, ftImpact: 0, to: 0.874 } },
          { name: "Jaron Saulsberry", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.11, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.048 } },
          { name: "Yohance Connor", min: 8, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.72, zScores: { pts: -0.367, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.841, ftImpact: 0, to: 0.048 } }
        ]
      }
    },
      {
      id: "401929180",
      line: "Georgia State Panthers 92 @ Fresno State Bulldogs 95 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "GAST", name: "Georgia State Panthers", score: 92,
        players: [

        ]
      },
      home: {
        abbr: "Fres", name: "Fresno State Bulldogs", score: 95,
        players: [
          { name: "Bradey Henige", min: 33, pts: 18, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 10, ftm: 4, fta: 8, composite: -0.27, zScores: { pts: 1.485, reb: 0.292, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 1.846, ftImpact: -2.31, to: 0.048 } },
          { name: "Roger Fabrega Urpina", min: 42, pts: 14, reb: 3, ast: 12, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 10, ftm: 3, fta: 8, composite: 2.54, zScores: { pts: 0.916, reb: -0.063, ast: 5.254, stl: 0.214, blk: -0.447, tpm: 1.626, fgImpact: -0.513, ftImpact: -3.673, to: -0.779 } },
          { name: "Brian Amuneke", min: 40, pts: 27, reb: 4, ast: 1, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 8, fga: 13, ftm: 7, fta: 11, composite: 3.75, zScores: { pts: 2.768, reb: 0.292, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 2.382, fgImpact: 1.535, ftImpact: -1.131, to: -1.605 } },
          { name: "Dragos Lungu", min: 35, pts: 10, reb: 11, ast: 4, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 16, ftm: 1, fta: 2, composite: 1.84, zScores: { pts: 0.346, reb: 2.777, ast: 1.243, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: -2.709, ftImpact: -0.577, to: 0.874 } },
          { name: "Ross Candelino", min: 43, pts: 18, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 9, ftm: 5, fta: 6, composite: 5.18, zScores: { pts: 1.485, reb: 1.002, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 1.626, fgImpact: 0.639, ftImpact: 0.995, to: 0.874 } },
          { name: "Marko Vuckovic", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -3.57, zScores: { pts: -0.794, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: 0.786, to: 0.874 } },
          { name: "Anthony Granger", min: 5, pts: 0, reb: 4, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -1.27, zScores: { pts: -1.079, reb: 0.292, ast: -0.763, stl: 0.214, blk: 0.93, tpm: -0.639, fgImpact: -1.098, ftImpact: 0, to: 0.874 } },
          { name: "Baye Fall", min: 12, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.63, zScores: { pts: -0.509, reb: -0.063, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.475, ftImpact: 0, to: 0.048 } },
          { name: "KJ Perry", min: 11, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.35, zScores: { pts: -0.794, reb: -0.773, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.421, ftImpact: 0, to: 0.874 } }
        ]
      }
    },
      {
      id: "401925940",
      line: "Utah Tech Trailblazers 86 @ Utah State Aggies 118 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UTU", name: "Utah Tech Trailblazers", score: 86,
        players: [

        ]
      },
      home: {
        abbr: "UtSt", name: "Utah State Aggies", score: 118,
        players: [
          { name: "Will Hornseth", min: 26, pts: 10, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 5, ftm: 0, fta: 0, composite: 1.54, zScores: { pts: 0.346, reb: 0.292, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 2.103, ftImpact: 0, to: 0.874 } },
          { name: "Karson Templin", min: 9, pts: 0, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -2.73, zScores: { pts: -1.079, reb: -0.063, ast: 0.24, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -1.83, ftImpact: 0, to: 0.874 } },
          { name: "Solomon Callaghan", min: 30, pts: 18, reb: 2, ast: 0, stl: 2, blk: 0, to: 0, tpm: 6, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 6.84, zScores: { pts: 1.485, reb: -0.418, ast: -0.763, stl: 1.16, blk: -0.447, tpm: 3.892, fgImpact: 1.06, ftImpact: 0, to: 0.874 } },
          { name: "Mason Falslev", min: 33, pts: 24, reb: 7, ast: 5, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 9, fga: 19, ftm: 6, fta: 6, composite: 7.1, zScores: { pts: 2.34, reb: 1.357, ast: 1.744, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.126, ftImpact: 2.358, to: 0.048 } },
          { name: "Dallin Hall", min: 31, pts: 35, reb: 5, ast: 7, stl: 1, blk: 0, to: 1, tpm: 7, fgm: 12, fga: 16, ftm: 4, fta: 5, composite: 15.95, zScores: { pts: 3.907, reb: 0.647, ast: 2.747, stl: 0.214, blk: -0.447, tpm: 4.647, fgImpact: 3.584, ftImpact: 0.602, to: 0.048 } },
          { name: "Kingston Tosi", min: 29, pts: 15, reb: 8, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 6, fga: 10, ftm: 2, fta: 2, composite: 5.17, zScores: { pts: 1.058, reb: 1.712, ast: 0.741, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 1.06, ftImpact: 0.786, to: 0.874 } },
          { name: "Sean Felts", min: 12, pts: 9, reb: 7, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 8, ftm: 5, fta: 5, composite: 1.84, zScores: { pts: 0.203, reb: 1.357, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: -1.355, ftImpact: 1.965, to: 0.874 } },
          { name: "Ace Reiser", min: 4, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.78, zScores: { pts: -1.079, reb: -1.128, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Jordan Boyd", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Brayden Boe", min: 11, pts: 0, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 6, ftm: 0, fta: 0, composite: -4.4, zScores: { pts: -1.079, reb: -0.418, ast: 0.24, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -2.196, ftImpact: 0, to: 0.874 } },
          { name: "AJ Bates", min: 14, pts: 7, reb: 0, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 3, fta: 5, composite: -1.54, zScores: { pts: -0.082, reb: -1.128, ast: -0.261, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: -0.257, ftImpact: -0.762, to: 0.874 } }
        ]
      }
    },
      {
      id: "401924896",
      line: "Little Rock Trojans 69 @ New Mexico Lobos 94 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LR", name: "Little Rock Trojans", score: 69,
        players: [

        ]
      },
      home: {
        abbr: "NM", name: "New Mexico Lobos", score: 94,
        players: [
          { name: "Federico Grani", min: 14, pts: 2, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 8, composite: -5.44, zScores: { pts: -0.794, reb: 0.647, ast: -0.261, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: -5.036, to: 0.874 } },
          { name: "Tunde Vahlberg Fasasi", min: 21, pts: 11, reb: 1, ast: 1, stl: 3, blk: 3, to: 0, tpm: 3, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 7.96, zScores: { pts: 0.488, reb: -0.773, ast: -0.261, stl: 2.106, blk: 3.684, tpm: 1.626, fgImpact: 0.219, ftImpact: 0, to: 0.874 } },
          { name: "Hudson Mayes", min: 25, pts: 11, reb: 4, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 8, ftm: 1, fta: 2, composite: -1.53, zScores: { pts: 0.488, reb: 0.292, ast: -0.261, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 1.005, ftImpact: -0.577, to: -1.605 } },
          { name: "Uriah Tenette", min: 25, pts: 17, reb: 2, ast: 5, stl: 0, blk: 0, to: 2, tpm: 5, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 4.54, zScores: { pts: 1.343, reb: -0.418, ast: 1.744, stl: -0.732, blk: -0.447, tpm: 3.137, fgImpact: 0.694, ftImpact: 0, to: -0.779 } },
          { name: "Jake Hall", min: 29, pts: 39, reb: 6, ast: 2, stl: 1, blk: 0, to: 1, tpm: 6, fgm: 10, fga: 23, ftm: 13, fta: 15, composite: 12.04, zScores: { pts: 4.477, reb: 1.002, ast: 0.24, stl: 0.214, blk: -0.447, tpm: 3.892, fgImpact: -0.551, ftImpact: 3.168, to: 0.048 } },
          { name: "Fynn Lastring", min: 11, pts: 5, reb: 6, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -1.3, zScores: { pts: -0.367, reb: 1.002, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -0.989, ftImpact: 0, to: 0.874 } },
          { name: "Benjamin Schuch", min: 14, pts: 0, reb: 7, ast: 3, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: 2.83, zScores: { pts: -1.079, reb: 1.357, ast: 0.741, stl: -0.732, blk: 2.307, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Imran Suljanovic", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } },
          { name: "Rytis Petraitis", min: 9, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -3.66, zScores: { pts: -0.652, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.311, ftImpact: -0.577, to: 0.874 } },
          { name: "Dax Hall", min: 24, pts: 6, reb: 2, ast: 3, stl: 4, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: 3.96, zScores: { pts: -0.224, reb: -0.418, ast: 0.741, stl: 3.052, blk: -0.447, tpm: 0.116, fgImpact: 0.841, ftImpact: -0.577, to: 0.874 } },
          { name: "Chris Howell", min: 24, pts: 0, reb: 3, ast: 5, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: 2.13, zScores: { pts: -1.079, reb: -0.063, ast: 1.744, stl: 2.106, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "AJ Pierre-Jerome", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.874 } }
        ]
      }
    },
      {
      id: "401921733",
      line: "Hofstra Pride 63 @ Arizona State Sun Devils 85 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "HOF", name: "Hofstra Pride", score: 63,
        players: [

        ]
      },
      home: {
        abbr: "AzSt", name: "Arizona State Sun Devils", score: 85,
        players: [
          { name: "Paulius Murauskas", min: 37, pts: 22, reb: 11, ast: 3, stl: 2, blk: 3, to: 2, tpm: 0, fgm: 6, fga: 14, ftm: 10, fta: 13, composite: 9.62, zScores: { pts: 2.055, reb: 2.777, ast: 0.741, stl: 1.16, blk: 3.684, tpm: -0.639, fgImpact: -0.404, ftImpact: 1.019, to: -0.779 } },
          { name: "Ben Defty", min: 26, pts: 8, reb: 7, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 1.34, zScores: { pts: 0.061, reb: 1.357, ast: 0.741, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.951, ftImpact: 0, to: 0.048 } },
          { name: "JRob Croy", min: 28, pts: 18, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 9, ftm: 2, fta: 2, composite: 5.92, zScores: { pts: 1.485, reb: 0.292, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 2.382, fgImpact: 1.426, ftImpact: 0.786, to: 0.048 } },
          { name: "Joel Foxwell", min: 31, pts: 16, reb: 4, ast: 6, stl: 0, blk: 1, to: 3, tpm: 3, fgm: 5, fga: 9, ftm: 3, fta: 4, composite: 4.81, zScores: { pts: 1.2, reb: 0.292, ast: 2.246, stl: -0.732, blk: 0.93, tpm: 1.626, fgImpact: 0.639, ftImpact: 0.209, to: -1.605 } },
          { name: "Dillan Shaw", min: 34, pts: 5, reb: 7, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 10, ftm: 0, fta: 0, composite: -2.2, zScores: { pts: -0.367, reb: 1.357, ast: 0.741, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -2.087, ftImpact: 0, to: -0.779 } },
          { name: "Ajak Nyuon", min: 3, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 0, zScores: { pts: -0.224, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.871, fgImpact: 0.841, ftImpact: 0, to: 0.874 } },
          { name: "Filip Malesevic", min: 10, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.97, zScores: { pts: -1.079, reb: 0.292, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: -1.605 } },
          { name: "Nate Garcia", min: 4, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.35, zScores: { pts: -0.936, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: -0.577, to: 0.874 } },
          { name: "Jokubas Rudaitis", min: 6, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.78, zScores: { pts: -1.079, reb: -1.128, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Vijay Wallace", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.38, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Bryce Ford", min: 19, pts: 9, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 0.5, zScores: { pts: 0.203, reb: -0.063, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 1.626, fgImpact: -0.202, ftImpact: 0, to: 0.874 } }
        ]
      }
    },
      {
      id: "401921699",
      line: "Weber State Wildcats 64 @ Utah Utes 85 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WEB", name: "Weber State Wildcats", score: 64,
        players: [

        ]
      },
      home: {
        abbr: "Utah", name: "Utah Utes", score: 85,
        players: [
          { name: "Alec Anigbata", min: 35, pts: 21, reb: 4, ast: 1, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 6, fga: 9, ftm: 6, fta: 8, composite: 6.49, zScores: { pts: 1.913, reb: 0.292, ast: -0.261, stl: -0.732, blk: 0.93, tpm: 1.626, fgImpact: 1.426, ftImpact: 0.417, to: 0.874 } },
          { name: "Malek Gomma", min: 23, pts: 4, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.73, zScores: { pts: -0.509, reb: 0.292, ast: 0.24, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.841, ftImpact: 0, to: -0.779 } },
          { name: "TJ Burch", min: 17, pts: 4, reb: 5, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 2, fta: 4, composite: -2.06, zScores: { pts: -0.509, reb: 0.647, ast: 0.24, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: -1.409, ftImpact: -1.155, to: 0.048 } },
          { name: "Jackson Holcombe", min: 25, pts: 18, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 8, fga: 12, ftm: 1, fta: 1, composite: 1.26, zScores: { pts: 1.485, reb: -0.418, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 1.901, ftImpact: 0.393, to: -0.779 } },
          { name: "Trey Campbell", min: 37, pts: 13, reb: 2, ast: 10, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 12, ftm: 3, fta: 4, composite: 1.88, zScores: { pts: 0.773, reb: -0.418, ast: 4.252, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -0.459, ftImpact: 0.209, to: -1.605 } },
          { name: "Zati Loubaki", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.75, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.048 } },
          { name: "Jaxon Johnson", min: 21, pts: 6, reb: 8, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 1, fta: 1, composite: 1.77, zScores: { pts: -0.224, reb: 1.712, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.841, ftImpact: 0.393, to: 0.874 } },
          { name: "Babacar Faye", min: 14, pts: 7, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: -1.89, zScores: { pts: -0.082, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.896, ftImpact: -0.577, to: 0.874 } },
          { name: "Styles Clemmons", min: 3, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.22, zScores: { pts: -0.794, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.055, ftImpact: 0, to: 0.874 } },
          { name: "Taison Chatman", min: 23, pts: 10, reb: 3, ast: 3, stl: 2, blk: 1, to: 2, tpm: 2, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 3.06, zScores: { pts: 0.346, reb: -0.063, ast: 0.741, stl: 1.16, blk: 0.93, tpm: 0.871, fgImpact: -0.147, ftImpact: 0, to: -0.779 } }
        ]
      }
    },
      {
      id: "401917979",
      line: "UL Monroe Warhawks 92 @ TCU Horned Frogs 100 (Final/2OT)",
      completed: true,
      statusText: "Final/2OT",
      away: {
        abbr: "ULM", name: "UL Monroe Warhawks", score: 92,
        players: [

        ]
      },
      home: {
        abbr: "TCU", name: "TCU Horned Frogs", score: 100,
        players: [
          { name: "DJ Thomas", min: 29, pts: 10, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 3, fta: 4, composite: 0.05, zScores: { pts: 0.346, reb: 0.647, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -0.202, ftImpact: 0.209, to: 0.874 } },
          { name: "Xavier Edmonds", min: 37, pts: 17, reb: 9, ast: 4, stl: 1, blk: 2, to: 3, tpm: 1, fgm: 4, fga: 12, ftm: 8, fta: 15, composite: 0.79, zScores: { pts: 1.343, reb: 2.067, ast: 1.243, stl: 0.214, blk: 2.307, tpm: 0.116, fgImpact: -1.245, ftImpact: -3.649, to: -1.605 } },
          { name: "Tanner Toolson", min: 32, pts: 11, reb: 3, ast: 4, stl: 4, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 10, ftm: 4, fta: 5, composite: 3.74, zScores: { pts: 0.488, reb: -0.063, ast: 1.243, stl: 3.052, blk: -0.447, tpm: 0.116, fgImpact: -1.3, ftImpact: 0.602, to: 0.048 } },
          { name: "Brock Harding", min: 45, pts: 14, reb: 3, ast: 8, stl: 3, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 15, ftm: 2, fta: 2, composite: 5.08, zScores: { pts: 0.916, reb: -0.063, ast: 3.249, stl: 2.106, blk: -0.447, tpm: 0.871, fgImpact: -1.557, ftImpact: 0.786, to: -0.779 } },
          { name: "Micah Robinson", min: 44, pts: 27, reb: 5, ast: 0, stl: 2, blk: 2, to: 4, tpm: 2, fgm: 9, fga: 17, ftm: 7, fta: 10, composite: 5.26, zScores: { pts: 2.768, reb: 0.647, ast: -0.763, stl: 1.16, blk: 2.307, tpm: 0.871, fgImpact: 0.858, ftImpact: -0.16, to: -2.431 } },
          { name: "Ryan Hunt", min: 11, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: -2.58, zScores: { pts: -0.367, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.841, ftImpact: -0.577, to: 0.874 } },
          { name: "Ricards Aizpurs", min: 2, pts: 2, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -2.27, zScores: { pts: -0.794, reb: -0.773, ast: -0.763, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: 0.786, to: 0.874 } },
          { name: "Trent Lincoln", min: 12, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.92, zScores: { pts: -1.079, reb: -0.773, ast: 0.24, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Gavin Sykes", min: 38, pts: 14, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 10, ftm: 5, fta: 6, composite: 1.28, zScores: { pts: 0.916, reb: -0.063, ast: 0.24, stl: -0.732, blk: -0.447, tpm: 1.626, fgImpact: -1.3, ftImpact: 0.995, to: 0.048 } }
        ]
      }
    },
      {
      id: "401909761",
      line: "San Diego Toreros 75 @ Colorado Buffaloes 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "USD", name: "San Diego Toreros", score: 75,
        players: [
          { name: "Sekou Konneh", min: 17, pts: 2, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.38, zScores: { pts: -0.794, reb: 0.292, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.677, ftImpact: 0, to: 0.874 } },
          { name: "Jevon Hill", min: 29, pts: 18, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 6, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 4.13, zScores: { pts: 1.485, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 3.892, fgImpact: 1.06, ftImpact: 0, to: 0.048 } },
          { name: "Davion Hill", min: 24, pts: 20, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 7, fga: 21, ftm: 6, fta: 7, composite: 0.3, zScores: { pts: 1.77, reb: -0.418, ast: -0.261, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -2.179, ftImpact: 1.388, to: 0.874 } },
          { name: "Marqui Worthy Jr.", min: 30, pts: 7, reb: 3, ast: 4, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 10, ftm: 1, fta: 2, composite: 0.29, zScores: { pts: -0.082, reb: -0.063, ast: 1.243, stl: 2.106, blk: -0.447, tpm: -0.639, fgImpact: -1.3, ftImpact: -0.577, to: 0.048 } },
          { name: "Dusty Stromer", min: 35, pts: 11, reb: 6, ast: 2, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 11, ftm: 1, fta: 2, composite: 2.85, zScores: { pts: 0.488, reb: 1.002, ast: 0.24, stl: 2.106, blk: -0.447, tpm: 0.871, fgImpact: -0.879, ftImpact: -0.577, to: 0.048 } },
          { name: "Brannon Martinsen", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.74, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Antonio Munoz", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Terry McMorris", min: 13, pts: 6, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 1, composite: -2.54, zScores: { pts: -0.224, reb: 0.292, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.896, ftImpact: -0.97, to: 0.048 } },
          { name: "Jose Roberto Tanchyn", min: 23, pts: 4, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.47, zScores: { pts: -0.509, reb: 0.292, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.109, ftImpact: 0, to: -0.779 } },
          { name: "Chace Holley", min: 16, pts: 7, reb: 2, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 3, fta: 4, composite: -0.8, zScores: { pts: -0.082, reb: -0.418, ast: 1.243, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.841, ftImpact: 0.209, to: -0.779 } }
        ]
      },
      home: {
        abbr: "Col", name: "Colorado Buffaloes", score: 83,
        players: [
          { name: "Noah Feddersen", min: 30, pts: 10, reb: 6, ast: 3, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 3, fta: 4, composite: 5.76, zScores: { pts: 0.346, reb: 1.002, ast: 0.741, stl: -0.732, blk: 2.307, tpm: 0.116, fgImpact: 0.896, ftImpact: 0.209, to: 0.874 } },
          { name: "Alex Dickeson", min: 33, pts: 6, reb: 10, ast: 4, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 3, composite: 1.1, zScores: { pts: -0.224, reb: 2.422, ast: 1.243, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: -0.623, ftImpact: -0.184, to: -1.605 } },
          { name: "Ian Inman", min: 29, pts: 26, reb: 5, ast: 1, stl: 1, blk: 0, to: 1, tpm: 8, fgm: 9, fga: 14, ftm: 0, fta: 0, composite: 10.18, zScores: { pts: 2.625, reb: 0.647, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 5.402, fgImpact: 1.956, ftImpact: 0, to: 0.048 } },
          { name: "Jalin Holland", min: 17, pts: 2, reb: 0, ast: 0, stl: 0, blk: 1, to: 4, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -5.87, zScores: { pts: -0.794, reb: -1.128, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: -0.311, ftImpact: 0, to: -2.431 } },
          { name: "Barrington Hargress", min: 36, pts: 16, reb: 3, ast: 8, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 10, ftm: 6, fta: 7, composite: 5.95, zScores: { pts: 1.2, reb: -0.063, ast: 3.249, stl: 0.214, blk: -0.447, tpm: 0.871, fgImpact: -0.513, ftImpact: 1.388, to: 0.048 } },
          { name: "Goc Malual", min: 8, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.87, zScores: { pts: -0.794, reb: -0.773, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.055, ftImpact: 0, to: -0.779 } },
          { name: "David Gomez", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.74, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Justin Neely", min: 15, pts: 6, reb: 6, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 4, fta: 4, composite: 0.18, zScores: { pts: -0.224, reb: 1.002, ast: 0.741, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.311, ftImpact: 1.572, to: -0.779 } },
          { name: "Josiah Sanders", min: 30, pts: 15, reb: 5, ast: 4, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 5, fga: 9, ftm: 3, fta: 4, composite: 6.69, zScores: { pts: 1.058, reb: 0.647, ast: 1.243, stl: 0.214, blk: 0.93, tpm: 0.871, fgImpact: 0.639, ftImpact: 0.209, to: 0.874 } }
        ]
      }
    },
      {
      id: "401909492",
      line: "Creighton Bluejays 82 @ Kansas State Wildcats 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Crei", name: "Creighton Bluejays", score: 82,
        players: [
          { name: "Oswin Erhunmwunse", min: 13, pts: 4, reb: 6, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.85, zScores: { pts: -0.509, reb: 1.002, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0.841, ftImpact: 0, to: -1.605 } },
          { name: "Jackson McAndrew", min: 10, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.97, zScores: { pts: -0.652, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.055, ftImpact: 0, to: 0.874 } },
          { name: "Wes Enis", min: 34, pts: 18, reb: 2, ast: 3, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 6, fga: 16, ftm: 2, fta: 2, composite: 1.88, zScores: { pts: 1.485, reb: -0.418, ast: 0.741, stl: -0.732, blk: -0.447, tpm: 2.382, fgImpact: -1.136, ftImpact: 0.786, to: -0.779 } },
          { name: "BJ Davis", min: 34, pts: 25, reb: 3, ast: 3, stl: 3, blk: 0, to: 2, tpm: 6, fgm: 9, fga: 20, ftm: 1, fta: 1, composite: 8.09, zScores: { pts: 2.483, reb: -0.063, ast: 0.741, stl: 2.106, blk: -0.447, tpm: 3.892, fgImpact: -0.24, ftImpact: 0.393, to: -0.779 } },
          { name: "Austin Swartz", min: 21, pts: 4, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -2.97, zScores: { pts: -0.509, reb: -0.773, ast: 0.24, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.989, ftImpact: 0, to: 0.874 } },
          { name: "Trevon Carter-Givens", min: 19, pts: 7, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: 0.42, zScores: { pts: -0.082, reb: -0.063, ast: 0.24, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0.896, ftImpact: -0.577, to: 0.874 } },
          { name: "Jasen Green", min: 22, pts: 2, reb: 4, ast: 2, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.04, zScores: { pts: -0.794, reb: 0.292, ast: 0.24, stl: 0.214, blk: 0.93, tpm: -0.639, fgImpact: -0.677, ftImpact: 0, to: -1.605 } },
          { name: "Katrelle Harmon", min: 11, pts: 2, reb: 0, ast: 1, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 4, composite: -7.37, zScores: { pts: -0.794, reb: -1.128, ast: -0.261, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: -0.732, ftImpact: -1.155, to: -2.431 } },
          { name: "Brody Robinson", min: 11, pts: 10, reb: 0, ast: 2, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 5, fta: 6, composite: 1.9, zScores: { pts: 0.346, reb: -1.128, ast: 0.24, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: -0.257, ftImpact: 0.995, to: 0.874 } },
          { name: "Hudson Greer", min: 25, pts: 7, reb: 4, ast: 0, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: 2.63, zScores: { pts: -0.082, reb: 0.292, ast: -0.763, stl: 2.106, blk: -0.447, tpm: 0.116, fgImpact: -0.257, ftImpact: 0.786, to: 0.874 } }
        ]
      },
      home: {
        abbr: "KSU", name: "Kansas State Wildcats", score: 89,
        players: [
          { name: "Matt Gilhool", min: 23, pts: 11, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 1.92, zScores: { pts: 0.488, reb: 0.292, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: 0.639, ftImpact: 0, to: 0.874 } },
          { name: "Brock Vice", min: 17, pts: 8, reb: 2, ast: 6, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 2, fga: 3, ftm: 3, fta: 3, composite: 1, zScores: { pts: 0.061, reb: -0.418, ast: 2.246, stl: 0.214, blk: -0.447, tpm: 0.116, fgImpact: 0.475, ftImpact: 1.179, to: -2.431 } },
          { name: "Isaiah Abraham", min: 33, pts: 12, reb: 9, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 5, fta: 6, composite: 2.21, zScores: { pts: 0.631, reb: 2.067, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: -0.202, ftImpact: 0.995, to: 0.048 } },
          { name: "Brandon Rechsteiner", min: 32, pts: 26, reb: 5, ast: 4, stl: 1, blk: 0, to: 5, tpm: 6, fgm: 9, fga: 16, ftm: 2, fta: 2, composite: 6.93, zScores: { pts: 2.625, reb: 0.647, ast: 1.243, stl: 0.214, blk: -0.447, tpm: 3.892, fgImpact: 1.224, ftImpact: 0.786, to: -3.257 } },
          { name: "Jaden Schutt", min: 30, pts: 14, reb: 1, ast: 3, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 2.07, zScores: { pts: 0.916, reb: -0.773, ast: 0.741, stl: 0.214, blk: -0.447, tpm: 2.382, fgImpact: 0.639, ftImpact: 0, to: -1.605 } },
          { name: "Timo Malovec", min: 14, pts: 4, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -3.08, zScores: { pts: -0.509, reb: -0.773, ast: -0.261, stl: -0.732, blk: -0.447, tpm: 0.116, fgImpact: 0.055, ftImpact: -0.577, to: 0.048 } },
          { name: "Dez Lindsay", min: 10, pts: 6, reb: 2, ast: 0, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -0.85, zScores: { pts: -0.224, reb: -0.418, ast: -0.763, stl: 1.16, blk: -0.447, tpm: -0.639, fgImpact: 1.262, ftImpact: 0, to: -0.779 } },
          { name: "Pape N'Diaye", min: 10, pts: 2, reb: 2, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.95, zScores: { pts: -0.794, reb: -0.418, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: 0.421, ftImpact: 0, to: 0.048 } },
          { name: "JT Rock", min: 10, pts: 2, reb: 0, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -2.55, zScores: { pts: -0.794, reb: -1.128, ast: 0.24, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0.786, to: -0.779 } },
          { name: "Jaylen Alexander", min: 5, pts: 0, reb: 0, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.79, zScores: { pts: -1.079, reb: -1.128, ast: 0.24, stl: 0.214, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Montana Wheeler", min: 16, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -2.48, zScores: { pts: -0.509, reb: -0.418, ast: -0.261, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.311, ftImpact: 0.786, to: 0.048 } }
        ]
      }
    },
      {
      id: "401921062",
      line: "Montana Grizzlies 58 @ San Francisco Dons 63 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MONT", name: "Montana Grizzlies", score: 58,
        players: [

        ]
      },
      home: {
        abbr: "USF", name: "San Francisco Dons", score: 63,
        players: [
          { name: "Gustav Knudsen", min: 36, pts: 8, reb: 10, ast: 1, stl: 3, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 3.96, zScores: { pts: 0.061, reb: 2.422, ast: -0.261, stl: 2.106, blk: 0.93, tpm: -0.639, fgImpact: 0.164, ftImpact: 0.786, to: -1.605 } },
          { name: "Ben Oosterbaan", min: 35, pts: 16, reb: 10, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 8, ftm: 4, fta: 5, composite: 4.83, zScores: { pts: 1.2, reb: 2.422, ast: -0.261, stl: 0.214, blk: -0.447, tpm: 0.871, fgImpact: 1.005, ftImpact: 0.602, to: -0.779 } },
          { name: "Ndewedo Newbury", min: 23, pts: 13, reb: 6, ast: 1, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 6, fga: 10, ftm: 1, fta: 3, composite: -0.07, zScores: { pts: 0.773, reb: 1.002, ast: -0.261, stl: 0.214, blk: 0.93, tpm: -0.639, fgImpact: 1.06, ftImpact: -1.548, to: -1.605 } },
          { name: "Dylan Bordon", min: 31, pts: 10, reb: 2, ast: 2, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 12, ftm: 3, fta: 3, composite: -0.63, zScores: { pts: 0.346, reb: -0.418, ast: 0.24, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: -2.032, ftImpact: 1.179, to: -0.779 } },
          { name: "Yoav Vitlem", min: 28, pts: 12, reb: 1, ast: 2, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 9, ftm: 3, fta: 5, composite: -0.76, zScores: { pts: 0.631, reb: -0.773, ast: 0.24, stl: 1.16, blk: -0.447, tpm: 0.116, fgImpact: -0.147, ftImpact: -0.762, to: -0.779 } },
          { name: "Ziga Daneu", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } },
          { name: "Jaroslavs Pihtovs", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.2, zScores: { pts: -1.079, reb: -0.773, ast: -0.763, stl: -0.732, blk: 0.93, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: -0.779 } },
          { name: "Andrew Hilman", min: 22, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 4, fta: 4, composite: -2.99, zScores: { pts: -0.509, reb: -0.418, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -1.098, ftImpact: 1.572, to: 0.048 } },
          { name: "Jaylen Hunter-Coleman", min: 9, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.74, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: 0, ftImpact: 0, to: 0.048 } },
          { name: "Aidan Braccia", min: 7, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.079, reb: -1.128, ast: -0.763, stl: -0.732, blk: -0.447, tpm: -0.639, fgImpact: -0.366, ftImpact: 0, to: 0.874 } }
        ]
      }
    }
    ]
  },
    "2026-11-11": {
    games: [
      {
      id: "401925702",
      line: "Jacksonville State Gamecocks 46 @ Houston Cougars 92 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "JXST", name: "Jacksonville State Gamecocks", score: 46,
        players: [

        ]
      },
      home: {
        abbr: "Hou", name: "Houston Cougars", score: 92,
        players: [
          { name: "Delrecco Gillespie", min: 21, pts: 7, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 0.15, zScores: { pts: -0.063, reb: 0.334, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: 0.884, ftImpact: 0, to: 0.839 } },
          { name: "Chase McCarty", min: 23, pts: 6, reb: 7, ast: 1, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 2.16, zScores: { pts: -0.213, reb: 1.47, ast: -0.279, stl: -0.673, blk: 0.829, tpm: 0.902, fgImpact: 0.081, ftImpact: 0, to: 0.038 } },
          { name: "Joseph Tugler", min: 19, pts: 4, reb: 8, ast: 1, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: 2.14, zScores: { pts: -0.514, reb: 1.849, ast: -0.279, stl: -0.673, blk: 2.18, tpm: -0.617, fgImpact: -1.485, ftImpact: 0.84, to: 0.839 } },
          { name: "Dedan Thomas Jr.", min: 28, pts: 17, reb: 0, ast: 7, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 8, ftm: 6, fta: 6, composite: 5.76, zScores: { pts: 1.442, reb: -1.18, ast: 2.797, stl: 0.355, blk: -0.521, tpm: 0.142, fgImpact: 0.964, ftImpact: 2.52, to: -0.763 } },
          { name: "Mercy Miller", min: 19, pts: 15, reb: 4, ast: 5, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 7, ftm: 6, fta: 8, composite: 4.53, zScores: { pts: 1.141, reb: 0.334, ast: 1.772, stl: 1.383, blk: -0.521, tpm: 0.142, fgImpact: 0.543, ftImpact: 0.496, to: -0.763 } },
          { name: "Braden East", min: 16, pts: 8, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: -0.42, zScores: { pts: 0.088, reb: 0.713, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.502, ftImpact: 0.84, to: 0.038 } },
          { name: "Djafar Silimana", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Arafan Diane", min: 16, pts: 9, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 3, fta: 4, composite: 0.83, zScores: { pts: 0.238, reb: 0.334, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 1.265, ftImpact: 0.248, to: 0.839 } },
          { name: "Tyus Thomas", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Corey Hadnot II", min: 21, pts: 7, reb: 2, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 9, ftm: 1, fta: 2, composite: -4.44, zScores: { pts: -0.063, reb: -0.423, ast: 0.234, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -1.023, ftImpact: -0.592, to: -0.763 } },
          { name: "Ikenna Alozie", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Bryce Jackson", min: 8, pts: 4, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -0.83, zScores: { pts: -0.514, reb: -0.423, ast: -0.791, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: 0.843, ftImpact: 0, to: 0.839 } },
          { name: "Chendall Weaver", min: 11, pts: 10, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 7, fta: 8, composite: 2.3, zScores: { pts: 0.389, reb: 0.334, ast: -0.791, stl: 0.355, blk: -0.521, tpm: 0.142, fgImpact: 0.422, ftImpact: 1.928, to: 0.038 } },
          { name: "Kordel Jefferson", min: 12, pts: 5, reb: 2, ast: 0, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.84, zScores: { pts: -0.364, reb: -0.423, ast: -0.791, stl: 1.383, blk: -0.521, tpm: 0.142, fgImpact: -0.301, ftImpact: 0, to: 0.038 } }
        ]
      }
    },
      {
      id: "401930177",
      line: "Arkansas-Pine Bluff Golden Lions 37 @ UCLA Bruins 106 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UAPB", name: "Arkansas-Pine Bluff Golden Lions", score: 37,
        players: [

        ]
      },
      home: {
        abbr: "UCLA", name: "UCLA Bruins", score: 106,
        players: [
          { name: "Nikola Kusturica", min: 22, pts: 17, reb: 3, ast: 3, stl: 2, blk: 1, to: 3, tpm: 2, fgm: 7, fga: 9, ftm: 1, fta: 1, composite: 6.3, zScores: { pts: 1.442, reb: -0.044, ast: 0.747, stl: 1.383, blk: 0.829, tpm: 0.902, fgImpact: 2.189, ftImpact: 0.42, to: -1.564 } },
          { name: "Brandon Williams", min: 19, pts: 6, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -1.9, zScores: { pts: -0.213, reb: -0.044, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.081, ftImpact: 0.84, to: 0.038 } },
          { name: "Eric Dailey Jr.", min: 22, pts: 13, reb: 6, ast: 4, stl: 4, blk: 1, to: 3, tpm: 0, fgm: 5, fga: 9, ftm: 3, fta: 4, composite: 6.11, zScores: { pts: 0.84, reb: 1.092, ast: 1.259, stl: 3.438, blk: 0.829, tpm: -0.617, fgImpact: 0.583, ftImpact: 0.248, to: -1.564 } },
          { name: "Jaylen Petty", min: 24, pts: 16, reb: 2, ast: 3, stl: 3, blk: 0, to: 2, tpm: 3, fgm: 6, fga: 12, ftm: 1, fta: 2, composite: 4.05, zScores: { pts: 1.292, reb: -0.423, ast: 0.747, stl: 2.41, blk: -0.521, tpm: 1.661, fgImpact: 0.242, ftImpact: -0.592, to: -0.763 } },
          { name: "Trent Perry", min: 27, pts: 11, reb: 4, ast: 11, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 4, ftm: 4, fta: 6, composite: 6.5, zScores: { pts: 0.539, reb: 0.334, ast: 4.848, stl: 1.383, blk: -0.521, tpm: 0.142, fgImpact: 0.884, ftImpact: -0.344, to: -0.763 } },
          { name: "Gunars Grinvalds", min: 6, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.3, zScores: { pts: -1.116, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Sergej Macura", min: 20, pts: 5, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 2, composite: -1.05, zScores: { pts: -0.364, reb: 0.334, ast: -0.279, stl: 0.355, blk: -0.521, tpm: 0.142, fgImpact: 0.462, ftImpact: -2.024, to: 0.839 } },
          { name: "Joe Philon III", min: 23, pts: 10, reb: 6, ast: 1, stl: 3, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 2, fta: 3, composite: 4.61, zScores: { pts: 0.389, reb: 1.092, ast: -0.279, stl: 2.41, blk: 0.829, tpm: -0.617, fgImpact: 0.924, ftImpact: -0.172, to: 0.038 } },
          { name: "Javonte Floyd", min: 8, pts: 4, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.27, zScores: { pts: -0.514, reb: -0.423, ast: -0.791, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: 0.081, ftImpact: 0, to: 0.839 } },
          { name: "Jordan Houegban", min: 3, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.3, zScores: { pts: -0.664, reb: -1.18, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: 0.04, ftImpact: 0, to: 0.839 } },
          { name: "Markell Alston", min: 3, pts: 6, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 0.23, zScores: { pts: -0.213, reb: -1.18, ast: -0.791, stl: 0.355, blk: -0.521, tpm: 0.902, fgImpact: 0.843, ftImpact: 0, to: 0.839 } },
          { name: "Azavier Robinson", min: 23, pts: 15, reb: 1, ast: 5, stl: 3, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 13, ftm: 0, fta: 0, composite: 5.56, zScores: { pts: 1.141, reb: -0.802, ast: 1.772, stl: 2.41, blk: -0.521, tpm: 1.661, fgImpact: -0.139, ftImpact: 0, to: 0.038 } }
        ]
      }
    },
      {
      id: "401920680",
      line: "Colgate Raiders 59 @ St. John's Red Storm 90 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "COLG", name: "Colgate Raiders", score: 59,
        players: [

        ]
      },
      home: {
        abbr: "StJon", name: "St. John's Red Storm", score: 90,
        players: [
          { name: "Ruben Prey", min: 21, pts: 11, reb: 8, ast: 1, stl: 1, blk: 2, to: 2, tpm: 1, fgm: 3, fga: 7, ftm: 4, fta: 6, composite: 3.42, zScores: { pts: 0.539, reb: 1.849, ast: -0.279, stl: 0.355, blk: 2.18, tpm: 0.142, fgImpact: -0.26, ftImpact: -0.344, to: -0.763 } },
          { name: "Keyshawn Hall", min: 24, pts: 17, reb: 3, ast: 4, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 9, ftm: 5, fta: 7, composite: 1.46, zScores: { pts: 1.442, reb: -0.044, ast: 1.259, stl: -0.673, blk: -0.521, tpm: 0.902, fgImpact: 0.583, ftImpact: 0.076, to: -1.564 } },
          { name: "Quinn Ellis", min: 32, pts: 6, reb: 6, ast: 9, stl: 4, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: 8.97, zScores: { pts: -0.213, reb: 1.092, ast: 3.823, stl: 3.438, blk: 0.829, tpm: -0.617, fgImpact: -1.063, ftImpact: 0.84, to: 0.839 } },
          { name: "Tounde Yessoufou", min: 24, pts: 15, reb: 4, ast: 0, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 10, ftm: 3, fta: 4, composite: 3.96, zScores: { pts: 1.141, reb: 0.334, ast: -0.791, stl: 2.41, blk: -0.521, tpm: 0.902, fgImpact: 0.202, ftImpact: 0.248, to: 0.038 } },
          { name: "Ian Jackson", min: 20, pts: 17, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 10, ftm: 2, fta: 2, composite: 5.3, zScores: { pts: 1.442, reb: -0.044, ast: -0.279, stl: 0.355, blk: -0.521, tpm: 1.661, fgImpact: 1.005, ftImpact: 0.84, to: 0.839 } },
          { name: "Babacar Sane", min: 16, pts: 9, reb: 6, ast: 0, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -0.51, zScores: { pts: 0.238, reb: 1.092, ast: -0.791, stl: 0.355, blk: -0.521, tpm: 0.142, fgImpact: 0.543, ftImpact: 0, to: -1.564 } },
          { name: "Reed Bailey", min: 16, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.34, zScores: { pts: -0.815, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.422, ftImpact: 0, to: 0.839 } },
          { name: "Zsombor Maronka", min: 14, pts: 0, reb: 3, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -1.69, zScores: { pts: -1.116, reb: -0.044, ast: 0.234, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: -1.144, ftImpact: 0, to: 0.839 } },
          { name: "Lazar Stojkovic", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Fotis Konstantinidis", min: 1, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.35, zScores: { pts: -1.116, reb: -1.18, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.038 } },
          { name: "Casper Pohto", min: 6, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.73, zScores: { pts: -1.116, reb: -1.18, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.038 } },
          { name: "Lefteris Liotopoulos", min: 14, pts: 13, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 6, ftm: 2, fta: 2, composite: 4.61, zScores: { pts: 0.84, reb: -0.044, ast: -0.279, stl: 0.355, blk: -0.521, tpm: 1.661, fgImpact: 0.924, ftImpact: 0.84, to: 0.839 } },
          { name: "Avery Brown", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.86, zScores: { pts: -1.116, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.038 } },
          { name: "Kyle Cuffe Jr.", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } }
        ]
      }
    },
      {
      id: "401928824",
      line: "Robert Morris Colonials 53 @ Arkansas Razorbacks 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "RMU", name: "Robert Morris Colonials", score: 53,
        players: [

        ]
      },
      home: {
        abbr: "Ark", name: "Arkansas Razorbacks", score: 76,
        players: [
          { name: "Miikka Muurinen", min: 19, pts: 2, reb: 5, ast: 3, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 5, ftm: 2, fta: 4, composite: -3.67, zScores: { pts: -0.815, reb: 0.713, ast: 0.747, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: -1.907, ftImpact: -1.184, to: -0.763 } },
          { name: "Cooper Bowser", min: 30, pts: 12, reb: 10, ast: 3, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 6, fga: 8, ftm: 0, fta: 2, composite: 5.52, zScores: { pts: 0.69, reb: 2.606, ast: 0.747, stl: -0.673, blk: 2.18, tpm: -0.617, fgImpact: 1.767, ftImpact: -2.024, to: 0.839 } },
          { name: "Jeremiah Wilkinson", min: 28, pts: 10, reb: 3, ast: 4, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 1.36, zScores: { pts: 0.389, reb: -0.044, ast: 1.259, stl: 0.355, blk: -0.521, tpm: 0.902, fgImpact: -0.22, ftImpact: 0, to: -0.763 } },
          { name: "Jordan Smith Jr.", min: 24, pts: 3, reb: 5, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 8, ftm: 1, fta: 2, composite: -4.33, zScores: { pts: -0.664, reb: 0.713, ast: 0.234, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -2.248, ftImpact: -0.592, to: 0.038 } },
          { name: "Billy Richmond III", min: 30, pts: 16, reb: 4, ast: 4, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 8, fga: 14, ftm: 0, fta: 1, composite: 0.61, zScores: { pts: 1.292, reb: 0.334, ast: 1.259, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: 1.085, ftImpact: -1.012, to: -1.564 } },
          { name: "Abdou Toure", min: 12, pts: 7, reb: 2, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 3, ftm: 1, fta: 2, composite: -1.31, zScores: { pts: -0.063, reb: -0.423, ast: -0.279, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: 1.265, ftImpact: -0.592, to: -0.763 } },
          { name: "Caleb Ourigou", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.71, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "JJ Andrews", min: 21, pts: 11, reb: 8, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 4.31, zScores: { pts: 0.539, reb: 1.849, ast: -0.279, stl: 0.355, blk: -0.521, tpm: 0.142, fgImpact: 0.543, ftImpact: 0.84, to: 0.839 } },
          { name: "Maper Maker", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Davion Thompson", min: 26, pts: 15, reb: 5, ast: 7, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 8, ftm: 3, fta: 4, composite: 8.47, zScores: { pts: 1.141, reb: 0.713, ast: 2.797, stl: 1.383, blk: -0.521, tpm: 0.902, fgImpact: 0.964, ftImpact: 0.248, to: 0.839 } }
        ]
      }
    },
      {
      id: "401909524",
      line: "Marquette Golden Eagles 70 @ Michigan Wolverines 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Marq", name: "Marquette Golden Eagles", score: 70,
        players: [
          { name: "Sananda Fru", min: 22, pts: 3, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.01, zScores: { pts: -0.664, reb: -0.423, ast: -0.791, stl: 0.355, blk: -0.521, tpm: 0.142, fgImpact: -0.341, ftImpact: 0, to: -0.763 } },
          { name: "Royce Parham", min: 32, pts: 8, reb: 6, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 13, ftm: 4, fta: 4, composite: -2.32, zScores: { pts: 0.088, reb: 1.092, ast: -0.279, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -3.351, ftImpact: 1.68, to: -0.763 } },
          { name: "Damarius Owens", min: 12, pts: 5, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.68, zScores: { pts: -0.364, reb: -0.423, ast: 0.234, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: 0.081, ftImpact: 0, to: 0.839 } },
          { name: "Adrien Stevens", min: 32, pts: 16, reb: 3, ast: 3, stl: 0, blk: 1, to: 1, tpm: 4, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 5.61, zScores: { pts: 1.292, reb: -0.044, ast: 0.747, stl: -0.673, blk: 0.829, tpm: 2.42, fgImpact: 1.005, ftImpact: 0, to: 0.038 } },
          { name: "Nigel James Jr.", min: 18, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 0, fga: 11, ftm: 0, fta: 0, composite: -10.95, zScores: { pts: -1.116, reb: -1.18, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -4.195, ftImpact: 0, to: -2.365 } },
          { name: "Joshua Clark", min: 13, pts: 3, reb: 0, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -1.57, zScores: { pts: -0.664, reb: -1.18, ast: -0.791, stl: 0.355, blk: 0.829, tpm: -0.617, fgImpact: 0.04, ftImpact: 0.42, to: 0.038 } },
          { name: "Alex Egbuonu", min: 15, pts: 9, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 9, ftm: 1, fta: 2, composite: -2.38, zScores: { pts: 0.238, reb: -0.044, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.22, ftImpact: -0.592, to: 0.839 } },
          { name: "Michael Phillips II", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Ethan Johnston", min: 7, pts: 0, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.28, zScores: { pts: -1.116, reb: -0.044, ast: -0.791, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.839 } },
          { name: "Nolan Minessale", min: 21, pts: 5, reb: 5, ast: 2, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: 1.59, zScores: { pts: -0.364, reb: 0.713, ast: 0.234, stl: 2.41, blk: -0.521, tpm: 0.142, fgImpact: -1.063, ftImpact: 0, to: 0.038 } },
          { name: "Colin Porter", min: 20, pts: 21, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 7, fga: 11, ftm: 2, fta: 2, composite: 5.63, zScores: { pts: 2.044, reb: -0.423, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 3.18, fgImpact: 1.426, ftImpact: 0.84, to: 0.038 } }
        ]
      },
      home: {
        abbr: "Mich", name: "Michigan Wolverines", score: 84,
        players: [
          { name: "J.P. Estrella", min: 31, pts: 18, reb: 8, ast: 2, stl: 0, blk: 2, to: 1, tpm: 1, fgm: 8, fga: 12, ftm: 1, fta: 2, composite: 6.62, zScores: { pts: 1.593, reb: 1.849, ast: 0.234, stl: -0.673, blk: 2.18, tpm: 0.142, fgImpact: 1.848, ftImpact: -0.592, to: 0.038 } },
          { name: "Moustapha Thiam", min: 27, pts: 9, reb: 12, ast: 1, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 3, fga: 9, ftm: 3, fta: 4, composite: 4.03, zScores: { pts: 0.238, reb: 3.364, ast: -0.279, stl: -0.673, blk: 3.53, tpm: -0.617, fgImpact: -1.023, ftImpact: 0.248, to: -0.763 } },
          { name: "Roddy Gayle Jr.", min: 25, pts: 7, reb: 4, ast: 2, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: -1.32, zScores: { pts: -0.063, reb: 0.334, ast: 0.234, stl: 1.383, blk: -0.521, tpm: -0.617, fgImpact: 0.884, ftImpact: -0.592, to: -2.365 } },
          { name: "Trey McKenney", min: 36, pts: 15, reb: 5, ast: 4, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 17, ftm: 0, fta: 0, composite: 2.98, zScores: { pts: 1.141, reb: 0.713, ast: 1.259, stl: 0.355, blk: -0.521, tpm: 1.661, fgImpact: -1.665, ftImpact: 0, to: 0.038 } },
          { name: "Elliot Cadeau", min: 34, pts: 17, reb: 7, ast: 10, stl: 1, blk: 1, to: 4, tpm: 2, fgm: 6, fga: 10, ftm: 3, fta: 5, composite: 7.21, zScores: { pts: 1.442, reb: 1.47, ast: 4.335, stl: 0.355, blk: 0.829, tpm: 0.902, fgImpact: 1.005, ftImpact: -0.764, to: -2.365 } },
          { name: "Quinn Costello", min: 25, pts: 15, reb: 4, ast: 1, stl: 0, blk: 1, to: 1, tpm: 5, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 6.3, zScores: { pts: 1.141, reb: 0.334, ast: -0.279, stl: -0.673, blk: 0.829, tpm: 3.18, fgImpact: 1.727, ftImpact: 0, to: 0.038 } },
          { name: "Oscar Goodman", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.72, zScores: { pts: -0.815, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.04, ftImpact: 0, to: 0.839 } },
          { name: "Ricky Liburd", min: 13, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.24, zScores: { pts: -1.116, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.763, ftImpact: 0, to: 0.038 } },
          { name: "Kenny Noland", min: 6, pts: 1, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -3.76, zScores: { pts: -0.965, reb: -1.18, ast: -0.279, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: -0.592, to: 0.038 } }
        ]
      }
    },
      {
      id: "401918054",
      line: "USC Trojans 77 @ California Golden Bears 65 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "USC", name: "USC Trojans", score: 77,
        players: [
          { name: "Adonis Ratliff", min: 4, pts: 0, reb: 0, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3, zScores: { pts: -1.116, reb: -1.18, ast: -0.279, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.038 } },
          { name: "Jacob Cofie", min: 40, pts: 13, reb: 15, ast: 6, stl: 2, blk: 3, to: 1, tpm: 0, fgm: 5, fga: 13, ftm: 3, fta: 4, composite: 11.26, zScores: { pts: 0.84, reb: 4.5, ast: 2.285, stl: 1.383, blk: 3.53, tpm: -0.617, fgImpact: -0.942, ftImpact: 0.248, to: 0.038 } },
          { name: "Darius Ratliff", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.09, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.839 } },
          { name: "Alijah Arenas", min: 38, pts: 19, reb: 7, ast: 1, stl: 0, blk: 1, to: 5, tpm: 1, fgm: 8, fga: 16, ftm: 2, fta: 5, composite: -1.81, zScores: { pts: 1.743, reb: 1.47, ast: -0.279, stl: -0.673, blk: 0.829, tpm: 0.142, fgImpact: 0.323, ftImpact: -2.195, to: -3.166 } },
          { name: "Rodney Rice", min: 39, pts: 18, reb: 5, ast: 3, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 16, ftm: 6, fta: 6, composite: 3.46, zScores: { pts: 1.593, reb: 0.713, ast: 0.747, stl: 0.355, blk: -0.521, tpm: 0.902, fgImpact: -2.086, ftImpact: 2.52, to: -0.763 } },
          { name: "Joshua Hughes", min: 5, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.67, zScores: { pts: -0.664, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: 0.422, ftImpact: 0, to: 0.839 } },
          { name: "Aaron Hunkin-Claytor", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.68, zScores: { pts: -1.116, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Isaac Bruns", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.44, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.839 } },
          { name: "Jalen Cox", min: 2, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -2.54, zScores: { pts: -0.815, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0.84, to: 0.839 } },
          { name: "KJ Lewis", min: 33, pts: 16, reb: 3, ast: 2, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 4, fga: 9, ftm: 6, fta: 7, composite: 3.06, zScores: { pts: 1.292, reb: -0.044, ast: 0.234, stl: -0.673, blk: 0.829, tpm: 0.902, fgImpact: -0.22, ftImpact: 1.508, to: -0.763 } },
          { name: "Jadis Jones", min: 29, pts: 6, reb: 11, ast: 3, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 1, composite: 3.56, zScores: { pts: -0.213, reb: 2.985, ast: 0.747, stl: -0.673, blk: 2.18, tpm: -0.617, fgImpact: 0.121, ftImpact: -1.012, to: 0.038 } }
        ]
      },
      home: {
        abbr: "Cal", name: "California Golden Bears", score: 65,
        players: [
          { name: "Jake Wilkins", min: 27, pts: 8, reb: 2, ast: 1, stl: 2, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 4, fta: 4, composite: 3.79, zScores: { pts: 0.088, reb: -0.423, ast: -0.279, stl: 1.383, blk: 2.18, tpm: -0.617, fgImpact: -1.063, ftImpact: 1.68, to: 0.839 } },
          { name: "Sammie Yeanay", min: 17, pts: 14, reb: 3, ast: 0, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 6, fga: 12, ftm: 1, fta: 2, composite: 1.65, zScores: { pts: 0.991, reb: -0.044, ast: -0.791, stl: 1.383, blk: -0.521, tpm: 0.142, fgImpact: 0.242, ftImpact: -0.592, to: 0.839 } },
          { name: "Mantas Kocanas", min: 24, pts: 5, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: -2.8, zScores: { pts: -0.364, reb: -0.044, ast: -0.791, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -1.063, ftImpact: -0.592, to: 0.839 } },
          { name: "Nojus Indrusaitis", min: 30, pts: 13, reb: 6, ast: 3, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 14, ftm: 3, fta: 4, composite: 2.37, zScores: { pts: 0.84, reb: 1.092, ast: 0.747, stl: 0.355, blk: -0.521, tpm: 0.902, fgImpact: -2.127, ftImpact: 0.248, to: 0.839 } },
          { name: "Jordan Ross", min: 30, pts: 7, reb: 4, ast: 3, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 10, ftm: 1, fta: 3, composite: -4.34, zScores: { pts: -0.063, reb: 0.334, ast: 0.747, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -1.404, ftImpact: -1.604, to: -1.564 } },
          { name: "Amier Ali", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Dominykas Daubaris", min: 7, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -3.27, zScores: { pts: -0.664, reb: -0.423, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.341, ftImpact: -0.592, to: 0.839 } },
          { name: "Michael Cooper", min: 28, pts: 7, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -3.35, zScores: { pts: -0.063, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: -0.26, ftImpact: 0, to: -0.763 } },
          { name: "Semetri Carr", min: 17, pts: 6, reb: 5, ast: 5, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: 1.42, zScores: { pts: -0.213, reb: 0.713, ast: 1.772, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.081, ftImpact: 0.84, to: 0.038 } },
          { name: "Jovani Ruff", min: 18, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -3.3, zScores: { pts: -0.815, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.763, ftImpact: 0.84, to: 0.839 } }
        ]
      }
    },
      {
      id: "401926062",
      line: "Lindenwood Lions 60 @ Nebraska Cornhuskers 94 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LIN", name: "Lindenwood Lions", score: 60,
        players: [

        ]
      },
      home: {
        abbr: "Nebras", name: "Nebraska Cornhuskers", score: 94,
        players: [
          { name: "Braden Frager", min: 22, pts: 14, reb: 4, ast: 2, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 11, ftm: 3, fta: 3, composite: 3.91, zScores: { pts: 0.991, reb: 0.334, ast: 0.234, stl: 2.41, blk: -0.521, tpm: 0.142, fgImpact: -0.18, ftImpact: 1.26, to: -0.763 } },
          { name: "Boden Kapke", min: 12, pts: 7, reb: 2, ast: 0, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: -0.53, zScores: { pts: -0.063, reb: -0.423, ast: -0.791, stl: 1.383, blk: 0.829, tpm: -0.617, fgImpact: 0.502, ftImpact: -0.592, to: -0.763 } },
          { name: "Pryce Sandfort", min: 28, pts: 22, reb: 8, ast: 4, stl: 1, blk: 1, to: 2, tpm: 6, fgm: 7, fga: 14, ftm: 2, fta: 2, composite: 10.79, zScores: { pts: 2.195, reb: 1.849, ast: 1.259, stl: 0.355, blk: 0.829, tpm: 3.939, fgImpact: 0.282, ftImpact: 0.84, to: -0.763 } },
          { name: "Cale Jacobsen", min: 21, pts: 7, reb: 3, ast: 5, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: 4.37, zScores: { pts: -0.063, reb: -0.044, ast: 1.772, stl: 0.355, blk: 0.829, tpm: 0.142, fgImpact: -0.301, ftImpact: 0.84, to: 0.839 } },
          { name: "Trevan Leonhardt", min: 20, pts: 0, reb: 3, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.86, zScores: { pts: -1.116, reb: -0.044, ast: -0.279, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.038 } },
          { name: "Leo Curtis", min: 9, pts: 5, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 3, fta: 6, composite: -4.57, zScores: { pts: -0.364, reb: -0.423, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.04, ftImpact: -1.775, to: 0.038 } },
          { name: "Will Cooper", min: 3, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.68, zScores: { pts: -1.116, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.839 } },
          { name: "Damon Wilkinson", min: 18, pts: 19, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 8, ftm: 3, fta: 5, composite: 1.66, zScores: { pts: 1.743, reb: -0.044, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 0.902, fgImpact: 2.57, ftImpact: -0.764, to: -0.763 } },
          { name: "Sam Orme", min: 17, pts: 4, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.51, zScores: { pts: -0.514, reb: 0.334, ast: -0.791, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: 0.081, ftImpact: 0, to: 0.839 } },
          { name: "Henry Burt", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Kadyn Betts", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.839 } },
          { name: "Colin Rice", min: 4, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.76, zScores: { pts: -0.815, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.04, ftImpact: 0, to: 0.038 } },
          { name: "Jacob Lanier", min: 18, pts: 3, reb: 4, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -0.75, zScores: { pts: -0.664, reb: 0.334, ast: 1.259, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -0.341, ftImpact: -0.592, to: 0.038 } },
          { name: "Connor Essegian", min: 8, pts: 7, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -1.1, zScores: { pts: -0.063, reb: -0.802, ast: -0.791, stl: 0.355, blk: -0.521, tpm: 0.142, fgImpact: -0.26, ftImpact: 0, to: 0.839 } },
          { name: "Taj DeGourville", min: 17, pts: 4, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: 0.24, zScores: { pts: -0.514, reb: -0.802, ast: 0.234, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: 0.422, ftImpact: 0.84, to: 0.839 } }
        ]
      }
    },
      {
      id: "401920234",
      line: "Dartmouth Big Green 85 @ UAlbany Great Danes 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Dart", name: "Dartmouth Big Green", score: 85,
        players: [
          { name: "Dan Civello", min: 26, pts: 16, reb: 1, ast: 3, stl: 1, blk: 1, to: 1, tpm: 4, fgm: 5, fga: 8, ftm: 2, fta: 3, composite: 5.67, zScores: { pts: 1.292, reb: -0.802, ast: 0.747, stl: 0.355, blk: 0.829, tpm: 2.42, fgImpact: 0.964, ftImpact: -0.172, to: 0.038 } },
          { name: "Cam Hiatt", min: 28, pts: 11, reb: 6, ast: 2, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 0.55, zScores: { pts: 0.539, reb: 1.092, ast: 0.234, stl: -0.673, blk: -0.521, tpm: 1.661, fgImpact: -0.22, ftImpact: 0, to: -1.564 } },
          { name: "Landon Williams", min: 28, pts: 7, reb: 4, ast: 5, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: 1.11, zScores: { pts: -0.063, reb: 0.334, ast: 1.772, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: 0.843, ftImpact: 0.84, to: -1.564 } },
          { name: "Cameron McNamee", min: 28, pts: 10, reb: 4, ast: 0, stl: 0, blk: 2, to: 1, tpm: 2, fgm: 4, fga: 12, ftm: 0, fta: 0, composite: 1.01, zScores: { pts: 0.389, reb: 0.334, ast: -0.791, stl: -0.673, blk: 2.18, tpm: 0.902, fgImpact: -1.364, ftImpact: 0, to: 0.038 } },
          { name: "Nikola Abusara", min: 24, pts: 9, reb: 6, ast: 3, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 3, fta: 4, composite: 2.67, zScores: { pts: 0.238, reb: 1.092, ast: 0.747, stl: 0.355, blk: 0.829, tpm: -0.617, fgImpact: -0.26, ftImpact: 0.248, to: 0.038 } },
          { name: "Patrick Tivnan Jr.", min: 12, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 1, composite: -3.5, zScores: { pts: -0.514, reb: -0.423, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.301, ftImpact: -1.012, to: 0.839 } },
          { name: "Anton Strelnikov", min: 14, pts: 9, reb: 3, ast: 1, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 6, ftm: 1, fta: 1, composite: -0.06, zScores: { pts: 0.238, reb: -0.044, ast: -0.279, stl: 1.383, blk: -0.521, tpm: -0.617, fgImpact: 0.924, ftImpact: 0.42, to: -1.564 } },
          { name: "Acen Jimenez", min: 16, pts: 9, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 4, fta: 4, composite: 2.25, zScores: { pts: 0.238, reb: -0.802, ast: 0.234, stl: 0.355, blk: -0.521, tpm: 0.142, fgImpact: 0.081, ftImpact: 1.68, to: 0.839 } },
          { name: "Ernas Valauskas", min: 12, pts: 5, reb: 1, ast: 1, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -4.02, zScores: { pts: -0.364, reb: -0.802, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: 0.843, ftImpact: 0, to: -2.365 } },
          { name: "Ben Brown", min: 12, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -1.71, zScores: { pts: -0.364, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: 0.422, ftImpact: 0.84, to: 0.038 } }
        ]
      },
      home: {
        abbr: "UALB", name: "UAlbany Great Danes", score: 76,
        players: [

        ]
      }
    },
      {
      id: "401911519",
      line: "Incarnate Word Cardinals 69 @ UC Davis Aggies 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UIW", name: "Incarnate Word Cardinals", score: 69,
        players: [

        ]
      },
      home: {
        abbr: "UCDav", name: "UC Davis Aggies", score: 81,
        players: [
          { name: "Omer Suljanovic", min: 11, pts: 2, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.91, zScores: { pts: -0.815, reb: 0.334, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.422, ftImpact: 0, to: -0.763 } },
          { name: "Isaiah Chappell", min: 22, pts: 10, reb: 5, ast: 3, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 7, ftm: 2, fta: 3, composite: 1.39, zScores: { pts: 0.389, reb: 0.713, ast: 0.747, stl: 0.355, blk: -0.521, tpm: 0.902, fgImpact: -0.26, ftImpact: -0.172, to: -0.763 } },
          { name: "Jalen Stokes", min: 27, pts: 10, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: -3.16, zScores: { pts: 0.389, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.22, ftImpact: 0.84, to: -0.763 } },
          { name: "Brayden Fagbemi", min: 31, pts: 21, reb: 3, ast: 9, stl: 2, blk: 0, to: 3, tpm: 4, fgm: 6, fga: 8, ftm: 5, fta: 6, composite: 10.4, zScores: { pts: 2.044, reb: -0.044, ast: 3.823, stl: 1.383, blk: -0.521, tpm: 2.42, fgImpact: 1.767, ftImpact: 1.088, to: -1.564 } },
          { name: "Connor Sevilla", min: 29, pts: 18, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 11, fta: 12, composite: 4.81, zScores: { pts: 1.593, reb: -1.18, ast: 0.234, stl: 0.355, blk: -0.521, tpm: 0.142, fgImpact: -0.26, ftImpact: 3.608, to: 0.839 } },
          { name: "Nnadalu Noble", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.86, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.038 } },
          { name: "Veniamin Abosi", min: 21, pts: 12, reb: 10, ast: 0, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 9, ftm: 2, fta: 3, composite: 2.89, zScores: { pts: 0.69, reb: 2.606, ast: -0.791, stl: 0.355, blk: -0.521, tpm: 0.902, fgImpact: -0.22, ftImpact: -0.172, to: 0.038 } },
          { name: "Aleks Szymczyk", min: 16, pts: 0, reb: 5, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.19, zScores: { pts: -1.116, reb: 0.713, ast: 0.747, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.763, ftImpact: 0, to: 0.038 } },
          { name: "Ylan Esso-Essis", min: 13, pts: 4, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.89, zScores: { pts: -0.514, reb: -0.044, ast: -0.791, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: 0.081, ftImpact: 0, to: 0.839 } },
          { name: "Chase Rawlins", min: 9, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.43, zScores: { pts: -0.815, reb: -1.18, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.422, ftImpact: 0, to: -0.763 } },
          { name: "Clarence Massamba", min: 19, pts: 2, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -0.815, reb: -0.802, ast: -0.791, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -1.104, ftImpact: 0, to: 0.038 } }
        ]
      }
    },
      {
      id: "401918992",
      line: "South Florida Bulls 80 @ Saint Joseph's Hawks 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SoFL", name: "South Florida Bulls", score: 80,
        players: [
          { name: "Garrett Johnson", min: 21, pts: 6, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -3.09, zScores: { pts: -0.213, reb: 0.334, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.642, ftImpact: 0, to: 0.038 } },
          { name: "Zayden High", min: 25, pts: 13, reb: 8, ast: 3, stl: 1, blk: 1, to: 6, tpm: 0, fgm: 5, fga: 8, ftm: 3, fta: 3, composite: 2.26, zScores: { pts: 0.84, reb: 1.849, ast: 0.747, stl: 0.355, blk: 0.829, tpm: -0.617, fgImpact: 0.964, ftImpact: 1.26, to: -3.967 } },
          { name: "Chris Davis Jr.", min: 36, pts: 16, reb: 7, ast: 2, stl: 0, blk: 1, to: 3, tpm: 2, fgm: 6, fga: 14, ftm: 2, fta: 3, composite: 1.8, zScores: { pts: 1.292, reb: 1.47, ast: 0.234, stl: -0.673, blk: 0.829, tpm: 0.902, fgImpact: -0.521, ftImpact: -0.172, to: -1.564 } },
          { name: "Sonny Wilson", min: 39, pts: 13, reb: 3, ast: 6, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 4, fga: 13, ftm: 5, fta: 6, composite: -0.73, zScores: { pts: 0.84, reb: -0.044, ast: 2.285, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -1.745, ftImpact: 1.088, to: -2.365 } },
          { name: "Mike James", min: 34, pts: 16, reb: 9, ast: 3, stl: 0, blk: 2, to: 3, tpm: 3, fgm: 5, fga: 8, ftm: 3, fta: 4, composite: 7.08, zScores: { pts: 1.292, reb: 2.228, ast: 0.747, stl: -0.673, blk: 2.18, tpm: 1.661, fgImpact: 0.964, ftImpact: 0.248, to: -1.564 } },
          { name: "Jake Feldhaus", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Tiefing Diawara", min: 10, pts: 0, reb: 4, ast: 1, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -0.93, zScores: { pts: -1.116, reb: 0.334, ast: -0.279, stl: -0.673, blk: 2.18, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: -0.763 } },
          { name: "Andrej Shoshkikj", min: 25, pts: 15, reb: 6, ast: 1, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 11, ftm: 2, fta: 2, composite: 2.32, zScores: { pts: 1.141, reb: 1.092, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 1.661, fgImpact: -0.18, ftImpact: 0.84, to: -0.763 } },
          { name: "Josh Omojafo", min: 8, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -5.3, zScores: { pts: -0.965, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: -0.592, to: 0.038 } }
        ]
      },
      home: {
        abbr: "StJos", name: "Saint Joseph's Hawks", score: 83,
        players: [
          { name: "Sean Logan", min: 24, pts: 8, reb: 5, ast: 1, stl: 1, blk: 5, to: 2, tpm: 0, fgm: 2, fga: 6, ftm: 4, fta: 4, composite: 6.73, zScores: { pts: 0.088, reb: 0.713, ast: -0.279, stl: 0.355, blk: 6.231, tpm: -0.617, fgImpact: -0.682, ftImpact: 1.68, to: -0.763 } },
          { name: "BJ Ranson", min: 32, pts: 21, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 6, fgm: 7, fga: 13, ftm: 1, fta: 6, composite: 1.98, zScores: { pts: 2.044, reb: -0.423, ast: -0.279, stl: 0.355, blk: -0.521, tpm: 3.939, fgImpact: 0.664, ftImpact: -4.639, to: 0.839 } },
          { name: "Khaafiq Myers", min: 36, pts: 15, reb: 4, ast: 6, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 5, fga: 16, ftm: 3, fta: 4, composite: 3.24, zScores: { pts: 1.141, reb: 0.334, ast: 2.285, stl: 0.355, blk: 0.829, tpm: 0.902, fgImpact: -2.086, ftImpact: 0.248, to: -0.763 } },
          { name: "Austin Williford", min: 34, pts: 9, reb: 5, ast: 4, stl: 4, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 12, ftm: 5, fta: 6, composite: 2.67, zScores: { pts: 0.238, reb: 0.713, ast: 1.259, stl: 3.438, blk: -0.521, tpm: -0.617, fgImpact: -2.97, ftImpact: 1.088, to: 0.038 } },
          { name: "Jaiden Glover-Toscano", min: 13, pts: 5, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 7, ftm: 3, fta: 5, composite: -3.83, zScores: { pts: -0.364, reb: -0.423, ast: -0.791, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: -1.866, ftImpact: -0.764, to: 0.839 } },
          { name: "Keoni Sacco", min: 15, pts: 5, reb: 6, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 1, composite: 0.82, zScores: { pts: -0.364, reb: 1.092, ast: -0.791, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: 0.081, ftImpact: 0.42, to: 0.839 } },
          { name: "Mekai Johnson", min: 13, pts: 6, reb: 1, ast: 0, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 3, fta: 4, composite: 0.97, zScores: { pts: -0.213, reb: -0.802, ast: -0.791, stl: 2.41, blk: -0.521, tpm: 0.142, fgImpact: -0.341, ftImpact: 0.248, to: 0.839 } },
          { name: "Logan Carey", min: 20, pts: 8, reb: 4, ast: 1, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 3, fta: 4, composite: 3.02, zScores: { pts: 0.088, reb: 0.334, ast: -0.279, stl: 0.355, blk: 0.829, tpm: 0.142, fgImpact: 0.462, ftImpact: 0.248, to: 0.839 } },
          { name: "Owen Verna", min: 13, pts: 6, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.02, zScores: { pts: -0.213, reb: -0.802, ast: -0.279, stl: 0.355, blk: -0.521, tpm: 0.902, fgImpact: -0.301, ftImpact: 0, to: 0.839 } }
        ]
      }
    },
      {
      id: "401911230",
      line: "Loyola Chicago Ramblers 93 @ Air Force Falcons 107 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LoyIL", name: "Loyola Chicago Ramblers", score: 93,
        players: [
          { name: "Jason Schofield", min: 22, pts: 11, reb: 8, ast: 1, stl: 1, blk: 2, to: 0, tpm: 1, fgm: 5, fga: 7, ftm: 0, fta: 1, composite: 5.96, zScores: { pts: 0.539, reb: 1.849, ast: -0.279, stl: 0.355, blk: 2.18, tpm: 0.142, fgImpact: 1.346, ftImpact: -1.012, to: 0.839 } },
          { name: "Guillaume Grotzinger", min: 28, pts: 14, reb: 6, ast: 7, stl: 4, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 8, ftm: 5, fta: 7, composite: 8.21, zScores: { pts: 0.991, reb: 1.092, ast: 2.797, stl: 3.438, blk: -0.521, tpm: 0.142, fgImpact: 0.161, ftImpact: 0.076, to: 0.038 } },
          { name: "Dayan Nessah", min: 20, pts: 10, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 12, ftm: 0, fta: 1, composite: -1.87, zScores: { pts: 0.389, reb: 0.334, ast: -0.279, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -0.561, ftImpact: -1.012, to: 0.038 } },
          { name: "Jayden Dawson", min: 13, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -5.45, zScores: { pts: -1.116, reb: -1.18, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -1.907, ftImpact: 0, to: 0.839 } },
          { name: "Ryan Agarwal", min: 13, pts: 5, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -1.59, zScores: { pts: -0.364, reb: 0.334, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: -1.104, ftImpact: 0.84, to: 0.038 } },
          { name: "Elias Rapieque", min: 19, pts: 2, reb: 1, ast: 2, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -5.1, zScores: { pts: -0.815, reb: -0.802, ast: 0.234, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.341, ftImpact: 0, to: -1.564 } },
          { name: "Xavier Amos", min: 19, pts: 13, reb: 6, ast: 2, stl: 1, blk: 2, to: 2, tpm: 1, fgm: 5, fga: 8, ftm: 2, fta: 2, composite: 5.88, zScores: { pts: 0.84, reb: 1.092, ast: 0.234, stl: 0.355, blk: 2.18, tpm: 0.142, fgImpact: 0.964, ftImpact: 0.84, to: -0.763 } },
          { name: "Malick Diallo", min: 11, pts: 2, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.29, zScores: { pts: -0.815, reb: -0.044, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.422, ftImpact: 0, to: -0.763 } },
          { name: "Dayton Williams", min: 12, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 1, composite: -2.87, zScores: { pts: -0.514, reb: -0.044, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.462, ftImpact: -1.012, to: 0.839 } },
          { name: "Nic Anderson", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.44, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.839 } },
          { name: "Chris Jeffrey", min: 21, pts: 7, reb: 3, ast: 1, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 2, composite: -2.49, zScores: { pts: -0.063, reb: -0.044, ast: -0.279, stl: 0.355, blk: 0.829, tpm: 0.142, fgImpact: -0.642, ftImpact: -2.024, to: -0.763 } },
          { name: "Donald Hand Jr.", min: 19, pts: 25, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 9, fga: 17, ftm: 2, fta: 3, composite: 4.54, zScores: { pts: 2.646, reb: -0.423, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 3.18, fgImpact: 0.744, ftImpact: -0.172, to: 0.038 } }
        ]
      },
      home: {
        abbr: "AF", name: "Air Force Falcons", score: 107,
        players: [
          { name: "Lucas Hobin", min: 28, pts: 26, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 6, fgm: 6, fga: 12, ftm: 8, fta: 8, composite: 8.72, zScores: { pts: 2.797, reb: 0.334, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 3.939, fgImpact: 0.242, ftImpact: 3.36, to: 0.038 } },
          { name: "Caleb Walker", min: 30, pts: 15, reb: 7, ast: 2, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 5, fga: 13, ftm: 5, fta: 7, composite: 0.98, zScores: { pts: 1.141, reb: 1.47, ast: 0.234, stl: 0.355, blk: 0.829, tpm: -0.617, fgImpact: -0.942, ftImpact: 0.076, to: -1.564 } },
          { name: "Grant Best", min: 32, pts: 15, reb: 7, ast: 4, stl: 6, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 7, ftm: 6, fta: 8, composite: 11.58, zScores: { pts: 1.141, reb: 1.47, ast: 1.259, stl: 5.494, blk: -0.521, tpm: 1.661, fgImpact: -0.26, ftImpact: 0.496, to: 0.839 } },
          { name: "Justin Hinds", min: 12, pts: 2, reb: 4, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.95, zScores: { pts: -0.815, reb: 0.334, ast: 0.234, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: 0.04, ftImpact: 0, to: 0.038 } },
          { name: "Kam Sanders", min: 30, pts: 25, reb: 5, ast: 12, stl: 1, blk: 1, to: 2, tpm: 3, fgm: 8, fga: 13, ftm: 6, fta: 9, composite: 11.75, zScores: { pts: 2.646, reb: 0.713, ast: 5.361, stl: 0.355, blk: 0.829, tpm: 1.661, fgImpact: 1.467, ftImpact: -0.516, to: -0.763 } },
          { name: "Brendan Martin", min: 8, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.31, zScores: { pts: -1.116, reb: -0.802, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -1.144, ftImpact: 0, to: 0.839 } },
          { name: "Eli Robinson", min: 13, pts: 4, reb: 2, ast: 1, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 2, composite: -0.02, zScores: { pts: -0.514, reb: -0.423, ast: -0.279, stl: 0.355, blk: 2.18, tpm: -0.617, fgImpact: 0.462, ftImpact: -2.024, to: 0.839 } },
          { name: "Josh Gatete", min: 11, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.116, reb: -0.423, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.763, ftImpact: 0, to: 0.839 } },
          { name: "Ethan Greenberg", min: 20, pts: 12, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 7, ftm: 0, fta: 1, composite: 1.11, zScores: { pts: 0.69, reb: 0.334, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 0.902, fgImpact: 1.346, ftImpact: -1.012, to: 0.839 } },
          { name: "A.J. Patterson", min: 16, pts: 8, reb: 6, ast: 1, stl: 0, blk: 1, to: 5, tpm: 1, fgm: 1, fga: 2, ftm: 5, fta: 6, composite: -0.84, zScores: { pts: 0.088, reb: 1.092, ast: -0.279, stl: -0.673, blk: 0.829, tpm: 0.142, fgImpact: 0.04, ftImpact: 1.088, to: -3.166 } }
        ]
      }
    },
      {
      id: "401918978",
      line: "North Carolina A&T Aggies 67 @ East Carolina Pirates 72 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NCAT", name: "North Carolina A&T Aggies", score: 67,
        players: [

        ]
      },
      home: {
        abbr: "ECU", name: "East Carolina Pirates", score: 72,
        players: [
          { name: "Kaseem Watson", min: 36, pts: 15, reb: 4, ast: 3, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 10, ftm: 0, fta: 1, composite: 2.72, zScores: { pts: 1.141, reb: 0.334, ast: 0.747, stl: -0.673, blk: -0.521, tpm: 1.661, fgImpact: 1.005, ftImpact: -1.012, to: 0.038 } },
          { name: "Kaden Cooper", min: 19, pts: 10, reb: 6, ast: 1, stl: 3, blk: 2, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 3, fta: 6, composite: 4.74, zScores: { pts: 0.389, reb: 1.092, ast: -0.279, stl: 2.41, blk: 2.18, tpm: 0.142, fgImpact: -0.26, ftImpact: -1.775, to: 0.839 } },
          { name: "Maxim Klitschko", min: 10, pts: 0, reb: 4, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.77, zScores: { pts: -1.116, reb: 0.334, ast: 0.234, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: -0.763 } },
          { name: "Cian Medley", min: 34, pts: 8, reb: 5, ast: 6, stl: 0, blk: 0, to: 5, tpm: 2, fgm: 2, fga: 9, ftm: 2, fta: 3, composite: -2.37, zScores: { pts: 0.088, reb: 0.713, ast: 2.285, stl: -0.673, blk: -0.521, tpm: 0.902, fgImpact: -1.826, ftImpact: -0.172, to: -3.166 } },
          { name: "Brycen Blaine", min: 29, pts: 10, reb: 2, ast: 0, stl: 3, blk: 1, to: 3, tpm: 0, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: 0.05, zScores: { pts: 0.389, reb: -0.423, ast: -0.791, stl: 2.41, blk: 0.829, tpm: -0.617, fgImpact: -0.18, ftImpact: 0, to: -1.564 } },
          { name: "Jordyn Buchanan", min: 8, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.839 } },
          { name: "Jayshayne Woodard", min: 6, pts: 2, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.17, zScores: { pts: -0.815, reb: -0.044, ast: -0.791, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: 0.422, ftImpact: 0, to: 0.839 } },
          { name: "Matthew Hinton", min: 17, pts: 5, reb: 6, ast: 0, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 3, composite: 0.37, zScores: { pts: -0.364, reb: 1.092, ast: -0.791, stl: 0.355, blk: 2.18, tpm: -0.617, fgImpact: 0.081, ftImpact: -1.604, to: 0.038 } },
          { name: "Eli DeLaurier", min: 12, pts: 5, reb: 2, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 3, fta: 3, composite: 0.33, zScores: { pts: -0.364, reb: -0.423, ast: -0.791, stl: 0.355, blk: 0.829, tpm: -0.617, fgImpact: 0.04, ftImpact: 1.26, to: 0.038 } },
          { name: "Trevor Best", min: 29, pts: 17, reb: 2, ast: 6, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 4, fga: 12, ftm: 8, fta: 10, composite: 0.89, zScores: { pts: 1.442, reb: -0.423, ast: 2.285, stl: 0.355, blk: -0.521, tpm: 0.142, fgImpact: -1.364, ftImpact: 1.336, to: -2.365 } }
        ]
      }
    },
      {
      id: "401925717",
      line: "Bethune-Cookman Wildcats 75 @ San Diego State Aztecs 88 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BCU", name: "Bethune-Cookman Wildcats", score: 75,
        players: [

        ]
      },
      home: {
        abbr: "SDSU", name: "San Diego State Aztecs", score: 88,
        players: [
          { name: "Tae Simmons", min: 28, pts: 10, reb: 5, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 6, ftm: 0, fta: 1, composite: 2.11, zScores: { pts: 0.389, reb: 0.713, ast: -0.791, stl: 1.383, blk: -0.521, tpm: -0.617, fgImpact: 1.727, ftImpact: -1.012, to: 0.839 } },
          { name: "Bear Cherry", min: 28, pts: 15, reb: 3, ast: 2, stl: 1, blk: 2, to: 3, tpm: 0, fgm: 6, fga: 7, ftm: 3, fta: 6, composite: 2.06, zScores: { pts: 1.141, reb: -0.044, ast: 0.234, stl: 0.355, blk: 2.18, tpm: -0.617, fgImpact: 2.149, ftImpact: -1.775, to: -1.564 } },
          { name: "Chance Gladden", min: 28, pts: 9, reb: 3, ast: 3, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 5, fta: 7, composite: -0.83, zScores: { pts: 0.238, reb: -0.044, ast: 0.747, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -0.301, ftImpact: 0.076, to: -0.763 } },
          { name: "Elzie Harrington", min: 33, pts: 18, reb: 2, ast: 8, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 7, fga: 11, ftm: 2, fta: 3, composite: 6.28, zScores: { pts: 1.593, reb: -0.423, ast: 3.31, stl: -0.673, blk: -0.521, tpm: 0.902, fgImpact: 1.426, ftImpact: -0.172, to: 0.839 } },
          { name: "Latrell Davis", min: 31, pts: 26, reb: 3, ast: 3, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 11, fga: 15, ftm: 2, fta: 2, composite: 7.42, zScores: { pts: 2.797, reb: -0.044, ast: 0.747, stl: 0.355, blk: -0.521, tpm: 0.902, fgImpact: 3.113, ftImpact: 0.84, to: -0.763 } },
          { name: "Luca Vincini", min: 12, pts: 0, reb: 2, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.91, zScores: { pts: -1.116, reb: -0.423, ast: 0.234, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: -0.763 } },
          { name: "Luka Skoric", min: 12, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.86, zScores: { pts: -1.116, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.038 } },
          { name: "David Torresani", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -5.32, zScores: { pts: -0.815, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0.84, to: -1.564 } },
          { name: "Isaiah Sy", min: 24, pts: 8, reb: 7, ast: 4, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 2.65, zScores: { pts: 0.088, reb: 1.47, ast: 1.259, stl: -0.673, blk: -0.521, tpm: 0.902, fgImpact: 0.884, ftImpact: 0, to: -0.763 } }
        ]
      }
    },
      {
      id: "401921181",
      line: "Pennsylvania Quakers 76 @ Navy Midshipmen 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Penn", name: "Pennsylvania Quakers", score: 76,
        players: [
          { name: "Augustus Gerhart", min: 15, pts: 3, reb: 5, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: 0.62, zScores: { pts: -0.664, reb: 0.713, ast: -0.279, stl: 0.355, blk: 0.829, tpm: -0.617, fgImpact: 0.04, ftImpact: -0.592, to: 0.839 } },
          { name: "TJ Power", min: 38, pts: 26, reb: 8, ast: 2, stl: 4, blk: 1, to: 1, tpm: 4, fgm: 8, fga: 19, ftm: 6, fta: 10, composite: 9.26, zScores: { pts: 2.797, reb: 1.849, ast: 0.234, stl: 3.438, blk: 0.829, tpm: 2.42, fgImpact: -0.821, ftImpact: -1.527, to: 0.038 } },
          { name: "AJ Levine", min: 33, pts: 11, reb: 3, ast: 4, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 8, ftm: 5, fta: 8, composite: -0.34, zScores: { pts: 0.539, reb: -0.044, ast: 1.259, stl: 1.383, blk: -0.521, tpm: -0.617, fgImpact: -0.642, ftImpact: -0.936, to: -0.763 } },
          { name: "Sir Mohammed", min: 33, pts: 21, reb: 5, ast: 4, stl: 3, blk: 0, to: 3, tpm: 2, fgm: 7, fga: 13, ftm: 5, fta: 7, composite: 5.98, zScores: { pts: 2.044, reb: 0.713, ast: 1.259, stl: 2.41, blk: -0.521, tpm: 0.902, fgImpact: 0.664, ftImpact: 0.076, to: -1.564 } },
          { name: "Michael Zanoni", min: 38, pts: 13, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: 1.02, zScores: { pts: 0.84, reb: -1.18, ast: 0.234, stl: -0.673, blk: -0.521, tpm: 1.661, fgImpact: -0.18, ftImpact: 0, to: 0.839 } },
          { name: "Lucas Lueth", min: 22, pts: 2, reb: 4, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 2, composite: -3.97, zScores: { pts: -0.815, reb: 0.334, ast: -0.279, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: 0.04, ftImpact: -2.024, to: -0.763 } },
          { name: "Dalton Scantlebury", min: 12, pts: 0, reb: 6, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -0.17, zScores: { pts: -1.116, reb: 1.092, ast: -0.791, stl: 0.355, blk: 0.829, tpm: -0.617, fgImpact: -0.763, ftImpact: 0, to: 0.839 } },
          { name: "Ethan Lin", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.44, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.839 } },
          { name: "Jay Jones", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.44, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.839 } },
          { name: "Niklas Polonowski", min: 2, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.03, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } }
        ]
      },
      home: {
        abbr: "NAVY", name: "Navy Midshipmen", score: 81,
        players: [

        ]
      }
    },
      {
      id: "401925858",
      line: "Charleston Cougars 91 @ Temple Owls 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "COFC", name: "Charleston Cougars", score: 91,
        players: [

        ]
      },
      home: {
        abbr: "Tem", name: "Temple Owls", score: 81,
        players: [
          { name: "Christian Beam", min: 6, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.49, zScores: { pts: -1.116, reb: -0.044, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.763, ftImpact: 0, to: 0.038 } },
          { name: "Jordan Marsh", min: 18, pts: 8, reb: 1, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 10, ftm: 1, fta: 2, composite: -2.98, zScores: { pts: 0.088, reb: -0.802, ast: 0.747, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: -1.404, ftImpact: -0.592, to: 0.038 } },
          { name: "Gavin Griffiths", min: 32, pts: 6, reb: 8, ast: 1, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: 2.8, zScores: { pts: -0.213, reb: 1.849, ast: -0.279, stl: 0.355, blk: 0.829, tpm: 0.902, fgImpact: -0.682, ftImpact: 0, to: 0.038 } },
          { name: "Cam Scott", min: 36, pts: 26, reb: 4, ast: 1, stl: 1, blk: 1, to: 0, tpm: 4, fgm: 10, fga: 16, ftm: 2, fta: 2, composite: 10.06, zScores: { pts: 2.797, reb: 0.334, ast: -0.279, stl: 0.355, blk: 0.829, tpm: 2.42, fgImpact: 1.929, ftImpact: 0.84, to: 0.839 } },
          { name: "Derrian Ford", min: 37, pts: 18, reb: 2, ast: 6, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 8, fga: 17, ftm: 2, fta: 2, composite: 4.29, zScores: { pts: 1.593, reb: -0.423, ast: 2.285, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -0.059, ftImpact: 0.84, to: 0.839 } },
          { name: "Edwin Suarez Jr.", min: 10, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 1, composite: -4.81, zScores: { pts: -0.514, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.081, ftImpact: -1.012, to: 0.038 } },
          { name: "Baboucarr Njie", min: 19, pts: 2, reb: 4, ast: 0, stl: 0, blk: 2, to: 3, tpm: 0, fgm: 0, fga: 4, ftm: 2, fta: 4, composite: -4.66, zScores: { pts: -0.815, reb: 0.334, ast: -0.791, stl: -0.673, blk: 2.18, tpm: -0.617, fgImpact: -1.525, ftImpact: -1.184, to: -1.564 } },
          { name: "Sir Issac Herron", min: 13, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.48, zScores: { pts: -0.514, reb: -0.044, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.843, ftImpact: 0, to: 0.839 } },
          { name: "Dallis Dillard", min: 7, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.79, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -0.763, ftImpact: 0, to: 0.839 } },
          { name: "Dez White", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.82, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.763, ftImpact: 0, to: 0.839 } },
          { name: "Deuce Drake", min: 17, pts: 13, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 6, fga: 9, ftm: 1, fta: 1, composite: 1.35, zScores: { pts: 0.84, reb: -0.044, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 1.386, ftImpact: 0.42, to: 0.839 } }
        ]
      }
    },
      {
      id: "401926868",
      line: "Milwaukee Panthers 82 @ Indiana State Sycamores 73 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MILW", name: "Milwaukee Panthers", score: 82,
        players: [

        ]
      },
      home: {
        abbr: "IndSt", name: "Indiana State Sycamores", score: 73,
        players: [
          { name: "Alessio Calamita", min: 17, pts: 5, reb: 5, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 3, fta: 4, composite: -0.35, zScores: { pts: -0.364, reb: 0.713, ast: 0.234, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: 0.04, ftImpact: 0.248, to: -0.763 } },
          { name: "Jackson Cooper", min: 29, pts: 14, reb: 2, ast: 6, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 9, ftm: 4, fta: 8, composite: 0.1, zScores: { pts: 0.991, reb: -0.423, ast: 2.285, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.583, ftImpact: -2.367, to: 0.839 } },
          { name: "Maguire Mitchell", min: 33, pts: 19, reb: 3, ast: 1, stl: 1, blk: 1, to: 3, tpm: 4, fgm: 7, fga: 11, ftm: 1, fta: 1, composite: 5.31, zScores: { pts: 1.743, reb: -0.044, ast: -0.279, stl: 0.355, blk: 0.829, tpm: 2.42, fgImpact: 1.426, ftImpact: 0.42, to: -1.564 } },
          { name: "EJ McQuillan", min: 18, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.51, zScores: { pts: -1.116, reb: -0.802, ast: -0.791, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.038 } },
          { name: "Karmani Gregory", min: 35, pts: 15, reb: 4, ast: 6, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 14, ftm: 4, fta: 7, composite: 0.07, zScores: { pts: 1.141, reb: 0.334, ast: 2.285, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: -1.324, ftImpact: -1.356, to: 0.038 } },
          { name: "Kade Speckman", min: 7, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.31, zScores: { pts: -0.815, reb: -1.18, ast: -0.791, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: 0.422, ftImpact: 0, to: 0.839 } },
          { name: "Aleksa Vlajic", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.2, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -1.144, ftImpact: 0, to: 0.839 } },
          { name: "Duce Paschal", min: 16, pts: 5, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 3, fta: 4, composite: -2.8, zScores: { pts: -0.364, reb: -0.423, ast: -0.791, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -0.722, ftImpact: 0.248, to: 0.038 } },
          { name: "Meechie White", min: 16, pts: 3, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 3, composite: -4.19, zScores: { pts: -0.664, reb: -0.423, ast: 0.234, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.04, ftImpact: -1.604, to: 0.038 } },
          { name: "Chance Puryear", min: 25, pts: 10, reb: 9, ast: 1, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 12, ftm: 0, fta: 0, composite: 2.55, zScores: { pts: 0.389, reb: 2.228, ast: -0.279, stl: 0.355, blk: -0.521, tpm: 0.902, fgImpact: -1.364, ftImpact: 0, to: 0.839 } }
        ]
      }
    },
      {
      id: "401925682",
      line: "South Carolina State Bulldogs 59 @ Notre Dame Fighting Irish 99 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SCST", name: "South Carolina State Bulldogs", score: 59,
        players: [

        ]
      },
      home: {
        abbr: "ND", name: "Notre Dame Fighting Irish", score: 99,
        players: [
          { name: "Brady Koehler", min: 24, pts: 16, reb: 7, ast: 5, stl: 1, blk: 1, to: 1, tpm: 3, fgm: 5, fga: 8, ftm: 3, fta: 4, composite: 8.63, zScores: { pts: 1.292, reb: 1.47, ast: 1.772, stl: 0.355, blk: 0.829, tpm: 1.661, fgImpact: 0.964, ftImpact: 0.248, to: 0.038 } },
          { name: "Logan Duncomb", min: 23, pts: 9, reb: 10, ast: 2, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 4, fga: 4, ftm: 1, fta: 7, composite: -0.76, zScores: { pts: 0.238, reb: 2.606, ast: 0.234, stl: -0.673, blk: 2.18, tpm: -0.617, fgImpact: 1.687, ftImpact: -5.651, to: -0.763 } },
          { name: "Ethan Roberts", min: 23, pts: 36, reb: 7, ast: 2, stl: 1, blk: 0, to: 0, tpm: 10, fgm: 13, fga: 17, ftm: 0, fta: 0, composite: 17.61, zScores: { pts: 4.301, reb: 1.47, ast: 0.234, stl: 0.355, blk: -0.521, tpm: 6.976, fgImpact: 3.956, ftImpact: 0, to: 0.839 } },
          { name: "Braeden Smith", min: 22, pts: 2, reb: 0, ast: 8, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: 2.09, zScores: { pts: -0.815, reb: -1.18, ast: 3.31, stl: 1.383, blk: -0.521, tpm: -0.617, fgImpact: -1.144, ftImpact: 0.84, to: 0.839 } },
          { name: "Braeden Shrewsberry", min: 27, pts: 7, reb: 3, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: 0.17, zScores: { pts: -0.063, reb: -0.044, ast: 0.747, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: -0.301, ftImpact: 0.84, to: 0.038 } },
          { name: "Luke Devine", min: 2, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.45, zScores: { pts: -0.815, reb: -0.802, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.422, ftImpact: 0, to: 0.839 } },
          { name: "Bryce Ruglass Dortch", min: 12, pts: 1, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -3.75, zScores: { pts: -0.965, reb: 0.334, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.763, ftImpact: -0.592, to: 0.839 } },
          { name: "Yoro Diallo", min: 7, pts: 2, reb: 1, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -1.21, zScores: { pts: -0.815, reb: -0.802, ast: -0.279, stl: 0.355, blk: 0.829, tpm: -0.617, fgImpact: -0.763, ftImpact: 0.84, to: 0.038 } },
          { name: "Gan-Erdene Solongo", min: 6, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 1, composite: -4.35, zScores: { pts: -0.815, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.422, ftImpact: -1.012, to: 0.839 } },
          { name: "Jake Burow", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.839 } },
          { name: "Nick Shrewsberry", min: 5, pts: 0, reb: 1, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.18, zScores: { pts: -1.116, reb: -0.802, ast: -0.279, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: -0.763, ftImpact: 0, to: -0.763 } },
          { name: "Devin Brown", min: 14, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.69, zScores: { pts: -1.116, reb: 0.334, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -1.144, ftImpact: 0, to: 0.839 } },
          { name: "Brady Stevens", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -2.92, zScores: { pts: -0.815, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0.84, to: 0.839 } },
          { name: "Jonathan Sanderson", min: 16, pts: 10, reb: 4, ast: 2, stl: 1, blk: 0, to: 4, tpm: 2, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 0.25, zScores: { pts: 0.389, reb: 0.334, ast: 0.234, stl: 0.355, blk: -0.521, tpm: 0.902, fgImpact: 0.924, ftImpact: 0, to: -2.365 } },
          { name: "Logan Imes", min: 15, pts: 10, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: 0.48, zScores: { pts: 0.389, reb: -0.423, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 1.661, fgImpact: 0.884, ftImpact: -0.592, to: 0.038 } }
        ]
      }
    },
      {
      id: "401924735",
      line: "Stony Brook Seawolves 59 @ Princeton Tigers 69 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "STBK", name: "Stony Brook Seawolves", score: 59,
        players: [

        ]
      },
      home: {
        abbr: "Princ", name: "Princeton Tigers", score: 69,
        players: [
          { name: "Jacob Huggins", min: 17, pts: 4, reb: 5, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 1, composite: -4.48, zScores: { pts: -0.514, reb: 0.713, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.301, ftImpact: -1.012, to: -0.763 } },
          { name: "Malik Abdullahi", min: 23, pts: 6, reb: 4, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 4, composite: -1.36, zScores: { pts: -0.213, reb: 0.334, ast: -0.279, stl: 1.383, blk: -0.521, tpm: -0.617, fgImpact: -0.301, ftImpact: -1.184, to: 0.038 } },
          { name: "Landon Clark", min: 23, pts: 3, reb: 4, ast: 2, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 0.77, zScores: { pts: -0.664, reb: 0.334, ast: 0.234, stl: 1.383, blk: 0.829, tpm: 0.142, fgImpact: -0.722, ftImpact: 0, to: -0.763 } },
          { name: "Dalen Davis", min: 33, pts: 8, reb: 3, ast: 2, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: -3.47, zScores: { pts: 0.088, reb: -0.044, ast: 0.234, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -0.601, ftImpact: 0, to: -2.365 } },
          { name: "Jackson Hicke", min: 36, pts: 12, reb: 8, ast: 3, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 9, ftm: 4, fta: 4, composite: 1.37, zScores: { pts: 0.69, reb: 1.849, ast: 0.747, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.22, ftImpact: 1.68, to: -1.564 } },
          { name: "CJ Happy", min: 21, pts: 7, reb: 2, ast: 1, stl: 2, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 1.75, zScores: { pts: -0.063, reb: -0.423, ast: -0.279, stl: 1.383, blk: 0.829, tpm: 0.142, fgImpact: 0.121, ftImpact: 0, to: 0.038 } },
          { name: "Christopher Kirkpatrick", min: 26, pts: 23, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 7, fgm: 8, fga: 13, ftm: 0, fta: 0, composite: 7.68, zScores: { pts: 2.345, reb: -0.423, ast: -0.279, stl: 0.355, blk: -0.521, tpm: 4.698, fgImpact: 1.467, ftImpact: 0, to: 0.038 } },
          { name: "Ethan Sabec", min: 12, pts: 6, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.33, zScores: { pts: -0.213, reb: -0.044, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 0.902, fgImpact: 0.462, ftImpact: 0, to: 0.038 } },
          { name: "Louis O'Keefe", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Peyton Seals", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.68, zScores: { pts: -1.116, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } }
        ]
      }
    },
      {
      id: "401921821",
      line: "Saint Peter's Peacocks 41 @ South Carolina Gamecocks 77 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SPU", name: "Saint Peter's Peacocks", score: 41,
        players: [

        ]
      },
      home: {
        abbr: "SouthCar", name: "South Carolina Gamecocks", score: 77,
        players: [
          { name: "Juan Fernandez", min: 21, pts: 8, reb: 4, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 1, fta: 1, composite: -0.25, zScores: { pts: 0.088, reb: 0.334, ast: -0.791, stl: -0.673, blk: 0.829, tpm: 0.142, fgImpact: -0.642, ftImpact: 0.42, to: 0.038 } },
          { name: "Aleksas Bieliauskas", min: 24, pts: 11, reb: 3, ast: 1, stl: 0, blk: 2, to: 0, tpm: 3, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 5.57, zScores: { pts: 0.539, reb: -0.044, ast: -0.279, stl: -0.673, blk: 2.18, tpm: 1.661, fgImpact: 0.502, ftImpact: 0.84, to: 0.839 } },
          { name: "Jakub Necas", min: 23, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.22, zScores: { pts: -0.213, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 0.902, fgImpact: 0.462, ftImpact: 0, to: 0.038 } },
          { name: "Kory Mincy", min: 16, pts: 0, reb: 0, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 1, composite: -4.96, zScores: { pts: -1.116, reb: -1.18, ast: 0.234, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -1.144, ftImpact: -1.012, to: 0.038 } },
          { name: "Marcus Johnson", min: 25, pts: 20, reb: 3, ast: 6, stl: 5, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 7, ftm: 11, fta: 17, composite: 7.35, zScores: { pts: 1.894, reb: -0.044, ast: 2.285, stl: 4.466, blk: -0.521, tpm: 0.142, fgImpact: 0.543, ftImpact: -1.451, to: 0.038 } },
          { name: "Hugo Lopez", min: 16, pts: 9, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 3, fta: 3, composite: 2.87, zScores: { pts: 0.238, reb: 0.713, ast: -0.279, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: 0.884, ftImpact: 1.26, to: 0.839 } },
          { name: "Hayden Assemian", min: 12, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.04, zScores: { pts: -0.514, reb: -0.044, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.081, ftImpact: 0, to: 0.038 } },
          { name: "Ford Wilder", min: 2, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.116, reb: -1.18, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Shane Blakeney", min: 28, pts: 9, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: -1.57, zScores: { pts: 0.238, reb: -0.423, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 0.902, fgImpact: -0.301, ftImpact: 0.248, to: -0.763 } },
          { name: "Eli Sparkman", min: 12, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.66, zScores: { pts: -1.116, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: -0.763 } },
          { name: "Davion Hannah", min: 21, pts: 10, reb: 6, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 6, fta: 6, composite: 3, zScores: { pts: 0.389, reb: 1.092, ast: -0.279, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: -0.301, ftImpact: 2.52, to: 0.038 } }
        ]
      }
    },
      {
      id: "401920202",
      line: "NJIT Highlanders 49 @ VCU Rams 87 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NJIT", name: "NJIT Highlanders", score: 49,
        players: [

        ]
      },
      home: {
        abbr: "VCU", name: "VCU Rams", score: 87,
        players: [
          { name: "Lazar Djokovic", min: 25, pts: 15, reb: 7, ast: 3, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 10, ftm: 5, fta: 9, composite: -0.73, zScores: { pts: 1.141, reb: 1.47, ast: 0.747, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: 0.202, ftImpact: -1.947, to: -1.564 } },
          { name: "Michael Belle", min: 16, pts: 5, reb: 9, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 3, composite: -1.51, zScores: { pts: -0.364, reb: 2.228, ast: -0.791, stl: -0.673, blk: 0.829, tpm: 0.142, fgImpact: -0.682, ftImpact: -3.035, to: 0.839 } },
          { name: "Nyk Lewis", min: 28, pts: 12, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 4.49, zScores: { pts: 0.69, reb: 1.092, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 2.42, fgImpact: 0.924, ftImpact: 0, to: 0.839 } },
          { name: "Blake Harper", min: 26, pts: 8, reb: 3, ast: 5, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 6, fta: 6, composite: 2.1, zScores: { pts: 0.088, reb: -0.044, ast: 1.772, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -1.485, ftImpact: 2.52, to: 0.038 } },
          { name: "Brandon Jennings", min: 19, pts: 6, reb: 3, ast: 3, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 3.04, zScores: { pts: -0.213, reb: -0.044, ast: 0.747, stl: 1.383, blk: 0.829, tpm: -0.617, fgImpact: 0.121, ftImpact: 0, to: 0.839 } },
          { name: "Stefan Plisnic", min: 4, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.93, zScores: { pts: -1.116, reb: -1.18, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.839 } },
          { name: "Collin Ross", min: 10, pts: 2, reb: 3, ast: 1, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 2, composite: -2.35, zScores: { pts: -0.815, reb: -0.044, ast: -0.279, stl: 0.355, blk: 2.18, tpm: -0.617, fgImpact: -0.341, ftImpact: -2.024, to: -0.763 } },
          { name: "Torey Alston", min: 19, pts: 19, reb: 7, ast: 3, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 8, fga: 10, ftm: 3, fta: 3, composite: 7.96, zScores: { pts: 1.743, reb: 1.47, ast: 0.747, stl: -0.673, blk: 2.18, tpm: -0.617, fgImpact: 2.611, ftImpact: 1.26, to: -0.763 } },
          { name: "Joshua Wyche", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Sammy Jackson", min: 14, pts: 7, reb: 3, ast: 0, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 4, fta: 4, composite: 3.63, zScores: { pts: -0.063, reb: -0.044, ast: -0.791, stl: 1.383, blk: 0.829, tpm: 0.142, fgImpact: -0.341, ftImpact: 1.68, to: 0.839 } },
          { name: "Nyle Ralph-Beyer", min: 6, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.116, reb: -1.18, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Ahmad Nowell", min: 16, pts: 5, reb: 3, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.59, zScores: { pts: -0.364, reb: -0.044, ast: 0.747, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: 0.081, ftImpact: 0, to: 0.038 } },
          { name: "Tyrell Ward", min: 14, pts: 8, reb: 2, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 4, fta: 6, composite: -1.81, zScores: { pts: 0.088, reb: -0.423, ast: -0.791, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: 0.081, ftImpact: -0.344, to: 0.038 } }
        ]
      }
    },
      {
      id: "401918452",
      line: "William & Mary Tribe 90 @ Florida Atlantic Owls 95 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "W&M", name: "William & Mary Tribe", score: 90,
        players: [

        ]
      },
      home: {
        abbr: "FAU", name: "Florida Atlantic Owls", score: 95,
        players: [
          { name: "Josh Harris", min: 26, pts: 25, reb: 8, ast: 0, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 10, fga: 14, ftm: 2, fta: 2, composite: 9.09, zScores: { pts: 2.646, reb: 1.849, ast: -0.791, stl: -0.673, blk: 0.829, tpm: 1.661, fgImpact: 2.691, ftImpact: 0.84, to: 0.038 } },
          { name: "Tacko Ifaola", min: 14, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.38, zScores: { pts: -0.815, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.422, ftImpact: 0, to: 0.038 } },
          { name: "Felipe Quinones", min: 39, pts: 5, reb: 5, ast: 10, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: 0.42, zScores: { pts: -0.364, reb: 0.713, ast: 4.335, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.301, ftImpact: -0.592, to: -1.564 } },
          { name: "Jelani Hamilton", min: 19, pts: 21, reb: 3, ast: 2, stl: 1, blk: 1, to: 2, tpm: 5, fgm: 8, fga: 13, ftm: 0, fta: 0, composite: 7.3, zScores: { pts: 2.044, reb: -0.044, ast: 0.234, stl: 0.355, blk: 0.829, tpm: 3.18, fgImpact: 1.467, ftImpact: 0, to: -0.763 } },
          { name: "Kanaan Carlyle", min: 38, pts: 21, reb: 7, ast: 3, stl: 0, blk: 0, to: 6, tpm: 4, fgm: 5, fga: 11, ftm: 7, fta: 8, composite: 3.27, zScores: { pts: 2.044, reb: 1.47, ast: 0.747, stl: -0.673, blk: -0.521, tpm: 2.42, fgImpact: -0.18, ftImpact: 1.928, to: -3.967 } },
          { name: "Matthew Puodziukaitis", min: 5, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.17, zScores: { pts: -1.116, reb: -0.802, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "David Musis", min: 5, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.96, zScores: { pts: -0.815, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.422, ftImpact: 0, to: 0.839 } },
          { name: "Mason Porter-Brown", min: 19, pts: 5, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 9, ftm: 2, fta: 2, composite: -2.84, zScores: { pts: -0.364, reb: -0.423, ast: -0.279, stl: 0.355, blk: -0.521, tpm: 0.142, fgImpact: -2.629, ftImpact: 0.84, to: 0.038 } },
          { name: "Kieran Mullen", min: 13, pts: 14, reb: 8, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 5, fga: 8, ftm: 4, fta: 5, composite: 5.41, zScores: { pts: 0.991, reb: 1.849, ast: -0.791, stl: -0.673, blk: 2.18, tpm: -0.617, fgImpact: 0.964, ftImpact: 0.668, to: 0.839 } },
          { name: "Milhan Charles", min: 22, pts: 0, reb: 2, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.43, zScores: { pts: -1.116, reb: -0.423, ast: 1.259, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.038 } }
        ]
      }
    },
      {
      id: "401911263",
      line: "Cornell Big Red 64 @ St. Bonaventure Bonnies 88 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Corn", name: "Cornell Big Red", score: 64,
        players: [
          { name: "Quinn Gibson", min: 25, pts: 11, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 9, ftm: 1, fta: 2, composite: -0.43, zScores: { pts: 0.539, reb: 1.092, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.583, ftImpact: -0.592, to: 0.038 } },
          { name: "Kaspar Sepp", min: 16, pts: 4, reb: 1, ast: 2, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: 0.11, zScores: { pts: -0.514, reb: -0.802, ast: 0.234, stl: 0.355, blk: 0.829, tpm: 0.142, fgImpact: 0.422, ftImpact: -0.592, to: 0.038 } },
          { name: "Anthony Nimani", min: 18, pts: 7, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -1.86, zScores: { pts: -0.063, reb: -1.18, ast: 0.234, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: -0.642, ftImpact: 0, to: 0.839 } },
          { name: "Mateen Rafiq", min: 22, pts: 3, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -0.664, reb: -0.802, ast: 0.234, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: -1.485, ftImpact: 0, to: 0.038 } },
          { name: "Jacob Beccles", min: 18, pts: 8, reb: 0, ast: 2, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 10, ftm: 0, fta: 2, composite: -4, zScores: { pts: 0.088, reb: -1.18, ast: 0.234, stl: 1.383, blk: -0.521, tpm: -0.617, fgImpact: -0.601, ftImpact: -2.024, to: -0.763 } },
          { name: "Mikehi Williams", min: 18, pts: 5, reb: 2, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.65, zScores: { pts: -0.364, reb: -0.423, ast: -0.279, stl: -0.673, blk: 0.829, tpm: 0.142, fgImpact: 0.081, ftImpact: 0, to: 0.038 } },
          { name: "Blake Lecklitner", min: 13, pts: 4, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -0.514, reb: 0.334, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -1.063, ftImpact: 0, to: -0.763 } },
          { name: "Jax Abalos", min: 13, pts: 8, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -1.64, zScores: { pts: 0.088, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 0.902, fgImpact: 0.502, ftImpact: 0, to: 0.038 } },
          { name: "Gioacchino Panzini", min: 8, pts: 0, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.66, zScores: { pts: -1.116, reb: -0.044, ast: -0.791, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -0.763, ftImpact: 0, to: 0.839 } },
          { name: "Ian Imegwu", min: 9, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.91, zScores: { pts: -1.116, reb: -1.18, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.763, ftImpact: 0, to: -0.763 } },
          { name: "Luke Kennevan", min: 6, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.42, zScores: { pts: -1.116, reb: -0.802, ast: 0.234, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.763, ftImpact: 0, to: 0.839 } },
          { name: "Sage Mateo", min: 10, pts: 8, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: 1.37, zScores: { pts: 0.088, reb: -0.423, ast: -0.791, stl: 0.355, blk: -0.521, tpm: 0.902, fgImpact: 0.081, ftImpact: 0.84, to: 0.839 } },
          { name: "JJ Sanchez", min: 7, pts: 0, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.66, zScores: { pts: -1.116, reb: -0.044, ast: 0.234, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.763, ftImpact: 0, to: 0.839 } },
          { name: "Ryan Burbach", min: 14, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.42, zScores: { pts: -0.213, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 0.902, fgImpact: 0.462, ftImpact: 0, to: 0.839 } },
          { name: "Elijah Griffin", min: 3, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.17, zScores: { pts: -1.116, reb: -0.802, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } }
        ]
      },
      home: {
        abbr: "StBon", name: "St. Bonaventure Bonnies", score: 88,
        players: [
          { name: "Benjamin Bill", min: 28, pts: 28, reb: 6, ast: 2, stl: 0, blk: 4, to: 1, tpm: 0, fgm: 13, fga: 15, ftm: 2, fta: 4, composite: 11.59, zScores: { pts: 3.097, reb: 1.092, ast: 0.234, stl: -0.673, blk: 4.881, tpm: -0.617, fgImpact: 4.719, ftImpact: -1.184, to: 0.038 } },
          { name: "Zach Philipkoski", min: 27, pts: 6, reb: 7, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: 0.81, zScores: { pts: -0.213, reb: 1.47, ast: 0.234, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: -0.301, ftImpact: 0.84, to: -0.763 } },
          { name: "Ilia Ermakov", min: 28, pts: 9, reb: 6, ast: 3, stl: 3, blk: 1, to: 3, tpm: 1, fgm: 3, fga: 8, ftm: 2, fta: 4, composite: 2.07, zScores: { pts: 0.238, reb: 1.092, ast: 0.747, stl: 2.41, blk: 0.829, tpm: 0.142, fgImpact: -0.642, ftImpact: -1.184, to: -1.564 } },
          { name: "Taj Au-Duke", min: 27, pts: 10, reb: 1, ast: 5, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 10, ftm: 4, fta: 6, composite: -0.11, zScores: { pts: 0.389, reb: -0.802, ast: 1.772, stl: 1.383, blk: -0.521, tpm: -0.617, fgImpact: -1.404, ftImpact: -0.344, to: 0.038 } },
          { name: "Ari Fulton", min: 30, pts: 14, reb: 8, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 8, ftm: 4, fta: 6, composite: 4.59, zScores: { pts: 0.991, reb: 1.849, ast: -0.279, stl: 0.355, blk: 0.829, tpm: -0.617, fgImpact: 0.964, ftImpact: -0.344, to: 0.839 } },
          { name: "John Ikpotokin", min: 3, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -2.54, zScores: { pts: -0.815, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0.84, to: 0.839 } },
          { name: "Ryan Kalambay", min: 17, pts: 5, reb: 8, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 3, fta: 6, composite: -0.47, zScores: { pts: -0.364, reb: 1.849, ast: -0.279, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: 0.04, ftImpact: -1.775, to: 0.839 } },
          { name: "Chiek Diallo", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.44, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.839 } },
          { name: "Leo Kirk", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Ryan Heath", min: 13, pts: 4, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -1.24, zScores: { pts: -0.514, reb: -0.044, ast: 0.747, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -0.682, ftImpact: 0, to: 0.038 } },
          { name: "Achille Lonati", min: 9, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.62, zScores: { pts: -0.514, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.081, ftImpact: 0, to: 0.839 } },
          { name: "Akbar Waheed III", min: 13, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -1.89, zScores: { pts: -0.213, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.884, ftImpact: 0, to: 0.839 } },
          { name: "Jack DeRose", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } }
        ]
      }
    },
      {
      id: "401928794",
      line: "Pepperdine Waves 77 @ Sam Houston Bearkats 85 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Pepp", name: "Pepperdine Waves", score: 77,
        players: [
          { name: "Oliver Kanden", min: 27, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.3, zScores: { pts: -0.664, reb: -0.802, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: -0.341, ftImpact: 0, to: 0.839 } },
          { name: "Petar Majstorovic", min: 31, pts: 12, reb: 4, ast: 0, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 11, ftm: 4, fta: 6, composite: -1.61, zScores: { pts: 0.69, reb: 0.334, ast: -0.791, stl: 1.383, blk: -0.521, tpm: -0.617, fgImpact: -0.983, ftImpact: -0.344, to: -0.763 } },
          { name: "Anthony Robinson", min: 18, pts: 9, reb: 9, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 5, fta: 14, composite: -4.7, zScores: { pts: 0.238, reb: 2.228, ast: -0.791, stl: -0.673, blk: 2.18, tpm: -0.617, fgImpact: -0.301, ftImpact: -7.006, to: 0.038 } },
          { name: "Evan Haywood", min: 35, pts: 18, reb: 4, ast: 1, stl: 2, blk: 0, to: 3, tpm: 4, fgm: 7, fga: 14, ftm: 0, fta: 0, composite: 3.65, zScores: { pts: 1.593, reb: 0.334, ast: -0.279, stl: 1.383, blk: -0.521, tpm: 2.42, fgImpact: 0.282, ftImpact: 0, to: -1.564 } },
          { name: "Will McClendon", min: 9, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.116, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.763, ftImpact: 0, to: 0.839 } },
          { name: "Alex Constanza", min: 20, pts: 7, reb: 4, ast: 2, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -1.99, zScores: { pts: -0.063, reb: 0.334, ast: 0.234, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: 0.121, ftImpact: 0, to: -1.564 } },
          { name: "Youri Fritz", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.33, zScores: { pts: -1.116, reb: -0.802, ast: -0.791, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Anto Balian", min: 20, pts: 7, reb: 3, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 1, composite: 2.13, zScores: { pts: -0.063, reb: -0.044, ast: 0.234, stl: 1.383, blk: -0.521, tpm: -0.617, fgImpact: 0.502, ftImpact: 0.42, to: 0.839 } },
          { name: "Jahari Williamson", min: 35, pts: 21, reb: 2, ast: 4, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 11, ftm: 5, fta: 6, composite: 7.68, zScores: { pts: 2.044, reb: -0.423, ast: 1.259, stl: 0.355, blk: -0.521, tpm: 2.42, fgImpact: 0.623, ftImpact: 1.088, to: 0.839 } }
        ]
      },
      home: {
        abbr: "SHSU", name: "Sam Houston Bearkats", score: 85,
        players: [

        ]
      }
    },
      {
      id: "401919030",
      line: "Friends Falcons 60 @ Wichita State Shockers 113 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "FRU", name: "Friends Falcons", score: 60,
        players: [

        ]
      },
      home: {
        abbr: "WichSt", name: "Wichita State Shockers", score: 113,
        players: [
          { name: "Dillon Battie", min: 21, pts: 14, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 7, ftm: 2, fta: 2, composite: 2.84, zScores: { pts: 0.991, reb: 0.713, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 0.902, fgImpact: 1.346, ftImpact: 0.84, to: 0.038 } },
          { name: "Cyr Malonga", min: 16, pts: 6, reb: 5, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 4, composite: -0.96, zScores: { pts: -0.213, reb: 0.713, ast: -0.791, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: 0.462, ftImpact: -1.184, to: 0.839 } },
          { name: "Kenyon Giles", min: 17, pts: 19, reb: 2, ast: 4, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 7, ftm: 4, fta: 4, composite: 8.74, zScores: { pts: 1.743, reb: -0.423, ast: 1.259, stl: 0.355, blk: -0.521, tpm: 1.661, fgImpact: 2.149, ftImpact: 1.68, to: 0.839 } },
          { name: "Bryce Heard", min: 14, pts: 12, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 4, ftm: 2, fta: 2, composite: 2.55, zScores: { pts: 0.69, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 0.902, fgImpact: 1.687, ftImpact: 0.84, to: 0.839 } },
          { name: "Jahari Long", min: 21, pts: 6, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.95, zScores: { pts: -0.213, reb: -0.802, ast: 0.234, stl: -0.673, blk: -0.521, tpm: 0.902, fgImpact: 0.081, ftImpact: 0, to: 0.038 } },
          { name: "Emmanuel Okorafor", min: 13, pts: 6, reb: 6, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 1, composite: 1.78, zScores: { pts: -0.213, reb: 1.092, ast: -0.279, stl: -0.673, blk: 2.18, tpm: -0.617, fgImpact: 1.265, ftImpact: -1.012, to: 0.038 } },
          { name: "Jaret Valencia", min: 12, pts: 4, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -0.04, zScores: { pts: -0.514, reb: 0.713, ast: 0.234, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.341, ftImpact: 0.84, to: 0.839 } },
          { name: "Henry Thengvall", min: 5, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.02, zScores: { pts: -1.116, reb: -0.802, ast: 0.234, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.763, ftImpact: 0, to: -0.763 } },
          { name: "Desmeon Jones", min: 18, pts: 9, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: -1.35, zScores: { pts: 0.238, reb: -0.802, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: 1.305, ftImpact: 0, to: -0.763 } },
          { name: "Jordan Frison", min: 16, pts: 4, reb: 0, ast: 5, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -1.58, zScores: { pts: -0.514, reb: -1.18, ast: 1.772, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.722, ftImpact: 0.84, to: 0.038 } },
          { name: "Tyrus Rathan-Mayes", min: 13, pts: 4, reb: 3, ast: 3, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 1, composite: 1.04, zScores: { pts: -0.514, reb: -0.044, ast: 0.747, stl: 0.355, blk: 0.829, tpm: -0.617, fgImpact: 0.462, ftImpact: -1.012, to: 0.839 } },
          { name: "Joy Ighovodja", min: 19, pts: 19, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 5, fgm: 7, fga: 7, ftm: 0, fta: 0, composite: 8.22, zScores: { pts: 1.743, reb: -0.044, ast: 0.747, stl: -0.673, blk: -0.521, tpm: 3.18, fgImpact: 2.952, ftImpact: 0, to: 0.839 } },
          { name: "TJ Williams", min: 12, pts: 7, reb: 7, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.62, zScores: { pts: -0.063, reb: 1.47, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: 0.502, ftImpact: 0, to: 0.038 } },
          { name: "Michael Gray Jr.", min: 3, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.43, zScores: { pts: -0.664, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: 0.04, ftImpact: 0, to: 0.839 } }
        ]
      }
    },
      {
      id: "401928996",
      line: "Valparaiso Beacons 69 @ South Dakota State Jackrabbits 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Valpa", name: "Valparaiso Beacons", score: 69,
        players: [
          { name: "Carter Hopoi", min: 32, pts: 16, reb: 9, ast: 0, stl: 1, blk: 3, to: 1, tpm: 1, fgm: 4, fga: 9, ftm: 7, fta: 10, composite: 6.48, zScores: { pts: 1.292, reb: 2.228, ast: -0.791, stl: 0.355, blk: 3.53, tpm: 0.142, fgImpact: -0.22, ftImpact: -0.096, to: 0.038 } },
          { name: "JT Pettigrew", min: 23, pts: 15, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 10, ftm: 5, fta: 9, composite: -1.74, zScores: { pts: 1.141, reb: 0.713, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 0.902, fgImpact: -0.601, ftImpact: -1.947, to: 0.038 } },
          { name: "Rakim Chaney", min: 36, pts: 12, reb: 6, ast: 4, stl: 2, blk: 1, to: 2, tpm: 2, fgm: 4, fga: 12, ftm: 2, fta: 3, composite: 3.86, zScores: { pts: 0.69, reb: 1.092, ast: 1.259, stl: 1.383, blk: 0.829, tpm: 0.902, fgImpact: -1.364, ftImpact: -0.172, to: -0.763 } },
          { name: "Justus McNair", min: 18, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 2, fta: 4, composite: -6.17, zScores: { pts: -0.514, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -1.485, ftImpact: -1.184, to: 0.038 } },
          { name: "Bruno Alocen", min: 15, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -2.92, zScores: { pts: -0.815, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0.84, to: 0.839 } },
          { name: "Hudson Scroggins", min: 13, pts: 8, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 3, composite: -1.39, zScores: { pts: 0.088, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.884, ftImpact: -0.172, to: 0.839 } },
          { name: "Kai Yu", min: 2, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.116, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.038 } },
          { name: "Terron Garrett", min: 16, pts: 2, reb: 3, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.61, zScores: { pts: -0.815, reb: -0.044, ast: 0.747, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.722, ftImpact: 0, to: 0.038 } },
          { name: "Rajan Roberts", min: 21, pts: 7, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: -2.13, zScores: { pts: -0.063, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: -0.682, ftImpact: 0.84, to: 0.038 } },
          { name: "Sader Servilus", min: 24, pts: 3, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -3.06, zScores: { pts: -0.664, reb: 0.334, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.422, ftImpact: -0.592, to: 0.038 } }
        ]
      },
      home: {
        abbr: "SDST", name: "South Dakota State Jackrabbits", score: 81,
        players: [

        ]
      }
    },
      {
      id: "401925863",
      line: "Oral Roberts Golden Eagles 71 @ Tulsa Golden Hurricane 80 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ORU", name: "Oral Roberts Golden Eagles", score: 71,
        players: [

        ]
      },
      home: {
        abbr: "Tuls", name: "Tulsa Golden Hurricane", score: 80,
        players: [
          { name: "Macon Emory", min: 27, pts: 11, reb: 9, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 9, ftm: 5, fta: 6, composite: 2.32, zScores: { pts: 0.539, reb: 2.228, ast: 0.234, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -1.023, ftImpact: 1.088, to: 0.038 } },
          { name: "Chris Loofe", min: 32, pts: 17, reb: 11, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 6, fga: 6, ftm: 5, fta: 6, composite: 6.54, zScores: { pts: 1.442, reb: 2.985, ast: -0.279, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: 2.53, ftImpact: 1.088, to: -0.763 } },
          { name: "Jaylen Lawal", min: 28, pts: 18, reb: 1, ast: 1, stl: 3, blk: 0, to: 3, tpm: 3, fgm: 5, fga: 16, ftm: 5, fta: 7, composite: 0.49, zScores: { pts: 1.593, reb: -0.802, ast: -0.279, stl: 2.41, blk: -0.521, tpm: 1.661, fgImpact: -2.086, ftImpact: 0.076, to: -1.564 } },
          { name: "Kobi Williams", min: 28, pts: 6, reb: 2, ast: 4, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 0.59, zScores: { pts: -0.213, reb: -0.423, ast: 1.259, stl: 0.355, blk: 0.829, tpm: -0.617, fgImpact: -0.642, ftImpact: 0, to: 0.038 } },
          { name: "Myles Rigsby", min: 34, pts: 8, reb: 8, ast: 2, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 1, fta: 1, composite: 3.43, zScores: { pts: 0.088, reb: 1.849, ast: 0.234, stl: -0.673, blk: 0.829, tpm: 0.142, fgImpact: 0.502, ftImpact: 0.42, to: 0.038 } },
          { name: "Derelle Desire", min: 3, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.9, zScores: { pts: -1.116, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: -0.763 } },
          { name: "Aleksa Dimitrijevic", min: 5, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.3, zScores: { pts: -1.116, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Kaleb Banks", min: 13, pts: 2, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 1, composite: -3.76, zScores: { pts: -0.815, reb: -1.18, ast: -0.791, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: -0.341, ftImpact: -1.012, to: 0.839 } },
          { name: "Denton Forsythe", min: 22, pts: 18, reb: 6, ast: 5, stl: 2, blk: 0, to: 5, tpm: 3, fgm: 4, fga: 6, ftm: 7, fta: 7, composite: 7.68, zScores: { pts: 1.593, reb: 1.092, ast: 1.772, stl: 1.383, blk: -0.521, tpm: 1.661, fgImpact: 0.924, ftImpact: 2.94, to: -3.166 } },
          { name: "Mike Williams III", min: 8, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.6, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -0.763, ftImpact: 0, to: 0.038 } }
        ]
      }
    },
      {
      id: "401917522",
      line: "Santa Clara Broncos 76 @ North Texas Mean Green 71 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SCla", name: "Santa Clara Broncos", score: 76,
        players: [
          { name: "Chris Tadjo", min: 24, pts: 14, reb: 8, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 8, ftm: 4, fta: 5, composite: 4.76, zScores: { pts: 0.991, reb: 1.849, ast: 0.234, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: 0.964, ftImpact: 0.668, to: 0.839 } },
          { name: "Brad Longcor III", min: 26, pts: 10, reb: 1, ast: 0, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 3, fga: 11, ftm: 4, fta: 5, composite: -4.44, zScores: { pts: 0.389, reb: -0.802, ast: -0.791, stl: 1.383, blk: -0.521, tpm: -0.617, fgImpact: -1.786, ftImpact: 0.668, to: -2.365 } },
          { name: "Sash Gavalyugov", min: 27, pts: 10, reb: 4, ast: 2, stl: 3, blk: 0, to: 8, tpm: 1, fgm: 4, fga: 14, ftm: 1, fta: 1, composite: -4.29, zScores: { pts: 0.389, reb: 0.334, ast: 0.234, stl: 2.41, blk: -0.521, tpm: 0.142, fgImpact: -2.127, ftImpact: 0.42, to: -5.569 } },
          { name: "Jake Ensminger", min: 33, pts: 2, reb: 6, ast: 2, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 0.39, zScores: { pts: -0.815, reb: 1.092, ast: 0.234, stl: 0.355, blk: 0.829, tpm: -0.617, fgImpact: -0.722, ftImpact: 0, to: 0.038 } },
          { name: "Fedor Zugic", min: 22, pts: 7, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: -0.82, zScores: { pts: -0.063, reb: -0.423, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: -0.682, ftImpact: 0.84, to: 0.839 } },
          { name: "Noah Badibanga", min: 7, pts: 2, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.07, zScores: { pts: -0.815, reb: -0.044, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.04, ftImpact: 0, to: 0.839 } },
          { name: "Sidi Gueye", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.86, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.038 } },
          { name: "Francis Chukwudebelu", min: 9, pts: 2, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.99, zScores: { pts: -0.815, reb: -0.802, ast: -0.791, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: 0.04, ftImpact: 0, to: 0.839 } },
          { name: "Thierry Darlan", min: 24, pts: 16, reb: 9, ast: 2, stl: 0, blk: 1, to: 2, tpm: 3, fgm: 5, fga: 9, ftm: 3, fta: 4, composite: 5.64, zScores: { pts: 1.292, reb: 2.228, ast: 0.234, stl: -0.673, blk: 0.829, tpm: 1.661, fgImpact: 0.583, ftImpact: 0.248, to: -0.763 } },
          { name: "David Castillo", min: 23, pts: 13, reb: 3, ast: 2, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 5.74, zScores: { pts: 0.84, reb: -0.044, ast: 0.234, stl: 1.383, blk: -0.521, tpm: 1.661, fgImpact: 1.346, ftImpact: 0, to: 0.839 } }
        ]
      },
      home: {
        abbr: "N TX", name: "North Texas Mean Green", score: 71,
        players: [
          { name: "Ousmane Ndour", min: 25, pts: 18, reb: 2, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 6, fga: 7, ftm: 6, fta: 9, composite: 0.18, zScores: { pts: 1.593, reb: -0.423, ast: -0.279, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: 2.149, ftImpact: -0.516, to: -1.564 } },
          { name: "Reece Robinson", min: 27, pts: 15, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 7, fga: 12, ftm: 0, fta: 0, composite: -0.09, zScores: { pts: 1.141, reb: 0.334, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: 1.045, ftImpact: 0, to: -0.763 } },
          { name: "Je'Shawn Stevenson", min: 34, pts: 14, reb: 3, ast: 4, stl: 2, blk: 0, to: 6, tpm: 2, fgm: 4, fga: 10, ftm: 4, fta: 5, composite: 0.07, zScores: { pts: 0.991, reb: -0.044, ast: 1.259, stl: 1.383, blk: -0.521, tpm: 0.902, fgImpact: -0.601, ftImpact: 0.668, to: -3.967 } },
          { name: "Amar Amkou", min: 28, pts: 2, reb: 3, ast: 3, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: 0.51, zScores: { pts: -0.815, reb: -0.044, ast: 0.747, stl: 2.41, blk: -0.521, tpm: -0.617, fgImpact: -1.485, ftImpact: 0, to: 0.839 } },
          { name: "Cash Chavis", min: 37, pts: 14, reb: 2, ast: 2, stl: 6, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 11, ftm: 4, fta: 5, composite: 5.68, zScores: { pts: 0.991, reb: -0.423, ast: 0.234, stl: 5.494, blk: -0.521, tpm: -0.617, fgImpact: -0.18, ftImpact: 0.668, to: 0.038 } },
          { name: "Filip Kalajzic", min: 9, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.08, zScores: { pts: -1.116, reb: -0.423, ast: -0.791, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.038 } },
          { name: "TJ Crumble", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -6.08, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: -2.024, to: 0.839 } },
          { name: "Aeneas Alexander", min: 12, pts: 5, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: -2.04, zScores: { pts: -0.364, reb: 0.713, ast: 0.234, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -1.063, ftImpact: -0.592, to: 0.839 } },
          { name: "Cole Franklin", min: 26, pts: 3, reb: 6, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -0.69, zScores: { pts: -0.664, reb: 1.092, ast: -0.791, stl: 0.355, blk: 0.829, tpm: -0.617, fgImpact: -0.341, ftImpact: -0.592, to: 0.038 } }
        ]
      }
    },
      {
      id: "401928814",
      line: "Oakland Golden Grizzlies 79 @ Boise State Broncos 111 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OAK", name: "Oakland Golden Grizzlies", score: 79,
        players: [

        ]
      },
      home: {
        abbr: "Bois", name: "Boise State Broncos", score: 111,
        players: [
          { name: "Dovydas Butka", min: 33, pts: 16, reb: 7, ast: 2, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 8, fga: 9, ftm: 0, fta: 1, composite: 6.38, zScores: { pts: 1.292, reb: 1.47, ast: 0.234, stl: 0.355, blk: 0.829, tpm: -0.617, fgImpact: 2.992, ftImpact: -1.012, to: 0.839 } },
          { name: "Spencer Ahrens", min: 29, pts: 11, reb: 5, ast: 3, stl: 0, blk: 2, to: 2, tpm: 1, fgm: 4, fga: 11, ftm: 2, fta: 2, composite: 2.74, zScores: { pts: 0.539, reb: 0.713, ast: 0.747, stl: -0.673, blk: 2.18, tpm: 0.142, fgImpact: -0.983, ftImpact: 0.84, to: -0.763 } },
          { name: "Pearson Carmichael", min: 22, pts: 11, reb: 2, ast: 2, stl: 0, blk: 1, to: 2, tpm: 3, fgm: 4, fga: 12, ftm: 0, fta: 0, composite: 0.04, zScores: { pts: 0.539, reb: -0.423, ast: 0.234, stl: -0.673, blk: 0.829, tpm: 1.661, fgImpact: -1.364, ftImpact: 0, to: -0.763 } },
          { name: "Aginaldo Neto", min: 30, pts: 25, reb: 2, ast: 5, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 8, fga: 12, ftm: 7, fta: 10, composite: 8.35, zScores: { pts: 2.646, reb: -0.423, ast: 1.772, stl: 1.383, blk: -0.521, tpm: 0.902, fgImpact: 1.848, ftImpact: -0.096, to: 0.839 } },
          { name: "Damari Wheeler-Thomas", min: 36, pts: 23, reb: 1, ast: 6, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 7, fga: 10, ftm: 5, fta: 5, composite: 10.83, zScores: { pts: 2.345, reb: -0.802, ast: 2.285, stl: 0.355, blk: -0.521, tpm: 2.42, fgImpact: 1.808, ftImpact: 2.1, to: 0.839 } },
          { name: "Jikany Deang", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.72, zScores: { pts: -0.815, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.04, ftImpact: 0, to: 0.839 } },
          { name: "Bhan Buom", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.34, zScores: { pts: -0.815, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.422, ftImpact: 0, to: 0.839 } },
          { name: "Jerquarius Stanback", min: 10, pts: 9, reb: 2, ast: 2, stl: 2, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 7, fta: 8, composite: 5.38, zScores: { pts: 0.238, reb: -0.423, ast: 0.234, stl: 1.383, blk: 2.18, tpm: -0.617, fgImpact: 0.422, ftImpact: 1.928, to: 0.038 } },
          { name: "Ethan Lathan", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.68, zScores: { pts: -1.116, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Brady Hennig", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Julian Bowie", min: 16, pts: 9, reb: 3, ast: 2, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 3.11, zScores: { pts: 0.238, reb: -0.044, ast: 0.234, stl: 1.383, blk: -0.521, tpm: 1.661, fgImpact: 0.121, ftImpact: 0, to: 0.038 } },
          { name: "Rayzhon Bergersen", min: 10, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.68, zScores: { pts: -0.664, reb: -1.18, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: -0.341, ftImpact: 0, to: 0.839 } }
        ]
      }
    },
      {
      id: "401925915",
      line: "Portland State Vikings 71 @ Colorado State Rams 87 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PRST", name: "Portland State Vikings", score: 71,
        players: [

        ]
      },
      home: {
        abbr: "ColSt", name: "Colorado State Rams", score: 87,
        players: [
          { name: "Kyle Jorgensen", min: 13, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.19, zScores: { pts: -0.664, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: -0.722, ftImpact: 0, to: 0.839 } },
          { name: "Carey Booth", min: 26, pts: 7, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 3, composite: -2.38, zScores: { pts: -0.063, reb: -0.044, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: -0.301, ftImpact: -0.172, to: 0.038 } },
          { name: "Justin Menard", min: 22, pts: 8, reb: 2, ast: 3, stl: 3, blk: 0, to: 4, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 0.96, zScores: { pts: 0.088, reb: -0.423, ast: 0.747, stl: 2.41, blk: -0.521, tpm: 0.902, fgImpact: 0.121, ftImpact: 0, to: -2.365 } },
          { name: "Josh Pascarelli", min: 27, pts: 21, reb: 2, ast: 1, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 7, fga: 11, ftm: 4, fta: 4, composite: 6.3, zScores: { pts: 2.044, reb: -0.423, ast: -0.279, stl: -0.673, blk: 0.829, tpm: 1.661, fgImpact: 1.426, ftImpact: 1.68, to: 0.038 } },
          { name: "Jase Butler", min: 26, pts: 9, reb: 4, ast: 7, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 5, fta: 6, composite: 4.86, zScores: { pts: 0.238, reb: 0.334, ast: 2.797, stl: 1.383, blk: -0.521, tpm: -0.617, fgImpact: -0.682, ftImpact: 1.088, to: 0.839 } },
          { name: "Eric Fiedler", min: 1, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.34, zScores: { pts: -0.815, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.422, ftImpact: 0, to: 0.839 } },
          { name: "Jaden Ghoreishi", min: 20, pts: 11, reb: 4, ast: 0, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 4.3, zScores: { pts: 0.539, reb: 0.334, ast: -0.791, stl: -0.673, blk: 2.18, tpm: 0.142, fgImpact: 1.727, ftImpact: 0, to: 0.839 } },
          { name: "Rashaan Mbemba", min: 24, pts: 17, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 6, ftm: 6, fta: 8, composite: 3.89, zScores: { pts: 1.442, reb: 0.713, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: 1.727, ftImpact: 0.496, to: 0.839 } },
          { name: "Amondo Miller Jr.", min: 10, pts: 2, reb: 3, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -1.84, zScores: { pts: -0.815, reb: -0.044, ast: -0.279, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0.84, to: -0.763 } },
          { name: "Jaxon Clark", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Pops Dunson", min: 13, pts: 7, reb: 1, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 4, fta: 6, composite: -1.17, zScores: { pts: -0.063, reb: -0.802, ast: 0.747, stl: 0.355, blk: -0.521, tpm: 0.142, fgImpact: -0.722, ftImpact: -0.344, to: 0.038 } },
          { name: "Jojo McIver", min: 17, pts: 0, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.116, reb: -1.18, ast: 0.234, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.763, ftImpact: 0, to: 0.839 } }
        ]
      }
    },
      {
      id: "401911454",
      line: "Nevada Wolf Pack 63 @ UC Santa Barbara Gauchos 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Nev", name: "Nevada Wolf Pack", score: 63,
        players: [
          { name: "Elijah Price", min: 33, pts: 7, reb: 6, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 8, ftm: 3, fta: 4, composite: -1.48, zScores: { pts: -0.063, reb: 1.092, ast: 1.259, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -1.445, ftImpact: 0.248, to: -0.763 } },
          { name: "Simon Majok", min: 9, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.96, zScores: { pts: -0.815, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.04, ftImpact: 0, to: 0.839 } },
          { name: "Vaughn Weems", min: 32, pts: 10, reb: 2, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 14, ftm: 0, fta: 0, composite: -4.5, zScores: { pts: 0.389, reb: -0.423, ast: -0.791, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -1.324, ftImpact: 0, to: -1.564 } },
          { name: "Peter Bandelj", min: 18, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.48, zScores: { pts: -0.664, reb: -1.18, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: -0.341, ftImpact: 0, to: 0.038 } },
          { name: "Styles Phipps", min: 29, pts: 20, reb: 6, ast: 3, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 6, fga: 9, ftm: 8, fta: 8, composite: 7.16, zScores: { pts: 1.894, reb: 1.092, ast: 0.747, stl: 1.383, blk: -0.521, tpm: -0.617, fgImpact: 1.386, ftImpact: 3.36, to: -1.564 } },
          { name: "Kade Snyder", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.34, zScores: { pts: -0.815, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.422, ftImpact: 0, to: 0.839 } },
          { name: "Hudson Lucas", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Cedric Lath", min: 7, pts: 3, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 1, composite: -1.25, zScores: { pts: -0.664, reb: 0.334, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.422, ftImpact: 0.42, to: 0.839 } },
          { name: "TJ Coulter", min: 10, pts: 0, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 2, composite: -5.35, zScores: { pts: -1.116, reb: -0.802, ast: -0.279, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: -2.024, to: 0.038 } },
          { name: "Peyton White", min: 21, pts: 9, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 3, fta: 4, composite: 0.07, zScores: { pts: 0.238, reb: 1.092, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.26, ftImpact: 0.248, to: 0.839 } },
          { name: "Myles Walker", min: 19, pts: 3, reb: 0, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.97, zScores: { pts: -0.664, reb: -1.18, ast: 0.234, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: -0.341, ftImpact: 0, to: 0.038 } },
          { name: "SJ Madison", min: 5, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.45, zScores: { pts: -1.116, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -1.144, ftImpact: 0, to: 0.839 } },
          { name: "Keyon Kensie Jr.", min: 11, pts: 4, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -3.4, zScores: { pts: -0.514, reb: -1.18, ast: -0.279, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -0.682, ftImpact: 0, to: 0.038 } },
          { name: "John Mattingly", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } }
        ]
      },
      home: {
        abbr: "UCSB", name: "UC Santa Barbara Gauchos", score: 76,
        players: [
          { name: "Eric Dibami", min: 18, pts: 4, reb: 8, ast: 0, stl: 1, blk: 2, to: 3, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 2, composite: -1.43, zScores: { pts: -0.514, reb: 1.849, ast: -0.791, stl: 0.355, blk: 2.18, tpm: -0.617, fgImpact: -0.301, ftImpact: -2.024, to: -1.564 } },
          { name: "Marvin McGhee IV", min: 27, pts: 9, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 0.91, zScores: { pts: 0.238, reb: 0.334, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: 0.502, ftImpact: 0.84, to: 0.839 } },
          { name: "CJ Shaw", min: 26, pts: 20, reb: 3, ast: 1, stl: 2, blk: 1, to: 1, tpm: 1, fgm: 6, fga: 11, ftm: 7, fta: 9, composite: 5.5, zScores: { pts: 1.894, reb: -0.044, ast: -0.279, stl: 1.383, blk: 0.829, tpm: 0.142, fgImpact: 0.623, ftImpact: 0.916, to: 0.038 } },
          { name: "Miro Little", min: 26, pts: 12, reb: 1, ast: 3, stl: 0, blk: 0, to: 5, tpm: 0, fgm: 1, fga: 7, ftm: 10, fta: 10, composite: -2.01, zScores: { pts: 0.69, reb: -0.802, ast: 0.747, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -1.866, ftImpact: 4.2, to: -3.166 } },
          { name: "Aidan Mahaney", min: 32, pts: 12, reb: 4, ast: 4, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 2.65, zScores: { pts: 0.69, reb: 0.334, ast: 1.259, stl: -0.673, blk: -0.521, tpm: 0.902, fgImpact: -0.22, ftImpact: 0.84, to: 0.038 } },
          { name: "Michael Simcoe", min: 4, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -4.88, zScores: { pts: -0.965, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: -0.592, to: 0.839 } },
          { name: "Antonio Chol", min: 12, pts: 6, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 0.56, zScores: { pts: -0.213, reb: -1.18, ast: -0.791, stl: -0.673, blk: 0.829, tpm: 0.902, fgImpact: 0.843, ftImpact: 0, to: 0.839 } },
          { name: "Koat Keat Tong", min: 17, pts: 2, reb: 8, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -0.56, zScores: { pts: -0.815, reb: 1.849, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.341, ftImpact: 0, to: 0.839 } },
          { name: "Viljami Vartiainen", min: 15, pts: 6, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 3, fta: 3, composite: 0.4, zScores: { pts: -0.213, reb: -0.423, ast: -0.279, stl: 0.355, blk: -0.521, tpm: 0.142, fgImpact: 0.04, ftImpact: 1.26, to: 0.038 } },
          { name: "RJ Smith", min: 23, pts: 4, reb: 5, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: 0.83, zScores: { pts: -0.514, reb: 0.713, ast: 1.259, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -0.682, ftImpact: 0, to: 0.839 } }
        ]
      }
    },
      {
      id: "401911346",
      line: "Cal Poly Mustangs 71 @ Grand Canyon Lopes 99 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CP", name: "Cal Poly Mustangs", score: 71,
        players: [

        ]
      },
      home: {
        abbr: "GrCan", name: "Grand Canyon Lopes", score: 99,
        players: [
          { name: "Blake Barkley", min: 19, pts: 16, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 7, fga: 10, ftm: 0, fta: 1, composite: 3.07, zScores: { pts: 1.292, reb: 0.713, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 0.902, fgImpact: 1.808, ftImpact: -1.012, to: 0.839 } },
          { name: "Efe Demirel", min: 7, pts: 0, reb: 5, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -0.68, zScores: { pts: -1.116, reb: 0.713, ast: -0.279, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.839 } },
          { name: "Makaih Williams", min: 22, pts: 12, reb: 4, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 10, ftm: 3, fta: 7, composite: -2.12, zScores: { pts: 0.69, reb: 0.334, ast: 0.234, stl: 0.355, blk: -0.521, tpm: 0.142, fgImpact: -0.601, ftImpact: -2.787, to: 0.038 } },
          { name: "Jaden Henley", min: 22, pts: 10, reb: 0, ast: 3, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 11, ftm: 0, fta: 1, composite: 0.87, zScores: { pts: 0.389, reb: -1.18, ast: 0.747, stl: 2.41, blk: -0.521, tpm: -0.617, fgImpact: -0.18, ftImpact: -1.012, to: 0.839 } },
          { name: "Dylan Darling", min: 24, pts: 10, reb: 3, ast: 4, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 10, ftm: 4, fta: 5, composite: 1.15, zScores: { pts: 0.389, reb: -0.044, ast: 1.259, stl: 1.383, blk: -0.521, tpm: -0.617, fgImpact: -1.404, ftImpact: 0.668, to: 0.038 } },
          { name: "Amarion Dickerson", min: 17, pts: 6, reb: 3, ast: 5, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 3.69, zScores: { pts: -0.213, reb: -0.044, ast: 1.772, stl: 1.383, blk: 0.829, tpm: -0.617, fgImpact: -0.26, ftImpact: 0, to: 0.839 } },
          { name: "Tyler Behrend", min: 21, pts: 12, reb: 7, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 6, ftm: 2, fta: 2, composite: 2.39, zScores: { pts: 0.69, reb: 1.47, ast: -0.791, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: 1.727, ftImpact: 0.84, to: -0.763 } },
          { name: "Omaha Biliew", min: 12, pts: 4, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.01, zScores: { pts: -0.514, reb: 0.713, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.843, ftImpact: 0, to: 0.038 } },
          { name: "Micah Tucker", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.44, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.839 } },
          { name: "Jaden Zimmerman", min: 17, pts: 13, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 6, ftm: 2, fta: 4, composite: 0.67, zScores: { pts: 0.84, reb: -0.423, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 1.661, fgImpact: 0.924, ftImpact: -1.184, to: 0.839 } },
          { name: "Caleb Shaw", min: 10, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.23, zScores: { pts: -0.664, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: 0.422, ftImpact: 0, to: 0.038 } },
          { name: "Tre Holloman", min: 25, pts: 13, reb: 3, ast: 6, stl: 2, blk: 1, to: 1, tpm: 3, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: 6.43, zScores: { pts: 0.84, reb: -0.044, ast: 2.285, stl: 1.383, blk: 0.829, tpm: 1.661, fgImpact: -0.561, ftImpact: 0, to: 0.038 } }
        ]
      }
    },
      {
      id: "401925738",
      line: "Mississippi Valley State Delta Devils 66 @ Oregon Ducks 100 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MVSU", name: "Mississippi Valley State Delta Devils", score: 66,
        players: [

        ]
      },
      home: {
        abbr: "Oreg", name: "Oregon Ducks", score: 100,
        players: [
          { name: "Andrew Meadow", min: 15, pts: 9, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 0.3, zScores: { pts: 0.238, reb: -0.802, ast: -0.791, stl: 0.355, blk: -0.521, tpm: 1.661, fgImpact: 0.121, ftImpact: 0, to: 0.038 } },
          { name: "Taylor Bol Bowen", min: 16, pts: 10, reb: 6, ast: 4, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 5.5, zScores: { pts: 0.389, reb: 1.092, ast: 1.259, stl: 1.383, blk: -0.521, tpm: 0.902, fgImpact: 0.121, ftImpact: 0.84, to: 0.038 } },
          { name: "Malique Ewin", min: 17, pts: 8, reb: 13, ast: 3, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 6.81, zScores: { pts: 0.088, reb: 3.742, ast: 0.747, stl: -0.673, blk: 2.18, tpm: -0.617, fgImpact: 1.305, ftImpact: 0, to: 0.038 } },
          { name: "Jasper Johnson", min: 21, pts: 17, reb: 2, ast: 4, stl: 1, blk: 0, to: 2, tpm: 5, fgm: 6, fga: 6, ftm: 0, fta: 0, composite: 7.06, zScores: { pts: 1.442, reb: -0.423, ast: 1.259, stl: 0.355, blk: -0.521, tpm: 3.18, fgImpact: 2.53, ftImpact: 0, to: -0.763 } },
          { name: "Fred Payne", min: 18, pts: 9, reb: 0, ast: 5, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 2.45, zScores: { pts: 0.238, reb: -1.18, ast: 1.772, stl: 1.383, blk: -0.521, tpm: 0.142, fgImpact: -0.22, ftImpact: 0, to: 0.839 } },
          { name: "Dwayne Aristode", min: 18, pts: 9, reb: 2, ast: 1, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 3, fga: 6, ftm: 1, fta: 1, composite: 1.17, zScores: { pts: 0.238, reb: -0.423, ast: -0.279, stl: -0.673, blk: 0.829, tpm: 0.902, fgImpact: 0.121, ftImpact: 0.42, to: 0.038 } },
          { name: "Seven Spurlock", min: 12, pts: 5, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -1.16, zScores: { pts: -0.364, reb: -0.802, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: -0.341, ftImpact: 0.84, to: 0.839 } },
          { name: "Tajh Ariza", min: 16, pts: 3, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -3.31, zScores: { pts: -0.664, reb: 0.334, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.341, ftImpact: -0.592, to: 0.038 } },
          { name: "Pharaoh Compton", min: 19, pts: 8, reb: 2, ast: 1, stl: 0, blk: 4, to: 0, tpm: 0, fgm: 4, fga: 4, ftm: 0, fta: 0, composite: 5.5, zScores: { pts: 0.088, reb: -0.423, ast: -0.279, stl: -0.673, blk: 4.881, tpm: -0.617, fgImpact: 1.687, ftImpact: 0, to: 0.839 } },
          { name: "Sean Stewart", min: 19, pts: 8, reb: 8, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 0.43, zScores: { pts: 0.088, reb: 1.849, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.543, ftImpact: 0, to: 0.038 } },
          { name: "Wei Lin", min: 18, pts: 8, reb: 1, ast: 8, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 4.9, zScores: { pts: 0.088, reb: -0.802, ast: 3.31, stl: 1.383, blk: -0.521, tpm: 0.902, fgImpact: 0.502, ftImpact: 0, to: 0.038 } },
          { name: "Jerry Easter II", min: 11, pts: 6, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -1.25, zScores: { pts: -0.213, reb: -1.18, ast: 0.234, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0.884, ftImpact: 0, to: 0.839 } }
        ]
      }
    },
      {
      id: "401917523",
      line: "Pacific Tigers 59 @ Long Beach State Beach 62 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Pacif", name: "Pacific Tigers", score: 59,
        players: [
          { name: "Gavin Ripp", min: 33, pts: 0, reb: 12, ast: 0, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: 3.19, zScores: { pts: -1.116, reb: 3.364, ast: -0.791, stl: 2.41, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.839 } },
          { name: "Jaylen Thompson", min: 22, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 1, composite: -3.44, zScores: { pts: -0.664, reb: -0.423, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.722, ftImpact: 0.42, to: 0.038 } },
          { name: "Jaion Pitt", min: 33, pts: 20, reb: 6, ast: 2, stl: 3, blk: 3, to: 3, tpm: 1, fgm: 7, fga: 15, ftm: 5, fta: 7, composite: 7.72, zScores: { pts: 1.894, reb: 1.092, ast: 0.234, stl: 2.41, blk: 3.53, tpm: 0.142, fgImpact: -0.099, ftImpact: 0.076, to: -1.564 } },
          { name: "Adriel Nyorha", min: 37, pts: 9, reb: 7, ast: 4, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 4, fga: 9, ftm: 0, fta: 1, composite: -0.65, zScores: { pts: 0.238, reb: 1.47, ast: 1.259, stl: 0.355, blk: -0.521, tpm: 0.142, fgImpact: -0.22, ftImpact: -1.012, to: -2.365 } },
          { name: "Jaden Winston", min: 26, pts: 8, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 14, ftm: 2, fta: 2, composite: -2.14, zScores: { pts: 0.088, reb: -0.423, ast: 0.234, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -2.93, ftImpact: 0.84, to: 0.839 } },
          { name: "Jacob McFarland", min: 4, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.35, zScores: { pts: -1.116, reb: 0.334, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.038 } },
          { name: "CJ Jones", min: 33, pts: 17, reb: 4, ast: 1, stl: 1, blk: 2, to: 5, tpm: 1, fgm: 8, fga: 14, ftm: 0, fta: 0, composite: 2.09, zScores: { pts: 1.442, reb: 0.334, ast: -0.279, stl: 0.355, blk: 2.18, tpm: 0.142, fgImpact: 1.085, ftImpact: 0, to: -3.166 } },
          { name: "Dominick Harris", min: 12, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -0.815, reb: -0.802, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.722, ftImpact: 0, to: 0.038 } }
        ]
      },
      home: {
        abbr: "LBSU", name: "Long Beach State Beach", score: 62,
        players: [

        ]
      }
    },
      {
      id: "401917521",
      line: "UTSA Roadrunners 86 @ Seattle U Redhawks 59 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UTSA", name: "UTSA Roadrunners", score: 86,
        players: [
          { name: "Chinedum Okpukpara", min: 12, pts: 2, reb: 1, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.48, zScores: { pts: -0.815, reb: -0.802, ast: -0.279, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: 0.04, ftImpact: 0, to: 0.839 } },
          { name: "JJ Kelly", min: 25, pts: 2, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.43, zScores: { pts: -0.815, reb: 0.713, ast: -0.279, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -1.104, ftImpact: 0, to: 0.839 } },
          { name: "Preston Turner", min: 17, pts: 3, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.08, zScores: { pts: -0.664, reb: -0.044, ast: -0.279, stl: 0.355, blk: -0.521, tpm: 0.142, fgImpact: -1.104, ftImpact: 0, to: 0.038 } },
          { name: "KJ Tenner", min: 27, pts: 18, reb: 5, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 10, ftm: 9, fta: 10, composite: 4.43, zScores: { pts: 1.593, reb: 0.713, ast: 0.747, stl: 0.355, blk: -0.521, tpm: 0.142, fgImpact: -0.601, ftImpact: 2.768, to: -0.763 } },
          { name: "Isaiah Watts", min: 29, pts: 15, reb: 4, ast: 1, stl: 2, blk: 1, to: 2, tpm: 2, fgm: 5, fga: 10, ftm: 3, fta: 5, composite: 2.99, zScores: { pts: 1.141, reb: 0.334, ast: -0.279, stl: 1.383, blk: 0.829, tpm: 0.902, fgImpact: 0.202, ftImpact: -0.764, to: -0.763 } },
          { name: "Jayson Peterson", min: 11, pts: 2, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.15, zScores: { pts: -0.815, reb: -0.423, ast: -0.791, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: 0.422, ftImpact: 0, to: -0.763 } },
          { name: "Mike Broxton Jr.", min: 18, pts: 4, reb: 2, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.14, zScores: { pts: -0.514, reb: -0.423, ast: -0.791, stl: 0.355, blk: 0.829, tpm: -0.617, fgImpact: 0.462, ftImpact: 0, to: 0.839 } },
          { name: "Josiah LeGree", min: 17, pts: 15, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 1.15, zScores: { pts: 1.141, reb: -0.423, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 1.661, fgImpact: 1.005, ftImpact: 0, to: -0.763 } },
          { name: "Shey Eberwein", min: 11, pts: 5, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -1.54, zScores: { pts: -0.364, reb: -0.802, ast: -0.279, stl: -0.673, blk: -0.521, tpm: 0.142, fgImpact: -0.722, ftImpact: 0.84, to: 0.839 } },
          { name: "Isaiah Coleman", min: 23, pts: 14, reb: 7, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 6, ftm: 3, fta: 4, composite: 4.68, zScores: { pts: 0.991, reb: 1.47, ast: 0.234, stl: 0.355, blk: -0.521, tpm: 0.142, fgImpact: 1.727, ftImpact: 0.248, to: 0.038 } },
          { name: "Demari Williams", min: 10, pts: 6, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -1.85, zScores: { pts: -0.213, reb: -0.044, ast: -0.279, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 1.265, ftImpact: 0, to: -0.763 } }
        ]
      },
      home: {
        abbr: "SeatU", name: "Seattle U Redhawks", score: 59,
        players: [
          { name: "Will Heimbrodt", min: 33, pts: 18, reb: 8, ast: 4, stl: 1, blk: 5, to: 3, tpm: 1, fgm: 6, fga: 9, ftm: 5, fta: 10, composite: 8.29, zScores: { pts: 1.593, reb: 1.849, ast: 1.259, stl: 0.355, blk: 6.231, tpm: 0.142, fgImpact: 1.386, ftImpact: -2.959, to: -1.564 } },
          { name: "Junseok Yeo", min: 31, pts: 6, reb: 4, ast: 1, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 4, ftm: 6, fta: 8, composite: -1.38, zScores: { pts: -0.213, reb: 0.334, ast: -0.279, stl: 0.355, blk: 0.829, tpm: -0.617, fgImpact: -1.525, ftImpact: 0.496, to: -0.763 } },
          { name: "Halvine Dzellat", min: 23, pts: 4, reb: 5, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 8, ftm: 0, fta: 2, composite: -7.44, zScores: { pts: -0.514, reb: 0.713, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -1.445, ftImpact: -2.024, to: -1.564 } },
          { name: "Tyler Boston", min: 29, pts: 16, reb: 2, ast: 2, stl: 2, blk: 1, to: 3, tpm: 2, fgm: 5, fga: 11, ftm: 4, fta: 5, composite: 3.14, zScores: { pts: 1.292, reb: -0.423, ast: 0.234, stl: 1.383, blk: 0.829, tpm: 0.902, fgImpact: -0.18, ftImpact: 0.668, to: -1.564 } },
          { name: "Maleek Arington", min: 26, pts: 2, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.88, zScores: { pts: -0.815, reb: -0.802, ast: 0.234, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.722, ftImpact: 0, to: 0.038 } },
          { name: "Yuto Kawashima", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.68, zScores: { pts: -1.116, reb: -0.802, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: 0, ftImpact: 0, to: 0.839 } },
          { name: "Ray Adams", min: 18, pts: 3, reb: 3, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -3.85, zScores: { pts: -0.664, reb: -0.044, ast: -0.279, stl: 0.355, blk: -0.521, tpm: -0.617, fgImpact: -0.722, ftImpact: -0.592, to: -0.763 } },
          { name: "Ladji Coulibaly", min: 8, pts: 2, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 1, composite: -2.62, zScores: { pts: -0.815, reb: -0.802, ast: -0.791, stl: -0.673, blk: 0.829, tpm: -0.617, fgImpact: 0.422, ftImpact: -1.012, to: 0.839 } },
          { name: "Amare Larane", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.82, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.763, ftImpact: 0, to: 0.839 } },
          { name: "Jaden Bailes", min: 20, pts: 8, reb: 4, ast: 0, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 9, ftm: 0, fta: 2, composite: -0.81, zScores: { pts: 0.088, reb: 0.334, ast: -0.791, stl: 1.383, blk: -0.521, tpm: 0.902, fgImpact: -1.023, ftImpact: -2.024, to: 0.839 } },
          { name: "Jeremiah Harshman", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.44, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.839 } },
          { name: "Kaden Hansen", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.44, zScores: { pts: -1.116, reb: -1.18, ast: -0.791, stl: -0.673, blk: -0.521, tpm: -0.617, fgImpact: -0.381, ftImpact: 0, to: 0.839 } }
        ]
      }
    }
    ]
  },
    "2026-11-12": {
    games: [
      {
      id: "401911471",
      line: "UC Riverside Highlanders @ San José State Spartans (1:07 - 2nd)",
      completed: false,
      statusText: "1:07 - 2nd",
      away: {
        abbr: "UCR", name: "UC Riverside Highlanders", score: null,
        players: [

        ]
      },
      home: {
        abbr: "SJSU", name: "San José State Spartans", score: null,
        players: [

        ]
      }
    },
      {
      id: "401921741",
      line: "Montana State Bobcats 71 @ BYU Cougars 86 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MTST", name: "Montana State Bobcats", score: 71,
        players: [

        ]
      },
      home: {
        abbr: "BYU", name: "BYU Cougars", score: 86,
        players: [
          { name: "Bruce Branch III", min: 25, pts: 17, reb: 5, ast: 1, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 6, fga: 8, ftm: 3, fta: 7, composite: 0.24, zScores: { pts: 1.58, reb: 0.695, ast: -0.213, stl: -0.683, blk: -0.454, tpm: 1.264, fgImpact: 1.894, ftImpact: -2.44, to: -1.4 } },
          { name: "Jaxon Kohler", min: 24, pts: 12, reb: 6, ast: 3, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 5, fga: 5, ftm: 0, fta: 0, composite: 2.9, zScores: { pts: 0.794, reb: 1.059, ast: 0.889, stl: -0.683, blk: -0.454, tpm: 1.264, fgImpact: 2.211, ftImpact: 0, to: -2.181 } },
          { name: "Tyler Betsey", min: 23, pts: 7, reb: 6, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 1.37, zScores: { pts: 0.008, reb: 1.059, ast: -0.213, stl: 0.339, blk: -0.454, tpm: 0.283, fgImpact: 0.188, ftImpact: 0, to: 0.163 } },
          { name: "Collin Chandler", min: 29, pts: 11, reb: 3, ast: 1, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 3.95, zScores: { pts: 0.637, reb: -0.034, ast: -0.213, stl: 1.36, blk: -0.454, tpm: 2.244, fgImpact: 0.251, ftImpact: 0, to: 0.163 } },
          { name: "Robert Wright III", min: 31, pts: 22, reb: 2, ast: 7, stl: 5, blk: 0, to: 2, tpm: 0, fgm: 9, fga: 15, ftm: 4, fta: 8, composite: 7.32, zScores: { pts: 2.366, reb: -0.398, ast: 3.094, stl: 4.426, blk: -0.454, tpm: -0.698, fgImpact: 1.703, ftImpact: -2.101, to: -0.618 } },
          { name: "Brooks Bahr", min: 10, pts: 5, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 3, composite: -1.6, zScores: { pts: -0.307, reb: -1.126, ast: -0.213, stl: 0.339, blk: -0.454, tpm: -0.698, fgImpact: -0.317, ftImpact: 1.017, to: 0.163 } },
          { name: "Khadim Mboup", min: 15, pts: 2, reb: 6, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: 1.9, zScores: { pts: -0.778, reb: 1.059, ast: -0.764, stl: -0.683, blk: 2.763, tpm: -0.698, fgImpact: 0.063, ftImpact: 0, to: 0.944 } },
          { name: "Brody Kozlowski", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.51, zScores: { pts: -1.093, reb: -0.762, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0, ftImpact: 0, to: 0.944 } },
          { name: "Jake Wahlin", min: 20, pts: 7, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 2, composite: -1.12, zScores: { pts: 0.008, reb: 0.331, ast: -0.764, stl: -0.683, blk: -0.454, tpm: 0.283, fgImpact: 0.947, ftImpact: -1.728, to: 0.944 } },
          { name: "Dawson Baker", min: 8, pts: 2, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -1.51, zScores: { pts: -0.778, reb: -0.398, ast: -0.764, stl: 0.339, blk: -0.454, tpm: -0.698, fgImpact: -0.379, ftImpact: 0.678, to: 0.944 } },
          { name: "Petar Ostojic", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.51, zScores: { pts: -1.093, reb: -0.762, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0, ftImpact: 0, to: 0.944 } },
          { name: "Nate Pickens", min: 12, pts: 1, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -3.43, zScores: { pts: -0.936, reb: -1.126, ast: -0.213, stl: 0.339, blk: -0.454, tpm: -0.698, fgImpact: -0.759, ftImpact: -0.525, to: 0.944 } }
        ]
      }
    },
      {
      id: "401920073",
      line: "Kansas City Roos 68 @ George Mason Patriots 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "KC", name: "Kansas City Roos", score: 68,
        players: [

        ]
      },
      home: {
        abbr: "GMas", name: "George Mason Patriots", score: 76,
        players: [
          { name: "Emmanuel Kanga", min: 27, pts: 13, reb: 7, ast: 0, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 5, ftm: 3, fta: 4, composite: 4.15, zScores: { pts: 0.951, reb: 1.423, ast: -0.764, stl: 0.339, blk: 1.154, tpm: -0.698, fgImpact: 2.211, ftImpact: 0.153, to: -0.618 } },
          { name: "Elijah Jones", min: 28, pts: 3, reb: 3, ast: 1, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -0.03, zScores: { pts: -0.621, reb: -0.034, ast: -0.213, stl: 0.339, blk: 1.154, tpm: 0.283, fgImpact: -0.317, ftImpact: 0, to: -0.618 } },
          { name: "Efeosa Oliogu-Elabor", min: 23, pts: 9, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 3, fta: 4, composite: 1.25, zScores: { pts: 0.322, reb: -0.034, ast: 0.889, stl: 0.339, blk: -0.454, tpm: -0.698, fgImpact: 0.568, ftImpact: 0.153, to: 0.163 } },
          { name: "Baraka Okojie", min: 34, pts: 13, reb: 7, ast: 1, stl: 3, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 12, ftm: 6, fta: 8, composite: 1.19, zScores: { pts: 0.951, reb: 1.423, ast: -0.213, stl: 2.382, blk: -0.454, tpm: 0.283, fgImpact: -2.088, ftImpact: 0.305, to: -1.4 } },
          { name: "Brayden O'Connor", min: 33, pts: 15, reb: 4, ast: 6, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 9, ftm: 8, fta: 10, composite: 4.74, zScores: { pts: 1.266, reb: 0.331, ast: 2.543, stl: 1.36, blk: -0.454, tpm: 0.283, fgImpact: -0.95, ftImpact: 0.983, to: -0.618 } },
          { name: "Emmett Adair", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.03, zScores: { pts: -1.093, reb: -1.126, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.379, ftImpact: 0, to: 0.163 } },
          { name: "Shane Pendergrass", min: 20, pts: 16, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 7, fga: 11, ftm: 1, fta: 2, composite: 3.38, zScores: { pts: 1.423, reb: -0.034, ast: -0.764, stl: -0.683, blk: 1.154, tpm: 0.283, fgImpact: 1.577, ftImpact: -0.525, to: 0.944 } },
          { name: "Michael Marcus Jr.", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.87, zScores: { pts: -1.093, reb: -1.126, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0, ftImpact: 0, to: 0.944 } },
          { name: "Makhai Valentine", min: 27, pts: 7, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: 1.56, zScores: { pts: 0.008, reb: 0.331, ast: -0.213, stl: -0.683, blk: -0.454, tpm: 1.264, fgImpact: 0.884, ftImpact: -0.525, to: 0.944 } },
          { name: "Malik Presley", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.87, zScores: { pts: -1.093, reb: -1.126, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0, ftImpact: 0, to: 0.944 } }
        ]
      }
    },
      {
      id: "401925631",
      line: "Bradley Braves 56 @ Coppin State Eagles 54 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Brad", name: "Bradley Braves", score: 56,
        players: [
          { name: "Ben Thornbrue", min: 31, pts: 9, reb: 3, ast: 2, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 7, fta: 10, composite: 4.02, zScores: { pts: 0.322, reb: -0.034, ast: 0.338, stl: -0.683, blk: 4.371, tpm: -0.698, fgImpact: -0.317, ftImpact: -0.22, to: 0.944 } },
          { name: "Xander Alarie", min: 24, pts: 9, reb: 7, ast: 0, stl: 4, blk: 1, to: 4, tpm: 0, fgm: 2, fga: 7, ftm: 5, fta: 6, composite: 2.48, zScores: { pts: 0.322, reb: 1.423, ast: -0.764, stl: 3.404, blk: 1.154, tpm: -0.698, fgImpact: -1.013, ftImpact: 0.83, to: -2.181 } },
          { name: "Max Gaspa", min: 26, pts: 6, reb: 1, ast: 2, stl: 0, blk: 0, to: 5, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.28, zScores: { pts: -0.15, reb: -0.762, ast: 0.338, stl: -0.683, blk: -0.454, tpm: 1.264, fgImpact: 0.125, ftImpact: 0, to: -2.963 } },
          { name: "Timoty van der Knaap", min: 22, pts: 7, reb: 6, ast: 0, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -1.53, zScores: { pts: 0.008, reb: 1.059, ast: -0.764, stl: -0.683, blk: -0.454, tpm: 0.283, fgImpact: -0.254, ftImpact: 0.678, to: -1.4 } },
          { name: "Trevon Payton", min: 37, pts: 16, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 13, ftm: 2, fta: 2, composite: 3.06, zScores: { pts: 1.423, reb: 0.331, ast: 0.338, stl: -0.683, blk: -0.454, tpm: 1.264, fgImpact: -0.003, ftImpact: 0.678, to: 0.163 } },
          { name: "Noah Williams", min: 20, pts: 3, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 4, composite: -6.46, zScores: { pts: -0.621, reb: 0.331, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.696, ftImpact: -2.254, to: -0.618 } },
          { name: "Gustavo Guimares", min: 7, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.39, zScores: { pts: -0.778, reb: -0.398, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0.442, ftImpact: 0, to: 0.944 } },
          { name: "Dimitrije Pavlovic", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.093, reb: -1.126, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.379, ftImpact: 0, to: 0.944 } },
          { name: "Kyle Grill", min: 23, pts: 4, reb: 4, ast: 2, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.64, zScores: { pts: -0.464, reb: 0.331, ast: 0.338, stl: 0.339, blk: -0.454, tpm: -0.698, fgImpact: -0.633, ftImpact: 0, to: -1.4 } },
          { name: "Jackson Seastrunk", min: 5, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.23, zScores: { pts: -1.093, reb: -1.126, ast: -0.764, stl: 0.339, blk: -0.454, tpm: -0.698, fgImpact: -0.379, ftImpact: 0, to: 0.944 } }
        ]
      },
      home: {
        abbr: "COPP", name: "Coppin State Eagles", score: 54,
        players: [

        ]
      }
    },
      {
      id: "401917176",
      line: "Mercyhurst Lakers 57 @ Penn State Nittany Lions 72 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MERC", name: "Mercyhurst Lakers", score: 57,
        players: [

        ]
      },
      home: {
        abbr: "PSU", name: "Penn State Nittany Lions", score: 72,
        players: [
          { name: "Roko Prkacin", min: 24, pts: 14, reb: 4, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 6, ftm: 4, fta: 6, composite: 0.7, zScores: { pts: 1.108, reb: 0.331, ast: -0.764, stl: 0.339, blk: -0.454, tpm: -0.698, fgImpact: 1.831, ftImpact: -0.373, to: -0.618 } },
          { name: "Ivan Juric", min: 31, pts: 20, reb: 15, ast: 1, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 7, fga: 8, ftm: 6, fta: 11, composite: 4.98, zScores: { pts: 2.052, reb: 4.336, ast: -0.213, stl: -0.683, blk: 1.154, tpm: -0.698, fgImpact: 2.715, ftImpact: -2.288, to: -1.4 } },
          { name: "Josh Reed", min: 24, pts: 7, reb: 6, ast: 1, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 1.64, zScores: { pts: 0.008, reb: 1.059, ast: -0.213, stl: 1.36, blk: -0.454, tpm: 0.283, fgImpact: -0.571, ftImpact: 0, to: 0.163 } },
          { name: "Thomas Allard", min: 32, pts: 6, reb: 2, ast: 5, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: 0.72, zScores: { pts: -0.15, reb: -0.398, ast: 1.991, stl: -0.683, blk: -0.454, tpm: 1.264, fgImpact: -1.013, ftImpact: 0, to: 0.163 } },
          { name: "Dasonte Bowen", min: 33, pts: 4, reb: 2, ast: 7, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: 1.97, zScores: { pts: -0.464, reb: -0.398, ast: 3.094, stl: 0.339, blk: -0.454, tpm: -0.698, fgImpact: -1.075, ftImpact: 0.678, to: 0.944 } },
          { name: "Francois Wibaut", min: 17, pts: 7, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 3, composite: -1.47, zScores: { pts: 0.008, reb: -0.398, ast: -0.764, stl: 0.339, blk: -0.454, tpm: -0.698, fgImpact: 0.947, ftImpact: -1.39, to: 0.944 } },
          { name: "Brant Byers", min: 29, pts: 14, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 7, ftm: 3, fta: 5, composite: 2.71, zScores: { pts: 1.108, reb: -0.398, ast: -0.213, stl: 0.339, blk: -0.454, tpm: 2.244, fgImpact: 0.63, ftImpact: -0.712, to: 0.163 } },
          { name: "Tim Oboh", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.093, reb: -0.762, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.759, ftImpact: 0, to: 0.944 } },
          { name: "Andy Gemao", min: 3, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.34, zScores: { pts: -1.093, reb: -0.762, ast: -0.213, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.379, ftImpact: 0, to: 0.944 } },
          { name: "Jay Rodgers", min: 5, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.34, zScores: { pts: -1.093, reb: -0.762, ast: -0.213, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.379, ftImpact: 0, to: 0.944 } }
        ]
      }
    },
      {
      id: "401916288",
      line: "Tennessee Tech Golden Eagles 66 @ Indiana Hoosiers 90 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TNTC", name: "Tennessee Tech Golden Eagles", score: 66,
        players: [

        ]
      },
      home: {
        abbr: "Ind", name: "Indiana Hoosiers", score: 90,
        players: [
          { name: "Aiden Sherrell", min: 30, pts: 11, reb: 8, ast: 0, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 7, ftm: 6, fta: 6, composite: 3.84, zScores: { pts: 0.637, reb: 1.787, ast: -0.764, stl: 0.339, blk: 1.154, tpm: 0.283, fgImpact: -1.013, ftImpact: 2.033, to: -0.618 } },
          { name: "Samet Yigitoglu", min: 17, pts: 18, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 9, fga: 10, ftm: 0, fta: 3, composite: 2.7, zScores: { pts: 1.737, reb: 1.059, ast: -0.213, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 3.6, ftImpact: -2.593, to: 0.944 } },
          { name: "Markus Burton", min: 24, pts: 12, reb: 3, ast: 7, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 8, ftm: 4, fta: 4, composite: 3.01, zScores: { pts: 0.794, reb: -0.034, ast: 3.094, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0.251, ftImpact: 1.356, to: -0.618 } },
          { name: "Jaeden Mustaf", min: 29, pts: 11, reb: 2, ast: 3, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 2, fga: 3, ftm: 7, fta: 10, composite: 0.81, zScores: { pts: 0.637, reb: -0.398, ast: 0.889, stl: 0.339, blk: 1.154, tpm: -0.698, fgImpact: 0.505, ftImpact: -0.22, to: -1.4 } },
          { name: "Darren Harris", min: 27, pts: 4, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -2.49, zScores: { pts: -0.464, reb: 0.331, ast: 0.338, stl: -0.683, blk: -0.454, tpm: 0.283, fgImpact: -0.696, ftImpact: -0.525, to: -0.618 } },
          { name: "Trevor Manhertz", min: 14, pts: 10, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 5, ftm: 1, fta: 2, composite: 1.13, zScores: { pts: 0.479, reb: 0.695, ast: -0.213, stl: -0.683, blk: -0.454, tpm: 0.283, fgImpact: 1.389, ftImpact: -0.525, to: 0.163 } },
          { name: "Vaughn Karvala", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -3.26, zScores: { pts: -0.778, reb: -1.126, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.379, ftImpact: 0.678, to: 0.944 } },
          { name: "Sam Alexis", min: 18, pts: 5, reb: 5, ast: 0, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 3, composite: -0.88, zScores: { pts: -0.307, reb: 0.695, ast: -0.764, stl: -0.683, blk: 2.763, tpm: -0.698, fgImpact: 0.125, ftImpact: -1.39, to: -0.618 } },
          { name: "Trent Sisley", min: 10, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.78, zScores: { pts: -0.778, reb: -0.034, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.317, ftImpact: 0, to: 0.944 } },
          { name: "Clemens Sokolov", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.87, zScores: { pts: -1.093, reb: -1.126, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0, ftImpact: 0, to: 0.944 } },
          { name: "Drew Snively", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.87, zScores: { pts: -1.093, reb: -1.126, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0, ftImpact: 0, to: 0.944 } },
          { name: "Bryce Lindsay", min: 25, pts: 15, reb: 2, ast: 1, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 9, ftm: 4, fta: 4, composite: 3.39, zScores: { pts: 1.266, reb: -0.398, ast: -0.213, stl: 0.339, blk: -0.454, tpm: 2.244, fgImpact: -0.128, ftImpact: 1.356, to: -0.618 } }
        ]
      }
    },
      {
      id: "401921768",
      line: "Mercer Bears 61 @ West Virginia Mountaineers 75 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MER", name: "Mercer Bears", score: 61,
        players: [

        ]
      },
      home: {
        abbr: "WVU", name: "West Virginia Mountaineers", score: 75,
        players: [
          { name: "Brenen Lorient", min: 27, pts: 8, reb: 2, ast: 0, stl: 3, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 2.87, zScores: { pts: 0.165, reb: -0.398, ast: -0.764, stl: 2.382, blk: 1.154, tpm: -0.698, fgImpact: 0.188, ftImpact: 0.678, to: 0.163 } },
          { name: "Mouhamed Sylla", min: 19, pts: 8, reb: 5, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 3, composite: 1.57, zScores: { pts: 0.165, reb: 0.695, ast: -0.764, stl: -0.683, blk: 1.154, tpm: -0.698, fgImpact: 0.947, ftImpact: -0.186, to: 0.944 } },
          { name: "Miles Sadler", min: 28, pts: 12, reb: 0, ast: 6, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 11, ftm: 3, fta: 4, composite: -0.78, zScores: { pts: 0.794, reb: -1.126, ast: 2.543, stl: -0.683, blk: -0.454, tpm: 0.283, fgImpact: -0.887, ftImpact: 0.153, to: -1.4 } },
          { name: "Seydou Traore", min: 18, pts: 7, reb: 6, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: 2.02, zScores: { pts: 0.008, reb: 1.059, ast: -0.764, stl: -0.683, blk: 1.154, tpm: 0.283, fgImpact: 0.125, ftImpact: 0.678, to: 0.163 } },
          { name: "Finley Bizjack", min: 33, pts: 15, reb: 6, ast: 3, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 12, ftm: 5, fta: 5, composite: 4.17, zScores: { pts: 1.266, reb: 1.059, ast: 0.889, stl: 0.339, blk: -0.454, tpm: 1.264, fgImpact: -1.267, ftImpact: 1.695, to: -0.618 } },
          { name: "Javan Buchanan", min: 17, pts: 12, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 8, fta: 10, composite: -0.92, zScores: { pts: 0.794, reb: -0.034, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -1.013, ftImpact: 0.983, to: 0.944 } },
          { name: "Amadou Seini", min: 16, pts: 4, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 4, composite: -4.74, zScores: { pts: -0.464, reb: 0.331, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0.505, ftImpact: -3.457, to: 0.944 } },
          { name: "Aliou Dioum", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.87, zScores: { pts: -1.093, reb: -1.126, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0, ftImpact: 0, to: 0.944 } },
          { name: "Jelani McKoy", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.87, zScores: { pts: -1.093, reb: -1.126, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0, ftImpact: 0, to: 0.944 } },
          { name: "Keonte Greybear", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.51, zScores: { pts: -1.093, reb: -0.762, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0, ftImpact: 0, to: 0.944 } },
          { name: "Martin Somerville", min: 20, pts: 3, reb: 1, ast: 1, stl: 4, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -0.82, zScores: { pts: -0.621, reb: -0.762, ast: -0.213, stl: 3.404, blk: -0.454, tpm: 0.283, fgImpact: -1.834, ftImpact: 0, to: -0.618 } },
          { name: "Joson Sanon", min: 19, pts: 6, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 1.16, zScores: { pts: -0.15, reb: 0.331, ast: -0.213, stl: -0.683, blk: -0.454, tpm: 1.264, fgImpact: 0.125, ftImpact: 0, to: 0.944 } }
        ]
      }
    },
      {
      id: "401920064",
      line: "Maryland Eastern Shore Hawks 47 @ Rhode Island Rams 67 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UMES", name: "Maryland Eastern Shore Hawks", score: 47,
        players: [

        ]
      },
      home: {
        abbr: "URI", name: "Rhode Island Rams", score: 67,
        players: [
          { name: "Matas Deniusas", min: 29, pts: 16, reb: 12, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 9, ftm: 9, fta: 9, composite: 6.33, zScores: { pts: 1.423, reb: 3.243, ast: -0.764, stl: 0.339, blk: -0.454, tpm: 0.283, fgImpact: -0.95, ftImpact: 3.05, to: 0.163 } },
          { name: "Jonah Hinton", min: 25, pts: 3, reb: 1, ast: 1, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -0.7, zScores: { pts: -0.621, reb: -0.762, ast: -0.213, stl: 2.382, blk: -0.454, tpm: 0.283, fgImpact: -0.696, ftImpact: 0, to: -0.618 } },
          { name: "Jason Fontenet II", min: 20, pts: 2, reb: 6, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.13, zScores: { pts: -0.778, reb: 1.059, ast: 0.338, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -1.075, ftImpact: 0, to: 0.163 } },
          { name: "Dylan Williamson", min: 27, pts: 18, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 7, fga: 10, ftm: 0, fta: 0, composite: 7.03, zScores: { pts: 1.737, reb: -0.034, ast: 0.338, stl: -0.683, blk: -0.454, tpm: 3.225, fgImpact: 1.957, ftImpact: 0, to: 0.944 } },
          { name: "Jahmere Tripp", min: 25, pts: 6, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 9, ftm: 2, fta: 2, composite: -1.47, zScores: { pts: -0.15, reb: 0.331, ast: 0.338, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -1.771, ftImpact: 0.678, to: 0.944 } },
          { name: "Nedas Raupelis", min: 9, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.69, zScores: { pts: -1.093, reb: -0.398, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.759, ftImpact: 0, to: 0.163 } },
          { name: "Javon Perry", min: 17, pts: 5, reb: 3, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: 1.2, zScores: { pts: -0.307, reb: -0.034, ast: -0.764, stl: -0.683, blk: 2.763, tpm: -0.698, fgImpact: 0.505, ftImpact: -0.525, to: 0.944 } },
          { name: "Mouhamed Sow", min: 5, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -2.17, zScores: { pts: -0.778, reb: -0.034, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.379, ftImpact: 0.678, to: 0.944 } },
          { name: "Jalen Harper", min: 15, pts: 9, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: 0.64, zScores: { pts: 0.322, reb: -0.398, ast: -0.213, stl: -0.683, blk: -0.454, tpm: 0.283, fgImpact: 0.947, ftImpact: 0.678, to: 0.163 } },
          { name: "Jaen Chatman", min: 13, pts: 2, reb: 0, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.38, zScores: { pts: -0.778, reb: -1.126, ast: 0.889, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.696, ftImpact: 0, to: 0.163 } },
          { name: "Barrett Loer", min: 15, pts: 4, reb: 2, ast: 1, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 1, fta: 3, composite: -1.79, zScores: { pts: -0.464, reb: -0.398, ast: -0.213, stl: 1.36, blk: -0.454, tpm: 0.283, fgImpact: -1.455, ftImpact: -1.39, to: 0.944 } }
        ]
      }
    },
      {
      id: "401911307",
      line: "Canisius Golden Griffins 86 @ Brown Bears 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CAN", name: "Canisius Golden Griffins", score: 86,
        players: [

        ]
      },
      home: {
        abbr: "Brown", name: "Brown Bears", score: 81,
        players: [
          { name: "N'famara Dabo", min: 29, pts: 7, reb: 10, ast: 1, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 3, composite: 1.28, zScores: { pts: 0.008, reb: 2.515, ast: -0.213, stl: 0.339, blk: 1.154, tpm: -0.698, fgImpact: 0.188, ftImpact: -1.39, to: -0.618 } },
          { name: "Timmy Bollin", min: 21, pts: 8, reb: 3, ast: 7, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 5.39, zScores: { pts: 0.165, reb: -0.034, ast: 3.094, stl: 1.36, blk: -0.454, tpm: -0.698, fgImpact: 1.01, ftImpact: 0, to: 0.944 } },
          { name: "Brady Loughlin", min: 27, pts: 13, reb: 6, ast: 2, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 11, ftm: 0, fta: 1, composite: 3.71, zScores: { pts: 0.951, reb: 1.059, ast: 0.338, stl: 0.339, blk: -0.454, tpm: 2.244, fgImpact: -0.066, ftImpact: -0.864, to: 0.163 } },
          { name: "Jerrell Barron Jr.", min: 13, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.66, zScores: { pts: -0.778, reb: -1.126, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.317, ftImpact: 0, to: 0.163 } },
          { name: "Jeremiah Jenkins", min: 27, pts: 13, reb: 1, ast: 3, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 4.06, zScores: { pts: 0.951, reb: -0.762, ast: 0.889, stl: 0.339, blk: -0.454, tpm: 2.244, fgImpact: 0.693, ftImpact: 0, to: 0.163 } },
          { name: "Charlie O'Sullivan", min: 6, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.32, zScores: { pts: -0.778, reb: -0.762, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0.442, ftImpact: 0, to: -0.618 } },
          { name: "Wyatt DeGraaf", min: 11, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 2, composite: -4.52, zScores: { pts: -0.464, reb: -0.398, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0.505, ftImpact: -1.728, to: 0.163 } },
          { name: "Rykan Woo", min: 13, pts: 5, reb: 0, ast: 2, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: -3.73, zScores: { pts: -0.307, reb: -1.126, ast: 0.338, stl: 0.339, blk: -0.454, tpm: -0.698, fgImpact: 0.884, ftImpact: -0.525, to: -2.181 } },
          { name: "Kenneth Francis Jr.", min: 15, pts: 8, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 2, composite: -2.29, zScores: { pts: 0.165, reb: -0.398, ast: 0.338, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 1.01, ftImpact: -1.728, to: 0.163 } },
          { name: "Isaiah Langham", min: 22, pts: 19, reb: 3, ast: 1, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 9, ftm: 5, fta: 5, composite: 7.07, zScores: { pts: 1.894, reb: -0.034, ast: -0.213, stl: 2.382, blk: -0.454, tpm: -0.698, fgImpact: 2.336, ftImpact: 1.695, to: 0.163 } },
          { name: "Ray Cuevas", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.79, zScores: { pts: -1.093, reb: -1.126, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -1.138, ftImpact: 0, to: 0.163 } },
          { name: "Adrian Uchidiuno", min: 10, pts: 0, reb: 0, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.44, zScores: { pts: -1.093, reb: -1.126, ast: -0.213, stl: 1.36, blk: -0.454, tpm: -0.698, fgImpact: -0.379, ftImpact: 0, to: 0.163 } }
        ]
      }
    },
      {
      id: "401919041",
      line: "Oklahoma State Cowboys 69 @ Texas A&M Aggies 88 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OkSt", name: "Oklahoma State Cowboys", score: 69,
        players: [
          { name: "Jordan Burks", min: 22, pts: 8, reb: 5, ast: 0, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 1, fta: 2, composite: 1.18, zScores: { pts: 0.165, reb: 0.695, ast: -0.764, stl: 1.36, blk: 1.154, tpm: 0.283, fgImpact: -0.571, ftImpact: -0.525, to: -0.618 } },
          { name: "Julius Halaifonua", min: 24, pts: 10, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 2, fta: 3, composite: -0.65, zScores: { pts: 0.479, reb: 0.695, ast: -0.213, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0.251, ftImpact: -0.186, to: 0.163 } },
          { name: "Anthony Felesi", min: 34, pts: 14, reb: 8, ast: 3, stl: 2, blk: 2, to: 1, tpm: 0, fgm: 5, fga: 9, ftm: 4, fta: 4, composite: 9.42, zScores: { pts: 1.108, reb: 1.787, ast: 0.889, stl: 1.36, blk: 2.763, tpm: -0.698, fgImpact: 0.693, ftImpact: 1.356, to: 0.163 } },
          { name: "Jacob Walker", min: 25, pts: 7, reb: 2, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 7, ftm: 4, fta: 4, composite: 0.43, zScores: { pts: 0.008, reb: -0.398, ast: 1.991, stl: -0.683, blk: -0.454, tpm: 0.283, fgImpact: -1.834, ftImpact: 1.356, to: 0.163 } },
          { name: "Kashie Natt", min: 25, pts: 12, reb: 5, ast: 1, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 10, ftm: 6, fta: 7, composite: 3.29, zScores: { pts: 0.794, reb: 0.695, ast: -0.213, stl: 2.382, blk: -0.454, tpm: -0.698, fgImpact: -1.329, ftImpact: 1.169, to: 0.944 } },
          { name: "Latrell Allmond", min: 13, pts: 0, reb: 5, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -0.82, zScores: { pts: -1.093, reb: 0.695, ast: -0.764, stl: -0.683, blk: 1.154, tpm: -0.698, fgImpact: -0.379, ftImpact: 0, to: 0.944 } },
          { name: "Andrija Grbovic", min: 14, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 1, composite: -5.19, zScores: { pts: -1.093, reb: -0.034, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.759, ftImpact: -0.864, to: 0.163 } },
          { name: "Benjamin Ahmed", min: 4, pts: 1, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -5.05, zScores: { pts: -0.936, reb: -0.398, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.759, ftImpact: -0.525, to: 0.163 } },
          { name: "Luka Bogavac", min: 9, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.93, zScores: { pts: -0.621, reb: -0.762, ast: -0.213, stl: -0.683, blk: -0.454, tpm: 0.283, fgImpact: -1.075, ftImpact: 0, to: -1.4 } },
          { name: "Parker Robinson", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.093, reb: -1.126, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.379, ftImpact: 0, to: 0.944 } },
          { name: "Kanye Clary", min: 28, pts: 14, reb: 0, ast: 0, stl: 1, blk: 0, to: 5, tpm: 3, fgm: 3, fga: 13, ftm: 5, fta: 6, composite: -3.25, zScores: { pts: 1.108, reb: -1.126, ast: -0.764, stl: 0.339, blk: -0.454, tpm: 2.244, fgImpact: -2.467, ftImpact: 0.83, to: -2.963 } }
        ]
      },
      home: {
        abbr: "TAMU", name: "Texas A&M Aggies", score: 88,
        players: [
          { name: "Jalen Shelley", min: 22, pts: 7, reb: 7, ast: 2, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 2, composite: 2.55, zScores: { pts: 0.008, reb: 1.423, ast: 0.338, stl: 0.339, blk: 1.154, tpm: 0.283, fgImpact: 0.568, ftImpact: -1.728, to: 0.163 } },
          { name: "Mackenzie Mgbako", min: 19, pts: 7, reb: 4, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 7, ftm: 2, fta: 3, composite: -1.52, zScores: { pts: 0.008, reb: 0.331, ast: -0.213, stl: 0.339, blk: -0.454, tpm: 0.283, fgImpact: -1.013, ftImpact: -0.186, to: -0.618 } },
          { name: "Zach Clemence", min: 21, pts: 14, reb: 4, ast: 1, stl: 0, blk: 1, to: 3, tpm: 3, fgm: 3, fga: 4, ftm: 5, fta: 7, composite: 3.45, zScores: { pts: 1.108, reb: 0.331, ast: -0.213, stl: -0.683, blk: 1.154, tpm: 2.244, fgImpact: 0.947, ftImpact: -0.034, to: -1.4 } },
          { name: "PJ Haggerty", min: 31, pts: 22, reb: 2, ast: 2, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 7, fga: 14, ftm: 7, fta: 8, composite: 2.24, zScores: { pts: 2.366, reb: -0.398, ast: 0.338, stl: 0.339, blk: -0.454, tpm: 0.283, fgImpact: 0.439, ftImpact: 1.508, to: -2.181 } },
          { name: "Jordan Pope", min: 26, pts: 14, reb: 3, ast: 6, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 8, ftm: 3, fta: 4, composite: 5.53, zScores: { pts: 1.108, reb: -0.034, ast: 2.543, stl: 0.339, blk: -0.454, tpm: 2.244, fgImpact: 0.251, ftImpact: 0.153, to: -0.618 } },
          { name: "Josh Irving", min: 23, pts: 14, reb: 10, ast: 2, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 4, fga: 6, ftm: 5, fta: 6, composite: 6.96, zScores: { pts: 1.108, reb: 2.515, ast: 0.338, stl: 0.339, blk: 1.154, tpm: 0.283, fgImpact: 1.01, ftImpact: 0.83, to: -0.618 } },
          { name: "Jamie Vinson", min: 7, pts: 0, reb: 0, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.61, zScores: { pts: -1.093, reb: -1.126, ast: -0.764, stl: 1.36, blk: -0.454, tpm: -0.698, fgImpact: 0, ftImpact: 0, to: 0.163 } },
          { name: "Chris McDermott", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.87, zScores: { pts: -1.093, reb: -1.126, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0, ftImpact: 0, to: 0.944 } },
          { name: "Neiko Mundey", min: 5, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -3.88, zScores: { pts: -0.936, reb: -0.762, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0, ftImpact: -0.525, to: 0.944 } },
          { name: "Tyshawn Archie", min: 8, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.28, zScores: { pts: -1.093, reb: -0.762, ast: -0.213, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.759, ftImpact: 0, to: -0.618 } },
          { name: "Jalen Reece", min: 10, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.68, zScores: { pts: -1.093, reb: -1.126, ast: -0.213, stl: 0.339, blk: -0.454, tpm: -0.698, fgImpact: -0.379, ftImpact: 0, to: 0.944 } },
          { name: "Rylan Griffen", min: 27, pts: 9, reb: 5, ast: 1, stl: 0, blk: 2, to: 2, tpm: 2, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: 3.95, zScores: { pts: 0.322, reb: 0.695, ast: -0.213, stl: -0.683, blk: 2.763, tpm: 1.264, fgImpact: 0.947, ftImpact: -0.525, to: -0.618 } }
        ]
      }
    },
      {
      id: "401917524",
      line: "Loyola Marymount Lions 72 @ South Alabama Jaguars 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LoyMa", name: "Loyola Marymount Lions", score: 72,
        players: [
          { name: "Jevon Porter", min: 31, pts: 14, reb: 7, ast: 2, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 5, fga: 9, ftm: 4, fta: 4, composite: 5.68, zScores: { pts: 1.108, reb: 1.423, ast: 0.338, stl: -0.683, blk: 2.763, tpm: -0.698, fgImpact: 0.693, ftImpact: 1.356, to: -0.618 } },
          { name: "Zion Sensley", min: 36, pts: 15, reb: 9, ast: 1, stl: 0, blk: 2, to: 0, tpm: 3, fgm: 6, fga: 16, ftm: 0, fta: 0, composite: 7.33, zScores: { pts: 1.266, reb: 2.151, ast: -0.213, stl: -0.683, blk: 2.763, tpm: 2.244, fgImpact: -1.141, ftImpact: 0, to: 0.944 } },
          { name: "All Wright", min: 24, pts: 2, reb: 0, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.72, zScores: { pts: -0.778, reb: -1.126, ast: 0.338, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.696, ftImpact: 0, to: -0.618 } },
          { name: "Mazi Mosley", min: 28, pts: 7, reb: 2, ast: 4, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: 0.91, zScores: { pts: 0.008, reb: -0.398, ast: 1.44, stl: 1.36, blk: -0.454, tpm: 0.283, fgImpact: -1.392, ftImpact: 0.678, to: -0.618 } },
          { name: "Jasai Miles", min: 33, pts: 14, reb: 3, ast: 7, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 10, ftm: 1, fta: 1, composite: 6.33, zScores: { pts: 1.108, reb: -0.034, ast: 3.094, stl: 0.339, blk: -0.454, tpm: 2.244, fgImpact: 0.314, ftImpact: 0.339, to: -0.618 } },
          { name: "JJ Harris", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.093, reb: -1.126, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.379, ftImpact: 0, to: 0.944 } },
          { name: "Christian Humphrey-Rembert", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.093, reb: -1.126, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.379, ftImpact: 0, to: 0.944 } },
          { name: "Andy Sigiscar", min: 24, pts: 12, reb: 7, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 6, ftm: 2, fta: 4, composite: 1.11, zScores: { pts: 0.794, reb: 1.423, ast: -0.213, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 1.831, ftImpact: -1.051, to: 0.163 } },
          { name: "Aaron McBride", min: 22, pts: 8, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: -0.19, zScores: { pts: 0.165, reb: 0.695, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 1.389, ftImpact: 0, to: 0.163 } }
        ]
      },
      home: {
        abbr: "USA", name: "South Alabama Jaguars", score: 79,
        players: [

        ]
      }
    },
      {
      id: "401916306",
      line: "Southern Jaguars 61 @ Minnesota Golden Gophers 91 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SOU", name: "Southern Jaguars", score: 61,
        players: [

        ]
      },
      home: {
        abbr: "Minn", name: "Minnesota Golden Gophers", score: 91,
        players: [
          { name: "Grayson Grove", min: 20, pts: 7, reb: 6, ast: 3, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 3, composite: -0.11, zScores: { pts: 0.008, reb: 1.059, ast: 0.889, stl: -0.683, blk: 1.154, tpm: -0.698, fgImpact: 0.947, ftImpact: -1.39, to: -1.4 } },
          { name: "Bobby Durkin", min: 28, pts: 15, reb: 4, ast: 6, stl: 0, blk: 1, to: 4, tpm: 3, fgm: 5, fga: 9, ftm: 2, fta: 2, composite: 6.04, zScores: { pts: 1.266, reb: 0.331, ast: 2.543, stl: -0.683, blk: 1.154, tpm: 2.244, fgImpact: 0.693, ftImpact: 0.678, to: -2.181 } },
          { name: "Jaylen Crocker-Johnson", min: 29, pts: 10, reb: 5, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 8, ftm: 4, fta: 4, composite: 1.45, zScores: { pts: 0.479, reb: 0.695, ast: -0.213, stl: 0.339, blk: -0.454, tpm: 1.264, fgImpact: -1.392, ftImpact: 1.356, to: -0.618 } },
          { name: "Isaac Asuma", min: 35, pts: 23, reb: 5, ast: 6, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 9, fga: 14, ftm: 1, fta: 2, composite: 9.03, zScores: { pts: 2.523, reb: 0.695, ast: 2.543, stl: 0.339, blk: -0.454, tpm: 3.225, fgImpact: 2.082, ftImpact: -0.525, to: -1.4 } },
          { name: "Kyan Evans", min: 31, pts: 10, reb: 4, ast: 6, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 6, ftm: 3, fta: 5, composite: 2.62, zScores: { pts: 0.479, reb: 0.331, ast: 2.543, stl: 1.36, blk: -0.454, tpm: 0.283, fgImpact: 0.188, ftImpact: -0.712, to: -1.4 } },
          { name: "Nolen Anderson", min: 3, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 1, composite: -1.71, zScores: { pts: -0.621, reb: -0.762, ast: -0.213, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0.442, ftImpact: 0.339, to: 0.944 } },
          { name: "Malick Kordel", min: 16, pts: 10, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 6, ftm: 0, fta: 1, composite: 0.26, zScores: { pts: 0.479, reb: 0.695, ast: -0.213, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 1.831, ftImpact: -0.864, to: 0.163 } },
          { name: "Blake Nixon Jr.", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.87, zScores: { pts: -1.093, reb: -1.126, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0, ftImpact: 0, to: 0.944 } },
          { name: "Max Lorenson", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.87, zScores: { pts: -1.093, reb: -1.126, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0, ftImpact: 0, to: 0.944 } },
          { name: "Nolan Groves", min: 19, pts: 8, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 3.68, zScores: { pts: 0.165, reb: -0.034, ast: 0.889, stl: 0.339, blk: -0.454, tpm: 1.264, fgImpact: 0.568, ftImpact: 0, to: 0.944 } },
          { name: "Cedric Tomes", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.87, zScores: { pts: -1.093, reb: -1.126, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0, ftImpact: 0, to: 0.944 } },
          { name: "Malachi Palmer", min: 11, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.53, zScores: { pts: -0.778, reb: -0.762, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0.442, ftImpact: 0, to: 0.163 } },
          { name: "Winters Grady", min: 2, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.06, zScores: { pts: -0.621, reb: -0.762, ast: -0.213, stl: -0.683, blk: -0.454, tpm: 0.283, fgImpact: 0.442, ftImpact: 0, to: 0.944 } }
        ]
      }
    },
      {
      id: "401911239",
      line: "Richmond Spiders 70 @ Southern Illinois Salukis 80 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Rich", name: "Richmond Spiders", score: 70,
        players: [
          { name: "Jamie Kaiser Jr.", min: 33, pts: 16, reb: 5, ast: 0, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 12, ftm: 1, fta: 2, composite: 3.5, zScores: { pts: 1.423, reb: 0.695, ast: -0.764, stl: 0.339, blk: -0.454, tpm: 2.244, fgImpact: 0.376, ftImpact: -0.525, to: 0.163 } },
          { name: "Amon Dorries", min: 26, pts: 5, reb: 5, ast: 4, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 4, composite: -2.11, zScores: { pts: -0.307, reb: 0.695, ast: 1.44, stl: 0.339, blk: -0.454, tpm: -0.698, fgImpact: -0.254, ftImpact: -2.254, to: -0.618 } },
          { name: "Aiden Argabright", min: 24, pts: 0, reb: 4, ast: 4, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -2.65, zScores: { pts: -1.093, reb: 0.331, ast: 1.44, stl: 0.339, blk: -0.454, tpm: -0.698, fgImpact: -1.897, ftImpact: 0, to: -0.618 } },
          { name: "Derin Saran", min: 28, pts: 6, reb: 7, ast: 4, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 10, ftm: 0, fta: 0, composite: 2.11, zScores: { pts: -0.15, reb: 1.423, ast: 1.44, stl: 1.36, blk: -0.454, tpm: 1.264, fgImpact: -2.151, ftImpact: 0, to: -0.618 } },
          { name: "Dominick Stewart", min: 33, pts: 25, reb: 5, ast: 2, stl: 2, blk: 0, to: 3, tpm: 2, fgm: 9, fga: 20, ftm: 5, fta: 5, composite: 6.14, zScores: { pts: 2.838, reb: 0.695, ast: 0.338, stl: 1.36, blk: -0.454, tpm: 1.264, fgImpact: -0.194, ftImpact: 1.695, to: -1.4 } },
          { name: "Chad Cook", min: 11, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.48, zScores: { pts: -1.093, reb: -1.126, ast: -0.213, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.379, ftImpact: 0, to: 0.163 } },
          { name: "Andrew Ball", min: 21, pts: 13, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 7, ftm: 2, fta: 4, composite: 0.6, zScores: { pts: 0.951, reb: -0.398, ast: 0.338, stl: -0.683, blk: -0.454, tpm: 0.283, fgImpact: 1.452, ftImpact: -1.051, to: 0.163 } },
          { name: "Sam Simmons Jr.", min: 10, pts: 2, reb: 1, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.47, zScores: { pts: -0.778, reb: -0.762, ast: -0.764, stl: 1.36, blk: -0.454, tpm: -0.698, fgImpact: -0.317, ftImpact: 0, to: 0.944 } },
          { name: "Will Harper III", min: 10, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.78, zScores: { pts: -0.621, reb: -0.762, ast: -0.764, stl: -0.683, blk: -0.454, tpm: 0.283, fgImpact: 0.063, ftImpact: 0, to: 0.163 } },
          { name: "Collin Tanner", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.87, zScores: { pts: -1.093, reb: -1.126, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0, ftImpact: 0, to: 0.944 } }
        ]
      },
      home: {
        abbr: "SIU", name: "Southern Illinois Salukis", score: 80,
        players: [
          { name: "Max Pikaar", min: 34, pts: 7, reb: 11, ast: 0, stl: 0, blk: 3, to: 4, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 4.1, zScores: { pts: 0.008, reb: 2.879, ast: -0.764, stl: -0.683, blk: 4.371, tpm: 0.283, fgImpact: 0.188, ftImpact: 0, to: -2.181 } },
          { name: "Jaheem Webber", min: 24, pts: 4, reb: 3, ast: 0, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 2.38, zScores: { pts: -0.464, reb: -0.034, ast: -0.764, stl: 1.36, blk: 1.154, tpm: -0.698, fgImpact: 0.884, ftImpact: 0, to: 0.944 } },
          { name: "Jeremiah Jackson", min: 33, pts: 7, reb: 2, ast: 2, stl: 3, blk: 2, to: 3, tpm: 1, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: 3.26, zScores: { pts: 0.008, reb: -0.398, ast: 0.338, stl: 2.382, blk: 2.763, tpm: 0.283, fgImpact: -1.392, ftImpact: 0.678, to: -1.4 } },
          { name: "Jalen Haynes", min: 33, pts: 23, reb: 6, ast: 3, stl: 1, blk: 0, to: 5, tpm: 2, fgm: 6, fga: 11, ftm: 9, fta: 9, composite: 6.46, zScores: { pts: 2.523, reb: 1.059, ast: 0.889, stl: 0.339, blk: -0.454, tpm: 1.264, fgImpact: 0.756, ftImpact: 3.05, to: -2.963 } },
          { name: "Damien Mayo Jr.", min: 35, pts: 25, reb: 1, ast: 6, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 13, ftm: 15, fta: 15, composite: 7.21, zScores: { pts: 2.838, reb: -0.762, ast: 2.543, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -0.824, ftImpact: 5.084, to: 0.163 } },
          { name: "Luke Susko", min: 22, pts: 11, reb: 9, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 4.71, zScores: { pts: 0.637, reb: 2.151, ast: -0.213, stl: -0.683, blk: -0.454, tpm: 2.244, fgImpact: 0.188, ftImpact: 0.678, to: 0.163 } },
          { name: "Luke Walsh", min: 9, pts: 3, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.12, zScores: { pts: -0.621, reb: -1.126, ast: -0.764, stl: 0.339, blk: -0.454, tpm: 0.283, fgImpact: 0.063, ftImpact: 0, to: 0.163 } },
          { name: "Caden Hawkins", min: 9, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.32, zScores: { pts: -1.093, reb: -1.126, ast: -0.213, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0, ftImpact: 0, to: 0.944 } },
          { name: "Brock McClure", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.51, zScores: { pts: -1.093, reb: -0.762, ast: -0.764, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0, ftImpact: 0, to: 0.944 } }
        ]
      }
    },
      {
      id: "401911533",
      line: "New Mexico State Aggies 58 @ UTEP Miners 60 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NMSU", name: "New Mexico State Aggies", score: 58,
        players: [

        ]
      },
      home: {
        abbr: "UTEP", name: "UTEP Miners", score: 60,
        players: [
          { name: "Youssouf Traore", min: 26, pts: 8, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 0.64, zScores: { pts: 0.165, reb: 0.331, ast: -0.213, stl: 0.339, blk: -0.454, tpm: -0.698, fgImpact: 1.01, ftImpact: 0, to: 0.163 } },
          { name: "Augusto Cassia", min: 13, pts: 0, reb: 4, ast: 0, stl: 1, blk: 2, to: 5, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.47, zScores: { pts: -1.093, reb: 0.331, ast: -0.764, stl: 0.339, blk: 2.763, tpm: -0.698, fgImpact: -0.379, ftImpact: 0, to: -2.963 } },
          { name: "Cam McDaniels", min: 36, pts: 22, reb: 5, ast: 2, stl: 0, blk: 1, to: 4, tpm: 2, fgm: 8, fga: 18, ftm: 4, fta: 4, composite: 4.05, zScores: { pts: 2.366, reb: 0.695, ast: 0.338, stl: -0.683, blk: 1.154, tpm: 1.264, fgImpact: -0.257, ftImpact: 1.356, to: -2.181 } },
          { name: "Leif Moeller", min: 35, pts: 10, reb: 3, ast: 4, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 5.25, zScores: { pts: 0.479, reb: -0.034, ast: 1.44, stl: 1.36, blk: -0.454, tpm: 1.264, fgImpact: 0.251, ftImpact: 0, to: 0.944 } },
          { name: "Reese Miller", min: 30, pts: 3, reb: 3, ast: 2, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 10, ftm: 0, fta: 0, composite: -1.35, zScores: { pts: -0.621, reb: -0.034, ast: 0.338, stl: 0.339, blk: 1.154, tpm: 0.283, fgImpact: -2.972, ftImpact: 0, to: 0.163 } },
          { name: "Reid Cason", min: 14, pts: 3, reb: 4, ast: 0, stl: 3, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 3, fta: 4, composite: 1.72, zScores: { pts: -0.621, reb: 0.331, ast: -0.764, stl: 2.382, blk: 1.154, tpm: -0.698, fgImpact: -0.379, ftImpact: 0.153, to: 0.163 } },
          { name: "Isaiah Ward", min: 13, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.37, zScores: { pts: -1.093, reb: -0.034, ast: -0.213, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: -1.138, ftImpact: 0, to: 0.944 } },
          { name: "Ryan Jackson Jr.", min: 16, pts: 3, reb: 3, ast: 2, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 1, composite: 1.02, zScores: { pts: -0.621, reb: -0.034, ast: 0.338, stl: 1.36, blk: -0.454, tpm: 0.283, fgImpact: 0.063, ftImpact: -0.864, to: 0.944 } },
          { name: "Donovan Criss", min: 5, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -3.23, zScores: { pts: -0.621, reb: -1.126, ast: -0.213, stl: -0.683, blk: -0.454, tpm: -0.698, fgImpact: 0.063, ftImpact: 0.339, to: 0.163 } },
          { name: "Jace Whiting", min: 12, pts: 8, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 2, fta: 4, composite: -0.66, zScores: { pts: 0.165, reb: -0.762, ast: -0.213, stl: -0.683, blk: -0.454, tpm: 1.264, fgImpact: 0.125, ftImpact: -1.051, to: 0.944 } }
        ]
      }
    }
    ]
  },
    "2026-11-13": {
    games: [
      {
      id: "401921721",
      line: "North Alabama Lions @ Miami Hurricanes (11/13 - 5:00 PM EST)",
      completed: false,
      statusText: "11/13 - 5:00 PM EST",
      away: {
        abbr: "UNA", name: "North Alabama Lions", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Mia-FL", name: "Miami Hurricanes", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909696",
      line: "Texas A&M-Corpus Christi Islanders @ Florida State Seminoles (11/13 - 5:00 PM EST)",
      completed: false,
      statusText: "11/13 - 5:00 PM EST",
      away: {
        abbr: "AMCC", name: "Texas A&M-Corpus Christi Islanders", score: null,
        players: [

        ]
      },
      home: {
        abbr: "FSU", name: "Florida State Seminoles", score: null,
        players: [

        ]
      }
    },
      {
      id: "401923270",
      line: "Bryant Bulldogs @ Rutgers Scarlet Knights (11/13 - 6:00 PM EST)",
      completed: false,
      statusText: "11/13 - 6:00 PM EST",
      away: {
        abbr: "BRY", name: "Bryant Bulldogs", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Rut", name: "Rutgers Scarlet Knights", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909515",
      line: "Georgetown Hoyas @ Clemson Tigers (11/13 - 6:00 PM EST)",
      completed: false,
      statusText: "11/13 - 6:00 PM EST",
      away: {
        abbr: "GTown", name: "Georgetown Hoyas", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Clem", name: "Clemson Tigers", score: null,
        players: [

        ]
      }
    },
      {
      id: "401902278",
      line: "Pittsburgh Panthers @ Butler Bulldogs (11/13 - 6:30 PM EST)",
      completed: false,
      statusText: "11/13 - 6:30 PM EST",
      away: {
        abbr: "Pitt", name: "Pittsburgh Panthers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Butl", name: "Butler Bulldogs", score: null,
        players: [

        ]
      }
    },
      {
      id: "401906772",
      line: "Merrimack Warriors @ Florida Gators (11/13 - 7:00 PM EST)",
      completed: false,
      statusText: "11/13 - 7:00 PM EST",
      away: {
        abbr: "MRMK", name: "Merrimack Warriors", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Fla", name: "Florida Gators", score: null,
        players: [

        ]
      }
    },
      {
      id: "401913528",
      line: "Sam Houston Bearkats @ Illinois Fighting Illini (11/13 - 7:00 PM EST)",
      completed: false,
      statusText: "11/13 - 7:00 PM EST",
      away: {
        abbr: "SHSU", name: "Sam Houston Bearkats", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Ill", name: "Illinois Fighting Illini", score: null,
        players: [

        ]
      }
    },
      {
      id: "401925755",
      line: "Northern Iowa Panthers @ Michigan State Spartans (11/13 - 7:00 PM EST)",
      completed: false,
      statusText: "11/13 - 7:00 PM EST",
      away: {
        abbr: "NrthIA", name: "Northern Iowa Panthers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "MSU", name: "Michigan State Spartans", score: null,
        players: [

        ]
      }
    },
      {
      id: "401906850",
      line: "Tennessee State Tigers @ Tennessee Volunteers (11/13 - 7:00 PM EST)",
      completed: false,
      statusText: "11/13 - 7:00 PM EST",
      away: {
        abbr: "TNST", name: "Tennessee State Tigers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Tenn", name: "Tennessee Volunteers", score: null,
        players: [

        ]
      }
    },
      {
      id: "401921825",
      line: "Prairie View A&M Panthers @ Vanderbilt Commodores (11/13 - 7:00 PM EST)",
      completed: false,
      statusText: "11/13 - 7:00 PM EST",
      away: {
        abbr: "PV", name: "Prairie View A&M Panthers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Vand", name: "Vanderbilt Commodores", score: null,
        players: [

        ]
      }
    },
      {
      id: "401921803",
      line: "Northern Arizona Lumberjacks @ Kentucky Wildcats (11/13 - 7:00 PM EST)",
      completed: false,
      statusText: "11/13 - 7:00 PM EST",
      away: {
        abbr: "NAU", name: "Northern Arizona Lumberjacks", score: null,
        players: [

        ]
      },
      home: {
        abbr: "KY", name: "Kentucky Wildcats", score: null,
        players: [

        ]
      }
    },
      {
      id: "401926133",
      line: "Ohio Bobcats @ Purdue Boilermakers (11/13 - 7:00 PM EST)",
      completed: false,
      statusText: "11/13 - 7:00 PM EST",
      away: {
        abbr: "OHIO", name: "Ohio Bobcats", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Pur", name: "Purdue Boilermakers", score: null,
        players: [

        ]
      }
    },
      {
      id: "401925820",
      line: "App State Mountaineers @ Charlotte 49ers (11/13 - 7:00 PM EST)",
      completed: false,
      statusText: "11/13 - 7:00 PM EST",
      away: {
        abbr: "APP", name: "App State Mountaineers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "UNCC", name: "Charlotte 49ers", score: null,
        players: [

        ]
      }
    },
      {
      id: "401924704",
      line: "Columbia Lions @ Bucknell Bison (11/13 - 7:00 PM EST)",
      completed: false,
      statusText: "11/13 - 7:00 PM EST",
      away: {
        abbr: "Colum", name: "Columbia Lions", score: null,
        players: [

        ]
      },
      home: {
        abbr: "BUCK", name: "Bucknell Bison", score: null,
        players: [

        ]
      }
    },
      {
      id: "401920747",
      line: "Yale Bulldogs @ Northeastern Huskies (11/13 - 7:00 PM EST)",
      completed: false,
      statusText: "11/13 - 7:00 PM EST",
      away: {
        abbr: "Yale", name: "Yale Bulldogs", score: null,
        players: [

        ]
      },
      home: {
        abbr: "NE", name: "Northeastern Huskies", score: null,
        players: [

        ]
      }
    },
      {
      id: "401920379",
      line: "Mount St. Mary's Mountaineers @ Virginia Tech Hokies (11/13 - 7:00 PM EST)",
      completed: false,
      statusText: "11/13 - 7:00 PM EST",
      away: {
        abbr: "MSM", name: "Mount St. Mary's Mountaineers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "VaTec", name: "Virginia Tech Hokies", score: null,
        players: [

        ]
      }
    },
      {
      id: "401918958",
      line: "Troy Trojans @ NC State Wolfpack (11/13 - 7:00 PM EST)",
      completed: false,
      statusText: "11/13 - 7:00 PM EST",
      away: {
        abbr: "TROY", name: "Troy Trojans", score: null,
        players: [

        ]
      },
      home: {
        abbr: "NCSU", name: "NC State Wolfpack", score: null,
        players: [

        ]
      }
    },
      {
      id: "401911210",
      line: "Harvard Crimson @ George Washington Revolutionaries (11/13 - 7:00 PM EST)",
      completed: false,
      statusText: "11/13 - 7:00 PM EST",
      away: {
        abbr: "Harv", name: "Harvard Crimson", score: null,
        players: [

        ]
      },
      home: {
        abbr: "GrgWas", name: "George Washington Revolutionaries", score: null,
        players: [

        ]
      }
    },
      {
      id: "401911197",
      line: "Long Island University Sharks @ Fordham Rams (11/13 - 7:00 PM EST)",
      completed: false,
      statusText: "11/13 - 7:00 PM EST",
      away: {
        abbr: "LIU", name: "Long Island University Sharks", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Ford", name: "Fordham Rams", score: null,
        players: [

        ]
      }
    },
      {
      id: "401906782",
      line: "Georgia Bulldogs @ North Carolina Tar Heels (11/13 - 7:00 PM EST)",
      completed: false,
      statusText: "11/13 - 7:00 PM EST",
      away: {
        abbr: "UGA", name: "Georgia Bulldogs", score: null,
        players: [

        ]
      },
      home: {
        abbr: "UNC", name: "North Carolina Tar Heels", score: null,
        players: [

        ]
      }
    },
      {
      id: "401916316",
      line: "Ohio State Buckeyes @ UConn Huskies (11/13 - 7:30 PM EST)",
      completed: false,
      statusText: "11/13 - 7:30 PM EST",
      away: {
        abbr: "OhSt", name: "Ohio State Buckeyes", score: null,
        players: [

        ]
      },
      home: {
        abbr: "UConn", name: "UConn Huskies", score: null,
        players: [

        ]
      }
    },
      {
      id: "401927363",
      line: "South Dakota Coyotes @ Drake Bulldogs (11/13 - 7:30 PM EST)",
      completed: false,
      statusText: "11/13 - 7:30 PM EST",
      away: {
        abbr: "SDAK", name: "South Dakota Coyotes", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Drake", name: "Drake Bulldogs", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909565",
      line: "SIU Edwardsville Cougars @ Duke Blue Devils (11/13 - 8:00 PM EST)",
      completed: false,
      statusText: "11/13 - 8:00 PM EST",
      away: {
        abbr: "SIUE", name: "SIU Edwardsville Cougars", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Duke", name: "Duke Blue Devils", score: null,
        players: [

        ]
      }
    },
      {
      id: "401916297",
      line: "Virginia Cavaliers @ Maryland Terrapins (11/13 - 8:00 PM EST)",
      completed: false,
      statusText: "11/13 - 8:00 PM EST",
      away: {
        abbr: "UVA", name: "Virginia Cavaliers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "MD", name: "Maryland Terrapins", score: null,
        players: [

        ]
      }
    },
      {
      id: "401917916",
      line: "Central Arkansas Bears @ Arkansas Razorbacks (11/13 - 8:00 PM EST)",
      completed: false,
      statusText: "11/13 - 8:00 PM EST",
      away: {
        abbr: "CARK", name: "Central Arkansas Bears", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Ark", name: "Arkansas Razorbacks", score: null,
        players: [

        ]
      }
    },
      {
      id: "401929199",
      line: "Southern Miss Golden Eagles @ Texas State Bobcats (11/13 - 8:00 PM EST)",
      completed: false,
      statusText: "11/13 - 8:00 PM EST",
      away: {
        abbr: "USM", name: "Southern Miss Golden Eagles", score: null,
        players: [

        ]
      },
      home: {
        abbr: "TxSt", name: "Texas State Bobcats", score: null,
        players: [

        ]
      }
    },
      {
      id: "401927380",
      line: "Texas Southern Tigers @ Murray State Racers (11/13 - 8:00 PM EST)",
      completed: false,
      statusText: "11/13 - 8:00 PM EST",
      away: {
        abbr: "TXSO", name: "Texas Southern Tigers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Mur", name: "Murray State Racers", score: null,
        players: [

        ]
      }
    },
      {
      id: "401927374",
      line: "Illinois State Redbirds @ North Dakota State Bison (11/13 - 8:00 PM EST)",
      completed: false,
      statusText: "11/13 - 8:00 PM EST",
      away: {
        abbr: "IlSt", name: "Illinois State Redbirds", score: null,
        players: [

        ]
      },
      home: {
        abbr: "NDSU", name: "North Dakota State Bison", score: null,
        players: [

        ]
      }
    },
      {
      id: "401921026",
      line: "Georgia Southern Eagles @ UCF Knights (11/13 - 8:00 PM EST)",
      completed: false,
      statusText: "11/13 - 8:00 PM EST",
      away: {
        abbr: "GASO", name: "Georgia Southern Eagles", score: null,
        players: [

        ]
      },
      home: {
        abbr: "UCF", name: "UCF Knights", score: null,
        players: [

        ]
      }
    },
      {
      id: "401919049",
      line: "Milwaukee Panthers @ TCU Horned Frogs (11/13 - 8:00 PM EST)",
      completed: false,
      statusText: "11/13 - 8:00 PM EST",
      away: {
        abbr: "MILW", name: "Milwaukee Panthers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "TCU", name: "TCU Horned Frogs", score: null,
        players: [

        ]
      }
    },
      {
      id: "401906804",
      line: "Fairleigh Dickinson Knights @ Oklahoma Sooners (11/13 - 8:00 PM EST)",
      completed: false,
      statusText: "11/13 - 8:00 PM EST",
      away: {
        abbr: "FDU", name: "Fairleigh Dickinson Knights", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Okla", name: "Oklahoma Sooners", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909741",
      line: "Arizona Wildcats @ Auburn Tigers (11/13 - 9:00 PM EST)",
      completed: false,
      statusText: "11/13 - 9:00 PM EST",
      away: {
        abbr: "Ariz", name: "Arizona Wildcats", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Aub", name: "Auburn Tigers", score: null,
        players: [

        ]
      }
    },
      {
      id: "401906760",
      line: "Seton Hall Pirates @ Alabama Crimson Tide (11/13 - 9:00 PM EST)",
      completed: false,
      statusText: "11/13 - 9:00 PM EST",
      away: {
        abbr: "Seton", name: "Seton Hall Pirates", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Bama", name: "Alabama Crimson Tide", score: null,
        players: [

        ]
      }
    },
      {
      id: "401921728",
      line: "Stanford Cardinal @ UNLV Rebels (11/13 - 9:00 PM EST)",
      completed: false,
      statusText: "11/13 - 9:00 PM EST",
      away: {
        abbr: "Stan", name: "Stanford Cardinal", score: null,
        players: [

        ]
      },
      home: {
        abbr: "UNLV", name: "UNLV Rebels", score: null,
        players: [

        ]
      }
    },
      {
      id: "401917980",
      line: "UL Monroe Warhawks @ Arizona State Sun Devils (11/13 - 9:00 PM EST)",
      completed: false,
      statusText: "11/13 - 9:00 PM EST",
      away: {
        abbr: "ULM", name: "UL Monroe Warhawks", score: null,
        players: [

        ]
      },
      home: {
        abbr: "AzSt", name: "Arizona State Sun Devils", score: null,
        players: [

        ]
      }
    },
      {
      id: "401911014",
      line: "Ball State Cardinals @ SMU Mustangs (11/13 - 9:00 PM EST)",
      completed: false,
      statusText: "11/13 - 9:00 PM EST",
      away: {
        abbr: "BALL", name: "Ball State Cardinals", score: null,
        players: [

        ]
      },
      home: {
        abbr: "SMU", name: "SMU Mustangs", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909503",
      line: "DePaul Blue Demons @ Northwestern Wildcats (11/13 - 9:00 PM EST)",
      completed: false,
      statusText: "11/13 - 9:00 PM EST",
      away: {
        abbr: "DeP", name: "DePaul Blue Demons", score: null,
        players: [

        ]
      },
      home: {
        abbr: "NW", name: "Northwestern Wildcats", score: null,
        players: [

        ]
      }
    },
      {
      id: "401906794",
      line: "Xavier Musketeers @ Mississippi State Bulldogs (11/13 - 9:00 PM EST)",
      completed: false,
      statusText: "11/13 - 9:00 PM EST",
      away: {
        abbr: "Xav", name: "Xavier Musketeers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "MissSt", name: "Mississippi State Bulldogs", score: null,
        players: [

        ]
      }
    },
      {
      id: "401925739",
      line: "Mississippi Valley State Delta Devils @ Oregon State Beavers (11/13 - 9:30 PM EST)",
      completed: false,
      statusText: "11/13 - 9:30 PM EST",
      away: {
        abbr: "MVSU", name: "Mississippi Valley State Delta Devils", score: null,
        players: [

        ]
      },
      home: {
        abbr: "OrSt", name: "Oregon State Beavers", score: null,
        players: [

        ]
      }
    },
      {
      id: "401917526",
      line: "Chicago State Cougars @ San Diego Toreros (11/13 - 9:30 PM EST)",
      completed: false,
      statusText: "11/13 - 9:30 PM EST",
      away: {
        abbr: "CHST", name: "Chicago State Cougars", score: null,
        players: [

        ]
      },
      home: {
        abbr: "USD", name: "San Diego Toreros", score: null,
        players: [

        ]
      }
    },
      {
      id: "401920372",
      line: "UC San Diego Tritons @ Utah State Aggies (11/13 - 10:00 PM EST)",
      completed: false,
      statusText: "11/13 - 10:00 PM EST",
      away: {
        abbr: "UCSD", name: "UC San Diego Tritons", score: null,
        players: [

        ]
      },
      home: {
        abbr: "UtSt", name: "Utah State Aggies", score: null,
        players: [

        ]
      }
    },
      {
      id: "401917527",
      line: "East Texas A&M Lions @ Portland Pilots (11/13 - 10:00 PM EST)",
      completed: false,
      statusText: "11/13 - 10:00 PM EST",
      away: {
        abbr: "ETAM", name: "East Texas A&M Lions", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Portl", name: "Portland Pilots", score: null,
        players: [

        ]
      }
    },
      {
      id: "401917525",
      line: "UIC Flames @ Saint Mary's Gaels (11/13 - 10:00 PM EST)",
      completed: false,
      statusText: "11/13 - 10:00 PM EST",
      away: {
        abbr: "UIC", name: "UIC Flames", score: null,
        players: [

        ]
      },
      home: {
        abbr: "StMar", name: "Saint Mary's Gaels", score: null,
        players: [

        ]
      }
    }
    ]
  }
  }
};
