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
  "generatedAt": "2026-11-19T05:01:24.813Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 16 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 443.6,
        "reb": 165.1,
        "ast": 105.9,
        "stl": 29.58,
        "blk": 19.77,
        "tpm": 40.7,
        "to": 56.1,
        "fgPct": 48.1,
        "ftPct": 78.8
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
        "pts": 323.3,
        "reb": 120.1,
        "ast": 75.9,
        "stl": 22.69,
        "blk": 14.88,
        "tpm": 40.7,
        "to": 40.6,
        "fgPct": 46.7,
        "ftPct": 78
      },
      "rank": {
        "pts": 6,
        "reb": 6,
        "ast": 6,
        "stl": 6,
        "blk": 6,
        "tpm": 4,
        "fgPct": 7,
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
        "pts": 347,
        "reb": 113.8,
        "ast": 78.6,
        "stl": 26.24,
        "blk": 12.81,
        "tpm": 45.3,
        "to": 38.5,
        "fgPct": 45.7,
        "ftPct": 78.9
      },
      "rank": {
        "pts": 4,
        "reb": 9,
        "ast": 5,
        "stl": 2,
        "blk": 9,
        "tpm": 2,
        "fgPct": 12,
        "ftPct": 3,
        "to": 6
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
        "pts": 376.5,
        "reb": 129.3,
        "ast": 85.3,
        "stl": 24.14,
        "blk": 13.71,
        "tpm": 47.7,
        "to": 44.4,
        "fgPct": 46.2,
        "ftPct": 81
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
        "pts": 304.6,
        "reb": 108.6,
        "ast": 66,
        "stl": 20.3,
        "blk": 11.18,
        "tpm": 34,
        "to": 35.5,
        "fgPct": 46.8,
        "ftPct": 81.4
      },
      "rank": {
        "pts": 8,
        "reb": 10,
        "ast": 9,
        "stl": 10,
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
        "pts": 278.6,
        "reb": 114.9,
        "ast": 58.9,
        "stl": 20.28,
        "blk": 15.41,
        "tpm": 35.3,
        "to": 34.7,
        "fgPct": 46.6,
        "ftPct": 76.2
      },
      "rank": {
        "pts": 11,
        "reb": 8,
        "ast": 11,
        "stl": 11,
        "blk": 4,
        "tpm": 6,
        "fgPct": 9,
        "ftPct": 11,
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
        "pts": 334.8,
        "reb": 144.8,
        "ast": 80.5,
        "stl": 23.1,
        "blk": 18.98,
        "tpm": 33.5,
        "to": 43.6,
        "fgPct": 47.7,
        "ftPct": 76.2
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 4,
        "stl": 5,
        "blk": 2,
        "tpm": 8,
        "fgPct": 4,
        "ftPct": 12,
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
        "pts": 319.6,
        "reb": 147.1,
        "ast": 74.8,
        "stl": 22.61,
        "blk": 17.06,
        "tpm": 33.1,
        "to": 41.1,
        "fgPct": 48,
        "ftPct": 76.3
      },
      "rank": {
        "pts": 7,
        "reb": 2,
        "ast": 7,
        "stl": 7,
        "blk": 3,
        "tpm": 9,
        "fgPct": 2,
        "ftPct": 10,
        "to": 8
      },
      "includedCount": 27,
      "projCount": 27,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 9,
      "name": "Cooking Show",
      "owner": "Stefan Estepham",
      "values": {
        "pts": 286.1,
        "reb": 106.7,
        "ast": 62.3,
        "stl": 22.14,
        "blk": 11.93,
        "tpm": 29.8,
        "to": 33.6,
        "fgPct": 47.8,
        "ftPct": 77.8
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 10,
        "stl": 8,
        "blk": 10,
        "tpm": 12,
        "fgPct": 3,
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
        "pts": 295,
        "reb": 118.2,
        "ast": 68.1,
        "stl": 21.16,
        "blk": 15.39,
        "tpm": 32.8,
        "to": 38.1,
        "fgPct": 47.1,
        "ftPct": 77.6
      },
      "rank": {
        "pts": 9,
        "reb": 7,
        "ast": 8,
        "stl": 9,
        "blk": 5,
        "tpm": 10,
        "fgPct": 5,
        "ftPct": 9,
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
        "pts": 353.2,
        "reb": 121.4,
        "ast": 89.4,
        "stl": 25.02,
        "blk": 14.71,
        "tpm": 39.2,
        "to": 45.4,
        "fgPct": 46.7,
        "ftPct": 78.7
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 3,
        "blk": 7,
        "tpm": 5,
        "fgPct": 8,
        "ftPct": 5,
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
        "pts": 259.9,
        "reb": 84.8,
        "ast": 58.8,
        "stl": 18.11,
        "blk": 9.66,
        "tpm": 30.5,
        "to": 34.8,
        "fgPct": 46.2,
        "ftPct": 78.5
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 11,
        "fgPct": 11,
        "ftPct": 6,
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
