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
  "generatedAt": "2026-10-28T18:01:32.128Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 4 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "reb": 165.9,
        "ast": 107.2,
        "stl": 31.34,
        "blk": 19.75,
        "tpm": 41.5,
        "to": 58.9,
        "fgPct": 47.9,
        "ftPct": 78.8
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
        "pts": 323.9,
        "reb": 127.7,
        "ast": 74.8,
        "stl": 24.14,
        "blk": 15.56,
        "tpm": 38.8,
        "to": 40.6,
        "fgPct": 47.2,
        "ftPct": 78.1
      },
      "rank": {
        "pts": 6,
        "reb": 4,
        "ast": 7,
        "stl": 4,
        "blk": 4,
        "tpm": 4,
        "fgPct": 6,
        "ftPct": 7,
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
        "pts": 347.4,
        "reb": 117.8,
        "ast": 77.9,
        "stl": 25.89,
        "blk": 12.34,
        "tpm": 44.9,
        "to": 38.7,
        "fgPct": 46.2,
        "ftPct": 80.2
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
        "pts": 353.5,
        "reb": 120.9,
        "ast": 79.9,
        "stl": 23.13,
        "blk": 11.23,
        "tpm": 44.3,
        "to": 41,
        "fgPct": 46.1,
        "ftPct": 81.1
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
        "pts": 321.1,
        "reb": 116.3,
        "ast": 72,
        "stl": 20.44,
        "blk": 11.54,
        "tpm": 37.1,
        "to": 36.6,
        "fgPct": 47.1,
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
        "pts": 277.9,
        "reb": 114,
        "ast": 59.6,
        "stl": 21.47,
        "blk": 14.7,
        "tpm": 35.5,
        "to": 34.6,
        "fgPct": 46.8,
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
        "reb": 143.2,
        "ast": 79.5,
        "stl": 22.61,
        "blk": 18.36,
        "tpm": 32.5,
        "to": 44.8,
        "fgPct": 47.7,
        "ftPct": 76.7
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 5,
        "stl": 7,
        "blk": 2,
        "tpm": 9,
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
        "pts": 321.7,
        "reb": 154.9,
        "ast": 79.7,
        "stl": 23.28,
        "blk": 18.24,
        "tpm": 32.5,
        "to": 41.6,
        "fgPct": 48.1,
        "ftPct": 75.4
      },
      "rank": {
        "pts": 7,
        "reb": 2,
        "ast": 4,
        "stl": 5,
        "blk": 3,
        "tpm": 10,
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
        "pts": 287.2,
        "reb": 107.9,
        "ast": 62.6,
        "stl": 21.87,
        "blk": 11.89,
        "tpm": 29.3,
        "to": 33.1,
        "fgPct": 48.5,
        "ftPct": 77.9
      },
      "rank": {
        "pts": 9,
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
        "pts": 286.4,
        "reb": 109.7,
        "ast": 63,
        "stl": 20.83,
        "blk": 13.48,
        "tpm": 33.2,
        "to": 35.4,
        "fgPct": 46.5,
        "ftPct": 78.8
      },
      "rank": {
        "pts": 10,
        "reb": 10,
        "ast": 9,
        "stl": 10,
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
        "pts": 341.3,
        "reb": 119,
        "ast": 88,
        "stl": 25.24,
        "blk": 14.38,
        "tpm": 36,
        "to": 43.5,
        "fgPct": 47.5,
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
        "pts": 270,
        "reb": 85.7,
        "ast": 59.5,
        "stl": 19.95,
        "blk": 9.45,
        "tpm": 31.8,
        "to": 35.5,
        "fgPct": 46,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 11,
        "fgPct": 12,
        "ftPct": 6,
        "to": 4
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
