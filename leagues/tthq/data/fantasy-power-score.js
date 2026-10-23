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
  "generatedAt": "2026-10-23T12:51:00.973Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 2 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 446.9,
        "reb": 165.2,
        "ast": 100.3,
        "stl": 29.16,
        "blk": 19.7,
        "tpm": 40.1,
        "to": 55,
        "fgPct": 48.3,
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
      "projCount": 28,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 2,
      "name": "Seagulls",
      "owner": "Möwe",
      "values": {
        "pts": 335.4,
        "reb": 132,
        "ast": 75,
        "stl": 24.28,
        "blk": 17.45,
        "tpm": 38.8,
        "to": 41,
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
        "fgPct": 5,
        "ftPct": 6,
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
        "pts": 338.7,
        "reb": 113,
        "ast": 76.4,
        "stl": 23.06,
        "blk": 11.59,
        "tpm": 42.1,
        "to": 36.1,
        "fgPct": 46.7,
        "ftPct": 80.4
      },
      "rank": {
        "pts": 4,
        "reb": 9,
        "ast": 6,
        "stl": 5,
        "blk": 10,
        "tpm": 2,
        "fgPct": 9,
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
        "pts": 360.8,
        "reb": 120.3,
        "ast": 78.2,
        "stl": 21.05,
        "blk": 11.36,
        "tpm": 44.2,
        "to": 40.1,
        "fgPct": 46.4,
        "ftPct": 81
      },
      "rank": {
        "pts": 2,
        "reb": 6,
        "ast": 5,
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
        "pts": 323.9,
        "reb": 119,
        "ast": 72.4,
        "stl": 22.13,
        "blk": 11.9,
        "tpm": 37.3,
        "to": 36.7,
        "fgPct": 47.4,
        "ftPct": 80.8
      },
      "rank": {
        "pts": 7,
        "reb": 7,
        "ast": 8,
        "stl": 8,
        "blk": 9,
        "tpm": 5,
        "fgPct": 7,
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
        "pts": 276.5,
        "reb": 115.2,
        "ast": 61.5,
        "stl": 21.68,
        "blk": 14.8,
        "tpm": 35.4,
        "to": 34.4,
        "fgPct": 46.8,
        "ftPct": 77.4
      },
      "rank": {
        "pts": 11,
        "reb": 8,
        "ast": 11,
        "stl": 10,
        "blk": 6,
        "tpm": 7,
        "fgPct": 8,
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
        "pts": 331,
        "reb": 141.4,
        "ast": 78.4,
        "stl": 23.03,
        "blk": 18.41,
        "tpm": 31.8,
        "to": 41.2,
        "fgPct": 48,
        "ftPct": 77
      },
      "rank": {
        "pts": 6,
        "reb": 3,
        "ast": 4,
        "stl": 6,
        "blk": 3,
        "tpm": 9,
        "fgPct": 4,
        "ftPct": 11,
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
        "pts": 322.1,
        "reb": 158.9,
        "ast": 79.6,
        "stl": 24.98,
        "blk": 18.8,
        "tpm": 31.8,
        "to": 41.4,
        "fgPct": 48.2,
        "ftPct": 75.2
      },
      "rank": {
        "pts": 8,
        "reb": 2,
        "ast": 3,
        "stl": 3,
        "blk": 2,
        "tpm": 10,
        "fgPct": 3,
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
        "pts": 291.5,
        "reb": 108.8,
        "ast": 62.9,
        "stl": 22.3,
        "blk": 11.99,
        "tpm": 29.7,
        "to": 32.7,
        "fgPct": 48.7,
        "ftPct": 78.1
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 9,
        "stl": 7,
        "blk": 8,
        "tpm": 12,
        "fgPct": 1,
        "ftPct": 8,
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
        "pts": 292.7,
        "reb": 111.2,
        "ast": 60.9,
        "stl": 21.77,
        "blk": 13.79,
        "tpm": 33.7,
        "to": 33.8,
        "fgPct": 46.4,
        "ftPct": 78.2
      },
      "rank": {
        "pts": 9,
        "reb": 10,
        "ast": 12,
        "stl": 9,
        "blk": 7,
        "tpm": 8,
        "fgPct": 12,
        "ftPct": 7,
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
        "pts": 342.4,
        "reb": 122.8,
        "ast": 91.2,
        "stl": 26.56,
        "blk": 14.82,
        "tpm": 35.9,
        "to": 44.4,
        "fgPct": 47.5,
        "ftPct": 77.8
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 2,
        "blk": 5,
        "tpm": 6,
        "fgPct": 6,
        "ftPct": 9,
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
        "pts": 275.7,
        "reb": 85.5,
        "ast": 61.7,
        "stl": 19.5,
        "blk": 9.14,
        "tpm": 31.8,
        "to": 34.4,
        "fgPct": 46.7,
        "ftPct": 78.7
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 10,
        "stl": 12,
        "blk": 12,
        "tpm": 11,
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
