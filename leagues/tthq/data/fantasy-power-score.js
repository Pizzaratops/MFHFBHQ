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
  "generatedAt": "2026-11-26T05:01:30.220Z",
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
        "pts": 447.7,
        "reb": 167.2,
        "ast": 111.5,
        "stl": 30.11,
        "blk": 19.65,
        "tpm": 40.9,
        "to": 57,
        "fgPct": 48.1,
        "ftPct": 78.5
      },
      "rank": {
        "pts": 1,
        "reb": 1,
        "ast": 1,
        "stl": 1,
        "blk": 1,
        "tpm": 3,
        "fgPct": 1,
        "ftPct": 7,
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
        "pts": 321,
        "reb": 120,
        "ast": 74.4,
        "stl": 23.22,
        "blk": 14.86,
        "tpm": 39.3,
        "to": 40.4,
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
        "pts": 344.6,
        "reb": 112,
        "ast": 79.2,
        "stl": 26.12,
        "blk": 12.35,
        "tpm": 45.3,
        "to": 38.8,
        "fgPct": 45.4,
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
        "pts": 382.8,
        "reb": 131.9,
        "ast": 87.8,
        "stl": 23.99,
        "blk": 13.55,
        "tpm": 47.8,
        "to": 45.4,
        "fgPct": 46.2,
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
        "pts": 301.7,
        "reb": 108.1,
        "ast": 66.7,
        "stl": 19.28,
        "blk": 11.06,
        "tpm": 34.1,
        "to": 35.5,
        "fgPct": 46.5,
        "ftPct": 81.9
      },
      "rank": {
        "pts": 8,
        "reb": 10,
        "ast": 9,
        "stl": 11,
        "blk": 11,
        "tpm": 7,
        "fgPct": 9,
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
        "reb": 113.9,
        "ast": 59.8,
        "stl": 19.96,
        "blk": 14.95,
        "tpm": 35.5,
        "to": 35,
        "fgPct": 46.6,
        "ftPct": 76.3
      },
      "rank": {
        "pts": 11,
        "reb": 8,
        "ast": 11,
        "stl": 10,
        "blk": 5,
        "tpm": 6,
        "fgPct": 8,
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
        "pts": 336,
        "reb": 147,
        "ast": 82,
        "stl": 23.49,
        "blk": 18.98,
        "tpm": 33.5,
        "to": 44,
        "fgPct": 47.6,
        "ftPct": 76.1
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
        "pts": 318.9,
        "reb": 148.5,
        "ast": 75.9,
        "stl": 22.78,
        "blk": 17.2,
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
        "pts": 293.2,
        "reb": 107.3,
        "ast": 64.2,
        "stl": 22.22,
        "blk": 11.97,
        "tpm": 29.9,
        "to": 34.5,
        "fgPct": 47.8,
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
        "pts": 301.4,
        "reb": 118.9,
        "ast": 67.9,
        "stl": 22.33,
        "blk": 15.25,
        "tpm": 33.5,
        "to": 38.7,
        "fgPct": 47,
        "ftPct": 77.8
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
        "pts": 355.4,
        "reb": 121.3,
        "ast": 90.4,
        "stl": 24.68,
        "blk": 14.4,
        "tpm": 38.7,
        "to": 45.8,
        "fgPct": 46.8,
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
        "pts": 256.9,
        "reb": 80.9,
        "ast": 58.5,
        "stl": 17.83,
        "blk": 8.92,
        "tpm": 30,
        "to": 34.1,
        "fgPct": 45.9,
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
