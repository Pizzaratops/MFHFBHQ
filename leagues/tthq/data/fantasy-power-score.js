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
  "generatedAt": "2026-10-29T02:01:17.993Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 5 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 453.1,
        "reb": 166.1,
        "ast": 107.4,
        "stl": 30.99,
        "blk": 19.66,
        "tpm": 42,
        "to": 59.1,
        "fgPct": 47.9,
        "ftPct": 78.9
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
      "projCount": 27,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 2,
      "name": "Seagulls",
      "owner": "Möwe",
      "values": {
        "pts": 327.7,
        "reb": 127.7,
        "ast": 75.3,
        "stl": 24.19,
        "blk": 15.51,
        "tpm": 39.5,
        "to": 40.4,
        "fgPct": 47.4,
        "ftPct": 78.7
      },
      "rank": {
        "pts": 6,
        "reb": 4,
        "ast": 7,
        "stl": 4,
        "blk": 4,
        "tpm": 4,
        "fgPct": 6,
        "ftPct": 6,
        "to": 7
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
        "pts": 346.1,
        "reb": 117.9,
        "ast": 79,
        "stl": 25.59,
        "blk": 12.41,
        "tpm": 44.5,
        "to": 39,
        "fgPct": 46.1,
        "ftPct": 80.3
      },
      "rank": {
        "pts": 3,
        "reb": 7,
        "ast": 6,
        "stl": 2,
        "blk": 8,
        "tpm": 1,
        "fgPct": 10,
        "ftPct": 3,
        "to": 6
      },
      "includedCount": 28,
      "projCount": 28,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 4,
      "name": "Leaveland Cavaliers",
      "owner": "Sven",
      "values": {
        "pts": 353.7,
        "reb": 120.9,
        "ast": 79.6,
        "stl": 23.37,
        "blk": 11.26,
        "tpm": 44.3,
        "to": 41,
        "fgPct": 46,
        "ftPct": 81.2
      },
      "rank": {
        "pts": 2,
        "reb": 5,
        "ast": 3,
        "stl": 6,
        "blk": 11,
        "tpm": 2,
        "fgPct": 11,
        "ftPct": 1,
        "to": 8
      },
      "includedCount": 26,
      "projCount": 26,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 5,
      "name": "Anadolu Ballers",
      "owner": "Murat Oguz",
      "values": {
        "pts": 322.3,
        "reb": 116.6,
        "ast": 71.6,
        "stl": 20.33,
        "blk": 11.68,
        "tpm": 36.9,
        "to": 37.1,
        "fgPct": 47.3,
        "ftPct": 81
      },
      "rank": {
        "pts": 8,
        "reb": 8,
        "ast": 8,
        "stl": 11,
        "blk": 10,
        "tpm": 5,
        "fgPct": 7,
        "ftPct": 2,
        "to": 5
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
        "pts": 277.2,
        "reb": 114.8,
        "ast": 60.2,
        "stl": 21.35,
        "blk": 14.69,
        "tpm": 35.3,
        "to": 34.8,
        "fgPct": 46.7,
        "ftPct": 77
      },
      "rank": {
        "pts": 11,
        "reb": 9,
        "ast": 11,
        "stl": 9,
        "blk": 5,
        "tpm": 7,
        "fgPct": 8,
        "ftPct": 10,
        "to": 2
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
        "pts": 334.9,
        "reb": 142.9,
        "ast": 79.6,
        "stl": 22.58,
        "blk": 18.4,
        "tpm": 32.6,
        "to": 44.5,
        "fgPct": 47.7,
        "ftPct": 76.8
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 4,
        "stl": 7,
        "blk": 2,
        "tpm": 10,
        "fgPct": 4,
        "ftPct": 11,
        "to": 11
      },
      "includedCount": 27,
      "projCount": 27,
      "skippedCount": 1,
      "skippedPlayers": [
        "Henri Veesaar"
      ]
    },
    {
      "id": 8,
      "name": "Kawhi So Serious",
      "owner": "Harald Peterson",
      "values": {
        "pts": 323.4,
        "reb": 155,
        "ast": 79.4,
        "stl": 23.48,
        "blk": 18.21,
        "tpm": 32.7,
        "to": 41.7,
        "fgPct": 48.1,
        "ftPct": 75.4
      },
      "rank": {
        "pts": 7,
        "reb": 2,
        "ast": 5,
        "stl": 5,
        "blk": 3,
        "tpm": 9,
        "fgPct": 2,
        "ftPct": 12,
        "to": 9
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
        "pts": 285.1,
        "reb": 107.6,
        "ast": 62.7,
        "stl": 21.84,
        "blk": 11.86,
        "tpm": 29.1,
        "to": 33.4,
        "fgPct": 48.5,
        "ftPct": 77.9
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 10,
        "stl": 8,
        "blk": 9,
        "tpm": 12,
        "fgPct": 1,
        "ftPct": 8,
        "to": 1
      },
      "includedCount": 28,
      "projCount": 28,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 10,
      "name": "S-Town Grizzlies",
      "owner": "Jan Schattschneider",
      "values": {
        "pts": 286.7,
        "reb": 109.5,
        "ast": 63.7,
        "stl": 21,
        "blk": 13.49,
        "tpm": 33.2,
        "to": 35.3,
        "fgPct": 46.5,
        "ftPct": 78.8
      },
      "rank": {
        "pts": 9,
        "reb": 10,
        "ast": 9,
        "stl": 10,
        "blk": 7,
        "tpm": 8,
        "fgPct": 9,
        "ftPct": 5,
        "to": 4
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
        "pts": 344.2,
        "reb": 119.7,
        "ast": 87.9,
        "stl": 25.56,
        "blk": 14.44,
        "tpm": 36.7,
        "to": 43.1,
        "fgPct": 47.6,
        "ftPct": 77.7
      },
      "rank": {
        "pts": 4,
        "reb": 6,
        "ast": 2,
        "stl": 3,
        "blk": 6,
        "tpm": 6,
        "fgPct": 5,
        "ftPct": 9,
        "to": 10
      },
      "includedCount": 28,
      "projCount": 28,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 12,
      "name": "Vancouver Curry-Wurst",
      "owner": "German Bratwurst",
      "values": {
        "pts": 267.5,
        "reb": 84.7,
        "ast": 59.2,
        "stl": 19.76,
        "blk": 9.31,
        "tpm": 31.5,
        "to": 35.2,
        "fgPct": 45.9,
        "ftPct": 78.7
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 11,
        "fgPct": 12,
        "ftPct": 7,
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
