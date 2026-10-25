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
  "generatedAt": "2026-10-25T03:01:34.030Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 3 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 437.1,
        "reb": 163.8,
        "ast": 100,
        "stl": 28.97,
        "blk": 19.54,
        "tpm": 40,
        "to": 55.3,
        "fgPct": 47.9,
        "ftPct": 78.7
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
      "projCount": 28,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 2,
      "name": "Seagulls",
      "owner": "Möwe",
      "values": {
        "pts": 335,
        "reb": 131.8,
        "ast": 74.1,
        "stl": 24.06,
        "blk": 17.47,
        "tpm": 39.1,
        "to": 41.3,
        "fgPct": 47.9,
        "ftPct": 78.3
      },
      "rank": {
        "pts": 5,
        "reb": 4,
        "ast": 7,
        "stl": 4,
        "blk": 4,
        "tpm": 4,
        "fgPct": 4,
        "ftPct": 7,
        "to": 9
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
        "pts": 338,
        "reb": 112.4,
        "ast": 75.3,
        "stl": 23.65,
        "blk": 11.56,
        "tpm": 41.9,
        "to": 36.2,
        "fgPct": 46.7,
        "ftPct": 80.8
      },
      "rank": {
        "pts": 4,
        "reb": 9,
        "ast": 6,
        "stl": 5,
        "blk": 10,
        "tpm": 2,
        "fgPct": 8,
        "ftPct": 2,
        "to": 5
      },
      "includedCount": 26,
      "projCount": 26,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 4,
      "name": "Leaveland Cavaliers",
      "owner": "Sven",
      "values": {
        "pts": 358.8,
        "reb": 120.5,
        "ast": 77.7,
        "stl": 21.23,
        "blk": 11.4,
        "tpm": 43.9,
        "to": 40.3,
        "fgPct": 46.3,
        "ftPct": 81.1
      },
      "rank": {
        "pts": 2,
        "reb": 6,
        "ast": 4,
        "stl": 11,
        "blk": 11,
        "tpm": 1,
        "fgPct": 11,
        "ftPct": 1,
        "to": 7
      },
      "includedCount": 26,
      "projCount": 25,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 5,
      "name": "Anadolu Ballers",
      "owner": "Murat Oguz",
      "values": {
        "pts": 322.2,
        "reb": 119.1,
        "ast": 72.5,
        "stl": 21.9,
        "blk": 11.87,
        "tpm": 37.2,
        "to": 37.4,
        "fgPct": 47.5,
        "ftPct": 80.7
      },
      "rank": {
        "pts": 7,
        "reb": 7,
        "ast": 8,
        "stl": 8,
        "blk": 9,
        "tpm": 5,
        "fgPct": 6,
        "ftPct": 3,
        "to": 6
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
        "pts": 274.9,
        "reb": 114.2,
        "ast": 60.5,
        "stl": 21.55,
        "blk": 14.75,
        "tpm": 35.9,
        "to": 34.8,
        "fgPct": 46.7,
        "ftPct": 77.2
      },
      "rank": {
        "pts": 12,
        "reb": 8,
        "ast": 12,
        "stl": 9,
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
        "reb": 141.3,
        "ast": 78.4,
        "stl": 22.86,
        "blk": 18.46,
        "tpm": 31.7,
        "to": 42.3,
        "fgPct": 47.7,
        "ftPct": 76.7
      },
      "rank": {
        "pts": 6,
        "reb": 3,
        "ast": 3,
        "stl": 6,
        "blk": 2,
        "tpm": 9,
        "fgPct": 5,
        "ftPct": 11,
        "to": 10
      },
      "includedCount": 26,
      "projCount": 26,
      "skippedCount": 2,
      "skippedPlayers": [
        "Henri Veesaar",
        "Tacko Fall"
      ]
    },
    {
      "id": 8,
      "name": "Kawhi So Serious",
      "owner": "Harald Peterson",
      "values": {
        "pts": 313.5,
        "reb": 153.2,
        "ast": 77.6,
        "stl": 24.09,
        "blk": 18.19,
        "tpm": 30.8,
        "to": 40.7,
        "fgPct": 48.3,
        "ftPct": 75.4
      },
      "rank": {
        "pts": 8,
        "reb": 2,
        "ast": 5,
        "stl": 3,
        "blk": 3,
        "tpm": 11,
        "fgPct": 2,
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
        "pts": 290.5,
        "reb": 109.4,
        "ast": 62.2,
        "stl": 22.66,
        "blk": 11.99,
        "tpm": 29.1,
        "to": 32.6,
        "fgPct": 48.7,
        "ftPct": 78
      },
      "rank": {
        "pts": 9,
        "reb": 10,
        "ast": 9,
        "stl": 7,
        "blk": 8,
        "tpm": 12,
        "fgPct": 1,
        "ftPct": 9,
        "to": 1
      },
      "includedCount": 27,
      "projCount": 27,
      "skippedCount": 1,
      "skippedPlayers": [
        "Ebuka Okorie"
      ]
    },
    {
      "id": 10,
      "name": "S-Town Grizzlies",
      "owner": "Jan Schattschneider",
      "values": {
        "pts": 283.2,
        "reb": 109.3,
        "ast": 61.1,
        "stl": 21.52,
        "blk": 13.66,
        "tpm": 31.6,
        "to": 34.6,
        "fgPct": 46.3,
        "ftPct": 78.2
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 10,
        "stl": 10,
        "blk": 7,
        "tpm": 10,
        "fgPct": 12,
        "ftPct": 8,
        "to": 2
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
        "pts": 343.5,
        "reb": 121.8,
        "ast": 91.1,
        "stl": 27.08,
        "blk": 14.65,
        "tpm": 35.5,
        "to": 43.8,
        "fgPct": 47.2,
        "ftPct": 78.4
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 2,
        "blk": 6,
        "tpm": 7,
        "fgPct": 7,
        "ftPct": 6,
        "to": 11
      },
      "includedCount": 28,
      "projCount": 27,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 12,
      "name": "Vancouver Curry-Wurst",
      "owner": "German Bratwurst",
      "values": {
        "pts": 275,
        "reb": 85.2,
        "ast": 61.1,
        "stl": 19.33,
        "blk": 9.33,
        "tpm": 32.5,
        "to": 35.2,
        "fgPct": 46.6,
        "ftPct": 78.9
      },
      "rank": {
        "pts": 11,
        "reb": 12,
        "ast": 11,
        "stl": 12,
        "blk": 12,
        "tpm": 8,
        "fgPct": 10,
        "ftPct": 4,
        "to": 4
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
