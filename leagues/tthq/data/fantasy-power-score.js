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
  "generatedAt": "2026-10-24T03:01:33.248Z",
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
        "pts": 434.6,
        "reb": 163.2,
        "ast": 99.9,
        "stl": 29.18,
        "blk": 19.67,
        "tpm": 39.1,
        "to": 55.5,
        "fgPct": 48,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 1,
        "reb": 1,
        "ast": 1,
        "stl": 1,
        "blk": 1,
        "tpm": 3,
        "fgPct": 3,
        "ftPct": 5,
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
        "pts": 336.8,
        "reb": 131.8,
        "ast": 74.6,
        "stl": 23.98,
        "blk": 17.4,
        "tpm": 39,
        "to": 41.1,
        "fgPct": 47.9,
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
        "pts": 337.6,
        "reb": 113.3,
        "ast": 75.8,
        "stl": 23.06,
        "blk": 11.48,
        "tpm": 41.9,
        "to": 36.2,
        "fgPct": 46.6,
        "ftPct": 80.5
      },
      "rank": {
        "pts": 4,
        "reb": 9,
        "ast": 6,
        "stl": 5,
        "blk": 10,
        "tpm": 2,
        "fgPct": 9,
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
        "pts": 359.2,
        "reb": 121.2,
        "ast": 77.7,
        "stl": 21.33,
        "blk": 11.33,
        "tpm": 44.2,
        "to": 39.9,
        "fgPct": 46.4,
        "ftPct": 81
      },
      "rank": {
        "pts": 2,
        "reb": 6,
        "ast": 5,
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
        "pts": 320.6,
        "reb": 118.1,
        "ast": 71.3,
        "stl": 21.79,
        "blk": 11.91,
        "tpm": 37.4,
        "to": 36.7,
        "fgPct": 47.3,
        "ftPct": 80.8
      },
      "rank": {
        "pts": 7,
        "reb": 7,
        "ast": 8,
        "stl": 8,
        "blk": 9,
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
        "pts": 275.3,
        "reb": 114.4,
        "ast": 60.2,
        "stl": 21.59,
        "blk": 14.78,
        "tpm": 35.5,
        "to": 34.7,
        "fgPct": 46.6,
        "ftPct": 77.5
      },
      "rank": {
        "pts": 12,
        "reb": 8,
        "ast": 12,
        "stl": 10,
        "blk": 5,
        "tpm": 7,
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
        "pts": 327,
        "reb": 141.2,
        "ast": 78.4,
        "stl": 22.83,
        "blk": 18.56,
        "tpm": 31.5,
        "to": 41.8,
        "fgPct": 47.9,
        "ftPct": 76.8
      },
      "rank": {
        "pts": 6,
        "reb": 3,
        "ast": 4,
        "stl": 6,
        "blk": 3,
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
        "pts": 318.8,
        "reb": 158.1,
        "ast": 79.6,
        "stl": 24.96,
        "blk": 18.72,
        "tpm": 31.5,
        "to": 41.3,
        "fgPct": 48.1,
        "ftPct": 75.1
      },
      "rank": {
        "pts": 8,
        "reb": 2,
        "ast": 3,
        "stl": 3,
        "blk": 2,
        "tpm": 11,
        "fgPct": 2,
        "ftPct": 12,
        "to": 9
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
        "pts": 291.7,
        "reb": 109.8,
        "ast": 63,
        "stl": 22.38,
        "blk": 12.13,
        "tpm": 29.5,
        "to": 32.3,
        "fgPct": 48.7,
        "ftPct": 77.9
      },
      "rank": {
        "pts": 9,
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
        "pts": 289.1,
        "reb": 110,
        "ast": 62.4,
        "stl": 21.67,
        "blk": 13.61,
        "tpm": 33,
        "to": 34.5,
        "fgPct": 46.3,
        "ftPct": 78.1
      },
      "rank": {
        "pts": 10,
        "reb": 10,
        "ast": 10,
        "stl": 9,
        "blk": 7,
        "tpm": 8,
        "fgPct": 12,
        "ftPct": 7,
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
        "pts": 342.1,
        "reb": 123.2,
        "ast": 91.1,
        "stl": 26.66,
        "blk": 14.75,
        "tpm": 35.6,
        "to": 44.3,
        "fgPct": 47.4,
        "ftPct": 77.8
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 2,
        "blk": 6,
        "tpm": 6,
        "fgPct": 6,
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
        "pts": 277.1,
        "reb": 85.7,
        "ast": 61.6,
        "stl": 19.32,
        "blk": 9.31,
        "tpm": 32.3,
        "to": 34.2,
        "fgPct": 46.7,
        "ftPct": 78.8
      },
      "rank": {
        "pts": 11,
        "reb": 12,
        "ast": 11,
        "stl": 12,
        "blk": 12,
        "tpm": 9,
        "fgPct": 8,
        "ftPct": 4,
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
