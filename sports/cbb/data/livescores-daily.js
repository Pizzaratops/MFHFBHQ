// ============================================================
//  LIVE SCORES — Daily 9cat Z-Score Data
// ============================================================
//  AUTO-GENERIERT von scripts/convert-to-livescores.js über die
//  "Daily 9cat Live Scores" GitHub Action. Nicht von Hand editieren
//  — Änderungen werden beim nächsten Lauf überschrieben.
//
//  Shape:
//  LIVESCORES_DAILY[league][date] = {
//    games: [ "Team A 88 @ Team B 91 (Final)", ... ],
//    leagueAvg: { fg: 47.3, ft: 76.1 },
//    players: [
//      { rank, name, team, min, pts, reb, ast, stl, blk, to, tpm,
//        fgPct, ftPct, composite,
//        zScores: { pts, reb, ast, stl, blk, tpm, fgImpact, ftImpact, to } },
//      ...
//    ]
//  }
//
//  zScores sind die ungewichteten Pro-Kategorie-Z-Scores (composite ist
//  ihre einfache Summe) — Basis für die Punt-Gewichtung im Frontend
//  (js/livescores.js), die composite mit benutzerdefinierten Gewichten
//  neu berechnet, ohne dass hier serverseitig etwas gespeichert wird.
//
//  date format: "YYYY-MM-DD"
//  league keys match the ESPN league slugs used in daily-9cat.js:
//    "nba-summer-las-vegas" | "nba-preseason" | "nba"
// ============================================================

const LIVESCORES_DAILY = {
  "ncaab": {
    "2026-11-01": {
      games: ["Notre Dame Fighting Irish 74 @ Villanova Wildcats 72 (Final)"],
      leagueAvg: { fg: 40.2, ft: 74.4 },
      players: [
        { rank: 1, name: "Brady Koehler", team: "ND", min: 25, pts: 16, reb: 8, ast: 1, stl: 2, blk: 2, to: 0, tpm: 1, fgPct: 46.2, ftPct: 75, composite: 8.28, zScores: { pts: 1.446, reb: 1.732, ast: -0.231, stl: 0.827, blk: 2.579, tpm: -0.04, fgImpact: 0.832, ftImpact: 0.026, to: 1.107 } },
        { rank: 2, name: "Braeden Smith", team: "ND", min: 31, pts: 16, reb: 4, ast: 3, stl: 4, blk: 0, to: 1, tpm: 2, fgPct: 22.2, ftPct: 90.9, composite: 6.38, zScores: { pts: 1.446, reb: 0.183, ast: 1.022, stl: 2.572, blk: -0.483, tpm: 0.719, fgImpact: -1.732, ftImpact: 2.242, to: 0.406 } },
        { rank: 3, name: "Tyler Perkins", team: "Vill", min: 35, pts: 18, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 5, fgPct: 50, ftPct: 33.3, composite: 5.61, zScores: { pts: 1.794, reb: 0.183, ast: 1.022, stl: -0.046, blk: -0.483, tpm: 2.998, fgImpact: 1.26, ftImpact: -1.521, to: 0.406 } },
        { rank: 4, name: "Elijah Crawford", team: "Vill", min: 25, pts: 12, reb: 3, ast: 5, stl: 3, blk: 0, to: 4, tpm: 0, fgPct: 57.1, ftPct: 100, composite: 4.08, zScores: { pts: 0.751, reb: -0.204, ast: 2.275, stl: 1.699, blk: -0.483, tpm: -0.799, fgImpact: 1.271, ftImpact: 1.264, to: -1.698 } },
        { rank: 5, name: "Braeden Shrewsberry", team: "ND", min: 36, pts: 15, reb: 6, ast: 3, stl: 1, blk: 0, to: 0, tpm: 3, fgPct: 42.9, ftPct: 0, composite: 3.87, zScores: { pts: 1.272, reb: 0.958, ast: 1.022, stl: -0.046, blk: -0.483, tpm: 1.479, fgImpact: 0.405, ftImpact: -1.843, to: 1.107 } },
        { rank: 6, name: "Jake Fiegen", team: "Vill", min: 38, pts: 11, reb: 5, ast: 1, stl: 0, blk: 1, to: 0, tpm: 3, fgPct: 50, ftPct: 0, composite: 3.55, zScores: { pts: 0.577, reb: 0.571, ast: -0.231, stl: -0.919, blk: 1.048, tpm: 1.479, fgImpact: 0.843, ftImpact: -0.915, to: 1.107 } },
        { rank: 7, name: "Ethan Roberts", team: "ND", min: 32, pts: 11, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgPct: 37.5, ftPct: 100, composite: 0, zScores: { pts: 0.577, reb: -0.591, ast: -0.857, stl: -0.046, blk: -0.483, tpm: -0.04, fgImpact: -0.226, ftImpact: 1.264, to: 0.406 } },
        { rank: 8, name: "Logan Duncomb", team: "ND", min: 21, pts: 9, reb: 3, ast: 4, stl: 1, blk: 0, to: 3, tpm: 1, fgPct: 57.1, ftPct: 0, composite: -0.46, zScores: { pts: 0.229, reb: -0.204, ast: 1.648, stl: -0.046, blk: -0.483, tpm: -0.04, fgImpact: 1.271, ftImpact: -1.843, to: -0.997 } },
        { rank: 9, name: "Luigi Suigo", team: "Vill", min: 24, pts: 7, reb: 5, ast: 0, stl: 0, blk: 1, to: 3, tpm: 1, fgPct: 50, ftPct: 0, composite: -0.68, zScores: { pts: -0.119, reb: 0.571, ast: -0.857, stl: -0.919, blk: 1.048, tpm: -0.04, fgImpact: 0.629, ftImpact: 0.001, to: -0.997 } },
        { rank: 10, name: "Kwame Evans Jr.", team: "Vill", min: 22, pts: 7, reb: 7, ast: 0, stl: 1, blk: 2, to: 5, tpm: 0, fgPct: 28.6, ftPct: 75, composite: -1.14, zScores: { pts: -0.119, reb: 1.345, ast: -0.857, stl: -0.046, blk: 2.579, tpm: -0.799, fgImpact: -0.867, ftImpact: 0.026, to: -2.399 } },
        { rank: 11, name: "Adam Oumiddoch", team: "Vill", min: 9, pts: 7, reb: 0, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgPct: 75, ftPct: 0, composite: -1.72, zScores: { pts: -0.119, reb: -1.365, ast: -0.857, stl: -0.046, blk: -0.483, tpm: -0.04, fgImpact: 1.484, ftImpact: 0.001, to: -0.295 } },
        { rank: 12, name: "Tommy Ahneman", team: "ND", min: 13, pts: 4, reb: 6, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgPct: 16.7, ftPct: 100, composite: -2.34, zScores: { pts: -0.641, reb: 0.958, ast: -0.857, stl: -0.046, blk: -0.483, tpm: -0.799, fgImpact: -1.508, ftImpact: 0.633, to: 0.406 } },
        { rank: 13, name: "Devin Royal", team: "Vill", min: 32, pts: 5, reb: 8, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgPct: 0, ftPct: 83.3, composite: -2.56, zScores: { pts: -0.467, reb: 1.732, ast: -0.857, stl: -0.919, blk: -0.483, tpm: -0.799, fgImpact: -0.429, ftImpact: 0.657, to: -0.997 } },
        { rank: 14, name: "Logan Imes", team: "ND", min: 15, pts: 0, reb: 0, ast: 1, stl: 3, blk: 0, to: 1, tpm: 0, fgPct: 0, ftPct: 0, composite: -2.97, zScores: { pts: -1.336, reb: -1.365, ast: -0.231, stl: 1.699, blk: -0.483, tpm: -0.799, fgImpact: -0.856, ftImpact: 0.001, to: 0.406 } },
        { rank: 15, name: "Darryl Simmons II", team: "Vill", min: 15, pts: 5, reb: 1, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgPct: 28.6, ftPct: 0, composite: -3.03, zScores: { pts: -0.467, reb: -0.978, ast: 1.022, stl: -0.919, blk: -0.483, tpm: -0.04, fgImpact: -0.867, ftImpact: 0.001, to: -0.295 } },
        { rank: 16, name: "Jonathan Sanderson", team: "ND", min: 10, pts: 3, reb: 1, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgPct: 16.7, ftPct: 0, composite: -3.77, zScores: { pts: -0.815, reb: -0.978, ast: 0.396, stl: -0.046, blk: -0.483, tpm: -0.04, fgImpact: -1.508, ftImpact: 0.001, to: -0.295 } },
        { rank: 17, name: "Bryce Ruglass Dortch", team: "ND", min: 5, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgPct: 0, ftPct: 0, composite: -3.88, zScores: { pts: -1.336, reb: -0.591, ast: -0.857, stl: -0.919, blk: -0.483, tpm: -0.799, fgImpact: -0.001, ftImpact: 0.001, to: 1.107 } },
        { rank: 18, name: "Yoro Diallo", team: "ND", min: 8, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgPct: 0, ftPct: 0, composite: -3.88, zScores: { pts: -1.336, reb: -0.591, ast: -0.857, stl: -0.919, blk: -0.483, tpm: -0.799, fgImpact: -0.001, ftImpact: 0.001, to: 1.107 } },
        { rank: 19, name: "Devin Brown", team: "ND", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgPct: 0, ftPct: 0, composite: -5.35, zScores: { pts: -1.336, reb: -1.365, ast: -0.857, stl: -0.919, blk: -0.483, tpm: -0.799, fgImpact: -0.001, ftImpact: 0.001, to: 0.406 } }
      ]
    }
  }
};
