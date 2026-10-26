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
  "generatedAt": "2026-10-26T01:01:32.437Z",
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
        "pts": 438.2,
        "reb": 164,
        "ast": 101.3,
        "stl": 29.06,
        "blk": 19.38,
        "tpm": 40.5,
        "to": 55.3,
        "fgPct": 47.8,
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
        "pts": 334.1,
        "reb": 129.7,
        "ast": 75.1,
        "stl": 23.85,
        "blk": 17.01,
        "tpm": 38.7,
        "to": 41.2,
        "fgPct": 47.8,
        "ftPct": 78.1
      },
      "rank": {
        "pts": 5,
        "reb": 4,
        "ast": 6,
        "stl": 4,
        "blk": 4,
        "tpm": 4,
        "fgPct": 4,
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
        "pts": 338.1,
        "reb": 112.3,
        "ast": 75.1,
        "stl": 23.72,
        "blk": 11.63,
        "tpm": 42.6,
        "to": 36,
        "fgPct": 46.7,
        "ftPct": 80.9
      },
      "rank": {
        "pts": 4,
        "reb": 9,
        "ast": 7,
        "stl": 5,
        "blk": 10,
        "tpm": 2,
        "fgPct": 9,
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
        "pts": 360.5,
        "reb": 120.2,
        "ast": 78.3,
        "stl": 21.21,
        "blk": 11.38,
        "tpm": 44.1,
        "to": 40.3,
        "fgPct": 46.3,
        "ftPct": 81.1
      },
      "rank": {
        "pts": 2,
        "reb": 6,
        "ast": 4,
        "stl": 10,
        "blk": 11,
        "tpm": 1,
        "fgPct": 12,
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
        "pts": 322.7,
        "reb": 119,
        "ast": 72.8,
        "stl": 21.77,
        "blk": 11.99,
        "tpm": 37.8,
        "to": 37.3,
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
        "pts": 275,
        "reb": 114.5,
        "ast": 60.4,
        "stl": 21.45,
        "blk": 14.81,
        "tpm": 35.7,
        "to": 34.7,
        "fgPct": 46.8,
        "ftPct": 77.1
      },
      "rank": {
        "pts": 11,
        "reb": 8,
        "ast": 11,
        "stl": 9,
        "blk": 5,
        "tpm": 6,
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
        "pts": 328.8,
        "reb": 139.9,
        "ast": 78.6,
        "stl": 22.86,
        "blk": 18.37,
        "tpm": 31.7,
        "to": 42.1,
        "fgPct": 47.8,
        "ftPct": 76.7
      },
      "rank": {
        "pts": 6,
        "reb": 3,
        "ast": 3,
        "stl": 6,
        "blk": 2,
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
        "pts": 317.7,
        "reb": 152.9,
        "ast": 77.8,
        "stl": 24.16,
        "blk": 18.11,
        "tpm": 31.5,
        "to": 40.7,
        "fgPct": 48.5,
        "ftPct": 75.5
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
        "pts": 292,
        "reb": 109.1,
        "ast": 62,
        "stl": 22.62,
        "blk": 12.03,
        "tpm": 29.1,
        "to": 32.7,
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
        "pts": 281.1,
        "reb": 108,
        "ast": 60.6,
        "stl": 20.72,
        "blk": 13.41,
        "tpm": 31.8,
        "to": 33.4,
        "fgPct": 46.6,
        "ftPct": 78.5
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 10,
        "stl": 11,
        "blk": 7,
        "tpm": 9,
        "fgPct": 10,
        "ftPct": 6,
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
        "pts": 343.6,
        "reb": 121.8,
        "ast": 91.6,
        "stl": 27.07,
        "blk": 14.67,
        "tpm": 35.6,
        "to": 43.9,
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
        "pts": 272.7,
        "reb": 84.2,
        "ast": 60.1,
        "stl": 19.18,
        "blk": 9.21,
        "tpm": 32,
        "to": 35.1,
        "fgPct": 46.6,
        "ftPct": 78.9
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 8,
        "fgPct": 11,
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
