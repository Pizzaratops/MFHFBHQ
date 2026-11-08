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
  "generatedAt": "2026-11-08T04:01:17.896Z",
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
        "pts": 444.2,
        "reb": 161.7,
        "ast": 107.4,
        "stl": 30.03,
        "blk": 19.09,
        "tpm": 40.5,
        "to": 56.7,
        "fgPct": 48,
        "ftPct": 79
      },
      "rank": {
        "pts": 1,
        "reb": 1,
        "ast": 1,
        "stl": 1,
        "blk": 2,
        "tpm": 3,
        "fgPct": 3,
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
        "pts": 313.8,
        "reb": 120.8,
        "ast": 73.3,
        "stl": 22.15,
        "blk": 14.72,
        "tpm": 38.1,
        "to": 39.3,
        "fgPct": 47.3,
        "ftPct": 78.7
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
        "pts": 341.7,
        "reb": 115.7,
        "ast": 79.9,
        "stl": 25.7,
        "blk": 13.04,
        "tpm": 44.7,
        "to": 39.9,
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
        "fgPct": 11,
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
        "pts": 378.6,
        "reb": 128,
        "ast": 86.1,
        "stl": 24.98,
        "blk": 12.16,
        "tpm": 47.9,
        "to": 46.3,
        "fgPct": 46.1,
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
        "pts": 301.4,
        "reb": 109.9,
        "ast": 68,
        "stl": 20.51,
        "blk": 11.33,
        "tpm": 33.8,
        "to": 36.2,
        "fgPct": 46.8,
        "ftPct": 81.4
      },
      "rank": {
        "pts": 8,
        "reb": 11,
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
        "pts": 279.4,
        "reb": 116.2,
        "ast": 59.1,
        "stl": 20.96,
        "blk": 15.22,
        "tpm": 35.4,
        "to": 35.7,
        "fgPct": 46.8,
        "ftPct": 76.7
      },
      "rank": {
        "pts": 11,
        "reb": 7,
        "ast": 12,
        "stl": 10,
        "blk": 4,
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
        "pts": 333.3,
        "reb": 147.3,
        "ast": 80.6,
        "stl": 23.66,
        "blk": 19.24,
        "tpm": 33,
        "to": 43.6,
        "fgPct": 47.8,
        "ftPct": 76.5
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 4,
        "stl": 5,
        "blk": 1,
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
        "pts": 324.7,
        "reb": 155.1,
        "ast": 77,
        "stl": 22.65,
        "blk": 17.59,
        "tpm": 32.5,
        "to": 41.7,
        "fgPct": 48.2,
        "ftPct": 75.9
      },
      "rank": {
        "pts": 6,
        "reb": 2,
        "ast": 6,
        "stl": 7,
        "blk": 3,
        "tpm": 9,
        "fgPct": 1,
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
        "pts": 290.2,
        "reb": 110.4,
        "ast": 63.8,
        "stl": 22.79,
        "blk": 12.09,
        "tpm": 29.9,
        "to": 33.9,
        "fgPct": 48.2,
        "ftPct": 77.5
      },
      "rank": {
        "pts": 9,
        "reb": 10,
        "ast": 10,
        "stl": 6,
        "blk": 10,
        "tpm": 10,
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
        "pts": 282,
        "reb": 115.4,
        "ast": 66.4,
        "stl": 20.98,
        "blk": 14.86,
        "tpm": 29.9,
        "to": 37.3,
        "fgPct": 47.1,
        "ftPct": 78.3
      },
      "rank": {
        "pts": 10,
        "reb": 9,
        "ast": 9,
        "stl": 9,
        "blk": 5,
        "tpm": 11,
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
        "pts": 356.1,
        "reb": 123,
        "ast": 89.8,
        "stl": 25.48,
        "blk": 14.5,
        "tpm": 39,
        "to": 46.8,
        "fgPct": 47,
        "ftPct": 79.1
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
        "pts": 254.5,
        "reb": 86,
        "ast": 59.5,
        "stl": 18.15,
        "blk": 9.44,
        "tpm": 29.9,
        "to": 35.5,
        "fgPct": 45.9,
        "ftPct": 78.4
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 11,
        "stl": 12,
        "blk": 12,
        "tpm": 12,
        "fgPct": 12,
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
