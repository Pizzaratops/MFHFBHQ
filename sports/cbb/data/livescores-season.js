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
        leagueAvg: { fg: 45.5, ft: 76 },
        players: [
          { rank: 1, name: "Joey Chammaa", team: "SJSU", games: 1, min: 36, pts: 27, reb: 4, ast: 6, stl: 2, blk: 0, to: 3, tpm: 3, fgPct: 66.7, ftPct: 100, composite: 10.73, zScores: { pts: 2.8, reb: 0.27, ast: 2.24, stl: 0.92, blk: -0.47, tpm: 1.43, fgImpact: 1.32, ftImpact: 3.14, to: -0.93 } },
          { rank: 2, name: "Brady Koehler", team: "ND", games: 1, min: 25, pts: 16, reb: 8, ast: 1, stl: 2, blk: 2, to: 0, tpm: 1, fgPct: 46.2, ftPct: 75, composite: 7.85, zScores: { pts: 1.06, reb: 1.9, ast: -0.45, stl: 0.92, blk: 3.44, tpm: -0.06, fgImpact: 0.06, ftImpact: -0.04, to: 1.04 } },
          { rank: 3, name: "Mekhi Mason", team: "SJSU", games: 1, min: 31, pts: 26, reb: 7, ast: 3, stl: 2, blk: 1, to: 7, tpm: 5, fgPct: 50, ftPct: 83.3, composite: 7.51, zScores: { pts: 2.64, reb: 1.49, ast: 0.62, stl: 0.92, blk: 1.48, tpm: 2.93, fgImpact: 0.5, ftImpact: 0.48, to: -3.56 } },
          { rank: 4, name: "Braeden Smith", team: "ND", games: 1, min: 31, pts: 16, reb: 4, ast: 3, stl: 4, blk: 0, to: 1, tpm: 2, fgPct: 22.2, ftPct: 90.9, composite: 5.81, zScores: { pts: 1.06, reb: 0.27, ast: 0.62, stl: 2.93, blk: -0.47, tpm: 0.69, fgImpact: -1.46, ftImpact: 1.79, to: 0.38 } },
          { rank: 5, name: "Shey Eberwein", team: "UTSA", games: 1, min: 19, pts: 15, reb: 2, ast: 4, stl: 2, blk: 0, to: 1, tpm: 2, fgPct: 100, ftPct: 75, composite: 4.89, zScores: { pts: 0.9, reb: -0.55, ast: 1.16, stl: 0.92, blk: -0.47, tpm: 0.69, fgImpact: 1.89, ftImpact: -0.04, to: 0.38 } },
          { rank: 6, name: "Roman Domon", team: "Mur", games: 1, min: 28, pts: 22, reb: 5, ast: 2, stl: 1, blk: 1, to: 4, tpm: 1, fgPct: 50, ftPct: 100, composite: 4.33, zScores: { pts: 2.01, reb: 0.68, ast: 0.09, stl: -0.08, blk: 1.48, tpm: -0.06, fgImpact: 0.5, ftImpact: 1.31, to: -1.59 } },
          { rank: 7, name: "Tyler Perkins", team: "Vill", games: 1, min: 35, pts: 18, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 5, fgPct: 50, ftPct: 33.3, composite: 4, zScores: { pts: 1.37, reb: 0.27, ast: 0.62, stl: -0.08, blk: -0.47, tpm: 2.93, fgImpact: 0.37, ftImpact: -1.4, to: 0.38 } },
          { rank: 8, name: "Youssouf Traore", team: "UTEP", games: 1, min: 26, pts: 18, reb: 7, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgPct: 70, ftPct: 80, composite: 3.48, zScores: { pts: 1.37, reb: 1.49, ast: -0.99, stl: -0.08, blk: -0.47, tpm: -0.81, fgImpact: 1.7, ftImpact: 0.22, to: 1.04 } },
          { rank: 9, name: "Robert Vaihola", team: "SJSU", games: 1, min: 27, pts: 13, reb: 11, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgPct: 100, ftPct: 50, composite: 3.33, zScores: { pts: 0.58, reb: 3.12, ast: -0.45, stl: -0.08, blk: -0.47, tpm: -0.81, fgImpact: 2.27, ftImpact: -0.57, to: -0.28 } },
          { rank: 10, name: "Talis Soulhac", team: "Mur", games: 1, min: 22, pts: 13, reb: 2, ast: 3, stl: 3, blk: 0, to: 1, tpm: 0, fgPct: 40, ftPct: 90, composite: 3.03, zScores: { pts: 0.58, reb: -0.55, ast: 0.62, stl: 1.93, blk: -0.47, tpm: -0.81, fgImpact: -0.19, ftImpact: 1.53, to: 0.38 } },
          { rank: 11, name: "KJ Tenner", team: "UTSA", games: 1, min: 31, pts: 11, reb: 1, ast: 6, stl: 2, blk: 0, to: 1, tpm: 1, fgPct: 55.6, ftPct: 0, composite: 2.96, zScores: { pts: 0.27, reb: -0.95, ast: 2.24, stl: 0.92, blk: -0.47, tpm: -0.06, fgImpact: 0.63, ftImpact: 0, to: 0.38 } },
          { rank: 12, name: "Jake Fiegen", team: "Vill", games: 1, min: 38, pts: 11, reb: 5, ast: 1, stl: 0, blk: 1, to: 0, tpm: 3, fgPct: 50, ftPct: 0, composite: 2.78, zScores: { pts: 0.27, reb: 0.68, ast: -0.45, stl: -1.08, blk: 1.48, tpm: 1.43, fgImpact: 0.25, ftImpact: -0.83, to: 1.04 } },
          { rank: 13, name: "Elijah Crawford", team: "Vill", games: 1, min: 25, pts: 12, reb: 3, ast: 5, stl: 3, blk: 0, to: 4, tpm: 0, fgPct: 57.1, ftPct: 100, composite: 2.67, zScores: { pts: 0.43, reb: -0.14, ast: 1.7, stl: 1.93, blk: -0.47, tpm: -0.81, fgImpact: 0.57, ftImpact: 1.05, to: -1.59 } },
          { rank: 14, name: "Braeden Shrewsberry", team: "ND", games: 1, min: 36, pts: 15, reb: 6, ast: 3, stl: 1, blk: 0, to: 0, tpm: 3, fgPct: 42.9, ftPct: 0, composite: 2.61, zScores: { pts: 0.9, reb: 1.08, ast: 0.62, stl: -0.08, blk: -0.47, tpm: 1.43, fgImpact: -0.26, ftImpact: -1.66, to: 1.04 } },
          { rank: 15, name: "KJ Martin Jr.", team: "SJSU", games: 1, min: 20, pts: 8, reb: 5, ast: 5, stl: 1, blk: 0, to: 1, tpm: 0, fgPct: 80, ftPct: 0, composite: 2.39, zScores: { pts: -0.21, reb: 0.68, ast: 1.7, stl: -0.08, blk: -0.47, tpm: -0.81, fgImpact: 1.2, ftImpact: 0, to: 0.38 } },
          { rank: 16, name: "Brayden Shorter", team: "Mur", games: 1, min: 21, pts: 13, reb: 3, ast: 0, stl: 2, blk: 0, to: 1, tpm: 3, fgPct: 55.6, ftPct: 0, composite: 2.35, zScores: { pts: 0.58, reb: -0.14, ast: -0.99, stl: 0.92, blk: -0.47, tpm: 1.43, fgImpact: 0.63, ftImpact: 0, to: 0.38 } },
          { rank: 17, name: "Augusto Cassia", team: "UTEP", games: 1, min: 28, pts: 10, reb: 4, ast: 5, stl: 2, blk: 0, to: 2, tpm: 1, fgPct: 50, ftPct: 33.3, composite: 1.05, zScores: { pts: 0.11, reb: 0.27, ast: 1.7, stl: 0.92, blk: -0.47, tpm: -0.06, fgImpact: 0.25, ftImpact: -1.4, to: -0.28 } },
          { rank: 18, name: "Jace Whiting", team: "UTEP", games: 1, min: 26, pts: 8, reb: 5, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgPct: 22.2, ftPct: 100, composite: 0.8, zScores: { pts: -0.21, reb: 0.68, ast: 0.09, stl: -0.08, blk: -0.47, tpm: 0.69, fgImpact: -1.46, ftImpact: 0.52, to: 1.04 } },
          { rank: 19, name: "Brigham Rogers", team: "Mur", games: 1, min: 26, pts: 10, reb: 5, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgPct: 57.1, ftPct: 50, composite: 0.52, zScores: { pts: 0.11, reb: 0.68, ast: 0.62, stl: -0.08, blk: -0.47, tpm: -0.81, fgImpact: 0.57, ftImpact: -1.14, to: 1.04 } },
          { rank: 20, name: "Preston Turner", team: "UTSA", games: 1, min: 20, pts: 15, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 4, fgPct: 33.3, ftPct: 50, composite: 0.35, zScores: { pts: 0.9, reb: 0.27, ast: -0.99, stl: -0.08, blk: -0.47, tpm: 2.18, fgImpact: -1.27, ftImpact: -0.57, to: 0.38 } },
          { rank: 21, name: "Leif Moeller", team: "UTEP", games: 1, min: 28, pts: 8, reb: 4, ast: 5, stl: 1, blk: 0, to: 1, tpm: 0, fgPct: 27.3, ftPct: 100, composite: -0.08, zScores: { pts: -0.21, reb: 0.27, ast: 1.7, stl: -0.08, blk: -0.47, tpm: -0.81, fgImpact: -1.4, ftImpact: 0.52, to: 0.38 } },
          { rank: 22, name: "Kwame Evans Jr.", team: "Vill", games: 1, min: 22, pts: 7, reb: 7, ast: 0, stl: 1, blk: 2, to: 5, tpm: 0, fgPct: 28.6, ftPct: 75, composite: -0.43, zScores: { pts: -0.36, reb: 1.49, ast: -0.99, stl: -0.08, blk: 3.44, tpm: -0.81, fgImpact: -0.83, ftImpact: -0.04, to: -2.24 } },
          { rank: 23, name: "Cam McDaniels", team: "UTEP", games: 1, min: 26, pts: 11, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 3, fgPct: 26.7, ftPct: 0, composite: -0.49, zScores: { pts: 0.27, reb: -0.14, ast: 0.09, stl: -0.08, blk: -0.47, tpm: 1.43, fgImpact: -1.97, ftImpact: 0, to: 0.38 } },
          { rank: 24, name: "Isaiah Coleman", team: "UTSA", games: 1, min: 13, pts: 12, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgPct: 83.3, ftPct: 0, composite: -0.54, zScores: { pts: 0.43, reb: -0.95, ast: -0.45, stl: -0.08, blk: -0.47, tpm: 0.69, fgImpact: 1.58, ftImpact: -1.66, to: 0.38 } },
          { rank: 25, name: "JaVaughn Hannah", team: "SJSU", games: 1, min: 29, pts: 5, reb: 1, ast: 6, stl: 0, blk: 0, to: 1, tpm: 1, fgPct: 40, ftPct: 0, composite: -0.82, zScores: { pts: -0.68, reb: -0.95, ast: 2.24, stl: -1.08, blk: -0.47, tpm: -0.06, fgImpact: -0.19, ftImpact: 0, to: 0.38 } },
          { rank: 26, name: "Ethan Roberts", team: "ND", games: 1, min: 32, pts: 11, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgPct: 37.5, ftPct: 100, composite: -0.89, zScores: { pts: 0.27, reb: -0.55, ast: -0.99, stl: -0.08, blk: -0.47, tpm: -0.06, fgImpact: -0.45, ftImpact: 1.05, to: 0.38 } },
          { rank: 27, name: "Kaden Magwood", team: "Mur", games: 1, min: 18, pts: 15, reb: 3, ast: 1, stl: 0, blk: 0, to: 4, tpm: 1, fgPct: 62.5, ftPct: 100, composite: -0.9, zScores: { pts: 0.9, reb: -0.14, ast: -0.45, stl: -1.08, blk: -0.47, tpm: -0.06, fgImpact: 0.94, ftImpact: 1.05, to: -1.59 } },
          { rank: 28, name: "Donovan Criss", team: "UTEP", games: 1, min: 21, pts: 13, reb: 0, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgPct: 100, ftPct: 37.5, composite: -0.95, zScores: { pts: 0.58, reb: -1.36, ast: -0.45, stl: -1.08, blk: 1.48, tpm: 0.69, fgImpact: 1.52, ftImpact: -3.36, to: 1.04 } },
          { rank: 29, name: "Josiah LeGree", team: "UTSA", games: 1, min: 16, pts: 7, reb: 2, ast: 2, stl: 1, blk: 1, to: 4, tpm: 1, fgPct: 33.3, ftPct: 100, composite: -1.05, zScores: { pts: -0.36, reb: -0.55, ast: 0.09, stl: -0.08, blk: 1.48, tpm: -0.06, fgImpact: -0.51, ftImpact: 0.52, to: -1.59 } },
          { rank: 30, name: "Luigi Suigo", team: "Vill", games: 1, min: 24, pts: 7, reb: 5, ast: 0, stl: 0, blk: 1, to: 3, tpm: 1, fgPct: 50, ftPct: 0, composite: -1.08, zScores: { pts: -0.36, reb: 0.68, ast: -0.99, stl: -1.08, blk: 1.48, tpm: -0.06, fgImpact: 0.19, ftImpact: 0, to: -0.93 } },
          { rank: 31, name: "Mookie Cook", team: "SJSU", games: 1, min: 20, pts: 6, reb: 5, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgPct: 60, ftPct: 0, composite: -1.23, zScores: { pts: -0.52, reb: 0.68, ast: 0.09, stl: -1.08, blk: -0.47, tpm: -0.81, fgImpact: 0.5, ftImpact: 0, to: 0.38 } },
          { rank: 32, name: "Logan Duncomb", team: "ND", games: 1, min: 21, pts: 9, reb: 3, ast: 4, stl: 1, blk: 0, to: 3, tpm: 1, fgPct: 57.1, ftPct: 0, composite: -1.66, zScores: { pts: -0.05, reb: -0.14, ast: 1.16, stl: -0.08, blk: -0.47, tpm: -0.06, fgImpact: 0.57, ftImpact: -1.66, to: -0.93 } },
          { rank: 33, name: "Isaiah Watts", team: "UTSA", games: 1, min: 26, pts: 6, reb: 1, ast: 1, stl: 3, blk: 0, to: 0, tpm: 2, fgPct: 18.2, ftPct: 0, composite: -1.67, zScores: { pts: -0.52, reb: -0.95, ast: -0.45, stl: 1.93, blk: -0.47, tpm: 0.69, fgImpact: -2.09, ftImpact: -0.83, to: 1.04 } },
          { rank: 34, name: "Lachlan Crate", team: "Mur", games: 1, min: 16, pts: 2, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgPct: 33.3, ftPct: 0, composite: -1.91, zScores: { pts: -1.15, reb: -0.14, ast: -0.99, stl: -1.08, blk: 1.48, tpm: -0.81, fgImpact: -0.25, ftImpact: 0, to: 1.04 } },
          { rank: 35, name: "Tommy Ahneman", team: "ND", games: 1, min: 13, pts: 4, reb: 6, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgPct: 16.7, ftPct: 100, composite: -2.4, zScores: { pts: -0.84, reb: 1.08, ast: -0.99, stl: -0.08, blk: -0.47, tpm: -0.81, fgImpact: -1.2, ftImpact: 0.52, to: 0.38 } },
          { rank: 36, name: "Mike Broxton Jr.", team: "UTSA", games: 1, min: 10, pts: 2, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgPct: 100, ftPct: 0, composite: -2.49, zScores: { pts: -1.15, reb: -1.36, ast: -0.99, stl: -1.08, blk: 1.48, tpm: -0.81, fgImpact: 0.38, ftImpact: 0, to: 1.04 } },
          { rank: 37, name: "Zine Eddine Bedri", team: "SJSU", games: 1, min: 13, pts: 6, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgPct: 100, ftPct: 0, composite: -2.55, zScores: { pts: -0.52, reb: -0.55, ast: -0.99, stl: -0.08, blk: -0.47, tpm: -0.81, fgImpact: 1.14, ftImpact: 0, to: -0.28 } },
          { rank: 38, name: "Ben Shtolzberg", team: "Mur", games: 1, min: 14, pts: 6, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgPct: 66.7, ftPct: 100, composite: -2.66, zScores: { pts: -0.52, reb: -0.14, ast: -0.99, stl: -1.08, blk: -0.47, tpm: -0.81, fgImpact: 0.44, ftImpact: 0.52, to: 0.38 } },
          { rank: 39, name: "Oliver Kullamae", team: "SJSU", games: 1, min: 15, pts: 4, reb: 2, ast: 1, stl: 2, blk: 0, to: 2, tpm: 1, fgPct: 25, ftPct: 50, composite: -2.85, zScores: { pts: -0.84, reb: -0.55, ast: -0.45, stl: 0.92, blk: -0.47, tpm: -0.06, fgImpact: -0.57, ftImpact: -0.57, to: -0.28 } },
          { rank: 40, name: "Logan Imes", team: "ND", games: 1, min: 15, pts: 0, reb: 0, ast: 1, stl: 3, blk: 0, to: 1, tpm: 0, fgPct: 0, ftPct: 0, composite: -2.88, zScores: { pts: -1.47, reb: -1.36, ast: -0.45, stl: 1.93, blk: -0.47, tpm: -0.81, fgImpact: -0.63, ftImpact: 0, to: 0.38 } },
          { rank: 41, name: "Devin Royal", team: "Vill", games: 1, min: 32, pts: 5, reb: 8, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgPct: 0, ftPct: 83.3, composite: -2.9, zScores: { pts: -0.68, reb: 1.9, ast: -0.99, stl: -1.08, blk: -0.47, tpm: -0.81, fgImpact: -0.32, ftImpact: 0.48, to: -0.93 } },
          { rank: 42, name: "Jayson Peterson", team: "UTSA", games: 1, min: 22, pts: 4, reb: 1, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgPct: 100, ftPct: 100, composite: -3.51, zScores: { pts: -0.84, reb: -0.95, ast: -0.99, stl: -0.08, blk: -0.47, tpm: -0.81, fgImpact: 0.38, ftImpact: 0.52, to: -0.28 } },
          { rank: 43, name: "Darryl Simmons II", team: "Vill", games: 1, min: 15, pts: 5, reb: 1, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgPct: 28.6, ftPct: 0, composite: -3.72, zScores: { pts: -0.68, reb: -0.95, ast: 0.62, stl: -1.08, blk: -0.47, tpm: -0.06, fgImpact: -0.83, ftImpact: 0, to: -0.28 } },
          { rank: 44, name: "Jonathan Sanderson", team: "ND", games: 1, min: 10, pts: 3, reb: 1, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgPct: 16.7, ftPct: 0, composite: -3.95, zScores: { pts: -0.99, reb: -0.95, ast: 0.09, stl: -0.08, blk: -0.47, tpm: -0.06, fgImpact: -1.2, ftImpact: 0, to: -0.28 } },
          { rank: 45, name: "Mathis Courbon", team: "Mur", games: 1, min: 12, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgPct: 100, ftPct: 0, composite: -4.45, zScores: { pts: -1.15, reb: -1.36, ast: -0.99, stl: -1.08, blk: -0.47, tpm: -0.81, fgImpact: 0.38, ftImpact: 0, to: 1.04 } },
          { rank: 46, name: "Isaiah Ward", team: "UTEP", games: 1, min: 10, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgPct: 0, ftPct: 0, composite: -4.8, zScores: { pts: -1.47, reb: 0.27, ast: -0.99, stl: -1.08, blk: -0.47, tpm: -0.81, fgImpact: -0.63, ftImpact: 0, to: 0.38 } },
          { rank: 47, name: "Christian Jones", team: "Mur", games: 1, min: 17, pts: 2, reb: 1, ast: 2, stl: 2, blk: 0, to: 4, tpm: 0, fgPct: 20, ftPct: 0, composite: -4.85, zScores: { pts: -1.15, reb: -0.95, ast: 0.09, stl: 0.92, blk: -0.47, tpm: -0.81, fgImpact: -0.89, ftImpact: 0, to: -1.59 } },
          { rank: 48, name: "Reese Miller", team: "UTEP", games: 1, min: 25, pts: 4, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgPct: 20, ftPct: 100, composite: -4.99, zScores: { pts: -0.84, reb: -1.36, ast: -0.45, stl: -1.08, blk: -0.47, tpm: -0.81, fgImpact: -0.89, ftImpact: 0.52, to: 0.38 } },
          { rank: 49, name: "Demari Williams", team: "UTSA", games: 1, min: 11, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgPct: 33.3, ftPct: 0, composite: -5.08, zScores: { pts: -1.15, reb: -1.36, ast: -0.99, stl: -1.08, blk: -0.47, tpm: -0.81, fgImpact: -0.25, ftImpact: 0, to: 1.04 } },
          { rank: 50, name: "JJ Kelly", team: "UTSA", games: 1, min: 18, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgPct: 0, ftPct: 0, composite: -5.64, zScores: { pts: -1.47, reb: -0.14, ast: -0.45, stl: -1.08, blk: -0.47, tpm: -0.81, fgImpact: -0.95, ftImpact: 0, to: -0.28 } }
        ]
      }
    }
  }
};
