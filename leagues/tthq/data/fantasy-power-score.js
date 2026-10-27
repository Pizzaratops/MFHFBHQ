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
  "generatedAt": "2026-10-27T04:01:18.812Z",
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
        "pts": 437.5,
        "reb": 161.1,
        "ast": 100.5,
        "stl": 29.43,
        "blk": 19.34,
        "tpm": 40.4,
        "to": 56.1,
        "fgPct": 48,
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
        "pts": 330.6,
        "reb": 129.8,
        "ast": 75.2,
        "stl": 24.35,
        "blk": 16.64,
        "tpm": 38.6,
        "to": 40.9,
        "fgPct": 47.6,
        "ftPct": 77.7
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
        "pts": 348.5,
        "reb": 118.9,
        "ast": 77.8,
        "stl": 26.21,
        "blk": 12.57,
        "tpm": 44.7,
        "to": 39,
        "fgPct": 46.2,
        "ftPct": 80.1
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
        "pts": 362.8,
        "reb": 121.5,
        "ast": 79.3,
        "stl": 22.11,
        "blk": 11.32,
        "tpm": 44.8,
        "to": 41.5,
        "fgPct": 45.9,
        "ftPct": 81.2
      },
      "rank": {
        "pts": 2,
        "reb": 6,
        "ast": 4,
        "stl": 8,
        "blk": 11,
        "tpm": 1,
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
        "pts": 320.6,
        "reb": 116.2,
        "ast": 71.3,
        "stl": 20.7,
        "blk": 11.44,
        "tpm": 37.1,
        "to": 36.9,
        "fgPct": 47.3,
        "ftPct": 80.9
      },
      "rank": {
        "pts": 8,
        "reb": 8,
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
        "pts": 278.9,
        "reb": 115,
        "ast": 60.6,
        "stl": 21.64,
        "blk": 14.71,
        "tpm": 35.7,
        "to": 35.1,
        "fgPct": 46.5,
        "ftPct": 77
      },
      "rank": {
        "pts": 11,
        "reb": 9,
        "ast": 11,
        "stl": 9,
        "blk": 6,
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
        "pts": 332.2,
        "reb": 142.3,
        "ast": 79.4,
        "stl": 23.1,
        "blk": 18.31,
        "tpm": 32.6,
        "to": 44.5,
        "fgPct": 47.6,
        "ftPct": 76.6
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 3,
        "stl": 6,
        "blk": 3,
        "tpm": 9,
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
        "pts": 320.9,
        "reb": 155,
        "ast": 78.9,
        "stl": 23.52,
        "blk": 18.32,
        "tpm": 32,
        "to": 42.2,
        "fgPct": 48,
        "ftPct": 75.6
      },
      "rank": {
        "pts": 7,
        "reb": 2,
        "ast": 5,
        "stl": 5,
        "blk": 2,
        "tpm": 11,
        "fgPct": 3,
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
        "reb": 108.1,
        "ast": 62,
        "stl": 22.18,
        "blk": 11.87,
        "tpm": 29,
        "to": 32.9,
        "fgPct": 48.5,
        "ftPct": 78
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 10,
        "stl": 7,
        "blk": 9,
        "tpm": 12,
        "fgPct": 1,
        "ftPct": 7,
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
        "pts": 288.6,
        "reb": 109.4,
        "ast": 63.1,
        "stl": 20.95,
        "blk": 13.36,
        "tpm": 33.6,
        "to": 35.2,
        "fgPct": 46.5,
        "ftPct": 78.8
      },
      "rank": {
        "pts": 9,
        "reb": 10,
        "ast": 9,
        "stl": 10,
        "blk": 7,
        "tpm": 8,
        "fgPct": 9,
        "ftPct": 4,
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
        "pts": 346.6,
        "reb": 122.1,
        "ast": 93,
        "stl": 26.46,
        "blk": 14.74,
        "tpm": 36.1,
        "to": 45,
        "fgPct": 47.3,
        "ftPct": 78
      },
      "rank": {
        "pts": 4,
        "reb": 5,
        "ast": 2,
        "stl": 2,
        "blk": 5,
        "tpm": 6,
        "fgPct": 7,
        "ftPct": 8,
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
        "pts": 275.8,
        "reb": 87.1,
        "ast": 60.6,
        "stl": 20.29,
        "blk": 9.4,
        "tpm": 32.6,
        "to": 36.2,
        "fgPct": 46.1,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 10,
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
