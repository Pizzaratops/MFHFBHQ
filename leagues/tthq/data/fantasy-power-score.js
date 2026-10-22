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
  "generatedAt": "2026-10-22T14:03:04.171Z",
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
        "pts": 446.3,
        "reb": 165.3,
        "ast": 100.1,
        "stl": 29.02,
        "blk": 19.81,
        "tpm": 40,
        "to": 55.2,
        "fgPct": 48.3,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 1,
        "reb": 1,
        "ast": 1,
        "stl": 1,
        "blk": 1,
        "tpm": 3,
        "fgPct": 2,
        "ftPct": 6,
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
        "pts": 334.7,
        "reb": 131.1,
        "ast": 74.6,
        "stl": 23.97,
        "blk": 16.85,
        "tpm": 39.4,
        "to": 40.4,
        "fgPct": 47.6,
        "ftPct": 78.8
      },
      "rank": {
        "pts": 5,
        "reb": 4,
        "ast": 7,
        "stl": 4,
        "blk": 4,
        "tpm": 4,
        "fgPct": 5,
        "ftPct": 4,
        "to": 8
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
        "pts": 340.4,
        "reb": 113.2,
        "ast": 76.7,
        "stl": 23.18,
        "blk": 11.58,
        "tpm": 42.2,
        "to": 36.3,
        "fgPct": 46.8,
        "ftPct": 80.4
      },
      "rank": {
        "pts": 4,
        "reb": 9,
        "ast": 6,
        "stl": 5,
        "blk": 10,
        "tpm": 2,
        "fgPct": 8,
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
        "pts": 365.4,
        "reb": 119.8,
        "ast": 79.3,
        "stl": 21.07,
        "blk": 11.38,
        "tpm": 45,
        "to": 39.6,
        "fgPct": 46.5,
        "ftPct": 81.2
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
        "pts": 326,
        "reb": 119.8,
        "ast": 73.7,
        "stl": 21.93,
        "blk": 11.93,
        "tpm": 37.7,
        "to": 36.9,
        "fgPct": 47.6,
        "ftPct": 80.9
      },
      "rank": {
        "pts": 7,
        "reb": 7,
        "ast": 8,
        "stl": 9,
        "blk": 9,
        "tpm": 5,
        "fgPct": 6,
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
        "pts": 276.1,
        "reb": 114.2,
        "ast": 61.5,
        "stl": 21.69,
        "blk": 14.81,
        "tpm": 35.5,
        "to": 34.3,
        "fgPct": 46.8,
        "ftPct": 77.4
      },
      "rank": {
        "pts": 11,
        "reb": 8,
        "ast": 11,
        "stl": 10,
        "blk": 6,
        "tpm": 7,
        "fgPct": 9,
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
        "pts": 331.6,
        "reb": 141.5,
        "ast": 78.6,
        "stl": 22.97,
        "blk": 18.42,
        "tpm": 31.7,
        "to": 41.2,
        "fgPct": 48,
        "ftPct": 77
      },
      "rank": {
        "pts": 6,
        "reb": 3,
        "ast": 5,
        "stl": 6,
        "blk": 3,
        "tpm": 11,
        "fgPct": 4,
        "ftPct": 11,
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
        "pts": 324.1,
        "reb": 158.3,
        "ast": 79.4,
        "stl": 25.04,
        "blk": 18.63,
        "tpm": 32.3,
        "to": 41.3,
        "fgPct": 48.2,
        "ftPct": 75.1
      },
      "rank": {
        "pts": 8,
        "reb": 2,
        "ast": 3,
        "stl": 3,
        "blk": 2,
        "tpm": 9,
        "fgPct": 3,
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
        "pts": 292.8,
        "reb": 108.9,
        "ast": 63.6,
        "stl": 22.14,
        "blk": 12.03,
        "tpm": 29.9,
        "to": 32.6,
        "fgPct": 48.7,
        "ftPct": 78.1
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 9,
        "stl": 7,
        "blk": 8,
        "tpm": 12,
        "fgPct": 1,
        "ftPct": 8,
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
        "pts": 293.6,
        "reb": 111.4,
        "ast": 61.2,
        "stl": 21.96,
        "blk": 13.82,
        "tpm": 33.8,
        "to": 33.8,
        "fgPct": 46.3,
        "ftPct": 78.2
      },
      "rank": {
        "pts": 9,
        "reb": 10,
        "ast": 12,
        "stl": 8,
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
        "pts": 345,
        "reb": 122.7,
        "ast": 92.1,
        "stl": 26.47,
        "blk": 14.83,
        "tpm": 36.3,
        "to": 44.1,
        "fgPct": 47.5,
        "ftPct": 77.8
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 2,
        "blk": 5,
        "tpm": 6,
        "fgPct": 7,
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
        "pts": 274.9,
        "reb": 85.3,
        "ast": 61.9,
        "stl": 19.45,
        "blk": 9.11,
        "tpm": 31.9,
        "to": 34.1,
        "fgPct": 46.7,
        "ftPct": 78.8
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 10,
        "stl": 12,
        "blk": 12,
        "tpm": 10,
        "fgPct": 10,
        "ftPct": 5,
        "to": 3
      },
      "includedCount": 25,
      "projCount": 25,
      "skippedCount": 3,
      "skippedPlayers": [
        "Ben Simmons",
        "Adam Flagler",
        "Mario Hezonja"
      ]
    }
  ]
};
