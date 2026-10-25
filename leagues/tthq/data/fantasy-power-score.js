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
  "generatedAt": "2026-10-25T18:01:25.914Z",
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
        "pts": 437.7,
        "reb": 164.1,
        "ast": 101.5,
        "stl": 29.01,
        "blk": 19.4,
        "tpm": 40.3,
        "to": 55.4,
        "fgPct": 47.8,
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
        "pts": 333.8,
        "reb": 129.9,
        "ast": 75.3,
        "stl": 23.86,
        "blk": 17.1,
        "tpm": 38.8,
        "to": 41.1,
        "fgPct": 47.7,
        "ftPct": 78.1
      },
      "rank": {
        "pts": 5,
        "reb": 4,
        "ast": 7,
        "stl": 4,
        "blk": 4,
        "tpm": 4,
        "fgPct": 5,
        "ftPct": 8,
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
        "pts": 338.5,
        "reb": 112.4,
        "ast": 75.4,
        "stl": 23.65,
        "blk": 11.62,
        "tpm": 42.2,
        "to": 36.1,
        "fgPct": 46.7,
        "ftPct": 80.9
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
        "pts": 361.8,
        "reb": 120.5,
        "ast": 78.1,
        "stl": 21.23,
        "blk": 11.41,
        "tpm": 44.3,
        "to": 40.2,
        "fgPct": 46.4,
        "ftPct": 81.1
      },
      "rank": {
        "pts": 2,
        "reb": 6,
        "ast": 4,
        "stl": 10,
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
        "pts": 323.1,
        "reb": 119.1,
        "ast": 72.8,
        "stl": 21.84,
        "blk": 11.95,
        "tpm": 37.6,
        "to": 37.5,
        "fgPct": 47.5,
        "ftPct": 80.8
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
        "pts": 275.5,
        "reb": 114.4,
        "ast": 60.3,
        "stl": 21.51,
        "blk": 14.78,
        "tpm": 36,
        "to": 34.8,
        "fgPct": 46.7,
        "ftPct": 77.1
      },
      "rank": {
        "pts": 11,
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
        "pts": 330.1,
        "reb": 141.4,
        "ast": 78.5,
        "stl": 22.84,
        "blk": 18.44,
        "tpm": 31.8,
        "to": 42.2,
        "fgPct": 47.8,
        "ftPct": 76.7
      },
      "rank": {
        "pts": 6,
        "reb": 3,
        "ast": 3,
        "stl": 6,
        "blk": 2,
        "tpm": 9,
        "fgPct": 4,
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
        "pts": 315.5,
        "reb": 153.1,
        "ast": 77.8,
        "stl": 24.16,
        "blk": 18.15,
        "tpm": 31,
        "to": 40.7,
        "fgPct": 48.4,
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
        "pts": 292.8,
        "reb": 109.5,
        "ast": 62.2,
        "stl": 22.61,
        "blk": 12.05,
        "tpm": 29.2,
        "to": 32.8,
        "fgPct": 49,
        "ftPct": 77.9
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
        "pts": 279.8,
        "reb": 108.1,
        "ast": 60.6,
        "stl": 20.97,
        "blk": 13.4,
        "tpm": 31.2,
        "to": 34.2,
        "fgPct": 46.4,
        "ftPct": 78.3
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 11,
        "stl": 11,
        "blk": 7,
        "tpm": 10,
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
        "pts": 343.8,
        "reb": 122.2,
        "ast": 91.6,
        "stl": 27.16,
        "blk": 14.68,
        "tpm": 35.5,
        "to": 44.1,
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
        "pts": 274.2,
        "reb": 85.1,
        "ast": 60.9,
        "stl": 19.26,
        "blk": 9.29,
        "tpm": 32.2,
        "to": 35.1,
        "fgPct": 46.6,
        "ftPct": 78.9
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 10,
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
