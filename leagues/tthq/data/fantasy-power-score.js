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
  "generatedAt": "2026-10-21T00:01:19.770Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 1 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 441.5,
        "reb": 161,
        "ast": 100.8,
        "stl": 28.35,
        "blk": 19.53,
        "tpm": 39.5,
        "to": 53.8,
        "fgPct": 48.4,
        "ftPct": 79.4
      },
      "rank": {
        "pts": 1,
        "reb": 1,
        "ast": 1,
        "stl": 1,
        "blk": 1,
        "tpm": 3,
        "fgPct": 1,
        "ftPct": 4,
        "to": 12
      },
      "includedCount": 27,
      "projCount": 27,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 2,
      "name": "Seagulls",
      "owner": "Möwe",
      "values": {
        "pts": 333.1,
        "reb": 129.2,
        "ast": 74.9,
        "stl": 23.62,
        "blk": 17.05,
        "tpm": 39.5,
        "to": 39.6,
        "fgPct": 47.3,
        "ftPct": 78.2
      },
      "rank": {
        "pts": 6,
        "reb": 4,
        "ast": 7,
        "stl": 5,
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
        "pts": 346.3,
        "reb": 115,
        "ast": 76.6,
        "stl": 24.18,
        "blk": 11.41,
        "tpm": 44.3,
        "to": 36.7,
        "fgPct": 47.3,
        "ftPct": 81.1
      },
      "rank": {
        "pts": 4,
        "reb": 9,
        "ast": 6,
        "stl": 4,
        "blk": 10,
        "tpm": 2,
        "fgPct": 7,
        "ftPct": 3,
        "to": 6
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
        "pts": 366.8,
        "reb": 120.1,
        "ast": 80.3,
        "stl": 21.54,
        "blk": 11.31,
        "tpm": 46.2,
        "to": 40,
        "fgPct": 46.4,
        "ftPct": 81.2
      },
      "rank": {
        "pts": 2,
        "reb": 7,
        "ast": 3,
        "stl": 11,
        "blk": 11,
        "tpm": 1,
        "fgPct": 10,
        "ftPct": 1,
        "to": 8
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
        "pts": 332.7,
        "reb": 120.6,
        "ast": 74.1,
        "stl": 21.63,
        "blk": 12.03,
        "tpm": 38.1,
        "to": 36.2,
        "fgPct": 47.8,
        "ftPct": 81.2
      },
      "rank": {
        "pts": 7,
        "reb": 6,
        "ast": 8,
        "stl": 10,
        "blk": 9,
        "tpm": 5,
        "fgPct": 5,
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
        "pts": 281.2,
        "reb": 116.3,
        "ast": 64.3,
        "stl": 21.84,
        "blk": 14.88,
        "tpm": 35.9,
        "to": 35.1,
        "fgPct": 46.4,
        "ftPct": 78.1
      },
      "rank": {
        "pts": 11,
        "reb": 8,
        "ast": 10,
        "stl": 9,
        "blk": 5,
        "tpm": 7,
        "fgPct": 11,
        "ftPct": 7,
        "to": 4
      },
      "includedCount": 27,
      "projCount": 25,
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
        "reb": 139.2,
        "ast": 79.9,
        "stl": 22.55,
        "blk": 18.2,
        "tpm": 32.2,
        "to": 41,
        "fgPct": 48.4,
        "ftPct": 76.9
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 4,
        "stl": 6,
        "blk": 3,
        "tpm": 10,
        "fgPct": 2,
        "ftPct": 10,
        "to": 9
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
        "pts": 330.1,
        "reb": 156.9,
        "ast": 79.5,
        "stl": 24.99,
        "blk": 18.81,
        "tpm": 33.2,
        "to": 42.1,
        "fgPct": 48.2,
        "ftPct": 74.6
      },
      "rank": {
        "pts": 8,
        "reb": 2,
        "ast": 5,
        "stl": 3,
        "blk": 2,
        "tpm": 9,
        "fgPct": 4,
        "ftPct": 12,
        "to": 10
      },
      "includedCount": 28,
      "projCount": 27,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 9,
      "name": "Cooking Show",
      "owner": "Stefan Estepham",
      "values": {
        "pts": 294,
        "reb": 110.5,
        "ast": 65.8,
        "stl": 22.14,
        "blk": 12.72,
        "tpm": 30.2,
        "to": 32.9,
        "fgPct": 48.4,
        "ftPct": 77.8
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 9,
        "stl": 7,
        "blk": 8,
        "tpm": 12,
        "fgPct": 3,
        "ftPct": 9,
        "to": 2
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
        "pts": 299.1,
        "reb": 113.2,
        "ast": 62.5,
        "stl": 22.13,
        "blk": 13.84,
        "tpm": 34.3,
        "to": 34.3,
        "fgPct": 46.6,
        "ftPct": 78.3
      },
      "rank": {
        "pts": 9,
        "reb": 10,
        "ast": 11,
        "stl": 8,
        "blk": 7,
        "tpm": 8,
        "fgPct": 9,
        "ftPct": 5,
        "to": 3
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
        "pts": 352.3,
        "reb": 126.2,
        "ast": 98.5,
        "stl": 27.58,
        "blk": 14.83,
        "tpm": 38,
        "to": 45.9,
        "fgPct": 47,
        "ftPct": 78
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 2,
        "blk": 6,
        "tpm": 6,
        "fgPct": 8,
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
        "pts": 270.2,
        "reb": 84.9,
        "ast": 62.2,
        "stl": 18.68,
        "blk": 9.28,
        "tpm": 31.2,
        "to": 32.3,
        "fgPct": 44.9,
        "ftPct": 75.1
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 11,
        "fgPct": 12,
        "ftPct": 11,
        "to": 1
      },
      "includedCount": 24,
      "projCount": 23,
      "skippedCount": 3,
      "skippedPlayers": [
        "Ben Simmons",
        "Adam Flagler",
        "Mario Hezonja"
      ]
    }
  ]
};
