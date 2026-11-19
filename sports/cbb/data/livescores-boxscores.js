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
    "2026-11-12": {
    games: [
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
          { name: "Bruce Branch III", min: 25, pts: 17, reb: 5, ast: 1, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 6, fga: 8, ftm: 3, fta: 7, composite: 0.23, zScores: { pts: 1.568, reb: 0.712, ast: -0.222, stl: -0.688, blk: -0.446, tpm: 1.269, fgImpact: 1.823, ftImpact: -2.458, to: -1.331 } },
          { name: "Jaxon Kohler", min: 24, pts: 12, reb: 6, ast: 3, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 5, fga: 5, ftm: 0, fta: 0, composite: 2.95, zScores: { pts: 0.785, reb: 1.079, ast: 0.89, stl: -0.688, blk: -0.446, tpm: 1.269, fgImpact: 2.153, ftImpact: 0, to: -2.098 } },
          { name: "Tyler Betsey", min: 23, pts: 7, reb: 6, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 1.4, zScores: { pts: 0.003, reb: 1.079, ast: -0.222, stl: 0.338, blk: -0.446, tpm: 0.289, fgImpact: 0.151, ftImpact: 0, to: 0.204 } },
          { name: "Collin Chandler", min: 29, pts: 11, reb: 3, ast: 1, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 3.96, zScores: { pts: 0.629, reb: -0.023, ast: -0.222, stl: 1.365, blk: -0.446, tpm: 2.25, fgImpact: 0.202, ftImpact: 0, to: 0.204 } },
          { name: "Robert Wright III", min: 31, pts: 22, reb: 2, ast: 7, stl: 5, blk: 0, to: 2, tpm: 0, fgm: 9, fga: 15, ftm: 4, fta: 8, composite: 7.3, zScores: { pts: 2.35, reb: -0.391, ast: 3.115, stl: 4.444, blk: -0.446, tpm: -0.691, fgImpact: 1.594, ftImpact: -2.111, to: -0.563 } },
          { name: "Brooks Bahr", min: 10, pts: 5, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 3, composite: -1.54, zScores: { pts: -0.31, reb: -1.126, ast: -0.222, stl: 0.338, blk: -0.446, tpm: -0.691, fgImpact: -0.33, ftImpact: 1.043, to: 0.204 } },
          { name: "Khadim Mboup", min: 15, pts: 2, reb: 6, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: 2, zScores: { pts: -0.78, reb: 1.079, ast: -0.778, stl: -0.688, blk: 2.836, tpm: -0.691, fgImpact: 0.05, ftImpact: 0, to: 0.971 } },
          { name: "Brody Kozlowski", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.48, zScores: { pts: -1.093, reb: -0.759, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: 0, to: 0.971 } },
          { name: "Jake Wahlin", min: 20, pts: 7, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 2, composite: -1.14, zScores: { pts: 0.003, reb: 0.344, ast: -0.778, stl: -0.688, blk: -0.446, tpm: 0.289, fgImpact: 0.912, ftImpact: -1.751, to: 0.971 } },
          { name: "Dawson Baker", min: 8, pts: 2, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -1.46, zScores: { pts: -0.78, reb: -0.391, ast: -0.778, stl: 0.338, blk: -0.446, tpm: -0.691, fgImpact: -0.38, ftImpact: 0.695, to: 0.971 } },
          { name: "Petar Ostojic", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.48, zScores: { pts: -1.093, reb: -0.759, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: 0, to: 0.971 } },
          { name: "Nate Pickens", min: 12, pts: 1, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -3.4, zScores: { pts: -0.936, reb: -1.126, ast: -0.222, stl: 0.338, blk: -0.446, tpm: -0.691, fgImpact: -0.76, ftImpact: -0.528, to: 0.971 } }
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
          { name: "Emmanuel Kanga", min: 27, pts: 13, reb: 7, ast: 0, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 5, ftm: 3, fta: 4, composite: 4.21, zScores: { pts: 0.942, reb: 1.447, ast: -0.778, stl: 0.338, blk: 1.195, tpm: -0.691, fgImpact: 2.153, ftImpact: 0.167, to: -0.563 } },
          { name: "Elijah Jones", min: 28, pts: 3, reb: 3, ast: 1, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 0.06, zScores: { pts: -0.623, reb: -0.023, ast: -0.222, stl: 0.338, blk: 1.195, tpm: 0.289, fgImpact: -0.33, ftImpact: 0, to: -0.563 } },
          { name: "Efeosa Oliogu-Elabor", min: 23, pts: 9, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 3, fta: 4, composite: 1.29, zScores: { pts: 0.316, reb: -0.023, ast: 0.89, stl: 0.338, blk: -0.446, tpm: -0.691, fgImpact: 0.531, ftImpact: 0.167, to: 0.204 } },
          { name: "Baraka Okojie", min: 34, pts: 13, reb: 7, ast: 1, stl: 3, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 12, ftm: 6, fta: 8, composite: 1.28, zScores: { pts: 0.942, reb: 1.447, ast: -0.222, stl: 2.391, blk: -0.446, tpm: 0.289, fgImpact: -2.13, ftImpact: 0.335, to: -1.331 } },
          { name: "Brayden O'Connor", min: 33, pts: 15, reb: 4, ast: 6, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 9, ftm: 8, fta: 10, composite: 4.84, zScores: { pts: 1.255, reb: 0.344, ast: 2.559, stl: 1.365, blk: -0.446, tpm: 0.289, fgImpact: -0.989, ftImpact: 1.03, to: -0.563 } },
          { name: "Emmett Adair", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.38, ftImpact: 0, to: 0.204 } },
          { name: "Shane Pendergrass", min: 20, pts: 16, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 7, fga: 11, ftm: 1, fta: 2, composite: 3.34, zScores: { pts: 1.411, reb: -0.023, ast: -0.778, stl: -0.688, blk: 1.195, tpm: 0.289, fgImpact: 1.494, ftImpact: -0.528, to: 0.971 } },
          { name: "Michael Marcus Jr.", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.85, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: 0, to: 0.971 } },
          { name: "Makhai Valentine", min: 27, pts: 7, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: 1.57, zScores: { pts: 0.003, reb: 0.344, ast: -0.222, stl: -0.688, blk: -0.446, tpm: 1.269, fgImpact: 0.861, ftImpact: -0.528, to: 0.971 } },
          { name: "Malik Presley", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.85, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: 0, to: 0.971 } }
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
          { name: "Ben Thornbrue", min: 31, pts: 9, reb: 3, ast: 2, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 7, fta: 10, composite: 4.17, zScores: { pts: 0.316, reb: -0.023, ast: 0.334, stl: -0.688, blk: 4.478, tpm: -0.691, fgImpact: -0.33, ftImpact: -0.193, to: 0.971 } },
          { name: "Xander Alarie", min: 24, pts: 9, reb: 7, ast: 0, stl: 4, blk: 1, to: 4, tpm: 0, fgm: 2, fga: 7, ftm: 5, fta: 6, composite: 2.63, zScores: { pts: 0.316, reb: 1.447, ast: -0.778, stl: 3.417, blk: 1.195, tpm: -0.691, fgImpact: -1.04, ftImpact: 0.862, to: -2.098 } },
          { name: "Max Gaspa", min: 26, pts: 6, reb: 1, ast: 2, stl: 0, blk: 0, to: 5, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.21, zScores: { pts: -0.154, reb: -0.759, ast: 0.334, stl: -0.688, blk: -0.446, tpm: 1.269, fgImpact: 0.101, ftImpact: 0, to: -2.866 } },
          { name: "Timoty van der Knaap", min: 22, pts: 7, reb: 6, ast: 0, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -1.46, zScores: { pts: 0.003, reb: 1.079, ast: -0.778, stl: -0.688, blk: -0.446, tpm: 0.289, fgImpact: -0.279, ftImpact: 0.695, to: -1.331 } },
          { name: "Trevon Payton", min: 37, pts: 16, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 13, ftm: 2, fta: 2, composite: 3.05, zScores: { pts: 1.411, reb: 0.344, ast: 0.334, stl: -0.688, blk: -0.446, tpm: 1.269, fgImpact: -0.078, ftImpact: 0.695, to: 0.204 } },
          { name: "Noah Williams", min: 20, pts: 3, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 4, composite: -6.43, zScores: { pts: -0.623, reb: 0.344, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.71, ftImpact: -2.278, to: -0.563 } },
          { name: "Gustavo Guimares", min: 7, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.37, zScores: { pts: -0.78, reb: -0.391, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0.431, ftImpact: 0, to: 0.971 } },
          { name: "Dimitrije Pavlovic", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.23, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.38, ftImpact: 0, to: 0.971 } },
          { name: "Kyle Grill", min: 23, pts: 4, reb: 4, ast: 2, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.58, zScores: { pts: -0.467, reb: 0.344, ast: 0.334, stl: 0.338, blk: -0.446, tpm: -0.691, fgImpact: -0.659, ftImpact: 0, to: -1.331 } },
          { name: "Jackson Seastrunk", min: 5, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.2, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: 0.338, blk: -0.446, tpm: -0.691, fgImpact: -0.38, ftImpact: 0, to: 0.971 } }
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
          { name: "Roko Prkacin", min: 24, pts: 14, reb: 4, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 6, ftm: 4, fta: 6, composite: 0.71, zScores: { pts: 1.098, reb: 0.344, ast: -0.778, stl: 0.338, blk: -0.446, tpm: -0.691, fgImpact: 1.773, ftImpact: -0.36, to: -0.563 } },
          { name: "Ivan Juric", min: 31, pts: 20, reb: 15, ast: 1, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 7, fga: 8, ftm: 6, fta: 11, composite: 5.03, zScores: { pts: 2.037, reb: 4.388, ast: -0.222, stl: -0.688, blk: 1.195, tpm: -0.691, fgImpact: 2.634, ftImpact: -2.291, to: -1.331 } },
          { name: "Josh Reed", min: 24, pts: 7, reb: 6, ast: 1, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 1.66, zScores: { pts: 0.003, reb: 1.079, ast: -0.222, stl: 1.365, blk: -0.446, tpm: 0.289, fgImpact: -0.609, ftImpact: 0, to: 0.204 } },
          { name: "Thomas Allard", min: 32, pts: 6, reb: 2, ast: 5, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: 0.76, zScores: { pts: -0.154, reb: -0.391, ast: 2.003, stl: -0.688, blk: -0.446, tpm: 1.269, fgImpact: -1.04, ftImpact: 0, to: 0.204 } },
          { name: "Dasonte Bowen", min: 33, pts: 4, reb: 2, ast: 7, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: 2.03, zScores: { pts: -0.467, reb: -0.391, ast: 3.115, stl: 0.338, blk: -0.446, tpm: -0.691, fgImpact: -1.09, ftImpact: 0.695, to: 0.971 } },
          { name: "Francois Wibaut", min: 17, pts: 7, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 3, composite: -1.49, zScores: { pts: 0.003, reb: -0.391, ast: -0.778, stl: 0.338, blk: -0.446, tpm: -0.691, fgImpact: 0.912, ftImpact: -1.403, to: 0.971 } },
          { name: "Brant Byers", min: 29, pts: 14, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 7, ftm: 3, fta: 5, composite: 2.71, zScores: { pts: 1.098, reb: -0.391, ast: -0.222, stl: 0.338, blk: -0.446, tpm: 2.25, fgImpact: 0.582, ftImpact: -0.708, to: 0.204 } },
          { name: "Tim Oboh", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.24, zScores: { pts: -1.093, reb: -0.759, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.76, ftImpact: 0, to: 0.971 } },
          { name: "Andy Gemao", min: 3, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.31, zScores: { pts: -1.093, reb: -0.759, ast: -0.222, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.38, ftImpact: 0, to: 0.971 } },
          { name: "Jay Rodgers", min: 5, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.31, zScores: { pts: -1.093, reb: -0.759, ast: -0.222, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.38, ftImpact: 0, to: 0.971 } }
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
          { name: "Aiden Sherrell", min: 30, pts: 11, reb: 8, ast: 0, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 7, ftm: 6, fta: 6, composite: 3.97, zScores: { pts: 0.629, reb: 1.815, ast: -0.778, stl: 0.338, blk: 1.195, tpm: 0.289, fgImpact: -1.04, ftImpact: 2.085, to: -0.563 } },
          { name: "Samet Yigitoglu", min: 17, pts: 18, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 9, fga: 10, ftm: 0, fta: 3, composite: 2.6, zScores: { pts: 1.724, reb: 1.079, ast: -0.222, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 3.495, ftImpact: -2.626, to: 0.971 } },
          { name: "Markus Burton", min: 24, pts: 12, reb: 3, ast: 7, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 8, ftm: 4, fta: 4, composite: 3.08, zScores: { pts: 0.785, reb: -0.023, ast: 3.115, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0.202, ftImpact: 1.39, to: -0.563 } },
          { name: "Jaeden Mustaf", min: 29, pts: 11, reb: 2, ast: 3, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 2, fga: 3, ftm: 7, fta: 10, composite: 0.93, zScores: { pts: 0.629, reb: -0.391, ast: 0.89, stl: 0.338, blk: 1.195, tpm: -0.691, fgImpact: 0.481, ftImpact: -0.193, to: -1.331 } },
          { name: "Darren Harris", min: 27, pts: 4, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -2.43, zScores: { pts: -0.467, reb: 0.344, ast: 0.334, stl: -0.688, blk: -0.446, tpm: 0.289, fgImpact: -0.71, ftImpact: -0.528, to: -0.563 } },
          { name: "Trevor Manhertz", min: 14, pts: 10, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 5, ftm: 1, fta: 2, composite: 1.14, zScores: { pts: 0.472, reb: 0.712, ast: -0.222, stl: -0.688, blk: -0.446, tpm: 0.289, fgImpact: 1.342, ftImpact: -0.528, to: 0.204 } },
          { name: "Vaughn Karvala", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -3.22, zScores: { pts: -0.78, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.38, ftImpact: 0.695, to: 0.971 } },
          { name: "Sam Alexis", min: 18, pts: 5, reb: 5, ast: 0, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 3, composite: -0.78, zScores: { pts: -0.31, reb: 0.712, ast: -0.778, stl: -0.688, blk: 2.836, tpm: -0.691, fgImpact: 0.101, ftImpact: -1.403, to: -0.563 } },
          { name: "Trent Sisley", min: 10, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.76, zScores: { pts: -0.78, reb: -0.023, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.33, ftImpact: 0, to: 0.971 } },
          { name: "Clemens Sokolov", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.85, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: 0, to: 0.971 } },
          { name: "Drew Snively", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.85, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: 0, to: 0.971 } },
          { name: "Bryce Lindsay", min: 25, pts: 15, reb: 2, ast: 1, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 9, ftm: 4, fta: 4, composite: 3.43, zScores: { pts: 1.255, reb: -0.391, ast: -0.222, stl: 0.338, blk: -0.446, tpm: 2.25, fgImpact: -0.178, ftImpact: 1.39, to: -0.563 } }
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
          { name: "Brenen Lorient", min: 27, pts: 8, reb: 2, ast: 0, stl: 3, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 2.94, zScores: { pts: 0.159, reb: -0.391, ast: -0.778, stl: 2.391, blk: 1.195, tpm: -0.691, fgImpact: 0.151, ftImpact: 0.695, to: 0.204 } },
          { name: "Mouhamed Sylla", min: 19, pts: 8, reb: 5, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 3, composite: 1.61, zScores: { pts: 0.159, reb: 0.712, ast: -0.778, stl: -0.688, blk: 1.195, tpm: -0.691, fgImpact: 0.912, ftImpact: -0.18, to: 0.971 } },
          { name: "Miles Sadler", min: 28, pts: 12, reb: 0, ast: 6, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 11, ftm: 3, fta: 4, composite: -0.73, zScores: { pts: 0.785, reb: -1.126, ast: 2.559, stl: -0.688, blk: -0.446, tpm: 0.289, fgImpact: -0.939, ftImpact: 0.167, to: -1.331 } },
          { name: "Seydou Traore", min: 18, pts: 7, reb: 6, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: 2.1, zScores: { pts: 0.003, reb: 1.079, ast: -0.778, stl: -0.688, blk: 1.195, tpm: 0.289, fgImpact: 0.101, ftImpact: 0.695, to: 0.204 } },
          { name: "Finley Bizjack", min: 33, pts: 15, reb: 6, ast: 3, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 12, ftm: 5, fta: 5, composite: 4.24, zScores: { pts: 1.255, reb: 1.079, ast: 0.89, stl: 0.338, blk: -0.446, tpm: 1.269, fgImpact: -1.319, ftImpact: 1.738, to: -0.563 } },
          { name: "Javan Buchanan", min: 17, pts: 12, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 8, fta: 10, composite: -0.88, zScores: { pts: 0.785, reb: -0.023, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -1.04, ftImpact: 1.03, to: 0.971 } },
          { name: "Amadou Seini", min: 16, pts: 4, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 4, composite: -4.77, zScores: { pts: -0.467, reb: 0.344, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0.481, ftImpact: -3.501, to: 0.971 } },
          { name: "Aliou Dioum", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.85, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: 0, to: 0.971 } },
          { name: "Jelani McKoy", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.85, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: 0, to: 0.971 } },
          { name: "Keonte Greybear", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.48, zScores: { pts: -1.093, reb: -0.759, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: 0, to: 0.971 } },
          { name: "Martin Somerville", min: 20, pts: 3, reb: 1, ast: 1, stl: 4, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -0.76, zScores: { pts: -0.623, reb: -0.759, ast: -0.222, stl: 3.417, blk: -0.446, tpm: 0.289, fgImpact: -1.85, ftImpact: 0, to: -0.563 } },
          { name: "Joson Sanon", min: 19, pts: 6, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 1.18, zScores: { pts: -0.154, reb: 0.344, ast: -0.222, stl: -0.688, blk: -0.446, tpm: 1.269, fgImpact: 0.101, ftImpact: 0, to: 0.971 } }
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
          { name: "Matas Deniusas", min: 29, pts: 16, reb: 12, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 9, ftm: 9, fta: 9, composite: 6.44, zScores: { pts: 1.411, reb: 3.285, ast: -0.778, stl: 0.338, blk: -0.446, tpm: 0.289, fgImpact: -0.989, ftImpact: 3.128, to: 0.204 } },
          { name: "Jonah Hinton", min: 25, pts: 3, reb: 1, ast: 1, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -0.64, zScores: { pts: -0.623, reb: -0.759, ast: -0.222, stl: 2.391, blk: -0.446, tpm: 0.289, fgImpact: -0.71, ftImpact: 0, to: -0.563 } },
          { name: "Jason Fontenet II", min: 20, pts: 2, reb: 6, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.08, zScores: { pts: -0.78, reb: 1.079, ast: 0.334, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -1.09, ftImpact: 0, to: 0.204 } },
          { name: "Dylan Williamson", min: 27, pts: 18, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 7, fga: 10, ftm: 0, fta: 0, composite: 6.98, zScores: { pts: 1.724, reb: -0.023, ast: 0.334, stl: -0.688, blk: -0.446, tpm: 3.23, fgImpact: 1.874, ftImpact: 0, to: 0.971 } },
          { name: "Jahmere Tripp", min: 25, pts: 6, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 9, ftm: 2, fta: 2, composite: -1.43, zScores: { pts: -0.154, reb: 0.344, ast: 0.334, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -1.8, ftImpact: 0.695, to: 0.971 } },
          { name: "Nedas Raupelis", min: 9, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.64, zScores: { pts: -1.093, reb: -0.391, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.76, ftImpact: 0, to: 0.204 } },
          { name: "Javon Perry", min: 17, pts: 5, reb: 3, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: 1.27, zScores: { pts: -0.31, reb: -0.023, ast: -0.778, stl: -0.688, blk: 2.836, tpm: -0.691, fgImpact: 0.481, ftImpact: -0.528, to: 0.971 } },
          { name: "Mouhamed Sow", min: 5, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -2.12, zScores: { pts: -0.78, reb: -0.023, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.38, ftImpact: 0.695, to: 0.971 } },
          { name: "Jalen Harper", min: 15, pts: 9, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: 0.67, zScores: { pts: 0.316, reb: -0.391, ast: -0.222, stl: -0.688, blk: -0.446, tpm: 0.289, fgImpact: 0.912, ftImpact: 0.695, to: 0.204 } },
          { name: "Jaen Chatman", min: 13, pts: 2, reb: 0, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.35, zScores: { pts: -0.78, reb: -1.126, ast: 0.89, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.71, ftImpact: 0, to: 0.204 } },
          { name: "Barrett Loer", min: 15, pts: 4, reb: 2, ast: 1, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 1, fta: 3, composite: -1.77, zScores: { pts: -0.467, reb: -0.391, ast: -0.222, stl: 1.365, blk: -0.446, tpm: 0.289, fgImpact: -1.47, ftImpact: -1.403, to: 0.971 } }
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
          { name: "N'famara Dabo", min: 29, pts: 7, reb: 10, ast: 1, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 3, composite: 1.36, zScores: { pts: 0.003, reb: 2.55, ast: -0.222, stl: 0.338, blk: 1.195, tpm: -0.691, fgImpact: 0.151, ftImpact: -1.403, to: -0.563 } },
          { name: "Timmy Bollin", min: 21, pts: 8, reb: 3, ast: 7, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 5.41, zScores: { pts: 0.159, reb: -0.023, ast: 3.115, stl: 1.365, blk: -0.446, tpm: -0.691, fgImpact: 0.962, ftImpact: 0, to: 0.971 } },
          { name: "Brady Loughlin", min: 27, pts: 13, reb: 6, ast: 2, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 11, ftm: 0, fta: 1, composite: 3.7, zScores: { pts: 0.942, reb: 1.079, ast: 0.334, stl: 0.338, blk: -0.446, tpm: 2.25, fgImpact: -0.128, ftImpact: -0.875, to: 0.204 } },
          { name: "Jerrell Barron Jr.", min: 13, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.63, zScores: { pts: -0.78, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.33, ftImpact: 0, to: 0.204 } },
          { name: "Jeremiah Jenkins", min: 27, pts: 13, reb: 1, ast: 3, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 4.05, zScores: { pts: 0.942, reb: -0.759, ast: 0.89, stl: 0.338, blk: -0.446, tpm: 2.25, fgImpact: 0.632, ftImpact: 0, to: 0.204 } },
          { name: "Charlie O'Sullivan", min: 6, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -0.78, reb: -0.759, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0.431, ftImpact: 0, to: -0.563 } },
          { name: "Wyatt DeGraaf", min: 11, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 2, composite: -4.53, zScores: { pts: -0.467, reb: -0.391, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0.481, ftImpact: -1.751, to: 0.204 } },
          { name: "Rykan Woo", min: 13, pts: 5, reb: 0, ast: 2, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: -3.67, zScores: { pts: -0.31, reb: -1.126, ast: 0.334, stl: 0.338, blk: -0.446, tpm: -0.691, fgImpact: 0.861, ftImpact: -0.528, to: -2.098 } },
          { name: "Kenneth Francis Jr.", min: 15, pts: 8, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 2, composite: -2.31, zScores: { pts: 0.159, reb: -0.391, ast: 0.334, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0.962, ftImpact: -1.751, to: 0.204 } },
          { name: "Isaiah Langham", min: 22, pts: 19, reb: 3, ast: 1, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 9, ftm: 5, fta: 5, composite: 7.08, zScores: { pts: 1.881, reb: -0.023, ast: -0.222, stl: 2.391, blk: -0.446, tpm: -0.691, fgImpact: 2.254, ftImpact: 1.738, to: 0.204 } },
          { name: "Ray Cuevas", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.76, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -1.14, ftImpact: 0, to: 0.204 } },
          { name: "Adrian Uchidiuno", min: 10, pts: 0, reb: 0, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.39, zScores: { pts: -1.093, reb: -1.126, ast: -0.222, stl: 1.365, blk: -0.446, tpm: -0.691, fgImpact: -0.38, ftImpact: 0, to: 0.204 } }
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
          { name: "Jordan Burks", min: 22, pts: 8, reb: 5, ast: 0, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 1, fta: 2, composite: 1.24, zScores: { pts: 0.159, reb: 0.712, ast: -0.778, stl: 1.365, blk: 1.195, tpm: 0.289, fgImpact: -0.609, ftImpact: -0.528, to: -0.563 } },
          { name: "Julius Halaifonua", min: 24, pts: 10, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 2, fta: 3, composite: -0.64, zScores: { pts: 0.472, reb: 0.712, ast: -0.222, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0.202, ftImpact: -0.18, to: 0.204 } },
          { name: "Anthony Felesi", min: 34, pts: 14, reb: 8, ast: 3, stl: 2, blk: 2, to: 1, tpm: 0, fgm: 5, fga: 9, ftm: 4, fta: 4, composite: 9.54, zScores: { pts: 1.098, reb: 1.815, ast: 0.89, stl: 1.365, blk: 2.836, tpm: -0.691, fgImpact: 0.632, ftImpact: 1.39, to: 0.204 } },
          { name: "Jacob Walker", min: 25, pts: 7, reb: 2, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 7, ftm: 4, fta: 4, composite: 0.51, zScores: { pts: 0.003, reb: -0.391, ast: 2.003, stl: -0.688, blk: -0.446, tpm: 0.289, fgImpact: -1.85, ftImpact: 1.39, to: 0.204 } },
          { name: "Kashie Natt", min: 25, pts: 12, reb: 5, ast: 1, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 10, ftm: 6, fta: 7, composite: 3.34, zScores: { pts: 0.785, reb: 0.712, ast: -0.222, stl: 2.391, blk: -0.446, tpm: -0.691, fgImpact: -1.369, ftImpact: 1.21, to: 0.971 } },
          { name: "Latrell Allmond", min: 13, pts: 0, reb: 5, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -0.75, zScores: { pts: -1.093, reb: 0.712, ast: -0.778, stl: -0.688, blk: 1.195, tpm: -0.691, fgImpact: -0.38, ftImpact: 0, to: 0.971 } },
          { name: "Andrija Grbovic", min: 14, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 1, composite: -5.15, zScores: { pts: -1.093, reb: -0.023, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.76, ftImpact: -0.875, to: 0.204 } },
          { name: "Benjamin Ahmed", min: 4, pts: 1, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -5.01, zScores: { pts: -0.936, reb: -0.391, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.76, ftImpact: -0.528, to: 0.204 } },
          { name: "Luka Bogavac", min: 9, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.87, zScores: { pts: -0.623, reb: -0.759, ast: -0.222, stl: -0.688, blk: -0.446, tpm: 0.289, fgImpact: -1.09, ftImpact: 0, to: -1.331 } },
          { name: "Parker Robinson", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.23, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.38, ftImpact: 0, to: 0.971 } },
          { name: "Kanye Clary", min: 28, pts: 14, reb: 0, ast: 0, stl: 1, blk: 0, to: 5, tpm: 3, fgm: 3, fga: 13, ftm: 5, fta: 6, composite: -3.18, zScores: { pts: 1.098, reb: -1.126, ast: -0.778, stl: 0.338, blk: -0.446, tpm: 2.25, fgImpact: -2.51, ftImpact: 0.862, to: -2.866 } }
        ]
      },
      home: {
        abbr: "TAMU", name: "Texas A&M Aggies", score: 88,
        players: [
          { name: "Jalen Shelley", min: 22, pts: 7, reb: 7, ast: 2, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 2, composite: 2.59, zScores: { pts: 0.003, reb: 1.447, ast: 0.334, stl: 0.338, blk: 1.195, tpm: 0.289, fgImpact: 0.531, ftImpact: -1.751, to: 0.204 } },
          { name: "Mackenzie Mgbako", min: 19, pts: 7, reb: 4, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 7, ftm: 2, fta: 3, composite: -1.48, zScores: { pts: 0.003, reb: 0.344, ast: -0.222, stl: 0.338, blk: -0.446, tpm: 0.289, fgImpact: -1.04, ftImpact: -0.18, to: -0.563 } },
          { name: "Zach Clemence", min: 21, pts: 14, reb: 4, ast: 1, stl: 0, blk: 1, to: 3, tpm: 3, fgm: 3, fga: 4, ftm: 5, fta: 7, composite: 3.55, zScores: { pts: 1.098, reb: 0.344, ast: -0.222, stl: -0.688, blk: 1.195, tpm: 2.25, fgImpact: 0.912, ftImpact: -0.013, to: -1.331 } },
          { name: "PJ Haggerty", min: 31, pts: 22, reb: 2, ast: 2, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 7, fga: 14, ftm: 7, fta: 8, composite: 2.29, zScores: { pts: 2.35, reb: -0.391, ast: 0.334, stl: 0.338, blk: -0.446, tpm: 0.289, fgImpact: 0.353, ftImpact: 1.557, to: -2.098 } },
          { name: "Jordan Pope", min: 26, pts: 14, reb: 3, ast: 6, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 8, ftm: 3, fta: 4, composite: 5.58, zScores: { pts: 1.098, reb: -0.023, ast: 2.559, stl: 0.338, blk: -0.446, tpm: 2.25, fgImpact: 0.202, ftImpact: 0.167, to: -0.563 } },
          { name: "Josh Irving", min: 23, pts: 14, reb: 10, ast: 2, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 4, fga: 6, ftm: 5, fta: 6, composite: 7.07, zScores: { pts: 1.098, reb: 2.55, ast: 0.334, stl: 0.338, blk: 1.195, tpm: 0.289, fgImpact: 0.962, ftImpact: 0.862, to: -0.563 } },
          { name: "Jamie Vinson", min: 7, pts: 0, reb: 0, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.57, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: 1.365, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: 0, to: 0.204 } },
          { name: "Chris McDermott", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.85, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: 0, to: 0.971 } },
          { name: "Neiko Mundey", min: 5, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -3.85, zScores: { pts: -0.936, reb: -0.759, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: -0.528, to: 0.971 } },
          { name: "Tyshawn Archie", min: 8, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.22, zScores: { pts: -1.093, reb: -0.759, ast: -0.222, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.76, ftImpact: 0, to: -0.563 } },
          { name: "Jalen Reece", min: 10, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.65, zScores: { pts: -1.093, reb: -1.126, ast: -0.222, stl: 0.338, blk: -0.446, tpm: -0.691, fgImpact: -0.38, ftImpact: 0, to: 0.971 } },
          { name: "Rylan Griffen", min: 27, pts: 9, reb: 5, ast: 1, stl: 0, blk: 2, to: 2, tpm: 2, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: 4.04, zScores: { pts: 0.316, reb: 0.712, ast: -0.222, stl: -0.688, blk: 2.836, tpm: 1.269, fgImpact: 0.912, ftImpact: -0.528, to: -0.563 } }
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
          { name: "Jevon Porter", min: 31, pts: 14, reb: 7, ast: 2, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 5, fga: 9, ftm: 4, fta: 4, composite: 5.8, zScores: { pts: 1.098, reb: 1.447, ast: 0.334, stl: -0.688, blk: 2.836, tpm: -0.691, fgImpact: 0.632, ftImpact: 1.39, to: -0.563 } },
          { name: "Zion Sensley", min: 36, pts: 15, reb: 9, ast: 1, stl: 0, blk: 2, to: 0, tpm: 3, fgm: 6, fga: 16, ftm: 0, fta: 0, composite: 7.37, zScores: { pts: 1.255, reb: 2.182, ast: -0.222, stl: -0.688, blk: 2.836, tpm: 2.25, fgImpact: -1.218, ftImpact: 0, to: 0.971 } },
          { name: "All Wright", min: 24, pts: 2, reb: 0, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.67, zScores: { pts: -0.78, reb: -1.126, ast: 0.334, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.71, ftImpact: 0, to: -0.563 } },
          { name: "Mazi Mosley", min: 28, pts: 7, reb: 2, ast: 4, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: 0.98, zScores: { pts: 0.003, reb: -0.391, ast: 1.446, stl: 1.365, blk: -0.446, tpm: 0.289, fgImpact: -1.42, ftImpact: 0.695, to: -0.563 } },
          { name: "Jasai Miles", min: 33, pts: 14, reb: 3, ast: 7, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 10, ftm: 1, fta: 1, composite: 6.37, zScores: { pts: 1.098, reb: -0.023, ast: 3.115, stl: 0.338, blk: -0.446, tpm: 2.25, fgImpact: 0.252, ftImpact: 0.348, to: -0.563 } },
          { name: "JJ Harris", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.23, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.38, ftImpact: 0, to: 0.971 } },
          { name: "Christian Humphrey-Rembert", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.23, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.38, ftImpact: 0, to: 0.971 } },
          { name: "Andy Sigiscar", min: 24, pts: 12, reb: 7, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 6, ftm: 2, fta: 4, composite: 1.11, zScores: { pts: 0.785, reb: 1.447, ast: -0.222, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 1.773, ftImpact: -1.055, to: 0.204 } },
          { name: "Aaron McBride", min: 22, pts: 8, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: -0.19, zScores: { pts: 0.159, reb: 0.712, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 1.342, ftImpact: 0, to: 0.204 } }
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
          { name: "Grayson Grove", min: 20, pts: 7, reb: 6, ast: 3, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 3, composite: -0.03, zScores: { pts: 0.003, reb: 1.079, ast: 0.89, stl: -0.688, blk: 1.195, tpm: -0.691, fgImpact: 0.912, ftImpact: -1.403, to: -1.331 } },
          { name: "Bobby Durkin", min: 28, pts: 15, reb: 4, ast: 6, stl: 0, blk: 1, to: 4, tpm: 3, fgm: 5, fga: 9, ftm: 2, fta: 2, composite: 6.14, zScores: { pts: 1.255, reb: 0.344, ast: 2.559, stl: -0.688, blk: 1.195, tpm: 2.25, fgImpact: 0.632, ftImpact: 0.695, to: -2.098 } },
          { name: "Jaylen Crocker-Johnson", min: 29, pts: 10, reb: 5, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 8, ftm: 4, fta: 4, composite: 1.53, zScores: { pts: 0.472, reb: 0.712, ast: -0.222, stl: 0.338, blk: -0.446, tpm: 1.269, fgImpact: -1.42, ftImpact: 1.39, to: -0.563 } },
          { name: "Isaac Asuma", min: 35, pts: 23, reb: 5, ast: 6, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 9, fga: 14, ftm: 1, fta: 2, composite: 9.02, zScores: { pts: 2.506, reb: 0.712, ast: 2.559, stl: 0.338, blk: -0.446, tpm: 3.23, fgImpact: 1.975, ftImpact: -0.528, to: -1.331 } },
          { name: "Kyan Evans", min: 31, pts: 10, reb: 4, ast: 6, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 6, ftm: 3, fta: 5, composite: 2.7, zScores: { pts: 0.472, reb: 0.344, ast: 2.559, stl: 1.365, blk: -0.446, tpm: 0.289, fgImpact: 0.151, ftImpact: -0.708, to: -1.331 } },
          { name: "Nolen Anderson", min: 3, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 1, composite: -1.68, zScores: { pts: -0.623, reb: -0.759, ast: -0.222, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0.431, ftImpact: 0.348, to: 0.971 } },
          { name: "Malick Kordel", min: 16, pts: 10, reb: 5, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 6, ftm: 0, fta: 1, composite: 0.24, zScores: { pts: 0.472, reb: 0.712, ast: -0.222, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 1.773, ftImpact: -0.875, to: 0.204 } },
          { name: "Blake Nixon Jr.", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.85, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: 0, to: 0.971 } },
          { name: "Max Lorenson", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.85, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: 0, to: 0.971 } },
          { name: "Nolan Groves", min: 19, pts: 8, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 3.69, zScores: { pts: 0.159, reb: -0.023, ast: 0.89, stl: 0.338, blk: -0.446, tpm: 1.269, fgImpact: 0.531, ftImpact: 0, to: 0.971 } },
          { name: "Cedric Tomes", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.85, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: 0, to: 0.971 } },
          { name: "Malachi Palmer", min: 11, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.51, zScores: { pts: -0.78, reb: -0.759, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0.431, ftImpact: 0, to: 0.204 } },
          { name: "Winters Grady", min: 2, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.05, zScores: { pts: -0.623, reb: -0.759, ast: -0.222, stl: -0.688, blk: -0.446, tpm: 0.289, fgImpact: 0.431, ftImpact: 0, to: 0.971 } }
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
          { name: "Jamie Kaiser Jr.", min: 33, pts: 16, reb: 5, ast: 0, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 12, ftm: 1, fta: 2, composite: 3.47, zScores: { pts: 1.411, reb: 0.712, ast: -0.778, stl: 0.338, blk: -0.446, tpm: 2.25, fgImpact: 0.303, ftImpact: -0.528, to: 0.204 } },
          { name: "Amon Dorries", min: 26, pts: 5, reb: 5, ast: 4, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 4, composite: -2.07, zScores: { pts: -0.31, reb: 0.712, ast: 1.446, stl: 0.338, blk: -0.446, tpm: -0.691, fgImpact: -0.279, ftImpact: -2.278, to: -0.563 } },
          { name: "Aiden Argabright", min: 24, pts: 0, reb: 4, ast: 4, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -2.57, zScores: { pts: -1.093, reb: 0.344, ast: 1.446, stl: 0.338, blk: -0.446, tpm: -0.691, fgImpact: -1.901, ftImpact: 0, to: -0.563 } },
          { name: "Derin Saran", min: 28, pts: 6, reb: 7, ast: 4, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 10, ftm: 0, fta: 0, composite: 2.18, zScores: { pts: -0.154, reb: 1.447, ast: 1.446, stl: 1.365, blk: -0.446, tpm: 1.269, fgImpact: -2.18, ftImpact: 0, to: -0.563 } },
          { name: "Dominick Stewart", min: 33, pts: 25, reb: 5, ast: 2, stl: 2, blk: 0, to: 3, tpm: 2, fgm: 9, fga: 20, ftm: 5, fta: 5, composite: 6.15, zScores: { pts: 2.819, reb: 0.712, ast: 0.334, stl: 1.365, blk: -0.446, tpm: 1.269, fgImpact: -0.306, ftImpact: 1.738, to: -1.331 } },
          { name: "Chad Cook", min: 11, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.44, zScores: { pts: -1.093, reb: -1.126, ast: -0.222, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.38, ftImpact: 0, to: 0.204 } },
          { name: "Andrew Ball", min: 21, pts: 13, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 7, ftm: 2, fta: 4, composite: 0.58, zScores: { pts: 0.942, reb: -0.391, ast: 0.334, stl: -0.688, blk: -0.446, tpm: 0.289, fgImpact: 1.393, ftImpact: -1.055, to: 0.204 } },
          { name: "Sam Simmons Jr.", min: 10, pts: 2, reb: 1, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.45, zScores: { pts: -0.78, reb: -0.759, ast: -0.778, stl: 1.365, blk: -0.446, tpm: -0.691, fgImpact: -0.33, ftImpact: 0, to: 0.971 } },
          { name: "Will Harper III", min: 10, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.75, zScores: { pts: -0.623, reb: -0.759, ast: -0.778, stl: -0.688, blk: -0.446, tpm: 0.289, fgImpact: 0.05, ftImpact: 0, to: 0.204 } },
          { name: "Collin Tanner", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.85, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: 0, to: 0.971 } }
        ]
      },
      home: {
        abbr: "SIU", name: "Southern Illinois Salukis", score: 80,
        players: [
          { name: "Max Pikaar", min: 34, pts: 7, reb: 11, ast: 0, stl: 0, blk: 3, to: 4, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 4.27, zScores: { pts: 0.003, reb: 2.917, ast: -0.778, stl: -0.688, blk: 4.478, tpm: 0.289, fgImpact: 0.151, ftImpact: 0, to: -2.098 } },
          { name: "Jaheem Webber", min: 24, pts: 4, reb: 3, ast: 0, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 2.43, zScores: { pts: -0.467, reb: -0.023, ast: -0.778, stl: 1.365, blk: 1.195, tpm: -0.691, fgImpact: 0.861, ftImpact: 0, to: 0.971 } },
          { name: "Jeremiah Jackson", min: 33, pts: 7, reb: 2, ast: 2, stl: 3, blk: 2, to: 3, tpm: 1, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: 3.41, zScores: { pts: 0.003, reb: -0.391, ast: 0.334, stl: 2.391, blk: 2.836, tpm: 0.289, fgImpact: -1.42, ftImpact: 0.695, to: -1.331 } },
          { name: "Jalen Haynes", min: 33, pts: 23, reb: 6, ast: 3, stl: 1, blk: 0, to: 5, tpm: 2, fgm: 6, fga: 11, ftm: 9, fta: 9, composite: 6.58, zScores: { pts: 2.506, reb: 1.079, ast: 0.89, stl: 0.338, blk: -0.446, tpm: 1.269, fgImpact: 0.683, ftImpact: 3.128, to: -2.866 } },
          { name: "Damien Mayo Jr.", min: 35, pts: 25, reb: 1, ast: 6, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 13, ftm: 15, fta: 15, composite: 7.32, zScores: { pts: 2.819, reb: -0.759, ast: 2.559, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -0.888, ftImpact: 5.213, to: 0.204 } },
          { name: "Luke Susko", min: 22, pts: 11, reb: 9, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 4.76, zScores: { pts: 0.629, reb: 2.182, ast: -0.222, stl: -0.688, blk: -0.446, tpm: 2.25, fgImpact: 0.151, ftImpact: 0.695, to: 0.204 } },
          { name: "Luke Walsh", min: 9, pts: 3, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.09, zScores: { pts: -0.623, reb: -1.126, ast: -0.778, stl: 0.338, blk: -0.446, tpm: 0.289, fgImpact: 0.05, ftImpact: 0, to: 0.204 } },
          { name: "Caden Hawkins", min: 9, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.29, zScores: { pts: -1.093, reb: -1.126, ast: -0.222, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: 0, to: 0.971 } },
          { name: "Brock McClure", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.48, zScores: { pts: -1.093, reb: -0.759, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: 0, to: 0.971 } }
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
          { name: "Youssouf Traore", min: 26, pts: 8, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 0.65, zScores: { pts: 0.159, reb: 0.344, ast: -0.222, stl: 0.338, blk: -0.446, tpm: -0.691, fgImpact: 0.962, ftImpact: 0, to: 0.204 } },
          { name: "Augusto Cassia", min: 13, pts: 0, reb: 4, ast: 0, stl: 1, blk: 2, to: 5, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.29, zScores: { pts: -1.093, reb: 0.344, ast: -0.778, stl: 0.338, blk: 2.836, tpm: -0.691, fgImpact: -0.38, ftImpact: 0, to: -2.866 } },
          { name: "Cam McDaniels", min: 36, pts: 22, reb: 5, ast: 2, stl: 0, blk: 1, to: 4, tpm: 2, fgm: 8, fga: 18, ftm: 4, fta: 4, composite: 4.11, zScores: { pts: 2.35, reb: 0.712, ast: 0.334, stl: -0.688, blk: 1.195, tpm: 1.269, fgImpact: -0.357, ftImpact: 1.39, to: -2.098 } },
          { name: "Leif Moeller", min: 35, pts: 10, reb: 3, ast: 4, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 5.26, zScores: { pts: 0.472, reb: -0.023, ast: 1.446, stl: 1.365, blk: -0.446, tpm: 1.269, fgImpact: 0.202, ftImpact: 0, to: 0.971 } },
          { name: "Reese Miller", min: 30, pts: 3, reb: 3, ast: 2, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 10, ftm: 0, fta: 0, composite: -1.28, zScores: { pts: -0.623, reb: -0.023, ast: 0.334, stl: 0.338, blk: 1.195, tpm: 0.289, fgImpact: -2.991, ftImpact: 0, to: 0.204 } },
          { name: "Reid Cason", min: 14, pts: 3, reb: 4, ast: 0, stl: 3, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 3, fta: 4, composite: 1.83, zScores: { pts: -0.623, reb: 0.344, ast: -0.778, stl: 2.391, blk: 1.195, tpm: -0.691, fgImpact: -0.38, ftImpact: 0.167, to: 0.204 } },
          { name: "Isaiah Ward", min: 13, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.33, zScores: { pts: -1.093, reb: -0.023, ast: -0.222, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: -1.14, ftImpact: 0, to: 0.971 } },
          { name: "Ryan Jackson Jr.", min: 16, pts: 3, reb: 3, ast: 2, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 1, composite: 1.04, zScores: { pts: -0.623, reb: -0.023, ast: 0.334, stl: 1.365, blk: -0.446, tpm: 0.289, fgImpact: 0.05, ftImpact: -0.875, to: 0.971 } },
          { name: "Donovan Criss", min: 5, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -3.19, zScores: { pts: -0.623, reb: -1.126, ast: -0.222, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0.05, ftImpact: 0.348, to: 0.204 } },
          { name: "Jace Whiting", min: 12, pts: 8, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 2, fta: 4, composite: -0.67, zScores: { pts: 0.159, reb: -0.759, ast: -0.222, stl: -0.688, blk: -0.446, tpm: 1.269, fgImpact: 0.101, ftImpact: -1.055, to: 0.971 } }
        ]
      }
    },
      {
      id: "401911471",
      line: "UC Riverside Highlanders 80 @ San José State Spartans 75 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UCR", name: "UC Riverside Highlanders", score: 80,
        players: [

        ]
      },
      home: {
        abbr: "SJSU", name: "San José State Spartans", score: 75,
        players: [
          { name: "KJ Martin Jr.", min: 24, pts: 5, reb: 3, ast: 3, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -2.01, zScores: { pts: -0.31, reb: -0.023, ast: 0.89, stl: 0.338, blk: -0.446, tpm: 0.289, fgImpact: -1.42, ftImpact: 0, to: -1.331 } },
          { name: "Robert Vaihola", min: 31, pts: 10, reb: 7, ast: 0, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 5, fga: 6, ftm: 0, fta: 1, composite: -1.88, zScores: { pts: 0.472, reb: 1.447, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 1.773, ftImpact: -0.875, to: -2.098 } },
          { name: "Joey Chammaa", min: 34, pts: 15, reb: 3, ast: 5, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 8, ftm: 5, fta: 6, composite: 4.13, zScores: { pts: 1.255, reb: -0.023, ast: 2.003, stl: 0.338, blk: -0.446, tpm: 1.269, fgImpact: 0.202, ftImpact: 0.862, to: -1.331 } },
          { name: "JaVaughn Hannah", min: 24, pts: 9, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 3, fta: 5, composite: -0.5, zScores: { pts: 0.316, reb: -0.759, ast: 0.334, stl: 0.338, blk: -0.446, tpm: -0.691, fgImpact: 0.912, ftImpact: -0.708, to: 0.204 } },
          { name: "Mekhi Mason", min: 21, pts: 22, reb: 0, ast: 2, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 7, fga: 8, ftm: 5, fta: 6, composite: 6.63, zScores: { pts: 2.35, reb: -1.126, ast: 0.334, stl: 0.338, blk: -0.446, tpm: 2.25, fgImpact: 2.634, ftImpact: 0.862, to: -0.563 } },
          { name: "Zine Eddine Bedri", min: 9, pts: 10, reb: 4, ast: 1, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 6, ftm: 2, fta: 3, composite: -1.78, zScores: { pts: 0.472, reb: 0.344, ast: -0.222, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0.962, ftImpact: -0.18, to: -1.331 } },
          { name: "Mookie Cook", min: 20, pts: 4, reb: 4, ast: 1, stl: 0, blk: 1, to: 4, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 4, composite: -3.63, zScores: { pts: -0.467, reb: 0.344, ast: -0.222, stl: -0.688, blk: 1.195, tpm: -0.691, fgImpact: 0.05, ftImpact: -1.055, to: -2.098 } },
          { name: "Oliver Kullamae", min: 24, pts: 0, reb: 4, ast: 2, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: 0.66, zScores: { pts: -1.093, reb: 0.344, ast: 0.334, stl: 2.391, blk: -0.446, tpm: -0.691, fgImpact: -0.38, ftImpact: 0, to: 0.204 } },
          { name: "Brayden Barrett", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.85, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: 0, to: 0.971 } },
          { name: "Rokiem Green", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.62, zScores: { pts: -1.093, reb: -1.126, ast: -0.778, stl: -0.688, blk: -0.446, tpm: -0.691, fgImpact: 0, ftImpact: 0, to: 0.204 } }
        ]
      }
    }
    ]
  },
    "2026-11-13": {
    games: [
      {
      id: "401906772",
      line: "Merrimack Warriors 54 @ Florida Gators 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MRMK", name: "Merrimack Warriors", score: 54,
        players: [

        ]
      },
      home: {
        abbr: "Fla", name: "Florida Gators", score: 83,
        players: [
          { name: "Alex Condon", min: 22, pts: 16, reb: 6, ast: 4, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 4, fga: 7, ftm: 8, fta: 8, composite: 6.27, zScores: { pts: 1.313, reb: 1.01, ast: 1.436, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: 0.66, ftImpact: 2.954, to: -1.594 } },
          { name: "Thomas Haugh", min: 24, pts: 15, reb: 6, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 9, ftm: 5, fta: 6, composite: 4.31, zScores: { pts: 1.163, reb: 1.01, ast: 0.338, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 0.736, ftImpact: 0.705, to: 0.89 } },
          { name: "Rueben Chinyelu", min: 24, pts: 12, reb: 6, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 6, ftm: 2, fta: 2, composite: 3.85, zScores: { pts: 0.711, reb: 1.01, ast: 0.338, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 1.807, ftImpact: 0.738, to: 0.062 } },
          { name: "Denzel Aberdeen", min: 20, pts: 3, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -0.79, zScores: { pts: -0.646, reb: 0.308, ast: -0.21, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -0.281, ftImpact: 0, to: 0.062 } },
          { name: "Alex Lloyd", min: 28, pts: 11, reb: 2, ast: 2, stl: 2, blk: 1, to: 2, tpm: 3, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 4.3, zScores: { pts: 0.56, reb: -0.394, ast: 0.338, stl: 1.326, blk: 0.818, tpm: 1.757, fgImpact: 0.66, ftImpact: 0, to: -0.766 } },
          { name: "Arturas Butajevas", min: 7, pts: 2, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -2.13, zScores: { pts: -0.796, reb: -0.746, ast: 0.338, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.714, ftImpact: 0.738, to: 0.89 } },
          { name: "Domen Petrovic", min: 14, pts: 2, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.18, zScores: { pts: -0.796, reb: -0.043, ast: 0.887, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.281, ftImpact: 0, to: 0.89 } },
          { name: "Jones Lay", min: 5, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.2, zScores: { pts: -1.098, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Viktor Mikic", min: 6, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.31, zScores: { pts: -1.098, reb: -0.394, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: -0.766 } },
          { name: "Urban Klavzar", min: 22, pts: 8, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 3, fta: 3, composite: -0.39, zScores: { pts: 0.108, reb: -0.043, ast: 0.338, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -0.919, ftImpact: 1.108, to: 0.062 } },
          { name: "Alex Kovatchev", min: 4, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.9, zScores: { pts: -0.194, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: 0.508, ftImpact: 0, to: 0.89 } },
          { name: "Isaiah Brown", min: 16, pts: 2, reb: 3, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.14, zScores: { pts: -0.796, reb: -0.043, ast: -0.759, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: 0.076, ftImpact: 0, to: 0.89 } },
          { name: "AJ Brown", min: 8, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 1, fta: 1, composite: -1.33, zScores: { pts: -0.194, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 0.508, ftImpact: 0.369, to: 0.89 } }
        ]
      }
    },
      {
      id: "401909565",
      line: "SIU Edwardsville Cougars 47 @ Duke Blue Devils 90 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SIUE", name: "SIU Edwardsville Cougars", score: 47,
        players: [

        ]
      },
      home: {
        abbr: "Duke", name: "Duke Blue Devils", score: 90,
        players: [
          { name: "Dame Sarr", min: 23, pts: 12, reb: 4, ast: 3, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 11, ftm: 1, fta: 2, composite: 4.07, zScores: { pts: 0.711, reb: 0.308, ast: 0.887, stl: 2.349, blk: -0.489, tpm: 0.163, fgImpact: 0.022, ftImpact: -0.772, to: 0.89 } },
          { name: "Joaquim Boumtje Boumtje", min: 22, pts: 11, reb: 9, ast: 0, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 5, fga: 8, ftm: 0, fta: 1, composite: -0.63, zScores: { pts: 0.56, reb: 2.064, ast: -0.759, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: 1.093, ftImpact: -1.141, to: -2.421 } },
          { name: "Patrick Ngongba II", min: 21, pts: 13, reb: 9, ast: 4, stl: 0, blk: 5, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 5, fta: 6, composite: 10.84, zScores: { pts: 0.861, reb: 2.064, ast: 1.436, stl: -0.719, blk: 6.046, tpm: -0.634, fgImpact: 1.017, ftImpact: 0.705, to: 0.062 } },
          { name: "John Blackwell", min: 22, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -3.82, zScores: { pts: -0.646, reb: -1.097, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -1.709, ftImpact: 0, to: 0.89 } },
          { name: "Cayden Boozer", min: 22, pts: 11, reb: 10, ast: 4, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 7, ftm: 4, fta: 4, composite: 4.14, zScores: { pts: 0.56, reb: 2.415, ast: 1.436, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -0.13, ftImpact: 1.477, to: -1.594 } },
          { name: "Cameron Williams", min: 14, pts: 9, reb: 2, ast: 0, stl: 0, blk: 3, to: 0, tpm: 2, fgm: 3, fga: 7, ftm: 1, fta: 2, composite: 2.77, zScores: { pts: 0.259, reb: -0.394, ast: -0.759, stl: -0.719, blk: 3.432, tpm: 0.96, fgImpact: -0.13, ftImpact: -0.772, to: 0.89 } },
          { name: "Drew Scharnowski", min: 11, pts: 2, reb: 1, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.03, zScores: { pts: -0.796, reb: -0.746, ast: 0.338, stl: 1.326, blk: -0.489, tpm: -0.634, fgImpact: 0.076, ftImpact: 0, to: 0.89 } },
          { name: "Sebastian Wilkins", min: 15, pts: 11, reb: 6, ast: 2, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 9, fta: 10, composite: 5.21, zScores: { pts: 0.56, reb: 1.01, ast: 0.338, stl: 2.349, blk: -0.489, tpm: -0.634, fgImpact: -0.995, ftImpact: 2.182, to: 0.89 } },
          { name: "Maxime Meyer", min: 5, pts: 4, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -0.83, zScores: { pts: -0.495, reb: -0.043, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.865, ftImpact: 0, to: 0.89 } },
          { name: "Bryson Howard", min: 7, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.39, zScores: { pts: -1.098, reb: -0.043, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.714, ftImpact: 0, to: 0.062 } },
          { name: "Jacob Theodosiou", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.53, zScores: { pts: -0.796, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.076, ftImpact: 0, to: 0.89 } },
          { name: "Deron Rippey Jr.", min: 18, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 2, composite: -4.97, zScores: { pts: -1.098, reb: -1.097, ast: -0.21, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: -2.283, to: 0.89 } },
          { name: "Caleb Foster", min: 18, pts: 12, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 6, ftm: 1, fta: 2, composite: 2.14, zScores: { pts: 0.711, reb: -0.043, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 1.757, fgImpact: 1.017, ftImpact: -0.772, to: 0.89 } }
        ]
      }
    },
      {
      id: "401913528",
      line: "Sam Houston Bearkats 86 @ Illinois Fighting Illini 108 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SHSU", name: "Sam Houston Bearkats", score: 86,
        players: [

        ]
      },
      home: {
        abbr: "Ill", name: "Illinois Fighting Illini", score: 108,
        players: [
          { name: "Tomislav Ivisic", min: 22, pts: 28, reb: 5, ast: 1, stl: 0, blk: 2, to: 1, tpm: 6, fgm: 10, fga: 21, ftm: 2, fta: 2, composite: 10.33, zScores: { pts: 3.122, reb: 0.659, ast: -0.21, stl: -0.719, blk: 2.125, tpm: 4.147, fgImpact: 0.401, ftImpact: 0.738, to: 0.062 } },
          { name: "Ethan Brown", min: 28, pts: 11, reb: 5, ast: 7, stl: 3, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 9.83, zScores: { pts: 0.56, reb: 0.659, ast: 3.083, stl: 2.349, blk: -0.489, tpm: 1.757, fgImpact: 1.017, ftImpact: 0, to: 0.89 } },
          { name: "Lincoln Williams", min: 18, pts: 5, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -0.14, zScores: { pts: -0.344, reb: 0.308, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 0.076, ftImpact: 0.738, to: 0.89 } },
          { name: "Quentin Coleman", min: 28, pts: 11, reb: 8, ast: 6, stl: 4, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 7, ftm: 2, fta: 4, composite: 5.37, zScores: { pts: 0.56, reb: 1.713, ast: 2.534, stl: 3.371, blk: -0.489, tpm: 0.163, fgImpact: 0.66, ftImpact: -1.545, to: -1.594 } },
          { name: "Andrej Stojakovic", min: 33, pts: 26, reb: 5, ast: 5, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 10, fga: 16, ftm: 6, fta: 9, composite: 5.49, zScores: { pts: 2.82, reb: 0.659, ast: 1.985, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 2.185, ftImpact: -1.209, to: 0.89 } },
          { name: "Zavier Zens", min: 21, pts: 6, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0, zScores: { pts: -0.194, reb: -0.394, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: 0.151, ftImpact: 0, to: 0.89 } },
          { name: "Zvonimir Ivisic", min: 15, pts: 5, reb: 5, ast: 0, stl: 2, blk: 3, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 1, composite: 3.19, zScores: { pts: -0.344, reb: 0.659, ast: -0.759, stl: 1.326, blk: 3.432, tpm: 0.163, fgImpact: -0.205, ftImpact: -1.141, to: 0.062 } },
          { name: "Jason Jakstys", min: 5, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.92, zScores: { pts: -1.098, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.714, ftImpact: 0, to: 0.89 } },
          { name: "Stefan Vaaks", min: 24, pts: 14, reb: 3, ast: 3, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 6, fga: 11, ftm: 1, fta: 1, composite: 4.19, zScores: { pts: 1.012, reb: -0.043, ast: 0.887, stl: -0.719, blk: 0.818, tpm: 0.163, fgImpact: 0.811, ftImpact: 0.369, to: 0.89 } },
          { name: "Blake Fagbemi", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Quentin McCoy", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Lucas Morillo", min: 3, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.82, zScores: { pts: -0.796, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.433, ftImpact: 0, to: 0.89 } }
        ]
      }
    },
      {
      id: "401916316",
      line: "Ohio State Buckeyes 68 @ UConn Huskies 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OhSt", name: "Ohio State Buckeyes", score: 68,
        players: [
          { name: "Andrija Jelavic", min: 27, pts: 8, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 6, fta: 8, composite: -2.32, zScores: { pts: 0.108, reb: -0.043, ast: -0.21, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -1.352, ftImpact: -0.068, to: 0.062 } },
          { name: "Anthony Thompson", min: 17, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -5.27, zScores: { pts: -0.646, reb: -0.394, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.638, ftImpact: -0.772, to: -0.766 } },
          { name: "Amare Bynum", min: 36, pts: 11, reb: 5, ast: 0, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 2.02, zScores: { pts: 0.56, reb: 0.659, ast: -0.759, stl: 0.304, blk: 0.818, tpm: 0.163, fgImpact: 0.303, ftImpact: 0.738, to: -0.766 } },
          { name: "Justin Pippen", min: 30, pts: 7, reb: 1, ast: 1, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -3.77, zScores: { pts: -0.043, reb: -0.746, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -0.13, ftImpact: 0, to: -1.594 } },
          { name: "John Mobley Jr.", min: 32, pts: 16, reb: 1, ast: 4, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 6, fga: 12, ftm: 3, fta: 3, composite: 1.95, zScores: { pts: 1.313, reb: -0.746, ast: 1.436, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: 0.454, ftImpact: 1.108, to: -1.594 } },
          { name: "Josh Ojianwuna", min: 7, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -2.67, zScores: { pts: -0.796, reb: -1.097, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0.738, to: 0.062 } },
          { name: "Ivan Njegovan", min: 10, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.38, zScores: { pts: -0.495, reb: -0.043, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.865, ftImpact: 0, to: 0.89 } },
          { name: "Jimmie Williams", min: 24, pts: 17, reb: 3, ast: 0, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 7, fga: 9, ftm: 2, fta: 2, composite: 1.27, zScores: { pts: 1.464, reb: -0.043, ast: -0.759, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: 2.315, ftImpact: 0.738, to: -2.421 } },
          { name: "LJ Smith", min: 9, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.24, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Curtis Givens III", min: 8, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.88, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } }
        ]
      },
      home: {
        abbr: "UConn", name: "UConn Huskies", score: 84,
        players: [
          { name: "Colben Landrew", min: 32, pts: 12, reb: 4, ast: 0, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 7, ftm: 1, fta: 1, composite: 0.46, zScores: { pts: 0.711, reb: 0.308, ast: -0.759, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: 1.45, ftImpact: 0.369, to: -1.594 } },
          { name: "Jayden Ross", min: 37, pts: 8, reb: 1, ast: 0, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: 1.69, zScores: { pts: 0.108, reb: -0.746, ast: -0.759, stl: 2.349, blk: -0.489, tpm: 0.163, fgImpact: 0.941, ftImpact: -0.772, to: 0.89 } },
          { name: "Na'jai Hines", min: 20, pts: 20, reb: 3, ast: 1, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 7, fga: 8, ftm: 6, fta: 7, composite: 6.44, zScores: { pts: 1.916, reb: -0.043, ast: -0.21, stl: 0.304, blk: 2.125, tpm: -0.634, fgImpact: 2.672, ftImpact: 1.074, to: -0.766 } },
          { name: "Braylon Mullins", min: 32, pts: 22, reb: 0, ast: 3, stl: 0, blk: 0, to: 3, tpm: 5, fgm: 7, fga: 13, ftm: 3, fta: 5, composite: 2.27, zScores: { pts: 2.217, reb: -1.097, ast: 0.887, stl: -0.719, blk: -0.489, tpm: 3.35, fgImpact: 0.887, ftImpact: -1.175, to: -1.594 } },
          { name: "Silas Demary Jr.", min: 24, pts: 10, reb: 2, ast: 9, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 8, ftm: 2, fta: 3, composite: 5.19, zScores: { pts: 0.409, reb: -0.394, ast: 4.18, stl: 1.326, blk: -0.489, tpm: -0.634, fgImpact: 0.303, ftImpact: -0.403, to: 0.89 } },
          { name: "Egor Amosov", min: 5, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.87, zScores: { pts: -0.646, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 0.433, ftImpact: 0, to: 0.89 } },
          { name: "Jacob Ross", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Isaiah Shaw", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Oskar Giltay", min: 19, pts: 4, reb: 6, ast: 1, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 5, composite: -5.74, zScores: { pts: -0.495, reb: 1.01, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.076, ftImpact: -2.686, to: -1.594 } },
          { name: "Junior County", min: 23, pts: 5, reb: 3, ast: 3, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.53, zScores: { pts: -0.344, reb: -0.043, ast: 0.887, stl: 1.326, blk: -0.489, tpm: 0.163, fgImpact: -0.205, ftImpact: 0, to: -0.766 } },
          { name: "Nils Machowski", min: 5, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.36, zScores: { pts: -1.098, reb: -0.746, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Jaye Nash", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } }
        ]
      }
    },
      {
      id: "401925755",
      line: "Northern Iowa Panthers 72 @ Michigan State Spartans 106 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NrthIA", name: "Northern Iowa Panthers", score: 72,
        players: [
          { name: "Isaiah Johnson-Arigu", min: 21, pts: 7, reb: 5, ast: 2, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 3, fta: 4, composite: 0.55, zScores: { pts: -0.043, reb: 0.659, ast: 0.338, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: -0.919, ftImpact: -0.034, to: 0.062 } },
          { name: "Ian Smikle", min: 8, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 5, composite: -8.11, zScores: { pts: -0.796, reb: -1.097, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: -2.686, to: -1.594 } },
          { name: "Carson Vis", min: 27, pts: 7, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 11, ftm: 1, fta: 1, composite: -4.09, zScores: { pts: -0.043, reb: -0.043, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.558, ftImpact: 0.369, to: -0.766 } },
          { name: "Greyson Uelmen", min: 20, pts: 16, reb: 5, ast: 2, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 6, fga: 9, ftm: 3, fta: 3, composite: 3.33, zScores: { pts: 1.313, reb: 0.659, ast: 0.338, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: 1.525, ftImpact: 1.108, to: -1.594 } },
          { name: "Tate McCubbin", min: 24, pts: 11, reb: 2, ast: 0, stl: 2, blk: 1, to: 1, tpm: 3, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 4.69, zScores: { pts: 0.56, reb: -0.394, ast: -0.759, stl: 1.326, blk: 0.818, tpm: 1.757, fgImpact: 0.584, ftImpact: 0.738, to: 0.062 } },
          { name: "Will Gerdes", min: 10, pts: 1, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 4, ftm: 1, fta: 2, composite: -7.06, zScores: { pts: -0.947, reb: -1.097, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.428, ftImpact: -0.772, to: -0.766 } },
          { name: "Jules Isebaert", min: 5, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 3, composite: -5.96, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: -3.424, to: 0.89 } },
          { name: "Kyle Pock", min: 11, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Jalen Wilson", min: 21, pts: 11, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 7, ftm: 1, fta: 2, composite: -1.24, zScores: { pts: 0.56, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: 0.66, ftImpact: -0.772, to: 0.062 } },
          { name: "Jaydon Kimbrough", min: 4, pts: 5, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.3, zScores: { pts: -0.344, reb: -1.097, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 0.508, ftImpact: 0, to: 0.89 } },
          { name: "Levi Valdo", min: 21, pts: 11, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 7, ftm: 1, fta: 2, composite: 0.07, zScores: { pts: 0.56, reb: -0.746, ast: 0.338, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 1.45, ftImpact: -0.772, to: 0.062 } },
          { name: "Geon Hutchins", min: 17, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.9, zScores: { pts: -1.098, reb: -0.746, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.071, ftImpact: 0, to: 0.062 } },
          { name: "Cade Courbat", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Redek Born", min: 8, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.18, zScores: { pts: -0.947, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: -0.772, to: 0.89 } }
        ]
      },
      home: {
        abbr: "MSU", name: "Michigan State Spartans", score: 106,
        players: [
          { name: "Jordan Scott", min: 17, pts: 11, reb: 5, ast: 2, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 4.63, zScores: { pts: 0.56, reb: 0.659, ast: 0.338, stl: 0.304, blk: -0.489, tpm: 1.757, fgImpact: -0.13, ftImpact: 0.738, to: 0.89 } },
          { name: "Coen Carr", min: 22, pts: 11, reb: 5, ast: 2, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 7, fta: 8, composite: 4.18, zScores: { pts: 0.56, reb: 0.659, ast: 0.338, stl: 0.304, blk: 2.125, tpm: -0.634, fgImpact: 0.151, ftImpact: 1.443, to: -0.766 } },
          { name: "Anton Bonke", min: 7, pts: 0, reb: 0, ast: 0, stl: 0, blk: 2, to: 3, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.77, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: 2.125, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: -1.594 } },
          { name: "Jasiah Jervis", min: 23, pts: 20, reb: 5, ast: 3, stl: 1, blk: 1, to: 2, tpm: 5, fgm: 7, fga: 9, ftm: 1, fta: 2, composite: 8.71, zScores: { pts: 1.916, reb: 0.659, ast: 0.887, stl: 0.304, blk: 0.818, tpm: 3.35, fgImpact: 2.315, ftImpact: -0.772, to: -0.766 } },
          { name: "Jeremy Fears Jr.", min: 28, pts: 24, reb: 0, ast: 9, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 7, ftm: 8, fta: 9, composite: 12.91, zScores: { pts: 2.519, reb: -1.097, ast: 4.18, stl: 0.304, blk: -0.489, tpm: 2.554, fgImpact: 2.239, ftImpact: 1.812, to: 0.89 } },
          { name: "Colin Walton", min: 1, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -2.51, zScores: { pts: -0.796, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0.738, to: 0.89 } },
          { name: "Brennan Walton", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Jesse McCulloch", min: 16, pts: 7, reb: 5, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: 2.71, zScores: { pts: -0.043, reb: 0.659, ast: 0.338, stl: 0.304, blk: -0.489, tpm: 0.96, fgImpact: 0.865, ftImpact: -0.772, to: 0.89 } },
          { name: "Julius Avent", min: 4, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.23, zScores: { pts: -0.646, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 0.076, ftImpact: 0, to: 0.89 } },
          { name: "Cam Ward", min: 20, pts: 3, reb: 7, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 6, composite: -4.47, zScores: { pts: -0.646, reb: 1.362, ast: -0.759, stl: -0.719, blk: 2.125, tpm: -0.634, fgImpact: 0.076, ftImpact: -5.338, to: 0.062 } },
          { name: "Kaleb Glenn", min: 18, pts: 7, reb: 5, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 5, fta: 6, composite: -1.19, zScores: { pts: -0.043, reb: 0.659, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.995, ftImpact: 0.705, to: 0.062 } },
          { name: "Ethan Taylor", min: 9, pts: 4, reb: 4, ast: 0, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 4, fta: 4, composite: -0.18, zScores: { pts: -0.495, reb: 0.308, ast: -0.759, stl: -0.719, blk: 2.125, tpm: -0.634, fgImpact: -0.714, ftImpact: 1.477, to: -0.766 } },
          { name: "Matthew Watkins", min: 1, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -1.098, reb: -1.097, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Carlos Medlock Jr.", min: 14, pts: 6, reb: 0, ast: 4, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 8, ftm: 1, fta: 2, composite: -2.06, zScores: { pts: -0.194, reb: -1.097, ast: 1.436, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -1.276, ftImpact: -0.772, to: 0.89 } },
          { name: "Kur Teng", min: 17, pts: 8, reb: 3, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -0.98, zScores: { pts: 0.108, reb: -0.043, ast: -0.21, stl: 0.304, blk: -0.489, tpm: 0.96, fgImpact: -0.844, ftImpact: 0, to: -0.766 } }
        ]
      }
    },
      {
      id: "401916297",
      line: "Virginia Cavaliers 87 @ Maryland Terrapins 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UVA", name: "Virginia Cavaliers", score: 87,
        players: [
          { name: "Nolan Adekunle", min: 19, pts: 0, reb: 2, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -0.89, zScores: { pts: -1.098, reb: -0.394, ast: 0.887, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Thijs De Ridder", min: 32, pts: 20, reb: 7, ast: 0, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 8, fga: 13, ftm: 2, fta: 3, composite: 4.82, zScores: { pts: 1.916, reb: 1.362, ast: -0.759, stl: 1.326, blk: -0.489, tpm: 0.96, fgImpact: 1.677, ftImpact: -0.403, to: -0.766 } },
          { name: "Johann Grunloh", min: 37, pts: 15, reb: 7, ast: 1, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 4, fga: 9, ftm: 7, fta: 11, composite: 1.59, zScores: { pts: 1.163, reb: 1.362, ast: -0.21, stl: -0.719, blk: 3.432, tpm: -0.634, fgImpact: -0.054, ftImpact: -1.981, to: -0.766 } },
          { name: "Sam Lewis", min: 34, pts: 28, reb: 7, ast: 1, stl: 1, blk: 1, to: 7, tpm: 0, fgm: 12, fga: 16, ftm: 4, fta: 4, composite: 5.1, zScores: { pts: 3.122, reb: 1.362, ast: -0.21, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: 3.765, ftImpact: 1.477, to: -4.905 } },
          { name: "Chance Mallory", min: 35, pts: 12, reb: 5, ast: 4, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 6, ftm: 2, fta: 4, composite: 1.46, zScores: { pts: 0.711, reb: 0.659, ast: 1.436, stl: 0.304, blk: -0.489, tpm: 0.96, fgImpact: 1.017, ftImpact: -1.545, to: -1.594 } },
          { name: "Kalu Anya", min: 9, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 1, composite: -2.68, zScores: { pts: -0.495, reb: -0.394, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.508, ftImpact: -1.141, to: 0.89 } },
          { name: "Martin Carrere", min: 11, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.95, zScores: { pts: -0.796, reb: -0.043, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.433, ftImpact: 0, to: 0.062 } },
          { name: "Jan Vide", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.73, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.062 } },
          { name: "Elijah Gertrude", min: 19, pts: 6, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 4, composite: -4.67, zScores: { pts: -0.194, reb: -1.097, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.151, ftImpact: -1.545, to: 0.062 } },
          { name: "Jurian Dixon", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } }
        ]
      },
      home: {
        abbr: "MD", name: "Maryland Terrapins", score: 83,
        players: [
          { name: "Robert Jennings II", min: 16, pts: 4, reb: 0, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -3.12, zScores: { pts: -0.495, reb: -1.097, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0.076, ftImpact: 0.738, to: -0.766 } },
          { name: "Pharrel Payne", min: 35, pts: 20, reb: 3, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 6, fga: 10, ftm: 8, fta: 10, composite: 2.75, zScores: { pts: 1.916, reb: -0.043, ast: 0.338, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 1.168, ftImpact: 0.671, to: -0.766 } },
          { name: "Andre Mills", min: 22, pts: 6, reb: 1, ast: 2, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 13, ftm: 2, fta: 2, composite: -1.63, zScores: { pts: -0.194, reb: -0.746, ast: 0.338, stl: 2.349, blk: -0.489, tpm: -0.634, fgImpact: -3.061, ftImpact: 0.738, to: 0.062 } },
          { name: "Bishop Boswell", min: 24, pts: 2, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 1, composite: -3.78, zScores: { pts: -0.796, reb: 0.308, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.638, ftImpact: -1.141, to: 0.062 } },
          { name: "DJ Wagner", min: 28, pts: 9, reb: 3, ast: 5, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 2, composite: 1.64, zScores: { pts: 0.259, reb: -0.043, ast: 1.985, stl: 1.326, blk: -0.489, tpm: 0.163, fgImpact: 0.66, ftImpact: -2.283, to: 0.062 } },
          { name: "Tomislav Buljan", min: 22, pts: 8, reb: 6, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 4, fta: 6, composite: 0.49, zScores: { pts: 0.108, reb: 1.01, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0.865, ftImpact: -0.806, to: 0.89 } },
          { name: "Adama Tambedou", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Baba Oladotun", min: 6, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4, zScores: { pts: -0.796, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.076, ftImpact: 0, to: 0.062 } },
          { name: "Mike McNair Jr.", min: 18, pts: 15, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 6, ftm: 6, fta: 6, composite: 5.26, zScores: { pts: 1.163, reb: -0.043, ast: -0.759, stl: 0.304, blk: -0.489, tpm: 1.757, fgImpact: 0.227, ftImpact: 2.215, to: 0.89 } },
          { name: "Kaden House", min: 28, pts: 17, reb: 3, ast: 3, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 11, ftm: 9, fta: 10, composite: 2.14, zScores: { pts: 1.464, reb: -0.043, ast: 0.887, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.768, ftImpact: 2.182, to: -0.766 } }
        ]
      }
    },
      {
      id: "401906850",
      line: "Tennessee State Tigers 78 @ Tennessee Volunteers 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TNST", name: "Tennessee State Tigers", score: 78,
        players: [

        ]
      },
      home: {
        abbr: "Tenn", name: "Tennessee Volunteers", score: 83,
        players: [
          { name: "DeWayne Brown II", min: 8, pts: 0, reb: 1, ast: 0, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -0.75, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: 0.304, blk: 2.125, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.062 } },
          { name: "Miles Rubin", min: 18, pts: 5, reb: 6, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 4, composite: -1.38, zScores: { pts: -0.344, reb: 1.01, ast: -0.21, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 0.865, ftImpact: -3.055, to: 0.89 } },
          { name: "Juke Harris", min: 25, pts: 8, reb: 10, ast: 2, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 9, ftm: 3, fta: 7, composite: -3.85, zScores: { pts: 0.108, reb: 2.415, ast: 0.338, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -1.633, ftImpact: -3.458, to: -1.594 } },
          { name: "Terrence Hill Jr.", min: 29, pts: 19, reb: 5, ast: 5, stl: 1, blk: 0, to: 4, tpm: 4, fgm: 5, fga: 11, ftm: 5, fta: 7, composite: 3.94, zScores: { pts: 1.765, reb: 0.659, ast: 1.985, stl: 0.304, blk: -0.489, tpm: 2.554, fgImpact: 0.022, ftImpact: -0.437, to: -2.421 } },
          { name: "Tyler Lundblade", min: 28, pts: 14, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 9, ftm: 9, fta: 9, composite: 1.94, zScores: { pts: 1.012, reb: -0.394, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -1.633, ftImpact: 3.323, to: 0.89 } },
          { name: "Braedan Lue", min: 31, pts: 6, reb: 7, ast: 4, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 1, composite: 4.33, zScores: { pts: -0.194, reb: 1.362, ast: 1.436, stl: 1.326, blk: 0.818, tpm: -0.634, fgImpact: 1.298, ftImpact: -1.141, to: 0.062 } },
          { name: "Christian Fermin", min: 6, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.2, zScores: { pts: -1.098, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Jalen Haralson", min: 22, pts: 15, reb: 3, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 8, ftm: 7, fta: 10, composite: -0.59, zScores: { pts: 1.163, reb: -0.043, ast: 1.436, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.303, ftImpact: -0.84, to: -0.766 } },
          { name: "Troy Henderson", min: 12, pts: 5, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -0.33, zScores: { pts: -0.344, reb: -1.097, ast: -0.21, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -0.281, ftImpact: 0.738, to: 0.89 } },
          { name: "Dai Dai Ames", min: 21, pts: 11, reb: 2, ast: 1, stl: 1, blk: 0, to: 4, tpm: 3, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: -0.59, zScores: { pts: 0.56, reb: -0.394, ast: -0.21, stl: 0.304, blk: -0.489, tpm: 1.757, fgImpact: 0.303, ftImpact: 0, to: -2.421 } }
        ]
      }
    },
      {
      id: "401909741",
      line: "Arizona Wildcats 80 @ Auburn Tigers 69 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Ariz", name: "Arizona Wildcats", score: 80,
        players: [
          { name: "Ivan Kharchenkov", min: 38, pts: 19, reb: 8, ast: 2, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 9, fga: 19, ftm: 0, fta: 2, composite: -0.58, zScores: { pts: 1.765, reb: 1.713, ast: 0.338, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: 0.325, ftImpact: -2.283, to: -2.421 } },
          { name: "Motiejus Krivas", min: 29, pts: 16, reb: 12, ast: 4, stl: 1, blk: 3, to: 3, tpm: 0, fgm: 5, fga: 11, ftm: 6, fta: 7, composite: 8.47, zScores: { pts: 1.313, reb: 3.118, ast: 1.436, stl: 0.304, blk: 3.432, tpm: -0.634, fgImpact: 0.022, ftImpact: 1.074, to: -1.594 } },
          { name: "Derek Dixon", min: 37, pts: 11, reb: 5, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 12, ftm: 2, fta: 2, composite: -0.64, zScores: { pts: 0.56, reb: 0.659, ast: 0.338, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -1.125, ftImpact: 0.738, to: -0.766 } },
          { name: "Caleb Holt", min: 37, pts: 24, reb: 9, ast: 0, stl: 5, blk: 0, to: 2, tpm: 4, fgm: 8, fga: 19, ftm: 4, fta: 5, composite: 9.39, zScores: { pts: 2.519, reb: 2.064, ast: -0.759, stl: 4.394, blk: -0.489, tpm: 2.554, fgImpact: -0.465, ftImpact: 0.335, to: -0.766 } },
          { name: "JJ Mandaquit", min: 31, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 6, fta: 6, composite: -0.91, zScores: { pts: -0.194, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 2.215, to: 0.062 } },
          { name: "Maksim Brnovic", min: 6, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.47, zScores: { pts: -0.796, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.433, ftImpact: 0, to: 0.89 } },
          { name: "Evan Otten", min: 8, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.82, zScores: { pts: -0.796, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.433, ftImpact: 0, to: 0.89 } },
          { name: "Cameron Holmes", min: 14, pts: 0, reb: 1, ast: 0, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.16, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: 1.326, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: -0.766 } }
        ]
      },
      home: {
        abbr: "Aub", name: "Auburn Tigers", score: 69,
        players: [
          { name: "Thomas Dowd", min: 27, pts: 15, reb: 9, ast: 2, stl: 1, blk: 2, to: 2, tpm: 4, fgm: 5, fga: 8, ftm: 1, fta: 2, composite: 8.1, zScores: { pts: 1.163, reb: 2.064, ast: 0.338, stl: 0.304, blk: 2.125, tpm: 2.554, fgImpact: 1.093, ftImpact: -0.772, to: -0.766 } },
          { name: "Narcisse Ngoy", min: 19, pts: 1, reb: 8, ast: 0, stl: 0, blk: 6, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 1, fta: 4, composite: 1.11, zScores: { pts: -0.947, reb: 1.713, ast: -0.759, stl: -0.719, blk: 7.353, tpm: -0.634, fgImpact: -1.071, ftImpact: -3.055, to: -0.766 } },
          { name: "Caleb Williams", min: 19, pts: 5, reb: 2, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 9, ftm: 0, fta: 0, composite: -2.81, zScores: { pts: -0.344, reb: -0.394, ast: -0.759, stl: -0.719, blk: 0.818, tpm: 0.163, fgImpact: -1.633, ftImpact: 0, to: 0.062 } },
          { name: "Kevin Overton", min: 24, pts: 5, reb: 1, ast: 0, stl: 5, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 13, ftm: 0, fta: 0, composite: -0.3, zScores: { pts: -0.344, reb: -0.746, ast: -0.759, stl: 4.394, blk: 0.818, tpm: 0.163, fgImpact: -3.061, ftImpact: 0, to: -0.766 } },
          { name: "Tahaad Pettiford", min: 24, pts: 9, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 14, ftm: 0, fta: 0, composite: -0.7, zScores: { pts: 0.259, reb: -0.043, ast: 0.887, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -1.839, ftImpact: 0, to: 0.062 } },
          { name: "Adam Olsen", min: 26, pts: 12, reb: 1, ast: 1, stl: 2, blk: 2, to: 1, tpm: 3, fgm: 3, fga: 10, ftm: 3, fta: 3, composite: 4.93, zScores: { pts: 0.711, reb: -0.746, ast: -0.21, stl: 1.326, blk: 2.125, tpm: 1.757, fgImpact: -1.201, ftImpact: 1.108, to: 0.062 } },
          { name: "Owen Freeman", min: 14, pts: 8, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 4, fta: 7, composite: -1.16, zScores: { pts: 0.108, reb: -0.043, ast: -0.21, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0.865, ftImpact: -1.948, to: 0.89 } },
          { name: "Bukky Oboye", min: 14, pts: 5, reb: 4, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: 0.68, zScores: { pts: -0.344, reb: 0.308, ast: -0.759, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: 0.865, ftImpact: -0.772, to: 0.89 } },
          { name: "George Kimble III", min: 16, pts: 7, reb: 0, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 0.01, zScores: { pts: -0.043, reb: -1.097, ast: 0.887, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 0.508, ftImpact: 0.738, to: 0.062 } },
          { name: "Kolby King", min: 17, pts: 2, reb: 1, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.51, zScores: { pts: -0.796, reb: -0.746, ast: 0.887, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0.076, ftImpact: 0, to: 0.89 } }
        ]
      }
    },
      {
      id: "401921721",
      line: "North Alabama Lions 52 @ Miami Hurricanes 94 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UNA", name: "North Alabama Lions", score: 52,
        players: [

        ]
      },
      home: {
        abbr: "Mia-FL", name: "Miami Hurricanes", score: 94,
        players: [
          { name: "Caleb Gaskins", min: 20, pts: 9, reb: 6, ast: 1, stl: 0, blk: 1, to: 2, tpm: 3, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 1.31, zScores: { pts: 0.259, reb: 1.01, ast: -0.21, stl: -0.719, blk: 0.818, tpm: 1.757, fgImpact: -0.844, ftImpact: 0, to: -0.766 } },
          { name: "Malik Reneau", min: 8, pts: 0, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -0.54, zScores: { pts: -1.098, reb: -0.043, ast: 0.887, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Shelton Henderson", min: 25, pts: 14, reb: 12, ast: 2, stl: 1, blk: 1, to: 4, tpm: 1, fgm: 5, fga: 10, ftm: 3, fta: 3, composite: 4.82, zScores: { pts: 1.012, reb: 3.118, ast: 0.338, stl: 0.304, blk: 0.818, tpm: 0.163, fgImpact: 0.379, ftImpact: 1.108, to: -2.421 } },
          { name: "Somto Cyril", min: 23, pts: 4, reb: 5, ast: 0, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 1, composite: -0.2, zScores: { pts: -0.495, reb: 0.659, ast: -0.759, stl: 0.304, blk: 2.125, tpm: -0.634, fgImpact: 0.508, ftImpact: -1.141, to: -0.766 } },
          { name: "Acaden Lewis", min: 28, pts: 8, reb: 4, ast: 7, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 10, ftm: 1, fta: 1, composite: 3.73, zScores: { pts: 0.108, reb: 0.308, ast: 3.083, stl: 1.326, blk: -0.489, tpm: 0.163, fgImpact: -1.201, ftImpact: 0.369, to: 0.062 } },
          { name: "DeSean Goode", min: 7, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.17, zScores: { pts: -0.796, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.433, ftImpact: 0, to: 0.89 } },
          { name: "Robert Miller III", min: 15, pts: 4, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.06, zScores: { pts: -0.495, reb: -0.746, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0.865, ftImpact: 0, to: 0.89 } },
          { name: "Egor Ryzhov", min: 4, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.48, zScores: { pts: -0.796, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.433, ftImpact: 0, to: -0.766 } },
          { name: "Nick Dorn", min: 20, pts: 18, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 6, fgm: 6, fga: 12, ftm: 0, fta: 0, composite: 6.51, zScores: { pts: 1.615, reb: -0.746, ast: 0.338, stl: 0.304, blk: -0.489, tpm: 4.147, fgImpact: 0.454, ftImpact: 0, to: 0.89 } },
          { name: "Dante Allen", min: 30, pts: 7, reb: 6, ast: 12, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: 6.65, zScores: { pts: -0.043, reb: 1.01, ast: 5.827, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -0.919, ftImpact: 0.738, to: 0.062 } },
          { name: "Brent Bland", min: 20, pts: 26, reb: 5, ast: 0, stl: 2, blk: 0, to: 1, tpm: 8, fgm: 9, fga: 14, ftm: 0, fta: 0, composite: 11.47, zScores: { pts: 2.82, reb: 0.659, ast: -0.759, stl: 1.326, blk: -0.489, tpm: 5.741, fgImpact: 2.11, ftImpact: 0, to: 0.062 } }
        ]
      }
    },
      {
      id: "401906760",
      line: "Seton Hall Pirates 76 @ Alabama Crimson Tide 82 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Seton", name: "Seton Hall Pirates", score: 76,
        players: [
          { name: "Devin Williams", min: 22, pts: 10, reb: 7, ast: 0, stl: 0, blk: 4, to: 2, tpm: 0, fgm: 4, fga: 6, ftm: 2, fta: 2, composite: 5.39, zScores: { pts: 0.409, reb: 1.362, ast: -0.759, stl: -0.719, blk: 4.739, tpm: -0.634, fgImpact: 1.017, ftImpact: 0.738, to: -0.766 } },
          { name: "Mihailo Petrovic", min: 22, pts: 5, reb: 4, ast: 3, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -0.3, zScores: { pts: -0.344, reb: 0.308, ast: 0.887, stl: 1.326, blk: -0.489, tpm: 0.163, fgImpact: -0.562, ftImpact: 0, to: -1.594 } },
          { name: "Roddie Anderson", min: 18, pts: 2, reb: 1, ast: 3, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 8, ftm: 0, fta: 0, composite: -1.63, zScores: { pts: -0.796, reb: -0.746, ast: 0.887, stl: 1.326, blk: -0.489, tpm: -0.634, fgImpact: -2.066, ftImpact: 0, to: 0.89 } },
          { name: "Elijah Fisher", min: 32, pts: 14, reb: 5, ast: 0, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 7, fta: 8, composite: 2.93, zScores: { pts: 1.012, reb: 0.659, ast: -0.759, stl: 1.326, blk: -0.489, tpm: 0.163, fgImpact: -0.487, ftImpact: 1.443, to: 0.062 } },
          { name: "Simeon Wilcher", min: 21, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: -3.18, zScores: { pts: -0.194, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.919, ftImpact: 0.738, to: 0.89 } },
          { name: "Ilay Dolinski", min: 16, pts: 15, reb: 5, ast: 1, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 6, fga: 7, ftm: 2, fta: 2, composite: 5.11, zScores: { pts: 1.163, reb: 0.659, ast: -0.21, stl: 0.304, blk: 0.818, tpm: 0.163, fgImpact: 2.239, ftImpact: 0.738, to: -0.766 } },
          { name: "Mayar Wol", min: 9, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.06, zScores: { pts: -0.646, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -0.281, ftImpact: 0, to: 0.062 } },
          { name: "Kareem Thomas", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Trey Parker", min: 24, pts: 12, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 3.6, zScores: { pts: 0.711, reb: -0.043, ast: 0.887, stl: 0.304, blk: -0.489, tpm: 0.96, fgImpact: 0.379, ftImpact: 0, to: 0.89 } },
          { name: "Rodney Brown Jr.", min: 22, pts: 9, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 9, ftm: 4, fta: 4, composite: -1.21, zScores: { pts: 0.259, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -1.633, ftImpact: 1.477, to: 0.89 } },
          { name: "Del Jones", min: 12, pts: 0, reb: 4, ast: 3, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -5.12, zScores: { pts: -1.098, reb: 0.308, ast: 0.887, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.785, ftImpact: 0, to: -1.594 } }
        ]
      },
      home: {
        abbr: "Bama", name: "Alabama Crimson Tide", score: 82,
        players: [
          { name: "London Jemison", min: 20, pts: 3, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 1, composite: -3.18, zScores: { pts: -0.646, reb: -0.746, ast: -0.759, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: 0.076, ftImpact: -1.141, to: 0.062 } },
          { name: "Drew Fielder", min: 20, pts: 4, reb: 5, ast: 3, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 4, ftm: 4, fta: 5, composite: -3.48, zScores: { pts: -0.495, reb: 0.659, ast: 0.887, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.428, ftImpact: 0.335, to: -1.594 } },
          { name: "Brandon Garrison", min: 20, pts: 8, reb: 7, ast: 1, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 4, fga: 8, ftm: 0, fta: 2, composite: -1.83, zScores: { pts: 0.108, reb: 1.362, ast: -0.21, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: 0.303, ftImpact: -2.283, to: -1.594 } },
          { name: "Amari Allen", min: 33, pts: 24, reb: 3, ast: 5, stl: 1, blk: 2, to: 0, tpm: 3, fgm: 6, fga: 10, ftm: 9, fta: 12, composite: 10.6, zScores: { pts: 2.519, reb: -0.043, ast: 1.985, stl: 0.304, blk: 2.125, tpm: 1.757, fgImpact: 1.168, ftImpact: -0.101, to: 0.89 } },
          { name: "Aden Holloway", min: 35, pts: 18, reb: 1, ast: 2, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 10, ftm: 8, fta: 8, composite: 5.61, zScores: { pts: 1.615, reb: -0.746, ast: 0.338, stl: 1.326, blk: -0.489, tpm: 0.96, fgImpact: -0.411, ftImpact: 2.954, to: 0.062 } },
          { name: "Tarris Bouie", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.45, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.714, ftImpact: 0, to: 0.062 } },
          { name: "Keitenn Bristow", min: 16, pts: 2, reb: 3, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.5, zScores: { pts: -0.796, reb: -0.043, ast: -0.759, stl: 1.326, blk: -0.489, tpm: -0.634, fgImpact: -0.995, ftImpact: 0, to: 0.89 } },
          { name: "Jaxon Richardson", min: 11, pts: 4, reb: 5, ast: 0, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 0.28, zScores: { pts: -0.495, reb: 0.659, ast: -0.759, stl: -0.719, blk: 2.125, tpm: -0.634, fgImpact: 0.865, ftImpact: 0, to: -0.766 } },
          { name: "Anderson Diaz", min: 8, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -4.75, zScores: { pts: -0.646, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.433, ftImpact: -0.772, to: -0.766 } },
          { name: "Qayden Samuels", min: 10, pts: 4, reb: 2, ast: 0, stl: 1, blk: 1, to: 4, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -3.48, zScores: { pts: -0.495, reb: -0.394, ast: -0.759, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: -0.638, ftImpact: 0.738, to: -2.421 } },
          { name: "Cole Cloer", min: 23, pts: 12, reb: 5, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 5, fta: 6, composite: 3.05, zScores: { pts: 0.711, reb: 0.659, ast: -0.759, stl: -0.719, blk: 0.818, tpm: 0.163, fgImpact: 0.584, ftImpact: 0.705, to: 0.89 } }
        ]
      }
    },
      {
      id: "401917916",
      line: "Central Arkansas Bears 66 @ Arkansas Razorbacks 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CARK", name: "Central Arkansas Bears", score: 66,
        players: [

        ]
      },
      home: {
        abbr: "Ark", name: "Arkansas Razorbacks", score: 79,
        players: [
          { name: "Miikka Muurinen", min: 20, pts: 11, reb: 2, ast: 1, stl: 3, blk: 2, to: 2, tpm: 0, fgm: 3, fga: 8, ftm: 5, fta: 6, composite: 3.25, zScores: { pts: 0.56, reb: -0.394, ast: -0.21, stl: 2.349, blk: 2.125, tpm: -0.634, fgImpact: -0.487, ftImpact: 0.705, to: -0.766 } },
          { name: "Cooper Bowser", min: 29, pts: 9, reb: 4, ast: 1, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 3, fta: 5, composite: 2.34, zScores: { pts: 0.259, reb: 0.308, ast: -0.21, stl: 0.304, blk: 2.125, tpm: -0.634, fgImpact: 1.298, ftImpact: -1.175, to: 0.062 } },
          { name: "Jeremiah Wilkinson", min: 27, pts: 14, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 14, ftm: 0, fta: 0, composite: 1.32, zScores: { pts: 1.012, reb: -0.394, ast: 0.338, stl: -0.719, blk: -0.489, tpm: 2.554, fgImpact: -1.049, ftImpact: 0, to: 0.062 } },
          { name: "Jordan Smith Jr.", min: 27, pts: 12, reb: 3, ast: 3, stl: 3, blk: 2, to: 3, tpm: 0, fgm: 5, fga: 6, ftm: 2, fta: 3, composite: 5.2, zScores: { pts: 0.711, reb: -0.043, ast: 0.887, stl: 2.349, blk: 2.125, tpm: -0.634, fgImpact: 1.807, ftImpact: -0.403, to: -1.594 } },
          { name: "Billy Richmond III", min: 36, pts: 21, reb: 9, ast: 4, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 8, fga: 12, ftm: 2, fta: 2, composite: 10.8, zScores: { pts: 2.067, reb: 2.064, ast: 1.436, stl: 0.304, blk: -0.489, tpm: 1.757, fgImpact: 2.034, ftImpact: 0.738, to: 0.89 } },
          { name: "Abdou Toure", min: 10, pts: 3, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.71, zScores: { pts: -0.646, reb: -0.043, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -0.281, ftImpact: 0, to: 0.062 } },
          { name: "JJ Andrews", min: 17, pts: 2, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.78, zScores: { pts: -0.796, reb: 0.308, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.076, ftImpact: 0, to: -0.766 } },
          { name: "Maper Maker", min: 5, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.2, zScores: { pts: -1.098, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Davion Thompson", min: 29, pts: 7, reb: 3, ast: 8, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 2.08, zScores: { pts: -0.043, reb: -0.043, ast: 3.632, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -0.487, ftImpact: 0, to: 0.062 } }
        ]
      }
    },
      {
      id: "401921825",
      line: "Prairie View A&M Panthers 62 @ Vanderbilt Commodores 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PV", name: "Prairie View A&M Panthers", score: 62,
        players: [

        ]
      },
      home: {
        abbr: "Vand", name: "Vanderbilt Commodores", score: 89,
        players: [
          { name: "Chandler Bing", min: 22, pts: 15, reb: 4, ast: 4, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 7, ftm: 5, fta: 7, composite: 5.3, zScores: { pts: 1.163, reb: 0.308, ast: 1.436, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: 1.45, ftImpact: -0.437, to: 0.89 } },
          { name: "Sebastian Williams-Adams", min: 21, pts: 9, reb: 7, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 1, fta: 3, composite: -0.63, zScores: { pts: 0.259, reb: 1.362, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 1.374, ftImpact: -1.914, to: 0.89 } },
          { name: "Berke Buyuktuncel", min: 19, pts: 2, reb: 6, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -3.13, zScores: { pts: -0.796, reb: 1.01, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.714, ftImpact: 0.738, to: -0.766 } },
          { name: "Ace Glass", min: 23, pts: 19, reb: 1, ast: 4, stl: 2, blk: 1, to: 0, tpm: 5, fgm: 7, fga: 14, ftm: 0, fta: 0, composite: 9.37, zScores: { pts: 1.765, reb: -0.746, ast: 1.436, stl: 1.326, blk: 0.818, tpm: 3.35, fgImpact: 0.53, ftImpact: 0, to: 0.89 } },
          { name: "Tyler Tanner", min: 28, pts: 14, reb: 6, ast: 4, stl: 5, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 10, ftm: 4, fta: 5, composite: 7.99, zScores: { pts: 1.012, reb: 1.01, ast: 1.436, stl: 4.394, blk: 0.818, tpm: -0.634, fgImpact: 0.379, ftImpact: 0.335, to: -0.766 } },
          { name: "Jackson Sheffield", min: 9, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.03, zScores: { pts: -1.098, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.062 } },
          { name: "Ethan Mgbako", min: 6, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.85, zScores: { pts: -0.344, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 0.151, ftImpact: 0, to: 0.89 } },
          { name: "Bangot Dak", min: 20, pts: 4, reb: 11, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 1, composite: 0.16, zScores: { pts: -0.495, reb: 2.766, ast: -0.759, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: -0.562, ftImpact: -1.141, to: 0.89 } },
          { name: "T.O. Barrett", min: 18, pts: 12, reb: 4, ast: 1, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 5, fga: 6, ftm: 2, fta: 2, composite: 0.11, zScores: { pts: 0.711, reb: 0.308, ast: -0.21, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 1.807, ftImpact: 0.738, to: -2.421 } },
          { name: "Jayden Leverett", min: 12, pts: 8, reb: 1, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 4, ftm: 0, fta: 1, composite: -2.11, zScores: { pts: 0.108, reb: -0.746, ast: -0.759, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 1.731, ftImpact: -1.141, to: -0.766 } },
          { name: "Chase Byington", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Baylor Allen", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Mavrick Hawkins", min: 4, pts: 1, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -3.98, zScores: { pts: -0.947, reb: -1.097, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: -0.772, to: 0.89 } },
          { name: "Ant Brown Jr.", min: 12, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -6, zScores: { pts: -1.098, reb: -1.097, ast: -0.21, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: -2.421 } }
        ]
      }
    },
      {
      id: "401921803",
      line: "Northern Arizona Lumberjacks 77 @ Kentucky Wildcats 78 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NAU", name: "Northern Arizona Lumberjacks", score: 77,
        players: [

        ]
      },
      home: {
        abbr: "KY", name: "Kentucky Wildcats", score: 78,
        players: [
          { name: "Ousmane N'Diaye", min: 26, pts: 11, reb: 5, ast: 1, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 3.23, zScores: { pts: 0.56, reb: 0.659, ast: -0.21, stl: -0.719, blk: 0.818, tpm: 1.757, fgImpact: 0.303, ftImpact: 0, to: 0.062 } },
          { name: "Milan Momcilovic", min: 35, pts: 14, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 11, ftm: 1, fta: 1, composite: 2.08, zScores: { pts: 1.012, reb: -1.097, ast: 0.338, stl: -0.719, blk: -0.489, tpm: 1.757, fgImpact: 0.022, ftImpact: 0.369, to: 0.89 } },
          { name: "Malachi Moreno", min: 34, pts: 14, reb: 6, ast: 6, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 6, fga: 8, ftm: 2, fta: 3, composite: 7.35, zScores: { pts: 1.012, reb: 1.01, ast: 2.534, stl: -0.719, blk: 3.432, tpm: -0.634, fgImpact: 1.882, ftImpact: -0.403, to: -0.766 } },
          { name: "Alex Wilkins", min: 32, pts: 14, reb: 0, ast: 4, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 4.18, zScores: { pts: 1.012, reb: -1.097, ast: 1.436, stl: 0.304, blk: -0.489, tpm: 0.96, fgImpact: 1.168, ftImpact: 0, to: 0.89 } },
          { name: "Zoom Diallo", min: 22, pts: 7, reb: 3, ast: 3, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 2.45, zScores: { pts: -0.043, reb: -0.043, ast: 0.887, stl: 1.326, blk: -0.489, tpm: 0.163, fgImpact: 0.584, ftImpact: 0, to: 0.062 } },
          { name: "Braydon Hawthorne", min: 9, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.05, zScores: { pts: -1.098, reb: -1.097, ast: -0.21, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.714, ftImpact: 0, to: 0.89 } },
          { name: "Justin McBride", min: 12, pts: 10, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 4, ftm: 0, fta: 0, composite: 2.23, zScores: { pts: 0.409, reb: -1.097, ast: -0.759, stl: -0.719, blk: 0.818, tpm: 0.96, fgImpact: 1.731, ftImpact: 0, to: 0.89 } },
          { name: "Franck Kepnang", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Mason Williams", min: 26, pts: 8, reb: 2, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 0.81, zScores: { pts: 0.108, reb: -0.394, ast: 1.436, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.13, ftImpact: 0.738, to: 0.89 } }
        ]
      }
    },
      {
      id: "401909696",
      line: "Texas A&M-Corpus Christi Islanders 60 @ Florida State Seminoles 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "AMCC", name: "Texas A&M-Corpus Christi Islanders", score: 60,
        players: [

        ]
      },
      home: {
        abbr: "FSU", name: "Florida State Seminoles", score: 84,
        players: [
          { name: "Sebastian Rancik", min: 28, pts: 17, reb: 8, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 15, ftm: 3, fta: 3, composite: 3.02, zScores: { pts: 1.464, reb: 1.713, ast: 0.338, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.173, ftImpact: 1.108, to: 0.062 } },
          { name: "Shon Abaev", min: 27, pts: 9, reb: 4, ast: 2, stl: 2, blk: 1, to: 4, tpm: 0, fgm: 3, fga: 10, ftm: 3, fta: 4, composite: -1.24, zScores: { pts: 0.259, reb: 0.308, ast: 0.338, stl: 1.326, blk: 0.818, tpm: -0.634, fgImpact: -1.201, ftImpact: -0.034, to: -2.421 } },
          { name: "Marcis Ponder", min: 17, pts: 8, reb: 9, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 4, fta: 6, composite: -1.49, zScores: { pts: 0.108, reb: 2.064, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.508, ftImpact: -0.806, to: -0.766 } },
          { name: "Kam Taylor", min: 24, pts: 14, reb: 1, ast: 1, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 8, ftm: 3, fta: 3, composite: 3.32, zScores: { pts: 1.012, reb: -0.746, ast: -0.21, stl: 1.326, blk: -0.489, tpm: 0.163, fgImpact: 1.093, ftImpact: 1.108, to: 0.062 } },
          { name: "Anthony Robinson II", min: 21, pts: 10, reb: 6, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 8, fta: 10, composite: 2.13, zScores: { pts: 0.409, reb: 1.01, ast: 1.436, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.638, ftImpact: 0.671, to: 0.062 } },
          { name: "Alex Steen", min: 15, pts: 10, reb: 8, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 6, fta: 6, composite: 1.95, zScores: { pts: 0.409, reb: 1.713, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.151, ftImpact: 2.215, to: 0.062 } },
          { name: "Cooper Schwieger", min: 16, pts: 0, reb: 4, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 1, composite: -1.83, zScores: { pts: -1.098, reb: 0.308, ast: -0.21, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: -1.071, ftImpact: -1.141, to: 0.89 } },
          { name: "Elisee Assui", min: 21, pts: 6, reb: 9, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 4, fta: 4, composite: 1.74, zScores: { pts: -0.194, reb: 2.064, ast: -0.21, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.638, ftImpact: 1.477, to: 0.062 } },
          { name: "Martay Barnes", min: 14, pts: 2, reb: 0, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 6, ftm: 2, fta: 4, composite: -4.97, zScores: { pts: -0.796, reb: -1.097, ast: 0.338, stl: 1.326, blk: -0.489, tpm: -0.634, fgImpact: -2.142, ftImpact: -1.545, to: 0.062 } },
          { name: "Brandon Bass Jr.", min: 17, pts: 8, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: -2.27, zScores: { pts: 0.108, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -0.205, ftImpact: -0.034, to: 0.062 } }
        ]
      }
    },
      {
      id: "401923270",
      line: "Bryant Bulldogs 51 @ Rutgers Scarlet Knights 72 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BRY", name: "Bryant Bulldogs", score: 51,
        players: [

        ]
      },
      home: {
        abbr: "Rut", name: "Rutgers Scarlet Knights", score: 72,
        players: [
          { name: "Christian Gurdak", min: 30, pts: 20, reb: 14, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 8, fga: 11, ftm: 4, fta: 4, composite: 10.23, zScores: { pts: 1.916, reb: 3.82, ast: -0.21, stl: -0.719, blk: 2.125, tpm: -0.634, fgImpact: 2.391, ftImpact: 1.477, to: 0.062 } },
          { name: "Lino Mark", min: 31, pts: 12, reb: 8, ast: 3, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 10, ftm: 6, fta: 9, composite: -0.2, zScores: { pts: 0.711, reb: 1.713, ast: 0.887, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: -1.201, ftImpact: -1.209, to: -1.594 } },
          { name: "Darin Smith Jr.", min: 14, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Tariq Francis", min: 17, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -4.04, zScores: { pts: -0.495, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.995, ftImpact: 0.738, to: 0.062 } },
          { name: "Darren Buchanan Jr.", min: 24, pts: 8, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 10, ftm: 2, fta: 5, composite: -5.66, zScores: { pts: 0.108, reb: 0.659, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.201, ftImpact: -2.686, to: 0.062 } },
          { name: "Mervedi Miteo", min: 12, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.09, zScores: { pts: -0.495, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.508, ftImpact: 0, to: 0.89 } },
          { name: "Will Sydnor", min: 4, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -1.098, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Dorin Buca", min: 5, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.73, zScores: { pts: -0.495, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.865, ftImpact: 0, to: 0.89 } },
          { name: "Diego Garavaglia", min: 15, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.098, reb: -0.043, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.428, ftImpact: 0, to: 0.89 } },
          { name: "Max Fradkin", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -6.19, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: -2.283, to: 0.89 } },
          { name: "Imahri Wooten", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Jamichael Davis", min: 24, pts: 18, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 8, ftm: 4, fta: 4, composite: 5.97, zScores: { pts: 1.615, reb: 0.308, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 2.554, fgImpact: 1.093, ftImpact: 1.477, to: 0.89 } },
          { name: "Rasheed Jones", min: 22, pts: 2, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -1.65, zScores: { pts: -0.796, reb: -1.097, ast: -0.21, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0.738, to: 0.89 } }
        ]
      }
    },
      {
      id: "401909515",
      line: "Georgetown Hoyas 85 @ Clemson Tigers 78 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "GTown", name: "Georgetown Hoyas", score: 85,
        players: [
          { name: "Caleb Williams", min: 27, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.95, zScores: { pts: -0.646, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -0.995, ftImpact: 0, to: 0.89 } },
          { name: "Vince Iwuchukwu", min: 29, pts: 20, reb: 10, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 8, fga: 10, ftm: 4, fta: 4, composite: 8.9, zScores: { pts: 1.916, reb: 2.415, ast: -0.21, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: 2.748, ftImpact: 1.477, to: 0.062 } },
          { name: "Kayvaun Mulready", min: 34, pts: 8, reb: 8, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 3.43, zScores: { pts: 0.108, reb: 1.713, ast: -0.21, stl: -0.719, blk: 0.818, tpm: 0.96, fgImpact: -0.13, ftImpact: 0, to: 0.89 } },
          { name: "Elmarko Jackson", min: 29, pts: 17, reb: 3, ast: 1, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 7, fga: 12, ftm: 2, fta: 2, composite: 6.39, zScores: { pts: 1.464, reb: -0.043, ast: -0.21, stl: 1.326, blk: 0.818, tpm: 0.163, fgImpact: 1.244, ftImpact: 0.738, to: 0.89 } },
          { name: "Jaland Lowe", min: 36, pts: 21, reb: 4, ast: 6, stl: 0, blk: 0, to: 4, tpm: 3, fgm: 6, fga: 15, ftm: 6, fta: 6, composite: 4.64, zScores: { pts: 2.067, reb: 0.308, ast: 2.534, stl: -0.719, blk: -0.489, tpm: 1.757, fgImpact: -0.616, ftImpact: 2.215, to: -2.421 } },
          { name: "Pedro Pastre", min: 5, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.36, zScores: { pts: -1.098, reb: -1.097, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Josiah Parker", min: 13, pts: 11, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 6, ftm: 1, fta: 1, composite: 2.88, zScores: { pts: 0.56, reb: -0.043, ast: 0.338, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: 1.017, ftImpact: 0.369, to: 0.89 } },
          { name: "Chol Machot", min: 11, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.65, zScores: { pts: -0.796, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.076, ftImpact: 0, to: 0.062 } },
          { name: "Gabriel Landeira", min: 16, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.94, zScores: { pts: -0.646, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -0.638, ftImpact: 0, to: 0.89 } }
        ]
      },
      home: {
        abbr: "Clem", name: "Clemson Tigers", score: 78,
        players: [
          { name: "Liutauras Lelevicius", min: 30, pts: 10, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 2.12, zScores: { pts: 0.409, reb: 0.308, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: 0.227, ftImpact: 0.738, to: 0.89 } },
          { name: "Chase Thompson", min: 31, pts: 5, reb: 5, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -1.25, zScores: { pts: -0.344, reb: 0.659, ast: 0.338, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -0.919, ftImpact: 0, to: 0.062 } },
          { name: "David Fuchs", min: 13, pts: 6, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -1.45, zScores: { pts: -0.194, reb: -0.746, ast: -0.759, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: 0.151, ftImpact: -0.772, to: 0.89 } },
          { name: "Ace Buckner", min: 33, pts: 20, reb: 2, ast: 5, stl: 2, blk: 0, to: 3, tpm: 2, fgm: 8, fga: 16, ftm: 2, fta: 2, composite: 5.06, zScores: { pts: 1.916, reb: -0.394, ast: 1.985, stl: 1.326, blk: -0.489, tpm: 0.96, fgImpact: 0.606, ftImpact: 0.738, to: -1.594 } },
          { name: "Cole Certa", min: 35, pts: 14, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 10, ftm: 1, fta: 2, composite: 3.06, zScores: { pts: 1.012, reb: 0.659, ast: 0.338, stl: -0.719, blk: -0.489, tpm: 1.757, fgImpact: 0.379, ftImpact: -0.772, to: 0.89 } },
          { name: "Trent Steinour", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Dylan Faulkner", min: 27, pts: 9, reb: 4, ast: 3, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 3, fta: 4, composite: 3.38, zScores: { pts: 0.259, reb: 0.308, ast: 0.887, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: 0.584, ftImpact: -0.034, to: 0.89 } },
          { name: "Dallas Thomas", min: 16, pts: 9, reb: 0, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: -0.97, zScores: { pts: 0.259, reb: -1.097, ast: -0.759, stl: -0.719, blk: 0.818, tpm: 0.163, fgImpact: 0.303, ftImpact: 0, to: 0.062 } },
          { name: "Harris Reynolds", min: 13, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -1.19, zScores: { pts: -0.344, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 0.076, ftImpact: 0.738, to: 0.89 } }
        ]
      }
    },
      {
      id: "401902278",
      line: "Pittsburgh Panthers 76 @ Butler Bulldogs 64 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Pitt", name: "Pittsburgh Panthers", score: 76,
        players: [
          { name: "Akir Souare", min: 12, pts: 4, reb: 3, ast: 0, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: 1.92, zScores: { pts: -0.495, reb: -0.043, ast: -0.759, stl: 1.326, blk: 0.818, tpm: -0.634, fgImpact: 0.076, ftImpact: 0.738, to: 0.89 } },
          { name: "Baye Ndongo", min: 29, pts: 13, reb: 7, ast: 1, stl: 3, blk: 2, to: 1, tpm: 0, fgm: 5, fga: 8, ftm: 3, fta: 5, composite: 5.83, zScores: { pts: 0.861, reb: 1.362, ast: -0.21, stl: 2.349, blk: 2.125, tpm: -0.634, fgImpact: 1.093, ftImpact: -1.175, to: 0.062 } },
          { name: "Naithan George", min: 36, pts: 11, reb: 8, ast: 8, stl: 3, blk: 0, to: 5, tpm: 0, fgm: 4, fga: 12, ftm: 3, fta: 4, composite: 2.72, zScores: { pts: 0.56, reb: 1.713, ast: 3.632, stl: 2.349, blk: -0.489, tpm: -0.634, fgImpact: -1.125, ftImpact: -0.034, to: -3.249 } },
          { name: "A'lahn Sumler", min: 27, pts: 10, reb: 3, ast: 3, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 9, ftm: 2, fta: 2, composite: 0.33, zScores: { pts: 0.409, reb: -0.043, ast: 0.887, stl: 0.304, blk: -0.489, tpm: 0.96, fgImpact: -0.844, ftImpact: 0.738, to: -1.594 } },
          { name: "Jonathan Powell", min: 38, pts: 17, reb: 6, ast: 0, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 6, fga: 11, ftm: 2, fta: 2, composite: 2.22, zScores: { pts: 1.464, reb: 1.01, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 1.757, fgImpact: 0.811, ftImpact: 0.738, to: -1.594 } },
          { name: "Chase Foster", min: 27, pts: 15, reb: 6, ast: 2, stl: 1, blk: 2, to: 2, tpm: 1, fgm: 5, fga: 9, ftm: 4, fta: 5, composite: 5.41, zScores: { pts: 1.163, reb: 1.01, ast: 0.338, stl: 0.304, blk: 2.125, tpm: 0.163, fgImpact: 0.736, ftImpact: 0.335, to: -0.766 } },
          { name: "Armani Mighty", min: 8, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.25, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Jalil Bethea", min: 23, pts: 6, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.19, zScores: { pts: -0.194, reb: -0.394, ast: 0.338, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: -0.205, ftImpact: 0, to: 0.89 } }
        ]
      },
      home: {
        abbr: "Butl", name: "Butler Bulldogs", score: 64,
        players: [
          { name: "Asim Djulovic", min: 29, pts: 11, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 10, ftm: 1, fta: 2, composite: -0.71, zScores: { pts: 0.56, reb: 0.308, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: -0.411, ftImpact: -0.772, to: 0.062 } },
          { name: "Samis Calderon", min: 30, pts: 7, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 3, fta: 4, composite: 0.24, zScores: { pts: -0.043, reb: 0.308, ast: -0.21, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0.151, ftImpact: -0.034, to: 0.89 } },
          { name: "Drayton Jones", min: 20, pts: 4, reb: 3, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -3.44, zScores: { pts: -0.495, reb: -0.043, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.562, ftImpact: 0, to: -0.766 } },
          { name: "Eduardo Klafke", min: 31, pts: 16, reb: 8, ast: 2, stl: 3, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 13, ftm: 6, fta: 6, composite: 6.15, zScores: { pts: 1.313, reb: 1.713, ast: 0.338, stl: 2.349, blk: -0.489, tpm: 0.96, fgImpact: -1.482, ftImpact: 2.215, to: -0.766 } },
          { name: "Jalen Jackson", min: 33, pts: 8, reb: 2, ast: 2, stl: 2, blk: 0, to: 4, tpm: 1, fgm: 2, fga: 11, ftm: 3, fta: 4, composite: -3.75, zScores: { pts: 0.108, reb: -0.394, ast: 0.338, stl: 1.326, blk: -0.489, tpm: 0.163, fgImpact: -2.347, ftImpact: -0.034, to: -2.421 } },
          { name: "Treyson Anderson", min: 20, pts: 9, reb: 6, ast: 1, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 2, fta: 3, composite: 1.43, zScores: { pts: 0.259, reb: 1.01, ast: -0.21, stl: 2.349, blk: -0.489, tpm: 0.163, fgImpact: -0.487, ftImpact: -0.403, to: -0.766 } },
          { name: "Samu Adler", min: 12, pts: 0, reb: 2, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.83, zScores: { pts: -1.098, reb: -0.394, ast: 0.338, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.071, ftImpact: 0, to: -0.766 } },
          { name: "Baron Walker", min: 9, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.05, zScores: { pts: -0.646, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 0.433, ftImpact: 0, to: 0.062 } },
          { name: "Jordan Ellerbee", min: 16, pts: 6, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -1.72, zScores: { pts: -0.194, reb: -1.097, ast: -0.21, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.205, ftImpact: 0.738, to: 0.062 } }
        ]
      }
    },
      {
      id: "401926133",
      line: "Ohio Bobcats 62 @ Purdue Boilermakers 80 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OHIO", name: "Ohio Bobcats", score: 62,
        players: [

        ]
      },
      home: {
        abbr: "Pur", name: "Purdue Boilermakers", score: 80,
        players: [
          { name: "Caden Pierce", min: 17, pts: 6, reb: 4, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 0.67, zScores: { pts: -0.194, reb: 0.308, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0.508, ftImpact: 0.738, to: 0.89 } },
          { name: "Daniel Jacobsen", min: 27, pts: 9, reb: 8, ast: 1, stl: 1, blk: 3, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 5, fta: 6, composite: 5.78, zScores: { pts: 0.259, reb: 1.713, ast: -0.21, stl: 0.304, blk: 3.432, tpm: -0.634, fgImpact: 0.151, ftImpact: 0.705, to: 0.062 } },
          { name: "Luke Ertel", min: 17, pts: 3, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -2.24, zScores: { pts: -0.646, reb: -1.097, ast: 0.338, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -1.709, ftImpact: 0, to: 0.89 } },
          { name: "C.J. Cox", min: 31, pts: 16, reb: 4, ast: 2, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 6, fga: 9, ftm: 3, fta: 3, composite: 2.98, zScores: { pts: 1.313, reb: 0.308, ast: 0.338, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: 1.525, ftImpact: 1.108, to: -1.594 } },
          { name: "Jack Benter", min: 34, pts: 6, reb: 8, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: 0.68, zScores: { pts: -0.194, reb: 1.713, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: -1.276, ftImpact: 0, to: 0.89 } },
          { name: "Enzo Shahrvin", min: 13, pts: 0, reb: 2, ast: 0, stl: 2, blk: 2, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: 1.1, zScores: { pts: -1.098, reb: -0.394, ast: -0.759, stl: 1.326, blk: 2.125, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Omer Mayer", min: 9, pts: 0, reb: 1, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -5.42, zScores: { pts: -1.098, reb: -0.746, ast: -0.21, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -1.785, ftImpact: 0, to: -0.766 } },
          { name: "Antione West Jr", min: 23, pts: 17, reb: 3, ast: 4, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 11, ftm: 5, fta: 6, composite: 3.59, zScores: { pts: 1.464, reb: -0.043, ast: 1.436, stl: 0.304, blk: -0.489, tpm: 0.96, fgImpact: 0.022, ftImpact: 0.705, to: -0.766 } },
          { name: "Gicarri Harris", min: 29, pts: 23, reb: 5, ast: 4, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 8, fga: 12, ftm: 3, fta: 3, composite: 11.06, zScores: { pts: 2.368, reb: 0.659, ast: 1.436, stl: 1.326, blk: -0.489, tpm: 2.554, fgImpact: 2.034, ftImpact: 1.108, to: 0.062 } }
        ]
      }
    },
      {
      id: "401925820",
      line: "App State Mountaineers 66 @ Charlotte 49ers 60 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "APP", name: "App State Mountaineers", score: 66,
        players: [

        ]
      },
      home: {
        abbr: "UNCC", name: "Charlotte 49ers", score: 60,
        players: [
          { name: "Arden Conyers", min: 6, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.87, zScores: { pts: -0.646, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 0.433, ftImpact: 0, to: 0.89 } },
          { name: "Tyler McKinley", min: 17, pts: 4, reb: 4, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.06, zScores: { pts: -0.495, reb: 0.308, ast: -0.759, stl: 1.326, blk: -0.489, tpm: -0.634, fgImpact: -0.205, ftImpact: 0, to: 0.89 } },
          { name: "Michael Walz", min: 28, pts: 4, reb: 7, ast: 2, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 7, ftm: 1, fta: 2, composite: -0.95, zScores: { pts: -0.495, reb: 1.362, ast: 0.338, stl: -0.719, blk: 0.818, tpm: 0.163, fgImpact: -1.709, ftImpact: -0.772, to: 0.062 } },
          { name: "Keyshuan Tillery", min: 33, pts: 23, reb: 3, ast: 5, stl: 0, blk: 0, to: 3, tpm: 5, fgm: 5, fga: 17, ftm: 8, fta: 10, composite: 3.41, zScores: { pts: 2.368, reb: -0.043, ast: 1.985, stl: -0.719, blk: -0.489, tpm: 3.35, fgImpact: -2.12, ftImpact: 0.671, to: -1.594 } },
          { name: "Dorian Finister", min: 21, pts: 5, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -0.97, zScores: { pts: -0.344, reb: 1.01, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -1.276, ftImpact: 0, to: 0.89 } },
          { name: "Miguel Allen", min: 22, pts: 1, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 1, fta: 2, composite: -3.46, zScores: { pts: -0.947, reb: 0.659, ast: 0.338, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.785, ftImpact: -0.772, to: 0.89 } },
          { name: "Jayden Fort", min: 6, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.03, zScores: { pts: -1.098, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.062 } },
          { name: "Dylan Grant", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Peyton Marshall", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.17, zScores: { pts: -0.796, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.433, ftImpact: 0, to: 0.89 } },
          { name: "Frank Oguche", min: 21, pts: 2, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -2.66, zScores: { pts: -0.796, reb: 1.01, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.709, ftImpact: 0, to: 0.89 } },
          { name: "Jordi Rodriguez-Stegemeijer", min: 21, pts: 5, reb: 6, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 1, composite: -0.29, zScores: { pts: -0.344, reb: 1.01, ast: -0.759, stl: -0.719, blk: 0.818, tpm: 0.163, fgImpact: -0.205, ftImpact: -1.141, to: 0.89 } },
          { name: "Chaze Harris", min: 18, pts: 11, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 9, ftm: 1, fta: 2, composite: -2.21, zScores: { pts: 0.56, reb: -0.746, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.736, ftImpact: -0.772, to: 0.062 } }
        ]
      }
    },
      {
      id: "401924704",
      line: "Columbia Lions 77 @ Bucknell Bison 59 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Colum", name: "Columbia Lions", score: 77,
        players: [
          { name: "Connor Igoe", min: 29, pts: 12, reb: 10, ast: 5, stl: 3, blk: 2, to: 3, tpm: 0, fgm: 3, fga: 8, ftm: 6, fta: 6, composite: 9.09, zScores: { pts: 0.711, reb: 2.415, ast: 1.985, stl: 2.349, blk: 2.125, tpm: -0.634, fgImpact: -0.487, ftImpact: 2.215, to: -1.594 } },
          { name: "Mason Ritter", min: 21, pts: 8, reb: 4, ast: 2, stl: 0, blk: 2, to: 3, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: 1.61, zScores: { pts: 0.108, reb: 0.308, ast: 0.338, stl: -0.719, blk: 2.125, tpm: -0.634, fgImpact: 0.941, ftImpact: 0.738, to: -1.594 } },
          { name: "Michael Madueme", min: 26, pts: 7, reb: 3, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 0.95, zScores: { pts: -0.043, reb: -0.043, ast: 0.887, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: 0.941, ftImpact: 0, to: -0.766 } },
          { name: "Josh Pratt", min: 17, pts: 8, reb: 1, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: -2.73, zScores: { pts: 0.108, reb: -0.746, ast: -0.759, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: 0.227, ftImpact: -0.772, to: -0.766 } },
          { name: "Gerard O'Keefe", min: 27, pts: 14, reb: 1, ast: 3, stl: 0, blk: 1, to: 1, tpm: 4, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 4.6, zScores: { pts: 1.012, reb: -0.746, ast: 0.887, stl: -0.719, blk: 0.818, tpm: 2.554, fgImpact: 0.736, ftImpact: 0, to: 0.062 } },
          { name: "Douglas Langford", min: 23, pts: 7, reb: 9, ast: 0, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 3, fga: 8, ftm: 1, fta: 4, composite: 0.41, zScores: { pts: -0.043, reb: 2.064, ast: -0.759, stl: 0.304, blk: 2.125, tpm: -0.634, fgImpact: -0.487, ftImpact: -3.055, to: 0.89 } },
          { name: "Leland Coleman", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Richard Nweke", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.56, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: -0.766 } },
          { name: "Trae Nunn", min: 1, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.18, zScores: { pts: -0.947, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: -0.772, to: 0.89 } },
          { name: "Nino Zarkovic", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Gabe Hornberger", min: 12, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -4.63, zScores: { pts: -1.098, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.428, ftImpact: 0, to: 0.89 } },
          { name: "Hampton Sanders", min: 28, pts: 8, reb: 3, ast: 6, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 2.12, zScores: { pts: 0.108, reb: -0.043, ast: 2.534, stl: 0.304, blk: -0.489, tpm: 0.96, fgImpact: -0.487, ftImpact: 0, to: -0.766 } },
          { name: "Josiah Cunningham", min: 13, pts: 12, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 6, ftm: 0, fta: 1, composite: 1.22, zScores: { pts: 0.711, reb: -0.043, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: 1.807, ftImpact: -1.141, to: 0.89 } }
        ]
      },
      home: {
        abbr: "BUCK", name: "Bucknell Bison", score: 59,
        players: [

        ]
      }
    },
      {
      id: "401920747",
      line: "Yale Bulldogs 73 @ Northeastern Huskies 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Yale", name: "Yale Bulldogs", score: 73,
        players: [
          { name: "Daniel Ogunyemi", min: 34, pts: 20, reb: 11, ast: 3, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 10, fga: 14, ftm: 0, fta: 0, composite: 7.17, zScores: { pts: 1.916, reb: 2.766, ast: 0.887, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 2.899, ftImpact: 0, to: -0.766 } },
          { name: "Jack Sullivan", min: 24, pts: 0, reb: 4, ast: 3, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -0.97, zScores: { pts: -1.098, reb: 0.308, ast: 0.887, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: -1.428, ftImpact: 0, to: 0.89 } },
          { name: "Riley Fox", min: 21, pts: 2, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.6, zScores: { pts: -0.796, reb: -0.394, ast: 0.338, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.995, ftImpact: 0, to: 0.062 } },
          { name: "Jordan Brathwaite", min: 36, pts: 9, reb: 1, ast: 5, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 12, ftm: 1, fta: 2, composite: 0.48, zScores: { pts: 0.259, reb: -0.746, ast: 1.985, stl: 0.304, blk: -0.489, tpm: 0.96, fgImpact: -1.915, ftImpact: -0.772, to: 0.89 } },
          { name: "Trevor Mullin", min: 36, pts: 19, reb: 5, ast: 0, stl: 3, blk: 0, to: 1, tpm: 3, fgm: 8, fga: 19, ftm: 0, fta: 0, composite: 4.88, zScores: { pts: 1.765, reb: 0.659, ast: -0.759, stl: 2.349, blk: -0.489, tpm: 1.757, fgImpact: -0.465, ftImpact: 0, to: 0.062 } },
          { name: "Connor May", min: 5, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.17, zScores: { pts: -0.796, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.433, ftImpact: 0, to: 0.89 } },
          { name: "Jonas Oware", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Alvin Loving", min: 8, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.98, zScores: { pts: -0.796, reb: -0.746, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.281, ftImpact: 0, to: 0.89 } },
          { name: "Courtney Wallace", min: 25, pts: 17, reb: 1, ast: 2, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 7, fga: 12, ftm: 0, fta: 0, composite: 3.11, zScores: { pts: 1.464, reb: -0.746, ast: 0.338, stl: 0.304, blk: -0.489, tpm: 1.757, fgImpact: 1.244, ftImpact: 0, to: -0.766 } },
          { name: "Jeannot Basima", min: 4, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.82, zScores: { pts: -0.796, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.433, ftImpact: 0, to: 0.89 } }
        ]
      },
      home: {
        abbr: "NE", name: "Northeastern Huskies", score: 84,
        players: [

        ]
      }
    },
      {
      id: "401920379",
      line: "Mount St. Mary's Mountaineers 62 @ Virginia Tech Hokies 82 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MSM", name: "Mount St. Mary's Mountaineers", score: 62,
        players: [

        ]
      },
      home: {
        abbr: "VaTec", name: "Virginia Tech Hokies", score: 82,
        players: [
          { name: "Miles Heide", min: 15, pts: 5, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: -2.23, zScores: { pts: -0.344, reb: -0.746, ast: -0.759, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 0.865, ftImpact: -0.772, to: 0.062 } },
          { name: "Amani Hansberry", min: 34, pts: 20, reb: 4, ast: 5, stl: 5, blk: 1, to: 0, tpm: 3, fgm: 6, fga: 10, ftm: 5, fta: 9, composite: 10.52, zScores: { pts: 1.916, reb: 0.308, ast: 1.985, stl: 4.394, blk: 0.818, tpm: 1.757, fgImpact: 1.168, ftImpact: -2.72, to: 0.89 } },
          { name: "Jaylen Curry", min: 21, pts: 3, reb: 2, ast: 2, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 10, ftm: 3, fta: 4, composite: -3.02, zScores: { pts: -0.646, reb: -0.394, ast: 0.338, stl: 2.349, blk: -0.489, tpm: -0.634, fgImpact: -3.57, ftImpact: -0.034, to: 0.062 } },
          { name: "Ben Hammond", min: 33, pts: 18, reb: 3, ast: 8, stl: 2, blk: 0, to: 5, tpm: 2, fgm: 6, fga: 14, ftm: 4, fta: 6, composite: 2.69, zScores: { pts: 1.615, reb: -0.043, ast: 3.632, stl: 1.326, blk: -0.489, tpm: 0.96, fgImpact: -0.259, ftImpact: -0.806, to: -3.249 } },
          { name: "Isaiah Elohim", min: 36, pts: 16, reb: 5, ast: 0, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 12, ftm: 2, fta: 2, composite: 2.42, zScores: { pts: 1.313, reb: 0.659, ast: -0.759, stl: 0.304, blk: -0.489, tpm: 0.96, fgImpact: 0.454, ftImpact: 0.738, to: -0.766 } },
          { name: "Sin'Cere Jones", min: 3, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -5.49, zScores: { pts: -1.098, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: -2.283, to: 0.89 } },
          { name: "Kuol Atak", min: 11, pts: 6, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -0.95, zScores: { pts: -0.194, reb: -1.097, ast: -0.759, stl: 0.304, blk: -0.489, tpm: 0.96, fgImpact: -0.562, ftImpact: 0, to: 0.89 } },
          { name: "Musa Sagnia", min: 13, pts: 4, reb: 6, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 1.17, zScores: { pts: -0.495, reb: 1.01, ast: -0.21, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 0.508, ftImpact: 0, to: 0.89 } },
          { name: "Solomon Davis", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "James Caldarella", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.6, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Eltayeb Eltayeb", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Ethan Copeland", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Tyler Johnson", min: 22, pts: 10, reb: 9, ast: 1, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 4, fta: 4, composite: 5.54, zScores: { pts: 0.409, reb: 2.064, ast: -0.21, stl: 1.326, blk: 0.818, tpm: -0.634, fgImpact: 0.227, ftImpact: 1.477, to: 0.062 } },
          { name: "Butta Johnson", min: 7, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.62, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.714, ftImpact: 0, to: 0.89 } }
        ]
      }
    },
      {
      id: "401918958",
      line: "Troy Trojans 62 @ NC State Wolfpack 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TROY", name: "Troy Trojans", score: 62,
        players: [

        ]
      },
      home: {
        abbr: "NCSU", name: "NC State Wolfpack", score: 81,
        players: [
          { name: "Kyle Evans", min: 15, pts: 5, reb: 1, ast: 2, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 1, composite: 1.43, zScores: { pts: -0.344, reb: -0.746, ast: 0.338, stl: -0.719, blk: 2.125, tpm: -0.634, fgImpact: 0.151, ftImpact: 0.369, to: 0.89 } },
          { name: "Ven-Allen Lubin", min: 27, pts: 15, reb: 12, ast: 1, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 4, fga: 8, ftm: 7, fta: 9, composite: 5.99, zScores: { pts: 1.163, reb: 3.118, ast: -0.21, stl: -0.719, blk: 3.432, tpm: -0.634, fgImpact: 0.303, ftImpact: 0.302, to: -0.766 } },
          { name: "Darius Adams", min: 27, pts: 13, reb: 1, ast: 5, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 9, ftm: 1, fta: 2, composite: 3.92, zScores: { pts: 0.861, reb: -0.746, ast: 1.985, stl: 1.326, blk: -0.489, tpm: 0.96, fgImpact: 0.736, ftImpact: -0.772, to: 0.062 } },
          { name: "Preston Edmead", min: 31, pts: 9, reb: 4, ast: 7, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 9, ftm: 1, fta: 2, composite: 2.04, zScores: { pts: 0.259, reb: 0.308, ast: 3.083, stl: 0.304, blk: -0.489, tpm: 0.96, fgImpact: -0.844, ftImpact: -0.772, to: -0.766 } },
          { name: "Paul McNeil Jr.", min: 32, pts: 16, reb: 8, ast: 1, stl: 0, blk: 1, to: 0, tpm: 4, fgm: 5, fga: 10, ftm: 2, fta: 2, composite: 7.48, zScores: { pts: 1.313, reb: 1.713, ast: -0.21, stl: -0.719, blk: 0.818, tpm: 2.554, fgImpact: 0.379, ftImpact: 0.738, to: 0.89 } },
          { name: "Eemeli Yalaho", min: 24, pts: 7, reb: 4, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -0.3, zScores: { pts: -0.043, reb: 0.308, ast: -0.759, stl: -0.719, blk: 0.818, tpm: 0.163, fgImpact: -0.13, ftImpact: 0, to: 0.062 } },
          { name: "Zymicah Wilkins", min: 14, pts: 8, reb: 6, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 6, fta: 6, composite: 1.7, zScores: { pts: 0.108, reb: 1.01, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.076, ftImpact: 2.215, to: 0.89 } },
          { name: "Kingston Whitty", min: 5, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -1.54, zScores: { pts: -0.344, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 0.076, ftImpact: 0.738, to: 0.89 } },
          { name: "Christian Hammond", min: 23, pts: 3, reb: 6, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -0.97, zScores: { pts: -0.646, reb: 1.01, ast: 0.338, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -1.709, ftImpact: 0, to: 0.062 } },
          { name: "R.J. Keene II", min: 2, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.65, zScores: { pts: -1.098, reb: -0.394, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } }
        ]
      }
    },
      {
      id: "401911210",
      line: "Harvard Crimson 57 @ George Washington Revolutionaries 85 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Harv", name: "Harvard Crimson", score: 57,
        players: [
          { name: "Luca Ace-Nasteski", min: 18, pts: 2, reb: 7, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: 1.41, zScores: { pts: -0.796, reb: 1.362, ast: 0.338, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0.433, ftImpact: 0, to: 0.89 } },
          { name: "Thomas Batties II", min: 34, pts: 10, reb: 2, ast: 2, stl: 1, blk: 1, to: 4, tpm: 1, fgm: 4, fga: 12, ftm: 1, fta: 2, composite: -2.68, zScores: { pts: 0.409, reb: -0.394, ast: 0.338, stl: 0.304, blk: 0.818, tpm: 0.163, fgImpact: -1.125, ftImpact: -0.772, to: -2.421 } },
          { name: "Tey Barbour", min: 30, pts: 5, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.37, zScores: { pts: -0.344, reb: -1.097, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -0.562, ftImpact: 0, to: 0.89 } },
          { name: "Ben Eisendrath", min: 25, pts: 5, reb: 1, ast: 5, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.73, zScores: { pts: -0.344, reb: -0.746, ast: 1.985, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -0.205, ftImpact: 0, to: 0.062 } },
          { name: "Robert Hinton", min: 30, pts: 19, reb: 0, ast: 1, stl: 2, blk: 0, to: 4, tpm: 2, fgm: 7, fga: 13, ftm: 3, fta: 5, composite: -0.45, zScores: { pts: 1.765, reb: -1.097, ast: -0.21, stl: 1.326, blk: -0.489, tpm: 0.96, fgImpact: 0.887, ftImpact: -1.175, to: -2.421 } },
          { name: "Ryan Sullivan", min: 4, pts: 2, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.12, zScores: { pts: -0.796, reb: 0.308, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.076, ftImpact: 0, to: 0.89 } },
          { name: "Kenan Parrish", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.73, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.062 } },
          { name: "Julian Adigun", min: 12, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.28, zScores: { pts: -0.796, reb: -0.394, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.076, ftImpact: 0, to: 0.89 } },
          { name: "Preston Merrick", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.1, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.714, ftImpact: 0, to: 0.062 } },
          { name: "Brandon Burrell", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.98, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.071, ftImpact: 0, to: 0.89 } },
          { name: "Frankie Mannino", min: 8, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.36, zScores: { pts: -1.098, reb: -1.097, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Jason Singleton", min: 14, pts: 9, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 3, fta: 4, composite: -0.01, zScores: { pts: 0.259, reb: -0.043, ast: 0.887, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.13, ftImpact: -0.034, to: 0.89 } },
          { name: "Dutch Dowdell", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Xavier Nesbitt", min: 14, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.29, zScores: { pts: -0.646, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -0.638, ftImpact: 0, to: 0.89 } }
        ]
      },
      home: {
        abbr: "GrgWas", name: "George Washington Revolutionaries", score: 85,
        players: [
          { name: "Lovro Urbiha", min: 22, pts: 3, reb: 0, ast: 3, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 3, fta: 4, composite: -3.19, zScores: { pts: -0.646, reb: -1.097, ast: 0.887, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.714, ftImpact: -0.034, to: -0.766 } },
          { name: "Dylan James", min: 25, pts: 12, reb: 6, ast: 1, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 6, fga: 6, ftm: 0, fta: 0, composite: 5.42, zScores: { pts: 0.711, reb: 1.01, ast: -0.21, stl: -0.719, blk: 3.432, tpm: -0.634, fgImpact: 2.596, ftImpact: 0, to: -0.766 } },
          { name: "Omari Witherspoon", min: 24, pts: 16, reb: 6, ast: 1, stl: 3, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 12, ftm: 0, fta: 0, composite: 5.41, zScores: { pts: 1.313, reb: 1.01, ast: -0.21, stl: 2.349, blk: -0.489, tpm: 0.96, fgImpact: 1.244, ftImpact: 0, to: -0.766 } },
          { name: "Jean Aranguren", min: 19, pts: 16, reb: 2, ast: 4, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 5, ftm: 5, fta: 5, composite: 5.77, zScores: { pts: 1.313, reb: -0.394, ast: 1.436, stl: 1.326, blk: -0.489, tpm: 0.163, fgImpact: 2.164, ftImpact: 1.846, to: -1.594 } },
          { name: "Terrance Arceneaux", min: 18, pts: 10, reb: 2, ast: 0, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 5, fta: 6, composite: 1.46, zScores: { pts: 0.409, reb: -0.394, ast: -0.759, stl: 0.304, blk: 0.818, tpm: 0.163, fgImpact: 0.151, ftImpact: 0.705, to: 0.062 } },
          { name: "Deng Manyang", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Jayvon Rampersant", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.74, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.062 } },
          { name: "Ryder Frost", min: 17, pts: 3, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.7, zScores: { pts: -0.646, reb: 0.308, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -0.995, ftImpact: 0, to: 0.89 } },
          { name: "Andrija Vukovic", min: 14, pts: 7, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 3, fta: 3, composite: 0.37, zScores: { pts: -0.043, reb: -0.043, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.508, ftImpact: 1.108, to: 0.89 } },
          { name: "Promis N'Landu", min: 21, pts: 4, reb: 6, ast: 3, stl: 3, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 1.19, zScores: { pts: -0.495, reb: 1.01, ast: 0.887, stl: 2.349, blk: -0.489, tpm: -0.634, fgImpact: 0.151, ftImpact: 0, to: -1.594 } },
          { name: "Jalen Rougier-Roane", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Felix Kossaras", min: 20, pts: 14, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 8, ftm: 1, fta: 1, composite: 3.31, zScores: { pts: 1.012, reb: -0.394, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 1.757, fgImpact: 1.093, ftImpact: 0.369, to: 0.89 } },
          { name: "Andrew Phillips", min: 14, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } }
        ]
      }
    },
      {
      id: "401911197",
      line: "Long Island University Sharks 58 @ Fordham Rams 80 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LIU", name: "Long Island University Sharks", score: 58,
        players: [

        ]
      },
      home: {
        abbr: "Ford", name: "Fordham Rams", score: 80,
        players: [
          { name: "Abass Bodija", min: 28, pts: 23, reb: 11, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 8, fga: 9, ftm: 6, fta: 6, composite: 8.98, zScores: { pts: 2.368, reb: 2.766, ast: 0.338, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 3.105, ftImpact: 2.215, to: -0.766 } },
          { name: "Akira Jacobs", min: 16, pts: 2, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.8, zScores: { pts: -0.796, reb: -0.746, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0.433, ftImpact: 0, to: 0.89 } },
          { name: "Rikus Schulte", min: 27, pts: 10, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 4, fta: 5, composite: -1.41, zScores: { pts: 0.409, reb: -0.394, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0.584, ftImpact: 0.335, to: -0.766 } },
          { name: "Lateef Patrick Jr.", min: 33, pts: 13, reb: 6, ast: 4, stl: 4, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: 7.2, zScores: { pts: 0.861, reb: 1.01, ast: 1.436, stl: 3.371, blk: -0.489, tpm: 1.757, fgImpact: 0.022, ftImpact: 0, to: -0.766 } },
          { name: "Amir Lindsey", min: 32, pts: 10, reb: 1, ast: 7, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 11, ftm: 1, fta: 1, composite: 1.75, zScores: { pts: 0.409, reb: -0.746, ast: 3.083, stl: 1.326, blk: -0.489, tpm: 0.163, fgImpact: -0.768, ftImpact: 0.369, to: -1.594 } },
          { name: "Roor Akhuar", min: 18, pts: 13, reb: 4, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 8, ftm: 3, fta: 3, composite: 2.38, zScores: { pts: 0.861, reb: 0.308, ast: -0.21, stl: 0.304, blk: -0.489, tpm: 0.96, fgImpact: 0.303, ftImpact: 1.108, to: -0.766 } },
          { name: "Jack Whitbourn", min: 14, pts: 2, reb: 5, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.5, zScores: { pts: -0.796, reb: 0.659, ast: 0.338, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.076, ftImpact: 0, to: 0.062 } },
          { name: "Kelvin Odih", min: 14, pts: 6, reb: 3, ast: 2, stl: 1, blk: 1, to: 4, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.89, zScores: { pts: -0.194, reb: -0.043, ast: 0.338, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: 0.941, ftImpact: 0, to: -2.421 } },
          { name: "Hassan Koureissi", min: 9, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.1, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.714, ftImpact: 0, to: 0.062 } },
          { name: "Desmond Bellot Jr.", min: 9, pts: 1, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 1, fta: 2, composite: -4.7, zScores: { pts: -0.947, reb: -0.746, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.071, ftImpact: -0.772, to: 0.89 } }
        ]
      }
    },
      {
      id: "401906782",
      line: "Georgia Bulldogs 78 @ North Carolina Tar Heels 70 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UGA", name: "Georgia Bulldogs", score: 78,
        players: [
          { name: "Kanon Catchings", min: 35, pts: 22, reb: 11, ast: 3, stl: 3, blk: 0, to: 2, tpm: 5, fgm: 7, fga: 16, ftm: 3, fta: 4, composite: 10.1, zScores: { pts: 2.217, reb: 2.766, ast: 0.887, stl: 2.349, blk: -0.489, tpm: 3.35, fgImpact: -0.184, ftImpact: -0.034, to: -0.766 } },
          { name: "Kareem Stagg", min: 21, pts: 4, reb: 4, ast: 2, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -1.88, zScores: { pts: -0.495, reb: 0.308, ast: 0.338, stl: -0.719, blk: 0.818, tpm: 0.163, fgImpact: 0.076, ftImpact: -0.772, to: -1.594 } },
          { name: "James Scott", min: 32, pts: 5, reb: 10, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 3, composite: 0.81, zScores: { pts: -0.344, reb: 2.415, ast: -0.21, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 0.508, ftImpact: -1.914, to: 0.89 } },
          { name: "Marcus Millender", min: 32, pts: 17, reb: 7, ast: 2, stl: 3, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 12, ftm: 3, fta: 4, composite: 5.64, zScores: { pts: 1.464, reb: 1.362, ast: 0.338, stl: 2.349, blk: -0.489, tpm: 0.96, fgImpact: 0.454, ftImpact: -0.034, to: -0.766 } },
          { name: "Blue Cain", min: 32, pts: 20, reb: 7, ast: 2, stl: 0, blk: 0, to: 3, tpm: 4, fgm: 7, fga: 17, ftm: 2, fta: 2, composite: 3.57, zScores: { pts: 1.916, reb: 1.362, ast: 0.338, stl: -0.719, blk: -0.489, tpm: 2.554, fgImpact: -0.541, ftImpact: 0.738, to: -1.594 } },
          { name: "David Ugonna Ike", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Mading Kuany", min: 7, pts: 3, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.92, zScores: { pts: -0.646, reb: -0.746, ast: -0.759, stl: -0.719, blk: 0.818, tpm: 0.163, fgImpact: 0.076, ftImpact: 0, to: 0.89 } },
          { name: "Andrew Osasuyi", min: 7, pts: 2, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.52, zScores: { pts: -0.796, reb: -0.043, ast: -0.759, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: -0.281, ftImpact: 0, to: 0.89 } },
          { name: "Brady Dunlap", min: 17, pts: 3, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 8, ftm: 0, fta: 0, composite: -2.77, zScores: { pts: -0.646, reb: 0.308, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -2.066, ftImpact: 0, to: 0.89 } },
          { name: "Donovan Williams Jr.", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Freddie Dilione V", min: 15, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -6.07, zScores: { pts: -0.796, reb: -0.746, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.709, ftImpact: 0, to: -0.766 } }
        ]
      },
      home: {
        abbr: "UNC", name: "North Carolina Tar Heels", score: 70,
        players: [
          { name: "Jarin Stevenson", min: 23, pts: 4, reb: 7, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 1, composite: -1.6, zScores: { pts: -0.495, reb: 1.362, ast: -0.759, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: -0.919, ftImpact: -1.141, to: 0.89 } },
          { name: "Sayon Keita", min: 27, pts: 4, reb: 6, ast: 1, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 1.18, zScores: { pts: -0.495, reb: 1.01, ast: -0.21, stl: -0.719, blk: 2.125, tpm: -0.634, fgImpact: 0.865, ftImpact: 0, to: -0.766 } },
          { name: "Neo Avdalas", min: 23, pts: 14, reb: 2, ast: 3, stl: 2, blk: 1, to: 4, tpm: 0, fgm: 5, fga: 13, ftm: 4, fta: 5, composite: 0.24, zScores: { pts: 1.012, reb: -0.394, ast: 0.887, stl: 1.326, blk: 0.818, tpm: -0.634, fgImpact: -0.692, ftImpact: 0.335, to: -2.421 } },
          { name: "Matt Able", min: 31, pts: 8, reb: 2, ast: 3, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 12, ftm: 2, fta: 2, composite: -1.55, zScores: { pts: 0.108, reb: -0.394, ast: 0.887, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: -2.704, ftImpact: 0.738, to: 0.062 } },
          { name: "Terrence Brown", min: 34, pts: 21, reb: 3, ast: 1, stl: 4, blk: 1, to: 0, tpm: 4, fgm: 7, fga: 15, ftm: 3, fta: 4, composite: 9.59, zScores: { pts: 2.067, reb: -0.043, ast: -0.21, stl: 3.371, blk: 0.818, tpm: 2.554, fgImpact: 0.173, ftImpact: -0.034, to: 0.89 } },
          { name: "Alex Samodurov", min: 10, pts: 4, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.43, zScores: { pts: -0.495, reb: -0.394, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0.151, ftImpact: 0, to: 0.89 } },
          { name: "Maximo Adams", min: 23, pts: 4, reb: 11, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 8, ftm: 2, fta: 5, composite: -2.61, zScores: { pts: -0.495, reb: 2.766, ast: 0.338, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: -2.066, ftImpact: -2.686, to: 0.062 } },
          { name: "Isaiah Denis", min: 19, pts: 11, reb: 4, ast: 1, stl: 2, blk: 1, to: 1, tpm: 3, fgm: 3, fga: 9, ftm: 2, fta: 2, composite: 4.52, zScores: { pts: 0.56, reb: 0.308, ast: -0.21, stl: 1.326, blk: 0.818, tpm: 1.757, fgImpact: -0.844, ftImpact: 0.738, to: 0.062 } },
          { name: "Jaydon Young", min: 10, pts: 0, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -2.43, zScores: { pts: -1.098, reb: -0.394, ast: 0.887, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -1.071, ftImpact: 0, to: 0.062 } }
        ]
      }
    },
      {
      id: "401927363",
      line: "South Dakota Coyotes 72 @ Drake Bulldogs 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SDAK", name: "South Dakota Coyotes", score: 72,
        players: [

        ]
      },
      home: {
        abbr: "Drake", name: "Drake Bulldogs", score: 81,
        players: [
          { name: "Justin Burns", min: 34, pts: 3, reb: 7, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -3.51, zScores: { pts: -0.646, reb: 1.362, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.638, ftImpact: -0.772, to: -0.766 } },
          { name: "Jon Carroll", min: 34, pts: 26, reb: 10, ast: 1, stl: 5, blk: 1, to: 3, tpm: 0, fgm: 10, fga: 18, ftm: 6, fta: 13, composite: 3.71, zScores: { pts: 2.82, reb: 2.415, ast: -0.21, stl: 4.394, blk: 0.818, tpm: -0.634, fgImpact: 1.471, ftImpact: -5.775, to: -1.594 } },
          { name: "Dre Kindell", min: 33, pts: 18, reb: 0, ast: 1, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 11, ftm: 7, fta: 9, composite: 1.69, zScores: { pts: 1.615, reb: -1.097, ast: -0.21, stl: 1.326, blk: -0.489, tpm: 0.163, fgImpact: 0.022, ftImpact: 0.302, to: 0.062 } },
          { name: "Owen Larson", min: 38, pts: 15, reb: 1, ast: 4, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 11, ftm: 3, fta: 3, composite: 4.84, zScores: { pts: 1.163, reb: -0.746, ast: 1.436, stl: 1.326, blk: -0.489, tpm: 0.96, fgImpact: 0.022, ftImpact: 1.108, to: 0.062 } },
          { name: "Eli Shetlar", min: 31, pts: 10, reb: 5, ast: 1, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 4.8, zScores: { pts: 0.409, reb: 0.659, ast: -0.21, stl: 0.304, blk: 0.818, tpm: 0.96, fgImpact: 0.227, ftImpact: 0.738, to: 0.89 } },
          { name: "Griffen Goodbary", min: 10, pts: 2, reb: 8, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -1.95, zScores: { pts: -0.796, reb: 1.713, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.071, ftImpact: 0.738, to: 0.062 } },
          { name: "Bryson Bahl", min: 9, pts: 5, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 3, fta: 4, composite: -2.09, zScores: { pts: -0.344, reb: -1.097, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0.076, ftImpact: -0.034, to: 0.89 } },
          { name: "LJ Rush", min: 9, pts: 2, reb: 3, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -3.63, zScores: { pts: -0.796, reb: -0.043, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0.738, to: -1.594 } },
          { name: "Dothan Ijadimbola", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } }
        ]
      }
    },
      {
      id: "401929199",
      line: "Southern Miss Golden Eagles 65 @ Texas State Bobcats 85 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "USM", name: "Southern Miss Golden Eagles", score: 65,
        players: [

        ]
      },
      home: {
        abbr: "TxSt", name: "Texas State Bobcats", score: 85,
        players: [
          { name: "DJ Hall", min: 30, pts: 10, reb: 6, ast: 2, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 5, ftm: 6, fta: 7, composite: -0.81, zScores: { pts: 0.409, reb: 1.01, ast: 0.338, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.205, ftImpact: 1.074, to: -1.594 } },
          { name: "Paul Djobet", min: 31, pts: 12, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 2.53, zScores: { pts: 0.711, reb: -0.394, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 2.554, fgImpact: 1.017, ftImpact: 0, to: 0.062 } },
          { name: "Robert Fields", min: 24, pts: 5, reb: 6, ast: 0, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 0, fga: 0, ftm: 5, fta: 8, composite: -3.8, zScores: { pts: -0.344, reb: 1.01, ast: -0.759, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 0, ftImpact: -1.578, to: -1.594 } },
          { name: "Dimp Pernell", min: 23, pts: 7, reb: 2, ast: 1, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 6, ftm: 3, fta: 4, composite: -0.78, zScores: { pts: -0.043, reb: -0.394, ast: -0.21, stl: 2.349, blk: -0.489, tpm: -0.634, fgImpact: -0.562, ftImpact: -0.034, to: -0.766 } },
          { name: "Kaden Gumbs", min: 17, pts: 5, reb: 0, ast: 1, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.81, zScores: { pts: -0.344, reb: -1.097, ast: -0.21, stl: 0.304, blk: 0.818, tpm: 0.163, fgImpact: 0.151, ftImpact: 0, to: -1.594 } },
          { name: "Kole Grandison", min: 9, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.16, zScores: { pts: -0.646, reb: -0.394, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 0.076, ftImpact: 0, to: 0.062 } },
          { name: "Ronald Jessamy", min: 13, pts: 15, reb: 2, ast: 0, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 6, fga: 6, ftm: 3, fta: 3, composite: 5.57, zScores: { pts: 1.163, reb: -0.394, ast: -0.759, stl: 0.304, blk: 2.125, tpm: -0.634, fgImpact: 2.596, ftImpact: 1.108, to: 0.062 } },
          { name: "KJ Younger", min: 13, pts: 12, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 6, ftm: 3, fta: 5, composite: -2.29, zScores: { pts: 0.711, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 1.017, ftImpact: -1.175, to: 0.062 } },
          { name: "Ky Pernell", min: 6, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 1, composite: -2.1, zScores: { pts: -0.646, reb: -1.097, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.433, ftImpact: 0.369, to: 0.89 } },
          { name: "Quel'Ron House", min: 22, pts: 8, reb: 3, ast: 3, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 4, fta: 5, composite: 0.8, zScores: { pts: 0.108, reb: -0.043, ast: 0.887, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: -0.205, ftImpact: 0.335, to: -0.766 } },
          { name: "Caleb Steger", min: 12, pts: 5, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.65, zScores: { pts: -0.344, reb: -1.097, ast: -0.759, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: 0.508, ftImpact: 0, to: 0.062 } }
        ]
      }
    },
      {
      id: "401927380",
      line: "Texas Southern Tigers 78 @ Murray State Racers 99 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TXSO", name: "Texas Southern Tigers", score: 78,
        players: [

        ]
      },
      home: {
        abbr: "Mur", name: "Murray State Racers", score: 99,
        players: [
          { name: "Brigham Rogers", min: 26, pts: 16, reb: 10, ast: 2, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 7, fga: 9, ftm: 2, fta: 2, composite: 6.84, zScores: { pts: 1.313, reb: 2.415, ast: 0.338, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: 2.315, ftImpact: 0.738, to: -0.766 } },
          { name: "Talis Soulhac", min: 19, pts: 11, reb: 4, ast: 2, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 4, ftm: 4, fta: 6, composite: 0.75, zScores: { pts: 0.56, reb: 0.308, ast: 0.338, stl: 1.326, blk: -0.489, tpm: 0.163, fgImpact: 0.941, ftImpact: -0.806, to: -1.594 } },
          { name: "Roman Domon", min: 31, pts: 14, reb: 8, ast: 5, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 16, ftm: 9, fta: 10, composite: 1.14, zScores: { pts: 1.012, reb: 1.713, ast: 1.985, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -4.132, ftImpact: 2.182, to: -1.594 } },
          { name: "Brayden Shorter", min: 26, pts: 21, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 7, fgm: 7, fga: 13, ftm: 0, fta: 0, composite: 6.98, zScores: { pts: 2.067, reb: -0.394, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 4.944, fgImpact: 0.887, ftImpact: 0, to: 0.89 } },
          { name: "Lachlan Crate", min: 19, pts: 3, reb: 7, ast: 3, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -0.75, zScores: { pts: -0.646, reb: 1.362, ast: 0.887, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: -0.281, ftImpact: -0.772, to: -0.766 } },
          { name: "Jonas Boulefaa", min: 12, pts: 7, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 3, composite: -0.71, zScores: { pts: -0.043, reb: 0.308, ast: -0.759, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: 0.151, ftImpact: -0.403, to: 0.062 } },
          { name: "Pavle Nikolic", min: 13, pts: 6, reb: 9, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 4, fta: 4, composite: 3.76, zScores: { pts: -0.194, reb: 2.064, ast: -0.21, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: 0.076, ftImpact: 1.477, to: 0.062 } },
          { name: "Shon Tupuola", min: 2, pts: 2, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.51, zScores: { pts: -0.796, reb: -0.746, ast: -0.759, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 0.433, ftImpact: 0, to: 0.89 } },
          { name: "Dillon Butler", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Mathis Courbon", min: 11, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 2, composite: -7, zScores: { pts: -0.796, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.638, ftImpact: -2.283, to: 0.062 } },
          { name: "Ben Shtolzberg", min: 10, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 1, composite: -2.46, zScores: { pts: -0.646, reb: -0.746, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.281, ftImpact: 0.369, to: 0.89 } },
          { name: "Kaden Magwood", min: 8, pts: 4, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 7, ftm: 2, fta: 3, composite: -3.81, zScores: { pts: -0.495, reb: -0.043, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.709, ftImpact: -0.403, to: 0.89 } },
          { name: "Christian Jones", min: 21, pts: 10, reb: 4, ast: 2, stl: 3, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 3.25, zScores: { pts: 0.409, reb: 0.308, ast: 0.338, stl: 2.349, blk: -0.489, tpm: 0.96, fgImpact: 0.227, ftImpact: 0.738, to: -1.594 } },
          { name: "Navon Shabazz", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } }
        ]
      }
    },
      {
      id: "401927374",
      line: "Illinois State Redbirds 81 @ North Dakota State Bison 82 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "IlSt", name: "Illinois State Redbirds", score: 81,
        players: [
          { name: "Noah Cleveland", min: 20, pts: 0, reb: 5, ast: 0, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: 0.66, zScores: { pts: -1.098, reb: 0.659, ast: -0.759, stl: 0.304, blk: 2.125, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.062 } },
          { name: "Mason Klabo", min: 33, pts: 3, reb: 3, ast: 3, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: 2.4, zScores: { pts: -0.646, reb: -0.043, ast: 0.887, stl: 1.326, blk: 0.818, tpm: 0.163, fgImpact: -0.995, ftImpact: 0, to: 0.89 } },
          { name: "Johnny Kinziger", min: 43, pts: 11, reb: 2, ast: 4, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 4, fta: 4, composite: 3.85, zScores: { pts: 0.56, reb: -0.394, ast: 1.436, stl: 2.349, blk: -0.489, tpm: 0.163, fgImpact: -0.487, ftImpact: 1.477, to: -0.766 } },
          { name: "Demarion Burch", min: 17, pts: 12, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 4, fta: 4, composite: 1.17, zScores: { pts: 0.711, reb: -0.043, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 1.017, ftImpact: 1.477, to: 0.062 } },
          { name: "Malik Messina-Moore", min: 40, pts: 26, reb: 2, ast: 4, stl: 3, blk: 0, to: 3, tpm: 2, fgm: 7, fga: 17, ftm: 10, fta: 12, composite: 5.96, zScores: { pts: 2.82, reb: -0.394, ast: 1.436, stl: 2.349, blk: -0.489, tpm: 0.96, fgImpact: -0.541, ftImpact: 1.409, to: -1.594 } },
          { name: "Nick Allen", min: 12, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.91, zScores: { pts: -0.495, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.865, ftImpact: 0, to: 0.062 } },
          { name: "Louie Semona III", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.74, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.062 } },
          { name: "Chase Walker", min: 28, pts: 12, reb: 7, ast: 3, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 5, fga: 10, ftm: 1, fta: 2, composite: 2.06, zScores: { pts: 0.711, reb: 1.362, ast: 0.887, stl: -0.719, blk: 0.818, tpm: 0.163, fgImpact: 0.379, ftImpact: -0.772, to: -0.766 } },
          { name: "Zaxton King", min: 11, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -0.19, zScores: { pts: -0.194, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: 0.865, ftImpact: 0, to: 0.89 } },
          { name: "Deng Garang", min: 19, pts: 7, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -1.29, zScores: { pts: -0.043, reb: -0.043, ast: -0.759, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -0.487, ftImpact: 0, to: 0.062 } }
        ]
      },
      home: {
        abbr: "NDSU", name: "North Dakota State Bison", score: 82,
        players: [

        ]
      }
    },
      {
      id: "401921026",
      line: "Georgia Southern Eagles 70 @ UCF Knights 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "GASO", name: "Georgia Southern Eagles", score: 70,
        players: [

        ]
      },
      home: {
        abbr: "UCF", name: "UCF Knights", score: 84,
        players: [
          { name: "Isaiah Malone", min: 22, pts: 12, reb: 5, ast: 0, stl: 0, blk: 3, to: 3, tpm: 2, fgm: 4, fga: 6, ftm: 2, fta: 2, composite: 4.45, zScores: { pts: 0.711, reb: 0.659, ast: -0.759, stl: -0.719, blk: 3.432, tpm: 0.96, fgImpact: 1.017, ftImpact: 0.738, to: -1.594 } },
          { name: "John Bol", min: 21, pts: 7, reb: 11, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 3, fta: 4, composite: 0.85, zScores: { pts: -0.043, reb: 2.766, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0.508, ftImpact: -0.034, to: -0.766 } },
          { name: "Arturo Dean", min: 20, pts: 21, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 9, fga: 12, ftm: 2, fta: 3, composite: 4.12, zScores: { pts: 2.067, reb: -0.746, ast: 0.338, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: 2.823, ftImpact: -0.403, to: 0.062 } },
          { name: "Riley Kugel", min: 24, pts: 6, reb: 7, ast: 6, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 0.61, zScores: { pts: -0.194, reb: 1.362, ast: 2.534, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.487, ftImpact: 0, to: -0.766 } },
          { name: "Dior Johnson", min: 35, pts: 25, reb: 4, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 10, fga: 17, ftm: 5, fta: 6, composite: 7.02, zScores: { pts: 2.67, reb: 0.308, ast: 1.436, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 1.828, ftImpact: 0.705, to: 0.89 } },
          { name: "Lewis Walker", min: 20, pts: 6, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: -2.53, zScores: { pts: -0.194, reb: 0.308, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.562, ftImpact: 0.738, to: -0.766 } },
          { name: "Churchill Abass", min: 17, pts: 5, reb: 5, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 1, composite: 1.15, zScores: { pts: -0.344, reb: 0.659, ast: -0.759, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 0.865, ftImpact: 0.369, to: 0.89 } },
          { name: "Elijah Hulsewe", min: 2, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.21, zScores: { pts: -1.098, reb: -0.043, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Jahda Swann", min: 10, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -3.88, zScores: { pts: -1.098, reb: -0.746, ast: 0.338, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.428, ftImpact: 0, to: 0.89 } },
          { name: "Carmelo Pacheco", min: 15, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.1, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.714, ftImpact: 0, to: 0.062 } },
          { name: "Cayden Vasko", min: 14, pts: 2, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.15, zScores: { pts: -0.796, reb: -0.746, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0.076, ftImpact: 0, to: 0.89 } }
        ]
      }
    },
      {
      id: "401919049",
      line: "Milwaukee Panthers 64 @ TCU Horned Frogs 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MILW", name: "Milwaukee Panthers", score: 64,
        players: [

        ]
      },
      home: {
        abbr: "TCU", name: "TCU Horned Frogs", score: 76,
        players: [
          { name: "DJ Thomas", min: 28, pts: 15, reb: 4, ast: 0, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 3, fga: 10, ftm: 9, fta: 9, composite: 3.86, zScores: { pts: 1.163, reb: 0.308, ast: -0.759, stl: 0.304, blk: 2.125, tpm: -0.634, fgImpact: -1.201, ftImpact: 3.323, to: -0.766 } },
          { name: "Xavier Edmonds", min: 28, pts: 18, reb: 13, ast: 1, stl: 2, blk: 3, to: 1, tpm: 0, fgm: 6, fga: 15, ftm: 6, fta: 8, composite: 8.38, zScores: { pts: 1.615, reb: 3.469, ast: -0.21, stl: 1.326, blk: 3.432, tpm: -0.634, fgImpact: -0.616, ftImpact: -0.068, to: 0.062 } },
          { name: "Tanner Toolson", min: 27, pts: 6, reb: 5, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 1, fta: 4, composite: -3.04, zScores: { pts: -0.194, reb: 0.659, ast: -0.759, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -0.562, ftImpact: -3.055, to: 0.89 } },
          { name: "Brock Harding", min: 34, pts: 13, reb: 4, ast: 7, stl: 3, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 8, ftm: 4, fta: 6, composite: 4.18, zScores: { pts: 0.861, reb: 0.308, ast: 3.083, stl: 2.349, blk: -0.489, tpm: 0.163, fgImpact: 0.303, ftImpact: -0.806, to: -1.594 } },
          { name: "Micah Robinson", min: 34, pts: 12, reb: 7, ast: 2, stl: 2, blk: 1, to: 3, tpm: 0, fgm: 6, fga: 14, ftm: 0, fta: 1, composite: 0.93, zScores: { pts: 0.711, reb: 1.362, ast: 0.338, stl: 1.326, blk: 0.818, tpm: -0.634, fgImpact: -0.259, ftImpact: -1.141, to: -1.594 } },
          { name: "Ryan Hunt", min: 11, pts: 0, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.67, zScores: { pts: -1.098, reb: 0.308, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.714, ftImpact: 0, to: 0.89 } },
          { name: "Trent Lincoln", min: 11, pts: 1, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -4.46, zScores: { pts: -0.947, reb: -0.394, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: -0.772, to: 0.062 } },
          { name: "Gavin Sykes", min: 27, pts: 11, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 8, ftm: 5, fta: 6, composite: -0.65, zScores: { pts: 0.56, reb: 0.308, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: -1.276, ftImpact: 0.705, to: 0.062 } }
        ]
      }
    },
      {
      id: "401906804",
      line: "Fairleigh Dickinson Knights 58 @ Oklahoma Sooners 74 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "FDU", name: "Fairleigh Dickinson Knights", score: 58,
        players: [

        ]
      },
      home: {
        abbr: "Okla", name: "Oklahoma Sooners", score: 74,
        players: [
          { name: "Derrion Reid", min: 27, pts: 14, reb: 8, ast: 2, stl: 2, blk: 1, to: 1, tpm: 2, fgm: 4, fga: 8, ftm: 4, fta: 4, composite: 8.01, zScores: { pts: 1.012, reb: 1.713, ast: 0.338, stl: 1.326, blk: 0.818, tpm: 0.96, fgImpact: 0.303, ftImpact: 1.477, to: 0.062 } },
          { name: "Khani Rooths", min: 21, pts: 1, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -2.87, zScores: { pts: -0.947, reb: -0.394, ast: -0.759, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: -0.357, ftImpact: -0.772, to: 0.89 } },
          { name: "Duke Brennan", min: 22, pts: 8, reb: 8, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 2, fta: 4, composite: -1.18, zScores: { pts: 0.108, reb: 1.713, ast: -0.21, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.487, ftImpact: -1.545, to: 0.062 } },
          { name: "Xzayvier Brown", min: 32, pts: 10, reb: 3, ast: 7, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 9, ftm: 1, fta: 3, composite: 2.35, zScores: { pts: 0.409, reb: -0.043, ast: 3.083, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -0.054, ftImpact: -1.914, to: 0.89 } },
          { name: "Pop Isaacs", min: 29, pts: 17, reb: 5, ast: 2, stl: 3, blk: 0, to: 1, tpm: 5, fgm: 5, fga: 10, ftm: 2, fta: 2, composite: 8.85, zScores: { pts: 1.464, reb: 0.659, ast: 0.338, stl: 2.349, blk: -0.489, tpm: 3.35, fgImpact: 0.379, ftImpact: 0.738, to: 0.062 } },
          { name: "Gage Mayfield", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.62, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.714, ftImpact: 0, to: 0.89 } },
          { name: "Kai Rogers", min: 18, pts: 0, reb: 2, ast: 0, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: 0, zScores: { pts: -1.098, reb: -0.394, ast: -0.759, stl: -0.719, blk: 3.432, tpm: -0.634, fgImpact: -0.714, ftImpact: 0, to: 0.89 } },
          { name: "Ben Moser", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Quincy Wadley", min: 18, pts: 8, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: -1.73, zScores: { pts: 0.108, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.227, ftImpact: 0.738, to: 0.89 } },
          { name: "B.J. Edwards", min: 26, pts: 16, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 9, ftm: 7, fta: 7, composite: 3.83, zScores: { pts: 1.313, reb: -0.394, ast: 0.338, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -0.054, ftImpact: 2.585, to: 0.062 } },
          { name: "Tyler Hendricks", min: 3, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.36, zScores: { pts: -1.098, reb: -1.097, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } }
        ]
      }
    },
      {
      id: "401921728",
      line: "Stanford Cardinal 68 @ UNLV Rebels 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Stan", name: "Stanford Cardinal", score: 68,
        players: [
          { name: "Nick Townsend", min: 27, pts: 11, reb: 6, ast: 2, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 6, ftm: 1, fta: 2, composite: 1.55, zScores: { pts: 0.56, reb: 1.01, ast: 0.338, stl: 1.326, blk: -0.489, tpm: -0.634, fgImpact: 1.807, ftImpact: -0.772, to: -1.594 } },
          { name: "Austin Maurer", min: 33, pts: 20, reb: 9, ast: 0, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 10, fga: 11, ftm: 0, fta: 0, composite: 9.31, zScores: { pts: 1.916, reb: 2.064, ast: -0.759, stl: 2.349, blk: -0.489, tpm: -0.634, fgImpact: 3.97, ftImpact: 0, to: 0.89 } },
          { name: "Aziz Olajuwon", min: 30, pts: 7, reb: 4, ast: 1, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 11, ftm: 0, fta: 0, composite: -1.27, zScores: { pts: -0.043, reb: 0.308, ast: -0.21, stl: 1.326, blk: -0.489, tpm: 0.163, fgImpact: -1.558, ftImpact: 0, to: -0.766 } },
          { name: "Isaiah Rogers", min: 9, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -5.43, zScores: { pts: -0.796, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.995, ftImpact: 0, to: 0.062 } },
          { name: "Julius Price", min: 34, pts: 16, reb: 0, ast: 0, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 14, ftm: 6, fta: 7, composite: -3.15, zScores: { pts: 1.313, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: -1.839, ftImpact: 1.074, to: -1.594 } },
          { name: "Donavin Young", min: 13, pts: 5, reb: 4, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 5, fta: 6, composite: -0.02, zScores: { pts: -0.344, reb: 0.308, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0.705, to: 0.89 } },
          { name: "Aidan Cammann", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Evan Stinson", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Elias Obenyah", min: 23, pts: 4, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: 0.16, zScores: { pts: -0.495, reb: -0.043, ast: 0.887, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.995, ftImpact: 0.738, to: 0.89 } },
          { name: "Anthony Batson Jr.", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Christian Bliss", min: 19, pts: 3, reb: 2, ast: 7, stl: 4, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 6, ftm: 3, fta: 5, composite: 1.04, zScores: { pts: -0.646, reb: -0.394, ast: 3.083, stl: 3.371, blk: -0.489, tpm: -0.634, fgImpact: -2.142, ftImpact: -1.175, to: 0.062 } }
        ]
      },
      home: {
        abbr: "UNLV", name: "UNLV Rebels", score: 76,
        players: [
          { name: "Tyrin Jones", min: 32, pts: 16, reb: 6, ast: 2, stl: 0, blk: 2, to: 1, tpm: 1, fgm: 6, fga: 9, ftm: 3, fta: 6, composite: 3.5, zScores: { pts: 1.313, reb: 1.01, ast: 0.338, stl: -0.719, blk: 2.125, tpm: 0.163, fgImpact: 1.525, ftImpact: -2.317, to: 0.062 } },
          { name: "Jeremy Foumena", min: 17, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.73, zScores: { pts: -0.495, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.865, ftImpact: 0, to: 0.89 } },
          { name: "Cam Miles", min: 36, pts: 17, reb: 3, ast: 2, stl: 2, blk: 0, to: 4, tpm: 4, fgm: 4, fga: 9, ftm: 5, fta: 6, composite: 3.38, zScores: { pts: 1.464, reb: -0.043, ast: 0.338, stl: 1.326, blk: -0.489, tpm: 2.554, fgImpact: -0.054, ftImpact: 0.705, to: -2.421 } },
          { name: "Dontrez Williams", min: 23, pts: 6, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.61, zScores: { pts: -0.194, reb: -0.394, ast: -0.21, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0.941, ftImpact: 0, to: 0.062 } },
          { name: "Sebastian Mack", min: 31, pts: 15, reb: 5, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 12, ftm: 4, fta: 5, composite: 2.83, zScores: { pts: 1.163, reb: 0.659, ast: 1.985, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -0.335, ftImpact: 0.335, to: 0.062 } },
          { name: "Jackson Kiss", min: 23, pts: 8, reb: 3, ast: 2, stl: 0, blk: 4, to: 4, tpm: 0, fgm: 2, fga: 3, ftm: 4, fta: 4, composite: 3.35, zScores: { pts: 0.108, reb: -0.043, ast: 0.338, stl: -0.719, blk: 4.739, tpm: -0.634, fgImpact: 0.508, ftImpact: 1.477, to: -2.421 } },
          { name: "MJ Thomas", min: 8, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -4.88, zScores: { pts: -0.947, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: -0.772, to: 0.89 } },
          { name: "Issac Williamson", min: 21, pts: 7, reb: 5, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 1, composite: -0.51, zScores: { pts: -0.043, reb: 0.659, ast: 0.887, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 0.941, ftImpact: -1.141, to: -0.766 } },
          { name: "Kota Suttle Jr.", min: 9, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.95, zScores: { pts: -0.796, reb: -0.043, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.433, ftImpact: 0, to: 0.062 } }
        ]
      }
    },
      {
      id: "401917980",
      line: "UL Monroe Warhawks 62 @ Arizona State Sun Devils 92 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ULM", name: "UL Monroe Warhawks", score: 62,
        players: [

        ]
      },
      home: {
        abbr: "AzSt", name: "Arizona State Sun Devils", score: 92,
        players: [
          { name: "Paulius Murauskas", min: 30, pts: 31, reb: 13, ast: 3, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 11, fga: 20, ftm: 6, fta: 8, composite: 10.22, zScores: { pts: 3.574, reb: 3.469, ast: 0.887, stl: 0.304, blk: -0.489, tpm: 1.757, fgImpact: 1.547, ftImpact: -0.068, to: -0.766 } },
          { name: "Ben Defty", min: 23, pts: 7, reb: 6, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: -0.26, zScores: { pts: -0.043, reb: 1.01, ast: -0.21, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 0.227, ftImpact: -0.772, to: 0.062 } },
          { name: "JRob Croy", min: 27, pts: 8, reb: 2, ast: 4, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 2.26, zScores: { pts: 0.108, reb: -0.394, ast: 1.436, stl: -0.719, blk: 0.818, tpm: 0.96, fgImpact: -0.844, ftImpact: 0, to: 0.89 } },
          { name: "Joel Foxwell", min: 29, pts: 16, reb: 4, ast: 9, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 13, ftm: 0, fta: 0, composite: 8.33, zScores: { pts: 1.313, reb: 0.308, ast: 4.18, stl: 0.304, blk: -0.489, tpm: 2.554, fgImpact: 0.098, ftImpact: 0, to: 0.062 } },
          { name: "Dillan Shaw", min: 29, pts: 12, reb: 8, ast: 2, stl: 2, blk: 2, to: 1, tpm: 2, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 7.92, zScores: { pts: 0.711, reb: 1.713, ast: 0.338, stl: 1.326, blk: 2.125, tpm: 0.96, fgImpact: -0.054, ftImpact: 0.738, to: 0.062 } },
          { name: "Ajak Nyuon", min: 10, pts: 6, reb: 3, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 1, composite: 1.23, zScores: { pts: -0.194, reb: -0.043, ast: -0.21, stl: -0.719, blk: 0.818, tpm: 0.96, fgImpact: 0.865, ftImpact: -1.141, to: 0.89 } },
          { name: "Filip Malesevic", min: 10, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.2, zScores: { pts: -1.098, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Nate Garcia", min: 7, pts: 4, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -0.48, zScores: { pts: -0.495, reb: 0.308, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.865, ftImpact: 0, to: 0.89 } },
          { name: "Jokubas Rudaitis", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.62, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.714, ftImpact: 0, to: 0.89 } },
          { name: "Vijay Wallace", min: 8, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -6.28, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.071, ftImpact: 0, to: -0.766 } },
          { name: "Bryce Ford", min: 21, pts: 8, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -0.15, zScores: { pts: 0.108, reb: -0.394, ast: 0.338, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: -0.844, ftImpact: 0, to: 0.89 } }
        ]
      }
    },
      {
      id: "401911014",
      line: "Ball State Cardinals 65 @ SMU Mustangs 90 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BALL", name: "Ball State Cardinals", score: 65,
        players: [

        ]
      },
      home: {
        abbr: "SMU", name: "SMU Mustangs", score: 90,
        players: [
          { name: "Jermaine O'Neal Jr.", min: 26, pts: 13, reb: 5, ast: 1, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 7, fta: 8, composite: 5.38, zScores: { pts: 0.861, reb: 0.659, ast: -0.21, stl: 1.326, blk: 0.818, tpm: -0.634, fgImpact: 0.227, ftImpact: 1.443, to: 0.89 } },
          { name: "Jaden Toombs", min: 23, pts: 11, reb: 3, ast: 1, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 5, fga: 6, ftm: 1, fta: 2, composite: 0.24, zScores: { pts: 0.56, reb: -0.043, ast: -0.21, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: 1.807, ftImpact: -0.772, to: -1.594 } },
          { name: "David Terrell Jr.", min: 24, pts: 16, reb: 1, ast: 7, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 9, ftm: 4, fta: 4, composite: 4.02, zScores: { pts: 1.313, reb: -0.746, ast: 3.083, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: 0.736, ftImpact: 1.477, to: -1.594 } },
          { name: "Oziyah Sellers", min: 29, pts: 21, reb: 6, ast: 2, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 8, ftm: 7, fta: 7, composite: 9.33, zScores: { pts: 2.067, reb: 1.01, ast: 0.338, stl: -0.719, blk: -0.489, tpm: 2.554, fgImpact: 1.093, ftImpact: 2.585, to: 0.89 } },
          { name: "Jakub Szumert", min: 22, pts: 10, reb: 9, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 7, fta: 8, composite: 2.84, zScores: { pts: 0.409, reb: 2.064, ast: -0.759, stl: -0.719, blk: 0.818, tpm: 0.163, fgImpact: -0.638, ftImpact: 1.443, to: 0.062 } },
          { name: "Billy White III", min: 17, pts: 3, reb: 2, ast: 2, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 1, composite: -0.42, zScores: { pts: -0.646, reb: -0.394, ast: 0.338, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: -0.638, ftImpact: 0.369, to: 0.062 } },
          { name: "Johan Munch", min: 12, pts: 6, reb: 8, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 4, fta: 5, composite: 0.81, zScores: { pts: -0.194, reb: 1.713, ast: -0.759, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: -0.638, ftImpact: 0.335, to: 0.89 } },
          { name: "Nic Codie", min: 10, pts: 0, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.86, zScores: { pts: -1.098, reb: 0.659, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.714, ftImpact: 0, to: 0.89 } },
          { name: "Nigel Walls", min: 2, pts: 0, reb: 0, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.58, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Jaylin Stewart", min: 8, pts: 7, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -0.26, zScores: { pts: -0.043, reb: -0.746, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 0.151, ftImpact: 0.738, to: 0.89 } },
          { name: "Jacob Patrick", min: 10, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Cameron Lomax", min: 13, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 3, fta: 4, composite: -4.56, zScores: { pts: -0.646, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.428, ftImpact: -0.034, to: 0.89 } },
          { name: "Gehrig Normand", min: 4, pts: 0, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.16, zScores: { pts: -1.098, reb: -1.097, ast: 0.338, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } }
        ]
      }
    },
      {
      id: "401909503",
      line: "DePaul Blue Demons 67 @ Northwestern Wildcats 47 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DeP", name: "DePaul Blue Demons", score: 67,
        players: [
          { name: "Fabian Flores", min: 21, pts: 0, reb: 8, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -1.42, zScores: { pts: -1.098, reb: 1.713, ast: 0.338, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: -1.071, ftImpact: 0, to: -0.766 } },
          { name: "Ade Popoola", min: 25, pts: 9, reb: 6, ast: 1, stl: 2, blk: 0, to: 3, tpm: 3, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: 0.86, zScores: { pts: 0.259, reb: 1.01, ast: -0.21, stl: 1.326, blk: -0.489, tpm: 1.757, fgImpact: -1.201, ftImpact: 0, to: -1.594 } },
          { name: "Kruz McClure", min: 32, pts: 18, reb: 3, ast: 4, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 15, ftm: 2, fta: 2, composite: 3.73, zScores: { pts: 1.615, reb: -0.043, ast: 1.436, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: 0.173, ftImpact: 0.738, to: 0.062 } },
          { name: "Koree Cotton", min: 34, pts: 15, reb: 6, ast: 1, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 6, fga: 9, ftm: 1, fta: 2, composite: 4.03, zScores: { pts: 1.163, reb: 1.01, ast: -0.21, stl: 0.304, blk: 0.818, tpm: 0.96, fgImpact: 1.525, ftImpact: -0.772, to: -0.766 } },
          { name: "Layden Blocker", min: 28, pts: 5, reb: 3, ast: 0, stl: 2, blk: 3, to: 1, tpm: 1, fgm: 1, fga: 8, ftm: 2, fta: 2, composite: 2.51, zScores: { pts: -0.344, reb: -0.043, ast: -0.759, stl: 1.326, blk: 3.432, tpm: 0.163, fgImpact: -2.066, ftImpact: 0.738, to: 0.062 } },
          { name: "Theo Pierre-Justin", min: 3, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.03, zScores: { pts: -1.098, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.062 } },
          { name: "Magoon Gwath", min: 12, pts: 6, reb: 6, ast: 0, stl: 1, blk: 3, to: 1, tpm: 1, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: 4.11, zScores: { pts: -0.194, reb: 1.01, ast: -0.759, stl: 0.304, blk: 3.432, tpm: 0.163, fgImpact: 0.865, ftImpact: -0.772, to: 0.062 } },
          { name: "Wilson Jacques", min: 6, pts: 0, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.9, zScores: { pts: -1.098, reb: -0.394, ast: -0.759, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Noah Meeusen", min: 24, pts: 9, reb: 5, ast: 6, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 5, ftm: 6, fta: 6, composite: 3.06, zScores: { pts: 0.259, reb: 0.659, ast: 2.534, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -0.995, ftImpact: 2.215, to: -1.594 } },
          { name: "Kahmare Holmes", min: 15, pts: 5, reb: 1, ast: 0, stl: 1, blk: 2, to: 2, tpm: 1, fgm: 1, fga: 7, ftm: 2, fta: 2, composite: -0.99, zScores: { pts: -0.344, reb: -0.746, ast: -0.759, stl: 0.304, blk: 2.125, tpm: 0.163, fgImpact: -1.709, ftImpact: 0.738, to: -0.766 } }
        ]
      },
      home: {
        abbr: "NW", name: "Northwestern Wildcats", score: 47,
        players: [
          { name: "Okku Federiko", min: 25, pts: 1, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -5.84, zScores: { pts: -0.947, reb: -0.043, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.714, ftImpact: -0.772, to: -0.766 } },
          { name: "Jack Karasinski", min: 24, pts: 8, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 5, fta: 6, composite: -1.3, zScores: { pts: 0.108, reb: -0.394, ast: -0.759, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -0.995, ftImpact: 0.705, to: 0.062 } },
          { name: "Angelo Ciaravino", min: 37, pts: 5, reb: 7, ast: 1, stl: 4, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 8, ftm: 1, fta: 4, composite: -2.04, zScores: { pts: -0.344, reb: 1.362, ast: -0.21, stl: 3.371, blk: -0.489, tpm: -0.634, fgImpact: -1.276, ftImpact: -3.055, to: -0.766 } },
          { name: "Jake West", min: 37, pts: 20, reb: 2, ast: 1, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 7, fga: 17, ftm: 4, fta: 4, composite: 0.41, zScores: { pts: 1.916, reb: -0.394, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: -0.541, ftImpact: 1.477, to: -1.594 } },
          { name: "LA Pratt", min: 35, pts: 10, reb: 6, ast: 2, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 5, fga: 13, ftm: 0, fta: 0, composite: -2.17, zScores: { pts: 0.409, reb: 1.01, ast: 0.338, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.692, ftImpact: 0, to: -2.421 } },
          { name: "Ryan Soulis", min: 7, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.54, zScores: { pts: -1.098, reb: -1.097, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.062 } },
          { name: "Colin Smith", min: 9, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Symon Ghai", min: 8, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.2, zScores: { pts: -1.098, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Phoenix Gill", min: 18, pts: 3, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -3.23, zScores: { pts: -0.646, reb: -0.043, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -1.352, ftImpact: 0, to: 0.062 } }
        ]
      }
    },
      {
      id: "401906794",
      line: "Xavier Musketeers 81 @ Mississippi State Bulldogs 63 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Xav", name: "Xavier Musketeers", score: 81,
        players: [
          { name: "Filip Borovicanin", min: 27, pts: 7, reb: 1, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 1, fta: 3, composite: -2.23, zScores: { pts: -0.043, reb: -0.746, ast: 0.338, stl: 1.326, blk: -0.489, tpm: -0.634, fgImpact: -0.13, ftImpact: -1.914, to: 0.062 } },
          { name: "Jovan Milicevic", min: 28, pts: 12, reb: 3, ast: 0, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 8, ftm: 6, fta: 8, composite: 0.42, zScores: { pts: 0.711, reb: -0.043, ast: -0.759, stl: 1.326, blk: -0.489, tpm: 0.96, fgImpact: -1.276, ftImpact: -0.068, to: 0.062 } },
          { name: "Mike Nwoko", min: 15, pts: 4, reb: 6, ast: 1, stl: 1, blk: 0, to: 5, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -3.31, zScores: { pts: -0.495, reb: 1.01, ast: -0.21, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.281, ftImpact: 0.738, to: -3.249 } },
          { name: "Tru Washington", min: 33, pts: 21, reb: 8, ast: 4, stl: 3, blk: 0, to: 0, tpm: 2, fgm: 8, fga: 14, ftm: 3, fta: 6, composite: 7.93, zScores: { pts: 2.067, reb: 1.713, ast: 1.436, stl: 2.349, blk: -0.489, tpm: 0.96, fgImpact: 1.32, ftImpact: -2.317, to: 0.89 } },
          { name: "Chance Westry", min: 18, pts: 3, reb: 3, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.13, zScores: { pts: -0.646, reb: -0.043, ast: 0.338, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -0.995, ftImpact: 0, to: -0.766 } },
          { name: "Rolyns Aligbe", min: 12, pts: 2, reb: 6, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 2, fta: 2, composite: -0.21, zScores: { pts: -0.796, reb: 1.01, ast: -0.759, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: -1.785, ftImpact: 0.738, to: 0.89 } },
          { name: "Gabriel Pozzato", min: 12, pts: 9, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 3, fga: 4, ftm: 1, fta: 1, composite: 1.19, zScores: { pts: 0.259, reb: -0.746, ast: -0.759, stl: -0.719, blk: 0.818, tpm: 0.96, fgImpact: 0.941, ftImpact: 0.369, to: 0.062 } },
          { name: "Nikos Chitikoudis", min: 25, pts: 11, reb: 6, ast: 1, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 5, fta: 9, composite: -0.98, zScores: { pts: 0.56, reb: 1.01, ast: -0.21, stl: 1.326, blk: -0.489, tpm: -0.634, fgImpact: 0.941, ftImpact: -2.72, to: -0.766 } },
          { name: "Ruben Dominguez", min: 9, pts: 9, reb: 0, ast: 0, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 3, ftm: 3, fta: 3, composite: 0.03, zScores: { pts: 0.259, reb: -1.097, ast: -0.759, stl: 0.304, blk: -0.489, tpm: 0.96, fgImpact: 0.508, ftImpact: 1.108, to: -0.766 } },
          { name: "Kalek House", min: 21, pts: 3, reb: 4, ast: 3, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: 1.02, zScores: { pts: -0.646, reb: 0.308, ast: 0.887, stl: 0.304, blk: 0.818, tpm: 0.163, fgImpact: -1.709, ftImpact: 0, to: 0.89 } }
        ]
      },
      home: {
        abbr: "MissSt", name: "Mississippi State Bulldogs", score: 63,
        players: [
          { name: "Thomas Bassong", min: 19, pts: 2, reb: 5, ast: 1, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 1, composite: -3.12, zScores: { pts: -0.796, reb: 0.659, ast: -0.21, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: -1.352, ftImpact: -1.141, to: -0.766 } },
          { name: "Kimani Hamilton", min: 23, pts: 3, reb: 4, ast: 0, stl: 2, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: 0.84, zScores: { pts: -0.646, reb: 0.308, ast: -0.759, stl: 1.326, blk: 2.125, tpm: -0.634, fgImpact: -0.995, ftImpact: -0.772, to: 0.89 } },
          { name: "ND Okafor", min: 20, pts: 6, reb: 6, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -0.47, zScores: { pts: -0.194, reb: 1.01, ast: -0.21, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 0.227, ftImpact: 0, to: -0.766 } },
          { name: "RJ Johnson", min: 30, pts: 11, reb: 2, ast: 2, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 4, fga: 11, ftm: 3, fta: 4, composite: -3.54, zScores: { pts: 0.56, reb: -0.394, ast: 0.338, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.768, ftImpact: -0.034, to: -2.421 } },
          { name: "Josh Hubbard", min: 33, pts: 12, reb: 4, ast: 3, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 4, fga: 12, ftm: 2, fta: 2, composite: -1.15, zScores: { pts: 0.711, reb: 0.308, ast: 0.887, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: -1.125, ftImpact: 0.738, to: -2.421 } },
          { name: "Kendyl Sanders", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -5.33, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -1.428, ftImpact: 0, to: 0.89 } },
          { name: "Tristan Reed", min: 18, pts: 6, reb: 7, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 1, composite: -0.62, zScores: { pts: -0.194, reb: 1.362, ast: -0.759, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 0.584, ftImpact: -1.141, to: 0.062 } },
          { name: "Jalyn Collingwood", min: 12, pts: 3, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 3, fta: 6, composite: -5.6, zScores: { pts: -0.646, reb: 0.308, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -1.428, ftImpact: -2.317, to: 0.062 } },
          { name: "Willie Burnett III", min: 11, pts: 9, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 6, fta: 6, composite: -1.13, zScores: { pts: 0.259, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -0.638, ftImpact: 2.215, to: -0.766 } },
          { name: "Tajuan Simpkins", min: 13, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.81, zScores: { pts: -0.495, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.205, ftImpact: 0, to: 0.89 } },
          { name: "King Grace", min: 15, pts: 7, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -1.24, zScores: { pts: -0.043, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 0.941, ftImpact: 0, to: 0.062 } },
          { name: "Ashton Magee", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } }
        ]
      }
    },
      {
      id: "401925739",
      line: "Mississippi Valley State Delta Devils 65 @ Oregon State Beavers 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MVSU", name: "Mississippi Valley State Delta Devils", score: 65,
        players: [

        ]
      },
      home: {
        abbr: "OrSt", name: "Oregon State Beavers", score: 81,
        players: [
          { name: "DeShawn Gory", min: 28, pts: 12, reb: 7, ast: 5, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 11, ftm: 2, fta: 2, composite: 5.56, zScores: { pts: 0.711, reb: 1.362, ast: 1.985, stl: 1.326, blk: 0.818, tpm: -0.634, fgImpact: 0.022, ftImpact: 0.738, to: -0.766 } },
          { name: "Xavion Staton", min: 13, pts: 3, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -2.18, zScores: { pts: -0.646, reb: -0.746, ast: -0.759, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 0.076, ftImpact: 0.369, to: 0.062 } },
          { name: "Dennis Evans", min: 15, pts: 3, reb: 8, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 3, fta: 4, composite: 1.11, zScores: { pts: -0.646, reb: 1.713, ast: -0.759, stl: -0.719, blk: 2.125, tpm: -0.634, fgImpact: 0, ftImpact: -0.034, to: 0.062 } },
          { name: "Josiah Lake II", min: 29, pts: 7, reb: 6, ast: 6, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 3.61, zScores: { pts: -0.043, reb: 1.01, ast: 2.534, stl: 1.326, blk: -0.489, tpm: 0.163, fgImpact: -0.13, ftImpact: 0, to: -0.766 } },
          { name: "Daniel Freitag", min: 24, pts: 17, reb: 2, ast: 3, stl: 1, blk: 1, to: 2, tpm: 3, fgm: 3, fga: 5, ftm: 8, fta: 8, composite: 7.61, zScores: { pts: 1.464, reb: -0.394, ast: 0.887, stl: 0.304, blk: 0.818, tpm: 1.757, fgImpact: 0.584, ftImpact: 2.954, to: -0.766 } },
          { name: "Kahu Treacher", min: 2, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -3.79, zScores: { pts: -0.646, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.433, ftImpact: -0.772, to: 0.89 } },
          { name: "Peteris Pinnis", min: 11, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.82, zScores: { pts: -0.796, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.433, ftImpact: 0, to: 0.89 } },
          { name: "Jackson Rasmussen", min: 14, pts: 3, reb: 4, ast: 1, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.33, zScores: { pts: -0.646, reb: 0.308, ast: -0.21, stl: -0.719, blk: 0.818, tpm: 0.163, fgImpact: -0.281, ftImpact: 0, to: -0.766 } },
          { name: "Yabi Aklog", min: 3, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.36, zScores: { pts: -1.098, reb: -1.097, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Jemai Lake", min: 16, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 1, composite: -6.51, zScores: { pts: -1.098, reb: -1.097, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: -1.141, to: -0.766 } },
          { name: "Chris Johnson", min: 21, pts: 13, reb: 3, ast: 2, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 5, fga: 13, ftm: 1, fta: 2, composite: -2.98, zScores: { pts: 0.861, reb: -0.043, ast: 0.338, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: -0.692, ftImpact: -0.772, to: -2.421 } },
          { name: "Legend Smiley", min: 24, pts: 18, reb: 2, ast: 0, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 7, fga: 12, ftm: 0, fta: 0, composite: 5.16, zScores: { pts: 1.615, reb: -0.394, ast: -0.759, stl: 1.326, blk: -0.489, tpm: 2.554, fgImpact: 1.244, ftImpact: 0, to: 0.062 } }
        ]
      }
    },
      {
      id: "401917526",
      line: "Chicago State Cougars 67 @ San Diego Toreros 87 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHST", name: "Chicago State Cougars", score: 67,
        players: [

        ]
      },
      home: {
        abbr: "USD", name: "San Diego Toreros", score: 87,
        players: [
          { name: "Sekou Konneh", min: 24, pts: 8, reb: 13, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 4, fta: 6, composite: 2.79, zScores: { pts: 0.108, reb: 3.469, ast: 0.338, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 0.151, ftImpact: -0.806, to: 0.062 } },
          { name: "Jevon Hill", min: 27, pts: 18, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 6, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 6.13, zScores: { pts: 1.615, reb: -0.746, ast: -0.759, stl: 0.304, blk: -0.489, tpm: 4.147, fgImpact: 1.168, ftImpact: 0, to: 0.89 } },
          { name: "Davion Hill", min: 20, pts: 10, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: -1.35, zScores: { pts: 0.409, reb: -0.746, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 1.807, ftImpact: 0, to: -0.766 } },
          { name: "Marqui Worthy Jr.", min: 22, pts: 12, reb: 3, ast: 5, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 11, ftm: 5, fta: 6, composite: 2.67, zScores: { pts: 0.711, reb: -0.043, ast: 1.985, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -1.558, ftImpact: 0.705, to: 0.89 } },
          { name: "Dusty Stromer", min: 27, pts: 10, reb: 3, ast: 3, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 3, fta: 3, composite: 4.67, zScores: { pts: 0.409, reb: -0.043, ast: 0.887, stl: 2.349, blk: -0.489, tpm: 0.163, fgImpact: 0.227, ftImpact: 1.108, to: 0.062 } },
          { name: "Brannon Martinsen", min: 13, pts: 3, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.32, zScores: { pts: -0.646, reb: -0.746, ast: 0.338, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -0.281, ftImpact: 0, to: 0.062 } },
          { name: "Antonio Munoz", min: 13, pts: 5, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 0.43, zScores: { pts: -0.344, reb: -0.746, ast: -0.21, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: 0.865, ftImpact: 0, to: 0.89 } },
          { name: "Terry McMorris", min: 18, pts: 9, reb: 1, ast: 1, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 1, fta: 2, composite: 1.48, zScores: { pts: 0.259, reb: -0.746, ast: -0.21, stl: 1.326, blk: 0.818, tpm: -0.634, fgImpact: 1.374, ftImpact: -0.772, to: 0.062 } },
          { name: "Jose Roberto Tanchyn", min: 16, pts: 3, reb: 2, ast: 6, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: 1.42, zScores: { pts: -0.646, reb: -0.394, ast: 2.534, stl: 1.326, blk: -0.489, tpm: -0.634, fgImpact: 0.433, ftImpact: -0.772, to: 0.062 } },
          { name: "Braylon Roman", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Chace Holley", min: 18, pts: 9, reb: 0, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 4, ftm: 2, fta: 3, composite: -1.22, zScores: { pts: 0.259, reb: -1.097, ast: 0.887, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 0.941, ftImpact: -0.403, to: -0.766 } }
        ]
      }
    },
      {
      id: "401920372",
      line: "UC San Diego Tritons 82 @ Utah State Aggies 120 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UCSD", name: "UC San Diego Tritons", score: 82,
        players: [
          { name: "Olavi Suutela", min: 13, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.75, zScores: { pts: -0.495, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.508, ftImpact: 0, to: -0.766 } },
          { name: "Leo Beath", min: 25, pts: 15, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 8, ftm: 1, fta: 1, composite: 4.06, zScores: { pts: 1.163, reb: -0.043, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 2.554, fgImpact: 1.093, ftImpact: 0.369, to: 0.89 } },
          { name: "Alex Chaikin", min: 16, pts: 5, reb: 0, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -2.81, zScores: { pts: -0.344, reb: -1.097, ast: 0.338, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -0.638, ftImpact: 0.738, to: -0.766 } },
          { name: "Treysen Eaglestaff", min: 25, pts: 16, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 14, ftm: 0, fta: 0, composite: 3.04, zScores: { pts: 1.313, reb: -0.043, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 2.554, fgImpact: -0.259, ftImpact: 0, to: 0.89 } },
          { name: "Rahmir Barno", min: 20, pts: 10, reb: 1, ast: 5, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: -0.55, zScores: { pts: 0.409, reb: -0.746, ast: 1.985, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0.303, ftImpact: 0.738, to: -2.421 } },
          { name: "Jake Holmes", min: 23, pts: 6, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 2, composite: -5.1, zScores: { pts: -0.194, reb: -0.394, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.584, ftImpact: -2.283, to: -0.766 } },
          { name: "Jaden Vance", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Cade Pendleton", min: 4, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.69, zScores: { pts: -1.098, reb: -1.097, ast: -0.21, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Dimitrije Vukicevic", min: 8, pts: 4, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.26, zScores: { pts: -0.495, reb: -0.043, ast: -0.759, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 0.508, ftImpact: 0, to: 0.062 } },
          { name: "Jordan Johnson", min: 11, pts: 3, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -1.56, zScores: { pts: -0.646, reb: -0.746, ast: 0.338, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.076, ftImpact: 0.369, to: 0.89 } },
          { name: "Kayde Dotson", min: 13, pts: 6, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -2.61, zScores: { pts: -0.194, reb: -1.097, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: -0.919, ftImpact: 0, to: 0.062 } },
          { name: "Aidan Burke", min: 12, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.25, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.714, ftImpact: 0, to: 0.89 } },
          { name: "Jasen Brooks", min: 9, pts: 6, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.46, zScores: { pts: -0.194, reb: -0.043, ast: -0.759, stl: 0.304, blk: -0.489, tpm: 0.96, fgImpact: -0.205, ftImpact: 0, to: 0.89 } },
          { name: "Tom Beattie", min: 16, pts: 7, reb: 3, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 3, fta: 3, composite: 1.78, zScores: { pts: -0.043, reb: -0.043, ast: 0.338, stl: 1.326, blk: -0.489, tpm: -0.634, fgImpact: 0.151, ftImpact: 1.108, to: 0.062 } }
        ]
      },
      home: {
        abbr: "UtSt", name: "Utah State Aggies", score: 120,
        players: [
          { name: "Will Hornseth", min: 24, pts: 12, reb: 4, ast: 2, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 9, ftm: 1, fta: 1, composite: 4.55, zScores: { pts: 0.711, reb: 0.308, ast: 0.338, stl: 2.349, blk: -0.489, tpm: 0.163, fgImpact: 0.736, ftImpact: 0.369, to: 0.062 } },
          { name: "Karson Templin", min: 23, pts: 16, reb: 6, ast: 3, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 8, ftm: 2, fta: 3, composite: 4.7, zScores: { pts: 1.313, reb: 1.01, ast: 0.887, stl: 0.304, blk: -0.489, tpm: 0.96, fgImpact: 1.882, ftImpact: -0.403, to: -0.766 } },
          { name: "Solomon Callaghan", min: 31, pts: 22, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 5, fgm: 6, fga: 13, ftm: 5, fta: 5, composite: 7.81, zScores: { pts: 2.217, reb: -0.746, ast: 0.338, stl: 0.304, blk: -0.489, tpm: 3.35, fgImpact: 0.098, ftImpact: 1.846, to: 0.89 } },
          { name: "Mason Falslev", min: 34, pts: 33, reb: 12, ast: 4, stl: 1, blk: 1, to: 2, tpm: 3, fgm: 12, fga: 16, ftm: 6, fta: 7, composite: 15.38, zScores: { pts: 3.875, reb: 3.118, ast: 1.436, stl: 0.304, blk: 0.818, tpm: 1.757, fgImpact: 3.765, ftImpact: 1.074, to: -0.766 } },
          { name: "Dallin Hall", min: 22, pts: 15, reb: 0, ast: 5, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 5.71, zScores: { pts: 1.163, reb: -1.097, ast: 1.985, stl: -0.719, blk: -0.489, tpm: 3.35, fgImpact: 1.45, ftImpact: 0, to: 0.062 } },
          { name: "Kingston Tosi", min: 26, pts: 6, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -2.41, zScores: { pts: -0.194, reb: -0.043, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: -0.205, ftImpact: -0.772, to: 0.062 } },
          { name: "Sean Felts", min: 6, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.03, zScores: { pts: -0.646, reb: -1.097, ast: -0.21, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 0.076, ftImpact: 0, to: 0.89 } },
          { name: "Ace Reiser", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.91, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Jordan Boyd", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.098, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.89 } },
          { name: "Brayden Boe", min: 12, pts: 3, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.68, zScores: { pts: -0.646, reb: -0.394, ast: -0.759, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: 0.076, ftImpact: 0, to: 0.062 } },
          { name: "AJ Bates", min: 18, pts: 10, reb: 5, ast: 6, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 4.79, zScores: { pts: 0.409, reb: 0.659, ast: 2.534, stl: -0.719, blk: -0.489, tpm: 0.96, fgImpact: 1.374, ftImpact: 0, to: 0.062 } }
        ]
      }
    },
      {
      id: "401917527",
      line: "East Texas A&M Lions 94 @ Portland Pilots 88 (Final/2OT)",
      completed: true,
      statusText: "Final/2OT",
      away: {
        abbr: "ETAM", name: "East Texas A&M Lions", score: 94,
        players: [

        ]
      },
      home: {
        abbr: "Portl", name: "Portland Pilots", score: 88,
        players: [
          { name: "Timo George", min: 18, pts: 8, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 0.28, zScores: { pts: 0.108, reb: -0.043, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 1.374, ftImpact: 0, to: 0.89 } },
          { name: "James O'Donnell", min: 31, pts: 13, reb: 5, ast: 2, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 10, ftm: 3, fta: 6, composite: -3.51, zScores: { pts: 0.861, reb: 0.659, ast: 0.338, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.379, ftImpact: -2.317, to: -1.594 } },
          { name: "Riley Parker", min: 42, pts: 18, reb: 3, ast: 4, stl: 1, blk: 0, to: 4, tpm: 5, fgm: 6, fga: 10, ftm: 1, fta: 1, composite: 5.29, zScores: { pts: 1.615, reb: -0.043, ast: 1.436, stl: 0.304, blk: -0.489, tpm: 3.35, fgImpact: 1.168, ftImpact: 0.369, to: -2.421 } },
          { name: "Jaxon Olvera", min: 44, pts: 31, reb: 4, ast: 1, stl: 3, blk: 0, to: 4, tpm: 1, fgm: 8, fga: 14, ftm: 14, fta: 16, composite: 7.48, zScores: { pts: 3.574, reb: 0.308, ast: -0.21, stl: 2.349, blk: -0.489, tpm: 0.163, fgImpact: 1.32, ftImpact: 2.886, to: -2.421 } },
          { name: "Hunter Adam", min: 47, pts: 10, reb: 9, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 13, ftm: 4, fta: 5, composite: 0.19, zScores: { pts: 0.409, reb: 2.064, ast: 1.436, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -2.271, ftImpact: 0.335, to: 0.062 } },
          { name: "Henry Sewell", min: 5, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -4.71, zScores: { pts: -0.796, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.281, ftImpact: 0, to: 0.062 } },
          { name: "Vito Perkovic", min: 7, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -5.35, zScores: { pts: -0.947, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: -0.772, to: 0.062 } },
          { name: "Kaia Isaac", min: 9, pts: 0, reb: 2, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.11, zScores: { pts: -1.098, reb: -0.394, ast: -0.21, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: -1.594 } },
          { name: "Dante Censori-Hercules", min: 30, pts: 2, reb: 1, ast: 3, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 4, composite: -2.1, zScores: { pts: -0.796, reb: -0.746, ast: 0.887, stl: 2.349, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: -1.545, to: -0.766 } },
          { name: "RJ Nance Jr.", min: 17, pts: 3, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -3.74, zScores: { pts: -0.646, reb: 0.308, ast: -0.21, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.638, ftImpact: -0.772, to: 0.062 } }
        ]
      }
    },
      {
      id: "401917525",
      line: "UIC Flames 61 @ Saint Mary's Gaels 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UIC", name: "UIC Flames", score: 61,
        players: [
          { name: "Jayce Nathaniel", min: 30, pts: 11, reb: 3, ast: 2, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 5, fta: 8, composite: -0.3, zScores: { pts: 0.56, reb: -0.043, ast: 0.338, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: -0.13, ftImpact: -1.578, to: 0.062 } },
          { name: "Rashund Washington Jr.", min: 26, pts: 4, reb: 5, ast: 2, stl: 2, blk: 2, to: 3, tpm: 1, fgm: 1, fga: 6, ftm: 1, fta: 2, composite: 0.4, zScores: { pts: -0.495, reb: 0.659, ast: 0.338, stl: 1.326, blk: 2.125, tpm: 0.163, fgImpact: -1.352, ftImpact: -0.772, to: -1.594 } },
          { name: "Ahmad Henderson II", min: 21, pts: 5, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 9, ftm: 2, fta: 2, composite: -2.4, zScores: { pts: -0.344, reb: -0.746, ast: 0.338, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -2.423, ftImpact: 0.738, to: 0.062 } },
          { name: "Mekhi Lowery", min: 17, pts: 4, reb: 2, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -4.62, zScores: { pts: -0.495, reb: -0.394, ast: -0.759, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.562, ftImpact: 0, to: -1.594 } },
          { name: "Gabe Cupps", min: 24, pts: 8, reb: 1, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 6, ftm: 1, fta: 1, composite: 0.06, zScores: { pts: 0.108, reb: -0.746, ast: 0.887, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: 0.227, ftImpact: 0.369, to: -0.766 } },
          { name: "Dikembe Shaw", min: 11, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.44, zScores: { pts: -0.495, reb: -0.746, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.508, ftImpact: 0, to: 0.89 } },
          { name: "Nano Barrantes", min: 8, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 1, composite: -3.64, zScores: { pts: -1.098, reb: 0.308, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0, ftImpact: -1.141, to: 0.89 } },
          { name: "Lucas Scroggins", min: 18, pts: 0, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.37, zScores: { pts: -1.098, reb: -0.043, ast: -0.759, stl: -0.719, blk: 0.818, tpm: -0.634, fgImpact: 0, ftImpact: 0, to: 0.062 } },
          { name: "Elijah Garrett", min: 19, pts: 7, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -0.45, zScores: { pts: -0.043, reb: -0.746, ast: -0.759, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: 0.227, ftImpact: 0, to: 0.89 } },
          { name: "Benny Gealer", min: 26, pts: 18, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 12, ftm: 7, fta: 7, composite: 3.85, zScores: { pts: 1.615, reb: -0.394, ast: 0.338, stl: 0.304, blk: -0.489, tpm: 0.163, fgImpact: -0.335, ftImpact: 2.585, to: 0.062 } }
        ]
      },
      home: {
        abbr: "StMar", name: "Saint Mary's Gaels", score: 84,
        players: [
          { name: "Vangelis Zougris", min: 26, pts: 12, reb: 5, ast: 2, stl: 1, blk: 1, to: 4, tpm: 0, fgm: 5, fga: 8, ftm: 2, fta: 2, composite: 1.61, zScores: { pts: 0.711, reb: 0.659, ast: 0.338, stl: 0.304, blk: 0.818, tpm: -0.634, fgImpact: 1.093, ftImpact: 0.738, to: -2.421 } },
          { name: "Jazz Gardner", min: 21, pts: 5, reb: 5, ast: 0, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: -0.34, zScores: { pts: -0.344, reb: 0.659, ast: -0.759, stl: -0.719, blk: 2.125, tpm: -0.634, fgImpact: 0.865, ftImpact: -0.772, to: -0.766 } },
          { name: "Mantas Juzenas", min: 28, pts: 14, reb: 10, ast: 1, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: 3.66, zScores: { pts: 1.012, reb: 2.415, ast: -0.21, stl: 0.304, blk: -0.489, tpm: 2.554, fgImpact: -0.335, ftImpact: 0, to: -1.594 } },
          { name: "Joshua Dent", min: 28, pts: 9, reb: 2, ast: 10, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 5.79, zScores: { pts: 0.259, reb: -0.394, ast: 4.729, stl: -0.719, blk: -0.489, tpm: 1.757, fgImpact: 0.584, ftImpact: 0, to: 0.062 } },
          { name: "Rory Hawke", min: 18, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.17, zScores: { pts: -1.098, reb: -0.746, ast: 0.338, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.714, ftImpact: 0, to: 0.89 } },
          { name: "Trent MacLean", min: 3, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.58, zScores: { pts: -0.646, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: 0.163, fgImpact: 0.076, ftImpact: 0, to: 0.89 } },
          { name: "Thomas Ndong", min: 13, pts: 5, reb: 2, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: -2.44, zScores: { pts: -0.344, reb: -0.394, ast: -0.21, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: 0.865, ftImpact: -0.772, to: -0.766 } },
          { name: "Kevin Gad", min: 5, pts: 7, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: 0.86, zScores: { pts: -0.043, reb: -1.097, ast: -0.759, stl: -0.719, blk: 0.818, tpm: 0.163, fgImpact: 0.865, ftImpact: 0.738, to: 0.89 } },
          { name: "Flynn Pavely", min: 6, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4, zScores: { pts: -0.796, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: 0.433, ftImpact: 0, to: 0.062 } },
          { name: "Cooper Lewis", min: 4, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -1.098, reb: -0.394, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } },
          { name: "Luke Fennell", min: 8, pts: 2, reb: 2, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 0.04, zScores: { pts: -0.796, reb: -0.394, ast: 1.436, stl: 0.304, blk: -0.489, tpm: -0.634, fgImpact: -0.281, ftImpact: 0, to: 0.89 } },
          { name: "Darius Bivins", min: 27, pts: 20, reb: 5, ast: 4, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 9, fga: 12, ftm: 0, fta: 0, composite: 7.67, zScores: { pts: 1.916, reb: 0.659, ast: 1.436, stl: 0.304, blk: -0.489, tpm: 0.96, fgImpact: 2.823, ftImpact: 0, to: 0.062 } },
          { name: "Jeremy Dent-Smith", min: 11, pts: 5, reb: 1, ast: 0, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -2.06, zScores: { pts: -0.344, reb: -0.746, ast: -0.759, stl: 1.326, blk: -0.489, tpm: 0.163, fgImpact: -1.276, ftImpact: 0, to: 0.062 } },
          { name: "Sam Curvy", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.098, reb: -1.097, ast: -0.759, stl: -0.719, blk: -0.489, tpm: -0.634, fgImpact: -0.357, ftImpact: 0, to: 0.89 } }
        ]
      }
    }
    ]
  },
    "2026-11-14": {
    games: [
      {
      id: "401921689",
      line: "LSU Tigers 81 @ Gonzaga Bulldogs 80 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LSU", name: "LSU Tigers", score: 81,
        players: [
          { name: "Saliou Niang", min: 25, pts: 1, reb: 5, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -2.98, zScores: { pts: -0.89, reb: 0.516, ast: -0.159, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: -0.577, to: -0.789 } },
          { name: "Mo Dioubate", min: 27, pts: 5, reb: 9, ast: 1, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 10, ftm: 1, fta: 2, composite: 0.93, zScores: { pts: -0.294, reb: 1.799, ast: -0.159, stl: 0.373, blk: 2.272, tpm: -0.635, fgImpact: -1.897, ftImpact: -0.577, to: 0.046 } },
          { name: "Brice Dessert", min: 19, pts: 4, reb: 7, ast: 0, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 3.77, zScores: { pts: -0.443, reb: 1.158, ast: -0.718, stl: -0.666, blk: 3.645, tpm: -0.635, fgImpact: 0.545, ftImpact: 0, to: 0.882 } },
          { name: "Donovan Dent", min: 36, pts: 23, reb: 2, ast: 10, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 9, fga: 20, ftm: 3, fta: 4, composite: 6.64, zScores: { pts: 2.386, reb: -0.446, ast: 4.871, stl: 0.373, blk: -0.473, tpm: 1.155, fgImpact: 0.185, ftImpact: 0.214, to: -1.624 } },
          { name: "Skyy Clark", min: 34, pts: 14, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 11, ftm: 3, fta: 4, composite: 0.12, zScores: { pts: 1.046, reb: -0.446, ast: -0.159, stl: -0.666, blk: -0.473, tpm: 2.049, fgImpact: -0.654, ftImpact: 0.214, to: -0.789 } },
          { name: "Michael Ruzic", min: 21, pts: 12, reb: 12, ast: 1, stl: 0, blk: 2, to: 1, tpm: 1, fgm: 4, fga: 7, ftm: 3, fta: 4, composite: 6.22, zScores: { pts: 0.748, reb: 2.761, ast: -0.159, stl: -0.666, blk: 2.272, tpm: 0.26, fgImpact: 0.741, ftImpact: 0.214, to: 0.046 } },
          { name: "Abdi Bashir Jr.", min: 22, pts: 15, reb: 2, ast: 0, stl: 0, blk: 1, to: 3, tpm: 5, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 3.32, zScores: { pts: 1.195, reb: -0.446, ast: -0.718, stl: -0.666, blk: 0.9, tpm: 3.839, fgImpact: 0.839, ftImpact: 0, to: -1.624 } },
          { name: "Divine Ugochukwu", min: 16, pts: 7, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: 0.07, zScores: { pts: 0.004, reb: -0.766, ast: -0.159, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 0.196, ftImpact: 0.791, to: 0.882 } }
        ]
      },
      home: {
        abbr: "Gonz", name: "Gonzaga Bulldogs", score: 80,
        players: [
          { name: "Braden Huff", min: 36, pts: 18, reb: 13, ast: 1, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 8, fga: 16, ftm: 2, fta: 2, composite: 5.99, zScores: { pts: 1.641, reb: 3.081, ast: -0.159, stl: 0.373, blk: 0.9, tpm: -0.635, fgImpact: 0.785, ftImpact: 0.791, to: -0.789 } },
          { name: "Massamba Diop", min: 22, pts: 7, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: -1.48, zScores: { pts: 0.004, reb: -0.125, ast: -0.718, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: 0.294, ftImpact: -0.577, to: 0.046 } },
          { name: "Davis Fogle", min: 36, pts: 15, reb: 8, ast: 6, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 13, ftm: 4, fta: 7, composite: 4.66, zScores: { pts: 1.195, reb: 1.478, ast: 2.635, stl: 1.411, blk: -0.473, tpm: 0.26, fgImpact: -0.556, ftImpact: -1.336, to: 0.046 } },
          { name: "Xaivian Lee", min: 13, pts: 9, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -0.99, zScores: { pts: 0.301, reb: -0.766, ast: 0.4, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 0.741, ftImpact: 0, to: -0.789 } },
          { name: "Isiah Harwell", min: 32, pts: 14, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 6, fga: 13, ftm: 0, fta: 0, composite: 2.39, zScores: { pts: 1.046, reb: -0.446, ast: -0.718, stl: -0.666, blk: 0.9, tpm: 1.155, fgImpact: 0.24, ftImpact: 0, to: 0.882 } },
          { name: "Izan Almansa", min: 21, pts: 8, reb: 7, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 10, ftm: 0, fta: 1, composite: 0.83, zScores: { pts: 0.153, reb: 1.158, ast: -0.718, stl: 0.373, blk: 0.9, tpm: -0.635, fgImpact: -0.305, ftImpact: -0.973, to: 0.882 } },
          { name: "Chauncey Wiggins", min: 12, pts: 3, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.68, zScores: { pts: -0.592, reb: -0.125, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -0.251, ftImpact: 0, to: 0.882 } },
          { name: "Nathan De Sousa", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Javon Bennett", min: 24, pts: 6, reb: 1, ast: 5, stl: 4, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: 3.88, zScores: { pts: -0.145, reb: -0.766, ast: 2.077, stl: 3.489, blk: -0.473, tpm: -0.635, fgImpact: -0.501, ftImpact: 0.791, to: 0.046 } }
        ]
      }
    },
      {
      id: "401919847",
      line: "Stonehill Skyhawks 37 @ Texas Tech Red Raiders 88 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "STO", name: "Stonehill Skyhawks", score: 37,
        players: [

        ]
      },
      home: {
        abbr: "TxTch", name: "Texas Tech Red Raiders", score: 88,
        players: [
          { name: "Jamichael Stillwell", min: 31, pts: 13, reb: 12, ast: 1, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 6, fga: 8, ftm: 1, fta: 1, composite: 4.56, zScores: { pts: 0.897, reb: 2.761, ast: -0.159, stl: 1.411, blk: -0.473, tpm: -0.635, fgImpact: 1.984, ftImpact: 0.396, to: -1.624 } },
          { name: "Josiah Moseley", min: 11, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.44, zScores: { pts: -0.443, reb: -0.446, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.894, ftImpact: 0, to: 0.046 } },
          { name: "Damarion Dennis", min: 27, pts: 13, reb: 5, ast: 2, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 6, fga: 13, ftm: 0, fta: 1, composite: 3.36, zScores: { pts: 0.897, reb: 0.516, ast: 0.4, stl: 2.45, blk: -0.473, tpm: 0.26, fgImpact: 0.24, ftImpact: -0.973, to: 0.046 } },
          { name: "Cruz Davis", min: 35, pts: 12, reb: 6, ast: 6, stl: 2, blk: 1, to: 3, tpm: 1, fgm: 5, fga: 9, ftm: 1, fta: 2, composite: 5.43, zScores: { pts: 0.748, reb: 0.837, ast: 2.635, stl: 1.411, blk: 0.9, tpm: 0.26, fgImpact: 0.839, ftImpact: -0.577, to: -1.624 } },
          { name: "Dra Gibbs-Lawhorn", min: 25, pts: 11, reb: 6, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 4, fga: 15, ftm: 2, fta: 2, composite: 0.56, zScores: { pts: 0.599, reb: 0.837, ast: -0.159, stl: -0.666, blk: 0.9, tpm: 0.26, fgImpact: -2.049, ftImpact: 0.791, to: 0.046 } },
          { name: "Trey Hall", min: 5, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.96, zScores: { pts: -1.038, reb: -0.125, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.046 } },
          { name: "Bassala Bagayoko", min: 6, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.44, zScores: { pts: -1.038, reb: -0.446, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } },
          { name: "LaTrell Hoover", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Marial Akuentok", min: 5, pts: 0, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.16, zScores: { pts: -1.038, reb: -0.446, ast: -0.159, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Amari Barrett", min: 27, pts: 13, reb: 10, ast: 2, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 10, ftm: 4, fta: 4, composite: 6.98, zScores: { pts: 0.897, reb: 2.12, ast: 0.4, stl: 2.45, blk: -0.473, tpm: 0.26, fgImpact: -0.305, ftImpact: 1.583, to: 0.046 } },
          { name: "DaKari Spear", min: 26, pts: 22, reb: 6, ast: 0, stl: 1, blk: 1, to: 3, tpm: 4, fgm: 6, fga: 9, ftm: 6, fta: 7, composite: 7.98, zScores: { pts: 2.237, reb: 0.837, ast: -0.718, stl: 0.373, blk: 0.9, tpm: 2.944, fgImpact: 1.635, ftImpact: 1.401, to: -1.624 } }
        ]
      }
    },
      {
      id: "401919004",
      line: "Tulane Green Wave 63 @ Akron Zips 65 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Tul", name: "Tulane Green Wave", score: 63,
        players: [
          { name: "Carson Schwieger", min: 11, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.038, reb: -0.766, ast: -0.159, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.698, ftImpact: 0, to: 0.882 } },
          { name: "Tyler Ringgold", min: 28, pts: 2, reb: 8, ast: 2, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 2.06, zScores: { pts: -0.741, reb: 1.478, ast: 0.4, stl: 0.373, blk: 0.9, tpm: -0.635, fgImpact: -0.6, ftImpact: 0, to: 0.882 } },
          { name: "Krystian Lewis", min: 35, pts: 11, reb: 2, ast: 2, stl: 1, blk: 0, to: 4, tpm: 2, fgm: 3, fga: 14, ftm: 3, fta: 6, composite: -5.08, zScores: { pts: 0.599, reb: -0.446, ast: 0.4, stl: 0.373, blk: -0.473, tpm: 1.155, fgImpact: -2.496, ftImpact: -1.731, to: -2.459 } },
          { name: "TJ Nadeau", min: 33, pts: 19, reb: 4, ast: 0, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 6, fga: 15, ftm: 6, fta: 6, composite: 2.76, zScores: { pts: 1.79, reb: 0.196, ast: -0.718, stl: 1.411, blk: -0.473, tpm: 0.26, fgImpact: -0.458, ftImpact: 2.374, to: -1.624 } },
          { name: "KJ Greene", min: 36, pts: 16, reb: 6, ast: 3, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 9, fta: 10, composite: 6.92, zScores: { pts: 1.344, reb: 0.837, ast: 0.959, stl: 1.411, blk: -0.473, tpm: 0.26, fgImpact: -0.055, ftImpact: 2.588, to: 0.046 } },
          { name: "Joah Chappelle", min: 18, pts: 6, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -0.7, zScores: { pts: -0.145, reb: -0.125, ast: -0.718, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: 0.643, ftImpact: 0, to: 0.046 } },
          { name: "Jordann Dumont", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Ryan Blount", min: 15, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.44, zScores: { pts: -0.443, reb: -0.446, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.894, ftImpact: 0, to: 0.046 } },
          { name: "Josiah Moore", min: 19, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 0, fta: 1, composite: -3.79, zScores: { pts: -0.294, reb: -0.125, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -0.85, ftImpact: -0.973, to: 0.046 } }
        ]
      },
      home: {
        abbr: "AKR", name: "Akron Zips", score: 65,
        players: [

        ]
      }
    },
      {
      id: "401929362",
      line: "Northwest University Eagles 87 @ Washington State Cougars 123 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NWWA", name: "Northwest University Eagles", score: 87,
        players: [

        ]
      },
      home: {
        abbr: "WaSt", name: "Washington State Cougars", score: 123,
        players: [
          { name: "Fraser Roxburgh", min: 16, pts: 8, reb: 7, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: 1.99, zScores: { pts: 0.153, reb: 1.158, ast: 0.959, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 0.294, ftImpact: -0.577, to: 0.882 } },
          { name: "Ladji Dembele", min: 17, pts: 11, reb: 6, ast: 2, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 5, fga: 7, ftm: 1, fta: 2, composite: -0.4, zScores: { pts: 0.599, reb: 0.837, ast: 0.4, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: 1.537, ftImpact: -0.577, to: -2.459 } },
          { name: "Lazerek Houston", min: 23, pts: 14, reb: 2, ast: 4, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 6, ftm: 3, fta: 4, composite: 1.72, zScores: { pts: 1.046, reb: -0.446, ast: 1.518, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 1.886, ftImpact: 0.214, to: -1.624 } },
          { name: "Sebastian Akins", min: 24, pts: 27, reb: 3, ast: 5, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 8, fga: 12, ftm: 8, fta: 8, composite: 10.6, zScores: { pts: 2.981, reb: -0.125, ast: 2.077, stl: 0.373, blk: -0.473, tpm: 2.049, fgImpact: 2.18, ftImpact: 3.165, to: -1.624 } },
          { name: "Jaylen Harrell", min: 24, pts: 13, reb: 1, ast: 3, stl: 4, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 9, ftm: 5, fta: 5, composite: 3.87, zScores: { pts: 0.897, reb: -0.766, ast: 0.959, stl: 3.489, blk: -0.473, tpm: -0.635, fgImpact: 0.043, ftImpact: 1.978, to: -1.624 } },
          { name: "Mohamed Sankhe", min: 11, pts: 9, reb: 7, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 5, ftm: 1, fta: 2, composite: -0.96, zScores: { pts: 0.301, reb: 1.158, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 1.439, ftImpact: -0.577, to: -0.789 } },
          { name: "Dominik Robinson", min: 16, pts: 6, reb: 8, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 1, composite: -0.35, zScores: { pts: -0.145, reb: 1.478, ast: -0.159, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: 0.643, ftImpact: -0.973, to: -0.789 } },
          { name: "Tyler Kropp", min: 9, pts: 12, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 4, ftm: 4, fta: 5, composite: 3.01, zScores: { pts: 0.748, reb: -0.125, ast: -0.159, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: 1.788, ftImpact: 0.61, to: 0.882 } },
          { name: "Brayden Kyman", min: 12, pts: 5, reb: 4, ast: 1, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 3.38, zScores: { pts: -0.294, reb: 0.196, ast: -0.159, stl: -0.666, blk: 2.272, tpm: 0.26, fgImpact: 0.894, ftImpact: 0, to: 0.882 } },
          { name: "Dio Blakely", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "RJ Jones", min: 19, pts: 12, reb: 3, ast: 1, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 4.82, zScores: { pts: 0.748, reb: -0.125, ast: -0.159, stl: 0.373, blk: 0.9, tpm: 1.155, fgImpact: 1.886, ftImpact: 0, to: 0.046 } },
          { name: "Casey Jones", min: 17, pts: 0, reb: 5, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.28, zScores: { pts: -1.038, reb: 0.516, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.046 } },
          { name: "Jamari Phillips", min: 11, pts: 6, reb: 2, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 1.37, zScores: { pts: -0.145, reb: -0.446, ast: 1.518, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.545, ftImpact: 0.791, to: 0.882 } }
        ]
      }
    },
      {
      id: "401920074",
      line: "George Mason Patriots 61 @ Bradley Braves 62 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "GMas", name: "George Mason Patriots", score: 61,
        players: [
          { name: "Emmanuel Kanga", min: 30, pts: 11, reb: 13, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 9, ftm: 1, fta: 2, composite: 1.7, zScores: { pts: 0.599, reb: 3.081, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: 0.839, ftImpact: -0.577, to: -0.789 } },
          { name: "Elijah Jones", min: 23, pts: 2, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.78, zScores: { pts: -0.741, reb: 0.516, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.948, ftImpact: 0, to: 0.882 } },
          { name: "Efeosa Oliogu-Elabor", min: 31, pts: 14, reb: 1, ast: 0, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 4, fga: 6, ftm: 6, fta: 9, composite: -0.88, zScores: { pts: 1.046, reb: -0.766, ast: -0.718, stl: 0.373, blk: 0.9, tpm: -0.635, fgImpact: 1.09, ftImpact: -0.544, to: -1.624 } },
          { name: "Baraka Okojie", min: 30, pts: 7, reb: 0, ast: 5, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 7, ftm: 3, fta: 4, composite: -1.17, zScores: { pts: 0.004, reb: -1.087, ast: 2.077, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.85, ftImpact: 0.214, to: -0.789 } },
          { name: "Brayden O'Connor", min: 34, pts: 14, reb: 7, ast: 1, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 9, ftm: 2, fta: 2, composite: 3.11, zScores: { pts: 1.046, reb: 1.158, ast: -0.159, stl: 0.373, blk: -0.473, tpm: 1.155, fgImpact: 0.839, ftImpact: 0.791, to: -1.624 } },
          { name: "Emmett Adair", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.08, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } },
          { name: "Shane Pendergrass", min: 16, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 8, ftm: 0, fta: 1, composite: -3.22, zScores: { pts: -0.145, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 1.155, fgImpact: -1.199, ftImpact: -0.973, to: 0.882 } },
          { name: "Michael Marcus Jr.", min: 7, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.25, zScores: { pts: -0.443, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.894, ftImpact: 0, to: 0.882 } },
          { name: "Makhai Valentine", min: 15, pts: 3, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 3, fta: 3, composite: -0.21, zScores: { pts: -0.592, reb: -0.446, ast: -0.159, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 1.187, to: 0.882 } },
          { name: "Malik Presley", min: 11, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.09, zScores: { pts: -1.038, reb: -0.446, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } }
        ]
      },
      home: {
        abbr: "Brad", name: "Bradley Braves", score: 62,
        players: [
          { name: "Ben Thornbrue", min: 25, pts: 7, reb: 1, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 7, ftm: 4, fta: 4, composite: -2.17, zScores: { pts: 0.004, reb: -0.766, ast: -0.718, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: -1.646, ftImpact: 1.583, to: -0.789 } },
          { name: "Xander Alarie", min: 26, pts: 17, reb: 5, ast: 1, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 6, fga: 8, ftm: 2, fta: 2, composite: 4.75, zScores: { pts: 1.492, reb: 0.516, ast: -0.159, stl: -0.666, blk: -0.473, tpm: 2.049, fgImpact: 1.984, ftImpact: 0.791, to: -0.789 } },
          { name: "Timoty van der Knaap", min: 30, pts: 4, reb: 3, ast: 1, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 7, ftm: 2, fta: 2, composite: -2.07, zScores: { pts: -0.443, reb: -0.125, ast: -0.159, stl: 1.411, blk: -0.473, tpm: -0.635, fgImpact: -1.646, ftImpact: 0.791, to: -0.789 } },
          { name: "Trevon Payton", min: 20, pts: 13, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 4.23, zScores: { pts: 0.897, reb: -1.087, ast: 0.4, stl: 0.373, blk: -0.473, tpm: 2.049, fgImpact: 1.188, ftImpact: 0, to: 0.882 } },
          { name: "Max Gaspa", min: 23, pts: 9, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 4, ftm: 3, fta: 3, composite: 0.63, zScores: { pts: 0.301, reb: -0.125, ast: -0.159, stl: -0.666, blk: -0.473, tpm: 1.155, fgImpact: 0.196, ftImpact: 1.187, to: -0.789 } },
          { name: "Noah Williams", min: 28, pts: 4, reb: 5, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: -1.5, zScores: { pts: -0.443, reb: 0.516, ast: -0.718, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: -1.297, ftImpact: 0.791, to: 0.046 } },
          { name: "Gustavo Guimares", min: 5, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.67, zScores: { pts: -0.741, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.447, ftImpact: 0, to: 0.882 } },
          { name: "Kyle Grill", min: 18, pts: 2, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -2.42, zScores: { pts: -0.741, reb: -0.446, ast: 0.4, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.698, ftImpact: 0.791, to: 0.046 } },
          { name: "Jackson Seastrunk", min: 19, pts: 4, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.05, zScores: { pts: -0.443, reb: -0.446, ast: -0.159, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.153, ftImpact: 0, to: 0.882 } },
          { name: "Dimitrije Pavlovic", min: 6, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.04, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } }
        ]
      }
    },
      {
      id: "401911231",
      line: "Loyola Chicago Ramblers 73 @ Colorado State Rams 58 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LoyIL", name: "Loyola Chicago Ramblers", score: 73,
        players: [
          { name: "Jason Schofield", min: 27, pts: 10, reb: 6, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 4, fta: 4, composite: 3.57, zScores: { pts: 0.45, reb: 0.837, ast: 0.4, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: 0.992, ftImpact: 1.583, to: 0.046 } },
          { name: "Guillaume Grotzinger", min: 20, pts: 5, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -2.55, zScores: { pts: -0.294, reb: -0.766, ast: -0.159, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -0.501, ftImpact: 0, to: 0.046 } },
          { name: "Dayan Nessah", min: 19, pts: 6, reb: 6, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: -1.25, zScores: { pts: -0.145, reb: 0.837, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.545, ftImpact: 0.791, to: -0.789 } },
          { name: "Jayden Dawson", min: 17, pts: 10, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 0.76, zScores: { pts: 0.45, reb: -0.125, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 1.155, fgImpact: 0.294, ftImpact: 0.791, to: 0.046 } },
          { name: "Ryan Agarwal", min: 26, pts: 11, reb: 6, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 9, ftm: 2, fta: 4, composite: 1.77, zScores: { pts: 0.599, reb: 0.837, ast: 0.4, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: 0.043, ftImpact: -1.154, to: 0.882 } },
          { name: "Elias Rapieque", min: 21, pts: 7, reb: 5, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: 0.37, zScores: { pts: 0.004, reb: 0.516, ast: 1.518, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.153, ftImpact: 0.214, to: 0.046 } },
          { name: "Xavier Amos", min: 16, pts: 10, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: 0.38, zScores: { pts: 0.45, reb: 0.196, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 1.155, fgImpact: -0.403, ftImpact: 0.791, to: 0.046 } },
          { name: "Malick Diallo", min: 13, pts: 2, reb: 3, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.01, zScores: { pts: -0.741, reb: -0.125, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: 0.098, ftImpact: 0, to: -0.789 } },
          { name: "Dayton Williams", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.76, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } },
          { name: "Nic Anderson", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.08, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } },
          { name: "Chris Jeffrey", min: 24, pts: 8, reb: 1, ast: 3, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 6, ftm: 3, fta: 6, composite: -2.31, zScores: { pts: 0.153, reb: -0.766, ast: 0.959, stl: 1.411, blk: -0.473, tpm: 0.26, fgImpact: -0.501, ftImpact: -1.731, to: -1.624 } },
          { name: "Donald Hand Jr.", min: 9, pts: 4, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.29, zScores: { pts: -0.443, reb: -0.125, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.153, ftImpact: 0, to: 0.882 } }
        ]
      },
      home: {
        abbr: "ColSt", name: "Colorado State Rams", score: 58,
        players: [
          { name: "Kyle Jorgensen", min: 31, pts: 6, reb: 4, ast: 2, stl: 2, blk: 1, to: 4, tpm: 0, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: -0.39, zScores: { pts: -0.145, reb: 0.196, ast: 0.4, stl: 1.411, blk: 0.9, tpm: -0.635, fgImpact: -0.85, ftImpact: 0.791, to: -2.459 } },
          { name: "Carey Booth", min: 30, pts: 12, reb: 13, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 8, ftm: 4, fta: 7, composite: 1.99, zScores: { pts: 0.748, reb: 3.081, ast: -0.159, stl: -0.666, blk: -0.473, tpm: 1.155, fgImpact: -0.403, ftImpact: -1.336, to: 0.046 } },
          { name: "Justin Menard", min: 24, pts: 5, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 5, fta: 6, composite: -2.64, zScores: { pts: -0.294, reb: -0.766, ast: -0.159, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.698, ftImpact: 1.006, to: 0.046 } },
          { name: "Josh Pascarelli", min: 24, pts: 15, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 7, ftm: 4, fta: 6, composite: 1.69, zScores: { pts: 1.195, reb: -0.125, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 2.049, fgImpact: 0.741, ftImpact: -0.363, to: 0.046 } },
          { name: "Jase Butler", min: 30, pts: 6, reb: 2, ast: 4, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 1, fga: 6, ftm: 3, fta: 4, composite: -3.49, zScores: { pts: -0.145, reb: -0.446, ast: 1.518, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -1.297, ftImpact: 0.214, to: -2.459 } },
          { name: "Jaden Ghoreishi", min: 11, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -4.81, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -1.395, ftImpact: 0, to: 0.882 } },
          { name: "Rashaan Mbemba", min: 16, pts: 1, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 3, composite: -3.44, zScores: { pts: -0.89, reb: 0.196, ast: -0.159, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: -1.55, to: 0.046 } },
          { name: "Amondo Miller Jr.", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Pops Dunson", min: 16, pts: 13, reb: 1, ast: 0, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 9, ftm: 1, fta: 1, composite: 0.91, zScores: { pts: 0.897, reb: -0.766, ast: -0.718, stl: 0.373, blk: -0.473, tpm: 1.155, fgImpact: 0.839, ftImpact: 0.396, to: -0.789 } },
          { name: "Jojo McIver", min: 15, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.54, zScores: { pts: -1.038, reb: -1.087, ast: -0.159, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.698, ftImpact: 0, to: -0.789 } }
        ]
      }
    },
      {
      id: "401923261",
      line: "Coastal Georgia Mariner 63 @ Florida Atlantic Owls 78 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "COGA", name: "Coastal Georgia Mariner", score: 63,
        players: [

        ]
      },
      home: {
        abbr: "FAU", name: "Florida Atlantic Owls", score: 78,
        players: [
          { name: "Mason Porter-Brown", min: 26, pts: 10, reb: 7, ast: 0, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 3.11, zScores: { pts: 0.45, reb: 1.158, ast: -0.718, stl: 2.45, blk: -0.473, tpm: -0.635, fgImpact: 0.043, ftImpact: 0.791, to: 0.046 } },
          { name: "Josh Harris", min: 31, pts: 11, reb: 17, ast: 2, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 10, ftm: 1, fta: 4, composite: 3.18, zScores: { pts: 0.599, reb: 4.364, ast: 0.4, stl: 0.373, blk: 0.9, tpm: -0.635, fgImpact: 0.49, ftImpact: -2.523, to: -0.789 } },
          { name: "Tacko Ifaola", min: 12, pts: 2, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -1.84, zScores: { pts: -0.741, reb: -0.125, ast: -0.718, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: -0.698, ftImpact: 0.791, to: 0.046 } },
          { name: "Felipe Quinones", min: 27, pts: 10, reb: 5, ast: 7, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 11, ftm: 1, fta: 2, composite: 2.3, zScores: { pts: 0.45, reb: 0.516, ast: 3.194, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: -0.654, ftImpact: -0.577, to: -0.789 } },
          { name: "Jelani Hamilton", min: 31, pts: 17, reb: 4, ast: 0, stl: 1, blk: 0, to: 4, tpm: 3, fgm: 6, fga: 15, ftm: 2, fta: 4, composite: -1.15, zScores: { pts: 1.492, reb: 0.196, ast: -0.718, stl: 0.373, blk: -0.473, tpm: 2.049, fgImpact: -0.458, ftImpact: -1.154, to: -2.459 } },
          { name: "Matthew Puodziukaitis", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.57, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.046 } },
          { name: "David Musis", min: 8, pts: 7, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 3, fta: 4, composite: -0.65, zScores: { pts: 0.004, reb: 0.196, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.545, ftImpact: 0.214, to: 0.882 } },
          { name: "Kieran Mullen", min: 21, pts: 11, reb: 5, ast: 1, stl: 1, blk: 3, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 5, fta: 6, composite: 5.69, zScores: { pts: 0.599, reb: 0.516, ast: -0.159, stl: 0.373, blk: 3.645, tpm: -0.635, fgImpact: 0.294, ftImpact: 1.006, to: 0.046 } },
          { name: "Milhan Charles", min: 29, pts: 10, reb: 7, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 4, ftm: 5, fta: 6, composite: 2.1, zScores: { pts: 0.45, reb: 1.158, ast: 0.959, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 0.196, ftImpact: 1.006, to: -0.789 } },
          { name: "Zion Sampaio", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.6, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.046 } },
          { name: "Liam Dayco-Green", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } }
        ]
      }
    },
      {
      id: "401921096",
      line: "Rice Owls 81 @ Stephen F. Austin Lumberjacks 78 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "Rice", name: "Rice Owls", score: 81,
        players: [
          { name: "Eternity Eguagie", min: 27, pts: 6, reb: 4, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -2.59, zScores: { pts: -0.145, reb: 0.196, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.403, ftImpact: 0, to: -0.789 } },
          { name: "Jimmy Oladokun Jr.", min: 26, pts: 14, reb: 9, ast: 0, stl: 2, blk: 2, to: 2, tpm: 0, fgm: 6, fga: 9, ftm: 2, fta: 2, composite: 6.81, zScores: { pts: 1.046, reb: 1.799, ast: -0.718, stl: 1.411, blk: 2.272, tpm: -0.635, fgImpact: 1.635, ftImpact: 0.791, to: -0.789 } },
          { name: "Jaxson Thompson", min: 33, pts: 32, reb: 4, ast: 5, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 9, fga: 15, ftm: 10, fta: 11, composite: 12.13, zScores: { pts: 3.725, reb: 0.196, ast: 2.077, stl: 0.373, blk: -0.473, tpm: 2.944, fgImpact: 1.929, ftImpact: 2.984, to: -1.624 } },
          { name: "Carmelo Adkins", min: 40, pts: 12, reb: 8, ast: 2, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 12, ftm: 2, fta: 5, composite: 2.67, zScores: { pts: 0.748, reb: 1.478, ast: 0.4, stl: 2.45, blk: -0.473, tpm: 1.155, fgImpact: -1.003, ftImpact: -2.127, to: 0.046 } },
          { name: "Jacob Dar", min: 32, pts: 8, reb: 4, ast: 1, stl: 1, blk: 1, to: 2, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 1, composite: 0.45, zScores: { pts: 0.153, reb: 0.196, ast: -0.159, stl: 0.373, blk: 0.9, tpm: 1.155, fgImpact: -0.403, ftImpact: -0.973, to: -0.789 } },
          { name: "Alexander Leeth", min: 15, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.13, zScores: { pts: -0.592, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 0.098, ftImpact: 0, to: 0.046 } },
          { name: "Jarne Elouna Eyenga", min: 19, pts: 4, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -1.4, zScores: { pts: -0.443, reb: -0.446, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: 0.098, ftImpact: 0.791, to: 0.046 } },
          { name: "Tristan Vukotic", min: 10, pts: 2, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.74, zScores: { pts: -0.741, reb: 0.516, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.098, ftImpact: 0, to: 0.882 } },
          { name: "Kaiden Myers", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Dallas Hobbs", min: 19, pts: 0, reb: 1, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.45, zScores: { pts: -1.038, reb: -0.766, ast: 0.959, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -1.046, ftImpact: 0, to: -0.789 } }
        ]
      },
      home: {
        abbr: "SFA", name: "Stephen F. Austin Lumberjacks", score: 78,
        players: [

        ]
      }
    },
      {
      id: "401918993",
      line: "Coppin State Eagles 63 @ South Florida Bulls 73 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "COPP", name: "Coppin State Eagles", score: 63,
        players: [

        ]
      },
      home: {
        abbr: "SoFL", name: "South Florida Bulls", score: 73,
        players: [
          { name: "Garrett Johnson", min: 19, pts: 8, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 4, fta: 4, composite: -1.95, zScores: { pts: 0.153, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.153, ftImpact: 1.583, to: 0.046 } },
          { name: "Zayden High", min: 30, pts: 18, reb: 17, ast: 3, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 6, fga: 10, ftm: 6, fta: 7, composite: 10.67, zScores: { pts: 1.641, reb: 4.364, ast: 0.959, stl: -0.666, blk: 2.272, tpm: -0.635, fgImpact: 1.286, ftImpact: 1.401, to: 0.046 } },
          { name: "Chris Davis Jr.", min: 24, pts: 9, reb: 7, ast: 0, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 10, ftm: 4, fta: 4, composite: -2.07, zScores: { pts: 0.301, reb: 1.158, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -1.897, ftImpact: 1.583, to: -1.624 } },
          { name: "Sonny Wilson", min: 36, pts: 12, reb: 2, ast: 3, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 13, ftm: 2, fta: 4, composite: 1.73, zScores: { pts: 0.748, reb: -0.446, ast: 0.959, stl: 1.411, blk: -0.473, tpm: 1.155, fgImpact: -1.352, ftImpact: -1.154, to: 0.882 } },
          { name: "Mike James", min: 32, pts: 9, reb: 8, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 9, ftm: 5, fta: 6, composite: -0.92, zScores: { pts: 0.301, reb: 1.478, ast: 0.4, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -1.548, ftImpact: 1.006, to: -0.789 } },
          { name: "Richard Goods", min: 3, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 1, composite: -4.5, zScores: { pts: -1.038, reb: -1.087, ast: -0.159, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: -0.973, to: 0.882 } },
          { name: "Tiefing Diawara", min: 7, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.77, zScores: { pts: -1.038, reb: -0.125, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Darren Moore", min: 8, pts: 1, reb: 0, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -2.78, zScores: { pts: -0.89, reb: -1.087, ast: -0.718, stl: 1.411, blk: -0.473, tpm: -0.635, fgImpact: -0.698, ftImpact: -0.577, to: 0.882 } },
          { name: "Andrej Shoshkikj", min: 23, pts: 3, reb: 5, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: -0.85, zScores: { pts: -0.592, reb: 0.516, ast: 0.4, stl: 1.411, blk: -0.473, tpm: -0.635, fgImpact: -0.948, ftImpact: -0.577, to: 0.046 } },
          { name: "Josh Omojafo", min: 18, pts: 13, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 3, ftm: 6, fta: 8, composite: 2.22, zScores: { pts: 0.897, reb: -0.766, ast: -0.718, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: 1.341, ftImpact: 0.428, to: 0.882 } }
        ]
      }
    },
      {
      id: "401911392",
      line: "Gardner-Webb Runnin' Bulldogs 62 @ South Carolina Gamecocks 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "GWEB", name: "Gardner-Webb Runnin' Bulldogs", score: 62,
        players: [

        ]
      },
      home: {
        abbr: "SouthCar", name: "South Carolina Gamecocks", score: 79,
        players: [
          { name: "Juan Fernandez", min: 24, pts: 15, reb: 5, ast: 0, stl: 1, blk: 2, to: 2, tpm: 1, fgm: 6, fga: 8, ftm: 2, fta: 4, composite: 3.94, zScores: { pts: 1.195, reb: 0.516, ast: -0.718, stl: 0.373, blk: 2.272, tpm: 0.26, fgImpact: 1.984, ftImpact: -1.154, to: -0.789 } },
          { name: "Aleksas Bieliauskas", min: 25, pts: 23, reb: 4, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 8, fga: 11, ftm: 5, fta: 6, composite: 8.23, zScores: { pts: 2.386, reb: 0.196, ast: -0.159, stl: -0.666, blk: 0.9, tpm: 1.155, fgImpact: 2.529, ftImpact: 1.006, to: 0.882 } },
          { name: "Jakub Necas", min: 30, pts: 7, reb: 5, ast: 5, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 8, ftm: 1, fta: 1, composite: 1.4, zScores: { pts: 0.004, reb: 0.516, ast: 2.077, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: -0.403, ftImpact: 0.396, to: -0.789 } },
          { name: "Kory Mincy", min: 29, pts: 11, reb: 2, ast: 2, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 5, ftm: 7, fta: 8, composite: 0.88, zScores: { pts: 0.599, reb: -0.446, ast: 0.4, stl: 1.411, blk: -0.473, tpm: -0.635, fgImpact: -0.153, ftImpact: 1.797, to: -1.624 } },
          { name: "Marcus Johnson", min: 33, pts: 16, reb: 0, ast: 4, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 9, ftm: 2, fta: 3, composite: 4.53, zScores: { pts: 1.344, reb: -1.087, ast: 1.518, stl: 1.411, blk: -0.473, tpm: 1.155, fgImpact: 1.635, ftImpact: -0.181, to: -0.789 } },
          { name: "Hugo Lopez", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.04, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Hayden Assemian", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Camden Heide", min: 25, pts: 2, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.84, zScores: { pts: -0.741, reb: -0.446, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.251, ftImpact: 0, to: 0.046 } },
          { name: "Shane Blakeney", min: 10, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.7, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Davion Hannah", min: 19, pts: 5, reb: 3, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -1.31, zScores: { pts: -0.294, reb: -0.125, ast: -0.159, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: 0.196, ftImpact: -0.577, to: 0.046 } }
        ]
      }
    },
      {
      id: "401911015",
      line: "Miami (OH) RedHawks 86 @ Evansville Purple Aces 78 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "M-OH", name: "Miami (OH) RedHawks", score: 86,
        players: [

        ]
      },
      home: {
        abbr: "Evans", name: "Evansville Purple Aces", score: 78,
        players: [
          { name: "Gustav Winther", min: 17, pts: 5, reb: 5, ast: 0, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: 2.79, zScores: { pts: -0.294, reb: 0.516, ast: -0.718, stl: -0.666, blk: 2.272, tpm: 0.26, fgImpact: -0.251, ftImpact: 0.791, to: 0.882 } },
          { name: "AJ Casey", min: 33, pts: 26, reb: 5, ast: 6, stl: 1, blk: 1, to: 6, tpm: 1, fgm: 10, fga: 13, ftm: 5, fta: 8, composite: 5.87, zScores: { pts: 2.832, reb: 0.516, ast: 2.635, stl: 0.373, blk: 0.9, tpm: 0.26, fgImpact: 3.422, ftImpact: -0.94, to: -4.129 } },
          { name: "Bryce Quinet", min: 37, pts: 30, reb: 4, ast: 8, stl: 1, blk: 0, to: 3, tpm: 6, fgm: 12, fga: 24, ftm: 0, fta: 0, composite: 11.56, zScores: { pts: 3.428, reb: 0.196, ast: 3.753, stl: 0.373, blk: -0.473, tpm: 4.733, fgImpact: 1.177, ftImpact: 0, to: -1.624 } },
          { name: "Max Langenfeld", min: 30, pts: 2, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 10, ftm: 0, fta: 0, composite: -5.37, zScores: { pts: -0.741, reb: -1.087, ast: -0.159, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -2.692, ftImpact: 0, to: 0.046 } },
          { name: "Makuei Riek", min: 22, pts: 4, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -1.06, zScores: { pts: -0.443, reb: -0.446, ast: -0.159, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.948, ftImpact: 0.791, to: 0.882 } },
          { name: "Yannick Pinas", min: 5, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.86, zScores: { pts: -1.038, reb: -0.766, ast: -0.159, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Caden Symons", min: 24, pts: 3, reb: 4, ast: 2, stl: 4, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: 2.63, zScores: { pts: -0.592, reb: 0.196, ast: 0.4, stl: 3.489, blk: 0.9, tpm: -0.635, fgImpact: -0.6, ftImpact: -0.577, to: 0.046 } },
          { name: "Aaron Gutman", min: 32, pts: 8, reb: 7, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: 0.39, zScores: { pts: 0.153, reb: 1.158, ast: -0.159, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 0.643, ftImpact: -0.577, to: 0.046 } }
        ]
      }
    },
      {
      id: "401924921",
      line: "Wyoming Cowboys 76 @ Denver Pioneers 53 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Wyo", name: "Wyoming Cowboys", score: 76,
        players: [
          { name: "Gavin Gores", min: 19, pts: 15, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 7, fga: 8, ftm: 0, fta: 0, composite: 3.77, zScores: { pts: 1.195, reb: -1.087, ast: -0.159, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: 2.779, ftImpact: 0, to: 0.882 } },
          { name: "Mike Mora", min: 28, pts: 7, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 1.33, zScores: { pts: 0.004, reb: 0.837, ast: -0.159, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 0.643, ftImpact: 0, to: 0.882 } },
          { name: "Nasir Meyer", min: 24, pts: 13, reb: 5, ast: 4, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 9, ftm: 3, fta: 3, composite: 2.6, zScores: { pts: 0.897, reb: 0.516, ast: 1.518, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: 0.839, ftImpact: 1.187, to: -1.624 } },
          { name: "Khaden Bennett", min: 24, pts: 11, reb: 4, ast: 5, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 6, fta: 7, composite: 5.51, zScores: { pts: 0.599, reb: 0.196, ast: 2.077, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: 0.196, ftImpact: 1.401, to: 0.882 } },
          { name: "Parker Gerrits", min: 30, pts: 13, reb: 6, ast: 1, stl: 0, blk: 1, to: 3, tpm: 3, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 3.07, zScores: { pts: 0.897, reb: 0.837, ast: -0.159, stl: -0.666, blk: 0.9, tpm: 2.049, fgImpact: 0.839, ftImpact: 0, to: -1.624 } },
          { name: "Neil Summers", min: 5, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.14, zScores: { pts: -1.038, reb: -0.125, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.698, ftImpact: 0, to: -0.789 } },
          { name: "Renars Sondors", min: 22, pts: 7, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 8, ftm: 1, fta: 3, composite: -2.45, zScores: { pts: 0.004, reb: -0.446, ast: -0.159, stl: -0.666, blk: -0.473, tpm: 1.155, fgImpact: -1.199, ftImpact: -1.55, to: 0.882 } },
          { name: "Linus Ruf", min: 2, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.6, zScores: { pts: -1.038, reb: -0.446, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: -1.624 } },
          { name: "Mattia De Martin", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.92, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.046 } },
          { name: "Madden Smiley", min: 10, pts: 2, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 1, composite: -4.42, zScores: { pts: -0.741, reb: 0.196, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -1.297, ftImpact: -0.973, to: 0.882 } },
          { name: "Uriyah Rojas", min: 24, pts: 8, reb: 8, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 2.87, zScores: { pts: 0.153, reb: 1.478, ast: 0.4, stl: -0.666, blk: -0.473, tpm: 1.155, fgImpact: -0.055, ftImpact: 0, to: 0.882 } },
          { name: "Canin Jefferson", min: 8, pts: 0, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.67, zScores: { pts: -1.038, reb: -0.446, ast: 0.4, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.698, ftImpact: 0, to: 0.882 } }
        ]
      },
      home: {
        abbr: "Denv", name: "Denver Pioneers", score: 53,
        players: [
          { name: "Oskar Stumer", min: 20, pts: 5, reb: 8, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: 1.47, zScores: { pts: -0.294, reb: 1.478, ast: -0.159, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: 0.545, ftImpact: -0.577, to: 0.882 } },
          { name: "Charlie Dimmock", min: 20, pts: 2, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.01, zScores: { pts: -0.741, reb: -0.446, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.251, ftImpact: 0, to: 0.882 } },
          { name: "Shaun Wysocki", min: 26, pts: 7, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: -2.82, zScores: { pts: 0.004, reb: -0.446, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.153, ftImpact: 0.214, to: 0.046 } },
          { name: "Carson Johnson", min: 29, pts: 4, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 9, ftm: 1, fta: 2, composite: -3.76, zScores: { pts: -0.443, reb: -0.446, ast: -0.159, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: -2.344, ftImpact: -0.577, to: 0.046 } },
          { name: "Kam Martin", min: 31, pts: 17, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 11, ftm: 4, fta: 5, composite: 3.4, zScores: { pts: 1.492, reb: -0.125, ast: -0.718, stl: 0.373, blk: -0.473, tpm: 2.049, fgImpact: 0.142, ftImpact: 0.61, to: 0.046 } },
          { name: "Harry Bates", min: 9, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.26, zScores: { pts: -1.038, reb: -0.125, ast: -0.159, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -1.046, ftImpact: 0, to: 0.882 } },
          { name: "Jordan Rogers", min: 10, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.43, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: -0.789 } },
          { name: "Spencer Mahoney", min: 12, pts: 2, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 2, fta: 2, composite: -2.47, zScores: { pts: -0.741, reb: -0.766, ast: -0.159, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -1.744, ftImpact: 0.791, to: 0.882 } },
          { name: "Baba Mbengue", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Trey Cady", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.76, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } },
          { name: "Jaelen Nelson", min: 6, pts: 8, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 3, ftm: 1, fta: 2, composite: 0.15, zScores: { pts: 0.153, reb: -1.087, ast: -0.718, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: 1.341, ftImpact: -0.577, to: 0.882 } },
          { name: "CJ Hyland", min: 16, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -5.49, zScores: { pts: -0.592, reb: -0.446, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.6, ftImpact: -0.577, to: -0.789 } },
          { name: "Logan Threatt", min: 14, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -4.23, zScores: { pts: -0.294, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.153, ftImpact: -0.577, to: 0.046 } }
        ]
      }
    },
      {
      id: "401920307",
      line: "UNC Asheville Bulldogs 74 @ Georgia Tech Yellow Jackets 75 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UNCA", name: "UNC Asheville Bulldogs", score: 74,
        players: [

        ]
      },
      home: {
        abbr: "GaTec", name: "Georgia Tech Yellow Jackets", score: 75,
        players: [
          { name: "Tylis Jordan", min: 34, pts: 17, reb: 7, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 13, ftm: 7, fta: 10, composite: 1.91, zScores: { pts: 1.492, reb: 1.158, ast: -0.718, stl: 0.373, blk: 0.9, tpm: -0.635, fgImpact: -0.556, ftImpact: -0.149, to: 0.046 } },
          { name: "Jackson Fields", min: 32, pts: 14, reb: 14, ast: 2, stl: 1, blk: 2, to: 0, tpm: 1, fgm: 6, fga: 11, ftm: 1, fta: 4, composite: 7.05, zScores: { pts: 1.046, reb: 3.402, ast: 0.4, stl: 0.373, blk: 2.272, tpm: 0.26, fgImpact: 0.937, ftImpact: -2.523, to: 0.882 } },
          { name: "Colby Garland", min: 11, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.038, reb: -0.446, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -1.744, ftImpact: 0, to: 0.882 } },
          { name: "Nasir Whitlock", min: 16, pts: 1, reb: 1, ast: 2, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 6, ftm: 1, fta: 2, composite: -7.32, zScores: { pts: -0.89, reb: -0.766, ast: 0.4, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -2.093, ftImpact: -0.577, to: -1.624 } },
          { name: "Kam Craft", min: 33, pts: 13, reb: 2, ast: 2, stl: 3, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: 6.47, zScores: { pts: 0.897, reb: -0.446, ast: 0.4, stl: 2.45, blk: -0.473, tpm: 2.944, fgImpact: 0.392, ftImpact: -0.577, to: 0.882 } },
          { name: "Ilja Kurucs", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.57, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.046 } },
          { name: "Moustapha Diop", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.76, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } },
          { name: "Victor Valdes", min: 24, pts: 7, reb: 5, ast: 5, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 7, ftm: 2, fta: 5, composite: -2.05, zScores: { pts: 0.004, reb: 0.516, ast: 2.077, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -0.85, ftImpact: -2.127, to: -0.789 } },
          { name: "Cole Kirouac", min: 13, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 2, composite: -4.94, zScores: { pts: -0.741, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.447, ftImpact: -1.946, to: 0.882 } },
          { name: "Jackson McVey", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Courtland Muldrew", min: 11, pts: 10, reb: 0, ast: 3, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 3, fta: 4, composite: 3.26, zScores: { pts: 0.45, reb: -1.087, ast: 0.959, stl: 1.411, blk: -0.473, tpm: 0.26, fgImpact: 0.643, ftImpact: 0.214, to: 0.882 } },
          { name: "Kayden Allen", min: 5, pts: 0, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.7, zScores: { pts: -1.038, reb: -0.766, ast: -0.159, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -1.046, ftImpact: 0, to: 0.046 } },
          { name: "Kaiden Bailey", min: 10, pts: 11, reb: 3, ast: 2, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 7, ftm: 1, fta: 2, composite: 3.18, zScores: { pts: 0.599, reb: -0.125, ast: 0.4, stl: 1.411, blk: -0.473, tpm: 1.155, fgImpact: 0.741, ftImpact: -0.577, to: 0.046 } }
        ]
      }
    },
      {
      id: "401918979",
      line: "Delaware State Hornets 48 @ East Carolina Pirates 72 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DSU", name: "Delaware State Hornets", score: 48,
        players: [

        ]
      },
      home: {
        abbr: "ECU", name: "East Carolina Pirates", score: 72,
        players: [
          { name: "Kaseem Watson", min: 26, pts: 7, reb: 7, ast: 3, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: 1.56, zScores: { pts: 0.004, reb: 1.158, ast: 0.959, stl: -0.666, blk: 0.9, tpm: 0.26, fgImpact: -1.101, ftImpact: 0, to: 0.046 } },
          { name: "Kaden Cooper", min: 24, pts: 11, reb: 8, ast: 2, stl: 1, blk: 2, to: 0, tpm: 2, fgm: 4, fga: 9, ftm: 1, fta: 1, composite: 7.6, zScores: { pts: 0.599, reb: 1.478, ast: 0.4, stl: 0.373, blk: 2.272, tpm: 1.155, fgImpact: 0.043, ftImpact: 0.396, to: 0.882 } },
          { name: "Maxim Klitschko", min: 13, pts: 8, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 1.78, zScores: { pts: 0.153, reb: 0.196, ast: -0.159, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: 1.439, ftImpact: 0, to: 0.882 } },
          { name: "Cian Medley", min: 33, pts: 6, reb: 0, ast: 9, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: 2.01, zScores: { pts: -0.145, reb: -1.087, ast: 4.312, stl: 0.373, blk: -0.473, tpm: 1.155, fgImpact: -0.501, ftImpact: 0, to: -1.624 } },
          { name: "Brycen Blaine", min: 33, pts: 22, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 7, fga: 13, ftm: 4, fta: 4, composite: 7.78, zScores: { pts: 2.237, reb: 0.196, ast: -0.159, stl: 0.373, blk: -0.473, tpm: 2.944, fgImpact: 1.035, ftImpact: 1.583, to: 0.046 } },
          { name: "Jordyn Buchanan", min: 13, pts: 0, reb: 3, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -1.89, zScores: { pts: -1.038, reb: -0.125, ast: -0.718, stl: 0.373, blk: 0.9, tpm: -0.635, fgImpact: -0.698, ftImpact: 0, to: 0.046 } },
          { name: "Dreylan Creasy-Quirindoongo", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Daithi Quinn", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Jayshayne Woodard", min: 8, pts: 4, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 4, fta: 4, composite: -0.53, zScores: { pts: -0.443, reb: -1.087, ast: -0.718, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: -0.349, ftImpact: 1.583, to: 0.882 } },
          { name: "Matthew Hinton", min: 15, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 4, fta: 6, composite: -2.54, zScores: { pts: -0.443, reb: -0.125, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: -0.363, to: 0.882 } },
          { name: "Eli DeLaurier", min: 6, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.67, zScores: { pts: -0.741, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.447, ftImpact: 0, to: 0.882 } },
          { name: "Mason Pandov", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Ashton McCullough", min: 3, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 1, composite: -4.66, zScores: { pts: -1.038, reb: -0.766, ast: -0.159, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: -0.973, to: 0.046 } },
          { name: "Trevor Best", min: 21, pts: 8, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 9, ftm: 2, fta: 3, composite: -2.95, zScores: { pts: 0.153, reb: -0.766, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.752, ftImpact: -0.181, to: 0.046 } }
        ]
      }
    },
      {
      id: "401911264",
      line: "Lafayette Leopards 58 @ St. Bonaventure Bonnies 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LAF", name: "Lafayette Leopards", score: 58,
        players: [

        ]
      },
      home: {
        abbr: "StBon", name: "St. Bonaventure Bonnies", score: 81,
        players: [
          { name: "Benjamin Bill", min: 23, pts: 9, reb: 9, ast: 2, stl: 0, blk: 4, to: 3, tpm: 0, fgm: 4, fga: 7, ftm: 1, fta: 4, composite: 2.81, zScores: { pts: 0.301, reb: 1.799, ast: 0.4, stl: -0.666, blk: 5.017, tpm: -0.635, fgImpact: 0.741, ftImpact: -2.523, to: -1.624 } },
          { name: "Zach Philipkoski", min: 32, pts: 15, reb: 8, ast: 6, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 4, fga: 8, ftm: 6, fta: 6, composite: 9.86, zScores: { pts: 1.195, reb: 1.478, ast: 2.635, stl: 1.411, blk: 0.9, tpm: 0.26, fgImpact: 0.392, ftImpact: 2.374, to: -0.789 } },
          { name: "Ilia Ermakov", min: 28, pts: 9, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 1, fta: 1, composite: 3.55, zScores: { pts: 0.301, reb: -0.125, ast: 0.4, stl: 0.373, blk: -0.473, tpm: 1.155, fgImpact: 0.643, ftImpact: 0.396, to: 0.882 } },
          { name: "Taj Au-Duke", min: 31, pts: 7, reb: 3, ast: 4, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 8, ftm: 4, fta: 6, composite: -2.63, zScores: { pts: 0.004, reb: -0.125, ast: 1.518, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -1.995, ftImpact: -0.363, to: -0.789 } },
          { name: "Ari Fulton", min: 32, pts: 20, reb: 9, ast: 1, stl: 2, blk: 1, to: 2, tpm: 3, fgm: 6, fga: 9, ftm: 5, fta: 9, composite: 6.87, zScores: { pts: 1.939, reb: 1.799, ast: -0.159, stl: 1.411, blk: 0.9, tpm: 2.049, fgImpact: 1.635, ftImpact: -1.913, to: -0.789 } },
          { name: "John Ikpotokin", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.76, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } },
          { name: "Ryan Kalambay", min: 15, pts: 2, reb: 6, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: 0.28, zScores: { pts: -0.741, reb: 0.837, ast: -0.718, stl: -0.666, blk: 2.272, tpm: -0.635, fgImpact: -0.948, ftImpact: 0, to: 0.882 } },
          { name: "Mason Blackwood", min: 10, pts: 11, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 9, ftm: 1, fta: 1, composite: 0.45, zScores: { pts: 0.599, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 1.155, fgImpact: 0.043, ftImpact: 0.396, to: 0.882 } },
          { name: "Chiek Diallo", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Ryan Heath", min: 5, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.83, zScores: { pts: -1.038, reb: -1.087, ast: -0.159, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.698, ftImpact: 0, to: 0.882 } },
          { name: "Achille Lonati", min: 3, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.95, zScores: { pts: -0.592, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 0.447, ftImpact: 0, to: 0.882 } },
          { name: "Akbar Waheed III", min: 15, pts: 3, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.69, zScores: { pts: -0.592, reb: -0.766, ast: 0.4, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 0.098, ftImpact: 0, to: 0.046 } },
          { name: "Jack DeRose", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } }
        ]
      }
    },
      {
      id: "401909728",
      line: "Southern Utah Thunderbirds 51 @ Wake Forest Demon Deacons 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SUU", name: "Southern Utah Thunderbirds", score: 51,
        players: [

        ]
      },
      home: {
        abbr: "Wake", name: "Wake Forest Demon Deacons", score: 89,
        players: [
          { name: "Gavin Placide", min: 27, pts: 16, reb: 7, ast: 1, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 7, fga: 14, ftm: 2, fta: 4, composite: 1.72, zScores: { pts: 1.344, reb: 1.158, ast: -0.159, stl: 0.373, blk: 0.9, tpm: -0.635, fgImpact: 0.687, ftImpact: -1.154, to: -0.789 } },
          { name: "Antonio Dorn", min: 9, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.046 } },
          { name: "Kevair Kennedy", min: 32, pts: 23, reb: 10, ast: 7, stl: 1, blk: 0, to: 3, tpm: 3, fgm: 7, fga: 11, ftm: 6, fta: 6, composite: 12.13, zScores: { pts: 2.386, reb: 2.12, ast: 3.194, stl: 0.373, blk: -0.473, tpm: 2.049, fgImpact: 1.733, ftImpact: 2.374, to: -1.624 } },
          { name: "Justin Ray", min: 21, pts: 8, reb: 4, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 3, fta: 3, composite: 2.69, zScores: { pts: 0.153, reb: 0.196, ast: 0.4, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: 0.545, ftImpact: 1.187, to: 0.046 } },
          { name: "Jamari McDowell", min: 19, pts: 2, reb: 3, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 2, composite: -2.17, zScores: { pts: -0.741, reb: -0.125, ast: 0.4, stl: 1.411, blk: -0.473, tpm: -0.635, fgImpact: -0.948, ftImpact: -1.946, to: 0.882 } },
          { name: "Xander Pintelon", min: 9, pts: 0, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -3.63, zScores: { pts: -1.038, reb: -0.125, ast: -0.718, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: -1.395, ftImpact: 0, to: 0.046 } },
          { name: "Ring Nyeri", min: 7, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.69, zScores: { pts: -0.741, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.251, ftImpact: 0, to: 0.882 } },
          { name: "Vincent Ricchiuti", min: 3, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.95, zScores: { pts: -0.592, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 0.447, ftImpact: 0, to: 0.882 } },
          { name: "Gallagher Placide", min: 17, pts: 9, reb: 3, ast: 0, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 2, fta: 4, composite: 1.71, zScores: { pts: 0.301, reb: -0.125, ast: -0.718, stl: 0.373, blk: 0.9, tpm: 0.26, fgImpact: 0.992, ftImpact: -1.154, to: 0.882 } },
          { name: "Vincent Chaudhri", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.046 } },
          { name: "Justin Abson", min: 12, pts: 0, reb: 3, ast: 0, stl: 2, blk: 2, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: 0.87, zScores: { pts: -1.038, reb: -0.125, ast: -0.718, stl: 1.411, blk: 2.272, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.046 } },
          { name: "Lukas Bojovic", min: 12, pts: 8, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: -0.02, zScores: { pts: 0.153, reb: -0.766, ast: 0.4, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 1.09, ftImpact: 0, to: 0.882 } },
          { name: "Anson Beard Jr.", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Isaac Carr", min: 28, pts: 18, reb: 4, ast: 3, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 8, fga: 11, ftm: 1, fta: 2, composite: 5.99, zScores: { pts: 1.641, reb: 0.196, ast: 0.959, stl: 1.411, blk: -0.473, tpm: 0.26, fgImpact: 2.529, ftImpact: -0.577, to: 0.046 } }
        ]
      }
    },
      {
      id: "401927387",
      line: "Northern Iowa Panthers 76 @ Oakland Golden Grizzlies 80 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NrthIA", name: "Northern Iowa Panthers", score: 76,
        players: [
          { name: "Isaiah Johnson-Arigu", min: 26, pts: 13, reb: 5, ast: 2, stl: 0, blk: 3, to: 4, tpm: 2, fgm: 5, fga: 8, ftm: 1, fta: 2, composite: 4.1, zScores: { pts: 0.897, reb: 0.516, ast: 0.4, stl: -0.666, blk: 3.645, tpm: 1.155, fgImpact: 1.188, ftImpact: -0.577, to: -2.459 } },
          { name: "Ian Smikle", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.6, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.046 } },
          { name: "Carson Vis", min: 33, pts: 15, reb: 2, ast: 4, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 13, ftm: 3, fta: 3, composite: 3.16, zScores: { pts: 1.195, reb: -0.446, ast: 1.518, stl: 0.373, blk: -0.473, tpm: 1.155, fgImpact: -0.556, ftImpact: 1.187, to: -0.789 } },
          { name: "Greyson Uelmen", min: 28, pts: 14, reb: 4, ast: 4, stl: 1, blk: 0, to: 6, tpm: 2, fgm: 3, fga: 7, ftm: 6, fta: 6, composite: 2, zScores: { pts: 1.046, reb: 0.196, ast: 1.518, stl: 0.373, blk: -0.473, tpm: 1.155, fgImpact: -0.055, ftImpact: 2.374, to: -4.129 } },
          { name: "Tate McCubbin", min: 34, pts: 12, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 9, ftm: 1, fta: 1, composite: 2.18, zScores: { pts: 0.748, reb: 0.196, ast: -0.159, stl: -0.666, blk: -0.473, tpm: 2.049, fgImpact: 0.043, ftImpact: 0.396, to: 0.046 } },
          { name: "Will Gerdes", min: 15, pts: 6, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: 0.01, zScores: { pts: -0.145, reb: -0.125, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: 0.894, ftImpact: 0.791, to: 0.046 } },
          { name: "Jules Isebaert", min: 9, pts: 0, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.74, zScores: { pts: -1.038, reb: -0.766, ast: 0.959, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Kyle Pock", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.08, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } },
          { name: "Jalen Wilson", min: 20, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 2, composite: -2.86, zScores: { pts: -0.294, reb: -0.446, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 0.545, ftImpact: -1.946, to: 0.882 } },
          { name: "Levi Valdo", min: 16, pts: 5, reb: 6, ast: 3, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 4, composite: -1.8, zScores: { pts: -0.294, reb: 0.837, ast: 0.959, stl: 1.411, blk: -0.473, tpm: -0.635, fgImpact: 0.545, ftImpact: -2.523, to: -1.624 } },
          { name: "Geon Hutchins", min: 10, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -1.26, zScores: { pts: -0.145, reb: -0.446, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 1.155, fgImpact: -0.85, ftImpact: 0, to: 0.882 } }
        ]
      },
      home: {
        abbr: "OAK", name: "Oakland Golden Grizzlies", score: 80,
        players: [

        ]
      }
    },
      {
      id: "401918055",
      line: "Utah Tech Trailblazers 73 @ California Golden Bears 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UTU", name: "Utah Tech Trailblazers", score: 73,
        players: [

        ]
      },
      home: {
        abbr: "Cal", name: "California Golden Bears", score: 79,
        players: [
          { name: "Jake Wilkins", min: 26, pts: 9, reb: 6, ast: 0, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 5, fta: 5, composite: 5.15, zScores: { pts: 0.301, reb: 0.837, ast: -0.718, stl: 1.411, blk: 0.9, tpm: -0.635, fgImpact: 0.196, ftImpact: 1.978, to: 0.882 } },
          { name: "Sammie Yeanay", min: 27, pts: 7, reb: 7, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 1, fta: 2, composite: 0.37, zScores: { pts: 0.004, reb: 1.158, ast: -0.159, stl: 1.411, blk: -0.473, tpm: -0.635, fgImpact: -0.403, ftImpact: -0.577, to: 0.046 } },
          { name: "Mantas Kocanas", min: 12, pts: 5, reb: 6, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -0.21, zScores: { pts: -0.294, reb: 0.837, ast: -0.718, stl: 1.411, blk: -0.473, tpm: -0.635, fgImpact: 0.196, ftImpact: -0.577, to: 0.046 } },
          { name: "Nojus Indrusaitis", min: 31, pts: 21, reb: 2, ast: 1, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 7, fga: 13, ftm: 6, fta: 7, composite: 4.33, zScores: { pts: 2.088, reb: -0.446, ast: -0.159, stl: 1.411, blk: -0.473, tpm: 0.26, fgImpact: 1.035, ftImpact: 1.401, to: -0.789 } },
          { name: "Jordan Ross", min: 20, pts: 6, reb: 3, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 9, ftm: 1, fta: 1, composite: -2.13, zScores: { pts: -0.145, reb: -0.125, ast: 0.959, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -1.548, ftImpact: 0.396, to: -0.789 } },
          { name: "Amier Ali", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.78, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -1.046, ftImpact: 0, to: 0.882 } },
          { name: "Dominykas Daubaris", min: 18, pts: 3, reb: 3, ast: 1, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: 0.5, zScores: { pts: -0.592, reb: -0.125, ast: -0.159, stl: -0.666, blk: 2.272, tpm: -0.635, fgImpact: 0.098, ftImpact: -0.577, to: 0.882 } },
          { name: "Michael Cooper", min: 27, pts: 21, reb: 6, ast: 0, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 8, fga: 17, ftm: 2, fta: 2, composite: 4.59, zScores: { pts: 2.088, reb: 0.837, ast: -0.718, stl: 0.373, blk: -0.473, tpm: 2.049, fgImpact: 0.436, ftImpact: 0.791, to: -0.789 } },
          { name: "Semetri Carr", min: 24, pts: 7, reb: 6, ast: 3, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 10, ftm: 1, fta: 1, composite: 2.28, zScores: { pts: 0.004, reb: 0.837, ast: 0.959, stl: 1.411, blk: -0.473, tpm: -0.635, fgImpact: -1.101, ftImpact: 0.396, to: 0.882 } },
          { name: "Jovani Ruff", min: 12, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.52, zScores: { pts: -1.038, reb: -1.087, ast: -0.159, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } }
        ]
      }
    },
      {
      id: "401926777",
      line: "UC Riverside Highlanders 80 @ Fresno State Bulldogs 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UCR", name: "UC Riverside Highlanders", score: 80,
        players: [

        ]
      },
      home: {
        abbr: "Fres", name: "Fresno State Bulldogs", score: 89,
        players: [
          { name: "Bradey Henige", min: 28, pts: 21, reb: 9, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 8, fga: 10, ftm: 5, fta: 5, composite: 5.46, zScores: { pts: 2.088, reb: 1.799, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 2.877, ftImpact: 1.978, to: -0.789 } },
          { name: "Roger Fabrega Urpina", min: 38, pts: 11, reb: 6, ast: 8, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 5, fta: 9, composite: 1.36, zScores: { pts: 0.599, reb: 0.837, ast: 3.753, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.643, ftImpact: -1.913, to: -0.789 } },
          { name: "Brian Amuneke", min: 30, pts: 10, reb: 7, ast: 1, stl: 0, blk: 0, to: 5, tpm: 1, fgm: 3, fga: 10, ftm: 3, fta: 6, composite: -5.56, zScores: { pts: 0.45, reb: 1.158, ast: -0.159, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -1.101, ftImpact: -1.731, to: -3.294 } },
          { name: "Dragos Lungu", min: 35, pts: 21, reb: 8, ast: 1, stl: 1, blk: 2, to: 1, tpm: 1, fgm: 7, fga: 14, ftm: 6, fta: 7, composite: 8.45, zScores: { pts: 2.088, reb: 1.478, ast: -0.159, stl: 0.373, blk: 2.272, tpm: 0.26, fgImpact: 0.687, ftImpact: 1.401, to: 0.046 } },
          { name: "Ross Candelino", min: 35, pts: 19, reb: 1, ast: 0, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 6, ftm: 15, fta: 16, composite: 0.53, zScores: { pts: 1.79, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.501, ftImpact: 4.962, to: -2.459 } },
          { name: "Yeshua Kesse-Beda", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.08, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } },
          { name: "Rylan Parsley", min: 10, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.63, zScores: { pts: -0.592, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 0.447, ftImpact: 0, to: 0.882 } },
          { name: "Baye Fall", min: 12, pts: 0, reb: 5, ast: 0, stl: 0, blk: 4, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: 2.66, zScores: { pts: -1.038, reb: 0.516, ast: -0.718, stl: -0.666, blk: 5.017, tpm: -0.635, fgImpact: -0.698, ftImpact: 0, to: 0.882 } },
          { name: "KJ Perry", min: 8, pts: 4, reb: 4, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: 0.76, zScores: { pts: -0.443, reb: 0.196, ast: -0.718, stl: 1.411, blk: -0.473, tpm: -0.635, fgImpact: -0.251, ftImpact: 0.791, to: 0.882 } },
          { name: "Quentin Rhymes", min: 3, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.39, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.698, ftImpact: 0, to: 0.882 } }
        ]
      }
    },
      {
      id: "401925827",
      line: "South Alabama Jaguars 65 @ North Texas Mean Green 66 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "USA", name: "South Alabama Jaguars", score: 65,
        players: [

        ]
      },
      home: {
        abbr: "N TX", name: "North Texas Mean Green", score: 66,
        players: [
          { name: "Ousmane Ndour", min: 17, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.24, zScores: { pts: -1.038, reb: -0.446, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.046 } },
          { name: "Reece Robinson", min: 31, pts: 9, reb: 13, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 3, ftm: 4, fta: 6, composite: 1.18, zScores: { pts: 0.301, reb: 3.081, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 0.545, ftImpact: -0.363, to: -0.789 } },
          { name: "Aeneas Alexander", min: 31, pts: 23, reb: 4, ast: 0, stl: 0, blk: 2, to: 2, tpm: 3, fgm: 9, fga: 15, ftm: 2, fta: 3, composite: 6.48, zScores: { pts: 2.386, reb: 0.196, ast: -0.718, stl: -0.666, blk: 2.272, tpm: 2.049, fgImpact: 1.929, ftImpact: -0.181, to: -0.789 } },
          { name: "Je'Shawn Stevenson", min: 38, pts: 26, reb: 3, ast: 3, stl: 2, blk: 0, to: 0, tpm: 7, fgm: 9, fga: 21, ftm: 1, fta: 3, composite: 9.4, zScores: { pts: 2.832, reb: -0.125, ast: 0.959, stl: 1.411, blk: -0.473, tpm: 5.628, fgImpact: -0.164, ftImpact: -1.55, to: 0.882 } },
          { name: "Cash Chavis", min: 30, pts: 5, reb: 4, ast: 8, stl: 0, blk: 0, to: 5, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -1.72, zScores: { pts: -0.294, reb: 0.196, ast: 3.753, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -1.199, ftImpact: 0, to: -3.294 } },
          { name: "Filip Kalajzic", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "TJ Crumble", min: 13, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 3, composite: -3.75, zScores: { pts: -0.592, reb: -0.446, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.447, ftImpact: -1.55, to: 0.882 } },
          { name: "Braylon Barnes", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.43, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.698, ftImpact: 0, to: 0.882 } },
          { name: "Marcus Zelee", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.08, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } },
          { name: "Cole Franklin", min: 29, pts: 0, reb: 7, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -1.97, zScores: { pts: -1.038, reb: 1.158, ast: 1.518, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -1.046, ftImpact: 0, to: -0.789 } }
        ]
      }
    },
      {
      id: "401909534",
      line: "Colorado Buffaloes 53 @ Providence Friars 67 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Col", name: "Colorado Buffaloes", score: 53,
        players: [
          { name: "Noah Feddersen", min: 33, pts: 6, reb: 7, ast: 2, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: 0.51, zScores: { pts: -0.145, reb: 1.158, ast: 0.4, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: -0.501, ftImpact: 0.791, to: -0.789 } },
          { name: "Alex Dickeson", min: 30, pts: 2, reb: 2, ast: 3, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.5, zScores: { pts: -0.741, reb: -0.446, ast: 0.959, stl: 1.411, blk: -0.473, tpm: -0.635, fgImpact: -0.948, ftImpact: 0, to: -1.624 } },
          { name: "Josiah Sanders", min: 26, pts: 0, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -3.64, zScores: { pts: -1.038, reb: 0.196, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -1.395, ftImpact: 0, to: 0.046 } },
          { name: "Ian Inman", min: 25, pts: 7, reb: 2, ast: 1, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 6, ftm: 2, fta: 3, composite: -1.71, zScores: { pts: 0.004, reb: -0.446, ast: -0.159, stl: 1.411, blk: -0.473, tpm: 0.26, fgImpact: -0.501, ftImpact: -0.181, to: -1.624 } },
          { name: "Barrington Hargress", min: 35, pts: 18, reb: 4, ast: 4, stl: 0, blk: 1, to: 4, tpm: 2, fgm: 7, fga: 15, ftm: 2, fta: 3, composite: 2.44, zScores: { pts: 1.641, reb: 0.196, ast: 1.518, stl: -0.666, blk: 0.9, tpm: 1.155, fgImpact: 0.338, ftImpact: -0.181, to: -2.459 } },
          { name: "Goc Malual", min: 14, pts: 2, reb: 3, ast: 0, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -2.48, zScores: { pts: -0.741, reb: -0.125, ast: -0.718, stl: 0.373, blk: 0.9, tpm: -0.635, fgImpact: -0.698, ftImpact: 0.791, to: -1.624 } },
          { name: "Justin Neely", min: 13, pts: 2, reb: 6, ast: 0, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -5.11, zScores: { pts: -0.741, reb: 0.837, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -1.297, ftImpact: 0, to: -2.459 } },
          { name: "Jalin Holland", min: 24, pts: 16, reb: 5, ast: 0, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 6, fga: 11, ftm: 2, fta: 3, composite: 3.33, zScores: { pts: 1.344, reb: 0.516, ast: -0.718, stl: -0.666, blk: 0.9, tpm: 1.155, fgImpact: 0.937, ftImpact: -0.181, to: 0.046 } }
        ]
      },
      home: {
        abbr: "Prov", name: "Providence Friars", score: 67,
        players: [
          { name: "Leonardo Marangon", min: 15, pts: 3, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.82, zScores: { pts: -0.592, reb: -0.125, ast: -0.159, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -0.948, ftImpact: 0, to: 0.882 } },
          { name: "Jacob Bannarbie", min: 27, pts: 6, reb: 8, ast: 1, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 4, composite: 0.43, zScores: { pts: -0.145, reb: 1.478, ast: -0.159, stl: 1.411, blk: -0.473, tpm: -0.635, fgImpact: 0.894, ftImpact: -1.154, to: -0.789 } },
          { name: "Malik Mack", min: 29, pts: 9, reb: 4, ast: 5, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 11, ftm: 2, fta: 2, composite: 2.12, zScores: { pts: 0.301, reb: 0.196, ast: 2.077, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: -1.45, ftImpact: 0.791, to: 0.046 } },
          { name: "Ryan Mela", min: 17, pts: 7, reb: 2, ast: 2, stl: 2, blk: 0, to: 5, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -1.84, zScores: { pts: 0.004, reb: -0.446, ast: 0.4, stl: 1.411, blk: -0.473, tpm: 0.26, fgImpact: 0.294, ftImpact: 0, to: -3.294 } },
          { name: "Miles Byrd", min: 37, pts: 17, reb: 7, ast: 2, stl: 10, blk: 2, to: 2, tpm: 2, fgm: 6, fga: 19, ftm: 3, fta: 5, composite: 12.8, zScores: { pts: 1.492, reb: 1.158, ast: 0.4, stl: 9.72, blk: 2.272, tpm: 1.155, fgImpact: -1.853, ftImpact: -0.759, to: -0.789 } },
          { name: "Clyde Walters", min: 19, pts: 6, reb: 3, ast: 0, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: 1.05, zScores: { pts: -0.145, reb: -0.125, ast: -0.718, stl: 0.373, blk: 0.9, tpm: 0.26, fgImpact: 0.196, ftImpact: -0.577, to: 0.882 } },
          { name: "Arrinten Page", min: 27, pts: 13, reb: 6, ast: 2, stl: 0, blk: 1, to: 3, tpm: 3, fgm: 5, fga: 13, ftm: 0, fta: 0, composite: 2.24, zScores: { pts: 0.897, reb: 0.837, ast: 0.4, stl: -0.666, blk: 0.9, tpm: 2.049, fgImpact: -0.556, ftImpact: 0, to: -1.624 } },
          { name: "Samson Aletan", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Ryan Sabol", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.43, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.698, ftImpact: 0, to: 0.882 } },
          { name: "Gavin Hightower", min: 22, pts: 6, reb: 3, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 3, composite: 1.33, zScores: { pts: -0.145, reb: -0.125, ast: 0.4, stl: 1.411, blk: -0.473, tpm: -0.635, fgImpact: 0.196, ftImpact: -0.181, to: 0.882 } }
        ]
      }
    },
      {
      id: "401920193",
      line: "Pennsylvania Quakers 77 @ Saint Joseph's Hawks 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Penn", name: "Pennsylvania Quakers", score: 77,
        players: [
          { name: "Lucas Lueth", min: 23, pts: 9, reb: 7, ast: 3, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 6, ftm: 2, fta: 3, composite: 3.98, zScores: { pts: 0.301, reb: 1.158, ast: 0.959, stl: 2.45, blk: -0.473, tpm: 0.26, fgImpact: 0.294, ftImpact: -0.181, to: -0.789 } },
          { name: "Augustus Gerhart", min: 21, pts: 6, reb: 2, ast: 0, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -0.82, zScores: { pts: -0.145, reb: -0.446, ast: -0.718, stl: 0.373, blk: 0.9, tpm: -0.635, fgImpact: 0.643, ftImpact: 0, to: -0.789 } },
          { name: "TJ Power", min: 37, pts: 16, reb: 8, ast: 4, stl: 2, blk: 1, to: 2, tpm: 2, fgm: 5, fga: 15, ftm: 4, fta: 6, composite: 5.4, zScores: { pts: 1.344, reb: 1.478, ast: 1.518, stl: 1.411, blk: 0.9, tpm: 1.155, fgImpact: -1.254, ftImpact: -0.363, to: -0.789 } },
          { name: "Jay Jones", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.046 } },
          { name: "Michael Zanoni", min: 39, pts: 32, reb: 4, ast: 1, stl: 0, blk: 1, to: 0, tpm: 6, fgm: 10, fga: 21, ftm: 6, fta: 6, composite: 12.62, zScores: { pts: 3.725, reb: 0.196, ast: -0.159, stl: -0.666, blk: 0.9, tpm: 4.733, fgImpact: 0.632, ftImpact: 2.374, to: 0.882 } },
          { name: "Dalton Scantlebury", min: 15, pts: 4, reb: 7, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 7, composite: -3.5, zScores: { pts: -0.443, reb: 1.158, ast: -0.718, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: 0.098, ftImpact: -4.073, to: 0.882 } },
          { name: "Ethan Lin", min: 17, pts: 0, reb: 2, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -2.46, zScores: { pts: -1.038, reb: -0.446, ast: 0.959, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -1.046, ftImpact: 0, to: 0.882 } },
          { name: "Johnny Keenan", min: 20, pts: 4, reb: 3, ast: 4, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -0.88, zScores: { pts: -0.443, reb: -0.125, ast: 1.518, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: -0.6, ftImpact: 0.791, to: -1.624 } },
          { name: "Isaiah Carroll", min: 23, pts: 5, reb: 7, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 1, composite: -1.12, zScores: { pts: -0.294, reb: 1.158, ast: -0.718, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: -0.501, ftImpact: -0.973, to: 0.046 } },
          { name: "Niklas Polonowski", min: 1, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.16, zScores: { pts: -0.89, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: -0.577, to: 0.882 } }
        ]
      },
      home: {
        abbr: "StJos", name: "Saint Joseph's Hawks", score: 83,
        players: [
          { name: "Sean Logan", min: 30, pts: 6, reb: 3, ast: 2, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 3, composite: 1.37, zScores: { pts: -0.145, reb: -0.125, ast: 0.4, stl: 0.373, blk: 2.272, tpm: -0.635, fgImpact: 0.196, ftImpact: -0.181, to: -0.789 } },
          { name: "BJ Ranson", min: 35, pts: 17, reb: 1, ast: 1, stl: 2, blk: 1, to: 0, tpm: 5, fgm: 6, fga: 12, ftm: 0, fta: 0, composite: 8.19, zScores: { pts: 1.492, reb: -0.766, ast: -0.159, stl: 1.411, blk: 0.9, tpm: 3.839, fgImpact: 0.588, ftImpact: 0, to: 0.882 } },
          { name: "Khaafiq Myers", min: 30, pts: 30, reb: 4, ast: 7, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 12, fga: 19, ftm: 4, fta: 6, composite: 10.68, zScores: { pts: 3.428, reb: 0.196, ast: 3.194, stl: 1.411, blk: -0.473, tpm: 1.155, fgImpact: 2.921, ftImpact: -0.363, to: -0.789 } },
          { name: "Austin Williford", min: 21, pts: 7, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -0.02, zScores: { pts: 0.004, reb: 0.196, ast: -0.718, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: 0.294, ftImpact: 0, to: 0.046 } },
          { name: "Jaiden Glover-Toscano", min: 36, pts: 8, reb: 8, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 18, ftm: 1, fta: 2, composite: -1.88, zScores: { pts: 0.153, reb: 1.478, ast: 0.959, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -3.891, ftImpact: -0.577, to: 0.882 } },
          { name: "Keoni Sacco", min: 10, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 3, composite: -4, zScores: { pts: -0.294, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.545, ftImpact: -1.55, to: 0.882 } },
          { name: "Mekai Johnson", min: 15, pts: 3, reb: 7, ast: 3, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: 2.51, zScores: { pts: -0.592, reb: 1.158, ast: 0.959, stl: -0.666, blk: 0.9, tpm: 0.26, fgImpact: 0.447, ftImpact: 0, to: 0.046 } },
          { name: "Logan Carey", min: 21, pts: 7, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 3, ftm: 1, fta: 3, composite: -0.78, zScores: { pts: 0.004, reb: -0.446, ast: 0.4, stl: 0.373, blk: -0.473, tpm: 1.155, fgImpact: 0.545, ftImpact: -1.55, to: -0.789 } },
          { name: "Owen Verna", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } }
        ]
      }
    },
      {
      id: "401927377",
      line: "Earlham Quakers 37 @ Indiana State Sycamores 109 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "EARL", name: "Earlham Quakers", score: 37,
        players: [

        ]
      },
      home: {
        abbr: "IndSt", name: "Indiana State Sycamores", score: 109,
        players: [
          { name: "Alessio Calamita", min: 15, pts: 10, reb: 14, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 4.87, zScores: { pts: 0.45, reb: 3.402, ast: -0.159, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: 0.741, ftImpact: 0.791, to: 0.046 } },
          { name: "Jackson Cooper", min: 15, pts: 10, reb: 3, ast: 2, stl: 0, blk: 2, to: 1, tpm: 1, fgm: 4, fga: 7, ftm: 1, fta: 1, composite: 3.77, zScores: { pts: 0.45, reb: -0.125, ast: 0.4, stl: -0.666, blk: 2.272, tpm: 0.26, fgImpact: 0.741, ftImpact: 0.396, to: 0.046 } },
          { name: "Maguire Mitchell", min: 19, pts: 5, reb: 0, ast: 2, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -0.24, zScores: { pts: -0.294, reb: -1.087, ast: 0.4, stl: 1.411, blk: -0.473, tpm: 0.26, fgImpact: -0.501, ftImpact: 0, to: 0.046 } },
          { name: "Meechie White", min: 16, pts: 10, reb: 0, ast: 4, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 9, ftm: 2, fta: 2, composite: 2.86, zScores: { pts: 0.45, reb: -1.087, ast: 1.518, stl: 0.373, blk: -0.473, tpm: 1.155, fgImpact: -0.752, ftImpact: 0.791, to: 0.882 } },
          { name: "Chance Puryear", min: 21, pts: 6, reb: 6, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 2, composite: -1.59, zScores: { pts: -0.145, reb: 0.837, ast: 0.4, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.992, ftImpact: -1.946, to: 0.046 } },
          { name: "Kade Speckman", min: 15, pts: 4, reb: 6, ast: 0, stl: 1, blk: 3, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 4, zScores: { pts: -0.443, reb: 0.837, ast: -0.718, stl: 0.373, blk: 3.645, tpm: -0.635, fgImpact: 0.894, ftImpact: 0, to: 0.046 } },
          { name: "Kingston Land", min: 11, pts: 0, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -1.75, zScores: { pts: -1.038, reb: -0.125, ast: -0.718, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } },
          { name: "Aleksa Vlajic", min: 10, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.09, zScores: { pts: -1.038, reb: -0.446, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Ian Thomas", min: 20, pts: 14, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 7, fga: 8, ftm: 0, fta: 0, composite: 2.89, zScores: { pts: 1.046, reb: -0.446, ast: 0.4, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 2.779, ftImpact: 0, to: 0.882 } },
          { name: "DeShawn Denson II", min: 9, pts: 3, reb: 2, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -1.37, zScores: { pts: -0.592, reb: -0.446, ast: 0.959, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -1.297, ftImpact: 0, to: 0.882 } },
          { name: "Martin Kaupanger", min: 16, pts: 12, reb: 3, ast: 2, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 4.84, zScores: { pts: 0.748, reb: -0.125, ast: 0.4, stl: 1.411, blk: -0.473, tpm: 1.155, fgImpact: 0.839, ftImpact: 0, to: 0.882 } },
          { name: "Duce Paschal", min: 11, pts: 19, reb: 10, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 8, fga: 10, ftm: 3, fta: 3, composite: 7.96, zScores: { pts: 1.79, reb: 2.12, ast: -0.159, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: 2.877, ftImpact: 1.187, to: 0.882 } },
          { name: "EJ McQuillan", min: 14, pts: 11, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 1.34, zScores: { pts: 0.599, reb: -0.766, ast: -0.718, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: 0.392, ftImpact: 0.791, to: 0.882 } },
          { name: "EJ Hazelett III", min: 8, pts: 5, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.14, zScores: { pts: -0.294, reb: -1.087, ast: -0.159, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: 0.196, ftImpact: 0, to: 0.046 } }
        ]
      }
    },
      {
      id: "401925774",
      line: "Howard Bison 64 @ Davidson Wildcats 58 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "HOW", name: "Howard Bison", score: 64,
        players: [

        ]
      },
      home: {
        abbr: "David", name: "Davidson Wildcats", score: 58,
        players: [
          { name: "Josh Scovens", min: 36, pts: 8, reb: 11, ast: 2, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 10, ftm: 2, fta: 2, composite: 4.41, zScores: { pts: 0.153, reb: 2.44, ast: 0.4, stl: 1.411, blk: 0.9, tpm: -0.635, fgImpact: -1.101, ftImpact: 0.791, to: 0.046 } },
          { name: "Jackson Keith", min: 12, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.11, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.698, ftImpact: 0, to: 0.882 } },
          { name: "Ian Platteeuw", min: 23, pts: 2, reb: 9, ast: 2, stl: 1, blk: 4, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 1, composite: 4.82, zScores: { pts: -0.741, reb: 1.799, ast: 0.4, stl: 0.373, blk: 5.017, tpm: -0.635, fgImpact: -1.297, ftImpact: -0.973, to: 0.882 } },
          { name: "Sam Brown", min: 28, pts: 11, reb: 1, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 10, ftm: 2, fta: 4, composite: -2.41, zScores: { pts: 0.599, reb: -0.766, ast: -0.159, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: -0.305, ftImpact: -1.154, to: -0.789 } },
          { name: "Nick Janowski", min: 37, pts: 15, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 12, ftm: 5, fta: 5, composite: 2.91, zScores: { pts: 1.195, reb: 0.837, ast: -0.159, stl: -0.666, blk: -0.473, tpm: 1.155, fgImpact: -1.003, ftImpact: 1.978, to: 0.046 } },
          { name: "Tom Stoiber", min: 8, pts: 5, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 3, composite: -3.6, zScores: { pts: -0.294, reb: -0.766, ast: -0.159, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.894, ftImpact: -1.55, to: 0.046 } },
          { name: "JaQualon Roberts", min: 13, pts: 1, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -2.86, zScores: { pts: -0.89, reb: 0.837, ast: -0.159, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: -0.577, to: 0.046 } },
          { name: "Eetu Heinonen", min: 23, pts: 13, reb: 5, ast: 1, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 13, ftm: 2, fta: 3, composite: -1.99, zScores: { pts: 0.897, reb: 0.516, ast: -0.159, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -0.556, ftImpact: -0.181, to: -1.624 } },
          { name: "Nick Coval", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.43, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.698, ftImpact: 0, to: 0.882 } },
          { name: "John Carter Jr.", min: 16, pts: 3, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: 0.28, zScores: { pts: -0.592, reb: -0.446, ast: -0.159, stl: -0.666, blk: 0.9, tpm: 0.26, fgImpact: 0.098, ftImpact: 0, to: 0.882 } }
        ]
      }
    },
      {
      id: "401921775",
      line: "Rider Broncs 62 @ Villanova Wildcats 99 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "RID", name: "Rider Broncs", score: 62,
        players: [

        ]
      },
      home: {
        abbr: "Vill", name: "Villanova Wildcats", score: 99,
        players: [
          { name: "Devin Royal", min: 28, pts: 21, reb: 5, ast: 2, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 8, fga: 15, ftm: 5, fta: 5, composite: 7, zScores: { pts: 2.088, reb: 0.516, ast: 0.4, stl: 1.411, blk: 0.9, tpm: -0.635, fgImpact: 1.133, ftImpact: 1.978, to: -0.789 } },
          { name: "Kwame Evans Jr.", min: 21, pts: 14, reb: 10, ast: 3, stl: 1, blk: 2, to: 3, tpm: 0, fgm: 4, fga: 8, ftm: 6, fta: 7, composite: 6.3, zScores: { pts: 1.046, reb: 2.12, ast: 0.959, stl: 0.373, blk: 2.272, tpm: -0.635, fgImpact: 0.392, ftImpact: 1.401, to: -1.624 } },
          { name: "Tyler Perkins", min: 28, pts: 11, reb: 7, ast: 4, stl: 1, blk: 1, to: 4, tpm: 2, fgm: 3, fga: 7, ftm: 3, fta: 4, composite: 3.4, zScores: { pts: 0.599, reb: 1.158, ast: 1.518, stl: 0.373, blk: 0.9, tpm: 1.155, fgImpact: -0.055, ftImpact: 0.214, to: -2.459 } },
          { name: "Jake Fiegen", min: 29, pts: 17, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 9, ftm: 3, fta: 3, composite: 7.24, zScores: { pts: 1.492, reb: -0.125, ast: 0.959, stl: 0.373, blk: -0.473, tpm: 2.944, fgImpact: 0.839, ftImpact: 1.187, to: 0.046 } },
          { name: "Elijah Crawford", min: 24, pts: 4, reb: 8, ast: 6, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 8, ftm: 2, fta: 2, composite: 1.78, zScores: { pts: -0.443, reb: 1.478, ast: 2.635, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -1.995, ftImpact: 0.791, to: 0.046 } },
          { name: "Abdou Samb", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Nico Onyekwere", min: 24, pts: 5, reb: 9, ast: 0, stl: 1, blk: 3, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 3, fta: 5, composite: 4.39, zScores: { pts: -0.294, reb: 1.799, ast: -0.718, stl: 0.373, blk: 3.645, tpm: -0.635, fgImpact: 0.098, ftImpact: -0.759, to: 0.882 } },
          { name: "Adam Oumiddoch", min: 18, pts: 12, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: 1.63, zScores: { pts: 0.748, reb: -0.125, ast: -0.718, stl: 0.373, blk: -0.473, tpm: 1.155, fgImpact: -0.207, ftImpact: 0, to: 0.882 } },
          { name: "Carter Fisk", min: 13, pts: 9, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 3, fta: 5, composite: -0.62, zScores: { pts: 0.301, reb: -0.446, ast: -0.159, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: 0.294, ftImpact: -0.759, to: 0.882 } },
          { name: "Wade Chiddick", min: 4, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.78, zScores: { pts: -0.592, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 0.447, ftImpact: 0, to: 0.046 } },
          { name: "Darryl Simmons II", min: 6, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.74, zScores: { pts: -0.592, reb: -1.087, ast: -0.159, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 0.098, ftImpact: 0, to: 0.882 } },
          { name: "Brady Muller", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } }
        ]
      }
    },
      {
      id: "401921063",
      line: "Portland State Vikings 84 @ San Francisco Dons 68 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PRST", name: "Portland State Vikings", score: 84,
        players: [

        ]
      },
      home: {
        abbr: "USF", name: "San Francisco Dons", score: 68,
        players: [
          { name: "Gustav Knudsen", min: 36, pts: 25, reb: 8, ast: 1, stl: 2, blk: 0, to: 3, tpm: 5, fgm: 7, fga: 16, ftm: 6, fta: 6, composite: 9.52, zScores: { pts: 2.683, reb: 1.478, ast: -0.159, stl: 1.411, blk: -0.473, tpm: 3.839, fgImpact: -0.011, ftImpact: 2.374, to: -1.624 } },
          { name: "Ben Oosterbaan", min: 33, pts: 4, reb: 5, ast: 0, stl: 3, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 8, ftm: 4, fta: 4, composite: -2.13, zScores: { pts: -0.443, reb: 0.516, ast: -0.718, stl: 2.45, blk: -0.473, tpm: -0.635, fgImpact: -2.79, ftImpact: 1.583, to: -1.624 } },
          { name: "Ismaila Diagne", min: 19, pts: 12, reb: 11, ast: 0, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 6, ftm: 2, fta: 8, composite: -0.84, zScores: { pts: 0.748, reb: 2.44, ast: -0.718, stl: 0.373, blk: 0.9, tpm: -0.635, fgImpact: 1.886, ftImpact: -5.046, to: -0.789 } },
          { name: "Dylan Bordon", min: 24, pts: 0, reb: 0, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -4.08, zScores: { pts: -1.038, reb: -1.087, ast: 1.518, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -1.744, ftImpact: 0, to: 0.046 } },
          { name: "Yoav Vitlem", min: 32, pts: 24, reb: 1, ast: 4, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 8, fga: 19, ftm: 6, fta: 6, composite: 6.5, zScores: { pts: 2.534, reb: -0.766, ast: 1.518, stl: 0.373, blk: -0.473, tpm: 1.155, fgImpact: -0.262, ftImpact: 2.374, to: 0.046 } },
          { name: "Jaroslavs Pihtovs", min: 8, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.56, zScores: { pts: -1.038, reb: -0.125, ast: -0.159, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } },
          { name: "Adam Tyson", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Ndewedo Newbury", min: 11, pts: 2, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 2, fta: 2, composite: -2.35, zScores: { pts: -0.741, reb: -0.766, ast: -0.718, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: -1.395, ftImpact: 0.791, to: 0.882 } },
          { name: "Andrew Hilman", min: 12, pts: 1, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -4.31, zScores: { pts: -0.89, reb: -1.087, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: -0.577, to: 0.046 } },
          { name: "Jaylen Hunter-Coleman", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.76, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } },
          { name: "Abdul Bashir", min: 10, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.5, zScores: { pts: -1.038, reb: 0.196, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -1.046, ftImpact: 0, to: 0.882 } },
          { name: "Aidan Braccia", min: 10, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.11, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.698, ftImpact: 0, to: 0.882 } }
        ]
      }
    },
      {
      id: "401919017",
      line: "UAB Blazers 68 @ Jacksonville State Gamecocks 71 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UAB", name: "UAB Blazers", score: 68,
        players: [
          { name: "Antallah Sandlin-El", min: 15, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 3, composite: -3.57, zScores: { pts: -0.443, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.251, ftImpact: -0.181, to: 0.882 } },
          { name: "Elijah Duval", min: 26, pts: 12, reb: 2, ast: 1, stl: 1, blk: 2, to: 1, tpm: 2, fgm: 4, fga: 10, ftm: 2, fta: 2, composite: 4.48, zScores: { pts: 0.748, reb: -0.446, ast: -0.159, stl: 0.373, blk: 2.272, tpm: 1.155, fgImpact: -0.305, ftImpact: 0.791, to: 0.046 } },
          { name: "Jeremy Elyzee", min: 29, pts: 13, reb: 4, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 8, ftm: 3, fta: 7, composite: 0.04, zScores: { pts: 0.897, reb: 0.196, ast: -0.718, stl: 1.411, blk: -0.473, tpm: -0.635, fgImpact: 1.188, ftImpact: -2.704, to: 0.882 } },
          { name: "Salim London", min: 38, pts: 14, reb: 7, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 12, ftm: 0, fta: 0, composite: 2.7, zScores: { pts: 1.046, reb: 1.158, ast: -0.159, stl: -0.666, blk: -0.473, tpm: 1.155, fgImpact: 0.588, ftImpact: 0, to: 0.046 } },
          { name: "Justyn Fernandez", min: 32, pts: 15, reb: 2, ast: 2, stl: 3, blk: 0, to: 3, tpm: 1, fgm: 7, fga: 17, ftm: 0, fta: 0, composite: 1.4, zScores: { pts: 1.195, reb: -0.446, ast: 0.4, stl: 2.45, blk: -0.473, tpm: 0.26, fgImpact: -0.36, ftImpact: 0, to: -1.624 } },
          { name: "Aleks Alston", min: 16, pts: 0, reb: 6, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -1.05, zScores: { pts: -1.038, reb: 0.837, ast: 0.4, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -1.395, ftImpact: 0, to: 0.882 } },
          { name: "Kaleb Davis", min: 16, pts: 2, reb: 3, ast: 0, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: 1.76, zScores: { pts: -0.741, reb: -0.125, ast: -0.718, stl: 0.373, blk: 2.272, tpm: -0.635, fgImpact: 0.447, ftImpact: 0, to: 0.882 } },
          { name: "Matt Mbole", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.046 } },
          { name: "Korie Corbett", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "T.J. Caldwell", min: 22, pts: 8, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 7, ftm: 3, fta: 4, composite: -1.41, zScores: { pts: 0.153, reb: -0.766, ast: -0.159, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -0.85, ftImpact: 0.214, to: 0.882 } }
        ]
      },
      home: {
        abbr: "JXST", name: "Jacksonville State Gamecocks", score: 71,
        players: [

        ]
      }
    },
      {
      id: "401917951",
      line: "Austin Peay Governors 60 @ Wichita State Shockers 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "APSU", name: "Austin Peay Governors", score: 60,
        players: [

        ]
      },
      home: {
        abbr: "WichSt", name: "Wichita State Shockers", score: 76,
        players: [
          { name: "Dillon Battie", min: 30, pts: 27, reb: 11, ast: 0, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 11, fga: 15, ftm: 3, fta: 3, composite: 7.8, zScores: { pts: 2.981, reb: 2.44, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 1.155, fgImpact: 3.52, ftImpact: 1.187, to: -1.624 } },
          { name: "William Berg", min: 27, pts: 13, reb: 9, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 6, fga: 8, ftm: 0, fta: 0, composite: 5.06, zScores: { pts: 0.897, reb: 1.799, ast: -0.159, stl: -0.666, blk: 0.9, tpm: 0.26, fgImpact: 1.984, ftImpact: 0, to: 0.046 } },
          { name: "Kenyon Giles", min: 33, pts: 0, reb: 4, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -4.48, zScores: { pts: -1.038, reb: 0.196, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -1.395, ftImpact: 0, to: -0.789 } },
          { name: "Bryce Heard", min: 23, pts: 6, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 8, ftm: 0, fta: 1, composite: -1.79, zScores: { pts: -0.145, reb: -0.766, ast: 0.4, stl: -0.666, blk: -0.473, tpm: 1.155, fgImpact: -1.199, ftImpact: -0.973, to: 0.882 } },
          { name: "Jahari Long", min: 27, pts: 5, reb: 2, ast: 7, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 10, ftm: 0, fta: 0, composite: -0.27, zScores: { pts: -0.294, reb: -0.446, ast: 3.194, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -1.897, ftImpact: 0, to: 0.046 } },
          { name: "Emmanuel Okorafor", min: 11, pts: 3, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -3, zScores: { pts: -0.592, reb: 0.516, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.098, ftImpact: -0.577, to: 0.046 } },
          { name: "Jaret Valencia", min: 10, pts: 0, reb: 4, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.26, zScores: { pts: -1.038, reb: 0.196, ast: -0.718, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.046 } },
          { name: "Cyr Malonga", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.57, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.046 } },
          { name: "Jordan Frison", min: 19, pts: 10, reb: 3, ast: 9, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: 2.58, zScores: { pts: 0.45, reb: -0.125, ast: 4.312, stl: -0.666, blk: -0.473, tpm: 1.155, fgImpact: -0.403, ftImpact: 0.791, to: -2.459 } },
          { name: "Joy Ighovodja", min: 4, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.95, zScores: { pts: -0.592, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 0.447, ftImpact: 0, to: 0.882 } },
          { name: "Michael Gray Jr.", min: 15, pts: 9, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 2.1, zScores: { pts: 0.301, reb: -0.125, ast: -0.718, stl: 0.373, blk: -0.473, tpm: 2.049, fgImpact: 0.643, ftImpact: 0, to: 0.046 } }
        ]
      }
    },
      {
      id: "401911308",
      line: "Brown Bears 74 @ Siena Saints 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Brown", name: "Brown Bears", score: 74,
        players: [
          { name: "N'famara Dabo", min: 30, pts: 10, reb: 12, ast: 0, stl: 2, blk: 3, to: 1, tpm: 0, fgm: 5, fga: 14, ftm: 0, fta: 4, composite: 2.17, zScores: { pts: 0.45, reb: 2.761, ast: -0.718, stl: 1.411, blk: 3.645, tpm: -0.635, fgImpact: -0.905, ftImpact: -3.891, to: 0.046 } },
          { name: "Timmy Bollin", min: 22, pts: 15, reb: 12, ast: 4, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 7, fga: 9, ftm: 0, fta: 0, composite: 7.91, zScores: { pts: 1.195, reb: 2.761, ast: 1.518, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 2.431, ftImpact: 0, to: 0.882 } },
          { name: "Brady Loughlin", min: 28, pts: 6, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -1.94, zScores: { pts: -0.145, reb: 0.196, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 1.155, fgImpact: -0.501, ftImpact: 0, to: -0.789 } },
          { name: "Isaiah Langham", min: 31, pts: 18, reb: 6, ast: 0, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 8, fga: 14, ftm: 1, fta: 1, composite: 5.22, zScores: { pts: 1.641, reb: 0.837, ast: -0.718, stl: 0.373, blk: 0.9, tpm: 0.26, fgImpact: 1.482, ftImpact: 0.396, to: 0.046 } },
          { name: "Jeremiah Jenkins", min: 26, pts: 8, reb: 2, ast: 7, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: 1.23, zScores: { pts: 0.153, reb: -0.446, ast: 3.194, stl: -0.666, blk: -0.473, tpm: 1.155, fgImpact: -0.85, ftImpact: 0.791, to: -1.624 } },
          { name: "Wyatt DeGraaf", min: 10, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 1, composite: -4.99, zScores: { pts: -0.741, reb: -0.446, ast: -0.159, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.948, ftImpact: -0.973, to: 0.046 } },
          { name: "Rykan Woo", min: 14, pts: 4, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 1, fta: 2, composite: -2.87, zScores: { pts: -0.443, reb: -0.125, ast: 0.4, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -1.297, ftImpact: -0.577, to: 0.046 } },
          { name: "Kenneth Francis Jr.", min: 10, pts: 1, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -2.59, zScores: { pts: -0.89, reb: -0.766, ast: -0.159, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: -0.577, to: 0.882 } },
          { name: "Ray Cuevas", min: 24, pts: 10, reb: 2, ast: 1, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 3, fga: 11, ftm: 3, fta: 4, composite: 1.36, zScores: { pts: 0.45, reb: -0.446, ast: -0.159, stl: -0.666, blk: 2.272, tpm: 0.26, fgImpact: -1.45, ftImpact: 0.214, to: 0.882 } },
          { name: "Jerrell Barron Jr.", min: 5, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.19, zScores: { pts: -1.038, reb: -1.087, ast: -0.159, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: -0.789 } }
        ]
      },
      home: {
        abbr: "SIE", name: "Siena Saints", score: 79,
        players: [

        ]
      }
    },
      {
      id: "401911276",
      line: "Binghamton Bearcats 58 @ Duquesne Dukes 71 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BING", name: "Binghamton Bearcats", score: 58,
        players: [

        ]
      },
      home: {
        abbr: "Duques", name: "Duquesne Dukes", score: 71,
        players: [
          { name: "Kerem Konan", min: 34, pts: 16, reb: 10, ast: 1, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 4, fga: 7, ftm: 7, fta: 9, composite: 6.45, zScores: { pts: 1.344, reb: 2.12, ast: -0.159, stl: 0.373, blk: 0.9, tpm: 0.26, fgImpact: 0.741, ftImpact: 0.824, to: 0.046 } },
          { name: "Yoav Berman", min: 27, pts: 9, reb: 5, ast: 6, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 8, ftm: 4, fta: 4, composite: 4.04, zScores: { pts: 0.301, reb: 0.516, ast: 2.635, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: -1.199, ftImpact: 1.583, to: 0.046 } },
          { name: "Ege Demir", min: 17, pts: 8, reb: 5, ast: 1, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 3, fga: 3, ftm: 2, fta: 2, composite: -0.55, zScores: { pts: 0.153, reb: 0.516, ast: -0.159, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: 1.341, ftImpact: 0.791, to: -2.459 } },
          { name: "Izaiah Pasha", min: 28, pts: 15, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 6, ftm: 2, fta: 2, composite: 7.54, zScores: { pts: 1.195, reb: -0.125, ast: 0.959, stl: 0.373, blk: -0.473, tpm: 2.049, fgImpact: 1.886, ftImpact: 0.791, to: 0.882 } },
          { name: "Arness Lawson", min: 28, pts: 5, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 3, fta: 4, composite: -1.72, zScores: { pts: -0.294, reb: -0.125, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.948, ftImpact: 0.214, to: 0.882 } },
          { name: "Dimitrios Ntapsis", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Chaim Galbut", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.41, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Zoje Owinje", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Stephen Olowoniyi", min: 12, pts: 6, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 5, composite: -2.42, zScores: { pts: -0.145, reb: -0.125, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: 0.545, ftImpact: -2.127, to: 0.882 } },
          { name: "Jackson Williams", min: 8, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.04, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } },
          { name: "Brandon Hall", min: 8, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -4.04, zScores: { pts: -0.741, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.6, ftImpact: 0, to: 0.882 } },
          { name: "Josh Smith", min: 13, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 2, composite: -5.03, zScores: { pts: -0.294, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -0.153, ftImpact: -1.946, to: 0.046 } },
          { name: "Jake DiMichele", min: 18, pts: 5, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.05, zScores: { pts: -0.294, reb: -0.446, ast: -0.718, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: 0.196, ftImpact: 0, to: 0.046 } },
          { name: "Ethan Anish", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.08, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } }
        ]
      }
    },
      {
      id: "401911188",
      line: "Cincinnati Bearcats 95 @ Dayton Flyers 72 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Cin", name: "Cincinnati Bearcats", score: 95,
        players: [
          { name: "Tyler Tejada", min: 28, pts: 16, reb: 9, ast: 3, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 11, ftm: 2, fta: 2, composite: 7.72, zScores: { pts: 1.344, reb: 1.799, ast: 0.959, stl: -0.666, blk: -0.473, tpm: 2.944, fgImpact: 0.142, ftImpact: 0.791, to: 0.882 } },
          { name: "Riley Allenspach", min: 25, pts: 20, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 9, fga: 13, ftm: 1, fta: 1, composite: 3.93, zScores: { pts: 1.939, reb: 0.516, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 2.627, ftImpact: 0.396, to: 0.046 } },
          { name: "Elijah Perryman", min: 22, pts: 12, reb: 3, ast: 4, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 5, ftm: 2, fta: 2, composite: 2.76, zScores: { pts: 0.748, reb: -0.125, ast: 1.518, stl: -0.666, blk: -0.473, tpm: 1.155, fgImpact: 1.439, ftImpact: 0.791, to: -1.624 } },
          { name: "MJ Collins Jr.", min: 26, pts: 12, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 9, ftm: 2, fta: 4, composite: 0.02, zScores: { pts: 0.748, reb: -0.125, ast: 0.4, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: 0.839, ftImpact: -1.154, to: 0.046 } },
          { name: "Myles Colvin", min: 21, pts: 3, reb: 3, ast: 3, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: 2.75, zScores: { pts: -0.592, reb: -0.125, ast: 0.959, stl: 0.373, blk: 0.9, tpm: 0.26, fgImpact: 0.098, ftImpact: 0, to: 0.882 } },
          { name: "David Iweze", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 1, composite: -3.96, zScores: { pts: -0.741, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.447, ftImpact: -0.973, to: 0.882 } },
          { name: "Adlan Elamin", min: 11, pts: 7, reb: 1, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: 1.44, zScores: { pts: 0.004, reb: -0.766, ast: -0.159, stl: -0.666, blk: 0.9, tpm: 0.26, fgImpact: 0.196, ftImpact: 0.791, to: 0.882 } },
          { name: "Amani Lyles", min: 13, pts: 6, reb: 4, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -0.56, zScores: { pts: -0.145, reb: 0.196, ast: 0.959, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.992, ftImpact: 0, to: -0.789 } },
          { name: "Trevian Carson", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Eric Mahaffey", min: 23, pts: 3, reb: 1, ast: 3, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: 0.51, zScores: { pts: -0.592, reb: -0.766, ast: 0.959, stl: 2.45, blk: -0.473, tpm: -0.635, fgImpact: 0.098, ftImpact: -0.577, to: 0.046 } },
          { name: "Tylen Riley", min: 13, pts: 9, reb: 3, ast: 2, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 5, ftm: 2, fta: 4, composite: -0.36, zScores: { pts: 0.301, reb: -0.125, ast: 0.4, stl: 1.411, blk: -0.473, tpm: 0.26, fgImpact: 0.643, ftImpact: -1.154, to: -1.624 } },
          { name: "Akai Fleming", min: 11, pts: 5, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 1, fta: 1, composite: -2.59, zScores: { pts: -0.294, reb: -0.766, ast: -0.718, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: -0.85, ftImpact: 0.396, to: 0.046 } }
        ]
      },
      home: {
        abbr: "Dayt", name: "Dayton Flyers", score: 72,
        players: [
          { name: "Amal L'Etang", min: 27, pts: 19, reb: 7, ast: 2, stl: 1, blk: 3, to: 1, tpm: 2, fgm: 6, fga: 10, ftm: 5, fta: 5, composite: 11.83, zScores: { pts: 1.79, reb: 1.158, ast: 0.4, stl: 0.373, blk: 3.645, tpm: 1.155, fgImpact: 1.286, ftImpact: 1.978, to: 0.046 } },
          { name: "Malcolm Thomas", min: 18, pts: 8, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: -1.28, zScores: { pts: 0.153, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.992, ftImpact: 0.791, to: 0.046 } },
          { name: "Tristian Ford", min: 28, pts: 15, reb: 3, ast: 0, stl: 4, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 14, ftm: 6, fta: 8, composite: 1.57, zScores: { pts: 1.195, reb: -0.125, ast: -0.718, stl: 3.489, blk: -0.473, tpm: 0.26, fgImpact: -1.701, ftImpact: 0.428, to: -0.789 } },
          { name: "Landen Joseph", min: 21, pts: 4, reb: 0, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 5, composite: -5.86, zScores: { pts: -0.443, reb: -1.087, ast: 0.959, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.6, ftImpact: -2.127, to: -0.789 } },
          { name: "Aiden Derkack", min: 25, pts: 10, reb: 2, ast: 3, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 2.01, zScores: { pts: 0.45, reb: -0.446, ast: 0.959, stl: 1.411, blk: -0.473, tpm: -0.635, fgImpact: 0.741, ftImpact: 0.791, to: -0.789 } },
          { name: "Grant Randall", min: 29, pts: 6, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 1, fta: 1, composite: -0.74, zScores: { pts: -0.145, reb: -0.125, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -0.153, ftImpact: 0.396, to: 0.882 } },
          { name: "Cody Peck", min: 5, pts: 2, reb: 1, ast: 0, stl: 0, blk: 4, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: 3.16, zScores: { pts: -0.741, reb: -0.766, ast: -0.718, stl: -0.666, blk: 5.017, tpm: -0.635, fgImpact: 0, ftImpact: 0.791, to: 0.882 } },
          { name: "Damon Friery", min: 14, pts: 4, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -1.09, zScores: { pts: -0.443, reb: -0.125, ast: -0.718, stl: -0.666, blk: 0.9, tpm: 0.26, fgImpact: -0.6, ftImpact: -0.577, to: 0.882 } },
          { name: "Jaiun Simon", min: 5, pts: 1, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -4.38, zScores: { pts: -0.89, reb: -0.125, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: -0.577, to: 0.046 } },
          { name: "Jalen Haynes", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.57, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.046 } },
          { name: "Julian Washington", min: 17, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.81, zScores: { pts: -0.592, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 0.098, ftImpact: 0, to: 0.046 } },
          { name: "Jaron McKie", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Travis Perry", min: 9, pts: 0, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -1.93, zScores: { pts: -1.038, reb: -1.087, ast: 0.4, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } }
        ]
      }
    },
      {
      id: "401911520",
      line: "UC Davis Aggies 75 @ Sacramento State Hornets 56 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UCDav", name: "UC Davis Aggies", score: 75,
        players: [
          { name: "Omer Suljanovic", min: 11, pts: 3, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.79, zScores: { pts: -0.592, reb: -0.125, ast: -0.159, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -0.251, ftImpact: 0, to: -0.789 } },
          { name: "Isaiah Chappell", min: 13, pts: 5, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.39, zScores: { pts: -0.294, reb: -0.125, ast: -0.718, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: 0.545, ftImpact: 0, to: 0.046 } },
          { name: "Jalen Stokes", min: 27, pts: 11, reb: 10, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 5, fta: 6, composite: 3.86, zScores: { pts: 0.599, reb: 2.12, ast: -0.159, stl: 1.411, blk: -0.473, tpm: -0.635, fgImpact: -0.055, ftImpact: 1.006, to: 0.046 } },
          { name: "Brayden Fagbemi", min: 29, pts: 4, reb: 5, ast: 5, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 9, ftm: 0, fta: 0, composite: -0.92, zScores: { pts: -0.443, reb: 0.516, ast: 2.077, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -1.548, ftImpact: 0, to: -0.789 } },
          { name: "Connor Sevilla", min: 26, pts: 16, reb: 3, ast: 0, stl: 0, blk: 0, to: 6, tpm: 2, fgm: 5, fga: 7, ftm: 4, fta: 4, composite: -0.49, zScores: { pts: 1.344, reb: -0.125, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 1.155, fgImpact: 1.537, ftImpact: 1.583, to: -4.129 } },
          { name: "Julian Dabrowski", min: 1, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.16, zScores: { pts: -0.89, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: -0.577, to: 0.882 } },
          { name: "Nnadalu Noble", min: 2, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.44, zScores: { pts: -1.038, reb: -0.446, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } },
          { name: "Veniamin Abosi", min: 21, pts: 4, reb: 3, ast: 2, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.68, zScores: { pts: -0.443, reb: -0.125, ast: 0.4, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.153, ftImpact: 0, to: -1.624 } },
          { name: "Aleks Szymczyk", min: 19, pts: 9, reb: 6, ast: 3, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 1, fta: 3, composite: 3.16, zScores: { pts: 0.301, reb: 0.837, ast: 0.959, stl: 0.373, blk: 0.9, tpm: -0.635, fgImpact: 1.09, ftImpact: -1.55, to: 0.882 } },
          { name: "Koby Moir", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.92, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.046 } },
          { name: "Ylan Esso-Essis", min: 22, pts: 15, reb: 8, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 9, ftm: 3, fta: 4, composite: 1.8, zScores: { pts: 1.195, reb: 1.478, ast: -0.159, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 1.635, ftImpact: 0.214, to: -0.789 } },
          { name: "Chase Rawlins", min: 12, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -5.28, zScores: { pts: -0.592, reb: -0.446, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.447, ftImpact: -0.577, to: -1.624 } },
          { name: "Clarence Massamba", min: 13, pts: 4, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 3, composite: -3.45, zScores: { pts: -0.443, reb: -0.766, ast: 0.4, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.098, ftImpact: -0.181, to: -0.789 } },
          { name: "Caspian Jones", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.57, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.046 } }
        ]
      },
      home: {
        abbr: "SAC", name: "Sacramento State Hornets", score: 56,
        players: [

        ]
      }
    },
      {
      id: "401911347",
      line: "UL Monroe Warhawks 52 @ Grand Canyon Lopes 88 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ULM", name: "UL Monroe Warhawks", score: 52,
        players: [

        ]
      },
      home: {
        abbr: "GrCan", name: "Grand Canyon Lopes", score: 88,
        players: [
          { name: "Blake Barkley", min: 20, pts: 2, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.77, zScores: { pts: -0.741, reb: 0.196, ast: 0.4, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.098, ftImpact: 0, to: 0.046 } },
          { name: "Efe Demirel", min: 20, pts: 10, reb: 8, ast: 0, stl: 0, blk: 3, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 2, fta: 4, composite: 3.19, zScores: { pts: 0.45, reb: 1.478, ast: -0.718, stl: -0.666, blk: 3.645, tpm: -0.635, fgImpact: 0.741, ftImpact: -1.154, to: 0.046 } },
          { name: "Makaih Williams", min: 21, pts: 9, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 10, ftm: 2, fta: 2, composite: -1.29, zScores: { pts: 0.301, reb: -0.766, ast: -0.718, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: -1.101, ftImpact: 0.791, to: 0.046 } },
          { name: "Jaden Henley", min: 23, pts: 18, reb: 6, ast: 4, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 7, fga: 7, ftm: 0, fta: 1, composite: 9.88, zScores: { pts: 1.641, reb: 0.837, ast: 1.518, stl: 0.373, blk: -0.473, tpm: 2.944, fgImpact: 3.128, ftImpact: -0.973, to: 0.882 } },
          { name: "Dylan Darling", min: 25, pts: 11, reb: 6, ast: 8, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 5, ftm: 4, fta: 6, composite: 5.88, zScores: { pts: 0.599, reb: 0.837, ast: 3.753, stl: 1.411, blk: -0.473, tpm: 0.26, fgImpact: 0.643, ftImpact: -0.363, to: -0.789 } },
          { name: "Amarion Dickerson", min: 14, pts: 12, reb: 1, ast: 2, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 3.36, zScores: { pts: 0.748, reb: -0.766, ast: 0.4, stl: 1.411, blk: -0.473, tpm: 1.155, fgImpact: 0.839, ftImpact: 0, to: 0.046 } },
          { name: "Jack Sawyer", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.73, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.882 } },
          { name: "Tyler Behrend", min: 16, pts: 2, reb: 6, ast: 2, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: 2.67, zScores: { pts: -0.741, reb: 0.837, ast: 0.4, stl: 1.411, blk: 0.9, tpm: -0.635, fgImpact: 0.447, ftImpact: 0, to: 0.046 } },
          { name: "Omaha Biliew", min: 11, pts: 3, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -1.75, zScores: { pts: -0.592, reb: -0.446, ast: -0.718, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: 0.098, ftImpact: -0.577, to: 0.882 } },
          { name: "Micah Tucker", min: 9, pts: 3, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 1, composite: -1.51, zScores: { pts: -0.592, reb: -0.446, ast: 0.4, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 0.098, ftImpact: -0.973, to: 0.882 } },
          { name: "Jaden Zimmerman", min: 13, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -1.53, zScores: { pts: -0.145, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.196, ftImpact: 0.791, to: 0.882 } },
          { name: "Caleb Shaw", min: 9, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.79, zScores: { pts: -1.038, reb: -0.446, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.698, ftImpact: 0, to: 0.882 } },
          { name: "Tre Holloman", min: 18, pts: 12, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 10, ftm: 2, fta: 2, composite: 2.97, zScores: { pts: 0.748, reb: -0.125, ast: 0.959, stl: -0.666, blk: -0.473, tpm: 1.155, fgImpact: -0.305, ftImpact: 0.791, to: 0.882 } }
        ]
      }
    },
      {
      id: "401920760",
      line: "Furman Paladins 62 @ Belmont Bruins 72 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "FUR", name: "Furman Paladins", score: 62,
        players: [

        ]
      },
      home: {
        abbr: "Belm", name: "Belmont Bruins", score: 72,
        players: [
          { name: "Vincent Neugebauer", min: 22, pts: 17, reb: 6, ast: 2, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 7, fga: 9, ftm: 3, fta: 4, composite: 6.39, zScores: { pts: 1.492, reb: 0.837, ast: 0.4, stl: -0.666, blk: 2.272, tpm: -0.635, fgImpact: 2.431, ftImpact: 0.214, to: 0.046 } },
          { name: "Ethan Sage", min: 28, pts: 9, reb: 3, ast: 0, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: -0.22, zScores: { pts: 0.301, reb: -0.125, ast: -0.718, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: 0.992, ftImpact: 0.791, to: -1.624 } },
          { name: "Jack Smiley", min: 38, pts: 15, reb: 4, ast: 6, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 14, ftm: 8, fta: 8, composite: 6.98, zScores: { pts: 1.195, reb: 0.196, ast: 2.635, stl: 2.45, blk: -0.473, tpm: 0.26, fgImpact: -2.496, ftImpact: 3.165, to: 0.046 } },
          { name: "Jabez Jenkins", min: 19, pts: 10, reb: 3, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 4, fta: 8, composite: -3.02, zScores: { pts: 0.45, reb: -0.125, ast: -0.159, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: 0.643, ftImpact: -2.309, to: -0.789 } },
          { name: "Isaiah West", min: 20, pts: 8, reb: 5, ast: 0, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 4, composite: 1.01, zScores: { pts: 0.153, reb: 0.516, ast: -0.718, stl: 0.373, blk: 2.272, tpm: -0.635, fgImpact: 0.992, ftImpact: -1.154, to: -0.789 } },
          { name: "Charlie Gersmehl", min: 15, pts: 2, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.49, zScores: { pts: -0.741, reb: -0.125, ast: -0.718, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: 0.447, ftImpact: 0, to: 0.046 } },
          { name: "Kayden Fish", min: 13, pts: 4, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 4, fta: 4, composite: -1.2, zScores: { pts: -0.443, reb: -0.446, ast: -0.159, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -1.046, ftImpact: 1.583, to: 0.046 } },
          { name: "Matthew Zobrist", min: 14, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.6, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.046 } },
          { name: "Aleksa Ristic", min: 23, pts: 2, reb: 7, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 1, composite: -2.55, zScores: { pts: -0.741, reb: 1.158, ast: 1.518, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.948, ftImpact: -0.973, to: -0.789 } },
          { name: "Cooper Haynes", min: 8, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.9, zScores: { pts: -0.294, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: 0.196, ftImpact: 0, to: 0.882 } }
        ]
      }
    },
      {
      id: "401917530",
      line: "New Mexico Lobos 85 @ Santa Clara Broncos 90 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NM", name: "New Mexico Lobos", score: 85,
        players: [
          { name: "Federico Grani", min: 9, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.53, zScores: { pts: -0.741, reb: -0.446, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: 0.098, ftImpact: 0, to: 0.046 } },
          { name: "Tunde Vahlberg Fasasi", min: 20, pts: 9, reb: 3, ast: 3, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 2.39, zScores: { pts: 0.301, reb: -0.125, ast: 0.959, stl: -0.666, blk: -0.473, tpm: 2.049, fgImpact: 0.294, ftImpact: 0, to: 0.046 } },
          { name: "Hudson Mayes", min: 31, pts: 24, reb: 12, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 9, fga: 12, ftm: 6, fta: 12, composite: 4.52, zScores: { pts: 2.534, reb: 2.761, ast: 0.4, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: 2.975, ftImpact: -3.463, to: 0.046 } },
          { name: "Uriah Tenette", min: 30, pts: 7, reb: 3, ast: 2, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 11, ftm: 1, fta: 3, composite: -1, zScores: { pts: 0.004, reb: -0.125, ast: 0.4, stl: 1.411, blk: 0.9, tpm: -0.635, fgImpact: -1.45, ftImpact: -1.55, to: 0.046 } },
          { name: "Jake Hall", min: 31, pts: 19, reb: 1, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 21, ftm: 9, fta: 12, composite: -0.57, zScores: { pts: 1.79, reb: -0.766, ast: 0.959, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -3.346, ftImpact: 0.643, to: 0.882 } },
          { name: "Fynn Lastring", min: 20, pts: 13, reb: 2, ast: 0, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 5.47, zScores: { pts: 0.897, reb: -0.446, ast: -0.718, stl: 0.373, blk: 0.9, tpm: 2.049, fgImpact: 0.741, ftImpact: 0.791, to: 0.882 } },
          { name: "Benjamin Schuch", min: 9, pts: 0, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -0.97, zScores: { pts: -1.038, reb: -0.125, ast: 0.4, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } },
          { name: "Rytis Petraitis", min: 10, pts: 3, reb: 5, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 3, fta: 4, composite: -1.28, zScores: { pts: -0.592, reb: 0.516, ast: -0.718, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: -0.349, ftImpact: 0.214, to: 0.046 } },
          { name: "Dax Hall", min: 16, pts: 5, reb: 4, ast: 2, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 2, composite: 1.33, zScores: { pts: -0.294, reb: 0.196, ast: 0.4, stl: 1.411, blk: -0.473, tpm: 0.26, fgImpact: 0.894, ftImpact: -1.946, to: 0.882 } },
          { name: "Chris Howell", min: 24, pts: 3, reb: 6, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -0.71, zScores: { pts: -0.592, reb: 0.837, ast: 0.959, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -0.251, ftImpact: 0, to: -0.789 } }
        ]
      },
      home: {
        abbr: "SCla", name: "Santa Clara Broncos", score: 90,
        players: [
          { name: "Chris Tadjo", min: 18, pts: 3, reb: 2, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -4.94, zScores: { pts: -0.592, reb: -0.446, ast: -0.718, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.251, ftImpact: -0.577, to: -1.624 } },
          { name: "Brad Longcor III", min: 26, pts: 12, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 8, ftm: 1, fta: 1, composite: 2.96, zScores: { pts: 0.748, reb: -0.766, ast: 0.4, stl: -0.666, blk: -0.473, tpm: 2.049, fgImpact: 0.392, ftImpact: 0.396, to: 0.882 } },
          { name: "Sash Gavalyugov", min: 24, pts: 19, reb: 4, ast: 3, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 6, fga: 13, ftm: 4, fta: 4, composite: 4.05, zScores: { pts: 1.79, reb: 0.196, ast: 0.959, stl: -0.666, blk: -0.473, tpm: 2.049, fgImpact: 0.24, ftImpact: 1.583, to: -1.624 } },
          { name: "Jake Ensminger", min: 33, pts: 7, reb: 9, ast: 3, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 5.47, zScores: { pts: 0.004, reb: 1.799, ast: 0.959, stl: -0.666, blk: 0.9, tpm: 0.26, fgImpact: 0.545, ftImpact: 0.791, to: 0.882 } },
          { name: "Fedor Zugic", min: 23, pts: 15, reb: 8, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 6, ftm: 6, fta: 8, composite: 4.19, zScores: { pts: 1.195, reb: 1.478, ast: -0.159, stl: -0.666, blk: -0.473, tpm: 2.049, fgImpact: 0.294, ftImpact: 0.428, to: 0.046 } },
          { name: "Elijah Mahi", min: 28, pts: 26, reb: 9, ast: 5, stl: 1, blk: 0, to: 4, tpm: 6, fgm: 9, fga: 15, ftm: 2, fta: 4, composite: 9.66, zScores: { pts: 2.832, reb: 1.799, ast: 2.077, stl: 0.373, blk: -0.473, tpm: 4.733, fgImpact: 1.929, ftImpact: -1.154, to: -2.459 } },
          { name: "Sidi Gueye", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.43, zScores: { pts: -1.038, reb: -1.087, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.698, ftImpact: 0, to: 0.882 } },
          { name: "Francis Chukwudebelu", min: 9, pts: 0, reb: 2, ast: 0, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: 0.67, zScores: { pts: -1.038, reb: -0.446, ast: -0.718, stl: -0.666, blk: 3.645, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: 0.882 } },
          { name: "Thierry Darlan", min: 15, pts: 1, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 1, fta: 2, composite: -5.49, zScores: { pts: -0.89, reb: -1.087, ast: -0.159, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -1.046, ftImpact: -0.577, to: 0.046 } },
          { name: "David Castillo", min: 21, pts: 7, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 1, composite: -1.07, zScores: { pts: 0.004, reb: -0.446, ast: 0.4, stl: -0.666, blk: -0.473, tpm: 0.26, fgImpact: -0.055, ftImpact: -0.973, to: 0.882 } }
        ]
      }
    },
      {
      id: "401911455",
      line: "Utah Valley Wolverines 73 @ Nevada Wolf Pack 71 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UVU", name: "Utah Valley Wolverines", score: 73,
        players: [

        ]
      },
      home: {
        abbr: "Nev", name: "Nevada Wolf Pack", score: 71,
        players: [
          { name: "Elijah Price", min: 20, pts: 7, reb: 3, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 9, ftm: 3, fta: 4, composite: -0.99, zScores: { pts: 0.004, reb: -0.125, ast: -0.718, stl: 1.411, blk: -0.473, tpm: -0.635, fgImpact: -1.548, ftImpact: 0.214, to: 0.882 } },
          { name: "Simon Majok", min: 16, pts: 4, reb: 6, ast: 0, stl: 6, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 4, composite: 0.84, zScores: { pts: -0.443, reb: 0.837, ast: -0.718, stl: 5.566, blk: -0.473, tpm: -0.635, fgImpact: 0.545, ftImpact: -3.891, to: 0.046 } },
          { name: "Vaughn Weems", min: 23, pts: 8, reb: 0, ast: 2, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 4, fta: 6, composite: 0.81, zScores: { pts: 0.153, reb: -1.087, ast: 0.4, stl: 1.411, blk: 0.9, tpm: -0.635, fgImpact: -0.85, ftImpact: -0.363, to: 0.882 } },
          { name: "Peter Bandelj", min: 21, pts: 8, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 3, fta: 4, composite: -0.24, zScores: { pts: 0.153, reb: 0.196, ast: -0.159, stl: 0.373, blk: -0.473, tpm: 0.26, fgImpact: -0.85, ftImpact: 0.214, to: 0.046 } },
          { name: "Styles Phipps", min: 26, pts: 18, reb: 0, ast: 6, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 5, fga: 11, ftm: 7, fta: 8, composite: 4.7, zScores: { pts: 1.641, reb: -1.087, ast: 2.635, stl: 1.411, blk: -0.473, tpm: 0.26, fgImpact: 0.142, ftImpact: 1.797, to: -1.624 } },
          { name: "Kade Snyder", min: 7, pts: 2, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -1.71, zScores: { pts: -0.741, reb: 0.196, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0.791, to: 0.882 } },
          { name: "Cedric Lath", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.88, zScores: { pts: -1.038, reb: -0.766, ast: -0.718, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.046 } },
          { name: "TJ Coulter", min: 10, pts: 3, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 1, composite: -1.48, zScores: { pts: -0.592, reb: -0.446, ast: -0.718, stl: -0.666, blk: 0.9, tpm: -0.635, fgImpact: -0.6, ftImpact: 0.396, to: 0.882 } },
          { name: "Peyton White", min: 32, pts: 17, reb: 10, ast: 0, stl: 0, blk: 1, to: 3, tpm: 2, fgm: 6, fga: 11, ftm: 3, fta: 4, composite: 3.81, zScores: { pts: 1.492, reb: 2.12, ast: -0.718, stl: -0.666, blk: 0.9, tpm: 1.155, fgImpact: 0.937, ftImpact: 0.214, to: -1.624 } },
          { name: "Myles Walker", min: 17, pts: 0, reb: 0, ast: 3, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.04, zScores: { pts: -1.038, reb: -1.087, ast: 0.959, stl: 0.373, blk: -0.473, tpm: -0.635, fgImpact: -0.349, ftImpact: 0, to: -0.789 } },
          { name: "SJ Madison", min: 11, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -3.35, zScores: { pts: -0.443, reb: -0.446, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -0.85, ftImpact: 0, to: 0.882 } },
          { name: "Keyon Kensie Jr.", min: 12, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.17, zScores: { pts: -1.038, reb: 0.196, ast: -0.718, stl: -0.666, blk: -0.473, tpm: -0.635, fgImpact: -1.046, ftImpact: 0, to: -0.789 } }
        ]
      }
    },
      {
      id: "401924720",
      line: "UNC Greensboro Spartans @ Cornell Big Red (Postponed)",
      completed: false,
      statusText: "Postponed",
      away: {
        abbr: "UNCG", name: "UNC Greensboro Spartans", score: null,
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
      id: "401917529",
      line: "Air Force Falcons @ Pacific Tigers (Postponed)",
      completed: false,
      statusText: "Postponed",
      away: {
        abbr: "AF", name: "Air Force Falcons", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Pacif", name: "Pacific Tigers", score: null,
        players: [

        ]
      }
    }
    ]
  },
    "2026-11-15": {
    games: [
      {
      id: "401906866",
      line: "Baylor Bears 72 @ Texas Longhorns 75 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Baylor", name: "Baylor Bears", score: 72,
        players: [
          { name: "Elijah Williams", min: 16, pts: 6, reb: 1, ast: 0, stl: 1, blk: 2, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 2.39, zScores: { pts: -0.238, reb: -0.776, ast: -0.771, stl: 0.323, blk: 2.27, tpm: 1.044, fgImpact: -0.285, ftImpact: 0, to: 0.821 } },
          { name: "Juslin Bodo Bodo", min: 14, pts: 2, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.95, zScores: { pts: -0.862, reb: 0.304, ast: -0.771, stl: -0.714, blk: 0.899, tpm: -0.682, fgImpact: 0.055, ftImpact: 0, to: 0.821 } },
          { name: "Brett Decker Jr.", min: 19, pts: 9, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 7, ftm: 0, fta: 2, composite: -1.03, zScores: { pts: 0.229, reb: -0.776, ast: 0.234, stl: -0.714, blk: -0.472, tpm: 1.907, fgImpact: -0.229, ftImpact: -2.031, to: 0.821 } },
          { name: "Dylan Mingo", min: 23, pts: 6, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 8, ftm: 4, fta: 4, composite: -2.07, zScores: { pts: -0.238, reb: 1.024, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -2.317, ftImpact: 1.531, to: 0.069 } },
          { name: "Kayden Mingo", min: 36, pts: 23, reb: 7, ast: 6, stl: 3, blk: 0, to: 2, tpm: 4, fgm: 8, fga: 20, ftm: 3, fta: 4, composite: 9.04, zScores: { pts: 2.41, reb: 1.384, ast: 2.244, stl: 2.398, blk: -0.472, tpm: 2.77, fgImpact: -1.138, ftImpact: 0.133, to: -0.684 } },
          { name: "Evan Chatman", min: 13, pts: 6, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -1.4, zScores: { pts: -0.238, reb: -0.056, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.957, ftImpact: 0, to: 0.069 } },
          { name: "Isaac Celiscar", min: 28, pts: 10, reb: 4, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 2.17, zScores: { pts: 0.385, reb: 0.304, ast: -0.771, stl: 0.323, blk: -0.472, tpm: 1.044, fgImpact: -0.229, ftImpact: 0.766, to: 0.821 } },
          { name: "Mayo Soyoye", min: 2, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -3.84, zScores: { pts: -0.862, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.395, ftImpact: 0.766, to: 0.069 } },
          { name: "Caden Powell", min: 23, pts: 2, reb: 5, ast: 2, stl: 2, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 2, composite: 1.43, zScores: { pts: -0.862, reb: 0.664, ast: 0.234, stl: 1.361, blk: 2.27, tpm: -0.682, fgImpact: -0.34, ftImpact: -2.031, to: 0.821 } },
          { name: "Isaac Williams IV", min: 26, pts: 6, reb: 1, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 9, ftm: 2, fta: 2, composite: -3.4, zScores: { pts: -0.238, reb: -0.776, ast: 0.234, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: -1.866, ftImpact: 0.766, to: -0.684 } }
        ]
      },
      home: {
        abbr: "Tex", name: "Texas Longhorns", score: 75,
        players: [
          { name: "David Punch", min: 29, pts: 6, reb: 7, ast: 2, stl: 2, blk: 2, to: 2, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 4, composite: 1.7, zScores: { pts: -0.238, reb: 1.384, ast: 0.234, stl: 1.361, blk: 2.27, tpm: -0.682, fgImpact: -0.68, ftImpact: -1.266, to: -0.684 } },
          { name: "Matas Vokietaitis", min: 33, pts: 14, reb: 10, ast: 2, stl: 1, blk: 1, to: 4, tpm: 0, fgm: 6, fga: 8, ftm: 2, fta: 4, composite: 2.71, zScores: { pts: 1.008, reb: 2.464, ast: 0.234, stl: 0.323, blk: 0.899, tpm: -0.682, fgImpact: 1.914, ftImpact: -1.266, to: -2.189 } },
          { name: "Elyjah Freeman", min: 24, pts: 10, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 3, fta: 3, composite: 3.23, zScores: { pts: 0.385, reb: -0.056, ast: 0.736, stl: 0.323, blk: -0.472, tpm: 0.181, fgImpact: 0.166, ftImpact: 1.148, to: 0.821 } },
          { name: "Isaiah Johnson", min: 35, pts: 26, reb: 3, ast: 2, stl: 1, blk: 0, to: 2, tpm: 4, fgm: 8, fga: 14, ftm: 6, fta: 8, composite: 6.49, zScores: { pts: 2.878, reb: -0.056, ast: 0.234, stl: 0.323, blk: -0.472, tpm: 2.77, fgImpact: 1.234, ftImpact: 0.266, to: -0.684 } },
          { name: "Austin Goosby", min: 30, pts: 4, reb: 6, ast: 7, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 1, composite: -1.42, zScores: { pts: -0.55, reb: 1.024, ast: 2.747, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -1.075, ftImpact: -1.016, to: -0.684 } },
          { name: "Marcus Spears Jr.", min: 18, pts: 8, reb: 4, ast: 1, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 3, ftm: 2, fta: 3, composite: 1.07, zScores: { pts: 0.073, reb: 0.304, ast: -0.269, stl: 0.323, blk: 0.899, tpm: -0.682, fgImpact: 1.353, ftImpact: -0.25, to: -0.684 } },
          { name: "Joe Sterling", min: 6, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.74, zScores: { pts: -0.706, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: 0.055, ftImpact: 0, to: 0.821 } },
          { name: "Bo Ogden", min: 5, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.41, zScores: { pts: -1.173, reb: -1.136, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.791, ftImpact: 0, to: 0.821 } },
          { name: "Amari Evans", min: 20, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -0.55, reb: -0.416, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -1.075, ftImpact: 0, to: 0.821 } }
        ]
      }
    },
      {
      id: "401918949",
      line: "Louisville Cardinals 78 @ Memphis Tigers 98 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Lou", name: "Louisville Cardinals", score: 78,
        players: [
          { name: "Alvaro Folgueiras", min: 22, pts: 14, reb: 4, ast: 2, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 4, fga: 6, ftm: 3, fta: 4, composite: 1.98, zScores: { pts: 1.008, reb: 0.304, ast: 0.234, stl: -0.714, blk: -0.472, tpm: 1.907, fgImpact: 1.013, ftImpact: 0.133, to: -1.436 } },
          { name: "Flory Bidunga", min: 29, pts: 7, reb: 9, ast: 1, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 9, ftm: 1, fta: 3, composite: 1.15, zScores: { pts: -0.083, reb: 2.104, ast: -0.269, stl: 2.398, blk: -0.472, tpm: -0.682, fgImpact: -1.02, ftImpact: -1.648, to: 0.821 } },
          { name: "Adrian Wooley", min: 32, pts: 8, reb: 5, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: -0.75, zScores: { pts: 0.073, reb: 0.664, ast: 1.239, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.174, ftImpact: 0, to: -0.684 } },
          { name: "Jackson Shelstad", min: 34, pts: 16, reb: 2, ast: 2, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 6, fga: 13, ftm: 0, fta: 0, composite: 1.97, zScores: { pts: 1.32, reb: -0.416, ast: 0.234, stl: -0.714, blk: -0.472, tpm: 2.77, fgImpact: -0.063, ftImpact: 0, to: -0.684 } },
          { name: "Seth Trimble", min: 34, pts: 16, reb: 4, ast: 2, stl: 2, blk: 2, to: 4, tpm: 0, fgm: 6, fga: 15, ftm: 4, fta: 6, composite: 1.26, zScores: { pts: 1.32, reb: 0.304, ast: 0.234, stl: 1.361, blk: 2.27, tpm: -0.682, fgImpact: -0.854, ftImpact: -0.5, to: -2.189 } },
          { name: "LJ Wells", min: 6, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.6, zScores: { pts: -1.017, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: -0.633, to: 0.821 } },
          { name: "Obinna Ekezie Jr.", min: 15, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 3, composite: -4.56, zScores: { pts: -0.394, reb: -0.416, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.285, ftImpact: -1.648, to: 0.821 } },
          { name: "Isaac Ellis", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "Karter Knox", min: 24, pts: 11, reb: 7, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 9, ftm: 3, fta: 5, composite: 1.43, zScores: { pts: 0.541, reb: 1.384, ast: 0.234, stl: -0.714, blk: 0.899, tpm: -0.682, fgImpact: -0.174, ftImpact: -0.883, to: 0.821 } }
        ]
      },
      home: {
        abbr: "Mem", name: "Memphis Tigers", score: 98,
        players: [
          { name: "Tylik Weeks", min: 35, pts: 24, reb: 5, ast: 4, stl: 1, blk: 0, to: 4, tpm: 4, fgm: 8, fga: 15, ftm: 4, fta: 5, composite: 6.26, zScores: { pts: 2.566, reb: 0.664, ast: 1.239, stl: 0.323, blk: -0.472, tpm: 2.77, fgImpact: 0.839, ftImpact: 0.516, to: -2.189 } },
          { name: "Maxim Logue", min: 10, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.16, zScores: { pts: -1.173, reb: -0.416, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.069 } },
          { name: "Rihards Vavers", min: 34, pts: 15, reb: 4, ast: 1, stl: 1, blk: 2, to: 1, tpm: 2, fgm: 5, fga: 8, ftm: 3, fta: 3, composite: 7.12, zScores: { pts: 1.164, reb: 0.304, ast: -0.269, stl: 0.323, blk: 2.27, tpm: 1.044, fgImpact: 1.068, ftImpact: 1.148, to: 0.069 } },
          { name: "Julius Thedford", min: 33, pts: 16, reb: 5, ast: 0, stl: 2, blk: 1, to: 1, tpm: 2, fgm: 5, fga: 7, ftm: 4, fta: 7, composite: 4.53, zScores: { pts: 1.32, reb: 0.664, ast: -0.771, stl: 1.361, blk: 0.899, tpm: 1.044, fgImpact: 1.463, ftImpact: -1.516, to: 0.069 } },
          { name: "Jayden Reid", min: 32, pts: 24, reb: 5, ast: 10, stl: 4, blk: 0, to: 1, tpm: 1, fgm: 8, fga: 16, ftm: 7, fta: 7, composite: 13.82, zScores: { pts: 2.566, reb: 0.664, ast: 4.255, stl: 3.435, blk: -0.472, tpm: 0.181, fgImpact: 0.443, ftImpact: 2.68, to: 0.069 } },
          { name: "William Whorton", min: 19, pts: 8, reb: 4, ast: 0, stl: 1, blk: 3, to: 0, tpm: 0, fgm: 4, fga: 4, ftm: 0, fta: 1, composite: 4.5, zScores: { pts: 0.073, reb: 0.304, ast: -0.771, stl: 0.323, blk: 3.641, tpm: -0.682, fgImpact: 1.803, ftImpact: -1.016, to: 0.821 } },
          { name: "Corneilous Williams", min: 10, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.77, zScores: { pts: -1.173, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "Cello Jackson Jr.", min: 5, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 1, composite: -2.83, zScores: { pts: -0.706, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.451, ftImpact: 0.383, to: 0.821 } },
          { name: "Josh Holloway", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.31, zScores: { pts: -1.173, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.791, ftImpact: 0, to: 0.069 } },
          { name: "Brandin Cummings", min: 16, pts: 8, reb: 2, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 1, fta: 1, composite: 0.37, zScores: { pts: 0.073, reb: -0.416, ast: -0.269, stl: -0.714, blk: 0.899, tpm: 0.181, fgImpact: 0.166, ftImpact: 0.383, to: 0.069 } }
        ]
      }
    },
      {
      id: "401920681",
      line: "Syracuse Orange 62 @ St. John's Red Storm 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Syr", name: "Syracuse Orange", score: 62,
        players: [
          { name: "Sadiq White Jr.", min: 32, pts: 12, reb: 5, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 11, ftm: 2, fta: 2, composite: 2.01, zScores: { pts: 0.697, reb: 0.664, ast: -0.269, stl: 1.361, blk: -0.472, tpm: -0.682, fgImpact: -0.118, ftImpact: 0.766, to: 0.069 } },
          { name: "Luke Wilson", min: 31, pts: 4, reb: 3, ast: 0, stl: 1, blk: 2, to: 4, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.54, zScores: { pts: -0.55, reb: -0.056, ast: -0.771, stl: 0.323, blk: 2.27, tpm: -0.682, fgImpact: 0.111, ftImpact: 0, to: -2.189 } },
          { name: "Ryan Moesch", min: 33, pts: 9, reb: 9, ast: 5, stl: 1, blk: 1, to: 9, tpm: 1, fgm: 3, fga: 11, ftm: 2, fta: 2, composite: -1.52, zScores: { pts: 0.229, reb: 2.104, ast: 1.742, stl: 0.323, blk: 0.899, tpm: 0.181, fgImpact: -1.811, ftImpact: 0.766, to: -5.951 } },
          { name: "Gavin Doty", min: 15, pts: 2, reb: 3, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 8, ftm: 0, fta: 0, composite: -6.27, zScores: { pts: -0.862, reb: -0.056, ast: -0.771, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: -2.317, ftImpact: 0, to: -1.436 } },
          { name: "Garwey Dual", min: 28, pts: 6, reb: 3, ast: 2, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 3, composite: 1.05, zScores: { pts: -0.238, reb: -0.056, ast: 0.234, stl: 1.361, blk: 0.899, tpm: -0.682, fgImpact: -0.285, ftImpact: -0.25, to: 0.069 } },
          { name: "Mark Morano", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "Tasman Goodrick", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "Amarri Monroe", min: 21, pts: 12, reb: 3, ast: 2, stl: 3, blk: 1, to: 1, tpm: 2, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 7.14, zScores: { pts: 0.697, reb: -0.056, ast: 0.234, stl: 2.398, blk: 0.899, tpm: 1.044, fgImpact: 1.859, ftImpact: 0, to: 0.069 } },
          { name: "Abdramane Siby", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.52, zScores: { pts: -1.173, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.069 } },
          { name: "Kiyan Anthony", min: 28, pts: 17, reb: 2, ast: 4, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 7, fga: 12, ftm: 2, fta: 3, composite: 3.04, zScores: { pts: 1.476, reb: -0.416, ast: 1.239, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: 1.179, ftImpact: -0.25, to: 0.821 } }
        ]
      },
      home: {
        abbr: "StJon", name: "St. John's Red Storm", score: 79,
        players: [
          { name: "Ruben Prey", min: 32, pts: 11, reb: 6, ast: 2, stl: 2, blk: 3, to: 1, tpm: 1, fgm: 3, fga: 9, ftm: 4, fta: 4, composite: 7.56, zScores: { pts: 0.541, reb: 1.024, ast: 0.234, stl: 1.361, blk: 3.641, tpm: 0.181, fgImpact: -1.02, ftImpact: 1.531, to: 0.069 } },
          { name: "Keyshawn Hall", min: 37, pts: 18, reb: 7, ast: 5, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 8, fga: 18, ftm: 1, fta: 1, composite: 5.51, zScores: { pts: 1.631, reb: 1.384, ast: 1.742, stl: 0.323, blk: 0.899, tpm: 0.181, fgImpact: -0.347, ftImpact: 0.383, to: -0.684 } },
          { name: "Quinn Ellis", min: 39, pts: 10, reb: 2, ast: 6, stl: 3, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 6, ftm: 2, fta: 3, composite: 2.78, zScores: { pts: 0.385, reb: -0.416, ast: 2.244, stl: 2.398, blk: -0.472, tpm: -0.682, fgImpact: 1.013, ftImpact: -0.25, to: -1.436 } },
          { name: "Tounde Yessoufou", min: 38, pts: 19, reb: 14, ast: 1, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 8, fga: 11, ftm: 2, fta: 2, composite: 7.2, zScores: { pts: 1.787, reb: 3.903, ast: -0.269, stl: 0.323, blk: -0.472, tpm: 0.181, fgImpact: 2.421, ftImpact: 0.766, to: -1.436 } },
          { name: "Ian Jackson", min: 29, pts: 14, reb: 1, ast: 3, stl: 2, blk: 1, to: 2, tpm: 2, fgm: 5, fga: 12, ftm: 2, fta: 2, composite: 3.84, zScores: { pts: 1.008, reb: -0.776, ast: 0.736, stl: 1.361, blk: 0.899, tpm: 1.044, fgImpact: -0.514, ftImpact: 0.766, to: -0.684 } },
          { name: "Babacar Sane", min: 4, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.95, zScores: { pts: -1.173, reb: -0.416, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.791, ftImpact: 0, to: 0.069 } },
          { name: "Reed Bailey", min: 8, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.09, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "Zsombor Maronka", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "Lefteris Liotopoulos", min: 12, pts: 7, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 5, fta: 6, composite: -2.37, zScores: { pts: -0.083, reb: -0.776, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.34, ftImpact: 0.898, to: 0.069 } }
        ]
      }
    },
      {
      id: "401918453",
      line: "William & Mary Tribe 79 @ Michigan Wolverines 123 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "W&M", name: "William & Mary Tribe", score: 79,
        players: [

        ]
      },
      home: {
        abbr: "Mich", name: "Michigan Wolverines", score: 123,
        players: [
          { name: "J.P. Estrella", min: 20, pts: 15, reb: 7, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 10, ftm: 4, fta: 6, composite: 2.91, zScores: { pts: 1.164, reb: 1.384, ast: -0.269, stl: 0.323, blk: -0.472, tpm: 0.181, fgImpact: 0.277, ftImpact: -0.5, to: 0.821 } },
          { name: "Moustapha Thiam", min: 24, pts: 16, reb: 7, ast: 3, stl: 0, blk: 4, to: 2, tpm: 0, fgm: 6, fga: 11, ftm: 4, fta: 5, composite: 7.62, zScores: { pts: 1.32, reb: 1.384, ast: 0.736, stl: -0.714, blk: 5.012, tpm: -0.682, fgImpact: 0.728, ftImpact: 0.516, to: -0.684 } },
          { name: "Roddy Gayle Jr.", min: 17, pts: 13, reb: 8, ast: 4, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 10, ftm: 1, fta: 1, composite: 5.74, zScores: { pts: 0.852, reb: 1.744, ast: 1.239, stl: 1.361, blk: -0.472, tpm: 1.044, fgImpact: 0.277, ftImpact: 0.383, to: -0.684 } },
          { name: "Trey McKenney", min: 25, pts: 14, reb: 5, ast: 5, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 9, ftm: 7, fta: 7, composite: 5.93, zScores: { pts: 1.008, reb: 0.664, ast: 1.742, stl: 0.323, blk: -0.472, tpm: 0.181, fgImpact: -1.02, ftImpact: 2.68, to: 0.821 } },
          { name: "Elliot Cadeau", min: 26, pts: 11, reb: 4, ast: 11, stl: 3, blk: 1, to: 3, tpm: 2, fgm: 4, fga: 9, ftm: 1, fta: 1, composite: 8.72, zScores: { pts: 0.541, reb: 0.304, ast: 4.757, stl: 2.398, blk: 0.899, tpm: 1.044, fgImpact: -0.174, ftImpact: 0.383, to: -1.436 } },
          { name: "Quinn Costello", min: 25, pts: 16, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 12, ftm: 4, fta: 4, composite: 3.32, zScores: { pts: 1.32, reb: -0.056, ast: 0.234, stl: -0.714, blk: -0.472, tpm: 2.77, fgImpact: -1.36, ftImpact: 1.531, to: 0.069 } },
          { name: "Oscar Goodman", min: 12, pts: 11, reb: 8, ast: 0, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 3.41, zScores: { pts: 0.541, reb: 1.744, ast: -0.771, stl: -0.714, blk: 0.899, tpm: 0.181, fgImpact: 1.463, ftImpact: 0, to: 0.069 } },
          { name: "Harrison Hochberg", min: 3, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -2.86, zScores: { pts: -0.706, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.055, ftImpact: 0.383, to: 0.821 } },
          { name: "Jalen Reed", min: 9, pts: 6, reb: 6, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: 1.69, zScores: { pts: -0.238, reb: 1.024, ast: -0.771, stl: -0.714, blk: 0.899, tpm: -0.682, fgImpact: 1.353, ftImpact: 0, to: 0.821 } },
          { name: "Marcus Moller", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.52, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.395, ftImpact: 0, to: 0.821 } },
          { name: "Ricky Liburd", min: 16, pts: 5, reb: 4, ast: 2, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: 0.08, zScores: { pts: -0.394, reb: 0.304, ast: 0.234, stl: 1.361, blk: 0.899, tpm: -0.682, fgImpact: -1.075, ftImpact: -0.633, to: 0.069 } },
          { name: "Malachi Brown", min: 4, pts: 2, reb: 1, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.72, zScores: { pts: -0.862, reb: -0.776, ast: -0.771, stl: 1.361, blk: -0.472, tpm: -0.682, fgImpact: -0.34, ftImpact: 0, to: 0.821 } },
          { name: "Kenny Noland", min: 15, pts: 11, reb: 2, ast: 3, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 3.34, zScores: { pts: 0.541, reb: -0.416, ast: 0.736, stl: 0.323, blk: -0.472, tpm: 1.907, fgImpact: 1.408, ftImpact: 0, to: -0.684 } }
        ]
      }
    },
      {
      id: "401926772",
      line: "Arkansas-Pine Bluff Golden Lions 46 @ USC Trojans 122 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UAPB", name: "Arkansas-Pine Bluff Golden Lions", score: 46,
        players: [

        ]
      },
      home: {
        abbr: "USC", name: "USC Trojans", score: 122,
        players: [
          { name: "Adonis Ratliff", min: 22, pts: 17, reb: 8, ast: 5, stl: 0, blk: 4, to: 1, tpm: 3, fgm: 6, fga: 9, ftm: 2, fta: 2, composite: 13.52, zScores: { pts: 1.476, reb: 1.744, ast: 1.742, stl: -0.714, blk: 5.012, tpm: 1.907, fgImpact: 1.519, ftImpact: 0.766, to: 0.069 } },
          { name: "Jacob Cofie", min: 18, pts: 10, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 4, ftm: 2, fta: 3, composite: -0.04, zScores: { pts: 0.385, reb: -0.416, ast: 0.234, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 1.803, ftImpact: -0.25, to: 0.069 } },
          { name: "Darius Ratliff", min: 23, pts: 9, reb: 7, ast: 0, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 4, fga: 5, ftm: 1, fta: 1, composite: 1.74, zScores: { pts: 0.229, reb: 1.384, ast: -0.771, stl: 0.323, blk: 0.899, tpm: -0.682, fgImpact: 1.408, ftImpact: 0.383, to: -1.436 } },
          { name: "Alijah Arenas", min: 17, pts: 21, reb: 2, ast: 6, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 7, ftm: 5, fta: 5, composite: 11.59, zScores: { pts: 2.099, reb: -0.416, ast: 2.244, stl: 0.323, blk: -0.472, tpm: 2.77, fgImpact: 2.31, ftImpact: 1.914, to: 0.821 } },
          { name: "Rodney Rice", min: 16, pts: 18, reb: 2, ast: 1, stl: 3, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 9, ftm: 3, fta: 3, composite: 8.27, zScores: { pts: 1.631, reb: -0.416, ast: -0.269, stl: 2.398, blk: -0.472, tpm: 1.907, fgImpact: 1.519, ftImpact: 1.148, to: 0.821 } },
          { name: "Christian Collins", min: 12, pts: 2, reb: 0, ast: 2, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: 1.02, zScores: { pts: -0.862, reb: -1.136, ast: 0.234, stl: 0.323, blk: 2.27, tpm: -0.682, fgImpact: 0.055, ftImpact: 0, to: 0.821 } },
          { name: "Joshua Hughes", min: 16, pts: 6, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 4, fta: 7, composite: -3.43, zScores: { pts: -0.238, reb: -0.056, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.451, ftImpact: -1.516, to: 0.069 } },
          { name: "Aaron Hunkin-Claytor", min: 15, pts: 2, reb: 1, ast: 7, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: 1.55, zScores: { pts: -0.862, reb: -0.776, ast: 2.747, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 0.451, ftImpact: 0, to: 0.821 } },
          { name: "Isaac Bruns", min: 14, pts: 9, reb: 6, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 10, ftm: 1, fta: 2, composite: -0.76, zScores: { pts: 0.229, reb: 1.024, ast: 0.234, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.569, ftImpact: -0.633, to: 0.821 } },
          { name: "Jalen Cox", min: 20, pts: 17, reb: 3, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 8, fga: 10, ftm: 0, fta: 0, composite: 3.82, zScores: { pts: 1.476, reb: -0.056, ast: 0.234, stl: 0.323, blk: -0.472, tpm: 0.181, fgImpact: 2.816, ftImpact: 0, to: -0.684 } },
          { name: "KJ Lewis", min: 18, pts: 9, reb: 4, ast: 6, stl: 3, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 2, fta: 4, composite: 4.43, zScores: { pts: 0.229, reb: 0.304, ast: 2.244, stl: 2.398, blk: 0.899, tpm: 0.181, fgImpact: -0.625, ftImpact: -1.266, to: 0.069 } },
          { name: "Jadis Jones", min: 9, pts: 2, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -1.19, zScores: { pts: -0.862, reb: -0.416, ast: -0.269, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: -0.395, ftImpact: 0.766, to: 0.821 } }
        ]
      }
    },
      {
      id: "401926063",
      line: "Boise State Broncos 75 @ Nebraska Cornhuskers 102 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Bois", name: "Boise State Broncos", score: 75,
        players: [
          { name: "Dovydas Butka", min: 29, pts: 13, reb: 7, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 11, ftm: 1, fta: 1, composite: 1.56, zScores: { pts: 0.852, reb: 1.384, ast: -0.269, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 0.728, ftImpact: 0.383, to: -0.684 } },
          { name: "Spencer Ahrens", min: 33, pts: 17, reb: 5, ast: 4, stl: 2, blk: 0, to: 2, tpm: 4, fgm: 6, fga: 17, ftm: 1, fta: 1, composite: 5.09, zScores: { pts: 1.476, reb: 0.664, ast: 1.239, stl: 1.361, blk: -0.472, tpm: 2.77, fgImpact: -1.645, ftImpact: 0.383, to: -0.684 } },
          { name: "Aginaldo Neto", min: 36, pts: 17, reb: 3, ast: 5, stl: 1, blk: 1, to: 5, tpm: 4, fgm: 5, fga: 14, ftm: 3, fta: 5, composite: 2.02, zScores: { pts: 1.476, reb: -0.056, ast: 1.742, stl: 0.323, blk: 0.899, tpm: 2.77, fgImpact: -1.305, ftImpact: -0.883, to: -2.941 } },
          { name: "Julian Bowie", min: 17, pts: 6, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -0.64, zScores: { pts: -0.238, reb: -0.776, ast: -0.269, stl: 0.323, blk: -0.472, tpm: 1.044, fgImpact: -1.075, ftImpact: 0, to: 0.821 } },
          { name: "Damari Wheeler-Thomas", min: 35, pts: 14, reb: 3, ast: 8, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 6, ftm: 6, fta: 8, composite: 4.09, zScores: { pts: 1.008, reb: -0.056, ast: 3.249, stl: 0.323, blk: -0.472, tpm: 1.044, fgImpact: 0.166, ftImpact: 0.266, to: -1.436 } },
          { name: "Bhan Buom", min: 4, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.38, zScores: { pts: -0.706, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: 0.055, ftImpact: 0, to: 0.821 } },
          { name: "Jerquarius Stanback", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -6.03, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.395, ftImpact: 0, to: -0.684 } },
          { name: "Pearson Carmichael", min: 24, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 1, fta: 2, composite: -6.58, zScores: { pts: -1.017, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -1.582, ftImpact: -0.633, to: 0.069 } },
          { name: "Ethan Lathan", min: 7, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.03, zScores: { pts: -0.55, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.111, ftImpact: 0, to: 0.821 } },
          { name: "Rayzhon Bergersen", min: 7, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } }
        ]
      },
      home: {
        abbr: "Nebras", name: "Nebraska Cornhuskers", score: 102,
        players: [
          { name: "Braden Frager", min: 29, pts: 26, reb: 7, ast: 3, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 8, fga: 11, ftm: 7, fta: 7, composite: 9.38, zScores: { pts: 2.878, reb: 1.384, ast: 0.736, stl: -0.714, blk: -0.472, tpm: 1.907, fgImpact: 2.421, ftImpact: 2.68, to: -1.436 } },
          { name: "Boden Kapke", min: 22, pts: 13, reb: 4, ast: 3, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 6, fga: 10, ftm: 1, fta: 1, composite: 1.13, zScores: { pts: 0.852, reb: 0.304, ast: 0.736, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 1.123, ftImpact: 0.383, to: -1.436 } },
          { name: "Pryce Sandfort", min: 31, pts: 17, reb: 4, ast: 3, stl: 3, blk: 1, to: 0, tpm: 3, fgm: 6, fga: 9, ftm: 2, fta: 2, composite: 10.83, zScores: { pts: 1.476, reb: 0.304, ast: 0.736, stl: 2.398, blk: 0.899, tpm: 1.907, fgImpact: 1.519, ftImpact: 0.766, to: 0.821 } },
          { name: "Cale Jacobsen", min: 29, pts: 13, reb: 6, ast: 4, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 7, ftm: 3, fta: 5, composite: 5.34, zScores: { pts: 0.852, reb: 1.024, ast: 1.239, stl: 1.361, blk: 0.899, tpm: -0.682, fgImpact: 1.463, ftImpact: -0.883, to: 0.069 } },
          { name: "Trevan Leonhardt", min: 17, pts: 0, reb: 3, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.9, zScores: { pts: -1.173, reb: -0.056, ast: 0.234, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: -0.395, ftImpact: 0, to: -0.684 } },
          { name: "Leo Curtis", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.77, zScores: { pts: -1.173, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "Damon Wilkinson", min: 17, pts: 7, reb: 4, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 1.34, zScores: { pts: -0.083, reb: 0.304, ast: -0.269, stl: -0.714, blk: 0.899, tpm: 0.181, fgImpact: 0.957, ftImpact: 0, to: 0.069 } },
          { name: "Sam Orme", min: 24, pts: 15, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 1.17, zScores: { pts: 1.164, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: 1.907, fgImpact: 1.519, ftImpact: 0, to: -0.684 } },
          { name: "Kadyn Betts", min: 1, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.26, zScores: { pts: -1.173, reb: -0.776, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "Colin Rice", min: 1, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.36, zScores: { pts: -0.862, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.451, ftImpact: 0, to: 0.821 } },
          { name: "Jacob Lanier", min: 3, pts: 1, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.49, zScores: { pts: -1.017, reb: -0.776, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: -0.633, to: 0.069 } },
          { name: "Connor Essegian", min: 3, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.32, zScores: { pts: -0.238, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: 1.044, fgImpact: 0.902, ftImpact: 0, to: 0.069 } },
          { name: "Taj DeGourville", min: 22, pts: 2, reb: 2, ast: 8, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 1, composite: -0.9, zScores: { pts: -0.862, reb: -0.416, ast: 3.249, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: -0.34, ftImpact: -1.016, to: -0.684 } }
        ]
      }
    },
      {
      id: "401920235",
      line: "Dartmouth Big Green 75 @ Boston University Terriers 90 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Dart", name: "Dartmouth Big Green", score: 75,
        players: [
          { name: "Dan Civello", min: 15, pts: 7, reb: 0, ast: 1, stl: 0, blk: 1, to: 3, tpm: 1, fgm: 2, fga: 7, ftm: 2, fta: 3, composite: -3.88, zScores: { pts: -0.083, reb: -1.136, ast: -0.269, stl: -0.714, blk: 0.899, tpm: 0.181, fgImpact: -1.075, ftImpact: -0.25, to: -1.436 } },
          { name: "Cam Hiatt", min: 25, pts: 7, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.4, zScores: { pts: -0.083, reb: -0.416, ast: 0.234, stl: 0.323, blk: -0.472, tpm: 0.181, fgImpact: 0.562, ftImpact: 0, to: 0.069 } },
          { name: "Landon Williams", min: 22, pts: 7, reb: 2, ast: 3, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: 0.8, zScores: { pts: -0.083, reb: -0.416, ast: 0.736, stl: -0.714, blk: 0.899, tpm: 0.181, fgImpact: 0.111, ftImpact: 0.766, to: -0.684 } },
          { name: "Cameron McNamee", min: 25, pts: 13, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 7, ftm: 1, fta: 2, composite: 0.06, zScores: { pts: 0.852, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: 1.044, fgImpact: 1.463, ftImpact: -0.633, to: 0.069 } },
          { name: "Nikola Abusara", min: 23, pts: 6, reb: 4, ast: 4, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 2.33, zScores: { pts: -0.238, reb: 0.304, ast: 1.239, stl: 1.361, blk: 0.899, tpm: -0.682, fgImpact: -0.625, ftImpact: 0, to: 0.069 } },
          { name: "Tyler Garrett", min: 7, pts: 3, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.55, zScores: { pts: -0.706, reb: 0.304, ast: -0.269, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: 0.055, ftImpact: 0, to: 0.069 } },
          { name: "Patrick Tivnan Jr.", min: 15, pts: 0, reb: 4, ast: 0, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -1.48, zScores: { pts: -1.173, reb: 0.304, ast: -0.771, stl: 2.398, blk: -0.472, tpm: -0.682, fgImpact: -0.395, ftImpact: 0, to: -0.684 } },
          { name: "Anton Strelnikov", min: 18, pts: 21, reb: 4, ast: 2, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 8, fga: 12, ftm: 4, fta: 8, composite: 5.06, zScores: { pts: 2.099, reb: 0.304, ast: 0.234, stl: 2.398, blk: -0.472, tpm: 0.181, fgImpact: 2.025, ftImpact: -2.531, to: 0.821 } },
          { name: "Acen Jimenez", min: 18, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 4, fta: 4, composite: -2.65, zScores: { pts: -0.55, reb: -0.416, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.395, ftImpact: 1.531, to: -0.684 } },
          { name: "Ernas Valauskas", min: 17, pts: 7, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: -3.05, zScores: { pts: -0.083, reb: -0.416, ast: -0.771, stl: -0.714, blk: -0.472, tpm: 1.044, fgImpact: -1.075, ftImpact: -0.633, to: 0.069 } },
          { name: "Ben Brown", min: 15, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.92, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.791, ftImpact: 0, to: 0.821 } }
        ]
      },
      home: {
        abbr: "BU", name: "Boston University Terriers", score: 90,
        players: [

        ]
      }
    },
      {
      id: "401912210",
      line: "Harvard Crimson 64 @ American University Eagles 70 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Harv", name: "Harvard Crimson", score: 64,
        players: [
          { name: "Luca Ace-Nasteski", min: 13, pts: 4, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -0.42, zScores: { pts: -0.55, reb: -0.056, ast: -0.269, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 0.451, ftImpact: 0.766, to: 0.069 } },
          { name: "Thomas Batties II", min: 40, pts: 18, reb: 3, ast: 2, stl: 1, blk: 2, to: 3, tpm: 2, fgm: 8, fga: 12, ftm: 0, fta: 0, composite: 6.04, zScores: { pts: 1.631, reb: -0.056, ast: 0.234, stl: 0.323, blk: 2.27, tpm: 1.044, fgImpact: 2.025, ftImpact: 0, to: -1.436 } },
          { name: "Tey Barbour", min: 37, pts: 22, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 5, fgm: 6, fga: 11, ftm: 5, fta: 5, composite: 8.37, zScores: { pts: 2.255, reb: -0.056, ast: -0.771, stl: 0.323, blk: -0.472, tpm: 3.632, fgImpact: 0.728, ftImpact: 1.914, to: 0.821 } },
          { name: "Ben Eisendrath", min: 26, pts: 2, reb: 3, ast: 1, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.76, zScores: { pts: -0.862, reb: -0.056, ast: -0.269, stl: 1.361, blk: -0.472, tpm: -0.682, fgImpact: -0.34, ftImpact: 0, to: -1.436 } },
          { name: "Robert Hinton", min: 35, pts: 11, reb: 6, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 13, ftm: 3, fta: 4, composite: 0.42, zScores: { pts: 0.541, reb: 1.024, ast: 1.239, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: -1.755, ftImpact: 0.133, to: 0.069 } },
          { name: "Ryan Sullivan", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.77, zScores: { pts: -1.173, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "Julian Adigun", min: 6, pts: 3, reb: 1, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -1.07, zScores: { pts: -0.706, reb: -0.776, ast: -0.771, stl: 0.323, blk: 0.899, tpm: -0.682, fgImpact: 0.451, ftImpact: -0.633, to: 0.821 } },
          { name: "Frankie Mannino", min: 10, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.14, zScores: { pts: -0.862, reb: -0.416, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.451, ftImpact: 0, to: 0.821 } },
          { name: "Jason Singleton", min: 23, pts: 2, reb: 3, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 8, ftm: 0, fta: 0, composite: -5.55, zScores: { pts: -0.862, reb: -0.056, ast: 0.234, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -2.317, ftImpact: 0, to: -0.684 } },
          { name: "Xavier Nesbitt", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } }
        ]
      },
      home: {
        abbr: "AMER", name: "American University Eagles", score: 70,
        players: [

        ]
      }
    },
      {
      id: "401909774",
      line: "Niagara Purple Eagles 45 @ Iowa State Cyclones 66 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NIA", name: "Niagara Purple Eagles", score: 45,
        players: [

        ]
      },
      home: {
        abbr: "IaSt", name: "Iowa State Cyclones", score: 66,
        players: [
          { name: "Dominykas Pleta", min: 20, pts: 8, reb: 10, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 2, fta: 4, composite: -0.78, zScores: { pts: 0.073, reb: 2.464, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.229, ftImpact: -1.266, to: 0.821 } },
          { name: "Tre Singleton", min: 29, pts: 13, reb: 3, ast: 2, stl: 0, blk: 2, to: 6, tpm: 0, fgm: 4, fga: 6, ftm: 5, fta: 8, composite: -1.91, zScores: { pts: 0.852, reb: -0.056, ast: 0.234, stl: -0.714, blk: 2.27, tpm: -0.682, fgImpact: 1.013, ftImpact: -1.133, to: -3.694 } },
          { name: "Jamarion Batemon", min: 30, pts: 6, reb: 7, ast: 1, stl: 3, blk: 1, to: 2, tpm: 2, fgm: 2, fga: 11, ftm: 0, fta: 0, composite: 1.88, zScores: { pts: -0.238, reb: 1.384, ast: -0.269, stl: 2.398, blk: 0.899, tpm: 1.044, fgImpact: -2.657, ftImpact: 0, to: -0.684 } },
          { name: "Ryan Prather Jr.", min: 33, pts: 2, reb: 4, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -1.86, zScores: { pts: -0.862, reb: 0.304, ast: 0.234, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: -1.526, ftImpact: 0, to: 0.821 } },
          { name: "Tamin Lipsey", min: 31, pts: 8, reb: 3, ast: 5, stl: 5, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 10, ftm: 3, fta: 6, composite: 1.85, zScores: { pts: 0.073, reb: -0.056, ast: 1.742, stl: 4.472, blk: -0.472, tpm: 0.181, fgImpact: -2.262, ftImpact: -1.898, to: 0.069 } },
          { name: "Taj Manning", min: 18, pts: 9, reb: 9, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 1, fta: 1, composite: 2.59, zScores: { pts: 0.229, reb: 2.104, ast: -0.771, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 1.408, ftImpact: 0.383, to: 0.069 } },
          { name: "Xzavion Mitchell", min: 3, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 2, composite: -5.07, zScores: { pts: -0.862, reb: -0.416, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.055, ftImpact: -2.031, to: 0.821 } },
          { name: "Blake Buchanan", min: 20, pts: 6, reb: 7, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 0.22, zScores: { pts: -0.238, reb: 1.384, ast: -0.269, stl: -0.714, blk: 0.899, tpm: -0.682, fgImpact: -0.229, ftImpact: 0, to: 0.069 } },
          { name: "Jaquan Johnson", min: 16, pts: 12, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 4, fta: 5, composite: -0.44, zScores: { pts: 0.697, reb: -1.136, ast: -0.771, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 1.013, ftImpact: 0.516, to: 0.069 } }
        ]
      }
    },
      {
      id: "401909554",
      line: "New Hampshire Wildcats 55 @ Boston College Eagles 67 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UNH", name: "New Hampshire Wildcats", score: 55,
        players: [

        ]
      },
      home: {
        abbr: "BC", name: "Boston College Eagles", score: 67,
        players: [
          { name: "Colby Duggan", min: 14, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.31, zScores: { pts: -1.173, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.791, ftImpact: 0, to: 0.069 } },
          { name: "Luke Hunger", min: 19, pts: 5, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -1.96, zScores: { pts: -0.394, reb: 0.664, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.285, ftImpact: -0.633, to: 0.821 } },
          { name: "Zak Smrekar", min: 35, pts: 15, reb: 11, ast: 4, stl: 2, blk: 2, to: 4, tpm: 1, fgm: 6, fga: 14, ftm: 2, fta: 3, composite: 6.14, zScores: { pts: 1.164, reb: 2.824, ast: 1.239, stl: 1.361, blk: 2.27, tpm: 0.181, fgImpact: -0.458, ftImpact: -0.25, to: -2.189 } },
          { name: "Ernest Shelton", min: 36, pts: 17, reb: 2, ast: 0, stl: 2, blk: 0, to: 1, tpm: 5, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 6, zScores: { pts: 1.476, reb: -0.416, ast: -0.771, stl: 1.361, blk: -0.472, tpm: 3.632, fgImpact: 1.123, ftImpact: 0, to: 0.069 } },
          { name: "Armoni Zeigler", min: 38, pts: 14, reb: 6, ast: 6, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 5, fga: 11, ftm: 4, fta: 4, composite: 3.71, zScores: { pts: 1.008, reb: 1.024, ast: 2.244, stl: 1.361, blk: -0.472, tpm: -0.682, fgImpact: -0.118, ftImpact: 1.531, to: -2.189 } },
          { name: "Brandon Benjamin", min: 21, pts: 6, reb: 9, ast: 0, stl: 1, blk: 3, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 3, composite: 3.91, zScores: { pts: -0.238, reb: 2.104, ast: -0.771, stl: 0.323, blk: 3.641, tpm: -0.682, fgImpact: -0.285, ftImpact: -0.25, to: 0.069 } },
          { name: "Jacob Furphy", min: 27, pts: 10, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 13, ftm: 2, fta: 2, composite: -1.31, zScores: { pts: 0.385, reb: -0.056, ast: -0.771, stl: 0.323, blk: -0.472, tpm: 1.044, fgImpact: -2.602, ftImpact: 0.766, to: 0.069 } },
          { name: "JB Frankel", min: 10, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.38, zScores: { pts: -1.173, reb: -1.136, ast: -0.269, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: -0.791, ftImpact: 0, to: 0.821 } }
        ]
      }
    },
      {
      id: "401925812",
      line: "Temple Owls 84 @ La Salle Explorers 71 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Tem", name: "Temple Owls", score: 84,
        players: [
          { name: "Sir Issac Herron", min: 14, pts: 1, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -3.88, zScores: { pts: -1.017, reb: -0.416, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: -0.633, to: 0.821 } },
          { name: "Jordan Marsh", min: 18, pts: 7, reb: 2, ast: 1, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -3.59, zScores: { pts: -0.083, reb: -0.416, ast: -0.269, stl: 0.323, blk: -0.472, tpm: 0.181, fgImpact: -1.415, ftImpact: 0, to: -1.436 } },
          { name: "Gavin Griffiths", min: 34, pts: 19, reb: 10, ast: 1, stl: 1, blk: 1, to: 1, tpm: 5, fgm: 6, fga: 14, ftm: 2, fta: 4, composite: 7.18, zScores: { pts: 1.787, reb: 2.464, ast: -0.269, stl: 0.323, blk: 0.899, tpm: 3.632, fgImpact: -0.458, ftImpact: -1.266, to: 0.069 } },
          { name: "Cam Scott", min: 33, pts: 6, reb: 3, ast: 1, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 3, fta: 4, composite: 0.66, zScores: { pts: -0.238, reb: -0.056, ast: -0.269, stl: 0.323, blk: 0.899, tpm: 0.181, fgImpact: -1.131, ftImpact: 0.133, to: 0.821 } },
          { name: "Derrian Ford", min: 33, pts: 20, reb: 3, ast: 4, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 9, fga: 16, ftm: 1, fta: 3, composite: 1.83, zScores: { pts: 1.943, reb: -0.056, ast: 1.239, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: 1.29, ftImpact: -1.648, to: 0.069 } },
          { name: "Edwin Suarez Jr.", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.36, zScores: { pts: -0.862, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.451, ftImpact: 0, to: 0.821 } },
          { name: "Baboucarr Njie", min: 25, pts: 11, reb: 2, ast: 0, stl: 1, blk: 4, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 5, fta: 7, composite: 4.92, zScores: { pts: 0.541, reb: -0.416, ast: -0.771, stl: 0.323, blk: 5.012, tpm: -0.682, fgImpact: 0.957, ftImpact: -0.117, to: 0.069 } },
          { name: "Dallis Dillard", min: 22, pts: 9, reb: 4, ast: 5, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 4, fta: 4, composite: 6.14, zScores: { pts: 0.229, reb: 0.304, ast: 1.742, stl: 0.323, blk: 0.899, tpm: 0.181, fgImpact: 0.111, ftImpact: 1.531, to: 0.821 } },
          { name: "Cam Wallace", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "Dez White", min: 17, pts: 9, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 5, ftm: 0, fta: 2, composite: 1.16, zScores: { pts: 0.229, reb: -0.416, ast: 0.234, stl: 0.323, blk: -0.472, tpm: 1.907, fgImpact: 0.562, ftImpact: -2.031, to: 0.821 } }
        ]
      },
      home: {
        abbr: "LaSal", name: "La Salle Explorers", score: 71,
        players: [
          { name: "Anthony Finkley", min: 29, pts: 13, reb: 7, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 13, ftm: 0, fta: 0, composite: 1.85, zScores: { pts: 0.852, reb: 1.384, ast: -0.269, stl: -0.714, blk: -0.472, tpm: 1.907, fgImpact: -0.909, ftImpact: 0, to: 0.069 } },
          { name: "Noah Collier", min: 26, pts: 10, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 4, fta: 5, composite: 0.02, zScores: { pts: 0.385, reb: 1.024, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.166, ftImpact: 0.516, to: 0.069 } },
          { name: "Jaden Johnson", min: 25, pts: 9, reb: 1, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 8, ftm: 1, fta: 1, composite: 0.25, zScores: { pts: 0.229, reb: -0.776, ast: 1.239, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.222, ftImpact: 0.383, to: 0.821 } },
          { name: "Kam Burton", min: 15, pts: 8, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -2.17, zScores: { pts: 0.073, reb: -0.416, ast: -0.771, stl: -0.714, blk: -0.472, tpm: 1.044, fgImpact: -0.229, ftImpact: 0, to: -0.684 } },
          { name: "Rob Dockery", min: 27, pts: 14, reb: 6, ast: 2, stl: 1, blk: 0, to: 5, tpm: 2, fgm: 5, fga: 9, ftm: 2, fta: 2, composite: 1.66, zScores: { pts: 1.008, reb: 1.024, ast: 0.234, stl: 0.323, blk: -0.472, tpm: 1.044, fgImpact: 0.673, ftImpact: 0.766, to: -2.941 } },
          { name: "Bowyn Beatty", min: 11, pts: 2, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.03, zScores: { pts: -0.862, reb: -0.776, ast: -0.771, stl: -0.714, blk: 0.899, tpm: -0.682, fgImpact: 0.055, ftImpact: 0, to: 0.821 } },
          { name: "Vice Zanki", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.92, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.791, ftImpact: 0, to: 0.821 } },
          { name: "RJ Smith", min: 15, pts: 5, reb: 2, ast: 3, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -0.394, reb: -0.416, ast: 0.736, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: -0.285, ftImpact: 0, to: -2.189 } },
          { name: "Devin Booker", min: 24, pts: 10, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: -3.62, zScores: { pts: 0.385, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: 0.222, ftImpact: -0.633, to: -0.684 } },
          { name: "Trey Moss", min: 20, pts: 0, reb: 6, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -0.85, zScores: { pts: -1.173, reb: 1.024, ast: 0.736, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.395, ftImpact: 0, to: 0.821 } }
        ]
      }
    },
      {
      id: "401924744",
      line: "Emmanuel (MA) Lions 58 @ Yale Bulldogs 103 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ECMA", name: "Emmanuel (MA) Lions", score: 58,
        players: [

        ]
      },
      home: {
        abbr: "Yale", name: "Yale Bulldogs", score: 103,
        players: [
          { name: "Daniel Ogunyemi", min: 17, pts: 14, reb: 7, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 8, ftm: 2, fta: 3, composite: 1.24, zScores: { pts: 1.008, reb: 1.384, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 1.914, ftImpact: -0.25, to: -0.684 } },
          { name: "Jack Sullivan", min: 16, pts: 8, reb: 5, ast: 2, stl: 0, blk: 1, to: 3, tpm: 2, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: 0.45, zScores: { pts: 0.073, reb: 0.664, ast: 0.234, stl: -0.714, blk: 0.899, tpm: 1.044, fgImpact: -1.075, ftImpact: 0.766, to: -1.436 } },
          { name: "Riley Fox", min: 19, pts: 9, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 8, ftm: 1, fta: 3, composite: -1.4, zScores: { pts: 0.229, reb: -0.056, ast: -0.269, stl: 0.323, blk: -0.472, tpm: 1.044, fgImpact: -0.625, ftImpact: -1.648, to: 0.069 } },
          { name: "Jordan Brathwaite", min: 19, pts: 6, reb: 5, ast: 6, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 1, fta: 2, composite: 3.25, zScores: { pts: -0.238, reb: 0.664, ast: 2.244, stl: 1.361, blk: -0.472, tpm: 0.181, fgImpact: -0.68, ftImpact: -0.633, to: 0.821 } },
          { name: "Trevor Mullin", min: 18, pts: 16, reb: 4, ast: 5, stl: 1, blk: 0, to: 0, tpm: 5, fgm: 5, fga: 7, ftm: 1, fta: 2, composite: 8.5, zScores: { pts: 1.32, reb: 0.304, ast: 1.742, stl: 0.323, blk: -0.472, tpm: 3.632, fgImpact: 1.463, ftImpact: -0.633, to: 0.821 } },
          { name: "Connor May", min: 14, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.12, zScores: { pts: -0.706, reb: -0.416, ast: -0.269, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: 0.451, ftImpact: 0, to: 0.821 } },
          { name: "Brady Wooley", min: 12, pts: 8, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 4, ftm: 0, fta: 2, composite: -1.41, zScores: { pts: 0.073, reb: -0.056, ast: -0.771, stl: -0.714, blk: 0.899, tpm: -0.682, fgImpact: 1.803, ftImpact: -2.031, to: 0.069 } },
          { name: "Chris Bolte", min: 10, pts: 3, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.16, zScores: { pts: -0.706, reb: -0.056, ast: -0.269, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: 0.055, ftImpact: 0, to: 0.821 } },
          { name: "Tim Winkler", min: 11, pts: 9, reb: 1, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 3, fta: 3, composite: 0.07, zScores: { pts: 0.229, reb: -0.776, ast: -0.269, stl: -0.714, blk: 0.899, tpm: -0.682, fgImpact: 0.166, ftImpact: 1.148, to: 0.069 } },
          { name: "Jonas Oware", min: 10, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -1.51, zScores: { pts: -0.238, reb: -0.416, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.957, ftImpact: 0, to: 0.821 } },
          { name: "Jack Louridas", min: 13, pts: 7, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -1.89, zScores: { pts: -0.083, reb: -0.416, ast: -0.269, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: 0.562, ftImpact: 0, to: -0.684 } },
          { name: "Alvin Loving", min: 8, pts: 0, reb: 1, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -3.02, zScores: { pts: -1.173, reb: -0.776, ast: 0.234, stl: 1.361, blk: -0.472, tpm: -0.682, fgImpact: -1.582, ftImpact: 0, to: 0.069 } },
          { name: "Jacob Tsai", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.52, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.395, ftImpact: 0, to: 0.821 } },
          { name: "Courtney Wallace", min: 19, pts: 8, reb: 4, ast: 8, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 3, ftm: 3, fta: 3, composite: 6.7, zScores: { pts: 0.073, reb: 0.304, ast: 3.249, stl: 2.398, blk: -0.472, tpm: 0.181, fgImpact: 0.506, ftImpact: 1.148, to: -0.684 } },
          { name: "Jeannot Basima", min: 10, pts: 6, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -1.51, zScores: { pts: -0.238, reb: -0.056, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 1.353, ftImpact: 0, to: 0.069 } }
        ]
      }
    },
      {
      id: "401920065",
      line: "Princeton Tigers 72 @ Rhode Island Rams 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Princ", name: "Princeton Tigers", score: 72,
        players: [
          { name: "Jacob Huggins", min: 31, pts: 3, reb: 9, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 4, composite: -3.18, zScores: { pts: -0.706, reb: 2.104, ast: -0.771, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: -1.131, ftImpact: -2.664, to: 0.821 } },
          { name: "Malik Abdullahi", min: 20, pts: 9, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 1, fta: 3, composite: -0.02, zScores: { pts: 0.229, reb: 0.664, ast: -0.269, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 1.013, ftImpact: -1.648, to: 0.821 } },
          { name: "Landon Clark", min: 27, pts: 3, reb: 4, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -3.91, zScores: { pts: -0.706, reb: 0.304, ast: -0.269, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: -0.34, ftImpact: -0.633, to: -1.436 } },
          { name: "Dalen Davis", min: 34, pts: 16, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 16, ftm: 5, fta: 6, composite: -1.89, zScores: { pts: 1.32, reb: -0.056, ast: -0.269, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: -2.095, ftImpact: 0.898, to: -0.684 } },
          { name: "Jackson Hicke", min: 37, pts: 32, reb: 6, ast: 4, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 8, fga: 13, ftm: 15, fta: 18, composite: 11.54, zScores: { pts: 3.813, reb: 1.024, ast: 1.239, stl: 1.361, blk: -0.472, tpm: 0.181, fgImpact: 1.63, ftImpact: 2.695, to: 0.069 } },
          { name: "CJ Happy", min: 8, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.33, zScores: { pts: -0.862, reb: -1.136, ast: -0.771, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 0.451, ftImpact: 0, to: 0.821 } },
          { name: "Christopher Kirkpatrick", min: 20, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 1, fta: 2, composite: -4.03, zScores: { pts: -0.238, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: -0.68, ftImpact: -0.633, to: 0.069 } },
          { name: "Ethan Sabec", min: 11, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.95, zScores: { pts: -1.173, reb: -0.416, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.791, ftImpact: 0, to: 0.069 } },
          { name: "Louis O'Keefe", min: 12, pts: 1, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 1, fta: 2, composite: -3.53, zScores: { pts: -1.017, reb: -0.416, ast: -0.269, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: -1.186, ftImpact: -0.633, to: 0.821 } }
        ]
      },
      home: {
        abbr: "URI", name: "Rhode Island Rams", score: 79,
        players: [
          { name: "Matas Deniusas", min: 29, pts: 12, reb: 7, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 8, fta: 9, composite: 1.78, zScores: { pts: 0.697, reb: 1.384, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.285, ftImpact: 2.047, to: 0.069 } },
          { name: "Jonah Hinton", min: 36, pts: 21, reb: 6, ast: 0, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 6, fga: 12, ftm: 7, fta: 7, composite: 6.66, zScores: { pts: 2.099, reb: 1.024, ast: -0.771, stl: -0.714, blk: 0.899, tpm: 1.044, fgImpact: 0.333, ftImpact: 2.68, to: 0.069 } },
          { name: "Jason Fontenet II", min: 31, pts: 7, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -2.26, zScores: { pts: -0.083, reb: -0.056, ast: 0.234, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: -1.415, ftImpact: 0, to: 0.069 } },
          { name: "Dylan Williamson", min: 32, pts: 9, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 9, ftm: 4, fta: 6, composite: -3.79, zScores: { pts: 0.229, reb: 0.304, ast: -0.269, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: -1.866, ftImpact: -0.5, to: -0.684 } },
          { name: "Jahmere Tripp", min: 18, pts: 18, reb: 3, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 10, fta: 13, composite: 2.59, zScores: { pts: 1.631, reb: -0.056, ast: -0.269, stl: 1.361, blk: -0.472, tpm: -0.682, fgImpact: 0.222, ftImpact: 0.781, to: 0.069 } },
          { name: "Nedas Raupelis", min: 22, pts: 6, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 4, composite: -1.25, zScores: { pts: -0.238, reb: 0.664, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.902, ftImpact: -1.266, to: 0.821 } },
          { name: "Javon Perry", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.88, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.069 } },
          { name: "Mouhamed Sow", min: 11, pts: 3, reb: 3, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 3, fta: 4, composite: -1.12, zScores: { pts: -0.706, reb: -0.056, ast: -0.771, stl: 1.361, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0.133, to: 0.069 } },
          { name: "Jalen Harper", min: 10, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -5.02, zScores: { pts: -0.706, reb: -0.416, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.055, ftImpact: -0.633, to: -0.684 } },
          { name: "Jaen Chatman", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.63, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: -0.684 } },
          { name: "Barrett Loer", min: 7, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.05, zScores: { pts: -1.173, reb: -0.056, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } }
        ]
      }
    },
      {
      id: "401909525",
      line: "Marquette Golden Eagles 64 @ Missouri Tigers 69 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Marq", name: "Marquette Golden Eagles", score: 64,
        players: [
          { name: "Sananda Fru", min: 20, pts: 5, reb: 2, ast: 2, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -0.49, zScores: { pts: -0.394, reb: -0.416, ast: 0.234, stl: 0.323, blk: 0.899, tpm: -0.682, fgImpact: 0.111, ftImpact: -0.633, to: 0.069 } },
          { name: "Royce Parham", min: 36, pts: 9, reb: 9, ast: 1, stl: 4, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 13, ftm: 3, fta: 4, composite: 1.95, zScores: { pts: 0.229, reb: 2.104, ast: -0.269, stl: 3.435, blk: -0.472, tpm: -0.682, fgImpact: -2.602, ftImpact: 0.133, to: 0.069 } },
          { name: "Nolan Minessale", min: 10, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -3.46, zScores: { pts: -0.238, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.285, ftImpact: 0.766, to: 0.069 } },
          { name: "Adrien Stevens", min: 36, pts: 8, reb: 2, ast: 3, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 0.38, zScores: { pts: 0.073, reb: -0.416, ast: 0.736, stl: 0.323, blk: -0.472, tpm: 1.044, fgImpact: -0.229, ftImpact: 0, to: -0.684 } },
          { name: "Nigel James Jr.", min: 36, pts: 11, reb: 6, ast: 11, stl: 5, blk: 0, to: 6, tpm: 0, fgm: 5, fga: 18, ftm: 1, fta: 2, composite: 2.43, zScores: { pts: 0.541, reb: 1.024, ast: 4.757, stl: 4.472, blk: -0.472, tpm: -0.682, fgImpact: -2.886, ftImpact: -0.633, to: -3.694 } },
          { name: "Joshua Clark", min: 17, pts: 3, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 3, fta: 4, composite: -1.8, zScores: { pts: -0.706, reb: 0.304, ast: -0.771, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0.133, to: 0.069 } },
          { name: "Alex Egbuonu", min: 11, pts: 7, reb: 3, ast: 0, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 3, ftm: 0, fta: 2, composite: 0.3, zScores: { pts: -0.083, reb: -0.056, ast: -0.771, stl: 1.361, blk: -0.472, tpm: 0.181, fgImpact: 1.353, ftImpact: -2.031, to: 0.821 } },
          { name: "Michael Phillips II", min: 16, pts: 7, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: -0.57, zScores: { pts: -0.083, reb: -0.056, ast: -0.771, stl: -0.714, blk: 0.899, tpm: 1.044, fgImpact: -1.075, ftImpact: -0.633, to: 0.821 } },
          { name: "Damarius Owens", min: 13, pts: 5, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: -2.08, zScores: { pts: -0.394, reb: -0.776, ast: -0.771, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 0.506, ftImpact: -0.633, to: 0.821 } },
          { name: "Colin Porter", min: 5, pts: 3, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.31, zScores: { pts: -0.706, reb: -1.136, ast: -0.771, stl: 0.323, blk: -0.472, tpm: 0.181, fgImpact: 0.451, ftImpact: 0, to: 0.821 } }
        ]
      },
      home: {
        abbr: "Mizzou", name: "Missouri Tigers", score: 69,
        players: [
          { name: "Toni Bryant", min: 29, pts: 13, reb: 1, ast: 0, stl: 1, blk: 3, to: 0, tpm: 1, fgm: 4, fga: 4, ftm: 4, fta: 6, composite: 5.57, zScores: { pts: 0.852, reb: -0.776, ast: -0.771, stl: 0.323, blk: 3.641, tpm: 0.181, fgImpact: 1.803, ftImpact: -0.5, to: 0.821 } },
          { name: "Bryson Tiller", min: 24, pts: 2, reb: 4, ast: 1, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.85, zScores: { pts: -0.862, reb: 0.304, ast: -0.269, stl: 0.323, blk: 0.899, tpm: -0.682, fgImpact: -1.131, ftImpact: 0, to: -1.436 } },
          { name: "Jason Crowe Jr.", min: 30, pts: 17, reb: 1, ast: 6, stl: 1, blk: 0, to: 6, tpm: 2, fgm: 5, fga: 14, ftm: 5, fta: 5, composite: 0.75, zScores: { pts: 1.476, reb: -0.776, ast: 2.244, stl: 0.323, blk: -0.472, tpm: 1.044, fgImpact: -1.305, ftImpact: 1.914, to: -3.694 } },
          { name: "Trent Pierce", min: 32, pts: 13, reb: 8, ast: 2, stl: 2, blk: 1, to: 7, tpm: 2, fgm: 5, fga: 9, ftm: 1, fta: 1, composite: 2.74, zScores: { pts: 0.852, reb: 1.744, ast: 0.234, stl: 1.361, blk: 0.899, tpm: 1.044, fgImpact: 0.673, ftImpact: 0.383, to: -4.446 } },
          { name: "Kennard Davis Jr.", min: 32, pts: 12, reb: 3, ast: 2, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 4, fga: 7, ftm: 2, fta: 4, composite: 2.56, zScores: { pts: 0.697, reb: -0.056, ast: 0.234, stl: 0.323, blk: 0.899, tpm: 1.044, fgImpact: 0.617, ftImpact: -1.266, to: 0.069 } },
          { name: "Luke Northweather", min: 2, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.55, zScores: { pts: -1.173, reb: -0.416, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.395, ftImpact: 0, to: 0.069 } },
          { name: "Trent Burns", min: 12, pts: 2, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 1, composite: -2.55, zScores: { pts: -0.862, reb: 0.304, ast: -0.269, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 0.055, ftImpact: -1.016, to: 0.069 } },
          { name: "Jordan Crawford", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "Cord Stansberry", min: 8, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.91, zScores: { pts: -1.173, reb: -0.416, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: -0.684 } },
          { name: "Aaron Rowe", min: 7, pts: 0, reb: 0, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.59, zScores: { pts: -1.173, reb: -1.136, ast: 0.234, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: -0.684 } },
          { name: "Jamier Jones", min: 23, pts: 10, reb: 4, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 7, ftm: 0, fta: 1, composite: 2.37, zScores: { pts: 0.385, reb: 0.304, ast: 1.239, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 1.463, ftImpact: -1.016, to: 0.821 } }
        ]
      }
    },
      {
      id: "401911251",
      line: "High Point Panthers 68 @ Saint Louis Billikens 58 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "HPU", name: "High Point Panthers", score: 68,
        players: [

        ]
      },
      home: {
        abbr: "StLou", name: "Saint Louis Billikens", score: 58,
        players: [
          { name: "Alon Michaeli", min: 13, pts: 3, reb: 4, ast: 0, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 0, fga: 1, ftm: 3, fta: 4, composite: -4.45, zScores: { pts: -0.706, reb: 0.304, ast: -0.771, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: -0.395, ftImpact: 0.133, to: -2.189 } },
          { name: "Ishan Sharma", min: 34, pts: 6, reb: 2, ast: 2, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 11, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -0.238, reb: -0.416, ast: 0.234, stl: -0.714, blk: -0.472, tpm: 1.044, fgImpact: -2.657, ftImpact: 0, to: -0.684 } },
          { name: "Amari McCottry", min: 35, pts: 10, reb: 9, ast: 3, stl: 2, blk: 0, to: 4, tpm: 1, fgm: 4, fga: 10, ftm: 1, fta: 2, composite: 0.9, zScores: { pts: 0.385, reb: 2.104, ast: 0.736, stl: 1.361, blk: -0.472, tpm: 0.181, fgImpact: -0.569, ftImpact: -0.633, to: -2.189 } },
          { name: "Quentin Jones", min: 33, pts: 12, reb: 3, ast: 1, stl: 0, blk: 4, to: 3, tpm: 2, fgm: 4, fga: 10, ftm: 2, fta: 4, composite: 2.44, zScores: { pts: 0.697, reb: -0.056, ast: -0.269, stl: -0.714, blk: 5.012, tpm: 1.044, fgImpact: -0.569, ftImpact: -1.266, to: -1.436 } },
          { name: "Trey Green", min: 23, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -3.81, zScores: { pts: -0.238, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.229, ftImpact: 0, to: 0.069 } },
          { name: "Sheek Pearson", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.88, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.069 } },
          { name: "Jax Kerr", min: 8, pts: 2, reb: 0, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.28, zScores: { pts: -0.862, reb: -1.136, ast: -0.269, stl: -0.714, blk: 0.899, tpm: -0.682, fgImpact: -0.34, ftImpact: 0, to: 0.821 } },
          { name: "Luke Laczkowski", min: 2, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.62, zScores: { pts: -1.173, reb: -1.136, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "Cam Hutson", min: 23, pts: 6, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.15, zScores: { pts: -0.238, reb: -0.416, ast: -0.269, stl: 0.323, blk: -0.472, tpm: 1.044, fgImpact: 0.111, ftImpact: 0, to: 0.069 } },
          { name: "Kellen Thames", min: 27, pts: 13, reb: 10, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 8, ftm: 1, fta: 2, composite: 1.78, zScores: { pts: 0.852, reb: 2.464, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 1.914, ftImpact: -0.633, to: -0.684 } }
        ]
      }
    },
      {
      id: "401909493",
      line: "Creighton Bluejays 70 @ Iowa Hawkeyes 69 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Crei", name: "Creighton Bluejays", score: 70,
        players: [
          { name: "Oswin Erhunmwunse", min: 9, pts: 3, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -2.14, zScores: { pts: -0.706, reb: -0.056, ast: -0.771, stl: -0.714, blk: 0.899, tpm: -0.682, fgImpact: 0.451, ftImpact: -0.633, to: 0.069 } },
          { name: "Jackson McAndrew", min: 15, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 3, fta: 3, composite: -1.99, zScores: { pts: -0.238, reb: -0.416, ast: -0.771, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: -1.526, ftImpact: 1.148, to: 0.821 } },
          { name: "Wes Enis", min: 25, pts: 9, reb: 3, ast: 1, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 11, ftm: 1, fta: 2, composite: -4.12, zScores: { pts: 0.229, reb: -0.056, ast: -0.269, stl: -0.714, blk: -0.472, tpm: 1.044, fgImpact: -1.811, ftImpact: -0.633, to: -1.436 } },
          { name: "BJ Davis", min: 23, pts: 8, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 3, composite: -1.74, zScores: { pts: 0.073, reb: -0.416, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.166, ftImpact: -0.25, to: 0.821 } },
          { name: "Austin Swartz", min: 34, pts: 18, reb: 1, ast: 2, stl: 3, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 11, ftm: 2, fta: 2, composite: 7.35, zScores: { pts: 1.631, reb: -0.776, ast: 0.234, stl: 2.398, blk: -0.472, tpm: 2.77, fgImpact: 0.728, ftImpact: 0.766, to: 0.069 } },
          { name: "Trevon Carter-Givens", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "Jasen Green", min: 23, pts: 8, reb: 7, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 2.08, zScores: { pts: 0.073, reb: 1.384, ast: 0.736, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.166, ftImpact: 0.766, to: 0.821 } },
          { name: "Isaac Traudt", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.52, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.395, ftImpact: 0, to: 0.821 } },
          { name: "Fredrick King", min: 20, pts: 4, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.24, zScores: { pts: -0.55, reb: -0.056, ast: -0.771, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 0.902, ftImpact: 0, to: 0.069 } },
          { name: "Katrelle Harmon", min: 27, pts: 8, reb: 2, ast: 6, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 4, composite: 1.19, zScores: { pts: 0.073, reb: -0.416, ast: 2.244, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 0.562, ftImpact: -1.266, to: 0.821 } },
          { name: "Brody Robinson", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.27, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.395, ftImpact: 0, to: 0.069 } },
          { name: "Hudson Greer", min: 11, pts: 6, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.1, zScores: { pts: -0.238, reb: -0.416, ast: -0.771, stl: 0.323, blk: -0.472, tpm: 1.044, fgImpact: 0.111, ftImpact: 0, to: -0.684 } }
        ]
      },
      home: {
        abbr: "Iowa", name: "Iowa Hawkeyes", score: 69,
        players: [
          { name: "Cooper Koch", min: 33, pts: 16, reb: 10, ast: 1, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 7, ftm: 6, fta: 7, composite: 5.62, zScores: { pts: 1.32, reb: 2.464, ast: -0.269, stl: 0.323, blk: -0.472, tpm: 1.044, fgImpact: 0.617, ftImpact: 1.281, to: -0.684 } },
          { name: "Andrew McKeever", min: 17, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.94, zScores: { pts: -0.862, reb: -0.056, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.055, ftImpact: 0, to: -1.436 } },
          { name: "Tate Sage", min: 13, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -8, zScores: { pts: -1.173, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -1.977, ftImpact: 0, to: -1.436 } },
          { name: "Isaia Howard", min: 36, pts: 6, reb: 10, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 3, fta: 4, composite: 1.31, zScores: { pts: -0.238, reb: 2.464, ast: 0.736, stl: 0.323, blk: -0.472, tpm: 0.181, fgImpact: -1.131, ftImpact: 0.133, to: -0.684 } },
          { name: "Kael Combs", min: 31, pts: 7, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 3, fta: 4, composite: -1.68, zScores: { pts: -0.083, reb: 0.664, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -1.075, ftImpact: 0.133, to: 0.821 } },
          { name: "Cam Manyawu", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.36, zScores: { pts: -0.862, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.451, ftImpact: 0, to: 0.821 } },
          { name: "Trevin Jirak", min: 21, pts: 22, reb: 6, ast: 4, stl: 3, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 10, ftm: 10, fta: 10, composite: 10.91, zScores: { pts: 2.255, reb: 1.024, ast: 1.239, stl: 2.398, blk: -0.472, tpm: 1.044, fgImpact: 0.277, ftImpact: 3.828, to: -0.684 } },
          { name: "Jaidyn Coon", min: 12, pts: 7, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 1.19, zScores: { pts: -0.083, reb: -0.416, ast: -0.771, stl: -0.714, blk: 0.899, tpm: 0.181, fgImpact: 0.506, ftImpact: 0.766, to: 0.821 } },
          { name: "Ty'Reek Coleman", min: 10, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 2, composite: -6.44, zScores: { pts: -1.173, reb: -0.776, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.395, ftImpact: -2.031, to: 0.069 } },
          { name: "Peyton McCollum", min: 24, pts: 7, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 6, ftm: 2, fta: 4, composite: -4.4, zScores: { pts: -0.083, reb: -0.416, ast: -0.269, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: -0.68, ftImpact: -1.266, to: -0.684 } }
        ]
      }
    },
      {
      id: "401934396",
      line: "Air Force Falcons 69 @ Pacific Tigers 93 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "AF", name: "Air Force Falcons", score: 69,
        players: [
          { name: "Lucas Hobin", min: 26, pts: 15, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 11, ftm: 7, fta: 7, composite: 1.49, zScores: { pts: 1.164, reb: 0.304, ast: -0.771, stl: -0.714, blk: -0.472, tpm: 1.044, fgImpact: -1.811, ftImpact: 2.68, to: 0.069 } },
          { name: "Caleb Walker", min: 28, pts: 12, reb: 8, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 10, ftm: 4, fta: 6, composite: 1.09, zScores: { pts: 0.697, reb: 1.744, ast: -0.269, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: -0.569, ftImpact: -0.5, to: 0.821 } },
          { name: "Grant Best", min: 24, pts: 6, reb: 5, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 9, ftm: 3, fta: 4, composite: -2.82, zScores: { pts: -0.238, reb: 0.664, ast: -0.771, stl: 0.323, blk: -0.472, tpm: 0.181, fgImpact: -2.713, ftImpact: 0.133, to: 0.069 } },
          { name: "Justin Hinds", min: 17, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 1, composite: -4.84, zScores: { pts: -0.55, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.68, ftImpact: -1.016, to: 0.821 } },
          { name: "Kam Sanders", min: 33, pts: 16, reb: 4, ast: 6, stl: 3, blk: 0, to: 3, tpm: 1, fgm: 6, fga: 14, ftm: 3, fta: 4, composite: 4.21, zScores: { pts: 1.32, reb: 0.304, ast: 2.244, stl: 2.398, blk: -0.472, tpm: 0.181, fgImpact: -0.458, ftImpact: 0.133, to: -1.436 } },
          { name: "Brendan Martin", min: 10, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -4.27, zScores: { pts: -0.706, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.34, ftImpact: -0.633, to: 0.821 } },
          { name: "Riley Dering", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.88, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.069 } },
          { name: "Eli Robinson", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "Kolby Gilles", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "Josh Gatete", min: 22, pts: 6, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.02, zScores: { pts: -0.238, reb: -0.776, ast: -0.771, stl: -0.714, blk: 0.899, tpm: 1.044, fgImpact: 0.506, ftImpact: 0, to: 0.069 } },
          { name: "Wesley Celichowski", min: 2, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.6, zScores: { pts: -1.017, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: -0.633, to: 0.821 } },
          { name: "Ethan Greenberg", min: 14, pts: 3, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.52, zScores: { pts: -0.706, reb: -0.776, ast: 0.234, stl: 0.323, blk: -0.472, tpm: 0.181, fgImpact: -1.131, ftImpact: 0, to: 0.821 } },
          { name: "A.J. Patterson", min: 17, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 3, composite: -4.39, zScores: { pts: -0.706, reb: -0.776, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.055, ftImpact: -1.648, to: 0.821 } }
        ]
      },
      home: {
        abbr: "Pacif", name: "Pacific Tigers", score: 93,
        players: [
          { name: "Gavin Ripp", min: 25, pts: 5, reb: 7, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: 0.95, zScores: { pts: -0.394, reb: 1.384, ast: 0.736, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.902, ftImpact: -0.633, to: 0.821 } },
          { name: "Jaion Pitt", min: 28, pts: 11, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 3, fta: 5, composite: -0.77, zScores: { pts: 0.541, reb: 1.024, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.617, ftImpact: -0.883, to: 0.069 } },
          { name: "Adriel Nyorha", min: 39, pts: 29, reb: 8, ast: 7, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 11, fga: 19, ftm: 2, fta: 2, composite: 12.91, zScores: { pts: 3.345, reb: 1.744, ast: 2.747, stl: -0.714, blk: -0.472, tpm: 3.632, fgImpact: 1.796, ftImpact: 0.766, to: 0.069 } },
          { name: "Jaden Winston", min: 36, pts: 28, reb: 6, ast: 4, stl: 3, blk: 0, to: 5, tpm: 5, fgm: 8, fga: 13, ftm: 7, fta: 7, composite: 12.38, zScores: { pts: 3.189, reb: 1.024, ast: 1.239, stl: 2.398, blk: -0.472, tpm: 3.632, fgImpact: 1.63, ftImpact: 2.68, to: -2.941 } },
          { name: "CJ Jones", min: 27, pts: 9, reb: 3, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 0.41, zScores: { pts: 0.229, reb: -0.056, ast: 1.742, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: -0.569, ftImpact: 0, to: 0.069 } },
          { name: "Jorge Carot", min: 10, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.69, zScores: { pts: -1.173, reb: 0.304, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "Jaylen Thompson", min: 27, pts: 8, reb: 6, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 3, composite: -0.37, zScores: { pts: 0.073, reb: 1.024, ast: -0.269, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 0.562, ftImpact: -0.25, to: -0.684 } },
          { name: "Jacob McFarland", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.16, zScores: { pts: -1.173, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.395, ftImpact: 0, to: 0.821 } },
          { name: "Damarion Vann-Kelly", min: 4, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.74, zScores: { pts: -0.706, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: 0.055, ftImpact: 0, to: 0.821 } }
        ]
      }
    },
      {
      id: "401928789",
      line: "New Mexico State Aggies 61 @ San Diego State Aztecs 73 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NMSU", name: "New Mexico State Aggies", score: 61,
        players: [

        ]
      },
      home: {
        abbr: "SDSU", name: "San Diego State Aztecs", score: 73,
        players: [
          { name: "Tae Simmons", min: 17, pts: 9, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: -1.24, zScores: { pts: 0.229, reb: -0.776, ast: -0.269, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 0.222, ftImpact: -0.633, to: 0.821 } },
          { name: "Bear Cherry", min: 24, pts: 9, reb: 3, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 3, fta: 6, composite: -0.88, zScores: { pts: 0.229, reb: -0.056, ast: -0.269, stl: -0.714, blk: 2.27, tpm: -0.682, fgImpact: 0.166, ftImpact: -1.898, to: 0.069 } },
          { name: "Chance Gladden", min: 25, pts: 4, reb: 2, ast: 7, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: 1.09, zScores: { pts: -0.55, reb: -0.416, ast: 2.747, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: -0.68, ftImpact: 0, to: 0.821 } },
          { name: "Elzie Harrington", min: 31, pts: 8, reb: 1, ast: 4, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 4, fta: 4, composite: 2.79, zScores: { pts: 0.073, reb: -0.776, ast: 1.239, stl: 0.323, blk: 0.899, tpm: -0.682, fgImpact: 0.111, ftImpact: 1.531, to: 0.069 } },
          { name: "Latrell Davis", min: 20, pts: 11, reb: 5, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 5, fta: 7, composite: -0.2, zScores: { pts: 0.541, reb: 0.664, ast: 0.736, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.229, ftImpact: -0.117, to: 0.069 } },
          { name: "Luca Vincini", min: 16, pts: 8, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 2, fta: 5, composite: -1, zScores: { pts: 0.073, reb: 0.304, ast: -0.771, stl: -0.714, blk: 0.899, tpm: -0.682, fgImpact: 1.353, ftImpact: -2.281, to: 0.821 } },
          { name: "Luka Skoric", min: 15, pts: 3, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 2, composite: -4.6, zScores: { pts: -0.706, reb: -0.416, ast: -0.771, stl: 0.323, blk: -0.472, tpm: 0.181, fgImpact: -1.526, ftImpact: -2.031, to: 0.821 } },
          { name: "David Torresani", min: 18, pts: 9, reb: 1, ast: 1, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 4, fta: 4, composite: 4.15, zScores: { pts: 0.229, reb: -0.776, ast: -0.269, stl: 2.398, blk: -0.472, tpm: 0.181, fgImpact: 0.506, ftImpact: 1.531, to: 0.821 } },
          { name: "Zach White", min: 14, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -4.99, zScores: { pts: -1.173, reb: -0.416, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -1.582, ftImpact: 0, to: 0.821 } },
          { name: "Isaiah Sy", min: 20, pts: 12, reb: 2, ast: 1, stl: 3, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 2.14, zScores: { pts: 0.697, reb: -0.416, ast: -0.269, stl: 2.398, blk: -0.472, tpm: 1.044, fgImpact: -0.174, ftImpact: 0.766, to: -1.436 } }
        ]
      }
    },
      {
      id: "401928353",
      line: "UC Merced Bobcats 47 @ UC Santa Barbara Gauchos 97 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UCME", name: "UC Merced Bobcats", score: 47,
        players: [

        ]
      },
      home: {
        abbr: "UCSB", name: "UC Santa Barbara Gauchos", score: 97,
        players: [
          { name: "Eric Dibami", min: 4, pts: 4, reb: 2, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 4, composite: -1.08, zScores: { pts: -0.55, reb: -0.416, ast: -0.269, stl: 0.323, blk: 0.899, tpm: -0.682, fgImpact: 0.055, ftImpact: -1.266, to: 0.821 } },
          { name: "Marvin McGhee IV", min: 10, pts: 0, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.33, zScores: { pts: -1.173, reb: 0.664, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "CJ Shaw", min: 6, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.16, zScores: { pts: -1.173, reb: -0.776, ast: 0.234, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.395, ftImpact: 0, to: 0.821 } },
          { name: "RJ Smith", min: 8, pts: 8, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 1.15, zScores: { pts: 0.073, reb: -1.136, ast: -0.771, stl: 0.323, blk: -0.472, tpm: 1.044, fgImpact: 0.506, ftImpact: 0.766, to: 0.821 } },
          { name: "Miro Little", min: 5, pts: 6, reb: 0, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: -0.02, zScores: { pts: -0.238, reb: -1.136, ast: 0.736, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.902, ftImpact: 0.766, to: 0.821 } },
          { name: "John Simcoe", min: 4, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.88, zScores: { pts: -0.706, reb: -0.776, ast: -0.269, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: 0.055, ftImpact: 0, to: 0.821 } },
          { name: "Declan Duru Jr.", min: 23, pts: 12, reb: 8, ast: 0, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 5, ftm: 4, fta: 6, composite: 1.35, zScores: { pts: 0.697, reb: 1.744, ast: -0.771, stl: 1.361, blk: -0.472, tpm: -0.682, fgImpact: 1.408, ftImpact: -0.5, to: -1.436 } },
          { name: "Michael Simcoe", min: 24, pts: 13, reb: 4, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 8, ftm: 2, fta: 2, composite: 3.8, zScores: { pts: 0.852, reb: 0.304, ast: 1.742, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: 1.068, ftImpact: 0.766, to: 0.069 } },
          { name: "Bryce Bedgood", min: 7, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.27, zScores: { pts: -1.173, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: -0.684 } },
          { name: "Antonio Chol", min: 16, pts: 16, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 6, fga: 6, ftm: 1, fta: 2, composite: 2.24, zScores: { pts: 1.32, reb: -0.416, ast: -0.771, stl: -0.714, blk: -0.472, tpm: 1.907, fgImpact: 2.705, ftImpact: -0.633, to: -0.684 } },
          { name: "Marco John Wuol", min: 13, pts: 8, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 0.98, zScores: { pts: 0.073, reb: -0.056, ast: -0.771, stl: -0.714, blk: 0.899, tpm: -0.682, fgImpact: 1.408, ftImpact: 0, to: 0.821 } },
          { name: "Jordan Charles", min: 32, pts: 12, reb: 7, ast: 8, stl: 2, blk: 0, to: 5, tpm: 1, fgm: 5, fga: 12, ftm: 1, fta: 2, composite: 2.31, zScores: { pts: 0.697, reb: 1.384, ast: 3.249, stl: 1.361, blk: -0.472, tpm: 0.181, fgImpact: -0.514, ftImpact: -0.633, to: -2.941 } },
          { name: "Luke Zuffelato", min: 34, pts: 9, reb: 6, ast: 1, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 1.2, zScores: { pts: 0.229, reb: 1.024, ast: -0.269, stl: -0.714, blk: 0.899, tpm: 0.181, fgImpact: -0.229, ftImpact: 0.766, to: -0.684 } },
          { name: "Viljami Vartiainen", min: 14, pts: 6, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 2.67, zScores: { pts: -0.238, reb: -0.056, ast: 0.736, stl: 0.323, blk: -0.472, tpm: 1.044, fgImpact: 0.506, ftImpact: 0, to: 0.821 } }
        ]
      }
    },
      {
      id: "401917531",
      line: "Chicago State Cougars 49 @ Loyola Marymount Lions 86 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHST", name: "Chicago State Cougars", score: 49,
        players: [

        ]
      },
      home: {
        abbr: "LoyMa", name: "Loyola Marymount Lions", score: 86,
        players: [
          { name: "Andy Sigiscar", min: 21, pts: 13, reb: 4, ast: 2, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 6, fga: 9, ftm: 1, fta: 1, composite: 1.03, zScores: { pts: 0.852, reb: 0.304, ast: 0.234, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 1.519, ftImpact: 0.383, to: -1.436 } },
          { name: "Jevon Porter", min: 32, pts: 19, reb: 11, ast: 4, stl: 2, blk: 2, to: 2, tpm: 3, fgm: 7, fga: 8, ftm: 2, fta: 2, composite: 14.23, zScores: { pts: 1.787, reb: 2.824, ast: 1.239, stl: 1.361, blk: 2.27, tpm: 1.907, fgImpact: 2.761, ftImpact: 0.766, to: -0.684 } },
          { name: "Zion Sensley", min: 28, pts: 14, reb: 5, ast: 2, stl: 0, blk: 1, to: 1, tpm: 4, fgm: 5, fga: 10, ftm: 0, fta: 2, composite: 3.18, zScores: { pts: 1.008, reb: 0.664, ast: 0.234, stl: -0.714, blk: 0.899, tpm: 2.77, fgImpact: 0.277, ftImpact: -2.031, to: 0.069 } },
          { name: "Mazi Mosley", min: 28, pts: 11, reb: 4, ast: 6, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 5.08, zScores: { pts: 0.541, reb: 0.304, ast: 2.244, stl: -0.714, blk: 0.899, tpm: 1.907, fgImpact: -0.174, ftImpact: 0, to: 0.069 } },
          { name: "Jasai Miles", min: 23, pts: 11, reb: 4, ast: 3, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 5.9, zScores: { pts: 0.541, reb: 0.304, ast: 0.736, stl: -0.714, blk: 0.899, tpm: 1.907, fgImpact: 1.408, ftImpact: 0, to: 0.821 } },
          { name: "Donovan Miller", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "JJ Harris", min: 5, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.49, zScores: { pts: -0.706, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: 0.055, ftImpact: 0, to: 0.069 } },
          { name: "Christian Humphrey-Rembert", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "Aaron McBride", min: 23, pts: 9, reb: 6, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 5, fta: 6, composite: 1.67, zScores: { pts: 0.229, reb: 1.024, ast: 0.234, stl: -0.714, blk: 0.899, tpm: -0.682, fgImpact: -0.285, ftImpact: 0.898, to: 0.069 } },
          { name: "Zamir Paschal", min: 12, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 1, composite: -4.75, zScores: { pts: -1.173, reb: -0.056, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -1.186, ftImpact: -1.016, to: 0.821 } },
          { name: "All Wright", min: 23, pts: 6, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -1.21, zScores: { pts: -0.238, reb: -0.416, ast: 0.234, stl: -0.714, blk: -0.472, tpm: 1.044, fgImpact: -1.471, ftImpact: 0, to: 0.821 } }
        ]
      }
    },
      {
      id: "401917528",
      line: "Idaho State Bengals 70 @ Seattle U Redhawks 77 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "IDST", name: "Idaho State Bengals", score: 70,
        players: [

        ]
      },
      home: {
        abbr: "SeatU", name: "Seattle U Redhawks", score: 77,
        players: [
          { name: "Will Heimbrodt", min: 27, pts: 18, reb: 6, ast: 3, stl: 0, blk: 4, to: 3, tpm: 2, fgm: 5, fga: 9, ftm: 6, fta: 8, composite: 8.24, zScores: { pts: 1.631, reb: 1.024, ast: 0.736, stl: -0.714, blk: 5.012, tpm: 1.044, fgImpact: 0.673, ftImpact: 0.266, to: -1.436 } },
          { name: "Junseok Yeo", min: 30, pts: 11, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 10, ftm: 1, fta: 1, composite: 1.58, zScores: { pts: 0.541, reb: -0.056, ast: -0.771, stl: -0.714, blk: 0.899, tpm: 1.044, fgImpact: -0.569, ftImpact: 0.383, to: 0.821 } },
          { name: "Halvine Dzellat", min: 22, pts: 12, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 6, fta: 7, composite: -1.23, zScores: { pts: 0.697, reb: -0.056, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.166, ftImpact: 1.281, to: -0.684 } },
          { name: "Tyler Boston", min: 36, pts: 11, reb: 4, ast: 4, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 4, fta: 4, composite: 2.05, zScores: { pts: 0.541, reb: 0.304, ast: 1.239, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: -0.625, ftImpact: 1.531, to: 0.069 } },
          { name: "Mason Williams", min: 20, pts: 10, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 11, ftm: 0, fta: 0, composite: 0.7, zScores: { pts: 0.385, reb: -0.416, ast: 0.736, stl: 0.323, blk: -0.472, tpm: 1.044, fgImpact: -0.965, ftImpact: 0, to: 0.069 } },
          { name: "Ray Adams", min: 9, pts: 0, reb: 1, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.24, zScores: { pts: -1.173, reb: -0.776, ast: -0.771, stl: 1.361, blk: -0.472, tpm: -0.682, fgImpact: -0.791, ftImpact: 0, to: 0.069 } },
          { name: "Ladji Coulibaly", min: 14, pts: 4, reb: 3, ast: 1, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: 2.01, zScores: { pts: -0.55, reb: -0.056, ast: -0.269, stl: 2.398, blk: -0.472, tpm: -0.682, fgImpact: 0.055, ftImpact: 0.766, to: 0.821 } },
          { name: "Amare Larane", min: 5, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.05, zScores: { pts: -1.173, reb: -0.776, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.791, ftImpact: 0, to: 0.821 } },
          { name: "Jaden Bailes", min: 10, pts: 5, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -1.34, zScores: { pts: -0.394, reb: -0.056, ast: -0.771, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: 0.055, ftImpact: 0.766, to: 0.069 } },
          { name: "Maleek Arington", min: 27, pts: 6, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 3, fta: 4, composite: -0.56, zScores: { pts: -0.238, reb: -0.416, ast: 0.234, stl: 0.323, blk: -0.472, tpm: 0.181, fgImpact: -1.131, ftImpact: 0.133, to: 0.821 } }
        ]
      }
    },
      {
      id: "401917175",
      line: "New Haven Chargers 52 @ Penn State Nittany Lions 86 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NHVN", name: "New Haven Chargers", score: 52,
        players: [

        ]
      },
      home: {
        abbr: "PSU", name: "Penn State Nittany Lions", score: 86,
        players: [
          { name: "Roko Prkacin", min: 29, pts: 16, reb: 10, ast: 2, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 7, ftm: 6, fta: 9, composite: 6.38, zScores: { pts: 1.32, reb: 2.464, ast: 0.234, stl: 1.361, blk: 0.899, tpm: -0.682, fgImpact: 1.463, ftImpact: -0.75, to: 0.069 } },
          { name: "Ivan Juric", min: 30, pts: 14, reb: 10, ast: 3, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 4, ftm: 8, fta: 8, composite: 6.29, zScores: { pts: 1.008, reb: 2.464, ast: 0.736, stl: -0.714, blk: 0.899, tpm: -0.682, fgImpact: 0.957, ftImpact: 3.063, to: -1.436 } },
          { name: "Josh Reed", min: 28, pts: 20, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 6, fga: 8, ftm: 6, fta: 6, composite: 7.04, zScores: { pts: 1.943, reb: -0.056, ast: -0.771, stl: 0.323, blk: -0.472, tpm: 1.044, fgImpact: 1.914, ftImpact: 2.297, to: 0.821 } },
          { name: "Thomas Allard", min: 31, pts: 8, reb: 5, ast: 2, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 0.16, zScores: { pts: 0.073, reb: 0.664, ast: 0.234, stl: 0.323, blk: -0.472, tpm: 1.044, fgImpact: -1.02, ftImpact: 0, to: -0.684 } },
          { name: "Dasonte Bowen", min: 22, pts: 8, reb: 2, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 0.78, zScores: { pts: 0.073, reb: -0.416, ast: 1.239, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.166, ftImpact: 0.766, to: 0.821 } },
          { name: "Aleksandar Zecevic", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.76, zScores: { pts: -0.862, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.055, ftImpact: 0, to: 0.821 } },
          { name: "Francois Wibaut", min: 16, pts: 3, reb: 4, ast: 0, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: -1.71, zScores: { pts: -0.706, reb: 0.304, ast: -0.771, stl: 0.323, blk: 2.27, tpm: -0.682, fgImpact: -1.131, ftImpact: -0.633, to: -0.684 } },
          { name: "Tim Oboh", min: 7, pts: 0, reb: 4, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.57, zScores: { pts: -1.173, reb: 0.304, ast: -0.269, stl: -0.714, blk: 0.899, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.069 } },
          { name: "Andy Gemao", min: 3, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -2.55, zScores: { pts: -0.862, reb: -1.136, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0.766, to: 0.821 } },
          { name: "Reggie Grodin", min: 16, pts: 6, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -1.41, zScores: { pts: -0.238, reb: -0.416, ast: -0.269, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.562, ftImpact: 0, to: 0.821 } },
          { name: "Jay Rodgers", min: 15, pts: 7, reb: 0, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: -0.15, zScores: { pts: -0.083, reb: -1.136, ast: 0.736, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: 0.506, ftImpact: 0.766, to: 0.069 } }
        ]
      }
    },
      {
      id: "401929200",
      line: "Texas State Bobcats 87 @ UTSA Roadrunners 67 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TxSt", name: "Texas State Bobcats", score: 87,
        players: [
          { name: "DJ Hall", min: 34, pts: 19, reb: 18, ast: 4, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 8, fga: 16, ftm: 2, fta: 2, composite: 8.64, zScores: { pts: 1.787, reb: 5.343, ast: 1.239, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: 0.443, ftImpact: 0.766, to: 0.069 } },
          { name: "Paul Djobet", min: 27, pts: 8, reb: 5, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 1, fta: 2, composite: -1.44, zScores: { pts: 0.073, reb: 0.664, ast: -0.269, stl: 0.323, blk: -0.472, tpm: 0.181, fgImpact: -0.625, ftImpact: -0.633, to: -0.684 } },
          { name: "Robert Fields", min: 22, pts: 10, reb: 5, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 4, fta: 4, composite: 2, zScores: { pts: 0.385, reb: 0.664, ast: -0.771, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 0.957, ftImpact: 1.531, to: 0.069 } },
          { name: "Dimp Pernell", min: 28, pts: 5, reb: 1, ast: 3, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 1, fta: 6, composite: -4.78, zScores: { pts: -0.394, reb: -0.776, ast: 0.736, stl: 1.361, blk: -0.472, tpm: -0.682, fgImpact: -0.68, ftImpact: -4.695, to: 0.821 } },
          { name: "Kaden Gumbs", min: 24, pts: 8, reb: 5, ast: 3, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: -0.11, zScores: { pts: 0.073, reb: 0.664, ast: 0.736, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.957, ftImpact: 0.766, to: -1.436 } },
          { name: "Kole Grandison", min: 5, pts: 5, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.3, zScores: { pts: -0.394, reb: -1.136, ast: -0.771, stl: 0.323, blk: -0.472, tpm: 0.181, fgImpact: 0.902, ftImpact: 0, to: 0.069 } },
          { name: "Ronald Jessamy", min: 18, pts: 12, reb: 6, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 3, ftm: 6, fta: 6, composite: 3.42, zScores: { pts: 0.697, reb: 1.024, ast: -0.771, stl: -0.714, blk: 0.899, tpm: -0.682, fgImpact: 1.353, ftImpact: 2.297, to: -0.684 } },
          { name: "KJ Younger", min: 14, pts: 5, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -1.31, zScores: { pts: -0.394, reb: -1.136, ast: -0.269, stl: 0.323, blk: -0.472, tpm: 0.181, fgImpact: -1.131, ftImpact: 0.766, to: 0.821 } },
          { name: "Ky Pernell", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.52, zScores: { pts: -1.173, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.069 } },
          { name: "Quel'Ron House", min: 16, pts: 9, reb: 0, ast: 2, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 2, fga: 4, ftm: 5, fta: 5, composite: -0.58, zScores: { pts: 0.229, reb: -1.136, ast: 0.234, stl: -0.714, blk: 0.899, tpm: -0.682, fgImpact: 0.111, ftImpact: 1.914, to: -1.436 } },
          { name: "Caleb Steger", min: 9, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.36, zScores: { pts: -0.238, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: 1.044, fgImpact: 0.111, ftImpact: 0, to: 0.821 } }
        ]
      },
      home: {
        abbr: "UTSA", name: "UTSA Roadrunners", score: 67,
        players: [
          { name: "Chinedum Okpukpara", min: 6, pts: 0, reb: 2, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.79, zScores: { pts: -1.173, reb: -0.416, ast: -0.771, stl: -0.714, blk: 0.899, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.069 } },
          { name: "JJ Kelly", min: 20, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 1, fta: 2, composite: -4.3, zScores: { pts: -0.394, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.68, ftImpact: -0.633, to: 0.821 } },
          { name: "Preston Turner", min: 12, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.77, zScores: { pts: -1.173, reb: -0.416, ast: -0.771, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: -0.395, ftImpact: 0, to: 0.821 } },
          { name: "KJ Tenner", min: 33, pts: 13, reb: 0, ast: 4, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 11, ftm: 4, fta: 6, composite: -0.69, zScores: { pts: 0.852, reb: -1.136, ast: 1.239, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: -0.965, ftImpact: -0.5, to: 0.821 } },
          { name: "Isaiah Watts", min: 29, pts: 17, reb: 3, ast: 1, stl: 4, blk: 0, to: 4, tpm: 3, fgm: 7, fga: 13, ftm: 0, fta: 0, composite: 4.62, zScores: { pts: 1.476, reb: -0.056, ast: -0.269, stl: 3.435, blk: -0.472, tpm: 1.907, fgImpact: 0.783, ftImpact: 0, to: -2.189 } },
          { name: "Jayson Peterson", min: 13, pts: 2, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 1, composite: -2.26, zScores: { pts: -0.862, reb: -0.056, ast: -0.771, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 0.451, ftImpact: -1.016, to: 0.821 } },
          { name: "Mike Broxton Jr.", min: 14, pts: 2, reb: 5, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 2, composite: -2.62, zScores: { pts: -0.862, reb: 0.664, ast: -0.771, stl: -0.714, blk: 0.899, tpm: -0.682, fgImpact: 0.055, ftImpact: -2.031, to: 0.821 } },
          { name: "Ashton Smith", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3, zScores: { pts: -0.862, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.451, ftImpact: 0, to: 0.821 } },
          { name: "Josiah LeGree", min: 20, pts: 6, reb: 3, ast: 3, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 8, ftm: 1, fta: 2, composite: 1.27, zScores: { pts: -0.238, reb: -0.056, ast: 0.736, stl: 2.398, blk: -0.472, tpm: 0.181, fgImpact: -1.471, ftImpact: -0.633, to: 0.821 } },
          { name: "Shey Eberwein", min: 18, pts: 15, reb: 1, ast: 1, stl: 1, blk: 1, to: 2, tpm: 3, fgm: 4, fga: 9, ftm: 4, fta: 6, composite: 1.89, zScores: { pts: 1.164, reb: -0.776, ast: -0.269, stl: 0.323, blk: 0.899, tpm: 1.907, fgImpact: -0.174, ftImpact: -0.5, to: -0.684 } },
          { name: "Isaiah Coleman", min: 20, pts: 5, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -2.26, zScores: { pts: -0.394, reb: 0.304, ast: 0.234, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: -1.471, ftImpact: 0, to: 0.069 } },
          { name: "Demari Williams", min: 8, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.56, zScores: { pts: -1.173, reb: -0.776, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.791, ftImpact: 0, to: 0.821 } }
        ]
      }
    },
      {
      id: "401920896",
      line: "Coastal Carolina Chanticleers 81 @ Wisconsin Badgers 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CCU", name: "Coastal Carolina Chanticleers", score: 81,
        players: [

        ]
      },
      home: {
        abbr: "Wisc", name: "Wisconsin Badgers", score: 89,
        players: [
          { name: "Victory Onuetu", min: 9, pts: 2, reb: 1, ast: 0, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 1, composite: -3.51, zScores: { pts: -0.862, reb: -0.776, ast: -0.771, stl: 0.323, blk: 0.899, tpm: -0.682, fgImpact: 0.055, ftImpact: -1.016, to: -0.684 } },
          { name: "Nolan Winter", min: 29, pts: 14, reb: 9, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 6, fga: 11, ftm: 2, fta: 4, composite: 3.5, zScores: { pts: 1.008, reb: 2.104, ast: -0.771, stl: -0.714, blk: 2.27, tpm: -0.682, fgImpact: 0.728, ftImpact: -1.266, to: 0.821 } },
          { name: "Owen Foxwell", min: 32, pts: 33, reb: 2, ast: 6, stl: 3, blk: 1, to: 1, tpm: 1, fgm: 8, fga: 16, ftm: 16, fta: 17, composite: 14.9, zScores: { pts: 3.968, reb: -0.416, ast: 2.244, stl: 2.398, blk: 0.899, tpm: 0.181, fgImpact: 0.443, ftImpact: 5.109, to: 0.069 } },
          { name: "Braeden Carrington", min: 30, pts: 11, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 10, ftm: 2, fta: 2, composite: 1.77, zScores: { pts: 0.541, reb: -0.056, ast: 0.234, stl: 0.323, blk: -0.472, tpm: 0.181, fgImpact: -0.569, ftImpact: 0.766, to: 0.821 } },
          { name: "Eian Elmer", min: 21, pts: 9, reb: 5, ast: 0, stl: 0, blk: 1, to: 3, tpm: 2, fgm: 3, fga: 8, ftm: 1, fta: 2, composite: -1.34, zScores: { pts: 0.229, reb: 0.664, ast: -0.771, stl: -0.714, blk: 0.899, tpm: 1.044, fgImpact: -0.625, ftImpact: -0.633, to: -1.436 } },
          { name: "Austin Rapp", min: 22, pts: 10, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 3, fga: 11, ftm: 1, fta: 5, composite: -3.02, zScores: { pts: 0.385, reb: -0.056, ast: -0.771, stl: -0.714, blk: 0.899, tpm: 1.907, fgImpact: -1.811, ftImpact: -3.68, to: 0.821 } },
          { name: "Will Garlock", min: 16, pts: 3, reb: 10, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 1, composite: 1.78, zScores: { pts: -0.706, reb: 2.464, ast: 0.234, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.451, ftImpact: 0.383, to: 0.821 } },
          { name: "Jackson Ball", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.13, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0, ftImpact: 0, to: 0.821 } },
          { name: "Jack Janicki", min: 26, pts: 2, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.36, zScores: { pts: -0.862, reb: -0.776, ast: -0.771, stl: 0.323, blk: -0.472, tpm: -0.682, fgImpact: 0.055, ftImpact: 0, to: 0.821 } },
          { name: "Trey Autry", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.52, zScores: { pts: -1.173, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.395, ftImpact: 0, to: 0.821 } },
          { name: "Zach Kinziger", min: 13, pts: 5, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -0.27, zScores: { pts: -0.394, reb: -0.776, ast: -0.771, stl: 0.323, blk: -0.472, tpm: 0.181, fgImpact: 0.055, ftImpact: 0.766, to: 0.821 } }
        ]
      }
    },
      {
      id: "401911472",
      line: "Alabama State Hornets 68 @ San José State Spartans 80 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ALST", name: "Alabama State Hornets", score: 68,
        players: [

        ]
      },
      home: {
        abbr: "SJSU", name: "San José State Spartans", score: 80,
        players: [
          { name: "KJ Martin Jr.", min: 16, pts: 4, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -1.78, zScores: { pts: -0.55, reb: 0.304, ast: 0.234, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: -0.735, ftImpact: 0.766, to: 0.069 } },
          { name: "Robert Vaihola", min: 28, pts: 11, reb: 8, ast: 3, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 5, fga: 6, ftm: 1, fta: 1, composite: 5.45, zScores: { pts: 0.541, reb: 1.744, ast: 0.736, stl: -0.714, blk: 2.27, tpm: -0.682, fgImpact: 1.859, ftImpact: 0.383, to: -0.684 } },
          { name: "Joey Chammaa", min: 29, pts: 11, reb: 4, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 8, fta: 10, composite: 1.95, zScores: { pts: 0.541, reb: 0.304, ast: 1.742, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: -0.735, ftImpact: 1.031, to: 0.069 } },
          { name: "JaVaughn Hannah", min: 30, pts: 5, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 1, composite: -1.7, zScores: { pts: -0.394, reb: 0.304, ast: 0.234, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: 0.111, ftImpact: -1.016, to: 0.069 } },
          { name: "Mekhi Mason", min: 36, pts: 17, reb: 1, ast: 3, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 12, ftm: 5, fta: 6, composite: 1, zScores: { pts: 1.476, reb: -0.776, ast: 0.736, stl: -0.714, blk: -0.472, tpm: 1.044, fgImpact: -0.514, ftImpact: 0.898, to: -0.684 } },
          { name: "Zine Eddine Bedri", min: 15, pts: 19, reb: 7, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 8, fga: 11, ftm: 2, fta: 4, composite: 4.91, zScores: { pts: 1.787, reb: 1.384, ast: -0.269, stl: 0.323, blk: -0.472, tpm: 0.181, fgImpact: 2.421, ftImpact: -1.266, to: 0.821 } },
          { name: "Mookie Cook", min: 8, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.74, zScores: { pts: -0.706, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: 0.181, fgImpact: 0.055, ftImpact: 0, to: 0.821 } },
          { name: "Oliver Kullamae", min: 17, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.76, zScores: { pts: -0.862, reb: -1.136, ast: -0.771, stl: -0.714, blk: -0.472, tpm: -0.682, fgImpact: 0.055, ftImpact: 0, to: 0.821 } },
          { name: "Pasha Goodarzi", min: 21, pts: 8, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 1.02, zScores: { pts: 0.073, reb: -0.776, ast: 0.234, stl: 0.323, blk: -0.472, tpm: 1.044, fgImpact: -0.229, ftImpact: 0, to: 0.821 } }
        ]
      }
    },
      {
      id: "401926073",
      line: "Pepperdine Waves @ Oregon Ducks (Postponed)",
      completed: false,
      statusText: "Postponed",
      away: {
        abbr: "Pepp", name: "Pepperdine Waves", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Oreg", name: "Oregon Ducks", score: null,
        players: [

        ]
      }
    }
    ]
  },
    "2026-11-16": {
    games: [
      {
      id: "401924265",
      line: "Long Beach State Beach 66 @ UCLA Bruins 105 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LBSU", name: "Long Beach State Beach", score: 66,
        players: [

        ]
      },
      home: {
        abbr: "UCLA", name: "UCLA Bruins", score: 105,
        players: [
          { name: "Nikola Kusturica", min: 27, pts: 13, reb: 8, ast: 3, stl: 1, blk: 1, to: 4, tpm: 1, fgm: 4, fga: 7, ftm: 4, fta: 6, composite: 2.12, zScores: { pts: 0.93, reb: 1.837, ast: 0.795, stl: 0.291, blk: 1.31, tpm: 0.167, fgImpact: 0.355, ftImpact: -0.671, to: -2.893 } },
          { name: "Brandon Williams", min: 25, pts: 9, reb: 1, ast: 5, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 1, fta: 1, composite: 1.67, zScores: { pts: 0.27, reb: -0.707, ast: 1.89, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0.81, ftImpact: 0.433, to: 0.792 } },
          { name: "Eric Dailey Jr.", min: 31, pts: 25, reb: 5, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 9, fga: 11, ftm: 5, fta: 6, composite: 7.99, zScores: { pts: 2.91, reb: 0.747, ast: -0.301, stl: 0.291, blk: -0.467, tpm: 1.022, fgImpact: 2.959, ftImpact: 0.963, to: -0.129 } },
          { name: "Jaylen Petty", min: 28, pts: 12, reb: 5, ast: 3, stl: 5, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 8.08, zScores: { pts: 0.765, reb: 0.747, ast: 0.795, stl: 4.118, blk: -0.467, tpm: 1.022, fgImpact: -0.554, ftImpact: 0.865, to: 0.792 } },
          { name: "Trent Perry", min: 19, pts: 8, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 6, ftm: 4, fta: 5, composite: -3.66, zScores: { pts: 0.105, reb: -0.707, ast: 0.247, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.959, ftImpact: 0.53, to: -1.05 } },
          { name: "Gunars Grinvalds", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.214, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: 0, to: 0.792 } },
          { name: "Sergej Macura", min: 11, pts: 8, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 1, composite: -1.51, zScores: { pts: 0.105, reb: -0.344, ast: -0.301, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 1.264, ftImpact: -1.201, to: 0.792 } },
          { name: "Joe Philon III", min: 21, pts: 11, reb: 1, ast: 0, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 2.84, zScores: { pts: 0.6, reb: -0.707, ast: -0.849, stl: 0.291, blk: 1.31, tpm: 0.167, fgImpact: 1.24, ftImpact: 0, to: 0.792 } },
          { name: "Javonte Floyd", min: 8, pts: 4, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -1.3, zScores: { pts: -0.555, reb: -0.707, ast: -0.301, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0.43, ftImpact: 0.865, to: 0.792 } },
          { name: "Jordan Houegban", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.4, zScores: { pts: -0.884, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0.43, ftImpact: 0, to: 0.792 } },
          { name: "Markell Alston", min: 5, pts: 3, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 3, fta: 4, composite: -2.25, zScores: { pts: -0.72, reb: -0.707, ast: -0.849, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: 0.097, to: 0.792 } },
          { name: "Azavier Robinson", min: 19, pts: 10, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 7, ftm: 1, fta: 2, composite: -0.03, zScores: { pts: 0.435, reb: 0.383, ast: -0.301, stl: 0.291, blk: -0.467, tpm: 0.167, fgImpact: 0.355, ftImpact: -0.768, to: -0.129 } }
        ]
      }
    },
      {
      id: "401911211",
      line: "Ferrum Panthers 57 @ George Washington Revolutionaries 94 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "FC", name: "Ferrum Panthers", score: 57,
        players: [

        ]
      },
      home: {
        abbr: "GrgWas", name: "George Washington Revolutionaries", score: 94,
        players: [
          { name: "Lovro Urbiha", min: 11, pts: 3, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.12, zScores: { pts: -0.72, reb: 0.02, ast: -0.301, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: -0.025, ftImpact: 0, to: -0.129 } },
          { name: "Dylan James", min: 13, pts: 4, reb: 6, ast: 0, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: 1.68, zScores: { pts: -0.555, reb: 1.11, ast: -0.849, stl: -0.666, blk: 3.087, tpm: -0.689, fgImpact: 0.43, ftImpact: 0.865, to: -1.05 } },
          { name: "Omari Witherspoon", min: 13, pts: 12, reb: 4, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 3.81, zScores: { pts: 0.765, reb: 0.383, ast: 0.247, stl: 0.291, blk: -0.467, tpm: 1.022, fgImpact: 1.694, ftImpact: 0, to: -0.129 } },
          { name: "Jean Aranguren", min: 11, pts: 2, reb: 0, ast: 5, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 1.23, zScores: { pts: -0.884, reb: -1.07, ast: 1.89, stl: 2.205, blk: 1.31, tpm: -0.689, fgImpact: -0.479, ftImpact: 0, to: -1.05 } },
          { name: "Terrance Arceneaux", min: 11, pts: 0, reb: 0, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.67, zScores: { pts: -1.214, reb: -1.07, ast: -0.301, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: -0.909, ftImpact: 0, to: -0.129 } },
          { name: "Deng Manyang", min: 11, pts: 10, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 4, ftm: 1, fta: 3, composite: 1, zScores: { pts: 0.435, reb: 0.747, ast: 0.247, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: 1.719, ftImpact: -1.969, to: 0.792 } },
          { name: "Jayvon Rampersant", min: 10, pts: 8, reb: 4, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 0.88, zScores: { pts: 0.105, reb: 0.383, ast: -0.849, stl: 1.248, blk: -0.467, tpm: -0.689, fgImpact: 0.355, ftImpact: 0, to: 0.792 } },
          { name: "Ryder Frost", min: 20, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -2.6, zScores: { pts: -0.225, reb: -0.344, ast: -0.849, stl: -0.666, blk: -0.467, tpm: 1.022, fgImpact: -1.868, ftImpact: 0, to: 0.792 } },
          { name: "Andrija Vukovic", min: 21, pts: 10, reb: 9, ast: 3, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 4, fga: 7, ftm: 2, fta: 3, composite: 1.43, zScores: { pts: 0.435, reb: 2.2, ast: 0.795, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: 0.355, ftImpact: -0.335, to: -1.971 } },
          { name: "Malachi Arrington", min: 7, pts: 6, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 4, composite: -2.63, zScores: { pts: -0.225, reb: -0.707, ast: -0.849, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: 0.86, ftImpact: -1.536, to: -0.129 } },
          { name: "Promis N'Landu", min: 25, pts: 10, reb: 3, ast: 6, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 5, ftm: 2, fta: 4, composite: -0.35, zScores: { pts: 0.435, reb: 0.02, ast: 2.438, stl: -0.666, blk: -0.467, tpm: 1.022, fgImpact: 0.38, ftImpact: -1.536, to: -1.971 } },
          { name: "Jalen Rougier-Roane", min: 10, pts: 4, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -0.555, reb: -0.707, ast: -0.301, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.959, ftImpact: 0, to: 0.792 } },
          { name: "Felix Kossaras", min: 16, pts: 10, reb: 4, ast: 0, stl: 1, blk: 0, to: 4, tpm: 2, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: -1.72, zScores: { pts: 0.435, reb: 0.383, ast: -0.849, stl: 0.291, blk: -0.467, tpm: 1.022, fgImpact: 0.355, ftImpact: 0, to: -2.893 } },
          { name: "Andrew Phillips", min: 21, pts: 9, reb: 7, ast: 1, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 2.91, zScores: { pts: 0.27, reb: 1.473, ast: -0.301, stl: -0.666, blk: -0.467, tpm: 1.878, fgImpact: -0.074, ftImpact: 0, to: 0.792 } }
        ]
      }
    },
      {
      id: "401929419",
      line: "Florida A&M Rattlers 46 @ UTEP Miners 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "FAMU", name: "Florida A&M Rattlers", score: 46,
        players: [

        ]
      },
      home: {
        abbr: "UTEP", name: "UTEP Miners", score: 79,
        players: [
          { name: "Youssouf Traore", min: 17, pts: 3, reb: 13, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -0.08, zScores: { pts: -0.72, reb: 3.653, ast: -0.301, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: -0.025, ftImpact: -0.768, to: -1.05 } },
          { name: "Augusto Cassia", min: 18, pts: 2, reb: 5, ast: 3, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -1.24, zScores: { pts: -0.884, reb: 0.747, ast: 0.795, stl: 1.248, blk: -0.467, tpm: -0.689, fgImpact: -0.934, ftImpact: 0, to: -1.05 } },
          { name: "Cam McDaniels", min: 28, pts: 18, reb: 4, ast: 3, stl: 1, blk: 1, to: 5, tpm: 4, fgm: 6, fga: 15, ftm: 2, fta: 2, composite: 2.81, zScores: { pts: 1.755, reb: 0.383, ast: 0.795, stl: 0.291, blk: 1.31, tpm: 2.734, fgImpact: -1.513, ftImpact: 0.865, to: -3.814 } },
          { name: "Leif Moeller", min: 25, pts: 10, reb: 2, ast: 5, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 11, ftm: 0, fta: 0, composite: 2.19, zScores: { pts: 0.435, reb: -0.344, ast: 1.89, stl: 1.248, blk: -0.467, tpm: 1.022, fgImpact: -1.463, ftImpact: 0, to: -0.129 } },
          { name: "Reese Miller", min: 24, pts: 9, reb: 4, ast: 0, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -0.07, zScores: { pts: 0.27, reb: 0.383, ast: -0.849, stl: 0.291, blk: -0.467, tpm: 1.878, fgImpact: -0.529, ftImpact: 0, to: -1.05 } },
          { name: "Ivan Perasovic", min: 8, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -2.7, zScores: { pts: -0.884, reb: -0.344, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.455, ftImpact: 0.865, to: 0.792 } },
          { name: "Reid Cason", min: 17, pts: 11, reb: 6, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 9, ftm: 1, fta: 2, composite: 2.13, zScores: { pts: 0.6, reb: 1.11, ast: -0.849, stl: 0.291, blk: 1.31, tpm: -0.689, fgImpact: 0.331, ftImpact: -0.768, to: 0.792 } },
          { name: "Janusz Ratowski", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.16, zScores: { pts: -1.214, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: 0, to: 0.792 } },
          { name: "Delano Tarpley", min: 2, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.68, zScores: { pts: -0.884, reb: -0.344, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0.43, ftImpact: 0, to: 0.792 } },
          { name: "Kaleb Jackson", min: 4, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.214, reb: -1.07, ast: -0.301, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.455, ftImpact: 0, to: 0.792 } },
          { name: "Ryan Jackson Jr.", min: 12, pts: 7, reb: 1, ast: 4, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: 0.37, zScores: { pts: -0.06, reb: -0.707, ast: 1.342, stl: 1.248, blk: -0.467, tpm: 0.167, fgImpact: -0.05, ftImpact: 0.865, to: -1.971 } },
          { name: "Donovan Criss", min: 20, pts: 0, reb: 3, ast: 5, stl: 4, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: 2.12, zScores: { pts: -1.214, reb: 0.02, ast: 1.89, stl: 3.161, blk: -0.467, tpm: -0.689, fgImpact: -0.455, ftImpact: 0, to: -0.129 } },
          { name: "Jace Whiting", min: 22, pts: 15, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 3.41, zScores: { pts: 1.26, reb: 0.02, ast: 0.247, stl: 0.291, blk: -0.467, tpm: 1.878, fgImpact: 0.306, ftImpact: 0, to: -0.129 } }
        ]
      }
    },
      {
      id: "401916298",
      line: "Alcorn State Braves 57 @ Maryland Terrapins 117 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ALCN", name: "Alcorn State Braves", score: 57,
        players: [

        ]
      },
      home: {
        abbr: "MD", name: "Maryland Terrapins", score: 117,
        players: [
          { name: "Austin Brown", min: 15, pts: 9, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: -0.82, zScores: { pts: 0.27, reb: 0.383, ast: -0.849, stl: -0.666, blk: -0.467, tpm: 1.022, fgImpact: 0.38, ftImpact: -0.768, to: -0.129 } },
          { name: "Pharrel Payne", min: 16, pts: 12, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 5, ftm: 4, fta: 6, composite: -1.43, zScores: { pts: 0.765, reb: 0.383, ast: -0.301, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 1.264, ftImpact: -0.671, to: -1.05 } },
          { name: "Mike McNair Jr.", min: 21, pts: 14, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 3.33, zScores: { pts: 1.095, reb: -0.707, ast: 0.247, stl: -0.666, blk: -0.467, tpm: 2.734, fgImpact: 0.355, ftImpact: 0.865, to: -0.129 } },
          { name: "Bishop Boswell", min: 17, pts: 6, reb: 3, ast: 4, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 1, fta: 1, composite: 3.63, zScores: { pts: -0.225, reb: 0.02, ast: 1.342, stl: 0.291, blk: 1.31, tpm: 0.167, fgImpact: -0.504, ftImpact: 0.433, to: 0.792 } },
          { name: "DJ Wagner", min: 18, pts: 14, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 7, ftm: 1, fta: 3, composite: 0.89, zScores: { pts: 1.095, reb: -0.344, ast: 0.247, stl: -0.666, blk: -0.467, tpm: 1.878, fgImpact: 1.24, ftImpact: -1.969, to: -0.129 } },
          { name: "Tomislav Buljan", min: 23, pts: 9, reb: 10, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 3, fta: 6, composite: 2.95, zScores: { pts: 0.27, reb: 2.563, ast: 0.247, stl: 1.248, blk: -0.467, tpm: -0.689, fgImpact: 1.289, ftImpact: -2.304, to: 0.792 } },
          { name: "Adama Tambedou", min: 6, pts: 2, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.35, zScores: { pts: -0.884, reb: -0.344, ast: -0.849, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: -0.025, ftImpact: 0, to: 0.792 } },
          { name: "Baba Oladotun", min: 17, pts: 6, reb: 3, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 1, composite: -2.09, zScores: { pts: -0.225, reb: 0.02, ast: 1.342, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.074, ftImpact: -1.201, to: -0.129 } },
          { name: "Robert Jennings II", min: 11, pts: 1, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -2.72, zScores: { pts: -1.049, reb: 0.383, ast: -0.301, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: -0.909, ftImpact: -0.768, to: 0.792 } },
          { name: "Alex K'Medehouto", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.16, zScores: { pts: -1.214, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: 0, to: 0.792 } },
          { name: "Guillermo Del Pino", min: 8, pts: 11, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 5, ftm: 2, fta: 2, composite: 2.09, zScores: { pts: 0.6, reb: 0.383, ast: -0.849, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: 1.264, ftImpact: 0.865, to: 0.792 } },
          { name: "Maban Jabriel", min: 4, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.54, zScores: { pts: -1.214, reb: -1.07, ast: -0.301, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: 0, to: -0.129 } },
          { name: "Andre Mills", min: 19, pts: 15, reb: 1, ast: 3, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 6, ftm: 4, fta: 4, composite: 5.46, zScores: { pts: 1.26, reb: -0.707, ast: 0.795, stl: 0.291, blk: -0.467, tpm: 1.878, fgImpact: 0.81, ftImpact: 1.731, to: -0.129 } },
          { name: "Kaden House", min: 18, pts: 16, reb: 3, ast: 6, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 8, ftm: 5, fta: 6, composite: 7.37, zScores: { pts: 1.425, reb: 0.02, ast: 2.438, stl: 1.248, blk: -0.467, tpm: 0.167, fgImpact: 0.785, ftImpact: 0.963, to: 0.792 } },
          { name: "George Turkson Jr.", min: 6, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 1, composite: -5.16, zScores: { pts: -0.884, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0.43, ftImpact: -1.201, to: -0.129 } }
        ]
      }
    },
      {
      id: "401916317",
      line: "Prairie View A&M Panthers 59 @ Ohio State Buckeyes 86 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PV", name: "Prairie View A&M Panthers", score: 59,
        players: [

        ]
      },
      home: {
        abbr: "OhSt", name: "Ohio State Buckeyes", score: 86,
        players: [
          { name: "Andrija Jelavic", min: 19, pts: 5, reb: 8, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 1, fta: 4, composite: -1.52, zScores: { pts: -0.39, reb: 1.837, ast: 0.795, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: 0.405, ftImpact: -3.169, to: -0.129 } },
          { name: "Anthony Thompson", min: 23, pts: 12, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 1.38, zScores: { pts: 0.765, reb: 0.02, ast: -0.849, stl: -0.666, blk: -0.467, tpm: 1.022, fgImpact: -0.099, ftImpact: 0.865, to: 0.792 } },
          { name: "Amare Bynum", min: 26, pts: 12, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 5, fta: 6, composite: -0.63, zScores: { pts: 0.765, reb: 0.02, ast: -0.301, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: -0.984, ftImpact: 0.963, to: -0.129 } },
          { name: "Justin Pippen", min: 26, pts: 14, reb: 4, ast: 2, stl: 3, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 8, ftm: 3, fta: 4, composite: 4.29, zScores: { pts: 1.095, reb: 0.383, ast: 0.247, stl: 2.205, blk: -0.467, tpm: 1.878, fgImpact: -0.099, ftImpact: 0.097, to: -1.05 } },
          { name: "John Mobley Jr.", min: 27, pts: 10, reb: 1, ast: 5, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 3, fta: 4, composite: 1.5, zScores: { pts: 0.435, reb: -0.707, ast: 1.89, stl: 0.291, blk: -0.467, tpm: 0.167, fgImpact: -0.074, ftImpact: 0.097, to: -0.129 } },
          { name: "Lee Aaliya", min: 6, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.31, zScores: { pts: -0.884, reb: -1.07, ast: -0.301, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.025, ftImpact: 0, to: 0.792 } },
          { name: "Josh Ojianwuna", min: 15, pts: 4, reb: 6, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 1.31, zScores: { pts: -0.555, reb: 1.11, ast: -0.849, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: 0.86, ftImpact: 0, to: 0.792 } },
          { name: "Ivan Njegovan", min: 7, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 4, fta: 4, composite: -2.06, zScores: { pts: -0.555, reb: 0.02, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.455, ftImpact: 1.731, to: -0.129 } },
          { name: "Jimmie Williams", min: 25, pts: 13, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 7, ftm: 5, fta: 6, composite: 3.26, zScores: { pts: 0.93, reb: 0.383, ast: 0.795, stl: 0.291, blk: -0.467, tpm: 1.022, fgImpact: -0.529, ftImpact: 0.963, to: -0.129 } },
          { name: "Braylen Nash", min: 1, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.4, zScores: { pts: -0.884, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0.43, ftImpact: 0, to: 0.792 } },
          { name: "LJ Smith", min: 18, pts: 7, reb: 3, ast: 4, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 2, ftm: 1, fta: 2, composite: 1.15, zScores: { pts: -0.06, reb: 0.02, ast: 1.342, stl: -0.666, blk: -0.467, tpm: 1.022, fgImpact: 0.86, ftImpact: -0.768, to: -0.129 } },
          { name: "Curtis Givens III", min: 7, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -6.14, zScores: { pts: -1.049, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.455, ftImpact: -0.768, to: -0.129 } }
        ]
      }
    },
      {
      id: "401925864",
      line: "Western Kentucky Hilltoppers 64 @ Tulsa Golden Hurricane 67 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WKU", name: "Western Kentucky Hilltoppers", score: 64,
        players: [

        ]
      },
      home: {
        abbr: "Tuls", name: "Tulsa Golden Hurricane", score: 67,
        players: [
          { name: "Macon Emory", min: 22, pts: 12, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 8, ftm: 1, fta: 1, composite: 1.93, zScores: { pts: 0.765, reb: 0.383, ast: -0.301, stl: 0.291, blk: -0.467, tpm: 0.167, fgImpact: 0.785, ftImpact: 0.433, to: -0.129 } },
          { name: "Chris Loofe", min: 31, pts: 18, reb: 9, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 6, fga: 6, ftm: 6, fta: 9, composite: 4.78, zScores: { pts: 1.755, reb: 2.2, ast: 0.247, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: 2.579, ftImpact: -1.006, to: -0.129 } },
          { name: "Jaylen Lawal", min: 35, pts: 11, reb: 4, ast: 5, stl: 1, blk: 0, to: 5, tpm: 1, fgm: 3, fga: 10, ftm: 4, fta: 6, composite: -3.51, zScores: { pts: 0.6, reb: 0.383, ast: 1.89, stl: 0.291, blk: -0.467, tpm: 0.167, fgImpact: -1.893, ftImpact: -0.671, to: -3.814 } },
          { name: "Kobi Williams", min: 29, pts: 6, reb: 3, ast: 1, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 4, composite: -3.14, zScores: { pts: -0.225, reb: 0.02, ast: -0.301, stl: 0.291, blk: 1.31, tpm: -0.689, fgImpact: -0.959, ftImpact: -1.536, to: -1.05 } },
          { name: "Myles Rigsby", min: 33, pts: 6, reb: 6, ast: 4, stl: 1, blk: 0, to: 5, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 4, composite: -4.04, zScores: { pts: -0.225, reb: 1.11, ast: 1.342, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: -0.05, ftImpact: -1.536, to: -3.814 } },
          { name: "Derelle Desire", min: 3, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.68, zScores: { pts: -0.884, reb: -0.344, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0.43, ftImpact: 0, to: 0.792 } },
          { name: "Aleksa Dimitrijevic", min: 6, pts: 5, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.85, zScores: { pts: -0.39, reb: -0.344, ast: -0.849, stl: 0.291, blk: -0.467, tpm: 0.167, fgImpact: -0.05, ftImpact: 0, to: 0.792 } },
          { name: "Kaleb Banks", min: 13, pts: 4, reb: 0, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -0.81, zScores: { pts: -0.555, reb: -1.07, ast: -0.301, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: 0.43, ftImpact: 0.865, to: -0.129 } },
          { name: "Denton Forsythe", min: 8, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -6.94, zScores: { pts: -1.214, reb: -0.707, ast: -0.301, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: 0, to: -2.893 } },
          { name: "Mike Williams III", min: 15, pts: 3, reb: 0, ast: 2, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.71, zScores: { pts: -0.72, reb: -1.07, ast: 0.247, stl: 2.205, blk: -0.467, tpm: 0.167, fgImpact: -0.025, ftImpact: 0, to: -1.05 } },
          { name: "Jeremiah Johnson", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.07, zScores: { pts: -1.214, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.909, ftImpact: 0, to: 0.792 } }
        ]
      }
    },
      {
      id: "401921804",
      line: "Grambling Tigers 59 @ Kentucky Wildcats 88 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "GRAM", name: "Grambling Tigers", score: 59,
        players: [

        ]
      },
      home: {
        abbr: "KY", name: "Kentucky Wildcats", score: 88,
        players: [
          { name: "Ousmane N'Diaye", min: 17, pts: 6, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -0.51, zScores: { pts: -0.225, reb: 0.747, ast: -0.301, stl: -0.666, blk: -0.467, tpm: 1.022, fgImpact: -1.413, ftImpact: 0, to: 0.792 } },
          { name: "Milan Momcilovic", min: 30, pts: 12, reb: 5, ast: 2, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 8, ftm: 1, fta: 1, composite: 2.71, zScores: { pts: 0.765, reb: 0.747, ast: 0.247, stl: -0.666, blk: -0.467, tpm: 1.878, fgImpact: -0.099, ftImpact: 0.433, to: -0.129 } },
          { name: "Malachi Moreno", min: 31, pts: 22, reb: 12, ast: 1, stl: 4, blk: 3, to: 2, tpm: 0, fgm: 8, fga: 14, ftm: 6, fta: 8, composite: 12.6, zScores: { pts: 2.415, reb: 3.29, ast: -0.301, stl: 3.161, blk: 4.865, tpm: -0.689, fgImpact: 0.711, ftImpact: 0.195, to: -1.05 } },
          { name: "Alex Wilkins", min: 26, pts: 7, reb: 3, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 5, fta: 6, composite: -2.13, zScores: { pts: -0.06, reb: 0.02, ast: 0.247, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: -1.389, ftImpact: 0.963, to: -1.05 } },
          { name: "Zoom Diallo", min: 32, pts: 12, reb: 9, ast: 9, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 12, ftm: 0, fta: 0, composite: 5.94, zScores: { pts: 0.765, reb: 2.2, ast: 4.081, stl: 1.248, blk: -0.467, tpm: -0.689, fgImpact: -0.149, ftImpact: 0, to: -1.05 } },
          { name: "Braydon Hawthorne", min: 19, pts: 3, reb: 5, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.22, zScores: { pts: -0.72, reb: 0.747, ast: 0.247, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: -0.479, ftImpact: 0, to: -1.05 } },
          { name: "Justin McBride", min: 4, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 1, fta: 1, composite: -1.12, zScores: { pts: -0.225, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: 0.405, ftImpact: 0.433, to: 0.792 } },
          { name: "Franck Kepnang", min: 7, pts: 2, reb: 2, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.59, zScores: { pts: -0.884, reb: -0.344, ast: -0.849, stl: 1.248, blk: -0.467, tpm: -0.689, fgImpact: -0.479, ftImpact: 0, to: -0.129 } },
          { name: "Zyon Hawthorne", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.16, zScores: { pts: -1.214, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: 0, to: 0.792 } },
          { name: "Mason Williams", min: 20, pts: 12, reb: 2, ast: 4, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 3.71, zScores: { pts: 0.765, reb: -0.344, ast: 1.342, stl: 0.291, blk: -0.467, tpm: 1.022, fgImpact: -0.554, ftImpact: 0.865, to: 0.792 } },
          { name: "Kam Williams", min: 13, pts: 6, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: -1.77, zScores: { pts: -0.225, reb: -0.707, ast: -0.301, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: 0.405, ftImpact: -0.768, to: 0.792 } }
        ]
      }
    },
      {
      id: "401921182",
      line: "DeSales Bulldogs 53 @ Pennsylvania Quakers 75 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "DSLU", name: "DeSales Bulldogs", score: 53,
        players: [

        ]
      },
      home: {
        abbr: "Penn", name: "Pennsylvania Quakers", score: 75,
        players: [
          { name: "Lucas Lueth", min: 34, pts: 12, reb: 5, ast: 4, stl: 3, blk: 2, to: 2, tpm: 1, fgm: 4, fga: 5, ftm: 3, fta: 4, composite: 8.62, zScores: { pts: 0.765, reb: 0.747, ast: 1.342, stl: 2.205, blk: 3.087, tpm: 0.167, fgImpact: 1.264, ftImpact: 0.097, to: -1.05 } },
          { name: "Augustus Gerhart", min: 14, pts: 1, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -4.22, zScores: { pts: -1.049, reb: 0.383, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.909, ftImpact: -0.768, to: 0.792 } },
          { name: "TJ Power", min: 27, pts: 7, reb: 4, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -2.34, zScores: { pts: -0.06, reb: 0.383, ast: 0.795, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: -1.438, ftImpact: 0, to: -1.05 } },
          { name: "Jay Jones", min: 7, pts: 2, reb: 0, ast: 2, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.95, zScores: { pts: -0.884, reb: -1.07, ast: 0.247, stl: 0.291, blk: 1.31, tpm: -0.689, fgImpact: -0.025, ftImpact: 0, to: -0.129 } },
          { name: "Michael Zanoni", min: 28, pts: 16, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 10, ftm: 1, fta: 1, composite: 4.83, zScores: { pts: 1.425, reb: 0.02, ast: -0.301, stl: 0.291, blk: -0.467, tpm: 1.878, fgImpact: 0.76, ftImpact: 0.433, to: 0.792 } },
          { name: "William Kruse", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.16, zScores: { pts: -1.214, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: 0, to: 0.792 } },
          { name: "Dalton Scantlebury", min: 13, pts: 4, reb: 7, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 6, composite: -4.42, zScores: { pts: -0.555, reb: 1.473, ast: -0.849, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: -0.479, ftImpact: -3.937, to: 0.792 } },
          { name: "Finley Billy", min: 6, pts: 5, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.5, zScores: { pts: -0.39, reb: -1.07, ast: -0.849, stl: 0.291, blk: -0.467, tpm: 0.167, fgImpact: -0.05, ftImpact: 0, to: -0.129 } },
          { name: "Michael Pereira", min: 4, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -4.86, zScores: { pts: -1.049, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.455, ftImpact: -0.768, to: 0.792 } },
          { name: "Ethan Lin", min: 12, pts: 9, reb: 0, ast: 5, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 6, ftm: 2, fta: 3, composite: 0.54, zScores: { pts: 0.27, reb: -1.07, ast: 1.89, stl: 0.291, blk: -0.467, tpm: 0.167, fgImpact: -0.074, ftImpact: -0.335, to: -0.129 } },
          { name: "Johnny Keenan", min: 23, pts: 8, reb: 3, ast: 3, stl: 4, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 10, ftm: 0, fta: 1, composite: 1.51, zScores: { pts: 0.105, reb: 0.02, ast: 0.795, stl: 3.161, blk: -0.467, tpm: -0.689, fgImpact: -1.008, ftImpact: -1.201, to: 0.792 } },
          { name: "Isaiah Carroll", min: 18, pts: 7, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -1, zScores: { pts: -0.06, reb: -0.707, ast: -0.849, stl: -0.666, blk: 1.31, tpm: 0.167, fgImpact: -0.984, ftImpact: 0, to: 0.792 } },
          { name: "Payton Kamin", min: 6, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -5.02, zScores: { pts: -0.72, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.025, ftImpact: -0.768, to: -0.129 } },
          { name: "Niklas Polonowski", min: 6, pts: 0, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 1, composite: -4.87, zScores: { pts: -1.214, reb: -0.707, ast: -0.301, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: -0.455, ftImpact: -1.201, to: -0.129 } }
        ]
      }
    },
      {
      id: "401918075",
      line: "The Citadel Bulldogs 51 @ Clemson Tigers 87 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CIT", name: "The Citadel Bulldogs", score: 51,
        players: [

        ]
      },
      home: {
        abbr: "Clem", name: "Clemson Tigers", score: 87,
        players: [
          { name: "Liutauras Lelevicius", min: 21, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.72, zScores: { pts: -0.225, reb: -0.344, ast: -0.849, stl: -0.666, blk: -0.467, tpm: 1.022, fgImpact: 0.86, ftImpact: 0, to: -1.05 } },
          { name: "Dylan Faulkner", min: 20, pts: 12, reb: 9, ast: 0, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 5, fga: 6, ftm: 2, fta: 4, composite: -0.53, zScores: { pts: 0.765, reb: 2.2, ast: -0.849, stl: 1.248, blk: -0.467, tpm: -0.689, fgImpact: 1.694, ftImpact: -1.536, to: -2.893 } },
          { name: "David Fuchs", min: 21, pts: 9, reb: 7, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 3, fta: 4, composite: 2.98, zScores: { pts: 0.27, reb: 1.473, ast: -0.849, stl: -0.666, blk: 3.087, tpm: -0.689, fgImpact: 0.38, ftImpact: 0.097, to: -0.129 } },
          { name: "Ace Buckner", min: 27, pts: 6, reb: 2, ast: 6, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 9, ftm: 2, fta: 3, composite: 1.05, zScores: { pts: -0.225, reb: -0.344, ast: 2.438, stl: 2.205, blk: -0.467, tpm: -0.689, fgImpact: -2.323, ftImpact: -0.335, to: 0.792 } },
          { name: "Cole Certa", min: 30, pts: 20, reb: 7, ast: 2, stl: 0, blk: 1, to: 4, tpm: 3, fgm: 7, fga: 9, ftm: 3, fta: 3, composite: 6.83, zScores: { pts: 2.085, reb: 1.473, ast: 0.247, stl: -0.666, blk: 1.31, tpm: 1.878, fgImpact: 2.099, ftImpact: 1.298, to: -2.893 } },
          { name: "Chase Thompson", min: 29, pts: 11, reb: 1, ast: 3, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 9, ftm: 3, fta: 3, composite: 3.21, zScores: { pts: 0.6, reb: -0.707, ast: 0.795, stl: 2.205, blk: 1.31, tpm: -0.689, fgImpact: -0.554, ftImpact: 1.298, to: -1.05 } },
          { name: "Trent Steinour", min: 3, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.45, zScores: { pts: -0.884, reb: -1.07, ast: -0.849, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: 0.43, ftImpact: 0, to: 0.792 } },
          { name: "Dallas Thomas", min: 26, pts: 8, reb: 4, ast: 0, stl: 3, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: 3.71, zScores: { pts: 0.105, reb: 0.383, ast: -0.849, stl: 2.205, blk: 1.31, tpm: 0.167, fgImpact: -0.504, ftImpact: 0.097, to: 0.792 } },
          { name: "Will Stevens", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.214, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: 0, to: 0.792 } },
          { name: "Amare James", min: 2, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.5, zScores: { pts: -0.884, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.025, ftImpact: 0, to: 0.792 } },
          { name: "Harris Reynolds", min: 19, pts: 11, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 7, ftm: 5, fta: 6, composite: 1.32, zScores: { pts: 0.6, reb: -0.344, ast: 0.795, stl: 0.291, blk: -0.467, tpm: 1.022, fgImpact: -1.413, ftImpact: 0.963, to: -0.129 } }
        ]
      }
    },
      {
      id: "401911240",
      line: "Richmond Spiders 68 @ Virginia Tech Hokies 85 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Rich", name: "Richmond Spiders", score: 68,
        players: [
          { name: "Jamie Kaiser Jr.", min: 34, pts: 17, reb: 6, ast: 3, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 6, fga: 11, ftm: 2, fta: 2, composite: 7.98, zScores: { pts: 1.59, reb: 1.11, ast: 0.795, stl: -0.666, blk: 1.31, tpm: 1.878, fgImpact: 0.306, ftImpact: 0.865, to: 0.792 } },
          { name: "Amon Dorries", min: 23, pts: 11, reb: 4, ast: 2, stl: 1, blk: 1, to: 4, tpm: 0, fgm: 4, fga: 7, ftm: 3, fta: 6, composite: -2.7, zScores: { pts: 0.6, reb: 0.383, ast: 0.247, stl: 0.291, blk: 1.31, tpm: -0.689, fgImpact: 0.355, ftImpact: -2.304, to: -2.893 } },
          { name: "Aiden Argabright", min: 29, pts: 9, reb: 3, ast: 1, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 2.1, zScores: { pts: 0.27, reb: 0.02, ast: -0.301, stl: 2.205, blk: -0.467, tpm: 0.167, fgImpact: -0.529, ftImpact: 0.865, to: -0.129 } },
          { name: "Derin Saran", min: 32, pts: 8, reb: 4, ast: 2, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: 1.17, zScores: { pts: 0.105, reb: 0.383, ast: 0.247, stl: 1.248, blk: -0.467, tpm: 0.167, fgImpact: 0.38, ftImpact: -0.768, to: -0.129 } },
          { name: "Dominick Stewart", min: 30, pts: 13, reb: 5, ast: 2, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 14, ftm: 2, fta: 2, composite: 0.71, zScores: { pts: 0.93, reb: 0.747, ast: 0.247, stl: 0.291, blk: -0.467, tpm: 0.167, fgImpact: -1.942, ftImpact: 0.865, to: -0.129 } },
          { name: "Chad Cook", min: 11, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -5.23, zScores: { pts: -0.884, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.479, ftImpact: 0, to: -0.129 } },
          { name: "Andrew Ball", min: 10, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.07, zScores: { pts: -1.214, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.909, ftImpact: 0, to: 0.792 } },
          { name: "Sam Simmons Jr.", min: 10, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.58, zScores: { pts: -1.214, reb: -1.07, ast: -0.301, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: 0, to: -0.129 } },
          { name: "Will Harper III", min: 6, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 1, composite: -6.7, zScores: { pts: -1.214, reb: -1.07, ast: -0.849, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: -0.455, ftImpact: -1.201, to: -1.05 } },
          { name: "Collin Tanner", min: 15, pts: 8, reb: 2, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 4, ftm: 0, fta: 0, composite: -0.46, zScores: { pts: 0.105, reb: -0.344, ast: -0.849, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: 1.719, ftImpact: 0, to: -1.05 } }
        ]
      },
      home: {
        abbr: "VaTec", name: "Virginia Tech Hokies", score: 85,
        players: [
          { name: "Miles Heide", min: 15, pts: 7, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 1, fta: 2, composite: -1.4, zScores: { pts: -0.06, reb: 0.02, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 1.289, ftImpact: -0.768, to: 0.792 } },
          { name: "Amani Hansberry", min: 28, pts: 15, reb: 6, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 8, ftm: 6, fta: 6, composite: 4.6, zScores: { pts: 1.26, reb: 1.11, ast: 0.795, stl: 0.291, blk: -0.467, tpm: 0.167, fgImpact: -0.099, ftImpact: 2.596, to: -1.05 } },
          { name: "Jaylen Curry", min: 23, pts: 14, reb: 1, ast: 1, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 11, ftm: 6, fta: 6, composite: -1.62, zScores: { pts: 1.095, reb: -0.707, ast: -0.301, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: -1.463, ftImpact: 2.596, to: -1.971 } },
          { name: "Ben Hammond", min: 34, pts: 15, reb: 3, ast: 7, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 15, ftm: 1, fta: 1, composite: 2.02, zScores: { pts: 1.26, reb: 0.02, ast: 2.986, stl: -0.666, blk: -0.467, tpm: 1.022, fgImpact: -1.513, ftImpact: 0.433, to: -1.05 } },
          { name: "Isaiah Elohim", min: 17, pts: 5, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 2, fta: 4, composite: -5.57, zScores: { pts: -0.39, reb: -0.344, ast: -0.849, stl: 0.291, blk: -0.467, tpm: 0.167, fgImpact: -1.389, ftImpact: -1.536, to: -1.05 } },
          { name: "Sin'Cere Jones", min: 12, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.64, zScores: { pts: -0.555, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0.86, ftImpact: 0, to: 0.792 } },
          { name: "Kuol Atak", min: 8, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.62, zScores: { pts: -0.225, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: 1.022, fgImpact: 0.405, ftImpact: 0, to: -0.129 } },
          { name: "Musa Sagnia", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.39, zScores: { pts: -1.214, reb: -1.07, ast: -0.849, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: 0, ftImpact: 0, to: 0.792 } },
          { name: "Solomon Davis", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.39, zScores: { pts: -1.214, reb: -1.07, ast: -0.849, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: 0, ftImpact: 0, to: 0.792 } },
          { name: "Ethan Copeland", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.16, zScores: { pts: -1.214, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: 0, to: 0.792 } },
          { name: "Tyler Johnson", min: 29, pts: 10, reb: 11, ast: 3, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 6, ftm: 1, fta: 2, composite: 5.94, zScores: { pts: 0.435, reb: 2.927, ast: 0.795, stl: 1.248, blk: -0.467, tpm: 0.167, fgImpact: 0.81, ftImpact: -0.768, to: 0.792 } },
          { name: "Butta Johnson", min: 24, pts: 9, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -0.29, zScores: { pts: 0.27, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: 1.878, fgImpact: 0.38, ftImpact: 0, to: -0.129 } }
        ]
      }
    },
      {
      id: "401906783",
      line: "Jacksonville Dolphins 62 @ Georgia Bulldogs 107 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "JAX", name: "Jacksonville Dolphins", score: 62,
        players: [

        ]
      },
      home: {
        abbr: "UGA", name: "Georgia Bulldogs", score: 107,
        players: [
          { name: "Kanon Catchings", min: 12, pts: 12, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 13, ftm: 5, fta: 5, composite: 0.17, zScores: { pts: 0.765, reb: 0.02, ast: -0.301, stl: 0.291, blk: -0.467, tpm: 0.167, fgImpact: -3.257, ftImpact: 2.164, to: 0.792 } },
          { name: "Kareem Stagg", min: 23, pts: 21, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 5, fgm: 6, fga: 11, ftm: 4, fta: 4, composite: 6.34, zScores: { pts: 2.25, reb: -0.344, ast: -0.849, stl: -0.666, blk: -0.467, tpm: 3.59, fgImpact: 0.306, ftImpact: 1.731, to: 0.792 } },
          { name: "James Scott", min: 20, pts: 2, reb: 4, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.99, zScores: { pts: -0.884, reb: 0.383, ast: -0.849, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: 0.43, ftImpact: 0, to: 0.792 } },
          { name: "Marcus Millender", min: 28, pts: 15, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 8, ftm: 2, fta: 2, composite: 5.3, zScores: { pts: 1.26, reb: 0.02, ast: 0.795, stl: 0.291, blk: -0.467, tpm: 1.878, fgImpact: 0.785, ftImpact: 0.865, to: -0.129 } },
          { name: "Blue Cain", min: 21, pts: 11, reb: 9, ast: 5, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 6, fta: 7, composite: 4.94, zScores: { pts: 0.6, reb: 2.2, ast: 1.89, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: -0.05, ftImpact: 1.396, to: -0.129 } },
          { name: "Hakeem Weems", min: 6, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.93, zScores: { pts: -0.72, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: -0.479, ftImpact: 0, to: 0.792 } },
          { name: "David Ugonna Ike", min: 10, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -4.63, zScores: { pts: -0.884, reb: 0.02, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.909, ftImpact: 0.865, to: -1.05 } },
          { name: "Mading Kuany", min: 11, pts: 5, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.48, zScores: { pts: -0.39, reb: -0.344, ast: -0.849, stl: -0.666, blk: 1.31, tpm: 0.167, fgImpact: -0.504, ftImpact: 0, to: 0.792 } },
          { name: "Andrew Osasuyi", min: 10, pts: 11, reb: 4, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 4, fga: 4, ftm: 3, fta: 4, composite: 4.48, zScores: { pts: 0.6, reb: 0.383, ast: -0.849, stl: -0.666, blk: 3.087, tpm: -0.689, fgImpact: 1.719, ftImpact: 0.097, to: 0.792 } },
          { name: "Brady Dunlap", min: 20, pts: 3, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.65, zScores: { pts: -0.72, reb: 0.02, ast: -0.301, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: -0.479, ftImpact: 0, to: 0.792 } },
          { name: "Kemauri Millender", min: 3, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 1, composite: -3.33, zScores: { pts: -0.884, reb: -0.344, ast: -0.301, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0.43, ftImpact: -1.201, to: 0.792 } },
          { name: "Donovan Williams Jr.", min: 14, pts: 5, reb: 5, ast: 3, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 3, composite: 3.67, zScores: { pts: -0.39, reb: 0.747, ast: 0.795, stl: 0.291, blk: 1.31, tpm: -0.689, fgImpact: -0.479, ftImpact: 1.298, to: 0.792 } },
          { name: "Freddie Dilione V", min: 19, pts: 10, reb: 4, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 8, ftm: 5, fta: 5, composite: 1.77, zScores: { pts: 0.435, reb: 0.383, ast: 0.795, stl: 0.291, blk: -0.467, tpm: 0.167, fgImpact: -1.868, ftImpact: 2.164, to: -0.129 } },
          { name: "Brandon Klatsky", min: 3, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -1.19, zScores: { pts: -0.39, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: 0.43, ftImpact: 0.865, to: 0.792 } }
        ]
      }
    },
      {
      id: "401927364",
      line: "Tarleton State Texans 83 @ Drake Bulldogs 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TAR", name: "Tarleton State Texans", score: 83,
        players: [

        ]
      },
      home: {
        abbr: "Drake", name: "Drake Bulldogs", score: 79,
        players: [
          { name: "Justin Burns", min: 10, pts: 2, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 2, composite: -5.27, zScores: { pts: -0.884, reb: -0.707, ast: 0.247, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0.43, ftImpact: -2.401, to: -0.129 } },
          { name: "Jon Carroll", min: 19, pts: 12, reb: 6, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 4, fta: 7, composite: -0.58, zScores: { pts: 0.765, reb: 1.11, ast: -0.849, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: 1.264, ftImpact: -1.871, to: -0.129 } },
          { name: "Dre Kindell", min: 37, pts: 17, reb: 5, ast: 5, stl: 3, blk: 0, to: 5, tpm: 3, fgm: 5, fga: 12, ftm: 4, fta: 6, composite: 2.32, zScores: { pts: 1.59, reb: 0.747, ast: 1.89, stl: 2.205, blk: -0.467, tpm: 1.878, fgImpact: -1.033, ftImpact: -0.671, to: -3.814 } },
          { name: "Owen Larson", min: 26, pts: 15, reb: 1, ast: 0, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 12, ftm: 4, fta: 4, composite: 0.17, zScores: { pts: 1.26, reb: -0.707, ast: -0.849, stl: 0.291, blk: -0.467, tpm: 1.878, fgImpact: -1.918, ftImpact: 1.731, to: -1.05 } },
          { name: "Andrew Alia", min: 36, pts: 7, reb: 12, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 10, ftm: 2, fta: 2, composite: 0.3, zScores: { pts: -0.06, reb: 3.29, ast: -0.849, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: -2.777, ftImpact: 0.865, to: 0.792 } },
          { name: "Gabe Oldham", min: 27, pts: 11, reb: 5, ast: 0, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 3, fta: 7, composite: -3.14, zScores: { pts: 0.6, reb: 0.747, ast: -0.849, stl: 1.248, blk: -0.467, tpm: -0.689, fgImpact: -0.099, ftImpact: -3.505, to: -0.129 } },
          { name: "Griffen Goodbary", min: 9, pts: 2, reb: 3, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 2, composite: -5.92, zScores: { pts: -0.884, reb: 0.02, ast: 0.247, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.025, ftImpact: -2.401, to: -1.05 } },
          { name: "Bryson Bahl", min: 12, pts: 13, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 5, fta: 6, composite: 1.58, zScores: { pts: 0.93, reb: -1.07, ast: -0.301, stl: -0.666, blk: -0.467, tpm: 1.022, fgImpact: 0.38, ftImpact: 0.963, to: 0.792 } },
          { name: "Dothan Ijadimbola", min: 8, pts: 0, reb: 2, ast: 3, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -0.33, zScores: { pts: -1.214, reb: -0.344, ast: 0.795, stl: 1.248, blk: -0.467, tpm: -0.689, fgImpact: -0.455, ftImpact: 0, to: 0.792 } },
          { name: "Eli Shetlar", min: 16, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 6, ftm: 0, fta: 0, composite: -5.25, zScores: { pts: -1.214, reb: 0.02, ast: -0.301, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -2.728, ftImpact: 0, to: 0.792 } }
        ]
      }
    },
      {
      id: "401928997",
      line: "Calumet St. Joseph Crimson Wave 35 @ Valparaiso Beacons 106 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CSJ", name: "Calumet St. Joseph Crimson Wave", score: 35,
        players: [

        ]
      },
      home: {
        abbr: "Valpa", name: "Valparaiso Beacons", score: 106,
        players: [
          { name: "Carter Hopoi", min: 18, pts: 1, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 1, fta: 2, composite: -4.54, zScores: { pts: -1.049, reb: 0.02, ast: -0.849, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: -1.818, ftImpact: -0.768, to: 0.792 } },
          { name: "JT Pettigrew", min: 24, pts: 28, reb: 11, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 8, fga: 14, ftm: 12, fta: 15, composite: 7.61, zScores: { pts: 3.404, reb: 2.927, ast: -0.849, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: 0.711, ftImpact: 1.59, to: -0.129 } },
          { name: "Rakim Chaney", min: 23, pts: 15, reb: 5, ast: 4, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 7, ftm: 3, fta: 3, composite: 7.53, zScores: { pts: 1.26, reb: 0.747, ast: 1.342, stl: 0.291, blk: -0.467, tpm: 1.022, fgImpact: 1.24, ftImpact: 1.298, to: 0.792 } },
          { name: "Justus McNair", min: 20, pts: 12, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 6, ftm: 2, fta: 4, composite: 0.48, zScores: { pts: 0.765, reb: 0.02, ast: -0.301, stl: 0.291, blk: -0.467, tpm: 1.022, fgImpact: 0.81, ftImpact: -1.536, to: -0.129 } },
          { name: "Bruno Alocen", min: 21, pts: 4, reb: 2, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 3, composite: -0.68, zScores: { pts: -0.555, reb: -0.344, ast: -0.301, stl: 1.248, blk: -0.467, tpm: -0.689, fgImpact: -0.025, ftImpact: -0.335, to: 0.792 } },
          { name: "Hudson Scroggins", min: 17, pts: 12, reb: 9, ast: 1, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 6, ftm: 4, fta: 4, composite: 6.02, zScores: { pts: 0.765, reb: 2.2, ast: -0.301, stl: 1.248, blk: 1.31, tpm: -0.689, fgImpact: 0.81, ftImpact: 1.731, to: -1.05 } },
          { name: "Kai Yu", min: 21, pts: 8, reb: 10, ast: 1, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 4, fta: 4, composite: 4.73, zScores: { pts: 0.105, reb: 2.563, ast: -0.301, stl: -0.666, blk: 3.087, tpm: -0.689, fgImpact: -0.05, ftImpact: 1.731, to: -1.05 } },
          { name: "Terron Garrett", min: 19, pts: 6, reb: 7, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: 2.19, zScores: { pts: -0.225, reb: 1.473, ast: -0.301, stl: 1.248, blk: -0.467, tpm: -0.689, fgImpact: -0.504, ftImpact: 0.865, to: 0.792 } },
          { name: "Dylan Moles", min: 13, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -3.44, zScores: { pts: -0.39, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: -0.959, ftImpact: 0, to: 0.792 } },
          { name: "Rajan Roberts", min: 21, pts: 12, reb: 0, ast: 0, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 12, ftm: 1, fta: 2, composite: -2.14, zScores: { pts: 0.765, reb: -1.07, ast: -0.849, stl: 1.248, blk: -0.467, tpm: 0.167, fgImpact: -1.033, ftImpact: -0.768, to: -0.129 } },
          { name: "Camden Webster", min: 2, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.38, zScores: { pts: -0.72, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: 0.43, ftImpact: 0, to: 0.792 } }
        ]
      }
    },
      {
      id: "401920735",
      line: "Columbia Lions 75 @ Northwestern Wildcats 53 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Colum", name: "Columbia Lions", score: 75,
        players: [
          { name: "Connor Igoe", min: 28, pts: 10, reb: 7, ast: 5, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: 1.2, zScores: { pts: 0.435, reb: 1.473, ast: 1.89, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: -0.579, ftImpact: 0, to: -1.971 } },
          { name: "Mason Ritter", min: 24, pts: 12, reb: 7, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 4, fta: 5, composite: 2.19, zScores: { pts: 0.765, reb: 1.473, ast: -0.301, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: -0.099, ftImpact: 0.53, to: -0.129 } },
          { name: "Michael Madueme", min: 20, pts: 0, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.66, zScores: { pts: -1.214, reb: -0.707, ast: 0.247, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: -0.909, ftImpact: 0, to: 0.792 } },
          { name: "Josh Pratt", min: 29, pts: 13, reb: 3, ast: 2, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 11, ftm: 2, fta: 4, composite: -0.23, zScores: { pts: 0.93, reb: 0.02, ast: 0.247, stl: 0.291, blk: -0.467, tpm: 1.878, fgImpact: -1.463, ftImpact: -1.536, to: -0.129 } },
          { name: "Gerard O'Keefe", min: 30, pts: 20, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 7, fga: 12, ftm: 4, fta: 5, composite: 4.11, zScores: { pts: 2.085, reb: 0.383, ast: -0.301, stl: -0.666, blk: -0.467, tpm: 1.022, fgImpact: 0.735, ftImpact: 0.53, to: 0.792 } },
          { name: "Douglas Langford", min: 25, pts: 3, reb: 7, ast: 3, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: 0.98, zScores: { pts: -0.72, reb: 1.473, ast: 0.795, stl: -0.666, blk: 3.087, tpm: -0.689, fgImpact: -0.479, ftImpact: -0.768, to: -1.05 } },
          { name: "Nigel Clarkson", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.16, zScores: { pts: -1.214, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: 0, to: 0.792 } },
          { name: "Trae Nunn", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.214, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.455, ftImpact: 0, to: 0.792 } },
          { name: "Gabe Hornberger", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.16, zScores: { pts: -1.214, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: 0, to: 0.792 } },
          { name: "Hampton Sanders", min: 21, pts: 8, reb: 6, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 3, fta: 4, composite: 2.39, zScores: { pts: 0.105, reb: 1.11, ast: 0.795, stl: 0.291, blk: -0.467, tpm: 0.167, fgImpact: -0.504, ftImpact: 0.097, to: 0.792 } },
          { name: "Josiah Cunningham", min: 16, pts: 9, reb: 3, ast: 1, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 3, fta: 4, composite: 2.67, zScores: { pts: 0.27, reb: 0.02, ast: -0.301, stl: 1.248, blk: 1.31, tpm: -0.689, fgImpact: -0.074, ftImpact: 0.097, to: 0.792 } }
        ]
      },
      home: {
        abbr: "NW", name: "Northwestern Wildcats", score: 53,
        players: [
          { name: "Okku Federiko", min: 29, pts: 2, reb: 9, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: 0.37, zScores: { pts: -0.884, reb: 2.2, ast: -0.301, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: -1.389, ftImpact: 0, to: 0.792 } },
          { name: "Jack Karasinski", min: 27, pts: 9, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 14, ftm: 2, fta: 2, composite: -5.23, zScores: { pts: 0.27, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: -3.711, ftImpact: 0.865, to: -0.129 } },
          { name: "Angelo Ciaravino", min: 28, pts: 14, reb: 6, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 6, fga: 12, ftm: 1, fta: 1, composite: 2.97, zScores: { pts: 1.095, reb: 1.11, ast: -0.301, stl: 0.291, blk: -0.467, tpm: 0.167, fgImpact: -0.149, ftImpact: 0.433, to: 0.792 } },
          { name: "Jake West", min: 34, pts: 9, reb: 2, ast: 4, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 12, ftm: 0, fta: 0, composite: -2.63, zScores: { pts: 0.27, reb: -0.344, ast: 1.342, stl: 0.291, blk: -0.467, tpm: 0.167, fgImpact: -1.918, ftImpact: 0, to: -1.971 } },
          { name: "LA Pratt", min: 32, pts: 7, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: -1.98, zScores: { pts: -0.06, reb: 0.02, ast: -0.301, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: 0.38, ftImpact: 0, to: -1.05 } },
          { name: "Colin Smith", min: 13, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.39, zScores: { pts: -0.72, reb: -0.344, ast: -0.301, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: -0.934, ftImpact: 0, to: -0.129 } },
          { name: "Symon Ghai", min: 11, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -3.53, zScores: { pts: -0.884, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: 0.865, to: -0.129 } },
          { name: "Aleksej Kostic", min: 13, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.86, zScores: { pts: -0.884, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -1.389, ftImpact: 0, to: 0.792 } },
          { name: "Phoenix Gill", min: 11, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 1, composite: -3.05, zScores: { pts: -0.39, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.504, ftImpact: 0.433, to: 0.792 } },
          { name: "Dylan Williams", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.62, zScores: { pts: -1.214, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.455, ftImpact: 0, to: 0.792 } }
        ]
      }
    },
      {
      id: "401917917",
      line: "Central Arkansas Bears 66 @ Oklahoma State Cowboys 99 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CARK", name: "Central Arkansas Bears", score: 66,
        players: [

        ]
      },
      home: {
        abbr: "OkSt", name: "Oklahoma State Cowboys", score: 99,
        players: [
          { name: "Benjamin Ahmed", min: 17, pts: 5, reb: 3, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 3, fta: 3, composite: -1.67, zScores: { pts: -0.39, reb: 0.02, ast: 0.247, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: -0.934, ftImpact: 1.298, to: -1.05 } },
          { name: "Jordan Burks", min: 19, pts: 20, reb: 1, ast: 0, stl: 2, blk: 0, to: 0, tpm: 6, fgm: 7, fga: 11, ftm: 0, fta: 0, composite: 7.74, zScores: { pts: 2.085, reb: -0.707, ast: -0.849, stl: 1.248, blk: -0.467, tpm: 4.446, fgImpact: 1.19, ftImpact: 0, to: 0.792 } },
          { name: "Anthony Felesi", min: 22, pts: 9, reb: 3, ast: 3, stl: 2, blk: 3, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 1, fta: 2, composite: 6.88, zScores: { pts: 0.27, reb: 0.02, ast: 0.795, stl: 1.248, blk: 4.865, tpm: -0.689, fgImpact: 1.264, ftImpact: -0.768, to: -0.129 } },
          { name: "Jacob Walker", min: 19, pts: 11, reb: 2, ast: 6, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 6, ftm: 0, fta: 0, composite: 3.29, zScores: { pts: 0.6, reb: -0.344, ast: 2.438, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: 1.694, ftImpact: 0, to: -0.129 } },
          { name: "Kashie Natt", min: 22, pts: 10, reb: 8, ast: 3, stl: 5, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 7.97, zScores: { pts: 0.435, reb: 1.837, ast: 0.795, stl: 4.118, blk: -0.467, tpm: 1.022, fgImpact: 0.355, ftImpact: 0, to: -0.129 } },
          { name: "Latrell Allmond", min: 17, pts: 5, reb: 9, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 5, composite: -1.99, zScores: { pts: -0.39, reb: 2.2, ast: -0.301, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: -0.479, ftImpact: -1.103, to: -1.05 } },
          { name: "Andrija Grbovic", min: 16, pts: 14, reb: 2, ast: 2, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 5, fga: 8, ftm: 2, fta: 2, composite: 3.27, zScores: { pts: 1.095, reb: -0.344, ast: 0.247, stl: -0.666, blk: 1.31, tpm: 1.022, fgImpact: 0.785, ftImpact: 0.865, to: -1.05 } },
          { name: "Julius Halaifonua", min: 14, pts: 7, reb: 4, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -1.63, zScores: { pts: -0.06, reb: 0.383, ast: -0.301, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: -0.504, ftImpact: 0.865, to: -1.05 } },
          { name: "Luka Bogavac", min: 9, pts: 3, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.16, zScores: { pts: -0.72, reb: -1.07, ast: -0.301, stl: 0.291, blk: -0.467, tpm: 0.167, fgImpact: -0.934, ftImpact: 0, to: -0.129 } },
          { name: "Ryan Crotty", min: 12, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.84, zScores: { pts: -0.72, reb: -1.07, ast: -0.301, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: 0.43, ftImpact: 0, to: 0.792 } },
          { name: "Parker Robinson", min: 20, pts: 9, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: -0.71, zScores: { pts: 0.27, reb: -1.07, ast: 0.247, stl: -0.666, blk: -0.467, tpm: 1.022, fgImpact: -0.074, ftImpact: -0.768, to: 0.792 } },
          { name: "Jalen Montonati", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.48, zScores: { pts: -1.214, reb: -0.707, ast: -0.849, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: -0.455, ftImpact: 0, to: 0.792 } },
          { name: "Kanye Clary", min: 9, pts: 3, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.2, zScores: { pts: -0.72, reb: -1.07, ast: 0.247, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: -0.479, ftImpact: 0, to: 0.792 } }
        ]
      }
    },
      {
      id: "401916307",
      line: "Western Illinois Leathernecks 63 @ Minnesota Golden Gophers 99 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WIU", name: "Western Illinois Leathernecks", score: 63,
        players: [

        ]
      },
      home: {
        abbr: "Minn", name: "Minnesota Golden Gophers", score: 99,
        players: [
          { name: "Grayson Grove", min: 23, pts: 8, reb: 3, ast: 3, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 4, fga: 4, ftm: 0, fta: 0, composite: 5.2, zScores: { pts: 0.105, reb: 0.02, ast: 0.795, stl: 0.291, blk: 3.087, tpm: -0.689, fgImpact: 1.719, ftImpact: 0, to: -0.129 } },
          { name: "Bobby Durkin", min: 24, pts: 8, reb: 2, ast: 6, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 5.49, zScores: { pts: 0.105, reb: -0.344, ast: 2.438, stl: -0.666, blk: 1.31, tpm: 1.022, fgImpact: 0.835, ftImpact: 0, to: 0.792 } },
          { name: "Jaylen Crocker-Johnson", min: 24, pts: 11, reb: 9, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 6, ftm: 1, fta: 1, composite: 5.52, zScores: { pts: 0.6, reb: 2.2, ast: 0.795, stl: -0.666, blk: -0.467, tpm: 1.022, fgImpact: 0.81, ftImpact: 0.433, to: 0.792 } },
          { name: "Isaac Asuma", min: 27, pts: 21, reb: 2, ast: 7, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 8, fga: 11, ftm: 2, fta: 2, composite: 10.23, zScores: { pts: 2.25, reb: -0.344, ast: 2.986, stl: -0.666, blk: 1.31, tpm: 1.878, fgImpact: 2.074, ftImpact: 0.865, to: -0.129 } },
          { name: "Kyan Evans", min: 31, pts: 16, reb: 3, ast: 10, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 8.81, zScores: { pts: 1.425, reb: 0.02, ast: 4.629, stl: 0.291, blk: -0.467, tpm: 2.734, fgImpact: 0.306, ftImpact: 0, to: -0.129 } },
          { name: "Nolen Anderson", min: 16, pts: 6, reb: 2, ast: 0, stl: 2, blk: 2, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 4.68, zScores: { pts: -0.225, reb: -0.344, ast: -0.849, stl: 1.248, blk: 3.087, tpm: 1.022, fgImpact: -0.05, ftImpact: 0, to: 0.792 } },
          { name: "Malick Kordel", min: 14, pts: 12, reb: 3, ast: 0, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 5, fga: 7, ftm: 2, fta: 6, composite: -4.78, zScores: { pts: 0.765, reb: 0.02, ast: -0.849, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: 1.24, ftImpact: -3.937, to: -1.971 } },
          { name: "Blake Nixon Jr.", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.09, zScores: { pts: -1.214, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: 0, to: -0.129 } },
          { name: "Max Lorenson", min: 1, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.4, zScores: { pts: -0.884, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0.43, ftImpact: 0, to: 0.792 } },
          { name: "Nolan Groves", min: 19, pts: 2, reb: 2, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.67, zScores: { pts: -0.884, reb: -0.344, ast: -0.301, stl: 1.248, blk: -0.467, tpm: -0.689, fgImpact: -0.025, ftImpact: 0, to: 0.792 } },
          { name: "Cedric Tomes", min: 6, pts: 3, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -3.88, zScores: { pts: -0.72, reb: -1.07, ast: -0.301, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: -0.025, ftImpact: -0.768, to: -0.129 } },
          { name: "Malachi Palmer", min: 11, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.46, zScores: { pts: -0.555, reb: 0.02, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.05, ftImpact: 0, to: 0.792 } },
          { name: "Winters Grady", min: 3, pts: 6, reb: 0, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 1.72, zScores: { pts: -0.225, reb: -1.07, ast: -0.301, stl: -0.666, blk: 1.31, tpm: 1.022, fgImpact: 0.86, ftImpact: 0, to: 0.792 } }
        ]
      }
    },
      {
      id: "401909798",
      line: "Montana Grizzlies 45 @ Kansas State Wildcats 86 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MONT", name: "Montana Grizzlies", score: 45,
        players: [

        ]
      },
      home: {
        abbr: "KSU", name: "Kansas State Wildcats", score: 86,
        players: [
          { name: "Timo Malovec", min: 22, pts: 12, reb: 3, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 4, fta: 6, composite: -0.14, zScores: { pts: 0.765, reb: 0.02, ast: 1.342, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0.355, ftImpact: -0.671, to: -0.129 } },
          { name: "Brock Vice", min: 16, pts: 10, reb: 10, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 5, ftm: 0, fta: 0, composite: 3.27, zScores: { pts: 0.435, reb: 2.563, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 2.149, ftImpact: 0, to: 0.792 } },
          { name: "Isaiah Abraham", min: 22, pts: 16, reb: 3, ast: 0, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 11, ftm: 0, fta: 0, composite: 3.46, zScores: { pts: 1.425, reb: 0.02, ast: -0.849, stl: 1.248, blk: -0.467, tpm: 1.022, fgImpact: 1.19, ftImpact: 0, to: -0.129 } },
          { name: "Brandon Rechsteiner", min: 24, pts: 10, reb: 4, ast: 5, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 4.18, zScores: { pts: 0.435, reb: 0.383, ast: 1.89, stl: -0.666, blk: -0.467, tpm: 1.022, fgImpact: -0.074, ftImpact: 0.865, to: 0.792 } },
          { name: "Jaden Schutt", min: 23, pts: 5, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 2, fta: 4, composite: -4.05, zScores: { pts: -0.39, reb: -0.344, ast: 0.247, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: -0.934, ftImpact: -1.536, to: -0.129 } },
          { name: "Nash Stark", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.26, zScores: { pts: -1.214, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.455, ftImpact: 0, to: 0.792 } },
          { name: "Devin Hutcherson", min: 5, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.68, zScores: { pts: -0.884, reb: -0.344, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0.43, ftImpact: 0, to: 0.792 } },
          { name: "Dez Lindsay", min: 17, pts: 10, reb: 3, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 2.67, zScores: { pts: 0.435, reb: 0.02, ast: 0.247, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: 0.355, ftImpact: 0.865, to: 0.792 } },
          { name: "Pape N'Diaye", min: 12, pts: 4, reb: 5, ast: 1, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 4.23, zScores: { pts: -0.555, reb: 0.747, ast: -0.301, stl: 0.291, blk: 3.087, tpm: -0.689, fgImpact: 0.86, ftImpact: 0, to: 0.792 } },
          { name: "JT Rock", min: 10, pts: 2, reb: 2, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.82, zScores: { pts: -0.884, reb: -0.344, ast: -0.849, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: 0.43, ftImpact: 0, to: -0.129 } },
          { name: "Jaylen Alexander", min: 21, pts: 9, reb: 3, ast: 3, stl: 5, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 8, ftm: 1, fta: 1, composite: 3.33, zScores: { pts: 0.27, reb: 0.02, ast: 0.795, stl: 4.118, blk: -0.467, tpm: -0.689, fgImpact: -0.099, ftImpact: 0.433, to: -1.05 } },
          { name: "Andrej Kostic", min: 11, pts: 6, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.27, zScores: { pts: -0.225, reb: -0.344, ast: -0.301, stl: 0.291, blk: -0.467, tpm: 1.022, fgImpact: -0.504, ftImpact: 0, to: 0.792 } },
          { name: "Montana Wheeler", min: 15, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.45, zScores: { pts: -1.214, reb: -1.07, ast: -0.301, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.909, ftImpact: 0, to: -0.129 } }
        ]
      }
    },
      {
      id: "401920808",
      line: "SE Louisiana Lions 69 @ Texas A&M Aggies 101 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SELA", name: "SE Louisiana Lions", score: 69,
        players: [

        ]
      },
      home: {
        abbr: "TAMU", name: "Texas A&M Aggies", score: 101,
        players: [
          { name: "Jalen Shelley", min: 26, pts: 18, reb: 6, ast: 5, stl: 1, blk: 1, to: 0, tpm: 4, fgm: 7, fga: 10, ftm: 0, fta: 0, composite: 11.53, zScores: { pts: 1.755, reb: 1.11, ast: 1.89, stl: 0.291, blk: 1.31, tpm: 2.734, fgImpact: 1.645, ftImpact: 0, to: 0.792 } },
          { name: "Mackenzie Mgbako", min: 28, pts: 17, reb: 7, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 7, fga: 13, ftm: 1, fta: 2, composite: 3.54, zScores: { pts: 1.59, reb: 1.473, ast: 0.247, stl: 0.291, blk: -0.467, tpm: 1.022, fgImpact: 0.281, ftImpact: -0.768, to: -0.129 } },
          { name: "Zach Clemence", min: 19, pts: 2, reb: 1, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.08, zScores: { pts: -0.884, reb: -0.707, ast: 0.247, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: -0.479, ftImpact: 0, to: 0.792 } },
          { name: "PJ Haggerty", min: 25, pts: 19, reb: 4, ast: 2, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 6, fga: 10, ftm: 7, fta: 7, composite: 4.46, zScores: { pts: 1.92, reb: 0.383, ast: 0.247, stl: 1.248, blk: -0.467, tpm: -0.689, fgImpact: 0.76, ftImpact: 3.029, to: -1.971 } },
          { name: "Jordan Pope", min: 21, pts: 9, reb: 0, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 3, ftm: 2, fta: 2, composite: 1.97, zScores: { pts: 0.27, reb: -1.07, ast: 0.795, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: 1.289, ftImpact: 0.865, to: 0.792 } },
          { name: "Josh Irving", min: 15, pts: 2, reb: 2, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -0.5, zScores: { pts: -0.884, reb: -0.344, ast: -0.849, stl: -0.666, blk: 3.087, tpm: -0.689, fgImpact: -0.025, ftImpact: 0, to: -0.129 } },
          { name: "Jamie Vinson", min: 5, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.42, zScores: { pts: -0.884, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.025, ftImpact: 0, to: -0.129 } },
          { name: "Chris McDermott", min: 1, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.89, zScores: { pts: -1.214, reb: -0.344, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.455, ftImpact: 0, to: 0.792 } },
          { name: "Neiko Mundey", min: 8, pts: 11, reb: 1, ast: 1, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 6, ftm: 2, fta: 2, composite: 2.09, zScores: { pts: 0.6, reb: -0.707, ast: -0.301, stl: 1.248, blk: -0.467, tpm: 0.167, fgImpact: 0.81, ftImpact: 0.865, to: -0.129 } },
          { name: "Lukas Walls", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.8, zScores: { pts: -1.214, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: 0, to: 0.792 } },
          { name: "Tyshawn Archie", min: 13, pts: 5, reb: 2, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 5, composite: -2, zScores: { pts: -0.39, reb: -0.344, ast: 1.342, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.479, ftImpact: -1.103, to: 0.792 } },
          { name: "Jalen Reece", min: 14, pts: 2, reb: 3, ast: 4, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.05, zScores: { pts: -0.884, reb: 0.02, ast: 1.342, stl: 1.248, blk: -0.467, tpm: -0.689, fgImpact: 0.43, ftImpact: 0, to: -1.05 } },
          { name: "Jeremiah Green", min: 2, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -3.62, zScores: { pts: -0.884, reb: -0.344, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.455, ftImpact: 0.865, to: -0.129 } },
          { name: "Rylan Griffen", min: 21, pts: 12, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 4, ftm: 1, fta: 1, composite: 1.06, zScores: { pts: 0.765, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: 1.878, fgImpact: 1.719, ftImpact: 0.433, to: -1.05 } }
        ]
      }
    },
      {
      id: "401929192",
      line: "East Texas A&M Lions 71 @ Oregon State Beavers 109 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ETAM", name: "East Texas A&M Lions", score: 71,
        players: [

        ]
      },
      home: {
        abbr: "OrSt", name: "Oregon State Beavers", score: 109,
        players: [
          { name: "DeShawn Gory", min: 27, pts: 17, reb: 7, ast: 6, stl: 3, blk: 0, to: 3, tpm: 3, fgm: 5, fga: 8, ftm: 4, fta: 4, composite: 9.66, zScores: { pts: 1.59, reb: 1.473, ast: 2.438, stl: 2.205, blk: -0.467, tpm: 1.878, fgImpact: 0.785, ftImpact: 1.731, to: -1.971 } },
          { name: "Xavion Staton", min: 22, pts: 6, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 0.53, zScores: { pts: -0.225, reb: 0.02, ast: -0.849, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: 0.835, ftImpact: 0, to: 0.792 } },
          { name: "Dennis Evans", min: 10, pts: 4, reb: 5, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: 1.42, zScores: { pts: -0.555, reb: 0.747, ast: -0.849, stl: 0.291, blk: 1.31, tpm: -0.689, fgImpact: 0.43, ftImpact: 0.865, to: -0.129 } },
          { name: "Josiah Lake II", min: 24, pts: 18, reb: 4, ast: 4, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 10, ftm: 8, fta: 8, composite: 7.61, zScores: { pts: 1.755, reb: 0.383, ast: 1.342, stl: 1.248, blk: -0.467, tpm: 1.022, fgImpact: -1.008, ftImpact: 3.462, to: -0.129 } },
          { name: "Daniel Freitag", min: 24, pts: 23, reb: 2, ast: 2, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 7, fga: 9, ftm: 8, fta: 9, composite: 4.86, zScores: { pts: 2.58, reb: -0.344, ast: 0.247, stl: 0.291, blk: -0.467, tpm: 0.167, fgImpact: 2.099, ftImpact: 2.261, to: -1.971 } },
          { name: "Kahu Treacher", min: 7, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -1.62, zScores: { pts: -0.39, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: 0.86, ftImpact: 0, to: 0.792 } },
          { name: "Peteris Pinnis", min: 13, pts: 6, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: 1.78, zScores: { pts: -0.225, reb: 0.383, ast: -0.849, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: 0.86, ftImpact: 0.865, to: 0.792 } },
          { name: "Jackson Rasmussen", min: 14, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.44, zScores: { pts: -1.214, reb: 0.02, ast: -0.301, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.909, ftImpact: 0, to: 0.792 } },
          { name: "Yabi Aklog", min: 8, pts: 4, reb: 7, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -2.39, zScores: { pts: -0.555, reb: 1.473, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.504, ftImpact: 0, to: -0.129 } },
          { name: "Jemai Lake", min: 11, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 3, fta: 4, composite: -4.19, zScores: { pts: -0.39, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.025, ftImpact: 0.097, to: -0.129 } },
          { name: "Chris Johnson", min: 19, pts: 7, reb: 0, ast: 4, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 0.92, zScores: { pts: -0.06, reb: -1.07, ast: 1.342, stl: 0.291, blk: -0.467, tpm: 0.167, fgImpact: -0.074, ftImpact: 0, to: 0.792 } },
          { name: "Legend Smiley", min: 21, pts: 14, reb: 2, ast: 4, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 4, fga: 7, ftm: 3, fta: 4, composite: 6.82, zScores: { pts: 1.095, reb: -0.344, ast: 1.342, stl: 0.291, blk: 1.31, tpm: 1.878, fgImpact: 0.355, ftImpact: 0.097, to: 0.792 } }
        ]
      }
    },
      {
      id: "401926228",
      line: "Colorado Colorado Springs Mountain Lions 63 @ Denver Pioneers 101 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UCCS", name: "Colorado Colorado Springs Mountain Lions", score: 63,
        players: [

        ]
      },
      home: {
        abbr: "Denv", name: "Denver Pioneers", score: 101,
        players: [
          { name: "Oskar Stumer", min: 21, pts: 4, reb: 5, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 1, composite: -1.9, zScores: { pts: -0.555, reb: 0.747, ast: -0.301, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: 0.405, ftImpact: -1.201, to: -0.129 } },
          { name: "Charlie Dimmock", min: 12, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.74, zScores: { pts: -0.555, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0.405, ftImpact: 0, to: 0.792 } },
          { name: "Shaun Wysocki", min: 27, pts: 19, reb: 6, ast: 2, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 8, fga: 11, ftm: 3, fta: 4, composite: 7.09, zScores: { pts: 1.92, reb: 1.11, ast: 0.247, stl: 0.291, blk: 3.087, tpm: -0.689, fgImpact: 2.074, ftImpact: 0.097, to: -1.05 } },
          { name: "Carson Johnson", min: 23, pts: 22, reb: 1, ast: 6, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 8, fga: 11, ftm: 3, fta: 4, composite: 7.85, zScores: { pts: 2.415, reb: -0.707, ast: 2.438, stl: -0.666, blk: -0.467, tpm: 1.878, fgImpact: 2.074, ftImpact: 0.097, to: 0.792 } },
          { name: "Kam Martin", min: 22, pts: 17, reb: 6, ast: 3, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 7, ftm: 1, fta: 2, composite: 8.24, zScores: { pts: 1.59, reb: 1.11, ast: 0.795, stl: 1.248, blk: -0.467, tpm: 2.734, fgImpact: 2.124, ftImpact: -0.768, to: -0.129 } },
          { name: "Harry Bates", min: 18, pts: 10, reb: 5, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 4, fta: 4, composite: 4.29, zScores: { pts: 0.435, reb: 0.747, ast: 0.247, stl: -0.666, blk: 1.31, tpm: -0.689, fgImpact: 0.38, ftImpact: 1.731, to: 0.792 } },
          { name: "Jordan Rogers", min: 14, pts: 0, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.48, zScores: { pts: -1.214, reb: 0.02, ast: -0.301, stl: 0.291, blk: -0.467, tpm: -0.689, fgImpact: -0.909, ftImpact: 0, to: 0.792 } },
          { name: "Baba Mbengue", min: 10, pts: 4, reb: 3, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 1.17, zScores: { pts: -0.555, reb: 0.02, ast: -0.301, stl: -0.666, blk: 3.087, tpm: -0.689, fgImpact: 0.405, ftImpact: 0, to: -0.129 } },
          { name: "Will Kirsch", min: 6, pts: 6, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.96, zScores: { pts: -0.225, reb: -1.07, ast: -0.301, stl: -0.666, blk: -0.467, tpm: 1.022, fgImpact: -0.05, ftImpact: 0, to: 0.792 } },
          { name: "Trey Cady", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.18, zScores: { pts: -1.214, reb: -0.707, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.455, ftImpact: 0, to: -0.129 } },
          { name: "Jaelen Nelson", min: 9, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -0.884, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.025, ftImpact: 0, to: 0.792 } },
          { name: "CJ Hyland", min: 13, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -3.12, zScores: { pts: -0.555, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.479, ftImpact: 0.865, to: 0.792 } },
          { name: "Logan Threatt", min: 21, pts: 9, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 0.32, zScores: { pts: 0.27, reb: -0.344, ast: 0.247, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: 0.38, ftImpact: 0.865, to: -0.129 } }
        ]
      }
    },
      {
      id: "401920373",
      line: "Texas Southern Tigers 92 @ UC San Diego Tritons 97 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TXSO", name: "Texas Southern Tigers", score: 92,
        players: [

        ]
      },
      home: {
        abbr: "UCSD", name: "UC San Diego Tritons", score: 97,
        players: [
          { name: "Olavi Suutela", min: 31, pts: 20, reb: 13, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 17, ftm: 6, fta: 9, composite: 1.49, zScores: { pts: 2.085, reb: 3.653, ast: 0.247, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -1.537, ftImpact: -1.006, to: -0.129 } },
          { name: "Leo Beath", min: 30, pts: 10, reb: 4, ast: 2, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 10, ftm: 2, fta: 2, composite: 0.92, zScores: { pts: 0.435, reb: 0.383, ast: 0.247, stl: 2.205, blk: -0.467, tpm: -0.689, fgImpact: -1.008, ftImpact: 0.865, to: -1.05 } },
          { name: "Tom Beattie", min: 27, pts: 9, reb: 3, ast: 4, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 8, ftm: 0, fta: 2, composite: -0.22, zScores: { pts: 0.27, reb: 0.02, ast: 1.342, stl: -0.666, blk: -0.467, tpm: 1.878, fgImpact: -0.984, ftImpact: -2.401, to: 0.792 } },
          { name: "Treysen Eaglestaff", min: 22, pts: 15, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 11, ftm: 7, fta: 10, composite: -1.18, zScores: { pts: 1.26, reb: 0.383, ast: 0.247, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -1.463, ftImpact: -0.573, to: 0.792 } },
          { name: "Rahmir Barno", min: 32, pts: 19, reb: 5, ast: 3, stl: 5, blk: 0, to: 1, tpm: 0, fgm: 9, fga: 9, ftm: 1, fta: 5, composite: 5.79, zScores: { pts: 1.92, reb: 0.747, ast: 0.795, stl: 4.118, blk: -0.467, tpm: -0.689, fgImpact: 3.868, ftImpact: -4.37, to: -0.129 } },
          { name: "Jake Holmes", min: 9, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.86, zScores: { pts: -0.884, reb: -1.07, ast: -0.301, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0.43, ftImpact: 0, to: 0.792 } },
          { name: "Dimitrije Vukicevic", min: 5, pts: 1, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.04, zScores: { pts: -1.049, reb: -0.344, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: -0.768, to: 0.792 } },
          { name: "Jordan Johnson", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 1, composite: -4.6, zScores: { pts: -0.884, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0.43, ftImpact: -1.201, to: 0.792 } },
          { name: "Alex Chaikin", min: 22, pts: 13, reb: 3, ast: 4, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: 2.75, zScores: { pts: 0.93, reb: 0.02, ast: 1.342, stl: -0.666, blk: -0.467, tpm: 1.878, fgImpact: -0.099, ftImpact: 0.865, to: -1.05 } },
          { name: "Kayde Dotson", min: 5, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 3, fta: 4, composite: -6.32, zScores: { pts: -0.72, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.909, ftImpact: 0.097, to: -1.05 } },
          { name: "Aidan Burke", min: 14, pts: 3, reb: 3, ast: 3, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -1.42, zScores: { pts: -0.72, reb: 0.02, ast: 0.795, stl: 0.291, blk: -0.467, tpm: 0.167, fgImpact: -2.298, ftImpact: 0, to: 0.792 } }
        ]
      }
    },
      {
      id: "401917532",
      line: "Portland State Vikings 78 @ Saint Mary's Gaels 94 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PRST", name: "Portland State Vikings", score: 78,
        players: [

        ]
      },
      home: {
        abbr: "StMar", name: "Saint Mary's Gaels", score: 94,
        players: [
          { name: "Vangelis Zougris", min: 32, pts: 20, reb: 4, ast: 3, stl: 3, blk: 1, to: 0, tpm: 0, fgm: 9, fga: 11, ftm: 2, fta: 3, composite: 9.5, zScores: { pts: 2.085, reb: 0.383, ast: 0.795, stl: 2.205, blk: 1.31, tpm: -0.689, fgImpact: 2.959, ftImpact: -0.335, to: 0.792 } },
          { name: "Jazz Gardner", min: 17, pts: 4, reb: 6, ast: 3, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 1, composite: -2.77, zScores: { pts: -0.555, reb: 1.11, ast: 0.795, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.05, ftImpact: -1.201, to: -1.05 } },
          { name: "Mantas Juzenas", min: 37, pts: 32, reb: 8, ast: 2, stl: 2, blk: 0, to: 3, tpm: 7, fgm: 11, fga: 20, ftm: 3, fta: 4, composite: 10.99, zScores: { pts: 4.064, reb: 1.837, ast: 0.247, stl: 1.248, blk: -0.467, tpm: 5.302, fgImpact: 0.636, ftImpact: 0.097, to: -1.971 } },
          { name: "Joshua Dent", min: 37, pts: 15, reb: 3, ast: 7, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 9, ftm: 8, fta: 10, composite: 1.87, zScores: { pts: 1.26, reb: 0.02, ast: 2.986, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: -1.438, ftImpact: 1.06, to: -1.05 } },
          { name: "Rory Hawke", min: 13, pts: 4, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -1.2, zScores: { pts: -0.555, reb: -0.707, ast: 0.247, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.025, ftImpact: 0.865, to: 0.792 } },
          { name: "Trent MacLean", min: 1, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.38, zScores: { pts: -0.72, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: 0.167, fgImpact: 0.43, ftImpact: 0, to: 0.792 } },
          { name: "Thomas Ndong", min: 6, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.58, zScores: { pts: -0.884, reb: -0.344, ast: -0.301, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.025, ftImpact: 0, to: 0.792 } },
          { name: "Kevin Gad", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.16, zScores: { pts: -1.214, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: 0, to: 0.792 } },
          { name: "Flynn Pavely", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.16, zScores: { pts: -1.214, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: 0, to: 0.792 } },
          { name: "Cooper Lewis", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.16, zScores: { pts: -1.214, reb: -1.07, ast: -0.849, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: 0, ftImpact: 0, to: 0.792 } },
          { name: "Luke Fennell", min: 1, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.53, zScores: { pts: -1.214, reb: -1.07, ast: -0.301, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -0.909, ftImpact: 0, to: 0.792 } },
          { name: "Darius Bivins", min: 30, pts: 14, reb: 2, ast: 4, stl: 4, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 11, ftm: 2, fta: 2, composite: 4.13, zScores: { pts: 1.095, reb: -0.344, ast: 1.342, stl: 3.161, blk: -0.467, tpm: 1.022, fgImpact: -0.579, ftImpact: 0.865, to: -1.971 } },
          { name: "Jeremy Dent-Smith", min: 23, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.214, reb: -0.344, ast: -0.301, stl: -0.666, blk: -0.467, tpm: -0.689, fgImpact: -1.364, ftImpact: 0, to: 0.792 } }
        ]
      }
    }
    ]
  },
    "2026-11-17": {
    games: [
      {
      id: "401906773",
      line: "Notre Dame Fighting Irish 78 @ Florida Gators 86 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ND", name: "Notre Dame Fighting Irish", score: 78,
        players: [
          { name: "Brady Koehler", min: 32, pts: 17, reb: 5, ast: 0, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 6, fga: 14, ftm: 2, fta: 4, composite: 2, zScores: { pts: 1.403, reb: 0.648, ast: -0.738, stl: -0.706, blk: 0.951, tpm: 2.028, fgImpact: -0.366, ftImpact: -1.207, to: -0.016 } },
          { name: "Logan Duncomb", min: 17, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3.68, zScores: { pts: -0.501, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.503, ftImpact: 0, to: -0.016 } },
          { name: "Ethan Roberts", min: 26, pts: 10, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 6, fta: 6, composite: -0.15, zScores: { pts: 0.378, reb: -0.396, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -0.622, ftImpact: 1.983, to: -0.016 } },
          { name: "Braeden Smith", min: 26, pts: 4, reb: 3, ast: 5, stl: 2, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -2.29, zScores: { pts: -0.501, reb: -0.048, ast: 1.894, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: -1.372, ftImpact: 0, to: -2.616 } },
          { name: "Braeden Shrewsberry", min: 33, pts: 20, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 5, fgm: 7, fga: 10, ftm: 1, fta: 1, composite: 8.01, zScores: { pts: 1.842, reb: 0.648, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 3.804, fgImpact: 1.948, ftImpact: 0.33, to: 0.851 } },
          { name: "Bryce Ruglass Dortch", min: 16, pts: 2, reb: 4, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: 0.41, zScores: { pts: -0.794, reb: 0.3, ast: -0.738, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: 0.439, ftImpact: 0, to: 0.851 } },
          { name: "Yoro Diallo", min: 10, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.33, zScores: { pts: -1.087, reb: -0.744, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: -0.016 } },
          { name: "Jonathan Sanderson", min: 21, pts: 14, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 9, ftm: 5, fta: 5, composite: 2.71, zScores: { pts: 0.963, reb: -1.092, ast: 0.315, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: -0.119, ftImpact: 1.652, to: 0.851 } },
          { name: "Logan Imes", min: 19, pts: 7, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 2, ftm: 2, fta: 3, composite: -0.63, zScores: { pts: -0.062, reb: -1.092, ast: -0.212, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: 0.878, ftImpact: -0.273, to: -0.016 } }
        ]
      },
      home: {
        abbr: "Fla", name: "Florida Gators", score: 86,
        players: [
          { name: "Alex Condon", min: 33, pts: 19, reb: 10, ast: 5, stl: 1, blk: 1, to: 4, tpm: 1, fgm: 8, fga: 15, ftm: 2, fta: 5, composite: 3.7, zScores: { pts: 1.696, reb: 2.388, ast: 1.894, stl: 0.386, blk: 0.951, tpm: 0.253, fgImpact: 0.887, ftImpact: -2.14, to: -2.616 } },
          { name: "Thomas Haugh", min: 36, pts: 14, reb: 9, ast: 4, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 5, fga: 8, ftm: 3, fta: 3, composite: 6.05, zScores: { pts: 0.963, reb: 2.04, ast: 1.368, stl: -0.706, blk: 0.951, tpm: 0.253, fgImpact: 1.07, ftImpact: 0.991, to: -0.883 } },
          { name: "Rueben Chinyelu", min: 21, pts: 6, reb: 3, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 3, composite: -5.72, zScores: { pts: -0.208, reb: -0.048, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.567, ftImpact: -2.801, to: -1.749 } },
          { name: "Boogie Fland", min: 8, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -6.11, zScores: { pts: -1.087, reb: -1.092, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: -1.868, to: -0.016 } },
          { name: "Denzel Aberdeen", min: 30, pts: 13, reb: 5, ast: 3, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 4, fga: 7, ftm: 3, fta: 4, composite: 5.23, zScores: { pts: 0.817, reb: 0.648, ast: 0.841, stl: -0.706, blk: 0.951, tpm: 1.14, fgImpact: 0.631, ftImpact: 0.058, to: 0.851 } },
          { name: "Domen Petrovic", min: 9, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.99, zScores: { pts: -0.794, reb: -0.048, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.439, ftImpact: 0, to: -0.016 } },
          { name: "Urban Klavzar", min: 31, pts: 24, reb: 1, ast: 1, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 11, ftm: 11, fta: 11, composite: 6.09, zScores: { pts: 2.428, reb: -0.744, ast: -0.212, stl: 0.386, blk: -0.493, tpm: 2.028, fgImpact: -0.055, ftImpact: 3.635, to: -0.883 } },
          { name: "Isaiah Brown", min: 21, pts: 5, reb: 3, ast: 1, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 1.58, zScores: { pts: -0.354, reb: -0.048, ast: -0.212, stl: 0.386, blk: 0.951, tpm: 0.253, fgImpact: -0.247, ftImpact: 0, to: 0.851 } },
          { name: "Alex Lloyd", min: 11, pts: 3, reb: 0, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 1, composite: -3.26, zScores: { pts: -0.647, reb: -1.092, ast: 0.315, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.311, ftImpact: 0.33, to: -0.016 } }
        ]
      }
    },
      {
      id: "401906851",
      line: "Michigan State Spartans 46 @ Tennessee Volunteers 61 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MSU", name: "Michigan State Spartans", score: 46,
        players: [
          { name: "Jesse McCulloch", min: 19, pts: 0, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -3.78, zScores: { pts: -1.087, reb: 0.3, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -1.5, ftImpact: 0, to: -0.016 } },
          { name: "Jordan Scott", min: 21, pts: 6, reb: 1, ast: 1, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 1.07, zScores: { pts: -0.208, reb: -0.744, ast: -0.212, stl: 1.478, blk: -0.493, tpm: 1.14, fgImpact: 0.128, ftImpact: 0, to: -0.016 } },
          { name: "Coen Carr", min: 23, pts: 3, reb: 2, ast: 0, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 1, fga: 7, ftm: 0, fta: 0, composite: -0.8, zScores: { pts: -0.647, reb: -0.396, ast: -0.738, stl: -0.706, blk: 2.395, tpm: 0.253, fgImpact: -1.811, ftImpact: 0, to: 0.851 } },
          { name: "Jasiah Jervis", min: 26, pts: 1, reb: 3, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 10, ftm: 1, fta: 2, composite: -5.96, zScores: { pts: -0.94, reb: -0.048, ast: -0.212, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: -3.75, ftImpact: -0.603, to: -0.016 } },
          { name: "Jeremy Fears Jr.", min: 32, pts: 16, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 16, fta: 18, composite: 1.84, zScores: { pts: 1.256, reb: -0.396, ast: 0.315, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -1.125, ftImpact: 3.419, to: -0.883 } },
          { name: "Cam Ward", min: 26, pts: 12, reb: 5, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 4, fta: 6, composite: 1.87, zScores: { pts: 0.671, reb: 0.648, ast: -0.738, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: 0.631, ftImpact: -0.546, to: 0.851 } },
          { name: "Kaleb Glenn", min: 16, pts: 3, reb: 8, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 5, ftm: 3, fta: 4, composite: -3.36, zScores: { pts: -0.647, reb: 1.692, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -1.875, ftImpact: 0.058, to: -0.016 } },
          { name: "Anton Bonke", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.2, zScores: { pts: -0.794, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.064, ftImpact: 0, to: 0.851 } },
          { name: "Ethan Taylor", min: 13, pts: 0, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.54, zScores: { pts: -1.087, reb: 0.648, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: 0.851 } },
          { name: "Carlos Medlock Jr.", min: 8, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.85, zScores: { pts: -0.647, reb: -1.092, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.064, ftImpact: 0, to: -0.016 } },
          { name: "Kur Teng", min: 9, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -5.78, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -1.875, ftImpact: 0, to: 0.851 } }
        ]
      },
      home: {
        abbr: "Tenn", name: "Tennessee Volunteers", score: 61,
        players: [
          { name: "DeWayne Brown II", min: 24, pts: 14, reb: 7, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 6, fga: 6, ftm: 2, fta: 3, composite: 3.66, zScores: { pts: 0.963, reb: 1.344, ast: 0.841, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 2.634, ftImpact: -0.273, to: -0.016 } },
          { name: "Miles Rubin", min: 28, pts: 14, reb: 8, ast: 0, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 6, fga: 8, ftm: 2, fta: 2, composite: 6.08, zScores: { pts: 0.963, reb: 1.692, ast: -0.738, stl: -0.706, blk: 3.839, tpm: -0.635, fgImpact: 1.884, ftImpact: 0.661, to: -0.883 } },
          { name: "Jalen Haralson", min: 25, pts: 0, reb: 3, ast: 3, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -0.62, zScores: { pts: -1.087, reb: -0.048, ast: 0.841, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: -1.875, ftImpact: 0, to: 0.851 } },
          { name: "Juke Harris", min: 23, pts: 8, reb: 5, ast: 4, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 8, ftm: 2, fta: 4, composite: -0.33, zScores: { pts: 0.085, reb: 0.648, ast: 1.368, stl: 0.386, blk: -0.493, tpm: 1.14, fgImpact: -1.372, ftImpact: -1.207, to: -0.883 } },
          { name: "Terrence Hill Jr.", min: 25, pts: 8, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: -1.18, zScores: { pts: 0.085, reb: -0.048, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 1.14, fgImpact: -0.933, ftImpact: 0, to: -0.016 } },
          { name: "Braedan Lue", min: 22, pts: 2, reb: 4, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 1, composite: -1.13, zScores: { pts: -0.794, reb: 0.3, ast: 0.841, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.439, ftImpact: -0.934, to: 0.851 } },
          { name: "Christian Fermin", min: 6, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.11, zScores: { pts: -1.087, reb: -0.396, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Troy Henderson", min: 10, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.03, zScores: { pts: -0.647, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.064, ftImpact: 0, to: -0.016 } },
          { name: "Dai Dai Ames", min: 16, pts: 7, reb: 1, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: -2.68, zScores: { pts: -0.062, reb: -0.744, ast: -0.212, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.567, ftImpact: -0.603, to: -0.883 } },
          { name: "Tyler Lundblade", min: 21, pts: 5, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: -1.13, zScores: { pts: -0.354, reb: -0.744, ast: 0.841, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -1.436, ftImpact: 0.661, to: 0.851 } }
        ]
      }
    },
      {
      id: "401920426",
      line: "Old Dominion Monarchs 65 @ Virginia Cavaliers 85 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ODU", name: "Old Dominion Monarchs", score: 65,
        players: [

        ]
      },
      home: {
        abbr: "UVA", name: "Virginia Cavaliers", score: 85,
        players: [
          { name: "Nolan Adekunle", min: 25, pts: 8, reb: 4, ast: 3, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 2.55, zScores: { pts: 0.085, reb: 0.3, ast: 0.841, stl: 0.386, blk: -0.493, tpm: 1.14, fgImpact: -0.558, ftImpact: 0, to: 0.851 } },
          { name: "Thijs De Ridder", min: 31, pts: 20, reb: 10, ast: 2, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 9, ftm: 6, fta: 10, composite: 5.19, zScores: { pts: 1.842, reb: 2.388, ast: 0.315, stl: -0.706, blk: -0.493, tpm: 2.916, fgImpact: 0.695, ftImpact: -1.752, to: -0.016 } },
          { name: "Johann Grunloh", min: 33, pts: 7, reb: 10, ast: 3, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 3, fga: 8, ftm: 1, fta: 6, composite: 1.62, zScores: { pts: -0.062, reb: 2.388, ast: 0.841, stl: -0.706, blk: 3.839, tpm: -0.635, fgImpact: -0.558, ftImpact: -4.338, to: 0.851 } },
          { name: "Sam Lewis", min: 26, pts: 13, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 10, ftm: 3, fta: 4, composite: 0.44, zScores: { pts: 0.817, reb: -0.744, ast: -0.212, stl: 0.386, blk: -0.493, tpm: 1.14, fgImpact: -0.494, ftImpact: 0.058, to: -0.016 } },
          { name: "Chance Mallory", min: 31, pts: 13, reb: 7, ast: 6, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 12, ftm: 2, fta: 3, composite: 4.01, zScores: { pts: 0.817, reb: 1.344, ast: 2.421, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: -0.43, ftImpact: -0.273, to: -0.016 } },
          { name: "Silas Barksdale", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.087, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Kalu Anya", min: 9, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 3, fta: 4, composite: -3.43, zScores: { pts: -0.647, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0.058, to: 0.851 } },
          { name: "Favour Ibe", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Christian Harmon", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.83, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: 0.851 } },
          { name: "Martin Carrere", min: 14, pts: 5, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.28, zScores: { pts: -0.354, reb: -0.744, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.128, ftImpact: 0, to: 0.851 } },
          { name: "Jan Vide", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -3.81, zScores: { pts: -0.794, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0.661, to: -0.016 } },
          { name: "Elijah Gertrude", min: 21, pts: 14, reb: 2, ast: 0, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 6, ftm: 1, fta: 1, composite: 4.98, zScores: { pts: 0.963, reb: -0.396, ast: -0.738, stl: 1.478, blk: -0.493, tpm: 2.028, fgImpact: 1.82, ftImpact: 0.33, to: -0.016 } },
          { name: "Jurian Dixon", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: 0.851 } }
        ]
      }
    },
      {
      id: "401909566",
      line: "Illinois Fighting Illini 99 @ Duke Blue Devils 78 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Ill", name: "Illinois Fighting Illini", score: 99,
        players: [
          { name: "Tomislav Ivisic", min: 14, pts: 2, reb: 1, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.37, zScores: { pts: -0.794, reb: -0.744, ast: -0.738, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: -0.686, ftImpact: 0, to: -0.016 } },
          { name: "Ethan Brown", min: 29, pts: 7, reb: 6, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -1.14, zScores: { pts: -0.062, reb: 0.996, ast: 0.315, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -0.558, ftImpact: 0, to: -0.883 } },
          { name: "Lincoln Williams", min: 8, pts: 1, reb: 6, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -0.11, zScores: { pts: -0.94, reb: 0.996, ast: -0.738, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: -0.375, ftImpact: -0.603, to: 0.851 } },
          { name: "Quentin Coleman", min: 35, pts: 27, reb: 8, ast: 4, stl: 3, blk: 0, to: 4, tpm: 2, fgm: 6, fga: 14, ftm: 13, fta: 15, composite: 8.59, zScores: { pts: 2.867, reb: 1.692, ast: 1.368, stl: 2.571, blk: -0.493, tpm: 1.14, fgImpact: -0.366, ftImpact: 2.428, to: -2.616 } },
          { name: "Andrej Stojakovic", min: 34, pts: 46, reb: 6, ast: 1, stl: 0, blk: 1, to: 2, tpm: 2, fgm: 14, fga: 21, ftm: 16, fta: 20, composite: 12.01, zScores: { pts: 5.649, reb: 0.996, ast: -0.212, stl: -0.706, blk: 0.951, tpm: 1.14, fgImpact: 3.52, ftImpact: 1.552, to: -0.883 } },
          { name: "Zavier Zens", min: 31, pts: 3, reb: 8, ast: 1, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: 0.99, zScores: { pts: -0.647, reb: 1.692, ast: -0.212, stl: 1.478, blk: -0.493, tpm: 0.253, fgImpact: -1.061, ftImpact: 0, to: -0.016 } },
          { name: "Zvonimir Ivisic", min: 22, pts: 9, reb: 4, ast: 0, stl: 0, blk: 3, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: 1.93, zScores: { pts: 0.231, reb: 0.3, ast: -0.738, stl: -0.706, blk: 3.839, tpm: -0.635, fgImpact: 0.256, ftImpact: -0.603, to: -0.016 } },
          { name: "Jason Jakstys", min: 7, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.82, zScores: { pts: -0.794, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.439, ftImpact: 0, to: 0.851 } },
          { name: "Stefan Vaaks", min: 18, pts: 2, reb: 8, ast: 1, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 10, ftm: 0, fta: 0, composite: -2.78, zScores: { pts: -0.794, reb: 1.692, ast: -0.212, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: -2.936, ftImpact: 0, to: -0.883 } },
          { name: "Lucas Morillo", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } }
        ]
      },
      home: {
        abbr: "Duke", name: "Duke Blue Devils", score: 78,
        players: [
          { name: "Dame Sarr", min: 19, pts: 4, reb: 1, ast: 1, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.38, zScores: { pts: -0.501, reb: -0.744, ast: -0.212, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: 0.128, ftImpact: 0, to: -1.749 } },
          { name: "Joaquim Boumtje Boumtje", min: 26, pts: 17, reb: 5, ast: 1, stl: 3, blk: 1, to: 1, tpm: 1, fgm: 4, fga: 9, ftm: 8, fta: 11, composite: 5.32, zScores: { pts: 1.403, reb: 0.648, ast: -0.212, stl: 2.571, blk: 0.951, tpm: 0.253, fgImpact: -0.119, ftImpact: -0.158, to: -0.016 } },
          { name: "Patrick Ngongba II", min: 24, pts: 7, reb: 4, ast: 2, stl: 0, blk: 3, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 5, fta: 7, composite: 2.13, zScores: { pts: -0.062, reb: 0.3, ast: 0.315, stl: -0.706, blk: 3.839, tpm: -0.635, fgImpact: -0.686, ftImpact: -0.215, to: -0.016 } },
          { name: "John Blackwell", min: 24, pts: 7, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 10, ftm: 1, fta: 2, composite: -3.12, zScores: { pts: -0.062, reb: -0.048, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 1.14, fgImpact: -2.122, ftImpact: -0.603, to: -0.016 } },
          { name: "Cayden Boozer", min: 15, pts: 0, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -4.67, zScores: { pts: -1.087, reb: -0.396, ast: 0.315, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -1.875, ftImpact: 0, to: -0.883 } },
          { name: "Cameron Williams", min: 11, pts: 7, reb: 3, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 3, composite: -0.63, zScores: { pts: -0.062, reb: -0.048, ast: -0.212, stl: -0.706, blk: 2.395, tpm: -0.635, fgImpact: 0.192, ftImpact: -1.537, to: -0.016 } },
          { name: "Drew Scharnowski", min: 9, pts: 7, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 3, ftm: 0, fta: 1, composite: 0.18, zScores: { pts: -0.062, reb: -0.396, ast: -0.738, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: 1.317, ftImpact: -0.934, to: 0.851 } },
          { name: "Sebastian Wilkins", min: 20, pts: 10, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 3, fta: 5, composite: -0.94, zScores: { pts: 0.378, reb: -0.396, ast: -0.738, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: 0.567, ftImpact: -0.876, to: -0.016 } },
          { name: "Bryson Howard", min: 12, pts: 4, reb: 0, ast: 0, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -0.81, zScores: { pts: -0.501, reb: -1.092, ast: -0.738, stl: 0.386, blk: 0.951, tpm: 0.253, fgImpact: -0.311, ftImpact: -0.603, to: 0.851 } },
          { name: "Deron Rippey Jr.", min: 14, pts: 0, reb: 0, ast: 7, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -3.07, zScores: { pts: -1.087, reb: -1.092, ast: 2.947, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -1.125, ftImpact: 0, to: -0.883 } },
          { name: "Caleb Foster", min: 26, pts: 15, reb: 6, ast: 3, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 12, ftm: 2, fta: 2, composite: 3.12, zScores: { pts: 1.11, reb: 0.996, ast: 0.841, stl: -0.706, blk: -0.493, tpm: 2.028, fgImpact: -0.43, ftImpact: 0.661, to: -0.883 } }
        ]
      }
    },
      {
      id: "401920511",
      line: "Rutgers Scarlet Knights 73 @ Houston Cougars 85 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Rut", name: "Rutgers Scarlet Knights", score: 73,
        players: [
          { name: "Christian Gurdak", min: 33, pts: 20, reb: 7, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 8, fga: 13, ftm: 4, fta: 5, composite: 4.01, zScores: { pts: 1.842, reb: 1.344, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 1.637, ftImpact: 0.388, to: 0.851 } },
          { name: "Lino Mark", min: 30, pts: 22, reb: 4, ast: 3, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 10, ftm: 12, fta: 15, composite: 2.27, zScores: { pts: 2.135, reb: 0.3, ast: 0.841, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.32, ftImpact: 1.164, to: -1.749 } },
          { name: "Darin Smith Jr.", min: 11, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.17, zScores: { pts: -1.087, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.75, ftImpact: 0, to: -0.016 } },
          { name: "Jamichael Davis", min: 14, pts: 1, reb: 2, ast: 0, stl: 0, blk: 0, to: 5, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -8.37, zScores: { pts: -0.94, reb: -0.396, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: -0.603, to: -3.483 } },
          { name: "Darren Buchanan Jr.", min: 28, pts: 9, reb: 3, ast: 2, stl: 2, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 6, ftm: 3, fta: 3, composite: 1.73, zScores: { pts: 0.231, reb: -0.048, ast: 0.315, stl: 1.478, blk: 0.951, tpm: -0.635, fgImpact: 0.192, ftImpact: 0.991, to: -1.749 } },
          { name: "Mervedi Miteo", min: 7, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.14, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: -0.016 } },
          { name: "Will Sydnor", min: 9, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -2.97, zScores: { pts: -0.794, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0.661, to: 0.851 } },
          { name: "Dorin Buca", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Gevonte Ware", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Diego Garavaglia", min: 7, pts: 2, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 1, composite: -2.66, zScores: { pts: -0.794, reb: -1.092, ast: -0.738, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: 0.439, ftImpact: -0.934, to: 0.851 } },
          { name: "Kaden Powers", min: 8, pts: 5, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -1.71, zScores: { pts: -0.354, reb: -1.092, ast: -0.738, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: -0.311, ftImpact: 0.661, to: -0.016 } },
          { name: "Tariq Francis", min: 26, pts: 9, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: 0.37, zScores: { pts: 0.231, reb: -0.744, ast: -0.212, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: -0.558, ftImpact: 0.661, to: 0.851 } },
          { name: "Rasheed Jones", min: 21, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.16, zScores: { pts: -0.647, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.064, ftImpact: 0, to: 0.851 } }
        ]
      },
      home: {
        abbr: "Hou", name: "Houston Cougars", score: 85,
        players: [
          { name: "Delrecco Gillespie", min: 27, pts: 11, reb: 6, ast: 1, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 9, ftm: 1, fta: 1, composite: 1.8, zScores: { pts: 0.524, reb: 0.996, ast: -0.212, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: 0.695, ftImpact: 0.33, to: -0.883 } },
          { name: "Chase McCarty", min: 29, pts: 12, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 12, ftm: 1, fta: 2, composite: 0.41, zScores: { pts: 0.671, reb: 0.648, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 2.028, fgImpact: -1.244, ftImpact: -0.603, to: 0.851 } },
          { name: "Joseph Tugler", min: 19, pts: 4, reb: 7, ast: 1, stl: 2, blk: 2, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 3.11, zScores: { pts: -0.501, reb: 1.344, ast: -0.212, stl: 1.478, blk: 2.395, tpm: -0.635, fgImpact: 0.128, ftImpact: 0, to: -0.883 } },
          { name: "Dedan Thomas Jr.", min: 34, pts: 21, reb: 1, ast: 4, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 7, fga: 13, ftm: 7, fta: 11, composite: -0.48, zScores: { pts: 1.989, reb: -0.744, ast: 1.368, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.823, ftImpact: -1.422, to: -1.749 } },
          { name: "Mercy Miller", min: 23, pts: 15, reb: 1, ast: 4, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 9, ftm: 4, fta: 4, composite: 1.92, zScores: { pts: 1.11, reb: -0.744, ast: 1.368, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.695, ftImpact: 1.322, to: -0.883 } },
          { name: "Braden East", min: 13, pts: 5, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 3, fta: 4, composite: -1.66, zScores: { pts: -0.354, reb: 0.3, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.064, ftImpact: 0.058, to: 0.851 } },
          { name: "Arafan Diane", min: 10, pts: 3, reb: 0, ast: 1, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -1.39, zScores: { pts: -0.647, reb: -1.092, ast: -0.212, stl: -0.706, blk: 2.395, tpm: -0.635, fgImpact: 0.064, ftImpact: 0.33, to: -0.883 } },
          { name: "Corey Hadnot II", min: 9, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.03, zScores: { pts: -1.087, reb: -0.744, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Chendall Weaver", min: 27, pts: 11, reb: 6, ast: 0, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 6, fta: 6, composite: 2.99, zScores: { pts: 0.524, reb: 0.996, ast: -0.738, stl: 1.478, blk: -0.493, tpm: 0.253, fgImpact: -0.997, ftImpact: 1.983, to: -0.016 } },
          { name: "Kordel Jefferson", min: 9, pts: 3, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -1.13, zScores: { pts: -0.647, reb: -0.744, ast: 0.315, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.439, ftImpact: -0.603, to: 0.851 } }
        ]
      }
    },
      {
      id: "401909787",
      line: "UNLV Rebels 77 @ Kansas Jayhawks 102 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UNLV", name: "UNLV Rebels", score: 77,
        players: [
          { name: "Tyrin Jones", min: 29, pts: 14, reb: 3, ast: 0, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 10, fta: 15, composite: -1.97, zScores: { pts: 0.963, reb: -0.048, ast: -0.738, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: -0.247, ftImpact: -1.364, to: -0.883 } },
          { name: "Jeremy Foumena", min: 11, pts: 3, reb: 3, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -2.23, zScores: { pts: -0.647, reb: -0.048, ast: -0.212, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: -0.311, ftImpact: -0.603, to: -0.016 } },
          { name: "Cam Miles", min: 28, pts: 9, reb: 0, ast: 4, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 13, ftm: 2, fta: 2, composite: 1.91, zScores: { pts: 0.231, reb: -1.092, ast: 1.368, stl: 2.571, blk: -0.493, tpm: 0.253, fgImpact: -2.433, ftImpact: 0.661, to: 0.851 } },
          { name: "Dontrez Williams", min: 22, pts: 17, reb: 6, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 7, fga: 8, ftm: 3, fta: 6, composite: -0.17, zScores: { pts: 1.403, reb: 0.996, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 2.698, ftImpact: -1.81, to: -0.883 } },
          { name: "Kota Suttle Jr.", min: 18, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -0.77, zScores: { pts: -0.208, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 1.14, fgImpact: 0.128, ftImpact: 0, to: 0.851 } },
          { name: "Moustapha Loum", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Jackson Kiss", min: 21, pts: 4, reb: 4, ast: 2, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 3, composite: -1.03, zScores: { pts: -0.501, reb: 0.3, ast: 0.315, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: -0.686, ftImpact: -0.273, to: -0.883 } },
          { name: "MJ Thomas", min: 12, pts: 9, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 1, fta: 1, composite: 0.15, zScores: { pts: 0.231, reb: 0.3, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 1.006, ftImpact: 0.33, to: 0.851 } },
          { name: "Issac Williamson", min: 18, pts: 4, reb: 2, ast: 1, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 6, ftm: 1, fta: 2, composite: -4.75, zScores: { pts: -0.501, reb: -0.396, ast: -0.212, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: -1.436, ftImpact: -0.603, to: -1.749 } },
          { name: "Terrance Ford Jr.", min: 11, pts: 0, reb: 2, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -1.62, zScores: { pts: -1.087, reb: -0.396, ast: -0.212, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: -1.125, ftImpact: 0, to: 0.851 } },
          { name: "Sebastian Mack", min: 25, pts: 11, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 14, ftm: 0, fta: 0, composite: -2.06, zScores: { pts: 0.524, reb: -1.092, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -1.18, ftImpact: 0, to: 0.851 } }
        ]
      },
      home: {
        abbr: "Kan", name: "Kansas Jayhawks", score: 102,
        players: [
          { name: "Trey Kaufman-Renn", min: 20, pts: 5, reb: 1, ast: 4, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -2.92, zScores: { pts: -0.354, reb: -0.744, ast: 1.368, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.128, ftImpact: -0.603, to: -0.883 } },
          { name: "Leroy Blyden Jr.", min: 24, pts: 23, reb: 1, ast: 6, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 8, fga: 8, ftm: 4, fta: 5, composite: 9.99, zScores: { pts: 2.281, reb: -0.744, ast: 2.421, stl: 1.478, blk: -0.493, tpm: 2.028, fgImpact: 3.512, ftImpact: 0.388, to: -0.883 } },
          { name: "Taylen Kinney", min: 19, pts: 11, reb: 1, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 3, fta: 4, composite: 0.21, zScores: { pts: 0.524, reb: -0.744, ast: 0.841, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 1.381, ftImpact: 0.058, to: -0.016 } },
          { name: "Tyran Stokes", min: 13, pts: 13, reb: 10, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 5, ftm: 6, fta: 8, composite: 2.71, zScores: { pts: 0.817, reb: 2.388, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.567, ftImpact: 0.115, to: -0.016 } },
          { name: "Tre White", min: 17, pts: 15, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 6, fga: 8, ftm: 2, fta: 2, composite: 3.3, zScores: { pts: 1.11, reb: -0.048, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 1.884, ftImpact: 0.661, to: 0.851 } },
          { name: "Atticus Richmond", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: 0.851 } },
          { name: "Davion Adkins", min: 11, pts: 4, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 4, composite: -3.09, zScores: { pts: -0.501, reb: 0.648, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.311, ftImpact: -1.207, to: 0.851 } },
          { name: "Keanu Dawes", min: 19, pts: 7, reb: 8, ast: 1, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: 1.2, zScores: { pts: -0.062, reb: 1.692, ast: -0.212, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: 0.567, ftImpact: -0.603, to: -0.883 } },
          { name: "Paul Mbiya", min: 10, pts: 2, reb: 5, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: 1.08, zScores: { pts: -0.794, reb: 0.648, ast: -0.738, stl: -0.706, blk: 2.395, tpm: -0.635, fgImpact: 0.064, ftImpact: 0, to: 0.851 } },
          { name: "Christian Reeves", min: 10, pts: 8, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 4, fta: 5, composite: -0.59, zScores: { pts: 0.085, reb: -0.744, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.878, ftImpact: 0.388, to: 0.851 } },
          { name: "Kohl Rosario", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Will Thengvall", min: 3, pts: 0, reb: 0, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.61, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: -0.016 } },
          { name: "Luke Barnett", min: 13, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -6.76, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -1.125, ftImpact: 0, to: -0.883 } },
          { name: "Trent Perry", min: 17, pts: 7, reb: 3, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 3, fta: 4, composite: -2.33, zScores: { pts: -0.062, reb: -0.048, ast: 0.315, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.128, ftImpact: 0.058, to: -0.883 } },
          { name: "Dennis Parker Jr.", min: 18, pts: 7, reb: 0, ast: 1, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 3, composite: -0.91, zScores: { pts: -0.062, reb: -1.092, ast: -0.212, stl: 2.571, blk: -0.493, tpm: -0.635, fgImpact: 0.567, ftImpact: -1.537, to: -0.016 } }
        ]
      }
    },
      {
      id: "401921826",
      line: "Eastern Illinois Panthers 50 @ Vanderbilt Commodores 96 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "EIU", name: "Eastern Illinois Panthers", score: 50,
        players: [

        ]
      },
      home: {
        abbr: "Vand", name: "Vanderbilt Commodores", score: 96,
        players: [
          { name: "Chandler Bing", min: 22, pts: 8, reb: 6, ast: 6, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 2.98, zScores: { pts: 0.085, reb: 0.996, ast: 2.421, stl: 0.386, blk: -0.493, tpm: 1.14, fgImpact: 0.192, ftImpact: 0, to: -1.749 } },
          { name: "Sebastian Williams-Adams", min: 23, pts: 16, reb: 4, ast: 2, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 7, fga: 8, ftm: 0, fta: 2, composite: 4.94, zScores: { pts: 1.256, reb: 0.3, ast: 0.315, stl: -0.706, blk: 0.951, tpm: 1.14, fgImpact: 2.698, ftImpact: -1.868, to: 0.851 } },
          { name: "Berke Buyuktuncel", min: 23, pts: 6, reb: 6, ast: 3, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 3.77, zScores: { pts: -0.208, reb: 0.996, ast: 0.841, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: 0.942, ftImpact: 0, to: 0.851 } },
          { name: "Ace Glass", min: 23, pts: 16, reb: 0, ast: 3, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 7, ftm: 3, fta: 4, composite: 5.28, zScores: { pts: 1.256, reb: -1.092, ast: 0.841, stl: 0.386, blk: -0.493, tpm: 2.028, fgImpact: 1.445, ftImpact: 0.058, to: 0.851 } },
          { name: "Tyler Tanner", min: 30, pts: 21, reb: 3, ast: 3, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 8, fga: 11, ftm: 3, fta: 3, composite: 9.14, zScores: { pts: 1.989, reb: -0.048, ast: 0.841, stl: 1.478, blk: -0.493, tpm: 1.14, fgImpact: 2.387, ftImpact: 0.991, to: 0.851 } },
          { name: "Jackson Sheffield", min: 12, pts: 2, reb: 4, ast: 0, stl: 0, blk: 4, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: 3.13, zScores: { pts: -0.794, reb: 0.3, ast: -0.738, stl: -0.706, blk: 5.283, tpm: -0.635, fgImpact: 0.439, ftImpact: 0, to: -0.016 } },
          { name: "Ethan Mgbako", min: 5, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -3.84, zScores: { pts: -0.794, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0.661, to: -0.016 } },
          { name: "Bangot Dak", min: 13, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -0.501, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.128, ftImpact: 0, to: -0.016 } },
          { name: "T.O. Barrett", min: 16, pts: 8, reb: 6, ast: 2, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: -0.62, zScores: { pts: 0.085, reb: 0.996, ast: 0.315, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -0.183, ftImpact: 0.661, to: -1.749 } },
          { name: "Jayden Leverett", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.42, zScores: { pts: -1.087, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: -0.016 } },
          { name: "Chase Byington", min: 3, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.51, zScores: { pts: -0.647, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.064, ftImpact: 0, to: 0.851 } },
          { name: "Baylor Allen", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.65, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.75, ftImpact: 0, to: 0.851 } },
          { name: "Mavrick Hawkins", min: 3, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.03, zScores: { pts: -1.087, reb: -0.744, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Ant Brown Jr.", min: 18, pts: 10, reb: 1, ast: 4, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 4.61, zScores: { pts: 0.378, reb: -0.744, ast: 1.368, stl: 1.478, blk: -0.493, tpm: 1.14, fgImpact: 0.631, ftImpact: 0, to: 0.851 } }
        ]
      }
    },
      {
      id: "401906761",
      line: "Kennesaw State Owls 91 @ Alabama Crimson Tide 109 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "KENN", name: "Kennesaw State Owls", score: 91,
        players: [

        ]
      },
      home: {
        abbr: "Bama", name: "Alabama Crimson Tide", score: 109,
        players: [
          { name: "London Jemison", min: 17, pts: 3, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.12, zScores: { pts: -0.647, reb: 0.3, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.064, ftImpact: 0, to: 0.851 } },
          { name: "Drew Fielder", min: 17, pts: 12, reb: 3, ast: 3, stl: 1, blk: 3, to: 1, tpm: 2, fgm: 3, fga: 6, ftm: 4, fta: 4, composite: 8.33, zScores: { pts: 0.671, reb: -0.048, ast: 0.841, stl: 0.386, blk: 3.839, tpm: 1.14, fgImpact: 0.192, ftImpact: 1.322, to: -0.016 } },
          { name: "Brandon Garrison", min: 15, pts: 3, reb: 4, ast: 2, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 7, ftm: 1, fta: 2, composite: -0.32, zScores: { pts: -0.647, reb: 0.3, ast: 0.315, stl: 0.386, blk: 2.395, tpm: -0.635, fgImpact: -1.811, ftImpact: -0.603, to: -0.016 } },
          { name: "Amari Allen", min: 24, pts: 15, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 9, fta: 10, composite: 3.53, zScores: { pts: 1.11, reb: -0.048, ast: 0.841, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.567, ftImpact: 2.04, to: 0.851 } },
          { name: "Aden Holloway", min: 25, pts: 19, reb: 0, ast: 3, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 6, ftm: 8, fta: 9, composite: 5.84, zScores: { pts: 1.696, reb: -1.092, ast: 0.841, stl: -0.706, blk: -0.493, tpm: 2.028, fgImpact: 1.006, ftImpact: 1.71, to: 0.851 } },
          { name: "Tarris Bouie", min: 15, pts: 5, reb: 5, ast: 2, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 4, composite: -1.05, zScores: { pts: -0.354, reb: 0.648, ast: 0.315, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: 0.128, ftImpact: -2.471, to: -0.016 } },
          { name: "Keitenn Bristow", min: 15, pts: 5, reb: 5, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 1, composite: 1.05, zScores: { pts: -0.354, reb: 0.648, ast: -0.738, stl: -0.706, blk: 2.395, tpm: -0.635, fgImpact: 0.128, ftImpact: 0.33, to: -0.016 } },
          { name: "Jaxon Richardson", min: 18, pts: 12, reb: 6, ast: 0, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 6, fga: 7, ftm: 0, fta: 2, composite: 3.96, zScores: { pts: 0.671, reb: 0.996, ast: -0.738, stl: 1.478, blk: 0.951, tpm: -0.635, fgImpact: 2.259, ftImpact: -1.868, to: 0.851 } },
          { name: "Anderson Diaz", min: 13, pts: 11, reb: 0, ast: 2, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 5, ftm: 5, fta: 7, composite: -1.3, zScores: { pts: 0.524, reb: -1.092, ast: 0.315, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: 0.567, ftImpact: -0.215, to: -1.749 } },
          { name: "Qayden Samuels", min: 20, pts: 9, reb: 5, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 7, fta: 8, composite: -0.11, zScores: { pts: 0.231, reb: 0.648, ast: 0.315, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -1.061, ftImpact: 1.379, to: -0.883 } },
          { name: "Cole Cloer", min: 21, pts: 15, reb: 2, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 3, fga: 7, ftm: 7, fta: 9, composite: 3, zScores: { pts: 1.11, reb: -0.396, ast: -0.212, stl: -0.706, blk: 0.951, tpm: 1.14, fgImpact: -0.183, ftImpact: 0.446, to: 0.851 } }
        ]
      }
    },
      {
      id: "401921722",
      line: "Rider Broncs 48 @ Miami Hurricanes 95 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "RID", name: "Rider Broncs", score: 48,
        players: [

        ]
      },
      home: {
        abbr: "Mia-FL", name: "Miami Hurricanes", score: 95,
        players: [
          { name: "Caleb Gaskins", min: 29, pts: 14, reb: 8, ast: 0, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 10, ftm: 2, fta: 4, composite: 2.05, zScores: { pts: 0.963, reb: 1.692, ast: -0.738, stl: 0.386, blk: -0.493, tpm: 1.14, fgImpact: 0.32, ftImpact: -1.207, to: -0.016 } },
          { name: "Shelton Henderson", min: 20, pts: 12, reb: 10, ast: 3, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 9, ftm: 2, fta: 5, composite: 2.79, zScores: { pts: 0.671, reb: 2.388, ast: 0.841, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: 0.695, ftImpact: -2.14, to: -0.016 } },
          { name: "Somto Cyril", min: 22, pts: 15, reb: 8, ast: 0, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 6, fga: 8, ftm: 3, fta: 4, composite: 5.62, zScores: { pts: 1.11, reb: 1.692, ast: -0.738, stl: -0.706, blk: 3.839, tpm: -0.635, fgImpact: 1.884, ftImpact: 0.058, to: -0.883 } },
          { name: "Acaden Lewis", min: 30, pts: 13, reb: 6, ast: 4, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 12, ftm: 3, fta: 4, composite: 2.63, zScores: { pts: 0.817, reb: 0.996, ast: 1.368, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: -0.43, ftImpact: 0.058, to: -0.883 } },
          { name: "Dante Allen", min: 25, pts: 14, reb: 6, ast: 0, stl: 3, blk: 2, to: 0, tpm: 0, fgm: 6, fga: 12, ftm: 2, fta: 2, composite: 7.45, zScores: { pts: 0.963, reb: 0.996, ast: -0.738, stl: 2.571, blk: 2.395, tpm: -0.635, fgImpact: 0.384, ftImpact: 0.661, to: 0.851 } },
          { name: "DeSean Goode", min: 8, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -5.59, zScores: { pts: -1.087, reb: -0.048, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: -1.868, to: -0.016 } },
          { name: "Christopher Birden Jr.", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Robert Miller III", min: 13, pts: 10, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 6, fta: 8, composite: -0.08, zScores: { pts: 0.378, reb: 0.648, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.503, ftImpact: 0.115, to: 0.851 } },
          { name: "Egor Ryzhov", min: 8, pts: 7, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 5, composite: -5.37, zScores: { pts: -0.062, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.567, ftImpact: -3.405, to: 0.851 } },
          { name: "Nick Dorn", min: 21, pts: 7, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 5, fta: 6, composite: -1.42, zScores: { pts: -0.062, reb: -0.048, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.311, ftImpact: 0.718, to: 0.851 } },
          { name: "Quin Berger", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: 0.851 } },
          { name: "Brent Bland", min: 17, pts: 3, reb: 3, ast: 1, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -2.35, zScores: { pts: -0.647, reb: -0.048, ast: -0.212, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: -0.311, ftImpact: -0.603, to: -0.883 } }
        ]
      }
    },
      {
      id: "401916289",
      line: "Arkansas Razorbacks 76 @ Indiana Hoosiers 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Ark", name: "Arkansas Razorbacks", score: 76,
        players: [
          { name: "Miikka Muurinen", min: 21, pts: 10, reb: 3, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 5, fta: 7, composite: -2.17, zScores: { pts: 0.378, reb: -0.048, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -0.247, ftImpact: -0.215, to: -0.883 } },
          { name: "Cooper Bowser", min: 16, pts: 6, reb: 2, ast: 3, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 0, fta: 2, composite: 0.86, zScores: { pts: -0.208, reb: -0.396, ast: 0.841, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: 0.942, ftImpact: -1.868, to: 0.851 } },
          { name: "Jeremiah Wilkinson", min: 14, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.67, zScores: { pts: -0.794, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -1.061, ftImpact: 0, to: 0.851 } },
          { name: "Jordan Smith Jr.", min: 31, pts: 12, reb: 2, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 11, ftm: 4, fta: 4, composite: 0.64, zScores: { pts: 0.671, reb: -0.396, ast: 0.315, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: -0.869, ftImpact: 1.322, to: -0.016 } },
          { name: "Billy Richmond III", min: 32, pts: 16, reb: 7, ast: 3, stl: 2, blk: 2, to: 0, tpm: 2, fgm: 4, fga: 8, ftm: 6, fta: 6, composite: 11.54, zScores: { pts: 1.256, reb: 1.344, ast: 0.841, stl: 1.478, blk: 2.395, tpm: 1.14, fgImpact: 0.256, ftImpact: 1.983, to: 0.851 } },
          { name: "Abdou Toure", min: 9, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.77, zScores: { pts: -0.501, reb: -0.048, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.503, ftImpact: 0, to: 0.851 } },
          { name: "Caleb Ourigou", min: 13, pts: 0, reb: 1, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -0.49, zScores: { pts: -1.087, reb: -0.744, ast: -0.212, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "JJ Andrews", min: 29, pts: 6, reb: 6, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 1, fta: 3, composite: -1.98, zScores: { pts: -0.208, reb: 0.996, ast: -0.738, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: -0.622, ftImpact: -1.537, to: -0.016 } },
          { name: "Maper Maker", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Davion Thompson", min: 34, pts: 20, reb: 2, ast: 8, stl: 1, blk: 1, to: 3, tpm: 4, fgm: 6, fga: 15, ftm: 4, fta: 7, composite: 5.2, zScores: { pts: 1.842, reb: -0.396, ast: 3.474, stl: 0.386, blk: 0.951, tpm: 2.916, fgImpact: -0.741, ftImpact: -1.48, to: -1.749 } }
        ]
      },
      home: {
        abbr: "Ind", name: "Indiana Hoosiers", score: 81,
        players: [
          { name: "Aiden Sherrell", min: 25, pts: 17, reb: 6, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 9, ftm: 3, fta: 3, composite: 4.74, zScores: { pts: 1.403, reb: 0.996, ast: -0.212, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 2.323, ftImpact: 0.991, to: -0.016 } },
          { name: "Samet Yigitoglu", min: 27, pts: 17, reb: 10, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 5, fga: 11, ftm: 7, fta: 8, composite: 2.75, zScores: { pts: 1.403, reb: 2.388, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -0.055, ftImpact: 1.379, to: -0.883 } },
          { name: "Markus Burton", min: 28, pts: 8, reb: 2, ast: 4, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 3, fga: 9, ftm: 1, fta: 2, composite: -2.95, zScores: { pts: 0.085, reb: -0.396, ast: 1.368, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: -0.933, ftImpact: -0.603, to: -2.616 } },
          { name: "Jaeden Mustaf", min: 35, pts: 12, reb: 4, ast: 3, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 8, fta: 8, composite: 2.96, zScores: { pts: 0.671, reb: 0.3, ast: 0.841, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.128, ftImpact: 2.644, to: -0.883 } },
          { name: "Darren Harris", min: 34, pts: 18, reb: 7, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 7, ftm: 10, fta: 11, composite: 5.32, zScores: { pts: 1.549, reb: 1.344, ast: 0.315, stl: -0.706, blk: -0.493, tpm: 1.14, fgImpact: -0.183, ftImpact: 2.371, to: -0.016 } },
          { name: "Trevor Manhertz", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Sam Alexis", min: 17, pts: 1, reb: 2, ast: 0, stl: 1, blk: 3, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 1, fta: 2, composite: 0.26, zScores: { pts: -0.94, reb: -0.396, ast: -0.738, stl: 0.386, blk: 3.839, tpm: -0.635, fgImpact: -1.5, ftImpact: -0.603, to: 0.851 } },
          { name: "Trent Sisley", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Bryce Lindsay", min: 25, pts: 8, reb: 3, ast: 5, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 1, composite: 1.23, zScores: { pts: 0.085, reb: -0.048, ast: 1.894, stl: -0.706, blk: -0.493, tpm: 1.14, fgImpact: -0.558, ftImpact: -0.934, to: 0.851 } }
        ]
      }
    },
      {
      id: "401925879",
      line: "Montana State Bobcats 62 @ Gonzaga Bulldogs 74 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MTST", name: "Montana State Bobcats", score: 62,
        players: [

        ]
      },
      home: {
        abbr: "Gonz", name: "Gonzaga Bulldogs", score: 74,
        players: [
          { name: "Braden Huff", min: 29, pts: 21, reb: 7, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 7, fga: 9, ftm: 6, fta: 6, composite: 8.25, zScores: { pts: 1.989, reb: 1.344, ast: -0.738, stl: -0.706, blk: 0.951, tpm: 0.253, fgImpact: 2.323, ftImpact: 1.983, to: 0.851 } },
          { name: "Massamba Diop", min: 23, pts: 2, reb: 9, ast: 1, stl: 3, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 2, composite: -0.01, zScores: { pts: -0.794, reb: 2.04, ast: -0.212, stl: 2.571, blk: 0.951, tpm: -0.635, fgImpact: -0.311, ftImpact: -1.868, to: -1.749 } },
          { name: "Davis Fogle", min: 32, pts: 16, reb: 9, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 14, ftm: 3, fta: 6, composite: 0.13, zScores: { pts: 1.256, reb: 2.04, ast: 0.841, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -0.366, ftImpact: -1.81, to: -0.883 } },
          { name: "Javon Bennett", min: 11, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -6.27, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -1.5, ftImpact: 0, to: -0.016 } },
          { name: "Isiah Harwell", min: 23, pts: 3, reb: 2, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -2.2, zScores: { pts: -0.647, reb: -0.396, ast: -0.212, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: 0.064, ftImpact: -0.603, to: -0.016 } },
          { name: "Izan Almansa", min: 29, pts: 12, reb: 6, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 7, ftm: 3, fta: 4, composite: 1.41, zScores: { pts: 0.671, reb: 0.996, ast: -0.212, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: 0.631, ftImpact: 0.058, to: -0.883 } },
          { name: "Chauncey Wiggins", min: 13, pts: 3, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.41, zScores: { pts: -0.647, reb: -0.396, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -1.061, ftImpact: 0, to: 0.851 } },
          { name: "Nathan De Sousa", min: 16, pts: 9, reb: 1, ast: 0, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 5, ftm: 1, fta: 1, composite: -2.03, zScores: { pts: 0.231, reb: -0.744, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 1.381, ftImpact: 0.33, to: -1.749 } },
          { name: "Xaivian Lee", min: 24, pts: 8, reb: 7, ast: 6, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 5, ftm: 4, fta: 4, composite: 0.47, zScores: { pts: 0.085, reb: 1.344, ast: 2.421, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.247, ftImpact: 1.322, to: -2.616 } }
        ]
      }
    },
      {
      id: "401927381",
      line: "Hofstra Pride 66 @ Murray State Racers 82 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "HOF", name: "Hofstra Pride", score: 66,
        players: [

        ]
      },
      home: {
        abbr: "Mur", name: "Murray State Racers", score: 82,
        players: [
          { name: "Brigham Rogers", min: 32, pts: 12, reb: 3, ast: 0, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 6, fga: 9, ftm: 0, fta: 3, composite: -0.15, zScores: { pts: 0.671, reb: -0.048, ast: -0.738, stl: 0.386, blk: 2.395, tpm: -0.635, fgImpact: 1.509, ftImpact: -2.801, to: -0.883 } },
          { name: "Talis Soulhac", min: 24, pts: 4, reb: 6, ast: 3, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 7, ftm: 2, fta: 2, composite: 1.1, zScores: { pts: -0.501, reb: 0.996, ast: 0.841, stl: 1.478, blk: 0.951, tpm: -0.635, fgImpact: -1.811, ftImpact: 0.661, to: -0.883 } },
          { name: "Roman Domon", min: 34, pts: 30, reb: 10, ast: 4, stl: 2, blk: 0, to: 4, tpm: 2, fgm: 5, fga: 17, ftm: 18, fta: 22, composite: 6.48, zScores: { pts: 3.306, reb: 2.388, ast: 1.368, stl: 1.478, blk: -0.493, tpm: 1.14, fgImpact: -2.305, ftImpact: 2.213, to: -2.616 } },
          { name: "Brayden Shorter", min: 29, pts: 11, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 11, ftm: 0, fta: 0, composite: -0.49, zScores: { pts: 0.524, reb: -0.744, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 2.028, fgImpact: -0.869, ftImpact: 0, to: -0.016 } },
          { name: "Lachlan Crate", min: 16, pts: 7, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 5, fta: 5, composite: -0.09, zScores: { pts: -0.062, reb: -0.396, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.439, ftImpact: 1.652, to: 0.851 } },
          { name: "Jonas Boulefaa", min: 8, pts: 2, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.84, zScores: { pts: -0.794, reb: -0.048, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.064, ftImpact: 0, to: -0.016 } },
          { name: "Pavle Nikolic", min: 6, pts: 1, reb: 0, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -2.55, zScores: { pts: -0.94, reb: -1.092, ast: -0.738, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: -0.603, to: 0.851 } },
          { name: "Mark Padjen", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: 0.851 } },
          { name: "Mathis Courbon", min: 8, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: -2.52, zScores: { pts: -0.208, reb: -0.396, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.878, ftImpact: 0.661, to: -0.883 } },
          { name: "Ben Shtolzberg", min: 13, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.27, zScores: { pts: -1.087, reb: -0.744, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: -0.016 } },
          { name: "Kaden Magwood", min: 9, pts: 9, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 4, fta: 4, composite: 0.1, zScores: { pts: 0.231, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.128, ftImpact: 1.322, to: 0.851 } },
          { name: "Christian Jones", min: 16, pts: 0, reb: 0, ast: 4, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -0.74, zScores: { pts: -1.087, reb: -1.092, ast: 1.368, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: -1.125, ftImpact: 0, to: 0.851 } }
        ]
      }
    },
      {
      id: "401920953",
      line: "Liberty Flames 87 @ Southern Illinois Salukis 78 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LIB", name: "Liberty Flames", score: 87,
        players: [

        ]
      },
      home: {
        abbr: "SIU", name: "Southern Illinois Salukis", score: 78,
        players: [
          { name: "Max Pikaar", min: 24, pts: 3, reb: 8, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -2.83, zScores: { pts: -0.647, reb: 1.692, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.686, ftImpact: -0.603, to: -0.016 } },
          { name: "Jaheem Webber", min: 13, pts: 2, reb: 4, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: 0.74, zScores: { pts: -0.794, reb: 0.3, ast: -0.738, stl: -0.706, blk: 2.395, tpm: -0.635, fgImpact: 0.064, ftImpact: 0, to: 0.851 } },
          { name: "Jeremiah Jackson", min: 33, pts: 25, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 6, fgm: 9, fga: 15, ftm: 1, fta: 2, composite: 6.19, zScores: { pts: 2.574, reb: -0.744, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 4.691, fgImpact: 1.701, ftImpact: -0.603, to: -0.016 } },
          { name: "Jalen Haynes", min: 34, pts: 26, reb: 2, ast: 6, stl: 1, blk: 1, to: 1, tpm: 2, fgm: 8, fga: 16, ftm: 8, fta: 9, composite: 9.43, zScores: { pts: 2.721, reb: -0.396, ast: 2.421, stl: 0.386, blk: 0.951, tpm: 1.14, fgImpact: 0.512, ftImpact: 1.71, to: -0.016 } },
          { name: "Damien Mayo Jr.", min: 28, pts: 11, reb: 2, ast: 1, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 2, fga: 6, ftm: 6, fta: 6, composite: 0.89, zScores: { pts: 0.524, reb: -0.396, ast: -0.212, stl: -0.706, blk: 0.951, tpm: 0.253, fgImpact: -0.622, ftImpact: 1.983, to: -0.883 } },
          { name: "Pietro Ranieri", min: 9, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.01, zScores: { pts: -0.94, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: -0.603, to: 0.851 } },
          { name: "Luke Susko", min: 21, pts: 4, reb: 5, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -0.53, zScores: { pts: -0.501, reb: 0.648, ast: -0.738, stl: -0.706, blk: 0.951, tpm: 0.253, fgImpact: -0.686, ftImpact: -0.603, to: 0.851 } },
          { name: "Jaxson Fugate", min: 11, pts: 0, reb: 5, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 5, ftm: 0, fta: 0, composite: -0.97, zScores: { pts: -1.087, reb: 0.648, ast: -0.212, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: -1.875, ftImpact: 0, to: 0.851 } },
          { name: "Luke Walsh", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 1, composite: -6.45, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.75, ftImpact: -0.934, to: -0.016 } },
          { name: "Caden Hawkins", min: 16, pts: 6, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -0.26, zScores: { pts: -0.208, reb: -0.048, ast: 0.315, stl: -0.706, blk: -0.493, tpm: 1.14, fgImpact: -0.247, ftImpact: 0, to: -0.016 } },
          { name: "Brock McClure", min: 5, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.24, zScores: { pts: -1.087, reb: -1.092, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: -0.016 } }
        ]
      }
    },
      {
      id: "401920706",
      line: "Lipscomb Bisons 78 @ Purdue Boilermakers 95 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LIP", name: "Lipscomb Bisons", score: 78,
        players: [

        ]
      },
      home: {
        abbr: "Pur", name: "Purdue Boilermakers", score: 95,
        players: [
          { name: "Caden Pierce", min: 20, pts: 5, reb: 5, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 0.52, zScores: { pts: -0.354, reb: 0.648, ast: 0.315, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.878, ftImpact: 0, to: -0.016 } },
          { name: "Daniel Jacobsen", min: 27, pts: 19, reb: 12, ast: 7, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 7, fga: 13, ftm: 5, fta: 5, composite: 11.24, zScores: { pts: 1.696, reb: 3.084, ast: 2.947, stl: -0.706, blk: 2.395, tpm: -0.635, fgImpact: 0.823, ftImpact: 1.652, to: -0.016 } },
          { name: "C.J. Cox", min: 30, pts: 12, reb: 5, ast: 2, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 6.05, zScores: { pts: 0.671, reb: 0.648, ast: 0.315, stl: 1.478, blk: -0.493, tpm: 1.14, fgImpact: 1.445, ftImpact: 0, to: 0.851 } },
          { name: "Antione West Jr", min: 34, pts: 27, reb: 2, ast: 2, stl: 0, blk: 0, to: 4, tpm: 4, fgm: 9, fga: 15, ftm: 5, fta: 6, composite: 4.3, zScores: { pts: 2.867, reb: -0.396, ast: 0.315, stl: -0.706, blk: -0.493, tpm: 2.916, fgImpact: 1.701, ftImpact: 0.718, to: -2.616 } },
          { name: "Jack Benter", min: 32, pts: 11, reb: 7, ast: 3, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 5.02, zScores: { pts: 0.524, reb: 1.344, ast: 0.841, stl: -0.706, blk: -0.493, tpm: 2.028, fgImpact: 0.631, ftImpact: 0, to: 0.851 } },
          { name: "Enzo Shahrvin", min: 7, pts: 0, reb: 0, ast: 2, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.65, zScores: { pts: -1.087, reb: -1.092, ast: 0.315, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: -0.016 } },
          { name: "Raleigh Burgess", min: 4, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.23, zScores: { pts: -1.087, reb: -0.048, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: 0.851 } },
          { name: "Omer Mayer", min: 9, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -4.56, zScores: { pts: -0.794, reb: -0.744, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.75, ftImpact: 0.661, to: -0.883 } },
          { name: "Luke Ertel", min: 8, pts: 3, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -1.12, zScores: { pts: -0.647, reb: -0.048, ast: -0.738, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: -0.686, ftImpact: 0, to: 0.851 } },
          { name: "Gicarri Harris", min: 29, pts: 16, reb: 3, ast: 5, stl: 2, blk: 0, to: 3, tpm: 3, fgm: 6, fga: 9, ftm: 1, fta: 4, composite: 3.4, zScores: { pts: 1.256, reb: -0.048, ast: 1.894, stl: 1.478, blk: -0.493, tpm: 2.028, fgImpact: 1.509, ftImpact: -2.471, to: -1.749 } }
        ]
      }
    },
      {
      id: "401920236",
      line: "Maine Augusta Moose 67 @ Dartmouth Big Green 117 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UMA", name: "Maine Augusta Moose", score: 67,
        players: [

        ]
      },
      home: {
        abbr: "Dart", name: "Dartmouth Big Green", score: 117,
        players: [
          { name: "Patrick Tivnan Jr.", min: 11, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 3, composite: -6.81, zScores: { pts: -1.087, reb: 0.3, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -1.5, ftImpact: -2.801, to: 0.851 } },
          { name: "Anton Strelnikov", min: 12, pts: 7, reb: 3, ast: 4, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 2.55, zScores: { pts: -0.062, reb: -0.048, ast: 1.368, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: 0.503, ftImpact: 0.661, to: -0.016 } },
          { name: "Acen Jimenez", min: 20, pts: 10, reb: 5, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: 4.83, zScores: { pts: 0.378, reb: 0.648, ast: 0.315, stl: 0.386, blk: -0.493, tpm: 1.14, fgImpact: 0.942, ftImpact: 0.661, to: 0.851 } },
          { name: "Cameron McNamee", min: 13, pts: 12, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 6, fta: 6, composite: 3.59, zScores: { pts: 0.671, reb: -0.048, ast: 0.315, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.567, ftImpact: 1.983, to: 0.851 } },
          { name: "Ben Brown", min: 15, pts: 8, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -0.07, zScores: { pts: 0.085, reb: -0.396, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 1.14, fgImpact: 0.192, ftImpact: 0, to: 0.851 } },
          { name: "Jake Pollack", min: 14, pts: 8, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 7, ftm: 3, fta: 4, composite: -1.56, zScores: { pts: 0.085, reb: -0.396, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -0.997, ftImpact: 0.058, to: 0.851 } },
          { name: "Tyler Garrett", min: 16, pts: 7, reb: 6, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -0.95, zScores: { pts: -0.062, reb: 0.996, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -0.183, ftImpact: 0, to: -0.016 } },
          { name: "Dan Civello", min: 18, pts: 9, reb: 5, ast: 2, stl: 0, blk: 1, to: 5, tpm: 1, fgm: 2, fga: 4, ftm: 4, fta: 4, composite: -0.34, zScores: { pts: 0.231, reb: 0.648, ast: 0.315, stl: -0.706, blk: 0.951, tpm: 0.253, fgImpact: 0.128, ftImpact: 1.322, to: -3.483 } },
          { name: "Ernas Valauskas", min: 24, pts: 24, reb: 7, ast: 2, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 7, fga: 13, ftm: 7, fta: 7, composite: 8.26, zScores: { pts: 2.428, reb: 1.344, ast: 0.315, stl: 0.386, blk: -0.493, tpm: 2.028, fgImpact: 0.823, ftImpact: 2.313, to: -0.883 } },
          { name: "CJ Aldrich III", min: 15, pts: 9, reb: 2, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 3, fta: 4, composite: 1.41, zScores: { pts: 0.231, reb: -0.396, ast: 0.841, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.567, ftImpact: 0.058, to: 0.851 } },
          { name: "Cam Hiatt", min: 15, pts: 11, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 3.52, zScores: { pts: 0.524, reb: 0.3, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 2.028, fgImpact: 0.567, ftImpact: 0.661, to: 0.851 } },
          { name: "Landon Williams", min: 13, pts: 4, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 1, fta: 2, composite: -2.49, zScores: { pts: -0.501, reb: -0.048, ast: 0.315, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -0.686, ftImpact: -0.603, to: -0.016 } },
          { name: "Nikola Abusara", min: 14, pts: 8, reb: 9, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 3, composite: 4.31, zScores: { pts: 0.085, reb: 2.04, ast: 0.315, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: 0.942, ftImpact: -0.273, to: 0.851 } }
        ]
      }
    },
      {
      id: "401925775",
      line: "Charlotte 49ers 73 @ Davidson Wildcats 66 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UNCC", name: "Charlotte 49ers", score: 73,
        players: [
          { name: "Arden Conyers", min: 16, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.43, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -0.75, ftImpact: 0, to: -0.016 } },
          { name: "Dylan Grant", min: 22, pts: 6, reb: 6, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 1.04, zScores: { pts: -0.208, reb: 0.996, ast: -0.738, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: -0.558, ftImpact: 0, to: 0.851 } },
          { name: "Michael Walz", min: 22, pts: 8, reb: 2, ast: 2, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -0.75, zScores: { pts: 0.085, reb: -0.396, ast: 0.315, stl: -0.706, blk: -0.493, tpm: 1.14, fgImpact: 0.192, ftImpact: 0, to: -0.883 } },
          { name: "Keyshuan Tillery", min: 36, pts: 26, reb: 7, ast: 1, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 8, fga: 18, ftm: 9, fta: 10, composite: 7.74, zScores: { pts: 2.721, reb: 1.344, ast: -0.212, stl: 1.478, blk: -0.493, tpm: 0.253, fgImpact: -0.238, ftImpact: 2.04, to: 0.851 } },
          { name: "Dorian Finister", min: 17, pts: 2, reb: 4, ast: 3, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: 1.1, zScores: { pts: -0.794, reb: 0.3, ast: 0.841, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: 0.064, ftImpact: 0, to: -0.016 } },
          { name: "Jayden Fort", min: 20, pts: 8, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: -0.81, zScores: { pts: 0.085, reb: -0.396, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.567, ftImpact: 0.661, to: 0.851 } },
          { name: "Peyton Marshall", min: 16, pts: 5, reb: 3, ast: 1, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 5, composite: -1.88, zScores: { pts: -0.354, reb: -0.048, ast: -0.212, stl: 0.386, blk: 2.395, tpm: -0.635, fgImpact: 0.878, ftImpact: -3.405, to: -0.883 } },
          { name: "Frank Oguche", min: 24, pts: 10, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 2.36, zScores: { pts: 0.378, reb: -0.048, ast: -0.212, stl: 0.386, blk: -0.493, tpm: 1.14, fgImpact: 0.567, ftImpact: 0.661, to: -0.016 } },
          { name: "Chaze Harris", min: 27, pts: 8, reb: 3, ast: 4, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 0.04, zScores: { pts: 0.085, reb: -0.048, ast: 1.368, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.256, ftImpact: 0, to: -0.883 } }
        ]
      },
      home: {
        abbr: "David", name: "Davidson Wildcats", score: 66,
        players: [
          { name: "Josh Scovens", min: 36, pts: 17, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 14, ftm: 3, fta: 4, composite: -0.37, zScores: { pts: 1.403, reb: -0.744, ast: 0.315, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.448, ftImpact: 0.058, to: -0.016 } },
          { name: "Jackson Keith", min: 28, pts: 8, reb: 6, ast: 0, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 1, fta: 1, composite: 5.15, zScores: { pts: 0.085, reb: 0.996, ast: -0.738, stl: 1.478, blk: 0.951, tpm: 0.253, fgImpact: 0.942, ftImpact: 0.33, to: 0.851 } },
          { name: "Ian Platteeuw", min: 20, pts: 5, reb: 5, ast: 4, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 6, ftm: 1, fta: 2, composite: -2.06, zScores: { pts: -0.354, reb: 0.648, ast: 1.368, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -0.622, ftImpact: -0.603, to: -1.749 } },
          { name: "Sam Brown", min: 31, pts: 9, reb: 4, ast: 3, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 13, ftm: 0, fta: 0, composite: 1.84, zScores: { pts: 0.231, reb: 0.3, ast: 0.841, stl: 1.478, blk: -0.493, tpm: 0.253, fgImpact: -1.619, ftImpact: 0, to: 0.851 } },
          { name: "Nick Janowski", min: 22, pts: 7, reb: 7, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 10, ftm: 0, fta: 1, composite: -3.53, zScores: { pts: -0.062, reb: 1.344, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -1.308, ftImpact: -0.934, to: -0.883 } },
          { name: "Tom Stoiber", min: 4, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -2.97, zScores: { pts: -0.794, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0.661, to: 0.851 } },
          { name: "JaQualon Roberts", min: 20, pts: 4, reb: 6, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 2, composite: -2.33, zScores: { pts: -0.501, reb: 0.996, ast: -0.212, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.878, ftImpact: -1.868, to: -0.883 } },
          { name: "Eetu Heinonen", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.63, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: -0.883 } },
          { name: "Nick Coval", min: 12, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.5, zScores: { pts: -1.087, reb: -1.092, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -1.125, ftImpact: 0, to: 0.851 } },
          { name: "John Carter Jr.", min: 21, pts: 14, reb: 1, ast: 1, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 4.43, zScores: { pts: 0.963, reb: -0.744, ast: -0.212, stl: 1.478, blk: -0.493, tpm: 2.916, fgImpact: -0.119, ftImpact: 0.661, to: -0.016 } }
        ]
      }
    },
      {
      id: "401921756",
      line: "Mississippi State Bulldogs 86 @ UCF Knights 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MissSt", name: "Mississippi State Bulldogs", score: 86,
        players: [
          { name: "Thomas Bassong", min: 12, pts: 1, reb: 5, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 4, composite: -4, zScores: { pts: -0.94, reb: 0.648, ast: 1.368, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.75, ftImpact: -2.471, to: -0.016 } },
          { name: "Kimani Hamilton", min: 32, pts: 6, reb: 4, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 4, composite: -2.47, zScores: { pts: -0.208, reb: 0.3, ast: -0.212, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: 0.128, ftImpact: -1.207, to: -0.883 } },
          { name: "ND Okafor", min: 19, pts: 8, reb: 3, ast: 1, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 0, fta: 0, composite: 1.14, zScores: { pts: 0.085, reb: -0.048, ast: -0.212, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: 0.631, ftImpact: 0, to: -0.016 } },
          { name: "RJ Johnson", min: 35, pts: 18, reb: 7, ast: 5, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 14, ftm: 4, fta: 6, composite: 4.03, zScores: { pts: 1.549, reb: 1.344, ast: 1.894, stl: 0.386, blk: -0.493, tpm: 1.14, fgImpact: -0.366, ftImpact: -0.546, to: -0.883 } },
          { name: "Josh Hubbard", min: 36, pts: 13, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 11, ftm: 2, fta: 4, composite: -2.27, zScores: { pts: 0.817, reb: -0.744, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 2.028, fgImpact: -0.869, ftImpact: -1.207, to: -0.883 } },
          { name: "Kendyl Sanders", min: 6, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -3.32, zScores: { pts: -0.794, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0.661, to: 0.851 } },
          { name: "Tristan Reed", min: 21, pts: 16, reb: 11, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 7, fga: 8, ftm: 2, fta: 3, composite: 4.05, zScores: { pts: 1.256, reb: 2.736, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 2.698, ftImpact: -0.273, to: -0.883 } },
          { name: "Jalyn Collingwood", min: 5, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -4.73, zScores: { pts: -0.94, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: -0.603, to: 0.851 } },
          { name: "Tajuan Simpkins", min: 9, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -2.82, zScores: { pts: -0.794, reb: -0.744, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.75, ftImpact: 0.661, to: 0.851 } },
          { name: "King Grace", min: 25, pts: 19, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 14, fta: 14, composite: 6.48, zScores: { pts: 1.696, reb: 0.3, ast: 0.315, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.503, ftImpact: 4.626, to: -0.016 } }
        ]
      },
      home: {
        abbr: "UCF", name: "UCF Knights", score: 83,
        players: [
          { name: "Isaiah Malone", min: 29, pts: 14, reb: 3, ast: 1, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 8, ftm: 4, fta: 6, composite: 2.14, zScores: { pts: 0.963, reb: -0.048, ast: -0.212, stl: 1.478, blk: 0.951, tpm: -0.635, fgImpact: 1.07, ftImpact: -0.546, to: -0.883 } },
          { name: "John Bol", min: 18, pts: 1, reb: 3, ast: 1, stl: 0, blk: 4, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: 2.24, zScores: { pts: -0.94, reb: -0.048, ast: -0.212, stl: -0.706, blk: 5.283, tpm: -0.635, fgImpact: -0.75, ftImpact: -0.603, to: 0.851 } },
          { name: "Arturo Dean", min: 30, pts: 18, reb: 0, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 9, ftm: 12, fta: 12, composite: 1.65, zScores: { pts: 1.549, reb: -1.092, ast: -0.212, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -0.933, ftImpact: 3.965, to: -0.883 } },
          { name: "Riley Kugel", min: 31, pts: 12, reb: 4, ast: 3, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 9, ftm: 4, fta: 5, composite: 3.15, zScores: { pts: 0.671, reb: 0.3, ast: 0.841, stl: 0.386, blk: -0.493, tpm: 1.14, fgImpact: -0.933, ftImpact: 0.388, to: 0.851 } },
          { name: "Dior Johnson", min: 38, pts: 26, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 8, fga: 16, ftm: 9, fta: 10, composite: 6.14, zScores: { pts: 2.721, reb: 0.648, ast: 0.315, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.512, ftImpact: 2.04, to: 0.851 } },
          { name: "Lewis Walker", min: 9, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 4, fta: 4, composite: -2.02, zScores: { pts: -0.501, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 1.322, to: 0.851 } },
          { name: "Churchill Abass", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.77, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: -0.016 } },
          { name: "Elijah Hulsewe", min: 4, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.82, zScores: { pts: -0.794, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.439, ftImpact: 0, to: 0.851 } },
          { name: "Jahda Swann", min: 10, pts: 1, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -2.39, zScores: { pts: -0.94, reb: -0.744, ast: -0.212, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: -0.603, to: 0.851 } },
          { name: "Carmelo Pacheco", min: 9, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -5.6, zScores: { pts: -0.94, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: -0.603, to: -0.016 } },
          { name: "Mister Dean", min: 12, pts: 4, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.4, zScores: { pts: -0.501, reb: -0.396, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.128, ftImpact: 0, to: 0.851 } },
          { name: "Cayden Vasko", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: 0.851 } }
        ]
      }
    },
      {
      id: "401920308",
      line: "Norfolk State Spartans 79 @ Georgia Tech Yellow Jackets 93 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NORF", name: "Norfolk State Spartans", score: 79,
        players: [

        ]
      },
      home: {
        abbr: "GaTec", name: "Georgia Tech Yellow Jackets", score: 93,
        players: [
          { name: "Victor Valdes", min: 26, pts: 17, reb: 3, ast: 9, stl: 1, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 9, ftm: 3, fta: 4, composite: 8.9, zScores: { pts: 1.403, reb: -0.048, ast: 4, stl: 0.386, blk: -0.493, tpm: 2.916, fgImpact: 0.695, ftImpact: 0.058, to: -0.016 } },
          { name: "Tylis Jordan", min: 38, pts: 21, reb: 5, ast: 3, stl: 2, blk: 1, to: 4, tpm: 0, fgm: 5, fga: 8, ftm: 11, fta: 16, composite: 2.69, zScores: { pts: 1.989, reb: 0.648, ast: 0.841, stl: 1.478, blk: 0.951, tpm: -0.635, fgImpact: 1.07, ftImpact: -1.034, to: -2.616 } },
          { name: "Jackson Fields", min: 23, pts: 7, reb: 5, ast: 2, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 2, fta: 3, composite: 3.57, zScores: { pts: -0.062, reb: 0.648, ast: 0.315, stl: 0.386, blk: 0.951, tpm: 0.253, fgImpact: 0.503, ftImpact: -0.273, to: 0.851 } },
          { name: "Courtland Muldrew", min: 30, pts: 16, reb: 4, ast: 5, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 7.15, zScores: { pts: 1.256, reb: 0.3, ast: 1.894, stl: -0.706, blk: -0.493, tpm: 2.916, fgImpact: 1.134, ftImpact: 0, to: 0.851 } },
          { name: "Kam Craft", min: 36, pts: 25, reb: 1, ast: 2, stl: 0, blk: 0, to: 2, tpm: 8, fgm: 8, fga: 15, ftm: 1, fta: 2, composite: 6.81, zScores: { pts: 2.574, reb: -0.744, ast: 0.315, stl: -0.706, blk: -0.493, tpm: 6.467, fgImpact: 0.887, ftImpact: -0.603, to: -0.883 } },
          { name: "Moustapha Diop", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.83, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: 0.851 } },
          { name: "Jackson McVey", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.11, zScores: { pts: -1.087, reb: -0.744, ast: -0.738, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Cody Cross", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Haiden Harper", min: 1, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -2.95, zScores: { pts: -0.794, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0.661, to: 0.851 } },
          { name: "Colby Garland", min: 11, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.93, zScores: { pts: -1.087, reb: -0.744, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: -2.616 } },
          { name: "Nasir Whitlock", min: 9, pts: 0, reb: 0, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.56, zScores: { pts: -1.087, reb: -1.092, ast: 0.841, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: -0.016 } },
          { name: "Kayden Allen", min: 6, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.08, zScores: { pts: -1.087, reb: -0.048, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.75, ftImpact: 0, to: 0.851 } },
          { name: "Kaiden Bailey", min: 12, pts: 5, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.42, zScores: { pts: -0.354, reb: -0.396, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.503, ftImpact: 0, to: -0.016 } }
        ]
      }
    },
      {
      id: "401920194",
      line: "Wagner Seahawks 65 @ Saint Joseph's Hawks 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WAG", name: "Wagner Seahawks", score: 65,
        players: [

        ]
      },
      home: {
        abbr: "StJos", name: "Saint Joseph's Hawks", score: 84,
        players: [
          { name: "Sean Logan", min: 23, pts: 15, reb: 3, ast: 0, stl: 1, blk: 2, to: 1, tpm: 0, fgm: 6, fga: 8, ftm: 3, fta: 8, composite: 0.66, zScores: { pts: 1.11, reb: -0.048, ast: -0.738, stl: 0.386, blk: 2.395, tpm: -0.635, fgImpact: 1.884, ftImpact: -3.678, to: -0.016 } },
          { name: "BJ Ranson", min: 29, pts: 16, reb: 6, ast: 1, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 6, fga: 10, ftm: 2, fta: 2, composite: 6.81, zScores: { pts: 1.256, reb: 0.996, ast: -0.212, stl: 1.478, blk: -0.493, tpm: 1.14, fgImpact: 1.134, ftImpact: 0.661, to: 0.851 } },
          { name: "Khaafiq Myers", min: 27, pts: 17, reb: 3, ast: 3, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 12, ftm: 6, fta: 7, composite: 4.04, zScores: { pts: 1.403, reb: -0.048, ast: 0.841, stl: 1.478, blk: -0.493, tpm: 0.253, fgImpact: -0.43, ftImpact: 1.049, to: -0.016 } },
          { name: "Austin Williford", min: 27, pts: 8, reb: 3, ast: 1, stl: 3, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 10, ftm: 3, fta: 5, composite: 0.01, zScores: { pts: 0.085, reb: -0.048, ast: -0.212, stl: 2.571, blk: -0.493, tpm: 0.253, fgImpact: -2.122, ftImpact: -0.876, to: 0.851 } },
          { name: "Jaiden Glover-Toscano", min: 26, pts: 7, reb: 5, ast: 2, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 5, fta: 8, composite: 1.31, zScores: { pts: -0.062, reb: 0.648, ast: 0.315, stl: 0.386, blk: 2.395, tpm: -0.635, fgImpact: -1.436, ftImpact: -1.149, to: 0.851 } },
          { name: "Davis Kemper", min: 6, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 3, fta: 4, composite: -3.06, zScores: { pts: -0.647, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0.058, to: 0.851 } },
          { name: "Keoni Sacco", min: 12, pts: 6, reb: 4, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 4, composite: -1.06, zScores: { pts: -0.208, reb: 0.3, ast: 0.315, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.503, ftImpact: -1.207, to: -0.016 } },
          { name: "Donovan Flamer", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Luis Nonfon", min: 2, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.68, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: -0.016 } },
          { name: "Will Lange", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.11, zScores: { pts: -1.087, reb: -0.744, ast: -0.738, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Mekai Johnson", min: 14, pts: 0, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 2, composite: -4.58, zScores: { pts: -1.087, reb: -0.396, ast: -0.212, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -1.125, ftImpact: -1.868, to: 0.851 } },
          { name: "Billy Rayer", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.77, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: -0.016 } },
          { name: "Logan Carey", min: 15, pts: 5, reb: 3, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 1, fta: 1, composite: -1.7, zScores: { pts: -0.354, reb: -0.048, ast: 0.841, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.622, ftImpact: 0.33, to: -0.016 } },
          { name: "Owen Verna", min: 12, pts: 7, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 4, fta: 4, composite: -1.03, zScores: { pts: -0.062, reb: -0.396, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -1.061, ftImpact: 1.322, to: 0.851 } }
        ]
      }
    },
      {
      id: "401918994",
      line: "Tennessee State Tigers 71 @ South Florida Bulls 98 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TNST", name: "Tennessee State Tigers", score: 71,
        players: [

        ]
      },
      home: {
        abbr: "SoFL", name: "South Florida Bulls", score: 98,
        players: [
          { name: "Garrett Johnson", min: 30, pts: 17, reb: 9, ast: 3, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 7, fga: 14, ftm: 0, fta: 1, composite: 5.93, zScores: { pts: 1.403, reb: 2.04, ast: 0.841, stl: 1.478, blk: -0.493, tpm: 2.028, fgImpact: 0.448, ftImpact: -0.934, to: -0.883 } },
          { name: "Zayden High", min: 24, pts: 14, reb: 5, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 5, fga: 8, ftm: 4, fta: 5, composite: 2.45, zScores: { pts: 0.963, reb: 0.648, ast: -0.212, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: 1.07, ftImpact: 0.388, to: -0.016 } },
          { name: "Chris Davis Jr.", min: 22, pts: 16, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 7, ftm: 5, fta: 5, composite: 4.09, zScores: { pts: 1.256, reb: -0.048, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 2.028, fgImpact: 0.631, ftImpact: 1.652, to: -0.016 } },
          { name: "Sonny Wilson", min: 32, pts: 22, reb: 5, ast: 6, stl: 4, blk: 0, to: 4, tpm: 1, fgm: 8, fga: 14, ftm: 5, fta: 7, composite: 7.06, zScores: { pts: 2.135, reb: 0.648, ast: 2.421, stl: 3.663, blk: -0.493, tpm: 0.253, fgImpact: 1.262, ftImpact: -0.215, to: -2.616 } },
          { name: "Mike James", min: 30, pts: 7, reb: 7, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 3, composite: -0.88, zScores: { pts: -0.062, reb: 1.344, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.567, ftImpact: -1.537, to: 0.851 } },
          { name: "Jake Feldhaus", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.9, zScores: { pts: -0.794, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.439, ftImpact: 0, to: -0.883 } },
          { name: "Richard Goods", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.087, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Reph Stevenson", min: 1, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.2, zScores: { pts: -0.794, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.064, ftImpact: 0, to: 0.851 } },
          { name: "Tiefing Diawara", min: 14, pts: 3, reb: 5, ast: 0, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -1.46, zScores: { pts: -0.647, reb: 0.648, ast: -0.738, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: 0.064, ftImpact: -0.603, to: -0.883 } },
          { name: "Jayden Johnson", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Darren Moore", min: 6, pts: 2, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.48, zScores: { pts: -0.794, reb: -0.744, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -0.311, ftImpact: 0, to: 0.851 } },
          { name: "Donovan Waleskowski", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.087, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Andrej Shoshkikj", min: 17, pts: 3, reb: 3, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: -1.98, zScores: { pts: -0.647, reb: -0.048, ast: 1.368, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -1.061, ftImpact: -0.603, to: 0.851 } },
          { name: "Josh Omojafo", min: 18, pts: 10, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 2, fta: 2, composite: -1.51, zScores: { pts: 0.378, reb: -0.744, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.256, ftImpact: 0.661, to: -0.016 } }
        ]
      }
    },
      {
      id: "401911198",
      line: "Fordham Rams 80 @ Manhattan Jaspers 61 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Ford", name: "Fordham Rams", score: 80,
        players: [
          { name: "Abass Bodija", min: 30, pts: 13, reb: 8, ast: 3, stl: 1, blk: 1, to: 4, tpm: 0, fgm: 3, fga: 6, ftm: 7, fta: 8, composite: 3.01, zScores: { pts: 0.817, reb: 1.692, ast: 0.841, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: 0.192, ftImpact: 1.379, to: -2.616 } },
          { name: "Akira Jacobs", min: 18, pts: 4, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -2.47, zScores: { pts: -0.501, reb: 0.648, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.686, ftImpact: 0.661, to: -0.016 } },
          { name: "Jack Whitbourn", min: 29, pts: 11, reb: 11, ast: 0, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 5, fga: 6, ftm: 1, fta: 2, composite: 1.6, zScores: { pts: 0.524, reb: 2.736, ast: -0.738, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: 1.82, ftImpact: -0.603, to: -1.749 } },
          { name: "Lateef Patrick Jr.", min: 32, pts: 15, reb: 6, ast: 6, stl: 0, blk: 0, to: 5, tpm: 1, fgm: 4, fga: 11, ftm: 6, fta: 6, composite: 1.21, zScores: { pts: 1.11, reb: 0.996, ast: 2.421, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -0.869, ftImpact: 1.983, to: -3.483 } },
          { name: "Hassan Koureissi", min: 27, pts: 18, reb: 5, ast: 6, stl: 1, blk: 1, to: 2, tpm: 3, fgm: 7, fga: 11, ftm: 1, fta: 1, composite: 9, zScores: { pts: 1.549, reb: 0.648, ast: 2.421, stl: 0.386, blk: 0.951, tpm: 2.028, fgImpact: 1.573, ftImpact: 0.33, to: -0.883 } },
          { name: "Frank Siaca Bey", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: 0.851 } },
          { name: "Roor Akhuar", min: 18, pts: 5, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 1, composite: -1.86, zScores: { pts: -0.354, reb: -0.396, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.128, ftImpact: -0.934, to: 0.851 } },
          { name: "Omar Essam", min: 2, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.13, zScores: { pts: -0.794, reb: -0.048, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.439, ftImpact: 0, to: 0.851 } },
          { name: "JJ Laboy", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.48, zScores: { pts: -1.087, reb: -0.744, ast: -0.738, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: 0.851 } },
          { name: "Max Miller", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Aidan Crotty", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: 0.851 } },
          { name: "Kelvin Odih", min: 22, pts: 9, reb: 4, ast: 1, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 3, fga: 6, ftm: 2, fta: 4, composite: -0.86, zScores: { pts: 0.231, reb: 0.3, ast: -0.212, stl: 0.386, blk: 0.951, tpm: 0.253, fgImpact: 0.192, ftImpact: -1.207, to: -1.749 } },
          { name: "Desmond Bellot Jr.", min: 13, pts: 3, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.79, zScores: { pts: -0.647, reb: -1.092, ast: -0.738, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: -0.311, ftImpact: 0, to: 0.851 } }
        ]
      },
      home: {
        abbr: "MAN", name: "Manhattan Jaspers", score: 61,
        players: [

        ]
      }
    },
      {
      id: "401911019",
      line: "Central Michigan Chippewas 63 @ Dayton Flyers 88 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CMU", name: "Central Michigan Chippewas", score: 63,
        players: [

        ]
      },
      home: {
        abbr: "Dayt", name: "Dayton Flyers", score: 88,
        players: [
          { name: "Grant Randall", min: 24, pts: 0, reb: 2, ast: 2, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.1, zScores: { pts: -1.087, reb: -0.396, ast: 0.315, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: -0.75, ftImpact: 0, to: -0.883 } },
          { name: "Amal L'Etang", min: 20, pts: 15, reb: 2, ast: 2, stl: 1, blk: 2, to: 2, tpm: 1, fgm: 7, fga: 11, ftm: 0, fta: 1, composite: 3.82, zScores: { pts: 1.11, reb: -0.396, ast: 0.315, stl: 0.386, blk: 2.395, tpm: 0.253, fgImpact: 1.573, ftImpact: -0.934, to: -0.883 } },
          { name: "Tristian Ford", min: 29, pts: 19, reb: 5, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 8, fga: 9, ftm: 1, fta: 2, composite: 7.08, zScores: { pts: 1.696, reb: 0.648, ast: 0.315, stl: 0.386, blk: -0.493, tpm: 1.14, fgImpact: 3.137, ftImpact: -0.603, to: 0.851 } },
          { name: "Landen Joseph", min: 28, pts: 11, reb: 3, ast: 4, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 4, fga: 5, ftm: 0, fta: 1, composite: 1.37, zScores: { pts: 0.524, reb: -0.048, ast: 1.368, stl: -0.706, blk: -0.493, tpm: 2.028, fgImpact: 1.381, ftImpact: -0.934, to: -1.749 } },
          { name: "Aiden Derkack", min: 29, pts: 16, reb: 8, ast: 3, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 5, fga: 6, ftm: 6, fta: 7, composite: 8.66, zScores: { pts: 1.256, reb: 1.692, ast: 0.841, stl: 2.571, blk: 0.951, tpm: -0.635, fgImpact: 1.82, ftImpact: 1.049, to: -0.883 } },
          { name: "Cody Peck", min: 7, pts: 1, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -3.32, zScores: { pts: -0.94, reb: -0.744, ast: -0.738, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: -0.75, ftImpact: -0.603, to: 0.851 } },
          { name: "Damon Friery", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Jaiun Simon", min: 15, pts: 2, reb: 0, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.22, zScores: { pts: -0.794, reb: -1.092, ast: 0.315, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.064, ftImpact: 0, to: -0.883 } },
          { name: "Malcolm Thomas", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Jalen Haynes", min: 17, pts: 11, reb: 2, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 5, fta: 6, composite: 1.99, zScores: { pts: 0.524, reb: -0.396, ast: 0.841, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.192, ftImpact: 0.718, to: 0.851 } },
          { name: "Julian Washington", min: 9, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.05, zScores: { pts: -1.087, reb: -0.396, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: 0.851 } },
          { name: "Jaron McKie", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.77, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: -0.016 } },
          { name: "Travis Perry", min: 14, pts: 13, reb: 0, ast: 1, stl: 0, blk: 1, to: 2, tpm: 4, fgm: 4, fga: 5, ftm: 1, fta: 1, composite: 3.5, zScores: { pts: 0.817, reb: -1.092, ast: -0.212, stl: -0.706, blk: 0.951, tpm: 2.916, fgImpact: 1.381, ftImpact: 0.33, to: -0.883 } }
        ]
      }
    },
      {
      id: "401909729",
      line: "Monmouth Hawks 76 @ Wake Forest Demon Deacons 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "MONM", name: "Monmouth Hawks", score: 76,
        players: [

        ]
      },
      home: {
        abbr: "Wake", name: "Wake Forest Demon Deacons", score: 81,
        players: [
          { name: "Gavin Placide", min: 39, pts: 22, reb: 10, ast: 0, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 7, fga: 11, ftm: 8, fta: 11, composite: 4.15, zScores: { pts: 2.135, reb: 2.388, ast: -0.738, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: 1.573, ftImpact: -0.158, to: -1.749 } },
          { name: "Antonio Dorn", min: 5, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -2.97, zScores: { pts: -0.794, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0.661, to: 0.851 } },
          { name: "Kevair Kennedy", min: 35, pts: 23, reb: 3, ast: 2, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 7, fga: 13, ftm: 9, fta: 10, composite: 2.92, zScores: { pts: 2.281, reb: -0.048, ast: 0.315, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.823, ftImpact: 2.04, to: -1.749 } },
          { name: "Justin Ray", min: 26, pts: 7, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 2, fta: 2, composite: -0.53, zScores: { pts: -0.062, reb: -0.048, ast: -0.212, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: -0.997, ftImpact: 0.661, to: -0.016 } },
          { name: "Jamari McDowell", min: 22, pts: 5, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 3, composite: -4.08, zScores: { pts: -0.354, reb: -0.744, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.247, ftImpact: -1.537, to: 0.851 } },
          { name: "Xander Pintelon", min: 5, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -4.38, zScores: { pts: -0.94, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: -0.603, to: 0.851 } },
          { name: "Ring Nyeri", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: 0.851 } },
          { name: "Gallagher Placide", min: 20, pts: 8, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 1, composite: -1.78, zScores: { pts: 0.085, reb: 0.648, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 1.006, ftImpact: -0.934, to: -0.016 } },
          { name: "Justin Abson", min: 8, pts: 1, reb: 5, ast: 0, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 0, fga: 2, ftm: 1, fta: 2, composite: -3.66, zScores: { pts: -0.94, reb: 0.648, ast: -0.738, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: -0.75, ftImpact: -0.603, to: -0.883 } },
          { name: "Lukas Bojovic", min: 3, pts: 1, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -3.48, zScores: { pts: -0.94, reb: -0.744, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: -0.603, to: 0.851 } },
          { name: "Isaac Carr", min: 33, pts: 11, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 10, ftm: 2, fta: 2, composite: -0.36, zScores: { pts: 0.524, reb: -0.744, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -0.494, ftImpact: 0.661, to: 0.851 } }
        ]
      }
    },
      {
      id: "401909708",
      line: "Villanova Wildcats 61 @ Pittsburgh Panthers 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Vill", name: "Villanova Wildcats", score: 61,
        players: [
          { name: "Devin Royal", min: 38, pts: 11, reb: 7, ast: 3, stl: 1, blk: 1, to: 1, tpm: 3, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 5.56, zScores: { pts: 0.524, reb: 1.344, ast: 0.841, stl: 0.386, blk: 0.951, tpm: 2.028, fgImpact: -0.494, ftImpact: 0, to: -0.016 } },
          { name: "Luigi Suigo", min: 22, pts: 6, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -0.79, zScores: { pts: -0.208, reb: 0.648, ast: 0.315, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.558, ftImpact: 0, to: 0.851 } },
          { name: "Tyler Perkins", min: 37, pts: 19, reb: 7, ast: 2, stl: 2, blk: 0, to: 4, tpm: 2, fgm: 8, fga: 16, ftm: 1, fta: 3, composite: 1.84, zScores: { pts: 1.696, reb: 1.344, ast: 0.315, stl: 1.478, blk: -0.493, tpm: 1.14, fgImpact: 0.512, ftImpact: -1.537, to: -2.616 } },
          { name: "Jake Fiegen", min: 28, pts: 9, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 0.25, zScores: { pts: 0.231, reb: -0.744, ast: -0.212, stl: 0.386, blk: -0.493, tpm: 2.028, fgImpact: -0.933, ftImpact: 0, to: -0.016 } },
          { name: "Elijah Crawford", min: 33, pts: 8, reb: 1, ast: 5, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 2, fga: 11, ftm: 2, fta: 2, composite: -2.41, zScores: { pts: 0.085, reb: -0.744, ast: 1.894, stl: -0.706, blk: -0.493, tpm: 1.14, fgImpact: -2.497, ftImpact: 0.661, to: -1.749 } },
          { name: "Kwame Evans Jr.", min: 17, pts: 5, reb: 4, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 1, fta: 2, composite: -1.33, zScores: { pts: -0.354, reb: 0.3, ast: -0.738, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: -0.622, ftImpact: -0.603, to: -0.016 } },
          { name: "Nico Onyekwere", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.087, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Adam Oumiddoch", min: 16, pts: 3, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.61, zScores: { pts: -0.647, reb: 0.3, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.439, ftImpact: 0, to: -0.016 } },
          { name: "Carter Fisk", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.63, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: -0.883 } }
        ]
      },
      home: {
        abbr: "Pitt", name: "Pittsburgh Panthers", score: 81,
        players: [
          { name: "Akir Souare", min: 15, pts: 1, reb: 3, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -1.64, zScores: { pts: -0.94, reb: -0.048, ast: -0.738, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: 0, ftImpact: -0.603, to: -0.016 } },
          { name: "Baye Ndongo", min: 32, pts: 31, reb: 14, ast: 0, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 14, fga: 19, ftm: 1, fta: 1, composite: 12.34, zScores: { pts: 3.453, reb: 3.78, ast: -0.738, stl: 1.478, blk: -0.493, tpm: 1.14, fgImpact: 4.271, ftImpact: 0.33, to: -0.883 } },
          { name: "Naithan George", min: 38, pts: 14, reb: 2, ast: 13, stl: 4, blk: 0, to: 2, tpm: 2, fgm: 6, fga: 14, ftm: 0, fta: 0, composite: 9.73, zScores: { pts: 0.963, reb: -0.396, ast: 6.107, stl: 3.663, blk: -0.493, tpm: 1.14, fgImpact: -0.366, ftImpact: 0, to: -0.883 } },
          { name: "A'lahn Sumler", min: 8, pts: 0, reb: 0, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.61, zScores: { pts: -1.087, reb: -1.092, ast: 0.315, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -1.125, ftImpact: 0, to: -0.883 } },
          { name: "Jonathan Powell", min: 40, pts: 11, reb: 3, ast: 3, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: 2.48, zScores: { pts: 0.524, reb: -0.048, ast: 0.841, stl: 1.478, blk: -0.493, tpm: 0.253, fgImpact: -0.055, ftImpact: 0, to: -0.016 } },
          { name: "Chase Foster", min: 29, pts: 9, reb: 8, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 2.44, zScores: { pts: 0.231, reb: 1.692, ast: -0.738, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: 0.256, ftImpact: 0, to: 0.851 } },
          { name: "Armani Mighty", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.79, zScores: { pts: -1.087, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: -0.016 } },
          { name: "Jalil Bethea", min: 34, pts: 15, reb: 5, ast: 1, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 4, fga: 8, ftm: 4, fta: 4, composite: 6.25, zScores: { pts: 1.11, reb: 0.648, ast: -0.212, stl: -0.706, blk: 0.951, tpm: 2.028, fgImpact: 0.256, ftImpact: 1.322, to: 0.851 } }
        ]
      }
    },
      {
      id: "401909697",
      line: "Ball State Cardinals 71 @ Florida State Seminoles 85 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BALL", name: "Ball State Cardinals", score: 71,
        players: [

        ]
      },
      home: {
        abbr: "FSU", name: "Florida State Seminoles", score: 85,
        players: [
          { name: "Cooper Schwieger", min: 17, pts: 4, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -2.07, zScores: { pts: -0.501, reb: 0.3, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.439, ftImpact: -0.603, to: -0.016 } },
          { name: "Sebastian Rancik", min: 33, pts: 18, reb: 4, ast: 3, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 3, fga: 7, ftm: 12, fta: 14, composite: 3.56, zScores: { pts: 1.549, reb: 0.3, ast: 0.841, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: -0.183, ftImpact: 2.098, to: -1.749 } },
          { name: "Shon Abaev", min: 34, pts: 16, reb: 3, ast: 4, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 5, fga: 11, ftm: 5, fta: 6, composite: 3.08, zScores: { pts: 1.256, reb: -0.048, ast: 1.368, stl: 0.386, blk: 0.951, tpm: 0.253, fgImpact: -0.055, ftImpact: 0.718, to: -1.749 } },
          { name: "Marcis Ponder", min: 24, pts: 11, reb: 16, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 5, fga: 7, ftm: 1, fta: 2, composite: 7.01, zScores: { pts: 0.524, reb: 4.476, ast: -0.738, stl: -0.706, blk: 2.395, tpm: -0.635, fgImpact: 1.445, ftImpact: -0.603, to: 0.851 } },
          { name: "Kam Taylor", min: 32, pts: 6, reb: 2, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 7, ftm: 4, fta: 4, composite: -0.71, zScores: { pts: -0.208, reb: -0.396, ast: 1.368, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -1.811, ftImpact: 1.322, to: 0.851 } },
          { name: "Alex Steen", min: 16, pts: 11, reb: 5, ast: 1, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 4, ftm: 3, fta: 4, composite: 5.42, zScores: { pts: 0.524, reb: 0.648, ast: -0.212, stl: 1.478, blk: 0.951, tpm: -0.635, fgImpact: 1.756, ftImpact: 0.058, to: 0.851 } },
          { name: "Elisee Assui", min: 24, pts: 12, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 2.54, zScores: { pts: 0.671, reb: -1.092, ast: -0.212, stl: 0.386, blk: -0.493, tpm: 1.14, fgImpact: 0.631, ftImpact: 0.661, to: 0.851 } },
          { name: "Martay Barnes", min: 10, pts: 2, reb: 3, ast: 2, stl: 2, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -0.79, zScores: { pts: -0.794, reb: -0.048, ast: 0.315, stl: 1.478, blk: 0.951, tpm: -0.635, fgImpact: -0.311, ftImpact: 0, to: -1.749 } },
          { name: "Brandon Bass Jr.", min: 10, pts: 5, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -1.58, zScores: { pts: -0.354, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -0.311, ftImpact: 0.661, to: 0.851 } }
        ]
      }
    },
      {
      id: "401909544",
      line: "Cleveland State Vikings 67 @ Xavier Musketeers 75 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CLE", name: "Cleveland State Vikings", score: 67,
        players: [

        ]
      },
      home: {
        abbr: "Xav", name: "Xavier Musketeers", score: 75,
        players: [
          { name: "Filip Borovicanin", min: 29, pts: 8, reb: 3, ast: 6, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 1.46, zScores: { pts: 0.085, reb: -0.048, ast: 2.421, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.192, ftImpact: 0.661, to: -0.016 } },
          { name: "Jovan Milicevic", min: 31, pts: 8, reb: 3, ast: 2, stl: 4, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 12, ftm: 1, fta: 1, composite: 1.16, zScores: { pts: 0.085, reb: -0.048, ast: 0.315, stl: 3.663, blk: -0.493, tpm: 0.253, fgImpact: -2.058, ftImpact: 0.33, to: -0.883 } },
          { name: "Mike Nwoko", min: 30, pts: 19, reb: 10, ast: 3, stl: 2, blk: 2, to: 2, tpm: 0, fgm: 6, fga: 6, ftm: 7, fta: 8, composite: 11.29, zScores: { pts: 1.696, reb: 2.388, ast: 0.841, stl: 1.478, blk: 2.395, tpm: -0.635, fgImpact: 2.634, ftImpact: 1.379, to: -0.883 } },
          { name: "Ruben Dominguez", min: 22, pts: 9, reb: 1, ast: 4, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 1.6, zScores: { pts: 0.231, reb: -0.744, ast: 1.368, stl: -0.706, blk: -0.493, tpm: 2.028, fgImpact: -0.933, ftImpact: 0, to: 0.851 } },
          { name: "Tru Washington", min: 34, pts: 12, reb: 4, ast: 2, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 15, ftm: 1, fta: 4, composite: -0.43, zScores: { pts: 0.671, reb: 0.3, ast: 0.315, stl: 2.571, blk: -0.493, tpm: 0.253, fgImpact: -1.555, ftImpact: -2.471, to: -0.016 } },
          { name: "Rolyns Aligbe", min: 13, pts: 6, reb: 2, ast: 0, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: 0.13, zScores: { pts: -0.208, reb: -0.396, ast: -0.738, stl: 0.386, blk: 0.951, tpm: 0.253, fgImpact: 0.503, ftImpact: -0.603, to: -0.016 } },
          { name: "Gabriel Pozzato", min: 18, pts: 6, reb: 2, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: 0.42, zScores: { pts: -0.208, reb: -0.396, ast: -0.212, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: -0.622, ftImpact: 0.661, to: 0.851 } },
          { name: "Nikos Chitikoudis", min: 6, pts: 2, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.68, zScores: { pts: -0.794, reb: -0.048, ast: -0.738, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: 0.439, ftImpact: 0, to: 0.851 } },
          { name: "Kalek House", min: 9, pts: 3, reb: 1, ast: 1, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -0.72, zScores: { pts: -0.647, reb: -0.744, ast: -0.212, stl: 0.386, blk: 0.951, tpm: 0.253, fgImpact: -0.686, ftImpact: 0, to: -0.016 } },
          { name: "Chance Westry", min: 8, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 4, composite: -4.49, zScores: { pts: -0.794, reb: -0.396, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: -1.207, to: 0.851 } }
        ]
      }
    },
      {
      id: "401909535",
      line: "Sacred Heart Pioneers 67 @ Providence Friars 86 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SHU", name: "Sacred Heart Pioneers", score: 67,
        players: [

        ]
      },
      home: {
        abbr: "Prov", name: "Providence Friars", score: 86,
        players: [
          { name: "Clyde Walters", min: 27, pts: 7, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 3, composite: -3.02, zScores: { pts: -0.062, reb: -0.396, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -0.247, ftImpact: -0.273, to: -0.883 } },
          { name: "Jacob Bannarbie", min: 10, pts: 4, reb: 4, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.78, zScores: { pts: -0.501, reb: 0.3, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.878, ftImpact: 0, to: -0.883 } },
          { name: "Arrinten Page", min: 21, pts: 18, reb: 7, ast: 2, stl: 0, blk: 2, to: 1, tpm: 2, fgm: 7, fga: 11, ftm: 2, fta: 4, composite: 6.39, zScores: { pts: 1.549, reb: 1.344, ast: 0.315, stl: -0.706, blk: 2.395, tpm: 1.14, fgImpact: 1.573, ftImpact: -1.207, to: -0.016 } },
          { name: "Miles Byrd", min: 34, pts: 14, reb: 3, ast: 6, stl: 3, blk: 2, to: 3, tpm: 2, fgm: 6, fga: 12, ftm: 0, fta: 0, composite: 8.08, zScores: { pts: 0.963, reb: -0.048, ast: 2.421, stl: 2.571, blk: 2.395, tpm: 1.14, fgImpact: 0.384, ftImpact: 0, to: -1.749 } },
          { name: "Gavin Hightower", min: 23, pts: 1, reb: 5, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -2.73, zScores: { pts: -0.94, reb: 0.648, ast: -0.212, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: -0.603, to: -0.883 } },
          { name: "Leonardo Marangon", min: 15, pts: 12, reb: 4, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 2.77, zScores: { pts: 0.671, reb: 0.3, ast: 0.315, stl: -0.706, blk: -0.493, tpm: 1.14, fgImpact: 0.695, ftImpact: 0, to: 0.851 } },
          { name: "Javon Bardwell", min: 9, pts: 3, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -2.61, zScores: { pts: -0.647, reb: 0.3, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.064, ftImpact: -0.603, to: 0.851 } },
          { name: "Samson Aletan", min: 14, pts: 6, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 1, composite: -2.28, zScores: { pts: -0.208, reb: -0.396, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 1.317, ftImpact: -0.934, to: -0.016 } },
          { name: "Ryan Sabol", min: 18, pts: 7, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 4, fta: 6, composite: -2.47, zScores: { pts: -0.062, reb: -1.092, ast: -0.212, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: -0.686, ftImpact: -0.546, to: -0.016 } },
          { name: "Malik Mack", min: 29, pts: 14, reb: 1, ast: 6, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 6, ftm: 4, fta: 4, composite: 4.89, zScores: { pts: 0.963, reb: -0.744, ast: 2.421, stl: -0.706, blk: -0.493, tpm: 1.14, fgImpact: 1.006, ftImpact: 1.322, to: -0.016 } }
        ]
      }
    },
      {
      id: "401902279",
      line: "Western Carolina Catamounts 64 @ Butler Bulldogs 89 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WCU", name: "Western Carolina Catamounts", score: 64,
        players: [

        ]
      },
      home: {
        abbr: "Butl", name: "Butler Bulldogs", score: 89,
        players: [
          { name: "Asim Djulovic", min: 26, pts: 17, reb: 8, ast: 3, stl: 1, blk: 2, to: 2, tpm: 3, fgm: 6, fga: 10, ftm: 2, fta: 2, composite: 9.66, zScores: { pts: 1.403, reb: 1.692, ast: 0.841, stl: 0.386, blk: 2.395, tpm: 2.028, fgImpact: 1.134, ftImpact: 0.661, to: -0.883 } },
          { name: "Samis Calderon", min: 20, pts: 9, reb: 2, ast: 1, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 2.82, zScores: { pts: 0.231, reb: -0.396, ast: -0.212, stl: -0.706, blk: 0.951, tpm: 2.028, fgImpact: 0.942, ftImpact: 0, to: -0.016 } },
          { name: "Drayton Jones", min: 20, pts: 4, reb: 8, ast: 2, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 4, fta: 4, composite: 4.38, zScores: { pts: -0.501, reb: 1.692, ast: 0.315, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: 0, ftImpact: 1.322, to: 0.851 } },
          { name: "Eduardo Klafke", min: 28, pts: 11, reb: 4, ast: 6, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 10, ftm: 1, fta: 1, composite: 4.32, zScores: { pts: 0.524, reb: 0.3, ast: 2.421, stl: 1.478, blk: -0.493, tpm: 1.14, fgImpact: -0.494, ftImpact: 0.33, to: -0.883 } },
          { name: "Jalen Jackson", min: 27, pts: 17, reb: 4, ast: 3, stl: 3, blk: 0, to: 3, tpm: 3, fgm: 6, fga: 11, ftm: 2, fta: 3, composite: 5.39, zScores: { pts: 1.403, reb: 0.3, ast: 0.841, stl: 2.571, blk: -0.493, tpm: 2.028, fgImpact: 0.759, ftImpact: -0.273, to: -1.749 } },
          { name: "Treyson Anderson", min: 21, pts: 4, reb: 7, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 8, ftm: 2, fta: 2, composite: -3.08, zScores: { pts: -0.501, reb: 1.344, ast: 0.315, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -2.186, ftImpact: 0.661, to: -0.883 } },
          { name: "Christian Moore", min: 2, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.51, zScores: { pts: -0.647, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.064, ftImpact: 0, to: 0.851 } },
          { name: "Herly Brutus", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Kevin Ndzie", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.087, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Samu Adler", min: 22, pts: 13, reb: 3, ast: 2, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 7, ftm: 3, fta: 3, composite: 2.86, zScores: { pts: 0.817, reb: -0.048, ast: 0.315, stl: 0.386, blk: -0.493, tpm: 1.14, fgImpact: 0.631, ftImpact: 0.991, to: -0.883 } },
          { name: "Baron Walker", min: 8, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.77, zScores: { pts: -0.794, reb: -1.092, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.686, ftImpact: 0, to: 0.851 } },
          { name: "Jordan Ellerbee", min: 22, pts: 9, reb: 2, ast: 2, stl: 2, blk: 2, to: 0, tpm: 1, fgm: 3, fga: 9, ftm: 2, fta: 3, composite: 3.92, zScores: { pts: 0.231, reb: -0.396, ast: 0.315, stl: 1.478, blk: 2.395, tpm: 0.253, fgImpact: -0.933, ftImpact: -0.273, to: 0.851 } }
        ]
      }
    },
      {
      id: "401919018",
      line: "Florida International Panthers 82 @ UAB Blazers 94 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "FIU", name: "Florida International Panthers", score: 82,
        players: [

        ]
      },
      home: {
        abbr: "UAB", name: "UAB Blazers", score: 94,
        players: [
          { name: "Aleks Alston", min: 30, pts: 15, reb: 11, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 6, fga: 9, ftm: 1, fta: 2, composite: 6.77, zScores: { pts: 1.11, reb: 2.736, ast: -0.212, stl: -0.706, blk: 0.951, tpm: 1.14, fgImpact: 1.509, ftImpact: -0.603, to: 0.851 } },
          { name: "Jeremy Elyzee", min: 33, pts: 11, reb: 5, ast: 3, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 5, fga: 7, ftm: 1, fta: 2, composite: 4.41, zScores: { pts: 0.524, reb: 0.648, ast: 0.841, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: 1.445, ftImpact: -0.603, to: 0.851 } },
          { name: "Salim London", min: 31, pts: 13, reb: 5, ast: 6, stl: 3, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 12, ftm: 3, fta: 4, composite: 5.03, zScores: { pts: 0.817, reb: 0.648, ast: 2.421, stl: 2.571, blk: -0.493, tpm: 1.14, fgImpact: -1.244, ftImpact: 0.058, to: -0.883 } },
          { name: "Justyn Fernandez", min: 18, pts: 12, reb: 4, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: 3.11, zScores: { pts: 0.671, reb: 0.3, ast: 0.315, stl: 0.386, blk: -0.493, tpm: 1.14, fgImpact: -0.055, ftImpact: 0, to: 0.851 } },
          { name: "Deuce Jones", min: 27, pts: 18, reb: 3, ast: 6, stl: 1, blk: 0, to: 4, tpm: 1, fgm: 6, fga: 11, ftm: 5, fta: 7, composite: 1.99, zScores: { pts: 1.549, reb: -0.048, ast: 2.421, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: 0.759, ftImpact: -0.215, to: -2.616 } },
          { name: "Matt Mbole", min: 13, pts: 5, reb: 8, ast: 0, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 3, fta: 4, composite: 2.87, zScores: { pts: -0.354, reb: 1.692, ast: -0.738, stl: 1.478, blk: 0.951, tpm: -0.635, fgImpact: 0.439, ftImpact: 0.058, to: -0.016 } },
          { name: "Elijah Duval", min: 20, pts: 15, reb: 2, ast: 4, stl: 2, blk: 0, to: 4, tpm: 1, fgm: 6, fga: 9, ftm: 2, fta: 2, composite: 2.87, zScores: { pts: 1.11, reb: -0.396, ast: 1.368, stl: 1.478, blk: -0.493, tpm: 0.253, fgImpact: 1.509, ftImpact: 0.661, to: -2.616 } },
          { name: "Korie Corbett", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.21, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: -0.75, ftImpact: 0, to: 0.851 } },
          { name: "T.J. Caldwell", min: 20, pts: 5, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 7, ftm: 2, fta: 3, composite: -3.13, zScores: { pts: -0.354, reb: -0.048, ast: 0.315, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -1.811, ftImpact: -0.273, to: -0.016 } }
        ]
      }
    },
      {
      id: "401927388",
      line: "Lindenwood Lions 74 @ Northern Iowa Panthers 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LIN", name: "Lindenwood Lions", score: 74,
        players: [

        ]
      },
      home: {
        abbr: "NrthIA", name: "Northern Iowa Panthers", score: 81,
        players: [
          { name: "Kyle Pock", min: 25, pts: 10, reb: 5, ast: 0, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 1, fta: 1, composite: 2.24, zScores: { pts: 0.378, reb: 0.648, ast: -0.738, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: 0.631, ftImpact: 0.33, to: 0.851 } },
          { name: "Ian Smikle", min: 12, pts: 6, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 5, composite: -2.89, zScores: { pts: -0.208, reb: 0.3, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.878, ftImpact: -2.14, to: 0.851 } },
          { name: "Carson Vis", min: 32, pts: 15, reb: 3, ast: 1, stl: 2, blk: 1, to: 2, tpm: 2, fgm: 6, fga: 12, ftm: 1, fta: 1, composite: 4.25, zScores: { pts: 1.11, reb: -0.048, ast: -0.212, stl: 1.478, blk: 0.951, tpm: 1.14, fgImpact: 0.384, ftImpact: 0.33, to: -0.883 } },
          { name: "Greyson Uelmen", min: 31, pts: 19, reb: 3, ast: 8, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 7, ftm: 10, fta: 11, composite: 6.52, zScores: { pts: 1.696, reb: -0.048, ast: 3.474, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: 0.631, ftImpact: 2.371, to: -1.749 } },
          { name: "Tate McCubbin", min: 23, pts: 1, reb: 2, ast: 0, stl: 4, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 1, fta: 2, composite: 0.16, zScores: { pts: -0.94, reb: -0.396, ast: -0.738, stl: 3.663, blk: 0.951, tpm: -0.635, fgImpact: -1.125, ftImpact: -0.603, to: -0.016 } },
          { name: "Will Gerdes", min: 12, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -3.37, zScores: { pts: -0.501, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -1.061, ftImpact: 0.661, to: 0.851 } },
          { name: "Jules Isebaert", min: 5, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.087, reb: -1.092, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.75, ftImpact: 0, to: 0.851 } },
          { name: "Isaiah Johnson-Arigu", min: 15, pts: 11, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 6, ftm: 6, fta: 6, composite: 0.48, zScores: { pts: 0.524, reb: 0.3, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -0.622, ftImpact: 1.983, to: -0.016 } },
          { name: "Jalen Wilson", min: 14, pts: 0, reb: 2, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -2.15, zScores: { pts: -1.087, reb: -0.396, ast: -0.738, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: -1.125, ftImpact: 0, to: 0.851 } },
          { name: "Levi Valdo", min: 11, pts: 3, reb: 0, ast: 0, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -3.55, zScores: { pts: -0.647, reb: -1.092, ast: -0.738, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: 0.064, ftImpact: -0.603, to: -0.883 } },
          { name: "Geon Hutchins", min: 20, pts: 12, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 4, fta: 7, composite: -2.24, zScores: { pts: 0.671, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 1.381, ftImpact: -1.48, to: 0.851 } }
        ]
      }
    },
      {
      id: "401921106",
      line: "Bellarmine Knights 59 @ Illinois State Redbirds 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BELL", name: "Bellarmine Knights", score: 59,
        players: [

        ]
      },
      home: {
        abbr: "IlSt", name: "Illinois State Redbirds", score: 76,
        players: [
          { name: "Noah Cleveland", min: 26, pts: 9, reb: 8, ast: 1, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 4, fga: 5, ftm: 1, fta: 3, composite: 3.17, zScores: { pts: 0.231, reb: 1.692, ast: -0.212, stl: -0.706, blk: 3.839, tpm: -0.635, fgImpact: 1.381, ftImpact: -1.537, to: -0.883 } },
          { name: "Chase Walker", min: 26, pts: 17, reb: 7, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 7, ftm: 9, fta: 9, composite: 3.42, zScores: { pts: 1.403, reb: 1.344, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.631, ftImpact: 2.974, to: -0.883 } },
          { name: "Mason Klabo", min: 33, pts: 11, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 9, ftm: 2, fta: 2, composite: 2.03, zScores: { pts: 0.524, reb: -0.744, ast: 0.841, stl: -0.706, blk: -0.493, tpm: 2.028, fgImpact: -0.933, ftImpact: 0.661, to: 0.851 } },
          { name: "Johnny Kinziger", min: 35, pts: 9, reb: 0, ast: 4, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: 3.06, zScores: { pts: 0.231, reb: -1.092, ast: 1.368, stl: 1.478, blk: -0.493, tpm: 2.028, fgImpact: -1.308, ftImpact: 0, to: 0.851 } },
          { name: "Malik Messina-Moore", min: 36, pts: 20, reb: 14, ast: 7, stl: 0, blk: 0, to: 3, tpm: 4, fgm: 7, fga: 14, ftm: 2, fta: 3, composite: 8.71, zScores: { pts: 1.842, reb: 3.78, ast: 2.947, stl: -0.706, blk: -0.493, tpm: 2.916, fgImpact: 0.448, ftImpact: -0.273, to: -1.749 } },
          { name: "Nick Allen", min: 13, pts: 5, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 1, composite: -1.73, zScores: { pts: -0.354, reb: -1.092, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.878, ftImpact: 0.33, to: -0.016 } },
          { name: "Louie Semona III", min: 13, pts: 3, reb: 5, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 1, composite: -3.06, zScores: { pts: -0.647, reb: 0.648, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.064, ftImpact: 0.33, to: -0.883 } },
          { name: "Jordan Williams", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.54, zScores: { pts: -0.794, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.064, ftImpact: 0, to: 0.851 } },
          { name: "Zaxton King", min: 13, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.12, zScores: { pts: -1.087, reb: -1.092, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.75, ftImpact: 0, to: 0.851 } },
          { name: "Deng Garang", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } }
        ]
      }
    },
      {
      id: "401921097",
      line: "Texas A&M-Corpus Christi Islanders 74 @ Rice Owls 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "AMCC", name: "Texas A&M-Corpus Christi Islanders", score: 74,
        players: [

        ]
      },
      home: {
        abbr: "Rice", name: "Rice Owls", score: 81,
        players: [
          { name: "Eternity Eguagie", min: 25, pts: 11, reb: 2, ast: 3, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 4, fga: 7, ftm: 2, fta: 5, composite: 0.17, zScores: { pts: 0.524, reb: -0.396, ast: 0.841, stl: 0.386, blk: 0.951, tpm: 0.253, fgImpact: 0.631, ftImpact: -2.14, to: -0.883 } },
          { name: "Jimmy Oladokun Jr.", min: 28, pts: 13, reb: 7, ast: 4, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 6, fga: 8, ftm: 1, fta: 3, composite: 6.87, zScores: { pts: 0.817, reb: 1.344, ast: 1.368, stl: 0.386, blk: 2.395, tpm: -0.635, fgImpact: 1.884, ftImpact: -1.537, to: 0.851 } },
          { name: "Jaxson Thompson", min: 28, pts: 7, reb: 1, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 12, ftm: 1, fta: 2, composite: -5, zScores: { pts: -0.062, reb: -0.744, ast: 0.315, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -2.058, ftImpact: -0.603, to: -0.016 } },
          { name: "Carmelo Adkins", min: 30, pts: 18, reb: 3, ast: 1, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 11, ftm: 6, fta: 7, composite: 0.47, zScores: { pts: 1.549, reb: -0.048, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 1.14, fgImpact: -0.055, ftImpact: 1.049, to: -1.749 } },
          { name: "Jacob Dar", min: 29, pts: 16, reb: 8, ast: 0, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 10, ftm: 5, fta: 5, composite: 6.27, zScores: { pts: 1.256, reb: 1.692, ast: -0.738, stl: 1.478, blk: -0.493, tpm: 0.253, fgImpact: 0.32, ftImpact: 1.652, to: 0.851 } },
          { name: "Zalan Flasar", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: 0.851 } },
          { name: "Alexander Leeth", min: 8, pts: 2, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.78, zScores: { pts: -0.794, reb: 0.3, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.439, ftImpact: 0, to: 0.851 } },
          { name: "Jarne Elouna Eyenga", min: 8, pts: 0, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.51, zScores: { pts: -1.087, reb: 0.3, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Tristan Vukotic", min: 12, pts: 9, reb: 3, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 7, fta: 8, composite: 1.32, zScores: { pts: 0.231, reb: -0.048, ast: -0.738, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: -1.061, ftImpact: 1.379, to: 0.851 } },
          { name: "Kaiden Myers", min: 14, pts: 5, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.58, zScores: { pts: -0.354, reb: -0.744, ast: -0.738, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: 0.128, ftImpact: 0, to: -0.016 } },
          { name: "Dallas Hobbs", min: 14, pts: 0, reb: 0, ast: 5, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.38, zScores: { pts: -1.087, reb: -1.092, ast: 1.894, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: -0.883 } }
        ]
      }
    },
      {
      id: "401919783",
      line: "Le Moyne Dolphins 65 @ Evansville Purple Aces 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "LEM", name: "Le Moyne Dolphins", score: 65,
        players: [

        ]
      },
      home: {
        abbr: "Evans", name: "Evansville Purple Aces", score: 79,
        players: [
          { name: "Gustav Winther", min: 27, pts: 9, reb: 8, ast: 0, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 4, fga: 6, ftm: 1, fta: 2, composite: 1.76, zScores: { pts: 0.231, reb: 1.692, ast: -0.738, stl: -0.706, blk: 2.395, tpm: -0.635, fgImpact: 1.006, ftImpact: -0.603, to: -0.883 } },
          { name: "Aaron Gutman", min: 23, pts: 4, reb: 0, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.34, zScores: { pts: -0.501, reb: -1.092, ast: -0.212, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: 0.128, ftImpact: 0, to: -0.016 } },
          { name: "Bryce Quinet", min: 33, pts: 20, reb: 3, ast: 11, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 7, fga: 13, ftm: 6, fta: 6, composite: 5.2, zScores: { pts: 1.842, reb: -0.048, ast: 5.054, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.823, ftImpact: 1.983, to: -2.616 } },
          { name: "Max Langenfeld", min: 29, pts: 6, reb: 7, ast: 1, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 12, ftm: 0, fta: 0, composite: -0.71, zScores: { pts: -0.208, reb: 1.344, ast: -0.212, stl: 1.478, blk: -0.493, tpm: 1.14, fgImpact: -2.872, ftImpact: 0, to: -0.883 } },
          { name: "Makuei Riek", min: 33, pts: 13, reb: 9, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 12, ftm: 3, fta: 4, composite: 1.91, zScores: { pts: 0.817, reb: 2.04, ast: 0.315, stl: -0.706, blk: -0.493, tpm: 1.14, fgImpact: -1.244, ftImpact: 0.058, to: -0.016 } },
          { name: "Bryce Renn", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Jake Genschaw", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Yannick Pinas", min: 12, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.85, zScores: { pts: -0.794, reb: -0.396, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.064, ftImpact: 0, to: 0.851 } },
          { name: "David Nejezchleb", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Caden Symons", min: 25, pts: 21, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 7, fga: 11, ftm: 2, fta: 2, composite: 6.9, zScores: { pts: 1.989, reb: 0.3, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 3.804, fgImpact: 1.573, ftImpact: 0.661, to: -0.016 } },
          { name: "Junior Kemm", min: 14, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -1.92, zScores: { pts: -0.501, reb: -0.048, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.064, ftImpact: -0.603, to: 0.851 } },
          { name: "Luke Ellspermann", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } }
        ]
      }
    },
      {
      id: "401918970",
      line: "Oral Roberts Golden Eagles 72 @ SMU Mustangs 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ORU", name: "Oral Roberts Golden Eagles", score: 72,
        players: [

        ]
      },
      home: {
        abbr: "SMU", name: "SMU Mustangs", score: 76,
        players: [
          { name: "Jermaine O'Neal Jr.", min: 28, pts: 12, reb: 5, ast: 1, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 5, fga: 6, ftm: 1, fta: 2, composite: 1.94, zScores: { pts: 0.671, reb: 0.648, ast: -0.212, stl: -0.706, blk: 0.951, tpm: 0.253, fgImpact: 1.82, ftImpact: -0.603, to: -0.883 } },
          { name: "Jaden Toombs", min: 22, pts: 6, reb: 5, ast: 1, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 1.82, zScores: { pts: -0.208, reb: 0.648, ast: -0.212, stl: 1.478, blk: 0.951, tpm: -0.635, fgImpact: -0.183, ftImpact: 0, to: -0.016 } },
          { name: "David Terrell Jr.", min: 32, pts: 5, reb: 2, ast: 14, stl: 0, blk: 1, to: 4, tpm: 1, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: 4.11, zScores: { pts: -0.354, reb: -0.396, ast: 6.633, stl: -0.706, blk: 0.951, tpm: 0.253, fgImpact: -0.311, ftImpact: 0.661, to: -2.616 } },
          { name: "Oziyah Sellers", min: 35, pts: 16, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 9, ftm: 6, fta: 6, composite: 3.31, zScores: { pts: 1.256, reb: -0.048, ast: 0.315, stl: -0.706, blk: -0.493, tpm: 1.14, fgImpact: -0.119, ftImpact: 1.983, to: -0.016 } },
          { name: "Jakub Szumert", min: 21, pts: 1, reb: 5, ast: 0, stl: 2, blk: 3, to: 2, tpm: 0, fgm: 0, fga: 7, ftm: 1, fta: 2, composite: -0.46, zScores: { pts: -0.94, reb: 0.648, ast: -0.738, stl: 1.478, blk: 3.839, tpm: -0.635, fgImpact: -2.625, ftImpact: -0.603, to: -0.883 } },
          { name: "Billy White III", min: 20, pts: 23, reb: 3, ast: 1, stl: 0, blk: 1, to: 0, tpm: 6, fgm: 8, fga: 10, ftm: 1, fta: 1, composite: 10.9, zScores: { pts: 2.281, reb: -0.048, ast: -0.212, stl: -0.706, blk: 0.951, tpm: 4.691, fgImpact: 2.762, ftImpact: 0.33, to: 0.851 } },
          { name: "Johan Munch", min: 12, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.86, zScores: { pts: -1.087, reb: -0.048, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Nic Codie", min: 12, pts: 5, reb: 1, ast: 1, stl: 1, blk: 2, to: 1, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 2, composite: 0.34, zScores: { pts: -0.354, reb: -0.744, ast: -0.212, stl: 0.386, blk: 2.395, tpm: 0.253, fgImpact: 0.503, ftImpact: -1.868, to: -0.016 } },
          { name: "Jaylin Stewart", min: 10, pts: 5, reb: 3, ast: 1, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -2.59, zScores: { pts: -0.354, reb: -0.048, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.064, ftImpact: 0.661, to: -1.749 } },
          { name: "Cameron Lomax", min: 8, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 1, composite: -3.43, zScores: { pts: -0.647, reb: -0.744, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.311, ftImpact: 0.33, to: -0.016 } }
        ]
      }
    },
      {
      id: "401909504",
      line: "Maryland Eastern Shore Hawks 39 @ DePaul Blue Demons 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UMES", name: "Maryland Eastern Shore Hawks", score: 39,
        players: [

        ]
      },
      home: {
        abbr: "DeP", name: "DePaul Blue Demons", score: 83,
        players: [
          { name: "Fabian Flores", min: 15, pts: 6, reb: 6, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -0.48, zScores: { pts: -0.208, reb: 0.996, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 1.317, ftImpact: 0, to: -0.016 } },
          { name: "Ade Popoola", min: 18, pts: 3, reb: 3, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -2.78, zScores: { pts: -0.647, reb: -0.048, ast: 0.315, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -1.436, ftImpact: 0, to: -0.016 } },
          { name: "Kruz McClure", min: 21, pts: 8, reb: 5, ast: 1, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 1.96, zScores: { pts: 0.085, reb: 0.648, ast: -0.212, stl: 1.478, blk: -0.493, tpm: 1.14, fgImpact: 0.192, ftImpact: 0, to: -0.883 } },
          { name: "Koree Cotton", min: 28, pts: 12, reb: 3, ast: 3, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 4, fga: 11, ftm: 1, fta: 1, composite: 4.05, zScores: { pts: 0.671, reb: -0.048, ast: 0.841, stl: -0.706, blk: 0.951, tpm: 2.028, fgImpact: -0.869, ftImpact: 0.33, to: 0.851 } },
          { name: "Layden Blocker", min: 18, pts: 19, reb: 1, ast: 1, stl: 5, blk: 0, to: 1, tpm: 2, fgm: 8, fga: 11, ftm: 1, fta: 3, composite: 6.98, zScores: { pts: 1.696, reb: -0.744, ast: -0.212, stl: 4.755, blk: -0.493, tpm: 1.14, fgImpact: 2.387, ftImpact: -1.537, to: -0.016 } },
          { name: "Jonas Johnson", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.93, zScores: { pts: -1.087, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: 0.851 } },
          { name: "Andrew Jensen", min: 3, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.55, zScores: { pts: -0.794, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.439, ftImpact: 0, to: -0.883 } },
          { name: "Theo Pierre-Justin", min: 14, pts: 1, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 1, fta: 2, composite: -3.73, zScores: { pts: -0.94, reb: -0.396, ast: 0.315, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -1.125, ftImpact: -0.603, to: 0.851 } },
          { name: "Magoon Gwath", min: 14, pts: 11, reb: 6, ast: 0, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 3, fga: 5, ftm: 5, fta: 5, composite: 4.62, zScores: { pts: 0.524, reb: 0.996, ast: -0.738, stl: -0.706, blk: 3.839, tpm: -0.635, fgImpact: 0.567, ftImpact: 1.652, to: -0.883 } },
          { name: "Wilson Jacques", min: 11, pts: 4, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 1, composite: -2.65, zScores: { pts: -0.501, reb: -1.092, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.503, ftImpact: -0.934, to: 0.851 } },
          { name: "Noah Meeusen", min: 20, pts: 5, reb: 2, ast: 4, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 3, composite: -0.33, zScores: { pts: -0.354, reb: -0.396, ast: 1.368, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -0.311, ftImpact: 0.991, to: -0.883 } },
          { name: "Kahmare Holmes", min: 27, pts: 9, reb: 5, ast: 6, stl: 4, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 2, fta: 4, composite: 5.32, zScores: { pts: 0.231, reb: 0.648, ast: 2.421, stl: 3.663, blk: -0.493, tpm: 0.253, fgImpact: -0.183, ftImpact: -1.207, to: -0.016 } },
          { name: "Nate Kasher", min: 5, pts: 0, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.46, zScores: { pts: -1.087, reb: -0.744, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Noah Smith", min: 3, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.44, zScores: { pts: -0.647, reb: -0.396, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.439, ftImpact: 0, to: 0.851 } }
        ]
      }
    },
      {
      id: "401925064",
      line: "Nicholls Colonels 41 @ Ole Miss Rebels 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NICH", name: "Nicholls Colonels", score: 41,
        players: [

        ]
      },
      home: {
        abbr: "Miss", name: "Ole Miss Rebels", score: 76,
        players: [
          { name: "Roman Siulepa", min: 19, pts: 8, reb: 8, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 2.65, zScores: { pts: 0.085, reb: 1.692, ast: -0.212, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: -0.119, ftImpact: 0, to: 0.851 } },
          { name: "Ilias Kamardine", min: 20, pts: 2, reb: 4, ast: 5, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -0.42, zScores: { pts: -0.794, reb: 0.3, ast: 1.894, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -1.061, ftImpact: 0, to: -0.016 } },
          { name: "Adam Clark", min: 24, pts: 9, reb: 4, ast: 3, stl: 4, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 10, ftm: 2, fta: 2, composite: 3.26, zScores: { pts: 0.231, reb: 0.3, ast: 0.841, stl: 3.663, blk: -0.493, tpm: 0.253, fgImpact: -1.308, ftImpact: 0.661, to: -0.883 } },
          { name: "Corey Stephenson", min: 20, pts: 8, reb: 3, ast: 0, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 10, ftm: 0, fta: 1, composite: -2.31, zScores: { pts: 0.085, reb: -0.048, ast: -0.738, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: -0.494, ftImpact: -0.934, to: -0.883 } },
          { name: "Patton Pinkins", min: 26, pts: 9, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 4, ftm: 0, fta: 0, composite: 2.33, zScores: { pts: 0.231, reb: 0.648, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 1.756, ftImpact: 0, to: 0.851 } },
          { name: "Daniel Patton", min: 3, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.58, zScores: { pts: -1.087, reb: -0.396, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: 0.851 } },
          { name: "Christian Brown", min: 11, pts: 8, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: -0.48, zScores: { pts: 0.085, reb: 0.648, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 1.381, ftImpact: 0, to: -0.016 } },
          { name: "Santiago Trouet", min: 18, pts: 16, reb: 3, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 8, fta: 9, composite: 5.06, zScores: { pts: 1.256, reb: -0.048, ast: 0.315, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: 0.631, ftImpact: 1.71, to: 0.851 } },
          { name: "Dasear Haskins", min: 9, pts: 4, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -2.78, zScores: { pts: -0.501, reb: -1.092, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.878, ftImpact: 0, to: -0.016 } },
          { name: "Stefan Cicic", min: 3, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.19, zScores: { pts: -0.647, reb: -0.396, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -0.311, ftImpact: 0, to: 0.851 } },
          { name: "Ben Henshall", min: 26, pts: 7, reb: 5, ast: 6, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 8, ftm: 1, fta: 1, composite: 4.78, zScores: { pts: -0.062, reb: 0.648, ast: 2.421, stl: 2.571, blk: 0.951, tpm: -0.635, fgImpact: -0.558, ftImpact: 0.33, to: -0.883 } },
          { name: "Zach Day", min: 15, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -4.31, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -1.5, ftImpact: 0, to: 0.851 } },
          { name: "Jaron Saulsberry", min: 6, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 1, composite: -4.93, zScores: { pts: -0.794, reb: -0.048, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -1.436, ftImpact: -0.934, to: 0.851 } }
        ]
      }
    },
      {
      id: "401924922",
      line: "Sam Houston Bearkats 79 @ Wyoming Cowboys 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SHSU", name: "Sam Houston Bearkats", score: 79,
        players: [

        ]
      },
      home: {
        abbr: "Wyo", name: "Wyoming Cowboys", score: 81,
        players: [
          { name: "Gavin Gores", min: 25, pts: 12, reb: 4, ast: 3, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 7, ftm: 6, fta: 6, composite: 2.34, zScores: { pts: 0.671, reb: 0.3, ast: 0.841, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: -0.183, ftImpact: 1.983, to: -0.883 } },
          { name: "Mike Mora", min: 23, pts: 3, reb: 4, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -0.97, zScores: { pts: -0.647, reb: 0.3, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -0.311, ftImpact: 0, to: 0.851 } },
          { name: "Nasir Meyer", min: 38, pts: 22, reb: 11, ast: 5, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 8, fga: 19, ftm: 6, fta: 9, composite: 5.67, zScores: { pts: 2.135, reb: 2.736, ast: 1.894, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: -0.613, ftImpact: -0.819, to: -0.016 } },
          { name: "Khaden Bennett", min: 33, pts: 19, reb: 8, ast: 0, stl: 2, blk: 1, to: 3, tpm: 0, fgm: 6, fga: 15, ftm: 7, fta: 8, composite: 3.33, zScores: { pts: 1.696, reb: 1.692, ast: -0.738, stl: 1.478, blk: 0.951, tpm: -0.635, fgImpact: -0.741, ftImpact: 1.379, to: -1.749 } },
          { name: "Parker Gerrits", min: 33, pts: 2, reb: 4, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -1.06, zScores: { pts: -0.794, reb: 0.3, ast: -0.212, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: -0.686, ftImpact: 0, to: -0.016 } },
          { name: "Neil Summers", min: 6, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.82, zScores: { pts: -1.087, reb: -0.396, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.75, ftImpact: 0, to: -0.016 } },
          { name: "Renars Sondors", min: 9, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.79, zScores: { pts: -0.647, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.439, ftImpact: 0, to: 0.851 } },
          { name: "Linus Ruf", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.77, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: -0.016 } },
          { name: "Madden Smiley", min: 4, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.14, zScores: { pts: -0.647, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.439, ftImpact: 0, to: 0.851 } },
          { name: "Uriyah Rojas", min: 26, pts: 17, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 13, ftm: 4, fta: 5, composite: 3.68, zScores: { pts: 1.403, reb: -0.396, ast: 0.315, stl: 0.386, blk: -0.493, tpm: 2.028, fgImpact: -0.805, ftImpact: 0.388, to: 0.851 } }
        ]
      }
    },
      {
      id: "401920720",
      line: "Eastern Washington Eagles 71 @ Utah Utes 67 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "EWU", name: "Eastern Washington Eagles", score: 71,
        players: [

        ]
      },
      home: {
        abbr: "Utah", name: "Utah Utes", score: 67,
        players: [
          { name: "Alec Anigbata", min: 28, pts: 16, reb: 10, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 5, fga: 10, ftm: 5, fta: 6, composite: 2.11, zScores: { pts: 1.256, reb: 2.388, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 0.32, ftImpact: 0.718, to: -0.883 } },
          { name: "Malek Gomma", min: 20, pts: 6, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 2, fta: 4, composite: -0.34, zScores: { pts: -0.208, reb: 0.3, ast: -0.212, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.878, ftImpact: -1.207, to: 0.851 } },
          { name: "TJ Burch", min: 26, pts: 11, reb: 2, ast: 1, stl: 4, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 9, ftm: 3, fta: 4, composite: 3.33, zScores: { pts: 0.524, reb: -0.396, ast: -0.212, stl: 3.663, blk: -0.493, tpm: 1.14, fgImpact: -0.933, ftImpact: 0.058, to: -0.016 } },
          { name: "Jackson Holcombe", min: 35, pts: 13, reb: 9, ast: 4, stl: 1, blk: 0, to: 6, tpm: 1, fgm: 2, fga: 6, ftm: 8, fta: 12, composite: -1.69, zScores: { pts: 0.817, reb: 2.04, ast: 1.368, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: -0.622, ftImpact: -1.092, to: -4.349 } },
          { name: "Trey Campbell", min: 36, pts: 15, reb: 4, ast: 3, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 16, ftm: 3, fta: 3, composite: 3.2, zScores: { pts: 1.11, reb: 0.3, ast: 0.841, stl: 0.386, blk: -0.493, tpm: 1.14, fgImpact: -1.93, ftImpact: 0.991, to: 0.851 } },
          { name: "Zati Loubaki", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Jaxon Johnson", min: 13, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.48, zScores: { pts: -1.087, reb: -1.092, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: -0.883 } },
          { name: "Babacar Faye", min: 16, pts: 4, reb: 5, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 4, composite: -5.67, zScores: { pts: -0.501, reb: 0.648, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.503, ftImpact: -3.735, to: -0.016 } },
          { name: "Styles Clemmons", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.03, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -1.125, ftImpact: 0, to: 0.851 } },
          { name: "Taison Chatman", min: 17, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -3.95, zScores: { pts: -0.794, reb: -1.092, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -1.436, ftImpact: 0, to: 0.851 } }
        ]
      }
    },
      {
      id: "401911521",
      line: "Alabama State Hornets 75 @ UC Davis Aggies 68 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ALST", name: "Alabama State Hornets", score: 75,
        players: [

        ]
      },
      home: {
        abbr: "UCDav", name: "UC Davis Aggies", score: 68,
        players: [
          { name: "Omer Suljanovic", min: 18, pts: 6, reb: 1, ast: 0, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 2, fta: 4, composite: -2.95, zScores: { pts: -0.208, reb: -0.744, ast: -0.738, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: 0.128, ftImpact: -1.207, to: -0.883 } },
          { name: "Isaiah Chappell", min: 31, pts: 12, reb: 6, ast: 4, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: 5.81, zScores: { pts: 0.671, reb: 0.996, ast: 1.368, stl: -0.706, blk: 0.951, tpm: 2.028, fgImpact: 0.256, ftImpact: -0.603, to: 0.851 } },
          { name: "Chase Rawlins", min: 31, pts: 3, reb: 5, ast: 10, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: 0.9, zScores: { pts: -0.647, reb: 0.648, ast: 4.527, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.311, ftImpact: -0.603, to: -0.883 } },
          { name: "Jalen Stokes", min: 23, pts: 8, reb: 6, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 2, composite: 0.85, zScores: { pts: 0.085, reb: 0.996, ast: -0.212, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.942, ftImpact: 0.661, to: -0.883 } },
          { name: "Connor Sevilla", min: 32, pts: 17, reb: 0, ast: 2, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 3, fga: 13, ftm: 11, fta: 11, composite: -1.53, zScores: { pts: 1.403, reb: -1.092, ast: 0.315, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -2.433, ftImpact: 3.635, to: -2.616 } },
          { name: "Veniamin Abosi", min: 17, pts: 6, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: -0.9, zScores: { pts: -0.208, reb: 0.3, ast: -0.738, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: -1.372, ftImpact: 0.661, to: 0.851 } },
          { name: "Aleks Szymczyk", min: 6, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -3.47, zScores: { pts: -0.794, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0.661, to: -0.016 } },
          { name: "Ylan Esso-Essis", min: 28, pts: 12, reb: 3, ast: 1, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 5, ftm: 2, fta: 4, composite: -1.22, zScores: { pts: 0.671, reb: -0.048, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 1.14, fgImpact: 1.381, ftImpact: -1.207, to: -1.749 } },
          { name: "Clarence Massamba", min: 14, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.95, zScores: { pts: -0.794, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.686, ftImpact: 0, to: 0.851 } }
        ]
      }
    },
      {
      id: "401934595",
      line: "Simon Fraser Red Leafs 59 @ Washington Huskies 96 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SFRU", name: "Simon Fraser Red Leafs", score: 59,
        players: [

        ]
      },
      home: {
        abbr: "Wash", name: "Washington Huskies", score: 96,
        players: [
          { name: "Nikola Dzepina", min: 24, pts: 7, reb: 8, ast: 5, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 8, ftm: 1, fta: 2, composite: 3.05, zScores: { pts: -0.062, reb: 1.692, ast: 1.894, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: -0.558, ftImpact: -0.603, to: -0.016 } },
          { name: "Lathan Sommerville", min: 15, pts: 5, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 1, composite: -0.57, zScores: { pts: -0.354, reb: 0.3, ast: -0.212, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.128, ftImpact: 0.33, to: -0.016 } },
          { name: "Tayshawn Comer", min: 22, pts: 8, reb: 2, ast: 4, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 4.97, zScores: { pts: 0.085, reb: -0.396, ast: 1.368, stl: 1.478, blk: -0.493, tpm: 1.14, fgImpact: 0.942, ftImpact: 0, to: 0.851 } },
          { name: "Wesley Yates III", min: 20, pts: 13, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 6, fga: 11, ftm: 0, fta: 0, composite: 3.01, zScores: { pts: 0.817, reb: 0.648, ast: -0.212, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: 0.759, ftImpact: 0, to: 0.851 } },
          { name: "Steele Venters", min: 23, pts: 14, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 5.61, zScores: { pts: 0.963, reb: 0.996, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 2.916, fgImpact: 0.631, ftImpact: 0.661, to: 0.851 } },
          { name: "Wini Braga", min: 19, pts: 12, reb: 11, ast: 5, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 6, ftm: 3, fta: 6, composite: 1.8, zScores: { pts: 0.671, reb: 2.736, ast: 1.894, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 1.006, ftImpact: -1.81, to: -1.749 } },
          { name: "Tristan Devers", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.9, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Lat Ford", min: 3, pts: 2, reb: 0, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 2, composite: -1.97, zScores: { pts: -0.794, reb: -1.092, ast: -0.212, stl: 0.386, blk: 0.951, tpm: -0.635, fgImpact: 0.439, ftImpact: -1.868, to: 0.851 } },
          { name: "BJ Roy", min: 11, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -5.36, zScores: { pts: -0.647, reb: -0.744, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -1.061, ftImpact: 0, to: -1.749 } },
          { name: "Harun Zrno", min: 18, pts: 6, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 3, fta: 4, composite: -2.26, zScores: { pts: -0.208, reb: -0.744, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -1.061, ftImpact: 0.058, to: 0.851 } },
          { name: "LeJuan Watts", min: 23, pts: 17, reb: 5, ast: 3, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 8, fga: 10, ftm: 0, fta: 2, composite: 2.82, zScores: { pts: 1.403, reb: 0.648, ast: 0.841, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: 2.762, ftImpact: -1.868, to: -0.016 } },
          { name: "Parker Friedrichsen", min: 16, pts: 9, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 1.22, zScores: { pts: 0.231, reb: -0.744, ast: -0.738, stl: 0.386, blk: -0.493, tpm: 2.028, fgImpact: 0.567, ftImpact: 0, to: -0.016 } }
        ]
      }
    },
      {
      id: "401921729",
      line: "UC Irvine Anteaters 61 @ Stanford Cardinal 65 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UCI", name: "UC Irvine Anteaters", score: 61,
        players: [

        ]
      },
      home: {
        abbr: "Stan", name: "Stanford Cardinal", score: 65,
        players: [
          { name: "Evan Stinson", min: 22, pts: 4, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: -0.7, zScores: { pts: -0.501, reb: 0.648, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.878, ftImpact: 0, to: 0.851 } },
          { name: "Nick Townsend", min: 35, pts: 5, reb: 10, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 6, composite: 0.56, zScores: { pts: -0.354, reb: 2.388, ast: 0.315, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: -0.311, ftImpact: -1.81, to: -0.016 } },
          { name: "Austin Maurer", min: 26, pts: 13, reb: 3, ast: 3, stl: 1, blk: 2, to: 1, tpm: 3, fgm: 5, fga: 17, ftm: 0, fta: 2, composite: 2.23, zScores: { pts: 0.817, reb: -0.048, ast: 0.841, stl: 0.386, blk: 2.395, tpm: 2.028, fgImpact: -2.305, ftImpact: -1.868, to: -0.016 } },
          { name: "Isaiah Rogers", min: 13, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 2, fta: 2, composite: -4.59, zScores: { pts: -0.794, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -1.125, ftImpact: 0.661, to: -0.016 } },
          { name: "Julius Price", min: 33, pts: 12, reb: 7, ast: 1, stl: 1, blk: 0, to: 5, tpm: 2, fgm: 4, fga: 6, ftm: 2, fta: 2, composite: 1.02, zScores: { pts: 0.671, reb: 1.344, ast: -0.212, stl: 0.386, blk: -0.493, tpm: 1.14, fgImpact: 1.006, ftImpact: 0.661, to: -3.483 } },
          { name: "Donavin Young", min: 7, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.05, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: -0.016 } },
          { name: "Aidan Cammann", min: 11, pts: 8, reb: 2, ast: 1, stl: 0, blk: 2, to: 0, tpm: 2, fgm: 2, fga: 2, ftm: 2, fta: 2, composite: 4.7, zScores: { pts: 0.085, reb: -0.396, ast: -0.212, stl: -0.706, blk: 2.395, tpm: 1.14, fgImpact: 0.878, ftImpact: 0.661, to: 0.851 } },
          { name: "Tallis Toure", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: 0.851 } },
          { name: "Aziz Olajuwon", min: 20, pts: 10, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 9, ftm: 1, fta: 2, composite: 0.96, zScores: { pts: 0.378, reb: 0.648, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 2.028, fgImpact: -0.933, ftImpact: -0.603, to: 0.851 } },
          { name: "Elias Obenyah", min: 4, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.07, zScores: { pts: -1.087, reb: -0.396, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: -0.016 } },
          { name: "Christian Bliss", min: 28, pts: 11, reb: 3, ast: 5, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 13, ftm: 5, fta: 5, composite: 0.7, zScores: { pts: 0.524, reb: -0.048, ast: 1.894, stl: -0.706, blk: -0.493, tpm: 1.14, fgImpact: -3.247, ftImpact: 1.652, to: -0.016 } }
        ]
      }
    },
      {
      id: "401917534",
      line: "Pacific Union Pioneers 41 @ Pacific Tigers 96 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PUC", name: "Pacific Union Pioneers", score: 41,
        players: [

        ]
      },
      home: {
        abbr: "Pacif", name: "Pacific Tigers", score: 96,
        players: [
          { name: "Gavin Ripp", min: 20, pts: 7, reb: 7, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 1, fta: 1, composite: 3.32, zScores: { pts: -0.062, reb: 1.344, ast: 0.315, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: 0.192, ftImpact: 0.33, to: 0.851 } },
          { name: "Jaion Pitt", min: 17, pts: 12, reb: 10, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 3.71, zScores: { pts: 0.671, reb: 2.388, ast: 1.368, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 1.134, ftImpact: 0, to: -0.016 } },
          { name: "Adriel Nyorha", min: 20, pts: 10, reb: 1, ast: 4, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 2, fta: 2, composite: 2.99, zScores: { pts: 0.378, reb: -0.744, ast: 1.368, stl: 0.386, blk: -0.493, tpm: 1.14, fgImpact: -0.558, ftImpact: 0.661, to: 0.851 } },
          { name: "Jaden Winston", min: 14, pts: 6, reb: 1, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 3, composite: -2.09, zScores: { pts: -0.208, reb: -0.744, ast: -0.212, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: -0.247, ftImpact: -0.273, to: -0.016 } },
          { name: "CJ Jones", min: 28, pts: 12, reb: 8, ast: 7, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 4.91, zScores: { pts: 0.671, reb: 1.692, ast: 2.947, stl: -0.706, blk: -0.493, tpm: 1.14, fgImpact: -0.119, ftImpact: 0.661, to: -0.883 } },
          { name: "Jorge Carot", min: 16, pts: 4, reb: 9, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 0.05, zScores: { pts: -0.501, reb: 2.04, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.878, ftImpact: 0, to: -0.883 } },
          { name: "Vincent Osazee", min: 1, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.81, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Jaylen Thompson", min: 18, pts: 14, reb: 2, ast: 1, stl: 3, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 9, ftm: 3, fta: 4, composite: 5.25, zScores: { pts: 0.963, reb: -0.396, ast: -0.212, stl: 2.571, blk: -0.493, tpm: 2.028, fgImpact: -0.119, ftImpact: 0.058, to: 0.851 } },
          { name: "Jacob McFarland", min: 17, pts: 4, reb: 8, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 2.11, zScores: { pts: -0.501, reb: 1.692, ast: -0.738, stl: -0.706, blk: 2.395, tpm: -0.635, fgImpact: -0.247, ftImpact: 0, to: 0.851 } },
          { name: "Andrej Mitrevski", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.28, zScores: { pts: -1.087, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: 0, to: 0.851 } },
          { name: "Damarion Vann-Kelly", min: 22, pts: 20, reb: 6, ast: 1, stl: 3, blk: 0, to: 0, tpm: 4, fgm: 7, fga: 9, ftm: 2, fta: 2, composite: 11.45, zScores: { pts: 1.842, reb: 0.996, ast: -0.212, stl: 2.571, blk: -0.493, tpm: 2.916, fgImpact: 2.323, ftImpact: 0.661, to: 0.851 } },
          { name: "Noah Budu", min: 7, pts: 1, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -4.38, zScores: { pts: -0.94, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.375, ftImpact: -0.603, to: 0.851 } },
          { name: "Dominick Harris", min: 17, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 2, fta: 2, composite: -4.25, zScores: { pts: -0.208, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -1.372, ftImpact: 0.661, to: -0.016 } }
        ]
      }
    },
      {
      id: "401917533",
      line: "Seattle U Redhawks 83 @ California Baptist Lancers 54 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SeatU", name: "Seattle U Redhawks", score: 83,
        players: [
          { name: "Will Heimbrodt", min: 24, pts: 10, reb: 12, ast: 4, stl: 4, blk: 2, to: 1, tpm: 0, fgm: 4, fga: 10, ftm: 2, fta: 2, composite: 10.4, zScores: { pts: 0.378, reb: 3.084, ast: 1.368, stl: 3.663, blk: 2.395, tpm: -0.635, fgImpact: -0.494, ftImpact: 0.661, to: -0.016 } },
          { name: "Junseok Yeo", min: 21, pts: 5, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -3.65, zScores: { pts: -0.354, reb: -1.092, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -1.372, ftImpact: 0, to: 0.851 } },
          { name: "Halvine Dzellat", min: 23, pts: 12, reb: 10, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 4, fta: 6, composite: 0.55, zScores: { pts: 0.671, reb: 2.388, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.631, ftImpact: -0.546, to: -0.016 } },
          { name: "Tyler Boston", min: 30, pts: 6, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -1.73, zScores: { pts: -0.208, reb: -0.396, ast: 0.315, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.247, ftImpact: 0.661, to: -0.016 } },
          { name: "Mason Williams", min: 25, pts: 27, reb: 7, ast: 1, stl: 2, blk: 0, to: 1, tpm: 5, fgm: 8, fga: 16, ftm: 6, fta: 8, composite: 9.4, zScores: { pts: 2.867, reb: 1.344, ast: -0.212, stl: 1.478, blk: -0.493, tpm: 3.804, fgImpact: 0.512, ftImpact: 0.115, to: -0.016 } },
          { name: "Yuto Kawashima", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.55, zScores: { pts: -1.087, reb: -0.744, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Ray Adams", min: 14, pts: 2, reb: 4, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: 0.96, zScores: { pts: -0.794, reb: 0.3, ast: -0.738, stl: -0.706, blk: 2.395, tpm: -0.635, fgImpact: -0.375, ftImpact: 0.661, to: 0.851 } },
          { name: "Ladji Coulibaly", min: 15, pts: 7, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 1, fta: 1, composite: -0.46, zScores: { pts: -0.062, reb: 0.648, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.183, ftImpact: 0.33, to: 0.851 } },
          { name: "Amare Larane", min: 5, pts: 6, reb: 0, ast: 0, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 0.2, zScores: { pts: -0.208, reb: -1.092, ast: -0.738, stl: 1.478, blk: -0.493, tpm: 1.14, fgImpact: 0.128, ftImpact: 0, to: -0.016 } },
          { name: "Jaden Bailes", min: 14, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -3.31, zScores: { pts: -0.647, reb: -0.396, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -1.436, ftImpact: 0, to: 0.851 } },
          { name: "Jeremiah Harshman", min: 2, pts: 0, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.85, zScores: { pts: -1.087, reb: -1.092, ast: 0.315, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: 0.851 } },
          { name: "Kaden Hansen", min: 6, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.73, zScores: { pts: -0.647, reb: -1.092, ast: -0.212, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -0.686, ftImpact: 0, to: 0.851 } },
          { name: "Maleek Arington", min: 19, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 2, composite: -1.9, zScores: { pts: -0.794, reb: -0.048, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0.661, to: 0.851 } }
        ]
      },
      home: {
        abbr: "CBU", name: "California Baptist Lancers", score: 54,
        players: [

        ]
      }
    },
      {
      id: "401920512",
      line: "West Virginia Mountaineers 76 @ Auburn Tigers 70 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WVU", name: "West Virginia Mountaineers", score: 76,
        players: [
          { name: "Brenen Lorient", min: 28, pts: 19, reb: 2, ast: 1, stl: 3, blk: 0, to: 3, tpm: 3, fgm: 7, fga: 8, ftm: 2, fta: 2, composite: 6.8, zScores: { pts: 1.696, reb: -0.396, ast: -0.212, stl: 2.571, blk: -0.493, tpm: 2.028, fgImpact: 2.698, ftImpact: 0.661, to: -1.749 } },
          { name: "Mouhamed Sylla", min: 15, pts: 6, reb: 4, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -0.33, zScores: { pts: -0.208, reb: 0.3, ast: -0.212, stl: -0.706, blk: 0.951, tpm: -0.635, fgImpact: 0.192, ftImpact: 0, to: -0.016 } },
          { name: "Miles Sadler", min: 31, pts: 18, reb: 2, ast: 6, stl: 2, blk: 0, to: 5, tpm: 2, fgm: 6, fga: 17, ftm: 4, fta: 4, composite: 2.05, zScores: { pts: 1.549, reb: -0.396, ast: 2.421, stl: 1.478, blk: -0.493, tpm: 1.14, fgImpact: -1.491, ftImpact: 1.322, to: -3.483 } },
          { name: "Seydou Traore", min: 25, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -3.61, zScores: { pts: -1.087, reb: -0.396, ast: -0.738, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: -1.5, ftImpact: 0, to: 0.851 } },
          { name: "Finley Bizjack", min: 27, pts: 18, reb: 5, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 10, ftm: 6, fta: 7, composite: 4.67, zScores: { pts: 1.549, reb: 0.648, ast: 0.315, stl: -0.706, blk: -0.493, tpm: 1.14, fgImpact: 0.32, ftImpact: 1.049, to: 0.851 } },
          { name: "Javan Buchanan", min: 18, pts: 3, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 3, fta: 4, composite: -4.15, zScores: { pts: -0.647, reb: -0.744, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.75, ftImpact: 0.058, to: -0.016 } },
          { name: "Amadou Seini", min: 19, pts: 7, reb: 9, ast: 0, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 1, composite: 1.98, zScores: { pts: -0.062, reb: 2.04, ast: -0.738, stl: 1.478, blk: -0.493, tpm: -0.635, fgImpact: 0.942, ftImpact: 0.33, to: -0.883 } },
          { name: "Martin Somerville", min: 18, pts: 5, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 3, fta: 3, composite: -3.15, zScores: { pts: -0.354, reb: -0.396, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0.064, ftImpact: 0.991, to: -0.883 } },
          { name: "Joson Sanon", min: 19, pts: 0, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 2, composite: -5.15, zScores: { pts: -1.087, reb: 0.648, ast: -0.738, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -1.125, ftImpact: -1.868, to: 0.851 } }
        ]
      },
      home: {
        abbr: "Aub", name: "Auburn Tigers", score: 70,
        players: [
          { name: "Adam Olsen", min: 29, pts: 6, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 1, fta: 3, composite: -3.39, zScores: { pts: -0.208, reb: 0.3, ast: -0.738, stl: -0.706, blk: -0.493, tpm: 0.253, fgImpact: -0.247, ftImpact: -1.537, to: -0.016 } },
          { name: "Thomas Dowd", min: 23, pts: 7, reb: 7, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 2, composite: 1.52, zScores: { pts: -0.062, reb: 1.344, ast: -0.212, stl: 0.386, blk: -0.493, tpm: -0.635, fgImpact: 0.942, ftImpact: -0.603, to: 0.851 } },
          { name: "Narcisse Ngoy", min: 24, pts: 7, reb: 7, ast: 1, stl: 0, blk: 3, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 4, composite: 1.16, zScores: { pts: -0.062, reb: 1.344, ast: -0.212, stl: -0.706, blk: 3.839, tpm: -0.635, fgImpact: 0.942, ftImpact: -2.471, to: -0.883 } },
          { name: "Kevin Overton", min: 17, pts: 4, reb: 1, ast: 0, stl: 2, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: 0.26, zScores: { pts: -0.501, reb: -0.744, ast: -0.738, stl: 1.478, blk: 0.951, tpm: -0.635, fgImpact: -1.061, ftImpact: 0.661, to: 0.851 } },
          { name: "Tahaad Pettiford", min: 30, pts: 21, reb: 2, ast: 3, stl: 3, blk: 0, to: 6, tpm: 1, fgm: 8, fga: 17, ftm: 4, fta: 6, composite: 0, zScores: { pts: 1.989, reb: -0.396, ast: 0.841, stl: 2.571, blk: -0.493, tpm: 0.253, fgImpact: 0.137, ftImpact: -0.546, to: -4.349 } },
          { name: "Owen Freeman", min: 7, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.76, zScores: { pts: -1.087, reb: -0.744, ast: -0.212, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: 0, ftImpact: 0, to: -0.883 } },
          { name: "Bukky Oboye", min: 11, pts: 5, reb: 1, ast: 0, stl: 0, blk: 2, to: 0, tpm: 1, fgm: 2, fga: 2, ftm: 0, fta: 1, composite: 0.9, zScores: { pts: -0.354, reb: -0.744, ast: -0.738, stl: -0.706, blk: 2.395, tpm: 0.253, fgImpact: 0.878, ftImpact: -0.934, to: 0.851 } },
          { name: "Caleb Williams", min: 23, pts: 13, reb: 1, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 1.69, zScores: { pts: 0.817, reb: -0.744, ast: 0.841, stl: 0.386, blk: -0.493, tpm: 0.253, fgImpact: 1.509, ftImpact: 0, to: -0.883 } },
          { name: "George Kimble III", min: 21, pts: 7, reb: 1, ast: 0, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 6, ftm: 4, fta: 4, composite: -1.3, zScores: { pts: -0.062, reb: -0.744, ast: -0.738, stl: 1.478, blk: -0.493, tpm: 0.253, fgImpact: -1.436, ftImpact: 1.322, to: -0.883 } },
          { name: "Kolby King", min: 15, pts: 0, reb: 1, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.59, zScores: { pts: -1.087, reb: -0.744, ast: 0.841, stl: -0.706, blk: -0.493, tpm: -0.635, fgImpact: -0.75, ftImpact: 0, to: -0.016 } }
        ]
      }
    }
    ]
  },
    "2026-11-18": {
    games: [
      {
      id: "401920514",
      line: "Houston Cougars 86 @ Florida Gators 76 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Hou", name: "Houston Cougars", score: 86,
        players: [
          { name: "Delrecco Gillespie", min: 34, pts: 8, reb: 8, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: -0.88, zScores: { pts: 0.051, reb: 1.73, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.104, ftImpact: 0.678, to: -0.908 } },
          { name: "Chase McCarty", min: 27, pts: 8, reb: 5, ast: 0, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 4, fga: 9, ftm: 0, fta: 0, composite: 0.11, zScores: { pts: 0.051, reb: 0.673, ast: -0.749, stl: 2.369, blk: -0.478, tpm: -0.597, fgImpact: -0.25, ftImpact: 0, to: -0.908 } },
          { name: "Joseph Tugler", min: 32, pts: 12, reb: 10, ast: 3, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 10, ftm: 4, fta: 4, composite: 5.72, zScores: { pts: 0.613, reb: 2.434, ast: 0.698, stl: 2.369, blk: -0.478, tpm: -0.597, fgImpact: -0.64, ftImpact: 1.356, to: -0.035 } },
          { name: "Dedan Thomas Jr.", min: 36, pts: 30, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 10, fga: 17, ftm: 8, fta: 8, composite: 8.81, zScores: { pts: 3.144, reb: -0.383, ast: 0.215, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: 1.516, ftImpact: 2.713, to: 0.838 } },
          { name: "Mercy Miller", min: 28, pts: 13, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 5, fta: 5, composite: 1.15, zScores: { pts: 0.754, reb: -0.383, ast: -0.267, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0.139, ftImpact: 1.695, to: -0.035 } },
          { name: "Braden East", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.42, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Arafan Diane", min: 9, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -2.45, zScores: { pts: -0.793, reb: -0.735, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0.678, to: 0.838 } },
          { name: "Corey Hadnot II", min: 7, pts: 4, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 4, fta: 6, composite: -3.92, zScores: { pts: -0.512, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: -0.589, to: 0.838 } },
          { name: "Chendall Weaver", min: 18, pts: 9, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 0.31, zScores: { pts: 0.191, reb: -0.735, ast: -0.267, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 1.308, ftImpact: 0, to: 0.838 } },
          { name: "Kordel Jefferson", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.63, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 0, to: 0.838 } }
        ]
      },
      home: {
        abbr: "Fla", name: "Florida Gators", score: 76,
        players: [
          { name: "Alex Condon", min: 33, pts: 6, reb: 5, ast: 4, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 2, fga: 8, ftm: 1, fta: 3, composite: -1.81, zScores: { pts: -0.231, reb: 0.673, ast: 1.18, stl: 0.318, blk: 0.957, tpm: 0.165, fgImpact: -1.488, ftImpact: -1.606, to: -1.781 } },
          { name: "Thomas Haugh", min: 39, pts: 18, reb: 1, ast: 4, stl: 0, blk: 1, to: 3, tpm: 4, fgm: 6, fga: 11, ftm: 2, fta: 2, composite: 4.1, zScores: { pts: 1.457, reb: -0.735, ast: 1.18, stl: -0.708, blk: 0.957, tpm: 2.451, fgImpact: 0.598, ftImpact: 0.678, to: -1.781 } },
          { name: "Rueben Chinyelu", min: 30, pts: 6, reb: 7, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: -0.33, zScores: { pts: -0.231, reb: 1.377, ast: 0.215, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -0.709, ftImpact: 0.678, to: -0.908 } },
          { name: "Boogie Fland", min: 29, pts: 4, reb: 3, ast: 3, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 1.5, zScores: { pts: -0.512, reb: -0.031, ast: 0.698, stl: 1.344, blk: 0.957, tpm: -0.597, fgImpact: -0.32, ftImpact: 0, to: -0.035 } },
          { name: "Denzel Aberdeen", min: 34, pts: 26, reb: 0, ast: 2, stl: 0, blk: 0, to: 2, tpm: 6, fgm: 9, fga: 13, ftm: 2, fta: 2, composite: 6.53, zScores: { pts: 2.582, reb: -1.088, ast: 0.215, stl: -0.708, blk: -0.478, tpm: 3.974, fgImpact: 2.261, ftImpact: 0.678, to: -0.908 } },
          { name: "Domen Petrovic", min: 7, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.15, zScores: { pts: -1.074, reb: -1.088, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 0, to: 0.838 } },
          { name: "Urban Klavzar", min: 17, pts: 14, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 7, ftm: 0, fta: 0, composite: 3.56, zScores: { pts: 0.894, reb: -0.031, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 2.451, fgImpact: 1.342, ftImpact: 0, to: 0.838 } },
          { name: "Isaiah Brown", min: 11, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -0.793, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.035, ftImpact: 0, to: -0.035 } }
        ]
      }
    },
      {
      id: "401909742",
      line: "UConn Huskies 79 @ Arizona Wildcats 85 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UConn", name: "UConn Huskies", score: 79,
        players: [
          { name: "Colben Landrew", min: 37, pts: 12, reb: 10, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 4, fta: 4, composite: 4.99, zScores: { pts: 0.613, reb: 2.434, ast: 0.215, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: 0.139, ftImpact: 1.356, to: -0.035 } },
          { name: "Jayden Ross", min: 27, pts: 9, reb: 2, ast: 0, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 2, fga: 8, ftm: 3, fta: 3, composite: -2.43, zScores: { pts: 0.191, reb: -0.383, ast: -0.749, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: -1.488, ftImpact: 1.017, to: -1.781 } },
          { name: "Na'jai Hines", min: 21, pts: 10, reb: 9, ast: 2, stl: 1, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 6, ftm: 2, fta: 2, composite: 4, zScores: { pts: 0.332, reb: 2.082, ast: 0.215, stl: 0.318, blk: 0.957, tpm: -0.597, fgImpact: 0.918, ftImpact: 0.678, to: -0.908 } },
          { name: "Braylon Mullins", min: 36, pts: 29, reb: 5, ast: 0, stl: 1, blk: 1, to: 2, tpm: 6, fgm: 8, fga: 21, ftm: 7, fta: 8, composite: 7, zScores: { pts: 3.004, reb: 0.673, ast: -0.749, stl: 0.318, blk: 0.957, tpm: 3.974, fgImpact: -1.669, ftImpact: 1.401, to: -0.908 } },
          { name: "Silas Demary Jr.", min: 38, pts: 15, reb: 3, ast: 6, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 14, ftm: 9, fta: 10, composite: 2.45, zScores: { pts: 1.035, reb: -0.031, ast: 2.144, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: -3.011, ftImpact: 2.079, to: -0.035 } },
          { name: "Egor Amosov", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Jacob Ross", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Oskar Giltay", min: 19, pts: 4, reb: 3, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.39, zScores: { pts: -0.512, reb: -0.031, ast: -0.267, stl: 0.318, blk: 0.957, tpm: -0.597, fgImpact: -0.32, ftImpact: 0, to: 0.838 } },
          { name: "Junior County", min: 11, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.16, zScores: { pts: -1.074, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 0, to: -0.035 } },
          { name: "Nils Machowski", min: 9, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -4.23, zScores: { pts: -1.074, reb: -0.383, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -1.558, ftImpact: 0, to: 0.838 } }
        ]
      },
      home: {
        abbr: "Ariz", name: "Arizona Wildcats", score: 85,
        players: [
          { name: "Ivan Kharchenkov", min: 39, pts: 20, reb: 5, ast: 7, stl: 2, blk: 0, to: 6, tpm: 2, fgm: 7, fga: 12, ftm: 4, fta: 4, composite: 4.81, zScores: { pts: 1.738, reb: 0.673, ast: 2.626, stl: 1.344, blk: -0.478, tpm: 0.927, fgImpact: 1.023, ftImpact: 1.356, to: -4.401 } },
          { name: "Motiejus Krivas", min: 37, pts: 18, reb: 12, ast: 2, stl: 1, blk: 4, to: 5, tpm: 0, fgm: 7, fga: 8, ftm: 4, fta: 5, composite: 9.23, zScores: { pts: 1.457, reb: 3.138, ast: 0.215, stl: 0.318, blk: 5.262, tpm: -0.597, fgImpact: 2.581, ftImpact: 0.384, to: -3.527 } },
          { name: "Derek Dixon", min: 38, pts: 16, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 14, ftm: 2, fta: 2, composite: 0.7, zScores: { pts: 1.176, reb: -0.735, ast: -0.267, stl: -0.708, blk: -0.478, tpm: 2.451, fgImpact: -1.384, ftImpact: 0.678, to: -0.035 } },
          { name: "Caleb Holt", min: 35, pts: 19, reb: 6, ast: 1, stl: 3, blk: 1, to: 3, tpm: 1, fgm: 5, fga: 10, ftm: 8, fta: 8, composite: 6.95, zScores: { pts: 1.597, reb: 1.025, ast: -0.267, stl: 2.369, blk: 0.957, tpm: 0.165, fgImpact: 0.174, ftImpact: 2.713, to: -1.781 } },
          { name: "JJ Mandaquit", min: 32, pts: 11, reb: 3, ast: 3, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 2.87, zScores: { pts: 0.472, reb: -0.031, ast: 0.698, stl: -0.708, blk: -0.478, tpm: 1.689, fgImpact: -0.285, ftImpact: 0.678, to: 0.838 } },
          { name: "Maksim Brnovic", min: 4, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -5.1, zScores: { pts: -1.074, reb: -0.383, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: -1.945, to: 0.838 } },
          { name: "Evan Otten", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.42, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Cameron Holmes", min: 12, pts: 1, reb: 3, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -2.66, zScores: { pts: -0.934, reb: -0.031, ast: -0.749, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: -0.633, to: 0.838 } }
        ]
      }
    },
      {
      id: "401920158",
      line: "Cal State Fullerton Titans 71 @ UCLA Bruins 75 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CSUF", name: "Cal State Fullerton Titans", score: 71,
        players: [

        ]
      },
      home: {
        abbr: "UCLA", name: "UCLA Bruins", score: 75,
        players: [
          { name: "Nikola Kusturica", min: 29, pts: 7, reb: 8, ast: 5, stl: 1, blk: 2, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 4.59, zScores: { pts: -0.09, reb: 1.73, ast: 1.662, stl: 0.318, blk: 2.392, tpm: 0.165, fgImpact: -0.675, ftImpact: 0, to: -0.908 } },
          { name: "Brandon Williams", min: 28, pts: 9, reb: 6, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 1, fta: 2, composite: 0.77, zScores: { pts: 0.191, reb: 1.025, ast: 0.215, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.918, ftImpact: -0.633, to: 0.838 } },
          { name: "Eric Dailey Jr.", min: 24, pts: 10, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 12, ftm: 2, fta: 4, composite: -2.57, zScores: { pts: 0.332, reb: -0.031, ast: -0.267, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -1.419, ftImpact: -1.267, to: 0.838 } },
          { name: "Jaylen Petty", min: 30, pts: 8, reb: 8, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 10, ftm: 5, fta: 5, composite: -1.41, zScores: { pts: 0.051, reb: 1.73, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -3.081, ftImpact: 1.695, to: -0.035 } },
          { name: "Trent Perry", min: 37, pts: 27, reb: 7, ast: 6, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 9, fga: 17, ftm: 7, fta: 9, composite: 8.26, zScores: { pts: 2.722, reb: 1.377, ast: 2.144, stl: 1.344, blk: -0.478, tpm: 0.927, fgImpact: 0.703, ftImpact: 0.428, to: -0.908 } },
          { name: "Sergej Macura", min: 6, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.32, zScores: { pts: -0.793, reb: -0.735, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: 0, to: 0.838 } },
          { name: "Joe Philon III", min: 25, pts: 4, reb: 6, ast: 0, stl: 5, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 7, ftm: 2, fta: 2, composite: 4.71, zScores: { pts: -0.512, reb: 1.025, ast: -0.749, stl: 4.421, blk: 2.392, tpm: -0.597, fgImpact: -1.913, ftImpact: 0.678, to: -0.035 } },
          { name: "Xavier Booker", min: 11, pts: 6, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: -2.76, zScores: { pts: -0.231, reb: 0.321, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.285, ftImpact: 0, to: -0.035 } },
          { name: "Azavier Robinson", min: 10, pts: 2, reb: 1, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.3, zScores: { pts: -0.793, reb: -0.735, ast: -0.749, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: -1.134, ftImpact: 0, to: 0.838 } }
        ]
      }
    },
      {
      id: "401921134",
      line: "LSU New Orleans Privateers 41 @ Texas Tech Red Raiders 86 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NOLA", name: "LSU New Orleans Privateers", score: 41,
        players: [

        ]
      },
      home: {
        abbr: "TxTch", name: "Texas Tech Red Raiders", score: 86,
        players: [
          { name: "Jamichael Stillwell", min: 24, pts: 11, reb: 11, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 9, ftm: 3, fta: 4, composite: 3.28, zScores: { pts: 0.472, reb: 2.786, ast: -0.267, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: -0.25, ftImpact: 0.045, to: 0.838 } },
          { name: "Darrion Williams", min: 26, pts: 6, reb: 5, ast: 3, stl: 4, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 3.76, zScores: { pts: -0.231, reb: 0.673, ast: 0.698, stl: 3.395, blk: -0.478, tpm: 0.927, fgImpact: -0.32, ftImpact: 0, to: -0.908 } },
          { name: "Donovan Atwell", min: 21, pts: 11, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 5, ftm: 0, fta: 0, composite: 2.66, zScores: { pts: 0.472, reb: -0.735, ast: -0.749, stl: 0.318, blk: -0.478, tpm: 1.689, fgImpact: 1.308, ftImpact: 0, to: 0.838 } },
          { name: "Cruz Davis", min: 27, pts: 20, reb: 4, ast: 4, stl: 3, blk: 0, to: 2, tpm: 4, fgm: 7, fga: 8, ftm: 2, fta: 2, composite: 9.93, zScores: { pts: 1.738, reb: 0.321, ast: 1.18, stl: 2.369, blk: -0.478, tpm: 2.451, fgImpact: 2.581, ftImpact: 0.678, to: -0.908 } },
          { name: "Dra Gibbs-Lawhorn", min: 21, pts: 9, reb: 2, ast: 3, stl: 1, blk: 1, to: 3, tpm: 1, fgm: 3, fga: 9, ftm: 2, fta: 2, composite: -0.22, zScores: { pts: 0.191, reb: -0.383, ast: 0.698, stl: 0.318, blk: 0.957, tpm: 0.165, fgImpact: -1.064, ftImpact: 0.678, to: -1.781 } },
          { name: "Trey Hall", min: 6, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.42, zScores: { pts: -0.652, reb: -0.383, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 0.424, ftImpact: 0, to: -0.035 } },
          { name: "LaTrell Hoover", min: 1, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -5.45, zScores: { pts: -1.074, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: -1.945, to: 0.838 } },
          { name: "Marial Akuentok", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Josiah Moseley", min: 17, pts: 2, reb: 3, ast: 1, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: 1.51, zScores: { pts: -0.793, reb: -0.031, ast: -0.267, stl: 0.318, blk: 2.392, tpm: -0.597, fgImpact: -0.355, ftImpact: 0, to: 0.838 } },
          { name: "Amari Barrett", min: 8, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -4.71, zScores: { pts: -1.074, reb: -0.383, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -1.168, ftImpact: 0, to: -0.035 } },
          { name: "Damarion Dennis", min: 23, pts: 18, reb: 4, ast: 4, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 7, fga: 12, ftm: 2, fta: 3, composite: 6.32, zScores: { pts: 1.457, reb: 0.321, ast: 1.18, stl: 1.344, blk: -0.478, tpm: 0.927, fgImpact: 1.023, ftImpact: -0.294, to: 0.838 } },
          { name: "DaKari Spear", min: 22, pts: 6, reb: 3, ast: 1, stl: 2, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 6, ftm: 3, fta: 4, composite: 1.3, zScores: { pts: -0.231, reb: -0.031, ast: -0.267, stl: 1.344, blk: 0.957, tpm: 0.165, fgImpact: -1.523, ftImpact: 0.045, to: 0.838 } }
        ]
      }
    },
      {
      id: "401920515",
      line: "Kansas Jayhawks 86 @ West Virginia Mountaineers 82 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Kan", name: "Kansas Jayhawks", score: 86,
        players: [
          { name: "Keanu Dawes", min: 31, pts: 18, reb: 12, ast: 0, stl: 1, blk: 2, to: 0, tpm: 1, fgm: 7, fga: 9, ftm: 3, fta: 4, composite: 9.79, zScores: { pts: 1.457, reb: 3.138, ast: -0.749, stl: 0.318, blk: 2.392, tpm: 0.165, fgImpact: 2.191, ftImpact: 0.045, to: 0.838 } },
          { name: "Trey Kaufman-Renn", min: 29, pts: 19, reb: 7, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 8, fga: 16, ftm: 3, fta: 9, composite: -4.04, zScores: { pts: 1.597, reb: 1.377, ast: 0.215, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.278, ftImpact: -4.818, to: -0.908 } },
          { name: "Leroy Blyden Jr.", min: 33, pts: 13, reb: 1, ast: 4, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 7, ftm: 4, fta: 5, composite: 0.18, zScores: { pts: 0.754, reb: -0.735, ast: 1.18, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 0.529, ftImpact: 0.384, to: -0.908 } },
          { name: "Taylen Kinney", min: 26, pts: 3, reb: 2, ast: 3, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 3, fta: 4, composite: -0.99, zScores: { pts: -0.652, reb: -0.383, ast: 0.698, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 0.045, to: 0.838 } },
          { name: "Tre White", min: 38, pts: 21, reb: 6, ast: 3, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 18, ftm: 10, fta: 14, composite: 0.13, zScores: { pts: 1.879, reb: 1.025, ast: 0.698, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: -2.942, ftImpact: -0.499, to: -0.035 } },
          { name: "Christian Reeves", min: 11, pts: 2, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.01, zScores: { pts: -0.793, reb: -0.383, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0.424, ftImpact: 0, to: 0.838 } },
          { name: "Trent Perry", min: 22, pts: 8, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 4, fta: 4, composite: -1.08, zScores: { pts: 0.051, reb: -0.383, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.459, ftImpact: 1.356, to: -0.035 } },
          { name: "Dennis Parker Jr.", min: 10, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.55, zScores: { pts: -1.074, reb: -0.031, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: -0.908 } }
        ]
      },
      home: {
        abbr: "WVU", name: "West Virginia Mountaineers", score: 82,
        players: [
          { name: "Brenen Lorient", min: 18, pts: 4, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.55, zScores: { pts: -0.512, reb: -0.383, ast: 0.215, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.07, ftImpact: 0, to: 0.838 } },
          { name: "Mouhamed Sylla", min: 21, pts: 6, reb: 8, ast: 0, stl: 2, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: 5.09, zScores: { pts: -0.231, reb: 1.73, ast: -0.749, stl: 1.344, blk: 2.392, tpm: -0.597, fgImpact: -0.32, ftImpact: 0.678, to: 0.838 } },
          { name: "Miles Sadler", min: 29, pts: 34, reb: 2, ast: 3, stl: 1, blk: 0, to: 5, tpm: 2, fgm: 11, fga: 23, ftm: 10, fta: 11, composite: 3.67, zScores: { pts: 3.707, reb: -0.383, ast: 0.698, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: -0.007, ftImpact: 2.418, to: -3.527 } },
          { name: "Seydou Traore", min: 22, pts: 5, reb: 5, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 3, fta: 4, composite: 0.74, zScores: { pts: -0.371, reb: 0.673, ast: -0.749, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: 0.035, ftImpact: 0.045, to: 0.838 } },
          { name: "Finley Bizjack", min: 27, pts: 9, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 13, ftm: 5, fta: 5, composite: -4.15, zScores: { pts: 0.191, reb: -0.031, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -3.436, ftImpact: 1.695, to: -0.035 } },
          { name: "Javan Buchanan", min: 24, pts: 4, reb: 4, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -0.61, zScores: { pts: -0.512, reb: 0.321, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0.035, ftImpact: 0.678, to: -0.035 } },
          { name: "Amadou Seini", min: 15, pts: 4, reb: 6, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.11, zScores: { pts: -0.512, reb: 1.025, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.459, ftImpact: 0, to: -0.035 } },
          { name: "Martin Somerville", min: 29, pts: 16, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 5, fga: 11, ftm: 2, fta: 3, composite: 3.5, zScores: { pts: 1.176, reb: -0.031, ast: -0.267, stl: 0.318, blk: -0.478, tpm: 2.451, fgImpact: -0.215, ftImpact: -0.294, to: 0.838 } },
          { name: "Joson Sanon", min: 15, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.19, zScores: { pts: -1.074, reb: -0.031, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: 0.838 } }
        ]
      }
    },
      {
      id: "401920682",
      line: "Siena Saints 72 @ St. John's Red Storm 119 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SIE", name: "Siena Saints", score: 72,
        players: [

        ]
      },
      home: {
        abbr: "StJon", name: "St. John's Red Storm", score: 119,
        players: [
          { name: "Ruben Prey", min: 16, pts: 0, reb: 6, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -1.56, zScores: { pts: -1.074, reb: 1.025, ast: 0.698, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: -0.035 } },
          { name: "Keyshawn Hall", min: 22, pts: 20, reb: 5, ast: 5, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 7, fga: 14, ftm: 4, fta: 4, composite: 7.28, zScores: { pts: 1.738, reb: 0.673, ast: 1.662, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: 0.244, ftImpact: 1.356, to: 0.838 } },
          { name: "Quinn Ellis", min: 22, pts: 14, reb: 5, ast: 10, stl: 2, blk: 1, to: 1, tpm: 2, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 9.82, zScores: { pts: 0.894, reb: 0.673, ast: 4.073, stl: 1.344, blk: 0.957, tpm: 0.927, fgImpact: 0.988, ftImpact: 0, to: -0.035 } },
          { name: "Tounde Yessoufou", min: 15, pts: 12, reb: 7, ast: 2, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 10, ftm: 1, fta: 2, composite: 4.32, zScores: { pts: 0.613, reb: 1.377, ast: 0.215, stl: 1.344, blk: -0.478, tpm: 1.689, fgImpact: -0.64, ftImpact: -0.633, to: 0.838 } },
          { name: "Ian Jackson", min: 22, pts: 22, reb: 1, ast: 3, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 9, fga: 15, ftm: 1, fta: 1, composite: 4.27, zScores: { pts: 2.019, reb: -0.735, ast: 0.698, stl: -0.708, blk: -0.478, tpm: 1.689, fgImpact: 1.482, ftImpact: 0.339, to: -0.035 } },
          { name: "Babacar Sane", min: 19, pts: 10, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 1.42, zScores: { pts: 0.332, reb: 0.321, ast: -0.267, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0.953, ftImpact: 0, to: 0.838 } },
          { name: "Reed Bailey", min: 10, pts: 0, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.54, zScores: { pts: -1.074, reb: -0.735, ast: 0.215, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Zsombor Maronka", min: 20, pts: 8, reb: 4, ast: 3, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 2.14, zScores: { pts: 0.051, reb: 0.321, ast: 0.698, stl: -0.708, blk: -0.478, tpm: 0.927, fgImpact: 0.494, ftImpact: 0, to: 0.838 } },
          { name: "Lazar Stojkovic", min: 2, pts: 4, reb: 1, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.56, zScores: { pts: -0.512, reb: -0.735, ast: -0.267, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0.459, ftImpact: 0, to: 0.838 } },
          { name: "Theo Edema", min: 14, pts: 4, reb: 2, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 0.74, zScores: { pts: -0.512, reb: -0.383, ast: -0.267, stl: -0.708, blk: 2.392, tpm: -0.597, fgImpact: 0.849, ftImpact: 0, to: -0.035 } },
          { name: "Fotis Konstantinidis", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.63, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 0, to: 0.838 } },
          { name: "Casper Pohto", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Lefteris Liotopoulos", min: 23, pts: 21, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 3, fgm: 7, fga: 12, ftm: 4, fta: 4, composite: 3.2, zScores: { pts: 1.879, reb: -0.383, ast: -0.267, stl: -0.708, blk: -0.478, tpm: 1.689, fgImpact: 1.023, ftImpact: 1.356, to: -0.908 } },
          { name: "Avery Brown", min: 9, pts: 4, reb: 6, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 0.15, zScores: { pts: -0.512, reb: 1.025, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.849, ftImpact: 0, to: 0.838 } },
          { name: "Kyle Cuffe Jr.", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: 0.838 } }
        ]
      }
    },
      {
      id: "401921742",
      line: "Northern Colorado Bears 54 @ BYU Cougars 98 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UNCO", name: "Northern Colorado Bears", score: 54,
        players: [

        ]
      },
      home: {
        abbr: "BYU", name: "BYU Cougars", score: 98,
        players: [
          { name: "Bruce Branch III", min: 25, pts: 16, reb: 3, ast: 6, stl: 3, blk: 1, to: 2, tpm: 2, fgm: 5, fga: 14, ftm: 4, fta: 6, composite: 4.66, zScores: { pts: 1.176, reb: -0.031, ast: 2.144, stl: 2.369, blk: 0.957, tpm: 0.927, fgImpact: -1.384, ftImpact: -0.589, to: -0.908 } },
          { name: "Jake Wahlin", min: 22, pts: 9, reb: 3, ast: 3, stl: 3, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 2.92, zScores: { pts: 0.191, reb: -0.031, ast: 0.698, stl: 2.369, blk: -0.478, tpm: 0.165, fgImpact: 0.918, ftImpact: 0, to: -0.908 } },
          { name: "Jaxon Kohler", min: 20, pts: 16, reb: 5, ast: 0, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 7, fga: 11, ftm: 0, fta: 0, composite: 0.47, zScores: { pts: 1.176, reb: 0.673, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.927, fgImpact: 1.412, ftImpact: 0, to: -1.781 } },
          { name: "Tyler Betsey", min: 26, pts: 10, reb: 5, ast: 1, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 8, ftm: 0, fta: 0, composite: 2.48, zScores: { pts: 0.332, reb: 0.673, ast: -0.267, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: 0.139, ftImpact: 0, to: 0.838 } },
          { name: "Collin Chandler", min: 22, pts: 20, reb: 2, ast: 4, stl: 1, blk: 1, to: 3, tpm: 2, fgm: 7, fga: 11, ftm: 4, fta: 4, composite: 5.72, zScores: { pts: 1.738, reb: -0.383, ast: 1.18, stl: 0.318, blk: 0.957, tpm: 0.927, fgImpact: 1.412, ftImpact: 1.356, to: -1.781 } },
          { name: "Brooks Bahr", min: 18, pts: 13, reb: 3, ast: 4, stl: 5, blk: 0, to: 1, tpm: 0, fgm: 6, fga: 6, ftm: 1, fta: 1, composite: 8.1, zScores: { pts: 0.754, reb: -0.031, ast: 1.18, stl: 4.421, blk: -0.478, tpm: -0.597, fgImpact: 2.546, ftImpact: 0.339, to: -0.035 } },
          { name: "Dean Rueckert", min: 11, pts: 3, reb: 4, ast: 0, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -5.02, zScores: { pts: -0.652, reb: 0.321, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -1.134, ftImpact: 0, to: -1.781 } },
          { name: "Khadim Mboup", min: 18, pts: 8, reb: 7, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 4, ftm: 4, fta: 4, composite: 2.2, zScores: { pts: 0.051, reb: 1.377, ast: -0.267, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0.07, ftImpact: 1.356, to: -0.035 } },
          { name: "Brody Kozlowski", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: 0.838 } },
          { name: "Dawson Baker", min: 13, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.81, zScores: { pts: -0.652, reb: -0.383, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 0.035, ftImpact: 0, to: -0.035 } },
          { name: "Petar Ostojic", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.5, zScores: { pts: -1.074, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Nate Pickens", min: 18, pts: 0, reb: 5, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -1.44, zScores: { pts: -1.074, reb: 0.673, ast: -0.267, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: -0.035 } }
        ]
      }
    },
      {
      id: "401926064",
      line: "South Dakota Coyotes 47 @ Nebraska Cornhuskers 73 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "SDAK", name: "South Dakota Coyotes", score: 47,
        players: [

        ]
      },
      home: {
        abbr: "Nebras", name: "Nebraska Cornhuskers", score: 73,
        players: [
          { name: "Braden Frager", min: 32, pts: 15, reb: 6, ast: 0, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 9, ftm: 4, fta: 7, composite: -0.03, zScores: { pts: 1.035, reb: 1.025, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 1.689, fgImpact: -0.25, ftImpact: -1.561, to: -0.035 } },
          { name: "Boden Kapke", min: 17, pts: 4, reb: 4, ast: 1, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 2, fga: 8, ftm: 0, fta: 1, composite: -5.05, zScores: { pts: -0.512, reb: 0.321, ast: -0.267, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: -1.488, ftImpact: -0.973, to: -1.781 } },
          { name: "Pryce Sandfort", min: 34, pts: 22, reb: 7, ast: 2, stl: 2, blk: 0, to: 1, tpm: 4, fgm: 7, fga: 12, ftm: 4, fta: 4, composite: 9.27, zScores: { pts: 2.019, reb: 1.377, ast: 0.215, stl: 1.344, blk: -0.478, tpm: 2.451, fgImpact: 1.023, ftImpact: 1.356, to: -0.035 } },
          { name: "Cale Jacobsen", min: 20, pts: 2, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.43, zScores: { pts: -0.793, reb: 0.321, ast: 0.215, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.355, ftImpact: 0, to: -0.035 } },
          { name: "Trevan Leonhardt", min: 25, pts: 5, reb: 3, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 3, composite: -0.86, zScores: { pts: -0.371, reb: -0.031, ast: 0.215, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0.849, ftImpact: -1.606, to: 0.838 } },
          { name: "Leo Curtis", min: 3, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -2.94, zScores: { pts: -0.652, reb: -0.383, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: -0.633, to: 0.838 } },
          { name: "Damon Wilkinson", min: 21, pts: 17, reb: 9, ast: 2, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 6, fga: 9, ftm: 4, fta: 5, composite: 3.45, zScores: { pts: 1.316, reb: 2.082, ast: 0.215, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 1.377, ftImpact: 0.384, to: -0.908 } },
          { name: "Sam Orme", min: 15, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.09, zScores: { pts: -1.074, reb: -1.088, ast: -0.267, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: -0.908 } },
          { name: "Kadyn Betts", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.73, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: -0.035 } },
          { name: "Colin Rice", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.63, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 0, to: 0.838 } },
          { name: "Jacob Lanier", min: 14, pts: 5, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 5, fta: 5, composite: -2.37, zScores: { pts: -0.371, reb: -0.735, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 1.695, to: -0.908 } },
          { name: "Connor Essegian", min: 3, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.67, zScores: { pts: -1.074, reb: -0.383, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Taj DeGourville", min: 13, pts: 0, reb: 0, ast: 1, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.46, zScores: { pts: -1.074, reb: -1.088, ast: -0.267, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: -0.908 } }
        ]
      }
    },
      {
      id: "401917982",
      line: "UL Monroe Warhawks 67 @ LSU Tigers 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ULM", name: "UL Monroe Warhawks", score: 67,
        players: [

        ]
      },
      home: {
        abbr: "LSU", name: "LSU Tigers", score: 79,
        players: [
          { name: "Saliou Niang", min: 19, pts: 3, reb: 1, ast: 2, stl: 1, blk: 1, to: 3, tpm: 0, fgm: 1, fga: 6, ftm: 1, fta: 2, composite: -4.43, zScores: { pts: -0.652, reb: -0.735, ast: 0.215, stl: 0.318, blk: 0.957, tpm: -0.597, fgImpact: -1.523, ftImpact: -0.633, to: -1.781 } },
          { name: "Mo Dioubate", min: 22, pts: 16, reb: 8, ast: 0, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 7, fga: 8, ftm: 2, fta: 3, composite: 6.26, zScores: { pts: 1.176, reb: 1.73, ast: -0.749, stl: 2.369, blk: 0.957, tpm: -0.597, fgImpact: 2.581, ftImpact: -0.294, to: -0.908 } },
          { name: "Brice Dessert", min: 16, pts: 2, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.31, zScores: { pts: -0.793, reb: -0.031, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: -0.355, ftImpact: 0, to: -0.035 } },
          { name: "Donovan Dent", min: 37, pts: 8, reb: 1, ast: 10, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 4, fga: 12, ftm: 0, fta: 1, composite: -0.52, zScores: { pts: 0.051, reb: -0.735, ast: 4.073, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: -1.419, ftImpact: -0.973, to: -1.781 } },
          { name: "Skyy Clark", min: 33, pts: 17, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 12, ftm: 4, fta: 4, composite: 3.13, zScores: { pts: 1.316, reb: 0.321, ast: -0.749, stl: 0.318, blk: -0.478, tpm: 1.689, fgImpact: -0.605, ftImpact: 1.356, to: -0.035 } },
          { name: "Michael Ruzic", min: 24, pts: 8, reb: 9, ast: 2, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 6, fta: 6, composite: 4.6, zScores: { pts: 0.051, reb: 2.082, ast: 0.215, stl: -0.708, blk: 2.392, tpm: -0.597, fgImpact: 0.035, ftImpact: 2.035, to: -0.908 } },
          { name: "Abdi Bashir Jr.", min: 24, pts: 14, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 8, ftm: 5, fta: 6, composite: 0.98, zScores: { pts: 0.894, reb: 0.321, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 1.689, fgImpact: -0.675, ftImpact: 0.723, to: -0.035 } },
          { name: "RJ Luis Jr.", min: 15, pts: 11, reb: 9, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 9, ftm: 4, fta: 5, composite: 1.99, zScores: { pts: 0.472, reb: 2.082, ast: -0.267, stl: -0.708, blk: 0.957, tpm: 0.165, fgImpact: -1.064, ftImpact: 0.384, to: -0.035 } },
          { name: "Divine Ugochukwu", min: 10, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.074, reb: -1.088, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: -0.035 } }
        ]
      }
    },
      {
      id: "401909753",
      line: "Jackson State Tigers 55 @ Baylor Bears 104 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "JKST", name: "Jackson State Tigers", score: 55,
        players: [

        ]
      },
      home: {
        abbr: "Baylor", name: "Baylor Bears", score: 104,
        players: [
          { name: "Elijah Williams", min: 22, pts: 15, reb: 7, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 7, fga: 8, ftm: 0, fta: 1, composite: 4.13, zScores: { pts: 1.035, reb: 1.377, ast: -0.267, stl: -0.708, blk: 0.957, tpm: 0.165, fgImpact: 2.581, ftImpact: -0.973, to: -0.035 } },
          { name: "Juslin Bodo Bodo", min: 12, pts: 0, reb: 4, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.89, zScores: { pts: -1.074, reb: 0.321, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: -0.035 } },
          { name: "Brett Decker Jr.", min: 26, pts: 35, reb: 2, ast: 2, stl: 3, blk: 0, to: 1, tpm: 10, fgm: 11, fga: 18, ftm: 3, fta: 3, composite: 15.51, zScores: { pts: 3.847, reb: -0.383, ast: 0.215, stl: 2.369, blk: -0.478, tpm: 7.021, fgImpact: 1.941, ftImpact: 1.017, to: -0.035 } },
          { name: "Dylan Mingo", min: 20, pts: 13, reb: 2, ast: 3, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 5, fga: 7, ftm: 3, fta: 4, composite: 0.94, zScores: { pts: 0.754, reb: -0.383, ast: 0.698, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: 1.342, ftImpact: 0.045, to: -1.781 } },
          { name: "Kayden Mingo", min: 22, pts: 7, reb: 3, ast: 7, stl: 2, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 8, ftm: 2, fta: 4, composite: 0.75, zScores: { pts: -0.09, reb: -0.031, ast: 2.626, stl: 1.344, blk: -0.478, tpm: 0.165, fgImpact: -1.488, ftImpact: -1.267, to: -0.035 } },
          { name: "Evan Chatman", min: 16, pts: 7, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 1.24, zScores: { pts: -0.09, reb: -0.383, ast: -0.267, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: 0.459, ftImpact: 0.678, to: 0.838 } },
          { name: "Maikcol Perez", min: 4, pts: 2, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.64, zScores: { pts: -0.793, reb: -1.088, ast: -0.267, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: 0, to: 0.838 } },
          { name: "Isaac Celiscar", min: 19, pts: 8, reb: 3, ast: 7, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 3.27, zScores: { pts: 0.051, reb: -0.031, ast: 2.626, stl: 2.369, blk: -0.478, tpm: -0.597, fgImpact: -0.64, ftImpact: 0, to: -0.035 } },
          { name: "Tegra Makabu", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Mayo Soyoye", min: 10, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.13, zScores: { pts: -1.074, reb: -0.383, ast: -0.749, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Caden Powell", min: 17, pts: 12, reb: 3, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 4, fta: 4, composite: 2.82, zScores: { pts: 0.613, reb: -0.031, ast: -0.267, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: 0.918, ftImpact: 1.356, to: -0.035 } },
          { name: "Drew Perry", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.73, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: -0.035 } },
          { name: "Isaac Williams IV", min: 24, pts: 5, reb: 5, ast: 8, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 3.06, zScores: { pts: -0.371, reb: 0.673, ast: 3.109, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: -0.32, ftImpact: 0, to: -0.035 } },
          { name: "Andre Iguodala II", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.6, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: -0.908 } },
          { name: "James Goodis", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } }
        ]
      }
    },
      {
      id: "401920513",
      line: "Rutgers Scarlet Knights 100 @ Notre Dame Fighting Irish 110 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "Rut", name: "Rutgers Scarlet Knights", score: 100,
        players: [
          { name: "Christian Gurdak", min: 26, pts: 13, reb: 10, ast: 0, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 6, fga: 8, ftm: 1, fta: 3, composite: 0.47, zScores: { pts: 0.754, reb: 2.434, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 1.767, ftImpact: -1.606, to: -1.781 } },
          { name: "Lino Mark", min: 39, pts: 23, reb: 8, ast: 6, stl: 0, blk: 0, to: 4, tpm: 2, fgm: 7, fga: 14, ftm: 7, fta: 8, composite: 4.76, zScores: { pts: 2.16, reb: 1.73, ast: 2.144, stl: -0.708, blk: -0.478, tpm: 0.927, fgImpact: 0.244, ftImpact: 1.401, to: -2.654 } },
          { name: "Darin Smith Jr.", min: 25, pts: 10, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 1, fta: 2, composite: -1.44, zScores: { pts: 0.332, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 0.529, ftImpact: -0.633, to: 0.838 } },
          { name: "Tariq Francis", min: 37, pts: 25, reb: 0, ast: 4, stl: 3, blk: 0, to: 3, tpm: 2, fgm: 9, fga: 18, ftm: 5, fta: 5, composite: 5.58, zScores: { pts: 2.441, reb: -1.088, ast: 1.18, stl: 2.369, blk: -0.478, tpm: 0.927, fgImpact: 0.313, ftImpact: 1.695, to: -1.781 } },
          { name: "Darren Buchanan Jr.", min: 31, pts: 4, reb: 4, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -0.99, zScores: { pts: -0.512, reb: 0.321, ast: 0.215, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -1.099, ftImpact: 0, to: 0.838 } },
          { name: "Mervedi Miteo", min: 11, pts: 9, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 7, ftm: 1, fta: 2, composite: -1.08, zScores: { pts: 0.191, reb: -0.031, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0.529, ftImpact: -0.633, to: -0.035 } },
          { name: "Dorin Buca", min: 3, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.37, zScores: { pts: -1.074, reb: -1.088, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Diego Garavaglia", min: 14, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.8, zScores: { pts: -0.793, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: 0, to: 0.838 } },
          { name: "Jamichael Davis", min: 29, pts: 14, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 5, ftm: 3, fta: 4, composite: 3.77, zScores: { pts: 0.894, reb: -0.031, ast: 0.215, stl: -0.708, blk: -0.478, tpm: 1.689, fgImpact: 1.308, ftImpact: 0.045, to: 0.838 } },
          { name: "Rasheed Jones", min: 10, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.61, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 0, to: 0.838 } }
        ]
      },
      home: {
        abbr: "ND", name: "Notre Dame Fighting Irish", score: 110,
        players: [
          { name: "Brady Koehler", min: 35, pts: 27, reb: 8, ast: 5, stl: 1, blk: 2, to: 0, tpm: 4, fgm: 8, fga: 11, ftm: 7, fta: 10, composite: 13.79, zScores: { pts: 2.722, reb: 1.73, ast: 1.662, stl: 0.318, blk: 2.392, tpm: 2.451, fgImpact: 2.226, ftImpact: -0.544, to: 0.838 } },
          { name: "Logan Duncomb", min: 24, pts: 12, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 6, fga: 10, ftm: 0, fta: 1, composite: -0.46, zScores: { pts: 0.613, reb: -0.031, ast: -0.267, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0.988, ftImpact: -0.973, to: -0.035 } },
          { name: "Ethan Roberts", min: 32, pts: 17, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 5, fga: 11, ftm: 4, fta: 4, composite: 2.98, zScores: { pts: 1.316, reb: 0.321, ast: -0.267, stl: -0.708, blk: -0.478, tpm: 1.689, fgImpact: -0.215, ftImpact: 1.356, to: -0.035 } },
          { name: "Braeden Smith", min: 38, pts: 26, reb: 6, ast: 6, stl: 2, blk: 0, to: 3, tpm: 1, fgm: 10, fga: 11, ftm: 5, fta: 8, composite: 7.63, zScores: { pts: 2.582, reb: 1.025, ast: 2.144, stl: 1.344, blk: -0.478, tpm: 0.165, fgImpact: 3.853, ftImpact: -1.222, to: -1.781 } },
          { name: "Braeden Shrewsberry", min: 37, pts: 13, reb: 2, ast: 3, stl: 0, blk: 0, to: 3, tpm: 3, fgm: 5, fga: 12, ftm: 0, fta: 0, composite: -0.82, zScores: { pts: 0.754, reb: -0.383, ast: 0.698, stl: -0.708, blk: -0.478, tpm: 1.689, fgImpact: -0.605, ftImpact: 0, to: -1.781 } },
          { name: "Bryce Ruglass Dortch", min: 15, pts: 4, reb: 1, ast: 1, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 1, composite: -0.12, zScores: { pts: -0.512, reb: -0.735, ast: -0.267, stl: 0.318, blk: 0.957, tpm: -0.597, fgImpact: 0.849, ftImpact: -0.973, to: 0.838 } },
          { name: "Yoro Diallo", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Gan-Erdene Solongo", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -1.71, zScores: { pts: -0.793, reb: -1.088, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0.424, ftImpact: 0, to: 0.838 } },
          { name: "Devin Brown", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Jonathan Sanderson", min: 15, pts: 0, reb: 1, ast: 3, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -1.27, zScores: { pts: -1.074, reb: -0.735, ast: 0.698, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: -0.035 } },
          { name: "Logan Imes", min: 21, pts: 9, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 3, fta: 3, composite: 1.91, zScores: { pts: 0.191, reb: -0.383, ast: -0.267, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 1.273, ftImpact: 1.017, to: 0.838 } }
        ]
      }
    },
      {
      id: "401917181",
      line: "IU Indianapolis Jaguars 74 @ Penn State Nittany Lions 81 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "IUIN", name: "IU Indianapolis Jaguars", score: 74,
        players: [

        ]
      },
      home: {
        abbr: "PSU", name: "Penn State Nittany Lions", score: 81,
        players: [
          { name: "Roko Prkacin", min: 31, pts: 8, reb: 6, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 4, composite: -1.78, zScores: { pts: 0.051, reb: 1.025, ast: 0.215, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.883, ftImpact: -1.267, to: -0.908 } },
          { name: "Ivan Juric", min: 35, pts: 21, reb: 16, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 7, fga: 11, ftm: 7, fta: 13, composite: 4.76, zScores: { pts: 1.879, reb: 4.547, ast: 1.18, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 1.412, ftImpact: -3.462, to: -0.035 } },
          { name: "Josh Reed", min: 32, pts: 9, reb: 3, ast: 5, stl: 3, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 12, ftm: 3, fta: 3, composite: 3.3, zScores: { pts: 0.191, reb: -0.031, ast: 1.662, stl: 2.369, blk: 0.957, tpm: -0.597, fgImpact: -2.233, ftImpact: 1.017, to: -0.035 } },
          { name: "Thomas Allard", min: 35, pts: 15, reb: 2, ast: 3, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 5, fga: 10, ftm: 0, fta: 0, composite: 3.51, zScores: { pts: 1.035, reb: -0.383, ast: 0.698, stl: -0.708, blk: -0.478, tpm: 3.212, fgImpact: 0.174, ftImpact: 0, to: -0.035 } },
          { name: "Dasonte Bowen", min: 30, pts: 17, reb: 4, ast: 5, stl: 0, blk: 0, to: 3, tpm: 2, fgm: 5, fga: 8, ftm: 5, fta: 6, composite: 2.93, zScores: { pts: 1.316, reb: 0.321, ast: 1.662, stl: -0.708, blk: -0.478, tpm: 0.927, fgImpact: 0.953, ftImpact: 0.723, to: -1.781 } },
          { name: "Francois Wibaut", min: 19, pts: 3, reb: 4, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -0.09, zScores: { pts: -0.652, reb: 0.321, ast: -0.267, stl: -0.708, blk: 0.957, tpm: 0.165, fgImpact: -0.744, ftImpact: 0, to: 0.838 } },
          { name: "Reggie Grodin", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.89, zScores: { pts: -1.074, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: 0.838 } },
          { name: "Jay Rodgers", min: 15, pts: 8, reb: 1, ast: 2, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: 0.62, zScores: { pts: 0.051, reb: -0.735, ast: 0.215, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: -0.32, ftImpact: 0.678, to: -0.035 } }
        ]
      }
    },
      {
      id: "401909516",
      line: "Navy Midshipmen 53 @ Georgetown Hoyas 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NAVY", name: "Navy Midshipmen", score: 53,
        players: [

        ]
      },
      home: {
        abbr: "GTown", name: "Georgetown Hoyas", score: 84,
        players: [
          { name: "Caleb Williams", min: 24, pts: 4, reb: 6, ast: 4, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 0.58, zScores: { pts: -0.512, reb: 1.025, ast: 1.18, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -0.32, ftImpact: 0, to: -0.035 } },
          { name: "Vince Iwuchukwu", min: 20, pts: 15, reb: 9, ast: 0, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 5, fga: 9, ftm: 5, fta: 6, composite: 1.53, zScores: { pts: 1.035, reb: 2.082, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0.563, ftImpact: 0.723, to: -1.781 } },
          { name: "Kayvaun Mulready", min: 32, pts: 17, reb: 5, ast: 2, stl: 1, blk: 1, to: 2, tpm: 4, fgm: 6, fga: 12, ftm: 1, fta: 1, composite: 5.57, zScores: { pts: 1.316, reb: 0.673, ast: 0.215, stl: 0.318, blk: 0.957, tpm: 2.451, fgImpact: 0.209, ftImpact: 0.339, to: -0.908 } },
          { name: "Elmarko Jackson", min: 34, pts: 14, reb: 10, ast: 5, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 9, ftm: 0, fta: 0, composite: 7.1, zScores: { pts: 0.894, reb: 2.434, ast: 1.662, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: 1.377, ftImpact: 0, to: -0.035 } },
          { name: "Jaland Lowe", min: 30, pts: 7, reb: 2, ast: 8, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 1.06, zScores: { pts: -0.09, reb: -0.383, ast: 3.109, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: -0.675, ftImpact: 0, to: -0.908 } },
          { name: "Pedro Pastre", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Josiah Parker", min: 19, pts: 11, reb: 7, ast: 3, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 6, ftm: 1, fta: 4, composite: -0.28, zScores: { pts: 0.472, reb: 1.377, ast: 0.698, stl: -0.708, blk: -0.478, tpm: 0.927, fgImpact: 0.918, ftImpact: -2.579, to: -0.908 } },
          { name: "Justin Caldwell", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: 0.838 } },
          { name: "Chol Machot", min: 13, pts: 9, reb: 3, ast: 0, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 3, fga: 4, ftm: 3, fta: 4, composite: 1.54, zScores: { pts: 0.191, reb: -0.031, ast: -0.749, stl: 0.318, blk: 2.392, tpm: -0.597, fgImpact: 0.883, ftImpact: 0.045, to: -0.908 } },
          { name: "Seal Diouf", min: 6, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.13, zScores: { pts: -0.512, reb: -0.383, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.459, ftImpact: 0, to: 0.838 } },
          { name: "Athan Olivier IV", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: 0.838 } },
          { name: "Gabriel Landeira", min: 17, pts: 3, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.72, zScores: { pts: -0.652, reb: -0.031, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -0.355, ftImpact: 0, to: -0.908 } }
        ]
      }
    },
      {
      id: "401925782",
      line: "Howard Bison 68 @ Duquesne Dukes 74 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "HOW", name: "Howard Bison", score: 68,
        players: [

        ]
      },
      home: {
        abbr: "Duques", name: "Duquesne Dukes", score: 74,
        players: [
          { name: "Kerem Konan", min: 36, pts: 9, reb: 8, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 10, ftm: 1, fta: 7, composite: -4.56, zScores: { pts: 0.191, reb: 1.73, ast: -0.267, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: -1.454, ftImpact: -5.496, to: -0.035 } },
          { name: "Yoav Berman", min: 35, pts: 12, reb: 2, ast: 4, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 6, ftm: 6, fta: 6, composite: 2.59, zScores: { pts: 0.613, reb: -0.383, ast: 1.18, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: -0.709, ftImpact: 2.035, to: -0.908 } },
          { name: "Ege Demir", min: 20, pts: 12, reb: 5, ast: 1, stl: 0, blk: 6, to: 2, tpm: 0, fgm: 5, fga: 8, ftm: 2, fta: 2, composite: 8.57, zScores: { pts: 0.613, reb: 0.673, ast: -0.267, stl: -0.708, blk: 8.132, tpm: -0.597, fgImpact: 0.953, ftImpact: 0.678, to: -0.908 } },
          { name: "Izaiah Pasha", min: 27, pts: 9, reb: 5, ast: 1, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 4, ftm: 2, fta: 4, composite: 2.08, zScores: { pts: 0.191, reb: 0.673, ast: -0.267, stl: 1.344, blk: -0.478, tpm: 0.165, fgImpact: 0.883, ftImpact: -1.267, to: 0.838 } },
          { name: "Arness Lawson", min: 33, pts: 12, reb: 5, ast: 4, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 8, ftm: 2, fta: 5, composite: 2.29, zScores: { pts: 0.613, reb: 0.673, ast: 1.18, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: 0.953, ftImpact: -2.24, to: 0.838 } },
          { name: "Stephen Olowoniyi", min: 6, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 2, fta: 4, composite: -5.36, zScores: { pts: -0.793, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: -1.267, to: -0.035 } },
          { name: "Jackson Williams", min: 4, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.8, zScores: { pts: -1.074, reb: -0.383, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 0, to: -0.035 } },
          { name: "Brandon Hall", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.73, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: -0.035 } },
          { name: "Josh Smith", min: 22, pts: 18, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 7, ftm: 9, fta: 11, composite: 1.91, zScores: { pts: 1.457, reb: -0.735, ast: -0.267, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 0.529, ftImpact: 1.107, to: 0.838 } },
          { name: "Jake DiMichele", min: 13, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.38, zScores: { pts: -1.074, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: -0.035 } }
        ]
      }
    },
      {
      id: "401925632",
      line: "Coppin State Eagles 61 @ La Salle Explorers 88 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "COPP", name: "Coppin State Eagles", score: 61,
        players: [

        ]
      },
      home: {
        abbr: "LaSal", name: "La Salle Explorers", score: 88,
        players: [
          { name: "Anthony Finkley", min: 21, pts: 8, reb: 6, ast: 6, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 3, composite: 1.99, zScores: { pts: 0.051, reb: 1.025, ast: 2.144, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.883, ftImpact: -0.294, to: -0.035 } },
          { name: "Noah Collier", min: 19, pts: 8, reb: 5, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 5, composite: -3.34, zScores: { pts: 0.051, reb: 0.673, ast: -0.267, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0.104, ftImpact: -2.24, to: -0.908 } },
          { name: "Jaden Johnson", min: 21, pts: 2, reb: 3, ast: 5, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 0.58, zScores: { pts: -0.793, reb: -0.031, ast: 1.662, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: -0.744, ftImpact: 0, to: 0.838 } },
          { name: "Kam Burton", min: 22, pts: 36, reb: 3, ast: 3, stl: 2, blk: 0, to: 0, tpm: 11, fgm: 11, fga: 16, ftm: 3, fta: 3, composite: 17.88, zScores: { pts: 3.988, reb: -0.031, ast: 0.698, stl: 1.344, blk: -0.478, tpm: 7.783, fgImpact: 2.72, ftImpact: 1.017, to: 0.838 } },
          { name: "Trey Moss", min: 21, pts: 2, reb: 3, ast: 1, stl: 3, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -0.42, zScores: { pts: -0.793, reb: -0.031, ast: -0.267, stl: 2.369, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0.678, to: -0.908 } },
          { name: "Jay Nelson Mboudjika", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Francois Nkoy-Eale", min: 4, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.8, zScores: { pts: -0.793, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: 0, to: 0.838 } },
          { name: "Max Lipacis", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: 0.838 } },
          { name: "Eunique Rink", min: 7, pts: 0, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -3.31, zScores: { pts: -1.074, reb: -0.031, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0, ftImpact: -1.945, to: 0.838 } },
          { name: "Bowyn Beatty", min: 9, pts: 0, reb: 4, ast: 1, stl: 0, blk: 1, to: 4, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.41, zScores: { pts: -1.074, reb: 0.321, ast: -0.267, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: -2.654 } },
          { name: "Vice Zanki", min: 13, pts: 4, reb: 4, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -0.6, zScores: { pts: -0.512, reb: 0.321, ast: -0.267, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: -0.355, ftImpact: -0.633, to: 0.838 } },
          { name: "Breylon Webb", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "RJ Smith", min: 15, pts: 3, reb: 2, ast: 4, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 8, ftm: 0, fta: 0, composite: -2.34, zScores: { pts: -0.652, reb: -0.383, ast: 1.18, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -2.302, ftImpact: 0, to: 0.838 } },
          { name: "Jamison Lynam", min: 6, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -4.54, zScores: { pts: -0.793, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: 0, to: -0.908 } },
          { name: "Arlan Masharaliyev", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Devin Booker", min: 17, pts: 10, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 13, ftm: 3, fta: 3, composite: -2.59, zScores: { pts: 0.332, reb: -0.383, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -2.622, ftImpact: 1.017, to: 0.838 } },
          { name: "Rob Dockery", min: 19, pts: 11, reb: 7, ast: 2, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 2, fga: 8, ftm: 5, fta: 6, composite: 1.16, zScores: { pts: 0.472, reb: 1.377, ast: 0.215, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: -1.488, ftImpact: 0.723, to: -0.908 } }
        ]
      }
    },
      {
      id: "401922212",
      line: "Florida Gulf Coast Eagles 76 @ Florida Atlantic Owls 86 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "FGCU", name: "Florida Gulf Coast Eagles", score: 76,
        players: [

        ]
      },
      home: {
        abbr: "FAU", name: "Florida Atlantic Owls", score: 86,
        players: [
          { name: "Josh Harris", min: 34, pts: 21, reb: 9, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 9, fga: 14, ftm: 2, fta: 5, composite: 2.27, zScores: { pts: 1.879, reb: 2.082, ast: -0.267, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 1.871, ftImpact: -2.24, to: -0.035 } },
          { name: "Tacko Ifaola", min: 18, pts: 2, reb: 3, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -0.31, zScores: { pts: -0.793, reb: -0.031, ast: -0.267, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: -0.389, ftImpact: 0.678, to: 0.838 } },
          { name: "Felipe Quinones", min: 28, pts: 2, reb: 5, ast: 6, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -0.77, zScores: { pts: -0.793, reb: 0.673, ast: 2.144, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -1.134, ftImpact: 0, to: -0.908 } },
          { name: "Jelani Hamilton", min: 33, pts: 20, reb: 1, ast: 3, stl: 3, blk: 0, to: 2, tpm: 3, fgm: 7, fga: 19, ftm: 3, fta: 3, composite: 3.69, zScores: { pts: 1.738, reb: -0.735, ast: 0.698, stl: 2.369, blk: -0.478, tpm: 1.689, fgImpact: -1.704, ftImpact: 1.017, to: -0.908 } },
          { name: "Kanaan Carlyle", min: 33, pts: 21, reb: 2, ast: 2, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 6, fga: 11, ftm: 6, fta: 6, composite: 5.84, zScores: { pts: 1.879, reb: -0.383, ast: 0.215, stl: 0.318, blk: -0.478, tpm: 1.689, fgImpact: 0.598, ftImpact: 2.035, to: -0.035 } },
          { name: "David Musis", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Mason Porter-Brown", min: 20, pts: 11, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 6, ftm: 1, fta: 1, composite: 2.16, zScores: { pts: 0.472, reb: -0.031, ast: -0.267, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: 0.918, ftImpact: 0.339, to: -0.035 } },
          { name: "Kieran Mullen", min: 21, pts: 9, reb: 14, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 9, ftm: 3, fta: 4, composite: -0.43, zScores: { pts: 0.191, reb: 3.843, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -1.064, ftImpact: 0.045, to: -0.908 } },
          { name: "Milhan Charles", min: 12, pts: 0, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.45, zScores: { pts: -1.074, reb: -0.735, ast: 0.698, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: 0.838 } }
        ]
      }
    },
      {
      id: "401921141",
      line: "Elon Phoenix 72 @ South Carolina Gamecocks 80 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ELON", name: "Elon Phoenix", score: 72,
        players: [

        ]
      },
      home: {
        abbr: "SouthCar", name: "South Carolina Gamecocks", score: 80,
        players: [
          { name: "Juan Fernandez", min: 23, pts: 15, reb: 3, ast: 2, stl: 2, blk: 1, to: 3, tpm: 2, fgm: 4, fga: 9, ftm: 5, fta: 6, composite: 3.14, zScores: { pts: 1.035, reb: -0.031, ast: 0.215, stl: 1.344, blk: 0.957, tpm: 0.927, fgImpact: -0.25, ftImpact: 0.723, to: -1.781 } },
          { name: "Aleksas Bieliauskas", min: 23, pts: 8, reb: 7, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 8, ftm: 1, fta: 2, composite: -0.09, zScores: { pts: 0.051, reb: 1.377, ast: 0.698, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: -0.675, ftImpact: -0.633, to: -0.908 } },
          { name: "Camden Heide", min: 33, pts: 12, reb: 5, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 7, fta: 8, composite: 1.59, zScores: { pts: 0.613, reb: 0.673, ast: -0.749, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: -0.32, ftImpact: 1.401, to: -0.035 } },
          { name: "Kory Mincy", min: 32, pts: 6, reb: 1, ast: 3, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: -3.39, zScores: { pts: -0.231, reb: -0.735, ast: 0.698, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -1.454, ftImpact: 0, to: -0.908 } },
          { name: "Marcus Johnson", min: 22, pts: 10, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 4, fga: 9, ftm: 1, fta: 1, composite: -1.42, zScores: { pts: 0.332, reb: -0.031, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -0.25, ftImpact: 0.339, to: -0.035 } },
          { name: "Hugo Lopez", min: 2, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.5, zScores: { pts: -1.074, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Jakub Necas", min: 27, pts: 24, reb: 8, ast: 0, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 7, fga: 9, ftm: 9, fta: 11, composite: 8.14, zScores: { pts: 2.301, reb: 1.73, ast: -0.749, stl: 1.344, blk: 0.957, tpm: 0.165, fgImpact: 2.191, ftImpact: 1.107, to: -0.908 } },
          { name: "Shane Blakeney", min: 21, pts: 3, reb: 1, ast: 2, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.46, zScores: { pts: -0.652, reb: -0.735, ast: 0.215, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: -1.134, ftImpact: 0, to: 0.838 } },
          { name: "Eli Sparkman", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Davion Hannah", min: 13, pts: 2, reb: 0, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 2, fta: 2, composite: -1.69, zScores: { pts: -0.793, reb: -1.088, ast: 0.215, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 0.678, to: 0.838 } }
        ]
      }
    },
      {
      id: "401920694",
      line: "Vermont Catamounts 74 @ Yale Bulldogs 76 (Final/OT)",
      completed: true,
      statusText: "Final/OT",
      away: {
        abbr: "UVM", name: "Vermont Catamounts", score: 74,
        players: [

        ]
      },
      home: {
        abbr: "Yale", name: "Yale Bulldogs", score: 76,
        players: [
          { name: "Daniel Ogunyemi", min: 36, pts: 8, reb: 12, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 2, composite: 1.1, zScores: { pts: 0.051, reb: 3.138, ast: -0.267, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0.918, ftImpact: -1.945, to: -0.035 } },
          { name: "Jack Sullivan", min: 33, pts: 7, reb: 6, ast: 0, stl: 0, blk: 3, to: 2, tpm: 1, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: 2.67, zScores: { pts: -0.09, reb: 1.025, ast: -0.749, stl: -0.708, blk: 3.827, tpm: 0.165, fgImpact: 0.104, ftImpact: 0, to: -0.908 } },
          { name: "Riley Fox", min: 37, pts: 23, reb: 5, ast: 1, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 10, fga: 21, ftm: 1, fta: 1, composite: 1.7, zScores: { pts: 2.16, reb: 0.673, ast: -0.267, stl: -0.708, blk: -0.478, tpm: 0.927, fgImpact: -0.041, ftImpact: 0.339, to: -0.908 } },
          { name: "Courtney Wallace", min: 38, pts: 11, reb: 4, ast: 5, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 14, ftm: 0, fta: 0, composite: 2.94, zScores: { pts: 0.472, reb: 0.321, ast: 1.662, stl: 1.344, blk: -0.478, tpm: 0.165, fgImpact: -1.384, ftImpact: 0, to: 0.838 } },
          { name: "Trevor Mullin", min: 39, pts: 20, reb: 1, ast: 5, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 6, fga: 13, ftm: 5, fta: 7, composite: 3.58, zScores: { pts: 1.738, reb: -0.735, ast: 1.662, stl: -0.708, blk: -0.478, tpm: 1.689, fgImpact: -0.181, ftImpact: -0.25, to: 0.838 } },
          { name: "Connor May", min: 19, pts: 2, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -3.13, zScores: { pts: -0.793, reb: -0.383, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.744, ftImpact: 0, to: 0.838 } },
          { name: "Jonas Oware", min: 3, pts: 1, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -3.64, zScores: { pts: -0.934, reb: -0.383, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: -0.633, to: 0.838 } },
          { name: "Alvin Loving", min: 7, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.54, zScores: { pts: -0.793, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.035, ftImpact: 0, to: 0.838 } },
          { name: "Jeannot Basima", min: 13, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.71, zScores: { pts: -0.793, reb: -0.383, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.035, ftImpact: 0, to: -0.035 } }
        ]
      }
    },
      {
      id: "401920075",
      line: "North Carolina Central Eagles 60 @ George Mason Patriots 83 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NCCU", name: "North Carolina Central Eagles", score: 60,
        players: [

        ]
      },
      home: {
        abbr: "GMas", name: "George Mason Patriots", score: 83,
        players: [
          { name: "Michael Marcus Jr.", min: 16, pts: 5, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: -1.39, zScores: { pts: -0.371, reb: -0.735, ast: 0.215, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -0.32, ftImpact: 0, to: 0.838 } },
          { name: "Emmanuel Kanga", min: 28, pts: 15, reb: 13, ast: 1, stl: 1, blk: 2, to: 3, tpm: 0, fgm: 5, fga: 8, ftm: 5, fta: 8, composite: 4.32, zScores: { pts: 1.035, reb: 3.49, ast: -0.267, stl: 0.318, blk: 2.392, tpm: -0.597, fgImpact: 0.953, ftImpact: -1.222, to: -1.781 } },
          { name: "Efeosa Oliogu-Elabor", min: 21, pts: 6, reb: 2, ast: 2, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 1, composite: -0.55, zScores: { pts: -0.231, reb: -0.383, ast: 0.215, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: -0.285, ftImpact: -0.973, to: 0.838 } },
          { name: "Baraka Okojie", min: 30, pts: 11, reb: 1, ast: 9, stl: 2, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 6.24, zScores: { pts: 0.472, reb: -0.735, ast: 3.591, stl: 1.344, blk: -0.478, tpm: 1.689, fgImpact: -0.285, ftImpact: 0.678, to: -0.035 } },
          { name: "Brayden O'Connor", min: 30, pts: 16, reb: 3, ast: 3, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 7, fga: 11, ftm: 1, fta: 2, composite: 0.69, zScores: { pts: 1.176, reb: -0.031, ast: 0.698, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 1.412, ftImpact: -0.633, to: -0.908 } },
          { name: "Bryton Barrett", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.5, zScores: { pts: -1.074, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Emmett Adair", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Ryan-Preston Mendy", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.42, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Shane Pendergrass", min: 15, pts: 5, reb: 3, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: -2.78, zScores: { pts: -0.371, reb: -0.031, ast: -0.267, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: -1.099, ftImpact: -0.633, to: -0.035 } },
          { name: "Elijah Jones", min: 14, pts: 10, reb: 3, ast: 1, stl: 2, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 7, ftm: 0, fta: 1, composite: 2.22, zScores: { pts: 0.332, reb: -0.031, ast: -0.267, stl: 1.344, blk: -0.478, tpm: 0.927, fgImpact: 0.529, ftImpact: -0.973, to: 0.838 } },
          { name: "Peyton Miller", min: 4, pts: 1, reb: 1, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -3.51, zScores: { pts: -0.934, reb: -0.735, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: -0.633, to: 0.838 } },
          { name: "Makhai Valentine", min: 18, pts: 5, reb: 6, ast: 0, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 3, fta: 5, composite: -2.02, zScores: { pts: -0.371, reb: 1.025, ast: -0.749, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: -0.355, ftImpact: -0.928, to: -0.908 } },
          { name: "Ben Woodward", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.63, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 0, to: 0.838 } },
          { name: "Malik Presley", min: 16, pts: 9, reb: 3, ast: 1, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 3, fta: 4, composite: 2.56, zScores: { pts: 0.191, reb: -0.031, ast: -0.267, stl: 2.369, blk: -0.478, tpm: -0.597, fgImpact: 0.494, ftImpact: 0.045, to: 0.838 } }
        ]
      }
    },
      {
      id: "401919735",
      line: "Chicago State Cougars 52 @ UIC Flames 60 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CHST", name: "Chicago State Cougars", score: 52,
        players: [

        ]
      },
      home: {
        abbr: "UIC", name: "UIC Flames", score: 60,
        players: [
          { name: "Lucas Scroggins", min: 25, pts: 12, reb: 8, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 4, fta: 4, composite: 5.4, zScores: { pts: 0.613, reb: 1.73, ast: -0.749, stl: -0.708, blk: 2.392, tpm: -0.597, fgImpact: 0.529, ftImpact: 1.356, to: 0.838 } },
          { name: "Rashund Washington Jr.", min: 36, pts: 11, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 4, fta: 6, composite: 0.18, zScores: { pts: 0.472, reb: -0.383, ast: -0.267, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: 0.104, ftImpact: -0.589, to: 0.838 } },
          { name: "Mekhi Lowery", min: 33, pts: 9, reb: 10, ast: 6, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 8, ftm: 3, fta: 5, composite: 0.48, zScores: { pts: 0.191, reb: 2.434, ast: 2.144, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.675, ftImpact: -0.928, to: -0.908 } },
          { name: "Benny Gealer", min: 29, pts: 3, reb: 0, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -4.1, zScores: { pts: -0.652, reb: -1.088, ast: 0.215, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -1.523, ftImpact: 0, to: -0.035 } },
          { name: "Gabe Cupps", min: 33, pts: 19, reb: 6, ast: 0, stl: 2, blk: 0, to: 3, tpm: 4, fgm: 4, fga: 8, ftm: 7, fta: 8, composite: 4.95, zScores: { pts: 1.597, reb: 1.025, ast: -0.749, stl: 1.344, blk: -0.478, tpm: 2.451, fgImpact: 0.139, ftImpact: 1.401, to: -1.781 } },
          { name: "Dikembe Shaw", min: 8, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 1, fta: 2, composite: -3.52, zScores: { pts: -0.512, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -0.355, ftImpact: -0.633, to: 0.838 } },
          { name: "Nano Barrantes", min: 14, pts: 2, reb: 3, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: 0.05, zScores: { pts: -0.793, reb: -0.031, ast: -0.267, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: 0.035, ftImpact: 0, to: 0.838 } },
          { name: "Elijah Garrett", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.63, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 0, to: 0.838 } },
          { name: "Ahmad Henderson II", min: 19, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -5.45, zScores: { pts: -1.074, reb: -0.735, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -1.558, ftImpact: 0, to: -0.035 } }
        ]
      }
    },
      {
      id: "401911309",
      line: "Brown Bears 74 @ Holy Cross Crusaders 63 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Brown", name: "Brown Bears", score: 74,
        players: [
          { name: "N'famara Dabo", min: 34, pts: 11, reb: 9, ast: 0, stl: 1, blk: 4, to: 0, tpm: 0, fgm: 4, fga: 6, ftm: 3, fta: 4, composite: 8.59, zScores: { pts: 0.472, reb: 2.082, ast: -0.749, stl: 0.318, blk: 5.262, tpm: -0.597, fgImpact: 0.918, ftImpact: 0.045, to: 0.838 } },
          { name: "Timmy Bollin", min: 27, pts: 9, reb: 9, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 4, fga: 7, ftm: 1, fta: 2, composite: 1.5, zScores: { pts: 0.191, reb: 2.082, ast: -0.749, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0.529, ftImpact: -0.633, to: 0.838 } },
          { name: "Brady Loughlin", min: 22, pts: 6, reb: 2, ast: 2, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 1, fta: 1, composite: 1.49, zScores: { pts: -0.231, reb: -0.383, ast: 0.215, stl: 1.344, blk: -0.478, tpm: 0.165, fgImpact: -0.32, ftImpact: 0.339, to: 0.838 } },
          { name: "Isaiah Langham", min: 28, pts: 12, reb: 2, ast: 2, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 6, fga: 16, ftm: 0, fta: 0, composite: -1.54, zScores: { pts: 0.613, reb: -0.383, ast: 0.215, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: -1.349, ftImpact: 0, to: -0.908 } },
          { name: "Jeremiah Jenkins", min: 32, pts: 12, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 13, ftm: 4, fta: 4, composite: -0.24, zScores: { pts: 0.613, reb: -0.383, ast: 0.215, stl: -0.708, blk: -0.478, tpm: 0.927, fgImpact: -2.622, ftImpact: 1.356, to: 0.838 } },
          { name: "Charlie O'Sullivan", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.12, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: -0.035 } },
          { name: "Wyatt DeGraaf", min: 5, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.45, zScores: { pts: -0.793, reb: -0.383, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: 0, to: 0.838 } },
          { name: "Kenneth Francis Jr.", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.12, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: -0.035 } },
          { name: "Ray Cuevas", min: 30, pts: 20, reb: 5, ast: 3, stl: 2, blk: 2, to: 3, tpm: 1, fgm: 7, fga: 15, ftm: 5, fta: 9, composite: 2.89, zScores: { pts: 1.738, reb: 0.673, ast: 0.698, stl: 1.344, blk: 2.392, tpm: 0.165, fgImpact: -0.146, ftImpact: -2.195, to: -1.781 } },
          { name: "Adrian Uchidiuno", min: 8, pts: 0, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.84, zScores: { pts: -1.074, reb: -0.735, ast: 0.698, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 0, to: 0.838 } },
          { name: "Malcolm Wrisby-Jefferson", min: 9, pts: 2, reb: 1, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.26, zScores: { pts: -0.793, reb: -0.735, ast: -0.267, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: 0, to: 0.838 } }
        ]
      },
      home: {
        abbr: "HC", name: "Holy Cross Crusaders", score: 63,
        players: [

        ]
      }
    },
      {
      id: "401920761",
      line: "Union Commonwealth (KY) Bulldogs 44 @ Belmont Bruins 86 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UNKY", name: "Union Commonwealth (KY) Bulldogs", score: 44,
        players: [

        ]
      },
      home: {
        abbr: "Belm", name: "Belmont Bruins", score: 86,
        players: [
          { name: "Vincent Neugebauer", min: 16, pts: 8, reb: 5, ast: 1, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 0.99, zScores: { pts: 0.051, reb: 0.673, ast: -0.267, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0.918, ftImpact: 0, to: -0.035 } },
          { name: "Ethan Sage", min: 17, pts: 4, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: -1.43, zScores: { pts: -0.512, reb: -0.031, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.355, ftImpact: 0.678, to: 0.838 } },
          { name: "Jack Smiley", min: 21, pts: 18, reb: 2, ast: 4, stl: 1, blk: 0, to: 0, tpm: 4, fgm: 7, fga: 12, ftm: 0, fta: 0, composite: 6.4, zScores: { pts: 1.457, reb: -0.383, ast: 1.18, stl: 0.318, blk: -0.478, tpm: 2.451, fgImpact: 1.023, ftImpact: 0, to: 0.838 } },
          { name: "Jabez Jenkins", min: 17, pts: 4, reb: 4, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -2.6, zScores: { pts: -0.512, reb: 0.321, ast: 0.215, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.07, ftImpact: 0, to: -0.908 } },
          { name: "Isaiah West", min: 21, pts: 8, reb: 2, ast: 3, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 3.05, zScores: { pts: 0.051, reb: -0.383, ast: 0.698, stl: 0.318, blk: 0.957, tpm: -0.597, fgImpact: 0.494, ftImpact: 0.678, to: 0.838 } },
          { name: "Charlie Gersmehl", min: 12, pts: 1, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 4, composite: -5.67, zScores: { pts: -0.934, reb: 0.321, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: -2.579, to: -0.035 } },
          { name: "Cooper Knowles", min: 11, pts: 6, reb: 3, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 2, composite: -0.63, zScores: { pts: -0.231, reb: -0.031, ast: -0.749, stl: -0.708, blk: 2.392, tpm: -0.597, fgImpact: 1.273, ftImpact: -1.945, to: -0.035 } },
          { name: "Eoin Dillon", min: 17, pts: 6, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -1.14, zScores: { pts: -0.231, reb: -0.031, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.927, fgImpact: -0.709, ftImpact: 0, to: 0.838 } },
          { name: "Graydon Lemke", min: 5, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 2, fta: 2, composite: -3.36, zScores: { pts: -0.512, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.744, ftImpact: 0.678, to: 0.838 } },
          { name: "Kayden Fish", min: 13, pts: 8, reb: 4, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 3, fga: 4, ftm: 2, fta: 3, composite: 0.85, zScores: { pts: 0.051, reb: 0.321, ast: -0.749, stl: 0.318, blk: 0.957, tpm: -0.597, fgImpact: 0.883, ftImpact: -0.294, to: -0.035 } },
          { name: "Eli Brown", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.89, zScores: { pts: -1.074, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: 0.838 } },
          { name: "Matthew Zobrist", min: 13, pts: 8, reb: 1, ast: 0, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 3, composite: -2.1, zScores: { pts: 0.051, reb: -0.735, ast: -0.749, stl: 1.344, blk: -0.478, tpm: 0.927, fgImpact: 0.494, ftImpact: -2.918, to: -0.035 } },
          { name: "Aleksa Ristic", min: 14, pts: 3, reb: 4, ast: 5, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 2, composite: -0.21, zScores: { pts: -0.652, reb: 0.321, ast: 1.662, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.035, ftImpact: -0.633, to: 0.838 } },
          { name: "Cooper Haynes", min: 18, pts: 8, reb: 5, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 1.87, zScores: { pts: 0.051, reb: 0.673, ast: 0.215, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: -0.675, ftImpact: 0, to: 0.838 } }
        ]
      }
    },
      {
      id: "401920751",
      line: "Youngstown State Penguins 54 @ Cincinnati Bearcats 91 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "YSU", name: "Youngstown State Penguins", score: 54,
        players: [

        ]
      },
      home: {
        abbr: "Cin", name: "Cincinnati Bearcats", score: 91,
        players: [
          { name: "Tyler Tejada", min: 23, pts: 21, reb: 5, ast: 3, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 8, fga: 13, ftm: 4, fta: 4, composite: 5.87, zScores: { pts: 1.879, reb: 0.673, ast: 0.698, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 1.447, ftImpact: 1.356, to: 0.838 } },
          { name: "Riley Allenspach", min: 16, pts: 12, reb: 5, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 4.06, zScores: { pts: 0.613, reb: 0.673, ast: 0.215, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: 0.953, ftImpact: 0, to: 0.838 } },
          { name: "Elijah Perryman", min: 24, pts: 4, reb: 3, ast: 11, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 0, fta: 0, composite: 4.49, zScores: { pts: -0.512, reb: -0.031, ast: 4.555, stl: 1.344, blk: 0.957, tpm: -0.597, fgImpact: -0.32, ftImpact: 0, to: -0.908 } },
          { name: "MJ Collins Jr.", min: 21, pts: 14, reb: 2, ast: 1, stl: 2, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 8, ftm: 0, fta: 0, composite: 3.77, zScores: { pts: 0.894, reb: -0.383, ast: -0.267, stl: 1.344, blk: -0.478, tpm: 0.927, fgImpact: 1.767, ftImpact: 0, to: -0.035 } },
          { name: "Myles Colvin", min: 20, pts: 3, reb: 3, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -0.92, zScores: { pts: -0.652, reb: -0.031, ast: -0.749, stl: -0.708, blk: 0.957, tpm: 0.165, fgImpact: -0.744, ftImpact: 0, to: 0.838 } },
          { name: "Deshaun Vaden", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "David Iweze", min: 12, pts: 2, reb: 1, ast: 1, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: 0.17, zScores: { pts: -0.793, reb: -0.735, ast: -0.267, stl: -0.708, blk: 2.392, tpm: -0.597, fgImpact: 0.035, ftImpact: 0, to: 0.838 } },
          { name: "Adlan Elamin", min: 10, pts: 3, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.53, zScores: { pts: -0.652, reb: 0.321, ast: 0.215, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -0.355, ftImpact: 0, to: -0.035 } },
          { name: "Amani Lyles", min: 10, pts: 4, reb: 0, ast: 1, stl: 3, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.73, zScores: { pts: -0.512, reb: -1.088, ast: -0.267, stl: 2.369, blk: -0.478, tpm: -0.597, fgImpact: 0.459, ftImpact: 0, to: 0.838 } },
          { name: "Trevian Carson", min: 11, pts: 7, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 2, fta: 2, composite: -1.18, zScores: { pts: -0.09, reb: -0.031, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 0.07, ftImpact: 0.678, to: -0.035 } },
          { name: "Eric Mahaffey", min: 16, pts: 2, reb: 6, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -1.17, zScores: { pts: -0.793, reb: 1.025, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0.678, to: 0.838 } },
          { name: "Tylen Riley", min: 18, pts: 15, reb: 3, ast: 5, stl: 1, blk: 0, to: 3, tpm: 1, fgm: 3, fga: 6, ftm: 8, fta: 8, composite: 3.71, zScores: { pts: 1.035, reb: -0.031, ast: 1.662, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: 0.104, ftImpact: 2.713, to: -1.781 } },
          { name: "Akai Fleming", min: 17, pts: 4, reb: 1, ast: 0, stl: 1, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 4, ftm: 0, fta: 2, composite: -2.36, zScores: { pts: -0.512, reb: -0.735, ast: -0.749, stl: 0.318, blk: 0.957, tpm: -0.597, fgImpact: 0.07, ftImpact: -1.945, to: 0.838 } }
        ]
      }
    },
      {
      id: "401909526",
      line: "Northern Illinois Huskies 65 @ Marquette Golden Eagles 79 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NIU", name: "Northern Illinois Huskies", score: 65,
        players: [

        ]
      },
      home: {
        abbr: "Marq", name: "Marquette Golden Eagles", score: 79,
        players: [
          { name: "Sananda Fru", min: 30, pts: 17, reb: 12, ast: 0, stl: 0, blk: 3, to: 3, tpm: 0, fgm: 4, fga: 6, ftm: 9, fta: 9, composite: 8.42, zScores: { pts: 1.316, reb: 3.138, ast: -0.749, stl: -0.708, blk: 3.827, tpm: -0.597, fgImpact: 0.918, ftImpact: 3.052, to: -1.781 } },
          { name: "Royce Parham", min: 29, pts: 16, reb: 2, ast: 5, stl: 2, blk: 1, to: 1, tpm: 1, fgm: 3, fga: 7, ftm: 9, fta: 10, composite: 6.68, zScores: { pts: 1.176, reb: -0.383, ast: 1.662, stl: 1.344, blk: 0.957, tpm: 0.165, fgImpact: -0.285, ftImpact: 2.079, to: -0.035 } },
          { name: "Nolan Minessale", min: 18, pts: 6, reb: 2, ast: 2, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 4, ftm: 1, fta: 2, composite: -1.87, zScores: { pts: -0.231, reb: -0.383, ast: 0.215, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: 0.07, ftImpact: -0.633, to: -0.908 } },
          { name: "Adrien Stevens", min: 30, pts: 14, reb: 5, ast: 0, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 17, ftm: 0, fta: 0, composite: -0.19, zScores: { pts: 0.894, reb: 0.673, ast: -0.749, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: -1.739, ftImpact: 0, to: -0.035 } },
          { name: "Nigel James Jr.", min: 26, pts: 8, reb: 3, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 2, fta: 3, composite: -0.84, zScores: { pts: 0.051, reb: -0.031, ast: -0.267, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0.494, ftImpact: -0.294, to: -0.035 } },
          { name: "Joshua Clark", min: 12, pts: 4, reb: 2, ast: 0, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.74, zScores: { pts: -0.512, reb: -0.383, ast: -0.749, stl: -0.708, blk: 2.392, tpm: -0.597, fgImpact: 0.459, ftImpact: 0, to: 0.838 } },
          { name: "Alex Egbuonu", min: 9, pts: 2, reb: 0, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -4.56, zScores: { pts: -0.793, reb: -1.088, ast: -0.749, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -1.134, ftImpact: 0, to: -0.035 } },
          { name: "Michael Phillips II", min: 10, pts: 3, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.93, zScores: { pts: -0.652, reb: -0.383, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 0.035, ftImpact: 0, to: 0.838 } },
          { name: "Damarius Owens", min: 15, pts: 9, reb: 1, ast: 2, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 4, fga: 6, ftm: 0, fta: 0, composite: 1.99, zScores: { pts: 0.191, reb: -0.735, ast: 0.215, stl: 0.318, blk: 0.957, tpm: 0.165, fgImpact: 0.918, ftImpact: 0, to: -0.035 } },
          { name: "Ethan Johnston", min: 8, pts: 0, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -2.11, zScores: { pts: -1.074, reb: -0.383, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: 0.838 } },
          { name: "Colin Porter", min: 13, pts: 0, reb: 1, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -3.13, zScores: { pts: -1.074, reb: -0.735, ast: 1.18, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -1.558, ftImpact: 0, to: 0.838 } }
        ]
      }
    },
      {
      id: "401929420",
      line: "Florida A&M Rattlers 78 @ UTSA Roadrunners 98 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "FAMU", name: "Florida A&M Rattlers", score: 78,
        players: [

        ]
      },
      home: {
        abbr: "UTSA", name: "UTSA Roadrunners", score: 98,
        players: [
          { name: "Chinedum Okpukpara", min: 8, pts: 0, reb: 5, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.09, zScores: { pts: -1.074, reb: 0.673, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "JJ Kelly", min: 16, pts: 16, reb: 6, ast: 1, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 7, fga: 12, ftm: 2, fta: 2, composite: 3, zScores: { pts: 1.176, reb: 1.025, ast: -0.267, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: 1.023, ftImpact: 0.678, to: -0.908 } },
          { name: "Preston Turner", min: 13, pts: 3, reb: 2, ast: 1, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.9, zScores: { pts: -0.652, reb: -0.383, ast: -0.267, stl: 0.318, blk: 0.957, tpm: 0.165, fgImpact: -1.134, ftImpact: 0, to: -0.908 } },
          { name: "KJ Tenner", min: 29, pts: 6, reb: 2, ast: 12, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 1, fta: 1, composite: 4.26, zScores: { pts: -0.231, reb: -0.383, ast: 5.038, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -0.32, ftImpact: 0.339, to: 0.838 } },
          { name: "Isaiah Watts", min: 27, pts: 19, reb: 4, ast: 1, stl: 3, blk: 0, to: 0, tpm: 3, fgm: 7, fga: 18, ftm: 2, fta: 3, composite: 4.46, zScores: { pts: 1.597, reb: 0.321, ast: -0.267, stl: 2.369, blk: -0.478, tpm: 1.689, fgImpact: -1.314, ftImpact: -0.294, to: 0.838 } },
          { name: "Kanyon Taylor", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: 0.838 } },
          { name: "Jayson Peterson", min: 17, pts: 8, reb: 7, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 8, fta: 8, composite: 3.08, zScores: { pts: 0.051, reb: 1.377, ast: -0.749, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 2.713, to: 0.838 } },
          { name: "Mike Broxton Jr.", min: 9, pts: 4, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -0.4, zScores: { pts: -0.512, reb: -0.735, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0.424, ftImpact: 0.678, to: 0.838 } },
          { name: "Ashton Smith", min: 6, pts: 4, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -3, zScores: { pts: -0.512, reb: -0.383, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.459, ftImpact: 0, to: -0.035 } },
          { name: "Naz Price", min: 9, pts: 5, reb: 1, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: 0.2, zScores: { pts: -0.371, reb: -0.735, ast: -0.267, stl: -0.708, blk: 0.957, tpm: 0.165, fgImpact: -0.355, ftImpact: 0.678, to: 0.838 } },
          { name: "Josiah LeGree", min: 11, pts: 5, reb: 5, ast: 3, stl: 1, blk: 1, to: 1, tpm: 1, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: 2.47, zScores: { pts: -0.371, reb: 0.673, ast: 0.698, stl: 0.318, blk: 0.957, tpm: 0.165, fgImpact: 0.07, ftImpact: 0, to: -0.035 } },
          { name: "Dorian Hayes", min: 16, pts: 2, reb: 3, ast: 1, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 6, ftm: 0, fta: 0, composite: -1.51, zScores: { pts: -0.793, reb: -0.031, ast: -0.267, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: -1.523, ftImpact: 0, to: 0.838 } },
          { name: "Isaiah Coleman", min: 26, pts: 19, reb: 9, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 7, fga: 14, ftm: 5, fta: 6, composite: 4.4, zScores: { pts: 1.597, reb: 2.082, ast: 0.698, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.244, ftImpact: 0.723, to: 0.838 } },
          { name: "Demari Williams", min: 11, pts: 7, reb: 3, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 5, fta: 6, composite: 0.6, zScores: { pts: -0.09, reb: -0.031, ast: -0.267, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: 0.035, ftImpact: 0.723, to: -0.035 } }
        ]
      }
    },
      {
      id: "401929201",
      line: "Incarnate Word Cardinals 51 @ Texas State Bobcats 84 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UIW", name: "Incarnate Word Cardinals", score: 51,
        players: [

        ]
      },
      home: {
        abbr: "TxSt", name: "Texas State Bobcats", score: 84,
        players: [
          { name: "DJ Hall", min: 23, pts: 15, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 5, fga: 7, ftm: 5, fta: 5, composite: 2.79, zScores: { pts: 1.035, reb: 0.321, ast: 0.215, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 1.342, ftImpact: 1.695, to: -0.035 } },
          { name: "Paul Djobet", min: 30, pts: 11, reb: 6, ast: 1, stl: 0, blk: 0, to: 3, tpm: 1, fgm: 4, fga: 7, ftm: 2, fta: 3, composite: -1.34, zScores: { pts: 0.472, reb: 1.025, ast: -0.267, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 0.529, ftImpact: -0.294, to: -1.781 } },
          { name: "Robert Fields", min: 24, pts: 6, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 2, composite: 0.26, zScores: { pts: -0.231, reb: -0.383, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0.459, ftImpact: 0.678, to: 0.838 } },
          { name: "Dimp Pernell", min: 20, pts: 8, reb: 2, ast: 1, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 7, ftm: 2, fta: 2, composite: 0.03, zScores: { pts: 0.051, reb: -0.383, ast: -0.267, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: -0.285, ftImpact: 0.678, to: -0.035 } },
          { name: "Kaden Gumbs", min: 19, pts: 8, reb: 3, ast: 6, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 6, ftm: 1, fta: 2, composite: 1.45, zScores: { pts: 0.051, reb: -0.031, ast: 2.144, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 0.104, ftImpact: -0.633, to: 0.838 } },
          { name: "King Sanders", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.5, zScores: { pts: -1.074, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Kole Grandison", min: 14, pts: 3, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1.97, zScores: { pts: -0.652, reb: -0.031, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -0.355, ftImpact: 0, to: 0.838 } },
          { name: "Ronald Jessamy", min: 11, pts: 2, reb: 1, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.05, zScores: { pts: -0.793, reb: -0.735, ast: -0.267, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: -0.744, ftImpact: 0, to: 0.838 } },
          { name: "KJ Younger", min: 16, pts: 4, reb: 1, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 7, ftm: 0, fta: 0, composite: -1.99, zScores: { pts: -0.512, reb: -0.735, ast: -0.749, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: -1.099, ftImpact: 0, to: 0.838 } },
          { name: "Ky Pernell", min: 13, pts: 8, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: 2.37, zScores: { pts: 0.051, reb: -0.383, ast: 0.215, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: 0.883, ftImpact: 0, to: 0.838 } },
          { name: "Quel'Ron House", min: 16, pts: 12, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 7, ftm: 2, fta: 2, composite: 1.58, zScores: { pts: 0.613, reb: -0.383, ast: -0.749, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 1.342, ftImpact: 0.678, to: 0.838 } },
          { name: "Caleb Steger", min: 6, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 2, fta: 2, composite: -2.19, zScores: { pts: -0.512, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: 0.678, to: 0.838 } },
          { name: "Randy Livingston Jr.", min: 4, pts: 3, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.39, zScores: { pts: -0.652, reb: -0.735, ast: -0.267, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: 0.424, ftImpact: 0, to: 0.838 } }
        ]
      }
    },
      {
      id: "401927357",
      line: "Purdue Fort Wayne Mastodons 78 @ Bradley Braves 73 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "PFW", name: "Purdue Fort Wayne Mastodons", score: 78,
        players: [

        ]
      },
      home: {
        abbr: "Brad", name: "Bradley Braves", score: 73,
        players: [
          { name: "Xander Alarie", min: 5, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.38, zScores: { pts: -1.074, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: -0.035 } },
          { name: "Noah Williams", min: 34, pts: 12, reb: 4, ast: 1, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 0.8, zScores: { pts: 0.613, reb: 0.321, ast: -0.267, stl: -0.708, blk: -0.478, tpm: 0.927, fgImpact: -0.25, ftImpact: 0.678, to: -0.035 } },
          { name: "Max Gaspa", min: 24, pts: 16, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 5, fga: 11, ftm: 2, fta: 4, composite: 0.14, zScores: { pts: 1.176, reb: -0.031, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 2.451, fgImpact: -0.215, ftImpact: -1.267, to: -0.035 } },
          { name: "Timoty van der Knaap", min: 35, pts: 11, reb: 13, ast: 0, stl: 2, blk: 0, to: 3, tpm: 2, fgm: 3, fga: 11, ftm: 3, fta: 4, composite: 1.43, zScores: { pts: 0.472, reb: 3.49, ast: -0.749, stl: 1.344, blk: -0.478, tpm: 0.927, fgImpact: -1.843, ftImpact: 0.045, to: -1.781 } },
          { name: "Trevon Payton", min: 22, pts: 16, reb: 3, ast: 3, stl: 0, blk: 0, to: 2, tpm: 4, fgm: 6, fga: 10, ftm: 0, fta: 0, composite: 3.19, zScores: { pts: 1.176, reb: -0.031, ast: 0.698, stl: -0.708, blk: -0.478, tpm: 2.451, fgImpact: 0.988, ftImpact: 0, to: -0.908 } },
          { name: "Ben Thornbrue", min: 20, pts: 5, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: 0.21, zScores: { pts: -0.371, reb: -0.383, ast: -0.749, stl: -0.708, blk: 0.957, tpm: 0.165, fgImpact: 0.459, ftImpact: 0, to: 0.838 } },
          { name: "Gustavo Guimaraes", min: 6, pts: 1, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -3.42, zScores: { pts: -0.934, reb: -0.735, ast: 0.215, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: -0.633, to: 0.838 } },
          { name: "Dimitrije Pavlovic", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Kyle Grill", min: 23, pts: 5, reb: 3, ast: 4, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 2, fta: 4, composite: 0.39, zScores: { pts: -0.371, reb: -0.031, ast: 1.18, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: 0.035, ftImpact: -1.267, to: 0.838 } },
          { name: "Jackson Seastrunk", min: 28, pts: 6, reb: 3, ast: 7, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 10, ftm: 2, fta: 2, composite: -0.02, zScores: { pts: -0.231, reb: -0.031, ast: 2.626, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -2.267, ftImpact: 0.678, to: -0.035 } },
          { name: "Gus Rugaard", min: 2, pts: 1, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 1, fta: 2, composite: -4.35, zScores: { pts: -0.934, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: -0.633, to: 0.838 } }
        ]
      }
    },
      {
      id: "401924721",
      line: "Cornell Big Red 82 @ Syracuse Orange 91 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Corn", name: "Cornell Big Red", score: 82,
        players: [
          { name: "Quinn Gibson", min: 29, pts: 9, reb: 4, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 4, fga: 8, ftm: 1, fta: 2, composite: 0.47, zScores: { pts: 0.191, reb: 0.321, ast: 0.215, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: 0.139, ftImpact: -0.633, to: -0.035 } },
          { name: "Kaspar Sepp", min: 24, pts: 2, reb: 10, ast: 7, stl: 2, blk: 0, to: 7, tpm: 0, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -1.87, zScores: { pts: -0.793, reb: 2.434, ast: 2.626, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: -1.134, ftImpact: 0, to: -5.274 } },
          { name: "Anthony Nimani", min: 27, pts: 17, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 4, fga: 7, ftm: 7, fta: 10, composite: 2.7, zScores: { pts: 1.316, reb: -0.031, ast: 0.698, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: 0.529, ftImpact: -0.544, to: -0.035 } },
          { name: "Mateen Rafiq", min: 25, pts: 15, reb: 1, ast: 2, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 5, fga: 12, ftm: 2, fta: 2, composite: 1.21, zScores: { pts: 1.035, reb: -0.735, ast: 0.215, stl: 0.318, blk: -0.478, tpm: 1.689, fgImpact: -0.605, ftImpact: 0.678, to: -0.908 } },
          { name: "Jacob Beccles", min: 11, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 0, fta: 0, composite: -5.93, zScores: { pts: -1.074, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -1.558, ftImpact: 0, to: -0.035 } },
          { name: "Mikehi Williams", min: 22, pts: 18, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 4, fgm: 6, fga: 8, ftm: 2, fta: 2, composite: 4.7, zScores: { pts: 1.457, reb: 0.321, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 2.451, fgImpact: 1.767, ftImpact: 0.678, to: -0.035 } },
          { name: "Blake Lecklitner", min: 1, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.074, reb: -1.088, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: -0.035 } },
          { name: "Jax Abalos", min: 8, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.15, zScores: { pts: -0.652, reb: -1.088, ast: -0.267, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 0.035, ftImpact: 0, to: 0.838 } },
          { name: "Gioacchino Panzini", min: 12, pts: 4, reb: 3, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 0, composite: 0.12, zScores: { pts: -0.512, reb: -0.031, ast: -0.267, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0.849, ftImpact: 0, to: 0.838 } },
          { name: "Ian Imegwu", min: 13, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 8, ftm: 0, fta: 0, composite: -4.49, zScores: { pts: -0.652, reb: -1.088, ast: -0.267, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -2.302, ftImpact: 0, to: 0.838 } },
          { name: "Sage Mateo", min: 12, pts: 6, reb: 2, ast: 2, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -0.23, zScores: { pts: -0.231, reb: -0.383, ast: 0.215, stl: -0.708, blk: -0.478, tpm: 0.927, fgImpact: 0.459, ftImpact: 0, to: -0.035 } },
          { name: "JJ Sanchez", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.73, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: -0.035 } },
          { name: "Ryan Burbach", min: 15, pts: 5, reb: 4, ast: 1, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 1, composite: -0.36, zScores: { pts: -0.371, reb: 0.321, ast: -0.267, stl: -0.708, blk: 0.957, tpm: 0.165, fgImpact: -0.32, ftImpact: -0.973, to: 0.838 } }
        ]
      },
      home: {
        abbr: "Syr", name: "Syracuse Orange", score: 91,
        players: [
          { name: "Mark Morano", min: 23, pts: 9, reb: 2, ast: 2, stl: 3, blk: 2, to: 0, tpm: 1, fgm: 4, fga: 11, ftm: 0, fta: 1, composite: 3.79, zScores: { pts: 0.191, reb: -0.383, ast: 0.215, stl: 2.369, blk: 2.392, tpm: 0.165, fgImpact: -1.029, ftImpact: -0.973, to: 0.838 } },
          { name: "Sadiq White Jr.", min: 22, pts: 16, reb: 10, ast: 0, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 6, fga: 8, ftm: 4, fta: 7, composite: 3.25, zScores: { pts: 1.176, reb: 2.434, ast: -0.749, stl: -0.708, blk: 2.392, tpm: -0.597, fgImpact: 1.767, ftImpact: -1.561, to: -0.908 } },
          { name: "Luke Wilson", min: 32, pts: 18, reb: 3, ast: 3, stl: 2, blk: 2, to: 0, tpm: 0, fgm: 5, fga: 7, ftm: 8, fta: 10, composite: 8.21, zScores: { pts: 1.457, reb: -0.031, ast: 0.698, stl: 1.344, blk: 2.392, tpm: -0.597, fgImpact: 1.342, ftImpact: 0.768, to: 0.838 } },
          { name: "Gavin Doty", min: 35, pts: 13, reb: 4, ast: 1, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 13, ftm: 2, fta: 2, composite: 2.36, zScores: { pts: 0.754, reb: 0.321, ast: -0.267, stl: 1.344, blk: -0.478, tpm: 0.165, fgImpact: -0.994, ftImpact: 0.678, to: 0.838 } },
          { name: "Garwey Dual", min: 32, pts: 20, reb: 4, ast: 8, stl: 3, blk: 1, to: 2, tpm: 2, fgm: 8, fga: 9, ftm: 2, fta: 2, composite: 12.2, zScores: { pts: 1.738, reb: 0.321, ast: 3.109, stl: 2.369, blk: 0.957, tpm: 0.927, fgImpact: 3.005, ftImpact: 0.678, to: -0.908 } },
          { name: "Amarri Monroe", min: 17, pts: 5, reb: 1, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 4, ftm: 3, fta: 4, composite: -4.22, zScores: { pts: -0.371, reb: -0.735, ast: -0.749, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -0.744, ftImpact: 0.045, to: -0.908 } },
          { name: "Abdramane Siby", min: 9, pts: 0, reb: 1, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -1.59, zScores: { pts: -1.074, reb: -0.735, ast: -0.267, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Ryan Moesch", min: 19, pts: 6, reb: 1, ast: 3, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -3.47, zScores: { pts: -0.231, reb: -0.735, ast: 0.698, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.32, ftImpact: 0.678, to: -1.781 } },
          { name: "Kiyan Anthony", min: 11, pts: 4, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -0.85, zScores: { pts: -0.512, reb: -0.383, ast: -0.749, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0.035, ftImpact: 0.678, to: 0.838 } }
        ]
      }
    },
      {
      id: "401911232",
      line: "Wichita State Shockers 79 @ Loyola Chicago Ramblers 75 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WichSt", name: "Wichita State Shockers", score: 79,
        players: [
          { name: "Dillon Battie", min: 26, pts: 13, reb: 8, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 3, fga: 8, ftm: 6, fta: 6, composite: 2.04, zScores: { pts: 0.754, reb: 1.73, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -0.675, ftImpact: 2.035, to: -0.035 } },
          { name: "William Berg", min: 31, pts: 27, reb: 9, ast: 1, stl: 0, blk: 2, to: 4, tpm: 1, fgm: 8, fga: 10, ftm: 10, fta: 10, composite: 9.74, zScores: { pts: 2.722, reb: 2.082, ast: -0.267, stl: -0.708, blk: 2.392, tpm: 0.165, fgImpact: 2.615, ftImpact: 3.391, to: -2.654 } },
          { name: "Kenyon Giles", min: 20, pts: 7, reb: 1, ast: 3, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -0.67, zScores: { pts: -0.09, reb: -0.735, ast: 0.698, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: -0.32, ftImpact: 0.678, to: -0.908 } },
          { name: "Bryce Heard", min: 24, pts: 8, reb: 1, ast: 1, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 2, fga: 3, ftm: 4, fta: 5, composite: -2.24, zScores: { pts: 0.051, reb: -0.735, ast: -0.267, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0.459, ftImpact: 0.384, to: -1.781 } },
          { name: "Jahari Long", min: 26, pts: 8, reb: 6, ast: 4, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 7, ftm: 1, fta: 2, composite: -0.59, zScores: { pts: 0.051, reb: 1.025, ast: 1.18, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -0.285, ftImpact: -0.633, to: -0.908 } },
          { name: "Emmanuel Okorafor", min: 9, pts: 4, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.63, zScores: { pts: -0.512, reb: -0.031, ast: -0.749, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0.459, ftImpact: 0, to: -0.035 } },
          { name: "Jaret Valencia", min: 14, pts: 2, reb: 1, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 2, composite: -3.16, zScores: { pts: -0.793, reb: -0.735, ast: -0.749, stl: 0.318, blk: 0.957, tpm: -0.597, fgImpact: 0.424, ftImpact: -1.945, to: -0.035 } },
          { name: "Jordan Frison", min: 24, pts: 3, reb: 1, ast: 7, stl: 1, blk: 0, to: 5, tpm: 0, fgm: 0, fga: 3, ftm: 3, fta: 4, composite: -4.17, zScores: { pts: -0.652, reb: -0.735, ast: 2.626, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -1.168, ftImpact: 0.045, to: -3.527 } },
          { name: "Michael Gray Jr.", min: 26, pts: 7, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -2.47, zScores: { pts: -0.09, reb: -0.383, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.927, fgImpact: -0.32, ftImpact: -0.633, to: -0.035 } }
        ]
      },
      home: {
        abbr: "LoyIL", name: "Loyola Chicago Ramblers", score: 75,
        players: [
          { name: "Jason Schofield", min: 23, pts: 14, reb: 3, ast: 3, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 6, fga: 10, ftm: 2, fta: 2, composite: 2.84, zScores: { pts: 0.894, reb: -0.031, ast: 0.698, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0.988, ftImpact: 0.678, to: -0.035 } },
          { name: "Guillaume Grotzinger", min: 22, pts: 10, reb: 1, ast: 3, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 11, ftm: 0, fta: 0, composite: -0.87, zScores: { pts: 0.332, reb: -0.735, ast: 0.698, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.215, ftImpact: 0, to: 0.838 } },
          { name: "Dayan Nessah", min: 17, pts: 0, reb: 1, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 3, ftm: 0, fta: 0, composite: -5.94, zScores: { pts: -1.074, reb: -0.735, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -1.168, ftImpact: 0, to: -0.908 } },
          { name: "Jayden Dawson", min: 29, pts: 6, reb: 4, ast: 2, stl: 4, blk: 2, to: 0, tpm: 2, fgm: 2, fga: 5, ftm: 0, fta: 2, composite: 5.59, zScores: { pts: -0.231, reb: 0.321, ast: 0.215, stl: 3.395, blk: 2.392, tpm: 0.927, fgImpact: -0.32, ftImpact: -1.945, to: 0.838 } },
          { name: "Ryan Agarwal", min: 28, pts: 22, reb: 2, ast: 0, stl: 4, blk: 1, to: 2, tpm: 5, fgm: 7, fga: 13, ftm: 3, fta: 4, composite: 8.22, zScores: { pts: 2.019, reb: -0.383, ast: -0.749, stl: 3.395, blk: 0.957, tpm: 3.212, fgImpact: 0.633, ftImpact: 0.045, to: -0.908 } },
          { name: "Elias Rapieque", min: 22, pts: 7, reb: 3, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 3, fta: 6, composite: -3.4, zScores: { pts: -0.09, reb: -0.031, ast: 0.215, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0.07, ftImpact: -1.9, to: -0.908 } },
          { name: "Xavier Amos", min: 9, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.15, zScores: { pts: -0.793, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: 0, to: 0.838 } },
          { name: "Malick Diallo", min: 17, pts: 3, reb: 1, ast: 1, stl: 3, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 4, composite: -2.55, zScores: { pts: -0.652, reb: -0.735, ast: -0.267, stl: 2.369, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: -2.579, to: -0.035 } },
          { name: "Dayton Williams", min: 9, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.67, zScores: { pts: -1.074, reb: -0.383, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Nic Anderson", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Chris Jeffrey", min: 23, pts: 11, reb: 1, ast: 6, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 9, ftm: 2, fta: 3, composite: 1.15, zScores: { pts: 0.472, reb: -0.735, ast: 2.144, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -0.25, ftImpact: -0.294, to: 0.838 } }
        ]
      }
    },
      {
      id: "401909555",
      line: "Boston College Eagles 74 @ Harvard Crimson 69 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BC", name: "Boston College Eagles", score: 74,
        players: [
          { name: "Colby Duggan", min: 24, pts: 5, reb: 6, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -3.26, zScores: { pts: -0.371, reb: 1.025, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.32, ftImpact: -0.633, to: -0.908 } },
          { name: "Luke Hunger", min: 16, pts: 9, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 5, fta: 5, composite: 0.23, zScores: { pts: 0.191, reb: -0.031, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.459, ftImpact: 1.695, to: -0.035 } },
          { name: "Zak Smrekar", min: 37, pts: 13, reb: 4, ast: 5, stl: 1, blk: 3, to: 1, tpm: 2, fgm: 5, fga: 11, ftm: 1, fta: 2, composite: 6.92, zScores: { pts: 0.754, reb: 0.321, ast: 1.662, stl: 0.318, blk: 3.827, tpm: 0.927, fgImpact: -0.215, ftImpact: -0.633, to: -0.035 } },
          { name: "Ernest Shelton", min: 34, pts: 10, reb: 3, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 12, ftm: 3, fta: 3, composite: -2.57, zScores: { pts: 0.332, reb: -0.031, ast: -0.749, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: -2.233, ftImpact: 1.017, to: -0.908 } },
          { name: "Armoni Zeigler", min: 37, pts: 12, reb: 1, ast: 7, stl: 2, blk: 0, to: 5, tpm: 0, fgm: 3, fga: 10, ftm: 6, fta: 8, composite: -2.12, zScores: { pts: 0.613, reb: -0.735, ast: 2.626, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: -1.454, ftImpact: 0.089, to: -3.527 } },
          { name: "Brandon Benjamin", min: 23, pts: 19, reb: 13, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 8, fga: 9, ftm: 3, fta: 4, composite: 6.6, zScores: { pts: 1.597, reb: 3.49, ast: -0.749, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 3.005, ftImpact: 0.045, to: -0.035 } },
          { name: "Jacob Furphy", min: 18, pts: 3, reb: 1, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: -3.34, zScores: { pts: -0.652, reb: -0.735, ast: -0.267, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -1.134, ftImpact: -0.633, to: 0.838 } },
          { name: "JB Frankel", min: 11, pts: 3, reb: 0, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.03, zScores: { pts: -0.652, reb: -1.088, ast: -0.267, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 0.035, ftImpact: 0, to: -0.035 } }
        ]
      },
      home: {
        abbr: "Harv", name: "Harvard Crimson", score: 69,
        players: [
          { name: "Luca Ace-Nasteski", min: 19, pts: 4, reb: 4, ast: 0, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 1, composite: -2.25, zScores: { pts: -0.512, reb: 0.321, ast: -0.749, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0.459, ftImpact: -0.973, to: -0.035 } },
          { name: "Thomas Batties II", min: 20, pts: 7, reb: 2, ast: 1, stl: 0, blk: 1, to: 5, tpm: 1, fgm: 2, fga: 6, ftm: 2, fta: 2, composite: -3.88, zScores: { pts: -0.09, reb: -0.383, ast: -0.267, stl: -0.708, blk: 0.957, tpm: 0.165, fgImpact: -0.709, ftImpact: 0.678, to: -3.527 } },
          { name: "Tey Barbour", min: 39, pts: 14, reb: 2, ast: 2, stl: 1, blk: 0, to: 0, tpm: 2, fgm: 4, fga: 9, ftm: 4, fta: 4, composite: 3.44, zScores: { pts: 0.894, reb: -0.383, ast: 0.215, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: -0.25, ftImpact: 1.356, to: 0.838 } },
          { name: "Ben Eisendrath", min: 32, pts: 4, reb: 4, ast: 4, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: -1.52, zScores: { pts: -0.512, reb: 0.321, ast: 1.18, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -1.523, ftImpact: 0.678, to: -0.908 } },
          { name: "Robert Hinton", min: 33, pts: 18, reb: 3, ast: 2, stl: 2, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 16, ftm: 2, fta: 2, composite: 2.67, zScores: { pts: 1.457, reb: -0.031, ast: 0.215, stl: 1.344, blk: -0.478, tpm: 0.927, fgImpact: -0.535, ftImpact: 0.678, to: -0.908 } },
          { name: "Ryan Sullivan", min: 5, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -4.78, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: -1.945, to: 0.838 } },
          { name: "Kenan Parrish", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: 0.838 } },
          { name: "Julian Adigun", min: 12, pts: 2, reb: 2, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.4, zScores: { pts: -0.793, reb: -0.383, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0.035, ftImpact: 0, to: 0.838 } },
          { name: "Brandon Burrell", min: 3, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.22, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: 0.838 } },
          { name: "Frankie Mannino", min: 4, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -5.25, zScores: { pts: -1.074, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: -0.908 } },
          { name: "Jason Singleton", min: 28, pts: 20, reb: 2, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 8, fga: 8, ftm: 4, fta: 6, composite: 2.08, zScores: { pts: 1.738, reb: -0.383, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 3.394, ftImpact: -0.589, to: -0.035 } },
          { name: "Xavier Nesbitt", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.73, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: -0.035 } }
        ]
      }
    },
      {
      id: "401906805",
      line: "Campbell Fighting Camels 78 @ Oklahoma Sooners 87 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "CAM", name: "Campbell Fighting Camels", score: 78,
        players: [

        ]
      },
      home: {
        abbr: "Okla", name: "Oklahoma Sooners", score: 87,
        players: [
          { name: "Kai Rogers", min: 18, pts: 2, reb: 2, ast: 1, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -1, zScores: { pts: -0.793, reb: -0.383, ast: -0.267, stl: 1.344, blk: 0.957, tpm: -0.597, fgImpact: -0.355, ftImpact: 0, to: -0.908 } },
          { name: "Derrion Reid", min: 33, pts: 10, reb: 6, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 11, ftm: 1, fta: 2, composite: 0.27, zScores: { pts: 0.332, reb: 1.025, ast: -0.267, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: -1.029, ftImpact: -0.633, to: 0.838 } },
          { name: "Xzayvier Brown", min: 37, pts: 27, reb: 4, ast: 8, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 6, fga: 10, ftm: 12, fta: 12, composite: 13.11, zScores: { pts: 2.722, reb: 0.321, ast: 3.109, stl: -0.708, blk: 0.957, tpm: 1.689, fgImpact: 0.988, ftImpact: 4.069, to: -0.035 } },
          { name: "Pop Isaacs", min: 32, pts: 18, reb: 1, ast: 1, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 7, ftm: 6, fta: 7, composite: 3.59, zScores: { pts: 1.457, reb: -0.735, ast: -0.267, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: 1.342, ftImpact: 1.062, to: -0.035 } },
          { name: "B.J. Edwards", min: 37, pts: 19, reb: 3, ast: 3, stl: 3, blk: 0, to: 0, tpm: 2, fgm: 7, fga: 10, ftm: 3, fta: 3, composite: 8.74, zScores: { pts: 1.597, reb: -0.031, ast: 0.698, stl: 2.369, blk: -0.478, tpm: 0.927, fgImpact: 1.802, ftImpact: 1.017, to: 0.838 } },
          { name: "Gage Mayfield", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: 0.838 } },
          { name: "Khani Rooths", min: 22, pts: 7, reb: 3, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 3, fga: 4, ftm: 1, fta: 4, composite: -2.55, zScores: { pts: -0.09, reb: -0.031, ast: 0.215, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.883, ftImpact: -2.579, to: 0.838 } },
          { name: "Yaak Yaak", min: 6, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.54, zScores: { pts: -0.793, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.035, ftImpact: 0, to: 0.838 } },
          { name: "Quincy Wadley", min: 13, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -3.93, zScores: { pts: -0.793, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.355, ftImpact: 0, to: 0.838 } }
        ]
      }
    },
      {
      id: "401929176",
      line: "North Dakota State Bison 64 @ Colorado State Rams 71 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "NDSU", name: "North Dakota State Bison", score: 64,
        players: [

        ]
      },
      home: {
        abbr: "ColSt", name: "Colorado State Rams", score: 71,
        players: [
          { name: "Kyle Jorgensen", min: 28, pts: 17, reb: 7, ast: 2, stl: 0, blk: 1, to: 1, tpm: 3, fgm: 6, fga: 15, ftm: 2, fta: 5, composite: 1.61, zScores: { pts: 1.316, reb: 1.377, ast: 0.215, stl: -0.708, blk: 0.957, tpm: 1.689, fgImpact: -0.96, ftImpact: -2.24, to: -0.035 } },
          { name: "Carey Booth", min: 32, pts: 15, reb: 11, ast: 2, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 6, fga: 11, ftm: 2, fta: 3, composite: 3.85, zScores: { pts: 1.035, reb: 2.786, ast: 0.215, stl: -0.708, blk: 0.957, tpm: 0.165, fgImpact: 0.598, ftImpact: -0.294, to: -0.908 } },
          { name: "Justin Menard", min: 25, pts: 7, reb: 2, ast: 5, stl: 2, blk: 1, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 4, fta: 4, composite: 2.97, zScores: { pts: -0.09, reb: -0.383, ast: 1.662, stl: 1.344, blk: 0.957, tpm: 0.165, fgImpact: -1.134, ftImpact: 1.356, to: -0.908 } },
          { name: "Josh Pascarelli", min: 35, pts: 9, reb: 2, ast: 2, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 3, fga: 9, ftm: 0, fta: 0, composite: 0.3, zScores: { pts: 0.191, reb: -0.383, ast: 0.215, stl: -0.708, blk: -0.478, tpm: 1.689, fgImpact: -1.064, ftImpact: 0, to: 0.838 } },
          { name: "Jase Butler", min: 33, pts: 11, reb: 5, ast: 5, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 7, ftm: 5, fta: 8, composite: -1.39, zScores: { pts: 0.472, reb: 0.673, ast: 1.662, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.285, ftImpact: -1.222, to: -0.908 } },
          { name: "Jaden Ghoreishi", min: 8, pts: 0, reb: 2, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.59, zScores: { pts: -1.074, reb: -0.383, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: -0.035 } },
          { name: "Rashaan Mbemba", min: 12, pts: 4, reb: 2, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 2, composite: -3.14, zScores: { pts: -0.512, reb: -0.383, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.035, ftImpact: 0.678, to: -0.908 } },
          { name: "Amondo Miller Jr.", min: 7, pts: 3, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -3.29, zScores: { pts: -0.652, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: -0.633, to: 0.838 } },
          { name: "Pops Dunson", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Jojo McIver", min: 19, pts: 5, reb: 2, ast: 1, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 4, ftm: 2, fta: 4, composite: -3.94, zScores: { pts: -0.371, reb: -0.383, ast: -0.267, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: -0.744, ftImpact: -1.267, to: -0.908 } }
        ]
      }
    },
      {
      id: "401925949",
      line: "Weber State Wildcats 71 @ Utah State Aggies 101 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WEB", name: "Weber State Wildcats", score: 71,
        players: [

        ]
      },
      home: {
        abbr: "UtSt", name: "Utah State Aggies", score: 101,
        players: [
          { name: "Will Hornseth", min: 26, pts: 22, reb: 8, ast: 2, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 11, fga: 13, ftm: 0, fta: 2, composite: 5.99, zScores: { pts: 2.019, reb: 1.73, ast: 0.215, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 3.888, ftImpact: -1.945, to: 0.838 } },
          { name: "Karson Templin", min: 25, pts: 18, reb: 7, ast: 1, stl: 0, blk: 1, to: 0, tpm: 2, fgm: 8, fga: 13, ftm: 0, fta: 2, composite: 4.08, zScores: { pts: 1.457, reb: 1.377, ast: -0.267, stl: -0.708, blk: 0.957, tpm: 0.927, fgImpact: 1.447, ftImpact: -1.945, to: 0.838 } },
          { name: "Solomon Callaghan", min: 32, pts: 15, reb: 1, ast: 0, stl: 1, blk: 0, to: 0, tpm: 5, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 4.39, zScores: { pts: 1.035, reb: -0.735, ast: -0.749, stl: 0.318, blk: -0.478, tpm: 3.212, fgImpact: 0.953, ftImpact: 0, to: 0.838 } },
          { name: "Mason Falslev", min: 28, pts: 18, reb: 6, ast: 7, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 6, fga: 11, ftm: 6, fta: 7, composite: 5.82, zScores: { pts: 1.457, reb: 1.025, ast: 2.626, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.598, ftImpact: 1.062, to: 0.838 } },
          { name: "Dallin Hall", min: 30, pts: 13, reb: 3, ast: 9, stl: 2, blk: 0, to: 0, tpm: 3, fgm: 5, fga: 9, ftm: 0, fta: 0, composite: 8.27, zScores: { pts: 0.754, reb: -0.031, ast: 3.591, stl: 1.344, blk: -0.478, tpm: 1.689, fgImpact: 0.563, ftImpact: 0, to: 0.838 } },
          { name: "Collin Mulholland", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.63, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 0, to: 0.838 } },
          { name: "Kingston Tosi", min: 18, pts: 3, reb: 3, ast: 1, stl: 0, blk: 1, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -1.32, zScores: { pts: -0.652, reb: -0.031, ast: -0.267, stl: -0.708, blk: 0.957, tpm: 0.165, fgImpact: -0.744, ftImpact: 0, to: -0.035 } },
          { name: "Sean Felts", min: 4, pts: 1, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 3, ftm: 1, fta: 2, composite: -5.03, zScores: { pts: -0.934, reb: -1.088, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -1.168, ftImpact: -0.633, to: 0.838 } },
          { name: "Ace Reiser", min: 3, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.5, zScores: { pts: -1.074, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Jordan Boyd", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: 0.838 } },
          { name: "Brayden Boe", min: 15, pts: 3, reb: 2, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.17, zScores: { pts: -0.652, reb: -0.383, ast: -0.749, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: -0.355, ftImpact: 0, to: -0.035 } },
          { name: "AJ Bates", min: 16, pts: 8, reb: 4, ast: 2, stl: 3, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 4.94, zScores: { pts: 0.051, reb: 0.321, ast: 0.215, stl: 2.369, blk: 0.957, tpm: -0.597, fgImpact: 0.104, ftImpact: 0.678, to: 0.838 } }
        ]
      }
    },
      {
      id: "401921816",
      line: "Alcorn State Braves 41 @ Missouri Tigers 102 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "ALCN", name: "Alcorn State Braves", score: 41,
        players: [

        ]
      },
      home: {
        abbr: "Mizzou", name: "Missouri Tigers", score: 102,
        players: [
          { name: "Toni Bryant", min: 30, pts: 10, reb: 8, ast: 1, stl: 0, blk: 1, to: 2, tpm: 0, fgm: 4, fga: 6, ftm: 2, fta: 2, composite: 2.14, zScores: { pts: 0.332, reb: 1.73, ast: -0.267, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0.918, ftImpact: 0.678, to: -0.908 } },
          { name: "Bryson Tiller", min: 25, pts: 23, reb: 10, ast: 1, stl: 2, blk: 4, to: 3, tpm: 1, fgm: 7, fga: 10, ftm: 8, fta: 10, composite: 11.89, zScores: { pts: 2.16, reb: 2.434, ast: -0.267, stl: 1.344, blk: 5.262, tpm: 0.165, fgImpact: 1.802, ftImpact: 0.768, to: -1.781 } },
          { name: "Jason Crowe Jr.", min: 28, pts: 14, reb: 3, ast: 1, stl: 1, blk: 1, to: 3, tpm: 3, fgm: 5, fga: 10, ftm: 1, fta: 2, composite: 1.32, zScores: { pts: 0.894, reb: -0.031, ast: -0.267, stl: 0.318, blk: 0.957, tpm: 1.689, fgImpact: 0.174, ftImpact: -0.633, to: -1.781 } },
          { name: "Trent Pierce", min: 25, pts: 6, reb: 4, ast: 3, stl: 2, blk: 1, to: 2, tpm: 0, fgm: 3, fga: 7, ftm: 0, fta: 0, composite: 1.3, zScores: { pts: -0.231, reb: 0.321, ast: 0.698, stl: 1.344, blk: 0.957, tpm: -0.597, fgImpact: -0.285, ftImpact: 0, to: -0.908 } },
          { name: "Kennard Davis Jr.", min: 21, pts: 11, reb: 5, ast: 1, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 3.15, zScores: { pts: 0.472, reb: 0.673, ast: -0.267, stl: 0.318, blk: -0.478, tpm: 1.689, fgImpact: 0.104, ftImpact: 0.678, to: -0.035 } },
          { name: "Nicholas Randall", min: 6, pts: 1, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 1, fta: 2, composite: -3.55, zScores: { pts: -0.934, reb: -0.383, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: -0.633, to: 0.838 } },
          { name: "Luke Northweather", min: 5, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -4.73, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: -0.035 } },
          { name: "Jordan Crawford", min: 4, pts: 2, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 3, ftm: 0, fta: 0, composite: -2.87, zScores: { pts: -0.793, reb: -0.031, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.355, ftImpact: 0, to: 0.838 } },
          { name: "Cord Stansberry", min: 8, pts: 9, reb: 2, ast: 0, stl: 2, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 2, fta: 2, composite: 2.1, zScores: { pts: 0.191, reb: -0.383, ast: -0.749, stl: 1.344, blk: -0.478, tpm: 0.165, fgImpact: 0.494, ftImpact: 0.678, to: 0.838 } },
          { name: "Aaron Rowe", min: 12, pts: 2, reb: 0, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.58, zScores: { pts: -0.793, reb: -1.088, ast: 0.698, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: 0, to: -0.035 } },
          { name: "Jamier Jones", min: 14, pts: 8, reb: 5, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 4, fta: 6, composite: 0.95, zScores: { pts: 0.051, reb: 0.673, ast: -0.749, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: 0.459, ftImpact: -0.589, to: 0.838 } },
          { name: "Mark Mitchell Jr.", min: 23, pts: 16, reb: 5, ast: 3, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 5, ftm: 8, fta: 9, composite: 7.26, zScores: { pts: 1.176, reb: 0.673, ast: 0.698, stl: 1.344, blk: 0.957, tpm: -0.597, fgImpact: 1.308, ftImpact: 1.74, to: -0.035 } }
        ]
      }
    },
      {
      id: "401921734",
      line: "Oakland Golden Grizzlies 65 @ Arizona State Sun Devils 68 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "OAK", name: "Oakland Golden Grizzlies", score: 65,
        players: [

        ]
      },
      home: {
        abbr: "AzSt", name: "Arizona State Sun Devils", score: 68,
        players: [
          { name: "Paulius Murauskas", min: 40, pts: 23, reb: 8, ast: 4, stl: 0, blk: 0, to: 2, tpm: 2, fgm: 4, fga: 12, ftm: 13, fta: 13, composite: 6.89, zScores: { pts: 2.16, reb: 1.73, ast: 1.18, stl: -0.708, blk: -0.478, tpm: 0.927, fgImpact: -1.419, ftImpact: 4.408, to: -0.908 } },
          { name: "Ben Defty", min: 17, pts: 10, reb: 3, ast: 1, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 4, fta: 6, composite: 0.99, zScores: { pts: 0.332, reb: -0.031, ast: -0.267, stl: -0.708, blk: 2.392, tpm: -0.597, fgImpact: 0.494, ftImpact: -0.589, to: -0.035 } },
          { name: "JRob Croy", min: 24, pts: 0, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 6, ftm: 0, fta: 0, composite: -5.01, zScores: { pts: -1.074, reb: -0.383, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -2.337, ftImpact: 0, to: 0.838 } },
          { name: "Joel Foxwell", min: 40, pts: 11, reb: 3, ast: 6, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 14, ftm: 2, fta: 2, composite: 1.75, zScores: { pts: 0.472, reb: -0.031, ast: 2.144, stl: 0.318, blk: -0.478, tpm: 1.689, fgImpact: -3.011, ftImpact: 0.678, to: -0.035 } },
          { name: "Dillan Shaw", min: 36, pts: 12, reb: 12, ast: 2, stl: 1, blk: 3, to: 2, tpm: 3, fgm: 4, fga: 11, ftm: 1, fta: 2, composite: 7.23, zScores: { pts: 0.613, reb: 3.138, ast: 0.215, stl: 0.318, blk: 3.827, tpm: 1.689, fgImpact: -1.029, ftImpact: -0.633, to: -0.908 } },
          { name: "Jonathan Griman", min: 11, pts: 6, reb: 4, ast: 1, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 1, composite: 0.61, zScores: { pts: -0.231, reb: 0.321, ast: -0.267, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 1.273, ftImpact: -0.973, to: 0.838 } },
          { name: "Filip Malesevic", min: 8, pts: 2, reb: 3, ast: 0, stl: 0, blk: 2, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -0.1, zScores: { pts: -0.793, reb: -0.031, ast: -0.749, stl: -0.708, blk: 2.392, tpm: -0.597, fgImpact: 0.424, ftImpact: 0, to: -0.035 } },
          { name: "Nate Garcia", min: 4, pts: 2, reb: 2, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.45, zScores: { pts: -0.793, reb: -0.383, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: 0, to: 0.838 } },
          { name: "Emmanuel Innocenti", min: 13, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -3.06, zScores: { pts: -0.793, reb: -1.088, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.035, ftImpact: 0, to: 0.838 } },
          { name: "Bryce Ford", min: 7, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.51, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 0, to: -0.035 } }
        ]
      }
    },
      {
      id: "401911473",
      line: "Fresno State Bulldogs 86 @ San José State Spartans 92 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Fres", name: "Fresno State Bulldogs", score: 86,
        players: [
          { name: "Bradey Henige", min: 31, pts: 16, reb: 8, ast: 1, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 8, fga: 12, ftm: 0, fta: 2, composite: 2.61, zScores: { pts: 1.176, reb: 1.73, ast: -0.267, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 1.836, ftImpact: -1.945, to: 0.838 } },
          { name: "Roger Fabrega Urpina", min: 38, pts: 5, reb: 3, ast: 12, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 5, ftm: 1, fta: 2, composite: -0.76, zScores: { pts: -0.371, reb: -0.031, ast: 5.038, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.32, ftImpact: -0.633, to: -2.654 } },
          { name: "Brian Amuneke", min: 25, pts: 18, reb: 2, ast: 0, stl: 1, blk: 0, to: 3, tpm: 4, fgm: 6, fga: 12, ftm: 2, fta: 2, composite: 1.72, zScores: { pts: 1.457, reb: -0.383, ast: -0.749, stl: 0.318, blk: -0.478, tpm: 2.451, fgImpact: 0.209, ftImpact: 0.678, to: -1.781 } },
          { name: "Dragos Lungu", min: 23, pts: 4, reb: 1, ast: 2, stl: 1, blk: 0, to: 4, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -5.15, zScores: { pts: -0.512, reb: -0.735, ast: 0.215, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -0.709, ftImpact: 0, to: -2.654 } },
          { name: "Ross Candelino", min: 38, pts: 21, reb: 6, ast: 2, stl: 1, blk: 1, to: 3, tpm: 5, fgm: 7, fga: 13, ftm: 2, fta: 3, composite: 6.16, zScores: { pts: 1.879, reb: 1.025, ast: 0.215, stl: 0.318, blk: 0.957, tpm: 3.212, fgImpact: 0.633, ftImpact: -0.294, to: -1.781 } },
          { name: "Marko Vuckovic", min: 11, pts: 8, reb: 2, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 5, fta: 6, composite: -0.41, zScores: { pts: 0.051, reb: -0.383, ast: -0.267, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -0.355, ftImpact: 0.723, to: 0.838 } },
          { name: "Anthony Granger", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Rylan Parsley", min: 21, pts: 14, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 7, ftm: 3, fta: 4, composite: 3.21, zScores: { pts: 0.894, reb: 0.673, ast: -0.267, stl: -0.708, blk: -0.478, tpm: 1.689, fgImpact: 0.529, ftImpact: 0.045, to: 0.838 } },
          { name: "Baye Fall", min: 9, pts: 0, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -2.32, zScores: { pts: -1.074, reb: -0.031, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } }
        ]
      },
      home: {
        abbr: "SJSU", name: "San José State Spartans", score: 92,
        players: [
          { name: "KJ Martin Jr.", min: 3, pts: 4, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -2.83, zScores: { pts: -0.512, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.459, ftImpact: 0, to: 0.838 } },
          { name: "Robert Vaihola", min: 29, pts: 9, reb: 11, ast: 1, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 3, fta: 5, composite: 2.07, zScores: { pts: 0.191, reb: 2.786, ast: -0.267, stl: -0.708, blk: 2.392, tpm: -0.597, fgImpact: 0.104, ftImpact: -0.928, to: -0.908 } },
          { name: "Joey Chammaa", min: 25, pts: 23, reb: 3, ast: 5, stl: 0, blk: 0, to: 3, tpm: 4, fgm: 7, fga: 8, ftm: 5, fta: 5, composite: 7.55, zScores: { pts: 2.16, reb: -0.031, ast: 1.662, stl: -0.708, blk: -0.478, tpm: 2.451, fgImpact: 2.581, ftImpact: 1.695, to: -1.781 } },
          { name: "JaVaughn Hannah", min: 35, pts: 9, reb: 0, ast: 3, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 5, fta: 6, composite: -2, zScores: { pts: 0.191, reb: -1.088, ast: 0.698, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.709, ftImpact: 0.723, to: -0.035 } },
          { name: "Mekhi Mason", min: 38, pts: 30, reb: 3, ast: 6, stl: 5, blk: 1, to: 1, tpm: 5, fgm: 8, fga: 14, ftm: 9, fta: 12, composite: 15, zScores: { pts: 3.144, reb: -0.031, ast: 2.144, stl: 4.421, blk: 0.957, tpm: 3.212, fgImpact: 1.057, ftImpact: 0.134, to: -0.035 } },
          { name: "Zine Eddine Bedri", min: 13, pts: 2, reb: 1, ast: 1, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 7, ftm: 0, fta: 1, composite: -6.5, zScores: { pts: -0.793, reb: -0.735, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -1.913, ftImpact: -0.973, to: -0.035 } },
          { name: "Mookie Cook", min: 20, pts: 6, reb: 8, ast: 1, stl: 2, blk: 0, to: 3, tpm: 0, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 0.21, zScores: { pts: -0.231, reb: 1.73, ast: -0.267, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: 0.494, ftImpact: 0, to: -1.781 } },
          { name: "Oliver Kullamae", min: 10, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.89, zScores: { pts: -1.074, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: 0.838 } },
          { name: "Pasha Goodarzi", min: 27, pts: 9, reb: 3, ast: 1, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: -0.31, zScores: { pts: 0.191, reb: -0.031, ast: -0.267, stl: -0.708, blk: -0.478, tpm: 1.689, fgImpact: -0.675, ftImpact: 0, to: -0.035 } }
        ]
      }
    },
      {
      id: "401909762",
      line: "Portland Pilots 77 @ Colorado Buffaloes 74 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "Portl", name: "Portland Pilots", score: 77,
        players: [
          { name: "Timo George", min: 19, pts: 4, reb: 1, ast: 3, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 3, composite: -4.37, zScores: { pts: -0.512, reb: -0.735, ast: 0.698, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.035, ftImpact: -0.294, to: -1.781 } },
          { name: "Dante Censori-Hercules", min: 23, pts: 7, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 3, fga: 4, ftm: 0, fta: 0, composite: -2.27, zScores: { pts: -0.09, reb: -0.383, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 0.883, ftImpact: 0, to: -0.908 } },
          { name: "Riley Parker", min: 33, pts: 6, reb: 6, ast: 2, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: -1.78, zScores: { pts: -0.231, reb: 1.025, ast: 0.215, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -1.099, ftImpact: -0.633, to: -0.035 } },
          { name: "Jaxon Olvera", min: 25, pts: 22, reb: 3, ast: 0, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 8, fga: 15, ftm: 5, fta: 6, composite: 0.7, zScores: { pts: 2.019, reb: -0.031, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 0.668, ftImpact: 0.723, to: -0.908 } },
          { name: "Hunter Adam", min: 34, pts: 13, reb: 5, ast: 0, stl: 0, blk: 1, to: 0, tpm: 3, fgm: 4, fga: 8, ftm: 2, fta: 3, composite: 3.3, zScores: { pts: 0.754, reb: 0.673, ast: -0.749, stl: -0.708, blk: 0.957, tpm: 1.689, fgImpact: 0.139, ftImpact: -0.294, to: 0.838 } },
          { name: "Henry Sewell", min: 17, pts: 2, reb: 4, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -1.88, zScores: { pts: -0.793, reb: 0.321, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0.678, to: 0.838 } },
          { name: "Kaia Isaac", min: 20, pts: 7, reb: 3, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 6, ftm: 3, fta: 3, composite: 0.64, zScores: { pts: -0.09, reb: -0.031, ast: 0.215, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: -0.709, ftImpact: 1.017, to: -0.035 } },
          { name: "RJ Nance Jr.", min: 25, pts: 14, reb: 4, ast: 4, stl: 2, blk: 0, to: 2, tpm: 0, fgm: 7, fga: 12, ftm: 0, fta: 1, composite: 1.81, zScores: { pts: 0.894, reb: 0.321, ast: 1.18, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: 1.023, ftImpact: -0.973, to: -0.908 } },
          { name: "Carlin Briggs", min: 4, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.15, zScores: { pts: -0.793, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: 0, to: 0.838 } }
        ]
      },
      home: {
        abbr: "Col", name: "Colorado Buffaloes", score: 74,
        players: [
          { name: "Noah Feddersen", min: 32, pts: 14, reb: 2, ast: 2, stl: 1, blk: 2, to: 3, tpm: 0, fgm: 6, fga: 12, ftm: 2, fta: 2, composite: 1.95, zScores: { pts: 0.894, reb: -0.383, ast: 0.215, stl: 0.318, blk: 2.392, tpm: -0.597, fgImpact: 0.209, ftImpact: 0.678, to: -1.781 } },
          { name: "Josiah Sanders", min: 23, pts: 8, reb: 3, ast: 2, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 0.24, zScores: { pts: 0.051, reb: -0.031, ast: 0.215, stl: 0.318, blk: 0.957, tpm: -0.597, fgImpact: -0.64, ftImpact: 0, to: -0.035 } },
          { name: "Ian Inman", min: 24, pts: 2, reb: 6, ast: 1, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 9, ftm: 0, fta: 0, composite: -5.42, zScores: { pts: -0.793, reb: 1.025, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -2.692, ftImpact: 0, to: -0.908 } },
          { name: "Jalin Holland", min: 29, pts: 12, reb: 6, ast: 0, stl: 4, blk: 0, to: 2, tpm: 2, fgm: 5, fga: 10, ftm: 0, fta: 1, composite: 3.03, zScores: { pts: 0.613, reb: 1.025, ast: -0.749, stl: 3.395, blk: -0.478, tpm: 0.927, fgImpact: 0.174, ftImpact: -0.973, to: -0.908 } },
          { name: "Barrington Hargress", min: 24, pts: 3, reb: 0, ast: 4, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 1, fta: 2, composite: -3.27, zScores: { pts: -0.652, reb: -1.088, ast: 1.18, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -1.134, ftImpact: -0.633, to: 0.838 } },
          { name: "David Gomez", min: 10, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.8, zScores: { pts: -1.074, reb: -0.383, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 0, to: -0.035 } },
          { name: "Justin Neely", min: 23, pts: 27, reb: 9, ast: 1, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 9, fga: 12, ftm: 8, fta: 9, composite: 7.87, zScores: { pts: 2.722, reb: 2.082, ast: -0.267, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 2.65, ftImpact: 1.74, to: -0.035 } },
          { name: "Eric Jacobsen", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Alex Dickeson", min: 28, pts: 6, reb: 5, ast: 6, stl: 1, blk: 1, to: 0, tpm: 2, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: 4.14, zScores: { pts: -0.231, reb: 0.673, ast: 2.144, stl: 0.318, blk: 0.957, tpm: 0.927, fgImpact: -1.488, ftImpact: 0, to: 0.838 } },
          { name: "Amir Jones", min: 4, pts: 2, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.67, zScores: { pts: -0.793, reb: -1.088, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: 0, to: 0.838 } }
        ]
      }
    },
      {
      id: "401909494",
      line: "Bethune-Cookman Wildcats 65 @ Creighton Bluejays 88 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "BCU", name: "Bethune-Cookman Wildcats", score: 65,
        players: [

        ]
      },
      home: {
        abbr: "Crei", name: "Creighton Bluejays", score: 88,
        players: [
          { name: "Oswin Erhunmwunse", min: 15, pts: 3, reb: 7, ast: 1, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 1, fga: 2, ftm: 1, fta: 3, composite: -2.78, zScores: { pts: -0.652, reb: 1.377, ast: -0.267, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0.035, ftImpact: -1.606, to: -0.908 } },
          { name: "Jackson McAndrew", min: 22, pts: 8, reb: 4, ast: 1, stl: 3, blk: 0, to: 1, tpm: 2, fgm: 3, fga: 10, ftm: 0, fta: 0, composite: 1.43, zScores: { pts: 0.051, reb: 0.321, ast: -0.267, stl: 2.369, blk: -0.478, tpm: 0.927, fgImpact: -1.454, ftImpact: 0, to: -0.035 } },
          { name: "Wes Enis", min: 23, pts: 9, reb: 3, ast: 3, stl: 1, blk: 0, to: 2, tpm: 3, fgm: 3, fga: 8, ftm: 0, fta: 0, composite: 0.8, zScores: { pts: 0.191, reb: -0.031, ast: 0.698, stl: 0.318, blk: -0.478, tpm: 1.689, fgImpact: -0.675, ftImpact: 0, to: -0.908 } },
          { name: "BJ Davis", min: 22, pts: 15, reb: 6, ast: 2, stl: 3, blk: 0, to: 1, tpm: 1, fgm: 5, fga: 10, ftm: 4, fta: 4, composite: 5.83, zScores: { pts: 1.035, reb: 1.025, ast: 0.215, stl: 2.369, blk: -0.478, tpm: 0.165, fgImpact: 0.174, ftImpact: 1.356, to: -0.035 } },
          { name: "Austin Swartz", min: 17, pts: 3, reb: 6, ast: 1, stl: 0, blk: 0, to: 2, tpm: 1, fgm: 1, fga: 5, ftm: 0, fta: 0, composite: -2.96, zScores: { pts: -0.652, reb: 1.025, ast: -0.267, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -1.134, ftImpact: 0, to: -0.908 } },
          { name: "Trevon Carter-Givens", min: 11, pts: 4, reb: 1, ast: 2, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 2, composite: -3.07, zScores: { pts: -0.512, reb: -0.735, ast: 0.215, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.849, ftImpact: -1.945, to: 0.838 } },
          { name: "Jasen Green", min: 20, pts: 7, reb: 2, ast: 3, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: -0.71, zScores: { pts: -0.09, reb: -0.383, ast: 0.698, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0.494, ftImpact: -0.633, to: -0.035 } },
          { name: "Isaac Traudt", min: 3, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Fredrick King", min: 11, pts: 11, reb: 4, ast: 0, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 4, fga: 5, ftm: 3, fta: 4, composite: 1.89, zScores: { pts: 0.472, reb: 0.321, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 1.308, ftImpact: 0.045, to: 0.838 } },
          { name: "Katrelle Harmon", min: 24, pts: 6, reb: 2, ast: 5, stl: 3, blk: 1, to: 2, tpm: 0, fgm: 2, fga: 3, ftm: 2, fta: 5, composite: 1.09, zScores: { pts: -0.231, reb: -0.383, ast: 1.662, stl: 2.369, blk: 0.957, tpm: -0.597, fgImpact: 0.459, ftImpact: -2.24, to: -0.908 } },
          { name: "Brody Robinson", min: 3, pts: 2, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -2.52, zScores: { pts: -0.793, reb: -1.088, ast: -0.267, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: 0, to: -0.035 } },
          { name: "Hudson Greer", min: 24, pts: 14, reb: 5, ast: 0, stl: 2, blk: 1, to: 0, tpm: 3, fgm: 5, fga: 10, ftm: 1, fta: 1, composite: 6.16, zScores: { pts: 0.894, reb: 0.673, ast: -0.749, stl: 1.344, blk: 0.957, tpm: 1.689, fgImpact: 0.174, ftImpact: 0.339, to: 0.838 } },
          { name: "Kayden Edwards", min: 5, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 0, fta: 0, composite: -1.07, zScores: { pts: -0.231, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.927, fgImpact: 0.07, ftImpact: 0, to: 0.838 } }
        ]
      }
    },
      {
      id: "401917535",
      line: "UC Riverside Highlanders 62 @ San Diego Toreros 71 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UCR", name: "UC Riverside Highlanders", score: 62,
        players: [

        ]
      },
      home: {
        abbr: "USD", name: "San Diego Toreros", score: 71,
        players: [
          { name: "Sekou Konneh", min: 20, pts: 4, reb: 3, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 0, composite: -1.22, zScores: { pts: -0.512, reb: -0.031, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0.459, ftImpact: 0, to: -0.035 } },
          { name: "Jevon Hill", min: 18, pts: 6, reb: 1, ast: 0, stl: 0, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 3, fta: 3, composite: 0.2, zScores: { pts: -0.231, reb: -0.735, ast: -0.749, stl: -0.708, blk: 0.957, tpm: 0.165, fgImpact: -0.355, ftImpact: 1.017, to: 0.838 } },
          { name: "Davion Hill", min: 25, pts: 18, reb: 6, ast: 5, stl: 3, blk: 1, to: 3, tpm: 1, fgm: 6, fga: 12, ftm: 5, fta: 6, composite: 6.79, zScores: { pts: 1.457, reb: 1.025, ast: 1.662, stl: 2.369, blk: 0.957, tpm: 0.165, fgImpact: 0.209, ftImpact: 0.723, to: -1.781 } },
          { name: "Marqui Worthy Jr.", min: 21, pts: 2, reb: 2, ast: 4, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 4, ftm: 2, fta: 2, composite: -0.8, zScores: { pts: -0.793, reb: -0.383, ast: 1.18, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -1.558, ftImpact: 0.678, to: 0.838 } },
          { name: "Dusty Stromer", min: 34, pts: 20, reb: 1, ast: 0, stl: 1, blk: 0, to: 1, tpm: 2, fgm: 6, fga: 11, ftm: 6, fta: 6, composite: 3.62, zScores: { pts: 1.738, reb: -0.735, ast: -0.749, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: 0.598, ftImpact: 2.035, to: -0.035 } },
          { name: "Brannon Martinsen", min: 15, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.06, zScores: { pts: -1.074, reb: -0.031, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: -0.035 } },
          { name: "Antonio Munoz", min: 4, pts: 0, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.87, zScores: { pts: -1.074, reb: -0.383, ast: -0.749, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: -0.908 } },
          { name: "Terry McMorris", min: 27, pts: 4, reb: 9, ast: 0, stl: 2, blk: 2, to: 0, tpm: 0, fgm: 2, fga: 2, ftm: 0, fta: 1, composite: 4.67, zScores: { pts: -0.512, reb: 2.082, ast: -0.749, stl: 1.344, blk: 2.392, tpm: -0.597, fgImpact: 0.849, ftImpact: -0.973, to: 0.838 } },
          { name: "Jose Roberto Tanchyn", min: 20, pts: 13, reb: 3, ast: 1, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 5, fga: 10, ftm: 2, fta: 2, composite: 0.81, zScores: { pts: 0.754, reb: -0.031, ast: -0.267, stl: -0.708, blk: 0.957, tpm: 0.165, fgImpact: 0.174, ftImpact: 0.678, to: -0.908 } },
          { name: "Chace Holley", min: 16, pts: 4, reb: 2, ast: 3, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 0, fga: 2, ftm: 4, fta: 4, composite: -3.18, zScores: { pts: -0.512, reb: -0.383, ast: 0.698, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 1.356, to: -1.781 } }
        ]
      }
    },
      {
      id: "401929146",
      line: "Texas Southern Tigers 51 @ San Diego State Aztecs 97 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "TXSO", name: "Texas Southern Tigers", score: 51,
        players: [

        ]
      },
      home: {
        abbr: "SDSU", name: "San Diego State Aztecs", score: 97,
        players: [
          { name: "Tae Simmons", min: 21, pts: 12, reb: 8, ast: 3, stl: 2, blk: 2, to: 1, tpm: 0, fgm: 5, fga: 5, ftm: 2, fta: 2, composite: 8.94, zScores: { pts: 0.613, reb: 1.73, ast: 0.698, stl: 1.344, blk: 2.392, tpm: -0.597, fgImpact: 2.121, ftImpact: 0.678, to: -0.035 } },
          { name: "Bear Cherry", min: 14, pts: 13, reb: 4, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 6, fga: 6, ftm: 1, fta: 1, composite: 2.9, zScores: { pts: 0.754, reb: 0.321, ast: -0.267, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 2.546, ftImpact: 0.339, to: -0.035 } },
          { name: "Chance Gladden", min: 16, pts: 12, reb: 0, ast: 1, stl: 1, blk: 0, to: 0, tpm: 3, fgm: 4, fga: 5, ftm: 1, fta: 2, composite: 2.3, zScores: { pts: 0.613, reb: -1.088, ast: -0.267, stl: 0.318, blk: -0.478, tpm: 1.689, fgImpact: 1.308, ftImpact: -0.633, to: 0.838 } },
          { name: "Elzie Harrington", min: 20, pts: 4, reb: 1, ast: 6, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -0.76, zScores: { pts: -0.512, reb: -0.735, ast: 2.144, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.709, ftImpact: 0, to: 0.838 } },
          { name: "Latrell Davis", min: 19, pts: 20, reb: 2, ast: 3, stl: 0, blk: 0, to: 1, tpm: 5, fgm: 6, fga: 12, ftm: 3, fta: 4, composite: 4.3, zScores: { pts: 1.738, reb: -0.383, ast: 0.698, stl: -0.708, blk: -0.478, tpm: 3.212, fgImpact: 0.209, ftImpact: 0.045, to: -0.035 } },
          { name: "Luca Vincini", min: 15, pts: 4, reb: 6, ast: 2, stl: 0, blk: 1, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 2, fta: 5, composite: -0.99, zScores: { pts: -0.512, reb: 1.025, ast: 0.215, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0.035, ftImpact: -2.24, to: 0.838 } },
          { name: "Luka Skoric", min: 19, pts: 10, reb: 4, ast: 2, stl: 0, blk: 0, to: 1, tpm: 3, fgm: 3, fga: 5, ftm: 1, fta: 2, composite: 1.2, zScores: { pts: 0.332, reb: 0.321, ast: 0.215, stl: -0.708, blk: -0.478, tpm: 1.689, fgImpact: 0.494, ftImpact: -0.633, to: -0.035 } },
          { name: "Thokbor Majak", min: 8, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -5.12, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: -0.035 } },
          { name: "Cooper Cornelius", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "David Torresani", min: 22, pts: 6, reb: 4, ast: 5, stl: 5, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 2, fta: 3, composite: 3.28, zScores: { pts: -0.231, reb: 0.321, ast: 1.662, stl: 4.421, blk: -0.478, tpm: -0.597, fgImpact: -1.488, ftImpact: -0.294, to: -0.035 } },
          { name: "Raymar Gonzales", min: 3, pts: 0, reb: 0, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -3.61, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 0, to: 0.838 } },
          { name: "Zach White", min: 18, pts: 5, reb: 1, ast: 1, stl: 1, blk: 1, to: 0, tpm: 1, fgm: 1, fga: 3, ftm: 2, fta: 2, composite: 1.23, zScores: { pts: -0.371, reb: -0.735, ast: -0.267, stl: 0.318, blk: 0.957, tpm: 0.165, fgImpact: -0.355, ftImpact: 0.678, to: 0.838 } },
          { name: "Isaiah Sy", min: 21, pts: 11, reb: 8, ast: 1, stl: 2, blk: 0, to: 2, tpm: 3, fgm: 4, fga: 10, ftm: 0, fta: 0, composite: 2.94, zScores: { pts: 0.472, reb: 1.73, ast: -0.267, stl: 1.344, blk: -0.478, tpm: 1.689, fgImpact: -0.64, ftImpact: 0, to: -0.908 } }
        ]
      }
    },
      {
      id: "401929004",
      line: "Washington State Cougars 79 @ Hawai'i Rainbow Warriors 63 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "WaSt", name: "Washington State Cougars", score: 79,
        players: [
          { name: "Ronnie Harrison", min: 27, pts: 15, reb: 3, ast: 1, stl: 1, blk: 2, to: 0, tpm: 0, fgm: 5, fga: 10, ftm: 5, fta: 6, composite: 4.59, zScores: { pts: 1.035, reb: -0.031, ast: -0.267, stl: 0.318, blk: 2.392, tpm: -0.597, fgImpact: 0.174, ftImpact: 0.723, to: 0.838 } },
          { name: "Ladji Dembele", min: 16, pts: 6, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 1, fta: 2, composite: -0.18, zScores: { pts: -0.231, reb: 0.673, ast: -0.267, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 0.459, ftImpact: -0.633, to: 0.838 } },
          { name: "Lazerek Houston", min: 35, pts: 16, reb: 11, ast: 9, stl: 4, blk: 0, to: 5, tpm: 2, fgm: 5, fga: 10, ftm: 4, fta: 4, composite: 9.4, zScores: { pts: 1.176, reb: 2.786, ast: 3.591, stl: 3.395, blk: -0.478, tpm: 0.927, fgImpact: 0.174, ftImpact: 1.356, to: -3.527 } },
          { name: "Sebastian Akins", min: 18, pts: 6, reb: 2, ast: 1, stl: 0, blk: 0, to: 3, tpm: 0, fgm: 2, fga: 5, ftm: 2, fta: 2, composite: -4.09, zScores: { pts: -0.231, reb: -0.383, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.32, ftImpact: 0.678, to: -1.781 } },
          { name: "Jaylen Harrell", min: 17, pts: 3, reb: 3, ast: 0, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: -2.21, zScores: { pts: -0.652, reb: -0.031, ast: -0.749, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: -0.744, ftImpact: 0, to: -0.035 } },
          { name: "Mohamed Sankhe", min: 12, pts: 5, reb: 4, ast: 0, stl: 0, blk: 2, to: 2, tpm: 0, fgm: 2, fga: 2, ftm: 1, fta: 3, composite: -1.38, zScores: { pts: -0.371, reb: 0.321, ast: -0.749, stl: -0.708, blk: 2.392, tpm: -0.597, fgImpact: 0.849, ftImpact: -1.606, to: -0.908 } },
          { name: "Dominik Robinson", min: 10, pts: 4, reb: 3, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 5, ftm: 2, fta: 2, composite: -2.69, zScores: { pts: -0.512, reb: -0.031, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -1.134, ftImpact: 0.678, to: 0.838 } },
          { name: "Tyler Kropp", min: 20, pts: 13, reb: 3, ast: 0, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 5, fga: 9, ftm: 3, fta: 3, composite: 2.66, zScores: { pts: 0.754, reb: -0.031, ast: -0.749, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: 0.563, ftImpact: 1.017, to: 0.838 } },
          { name: "Brayden Kyman", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "RJ Jones", min: 8, pts: 0, reb: 0, ast: 1, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.61, zScores: { pts: -1.074, reb: -1.088, ast: -0.267, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: -0.035 } },
          { name: "Casey Jones", min: 18, pts: 3, reb: 2, ast: 0, stl: 1, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 1, fta: 2, composite: -1.35, zScores: { pts: -0.652, reb: -0.383, ast: -0.749, stl: 0.318, blk: 0.957, tpm: -0.597, fgImpact: 0.424, ftImpact: -0.633, to: -0.035 } },
          { name: "Jamari Phillips", min: 18, pts: 8, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 2, fga: 4, ftm: 2, fta: 4, composite: -2.05, zScores: { pts: 0.051, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.927, fgImpact: 0.07, ftImpact: -1.267, to: 0.838 } }
        ]
      },
      home: {
        abbr: "HI", name: "Hawai'i Rainbow Warriors", score: 63,
        players: [
          { name: "Zack Davidson", min: 23, pts: 5, reb: 4, ast: 2, stl: 1, blk: 0, to: 2, tpm: 0, fgm: 2, fga: 4, ftm: 1, fta: 4, composite: -4.01, zScores: { pts: -0.371, reb: 0.321, ast: 0.215, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0.07, ftImpact: -2.579, to: -0.908 } },
          { name: "Bol Dengdit", min: 26, pts: 4, reb: 8, ast: 0, stl: 0, blk: 0, to: 4, tpm: 0, fgm: 1, fga: 6, ftm: 2, fta: 2, composite: -4.81, zScores: { pts: -0.512, reb: 1.73, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -1.523, ftImpact: 0.678, to: -2.654 } },
          { name: "Jaden Matingou", min: 21, pts: 6, reb: 1, ast: 0, stl: 0, blk: 0, to: 4, tpm: 1, fgm: 2, fga: 7, ftm: 1, fta: 2, composite: -7.12, zScores: { pts: -0.231, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: -1.099, ftImpact: -0.633, to: -2.654 } },
          { name: "Tanner Cuff", min: 33, pts: 11, reb: 3, ast: 3, stl: 1, blk: 0, to: 3, tpm: 0, fgm: 1, fga: 3, ftm: 9, fta: 9, composite: 1.3, zScores: { pts: 0.472, reb: -0.031, ast: 0.698, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -0.355, ftImpact: 3.052, to: -1.781 } },
          { name: "Chance Trujillo", min: 34, pts: 17, reb: 3, ast: 0, stl: 1, blk: 1, to: 0, tpm: 5, fgm: 6, fga: 14, ftm: 0, fta: 0, composite: 5.29, zScores: { pts: 1.316, reb: -0.031, ast: -0.749, stl: 0.318, blk: 0.957, tpm: 3.212, fgImpact: -0.57, ftImpact: 0, to: 0.838 } },
          { name: "Kellen Hampton", min: 29, pts: 9, reb: 6, ast: 2, stl: 0, blk: 2, to: 0, tpm: 0, fgm: 1, fga: 4, ftm: 7, fta: 8, composite: 4.01, zScores: { pts: 0.191, reb: 1.025, ast: 0.215, stl: -0.708, blk: 2.392, tpm: -0.597, fgImpact: -0.744, ftImpact: 1.401, to: 0.838 } },
          { name: "Tiger Cuff", min: 7, pts: 0, reb: 0, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.37, zScores: { pts: -1.074, reb: -1.088, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Isaiah Kerr", min: 25, pts: 11, reb: 2, ast: 1, stl: 1, blk: 0, to: 0, tpm: 1, fgm: 4, fga: 12, ftm: 2, fta: 3, composite: -1.05, zScores: { pts: 0.472, reb: -0.383, ast: -0.267, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: -1.419, ftImpact: -0.294, to: 0.838 } },
          { name: "Alois Leyrolles", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -4.63, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 0, to: 0.838 } }
        ]
      }
    },
      {
      id: "401921064",
      line: "Louisiana Ragin' Cajuns 56 @ San Francisco Dons 77 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UL", name: "Louisiana Ragin' Cajuns", score: 56,
        players: [

        ]
      },
      home: {
        abbr: "USF", name: "San Francisco Dons", score: 77,
        players: [
          { name: "Gustav Knudsen", min: 31, pts: 18, reb: 5, ast: 0, stl: 3, blk: 0, to: 2, tpm: 2, fgm: 7, fga: 11, ftm: 2, fta: 2, composite: 5.38, zScores: { pts: 1.457, reb: 0.673, ast: -0.749, stl: 2.369, blk: -0.478, tpm: 0.927, fgImpact: 1.412, ftImpact: 0.678, to: -0.908 } },
          { name: "Ben Oosterbaan", min: 30, pts: 15, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 2, fgm: 5, fga: 8, ftm: 3, fta: 3, composite: 2.28, zScores: { pts: 1.035, reb: 0.321, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.927, fgImpact: 0.953, ftImpact: 1.017, to: -0.035 } },
          { name: "Ismaila Diagne", min: 20, pts: 8, reb: 2, ast: 2, stl: 1, blk: 2, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 2, fta: 2, composite: 1.87, zScores: { pts: 0.051, reb: -0.383, ast: 0.215, stl: 0.318, blk: 2.392, tpm: -0.597, fgImpact: 0.104, ftImpact: 0.678, to: -0.908 } },
          { name: "Dylan Bordon", min: 32, pts: 12, reb: 7, ast: 10, stl: 1, blk: 0, to: 3, tpm: 2, fgm: 4, fga: 9, ftm: 2, fta: 2, composite: 5.48, zScores: { pts: 0.613, reb: 1.377, ast: 4.073, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: -0.25, ftImpact: 0.678, to: -1.781 } },
          { name: "Yoav Vitlem", min: 21, pts: 6, reb: 3, ast: 2, stl: 2, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 2, ftm: 4, fta: 4, composite: 1.58, zScores: { pts: -0.231, reb: -0.031, ast: 0.215, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: 0.035, ftImpact: 1.356, to: -0.035 } },
          { name: "Ziga Daneu", min: 3, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.15, zScores: { pts: -0.793, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: 0, to: 0.838 } },
          { name: "Jaroslavs Pihtovs", min: 7, pts: 0, reb: 3, ast: 0, stl: 0, blk: 1, to: 3, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 2, composite: -5.93, zScores: { pts: -1.074, reb: -0.031, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0, ftImpact: -1.945, to: -1.781 } },
          { name: "Adam Tyson", min: 1, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Ndewedo Newbury", min: 20, pts: 5, reb: 2, ast: 1, stl: 1, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 5, ftm: 0, fta: 2, composite: -3.32, zScores: { pts: -0.371, reb: -0.383, ast: -0.267, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: -0.32, ftImpact: -1.945, to: -0.035 } },
          { name: "Andrew Hilman", min: 12, pts: 9, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 1, fgm: 2, fga: 2, ftm: 4, fta: 5, composite: -1.47, zScores: { pts: 0.191, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 0.849, ftImpact: 0.384, to: -0.035 } },
          { name: "Jaylen Hunter-Coleman", min: 6, pts: 0, reb: 1, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 3, composite: -7.29, zScores: { pts: -1.074, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: -2.918, to: -0.035 } },
          { name: "Abdul Bashir", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Aidan Braccia", min: 13, pts: 2, reb: 1, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 2, fta: 2, composite: -2.93, zScores: { pts: -0.793, reb: -0.735, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0.678, to: 0.838 } }
        ]
      }
    },
      {
      id: "401911456",
      line: "Idaho Vandals 74 @ Nevada Wolf Pack 91 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "IDHO", name: "Idaho Vandals", score: 74,
        players: [

        ]
      },
      home: {
        abbr: "Nev", name: "Nevada Wolf Pack", score: 91,
        players: [
          { name: "Simon Majok", min: 15, pts: 14, reb: 2, ast: 0, stl: 1, blk: 1, to: 0, tpm: 3, fgm: 5, fga: 6, ftm: 1, fta: 3, composite: 3.69, zScores: { pts: 0.894, reb: -0.383, ast: -0.749, stl: 0.318, blk: 0.957, tpm: 1.689, fgImpact: 1.732, ftImpact: -1.606, to: 0.838 } },
          { name: "TJ Coulter", min: 19, pts: 9, reb: 0, ast: 2, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 3, fga: 5, ftm: 2, fta: 4, composite: -1.64, zScores: { pts: 0.191, reb: -1.088, ast: 0.215, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 0.494, ftImpact: -1.267, to: 0.838 } },
          { name: "Peyton White", min: 20, pts: 11, reb: 3, ast: 1, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 0.94, zScores: { pts: 0.472, reb: -0.031, ast: -0.267, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 0.953, ftImpact: 0, to: 0.838 } },
          { name: "Peter Bandelj", min: 23, pts: 8, reb: 2, ast: 4, stl: 0, blk: 0, to: 0, tpm: 2, fgm: 3, fga: 5, ftm: 0, fta: 0, composite: 1.92, zScores: { pts: 0.051, reb: -0.383, ast: 1.18, stl: -0.708, blk: -0.478, tpm: 0.927, fgImpact: 0.494, ftImpact: 0, to: 0.838 } },
          { name: "Styles Phipps", min: 27, pts: 4, reb: 5, ast: 5, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 2, fga: 8, ftm: 0, fta: 0, composite: -0.46, zScores: { pts: -0.512, reb: 0.673, ast: 1.662, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -1.488, ftImpact: 0, to: -0.035 } },
          { name: "Kade Snyder", min: 8, pts: 2, reb: 2, ast: 0, stl: 1, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -1.81, zScores: { pts: -0.793, reb: -0.383, ast: -0.749, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: 0.035, ftImpact: 0, to: 0.838 } },
          { name: "Hudson Lucas", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Elijah Price", min: 32, pts: 21, reb: 8, ast: 2, stl: 1, blk: 1, to: 2, tpm: 1, fgm: 8, fga: 15, ftm: 4, fta: 8, composite: 2.49, zScores: { pts: 1.879, reb: 1.73, ast: 0.215, stl: 0.318, blk: 0.957, tpm: 0.165, fgImpact: 0.668, ftImpact: -2.534, to: -0.908 } },
          { name: "Cedric Lath", min: 2, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, composite: -3.86, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0, ftImpact: 0, to: 0.838 } },
          { name: "Vaughn Weems", min: 24, pts: 11, reb: 5, ast: 6, stl: 0, blk: 1, to: 2, tpm: 1, fgm: 4, fga: 7, ftm: 2, fta: 2, composite: 4, zScores: { pts: 0.472, reb: 0.673, ast: 2.144, stl: -0.708, blk: 0.957, tpm: 0.165, fgImpact: 0.529, ftImpact: 0.678, to: -0.908 } },
          { name: "Myles Walker", min: 11, pts: 0, reb: 0, ast: 4, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -3.19, zScores: { pts: -1.074, reb: -1.088, ast: 1.18, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: -0.035 } },
          { name: "SJ Madison", min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 1, fga: 1, ftm: 0, fta: 0, composite: -3.15, zScores: { pts: -0.793, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: 0, to: 0.838 } },
          { name: "Keyon Kensie Jr.", min: 12, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 2, fga: 3, ftm: 1, fta: 4, composite: -4.37, zScores: { pts: -0.231, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 0.459, ftImpact: -2.579, to: 0.838 } },
          { name: "John Mattingly", min: 3, pts: 3, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 1, fgm: 1, fga: 2, ftm: 0, fta: 0, composite: -2.64, zScores: { pts: -0.652, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: 0.165, fgImpact: 0.035, ftImpact: 0, to: 0.838 } }
        ]
      }
    },
      {
      id: "401920516",
      line: "UNLV Rebels 71 @ Auburn Tigers 86 (Final)",
      completed: true,
      statusText: "Final",
      away: {
        abbr: "UNLV", name: "UNLV Rebels", score: 71,
        players: [
          { name: "Tyrin Jones", min: 37, pts: 16, reb: 6, ast: 2, stl: 2, blk: 2, to: 0, tpm: 0, fgm: 4, fga: 12, ftm: 8, fta: 13, composite: 2.82, zScores: { pts: 1.176, reb: 1.025, ast: 0.215, stl: 1.344, blk: 2.392, tpm: -0.597, fgImpact: -1.419, ftImpact: -2.15, to: 0.838 } },
          { name: "Jeremy Foumena", min: 13, pts: 6, reb: 2, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 3, ftm: 0, fta: 0, composite: -2.78, zScores: { pts: -0.231, reb: -0.383, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 1.273, ftImpact: 0, to: -0.908 } },
          { name: "Cam Miles", min: 30, pts: 16, reb: 3, ast: 3, stl: 1, blk: 0, to: 1, tpm: 3, fgm: 4, fga: 13, ftm: 5, fta: 6, composite: 2.25, zScores: { pts: 1.176, reb: -0.031, ast: 0.698, stl: 0.318, blk: -0.478, tpm: 1.689, fgImpact: -1.808, ftImpact: 0.723, to: -0.035 } },
          { name: "Dontrez Williams", min: 19, pts: 10, reb: 3, ast: 0, stl: 2, blk: 0, to: 2, tpm: 1, fgm: 4, fga: 4, ftm: 1, fta: 2, composite: 0.74, zScores: { pts: 0.332, reb: -0.031, ast: -0.749, stl: 1.344, blk: -0.478, tpm: 0.165, fgImpact: 1.697, ftImpact: -0.633, to: -0.908 } },
          { name: "Sebastian Mack", min: 33, pts: 9, reb: 5, ast: 2, stl: 0, blk: 0, to: 6, tpm: 0, fgm: 3, fga: 12, ftm: 3, fta: 4, composite: -7.29, zScores: { pts: 0.191, reb: 0.673, ast: 0.215, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -2.233, ftImpact: 0.045, to: -4.401 } },
          { name: "Jackson Kiss", min: 18, pts: 4, reb: 4, ast: 0, stl: 0, blk: 1, to: 1, tpm: 0, fgm: 2, fga: 3, ftm: 0, fta: 2, composite: -2.81, zScores: { pts: -0.512, reb: 0.321, ast: -0.749, stl: -0.708, blk: 0.957, tpm: -0.597, fgImpact: 0.459, ftImpact: -1.945, to: -0.035 } },
          { name: "MJ Thomas", min: 11, pts: 5, reb: 4, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 1, fga: 1, ftm: 3, fta: 4, composite: -2.15, zScores: { pts: -0.371, reb: 0.321, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.424, ftImpact: 0.045, to: -0.035 } },
          { name: "Issac Williamson", min: 23, pts: 5, reb: 2, ast: 0, stl: 1, blk: 0, to: 2, tpm: 1, fgm: 2, fga: 6, ftm: 0, fta: 0, composite: -3.12, zScores: { pts: -0.371, reb: -0.383, ast: -0.749, stl: 0.318, blk: -0.478, tpm: 0.165, fgImpact: -0.709, ftImpact: 0, to: -0.908 } },
          { name: "Kota Suttle Jr.", min: 12, pts: 0, reb: 5, ast: 1, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -2.39, zScores: { pts: -1.074, reb: 0.673, ast: -0.267, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 0, to: 0.838 } },
          { name: "Terrance Ford Jr.", min: 4, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 0, composite: -4.25, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: 0, to: 0.838 } }
        ]
      },
      home: {
        abbr: "Aub", name: "Auburn Tigers", score: 86,
        players: [
          { name: "Adam Olsen", min: 27, pts: 15, reb: 0, ast: 2, stl: 1, blk: 1, to: 2, tpm: 5, fgm: 5, fga: 8, ftm: 0, fta: 0, composite: 4.69, zScores: { pts: 1.035, reb: -1.088, ast: 0.215, stl: 0.318, blk: 0.957, tpm: 3.212, fgImpact: 0.953, ftImpact: 0, to: -0.908 } },
          { name: "Thomas Dowd", min: 27, pts: 2, reb: 11, ast: 2, stl: 2, blk: 1, to: 1, tpm: 0, fgm: 1, fga: 4, ftm: 0, fta: 0, composite: 3.13, zScores: { pts: -0.793, reb: 2.786, ast: 0.215, stl: 1.344, blk: 0.957, tpm: -0.597, fgImpact: -0.744, ftImpact: 0, to: -0.035 } },
          { name: "Narcisse Ngoy", min: 11, pts: 0, reb: 3, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 1, ftm: 0, fta: 4, composite: -7.95, zScores: { pts: -1.074, reb: -0.031, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.389, ftImpact: -3.89, to: -0.035 } },
          { name: "George Kimble III", min: 28, pts: 7, reb: 2, ast: 9, stl: 2, blk: 0, to: 0, tpm: 0, fgm: 2, fga: 5, ftm: 3, fta: 6, composite: 2, zScores: { pts: -0.09, reb: -0.383, ast: 3.591, stl: 1.344, blk: -0.478, tpm: -0.597, fgImpact: -0.32, ftImpact: -1.9, to: 0.838 } },
          { name: "Tahaad Pettiford", min: 24, pts: 22, reb: 3, ast: 4, stl: 1, blk: 0, to: 2, tpm: 2, fgm: 9, fga: 17, ftm: 2, fta: 4, composite: 2.46, zScores: { pts: 2.019, reb: -0.031, ast: 1.18, stl: 0.318, blk: -0.478, tpm: 0.927, fgImpact: 0.703, ftImpact: -1.267, to: -0.908 } },
          { name: "Owen Freeman", min: 15, pts: 18, reb: 5, ast: 0, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 9, fga: 12, ftm: 0, fta: 1, composite: 0.37, zScores: { pts: 1.457, reb: 0.673, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 2.65, ftImpact: -0.973, to: -0.908 } },
          { name: "Bukky Oboye", min: 19, pts: 14, reb: 5, ast: 0, stl: 0, blk: 3, to: 0, tpm: 0, fgm: 7, fga: 8, ftm: 0, fta: 0, composite: 6.76, zScores: { pts: 0.894, reb: 0.673, ast: -0.749, stl: -0.708, blk: 3.827, tpm: -0.597, fgImpact: 2.581, ftImpact: 0, to: 0.838 } },
          { name: "Caleb Williams", min: 21, pts: 6, reb: 2, ast: 2, stl: 0, blk: 0, to: 2, tpm: 0, fgm: 3, fga: 6, ftm: 0, fta: 0, composite: -2.98, zScores: { pts: -0.231, reb: -0.383, ast: 0.215, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: 0.104, ftImpact: 0, to: -0.908 } },
          { name: "Kevin Overton", min: 6, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 2, ftm: 0, fta: 0, composite: -5.51, zScores: { pts: -1.074, reb: -1.088, ast: -0.749, stl: -0.708, blk: -0.478, tpm: -0.597, fgImpact: -0.779, ftImpact: 0, to: -0.035 } },
          { name: "Kolby King", min: 22, pts: 2, reb: 4, ast: 2, stl: 1, blk: 0, to: 1, tpm: 0, fgm: 0, fga: 4, ftm: 2, fta: 2, composite: -1.93, zScores: { pts: -0.793, reb: 0.321, ast: 0.215, stl: 0.318, blk: -0.478, tpm: -0.597, fgImpact: -1.558, ftImpact: 0.678, to: -0.035 } }
        ]
      }
    }
    ]
  },
    "2026-11-19": {
    games: [
      {
      id: "401920517",
      line: "Florida Gators @ West Virginia Mountaineers (1:08 - 2nd)",
      completed: false,
      statusText: "1:08 - 2nd",
      away: {
        abbr: "Fla", name: "Florida Gators", score: null,
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
      id: "401920519",
      line: "Notre Dame Fighting Irish @ Auburn Tigers (11/19 - 5:00 PM EST)",
      completed: false,
      statusText: "11/19 - 5:00 PM EST",
      away: {
        abbr: "ND", name: "Notre Dame Fighting Irish", score: null,
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
      id: "401918959",
      line: "NC State Wolfpack @ Murray State Racers (11/19 - 6:00 PM EST)",
      completed: false,
      statusText: "11/19 - 6:00 PM EST",
      away: {
        abbr: "NCSU", name: "NC State Wolfpack", score: null,
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
      id: "401916318",
      line: "UMBC Retrievers @ Ohio State Buckeyes (11/19 - 7:00 PM EST)",
      completed: false,
      statusText: "11/19 - 7:00 PM EST",
      away: {
        abbr: "UMBC", name: "UMBC Retrievers", score: null,
        players: [

        ]
      },
      home: {
        abbr: "OhSt", name: "Ohio State Buckeyes", score: null,
        players: [

        ]
      }
    },
      {
      id: "401911021",
      line: "Buffalo Bulls @ St. Bonaventure Bonnies (11/19 - 7:00 PM EST)",
      completed: false,
      statusText: "11/19 - 7:00 PM EST",
      away: {
        abbr: "BUF", name: "Buffalo Bulls", score: null,
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
      id: "401902280",
      line: "Northeastern Huskies @ Butler Bulldogs (11/19 - 7:00 PM EST)",
      completed: false,
      statusText: "11/19 - 7:00 PM EST",
      away: {
        abbr: "NE", name: "Northeastern Huskies", score: null,
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
      id: "401926814",
      line: "Charleston Cougars @ Drake Bulldogs (11/19 - 7:30 PM EST)",
      completed: false,
      statusText: "11/19 - 7:30 PM EST",
      away: {
        abbr: "COFC", name: "Charleston Cougars", score: null,
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
      id: "401919005",
      line: "Tulane Green Wave @ Louisiana Tech Bulldogs (11/19 - 7:30 PM EST)",
      completed: false,
      statusText: "11/19 - 7:30 PM EST",
      away: {
        abbr: "Tul", name: "Tulane Green Wave", score: null,
        players: [

        ]
      },
      home: {
        abbr: "LT", name: "Louisiana Tech Bulldogs", score: null,
        players: [

        ]
      }
    },
      {
      id: "401906867",
      line: "Southern Utah Thunderbirds @ Texas Longhorns (11/19 - 8:00 PM EST)",
      completed: false,
      statusText: "11/19 - 8:00 PM EST",
      away: {
        abbr: "SUU", name: "Southern Utah Thunderbirds", score: null,
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
      id: "401918950",
      line: "Stetson Hatters @ Louisville Cardinals (11/19 - 8:00 PM EST)",
      completed: false,
      statusText: "11/19 - 8:00 PM EST",
      away: {
        abbr: "STET", name: "Stetson Hatters", score: null,
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
      id: "401927375",
      line: "Eureka Red Devils @ Illinois State Redbirds (11/19 - 8:00 PM EST)",
      completed: false,
      statusText: "11/19 - 8:00 PM EST",
      away: {
        abbr: "ERKA", name: "Eureka Red Devils", score: null,
        players: [

        ]
      },
      home: {
        abbr: "IlSt", name: "Illinois State Redbirds", score: null,
        players: [

        ]
      }
    },
      {
      id: "401919050",
      line: "Texas A&M Aggies @ TCU Horned Frogs (11/19 - 8:00 PM EST)",
      completed: false,
      statusText: "11/19 - 8:00 PM EST",
      away: {
        abbr: "TAMU", name: "Texas A&M Aggies", score: null,
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
      id: "401920888",
      line: "Seton Hall Pirates @ Wisconsin Badgers (11/19 - 8:30 PM EST)",
      completed: false,
      statusText: "11/19 - 8:30 PM EST",
      away: {
        abbr: "Seton", name: "Seton Hall Pirates", score: null,
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
      id: "401920520",
      line: "Rutgers Scarlet Knights @ UNLV Rebels (11/19 - 8:30 PM EST)",
      completed: false,
      statusText: "11/19 - 8:30 PM EST",
      away: {
        abbr: "Rut", name: "Rutgers Scarlet Knights", score: null,
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
      id: "401930884",
      line: "Oregon State Beavers @ Oregon Ducks (11/19 - 9:00 PM EST)",
      completed: false,
      statusText: "11/19 - 9:00 PM EST",
      away: {
        abbr: "OrSt", name: "Oregon State Beavers", score: null,
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
      id: "401928354",
      line: "UC Santa Barbara Gauchos @ Pepperdine Waves (11/19 - 9:00 PM EST)",
      completed: false,
      statusText: "11/19 - 9:00 PM EST",
      away: {
        abbr: "UCSB", name: "UC Santa Barbara Gauchos", score: null,
        players: [

        ]
      },
      home: {
        abbr: "Pepp", name: "Pepperdine Waves", score: null,
        players: [

        ]
      }
    },
      {
      id: "401925941",
      line: "Utah Tech Trailblazers @ Washington Huskies (11/19 - 9:00 PM EST)",
      completed: false,
      statusText: "11/19 - 9:00 PM EST",
      away: {
        abbr: "UTU", name: "Utah Tech Trailblazers", score: null,
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
      id: "401911534",
      line: "UTEP Miners @ New Mexico State Aggies (11/19 - 9:00 PM EST)",
      completed: false,
      statusText: "11/19 - 9:00 PM EST",
      away: {
        abbr: "UTEP", name: "UTEP Miners", score: null,
        players: [

        ]
      },
      home: {
        abbr: "NMSU", name: "New Mexico State Aggies", score: null,
        players: [

        ]
      }
    },
      {
      id: "401920349",
      line: "Sacramento State Hornets @ Stanford Cardinal (11/19 - 10:00 PM EST)",
      completed: false,
      statusText: "11/19 - 10:00 PM EST",
      away: {
        abbr: "SAC", name: "Sacramento State Hornets", score: null,
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
      id: "401918056",
      line: "East Texas A&M Lions @ California Golden Bears (11/19 - 10:00 PM EST)",
      completed: false,
      statusText: "11/19 - 10:00 PM EST",
      away: {
        abbr: "ETAM", name: "East Texas A&M Lions", score: null,
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
      id: "401917536",
      line: "VCU Rams @ Santa Clara Broncos (11/19 - 10:30 PM EST)",
      completed: false,
      statusText: "11/19 - 10:30 PM EST",
      away: {
        abbr: "VCU", name: "VCU Rams", score: null,
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
      id: "401920518",
      line: "Houston Cougars @ Kansas Jayhawks (11/19 - 11:00 PM EST)",
      completed: false,
      statusText: "11/19 - 11:00 PM EST",
      away: {
        abbr: "Hou", name: "Houston Cougars", score: null,
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
      id: "401926773",
      line: "Tarleton State Texans @ USC Trojans (11/19 - 11:00 PM EST)",
      completed: false,
      statusText: "11/19 - 11:00 PM EST",
      away: {
        abbr: "TAR", name: "Tarleton State Texans", score: null,
        players: [

        ]
      },
      home: {
        abbr: "USC", name: "USC Trojans", score: null,
        players: [

        ]
      }
    }
    ]
  }
  }
};
