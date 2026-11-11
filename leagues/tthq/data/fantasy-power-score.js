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
  "generatedAt": "2026-11-11T05:01:21.810Z",
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
        "pts": 449.6,
        "reb": 164.8,
        "ast": 109.3,
        "stl": 30.09,
        "blk": 20.25,
        "tpm": 40.9,
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
        "pts": 310.8,
        "reb": 117.8,
        "ast": 72.6,
        "stl": 21.54,
        "blk": 14.06,
        "tpm": 38.1,
        "to": 39,
        "fgPct": 47.2,
        "ftPct": 78.8
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
        "pts": 348,
        "reb": 113.4,
        "ast": 78.9,
        "stl": 26.25,
        "blk": 12.64,
        "tpm": 45,
        "to": 39.4,
        "fgPct": 46,
        "ftPct": 78.9
      },
      "rank": {
        "pts": 4,
        "reb": 8,
        "ast": 5,
        "stl": 2,
        "blk": 9,
        "tpm": 2,
        "fgPct": 10,
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
        "pts": 374.2,
        "reb": 128.3,
        "ast": 84.1,
        "stl": 24,
        "blk": 12.82,
        "tpm": 47.6,
        "to": 44.6,
        "fgPct": 46,
        "ftPct": 81.2
      },
      "rank": {
        "pts": 2,
        "reb": 4,
        "ast": 3,
        "stl": 4,
        "blk": 8,
        "tpm": 1,
        "fgPct": 11,
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
        "pts": 298.1,
        "reb": 107.1,
        "ast": 67,
        "stl": 19.86,
        "blk": 10.79,
        "tpm": 33.6,
        "to": 36,
        "fgPct": 46.9,
        "ftPct": 82
      },
      "rank": {
        "pts": 8,
        "reb": 10,
        "ast": 9,
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
        "pts": 276.7,
        "reb": 113.3,
        "ast": 58.4,
        "stl": 20.54,
        "blk": 14.91,
        "tpm": 34.7,
        "to": 35.6,
        "fgPct": 46.7,
        "ftPct": 76.3
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
        "pts": 328,
        "reb": 145.8,
        "ast": 80.9,
        "stl": 23.33,
        "blk": 18.99,
        "tpm": 31.9,
        "to": 43.7,
        "fgPct": 47.5,
        "ftPct": 76
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 4,
        "stl": 5,
        "blk": 2,
        "tpm": 9,
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
        "pts": 323,
        "reb": 153.2,
        "ast": 77.6,
        "stl": 23.32,
        "blk": 17.56,
        "tpm": 32.7,
        "to": 41.7,
        "fgPct": 47.9,
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
        "ftPct": 11,
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
        "pts": 284.1,
        "reb": 106.3,
        "ast": 62.3,
        "stl": 22.21,
        "blk": 11.56,
        "tpm": 29.4,
        "to": 33.2,
        "fgPct": 48.1,
        "ftPct": 77.8
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
        "pts": 283.9,
        "reb": 115.7,
        "ast": 67.8,
        "stl": 21.29,
        "blk": 15.01,
        "tpm": 30.4,
        "to": 38.8,
        "fgPct": 47.1,
        "ftPct": 78.2
      },
      "rank": {
        "pts": 10,
        "reb": 7,
        "ast": 8,
        "stl": 9,
        "blk": 4,
        "tpm": 10,
        "fgPct": 6,
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
        "pts": 360.7,
        "reb": 123.4,
        "ast": 91.4,
        "stl": 25.13,
        "blk": 14.53,
        "tpm": 39.4,
        "to": 46.9,
        "fgPct": 46.9,
        "ftPct": 79.5
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
        "pts": 251.9,
        "reb": 84.8,
        "ast": 59.1,
        "stl": 17.25,
        "blk": 9.03,
        "tpm": 29.2,
        "to": 35.1,
        "fgPct": 46,
        "ftPct": 78.5
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 11,
        "stl": 12,
        "blk": 12,
        "tpm": 12,
        "fgPct": 12,
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
