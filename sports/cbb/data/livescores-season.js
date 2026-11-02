// ============================================================
//  LIVE SCORES — Aggregierte 9cat Z-Score Rankings (Woche/Monat)
// ============================================================
//  AUTO-GENERIERT von scripts/convert-aggregate-to-livescores.js
//  (bzw. scripts/update-all-aggregates.js) über die "Daily 9cat
//  Live Scores" GitHub Action. Nicht von Hand editieren —
//  Änderungen werden beim nächsten Lauf überschrieben.
//
//  Shape:
//  LIVESCORES_AGGREGATE[period][league][endDate] = {
//    windowStart, windowEnd,   // "YYYY-MM-DD" — Rand des rollierenden Fensters
//    windowDays,                // 7 (week) oder 30 (month)
//    daysInWindow,              // Anzahl Tages-CSVs, die tatsächlich im Fenster lagen
//    minGames,                  // Mindestspiele, um in "players" zu erscheinen
//    leagueAvg: { fg, ft },
//    players: [
//      { rank, name, team, games, min, pts, reb, ast, stl, blk, to, tpm,
//        fgPct, ftPct, composite,
//        zScores: { pts, reb, ast, stl, blk, tpm, fgImpact, ftImpact, to } },
//        // Werte sind Pro-Spiel-Schnitte im Fenster; zScores sind die
//        // ungewichteten Kategorie-Z-Scores (composite ist ihre Summe) —
//        // Basis für die Punt-Gewichtung im Frontend.
//      ...
//    ]
//  }
//
//  period: "week" | "month" (livescores-aggregate.js) bzw. "season" (livescores-season.js,
//          Saison bis zum Stichtag, gleiche Form; seit 15.10.2026)
//  Ältere Stichtage werden ausgedünnt (s. trimSmart): letzte 8 Tage komplett,
//  davor nur Sonntage (week/season) bzw. Monatsletzte (month).
//  endDate: Stichtag, an dem das Fenster endet ("YYYY-MM-DD")
// ============================================================

const LIVESCORES_SEASON = {
  "season": {
    "ncaab": {
      "2026-11-01": {
        windowStart: "2026-11-01",
        windowEnd: "2026-11-01",
        windowDays: 1,
        daysInWindow: 1,
        minGames: 1,
        leagueAvg: { fg: 38.9, ft: 74.4 },
        players: [
          { rank: 1, name: "Brady Koehler", team: "ND", games: 1, min: 25, pts: 16, reb: 8, ast: 1, stl: 2, blk: 2, to: 0, tpm: 1, fgPct: 46.2, ftPct: 75, composite: 7.24, zScores: { pts: 1.28, reb: 1.55, ast: -0.46, stl: 0.62, blk: 2.25, tpm: -0.19, fgImpact: 0.94, ftImpact: 0.03, to: 1.22 } },
          { rank: 2, name: "Braeden Smith", team: "ND", games: 1, min: 31, pts: 16, reb: 4, ast: 3, stl: 4, blk: 0, to: 1, tpm: 2, fgPct: 22.2, ftPct: 90.9, composite: 5.3, zScores: { pts: 1.28, reb: -0.08, ast: 0.79, stl: 2.31, blk: -0.56, tpm: 0.53, fgImpact: -1.5, ftImpact: 1.99, to: 0.54 } },
          { rank: 3, name: "Tyler Perkins", team: "Vill", games: 1, min: 35, pts: 18, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 5, fgPct: 50, ftPct: 33.3, composite: 4.78, zScores: { pts: 1.66, reb: -0.08, ast: 0.79, stl: -0.23, blk: -0.56, tpm: 2.69, fgImpact: 1.32, ftImpact: -1.35, to: 0.54 } },
          { rank: 4, name: "Braeden Shrewsberry", team: "ND", games: 1, min: 36, pts: 15, reb: 6, ast: 3, stl: 1, blk: 0, to: 0, tpm: 3, fgPct: 42.9, ftPct: 0, composite: 3.21, zScores: { pts: 1.09, reb: 0.73, ast: 0.79, stl: -0.23, blk: -0.56, tpm: 1.25, fgImpact: 0.55, ftImpact: -1.63, to: 1.22 } },
          { rank: 5, name: "Elijah Crawford", team: "Vill", games: 1, min: 25, pts: 12, reb: 3, ast: 5, stl: 3, blk: 0, to: 4, tpm: 0, fgPct: 57.1, ftPct: 100, composite: 2.95, zScores: { pts: 0.52, reb: -0.49, ast: 2.03, stl: 1.47, blk: -0.56, tpm: -0.91, fgImpact: 1.27, ftImpact: 1.12, to: -1.5 } },
          { rank: 6, name: "Jake Fiegen", team: "Vill", games: 1, min: 38, pts: 11, reb: 5, ast: 1, stl: 0, blk: 1, to: 0, tpm: 3, fgPct: 50, ftPct: 0, composite: 2.51, zScores: { pts: 0.33, reb: 0.33, ast: -0.46, stl: -1.07, blk: 0.84, tpm: 1.25, fgImpact: 0.88, ftImpact: -0.82, to: 1.22 } },
          { rank: 7, name: "Ethan Roberts", team: "ND", games: 1, min: 32, pts: 11, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgPct: 37.5, ftPct: 100, composite: -1.07, zScores: { pts: 0.33, reb: -0.9, ast: -1.08, stl: -0.23, blk: -0.56, tpm: -0.19, fgImpact: -0.11, ftImpact: 1.12, to: 0.54 } },
          { rank: 8, name: "Logan Duncomb", team: "ND", games: 1, min: 21, pts: 9, reb: 3, ast: 4, stl: 1, blk: 0, to: 3, tpm: 1, fgPct: 57.1, ftPct: 0, composite: -1.29, zScores: { pts: -0.05, reb: -0.49, ast: 1.41, stl: -0.23, blk: -0.56, tpm: -0.19, fgImpact: 1.27, ftImpact: -1.63, to: -0.82 } },
          { rank: 9, name: "Luigi Suigo", team: "Vill", games: 1, min: 24, pts: 7, reb: 5, ast: 0, stl: 0, blk: 1, to: 3, tpm: 1, fgPct: 50, ftPct: 0, composite: -1.76, zScores: { pts: -0.43, reb: 0.33, ast: -1.08, stl: -1.07, blk: 0.84, tpm: -0.19, fgImpact: 0.66, ftImpact: 0, to: -0.82 } },
          { rank: 10, name: "Kwame Evans Jr.", team: "Vill", games: 1, min: 22, pts: 7, reb: 7, ast: 0, stl: 1, blk: 2, to: 5, tpm: 0, fgPct: 28.6, ftPct: 75, composite: -2.13, zScores: { pts: -0.43, reb: 1.14, ast: -1.08, stl: -0.23, blk: 2.25, tpm: -0.91, fgImpact: -0.72, ftImpact: 0.03, to: -2.18 } },
          { rank: 11, name: "Tommy Ahneman", team: "ND", games: 1, min: 13, pts: 4, reb: 6, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgPct: 16.7, ftPct: 100, composite: -3.27, zScores: { pts: -1, reb: 0.73, ast: -1.08, stl: -0.23, blk: -0.56, tpm: -0.91, fgImpact: -1.33, ftImpact: 0.56, to: 0.54 } },
          { rank: 12, name: "Devin Royal", team: "Vill", games: 1, min: 32, pts: 5, reb: 8, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgPct: 0, ftPct: 83.3, composite: -3.5, zScores: { pts: -0.81, reb: 1.55, ast: -1.08, stl: -1.07, blk: -0.56, tpm: -0.91, fgImpact: -0.39, ftImpact: 0.59, to: -0.82 } },
          { rank: 13, name: "Darryl Simmons II", team: "Vill", games: 1, min: 15, pts: 5, reb: 1, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgPct: 28.6, ftPct: 0, composite: -4.02, zScores: { pts: -0.81, reb: -1.3, ast: 0.79, stl: -1.07, blk: -0.56, tpm: -0.19, fgImpact: -0.72, ftImpact: 0, to: -0.14 } },
          { rank: 14, name: "Logan Imes", team: "ND", games: 1, min: 15, pts: 0, reb: 0, ast: 1, stl: 3, blk: 0, to: 1, tpm: 0, fgPct: 0, ftPct: 0, composite: -4.17, zScores: { pts: -1.77, reb: -1.71, ast: -0.46, stl: 1.47, blk: -0.56, tpm: -0.91, fgImpact: -0.78, ftImpact: 0, to: 0.54 } },
          { rank: 15, name: "Jonathan Sanderson", team: "ND", games: 1, min: 10, pts: 3, reb: 1, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgPct: 16.7, ftPct: 0, composite: -4.78, zScores: { pts: -1.19, reb: -1.3, ast: 0.17, stl: -0.23, blk: -0.56, tpm: -0.19, fgImpact: -1.33, ftImpact: 0, to: -0.14 } }
        ]
      },
      "2026-11-02": {
        windowStart: "2026-11-01",
        windowEnd: "2026-11-02",
        windowDays: 2,
        daysInWindow: 2,
        minGames: 1,
        leagueAvg: { fg: 42.9, ft: 79.4 },
        players: [
          { rank: 1, name: "Brady Koehler", team: "ND", games: 1, min: 25, pts: 16, reb: 8, ast: 1, stl: 2, blk: 2, to: 0, tpm: 1, fgPct: 46.2, ftPct: 75, composite: 7.43, zScores: { pts: 1.15, reb: 1.91, ast: -0.36, stl: 0.73, blk: 2.67, tpm: 0, fgImpact: 0.42, ftImpact: -0.22, to: 1.12 } },
          { rank: 2, name: "Braeden Smith", team: "ND", games: 1, min: 31, pts: 16, reb: 4, ast: 3, stl: 4, blk: 0, to: 1, tpm: 2, fgPct: 22.2, ftPct: 90.9, composite: 5.16, zScores: { pts: 1.15, reb: 0.15, ast: 0.97, stl: 2.48, blk: -0.53, tpm: 0.77, fgImpact: -1.9, ftImpact: 1.59, to: 0.48 } },
          { rank: 3, name: "Roman Domon", team: "Mur", games: 1, min: 28, pts: 22, reb: 5, ast: 2, stl: 1, blk: 1, to: 4, tpm: 1, fgPct: 50, ftPct: 100, composite: 5, zScores: { pts: 2.19, reb: 0.59, ast: 0.31, stl: -0.15, blk: 1.07, tpm: 0, fgImpact: 1.15, ftImpact: 1.29, to: -1.44 } },
          { rank: 4, name: "Tyler Perkins", team: "Vill", games: 1, min: 35, pts: 18, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 5, fgPct: 50, ftPct: 33.3, composite: 4.64, zScores: { pts: 1.5, reb: 0.15, ast: 0.97, stl: -0.15, blk: -0.53, tpm: 3.1, fgImpact: 0.86, ftImpact: -1.73, to: 0.48 } },
          { rank: 5, name: "Elijah Crawford", team: "Vill", games: 1, min: 25, pts: 12, reb: 3, ast: 5, stl: 3, blk: 0, to: 4, tpm: 0, fgPct: 57.1, ftPct: 100, composite: 3.37, zScores: { pts: 0.46, reb: -0.29, ast: 2.31, stl: 1.6, blk: -0.53, tpm: -0.77, fgImpact: 1.01, ftImpact: 1.03, to: -1.44 } },
          { rank: 6, name: "Braeden Shrewsberry", team: "ND", games: 1, min: 36, pts: 15, reb: 6, ast: 3, stl: 1, blk: 0, to: 0, tpm: 3, fgPct: 42.9, ftPct: 0, composite: 2.96, zScores: { pts: 0.98, reb: 1.03, ast: 0.97, stl: -0.15, blk: -0.53, tpm: 1.55, fgImpact: -0.01, ftImpact: -1.99, to: 1.12 } },
          { rank: 7, name: "Talis Soulhac", team: "Mur", games: 1, min: 21, pts: 13, reb: 2, ast: 3, stl: 3, blk: 0, to: 1, tpm: 0, fgPct: 40, ftPct: 90, composite: 2.83, zScores: { pts: 0.63, reb: -0.74, ast: 0.97, stl: 1.6, blk: -0.53, tpm: -0.77, fgImpact: -0.15, ftImpact: 1.33, to: 0.48 } },
          { rank: 8, name: "Jake Fiegen", team: "Vill", games: 1, min: 38, pts: 11, reb: 5, ast: 1, stl: 0, blk: 1, to: 0, tpm: 3, fgPct: 50, ftPct: 0, composite: 2.81, zScores: { pts: 0.29, reb: 0.59, ast: -0.36, stl: -1.02, blk: 1.07, tpm: 1.55, fgImpact: 0.57, ftImpact: -1, to: 1.12 } },
          { rank: 9, name: "Brayden Shorter", team: "Mur", games: 1, min: 21, pts: 13, reb: 3, ast: 0, stl: 2, blk: 0, to: 1, tpm: 3, fgPct: 55.6, ftPct: 0, composite: 2.69, zScores: { pts: 0.63, reb: -0.29, ast: -1.03, stl: 0.73, blk: -0.53, tpm: 1.55, fgImpact: 1.15, ftImpact: 0, to: 0.48 } },
          { rank: 10, name: "Brigham Rogers", team: "Mur", games: 1, min: 26, pts: 10, reb: 5, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgPct: 57.1, ftPct: 50, composite: 0.88, zScores: { pts: 0.12, reb: 0.59, ast: 0.97, stl: -0.15, blk: -0.53, tpm: -0.77, fgImpact: 1.01, ftImpact: -1.48, to: 1.12 } },
          { rank: 11, name: "Kaden Magwood", team: "Mur", games: 1, min: 18, pts: 15, reb: 3, ast: 1, stl: 0, blk: 0, to: 4, tpm: 1, fgPct: 62.5, ftPct: 100, composite: -0.05, zScores: { pts: 0.98, reb: -0.29, ast: -0.36, stl: -1.02, blk: -0.53, tpm: 0, fgImpact: 1.59, ftImpact: 1.03, to: -1.44 } },
          { rank: 12, name: "Ethan Roberts", team: "ND", games: 1, min: 32, pts: 11, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgPct: 37.5, ftPct: 100, composite: -1.08, zScores: { pts: 0.29, reb: -0.74, ast: -1.03, stl: -0.15, blk: -0.53, tpm: 0, fgImpact: -0.44, ftImpact: 1.03, to: 0.48 } },
          { rank: 13, name: "Luigi Suigo", team: "Vill", games: 1, min: 24, pts: 7, reb: 5, ast: 0, stl: 0, blk: 1, to: 3, tpm: 1, fgPct: 50, ftPct: 0, composite: -1.16, zScores: { pts: -0.4, reb: 0.59, ast: -1.03, stl: -1.02, blk: 1.07, tpm: 0, fgImpact: 0.43, ftImpact: 0, to: -0.8 } },
          { rank: 14, name: "Logan Duncomb", team: "ND", games: 1, min: 21, pts: 9, reb: 3, ast: 4, stl: 1, blk: 0, to: 3, tpm: 1, fgPct: 57.1, ftPct: 0, composite: -1.18, zScores: { pts: -0.06, reb: -0.29, ast: 1.64, stl: -0.15, blk: -0.53, tpm: 0, fgImpact: 1.01, ftImpact: -1.99, to: -0.8 } },
          { rank: 15, name: "Kwame Evans Jr.", team: "Vill", games: 1, min: 22, pts: 7, reb: 7, ast: 0, stl: 1, blk: 2, to: 5, tpm: 0, fgPct: 28.6, ftPct: 75, composite: -1.53, zScores: { pts: -0.4, reb: 1.47, ast: -1.03, stl: -0.15, blk: 2.67, tpm: -0.77, fgImpact: -1.02, ftImpact: -0.22, to: -2.08 } },
          { rank: 16, name: "Lachlan Crate", team: "Mur", games: 1, min: 16, pts: 2, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgPct: 33.3, ftPct: 0, composite: -2.49, zScores: { pts: -1.27, reb: -0.29, ast: -1.03, stl: -1.02, blk: 1.07, tpm: -0.77, fgImpact: -0.29, ftImpact: 0, to: 1.12 } },
          { rank: 17, name: "Ben Shtolzberg", team: "Mur", games: 1, min: 15, pts: 6, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgPct: 66.7, ftPct: 100, composite: -2.51, zScores: { pts: -0.58, reb: -0.29, ast: -1.03, stl: -1.02, blk: -0.53, tpm: -0.77, fgImpact: 0.72, ftImpact: 0.52, to: 0.48 } },
          { rank: 18, name: "Tommy Ahneman", team: "ND", games: 1, min: 13, pts: 4, reb: 6, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgPct: 16.7, ftPct: 100, composite: -2.98, zScores: { pts: -0.92, reb: 1.03, ast: -1.03, stl: -0.15, blk: -0.53, tpm: -0.77, fgImpact: -1.6, ftImpact: 0.52, to: 0.48 } },
          { rank: 19, name: "Devin Royal", team: "Vill", games: 1, min: 32, pts: 5, reb: 8, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgPct: 0, ftPct: 83.3, composite: -3.14, zScores: { pts: -0.75, reb: 1.91, ast: -1.03, stl: -1.02, blk: -0.53, tpm: -0.77, fgImpact: -0.44, ftImpact: 0.3, to: -0.8 } },
          { rank: 20, name: "Logan Imes", team: "ND", games: 1, min: 15, pts: 0, reb: 0, ast: 1, stl: 3, blk: 0, to: 1, tpm: 0, fgPct: 0, ftPct: 0, composite: -3.69, zScores: { pts: -1.61, reb: -1.62, ast: -0.36, stl: 1.6, blk: -0.53, tpm: -0.77, fgImpact: -0.87, ftImpact: 0, to: 0.48 } },
          { rank: 21, name: "Darryl Simmons II", team: "Vill", games: 1, min: 15, pts: 5, reb: 1, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgPct: 28.6, ftPct: 0, composite: -3.69, zScores: { pts: -0.75, reb: -1.18, ast: 0.97, stl: -1.02, blk: -0.53, tpm: 0, fgImpact: -1.02, ftImpact: 0, to: -0.16 } },
          { rank: 22, name: "Jonathan Sanderson", team: "ND", games: 1, min: 10, pts: 3, reb: 1, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgPct: 16.7, ftPct: 0, composite: -4.41, zScores: { pts: -1.09, reb: -1.18, ast: 0.31, stl: -0.15, blk: -0.53, tpm: 0, fgImpact: -1.6, ftImpact: 0, to: -0.16 } },
          { rank: 23, name: "Mathis Courbon", team: "Mur", games: 1, min: 12, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgPct: 100, ftPct: 0, composite: -4.54, zScores: { pts: -1.27, reb: -1.62, ast: -1.03, stl: -1.02, blk: -0.53, tpm: -0.77, fgImpact: 0.58, ftImpact: 0, to: 1.12 } },
          { rank: 24, name: "Christian Jones", team: "Mur", games: 1, min: 17, pts: 2, reb: 1, ast: 2, stl: 2, blk: 0, to: 4, tpm: 0, fgPct: 20, ftPct: 0, composite: -5.32, zScores: { pts: -1.27, reb: -1.18, ast: 0.31, stl: 0.73, blk: -0.53, tpm: -0.77, fgImpact: -1.17, ftImpact: 0, to: -1.44 } }
        ]
      }
    }
  }
};
