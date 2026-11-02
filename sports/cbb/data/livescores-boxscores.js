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
      id: "401911707",
      line: "Murray State Racers 94 @ Tennessee State Tigers 64 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Mur", name: "Murray State Racers", score: 94,
        players: [
          { name: "Brigham Rogers", min: 26, pts: 10, reb: 5, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 2, fta: 4, composite: 2.76, zScores: { pts: 0.503, reb: 1.716, ast: 1.781, stl: 0.368, blk: -0.522, tpm: -0.522, fgImpact: 0.597, ftImpact: -1.932, to: 0.775 } },
          { name: "Talis Soulhac", min: 21, pts: 13, reb: 2, ast: 3, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 9, fta: 10, composite: 4.2, zScores: { pts: 0.963, reb: -0.232, ast: 1.781, stl: 2.426, blk: -0.522, tpm: -0.522, fgImpact: -0.896, ftImpact: 1.068, to: 0.137 } },
          { name: "Roman Domon", min: 28, pts: 22, reb: 5, ast: 2, stl: 1, blk: 1, to: 4, tpm: 1, fgm: 8, fga: 16, ftm: 5, fta: 5, composite: 7.05, zScores: { pts: 2.341, reb: 1.716, ast: 0.921, stl: 0.368, blk: 1.915, tpm: 0.696, fgImpact: -0.398, ftImpact: 1.271, to: -1.778 } },
          { name: "Brayden Shorter", min: 21, pts: 13, reb: 3, ast: 0, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 5.27, zScores: { pts: 0.963, reb: 0.417, ast: -0.799, stl: 1.397, blk: -0.522, tpm: 3.133, fgImpact: 0.548, ftImpact: 0, to: 0.137 } },
          { name: "Lachlan Crate", min: 16, pts: 2, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -0.44, zScores: { pts: -0.722, reb: 0.417, ast: -0.799, stl: -0.662, blk: 1.915, tpm: -0.522, fgImpact: -0.846, ftImpact: 0, to: 0.775 } },
          { name: "Jonas Boulefaa", min: 8, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 2, composite: -1.3, zScores: { pts: -0.263, reb: 0.417, ast: -0.799, stl: -0.662, blk: -0.522, tpm: 0.696, fgImpact: 1.493, ftImpact: -2.441, to: 0.775 } },
          { name: "Pavle Nikolic", min: 8, pts: 2, reb: 3, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: 0.56, zScores: { pts: -0.722, reb: 0.417, ast: 0.921, stl: -0.662, blk: 1.915, tpm: -0.522, fgImpact: -0.796, ftImpact: 0.509, to: -0.502 } },
          { name: "Shon Tupuola", min: 6, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.38, zScores: { pts: -0.722, reb: -0.881, ast: -0.799, stl: -0.662, blk: -0.522, tpm: -0.522, fgImpact: -0.05, ftImpact: 0, to: 0.775 } },
          { name: "Dillon Butler", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.29, zScores: { pts: -1.028, reb: -1.53, ast: -0.799, stl: -0.662, blk: -0.522, tpm: -0.522, fgImpact: 0, ftImpact: 0, to: 0.775 } },
          { name: "Mathis Courbon", min: 12, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.24, zScores: { pts: -0.722, reb: -1.53, ast: -0.799, stl: -0.662, blk: -0.522, tpm: -0.522, fgImpact: 0.747, ftImpact: 0, to: 0.775 } },
          { name: "Ben Shtolzberg", min: 15, pts: 6, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: -0.85, zScores: { pts: -0.109, reb: 0.417, ast: -0.799, stl: -0.662, blk: -0.522, tpm: -0.522, fgImpact: 0.697, ftImpact: 0.509, to: 0.137 } },
          { name: "Kaden Magwood", min: 18, pts: 15, reb: 3, ast: 1, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 5, fga: 8, ftm: 4, fta: 4, composite: 1.84, zScores: { pts: 1.269, reb: 0.417, ast: 0.061, stl: -0.662, blk: -0.522, tpm: 0.696, fgImpact: 1.344, ftImpact: 1.017, to: -1.778 } },
          { name: "Christian Jones", min: 17, pts: 2, reb: 1, ast: 2, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.55, zScores: { pts: -0.722, reb: -0.881, ast: 0.921, stl: 1.397, blk: -0.522, tpm: -0.522, fgImpact: -2.439, ftImpact: 0, to: -1.778 } },
          { name: "Navon Shabazz", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.64, zScores: { pts: -1.028, reb: -0.881, ast: -0.799, stl: -0.662, blk: -0.522, tpm: -0.522, fgImpact: 0, ftImpact: 0, to: 0.775 } }
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
      line: "UTEP Miners @ Northern Kentucky Norse (11/2 - 2:30 PM EST)",
      completed: false,
      statusText: "11/2 - 2:30 PM EST",
      away: {
        abbr: "UTEP", name: "UTEP Miners", score: null,
        players: [

        ]
      },
      home: {
        abbr: "NKU", name: "Northern Kentucky Norse", score: null,
        players: [

        ]
      }
    },
      {
      id: "401911469",
      line: "UTSA Roadrunners @ San José State Spartans (11/2 - 3:00 PM EST)",
      completed: false,
      statusText: "11/2 - 3:00 PM EST",
      away: {
        abbr: "UTSA", name: "UTSA Roadrunners", score: null,
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
      id: "401924732",
      line: "Carnegie Mellon Tartans @ Princeton Tigers (11/2 - 4:00 PM EST)",
      completed: false,
      statusText: "11/2 - 4:00 PM EST",
      away: {
        abbr: "CGMU", name: "Carnegie Mellon Tartans", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Princ", name: "Princeton Tigers", score: null,
        players: [

        ]
      }
    },
      {
      id: "401920071",
      line: "UMBC Retrievers @ George Mason Patriots (11/2 - 4:00 PM EST)",
      completed: false,
      statusText: "11/2 - 4:00 PM EST",
      away: {
        abbr: "UMBC", name: "UMBC Retrievers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "GMas", name: "George Mason Patriots", score: null,
        players: [

        ]
      }
    },
      {
      id: "401928858",
      line: "St. Francis (IL) Fighting Saints @ UIC Flames (11/2 - 5:00 PM EST)",
      completed: false,
      statusText: "11/2 - 5:00 PM EST",
      away: {
        abbr: "SFIL", name: "St. Francis (IL) Fighting Saints", score: null,
        players: [

        ]
      },
      home: {
        abbr: "UIC", name: "UIC Flames", score: null,
        players: [

        ]
      }
    },
      {
      id: "401919014",
      line: "UAB Blazers @ McNeese Cowboys (11/2 - 5:30 PM EST)",
      completed: false,
      statusText: "11/2 - 5:30 PM EST",
      away: {
        abbr: "UAB", name: "UAB Blazers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "MCN", name: "McNeese Cowboys", score: null,
        players: [

        ]
      }
    },
      {
      id: "401906769",
      line: "Miami Hurricanes @ Florida Gators (11/2 - 6:00 PM EST)",
      completed: false,
      statusText: "11/2 - 6:00 PM EST",
      away: {
        abbr: "Mia-FL", name: "Miami Hurricanes", score: null,
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
      id: "401925733",
      line: "Oakland Golden Grizzlies @ Michigan Wolverines (11/2 - 6:00 PM EST)",
      completed: false,
      statusText: "11/2 - 6:00 PM EST",
      away: {
        abbr: "OAK", name: "Oakland Golden Grizzlies", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Mich", name: "Michigan Wolverines", score: null,
        players: [

        ]
      }
    },
      {
      id: "401924717",
      line: "Pepperdine Waves @ Cornell Big Red (11/2 - 6:00 PM EST)",
      completed: false,
      statusText: "11/2 - 6:00 PM EST",
      away: {
        abbr: "Pepp", name: "Pepperdine Waves", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Corn", name: "Cornell Big Red", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909562",
      line: "Army Black Knights @ Duke Blue Devils (11/2 - 6:30 PM EST)",
      completed: false,
      statusText: "11/2 - 6:30 PM EST",
      away: {
        abbr: "ARMY", name: "Army Black Knights", score: null,
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
      id: "401920679",
      line: "Monmouth Hawks @ St. John's Red Storm (11/2 - 6:30 PM EST)",
      completed: false,
      statusText: "11/2 - 6:30 PM EST",
      away: {
        abbr: "MONM", name: "Monmouth Hawks", score: null,
        players: [

        ]
      },
      home: {
        abbr: "StJon", name: "St. John's Red Storm", score: null,
        players: [

        ]
      }
    },
      {
      id: "401925857",
      line: "Central Connecticut Blue Devils @ Temple Owls (11/2 - 6:30 PM EST)",
      completed: false,
      statusText: "11/2 - 6:30 PM EST",
      away: {
        abbr: "CCSU", name: "Central Connecticut Blue Devils", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Tem", name: "Temple Owls", score: null,
        players: [

        ]
      }
    },
      {
      id: "401921264",
      line: "Loyola Maryland Greyhounds @ Georgetown Hoyas (11/2 - 6:30 PM EST)",
      completed: false,
      statusText: "11/2 - 6:30 PM EST",
      away: {
        abbr: "L-MD", name: "Loyola Maryland Greyhounds", score: null,
        players: [

        ]
      },
      home: {
        abbr: "GTown", name: "Georgetown Hoyas", score: null,
        players: [

        ]
      }
    },
      {
      id: "401921093",
      line: "Dallas Christian Crusaders @ Rice Owls (11/2 - 6:30 PM EST)",
      completed: false,
      statusText: "11/2 - 6:30 PM EST",
      away: {
        abbr: "DCC", name: "Dallas Christian Crusaders", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Rice", name: "Rice Owls", score: null,
        players: [

        ]
      }
    },
      {
      id: "401924856",
      line: "Quinnipiac Bobcats @ Michigan State Spartans (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "QUIN", name: "Quinnipiac Bobcats", score: null,
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
      id: "401909771",
      line: "Memphis Tigers @ Iowa State Cyclones (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "Mem", name: "Memphis Tigers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "IaSt", name: "Iowa State Cyclones", score: null,
        players: [

        ]
      }
    },
      {
      id: "401921036",
      line: "Jackson State Tigers @ Texas Tech Red Raiders (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "JKST", name: "Jackson State Tigers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "TxTch", name: "Texas Tech Red Raiders", score: null,
        players: [

        ]
      }
    },
      {
      id: "401921104",
      line: "Bellarmine Knights @ Vanderbilt Commodores (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "BELL", name: "Bellarmine Knights", score: null,
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
      id: "401925818",
      line: "Charlotte 49ers @ Indiana State Sycamores (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "UNCC", name: "Charlotte 49ers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "IndSt", name: "Indiana State Sycamores", score: null,
        players: [

        ]
      }
    },
      {
      id: "401924743",
      line: "Howard Bison @ Yale Bulldogs (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "HOW", name: "Howard Bison", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Yale", name: "Yale Bulldogs", score: null,
        players: [

        ]
      }
    },
      {
      id: "401921766",
      line: "Niagara Purple Eagles @ West Virginia Mountaineers (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "NIA", name: "Niagara Purple Eagles", score: null,
        players: [

        ]
      },
      home: {
        abbr: "WVU", name: "West Virginia Mountaineers", score: null,
        players: [

        ]
      }
    },
      {
      id: "401921753",
      line: "Florida Gulf Coast Eagles @ UCF Knights (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "FGCU", name: "Florida Gulf Coast Eagles", score: null,
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
      id: "401921139",
      line: "Elon Phoenix @ Columbia Lions (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "ELON", name: "Elon Phoenix", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Colum", name: "Columbia Lions", score: null,
        players: [

        ]
      }
    },
      {
      id: "401920354",
      line: "MIT Engineers @ Harvard Crimson (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "MIT", name: "MIT Engineers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Harv", name: "Harvard Crimson", score: null,
        players: [

        ]
      }
    },
      {
      id: "401920231",
      line: "Dartmouth Big Green @ Marist Red Foxes (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "Dart", name: "Dartmouth Big Green", score: null,
        players: [

        ]
      },
      home: {
        abbr: "MRST", name: "Marist Red Foxes", score: null,
        players: [

        ]
      }
    },
      {
      id: "401920201",
      line: "Little Rock Trojans @ VCU Rams (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "LR", name: "Little Rock Trojans", score: null,
        players: [

        ]
      },
      home: {
        abbr: "VCU", name: "VCU Rams", score: null,
        players: [

        ]
      }
    },
      {
      id: "401919803",
      line: "Long Island University Sharks @ Florida Atlantic Owls (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "LIU", name: "Long Island University Sharks", score: null,
        players: [

        ]
      },
      home: {
        abbr: "FAU", name: "Florida Atlantic Owls", score: null,
        players: [

        ]
      }
    },
      {
      id: "401918976",
      line: "South Carolina Upstate Spartans @ East Carolina Pirates (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "UPST", name: "South Carolina Upstate Spartans", score: null,
        players: [

        ]
      },
      home: {
        abbr: "ECU", name: "East Carolina Pirates", score: null,
        players: [

        ]
      }
    },
      {
      id: "401918073",
      line: "Stetson Hatters @ Clemson Tigers (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "STET", name: "Stetson Hatters", score: null,
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
      id: "401916296",
      line: "Bucknell Bison @ Maryland Terrapins (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "BUCK", name: "Bucknell Bison", score: null,
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
      id: "401916286",
      line: "Eastern Illinois Panthers @ Indiana Hoosiers (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "EIU", name: "Eastern Illinois Panthers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Ind", name: "Indiana Hoosiers", score: null,
        players: [

        ]
      }
    },
      {
      id: "401913099",
      line: "Western Carolina Catamounts @ North Carolina Tar Heels (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "WCU", name: "Western Carolina Catamounts", score: null,
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
      id: "401912207",
      line: "American University Eagles @ Cincinnati Bearcats (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "AMER", name: "American University Eagles", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Cin", name: "Cincinnati Bearcats", score: null,
        players: [

        ]
      }
    },
      {
      id: "401911374",
      line: "Charleston Southern Buccaneers @ South Florida Bulls (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
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
      id: "401911333",
      line: "Air Force Falcons @ Wright State Raiders (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "AF", name: "Air Force Falcons", score: null,
        players: [

        ]
      },
      home: {
        abbr: "WRST", name: "Wright State Raiders", score: null,
        players: [

        ]
      }
    },
      {
      id: "401911304",
      line: "New Hampshire Wildcats @ Brown Bears (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "UNH", name: "New Hampshire Wildcats", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Brown", name: "Brown Bears", score: null,
        players: [

        ]
      }
    },
      {
      id: "401911261",
      line: "Youngstown State Penguins @ St. Bonaventure Bonnies (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "YSU", name: "Youngstown State Penguins", score: null,
        players: [

        ]
      },
      home: {
        abbr: "StBon", name: "St. Bonaventure Bonnies", score: null,
        players: [

        ]
      }
    },
      {
      id: "401911237",
      line: "UNC Asheville Bulldogs @ Richmond Spiders (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "UNCA", name: "UNC Asheville Bulldogs", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Rich", name: "Richmond Spiders", score: null,
        players: [

        ]
      }
    },
      {
      id: "401911185",
      line: "NJIT Highlanders @ Dayton Flyers (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "NJIT", name: "NJIT Highlanders", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Dayt", name: "Dayton Flyers", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909716",
      line: "New Haven Chargers @ Syracuse Orange (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "NHVN", name: "New Haven Chargers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Syr", name: "Syracuse Orange", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909705",
      line: "Rider Broncs @ Pittsburgh Panthers (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "RID", name: "Rider Broncs", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Pitt", name: "Pittsburgh Panthers", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909541",
      line: "Mount St. Mary's Mountaineers @ Xavier Musketeers (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "MSM", name: "Mount St. Mary's Mountaineers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Xav", name: "Xavier Musketeers", score: null,
        players: [

        ]
      }
    },
      {
      id: "401909531",
      line: "Maine Black Bears @ Providence Friars (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "ME", name: "Maine Black Bears", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Prov", name: "Providence Friars", score: null,
        players: [

        ]
      }
    },
      {
      id: "401902275",
      line: "Lafayette Leopards @ Butler Bulldogs (11/2 - 7:00 PM EST)",
      completed: false,
      statusText: "11/2 - 7:00 PM EST",
      away: {
        abbr: "LAF", name: "Lafayette Leopards", score: null,
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
      id: "401921704",
      line: "Gonzaga Bulldogs @ Purdue Boilermakers (11/2 - 7:30 PM EST)",
      completed: false,
      statusText: "11/2 - 7:30 PM EST",
      away: {
        abbr: "Gonz", name: "Gonzaga Bulldogs", score: null,
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
      id: "401920893",
      line: "Denver Pioneers @ Wisconsin Badgers (11/2 - 7:30 PM EST)",
      completed: false,
      statusText: "11/2 - 7:30 PM EST",
      away: {
        abbr: "Denv", name: "Denver Pioneers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Wisc", name: "Wisconsin Badgers", score: null,
        players: [

        ]
      }
    },
      {
      id: "401920886",
      line: "Saint Peter's Peacocks @ Seton Hall Pirates (11/2 - 7:30 PM EST)",
      completed: false,
      statusText: "11/2 - 7:30 PM EST",
      away: {
        abbr: "SPU", name: "Saint Peter's Peacocks", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Seton", name: "Seton Hall Pirates", score: null,
        players: [

        ]
      }
    },
      {
      id: "401920758",
      line: "Southern Indiana Screaming Eagles @ Belmont Bruins (11/2 - 7:30 PM EST)",
      completed: false,
      statusText: "11/2 - 7:30 PM EST",
      away: {
        abbr: "USI", name: "Southern Indiana Screaming Eagles", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Belm", name: "Belmont Bruins", score: null,
        players: [

        ]
      }
    },
      {
      id: "401919780",
      line: "Le Moyne Dolphins @ Nebraska Cornhuskers (11/2 - 7:30 PM EST)",
      completed: false,
      statusText: "11/2 - 7:30 PM EST",
      away: {
        abbr: "LEM", name: "Le Moyne Dolphins", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Nebras", name: "Nebraska Cornhuskers", score: null,
        players: [

        ]
      }
    },
      {
      id: "401918955",
      line: "Campbell Fighting Camels @ NC State Wolfpack (11/2 - 7:30 PM EST)",
      completed: false,
      statusText: "11/2 - 7:30 PM EST",
      away: {
        abbr: "CAM", name: "Campbell Fighting Camels", score: null,
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
      id: "401917173",
      line: "Canisius Golden Griffins @ Penn State Nittany Lions (11/2 - 7:30 PM EST)",
      completed: false,
      statusText: "11/2 - 7:30 PM EST",
      away: {
        abbr: "CAN", name: "Canisius Golden Griffins", score: null,
        players: [

        ]
      },
      home: {
        abbr: "PSU", name: "Penn State Nittany Lions", score: null,
        players: [

        ]
      }
    },
      {
      id: "401911208",
      line: "Navy Midshipmen @ George Washington Revolutionaries (11/2 - 7:30 PM EST)",
      completed: false,
      statusText: "11/2 - 7:30 PM EST",
      away: {
        abbr: "NAVY", name: "Navy Midshipmen", score: null,
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
      id: "401909522",
      line: "Mercyhurst Lakers @ Marquette Golden Eagles (11/2 - 7:30 PM EST)",
      completed: false,
      statusText: "11/2 - 7:30 PM EST",
      away: {
        abbr: "MERC", name: "Mercyhurst Lakers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Marq", name: "Marquette Golden Eagles", score: null,
        players: [

        ]
      }
    },
      {
      id: "401906791",
      line: "Tennessee Tech Golden Eagles @ Mississippi State Bulldogs (11/2 - 7:30 PM EST)",
      completed: false,
      statusText: "11/2 - 7:30 PM EST",
      away: {
        abbr: "TNTC", name: "Tennessee Tech Golden Eagles", score: null,
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
      id: "401906779",
      line: "North Carolina Central Eagles @ Georgia Bulldogs (11/2 - 7:30 PM EST)",
      completed: false,
      statusText: "11/2 - 7:30 PM EST",
      away: {
        abbr: "NCCU", name: "North Carolina Central Eagles", score: null,
        players: [

        ]
      },
      home: {
        abbr: "UGA", name: "Georgia Bulldogs", score: null,
        players: [

        ]
      }
    },
      {
      id: "401913525",
      line: "Fairleigh Dickinson Knights @ Illinois Fighting Illini (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
      away: {
        abbr: "FDU", name: "Fairleigh Dickinson Knights", score: null,
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
      id: "401909784",
      line: "Fordham Rams @ Kansas Jayhawks (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
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
      id: "401928995",
      line: "Western Illinois Leathernecks @ Valparaiso Beacons (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
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
      line: "IU Kokomo Cougars @ Evansville Purple Aces (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
      away: {
        abbr: "IUK", name: "IU Kokomo Cougars", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Evans", name: "Evansville Purple Aces", score: null,
        players: [

        ]
      }
    },
      {
      id: "401927360",
      line: "Monmouth (IL) Fighting Scots @ Bradley Braves (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
      away: {
        abbr: "MNIL", name: "Monmouth (IL) Fighting Scots", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Brad", name: "Bradley Braves", score: null,
        players: [

        ]
      }
    },
      {
      id: "401925862",
      line: "Ottawa (KS) OTTAWA (KS) @ Tulsa Golden Hurricane (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
      away: {
        abbr: "OUKS", name: "Ottawa (KS) OTTAWA (KS)", score: null,
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
      line: "Texas A&M-Corpus Christi Islanders @ Texas State Bobcats (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
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
      id: "401920951",
      line: "Maryville (MO) MARYVILLE UNIVERSITY (MO) @ Southern Illinois Salukis (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
      away: {
        abbr: "MUMO", name: "Maryville (MO) MARYVILLE UNIVERSITY (MO)", score: null,
        players: [

        ]
      },
      home: {
        abbr: "SIU", name: "Southern Illinois Salukis", score: null,
        players: [

        ]
      }
    },
      {
      id: "401920732",
      line: "Binghamton Bearcats @ Northwestern Wildcats (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
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
      line: "Lindenwood Lions @ TCU Horned Frogs (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
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
      line: "UT Martin Skyhawks @ Tulane Green Wave (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
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
      line: "Southern Jaguars @ SMU Mustangs (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
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
      line: "Adams State Grizzlies @ California Golden Bears (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
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
      line: "Willamette Bearcats @ Portland Pilots (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
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
      line: "Lehigh Mountain Hawks @ Saint Louis Billikens (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
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
      line: "The Citadel Bulldogs @ Loyola Chicago Ramblers (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
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
      line: "Maryland Eastern Shore Hawks @ Wake Forest Demon Deacons (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
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
      line: "West Georgia Wolves @ DePaul Blue Demons (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
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
      line: "Kansas City Roos @ Creighton Bluejays (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
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
      line: "East Texas A&M Lions @ Oklahoma Sooners (11/2 - 8:00 PM EST)",
      completed: false,
      statusText: "11/2 - 8:00 PM EST",
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
      id: "401925826",
      line: "Southwestern Christian U Eagles @ North Texas Mean Green (11/2 - 8:30 PM EST)",
      completed: false,
      statusText: "11/2 - 8:30 PM EST",
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
      id: "401925683",
      line: "Alcorn State Braves @ Ole Miss Rebels (11/2 - 8:30 PM EST)",
      completed: false,
      statusText: "11/2 - 8:30 PM EST",
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
      id: "401909694",
      line: "Florida A&M Rattlers @ Florida State Seminoles (11/2 - 8:30 PM EST)",
      completed: false,
      statusText: "11/2 - 8:30 PM EST",
      away: {
        abbr: "FAMU", name: "Florida A&M Rattlers", score: null,
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
      id: "401911390",
      line: "Gardner-Webb Runnin' Bulldogs @ UConn Huskies (11/2 - 9:00 PM EST)",
      completed: false,
      statusText: "11/2 - 9:00 PM EST",
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
      line: "Chicago State Cougars @ Texas Longhorns (11/2 - 9:00 PM EST)",
      completed: false,
      statusText: "11/2 - 9:00 PM EST",
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
      line: "La Salle Explorers @ Houston Cougars (11/2 - 9:00 PM EST)",
      completed: false,
      statusText: "11/2 - 9:00 PM EST",
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
      line: "Chattanooga Mocs @ Louisville Cardinals (11/2 - 9:00 PM EST)",
      completed: false,
      statusText: "11/2 - 9:00 PM EST",
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
      id: "401916313",
      line: "Ohio State Buckeyes @ BYU Cougars (11/2 - 9:00 PM EST)",
      completed: false,
      statusText: "11/2 - 9:00 PM EST",
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
      id: "401929179",
      line: "Fresno Pacific Sunbirds @ Fresno State Bulldogs (11/2 - 9:00 PM EST)",
      completed: false,
      statusText: "11/2 - 9:00 PM EST",
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
      line: "San Francisco State Gators @ UC Santa Barbara Gauchos (11/2 - 9:00 PM EST)",
      completed: false,
      statusText: "11/2 - 9:00 PM EST",
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
      line: "Davidson Wildcats @ Washington State Cougars (11/2 - 9:00 PM EST)",
      completed: false,
      statusText: "11/2 - 9:00 PM EST",
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
      line: "Utah Tech Trailblazers @ New Mexico Lobos (11/2 - 9:00 PM EST)",
      completed: false,
      statusText: "11/2 - 9:00 PM EST",
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
      line: "Long Beach State Beach @ Utah Utes (11/2 - 9:00 PM EST)",
      completed: false,
      statusText: "11/2 - 9:00 PM EST",
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
      line: "Incarnate Word Cardinals @ Oklahoma State Cowboys (11/2 - 9:00 PM EST)",
      completed: false,
      statusText: "11/2 - 9:00 PM EST",
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
      line: "North Dakota Fighting Hawks @ Minnesota Golden Gophers (11/2 - 9:00 PM EST)",
      completed: false,
      statusText: "11/2 - 9:00 PM EST",
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
      line: "Texas Southern Tigers @ Grand Canyon Lopes (11/2 - 9:00 PM EST)",
      completed: false,
      statusText: "11/2 - 9:00 PM EST",
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
      line: "Abilene Christian Wildcats @ Colorado Buffaloes (11/2 - 9:00 PM EST)",
      completed: false,
      statusText: "11/2 - 9:00 PM EST",
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
      id: "401925947",
      line: "Weber State Wildcats @ Oregon State Beavers (11/2 - 9:30 PM EST)",
      completed: false,
      statusText: "11/2 - 9:30 PM EST",
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
      line: "Idaho State Bengals @ Utah State Aggies (11/2 - 9:30 PM EST)",
      completed: false,
      statusText: "11/2 - 9:30 PM EST",
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
      line: "Biola Eagles @ San Diego Toreros (11/2 - 9:30 PM EST)",
      completed: false,
      statusText: "11/2 - 9:30 PM EST",
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
      line: "Northwestern State Demons @ Baylor Bears (11/2 - 9:30 PM EST)",
      completed: false,
      statusText: "11/2 - 9:30 PM EST",
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
