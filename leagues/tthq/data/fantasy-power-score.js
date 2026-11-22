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
  "generatedAt": "2026-11-22T03:01:23.018Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 17 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 431.8,
        "reb": 161.3,
        "ast": 101.3,
        "stl": 28.6,
        "blk": 18.93,
        "tpm": 41.1,
        "to": 53.9,
        "fgPct": 48,
        "ftPct": 78.5
      },
      "rank": {
        "pts": 1,
        "reb": 1,
        "ast": 1,
        "stl": 1,
        "blk": 2,
        "tpm": 3,
        "fgPct": 1,
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
        "pts": 325.1,
        "reb": 119,
        "ast": 74.9,
        "stl": 22.75,
        "blk": 14.69,
        "tpm": 40.8,
        "to": 40.8,
        "fgPct": 46.8,
        "ftPct": 78.2
      },
      "rank": {
        "pts": 6,
        "reb": 6,
        "ast": 6,
        "stl": 6,
        "blk": 6,
        "tpm": 4,
        "fgPct": 7,
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
        "pts": 345.7,
        "reb": 113,
        "ast": 78.7,
        "stl": 26.15,
        "blk": 12.65,
        "tpm": 45.3,
        "to": 38.4,
        "fgPct": 45.7,
        "ftPct": 78.9
      },
      "rank": {
        "pts": 4,
        "reb": 9,
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
        "pts": 377.1,
        "reb": 130.3,
        "ast": 86.1,
        "stl": 24.59,
        "blk": 13.58,
        "tpm": 47.7,
        "to": 44.2,
        "fgPct": 46.3,
        "ftPct": 81
      },
      "rank": {
        "pts": 2,
        "reb": 4,
        "ast": 3,
        "stl": 4,
        "blk": 8,
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
        "pts": 303.7,
        "reb": 108.6,
        "ast": 66.5,
        "stl": 19.82,
        "blk": 11.29,
        "tpm": 34,
        "to": 35.1,
        "fgPct": 46.9,
        "ftPct": 81.5
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
        "to": 3
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
        "pts": 278.1,
        "reb": 115.4,
        "ast": 59.3,
        "stl": 20,
        "blk": 15.43,
        "tpm": 35.1,
        "to": 35.1,
        "fgPct": 46.5,
        "ftPct": 76.1
      },
      "rank": {
        "pts": 11,
        "reb": 8,
        "ast": 11,
        "stl": 10,
        "blk": 4,
        "tpm": 6,
        "fgPct": 9,
        "ftPct": 12,
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
        "pts": 336.9,
        "reb": 145.1,
        "ast": 81.1,
        "stl": 23.03,
        "blk": 19.14,
        "tpm": 33.6,
        "to": 43.9,
        "fgPct": 47.8,
        "ftPct": 76.2
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 4,
        "stl": 5,
        "blk": 1,
        "tpm": 8,
        "fgPct": 3,
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
        "pts": 319.4,
        "reb": 146.7,
        "ast": 74,
        "stl": 22.16,
        "blk": 16.98,
        "tpm": 33.1,
        "to": 41.5,
        "fgPct": 48,
        "ftPct": 76.3
      },
      "rank": {
        "pts": 7,
        "reb": 2,
        "ast": 7,
        "stl": 8,
        "blk": 3,
        "tpm": 9,
        "fgPct": 2,
        "ftPct": 10,
        "to": 8
      },
      "includedCount": 27,
      "projCount": 27,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 9,
      "name": "Cooking Show",
      "owner": "Stefan Estepham",
      "values": {
        "pts": 289.7,
        "reb": 107,
        "ast": 62.9,
        "stl": 22.21,
        "blk": 11.99,
        "tpm": 29.9,
        "to": 34,
        "fgPct": 47.8,
        "ftPct": 77.7
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 10,
        "stl": 7,
        "blk": 10,
        "tpm": 12,
        "fgPct": 4,
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
        "pts": 297.2,
        "reb": 116.9,
        "ast": 67.7,
        "stl": 21.82,
        "blk": 15.06,
        "tpm": 32.9,
        "to": 38.3,
        "fgPct": 47,
        "ftPct": 77.8
      },
      "rank": {
        "pts": 9,
        "reb": 7,
        "ast": 8,
        "stl": 9,
        "blk": 5,
        "tpm": 10,
        "fgPct": 5,
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
        "pts": 350.8,
        "reb": 121.1,
        "ast": 88.4,
        "stl": 25,
        "blk": 14.63,
        "tpm": 39,
        "to": 45.2,
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
        "pts": 259.5,
        "reb": 84.5,
        "ast": 58.7,
        "stl": 18.11,
        "blk": 9.51,
        "tpm": 30.1,
        "to": 34.5,
        "fgPct": 46.1,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 11,
        "fgPct": 11,
        "ftPct": 4,
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
