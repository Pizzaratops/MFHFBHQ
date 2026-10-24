// ============================================================
//  FANTASY BOOTLEG POWER SCORE — automatisch generiert von
//  scripts/build-fantasy-power-score.js. NICHT MANUELL EDITIEREN.
//
//  9-Kategorien-Spinnennetz für die 12 TTHQ-Fantasy-Teams. Basis:
//  aktueller Kader (ROSTERS_LIVE) × Live Projections (Projection +
//  bisherige Saison, Fallback Vorjahr 2025/26) -- siehe Sync-Script.
//  FANTASY_POWER_SCORE.teams[i].values = Kader-Summe (PTS/REB/AST/
//  STL/BLK/3PM/TO) bzw. spielegewichteter Durchschnitt (FG%/FT%).
//  .rank = Liga-Rang (1-12) je Kategorie. Frontend berechnet daraus
//  den Radar-Plot-Wert per (N+1)-Rang-Trick.
// ============================================================
const FANTASY_POWER_SCORE = {
  "generatedAt": "2026-10-24T14:06:34.213Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 2 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
  "categories": [
    {
      "key": "pts",
      "label": "Points",
      "lowerIsBetter": false
    },
    {
      "key": "reb",
      "label": "Rebounds",
      "lowerIsBetter": false
    },
    {
      "key": "ast",
      "label": "Assists",
      "lowerIsBetter": false
    },
    {
      "key": "stl",
      "label": "Steals",
      "lowerIsBetter": false
    },
    {
      "key": "blk",
      "label": "Blocks",
      "lowerIsBetter": false
    },
    {
      "key": "tpm",
      "label": "3-Pointers",
      "lowerIsBetter": false
    },
    {
      "key": "fgPct",
      "label": "FG%",
      "lowerIsBetter": false
    },
    {
      "key": "ftPct",
      "label": "FT%",
      "lowerIsBetter": false
    },
    {
      "key": "to",
      "label": "Turnovers",
      "lowerIsBetter": true
    }
  ],
  "teams": [
    {
      "id": 1,
      "name": "Fighting Illini",
      "owner": "Kong Power",
      "values": {
        "pts": 436.7,
        "reb": 163.5,
        "ast": 100.1,
        "stl": 29.16,
        "blk": 19.65,
        "tpm": 39.7,
        "to": 55.8,
        "fgPct": 48,
        "ftPct": 78.7
      },
      "rank": {
        "pts": 1,
        "reb": 1,
        "ast": 1,
        "stl": 1,
        "blk": 1,
        "tpm": 3,
        "fgPct": 3,
        "ftPct": 4,
        "to": 12
      },
      "includedCount": 28,
      "projCount": 28,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 2,
      "name": "Seagulls",
      "owner": "Möwe",
      "values": {
        "pts": 335.2,
        "reb": 131.7,
        "ast": 74.2,
        "stl": 23.99,
        "blk": 17.51,
        "tpm": 38.9,
        "to": 41.3,
        "fgPct": 48,
        "ftPct": 78.3
      },
      "rank": {
        "pts": 5,
        "reb": 4,
        "ast": 7,
        "stl": 4,
        "blk": 4,
        "tpm": 4,
        "fgPct": 4,
        "ftPct": 6,
        "to": 9
      },
      "includedCount": 28,
      "projCount": 28,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 3,
      "name": "Neukoelln Hustlers",
      "owner": "Timo Xtremo",
      "values": {
        "pts": 337.5,
        "reb": 112.9,
        "ast": 75.6,
        "stl": 23.39,
        "blk": 11.44,
        "tpm": 41.7,
        "to": 36.6,
        "fgPct": 46.7,
        "ftPct": 80.8
      },
      "rank": {
        "pts": 4,
        "reb": 9,
        "ast": 6,
        "stl": 5,
        "blk": 10,
        "tpm": 2,
        "fgPct": 8,
        "ftPct": 2,
        "to": 5
      },
      "includedCount": 26,
      "projCount": 26,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 4,
      "name": "Leaveland Cavaliers",
      "owner": "Sven",
      "values": {
        "pts": 357.6,
        "reb": 120.6,
        "ast": 77.9,
        "stl": 21.4,
        "blk": 11.33,
        "tpm": 43.9,
        "to": 39.9,
        "fgPct": 46.3,
        "ftPct": 81
      },
      "rank": {
        "pts": 2,
        "reb": 6,
        "ast": 4,
        "stl": 11,
        "blk": 11,
        "tpm": 1,
        "fgPct": 11,
        "ftPct": 1,
        "to": 7
      },
      "includedCount": 26,
      "projCount": 25,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 5,
      "name": "Anadolu Ballers",
      "owner": "Murat Oguz",
      "values": {
        "pts": 321.4,
        "reb": 118.2,
        "ast": 71.8,
        "stl": 21.82,
        "blk": 11.92,
        "tpm": 37.5,
        "to": 37.3,
        "fgPct": 47.5,
        "ftPct": 80.7
      },
      "rank": {
        "pts": 7,
        "reb": 7,
        "ast": 8,
        "stl": 8,
        "blk": 9,
        "tpm": 5,
        "fgPct": 6,
        "ftPct": 3,
        "to": 6
      },
      "includedCount": 26,
      "projCount": 26,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 6,
      "name": "3-POINT MAFIA",
      "owner": "Patrick & Bennet",
      "values": {
        "pts": 272.3,
        "reb": 114.2,
        "ast": 59.9,
        "stl": 21.55,
        "blk": 14.65,
        "tpm": 35.4,
        "to": 34.9,
        "fgPct": 46.6,
        "ftPct": 77.3
      },
      "rank": {
        "pts": 12,
        "reb": 8,
        "ast": 12,
        "stl": 10,
        "blk": 6,
        "tpm": 6,
        "fgPct": 10,
        "ftPct": 10,
        "to": 4
      },
      "includedCount": 27,
      "projCount": 26,
      "skippedCount": 1,
      "skippedPlayers": [
        "Thomas Sorber"
      ]
    },
    {
      "id": 7,
      "name": "Always Money In The BananaStand",
      "owner": "KraftPaket Knödel",
      "values": {
        "pts": 331,
        "reb": 141,
        "ast": 78,
        "stl": 22.73,
        "blk": 18.58,
        "tpm": 31.9,
        "to": 41.9,
        "fgPct": 47.9,
        "ftPct": 76.8
      },
      "rank": {
        "pts": 6,
        "reb": 3,
        "ast": 3,
        "stl": 6,
        "blk": 2,
        "tpm": 10,
        "fgPct": 5,
        "ftPct": 11,
        "to": 10
      },
      "includedCount": 26,
      "projCount": 26,
      "skippedCount": 2,
      "skippedPlayers": [
        "Henri Veesaar",
        "Tacko Fall"
      ]
    },
    {
      "id": 8,
      "name": "Kawhi So Serious",
      "owner": "Harald Peterson",
      "values": {
        "pts": 314.3,
        "reb": 153.9,
        "ast": 77.9,
        "stl": 24.01,
        "blk": 18.24,
        "tpm": 30.8,
        "to": 40.6,
        "fgPct": 48.3,
        "ftPct": 75.4
      },
      "rank": {
        "pts": 8,
        "reb": 2,
        "ast": 5,
        "stl": 3,
        "blk": 3,
        "tpm": 11,
        "fgPct": 2,
        "ftPct": 12,
        "to": 8
      },
      "includedCount": 28,
      "projCount": 28,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 9,
      "name": "Cooking Show",
      "owner": "Stefan Estepham",
      "values": {
        "pts": 291.7,
        "reb": 109.7,
        "ast": 62.4,
        "stl": 22.62,
        "blk": 12.09,
        "tpm": 29.2,
        "to": 32.8,
        "fgPct": 48.7,
        "ftPct": 77.9
      },
      "rank": {
        "pts": 9,
        "reb": 10,
        "ast": 9,
        "stl": 7,
        "blk": 8,
        "tpm": 12,
        "fgPct": 1,
        "ftPct": 9,
        "to": 1
      },
      "includedCount": 27,
      "projCount": 27,
      "skippedCount": 1,
      "skippedPlayers": [
        "Ebuka Okorie"
      ]
    },
    {
      "id": 10,
      "name": "S-Town Grizzlies",
      "owner": "Jan Schattschneider",
      "values": {
        "pts": 284.3,
        "reb": 109.6,
        "ast": 61.8,
        "stl": 21.56,
        "blk": 13.51,
        "tpm": 32.4,
        "to": 34.3,
        "fgPct": 46.2,
        "ftPct": 78.1
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 10,
        "stl": 9,
        "blk": 7,
        "tpm": 8,
        "fgPct": 12,
        "ftPct": 7,
        "to": 2
      },
      "includedCount": 28,
      "projCount": 28,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 11,
      "name": "Double Dribble Trouble",
      "owner": "Nils",
      "values": {
        "pts": 343.4,
        "reb": 123,
        "ast": 91.3,
        "stl": 26.79,
        "blk": 14.88,
        "tpm": 35.2,
        "to": 43.9,
        "fgPct": 47.4,
        "ftPct": 78
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 2,
        "blk": 5,
        "tpm": 7,
        "fgPct": 7,
        "ftPct": 8,
        "to": 11
      },
      "includedCount": 28,
      "projCount": 27,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 12,
      "name": "Vancouver Curry-Wurst",
      "owner": "German Bratwurst",
      "values": {
        "pts": 274.4,
        "reb": 85.1,
        "ast": 61,
        "stl": 19.31,
        "blk": 9.38,
        "tpm": 32,
        "to": 34.8,
        "fgPct": 46.7,
        "ftPct": 78.7
      },
      "rank": {
        "pts": 11,
        "reb": 12,
        "ast": 11,
        "stl": 12,
        "blk": 12,
        "tpm": 9,
        "fgPct": 9,
        "ftPct": 5,
        "to": 3
      },
      "includedCount": 26,
      "projCount": 26,
      "skippedCount": 2,
      "skippedPlayers": [
        "Ben Simmons",
        "Adam Flagler"
      ]
    }
  ]
};
