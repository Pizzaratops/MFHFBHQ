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
  "generatedAt": "2026-11-08T23:01:20.197Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 11 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 439.1,
        "reb": 162.1,
        "ast": 106.4,
        "stl": 29.31,
        "blk": 19.78,
        "tpm": 39.8,
        "to": 55.5,
        "fgPct": 48.1,
        "ftPct": 79
      },
      "rank": {
        "pts": 1,
        "reb": 1,
        "ast": 1,
        "stl": 1,
        "blk": 1,
        "tpm": 3,
        "fgPct": 2,
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
        "pts": 314.3,
        "reb": 120.9,
        "ast": 73.2,
        "stl": 22.15,
        "blk": 14.7,
        "tpm": 38.1,
        "to": 39.1,
        "fgPct": 47.3,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 7,
        "reb": 6,
        "ast": 7,
        "stl": 8,
        "blk": 6,
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
        "pts": 341.2,
        "reb": 115.7,
        "ast": 79.6,
        "stl": 25.66,
        "blk": 13.01,
        "tpm": 44.5,
        "to": 39.6,
        "fgPct": 45.9,
        "ftPct": 79.6
      },
      "rank": {
        "pts": 4,
        "reb": 8,
        "ast": 5,
        "stl": 2,
        "blk": 8,
        "tpm": 2,
        "fgPct": 12,
        "ftPct": 3,
        "to": 7
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
        "pts": 373.8,
        "reb": 130,
        "ast": 83.5,
        "stl": 24.31,
        "blk": 12.93,
        "tpm": 47.2,
        "to": 45,
        "fgPct": 46.3,
        "ftPct": 81.1
      },
      "rank": {
        "pts": 2,
        "reb": 4,
        "ast": 3,
        "stl": 4,
        "blk": 9,
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
        "pts": 301.8,
        "reb": 110.1,
        "ast": 68.3,
        "stl": 20.52,
        "blk": 11.35,
        "tpm": 33.7,
        "to": 36.4,
        "fgPct": 46.9,
        "ftPct": 81.4
      },
      "rank": {
        "pts": 8,
        "reb": 10,
        "ast": 8,
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
        "pts": 277.6,
        "reb": 115.6,
        "ast": 58.5,
        "stl": 20.82,
        "blk": 15.07,
        "tpm": 35.2,
        "to": 35.6,
        "fgPct": 46.7,
        "ftPct": 76.8
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
        "pts": 332.9,
        "reb": 147.7,
        "ast": 81.2,
        "stl": 23.57,
        "blk": 19.36,
        "tpm": 33,
        "to": 43.6,
        "fgPct": 47.7,
        "ftPct": 76.5
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
        "pts": 321.5,
        "reb": 154.4,
        "ast": 76.3,
        "stl": 22.41,
        "blk": 17.65,
        "tpm": 32.5,
        "to": 41.6,
        "fgPct": 48.1,
        "ftPct": 75.9
      },
      "rank": {
        "pts": 6,
        "reb": 2,
        "ast": 6,
        "stl": 7,
        "blk": 3,
        "tpm": 9,
        "fgPct": 3,
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
        "pts": 289.2,
        "reb": 110,
        "ast": 63.5,
        "stl": 22.9,
        "blk": 12.09,
        "tpm": 29.7,
        "to": 34,
        "fgPct": 48.2,
        "ftPct": 77.5
      },
      "rank": {
        "pts": 9,
        "reb": 11,
        "ast": 10,
        "stl": 6,
        "blk": 10,
        "tpm": 12,
        "fgPct": 1,
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
        "pts": 286.9,
        "reb": 119,
        "ast": 67.7,
        "stl": 21.56,
        "blk": 15.35,
        "tpm": 31,
        "to": 38.1,
        "fgPct": 47,
        "ftPct": 78.3
      },
      "rank": {
        "pts": 10,
        "reb": 7,
        "ast": 9,
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
        "pts": 357.4,
        "reb": 123.8,
        "ast": 90.5,
        "stl": 25.51,
        "blk": 14.59,
        "tpm": 38.9,
        "to": 47,
        "fgPct": 47,
        "ftPct": 79.2
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 3,
        "blk": 7,
        "tpm": 4,
        "fgPct": 7,
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
        "pts": 255.7,
        "reb": 86.8,
        "ast": 59.6,
        "stl": 18.17,
        "blk": 9.44,
        "tpm": 30.1,
        "to": 35.6,
        "fgPct": 46,
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
        "ftPct": 7,
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
