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
  "generatedAt": "2026-11-24T19:28:24.593Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 19 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 444.5,
        "reb": 166.6,
        "ast": 109.6,
        "stl": 29.61,
        "blk": 19.65,
        "tpm": 40.4,
        "to": 56.7,
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
        "ftPct": 6,
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
        "pts": 321.2,
        "reb": 120.3,
        "ast": 74.8,
        "stl": 23.16,
        "blk": 14.82,
        "tpm": 39.3,
        "to": 40.6,
        "fgPct": 47,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 6,
        "reb": 6,
        "ast": 7,
        "stl": 6,
        "blk": 6,
        "tpm": 4,
        "fgPct": 5,
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
        "pts": 346.7,
        "reb": 112.7,
        "ast": 79.7,
        "stl": 26.37,
        "blk": 12.38,
        "tpm": 45.7,
        "to": 39.2,
        "fgPct": 45.5,
        "ftPct": 79
      },
      "rank": {
        "pts": 4,
        "reb": 9,
        "ast": 5,
        "stl": 2,
        "blk": 9,
        "tpm": 2,
        "fgPct": 12,
        "ftPct": 5,
        "to": 5
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
        "pts": 383.4,
        "reb": 131.7,
        "ast": 87.8,
        "stl": 24,
        "blk": 13.54,
        "tpm": 48.2,
        "to": 45.3,
        "fgPct": 46.3,
        "ftPct": 81.4
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
        "pts": 303,
        "reb": 108.3,
        "ast": 67,
        "stl": 19.51,
        "blk": 11.11,
        "tpm": 34.2,
        "to": 35.5,
        "fgPct": 46.6,
        "ftPct": 81.9
      },
      "rank": {
        "pts": 8,
        "reb": 10,
        "ast": 9,
        "stl": 11,
        "blk": 11,
        "tpm": 7,
        "fgPct": 8,
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
        "pts": 278.4,
        "reb": 114.1,
        "ast": 59.8,
        "stl": 20.18,
        "blk": 14.99,
        "tpm": 35.4,
        "to": 35.2,
        "fgPct": 46.6,
        "ftPct": 76.4
      },
      "rank": {
        "pts": 11,
        "reb": 8,
        "ast": 11,
        "stl": 10,
        "blk": 5,
        "tpm": 6,
        "fgPct": 9,
        "ftPct": 11,
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
        "pts": 337.7,
        "reb": 146.8,
        "ast": 82,
        "stl": 23.47,
        "blk": 19.03,
        "tpm": 33.8,
        "to": 44.3,
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
        "pts": 319.7,
        "reb": 148.7,
        "ast": 75.8,
        "stl": 22.73,
        "blk": 17.08,
        "tpm": 32.9,
        "to": 41.7,
        "fgPct": 48,
        "ftPct": 76.5
      },
      "rank": {
        "pts": 7,
        "reb": 2,
        "ast": 6,
        "stl": 7,
        "blk": 3,
        "tpm": 10,
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
        "pts": 291.9,
        "reb": 107.5,
        "ast": 64.1,
        "stl": 22.11,
        "blk": 11.88,
        "tpm": 30.1,
        "to": 34.5,
        "fgPct": 47.9,
        "ftPct": 78.5
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 10,
        "stl": 9,
        "blk": 10,
        "tpm": 12,
        "fgPct": 3,
        "ftPct": 8,
        "to": 2
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
        "pts": 301.8,
        "reb": 119.1,
        "ast": 68.5,
        "stl": 22.51,
        "blk": 15.26,
        "tpm": 33.7,
        "to": 39.2,
        "fgPct": 47,
        "ftPct": 77.9
      },
      "rank": {
        "pts": 9,
        "reb": 7,
        "ast": 8,
        "stl": 8,
        "blk": 4,
        "tpm": 9,
        "fgPct": 6,
        "ftPct": 9,
        "to": 6
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
        "pts": 356.1,
        "reb": 121.2,
        "ast": 90.9,
        "stl": 24.84,
        "blk": 14.44,
        "tpm": 39,
        "to": 45.8,
        "fgPct": 46.7,
        "ftPct": 79.1
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 3,
        "blk": 7,
        "tpm": 5,
        "fgPct": 7,
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
        "pts": 259.2,
        "reb": 81.1,
        "ast": 58.6,
        "stl": 17.7,
        "blk": 8.89,
        "tpm": 30.3,
        "to": 34.4,
        "fgPct": 46.1,
        "ftPct": 79.1
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 11,
        "fgPct": 11,
        "ftPct": 4,
        "to": 1
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
