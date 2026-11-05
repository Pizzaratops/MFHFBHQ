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
  "generatedAt": "2026-11-05T20:01:20.864Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 9 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 442.8,
        "reb": 161.3,
        "ast": 107.1,
        "stl": 29.94,
        "blk": 19.24,
        "tpm": 40.2,
        "to": 56.8,
        "fgPct": 48.1,
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
        "ftPct": 5,
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
        "pts": 318.1,
        "reb": 126.5,
        "ast": 74.5,
        "stl": 22.42,
        "blk": 15.41,
        "tpm": 38.2,
        "to": 40.1,
        "fgPct": 47.5,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 7,
        "reb": 5,
        "ast": 7,
        "stl": 7,
        "blk": 4,
        "tpm": 5,
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
        "pts": 348.5,
        "reb": 116.8,
        "ast": 80.7,
        "stl": 26.32,
        "blk": 13.16,
        "tpm": 45.1,
        "to": 39.9,
        "fgPct": 46,
        "ftPct": 79.6
      },
      "rank": {
        "pts": 4,
        "reb": 7,
        "ast": 4,
        "stl": 2,
        "blk": 8,
        "tpm": 2,
        "fgPct": 12,
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
        "pts": 380.6,
        "reb": 127.7,
        "ast": 85.3,
        "stl": 25.05,
        "blk": 12.05,
        "tpm": 48,
        "to": 46,
        "fgPct": 46.2,
        "ftPct": 81
      },
      "rank": {
        "pts": 2,
        "reb": 4,
        "ast": 3,
        "stl": 4,
        "blk": 10,
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
        "pts": 307.4,
        "reb": 110.6,
        "ast": 69.2,
        "stl": 20.73,
        "blk": 11.4,
        "tpm": 34.6,
        "to": 36.9,
        "fgPct": 47,
        "ftPct": 81.5
      },
      "rank": {
        "pts": 8,
        "reb": 10,
        "ast": 8,
        "stl": 11,
        "blk": 11,
        "tpm": 7,
        "fgPct": 7,
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
        "pts": 279.7,
        "reb": 116.5,
        "ast": 58.8,
        "stl": 21.33,
        "blk": 15.32,
        "tpm": 35.1,
        "to": 35.2,
        "fgPct": 46.9,
        "ftPct": 76.9
      },
      "rank": {
        "pts": 11,
        "reb": 8,
        "ast": 12,
        "stl": 9,
        "blk": 5,
        "tpm": 6,
        "fgPct": 9,
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
        "pts": 333.2,
        "reb": 146.9,
        "ast": 79.6,
        "stl": 23.74,
        "blk": 19.23,
        "tpm": 33.1,
        "to": 44.2,
        "fgPct": 47.7,
        "ftPct": 76.5
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 5,
        "stl": 5,
        "blk": 2,
        "tpm": 8,
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
        "pts": 325.5,
        "reb": 156.2,
        "ast": 77.9,
        "stl": 22.85,
        "blk": 17.79,
        "tpm": 32.8,
        "to": 41.4,
        "fgPct": 48.3,
        "ftPct": 75.8
      },
      "rank": {
        "pts": 6,
        "reb": 2,
        "ast": 6,
        "stl": 6,
        "blk": 3,
        "tpm": 9,
        "fgPct": 1,
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
        "pts": 285.1,
        "reb": 109.7,
        "ast": 62.7,
        "stl": 22.09,
        "blk": 12.22,
        "tpm": 29.1,
        "to": 33.7,
        "fgPct": 48.2,
        "ftPct": 77.6
      },
      "rank": {
        "pts": 9,
        "reb": 11,
        "ast": 10,
        "stl": 8,
        "blk": 9,
        "tpm": 12,
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
        "pts": 284.2,
        "reb": 115.6,
        "ast": 66.3,
        "stl": 20.88,
        "blk": 14.87,
        "tpm": 30.6,
        "to": 37,
        "fgPct": 47.1,
        "ftPct": 78.4
      },
      "rank": {
        "pts": 10,
        "reb": 9,
        "ast": 9,
        "stl": 10,
        "blk": 6,
        "tpm": 10,
        "fgPct": 6,
        "ftPct": 7,
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
        "pts": 359.9,
        "reb": 123.7,
        "ast": 91.1,
        "stl": 25.68,
        "blk": 14.6,
        "tpm": 39.1,
        "to": 47,
        "fgPct": 47,
        "ftPct": 79
      },
      "rank": {
        "pts": 3,
        "reb": 6,
        "ast": 2,
        "stl": 3,
        "blk": 7,
        "tpm": 4,
        "fgPct": 8,
        "ftPct": 4,
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
        "pts": 258.5,
        "reb": 85.8,
        "ast": 59.6,
        "stl": 18.54,
        "blk": 9.5,
        "tpm": 30.6,
        "to": 35.4,
        "fgPct": 46.2,
        "ftPct": 78.4
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 11,
        "stl": 12,
        "blk": 12,
        "tpm": 11,
        "fgPct": 11,
        "ftPct": 8,
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
