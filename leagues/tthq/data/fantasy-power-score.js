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
  "generatedAt": "2026-10-20T13:31:09.604Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, noch ohne Saisonspiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 440.8,
        "reb": 160.4,
        "ast": 101.3,
        "stl": 28.75,
        "blk": 19.73,
        "tpm": 40,
        "to": 53.2,
        "fgPct": 48.5,
        "ftPct": 78.5
      },
      "rank": {
        "pts": 1,
        "reb": 1,
        "ast": 1,
        "stl": 1,
        "blk": 1,
        "tpm": 4,
        "fgPct": 2,
        "ftPct": 5,
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
        "pts": 339,
        "reb": 129.1,
        "ast": 75.3,
        "stl": 23.78,
        "blk": 16.7,
        "tpm": 40.1,
        "to": 39.9,
        "fgPct": 47.7,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 4,
        "reb": 4,
        "ast": 8,
        "stl": 4,
        "blk": 4,
        "tpm": 3,
        "fgPct": 5,
        "ftPct": 4,
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
        "pts": 338.6,
        "reb": 115.1,
        "ast": 77.4,
        "stl": 22.92,
        "blk": 11.6,
        "tpm": 42.6,
        "to": 36.3,
        "fgPct": 46.8,
        "ftPct": 80.8
      },
      "rank": {
        "pts": 5,
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
        "pts": 363.8,
        "reb": 120.3,
        "ast": 80.4,
        "stl": 21.4,
        "blk": 11.39,
        "tpm": 45.4,
        "to": 39.3,
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
        "pts": 332.3,
        "reb": 120.4,
        "ast": 75.5,
        "stl": 22.06,
        "blk": 12.17,
        "tpm": 38.3,
        "to": 36.9,
        "fgPct": 47.7,
        "ftPct": 81
      },
      "rank": {
        "pts": 7,
        "reb": 6,
        "ast": 7,
        "stl": 10,
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
        "pts": 283.3,
        "reb": 116.8,
        "ast": 64.6,
        "stl": 22.11,
        "blk": 15.01,
        "tpm": 36.2,
        "to": 35.3,
        "fgPct": 46.5,
        "ftPct": 78.1
      },
      "rank": {
        "pts": 11,
        "reb": 8,
        "ast": 10,
        "stl": 9,
        "blk": 6,
        "tpm": 7,
        "fgPct": 10,
        "ftPct": 7,
        "to": 4
      },
      "includedCount": 27,
      "projCount": 25,
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
        "pts": 336.7,
        "reb": 140.3,
        "ast": 79,
        "stl": 22.84,
        "blk": 18.69,
        "tpm": 32.4,
        "to": 40.6,
        "fgPct": 48.3,
        "ftPct": 77.1
      },
      "rank": {
        "pts": 6,
        "reb": 3,
        "ast": 5,
        "stl": 6,
        "blk": 2,
        "tpm": 10,
        "fgPct": 3,
        "ftPct": 10,
        "to": 9
      },
      "includedCount": 26,
      "projCount": 26,
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
        "pts": 331.3,
        "reb": 158.9,
        "ast": 79.5,
        "stl": 25.01,
        "blk": 18.58,
        "tpm": 33.2,
        "to": 41.7,
        "fgPct": 48.2,
        "ftPct": 75
      },
      "rank": {
        "pts": 8,
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
        "pts": 299.5,
        "reb": 113,
        "ast": 65.8,
        "stl": 22.43,
        "blk": 12.27,
        "tpm": 30.5,
        "to": 33,
        "fgPct": 48.7,
        "ftPct": 78
      },
      "rank": {
        "pts": 9,
        "reb": 11,
        "ast": 9,
        "stl": 7,
        "blk": 8,
        "tpm": 12,
        "fgPct": 1,
        "ftPct": 8,
        "to": 2
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
        "pts": 299.1,
        "reb": 113.2,
        "ast": 62.5,
        "stl": 22.13,
        "blk": 13.84,
        "tpm": 34.3,
        "to": 34.3,
        "fgPct": 46.6,
        "ftPct": 78.3
      },
      "rank": {
        "pts": 10,
        "reb": 10,
        "ast": 11,
        "stl": 8,
        "blk": 7,
        "tpm": 8,
        "fgPct": 9,
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
        "pts": 357.5,
        "reb": 127.6,
        "ast": 96.6,
        "stl": 28.04,
        "blk": 15.37,
        "tpm": 39.1,
        "to": 45.8,
        "fgPct": 47.6,
        "ftPct": 77.8
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 2,
        "blk": 5,
        "tpm": 5,
        "fgPct": 7,
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
        "pts": 273.2,
        "reb": 85.3,
        "ast": 62.3,
        "stl": 18.65,
        "blk": 9.22,
        "tpm": 31.6,
        "to": 32.9,
        "fgPct": 45.1,
        "ftPct": 75.2
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 11,
        "fgPct": 12,
        "ftPct": 11,
        "to": 1
      },
      "includedCount": 24,
      "projCount": 23,
      "skippedCount": 2,
      "skippedPlayers": [
        "Ben Simmons",
        "Adam Flagler"
      ]
    }
  ]
};
