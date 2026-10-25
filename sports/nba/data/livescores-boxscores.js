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
    "2026-10-20": {
    games: [
      {
      id: "401909088",
      line: "Boston Celtics 113 @ Detroit Pistons 121 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BOS", name: "Boston Celtics", score: 113,
        players: [
          { name: "Paul George", min: 31, pts: 38, reb: 5, ast: 3, stl: 5, blk: 0, to: 3, tpm: 7, fgm: 12, fga: 21, ftm: 7, fta: 8, composite: 13.72, zScores: { pts: 3.382, reb: 0.28, ast: 0.345, stl: 4.814, blk: -0.635, tpm: 3.674, fgImpact: 2.308, ftImpact: 0.998, to: -1.45 } },
          { name: "Jayson Tatum", min: 38, pts: 13, reb: 4, ast: 11, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 23, ftm: 1, fta: 1, composite: -1.02, zScores: { pts: 0.394, reb: -0.027, ast: 3.754, stl: -0.734, blk: -0.635, tpm: -0.72, fgImpact: -2.726, ftImpact: 0.34, to: -0.661 } },
          { name: "Mitchell Robinson", min: 18, pts: 4, reb: 3, ast: 1, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 2, composite: -3.32, zScores: { pts: -0.682, reb: -0.335, ast: -0.508, stl: 0.375, blk: 1.127, tpm: -0.72, fgImpact: 0.85, ftImpact: -2.766, to: -0.661 } },
          { name: "Derrick White", min: 36, pts: 17, reb: 1, ast: 8, stl: 1, blk: 0, to: 4, tpm: 3, fgm: 7, fga: 13, ftm: 0, fta: 0, composite: 2.18, zScores: { pts: 0.872, reb: -0.949, ast: 2.475, stl: 0.375, blk: -0.635, tpm: 1.163, fgImpact: 1.113, ftImpact: 0, to: -2.239 } },
          { name: "Jordan Walsh", min: 13, pts: 0, reb: 6, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -0.88, zScores: { pts: -1.16, reb: 0.588, ast: -0.508, stl: 0.375, blk: 0.246, tpm: -0.72, fgImpact: -0.621, ftImpact: 0, to: 0.917 } },
          { name: "Sam Hauser", min: 18, pts: 11, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 1.1, zScores: { pts: 0.155, reb: -0.027, ast: -0.508, stl: -0.734, blk: -0.635, tpm: 1.163, fgImpact: 0.769, ftImpact: 0, to: 0.917 } },
          { name: "Luka Garza", min: 8, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.65, zScores: { pts: -0.921, reb: -0.642, ast: -0.934, stl: -0.734, blk: -0.635, tpm: -0.72, fgImpact: -0.196, ftImpact: 0, to: 0.128 } },
          { name: "Neemias Queta", min: 22, pts: 3, reb: 4, ast: 2, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -1.24, zScores: { pts: -0.802, reb: -0.027, ast: -0.081, stl: 0.375, blk: 1.127, tpm: -0.72, fgImpact: -0.196, ftImpact: -1.043, to: 0.128 } },
          { name: "Payton Pritchard", min: 28, pts: 17, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 9, ftm: 7, fta: 8, composite: 1.57, zScores: { pts: 0.872, reb: -0.027, ast: -0.508, stl: -0.734, blk: -0.635, tpm: 0.535, fgImpact: 0.148, ftImpact: 0.998, to: 0.917 } },
          { name: "Baylor Scheierman", min: 18, pts: 8, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.1, zScores: { pts: -0.204, reb: -0.335, ast: -0.934, stl: 0.375, blk: -0.635, tpm: 0.535, fgImpact: 0.965, ftImpact: 0, to: 0.128 } },
          { name: "Hugo Gonzalez", min: 10, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.16, reb: -0.335, ast: -0.934, stl: -0.734, blk: -0.635, tpm: -0.72, fgImpact: -0.31, ftImpact: 0, to: 0.917 } }
        ]
      },
      home: {
        abbr: "DET", name: "Detroit Pistons", score: 121,
        players: [
          { name: "Duncan Robinson", min: 28, pts: 21, reb: 2, ast: 2, stl: 1, blk: 0, to: 3, tpm: 5, fgm: 5, fga: 10, ftm: 6, fta: 8, composite: 1.18, zScores: { pts: 1.35, reb: -0.642, ast: -0.081, stl: 0.375, blk: -0.635, tpm: 2.419, fgImpact: 0.574, ftImpact: -0.726, to: -1.45 } },
          { name: "John Collins", min: 25, pts: 6, reb: 5, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 0.18, zScores: { pts: -0.443, reb: 0.28, ast: -0.508, stl: 0.375, blk: 0.246, tpm: -0.72, fgImpact: 0.034, ftImpact: 0, to: 0.917 } },
          { name: "Jalen Duren", min: 28, pts: 22, reb: 9, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 8, fga: 13, ftm: 6, fta: 7, composite: 5.01, zScores: { pts: 1.47, reb: 1.51, ast: -0.508, stl: 0.375, blk: 0.246, tpm: -0.72, fgImpact: 1.849, ftImpact: 0.657, to: 0.128 } },
          { name: "Cade Cunningham", min: 35, pts: 22, reb: 4, ast: 8, stl: 1, blk: 1, to: 5, tpm: 1, fgm: 8, fga: 18, ftm: 5, fta: 5, composite: 3.42, zScores: { pts: 1.47, reb: -0.027, ast: 2.475, stl: 0.375, blk: 0.246, tpm: -0.092, fgImpact: 0.297, ftImpact: 1.7, to: -3.029 } },
          { name: "Ausar Thompson", min: 33, pts: 11, reb: 11, ast: 5, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 8, ftm: 3, fta: 3, composite: 2.53, zScores: { pts: 0.155, reb: 2.125, ast: 1.197, stl: 0.375, blk: -0.635, tpm: -0.72, fgImpact: 0.459, ftImpact: 1.02, to: -1.45 } },
          { name: "Paul Reed", min: 17, pts: 6, reb: 6, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: -0.36, zScores: { pts: -0.443, reb: 0.588, ast: -0.081, stl: 0.375, blk: -0.635, tpm: -0.72, fgImpact: 0.54, ftImpact: 0.68, to: -0.661 } },
          { name: "Ronald Holland II", min: 3, pts: 0, reb: 1, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.01, zScores: { pts: -1.16, reb: -0.949, ast: -0.508, stl: -0.734, blk: 0.246, tpm: -0.72, fgImpact: -0.31, ftImpact: 0, to: 0.128 } },
          { name: "Javonte Green", min: 18, pts: 19, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 5, fgm: 5, fga: 10, ftm: 4, fta: 4, composite: 4.05, zScores: { pts: 1.111, reb: -0.027, ast: -0.934, stl: -0.734, blk: -0.635, tpm: 2.419, fgImpact: 0.574, ftImpact: 1.36, to: 0.917 } },
          { name: "Kevin Huerter", min: 18, pts: 3, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.27, zScores: { pts: -0.802, reb: -0.335, ast: -0.081, stl: -0.734, blk: -0.635, tpm: -0.092, fgImpact: -0.506, ftImpact: 0, to: 0.917 } },
          { name: "Isaiah Joe", min: 19, pts: 8, reb: 2, ast: 2, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 2, fga: 9, ftm: 2, fta: 3, composite: -1.67, zScores: { pts: -0.204, reb: -0.642, ast: -0.081, stl: 0.375, blk: 0.246, tpm: 0.535, fgImpact: -1.323, ftImpact: -0.703, to: 0.128 } },
          { name: "Daniss Jenkins", min: 15, pts: 3, reb: 2, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.63, zScores: { pts: -0.802, reb: -0.642, ast: 0.345, stl: -0.734, blk: -0.635, tpm: -0.092, fgImpact: -0.196, ftImpact: 0, to: 0.128 } }
        ]
      }
    },
      {
      id: "401909089",
      line: "Philadelphia 76ers 106 @ New York Knicks 100 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PHI", name: "Philadelphia 76ers", score: 106,
        players: [
          { name: "LeBron James", min: 34, pts: 14, reb: 9, ast: 7, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 13, ftm: 4, fta: 6, composite: 2.34, zScores: { pts: 0.513, reb: 1.51, ast: 2.049, stl: 0.375, blk: 0.246, tpm: -0.72, fgImpact: -0.358, ftImpact: -1.406, to: 0.128 } },
          { name: "Joel Embiid", min: 33, pts: 13, reb: 11, ast: 6, stl: 2, blk: 3, to: 4, tpm: 2, fgm: 4, fga: 15, ftm: 3, fta: 4, composite: 3.85, zScores: { pts: 0.394, reb: 2.125, ast: 1.623, stl: 1.485, blk: 2.007, tpm: 0.535, fgImpact: -1.714, ftImpact: -0.363, to: -2.239 } },
          { name: "Jaylen Brown", min: 35, pts: 19, reb: 8, ast: 6, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 7, fga: 14, ftm: 3, fta: 4, composite: 4.87, zScores: { pts: 1.111, reb: 1.203, ast: 1.623, stl: 0.375, blk: 0.246, tpm: 0.535, fgImpact: 0.803, ftImpact: -0.363, to: -0.661 } },
          { name: "Tyrese Maxey", min: 40, pts: 28, reb: 4, ast: 5, stl: 3, blk: 3, to: 2, tpm: 2, fgm: 9, fga: 19, ftm: 8, fta: 9, composite: 9.89, zScores: { pts: 2.187, reb: -0.027, ast: 1.197, stl: 2.595, blk: 2.007, tpm: 0.535, fgImpact: 0.722, ftImpact: 1.338, to: -0.661 } },
          { name: "VJ Edgecombe", min: 35, pts: 9, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 10, ftm: 1, fta: 2, composite: -2.68, zScores: { pts: -0.084, reb: -0.027, ast: -0.508, stl: 0.375, blk: -0.635, tpm: -0.72, fgImpact: -0.162, ftImpact: -1.043, to: 0.128 } },
          { name: "Jabari Walker", min: 3, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.16, reb: -1.257, ast: -0.508, stl: -0.734, blk: -0.635, tpm: -0.72, fgImpact: 0, ftImpact: 0, to: 0.917 } },
          { name: "Adem Bona", min: 10, pts: 0, reb: 3, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.29, zScores: { pts: -1.16, reb: -0.335, ast: -0.508, stl: -0.734, blk: 0.246, tpm: -0.72, fgImpact: 0, ftImpact: 0, to: 0.917 } },
          { name: "Kentavious Caldwell-Pope", min: 26, pts: 10, reb: 4, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: 0.87, zScores: { pts: 0.035, reb: -0.027, ast: -0.508, stl: -0.734, blk: 0.246, tpm: 0.535, fgImpact: -0.277, ftImpact: 0.68, to: 0.917 } },
          { name: "Anfernee Simons", min: 25, pts: 13, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 0.1, zScores: { pts: 0.394, reb: -0.642, ast: -0.934, stl: -0.734, blk: -0.635, tpm: 1.163, fgImpact: 0.574, ftImpact: 0, to: 0.917 } }
        ]
      },
      home: {
        abbr: "NY", name: "New York Knicks", score: 100,
        players: [
          { name: "OG Anunoby", min: 32, pts: 10, reb: 5, ast: 0, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 3, fga: 12, ftm: 3, fta: 3, composite: -1.25, zScores: { pts: 0.035, reb: 0.28, ast: -0.934, stl: 0.375, blk: 0.246, tpm: -0.092, fgImpact: -1.518, ftImpact: 1.02, to: -0.661 } },
          { name: "Karl-Anthony Towns", min: 24, pts: 19, reb: 12, ast: 1, stl: 1, blk: 2, to: 4, tpm: 3, fgm: 6, fga: 9, ftm: 4, fta: 7, composite: 2.29, zScores: { pts: 1.111, reb: 2.432, ast: -0.508, stl: 0.375, blk: 1.127, tpm: 1.163, fgImpact: 1.62, ftImpact: -2.789, to: -2.239 } },
          { name: "Josh Hart", min: 30, pts: 14, reb: 7, ast: 3, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 5, fga: 10, ftm: 2, fta: 3, composite: 2.12, zScores: { pts: 0.513, reb: 0.895, ast: 0.345, stl: 0.375, blk: 0.246, tpm: 0.535, fgImpact: 0.574, ftImpact: -0.703, to: -0.661 } },
          { name: "Mikal Bridges", min: 33, pts: 4, reb: 3, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -2.83, zScores: { pts: -0.682, reb: -0.335, ast: -0.508, stl: -0.734, blk: 0.246, tpm: -0.72, fgImpact: -1.012, ftImpact: 0, to: 0.917 } },
          { name: "Jalen Brunson", min: 34, pts: 21, reb: 5, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 19, ftm: 8, fta: 8, composite: 1.09, zScores: { pts: 1.35, reb: 0.28, ast: 0.345, stl: -0.734, blk: -0.635, tpm: -0.092, fgImpact: -1.485, ftImpact: 2.721, to: -0.661 } },
          { name: "Andre Drummond", min: 24, pts: 12, reb: 14, ast: 4, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 5, fga: 13, ftm: 2, fta: 4, composite: 3.35, zScores: { pts: 0.274, reb: 3.047, ast: 0.771, stl: 0.375, blk: 1.127, tpm: -0.72, fgImpact: -0.358, ftImpact: -2.086, to: 0.917 } },
          { name: "Jordan Clarkson", min: 8, pts: 4, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.08, zScores: { pts: -0.682, reb: -0.949, ast: -0.508, stl: -0.734, blk: -0.635, tpm: -0.72, fgImpact: 0.229, ftImpact: 0, to: 0.917 } },
          { name: "Landry Shamet", min: 25, pts: 5, reb: 2, ast: 4, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 2, composite: -6.02, zScores: { pts: -0.563, reb: -0.642, ast: 0.771, stl: -0.734, blk: -0.635, tpm: -0.092, fgImpact: -0.702, ftImpact: -2.766, to: -0.661 } },
          { name: "Jose Alvarado", min: 16, pts: 8, reb: 3, ast: 3, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 1.35, zScores: { pts: -0.204, reb: -0.335, ast: 0.345, stl: 1.485, blk: -0.635, tpm: 0.535, fgImpact: 0.034, ftImpact: 0, to: 0.128 } },
          { name: "Miles McBride", min: 14, pts: 3, reb: 1, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -3.53, zScores: { pts: -0.802, reb: -0.949, ast: -0.508, stl: -0.734, blk: 0.246, tpm: -0.092, fgImpact: -0.817, ftImpact: 0, to: 0.128 } }
        ]
      }
    },
      {
      id: "401909090",
      line: "Oklahoma City Thunder 116 @ San Antonio Spurs 104 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OKC", name: "Oklahoma City Thunder", score: 116,
        players: [
          { name: "Isaiah Hartenstein", min: 17, pts: 4, reb: 3, ast: 3, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.2, zScores: { pts: -0.682, reb: -0.335, ast: 0.345, stl: 0.375, blk: 0.246, tpm: -0.72, fgImpact: 0.229, ftImpact: 0, to: -0.661 } },
          { name: "Chet Holmgren", min: 31, pts: 14, reb: 7, ast: 2, stl: 0, blk: 4, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 8, fta: 8, composite: 5.33, zScores: { pts: 0.513, reb: 0.895, ast: -0.081, stl: -0.734, blk: 2.888, tpm: -0.72, fgImpact: -0.277, ftImpact: 2.721, to: 0.128 } },
          { name: "Shai Gilgeous-Alexander", min: 36, pts: 32, reb: 6, ast: 4, stl: 3, blk: 3, to: 2, tpm: 3, fgm: 13, fga: 27, ftm: 3, fta: 4, composite: 9.95, zScores: { pts: 2.665, reb: 0.588, ast: 0.771, stl: 2.595, blk: 2.007, tpm: 1.163, fgImpact: 1.181, ftImpact: -0.363, to: -0.661 } },
          { name: "Jalen Williams", min: 30, pts: 12, reb: 7, ast: 2, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 5, fga: 16, ftm: 1, fta: 2, composite: 0.2, zScores: { pts: 0.274, reb: 0.895, ast: -0.081, stl: 0.375, blk: 0.246, tpm: -0.092, fgImpact: -1.289, ftImpact: -1.043, to: 0.917 } },
          { name: "Cason Wallace", min: 19, pts: 6, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -1.99, zScores: { pts: -0.443, reb: -0.335, ast: -0.081, stl: 0.375, blk: -0.635, tpm: -0.72, fgImpact: -0.277, ftImpact: 0, to: 0.128 } },
          { name: "Jaylin Williams", min: 17, pts: 5, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: -2.88, zScores: { pts: -0.563, reb: -0.027, ast: -0.508, stl: -0.734, blk: -0.635, tpm: -0.092, fgImpact: -1.127, ftImpact: 0.68, to: 0.128 } },
          { name: "Brooks Barnhizer", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.52, zScores: { pts: -1.16, reb: -1.257, ast: -0.934, stl: -0.734, blk: -0.635, tpm: -0.72, fgImpact: 0, ftImpact: 0, to: 0.917 } },
          { name: "Aday Mara", min: 12, pts: 7, reb: 2, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: -2.63, zScores: { pts: -0.323, reb: -0.642, ast: -0.508, stl: -0.734, blk: 0.246, tpm: -0.72, fgImpact: 0.965, ftImpact: -1.043, to: 0.128 } },
          { name: "Alex Caruso", min: 25, pts: 9, reb: 6, ast: 1, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: 1.11, zScores: { pts: -0.084, reb: 0.588, ast: -0.508, stl: 0.375, blk: -0.635, tpm: 0.535, fgImpact: 0.965, ftImpact: -1.043, to: 0.917 } },
          { name: "Kenrich Williams", min: 7, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.5, zScores: { pts: -0.802, reb: -0.642, ast: -0.934, stl: -0.734, blk: -0.635, tpm: -0.092, fgImpact: 0.425, ftImpact: 0, to: 0.917 } },
          { name: "Jared McCain", min: 22, pts: 20, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 6, fgm: 7, fga: 9, ftm: 0, fta: 0, composite: 4.99, zScores: { pts: 1.231, reb: -0.642, ast: -0.081, stl: 0.375, blk: -0.635, tpm: 3.047, fgImpact: 2.355, ftImpact: 0, to: -0.661 } },
          { name: "Ajay Mitchell", min: 23, pts: 4, reb: 5, ast: 6, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -1.75, zScores: { pts: -0.682, reb: 0.28, ast: 1.623, stl: -0.734, blk: -0.635, tpm: -0.72, fgImpact: -1.012, ftImpact: 0, to: 0.128 } },
          { name: "Bennett Stirtz", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.52, zScores: { pts: -1.16, reb: -1.257, ast: -0.934, stl: -0.734, blk: -0.635, tpm: -0.72, fgImpact: 0, ftImpact: 0, to: 0.917 } }
        ]
      },
      home: {
        abbr: "SA", name: "San Antonio Spurs", score: 104,
        players: [
          { name: "Victor Wembanyama", min: 34, pts: 12, reb: 13, ast: 3, stl: 1, blk: 6, to: 4, tpm: 0, fgm: 1, fga: 13, ftm: 10, fta: 12, composite: 2.76, zScores: { pts: 0.274, reb: 2.74, ast: 0.345, stl: 0.375, blk: 4.649, tpm: -0.72, fgImpact: -3.3, ftImpact: 0.635, to: -2.239 } },
          { name: "De'Aaron Fox", min: 32, pts: 14, reb: 7, ast: 7, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 9, ftm: 2, fta: 3, composite: 2.73, zScores: { pts: 0.513, reb: 0.895, ast: 2.049, stl: 0.375, blk: -0.635, tpm: -0.72, fgImpact: 1.62, ftImpact: -0.703, to: -0.661 } },
          { name: "Devin Vassell", min: 31, pts: 7, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: -2.04, zScores: { pts: -0.323, reb: -0.335, ast: -0.508, stl: -0.734, blk: -0.635, tpm: -0.092, fgImpact: -1.012, ftImpact: 0.68, to: 0.917 } },
          { name: "Stephon Castle", min: 28, pts: 24, reb: 7, ast: 1, stl: 0, blk: 0, to: 3, tpm: 5, fgm: 9, fga: 21, ftm: 1, fta: 1, composite: 2.14, zScores: { pts: 1.709, reb: 0.895, ast: -0.508, stl: -0.734, blk: -0.635, tpm: 2.419, fgImpact: 0.101, ftImpact: 0.34, to: -1.45 } },
          { name: "Dylan Harper", min: 32, pts: 18, reb: 7, ast: 5, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 7, fga: 17, ftm: 4, fta: 4, composite: 1.57, zScores: { pts: 0.992, reb: 0.895, ast: 1.197, stl: -0.734, blk: -0.635, tpm: -0.72, fgImpact: -0.128, ftImpact: 1.36, to: -0.661 } },
          { name: "Harrison Barnes", min: 9, pts: 3, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.23, zScores: { pts: -0.802, reb: -1.257, ast: -0.934, stl: -0.734, blk: 0.246, tpm: -0.092, fgImpact: 0.425, ftImpact: 0, to: 0.917 } },
          { name: "Keldon Johnson", min: 20, pts: 10, reb: 4, ast: 1, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 8, ftm: 1, fta: 1, composite: 0.4, zScores: { pts: 0.035, reb: -0.027, ast: -0.508, stl: 1.485, blk: -0.635, tpm: -0.092, fgImpact: 0.459, ftImpact: 0.34, to: -0.661 } },
          { name: "Julian Champagnie", min: 30, pts: 8, reb: 3, ast: 1, stl: 2, blk: 3, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 3.62, zScores: { pts: -0.204, reb: -0.335, ast: -0.508, stl: 1.485, blk: 2.007, tpm: 0.535, fgImpact: -0.277, ftImpact: 0, to: 0.917 } },
          { name: "David Jones Garcia", min: 1, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -3.91, zScores: { pts: -0.921, reb: -1.257, ast: -0.934, stl: -0.734, blk: -0.635, tpm: -0.72, fgImpact: -0.31, ftImpact: 0.68, to: 0.917 } },
          { name: "Carter Bryant", min: 6, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.03, zScores: { pts: -1.16, reb: -1.257, ast: -0.508, stl: -0.734, blk: -0.635, tpm: -0.72, fgImpact: -0.931, ftImpact: 0, to: 0.917 } },
          { name: "Maliq Brown", min: 1, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.16, reb: -1.257, ast: -0.508, stl: -0.734, blk: -0.635, tpm: -0.72, fgImpact: 0, ftImpact: 0, to: 0.917 } },
          { name: "Luke Kornet", min: 13, pts: 4, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.01, zScores: { pts: -0.682, reb: -0.949, ast: -0.934, stl: -0.734, blk: 0.246, tpm: -0.72, fgImpact: 0.85, ftImpact: 0, to: 0.917 } },
          { name: "Tarris Reed Jr.", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.52, zScores: { pts: -1.16, reb: -1.257, ast: -0.934, stl: -0.734, blk: -0.635, tpm: -0.72, fgImpact: 0, ftImpact: 0, to: 0.917 } },
          { name: "Ja'Kobi Gillespie", min: 1, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.17, zScores: { pts: -0.921, reb: -1.257, ast: -0.934, stl: -0.734, blk: -0.635, tpm: -0.72, fgImpact: 0.115, ftImpact: 0, to: 0.917 } }
        ]
      }
    }
    ]
  },
    "2026-10-21": {
    games: [
      {
      id: "401909834",
      line: "Atlanta Hawks 132 @ Orlando Magic 125 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ATL", name: "Atlanta Hawks", score: 132,
        players: [
          { name: "Onyeka Okongwu", min: 29, pts: 8, reb: 5, ast: 7, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: -0.07, zScores: { pts: -0.225, reb: 0.387, ast: 1.983, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.468, ftImpact: 0.648, to: -0.375 } },
          { name: "Jalen Johnson", min: 28, pts: 20, reb: 14, ast: 6, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 7, fga: 19, ftm: 6, fta: 7, composite: 3.35, zScores: { pts: 1.121, reb: 3.308, ast: 1.57, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -1.193, ftImpact: 0.934, to: -0.375 } },
          { name: "CJ McCollum", min: 25, pts: 19, reb: 2, ast: 3, stl: 0, blk: 0, to: 3, tpm: 4, fgm: 7, fga: 9, ftm: 1, fta: 1, composite: 2.74, zScores: { pts: 1.009, reb: -0.586, ast: 0.332, stl: -0.784, blk: -0.502, tpm: 2.196, fgImpact: 1.809, ftImpact: 0.324, to: -1.055 } },
          { name: "Nickeil Alexander-Walker", min: 30, pts: 31, reb: 4, ast: 3, stl: 1, blk: 1, to: 2, tpm: 5, fgm: 8, fga: 15, ftm: 10, fta: 13, composite: 7.1, zScores: { pts: 2.355, reb: 0.063, ast: 0.332, stl: 0.113, blk: 0.827, tpm: 2.928, fgImpact: 0.652, ftImpact: 0.209, to: -0.375 } },
          { name: "Dyson Daniels", min: 35, pts: 20, reb: 4, ast: 3, stl: 5, blk: 0, to: 2, tpm: 0, fgm: 8, fga: 13, ftm: 4, fta: 6, composite: 4.13, zScores: { pts: 1.121, reb: 0.063, ast: 0.332, stl: 3.699, blk: -0.502, tpm: -0.732, fgImpact: 1.252, ftImpact: -0.725, to: -0.375 } },
          { name: "Jock Landale", min: 19, pts: 10, reb: 2, ast: 3, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 2, fta: 2, composite: 1.77, zScores: { pts: 0, reb: -0.586, ast: 0.332, stl: -0.784, blk: 0.827, tpm: -0.732, fgImpact: 1.076, ftImpact: 0.648, to: 0.986 } },
          { name: "Luguentz Dort", min: 28, pts: 8, reb: 4, ast: 0, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: -1.27, zScores: { pts: -0.225, reb: 0.063, ast: -0.907, stl: 0.113, blk: -0.502, tpm: 0.732, fgImpact: -0.812, ftImpact: 0.648, to: -0.375 } },
          { name: "Aaron Wiggins", min: 32, pts: 16, reb: 3, ast: 0, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 9, ftm: 3, fta: 3, composite: 2.59, zScores: { pts: 0.673, reb: -0.262, ast: -0.907, stl: 1.01, blk: -0.502, tpm: 1.464, fgImpact: 0.52, ftImpact: 0.972, to: -0.375 } },
          { name: "Kingston Flemings", min: 15, pts: 0, reb: 4, ast: 3, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -3.29, zScores: { pts: -1.122, reb: 0.063, ast: 0.332, stl: -0.784, blk: 0.827, tpm: -0.732, fgImpact: -1.501, ftImpact: 0, to: -0.375 } }
        ]
      },
      home: {
        abbr: "ORL", name: "Orlando Magic", score: 125,
        players: [
          { name: "Paolo Banchero", min: 41, pts: 35, reb: 7, ast: 10, stl: 1, blk: 0, to: 6, tpm: 3, fgm: 10, fga: 12, ftm: 12, fta: 16, composite: 7.73, zScores: { pts: 2.804, reb: 1.036, ast: 3.222, stl: 0.113, blk: -0.502, tpm: 1.464, fgImpact: 2.841, ftImpact: -0.154, to: -3.096 } },
          { name: "Franz Wagner", min: 29, pts: 22, reb: 6, ast: 5, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 9, fga: 20, ftm: 2, fta: 4, composite: 0.92, zScores: { pts: 1.345, reb: 0.712, ast: 1.157, stl: 0.113, blk: -0.502, tpm: 0.732, fgImpact: -0.204, ftImpact: -1.373, to: -1.055 } },
          { name: "Wendell Carter Jr.", min: 31, pts: 22, reb: 7, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 8, fga: 10, ftm: 5, fta: 5, composite: 5.84, zScores: { pts: 1.345, reb: 1.036, ast: -0.907, stl: 0.113, blk: -0.502, tpm: 0, fgImpact: 2.153, ftImpact: 1.62, to: 0.986 } },
          { name: "Desmond Bane", min: 33, pts: 18, reb: 5, ast: 2, stl: 3, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 15, ftm: 5, fta: 7, composite: 2.01, zScores: { pts: 0.897, reb: 0.387, ast: -0.081, stl: 1.906, blk: -0.502, tpm: 1.464, fgImpact: -1.281, ftImpact: -0.401, to: -0.375 } },
          { name: "Jalen Suggs", min: 32, pts: 6, reb: 3, ast: 5, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: -0.62, zScores: { pts: -0.449, reb: -0.262, ast: 1.157, stl: 1.01, blk: -0.502, tpm: -0.732, fgImpact: -1.113, ftImpact: 0.648, to: -0.375 } },
          { name: "Jamal Cain", min: 14, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -6.56, zScores: { pts: -1.122, reb: -1.236, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.9, ftImpact: 0, to: -0.375 } },
          { name: "Tristan da Silva", min: 28, pts: 14, reb: 2, ast: 3, stl: 1, blk: 1, to: 2, tpm: 4, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: 2.87, zScores: { pts: 0.448, reb: -0.586, ast: 0.332, stl: 0.113, blk: 0.827, tpm: 2.196, fgImpact: -0.08, ftImpact: 0, to: -0.375 } },
          { name: "Nikola Vucevic", min: 5, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -1.122, reb: -0.911, ast: -0.494, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0, ftImpact: 0, to: 0.986 } },
          { name: "Goga Bitadze", min: 12, pts: 6, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 4, fta: 5, composite: -1.91, zScores: { pts: -0.449, reb: 0.712, ast: -0.494, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.256, ftImpact: 0.286, to: 0.305 } },
          { name: "Jase Richardson", min: 14, pts: 2, reb: 2, ast: 3, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -0.25, zScores: { pts: -0.898, reb: -0.586, ast: 0.332, stl: 0.113, blk: 2.156, tpm: -0.732, fgImpact: -0.256, ftImpact: 0, to: -0.375 } }
        ]
      }
    },
      {
      id: "401909835",
      line: "Milwaukee Bucks 116 @ Washington Wizards 128 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIL", name: "Milwaukee Bucks", score: 116,
        players: [
          { name: "Kyle Kuzma", min: 27, pts: 5, reb: 6, ast: 3, stl: 3, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 9, ftm: 0, fta: 0, composite: -0.58, zScores: { pts: -0.561, reb: 0.712, ast: 0.332, stl: 1.906, blk: -0.502, tpm: 0, fgImpact: -1.413, ftImpact: 0, to: -1.055 } },
          { name: "Jaime Jaquez Jr.", min: 31, pts: 22, reb: 7, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 8, fga: 12, ftm: 5, fta: 6, composite: 2.8, zScores: { pts: 1.345, reb: 1.036, ast: -0.081, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: 1.552, ftImpact: 0.61, to: -0.375 } },
          { name: "Myles Turner", min: 32, pts: 11, reb: 5, ast: 3, stl: 0, blk: 1, to: 3, tpm: 2, fgm: 4, fga: 7, ftm: 1, fta: 1, composite: 1.35, zScores: { pts: 0.112, reb: 0.387, ast: 0.332, stl: -0.784, blk: 0.827, tpm: 0.732, fgImpact: 0.476, ftImpact: 0.324, to: -1.055 } },
          { name: "Tyler Herro", min: 32, pts: 24, reb: 2, ast: 9, stl: 1, blk: 0, to: 4, tpm: 4, fgm: 9, fga: 21, ftm: 2, fta: 2, composite: 4.01, zScores: { pts: 1.57, reb: -0.586, ast: 2.809, stl: 0.113, blk: -0.502, tpm: 2.196, fgImpact: -0.505, ftImpact: 0.648, to: -1.736 } },
          { name: "Ryan Rollins", min: 24, pts: 9, reb: 6, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 14, ftm: 0, fta: 0, composite: -0.99, zScores: { pts: -0.113, reb: 0.712, ast: 0.332, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: -1.625, ftImpact: 0, to: 0.986 } },
          { name: "Ousmane Dieng", min: 21, pts: 5, reb: 4, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -1.66, zScores: { pts: -0.561, reb: 0.063, ast: 0.332, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: -0.512, ftImpact: 0, to: 0.305 } },
          { name: "Jericho Sims", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.3, zScores: { pts: -1.122, reb: -1.236, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0, ftImpact: 0, to: 0.986 } },
          { name: "Kel'el Ware", min: 14, pts: 7, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 3, composite: -3.47, zScores: { pts: -0.337, reb: -0.262, ast: -0.494, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: 0.132, ftImpact: -1.697, to: 0.305 } },
          { name: "AJ Green", min: 15, pts: 6, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.36, zScores: { pts: -0.449, reb: -1.236, ast: -0.494, stl: -0.784, blk: -0.502, tpm: 0.732, fgImpact: 0.388, ftImpact: 0, to: 0.986 } },
          { name: "Brayden Burries", min: 16, pts: 12, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 6, ftm: 4, fta: 5, composite: -0.13, zScores: { pts: 0.224, reb: 0.387, ast: -0.907, stl: -0.784, blk: -0.502, tpm: 0.732, fgImpact: 0.132, ftImpact: 0.286, to: 0.305 } },
          { name: "Kasparas Jakucionis", min: 26, pts: 15, reb: 3, ast: 3, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 4, fga: 7, ftm: 6, fta: 6, composite: 3.4, zScores: { pts: 0.56, reb: -0.262, ast: 0.332, stl: -0.784, blk: 0.827, tpm: 0, fgImpact: 0.476, ftImpact: 1.944, to: 0.305 } }
        ]
      },
      home: {
        abbr: "WSH", name: "Washington Wizards", score: 128,
        players: [
          { name: "Anthony Davis", min: 34, pts: 34, reb: 12, ast: 4, stl: 2, blk: 1, to: 3, tpm: 1, fgm: 11, fga: 20, ftm: 11, fta: 14, composite: 8.49, zScores: { pts: 2.691, reb: 2.659, ast: 0.744, stl: 1.01, blk: 0.827, tpm: 0, fgImpact: 1.084, ftImpact: 0.533, to: -1.055 } },
          { name: "Kyshawn George", min: 29, pts: 18, reb: 5, ast: 3, stl: 1, blk: 1, to: 4, tpm: 1, fgm: 8, fga: 14, ftm: 1, fta: 1, composite: 2.1, zScores: { pts: 0.897, reb: 0.387, ast: 0.332, stl: 0.113, blk: 0.827, tpm: 0, fgImpact: 0.952, ftImpact: 0.324, to: -1.736 } },
          { name: "Alex Sarr", min: 24, pts: 6, reb: 9, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -0.65, zScores: { pts: -0.449, reb: 1.685, ast: -0.081, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.768, ftImpact: 0, to: 0.986 } },
          { name: "Trae Young", min: 38, pts: 20, reb: 0, ast: 13, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 13, ftm: 12, fta: 16, composite: 2.95, zScores: { pts: 1.121, reb: -1.236, ast: 4.46, stl: 1.01, blk: -0.502, tpm: -0.732, fgImpact: -1.325, ftImpact: -0.154, to: 0.305 } },
          { name: "Bilal Coulibaly", min: 29, pts: 11, reb: 2, ast: 1, stl: 4, blk: 2, to: 0, tpm: 1, fgm: 4, fga: 6, ftm: 2, fta: 3, composite: 5.39, zScores: { pts: 0.112, reb: -0.586, ast: -0.494, stl: 2.803, blk: 2.156, tpm: 0, fgImpact: 0.776, ftImpact: -0.363, to: 0.986 } },
          { name: "Khris Middleton", min: 12, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -0.898, reb: -0.586, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0.044, ftImpact: 0, to: 0.305 } },
          { name: "Justin Champagnie", min: 21, pts: 8, reb: 8, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 1, fta: 1, composite: 1.4, zScores: { pts: -0.225, reb: 1.361, ast: -0.494, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: 0.732, ftImpact: 0.324, to: 0.986 } },
          { name: "Deandre Ayton", min: 15, pts: 11, reb: 4, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 5, fga: 6, ftm: 1, fta: 2, composite: 1.63, zScores: { pts: 0.112, reb: 0.063, ast: -0.907, stl: -0.784, blk: 2.156, tpm: -0.732, fgImpact: 1.42, ftImpact: -0.687, to: 0.986 } },
          { name: "Bub Carrington", min: 19, pts: 10, reb: 1, ast: 4, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 2.16, zScores: { pts: 0, reb: -0.911, ast: 0.744, stl: 1.01, blk: -0.502, tpm: 0.732, fgImpact: 0.132, ftImpact: 0.648, to: 0.305 } },
          { name: "Tre Johnson", min: 19, pts: 8, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: -1.65, zScores: { pts: -0.225, reb: -0.911, ast: -0.907, stl: -0.784, blk: 0.827, tpm: -0.732, fgImpact: 0.132, ftImpact: 0.648, to: 0.305 } }
        ]
      }
    },
      {
      id: "401909091",
      line: "Minnesota Timberwolves 131 @ Miami Heat 106 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIN", name: "Minnesota Timberwolves", score: 131,
        players: [
          { name: "Jaden McDaniels", min: 29, pts: 17, reb: 8, ast: 1, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 8, fga: 11, ftm: 0, fta: 0, composite: 4.53, zScores: { pts: 0.785, reb: 1.361, ast: -0.494, stl: 1.906, blk: -0.502, tpm: 0, fgImpact: 1.853, ftImpact: 0, to: -0.375 } },
          { name: "Jonathan Kuminga", min: 30, pts: 12, reb: 1, ast: 3, stl: 4, blk: 1, to: 1, tpm: 2, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 4.53, zScores: { pts: 0.224, reb: -0.911, ast: 0.332, stl: 2.803, blk: 0.827, tpm: 0.732, fgImpact: 0.22, ftImpact: 0, to: 0.305 } },
          { name: "Rudy Gobert", min: 33, pts: 5, reb: 15, ast: 1, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 2, ftm: 5, fta: 8, composite: -2.51, zScores: { pts: -0.561, reb: 3.633, ast: -0.494, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.6, ftImpact: -1.412, to: -1.055 } },
          { name: "LaMelo Ball", min: 29, pts: 21, reb: 2, ast: 6, stl: 2, blk: 0, to: 1, tpm: 5, fgm: 7, fga: 17, ftm: 2, fta: 3, composite: 5, zScores: { pts: 1.233, reb: -0.586, ast: 1.57, stl: 1.01, blk: -0.502, tpm: 2.928, fgImpact: -0.593, ftImpact: -0.363, to: 0.305 } },
          { name: "Anthony Edwards", min: 33, pts: 45, reb: 10, ast: 3, stl: 2, blk: 1, to: 4, tpm: 9, fgm: 16, fga: 29, ftm: 4, fta: 5, composite: 14.11, zScores: { pts: 3.925, reb: 2.01, ast: 0.332, stl: 1.01, blk: 0.827, tpm: 5.856, fgImpact: 1.604, ftImpact: 0.286, to: -1.736 } },
          { name: "Trey Lyles", min: 12, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -4.85, zScores: { pts: -1.01, reb: -0.911, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.3, ftImpact: -0.687, to: 0.986 } },
          { name: "Cody Williams", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.6, zScores: { pts: -1.122, reb: -1.236, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.3, ftImpact: 0, to: 0.986 } },
          { name: "Isaiah Evans", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.97, zScores: { pts: -1.122, reb: -0.911, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0, ftImpact: 0, to: 0.986 } },
          { name: "Joan Beringer", min: 14, pts: 0, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.22, zScores: { pts: -1.122, reb: 0.712, ast: -0.494, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.6, ftImpact: 0, to: 0.305 } },
          { name: "Ayo Dosunmu", min: 29, pts: 16, reb: 5, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 13, ftm: 3, fta: 3, composite: 1.35, zScores: { pts: 0.673, reb: 0.387, ast: 0.332, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: -0.036, ftImpact: 0.972, to: 0.305 } },
          { name: "Jaylen Clark", min: 3, pts: 1, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 4, composite: -6.46, zScores: { pts: -1.01, reb: -0.911, ast: -0.494, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.3, ftImpact: -2.708, to: 0.986 } },
          { name: "Terrence Shannon Jr.", min: 20, pts: 10, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 9, ftm: 2, fta: 4, composite: -3.8, zScores: { pts: 0, reb: -0.911, ast: -0.494, stl: -0.784, blk: -0.502, tpm: 0.732, fgImpact: -0.768, ftImpact: -1.373, to: 0.305 } },
          { name: "Bones Hyland", min: 4, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.86, zScores: { pts: -0.786, reb: -0.911, ast: -0.907, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: 0.044, ftImpact: 0, to: 0.986 } }
        ]
      },
      home: {
        abbr: "MIA", name: "Miami Heat", score: 106,
        players: [
          { name: "Giannis Antetokounmpo", min: 30, pts: 35, reb: 6, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 13, fga: 19, ftm: 9, fta: 14, composite: 1.38, zScores: { pts: 2.804, reb: 0.712, ast: -0.494, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: 2.673, ftImpact: -2.137, to: -1.055 } },
          { name: "Andrew Wiggins", min: 27, pts: 11, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: -2.71, zScores: { pts: 0.112, reb: -0.586, ast: -0.494, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: -0.08, ftImpact: 0, to: -0.375 } },
          { name: "Bam Adebayo", min: 31, pts: 15, reb: 7, ast: 4, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 12, ftm: 2, fta: 3, composite: 3.27, zScores: { pts: 0.56, reb: 1.036, ast: 0.744, stl: 1.906, blk: -0.502, tpm: 0, fgImpact: 0.264, ftImpact: -0.363, to: -0.375 } },
          { name: "Klay Thompson", min: 16, pts: 10, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 6, ftm: 1, fta: 1, composite: -1.56, zScores: { pts: 0, reb: -0.911, ast: -0.907, stl: -0.784, blk: -0.502, tpm: 1.464, fgImpact: 0.132, ftImpact: 0.324, to: -0.375 } },
          { name: "Davion Mitchell", min: 33, pts: 11, reb: 0, ast: 11, stl: 0, blk: 1, to: 5, tpm: 1, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 0.96, zScores: { pts: 0.112, reb: -1.236, ast: 3.634, stl: -0.784, blk: 0.827, tpm: 0, fgImpact: 0.176, ftImpact: 0.648, to: -2.416 } },
          { name: "Bobby Portis", min: 25, pts: 7, reb: 4, ast: 1, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.23, zScores: { pts: -0.337, reb: 0.063, ast: -0.494, stl: 0.113, blk: 0.827, tpm: 0, fgImpact: 0.432, ftImpact: 0, to: -0.375 } },
          { name: "Simone Fontecchio", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.97, zScores: { pts: -1.122, reb: -1.236, ast: -0.907, stl: -0.784, blk: 0.827, tpm: -0.732, fgImpact: 0, ftImpact: 0, to: 0.986 } },
          { name: "Myron Gardner", min: 3, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 4, fta: 4, composite: -1.9, zScores: { pts: -0.673, reb: -0.586, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0, ftImpact: 1.296, to: 0.986 } },
          { name: "Nikola Jovic", min: 24, pts: 4, reb: 4, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -2.87, zScores: { pts: -0.673, reb: 0.063, ast: -0.081, stl: -0.784, blk: 0.827, tpm: -0.732, fgImpact: -1.113, ftImpact: 0, to: -0.375 } },
          { name: "Nick Richards", min: 3, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.84, zScores: { pts: -0.673, reb: -0.911, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0.688, ftImpact: 0, to: 0.986 } },
          { name: "Tim Hardaway Jr.", min: 18, pts: 3, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -2.08, zScores: { pts: -0.786, reb: 0.063, ast: -0.494, stl: 0.113, blk: -0.502, tpm: 0, fgImpact: -1.457, ftImpact: 0, to: 0.986 } },
          { name: "Pelle Larsson", min: 24, pts: 2, reb: 3, ast: 4, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: 0.83, zScores: { pts: -0.898, reb: -0.262, ast: 0.744, stl: 0.113, blk: 0.827, tpm: -0.732, fgImpact: -0.6, ftImpact: 0.648, to: 0.986 } },
          { name: "Ryan Conwell", min: 3, pts: 0, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.77, zScores: { pts: -1.122, reb: -1.236, ast: -0.081, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.3, ftImpact: 0, to: 0.986 } }
        ]
      }
    },
      {
      id: "401909836",
      line: "Charlotte Hornets 110 @ Brooklyn Nets 103 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHA", name: "Charlotte Hornets", score: 110,
        players: [
          { name: "Moussa Diabate", min: 34, pts: 17, reb: 8, ast: 3, stl: 5, blk: 0, to: 4, tpm: 0, fgm: 7, fga: 11, ftm: 3, fta: 3, composite: 5.39, zScores: { pts: 0.785, reb: 1.361, ast: 0.332, stl: 3.699, blk: -0.502, tpm: -0.732, fgImpact: 1.208, ftImpact: 0.972, to: -1.736 } },
          { name: "Brandon Miller", min: 36, pts: 18, reb: 3, ast: 1, stl: 0, blk: 1, to: 3, tpm: 3, fgm: 7, fga: 21, ftm: 1, fta: 2, composite: -1.89, zScores: { pts: 0.897, reb: -0.262, ast: -0.494, stl: -0.784, blk: 0.827, tpm: 1.464, fgImpact: -1.793, ftImpact: -0.687, to: -1.055 } },
          { name: "Naz Reid", min: 33, pts: 20, reb: 11, ast: 7, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 8, fga: 19, ftm: 0, fta: 1, composite: 5.09, zScores: { pts: 1.121, reb: 2.334, ast: 1.983, stl: -0.784, blk: -0.502, tpm: 2.196, fgImpact: -0.549, ftImpact: -1.011, to: 0.305 } },
          { name: "Dennis Schroder", min: 35, pts: 19, reb: 4, ast: 6, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 7, fga: 13, ftm: 5, fta: 5, composite: 1.8, zScores: { pts: 1.009, reb: 0.063, ast: 1.57, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0.608, ftImpact: 1.62, to: -1.055 } },
          { name: "Sion James", min: 27, pts: 3, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -3.5, zScores: { pts: -0.786, reb: -0.262, ast: -0.907, stl: 0.113, blk: -0.502, tpm: 0, fgImpact: -1.457, ftImpact: 0, to: 0.305 } },
          { name: "Royce O'Neale", min: 17, pts: 8, reb: 4, ast: 0, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 1.04, zScores: { pts: -0.225, reb: 0.063, ast: -0.907, stl: 0.113, blk: 0.827, tpm: 0.732, fgImpact: 0.132, ftImpact: 0, to: 0.305 } },
          { name: "Ryan Kalkbrenner", min: 14, pts: 4, reb: 5, ast: 3, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 1.38, zScores: { pts: -0.673, reb: 0.387, ast: 0.332, stl: -0.784, blk: 2.156, tpm: -0.732, fgImpact: 0.388, ftImpact: 0, to: 0.305 } },
          { name: "Grayson Allen", min: 29, pts: 21, reb: 3, ast: 4, stl: 0, blk: 0, to: 4, tpm: 5, fgm: 6, fga: 9, ftm: 4, fta: 4, composite: 4.08, zScores: { pts: 1.233, reb: -0.262, ast: 0.744, stl: -0.784, blk: -0.502, tpm: 2.928, fgImpact: 1.164, ftImpact: 1.296, to: -1.736 } },
          { name: "Christian Anderson", min: 13, pts: 0, reb: 2, ast: 2, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.29, zScores: { pts: -1.122, reb: -0.586, ast: -0.081, stl: 1.01, blk: -0.502, tpm: -0.732, fgImpact: -0.9, ftImpact: 0, to: -0.375 } },
          { name: "Liam McNeeley", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.122, reb: -0.911, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.3, ftImpact: 0, to: 0.986 } }
        ]
      },
      home: {
        abbr: "BKN", name: "Brooklyn Nets", score: 103,
        players: [
          { name: "Julius Randle", min: 38, pts: 33, reb: 8, ast: 7, stl: 0, blk: 1, to: 4, tpm: 3, fgm: 11, fga: 18, ftm: 8, fta: 11, composite: 6.94, zScores: { pts: 2.579, reb: 1.361, ast: 1.983, stl: -0.784, blk: 0.827, tpm: 1.464, fgImpact: 1.684, ftImpact: -0.44, to: -1.736 } },
          { name: "Michael Porter Jr.", min: 34, pts: 26, reb: 7, ast: 1, stl: 3, blk: 0, to: 4, tpm: 5, fgm: 10, fga: 21, ftm: 1, fta: 2, composite: 4.39, zScores: { pts: 1.794, reb: 1.036, ast: -0.494, stl: 1.906, blk: -0.502, tpm: 2.928, fgImpact: 0.14, ftImpact: -0.687, to: -1.736 } },
          { name: "Day'Ron Sharpe", min: 30, pts: 8, reb: 8, ast: 3, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 1, composite: 3.13, zScores: { pts: -0.225, reb: 1.361, ast: 0.332, stl: -0.784, blk: 3.486, tpm: -0.732, fgImpact: 1.076, ftImpact: -1.011, to: -0.375 } },
          { name: "Keon Ellis", min: 34, pts: 7, reb: 2, ast: 4, stl: 2, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 1.79, zScores: { pts: -0.337, reb: -0.586, ast: 0.744, stl: 1.01, blk: 0.827, tpm: 0, fgImpact: -0.168, ftImpact: 0, to: 0.305 } },
          { name: "Egor Demin", min: 27, pts: 4, reb: 4, ast: 2, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 10, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -0.673, reb: 0.063, ast: -0.081, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: -1.713, ftImpact: 0, to: -1.055 } },
          { name: "Noah Clowney", min: 22, pts: 9, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 3, ftm: 2, fta: 2, composite: 1.41, zScores: { pts: -0.113, reb: -0.262, ast: -0.494, stl: 0.113, blk: -0.502, tpm: 0, fgImpact: 1.032, ftImpact: 0.648, to: 0.986 } },
          { name: "Chaney Johnson", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -6.31, zScores: { pts: -1.122, reb: -0.911, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.3, ftImpact: 0, to: -1.055 } },
          { name: "Moritz Wagner", min: 16, pts: 7, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 4, fta: 4, composite: -2.69, zScores: { pts: -0.337, reb: -1.236, ast: -0.494, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: -0.256, ftImpact: 1.296, to: -0.375 } },
          { name: "Mikel Brown Jr.", min: 20, pts: 6, reb: 3, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 8, ftm: 1, fta: 1, composite: -2.15, zScores: { pts: -0.449, reb: -0.262, ast: 0.332, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: -1.113, ftImpact: 0.324, to: 0.305 } },
          { name: "Nolan Traore", min: 16, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 4, ftm: 3, fta: 4, composite: -5.91, zScores: { pts: -0.786, reb: -0.586, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -1.201, ftImpact: -0.038, to: -0.375 } }
        ]
      }
    },
      {
      id: "401909837",
      line: "Chicago Bulls 92 @ Toronto Raptors 135 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHI", name: "Chicago Bulls", score: 92,
        players: [
          { name: "Jalen Smith", min: 19, pts: 15, reb: 8, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 10, ftm: 5, fta: 6, composite: 2.55, zScores: { pts: 0.56, reb: 1.361, ast: -0.494, stl: -0.784, blk: 0.827, tpm: -0.732, fgImpact: 0.22, ftImpact: 0.61, to: 0.986 } },
          { name: "Matas Buzelis", min: 25, pts: 17, reb: 6, ast: 0, stl: 0, blk: 2, to: 3, tpm: 0, fgm: 2, fga: 8, ftm: 13, fta: 16, composite: 0.24, zScores: { pts: 0.785, reb: 0.712, ast: -0.907, stl: -0.784, blk: 2.156, tpm: -0.732, fgImpact: -1.113, ftImpact: 1.181, to: -1.055 } },
          { name: "Caleb Wilson", min: 32, pts: 16, reb: 4, ast: 0, stl: 3, blk: 1, to: 9, tpm: 1, fgm: 7, fga: 21, ftm: 1, fta: 2, composite: -5.06, zScores: { pts: 0.673, reb: 0.063, ast: -0.907, stl: 1.906, blk: 0.827, tpm: 0, fgImpact: -1.793, ftImpact: -0.687, to: -5.137 } },
          { name: "Norman Powell", min: 22, pts: 15, reb: 5, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 9, ftm: 7, fta: 11, composite: -1.44, zScores: { pts: 0.56, reb: 0.387, ast: -0.494, stl: 0.113, blk: -0.502, tpm: 0.732, fgImpact: -0.768, ftImpact: -1.774, to: 0.305 } },
          { name: "Josh Giddey", min: 24, pts: 2, reb: 7, ast: 6, stl: 0, blk: 0, to: 5, tpm: 0, fgm: 1, fga: 10, ftm: 0, fta: 2, composite: -7.1, zScores: { pts: -0.898, reb: 1.036, ast: 1.57, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -2.357, ftImpact: -2.021, to: -2.416 } },
          { name: "Zach Collins", min: 9, pts: 0, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.67, zScores: { pts: -1.122, reb: 0.387, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0, ftImpact: 0, to: 0.986 } },
          { name: "Isaac Okoro", min: 18, pts: 4, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 4, fta: 4, composite: -2.44, zScores: { pts: -0.673, reb: -1.236, ast: -0.494, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.3, ftImpact: 1.296, to: 0.986 } },
          { name: "Leonard Miller", min: 26, pts: 4, reb: 6, ast: 1, stl: 1, blk: 0, to: 5, tpm: 0, fgm: 2, fga: 9, ftm: 0, fta: 0, composite: -5.41, zScores: { pts: -0.673, reb: 0.712, ast: -0.494, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: -1.413, ftImpact: 0, to: -2.416 } },
          { name: "Tobe Awaka", min: 14, pts: 2, reb: 7, ast: 2, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: 1.59, zScores: { pts: -0.898, reb: 1.036, ast: -0.081, stl: 0.113, blk: 0.827, tpm: -0.732, fgImpact: 0.344, ftImpact: 0, to: 0.986 } },
          { name: "Noa Essengue", min: 10, pts: 1, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.58, zScores: { pts: -1.01, reb: -0.262, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0, ftImpact: -0.687, to: 0.305 } },
          { name: "Buddy Hield", min: 14, pts: 0, reb: 2, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -5.38, zScores: { pts: -1.122, reb: -0.586, ast: -0.081, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -1.201, ftImpact: 0, to: -0.375 } },
          { name: "Tre Jones", min: 13, pts: 13, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 8, ftm: 3, fta: 4, composite: -1.08, zScores: { pts: 0.336, reb: -0.262, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0.82, ftImpact: -0.038, to: 0.986 } },
          { name: "Jaylin Sellers", min: 14, pts: 3, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.31, zScores: { pts: -0.786, reb: -0.911, ast: -0.081, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: -0.556, ftImpact: 0, to: 0.305 } }
        ]
      },
      home: {
        abbr: "TOR", name: "Toronto Raptors", score: 135,
        players: [
          { name: "Kawhi Leonard", min: 24, pts: 23, reb: 6, ast: 2, stl: 4, blk: 1, to: 0, tpm: 2, fgm: 5, fga: 17, ftm: 11, fta: 11, composite: 9.12, zScores: { pts: 1.458, reb: 0.712, ast: -0.081, stl: 2.803, blk: 0.827, tpm: 0.732, fgImpact: -1.881, ftImpact: 3.565, to: 0.986 } },
          { name: "RJ Barrett", min: 26, pts: 20, reb: 4, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 8, fga: 14, ftm: 4, fta: 7, composite: -0.98, zScores: { pts: 1.121, reb: 0.063, ast: 0.332, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0.952, ftImpact: -1.736, to: 0.305 } },
          { name: "Scottie Barnes", min: 26, pts: 23, reb: 6, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 8, fga: 19, ftm: 6, fta: 6, composite: 3.74, zScores: { pts: 1.458, reb: 0.712, ast: 1.157, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: -0.549, ftImpact: 1.944, to: 0.305 } },
          { name: "Jakob Poeltl", min: 22, pts: 3, reb: 6, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 3, composite: -1.14, zScores: { pts: -0.786, reb: 0.712, ast: -0.907, stl: 0.113, blk: 0.827, tpm: -0.732, fgImpact: 0.344, ftImpact: -1.697, to: 0.986 } },
          { name: "Immanuel Quickley", min: 28, pts: 23, reb: 4, ast: 7, stl: 2, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 13, ftm: 7, fta: 8, composite: 8.41, zScores: { pts: 1.458, reb: 0.063, ast: 1.983, stl: 1.01, blk: -0.502, tpm: 2.196, fgImpact: -0.036, ftImpact: 1.258, to: 0.986 } },
          { name: "Kyle Anderson", min: 5, pts: 0, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.55, zScores: { pts: -1.122, reb: -0.911, ast: -0.081, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: -0.3, ftImpact: 0, to: 0.986 } },
          { name: "Trayce Jackson-Davis", min: 10, pts: 9, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 1, fta: 1, composite: -1.56, zScores: { pts: -0.113, reb: -0.911, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 1.076, ftImpact: 0.324, to: 0.986 } },
          { name: "Jamison Battle", min: 11, pts: 8, reb: 5, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 1.32, zScores: { pts: -0.225, reb: 0.387, ast: -0.907, stl: 0.113, blk: -0.502, tpm: 0.732, fgImpact: 0.732, ftImpact: 0, to: 0.986 } },
          { name: "Collin Murray-Boyles", min: 20, pts: 6, reb: 8, ast: 3, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: 2.27, zScores: { pts: -0.449, reb: 1.361, ast: 0.332, stl: 0.113, blk: 0.827, tpm: -0.732, fgImpact: -0.812, ftImpact: 0.648, to: 0.986 } },
          { name: "Allen Graves", min: 19, pts: 5, reb: 5, ast: 0, stl: 1, blk: 3, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: 1.87, zScores: { pts: -0.561, reb: 0.387, ast: -0.907, stl: 0.113, blk: 3.486, tpm: -0.732, fgImpact: -0.212, ftImpact: -0.687, to: 0.986 } },
          { name: "Jamal Shead", min: 16, pts: 2, reb: 2, ast: 5, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -3.14, zScores: { pts: -0.898, reb: -0.586, ast: 1.157, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: -0.6, ftImpact: 0.648, to: -1.736 } },
          { name: "Jaden Bradley", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.28, zScores: { pts: -1.122, reb: -1.236, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.3, ftImpact: 0, to: 0.305 } },
          { name: "Ja'Kobe Walter", min: 23, pts: 10, reb: 3, ast: 4, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: 1.68, zScores: { pts: 0, reb: -0.262, ast: 0.744, stl: 1.906, blk: -0.502, tpm: 0, fgImpact: 0.176, ftImpact: -0.687, to: 0.305 } },
          { name: "Alijah Martin", min: 5, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -5.66, zScores: { pts: -0.786, reb: -1.236, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0.344, ftImpact: -0.687, to: -0.375 } }
        ]
      }
    },
      {
      id: "401909838",
      line: "Utah Jazz 103 @ Memphis Grizzlies 123 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UTAH", name: "Utah Jazz", score: 103,
        players: [
          { name: "Lauri Markkanen", min: 36, pts: 18, reb: 9, ast: 3, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 4, fga: 13, ftm: 9, fta: 10, composite: 2.48, zScores: { pts: 0.897, reb: 1.685, ast: 0.332, stl: -0.784, blk: 0.827, tpm: 0, fgImpact: -1.325, ftImpact: 1.906, to: -1.055 } },
          { name: "Jaren Jackson Jr.", min: 28, pts: 15, reb: 5, ast: 2, stl: 1, blk: 2, to: 5, tpm: 2, fgm: 6, fga: 10, ftm: 1, fta: 2, composite: 1.63, zScores: { pts: 0.56, reb: 0.387, ast: -0.081, stl: 0.113, blk: 2.156, tpm: 0.732, fgImpact: 0.864, ftImpact: -0.687, to: -2.416 } },
          { name: "Jaxson Hayes", min: 26, pts: 5, reb: 5, ast: 3, stl: 2, blk: 6, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 4, composite: 5.89, zScores: { pts: -0.561, reb: 0.387, ast: 0.332, stl: 1.01, blk: 7.474, tpm: -0.732, fgImpact: 0.388, ftImpact: -2.708, to: 0.305 } },
          { name: "Keyonte George", min: 29, pts: 22, reb: 3, ast: 5, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 7, fga: 12, ftm: 4, fta: 7, composite: 2.84, zScores: { pts: 1.345, reb: -0.262, ast: 1.157, stl: 0.113, blk: -0.502, tpm: 2.196, fgImpact: 0.908, ftImpact: -1.736, to: -0.375 } },
          { name: "Darryn Peterson", min: 31, pts: 9, reb: 4, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 3, fta: 4, composite: -1.64, zScores: { pts: -0.113, reb: 0.063, ast: 0.332, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.168, ftImpact: -0.038, to: 0.305 } },
          { name: "Kyle Filipowski", min: 9, pts: 3, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -2.7, zScores: { pts: -0.786, reb: -1.236, ast: -0.907, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: 0.044, ftImpact: 0.324, to: 0.986 } },
          { name: "Brice Sensabaugh", min: 14, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.93, zScores: { pts: -0.898, reb: -0.586, ast: -0.494, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.556, ftImpact: 0, to: -0.375 } },
          { name: "Svi Mykhailiuk", min: 19, pts: 10, reb: 1, ast: 2, stl: 3, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 3.2, zScores: { pts: 0, reb: -0.911, ast: -0.081, stl: 1.906, blk: -0.502, tpm: 0.732, fgImpact: 1.076, ftImpact: 0, to: 0.986 } },
          { name: "Josh Okogie", min: 8, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.122, reb: -0.911, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.3, ftImpact: 0, to: 0.986 } },
          { name: "Isaiah Collier", min: 16, pts: 7, reb: 3, ast: 3, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 7, ftm: 3, fta: 5, composite: -4.31, zScores: { pts: -0.337, reb: -0.262, ast: 0.332, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: -0.812, ftImpact: -1.049, to: -1.055 } },
          { name: "Ace Bailey", min: 24, pts: 12, reb: 5, ast: 3, stl: 0, blk: 3, to: 1, tpm: 2, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: 4.6, zScores: { pts: 0.224, reb: 0.387, ast: 0.332, stl: -0.784, blk: 3.486, tpm: 0.732, fgImpact: -0.08, ftImpact: 0, to: 0.305 } }
        ]
      },
      home: {
        abbr: "MEM", name: "Memphis Grizzlies", score: 123,
        players: [
          { name: "Cedric Coward", min: 28, pts: 7, reb: 7, ast: 2, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 1.78, zScores: { pts: -0.337, reb: 1.036, ast: -0.081, stl: -0.784, blk: 0.827, tpm: 0, fgImpact: 0.132, ftImpact: 0, to: 0.986 } },
          { name: "Cameron Boozer", min: 33, pts: 7, reb: 11, ast: 5, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 15, ftm: 3, fta: 4, composite: -1.81, zScores: { pts: -0.337, reb: 2.334, ast: 1.157, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -3.214, ftImpact: -0.038, to: 0.305 } },
          { name: "Jaylen Wells", min: 28, pts: 12, reb: 5, ast: 0, stl: 4, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 10, ftm: 1, fta: 3, composite: 1.51, zScores: { pts: 0.224, reb: 0.387, ast: -0.907, stl: 2.803, blk: -0.502, tpm: 0, fgImpact: 0.22, ftImpact: -1.697, to: 0.986 } },
          { name: "Zach Edey", min: 21, pts: 6, reb: 9, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 2.39, zScores: { pts: -0.449, reb: 1.685, ast: -0.907, stl: -0.784, blk: 2.156, tpm: -0.732, fgImpact: 0.432, ftImpact: 0, to: 0.986 } },
          { name: "Ty Jerome", min: 32, pts: 45, reb: 7, ast: 6, stl: 0, blk: 1, to: 1, tpm: 5, fgm: 17, fga: 25, ftm: 6, fta: 7, composite: 14.19, zScores: { pts: 3.925, reb: 1.036, ast: 1.57, stl: -0.784, blk: 0.827, tpm: 2.928, fgImpact: 3.449, ftImpact: 0.934, to: 0.305 } },
          { name: "Jerami Grant", min: 24, pts: 15, reb: 2, ast: 3, stl: 0, blk: 1, to: 3, tpm: 2, fgm: 4, fga: 9, ftm: 5, fta: 6, composite: 0.51, zScores: { pts: 0.56, reb: -0.586, ast: 0.332, stl: -0.784, blk: 0.827, tpm: 0.732, fgImpact: -0.124, ftImpact: 0.61, to: -1.055 } },
          { name: "GG Jackson", min: 19, pts: 12, reb: 8, ast: 0, stl: 0, blk: 2, to: 4, tpm: 2, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 1.87, zScores: { pts: 0.224, reb: 1.361, ast: -0.907, stl: -0.784, blk: 2.156, tpm: 0.732, fgImpact: 0.176, ftImpact: 0.648, to: -1.736 } },
          { name: "Quinten Post", min: 19, pts: 7, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -2.4, zScores: { pts: -0.337, reb: -0.911, ast: -0.907, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: 0.732, ftImpact: 0, to: 0.305 } },
          { name: "Scotty Pippen Jr.", min: 20, pts: 9, reb: 2, ast: 5, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 7, ftm: 5, fta: 6, composite: 0.55, zScores: { pts: -0.113, reb: -0.586, ast: 1.157, stl: 1.906, blk: -0.502, tpm: -0.732, fgImpact: -0.812, ftImpact: 0.61, to: -0.375 } },
          { name: "Cam Spencer", min: 16, pts: 3, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -1.77, zScores: { pts: -0.786, reb: -0.262, ast: -0.081, stl: 0.113, blk: -0.502, tpm: 0, fgImpact: -0.556, ftImpact: 0, to: 0.305 } }
        ]
      }
    },
      {
      id: "401909839",
      line: "Indiana Pacers 123 @ New Orleans Pelicans 120 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "IND", name: "Indiana Pacers", score: 123,
        players: [
          { name: "Pascal Siakam", min: 35, pts: 30, reb: 8, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 13, fga: 23, ftm: 3, fta: 8, composite: -0.26, zScores: { pts: 2.243, reb: 1.361, ast: -0.494, stl: 0.113, blk: -0.502, tpm: 0, fgImpact: 1.472, ftImpact: -4.081, to: -0.375 } },
          { name: "Ivica Zubac", min: 34, pts: 16, reb: 15, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 7, fga: 12, ftm: 2, fta: 4, composite: 3.88, zScores: { pts: 0.673, reb: 3.633, ast: -0.907, stl: -0.784, blk: 2.156, tpm: -0.732, fgImpact: 0.908, ftImpact: -1.373, to: 0.305 } },
          { name: "Kelly Oubre Jr.", min: 28, pts: 4, reb: 2, ast: 3, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.63, zScores: { pts: -0.673, reb: -0.586, ast: 0.332, stl: 0.113, blk: 0.827, tpm: -0.732, fgImpact: -0.212, ftImpact: 0, to: 0.305 } },
          { name: "Andrew Nembhard", min: 34, pts: 18, reb: 2, ast: 9, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 10, ftm: 6, fta: 7, composite: 3.42, zScores: { pts: 0.897, reb: -0.586, ast: 2.809, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: 0.864, ftImpact: 0.934, to: -0.375 } },
          { name: "Tyrese Haliburton", min: 34, pts: 23, reb: 2, ast: 12, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 8, fga: 15, ftm: 5, fta: 5, composite: 6.48, zScores: { pts: 1.458, reb: -0.586, ast: 4.047, stl: 0.113, blk: -0.502, tpm: 0.732, fgImpact: 0.652, ftImpact: 1.62, to: -1.055 } },
          { name: "Larry Nance Jr.", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.6, zScores: { pts: -1.122, reb: -1.236, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.3, ftImpact: 0, to: 0.986 } },
          { name: "Obi Toppin", min: 25, pts: 20, reb: 3, ast: 1, stl: 2, blk: 0, to: 0, tpm: 4, fgm: 7, fga: 12, ftm: 2, fta: 3, composite: 4.6, zScores: { pts: 1.121, reb: -0.262, ast: -0.494, stl: 1.01, blk: -0.502, tpm: 2.196, fgImpact: 0.908, ftImpact: -0.363, to: 0.986 } },
          { name: "Jarace Walker", min: 19, pts: 3, reb: 6, ast: 2, stl: 0, blk: 1, to: 4, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -3, zScores: { pts: -0.786, reb: 0.712, ast: -0.081, stl: -0.784, blk: 0.827, tpm: 0, fgImpact: -1.157, ftImpact: 0, to: -1.736 } },
          { name: "Ben Sheppard", min: 12, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.16, zScores: { pts: -0.786, reb: -0.911, ast: -0.907, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: -0.256, ftImpact: 0, to: 0.986 } },
          { name: "Quenton Jackson", min: 16, pts: 6, reb: 4, ast: 1, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 1.81, zScores: { pts: -0.449, reb: 0.063, ast: -0.494, stl: 1.906, blk: -0.502, tpm: -0.732, fgImpact: 0.388, ftImpact: 0.648, to: 0.986 } }
        ]
      },
      home: {
        abbr: "NO", name: "New Orleans Pelicans", score: 120,
        players: [
          { name: "Zion Williamson", min: 32, pts: 22, reb: 3, ast: 3, stl: 3, blk: 0, to: 3, tpm: 2, fgm: 7, fga: 16, ftm: 6, fta: 6, composite: 4.15, zScores: { pts: 1.345, reb: -0.262, ast: 0.332, stl: 1.906, blk: -0.502, tpm: 0.732, fgImpact: -0.292, ftImpact: 1.944, to: -1.055 } },
          { name: "Trey Murphy III", min: 32, pts: 11, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 11, ftm: 1, fta: 1, composite: -0.29, zScores: { pts: 0.112, reb: 0.063, ast: -0.494, stl: -0.784, blk: -0.502, tpm: 0.732, fgImpact: -0.724, ftImpact: 0.324, to: 0.986 } },
          { name: "Yves Missi", min: 30, pts: 13, reb: 14, ast: 5, stl: 2, blk: 3, to: 1, tpm: 0, fgm: 5, fga: 6, ftm: 3, fta: 4, composite: 10.25, zScores: { pts: 0.336, reb: 3.308, ast: 1.157, stl: 1.01, blk: 3.486, tpm: -0.732, fgImpact: 1.42, ftImpact: -0.038, to: 0.305 } },
          { name: "Dejounte Murray", min: 34, pts: 23, reb: 3, ast: 7, stl: 2, blk: 3, to: 4, tpm: 2, fgm: 9, fga: 18, ftm: 3, fta: 3, composite: 8.04, zScores: { pts: 1.458, reb: -0.262, ast: 1.983, stl: 1.01, blk: 3.486, tpm: 0.732, fgImpact: 0.396, ftImpact: 0.972, to: -1.736 } },
          { name: "Jeremiah Fears", min: 21, pts: 8, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 10, ftm: 3, fta: 4, composite: -3.71, zScores: { pts: -0.225, reb: -0.262, ast: -0.494, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: -1.713, ftImpact: -0.038, to: 0.305 } },
          { name: "Herbert Jones", min: 17, pts: 5, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.05, zScores: { pts: -0.561, reb: -0.586, ast: -0.907, stl: 0.113, blk: -0.502, tpm: 0, fgImpact: 0.088, ftImpact: 0, to: 0.305 } },
          { name: "Derik Queen", min: 18, pts: 10, reb: 10, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 6, fta: 6, composite: 3.63, zScores: { pts: 0, reb: 2.01, ast: -0.494, stl: 1.01, blk: -0.502, tpm: -0.732, fgImpact: 0.088, ftImpact: 1.944, to: 0.305 } },
          { name: "Jordan Poole", min: 15, pts: 4, reb: 2, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 4, fta: 4, composite: -2.55, zScores: { pts: -0.673, reb: -0.586, ast: 0.332, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -1.201, ftImpact: 1.296, to: 0.305 } },
          { name: "Saddiq Bey", min: 24, pts: 13, reb: 5, ast: 0, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 9, ftm: 3, fta: 3, composite: -0.26, zScores: { pts: 0.336, reb: 0.387, ast: -0.907, stl: -0.784, blk: -0.502, tpm: 0.732, fgImpact: -0.124, ftImpact: 0.972, to: -0.375 } },
          { name: "Bennedict Mathurin", min: 18, pts: 11, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 5, fta: 6, composite: 0.07, zScores: { pts: 0.112, reb: -0.262, ast: -0.081, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: -0.168, ftImpact: 0.61, to: 0.986 } }
        ]
      }
    },
      {
      id: "401909840",
      line: "Dallas Mavericks 110 @ Houston Rockets 128 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DAL", name: "Dallas Mavericks", score: 110,
        players: [
          { name: "Daniel Gafford", min: 22, pts: 2, reb: 3, ast: 1, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 4, composite: -1.48, zScores: { pts: -0.898, reb: -0.262, ast: -0.494, stl: 0.113, blk: 2.156, tpm: -0.732, fgImpact: -0.3, ftImpact: -1.373, to: 0.305 } },
          { name: "P.J. Washington", min: 31, pts: 10, reb: 4, ast: 2, stl: 0, blk: 1, to: 4, tpm: 2, fgm: 4, fga: 9, ftm: 0, fta: 2, composite: -3.12, zScores: { pts: 0, reb: 0.063, ast: -0.081, stl: -0.784, blk: 0.827, tpm: 0.732, fgImpact: -0.124, ftImpact: -2.021, to: -1.736 } },
          { name: "Cooper Flagg", min: 33, pts: 32, reb: 5, ast: 2, stl: 3, blk: 1, to: 4, tpm: 1, fgm: 10, fga: 17, ftm: 11, fta: 13, composite: 6.65, zScores: { pts: 2.467, reb: 0.387, ast: -0.081, stl: 1.906, blk: 0.827, tpm: 0, fgImpact: 1.34, ftImpact: 1.543, to: -1.736 } },
          { name: "Kyrie Irving", min: 24, pts: 15, reb: 4, ast: 2, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 6, fga: 9, ftm: 2, fta: 2, composite: 0.23, zScores: { pts: 0.56, reb: 0.063, ast: -0.081, stl: 0.113, blk: -0.502, tpm: 0, fgImpact: 1.164, ftImpact: 0.648, to: -1.736 } },
          { name: "Max Christie", min: 29, pts: 5, reb: 3, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -3.68, zScores: { pts: -0.561, reb: -0.262, ast: -0.081, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: -1.113, ftImpact: 0, to: -0.375 } },
          { name: "Naji Marshall", min: 29, pts: 16, reb: 2, ast: 6, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 13, ftm: 0, fta: 0, composite: 2.23, zScores: { pts: 0.673, reb: -0.586, ast: 1.57, stl: 0.113, blk: -0.502, tpm: 0.732, fgImpact: 0.608, ftImpact: 0, to: -0.375 } },
          { name: "Morez Johnson Jr.", min: 14, pts: 6, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 2, composite: -3.83, zScores: { pts: -0.449, reb: -0.262, ast: -0.494, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0.432, ftImpact: -2.021, to: 0.986 } },
          { name: "Zaccharie Risacher", min: 27, pts: 4, reb: 6, ast: 2, stl: 5, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: 0.55, zScores: { pts: -0.673, reb: 0.712, ast: -0.081, stl: 3.699, blk: -0.502, tpm: -0.732, fgImpact: -0.812, ftImpact: 0, to: -1.055 } },
          { name: "Sergio de Larrea", min: 7, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.54, zScores: { pts: -1.122, reb: -0.586, ast: -0.494, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.3, ftImpact: 0, to: 0.986 } },
          { name: "Moussa Cisse", min: 3, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -4.3, zScores: { pts: -0.786, reb: -1.236, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0.344, ftImpact: -0.687, to: 0.986 } },
          { name: "Marcus Sasser", min: 24, pts: 17, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 8, ftm: 1, fta: 1, composite: 3.28, zScores: { pts: 0.785, reb: -0.911, ast: -0.494, stl: 0.113, blk: -0.502, tpm: 2.196, fgImpact: 1.464, ftImpact: 0.324, to: 0.305 } }
        ]
      },
      home: {
        abbr: "HOU", name: "Houston Rockets", score: 128,
        players: [
          { name: "Kevin Durant", min: 37, pts: 30, reb: 6, ast: 3, stl: 1, blk: 1, to: 4, tpm: 2, fgm: 10, fga: 16, ftm: 8, fta: 11, composite: 4.42, zScores: { pts: 2.243, reb: 0.712, ast: 0.332, stl: 0.113, blk: 0.827, tpm: 0.732, fgImpact: 1.64, ftImpact: -0.44, to: -1.736 } },
          { name: "Jabari Smith Jr.", min: 36, pts: 30, reb: 5, ast: 1, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 11, fga: 17, ftm: 4, fta: 5, composite: 7.41, zScores: { pts: 2.243, reb: 0.387, ast: -0.494, stl: 1.01, blk: -0.502, tpm: 2.196, fgImpact: 1.984, ftImpact: 0.286, to: 0.305 } },
          { name: "Alperen Sengun", min: 30, pts: 23, reb: 10, ast: 5, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 9, fga: 15, ftm: 3, fta: 4, composite: 3.59, zScores: { pts: 1.458, reb: 2.01, ast: 1.157, stl: -0.784, blk: -0.502, tpm: 0.732, fgImpact: 1.296, ftImpact: -0.038, to: -1.736 } },
          { name: "Fred VanVleet", min: 30, pts: 6, reb: 2, ast: 11, stl: 3, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: 5.94, zScores: { pts: -0.449, reb: -0.586, ast: 3.634, stl: 1.906, blk: 0.827, tpm: 0.732, fgImpact: -1.113, ftImpact: 0, to: 0.986 } },
          { name: "Amen Thompson", min: 33, pts: 16, reb: 10, ast: 4, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 12, ftm: 3, fta: 5, composite: 2.56, zScores: { pts: 0.673, reb: 2.01, ast: 0.744, stl: 0.113, blk: -0.502, tpm: 0, fgImpact: 0.264, ftImpact: -1.049, to: 0.305 } },
          { name: "Jae'Sean Tate", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.6, zScores: { pts: -1.122, reb: -1.236, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.3, ftImpact: 0, to: 0.986 } },
          { name: "Tari Eason", min: 3, pts: 2, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.81, zScores: { pts: -0.898, reb: -0.911, ast: -0.907, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: 0.044, ftImpact: 0, to: 0.986 } },
          { name: "Isaiah Crawford", min: 3, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.88, zScores: { pts: -0.786, reb: -1.236, ast: -0.907, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: 0.344, ftImpact: 0, to: 0.986 } },
          { name: "Clint Capela", min: 8, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4, zScores: { pts: -1.122, reb: -0.262, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0, ftImpact: 0, to: 0.305 } },
          { name: "Marcus Smart", min: 26, pts: 10, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 0.76, zScores: { pts: 0, reb: -0.586, ast: -0.081, stl: 0.113, blk: -0.502, tpm: 0.732, fgImpact: 0.776, ftImpact: 0, to: 0.305 } },
          { name: "Bogdan Bogdanovic", min: 13, pts: 5, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.47, zScores: { pts: -0.561, reb: -0.911, ast: -0.081, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: 0.388, ftImpact: 0, to: 0.986 } },
          { name: "Reed Sheppard", min: 16, pts: 3, reb: 2, ast: 4, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -2.33, zScores: { pts: -0.786, reb: -0.586, ast: 0.744, stl: 1.01, blk: -0.502, tpm: 0, fgImpact: -1.157, ftImpact: 0, to: -1.055 } },
          { name: "Bruce Thornton", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.6, zScores: { pts: -1.122, reb: -1.236, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.3, ftImpact: 0, to: 0.986 } }
        ]
      }
    },
      {
      id: "401909092",
      line: "Golden State Warriors 105 @ Los Angeles Lakers 127 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "GS", name: "Golden State Warriors", score: 105,
        players: [
          { name: "Draymond Green", min: 21, pts: 2, reb: 4, ast: 8, stl: 1, blk: 1, to: 4, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -0.52, zScores: { pts: -0.898, reb: 0.063, ast: 2.396, stl: 0.113, blk: 0.827, tpm: -0.732, fgImpact: -0.556, ftImpact: 0, to: -1.736 } },
          { name: "Gui Santos", min: 25, pts: 12, reb: 5, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 10, ftm: 1, fta: 2, composite: -0.17, zScores: { pts: 0.224, reb: 0.387, ast: -0.907, stl: 0.113, blk: -0.502, tpm: 0, fgImpact: 0.22, ftImpact: -0.687, to: 0.986 } },
          { name: "Yaxel Lendeborg", min: 29, pts: 12, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 11, ftm: 1, fta: 3, composite: -1.3, zScores: { pts: 0.224, reb: -0.262, ast: -0.081, stl: 0.113, blk: -0.502, tpm: 0, fgImpact: -0.08, ftImpact: -1.697, to: 0.986 } },
          { name: "Stephen Curry", min: 21, pts: 23, reb: 2, ast: 1, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 15, ftm: 7, fta: 7, composite: 3.52, zScores: { pts: 1.458, reb: -0.586, ast: -0.494, stl: 1.01, blk: -0.502, tpm: 0.732, fgImpact: 0.008, ftImpact: 2.268, to: -0.375 } },
          { name: "De'Anthony Melton", min: 21, pts: 0, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.89, zScores: { pts: -1.122, reb: -0.586, ast: -0.081, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: -0.6, ftImpact: 0, to: -0.375 } },
          { name: "Georges Niang", min: 20, pts: 7, reb: 2, ast: 2, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 8, ftm: 1, fta: 1, composite: -1.75, zScores: { pts: -0.337, reb: -0.586, ast: -0.081, stl: 1.01, blk: -0.502, tpm: -0.732, fgImpact: -0.468, ftImpact: 0.324, to: -0.375 } },
          { name: "Graham Ike", min: 12, pts: 8, reb: 2, ast: 1, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 3, fta: 4, composite: 0.97, zScores: { pts: -0.225, reb: -0.586, ast: -0.494, stl: 0.113, blk: 0.827, tpm: 0, fgImpact: 0.388, ftImpact: -0.038, to: 0.986 } },
          { name: "Malevy Leons", min: 9, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.122, reb: -0.911, ast: -0.907, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: -1.201, ftImpact: 0, to: 0.986 } },
          { name: "Al Horford", min: 17, pts: 0, reb: 4, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -2.86, zScores: { pts: -1.122, reb: 0.063, ast: -0.081, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: -0.9, ftImpact: 0, to: 0.305 } },
          { name: "Gary Payton II", min: 18, pts: 10, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: -3.69, zScores: { pts: 0, reb: -0.911, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0.52, ftImpact: 0, to: -0.375 } },
          { name: "Brandon Williams", min: 18, pts: 14, reb: 4, ast: 3, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 12, ftm: 7, fta: 7, composite: 2.47, zScores: { pts: 0.448, reb: 0.063, ast: 0.332, stl: 1.906, blk: -0.502, tpm: 0, fgImpact: -1.669, ftImpact: 2.268, to: -0.375 } },
          { name: "LJ Cryer", min: 9, pts: 9, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: -0.82, zScores: { pts: -0.113, reb: -0.911, ast: 0.332, stl: -0.784, blk: -0.502, tpm: 0.732, fgImpact: 0.132, ftImpact: -0.687, to: 0.986 } },
          { name: "Will Richard", min: 20, pts: 8, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 1, composite: -0.4, zScores: { pts: -0.225, reb: 0.387, ast: -0.494, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: 1.076, ftImpact: -1.011, to: 0.986 } }
        ]
      },
      home: {
        abbr: "LAL", name: "Los Angeles Lakers", score: 127,
        players: [
          { name: "Ziaire Williams", min: 24, pts: 9, reb: 3, ast: 4, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 0.08, zScores: { pts: -0.113, reb: -0.262, ast: 0.744, stl: 0.113, blk: -0.502, tpm: 0, fgImpact: 0.476, ftImpact: 0, to: -0.375 } },
          { name: "Walker Kessler", min: 30, pts: 26, reb: 9, ast: 1, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 12, fga: 12, ftm: 2, fta: 4, composite: 6.01, zScores: { pts: 1.794, reb: 1.685, ast: -0.494, stl: -0.784, blk: 2.156, tpm: -0.732, fgImpact: 4.129, ftImpact: -1.373, to: -0.375 } },
          { name: "Matisse Thybulle", min: 23, pts: 3, reb: 3, ast: 1, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -0.85, zScores: { pts: -0.786, reb: -0.262, ast: -0.494, stl: 0.113, blk: 0.827, tpm: 0, fgImpact: -0.556, ftImpact: 0, to: 0.305 } },
          { name: "Luka Doncic", min: 30, pts: 28, reb: 8, ast: 7, stl: 3, blk: 0, to: 6, tpm: 5, fgm: 7, fga: 18, ftm: 9, fta: 9, composite: 8.62, zScores: { pts: 2.018, reb: 1.361, ast: 1.983, stl: 1.906, blk: -0.502, tpm: 2.928, fgImpact: -0.893, ftImpact: 2.917, to: -3.096 } },
          { name: "Austin Reaves", min: 32, pts: 23, reb: 4, ast: 6, stl: 2, blk: 1, to: 4, tpm: 1, fgm: 6, fga: 11, ftm: 10, fta: 10, composite: 7, zScores: { pts: 1.458, reb: 0.063, ast: 1.57, stl: 1.01, blk: 0.827, tpm: 0, fgImpact: 0.564, ftImpact: 3.241, to: -1.736 } },
          { name: "Kevon Looney", min: 15, pts: 6, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -1.16, zScores: { pts: -0.449, reb: 0.387, ast: -0.494, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0.432, ftImpact: 0, to: 0.986 } },
          { name: "Sandro Mamukelashvili", min: 22, pts: 5, reb: 4, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -0.72, zScores: { pts: -0.561, reb: 0.063, ast: -0.081, stl: 1.01, blk: -0.502, tpm: -0.732, fgImpact: -0.212, ftImpact: -0.687, to: 0.986 } },
          { name: "Jake LaRavia", min: 18, pts: 10, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 1.06, zScores: { pts: 0, reb: -0.586, ast: -0.081, stl: 0.113, blk: -0.502, tpm: 0.732, fgImpact: 1.076, ftImpact: 0, to: 0.305 } },
          { name: "Quentin Grimes", min: 27, pts: 10, reb: 2, ast: 4, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 2.48, zScores: { pts: 0, reb: -0.586, ast: 0.744, stl: 0.113, blk: 0.827, tpm: -0.732, fgImpact: 0.476, ftImpact: 0.648, to: 0.986 } },
          { name: "Bronny James", min: 7, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.41, zScores: { pts: -0.898, reb: -1.236, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0.344, ftImpact: 0, to: 0.305 } },
          { name: "Chris Manon", min: 6, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4, zScores: { pts: -0.898, reb: -0.911, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.256, ftImpact: 0, to: 0.986 } },
          { name: "Jaden Hardy", min: 7, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.52, zScores: { pts: -0.786, reb: -0.586, ast: -0.907, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: -0.256, ftImpact: 0, to: 0.305 } }
        ]
      }
    },
      {
      id: "401909841",
      line: "Phoenix Suns 83 @ Portland Trail Blazers 124 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PHX", name: "Phoenix Suns", score: 83,
        players: [
          { name: "Dillon Brooks", min: 27, pts: 10, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 11, ftm: 1, fta: 2, composite: -3.92, zScores: { pts: 0, reb: 0.063, ast: -0.907, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: -0.724, ftImpact: -0.687, to: -0.375 } },
          { name: "Miles Bridges", min: 29, pts: 8, reb: 4, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 11, ftm: 2, fta: 2, composite: -1.28, zScores: { pts: -0.225, reb: 0.063, ast: -0.907, stl: 0.113, blk: 0.827, tpm: -0.732, fgImpact: -1.369, ftImpact: 0.648, to: 0.305 } },
          { name: "Khaman Maluach", min: 17, pts: 2, reb: 6, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.02, zScores: { pts: -0.898, reb: 0.712, ast: -0.494, stl: -0.784, blk: 0.827, tpm: -0.732, fgImpact: 0.044, ftImpact: 0, to: 0.305 } },
          { name: "Devin Booker", min: 29, pts: 23, reb: 4, ast: 2, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 7, fga: 13, ftm: 9, fta: 9, composite: 4.8, zScores: { pts: 1.458, reb: 0.063, ast: -0.081, stl: 0.113, blk: 0.827, tpm: -0.732, fgImpact: 0.608, ftImpact: 2.917, to: -0.375 } },
          { name: "Jalen Green", min: 25, pts: 10, reb: 2, ast: 3, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 4, fga: 12, ftm: 0, fta: 0, composite: -0.88, zScores: { pts: 0, reb: -0.586, ast: 0.332, stl: -0.784, blk: 0.827, tpm: 0.732, fgImpact: -1.025, ftImpact: 0, to: -0.375 } },
          { name: "Oso Ighodaro", min: 15, pts: 8, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 0, fta: 2, composite: -2.73, zScores: { pts: -0.225, reb: -0.262, ast: 0.332, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0.476, ftImpact: -2.021, to: 0.986 } },
          { name: "Ryan Dunn", min: 14, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 3, fta: 4, composite: -3.65, zScores: { pts: -0.786, reb: -0.586, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.3, ftImpact: -0.038, to: 0.986 } },
          { name: "Koa Peat", min: 7, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.44, zScores: { pts: -0.673, reb: -0.911, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0.088, ftImpact: 0, to: 0.986 } },
          { name: "Rasheer Fleming", min: 12, pts: 1, reb: 2, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 1, fta: 2, composite: -3.5, zScores: { pts: -1.01, reb: -0.586, ast: -0.907, stl: 0.113, blk: 0.827, tpm: -0.732, fgImpact: -1.501, ftImpact: -0.687, to: 0.986 } },
          { name: "Duop Reath", min: 9, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.97, zScores: { pts: -0.561, reb: -0.911, ast: -0.907, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: 0.388, ftImpact: 0, to: 0.305 } },
          { name: "Jordan Goodwin", min: 22, pts: 3, reb: 4, ast: 0, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -1.37, zScores: { pts: -0.786, reb: 0.063, ast: -0.907, stl: 1.01, blk: -0.502, tpm: 0, fgImpact: -0.556, ftImpact: 0, to: 0.305 } },
          { name: "Collin Gillespie", min: 21, pts: 0, reb: 1, ast: 2, stl: 4, blk: 0, to: 4, tpm: 0, fgm: 0, fga: 8, ftm: 0, fta: 1, composite: -5.69, zScores: { pts: -1.122, reb: -0.911, ast: -0.081, stl: 2.803, blk: -0.502, tpm: -0.732, fgImpact: -2.401, ftImpact: -1.011, to: -1.736 } },
          { name: "Jamaree Bouyea", min: 7, pts: 3, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 1, composite: -1.82, zScores: { pts: -0.786, reb: -0.586, ast: -0.081, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0.344, ftImpact: 0.324, to: 0.986 } },
          { name: "Pat Spencer", min: 7, pts: 3, reb: 3, ast: 1, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.25, zScores: { pts: -0.786, reb: -0.262, ast: -0.494, stl: 0.113, blk: 0.827, tpm: 0, fgImpact: 0.044, ftImpact: 0, to: 0.305 } }
        ]
      },
      home: {
        abbr: "POR", name: "Portland Trail Blazers", score: 124,
        players: [
          { name: "Toumani Camara", min: 23, pts: 18, reb: 2, ast: 3, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 9, ftm: 2, fta: 2, composite: 3.67, zScores: { pts: 0.897, reb: -0.586, ast: 0.332, stl: -0.784, blk: -0.502, tpm: 2.196, fgImpact: 1.164, ftImpact: 0.648, to: 0.305 } },
          { name: "Deni Avdija", min: 23, pts: 18, reb: 10, ast: 4, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 16, ftm: 2, fta: 4, composite: 2.85, zScores: { pts: 0.897, reb: 2.01, ast: 0.744, stl: 1.01, blk: -0.502, tpm: 0.732, fgImpact: -0.292, ftImpact: -1.373, to: -0.375 } },
          { name: "Donovan Clingan", min: 21, pts: 11, reb: 7, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 9, ftm: 1, fta: 2, composite: 0.01, zScores: { pts: 0.112, reb: 1.036, ast: -0.081, stl: -0.784, blk: -0.502, tpm: 0.732, fgImpact: -0.124, ftImpact: -0.687, to: 0.305 } },
          { name: "Damian Lillard", min: 24, pts: 25, reb: 3, ast: 6, stl: 1, blk: 0, to: 1, tpm: 6, fgm: 7, fga: 12, ftm: 5, fta: 5, composite: 9.09, zScores: { pts: 1.682, reb: -0.262, ast: 1.57, stl: 0.113, blk: -0.502, tpm: 3.66, fgImpact: 0.908, ftImpact: 1.62, to: 0.305 } },
          { name: "Ja Morant", min: 23, pts: 14, reb: 5, ast: 8, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 8, ftm: 0, fta: 0, composite: 7.14, zScores: { pts: 0.448, reb: 0.387, ast: 2.396, stl: 1.906, blk: -0.502, tpm: 0.732, fgImpact: 1.464, ftImpact: 0, to: 0.305 } },
          { name: "Robert Williams III", min: 15, pts: 2, reb: 10, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 0.66, zScores: { pts: -0.898, reb: 2.01, ast: -0.494, stl: -0.784, blk: 0.827, tpm: -0.732, fgImpact: -0.256, ftImpact: 0, to: 0.986 } },
          { name: "Micah Potter", min: 12, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.17, zScores: { pts: -0.673, reb: -0.262, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0.388, ftImpact: 0, to: 0.305 } },
          { name: "Yang Hansen", min: 12, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.3, zScores: { pts: -0.561, reb: -0.262, ast: -0.907, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: 0.088, ftImpact: 0, to: -0.375 } },
          { name: "Jrue Holiday", min: 21, pts: 8, reb: 4, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 4, fta: 4, composite: 0.89, zScores: { pts: -0.225, reb: 0.063, ast: -0.494, stl: 1.01, blk: -0.502, tpm: -0.732, fgImpact: -0.512, ftImpact: 1.296, to: 0.986 } },
          { name: "Vit Krejci", min: 15, pts: 1, reb: 2, ast: 3, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 1, fta: 1, composite: -2.44, zScores: { pts: -1.01, reb: -0.586, ast: 0.332, stl: 1.01, blk: -0.502, tpm: -0.732, fgImpact: -0.9, ftImpact: 0.324, to: -0.375 } },
          { name: "Scoot Henderson", min: 19, pts: 15, reb: 2, ast: 1, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 7, fga: 14, ftm: 0, fta: 0, composite: -2.34, zScores: { pts: 0.56, reb: -0.586, ast: -0.494, stl: 0.113, blk: -0.502, tpm: 0, fgImpact: 0.308, ftImpact: 0, to: -1.736 } },
          { name: "Jayson Kent", min: 7, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -5.64, zScores: { pts: -1.122, reb: -0.911, ast: -0.907, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: -1.201, ftImpact: 0, to: -0.375 } },
          { name: "Sidy Cissoko", min: 25, pts: 3, reb: 4, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -0.95, zScores: { pts: -0.786, reb: 0.063, ast: 0.332, stl: -0.784, blk: -0.502, tpm: 0, fgImpact: -0.256, ftImpact: 0, to: 0.986 } }
        ]
      }
    },
      {
      id: "401909842",
      line: "Sacramento Kings 96 @ LA Clippers 121 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SAC", name: "Sacramento Kings", score: 96,
        players: [
          { name: "Domantas Sabonis", min: 34, pts: 14, reb: 18, ast: 8, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 5, ftm: 4, fta: 4, composite: 8.29, zScores: { pts: 0.448, reb: 4.606, ast: 2.396, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: 1.721, ftImpact: 1.296, to: -1.055 } },
          { name: "De'Andre Hunter", min: 20, pts: 6, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 4, composite: -5.03, zScores: { pts: -0.449, reb: -0.262, ast: -0.494, stl: -0.784, blk: -0.502, tpm: 0.732, fgImpact: -0.212, ftImpact: -4.043, to: 0.986 } },
          { name: "Keegan Murray", min: 28, pts: 2, reb: 4, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 8, ftm: 0, fta: 0, composite: -3.63, zScores: { pts: -0.898, reb: 0.063, ast: -0.907, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: -1.757, ftImpact: 0, to: 0.986 } },
          { name: "Zach LaVine", min: 34, pts: 28, reb: 4, ast: 4, stl: 0, blk: 0, to: 4, tpm: 3, fgm: 10, fga: 19, ftm: 5, fta: 8, composite: 0.6, zScores: { pts: 2.018, reb: 0.063, ast: 0.744, stl: -0.784, blk: -0.502, tpm: 1.464, fgImpact: 0.74, ftImpact: -1.412, to: -1.736 } },
          { name: "Darius Acuff Jr.", min: 35, pts: 12, reb: 3, ast: 3, stl: 3, blk: 0, to: 4, tpm: 0, fgm: 5, fga: 24, ftm: 2, fta: 5, composite: -7.14, zScores: { pts: 0.224, reb: -0.262, ast: 0.332, stl: 1.906, blk: -0.502, tpm: -0.732, fgImpact: -3.982, ftImpact: -2.384, to: -1.736 } },
          { name: "Precious Achiuwa", min: 29, pts: 15, reb: 5, ast: 2, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 8, ftm: 4, fta: 5, composite: 2.78, zScores: { pts: 0.56, reb: 0.387, ast: -0.081, stl: 1.01, blk: -0.502, tpm: 0, fgImpact: 0.82, ftImpact: 0.286, to: 0.305 } },
          { name: "Alex Karaban", min: 5, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.55, zScores: { pts: -1.01, reb: -0.911, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0, ftImpact: -0.687, to: 0.986 } },
          { name: "Jonathan Mogbo", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.98, zScores: { pts: -1.122, reb: -1.236, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0, ftImpact: 0, to: 0.305 } },
          { name: "Daeqwon Plowden", min: 13, pts: 4, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.5, zScores: { pts: -0.673, reb: -0.586, ast: -0.494, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: 0.388, ftImpact: 0, to: 0.986 } },
          { name: "Nique Clifford", min: 17, pts: 6, reb: 1, ast: 3, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -3.37, zScores: { pts: -0.449, reb: -0.911, ast: 0.332, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: -0.168, ftImpact: 0, to: -1.055 } },
          { name: "Emanuel Sharp", min: 17, pts: 8, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -1.26, zScores: { pts: -0.225, reb: -0.911, ast: -0.907, stl: 0.113, blk: -0.502, tpm: 0.732, fgImpact: 0.132, ftImpact: 0, to: 0.305 } }
        ]
      },
      home: {
        abbr: "LAC", name: "LA Clippers", score: 121,
        players: [
          { name: "Derrick Jones Jr.", min: 26, pts: 8, reb: 6, ast: 5, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: 1.61, zScores: { pts: -0.225, reb: 0.712, ast: 1.157, stl: 0.113, blk: -0.502, tpm: 0, fgImpact: 0.732, ftImpact: -0.687, to: 0.305 } },
          { name: "Rui Hachimura", min: 32, pts: 10, reb: 8, ast: 2, stl: 1, blk: 1, to: 3, tpm: 2, fgm: 3, fga: 13, ftm: 2, fta: 5, composite: -2.46, zScores: { pts: 0, reb: 1.361, ast: -0.081, stl: 0.113, blk: 0.827, tpm: 0.732, fgImpact: -1.969, ftImpact: -2.384, to: -1.055 } },
          { name: "Isaiah Jackson", min: 15, pts: 13, reb: 5, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 6, fga: 8, ftm: 1, fta: 2, composite: -0.22, zScores: { pts: 0.336, reb: 0.387, ast: -0.907, stl: 0.113, blk: -0.502, tpm: -0.732, fgImpact: 1.464, ftImpact: -0.687, to: 0.305 } },
          { name: "Kris Dunn", min: 27, pts: 7, reb: 5, ast: 7, stl: 3, blk: 2, to: 2, tpm: 2, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: 5.55, zScores: { pts: -0.337, reb: 0.387, ast: 1.983, stl: 1.906, blk: 2.156, tpm: 0.732, fgImpact: -0.212, ftImpact: -0.687, to: -0.375 } },
          { name: "Darius Garland", min: 32, pts: 30, reb: 1, ast: 4, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 11, fga: 19, ftm: 5, fta: 8, composite: 2.07, zScores: { pts: 2.243, reb: -0.911, ast: 0.744, stl: 0.113, blk: -0.502, tpm: 1.464, fgImpact: 1.384, ftImpact: -1.412, to: -1.055 } },
          { name: "Baba Miller", min: 9, pts: 4, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.45, zScores: { pts: -0.673, reb: -0.262, ast: -0.494, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0.688, ftImpact: 0, to: 0.305 } },
          { name: "Nick Martinelli", min: 2, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.122, reb: -0.911, ast: -0.494, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: -0.3, ftImpact: 0, to: 0.986 } },
          { name: "Brook Lopez", min: 27, pts: 17, reb: 11, ast: 1, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 7, fga: 12, ftm: 2, fta: 2, composite: 4.75, zScores: { pts: 0.785, reb: 2.334, ast: -0.494, stl: 0.113, blk: 0.827, tpm: 0, fgImpact: 0.908, ftImpact: 0.648, to: -0.375 } },
          { name: "Jalen Pickett", min: 2, pts: 3, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.99, zScores: { pts: -0.786, reb: -1.236, ast: -0.907, stl: 0.113, blk: -0.502, tpm: 0, fgImpact: 0.344, ftImpact: 0, to: 0.986 } },
          { name: "Kobe Sanders", min: 19, pts: 2, reb: 0, ast: 3, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.68, zScores: { pts: -0.898, reb: -1.236, ast: 0.332, stl: 1.906, blk: -0.502, tpm: -0.732, fgImpact: -0.856, ftImpact: 0, to: 0.305 } },
          { name: "Cam Christie", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.3, zScores: { pts: -1.122, reb: -1.236, ast: -0.907, stl: -0.784, blk: -0.502, tpm: -0.732, fgImpact: 0, ftImpact: 0, to: 0.986 } },
          { name: "Gradey Dick", min: 19, pts: 12, reb: 4, ast: 0, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 3, fga: 4, ftm: 5, fta: 6, composite: 0.39, zScores: { pts: 0.224, reb: 0.063, ast: -0.907, stl: -0.784, blk: 0.827, tpm: 0, fgImpact: 0.732, ftImpact: 0.61, to: -0.375 } },
          { name: "Keaton Wagler", min: 29, pts: 15, reb: 5, ast: 5, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 8, ftm: 4, fta: 4, composite: 5.85, zScores: { pts: 0.56, reb: 0.387, ast: 1.157, stl: 1.01, blk: -0.502, tpm: 1.464, fgImpact: 0.176, ftImpact: 1.296, to: 0.305 } }
        ]
      }
    }
    ]
  },
    "2026-10-22": {
    games: [
      {
      id: "401909093",
      line: "Cleveland Cavaliers 106 @ Philadelphia 76ers 114 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CLE", name: "Cleveland Cavaliers", score: 106,
        players: [
          { name: "Jarrett Allen", min: 28, pts: 14, reb: 7, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 6, fga: 10, ftm: 2, fta: 4, composite: 0.4, zScores: { pts: 0.62, reb: 0.754, ast: -1.023, stl: -0.756, blk: 2.004, tpm: -0.79, fgImpact: 1.465, ftImpact: -2.205, to: 0.326 } },
          { name: "Evan Mobley", min: 34, pts: 18, reb: 8, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 13, ftm: 3, fta: 3, composite: 4.38, zScores: { pts: 1.105, reb: 1.023, ast: 0.114, stl: -0.756, blk: -0.573, tpm: 0.287, fgImpact: 1.268, ftImpact: 1.585, to: 0.326 } },
          { name: "James Harden", min: 33, pts: 16, reb: 3, ast: 5, stl: 1, blk: 0, to: 6, tpm: 3, fgm: 5, fga: 12, ftm: 3, fta: 4, composite: 1.81, zScores: { pts: 0.863, reb: -0.323, ast: 1.819, stl: 0.116, blk: -0.573, tpm: 2.441, fgImpact: 0.009, ftImpact: -0.046, to: -2.498 } },
          { name: "Donovan Mitchell", min: 35, pts: 32, reb: 10, ast: 3, stl: 2, blk: 1, to: 5, tpm: 2, fgm: 11, fga: 19, ftm: 8, fta: 11, composite: 7.98, zScores: { pts: 2.803, reb: 1.561, ast: 0.682, stl: 0.988, blk: 0.716, tpm: 1.364, fgImpact: 2.465, ftImpact: -0.666, to: -1.933 } },
          { name: "Peyton Watson", min: 30, pts: 8, reb: 1, ast: 2, stl: 2, blk: 1, to: 5, tpm: 0, fgm: 2, fga: 7, ftm: 4, fta: 4, composite: -0.49, zScores: { pts: -0.108, reb: -0.861, ast: 0.114, stl: 0.988, blk: 0.716, tpm: -0.79, fgImpact: -0.723, ftImpact: 2.113, to: -1.933 } },
          { name: "Mario Hezonja", min: 19, pts: 10, reb: 3, ast: 2, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 13, ftm: 0, fta: 0, composite: 1.41, zScores: { pts: 0.135, reb: -0.323, ast: 0.114, stl: 0.988, blk: 0.716, tpm: -0.79, fgImpact: -0.321, ftImpact: 0, to: 0.891 } },
          { name: "Sam Merrill", min: 24, pts: 5, reb: 5, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.52, zScores: { pts: -0.472, reb: 0.215, ast: 0.114, stl: 0.116, blk: -0.573, tpm: 0.287, fgImpact: -0.063, ftImpact: 0, to: 0.891 } },
          { name: "Jaylon Tyson", min: 24, pts: 3, reb: 6, ast: 2, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 1, fga: 6, ftm: 1, fta: 2, composite: -1.31, zScores: { pts: -0.714, reb: 0.484, ast: 0.114, stl: 0.116, blk: 2.004, tpm: -0.79, fgImpact: -1.188, ftImpact: -1.102, to: -0.239 } },
          { name: "Craig Porter Jr.", min: 8, pts: 0, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.67, zScores: { pts: -1.078, reb: -0.323, ast: -1.023, stl: 0.116, blk: -0.573, tpm: -0.79, fgImpact: -0.33, ftImpact: 0, to: 0.326 } },
          { name: "Tyrese Proctor", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.79, zScores: { pts: -1.078, reb: -1.13, ast: -1.023, stl: -0.756, blk: -0.573, tpm: -0.79, fgImpact: -0.33, ftImpact: 0, to: 0.891 } }
        ]
      },
      home: {
        abbr: "PHI", name: "Philadelphia 76ers", score: 114,
        players: [
          { name: "LeBron James", min: 33, pts: 17, reb: 10, ast: 5, stl: 3, blk: 1, to: 5, tpm: 1, fgm: 5, fga: 14, ftm: 6, fta: 7, composite: 6.18, zScores: { pts: 0.984, reb: 1.561, ast: 1.819, stl: 1.86, blk: 0.716, tpm: 0.287, fgImpact: -0.652, ftImpact: 1.539, to: -1.933 } },
          { name: "Joel Embiid", min: 34, pts: 24, reb: 7, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 8, fga: 16, ftm: 7, fta: 9, composite: 2.93, zScores: { pts: 1.833, reb: 0.754, ast: -0.455, stl: -0.756, blk: -0.573, tpm: 0.287, fgImpact: 1.072, ftImpact: 0.436, to: 0.326 } },
          { name: "Jaylen Brown", min: 38, pts: 21, reb: 8, ast: 4, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 10, fga: 20, ftm: 0, fta: 0, composite: 3.54, zScores: { pts: 1.469, reb: 1.023, ast: 1.251, stl: 0.116, blk: -0.573, tpm: 0.287, fgImpact: 1.34, ftImpact: 0, to: -1.369 } },
          { name: "Tyrese Maxey", min: 42, pts: 32, reb: 3, ast: 6, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 12, fga: 23, ftm: 6, fta: 8, composite: 8.26, zScores: { pts: 2.803, reb: -0.323, ast: 2.388, stl: 0.988, blk: -0.573, tpm: 1.364, fgImpact: 1.938, ftImpact: -0.092, to: -0.239 } },
          { name: "VJ Edgecombe", min: 33, pts: 11, reb: 7, ast: 6, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 11, ftm: 2, fta: 3, composite: 4.27, zScores: { pts: 0.256, reb: 0.754, ast: 2.388, stl: 1.86, blk: -0.573, tpm: 0.287, fgImpact: -0.455, ftImpact: -0.574, to: 0.326 } },
          { name: "Jabari Walker", min: 4, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.48, zScores: { pts: -0.836, reb: -0.861, ast: -1.023, stl: -0.756, blk: -0.573, tpm: -0.79, fgImpact: 0.464, ftImpact: 0, to: 0.891 } },
          { name: "Adem Bona", min: 14, pts: 2, reb: 2, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.82, zScores: { pts: -0.836, reb: -0.592, ast: -1.023, stl: -0.756, blk: 0.716, tpm: -0.79, fgImpact: 0.134, ftImpact: 0, to: 0.326 } },
          { name: "Kentavious Caldwell-Pope", min: 25, pts: 3, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.3, zScores: { pts: -0.714, reb: -0.323, ast: 0.114, stl: 0.116, blk: -0.573, tpm: 0.287, fgImpact: 0.464, ftImpact: 0, to: 0.326 } },
          { name: "Anfernee Simons", min: 17, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 2, fta: 3, composite: -5.87, zScores: { pts: -0.836, reb: -0.323, ast: -1.023, stl: -0.756, blk: -0.573, tpm: -0.79, fgImpact: -1.322, ftImpact: -0.574, to: 0.326 } }
        ]
      }
    },
      {
      id: "401909094",
      line: "Denver Nuggets 84 @ Oklahoma City Thunder 96 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DEN", name: "Denver Nuggets", score: 84,
        players: [
          { name: "Aaron Gordon", min: 29, pts: 20, reb: 6, ast: 1, stl: 2, blk: 1, to: 2, tpm: 3, fgm: 6, fga: 9, ftm: 5, fta: 6, composite: 8.09, zScores: { pts: 1.348, reb: 0.484, ast: -0.455, stl: 0.988, blk: 0.716, tpm: 2.441, fgImpact: 1.795, ftImpact: 1.01, to: -0.239 } },
          { name: "Cameron Johnson", min: 11, pts: 5, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.07, zScores: { pts: -0.472, reb: -0.592, ast: -0.455, stl: -0.756, blk: -0.573, tpm: 0.287, fgImpact: 0.598, ftImpact: 0, to: 0.891 } },
          { name: "Nikola Jokic", min: 35, pts: 13, reb: 7, ast: 5, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 5, fga: 19, ftm: 2, fta: 4, composite: -0.56, zScores: { pts: 0.499, reb: 0.754, ast: 1.819, stl: 0.116, blk: 0.716, tpm: 0.287, fgImpact: -2.304, ftImpact: -2.205, to: -0.239 } },
          { name: "Jamal Murray", min: 37, pts: 6, reb: 10, ast: 3, stl: 1, blk: 0, to: 6, tpm: 0, fgm: 2, fga: 11, ftm: 2, fta: 4, composite: -6.1, zScores: { pts: -0.35, reb: 1.561, ast: 0.682, stl: 0.116, blk: -0.573, tpm: -0.79, fgImpact: -2.045, ftImpact: -2.205, to: -2.498 } },
          { name: "Christian Braun", min: 33, pts: 7, reb: 6, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -1.53, zScores: { pts: -0.229, reb: 0.484, ast: -0.455, stl: 0.116, blk: -0.573, tpm: 0.287, fgImpact: -0.92, ftImpact: 0, to: -0.239 } },
          { name: "Alpha Diallo", min: 22, pts: 4, reb: 2, ast: 3, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.72, zScores: { pts: -0.593, reb: -0.592, ast: 0.682, stl: 0.116, blk: -0.573, tpm: -0.79, fgImpact: 0.268, ftImpact: 0, to: -0.239 } },
          { name: "Marvin Bagley III", min: 11, pts: 2, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.17, zScores: { pts: -0.836, reb: -0.323, ast: -0.455, stl: -0.756, blk: -0.573, tpm: -0.79, fgImpact: -0.196, ftImpact: 0, to: -0.239 } },
          { name: "DaRon Holmes II", min: 2, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.05, zScores: { pts: -0.714, reb: -0.861, ast: -0.455, stl: -0.756, blk: -0.573, tpm: 0.287, fgImpact: 0.134, ftImpact: 0, to: 0.891 } },
          { name: "Bryce Hopkins", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.19, zScores: { pts: -1.078, reb: -0.861, ast: -1.023, stl: -0.756, blk: -0.573, tpm: -0.79, fgImpact: 0, ftImpact: 0, to: 0.891 } },
          { name: "Trevon Brazile", min: 18, pts: 4, reb: 12, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: -1.44, zScores: { pts: -0.593, reb: 2.099, ast: -1.023, stl: -0.756, blk: -0.573, tpm: -0.79, fgImpact: -1.188, ftImpact: 1.056, to: 0.326 } },
          { name: "DeMar DeRozan", min: 28, pts: 13, reb: 2, ast: 0, stl: 0, blk: 0, to: 5, tpm: 0, fgm: 5, fga: 9, ftm: 3, fta: 6, composite: -7.48, zScores: { pts: 0.499, reb: -0.592, ast: -1.023, stl: -0.756, blk: -0.573, tpm: -0.79, fgImpact: 1, ftImpact: -3.307, to: -1.933 } },
          { name: "Tyus Jones", min: 10, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.54, zScores: { pts: -0.836, reb: -1.13, ast: -1.023, stl: 0.116, blk: -0.573, tpm: -0.79, fgImpact: -0.196, ftImpact: 0, to: 0.891 } },
          { name: "Ryan Nembhard", min: 2, pts: 5, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.34, zScores: { pts: -0.472, reb: -0.861, ast: -0.455, stl: -0.756, blk: -0.573, tpm: 0.287, fgImpact: 0.598, ftImpact: 0, to: 0.891 } }
        ]
      },
      home: {
        abbr: "OKC", name: "Oklahoma City Thunder", score: 96,
        players: [
          { name: "Isaiah Hartenstein", min: 23, pts: 6, reb: 6, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -1.74, zScores: { pts: -0.35, reb: 0.484, ast: 0.114, stl: -0.756, blk: 0.716, tpm: -0.79, fgImpact: -0.92, ftImpact: 0, to: -0.239 } },
          { name: "Chet Holmgren", min: 28, pts: 12, reb: 17, ast: 2, stl: 1, blk: 4, to: 3, tpm: 0, fgm: 5, fga: 9, ftm: 2, fta: 2, composite: 9.1, zScores: { pts: 0.377, reb: 3.445, ast: 0.114, stl: 0.116, blk: 4.581, tpm: -0.79, fgImpact: 1, ftImpact: 1.056, to: -0.804 } },
          { name: "Shai Gilgeous-Alexander", min: 35, pts: 17, reb: 2, ast: 3, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 6, fga: 19, ftm: 2, fta: 2, composite: 3.91, zScores: { pts: 0.984, reb: -0.592, ast: 0.682, stl: -0.756, blk: 0.716, tpm: 2.441, fgImpact: -1.509, ftImpact: 1.056, to: 0.891 } },
          { name: "Jalen Williams", min: 33, pts: 21, reb: 5, ast: 3, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 15, ftm: 5, fta: 6, composite: 4.35, zScores: { pts: 1.469, reb: 0.215, ast: 0.682, stl: -0.756, blk: -0.573, tpm: 1.364, fgImpact: 0.607, ftImpact: 1.01, to: 0.326 } },
          { name: "Cason Wallace", min: 24, pts: 9, reb: 1, ast: 1, stl: 4, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 3.93, zScores: { pts: 0.013, reb: -0.861, ast: -0.455, stl: 2.732, blk: -0.573, tpm: 2.441, fgImpact: -0.259, ftImpact: 0, to: 0.891 } },
          { name: "Jaylin Williams", min: 15, pts: 3, reb: 7, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 0.05, zScores: { pts: -0.714, reb: 0.754, ast: 0.682, stl: -0.756, blk: -0.573, tpm: 0.287, fgImpact: -0.527, ftImpact: 0, to: 0.891 } },
          { name: "Brooks Barnhizer", min: 2, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.89, zScores: { pts: -1.078, reb: -1.13, ast: -0.455, stl: -0.756, blk: -0.573, tpm: -0.79, fgImpact: 0, ftImpact: 0, to: 0.891 } },
          { name: "Aday Mara", min: 13, pts: 2, reb: 3, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.01, zScores: { pts: -0.836, reb: -0.323, ast: -1.023, stl: 0.116, blk: 0.716, tpm: -0.79, fgImpact: -0.196, ftImpact: 0, to: 0.326 } },
          { name: "Alex Caruso", min: 20, pts: 7, reb: 4, ast: 5, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 3.62, zScores: { pts: -0.229, reb: -0.054, ast: 1.819, stl: 0.116, blk: 0.716, tpm: 0.287, fgImpact: 0.071, ftImpact: 0, to: 0.891 } },
          { name: "Kenrich Williams", min: 6, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.05, zScores: { pts: -0.714, reb: -0.861, ast: -0.455, stl: -0.756, blk: -0.573, tpm: 0.287, fgImpact: 0.134, ftImpact: 0, to: 0.891 } },
          { name: "Jared McCain", min: 18, pts: 4, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: -4.67, zScores: { pts: -0.593, reb: -1.13, ast: -0.455, stl: -0.756, blk: -0.573, tpm: -0.79, fgImpact: -1.188, ftImpact: 1.056, to: -0.239 } },
          { name: "Ajay Mitchell", min: 23, pts: 12, reb: 0, ast: 0, stl: 5, blk: 1, to: 3, tpm: 0, fgm: 5, fga: 11, ftm: 2, fta: 2, composite: 2.35, zScores: { pts: 0.377, reb: -1.13, ast: -1.023, stl: 3.604, blk: 0.716, tpm: -0.79, fgImpact: 0.339, ftImpact: 1.056, to: -0.804 } },
          { name: "Bennett Stirtz", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.79, zScores: { pts: -1.078, reb: -1.13, ast: -1.023, stl: -0.756, blk: -0.573, tpm: -0.79, fgImpact: -0.33, ftImpact: 0, to: 0.891 } }
        ]
      }
    }
    ]
  },
    "2026-10-23": {
    games: [
      {
      id: "401909848",
      line: "Chicago Bulls 132 @ Milwaukee Bucks 125 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHI", name: "Chicago Bulls", score: 132,
        players: [
          { name: "Jalen Smith", min: 24, pts: 14, reb: 13, ast: 1, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 6.32, zScores: { pts: 0.511, reb: 2.792, ast: -0.529, stl: 2.136, blk: -0.548, tpm: 0.702, fgImpact: 1.006, ftImpact: 0, to: 0.253 } },
          { name: "Matas Buzelis", min: 17, pts: 7, reb: 5, ast: 3, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 9, ftm: 3, fta: 4, composite: -2.75, zScores: { pts: -0.371, reb: 0.348, ast: 0.286, stl: -0.772, blk: 0.629, tpm: -0.907, fgImpact: -1.571, ftImpact: -0.092, to: -0.304 } },
          { name: "Caleb Wilson", min: 33, pts: 21, reb: 6, ast: 1, stl: 1, blk: 2, to: 3, tpm: 2, fgm: 7, fga: 14, ftm: 5, fta: 6, composite: 4.39, zScores: { pts: 1.393, reb: 0.653, ast: -0.529, stl: 0.197, blk: 1.807, tpm: 0.702, fgImpact: 0.389, ftImpact: 0.641, to: -0.86 } },
          { name: "Norman Powell", min: 33, pts: 25, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 20, ftm: 9, fta: 9, composite: 2.72, zScores: { pts: 1.897, reb: 0.042, ast: -0.529, stl: -0.772, blk: -0.548, tpm: 0.702, fgImpact: -1.629, ftImpact: 3.3, to: 0.253 } },
          { name: "Josh Giddey", min: 25, pts: 6, reb: 4, ast: 9, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -0.54, zScores: { pts: -0.497, reb: 0.042, ast: 2.73, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: -0.842, ftImpact: 0, to: 0.253 } },
          { name: "Isaac Okoro", min: 28, pts: 12, reb: 3, ast: 1, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 4, fga: 7, ftm: 3, fta: 3, composite: 0.58, zScores: { pts: 0.259, reb: -0.263, ast: -0.529, stl: -0.772, blk: 0.629, tpm: -0.102, fgImpact: 0.559, ftImpact: 1.1, to: -0.304 } },
          { name: "Leonard Miller", min: 24, pts: 19, reb: 3, ast: 2, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 7, fga: 11, ftm: 3, fta: 3, composite: 4.62, zScores: { pts: 1.141, reb: -0.263, ast: -0.121, stl: -0.772, blk: 0.629, tpm: 0.702, fgImpact: 1.398, ftImpact: 1.1, to: 0.809 } },
          { name: "Noa Essengue", min: 17, pts: 4, reb: 1, ast: 1, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.49, zScores: { pts: -0.749, reb: -0.874, ast: -0.529, stl: 2.136, blk: 0.629, tpm: -0.907, fgImpact: 0.111, ftImpact: 0, to: -0.304 } },
          { name: "Buddy Hield", min: 15, pts: 13, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 2.17, zScores: { pts: 0.385, reb: -0.569, ast: -0.121, stl: 0.197, blk: -0.548, tpm: 1.507, fgImpact: 1.623, ftImpact: 0, to: -0.304 } },
          { name: "Tre Jones", min: 24, pts: 11, reb: 3, ast: 8, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 8, ftm: 5, fta: 5, composite: 4.04, zScores: { pts: 0.133, reb: -0.263, ast: 2.322, stl: 1.167, blk: -0.548, tpm: -0.907, fgImpact: -0.506, ftImpact: 1.833, to: 0.809 } }
        ]
      },
      home: {
        abbr: "MIL", name: "Milwaukee Bucks", score: 125,
        players: [
          { name: "Kyle Kuzma", min: 30, pts: 14, reb: 9, ast: 4, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 6, fga: 12, ftm: 0, fta: 1, composite: 2.11, zScores: { pts: 0.511, reb: 1.57, ast: 0.693, stl: -0.772, blk: -0.548, tpm: 0.702, fgImpact: 0.334, ftImpact: -1.192, to: 0.809 } },
          { name: "Jaime Jaquez Jr.", min: 35, pts: 19, reb: 11, ast: 5, stl: 0, blk: 0, to: 6, tpm: 2, fgm: 7, fga: 11, ftm: 3, fta: 6, composite: 0.2, zScores: { pts: 1.141, reb: 2.181, ast: 1.1, stl: -0.772, blk: -0.548, tpm: 0.702, fgImpact: 1.398, ftImpact: -2.477, to: -2.529 } },
          { name: "Myles Turner", min: 30, pts: 12, reb: 3, ast: 1, stl: 0, blk: 5, to: 3, tpm: 2, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: 3.48, zScores: { pts: 0.259, reb: -0.263, ast: -0.529, stl: -0.772, blk: 5.338, tpm: 0.702, fgImpact: -0.395, ftImpact: 0, to: -0.86 } },
          { name: "Tyler Herro", min: 32, pts: 34, reb: 5, ast: 4, stl: 1, blk: 0, to: 1, tpm: 5, fgm: 12, fga: 24, ftm: 5, fta: 7, composite: 7.21, zScores: { pts: 3.032, reb: 0.348, ast: 0.693, stl: 0.197, blk: -0.548, tpm: 3.117, fgImpact: 0.667, ftImpact: -0.551, to: 0.253 } },
          { name: "Ryan Rollins", min: 34, pts: 11, reb: 7, ast: 6, stl: 1, blk: 1, to: 4, tpm: 2, fgm: 3, fga: 9, ftm: 3, fta: 4, composite: 1.78, zScores: { pts: 0.133, reb: 0.959, ast: 1.508, stl: 0.197, blk: 0.629, tpm: 0.702, fgImpact: -0.842, ftImpact: -0.092, to: -1.416 } },
          { name: "Ousmane Dieng", min: 16, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -4.8, zScores: { pts: -0.875, reb: -0.874, ast: -0.529, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: -0.281, ftImpact: -0.826, to: 0.809 } },
          { name: "Kel'el Ware", min: 15, pts: 11, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 7, ftm: 0, fta: 2, composite: -3.58, zScores: { pts: 0.133, reb: 0.042, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: 1.287, ftImpact: -2.385, to: -0.304 } },
          { name: "AJ Green", min: 17, pts: 11, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -0.68, zScores: { pts: 0.133, reb: -0.874, ast: -0.936, stl: -0.772, blk: -0.548, tpm: 1.507, fgImpact: 0.559, ftImpact: 0, to: 0.253 } },
          { name: "Brayden Burries", min: 8, pts: 3, reb: 1, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 2, composite: -4.33, zScores: { pts: -0.875, reb: -0.874, ast: 0.286, stl: 0.197, blk: -0.548, tpm: -0.102, fgImpact: -0.281, ftImpact: -2.385, to: 0.253 } },
          { name: "Kasparas Jakucionis", min: 23, pts: 7, reb: 2, ast: 5, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: 1.77, zScores: { pts: -0.371, reb: -0.569, ast: 1.1, stl: 1.167, blk: -0.548, tpm: -0.102, fgImpact: 0.111, ftImpact: 0.733, to: 0.253 } }
        ]
      }
    },
      {
      id: "401909095",
      line: "New York Knicks 103 @ Boston Celtics 107 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NY", name: "New York Knicks", score: 103,
        players: [
          { name: "OG Anunoby", min: 34, pts: 20, reb: 10, ast: 8, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 11, ftm: 8, fta: 10, composite: 4.48, zScores: { pts: 1.267, reb: 1.875, ast: 2.322, stl: -0.772, blk: -0.548, tpm: 0.702, fgImpact: -0.058, ftImpact: 0.549, to: -0.86 } },
          { name: "Karl-Anthony Towns", min: 37, pts: 22, reb: 10, ast: 3, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 9, fga: 13, ftm: 2, fta: 3, composite: 3.37, zScores: { pts: 1.519, reb: 1.875, ast: 0.286, stl: -0.772, blk: -0.548, tpm: 0.702, fgImpact: 2.182, ftImpact: -0.459, to: -1.416 } },
          { name: "Josh Hart", min: 36, pts: 10, reb: 12, ast: 5, stl: 3, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 12, ftm: 0, fta: 0, composite: 5.57, zScores: { pts: 0.007, reb: 2.486, ast: 1.1, stl: 2.136, blk: -0.548, tpm: 0.702, fgImpact: -1.123, ftImpact: 0, to: 0.809 } },
          { name: "Mikal Bridges", min: 22, pts: 0, reb: 1, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 8, ftm: 0, fta: 0, composite: -5.13, zScores: { pts: -1.253, reb: -0.874, ast: 0.693, stl: 0.197, blk: -0.548, tpm: -0.907, fgImpact: -2.691, ftImpact: 0, to: 0.253 } },
          { name: "Jalen Brunson", min: 37, pts: 19, reb: 2, ast: 4, stl: 0, blk: 2, to: 3, tpm: 2, fgm: 7, fga: 17, ftm: 3, fta: 6, composite: -0.95, zScores: { pts: 1.141, reb: -0.569, ast: 0.693, stl: -0.772, blk: 1.807, tpm: 0.702, fgImpact: -0.62, ftImpact: -2.477, to: -0.86 } },
          { name: "Andre Drummond", min: 7, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.87, zScores: { pts: -1.001, reb: -0.569, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0.056, ftImpact: 0, to: 0.809 } },
          { name: "James Wiseman", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.79, zScores: { pts: -1.253, reb: -1.18, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Jordan Clarkson", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.48, zScores: { pts: -1.253, reb: -0.874, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Landry Shamet", min: 21, pts: 8, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -2.5, zScores: { pts: -0.245, reb: -0.569, ast: -0.936, stl: -0.772, blk: -0.548, tpm: 0.702, fgImpact: 0.167, ftImpact: 0, to: -0.304 } },
          { name: "Jose Alvarado", min: 11, pts: 2, reb: 2, ast: 2, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.75, zScores: { pts: -1.001, reb: -0.569, ast: -0.121, stl: 0.197, blk: -0.548, tpm: -0.907, fgImpact: 0.056, ftImpact: 0, to: -0.86 } },
          { name: "Miles McBride", min: 30, pts: 20, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 6, fgm: 6, fga: 9, ftm: 2, fta: 2, composite: 6.63, zScores: { pts: 1.267, reb: -0.569, ast: -0.529, stl: 0.197, blk: -0.548, tpm: 3.922, fgImpact: 1.343, ftImpact: 0.733, to: 0.809 } }
        ]
      },
      home: {
        abbr: "BOS", name: "Boston Celtics", score: 107,
        players: [
          { name: "Paul George", min: 34, pts: 15, reb: 7, ast: 2, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 15, ftm: 0, fta: 0, composite: 3.18, zScores: { pts: 0.637, reb: 0.959, ast: -0.121, stl: 1.167, blk: -0.548, tpm: 1.507, fgImpact: -0.675, ftImpact: 0, to: 0.253 } },
          { name: "Jayson Tatum", min: 37, pts: 36, reb: 9, ast: 7, stl: 3, blk: 0, to: 2, tpm: 3, fgm: 14, fga: 26, ftm: 5, fta: 5, composite: 12.84, zScores: { pts: 3.284, reb: 1.57, ast: 1.915, stl: 2.136, blk: -0.548, tpm: 1.507, fgImpact: 1.451, ftImpact: 1.833, to: -0.304 } },
          { name: "Mitchell Robinson", min: 22, pts: 4, reb: 4, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.96, zScores: { pts: -0.749, reb: 0.042, ast: -0.121, stl: -0.772, blk: 0.629, tpm: -0.907, fgImpact: 0.111, ftImpact: 0, to: 0.809 } },
          { name: "Derrick White", min: 33, pts: 12, reb: 4, ast: 6, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: 2.36, zScores: { pts: 0.259, reb: 0.042, ast: 1.508, stl: 0.197, blk: -0.548, tpm: 0.702, fgImpact: -0.058, ftImpact: 0, to: 0.253 } },
          { name: "Jordan Walsh", min: 20, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -3.22, zScores: { pts: -0.623, reb: -0.263, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: -0.225, ftImpact: 0, to: 0.253 } },
          { name: "Sam Hauser", min: 23, pts: 6, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.22, zScores: { pts: -0.497, reb: -0.569, ast: -0.121, stl: -0.772, blk: -0.548, tpm: 0.702, fgImpact: -0.225, ftImpact: 0, to: 0.809 } },
          { name: "Luka Garza", min: 4, pts: 8, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: 0.28, zScores: { pts: -0.245, reb: -0.874, ast: -0.936, stl: 0.197, blk: -0.548, tpm: 0.702, fgImpact: 1.176, ftImpact: 0, to: 0.809 } },
          { name: "Neemias Queta", min: 22, pts: 15, reb: 6, ast: 1, stl: 0, blk: 3, to: 2, tpm: 1, fgm: 4, fga: 8, ftm: 6, fta: 9, composite: 1.41, zScores: { pts: 0.637, reb: 0.653, ast: -0.529, stl: -0.772, blk: 2.984, tpm: -0.102, fgImpact: 0.222, ftImpact: -1.377, to: -0.304 } },
          { name: "Payton Pritchard", min: 30, pts: 4, reb: 1, ast: 4, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: -4.44, zScores: { pts: -0.749, reb: -0.874, ast: 0.693, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: -0.953, ftImpact: -0.826, to: -0.304 } },
          { name: "Baylor Scheierman", min: 11, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -5.71, zScores: { pts: -1.001, reb: -1.18, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: -0.617, ftImpact: 0, to: 0.253 } },
          { name: "Hugo Gonzalez", min: 4, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.72, zScores: { pts: -1.253, reb: -1.18, ast: -0.529, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: -0.336, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401909843",
      line: "Atlanta Hawks 128 @ Charlotte Hornets 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ATL", name: "Atlanta Hawks", score: 128,
        players: [
          { name: "Onyeka Okongwu", min: 22, pts: 10, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: -0.07, zScores: { pts: 0.007, reb: 0.042, ast: -0.529, stl: -0.772, blk: -0.548, tpm: 0.702, fgImpact: 0.222, ftImpact: 0, to: 0.809 } },
          { name: "Jalen Johnson", min: 29, pts: 19, reb: 7, ast: 8, stl: 3, blk: 1, to: 3, tpm: 0, fgm: 9, fga: 16, ftm: 1, fta: 1, composite: 6.96, zScores: { pts: 1.141, reb: 0.959, ast: 2.322, stl: 2.136, blk: 0.629, tpm: -0.907, fgImpact: 1.173, ftImpact: 0.367, to: -0.86 } },
          { name: "CJ McCollum", min: 22, pts: 13, reb: 1, ast: 2, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 10, ftm: 3, fta: 3, composite: 1.41, zScores: { pts: 0.385, reb: -0.874, ast: -0.121, stl: -0.772, blk: 0.629, tpm: 0.702, fgImpact: -0.45, ftImpact: 1.1, to: 0.809 } },
          { name: "Nickeil Alexander-Walker", min: 27, pts: 14, reb: 3, ast: 5, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 12, ftm: 2, fta: 2, composite: 2.7, zScores: { pts: 0.511, reb: -0.263, ast: 1.1, stl: 1.167, blk: -0.548, tpm: 0.702, fgImpact: -0.395, ftImpact: 0.733, to: -0.304 } },
          { name: "Dyson Daniels", min: 23, pts: 11, reb: 9, ast: 4, stl: 7, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 10, ftm: 1, fta: 3, composite: 7.2, zScores: { pts: 0.133, reb: 1.57, ast: 0.693, stl: 6.014, blk: 0.629, tpm: -0.907, fgImpact: 0.278, ftImpact: -2.018, to: 0.809 } },
          { name: "Dorian Finney-Smith", min: 8, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.09, zScores: { pts: -0.875, reb: -0.569, ast: -0.529, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: 0.056, ftImpact: 0, to: 0.253 } },
          { name: "Corey Kispert", min: 10, pts: 11, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 0.96, zScores: { pts: 0.133, reb: -0.874, ast: -0.529, stl: -0.772, blk: -0.548, tpm: 1.507, fgImpact: 1.231, ftImpact: 0, to: 0.809 } },
          { name: "Asa Newell", min: 8, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 2, composite: -5.63, zScores: { pts: -0.875, reb: -0.874, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: 0.056, ftImpact: -2.385, to: 0.809 } },
          { name: "Zuby Ejiofor", min: 8, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.83, zScores: { pts: -0.875, reb: -0.569, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: -0.281, ftImpact: 0, to: 0.253 } },
          { name: "Jock Landale", min: 18, pts: 8, reb: 6, ast: 4, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 8, ftm: 1, fta: 2, composite: 1.3, zScores: { pts: -0.245, reb: 0.653, ast: 0.693, stl: 0.197, blk: 0.629, tpm: -0.102, fgImpact: -0.506, ftImpact: -0.826, to: 0.809 } },
          { name: "Luguentz Dort", min: 19, pts: 9, reb: 5, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 4, fta: 5, composite: -0.04, zScores: { pts: -0.119, reb: 0.348, ast: -0.121, stl: 0.197, blk: -0.548, tpm: -0.102, fgImpact: -0.225, ftImpact: 0.274, to: 0.253 } },
          { name: "Aaron Wiggins", min: 22, pts: 19, reb: 1, ast: 1, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 7, fga: 9, ftm: 2, fta: 4, composite: 2.54, zScores: { pts: 1.141, reb: -0.874, ast: -0.529, stl: 1.167, blk: -0.548, tpm: 1.507, fgImpact: 2.071, ftImpact: -1.651, to: 0.253 } },
          { name: "Kingston Flemings", min: 25, pts: 5, reb: 6, ast: 8, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.81, zScores: { pts: -0.623, reb: 0.653, ast: 2.322, stl: 0.197, blk: -0.548, tpm: -0.102, fgImpact: -0.225, ftImpact: 0, to: -0.86 } }
        ]
      },
      home: {
        abbr: "CHA", name: "Charlotte Hornets", score: 81,
        players: [
          { name: "Moussa Diabate", min: 21, pts: 5, reb: 8, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: 0.24, zScores: { pts: -0.623, reb: 1.264, ast: -0.529, stl: 0.197, blk: 0.629, tpm: -0.907, fgImpact: 0.784, ftImpact: -0.826, to: 0.253 } },
          { name: "Brandon Miller", min: 23, pts: 6, reb: 2, ast: 0, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 14, ftm: 1, fta: 1, composite: -3.5, zScores: { pts: -0.497, reb: -0.569, ast: -0.936, stl: 1.167, blk: 0.629, tpm: -0.102, fgImpact: -3.252, ftImpact: 0.367, to: -0.304 } },
          { name: "Naz Reid", min: 25, pts: 17, reb: 6, ast: 2, stl: 1, blk: 0, to: 7, tpm: 3, fgm: 7, fga: 16, ftm: 0, fta: 0, composite: -0.79, zScores: { pts: 0.889, reb: 0.653, ast: -0.121, stl: 0.197, blk: -0.548, tpm: 1.507, fgImpact: -0.283, ftImpact: 0, to: -3.086 } },
          { name: "Dennis Schroder", min: 20, pts: 4, reb: 4, ast: 3, stl: 0, blk: 1, to: 4, tpm: 0, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -3.11, zScores: { pts: -0.749, reb: 0.042, ast: 0.286, stl: -0.772, blk: 0.629, tpm: -0.907, fgImpact: -0.953, ftImpact: 0.733, to: -1.416 } },
          { name: "Sion James", min: 24, pts: 3, reb: 2, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -3.14, zScores: { pts: -0.875, reb: -0.569, ast: 1.1, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: -1.626, ftImpact: 0, to: 0.253 } },
          { name: "Royce O'Neale", min: 17, pts: 6, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -1.4, zScores: { pts: -0.497, reb: -0.569, ast: -0.936, stl: 0.197, blk: -0.548, tpm: 0.702, fgImpact: -0.561, ftImpact: 0, to: 0.809 } },
          { name: "Tidjane Salaun", min: 23, pts: 11, reb: 5, ast: 1, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 1.34, zScores: { pts: 0.133, reb: 0.348, ast: -0.529, stl: 1.167, blk: -0.548, tpm: -0.102, fgImpact: 0.614, ftImpact: 0, to: 0.253 } },
          { name: "Hannes Steinbach", min: 12, pts: 6, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 1, composite: -3.19, zScores: { pts: -0.497, reb: 0.348, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0.503, ftImpact: -1.192, to: 0.809 } },
          { name: "Ryan Kalkbrenner", min: 19, pts: 6, reb: 7, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 1.15, zScores: { pts: -0.497, reb: 0.959, ast: -0.529, stl: -0.772, blk: 1.807, tpm: -0.907, fgImpact: 0.839, ftImpact: 0, to: 0.253 } },
          { name: "PJ Hall", min: 10, pts: 0, reb: 1, ast: 3, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.76, zScores: { pts: -1.253, reb: -0.874, ast: 0.286, stl: -0.772, blk: 0.629, tpm: -0.907, fgImpact: -0.673, ftImpact: 0, to: 0.809 } },
          { name: "Grayson Allen", min: 20, pts: 11, reb: 2, ast: 3, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: -0.04, zScores: { pts: 0.133, reb: -0.569, ast: 0.286, stl: -0.772, blk: -0.548, tpm: 1.507, fgImpact: -0.506, ftImpact: 0.733, to: -0.304 } },
          { name: "Christian Anderson", min: 16, pts: 2, reb: 0, ast: 2, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -5.17, zScores: { pts: -1.001, reb: -1.18, ast: -0.121, stl: -0.772, blk: 0.629, tpm: -0.907, fgImpact: -0.953, ftImpact: 0, to: -0.86 } },
          { name: "Liam McNeeley", min: 12, pts: 4, reb: 4, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 4, ftm: 4, fta: 4, composite: -4.61, zScores: { pts: -0.749, reb: 0.042, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: -1.345, ftImpact: 1.467, to: -0.86 } }
        ]
      }
    },
      {
      id: "401909844",
      line: "Dallas Mavericks 121 @ Indiana Pacers 105 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DAL", name: "Dallas Mavericks", score: 121,
        players: [
          { name: "Daniel Gafford", min: 15, pts: 4, reb: 3, ast: 5, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 1.14, zScores: { pts: -0.749, reb: -0.263, ast: 1.1, stl: -0.772, blk: 1.807, tpm: -0.907, fgImpact: 0.111, ftImpact: 0, to: 0.809 } },
          { name: "P.J. Washington", min: 33, pts: 20, reb: 13, ast: 0, stl: 0, blk: 3, to: 2, tpm: 2, fgm: 6, fga: 11, ftm: 6, fta: 8, composite: 6.22, zScores: { pts: 1.267, reb: 2.792, ast: -0.936, stl: -0.772, blk: 2.984, tpm: 0.702, fgImpact: 0.67, ftImpact: -0.185, to: -0.304 } },
          { name: "Cooper Flagg", min: 17, pts: 14, reb: 5, ast: 6, stl: 3, blk: 1, to: 3, tpm: 2, fgm: 4, fga: 6, ftm: 4, fta: 4, composite: 7.34, zScores: { pts: 0.511, reb: 0.348, ast: 1.508, stl: 2.136, blk: 0.629, tpm: 0.702, fgImpact: 0.895, ftImpact: 1.467, to: -0.86 } },
          { name: "Kyrie Irving", min: 25, pts: 24, reb: 1, ast: 3, stl: 1, blk: 1, to: 2, tpm: 5, fgm: 8, fga: 15, ftm: 3, fta: 3, composite: 6.7, zScores: { pts: 1.771, reb: -0.874, ast: 0.286, stl: 0.197, blk: 0.629, tpm: 3.117, fgImpact: 0.781, ftImpact: 1.1, to: -0.304 } },
          { name: "Max Christie", min: 38, pts: 16, reb: 4, ast: 4, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 14, ftm: 0, fta: 0, composite: 1.94, zScores: { pts: 0.763, reb: 0.042, ast: 0.693, stl: 0.197, blk: -0.548, tpm: 0.702, fgImpact: 0.389, ftImpact: 0, to: -0.304 } },
          { name: "Naji Marshall", min: 33, pts: 15, reb: 4, ast: 6, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 7, fga: 15, ftm: 1, fta: 2, composite: 1.79, zScores: { pts: 0.637, reb: 0.042, ast: 1.508, stl: 2.136, blk: -0.548, tpm: -0.907, fgImpact: 0.053, ftImpact: -0.826, to: -0.304 } },
          { name: "Morez Johnson Jr.", min: 17, pts: 8, reb: 6, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: -1.82, zScores: { pts: -0.245, reb: 0.653, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0.503, ftImpact: 0.733, to: -0.304 } },
          { name: "Tobi Lawal", min: 1, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.82, zScores: { pts: -1.253, reb: -1.18, ast: -0.936, stl: 0.197, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Zaccharie Risacher", min: 32, pts: 11, reb: 6, ast: 1, stl: 1, blk: 3, to: 0, tpm: 1, fgm: 4, fga: 11, ftm: 2, fta: 2, composite: 4.09, zScores: { pts: 0.133, reb: 0.653, ast: -0.529, stl: 0.197, blk: 2.984, tpm: -0.102, fgImpact: -0.787, ftImpact: 0.733, to: 0.809 } },
          { name: "Sergio de Larrea", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.12, zScores: { pts: -1.253, reb: -1.18, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: -0.336, ftImpact: 0, to: 0.809 } },
          { name: "Moussa Cisse", min: 1, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -4.54, zScores: { pts: -0.875, reb: -0.874, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0.392, ftImpact: -0.826, to: 0.809 } },
          { name: "Marcus Sasser", min: 27, pts: 6, reb: 2, ast: 3, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.19, zScores: { pts: -0.497, reb: -0.569, ast: 0.286, stl: -0.772, blk: 0.629, tpm: 0.702, fgImpact: -0.225, ftImpact: 0, to: 0.253 } },
          { name: "Walter Clayton Jr.", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.48, zScores: { pts: -1.253, reb: -0.874, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } }
        ]
      },
      home: {
        abbr: "IND", name: "Indiana Pacers", score: 105,
        players: [
          { name: "Pascal Siakam", min: 29, pts: 23, reb: 3, ast: 3, stl: 0, blk: 0, to: 5, tpm: 3, fgm: 8, fga: 13, ftm: 4, fta: 7, composite: -0.77, zScores: { pts: 1.645, reb: -0.263, ast: 0.286, stl: -0.772, blk: -0.548, tpm: 1.507, fgImpact: 1.454, ftImpact: -2.11, to: -1.973 } },
          { name: "Jarace Walker", min: 17, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -5.99, zScores: { pts: -1.001, reb: -0.874, ast: -0.529, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0.056, ftImpact: 0, to: -1.416 } },
          { name: "Ivica Zubac", min: 24, pts: 9, reb: 11, ast: 2, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 4, fga: 7, ftm: 1, fta: 2, composite: -0.24, zScores: { pts: -0.119, reb: 2.181, ast: -0.121, stl: -0.772, blk: 0.629, tpm: -0.907, fgImpact: 0.559, ftImpact: -0.826, to: -0.86 } },
          { name: "Andrew Nembhard", min: 32, pts: 16, reb: 2, ast: 5, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 11, ftm: 5, fta: 5, composite: 2.87, zScores: { pts: 0.763, reb: -0.569, ast: 1.1, stl: 0.197, blk: -0.548, tpm: -0.102, fgImpact: -0.058, ftImpact: 1.833, to: 0.253 } },
          { name: "Tyrese Haliburton", min: 32, pts: 18, reb: 6, ast: 7, stl: 1, blk: 2, to: 3, tpm: 0, fgm: 8, fga: 17, ftm: 2, fta: 2, composite: 4.66, zScores: { pts: 1.015, reb: 0.653, ast: 1.915, stl: 0.197, blk: 1.807, tpm: -0.907, fgImpact: 0.108, ftImpact: 0.733, to: -0.86 } },
          { name: "Larry Nance Jr.", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.79, zScores: { pts: -1.253, reb: -1.18, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Obi Toppin", min: 25, pts: 13, reb: 5, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 10, ftm: 3, fta: 3, composite: 0.78, zScores: { pts: 0.385, reb: 0.348, ast: -0.529, stl: -0.772, blk: 0.629, tpm: -0.907, fgImpact: 0.278, ftImpact: 1.1, to: 0.253 } },
          { name: "Jalen Slawson", min: 16, pts: 4, reb: 5, ast: 2, stl: 2, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 2, composite: 0.2, zScores: { pts: -0.749, reb: 0.348, ast: -0.121, stl: 1.167, blk: 1.807, tpm: -0.907, fgImpact: 0.784, ftImpact: -2.385, to: 0.253 } },
          { name: "Jay Huff", min: 5, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.51, zScores: { pts: -1.253, reb: -0.569, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: -0.336, ftImpact: 0, to: 0.809 } },
          { name: "Kelly Oubre Jr.", min: 20, pts: 3, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 10, ftm: 0, fta: 0, composite: -3.84, zScores: { pts: -0.875, reb: -0.569, ast: -0.121, stl: 0.197, blk: -0.548, tpm: -0.102, fgImpact: -2.635, ftImpact: 0, to: 0.809 } },
          { name: "Aaron Nesmith", min: 20, pts: 9, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 4, fta: 6, composite: -3.59, zScores: { pts: -0.119, reb: 0.042, ast: -0.529, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: -0.898, ftImpact: -0.918, to: 0.253 } },
          { name: "Kobe Brown", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.79, zScores: { pts: -1.253, reb: -1.18, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Quenton Jackson", min: 17, pts: 8, reb: 1, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 8, ftm: 1, fta: 1, composite: -0.62, zScores: { pts: -0.245, reb: -0.874, ast: 0.286, stl: 0.197, blk: -0.548, tpm: -0.102, fgImpact: -0.506, ftImpact: 0.367, to: 0.809 } }
        ]
      }
    },
      {
      id: "401909845",
      line: "Minnesota Timberwolves 115 @ Orlando Magic 93 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIN", name: "Minnesota Timberwolves", score: 115,
        players: [
          { name: "Jaden McDaniels", min: 30, pts: 15, reb: 6, ast: 3, stl: 0, blk: 2, to: 0, tpm: 2, fgm: 6, fga: 14, ftm: 1, fta: 1, composite: 4.15, zScores: { pts: 0.637, reb: 0.653, ast: 0.286, stl: -0.772, blk: 1.807, tpm: 0.702, fgImpact: -0.339, ftImpact: 0.367, to: 0.809 } },
          { name: "Jonathan Kuminga", min: 27, pts: 11, reb: 8, ast: 5, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 7, ftm: 3, fta: 8, composite: -1.37, zScores: { pts: 0.133, reb: 1.264, ast: 1.1, stl: 0.197, blk: -0.548, tpm: 0.702, fgImpact: -0.17, ftImpact: -4.862, to: 0.809 } },
          { name: "Rudy Gobert", min: 30, pts: 14, reb: 9, ast: 1, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 6, fga: 8, ftm: 2, fta: 4, composite: -1.51, zScores: { pts: 0.511, reb: 1.57, ast: -0.529, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 1.679, ftImpact: -1.651, to: -0.86 } },
          { name: "LaMelo Ball", min: 23, pts: 12, reb: 5, ast: 5, stl: 2, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 13, ftm: 2, fta: 2, composite: 1.44, zScores: { pts: 0.259, reb: 0.348, ast: 1.1, stl: 1.167, blk: -0.548, tpm: 0.702, fgImpact: -1.459, ftImpact: 0.733, to: -0.86 } },
          { name: "Anthony Edwards", min: 33, pts: 15, reb: 4, ast: 4, stl: 4, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 23, ftm: 3, fta: 4, composite: 0.14, zScores: { pts: 0.637, reb: 0.042, ast: 0.693, stl: 3.106, blk: -0.548, tpm: 0.702, fgImpact: -4.094, ftImpact: -0.092, to: -0.304 } },
          { name: "Trey Lyles", min: 17, pts: 9, reb: 6, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 1, fta: 3, composite: -1.25, zScores: { pts: -0.119, reb: 0.653, ast: -0.121, stl: -0.772, blk: -0.548, tpm: 0.702, fgImpact: 0.167, ftImpact: -2.018, to: 0.809 } },
          { name: "Cody Williams", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.79, zScores: { pts: -1.253, reb: -1.18, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Isaiah Evans", min: 2, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.38, zScores: { pts: -1.253, reb: -1.18, ast: -0.529, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Joan Beringer", min: 15, pts: 9, reb: 9, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: -2.62, zScores: { pts: -0.119, reb: 1.57, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0.222, ftImpact: -0.826, to: -0.304 } },
          { name: "Ayo Dosunmu", min: 27, pts: 14, reb: 7, ast: 10, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 6, fga: 11, ftm: 1, fta: 2, composite: 5.98, zScores: { pts: 0.511, reb: 0.959, ast: 3.137, stl: 0.197, blk: 0.629, tpm: -0.102, fgImpact: 0.67, ftImpact: -0.826, to: 0.809 } },
          { name: "Jaylen Clark", min: 3, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.77, zScores: { pts: -1.253, reb: -0.569, ast: -0.529, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Terrence Shannon Jr.", min: 22, pts: 13, reb: 4, ast: 1, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 4, fga: 6, ftm: 3, fta: 4, composite: 0.96, zScores: { pts: 0.385, reb: 0.042, ast: -0.529, stl: -0.772, blk: 0.629, tpm: 0.702, fgImpact: 0.895, ftImpact: -0.092, to: -0.304 } },
          { name: "Bones Hyland", min: 8, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.24, zScores: { pts: -0.875, reb: -0.874, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: 0.056, ftImpact: 0, to: 0.809 } }
        ]
      },
      home: {
        abbr: "ORL", name: "Orlando Magic", score: 93,
        players: [
          { name: "Paolo Banchero", min: 26, pts: 14, reb: 6, ast: 5, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 11, ftm: 2, fta: 4, composite: -0.28, zScores: { pts: 0.511, reb: 0.653, ast: 1.1, stl: 0.197, blk: -0.548, tpm: -0.907, fgImpact: 0.67, ftImpact: -1.651, to: -0.304 } },
          { name: "Franz Wagner", min: 33, pts: 18, reb: 6, ast: 5, stl: 1, blk: 0, to: 6, tpm: 1, fgm: 7, fga: 14, ftm: 3, fta: 6, composite: -2.3, zScores: { pts: 1.015, reb: 0.653, ast: 1.1, stl: 0.197, blk: -0.548, tpm: -0.102, fgImpact: 0.389, ftImpact: -2.477, to: -2.529 } },
          { name: "Wendell Carter Jr.", min: 29, pts: 20, reb: 9, ast: 1, stl: 0, blk: 2, to: 2, tpm: 3, fgm: 8, fga: 9, ftm: 1, fta: 1, composite: 7.71, zScores: { pts: 1.267, reb: 1.57, ast: -0.529, stl: -0.772, blk: 1.807, tpm: 1.507, fgImpact: 2.799, ftImpact: 0.367, to: -0.304 } },
          { name: "Desmond Bane", min: 27, pts: 5, reb: 2, ast: 0, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 11, ftm: 0, fta: 0, composite: -5.68, zScores: { pts: -0.623, reb: -0.569, ast: -0.936, stl: 0.197, blk: -0.548, tpm: -0.102, fgImpact: -2.243, ftImpact: 0, to: -0.86 } },
          { name: "Jalen Suggs", min: 34, pts: 14, reb: 6, ast: 6, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 6, fga: 12, ftm: 1, fta: 2, composite: 2.04, zScores: { pts: 0.511, reb: 0.653, ast: 1.508, stl: 0.197, blk: 0.629, tpm: -0.102, fgImpact: 0.334, ftImpact: -0.826, to: -0.86 } },
          { name: "Jamal Cain", min: 11, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -5.83, zScores: { pts: -1.253, reb: -0.874, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: -1.345, ftImpact: 0, to: 0.809 } },
          { name: "Tristan da Silva", min: 29, pts: 5, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 9, ftm: 0, fta: 0, composite: -2.63, zScores: { pts: -0.623, reb: -0.263, ast: -0.529, stl: 0.197, blk: -0.548, tpm: -0.102, fgImpact: -1.571, ftImpact: 0, to: 0.809 } },
          { name: "Nikola Vucevic", min: 4, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.51, zScores: { pts: -1.253, reb: -0.569, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: -0.336, ftImpact: 0, to: 0.809 } },
          { name: "Goga Bitadze", min: 12, pts: 4, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -1.4, zScores: { pts: -0.749, reb: -0.263, ast: -0.936, stl: -0.772, blk: 0.629, tpm: -0.907, fgImpact: 0.056, ftImpact: 0.733, to: 0.809 } },
          { name: "Colin Castleton", min: 4, pts: 7, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 1, fta: 2, composite: -2.54, zScores: { pts: -0.371, reb: -0.569, ast: -0.529, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 1.176, ftImpact: -0.826, to: 0.809 } },
          { name: "Jevon Carter", min: 13, pts: 0, reb: 1, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.81, zScores: { pts: -1.253, reb: -0.874, ast: -0.529, stl: 1.167, blk: -0.548, tpm: -0.907, fgImpact: -0.673, ftImpact: 0, to: 0.809 } },
          { name: "Alex Morales", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.82, zScores: { pts: -1.253, reb: -0.874, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: -0.336, ftImpact: 0, to: 0.809 } },
          { name: "Jase Richardson", min: 14, pts: 6, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -2.75, zScores: { pts: -0.497, reb: -0.874, ast: 0.286, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: -0.225, ftImpact: -0.826, to: 0.809 } }
        ]
      }
    },
      {
      id: "401909846",
      line: "Toronto Raptors 112 @ Washington Wizards 102 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TOR", name: "Toronto Raptors", score: 112,
        players: [
          { name: "Kawhi Leonard", min: 28, pts: 16, reb: 9, ast: 1, stl: 3, blk: 0, to: 4, tpm: 2, fgm: 7, fga: 20, ftm: 0, fta: 0, composite: 1.05, zScores: { pts: 0.763, reb: 1.57, ast: -0.529, stl: 2.136, blk: -0.548, tpm: 0.702, fgImpact: -1.629, ftImpact: 0, to: -1.416 } },
          { name: "RJ Barrett", min: 34, pts: 23, reb: 9, ast: 4, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 9, fga: 16, ftm: 4, fta: 5, composite: 5.92, zScores: { pts: 1.645, reb: 1.57, ast: 0.693, stl: -0.772, blk: 0.629, tpm: -0.102, fgImpact: 1.173, ftImpact: 0.274, to: 0.809 } },
          { name: "Scottie Barnes", min: 37, pts: 28, reb: 14, ast: 5, stl: 2, blk: 2, to: 8, tpm: 1, fgm: 12, fga: 26, ftm: 3, fta: 3, composite: 6.8, zScores: { pts: 2.275, reb: 3.097, ast: 1.1, stl: 1.167, blk: 1.807, tpm: -0.102, fgImpact: -0.005, ftImpact: 1.1, to: -3.642 } },
          { name: "Jakob Poeltl", min: 27, pts: 6, reb: 9, ast: 2, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 2.3, zScores: { pts: -0.497, reb: 1.57, ast: -0.121, stl: 0.197, blk: 0.629, tpm: -0.907, fgImpact: 0.448, ftImpact: 0.733, to: 0.253 } },
          { name: "Immanuel Quickley", min: 29, pts: 12, reb: 1, ast: 6, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 15, ftm: 2, fta: 3, composite: -2.94, zScores: { pts: 0.259, reb: -0.874, ast: 1.508, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: -1.404, ftImpact: -0.459, to: 0.253 } },
          { name: "Trayce Jackson-Davis", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.79, zScores: { pts: -1.253, reb: -1.18, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Jamison Battle", min: 12, pts: 5, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.94, zScores: { pts: -0.623, reb: -1.18, ast: -0.936, stl: 0.197, blk: -0.548, tpm: -0.102, fgImpact: 0.448, ftImpact: 0, to: 0.809 } },
          { name: "Collin Murray-Boyles", min: 18, pts: 8, reb: 3, ast: 0, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 0.39, zScores: { pts: -0.245, reb: -0.263, ast: -0.936, stl: 2.136, blk: -0.548, tpm: -0.907, fgImpact: 0.167, ftImpact: 0.733, to: 0.253 } },
          { name: "Allen Graves", min: 6, pts: 2, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.35, zScores: { pts: -1.001, reb: -0.569, ast: -0.936, stl: -0.772, blk: 0.629, tpm: -0.907, fgImpact: 0.392, ftImpact: 0, to: 0.809 } },
          { name: "Jamal Shead", min: 24, pts: 5, reb: 2, ast: 5, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 4, composite: -2.44, zScores: { pts: -0.623, reb: -0.569, ast: 1.1, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: -0.281, ftImpact: -0.092, to: 0.253 } },
          { name: "Jaden Bradley", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.79, zScores: { pts: -1.253, reb: -1.18, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Ja'Kobe Walter", min: 24, pts: 7, reb: 4, ast: 2, stl: 2, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 8, ftm: 1, fta: 2, composite: 0.8, zScores: { pts: -0.371, reb: 0.042, ast: -0.121, stl: 1.167, blk: 0.629, tpm: 0.702, fgImpact: -1.234, ftImpact: -0.826, to: 0.809 } },
          { name: "Alijah Martin", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.79, zScores: { pts: -1.253, reb: -1.18, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } }
        ]
      },
      home: {
        abbr: "WSH", name: "Washington Wizards", score: 102,
        players: [
          { name: "Anthony Davis", min: 32, pts: 9, reb: 9, ast: 0, stl: 1, blk: 2, to: 4, tpm: 0, fgm: 3, fga: 12, ftm: 3, fta: 4, composite: -1.75, zScores: { pts: -0.119, reb: 1.57, ast: -0.936, stl: 0.197, blk: 1.807, tpm: -0.907, fgImpact: -1.851, ftImpact: -0.092, to: -1.416 } },
          { name: "Kyshawn George", min: 26, pts: 11, reb: 3, ast: 3, stl: 2, blk: 0, to: 8, tpm: 1, fgm: 2, fga: 9, ftm: 6, fta: 7, composite: -3.53, zScores: { pts: 0.133, reb: -0.263, ast: 0.286, stl: 1.167, blk: -0.548, tpm: -0.102, fgImpact: -1.571, ftImpact: 1.008, to: -3.642 } },
          { name: "Alex Sarr", min: 25, pts: 7, reb: 4, ast: 5, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: 2.39, zScores: { pts: -0.371, reb: 0.042, ast: 1.1, stl: 1.167, blk: -0.548, tpm: -0.102, fgImpact: 0.111, ftImpact: 0.733, to: 0.253 } },
          { name: "Trae Young", min: 37, pts: 22, reb: 1, ast: 12, stl: 1, blk: 0, to: 4, tpm: 4, fgm: 5, fga: 15, ftm: 8, fta: 10, composite: 4.29, zScores: { pts: 1.519, reb: -0.874, ast: 3.952, stl: 0.197, blk: -0.548, tpm: 2.312, fgImpact: -1.404, ftImpact: 0.549, to: -1.416 } },
          { name: "Bilal Coulibaly", min: 26, pts: 11, reb: 6, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 8, ftm: 4, fta: 4, composite: 1.38, zScores: { pts: 0.133, reb: 0.653, ast: -0.936, stl: -0.772, blk: 0.629, tpm: -0.102, fgImpact: -0.506, ftImpact: 1.467, to: 0.809 } },
          { name: "Khris Middleton", min: 16, pts: 6, reb: 2, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 4, fta: 4, composite: -1.19, zScores: { pts: -0.497, reb: -0.569, ast: -0.936, stl: 1.167, blk: -0.548, tpm: -0.907, fgImpact: -0.617, ftImpact: 1.467, to: 0.253 } },
          { name: "Anthony Gill", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.79, zScores: { pts: -1.253, reb: -1.18, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Justin Champagnie", min: 23, pts: 8, reb: 6, ast: 0, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 1.94, zScores: { pts: -0.245, reb: 0.653, ast: -0.936, stl: 0.197, blk: 1.807, tpm: -0.907, fgImpact: 0.559, ftImpact: 0, to: 0.809 } },
          { name: "Felix Okpara", min: 1, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -5.49, zScores: { pts: -1.127, reb: -1.18, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: -0.826, to: 0.809 } },
          { name: "Deandre Ayton", min: 14, pts: 4, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.82, zScores: { pts: -0.749, reb: 0.653, ast: -0.529, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0.784, ftImpact: 0, to: 0.253 } },
          { name: "Reece Beekman", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.79, zScores: { pts: -1.253, reb: -1.18, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Tre Mann", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.79, zScores: { pts: -1.253, reb: -1.18, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Bub Carrington", min: 11, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.92, zScores: { pts: -0.875, reb: -0.874, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: -0.617, ftImpact: 0, to: 0.809 } },
          { name: "Will Riley", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.79, zScores: { pts: -1.253, reb: -1.18, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Tre Johnson", min: 26, pts: 20, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 7, fga: 14, ftm: 2, fta: 2, composite: 3.1, zScores: { pts: 1.267, reb: -0.569, ast: -0.936, stl: 0.197, blk: -0.548, tpm: 2.312, fgImpact: 0.389, ftImpact: 0.733, to: 0.253 } }
        ]
      }
    },
      {
      id: "401909847",
      line: "Detroit Pistons 128 @ Miami Heat 111 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DET", name: "Detroit Pistons", score: 128,
        players: [
          { name: "Duncan Robinson", min: 28, pts: 17, reb: 1, ast: 2, stl: 2, blk: 0, to: 1, tpm: 5, fgm: 5, fga: 12, ftm: 2, fta: 2, composite: 4.22, zScores: { pts: 0.889, reb: -0.874, ast: -0.121, stl: 1.167, blk: -0.548, tpm: 3.117, fgImpact: -0.395, ftImpact: 0.733, to: 0.253 } },
          { name: "John Collins", min: 29, pts: 23, reb: 7, ast: 1, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 9, fga: 15, ftm: 0, fta: 0, composite: 5.63, zScores: { pts: 1.645, reb: 0.959, ast: -0.529, stl: -0.772, blk: -0.548, tpm: 3.117, fgImpact: 1.509, ftImpact: 0, to: 0.253 } },
          { name: "Jalen Duren", min: 10, pts: 4, reb: 6, ast: 3, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.47, zScores: { pts: -0.749, reb: 0.653, ast: 0.286, stl: 0.197, blk: 0.629, tpm: -0.907, fgImpact: 0.111, ftImpact: 0, to: 0.253 } },
          { name: "Cade Cunningham", min: 30, pts: 16, reb: 2, ast: 8, stl: 1, blk: 3, to: 7, tpm: 2, fgm: 5, fga: 8, ftm: 4, fta: 6, composite: 3.35, zScores: { pts: 0.763, reb: -0.569, ast: 2.322, stl: 0.197, blk: 2.984, tpm: 0.702, fgImpact: 0.951, ftImpact: -0.918, to: -3.086 } },
          { name: "Ausar Thompson", min: 19, pts: 4, reb: 3, ast: 5, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.08, zScores: { pts: -0.749, reb: -0.263, ast: 1.1, stl: 0.197, blk: 0.629, tpm: -0.907, fgImpact: -0.225, ftImpact: 0, to: -0.86 } },
          { name: "Paul Reed", min: 26, pts: 19, reb: 11, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 8, fga: 11, ftm: 1, fta: 1, composite: 6.29, zScores: { pts: 1.141, reb: 2.181, ast: 0.286, stl: -0.772, blk: -0.548, tpm: 0.702, fgImpact: 2.127, ftImpact: 0.367, to: 0.809 } },
          { name: "Tolu Smith", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.48, zScores: { pts: -1.253, reb: -0.874, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Ronald Holland II", min: 22, pts: 8, reb: 5, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 1.25, zScores: { pts: -0.245, reb: 0.348, ast: 0.693, stl: 0.197, blk: -0.548, tpm: -0.907, fgImpact: 0.167, ftImpact: 0.733, to: 0.809 } },
          { name: "Javonte Green", min: 13, pts: 5, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.15, zScores: { pts: -0.623, reb: -0.263, ast: -0.936, stl: -0.772, blk: 0.629, tpm: -0.102, fgImpact: 0.111, ftImpact: 0, to: 0.809 } },
          { name: "Kevin Huerter", min: 20, pts: 5, reb: 6, ast: 2, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -0.57, zScores: { pts: -0.623, reb: 0.653, ast: -0.121, stl: 0.197, blk: 0.629, tpm: -0.102, fgImpact: -0.898, ftImpact: 0, to: -0.304 } },
          { name: "Isaiah Joe", min: 18, pts: 12, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 9, ftm: 3, fta: 4, composite: -1.91, zScores: { pts: 0.259, reb: -0.263, ast: -0.529, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: -0.114, ftImpact: -0.092, to: 0.253 } },
          { name: "Daniss Jenkins", min: 22, pts: 15, reb: 5, ast: 5, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 8, ftm: 4, fta: 5, composite: 2, zScores: { pts: 0.637, reb: 0.348, ast: 1.1, stl: 0.197, blk: -0.548, tpm: -0.102, fgImpact: 0.951, ftImpact: 0.274, to: -0.86 } }
        ]
      },
      home: {
        abbr: "MIA", name: "Miami Heat", score: 111,
        players: [
          { name: "Giannis Antetokounmpo", min: 33, pts: 36, reb: 12, ast: 5, stl: 2, blk: 1, to: 3, tpm: 1, fgm: 15, fga: 26, ftm: 5, fta: 8, composite: 8.14, zScores: { pts: 3.284, reb: 2.486, ast: 1.1, stl: 1.167, blk: 0.629, tpm: -0.102, fgImpact: 2.179, ftImpact: -1.744, to: -0.86 } },
          { name: "Andrew Wiggins", min: 26, pts: 8, reb: 8, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 12, ftm: 1, fta: 1, composite: -0.79, zScores: { pts: -0.245, reb: 1.264, ast: -0.121, stl: 0.197, blk: -0.548, tpm: -0.102, fgImpact: -1.851, ftImpact: 0.367, to: 0.253 } },
          { name: "Bam Adebayo", min: 23, pts: 4, reb: 6, ast: 3, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 2, composite: -2.79, zScores: { pts: -0.749, reb: 0.653, ast: 0.286, stl: 1.167, blk: -0.548, tpm: -0.907, fgImpact: -0.561, ftImpact: -2.385, to: 0.253 } },
          { name: "Klay Thompson", min: 24, pts: 6, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 11, ftm: 0, fta: 0, composite: -3.24, zScores: { pts: -0.497, reb: -0.569, ast: -0.121, stl: -0.772, blk: -0.548, tpm: 0.702, fgImpact: -2.243, ftImpact: 0, to: 0.809 } },
          { name: "Davion Mitchell", min: 33, pts: 18, reb: 2, ast: 5, stl: 0, blk: 2, to: 1, tpm: 3, fgm: 6, fga: 14, ftm: 3, fta: 5, composite: 2.72, zScores: { pts: 1.015, reb: -0.569, ast: 1.1, stl: -0.772, blk: 1.807, tpm: 1.507, fgImpact: -0.339, ftImpact: -1.285, to: 0.253 } },
          { name: "Bobby Portis", min: 21, pts: 11, reb: 8, ast: 2, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 2.79, zScores: { pts: 0.133, reb: 1.264, ast: -0.121, stl: 0.197, blk: -0.548, tpm: 1.507, fgImpact: -0.45, ftImpact: 0, to: 0.809 } },
          { name: "Simone Fontecchio", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.49, zScores: { pts: -1.253, reb: -0.874, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: -1.009, ftImpact: 0, to: 0.809 } },
          { name: "Myron Gardner", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.17, zScores: { pts: -1.253, reb: -1.18, ast: -0.936, stl: -0.772, blk: 0.629, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.253 } },
          { name: "Nikola Jovic", min: 13, pts: 5, reb: 4, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 3, fta: 4, composite: -0.08, zScores: { pts: -0.623, reb: 0.042, ast: -0.529, stl: 0.197, blk: 0.629, tpm: -0.907, fgImpact: 0.392, ftImpact: -0.092, to: 0.809 } },
          { name: "Nick Richards", min: 3, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.8, zScores: { pts: -0.875, reb: -1.18, ast: -0.529, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: 0.392, ftImpact: 0, to: 0.809 } },
          { name: "Tim Hardaway Jr.", min: 21, pts: 8, reb: 4, ast: 1, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 2, fga: 7, ftm: 2, fta: 4, composite: -4.76, zScores: { pts: -0.245, reb: 0.042, ast: -0.529, stl: -0.772, blk: -0.548, tpm: 0.702, fgImpact: -0.898, ftImpact: -1.651, to: -0.86 } },
          { name: "Dru Smith", min: 6, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.7, zScores: { pts: -0.875, reb: -1.18, ast: -0.529, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: 0.056, ftImpact: 0, to: 0.253 } },
          { name: "Pelle Larsson", min: 29, pts: 7, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 7, ftm: 4, fta: 4, composite: -1.83, zScores: { pts: -0.371, reb: -0.569, ast: -0.529, stl: 0.197, blk: -0.548, tpm: -0.102, fgImpact: -1.626, ftImpact: 1.467, to: 0.253 } },
          { name: "Ryan Conwell", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.48, zScores: { pts: -1.001, reb: -1.18, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0.056, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401909096",
      line: "Houston Rockets 114 @ San Antonio Spurs 110 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "HOU", name: "Houston Rockets", score: 114,
        players: [
          { name: "Kevin Durant", min: 37, pts: 20, reb: 7, ast: 6, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 10, ftm: 8, fta: 8, composite: 5.47, zScores: { pts: 1.267, reb: 0.959, ast: 1.508, stl: -0.772, blk: -0.548, tpm: 0.702, fgImpact: 0.278, ftImpact: 2.933, to: -0.86 } },
          { name: "Jabari Smith Jr.", min: 34, pts: 7, reb: 5, ast: 1, stl: 1, blk: 2, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: 1.55, zScores: { pts: -0.371, reb: 0.348, ast: -0.529, stl: 0.197, blk: 1.807, tpm: -0.102, fgImpact: -0.225, ftImpact: 0.733, to: -0.304 } },
          { name: "Alperen Sengun", min: 36, pts: 29, reb: 7, ast: 7, stl: 0, blk: 1, to: 3, tpm: 2, fgm: 10, fga: 20, ftm: 7, fta: 8, composite: 6.91, zScores: { pts: 2.401, reb: 0.959, ast: 1.915, stl: -0.772, blk: 0.629, tpm: 0.702, fgImpact: 0.556, ftImpact: 1.374, to: -0.86 } },
          { name: "Fred VanVleet", min: 32, pts: 14, reb: 3, ast: 5, stl: 3, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 10, ftm: 3, fta: 4, composite: 4.71, zScores: { pts: 0.511, reb: -0.263, ast: 1.1, stl: 2.136, blk: -0.548, tpm: 1.507, fgImpact: -0.45, ftImpact: -0.092, to: 0.809 } },
          { name: "Amen Thompson", min: 36, pts: 20, reb: 10, ast: 4, stl: 2, blk: 2, to: 2, tpm: 1, fgm: 9, fga: 15, ftm: 1, fta: 1, composite: 8.28, zScores: { pts: 1.267, reb: 1.875, ast: 0.693, stl: 1.167, blk: 1.807, tpm: -0.102, fgImpact: 1.509, ftImpact: 0.367, to: -0.304 } },
          { name: "Tari Eason", min: 27, pts: 12, reb: 6, ast: 0, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 4, fta: 4, composite: 2.6, zScores: { pts: 0.259, reb: 0.653, ast: -0.936, stl: 2.136, blk: -0.548, tpm: -0.907, fgImpact: 0.222, ftImpact: 1.467, to: 0.253 } },
          { name: "Steven Adams", min: 9, pts: 4, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.51, zScores: { pts: -0.749, reb: -0.569, ast: -0.529, stl: 0.197, blk: -0.548, tpm: -0.907, fgImpact: 0.784, ftImpact: 0, to: 0.809 } },
          { name: "Marcus Smart", min: 21, pts: 5, reb: 3, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 6, ftm: 3, fta: 4, composite: -4.92, zScores: { pts: -0.623, reb: -0.263, ast: -0.529, stl: 0.197, blk: -0.548, tpm: -0.907, fgImpact: -1.29, ftImpact: -0.092, to: -0.86 } },
          { name: "Bogdan Bogdanovic", min: 9, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -0.875, reb: -0.874, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: 0.056, ftImpact: 0, to: 0.253 } }
        ]
      },
      home: {
        abbr: "SA", name: "San Antonio Spurs", score: 110,
        players: [
          { name: "Victor Wembanyama", min: 32, pts: 25, reb: 13, ast: 2, stl: 0, blk: 2, to: 2, tpm: 2, fgm: 9, fga: 21, ftm: 5, fta: 8, composite: 3.75, zScores: { pts: 1.897, reb: 2.792, ast: -0.121, stl: -0.772, blk: 1.807, tpm: 0.702, fgImpact: -0.509, ftImpact: -1.744, to: -0.304 } },
          { name: "De'Aaron Fox", min: 34, pts: 19, reb: 4, ast: 9, stl: 2, blk: 0, to: 5, tpm: 2, fgm: 6, fga: 11, ftm: 5, fta: 5, composite: 5.76, zScores: { pts: 1.141, reb: 0.042, ast: 2.73, stl: 1.167, blk: -0.548, tpm: 0.702, fgImpact: 0.67, ftImpact: 1.833, to: -1.973 } },
          { name: "Devin Vassell", min: 36, pts: 10, reb: 4, ast: 2, stl: 3, blk: 0, to: 5, tpm: 2, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: 0.47, zScores: { pts: 0.007, reb: 0.042, ast: -0.121, stl: 2.136, blk: -0.548, tpm: 0.702, fgImpact: -0.506, ftImpact: 0.733, to: -1.973 } },
          { name: "Stephon Castle", min: 33, pts: 15, reb: 7, ast: 5, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 15, ftm: 0, fta: 1, composite: 2.24, zScores: { pts: 0.637, reb: 0.959, ast: 1.1, stl: 0.197, blk: -0.548, tpm: 1.507, fgImpact: -0.675, ftImpact: -1.192, to: 0.253 } },
          { name: "Dylan Harper", min: 36, pts: 20, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 8, fga: 15, ftm: 3, fta: 4, composite: 0.96, zScores: { pts: 1.267, reb: -0.263, ast: -0.121, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: 0.781, ftImpact: -0.092, to: 0.809 } },
          { name: "Harrison Barnes", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.46, zScores: { pts: -1.253, reb: -1.18, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: -0.673, ftImpact: 0, to: 0.809 } },
          { name: "Keldon Johnson", min: 19, pts: 8, reb: 6, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -0.57, zScores: { pts: -0.245, reb: 0.653, ast: -0.529, stl: 0.197, blk: -0.548, tpm: -0.907, fgImpact: 0.559, ftImpact: 0, to: 0.253 } },
          { name: "Julian Champagnie", min: 25, pts: 6, reb: 0, ast: 0, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.29, zScores: { pts: -0.497, reb: -1.18, ast: -0.936, stl: 2.136, blk: -0.548, tpm: 0.702, fgImpact: -0.225, ftImpact: 0, to: 0.253 } },
          { name: "Carter Bryant", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.79, zScores: { pts: -1.253, reb: -1.18, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Luke Kornet", min: 16, pts: 7, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 3, fta: 5, composite: -2.65, zScores: { pts: -0.371, reb: -0.263, ast: -0.936, stl: -0.772, blk: 0.629, tpm: -0.907, fgImpact: 0.448, ftImpact: -1.285, to: 0.809 } }
        ]
      }
    },
      {
      id: "401909849",
      line: "New Orleans Pelicans 119 @ Utah Jazz 120 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NO", name: "New Orleans Pelicans", score: 119,
        players: [
          { name: "Zion Williamson", min: 33, pts: 23, reb: 5, ast: 2, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 8, fga: 12, ftm: 7, fta: 8, composite: 5.41, zScores: { pts: 1.645, reb: 0.348, ast: -0.121, stl: 2.136, blk: -0.548, tpm: -0.907, fgImpact: 1.79, ftImpact: 1.374, to: -0.304 } },
          { name: "Trey Murphy III", min: 31, pts: 9, reb: 6, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -0.05, zScores: { pts: -0.119, reb: 0.653, ast: 0.286, stl: 0.197, blk: -0.548, tpm: -0.102, fgImpact: -0.114, ftImpact: 0, to: -0.304 } },
          { name: "Yves Missi", min: 9, pts: 6, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -1.37, zScores: { pts: -0.497, reb: -0.874, ast: -0.936, stl: -0.772, blk: 0.629, tpm: -0.907, fgImpact: 1.176, ftImpact: 0, to: 0.809 } },
          { name: "Dejounte Murray", min: 30, pts: 16, reb: 6, ast: 6, stl: 3, blk: 0, to: 3, tpm: 0, fgm: 7, fga: 15, ftm: 2, fta: 2, composite: 3.53, zScores: { pts: 0.763, reb: 0.653, ast: 1.508, stl: 2.136, blk: -0.548, tpm: -0.907, fgImpact: 0.053, ftImpact: 0.733, to: -0.86 } },
          { name: "Jeremiah Fears", min: 24, pts: 7, reb: 0, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -3.68, zScores: { pts: -0.371, reb: -1.18, ast: -0.529, stl: 0.197, blk: -0.548, tpm: -0.102, fgImpact: -0.842, ftImpact: 0, to: -0.304 } },
          { name: "Herbert Jones", min: 18, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.24, zScores: { pts: -0.875, reb: -0.874, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: 0.056, ftImpact: 0, to: 0.809 } },
          { name: "Karlo Matkovic", min: 9, pts: 7, reb: 4, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 1, fta: 2, composite: 0.01, zScores: { pts: -0.371, reb: 0.042, ast: -0.529, stl: 1.167, blk: -0.548, tpm: -0.907, fgImpact: 1.176, ftImpact: -0.826, to: 0.809 } },
          { name: "Derik Queen", min: 29, pts: 12, reb: 7, ast: 2, stl: 2, blk: 2, to: 2, tpm: 1, fgm: 4, fga: 9, ftm: 3, fta: 4, composite: 3.46, zScores: { pts: 0.259, reb: 0.959, ast: -0.121, stl: 1.167, blk: 1.807, tpm: -0.102, fgImpact: -0.114, ftImpact: -0.092, to: -0.304 } },
          { name: "Jordan Poole", min: 19, pts: 12, reb: 2, ast: 2, stl: 3, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 8, ftm: 9, fta: 10, composite: 3.19, zScores: { pts: 0.259, reb: -0.569, ast: -0.121, stl: 2.136, blk: 0.629, tpm: -0.102, fgImpact: -1.962, ftImpact: 2.108, to: 0.809 } },
          { name: "Saddiq Bey", min: 22, pts: 20, reb: 3, ast: 1, stl: 0, blk: 1, to: 2, tpm: 3, fgm: 8, fga: 12, ftm: 1, fta: 1, composite: 3.69, zScores: { pts: 1.267, reb: -0.263, ast: -0.529, stl: -0.772, blk: 0.629, tpm: 1.507, fgImpact: 1.79, ftImpact: 0.367, to: -0.304 } },
          { name: "Bennedict Mathurin", min: 15, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -5.01, zScores: { pts: -0.749, reb: -0.569, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: -0.225, ftImpact: 0, to: -0.304 } }
        ]
      },
      home: {
        abbr: "UTAH", name: "Utah Jazz", score: 120,
        players: [
          { name: "Lauri Markkanen", min: 34, pts: 16, reb: 6, ast: 3, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 13, ftm: 0, fta: 0, composite: 3.91, zScores: { pts: 0.763, reb: 0.653, ast: 0.286, stl: 0.197, blk: -0.548, tpm: 2.312, fgImpact: -0.003, ftImpact: 0, to: 0.253 } },
          { name: "Jaren Jackson Jr.", min: 33, pts: 24, reb: 10, ast: 3, stl: 0, blk: 3, to: 3, tpm: 2, fgm: 7, fga: 15, ftm: 8, fta: 10, composite: 6.59, zScores: { pts: 1.771, reb: 1.875, ast: 0.286, stl: -0.772, blk: 2.984, tpm: 0.702, fgImpact: 0.053, ftImpact: 0.549, to: -0.86 } },
          { name: "Keyonte George", min: 32, pts: 19, reb: 1, ast: 10, stl: 1, blk: 0, to: 6, tpm: 3, fgm: 6, fga: 12, ftm: 4, fta: 6, composite: 1.45, zScores: { pts: 1.141, reb: -0.874, ast: 3.137, stl: 0.197, blk: -0.548, tpm: 1.507, fgImpact: 0.334, ftImpact: -0.918, to: -2.529 } },
          { name: "Ace Bailey", min: 22, pts: 6, reb: 7, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 8, ftm: 1, fta: 2, composite: -2.89, zScores: { pts: -0.497, reb: 0.959, ast: -0.121, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: -1.234, ftImpact: -0.826, to: 0.253 } },
          { name: "Darryn Peterson", min: 30, pts: 15, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 6, fga: 12, ftm: 2, fta: 2, composite: 0.3, zScores: { pts: 0.637, reb: -0.263, ast: -0.529, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: 0.334, ftImpact: 0.733, to: 0.809 } },
          { name: "Kyle Filipowski", min: 8, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.52, zScores: { pts: -1.253, reb: -0.874, ast: -0.936, stl: 0.197, blk: -0.548, tpm: -0.907, fgImpact: -0.336, ftImpact: 0, to: -0.86 } },
          { name: "Brice Sensabaugh", min: 16, pts: 10, reb: 3, ast: 2, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 1.33, zScores: { pts: 0.007, reb: -0.263, ast: -0.121, stl: -0.772, blk: 0.629, tpm: 0.702, fgImpact: 0.167, ftImpact: 0.733, to: 0.253 } },
          { name: "Jaxson Hayes", min: 26, pts: 17, reb: 5, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 7, fga: 8, ftm: 3, fta: 3, composite: 4.38, zScores: { pts: 0.889, reb: 0.348, ast: -0.121, stl: -0.772, blk: 0.629, tpm: -0.907, fgImpact: 2.407, ftImpact: 1.1, to: 0.809 } },
          { name: "Svi Mykhailiuk", min: 21, pts: 3, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -3.81, zScores: { pts: -0.875, reb: 0.042, ast: -0.529, stl: 0.197, blk: -0.548, tpm: -0.907, fgImpact: -0.617, ftImpact: -0.826, to: 0.253 } },
          { name: "Isaiah Collier", min: 18, pts: 10, reb: 2, ast: 7, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 4, fta: 6, composite: -1.59, zScores: { pts: 0.007, reb: -0.569, ast: 1.915, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0.503, ftImpact: -0.918, to: -0.304 } }
        ]
      }
    },
      {
      id: "401909850",
      line: "Memphis Grizzlies 111 @ Golden State Warriors 108 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MEM", name: "Memphis Grizzlies", score: 111,
        players: [
          { name: "Cameron Boozer", min: 37, pts: 25, reb: 13, ast: 6, stl: 2, blk: 0, to: 6, tpm: 4, fgm: 6, fga: 13, ftm: 9, fta: 9, composite: 9.9, zScores: { pts: 1.897, reb: 2.792, ast: 1.508, stl: 1.167, blk: -0.548, tpm: 2.312, fgImpact: -0.003, ftImpact: 3.3, to: -2.529 } },
          { name: "GG Jackson", min: 15, pts: 2, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 1, composite: -5.94, zScores: { pts: -1.001, reb: 0.042, ast: -0.529, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: -1.29, ftImpact: -1.192, to: 0.253 } },
          { name: "Jaylen Wells", min: 25, pts: 17, reb: 4, ast: 3, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 9, ftm: 3, fta: 5, composite: 1.79, zScores: { pts: 0.889, reb: 0.042, ast: 0.286, stl: -0.772, blk: -0.548, tpm: 2.312, fgImpact: 0.614, ftImpact: -1.285, to: 0.253 } },
          { name: "Zach Edey", min: 22, pts: 8, reb: 10, ast: 3, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 1, composite: 3.52, zScores: { pts: -0.245, reb: 1.875, ast: 0.286, stl: 0.197, blk: 1.807, tpm: -0.907, fgImpact: 0.895, ftImpact: -1.192, to: 0.809 } },
          { name: "Ty Jerome", min: 32, pts: 28, reb: 2, ast: 5, stl: 1, blk: 0, to: 4, tpm: 3, fgm: 11, fga: 22, ftm: 3, fta: 5, composite: 1.87, zScores: { pts: 2.275, reb: -0.569, ast: 1.1, stl: 0.197, blk: -0.548, tpm: 1.507, fgImpact: 0.612, ftImpact: -1.285, to: -1.416 } },
          { name: "Jerami Grant", min: 26, pts: 6, reb: 0, ast: 3, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 9, ftm: 1, fta: 1, composite: -1.2, zScores: { pts: -0.497, reb: -1.18, ast: 0.286, stl: 1.167, blk: 0.629, tpm: -0.102, fgImpact: -1.571, ftImpact: 0.367, to: -0.304 } },
          { name: "Kris Murray", min: 13, pts: 0, reb: 3, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.96, zScores: { pts: -1.253, reb: -0.263, ast: -0.529, stl: -0.772, blk: 0.629, tpm: -0.907, fgImpact: -0.673, ftImpact: 0, to: 0.809 } },
          { name: "Isaiah Stewart", min: 16, pts: 4, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.37, zScores: { pts: -0.749, reb: -0.569, ast: -0.936, stl: 0.197, blk: -0.548, tpm: -0.907, fgImpact: 0.448, ftImpact: 0, to: -0.304 } },
          { name: "Quinten Post", min: 20, pts: 2, reb: 1, ast: 1, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.86, zScores: { pts: -1.001, reb: -0.874, ast: -0.529, stl: -0.772, blk: 1.807, tpm: -0.907, fgImpact: -0.281, ftImpact: 0, to: -0.304 } },
          { name: "Scotty Pippen Jr.", min: 17, pts: 8, reb: 6, ast: 3, stl: 0, blk: 1, to: 5, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: -1.43, zScores: { pts: -0.245, reb: 0.653, ast: 0.286, stl: -0.772, blk: 0.629, tpm: -0.907, fgImpact: 0.895, ftImpact: 0, to: -1.973 } },
          { name: "Cam Spencer", min: 17, pts: 11, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -0.52, zScores: { pts: 0.133, reb: -0.569, ast: -0.529, stl: -0.772, blk: -0.548, tpm: 1.507, fgImpact: 0.559, ftImpact: 0, to: -0.304 } }
        ]
      },
      home: {
        abbr: "GS", name: "Golden State Warriors", score: 108,
        players: [
          { name: "Draymond Green", min: 31, pts: 5, reb: 5, ast: 6, stl: 0, blk: 1, to: 5, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.87, zScores: { pts: -0.623, reb: 0.348, ast: 1.508, stl: -0.772, blk: 0.629, tpm: -0.102, fgImpact: 0.111, ftImpact: 0, to: -1.973 } },
          { name: "Graham Ike", min: 12, pts: 10, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 0.63, zScores: { pts: 0.007, reb: -0.569, ast: -0.529, stl: 0.197, blk: -0.548, tpm: 0.702, fgImpact: 0.559, ftImpact: 0, to: 0.809 } },
          { name: "Yaxel Lendeborg", min: 37, pts: 18, reb: 13, ast: 6, stl: 3, blk: 0, to: 6, tpm: 1, fgm: 4, fga: 11, ftm: 9, fta: 12, composite: 3.21, zScores: { pts: 1.015, reb: 2.792, ast: 1.508, stl: 2.136, blk: -0.548, tpm: -0.102, fgImpact: -0.787, ftImpact: -0.277, to: -2.529 } },
          { name: "Stephen Curry", min: 30, pts: 24, reb: 2, ast: 4, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 15, ftm: 11, fta: 11, composite: 5.52, zScores: { pts: 1.771, reb: -0.569, ast: 0.693, stl: -0.772, blk: -0.548, tpm: 1.507, fgImpact: -1.404, ftImpact: 4.033, to: 0.809 } },
          { name: "Brandin Podziemski", min: 33, pts: 18, reb: 2, ast: 3, stl: 3, blk: 1, to: 4, tpm: 2, fgm: 7, fga: 17, ftm: 2, fta: 2, composite: 2.9, zScores: { pts: 1.015, reb: -0.569, ast: 0.286, stl: 2.136, blk: 0.629, tpm: 0.702, fgImpact: -0.62, ftImpact: 0.733, to: -1.416 } },
          { name: "Georges Niang", min: 13, pts: 4, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -3.18, zScores: { pts: -0.749, reb: -0.263, ast: -0.936, stl: 0.197, blk: -0.548, tpm: -0.907, fgImpact: -0.225, ftImpact: 0, to: 0.253 } },
          { name: "Gui Santos", min: 20, pts: 5, reb: 4, ast: 2, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: 1.28, zScores: { pts: -0.623, reb: 0.042, ast: -0.121, stl: 0.197, blk: 0.629, tpm: -0.102, fgImpact: -0.281, ftImpact: 0.733, to: 0.809 } },
          { name: "Al Horford", min: 19, pts: 3, reb: 5, ast: 0, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 0, zScores: { pts: -0.875, reb: 0.348, ast: -0.936, stl: -0.772, blk: 1.807, tpm: -0.102, fgImpact: -0.281, ftImpact: 0, to: 0.809 } },
          { name: "Gary Payton II", min: 11, pts: 7, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -2.88, zScores: { pts: -0.371, reb: -0.569, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: 0.167, ftImpact: 0, to: 0.253 } },
          { name: "De'Anthony Melton", min: 20, pts: 10, reb: 1, ast: 0, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 1.43, zScores: { pts: 0.007, reb: -0.874, ast: -0.936, stl: 0.197, blk: 0.629, tpm: 0.702, fgImpact: 0.895, ftImpact: 0, to: 0.809 } },
          { name: "Brandon Williams", min: 9, pts: 4, reb: 2, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -3.63, zScores: { pts: -0.749, reb: -0.569, ast: -0.529, stl: 0.197, blk: -0.548, tpm: -0.907, fgImpact: -0.953, ftImpact: 0.733, to: -0.304 } },
          { name: "Will Richard", min: 3, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.15, zScores: { pts: -1.253, reb: -1.18, ast: -0.936, stl: 0.197, blk: -0.548, tpm: -0.907, fgImpact: -0.336, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401909851",
      line: "LA Clippers 117 @ Los Angeles Lakers 125 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LAC", name: "LA Clippers", score: 117,
        players: [
          { name: "Derrick Jones Jr.", min: 35, pts: 16, reb: 4, ast: 1, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 13, ftm: 1, fta: 2, composite: 2.38, zScores: { pts: 0.763, reb: 0.042, ast: -0.529, stl: 1.167, blk: -0.548, tpm: 1.507, fgImpact: -0.003, ftImpact: -0.826, to: 0.809 } },
          { name: "Rui Hachimura", min: 33, pts: 16, reb: 6, ast: 1, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 14, ftm: 3, fta: 4, composite: 1.55, zScores: { pts: 0.763, reb: 0.653, ast: -0.529, stl: 1.167, blk: -0.548, tpm: 1.507, fgImpact: -1.067, ftImpact: -0.092, to: -0.304 } },
          { name: "Isaiah Jackson", min: 28, pts: 6, reb: 6, ast: 3, stl: 3, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 1.94, zScores: { pts: -0.497, reb: 0.653, ast: 0.286, stl: 2.136, blk: 0.629, tpm: -0.907, fgImpact: 0.503, ftImpact: 0, to: -0.86 } },
          { name: "Kris Dunn", min: 34, pts: 7, reb: 5, ast: 5, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 1.46, zScores: { pts: -0.371, reb: 0.348, ast: 1.1, stl: 1.167, blk: -0.548, tpm: -0.102, fgImpact: 0.167, ftImpact: 0, to: -0.304 } },
          { name: "Darius Garland", min: 37, pts: 26, reb: 0, ast: 6, stl: 1, blk: 0, to: 9, tpm: 4, fgm: 9, fga: 19, ftm: 4, fta: 5, composite: 0.55, zScores: { pts: 2.023, reb: -1.18, ast: 1.508, stl: 0.197, blk: -0.548, tpm: 2.312, fgImpact: 0.164, ftImpact: 0.274, to: -4.199 } },
          { name: "Brook Lopez", min: 20, pts: 22, reb: 4, ast: 0, stl: 0, blk: 3, to: 2, tpm: 2, fgm: 8, fga: 9, ftm: 4, fta: 5, composite: 6.31, zScores: { pts: 1.519, reb: 0.042, ast: -0.936, stl: -0.772, blk: 2.984, tpm: 0.702, fgImpact: 2.799, ftImpact: 0.274, to: -0.304 } },
          { name: "Kobe Sanders", min: 19, pts: 5, reb: 3, ast: 5, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.43, zScores: { pts: -0.623, reb: -0.263, ast: 1.1, stl: 0.197, blk: -0.548, tpm: -0.102, fgImpact: 0.111, ftImpact: 0, to: -0.304 } },
          { name: "Gradey Dick", min: 12, pts: 6, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -1.89, zScores: { pts: -0.497, reb: 0.042, ast: -0.936, stl: 0.197, blk: -0.548, tpm: -0.907, fgImpact: 0.503, ftImpact: 0, to: 0.253 } },
          { name: "Keaton Wagler", min: 24, pts: 13, reb: 3, ast: 3, stl: 1, blk: 0, to: 4, tpm: 2, fgm: 2, fga: 8, ftm: 7, fta: 9, composite: -1.71, zScores: { pts: 0.385, reb: -0.263, ast: 0.286, stl: 0.197, blk: -0.548, tpm: 0.702, fgImpact: -1.234, ftImpact: 0.182, to: -1.416 } }
        ]
      },
      home: {
        abbr: "LAL", name: "Los Angeles Lakers", score: 125,
        players: [
          { name: "Ziaire Williams", min: 31, pts: 14, reb: 5, ast: 0, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 5, fga: 7, ftm: 3, fta: 3, composite: 4.81, zScores: { pts: 0.511, reb: 0.348, ast: -0.936, stl: 1.167, blk: 0.629, tpm: -0.102, fgImpact: 1.287, ftImpact: 1.1, to: 0.809 } },
          { name: "Walker Kessler", min: 35, pts: 22, reb: 8, ast: 3, stl: 3, blk: 6, to: 1, tpm: 0, fgm: 10, fga: 14, ftm: 2, fta: 5, composite: 10.8, zScores: { pts: 1.519, reb: 1.264, ast: 0.286, stl: 2.136, blk: 6.516, tpm: -0.907, fgImpact: 2.574, ftImpact: -2.844, to: 0.253 } },
          { name: "Matisse Thybulle", min: 24, pts: 13, reb: 1, ast: 2, stl: 2, blk: 1, to: 0, tpm: 3, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 4.45, zScores: { pts: 0.385, reb: -0.874, ast: -0.121, stl: 1.167, blk: 0.629, tpm: 1.507, fgImpact: 0.951, ftImpact: 0, to: 0.809 } },
          { name: "Luka Doncic", min: 37, pts: 23, reb: 6, ast: 7, stl: 0, blk: 1, to: 11, tpm: 2, fgm: 8, fga: 21, ftm: 5, fta: 7, composite: -2.33, zScores: { pts: 1.645, reb: 0.653, ast: 1.915, stl: -0.772, blk: 0.629, tpm: 0.702, fgImpact: -1.237, ftImpact: -0.551, to: -5.311 } },
          { name: "Austin Reaves", min: 38, pts: 28, reb: 2, ast: 9, stl: 2, blk: 0, to: 6, tpm: 3, fgm: 10, fga: 13, ftm: 5, fta: 6, composite: 7.58, zScores: { pts: 2.275, reb: -0.569, ast: 2.73, stl: 1.167, blk: -0.548, tpm: 1.507, fgImpact: 2.91, ftImpact: 0.641, to: -2.529 } },
          { name: "Kevon Looney", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.48, zScores: { pts: -1.253, reb: -0.874, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Sandro Mamukelashvili", min: 24, pts: 7, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 0.08, zScores: { pts: -0.371, reb: 0.348, ast: -0.121, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: 0.839, ftImpact: 0, to: 0.809 } },
          { name: "Collin Sexton", min: 16, pts: 5, reb: 1, ast: 2, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -0.44, zScores: { pts: -0.623, reb: -0.874, ast: -0.121, stl: 2.136, blk: -0.548, tpm: -0.102, fgImpact: -0.561, ftImpact: 0, to: 0.253 } },
          { name: "Quentin Grimes", min: 31, pts: 13, reb: 8, ast: 4, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 6, ftm: 4, fta: 4, composite: 4.83, zScores: { pts: 0.385, reb: 1.264, ast: 0.693, stl: 0.197, blk: -0.548, tpm: 1.507, fgImpact: 0.167, ftImpact: 1.467, to: -0.304 } }
        ]
      }
    },
      {
      id: "401909852",
      line: "Portland Trail Blazers 128 @ Sacramento Kings 120 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "POR", name: "Portland Trail Blazers", score: 128,
        players: [
          { name: "Toumani Camara", min: 27, pts: 19, reb: 3, ast: 1, stl: 2, blk: 0, to: 0, tpm: 5, fgm: 7, fga: 12, ftm: 0, fta: 0, composite: 5.96, zScores: { pts: 1.141, reb: -0.263, ast: -0.529, stl: 1.167, blk: -0.548, tpm: 3.117, fgImpact: 1.062, ftImpact: 0, to: 0.809 } },
          { name: "Deni Avdija", min: 38, pts: 26, reb: 7, ast: 6, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 8, fga: 16, ftm: 9, fta: 12, composite: 3.34, zScores: { pts: 2.023, reb: 0.959, ast: 1.508, stl: 0.197, blk: -0.548, tpm: -0.102, fgImpact: 0.445, ftImpact: -0.277, to: -0.86 } },
          { name: "Donovan Clingan", min: 21, pts: 8, reb: 10, ast: 3, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 5.27, zScores: { pts: -0.245, reb: 1.875, ast: 0.286, stl: -0.772, blk: 2.984, tpm: -0.907, fgImpact: 0.503, ftImpact: 0.733, to: 0.809 } },
          { name: "Damian Lillard", min: 33, pts: 19, reb: 5, ast: 2, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 18, ftm: 3, fta: 3, composite: 2.53, zScores: { pts: 1.141, reb: 0.348, ast: -0.121, stl: 1.167, blk: -0.548, tpm: 0.702, fgImpact: -0.956, ftImpact: 1.1, to: -0.304 } },
          { name: "Ja Morant", min: 27, pts: 12, reb: 3, ast: 7, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 13, ftm: 1, fta: 2, composite: -0.4, zScores: { pts: 0.259, reb: -0.263, ast: 1.915, stl: 0.197, blk: -0.548, tpm: -0.102, fgImpact: -0.731, ftImpact: -0.826, to: -0.304 } },
          { name: "Robert Williams III", min: 18, pts: 13, reb: 6, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 6, fga: 6, ftm: 1, fta: 2, composite: 0.27, zScores: { pts: 0.385, reb: 0.653, ast: -0.936, stl: -0.772, blk: 0.629, tpm: -0.907, fgImpact: 2.352, ftImpact: -0.826, to: -0.304 } },
          { name: "Jrue Holiday", min: 26, pts: 12, reb: 1, ast: 8, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 4, fga: 10, ftm: 1, fta: 2, composite: 3.57, zScores: { pts: 0.259, reb: -0.874, ast: 2.322, stl: 0.197, blk: 0.629, tpm: 1.507, fgImpact: -0.45, ftImpact: -0.826, to: 0.809 } },
          { name: "Vit Krejci", min: 3, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.51, zScores: { pts: -1.253, reb: -0.569, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: -0.336, ftImpact: 0, to: 0.809 } },
          { name: "Scoot Henderson", min: 21, pts: 4, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 7, ftm: 2, fta: 2, composite: -4.06, zScores: { pts: -0.749, reb: -0.874, ast: -0.121, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: -1.626, ftImpact: 0.733, to: 0.809 } },
          { name: "Sidy Cissoko", min: 26, pts: 15, reb: 7, ast: 1, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 8, ftm: 3, fta: 5, composite: 1.89, zScores: { pts: 0.637, reb: 0.959, ast: -0.529, stl: 0.197, blk: -0.548, tpm: 0.702, fgImpact: 0.951, ftImpact: -1.285, to: 0.809 } }
        ]
      },
      home: {
        abbr: "SAC", name: "Sacramento Kings", score: 120,
        players: [
          { name: "Domantas Sabonis", min: 39, pts: 27, reb: 19, ast: 10, stl: 0, blk: 0, to: 5, tpm: 1, fgm: 10, fga: 13, ftm: 6, fta: 7, composite: 10.43, zScores: { pts: 2.149, reb: 4.625, ast: 3.137, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: 2.91, ftImpact: 1.008, to: -1.973 } },
          { name: "De'Andre Hunter", min: 25, pts: 4, reb: 7, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.63, zScores: { pts: -0.749, reb: 0.959, ast: -0.529, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0.111, ftImpact: 0, to: 0.809 } },
          { name: "Keegan Murray", min: 26, pts: 12, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 9, ftm: 4, fta: 4, composite: -0.49, zScores: { pts: 0.259, reb: -0.569, ast: -0.529, stl: 0.197, blk: -0.548, tpm: -0.907, fgImpact: -0.114, ftImpact: 1.467, to: 0.253 } },
          { name: "Zach LaVine", min: 39, pts: 22, reb: 5, ast: 1, stl: 2, blk: 1, to: 3, tpm: 3, fgm: 6, fga: 15, ftm: 7, fta: 7, composite: 5.67, zScores: { pts: 1.519, reb: 0.348, ast: -0.529, stl: 1.167, blk: 0.629, tpm: 1.507, fgImpact: -0.675, ftImpact: 2.567, to: -0.86 } },
          { name: "Darius Acuff Jr.", min: 37, pts: 33, reb: 2, ast: 4, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 10, fga: 26, ftm: 11, fta: 12, composite: 2.93, zScores: { pts: 2.906, reb: -0.569, ast: 0.693, stl: -0.772, blk: -0.548, tpm: 0.702, fgImpact: -1.462, ftImpact: 2.841, to: -0.86 } },
          { name: "Precious Achiuwa", min: 26, pts: 14, reb: 6, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 11, ftm: 0, fta: 0, composite: 2, zScores: { pts: 0.511, reb: 0.653, ast: -0.529, stl: 1.167, blk: -0.548, tpm: -0.907, fgImpact: 1.398, ftImpact: 0, to: 0.253 } },
          { name: "Malik Monk", min: 12, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 6, ftm: 0, fta: 0, composite: -6.24, zScores: { pts: -1.253, reb: -0.874, ast: -0.121, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: -2.018, ftImpact: 0, to: 0.253 } },
          { name: "Daeqwon Plowden", min: 20, pts: 3, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.37, zScores: { pts: -0.875, reb: -1.18, ast: -0.936, stl: -0.772, blk: 0.629, tpm: -0.102, fgImpact: 0.056, ftImpact: 0, to: 0.809 } },
          { name: "Nique Clifford", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.79, zScores: { pts: -1.253, reb: -1.18, ast: -0.936, stl: -0.772, blk: -0.548, tpm: -0.907, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Emanuel Sharp", min: 14, pts: 5, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -3.17, zScores: { pts: -0.623, reb: -1.18, ast: -0.529, stl: -0.772, blk: -0.548, tpm: -0.102, fgImpact: -0.225, ftImpact: 0, to: 0.809 } }
        ]
      }
    }
    ]
  },
    "2026-10-24": {
    games: [
      {
      id: "401909853",
      line: "Miami Heat 110 @ Charlotte Hornets 115 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIA", name: "Miami Heat", score: 110,
        players: [
          { name: "Giannis Antetokounmpo", min: 25, pts: 14, reb: 6, ast: 3, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 11, ftm: 6, fta: 8, composite: -3.15, zScores: { pts: 0.285, reb: 0.531, ast: 0.159, stl: 0.215, blk: -0.528, tpm: -0.9, fgImpact: -0.986, ftImpact: -0.763, to: -1.158 } },
          { name: "Andrew Wiggins", min: 18, pts: 4, reb: 1, ast: 1, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.52, zScores: { pts: -0.843, reb: -1.01, ast: -0.592, stl: 0.215, blk: 1.833, tpm: -0.9, fgImpact: -0.291, ftImpact: 0, to: 1.071 } },
          { name: "Bam Adebayo", min: 39, pts: 20, reb: 8, ast: 4, stl: 1, blk: 1, to: 4, tpm: 2, fgm: 7, fga: 17, ftm: 4, fta: 4, composite: 2.46, zScores: { pts: 0.962, reb: 1.147, ast: 0.535, stl: 0.215, blk: 0.653, tpm: 0.448, fgImpact: -0.815, ftImpact: 1.212, to: -1.901 } },
          { name: "Klay Thompson", min: 27, pts: 14, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: 0.21, zScores: { pts: 0.285, reb: -0.393, ast: -0.968, stl: 0.215, blk: -0.528, tpm: 1.797, fgImpact: -0.525, ftImpact: 0, to: 0.328 } },
          { name: "Davion Mitchell", min: 37, pts: 22, reb: 1, ast: 10, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 8, fga: 13, ftm: 3, fta: 3, composite: 5.94, zScores: { pts: 1.188, reb: -1.01, ast: 2.79, stl: 0.215, blk: -0.528, tpm: 1.123, fgImpact: 1.67, ftImpact: 0.909, to: -0.415 } },
          { name: "Bobby Portis", min: 27, pts: 13, reb: 8, ast: 0, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 10, ftm: 3, fta: 3, composite: 2.22, zScores: { pts: 0.173, reb: 1.147, ast: -0.968, stl: 1.29, blk: -0.528, tpm: 0.448, fgImpact: -0.582, ftImpact: 0.909, to: 0.328 } },
          { name: "Nikola Jovic", min: 6, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.59, zScores: { pts: -1.294, reb: -0.702, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: -0.405, ftImpact: 0, to: 1.071 } },
          { name: "Tim Hardaway Jr.", min: 21, pts: 5, reb: 0, ast: 0, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 3, fta: 3, composite: -1.45, zScores: { pts: -0.73, reb: -1.318, ast: -0.968, stl: 0.215, blk: 1.833, tpm: -0.9, fgImpact: -1.562, ftImpact: 0.909, to: 1.071 } },
          { name: "Pelle Larsson", min: 36, pts: 15, reb: 7, ast: 4, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 9, ftm: 4, fta: 4, composite: 2.72, zScores: { pts: 0.398, reb: 0.839, ast: 0.535, stl: 0.215, blk: -0.528, tpm: -0.226, fgImpact: 0.69, ftImpact: 1.212, to: -0.415 } },
          { name: "Ryan Conwell", min: 4, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.42, zScores: { pts: -0.956, reb: -1.01, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.226, fgImpact: 0.057, ftImpact: 0, to: 1.071 } }
        ]
      },
      home: {
        abbr: "CHA", name: "Charlotte Hornets", score: 115,
        players: [
          { name: "Moussa Diabate", min: 22, pts: 4, reb: 5, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.13, zScores: { pts: -0.843, reb: 0.223, ast: -0.217, stl: 1.29, blk: -0.528, tpm: -0.9, fgImpact: 0.519, ftImpact: 0, to: 0.328 } },
          { name: "Brandon Miller", min: 36, pts: 34, reb: 8, ast: 4, stl: 0, blk: 1, to: 5, tpm: 3, fgm: 10, fga: 29, ftm: 11, fta: 12, composite: 1.47, zScores: { pts: 2.542, reb: 1.147, ast: 0.535, stl: -0.86, blk: 0.653, tpm: 1.123, fgImpact: -3.073, ftImpact: 2.043, to: -2.644 } },
          { name: "Naz Reid", min: 37, pts: 23, reb: 9, ast: 0, stl: 0, blk: 2, to: 1, tpm: 5, fgm: 9, fga: 16, ftm: 0, fta: 0, composite: 6.88, zScores: { pts: 1.301, reb: 1.456, ast: -0.968, stl: -0.86, blk: 1.833, tpm: 2.471, fgImpact: 1.322, ftImpact: 0, to: 0.328 } },
          { name: "Dennis Schroder", min: 38, pts: 25, reb: 6, ast: 4, stl: 0, blk: 0, to: 4, tpm: 3, fgm: 8, fga: 18, ftm: 6, fta: 6, composite: 1.89, zScores: { pts: 1.526, reb: 0.531, ast: 0.535, stl: -0.86, blk: -0.528, tpm: 1.123, fgImpact: -0.354, ftImpact: 1.818, to: -1.901 } },
          { name: "Sion James", min: 26, pts: 0, reb: 5, ast: 5, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.33, zScores: { pts: -1.294, reb: 0.223, ast: 0.911, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: -1.214, ftImpact: 0, to: 0.328 } },
          { name: "Royce O'Neale", min: 11, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.89, zScores: { pts: -1.294, reb: -1.01, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: -0.405, ftImpact: 0, to: 1.071 } },
          { name: "Tidjane Salaun", min: 10, pts: 3, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.8, zScores: { pts: -0.956, reb: -0.393, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.226, fgImpact: 0.057, ftImpact: 0, to: 1.071 } },
          { name: "Ryan Kalkbrenner", min: 23, pts: 6, reb: 5, ast: 2, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: 1.32, zScores: { pts: -0.617, reb: 0.223, ast: -0.217, stl: -0.86, blk: 1.833, tpm: -0.9, fgImpact: 0.923, ftImpact: 0.606, to: 0.328 } },
          { name: "Grayson Allen", min: 34, pts: 20, reb: 3, ast: 5, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 6, fga: 12, ftm: 4, fta: 5, composite: 2.81, zScores: { pts: 0.962, reb: -0.393, ast: 0.911, stl: 0.215, blk: -0.528, tpm: 1.797, fgImpact: 0.342, ftImpact: -0.079, to: -0.415 } },
          { name: "Christian Anderson", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -6.04, zScores: { pts: -1.294, reb: -1.01, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: -0.809, ftImpact: 0, to: 0.328 } }
        ]
      }
    },
      {
      id: "401909854",
      line: "Brooklyn Nets 121 @ Cleveland Cavaliers 125 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BKN", name: "Brooklyn Nets", score: 121,
        players: [
          { name: "Julius Randle", min: 35, pts: 23, reb: 6, ast: 5, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 7, fga: 13, ftm: 7, fta: 8, composite: 1.54, zScores: { pts: 1.301, reb: 0.531, ast: 0.911, stl: -0.86, blk: -0.528, tpm: 0.448, fgImpact: 0.804, ftImpact: 0.831, to: -1.901 } },
          { name: "Michael Porter Jr.", min: 33, pts: 28, reb: 9, ast: 1, stl: 4, blk: 0, to: 1, tpm: 4, fgm: 10, fga: 18, ftm: 4, fta: 4, composite: 10.36, zScores: { pts: 1.865, reb: 1.456, ast: -0.592, stl: 3.439, blk: -0.528, tpm: 1.797, fgImpact: 1.379, ftImpact: 1.212, to: 0.328 } },
          { name: "Day'Ron Sharpe", min: 23, pts: 7, reb: 8, ast: 1, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -3.09, zScores: { pts: -0.504, reb: 1.147, ast: -0.592, stl: 0.215, blk: -0.528, tpm: -0.226, fgImpact: -1.448, ftImpact: 0, to: -1.158 } },
          { name: "Keon Ellis", min: 22, pts: 6, reb: 2, ast: 1, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -2.22, zScores: { pts: -0.617, reb: -0.702, ast: -0.592, stl: 1.29, blk: -0.528, tpm: 0.448, fgImpact: -1.1, ftImpact: 0, to: -0.415 } },
          { name: "Egor Demin", min: 31, pts: 22, reb: 4, ast: 6, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 5, fga: 10, ftm: 7, fta: 7, composite: 6.21, zScores: { pts: 1.188, reb: -0.085, ast: 1.287, stl: -0.86, blk: -0.528, tpm: 2.471, fgImpact: 0.285, ftImpact: 2.121, to: 0.328 } },
          { name: "Josh Minott", min: 9, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -4.36, zScores: { pts: -0.843, reb: -0.702, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: 0.114, ftImpact: 0, to: 0.328 } },
          { name: "Noah Clowney", min: 20, pts: 4, reb: 4, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 1, fta: 2, composite: -4.55, zScores: { pts: -0.843, reb: -0.085, ast: -0.968, stl: -0.86, blk: 0.653, tpm: -0.226, fgImpact: -1.562, ftImpact: -0.988, to: 0.328 } },
          { name: "Chaney Johnson", min: 27, pts: 10, reb: 5, ast: 3, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 12, ftm: 0, fta: 0, composite: 0.36, zScores: { pts: -0.166, reb: 0.223, ast: 0.159, stl: 1.29, blk: -0.528, tpm: 0.448, fgImpact: -1.391, ftImpact: 0, to: 0.328 } },
          { name: "Moritz Wagner", min: 14, pts: 6, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 3, fta: 4, composite: -4.52, zScores: { pts: -0.617, reb: -0.085, ast: -0.592, stl: -0.86, blk: -0.528, tpm: -0.226, fgImpact: -1.562, ftImpact: -0.382, to: 0.328 } },
          { name: "Mikel Brown Jr.", min: 20, pts: 8, reb: 2, ast: 5, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -0.84, zScores: { pts: -0.392, reb: -0.702, ast: 0.911, stl: 1.29, blk: -0.528, tpm: 0.448, fgImpact: -1.448, ftImpact: 0, to: -0.415 } },
          { name: "Nolan Traore", min: 5, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -5.52, zScores: { pts: -0.956, reb: -0.702, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: 0.057, ftImpact: -0.988, to: 0.328 } }
        ]
      },
      home: {
        abbr: "CLE", name: "Cleveland Cavaliers", score: 125,
        players: [
          { name: "Jarrett Allen", min: 27, pts: 21, reb: 8, ast: 0, stl: 1, blk: 2, to: 3, tpm: 1, fgm: 7, fga: 8, ftm: 6, fta: 8, composite: 3.98, zScores: { pts: 1.075, reb: 1.147, ast: -0.968, stl: 0.215, blk: 1.833, tpm: -0.226, fgImpact: 2.827, ftImpact: -0.763, to: -1.158 } },
          { name: "Evan Mobley", min: 35, pts: 20, reb: 10, ast: 4, stl: 2, blk: 3, to: 1, tpm: 2, fgm: 7, fga: 12, ftm: 4, fta: 7, composite: 6.89, zScores: { pts: 0.962, reb: 1.764, ast: 0.535, stl: 1.29, blk: 3.013, tpm: 0.448, fgImpact: 1.208, ftImpact: -2.66, to: 0.328 } },
          { name: "James Harden", min: 33, pts: 12, reb: 8, ast: 7, stl: 0, blk: 2, to: 4, tpm: 1, fgm: 1, fga: 8, ftm: 9, fta: 11, composite: -0.51, zScores: { pts: 0.06, reb: 1.147, ast: 1.663, stl: -0.86, blk: 1.833, tpm: -0.226, fgImpact: -2.371, ftImpact: 0.146, to: -1.901 } },
          { name: "Donovan Mitchell", min: 35, pts: 22, reb: 5, ast: 4, stl: 1, blk: 1, to: 4, tpm: 2, fgm: 7, fga: 15, ftm: 6, fta: 6, composite: 3.17, zScores: { pts: 1.188, reb: 0.223, ast: 0.535, stl: 0.215, blk: 0.653, tpm: 0.448, fgImpact: -0.006, ftImpact: 1.818, to: -1.901 } },
          { name: "Peyton Watson", min: 31, pts: 11, reb: 3, ast: 4, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 4, fga: 11, ftm: 1, fta: 2, composite: -0.98, zScores: { pts: -0.053, reb: -0.393, ast: 0.535, stl: 0.215, blk: 0.653, tpm: 0.448, fgImpact: -0.986, ftImpact: -0.988, to: -0.415 } },
          { name: "Mario Hezonja", min: 20, pts: 9, reb: 5, ast: 1, stl: 1, blk: 0, to: 4, tpm: 2, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: -2.83, zScores: { pts: -0.279, reb: 0.223, ast: -0.592, stl: 0.215, blk: -0.528, tpm: 0.448, fgImpact: 0.576, ftImpact: -0.988, to: -1.901 } },
          { name: "Sam Merrill", min: 21, pts: 7, reb: 2, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -0.87, zScores: { pts: -0.504, reb: -0.702, ast: 0.159, stl: -0.86, blk: -0.528, tpm: -0.226, fgImpact: 0.114, ftImpact: 0.606, to: 1.071 } },
          { name: "Jaylon Tyson", min: 21, pts: 15, reb: 1, ast: 4, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 6, fga: 12, ftm: 0, fta: 0, composite: 0.66, zScores: { pts: 0.398, reb: -1.01, ast: 0.535, stl: 0.215, blk: -0.528, tpm: 1.123, fgImpact: 0.342, ftImpact: 0, to: -0.415 } },
          { name: "Craig Porter Jr.", min: 5, pts: 3, reb: 1, ast: 1, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.94, zScores: { pts: -0.956, reb: -1.01, ast: -0.592, stl: -0.86, blk: 0.653, tpm: -0.226, fgImpact: 0.462, ftImpact: 0, to: -0.415 } },
          { name: "Tyrese Proctor", min: 11, pts: 5, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.96, zScores: { pts: -0.73, reb: -0.702, ast: 0.159, stl: 0.215, blk: -0.528, tpm: -0.226, fgImpact: 0.519, ftImpact: 0, to: 0.328 } }
        ]
      }
    },
      {
      id: "401909855",
      line: "Milwaukee Bucks 116 @ Philadelphia 76ers 127 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIL", name: "Milwaukee Bucks", score: 116,
        players: [
          { name: "Kyle Kuzma", min: 35, pts: 14, reb: 12, ast: 3, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 6, fga: 11, ftm: 2, fta: 2, composite: 0.73, zScores: { pts: 0.285, reb: 2.38, ast: 0.159, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: 0.747, ftImpact: 0.606, to: -1.158 } },
          { name: "Jaime Jaquez Jr.", min: 27, pts: 21, reb: 8, ast: 4, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 13, ftm: 5, fta: 7, composite: 1.14, zScores: { pts: 1.075, reb: 1.147, ast: 0.535, stl: -0.86, blk: -0.528, tpm: 0.448, fgImpact: 0.804, ftImpact: -1.066, to: -0.415 } },
          { name: "Myles Turner", min: 20, pts: 0, reb: 5, ast: 1, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -5.55, zScores: { pts: -1.294, reb: 0.223, ast: -0.592, stl: -0.86, blk: 0.653, tpm: -0.9, fgImpact: -1.619, ftImpact: 0, to: -1.158 } },
          { name: "Tyler Herro", min: 31, pts: 13, reb: 6, ast: 3, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 6, fga: 14, ftm: 0, fta: 0, composite: -2.38, zScores: { pts: 0.173, reb: 0.531, ast: 0.159, stl: -0.86, blk: -0.528, tpm: -0.226, fgImpact: -0.468, ftImpact: 0, to: -1.158 } },
          { name: "Ryan Rollins", min: 25, pts: 15, reb: 4, ast: 4, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 6, fga: 14, ftm: 1, fta: 2, composite: 0.29, zScores: { pts: 0.398, reb: -0.085, ast: 0.535, stl: 0.215, blk: 0.653, tpm: 0.448, fgImpact: -0.468, ftImpact: -0.988, to: -0.415 } },
          { name: "Nate Ament", min: 11, pts: 1, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 4, composite: -7.4, zScores: { pts: -1.181, reb: -0.393, ast: -0.968, stl: 0.215, blk: -0.528, tpm: -0.9, fgImpact: -0.405, ftImpact: -3.569, to: 0.328 } },
          { name: "Kel'el Ware", min: 29, pts: 19, reb: 13, ast: 1, stl: 1, blk: 2, to: 3, tpm: 2, fgm: 6, fga: 11, ftm: 5, fta: 5, composite: 6.55, zScores: { pts: 0.849, reb: 2.688, ast: -0.592, stl: 0.215, blk: 1.833, tpm: 0.448, fgImpact: 0.747, ftImpact: 1.515, to: -1.158 } },
          { name: "AJ Green", min: 19, pts: 11, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -1.46, zScores: { pts: -0.053, reb: -0.393, ast: -0.968, stl: -0.86, blk: -0.528, tpm: 1.123, fgImpact: 0.633, ftImpact: 0, to: -0.415 } },
          { name: "Brayden Burries", min: 17, pts: 10, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 3, fta: 4, composite: -1.32, zScores: { pts: -0.166, reb: 0.223, ast: -0.217, stl: -0.86, blk: -0.528, tpm: -0.226, fgImpact: -0.234, ftImpact: -0.382, to: 1.071 } },
          { name: "Kasparas Jakucionis", min: 25, pts: 12, reb: 3, ast: 2, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 8, ftm: 4, fta: 4, composite: -0.41, zScores: { pts: 0.06, reb: -0.393, ast: -0.217, stl: 1.29, blk: -0.528, tpm: -0.9, fgImpact: 0.228, ftImpact: 1.212, to: -1.158 } }
        ]
      },
      home: {
        abbr: "PHI", name: "Philadelphia 76ers", score: 127,
        players: [
          { name: "Dean Wade", min: 28, pts: 7, reb: 2, ast: 0, stl: 3, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 3, ftm: 1, fta: 3, composite: 0.6, zScores: { pts: -0.504, reb: -0.702, ast: -0.968, stl: 2.364, blk: 0.653, tpm: 0.448, fgImpact: 0.519, ftImpact: -2.279, to: 1.071 } },
          { name: "Joel Embiid", min: 36, pts: 28, reb: 11, ast: 10, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 8, fga: 20, ftm: 12, fta: 14, composite: 3.5, zScores: { pts: 1.865, reb: 2.072, ast: 2.79, stl: 0.215, blk: -0.528, tpm: -0.9, fgImpact: -1.163, ftImpact: 1.055, to: -1.901 } },
          { name: "Jaylen Brown", min: 35, pts: 27, reb: 3, ast: 5, stl: 3, blk: 0, to: 3, tpm: 3, fgm: 9, fga: 19, ftm: 6, fta: 6, composite: 6, zScores: { pts: 1.752, reb: -0.393, ast: 0.911, stl: 2.364, blk: -0.528, tpm: 1.123, fgImpact: 0.108, ftImpact: 1.818, to: -1.158 } },
          { name: "Tyrese Maxey", min: 36, pts: 26, reb: 4, ast: 4, stl: 0, blk: 0, to: 3, tpm: 4, fgm: 9, fga: 22, ftm: 4, fta: 4, composite: 1.45, zScores: { pts: 1.639, reb: -0.085, ast: 0.535, stl: -0.86, blk: -0.528, tpm: 1.797, fgImpact: -1.106, ftImpact: 1.212, to: -1.158 } },
          { name: "VJ Edgecombe", min: 30, pts: 17, reb: 13, ast: 2, stl: 1, blk: 2, to: 0, tpm: 5, fgm: 5, fga: 13, ftm: 2, fta: 2, composite: 8.36, zScores: { pts: 0.624, reb: 2.688, ast: -0.217, stl: 0.215, blk: 1.833, tpm: 2.471, fgImpact: -0.929, ftImpact: 0.606, to: 1.071 } },
          { name: "Jabari Walker", min: 12, pts: 6, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 3, composite: -1.91, zScores: { pts: -0.617, reb: -0.393, ast: -0.592, stl: 0.215, blk: -0.528, tpm: -0.9, fgImpact: 0.519, ftImpact: -0.685, to: 1.071 } },
          { name: "Justin Edwards", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.8, zScores: { pts: -1.294, reb: -1.318, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: 0, ftImpact: 0, to: 1.071 } },
          { name: "Adem Bona", min: 10, pts: 0, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.85, zScores: { pts: -1.294, reb: -1.01, ast: -0.592, stl: 0.215, blk: -0.528, tpm: -0.9, fgImpact: -0.809, ftImpact: 0, to: 1.071 } },
          { name: "Kentavious Caldwell-Pope", min: 28, pts: 12, reb: 2, ast: 1, stl: 3, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 3.7, zScores: { pts: 0.06, reb: -0.702, ast: -0.592, stl: 2.364, blk: -0.528, tpm: 1.797, fgImpact: 0.228, ftImpact: 0, to: 1.071 } },
          { name: "Anfernee Simons", min: 20, pts: 4, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 7, ftm: 1, fta: 2, composite: -5.23, zScores: { pts: -0.843, reb: -1.01, ast: -0.217, stl: 0.215, blk: -0.528, tpm: -0.226, fgImpact: -1.967, ftImpact: -0.988, to: 0.328 } },
          { name: "Caleb Love", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.8, zScores: { pts: -1.294, reb: -1.318, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: 0, ftImpact: 0, to: 1.071 } },
          { name: "Labaron Philon Jr.", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.2, zScores: { pts: -1.294, reb: -1.318, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: -0.405, ftImpact: 0, to: 1.071 } }
        ]
      }
    },
      {
      id: "401909857",
      line: "Washington Wizards 124 @ Chicago Bulls 120 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WSH", name: "Washington Wizards", score: 124,
        players: [
          { name: "Anthony Davis", min: 31, pts: 19, reb: 6, ast: 4, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 8, fga: 21, ftm: 3, fta: 5, composite: -3.7, zScores: { pts: 0.849, reb: 0.531, ast: 0.535, stl: 0.215, blk: -0.528, tpm: -0.9, fgImpact: -1.568, ftImpact: -1.672, to: -1.158 } },
          { name: "Kyshawn George", min: 36, pts: 22, reb: 9, ast: 5, stl: 0, blk: 4, to: 3, tpm: 0, fgm: 8, fga: 17, ftm: 6, fta: 8, composite: 4.12, zScores: { pts: 1.188, reb: 1.456, ast: 0.911, stl: -0.86, blk: 4.194, tpm: -0.9, fgImpact: 0.051, ftImpact: -0.763, to: -1.158 } },
          { name: "Alex Sarr", min: 23, pts: 10, reb: 2, ast: 3, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 1.63, zScores: { pts: -0.166, reb: -0.702, ast: 0.159, stl: -0.86, blk: 3.013, tpm: -0.9, fgImpact: 1.499, ftImpact: 0, to: -0.415 } },
          { name: "Trae Young", min: 34, pts: 25, reb: 4, ast: 9, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 6, fga: 13, ftm: 9, fta: 9, composite: 6.51, zScores: { pts: 1.526, reb: -0.085, ast: 2.414, stl: -0.86, blk: -0.528, tpm: 1.797, fgImpact: -0.063, ftImpact: 2.728, to: -0.415 } },
          { name: "Bilal Coulibaly", min: 25, pts: 7, reb: 4, ast: 0, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 1, composite: -1.64, zScores: { pts: -0.504, reb: -0.085, ast: -0.968, stl: 1.29, blk: -0.528, tpm: -0.9, fgImpact: 0.171, ftImpact: 0.303, to: -0.415 } },
          { name: "Justin Champagnie", min: 26, pts: 11, reb: 14, ast: 4, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 4.84, zScores: { pts: -0.053, reb: 2.997, ast: 0.535, stl: 0.215, blk: -0.528, tpm: -0.226, fgImpact: 0.228, ftImpact: 0.606, to: 1.071 } },
          { name: "Deandre Ayton", min: 16, pts: 6, reb: 5, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -0.93, zScores: { pts: -0.617, reb: 0.223, ast: -0.968, stl: 0.215, blk: -0.528, tpm: -0.9, fgImpact: 0.576, ftImpact: 0, to: 1.071 } },
          { name: "Bub Carrington", min: 21, pts: 9, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -1.34, zScores: { pts: -0.279, reb: -0.702, ast: -0.592, stl: -0.86, blk: -0.528, tpm: 1.123, fgImpact: 0.171, ftImpact: 0, to: 0.328 } },
          { name: "Will Riley", min: 5, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -4.37, zScores: { pts: -1.068, reb: -1.318, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: -0.405, ftImpact: 0.606, to: 1.071 } },
          { name: "Tre Johnson", min: 23, pts: 13, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 10, ftm: 1, fta: 1, composite: -0.03, zScores: { pts: 0.173, reb: -0.702, ast: -0.217, stl: -0.86, blk: -0.528, tpm: 0.448, fgImpact: 0.285, ftImpact: 0.303, to: 1.071 } }
        ]
      },
      home: {
        abbr: "CHI", name: "Chicago Bulls", score: 120,
        players: [
          { name: "Jalen Smith", min: 24, pts: 14, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 11, ftm: 2, fta: 2, composite: -1.57, zScores: { pts: 0.285, reb: -0.393, ast: -0.592, stl: -0.86, blk: -0.528, tpm: 0.448, fgImpact: -0.12, ftImpact: 0.606, to: -0.415 } },
          { name: "Matas Buzelis", min: 35, pts: 21, reb: 5, ast: 2, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 7, fga: 13, ftm: 5, fta: 5, composite: 2.38, zScores: { pts: 1.075, reb: 0.223, ast: -0.217, stl: 0.215, blk: -0.528, tpm: 0.448, fgImpact: 0.804, ftImpact: 1.515, to: -1.158 } },
          { name: "Caleb Wilson", min: 38, pts: 30, reb: 14, ast: 3, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 10, fga: 24, ftm: 9, fta: 11, composite: 7.13, zScores: { pts: 2.09, reb: 2.997, ast: 0.159, stl: 1.29, blk: 0.653, tpm: -0.226, fgImpact: -1.049, ftImpact: 0.146, to: 1.071 } },
          { name: "Norman Powell", min: 33, pts: 18, reb: 2, ast: 3, stl: 4, blk: 0, to: 4, tpm: 3, fgm: 4, fga: 12, ftm: 7, fta: 7, composite: 3.06, zScores: { pts: 0.737, reb: -0.702, ast: 0.159, stl: 3.439, blk: -0.528, tpm: 1.123, fgImpact: -1.391, ftImpact: 2.121, to: -1.901 } },
          { name: "Josh Giddey", min: 30, pts: 9, reb: 8, ast: 10, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 4.56, zScores: { pts: -0.279, reb: 1.147, ast: 2.79, stl: 0.215, blk: -0.528, tpm: -0.226, fgImpact: -0.234, ftImpact: 0.606, to: 1.071 } },
          { name: "Zach Collins", min: 11, pts: 2, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.62, zScores: { pts: -1.068, reb: -0.393, ast: -0.592, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: -0.348, ftImpact: 0, to: 1.071 } },
          { name: "Isaac Okoro", min: 14, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.64, zScores: { pts: -1.294, reb: -1.01, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: -0.405, ftImpact: 0, to: 0.328 } },
          { name: "Leonard Miller", min: 21, pts: 7, reb: 4, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -1.66, zScores: { pts: -0.504, reb: -0.085, ast: -0.968, stl: 0.215, blk: -0.528, tpm: -0.226, fgImpact: -0.639, ftImpact: 0, to: 1.071 } },
          { name: "Buddy Hield", min: 16, pts: 9, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -1.85, zScores: { pts: -0.279, reb: -0.702, ast: -0.217, stl: -0.86, blk: -0.528, tpm: -0.226, fgImpact: 0.633, ftImpact: 0, to: 0.328 } },
          { name: "Tre Jones", min: 18, pts: 10, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 3, fta: 3, composite: -0.24, zScores: { pts: -0.166, reb: -0.702, ast: 0.159, stl: 0.215, blk: -0.528, tpm: -0.226, fgImpact: -0.234, ftImpact: 0.909, to: 0.328 } }
        ]
      }
    },
      {
      id: "401909858",
      line: "San Antonio Spurs 122 @ Dallas Mavericks 106 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SA", name: "San Antonio Spurs", score: 122,
        players: [
          { name: "Victor Wembanyama", min: 29, pts: 23, reb: 7, ast: 2, stl: 1, blk: 4, to: 2, tpm: 2, fgm: 9, fga: 18, ftm: 3, fta: 5, composite: 5.21, zScores: { pts: 1.301, reb: 0.839, ast: -0.217, stl: 0.215, blk: 4.194, tpm: 0.448, fgImpact: 0.513, ftImpact: -1.672, to: -0.415 } },
          { name: "De'Aaron Fox", min: 28, pts: 19, reb: 3, ast: 9, stl: 3, blk: 1, to: 2, tpm: 2, fgm: 6, fga: 11, ftm: 5, fta: 7, composite: 5.6, zScores: { pts: 0.849, reb: -0.393, ast: 2.414, stl: 2.364, blk: 0.653, tpm: 0.448, fgImpact: 0.747, ftImpact: -1.066, to: -0.415 } },
          { name: "Devin Vassell", min: 32, pts: 11, reb: 4, ast: 6, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 3.04, zScores: { pts: -0.053, reb: -0.085, ast: 1.287, stl: 1.29, blk: -0.528, tpm: -0.226, fgImpact: 0.285, ftImpact: 0, to: 1.071 } },
          { name: "Stephon Castle", min: 28, pts: 19, reb: 4, ast: 8, stl: 3, blk: 0, to: 3, tpm: 3, fgm: 8, fga: 18, ftm: 0, fta: 0, composite: 4.25, zScores: { pts: 0.849, reb: -0.085, ast: 2.038, stl: 2.364, blk: -0.528, tpm: 1.123, fgImpact: -0.354, ftImpact: 0, to: -1.158 } },
          { name: "Dylan Harper", min: 28, pts: 22, reb: 5, ast: 2, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 9, fga: 18, ftm: 1, fta: 1, composite: 3.48, zScores: { pts: 1.188, reb: 0.223, ast: -0.217, stl: 1.29, blk: -0.528, tpm: 1.123, fgImpact: 0.513, ftImpact: 0.303, to: -0.415 } },
          { name: "Harrison Barnes", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.2, zScores: { pts: -1.294, reb: -1.318, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: -0.405, ftImpact: 0, to: 1.071 } },
          { name: "Keldon Johnson", min: 26, pts: 7, reb: 6, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: -1.44, zScores: { pts: -0.504, reb: 0.531, ast: 0.159, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: 0.576, ftImpact: -0.988, to: 1.071 } },
          { name: "Julian Champagnie", min: 28, pts: 12, reb: 5, ast: 3, stl: 1, blk: 3, to: 0, tpm: 3, fgm: 4, fga: 8, ftm: 1, fta: 1, composite: 6.39, zScores: { pts: 0.06, reb: 0.223, ast: 0.159, stl: 0.215, blk: 3.013, tpm: 1.123, fgImpact: 0.228, ftImpact: 0.303, to: 1.071 } },
          { name: "Carter Bryant", min: 10, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.92, zScores: { pts: -0.843, reb: -1.01, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: 0.114, ftImpact: 0, to: 1.071 } },
          { name: "Luke Kornet", min: 14, pts: 0, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.48, zScores: { pts: -1.294, reb: -0.085, ast: -0.592, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: -0.809, ftImpact: 0, to: -0.415 } },
          { name: "Tarris Reed Jr.", min: 7, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.33, zScores: { pts: -1.068, reb: -0.393, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: 0.057, ftImpact: 0, to: 0.328 } },
          { name: "Jordan McLaughlin", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.3, zScores: { pts: -1.294, reb: -1.01, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: -0.809, ftImpact: 0, to: 1.071 } },
          { name: "Ja'Kobi Gillespie", min: 3, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -0.956, reb: -1.318, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.226, fgImpact: 0.057, ftImpact: 0, to: 1.071 } }
        ]
      },
      home: {
        abbr: "DAL", name: "Dallas Mavericks", score: 106,
        players: [
          { name: "Daniel Gafford", min: 23, pts: 12, reb: 9, ast: 2, stl: 3, blk: 2, to: 3, tpm: 0, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 4.99, zScores: { pts: 0.06, reb: 1.456, ast: -0.217, stl: 2.364, blk: 1.833, tpm: -0.9, fgImpact: 1.556, ftImpact: 0, to: -1.158 } },
          { name: "P.J. Washington", min: 36, pts: 12, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 6, fga: 12, ftm: 0, fta: 1, composite: -2.41, zScores: { pts: 0.06, reb: -0.085, ast: -0.217, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: 0.342, ftImpact: -1.291, to: 1.071 } },
          { name: "Naji Marshall", min: 21, pts: 10, reb: 4, ast: 5, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 8, ftm: 1, fta: 3, composite: -2.34, zScores: { pts: -0.166, reb: -0.085, ast: 0.911, stl: 0.215, blk: -0.528, tpm: -0.226, fgImpact: 0.228, ftImpact: -2.279, to: -0.415 } },
          { name: "Zaccharie Risacher", min: 32, pts: 11, reb: 4, ast: 2, stl: 1, blk: 2, to: 1, tpm: 1, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 2.63, zScores: { pts: -0.053, reb: -0.085, ast: -0.217, stl: 0.215, blk: 1.833, tpm: -0.226, fgImpact: 0.228, ftImpact: 0.606, to: 0.328 } },
          { name: "Max Christie", min: 26, pts: 5, reb: 5, ast: 1, stl: 1, blk: 2, to: 1, tpm: 1, fgm: 2, fga: 9, ftm: 0, fta: 0, composite: -0.86, zScores: { pts: -0.73, reb: 0.223, ast: -0.592, stl: 0.215, blk: 1.833, tpm: -0.226, fgImpact: -1.91, ftImpact: 0, to: 0.328 } },
          { name: "Morez Johnson Jr.", min: 12, pts: 6, reb: 1, ast: 2, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: -5.05, zScores: { pts: -0.617, reb: -1.01, ast: -0.217, stl: 0.215, blk: -0.528, tpm: -0.9, fgImpact: -0.695, ftImpact: 0.606, to: -1.901 } },
          { name: "Tobi Lawal", min: 4, pts: 5, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.76, zScores: { pts: -0.73, reb: -1.01, ast: -0.592, stl: -0.86, blk: -0.528, tpm: -0.226, fgImpact: 0.114, ftImpact: 0, to: 1.071 } },
          { name: "Sergio de Larrea", min: 33, pts: 21, reb: 5, ast: 4, stl: 0, blk: 0, to: 4, tpm: 3, fgm: 9, fga: 15, ftm: 0, fta: 0, composite: 1.39, zScores: { pts: 1.075, reb: 0.223, ast: 0.535, stl: -0.86, blk: -0.528, tpm: 1.123, fgImpact: 1.727, ftImpact: 0, to: -1.901 } },
          { name: "Moussa Cisse", min: 7, pts: 4, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.19, zScores: { pts: -0.843, reb: -0.085, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: 0.923, ftImpact: 0, to: 1.071 } },
          { name: "Marcus Sasser", min: 27, pts: 12, reb: 3, ast: 5, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: -0.09, zScores: { pts: 0.06, reb: -0.393, ast: 0.911, stl: -0.86, blk: -0.528, tpm: 0.448, fgImpact: 0.69, ftImpact: 0, to: -0.415 } },
          { name: "Walter Clayton Jr.", min: 15, pts: 3, reb: 2, ast: 5, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -0.56, zScores: { pts: -0.956, reb: -0.702, ast: 0.911, stl: 0.215, blk: -0.528, tpm: -0.226, fgImpact: -0.348, ftImpact: 0, to: 1.071 } },
          { name: "Jett Howard", min: 4, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.78, zScores: { pts: -0.73, reb: -1.318, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.226, fgImpact: 0.519, ftImpact: 0, to: 0.328 } }
        ]
      }
    },
      {
      id: "401909856",
      line: "Houston Rockets 121 @ Atlanta Hawks 114 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "HOU", name: "Houston Rockets", score: 121,
        players: [
          { name: "Kevin Durant", min: 37, pts: 22, reb: 4, ast: 2, stl: 0, blk: 1, to: 2, tpm: 3, fgm: 8, fga: 15, ftm: 3, fta: 3, composite: 3.16, zScores: { pts: 1.188, reb: -0.085, ast: -0.217, stl: -0.86, blk: 0.653, tpm: 1.123, fgImpact: 0.861, ftImpact: 0.909, to: -0.415 } },
          { name: "Jabari Smith Jr.", min: 33, pts: 14, reb: 5, ast: 3, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 5, fga: 12, ftm: 2, fta: 2, composite: 2.06, zScores: { pts: 0.285, reb: 0.223, ast: 0.159, stl: -0.86, blk: 0.653, tpm: 0.448, fgImpact: -0.525, ftImpact: 0.606, to: 1.071 } },
          { name: "Alperen Sengun", min: 33, pts: 17, reb: 10, ast: 7, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 6, fga: 12, ftm: 4, fta: 6, composite: 1.33, zScores: { pts: 0.624, reb: 1.764, ast: 1.663, stl: 0.215, blk: -0.528, tpm: -0.226, fgImpact: 0.342, ftImpact: -1.369, to: -1.158 } },
          { name: "Amen Thompson", min: 39, pts: 17, reb: 11, ast: 6, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 12, ftm: 9, fta: 9, composite: 3.69, zScores: { pts: 0.624, reb: 2.072, ast: 1.287, stl: 0.215, blk: -0.528, tpm: -0.9, fgImpact: -1.391, ftImpact: 2.728, to: -0.415 } },
          { name: "Reed Sheppard", min: 30, pts: 19, reb: 6, ast: 7, stl: 2, blk: 0, to: 3, tpm: 5, fgm: 7, fga: 13, ftm: 0, fta: 0, composite: 5.92, zScores: { pts: 0.849, reb: 0.531, ast: 1.663, stl: 1.29, blk: -0.528, tpm: 2.471, fgImpact: 0.804, ftImpact: 0, to: -1.158 } },
          { name: "Jae'Sean Tate", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.8, zScores: { pts: -1.294, reb: -1.318, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: 0, ftImpact: 0, to: 1.071 } },
          { name: "Tari Eason", min: 31, pts: 19, reb: 3, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 8, fga: 15, ftm: 3, fta: 3, composite: 1.55, zScores: { pts: 0.849, reb: -0.393, ast: -0.968, stl: 0.215, blk: 0.653, tpm: -0.9, fgImpact: 0.861, ftImpact: 0.909, to: 0.328 } },
          { name: "Isaiah Crawford", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.62, zScores: { pts: -1.294, reb: -1.318, ast: -0.968, stl: -0.86, blk: 0.653, tpm: -0.9, fgImpact: 0, ftImpact: 0, to: 1.071 } },
          { name: "Clint Capela", min: 11, pts: 2, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.068, reb: -0.393, ast: -0.592, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: 0.462, ftImpact: 0, to: 0.328 } },
          { name: "Bogdan Bogdanovic", min: 20, pts: 11, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: -1.36, zScores: { pts: -0.053, reb: -1.01, ast: -0.592, stl: -0.86, blk: -0.528, tpm: 1.123, fgImpact: 0.228, ftImpact: 0, to: 0.328 } },
          { name: "Bruce Thornton", min: 4, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.87, zScores: { pts: -1.294, reb: -1.318, ast: -0.968, stl: 0.215, blk: -0.528, tpm: -0.9, fgImpact: -0.405, ftImpact: 0, to: 0.328 } }
        ]
      },
      home: {
        abbr: "ATL", name: "Atlanta Hawks", score: 114,
        players: [
          { name: "Onyeka Okongwu", min: 26, pts: 8, reb: 6, ast: 2, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 4, fta: 5, composite: -1.37, zScores: { pts: -0.392, reb: 0.531, ast: -0.217, stl: 0.215, blk: 0.653, tpm: -0.9, fgImpact: -1.505, ftImpact: -0.079, to: 0.328 } },
          { name: "Jalen Johnson", min: 38, pts: 26, reb: 9, ast: 16, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 8, fga: 19, ftm: 8, fta: 10, composite: 8.02, zScores: { pts: 1.639, reb: 1.456, ast: 5.045, stl: 1.29, blk: -0.528, tpm: 0.448, fgImpact: -0.758, ftImpact: -0.157, to: -0.415 } },
          { name: "CJ McCollum", min: 30, pts: 17, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 14, ftm: 2, fta: 3, composite: -2.24, zScores: { pts: 0.624, reb: -0.702, ast: -0.592, stl: -0.86, blk: -0.528, tpm: -0.226, fgImpact: 0.399, ftImpact: -0.685, to: 0.328 } },
          { name: "Nickeil Alexander-Walker", min: 32, pts: 18, reb: 5, ast: 4, stl: 3, blk: 0, to: 1, tpm: 4, fgm: 7, fga: 16, ftm: 0, fta: 1, composite: 3.75, zScores: { pts: 0.737, reb: 0.223, ast: 0.535, stl: 2.364, blk: -0.528, tpm: 1.797, fgImpact: -0.411, ftImpact: -1.291, to: 0.328 } },
          { name: "Dyson Daniels", min: 29, pts: 18, reb: 8, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 8, fga: 11, ftm: 1, fta: 2, composite: 3.32, zScores: { pts: 0.737, reb: 1.147, ast: 0.159, stl: 0.215, blk: -0.528, tpm: -0.226, fgImpact: 2.479, ftImpact: -0.988, to: 0.328 } },
          { name: "Jock Landale", min: 19, pts: 2, reb: 4, ast: 2, stl: 0, blk: 0, to: 5, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -7.46, zScores: { pts: -1.068, reb: -0.085, ast: -0.217, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: -1.157, ftImpact: 0, to: -2.644 } },
          { name: "Luguentz Dort", min: 23, pts: 7, reb: 2, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -0.34, zScores: { pts: -0.504, reb: -0.702, ast: 0.159, stl: 0.215, blk: -0.528, tpm: -0.226, fgImpact: 0.171, ftImpact: 0, to: 1.071 } },
          { name: "Aaron Wiggins", min: 29, pts: 16, reb: 5, ast: 2, stl: 1, blk: 1, to: 0, tpm: 4, fgm: 6, fga: 13, ftm: 0, fta: 0, composite: 4.19, zScores: { pts: 0.511, reb: 0.223, ast: -0.217, stl: 0.215, blk: 0.653, tpm: 1.797, fgImpact: -0.063, ftImpact: 0, to: 1.071 } },
          { name: "Kingston Flemings", min: 15, pts: 2, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -5.75, zScores: { pts: -1.068, reb: -1.01, ast: -0.217, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: -0.752, ftImpact: 0, to: -0.415 } }
        ]
      }
    },
      {
      id: "401909859",
      line: "New Orleans Pelicans 135 @ Denver Nuggets 141 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "NO", name: "New Orleans Pelicans", score: 135,
        players: [
          { name: "Zion Williamson", min: 33, pts: 17, reb: 1, ast: 2, stl: 2, blk: 2, to: 3, tpm: 0, fgm: 7, fga: 11, ftm: 3, fta: 5, composite: 0.4, zScores: { pts: 0.624, reb: -1.01, ast: -0.217, stl: 1.29, blk: 1.833, tpm: -0.9, fgImpact: 1.613, ftImpact: -1.672, to: -1.158 } },
          { name: "Trey Murphy III", min: 37, pts: 26, reb: 6, ast: 4, stl: 1, blk: 0, to: 4, tpm: 4, fgm: 10, fga: 17, ftm: 2, fta: 2, composite: 4.68, zScores: { pts: 1.639, reb: 0.531, ast: 0.535, stl: 0.215, blk: -0.528, tpm: 1.797, fgImpact: 1.784, ftImpact: 0.606, to: -1.901 } },
          { name: "DeAndre Jordan", min: 20, pts: 9, reb: 9, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 3, fta: 4, composite: 1.93, zScores: { pts: -0.279, reb: 1.456, ast: -0.217, stl: -0.86, blk: 0.653, tpm: -0.9, fgImpact: 1.385, ftImpact: -0.382, to: 1.071 } },
          { name: "Dejounte Murray", min: 35, pts: 22, reb: 6, ast: 6, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 9, fga: 18, ftm: 3, fta: 4, composite: 4.44, zScores: { pts: 1.188, reb: 0.531, ast: 1.287, stl: 1.29, blk: 0.653, tpm: -0.226, fgImpact: 0.513, ftImpact: -0.382, to: -0.415 } },
          { name: "Jeremiah Fears", min: 23, pts: 10, reb: 6, ast: 2, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 12, ftm: 2, fta: 2, composite: -3.01, zScores: { pts: -0.166, reb: 0.531, ast: -0.217, stl: 0.215, blk: -0.528, tpm: -0.9, fgImpact: -1.391, ftImpact: 0.606, to: -1.158 } },
          { name: "Herbert Jones", min: 16, pts: 2, reb: 3, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.03, zScores: { pts: -1.068, reb: -0.393, ast: -0.592, stl: 0.215, blk: -0.528, tpm: -0.9, fgImpact: -0.348, ftImpact: 0, to: -0.415 } },
          { name: "Karlo Matkovic", min: 8, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -0.956, reb: -1.318, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.226, fgImpact: 0.462, ftImpact: 0, to: 0.328 } },
          { name: "Derik Queen", min: 25, pts: 17, reb: 8, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 6, fga: 10, ftm: 5, fta: 5, composite: 3, zScores: { pts: 0.624, reb: 1.147, ast: -0.217, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: 1.151, ftImpact: 1.515, to: 1.071 } },
          { name: "Jordan Poole", min: 23, pts: 6, reb: 3, ast: 7, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: 0.86, zScores: { pts: -0.617, reb: -0.393, ast: 1.663, stl: 0.215, blk: 0.653, tpm: 0.448, fgImpact: -0.695, ftImpact: 0, to: -0.415 } },
          { name: "Saddiq Bey", min: 25, pts: 14, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 9, ftm: 6, fta: 8, composite: -0.98, zScores: { pts: 0.285, reb: -0.085, ast: 0.159, stl: 0.215, blk: -0.528, tpm: 0.448, fgImpact: -1.043, ftImpact: -0.763, to: 0.328 } },
          { name: "Bennedict Mathurin", min: 20, pts: 9, reb: 4, ast: 4, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -0.55, zScores: { pts: -0.279, reb: -0.085, ast: 0.535, stl: -0.86, blk: -0.528, tpm: -0.226, fgImpact: -0.177, ftImpact: 0, to: 1.071 } }
        ]
      },
      home: {
        abbr: "DEN", name: "Denver Nuggets", score: 141,
        players: [
          { name: "Aaron Gordon", min: 37, pts: 7, reb: 5, ast: 4, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 9, ftm: 2, fta: 4, composite: -2.77, zScores: { pts: -0.504, reb: 0.223, ast: 0.535, stl: 1.29, blk: -0.528, tpm: -0.226, fgImpact: -1.91, ftImpact: -1.976, to: 0.328 } },
          { name: "Bryce Hopkins", min: 19, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.52, zScores: { pts: -1.068, reb: -0.702, ast: -0.592, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: 0.057, ftImpact: 0, to: 1.071 } },
          { name: "Nikola Jokic", min: 44, pts: 35, reb: 15, ast: 10, stl: 2, blk: 3, to: 6, tpm: 3, fgm: 12, fga: 23, ftm: 8, fta: 8, composite: 14.3, zScores: { pts: 2.655, reb: 3.305, ast: 2.79, stl: 1.29, blk: 3.013, tpm: 1.123, fgImpact: 1.088, ftImpact: 2.425, to: -3.387 } },
          { name: "Jamal Murray", min: 43, pts: 42, reb: 3, ast: 6, stl: 1, blk: 1, to: 0, tpm: 8, fgm: 12, fga: 25, ftm: 10, fta: 13, composite: 10.21, zScores: { pts: 3.444, reb: -0.393, ast: 1.287, stl: 0.215, blk: 0.653, tpm: 4.494, fgImpact: 0.279, ftImpact: -0.842, to: 1.071 } },
          { name: "Christian Braun", min: 40, pts: 15, reb: 8, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 11, ftm: 1, fta: 2, composite: 2.14, zScores: { pts: 0.398, reb: 1.147, ast: -0.217, stl: 1.29, blk: -0.528, tpm: -0.9, fgImpact: 1.613, ftImpact: -0.988, to: 0.328 } },
          { name: "Marvin Bagley III", min: 9, pts: 5, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: -3.06, zScores: { pts: -0.73, reb: -0.085, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: 0.923, ftImpact: -0.988, to: 1.071 } },
          { name: "Trevon Brazile", min: 28, pts: 17, reb: 9, ast: 0, stl: 1, blk: 2, to: 2, tpm: 3, fgm: 6, fga: 11, ftm: 2, fta: 4, composite: 2.64, zScores: { pts: 0.624, reb: 1.456, ast: -0.968, stl: 0.215, blk: 1.833, tpm: 1.123, fgImpact: 0.747, ftImpact: -1.976, to: -0.415 } },
          { name: "Cam Whitmore", min: 11, pts: 4, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.95, zScores: { pts: -0.843, reb: -0.702, ast: -0.968, stl: 0.215, blk: -0.528, tpm: -0.9, fgImpact: -0.291, ftImpact: 0, to: 1.071 } },
          { name: "DeMar DeRozan", min: 24, pts: 12, reb: 3, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 10, ftm: 4, fta: 4, composite: -1.5, zScores: { pts: 0.06, reb: -0.393, ast: 0.159, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: -0.582, ftImpact: 1.212, to: 0.328 } },
          { name: "Tyus Jones", min: 10, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -4.37, zScores: { pts: -1.068, reb: -1.318, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: -0.405, ftImpact: 0.606, to: 1.071 } }
        ]
      }
    },
      {
      id: "401909860",
      line: "Golden State Warriors 122 @ Phoenix Suns 131 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "GS", name: "Golden State Warriors", score: 122,
        players: [
          { name: "Graham Ike", min: 26, pts: 12, reb: 10, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 13, ftm: 2, fta: 2, composite: 0.4, zScores: { pts: 0.06, reb: 1.764, ast: -0.217, stl: 0.215, blk: -0.528, tpm: -0.9, fgImpact: -0.929, ftImpact: 0.606, to: 0.328 } },
          { name: "Gui Santos", min: 23, pts: 7, reb: 4, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 4, fta: 8, composite: -6.42, zScores: { pts: -0.504, reb: -0.085, ast: 0.159, stl: -0.86, blk: -0.528, tpm: -0.226, fgImpact: -0.752, ftImpact: -3.951, to: 0.328 } },
          { name: "Yaxel Lendeborg", min: 36, pts: 26, reb: 9, ast: 5, stl: 0, blk: 1, to: 2, tpm: 6, fgm: 9, fga: 19, ftm: 2, fta: 3, composite: 5.95, zScores: { pts: 1.639, reb: 1.456, ast: 0.911, stl: -0.86, blk: 0.653, tpm: 3.145, fgImpact: 0.108, ftImpact: -0.685, to: -0.415 } },
          { name: "Brandon Williams", min: 24, pts: 20, reb: 3, ast: 5, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 10, ftm: 8, fta: 11, composite: 1.11, zScores: { pts: 0.962, reb: -0.393, ast: 0.911, stl: 1.29, blk: -0.528, tpm: 0.448, fgImpact: 0.285, ftImpact: -1.448, to: -0.415 } },
          { name: "Will Richard", min: 31, pts: 11, reb: 0, ast: 1, stl: 2, blk: 1, to: 2, tpm: 3, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 0.51, zScores: { pts: -0.053, reb: -1.318, ast: -0.592, stl: 1.29, blk: 0.653, tpm: 1.123, fgImpact: -0.177, ftImpact: 0, to: -0.415 } },
          { name: "Georges Niang", min: 23, pts: 4, reb: 4, ast: 2, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 9, ftm: 0, fta: 0, composite: -6.5, zScores: { pts: -0.843, reb: -0.085, ast: -0.217, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: -1.91, ftImpact: 0, to: -1.158 } },
          { name: "Malevy Leons", min: 4, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.44, zScores: { pts: -1.068, reb: -1.318, ast: -0.968, stl: 0.215, blk: -0.528, tpm: -0.9, fgImpact: 0.057, ftImpact: 0, to: 1.071 } },
          { name: "Charles Bassey", min: 13, pts: 10, reb: 7, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 4, fga: 4, ftm: 2, fta: 3, composite: 1.27, zScores: { pts: -0.166, reb: 0.839, ast: -0.968, stl: -0.86, blk: 1.833, tpm: -0.9, fgImpact: 1.847, ftImpact: -0.685, to: 0.328 } },
          { name: "Gary Payton II", min: 17, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.61, zScores: { pts: -1.068, reb: -1.01, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: -0.348, ftImpact: 0, to: 1.071 } },
          { name: "De'Anthony Melton", min: 27, pts: 25, reb: 5, ast: 5, stl: 3, blk: 0, to: 3, tpm: 4, fgm: 8, fga: 13, ftm: 5, fta: 5, composite: 8.32, zScores: { pts: 1.526, reb: 0.223, ast: 0.911, stl: 2.364, blk: -0.528, tpm: 1.797, fgImpact: 1.67, ftImpact: 1.515, to: -1.158 } },
          { name: "LJ Cryer", min: 14, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -5, zScores: { pts: -0.956, reb: -1.01, ast: -0.592, stl: -0.86, blk: -0.528, tpm: -0.226, fgImpact: -1.157, ftImpact: 0, to: 0.328 } }
        ]
      },
      home: {
        abbr: "PHX", name: "Phoenix Suns", score: 131,
        players: [
          { name: "Dillon Brooks", min: 34, pts: 15, reb: 2, ast: 5, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 12, ftm: 2, fta: 2, composite: -0.47, zScores: { pts: 0.398, reb: -0.702, ast: 0.911, stl: -0.86, blk: -0.528, tpm: -0.226, fgImpact: 0.342, ftImpact: 0.606, to: -0.415 } },
          { name: "Miles Bridges", min: 33, pts: 16, reb: 7, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 6, fga: 11, ftm: 2, fta: 2, composite: 2.99, zScores: { pts: 0.511, reb: 0.839, ast: 0.159, stl: -0.86, blk: -0.528, tpm: 0.448, fgImpact: 0.747, ftImpact: 0.606, to: 1.071 } },
          { name: "Khaman Maluach", min: 28, pts: 9, reb: 9, ast: 3, stl: 1, blk: 2, to: 2, tpm: 1, fgm: 2, fga: 3, ftm: 4, fta: 6, composite: 1.89, zScores: { pts: -0.279, reb: 1.456, ast: 0.159, stl: 0.215, blk: 1.833, tpm: -0.226, fgImpact: 0.519, ftImpact: -1.369, to: -0.415 } },
          { name: "Devin Booker", min: 36, pts: 43, reb: 7, ast: 7, stl: 0, blk: 1, to: 4, tpm: 2, fgm: 17, fga: 25, ftm: 7, fta: 8, composite: 9.84, zScores: { pts: 3.557, reb: 0.839, ast: 1.663, stl: -0.86, blk: 0.653, tpm: 0.448, fgImpact: 4.611, ftImpact: 0.831, to: -1.901 } },
          { name: "Jalen Green", min: 26, pts: 12, reb: 2, ast: 1, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 10, ftm: 1, fta: 1, composite: -2.34, zScores: { pts: 0.06, reb: -0.702, ast: -0.592, stl: 0.215, blk: -0.528, tpm: -0.226, fgImpact: 0.285, ftImpact: 0.303, to: -1.158 } },
          { name: "Ryan Dunn", min: 13, pts: 5, reb: 5, ast: 0, stl: 1, blk: 2, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 1.19, zScores: { pts: -0.73, reb: 0.223, ast: -0.968, stl: 0.215, blk: 1.833, tpm: -0.226, fgImpact: 0.519, ftImpact: 0, to: 0.328 } },
          { name: "Duop Reath", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.2, zScores: { pts: -1.294, reb: -1.318, ast: -0.968, stl: -0.86, blk: -0.528, tpm: -0.9, fgImpact: -0.405, ftImpact: 0, to: 1.071 } },
          { name: "Luke Kennard", min: 18, pts: 11, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 2.19, zScores: { pts: -0.053, reb: -0.085, ast: -0.592, stl: 0.215, blk: -0.528, tpm: 1.123, fgImpact: 1.037, ftImpact: 0, to: 1.071 } },
          { name: "Jordan Goodwin", min: 20, pts: 9, reb: 2, ast: 4, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 1.72, zScores: { pts: -0.279, reb: -0.702, ast: 0.535, stl: 2.364, blk: -0.528, tpm: -0.226, fgImpact: 0.228, ftImpact: 0, to: 0.328 } },
          { name: "Collin Gillespie", min: 28, pts: 11, reb: 4, ast: 9, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 7, ftm: 1, fta: 3, composite: 1.42, zScores: { pts: -0.053, reb: -0.085, ast: 2.414, stl: 1.29, blk: -0.528, tpm: 0.448, fgImpact: 0.633, ftImpact: -2.279, to: -0.415 } }
        ]
      }
    }
    ]
  },
    "2026-10-25": {
    games: [
      {
      id: "401909861",
      line: "Los Angeles Lakers @ Utah Jazz (End of 3rd)",
      completed: false,
      statusText: "End of 3rd",
      away: {
        abbr: "LAL", name: "Los Angeles Lakers", score: null,
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
      id: "401909862",
      line: "Indiana Pacers @ Brooklyn Nets (4:59 - 2nd)",
      completed: false,
      statusText: "4:59 - 2nd",
      away: {
        abbr: "IND", name: "Indiana Pacers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "BKN", name: "Brooklyn Nets", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909863",
      line: "Orlando Magic @ New York Knicks (10/25 - 7:00 PM EDT)",
      completed: false,
      statusText: "10/25 - 7:00 PM EDT",
      away: {
        abbr: "ORL", name: "Orlando Magic", score: null,
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
      id: "401909864",
      line: "Toronto Raptors @ Minnesota Timberwolves (10/25 - 7:00 PM EDT)",
      completed: false,
      statusText: "10/25 - 7:00 PM EDT",
      away: {
        abbr: "TOR", name: "Toronto Raptors", score: null,
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
      id: "401909865",
      line: "LA Clippers @ Oklahoma City Thunder (10/25 - 7:00 PM EDT)",
      completed: false,
      statusText: "10/25 - 7:00 PM EDT",
      away: {
        abbr: "LAC", name: "LA Clippers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "OKC", name: "Oklahoma City Thunder", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909866",
      line: "Detroit Pistons @ Philadelphia 76ers (10/25 - 7:30 PM EDT)",
      completed: false,
      statusText: "10/25 - 7:30 PM EDT",
      away: {
        abbr: "DET", name: "Detroit Pistons", score: null,
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
      id: "401909867",
      line: "Memphis Grizzlies @ Sacramento Kings (10/25 - 9:00 PM EDT)",
      completed: false,
      statusText: "10/25 - 9:00 PM EDT",
      away: {
        abbr: "MEM", name: "Memphis Grizzlies", score: null,
        players: [

        ]
      },
      home: {
        abbr: "SAC", name: "Sacramento Kings", score: null,
        players: [

        ]
      }
    }
    ]
  }
  },
  "nba-preseason": {
    "2026-10-11": {
    games: [
      {
      id: "401898400",
      line: "Dallas Mavericks 132 @ Houston Rockets 115 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DAL", name: "Dallas Mavericks", score: 132,
        players: [
          { name: "Daniel Gafford", min: 15, pts: 9, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 3, fta: 3, composite: 0.18, zScores: { pts: 0.172, reb: 0.286, ast: -0.964, stl: -0.832, blk: -0.55, tpm: -0.896, fgImpact: 1.323, ftImpact: 1.492, to: 0.145 } },
          { name: "P.J. Washington", min: 16, pts: 10, reb: 2, ast: 1, stl: 0, blk: 2, to: 1, tpm: 2, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 2.43, zScores: { pts: 0.342, reb: -0.554, ast: -0.434, stl: -0.832, blk: 2.056, tpm: 0.794, fgImpact: -0.081, ftImpact: 0.995, to: 0.145 } },
          { name: "Cooper Flagg", min: 25, pts: 14, reb: 4, ast: 7, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 3, fga: 10, ftm: 7, fta: 8, composite: 6.48, zScores: { pts: 1.022, reb: 0.286, ast: 2.745, stl: 1.674, blk: 0.753, tpm: -0.051, fgImpact: -1.134, ftImpact: 1.926, to: -0.741 } },
          { name: "Zaccharie Risacher", min: 24, pts: 16, reb: 3, ast: 2, stl: 1, blk: 1, to: 3, tpm: 2, fgm: 7, fga: 13, ftm: 0, fta: 0, composite: 2.65, zScores: { pts: 1.363, reb: -0.134, ast: 0.096, stl: 0.421, blk: 0.753, tpm: 0.794, fgImpact: 0.981, ftImpact: 0, to: -1.626 } },
          { name: "Kyrie Irving", min: 22, pts: 17, reb: 2, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 6, fga: 13, ftm: 3, fta: 3, composite: 3.73, zScores: { pts: 1.533, reb: -0.554, ast: 0.626, stl: -0.832, blk: -0.55, tpm: 0.794, fgImpact: 0.189, ftImpact: 1.492, to: 1.031 } },
          { name: "Dwight Powell", min: 15, pts: 3, reb: 5, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 1, composite: 0.9, zScores: { pts: -0.849, reb: 0.706, ast: 0.096, stl: 0.421, blk: -0.55, tpm: -0.896, fgImpact: 0.441, ftImpact: 0.497, to: 1.031 } },
          { name: "Caleb Martin", min: 15, pts: 3, reb: 4, ast: 3, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: 0.48, zScores: { pts: -0.849, reb: 0.286, ast: 0.626, stl: 1.674, blk: -0.55, tpm: -0.051, fgImpact: 0.09, ftImpact: 0, to: -0.741 } },
          { name: "Naji Marshall", min: 18, pts: 14, reb: 2, ast: 0, stl: 3, blk: 2, to: 1, tpm: 1, fgm: 4, fga: 8, ftm: 5, fta: 6, composite: 5.87, zScores: { pts: 1.022, reb: -0.554, ast: -0.964, stl: 2.927, blk: 2.056, tpm: -0.051, fgImpact: 0.36, ftImpact: 0.931, to: 0.145 } },
          { name: "Tobi Lawal", min: 9, pts: 5, reb: 5, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 3, fta: 4, composite: 0.2, zScores: { pts: -0.509, reb: 0.706, ast: -0.434, stl: -0.832, blk: 0.753, tpm: -0.896, fgImpact: 0.441, ftImpact: -0.063, to: 1.031 } },
          { name: "Tarik Biberovic", min: 13, pts: 8, reb: 2, ast: 1, stl: 0, blk: 2, to: 1, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 1.1, zScores: { pts: 0.001, reb: -0.554, ast: -0.434, stl: -0.832, blk: 2.056, tpm: 0.794, fgImpact: -0.081, ftImpact: 0, to: 0.145 } },
          { name: "Sergio de Larrea", min: 22, pts: 9, reb: 7, ast: 4, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 4.12, zScores: { pts: 0.172, reb: 1.547, ast: 1.156, stl: 1.674, blk: -0.55, tpm: -0.051, fgImpact: -0.081, ftImpact: 0.995, to: -0.741 } },
          { name: "Moussa Cisse", min: 7, pts: 3, reb: 1, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 3, fta: 4, composite: -2.26, zScores: { pts: -0.849, reb: -0.974, ast: -0.434, stl: -0.832, blk: 0.753, tpm: -0.896, fgImpact: 0, ftImpact: -0.063, to: 1.031 } },
          { name: "Seth Lundy", min: 8, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.64, zScores: { pts: -0.849, reb: -1.394, ast: -0.434, stl: -0.832, blk: -0.55, tpm: -0.051, fgImpact: 0.441, ftImpact: 0, to: 1.031 } },
          { name: "Max Christie", min: 22, pts: 14, reb: 4, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 7, ftm: 4, fta: 4, composite: 3.5, zScores: { pts: 1.022, reb: 0.286, ast: -0.434, stl: 0.421, blk: -0.55, tpm: 0.794, fgImpact: 0.711, ftImpact: 1.99, to: -0.741 } },
          { name: "Jett Howard", min: 9, pts: 4, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -4.19, zScores: { pts: -0.679, reb: -0.974, ast: -0.434, stl: -0.832, blk: -0.55, tpm: -0.896, fgImpact: -0.963, ftImpact: 0.995, to: 0.145 } }
        ]
      },
      home: {
        abbr: "HOU", name: "Houston Rockets", score: 115,
        players: [
          { name: "Jabari Smith Jr.", min: 28, pts: 14, reb: 9, ast: 4, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 5.73, zScores: { pts: 1.022, reb: 2.387, ast: 1.156, stl: 0.421, blk: -0.55, tpm: 0.794, fgImpact: 1.242, ftImpact: 0, to: -0.741 } },
          { name: "Clint Capela", min: 24, pts: 5, reb: 9, ast: 0, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: -2.21, zScores: { pts: -0.509, reb: 2.387, ast: -0.964, stl: -0.832, blk: 0.753, tpm: -0.896, fgImpact: 0.531, ftImpact: -1.058, to: -1.626 } },
          { name: "Marcus Smart", min: 24, pts: 20, reb: 5, ast: 4, stl: 0, blk: 1, to: 1, tpm: 4, fgm: 7, fga: 13, ftm: 2, fta: 3, composite: 6.87, zScores: { pts: 2.043, reb: 0.706, ast: 1.156, stl: -0.832, blk: 0.753, tpm: 2.483, fgImpact: 0.981, ftImpact: -0.561, to: 0.145 } },
          { name: "Amen Thompson", min: 30, pts: 14, reb: 7, ast: 6, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 4, fga: 12, ftm: 5, fta: 6, composite: 5.05, zScores: { pts: 1.022, reb: 1.547, ast: 2.215, stl: 0.421, blk: 0.753, tpm: -0.051, fgImpact: -1.044, ftImpact: 0.931, to: -0.741 } },
          { name: "Reed Sheppard", min: 25, pts: 17, reb: 1, ast: 1, stl: 1, blk: 2, to: 5, tpm: 4, fgm: 5, fga: 12, ftm: 3, fta: 4, composite: 1.37, zScores: { pts: 1.533, reb: -0.974, ast: -0.434, stl: 0.421, blk: 2.056, tpm: 2.483, fgImpact: -0.252, ftImpact: -0.063, to: -3.398 } },
          { name: "Tari Eason", min: 22, pts: 9, reb: 6, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 3, fta: 3, composite: 1.82, zScores: { pts: 0.172, reb: 1.126, ast: -0.964, stl: 0.421, blk: 0.753, tpm: -0.896, fgImpact: -0.432, ftImpact: 1.492, to: 0.145 } },
          { name: "Isaiah Crawford", min: 17, pts: 6, reb: 1, ast: 0, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 3, fta: 4, composite: -1.38, zScores: { pts: -0.339, reb: -0.974, ast: -0.964, stl: 1.674, blk: -0.55, tpm: -0.051, fgImpact: -0.261, ftImpact: -0.063, to: 0.145 } },
          { name: "Julian Phillips", min: 8, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.41, zScores: { pts: -1.36, reb: -0.134, ast: -0.964, stl: -0.832, blk: -0.55, tpm: -0.896, fgImpact: -0.702, ftImpact: 0, to: 1.031 } },
          { name: "Oscar Tshiebwe", min: 12, pts: 12, reb: 4, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 4, fta: 6, composite: 1.25, zScores: { pts: 0.682, reb: 0.286, ast: -0.434, stl: 0.421, blk: 0.753, tpm: -0.896, fgImpact: 1.413, ftImpact: -1.121, to: 0.145 } },
          { name: "Bogdan Bogdanovic", min: 14, pts: 7, reb: 4, ast: 0, stl: 1, blk: 0, to: 4, tpm: 2, fgm: 2, fga: 7, ftm: 1, fta: 1, composite: -3.07, zScores: { pts: -0.169, reb: 0.286, ast: -0.964, stl: 0.421, blk: -0.55, tpm: 0.794, fgImpact: -0.873, ftImpact: 0.497, to: -2.512 } },
          { name: "Quadir Copeland", min: 12, pts: 2, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.76, zScores: { pts: -1.019, reb: -0.974, ast: 0.096, stl: -0.832, blk: -0.55, tpm: -0.896, fgImpact: -0.612, ftImpact: 0, to: 1.031 } },
          { name: "Sean Pedulla", min: 7, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -4.94, zScores: { pts: -1.36, reb: -1.394, ast: -0.434, stl: 0.421, blk: -0.55, tpm: -0.896, fgImpact: -1.755, ftImpact: 0, to: 1.031 } },
          { name: "Bruce Thornton", min: 18, pts: 9, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 5, fta: 7, composite: -4.21, zScores: { pts: 0.172, reb: -1.394, ast: -0.964, stl: 0.421, blk: -0.55, tpm: -0.896, fgImpact: -0.522, ftImpact: -0.624, to: 0.145 } }
        ]
      }
    },
      {
      id: "401898401",
      line: "Orlando Magic 105 @ Cleveland Cavaliers 119 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ORL", name: "Orlando Magic", score: 105,
        players: [
          { name: "Paolo Banchero", min: 18, pts: 10, reb: 7, ast: 2, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 1, fga: 10, ftm: 7, fta: 10, composite: -3.68, zScores: { pts: 0.342, reb: 1.547, ast: 0.096, stl: -0.832, blk: 0.753, tpm: -0.051, fgImpact: -2.719, ftImpact: -1.185, to: -1.626 } },
          { name: "Franz Wagner", min: 15, pts: 10, reb: 5, ast: 3, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 4, fga: 7, ftm: 1, fta: 1, composite: -1.06, zScores: { pts: 0.342, reb: 0.706, ast: 0.626, stl: -0.832, blk: -0.55, tpm: -0.051, fgImpact: 0.711, ftImpact: 0.497, to: -2.512 } },
          { name: "Tristan da Silva", min: 24, pts: 17, reb: 3, ast: 2, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 14, ftm: 1, fta: 2, composite: 4.03, zScores: { pts: 1.533, reb: -0.134, ast: 0.096, stl: 1.674, blk: -0.55, tpm: 2.483, fgImpact: -0.162, ftImpact: -1.058, to: 0.145 } },
          { name: "Wendell Carter Jr.", min: 19, pts: 4, reb: 5, ast: 2, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.73, zScores: { pts: -0.679, reb: 0.706, ast: 0.096, stl: 0.421, blk: 0.753, tpm: -0.896, fgImpact: 0.18, ftImpact: 0, to: 0.145 } },
          { name: "Jase Richardson", min: 26, pts: 12, reb: 3, ast: 4, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 9, ftm: 2, fta: 3, composite: 0.18, zScores: { pts: 0.682, reb: -0.134, ast: 1.156, stl: 0.421, blk: -0.55, tpm: -0.896, fgImpact: 0.801, ftImpact: -0.561, to: -0.741 } },
          { name: "Kevin Knox II", min: 12, pts: 7, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 6, ftm: 2, fta: 3, composite: -5.36, zScores: { pts: -0.169, reb: -0.974, ast: -0.964, stl: -0.832, blk: -0.55, tpm: -0.051, fgImpact: -0.522, ftImpact: -0.561, to: -0.741 } },
          { name: "Jamal Cain", min: 19, pts: 11, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 2.5, zScores: { pts: 0.512, reb: -0.134, ast: -0.434, stl: 0.421, blk: -0.55, tpm: -0.051, fgImpact: 0.711, ftImpact: 0.995, to: 1.031 } },
          { name: "Malaki Branham", min: 11, pts: 7, reb: 3, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -0.48, zScores: { pts: -0.169, reb: -0.134, ast: -0.434, stl: 0.421, blk: -0.55, tpm: -0.051, fgImpact: 0.18, ftImpact: 0.995, to: -0.741 } },
          { name: "Noah Penda", min: 22, pts: 8, reb: 5, ast: 5, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 4.07, zScores: { pts: 0.001, reb: 0.706, ast: 1.685, stl: 0.421, blk: 0.753, tpm: 0.794, fgImpact: -0.432, ftImpact: 0, to: 0.145 } },
          { name: "Nikola Vucevic", min: 11, pts: 2, reb: 3, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -2.17, zScores: { pts: -1.019, reb: -0.134, ast: -0.964, stl: 1.674, blk: -0.55, tpm: -0.896, fgImpact: -1.314, ftImpact: 0, to: 1.031 } },
          { name: "Goga Bitadze", min: 12, pts: 7, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 1, fta: 2, composite: -2.3, zScores: { pts: -0.169, reb: -0.554, ast: -0.964, stl: 0.421, blk: -0.55, tpm: -0.896, fgImpact: 1.323, ftImpact: -1.058, to: 0.145 } },
          { name: "Colin Castleton", min: 6, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.69, zScores: { pts: -1.019, reb: -0.554, ast: -0.964, stl: -0.832, blk: -0.55, tpm: -0.896, fgImpact: 0.09, ftImpact: 0, to: 1.031 } },
          { name: "Jevon Carter", min: 19, pts: 2, reb: 2, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.38, zScores: { pts: -1.019, reb: -0.554, ast: 1.156, stl: 0.421, blk: -0.55, tpm: -0.896, fgImpact: -0.963, ftImpact: 0, to: 1.031 } },
          { name: "JD Davison", min: 12, pts: 6, reb: 1, ast: 3, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 1.54, zScores: { pts: -0.339, reb: -0.974, ast: 0.626, stl: 0.421, blk: -0.55, tpm: 0.794, fgImpact: 0.531, ftImpact: 0, to: 1.031 } },
          { name: "Alex Morales", min: 16, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.12, zScores: { pts: -1.36, reb: -1.394, ast: -0.434, stl: 0.421, blk: -0.55, tpm: -0.896, fgImpact: -1.053, ftImpact: 0, to: 0.145 } }
        ]
      },
      home: {
        abbr: "CLE", name: "Cleveland Cavaliers", score: 119,
        players: [
          { name: "Jarrett Allen", min: 25, pts: 7, reb: 7, ast: 1, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 2.72, zScores: { pts: -0.169, reb: 1.547, ast: -0.434, stl: -0.832, blk: 2.056, tpm: -0.051, fgImpact: -0.432, ftImpact: 0, to: 1.031 } },
          { name: "Evan Mobley", min: 27, pts: 14, reb: 7, ast: 2, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 3, fga: 10, ftm: 8, fta: 9, composite: 3.54, zScores: { pts: 1.022, reb: 1.547, ast: 0.096, stl: -0.832, blk: 2.056, tpm: -0.896, fgImpact: -1.134, ftImpact: 2.424, to: -0.741 } },
          { name: "James Harden", min: 26, pts: 24, reb: 4, ast: 2, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 7, fga: 10, ftm: 7, fta: 9, composite: 6.28, zScores: { pts: 2.724, reb: 0.286, ast: 0.096, stl: 0.421, blk: -0.55, tpm: 1.638, fgImpact: 2.034, ftImpact: 0.371, to: -0.741 } },
          { name: "Donovan Mitchell", min: 26, pts: 11, reb: 5, ast: 6, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 9, ftm: 4, fta: 5, composite: 1.28, zScores: { pts: 0.512, reb: 0.706, ast: 2.215, stl: 0.421, blk: -0.55, tpm: -0.051, fgImpact: -0.783, ftImpact: 0.434, to: -1.626 } },
          { name: "Peyton Watson", min: 22, pts: 6, reb: 4, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -1.25, zScores: { pts: -0.339, reb: 0.286, ast: -0.434, stl: 1.674, blk: -0.55, tpm: -0.896, fgImpact: -1.134, ftImpact: 0, to: 0.145 } },
          { name: "Mario Hezonja", min: 17, pts: 13, reb: 5, ast: 2, stl: 2, blk: 2, to: 3, tpm: 2, fgm: 5, fga: 9, ftm: 1, fta: 1, composite: 5.85, zScores: { pts: 0.852, reb: 0.706, ast: 0.096, stl: 1.674, blk: 2.056, tpm: 0.794, fgImpact: 0.801, ftImpact: 0.497, to: -1.626 } },
          { name: "Tristan Enaruna", min: 8, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -1.46, zScores: { pts: -0.509, reb: -0.134, ast: -0.964, stl: -0.832, blk: -0.55, tpm: -0.051, fgImpact: 0.441, ftImpact: 0.995, to: 0.145 } },
          { name: "Thomas Bryant", min: 7, pts: 12, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 1.42, zScores: { pts: 0.682, reb: 0.286, ast: -0.964, stl: -0.832, blk: -0.55, tpm: 0.794, fgImpact: 1.854, ftImpact: 0, to: 0.145 } },
          { name: "Ernest Udeh Jr.", min: 5, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.65, zScores: { pts: -1.019, reb: -0.974, ast: -0.964, stl: -0.832, blk: -0.55, tpm: -0.896, fgImpact: 0.441, ftImpact: 0, to: 0.145 } },
          { name: "Sam Merrill", min: 18, pts: 5, reb: 4, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -0.69, zScores: { pts: -0.509, reb: 0.286, ast: 0.626, stl: -0.832, blk: -0.55, tpm: -0.051, fgImpact: 0.09, ftImpact: 0.995, to: -0.741 } },
          { name: "Jaylon Tyson", min: 21, pts: 13, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 1.62, zScores: { pts: 0.852, reb: -0.554, ast: -0.434, stl: -0.832, blk: -0.55, tpm: 1.638, fgImpact: 0.36, ftImpact: 0.995, to: 0.145 } },
          { name: "Craig Porter Jr.", min: 13, pts: 0, reb: 1, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.76, zScores: { pts: -1.36, reb: -0.974, ast: 1.156, stl: 0.421, blk: -0.55, tpm: -0.896, fgImpact: -0.702, ftImpact: 0, to: 0.145 } },
          { name: "Tyrese Proctor", min: 8, pts: 3, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.08, zScores: { pts: -0.849, reb: -0.974, ast: -0.964, stl: 0.421, blk: -0.55, tpm: -0.051, fgImpact: -0.261, ftImpact: 0, to: 0.145 } },
          { name: "Meleek Thomas", min: 18, pts: 4, reb: 1, ast: 2, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -0.75, zScores: { pts: -0.679, reb: -0.974, ast: 0.096, stl: 1.674, blk: 0.753, tpm: -0.896, fgImpact: -0.873, ftImpact: 0, to: 0.145 } }
        ]
      }
    },
      {
      id: "401901821",
      line: "Milwaukee Bucks 90 @ Charlotte Hornets 105 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIL", name: "Milwaukee Bucks", score: 90,
        players: [
          { name: "Kyle Kuzma", min: 22, pts: 12, reb: 4, ast: 2, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 8, ftm: 2, fta: 4, composite: 0.48, zScores: { pts: 0.682, reb: 0.286, ast: 0.096, stl: 1.674, blk: -0.55, tpm: 0.794, fgImpact: 0.36, ftImpact: -2.116, to: -0.741 } },
          { name: "Jaime Jaquez Jr.", min: 20, pts: 9, reb: 7, ast: 4, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: 2.53, zScores: { pts: 0.172, reb: 1.547, ast: 1.156, stl: -0.832, blk: -0.55, tpm: 0.794, fgImpact: 0.27, ftImpact: -1.058, to: 1.031 } },
          { name: "Myles Turner", min: 24, pts: 5, reb: 2, ast: 0, stl: 1, blk: 5, to: 4, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: 0.92, zScores: { pts: -0.509, reb: -0.554, ast: -0.964, stl: 0.421, blk: 5.966, tpm: -0.051, fgImpact: -0.873, ftImpact: 0, to: -2.512 } },
          { name: "Tyler Herro", min: 23, pts: 18, reb: 7, ast: 2, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 13, ftm: 3, fta: 3, composite: 5.43, zScores: { pts: 1.703, reb: 1.547, ast: 0.096, stl: -0.832, blk: -0.55, tpm: 1.638, fgImpact: 0.189, ftImpact: 1.492, to: 0.145 } },
          { name: "Ryan Rollins", min: 23, pts: 12, reb: 4, ast: 2, stl: 3, blk: 2, to: 0, tpm: 2, fgm: 5, fga: 15, ftm: 0, fta: 0, composite: 6.57, zScores: { pts: 0.682, reb: 0.286, ast: 0.096, stl: 2.927, blk: 2.056, tpm: 0.794, fgImpact: -1.305, ftImpact: 0, to: 1.031 } },
          { name: "Pete Nance", min: 7, pts: 3, reb: 4, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -1.91, zScores: { pts: -0.849, reb: 0.286, ast: -0.434, stl: -0.832, blk: 0.753, tpm: -0.896, fgImpact: 0.09, ftImpact: -1.058, to: 1.031 } },
          { name: "Jericho Sims", min: 15, pts: 6, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -0.46, zScores: { pts: -0.339, reb: 1.126, ast: -0.434, stl: -0.832, blk: -0.55, tpm: -0.896, fgImpact: 1.323, ftImpact: 0, to: 0.145 } },
          { name: "Jake Stephens", min: 3, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.68, zScores: { pts: -0.849, reb: -0.554, ast: -0.964, stl: -0.832, blk: -0.55, tpm: -0.051, fgImpact: 0.09, ftImpact: 0, to: 1.031 } },
          { name: "Kel'el Ware", min: 24, pts: 10, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -1.08, zScores: { pts: 0.342, reb: -0.554, ast: -0.434, stl: -0.832, blk: -0.55, tpm: 0.794, fgImpact: 0.009, ftImpact: 0, to: 0.145 } },
          { name: "Caris LeVert", min: 18, pts: 0, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 2, composite: -7.28, zScores: { pts: -1.36, reb: -0.974, ast: 0.096, stl: 0.421, blk: -0.55, tpm: -0.896, fgImpact: -1.053, ftImpact: -3.111, to: 0.145 } },
          { name: "Gary Trent Jr.", min: 14, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 8, ftm: 0, fta: 0, composite: -6.57, zScores: { pts: -1.36, reb: -0.554, ast: -0.964, stl: 0.421, blk: -0.55, tpm: -0.896, fgImpact: -2.809, ftImpact: 0, to: 0.145 } },
          { name: "Kevin Porter Jr.", min: 18, pts: 6, reb: 4, ast: 4, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 4, fta: 6, composite: -0.96, zScores: { pts: -0.339, reb: 0.286, ast: 1.156, stl: 1.674, blk: -0.55, tpm: -0.896, fgImpact: -1.314, ftImpact: -1.121, to: 0.145 } },
          { name: "AJ Green", min: 22, pts: 6, reb: 2, ast: 4, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.35, zScores: { pts: -0.339, reb: -0.554, ast: 1.156, stl: -0.832, blk: -0.55, tpm: 0.794, fgImpact: -0.171, ftImpact: 0, to: 0.145 } },
          { name: "Kam Jones", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.25, zScores: { pts: -1.36, reb: -0.974, ast: -0.964, stl: -0.832, blk: -0.55, tpm: -0.896, fgImpact: -0.702, ftImpact: 0, to: 1.031 } }
        ]
      },
      home: {
        abbr: "CHA", name: "Charlotte Hornets", score: 105,
        players: [
          { name: "Moussa Diabate", min: 20, pts: 8, reb: 11, ast: 2, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 4, composite: 3.56, zScores: { pts: 0.001, reb: 3.227, ast: 0.096, stl: 0.421, blk: 2.056, tpm: -0.896, fgImpact: 0.621, ftImpact: -2.116, to: 0.145 } },
          { name: "Brandon Miller", min: 23, pts: 18, reb: 3, ast: 4, stl: 0, blk: 1, to: 4, tpm: 4, fgm: 6, fga: 15, ftm: 2, fta: 2, composite: 3.1, zScores: { pts: 1.703, reb: -0.134, ast: 1.156, stl: -0.832, blk: 0.753, tpm: 2.483, fgImpact: -0.513, ftImpact: 0.995, to: -2.512 } },
          { name: "Naz Reid", min: 20, pts: 16, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 7, fga: 14, ftm: 0, fta: 0, composite: 2.75, zScores: { pts: 1.363, reb: -0.554, ast: -0.434, stl: -0.832, blk: 0.753, tpm: 0.794, fgImpact: 0.63, ftImpact: 0, to: 1.031 } },
          { name: "Dennis Schroder", min: 17, pts: 3, reb: 3, ast: 4, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.03, zScores: { pts: -0.849, reb: -0.134, ast: 1.156, stl: -0.832, blk: -0.55, tpm: -0.051, fgImpact: 0.09, ftImpact: 0, to: 0.145 } },
          { name: "Liam McNeeley", min: 27, pts: 11, reb: 0, ast: 5, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 11, ftm: 0, fta: 0, composite: 3.9, zScores: { pts: 0.512, reb: -1.394, ast: 1.685, stl: 1.674, blk: -0.55, tpm: 1.638, fgImpact: -0.693, ftImpact: 0, to: 1.031 } },
          { name: "Royce O'Neale", min: 17, pts: 9, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -0.56, zScores: { pts: 0.172, reb: -0.974, ast: -0.434, stl: 0.421, blk: -0.55, tpm: -0.051, fgImpact: 0.711, ftImpact: 0, to: 0.145 } },
          { name: "Wyatt Fricks", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -6.2, zScores: { pts: -1.36, reb: -1.394, ast: -0.964, stl: -0.832, blk: -0.55, tpm: -0.896, fgImpact: -0.351, ftImpact: 0, to: 0.145 } },
          { name: "Tidjane Salaun", min: 23, pts: 5, reb: 7, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 8, ftm: 2, fta: 2, composite: -0.82, zScores: { pts: -0.509, reb: 1.547, ast: -0.434, stl: -0.832, blk: -0.55, tpm: -0.051, fgImpact: -2.016, ftImpact: 0.995, to: 1.031 } },
          { name: "Hannes Steinbach", min: 12, pts: 8, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: -2.2, zScores: { pts: 0.001, reb: 0.706, ast: -0.434, stl: -0.832, blk: -0.55, tpm: -0.896, fgImpact: -0.342, ftImpact: 0, to: 0.145 } },
          { name: "Ryan Kalkbrenner", min: 12, pts: 4, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.3, zScores: { pts: -0.679, reb: 0.706, ast: -0.964, stl: -0.832, blk: -0.55, tpm: -0.896, fgImpact: 0.882, ftImpact: 0, to: 1.031 } },
          { name: "PJ Hall", min: 9, pts: 4, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -1.82, zScores: { pts: -0.679, reb: 0.286, ast: -0.964, stl: -0.832, blk: 0.753, tpm: -0.896, fgImpact: -0.522, ftImpact: 0, to: 1.031 } },
          { name: "Pat Connaughton", min: 12, pts: 1, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -6.54, zScores: { pts: -1.19, reb: -0.134, ast: -0.434, stl: -0.832, blk: -0.55, tpm: -0.896, fgImpact: -0.702, ftImpact: -1.058, to: -0.741 } },
          { name: "Jarkel Joiner", min: 12, pts: 4, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -3.39, zScores: { pts: -0.679, reb: -0.554, ast: 0.096, stl: -0.832, blk: -0.55, tpm: -0.051, fgImpact: 0.09, ftImpact: -1.058, to: 0.145 } },
          { name: "Sion James", min: 21, pts: 11, reb: 5, ast: 4, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: 3.86, zScores: { pts: 0.512, reb: 0.706, ast: 1.156, stl: -0.832, blk: -0.55, tpm: 1.638, fgImpact: 0.972, ftImpact: 0.995, to: -0.741 } },
          { name: "Michael Ajayi", min: 12, pts: 3, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 0.23, zScores: { pts: -0.849, reb: -0.134, ast: 0.626, stl: 0.421, blk: -0.55, tpm: -0.051, fgImpact: -0.261, ftImpact: 0, to: 1.031 } }
        ]
      }
    },
      {
      id: "401908941",
      line: "Chicago Bulls 128 @ Denver Nuggets 133 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHI", name: "Chicago Bulls", score: 128,
        players: [
          { name: "Jalen Smith", min: 14, pts: 11, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 2.13, zScores: { pts: 0.512, reb: -0.134, ast: -0.964, stl: 0.421, blk: -0.55, tpm: 1.638, fgImpact: 1.062, ftImpact: 0, to: 0.145 } },
          { name: "Isaac Okoro", min: 13, pts: 5, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.6, zScores: { pts: -0.509, reb: -0.974, ast: -0.964, stl: 0.421, blk: -0.55, tpm: -0.051, fgImpact: 0.882, ftImpact: 0, to: 0.145 } },
          { name: "Matas Buzelis", min: 23, pts: 13, reb: 6, ast: 3, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 5, fga: 10, ftm: 1, fta: 2, composite: 1.97, zScores: { pts: 0.852, reb: 1.126, ast: 0.626, stl: -0.832, blk: 0.753, tpm: 0.794, fgImpact: 0.45, ftImpact: -1.058, to: -0.741 } },
          { name: "Caleb Wilson", min: 25, pts: 17, reb: 4, ast: 5, stl: 0, blk: 1, to: 5, tpm: 1, fgm: 6, fga: 10, ftm: 4, fta: 7, composite: -1.46, zScores: { pts: 1.533, reb: 0.286, ast: 1.685, stl: -0.832, blk: 0.753, tpm: -0.051, fgImpact: 1.242, ftImpact: -2.677, to: -3.398 } },
          { name: "Josh Giddey", min: 24, pts: 7, reb: 1, ast: 8, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 4, fta: 4, composite: 5.13, zScores: { pts: -0.169, reb: -0.974, ast: 3.275, stl: 0.421, blk: 0.753, tpm: -0.051, fgImpact: -0.261, ftImpact: 1.99, to: 0.145 } },
          { name: "Drew Peterson", min: 7, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.88, zScores: { pts: -0.849, reb: -1.394, ast: -0.434, stl: -0.832, blk: -0.55, tpm: -0.051, fgImpact: 0.09, ftImpact: 0, to: 0.145 } },
          { name: "Patrick Williams", min: 16, pts: 6, reb: 4, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -1.11, zScores: { pts: -0.339, reb: 0.286, ast: 0.626, stl: -0.832, blk: -0.55, tpm: -0.896, fgImpact: -0.432, ftImpact: 0, to: 1.031 } },
          { name: "Jalen Bridges", min: 7, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -0.849, reb: -0.554, ast: -0.964, stl: -0.832, blk: -0.55, tpm: -0.051, fgImpact: -0.963, ftImpact: 0, to: 1.031 } },
          { name: "Leonard Miller", min: 22, pts: 26, reb: 7, ast: 2, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 11, fga: 14, ftm: 0, fta: 0, composite: 9.75, zScores: { pts: 3.064, reb: 1.547, ast: 0.096, stl: -0.832, blk: -0.55, tpm: 2.483, fgImpact: 3.799, ftImpact: 0, to: 0.145 } },
          { name: "Noa Essengue", min: 23, pts: 8, reb: 6, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 0.35, zScores: { pts: 0.001, reb: 1.126, ast: 0.096, stl: 0.421, blk: -0.55, tpm: -0.896, fgImpact: 0.009, ftImpact: 0, to: 0.145 } },
          { name: "Orlando Robinson", min: 12, pts: 8, reb: 6, ast: 2, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: 0.8, zScores: { pts: 0.001, reb: 1.126, ast: 0.096, stl: -0.832, blk: 0.753, tpm: -0.051, fgImpact: 0.621, ftImpact: -1.058, to: 0.145 } },
          { name: "Buddy Hield", min: 19, pts: 15, reb: 3, ast: 1, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 7, ftm: 3, fta: 3, composite: 6.58, zScores: { pts: 1.192, reb: -0.134, ast: -0.434, stl: 1.674, blk: -0.55, tpm: 2.483, fgImpact: 0.711, ftImpact: 1.492, to: 0.145 } },
          { name: "Tre Jones", min: 10, pts: 0, reb: 1, ast: 5, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -1.7, zScores: { pts: -1.36, reb: -0.974, ast: 1.685, stl: 0.421, blk: -0.55, tpm: -0.896, fgImpact: -1.053, ftImpact: 0, to: 1.031 } },
          { name: "Jordan Hawkins", min: 10, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -3.31, zScores: { pts: -0.339, reb: -1.394, ast: -0.964, stl: -0.832, blk: -0.55, tpm: 0.794, fgImpact: -0.171, ftImpact: 0, to: 0.145 } },
          { name: "Dailyn Swain", min: 15, pts: 0, reb: 1, ast: 2, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.36, reb: -0.974, ast: 0.096, stl: 0.421, blk: 0.753, tpm: -0.896, fgImpact: -1.404, ftImpact: 0, to: -0.741 } }
        ]
      },
      home: {
        abbr: "DEN", name: "Denver Nuggets", score: 133,
        players: [
          { name: "Aaron Gordon", min: 23, pts: 25, reb: 6, ast: 0, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 9, fga: 12, ftm: 4, fta: 5, composite: 5.92, zScores: { pts: 2.894, reb: 1.126, ast: -0.964, stl: -0.832, blk: -0.55, tpm: 1.638, fgImpact: 2.916, ftImpact: 0.434, to: -0.741 } },
          { name: "Cameron Johnson", min: 25, pts: 15, reb: 3, ast: 1, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 7, ftm: 1, fta: 2, composite: 4.82, zScores: { pts: 1.192, reb: -0.134, ast: -0.434, stl: 1.674, blk: -0.55, tpm: 2.483, fgImpact: 1.503, ftImpact: -1.058, to: 0.145 } },
          { name: "Nikola Jokic", min: 26, pts: 22, reb: 11, ast: 10, stl: 0, blk: 1, to: 4, tpm: 1, fgm: 8, fga: 12, ftm: 5, fta: 7, composite: 8.8, zScores: { pts: 2.384, reb: 3.227, ast: 4.335, stl: -0.832, blk: 0.753, tpm: -0.051, fgImpact: 2.124, ftImpact: -0.624, to: -2.512 } },
          { name: "Jamal Murray", min: 26, pts: 13, reb: 3, ast: 5, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 11, ftm: 4, fta: 4, composite: 1.53, zScores: { pts: 0.852, reb: -0.134, ast: 1.685, stl: -0.832, blk: -0.55, tpm: -0.051, fgImpact: -0.693, ftImpact: 1.99, to: -0.741 } },
          { name: "Christian Braun", min: 23, pts: 2, reb: 5, ast: 1, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: 0.55, zScores: { pts: -1.019, reb: 0.706, ast: -0.434, stl: 0.421, blk: 2.056, tpm: -0.896, fgImpact: -1.314, ftImpact: 0, to: 1.031 } },
          { name: "Alpha Diallo", min: 13, pts: 2, reb: 4, ast: 0, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -0.15, zScores: { pts: -1.019, reb: 0.286, ast: -0.964, stl: 2.927, blk: -0.55, tpm: -0.896, fgImpact: -0.963, ftImpact: 0, to: 1.031 } },
          { name: "Zeke Nnaji", min: 7, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 4, composite: -7.13, zScores: { pts: -0.679, reb: -0.974, ast: -0.964, stl: -0.832, blk: -0.55, tpm: -0.896, fgImpact: -0.261, ftImpact: -2.116, to: 0.145 } },
          { name: "DaRon Holmes II", min: 15, pts: 11, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 4, fta: 8, composite: -4.12, zScores: { pts: 0.512, reb: 0.706, ast: -0.434, stl: -0.832, blk: -0.55, tpm: -0.051, fgImpact: 0.621, ftImpact: -4.232, to: 0.145 } },
          { name: "Bryce Hopkins", min: 16, pts: 10, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 6, fta: 8, composite: -2.79, zScores: { pts: 0.342, reb: -0.974, ast: -0.434, stl: -0.832, blk: -0.55, tpm: -0.896, fgImpact: 0.531, ftImpact: -0.127, to: 0.145 } },
          { name: "Trevon Brazile", min: 9, pts: 3, reb: 5, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -1.67, zScores: { pts: -0.849, reb: 0.706, ast: -0.964, stl: -0.832, blk: 0.753, tpm: -0.896, fgImpact: 0.441, ftImpact: -1.058, to: 1.031 } },
          { name: "Cam Whitmore", min: 9, pts: 4, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -2.67, zScores: { pts: -0.679, reb: -1.394, ast: -0.434, stl: -0.832, blk: -0.55, tpm: -0.896, fgImpact: 0.09, ftImpact: 0.995, to: 1.031 } },
          { name: "DeMar DeRozan", min: 9, pts: 2, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 2, fta: 2, composite: -3.13, zScores: { pts: -1.019, reb: -0.554, ast: 0.096, stl: -0.832, blk: -0.55, tpm: -0.896, fgImpact: -1.404, ftImpact: 0.995, to: 1.031 } },
          { name: "Tyus Jones", min: 13, pts: 4, reb: 0, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.19, zScores: { pts: -0.679, reb: -1.394, ast: 0.096, stl: 1.674, blk: -0.55, tpm: -0.896, fgImpact: 0.531, ftImpact: 0, to: 1.031 } },
          { name: "Julian Strawther", min: 17, pts: 13, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: -0.15, zScores: { pts: 0.852, reb: -0.554, ast: -0.964, stl: 0.421, blk: -0.55, tpm: 1.638, fgImpact: -0.252, ftImpact: 0, to: -0.741 } },
          { name: "Ryan Nembhard", min: 9, pts: 3, reb: 0, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -4.9, zScores: { pts: -0.849, reb: -1.394, ast: 0.096, stl: -0.832, blk: -0.55, tpm: -0.896, fgImpact: 0.441, ftImpact: -1.058, to: 0.145 } }
        ]
      }
    }
    ]
  },
    "2026-10-12": {
    games: [
      {
      id: "401914130",
      line: "London Lions 66 @ Portland Trail Blazers 119 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LON", name: "London Lions", score: 66,
        players: [
          { name: "Maxwell Lewis", min: 22, pts: 13, reb: 5, ast: 0, stl: 4, blk: 1, to: 4, tpm: 2, fgm: 4, fga: 8, ftm: 3, fta: 4, composite: 3.33, zScores: { pts: 0.81, reb: 0.763, ast: -0.914, stl: 2.775, blk: 0.978, tpm: 0.796, fgImpact: 0.208, ftImpact: -0.275, to: -1.808 } },
          { name: "Joel Scott", min: 26, pts: 8, reb: 1, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 10, ftm: 2, fta: 4, composite: -4.97, zScores: { pts: -0.013, reb: -0.71, ast: -0.429, stl: -0.771, blk: 0.978, tpm: -0.796, fgImpact: -1.321, ftImpact: -2.168, to: 0.254 } },
          { name: "Keenan Evans", min: 20, pts: 7, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -1.09, zScores: { pts: -0.178, reb: 0.027, ast: -0.429, stl: -0.771, blk: -0.522, tpm: 0, fgImpact: 0.525, ftImpact: 0, to: 0.254 } },
          { name: "Tarik Phillip", min: 18, pts: 3, reb: 0, ast: 2, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 0, fga: 8, ftm: 3, fta: 4, composite: -7.21, zScores: { pts: -0.836, reb: -1.078, ast: 0.056, stl: 1.002, blk: -0.522, tpm: -0.796, fgImpact: -2.954, ftImpact: -0.275, to: -1.808 } },
          { name: "Thomas Kennedy", min: 20, pts: 4, reb: 6, ast: 3, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -2.32, zScores: { pts: -0.671, reb: 1.132, ast: 0.541, stl: 0.116, blk: -0.522, tpm: -0.796, fgImpact: -1.004, ftImpact: 0, to: -1.121 } },
          { name: "Mo Soluade", min: 24, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 1, composite: -5.9, zScores: { pts: -1, reb: 0.027, ast: -0.914, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: -0.687, ftImpact: -1.489, to: 0.254 } },
          { name: "Deane Williams", min: 21, pts: 4, reb: 3, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: -2.24, zScores: { pts: -0.671, reb: 0.027, ast: -0.914, stl: 1.002, blk: -0.522, tpm: -0.796, fgImpact: -1.425, ftImpact: 0.809, to: 0.254 } },
          { name: "Devante Adams", min: 24, pts: 12, reb: 2, ast: 4, stl: 2, blk: 1, to: 5, tpm: 2, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: 1.13, zScores: { pts: 0.645, reb: -0.342, ast: 1.027, stl: 1.002, blk: 0.978, tpm: 0.796, fgImpact: -0.479, ftImpact: 0, to: -2.495 } },
          { name: "Ethan Price", min: 23, pts: 8, reb: 2, ast: 2, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.33, zScores: { pts: -0.013, reb: -0.342, ast: 0.056, stl: -0.771, blk: -0.522, tpm: 0.796, fgImpact: 0.894, ftImpact: 0, to: -0.433 } },
          { name: "Joshua O'Garro", min: 11, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.33, reb: -0.342, ast: -0.914, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: -0.369, ftImpact: 0, to: 0.941 } },
          { name: "Emilis Zibuda", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -5.58, zScores: { pts: -1.33, reb: -0.71, ast: -0.914, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: -1.477, ftImpact: 0, to: 0.941 } },
          { name: "Landrius Horton", min: 25, pts: 5, reb: 4, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 7, ftm: 3, fta: 3, composite: -0.01, zScores: { pts: -0.507, reb: 0.395, ast: 0.056, stl: 1.002, blk: -0.522, tpm: -0.796, fgImpact: -1.794, ftImpact: 1.214, to: 0.941 } }
        ]
      },
      home: {
        abbr: "POR", name: "Portland Trail Blazers", score: 119,
        players: [
          { name: "Toumani Camara", min: 15, pts: 14, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 7, ftm: 4, fta: 4, composite: 4.01, zScores: { pts: 0.974, reb: -0.342, ast: 0.541, stl: 0.116, blk: -0.522, tpm: 0.796, fgImpact: 0.577, ftImpact: 1.618, to: 0.254 } },
          { name: "Deni Avdija", min: 17, pts: 9, reb: 5, ast: 4, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 4, ftm: 2, fta: 3, composite: 0.43, zScores: { pts: 0.151, reb: 0.763, ast: 1.027, stl: -0.771, blk: -0.522, tpm: 0, fgImpact: 0.894, ftImpact: -0.679, to: -0.433 } },
          { name: "Donovan Clingan", min: 15, pts: 11, reb: 6, ast: 1, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 5, fga: 7, ftm: 1, fta: 1, composite: 1.25, zScores: { pts: 0.481, reb: 1.132, ast: -0.429, stl: -0.771, blk: 0.978, tpm: -0.796, fgImpact: 1.367, ftImpact: 0.405, to: -1.121 } },
          { name: "Jrue Holiday", min: 15, pts: 6, reb: 5, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.34, zScores: { pts: -0.342, reb: 0.763, ast: 0.541, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: 0.525, ftImpact: 0, to: 0.941 } },
          { name: "Ja Morant", min: 14, pts: 5, reb: 0, ast: 5, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: 0.91, zScores: { pts: -0.507, reb: -1.078, ast: 1.512, stl: 1.888, blk: -0.522, tpm: 0, fgImpact: -0.635, ftImpact: 0, to: 0.254 } },
          { name: "John Tonje", min: 19, pts: 1, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 1, fta: 2, composite: -5.96, zScores: { pts: -1.165, reb: -0.342, ast: -0.429, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: -1.108, ftImpact: -1.084, to: 0.254 } },
          { name: "Jeremy Sochan", min: 21, pts: 8, reb: 8, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 1.91, zScores: { pts: -0.013, reb: 1.868, ast: 0.056, stl: 0.116, blk: -0.522, tpm: -0.796, fgImpact: 0.946, ftImpact: 0, to: 0.254 } },
          { name: "Micah Potter", min: 17, pts: 7, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 8, ftm: 1, fta: 1, composite: -2.76, zScores: { pts: -0.178, reb: -0.342, ast: -0.914, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: -0.583, ftImpact: 0.405, to: 0.941 } },
          { name: "Branden Carlson", min: 14, pts: 3, reb: 4, ast: 0, stl: 0, blk: 1, to: 4, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.9, zScores: { pts: -0.836, reb: 0.395, ast: -0.914, stl: -0.771, blk: 0.978, tpm: 0, fgImpact: 0.052, ftImpact: 0, to: -1.808 } },
          { name: "Yang Hansen", min: 21, pts: 13, reb: 4, ast: 4, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 8, ftm: 0, fta: 0, composite: 2.29, zScores: { pts: 0.81, reb: 0.395, ast: 1.027, stl: -0.771, blk: -0.522, tpm: 0, fgImpact: 1.789, ftImpact: 0, to: -0.433 } },
          { name: "Vit Krejci", min: 21, pts: 10, reb: 5, ast: 2, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 4.52, zScores: { pts: 0.316, reb: 0.763, ast: 0.056, stl: 1.888, blk: -0.522, tpm: 0.796, fgImpact: 0.156, ftImpact: 0.809, to: 0.254 } },
          { name: "Scoot Henderson", min: 16, pts: 14, reb: 0, ast: 3, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 7, ftm: 2, fta: 3, composite: 3.46, zScores: { pts: 0.974, reb: -1.078, ast: 0.541, stl: 1.002, blk: -0.522, tpm: 2.387, fgImpact: 0.577, ftImpact: -0.679, to: 0.254 } },
          { name: "Jayson Kent", min: 21, pts: 5, reb: 6, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: 0.1, zScores: { pts: -0.507, reb: 1.132, ast: -0.429, stl: 0.116, blk: -0.522, tpm: 0, fgImpact: -0.635, ftImpact: 0, to: 0.941 } },
          { name: "Sidy Cissoko", min: 15, pts: 13, reb: 2, ast: 3, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 5, ftm: 0, fta: 0, composite: 4.75, zScores: { pts: 0.81, reb: -0.342, ast: 0.541, stl: 1.002, blk: -0.522, tpm: 1.591, fgImpact: 2.106, ftImpact: 0, to: -0.433 } }
        ]
      }
    },
      {
      id: "401898402",
      line: "Oklahoma City Thunder 110 @ Atlanta Hawks 113 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OKC", name: "Oklahoma City Thunder", score: 110,
        players: [
          { name: "Brooks Barnhizer", min: 40, pts: 20, reb: 8, ast: 2, stl: 0, blk: 2, to: 2, tpm: 2, fgm: 8, fga: 23, ftm: 2, fta: 2, composite: 4.6, zScores: { pts: 1.962, reb: 1.868, ast: 0.056, stl: -0.771, blk: 2.479, tpm: 0.796, fgImpact: -2.169, ftImpact: 0.809, to: -0.433 } },
          { name: "Aday Mara", min: 33, pts: 17, reb: 10, ast: 6, stl: 0, blk: 4, to: 5, tpm: 0, fgm: 4, fga: 9, ftm: 9, fta: 12, composite: 6.5, zScores: { pts: 1.468, reb: 2.605, ast: 1.997, stl: -0.771, blk: 5.48, tpm: -0.796, fgImpact: -0.161, ftImpact: -0.824, to: -2.495 } },
          { name: "Josh Dix", min: 37, pts: 16, reb: 3, ast: 7, stl: 2, blk: 1, to: 1, tpm: 4, fgm: 6, fga: 15, ftm: 0, fta: 0, composite: 7.64, zScores: { pts: 1.303, reb: 0.027, ast: 2.482, stl: 1.002, blk: 0.978, tpm: 2.387, fgImpact: -0.796, ftImpact: 0, to: 0.254 } },
          { name: "Otega Oweh", min: 35, pts: 11, reb: 10, ast: 1, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 13, ftm: 1, fta: 2, composite: 1.48, zScores: { pts: 0.481, reb: 2.605, ast: -0.429, stl: 1.002, blk: 0.978, tpm: -0.796, fgImpact: -0.848, ftImpact: -1.084, to: -0.433 } },
          { name: "Bennett Stirtz", min: 38, pts: 26, reb: 4, ast: 5, stl: 0, blk: 0, to: 5, tpm: 6, fgm: 9, fga: 16, ftm: 2, fta: 3, composite: 5.57, zScores: { pts: 2.949, reb: 0.395, ast: 1.512, stl: -0.771, blk: -0.522, tpm: 3.978, fgImpact: 1.206, ftImpact: -0.679, to: -2.495 } },
          { name: "Andrew Holifield", min: 17, pts: 4, reb: 6, ast: 0, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: 3.15, zScores: { pts: -0.671, reb: 1.132, ast: -0.914, stl: 0.116, blk: 2.479, tpm: -0.796, fgImpact: 0.052, ftImpact: 0.809, to: 0.941 } },
          { name: "Christoph Tilly", min: 10, pts: 5, reb: 2, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -0.46, zScores: { pts: -0.507, reb: -0.342, ast: -0.914, stl: -0.771, blk: 0.978, tpm: 0, fgImpact: 0.842, ftImpact: 0, to: 0.254 } },
          { name: "Zhaire Smith", min: 11, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 1, composite: -3.14, zScores: { pts: -0.507, reb: -0.71, ast: -0.914, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: -0.265, ftImpact: 0.405, to: 0.941 } },
          { name: "Anthony Pritchard", min: 19, pts: 6, reb: 7, ast: 5, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: 5.07, zScores: { pts: -0.342, reb: 1.5, ast: 1.512, stl: -0.771, blk: 2.479, tpm: -0.796, fgImpact: -0.265, ftImpact: 0.809, to: 0.941 } }
        ]
      },
      home: {
        abbr: "ATL", name: "Atlanta Hawks", score: 113,
        players: [
          { name: "Corey Kispert", min: 26, pts: 6, reb: 1, ast: 2, stl: 0, blk: 2, to: 0, tpm: 2, fgm: 2, fga: 11, ftm: 0, fta: 0, composite: -0.03, zScores: { pts: -0.342, reb: -0.71, ast: 0.056, stl: -0.771, blk: 2.479, tpm: 0.796, fgImpact: -2.481, ftImpact: 0, to: 0.941 } },
          { name: "Asa Newell", min: 27, pts: 7, reb: 10, ast: 1, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 3, fga: 14, ftm: 0, fta: 0, composite: 1.85, zScores: { pts: -0.178, reb: 2.605, ast: -0.429, stl: -0.771, blk: 2.479, tpm: 0, fgImpact: -2.798, ftImpact: 0, to: 0.941 } },
          { name: "Jock Landale", min: 21, pts: 17, reb: 6, ast: 5, stl: 3, blk: 2, to: 0, tpm: 1, fgm: 7, fga: 11, ftm: 2, fta: 2, composite: 11.7, zScores: { pts: 1.468, reb: 1.132, ast: 1.512, stl: 1.888, blk: 2.479, tpm: 0, fgImpact: 1.471, ftImpact: 0.809, to: 0.941 } },
          { name: "Nickeil Alexander-Walker", min: 25, pts: 16, reb: 6, ast: 5, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 4, fga: 10, ftm: 4, fta: 4, composite: 5.89, zScores: { pts: 1.303, reb: 1.132, ast: 1.512, stl: 0.116, blk: -0.522, tpm: 2.387, fgImpact: -0.531, ftImpact: 1.618, to: -1.121 } },
          { name: "Kingston Flemings", min: 28, pts: 7, reb: 2, ast: 7, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 11, ftm: 1, fta: 2, composite: -1.07, zScores: { pts: -0.178, reb: -0.342, ast: 2.482, stl: 0.116, blk: -0.522, tpm: -0.796, fgImpact: -1.69, ftImpact: -1.084, to: 0.941 } },
          { name: "Dorian Finney-Smith", min: 17, pts: 8, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -1.04, zScores: { pts: -0.013, reb: -0.71, ast: -0.914, stl: -0.771, blk: -0.522, tpm: 0.796, fgImpact: 0.156, ftImpact: 0, to: 0.941 } },
          { name: "Jalen Wilson", min: 30, pts: 12, reb: 8, ast: 1, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 4, fga: 13, ftm: 0, fta: 0, composite: 1.99, zScores: { pts: 0.645, reb: 1.868, ast: -0.429, stl: 0.116, blk: -0.522, tpm: 2.387, fgImpact: -1.638, ftImpact: 0, to: -0.433 } },
          { name: "Cameron Corhen", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.72, zScores: { pts: -1, reb: -1.078, ast: -0.914, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: 0.421, ftImpact: 0, to: 0.941 } },
          { name: "Zuby Ejiofor", min: 23, pts: 15, reb: 9, ast: 3, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 5, fga: 9, ftm: 4, fta: 4, composite: 5.25, zScores: { pts: 1.139, reb: 2.237, ast: 0.541, stl: -0.771, blk: 0.978, tpm: 0, fgImpact: 0.629, ftImpact: 1.618, to: -1.121 } },
          { name: "RayJ Dennis", min: 24, pts: 13, reb: 4, ast: 7, stl: 3, blk: 0, to: 3, tpm: 1, fgm: 6, fga: 11, ftm: 0, fta: 1, composite: 3.13, zScores: { pts: 0.81, reb: 0.395, ast: 2.482, stl: 1.888, blk: -0.522, tpm: 0, fgImpact: 0.681, ftImpact: -1.489, to: -1.121 } },
          { name: "Kobe Johnson", min: 10, pts: 10, reb: 3, ast: 0, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 4, ftm: 0, fta: 0, composite: 2.64, zScores: { pts: 0.316, reb: 0.027, ast: -0.914, stl: 1.002, blk: -0.522, tpm: 0.796, fgImpact: 1.685, ftImpact: 0, to: 0.254 } },
          { name: "Isaac McKneely", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.84, zScores: { pts: -1.33, reb: -1.078, ast: -0.914, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: -0.369, ftImpact: 0, to: 0.941 } }
        ]
      }
    },
      {
      id: "401901824",
      line: "Brooklyn Nets 131 @ Washington Wizards 122 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BKN", name: "Brooklyn Nets", score: 131,
        players: [
          { name: "Julius Randle", min: 23, pts: 14, reb: 4, ast: 9, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 8, ftm: 2, fta: 4, composite: 2.92, zScores: { pts: 0.974, reb: 0.395, ast: 3.453, stl: 0.116, blk: -0.522, tpm: 0.796, fgImpact: 0.998, ftImpact: -2.168, to: -1.121 } },
          { name: "Michael Porter Jr.", min: 24, pts: 22, reb: 4, ast: 0, stl: 2, blk: 1, to: 3, tpm: 2, fgm: 8, fga: 13, ftm: 4, fta: 5, composite: 5.08, zScores: { pts: 2.291, reb: 0.395, ast: -0.914, stl: 1.002, blk: 0.978, tpm: 0.796, fgImpact: 1.523, ftImpact: 0.13, to: -1.121 } },
          { name: "Day'Ron Sharpe", min: 21, pts: 4, reb: 2, ast: 3, stl: 3, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 1, fta: 4, composite: -0.99, zScores: { pts: -0.671, reb: -0.342, ast: 0.541, stl: 1.888, blk: 0.978, tpm: 0, fgImpact: 0.421, ftImpact: -4.061, to: 0.254 } },
          { name: "Keon Ellis", min: 21, pts: 15, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 7, ftm: 4, fta: 5, composite: 1.46, zScores: { pts: 1.139, reb: -0.71, ast: -0.914, stl: -0.771, blk: -0.522, tpm: 1.591, fgImpact: 0.577, ftImpact: 0.13, to: 0.941 } },
          { name: "Egor Demin", min: 22, pts: 4, reb: 0, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -3.53, zScores: { pts: -0.671, reb: -1.078, ast: 0.541, stl: 0.116, blk: -0.522, tpm: -0.796, fgImpact: -1.373, ftImpact: 0, to: 0.254 } },
          { name: "Josh Minott", min: 7, pts: 6, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -0.33, zScores: { pts: -0.342, reb: -0.342, ast: -0.914, stl: -0.771, blk: 0.978, tpm: -0.796, fgImpact: 0.104, ftImpact: 0.809, to: 0.941 } },
          { name: "Grant Nelson", min: 9, pts: 9, reb: 4, ast: 1, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: -0.98, zScores: { pts: 0.151, reb: 0.395, ast: -0.429, stl: -0.771, blk: -0.522, tpm: 0, fgImpact: 1.315, ftImpact: 0, to: -1.121 } },
          { name: "Noah Clowney", min: 22, pts: 15, reb: 3, ast: 4, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 8, ftm: 1, fta: 1, composite: 6.52, zScores: { pts: 1.139, reb: 0.027, ast: 1.027, stl: 0.116, blk: -0.522, tpm: 2.387, fgImpact: 0.998, ftImpact: 0.405, to: 0.941 } },
          { name: "Danny Wolf", min: 9, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.97, zScores: { pts: -1, reb: -0.71, ast: -0.429, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: -0.687, ftImpact: 0, to: 0.941 } },
          { name: "Chaney Johnson", min: 16, pts: 4, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.29, zScores: { pts: -0.671, reb: -0.71, ast: -0.429, stl: 0.116, blk: -0.522, tpm: -0.796, fgImpact: 0.473, ftImpact: 0, to: 0.254 } },
          { name: "Moritz Wagner", min: 18, pts: 13, reb: 5, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 5, fta: 6, composite: 1.82, zScores: { pts: 0.81, reb: 0.763, ast: -0.429, stl: 1.002, blk: -0.522, tpm: -0.796, fgImpact: 0.208, ftImpact: 0.534, to: 0.254 } },
          { name: "Terance Mann", min: 9, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.08, zScores: { pts: -0.836, reb: -0.342, ast: -0.914, stl: -0.771, blk: -0.522, tpm: 0, fgImpact: 0.052, ftImpact: 0, to: 0.254 } },
          { name: "Drake Powell", min: 10, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.76, zScores: { pts: -0.836, reb: -0.71, ast: -0.914, stl: -0.771, blk: -0.522, tpm: 0, fgImpact: 0.052, ftImpact: 0, to: 0.941 } },
          { name: "Ben Saraf", min: 8, pts: 0, reb: 0, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.22, zScores: { pts: -1.33, reb: -1.078, ast: 1.027, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: 0, ftImpact: 0, to: 0.254 } },
          { name: "Nolan Traore", min: 20, pts: 17, reb: 1, ast: 2, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 6, fga: 8, ftm: 3, fta: 3, composite: 2.2, zScores: { pts: 1.468, reb: -0.71, ast: 0.056, stl: -0.771, blk: -0.522, tpm: 0.796, fgImpact: 1.789, ftImpact: 1.214, to: -1.121 } }
        ]
      },
      home: {
        abbr: "WSH", name: "Washington Wizards", score: 122,
        players: [
          { name: "AJ Dybantsa", min: 25, pts: 14, reb: 4, ast: 3, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 5, fga: 12, ftm: 3, fta: 4, composite: 1.13, zScores: { pts: 0.974, reb: 0.395, ast: 0.541, stl: 0.116, blk: 0.978, tpm: 0, fgImpact: -0.479, ftImpact: -0.275, to: -1.121 } },
          { name: "Kyshawn George", min: 25, pts: 21, reb: 1, ast: 4, stl: 3, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 7, ftm: 6, fta: 6, composite: 10.93, zScores: { pts: 2.126, reb: -0.71, ast: 1.027, stl: 1.888, blk: -0.522, tpm: 1.591, fgImpact: 2.158, ftImpact: 2.428, to: 0.941 } },
          { name: "Deandre Ayton", min: 25, pts: 4, reb: 7, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.12, zScores: { pts: -0.671, reb: 1.5, ast: 1.027, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: 0.104, ftImpact: 0, to: 0.254 } },
          { name: "Alex Sarr", min: 23, pts: 6, reb: 9, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -0.342, reb: 2.237, ast: -0.914, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: -1.321, ftImpact: 0, to: -1.121 } },
          { name: "Trae Young", min: 28, pts: 11, reb: 3, ast: 11, stl: 1, blk: 0, to: 8, tpm: 1, fgm: 1, fga: 5, ftm: 8, fta: 8, composite: 2.15, zScores: { pts: 0.481, reb: 0.027, ast: 4.423, stl: 0.116, blk: -0.522, tpm: 0, fgImpact: -1.056, ftImpact: 3.237, to: -4.557 } },
          { name: "Justin Champagnie", min: 16, pts: 7, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -0.74, zScores: { pts: -0.178, reb: 0.027, ast: -0.914, stl: 0.116, blk: -0.522, tpm: 0, fgImpact: -0.213, ftImpact: 0, to: 0.941 } },
          { name: "Felix Okpara", min: 12, pts: 2, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.48, zScores: { pts: -1, reb: -0.342, ast: -0.914, stl: -0.771, blk: 0.978, tpm: -0.796, fgImpact: 0.421, ftImpact: 0, to: 0.941 } },
          { name: "Reece Beekman", min: 7, pts: 5, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 3, fta: 3, composite: -1.33, zScores: { pts: -0.507, reb: -1.078, ast: -0.429, stl: 0.116, blk: -0.522, tpm: -0.796, fgImpact: 0.421, ftImpact: 1.214, to: 0.254 } },
          { name: "Trevor Keels", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.47, zScores: { pts: -1.33, reb: -0.71, ast: -0.914, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: -0.369, ftImpact: 0, to: 0.941 } },
          { name: "Tre Mann", min: 12, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.01, zScores: { pts: -0.836, reb: -1.078, ast: -0.429, stl: -0.771, blk: -0.522, tpm: 0, fgImpact: -0.317, ftImpact: 0, to: 0.941 } },
          { name: "Bub Carrington", min: 13, pts: 14, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 5, ftm: 5, fta: 6, composite: 0.39, zScores: { pts: 0.974, reb: -1.078, ast: -0.429, stl: -0.771, blk: -0.522, tpm: 1.591, fgImpact: 0.525, ftImpact: 0.534, to: -0.433 } },
          { name: "Bilal Coulibaly", min: 24, pts: 19, reb: 2, ast: 1, stl: 3, blk: 1, to: 0, tpm: 3, fgm: 7, fga: 11, ftm: 2, fta: 2, composite: 8.71, zScores: { pts: 1.797, reb: -0.342, ast: -0.429, stl: 1.888, blk: 0.978, tpm: 1.591, fgImpact: 1.471, ftImpact: 0.809, to: 0.941 } },
          { name: "Will Riley", min: 7, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.59, zScores: { pts: -0.836, reb: -0.71, ast: -0.429, stl: -0.771, blk: -0.522, tpm: 0, fgImpact: 0.421, ftImpact: 0, to: 0.254 } },
          { name: "Tre Johnson", min: 20, pts: 13, reb: 0, ast: 3, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 3.23, zScores: { pts: 0.81, reb: -1.078, ast: 0.541, stl: 1.002, blk: -0.522, tpm: 1.591, fgImpact: 0.629, ftImpact: 0, to: 0.254 } }
        ]
      }
    },
      {
      id: "401914124",
      line: "Minnesota Timberwolves 122 @ New York Knicks 104 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIN", name: "Minnesota Timberwolves", score: 122,
        players: [
          { name: "Jaden McDaniels", min: 24, pts: 22, reb: 5, ast: 2, stl: 0, blk: 0, to: 4, tpm: 4, fgm: 8, fga: 12, ftm: 2, fta: 2, composite: 5.1, zScores: { pts: 2.291, reb: 0.763, ast: 0.056, stl: -0.771, blk: -0.522, tpm: 2.387, fgImpact: 1.892, ftImpact: 0.809, to: -1.808 } },
          { name: "Cody Williams", min: 15, pts: 6, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.24, zScores: { pts: -0.342, reb: -0.71, ast: -0.914, stl: -0.771, blk: 0.978, tpm: 0.796, fgImpact: 0.473, ftImpact: 0, to: 0.254 } },
          { name: "Rudy Gobert", min: 22, pts: 2, reb: 3, ast: 3, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: 0.17, zScores: { pts: -1, reb: 0.027, ast: 0.541, stl: 0.116, blk: 0.978, tpm: -0.796, fgImpact: 0.052, ftImpact: 0, to: 0.254 } },
          { name: "LaMelo Ball", min: 22, pts: 10, reb: 3, ast: 7, stl: 0, blk: 1, to: 5, tpm: 1, fgm: 3, fga: 7, ftm: 3, fta: 3, composite: 1.54, zScores: { pts: 0.316, reb: 0.027, ast: 2.482, stl: -0.771, blk: 0.978, tpm: 0, fgImpact: -0.213, ftImpact: 1.214, to: -2.495 } },
          { name: "Anthony Edwards", min: 25, pts: 26, reb: 3, ast: 3, stl: 1, blk: 0, to: 2, tpm: 5, fgm: 8, fga: 16, ftm: 5, fta: 7, composite: 5.32, zScores: { pts: 2.949, reb: 0.027, ast: 0.541, stl: 0.116, blk: -0.522, tpm: 3.183, fgImpact: 0.416, ftImpact: -0.954, to: -0.433 } },
          { name: "Trey Lyles", min: 16, pts: 3, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.22, zScores: { pts: -0.836, reb: 0.027, ast: -0.429, stl: -0.771, blk: -0.522, tpm: 0, fgImpact: 0.052, ftImpact: 0, to: 0.254 } },
          { name: "Drew Timme", min: 6, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -4.84, zScores: { pts: -0.836, reb: -1.078, ast: -0.429, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: 0.421, ftImpact: -1.084, to: 0.254 } },
          { name: "KJ Martin", min: 12, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: -3.3, zScores: { pts: -0.342, reb: -1.078, ast: -0.914, stl: -0.771, blk: -0.522, tpm: 0, fgImpact: 0.473, ftImpact: -1.084, to: 0.941 } },
          { name: "Norchad Omier", min: 6, pts: 2, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.13, zScores: { pts: -1, reb: 0.395, ast: -0.429, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: 0.052, ftImpact: 0, to: 0.941 } },
          { name: "Isaiah Evans", min: 12, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -3.88, zScores: { pts: -0.671, reb: -0.342, ast: -0.429, stl: -0.771, blk: -0.522, tpm: 0, fgImpact: -0.317, ftImpact: -1.084, to: 0.254 } },
          { name: "Joan Beringer", min: 14, pts: 5, reb: 4, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 6, composite: -3.36, zScores: { pts: -0.507, reb: 0.395, ast: -0.914, stl: 0.116, blk: 0.978, tpm: -0.796, fgImpact: -0.317, ftImpact: -3.252, to: 0.941 } },
          { name: "Ayo Dosunmu", min: 20, pts: 11, reb: 4, ast: 2, stl: 3, blk: 1, to: 2, tpm: 3, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 5.92, zScores: { pts: 0.481, reb: 0.395, ast: 0.056, stl: 1.888, blk: 0.978, tpm: 1.591, fgImpact: 0.156, ftImpact: 0.809, to: -0.433 } },
          { name: "Jaylen Clark", min: 10, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.98, zScores: { pts: -1, reb: -0.342, ast: -0.914, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: 0.421, ftImpact: 0, to: 0.941 } },
          { name: "Bones Hyland", min: 14, pts: 6, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -0.342, reb: -0.342, ast: 0.056, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: -0.952, ftImpact: 0, to: 0.254 } },
          { name: "Antonio Reeves", min: 11, pts: 6, reb: 0, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.81, zScores: { pts: -0.342, reb: -1.078, ast: -0.914, stl: 1.002, blk: -0.522, tpm: -0.796, fgImpact: 0.894, ftImpact: 0, to: 0.941 } },
          { name: "Zyon Pullin", min: 12, pts: 8, reb: 3, ast: 3, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 4, composite: 0.79, zScores: { pts: -0.013, reb: 0.027, ast: 0.541, stl: 1.888, blk: -0.522, tpm: -0.796, fgImpact: 0.894, ftImpact: -2.168, to: 0.941 } }
        ]
      },
      home: {
        abbr: "NY", name: "New York Knicks", score: 104,
        players: [
          { name: "OG Anunoby", min: 22, pts: 15, reb: 2, ast: 1, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 8, ftm: 6, fta: 6, composite: 5.31, zScores: { pts: 1.139, reb: -0.342, ast: -0.429, stl: 1.888, blk: -0.522, tpm: 0, fgImpact: 0.208, ftImpact: 2.428, to: 0.941 } },
          { name: "Karl-Anthony Towns", min: 22, pts: 11, reb: 2, ast: 4, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 6, ftm: 4, fta: 4, composite: 1.41, zScores: { pts: 0.481, reb: -0.342, ast: 1.027, stl: 0.116, blk: -0.522, tpm: 0, fgImpact: 0.156, ftImpact: 1.618, to: -1.121 } },
          { name: "Josh Hart", min: 22, pts: 2, reb: 3, ast: 3, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.02, zScores: { pts: -1, reb: 0.027, ast: 0.541, stl: 0.116, blk: -0.522, tpm: -0.796, fgImpact: 0.052, ftImpact: 0, to: -0.433 } },
          { name: "Mikal Bridges", min: 22, pts: 9, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: -0.21, zScores: { pts: 0.151, reb: -0.342, ast: 0.056, stl: -0.771, blk: -0.522, tpm: 0, fgImpact: 0.156, ftImpact: 0.809, to: 0.254 } },
          { name: "Jalen Brunson", min: 22, pts: 20, reb: 5, ast: 3, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 13, ftm: 7, fta: 8, composite: 5.49, zScores: { pts: 1.962, reb: 0.763, ast: 0.541, stl: 1.888, blk: -0.522, tpm: 0, fgImpact: -0.058, ftImpact: 1.344, to: -0.433 } },
          { name: "Drew Eubanks", min: 7, pts: 4, reb: 0, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.95, zScores: { pts: -0.671, reb: -1.078, ast: -0.914, stl: 0.116, blk: 0.978, tpm: -0.796, fgImpact: 0.473, ftImpact: 0, to: 0.941 } },
          { name: "Pacome Dadiet", min: 14, pts: 7, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: -1.48, zScores: { pts: -0.178, reb: -0.71, ast: -0.429, stl: -0.771, blk: -0.522, tpm: 0.796, fgImpact: 0.473, ftImpact: -1.084, to: 0.941 } },
          { name: "Mohamed Diawara", min: 13, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.8, zScores: { pts: -1.33, reb: 0.027, ast: -0.914, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: -0.369, ftImpact: 0, to: -1.121 } },
          { name: "Andre Drummond", min: 12, pts: 4, reb: 4, ast: 0, stl: 1, blk: 3, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: 3.91, zScores: { pts: -0.671, reb: 0.395, ast: -0.914, stl: 0.116, blk: 3.979, tpm: -0.796, fgImpact: 0.052, ftImpact: 0.809, to: 0.941 } },
          { name: "Tony Bradley", min: 7, pts: 10, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 5, ftm: 0, fta: 0, composite: 0.02, zScores: { pts: 0.316, reb: -0.342, ast: -0.914, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: 2.106, ftImpact: 0, to: 0.941 } },
          { name: "Jordan Clarkson", min: 10, pts: 5, reb: 0, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.56, zScores: { pts: -0.507, reb: -1.078, ast: -0.914, stl: -0.771, blk: 0.978, tpm: 0, fgImpact: 0.473, ftImpact: 0, to: 0.254 } },
          { name: "Landry Shamet", min: 12, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -4.27, zScores: { pts: -1, reb: -1.078, ast: -0.429, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: -0.738, ftImpact: 0.809, to: 0.254 } },
          { name: "Jose Alvarado", min: 15, pts: 4, reb: 2, ast: 2, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -4.65, zScores: { pts: -0.671, reb: -0.342, ast: 0.056, stl: 0.116, blk: -0.522, tpm: -0.796, fgImpact: -1.373, ftImpact: 0, to: -1.121 } },
          { name: "Ochai Agbaji", min: 10, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -3.22, zScores: { pts: -1, reb: -0.342, ast: -0.429, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: -1.108, ftImpact: 0.809, to: 0.941 } },
          { name: "Kevin McCullar Jr.", min: 7, pts: 2, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.12, zScores: { pts: -1, reb: -1.078, ast: 0.056, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: 0.052, ftImpact: 0, to: 0.941 } },
          { name: "Miles McBride", min: 13, pts: 3, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -0.836, reb: -1.078, ast: -0.914, stl: 0.116, blk: -0.522, tpm: 0, fgImpact: -1.056, ftImpact: 0, to: 0.254 } },
          { name: "Tyler Kolek", min: 12, pts: 4, reb: 0, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 1, composite: -5, zScores: { pts: -0.671, reb: -1.078, ast: 1.027, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: -0.265, ftImpact: -1.489, to: -0.433 } }
        ]
      }
    },
      {
      id: "401898721",
      line: "San Antonio Spurs 109 @ Utah Jazz 119 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SA", name: "San Antonio Spurs", score: 109,
        players: [
          { name: "Harrison Barnes", min: 23, pts: 19, reb: 2, ast: 1, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 3, fga: 8, ftm: 10, fta: 12, composite: 0.69, zScores: { pts: 1.797, reb: -0.342, ast: -0.429, stl: -0.771, blk: -0.522, tpm: 1.591, fgImpact: -0.583, ftImpact: 1.069, to: -1.121 } },
          { name: "Keldon Johnson", min: 24, pts: 15, reb: 4, ast: 4, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 10, ftm: 7, fta: 9, composite: 1.82, zScores: { pts: 1.139, reb: 0.395, ast: 1.027, stl: 1.002, blk: -0.522, tpm: -0.796, fgImpact: -0.531, ftImpact: -0.145, to: 0.254 } },
          { name: "Julian Champagnie", min: 26, pts: 14, reb: 4, ast: 0, stl: 1, blk: 1, to: 5, tpm: 3, fgm: 5, fga: 13, ftm: 1, fta: 1, composite: 0.2, zScores: { pts: 0.974, reb: 0.395, ast: -0.914, stl: 0.116, blk: 0.978, tpm: 1.591, fgImpact: -0.848, ftImpact: 0.405, to: -2.495 } },
          { name: "Luke Kornet", min: 22, pts: 0, reb: 3, ast: 1, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.18, zScores: { pts: -1.33, reb: 0.027, ast: -0.429, stl: -0.771, blk: 0.978, tpm: -0.796, fgImpact: -0.738, ftImpact: 0, to: -1.121 } },
          { name: "Jordan McLaughlin", min: 22, pts: 14, reb: 1, ast: 6, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 10, ftm: 1, fta: 2, composite: 1.39, zScores: { pts: 0.974, reb: -0.71, ast: 1.997, stl: 0.116, blk: -0.522, tpm: 0, fgImpact: 1.05, ftImpact: -1.084, to: -0.433 } },
          { name: "David Jones Garcia", min: 14, pts: 4, reb: 5, ast: 1, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -5.61, zScores: { pts: -0.671, reb: 0.763, ast: -0.429, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: -1.373, ftImpact: 0, to: -1.808 } },
          { name: "Maliq Brown", min: 14, pts: 3, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.08, zScores: { pts: -0.836, reb: 0.027, ast: -0.914, stl: -0.771, blk: -0.522, tpm: 0, fgImpact: -0.317, ftImpact: 0, to: 0.254 } },
          { name: "Tarris Reed Jr.", min: 24, pts: 4, reb: 17, ast: 1, stl: 4, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 2, fta: 4, composite: 3.7, zScores: { pts: -0.671, reb: 5.183, ast: -0.429, stl: 2.775, blk: 0.978, tpm: -0.796, fgImpact: -1.425, ftImpact: -2.168, to: 0.254 } },
          { name: "Jon Elmore", min: 14, pts: 3, reb: 1, ast: 3, stl: 2, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 0.54, zScores: { pts: -0.836, reb: -0.71, ast: 0.541, stl: 1.002, blk: 0.978, tpm: 0, fgImpact: -0.687, ftImpact: 0, to: 0.254 } },
          { name: "RJ Davis", min: 15, pts: 5, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 2, composite: -5.86, zScores: { pts: -0.507, reb: -0.71, ast: 0.056, stl: -0.771, blk: -0.522, tpm: 0, fgImpact: -1.373, ftImpact: -2.977, to: 0.941 } },
          { name: "Taelon Peter", min: 17, pts: 3, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.61, zScores: { pts: -0.836, reb: -1.078, ast: -0.914, stl: 0.116, blk: -0.522, tpm: 0, fgImpact: -0.317, ftImpact: 0, to: 0.941 } },
          { name: "Ja'Kobi Gillespie", min: 25, pts: 25, reb: 1, ast: 3, stl: 3, blk: 0, to: 1, tpm: 4, fgm: 9, fga: 14, ftm: 3, fta: 3, composite: 9.78, zScores: { pts: 2.784, reb: -0.71, ast: 0.541, stl: 1.888, blk: -0.522, tpm: 2.387, fgImpact: 1.944, ftImpact: 1.214, to: 0.254 } }
        ]
      },
      home: {
        abbr: "UTAH", name: "Utah Jazz", score: 119,
        players: [
          { name: "Lauri Markkanen", min: 19, pts: 11, reb: 1, ast: 2, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 7, ftm: 4, fta: 4, composite: 0.59, zScores: { pts: 0.481, reb: -0.71, ast: 0.056, stl: 1.002, blk: -0.522, tpm: 0, fgImpact: -0.213, ftImpact: 1.618, to: -1.121 } },
          { name: "Jaren Jackson Jr.", min: 18, pts: 13, reb: 3, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 8, ftm: 0, fta: 0, composite: 1.36, zScores: { pts: 0.81, reb: 0.027, ast: -0.429, stl: 0.116, blk: -0.522, tpm: 0, fgImpact: 1.789, ftImpact: 0, to: -0.433 } },
          { name: "Jaxson Hayes", min: 15, pts: 11, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 3, fta: 4, composite: -1.57, zScores: { pts: 0.481, reb: -0.342, ast: -0.914, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: 1.315, ftImpact: -0.275, to: 0.254 } },
          { name: "Keyonte George", min: 16, pts: 13, reb: 2, ast: 1, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 7, ftm: 3, fta: 4, composite: 2.64, zScores: { pts: 0.81, reb: -0.342, ast: -0.429, stl: 1.888, blk: -0.522, tpm: -0.796, fgImpact: 1.367, ftImpact: -0.275, to: 0.941 } },
          { name: "Darryn Peterson", min: 24, pts: 14, reb: 2, ast: 5, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 10, ftm: 3, fta: 3, composite: 3.47, zScores: { pts: 0.974, reb: -0.342, ast: 1.512, stl: 0.116, blk: -0.522, tpm: 0, fgImpact: 0.26, ftImpact: 1.214, to: 0.254 } },
          { name: "Taylor Funk", min: 7, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.42, zScores: { pts: -1.33, reb: -0.342, ast: -0.914, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: 0, ftImpact: 0, to: 0.254 } },
          { name: "Harrison Ingram", min: 7, pts: 2, reb: 2, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.05, zScores: { pts: -1, reb: -0.342, ast: -0.429, stl: -0.771, blk: 0.978, tpm: -0.796, fgImpact: 0.052, ftImpact: 0, to: 0.254 } },
          { name: "Brice Sensabaugh", min: 15, pts: 11, reb: 2, ast: 2, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 7, ftm: 3, fta: 4, composite: -1.02, zScores: { pts: 0.481, reb: -0.342, ast: 0.056, stl: 0.116, blk: -0.522, tpm: 0.796, fgImpact: -0.213, ftImpact: -0.275, to: -1.121 } },
          { name: "Mo Bamba", min: 12, pts: 9, reb: 9, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 4, ftm: 1, fta: 1, composite: 4.2, zScores: { pts: 0.151, reb: 2.237, ast: 0.056, stl: -0.771, blk: 0.978, tpm: -0.796, fgImpact: 1.685, ftImpact: 0.405, to: 0.254 } },
          { name: "Jonas Aidoo", min: 7, pts: 3, reb: 5, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -5.28, zScores: { pts: -0.836, reb: 0.763, ast: -0.914, stl: -0.771, blk: -0.522, tpm: -0.796, fgImpact: -0.687, ftImpact: -1.084, to: -0.433 } },
          { name: "Svi Mykhailiuk", min: 19, pts: 7, reb: 7, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 0.5, zScores: { pts: -0.178, reb: 1.5, ast: 0.056, stl: -0.771, blk: -0.522, tpm: 0, fgImpact: 0.156, ftImpact: 0, to: 0.254 } },
          { name: "Josh Okogie", min: 11, pts: 5, reb: 0, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.76, zScores: { pts: -0.507, reb: -1.078, ast: -0.429, stl: -0.771, blk: 0.978, tpm: 0, fgImpact: 0.104, ftImpact: 0, to: 0.941 } },
          { name: "Josh Green", min: 11, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.58, zScores: { pts: -1.33, reb: -1.078, ast: -0.914, stl: 0.116, blk: -0.522, tpm: -0.796, fgImpact: 0, ftImpact: 0, to: 0.941 } },
          { name: "Trey Alexander", min: 7, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -5.75, zScores: { pts: -1.33, reb: -1.078, ast: -0.914, stl: 0.116, blk: -0.522, tpm: -0.796, fgImpact: -1.477, ftImpact: 0, to: 0.254 } },
          { name: "Isaiah Collier", min: 22, pts: 11, reb: 3, ast: 5, stl: 5, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 7, ftm: 2, fta: 4, composite: 2.45, zScores: { pts: 0.481, reb: 0.027, ast: 1.512, stl: 3.661, blk: -0.522, tpm: 0, fgImpact: 0.577, ftImpact: -2.168, to: -1.121 } },
          { name: "Tamar Bates", min: 7, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.19, zScores: { pts: -0.836, reb: -0.71, ast: -0.914, stl: -0.771, blk: -0.522, tpm: 0, fgImpact: -0.687, ftImpact: 0, to: 0.254 } },
          { name: "Ace Bailey", min: 24, pts: 6, reb: 6, ast: 3, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 1.57, zScores: { pts: -0.342, reb: 1.132, ast: 0.541, stl: 1.888, blk: -0.522, tpm: -0.796, fgImpact: -0.583, ftImpact: 0, to: 0.254 } }
        ]
      }
    }
    ]
  },
    "2026-10-13": {
    games: [
      {
      id: "401898403",
      line: "Cleveland Cavaliers 116 @ Orlando Magic 132 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CLE", name: "Cleveland Cavaliers", score: 116,
        players: [
          { name: "Jarrett Allen", min: 25, pts: 9, reb: 6, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 3, fta: 6, composite: -0.22, zScores: { pts: 0.226, reb: 1.048, ast: -0.97, stl: 0.365, blk: 0.912, tpm: -0.739, fgImpact: 0.237, ftImpact: -2.21, to: 0.91 } },
          { name: "Evan Mobley", min: 27, pts: 14, reb: 5, ast: 0, stl: 1, blk: 2, to: 1, tpm: 2, fgm: 6, fga: 14, ftm: 0, fta: 2, composite: 1.92, zScores: { pts: 1.036, reb: 0.666, ast: -0.97, stl: 0.365, blk: 2.294, tpm: 0.985, fgImpact: -0.18, ftImpact: -2.391, to: 0.118 } },
          { name: "James Harden", min: 27, pts: 13, reb: 0, ast: 2, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 12, ftm: 6, fta: 6, composite: -0.68, zScores: { pts: 0.874, reb: -1.245, ast: 0.114, stl: 0.365, blk: -0.47, tpm: 0.123, fgImpact: -1.726, ftImpact: 2.753, to: -1.464 } },
          { name: "Donovan Mitchell", min: 25, pts: 15, reb: 2, ast: 8, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 7, fga: 15, ftm: 0, fta: 1, composite: 1.27, zScores: { pts: 1.198, reb: -0.481, ast: 3.366, stl: -0.828, blk: -0.47, tpm: 0.123, fgImpact: 0.227, ftImpact: -1.196, to: -0.673 } },
          { name: "Peyton Watson", min: 24, pts: 10, reb: 4, ast: 2, stl: 1, blk: 2, to: 2, tpm: 1, fgm: 3, fga: 7, ftm: 3, fta: 3, composite: 4.18, zScores: { pts: 0.388, reb: 0.283, ast: 0.114, stl: 0.365, blk: 2.294, tpm: 0.123, fgImpact: -0.09, ftImpact: 1.377, to: -0.673 } },
          { name: "Mario Hezonja", min: 21, pts: 12, reb: 6, ast: 2, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 10, ftm: 2, fta: 2, composite: 5.44, zScores: { pts: 0.712, reb: 1.048, ast: 0.114, stl: 1.559, blk: -0.47, tpm: 0.985, fgImpact: -0.338, ftImpact: 0.918, to: 0.91 } },
          { name: "Tristan Enaruna", min: 7, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -1.232, reb: -1.245, ast: -0.97, stl: 0.365, blk: -0.47, tpm: -0.739, fgImpact: -0.327, ftImpact: 0, to: 0.91 } },
          { name: "Riley Minix", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.19, zScores: { pts: -1.232, reb: -0.863, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: 0, ftImpact: 0, to: 0.91 } },
          { name: "Thomas Bryant", min: 10, pts: 8, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 3, fta: 4, composite: 0.32, zScores: { pts: 0.064, reb: 0.283, ast: -0.428, stl: -0.828, blk: -0.47, tpm: 0.123, fgImpact: 0.485, ftImpact: 0.181, to: 0.91 } },
          { name: "Jaylon Tyson", min: 25, pts: 12, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 9, ftm: 1, fta: 2, composite: -0.89, zScores: { pts: 0.712, reb: -0.099, ast: -0.428, stl: -0.828, blk: -0.47, tpm: 0.123, fgImpact: 0.723, ftImpact: -0.737, to: 0.118 } },
          { name: "Craig Porter Jr.", min: 18, pts: 3, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 3, fta: 4, composite: -0.35, zScores: { pts: -0.746, reb: 0.283, ast: 0.656, stl: 0.365, blk: -0.47, tpm: -0.739, fgImpact: 0, ftImpact: 0.181, to: 0.118 } },
          { name: "Tyrese Proctor", min: 16, pts: 4, reb: 0, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -0.584, reb: -1.245, ast: 0.114, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -0.169, ftImpact: 0, to: 0.118 } },
          { name: "Meleek Thomas", min: 13, pts: 16, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 9, ftm: 2, fta: 2, composite: 3.66, zScores: { pts: 1.359, reb: -0.099, ast: -0.97, stl: 0.365, blk: -0.47, tpm: 0.985, fgImpact: 1.456, ftImpact: 0.918, to: 0.118 } }
        ]
      },
      home: {
        abbr: "ORL", name: "Orlando Magic", score: 132,
        players: [
          { name: "Paolo Banchero", min: 28, pts: 24, reb: 8, ast: 3, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 10, fga: 13, ftm: 2, fta: 2, composite: 8.54, zScores: { pts: 2.655, reb: 1.812, ast: 0.656, stl: 0.365, blk: -0.47, tpm: 0.985, fgImpact: 3.081, ftImpact: 0.918, to: -1.464 } },
          { name: "Franz Wagner", min: 22, pts: 20, reb: 4, ast: 8, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 10, ftm: 5, fta: 6, composite: 9.95, zScores: { pts: 2.007, reb: 0.283, ast: 3.366, stl: 1.559, blk: -0.47, tpm: 0.123, fgImpact: 1.862, ftImpact: 1.099, to: 0.118 } },
          { name: "Wendell Carter Jr.", min: 22, pts: 7, reb: 7, ast: 2, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 2.47, zScores: { pts: -0.098, reb: 1.43, ast: 0.114, stl: -0.828, blk: 0.912, tpm: 0.123, fgImpact: -0.09, ftImpact: 0, to: 0.91 } },
          { name: "Desmond Bane", min: 26, pts: 8, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 12, ftm: 0, fta: 1, composite: -1.68, zScores: { pts: 0.064, reb: -0.481, ast: 0.656, stl: 0.365, blk: -0.47, tpm: 0.985, fgImpact: -1.726, ftImpact: -1.196, to: 0.118 } },
          { name: "Jalen Suggs", min: 13, pts: 9, reb: 5, ast: 2, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 3.76, zScores: { pts: 0.226, reb: 0.666, ast: 0.114, stl: 0.365, blk: -0.47, tpm: 1.846, fgImpact: 0.892, ftImpact: 0, to: 0.118 } },
          { name: "Kevin Knox II", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.23, zScores: { pts: -1.232, reb: -1.245, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -0.654, ftImpact: 0, to: 0.91 } },
          { name: "Jamal Cain", min: 13, pts: 2, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.25, zScores: { pts: -0.908, reb: -0.481, ast: 0.114, stl: 0.365, blk: -0.47, tpm: -0.739, fgImpact: -0.248, ftImpact: 0, to: 0.118 } },
          { name: "Malaki Branham", min: 7, pts: 8, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 4, ftm: 1, fta: 1, composite: -1.32, zScores: { pts: 0.064, reb: -1.245, ast: -0.428, stl: -0.828, blk: -0.47, tpm: 0.123, fgImpact: 0.892, ftImpact: 0.459, to: 0.118 } },
          { name: "Tristan da Silva", min: 20, pts: 18, reb: 3, ast: 5, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 7, fga: 14, ftm: 0, fta: 0, composite: 6.6, zScores: { pts: 1.683, reb: -0.099, ast: 1.74, stl: 0.365, blk: -0.47, tpm: 2.708, fgImpact: 0.554, ftImpact: 0, to: 0.118 } },
          { name: "Noah Penda", min: 19, pts: 5, reb: 4, ast: 2, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.07, zScores: { pts: -0.422, reb: 0.283, ast: 0.114, stl: 0.365, blk: 0.912, tpm: 0.123, fgImpact: 0.158, ftImpact: 0, to: -1.464 } },
          { name: "Goga Bitadze", min: 19, pts: 14, reb: 6, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 7, ftm: 4, fta: 5, composite: 2.41, zScores: { pts: 1.036, reb: 1.048, ast: -0.97, stl: 0.365, blk: -0.47, tpm: -0.739, fgImpact: 1.377, ftImpact: 0.64, to: 0.118 } },
          { name: "Colin Castleton", min: 7, pts: 5, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.01, zScores: { pts: -0.422, reb: 0.283, ast: -0.97, stl: -0.828, blk: -0.47, tpm: 0.123, fgImpact: 0.158, ftImpact: 0, to: 0.118 } },
          { name: "Jevon Carter", min: 7, pts: 0, reb: 2, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -1.67, zScores: { pts: -1.232, reb: -0.481, ast: 0.114, stl: -0.828, blk: 0.912, tpm: -0.739, fgImpact: -0.327, ftImpact: 0, to: 0.91 } },
          { name: "JD Davison", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.57, zScores: { pts: -1.232, reb: -1.245, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: 0, ftImpact: 0, to: 0.91 } },
          { name: "Alex Morales", min: 7, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -2.84, zScores: { pts: -0.908, reb: -0.099, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -0.654, ftImpact: 0.918, to: 0.91 } },
          { name: "Jase Richardson", min: 23, pts: 10, reb: 4, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 10, ftm: 2, fta: 2, composite: 1.32, zScores: { pts: 0.388, reb: 0.283, ast: 1.198, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -0.338, ftImpact: 0.918, to: 0.91 } }
        ]
      }
    },
      {
      id: "401908944",
      line: "New York Knicks 98 @ Toronto Raptors 148 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NY", name: "New York Knicks", score: 98,
        players: [
          { name: "Mohamed Diawara", min: 29, pts: 13, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 3.39, zScores: { pts: 0.874, reb: -0.099, ast: -0.428, stl: 0.365, blk: -0.47, tpm: 1.846, fgImpact: 0.396, ftImpact: 0, to: 0.91 } },
          { name: "James Wiseman", min: 24, pts: 18, reb: 10, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 7, fga: 8, ftm: 4, fta: 4, composite: 4.14, zScores: { pts: 1.683, reb: 2.577, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: 2.517, ftImpact: 1.836, to: -1.464 } },
          { name: "Bruce Brown", min: 18, pts: 5, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.71, zScores: { pts: -0.422, reb: 0.283, ast: 0.114, stl: -0.828, blk: -0.47, tpm: 0.123, fgImpact: 0.158, ftImpact: 0, to: -0.673 } },
          { name: "Jose Alvarado", min: 17, pts: 4, reb: 3, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 2, composite: -4.29, zScores: { pts: -0.584, reb: -0.099, ast: 1.198, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -0.496, ftImpact: -2.391, to: 0.118 } },
          { name: "Miles McBride", min: 19, pts: 8, reb: 3, ast: 3, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 7, ftm: 4, fta: 5, composite: 0.3, zScores: { pts: 0.064, reb: -0.099, ast: 0.656, stl: 0.365, blk: 0.912, tpm: -0.739, fgImpact: -0.823, ftImpact: 0.64, to: -0.673 } },
          { name: "Drew Eubanks", min: 15, pts: 8, reb: 2, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 4, composite: -1.75, zScores: { pts: 0.064, reb: -0.481, ast: 0.114, stl: -0.828, blk: 0.912, tpm: -0.739, fgImpact: 0.564, ftImpact: -1.473, to: 0.118 } },
          { name: "Tyler Nickel", min: 21, pts: 11, reb: 2, ast: 0, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 11, ftm: 4, fta: 5, composite: 0.46, zScores: { pts: 0.55, reb: -0.481, ast: -0.97, stl: 1.559, blk: -0.47, tpm: 0.123, fgImpact: -1.398, ftImpact: 0.64, to: 0.91 } },
          { name: "Pacome Dadiet", min: 18, pts: 10, reb: 1, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 9, ftm: 3, fta: 4, composite: -0.35, zScores: { pts: 0.388, reb: -0.863, ast: -0.428, stl: -0.828, blk: 0.912, tpm: 0.123, fgImpact: -0.744, ftImpact: 0.181, to: 0.91 } },
          { name: "Tony Bradley", min: 9, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 1, composite: -4.61, zScores: { pts: -0.584, reb: -0.099, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: 0.158, ftImpact: -1.196, to: 0.118 } },
          { name: "Ochai Agbaji", min: 10, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.23, zScores: { pts: -1.232, reb: -1.245, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -0.654, ftImpact: 0, to: 0.91 } },
          { name: "Kevin McCullar Jr.", min: 18, pts: 4, reb: 3, ast: 2, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 4, composite: -2.75, zScores: { pts: -0.584, reb: -0.099, ast: 0.114, stl: 0.365, blk: 0.912, tpm: -0.739, fgImpact: -0.575, ftImpact: -1.473, to: -0.673 } },
          { name: "Tyler Kolek", min: 28, pts: 9, reb: 3, ast: 5, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: -1.06, zScores: { pts: 0.226, reb: -0.099, ast: 1.74, stl: -0.828, blk: -0.47, tpm: 0.123, fgImpact: -0.417, ftImpact: 0.918, to: -2.256 } },
          { name: "Jaden Akins", min: 14, pts: 4, reb: 1, ast: 4, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 8, ftm: 2, fta: 2, composite: -0.75, zScores: { pts: -0.584, reb: -0.863, ast: 1.198, stl: 1.559, blk: -0.47, tpm: -0.739, fgImpact: -1.884, ftImpact: 0.918, to: 0.118 } }
        ]
      },
      home: {
        abbr: "TOR", name: "Toronto Raptors", score: 148,
        players: [
          { name: "Kawhi Leonard", min: 17, pts: 21, reb: 5, ast: 0, stl: 2, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 12, ftm: 5, fta: 7, composite: 6.95, zScores: { pts: 2.169, reb: 0.666, ast: -0.97, stl: 1.559, blk: -0.47, tpm: 2.708, fgImpact: 0.475, ftImpact: -0.097, to: 0.91 } },
          { name: "RJ Barrett", min: 23, pts: 17, reb: 4, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 6, fga: 12, ftm: 4, fta: 5, composite: 3.31, zScores: { pts: 1.521, reb: 0.283, ast: 0.656, stl: -0.828, blk: -0.47, tpm: 0.123, fgImpact: 0.475, ftImpact: 0.64, to: 0.91 } },
          { name: "Scottie Barnes", min: 22, pts: 19, reb: 6, ast: 4, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 8, fga: 10, ftm: 3, fta: 3, composite: 9.12, zScores: { pts: 1.845, reb: 1.048, ast: 1.198, stl: 1.559, blk: 0.912, tpm: -0.739, fgImpact: 2.596, ftImpact: 1.377, to: -0.673 } },
          { name: "Jakob Poeltl", min: 19, pts: 6, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: 1.77, zScores: { pts: -0.26, reb: 0.666, ast: -0.428, stl: 0.365, blk: -0.47, tpm: -0.739, fgImpact: 0.813, ftImpact: 0.918, to: 0.91 } },
          { name: "Immanuel Quickley", min: 22, pts: 8, reb: 3, ast: 6, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 4, fta: 4, composite: 1.01, zScores: { pts: 0.064, reb: -0.099, ast: 2.282, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -1.15, ftImpact: 1.836, to: 0.118 } },
          { name: "Kyle Anderson", min: 9, pts: 2, reb: 3, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.32, zScores: { pts: -0.908, reb: -0.099, ast: 1.198, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: 0.406, ftImpact: 0, to: 0.118 } },
          { name: "Trayce Jackson-Davis", min: 10, pts: 9, reb: 3, ast: 0, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 4, fga: 4, ftm: 1, fta: 1, composite: 4.07, zScores: { pts: 0.226, reb: -0.099, ast: -0.97, stl: 0.365, blk: 2.294, tpm: -0.739, fgImpact: 1.625, ftImpact: 0.459, to: 0.91 } },
          { name: "Tyson Degenhart", min: 7, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -3.07, zScores: { pts: -0.584, reb: -0.481, ast: -0.428, stl: -0.828, blk: -0.47, tpm: 0.123, fgImpact: -0.575, ftImpact: -0.737, to: 0.91 } },
          { name: "Collin Murray-Boyles", min: 16, pts: 19, reb: 9, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 7, fga: 7, ftm: 3, fta: 4, composite: 8.97, zScores: { pts: 1.845, reb: 2.195, ast: 0.114, stl: 0.365, blk: -0.47, tpm: 0.985, fgImpact: 2.844, ftImpact: 0.181, to: 0.91 } },
          { name: "Allen Graves", min: 15, pts: 5, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 7, ftm: 2, fta: 2, composite: -1.99, zScores: { pts: -0.422, reb: -0.099, ast: -0.97, stl: 0.365, blk: -0.47, tpm: 0.123, fgImpact: -1.557, ftImpact: 0.918, to: 0.118 } },
          { name: "Jamarion Sharp", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.57, zScores: { pts: -1.232, reb: -1.245, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: 0, ftImpact: 0, to: 0.91 } },
          { name: "Tyreke Key", min: 6, pts: 11, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 1.09, zScores: { pts: 0.55, reb: -1.245, ast: -0.97, stl: -0.828, blk: -0.47, tpm: 1.846, fgImpact: 1.298, ftImpact: 0, to: 0.91 } },
          { name: "Malachi Smith", min: 6, pts: 3, reb: 0, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.53, zScores: { pts: -0.746, reb: -1.245, ast: 0.114, stl: -0.828, blk: -0.47, tpm: 0.123, fgImpact: 0.406, ftImpact: 0, to: 0.118 } },
          { name: "Jamal Shead", min: 14, pts: 5, reb: 0, ast: 5, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 3, fta: 4, composite: -2.38, zScores: { pts: -0.422, reb: -1.245, ast: 1.74, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: 0.079, ftImpact: 0.181, to: -0.673 } },
          { name: "Jaden Bradley", min: 12, pts: 3, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -1.32, zScores: { pts: -0.746, reb: -0.099, ast: 0.114, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: 0.079, ftImpact: 0.459, to: 0.91 } },
          { name: "Nimari Burnett", min: 9, pts: 0, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.38, zScores: { pts: -1.232, reb: -0.481, ast: 0.114, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -0.654, ftImpact: 0, to: 0.91 } },
          { name: "Ja'Kobe Walter", min: 18, pts: 14, reb: 1, ast: 1, stl: 1, blk: 1, to: 0, tpm: 4, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 5.69, zScores: { pts: 1.036, reb: -0.863, ast: -0.428, stl: 0.365, blk: 0.912, tpm: 2.708, fgImpact: 1.05, ftImpact: 0, to: 0.91 } },
          { name: "Alijah Martin", min: 13, pts: 2, reb: 2, ast: 1, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: 0.72, zScores: { pts: -0.908, reb: -0.481, ast: -0.428, stl: 2.752, blk: -0.47, tpm: -0.739, fgImpact: 0.079, ftImpact: 0, to: 0.91 } }
        ]
      }
    },
      {
      id: "401908621",
      line: "Indiana Pacers 112 @ Oklahoma City Thunder 114 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "IND", name: "Indiana Pacers", score: 112,
        players: [
          { name: "Pascal Siakam", min: 21, pts: 6, reb: 1, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 11, ftm: 2, fta: 2, composite: -3.85, zScores: { pts: -0.26, reb: -0.863, ast: 1.198, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -2.132, ftImpact: 0.918, to: -0.673 } },
          { name: "Ivica Zubac", min: 18, pts: 13, reb: 13, ast: 5, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 6, fga: 7, ftm: 1, fta: 1, composite: 11.36, zScores: { pts: 0.874, reb: 3.723, ast: 1.74, stl: 2.752, blk: -0.47, tpm: -0.739, fgImpact: 2.11, ftImpact: 0.459, to: 0.91 } },
          { name: "Kelly Oubre Jr.", min: 20, pts: 12, reb: 5, ast: 2, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 2.61, zScores: { pts: 0.712, reb: 0.666, ast: 0.114, stl: 0.365, blk: -0.47, tpm: 0.985, fgImpact: -0.011, ftImpact: 0.918, to: -0.673 } },
          { name: "Tyrese Haliburton", min: 18, pts: 24, reb: 3, ast: 3, stl: 0, blk: 2, to: 4, tpm: 4, fgm: 9, fga: 14, ftm: 2, fta: 3, composite: 6.87, zScores: { pts: 2.655, reb: -0.099, ast: 0.656, stl: -0.828, blk: 2.294, tpm: 2.708, fgImpact: 2.021, ftImpact: -0.278, to: -2.256 } },
          { name: "Ben Sheppard", min: 19, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.2, zScores: { pts: -1.232, reb: -0.099, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -0.981, ftImpact: 0, to: 0.118 } },
          { name: "James Johnson", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.98, zScores: { pts: -1.232, reb: -0.863, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: 0, ftImpact: 0, to: 0.118 } },
          { name: "Larry Nance Jr.", min: 13, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.94, zScores: { pts: -0.422, reb: -0.863, ast: -0.97, stl: -0.828, blk: -0.47, tpm: 0.123, fgImpact: 0.158, ftImpact: 0, to: -0.673 } },
          { name: "Obi Toppin", min: 16, pts: 8, reb: 5, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -2.31, zScores: { pts: 0.064, reb: 0.666, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: 0.644, ftImpact: 0, to: -0.673 } },
          { name: "Jalen Slawson", min: 33, pts: 0, reb: 5, ast: 3, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -0.3, zScores: { pts: -1.232, reb: 0.666, ast: 0.656, stl: 0.365, blk: 2.294, tpm: -0.739, fgImpact: -1.636, ftImpact: 0, to: -0.673 } },
          { name: "Jay Huff", min: 13, pts: 11, reb: 3, ast: 1, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 4, fga: 7, ftm: 0, fta: 1, composite: 3.5, zScores: { pts: 0.55, reb: -0.099, ast: -0.428, stl: 0.365, blk: 0.912, tpm: 1.846, fgImpact: 0.644, ftImpact: -1.196, to: 0.91 } },
          { name: "Kobe Brown", min: 30, pts: 10, reb: 5, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 6, ftm: 4, fta: 6, composite: -2, zScores: { pts: 0.388, reb: 0.666, ast: -0.428, stl: 0.365, blk: -0.47, tpm: -0.739, fgImpact: 0.237, ftImpact: -0.556, to: -1.464 } },
          { name: "Quenton Jackson", min: 16, pts: 5, reb: 4, ast: 5, stl: 2, blk: 1, to: 4, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: 1.44, zScores: { pts: -0.422, reb: 0.283, ast: 1.74, stl: 1.559, blk: 0.912, tpm: 0.123, fgImpact: -0.496, ftImpact: 0, to: -2.256 } },
          { name: "Braden Smith", min: 16, pts: 5, reb: 4, ast: 5, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 9, ftm: 1, fta: 2, composite: -4.11, zScores: { pts: -0.422, reb: 0.283, ast: 1.74, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -1.478, ftImpact: -0.737, to: -1.464 } },
          { name: "Rienk Mast", min: 20, pts: 9, reb: 7, ast: 0, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 0.94, zScores: { pts: 0.226, reb: 1.43, ast: -0.97, stl: -0.828, blk: -0.47, tpm: 1.846, fgImpact: -0.417, ftImpact: 0, to: 0.118 } },
          { name: "Keba Keita", min: 10, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.62, zScores: { pts: -0.584, reb: -0.099, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: 0.158, ftImpact: 0, to: 0.91 } }
        ]
      },
      home: {
        abbr: "OKC", name: "Oklahoma City Thunder", score: 114,
        players: [
          { name: "Isaiah Hartenstein", min: 13, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.88, zScores: { pts: -1.232, reb: -0.863, ast: 0.114, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -0.981, ftImpact: 0, to: 0.118 } },
          { name: "Alex Caruso", min: 15, pts: 6, reb: 3, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 1, composite: -0.95, zScores: { pts: -0.26, reb: -0.099, ast: -0.428, stl: 1.559, blk: -0.47, tpm: -0.739, fgImpact: 0.564, ftImpact: -1.196, to: 0.118 } },
          { name: "Shai Gilgeous-Alexander", min: 23, pts: 15, reb: 0, ast: 6, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 5, fga: 6, ftm: 4, fta: 5, composite: 6.1, zScores: { pts: 1.198, reb: -1.245, ast: 2.282, stl: 0.365, blk: 0.912, tpm: 0.123, fgImpact: 1.704, ftImpact: 0.64, to: 0.118 } },
          { name: "Jalen Williams", min: 21, pts: 16, reb: 4, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 7, fga: 14, ftm: 1, fta: 3, composite: 0.27, zScores: { pts: 1.359, reb: 0.283, ast: 0.656, stl: 0.365, blk: -0.47, tpm: 0.123, fgImpact: 0.554, ftImpact: -1.932, to: -0.673 } },
          { name: "Cason Wallace", min: 20, pts: 7, reb: 3, ast: 1, stl: 2, blk: 1, to: 3, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 0.41, zScores: { pts: -0.098, reb: -0.099, ast: -0.428, stl: 1.559, blk: 0.912, tpm: 0.123, fgImpact: -0.09, ftImpact: 0, to: -1.464 } },
          { name: "Brooks Barnhizer", min: 21, pts: 7, reb: 1, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -1.92, zScores: { pts: -0.098, reb: -0.863, ast: 0.114, stl: 0.365, blk: -0.47, tpm: 0.123, fgImpact: -0.417, ftImpact: 0, to: -0.673 } },
          { name: "Andrew Holifield", min: 7, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.5, zScores: { pts: -1.232, reb: -1.245, ast: -0.97, stl: 0.365, blk: -0.47, tpm: -0.739, fgImpact: -0.327, ftImpact: 0, to: 0.118 } },
          { name: "Christoph Tilly", min: 4, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.46, zScores: { pts: -0.908, reb: -0.863, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: 0.406, ftImpact: 0, to: 0.91 } },
          { name: "Aday Mara", min: 19, pts: 10, reb: 4, ast: 1, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 4, fga: 5, ftm: 2, fta: 2, composite: 3.89, zScores: { pts: 0.388, reb: 0.283, ast: -0.428, stl: -0.828, blk: 3.675, tpm: -0.739, fgImpact: 1.298, ftImpact: 0.918, to: -0.673 } },
          { name: "Kenrich Williams", min: 19, pts: 7, reb: 3, ast: 0, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 8, ftm: 1, fta: 2, composite: -1.65, zScores: { pts: -0.098, reb: -0.099, ast: -0.97, stl: 1.559, blk: -0.47, tpm: 0.985, fgImpact: -1.15, ftImpact: -0.737, to: -0.673 } },
          { name: "Zhaire Smith", min: 5, pts: 7, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -0.44, zScores: { pts: -0.098, reb: -0.863, ast: -0.428, stl: -0.828, blk: -0.47, tpm: 0.123, fgImpact: 1.219, ftImpact: 0, to: 0.91 } },
          { name: "Jared McCain", min: 19, pts: 20, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 6, fgm: 6, fga: 13, ftm: 2, fta: 2, composite: 7.94, zScores: { pts: 2.007, reb: -0.481, ast: 0.114, stl: 0.365, blk: -0.47, tpm: 4.431, fgImpact: 0.148, ftImpact: 0.918, to: 0.91 } },
          { name: "Anthony Pritchard", min: 14, pts: 0, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.05, zScores: { pts: -1.232, reb: -0.099, ast: 0.656, stl: 0.365, blk: -0.47, tpm: -0.739, fgImpact: -0.654, ftImpact: 0, to: 0.118 } },
          { name: "Josh Dix", min: 24, pts: 2, reb: 7, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.82, zScores: { pts: -0.908, reb: 1.43, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -0.248, ftImpact: 0, to: 0.91 } },
          { name: "Otega Oweh", min: 15, pts: 8, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: -0.65, zScores: { pts: 0.064, reb: -0.099, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: 0.564, ftImpact: 0.918, to: 0.91 } },
          { name: "Bennett Stirtz", min: 25, pts: 7, reb: 3, ast: 0, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 2, fta: 4, composite: -1.01, zScores: { pts: -0.098, reb: -0.099, ast: -0.97, stl: 1.559, blk: -0.47, tpm: 0.123, fgImpact: -0.496, ftImpact: -1.473, to: 0.91 } }
        ]
      }
    },
      {
      id: "401898718",
      line: "Golden State Warriors 101 @ Los Angeles Lakers 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "GS", name: "Golden State Warriors", score: 101,
        players: [
          { name: "Gui Santos", min: 24, pts: 10, reb: 5, ast: 3, stl: 1, blk: 1, to: 3, tpm: 2, fgm: 2, fga: 6, ftm: 4, fta: 4, composite: 3.85, zScores: { pts: 0.388, reb: 0.666, ast: 0.656, stl: 0.365, blk: 0.912, tpm: 0.985, fgImpact: -0.496, ftImpact: 1.836, to: -1.464 } },
          { name: "Yaxel Lendeborg", min: 26, pts: 17, reb: 5, ast: 4, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 11, ftm: 6, fta: 9, composite: 3.95, zScores: { pts: 1.521, reb: 0.666, ast: 1.198, stl: 1.559, blk: -0.47, tpm: 0.123, fgImpact: 0.068, ftImpact: -0.833, to: 0.118 } },
          { name: "Charles Bassey", min: 27, pts: 8, reb: 12, ast: 1, stl: 0, blk: 3, to: 5, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 3.52, zScores: { pts: 0.064, reb: 3.341, ast: -0.428, stl: -0.828, blk: 3.675, tpm: -0.739, fgImpact: 0.564, ftImpact: 0.918, to: -3.047 } },
          { name: "Stephen Curry", min: 23, pts: 11, reb: 2, ast: 2, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 3, fga: 9, ftm: 2, fta: 2, composite: 0.63, zScores: { pts: 0.55, reb: -0.481, ast: 0.114, stl: 0.365, blk: -0.47, tpm: 1.846, fgImpact: -0.744, ftImpact: 0.918, to: -1.464 } },
          { name: "Brandin Podziemski", min: 26, pts: 17, reb: 5, ast: 2, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 12, ftm: 2, fta: 5, composite: 1.97, zScores: { pts: 1.521, reb: 0.666, ast: 0.114, stl: 0.365, blk: -0.47, tpm: 1.846, fgImpact: 0.475, ftImpact: -2.669, to: 0.118 } },
          { name: "Georges Niang", min: 19, pts: 1, reb: 2, ast: 2, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 5, ftm: 1, fta: 2, composite: -6.12, zScores: { pts: -1.07, reb: -0.481, ast: 0.114, stl: 0.365, blk: -0.47, tpm: -0.739, fgImpact: -1.636, ftImpact: -0.737, to: -1.464 } },
          { name: "Graham Ike", min: 12, pts: 6, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: -0.65, zScores: { pts: -0.26, reb: -0.099, ast: -0.97, stl: 0.365, blk: -0.47, tpm: -0.739, fgImpact: 0.485, ftImpact: 0.918, to: 0.118 } },
          { name: "Malevy Leons", min: 7, pts: 0, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -3.6, zScores: { pts: -1.232, reb: -1.245, ast: 0.114, stl: 0.365, blk: -0.47, tpm: -0.739, fgImpact: -1.309, ftImpact: 0, to: 0.91 } },
          { name: "Gary Payton II", min: 17, pts: 6, reb: 4, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 2, composite: -1.08, zScores: { pts: -0.26, reb: 0.283, ast: 0.114, stl: 1.559, blk: -0.47, tpm: -0.739, fgImpact: -0.09, ftImpact: -2.391, to: 0.91 } },
          { name: "De'Anthony Melton", min: 21, pts: 8, reb: 1, ast: 3, stl: 6, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: 5.46, zScores: { pts: 0.064, reb: -0.863, ast: 0.656, stl: 6.332, blk: -0.47, tpm: 0.123, fgImpact: 0.237, ftImpact: -0.737, to: 0.118 } },
          { name: "Brandon Williams", min: 15, pts: 6, reb: 0, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 8, ftm: 1, fta: 1, composite: -1.95, zScores: { pts: -0.26, reb: -1.245, ast: 0.114, stl: 0.365, blk: -0.47, tpm: 0.123, fgImpact: -1.15, ftImpact: 0.459, to: 0.118 } },
          { name: "LJ Cryer", min: 5, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.17, zScores: { pts: -0.908, reb: -1.245, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: 0.079, ftImpact: 0, to: 0.91 } },
          { name: "Dalen Terry", min: 5, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.17, zScores: { pts: -1.232, reb: -1.245, ast: -0.428, stl: 0.365, blk: -0.47, tpm: -0.739, fgImpact: -0.327, ftImpact: 0, to: 0.91 } },
          { name: "Will Richard", min: 15, pts: 9, reb: 1, ast: 0, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 2.01, zScores: { pts: 0.226, reb: -0.863, ast: -0.97, stl: 1.559, blk: -0.47, tpm: 1.846, fgImpact: 0.564, ftImpact: 0, to: 0.118 } }
        ]
      },
      home: {
        abbr: "LAL", name: "Los Angeles Lakers", score: 89,
        players: [
          { name: "Jake LaRavia", min: 26, pts: 4, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -0.95, zScores: { pts: -0.584, reb: -0.099, ast: 0.114, stl: 0.365, blk: -0.47, tpm: 0.123, fgImpact: -0.575, ftImpact: -0.737, to: 0.91 } },
          { name: "Walker Kessler", min: 16, pts: 11, reb: 9, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 3, fta: 4, composite: 4.13, zScores: { pts: 0.55, reb: 2.195, ast: -0.428, stl: 0.365, blk: 0.912, tpm: -0.739, fgImpact: 0.971, ftImpact: 0.181, to: 0.118 } },
          { name: "Matisse Thybulle", min: 21, pts: 4, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 1, composite: -4.37, zScores: { pts: -0.584, reb: -0.863, ast: -0.97, stl: 0.365, blk: -0.47, tpm: -0.739, fgImpact: -0.823, ftImpact: -1.196, to: 0.91 } },
          { name: "Austin Reaves", min: 25, pts: 28, reb: 4, ast: 7, stl: 0, blk: 0, to: 7, tpm: 4, fgm: 10, fga: 18, ftm: 4, fta: 4, composite: 6.47, zScores: { pts: 3.303, reb: 0.283, ast: 2.824, stl: -0.828, blk: -0.47, tpm: 2.708, fgImpact: 1.445, ftImpact: 1.836, to: -4.63 } },
          { name: "Quentin Grimes", min: 26, pts: 9, reb: 0, ast: 6, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 1.84, zScores: { pts: 0.226, reb: -1.245, ast: 2.282, stl: 0.365, blk: 0.912, tpm: 0.123, fgImpact: 0.644, ftImpact: 0, to: -1.464 } },
          { name: "Kevon Looney", min: 13, pts: 2, reb: 5, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.67, zScores: { pts: -0.908, reb: 0.666, ast: -0.97, stl: -0.828, blk: 0.912, tpm: -0.739, fgImpact: 0.079, ftImpact: 0, to: 0.118 } },
          { name: "Jarred Vanderbilt", min: 5, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.7, zScores: { pts: -0.908, reb: -0.099, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: 0.406, ftImpact: 0, to: 0.91 } },
          { name: "Sandro Mamukelashvili", min: 21, pts: 10, reb: 7, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 2.38, zScores: { pts: 0.388, reb: 1.43, ast: 0.114, stl: -0.828, blk: -0.47, tpm: 0.985, fgImpact: 0.644, ftImpact: 0, to: 0.118 } },
          { name: "Cole Swider", min: 4, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -3.28, zScores: { pts: -0.908, reb: -0.863, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -0.327, ftImpact: 0.918, to: 0.91 } },
          { name: "Arthur Kaluma", min: 17, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 7, ftm: 0, fta: 0, composite: -6.49, zScores: { pts: -1.232, reb: -0.481, ast: -0.97, stl: 0.365, blk: -0.47, tpm: -0.739, fgImpact: -2.29, ftImpact: 0, to: -0.673 } },
          { name: "Rafael Castro", min: 10, pts: 2, reb: 3, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.56, zScores: { pts: -0.908, reb: -0.099, ast: -0.428, stl: -0.828, blk: 0.912, tpm: -0.739, fgImpact: 0.406, ftImpact: 0, to: 0.118 } },
          { name: "Dalton Knecht", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -6.43, zScores: { pts: -1.232, reb: -0.863, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -0.654, ftImpact: 0, to: -0.673 } },
          { name: "AK Okereke", min: 8, pts: 0, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.43, zScores: { pts: -1.232, reb: -0.481, ast: -0.97, stl: -0.828, blk: 0.912, tpm: -0.739, fgImpact: 0, ftImpact: 0, to: 0.91 } },
          { name: "Bronny James", min: 11, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -6.82, zScores: { pts: -1.232, reb: -0.863, ast: -0.97, stl: 0.365, blk: -0.47, tpm: -0.739, fgImpact: -0.654, ftImpact: 0, to: -2.256 } },
          { name: "Chris Manon", min: 16, pts: 5, reb: 1, ast: 1, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 1, composite: -3.54, zScores: { pts: -0.422, reb: -0.863, ast: -0.428, stl: 0.365, blk: -0.47, tpm: -0.739, fgImpact: 0.813, ftImpact: 0.459, to: -2.256 } },
          { name: "Jaden Hardy", min: 15, pts: 10, reb: 2, ast: 2, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 3, fga: 9, ftm: 3, fta: 3, composite: 0.59, zScores: { pts: 0.388, reb: -0.481, ast: 0.114, stl: 0.365, blk: 0.912, tpm: 0.123, fgImpact: -0.744, ftImpact: 1.377, to: -1.464 } }
        ]
      }
    },
      {
      id: "401901826",
      line: "Portland Trail Blazers 110 @ Sacramento Kings 98 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "POR", name: "Portland Trail Blazers", score: 110,
        players: [
          { name: "Toumani Camara", min: 23, pts: 11, reb: 7, ast: 2, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 6, ftm: 1, fta: 1, composite: 6.7, zScores: { pts: 0.55, reb: 1.43, ast: 0.114, stl: 0.365, blk: 0.912, tpm: 0.985, fgImpact: 0.971, ftImpact: 0.459, to: 0.91 } },
          { name: "Deni Avdija", min: 25, pts: 26, reb: 9, ast: 4, stl: 0, blk: 2, to: 1, tpm: 2, fgm: 9, fga: 13, ftm: 6, fta: 6, composite: 14.04, zScores: { pts: 2.979, reb: 2.195, ast: 1.198, stl: -0.828, blk: 2.294, tpm: 0.985, fgImpact: 2.348, ftImpact: 2.753, to: 0.118 } },
          { name: "Donovan Clingan", min: 20, pts: 4, reb: 4, ast: 2, stl: 0, blk: 5, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 6.08, zScores: { pts: -0.584, reb: 0.283, ast: 0.114, stl: -0.828, blk: 6.439, tpm: -0.739, fgImpact: 0.485, ftImpact: 0, to: 0.91 } },
          { name: "Damian Lillard", min: 23, pts: 14, reb: 3, ast: 4, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 11, ftm: 3, fta: 3, composite: 6.69, zScores: { pts: 1.036, reb: -0.099, ast: 1.198, stl: 1.559, blk: -0.47, tpm: 1.846, fgImpact: -0.665, ftImpact: 1.377, to: 0.91 } },
          { name: "Scoot Henderson", min: 18, pts: 9, reb: 1, ast: 4, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 9, ftm: 1, fta: 2, composite: -1.11, zScores: { pts: 0.226, reb: -0.863, ast: 1.198, stl: -0.828, blk: -0.47, tpm: 0.985, fgImpact: -0.744, ftImpact: -0.737, to: 0.118 } },
          { name: "Jeremy Sochan", min: 7, pts: 0, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.05, zScores: { pts: -1.232, reb: -0.481, ast: 0.114, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -0.327, ftImpact: 0, to: 0.91 } },
          { name: "Robert Williams III", min: 16, pts: 9, reb: 8, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 3, fta: 4, composite: 2.14, zScores: { pts: 0.226, reb: 1.812, ast: -0.97, stl: 0.365, blk: 0.912, tpm: -0.739, fgImpact: 0.237, ftImpact: 0.181, to: 0.118 } },
          { name: "Micah Potter", min: 9, pts: 2, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -0.908, reb: -0.099, ast: -0.428, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -0.248, ftImpact: 0, to: -0.673 } },
          { name: "Branden Carlson", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -0.908, reb: -0.863, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -0.248, ftImpact: 0, to: 0.91 } },
          { name: "Yang Hansen", min: 12, pts: 4, reb: 6, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 1, composite: -2.84, zScores: { pts: -0.584, reb: 1.048, ast: -0.428, stl: 0.365, blk: -0.47, tpm: -0.739, fgImpact: -0.169, ftImpact: -1.196, to: -0.673 } },
          { name: "Jrue Holiday", min: 21, pts: 11, reb: 5, ast: 2, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 4, fga: 11, ftm: 1, fta: 3, composite: -3.84, zScores: { pts: 0.55, reb: 0.666, ast: 0.114, stl: -0.828, blk: -0.47, tpm: 0.985, fgImpact: -0.665, ftImpact: -1.932, to: -2.256 } },
          { name: "Ja Morant", min: 23, pts: 14, reb: 2, ast: 6, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 6, fta: 9, composite: 3.04, zScores: { pts: 1.036, reb: -0.481, ast: 2.282, stl: 0.365, blk: -0.47, tpm: -0.739, fgImpact: 0.971, ftImpact: -0.833, to: 0.91 } },
          { name: "Vit Krejci", min: 10, pts: 0, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.23, zScores: { pts: -1.232, reb: -0.863, ast: -0.428, stl: 0.365, blk: -0.47, tpm: -0.739, fgImpact: -0.981, ftImpact: 0, to: 0.118 } },
          { name: "Jayson Kent", min: 9, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -0.908, reb: -0.481, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -0.575, ftImpact: 0, to: 0.91 } },
          { name: "Sidy Cissoko", min: 16, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.77, zScores: { pts: -0.908, reb: -0.481, ast: -0.428, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: -0.248, ftImpact: 0, to: -0.673 } }
        ]
      },
      home: {
        abbr: "SAC", name: "Sacramento Kings", score: 98,
        players: [
          { name: "Leaky Black", min: 32, pts: 10, reb: 7, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 6, ftm: 4, fta: 4, composite: 3.73, zScores: { pts: 0.388, reb: 1.43, ast: -0.428, stl: 0.365, blk: -0.47, tpm: 0.985, fgImpact: -0.496, ftImpact: 1.836, to: 0.118 } },
          { name: "Precious Achiuwa", min: 25, pts: 12, reb: 11, ast: 4, stl: 1, blk: 1, to: 3, tpm: 2, fgm: 5, fga: 15, ftm: 0, fta: 2, composite: 2.03, zScores: { pts: 0.712, reb: 2.959, ast: 1.198, stl: 0.365, blk: 0.912, tpm: 0.985, fgImpact: -1.24, ftImpact: -2.391, to: -1.464 } },
          { name: "Keegan Murray", min: 19, pts: 10, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 11, ftm: 1, fta: 2, composite: -2.35, zScores: { pts: 0.388, reb: -0.099, ast: -0.97, stl: -0.828, blk: -0.47, tpm: 0.123, fgImpact: -0.665, ftImpact: -0.737, to: 0.91 } },
          { name: "Elfrid Payton", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -6.16, zScores: { pts: -1.232, reb: -1.245, ast: -0.97, stl: -0.828, blk: -0.47, tpm: -0.739, fgImpact: 0, ftImpact: 0, to: -0.673 } },
          { name: "Nique Clifford", min: 30, pts: 2, reb: 2, ast: 5, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 11, ftm: 2, fta: 3, composite: -4.85, zScores: { pts: -0.908, reb: -0.481, ast: 1.74, stl: -0.828, blk: 0.912, tpm: -0.739, fgImpact: -3.599, ftImpact: -0.278, to: -0.673 } },
          { name: "Viktor Lakhin", min: 8, pts: 4, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -2.12, zScores: { pts: -0.584, reb: 0.283, ast: -0.97, stl: 0.365, blk: -0.47, tpm: 0.123, fgImpact: -0.248, ftImpact: -0.737, to: 0.118 } },
          { name: "Alex Karaban", min: 26, pts: 8, reb: 8, ast: 3, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 5.29, zScores: { pts: 0.064, reb: 1.812, ast: 0.656, stl: 0.365, blk: 0.912, tpm: 0.985, fgImpact: -0.417, ftImpact: 0, to: 0.91 } },
          { name: "Jonathan Mogbo", min: 27, pts: 15, reb: 10, ast: 4, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 5, fga: 10, ftm: 4, fta: 6, composite: 5.54, zScores: { pts: 1.198, reb: 2.577, ast: 1.198, stl: 0.365, blk: 0.912, tpm: 0.123, fgImpact: 0.396, ftImpact: -0.556, to: -0.673 } },
          { name: "Daeqwon Plowden", min: 23, pts: 10, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 8, ftm: 5, fta: 6, composite: -0.23, zScores: { pts: 0.388, reb: 0.666, ast: -0.97, stl: -0.828, blk: -0.47, tpm: 0.123, fgImpact: -1.15, ftImpact: 1.099, to: 0.91 } },
          { name: "Tristen Newton", min: 19, pts: 15, reb: 2, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 9, ftm: 6, fta: 12, composite: -2.13, zScores: { pts: 1.198, reb: -0.481, ast: 0.656, stl: 0.365, blk: -0.47, tpm: 0.123, fgImpact: -0.011, ftImpact: -4.42, to: 0.91 } },
          { name: "Emanuel Sharp", min: 23, pts: 12, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 9, ftm: 2, fta: 3, composite: 1.98, zScores: { pts: 0.712, reb: -0.099, ast: 0.656, stl: 0.365, blk: -0.47, tpm: 0.985, fgImpact: -0.011, ftImpact: -0.278, to: 0.118 } }
        ]
      }
    }
    ]
  },
    "2026-10-14": {
    games: [
      {
      id: "401898404",
      line: "Brooklyn Nets 128 @ Miami Heat 144 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BKN", name: "Brooklyn Nets", score: 128,
        players: [
          { name: "Julius Randle", min: 28, pts: 15, reb: 5, ast: 5, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 13, ftm: 7, fta: 8, composite: 0.99, zScores: { pts: 1.206, reb: 0.876, ast: 1.509, stl: 0.338, blk: -0.491, tpm: -0.762, fgImpact: -1.584, ftImpact: 1.204, to: -1.307 } },
          { name: "Michael Porter Jr.", min: 27, pts: 27, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 9, fga: 17, ftm: 5, fta: 6, composite: 6.27, zScores: { pts: 3.236, reb: -0.834, ast: -0.411, stl: 0.338, blk: -0.491, tpm: 2.772, fgImpact: 0.862, ftImpact: 0.561, to: 0.236 } },
          { name: "Day'Ron Sharpe", min: 17, pts: 11, reb: 6, ast: 4, stl: 2, blk: 1, to: 1, tpm: 1, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 6.6, zScores: { pts: 0.529, reb: 1.303, ast: 1.029, stl: 1.502, blk: 0.875, tpm: 0.122, fgImpact: 1.001, ftImpact: 0, to: 0.236 } },
          { name: "Keon Ellis", min: 24, pts: 0, reb: 2, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 7, ftm: 0, fta: 0, composite: -3.22, zScores: { pts: -1.332, reb: -0.406, ast: -0.411, stl: 0.338, blk: 0.875, tpm: -0.762, fgImpact: -2.529, ftImpact: 0, to: 1.007 } },
          { name: "Egor Demin", min: 23, pts: 17, reb: 3, ast: 3, stl: 2, blk: 0, to: 2, tpm: 4, fgm: 5, fga: 12, ftm: 3, fta: 4, composite: 4.83, zScores: { pts: 1.544, reb: 0.021, ast: 0.549, stl: 1.502, blk: -0.491, tpm: 2.772, fgImpact: -0.444, ftImpact: -0.082, to: -0.536 } },
          { name: "Josh Minott", min: 6, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.18, zScores: { pts: -0.824, reb: -0.834, ast: -0.892, stl: -0.826, blk: -0.491, tpm: 0.122, fgImpact: -0.667, ftImpact: 0, to: 0.236 } },
          { name: "Grant Nelson", min: 6, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 5, fta: 6, composite: -2.72, zScores: { pts: -0.486, reb: -0.834, ast: -0.892, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 0, ftImpact: 0.561, to: 1.007 } },
          { name: "Noah Clowney", min: 22, pts: 6, reb: 7, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 2.32, zScores: { pts: -0.317, reb: 1.73, ast: 0.069, stl: 0.338, blk: -0.491, tpm: 1.005, fgImpact: -0.25, ftImpact: 0, to: 0.236 } },
          { name: "Danny Wolf", min: 10, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.332, reb: -0.406, ast: -0.892, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -0.361, ftImpact: 0, to: 1.007 } },
          { name: "Chaney Johnson", min: 9, pts: 2, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -0.993, reb: -1.261, ast: 0.069, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -0.306, ftImpact: 0, to: 1.007 } },
          { name: "Moritz Wagner", min: 22, pts: 15, reb: 3, ast: 2, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 6, fga: 7, ftm: 0, fta: 0, composite: 5.61, zScores: { pts: 1.206, reb: 0.021, ast: 0.069, stl: -0.826, blk: 0.875, tpm: 1.889, fgImpact: 2.141, ftImpact: 0, to: 0.236 } },
          { name: "Drake Powell", min: 6, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.33, zScores: { pts: -1.332, reb: -0.834, ast: -0.892, stl: 0.338, blk: -0.491, tpm: -0.762, fgImpact: -0.361, ftImpact: 0, to: 1.007 } },
          { name: "Mikel Brown Jr.", min: 18, pts: 15, reb: 3, ast: 3, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 7, ftm: 5, fta: 5, composite: 6.22, zScores: { pts: 1.206, reb: 0.021, ast: 0.549, stl: 1.502, blk: -0.491, tpm: 1.005, fgImpact: 0.584, ftImpact: 1.608, to: 0.236 } },
          { name: "Nolan Traore", min: 22, pts: 12, reb: 2, ast: 5, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 11, ftm: 2, fta: 3, composite: -0.14, zScores: { pts: 0.698, reb: -0.406, ast: 1.509, stl: 0.338, blk: -0.491, tpm: -0.762, fgImpact: -0.083, ftImpact: -0.404, to: -0.536 } }
        ]
      },
      home: {
        abbr: "MIA", name: "Miami Heat", score: 144,
        players: [
          { name: "Giannis Antetokounmpo", min: 24, pts: 20, reb: 15, ast: 9, stl: 1, blk: 3, to: 4, tpm: 0, fgm: 8, fga: 10, ftm: 4, fta: 9, composite: 10.4, zScores: { pts: 2.052, reb: 5.149, ast: 3.429, stl: 0.338, blk: 3.607, tpm: -0.762, fgImpact: 2.613, ftImpact: -3.947, to: -2.079 } },
          { name: "Andrew Wiggins", min: 22, pts: 19, reb: 6, ast: 1, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 8, fga: 15, ftm: 2, fta: 3, composite: 3.98, zScores: { pts: 1.883, reb: 1.303, ast: -0.411, stl: 0.338, blk: 0.875, tpm: 0.122, fgImpact: 0.806, ftImpact: -0.404, to: -0.536 } },
          { name: "Nick Richards", min: 16, pts: 11, reb: 5, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 6, ftm: 3, fta: 5, composite: -0.92, zScores: { pts: 0.529, reb: 0.876, ast: -0.892, stl: -0.826, blk: 0.875, tpm: -0.762, fgImpact: 0.945, ftImpact: -1.129, to: -0.536 } },
          { name: "Klay Thompson", min: 23, pts: 12, reb: 1, ast: 0, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: -0.23, zScores: { pts: 0.698, reb: -0.834, ast: -0.892, stl: -0.826, blk: 0.875, tpm: 1.005, fgImpact: 0.278, ftImpact: 0, to: -0.536 } },
          { name: "Davion Mitchell", min: 24, pts: 13, reb: 2, ast: 4, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 8, ftm: 4, fta: 4, composite: 3.6, zScores: { pts: 0.868, reb: -0.406, ast: 1.029, stl: 1.502, blk: -0.491, tpm: 0.122, fgImpact: 0.223, ftImpact: 1.286, to: -0.536 } },
          { name: "Bobby Portis", min: 24, pts: 12, reb: 2, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 2.54, zScores: { pts: 0.698, reb: -0.406, ast: 0.549, stl: -0.826, blk: -0.491, tpm: 1.005, fgImpact: 1.001, ftImpact: 0, to: 1.007 } },
          { name: "Simone Fontecchio", min: 14, pts: 11, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 2.12, zScores: { pts: 0.529, reb: -0.406, ast: -0.892, stl: -0.826, blk: -0.491, tpm: 1.889, fgImpact: 1.307, ftImpact: 0, to: 1.007 } },
          { name: "Myron Gardner", min: 8, pts: 2, reb: 0, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.97, zScores: { pts: -0.993, reb: -1.261, ast: 0.069, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 0.056, ftImpact: 0, to: 0.236 } },
          { name: "Keshad Johnson", min: 8, pts: 8, reb: 3, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: -1.13, zScores: { pts: 0.022, reb: 0.021, ast: -0.892, stl: 0.338, blk: -0.491, tpm: -0.762, fgImpact: 0.528, ftImpact: 0.643, to: -0.536 } },
          { name: "Nikola Jovic", min: 23, pts: 5, reb: 5, ast: 7, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 2.78, zScores: { pts: -0.486, reb: 0.876, ast: 2.469, stl: -0.826, blk: -0.491, tpm: 0.122, fgImpact: 0.111, ftImpact: 0, to: 1.007 } },
          { name: "Kylor Kelley", min: 6, pts: 2, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.58, zScores: { pts: -0.993, reb: -0.406, ast: -0.892, stl: -0.826, blk: 0.875, tpm: -0.762, fgImpact: 0.417, ftImpact: 0, to: 1.007 } },
          { name: "Tim Hardaway Jr.", min: 20, pts: 14, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 10, ftm: 4, fta: 6, composite: 0.99, zScores: { pts: 1.037, reb: 0.021, ast: 0.549, stl: -0.826, blk: -0.491, tpm: 1.005, fgImpact: -0.5, ftImpact: -0.807, to: 1.007 } },
          { name: "Tre Donaldson", min: 6, pts: 2, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.4, zScores: { pts: -0.993, reb: 0.021, ast: -0.411, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 0.056, ftImpact: 0, to: 1.007 } },
          { name: "Ryan Conwell", min: 24, pts: 13, reb: 1, ast: 2, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 5.01, zScores: { pts: 0.868, reb: -0.834, ast: 0.069, stl: 1.502, blk: -0.491, tpm: 1.889, fgImpact: 1.001, ftImpact: 0, to: 1.007 } }
        ]
      }
    },
      {
      id: "401898405",
      line: "Charlotte Hornets 93 @ Boston Celtics 114 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHA", name: "Charlotte Hornets", score: 93,
        players: [
          { name: "Royce O'Neale", min: 23, pts: 12, reb: 2, ast: 2, stl: 0, blk: 0, to: 5, tpm: 4, fgm: 4, fga: 4, ftm: 0, fta: 0, composite: 0.63, zScores: { pts: 0.698, reb: -0.406, ast: 0.069, stl: -0.826, blk: -0.491, tpm: 2.772, fgImpact: 1.668, ftImpact: 0, to: -2.85 } },
          { name: "Moussa Diabate", min: 23, pts: 3, reb: 5, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: 0.15, zScores: { pts: -0.824, reb: 0.876, ast: -0.892, stl: -0.826, blk: 2.241, tpm: -0.762, fgImpact: 0.056, ftImpact: -0.725, to: 1.007 } },
          { name: "Brandon Miller", min: 27, pts: 16, reb: 5, ast: 3, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 17, ftm: 5, fta: 5, composite: 5.28, zScores: { pts: 1.375, reb: 0.876, ast: 0.549, stl: 1.502, blk: -0.491, tpm: 1.889, fgImpact: -3.03, ftImpact: 1.608, to: 1.007 } },
          { name: "Naz Reid", min: 26, pts: 12, reb: 6, ast: 3, stl: 0, blk: 1, to: 3, tpm: 2, fgm: 4, fga: 14, ftm: 2, fta: 2, composite: 0.99, zScores: { pts: 0.698, reb: 1.303, ast: 0.549, stl: -0.826, blk: 0.875, tpm: 1.005, fgImpact: -1.946, ftImpact: 0.643, to: -1.307 } },
          { name: "Dennis Schroder", min: 21, pts: 5, reb: 3, ast: 2, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 6, ftm: 1, fta: 1, composite: -4.07, zScores: { pts: -0.486, reb: 0.021, ast: 0.069, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -0.611, ftImpact: 0.322, to: -1.307 } },
          { name: "Wyatt Fricks", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.9, zScores: { pts: -1.332, reb: -0.834, ast: -0.892, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 0, ftImpact: 0, to: 0.236 } },
          { name: "Tidjane Salaun", min: 22, pts: 16, reb: 1, ast: 1, stl: 0, blk: 0, to: 4, tpm: 4, fgm: 5, fga: 9, ftm: 2, fta: 2, composite: 0.79, zScores: { pts: 1.375, reb: -0.834, ast: -0.411, stl: -0.826, blk: -0.491, tpm: 2.772, fgImpact: 0.64, ftImpact: 0.643, to: -2.079 } },
          { name: "Hannes Steinbach", min: 6, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.52, zScores: { pts: -0.993, reb: 0.021, ast: -0.892, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 0.417, ftImpact: 0, to: 1.007 } },
          { name: "Ryan Kalkbrenner", min: 19, pts: 7, reb: 3, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 3, ftm: 1, fta: 2, composite: -3.88, zScores: { pts: -0.148, reb: 0.021, ast: -0.892, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 1.251, ftImpact: -0.725, to: -1.307 } },
          { name: "Jarkel Joiner", min: 4, pts: 1, reb: 1, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -5.06, zScores: { pts: -1.163, reb: -0.834, ast: -0.892, stl: 0.338, blk: -0.491, tpm: -0.762, fgImpact: 0, ftImpact: -0.725, to: -0.536 } },
          { name: "Sion James", min: 17, pts: 0, reb: 4, ast: 4, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.03, zScores: { pts: -1.332, reb: 0.448, ast: 1.029, stl: 0.338, blk: -0.491, tpm: -0.762, fgImpact: -0.723, ftImpact: 0, to: -0.536 } },
          { name: "Christian Anderson", min: 21, pts: 10, reb: 1, ast: 1, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 0.82, zScores: { pts: 0.36, reb: -0.834, ast: -0.411, stl: 1.502, blk: -0.491, tpm: 1.005, fgImpact: 0.223, ftImpact: 0, to: -0.536 } },
          { name: "Liam McNeeley", min: 20, pts: 7, reb: 5, ast: 2, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 7, ftm: 2, fta: 4, composite: -2.96, zScores: { pts: -0.148, reb: 0.876, ast: 0.069, stl: 0.338, blk: -0.491, tpm: 0.122, fgImpact: -0.973, ftImpact: -1.45, to: -1.307 } },
          { name: "Michael Ajayi", min: 8, pts: 2, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.17, zScores: { pts: -0.993, reb: 0.021, ast: -0.411, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 0.056, ftImpact: 0, to: 0.236 } }
        ]
      },
      home: {
        abbr: "BOS", name: "Boston Celtics", score: 114,
        players: [
          { name: "Paul George", min: 24, pts: 5, reb: 6, ast: 4, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 10, ftm: 0, fta: 0, composite: 1.16, zScores: { pts: -0.486, reb: 1.303, ast: 1.029, stl: 1.502, blk: -0.491, tpm: 0.122, fgImpact: -2.057, ftImpact: 0, to: 0.236 } },
          { name: "Jayson Tatum", min: 29, pts: 19, reb: 8, ast: 6, stl: 2, blk: 0, to: 3, tpm: 3, fgm: 8, fga: 17, ftm: 0, fta: 0, composite: 7.71, zScores: { pts: 1.883, reb: 2.158, ast: 1.989, stl: 1.502, blk: -0.491, tpm: 1.889, fgImpact: 0.084, ftImpact: 0, to: -1.307 } },
          { name: "Mitchell Robinson", min: 17, pts: 12, reb: 7, ast: 1, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 5, fga: 5, ftm: 2, fta: 2, composite: 7.77, zScores: { pts: 0.698, reb: 1.73, ast: -0.411, stl: -0.826, blk: 3.607, tpm: -0.762, fgImpact: 2.085, ftImpact: 0.643, to: 1.007 } },
          { name: "Derrick White", min: 20, pts: 17, reb: 3, ast: 2, stl: 4, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 9, ftm: 4, fta: 4, composite: 8.03, zScores: { pts: 1.544, reb: 0.021, ast: 0.069, stl: 3.83, blk: -0.491, tpm: 0.122, fgImpact: 1.418, ftImpact: 1.286, to: 0.236 } },
          { name: "Jordan Walsh", min: 17, pts: 2, reb: 3, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -1.53, zScores: { pts: -0.993, reb: 0.021, ast: -0.411, stl: -0.826, blk: 0.875, tpm: -0.762, fgImpact: -1.084, ftImpact: 0.643, to: 1.007 } },
          { name: "Sam Hauser", min: 18, pts: 6, reb: 2, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 2, ftm: 3, fta: 3, composite: -0.68, zScores: { pts: -0.317, reb: -0.406, ast: -0.411, stl: 0.338, blk: -0.491, tpm: 0.122, fgImpact: 0.056, ftImpact: 0.965, to: -0.536 } },
          { name: "Dillon Mitchell", min: 5, pts: 4, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 2, composite: -3.91, zScores: { pts: -0.655, reb: -0.834, ast: -0.892, stl: 0.338, blk: -0.491, tpm: -0.762, fgImpact: 0.473, ftImpact: -2.093, to: 1.007 } },
          { name: "Chris Cenac Jr.", min: 5, pts: 2, reb: 2, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.34, zScores: { pts: -0.993, reb: -0.406, ast: -0.892, stl: 1.502, blk: -0.491, tpm: -0.762, fgImpact: -0.306, ftImpact: 0, to: 1.007 } },
          { name: "Luka Garza", min: 14, pts: 14, reb: 1, ast: 0, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 8, ftm: 2, fta: 4, composite: 2.28, zScores: { pts: 1.037, reb: -0.834, ast: -0.892, stl: 2.666, blk: -0.491, tpm: 1.005, fgImpact: 1.001, ftImpact: -1.45, to: 0.236 } },
          { name: "Neemias Queta", min: 24, pts: 16, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 7, fga: 11, ftm: 2, fta: 4, composite: -0.92, zScores: { pts: 1.375, reb: -0.834, ast: -0.411, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 1.474, ftImpact: -1.45, to: 1.007 } },
          { name: "Payton Pritchard", min: 29, pts: 7, reb: 3, ast: 11, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 11, ftm: 0, fta: 0, composite: 2.43, zScores: { pts: -0.148, reb: 0.021, ast: 4.389, stl: -0.826, blk: -0.491, tpm: 0.122, fgImpact: -1.64, ftImpact: 0, to: 1.007 } },
          { name: "Ron Harper Jr.", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.69, zScores: { pts: -1.332, reb: -1.261, ast: -0.892, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -0.361, ftImpact: 0, to: 0.236 } },
          { name: "Baylor Scheierman", min: 17, pts: 5, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.26, zScores: { pts: -0.486, reb: -0.406, ast: 0.069, stl: -0.826, blk: -0.491, tpm: 0.122, fgImpact: -0.25, ftImpact: 0, to: 1.007 } },
          { name: "Hugo Gonzalez", min: 13, pts: 5, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 1, composite: -1.98, zScores: { pts: -0.486, reb: -0.834, ast: 0.069, stl: 0.338, blk: -0.491, tpm: 0.122, fgImpact: 0.111, ftImpact: -1.047, to: 0.236 } }
        ]
      }
    },
      {
      id: "401898722",
      line: "Phoenix Suns 103 @ San Antonio Spurs 123 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PHX", name: "Phoenix Suns", score: 103,
        players: [
          { name: "Haywood Highsmith", min: 21, pts: 7, reb: 3, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.4, zScores: { pts: -0.148, reb: 0.021, ast: -0.411, stl: -0.826, blk: 0.875, tpm: 0.122, fgImpact: 0.528, ftImpact: 0, to: 0.236 } },
          { name: "Ryan Dunn", min: 23, pts: 15, reb: 2, ast: 0, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 6, fga: 6, ftm: 3, fta: 3, composite: 5.43, zScores: { pts: 1.206, reb: -0.406, ast: -0.892, stl: 0.338, blk: 2.241, tpm: -0.762, fgImpact: 2.502, ftImpact: 0.965, to: 0.236 } },
          { name: "Khaman Maluach", min: 13, pts: 3, reb: 4, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -1.88, zScores: { pts: -0.824, reb: 0.448, ast: -0.411, stl: -0.826, blk: 0.875, tpm: -0.762, fgImpact: -0.667, ftImpact: -0.725, to: 1.007 } },
          { name: "Luke Kennard", min: 14, pts: 4, reb: 2, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -2.32, zScores: { pts: -0.655, reb: -0.406, ast: -0.411, stl: 1.502, blk: -0.491, tpm: -0.762, fgImpact: -1.334, ftImpact: 0, to: 0.236 } },
          { name: "Jamaree Bouyea", min: 28, pts: 15, reb: 4, ast: 8, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 7, fga: 11, ftm: 0, fta: 1, composite: 4.46, zScores: { pts: 1.206, reb: 0.448, ast: 2.949, stl: 0.338, blk: -0.491, tpm: 0.122, fgImpact: 1.474, ftImpact: -1.047, to: -0.536 } },
          { name: "CJ Huntley", min: 12, pts: 4, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.27, zScores: { pts: -0.655, reb: -0.406, ast: -0.892, stl: -0.826, blk: 0.875, tpm: -0.762, fgImpact: -0.611, ftImpact: 0, to: 1.007 } },
          { name: "Phillip Wheeler", min: 12, pts: 3, reb: 1, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -1.84, zScores: { pts: -0.824, reb: -0.834, ast: -0.411, stl: 1.502, blk: -0.491, tpm: -0.762, fgImpact: -0.306, ftImpact: -0.725, to: 1.007 } },
          { name: "Koa Peat", min: 16, pts: 10, reb: 4, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: -0.05, zScores: { pts: 0.36, reb: 0.448, ast: -0.411, stl: 0.338, blk: -0.491, tpm: -0.762, fgImpact: 1.001, ftImpact: 0, to: -0.536 } },
          { name: "Rasheer Fleming", min: 18, pts: 8, reb: 4, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: -3.14, zScores: { pts: 0.022, reb: 0.448, ast: -0.892, stl: 0.338, blk: -0.491, tpm: -0.762, fgImpact: -0.5, ftImpact: 0, to: -1.307 } },
          { name: "Duop Reath", min: 19, pts: 8, reb: 4, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: 0.84, zScores: { pts: 0.022, reb: 0.448, ast: -0.411, stl: -0.826, blk: 0.875, tpm: 1.005, fgImpact: -1.278, ftImpact: 0, to: 1.007 } },
          { name: "Jordan Goodwin", min: 14, pts: 0, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 6, ftm: 0, fta: 0, composite: -4.05, zScores: { pts: -1.332, reb: 0.448, ast: 0.069, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -2.168, ftImpact: 0, to: 1.007 } },
          { name: "Kennedy Chandler", min: 15, pts: 10, reb: 0, ast: 2, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 4, fta: 4, composite: 2.67, zScores: { pts: 0.36, reb: -1.261, ast: 0.069, stl: 0.338, blk: 2.241, tpm: -0.762, fgImpact: 0.167, ftImpact: 1.286, to: 0.236 } },
          { name: "Koby Brea", min: 17, pts: 7, reb: 1, ast: 3, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 3, ftm: 1, fta: 1, composite: 0.68, zScores: { pts: -0.148, reb: -0.834, ast: 0.549, stl: 0.338, blk: -0.491, tpm: 1.005, fgImpact: 0.473, ftImpact: 0.322, to: -0.536 } },
          { name: "Pat Spencer", min: 20, pts: 9, reb: 1, ast: 4, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 0.63, zScores: { pts: 0.191, reb: -0.834, ast: 1.029, stl: 0.338, blk: -0.491, tpm: 0.122, fgImpact: 0.167, ftImpact: 0.643, to: -0.536 } }
        ]
      },
      home: {
        abbr: "SA", name: "San Antonio Spurs", score: 123,
        players: [
          { name: "Victor Wembanyama", min: 23, pts: 19, reb: 4, ast: 3, stl: 2, blk: 4, to: 3, tpm: 0, fgm: 9, fga: 14, ftm: 1, fta: 1, composite: 9.55, zScores: { pts: 1.883, reb: 0.448, ast: 0.549, stl: 1.502, blk: 4.974, tpm: -0.762, fgImpact: 1.946, ftImpact: 0.322, to: -1.307 } },
          { name: "De'Aaron Fox", min: 19, pts: 9, reb: 3, ast: 4, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 1, fta: 1, composite: 2.79, zScores: { pts: 0.191, reb: 0.021, ast: 1.029, stl: -0.826, blk: -0.491, tpm: 1.005, fgImpact: 0.528, ftImpact: 0.322, to: 1.007 } },
          { name: "Devin Vassell", min: 25, pts: 12, reb: 6, ast: 2, stl: 3, blk: 1, to: 0, tpm: 1, fgm: 5, fga: 10, ftm: 1, fta: 1, composite: 7.34, zScores: { pts: 0.698, reb: 1.303, ast: 0.069, stl: 2.666, blk: 0.875, tpm: 0.122, fgImpact: 0.278, ftImpact: 0.322, to: 1.007 } },
          { name: "Stephon Castle", min: 24, pts: 18, reb: 4, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 14, fta: 15, composite: 3.3, zScores: { pts: 1.713, reb: 0.448, ast: 0.549, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -0.25, ftImpact: 3.455, to: -0.536 } },
          { name: "Dylan Harper", min: 23, pts: 9, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 11, ftm: 0, fta: 0, composite: 0.03, zScores: { pts: 0.191, reb: 1.303, ast: -0.411, stl: -0.826, blk: -0.491, tpm: 0.122, fgImpact: -0.861, ftImpact: 0, to: 1.007 } },
          { name: "Harrison Barnes", min: 20, pts: 7, reb: 2, ast: 1, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 4, fta: 4, composite: 1.43, zScores: { pts: -0.148, reb: -0.406, ast: -0.411, stl: 1.502, blk: -0.491, tpm: 0.122, fgImpact: -1.028, ftImpact: 1.286, to: 1.007 } },
          { name: "David Jones Garcia", min: 17, pts: 4, reb: 3, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -4, zScores: { pts: -0.655, reb: 0.021, ast: -0.892, stl: 0.338, blk: -0.491, tpm: -0.762, fgImpact: -0.25, ftImpact: 0, to: -1.307 } },
          { name: "Carter Bryant", min: 20, pts: 16, reb: 5, ast: 0, stl: 0, blk: 2, to: 3, tpm: 4, fgm: 4, fga: 7, ftm: 4, fta: 4, composite: 6.11, zScores: { pts: 1.375, reb: 0.876, ast: -0.892, stl: -0.826, blk: 2.241, tpm: 2.772, fgImpact: 0.584, ftImpact: 1.286, to: -1.307 } },
          { name: "Maliq Brown", min: 14, pts: 8, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 3, fta: 5, composite: -0.85, zScores: { pts: 0.022, reb: 0.021, ast: -0.411, stl: -0.826, blk: -0.491, tpm: 0.122, fgImpact: 0.834, ftImpact: -1.129, to: 1.007 } },
          { name: "Tarris Reed Jr.", min: 21, pts: 4, reb: 9, ast: 1, stl: 1, blk: 3, to: 4, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 3.46, zScores: { pts: -0.655, reb: 2.585, ast: -0.411, stl: 0.338, blk: 3.607, tpm: -0.762, fgImpact: 0.834, ftImpact: 0, to: -2.079 } },
          { name: "Jordan McLaughlin", min: 11, pts: 2, reb: 0, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.37, zScores: { pts: -0.993, reb: -1.261, ast: 1.029, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -0.306, ftImpact: 0, to: 0.236 } },
          { name: "Jon Elmore", min: 10, pts: 2, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.18, zScores: { pts: -0.993, reb: -0.834, ast: 0.069, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 0.417, ftImpact: 0, to: 0.236 } },
          { name: "Ja'Kobi Gillespie", min: 15, pts: 13, reb: 4, ast: 4, stl: 1, blk: 0, to: 4, tpm: 3, fgm: 4, fga: 11, ftm: 2, fta: 4, composite: -0.31, zScores: { pts: 0.868, reb: 0.448, ast: 1.029, stl: 0.338, blk: -0.491, tpm: 1.889, fgImpact: -0.861, ftImpact: -1.45, to: -2.079 } }
        ]
      }
    },
      {
      id: "401901825",
      line: "New Orleans Pelicans 101 @ Dallas Mavericks 97 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NO", name: "New Orleans Pelicans", score: 101,
        players: [
          { name: "Karlo Matkovic", min: 18, pts: 11, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: 2.34, zScores: { pts: 0.529, reb: -0.406, ast: -0.892, stl: -0.826, blk: -0.491, tpm: 1.889, fgImpact: 0.89, ftImpact: 0.643, to: 1.007 } },
          { name: "Yves Missi", min: 17, pts: 6, reb: 9, ast: 0, stl: 1, blk: 4, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 7.1, zScores: { pts: -0.317, reb: 2.585, ast: -0.892, stl: 0.338, blk: 4.974, tpm: -0.762, fgImpact: 0.167, ftImpact: 0, to: 1.007 } },
          { name: "Saddiq Bey", min: 17, pts: 4, reb: 1, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 1, composite: -3.91, zScores: { pts: -0.655, reb: -0.834, ast: -0.892, stl: 1.502, blk: -0.491, tpm: -0.762, fgImpact: -0.973, ftImpact: -1.047, to: 0.236 } },
          { name: "Bennedict Mathurin", min: 19, pts: 6, reb: 2, ast: 3, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 8, ftm: 1, fta: 1, composite: -0.78, zScores: { pts: -0.317, reb: -0.406, ast: 0.549, stl: -0.826, blk: 0.875, tpm: 0.122, fgImpact: -1.334, ftImpact: 0.322, to: 0.236 } },
          { name: "Jeremiah Fears", min: 20, pts: 16, reb: 3, ast: 5, stl: 3, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 11, ftm: 2, fta: 2, composite: 6.89, zScores: { pts: 1.375, reb: 0.021, ast: 1.509, stl: 2.666, blk: -0.491, tpm: 1.005, fgImpact: 0.695, ftImpact: 0.643, to: -0.536 } },
          { name: "Herbert Jones", min: 16, pts: 7, reb: 0, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -1.62, zScores: { pts: -0.148, reb: -1.261, ast: -0.892, stl: 0.338, blk: -0.491, tpm: 0.122, fgImpact: 1.251, ftImpact: 0, to: -0.536 } },
          { name: "Zion Williamson", min: 18, pts: 10, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 5, ftm: 0, fta: 4, composite: -4.49, zScores: { pts: 0.36, reb: -1.261, ast: -0.411, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 2.085, ftImpact: -4.186, to: 1.007 } },
          { name: "Trey Murphy III", min: 19, pts: 5, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 1, fta: 2, composite: -2.65, zScores: { pts: -0.486, reb: 0.021, ast: 0.549, stl: 0.338, blk: -0.491, tpm: -0.762, fgImpact: -1.334, ftImpact: -0.725, to: 0.236 } },
          { name: "Trendon Watford", min: 12, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -6.59, zScores: { pts: -1.163, reb: -0.834, ast: -0.892, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -0.361, ftImpact: -0.725, to: -0.536 } },
          { name: "Julian Reese", min: 6, pts: 2, reb: 0, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.21, zScores: { pts: -0.993, reb: -1.261, ast: -0.892, stl: -0.826, blk: 0.875, tpm: -0.762, fgImpact: 0.417, ftImpact: 0, to: 0.236 } },
          { name: "Jalon Moore", min: 6, pts: 1, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 4, composite: -6.81, zScores: { pts: -1.163, reb: -1.261, ast: -0.892, stl: 0.338, blk: -0.491, tpm: -0.762, fgImpact: 0, ftImpact: -2.818, to: 0.236 } },
          { name: "Malik Dia", min: 6, pts: 0, reb: 0, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.36, zScores: { pts: -1.332, reb: -1.261, ast: -0.892, stl: 1.502, blk: -0.491, tpm: -0.762, fgImpact: -0.361, ftImpact: 0, to: 0.236 } },
          { name: "Derik Queen", min: 19, pts: 6, reb: 11, ast: 2, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 9, ftm: 4, fta: 4, composite: 1.72, zScores: { pts: -0.317, reb: 3.44, ast: 0.069, stl: 1.502, blk: -0.491, tpm: -0.762, fgImpact: -2.474, ftImpact: 1.286, to: -0.536 } },
          { name: "Jordan Poole", min: 17, pts: 4, reb: 3, ast: 3, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: 0.94, zScores: { pts: -0.655, reb: 0.021, ast: 0.549, stl: 0.338, blk: 0.875, tpm: -0.762, fgImpact: -0.306, ftImpact: 0.643, to: 0.236 } },
          { name: "Bryce McGowens", min: 6, pts: 4, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 4, fta: 4, composite: -2.46, zScores: { pts: -0.655, reb: -0.834, ast: -0.411, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 0, ftImpact: 1.286, to: 0.236 } },
          { name: "Kobe Bufkin", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.26, zScores: { pts: -1.332, reb: -0.834, ast: -0.892, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -0.361, ftImpact: 0, to: 0.236 } },
          { name: "Jaron Pierre Jr.", min: 12, pts: 10, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 4, ftm: 3, fta: 4, composite: -1.38, zScores: { pts: 0.36, reb: -0.406, ast: -0.411, stl: -0.826, blk: -0.491, tpm: 0.122, fgImpact: 0.89, ftImpact: -0.082, to: -0.536 } },
          { name: "AJ Johnson", min: 6, pts: 8, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 4, fta: 6, composite: -3.11, zScores: { pts: 0.022, reb: -0.834, ast: -0.892, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 0.473, ftImpact: -0.807, to: 1.007 } }
        ]
      },
      home: {
        abbr: "DAL", name: "Dallas Mavericks", score: 97,
        players: [
          { name: "P.J. Washington", min: 16, pts: 1, reb: 7, ast: 2, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 5, ftm: 1, fta: 2, composite: -5.28, zScores: { pts: -1.163, reb: 1.73, ast: 0.069, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -1.807, ftImpact: -0.725, to: -1.307 } },
          { name: "Naji Marshall", min: 14, pts: 7, reb: 2, ast: 1, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -1.91, zScores: { pts: -0.148, reb: -0.406, ast: -0.411, stl: 0.338, blk: -0.491, tpm: 0.122, fgImpact: -0.25, ftImpact: 0.643, to: -1.307 } },
          { name: "Zaccharie Risacher", min: 23, pts: 6, reb: 4, ast: 1, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 11, ftm: 0, fta: 0, composite: 0.7, zScores: { pts: -0.317, reb: 0.448, ast: -0.411, stl: 1.502, blk: 0.875, tpm: -0.762, fgImpact: -1.64, ftImpact: 0, to: 1.007 } },
          { name: "Moussa Cisse", min: 16, pts: 8, reb: 6, ast: 1, stl: 1, blk: 3, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 5.14, zScores: { pts: 0.022, reb: 1.303, ast: -0.411, stl: 0.338, blk: 3.607, tpm: -0.762, fgImpact: 0.167, ftImpact: 0.643, to: 0.236 } },
          { name: "Max Christie", min: 15, pts: 5, reb: 4, ast: 4, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -0.58, zScores: { pts: -0.486, reb: 0.448, ast: 1.029, stl: -0.826, blk: -0.491, tpm: 0.122, fgImpact: -0.611, ftImpact: 0, to: 0.236 } },
          { name: "Caleb Martin", min: 16, pts: 2, reb: 4, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 5, ftm: 2, fta: 2, composite: -2.89, zScores: { pts: -0.993, reb: 0.448, ast: 0.069, stl: -0.826, blk: 0.875, tpm: -0.762, fgImpact: -1.807, ftImpact: 0.643, to: -0.536 } },
          { name: "Jorge Diaz Graham", min: 12, pts: 5, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 3, fta: 6, composite: -6.69, zScores: { pts: -0.486, reb: 0.021, ast: -0.411, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -1.028, ftImpact: -2.175, to: -0.536 } },
          { name: "Tobi Lawal", min: 23, pts: 16, reb: 4, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 8, fta: 8, composite: 5.91, zScores: { pts: 1.375, reb: 0.448, ast: -0.892, stl: 0.338, blk: 0.875, tpm: -0.762, fgImpact: 0.945, ftImpact: 2.572, to: 1.007 } },
          { name: "Tarik Biberovic", min: 26, pts: 8, reb: 4, ast: 3, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 12, ftm: 1, fta: 1, composite: -2, zScores: { pts: 0.022, reb: 0.448, ast: 0.549, stl: 0.338, blk: -0.491, tpm: 0.122, fgImpact: -2.001, ftImpact: 0.322, to: -1.307 } },
          { name: "Sergio de Larrea", min: 30, pts: 10, reb: 4, ast: 6, stl: 1, blk: 2, to: 5, tpm: 2, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 4.34, zScores: { pts: 0.36, reb: 0.448, ast: 1.989, stl: 0.338, blk: 2.241, tpm: 1.005, fgImpact: 0.167, ftImpact: 0.643, to: -2.85 } },
          { name: "Seth Lundy", min: 22, pts: 13, reb: 2, ast: 0, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 4, fga: 8, ftm: 4, fta: 4, composite: 1.88, zScores: { pts: 0.868, reb: -0.406, ast: -0.892, stl: 0.338, blk: 0.875, tpm: 0.122, fgImpact: 0.223, ftImpact: 1.286, to: -0.536 } },
          { name: "John Poulakidas", min: 26, pts: 16, reb: 3, ast: 0, stl: 0, blk: 1, to: 3, tpm: 4, fgm: 5, fga: 9, ftm: 2, fta: 3, composite: 2.25, zScores: { pts: 1.375, reb: 0.021, ast: -0.892, stl: -0.826, blk: 0.875, tpm: 2.772, fgImpact: 0.64, ftImpact: -0.404, to: -1.307 } }
        ]
      }
    },
      {
      id: "401908942",
      line: "Chicago Bulls 125 @ Milwaukee Bucks 104 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHI", name: "Chicago Bulls", score: 125,
        players: [
          { name: "Jalen Smith", min: 21, pts: 15, reb: 7, ast: 2, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 4, fga: 10, ftm: 4, fta: 6, composite: 4.64, zScores: { pts: 1.206, reb: 1.73, ast: 0.069, stl: -0.826, blk: 0.875, tpm: 1.889, fgImpact: -0.5, ftImpact: -0.807, to: 1.007 } },
          { name: "Matas Buzelis", min: 24, pts: 19, reb: 2, ast: 3, stl: 1, blk: 1, to: 0, tpm: 5, fgm: 6, fga: 9, ftm: 2, fta: 2, composite: 9.96, zScores: { pts: 1.883, reb: -0.406, ast: 0.549, stl: 0.338, blk: 0.875, tpm: 3.655, fgImpact: 1.418, ftImpact: 0.643, to: 1.007 } },
          { name: "Caleb Wilson", min: 24, pts: 10, reb: 4, ast: 3, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 4, fga: 11, ftm: 1, fta: 2, composite: -2.34, zScores: { pts: 0.36, reb: 0.448, ast: 0.549, stl: 0.338, blk: -0.491, tpm: 0.122, fgImpact: -0.861, ftImpact: -0.725, to: -2.079 } },
          { name: "Norman Powell", min: 22, pts: 16, reb: 1, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 8, ftm: 8, fta: 10, composite: 0.37, zScores: { pts: 1.375, reb: -0.834, ast: -0.411, stl: 0.338, blk: -0.491, tpm: 1.005, fgImpact: -0.556, ftImpact: 0.479, to: -0.536 } },
          { name: "Josh Giddey", min: 22, pts: 6, reb: 5, ast: 9, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 4, ftm: 1, fta: 4, composite: -0.06, zScores: { pts: -0.317, reb: 0.876, ast: 3.429, stl: 0.338, blk: -0.491, tpm: 0.122, fgImpact: 0.111, ftImpact: -2.818, to: -1.307 } },
          { name: "Patrick Williams", min: 10, pts: 6, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -3.57, zScores: { pts: -0.317, reb: 0.448, ast: -0.892, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -0.194, ftImpact: 0, to: -0.536 } },
          { name: "Jalen Bridges", min: 9, pts: 3, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.68, zScores: { pts: -0.824, reb: -0.834, ast: -0.892, stl: -0.826, blk: 0.875, tpm: 0.122, fgImpact: -0.306, ftImpact: 0, to: 1.007 } },
          { name: "Leonard Miller", min: 19, pts: 18, reb: 7, ast: 1, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 7, fga: 11, ftm: 1, fta: 1, composite: 7.19, zScores: { pts: 1.713, reb: 1.73, ast: -0.411, stl: 1.502, blk: -0.491, tpm: 1.889, fgImpact: 1.474, ftImpact: 0.322, to: -0.536 } },
          { name: "Noa Essengue", min: 15, pts: 7, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 1, composite: -0.8, zScores: { pts: -0.148, reb: -0.406, ast: 0.069, stl: 0.338, blk: -0.491, tpm: 0.122, fgImpact: 0.528, ftImpact: -1.047, to: 0.236 } },
          { name: "Orlando Robinson", min: 9, pts: 2, reb: 3, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1, zScores: { pts: -0.993, reb: 0.021, ast: -0.411, stl: 0.338, blk: 0.875, tpm: -0.762, fgImpact: -0.306, ftImpact: 0, to: 0.236 } },
          { name: "Buddy Hield", min: 16, pts: 3, reb: 1, ast: 3, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: 1.48, zScores: { pts: -0.824, reb: -0.834, ast: 0.549, stl: 2.666, blk: -0.491, tpm: 0.122, fgImpact: 0.056, ftImpact: 0, to: 0.236 } },
          { name: "Tre Jones", min: 17, pts: 6, reb: 3, ast: 7, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 5, ftm: 4, fta: 4, composite: 0.21, zScores: { pts: -0.317, reb: 0.021, ast: 2.469, stl: 0.338, blk: -0.491, tpm: -0.762, fgImpact: -1.028, ftImpact: 1.286, to: -1.307 } },
          { name: "Brandon Boston Jr.", min: 7, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.332, reb: -1.261, ast: -0.892, stl: -0.826, blk: 0.875, tpm: -0.762, fgImpact: -0.361, ftImpact: 0, to: 1.007 } },
          { name: "Dailyn Swain", min: 10, pts: 4, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -3.17, zScores: { pts: -0.655, reb: -1.261, ast: 0.069, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -0.25, ftImpact: 0, to: 1.007 } },
          { name: "Jaylin Sellers", min: 15, pts: 10, reb: 2, ast: 1, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 1.97, zScores: { pts: 0.36, reb: -0.406, ast: -0.411, stl: 1.502, blk: -0.491, tpm: 1.005, fgImpact: 0.945, ftImpact: 0, to: -0.536 } }
        ]
      },
      home: {
        abbr: "MIL", name: "Milwaukee Bucks", score: 104,
        players: [
          { name: "Pete Nance", min: 26, pts: 4, reb: 3, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: -3.93, zScores: { pts: -0.655, reb: 0.021, ast: 0.069, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -1.39, ftImpact: 0.643, to: -0.536 } },
          { name: "Ousmane Dieng", min: 27, pts: 10, reb: 11, ast: 4, stl: 0, blk: 1, to: 4, tpm: 2, fgm: 4, fga: 12, ftm: 0, fta: 0, composite: 2.58, zScores: { pts: 0.36, reb: 3.44, ast: 1.029, stl: -0.826, blk: 0.875, tpm: 1.005, fgImpact: -1.223, ftImpact: 0, to: -2.079 } },
          { name: "Jericho Sims", min: 22, pts: 3, reb: 8, ast: 2, stl: 0, blk: 1, to: 4, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -2.78, zScores: { pts: -0.824, reb: 2.158, ast: 0.069, stl: -0.826, blk: 0.875, tpm: -0.762, fgImpact: -0.667, ftImpact: -0.725, to: -2.079 } },
          { name: "Brayden Burries", min: 29, pts: 19, reb: 5, ast: 5, stl: 4, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 12, ftm: 8, fta: 8, composite: 8.55, zScores: { pts: 1.883, reb: 0.876, ast: 1.509, stl: 3.83, blk: -0.491, tpm: 0.122, fgImpact: -0.444, ftImpact: 2.572, to: -1.307 } },
          { name: "Kasparas Jakucionis", min: 20, pts: 18, reb: 1, ast: 6, stl: 1, blk: 0, to: 5, tpm: 1, fgm: 3, fga: 8, ftm: 11, fta: 11, composite: 2.97, zScores: { pts: 1.713, reb: -0.834, ast: 1.989, stl: 0.338, blk: -0.491, tpm: 0.122, fgImpact: -0.556, ftImpact: 3.537, to: -2.85 } },
          { name: "Johni Broome", min: 9, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -3.62, zScores: { pts: -0.655, reb: 0.021, ast: -0.892, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -0.25, ftImpact: 0, to: 0.236 } },
          { name: "Bogoljub Markovic", min: 21, pts: 1, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -4.53, zScores: { pts: -1.163, reb: 0.448, ast: -0.892, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -0.361, ftImpact: -0.725, to: 0.236 } },
          { name: "Jake Stephens", min: 7, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.96, zScores: { pts: -1.332, reb: -1.261, ast: -0.892, stl: -0.826, blk: 0.875, tpm: -0.762, fgImpact: 0, ftImpact: 0, to: 0.236 } },
          { name: "Kel'el Ware", min: 23, pts: 5, reb: 5, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 9, ftm: 1, fta: 2, composite: -1.55, zScores: { pts: -0.486, reb: 0.876, ast: -0.411, stl: -0.826, blk: 2.241, tpm: -0.762, fgImpact: -1.695, ftImpact: -0.725, to: 0.236 } },
          { name: "Caris LeVert", min: 8, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.22, zScores: { pts: -0.824, reb: -0.834, ast: -0.892, stl: -0.826, blk: -0.491, tpm: 0.122, fgImpact: 0.056, ftImpact: 0, to: -0.536 } },
          { name: "Cormac Ryan", min: 26, pts: 14, reb: 6, ast: 0, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 4, fga: 9, ftm: 3, fta: 5, composite: 0.61, zScores: { pts: 1.037, reb: 1.303, ast: -0.892, stl: 0.338, blk: -0.491, tpm: 1.889, fgImpact: -0.139, ftImpact: -1.129, to: -1.307 } },
          { name: "Kam Jones", min: 22, pts: 23, reb: 4, ast: 1, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 9, fga: 14, ftm: 3, fta: 5, composite: 2.96, zScores: { pts: 2.559, reb: 0.448, ast: -0.411, stl: 0.338, blk: -0.491, tpm: 1.005, fgImpact: 1.946, ftImpact: -1.129, to: -1.307 } }
        ]
      }
    },
      {
      id: "401914125",
      line: "Detroit Pistons 128 @ Minnesota Timberwolves 106 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DET", name: "Detroit Pistons", score: 128,
        players: [
          { name: "Duncan Robinson", min: 24, pts: 15, reb: 6, ast: 1, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 5, fga: 8, ftm: 1, fta: 2, composite: 3.29, zScores: { pts: 1.206, reb: 1.303, ast: -0.411, stl: -0.826, blk: -0.491, tpm: 2.772, fgImpact: 1.001, ftImpact: -0.725, to: -0.536 } },
          { name: "John Collins", min: 20, pts: 11, reb: 3, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 3, fta: 4, composite: 2.14, zScores: { pts: 0.529, reb: 0.021, ast: -0.892, stl: 1.502, blk: -0.491, tpm: -0.762, fgImpact: 1.307, ftImpact: -0.082, to: 1.007 } },
          { name: "Jalen Duren", min: 15, pts: 24, reb: 3, ast: 1, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 8, fga: 9, ftm: 8, fta: 8, composite: 9.74, zScores: { pts: 2.729, reb: 0.021, ast: -0.411, stl: 1.502, blk: 0.875, tpm: -0.762, fgImpact: 2.975, ftImpact: 2.572, to: 0.236 } },
          { name: "Cade Cunningham", min: 25, pts: 14, reb: 2, ast: 9, stl: 1, blk: 0, to: 5, tpm: 2, fgm: 5, fga: 11, ftm: 2, fta: 2, composite: 2.62, zScores: { pts: 1.037, reb: -0.406, ast: 3.429, stl: 0.338, blk: -0.491, tpm: 1.005, fgImpact: -0.083, ftImpact: 0.643, to: -2.85 } },
          { name: "Ausar Thompson", min: 21, pts: 4, reb: 4, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: 1.97, zScores: { pts: -0.655, reb: 0.448, ast: 1.029, stl: 0.338, blk: -0.491, tpm: -0.762, fgImpact: 0.417, ftImpact: 0.643, to: 1.007 } },
          { name: "Paul Reed", min: 16, pts: 7, reb: 3, ast: 2, stl: 1, blk: 2, to: 4, tpm: 0, fgm: 2, fga: 4, ftm: 3, fta: 3, composite: 0.76, zScores: { pts: -0.148, reb: 0.021, ast: 0.069, stl: 0.338, blk: 2.241, tpm: -0.762, fgImpact: 0.111, ftImpact: 0.965, to: -2.079 } },
          { name: "Tolu Smith", min: 10, pts: 6, reb: 6, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 2.24, zScores: { pts: -0.317, reb: 1.303, ast: 0.069, stl: -0.826, blk: 0.875, tpm: -0.762, fgImpact: 0.89, ftImpact: 0, to: 1.007 } },
          { name: "Ronald Holland II", min: 15, pts: 9, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 1, fta: 1, composite: -0.78, zScores: { pts: 0.191, reb: 0.021, ast: -0.411, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 0.945, ftImpact: 0.322, to: 0.236 } },
          { name: "Ugonna Onyenso", min: 7, pts: 0, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.14, zScores: { pts: -1.332, reb: 0.448, ast: -0.411, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 0, ftImpact: 0, to: 0.236 } },
          { name: "Isaac Jones", min: 7, pts: 1, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -3.23, zScores: { pts: -1.163, reb: 0.021, ast: -0.892, stl: -0.826, blk: 0.875, tpm: -0.762, fgImpact: 0, ftImpact: -0.725, to: 0.236 } },
          { name: "Javonte Green", min: 6, pts: 2, reb: 1, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.05, zScores: { pts: -0.993, reb: -0.834, ast: -0.892, stl: 1.502, blk: -0.491, tpm: -0.762, fgImpact: 0.417, ftImpact: 0, to: 1.007 } },
          { name: "Kevin Huerter", min: 17, pts: 3, reb: 2, ast: 4, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.03, zScores: { pts: -0.824, reb: -0.406, ast: 1.029, stl: 0.338, blk: -0.491, tpm: 0.122, fgImpact: -1.028, ftImpact: 0, to: 0.236 } },
          { name: "Isaiah Joe", min: 20, pts: 14, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 10, ftm: 5, fta: 7, composite: -0.9, zScores: { pts: 1.037, reb: -0.834, ast: 0.069, stl: -0.826, blk: -0.491, tpm: 0.122, fgImpact: -0.5, ftImpact: -0.486, to: 1.007 } },
          { name: "Elijah Harkless", min: 7, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -6.05, zScores: { pts: -1.332, reb: -1.261, ast: -0.892, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -0.723, ftImpact: 0, to: 0.236 } },
          { name: "Daniss Jenkins", min: 16, pts: 6, reb: 3, ast: 4, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -0.61, zScores: { pts: -0.317, reb: 0.021, ast: 1.029, stl: -0.826, blk: 0.875, tpm: 0.122, fgImpact: -0.25, ftImpact: -0.725, to: -0.536 } },
          { name: "Ebuka Okorie", min: 7, pts: 6, reb: 0, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -1.66, zScores: { pts: -0.317, reb: -1.261, ast: 0.069, stl: 0.338, blk: -0.491, tpm: -0.762, fgImpact: 0.528, ftImpact: 0, to: 0.236 } },
          { name: "John Ukomadu", min: 7, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.87, zScores: { pts: -0.317, reb: -0.834, ast: -0.892, stl: -0.826, blk: -0.491, tpm: 1.005, fgImpact: 0.473, ftImpact: 0, to: 1.007 } }
        ]
      },
      home: {
        abbr: "MIN", name: "Minnesota Timberwolves", score: 106,
        players: [
          { name: "Jaden McDaniels", min: 23, pts: 12, reb: 6, ast: 3, stl: 2, blk: 1, to: 4, tpm: 1, fgm: 2, fga: 6, ftm: 7, fta: 7, composite: 4.61, zScores: { pts: 0.698, reb: 1.303, ast: 0.549, stl: 1.502, blk: 0.875, tpm: 0.122, fgImpact: -0.611, ftImpact: 2.251, to: -2.079 } },
          { name: "Jonathan Kuminga", min: 22, pts: 16, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 6, ftm: 4, fta: 5, composite: 5.42, zScores: { pts: 1.375, reb: 0.448, ast: 0.549, stl: 0.338, blk: -0.491, tpm: 1.005, fgImpact: 1.724, ftImpact: 0.239, to: 0.236 } },
          { name: "Rudy Gobert", min: 22, pts: 8, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: -0.25, zScores: { pts: 0.022, reb: 0.448, ast: -0.411, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 0.89, ftImpact: 0.643, to: 0.236 } },
          { name: "LaMelo Ball", min: 18, pts: 3, reb: 2, ast: 6, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.77, zScores: { pts: -0.824, reb: -0.406, ast: 1.989, stl: -0.826, blk: -0.491, tpm: 0.122, fgImpact: -1.028, ftImpact: 0, to: -1.307 } },
          { name: "Anthony Edwards", min: 28, pts: 20, reb: 0, ast: 3, stl: 2, blk: 0, to: 4, tpm: 1, fgm: 5, fga: 15, ftm: 9, fta: 9, composite: 1.76, zScores: { pts: 2.052, reb: -1.261, ast: 0.549, stl: 1.502, blk: -0.491, tpm: 0.122, fgImpact: -1.529, ftImpact: 2.894, to: -2.079 } },
          { name: "Trey Lyles", min: 15, pts: 5, reb: 0, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.12, zScores: { pts: -0.486, reb: -1.261, ast: -0.892, stl: -0.826, blk: 0.875, tpm: 0.122, fgImpact: 0.111, ftImpact: 0, to: 0.236 } },
          { name: "KJ Martin", min: 7, pts: 2, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 4, composite: -3.53, zScores: { pts: -0.993, reb: -0.406, ast: -0.411, stl: 0.338, blk: -0.491, tpm: -0.762, fgImpact: -0.361, ftImpact: -1.45, to: 1.007 } },
          { name: "Norchad Omier", min: 7, pts: 0, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 1, composite: -4.84, zScores: { pts: -1.332, reb: 0.876, ast: -0.411, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -1.084, ftImpact: -1.047, to: 0.236 } },
          { name: "Cody Williams", min: 8, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 3, fta: 4, composite: -5.21, zScores: { pts: -0.824, reb: -1.261, ast: -0.892, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -1.084, ftImpact: -0.082, to: 1.007 } },
          { name: "Joan Beringer", min: 18, pts: 10, reb: 7, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 4, fta: 4, composite: 4.83, zScores: { pts: 0.36, reb: 1.73, ast: -0.892, stl: 0.338, blk: 0.875, tpm: -0.762, fgImpact: 0.89, ftImpact: 1.286, to: 1.007 } },
          { name: "Ayo Dosunmu", min: 24, pts: 10, reb: 1, ast: 0, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 3, fga: 8, ftm: 3, fta: 4, composite: -1.98, zScores: { pts: 0.36, reb: -0.834, ast: -0.892, stl: 0.338, blk: 0.875, tpm: 0.122, fgImpact: -0.556, ftImpact: -0.082, to: -1.307 } },
          { name: "Jaylen Clark", min: 8, pts: 6, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.07, zScores: { pts: -0.317, reb: -0.834, ast: -0.892, stl: 0.338, blk: -0.491, tpm: 1.005, fgImpact: 0.111, ftImpact: 0, to: 1.007 } },
          { name: "Terrence Shannon Jr.", min: 18, pts: 5, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -1.55, zScores: { pts: -0.486, reb: -0.834, ast: -0.411, stl: 0.338, blk: -0.491, tpm: 0.122, fgImpact: -0.667, ftImpact: 0.643, to: 0.236 } },
          { name: "Bones Hyland", min: 15, pts: 2, reb: 0, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.58, zScores: { pts: -0.993, reb: -1.261, ast: 0.549, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -1.028, ftImpact: 0, to: 0.236 } },
          { name: "Zyon Pullin", min: 7, pts: 4, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -2.32, zScores: { pts: -0.655, reb: -0.834, ast: -0.411, stl: 0.338, blk: -0.491, tpm: 0.122, fgImpact: -0.667, ftImpact: -0.725, to: 1.007 } }
        ]
      }
    },
      {
      id: "401918011",
      line: "Denver Nuggets 110 @ LA Clippers 122 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DEN", name: "Denver Nuggets", score: 110,
        players: [
          { name: "Aaron Gordon", min: 14, pts: 8, reb: 6, ast: 2, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 8, ftm: 1, fta: 2, composite: -2.39, zScores: { pts: 0.022, reb: 1.303, ast: 0.069, stl: -0.826, blk: -0.491, tpm: 0.122, fgImpact: -0.556, ftImpact: -0.725, to: -1.307 } },
          { name: "Cameron Johnson", min: 13, pts: 5, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -3.28, zScores: { pts: -0.486, reb: -0.406, ast: -0.411, stl: -0.826, blk: -0.491, tpm: 0.122, fgImpact: -0.25, ftImpact: 0, to: -0.536 } },
          { name: "Nikola Jokic", min: 17, pts: 5, reb: 6, ast: 7, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 6, ftm: 3, fta: 4, composite: 0.36, zScores: { pts: -0.486, reb: 1.303, ast: 2.469, stl: 0.338, blk: -0.491, tpm: -0.762, fgImpact: -1.39, ftImpact: -0.082, to: -0.536 } },
          { name: "Jamal Murray", min: 17, pts: 14, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 6, fga: 8, ftm: 0, fta: 0, composite: 3.55, zScores: { pts: 1.037, reb: 0.448, ast: -0.411, stl: -0.826, blk: -0.491, tpm: 1.005, fgImpact: 1.779, ftImpact: 0, to: 1.007 } },
          { name: "Christian Braun", min: 13, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -3.86, zScores: { pts: -0.824, reb: -0.406, ast: -0.892, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 0.056, ftImpact: -0.725, to: 1.007 } },
          { name: "Alpha Diallo", min: 13, pts: 0, reb: 1, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.02, zScores: { pts: -1.332, reb: -0.834, ast: 0.549, stl: 0.338, blk: -0.491, tpm: -0.762, fgImpact: -0.723, ftImpact: 0, to: 0.236 } },
          { name: "Marvin Bagley III", min: 15, pts: 4, reb: 6, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 4, composite: -1.63, zScores: { pts: -0.655, reb: 1.303, ast: 0.549, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -0.306, ftImpact: -1.45, to: 1.007 } },
          { name: "Zeke Nnaji", min: 8, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -3.81, zScores: { pts: -0.486, reb: 0.021, ast: -0.892, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 0.111, ftImpact: -0.725, to: 0.236 } },
          { name: "Emanuel Miller", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 2, composite: -6.58, zScores: { pts: -1.332, reb: -0.834, ast: -0.892, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -0.361, ftImpact: -2.093, to: 1.007 } },
          { name: "Coleman Hawkins", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.56, zScores: { pts: -1.332, reb: -1.261, ast: -0.892, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 0, ftImpact: 0, to: 1.007 } },
          { name: "DaRon Holmes II", min: 12, pts: 8, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: -1.24, zScores: { pts: 0.022, reb: -0.834, ast: -0.892, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 0.89, ftImpact: 0.643, to: 1.007 } },
          { name: "Bryce Hopkins", min: 13, pts: 3, reb: 1, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 1, composite: -4.07, zScores: { pts: -0.824, reb: -0.834, ast: 0.549, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -0.667, ftImpact: 0.322, to: -0.536 } },
          { name: "Trevon Brazile", min: 25, pts: 22, reb: 2, ast: 0, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 8, fga: 10, ftm: 3, fta: 5, composite: 6.69, zScores: { pts: 2.39, reb: -0.406, ast: -0.892, stl: 0.338, blk: 0.875, tpm: 1.889, fgImpact: 2.613, ftImpact: -1.129, to: 1.007 } },
          { name: "Cam Whitmore", min: 24, pts: 17, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 13, ftm: 2, fta: 5, composite: -0.44, zScores: { pts: 1.544, reb: 0.448, ast: -0.892, stl: 0.338, blk: -0.491, tpm: 0.122, fgImpact: 0.751, ftImpact: -2.497, to: 0.236 } },
          { name: "Tyus Jones", min: 12, pts: 0, reb: 1, ast: 7, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.67, zScores: { pts: -1.332, reb: -0.834, ast: 2.469, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -0.361, ftImpact: 0, to: -0.536 } },
          { name: "Dane Goodwin", min: 3, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.69, zScores: { pts: -1.332, reb: -0.834, ast: -0.892, stl: 0.338, blk: -0.491, tpm: -0.762, fgImpact: -0.723, ftImpact: 0, to: 1.007 } },
          { name: "Julian Strawther", min: 19, pts: 11, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -0.87, zScores: { pts: 0.529, reb: -0.406, ast: -0.892, stl: -0.826, blk: -0.491, tpm: 1.889, fgImpact: -0.139, ftImpact: 0, to: -0.536 } },
          { name: "Ryan Nembhard", min: 17, pts: 5, reb: 1, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 1, composite: 0.44, zScores: { pts: -0.486, reb: -0.834, ast: 0.069, stl: 1.502, blk: -0.491, tpm: -0.762, fgImpact: 0.111, ftImpact: 0.322, to: 1.007 } }
        ]
      },
      home: {
        abbr: "LAC", name: "LA Clippers", score: 122,
        players: [
          { name: "Derrick Jones Jr.", min: 24, pts: 14, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 6, ftm: 5, fta: 6, composite: 3.98, zScores: { pts: 1.037, reb: 0.876, ast: -0.411, stl: 0.338, blk: -0.491, tpm: 0.122, fgImpact: 0.945, ftImpact: 0.561, to: 1.007 } },
          { name: "Rui Hachimura", min: 24, pts: 16, reb: 5, ast: 1, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 12, ftm: 3, fta: 3, composite: 5.49, zScores: { pts: 1.375, reb: 0.876, ast: -0.411, stl: 1.502, blk: -0.491, tpm: 1.889, fgImpact: -0.444, ftImpact: 0.965, to: 0.236 } },
          { name: "Isaiah Jackson", min: 26, pts: 9, reb: 5, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 2.04, zScores: { pts: 0.191, reb: 0.876, ast: 0.549, stl: 0.338, blk: -0.491, tpm: 0.122, fgImpact: 0.223, ftImpact: 0, to: 0.236 } },
          { name: "Darius Garland", min: 23, pts: 14, reb: 2, ast: 7, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 5, fga: 12, ftm: 3, fta: 3, composite: 1.51, zScores: { pts: 1.037, reb: -0.406, ast: 2.469, stl: 0.338, blk: -0.491, tpm: 0.122, fgImpact: -0.444, ftImpact: 0.965, to: -2.079 } },
          { name: "Keaton Wagler", min: 28, pts: 12, reb: 5, ast: 4, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 9, ftm: 1, fta: 2, composite: 3.32, zScores: { pts: 0.698, reb: 0.876, ast: 1.029, stl: -0.826, blk: -0.491, tpm: 1.889, fgImpact: -0.139, ftImpact: -0.725, to: 1.007 } },
          { name: "Jahmyl Telfort", min: 9, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.53, zScores: { pts: -1.332, reb: -0.834, ast: 0.069, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -0.361, ftImpact: 0, to: 1.007 } },
          { name: "Baba Miller", min: 21, pts: 15, reb: 5, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 6, ftm: 3, fta: 4, composite: 5.65, zScores: { pts: 1.206, reb: 0.876, ast: 0.069, stl: 0.338, blk: -0.491, tpm: 1.005, fgImpact: 1.724, ftImpact: -0.082, to: 1.007 } },
          { name: "Nick Martinelli", min: 16, pts: 8, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: -1.13, zScores: { pts: 0.022, reb: 0.876, ast: -0.411, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: 0.223, ftImpact: 0, to: 0.236 } },
          { name: "Brook Lopez", min: 8, pts: 9, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 0.13, zScores: { pts: 0.191, reb: -0.406, ast: -0.411, stl: -0.826, blk: -0.491, tpm: 0.122, fgImpact: 0.945, ftImpact: 0, to: 1.007 } },
          { name: "Jalen Pickett", min: 20, pts: 10, reb: 1, ast: 5, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 2.68, zScores: { pts: 0.36, reb: -0.834, ast: 1.509, stl: -0.826, blk: -0.491, tpm: 1.005, fgImpact: 0.945, ftImpact: 0, to: 1.007 } },
          { name: "Blake Wesley", min: 15, pts: 4, reb: 0, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -4.01, zScores: { pts: -0.655, reb: -1.261, ast: 0.549, stl: -0.826, blk: -0.491, tpm: -0.762, fgImpact: -0.667, ftImpact: 0.643, to: -0.536 } },
          { name: "Fletcher Loyer", min: 7, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.56, zScores: { pts: -0.824, reb: -0.834, ast: -0.411, stl: -0.826, blk: -0.491, tpm: 0.122, fgImpact: -0.306, ftImpact: 0, to: 1.007 } },
          { name: "Gradey Dick", min: 19, pts: 8, reb: 3, ast: 4, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 2.89, zScores: { pts: 0.022, reb: 0.021, ast: 1.029, stl: 2.666, blk: -0.491, tpm: -0.762, fgImpact: 0.945, ftImpact: 0, to: -0.536 } }
        ]
      }
    }
    ]
  },
    "2026-10-15": {
    games: [
      {
      id: "401908945",
      line: "Toronto Raptors 120 @ New York Knicks 122 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TOR", name: "Toronto Raptors", score: 120,
        players: [
          { name: "Kawhi Leonard", min: 23, pts: 6, reb: 1, ast: 1, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: 1.26, zScores: { pts: -0.253, reb: -0.673, ast: -0.45, stl: 1.723, blk: 0.895, tpm: -0.72, fgImpact: -0.243, ftImpact: 0.932, to: 0.052 } },
          { name: "RJ Barrett", min: 31, pts: 21, reb: 8, ast: 4, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 6, fga: 12, ftm: 7, fta: 10, composite: 3.39, zScores: { pts: 2.364, reb: 1.682, ast: 1.024, stl: -0.709, blk: -0.482, tpm: 1.008, fgImpact: 0.392, ftImpact: -0.373, to: -1.515 } },
          { name: "Scottie Barnes", min: 28, pts: 23, reb: 3, ast: 4, stl: 0, blk: 4, to: 1, tpm: 4, fgm: 9, fga: 15, ftm: 1, fta: 2, composite: 11.8, zScores: { pts: 2.713, reb: 0, ast: 1.024, stl: -0.709, blk: 5.026, tpm: 2.737, fgImpact: 1.709, ftImpact: -0.746, to: 0.052 } },
          { name: "Jakob Poeltl", min: 25, pts: 7, reb: 4, ast: 2, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 4, composite: -0.78, zScores: { pts: -0.079, reb: 0.336, ast: 0.041, stl: 0.507, blk: 0.895, tpm: -0.72, fgImpact: 0.57, ftImpact: -3.17, to: 0.836 } },
          { name: "Immanuel Quickley", min: 28, pts: 18, reb: 5, ast: 7, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 10, ftm: 5, fta: 5, composite: 7.92, zScores: { pts: 1.841, reb: 0.673, ast: 2.497, stl: 0.507, blk: -0.482, tpm: 0.144, fgImpact: 1.139, ftImpact: 2.331, to: -0.731 } },
          { name: "Kyle Anderson", min: 12, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 3, composite: -4.7, zScores: { pts: -0.602, reb: -0.673, ast: -0.942, stl: -0.709, blk: -0.482, tpm: -0.72, fgImpact: 0.439, ftImpact: -0.28, to: -0.731 } },
          { name: "Jamison Battle", min: 14, pts: 10, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 1.66, zScores: { pts: 0.445, reb: 0, ast: -0.942, stl: -0.709, blk: -0.482, tpm: 1.008, fgImpact: 0.57, ftImpact: 0.932, to: 0.836 } },
          { name: "Collin Murray-Boyles", min: 22, pts: 12, reb: 5, ast: 2, stl: 3, blk: 1, to: 3, tpm: 1, fgm: 4, fga: 8, ftm: 3, fta: 4, composite: 4.42, zScores: { pts: 0.794, reb: 0.673, ast: 0.041, stl: 2.938, blk: 0.895, tpm: 0.144, fgImpact: 0.261, ftImpact: 0.186, to: -1.515 } },
          { name: "Jamarion Sharp", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.33, zScores: { pts: -1.3, reb: -1.009, ast: -0.942, stl: -0.709, blk: -0.482, tpm: -0.72, fgImpact: 0, ftImpact: 0, to: 0.836 } },
          { name: "Malachi Smith", min: 3, pts: 8, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.26, zScores: { pts: 0.096, reb: -1.009, ast: -0.942, stl: -0.709, blk: -0.482, tpm: 1.008, fgImpact: 0.943, ftImpact: 0, to: 0.836 } },
          { name: "Jamal Shead", min: 21, pts: 4, reb: 1, ast: 4, stl: 2, blk: 2, to: 4, tpm: 1, fgm: 1, fga: 6, ftm: 1, fta: 2, composite: -0.59, zScores: { pts: -0.602, reb: -0.673, ast: 1.024, stl: 1.723, blk: 2.272, tpm: 0.144, fgImpact: -1.43, ftImpact: -0.746, to: -2.298 } },
          { name: "Jaden Bradley", min: 5, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -3.72, zScores: { pts: -0.776, reb: -0.673, ast: -0.942, stl: -0.709, blk: -0.482, tpm: -0.72, fgImpact: 0.065, ftImpact: 0.466, to: 0.052 } },
          { name: "Nimari Burnett", min: 6, pts: 0, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2, zScores: { pts: -1.3, reb: 0.336, ast: 0.041, stl: -0.709, blk: -0.482, tpm: -0.72, fgImpact: 0, ftImpact: 0, to: 0.836 } },
          { name: "Ja'Kobe Walter", min: 20, pts: 4, reb: 3, ast: 1, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 6, ftm: 2, fta: 3, composite: -3.6, zScores: { pts: -0.602, reb: 0, ast: -0.45, stl: 0.507, blk: 0.895, tpm: -0.72, fgImpact: -1.43, ftImpact: -0.28, to: -1.515 } }
        ]
      },
      home: {
        abbr: "NY", name: "New York Knicks", score: 122,
        players: [
          { name: "OG Anunoby", min: 31, pts: 6, reb: 5, ast: 3, stl: 3, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 10, ftm: 2, fta: 2, composite: -0.01, zScores: { pts: -0.253, reb: 0.673, ast: 0.532, stl: 2.938, blk: -0.482, tpm: -0.72, fgImpact: -2.112, ftImpact: 0.932, to: -1.515 } },
          { name: "Mohamed Diawara", min: 20, pts: 6, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 10, ftm: 0, fta: 0, composite: -2.16, zScores: { pts: -0.253, reb: 0, ast: -0.45, stl: -0.709, blk: -0.482, tpm: 1.008, fgImpact: -2.112, ftImpact: 0, to: 0.836 } },
          { name: "Karl-Anthony Towns", min: 29, pts: 13, reb: 15, ast: 9, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 8, ftm: 3, fta: 4, composite: 7.24, zScores: { pts: 0.968, reb: 4.038, ast: 3.48, stl: -0.709, blk: -0.482, tpm: 1.008, fgImpact: 0.261, ftImpact: 0.186, to: -1.515 } },
          { name: "Mikal Bridges", min: 30, pts: 14, reb: 4, ast: 1, stl: 0, blk: 2, to: 4, tpm: 1, fgm: 6, fga: 9, ftm: 1, fta: 1, composite: 2.42, zScores: { pts: 1.143, reb: 0.336, ast: -0.45, stl: -0.709, blk: 2.272, tpm: 0.144, fgImpact: 1.513, ftImpact: 0.466, to: -2.298 } },
          { name: "Jalen Brunson", min: 29, pts: 20, reb: 3, ast: 7, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 7, fga: 15, ftm: 5, fta: 6, composite: 3.33, zScores: { pts: 2.19, reb: 0, ast: 2.497, stl: -0.709, blk: -0.482, tpm: 0.144, fgImpact: 0.083, ftImpact: 1.119, to: -1.515 } },
          { name: "Tyler Nickel", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -3.42, zScores: { pts: -0.951, reb: -1.009, ast: -0.942, stl: -0.709, blk: -0.482, tpm: -0.72, fgImpact: -0.374, ftImpact: 0.932, to: 0.836 } },
          { name: "Pacome Dadiet", min: 11, pts: 6, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -3.82, zScores: { pts: -0.253, reb: -0.673, ast: -0.45, stl: -0.709, blk: -0.482, tpm: -0.72, fgImpact: 0.196, ftImpact: 0, to: -0.731 } },
          { name: "Andre Drummond", min: 15, pts: 14, reb: 8, ast: 4, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 6, fga: 7, ftm: 2, fta: 5, composite: 2.92, zScores: { pts: 1.143, reb: 1.682, ast: 1.024, stl: -0.709, blk: 0.895, tpm: -0.72, fgImpact: 2.26, ftImpact: -2.703, to: 0.052 } },
          { name: "James Wiseman", min: 4, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.99, zScores: { pts: -0.951, reb: -0.673, ast: -0.942, stl: -0.709, blk: -0.482, tpm: -0.72, fgImpact: 0.439, ftImpact: 0, to: 0.052 } },
          { name: "Jordan Clarkson", min: 11, pts: 2, reb: 0, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.48, zScores: { pts: -0.951, reb: -1.009, ast: -0.942, stl: 1.723, blk: -0.482, tpm: -0.72, fgImpact: 0.065, ftImpact: 0, to: 0.836 } },
          { name: "Landry Shamet", min: 24, pts: 13, reb: 2, ast: 3, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 8, ftm: 6, fta: 7, composite: 4.42, zScores: { pts: 0.968, reb: -0.336, ast: 0.532, stl: 1.723, blk: -0.482, tpm: 0.144, fgImpact: -0.552, ftImpact: 1.585, to: 0.836 } },
          { name: "Jose Alvarado", min: 14, pts: 9, reb: 0, ast: 3, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 1.9, zScores: { pts: 0.27, reb: -1.009, ast: 0.532, stl: 0.507, blk: -0.482, tpm: 1.872, fgImpact: 0.943, ftImpact: 0, to: -0.731 } },
          { name: "Miles McBride", min: 13, pts: 9, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 1.35, zScores: { pts: 0.27, reb: -0.673, ast: 0.041, stl: -0.709, blk: -0.482, tpm: 1.872, fgImpact: 0.196, ftImpact: 0, to: 0.836 } },
          { name: "Tyler Kolek", min: 5, pts: 6, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.66, zScores: { pts: -0.253, reb: -1.009, ast: -0.45, stl: 0.507, blk: -0.482, tpm: 1.008, fgImpact: 0.504, ftImpact: 0, to: 0.836 } }
        ]
      }
    },
      {
      id: "401908622",
      line: "Oklahoma City Thunder 89 @ Houston Rockets 116 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OKC", name: "Oklahoma City Thunder", score: 89,
        players: [
          { name: "Isaiah Hartenstein", min: 19, pts: 6, reb: 8, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -0.27, zScores: { pts: -0.253, reb: 1.682, ast: -0.45, stl: -0.709, blk: -0.482, tpm: -0.72, fgImpact: -0.178, ftImpact: 0, to: 0.836 } },
          { name: "Alex Caruso", min: 16, pts: 3, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 1, composite: -2.03, zScores: { pts: -0.776, reb: 0, ast: 0.041, stl: -0.709, blk: -0.482, tpm: -0.72, fgImpact: -0.682, ftImpact: 0.466, to: 0.836 } },
          { name: "Shai Gilgeous-Alexander", min: 26, pts: 17, reb: 1, ast: 3, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 5, fga: 12, ftm: 5, fta: 5, composite: 4.68, zScores: { pts: 1.666, reb: -0.673, ast: 0.532, stl: -0.709, blk: 0.895, tpm: 1.008, fgImpact: -0.421, ftImpact: 2.331, to: 0.052 } },
          { name: "Jalen Williams", min: 25, pts: 18, reb: 7, ast: 0, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 7, fga: 14, ftm: 2, fta: 2, composite: 5.66, zScores: { pts: 1.841, reb: 1.346, ast: -0.942, stl: -0.709, blk: 0.895, tpm: 1.008, fgImpact: 0.457, ftImpact: 0.932, to: 0.836 } },
          { name: "Ajay Mitchell", min: 24, pts: 7, reb: 3, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 10, ftm: 1, fta: 2, composite: -4.78, zScores: { pts: -0.079, reb: 0, ast: -0.45, stl: 0.507, blk: -0.482, tpm: -0.72, fgImpact: -1.299, ftImpact: -0.746, to: -1.515 } },
          { name: "Brooks Barnhizer", min: 12, pts: 9, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 5, ftm: 1, fta: 2, composite: -2.37, zScores: { pts: 0.27, reb: -0.673, ast: 0.041, stl: -0.709, blk: -0.482, tpm: -0.72, fgImpact: 1.382, ftImpact: -0.746, to: -0.731 } },
          { name: "Andrew Holifield", min: 12, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -0.951, reb: -1.009, ast: -0.942, stl: -0.709, blk: -0.482, tpm: -0.72, fgImpact: 0.065, ftImpact: 0, to: 0.836 } },
          { name: "Christoph Tilly", min: 8, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.57, zScores: { pts: -1.3, reb: -0.673, ast: 0.041, stl: -0.709, blk: -0.482, tpm: -0.72, fgImpact: 0, ftImpact: 0, to: -0.731 } },
          { name: "Aday Mara", min: 21, pts: 6, reb: 9, ast: 2, stl: 0, blk: 1, to: 4, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.08, zScores: { pts: -0.253, reb: 2.019, ast: 0.041, stl: -0.709, blk: 0.895, tpm: -0.72, fgImpact: 0.943, ftImpact: 0, to: -2.298 } },
          { name: "Kenrich Williams", min: 15, pts: 4, reb: 6, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.44, zScores: { pts: -0.602, reb: 1.009, ast: 0.041, stl: -0.709, blk: -0.482, tpm: -0.72, fgImpact: -0.243, ftImpact: 0, to: -0.731 } },
          { name: "Jared McCain", min: 21, pts: 8, reb: 6, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 13, ftm: 2, fta: 2, composite: 0.03, zScores: { pts: 0.096, reb: 1.009, ast: -0.942, stl: 1.723, blk: -0.482, tpm: -0.72, fgImpact: -2.42, ftImpact: 0.932, to: 0.836 } },
          { name: "Anthony Pritchard", min: 6, pts: 0, reb: 3, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.3, reb: 0, ast: 0.041, stl: -0.709, blk: -0.482, tpm: -0.72, fgImpact: -0.374, ftImpact: 0, to: -0.731 } },
          { name: "Josh Dix", min: 15, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -0.602, reb: -1.009, ast: -0.942, stl: -0.709, blk: -0.482, tpm: -0.72, fgImpact: 0.504, ftImpact: 0, to: 0.052 } },
          { name: "Bennett Stirtz", min: 21, pts: 5, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -2.64, zScores: { pts: -0.427, reb: -0.673, ast: 0.041, stl: -0.709, blk: -0.482, tpm: 0.144, fgImpact: -1.364, ftImpact: 0, to: 0.836 } }
        ]
      },
      home: {
        abbr: "HOU", name: "Houston Rockets", score: 116,
        players: [
          { name: "Kevin Durant", min: 16, pts: 11, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 10, ftm: 3, fta: 3, composite: -1, zScores: { pts: 0.619, reb: -1.009, ast: -0.45, stl: -0.709, blk: -0.482, tpm: -0.72, fgImpact: -0.486, ftImpact: 1.398, to: 0.836 } },
          { name: "Jabari Smith Jr.", min: 19, pts: 4, reb: 6, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 10, ftm: 0, fta: 0, composite: -3.72, zScores: { pts: -0.602, reb: 1.009, ast: -0.942, stl: -0.709, blk: -0.482, tpm: -0.72, fgImpact: -2.112, ftImpact: 0, to: 0.836 } },
          { name: "Alperen Sengun", min: 24, pts: 14, reb: 7, ast: 5, stl: 1, blk: 2, to: 3, tpm: 0, fgm: 7, fga: 11, ftm: 0, fta: 0, composite: 6.13, zScores: { pts: 1.143, reb: 1.346, ast: 1.515, stl: 0.507, blk: 2.272, tpm: -0.72, fgImpact: 1.578, ftImpact: 0, to: -1.515 } },
          { name: "Fred VanVleet", min: 29, pts: 7, reb: 6, ast: 8, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 13, ftm: 0, fta: 0, composite: 5.1, zScores: { pts: -0.079, reb: 1.009, ast: 2.989, stl: 1.723, blk: 0.895, tpm: 0.144, fgImpact: -2.42, ftImpact: 0, to: 0.836 } },
          { name: "Amen Thompson", min: 22, pts: 12, reb: 5, ast: 4, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 6, fga: 13, ftm: 0, fta: 0, composite: 4.03, zScores: { pts: 0.794, reb: 0.673, ast: 1.024, stl: 0.507, blk: 0.895, tpm: -0.72, fgImpact: 0.018, ftImpact: 0, to: 0.836 } },
          { name: "Jae'Sean Tate", min: 8, pts: 4, reb: 0, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.43, zScores: { pts: -0.602, reb: -1.009, ast: 0.532, stl: 0.507, blk: -0.482, tpm: -0.72, fgImpact: 0.504, ftImpact: 0, to: 0.836 } },
          { name: "Cameron Matthews", min: 2, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.77, zScores: { pts: -1.3, reb: -0.673, ast: -0.942, stl: 0.507, blk: -0.482, tpm: -0.72, fgImpact: 0, ftImpact: 0, to: 0.836 } },
          { name: "Tari Eason", min: 17, pts: 12, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 2.44, zScores: { pts: 0.794, reb: 0, ast: -0.45, stl: -0.709, blk: -0.482, tpm: 1.008, fgImpact: 1.448, ftImpact: 0, to: 0.836 } },
          { name: "Isaiah Crawford", min: 13, pts: 7, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -3.15, zScores: { pts: -0.079, reb: -1.009, ast: -0.942, stl: -0.709, blk: -0.482, tpm: 1.008, fgImpact: -0.243, ftImpact: -0.746, to: 0.052 } },
          { name: "Julian Phillips", min: 5, pts: 6, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.22, zScores: { pts: -0.253, reb: -0.673, ast: -0.45, stl: -0.709, blk: -0.482, tpm: 1.008, fgImpact: 0.504, ftImpact: 0, to: 0.836 } },
          { name: "Clint Capela", min: 11, pts: 2, reb: 3, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 3, composite: -4.67, zScores: { pts: -0.951, reb: 0, ast: -0.45, stl: -0.709, blk: 0.895, tpm: -0.72, fgImpact: 0.065, ftImpact: -3.636, to: 0.836 } },
          { name: "Oscar Tshiebwe", min: 10, pts: 2, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.33, zScores: { pts: -0.951, reb: 0, ast: 0.041, stl: 0.507, blk: -0.482, tpm: -0.72, fgImpact: 0.439, ftImpact: 0, to: 0.836 } },
          { name: "Marcus Smart", min: 12, pts: 0, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.14, zScores: { pts: -1.3, reb: -0.336, ast: 0.041, stl: 0.507, blk: -0.482, tpm: -0.72, fgImpact: -1.121, ftImpact: 0, to: -0.731 } },
          { name: "Bogdan Bogdanovic", min: 16, pts: 15, reb: 6, ast: 1, stl: 1, blk: 0, to: 0, tpm: 5, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 7.04, zScores: { pts: 1.317, reb: 1.009, ast: -0.45, stl: 0.507, blk: -0.482, tpm: 3.601, fgImpact: 0.7, ftImpact: 0, to: 0.836 } },
          { name: "Quadir Copeland", min: 6, pts: 1, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 3, composite: -6.4, zScores: { pts: -1.125, reb: -1.009, ast: -0.45, stl: -0.709, blk: -0.482, tpm: -0.72, fgImpact: 0, ftImpact: -1.958, to: 0.052 } },
          { name: "Sean Pedulla", min: 4, pts: 3, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.24, zScores: { pts: -0.776, reb: -0.673, ast: -0.45, stl: 0.507, blk: -0.482, tpm: 0.144, fgImpact: 0.439, ftImpact: 0, to: 0.052 } },
          { name: "Reed Sheppard", min: 16, pts: 11, reb: 5, ast: 3, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 4.44, zScores: { pts: 0.619, reb: 0.673, ast: 0.532, stl: 0.507, blk: -0.482, tpm: 1.872, fgImpact: -0.113, ftImpact: 0, to: 0.836 } },
          { name: "Bruce Thornton", min: 10, pts: 5, reb: 0, ast: 0, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.03, zScores: { pts: -0.427, reb: -1.009, ast: -0.942, stl: 1.723, blk: -0.482, tpm: 0.144, fgImpact: 0.131, ftImpact: 0, to: 0.836 } }
        ]
      }
    }
    ]
  },
    "2026-10-16": {
    games: [
      {
      id: "401898406",
      line: "Miami Heat 115 @ Orlando Magic 136 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIA", name: "Miami Heat", score: 115,
        players: [
          { name: "Andrew Wiggins", min: 15, pts: 13, reb: 2, ast: 1, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 4, fta: 5, composite: 2.76, zScores: { pts: 0.733, reb: -0.453, ast: -0.457, stl: 1.562, blk: -0.519, tpm: 0.031, fgImpact: 0.664, ftImpact: 0.293, to: 0.91 } },
          { name: "Bobby Portis", min: 15, pts: 12, reb: 5, ast: 1, stl: 0, blk: 2, to: 0, tpm: 2, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 4.96, zScores: { pts: 0.574, reb: 0.633, ast: -0.457, stl: -0.8, blk: 2.508, tpm: 0.853, fgImpact: 0.734, ftImpact: 0, to: 0.91 } },
          { name: "Nikola Jovic", min: 15, pts: 12, reb: 6, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 6, ftm: 2, fta: 2, composite: 4.84, zScores: { pts: 0.574, reb: 0.995, ast: -0.457, stl: -0.8, blk: 0.994, tpm: 0.853, fgImpact: 1.05, ftImpact: 0.717, to: 0.91 } },
          { name: "Klay Thompson", min: 15, pts: 0, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 7, ftm: 0, fta: 0, composite: -5.48, zScores: { pts: -1.332, reb: -0.816, ast: 0.568, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -2.704, ftImpact: 0, to: 0.91 } },
          { name: "Davion Mitchell", min: 15, pts: 7, reb: 1, ast: 5, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 3, composite: -4.25, zScores: { pts: -0.22, reb: -0.816, ast: 1.594, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.595, ftImpact: -1.922, to: -1.366 } },
          { name: "Simone Fontecchio", min: 18, pts: 8, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 11, ftm: 1, fta: 1, composite: -2.65, zScores: { pts: -0.061, reb: -0.816, ast: -0.457, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: -1.723, ftImpact: 0.358, to: 0.151 } },
          { name: "Myron Gardner", min: 24, pts: 5, reb: 5, ast: 1, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 11, ftm: 0, fta: 0, composite: -1.7, zScores: { pts: -0.537, reb: 0.633, ast: -0.457, stl: 1.562, blk: -0.519, tpm: 0.031, fgImpact: -2.565, ftImpact: 0, to: 0.151 } },
          { name: "Keshad Johnson", min: 19, pts: 8, reb: 6, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -0.28, zScores: { pts: -0.061, reb: 0.995, ast: 0.056, stl: -0.8, blk: -0.519, tpm: 0.853, fgImpact: -0.95, ftImpact: 0, to: 0.151 } },
          { name: "Kylor Kelley", min: 7, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.77, zScores: { pts: -0.696, reb: -0.816, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.912, ftImpact: 0, to: 0.91 } },
          { name: "Nick Richards", min: 18, pts: 9, reb: 11, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 2, ftm: 4, fta: 4, composite: 3.92, zScores: { pts: 0.098, reb: 2.806, ast: 0.568, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: 0.912, ftImpact: 1.433, to: -0.607 } },
          { name: "Vladislav Goldin", min: 7, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 2, composite: -5.46, zScores: { pts: -0.696, reb: -0.453, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.139, ftImpact: -2.281, to: 0.91 } },
          { name: "Tim Hardaway Jr.", min: 9, pts: 7, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 2, composite: -3.04, zScores: { pts: -0.22, reb: -0.816, ast: 0.056, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: 0.595, ftImpact: -2.281, to: 0.91 } },
          { name: "Gabe Madsen", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.45, zScores: { pts: -1.332, reb: -1.178, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.773, ftImpact: 0, to: 0.91 } },
          { name: "Tre Donaldson", min: 17, pts: 5, reb: 0, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.77, zScores: { pts: -0.537, reb: -1.178, ast: 0.568, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: -0.247, ftImpact: 0, to: 0.91 } },
          { name: "Bez Mbeng", min: 7, pts: 0, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.26, zScores: { pts: -1.332, reb: -0.816, ast: 0.056, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: -0.386, ftImpact: 0, to: 0.151 } },
          { name: "Ryan Conwell", min: 30, pts: 21, reb: 1, ast: 7, stl: 1, blk: 0, to: 4, tpm: 3, fgm: 9, fga: 17, ftm: 0, fta: 0, composite: 4.23, zScores: { pts: 2.004, reb: -0.816, ast: 2.619, stl: 0.381, blk: -0.519, tpm: 1.676, fgImpact: 1.012, ftImpact: 0, to: -2.125 } }
        ]
      },
      home: {
        abbr: "ORL", name: "Orlando Magic", score: 136,
        players: [
          { name: "Paolo Banchero", min: 26, pts: 24, reb: 7, ast: 4, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 5, fga: 11, ftm: 13, fta: 16, composite: 6.49, zScores: { pts: 2.48, reb: 1.357, ast: 1.081, stl: -0.8, blk: 0.994, tpm: 0.031, fgImpact: -0.039, ftImpact: 1.237, to: 0.151 } },
          { name: "Franz Wagner", min: 19, pts: 11, reb: 6, ast: 6, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 7, ftm: 3, fta: 3, composite: 3.72, zScores: { pts: 0.415, reb: 0.995, ast: 2.107, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: 0.664, ftImpact: 1.075, to: -0.607 } },
          { name: "Wendell Carter Jr.", min: 15, pts: 2, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -3.79, zScores: { pts: -1.014, reb: -0.816, ast: 0.056, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.773, ftImpact: 0.717, to: 0.151 } },
          { name: "Desmond Bane", min: 24, pts: 23, reb: 2, ast: 1, stl: 2, blk: 0, to: 2, tpm: 7, fgm: 8, fga: 16, ftm: 0, fta: 0, composite: 7.37, zScores: { pts: 2.321, reb: -0.453, ast: -0.457, stl: 1.562, blk: -0.519, tpm: 4.964, fgImpact: 0.556, ftImpact: 0, to: -0.607 } },
          { name: "Jalen Suggs", min: 21, pts: 8, reb: 3, ast: 4, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 2, fta: 4, composite: 0.74, zScores: { pts: -0.061, reb: -0.091, ast: 1.081, stl: 0.381, blk: -0.519, tpm: 0.853, fgImpact: -0.247, ftImpact: -1.564, to: 0.91 } },
          { name: "Kevin Knox II", min: 9, pts: 7, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -1.17, zScores: { pts: -0.22, reb: -0.453, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: 0.139, ftImpact: 0.717, to: 0.91 } },
          { name: "Jamal Cain", min: 16, pts: 14, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 7, ftm: 0, fta: 2, composite: 0.31, zScores: { pts: 0.892, reb: 0.633, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.853, fgImpact: 2.348, ftImpact: -2.281, to: 0.151 } },
          { name: "Malaki Branham", min: 12, pts: 7, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: -2.88, zScores: { pts: -0.22, reb: -0.816, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.595, ftImpact: -0.782, to: 0.91 } },
          { name: "Tristan da Silva", min: 18, pts: 12, reb: 4, ast: 2, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 2.07, zScores: { pts: 0.574, reb: 0.271, ast: 0.056, stl: -0.8, blk: 0.994, tpm: 0.853, fgImpact: 0.734, ftImpact: 0, to: -0.607 } },
          { name: "Noah Penda", min: 2, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.5, zScores: { pts: -1.332, reb: -1.178, ast: -0.97, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: 0, ftImpact: 0, to: 0.91 } },
          { name: "Nikola Vucevic", min: 23, pts: 13, reb: 7, ast: 2, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 11, ftm: 3, fta: 4, composite: 1.69, zScores: { pts: 0.733, reb: 1.357, ast: 0.056, stl: 1.562, blk: -0.519, tpm: -0.791, fgImpact: -0.039, ftImpact: -0.065, to: -0.607 } },
          { name: "Goga Bitadze", min: 5, pts: 0, reb: 3, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -1.95, zScores: { pts: -1.332, reb: -0.091, ast: -0.457, stl: -0.8, blk: 0.994, tpm: -0.791, fgImpact: -0.386, ftImpact: 0, to: 0.91 } },
          { name: "Colin Castleton", min: 5, pts: 1, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -4.93, zScores: { pts: -1.173, reb: -0.453, ast: -0.97, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: -0.773, ftImpact: -0.782, to: 0.151 } },
          { name: "Jevon Carter", min: 13, pts: 3, reb: 0, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.77, zScores: { pts: -0.855, reb: -1.178, ast: 0.568, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: 0.069, ftImpact: 0, to: 0.91 } },
          { name: "JD Davison", min: 7, pts: 10, reb: 2, ast: 1, stl: 1, blk: 2, to: 1, tpm: 1, fgm: 3, fga: 3, ftm: 3, fta: 3, composite: 4.86, zScores: { pts: 0.257, reb: -0.453, ast: -0.457, stl: 0.381, blk: 2.508, tpm: 0.031, fgImpact: 1.367, ftImpact: 1.075, to: 0.151 } },
          { name: "Alex Morales", min: 17, pts: 1, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -4.36, zScores: { pts: -1.173, reb: 0.271, ast: 0.056, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.773, ftImpact: -0.782, to: 0.151 } },
          { name: "Jase Richardson", min: 7, pts: 0, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.93, zScores: { pts: -1.332, reb: -0.453, ast: 0.056, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0, ftImpact: 0, to: 0.91 } }
        ]
      }
    },
      {
      id: "401898407",
      line: "Boston Celtics 125 @ Philadelphia 76ers 120 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "BOS", name: "Boston Celtics", score: 125,
        players: [
          { name: "Gabe McGlothan", min: 22, pts: 6, reb: 13, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: 3.05, zScores: { pts: -0.379, reb: 3.53, ast: 0.056, stl: 0.381, blk: -0.519, tpm: 0.853, fgImpact: -1.02, ftImpact: 0, to: 0.151 } },
          { name: "Tucker DeVries", min: 24, pts: 9, reb: 6, ast: 1, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: 2.17, zScores: { pts: 0.098, reb: 0.995, ast: -0.457, stl: 1.562, blk: -0.519, tpm: 1.676, fgImpact: -1.337, ftImpact: 0, to: 0.151 } },
          { name: "Chris Cenac Jr.", min: 19, pts: 12, reb: 8, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 3.76, zScores: { pts: 0.574, reb: 1.719, ast: -0.457, stl: 0.381, blk: 0.994, tpm: -0.791, fgImpact: 1.189, ftImpact: 0, to: 0.151 } },
          { name: "Milos Uzan", min: 23, pts: 14, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 9, ftm: 4, fta: 4, composite: 2.17, zScores: { pts: 0.892, reb: -0.453, ast: -0.457, stl: 0.381, blk: -0.519, tpm: 0.853, fgImpact: -0.108, ftImpact: 1.433, to: 0.151 } },
          { name: "Hayden Gray", min: 27, pts: 7, reb: 1, ast: 7, stl: 3, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 2.68, zScores: { pts: -0.22, reb: -0.816, ast: 2.619, stl: 2.743, blk: -0.519, tpm: 0.031, fgImpact: 0.208, ftImpact: 0, to: -1.366 } },
          { name: "Amari Williams", min: 14, pts: 4, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.55, zScores: { pts: -0.696, reb: -0.091, ast: 0.056, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.139, ftImpact: 0, to: 0.151 } },
          { name: "Dillon Mitchell", min: 25, pts: 7, reb: 8, ast: 4, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -0.62, zScores: { pts: -0.22, reb: 1.719, ast: 1.081, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: 0.208, ftImpact: 0, to: -2.125 } },
          { name: "Luka Garza", min: 18, pts: 13, reb: 6, ast: 1, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 3, fga: 6, ftm: 5, fta: 7, composite: 1.43, zScores: { pts: 0.733, reb: 0.995, ast: -0.457, stl: -0.8, blk: 0.994, tpm: 0.853, fgImpact: 0.208, ftImpact: -0.489, to: -0.607 } },
          { name: "Ron Harper Jr.", min: 35, pts: 16, reb: 3, ast: 3, stl: 1, blk: 0, to: 5, tpm: 1, fgm: 7, fga: 20, ftm: 1, fta: 2, composite: -3.92, zScores: { pts: 1.21, reb: -0.091, ast: 0.568, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: -1.831, ftImpact: -0.782, to: -2.883 } },
          { name: "Baylor Scheierman", min: 19, pts: 7, reb: 4, ast: 5, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 11, ftm: 4, fta: 5, composite: -2.18, zScores: { pts: -0.22, reb: 0.271, ast: 1.594, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: -3.407, ftImpact: 0.293, to: -0.607 } },
          { name: "Jordan Walsh", min: 18, pts: 9, reb: 5, ast: 1, stl: 2, blk: 2, to: 0, tpm: 1, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 5.18, zScores: { pts: 0.098, reb: 0.633, ast: -0.457, stl: 1.562, blk: 2.508, tpm: 0.031, fgImpact: -0.108, ftImpact: 0, to: 0.91 } },
          { name: "Hugo Gonzalez", min: 20, pts: 21, reb: 4, ast: 3, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 10, ftm: 6, fta: 8, composite: 6.35, zScores: { pts: 2.004, reb: 0.271, ast: 0.568, stl: 0.381, blk: -0.519, tpm: 1.676, fgImpact: 1.189, ftImpact: -0.131, to: 0.91 } }
        ]
      },
      home: {
        abbr: "PHI", name: "Philadelphia 76ers", score: 120,
        players: [
          { name: "LeBron James", min: 25, pts: 8, reb: 8, ast: 7, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 4, fga: 9, ftm: 0, fta: 3, composite: -2.31, zScores: { pts: -0.061, reb: 1.719, ast: 2.619, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: -0.108, ftImpact: -3.421, to: -2.125 } },
          { name: "Joel Embiid", min: 29, pts: 27, reb: 8, ast: 5, stl: 1, blk: 1, to: 4, tpm: 2, fgm: 7, fga: 13, ftm: 11, fta: 13, composite: 8.91, zScores: { pts: 2.957, reb: 1.719, ast: 1.594, stl: 0.381, blk: 0.994, tpm: 0.853, fgImpact: 0.873, ftImpact: 1.661, to: -2.125 } },
          { name: "Kentavious Caldwell-Pope", min: 21, pts: 7, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 3, composite: -1.51, zScores: { pts: -0.22, reb: -0.453, ast: -0.97, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: -0.247, ftImpact: -0.424, to: 0.91 } },
          { name: "Jaylen Brown", min: 31, pts: 20, reb: 8, ast: 3, stl: 1, blk: 2, to: 2, tpm: 1, fgm: 8, fga: 14, ftm: 3, fta: 5, composite: 6.57, zScores: { pts: 1.845, reb: 1.719, ast: 0.568, stl: 0.381, blk: 2.508, tpm: 0.031, fgImpact: 1.328, ftImpact: -1.206, to: -0.607 } },
          { name: "Tyrese Maxey", min: 30, pts: 22, reb: 3, ast: 6, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 7, fga: 11, ftm: 7, fta: 7, composite: 6.1, zScores: { pts: 2.162, reb: -0.091, ast: 2.107, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: 1.645, ftImpact: 2.508, to: -2.125 } },
          { name: "Dean Wade", min: 13, pts: 0, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.25, zScores: { pts: -1.332, reb: -1.178, ast: 0.056, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: -0.773, ftImpact: 0, to: 0.91 } },
          { name: "Jabari Walker", min: 19, pts: 13, reb: 4, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 8, ftm: 5, fta: 5, composite: 3.27, zScores: { pts: 0.733, reb: 0.271, ast: -0.97, stl: 1.562, blk: -0.519, tpm: -0.791, fgImpact: 0.278, ftImpact: 1.792, to: 0.91 } },
          { name: "Dillon Jones", min: 10, pts: 4, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 1, composite: -3.89, zScores: { pts: -0.696, reb: -0.816, ast: -0.97, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: -0.247, ftImpact: -1.14, to: 0.91 } },
          { name: "Justin Edwards", min: 25, pts: 2, reb: 6, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -1.55, zScores: { pts: -1.014, reb: 0.995, ast: -0.457, stl: 1.562, blk: -0.519, tpm: -0.791, fgImpact: -1.476, ftImpact: 0, to: 0.151 } },
          { name: "Caleb Love", min: 7, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -6.61, zScores: { pts: -1.332, reb: -1.178, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -1.931, ftImpact: 0, to: 0.91 } },
          { name: "Jameer Nelson Jr.", min: 10, pts: 6, reb: 1, ast: 0, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: 0.74, zScores: { pts: -0.379, reb: -0.816, ast: -0.97, stl: 2.743, blk: -0.519, tpm: 0.031, fgImpact: 0.525, ftImpact: -0.782, to: 0.91 } },
          { name: "Labaron Philon Jr.", min: 27, pts: 11, reb: 1, ast: 5, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: -0.09, zScores: { pts: 0.415, reb: -0.816, ast: 1.594, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: -0.108, ftImpact: 0.717, to: -0.607 } },
          { name: "Rayan Rupert", min: 19, pts: 0, reb: 4, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -1.73, zScores: { pts: -1.332, reb: 0.271, ast: -0.97, stl: -0.8, blk: 2.508, tpm: -0.791, fgImpact: -0.773, ftImpact: 0, to: 0.151 } }
        ]
      }
    },
      {
      id: "401908946",
      line: "Toronto Raptors 125 @ Detroit Pistons 129 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TOR", name: "Toronto Raptors", score: 125,
        players: [
          { name: "Trayce Jackson-Davis", min: 29, pts: 23, reb: 3, ast: 0, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 4, fga: 5, ftm: 15, fta: 16, composite: 3.88, zScores: { pts: 2.321, reb: -0.091, ast: -0.97, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: 1.437, ftImpact: 4.235, to: -2.125 } },
          { name: "Allen Graves", min: 23, pts: 9, reb: 8, ast: 2, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 13, ftm: 1, fta: 4, composite: -2.87, zScores: { pts: 0.098, reb: 1.719, ast: 0.056, stl: 0.381, blk: 0.994, tpm: -0.791, fgImpact: -1.653, ftImpact: -3.063, to: -0.607 } },
          { name: "Jaden Bradley", min: 30, pts: 7, reb: 3, ast: 5, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 7, ftm: 3, fta: 4, composite: -2.86, zScores: { pts: -0.22, reb: -0.091, ast: 1.594, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: -1.02, ftImpact: -0.065, to: -2.125 } },
          { name: "Nimari Burnett", min: 24, pts: 17, reb: 5, ast: 1, stl: 2, blk: 2, to: 2, tpm: 3, fgm: 4, fga: 8, ftm: 6, fta: 6, composite: 9.11, zScores: { pts: 1.368, reb: 0.633, ast: -0.457, stl: 1.562, blk: 2.508, tpm: 1.676, fgImpact: 0.278, ftImpact: 2.15, to: -0.607 } },
          { name: "Alijah Martin", min: 22, pts: 15, reb: 1, ast: 0, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 10, ftm: 6, fta: 6, composite: 0.63, zScores: { pts: 1.051, reb: -0.816, ast: -0.97, stl: 1.562, blk: -0.519, tpm: 0.031, fgImpact: -0.495, ftImpact: 2.15, to: -1.366 } },
          { name: "Tyson Degenhart", min: 30, pts: 14, reb: 4, ast: 4, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 10, ftm: 2, fta: 2, composite: 2.99, zScores: { pts: 0.892, reb: 0.271, ast: 1.081, stl: -0.8, blk: -0.519, tpm: 0.853, fgImpact: 0.347, ftImpact: 0.717, to: 0.151 } },
          { name: "Jamarion Sharp", min: 14, pts: 3, reb: 5, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -0.27, zScores: { pts: -0.855, reb: 0.633, ast: -0.457, stl: 0.381, blk: 0.994, tpm: -0.791, fgImpact: 0.456, ftImpact: -0.782, to: 0.151 } },
          { name: "Tyreke Key", min: 30, pts: 13, reb: 1, ast: 3, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 11, ftm: 1, fta: 1, composite: 3.23, zScores: { pts: 0.733, reb: -0.816, ast: 0.568, stl: 0.381, blk: -0.519, tpm: 2.498, fgImpact: -0.881, ftImpact: 0.358, to: 0.91 } },
          { name: "Malachi Smith", min: 33, pts: 24, reb: 7, ast: 3, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 8, fga: 18, ftm: 4, fta: 5, composite: 6.23, zScores: { pts: 2.48, reb: 1.357, ast: 0.568, stl: 0.381, blk: -0.519, tpm: 2.498, fgImpact: -0.217, ftImpact: 0.293, to: -0.607 } },
          { name: "Jalen Celestine", min: 6, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.47, zScores: { pts: -1.332, reb: -0.091, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.386, ftImpact: 0, to: 0.91 } }
        ]
      },
      home: {
        abbr: "DET", name: "Detroit Pistons", score: 129,
        players: [
          { name: "Duncan Robinson", min: 20, pts: 9, reb: 4, ast: 3, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 2.07, zScores: { pts: 0.098, reb: 0.271, ast: 0.568, stl: 1.562, blk: -0.519, tpm: 0.031, fgImpact: 0.664, ftImpact: 0, to: -0.607 } },
          { name: "John Collins", min: 22, pts: 12, reb: 8, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 3, fta: 4, composite: 2.73, zScores: { pts: 0.574, reb: 1.719, ast: -0.97, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: 0.664, ftImpact: -0.065, to: 0.91 } },
          { name: "Jalen Duren", min: 20, pts: 14, reb: 3, ast: 1, stl: 2, blk: 1, to: 6, tpm: 0, fgm: 6, fga: 9, ftm: 2, fta: 4, composite: -1.52, zScores: { pts: 0.892, reb: -0.091, ast: -0.457, stl: 1.562, blk: 0.994, tpm: -0.791, fgImpact: 1.576, ftImpact: -1.564, to: -3.642 } },
          { name: "Cade Cunningham", min: 26, pts: 18, reb: 1, ast: 7, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 8, fga: 12, ftm: 0, fta: 0, composite: 5.54, zScores: { pts: 1.527, reb: -0.816, ast: 2.619, stl: 0.381, blk: -0.519, tpm: 0.853, fgImpact: 2.101, ftImpact: 0, to: -0.607 } },
          { name: "Ausar Thompson", min: 19, pts: 12, reb: 3, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 5, ftm: 2, fta: 3, composite: 2.64, zScores: { pts: 0.574, reb: -0.091, ast: 1.081, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: 2.279, ftImpact: -0.424, to: 0.151 } },
          { name: "Taurean Prince", min: 9, pts: 3, reb: 0, ast: 0, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.41, zScores: { pts: -0.855, reb: -1.178, ast: -0.97, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: 0.069, ftImpact: 0, to: -1.366 } },
          { name: "Paul Reed", min: 16, pts: 4, reb: 2, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 2, composite: -4.19, zScores: { pts: -0.696, reb: -0.453, ast: -0.457, stl: -0.8, blk: 0.994, tpm: -0.791, fgImpact: 0.139, ftImpact: -2.281, to: 0.151 } },
          { name: "Tolu Smith", min: 9, pts: 3, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 3, fta: 4, composite: -2.52, zScores: { pts: -0.855, reb: -0.453, ast: 0.056, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0, ftImpact: -0.065, to: 0.91 } },
          { name: "Ronald Holland II", min: 17, pts: 7, reb: 8, ast: 2, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 4, composite: 0.88, zScores: { pts: -0.22, reb: 1.719, ast: 0.056, stl: -0.8, blk: 0.994, tpm: 0.031, fgImpact: -0.247, ftImpact: -1.564, to: 0.91 } },
          { name: "John Ukomadu", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.07, zScores: { pts: -1.332, reb: -1.178, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.386, ftImpact: 0, to: 0.91 } },
          { name: "Isaac Jones", min: 7, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 3, composite: -2.88, zScores: { pts: -0.379, reb: -0.816, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.912, ftImpact: -0.424, to: 0.91 } },
          { name: "Javonte Green", min: 9, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.34, zScores: { pts: -0.855, reb: -0.816, ast: -0.457, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: -0.317, ftImpact: 0, to: -0.607 } },
          { name: "Kevin Huerter", min: 7, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.332, reb: -1.178, ast: -0.97, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: 0, ftImpact: 0, to: 0.151 } },
          { name: "Isaiah Joe", min: 11, pts: 8, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -1.2, zScores: { pts: -0.061, reb: -0.453, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.853, fgImpact: 0.595, ftImpact: 0, to: 0.151 } },
          { name: "Elijah Harkless", min: 7, pts: 7, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: 0.58, zScores: { pts: -0.22, reb: -1.178, ast: -0.457, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: 0.912, ftImpact: 0.717, to: 0.91 } },
          { name: "Chaz Lanier", min: 12, pts: 6, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.2, zScores: { pts: -0.379, reb: -1.178, ast: -0.457, stl: -0.8, blk: -0.519, tpm: 0.853, fgImpact: -0.634, ftImpact: 0, to: 0.91 } },
          { name: "Daniss Jenkins", min: 17, pts: 3, reb: 1, ast: 5, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -0.8, zScores: { pts: -0.855, reb: -0.816, ast: 1.594, stl: -0.8, blk: 0.994, tpm: 0.031, fgImpact: -1.862, ftImpact: 0, to: 0.91 } },
          { name: "Ebuka Okorie", min: 9, pts: 14, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 4, ftm: 5, fta: 6, composite: 2.53, zScores: { pts: 0.892, reb: -1.178, ast: -0.457, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: 1.823, ftImpact: 0.651, to: 0.91 } }
        ]
      }
    },
      {
      id: "401914126",
      line: "Milwaukee Bucks 128 @ Indiana Pacers 127 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "MIL", name: "Milwaukee Bucks", score: 128,
        players: [
          { name: "Kyle Kuzma", min: 18, pts: 11, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 3.7, zScores: { pts: 0.415, reb: 0.633, ast: -0.457, stl: 0.381, blk: -0.519, tpm: 1.676, fgImpact: 0.664, ftImpact: 0, to: 0.91 } },
          { name: "Jaime Jaquez Jr.", min: 22, pts: 9, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: -2.4, zScores: { pts: 0.098, reb: -0.091, ast: 0.056, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.278, ftImpact: -0.782, to: 0.151 } },
          { name: "Myles Turner", min: 23, pts: 7, reb: 13, ast: 2, stl: 1, blk: 3, to: 1, tpm: 1, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 7, zScores: { pts: -0.22, reb: 3.53, ast: 0.056, stl: 0.381, blk: 4.021, tpm: 0.031, fgImpact: -0.95, ftImpact: 0, to: 0.151 } },
          { name: "Tyler Herro", min: 24, pts: 25, reb: 3, ast: 3, stl: 1, blk: 0, to: 3, tpm: 5, fgm: 10, fga: 16, ftm: 0, fta: 0, composite: 7.17, zScores: { pts: 2.639, reb: -0.091, ast: 0.568, stl: 0.381, blk: -0.519, tpm: 3.32, fgImpact: 2.24, ftImpact: 0, to: -1.366 } },
          { name: "Ryan Rollins", min: 16, pts: 8, reb: 1, ast: 5, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -1.35, zScores: { pts: -0.061, reb: -0.816, ast: 1.594, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.108, ftImpact: 0, to: 0.151 } },
          { name: "Ousmane Dieng", min: 24, pts: 4, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 9, ftm: 0, fta: 0, composite: -4.24, zScores: { pts: -0.696, reb: -0.091, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -1.792, ftImpact: 0, to: 0.91 } },
          { name: "Bogoljub Markovic", min: 15, pts: 7, reb: 8, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 11, ftm: 0, fta: 2, composite: -4.61, zScores: { pts: -0.22, reb: 1.719, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: -1.723, ftImpact: -2.281, to: 0.151 } },
          { name: "Kel'el Ware", min: 25, pts: 13, reb: 3, ast: 1, stl: 2, blk: 1, to: 1, tpm: 1, fgm: 6, fga: 12, ftm: 0, fta: 2, composite: 1.06, zScores: { pts: 0.733, reb: -0.091, ast: -0.457, stl: 1.562, blk: 0.994, tpm: 0.031, fgImpact: 0.417, ftImpact: -2.281, to: 0.151 } },
          { name: "Cormac Ryan", min: 10, pts: 4, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -2.19, zScores: { pts: -0.696, reb: -0.091, ast: 0.056, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: 0.456, ftImpact: -0.782, to: 0.151 } },
          { name: "Kevin Porter Jr.", min: 15, pts: 11, reb: 2, ast: 3, stl: 2, blk: 0, to: 4, tpm: 1, fgm: 4, fga: 8, ftm: 2, fta: 3, composite: -0.67, zScores: { pts: 0.415, reb: -0.453, ast: 0.568, stl: 1.562, blk: -0.519, tpm: 0.031, fgImpact: 0.278, ftImpact: -0.424, to: -2.125 } },
          { name: "AJ Green", min: 20, pts: 9, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.54, zScores: { pts: 0.098, reb: -0.453, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 1.676, fgImpact: 0.595, ftImpact: 0, to: 0.91 } },
          { name: "Kam Jones", min: 13, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.84, zScores: { pts: -0.855, reb: -1.178, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: -0.703, ftImpact: 0, to: 0.151 } },
          { name: "Brayden Burries", min: 26, pts: 14, reb: 7, ast: 3, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 6, fga: 11, ftm: 2, fta: 3, composite: 3.6, zScores: { pts: 0.892, reb: 1.357, ast: 0.568, stl: 1.562, blk: -0.519, tpm: -0.791, fgImpact: 0.803, ftImpact: -0.424, to: 0.151 } },
          { name: "Kasparas Jakucionis", min: 14, pts: 3, reb: 4, ast: 6, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -1.16, zScores: { pts: -0.855, reb: 0.271, ast: 2.107, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.703, ftImpact: -0.782, to: 0.91 } }
        ]
      },
      home: {
        abbr: "IND", name: "Indiana Pacers", score: 127,
        players: [
          { name: "Pascal Siakam", min: 21, pts: 24, reb: 4, ast: 3, stl: 1, blk: 0, to: 3, tpm: 5, fgm: 8, fga: 10, ftm: 3, fta: 3, composite: 9.08, zScores: { pts: 2.48, reb: 0.271, ast: 0.568, stl: 0.381, blk: -0.519, tpm: 3.32, fgImpact: 2.874, ftImpact: 1.075, to: -1.366 } },
          { name: "Ivica Zubac", min: 20, pts: 11, reb: 11, ast: 2, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 8, ftm: 1, fta: 2, composite: 4.35, zScores: { pts: 0.415, reb: 2.806, ast: 0.056, stl: 0.381, blk: 0.994, tpm: -0.791, fgImpact: 1.12, ftImpact: -0.782, to: 0.151 } },
          { name: "Kelly Oubre Jr.", min: 16, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -4.33, zScores: { pts: -0.696, reb: -0.453, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.247, ftImpact: 0, to: 0.151 } },
          { name: "Andrew Nembhard", min: 20, pts: 11, reb: 0, ast: 7, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 2.6, zScores: { pts: 0.415, reb: -1.178, ast: 2.619, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: 1.12, ftImpact: 0, to: 0.91 } },
          { name: "Tyrese Haliburton", min: 20, pts: 17, reb: 3, ast: 6, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 7, fga: 14, ftm: 0, fta: 1, composite: 4.42, zScores: { pts: 1.368, reb: -0.091, ast: 2.107, stl: 0.381, blk: -0.519, tpm: 1.676, fgImpact: 0.486, ftImpact: -1.14, to: 0.151 } },
          { name: "Larry Nance Jr.", min: 8, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.16, zScores: { pts: -0.696, reb: -0.816, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.525, ftImpact: 0, to: 0.91 } },
          { name: "Obi Toppin", min: 18, pts: 12, reb: 7, ast: 2, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 5.92, zScores: { pts: 0.574, reb: 1.357, ast: 0.056, stl: 0.381, blk: -0.519, tpm: 2.498, fgImpact: 0.664, ftImpact: 0, to: 0.91 } },
          { name: "Jalen Slawson", min: 19, pts: 2, reb: 3, ast: 1, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -0.44, zScores: { pts: -1.014, reb: -0.091, ast: -0.457, stl: -0.8, blk: 4.021, tpm: -0.791, fgImpact: -0.703, ftImpact: 0, to: -0.607 } },
          { name: "Rienk Mast", min: 15, pts: 3, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.35, zScores: { pts: -0.855, reb: 0.271, ast: -0.457, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: 0.069, ftImpact: 0, to: 0.91 } },
          { name: "Jay Huff", min: 14, pts: 4, reb: 3, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 7, ftm: 2, fta: 2, composite: -1.32, zScores: { pts: -0.696, reb: -0.091, ast: -0.457, stl: -0.8, blk: 2.508, tpm: -0.791, fgImpact: -1.862, ftImpact: 0.717, to: 0.151 } },
          { name: "Keba Keita", min: 13, pts: 10, reb: 6, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 5, ftm: 0, fta: 0, composite: 1.36, zScores: { pts: 0.257, reb: 0.995, ast: -0.97, stl: -0.8, blk: 0.994, tpm: -0.791, fgImpact: 2.279, ftImpact: 0, to: -0.607 } },
          { name: "Kobe Brown", min: 28, pts: 14, reb: 5, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 14, ftm: 5, fta: 7, composite: -2.33, zScores: { pts: 0.892, reb: 0.633, ast: 0.568, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: -2.04, ftImpact: -0.489, to: -0.607 } },
          { name: "Ben Sheppard", min: 20, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -6.5, zScores: { pts: -1.332, reb: -0.453, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -1.545, ftImpact: 0, to: -0.607 } },
          { name: "Quenton Jackson", min: 14, pts: 9, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -0.35, zScores: { pts: 0.098, reb: -0.453, ast: 0.056, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: 0.664, ftImpact: 0, to: -0.607 } },
          { name: "Braden Smith", min: 19, pts: 2, reb: 0, ast: 7, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.33, zScores: { pts: -1.014, reb: -1.178, ast: 2.619, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: -0.703, ftImpact: 0, to: -2.125 } }
        ]
      }
    },
      {
      id: "401898408",
      line: "Atlanta Hawks 135 @ Dallas Mavericks 111 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ATL", name: "Atlanta Hawks", score: 135,
        players: [
          { name: "Onyeka Okongwu", min: 20, pts: 6, reb: 6, ast: 4, stl: 0, blk: 1, to: 4, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -0.43, zScores: { pts: -0.379, reb: 0.995, ast: 1.081, stl: -0.8, blk: 0.994, tpm: -0.791, fgImpact: 0.595, ftImpact: 0, to: -2.125 } },
          { name: "Jalen Johnson", min: 25, pts: 20, reb: 14, ast: 3, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 5, fga: 10, ftm: 9, fta: 11, composite: 8.4, zScores: { pts: 1.845, reb: 3.892, ast: 0.568, stl: 0.381, blk: 0.994, tpm: 0.031, fgImpact: 0.347, ftImpact: 0.944, to: -0.607 } },
          { name: "CJ McCollum", min: 22, pts: 7, reb: 2, ast: 4, stl: 0, blk: 2, to: 0, tpm: 2, fgm: 2, fga: 11, ftm: 1, fta: 2, composite: 0.53, zScores: { pts: -0.22, reb: -0.453, ast: 1.081, stl: -0.8, blk: 2.508, tpm: 0.853, fgImpact: -2.565, ftImpact: -0.782, to: 0.91 } },
          { name: "Nickeil Alexander-Walker", min: 27, pts: 25, reb: 3, ast: 5, stl: 0, blk: 0, to: 2, tpm: 6, fgm: 7, fga: 12, ftm: 5, fta: 9, composite: 4.85, zScores: { pts: 2.639, reb: -0.091, ast: 1.594, stl: -0.8, blk: -0.519, tpm: 4.142, fgImpact: 1.259, ftImpact: -2.77, to: -0.607 } },
          { name: "Dyson Daniels", min: 25, pts: 8, reb: 4, ast: 3, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 2, fta: 4, composite: 1.71, zScores: { pts: -0.061, reb: 0.271, ast: 0.568, stl: 1.562, blk: 0.994, tpm: -0.791, fgImpact: -0.178, ftImpact: -1.564, to: 0.91 } },
          { name: "Corey Kispert", min: 8, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.11, zScores: { pts: -0.855, reb: -0.816, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: -1.089, ftImpact: 0, to: 0.91 } },
          { name: "Asa Newell", min: 8, pts: 7, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 3, fta: 4, composite: -1.93, zScores: { pts: -0.22, reb: -1.178, ast: -0.97, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: 0.525, ftImpact: -0.065, to: 0.91 } },
          { name: "Zuby Ejiofor", min: 6, pts: 4, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -1.61, zScores: { pts: -0.696, reb: -0.453, ast: -0.457, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: -0.703, ftImpact: 0.717, to: 0.91 } },
          { name: "Jock Landale", min: 21, pts: 16, reb: 6, ast: 5, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 4, fga: 5, ftm: 5, fta: 5, composite: 9.05, zScores: { pts: 1.21, reb: 0.995, ast: 1.594, stl: -0.8, blk: 0.994, tpm: 1.676, fgImpact: 1.437, ftImpact: 1.792, to: 0.151 } },
          { name: "Luguentz Dort", min: 23, pts: 8, reb: 4, ast: 2, stl: 3, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 4.07, zScores: { pts: -0.061, reb: 0.271, ast: 0.056, stl: 2.743, blk: -0.519, tpm: 0.853, fgImpact: -0.178, ftImpact: 0, to: 0.91 } },
          { name: "Aaron Wiggins", min: 22, pts: 19, reb: 7, ast: 2, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 6, fga: 13, ftm: 3, fta: 4, composite: 3.64, zScores: { pts: 1.686, reb: 1.357, ast: 0.056, stl: -0.8, blk: -0.519, tpm: 2.498, fgImpact: 0.031, ftImpact: -0.065, to: -0.607 } },
          { name: "RayJ Dennis", min: 6, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.43, zScores: { pts: -1.014, reb: -0.453, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.456, ftImpact: 0, to: 0.151 } },
          { name: "Keshon Gilbert", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.44, zScores: { pts: -1.332, reb: -1.178, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0, ftImpact: 0, to: 0.151 } },
          { name: "Kingston Flemings", min: 21, pts: 10, reb: 4, ast: 6, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 6, ftm: 4, fta: 4, composite: 5.06, zScores: { pts: 0.257, reb: 0.271, ast: 2.107, stl: 0.381, blk: -0.519, tpm: 0.853, fgImpact: -0.634, ftImpact: 1.433, to: 0.91 } }
        ]
      },
      home: {
        abbr: "DAL", name: "Dallas Mavericks", score: 111,
        players: [
          { name: "Daniel Gafford", min: 17, pts: 6, reb: 2, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 3, composite: -1.63, zScores: { pts: -0.379, reb: -0.453, ast: -0.457, stl: -0.8, blk: 0.994, tpm: -0.791, fgImpact: 0.525, ftImpact: -0.424, to: 0.151 } },
          { name: "P.J. Washington", min: 27, pts: 8, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 13, ftm: 0, fta: 0, composite: -1.57, zScores: { pts: -0.061, reb: 0.995, ast: -0.457, stl: -0.8, blk: -0.519, tpm: 0.853, fgImpact: -2.495, ftImpact: 0, to: 0.91 } },
          { name: "Cooper Flagg", min: 30, pts: 26, reb: 12, ast: 4, stl: 2, blk: 1, to: 2, tpm: 2, fgm: 8, fga: 20, ftm: 8, fta: 9, composite: 10.59, zScores: { pts: 2.798, reb: 3.168, ast: 1.081, stl: 1.562, blk: 0.994, tpm: 0.853, fgImpact: -0.989, ftImpact: 1.726, to: -0.607 } },
          { name: "Zaccharie Risacher", min: 27, pts: 18, reb: 5, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 8, fga: 12, ftm: 2, fta: 3, composite: 2.2, zScores: { pts: 1.527, reb: 0.633, ast: 1.081, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 2.101, ftImpact: -0.424, to: -0.607 } },
          { name: "Kyrie Irving", min: 25, pts: 18, reb: 2, ast: 5, stl: 2, blk: 0, to: 0, tpm: 5, fgm: 6, fga: 12, ftm: 1, fta: 4, composite: 5.29, zScores: { pts: 1.527, reb: -0.453, ast: 1.594, stl: 1.562, blk: -0.519, tpm: 3.32, fgImpact: 0.417, ftImpact: -3.063, to: 0.91 } },
          { name: "Dwight Powell", min: 8, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.17, zScores: { pts: -1.332, reb: -1.178, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0, ftImpact: 0, to: 0.91 } },
          { name: "Caleb Martin", min: 17, pts: 4, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.34, zScores: { pts: -0.696, reb: -0.816, ast: 0.056, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: 0.139, ftImpact: 0, to: 0.91 } },
          { name: "Naji Marshall", min: 20, pts: 6, reb: 1, ast: 5, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 7, ftm: 2, fta: 4, composite: -4.48, zScores: { pts: -0.379, reb: -0.816, ast: 1.594, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: -1.02, ftImpact: -1.564, to: -1.366 } },
          { name: "Morez Johnson Jr.", min: 14, pts: 4, reb: 7, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.73, zScores: { pts: -0.696, reb: 1.357, ast: 0.056, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.247, ftImpact: 0, to: 0.91 } },
          { name: "Tobi Lawal", min: 9, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.72, zScores: { pts: -1.332, reb: -0.816, ast: -0.97, stl: -0.8, blk: 0.994, tpm: -0.791, fgImpact: -1.159, ftImpact: 0, to: 0.151 } },
          { name: "Sergio de Larrea", min: 25, pts: 8, reb: 1, ast: 4, stl: 0, blk: 2, to: 2, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 2.37, zScores: { pts: -0.061, reb: -0.816, ast: 1.081, stl: -0.8, blk: 2.508, tpm: 0.853, fgImpact: 0.208, ftImpact: 0, to: -0.607 } },
          { name: "Moussa Cisse", min: 4, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -3.3, zScores: { pts: -0.855, reb: -0.453, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.069, ftImpact: 0.358, to: 0.151 } },
          { name: "Seth Lundy", min: 4, pts: 3, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.89, zScores: { pts: -0.855, reb: -1.178, ast: -0.97, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: 0.069, ftImpact: 0, to: 0.151 } },
          { name: "Marcus Sasser", min: 12, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -4.08, zScores: { pts: -0.537, reb: -0.816, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: 0.139, ftImpact: 0, to: -0.607 } },
          { name: "John Poulakidas", min: 2, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -3.28, zScores: { pts: -1.014, reb: -0.816, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0, ftImpact: 0.717, to: 0.91 } }
        ]
      }
    },
      {
      id: "401898843",
      line: "Sacramento Kings 97 @ San Antonio Spurs 126 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SAC", name: "Sacramento Kings", score: 97,
        players: [
          { name: "Domantas Sabonis", min: 30, pts: 14, reb: 10, ast: 1, stl: 0, blk: 0, to: 5, tpm: 1, fgm: 4, fga: 9, ftm: 5, fta: 10, composite: -5.31, zScores: { pts: 0.892, reb: 2.444, ast: -0.457, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: -0.108, ftImpact: -3.91, to: -2.883 } },
          { name: "Keegan Murray", min: 17, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.11, zScores: { pts: -0.855, reb: -0.816, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: -1.089, ftImpact: 0, to: 0.91 } },
          { name: "Zach LaVine", min: 30, pts: 20, reb: 3, ast: 3, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 12, ftm: 7, fta: 7, composite: 6.89, zScores: { pts: 1.845, reb: -0.091, ast: 0.568, stl: 2.743, blk: -0.519, tpm: 0.031, fgImpact: 0.417, ftImpact: 2.508, to: -0.607 } },
          { name: "Ben Simmons", min: 26, pts: 14, reb: 8, ast: 7, stl: 1, blk: 0, to: 5, tpm: 0, fgm: 5, fga: 9, ftm: 4, fta: 4, composite: 3.59, zScores: { pts: 0.892, reb: 1.719, ast: 2.619, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: 0.734, ftImpact: 1.433, to: -2.883 } },
          { name: "Darius Acuff Jr.", min: 19, pts: 13, reb: 1, ast: 2, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 5, fga: 12, ftm: 2, fta: 4, composite: -2.4, zScores: { pts: 0.733, reb: -0.816, ast: 0.056, stl: -0.8, blk: 0.994, tpm: 0.031, fgImpact: -0.425, ftImpact: -1.564, to: -0.607 } },
          { name: "De'Andre Hunter", min: 20, pts: 2, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.3, zScores: { pts: -1.014, reb: -0.453, ast: -0.97, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: -1.089, ftImpact: 0, to: 0.151 } },
          { name: "Precious Achiuwa", min: 22, pts: 13, reb: 4, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 7, ftm: 1, fta: 3, composite: -0.05, zScores: { pts: 0.733, reb: 0.271, ast: 0.056, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: 2.348, ftImpact: -1.922, to: -0.607 } },
          { name: "Alex Karaban", min: 5, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.5, zScores: { pts: -1.332, reb: -1.178, ast: -0.97, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: 0, ftImpact: 0, to: 0.91 } },
          { name: "Jonathan Mogbo", min: 12, pts: 4, reb: 4, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.28, zScores: { pts: -0.696, reb: 0.271, ast: -0.97, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: 0.139, ftImpact: 0, to: 0.91 } },
          { name: "Daeqwon Plowden", min: 4, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -2.66, zScores: { pts: -0.537, reb: -1.178, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: -0.317, ftImpact: 0.717, to: 0.91 } },
          { name: "Tristen Newton", min: 12, pts: 1, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -4.38, zScores: { pts: -1.173, reb: -1.178, ast: -0.457, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: -0.773, ftImpact: -0.782, to: 0.91 } },
          { name: "Nique Clifford", min: 18, pts: 5, reb: 4, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.59, zScores: { pts: -0.537, reb: 0.271, ast: -0.457, stl: -0.8, blk: 0.994, tpm: 0.031, fgImpact: -0.247, ftImpact: 0, to: 0.151 } },
          { name: "Emanuel Sharp", min: 25, pts: 3, reb: 1, ast: 2, stl: 4, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 9, ftm: 1, fta: 2, composite: -3.03, zScores: { pts: -0.855, reb: -0.816, ast: 0.056, stl: 3.924, blk: -0.519, tpm: -0.791, fgImpact: -2.634, ftImpact: -0.782, to: -0.607 } }
        ]
      },
      home: {
        abbr: "SA", name: "San Antonio Spurs", score: 126,
        players: [
          { name: "Victor Wembanyama", min: 17, pts: 14, reb: 8, ast: 2, stl: 2, blk: 2, to: 0, tpm: 0, fgm: 5, fga: 9, ftm: 4, fta: 4, composite: 9.02, zScores: { pts: 0.892, reb: 1.719, ast: 0.056, stl: 1.562, blk: 2.508, tpm: -0.791, fgImpact: 0.734, ftImpact: 1.433, to: 0.91 } },
          { name: "De'Aaron Fox", min: 22, pts: 16, reb: 6, ast: 3, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 9, ftm: 4, fta: 4, composite: 3.87, zScores: { pts: 1.21, reb: 0.995, ast: 0.568, stl: -0.8, blk: -0.519, tpm: 0.853, fgImpact: 0.734, ftImpact: 1.433, to: -0.607 } },
          { name: "Devin Vassell", min: 22, pts: 12, reb: 6, ast: 4, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 5.38, zScores: { pts: 0.574, reb: 0.995, ast: 1.081, stl: 0.381, blk: 0.994, tpm: 0.853, fgImpact: 0.347, ftImpact: 0, to: 0.151 } },
          { name: "Stephon Castle", min: 23, pts: 13, reb: 5, ast: 5, stl: 2, blk: 0, to: 4, tpm: 1, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 3.48, zScores: { pts: 0.733, reb: 0.633, ast: 1.594, stl: 1.562, blk: -0.519, tpm: 0.031, fgImpact: 1.576, ftImpact: 0, to: -2.125 } },
          { name: "Dylan Harper", min: 21, pts: 19, reb: 0, ast: 4, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 7, fga: 12, ftm: 2, fta: 4, composite: 2.21, zScores: { pts: 1.686, reb: -1.178, ast: 1.081, stl: 0.381, blk: -0.519, tpm: 1.676, fgImpact: 1.259, ftImpact: -1.564, to: -0.607 } },
          { name: "Harrison Barnes", min: 13, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.34, zScores: { pts: -0.855, reb: -0.816, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: -0.317, ftImpact: 0, to: 0.91 } },
          { name: "Keldon Johnson", min: 20, pts: 15, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 9, ftm: 6, fta: 9, composite: -0.02, zScores: { pts: 1.051, reb: 0.633, ast: 0.056, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: -0.108, ftImpact: -1.271, to: 0.91 } },
          { name: "Julian Champagnie", min: 17, pts: 9, reb: 4, ast: 2, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 3, fga: 11, ftm: 0, fta: 1, composite: -0.42, zScores: { pts: 0.098, reb: 0.271, ast: 0.056, stl: -0.8, blk: 0.994, tpm: 1.676, fgImpact: -1.723, ftImpact: -1.14, to: 0.151 } },
          { name: "David Jones Garcia", min: 10, pts: 2, reb: 1, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -5.8, zScores: { pts: -1.014, reb: -0.816, ast: -0.97, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: -0.703, ftImpact: 0, to: -1.366 } },
          { name: "Carter Bryant", min: 17, pts: 5, reb: 8, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -1.94, zScores: { pts: -0.537, reb: 1.719, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: -1.02, ftImpact: 0, to: 0.151 } },
          { name: "Maliq Brown", min: 10, pts: 4, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.97, zScores: { pts: -0.696, reb: 0.271, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.139, ftImpact: 0, to: -0.607 } },
          { name: "Luke Kornet", min: 13, pts: 1, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -3.48, zScores: { pts: -1.173, reb: -0.091, ast: -0.97, stl: -0.8, blk: 0.994, tpm: -0.791, fgImpact: -0.773, ftImpact: -0.782, to: 0.91 } },
          { name: "Tarris Reed Jr.", min: 14, pts: 2, reb: 8, ast: 2, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -1.2, zScores: { pts: -1.014, reb: 1.719, ast: 0.056, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: -0.386, ftImpact: 0.717, to: -1.366 } },
          { name: "Jordan McLaughlin", min: 10, pts: 0, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.7, zScores: { pts: -1.332, reb: -0.453, ast: 0.056, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.773, ftImpact: 0, to: 0.91 } },
          { name: "Ja'Kobi Gillespie", min: 10, pts: 11, reb: 0, ast: 1, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 2.49, zScores: { pts: 0.415, reb: -1.178, ast: -0.457, stl: -0.8, blk: 0.994, tpm: 1.676, fgImpact: 0.208, ftImpact: 0.717, to: 0.91 } }
        ]
      }
    },
      {
      id: "401901822",
      line: "Charlotte Hornets 98 @ Memphis Grizzlies 117 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHA", name: "Charlotte Hornets", score: 98,
        players: [
          { name: "Brandon Miller", min: 25, pts: 15, reb: 0, ast: 2, stl: 1, blk: 2, to: 2, tpm: 2, fgm: 4, fga: 12, ftm: 5, fta: 6, composite: 2.45, zScores: { pts: 1.051, reb: -1.178, ast: 0.056, stl: 0.381, blk: 2.508, tpm: 0.853, fgImpact: -1.267, ftImpact: 0.651, to: -0.607 } },
          { name: "Naz Reid", min: 24, pts: 12, reb: 2, ast: 1, stl: 1, blk: 0, to: 5, tpm: 2, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: -2.16, zScores: { pts: 0.574, reb: -0.453, ast: -0.457, stl: 0.381, blk: -0.519, tpm: 0.853, fgImpact: 0.347, ftImpact: 0, to: -2.883 } },
          { name: "Ryan Kalkbrenner", min: 16, pts: 2, reb: 3, ast: 0, stl: 0, blk: 3, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.33, zScores: { pts: -1.014, reb: -0.091, ast: -0.97, stl: -0.8, blk: 4.021, tpm: -0.791, fgImpact: -0.317, ftImpact: 0, to: -1.366 } },
          { name: "Dennis Schroder", min: 22, pts: 6, reb: 5, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -1.69, zScores: { pts: -0.379, reb: 0.633, ast: 0.568, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.208, ftImpact: 0, to: -0.607 } },
          { name: "Sion James", min: 23, pts: 0, reb: 4, ast: 4, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -2.27, zScores: { pts: -1.332, reb: 0.271, ast: 1.081, stl: 1.562, blk: -0.519, tpm: -0.791, fgImpact: -1.931, ftImpact: 0, to: -0.607 } },
          { name: "Royce O'Neale", min: 18, pts: 6, reb: 0, ast: 0, stl: 0, blk: 2, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.33, zScores: { pts: -0.379, reb: -1.178, ast: -0.97, stl: -0.8, blk: 2.508, tpm: 0.853, fgImpact: 0.139, ftImpact: 0, to: 0.151 } },
          { name: "Tidjane Salaun", min: 19, pts: 9, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: -1.45, zScores: { pts: 0.098, reb: 0.271, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: 1.05, ftImpact: 0, to: -0.607 } },
          { name: "Hannes Steinbach", min: 28, pts: 19, reb: 10, ast: 0, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 7, fga: 9, ftm: 5, fta: 5, composite: 8.19, zScores: { pts: 1.686, reb: 2.444, ast: -0.97, stl: 2.743, blk: -0.519, tpm: -0.791, fgImpact: 2.418, ftImpact: 1.792, to: -0.607 } },
          { name: "PJ Hall", min: 10, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -0.855, reb: -0.816, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: 0.069, ftImpact: 0, to: 0.151 } },
          { name: "Jarkel Joiner", min: 12, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 2, fta: 2, composite: -4.32, zScores: { pts: -1.014, reb: -0.816, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -1.545, ftImpact: 0.717, to: 0.91 } },
          { name: "Christian Anderson", min: 22, pts: 15, reb: 2, ast: 6, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 3, fga: 7, ftm: 8, fta: 9, composite: 2.02, zScores: { pts: 1.051, reb: -0.453, ast: 2.107, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: -0.178, ftImpact: 1.726, to: -2.125 } },
          { name: "Liam McNeeley", min: 16, pts: 5, reb: 2, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 5, fta: 6, composite: -1.18, zScores: { pts: -0.537, reb: -0.453, ast: -0.457, stl: 1.562, blk: -0.519, tpm: -0.791, fgImpact: -1.545, ftImpact: 0.651, to: 0.91 } },
          { name: "Michael Ajayi", min: 6, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -3.96, zScores: { pts: -0.696, reb: -0.816, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: -0.317, ftImpact: -0.782, to: 0.91 } }
        ]
      },
      home: {
        abbr: "MEM", name: "Memphis Grizzlies", score: 117,
        players: [
          { name: "Kris Murray", min: 17, pts: 0, reb: 2, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.26, zScores: { pts: -1.332, reb: -0.453, ast: -0.97, stl: 0.381, blk: 0.994, tpm: -0.791, fgImpact: 0, ftImpact: 0, to: 0.91 } },
          { name: "Cedric Coward", min: 26, pts: 13, reb: 5, ast: 4, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 8, ftm: 2, fta: 2, composite: 6.27, zScores: { pts: 0.733, reb: 0.633, ast: 1.081, stl: 1.562, blk: -0.519, tpm: 0.031, fgImpact: 1.12, ftImpact: 0.717, to: 0.91 } },
          { name: "Cameron Boozer", min: 29, pts: 19, reb: 7, ast: 3, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 13, ftm: 9, fta: 10, composite: 2.21, zScores: { pts: 1.686, reb: 1.357, ast: 0.568, stl: -0.8, blk: -0.519, tpm: 0.853, fgImpact: -1.653, ftImpact: 2.085, to: -1.366 } },
          { name: "Zach Edey", min: 21, pts: 10, reb: 6, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 4, fta: 4, composite: 1.62, zScores: { pts: 0.257, reb: 0.995, ast: -0.457, stl: -0.8, blk: 0.994, tpm: -0.791, fgImpact: 0.595, ftImpact: 1.433, to: -0.607 } },
          { name: "Ty Jerome", min: 22, pts: 17, reb: 4, ast: 4, stl: 3, blk: 0, to: 5, tpm: 3, fgm: 6, fga: 13, ftm: 2, fta: 2, composite: 4.48, zScores: { pts: 1.368, reb: 0.271, ast: 1.081, stl: 2.743, blk: -0.519, tpm: 1.676, fgImpact: 0.031, ftImpact: 0.717, to: -2.883 } },
          { name: "Olivier-Maxence Prosper", min: 16, pts: 4, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -3.02, zScores: { pts: -0.696, reb: -0.816, ast: -0.457, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: -0.317, ftImpact: -0.782, to: 0.151 } },
          { name: "Taylor Hendricks", min: 8, pts: 5, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 1, composite: -1.04, zScores: { pts: -0.537, reb: 0.271, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.525, ftImpact: 0.358, to: 0.91 } },
          { name: "Jaylen Wells", min: 22, pts: 5, reb: 1, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -2.9, zScores: { pts: -0.537, reb: -0.816, ast: -0.457, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: -1.089, ftImpact: 0.717, to: -0.607 } },
          { name: "Karim Lopez", min: 7, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -5.05, zScores: { pts: -1.014, reb: -1.178, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.069, ftImpact: 0, to: 0.151 } },
          { name: "Quinten Post", min: 19, pts: 11, reb: 6, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 10, ftm: 2, fta: 2, composite: 2.25, zScores: { pts: 0.415, reb: 0.995, ast: 0.568, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: -0.495, ftImpact: 0.717, to: 0.151 } },
          { name: "Scotty Pippen Jr.", min: 16, pts: 7, reb: 2, ast: 2, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: 0.73, zScores: { pts: -0.22, reb: -0.453, ast: 0.056, stl: 2.743, blk: -0.519, tpm: 0.031, fgImpact: -1.02, ftImpact: 0.717, to: -0.607 } },
          { name: "Cam Spencer", min: 19, pts: 11, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 2.61, zScores: { pts: 0.415, reb: -0.091, ast: -0.457, stl: 0.381, blk: -0.519, tpm: 1.676, fgImpact: 1.05, ftImpact: 0, to: 0.151 } },
          { name: "Jahmai Mashack", min: 5, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.332, reb: -1.178, ast: -0.97, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: 0, ftImpact: 0, to: 0.151 } },
          { name: "Javon Small", min: 7, pts: 9, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 3, ftm: 2, fta: 2, composite: 0.53, zScores: { pts: 0.098, reb: -0.816, ast: -0.457, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: 1.367, ftImpact: 0.717, to: 0.91 } },
          { name: "Walter Clayton Jr.", min: 7, pts: 4, reb: 0, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -1.21, zScores: { pts: -0.696, reb: -1.178, ast: 1.081, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.069, ftImpact: 0.717, to: 0.91 } }
        ]
      }
    },
      {
      id: "401906509",
      line: "Washington Wizards 106 @ New Orleans Pelicans 107 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WSH", name: "Washington Wizards", score: 106,
        players: [
          { name: "Anthony Davis", min: 27, pts: 14, reb: 11, ast: 1, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 6, fga: 14, ftm: 2, fta: 4, composite: 2.81, zScores: { pts: 0.892, reb: 2.806, ast: -0.457, stl: 0.381, blk: 2.508, tpm: -0.791, fgImpact: -0.356, ftImpact: -1.564, to: -0.607 } },
          { name: "AJ Dybantsa", min: 15, pts: 12, reb: 2, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 4, fga: 8, ftm: 3, fta: 4, composite: -0.26, zScores: { pts: 0.574, reb: -0.453, ast: -0.97, stl: -0.8, blk: 0.994, tpm: 0.031, fgImpact: 0.278, ftImpact: -0.065, to: 0.151 } },
          { name: "Kyshawn George", min: 27, pts: 14, reb: 3, ast: 1, stl: 1, blk: 2, to: 2, tpm: 3, fgm: 5, fga: 7, ftm: 1, fta: 2, composite: 5.02, zScores: { pts: 0.892, reb: -0.091, ast: -0.457, stl: 0.381, blk: 2.508, tpm: 1.676, fgImpact: 1.506, ftImpact: -0.782, to: -0.607 } },
          { name: "Alex Sarr", min: 26, pts: 12, reb: 9, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 4, fta: 4, composite: 4.52, zScores: { pts: 0.574, reb: 2.081, ast: -0.97, stl: 0.381, blk: 0.994, tpm: -0.791, fgImpact: 0.664, ftImpact: 1.433, to: 0.151 } },
          { name: "Trae Young", min: 28, pts: 7, reb: 4, ast: 7, stl: 3, blk: 0, to: 5, tpm: 1, fgm: 1, fga: 11, ftm: 4, fta: 6, composite: -2.21, zScores: { pts: -0.22, reb: 0.271, ast: 2.619, stl: 2.743, blk: -0.519, tpm: 0.031, fgImpact: -3.407, ftImpact: -0.847, to: -2.883 } },
          { name: "Khris Middleton", min: 14, pts: 5, reb: 4, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 6, ftm: 1, fta: 2, composite: -3.83, zScores: { pts: -0.537, reb: 0.271, ast: 0.568, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.634, ftImpact: -0.782, to: -0.607 } },
          { name: "Justin Champagnie", min: 6, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.73, zScores: { pts: -1.332, reb: -0.453, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.773, ftImpact: 0, to: 0.91 } },
          { name: "Chris Livingston", min: 8, pts: 4, reb: 4, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.43, zScores: { pts: -0.696, reb: 0.271, ast: -0.457, stl: -0.8, blk: 0.994, tpm: -0.791, fgImpact: 0.139, ftImpact: 0, to: 0.91 } },
          { name: "Felix Okpara", min: 8, pts: 2, reb: 1, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.15, zScores: { pts: -1.014, reb: -0.816, ast: -0.457, stl: -0.8, blk: 2.508, tpm: -0.791, fgImpact: 0.069, ftImpact: 0, to: 0.151 } },
          { name: "Deandre Ayton", min: 14, pts: 4, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.46, zScores: { pts: -0.696, reb: 0.271, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.139, ftImpact: 0, to: 0.91 } },
          { name: "Reece Beekman", min: 8, pts: 0, reb: 2, ast: 2, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.6, zScores: { pts: -1.332, reb: -0.453, ast: 0.056, stl: 1.562, blk: -0.519, tpm: -0.791, fgImpact: 0, ftImpact: 0, to: -2.125 } },
          { name: "Trevor Keels", min: 6, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.33, zScores: { pts: -0.379, reb: -1.178, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.853, fgImpact: -0.247, ftImpact: 0, to: 0.91 } },
          { name: "Alondes Williams", min: 3, pts: 5, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -1.47, zScores: { pts: -0.537, reb: -1.178, ast: -0.97, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: 0.456, ftImpact: 0.717, to: 0.151 } },
          { name: "Bub Carrington", min: 8, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.61, zScores: { pts: -1.332, reb: -0.091, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.773, ftImpact: 0, to: 0.151 } },
          { name: "Bilal Coulibaly", min: 13, pts: 3, reb: 2, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.09, zScores: { pts: -0.855, reb: -0.453, ast: -0.457, stl: -0.8, blk: 0.994, tpm: 0.031, fgImpact: -0.703, ftImpact: 0, to: 0.151 } },
          { name: "Will Riley", min: 11, pts: 11, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 4, fta: 5, composite: -1.06, zScores: { pts: 0.415, reb: -1.178, ast: -0.457, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: -0.178, ftImpact: 0.293, to: 0.151 } },
          { name: "Tre Johnson", min: 18, pts: 7, reb: 0, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: -3.46, zScores: { pts: -0.22, reb: -1.178, ast: 0.056, stl: -0.8, blk: -0.519, tpm: 0.853, fgImpact: -1.02, ftImpact: -0.782, to: 0.151 } }
        ]
      },
      home: {
        abbr: "NO", name: "New Orleans Pelicans", score: 107,
        players: [
          { name: "Herbert Jones", min: 22, pts: 5, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -0.94, zScores: { pts: -0.537, reb: 0.271, ast: -0.457, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: -1.02, ftImpact: 0, to: 0.91 } },
          { name: "Zion Williamson", min: 22, pts: 11, reb: 5, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 14, ftm: 1, fta: 2, composite: -4.11, zScores: { pts: 0.415, reb: 0.633, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -1.198, ftImpact: -0.782, to: -0.607 } },
          { name: "Trey Murphy III", min: 21, pts: 11, reb: 5, ast: 3, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 3.95, zScores: { pts: 0.415, reb: 0.633, ast: 0.568, stl: 1.562, blk: -0.519, tpm: 0.031, fgImpact: 0.347, ftImpact: 0, to: 0.91 } },
          { name: "Yves Missi", min: 19, pts: 6, reb: 7, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -0.08, zScores: { pts: -0.379, reb: 1.357, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.595, ftImpact: 0, to: 0.91 } },
          { name: "Jeremiah Fears", min: 22, pts: 14, reb: 3, ast: 5, stl: 3, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 11, ftm: 3, fta: 4, composite: 3.18, zScores: { pts: 0.892, reb: -0.091, ast: 1.594, stl: 2.743, blk: -0.519, tpm: 0.031, fgImpact: -0.039, ftImpact: -0.065, to: -1.366 } },
          { name: "Trendon Watford", min: 9, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -3.53, zScores: { pts: -0.696, reb: -0.816, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.912, ftImpact: 0, to: 0.151 } },
          { name: "Julian Reese", min: 9, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.014, reb: -1.178, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.456, ftImpact: 0, to: 0.91 } },
          { name: "Karlo Matkovic", min: 17, pts: 6, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -2.34, zScores: { pts: -0.379, reb: 0.633, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.178, ftImpact: 0, to: 0.151 } },
          { name: "DeAndre Jordan", min: 4, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.17, zScores: { pts: -1.332, reb: -1.178, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0, ftImpact: 0, to: 0.91 } },
          { name: "Derik Queen", min: 17, pts: 2, reb: 7, ast: 5, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 3.45, zScores: { pts: -1.014, reb: 1.357, ast: 1.594, stl: -0.8, blk: 2.508, tpm: -0.791, fgImpact: -0.317, ftImpact: 0, to: 0.91 } },
          { name: "Jordan Poole", min: 19, pts: 8, reb: 1, ast: 4, stl: 1, blk: 2, to: 1, tpm: 1, fgm: 2, fga: 8, ftm: 3, fta: 3, composite: 2.94, zScores: { pts: -0.061, reb: -0.816, ast: 1.081, stl: 0.381, blk: 2.508, tpm: 0.031, fgImpact: -1.406, ftImpact: 1.075, to: 0.151 } },
          { name: "Saddiq Bey", min: 17, pts: 19, reb: 6, ast: 2, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 7, fga: 11, ftm: 2, fta: 2, composite: 7.21, zScores: { pts: 1.686, reb: 0.995, ast: 0.056, stl: 1.562, blk: -0.519, tpm: 1.676, fgImpact: 1.645, ftImpact: 0.717, to: -0.607 } },
          { name: "Bryce McGowens", min: 9, pts: 5, reb: 2, ast: 1, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 1, fta: 1, composite: 0.23, zScores: { pts: -0.537, reb: -0.453, ast: -0.457, stl: 2.743, blk: -0.519, tpm: -0.791, fgImpact: -1.02, ftImpact: 0.358, to: 0.91 } },
          { name: "Bennedict Mathurin", min: 17, pts: 10, reb: 2, ast: 2, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 2.34, zScores: { pts: 0.257, reb: -0.453, ast: 0.056, stl: 0.381, blk: 2.508, tpm: -0.791, fgImpact: 0.278, ftImpact: 0.717, to: -0.607 } },
          { name: "Jaron Pierre Jr.", min: 9, pts: 2, reb: 0, ast: 1, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -4.21, zScores: { pts: -1.014, reb: -1.178, ast: -0.457, stl: 1.562, blk: -0.519, tpm: -0.791, fgImpact: -1.159, ftImpact: 0.717, to: -1.366 } },
          { name: "AJ Johnson", min: 9, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -5.05, zScores: { pts: -1.014, reb: -1.178, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.069, ftImpact: 0, to: 0.151 } }
        ]
      }
    },
      {
      id: "401908943",
      line: "Minnesota Timberwolves 116 @ Chicago Bulls 133 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIN", name: "Minnesota Timberwolves", score: 116,
        players: [
          { name: "Cody Williams", min: 27, pts: 15, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 11, ftm: 2, fta: 4, composite: -1.91, zScores: { pts: 1.051, reb: -0.091, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: 0.803, ftImpact: -1.564, to: 0.151 } },
          { name: "Joan Beringer", min: 25, pts: 11, reb: 6, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 12, ftm: 3, fta: 4, composite: -0.58, zScores: { pts: 0.415, reb: 0.995, ast: -0.97, stl: -0.8, blk: 0.994, tpm: -0.791, fgImpact: -1.267, ftImpact: -0.065, to: 0.91 } },
          { name: "Jaylen Clark", min: 29, pts: 18, reb: 7, ast: 0, stl: 3, blk: 1, to: 0, tpm: 3, fgm: 6, fga: 12, ftm: 3, fta: 6, composite: 6.31, zScores: { pts: 1.527, reb: 1.357, ast: -0.97, stl: 2.743, blk: 0.994, tpm: 1.676, fgImpact: 0.417, ftImpact: -2.346, to: 0.91 } },
          { name: "Terrence Shannon Jr.", min: 16, pts: 6, reb: 0, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -2.72, zScores: { pts: -0.379, reb: -1.178, ast: 1.081, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.247, ftImpact: 0.717, to: -0.607 } },
          { name: "Zyon Pullin", min: 38, pts: 14, reb: 3, ast: 10, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 9, ftm: 8, fta: 10, composite: 2.3, zScores: { pts: 0.892, reb: -0.091, ast: 4.158, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: -0.95, ftImpact: 0.586, to: -1.366 } },
          { name: "Drew Timme", min: 27, pts: 18, reb: 7, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 7, fga: 12, ftm: 3, fta: 5, composite: 2.79, zScores: { pts: 1.527, reb: 1.357, ast: 0.568, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: 1.259, ftImpact: -1.206, to: -0.607 } },
          { name: "KJ Martin", min: 22, pts: 9, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 3, fta: 5, composite: -2.77, zScores: { pts: 0.098, reb: -0.091, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.595, ftImpact: -1.206, to: 0.91 } },
          { name: "Norchad Omier", min: 10, pts: 0, reb: 4, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -3.33, zScores: { pts: -1.332, reb: 0.271, ast: 0.056, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: -1.545, ftImpact: 0, to: 0.151 } },
          { name: "Isaiah Evans", min: 30, pts: 21, reb: 2, ast: 3, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 6, fga: 13, ftm: 4, fta: 4, composite: 5.73, zScores: { pts: 2.004, reb: -0.453, ast: 0.568, stl: -0.8, blk: -0.519, tpm: 3.32, fgImpact: 0.031, ftImpact: 1.433, to: 0.151 } },
          { name: "Antonio Reeves", min: 17, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.43, zScores: { pts: -0.696, reb: -0.453, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.139, ftImpact: 0, to: 0.151 } }
        ]
      },
      home: {
        abbr: "CHI", name: "Chicago Bulls", score: 133,
        players: [
          { name: "Jalen Smith", min: 13, pts: 5, reb: 5, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 1, composite: 0, zScores: { pts: -0.537, reb: 0.633, ast: 0.568, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: -0.247, ftImpact: 0.358, to: 0.151 } },
          { name: "Matas Buzelis", min: 19, pts: 14, reb: 6, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 9, ftm: 4, fta: 5, composite: 1.25, zScores: { pts: 0.892, reb: 0.995, ast: -0.457, stl: -0.8, blk: 0.994, tpm: -0.791, fgImpact: 0.734, ftImpact: 0.293, to: -0.607 } },
          { name: "Caleb Wilson", min: 23, pts: 16, reb: 7, ast: 4, stl: 0, blk: 2, to: 2, tpm: 2, fgm: 7, fga: 15, ftm: 0, fta: 0, composite: 5.7, zScores: { pts: 1.21, reb: 1.357, ast: 1.081, stl: -0.8, blk: 2.508, tpm: 0.853, fgImpact: 0.1, ftImpact: 0, to: -0.607 } },
          { name: "Norman Powell", min: 15, pts: 9, reb: 4, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 7, ftm: 1, fta: 1, composite: 1.47, zScores: { pts: 0.098, reb: 0.271, ast: 0.056, stl: 0.381, blk: -0.519, tpm: 0.853, fgImpact: -0.178, ftImpact: 0.358, to: 0.151 } },
          { name: "Josh Giddey", min: 19, pts: 12, reb: 4, ast: 4, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 4, fga: 10, ftm: 3, fta: 3, composite: 2.88, zScores: { pts: 0.574, reb: 0.271, ast: 1.081, stl: -0.8, blk: 0.994, tpm: 0.031, fgImpact: -0.495, ftImpact: 1.075, to: 0.151 } },
          { name: "Drew Peterson", min: 8, pts: 7, reb: 1, ast: 2, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: 2.37, zScores: { pts: -0.22, reb: -0.816, ast: 0.056, stl: 1.562, blk: -0.519, tpm: 0.031, fgImpact: 1.367, ftImpact: 0, to: 0.91 } },
          { name: "Patrick Williams", min: 13, pts: 7, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -0.23, zScores: { pts: -0.22, reb: -0.453, ast: -0.457, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: 0.139, ftImpact: 0.717, to: 0.151 } },
          { name: "Jalen Bridges", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.7, zScores: { pts: -1.332, reb: -0.816, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.386, ftImpact: 0, to: 0.91 } },
          { name: "Leonard Miller", min: 21, pts: 12, reb: 6, ast: 3, stl: 0, blk: 2, to: 2, tpm: 1, fgm: 3, fga: 7, ftm: 5, fta: 6, composite: 3.74, zScores: { pts: 0.574, reb: 0.995, ast: 0.568, stl: -0.8, blk: 2.508, tpm: 0.031, fgImpact: -0.178, ftImpact: 0.651, to: -0.607 } },
          { name: "Noa Essengue", min: 15, pts: 5, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -3.69, zScores: { pts: -0.537, reb: -0.091, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.139, ftImpact: -0.782, to: 0.151 } },
          { name: "Orlando Robinson", min: 14, pts: 9, reb: 4, ast: 2, stl: 0, blk: 2, to: 3, tpm: 0, fgm: 3, fga: 3, ftm: 3, fta: 4, composite: 1.28, zScores: { pts: 0.098, reb: 0.271, ast: 0.056, stl: -0.8, blk: 2.508, tpm: -0.791, fgImpact: 1.367, ftImpact: -0.065, to: -1.366 } },
          { name: "Buddy Hield", min: 9, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.55, zScores: { pts: -1.014, reb: -1.178, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.703, ftImpact: 0, to: 0.91 } },
          { name: "Tre Jones", min: 14, pts: 8, reb: 2, ast: 5, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 0.93, zScores: { pts: -0.061, reb: -0.453, ast: 1.594, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 1.05, ftImpact: 0, to: 0.91 } },
          { name: "Jordan Hawkins", min: 19, pts: 14, reb: 3, ast: 3, stl: 2, blk: 1, to: 0, tpm: 4, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 8.07, zScores: { pts: 0.892, reb: -0.091, ast: 0.568, stl: 1.562, blk: 0.994, tpm: 2.498, fgImpact: 0.734, ftImpact: 0, to: 0.91 } },
          { name: "Dailyn Swain", min: 21, pts: 7, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 1, composite: -1.92, zScores: { pts: -0.22, reb: 0.271, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.595, ftImpact: 0.358, to: 0.151 } },
          { name: "Jaylin Sellers", min: 12, pts: 6, reb: 2, ast: 2, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 1.31, zScores: { pts: -0.379, reb: -0.453, ast: 0.056, stl: 0.381, blk: 0.994, tpm: -0.791, fgImpact: 0.595, ftImpact: 0, to: 0.91 } }
        ]
      }
    },
      {
      id: "401898409",
      line: "Portland Trail Blazers 118 @ Golden State Warriors 128 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "POR", name: "Portland Trail Blazers", score: 118,
        players: [
          { name: "Toumani Camara", min: 24, pts: 11, reb: 2, ast: 2, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 4, fga: 6, ftm: 0, fta: 2, composite: 0.81, zScores: { pts: 0.415, reb: -0.453, ast: 0.056, stl: -0.8, blk: 0.994, tpm: 1.676, fgImpact: 1.05, ftImpact: -2.281, to: 0.151 } },
          { name: "Deni Avdija", min: 23, pts: 12, reb: 4, ast: 3, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 15, ftm: 2, fta: 2, composite: 2.46, zScores: { pts: 0.574, reb: 0.271, ast: 0.568, stl: 1.562, blk: 0.994, tpm: -0.791, fgImpact: -1.584, ftImpact: 0.717, to: 0.151 } },
          { name: "Donovan Clingan", min: 24, pts: 6, reb: 11, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: -0.66, zScores: { pts: -0.379, reb: 2.806, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.634, ftImpact: 0.717, to: -0.607 } },
          { name: "Damian Lillard", min: 26, pts: 23, reb: 1, ast: 3, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 10, ftm: 13, fta: 13, composite: 5.92, zScores: { pts: 2.321, reb: -0.816, ast: 0.568, stl: -0.8, blk: -0.519, tpm: 0.853, fgImpact: -0.495, ftImpact: 4.658, to: 0.151 } },
          { name: "Ja Morant", min: 27, pts: 19, reb: 3, ast: 3, stl: 1, blk: 0, to: 4, tpm: 3, fgm: 8, fga: 10, ftm: 0, fta: 1, composite: 3.31, zScores: { pts: 1.686, reb: -0.091, ast: 0.568, stl: 0.381, blk: -0.519, tpm: 1.676, fgImpact: 2.874, ftImpact: -1.14, to: -2.125 } },
          { name: "John Tonje", min: 12, pts: 6, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 1, fta: 1, composite: -0.63, zScores: { pts: -0.379, reb: -0.816, ast: 0.056, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: 0.525, ftImpact: 0.358, to: 0.91 } },
          { name: "Jeremy Sochan", min: 12, pts: 6, reb: 3, ast: 1, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.8, zScores: { pts: -0.379, reb: -0.091, ast: -0.457, stl: -0.8, blk: 0.994, tpm: 0.853, fgImpact: 0.525, ftImpact: 0, to: 0.151 } },
          { name: "Branden Carlson", min: 5, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.96, zScores: { pts: -1.332, reb: -0.453, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0, ftImpact: 0, to: 0.91 } },
          { name: "Yang Hansen", min: 20, pts: 6, reb: 7, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 0.06, zScores: { pts: -0.379, reb: 1.357, ast: 0.056, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.981, ftImpact: 0, to: 0.151 } },
          { name: "Vit Krejci", min: 19, pts: 7, reb: 5, ast: 0, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -1.5, zScores: { pts: -0.22, reb: 0.633, ast: -0.97, stl: -0.8, blk: 0.994, tpm: 0.031, fgImpact: -0.564, ftImpact: 0, to: -0.607 } },
          { name: "Scoot Henderson", min: 19, pts: 17, reb: 1, ast: 2, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 7, fga: 16, ftm: 2, fta: 3, composite: -0.06, zScores: { pts: 1.368, reb: -0.816, ast: 0.056, stl: 0.381, blk: 0.994, tpm: 0.031, fgImpact: -0.286, ftImpact: -0.424, to: -1.366 } },
          { name: "Jayson Kent", min: 12, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -3.99, zScores: { pts: -0.855, reb: -0.453, ast: -0.457, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: -1.089, ftImpact: 0, to: 0.151 } },
          { name: "Sidy Cissoko", min: 17, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.03, zScores: { pts: -1.014, reb: -0.816, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.456, ftImpact: 0, to: 0.91 } }
        ]
      },
      home: {
        abbr: "GS", name: "Golden State Warriors", score: 128,
        players: [
          { name: "Draymond Green", min: 24, pts: 7, reb: 8, ast: 10, stl: 3, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 7.79, zScores: { pts: -0.22, reb: 1.719, ast: 4.158, stl: 2.743, blk: -0.519, tpm: 0.031, fgImpact: 0.525, ftImpact: 0.717, to: -1.366 } },
          { name: "Yaxel Lendeborg", min: 26, pts: 17, reb: 4, ast: 5, stl: 2, blk: 1, to: 1, tpm: 2, fgm: 6, fga: 9, ftm: 3, fta: 5, composite: 7.16, zScores: { pts: 1.368, reb: 0.271, ast: 1.594, stl: 1.562, blk: 0.994, tpm: 0.853, fgImpact: 1.576, ftImpact: -1.206, to: 0.151 } },
          { name: "Charles Bassey", min: 8, pts: 6, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -1.3, zScores: { pts: -0.379, reb: 0.271, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.981, ftImpact: 0, to: 0.91 } },
          { name: "Stephen Curry", min: 26, pts: 20, reb: 4, ast: 5, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 7, fga: 19, ftm: 3, fta: 3, composite: 5.03, zScores: { pts: 1.845, reb: 0.271, ast: 1.594, stl: 0.381, blk: -0.519, tpm: 1.676, fgImpact: -1.445, ftImpact: 1.075, to: 0.151 } },
          { name: "Brandin Podziemski", min: 27, pts: 17, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 10, ftm: 6, fta: 7, composite: 2.36, zScores: { pts: 1.368, reb: -0.091, ast: 0.056, stl: -0.8, blk: -0.519, tpm: 1.676, fgImpact: -0.495, ftImpact: 1.01, to: 0.151 } },
          { name: "Georges Niang", min: 16, pts: 13, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 8, ftm: 5, fta: 5, composite: 0.59, zScores: { pts: 0.733, reb: -0.091, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.853, fgImpact: -0.564, ftImpact: 1.792, to: 0.151 } },
          { name: "Tyler Burton", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.07, zScores: { pts: -1.332, reb: -1.178, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.386, ftImpact: 0, to: 0.91 } },
          { name: "Graham Ike", min: 8, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.42, zScores: { pts: -1.014, reb: -0.816, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.069, ftImpact: 0, to: 0.91 } },
          { name: "Malevy Leons", min: 4, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -3.28, zScores: { pts: -1.014, reb: -0.816, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0, ftImpact: 0.717, to: 0.91 } },
          { name: "Gui Santos", min: 21, pts: 7, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 1, fta: 2, composite: -3.65, zScores: { pts: -0.22, reb: -0.816, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.178, ftImpact: -0.782, to: 0.91 } },
          { name: "Alex Toohey", min: 2, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.332, reb: -0.816, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0, ftImpact: 0, to: 0.91 } },
          { name: "Al Horford", min: 15, pts: 15, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 5, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 2.65, zScores: { pts: 1.051, reb: -0.453, ast: -0.457, stl: -0.8, blk: -0.519, tpm: 3.32, fgImpact: 1.12, ftImpact: 0, to: -0.607 } },
          { name: "Gary Payton II", min: 17, pts: 8, reb: 4, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: -1.25, zScores: { pts: -0.061, reb: 0.271, ast: -0.97, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: 1.05, ftImpact: 0, to: -0.607 } },
          { name: "De'Anthony Melton", min: 19, pts: 7, reb: 2, ast: 1, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 4, fta: 5, composite: -0.69, zScores: { pts: -0.22, reb: -0.453, ast: -0.457, stl: 1.562, blk: -0.519, tpm: 0.031, fgImpact: -0.317, ftImpact: 0.293, to: -0.607 } },
          { name: "LJ Cryer", min: 6, pts: 5, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.03, zScores: { pts: -0.537, reb: -1.178, ast: -0.457, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: 0.525, ftImpact: 0, to: 0.91 } },
          { name: "Will Richard", min: 16, pts: 2, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.62, zScores: { pts: -1.014, reb: -0.816, ast: -0.457, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: -0.317, ftImpact: 0, to: 0.91 } }
        ]
      }
    },
      {
      id: "401908948",
      line: "Utah Jazz 119 @ Phoenix Suns 116 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UTAH", name: "Utah Jazz", score: 119,
        players: [
          { name: "Lauri Markkanen", min: 27, pts: 19, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 12, ftm: 6, fta: 6, composite: 6.03, zScores: { pts: 1.686, reb: 0.633, ast: -0.457, stl: 0.381, blk: -0.519, tpm: 1.676, fgImpact: -0.425, ftImpact: 2.15, to: 0.91 } },
          { name: "Jaren Jackson Jr.", min: 21, pts: 17, reb: 3, ast: 0, stl: 2, blk: 2, to: 1, tpm: 1, fgm: 6, fga: 10, ftm: 4, fta: 4, composite: 7.18, zScores: { pts: 1.368, reb: -0.091, ast: -0.97, stl: 1.562, blk: 2.508, tpm: 0.031, fgImpact: 1.189, ftImpact: 1.433, to: 0.151 } },
          { name: "Jaxson Hayes", min: 25, pts: 6, reb: 7, ast: 0, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 4, fta: 6, composite: -3.12, zScores: { pts: -0.379, reb: 1.357, ast: -0.97, stl: -0.8, blk: 0.994, tpm: -0.791, fgImpact: -0.317, ftImpact: -0.847, to: -1.366 } },
          { name: "Keyonte George", min: 23, pts: 13, reb: 1, ast: 3, stl: 2, blk: 0, to: 4, tpm: 1, fgm: 4, fga: 7, ftm: 4, fta: 6, composite: -0.75, zScores: { pts: 0.733, reb: -0.816, ast: 0.568, stl: 1.562, blk: -0.519, tpm: 0.031, fgImpact: 0.664, ftImpact: -0.847, to: -2.125 } },
          { name: "Darryn Peterson", min: 29, pts: 13, reb: 6, ast: 6, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 12, ftm: 4, fta: 4, composite: 4.05, zScores: { pts: 0.733, reb: 0.995, ast: 2.107, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: -1.267, ftImpact: 1.433, to: 0.151 } },
          { name: "Harrison Ingram", min: 3, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.3, zScores: { pts: -1.014, reb: -0.816, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.456, ftImpact: 0, to: 0.151 } },
          { name: "Kyle Filipowski", min: 8, pts: 6, reb: 7, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.34, zScores: { pts: -0.379, reb: 1.357, ast: -0.457, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: 0.595, ftImpact: 0, to: 0.151 } },
          { name: "Brice Sensabaugh", min: 17, pts: 16, reb: 1, ast: 3, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 5, fga: 9, ftm: 2, fta: 2, composite: 2.98, zScores: { pts: 1.21, reb: -0.816, ast: 0.568, stl: -0.8, blk: -0.519, tpm: 2.498, fgImpact: 0.734, ftImpact: 0.717, to: -0.607 } },
          { name: "Mo Bamba", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.8, zScores: { pts: -1.332, reb: -0.816, ast: -0.97, stl: -0.8, blk: 0.994, tpm: -0.791, fgImpact: 0, ftImpact: 0, to: 0.91 } },
          { name: "Svi Mykhailiuk", min: 17, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.48, zScores: { pts: -0.855, reb: -0.816, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: -0.703, ftImpact: 0, to: 0.151 } },
          { name: "Josh Okogie", min: 17, pts: 2, reb: 2, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.79, zScores: { pts: -1.014, reb: -0.453, ast: 0.056, stl: -0.8, blk: 0.994, tpm: -0.791, fgImpact: 0.069, ftImpact: 0, to: 0.151 } },
          { name: "Josh Green", min: 8, pts: 8, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 4, ftm: 1, fta: 1, composite: -2.01, zScores: { pts: -0.061, reb: -1.178, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: 0.981, ftImpact: 0.358, to: 0.151 } },
          { name: "Isaiah Collier", min: 17, pts: 2, reb: 5, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -2.46, zScores: { pts: -1.014, reb: 0.633, ast: 1.081, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -1.159, ftImpact: 0.717, to: -0.607 } },
          { name: "Ace Bailey", min: 21, pts: 12, reb: 3, ast: 0, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 3, ftm: 5, fta: 6, composite: 3.52, zScores: { pts: 0.574, reb: -0.091, ast: -0.97, stl: 1.562, blk: -0.519, tpm: 0.031, fgImpact: 1.367, ftImpact: 0.651, to: 0.91 } }
        ]
      },
      home: {
        abbr: "PHX", name: "Phoenix Suns", score: 116,
        players: [
          { name: "Dillon Brooks", min: 23, pts: 18, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 6, fga: 13, ftm: 4, fta: 4, composite: 3.25, zScores: { pts: 1.527, reb: 0.271, ast: -0.457, stl: -0.8, blk: -0.519, tpm: 0.853, fgImpact: 0.031, ftImpact: 1.433, to: 0.91 } },
          { name: "Miles Bridges", min: 21, pts: 8, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -2.63, zScores: { pts: -0.061, reb: -0.091, ast: -0.457, stl: -0.8, blk: -0.519, tpm: 0.853, fgImpact: -0.95, ftImpact: 0, to: -0.607 } },
          { name: "Khaman Maluach", min: 24, pts: 7, reb: 12, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 3, fta: 4, composite: 3.55, zScores: { pts: -0.22, reb: 3.168, ast: -0.97, stl: 0.381, blk: 0.994, tpm: -0.791, fgImpact: 0.139, ftImpact: -0.065, to: 0.91 } },
          { name: "Devin Booker", min: 26, pts: 16, reb: 3, ast: 6, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 6, fga: 16, ftm: 3, fta: 4, composite: -0.2, zScores: { pts: 1.21, reb: -0.091, ast: 2.107, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: -1.128, ftImpact: -0.065, to: -2.125 } },
          { name: "Jalen Green", min: 23, pts: 18, reb: 2, ast: 2, stl: 3, blk: 0, to: 4, tpm: 3, fgm: 6, fga: 13, ftm: 3, fta: 5, composite: 1.73, zScores: { pts: 1.527, reb: -0.453, ast: 0.056, stl: 2.743, blk: -0.519, tpm: 1.676, fgImpact: 0.031, ftImpact: -1.206, to: -2.125 } },
          { name: "Ryan Dunn", min: 17, pts: 0, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -1.332, reb: -0.091, ast: 0.056, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.773, ftImpact: 0, to: 0.151 } },
          { name: "Koa Peat", min: 10, pts: 2, reb: 1, ast: 0, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.48, zScores: { pts: -1.014, reb: -0.816, ast: -0.97, stl: 0.381, blk: 2.508, tpm: -0.791, fgImpact: 0.069, ftImpact: 0, to: 0.151 } },
          { name: "Rasheer Fleming", min: 12, pts: 0, reb: 4, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -1.31, zScores: { pts: -1.332, reb: 0.271, ast: -0.97, stl: 0.381, blk: 0.994, tpm: -0.791, fgImpact: -0.773, ftImpact: 0, to: 0.91 } },
          { name: "Duop Reath", min: 15, pts: 8, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 2, composite: -4.62, zScores: { pts: -0.061, reb: -0.816, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.853, fgImpact: -0.178, ftImpact: -2.281, to: 0.151 } },
          { name: "Jordan Goodwin", min: 14, pts: 10, reb: 4, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 3.52, zScores: { pts: 0.257, reb: 0.271, ast: 0.056, stl: 0.381, blk: -0.519, tpm: 0.853, fgImpact: 0.595, ftImpact: 0.717, to: 0.91 } },
          { name: "Collin Gillespie", min: 20, pts: 6, reb: 6, ast: 2, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 3, ftm: 3, fta: 3, composite: -0.04, zScores: { pts: -0.379, reb: 0.995, ast: 0.056, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: -0.317, ftImpact: 1.075, to: -1.366 } },
          { name: "Jamaree Bouyea", min: 14, pts: 12, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 6, fga: 9, ftm: 0, fta: 2, composite: -1.31, zScores: { pts: 0.574, reb: -0.453, ast: 0.056, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: 1.576, ftImpact: -2.281, to: 0.151 } },
          { name: "Koby Brea", min: 12, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -5.25, zScores: { pts: -0.855, reb: -0.816, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: -1.476, ftImpact: 0, to: 0.151 } },
          { name: "Pat Spencer", min: 9, pts: 8, reb: 1, ast: 0, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 0.78, zScores: { pts: -0.061, reb: -0.816, ast: -0.97, stl: 1.562, blk: -0.519, tpm: 0.853, fgImpact: -0.178, ftImpact: 0, to: 0.91 } }
        ]
      }
    },
      {
      id: "401898719",
      line: "Denver Nuggets 121 @ Los Angeles Lakers 106 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DEN", name: "Denver Nuggets", score: 121,
        players: [
          { name: "Cameron Johnson", min: 23, pts: 12, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 2.01, zScores: { pts: 0.574, reb: -0.091, ast: -0.457, stl: 0.381, blk: -0.519, tpm: 0.853, fgImpact: 1.12, ftImpact: 0, to: 0.151 } },
          { name: "Trevon Brazile", min: 27, pts: 12, reb: 8, ast: 2, stl: 2, blk: 2, to: 2, tpm: 2, fgm: 5, fga: 7, ftm: 0, fta: 3, composite: 4.75, zScores: { pts: 0.574, reb: 1.719, ast: 0.056, stl: 1.562, blk: 2.508, tpm: 0.853, fgImpact: 1.506, ftImpact: -3.421, to: -0.607 } },
          { name: "Nikola Jokic", min: 31, pts: 17, reb: 6, ast: 8, stl: 2, blk: 0, to: 6, tpm: 3, fgm: 7, fga: 8, ftm: 0, fta: 0, composite: 7.38, zScores: { pts: 1.368, reb: 0.995, ast: 3.132, stl: 1.562, blk: -0.519, tpm: 1.676, fgImpact: 2.804, ftImpact: 0, to: -3.642 } },
          { name: "Jamal Murray", min: 31, pts: 21, reb: 3, ast: 6, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 8, fga: 15, ftm: 5, fta: 5, composite: 5.98, zScores: { pts: 2.004, reb: -0.091, ast: 2.107, stl: 0.381, blk: -0.519, tpm: -0.791, fgImpact: 0.942, ftImpact: 1.792, to: 0.151 } },
          { name: "Christian Braun", min: 28, pts: 16, reb: 6, ast: 1, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 10, ftm: 4, fta: 5, composite: 5.19, zScores: { pts: 1.21, reb: 0.995, ast: -0.457, stl: 1.562, blk: -0.519, tpm: 0.853, fgImpact: 0.347, ftImpact: 0.293, to: 0.91 } },
          { name: "Alpha Diallo", min: 23, pts: 9, reb: 5, ast: 1, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 4, fta: 4, composite: 2.3, zScores: { pts: 0.098, reb: 0.633, ast: -0.457, stl: 1.562, blk: -0.519, tpm: 0.031, fgImpact: -0.634, ftImpact: 1.433, to: 0.151 } },
          { name: "Marvin Bagley III", min: 17, pts: 13, reb: 8, ast: 0, stl: 1, blk: 2, to: 2, tpm: 1, fgm: 6, fga: 10, ftm: 0, fta: 1, composite: 3.84, zScores: { pts: 0.733, reb: 1.719, ast: -0.97, stl: 0.381, blk: 2.508, tpm: 0.031, fgImpact: 1.189, ftImpact: -1.14, to: -0.607 } },
          { name: "Bryce Hopkins", min: 12, pts: 5, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: -2.31, zScores: { pts: -0.537, reb: 0.271, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0.912, ftImpact: -0.782, to: 0.91 } },
          { name: "Cam Whitmore", min: 5, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -4.42, zScores: { pts: -1.014, reb: -1.178, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.773, ftImpact: 0.717, to: 0.91 } },
          { name: "DeMar DeRozan", min: 27, pts: 14, reb: 1, ast: 5, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 6, fga: 9, ftm: 2, fta: 3, composite: 5.07, zScores: { pts: 0.892, reb: -0.816, ast: 1.594, stl: 0.381, blk: 2.508, tpm: -0.791, fgImpact: 1.576, ftImpact: -0.424, to: 0.151 } },
          { name: "Tyus Jones", min: 17, pts: 0, reb: 1, ast: 8, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -0.99, zScores: { pts: -1.332, reb: -0.816, ast: 3.132, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.773, ftImpact: 0, to: 0.91 } }
        ]
      },
      home: {
        abbr: "LAL", name: "Los Angeles Lakers", score: 106,
        players: [
          { name: "Ziaire Williams", min: 11, pts: 14, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 6, ftm: 2, fta: 2, composite: 1.8, zScores: { pts: 0.892, reb: -1.178, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 0.853, fgImpact: 1.893, ftImpact: 0.717, to: 0.91 } },
          { name: "Walker Kessler", min: 31, pts: 6, reb: 6, ast: 4, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: 3.26, zScores: { pts: -0.379, reb: 0.995, ast: 1.081, stl: 0.381, blk: 2.508, tpm: -0.791, fgImpact: -1.406, ftImpact: 0.717, to: 0.151 } },
          { name: "Matisse Thybulle", min: 25, pts: 7, reb: 5, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 0.85, zScores: { pts: -0.22, reb: 0.633, ast: 0.568, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: -0.178, ftImpact: 0, to: 0.151 } },
          { name: "Luka Doncic", min: 19, pts: 15, reb: 4, ast: 2, stl: 1, blk: 1, to: 5, tpm: 3, fgm: 4, fga: 10, ftm: 4, fta: 5, composite: 1.34, zScores: { pts: 1.051, reb: 0.271, ast: 0.056, stl: 0.381, blk: 0.994, tpm: 1.676, fgImpact: -0.495, ftImpact: 0.293, to: -2.883 } },
          { name: "Austin Reaves", min: 31, pts: 19, reb: 5, ast: 3, stl: 1, blk: 0, to: 6, tpm: 1, fgm: 5, fga: 11, ftm: 8, fta: 12, composite: -2.6, zScores: { pts: 1.686, reb: 0.633, ast: 0.568, stl: 0.381, blk: -0.519, tpm: 0.031, fgImpact: -0.039, ftImpact: -1.695, to: -3.642 } },
          { name: "Kevon Looney", min: 8, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.44, zScores: { pts: -1.332, reb: -0.453, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: 0, ftImpact: 0, to: 0.91 } },
          { name: "Sandro Mamukelashvili", min: 21, pts: 15, reb: 8, ast: 4, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 5, fga: 10, ftm: 2, fta: 2, composite: 8.88, zScores: { pts: 1.051, reb: 1.719, ast: 1.081, stl: 0.381, blk: 0.994, tpm: 1.676, fgImpact: 0.347, ftImpact: 0.717, to: 0.91 } },
          { name: "Jake LaRavia", min: 23, pts: 3, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.72, zScores: { pts: -0.855, reb: -0.453, ast: 0.056, stl: -0.8, blk: -0.519, tpm: 0.031, fgImpact: -1.089, ftImpact: 0, to: 0.91 } },
          { name: "Rafael Castro", min: 6, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.73, zScores: { pts: -1.332, reb: -0.453, ast: -0.97, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.773, ftImpact: 0, to: 0.91 } },
          { name: "Dalton Knecht", min: 8, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.19, zScores: { pts: -1.332, reb: -0.816, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.386, ftImpact: 0, to: 0.91 } },
          { name: "Quentin Grimes", min: 28, pts: 11, reb: 2, ast: 3, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 1.69, zScores: { pts: 0.415, reb: -0.453, ast: 0.568, stl: -0.8, blk: -0.519, tpm: 1.676, fgImpact: -0.108, ftImpact: 0, to: 0.91 } },
          { name: "Bronny James", min: 12, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.19, zScores: { pts: -1.332, reb: -0.816, ast: -0.457, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.386, ftImpact: 0, to: 0.91 } },
          { name: "Chris Manon", min: 6, pts: 3, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -4.28, zScores: { pts: -0.855, reb: -1.178, ast: 0.056, stl: -0.8, blk: -0.519, tpm: -0.791, fgImpact: -0.317, ftImpact: -0.782, to: 0.91 } },
          { name: "Jaden Hardy", min: 14, pts: 13, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 0.19, zScores: { pts: 0.733, reb: -0.816, ast: -0.97, stl: -0.8, blk: -0.519, tpm: 1.676, fgImpact: 0.734, ftImpact: 0, to: 0.151 } }
        ]
      }
    }
    ]
  }
  }
};
