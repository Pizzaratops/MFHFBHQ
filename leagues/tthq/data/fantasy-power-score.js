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
  "generatedAt": "2026-11-16T19:31:04.557Z",
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
        "pts": 442,
        "reb": 165.1,
        "ast": 106.6,
        "stl": 29.35,
        "blk": 19.93,
        "tpm": 40.3,
        "to": 55.5,
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
        "pts": 321.7,
        "reb": 120.6,
        "ast": 76.1,
        "stl": 22.96,
        "blk": 14.85,
        "tpm": 40.2,
        "to": 40.9,
        "fgPct": 46.5,
        "ftPct": 78.1
      },
      "rank": {
        "pts": 7,
        "reb": 6,
        "ast": 7,
        "stl": 7,
        "blk": 6,
        "tpm": 4,
        "fgPct": 9,
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
        "pts": 349.1,
        "reb": 114.3,
        "ast": 79.9,
        "stl": 26.17,
        "blk": 12.79,
        "tpm": 45.4,
        "to": 39.2,
        "fgPct": 45.7,
        "ftPct": 79.3
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
        "pts": 373.3,
        "reb": 129.1,
        "ast": 83.8,
        "stl": 23.64,
        "blk": 13.51,
        "tpm": 47.3,
        "to": 43.8,
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
        "to": 9
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
        "pts": 299.5,
        "reb": 108.1,
        "ast": 65.5,
        "stl": 20.16,
        "blk": 11.01,
        "tpm": 33.5,
        "to": 35.3,
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
        "pts": 279.5,
        "reb": 114.6,
        "ast": 58.8,
        "stl": 20.53,
        "blk": 15.32,
        "tpm": 35.3,
        "to": 35,
        "fgPct": 46.6,
        "ftPct": 76.1
      },
      "rank": {
        "pts": 11,
        "reb": 8,
        "ast": 11,
        "stl": 10,
        "blk": 5,
        "tpm": 6,
        "fgPct": 7,
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
        "pts": 335,
        "reb": 145.6,
        "ast": 80.4,
        "stl": 23.73,
        "blk": 18.94,
        "tpm": 33,
        "to": 43.9,
        "fgPct": 47.7,
        "ftPct": 76.4
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 4,
        "stl": 4,
        "blk": 2,
        "tpm": 9,
        "fgPct": 4,
        "ftPct": 10,
        "to": 10
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
        "pts": 327.5,
        "reb": 151.3,
        "ast": 76.7,
        "stl": 23.2,
        "blk": 17.73,
        "tpm": 34.2,
        "to": 41.3,
        "fgPct": 47.8,
        "ftPct": 76.4
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
        "pts": 286.2,
        "reb": 107.5,
        "ast": 62.4,
        "stl": 22.05,
        "blk": 11.98,
        "tpm": 29.9,
        "to": 33.7,
        "fgPct": 47.8,
        "ftPct": 77.6
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 10,
        "stl": 8,
        "blk": 10,
        "tpm": 11,
        "fgPct": 3,
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
        "pts": 293,
        "reb": 118.9,
        "ast": 67.3,
        "stl": 21.28,
        "blk": 15.33,
        "tpm": 32.4,
        "to": 38.2,
        "fgPct": 47,
        "ftPct": 77.9
      },
      "rank": {
        "pts": 9,
        "reb": 7,
        "ast": 8,
        "stl": 9,
        "blk": 4,
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
        "pts": 350,
        "reb": 121.9,
        "ast": 88.4,
        "stl": 24.72,
        "blk": 14.64,
        "tpm": 38.6,
        "to": 45.4,
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
        "pts": 256.3,
        "reb": 84.8,
        "ast": 57.4,
        "stl": 17.83,
        "blk": 9.84,
        "tpm": 29.9,
        "to": 34.4,
        "fgPct": 46.3,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 12,
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
