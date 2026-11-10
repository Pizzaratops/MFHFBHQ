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
  "generatedAt": "2026-11-10T11:01:21.146Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 12 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 450,
        "reb": 165.3,
        "ast": 109.1,
        "stl": 30.22,
        "blk": 20.3,
        "tpm": 40.8,
        "to": 57.5,
        "fgPct": 48.1,
        "ftPct": 79.2
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
        "pts": 311.9,
        "reb": 118.6,
        "ast": 72.8,
        "stl": 21.52,
        "blk": 14.15,
        "tpm": 37.8,
        "to": 39.1,
        "fgPct": 47.2,
        "ftPct": 78.7
      },
      "rank": {
        "pts": 7,
        "reb": 6,
        "ast": 7,
        "stl": 8,
        "blk": 7,
        "tpm": 5,
        "fgPct": 5,
        "ftPct": 6,
        "to": 6
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
        "pts": 347,
        "reb": 113.9,
        "ast": 79.5,
        "stl": 26.57,
        "blk": 12.66,
        "tpm": 44.8,
        "to": 39.8,
        "fgPct": 45.8,
        "ftPct": 78.9
      },
      "rank": {
        "pts": 4,
        "reb": 8,
        "ast": 5,
        "stl": 2,
        "blk": 9,
        "tpm": 2,
        "fgPct": 12,
        "ftPct": 5,
        "to": 7
      },
      "includedCount": 28,
      "projCount": 27,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 4,
      "name": "Leaveland Cavaliers",
      "owner": "Sven",
      "values": {
        "pts": 374.4,
        "reb": 128.2,
        "ast": 84.1,
        "stl": 23.96,
        "blk": 12.74,
        "tpm": 47.9,
        "to": 44.6,
        "fgPct": 46.1,
        "ftPct": 81.2
      },
      "rank": {
        "pts": 2,
        "reb": 4,
        "ast": 3,
        "stl": 4,
        "blk": 8,
        "tpm": 1,
        "fgPct": 10,
        "ftPct": 2,
        "to": 10
      },
      "includedCount": 28,
      "projCount": 28,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 5,
      "name": "Anadolu Ballers",
      "owner": "Murat Oguz",
      "values": {
        "pts": 297.8,
        "reb": 107.1,
        "ast": 67.2,
        "stl": 19.92,
        "blk": 10.87,
        "tpm": 33.5,
        "to": 36.1,
        "fgPct": 47,
        "ftPct": 82
      },
      "rank": {
        "pts": 8,
        "reb": 10,
        "ast": 9,
        "stl": 11,
        "blk": 11,
        "tpm": 7,
        "fgPct": 6,
        "ftPct": 1,
        "to": 4
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
        "pts": 276.3,
        "reb": 112.9,
        "ast": 58.6,
        "stl": 20.46,
        "blk": 14.9,
        "tpm": 34.5,
        "to": 35.5,
        "fgPct": 46.6,
        "ftPct": 76.4
      },
      "rank": {
        "pts": 11,
        "reb": 9,
        "ast": 12,
        "stl": 10,
        "blk": 5,
        "tpm": 6,
        "fgPct": 9,
        "ftPct": 10,
        "to": 3
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
        "pts": 332.6,
        "reb": 147.1,
        "ast": 81.9,
        "stl": 23.44,
        "blk": 19.18,
        "tpm": 32.3,
        "to": 44.2,
        "fgPct": 47.7,
        "ftPct": 76.1
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 4,
        "stl": 5,
        "blk": 2,
        "tpm": 9,
        "fgPct": 4,
        "ftPct": 11,
        "to": 9
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
        "pts": 323.7,
        "reb": 153.5,
        "ast": 77.5,
        "stl": 23.14,
        "blk": 17.56,
        "tpm": 32.8,
        "to": 42,
        "fgPct": 48,
        "ftPct": 76.1
      },
      "rank": {
        "pts": 6,
        "reb": 2,
        "ast": 6,
        "stl": 6,
        "blk": 3,
        "tpm": 8,
        "fgPct": 3,
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
        "pts": 284.9,
        "reb": 106.4,
        "ast": 62.3,
        "stl": 22.5,
        "blk": 11.66,
        "tpm": 29.4,
        "to": 33.3,
        "fgPct": 48.1,
        "ftPct": 77.9
      },
      "rank": {
        "pts": 9,
        "reb": 11,
        "ast": 10,
        "stl": 7,
        "blk": 10,
        "tpm": 11,
        "fgPct": 2,
        "ftPct": 9,
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
        "pts": 283.4,
        "reb": 116,
        "ast": 67.7,
        "stl": 21.44,
        "blk": 15.07,
        "tpm": 30.1,
        "to": 38.7,
        "fgPct": 47,
        "ftPct": 78.2
      },
      "rank": {
        "pts": 10,
        "reb": 7,
        "ast": 8,
        "stl": 9,
        "blk": 4,
        "tpm": 10,
        "fgPct": 7,
        "ftPct": 8,
        "to": 5
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
        "pts": 360.9,
        "reb": 123.6,
        "ast": 91.4,
        "stl": 25.26,
        "blk": 14.54,
        "tpm": 39.3,
        "to": 47.1,
        "fgPct": 46.9,
        "ftPct": 79.6
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 3,
        "blk": 6,
        "tpm": 4,
        "fgPct": 8,
        "ftPct": 3,
        "to": 11
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
        "pts": 252.6,
        "reb": 84.7,
        "ast": 59.2,
        "stl": 17.28,
        "blk": 9.04,
        "tpm": 29.3,
        "to": 35.2,
        "fgPct": 46,
        "ftPct": 78.4
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 11,
        "stl": 12,
        "blk": 12,
        "tpm": 12,
        "fgPct": 11,
        "ftPct": 7,
        "to": 2
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
