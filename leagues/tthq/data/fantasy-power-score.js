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
  "generatedAt": "2026-11-13T00:01:23.816Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 13 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 446.6,
        "reb": 164.2,
        "ast": 109,
        "stl": 29.95,
        "blk": 20.17,
        "tpm": 40.9,
        "to": 57.4,
        "fgPct": 48.1,
        "ftPct": 79.1
      },
      "rank": {
        "pts": 1,
        "reb": 1,
        "ast": 1,
        "stl": 1,
        "blk": 1,
        "tpm": 3,
        "fgPct": 1,
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
        "pts": 317.5,
        "reb": 122,
        "ast": 74.7,
        "stl": 22.25,
        "blk": 14.3,
        "tpm": 39.5,
        "to": 40.2,
        "fgPct": 46.9,
        "ftPct": 78.8
      },
      "rank": {
        "pts": 7,
        "reb": 6,
        "ast": 7,
        "stl": 7,
        "blk": 7,
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
        "pts": 347.5,
        "reb": 113.5,
        "ast": 79.5,
        "stl": 26.45,
        "blk": 12.48,
        "tpm": 45.1,
        "to": 38.8,
        "fgPct": 45.8,
        "ftPct": 79.2
      },
      "rank": {
        "pts": 4,
        "reb": 8,
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
        "pts": 373.9,
        "reb": 127.2,
        "ast": 84.2,
        "stl": 23.62,
        "blk": 12.89,
        "tpm": 47.6,
        "to": 44,
        "fgPct": 46.1,
        "ftPct": 81.2
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
        "pts": 300.1,
        "reb": 108.5,
        "ast": 67.1,
        "stl": 20.07,
        "blk": 10.94,
        "tpm": 33.6,
        "to": 36,
        "fgPct": 46.9,
        "ftPct": 81.8
      },
      "rank": {
        "pts": 8,
        "reb": 10,
        "ast": 8,
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
        "pts": 273.7,
        "reb": 112.3,
        "ast": 57.9,
        "stl": 20.45,
        "blk": 14.86,
        "tpm": 34.2,
        "to": 35.4,
        "fgPct": 46.7,
        "ftPct": 76.4
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
        "pts": 330,
        "reb": 146.2,
        "ast": 81,
        "stl": 23.35,
        "blk": 19.2,
        "tpm": 32,
        "to": 43.6,
        "fgPct": 47.6,
        "ftPct": 76.2
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 4,
        "stl": 6,
        "blk": 2,
        "tpm": 9,
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
        "pts": 322.8,
        "reb": 151.8,
        "ast": 77.9,
        "stl": 23.38,
        "blk": 17.6,
        "tpm": 33.2,
        "to": 41.8,
        "fgPct": 47.8,
        "ftPct": 76.1
      },
      "rank": {
        "pts": 6,
        "reb": 2,
        "ast": 6,
        "stl": 5,
        "blk": 3,
        "tpm": 8,
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
        "pts": 284.9,
        "reb": 106.2,
        "ast": 62.1,
        "stl": 22.07,
        "blk": 11.62,
        "tpm": 29.6,
        "to": 33.1,
        "fgPct": 48.1,
        "ftPct": 78
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 10,
        "stl": 8,
        "blk": 10,
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
        "pts": 289.2,
        "reb": 118.1,
        "ast": 65.9,
        "stl": 21.15,
        "blk": 14.99,
        "tpm": 31.6,
        "to": 38.6,
        "fgPct": 46.9,
        "ftPct": 78.2
      },
      "rank": {
        "pts": 9,
        "reb": 7,
        "ast": 9,
        "stl": 9,
        "blk": 4,
        "tpm": 10,
        "fgPct": 7,
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
        "pts": 357.8,
        "reb": 123.2,
        "ast": 90.3,
        "stl": 25.14,
        "blk": 14.42,
        "tpm": 38.8,
        "to": 47.2,
        "fgPct": 46.8,
        "ftPct": 79.2
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 3,
        "blk": 6,
        "tpm": 5,
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
        "pts": 253.9,
        "reb": 84.5,
        "ast": 59.3,
        "stl": 17.44,
        "blk": 9.22,
        "tpm": 29.7,
        "to": 35.2,
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
