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
  "generatedAt": "2026-10-29T13:34:21.472Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 5 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 455,
        "reb": 166.7,
        "ast": 108.7,
        "stl": 30.91,
        "blk": 19.65,
        "tpm": 42.3,
        "to": 59.1,
        "fgPct": 47.6,
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
        "pts": 325.6,
        "reb": 126.7,
        "ast": 74.2,
        "stl": 23.93,
        "blk": 15.4,
        "tpm": 39.6,
        "to": 40.4,
        "fgPct": 47.2,
        "ftPct": 78.8
      },
      "rank": {
        "pts": 6,
        "reb": 4,
        "ast": 7,
        "stl": 4,
        "blk": 4,
        "tpm": 4,
        "fgPct": 7,
        "ftPct": 5,
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
        "pts": 345.5,
        "reb": 119,
        "ast": 78.7,
        "stl": 25.85,
        "blk": 12.61,
        "tpm": 44.3,
        "to": 38.9,
        "fgPct": 46.2,
        "ftPct": 80.3
      },
      "rank": {
        "pts": 3,
        "reb": 7,
        "ast": 6,
        "stl": 3,
        "blk": 8,
        "tpm": 2,
        "fgPct": 10,
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
        "pts": 355.4,
        "reb": 120.9,
        "ast": 80.9,
        "stl": 23.34,
        "blk": 11.46,
        "tpm": 44.9,
        "to": 41,
        "fgPct": 46,
        "ftPct": 81.2
      },
      "rank": {
        "pts": 2,
        "reb": 6,
        "ast": 3,
        "stl": 6,
        "blk": 11,
        "tpm": 1,
        "fgPct": 11,
        "ftPct": 1,
        "to": 8
      },
      "includedCount": 26,
      "projCount": 26,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 5,
      "name": "Anadolu Ballers",
      "owner": "Murat Oguz",
      "values": {
        "pts": 320.7,
        "reb": 115.1,
        "ast": 70.6,
        "stl": 20.4,
        "blk": 11.55,
        "tpm": 36.8,
        "to": 38,
        "fgPct": 47.3,
        "ftPct": 81
      },
      "rank": {
        "pts": 8,
        "reb": 9,
        "ast": 8,
        "stl": 11,
        "blk": 10,
        "tpm": 5,
        "fgPct": 6,
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
        "pts": 282.6,
        "reb": 115.7,
        "ast": 60.3,
        "stl": 21.59,
        "blk": 14.68,
        "tpm": 35.8,
        "to": 34.9,
        "fgPct": 46.9,
        "ftPct": 77.1
      },
      "rank": {
        "pts": 11,
        "reb": 8,
        "ast": 11,
        "stl": 9,
        "blk": 5,
        "tpm": 7,
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
        "pts": 330.6,
        "reb": 141.9,
        "ast": 79.8,
        "stl": 22.78,
        "blk": 18.37,
        "tpm": 32.3,
        "to": 44.8,
        "fgPct": 47.6,
        "ftPct": 76.8
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 4,
        "stl": 7,
        "blk": 2,
        "tpm": 9,
        "fgPct": 4,
        "ftPct": 11,
        "to": 11
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
        "pts": 323.5,
        "reb": 156,
        "ast": 79.3,
        "stl": 23.55,
        "blk": 18.27,
        "tpm": 33,
        "to": 42.2,
        "fgPct": 47.9,
        "ftPct": 75.5
      },
      "rank": {
        "pts": 7,
        "reb": 2,
        "ast": 5,
        "stl": 5,
        "blk": 3,
        "tpm": 8,
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
        "pts": 287.6,
        "reb": 108.2,
        "ast": 62.5,
        "stl": 22.16,
        "blk": 11.9,
        "tpm": 29.4,
        "to": 33.4,
        "fgPct": 48.5,
        "ftPct": 77.9
      },
      "rank": {
        "pts": 9,
        "reb": 11,
        "ast": 10,
        "stl": 8,
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
        "pts": 287.1,
        "reb": 114.4,
        "ast": 64,
        "stl": 20.9,
        "blk": 14.48,
        "tpm": 31.8,
        "to": 36.1,
        "fgPct": 46.8,
        "ftPct": 78.2
      },
      "rank": {
        "pts": 10,
        "reb": 10,
        "ast": 9,
        "stl": 10,
        "blk": 6,
        "tpm": 10,
        "fgPct": 9,
        "ftPct": 7,
        "to": 4
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
        "pts": 345.1,
        "reb": 121.1,
        "ast": 87.3,
        "stl": 25.91,
        "blk": 14.42,
        "tpm": 36.4,
        "to": 43.4,
        "fgPct": 47.4,
        "ftPct": 77.9
      },
      "rank": {
        "pts": 4,
        "reb": 5,
        "ast": 2,
        "stl": 2,
        "blk": 7,
        "tpm": 6,
        "fgPct": 5,
        "ftPct": 9,
        "to": 10
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
        "pts": 269.2,
        "reb": 84.9,
        "ast": 59.4,
        "stl": 19.92,
        "blk": 9.31,
        "tpm": 31.8,
        "to": 35.5,
        "fgPct": 45.9,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 11,
        "fgPct": 12,
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
