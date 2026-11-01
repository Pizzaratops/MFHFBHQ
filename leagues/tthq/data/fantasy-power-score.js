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
  "generatedAt": "2026-11-01T18:01:17.543Z",
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
        "pts": 450.7,
        "reb": 161.3,
        "ast": 107.6,
        "stl": 30.24,
        "blk": 19.32,
        "tpm": 40.6,
        "to": 57.8,
        "fgPct": 48.1,
        "ftPct": 78.6
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
        "pts": 322.5,
        "reb": 125.2,
        "ast": 76.2,
        "stl": 23.82,
        "blk": 15.18,
        "tpm": 39.5,
        "to": 40.1,
        "fgPct": 47.1,
        "ftPct": 78.9
      },
      "rank": {
        "pts": 7,
        "reb": 4,
        "ast": 7,
        "stl": 4,
        "blk": 4,
        "tpm": 4,
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
        "pts": 346.8,
        "reb": 117.6,
        "ast": 79.8,
        "stl": 26.21,
        "blk": 12.62,
        "tpm": 44.3,
        "to": 39.2,
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
        "pts": 352.7,
        "reb": 120.1,
        "ast": 79.8,
        "stl": 23.53,
        "blk": 11.47,
        "tpm": 45,
        "to": 41.3,
        "fgPct": 46,
        "ftPct": 81.1
      },
      "rank": {
        "pts": 3,
        "reb": 6,
        "ast": 5,
        "stl": 5,
        "blk": 10,
        "tpm": 1,
        "fgPct": 11,
        "ftPct": 2,
        "to": 9
      },
      "includedCount": 26,
      "projCount": 26,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 5,
      "name": "Anadolu Ballers",
      "owner": "Murat Oguz",
      "values": {
        "pts": 313.9,
        "reb": 113.2,
        "ast": 70.6,
        "stl": 20.28,
        "blk": 11.38,
        "tpm": 35.9,
        "to": 38.8,
        "fgPct": 47.2,
        "ftPct": 81.2
      },
      "rank": {
        "pts": 8,
        "reb": 10,
        "ast": 8,
        "stl": 11,
        "blk": 11,
        "tpm": 6,
        "fgPct": 5,
        "ftPct": 1,
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
        "pts": 282.2,
        "reb": 115,
        "ast": 59.9,
        "stl": 21.73,
        "blk": 14.64,
        "tpm": 35.9,
        "to": 34.8,
        "fgPct": 46.8,
        "ftPct": 77
      },
      "rank": {
        "pts": 11,
        "reb": 9,
        "ast": 11,
        "stl": 9,
        "blk": 5,
        "tpm": 7,
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
        "pts": 334,
        "reb": 143.1,
        "ast": 80,
        "stl": 22.93,
        "blk": 18.57,
        "tpm": 32.6,
        "to": 44.5,
        "fgPct": 47.6,
        "ftPct": 76.8
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 3,
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
        "pts": 324.9,
        "reb": 154.7,
        "ast": 77.7,
        "stl": 23.2,
        "blk": 18.08,
        "tpm": 33,
        "to": 41.1,
        "fgPct": 47.9,
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
        "pts": 282.3,
        "reb": 108,
        "ast": 61.6,
        "stl": 22.65,
        "blk": 11.82,
        "tpm": 28.9,
        "to": 33.5,
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
        "pts": 285.8,
        "reb": 115.6,
        "ast": 64.8,
        "stl": 20.93,
        "blk": 14.55,
        "tpm": 31.9,
        "to": 37.7,
        "fgPct": 46.9,
        "ftPct": 78
      },
      "rank": {
        "pts": 9,
        "reb": 8,
        "ast": 9,
        "stl": 10,
        "blk": 6,
        "tpm": 10,
        "fgPct": 7,
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
        "pts": 358.6,
        "reb": 123.3,
        "ast": 91.1,
        "stl": 26.88,
        "blk": 14.44,
        "tpm": 39.4,
        "to": 45.6,
        "fgPct": 46.9,
        "ftPct": 78.5
      },
      "rank": {
        "pts": 2,
        "reb": 5,
        "ast": 2,
        "stl": 2,
        "blk": 7,
        "tpm": 5,
        "fgPct": 8,
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
        "pts": 264.7,
        "reb": 85.6,
        "ast": 59.4,
        "stl": 19.77,
        "blk": 9.19,
        "tpm": 31.8,
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
