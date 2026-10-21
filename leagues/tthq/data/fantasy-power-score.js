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
  "generatedAt": "2026-10-21T10:03:14.320Z",
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
        "pts": 441.2,
        "reb": 160.7,
        "ast": 99.8,
        "stl": 28.65,
        "blk": 20.18,
        "tpm": 38.7,
        "to": 53.6,
        "fgPct": 48.4,
        "ftPct": 79.3
      },
      "rank": {
        "pts": 1,
        "reb": 1,
        "ast": 1,
        "stl": 1,
        "blk": 1,
        "tpm": 4,
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
        "pts": 332,
        "reb": 129.8,
        "ast": 75.7,
        "stl": 23.58,
        "blk": 17.24,
        "tpm": 39.5,
        "to": 39.4,
        "fgPct": 47.3,
        "ftPct": 78.2
      },
      "rank": {
        "pts": 6,
        "reb": 4,
        "ast": 6,
        "stl": 5,
        "blk": 4,
        "tpm": 3,
        "fgPct": 5,
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
        "pts": 344.8,
        "reb": 115.9,
        "ast": 76.3,
        "stl": 25.02,
        "blk": 12.88,
        "tpm": 44.1,
        "to": 36.4,
        "fgPct": 47.3,
        "ftPct": 80.5
      },
      "rank": {
        "pts": 4,
        "reb": 9,
        "ast": 5,
        "stl": 3,
        "blk": 8,
        "tpm": 2,
        "fgPct": 6,
        "ftPct": 3,
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
        "pts": 367.7,
        "reb": 119.9,
        "ast": 79.7,
        "stl": 21.47,
        "blk": 11.56,
        "tpm": 46.4,
        "to": 40.1,
        "fgPct": 46.4,
        "ftPct": 81.1
      },
      "rank": {
        "pts": 2,
        "reb": 7,
        "ast": 3,
        "stl": 10,
        "blk": 11,
        "tpm": 1,
        "fgPct": 9,
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
        "pts": 326,
        "reb": 121.6,
        "ast": 75.3,
        "stl": 21.49,
        "blk": 12.34,
        "tpm": 37.8,
        "to": 36.6,
        "fgPct": 46.9,
        "ftPct": 81.1
      },
      "rank": {
        "pts": 8,
        "reb": 6,
        "ast": 7,
        "stl": 8,
        "blk": 10,
        "tpm": 5,
        "fgPct": 7,
        "ftPct": 2,
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
        "pts": 275.6,
        "reb": 116.7,
        "ast": 61.2,
        "stl": 22.42,
        "blk": 15.6,
        "tpm": 35.5,
        "to": 34.9,
        "fgPct": 45.9,
        "ftPct": 77.9
      },
      "rank": {
        "pts": 12,
        "reb": 8,
        "ast": 11,
        "stl": 6,
        "blk": 5,
        "tpm": 7,
        "fgPct": 11,
        "ftPct": 8,
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
        "pts": 332.6,
        "reb": 139.7,
        "ast": 75.1,
        "stl": 21.48,
        "blk": 18.56,
        "tpm": 32.9,
        "to": 41.1,
        "fgPct": 47.9,
        "ftPct": 76.8
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 8,
        "stl": 9,
        "blk": 3,
        "tpm": 10,
        "fgPct": 3,
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
        "pts": 328.8,
        "reb": 155.9,
        "ast": 79,
        "stl": 24.34,
        "blk": 19.23,
        "tpm": 32.6,
        "to": 41.9,
        "fgPct": 47.9,
        "ftPct": 75.6
      },
      "rank": {
        "pts": 7,
        "reb": 2,
        "ast": 4,
        "stl": 4,
        "blk": 2,
        "tpm": 11,
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
        "pts": 289.7,
        "reb": 108.4,
        "ast": 64.4,
        "stl": 21.32,
        "blk": 12.47,
        "tpm": 29.3,
        "to": 32.4,
        "fgPct": 48.2,
        "ftPct": 78
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 9,
        "stl": 11,
        "blk": 9,
        "tpm": 12,
        "fgPct": 2,
        "ftPct": 7,
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
        "pts": 294.5,
        "reb": 112,
        "ast": 60.7,
        "stl": 21.77,
        "blk": 13.79,
        "tpm": 34.8,
        "to": 33.7,
        "fgPct": 46,
        "ftPct": 78.3
      },
      "rank": {
        "pts": 9,
        "reb": 10,
        "ast": 12,
        "stl": 7,
        "blk": 7,
        "tpm": 8,
        "fgPct": 10,
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
        "pts": 350.2,
        "reb": 128,
        "ast": 98.6,
        "stl": 27.26,
        "blk": 15.29,
        "tpm": 37.5,
        "to": 44.1,
        "fgPct": 46.6,
        "ftPct": 77.4
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 2,
        "blk": 6,
        "tpm": 6,
        "fgPct": 8,
        "ftPct": 9,
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
        "pts": 277.2,
        "reb": 87.4,
        "ast": 61.9,
        "stl": 18.91,
        "blk": 9.73,
        "tpm": 33,
        "to": 32.6,
        "fgPct": 44.9,
        "ftPct": 75.7
      },
      "rank": {
        "pts": 11,
        "reb": 12,
        "ast": 10,
        "stl": 12,
        "blk": 12,
        "tpm": 9,
        "fgPct": 12,
        "ftPct": 11,
        "to": 2
      },
      "includedCount": 25,
      "projCount": 24,
      "skippedCount": 3,
      "skippedPlayers": [
        "Ben Simmons",
        "Adam Flagler",
        "Mario Hezonja"
      ]
    }
  ]
};
