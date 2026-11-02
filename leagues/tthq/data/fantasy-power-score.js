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
  "generatedAt": "2026-11-02T04:01:15.314Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 7 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 451.6,
        "reb": 161.4,
        "ast": 107.5,
        "stl": 30.18,
        "blk": 19.4,
        "tpm": 40.8,
        "to": 57.9,
        "fgPct": 48.2,
        "ftPct": 78.6
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
        "pts": 321.3,
        "reb": 125.2,
        "ast": 76.2,
        "stl": 23.66,
        "blk": 15.15,
        "tpm": 39.4,
        "to": 40.1,
        "fgPct": 47,
        "ftPct": 78.9
      },
      "rank": {
        "pts": 7,
        "reb": 4,
        "ast": 7,
        "stl": 5,
        "blk": 4,
        "tpm": 5,
        "fgPct": 6,
        "ftPct": 4,
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
        "pts": 347.8,
        "reb": 117.7,
        "ast": 80.3,
        "stl": 26.1,
        "blk": 12.67,
        "tpm": 44.5,
        "to": 39.3,
        "fgPct": 46.1,
        "ftPct": 80.1
      },
      "rank": {
        "pts": 4,
        "reb": 7,
        "ast": 4,
        "stl": 3,
        "blk": 8,
        "tpm": 2,
        "fgPct": 10,
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
        "pts": 362.1,
        "reb": 122.4,
        "ast": 82.7,
        "stl": 24.26,
        "blk": 11.59,
        "tpm": 46.1,
        "to": 42.4,
        "fgPct": 46,
        "ftPct": 81.2
      },
      "rank": {
        "pts": 2,
        "reb": 6,
        "ast": 3,
        "stl": 4,
        "blk": 10,
        "tpm": 1,
        "fgPct": 11,
        "ftPct": 1,
        "to": 9
      },
      "includedCount": 27,
      "projCount": 27,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 5,
      "name": "Anadolu Ballers",
      "owner": "Murat Oguz",
      "values": {
        "pts": 312.5,
        "reb": 112.6,
        "ast": 70.5,
        "stl": 20.31,
        "blk": 11.32,
        "tpm": 35.8,
        "to": 38.6,
        "fgPct": 47.1,
        "ftPct": 81.2
      },
      "rank": {
        "pts": 8,
        "reb": 10,
        "ast": 8,
        "stl": 11,
        "blk": 11,
        "tpm": 7,
        "fgPct": 5,
        "ftPct": 2,
        "to": 5
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
        "pts": 281.3,
        "reb": 114.7,
        "ast": 59.7,
        "stl": 21.59,
        "blk": 14.54,
        "tpm": 35.9,
        "to": 34.6,
        "fgPct": 46.8,
        "ftPct": 77
      },
      "rank": {
        "pts": 11,
        "reb": 9,
        "ast": 11,
        "stl": 9,
        "blk": 5,
        "tpm": 6,
        "fgPct": 8,
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
        "pts": 332.4,
        "reb": 143.1,
        "ast": 79.5,
        "stl": 23.04,
        "blk": 18.45,
        "tpm": 32.5,
        "to": 44.6,
        "fgPct": 47.5,
        "ftPct": 76.8
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 5,
        "stl": 7,
        "blk": 2,
        "tpm": 9,
        "fgPct": 4,
        "ftPct": 11,
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
        "pts": 325.9,
        "reb": 154.9,
        "ast": 77.8,
        "stl": 23.27,
        "blk": 18.11,
        "tpm": 33.3,
        "to": 41.3,
        "fgPct": 48,
        "ftPct": 75.6
      },
      "rank": {
        "pts": 6,
        "reb": 2,
        "ast": 6,
        "stl": 6,
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
        "pts": 283.5,
        "reb": 108.4,
        "ast": 61.7,
        "stl": 22.95,
        "blk": 11.85,
        "tpm": 28.9,
        "to": 33.6,
        "fgPct": 48.2,
        "ftPct": 77.6
      },
      "rank": {
        "pts": 10,
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
        "pts": 285.3,
        "reb": 115.6,
        "ast": 65.3,
        "stl": 20.83,
        "blk": 14.53,
        "tpm": 31.8,
        "to": 37.7,
        "fgPct": 46.8,
        "ftPct": 78
      },
      "rank": {
        "pts": 9,
        "reb": 8,
        "ast": 9,
        "stl": 10,
        "blk": 6,
        "tpm": 10,
        "fgPct": 9,
        "ftPct": 8,
        "to": 4
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
        "pts": 362,
        "reb": 123.6,
        "ast": 91.5,
        "stl": 26.9,
        "blk": 14.46,
        "tpm": 39.7,
        "to": 46,
        "fgPct": 46.9,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 2,
        "blk": 7,
        "tpm": 4,
        "fgPct": 7,
        "ftPct": 6,
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
        "pts": 264.8,
        "reb": 86,
        "ast": 59.6,
        "stl": 19.72,
        "blk": 9.18,
        "tpm": 31.7,
        "to": 35.1,
        "fgPct": 45.7,
        "ftPct": 78.2
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 11,
        "fgPct": 12,
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
