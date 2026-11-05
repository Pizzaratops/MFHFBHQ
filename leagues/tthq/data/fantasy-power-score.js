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
  "generatedAt": "2026-11-05T06:01:21.108Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 9 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 443.2,
        "reb": 161.5,
        "ast": 107.3,
        "stl": 29.99,
        "blk": 19.25,
        "tpm": 40,
        "to": 56.9,
        "fgPct": 48,
        "ftPct": 78.9
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
      "projCount": 27,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 2,
      "name": "Seagulls",
      "owner": "Möwe",
      "values": {
        "pts": 319.7,
        "reb": 128.3,
        "ast": 75.2,
        "stl": 23.06,
        "blk": 15.66,
        "tpm": 38.2,
        "to": 40.9,
        "fgPct": 47.5,
        "ftPct": 78.5
      },
      "rank": {
        "pts": 7,
        "reb": 4,
        "ast": 7,
        "stl": 6,
        "blk": 4,
        "tpm": 5,
        "fgPct": 5,
        "ftPct": 6,
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
        "pts": 348.4,
        "reb": 116.7,
        "ast": 80.3,
        "stl": 26.36,
        "blk": 13.17,
        "tpm": 45.1,
        "to": 39.9,
        "fgPct": 46.1,
        "ftPct": 79.6
      },
      "rank": {
        "pts": 4,
        "reb": 7,
        "ast": 4,
        "stl": 2,
        "blk": 8,
        "tpm": 2,
        "fgPct": 11,
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
        "pts": 369.2,
        "reb": 124.9,
        "ast": 82.3,
        "stl": 24.21,
        "blk": 11.87,
        "tpm": 47.5,
        "to": 44.2,
        "fgPct": 46.2,
        "ftPct": 81.2
      },
      "rank": {
        "pts": 2,
        "reb": 5,
        "ast": 3,
        "stl": 4,
        "blk": 10,
        "tpm": 1,
        "fgPct": 10,
        "ftPct": 2,
        "to": 10
      },
      "includedCount": 27,
      "projCount": 27,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 5,
      "name": "Anadolu Ballers",
      "owner": "Murat Oguz",
      "values": {
        "pts": 308.2,
        "reb": 110.6,
        "ast": 69.3,
        "stl": 20.74,
        "blk": 11.4,
        "tpm": 34.5,
        "to": 36.8,
        "fgPct": 47.1,
        "ftPct": 81.5
      },
      "rank": {
        "pts": 8,
        "reb": 10,
        "ast": 8,
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
        "pts": 280,
        "reb": 116.5,
        "ast": 58.4,
        "stl": 21.15,
        "blk": 15.3,
        "tpm": 34.9,
        "to": 35.3,
        "fgPct": 46.9,
        "ftPct": 76.8
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
        "pts": 332,
        "reb": 146.3,
        "ast": 79.6,
        "stl": 23.74,
        "blk": 19.08,
        "tpm": 33.2,
        "to": 44.1,
        "fgPct": 47.7,
        "ftPct": 76.6
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 5,
        "stl": 5,
        "blk": 2,
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
        "pts": 324,
        "reb": 156,
        "ast": 77.8,
        "stl": 22.86,
        "blk": 17.81,
        "tpm": 33,
        "to": 41.5,
        "fgPct": 48.3,
        "ftPct": 75.8
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
        "pts": 285.3,
        "reb": 109.5,
        "ast": 62.6,
        "stl": 22.01,
        "blk": 12.17,
        "tpm": 29.2,
        "to": 33.5,
        "fgPct": 48.3,
        "ftPct": 77.6
      },
      "rank": {
        "pts": 9,
        "reb": 11,
        "ast": 10,
        "stl": 8,
        "blk": 9,
        "tpm": 12,
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
        "pts": 284.2,
        "reb": 115.6,
        "ast": 66.3,
        "stl": 20.88,
        "blk": 14.87,
        "tpm": 30.3,
        "to": 37,
        "fgPct": 47.1,
        "ftPct": 78.4
      },
      "rank": {
        "pts": 10,
        "reb": 9,
        "ast": 9,
        "stl": 10,
        "blk": 6,
        "tpm": 10,
        "fgPct": 7,
        "ftPct": 7,
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
        "pts": 360.1,
        "reb": 123.5,
        "ast": 91.1,
        "stl": 25.66,
        "blk": 14.52,
        "tpm": 39.1,
        "to": 46.8,
        "fgPct": 47,
        "ftPct": 78.9
      },
      "rank": {
        "pts": 3,
        "reb": 6,
        "ast": 2,
        "stl": 3,
        "blk": 7,
        "tpm": 4,
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
        "pts": 257.8,
        "reb": 85.8,
        "ast": 59.5,
        "stl": 18.59,
        "blk": 9.5,
        "tpm": 30.3,
        "to": 35.1,
        "fgPct": 46.1,
        "ftPct": 78.4
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 11,
        "stl": 12,
        "blk": 12,
        "tpm": 11,
        "fgPct": 12,
        "ftPct": 8,
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
