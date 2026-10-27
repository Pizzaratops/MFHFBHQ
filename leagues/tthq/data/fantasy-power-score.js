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
  "generatedAt": "2026-10-27T01:01:12.973Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 4 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 439.3,
        "reb": 163.6,
        "ast": 100.8,
        "stl": 29.12,
        "blk": 19.21,
        "tpm": 40.8,
        "to": 55.5,
        "fgPct": 47.9,
        "ftPct": 78.8
      },
      "rank": {
        "pts": 1,
        "reb": 1,
        "ast": 1,
        "stl": 1,
        "blk": 1,
        "tpm": 3,
        "fgPct": 3,
        "ftPct": 4,
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
        "pts": 332.8,
        "reb": 129,
        "ast": 75.4,
        "stl": 24.44,
        "blk": 16.68,
        "tpm": 38.8,
        "to": 41.7,
        "fgPct": 47.7,
        "ftPct": 77.9
      },
      "rank": {
        "pts": 6,
        "reb": 4,
        "ast": 7,
        "stl": 4,
        "blk": 4,
        "tpm": 4,
        "fgPct": 4,
        "ftPct": 9,
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
        "pts": 353.2,
        "reb": 118.8,
        "ast": 78.4,
        "stl": 26.99,
        "blk": 12.47,
        "tpm": 45.3,
        "to": 38.9,
        "fgPct": 46.3,
        "ftPct": 80.2
      },
      "rank": {
        "pts": 3,
        "reb": 7,
        "ast": 6,
        "stl": 2,
        "blk": 8,
        "tpm": 1,
        "fgPct": 9,
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
        "pts": 363.1,
        "reb": 121.5,
        "ast": 78.9,
        "stl": 21.94,
        "blk": 11.3,
        "tpm": 44.3,
        "to": 42,
        "fgPct": 46.2,
        "ftPct": 81.2
      },
      "rank": {
        "pts": 2,
        "reb": 5,
        "ast": 5,
        "stl": 8,
        "blk": 11,
        "tpm": 2,
        "fgPct": 12,
        "ftPct": 1,
        "to": 8
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
        "pts": 321.1,
        "reb": 117,
        "ast": 71.8,
        "stl": 21.11,
        "blk": 11.64,
        "tpm": 37.3,
        "to": 37.4,
        "fgPct": 47.1,
        "ftPct": 80.7
      },
      "rank": {
        "pts": 8,
        "reb": 8,
        "ast": 8,
        "stl": 11,
        "blk": 10,
        "tpm": 5,
        "fgPct": 7,
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
        "pts": 278.5,
        "reb": 114.7,
        "ast": 61.1,
        "stl": 21.44,
        "blk": 14.67,
        "tpm": 36.2,
        "to": 35,
        "fgPct": 46.7,
        "ftPct": 77.1
      },
      "rank": {
        "pts": 11,
        "reb": 9,
        "ast": 11,
        "stl": 9,
        "blk": 6,
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
        "pts": 333.3,
        "reb": 140.7,
        "ast": 79.4,
        "stl": 23.02,
        "blk": 18.24,
        "tpm": 32.6,
        "to": 43.5,
        "fgPct": 47.6,
        "ftPct": 76.7
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 3,
        "stl": 6,
        "blk": 3,
        "tpm": 10,
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
        "pts": 324.4,
        "reb": 156,
        "ast": 79.3,
        "stl": 24.24,
        "blk": 18.46,
        "tpm": 32.8,
        "to": 42.4,
        "fgPct": 48,
        "ftPct": 75.6
      },
      "rank": {
        "pts": 7,
        "reb": 2,
        "ast": 4,
        "stl": 5,
        "blk": 2,
        "tpm": 9,
        "fgPct": 2,
        "ftPct": 12,
        "to": 9
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
        "pts": 291.5,
        "reb": 108.8,
        "ast": 62.2,
        "stl": 22.37,
        "blk": 11.88,
        "tpm": 29,
        "to": 33.2,
        "fgPct": 48.7,
        "ftPct": 78
      },
      "rank": {
        "pts": 9,
        "reb": 10,
        "ast": 10,
        "stl": 7,
        "blk": 9,
        "tpm": 12,
        "fgPct": 1,
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
        "pts": 288.2,
        "reb": 108.5,
        "ast": 63.5,
        "stl": 21.42,
        "blk": 13.25,
        "tpm": 33.6,
        "to": 35.2,
        "fgPct": 46.3,
        "ftPct": 78.8
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 9,
        "stl": 10,
        "blk": 7,
        "tpm": 8,
        "fgPct": 10,
        "ftPct": 5,
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
        "pts": 344.5,
        "reb": 121.2,
        "ast": 92.4,
        "stl": 26.55,
        "blk": 14.7,
        "tpm": 35.9,
        "to": 44.8,
        "fgPct": 47.3,
        "ftPct": 78.2
      },
      "rank": {
        "pts": 4,
        "reb": 6,
        "ast": 2,
        "stl": 3,
        "blk": 5,
        "tpm": 7,
        "fgPct": 6,
        "ftPct": 7,
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
        "pts": 275.1,
        "reb": 87.2,
        "ast": 61.1,
        "stl": 19.81,
        "blk": 9.52,
        "tpm": 32,
        "to": 36,
        "fgPct": 46.3,
        "ftPct": 78.7
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
