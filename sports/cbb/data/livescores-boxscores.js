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
  },
    "2026-11-02": {
    games: [
      {
      id: "401913525",
      line: "Fairleigh Dickinson Knights 45 @ Illinois Fighting Illini 120 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "FDU", name: "Fairleigh Dickinson Knights", score: 45,
        players: [

        ]
      },
      home: {
        abbr: "Ill", name: "Illinois Fighting Illini", score: 120,
        players: [
          { name: "Jake Davis", min: 6, pts: 2, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -1.32, zScores: { pts: -0.781, reb: -0.022, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0.814, to: 0.809 } },
          { name: "Tomislav Ivisic", min: 16, pts: 10, reb: 4, ast: 1, stl: 0, blk: 2, to: 1, tpm: 2, fgm: 4, fga: 11, ftm: 0, fta: 0, composite: 2.43, zScores: { pts: 0.464, reb: 0.337, ast: -0.229, stl: -0.741, blk: 2.408, tpm: 1.165, fgImpact: -0.944, ftImpact: 0, to: -0.031 } },
          { name: "Ethan Brown", min: 23, pts: 12, reb: 9, ast: 7, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 9.2, zScores: { pts: 0.775, reb: 2.133, ast: 3.06, stl: 1.143, blk: -0.501, tpm: 1.165, fgImpact: 0.614, ftImpact: 0, to: 0.809 } },
          { name: "Quentin Coleman", min: 23, pts: 13, reb: 10, ast: 6, stl: 3, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 15, ftm: 1, fta: 2, composite: 7.28, zScores: { pts: 0.93, reb: 2.492, ast: 2.512, stl: 2.085, blk: -0.501, tpm: 1.165, fgImpact: -1.652, ftImpact: -0.565, to: 0.809 } },
          { name: "Andrej Stojakovic", min: 20, pts: 20, reb: 7, ast: 4, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 9, fga: 11, ftm: 1, fta: 4, composite: 5.84, zScores: { pts: 2.019, reb: 1.415, ast: 1.415, stl: -0.741, blk: 0.954, tpm: 0.249, fgImpact: 3.069, ftImpact: -2.508, to: -0.031 } },
          { name: "Zavier Zens", min: 24, pts: 12, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 10, ftm: 2, fta: 2, composite: 1.21, zScores: { pts: 0.775, reb: -0.022, ast: 0.319, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: -0.566, ftImpact: 0.814, to: -0.031 } },
          { name: "Landon Davis", min: 14, pts: 6, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 2, composite: -0.41, zScores: { pts: -0.159, reb: 0.337, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: 0.85, ftImpact: -1.943, to: 0.809 } },
          { name: "Zvonimir Ivisic", min: 11, pts: 4, reb: 5, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.38, zScores: { pts: -0.47, reb: 0.696, ast: -0.777, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: -0.283, ftImpact: 0, to: -0.031 } },
          { name: "Jason Jakstys", min: 13, pts: 2, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.42, zScores: { pts: -0.781, reb: -0.381, ast: 0.319, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.425, ftImpact: 0, to: -0.031 } },
          { name: "Stefan Vaaks", min: 19, pts: 20, reb: 3, ast: 4, stl: 0, blk: 0, to: 0, tpm: 5, fgm: 7, fga: 9, ftm: 1, fta: 2, composite: 8.55, zScores: { pts: 2.019, reb: -0.022, ast: 1.415, stl: -0.741, blk: -0.501, tpm: 3.916, fgImpact: 2.219, ftImpact: -0.565, to: 0.809 } },
          { name: "Blake Fagbemi", min: 10, pts: 8, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 0.69, zScores: { pts: 0.153, reb: -0.022, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: 0.897, ftImpact: 0, to: -0.031 } },
          { name: "Quentin McCoy", min: 1, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.33, zScores: { pts: -0.781, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.425, ftImpact: 0, to: 0.809 } },
          { name: "Lucas Morillo", min: 19, pts: 9, reb: 8, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 2.16, zScores: { pts: 0.308, reb: 1.774, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.52, ftImpact: 0.814, to: -0.031 } }
        ]
      }
    },
      {
      id: "401911390",
      line: "Gardner-Webb Runnin' Bulldogs @ UConn Huskies (Halftime)",
      completed: false,
      statusText: "Halftime",
      away: {
        abbr: "GWEB", name: "Gardner-Webb Runnin' Bulldogs", score: null,
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
      id: "401906863",
      line: "Chicago State Cougars @ Texas Longhorns (Halftime)",
      completed: false,
      statusText: "Halftime",
      away: {
        abbr: "CHST", name: "Chicago State Cougars", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Tex", name: "Texas Longhorns", score: null,
        players: [

        ]
      }
    },
      {
      id: "401925811",
      line: "La Salle Explorers @ Houston Cougars (4:22 - 1st)",
      completed: false,
      statusText: "4:22 - 1st",
      away: {
        abbr: "LaSal", name: "La Salle Explorers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Hou", name: "Houston Cougars", score: null,
        players: [

        ]
      }
    },
      {
      id: "401918947",
      line: "Chattanooga Mocs @ Louisville Cardinals (1:03 - 1st)",
      completed: false,
      statusText: "1:03 - 1st",
      away: {
        abbr: "UTC", name: "Chattanooga Mocs", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Lou", name: "Louisville Cardinals", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909784",
      line: "Fordham Rams @ Kansas Jayhawks (5:44 - 2nd)",
      completed: false,
      statusText: "5:44 - 2nd",
      away: {
        abbr: "Ford", name: "Fordham Rams", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Kan", name: "Kansas Jayhawks", score: null,
        players: [

        ]
      }
    },
      {
      id: "401916313",
      line: "Ohio State Buckeyes @ BYU Cougars (5:44 - 1st)",
      completed: false,
      statusText: "5:44 - 1st",
      away: {
        abbr: "OhSt", name: "Ohio State Buckeyes", score: null,
        players: [

        ]
      },
      home: {
        abbr: "BYU", name: "BYU Cougars", score: null,
        players: [

        ]
      }
    },
      {
      id: "401920886",
      line: "Saint Peter's Peacocks 42 @ Seton Hall Pirates 66 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SPU", name: "Saint Peter's Peacocks", score: 42,
        players: [

        ]
      },
      home: {
        abbr: "Seton", name: "Seton Hall Pirates", score: 66,
        players: [
          { name: "Terry Copeland Jr.", min: 19, pts: 10, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 2, fta: 5, composite: -2.47, zScores: { pts: 0.464, reb: -0.381, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 1.322, ftImpact: -2.101, to: -0.031 } },
          { name: "Roddie Anderson", min: 19, pts: 15, reb: 2, ast: 2, stl: 3, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 9, ftm: 4, fta: 6, composite: 5.15, zScores: { pts: 1.241, reb: -0.381, ast: 0.319, stl: 2.085, blk: -0.501, tpm: 2.082, fgImpact: -0.189, ftImpact: -0.316, to: 0.809 } },
          { name: "Elijah Fisher", min: 20, pts: 7, reb: 4, ast: 1, stl: 2, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: 3.33, zScores: { pts: -0.003, reb: 0.337, ast: -0.229, stl: 1.143, blk: 0.954, tpm: 0.249, fgImpact: 0.095, ftImpact: 0.814, to: -0.031 } },
          { name: "Del Jones", min: 19, pts: 0, reb: 2, ast: 2, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.59, zScores: { pts: -1.092, reb: -0.381, ast: 0.319, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: 0, to: -1.712 } },
          { name: "Simeon Wilcher", min: 19, pts: 8, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: -0.33, zScores: { pts: 0.153, reb: -0.022, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.52, ftImpact: -0.565, to: 0.809 } },
          { name: "Ilay Dolinski", min: 5, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -3.07, zScores: { pts: -0.47, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: 0.814, to: -0.031 } },
          { name: "Theo Airhienbuwa", min: 3, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.12, zScores: { pts: -0.936, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: -0.565, to: 0.809 } },
          { name: "Mayar Wol", min: 14, pts: 2, reb: 5, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.35, zScores: { pts: -0.781, reb: 0.696, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.33, ftImpact: 0, to: 0.809 } },
          { name: "Devin Williams", min: 15, pts: 5, reb: 3, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 1, fta: 2, composite: -0.82, zScores: { pts: -0.314, reb: -0.022, ast: -0.229, stl: -0.741, blk: 2.408, tpm: -0.668, fgImpact: -0.661, ftImpact: -0.565, to: -0.031 } },
          { name: "Abdulai Fanta Kabba", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Mihailo Petrovic", min: 14, pts: 3, reb: 2, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 1, composite: -1.16, zScores: { pts: -0.625, reb: -0.381, ast: 0.867, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.33, ftImpact: 0.407, to: 0.809 } },
          { name: "Kareem Thomas", min: 13, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -2.69, zScores: { pts: -0.47, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.047, ftImpact: -0.565, to: 0.809 } },
          { name: "Trey Parker", min: 18, pts: 0, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -2.74, zScores: { pts: -1.092, reb: -0.381, ast: 0.867, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -1.133, ftImpact: 0, to: -0.031 } },
          { name: "Darien Moore Jr.", min: 12, pts: 7, reb: 1, ast: 1, stl: 2, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: 2.62, zScores: { pts: -0.003, reb: -0.74, ast: -0.229, stl: 1.143, blk: 0.954, tpm: 0.249, fgImpact: 1.275, ftImpact: 0, to: -0.031 } },
          { name: "Rodney Brown Jr.", min: 11, pts: 0, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.24, zScores: { pts: -1.092, reb: -0.381, ast: -0.229, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401906779",
      line: "North Carolina Central Eagles 62 @ Georgia Bulldogs 78 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NCCU", name: "North Carolina Central Eagles", score: 62,
        players: [

        ]
      },
      home: {
        abbr: "UGA", name: "Georgia Bulldogs", score: 78,
        players: [
          { name: "Kanon Catchings", min: 28, pts: 16, reb: 3, ast: 1, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 5, fga: 10, ftm: 4, fta: 7, composite: 2.38, zScores: { pts: 1.397, reb: -0.022, ast: -0.229, stl: 0.201, blk: 0.954, tpm: 1.165, fgImpact: 0.236, ftImpact: -1.287, to: -0.031 } },
          { name: "James Scott", min: 24, pts: 6, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: 0.84, zScores: { pts: -0.159, reb: 1.056, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 1.275, ftImpact: 0, to: 0.809 } },
          { name: "Marcus Millender", min: 31, pts: 12, reb: 3, ast: 4, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 6, ftm: 9, fta: 10, composite: 2.57, zScores: { pts: 0.775, reb: -0.022, ast: 1.415, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: -1.463, ftImpact: 2.69, to: -1.712 } },
          { name: "Blue Cain", min: 31, pts: 15, reb: 6, ast: 1, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 7, fga: 12, ftm: 1, fta: 3, composite: -0.96, zScores: { pts: 1.241, reb: 1.056, ast: -0.229, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: 1.086, ftImpact: -1.536, to: -2.552 } },
          { name: "Freddie Dilione V", min: 23, pts: 2, reb: 3, ast: 3, stl: 4, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 1, composite: -0.54, zScores: { pts: -0.781, reb: -0.022, ast: 0.867, stl: 3.027, blk: -0.501, tpm: -0.668, fgImpact: -1.463, ftImpact: -0.972, to: -0.031 } },
          { name: "David Ugonna Ike", min: 5, pts: 1, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -3.18, zScores: { pts: -0.936, reb: -0.74, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: -0.565, to: 0.809 } },
          { name: "Mading Kuany", min: 8, pts: 6, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.95, zScores: { pts: -0.159, reb: -0.022, ast: -0.777, stl: -0.741, blk: 0.954, tpm: 1.165, fgImpact: -0.283, ftImpact: 0, to: 0.809 } },
          { name: "Andrew Osasuyi", min: 11, pts: 4, reb: 4, ast: 0, stl: 1, blk: 3, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 3.77, zScores: { pts: -0.47, reb: 0.337, ast: -0.777, stl: 0.201, blk: 3.863, tpm: -0.668, fgImpact: 0.472, ftImpact: 0, to: 0.809 } },
          { name: "Brady Dunlap", min: 22, pts: 9, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 8, ftm: 4, fta: 5, composite: -2.21, zScores: { pts: 0.308, reb: 0.337, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: -1.416, ftImpact: 0.656, to: -0.872 } },
          { name: "Donovan Williams Jr.", min: 18, pts: 7, reb: 2, ast: 2, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: 1.75, zScores: { pts: -0.003, reb: -0.381, ast: 0.319, stl: 1.143, blk: 0.954, tpm: -0.668, fgImpact: 0.142, ftImpact: -0.565, to: 0.809 } }
        ]
      }
    },
      {
      id: "401911374",
      line: "Charleston Southern Buccaneers @ South Florida Bulls (End of 2nd)",
      completed: false,
      statusText: "End of 2nd",
      away: {
        abbr: "CHSO", name: "Charleston Southern Buccaneers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "SoFL", name: "South Florida Bulls", score: null,
        players: [

        ]
      }
    },
      {
      id: "401928995",
      line: "Western Illinois Leathernecks @ Valparaiso Beacons (5:05 - 2nd)",
      completed: false,
      statusText: "5:05 - 2nd",
      away: {
        abbr: "WIU", name: "Western Illinois Leathernecks", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Valpa", name: "Valparaiso Beacons", score: null,
        players: [

        ]
      }
    },
      {
      id: "401927368",
      line: "IU Kokomo Cougars 70 @ Evansville Purple Aces 80 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "IUK", name: "IU Kokomo Cougars", score: 70,
        players: [

        ]
      },
      home: {
        abbr: "Evans", name: "Evansville Purple Aces", score: 80,
        players: [
          { name: "James Dyson-Merwe", min: 22, pts: 8, reb: 5, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 1, composite: -1.25, zScores: { pts: 0.153, reb: 0.696, ast: -0.229, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.945, ftImpact: -0.972, to: -0.872 } },
          { name: "AJ Casey", min: 31, pts: 19, reb: 8, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 8, fga: 15, ftm: 2, fta: 2, composite: 5.99, zScores: { pts: 1.863, reb: 1.774, ast: 0.867, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.756, ftImpact: 0.814, to: -0.031 } },
          { name: "Bryce Quinet", min: 33, pts: 10, reb: 3, ast: 11, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 12, ftm: 3, fta: 3, composite: 6.49, zScores: { pts: 0.464, reb: -0.022, ast: 5.253, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: -2.124, ftImpact: 1.221, to: 0.809 } },
          { name: "Max Langenfeld", min: 26, pts: 6, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -0.15, zScores: { pts: -0.159, reb: -0.381, ast: 0.319, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: -0.661, ftImpact: 0, to: 0.809 } },
          { name: "Makuei Riek", min: 27, pts: 10, reb: 3, ast: 0, stl: 5, blk: 2, to: 2, tpm: 2, fgm: 3, fga: 10, ftm: 2, fta: 2, composite: 5.78, zScores: { pts: 0.464, reb: -0.022, ast: -0.777, stl: 3.969, blk: 2.408, tpm: 1.165, fgImpact: -1.369, ftImpact: 0.814, to: -0.872 } },
          { name: "Bryce Renn", min: 2, pts: 2, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.74, zScores: { pts: -0.781, reb: -0.74, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.047, ftImpact: 0, to: -0.031 } },
          { name: "Jake Genschaw", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Yannick Pinas", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Gustav Winther", min: 8, pts: 7, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 5, fta: 6, composite: -1.13, zScores: { pts: -0.003, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.425, ftImpact: 1.063, to: 0.809 } },
          { name: "Caden Symons", min: 22, pts: 8, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: -1.24, zScores: { pts: 0.153, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.52, ftImpact: -0.565, to: 0.809 } },
          { name: "JR Kemm", min: 10, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 2, composite: -3.85, zScores: { pts: -0.314, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.472, ftImpact: -1.943, to: 0.809 } },
          { name: "Luke Ellspermann", min: 4, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.54, zScores: { pts: -1.092, reb: -0.74, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Aaron Gutman", min: 13, pts: 5, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -3.21, zScores: { pts: -0.314, reb: -1.099, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.095, ftImpact: -0.565, to: 0.809 } }
        ]
      }
    },
      {
      id: "401927360",
      line: "Monmouth (IL) Fighting Scots 41 @ Bradley Braves 85 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MNIL", name: "Monmouth (IL) Fighting Scots", score: 41,
        players: [

        ]
      },
      home: {
        abbr: "Brad", name: "Bradley Braves", score: 85,
        players: [
          { name: "Noah Williams", min: 26, pts: 5, reb: 5, ast: 0, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 9, ftm: 0, fta: 0, composite: -0.82, zScores: { pts: -0.314, reb: 0.696, ast: -0.777, stl: 0.201, blk: 0.954, tpm: 0.249, fgImpact: -1.794, ftImpact: 0, to: -0.031 } },
          { name: "Josh Ibukunoluwa", min: 23, pts: 14, reb: 7, ast: 0, stl: 2, blk: 1, to: 0, tpm: 3, fgm: 5, fga: 7, ftm: 1, fta: 2, composite: 7.52, zScores: { pts: 1.086, reb: 1.415, ast: -0.777, stl: 1.143, blk: 0.954, tpm: 2.082, fgImpact: 1.37, ftImpact: -0.565, to: 0.809 } },
          { name: "Xander Alarie", min: 24, pts: 13, reb: 6, ast: 4, stl: 1, blk: 2, to: 1, tpm: 1, fgm: 5, fga: 7, ftm: 2, fta: 4, composite: 6.47, zScores: { pts: 0.93, reb: 1.056, ast: 1.415, stl: 0.201, blk: 2.408, tpm: 0.249, fgImpact: 1.37, ftImpact: -1.129, to: -0.031 } },
          { name: "Dietrich Richardson", min: 25, pts: 8, reb: 8, ast: 2, stl: 5, blk: 0, to: 4, tpm: 0, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 1.93, zScores: { pts: 0.153, reb: 1.774, ast: 0.319, stl: 3.969, blk: -0.501, tpm: -0.668, fgImpact: -0.566, ftImpact: 0, to: -2.552 } },
          { name: "Trevon Payton", min: 24, pts: 12, reb: 1, ast: 4, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 4.13, zScores: { pts: 0.775, reb: -0.74, ast: 1.415, stl: 0.201, blk: -0.501, tpm: 1.165, fgImpact: 0.189, ftImpact: 0.814, to: 0.809 } },
          { name: "Ben Thornbrue", min: 22, pts: 17, reb: 4, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 7, fga: 9, ftm: 1, fta: 3, composite: 4.17, zScores: { pts: 1.552, reb: 0.337, ast: 0.867, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: 2.219, ftImpact: -1.536, to: 0.809 } },
          { name: "Gustavo Guimares", min: 6, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.64, zScores: { pts: -1.092, reb: -0.381, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.031 } },
          { name: "Dimitrije Pavlovic", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.45, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Max Gaspa", min: 16, pts: 4, reb: 1, ast: 6, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: 0.22, zScores: { pts: -0.47, reb: -0.74, ast: 2.512, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: -0.33, ftImpact: -0.565, to: 0.809 } },
          { name: "Kyle Grill", min: 16, pts: 5, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: -3.27, zScores: { pts: -0.314, reb: -0.022, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.039, ftImpact: -0.565, to: 0.809 } },
          { name: "Jackson Seastrunk", min: 13, pts: 7, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: 0.73, zScores: { pts: -0.003, reb: -0.022, ast: 0.867, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: -0.283, ftImpact: -0.565, to: 0.809 } },
          { name: "Gus Rugaard", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.45, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401925862",
      line: "Ottawa (KS) Braves @ Tulsa Golden Hurricane (0:43 - 2nd)",
      completed: false,
      statusText: "0:43 - 2nd",
      away: {
        abbr: "OUKS", name: "Ottawa (KS) Braves", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Tuls", name: "Tulsa Golden Hurricane", score: null,
        players: [

        ]
      }
    },
      {
      id: "401925096",
      line: "Texas A&M-Corpus Christi Islanders @ Texas State Bobcats (3:32 - 2nd)",
      completed: false,
      statusText: "3:32 - 2nd",
      away: {
        abbr: "AMCC", name: "Texas A&M-Corpus Christi Islanders", score: null,
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
      id: "401920732",
      line: "Binghamton Bearcats @ Northwestern Wildcats (1:54 - 2nd)",
      completed: false,
      statusText: "1:54 - 2nd",
      away: {
        abbr: "BING", name: "Binghamton Bearcats", score: null,
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
      id: "401919047",
      line: "Lindenwood Lions @ TCU Horned Frogs (5:11 - 2nd)",
      completed: false,
      statusText: "5:11 - 2nd",
      away: {
        abbr: "LIN", name: "Lindenwood Lions", score: null,
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
      id: "401919001",
      line: "UT Martin Skyhawks @ Tulane Green Wave (5:13 - 2nd)",
      completed: false,
      statusText: "5:13 - 2nd",
      away: {
        abbr: "UTM", name: "UT Martin Skyhawks", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Tul", name: "Tulane Green Wave", score: null,
        players: [

        ]
      }
    },
      {
      id: "401918967",
      line: "Southern Jaguars @ SMU Mustangs (5:03 - 2nd)",
      completed: false,
      statusText: "5:03 - 2nd",
      away: {
        abbr: "SOU", name: "Southern Jaguars", score: null,
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
      id: "401918051",
      line: "Adams State Grizzlies @ California Golden Bears (4:17 - 2nd)",
      completed: false,
      statusText: "4:17 - 2nd",
      away: {
        abbr: "ADSU", name: "Adams State Grizzlies", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Cal", name: "California Golden Bears", score: null,
        players: [

        ]
      }
    },
      {
      id: "401917510",
      line: "Willamette Bearcats @ Portland Pilots (5:27 - 2nd)",
      completed: false,
      statusText: "5:27 - 2nd",
      away: {
        abbr: "WLMT", name: "Willamette Bearcats", score: null,
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
      id: "401911248",
      line: "Lehigh Mountain Hawks @ Saint Louis Billikens (6:14 - 2nd)",
      completed: false,
      statusText: "6:14 - 2nd",
      away: {
        abbr: "LEH", name: "Lehigh Mountain Hawks", score: null,
        players: [

        ]
      },
      home: {
        abbr: "StLou", name: "Saint Louis Billikens", score: null,
        players: [

        ]
      }
    },
      {
      id: "401911228",
      line: "The Citadel Bulldogs @ Loyola Chicago Ramblers (4:52 - 2nd)",
      completed: false,
      statusText: "4:52 - 2nd",
      away: {
        abbr: "CIT", name: "The Citadel Bulldogs", score: null,
        players: [

        ]
      },
      home: {
        abbr: "LoyIL", name: "Loyola Chicago Ramblers", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909725",
      line: "Maryland Eastern Shore Hawks @ Wake Forest Demon Deacons (2:47 - 2nd)",
      completed: false,
      statusText: "2:47 - 2nd",
      away: {
        abbr: "UMES", name: "Maryland Eastern Shore Hawks", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Wake", name: "Wake Forest Demon Deacons", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909500",
      line: "West Georgia Wolves @ DePaul Blue Demons (1:31 - 2nd)",
      completed: false,
      statusText: "1:31 - 2nd",
      away: {
        abbr: "WGA", name: "West Georgia Wolves", score: null,
        players: [

        ]
      },
      home: {
        abbr: "DeP", name: "DePaul Blue Demons", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909490",
      line: "Kansas City Roos @ Creighton Bluejays (6:11 - 2nd)",
      completed: false,
      statusText: "6:11 - 2nd",
      away: {
        abbr: "KC", name: "Kansas City Roos", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Crei", name: "Creighton Bluejays", score: null,
        players: [

        ]
      }
    },
      {
      id: "401906801",
      line: "East Texas A&M Lions @ Oklahoma Sooners (6:53 - 2nd)",
      completed: false,
      statusText: "6:53 - 2nd",
      away: {
        abbr: "ETAM", name: "East Texas A&M Lions", score: null,
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
      id: "401925683",
      line: "Alcorn State Braves @ Ole Miss Rebels (17:17 - 2nd)",
      completed: false,
      statusText: "17:17 - 2nd",
      away: {
        abbr: "ALCN", name: "Alcorn State Braves", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Miss", name: "Ole Miss Rebels", score: null,
        players: [

        ]
      }
    },
      {
      id: "401929179",
      line: "Fresno Pacific Sunbirds @ Fresno State Bulldogs (0:05 - 1st)",
      completed: false,
      statusText: "0:05 - 1st",
      away: {
        abbr: "FPU", name: "Fresno Pacific Sunbirds", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Fres", name: "Fresno State Bulldogs", score: null,
        players: [

        ]
      }
    },
      {
      id: "401928351",
      line: "San Francisco State Gators @ UC Santa Barbara Gauchos (Halftime)",
      completed: false,
      statusText: "Halftime",
      away: {
        abbr: "SFST", name: "San Francisco State Gators", score: null,
        players: [

        ]
      },
      home: {
        abbr: "UCSB", name: "UC Santa Barbara Gauchos", score: null,
        players: [

        ]
      }
    },
      {
      id: "401925771",
      line: "Davidson Wildcats @ Washington State Cougars (Halftime)",
      completed: false,
      statusText: "Halftime",
      away: {
        abbr: "David", name: "Davidson Wildcats", score: null,
        players: [

        ]
      },
      home: {
        abbr: "WaSt", name: "Washington State Cougars", score: null,
        players: [

        ]
      }
    },
      {
      id: "401924894",
      line: "Utah Tech Trailblazers @ New Mexico Lobos (Halftime)",
      completed: false,
      statusText: "Halftime",
      away: {
        abbr: "UTU", name: "Utah Tech Trailblazers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "NM", name: "New Mexico Lobos", score: null,
        players: [

        ]
      }
    },
      {
      id: "401921697",
      line: "Long Beach State Beach @ Utah Utes (Halftime)",
      completed: false,
      statusText: "Halftime",
      away: {
        abbr: "LBSU", name: "Long Beach State Beach", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Utah", name: "Utah Utes", score: null,
        players: [

        ]
      }
    },
      {
      id: "401919039",
      line: "Incarnate Word Cardinals @ Oklahoma State Cowboys (Halftime)",
      completed: false,
      statusText: "Halftime",
      away: {
        abbr: "UIW", name: "Incarnate Word Cardinals", score: null,
        players: [

        ]
      },
      home: {
        abbr: "OkSt", name: "Oklahoma State Cowboys", score: null,
        players: [

        ]
      }
    },
      {
      id: "401916303",
      line: "North Dakota Fighting Hawks @ Minnesota Golden Gophers (Halftime)",
      completed: false,
      statusText: "Halftime",
      away: {
        abbr: "UND", name: "North Dakota Fighting Hawks", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Minn", name: "Minnesota Golden Gophers", score: null,
        players: [

        ]
      }
    },
      {
      id: "401911389",
      line: "Texas Southern Tigers @ Grand Canyon Lopes (1:49 - 1st)",
      completed: false,
      statusText: "1:49 - 1st",
      away: {
        abbr: "TXSO", name: "Texas Southern Tigers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "GrCan", name: "Grand Canyon Lopes", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909759",
      line: "Abilene Christian Wildcats @ Colorado Buffaloes (Halftime)",
      completed: false,
      statusText: "Halftime",
      away: {
        abbr: "ACU", name: "Abilene Christian Wildcats", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Col", name: "Colorado Buffaloes", score: null,
        players: [

        ]
      }
    },
      {
      id: "401925826",
      line: "Southwestern Christian U Eagles @ North Texas Mean Green (3:23 - 1st)",
      completed: false,
      statusText: "3:23 - 1st",
      away: {
        abbr: "SWCU", name: "Southwestern Christian U Eagles", score: null,
        players: [

        ]
      },
      home: {
        abbr: "N TX", name: "North Texas Mean Green", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909694",
      line: "Florida State Seminoles @ Florida A&M Rattlers (5:42 - 1st)",
      completed: false,
      statusText: "5:42 - 1st",
      away: {
        abbr: "FSU", name: "Florida State Seminoles", score: null,
        players: [

        ]
      },
      home: {
        abbr: "FAMU", name: "Florida A&M Rattlers", score: null,
        players: [

        ]
      }
    },
      {
      id: "401925947",
      line: "Weber State Wildcats @ Oregon State Beavers (11:21 - 1st)",
      completed: false,
      statusText: "11:21 - 1st",
      away: {
        abbr: "WEB", name: "Weber State Wildcats", score: null,
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
      id: "401922020",
      line: "Idaho State Bengals @ Utah State Aggies (8:07 - 1st)",
      completed: false,
      statusText: "8:07 - 1st",
      away: {
        abbr: "IDST", name: "Idaho State Bengals", score: null,
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
      id: "401917508",
      line: "Biola Eagles @ San Diego Toreros (9:59 - 1st)",
      completed: false,
      statusText: "9:59 - 1st",
      away: {
        abbr: "BIOL", name: "Biola Eagles", score: null,
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
      id: "401909750",
      line: "Northwestern State Demons @ Baylor Bears (12:45 - 1st)",
      completed: false,
      statusText: "12:45 - 1st",
      away: {
        abbr: "NWST", name: "Northwestern State Demons", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Baylor", name: "Baylor Bears", score: null,
        players: [

        ]
      }
    },
      {
      id: "401906769",
      line: "Miami Hurricanes 67 @ Florida Gators 77 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Mia-FL", name: "Miami Hurricanes", score: 67,
        players: [
          { name: "Caleb Gaskins", min: 15, pts: 4, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 4, composite: -4.11, zScores: { pts: -0.47, reb: -0.022, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.708, ftImpact: -1.129, to: -0.031 } },
          { name: "Malik Reneau", min: 23, pts: 5, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 2, fta: 4, composite: -3.82, zScores: { pts: -0.314, reb: 0.337, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: -1.463, ftImpact: -1.129, to: -0.031 } },
          { name: "Shelton Henderson", min: 32, pts: 7, reb: 9, ast: 0, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 13, ftm: 3, fta: 4, composite: -3.44, zScores: { pts: -0.003, reb: 2.133, ast: -0.777, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: -3.305, ftImpact: 0.249, to: -1.712 } },
          { name: "Somto Cyril", min: 28, pts: 13, reb: 7, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 5, fta: 6, composite: 4.34, zScores: { pts: 0.93, reb: 1.415, ast: -0.229, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 1.322, ftImpact: 1.063, to: 0.809 } },
          { name: "Acaden Lewis", min: 36, pts: 24, reb: 4, ast: 1, stl: 1, blk: 0, to: 4, tpm: 2, fgm: 9, fga: 20, ftm: 4, fta: 5, composite: 1.39, zScores: { pts: 2.641, reb: 0.337, ast: -0.229, stl: 0.201, blk: -0.501, tpm: 1.165, fgImpact: -0.33, ftImpact: 0.656, to: -2.552 } },
          { name: "Robert Miller III", min: 17, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: -0.75, zScores: { pts: -0.159, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.85, ftImpact: 0.814, to: 0.809 } },
          { name: "Egor Ryzhov", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.45, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Nick Dorn", min: 12, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.66, zScores: { pts: -0.625, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: -0.33, ftImpact: 0, to: 0.809 } },
          { name: "Dante Allen", min: 22, pts: 3, reb: 4, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 3, fta: 4, composite: -2.25, zScores: { pts: -0.625, reb: 0.337, ast: 0.867, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.133, ftImpact: 0.249, to: -0.031 } },
          { name: "Brent Bland", min: 13, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 1, composite: -5.18, zScores: { pts: -0.781, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.33, ftImpact: -0.972, to: -0.031 } }
        ]
      },
      home: {
        abbr: "Fla", name: "Florida Gators", score: 77,
        players: [
          { name: "Alex Condon", min: 26, pts: 11, reb: 7, ast: 3, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 3, fta: 4, composite: 4.17, zScores: { pts: 0.619, reb: 1.415, ast: 0.867, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: 0.567, ftImpact: 0.249, to: -0.031 } },
          { name: "Thomas Haugh", min: 38, pts: 19, reb: 10, ast: 4, stl: 2, blk: 1, to: 0, tpm: 4, fgm: 6, fga: 13, ftm: 3, fta: 8, composite: 7.94, zScores: { pts: 1.863, reb: 2.492, ast: 1.415, stl: 1.143, blk: 0.954, tpm: 2.999, fgImpact: -0.094, ftImpact: -3.637, to: 0.809 } },
          { name: "Rueben Chinyelu", min: 29, pts: 6, reb: 14, ast: 3, stl: 0, blk: 3, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 4, fta: 8, composite: 2.79, zScores: { pts: -0.159, reb: 3.928, ast: 0.867, stl: -0.741, blk: 3.863, tpm: -0.668, fgImpact: -0.33, ftImpact: -2.259, to: -1.712 } },
          { name: "Boogie Fland", min: 33, pts: 12, reb: 3, ast: 4, stl: 4, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 9, ftm: 6, fta: 10, composite: 1.75, zScores: { pts: 0.775, reb: -0.022, ast: 1.415, stl: 3.027, blk: -0.501, tpm: 1.165, fgImpact: -1.794, ftImpact: -1.445, to: -0.872 } },
          { name: "Denzel Aberdeen", min: 30, pts: 7, reb: 0, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 9, ftm: 1, fta: 1, composite: -4.15, zScores: { pts: -0.003, reb: -1.099, ast: 0.319, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.991, ftImpact: 0.407, to: -0.872 } },
          { name: "Arturas Butajevas", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.91, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.031 } },
          { name: "Domen Petrovic", min: 10, pts: 6, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.25, zScores: { pts: -0.159, reb: -0.022, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: 0.472, ftImpact: 0, to: 0.809 } },
          { name: "Urban Klavzar", min: 19, pts: 9, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 7, ftm: 1, fta: 2, composite: -1.21, zScores: { pts: 0.308, reb: -0.381, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: -0.236, ftImpact: -0.565, to: -0.031 } },
          { name: "Isaiah Brown", min: 14, pts: 7, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: 0.68, zScores: { pts: -0.003, reb: -0.022, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.85, ftImpact: 0.814, to: 0.809 } }
        ]
      }
    },
      {
      id: "401909562",
      line: "Army Black Knights 50 @ Duke Blue Devils 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ARMY", name: "Army Black Knights", score: 50,
        players: [

        ]
      },
      home: {
        abbr: "Duke", name: "Duke Blue Devils", score: 84,
        players: [
          { name: "Dame Sarr", min: 21, pts: 16, reb: 4, ast: 3, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 5, ftm: 6, fta: 6, composite: 4.49, zScores: { pts: 1.397, reb: 0.337, ast: 0.867, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 2.125, ftImpact: 2.441, to: -1.712 } },
          { name: "Joaquim Boumtje Boumtje", min: 19, pts: 15, reb: 7, ast: 0, stl: 1, blk: 3, to: 0, tpm: 1, fgm: 4, fga: 8, ftm: 6, fta: 6, composite: 9.63, zScores: { pts: 1.241, reb: 1.415, ast: -0.777, stl: 0.201, blk: 3.863, tpm: 0.249, fgImpact: 0.189, ftImpact: 2.441, to: 0.809 } },
          { name: "Patrick Ngongba II", min: 24, pts: 10, reb: 7, ast: 1, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 4, fta: 6, composite: 1.09, zScores: { pts: 0.464, reb: 1.415, ast: -0.229, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: 0.142, ftImpact: -0.316, to: -0.872 } },
          { name: "John Blackwell", min: 24, pts: 3, reb: 1, ast: 1, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -5.66, zScores: { pts: -0.625, reb: -0.74, ast: -0.229, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -1.463, ftImpact: 0, to: -2.552 } },
          { name: "Cayden Boozer", min: 20, pts: 9, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 2, fta: 4, composite: 0.55, zScores: { pts: 0.308, reb: -0.022, ast: 0.867, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -0.236, ftImpact: -1.129, to: 0.809 } },
          { name: "Cameron Williams", min: 11, pts: 4, reb: 3, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.39, zScores: { pts: -0.47, reb: -0.022, ast: -0.777, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: 0.095, ftImpact: 0, to: 0.809 } },
          { name: "Drew Scharnowski", min: 8, pts: 4, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.23, zScores: { pts: -0.47, reb: -0.381, ast: -0.229, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.85, ftImpact: 0, to: -0.031 } },
          { name: "Sebastian Wilkins", min: 19, pts: 6, reb: 2, ast: 1, stl: 4, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: 1.13, zScores: { pts: -0.159, reb: -0.381, ast: -0.229, stl: 3.027, blk: -0.501, tpm: -0.668, fgImpact: 0.095, ftImpact: 0.814, to: -0.872 } },
          { name: "Maxime Meyer", min: 4, pts: 2, reb: 1, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.44, zScores: { pts: -0.781, reb: -0.74, ast: -0.777, stl: -0.741, blk: 2.408, tpm: -0.668, fgImpact: 0.047, ftImpact: 0, to: 0.809 } },
          { name: "Bryson Howard", min: 10, pts: 4, reb: 1, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.49, zScores: { pts: -0.47, reb: -0.74, ast: -0.777, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: -0.283, ftImpact: 0, to: 0.809 } },
          { name: "Deron Rippey Jr.", min: 20, pts: 7, reb: 2, ast: 3, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: 2.25, zScores: { pts: -0.003, reb: -0.381, ast: 0.867, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: 0.095, ftImpact: 0.814, to: -0.031 } },
          { name: "Caleb Foster", min: 20, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -3.75, zScores: { pts: -0.47, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.661, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401924856",
      line: "Quinnipiac Bobcats 59 @ Michigan State Spartans 96 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "QUIN", name: "Quinnipiac Bobcats", score: 59,
        players: [

        ]
      },
      home: {
        abbr: "MSU", name: "Michigan State Spartans", score: 96,
        players: [
          { name: "Jordan Scott", min: 22, pts: 11, reb: 6, ast: 3, stl: 2, blk: 2, to: 1, tpm: 1, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 6.55, zScores: { pts: 0.619, reb: 1.056, ast: 0.867, stl: 1.143, blk: 2.408, tpm: 0.249, fgImpact: 0.236, ftImpact: 0, to: -0.031 } },
          { name: "Coen Carr", min: 25, pts: 12, reb: 8, ast: 0, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 4, fga: 8, ftm: 3, fta: 4, composite: 2.74, zScores: { pts: 0.775, reb: 1.774, ast: -0.777, stl: 0.201, blk: 0.954, tpm: 0.249, fgImpact: 0.189, ftImpact: 0.249, to: -0.872 } },
          { name: "Anton Bonke", min: 20, pts: 11, reb: 13, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 5, fga: 7, ftm: 1, fta: 3, composite: 4.21, zScores: { pts: 0.619, reb: 3.569, ast: -0.777, stl: -0.741, blk: 2.408, tpm: -0.668, fgImpact: 1.37, ftImpact: -1.536, to: -0.031 } },
          { name: "Jasiah Jervis", min: 23, pts: 4, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 1, fta: 2, composite: -3.38, zScores: { pts: -0.47, reb: -0.022, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -1.463, ftImpact: -0.565, to: -0.031 } },
          { name: "Jeremy Fears Jr.", min: 26, pts: 13, reb: 1, ast: 11, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 8, ftm: 2, fta: 2, composite: 5.49, zScores: { pts: 0.93, reb: -0.74, ast: 5.253, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.992, ftImpact: 0.814, to: -1.712 } },
          { name: "Colin Walton", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Brennan Walton", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.45, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Julius Avent", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.35, zScores: { pts: -0.781, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: 0, to: 0.809 } },
          { name: "Cam Ward", min: 16, pts: 9, reb: 5, ast: 1, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 5, fta: 6, composite: 2.49, zScores: { pts: 0.308, reb: 0.696, ast: -0.229, stl: 1.143, blk: 0.954, tpm: -0.668, fgImpact: 0.095, ftImpact: 1.063, to: -0.872 } },
          { name: "Kaleb Glenn", min: 12, pts: 11, reb: 2, ast: 0, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 5, fga: 5, ftm: 0, fta: 0, composite: 2.96, zScores: { pts: 0.619, reb: -0.381, ast: -0.777, stl: 0.201, blk: 0.954, tpm: 0.249, fgImpact: 2.125, ftImpact: 0, to: -0.031 } },
          { name: "Ethan Taylor", min: 14, pts: 1, reb: 2, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 3, composite: -4.12, zScores: { pts: -0.936, reb: -0.381, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0, ftImpact: -1.536, to: -0.031 } },
          { name: "Matthew Watkins", min: 2, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.97, zScores: { pts: -0.781, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.425, ftImpact: 0, to: 0.809 } },
          { name: "Carlos Medlock Jr.", min: 14, pts: 9, reb: 1, ast: 4, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 5, ftm: 0, fta: 4, composite: -0.82, zScores: { pts: 0.308, reb: -0.74, ast: 1.415, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 1.322, ftImpact: -3.886, to: 0.809 } },
          { name: "Kur Teng", min: 15, pts: 11, reb: 0, ast: 3, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 4.31, zScores: { pts: 0.619, reb: -1.099, ast: 0.867, stl: 0.201, blk: -0.501, tpm: 2.082, fgImpact: 0.52, ftImpact: 0.814, to: 0.809 } }
        ]
      }
    },
      {
      id: "401920679",
      line: "Monmouth Hawks 63 @ St. John's Red Storm 78 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MONM", name: "Monmouth Hawks", score: 63,
        players: [

        ]
      },
      home: {
        abbr: "StJon", name: "St. John's Red Storm", score: 78,
        players: [
          { name: "Ruben Prey", min: 25, pts: 2, reb: 4, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 5, ftm: 2, fta: 2, composite: -4.43, zScores: { pts: -0.781, reb: 0.337, ast: -0.229, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -1.888, ftImpact: 0.814, to: -1.712 } },
          { name: "Keyshawn Hall", min: 33, pts: 26, reb: 9, ast: 2, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 9, fga: 16, ftm: 7, fta: 7, composite: 8.61, zScores: { pts: 2.952, reb: 2.133, ast: 0.319, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: 1.181, ftImpact: 2.848, to: -1.712 } },
          { name: "Zsombor Maronka", min: 14, pts: 0, reb: 2, ast: 2, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 1, composite: -0.97, zScores: { pts: -1.092, reb: -0.381, ast: 0.319, stl: 0.201, blk: 2.408, tpm: -0.668, fgImpact: -0.755, ftImpact: -0.972, to: -0.031 } },
          { name: "Quinn Ellis", min: 34, pts: 8, reb: 5, ast: 7, stl: 5, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 3, composite: 7.04, zScores: { pts: 0.153, reb: 0.696, ast: 3.06, stl: 3.969, blk: -0.501, tpm: -0.668, fgImpact: 0.52, ftImpact: -0.158, to: -0.031 } },
          { name: "Ian Jackson", min: 22, pts: 15, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 6, fga: 12, ftm: 0, fta: 0, composite: 1.28, zScores: { pts: 1.241, reb: -0.381, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 2.082, fgImpact: 0.284, ftImpact: 0, to: -0.872 } },
          { name: "Babacar Sane", min: 10, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -3.42, zScores: { pts: -0.314, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.283, ftImpact: -0.565, to: 0.809 } },
          { name: "Reed Bailey", min: 16, pts: 5, reb: 5, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 3, fta: 4, composite: -1.1, zScores: { pts: -0.314, reb: 0.696, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: 0.249, to: -0.031 } },
          { name: "Casper Pohto", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.33, zScores: { pts: -0.781, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.425, ftImpact: 0, to: 0.809 } },
          { name: "Lefteris Liotopoulos", min: 19, pts: 3, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -2.85, zScores: { pts: -0.625, reb: -0.74, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -1.463, ftImpact: 0, to: 0.809 } },
          { name: "Tounde Yessoufou", min: 22, pts: 12, reb: 5, ast: 2, stl: 2, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 5, fta: 6, composite: 4.55, zScores: { pts: 0.775, reb: 0.696, ast: 0.319, stl: 1.143, blk: 0.954, tpm: 0.249, fgImpact: -0.614, ftImpact: 1.063, to: -0.031 } },
          { name: "Kyle Cuffe Jr.", min: 3, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.52, zScores: { pts: -1.092, reb: -1.099, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401921704",
      line: "Purdue Boilermakers 72 @ Gonzaga Bulldogs 78 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Pur", name: "Purdue Boilermakers", score: 72,
        players: [
          { name: "Caden Pierce", min: 29, pts: 7, reb: 6, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: 3.11, zScores: { pts: -0.003, reb: 1.056, ast: 0.867, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 1.275, ftImpact: 0, to: -0.031 } },
          { name: "Daniel Jacobsen", min: 27, pts: 22, reb: 7, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 9, fga: 11, ftm: 4, fta: 5, composite: 8.14, zScores: { pts: 2.33, reb: 1.415, ast: 0.319, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 3.069, ftImpact: 0.656, to: 0.809 } },
          { name: "Omer Mayer", min: 25, pts: 8, reb: 2, ast: 5, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 11, ftm: 3, fta: 4, composite: 0.19, zScores: { pts: 0.153, reb: -0.381, ast: 1.964, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -2.549, ftImpact: 0.249, to: 0.809 } },
          { name: "C.J. Cox", min: 36, pts: 11, reb: 3, ast: 2, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 11, ftm: 2, fta: 2, composite: 0.81, zScores: { pts: 0.619, reb: -0.022, ast: 0.319, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: -0.944, ftImpact: 0.814, to: -0.872 } },
          { name: "Gicarri Harris", min: 28, pts: 8, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 6, ftm: 2, fta: 3, composite: -0.12, zScores: { pts: 0.153, reb: 0.337, ast: 0.319, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: -0.661, ftImpact: -0.158, to: -0.031 } },
          { name: "Enzo Shahrvin", min: 8, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -6.71, zScores: { pts: -0.781, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: 0, to: -2.552 } },
          { name: "Raleigh Burgess", min: 4, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.77, zScores: { pts: -0.781, reb: -1.099, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: 0, to: 0.809 } },
          { name: "Luke Ertel", min: 10, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 1, composite: -4.7, zScores: { pts: -0.781, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.33, ftImpact: -0.972, to: 0.809 } },
          { name: "Antione West Jr", min: 20, pts: 10, reb: 1, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 4, fta: 6, composite: -1.99, zScores: { pts: 0.464, reb: -0.74, ast: 0.867, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.52, ftImpact: -0.316, to: -0.872 } },
          { name: "Jack Benter", min: 11, pts: 0, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -1.56, zScores: { pts: -1.092, reb: 0.337, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } }
        ]
      },
      home: {
        abbr: "Gonz", name: "Gonzaga Bulldogs", score: 78,
        players: [
          { name: "Braden Huff", min: 36, pts: 10, reb: 7, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 11, ftm: 2, fta: 4, composite: -0.88, zScores: { pts: 0.464, reb: 1.415, ast: 0.319, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.944, ftImpact: -1.129, to: -0.031 } },
          { name: "Massamba Diop", min: 16, pts: 7, reb: 2, ast: 1, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 0.26, zScores: { pts: -0.003, reb: -0.381, ast: -0.229, stl: -0.741, blk: 0.954, tpm: 0.249, fgImpact: 0.472, ftImpact: 0.814, to: -0.872 } },
          { name: "Davis Fogle", min: 34, pts: 22, reb: 5, ast: 2, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 18, ftm: 9, fta: 10, composite: 4.91, zScores: { pts: 2.33, reb: 0.696, ast: 0.319, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: -1.982, ftImpact: 2.69, to: -0.031 } },
          { name: "Xaivian Lee", min: 29, pts: 18, reb: 4, ast: 3, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 7, ftm: 7, fta: 9, composite: 5.19, zScores: { pts: 1.708, reb: 0.337, ast: 0.867, stl: -0.741, blk: -0.501, tpm: 2.082, fgImpact: 0.567, ftImpact: 0.905, to: -0.031 } },
          { name: "Isiah Harwell", min: 27, pts: 2, reb: 2, ast: 3, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 2, composite: -4.78, zScores: { pts: -0.781, reb: -0.381, ast: 0.867, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.708, ftImpact: -1.943, to: -0.872 } },
          { name: "Izan Almansa", min: 29, pts: 11, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 3, fta: 3, composite: 0.4, zScores: { pts: 0.619, reb: 0.337, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.945, ftImpact: 1.221, to: -0.031 } },
          { name: "Nathan De Sousa", min: 17, pts: 3, reb: 1, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -2.03, zScores: { pts: -0.625, reb: -0.74, ast: 1.415, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.425, ftImpact: -0.565, to: -0.031 } },
          { name: "Javon Bennett", min: 13, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -1.17, zScores: { pts: -0.314, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: -0.33, ftImpact: 0.814, to: 0.809 } }
        ]
      }
    },
      {
      id: "401925733",
      line: "Oakland Golden Grizzlies 68 @ Michigan Wolverines 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OAK", name: "Oakland Golden Grizzlies", score: 68,
        players: [

        ]
      },
      home: {
        abbr: "Mich", name: "Michigan Wolverines", score: 84,
        players: [
          { name: "Oscar Goodman", min: 22, pts: 6, reb: 5, ast: 2, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 8, ftm: 2, fta: 4, composite: 0.55, zScores: { pts: -0.159, reb: 0.696, ast: 0.319, stl: 1.143, blk: 0.954, tpm: -0.668, fgImpact: -1.416, ftImpact: -1.129, to: 0.809 } },
          { name: "J.P. Estrella", min: 21, pts: 15, reb: 12, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 7, fga: 9, ftm: 1, fta: 2, composite: 7.17, zScores: { pts: 1.241, reb: 3.21, ast: -0.229, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: 2.219, ftImpact: -0.565, to: 0.809 } },
          { name: "Roddy Gayle Jr.", min: 25, pts: 17, reb: 3, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 7, fga: 11, ftm: 3, fta: 4, composite: 3.92, zScores: { pts: 1.552, reb: -0.022, ast: 0.319, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 1.464, ftImpact: 0.249, to: 0.809 } },
          { name: "Trey McKenney", min: 35, pts: 17, reb: 4, ast: 2, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 5, fga: 12, ftm: 4, fta: 4, composite: 3.39, zScores: { pts: 1.552, reb: 0.337, ast: 0.319, stl: 0.201, blk: -0.501, tpm: 2.082, fgImpact: -0.519, ftImpact: 1.627, to: -1.712 } },
          { name: "Elliot Cadeau", min: 34, pts: 7, reb: 0, ast: 6, stl: 4, blk: 0, to: 5, tpm: 0, fgm: 1, fga: 5, ftm: 5, fta: 6, composite: -0.15, zScores: { pts: -0.003, reb: -1.099, ast: 2.512, stl: 3.027, blk: -0.501, tpm: -0.668, fgImpact: -1.086, ftImpact: 1.063, to: -3.392 } },
          { name: "Quinn Costello", min: 21, pts: 13, reb: 4, ast: 1, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: 4.57, zScores: { pts: 0.93, reb: 0.337, ast: -0.229, stl: 0.201, blk: 0.954, tpm: 2.082, fgImpact: -0.519, ftImpact: 0, to: 0.809 } },
          { name: "Jalen Reed", min: 17, pts: 6, reb: 8, ast: 0, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 2.89, zScores: { pts: -0.159, reb: 1.774, ast: -0.777, stl: 0.201, blk: 2.408, tpm: -0.668, fgImpact: 0.142, ftImpact: 0, to: -0.031 } },
          { name: "Marcus Moller", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.45, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Ricky Liburd", min: 14, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -4.5, zScores: { pts: -1.092, reb: -0.74, ast: 0.319, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.888, ftImpact: 0, to: 0.809 } },
          { name: "Kenny Noland", min: 10, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.73, zScores: { pts: -0.625, reb: -0.74, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.047, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401909771",
      line: "Memphis Tigers 80 @ Iowa State Cyclones 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Mem", name: "Memphis Tigers", score: 80,
        players: [
          { name: "Tylik Weeks", min: 35, pts: 8, reb: 3, ast: 4, stl: 1, blk: 1, to: 6, tpm: 0, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: -2, zScores: { pts: 0.153, reb: -0.022, ast: 1.415, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: -0.614, ftImpact: 0.814, to: -4.233 } },
          { name: "Maxim Logue", min: 12, pts: 0, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.1, zScores: { pts: -1.092, reb: 0.696, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Rihards Vavers", min: 38, pts: 15, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 9, ftm: 4, fta: 6, composite: 3.4, zScores: { pts: 1.241, reb: 0.696, ast: 0.319, stl: -0.741, blk: -0.501, tpm: 2.082, fgImpact: -0.189, ftImpact: -0.316, to: 0.809 } },
          { name: "Luke Almodovar", min: 28, pts: 18, reb: 8, ast: 2, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 12, ftm: 5, fta: 6, composite: 6.2, zScores: { pts: 1.708, reb: 1.774, ast: 0.319, stl: 1.143, blk: -0.501, tpm: 2.082, fgImpact: -0.519, ftImpact: 1.063, to: -0.872 } },
          { name: "Jayden Reid", min: 28, pts: 26, reb: 1, ast: 1, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 11, ftm: 12, fta: 14, composite: 7.36, zScores: { pts: 2.952, reb: -0.74, ast: -0.229, stl: 1.143, blk: -0.501, tpm: 1.165, fgImpact: 0.661, ftImpact: 2.939, to: -0.031 } },
          { name: "Jerry Deng", min: 6, pts: 5, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.06, zScores: { pts: -0.314, reb: -0.74, ast: -0.777, stl: -0.741, blk: 0.954, tpm: 0.249, fgImpact: -0.661, ftImpact: 0, to: -0.031 } },
          { name: "Corneilous Williams", min: 22, pts: 6, reb: 8, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 3, composite: -2.04, zScores: { pts: -0.159, reb: 1.774, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.52, ftImpact: -2.915, to: -0.031 } },
          { name: "Cello Jackson Jr.", min: 6, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.16, zScores: { pts: -1.092, reb: -0.74, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Josh Holloway", min: 18, pts: 2, reb: 2, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -1.43, zScores: { pts: -0.781, reb: -0.381, ast: -0.777, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: -0.755, ftImpact: 0.814, to: -0.031 } },
          { name: "Brandin Cummings", min: 7, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.15, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } }
        ]
      },
      home: {
        abbr: "IaSt", name: "Iowa State Cyclones", score: 76,
        players: [
          { name: "Tre Singleton", min: 28, pts: 11, reb: 11, ast: 1, stl: 2, blk: 1, to: 3, tpm: 0, fgm: 5, fga: 7, ftm: 1, fta: 2, composite: 3.76, zScores: { pts: 0.619, reb: 2.851, ast: -0.229, stl: 1.143, blk: 0.954, tpm: -0.668, fgImpact: 1.37, ftImpact: -0.565, to: -1.712 } },
          { name: "Blake Buchanan", min: 26, pts: 6, reb: 6, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 3, composite: 0.67, zScores: { pts: -0.159, reb: 1.056, ast: 0.319, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.095, ftImpact: -0.158, to: -0.031 } },
          { name: "Jaquan Johnson", min: 21, pts: 9, reb: 0, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 9, fta: 10, composite: -0.22, zScores: { pts: 0.308, reb: -1.099, ast: 0.867, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.888, ftImpact: 2.69, to: 0.809 } },
          { name: "Jamarion Batemon", min: 26, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 6, ftm: 0, fta: 1, composite: -6.49, zScores: { pts: -1.092, reb: -0.381, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -2.266, ftImpact: -0.972, to: -0.031 } },
          { name: "Tamin Lipsey", min: 34, pts: 12, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 13, ftm: 3, fta: 4, composite: -0.82, zScores: { pts: 0.775, reb: -0.381, ast: 0.319, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -1.699, ftImpact: 0.249, to: -0.031 } },
          { name: "Dominykas Pleta", min: 12, pts: 15, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 7, fga: 8, ftm: 1, fta: 2, composite: 0.24, zScores: { pts: 1.241, reb: -0.022, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 2.597, ftImpact: -0.565, to: -0.872 } },
          { name: "Taj Manning", min: 14, pts: 4, reb: 5, ast: 2, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 4, composite: 0.05, zScores: { pts: -0.47, reb: 0.696, ast: 0.319, stl: -0.741, blk: 2.408, tpm: -0.668, fgImpact: -0.33, ftImpact: -1.129, to: -0.031 } },
          { name: "Ryan Prather Jr.", min: 27, pts: 19, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 11, ftm: 4, fta: 6, composite: 2.05, zScores: { pts: 1.863, reb: -0.74, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 2.082, fgImpact: 0.661, ftImpact: -0.316, to: -0.031 } },
          { name: "Leon Bond III", min: 12, pts: 0, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.3, zScores: { pts: -1.092, reb: 0.337, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: -0.031 } }
        ]
      }
    },
      {
      id: "401921036",
      line: "Jackson State Tigers 42 @ Texas Tech Red Raiders 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "JKST", name: "Jackson State Tigers", score: 42,
        players: [

        ]
      },
      home: {
        abbr: "TxTch", name: "Texas Tech Red Raiders", score: 76,
        players: [
          { name: "Bassala Bagayoko", min: 15, pts: 4, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 1, composite: -1.06, zScores: { pts: -0.47, reb: 0.337, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.472, ftImpact: -0.972, to: 0.809 } },
          { name: "Darrion Williams", min: 23, pts: 1, reb: 5, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 1, fta: 2, composite: -3.85, zScores: { pts: -0.936, reb: 0.696, ast: 0.867, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.133, ftImpact: -0.565, to: -0.872 } },
          { name: "Donovan Atwell", min: 27, pts: 4, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 8, ftm: 4, fta: 5, composite: -5.03, zScores: { pts: -0.47, reb: -0.022, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -3.022, ftImpact: 0.656, to: -0.031 } },
          { name: "Cruz Davis", min: 31, pts: 15, reb: 6, ast: 5, stl: 6, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 7, ftm: 4, fta: 4, composite: 12.73, zScores: { pts: 1.241, reb: 1.056, ast: 1.964, stl: 4.911, blk: -0.501, tpm: 0.249, fgImpact: 1.37, ftImpact: 1.627, to: 0.809 } },
          { name: "Dra Gibbs-Lawhorn", min: 24, pts: 5, reb: 2, ast: 4, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: 0.27, zScores: { pts: -0.314, reb: -0.381, ast: 1.415, stl: 2.085, blk: -0.501, tpm: 0.249, fgImpact: -1.416, ftImpact: 0, to: -0.872 } },
          { name: "Trey Hall", min: 4, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.77, zScores: { pts: -0.781, reb: -1.099, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: 0, to: 0.809 } },
          { name: "LaTrell Hoover", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Marial Akuentok", min: 4, pts: 0, reb: 2, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.58, zScores: { pts: -1.092, reb: -0.381, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.872 } },
          { name: "Josiah Moseley", min: 24, pts: 13, reb: 8, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 5, fta: 8, composite: 2.99, zScores: { pts: 0.93, reb: 1.774, ast: -0.229, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: 0.945, ftImpact: -0.88, to: -0.031 } },
          { name: "Amari Barrett", min: 5, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 3, composite: -6.37, zScores: { pts: -0.781, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.425, ftImpact: -2.915, to: -0.031 } },
          { name: "Damarion Dennis", min: 23, pts: 22, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 8, fga: 12, ftm: 2, fta: 4, composite: 4.86, zScores: { pts: 2.33, reb: -0.022, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 2.999, fgImpact: 1.889, ftImpact: -1.129, to: 0.809 } },
          { name: "DaKari Spear", min: 18, pts: 8, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: -1.84, zScores: { pts: 0.153, reb: -1.099, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -0.283, ftImpact: 0.249, to: -0.031 } }
        ]
      }
    },
      {
      id: "401921104",
      line: "Bellarmine Knights 47 @ Vanderbilt Commodores 93 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BELL", name: "Bellarmine Knights", score: 47,
        players: [

        ]
      },
      home: {
        abbr: "Vand", name: "Vanderbilt Commodores", score: 93,
        players: [
          { name: "Chandler Bing", min: 22, pts: 11, reb: 3, ast: 1, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 6, ftm: 3, fta: 3, composite: 4.03, zScores: { pts: 0.619, reb: -0.022, ast: -0.229, stl: 2.085, blk: 0.954, tpm: -0.668, fgImpact: 0.945, ftImpact: 1.221, to: -0.872 } },
          { name: "Sebastian Williams-Adams", min: 23, pts: 9, reb: 9, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 2.71, zScores: { pts: 0.308, reb: 2.133, ast: -0.229, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -0.236, ftImpact: 0.814, to: -0.031 } },
          { name: "Berke Buyuktuncel", min: 21, pts: 13, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 5, ftm: 2, fta: 2, composite: 3.07, zScores: { pts: 0.93, reb: -0.381, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 2.125, ftImpact: 0.814, to: 0.809 } },
          { name: "Ace Glass", min: 24, pts: 12, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 2.53, zScores: { pts: 0.775, reb: -0.022, ast: 0.319, stl: 0.201, blk: -0.501, tpm: 1.165, fgImpact: -0.189, ftImpact: 0.814, to: -0.031 } },
          { name: "Tyler Tanner", min: 28, pts: 20, reb: 2, ast: 6, stl: 4, blk: 0, to: 0, tpm: 1, fgm: 7, fga: 10, ftm: 5, fta: 8, composite: 8.69, zScores: { pts: 2.019, reb: -0.381, ast: 2.512, stl: 3.027, blk: -0.501, tpm: 0.249, fgImpact: 1.842, ftImpact: -0.88, to: 0.809 } },
          { name: "Jackson Sheffield", min: 9, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.65, zScores: { pts: -0.781, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.425, ftImpact: 0, to: -0.872 } },
          { name: "Ethan Mgbako", min: 7, pts: 4, reb: 1, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.33, zScores: { pts: -0.47, reb: -0.74, ast: -0.229, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: 0.472, ftImpact: 0, to: 0.809 } },
          { name: "Bangot Dak", min: 15, pts: 4, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 1, composite: -2.99, zScores: { pts: -0.47, reb: 0.696, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.472, ftImpact: -0.972, to: -0.031 } },
          { name: "T.O. Barrett", min: 13, pts: 4, reb: 5, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 3, composite: -0.41, zScores: { pts: -0.47, reb: 0.696, ast: 1.415, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: -0.158, to: -0.031 } },
          { name: "Jayden Leverett", min: 10, pts: 4, reb: 4, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -1.38, zScores: { pts: -0.47, reb: 0.337, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.047, ftImpact: 0.814, to: -0.872 } },
          { name: "Chase Byington", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.29, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: -0.031 } },
          { name: "Baylor Allen", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Mavrick Hawkins", min: 5, pts: 3, reb: 1, ast: 0, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.86, zScores: { pts: -0.625, reb: -0.74, ast: -0.777, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: 0.425, ftImpact: 0, to: -0.031 } },
          { name: "Ant Brown Jr.", min: 18, pts: 7, reb: 1, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -1.21, zScores: { pts: -0.003, reb: -0.74, ast: 0.867, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: -0.283, ftImpact: 0.814, to: -0.872 } }
        ]
      }
    },
      {
      id: "401911707",
      line: "Murray State Racers 94 @ Tennessee State Tigers 64 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Mur", name: "Murray State Racers", score: 94,
        players: [
          { name: "Brigham Rogers", min: 26, pts: 10, reb: 5, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 2, fta: 4, composite: 1.31, zScores: { pts: 0.464, reb: 0.696, ast: 0.867, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.567, ftImpact: -1.129, to: 0.809 } },
          { name: "Talis Soulhac", min: 22, pts: 13, reb: 2, ast: 3, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 9, fta: 10, composite: 4.71, zScores: { pts: 0.93, reb: -0.381, ast: 0.867, stl: 2.085, blk: -0.501, tpm: -0.668, fgImpact: -0.283, ftImpact: 2.69, to: -0.031 } },
          { name: "Roman Domon", min: 28, pts: 22, reb: 5, ast: 2, stl: 1, blk: 1, to: 4, tpm: 1, fgm: 8, fga: 16, ftm: 5, fta: 5, composite: 4.61, zScores: { pts: 2.33, reb: 0.696, ast: 0.319, stl: 0.201, blk: 0.954, tpm: 0.249, fgImpact: 0.378, ftImpact: 2.034, to: -2.552 } },
          { name: "Brayden Shorter", min: 21, pts: 13, reb: 3, ast: 0, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 3.44, zScores: { pts: 0.93, reb: -0.022, ast: -0.777, stl: 1.143, blk: -0.501, tpm: 2.082, fgImpact: 0.614, ftImpact: 0, to: -0.031 } },
          { name: "Lachlan Crate", min: 16, pts: 2, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.56, zScores: { pts: -0.781, reb: -0.022, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: -0.33, ftImpact: 0, to: 0.809 } },
          { name: "Jonas Boulefaa", min: 8, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 2, composite: -2.39, zScores: { pts: -0.314, reb: -0.022, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.85, ftImpact: -1.943, to: 0.809 } },
          { name: "Pavle Nikolic", min: 7, pts: 2, reb: 3, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -1.37, zScores: { pts: -0.781, reb: -0.022, ast: 0.319, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: -0.378, ftImpact: 0.814, to: -0.872 } },
          { name: "Shon Tupuola", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.35, zScores: { pts: -0.781, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: 0, to: 0.809 } },
          { name: "Dillon Butler", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Mathis Courbon", min: 12, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.33, zScores: { pts: -0.781, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.425, ftImpact: 0, to: 0.809 } },
          { name: "Ben Shtolzberg", min: 14, pts: 6, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: -1.61, zScores: { pts: -0.159, reb: -0.022, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.472, ftImpact: 0.814, to: -0.031 } },
          { name: "Kaden Magwood", min: 18, pts: 15, reb: 3, ast: 1, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 5, fga: 8, ftm: 4, fta: 4, composite: 0.06, zScores: { pts: 1.241, reb: -0.022, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.992, ftImpact: 1.627, to: -2.552 } },
          { name: "Christian Jones", min: 17, pts: 2, reb: 1, ast: 2, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.87, zScores: { pts: -0.781, reb: -0.74, ast: 0.319, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: -1.086, ftImpact: 0, to: -2.552 } },
          { name: "Navon Shabazz", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } }
        ]
      },
      home: {
        abbr: "TNST", name: "Tennessee State Tigers", score: 64,
        players: [

        ]
      }
    },
      {
      id: "401911532",
      line: "UTEP Miners 76 @ Northern Kentucky Norse 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UTEP", name: "UTEP Miners", score: 76,
        players: [
          { name: "Youssouf Traore", min: 26, pts: 18, reb: 7, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 7, fga: 10, ftm: 4, fta: 5, composite: 4.68, zScores: { pts: 1.708, reb: 1.415, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 1.842, ftImpact: 0.656, to: 0.809 } },
          { name: "Augusto Cassia", min: 28, pts: 10, reb: 4, ast: 5, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 8, ftm: 1, fta: 3, composite: 1.44, zScores: { pts: 0.464, reb: 0.337, ast: 1.964, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: 0.189, ftImpact: -1.536, to: -0.872 } },
          { name: "Cam McDaniels", min: 26, pts: 11, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 15, ftm: 0, fta: 0, composite: 0.21, zScores: { pts: 0.619, reb: -0.022, ast: 0.319, stl: 0.201, blk: -0.501, tpm: 2.082, fgImpact: -2.455, ftImpact: 0, to: -0.031 } },
          { name: "Leif Moeller", min: 28, pts: 8, reb: 4, ast: 5, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 11, ftm: 2, fta: 2, composite: 0.52, zScores: { pts: 0.153, reb: 0.337, ast: 1.964, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -1.747, ftImpact: 0.814, to: -0.031 } },
          { name: "Reese Miller", min: 25, pts: 4, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -4.01, zScores: { pts: -0.47, reb: -1.099, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.086, ftImpact: 0.814, to: -0.031 } },
          { name: "Reid Cason", min: 7, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 2, composite: -5.81, zScores: { pts: -0.47, reb: -0.022, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.661, ftImpact: -1.943, to: -0.031 } },
          { name: "Isaiah Ward", min: 10, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.23, zScores: { pts: -1.092, reb: 0.337, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: 0, to: -0.031 } },
          { name: "Ryan Jackson Jr.", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Donovan Criss", min: 21, pts: 13, reb: 0, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 4, ftm: 3, fta: 8, composite: -0.15, zScores: { pts: 0.93, reb: -1.099, ast: -0.229, stl: -0.741, blk: 0.954, tpm: 1.165, fgImpact: 1.7, ftImpact: -3.637, to: 0.809 } },
          { name: "Jace Whiting", min: 26, pts: 8, reb: 5, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 9, ftm: 2, fta: 2, composite: 1.86, zScores: { pts: 0.153, reb: 0.696, ast: 0.319, stl: 0.201, blk: -0.501, tpm: 1.165, fgImpact: -1.794, ftImpact: 0.814, to: 0.809 } }
        ]
      },
      home: {
        abbr: "NKU", name: "Northern Kentucky Norse", score: 84,
        players: [

        ]
      }
    },
      {
      id: "401911469",
      line: "UTSA Roadrunners 74 @ San José State Spartans 95 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UTSA", name: "UTSA Roadrunners", score: 74,
        players: [
          { name: "Chinedum Okpukpara", min: 8, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.32, zScores: { pts: -1.092, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.133, ftImpact: 0, to: -0.031 } },
          { name: "JJ Kelly", min: 18, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.26, zScores: { pts: -1.092, reb: -0.022, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.133, ftImpact: 0, to: -0.872 } },
          { name: "Preston Turner", min: 20, pts: 15, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 15, ftm: 1, fta: 2, composite: 1.25, zScores: { pts: 1.241, reb: 0.337, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 2.999, fgImpact: -1.652, ftImpact: -0.565, to: -0.031 } },
          { name: "KJ Tenner", min: 31, pts: 11, reb: 1, ast: 6, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 3.86, zScores: { pts: 0.619, reb: -0.74, ast: 2.512, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: 0.614, ftImpact: 0, to: -0.031 } },
          { name: "Isaiah Watts", min: 26, pts: 6, reb: 1, ast: 1, stl: 3, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 11, ftm: 0, fta: 1, composite: -1.09, zScores: { pts: -0.159, reb: -0.74, ast: -0.229, stl: 2.085, blk: -0.501, tpm: 1.165, fgImpact: -2.549, ftImpact: -0.972, to: 0.809 } },
          { name: "Jayson Peterson", min: 22, pts: 4, reb: 1, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -2.59, zScores: { pts: -0.47, reb: -0.74, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.425, ftImpact: 0.814, to: -0.872 } },
          { name: "Mike Broxton Jr.", min: 10, pts: 2, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.88, zScores: { pts: -0.781, reb: -1.099, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.425, ftImpact: 0, to: 0.809 } },
          { name: "Josiah LeGree", min: 16, pts: 7, reb: 2, ast: 2, stl: 1, blk: 1, to: 4, tpm: 1, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: -1.06, zScores: { pts: -0.003, reb: -0.381, ast: 0.319, stl: 0.201, blk: 0.954, tpm: 0.249, fgImpact: -0.661, ftImpact: 0.814, to: -2.552 } },
          { name: "Dorian Hayes", min: 6, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.36, zScores: { pts: -1.092, reb: -1.099, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.031 } },
          { name: "Shey Eberwein", min: 19, pts: 15, reb: 2, ast: 4, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 5, ftm: 3, fta: 4, composite: 6.43, zScores: { pts: 1.241, reb: -0.381, ast: 1.415, stl: 1.143, blk: -0.501, tpm: 1.165, fgImpact: 2.125, ftImpact: 0.249, to: -0.031 } },
          { name: "Isaiah Coleman", min: 13, pts: 12, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 6, ftm: 0, fta: 2, composite: 0.44, zScores: { pts: 0.775, reb: -0.74, ast: -0.229, stl: 0.201, blk: -0.501, tpm: 1.165, fgImpact: 1.747, ftImpact: -1.943, to: -0.031 } },
          { name: "Demari Williams", min: 11, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.09, zScores: { pts: -0.781, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.33, ftImpact: 0, to: 0.809 } }
        ]
      },
      home: {
        abbr: "SJSU", name: "San José State Spartans", score: 95,
        players: [
          { name: "Zine Eddine Bedri", min: 13, pts: 6, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -1.88, zScores: { pts: -0.159, reb: -0.381, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 1.275, ftImpact: 0, to: -0.872 } },
          { name: "Robert Vaihola", min: 27, pts: 13, reb: 11, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 6, ftm: 1, fta: 2, composite: 3.7, zScores: { pts: 0.93, reb: 2.851, ast: -0.229, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 2.55, ftImpact: -0.565, to: -0.872 } },
          { name: "Joey Chammaa", min: 36, pts: 27, reb: 4, ast: 6, stl: 2, blk: 0, to: 3, tpm: 3, fgm: 6, fga: 9, ftm: 12, fta: 12, composite: 13.27, zScores: { pts: 3.107, reb: 0.337, ast: 2.512, stl: 1.143, blk: -0.501, tpm: 2.082, fgImpact: 1.417, ftImpact: 4.882, to: -1.712 } },
          { name: "JaVaughn Hannah", min: 29, pts: 5, reb: 1, ast: 6, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.15, zScores: { pts: -0.314, reb: -0.74, ast: 2.512, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: -0.283, ftImpact: 0, to: -0.031 } },
          { name: "Mekhi Mason", min: 31, pts: 26, reb: 7, ast: 3, stl: 2, blk: 1, to: 7, tpm: 5, fgm: 8, fga: 16, ftm: 5, fta: 6, composite: 7.61, zScores: { pts: 2.952, reb: 1.415, ast: 0.867, stl: 1.143, blk: 0.954, tpm: 3.916, fgImpact: 0.378, ftImpact: 1.063, to: -5.073 } },
          { name: "KJ Martin Jr.", min: 20, pts: 8, reb: 5, ast: 5, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 3.14, zScores: { pts: 0.153, reb: 0.696, ast: 1.964, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 1.322, ftImpact: 0, to: -0.031 } },
          { name: "Mookie Cook", min: 20, pts: 6, reb: 5, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -0.56, zScores: { pts: -0.159, reb: 0.696, ast: 0.319, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.52, ftImpact: 0, to: -0.031 } },
          { name: "Oliver Kullamae", min: 15, pts: 4, reb: 2, ast: 1, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -2.33, zScores: { pts: -0.47, reb: -0.381, ast: -0.229, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: -0.708, ftImpact: -0.565, to: -0.872 } },
          { name: "Rokiem Green", min: 9, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.2, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.133, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401924732",
      line: "Carnegie Mellon Tartans 46 @ Princeton Tigers 78 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CGMU", name: "Carnegie Mellon Tartans", score: 46,
        players: [

        ]
      },
      home: {
        abbr: "Princ", name: "Princeton Tigers", score: 78,
        players: [
          { name: "Jacob Huggins", min: 16, pts: 4, reb: 5, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -0.24, zScores: { pts: -0.47, reb: 0.696, ast: -0.777, stl: -0.741, blk: 2.408, tpm: -0.668, fgImpact: -0.661, ftImpact: 0, to: -0.031 } },
          { name: "Malik Abdullahi", min: 18, pts: 5, reb: 4, ast: 4, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.61, zScores: { pts: -0.314, reb: 0.337, ast: 1.415, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.095, ftImpact: 0, to: -0.872 } },
          { name: "Jack Stanton", min: 18, pts: 2, reb: 2, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -2.45, zScores: { pts: -0.781, reb: -0.381, ast: -0.229, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: -1.841, ftImpact: 0, to: 0.809 } },
          { name: "Dalen Davis", min: 23, pts: 16, reb: 0, ast: 2, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 8, ftm: 1, fta: 1, composite: 5.51, zScores: { pts: 1.397, reb: -1.099, ast: 0.319, stl: 1.143, blk: -0.501, tpm: 2.082, fgImpact: 1.795, ftImpact: 0.407, to: -0.031 } },
          { name: "Jackson Hicke", min: 19, pts: 11, reb: 5, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 4.31, zScores: { pts: 0.619, reb: 0.696, ast: 0.867, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 1.37, ftImpact: 0, to: 0.809 } },
          { name: "Will Kutzler", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.29, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: -0.031 } },
          { name: "Cash McSweeney", min: 2, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.12, zScores: { pts: -0.936, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: -0.565, to: 0.809 } },
          { name: "CJ Happy", min: 17, pts: 5, reb: 1, ast: 3, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 1, composite: -0.96, zScores: { pts: -0.314, reb: -0.74, ast: 0.867, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: -0.283, ftImpact: 0.407, to: -0.872 } },
          { name: "Jacob Hammond", min: 4, pts: 4, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -2.48, zScores: { pts: -0.47, reb: -1.099, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: 0.814, to: -0.031 } },
          { name: "William Higgs", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Noah Cohen", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Christopher Kirkpatrick", min: 22, pts: 13, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 8, ftm: 1, fta: 2, composite: 1.29, zScores: { pts: 0.93, reb: -0.022, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: 0.992, ftImpact: -0.565, to: 0.809 } },
          { name: "Ethan Sabec", min: 16, pts: 11, reb: 6, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 3.04, zScores: { pts: 0.619, reb: 1.056, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.567, ftImpact: 0.814, to: 0.809 } },
          { name: "Sebastian Whitfield", min: 6, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.13, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Jake Sussberg", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Ryan Mandes", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.09, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Cooper Mueller", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Peyton Seals", min: 13, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Landon Clark", min: 17, pts: 6, reb: 1, ast: 6, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: 3.22, zScores: { pts: -0.159, reb: -0.74, ast: 2.512, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: 0.472, ftImpact: -0.565, to: 0.809 } }
        ]
      }
    },
      {
      id: "401920071",
      line: "UMBC Retrievers 54 @ George Mason Patriots 82 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UMBC", name: "UMBC Retrievers", score: 54,
        players: [

        ]
      },
      home: {
        abbr: "GMas", name: "George Mason Patriots", score: 82,
        players: [
          { name: "Emmanuel Kanga", min: 24, pts: 6, reb: 10, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 3, composite: 2.39, zScores: { pts: -0.159, reb: 2.492, ast: -0.229, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.095, ftImpact: -0.158, to: 0.809 } },
          { name: "Elijah Jones", min: 25, pts: 13, reb: 8, ast: 0, stl: 1, blk: 1, to: 1, tpm: 3, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: 4.61, zScores: { pts: 0.93, reb: 1.774, ast: -0.777, stl: 0.201, blk: 0.954, tpm: 2.082, fgImpact: -0.519, ftImpact: 0, to: -0.031 } },
          { name: "Efeosa Oliogu-Elabor", min: 25, pts: 17, reb: 6, ast: 3, stl: 2, blk: 0, to: 7, tpm: 2, fgm: 7, fga: 12, ftm: 1, fta: 1, composite: 1.7, zScores: { pts: 1.552, reb: 1.056, ast: 0.867, stl: 1.143, blk: -0.501, tpm: 1.165, fgImpact: 1.086, ftImpact: 0.407, to: -5.073 } },
          { name: "Baraka Okojie", min: 27, pts: 7, reb: 4, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 10, ftm: 2, fta: 2, composite: -0.08, zScores: { pts: -0.003, reb: 0.337, ast: 1.964, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: -2.172, ftImpact: 0.814, to: -0.031 } },
          { name: "Brayden O'Connor", min: 29, pts: 11, reb: 8, ast: 2, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 9, ftm: 4, fta: 4, composite: 4.62, zScores: { pts: 0.619, reb: 1.774, ast: 0.319, stl: -0.741, blk: 0.954, tpm: 0.249, fgImpact: -0.991, ftImpact: 1.627, to: 0.809 } },
          { name: "Bryton Barrett", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -0.781, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: 0, to: 0.809 } },
          { name: "Emmett Adair", min: 12, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.09, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Ryan-Preston Mendy", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Shane Pendergrass", min: 15, pts: 11, reb: 6, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 8, ftm: 3, fta: 3, composite: 3.24, zScores: { pts: 0.619, reb: 1.056, ast: 0.319, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.189, ftImpact: 1.221, to: 0.809 } },
          { name: "Michael Marcus Jr.", min: 4, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 2, composite: -5.67, zScores: { pts: -1.092, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: -1.943, to: 0.809 } },
          { name: "Peyton Miller", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Makhai Valentine", min: 23, pts: 12, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 8, ftm: 5, fta: 7, composite: 0.21, zScores: { pts: 0.775, reb: -0.022, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -0.614, ftImpact: 0.091, to: 0.809 } },
          { name: "Malik Presley", min: 10, pts: 3, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.25, zScores: { pts: -0.625, reb: -0.74, ast: -0.229, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.425, ftImpact: 0, to: -0.031 } }
        ]
      }
    },
      {
      id: "401928858",
      line: "St. Francis (IL) Fighting Saints 47 @ UIC Flames 96 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SFIL", name: "St. Francis (IL) Fighting Saints", score: 47,
        players: [

        ]
      },
      home: {
        abbr: "UIC", name: "UIC Flames", score: 96,
        players: [
          { name: "Jayce Nathaniel", min: 22, pts: 13, reb: 10, ast: 2, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 5, fga: 7, ftm: 2, fta: 2, composite: 8.14, zScores: { pts: 0.93, reb: 2.492, ast: 0.319, stl: 0.201, blk: 0.954, tpm: 0.249, fgImpact: 1.37, ftImpact: 0.814, to: 0.809 } },
          { name: "Rashund Washington Jr.", min: 23, pts: 15, reb: 3, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 9, fta: 12, composite: 1.12, zScores: { pts: 1.241, reb: -0.022, ast: 1.415, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.52, ftImpact: 0.747, to: -0.872 } },
          { name: "Ahmad Henderson II", min: 21, pts: 13, reb: 2, ast: 3, stl: 2, blk: 1, to: 0, tpm: 3, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 6.64, zScores: { pts: 0.93, reb: -0.381, ast: 0.867, stl: 1.143, blk: 0.954, tpm: 2.082, fgImpact: 0.236, ftImpact: 0, to: 0.809 } },
          { name: "Mekhi Lowery", min: 26, pts: 20, reb: 7, ast: 3, stl: 4, blk: 1, to: 1, tpm: 0, fgm: 9, fga: 11, ftm: 2, fta: 3, composite: 10.49, zScores: { pts: 2.019, reb: 1.415, ast: 0.867, stl: 3.027, blk: 0.954, tpm: -0.668, fgImpact: 3.069, ftImpact: -0.158, to: -0.031 } },
          { name: "Gabe Cupps", min: 24, pts: 12, reb: 4, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 9, ftm: 1, fta: 1, composite: 3.07, zScores: { pts: 0.775, reb: 0.337, ast: 1.964, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.614, ftImpact: 0.407, to: -0.031 } },
          { name: "Dikembe Shaw", min: 14, pts: 6, reb: 1, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -0.46, zScores: { pts: -0.159, reb: -0.74, ast: -0.777, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: 1.275, ftImpact: 0, to: -0.031 } },
          { name: "Nano Barrantes", min: 11, pts: 8, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 4, ftm: 0, fta: 1, composite: -1.86, zScores: { pts: 0.153, reb: -0.022, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 1.7, ftImpact: -0.972, to: -0.031 } },
          { name: "Lucas Scroggins", min: 16, pts: 5, reb: 2, ast: 0, stl: 2, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 6, composite: -3.78, zScores: { pts: -0.314, reb: -0.381, ast: -0.777, stl: 1.143, blk: 0.954, tpm: -0.668, fgImpact: -0.33, ftImpact: -1.694, to: -1.712 } },
          { name: "Mario Wooden Jr.", min: 2, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.52, zScores: { pts: -1.092, reb: -1.099, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Elijah Garrett", min: 18, pts: 0, reb: 1, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -2.79, zScores: { pts: -1.092, reb: -0.74, ast: -0.229, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: -1.511, ftImpact: 0, to: 0.809 } },
          { name: "Benny Gealer", min: 23, pts: 4, reb: 3, ast: 3, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: 0.51, zScores: { pts: -0.47, reb: -0.022, ast: 0.867, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: -1.463, ftImpact: 0.814, to: 0.809 } }
        ]
      }
    },
      {
      id: "401919014",
      line: "UAB Blazers 78 @ McNeese Cowboys 99 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UAB", name: "UAB Blazers", score: 78,
        players: [
          { name: "Antallah Sandlin-El", min: 6, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -5.34, zScores: { pts: -0.936, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: -0.565, to: -0.031 } },
          { name: "Elijah Duval", min: 25, pts: 15, reb: 2, ast: 5, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 9, ftm: 3, fta: 4, composite: 2.84, zScores: { pts: 1.241, reb: -0.381, ast: 1.964, stl: 0.201, blk: -0.501, tpm: 1.165, fgImpact: 0.614, ftImpact: 0.249, to: -1.712 } },
          { name: "Jeremy Elyzee", min: 26, pts: 4, reb: 2, ast: 1, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: 1.18, zScores: { pts: -0.47, reb: -0.381, ast: -0.229, stl: 1.143, blk: 0.954, tpm: -0.668, fgImpact: 0.047, ftImpact: 0.814, to: -0.031 } },
          { name: "Justyn Fernandez", min: 26, pts: 11, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 11, ftm: 1, fta: 2, composite: -0.31, zScores: { pts: 0.619, reb: -0.022, ast: -0.229, stl: 0.201, blk: -0.501, tpm: 1.165, fgImpact: -0.944, ftImpact: -0.565, to: -0.031 } },
          { name: "Deuce Jones", min: 31, pts: 12, reb: 4, ast: 2, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 7, ftm: 8, fta: 8, composite: 0.03, zScores: { pts: 0.775, reb: 0.337, ast: 0.319, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.039, ftImpact: 3.255, to: -1.712 } },
          { name: "Aleks Alston", min: 14, pts: 5, reb: 5, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 2.27, zScores: { pts: -0.314, reb: 0.696, ast: -0.229, stl: -0.741, blk: 0.954, tpm: 0.249, fgImpact: 0.85, ftImpact: 0, to: 0.809 } },
          { name: "Kaleb Davis", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Matt Mbole", min: 14, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -1.13, zScores: { pts: -0.47, reb: -0.022, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.425, ftImpact: 0.814, to: 0.809 } },
          { name: "Tim Holliday", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.45, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Korie Corbett", min: 10, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: -3.61, zScores: { pts: -0.159, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.85, ftImpact: -0.565, to: -0.872 } },
          { name: "T.J. Caldwell", min: 19, pts: 10, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 10, ftm: 2, fta: 2, composite: 0.1, zScores: { pts: 0.464, reb: -0.022, ast: 0.319, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: -1.369, ftImpact: 0.814, to: -0.031 } },
          { name: "Salim London", min: 21, pts: 10, reb: 1, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 6, fta: 6, composite: -0.19, zScores: { pts: 0.464, reb: -0.74, ast: -0.229, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.283, ftImpact: 2.441, to: -0.872 } }
        ]
      },
      home: {
        abbr: "MCN", name: "McNeese Cowboys", score: 99,
        players: [

        ]
      }
    },
      {
      id: "401924717",
      line: "Pepperdine Waves 85 @ Cornell Big Red 86 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Pepp", name: "Pepperdine Waves", score: 85,
        players: [
          { name: "Oliver Kanden", min: 20, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.75, zScores: { pts: -1.092, reb: -0.022, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: 0, to: 0.809 } },
          { name: "Petar Majstorovic", min: 33, pts: 15, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 9, ftm: 4, fta: 6, composite: 2.3, zScores: { pts: 1.241, reb: -0.022, ast: 0.867, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.614, ftImpact: -0.316, to: -0.031 } },
          { name: "Anthony Robinson", min: 20, pts: 8, reb: 4, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 4, fta: 8, composite: -2.01, zScores: { pts: 0.153, reb: 0.337, ast: -0.229, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.472, ftImpact: -2.259, to: -0.031 } },
          { name: "Evan Haywood", min: 32, pts: 14, reb: 5, ast: 2, stl: 4, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 15, ftm: 2, fta: 2, composite: 3.24, zScores: { pts: 1.086, reb: 0.696, ast: 0.319, stl: 3.027, blk: -0.501, tpm: 1.165, fgImpact: -1.652, ftImpact: 0.814, to: -1.712 } },
          { name: "Jahari Williamson", min: 26, pts: 13, reb: 5, ast: 1, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: 2.73, zScores: { pts: 0.93, reb: 0.696, ast: -0.229, stl: 1.143, blk: -0.501, tpm: 2.082, fgImpact: -0.519, ftImpact: 0, to: -0.872 } },
          { name: "Alex Constanza", min: 22, pts: 25, reb: 9, ast: 0, stl: 2, blk: 1, to: 4, tpm: 1, fgm: 9, fga: 18, ftm: 6, fta: 8, composite: 4.87, zScores: { pts: 2.796, reb: 2.133, ast: -0.777, stl: 1.143, blk: 0.954, tpm: 0.249, fgImpact: 0.426, ftImpact: 0.498, to: -2.552 } },
          { name: "Youri Fritz", min: 10, pts: 0, reb: 3, ast: 2, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: 1.44, zScores: { pts: -1.092, reb: -0.022, ast: 0.319, stl: 1.143, blk: 0.954, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Ethan Meuser", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Anto Balian", min: 12, pts: 0, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.27, zScores: { pts: -1.092, reb: -0.022, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: -0.031 } },
          { name: "Will McClendon", min: 25, pts: 10, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 3, fta: 4, composite: 1.26, zScores: { pts: 0.464, reb: -0.381, ast: 0.867, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.142, ftImpact: 0.249, to: -0.031 } }
        ]
      },
      home: {
        abbr: "Corn", name: "Cornell Big Red", score: 86,
        players: [
          { name: "Quinn Gibson", min: 22, pts: 4, reb: 8, ast: 3, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 8, ftm: 0, fta: 2, composite: 1.05, zScores: { pts: -0.47, reb: 1.774, ast: 0.867, stl: 1.143, blk: 0.954, tpm: -0.668, fgImpact: -1.416, ftImpact: -1.943, to: 0.809 } },
          { name: "Kaspar Sepp", min: 25, pts: 13, reb: 7, ast: 6, stl: 1, blk: 1, to: 6, tpm: 1, fgm: 5, fga: 9, ftm: 2, fta: 2, composite: 3.45, zScores: { pts: 0.93, reb: 1.415, ast: 2.512, stl: 0.201, blk: 0.954, tpm: 0.249, fgImpact: 0.614, ftImpact: 0.814, to: -4.233 } },
          { name: "Anthony Nimani", min: 28, pts: 8, reb: 4, ast: 4, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 1.26, zScores: { pts: 0.153, reb: 0.337, ast: 1.415, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: -0.236, ftImpact: 0.814, to: -1.712 } },
          { name: "Mateen Rafiq", min: 23, pts: 17, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 9, ftm: 1, fta: 1, composite: 4.61, zScores: { pts: 1.552, reb: -1.099, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 2.999, fgImpact: 1.417, ftImpact: 0.407, to: 0.809 } },
          { name: "Jacob Beccles", min: 28, pts: 19, reb: 2, ast: 4, stl: 2, blk: 1, to: 3, tpm: 4, fgm: 7, fga: 12, ftm: 1, fta: 2, composite: 6.8, zScores: { pts: 1.863, reb: -0.381, ast: 1.415, stl: 1.143, blk: 0.954, tpm: 2.999, fgImpact: 1.086, ftImpact: -0.565, to: -1.712 } },
          { name: "Mikehi Williams", min: 20, pts: 8, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: -1.1, zScores: { pts: 0.153, reb: -0.022, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.945, ftImpact: 0, to: -0.031 } },
          { name: "Blake Lecklitner", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Gioacchino Panzini", min: 8, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.092, reb: -1.099, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Ian Imegwu", min: 13, pts: 12, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 2.41, zScores: { pts: 0.775, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 2.999, fgImpact: 0.945, ftImpact: 0, to: 0.809 } },
          { name: "Luke Kennevan", min: 13, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 1, composite: -4.26, zScores: { pts: -0.781, reb: -0.381, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: -0.972, to: -0.031 } },
          { name: "Sage Mateo", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.45, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "JJ Sanchez", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Ryan Burbach", min: 13, pts: 3, reb: 2, ast: 1, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.55, zScores: { pts: -0.625, reb: -0.381, ast: -0.229, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: -0.33, ftImpact: 0, to: -0.872 } }
        ]
      }
    },
      {
      id: "401925857",
      line: "Central Connecticut Blue Devils 56 @ Temple Owls 68 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CCSU", name: "Central Connecticut Blue Devils", score: 56,
        players: [

        ]
      },
      home: {
        abbr: "Tem", name: "Temple Owls", score: 68,
        players: [
          { name: "Christian Beam", min: 9, pts: 2, reb: 1, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.58, zScores: { pts: -0.781, reb: -0.74, ast: -0.777, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: 0.425, ftImpact: 0, to: 0.809 } },
          { name: "Jordan Marsh", min: 30, pts: 16, reb: 4, ast: 4, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 15, ftm: 0, fta: 0, composite: 4.88, zScores: { pts: 1.397, reb: 0.337, ast: 1.415, stl: 1.143, blk: -0.501, tpm: 1.165, fgImpact: -0.047, ftImpact: 0, to: -0.031 } },
          { name: "Dez White", min: 24, pts: 6, reb: 4, ast: 2, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: 1.24, zScores: { pts: -0.159, reb: 0.337, ast: 0.319, stl: 1.143, blk: -0.501, tpm: 1.165, fgImpact: -1.039, ftImpact: 0, to: -0.031 } },
          { name: "Gavin Griffiths", min: 29, pts: 11, reb: 8, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 11, ftm: 1, fta: 2, composite: 2.59, zScores: { pts: 0.619, reb: 1.774, ast: 0.867, stl: 0.201, blk: -0.501, tpm: 1.165, fgImpact: -0.944, ftImpact: -0.565, to: -0.031 } },
          { name: "Cam Scott", min: 24, pts: 7, reb: 2, ast: 2, stl: 2, blk: 2, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 3.85, zScores: { pts: -0.003, reb: -0.381, ast: 0.319, stl: 1.143, blk: 2.408, tpm: 0.249, fgImpact: 0.142, ftImpact: 0, to: -0.031 } },
          { name: "Edwin Suarez Jr.", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.26, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Baboucarr Njie", min: 30, pts: 8, reb: 12, ast: 2, stl: 1, blk: 3, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 2, composite: 6.05, zScores: { pts: 0.153, reb: 3.21, ast: 0.319, stl: 0.201, blk: 3.863, tpm: -0.668, fgImpact: 0.945, ftImpact: -1.943, to: -0.031 } },
          { name: "Sir Issac Herron", min: 6, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.13, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Dallis Dillard", min: 7, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.092, reb: -1.099, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: 0, to: 0.809 } },
          { name: "Cam Wallace", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.33, zScores: { pts: -0.781, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.425, ftImpact: 0, to: 0.809 } },
          { name: "Deuce Drake", min: 16, pts: 11, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: -0.48, zScores: { pts: 0.619, reb: -0.381, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.567, ftImpact: 0.814, to: -0.872 } },
          { name: "Derrian Ford", min: 19, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 4, composite: -5.18, zScores: { pts: -0.314, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.33, ftImpact: 0.249, to: -1.712 } }
        ]
      }
    },
      {
      id: "401921264",
      line: "Loyola Maryland Greyhounds 58 @ Georgetown Hoyas 80 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "L-MD", name: "Loyola Maryland Greyhounds", score: 58,
        players: [

        ]
      },
      home: {
        abbr: "GTown", name: "Georgetown Hoyas", score: 80,
        players: [
          { name: "Caleb Williams", min: 24, pts: 6, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: -2.95, zScores: { pts: -0.159, reb: -0.022, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.416, ftImpact: 0.814, to: -0.031 } },
          { name: "Vince Iwuchukwu", min: 23, pts: 21, reb: 9, ast: 0, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 6, fga: 8, ftm: 9, fta: 11, composite: 6.66, zScores: { pts: 2.174, reb: 2.133, ast: -0.777, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: 1.795, ftImpact: 1.719, to: -0.872 } },
          { name: "Kayvaun Mulready", min: 26, pts: 2, reb: 5, ast: 4, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: 0.65, zScores: { pts: -0.781, reb: 0.696, ast: 1.415, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: -1.463, ftImpact: 0, to: 0.809 } },
          { name: "Elmarko Jackson", min: 26, pts: 14, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 11, ftm: 3, fta: 3, composite: 3.77, zScores: { pts: 1.086, reb: -0.022, ast: 0.867, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -0.141, ftImpact: 1.221, to: 0.809 } },
          { name: "Jaland Lowe", min: 34, pts: 23, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 5, fgm: 9, fga: 15, ftm: 0, fta: 0, composite: 6.73, zScores: { pts: 2.485, reb: -0.381, ast: 0.319, stl: 0.201, blk: -0.501, tpm: 3.916, fgImpact: 1.559, ftImpact: 0, to: -0.872 } },
          { name: "Pedro Pastre", min: 5, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.73, zScores: { pts: -0.625, reb: -0.74, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.047, ftImpact: 0, to: 0.809 } },
          { name: "Josiah Parker", min: 22, pts: 2, reb: 6, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.75, zScores: { pts: -0.781, reb: 1.056, ast: 0.867, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: 0, to: -0.031 } },
          { name: "Justin Caldwell", min: 3, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.19, zScores: { pts: -0.781, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: 0, to: -0.031 } },
          { name: "Chol Machot", min: 13, pts: 7, reb: 2, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 1, composite: 1.06, zScores: { pts: -0.003, reb: -0.381, ast: -0.777, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: 0.52, ftImpact: 0.407, to: 0.809 } },
          { name: "Seal Diouf", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Athan Olivier IV", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Gabriel Landeira", min: 16, pts: 0, reb: 2, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -1.35, zScores: { pts: -1.092, reb: -0.381, ast: 1.415, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -1.133, ftImpact: 0, to: 0.809 } },
          { name: "Michael Van Raaphorst", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.45, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Mason Moses", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401921093",
      line: "Dallas Christian Crusaders 55 @ Rice Owls 100 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DCC", name: "Dallas Christian Crusaders", score: 55,
        players: [

        ]
      },
      home: {
        abbr: "Rice", name: "Rice Owls", score: 100,
        players: [
          { name: "Eternity Eguagie", min: 18, pts: 10, reb: 8, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 1, fta: 1, composite: 4.29, zScores: { pts: 0.464, reb: 1.774, ast: 0.319, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.567, ftImpact: 0.407, to: 0.809 } },
          { name: "Jimmy Oladokun Jr.", min: 19, pts: 15, reb: 7, ast: 1, stl: 3, blk: 3, to: 0, tpm: 0, fgm: 7, fga: 7, ftm: 1, fta: 2, composite: 10.93, zScores: { pts: 1.241, reb: 1.415, ast: -0.229, stl: 2.085, blk: 3.863, tpm: -0.668, fgImpact: 2.975, ftImpact: -0.565, to: 0.809 } },
          { name: "Jaxson Thompson", min: 20, pts: 11, reb: 1, ast: 2, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 0.78, zScores: { pts: 0.619, reb: -0.74, ast: 0.319, stl: -0.741, blk: 0.954, tpm: 0.249, fgImpact: 0.992, ftImpact: 0, to: -0.872 } },
          { name: "Carmelo Adkins", min: 17, pts: 7, reb: 6, ast: 1, stl: 3, blk: 1, to: 2, tpm: 2, fgm: 2, fga: 9, ftm: 1, fta: 2, composite: 1.8, zScores: { pts: -0.003, reb: 1.056, ast: -0.229, stl: 2.085, blk: 0.954, tpm: 1.165, fgImpact: -1.794, ftImpact: -0.565, to: -0.872 } },
          { name: "Jacob Dar", min: 19, pts: 20, reb: 8, ast: 1, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 7, fga: 13, ftm: 3, fta: 4, composite: 6.78, zScores: { pts: 2.019, reb: 1.774, ast: -0.229, stl: -0.741, blk: 0.954, tpm: 2.082, fgImpact: 0.709, ftImpact: 0.249, to: -0.031 } },
          { name: "Zalan Flasar", min: 13, pts: 0, reb: 5, ast: 1, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -1.76, zScores: { pts: -1.092, reb: 0.696, ast: -0.229, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: -0.755, ftImpact: 0, to: -0.872 } },
          { name: "Alexander Leeth", min: 17, pts: 5, reb: 8, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: 3.19, zScores: { pts: -0.314, reb: 1.774, ast: 0.867, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -0.708, ftImpact: 0.814, to: 0.809 } },
          { name: "Evan Cochran", min: 9, pts: 0, reb: 4, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 1, composite: -3.37, zScores: { pts: -1.092, reb: 0.337, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: -0.378, ftImpact: -0.972, to: -0.031 } },
          { name: "Rohan Amin", min: 1, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.26, zScores: { pts: -0.625, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.425, ftImpact: 0, to: 0.809 } },
          { name: "Tristan Vukotic", min: 15, pts: 13, reb: 2, ast: 0, stl: 2, blk: 1, to: 2, tpm: 3, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 3.32, zScores: { pts: 0.93, reb: -0.381, ast: -0.777, stl: 1.143, blk: 0.954, tpm: 2.082, fgImpact: 0.236, ftImpact: 0, to: -0.872 } },
          { name: "Kaiden Myers", min: 16, pts: 7, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 0.12, zScores: { pts: -0.003, reb: -1.099, ast: 0.319, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.142, ftImpact: 0, to: 0.809 } },
          { name: "Bodey Howell", min: 13, pts: 4, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 1, fta: 2, composite: -1.44, zScores: { pts: -0.47, reb: -0.022, ast: 0.319, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -1.463, ftImpact: -0.565, to: 0.809 } },
          { name: "Dallas Hobbs", min: 21, pts: 5, reb: 2, ast: 7, stl: 3, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 7, ftm: 3, fta: 4, composite: -0.02, zScores: { pts: -0.314, reb: -0.381, ast: 3.06, stl: 2.085, blk: -0.501, tpm: -0.668, fgImpact: -1.841, ftImpact: 0.249, to: -1.712 } },
          { name: "Cole Andrews-Heitz", min: 2, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.092, reb: -1.099, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401925818",
      line: "Charlotte 49ers 78 @ Indiana State Sycamores 70 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UNCC", name: "Charlotte 49ers", score: 78,
        players: [
          { name: "Dylan Grant", min: 16, pts: 5, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 1, composite: -2.28, zScores: { pts: -0.314, reb: 0.337, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.472, ftImpact: -0.972, to: -0.031 } },
          { name: "Michael Walz", min: 17, pts: 4, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.33, zScores: { pts: -0.47, reb: -0.022, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.095, ftImpact: 0, to: 0.809 } },
          { name: "Jordi Rodriguez-Stegemeijer", min: 12, pts: 0, reb: 3, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -1.81, zScores: { pts: -1.092, reb: -0.022, ast: -0.777, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: -0.031 } },
          { name: "Keyshuan Tillery", min: 32, pts: 29, reb: 2, ast: 3, stl: 0, blk: 0, to: 6, tpm: 7, fgm: 9, fga: 15, ftm: 4, fta: 4, composite: 7.37, zScores: { pts: 3.418, reb: -0.381, ast: 0.867, stl: -0.741, blk: -0.501, tpm: 5.749, fgImpact: 1.559, ftImpact: 1.627, to: -4.233 } },
          { name: "Dorian Finister", min: 28, pts: 11, reb: 10, ast: 5, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 4.59, zScores: { pts: 0.619, reb: 2.492, ast: 1.964, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.567, ftImpact: 0.814, to: -0.872 } },
          { name: "Miguel Allen", min: 9, pts: 2, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.88, zScores: { pts: -0.781, reb: -1.099, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.425, ftImpact: 0, to: 0.809 } },
          { name: "Jayden Fort", min: 14, pts: 3, reb: 6, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -0.51, zScores: { pts: -0.625, reb: 1.056, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.047, ftImpact: -0.565, to: 0.809 } },
          { name: "Arden Conyers", min: 11, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.59, zScores: { pts: -0.159, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: -0.283, ftImpact: 0, to: 0.809 } },
          { name: "Tyler McKinley", min: 16, pts: 4, reb: 6, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 4, composite: -3.21, zScores: { pts: -0.47, reb: 1.056, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: -1.129, to: -0.031 } },
          { name: "Peyton Marshall", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.9, zScores: { pts: -0.781, reb: -0.74, ast: -0.777, stl: -0.741, blk: 2.408, tpm: -0.668, fgImpact: 0.425, ftImpact: 0, to: -0.031 } },
          { name: "Frank Oguche", min: 21, pts: 9, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 4, fta: 4, composite: 0.88, zScores: { pts: 0.308, reb: -0.74, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.095, ftImpact: 1.627, to: 0.809 } },
          { name: "Chaze Harris", min: 16, pts: 3, reb: 1, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 7, ftm: 1, fta: 2, composite: -6.68, zScores: { pts: -0.625, reb: -0.74, ast: -0.229, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -1.841, ftImpact: -0.565, to: -1.712 } }
        ]
      },
      home: {
        abbr: "IndSt", name: "Indiana State Sycamores", score: 70,
        players: [
          { name: "Alessio Calamita", min: 23, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -7.38, zScores: { pts: -0.781, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.463, ftImpact: 0, to: -1.712 } },
          { name: "Jackson Cooper", min: 28, pts: 8, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: -0.69, zScores: { pts: 0.153, reb: -0.74, ast: 0.319, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.236, ftImpact: 0.814, to: -0.031 } },
          { name: "Maguire Mitchell", min: 36, pts: 15, reb: 2, ast: 1, stl: 2, blk: 1, to: 0, tpm: 3, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 6.28, zScores: { pts: 1.241, reb: -0.381, ast: -0.229, stl: 1.143, blk: 0.954, tpm: 2.082, fgImpact: 0.661, ftImpact: 0, to: 0.809 } },
          { name: "EJ McQuillan", min: 18, pts: 0, reb: 1, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -2.96, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: -1.133, ftImpact: 0, to: 0.809 } },
          { name: "Karmani Gregory", min: 35, pts: 29, reb: 3, ast: 8, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 11, fga: 22, ftm: 5, fta: 6, composite: 10.04, zScores: { pts: 3.418, reb: -0.022, ast: 3.608, stl: 0.201, blk: 0.954, tpm: 1.165, fgImpact: 0.52, ftImpact: 1.063, to: -0.872 } },
          { name: "Kade Speckman", min: 7, pts: 4, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.52, zScores: { pts: -0.47, reb: -1.099, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.472, ftImpact: 0, to: 0.809 } },
          { name: "Aleksa Vlajic", min: 9, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.61, zScores: { pts: -1.092, reb: -0.74, ast: 0.319, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Duce Paschal", min: 16, pts: 9, reb: 5, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 3, fta: 4, composite: 0.54, zScores: { pts: 0.308, reb: 0.696, ast: -0.229, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.52, ftImpact: 0.249, to: -0.031 } },
          { name: "Meechie White", min: 5, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.52, zScores: { pts: -1.092, reb: -1.099, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Chance Puryear", min: 23, pts: 3, reb: 3, ast: 0, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 1.02, zScores: { pts: -0.625, reb: -0.022, ast: -0.777, stl: 1.143, blk: 0.954, tpm: 0.249, fgImpact: -0.708, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401924743",
      line: "Howard Bison 62 @ Yale Bulldogs 72 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "HOW", name: "Howard Bison", score: 62,
        players: [

        ]
      },
      home: {
        abbr: "Yale", name: "Yale Bulldogs", score: 72,
        players: [
          { name: "Daniel Ogunyemi", min: 30, pts: 8, reb: 11, ast: 1, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 2.34, zScores: { pts: 0.153, reb: 2.851, ast: -0.229, stl: -0.741, blk: 2.408, tpm: -0.668, fgImpact: -0.566, ftImpact: 0, to: -0.872 } },
          { name: "Jack Sullivan", min: 25, pts: 10, reb: 9, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 4.42, zScores: { pts: 0.464, reb: 2.133, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: 1.322, ftImpact: 0, to: 0.809 } },
          { name: "Riley Fox", min: 34, pts: 19, reb: 3, ast: 1, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 6, fga: 17, ftm: 5, fta: 5, composite: 3.39, zScores: { pts: 1.863, reb: -0.022, ast: -0.229, stl: -0.741, blk: 0.954, tpm: 1.165, fgImpact: -1.605, ftImpact: 2.034, to: -0.031 } },
          { name: "Jordan Brathwaite", min: 33, pts: 17, reb: 5, ast: 3, stl: 1, blk: 0, to: 5, tpm: 1, fgm: 5, fga: 10, ftm: 6, fta: 7, composite: 1.38, zScores: { pts: 1.552, reb: 0.696, ast: 0.867, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.236, ftImpact: 1.47, to: -3.392 } },
          { name: "Trevor Mullin", min: 34, pts: 12, reb: 6, ast: 2, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 8, ftm: 7, fta: 8, composite: 0.85, zScores: { pts: 0.775, reb: 1.056, ast: 0.319, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -1.416, ftImpact: 1.876, to: -1.712 } },
          { name: "Connor May", min: 14, pts: 3, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.71, zScores: { pts: -0.625, reb: -0.74, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -0.33, ftImpact: 0, to: 0.809 } },
          { name: "Jonas Oware", min: 6, pts: 0, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.35, zScores: { pts: -1.092, reb: -0.381, ast: -0.229, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Courtney Wallace", min: 20, pts: 2, reb: 11, ast: 4, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 11, ftm: 0, fta: 0, composite: -3.49, zScores: { pts: -0.781, reb: 2.851, ast: 1.415, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -3.352, ftImpact: 0, to: -1.712 } },
          { name: "Jeannot Basima", min: 4, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.12, zScores: { pts: -0.936, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: -0.565, to: 0.809 } }
        ]
      }
    },
      {
      id: "401921766",
      line: "Niagara Purple Eagles 46 @ West Virginia Mountaineers 91 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NIA", name: "Niagara Purple Eagles", score: 46,
        players: [

        ]
      },
      home: {
        abbr: "WVU", name: "West Virginia Mountaineers", score: 91,
        players: [
          { name: "Brenen Lorient", min: 24, pts: 13, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 5.37, zScores: { pts: 0.93, reb: 0.696, ast: -0.229, stl: 0.201, blk: -0.501, tpm: 2.082, fgImpact: 0.567, ftImpact: 0.814, to: 0.809 } },
          { name: "Mouhamed Sylla", min: 17, pts: 10, reb: 7, ast: 1, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 5, ftm: 0, fta: 2, composite: 3.33, zScores: { pts: 0.464, reb: 1.415, ast: -0.229, stl: 2.085, blk: 0.954, tpm: -0.668, fgImpact: 2.125, ftImpact: -1.943, to: -0.872 } },
          { name: "Miles Sadler", min: 28, pts: 16, reb: 2, ast: 9, stl: 3, blk: 0, to: 3, tpm: 1, fgm: 6, fga: 14, ftm: 3, fta: 4, composite: 5.07, zScores: { pts: 1.397, reb: -0.381, ast: 4.156, stl: 2.085, blk: -0.501, tpm: 0.249, fgImpact: -0.472, ftImpact: 0.249, to: -1.712 } },
          { name: "Seydou Traore", min: 15, pts: 5, reb: 2, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 1, composite: 0.05, zScores: { pts: -0.314, reb: -0.381, ast: 0.867, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.095, ftImpact: -0.972, to: 0.809 } },
          { name: "Finley Bizjack", min: 23, pts: 11, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 8, ftm: 6, fta: 7, composite: -0.48, zScores: { pts: 0.619, reb: -0.74, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: -1.416, ftImpact: 1.47, to: 0.809 } },
          { name: "Max Olejasz", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.45, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Javan Buchanan", min: 21, pts: 11, reb: 6, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 2, fta: 3, composite: 1.12, zScores: { pts: 0.619, reb: 1.056, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.567, ftImpact: -0.158, to: 0.809 } },
          { name: "Amadou Seini", min: 16, pts: 4, reb: 2, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -0.32, zScores: { pts: -0.47, reb: -0.381, ast: -0.777, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: 0.85, ftImpact: 0, to: -0.031 } },
          { name: "Aliou Dioum", min: 4, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.57, zScores: { pts: -1.092, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: -0.031 } },
          { name: "Jelani McKoy", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.55, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.031 } },
          { name: "Keonte Greybear", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Martin Somerville", min: 22, pts: 12, reb: 3, ast: 2, stl: 3, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 5, ftm: 1, fta: 3, composite: 5.33, zScores: { pts: 0.775, reb: -0.022, ast: 0.319, stl: 2.085, blk: -0.501, tpm: 2.082, fgImpact: 1.322, ftImpact: -1.536, to: 0.809 } },
          { name: "Joson Sanon", min: 20, pts: 9, reb: 5, ast: 0, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 2.58, zScores: { pts: 0.308, reb: 0.696, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 2.082, fgImpact: -0.236, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401921753",
      line: "Florida Gulf Coast Eagles 95 @ UCF Knights 96 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "FGCU", name: "Florida Gulf Coast Eagles", score: 95,
        players: [

        ]
      },
      home: {
        abbr: "UCF", name: "UCF Knights", score: 96,
        players: [
          { name: "Isaiah Malone", min: 14, pts: 3, reb: 2, ast: 1, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 1, composite: 1.4, zScores: { pts: -0.625, reb: -0.381, ast: -0.229, stl: -0.741, blk: 2.408, tpm: -0.668, fgImpact: 0.425, ftImpact: 0.407, to: 0.809 } },
          { name: "John Bol", min: 31, pts: 8, reb: 5, ast: 2, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 4, fta: 8, composite: 0.07, zScores: { pts: 0.153, reb: 0.696, ast: 0.319, stl: 0.201, blk: 2.408, tpm: -0.668, fgImpact: 0.095, ftImpact: -2.259, to: -0.872 } },
          { name: "Cayden Vasko", min: 16, pts: 2, reb: 0, ast: 4, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.01, zScores: { pts: -0.781, reb: -1.099, ast: 1.415, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.708, ftImpact: 0, to: -0.872 } },
          { name: "Riley Kugel", min: 13, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.2, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.133, ftImpact: 0, to: 0.809 } },
          { name: "Dior Johnson", min: 35, pts: 41, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 13, fga: 15, ftm: 11, fta: 15, composite: 12.31, zScores: { pts: 5.285, reb: -0.381, ast: 0.319, stl: -0.741, blk: -0.501, tpm: 2.999, fgImpact: 4.769, ftImpact: 0.589, to: -0.031 } },
          { name: "Lewis Walker", min: 34, pts: 16, reb: 2, ast: 2, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 5, fga: 10, ftm: 4, fta: 5, composite: 4.41, zScores: { pts: 1.397, reb: -0.381, ast: 0.319, stl: -0.741, blk: 0.954, tpm: 1.165, fgImpact: 0.236, ftImpact: 0.656, to: 0.809 } },
          { name: "Jason Asemota", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.09, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Churchill Abass", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.91, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.031 } },
          { name: "Elijah Hulsewe", min: 8, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.24, zScores: { pts: -0.47, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.85, ftImpact: 0, to: 0.809 } },
          { name: "Jahda Swann", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.82, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: 0, to: 0.809 } },
          { name: "Carmelo Pacheco", min: 26, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.092, reb: -1.099, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: 0, to: 0.809 } },
          { name: "Mister Dean", min: 11, pts: 7, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 1, composite: -1.06, zScores: { pts: -0.003, reb: -0.022, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.897, ftImpact: -0.972, to: 0.809 } },
          { name: "Arturo Dean", min: 26, pts: 15, reb: 6, ast: 4, stl: 3, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 10, ftm: 5, fta: 8, composite: 4.14, zScores: { pts: 1.241, reb: 1.056, ast: 1.415, stl: 2.085, blk: -0.501, tpm: 1.165, fgImpact: -0.566, ftImpact: -0.88, to: -0.872 } }
        ]
      }
    },
      {
      id: "401921139",
      line: "Elon Phoenix 84 @ Columbia Lions 71 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ELON", name: "Elon Phoenix", score: 84,
        players: [

        ]
      },
      home: {
        abbr: "Colum", name: "Columbia Lions", score: 71,
        players: [
          { name: "Connor Igoe", min: 29, pts: 11, reb: 10, ast: 7, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 3, fga: 9, ftm: 5, fta: 6, composite: 6.37, zScores: { pts: 0.619, reb: 2.492, ast: 3.06, stl: -0.741, blk: 2.408, tpm: -0.668, fgImpact: -0.991, ftImpact: 1.063, to: -0.872 } },
          { name: "Mason Ritter", min: 23, pts: 8, reb: 4, ast: 1, stl: 1, blk: 4, to: 1, tpm: 0, fgm: 4, fga: 4, ftm: 0, fta: 1, composite: 5.81, zScores: { pts: 0.153, reb: 0.337, ast: -0.229, stl: 0.201, blk: 5.317, tpm: -0.668, fgImpact: 1.7, ftImpact: -0.972, to: -0.031 } },
          { name: "Michael Madueme", min: 24, pts: 0, reb: 2, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.33, zScores: { pts: -1.092, reb: -0.381, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: -0.755, ftImpact: 0, to: -0.872 } },
          { name: "Hampton Sanders", min: 28, pts: 9, reb: 5, ast: 3, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 3, fga: 6, ftm: 3, fta: 4, composite: -1.26, zScores: { pts: 0.308, reb: 0.696, ast: 0.867, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.142, ftImpact: 0.249, to: -2.552 } },
          { name: "Gerard O'Keefe", min: 32, pts: 14, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 7, fga: 14, ftm: 0, fta: 0, composite: -1.2, zScores: { pts: 1.086, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.331, ftImpact: 0, to: 0.809 } },
          { name: "Douglas Langford", min: 18, pts: 2, reb: 4, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.24, zScores: { pts: -0.781, reb: 0.337, ast: 0.319, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: 0, to: 0.809 } },
          { name: "Richard Nweke", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.09, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Josh Pratt", min: 24, pts: 14, reb: 1, ast: 0, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 12, ftm: 5, fta: 6, composite: 1.11, zScores: { pts: 1.086, reb: -0.74, ast: -0.777, stl: 2.085, blk: -0.501, tpm: 0.249, fgImpact: -1.322, ftImpact: 1.063, to: -0.031 } },
          { name: "Gabe Hornberger", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Josiah Cunningham", min: 13, pts: 13, reb: 1, ast: 0, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 7, ftm: 2, fta: 3, composite: -2.08, zScores: { pts: 0.93, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 1.37, ftImpact: -0.158, to: -1.712 } }
        ]
      }
    },
      {
      id: "401920354",
      line: "MIT Engineers 45 @ Harvard Crimson 73 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MIT", name: "MIT Engineers", score: 45,
        players: [

        ]
      },
      home: {
        abbr: "Harv", name: "Harvard Crimson", score: 73,
        players: [
          { name: "Kenan Parrish", min: 7, pts: 2, reb: 1, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 2, fta: 2, composite: -2.93, zScores: { pts: -0.781, reb: -0.74, ast: -0.229, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: -1.511, ftImpact: 0.814, to: -0.031 } },
          { name: "Thomas Batties II", min: 26, pts: 11, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 11, ftm: 2, fta: 2, composite: 1.32, zScores: { pts: 0.619, reb: 0.696, ast: 0.319, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: -0.944, ftImpact: 0.814, to: 0.809 } },
          { name: "Tey Barbour", min: 25, pts: 18, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 8, ftm: 2, fta: 2, composite: 6.51, zScores: { pts: 1.708, reb: 0.696, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 2.999, fgImpact: 1.795, ftImpact: 0.814, to: -0.031 } },
          { name: "Ben Eisendrath", min: 23, pts: 5, reb: 8, ast: 4, stl: 4, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: 4.42, zScores: { pts: -0.314, reb: 1.774, ast: 1.415, stl: 3.027, blk: -0.501, tpm: 0.249, fgImpact: -0.33, ftImpact: 0.814, to: -1.712 } },
          { name: "Robert Hinton", min: 22, pts: 12, reb: 3, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 4, fta: 6, composite: 1.27, zScores: { pts: 0.775, reb: -0.022, ast: 0.319, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: 0.567, ftImpact: -0.316, to: -0.031 } },
          { name: "Kabir Narasimhan", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.09, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Ryan Sullivan", min: 5, pts: 4, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.82, zScores: { pts: -0.47, reb: -0.022, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.095, ftImpact: 0, to: 0.809 } },
          { name: "Luca Ace-Nasteski", min: 15, pts: 9, reb: 6, ast: 2, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 6, ftm: 0, fta: 1, composite: 3.36, zScores: { pts: 0.308, reb: 1.056, ast: 0.319, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: 0.945, ftImpact: -0.972, to: 0.809 } },
          { name: "Julian Adigun", min: 13, pts: 5, reb: 4, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: -0.39, zScores: { pts: -0.314, reb: 0.337, ast: -0.777, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: 0.472, ftImpact: -0.565, to: -0.031 } },
          { name: "Preston Merrick", min: 9, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -1.092, reb: -0.381, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: 0, to: 0.809 } },
          { name: "Brandon Burrell", min: 13, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -5.86, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -1.888, ftImpact: 0, to: -0.031 } },
          { name: "Joseph Quartey", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Frankie Mannino", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.09, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Jason Singleton", min: 18, pts: 5, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: -2.62, zScores: { pts: -0.314, reb: -0.022, ast: 0.319, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -1.039, ftImpact: -0.565, to: -0.031 } },
          { name: "Payton Pitts", min: 2, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.39, zScores: { pts: -0.781, reb: -1.099, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.425, ftImpact: 0, to: 0.809 } },
          { name: "Xavier Nesbitt", min: 9, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.092, reb: -1.099, ast: -0.229, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: -0.031 } }
        ]
      }
    },
      {
      id: "401920231",
      line: "Dartmouth Big Green 69 @ Marist Red Foxes 62 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Dart", name: "Dartmouth Big Green", score: 69,
        players: [
          { name: "Dan Civello", min: 13, pts: 6, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 2, composite: -3.82, zScores: { pts: -0.159, reb: -1.099, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: -0.283, ftImpact: -1.943, to: -0.031 } },
          { name: "Cam Hiatt", min: 22, pts: 11, reb: 4, ast: 0, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 6, ftm: 2, fta: 3, composite: 0.14, zScores: { pts: 0.619, reb: 0.337, ast: -0.777, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: 0.945, ftImpact: -0.158, to: -1.712 } },
          { name: "Landon Williams", min: 24, pts: 10, reb: 2, ast: 3, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 4, fga: 5, ftm: 1, fta: 2, composite: 2.14, zScores: { pts: 0.464, reb: -0.381, ast: 0.867, stl: -0.741, blk: 0.954, tpm: 0.249, fgImpact: 1.322, ftImpact: -0.565, to: -0.031 } },
          { name: "Cameron McNamee", min: 25, pts: 12, reb: 6, ast: 2, stl: 2, blk: 0, to: 5, tpm: 2, fgm: 3, fga: 8, ftm: 4, fta: 4, composite: 1.58, zScores: { pts: 0.775, reb: 1.056, ast: 0.319, stl: 1.143, blk: -0.501, tpm: 1.165, fgImpact: -0.614, ftImpact: 1.627, to: -3.392 } },
          { name: "Nikola Abusara", min: 23, pts: 4, reb: 3, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 4, composite: -5.84, zScores: { pts: -0.47, reb: -0.022, ast: -0.229, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.095, ftImpact: -3.886, to: -0.872 } },
          { name: "Tyler Garrett", min: 5, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.35, zScores: { pts: -1.092, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Patrick Tivnan Jr.", min: 17, pts: 5, reb: 10, ast: 0, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: 2.06, zScores: { pts: -0.314, reb: 2.492, ast: -0.777, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: -1.039, ftImpact: 0, to: 0.809 } },
          { name: "Anton Strelnikov", min: 19, pts: 12, reb: 1, ast: 2, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 6, ftm: 3, fta: 5, composite: 0.6, zScores: { pts: 0.775, reb: -0.74, ast: 0.319, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: 0.945, ftImpact: -0.723, to: -0.872 } },
          { name: "Acen Jimenez", min: 16, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.78, zScores: { pts: -1.092, reb: -0.381, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.133, ftImpact: 0, to: -0.031 } },
          { name: "Ernas Valauskas", min: 17, pts: 7, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 3, fta: 4, composite: -2.14, zScores: { pts: -0.003, reb: -0.022, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.039, ftImpact: 0.249, to: 0.809 } },
          { name: "Ben Brown", min: 18, pts: 2, reb: 1, ast: 0, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.53, zScores: { pts: -0.781, reb: -0.74, ast: -0.777, stl: 2.085, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: 0, to: 0.809 } }
        ]
      },
      home: {
        abbr: "MRST", name: "Marist Red Foxes", score: 62,
        players: [

        ]
      }
    },
      {
      id: "401920201",
      line: "Little Rock Trojans 72 @ VCU Rams 82 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LR", name: "Little Rock Trojans", score: 72,
        players: [

        ]
      },
      home: {
        abbr: "VCU", name: "VCU Rams", score: 82,
        players: [
          { name: "Lazar Djokovic", min: 35, pts: 15, reb: 4, ast: 1, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 4, fga: 10, ftm: 6, fta: 10, composite: -1.07, zScores: { pts: 1.241, reb: 0.337, ast: -0.229, stl: -0.741, blk: 0.954, tpm: 0.249, fgImpact: -0.566, ftImpact: -1.445, to: -0.872 } },
          { name: "Michael Belle", min: 12, pts: 1, reb: 3, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 4, composite: -3.84, zScores: { pts: -0.936, reb: -0.022, ast: -0.777, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: -2.508, to: 0.809 } },
          { name: "Nyk Lewis", min: 37, pts: 15, reb: 3, ast: 5, stl: 3, blk: 0, to: 4, tpm: 1, fgm: 5, fga: 11, ftm: 4, fta: 4, composite: 3.95, zScores: { pts: 1.241, reb: -0.022, ast: 1.964, stl: 2.085, blk: -0.501, tpm: 0.249, fgImpact: -0.141, ftImpact: 1.627, to: -2.552 } },
          { name: "Blake Harper", min: 30, pts: 14, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 9, ftm: 6, fta: 8, composite: 0.23, zScores: { pts: 1.086, reb: -0.022, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: -0.991, ftImpact: 0.498, to: -0.031 } },
          { name: "Brandon Jennings", min: 14, pts: 7, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 4, fta: 4, composite: -0.17, zScores: { pts: -0.003, reb: 0.337, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: -0.33, ftImpact: 1.627, to: -0.031 } },
          { name: "Torey Alston", min: 31, pts: 17, reb: 12, ast: 1, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 8, fta: 11, composite: 8.16, zScores: { pts: 1.552, reb: 3.21, ast: -0.229, stl: -0.741, blk: 2.408, tpm: 0.249, fgImpact: 0.567, ftImpact: 0.34, to: 0.809 } },
          { name: "Jordan Tillery", min: 3, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.48, zScores: { pts: -0.936, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: -0.565, to: 0.809 } },
          { name: "Sammy Jackson", min: 7, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.83, zScores: { pts: -1.092, reb: -0.74, ast: 0.319, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: -0.031 } },
          { name: "Nyle Ralph-Beyer", min: 1, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.26, zScores: { pts: -0.625, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.425, ftImpact: 0, to: 0.809 } },
          { name: "Ahmad Nowell", min: 22, pts: 6, reb: 4, ast: 1, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 8, ftm: 3, fta: 4, composite: -3.78, zScores: { pts: -0.159, reb: 0.337, ast: -0.229, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -2.219, ftImpact: 0.249, to: -1.712 } },
          { name: "Tyrell Ward", min: 8, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 1, composite: -3.61, zScores: { pts: -0.625, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.425, ftImpact: 0.407, to: -0.031 } }
        ]
      }
    },
      {
      id: "401919803",
      line: "Long Island University Sharks 60 @ Florida Atlantic Owls 74 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LIU", name: "Long Island University Sharks", score: 60,
        players: [

        ]
      },
      home: {
        abbr: "FAU", name: "Florida Atlantic Owls", score: 74,
        players: [
          { name: "Mason Porter-Brown", min: 21, pts: 4, reb: 8, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 6, ftm: 4, fta: 4, composite: -2.79, zScores: { pts: -0.47, reb: 1.774, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -2.266, ftImpact: 1.627, to: -1.712 } },
          { name: "Josh Harris", min: 29, pts: 15, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 6, fga: 12, ftm: 3, fta: 5, composite: -0.31, zScores: { pts: 1.241, reb: 1.056, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.284, ftImpact: -0.723, to: -0.031 } },
          { name: "Tacko Ifaola", min: 19, pts: 0, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.27, zScores: { pts: -1.092, reb: 0.696, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Felipe Quinones", min: 32, pts: 14, reb: 6, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 7, fga: 12, ftm: 0, fta: 0, composite: 4.33, zScores: { pts: 1.086, reb: 1.056, ast: 0.319, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: 1.086, ftImpact: 0, to: 0.809 } },
          { name: "Kanaan Carlyle", min: 34, pts: 20, reb: 9, ast: 1, stl: 5, blk: 0, to: 2, tpm: 1, fgm: 7, fga: 18, ftm: 5, fta: 7, composite: 5.68, zScores: { pts: 2.019, reb: 2.133, ast: -0.229, stl: 3.969, blk: -0.501, tpm: 0.249, fgImpact: -1.18, ftImpact: 0.091, to: -0.872 } },
          { name: "Kieran Mullen", min: 21, pts: 7, reb: 4, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 1, composite: -0.67, zScores: { pts: -0.003, reb: 0.337, ast: -0.229, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.142, ftImpact: 0.407, to: -0.872 } },
          { name: "Milhan Charles", min: 30, pts: 12, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 8, fta: 12, composite: -0.82, zScores: { pts: 0.775, reb: -0.381, ast: 0.319, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.095, ftImpact: -0.631, to: -0.031 } },
          { name: "Braeden Speed", min: 13, pts: 2, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 2, fta: 2, composite: -3, zScores: { pts: -0.781, reb: -1.099, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: -1.511, ftImpact: 0.814, to: 0.809 } }
        ]
      }
    },
      {
      id: "401918976",
      line: "South Carolina Upstate Spartans 70 @ East Carolina Pirates 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UPST", name: "South Carolina Upstate Spartans", score: 70,
        players: [

        ]
      },
      home: {
        abbr: "ECU", name: "East Carolina Pirates", score: 83,
        players: [
          { name: "Kaseem Watson", min: 33, pts: 17, reb: 7, ast: 3, stl: 2, blk: 1, to: 1, tpm: 3, fgm: 5, fga: 8, ftm: 4, fta: 4, composite: 10.6, zScores: { pts: 1.552, reb: 1.415, ast: 0.867, stl: 1.143, blk: 0.954, tpm: 2.082, fgImpact: 0.992, ftImpact: 1.627, to: -0.031 } },
          { name: "Kaden Cooper", min: 30, pts: 9, reb: 5, ast: 0, stl: 3, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 5.28, zScores: { pts: 0.308, reb: 0.696, ast: -0.777, stl: 2.085, blk: 0.954, tpm: 0.249, fgImpact: 0.142, ftImpact: 0.814, to: 0.809 } },
          { name: "Eli DeLaurier", min: 13, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.88, zScores: { pts: -0.47, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.85, ftImpact: 0, to: 0.809 } },
          { name: "Cian Medley", min: 35, pts: 14, reb: 4, ast: 11, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 13, ftm: 5, fta: 6, composite: 4.28, zScores: { pts: 1.086, reb: 0.337, ast: 5.253, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -1.699, ftImpact: 1.063, to: -1.712 } },
          { name: "Brycen Blaine", min: 28, pts: 14, reb: 4, ast: 0, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 5, fga: 10, ftm: 1, fta: 2, composite: 0.39, zScores: { pts: 1.086, reb: 0.337, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 2.082, fgImpact: 0.236, ftImpact: -0.565, to: -1.712 } },
          { name: "Jordyn Buchanan", min: 13, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.35, zScores: { pts: -0.625, reb: -0.74, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.425, ftImpact: 0, to: 0.809 } },
          { name: "Matthew Hinton", min: 4, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 4, composite: -4.92, zScores: { pts: -0.781, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: -1.129, to: 0.809 } },
          { name: "Maxim Klitschko", min: 14, pts: 6, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 4, composite: -2.49, zScores: { pts: -0.159, reb: -0.74, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.472, ftImpact: -1.129, to: 0.809 } },
          { name: "Ashton McCullough", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 1, composite: -5.88, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: -0.972, to: -0.031 } },
          { name: "Trevor Best", min: 27, pts: 14, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 12, ftm: 1, fta: 2, composite: -0.25, zScores: { pts: 1.086, reb: -0.381, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 2.082, fgImpact: -0.519, ftImpact: -0.565, to: -0.872 } }
        ]
      }
    },
      {
      id: "401918073",
      line: "Stetson Hatters 72 @ Clemson Tigers 85 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "STET", name: "Stetson Hatters", score: 72,
        players: [

        ]
      },
      home: {
        abbr: "Clem", name: "Clemson Tigers", score: 85,
        players: [
          { name: "Liutauras Lelevicius", min: 33, pts: 13, reb: 6, ast: 2, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 3, fga: 4, ftm: 5, fta: 6, composite: 5.71, zScores: { pts: 0.93, reb: 1.056, ast: 0.319, stl: 0.201, blk: 0.954, tpm: 1.165, fgImpact: 0.897, ftImpact: 1.063, to: -0.872 } },
          { name: "Dylan Faulkner", min: 33, pts: 16, reb: 11, ast: 5, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 7, fga: 8, ftm: 2, fta: 6, composite: 8.49, zScores: { pts: 1.397, reb: 2.851, ast: 1.964, stl: 0.201, blk: 2.408, tpm: -0.668, fgImpact: 2.597, ftImpact: -3.072, to: 0.809 } },
          { name: "David Fuchs", min: 19, pts: 12, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 6, ftm: 2, fta: 2, composite: 0.6, zScores: { pts: 0.775, reb: -0.022, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 1.747, ftImpact: 0.814, to: -0.031 } },
          { name: "Ace Buckner", min: 26, pts: 20, reb: 2, ast: 4, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 6, fga: 14, ftm: 5, fta: 5, composite: 5.53, zScores: { pts: 2.019, reb: -0.381, ast: 1.415, stl: 0.201, blk: -0.501, tpm: 2.082, fgImpact: -0.472, ftImpact: 2.034, to: -0.872 } },
          { name: "Cole Certa", min: 32, pts: 13, reb: 4, ast: 6, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 7, ftm: 7, fta: 8, composite: 4.61, zScores: { pts: 0.93, reb: 0.337, ast: 2.512, stl: 0.201, blk: -0.501, tpm: 1.165, fgImpact: -1.039, ftImpact: 1.876, to: -0.872 } },
          { name: "Chase Thompson", min: 25, pts: 6, reb: 0, ast: 0, stl: 1, blk: 2, to: 0, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: 1.89, zScores: { pts: -0.159, reb: -1.099, ast: -0.777, stl: 0.201, blk: 2.408, tpm: 1.165, fgImpact: -0.661, ftImpact: 0, to: 0.809 } },
          { name: "Trent Steinour", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.45, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Dallas Thomas", min: 16, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 4, composite: -7.28, zScores: { pts: -0.936, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: -2.508, to: -0.031 } },
          { name: "Harris Reynolds", min: 13, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 4, fta: 4, composite: -1.86, zScores: { pts: -0.47, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: 1.627, to: 0.809 } }
        ]
      }
    },
      {
      id: "401916296",
      line: "Bucknell Bison 67 @ Maryland Terrapins 96 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BUCK", name: "Bucknell Bison", score: 67,
        players: [

        ]
      },
      home: {
        abbr: "MD", name: "Maryland Terrapins", score: 96,
        players: [
          { name: "Tomislav Buljan", min: 20, pts: 10, reb: 7, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 4, fta: 4, composite: 2.81, zScores: { pts: 0.464, reb: 1.415, ast: -0.777, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: 0.142, ftImpact: 1.627, to: -0.031 } },
          { name: "Pharrel Payne", min: 24, pts: 13, reb: 6, ast: 0, stl: 2, blk: 2, to: 2, tpm: 0, fgm: 5, fga: 6, ftm: 3, fta: 9, composite: 0.36, zScores: { pts: 0.93, reb: 1.056, ast: -0.777, stl: 1.143, blk: 2.408, tpm: -0.668, fgImpact: 1.747, ftImpact: -4.609, to: -0.872 } },
          { name: "Mike McNair Jr.", min: 21, pts: 6, reb: 3, ast: 2, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 3.74, zScores: { pts: -0.159, reb: -0.022, ast: 0.319, stl: 0.201, blk: 0.954, tpm: 1.165, fgImpact: 0.472, ftImpact: 0, to: 0.809 } },
          { name: "Andre Mills", min: 23, pts: 22, reb: 11, ast: 2, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 8, fga: 12, ftm: 3, fta: 4, composite: 7.71, zScores: { pts: 2.33, reb: 2.851, ast: 0.319, stl: 0.201, blk: -0.501, tpm: 2.082, fgImpact: 1.889, ftImpact: 0.249, to: -1.712 } },
          { name: "DJ Wagner", min: 22, pts: 10, reb: 5, ast: 3, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 13, ftm: 0, fta: 0, composite: 0.75, zScores: { pts: 0.464, reb: 0.696, ast: 0.867, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: -0.897, ftImpact: 0, to: -0.872 } },
          { name: "Adama Tambedou", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.45, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Baba Oladotun", min: 19, pts: 7, reb: 4, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 4, composite: -1.29, zScores: { pts: -0.003, reb: 0.337, ast: -0.229, stl: -0.741, blk: 2.408, tpm: -0.668, fgImpact: 0.142, ftImpact: -2.508, to: -0.031 } },
          { name: "Austin Brown", min: 12, pts: 2, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 6, ftm: 2, fta: 2, composite: -3.59, zScores: { pts: -0.781, reb: -0.022, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -2.266, ftImpact: 0.814, to: 0.809 } },
          { name: "Robert Jennings II", min: 16, pts: 7, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: -0.52, zScores: { pts: -0.003, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.85, ftImpact: 0.814, to: -0.031 } },
          { name: "Kaden House", min: 18, pts: 14, reb: 5, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 9, ftm: 6, fta: 6, composite: 3.2, zScores: { pts: 1.086, reb: 0.696, ast: -0.777, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: -0.189, ftImpact: 2.441, to: -0.031 } },
          { name: "Bishop Boswell", min: 17, pts: 3, reb: 3, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -3.66, zScores: { pts: -0.625, reb: -0.022, ast: 0.319, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: -1.463, ftImpact: 0, to: -0.872 } },
          { name: "George Turkson Jr.", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -0.781, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401916286",
      line: "Eastern Illinois Panthers 57 @ Indiana Hoosiers 91 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "EIU", name: "Eastern Illinois Panthers", score: 57,
        players: [

        ]
      },
      home: {
        abbr: "Ind", name: "Indiana Hoosiers", score: 91,
        players: [
          { name: "Aiden Sherrell", min: 25, pts: 9, reb: 6, ast: 1, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 11, ftm: 3, fta: 4, composite: 1.87, zScores: { pts: 0.308, reb: 1.056, ast: -0.229, stl: 1.143, blk: 0.954, tpm: -0.668, fgImpact: -1.747, ftImpact: 0.249, to: 0.809 } },
          { name: "Samet Yigitoglu", min: 18, pts: 8, reb: 7, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 1, composite: 2.66, zScores: { pts: 0.153, reb: 1.415, ast: -0.229, stl: -0.741, blk: 2.408, tpm: -0.668, fgImpact: 1.322, ftImpact: -0.972, to: -0.031 } },
          { name: "Markus Burton", min: 24, pts: 19, reb: 2, ast: 5, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 7, fga: 8, ftm: 2, fta: 4, composite: 7.61, zScores: { pts: 1.863, reb: -0.381, ast: 1.964, stl: 1.143, blk: -0.501, tpm: 2.082, fgImpact: 2.597, ftImpact: -1.129, to: -0.031 } },
          { name: "Jaeden Mustaf", min: 24, pts: 8, reb: 3, ast: 2, stl: 3, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 3, ftm: 4, fta: 5, composite: 0.78, zScores: { pts: 0.153, reb: -0.022, ast: 0.319, stl: 2.085, blk: -0.501, tpm: -0.668, fgImpact: 0.472, ftImpact: 0.656, to: -1.712 } },
          { name: "Darren Harris", min: 23, pts: 7, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 7, ftm: 5, fta: 6, composite: -0.83, zScores: { pts: -0.003, reb: 0.337, ast: -0.229, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -1.841, ftImpact: 1.063, to: 0.809 } },
          { name: "Trevor Manhertz", min: 15, pts: 11, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 6, ftm: 3, fta: 4, composite: 0.69, zScores: { pts: 0.619, reb: -0.381, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 1.165, fgImpact: 0.142, ftImpact: 0.249, to: -0.031 } },
          { name: "Vaughn Karvala", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.39, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.872 } },
          { name: "Sam Alexis", min: 15, pts: 6, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 0.55, zScores: { pts: -0.159, reb: -0.74, ast: 0.319, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.472, ftImpact: 0.814, to: 0.809 } },
          { name: "Trent Sisley", min: 16, pts: 7, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -1.08, zScores: { pts: -0.003, reb: -0.74, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.52, ftImpact: 0, to: -0.031 } },
          { name: "Clemens Sokolov", min: 4, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -2.71, zScores: { pts: -0.781, reb: -0.022, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0.814, to: -0.031 } },
          { name: "Justin Monden", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.45, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Drew Snively", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Bryce Lindsay", min: 24, pts: 14, reb: 1, ast: 1, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 9, ftm: 3, fta: 4, composite: 2.87, zScores: { pts: 1.086, reb: -0.74, ast: -0.229, stl: 1.143, blk: -0.501, tpm: 2.082, fgImpact: -0.189, ftImpact: 0.249, to: -0.031 } }
        ]
      }
    },
      {
      id: "401913099",
      line: "Western Carolina Catamounts 72 @ North Carolina Tar Heels 80 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WCU", name: "Western Carolina Catamounts", score: 72,
        players: [

        ]
      },
      home: {
        abbr: "UNC", name: "North Carolina Tar Heels", score: 80,
        players: [
          { name: "Jarin Stevenson", min: 30, pts: 8, reb: 2, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 2, fta: 4, composite: -2.29, zScores: { pts: 0.153, reb: -0.381, ast: -0.777, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: -0.614, ftImpact: -1.129, to: -0.031 } },
          { name: "Sayon Keita", min: 20, pts: 4, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -0.41, zScores: { pts: -0.47, reb: -0.381, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.047, ftImpact: 0.814, to: 0.809 } },
          { name: "Neo Avdalas", min: 31, pts: 13, reb: 7, ast: 4, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 8, ftm: 3, fta: 5, composite: 1.44, zScores: { pts: 0.93, reb: 1.415, ast: 1.415, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: 0.189, ftImpact: -0.723, to: -1.712 } },
          { name: "Matt Able", min: 26, pts: 18, reb: 3, ast: 2, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 10, ftm: 4, fta: 6, composite: 1.78, zScores: { pts: 1.708, reb: -0.022, ast: 0.319, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: 1.039, ftImpact: -0.316, to: -0.872 } },
          { name: "Terrence Brown", min: 30, pts: 14, reb: 5, ast: 2, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 11, ftm: 8, fta: 10, composite: 3.06, zScores: { pts: 1.086, reb: 0.696, ast: 0.319, stl: 1.143, blk: 0.954, tpm: -0.668, fgImpact: -1.747, ftImpact: 1.312, to: -0.031 } },
          { name: "Alex Samodurov", min: 12, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.37, zScores: { pts: -1.092, reb: -0.022, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Maximo Adams", min: 18, pts: 10, reb: 4, ast: 0, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 2.7, zScores: { pts: 0.464, reb: 0.337, ast: -0.777, stl: -0.741, blk: 0.954, tpm: 1.165, fgImpact: 0.52, ftImpact: 0.814, to: -0.031 } },
          { name: "Isaiah Denis", min: 9, pts: 2, reb: 1, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 2, fta: 2, composite: -0.96, zScores: { pts: -0.781, reb: -0.74, ast: 1.415, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -1.511, ftImpact: 0.814, to: 0.809 } },
          { name: "Jaydon Young", min: 14, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.07, zScores: { pts: -0.159, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: -0.283, ftImpact: 0, to: -0.031 } },
          { name: "Angelo Brizzi", min: 10, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 2, fta: 4, composite: -3.08, zScores: { pts: -0.314, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.425, ftImpact: -1.129, to: 0.809 } }
        ]
      }
    },
      {
      id: "401912207",
      line: "American University Eagles 53 @ Cincinnati Bearcats 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "AMER", name: "American University Eagles", score: 53,
        players: [

        ]
      },
      home: {
        abbr: "Cin", name: "Cincinnati Bearcats", score: 79,
        players: [
          { name: "Tyler Tejada", min: 22, pts: 13, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 2.44, zScores: { pts: 0.93, reb: 0.696, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 2.082, fgImpact: 0.236, ftImpact: 0, to: -0.031 } },
          { name: "Jayden Hastings", min: 2, pts: 0, reb: 2, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.95, zScores: { pts: -1.092, reb: -0.381, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: -0.872 } },
          { name: "Tylen Riley", min: 23, pts: 9, reb: 1, ast: 5, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 10, ftm: 3, fta: 4, composite: -1.43, zScores: { pts: 0.308, reb: -0.74, ast: 1.964, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -1.369, ftImpact: 0.249, to: -0.872 } },
          { name: "MJ Collins Jr.", min: 25, pts: 13, reb: 2, ast: 0, stl: 4, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 8, ftm: 4, fta: 4, composite: 5.17, zScores: { pts: 0.93, reb: -0.381, ast: -0.777, stl: 3.027, blk: -0.501, tpm: 0.249, fgImpact: 0.189, ftImpact: 1.627, to: 0.809 } },
          { name: "Myles Colvin", min: 15, pts: 3, reb: 7, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 1, composite: -1.22, zScores: { pts: -0.625, reb: 1.415, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.086, ftImpact: 0.407, to: 0.809 } },
          { name: "David Iweze", min: 17, pts: 8, reb: 7, ast: 1, stl: 4, blk: 2, to: 2, tpm: 1, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: 6.11, zScores: { pts: 0.153, reb: 1.415, ast: -0.229, stl: 3.027, blk: 2.408, tpm: 0.249, fgImpact: 0.52, ftImpact: -0.565, to: -0.872 } },
          { name: "Adlan Elamin", min: 17, pts: 5, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 1, composite: -1.04, zScores: { pts: -0.314, reb: -0.381, ast: -0.229, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.472, ftImpact: 0.407, to: -0.031 } },
          { name: "Amani Lyles", min: 7, pts: 2, reb: 3, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.75, zScores: { pts: -0.781, reb: -0.022, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.33, ftImpact: 0, to: -0.872 } },
          { name: "Riley Allenspach", min: 13, pts: 6, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: -3.08, zScores: { pts: -0.159, reb: -0.74, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.472, ftImpact: -0.565, to: -0.872 } },
          { name: "Trevian Carson", min: 14, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.58, zScores: { pts: -0.314, reb: -0.022, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: -0.283, ftImpact: 0, to: 0.809 } },
          { name: "Elijah Perryman", min: 14, pts: 0, reb: 0, ast: 5, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -2.36, zScores: { pts: -1.092, reb: -1.099, ast: 1.964, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -1.133, ftImpact: 0, to: -0.031 } },
          { name: "Eric Mahaffey", min: 13, pts: 6, reb: 4, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: 0.87, zScores: { pts: -0.159, reb: 0.337, ast: 0.319, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.283, ftImpact: 0.814, to: 0.809 } },
          { name: "Akai Fleming", min: 17, pts: 9, reb: 6, ast: 3, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 4, fga: 8, ftm: 0, fta: 2, composite: 3.63, zScores: { pts: 0.308, reb: 1.056, ast: 0.867, stl: 1.143, blk: 0.954, tpm: 0.249, fgImpact: 0.189, ftImpact: -1.943, to: 0.809 } }
        ]
      }
    },
      {
      id: "401911333",
      line: "Air Force Falcons 71 @ Wright State Raiders 102 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "AF", name: "Air Force Falcons", score: 71,
        players: [
          { name: "Lucas Hobin", min: 17, pts: 2, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 4, ftm: 2, fta: 3, composite: -5.67, zScores: { pts: -0.781, reb: 0.337, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.511, ftImpact: -0.158, to: -0.872 } },
          { name: "Brendan Martin", min: 8, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.18, zScores: { pts: -0.781, reb: -0.74, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.33, ftImpact: 0, to: 0.809 } },
          { name: "Caleb Walker", min: 28, pts: 11, reb: 8, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 9, ftm: 5, fta: 10, composite: -1.71, zScores: { pts: 0.619, reb: 1.774, ast: -0.229, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: -0.991, ftImpact: -2.823, to: -0.031 } },
          { name: "Grant Best", min: 31, pts: 17, reb: 2, ast: 3, stl: 4, blk: 0, to: 3, tpm: 2, fgm: 6, fga: 14, ftm: 3, fta: 3, composite: 4.77, zScores: { pts: 1.552, reb: -0.381, ast: 0.867, stl: 3.027, blk: -0.501, tpm: 1.165, fgImpact: -0.472, ftImpact: 1.221, to: -1.712 } },
          { name: "Kam Sanders", min: 33, pts: 17, reb: 5, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 16, ftm: 4, fta: 8, composite: -2.1, zScores: { pts: 1.552, reb: 0.696, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -1.227, ftImpact: -2.259, to: -0.031 } },
          { name: "Riley Dering", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.29, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: -0.031 } },
          { name: "Eli Robinson", min: 11, pts: 4, reb: 3, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -1.73, zScores: { pts: -0.47, reb: -0.022, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.047, ftImpact: 0.814, to: -0.872 } },
          { name: "Kolby Gilles", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Josh Gatete", min: 5, pts: 3, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.15, zScores: { pts: -0.625, reb: -1.099, ast: -0.229, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.047, ftImpact: 0, to: 0.809 } },
          { name: "Wesley Celichowski", min: 12, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.93, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: -0.031 } },
          { name: "Ethan Greenberg", min: 20, pts: 3, reb: 1, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.15, zScores: { pts: -0.625, reb: -0.74, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -1.086, ftImpact: 0, to: -0.872 } },
          { name: "Justin Hinds", min: 6, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -1.092, reb: -0.381, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: 0, to: 0.809 } },
          { name: "A.J. Patterson", min: 23, pts: 12, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 9, ftm: 4, fta: 6, composite: 0.14, zScores: { pts: 0.775, reb: -0.381, ast: 0.319, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: -0.991, ftImpact: -0.316, to: 0.809 } }
        ]
      },
      home: {
        abbr: "WRST", name: "Wright State Raiders", score: 102,
        players: [

        ]
      }
    },
      {
      id: "401911304",
      line: "New Hampshire Wildcats 59 @ Brown Bears 55 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UNH", name: "New Hampshire Wildcats", score: 59,
        players: [

        ]
      },
      home: {
        abbr: "Brown", name: "Brown Bears", score: 55,
        players: [
          { name: "N'famara Dabo", min: 27, pts: 8, reb: 9, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 3, composite: 0.92, zScores: { pts: 0.153, reb: 2.133, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.897, ftImpact: -0.158, to: -0.872 } },
          { name: "Timmy Bollin", min: 21, pts: 2, reb: 7, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 2, composite: -3.25, zScores: { pts: -0.781, reb: 1.415, ast: -0.229, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.708, ftImpact: -1.943, to: -0.031 } },
          { name: "Brady Loughlin", min: 37, pts: 12, reb: 5, ast: 1, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 10, ftm: 1, fta: 2, composite: 1.86, zScores: { pts: 0.775, reb: 0.696, ast: -0.229, stl: 0.201, blk: -0.501, tpm: 2.082, fgImpact: -0.566, ftImpact: -0.565, to: -0.031 } },
          { name: "Jerrell Barron Jr.", min: 23, pts: 6, reb: 2, ast: 2, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -3.98, zScores: { pts: -0.159, reb: -0.381, ast: 0.319, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.236, ftImpact: 0, to: -2.552 } },
          { name: "Jeremiah Jenkins", min: 32, pts: 17, reb: 5, ast: 3, stl: 2, blk: 0, to: 3, tpm: 2, fgm: 6, fga: 10, ftm: 3, fta: 5, composite: 3.53, zScores: { pts: 1.552, reb: 0.696, ast: 0.867, stl: 1.143, blk: -0.501, tpm: 1.165, fgImpact: 1.039, ftImpact: -0.723, to: -1.712 } },
          { name: "Charlie O'Sullivan", min: 9, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.092, reb: -1.099, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: 0, to: 0.809 } },
          { name: "Wyatt DeGraaf", min: 11, pts: 4, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.41, zScores: { pts: -0.47, reb: -1.099, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.095, ftImpact: 0, to: 0.809 } },
          { name: "Rykan Woo", min: 14, pts: 2, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.43, zScores: { pts: -0.781, reb: -1.099, ast: 0.319, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.708, ftImpact: 0, to: 0.809 } },
          { name: "Kenneth Francis Jr.", min: 4, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.092, reb: -1.099, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: 0, to: 0.809 } },
          { name: "Ray Cuevas", min: 16, pts: 3, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.85, zScores: { pts: -0.625, reb: -0.022, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.047, ftImpact: 0, to: -0.031 } },
          { name: "David Rochester", min: 7, pts: 1, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -4.98, zScores: { pts: -0.936, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: -0.565, to: -0.031 } }
        ]
      }
    },
      {
      id: "401911261",
      line: "Youngstown State Penguins 79 @ St. Bonaventure Bonnies 71 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "YSU", name: "Youngstown State Penguins", score: 79,
        players: [

        ]
      },
      home: {
        abbr: "StBon", name: "St. Bonaventure Bonnies", score: 71,
        players: [
          { name: "Benjamin Bill", min: 30, pts: 15, reb: 9, ast: 2, stl: 1, blk: 4, to: 5, tpm: 0, fgm: 6, fga: 8, ftm: 3, fta: 4, composite: 7.19, zScores: { pts: 1.241, reb: 2.133, ast: 0.319, stl: 0.201, blk: 5.317, tpm: -0.668, fgImpact: 1.795, ftImpact: 0.249, to: -3.392 } },
          { name: "Zach Philipkoski", min: 33, pts: 28, reb: 3, ast: 4, stl: 2, blk: 1, to: 0, tpm: 4, fgm: 10, fga: 14, ftm: 4, fta: 7, composite: 12.01, zScores: { pts: 3.263, reb: -0.022, ast: 1.415, stl: 1.143, blk: 0.954, tpm: 2.999, fgImpact: 2.739, ftImpact: -1.287, to: 0.809 } },
          { name: "Ilia Ermakov", min: 27, pts: 5, reb: 5, ast: 4, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: 0.21, zScores: { pts: -0.314, reb: 0.696, ast: 1.415, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -0.661, ftImpact: 0, to: -0.872 } },
          { name: "Taj Au-Duke", min: 32, pts: 12, reb: 4, ast: 2, stl: 3, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 12, ftm: 1, fta: 4, composite: -1.47, zScores: { pts: 0.775, reb: 0.337, ast: 0.319, stl: 2.085, blk: -0.501, tpm: 0.249, fgImpact: -0.519, ftImpact: -2.508, to: -1.712 } },
          { name: "Ari Fulton", min: 31, pts: 1, reb: 8, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 5, ftm: 1, fta: 4, composite: -5.11, zScores: { pts: -0.936, reb: 1.774, ast: -0.229, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: -1.888, ftImpact: -2.508, to: -0.872 } },
          { name: "Cameron Blankenberg", min: 18, pts: 0, reb: 4, ast: 0, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 2, composite: -3.21, zScores: { pts: -1.092, reb: 0.337, ast: -0.777, stl: 1.143, blk: 0.954, tpm: -0.668, fgImpact: -1.133, ftImpact: -1.943, to: -0.031 } },
          { name: "Ryan Kalambay", min: 10, pts: 8, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 4, ftm: 0, fta: 0, composite: 1.05, zScores: { pts: 0.153, reb: -0.381, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 1.7, ftImpact: 0, to: 0.809 } },
          { name: "Ryan Heath", min: 8, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.15, zScores: { pts: -0.781, reb: -1.099, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.33, ftImpact: 0, to: 0.809 } },
          { name: "Akbar Waheed III", min: 12, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -5.24, zScores: { pts: -1.092, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.888, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401911237",
      line: "UNC Asheville Bulldogs 77 @ Richmond Spiders 100 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UNCA", name: "UNC Asheville Bulldogs", score: 77,
        players: [

        ]
      },
      home: {
        abbr: "Rich", name: "Richmond Spiders", score: 100,
        players: [
          { name: "Jamie Kaiser Jr.", min: 30, pts: 16, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 12, ftm: 0, fta: 0, composite: 3.91, zScores: { pts: 1.397, reb: 0.337, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 2.999, fgImpact: 0.284, ftImpact: 0, to: -0.031 } },
          { name: "Amon Dorries", min: 27, pts: 10, reb: 6, ast: 7, stl: 0, blk: 5, to: 4, tpm: 0, fgm: 5, fga: 5, ftm: 0, fta: 0, composite: 9.51, zScores: { pts: 0.464, reb: 1.056, ast: 3.06, stl: -0.741, blk: 6.772, tpm: -0.668, fgImpact: 2.125, ftImpact: 0, to: -2.552 } },
          { name: "Aiden Argabright", min: 31, pts: 10, reb: 4, ast: 7, stl: 5, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 6, ftm: 4, fta: 7, composite: 5.67, zScores: { pts: 0.464, reb: 0.337, ast: 3.06, stl: 3.969, blk: -0.501, tpm: 1.165, fgImpact: -0.661, ftImpact: -1.287, to: -0.872 } },
          { name: "Derin Saran", min: 32, pts: 15, reb: 3, ast: 8, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 10, ftm: 0, fta: 2, composite: 6.62, zScores: { pts: 1.241, reb: -0.022, ast: 3.608, stl: 1.143, blk: -0.501, tpm: 2.082, fgImpact: 1.039, ftImpact: -1.943, to: -0.031 } },
          { name: "Dominick Stewart", min: 28, pts: 29, reb: 5, ast: 3, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 9, fga: 12, ftm: 7, fta: 8, composite: 11.28, zScores: { pts: 3.418, reb: 0.696, ast: 0.867, stl: -0.741, blk: -0.501, tpm: 2.999, fgImpact: 2.692, ftImpact: 1.876, to: -0.031 } },
          { name: "Chad Cook", min: 13, pts: 6, reb: 0, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 0.15, zScores: { pts: -0.159, reb: -1.099, ast: -0.229, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.472, ftImpact: 0.814, to: 0.809 } },
          { name: "Andrew Ball", min: 15, pts: 10, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 2, fta: 2, composite: -0.04, zScores: { pts: 0.464, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.945, ftImpact: 0.814, to: 0.809 } },
          { name: "Will Harper III", min: 10, pts: 0, reb: 2, ast: 1, stl: 3, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.63, zScores: { pts: -1.092, reb: -0.381, ast: -0.229, stl: 2.085, blk: -0.501, tpm: -0.668, fgImpact: -1.133, ftImpact: 0, to: -1.712 } },
          { name: "Collin Tanner", min: 14, pts: 4, reb: 5, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.55, zScores: { pts: -0.47, reb: 0.696, ast: -0.229, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: 0.095, ftImpact: 0, to: -0.031 } }
        ]
      }
    },
      {
      id: "401911185",
      line: "NJIT Highlanders 58 @ Dayton Flyers 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NJIT", name: "NJIT Highlanders", score: 58,
        players: [

        ]
      },
      home: {
        abbr: "Dayt", name: "Dayton Flyers", score: 89,
        players: [
          { name: "Grant Randall", min: 27, pts: 7, reb: 6, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 1, fta: 2, composite: 0.51, zScores: { pts: -0.003, reb: 1.056, ast: 0.319, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: -0.236, ftImpact: -0.565, to: -0.031 } },
          { name: "Amal L'Etang", min: 27, pts: 20, reb: 11, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 12, ftm: 8, fta: 10, composite: 4.4, zScores: { pts: 2.019, reb: 2.851, ast: -0.229, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.284, ftImpact: 1.312, to: -0.872 } },
          { name: "Aiden Derkack", min: 29, pts: 21, reb: 11, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 9, ftm: 7, fta: 7, composite: 9.5, zScores: { pts: 2.174, reb: 2.851, ast: 0.319, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: 1.417, ftImpact: 2.848, to: -0.031 } },
          { name: "Zaide Lowery", min: 19, pts: 8, reb: 1, ast: 3, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 0.89, zScores: { pts: 0.153, reb: -0.74, ast: 0.867, stl: 2.085, blk: -0.501, tpm: -0.668, fgImpact: 0.567, ftImpact: 0, to: -0.872 } },
          { name: "Travis Perry", min: 18, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -4.94, zScores: { pts: -0.625, reb: -0.381, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: -1.841, ftImpact: 0, to: -0.872 } },
          { name: "Cody Peck", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Damon Friery", min: 6, pts: 5, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.63, zScores: { pts: -0.314, reb: -0.022, ast: -0.777, stl: -0.741, blk: 0.954, tpm: 0.249, fgImpact: 0.472, ftImpact: 0, to: 0.809 } },
          { name: "Jaiun Simon", min: 13, pts: 4, reb: 6, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.58, zScores: { pts: -0.47, reb: 1.056, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.283, ftImpact: 0, to: 0.809 } },
          { name: "Malcolm Thomas", min: 10, pts: 0, reb: 0, ast: 1, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.29, zScores: { pts: -1.092, reb: -1.099, ast: -0.229, stl: -0.741, blk: 2.408, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: -0.872 } },
          { name: "Julian Washington", min: 1, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.26, zScores: { pts: -0.625, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.425, ftImpact: 0, to: 0.809 } },
          { name: "Tristian Ford", min: 28, pts: 13, reb: 2, ast: 4, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 5.56, zScores: { pts: 0.93, reb: -0.381, ast: 1.415, stl: 0.201, blk: -0.501, tpm: 2.082, fgImpact: 0.189, ftImpact: 0.814, to: 0.809 } },
          { name: "Landen Joseph", min: 19, pts: 5, reb: 4, ast: 4, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.71, zScores: { pts: -0.314, reb: 0.337, ast: 1.415, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: -0.283, ftImpact: 0, to: -0.872 } },
          { name: "Evan Dickey", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.09, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Jaron McKie", min: 1, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.52, zScores: { pts: -1.092, reb: -1.099, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401909716",
      line: "New Haven Chargers 58 @ Syracuse Orange 74 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NHVN", name: "New Haven Chargers", score: 58,
        players: [

        ]
      },
      home: {
        abbr: "Syr", name: "Syracuse Orange", score: 74,
        players: [
          { name: "Mark Morano", min: 22, pts: 9, reb: 1, ast: 1, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: 2.02, zScores: { pts: 0.308, reb: -0.74, ast: -0.229, stl: 0.201, blk: 0.954, tpm: 2.082, fgImpact: -1.369, ftImpact: 0, to: 0.809 } },
          { name: "Sadiq White Jr.", min: 25, pts: 14, reb: 10, ast: 1, stl: 2, blk: 2, to: 0, tpm: 0, fgm: 5, fga: 10, ftm: 4, fta: 8, composite: 5.02, zScores: { pts: 1.086, reb: 2.492, ast: -0.229, stl: 1.143, blk: 2.408, tpm: -0.668, fgImpact: 0.236, ftImpact: -2.259, to: 0.809 } },
          { name: "Luke Wilson", min: 23, pts: 4, reb: 5, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -1.02, zScores: { pts: -0.47, reb: 0.696, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.047, ftImpact: 0.814, to: -0.872 } },
          { name: "Gavin Doty", min: 34, pts: 14, reb: 13, ast: 3, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 7, fta: 8, composite: 8.86, zScores: { pts: 1.086, reb: 3.569, ast: 0.867, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: -0.236, ftImpact: 1.876, to: 0.809 } },
          { name: "Garwey Dual", min: 23, pts: 7, reb: 1, ast: 2, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 1, composite: -0.45, zScores: { pts: -0.003, reb: -0.74, ast: 0.319, stl: -0.741, blk: 0.954, tpm: 0.249, fgImpact: 0.52, ftImpact: -0.972, to: -0.031 } },
          { name: "Amarri Monroe", min: 9, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.18, zScores: { pts: -0.314, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.472, ftImpact: 0, to: 0.809 } },
          { name: "Tasman Goodrick", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.45, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Abdramane Siby", min: 16, pts: 4, reb: 1, ast: 0, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 1.1, zScores: { pts: -0.47, reb: -0.74, ast: -0.777, stl: 1.143, blk: 0.954, tpm: -0.668, fgImpact: 0.85, ftImpact: 0, to: 0.809 } },
          { name: "Iker Martinez", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.09, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Ryan Moesch", min: 17, pts: 0, reb: 0, ast: 5, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 8, ftm: 0, fta: 0, composite: -3.31, zScores: { pts: -1.092, reb: -1.099, ast: 1.964, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: -3.022, ftImpact: 0, to: -0.031 } },
          { name: "Kiyan Anthony", min: 25, pts: 17, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 12, ftm: 5, fta: 6, composite: 3.67, zScores: { pts: 1.552, reb: -0.022, ast: 0.867, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: -0.519, ftImpact: 1.063, to: 0.809 } }
        ]
      }
    },
      {
      id: "401909705",
      line: "Rider Broncs 57 @ Pittsburgh Panthers 95 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "RID", name: "Rider Broncs", score: 57,
        players: [

        ]
      },
      home: {
        abbr: "Pitt", name: "Pittsburgh Panthers", score: 95,
        players: [
          { name: "Akir Souare", min: 16, pts: 0, reb: 5, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.15, zScores: { pts: -1.092, reb: 0.696, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -1.133, ftImpact: 0, to: -0.872 } },
          { name: "Baye Ndongo", min: 16, pts: 12, reb: 6, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 10, ftm: 2, fta: 5, composite: -0.87, zScores: { pts: 0.775, reb: 1.056, ast: -0.777, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: 0.236, ftImpact: -2.101, to: -0.031 } },
          { name: "Naithan George", min: 29, pts: 8, reb: 0, ast: 8, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 3.45, zScores: { pts: 0.153, reb: -1.099, ast: 3.608, stl: 1.143, blk: -0.501, tpm: 1.165, fgImpact: -0.991, ftImpact: 0, to: -0.031 } },
          { name: "A'lahn Sumler", min: 28, pts: 12, reb: 4, ast: 5, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 6, ftm: 2, fta: 2, composite: 7.45, zScores: { pts: 0.775, reb: 0.337, ast: 1.964, stl: 1.143, blk: -0.501, tpm: 1.165, fgImpact: 0.945, ftImpact: 0.814, to: 0.809 } },
          { name: "Jonathan Powell", min: 28, pts: 18, reb: 6, ast: 2, stl: 0, blk: 1, to: 2, tpm: 6, fgm: 6, fga: 9, ftm: 0, fta: 2, composite: 6.73, zScores: { pts: 1.708, reb: 1.056, ast: 0.319, stl: -0.741, blk: 0.954, tpm: 4.832, fgImpact: 1.417, ftImpact: -1.943, to: -0.872 } },
          { name: "Kraig Gilbert", min: 5, pts: 3, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.09, zScores: { pts: -0.625, reb: -0.381, ast: -0.777, stl: -0.741, blk: 0.954, tpm: 0.249, fgImpact: 0.425, ftImpact: 0, to: 0.809 } },
          { name: "Dominique Diomande", min: 7, pts: 5, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 1, composite: -0.75, zScores: { pts: -0.314, reb: -0.381, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.472, ftImpact: 0.407, to: 0.809 } },
          { name: "Benjamin Mayhew", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Chase Foster", min: 28, pts: 23, reb: 6, ast: 0, stl: 3, blk: 2, to: 2, tpm: 3, fgm: 7, fga: 12, ftm: 6, fta: 7, composite: 11.02, zScores: { pts: 2.485, reb: 1.056, ast: -0.777, stl: 2.085, blk: 2.408, tpm: 2.082, fgImpact: 1.086, ftImpact: 1.47, to: -0.872 } },
          { name: "Armani Mighty", min: 10, pts: 2, reb: 3, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: 0.14, zScores: { pts: -0.781, reb: -0.022, ast: -0.777, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: 0.425, ftImpact: 0, to: 0.809 } },
          { name: "Colin Hawkins", min: 4, pts: 0, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.35, zScores: { pts: -1.092, reb: -1.099, ast: 0.319, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Macari Moore", min: 4, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4, zScores: { pts: -1.092, reb: -0.381, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: 0, to: -0.031 } },
          { name: "Jermal Jones", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.17, zScores: { pts: -0.781, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.425, ftImpact: 0, to: -0.031 } },
          { name: "Jalil Bethea", min: 20, pts: 10, reb: 2, ast: 4, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 6, fta: 7, composite: 2.28, zScores: { pts: 0.464, reb: -0.381, ast: 1.415, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: -1.039, ftImpact: 1.47, to: 0.809 } }
        ]
      }
    },
      {
      id: "401909541",
      line: "Mount St. Mary's Mountaineers 52 @ Xavier Musketeers 97 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MSM", name: "Mount St. Mary's Mountaineers", score: 52,
        players: [

        ]
      },
      home: {
        abbr: "Xav", name: "Xavier Musketeers", score: 97,
        players: [
          { name: "Filip Borovicanin", min: 24, pts: 8, reb: 7, ast: 6, stl: 0, blk: 0, to: 6, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.29, zScores: { pts: 0.153, reb: 1.415, ast: 2.512, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: 0.52, ftImpact: 0, to: -4.233 } },
          { name: "Jovan Milicevic", min: 21, pts: 14, reb: 4, ast: 2, stl: 0, blk: 2, to: 1, tpm: 3, fgm: 5, fga: 9, ftm: 1, fta: 2, composite: 5.51, zScores: { pts: 1.086, reb: 0.337, ast: 0.319, stl: -0.741, blk: 2.408, tpm: 2.082, fgImpact: 0.614, ftImpact: -0.565, to: -0.031 } },
          { name: "Mike Nwoko", min: 16, pts: 10, reb: 4, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 2.96, zScores: { pts: 0.464, reb: 0.337, ast: 1.415, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 1.747, ftImpact: 0, to: -0.031 } },
          { name: "Ruben Dominguez", min: 19, pts: 8, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: 0.39, zScores: { pts: 0.153, reb: 0.337, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: -1.416, ftImpact: 0.814, to: 0.809 } },
          { name: "Tru Washington", min: 22, pts: 10, reb: 7, ast: 3, stl: 4, blk: 0, to: 4, tpm: 0, fgm: 3, fga: 9, ftm: 4, fta: 4, composite: 2.69, zScores: { pts: 0.464, reb: 1.415, ast: 0.867, stl: 3.027, blk: -0.501, tpm: -0.668, fgImpact: -0.991, ftImpact: 1.627, to: -2.552 } },
          { name: "Harrison Aligbe", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Rolyns Aligbe", min: 18, pts: 7, reb: 4, ast: 0, stl: 0, blk: 2, to: 2, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 1.5, zScores: { pts: -0.003, reb: 0.337, ast: -0.777, stl: -0.741, blk: 2.408, tpm: 0.249, fgImpact: 0.897, ftImpact: 0, to: -0.872 } },
          { name: "Gabriel Pozzato", min: 15, pts: 8, reb: 1, ast: 1, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 5, composite: -2.03, zScores: { pts: 0.153, reb: -0.74, ast: -0.229, stl: 0.201, blk: 0.954, tpm: 1.165, fgImpact: 0.52, ftImpact: -4.858, to: 0.809 } },
          { name: "Henry Thole", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Nikos Chitikoudis", min: 18, pts: 4, reb: 11, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 3, composite: -1.27, zScores: { pts: -0.47, reb: 2.851, ast: -0.777, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: 0.095, ftImpact: -2.915, to: -0.031 } },
          { name: "Kason Westphal", min: 5, pts: 4, reb: 3, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: 0.12, zScores: { pts: -0.47, reb: -0.022, ast: -0.229, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: -0.33, ftImpact: 0.814, to: 0.809 } },
          { name: "Gedeon Basson", min: 2, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 1, composite: -4.32, zScores: { pts: -0.781, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: -0.972, to: 0.809 } },
          { name: "Kalek House", min: 16, pts: 5, reb: 2, ast: 6, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: 1.84, zScores: { pts: -0.314, reb: -0.381, ast: 2.512, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -0.708, ftImpact: 0.814, to: -0.031 } },
          { name: "Michael Wolf", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.47, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: 0, to: 0.809 } },
          { name: "Chance Westry", min: 18, pts: 17, reb: 1, ast: 2, stl: 5, blk: 0, to: 0, tpm: 0, fgm: 6, fga: 9, ftm: 5, fta: 5, composite: 8.19, zScores: { pts: 1.552, reb: -0.74, ast: 0.319, stl: 3.969, blk: -0.501, tpm: -0.668, fgImpact: 1.417, ftImpact: 2.034, to: 0.809 } }
        ]
      }
    },
      {
      id: "401909531",
      line: "Maine Black Bears 56 @ Providence Friars 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ME", name: "Maine Black Bears", score: 56,
        players: [

        ]
      },
      home: {
        abbr: "Prov", name: "Providence Friars", score: 83,
        players: [
          { name: "Leonardo Marangon", min: 23, pts: 7, reb: 3, ast: 3, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 9, ftm: 1, fta: 2, composite: 1.61, zScores: { pts: -0.003, reb: -0.022, ast: 0.867, stl: 0.201, blk: 0.954, tpm: 1.165, fgImpact: -1.794, ftImpact: -0.565, to: 0.809 } },
          { name: "Arrinten Page", min: 6, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -0.781, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: 0, to: 0.809 } },
          { name: "Malik Mack", min: 27, pts: 12, reb: 5, ast: 2, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 10, ftm: 0, fta: 1, composite: 1.99, zScores: { pts: 0.775, reb: 0.696, ast: 0.319, stl: 1.143, blk: -0.501, tpm: 1.165, fgImpact: 0.236, ftImpact: -0.972, to: -0.872 } },
          { name: "Ryan Mela", min: 20, pts: 13, reb: 6, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 11, ftm: 5, fta: 8, composite: -0.62, zScores: { pts: 0.93, reb: 1.056, ast: 0.319, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.944, ftImpact: -0.88, to: 0.809 } },
          { name: "Miles Byrd", min: 25, pts: 10, reb: 5, ast: 3, stl: 7, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: 11.01, zScores: { pts: 0.464, reb: 0.696, ast: 0.867, stl: 5.854, blk: 0.954, tpm: 1.165, fgImpact: -0.614, ftImpact: 0.814, to: 0.809 } },
          { name: "Javon Bardwell", min: 14, pts: 12, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 4, fga: 8, ftm: 2, fta: 4, composite: 0.38, zScores: { pts: 0.775, reb: -0.022, ast: -0.777, stl: -0.741, blk: 0.954, tpm: 1.165, fgImpact: 0.189, ftImpact: -1.129, to: -0.031 } },
          { name: "Jacob Bannarbie", min: 25, pts: 14, reb: 10, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 7, ftm: 0, fta: 0, composite: 5.32, zScores: { pts: 1.086, reb: 2.492, ast: -0.229, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 2.975, ftImpact: 0, to: -0.031 } },
          { name: "Elijah Saunders", min: 4, pts: 8, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -0.2, zScores: { pts: 0.153, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: 1.275, ftImpact: 0, to: -0.031 } },
          { name: "Samson Aletan", min: 7, pts: 0, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.27, zScores: { pts: -1.092, reb: -0.381, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Ryan Sabol", min: 15, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.88, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: 0, to: 0.809 } },
          { name: "Gavin Hightower", min: 30, pts: 5, reb: 3, ast: 7, stl: 5, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: 3.05, zScores: { pts: -0.314, reb: -0.022, ast: 3.06, stl: 3.969, blk: -0.501, tpm: -0.668, fgImpact: -1.039, ftImpact: -0.565, to: -0.872 } }
        ]
      }
    },
      {
      id: "401902275",
      line: "Lafayette Leopards 60 @ Butler Bulldogs 96 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LAF", name: "Lafayette Leopards", score: 60,
        players: [

        ]
      },
      home: {
        abbr: "Butl", name: "Butler Bulldogs", score: 96,
        players: [
          { name: "Asim Djulovic", min: 22, pts: 19, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 7, ftm: 5, fta: 5, composite: 6.57, zScores: { pts: 1.863, reb: -0.74, ast: 0.319, stl: -0.741, blk: -0.501, tpm: 2.999, fgImpact: 1.37, ftImpact: 2.034, to: -0.031 } },
          { name: "Treyson Anderson", min: 18, pts: 10, reb: 7, ast: 2, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 9, ftm: 3, fta: 4, composite: 2.73, zScores: { pts: 0.464, reb: 1.415, ast: 0.319, stl: -0.741, blk: 0.954, tpm: 0.249, fgImpact: -0.991, ftImpact: 0.249, to: 0.809 } },
          { name: "Drayton Jones", min: 24, pts: 10, reb: 8, ast: 0, stl: 1, blk: 4, to: 2, tpm: 0, fgm: 4, fga: 4, ftm: 2, fta: 2, composite: 7.95, zScores: { pts: 0.464, reb: 1.774, ast: -0.777, stl: 0.201, blk: 5.317, tpm: -0.668, fgImpact: 1.7, ftImpact: 0.814, to: -0.872 } },
          { name: "Eduardo Klafke", min: 26, pts: 13, reb: 7, ast: 8, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 10, ftm: 4, fta: 4, composite: 6.19, zScores: { pts: 0.93, reb: 1.415, ast: 3.608, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: -0.566, ftImpact: 1.627, to: -1.712 } },
          { name: "Jalen Jackson", min: 27, pts: 18, reb: 5, ast: 5, stl: 3, blk: 0, to: 6, tpm: 4, fgm: 7, fga: 10, ftm: 0, fta: 0, composite: 6.56, zScores: { pts: 1.708, reb: 0.696, ast: 1.964, stl: 2.085, blk: -0.501, tpm: 2.999, fgImpact: 1.842, ftImpact: 0, to: -4.233 } },
          { name: "Samis Calderon", min: 25, pts: 5, reb: 6, ast: 3, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: 1.67, zScores: { pts: -0.314, reb: 1.056, ast: 0.867, stl: 1.143, blk: 0.954, tpm: 0.249, fgImpact: -1.416, ftImpact: 0, to: -0.872 } },
          { name: "Christian Moore", min: 4, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.48, zScores: { pts: -1.092, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.133, ftImpact: 0, to: 0.809 } },
          { name: "Herly Brutus", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.47, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: 0, to: 0.809 } },
          { name: "Kevin Ndzie", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Samu Adler", min: 15, pts: 5, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -1.67, zScores: { pts: -0.314, reb: -0.381, ast: 0.319, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: -1.086, ftImpact: 0.814, to: -0.031 } },
          { name: "Baron Walker", min: 11, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.86, zScores: { pts: -1.092, reb: -0.381, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: -0.872 } },
          { name: "Jordan Ellerbee", min: 20, pts: 16, reb: 3, ast: 3, stl: 0, blk: 0, to: 3, tpm: 4, fgm: 6, fga: 8, ftm: 0, fta: 0, composite: 4.08, zScores: { pts: 1.397, reb: -0.022, ast: 0.867, stl: -0.741, blk: -0.501, tpm: 2.999, fgImpact: 1.795, ftImpact: 0, to: -1.712 } },
          { name: "Ethan McComb", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401920893",
      line: "Denver Pioneers 68 @ Wisconsin Badgers 75 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Denv", name: "Denver Pioneers", score: 68,
        players: [
          { name: "Oskar Wickstrom Stumer", min: 21, pts: 2, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -2.37, zScores: { pts: -0.781, reb: -0.022, ast: 0.319, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: 0.814, to: -0.031 } },
          { name: "Charlie Dimmock", min: 18, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -3.55, zScores: { pts: -0.47, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: 0.814, to: -0.872 } },
          { name: "Shaun Wysocki", min: 27, pts: 6, reb: 4, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 0.84, zScores: { pts: -0.159, reb: 0.337, ast: -0.777, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: 0.142, ftImpact: 0, to: 0.809 } },
          { name: "Carson Johnson", min: 36, pts: 27, reb: 2, ast: 2, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 9, fga: 17, ftm: 7, fta: 7, composite: 9.42, zScores: { pts: 3.107, reb: -0.381, ast: 0.319, stl: 2.085, blk: -0.501, tpm: 1.165, fgImpact: 0.803, ftImpact: 2.848, to: -0.031 } },
          { name: "Kam Martin", min: 29, pts: 9, reb: 6, ast: 0, stl: 3, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 10, ftm: 3, fta: 6, composite: -3.27, zScores: { pts: 0.308, reb: 1.056, ast: -0.777, stl: 2.085, blk: -0.501, tpm: -0.668, fgImpact: -1.369, ftImpact: -1.694, to: -1.712 } },
          { name: "Harry Bates", min: 14, pts: 4, reb: 5, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: 0.37, zScores: { pts: -0.47, reb: 0.696, ast: -0.229, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.047, ftImpact: 0.814, to: -0.031 } },
          { name: "Jordan Rogers", min: 20, pts: 9, reb: 2, ast: 1, stl: 2, blk: 0, to: 4, tpm: 1, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: -1.02, zScores: { pts: 0.308, reb: -0.381, ast: -0.229, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: 0.945, ftImpact: 0, to: -2.552 } },
          { name: "Spencer Mahoney", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.09, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Baba Mbengue", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.47, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: -0.031 } },
          { name: "CJ Hyland", min: 6, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.37, zScores: { pts: -0.625, reb: -0.381, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.047, ftImpact: 0, to: 0.809 } },
          { name: "Logan Threatt", min: 18, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -5.48, zScores: { pts: -0.47, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.33, ftImpact: 0.814, to: -1.712 } }
        ]
      },
      home: {
        abbr: "Wisc", name: "Wisconsin Badgers", score: 75,
        players: [
          { name: "Victory Onuetu", min: 11, pts: 6, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -1.46, zScores: { pts: -0.159, reb: 0.337, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.142, ftImpact: 0, to: -0.031 } },
          { name: "Nolan Winter", min: 35, pts: 6, reb: 14, ast: 4, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 3, fga: 10, ftm: 0, fta: 4, composite: 1, zScores: { pts: -0.159, reb: 3.928, ast: 1.415, stl: 0.201, blk: 2.408, tpm: -0.668, fgImpact: -1.369, ftImpact: -3.886, to: -0.872 } },
          { name: "Owen Foxwell", min: 34, pts: 14, reb: 1, ast: 7, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 12, ftm: 1, fta: 5, composite: -0.71, zScores: { pts: 1.086, reb: -0.74, ast: 3.06, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.284, ftImpact: -3.479, to: -0.872 } },
          { name: "Braeden Carrington", min: 31, pts: 15, reb: 4, ast: 4, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 5, fga: 9, ftm: 2, fta: 2, composite: 7.53, zScores: { pts: 1.241, reb: 0.337, ast: 1.415, stl: -0.741, blk: 0.954, tpm: 2.082, fgImpact: 0.614, ftImpact: 0.814, to: 0.809 } },
          { name: "Eian Elmer", min: 26, pts: 18, reb: 5, ast: 3, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 7, fga: 13, ftm: 3, fta: 4, composite: 5.09, zScores: { pts: 1.708, reb: 0.696, ast: 0.867, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: 0.709, ftImpact: 0.249, to: -0.031 } },
          { name: "Austin Rapp", min: 30, pts: 9, reb: 5, ast: 1, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 2.66, zScores: { pts: 0.308, reb: 0.696, ast: -0.229, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: 0.189, ftImpact: 0, to: 0.809 } },
          { name: "Jackson Ball", min: 5, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -3.44, zScores: { pts: -0.625, reb: -1.099, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: 0.407, to: -0.031 } },
          { name: "Hayden Jones", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 2, composite: -6.39, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: -1.943, to: 0.809 } },
          { name: "Jack Janicki", min: 16, pts: 4, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.87, zScores: { pts: -0.47, reb: -1.099, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.472, ftImpact: 0, to: -0.031 } },
          { name: "Trey Autry", min: 5, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.11, zScores: { pts: -1.092, reb: -0.381, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: 0, to: 0.809 } },
          { name: "Zach Kinziger", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.29, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: -0.031 } }
        ]
      }
    },
      {
      id: "401920758",
      line: "Southern Indiana Screaming Eagles 54 @ Belmont Bruins 72 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "USI", name: "Southern Indiana Screaming Eagles", score: 54,
        players: [

        ]
      },
      home: {
        abbr: "Belm", name: "Belmont Bruins", score: 72,
        players: [
          { name: "Eoin Dillon", min: 28, pts: 6, reb: 8, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 8, ftm: 1, fta: 2, composite: -2.07, zScores: { pts: -0.159, reb: 1.774, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -1.416, ftImpact: -0.565, to: -0.872 } },
          { name: "Vincent Neugebauer", min: 27, pts: 7, reb: 2, ast: 2, stl: 2, blk: 3, to: 5, tpm: 0, fgm: 3, fga: 3, ftm: 1, fta: 3, composite: 0.62, zScores: { pts: -0.003, reb: -0.381, ast: 0.319, stl: 1.143, blk: 3.863, tpm: -0.668, fgImpact: 1.275, ftImpact: -1.536, to: -3.392 } },
          { name: "Jack Smiley", min: 36, pts: 24, reb: 3, ast: 4, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 10, fga: 18, ftm: 2, fta: 2, composite: 7.85, zScores: { pts: 2.641, reb: -0.022, ast: 1.415, stl: 1.143, blk: -0.501, tpm: 1.165, fgImpact: 1.228, ftImpact: 0.814, to: -0.031 } },
          { name: "Jabez Jenkins", min: 19, pts: 10, reb: 4, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 4, fta: 5, composite: 0.29, zScores: { pts: 0.464, reb: 0.337, ast: -0.229, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.897, ftImpact: 0.656, to: -0.872 } },
          { name: "Isaiah West", min: 28, pts: 5, reb: 8, ast: 1, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.14, zScores: { pts: -0.314, reb: 1.774, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: -0.661, ftImpact: 0, to: -1.712 } },
          { name: "Graydon Lemke", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Kayden Fish", min: 13, pts: 6, reb: 3, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: -1.8, zScores: { pts: -0.159, reb: -0.022, ast: -0.229, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.472, ftImpact: 0.814, to: -1.712 } },
          { name: "Ethan Sage", min: 19, pts: 7, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 4, composite: -1.08, zScores: { pts: -0.003, reb: -0.022, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.095, ftImpact: -1.129, to: 0.809 } },
          { name: "Matthew Zobrist", min: 15, pts: 2, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 1, composite: -2.64, zScores: { pts: -0.781, reb: -1.099, ast: 0.319, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: -0.972, to: 0.809 } },
          { name: "Aleksa Ristic", min: 12, pts: 5, reb: 1, ast: 0, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.12, zScores: { pts: -0.314, reb: -0.74, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.472, ftImpact: 0, to: -1.712 } },
          { name: "Cooper Haynes", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.09, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401919780",
      line: "Le Moyne Dolphins 64 @ Nebraska Cornhuskers 106 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LEM", name: "Le Moyne Dolphins", score: 64,
        players: [

        ]
      },
      home: {
        abbr: "Nebras", name: "Nebraska Cornhuskers", score: 106,
        players: [
          { name: "Braden Frager", min: 27, pts: 7, reb: 3, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 10, ftm: 0, fta: 1, composite: -2.42, zScores: { pts: -0.003, reb: -0.022, ast: 0.867, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: -1.369, ftImpact: -0.972, to: -0.872 } },
          { name: "Boden Kapke", min: 19, pts: 8, reb: 4, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: -0.12, zScores: { pts: 0.153, reb: 0.337, ast: -0.229, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.945, ftImpact: 0, to: -0.872 } },
          { name: "Pryce Sandfort", min: 26, pts: 20, reb: 5, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 7, fga: 13, ftm: 5, fta: 6, composite: 5.56, zScores: { pts: 2.019, reb: 0.696, ast: 0.319, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.709, ftImpact: 1.063, to: 0.809 } },
          { name: "Cale Jacobsen", min: 25, pts: 16, reb: 4, ast: 3, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 8, ftm: 0, fta: 1, composite: 6.95, zScores: { pts: 1.397, reb: 0.337, ast: 0.867, stl: 2.085, blk: -0.501, tpm: 1.165, fgImpact: 2.597, ftImpact: -0.972, to: -0.031 } },
          { name: "Trevan Leonhardt", min: 21, pts: 7, reb: 5, ast: 7, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: 6.65, zScores: { pts: -0.003, reb: 0.696, ast: 3.06, stl: 1.143, blk: -0.501, tpm: 1.165, fgImpact: 0.85, ftImpact: -0.565, to: 0.809 } },
          { name: "Leo Curtis", min: 6, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.35, zScores: { pts: -0.625, reb: -0.74, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.425, ftImpact: 0, to: 0.809 } },
          { name: "Will Cooper", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Damon Wilkinson", min: 15, pts: 11, reb: 2, ast: 2, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 9, fta: 9, composite: 5.18, zScores: { pts: 0.619, reb: -0.381, ast: 0.319, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: -0.33, ftImpact: 3.662, to: 0.809 } },
          { name: "Henry Burt", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Kadyn Betts", min: 2, pts: 1, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -1.76, zScores: { pts: -0.936, reb: -0.381, ast: -0.229, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0, ftImpact: -0.565, to: 0.809 } },
          { name: "Colin Rice", min: 6, pts: 0, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.03, zScores: { pts: -1.092, reb: -0.381, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: -1.133, ftImpact: 0, to: 0.809 } },
          { name: "Jacob Lanier", min: 23, pts: 11, reb: 5, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: 2.93, zScores: { pts: 0.619, reb: 0.696, ast: 0.319, stl: 0.201, blk: -0.501, tpm: 1.165, fgImpact: 0.189, ftImpact: -0.565, to: 0.809 } },
          { name: "Connor Essegian", min: 7, pts: 13, reb: 2, ast: 0, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 5, ftm: 4, fta: 4, composite: 5.45, zScores: { pts: 0.93, reb: -0.381, ast: -0.777, stl: 1.143, blk: -0.501, tpm: 2.082, fgImpact: 0.52, ftImpact: 1.627, to: 0.809 } },
          { name: "Taj DeGourville", min: 17, pts: 9, reb: 3, ast: 2, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 6, ftm: 1, fta: 1, composite: 0.21, zScores: { pts: 0.308, reb: -0.022, ast: 0.319, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: 0.142, ftImpact: 0.407, to: -0.872 } }
        ]
      }
    },
      {
      id: "401918955",
      line: "Campbell Fighting Camels 64 @ NC State Wolfpack 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CAM", name: "Campbell Fighting Camels", score: 64,
        players: [

        ]
      },
      home: {
        abbr: "NCSU", name: "NC State Wolfpack", score: 83,
        players: [
          { name: "Kyle Evans", min: 15, pts: 5, reb: 3, ast: 1, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 1.88, zScores: { pts: -0.314, reb: -0.022, ast: -0.229, stl: -0.741, blk: 2.408, tpm: 0.249, fgImpact: -0.283, ftImpact: 0, to: 0.809 } },
          { name: "Ven-Allen Lubin", min: 26, pts: 20, reb: 10, ast: 4, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 8, fga: 8, ftm: 1, fta: 2, composite: 7.89, zScores: { pts: 2.019, reb: 2.492, ast: 1.415, stl: -0.741, blk: -0.501, tpm: 2.082, fgImpact: 3.4, ftImpact: -0.565, to: -1.712 } },
          { name: "Darius Adams", min: 31, pts: 16, reb: 4, ast: 4, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 10, ftm: 5, fta: 7, composite: 2.45, zScores: { pts: 1.397, reb: 0.337, ast: 1.415, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.236, ftImpact: 0.091, to: -0.031 } },
          { name: "Preston Edmead", min: 26, pts: 10, reb: 1, ast: 3, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 7, ftm: 0, fta: 1, composite: 0.08, zScores: { pts: 0.464, reb: -0.74, ast: 0.867, stl: -0.741, blk: -0.501, tpm: 1.165, fgImpact: 0.567, ftImpact: -0.972, to: -0.031 } },
          { name: "Paul McNeil Jr.", min: 25, pts: 11, reb: 6, ast: 0, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 6, fta: 6, composite: 3.16, zScores: { pts: 0.619, reb: 1.056, ast: -0.777, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: -1.039, ftImpact: 2.441, to: -0.031 } },
          { name: "Shah Hall", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Robert Jurkovic", min: 9, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -0.781, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: 0, to: 0.809 } },
          { name: "Eemeli Yalaho", min: 19, pts: 3, reb: 3, ast: 0, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -0.66, zScores: { pts: -0.625, reb: -0.022, ast: -0.777, stl: 1.143, blk: 0.954, tpm: 0.249, fgImpact: -0.708, ftImpact: 0, to: -0.872 } },
          { name: "Zymicah Wilkins", min: 5, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 2, composite: -5.76, zScores: { pts: -0.781, reb: -0.74, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.425, ftImpact: -1.943, to: -0.031 } },
          { name: "Kingston Whitty", min: 8, pts: 0, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.44, zScores: { pts: -1.092, reb: -0.74, ast: -0.229, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: -0.031 } },
          { name: "Christian Hammond", min: 25, pts: 14, reb: 5, ast: 6, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 4.86, zScores: { pts: 1.086, reb: 0.696, ast: 2.512, stl: 0.201, blk: -0.501, tpm: 1.165, fgImpact: 1.417, ftImpact: 0, to: -1.712 } },
          { name: "R.J. Keene II", min: 8, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.92, zScores: { pts: -1.092, reb: -0.74, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401917173",
      line: "Canisius Golden Griffins 57 @ Penn State Nittany Lions 96 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CAN", name: "Canisius Golden Griffins", score: 57,
        players: [

        ]
      },
      home: {
        abbr: "PSU", name: "Penn State Nittany Lions", score: 96,
        players: [
          { name: "Ivan Juric", min: 20, pts: 14, reb: 15, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 8, ftm: 4, fta: 5, composite: 6.7, zScores: { pts: 1.086, reb: 4.287, ast: -0.777, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: 0.992, ftImpact: 0.656, to: -0.031 } },
          { name: "Brant Byers", min: 25, pts: 8, reb: 2, ast: 3, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 2.26, zScores: { pts: 0.153, reb: -0.381, ast: 0.867, stl: 1.143, blk: -0.501, tpm: 1.165, fgImpact: -0.991, ftImpact: 0, to: 0.809 } },
          { name: "Josh Reed", min: 21, pts: 12, reb: 2, ast: 1, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 7, ftm: 4, fta: 4, composite: 1.97, zScores: { pts: 0.775, reb: -0.381, ast: -0.229, stl: 0.201, blk: 0.954, tpm: -0.668, fgImpact: 0.567, ftImpact: 1.627, to: -0.872 } },
          { name: "Thomas Allard", min: 25, pts: 5, reb: 6, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 1.91, zScores: { pts: -0.314, reb: 1.056, ast: 0.319, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.095, ftImpact: 0, to: 0.809 } },
          { name: "Dasonte Bowen", min: 25, pts: 5, reb: 4, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 1, fta: 3, composite: -2.79, zScores: { pts: -0.314, reb: 0.337, ast: 0.867, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.039, ftImpact: -1.536, to: 0.809 } },
          { name: "Aleksandar Zecevic", min: 1, pts: 1, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.38, zScores: { pts: -0.936, reb: -1.099, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: -0.565, to: -0.031 } },
          { name: "Francois Wibaut", min: 20, pts: 10, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 6, ftm: 1, fta: 1, composite: 2.58, zScores: { pts: 0.464, reb: -0.022, ast: 0.867, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.945, ftImpact: 0.407, to: -0.031 } },
          { name: "Roko Prkacin", min: 20, pts: 28, reb: 6, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 12, fga: 14, ftm: 4, fta: 5, composite: 7.76, zScores: { pts: 3.263, reb: 1.056, ast: -0.229, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 4.344, ftImpact: 0.656, to: -0.872 } },
          { name: "Tim Oboh", min: 6, pts: 3, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 3, fta: 6, composite: -4.22, zScores: { pts: -0.625, reb: -1.099, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: -0.378, ftImpact: -1.694, to: 0.809 } },
          { name: "Grant Spacciapolli", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Andy Gemao", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.33, zScores: { pts: -0.781, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.425, ftImpact: 0, to: 0.809 } },
          { name: "Reggie Grodin", min: 3, pts: 2, reb: 1, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -0.99, zScores: { pts: -0.781, reb: -0.74, ast: -0.229, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0.814, to: -0.031 } },
          { name: "Roberts Blums", min: 19, pts: 5, reb: 4, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 1, fta: 1, composite: 0.65, zScores: { pts: -0.314, reb: 0.337, ast: 1.415, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -1.039, ftImpact: 0.407, to: 0.809 } },
          { name: "Jay Rodgers", min: 11, pts: 2, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -0.781, reb: -0.74, ast: 0.319, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.425, ftImpact: 0, to: -0.872 } }
        ]
      }
    },
      {
      id: "401911208",
      line: "Navy Midshipmen 39 @ George Washington Revolutionaries 91 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NAVY", name: "Navy Midshipmen", score: 39,
        players: [

        ]
      },
      home: {
        abbr: "GrgWas", name: "George Washington Revolutionaries", score: 91,
        players: [
          { name: "Lovro Urbiha", min: 19, pts: 7, reb: 4, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 3, fta: 3, composite: 0.28, zScores: { pts: -0.003, reb: 0.337, ast: 0.867, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.039, ftImpact: 1.221, to: 0.809 } },
          { name: "Dylan James", min: 20, pts: 8, reb: 6, ast: 1, stl: 4, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 4.83, zScores: { pts: 0.153, reb: 1.056, ast: -0.229, stl: 3.027, blk: 0.954, tpm: -0.668, fgImpact: 0.567, ftImpact: 0, to: -0.031 } },
          { name: "Omari Witherspoon", min: 21, pts: 6, reb: 4, ast: 3, stl: 1, blk: 3, to: 3, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 1, composite: 3.31, zScores: { pts: -0.159, reb: 0.337, ast: 0.867, stl: 0.201, blk: 3.863, tpm: 1.165, fgImpact: -0.283, ftImpact: -0.972, to: -1.712 } },
          { name: "Jean Aranguren", min: 21, pts: 9, reb: 4, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 4, fta: 4, composite: 3.68, zScores: { pts: 0.308, reb: 0.337, ast: 1.964, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.472, ftImpact: 1.627, to: -0.031 } },
          { name: "Terrance Arceneaux", min: 19, pts: 8, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 1.44, zScores: { pts: 0.153, reb: -0.381, ast: 0.319, stl: 0.201, blk: -0.501, tpm: 1.165, fgImpact: 0.52, ftImpact: 0, to: -0.031 } },
          { name: "Jayvon Rampersant", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Ryder Frost", min: 19, pts: 14, reb: 4, ast: 0, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 9, ftm: 4, fta: 4, composite: 3.86, zScores: { pts: 1.086, reb: 0.337, ast: -0.777, stl: 1.143, blk: -0.501, tpm: 1.165, fgImpact: -0.189, ftImpact: 1.627, to: -0.031 } },
          { name: "Andrija Vukovic", min: 17, pts: 9, reb: 9, ast: 0, stl: 0, blk: 2, to: 5, tpm: 1, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: 1.9, zScores: { pts: 0.308, reb: 2.133, ast: -0.777, stl: -0.741, blk: 2.408, tpm: 0.249, fgImpact: 0.897, ftImpact: 0.814, to: -3.392 } },
          { name: "Malachi Arrington", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Promis N'Landu", min: 19, pts: 14, reb: 2, ast: 3, stl: 2, blk: 3, to: 0, tpm: 2, fgm: 6, fga: 7, ftm: 0, fta: 0, composite: 10.72, zScores: { pts: 1.086, reb: -0.381, ast: 0.867, stl: 1.143, blk: 3.863, tpm: 1.165, fgImpact: 2.172, ftImpact: 0, to: 0.809 } },
          { name: "Felix Kossaras", min: 20, pts: 14, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 6, ftm: 2, fta: 2, composite: 6.46, zScores: { pts: 1.086, reb: 0.337, ast: -0.229, stl: 0.201, blk: -0.501, tpm: 2.999, fgImpact: 0.945, ftImpact: 0.814, to: 0.809 } },
          { name: "Andrew Phillips", min: 18, pts: 2, reb: 1, ast: 2, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.27, zScores: { pts: -0.781, reb: -0.74, ast: 0.319, stl: 2.085, blk: -0.501, tpm: -0.668, fgImpact: 0.047, ftImpact: 0, to: -0.031 } },
          { name: "Amir Arrington", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.45, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } }
        ]
      }
    },
      {
      id: "401909522",
      line: "Mercyhurst Lakers 43 @ Marquette Golden Eagles 78 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MERC", name: "Mercyhurst Lakers", score: 43,
        players: [

        ]
      },
      home: {
        abbr: "Marq", name: "Marquette Golden Eagles", score: 78,
        players: [
          { name: "Sananda Fru", min: 23, pts: 12, reb: 12, ast: 1, stl: 1, blk: 3, to: 2, tpm: 0, fgm: 4, fga: 6, ftm: 4, fta: 4, composite: 8.85, zScores: { pts: 0.775, reb: 3.21, ast: -0.229, stl: 0.201, blk: 3.863, tpm: -0.668, fgImpact: 0.945, ftImpact: 1.627, to: -0.872 } },
          { name: "Royce Parham", min: 20, pts: 16, reb: 7, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 9, ftm: 3, fta: 4, composite: 3.77, zScores: { pts: 1.397, reb: 1.415, ast: 0.319, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 1.417, ftImpact: 0.249, to: -0.031 } },
          { name: "Damarius Owens", min: 17, pts: 4, reb: 3, ast: 3, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: 0.34, zScores: { pts: -0.47, reb: -0.022, ast: 0.867, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: -0.33, ftImpact: -0.565, to: -0.031 } },
          { name: "Adrien Stevens", min: 22, pts: 3, reb: 1, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: -4.38, zScores: { pts: -0.625, reb: -0.74, ast: 1.415, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -1.086, ftImpact: -0.565, to: -0.872 } },
          { name: "Nigel James Jr.", min: 21, pts: 8, reb: 2, ast: 3, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: 2.43, zScores: { pts: 0.153, reb: -0.381, ast: 0.867, stl: 0.201, blk: 0.954, tpm: 0.249, fgImpact: 0.142, ftImpact: -0.565, to: 0.809 } },
          { name: "Braeden Brenn", min: 1, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.48, zScores: { pts: -0.936, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: -0.565, to: 0.809 } },
          { name: "Joshua Clark", min: 17, pts: 18, reb: 7, ast: 1, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 8, fga: 9, ftm: 2, fta: 4, composite: 8.05, zScores: { pts: 1.708, reb: 1.415, ast: -0.229, stl: -0.741, blk: 3.863, tpm: -0.668, fgImpact: 3.022, ftImpact: -1.129, to: 0.809 } },
          { name: "Alex Egbuonu", min: 16, pts: 5, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 1, fta: 4, composite: -4.65, zScores: { pts: -0.314, reb: -0.74, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: -0.661, ftImpact: -2.508, to: 0.809 } },
          { name: "Michael Phillips II", min: 14, pts: 3, reb: 4, ast: 2, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: 0.32, zScores: { pts: -0.625, reb: 0.337, ast: 0.319, stl: 0.201, blk: 0.954, tpm: 0.249, fgImpact: -1.086, ftImpact: 0, to: -0.031 } },
          { name: "Ian Miletic", min: 4, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.16, zScores: { pts: -1.092, reb: -0.74, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Colton Crowdis", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0, ftImpact: 0, to: 0.809 } },
          { name: "Nash Walker", min: 4, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.38, zScores: { pts: -0.781, reb: -1.099, ast: -0.229, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.33, ftImpact: 0, to: -0.031 } },
          { name: "Ethan Johnston", min: 11, pts: 4, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.38, zScores: { pts: -0.47, reb: -0.022, ast: -0.229, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.661, ftImpact: 0, to: -0.031 } },
          { name: "Nolan Minessale", min: 19, pts: 2, reb: 2, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -0.02, zScores: { pts: -0.781, reb: -0.381, ast: 0.867, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0.814, to: 0.809 } },
          { name: "Colin Porter", min: 10, pts: 0, reb: 2, ast: 1, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.98, zScores: { pts: -1.092, reb: -0.381, ast: -0.229, stl: 1.143, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: -0.872 } }
        ]
      }
    },
      {
      id: "401906791",
      line: "Tennessee Tech Golden Eagles 88 @ Mississippi State Bulldogs 106 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TNTC", name: "Tennessee Tech Golden Eagles", score: 88,
        players: [

        ]
      },
      home: {
        abbr: "MissSt", name: "Mississippi State Bulldogs", score: 106,
        players: [
          { name: "Thomas Bassong", min: 23, pts: 14, reb: 6, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 7, ftm: 4, fta: 6, composite: 2.77, zScores: { pts: 1.086, reb: 1.056, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 1.37, ftImpact: -0.316, to: 0.809 } },
          { name: "Kimani Hamilton", min: 30, pts: 5, reb: 6, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 3, fta: 4, composite: -0.43, zScores: { pts: -0.314, reb: 1.056, ast: -0.229, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: -0.708, ftImpact: 0.249, to: -0.031 } },
          { name: "ND Okafor", min: 6, pts: 2, reb: 4, ast: 0, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.96, zScores: { pts: -0.781, reb: 0.337, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.425, ftImpact: 0, to: -1.712 } },
          { name: "RJ Johnson", min: 21, pts: 12, reb: 1, ast: 3, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 6, ftm: 1, fta: 2, composite: 1.25, zScores: { pts: 0.775, reb: -0.74, ast: 0.867, stl: -0.741, blk: -0.501, tpm: 2.082, fgImpact: 0.945, ftImpact: -0.565, to: -0.872 } },
          { name: "Josh Hubbard", min: 31, pts: 25, reb: 0, ast: 9, stl: 2, blk: 0, to: 3, tpm: 3, fgm: 7, fga: 11, ftm: 8, fta: 10, composite: 9.64, zScores: { pts: 2.796, reb: -1.099, ast: 4.156, stl: 1.143, blk: -0.501, tpm: 2.082, fgImpact: 1.464, ftImpact: 1.312, to: -1.712 } },
          { name: "Kendyl Sanders", min: 10, pts: 5, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: -2.2, zScores: { pts: -0.314, reb: -0.022, ast: -0.777, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: 0.472, ftImpact: -0.565, to: -0.031 } },
          { name: "Tristan Reed", min: 8, pts: 2, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.99, zScores: { pts: -0.781, reb: -0.381, ast: -0.229, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: 0.047, ftImpact: 0, to: 0.809 } },
          { name: "Jalyn Collingwood", min: 14, pts: 3, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.18, zScores: { pts: -0.625, reb: -0.74, ast: -0.777, stl: 0.201, blk: -0.501, tpm: 0.249, fgImpact: 0.047, ftImpact: 0, to: -0.031 } },
          { name: "Willie Burnett III", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.29, zScores: { pts: -1.092, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: -0.031 } },
          { name: "Tajuan Simpkins", min: 32, pts: 15, reb: 5, ast: 5, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 11, ftm: 4, fta: 4, composite: 6.25, zScores: { pts: 1.241, reb: 0.696, ast: 1.964, stl: 1.143, blk: -0.501, tpm: 0.249, fgImpact: -0.141, ftImpact: 1.627, to: -0.031 } },
          { name: "King Grace", min: 23, pts: 23, reb: 8, ast: 4, stl: 1, blk: 1, to: 2, tpm: 4, fgm: 8, fga: 12, ftm: 3, fta: 4, composite: 11.09, zScores: { pts: 2.485, reb: 1.774, ast: 1.415, stl: 0.201, blk: 0.954, tpm: 2.999, fgImpact: 1.889, ftImpact: 0.249, to: -0.872 } }
        ]
      }
    },
      {
      id: "401920951",
      line: "Maryville (MO) Saints 40 @ Southern Illinois Salukis 82 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MUMO", name: "Maryville (MO) Saints", score: 40,
        players: [

        ]
      },
      home: {
        abbr: "SIU", name: "Southern Illinois Salukis", score: 82,
        players: [
          { name: "Max Pikaar", min: 24, pts: 5, reb: 10, ast: 1, stl: 1, blk: 3, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 6.32, zScores: { pts: -0.314, reb: 2.492, ast: -0.229, stl: 0.201, blk: 3.863, tpm: 0.249, fgImpact: 0.095, ftImpact: 0, to: -0.031 } },
          { name: "Jaheem Webber", min: 16, pts: 6, reb: 6, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -1.76, zScores: { pts: -0.159, reb: 1.056, ast: -0.777, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: 0.897, ftImpact: 0, to: -0.872 } },
          { name: "Luke Susko", min: 21, pts: 13, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 13, ftm: 0, fta: 0, composite: 2.51, zScores: { pts: 0.93, reb: 1.056, ast: -0.229, stl: -0.741, blk: -0.501, tpm: 2.082, fgImpact: -0.897, ftImpact: 0, to: 0.809 } },
          { name: "Jeremiah Jackson", min: 23, pts: 10, reb: 3, ast: 5, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 2.59, zScores: { pts: 0.464, reb: -0.022, ast: 1.964, stl: 0.201, blk: -0.501, tpm: 1.165, fgImpact: 0.189, ftImpact: 0, to: -0.872 } },
          { name: "Jalen Haynes", min: 25, pts: 20, reb: 2, ast: 7, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 8, fga: 12, ftm: 0, fta: 0, composite: 7.47, zScores: { pts: 2.019, reb: -0.381, ast: 3.06, stl: -0.741, blk: -0.501, tpm: 2.999, fgImpact: 1.889, ftImpact: 0, to: -0.872 } },
          { name: "Ty Laur", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.63, zScores: { pts: -1.092, reb: -0.74, ast: -0.777, stl: -0.741, blk: 0.954, tpm: -0.668, fgImpact: -0.378, ftImpact: 0, to: 0.809 } },
          { name: "Pietro Ranieri", min: 17, pts: 0, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -1.93, zScores: { pts: -1.092, reb: 0.696, ast: 0.319, stl: -0.741, blk: -0.501, tpm: -0.668, fgImpact: -0.755, ftImpact: 0, to: 0.809 } },
          { name: "Daniel Pauliukonis", min: 6, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.1, zScores: { pts: -0.625, reb: -1.099, ast: -0.777, stl: -0.741, blk: -0.501, tpm: 0.249, fgImpact: 0.425, ftImpact: 0, to: -0.031 } },
          { name: "Jaxson Fugate", min: 19, pts: 7, reb: 4, ast: 2, stl: 0, blk: 3, to: 0, tpm: 1, fgm: 2, fga: 9, ftm: 2, fta: 2, composite: 3.85, zScores: { pts: -0.003, reb: 0.337, ast: 0.319, stl: -0.741, blk: 3.863, tpm: 0.249, fgImpact: -1.794, ftImpact: 0.814, to: 0.809 } },
          { name: "Luke Walsh", min: 24, pts: 14, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 9, ftm: 2, fta: 3, composite: 4.54, zScores: { pts: 1.086, reb: -0.022, ast: 0.319, stl: 0.201, blk: -0.501, tpm: 2.999, fgImpact: -0.189, ftImpact: -0.158, to: 0.809 } },
          { name: "Caden Hawkins", min: 17, pts: 4, reb: 4, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: 0.77, zScores: { pts: -0.47, reb: 0.337, ast: 1.415, stl: 0.201, blk: -0.501, tpm: -0.668, fgImpact: -0.33, ftImpact: 0.814, to: -0.031 } }
        ]
      }
    },
      {
      id: "401909738",
      line: "Arizona Wildcats @ UCLA Bruins (11/2 - 10:00 PM EST)",
      completed: false,
      statusText: "11/2 - 10:00 PM EST",
      away: {
        abbr: "Ariz", name: "Arizona Wildcats", score: null,
        players: [

        ]
      },
      home: {
        abbr: "UCLA", name: "UCLA Bruins", score: null,
        players: [

        ]
      }
    },
      {
      id: "401925878",
      line: "Montana State Bobcats @ Colorado State Rams (11/2 - 10:00 PM EST)",
      completed: false,
      statusText: "11/2 - 10:00 PM EST",
      away: {
        abbr: "MTST", name: "Montana State Bobcats", score: null,
        players: [

        ]
      },
      home: {
        abbr: "ColSt", name: "Colorado State Rams", score: null,
        players: [

        ]
      }
    },
      {
      id: "401922029",
      line: "Montana Grizzlies @ Oregon Ducks (11/2 - 10:00 PM EST)",
      completed: false,
      statusText: "11/2 - 10:00 PM EST",
      away: {
        abbr: "MONT", name: "Montana Grizzlies", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Oreg", name: "Oregon Ducks", score: null,
        players: [

        ]
      }
    },
      {
      id: "401921731",
      line: "East Tennessee State Buccaneers @ Arizona State Sun Devils (11/2 - 10:00 PM EST)",
      completed: false,
      statusText: "11/2 - 10:00 PM EST",
      away: {
        abbr: "ETSU", name: "East Tennessee State Buccaneers", score: null,
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
      id: "401921060",
      line: "Radford Highlanders @ San Francisco Dons (11/2 - 10:00 PM EST)",
      completed: false,
      statusText: "11/2 - 10:00 PM EST",
      away: {
        abbr: "RAD", name: "Radford Highlanders", score: null,
        players: [

        ]
      },
      home: {
        abbr: "USF", name: "San Francisco Dons", score: null,
        players: [

        ]
      }
    },
      {
      id: "401920769",
      line: "Colgate Raiders @ Washington Huskies (11/2 - 10:00 PM EST)",
      completed: false,
      statusText: "11/2 - 10:00 PM EST",
      away: {
        abbr: "COLG", name: "Colgate Raiders", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Wash", name: "Washington Huskies", score: null,
        players: [

        ]
      }
    },
      {
      id: "401920716",
      line: "Eastern Washington Eagles @ Stanford Cardinal (11/2 - 10:00 PM EST)",
      completed: false,
      statusText: "11/2 - 10:00 PM EST",
      away: {
        abbr: "EWU", name: "Eastern Washington Eagles", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Stan", name: "Stanford Cardinal", score: null,
        players: [

        ]
      }
    },
      {
      id: "401920370",
      line: "Whittier Poets @ UC San Diego Tritons (11/2 - 10:00 PM EST)",
      completed: false,
      statusText: "11/2 - 10:00 PM EST",
      away: {
        abbr: "WHTR", name: "Whittier Poets", score: null,
        players: [

        ]
      },
      home: {
        abbr: "UCSD", name: "UC San Diego Tritons", score: null,
        players: [

        ]
      }
    },
      {
      id: "401917509",
      line: "Towson Tigers @ Santa Clara Broncos (11/2 - 10:00 PM EST)",
      completed: false,
      statusText: "11/2 - 10:00 PM EST",
      away: {
        abbr: "TOW", name: "Towson Tigers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "SCla", name: "Santa Clara Broncos", score: null,
        players: [

        ]
      }
    },
      {
      id: "401917507",
      line: "Illinois State Redbirds @ Saint Mary's Gaels (11/2 - 10:00 PM EST)",
      completed: false,
      statusText: "11/2 - 10:00 PM EST",
      away: {
        abbr: "IlSt", name: "Illinois State Redbirds", score: null,
        players: [

        ]
      },
      home: {
        abbr: "StMar", name: "Saint Mary's Gaels", score: null,
        players: [

        ]
      }
    },
      {
      id: "401911517",
      line: "North Alabama Lions @ UC Davis Aggies (11/2 - 10:00 PM EST)",
      completed: false,
      statusText: "11/2 - 10:00 PM EST",
      away: {
        abbr: "UNA", name: "North Alabama Lions", score: null,
        players: [

        ]
      },
      home: {
        abbr: "UCDav", name: "UC Davis Aggies", score: null,
        players: [

        ]
      }
    },
      {
      id: "401911452",
      line: "Robert Morris Colonials @ Nevada Wolf Pack (11/2 - 10:00 PM EST)",
      completed: false,
      statusText: "11/2 - 10:00 PM EST",
      away: {
        abbr: "RMU", name: "Robert Morris Colonials", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Nev", name: "Nevada Wolf Pack", score: null,
        players: [

        ]
      }
    },
      {
      id: "401926771",
      line: "Milwaukee Panthers @ USC Trojans (11/2 - 10:30 PM EST)",
      completed: false,
      statusText: "11/2 - 10:30 PM EST",
      away: {
        abbr: "MILW", name: "Milwaukee Panthers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "USC", name: "USC Trojans", score: null,
        players: [

        ]
      }
    },
      {
      id: "401917506",
      line: "Seattle U Redhawks @ Hawai'i Rainbow Warriors (11/2 - 11:59 PM EST)",
      completed: false,
      statusText: "11/2 - 11:59 PM EST",
      away: {
        abbr: "SeatU", name: "Seattle U Redhawks", score: null,
        players: [

        ]
      },
      home: {
        abbr: "HI", name: "Hawai'i Rainbow Warriors", score: null,
        players: [

        ]
      }
    }
    ]
  }
  }
};
