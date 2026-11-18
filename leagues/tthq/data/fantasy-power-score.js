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
  "generatedAt": "2026-11-18T03:01:27.681Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 15 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 441.9,
        "reb": 164.3,
        "ast": 106,
        "stl": 29.33,
        "blk": 19.81,
        "tpm": 40.4,
        "to": 55.6,
        "fgPct": 48,
        "ftPct": 78.8
      },
      "rank": {
        "pts": 1,
        "reb": 1,
        "ast": 1,
        "stl": 1,
        "blk": 1,
        "tpm": 3,
        "fgPct": 1,
        "ftPct": 4,
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
        "pts": 322.8,
        "reb": 121.1,
        "ast": 75.9,
        "stl": 23.07,
        "blk": 14.85,
        "tpm": 40.3,
        "to": 40.8,
        "fgPct": 46.5,
        "ftPct": 78.1
      },
      "rank": {
        "pts": 7,
        "reb": 6,
        "ast": 7,
        "stl": 7,
        "blk": 6,
        "tpm": 4,
        "fgPct": 9,
        "ftPct": 7,
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
        "pts": 349.1,
        "reb": 114.5,
        "ast": 79.8,
        "stl": 26.29,
        "blk": 12.79,
        "tpm": 45.4,
        "to": 38.9,
        "fgPct": 45.7,
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
        "pts": 374.4,
        "reb": 129.7,
        "ast": 84.3,
        "stl": 24.01,
        "blk": 13.69,
        "tpm": 47.3,
        "to": 44,
        "fgPct": 46.1,
        "ftPct": 80.9
      },
      "rank": {
        "pts": 2,
        "reb": 4,
        "ast": 3,
        "stl": 4,
        "blk": 8,
        "tpm": 1,
        "fgPct": 11,
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
        "pts": 304.2,
        "reb": 108.8,
        "ast": 65.5,
        "stl": 20.24,
        "blk": 11.14,
        "tpm": 34,
        "to": 35.6,
        "fgPct": 46.9,
        "ftPct": 81.4
      },
      "rank": {
        "pts": 8,
        "reb": 10,
        "ast": 9,
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
        "pts": 278.4,
        "reb": 114.4,
        "ast": 58.7,
        "stl": 20.58,
        "blk": 15.27,
        "tpm": 35.1,
        "to": 34.7,
        "fgPct": 46.6,
        "ftPct": 76.2
      },
      "rank": {
        "pts": 11,
        "reb": 9,
        "ast": 11,
        "stl": 10,
        "blk": 5,
        "tpm": 6,
        "fgPct": 7,
        "ftPct": 12,
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
        "pts": 334.9,
        "reb": 145.5,
        "ast": 80.2,
        "stl": 23.52,
        "blk": 19.1,
        "tpm": 33.1,
        "to": 43.3,
        "fgPct": 47.7,
        "ftPct": 76.3
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 4,
        "stl": 5,
        "blk": 2,
        "tpm": 9,
        "fgPct": 3,
        "ftPct": 10,
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
        "pts": 323.1,
        "reb": 150,
        "ast": 76,
        "stl": 23.18,
        "blk": 17.45,
        "tpm": 33.7,
        "to": 41.2,
        "fgPct": 47.9,
        "ftPct": 76.3
      },
      "rank": {
        "pts": 6,
        "reb": 2,
        "ast": 6,
        "stl": 6,
        "blk": 3,
        "tpm": 8,
        "fgPct": 2,
        "ftPct": 11,
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
        "pts": 286.9,
        "reb": 107.3,
        "ast": 62.8,
        "stl": 22.23,
        "blk": 11.96,
        "tpm": 29.8,
        "to": 33.7,
        "fgPct": 47.7,
        "ftPct": 77.8
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 10,
        "stl": 8,
        "blk": 10,
        "tpm": 12,
        "fgPct": 4,
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
        "pts": 292.9,
        "reb": 119.3,
        "ast": 67.3,
        "stl": 21.05,
        "blk": 15.38,
        "tpm": 32.3,
        "to": 38.3,
        "fgPct": 47,
        "ftPct": 77.8
      },
      "rank": {
        "pts": 9,
        "reb": 7,
        "ast": 8,
        "stl": 9,
        "blk": 4,
        "tpm": 10,
        "fgPct": 5,
        "ftPct": 9,
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
        "pts": 350.4,
        "reb": 121.9,
        "ast": 88.8,
        "stl": 25.04,
        "blk": 14.67,
        "tpm": 38.7,
        "to": 45.6,
        "fgPct": 46.6,
        "ftPct": 78.5
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 3,
        "blk": 7,
        "tpm": 5,
        "fgPct": 8,
        "ftPct": 5,
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
        "pts": 258.1,
        "reb": 85.3,
        "ast": 58.4,
        "stl": 17.94,
        "blk": 9.82,
        "tpm": 30,
        "to": 35,
        "fgPct": 46.3,
        "ftPct": 78.4
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 11,
        "fgPct": 10,
        "ftPct": 6,
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
