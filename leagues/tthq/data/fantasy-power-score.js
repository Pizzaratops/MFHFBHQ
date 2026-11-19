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
  "generatedAt": "2026-11-19T23:03:40.759Z",
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
        "pts": 442.8,
        "reb": 164.9,
        "ast": 105.8,
        "stl": 29.49,
        "blk": 19.74,
        "tpm": 40.5,
        "to": 56,
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
        "pts": 323.5,
        "reb": 119.8,
        "ast": 75.6,
        "stl": 22.68,
        "blk": 14.75,
        "tpm": 40.5,
        "to": 40.8,
        "fgPct": 46.6,
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
        "pts": 343.7,
        "reb": 112.9,
        "ast": 78.3,
        "stl": 26.25,
        "blk": 12.74,
        "tpm": 44.9,
        "to": 38.2,
        "fgPct": 45.6,
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
        "pts": 377.3,
        "reb": 130.1,
        "ast": 85.5,
        "stl": 24.37,
        "blk": 13.74,
        "tpm": 47.7,
        "to": 44.5,
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
        "pts": 304.4,
        "reb": 108.3,
        "ast": 66.2,
        "stl": 20.12,
        "blk": 11.19,
        "tpm": 34.1,
        "to": 35.6,
        "fgPct": 46.9,
        "ftPct": 81.4
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
        "pts": 278.6,
        "reb": 115.1,
        "ast": 59,
        "stl": 20.17,
        "blk": 15.39,
        "tpm": 35.4,
        "to": 34.8,
        "fgPct": 46.6,
        "ftPct": 76.1
      },
      "rank": {
        "pts": 11,
        "reb": 8,
        "ast": 11,
        "stl": 10,
        "blk": 4,
        "tpm": 6,
        "fgPct": 8,
        "ftPct": 12,
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
        "pts": 334.6,
        "reb": 144.6,
        "ast": 80.5,
        "stl": 22.98,
        "blk": 19.01,
        "tpm": 33.3,
        "to": 43.3,
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
        "pts": 319.4,
        "reb": 147.1,
        "ast": 75,
        "stl": 22.63,
        "blk": 17.04,
        "tpm": 33.1,
        "to": 41.5,
        "fgPct": 47.9,
        "ftPct": 76.4
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
        "pts": 287,
        "reb": 107.2,
        "ast": 62.2,
        "stl": 22.19,
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
        "pts": 294.9,
        "reb": 118.3,
        "ast": 68.1,
        "stl": 21.25,
        "blk": 15.35,
        "tpm": 32.8,
        "to": 38,
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
        "pts": 351.7,
        "reb": 120.9,
        "ast": 88.7,
        "stl": 24.9,
        "blk": 14.6,
        "tpm": 39,
        "to": 45.3,
        "fgPct": 46.6,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 3,
        "blk": 7,
        "tpm": 5,
        "fgPct": 9,
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
        "pts": 260.7,
        "reb": 84.6,
        "ast": 58.8,
        "stl": 18.1,
        "blk": 9.62,
        "tpm": 30.6,
        "to": 34.9,
        "fgPct": 46.2,
        "ftPct": 78.6
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
