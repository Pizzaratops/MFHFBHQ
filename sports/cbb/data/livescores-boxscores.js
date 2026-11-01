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
    "2026-11-01": {
    games: [
      {
      id: "401920982",
      line: "Notre Dame Fighting Irish 74 @ Villanova Wildcats 72 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ND", name: "Notre Dame Fighting Irish", score: 74,
        players: [
          { name: "Brady Koehler", min: 25, pts: 16, reb: 8, ast: 1, stl: 2, blk: 2, to: 0, tpm: 1, fgm: 6, fga: 13, ftm: 3, fta: 4, composite: 8.28, zScores: { pts: 1.446, reb: 1.732, ast: -0.231, stl: 0.827, blk: 2.579, tpm: -0.04, fgImpact: 0.831, ftImpact: 0.029, to: 1.107 } },
          { name: "Logan Duncomb", min: 21, pts: 9, reb: 3, ast: 4, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 2, composite: -0.46, zScores: { pts: 0.229, reb: -0.204, ast: 1.648, stl: -0.046, blk: -0.483, tpm: -0.04, fgImpact: 1.27, ftImpact: -1.84, to: -0.997 } },
          { name: "Ethan Roberts", min: 32, pts: 11, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 4, fta: 4, composite: 0, zScores: { pts: 0.577, reb: -0.591, ast: -0.857, stl: -0.046, blk: -0.483, tpm: -0.04, fgImpact: -0.228, ftImpact: 1.265, to: 0.406 } },
          { name: "Braeden Smith", min: 31, pts: 16, reb: 4, ast: 3, stl: 4, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 9, ftm: 10, fta: 11, composite: 6.38, zScores: { pts: 1.446, reb: 0.183, ast: 1.022, stl: 2.572, blk: -0.483, tpm: 0.719, fgImpact: -1.727, ftImpact: 2.242, to: 0.406 } },
          { name: "Braeden Shrewsberry", min: 36, pts: 15, reb: 6, ast: 3, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 14, ftm: 0, fta: 2, composite: 3.87, zScores: { pts: 1.272, reb: 0.958, ast: 1.022, stl: -0.046, blk: -0.483, tpm: 1.479, fgImpact: 0.402, ftImpact: -1.84, to: 1.107 } },
          { name: "Bryce Ruglass Dortch", min: 5, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.88, zScores: { pts: -1.336, reb: -0.591, ast: -0.857, stl: -0.919, blk: -0.483, tpm: -0.799, fgImpact: 0, ftImpact: 0, to: 1.107 } },
          { name: "Yoro Diallo", min: 8, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.88, zScores: { pts: -1.336, reb: -0.591, ast: -0.857, stl: -0.919, blk: -0.483, tpm: -0.799, fgImpact: 0, ftImpact: 0, to: 1.107 } },
          { name: "Tommy Ahneman", min: 13, pts: 4, reb: 6, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: -2.34, zScores: { pts: -0.641, reb: 0.958, ast: -0.857, stl: -0.046, blk: -0.483, tpm: -0.799, fgImpact: -1.508, ftImpact: 0.632, to: 0.406 } },
          { name: "Devin Brown", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.35, zScores: { pts: -1.336, reb: -1.365, ast: -0.857, stl: -0.919, blk: -0.483, tpm: -0.799, fgImpact: 0, ftImpact: 0, to: 0.406 } },
          { name: "Jonathan Sanderson", min: 10, pts: 3, reb: 1, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -3.77, zScores: { pts: -0.815, reb: -0.978, ast: 0.396, stl: -0.046, blk: -0.483, tpm: -0.04, fgImpact: -1.508, ftImpact: 0, to: -0.295 } },
          { name: "Logan Imes", min: 15, pts: 0, reb: 0, ast: 1, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.97, zScores: { pts: -1.336, reb: -1.365, ast: -0.231, stl: 1.699, blk: -0.483, tpm: -0.799, fgImpact: -0.859, ftImpact: 0, to: 0.406 } }
        ]
      },
      home: {
        abbr: "Vill", name: "Villanova Wildcats", score: 72,
        players: [
          { name: "Devin Royal", min: 32, pts: 5, reb: 8, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 1, ftm: 5, fta: 6, composite: -2.56, zScores: { pts: -0.467, reb: 1.732, ast: -0.857, stl: -0.919, blk: -0.483, tpm: -0.799, fgImpact: -0.429, ftImpact: 0.661, to: -0.997 } },
          { name: "Luigi Suigo", min: 24, pts: 7, reb: 5, ast: 0, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -0.68, zScores: { pts: -0.119, reb: 0.571, ast: -0.857, stl: -0.919, blk: 1.048, tpm: -0.04, fgImpact: 0.63, ftImpact: 0, to: -0.997 } },
          { name: "Tyler Perkins", min: 35, pts: 18, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 5, fgm: 6, fga: 12, ftm: 1, fta: 3, composite: 5.61, zScores: { pts: 1.794, reb: 0.183, ast: 1.022, stl: -0.046, blk: -0.483, tpm: 2.998, fgImpact: 1.261, ftImpact: -1.523, to: 0.406 } },
          { name: "Jake Fiegen", min: 38, pts: 11, reb: 5, ast: 1, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 4, fga: 8, ftm: 0, fta: 1, composite: 3.55, zScores: { pts: 0.577, reb: 0.571, ast: -0.231, stl: -0.919, blk: 1.048, tpm: 1.479, fgImpact: 0.841, ftImpact: -0.92, to: 1.107 } },
          { name: "Darryl Simmons II", min: 15, pts: 5, reb: 1, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -3.03, zScores: { pts: -0.467, reb: -0.978, ast: 1.022, stl: -0.919, blk: -0.483, tpm: -0.04, fgImpact: -0.868, ftImpact: 0, to: -0.295 } },
          { name: "Kwame Evans Jr.", min: 22, pts: 7, reb: 7, ast: 0, stl: 1, blk: 2, to: 5, tpm: 0, fgm: 2, fga: 7, ftm: 3, fta: 4, composite: -1.14, zScores: { pts: -0.119, reb: 1.345, ast: -0.857, stl: -0.046, blk: 2.579, tpm: -0.799, fgImpact: -0.868, ftImpact: 0.029, to: -2.399 } },
          { name: "Adam Oumiddoch", min: 9, pts: 7, reb: 0, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -1.72, zScores: { pts: -0.119, reb: -1.365, ast: -0.857, stl: -0.046, blk: -0.483, tpm: -0.04, fgImpact: 1.489, ftImpact: 0, to: -0.295 } },
          { name: "Elijah Crawford", min: 25, pts: 12, reb: 3, ast: 5, stl: 3, blk: 0, to: 4, tpm: 0, fgm: 4, fga: 7, ftm: 4, fta: 4, composite: 4.08, zScores: { pts: 0.751, reb: -0.204, ast: 2.275, stl: 1.699, blk: -0.483, tpm: -0.799, fgImpact: 1.27, ftImpact: 1.265, to: -1.698 } }
        ]
      }
    }
    ]
  }
  }
};
