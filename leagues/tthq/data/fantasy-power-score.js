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
  "generatedAt": "2026-11-16T01:01:21.878Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 14 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 443.5,
        "reb": 165.3,
        "ast": 106.8,
        "stl": 29.36,
        "blk": 19.98,
        "tpm": 40.1,
        "to": 55.6,
        "fgPct": 48.1,
        "ftPct": 78.7
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
        "pts": 321.1,
        "reb": 121.7,
        "ast": 75.7,
        "stl": 22.86,
        "blk": 15.19,
        "tpm": 39.5,
        "to": 40.6,
        "fgPct": 46.6,
        "ftPct": 78.2
      },
      "rank": {
        "pts": 7,
        "reb": 6,
        "ast": 7,
        "stl": 7,
        "blk": 5,
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
        "pts": 351.1,
        "reb": 114.9,
        "ast": 80,
        "stl": 26.28,
        "blk": 12.92,
        "tpm": 45.5,
        "to": 39.3,
        "fgPct": 45.7,
        "ftPct": 79.3
      },
      "rank": {
        "pts": 3,
        "reb": 8,
        "ast": 4,
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
        "pts": 374.2,
        "reb": 129.6,
        "ast": 84.2,
        "stl": 23.71,
        "blk": 13.51,
        "tpm": 47.3,
        "to": 44,
        "fgPct": 46.1,
        "ftPct": 80.9
      },
      "rank": {
        "pts": 2,
        "reb": 4,
        "ast": 3,
        "stl": 5,
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
        "pts": 301,
        "reb": 109,
        "ast": 65.7,
        "stl": 20.14,
        "blk": 11.07,
        "tpm": 33.6,
        "to": 35.7,
        "fgPct": 46.8,
        "ftPct": 81.3
      },
      "rank": {
        "pts": 8,
        "reb": 10,
        "ast": 9,
        "stl": 11,
        "blk": 11,
        "tpm": 8,
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
        "pts": 278.4,
        "reb": 114.3,
        "ast": 58.8,
        "stl": 20.54,
        "blk": 15.34,
        "tpm": 35.2,
        "to": 34.9,
        "fgPct": 46.6,
        "ftPct": 76.1
      },
      "rank": {
        "pts": 11,
        "reb": 9,
        "ast": 11,
        "stl": 10,
        "blk": 4,
        "tpm": 6,
        "fgPct": 8,
        "ftPct": 12,
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
        "pts": 333.7,
        "reb": 144.8,
        "ast": 80,
        "stl": 23.74,
        "blk": 18.98,
        "tpm": 32.8,
        "to": 43.4,
        "fgPct": 47.8,
        "ftPct": 76.3
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 5,
        "stl": 4,
        "blk": 2,
        "tpm": 9,
        "fgPct": 3,
        "ftPct": 10,
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
        "pts": 328.1,
        "reb": 151.3,
        "ast": 76.9,
        "stl": 23.29,
        "blk": 17.71,
        "tpm": 34.2,
        "to": 41.2,
        "fgPct": 47.9,
        "ftPct": 76.3
      },
      "rank": {
        "pts": 6,
        "reb": 2,
        "ast": 6,
        "stl": 6,
        "blk": 3,
        "tpm": 7,
        "fgPct": 2,
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
        "pts": 286.3,
        "reb": 107.9,
        "ast": 62.9,
        "stl": 22.19,
        "blk": 12.07,
        "tpm": 29.9,
        "to": 33.7,
        "fgPct": 47.8,
        "ftPct": 77.5
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 10,
        "stl": 8,
        "blk": 10,
        "tpm": 12,
        "fgPct": 4,
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
        "pts": 290.2,
        "reb": 118,
        "ast": 67.1,
        "stl": 21.05,
        "blk": 15.14,
        "tpm": 32,
        "to": 38.1,
        "fgPct": 47,
        "ftPct": 77.9
      },
      "rank": {
        "pts": 9,
        "reb": 7,
        "ast": 8,
        "stl": 9,
        "blk": 6,
        "tpm": 10,
        "fgPct": 5,
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
        "pts": 349.2,
        "reb": 121.9,
        "ast": 88.1,
        "stl": 24.7,
        "blk": 14.66,
        "tpm": 38.4,
        "to": 45.4,
        "fgPct": 46.6,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 4,
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
        "pts": 256.4,
        "reb": 84.8,
        "ast": 57.6,
        "stl": 17.66,
        "blk": 9.87,
        "tpm": 30.1,
        "to": 34.6,
        "fgPct": 46.3,
        "ftPct": 78.5
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 11,
        "fgPct": 10,
        "ftPct": 6,
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
