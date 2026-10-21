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
  "generatedAt": "2026-10-21T12:53:29.089Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 1 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 441,
        "reb": 160.5,
        "ast": 100.7,
        "stl": 28.74,
        "blk": 19.79,
        "tpm": 39.7,
        "to": 53.3,
        "fgPct": 48.5,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 1,
        "reb": 1,
        "ast": 1,
        "stl": 1,
        "blk": 1,
        "tpm": 4,
        "fgPct": 2,
        "ftPct": 4,
        "to": 12
      },
      "includedCount": 27,
      "projCount": 27,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 2,
      "name": "Seagulls",
      "owner": "Möwe",
      "values": {
        "pts": 336,
        "reb": 129.3,
        "ast": 75.5,
        "stl": 23.76,
        "blk": 16.76,
        "tpm": 40,
        "to": 39.8,
        "fgPct": 47.7,
        "ftPct": 78.5
      },
      "rank": {
        "pts": 5,
        "reb": 4,
        "ast": 7,
        "stl": 4,
        "blk": 4,
        "tpm": 3,
        "fgPct": 5,
        "ftPct": 5,
        "to": 8
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
        "pts": 341.3,
        "reb": 115.3,
        "ast": 77,
        "stl": 23.17,
        "blk": 11.76,
        "tpm": 43,
        "to": 36.3,
        "fgPct": 46.9,
        "ftPct": 80.7
      },
      "rank": {
        "pts": 4,
        "reb": 9,
        "ast": 6,
        "stl": 5,
        "blk": 10,
        "tpm": 2,
        "fgPct": 8,
        "ftPct": 3,
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
        "pts": 365.5,
        "reb": 120.2,
        "ast": 80.2,
        "stl": 21.41,
        "blk": 11.41,
        "tpm": 45.7,
        "to": 39.5,
        "fgPct": 46.4,
        "ftPct": 81.4
      },
      "rank": {
        "pts": 2,
        "reb": 7,
        "ast": 3,
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
        "pts": 329.6,
        "reb": 120.7,
        "ast": 75.4,
        "stl": 22,
        "blk": 12.19,
        "tpm": 38.2,
        "to": 36.8,
        "fgPct": 47.6,
        "ftPct": 81
      },
      "rank": {
        "pts": 8,
        "reb": 6,
        "ast": 8,
        "stl": 9,
        "blk": 9,
        "tpm": 6,
        "fgPct": 6,
        "ftPct": 2,
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
        "pts": 279.4,
        "reb": 116.7,
        "ast": 61.6,
        "stl": 21.92,
        "blk": 14.97,
        "tpm": 36.1,
        "to": 34.4,
        "fgPct": 46.7,
        "ftPct": 77.5
      },
      "rank": {
        "pts": 11,
        "reb": 8,
        "ast": 12,
        "stl": 10,
        "blk": 6,
        "tpm": 7,
        "fgPct": 9,
        "ftPct": 9,
        "to": 4
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
        "pts": 334.9,
        "reb": 140.1,
        "ast": 77.5,
        "stl": 22.69,
        "blk": 18.67,
        "tpm": 32.5,
        "to": 40.7,
        "fgPct": 48.2,
        "ftPct": 77.1
      },
      "rank": {
        "pts": 6,
        "reb": 3,
        "ast": 5,
        "stl": 6,
        "blk": 2,
        "tpm": 11,
        "fgPct": 3,
        "ftPct": 10,
        "to": 9
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
        "pts": 330.2,
        "reb": 158.1,
        "ast": 79.3,
        "stl": 24.93,
        "blk": 18.66,
        "tpm": 33,
        "to": 41.8,
        "fgPct": 48.1,
        "ftPct": 75.1
      },
      "rank": {
        "pts": 7,
        "reb": 2,
        "ast": 4,
        "stl": 3,
        "blk": 3,
        "tpm": 9,
        "fgPct": 4,
        "ftPct": 12,
        "to": 10
      },
      "includedCount": 28,
      "projCount": 27,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 9,
      "name": "Cooking Show",
      "owner": "Stefan Estepham",
      "values": {
        "pts": 295.3,
        "reb": 111.8,
        "ast": 65.3,
        "stl": 22.3,
        "blk": 12.3,
        "tpm": 30.2,
        "to": 32.9,
        "fgPct": 48.6,
        "ftPct": 78
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 9,
        "stl": 7,
        "blk": 8,
        "tpm": 12,
        "fgPct": 1,
        "ftPct": 7,
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
        "pts": 297.1,
        "reb": 112.9,
        "ast": 61.8,
        "stl": 22.09,
        "blk": 13.84,
        "tpm": 34.4,
        "to": 34.2,
        "fgPct": 46.5,
        "ftPct": 78.3
      },
      "rank": {
        "pts": 9,
        "reb": 10,
        "ast": 11,
        "stl": 8,
        "blk": 7,
        "tpm": 8,
        "fgPct": 10,
        "ftPct": 6,
        "to": 3
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
        "pts": 354.4,
        "reb": 127.7,
        "ast": 97.4,
        "stl": 27.96,
        "blk": 15.36,
        "tpm": 38.8,
        "to": 45.4,
        "fgPct": 47.4,
        "ftPct": 77.7
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 2,
        "blk": 5,
        "tpm": 5,
        "fgPct": 7,
        "ftPct": 8,
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
        "pts": 278.4,
        "reb": 87.9,
        "ast": 62.7,
        "stl": 19.51,
        "blk": 9.56,
        "tpm": 32.7,
        "to": 33.2,
        "fgPct": 45,
        "ftPct": 75.3
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 10,
        "stl": 12,
        "blk": 12,
        "tpm": 10,
        "fgPct": 12,
        "ftPct": 11,
        "to": 2
      },
      "includedCount": 25,
      "projCount": 24,
      "skippedCount": 3,
      "skippedPlayers": [
        "Ben Simmons",
        "Adam Flagler",
        "Mario Hezonja"
      ]
    }
  ]
};
