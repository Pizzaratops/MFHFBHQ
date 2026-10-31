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
  "generatedAt": "2026-10-31T03:01:18.658Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 6 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 433.9,
        "reb": 155,
        "ast": 105.1,
        "stl": 28.73,
        "blk": 18.55,
        "tpm": 39.1,
        "to": 55.2,
        "fgPct": 48.2,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 1,
        "reb": 2,
        "ast": 1,
        "stl": 1,
        "blk": 1,
        "tpm": 4,
        "fgPct": 2,
        "ftPct": 6,
        "to": 12
      },
      "includedCount": 26,
      "projCount": 25,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 2,
      "name": "Seagulls",
      "owner": "Möwe",
      "values": {
        "pts": 324.9,
        "reb": 126.1,
        "ast": 74.5,
        "stl": 23.82,
        "blk": 15.33,
        "tpm": 39.6,
        "to": 40.3,
        "fgPct": 47.3,
        "ftPct": 78.8
      },
      "rank": {
        "pts": 6,
        "reb": 4,
        "ast": 7,
        "stl": 4,
        "blk": 4,
        "tpm": 3,
        "fgPct": 5,
        "ftPct": 4,
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
        "pts": 346.4,
        "reb": 117.7,
        "ast": 79,
        "stl": 25.95,
        "blk": 12.47,
        "tpm": 44.2,
        "to": 39,
        "fgPct": 46.3,
        "ftPct": 80.2
      },
      "rank": {
        "pts": 4,
        "reb": 7,
        "ast": 5,
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
        "pts": 351.5,
        "reb": 121,
        "ast": 80.7,
        "stl": 23.61,
        "blk": 11.58,
        "tpm": 44.7,
        "to": 41.5,
        "fgPct": 45.8,
        "ftPct": 81.2
      },
      "rank": {
        "pts": 3,
        "reb": 6,
        "ast": 3,
        "stl": 5,
        "blk": 10,
        "tpm": 1,
        "fgPct": 11,
        "ftPct": 1,
        "to": 9
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
        "pts": 317.9,
        "reb": 114.2,
        "ast": 71,
        "stl": 20.19,
        "blk": 11.47,
        "tpm": 36.4,
        "to": 38.1,
        "fgPct": 47.1,
        "ftPct": 81.1
      },
      "rank": {
        "pts": 8,
        "reb": 10,
        "ast": 8,
        "stl": 11,
        "blk": 11,
        "tpm": 6,
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
        "pts": 282,
        "reb": 115.8,
        "ast": 60.1,
        "stl": 21.9,
        "blk": 14.55,
        "tpm": 35.8,
        "to": 34.9,
        "fgPct": 46.8,
        "ftPct": 77
      },
      "rank": {
        "pts": 11,
        "reb": 8,
        "ast": 11,
        "stl": 9,
        "blk": 5,
        "tpm": 7,
        "fgPct": 9,
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
        "pts": 332.4,
        "reb": 142.3,
        "ast": 79.8,
        "stl": 22.75,
        "blk": 18.31,
        "tpm": 32.6,
        "to": 44.8,
        "fgPct": 47.7,
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
        "to": 10
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
        "pts": 324.4,
        "reb": 155.9,
        "ast": 78.7,
        "stl": 23.15,
        "blk": 18.1,
        "tpm": 32.8,
        "to": 41.4,
        "fgPct": 48,
        "ftPct": 75.4
      },
      "rank": {
        "pts": 7,
        "reb": 1,
        "ast": 6,
        "stl": 6,
        "blk": 3,
        "tpm": 8,
        "fgPct": 3,
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
        "pts": 285,
        "reb": 107.5,
        "ast": 62.1,
        "stl": 22.46,
        "blk": 11.84,
        "tpm": 29,
        "to": 33.1,
        "fgPct": 48.3,
        "ftPct": 77.7
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 10,
        "stl": 8,
        "blk": 9,
        "tpm": 12,
        "fgPct": 1,
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
        "pts": 285.7,
        "reb": 115,
        "ast": 64.4,
        "stl": 20.75,
        "blk": 14.5,
        "tpm": 32,
        "to": 36.5,
        "fgPct": 46.9,
        "ftPct": 78
      },
      "rank": {
        "pts": 9,
        "reb": 9,
        "ast": 9,
        "stl": 10,
        "blk": 6,
        "tpm": 10,
        "fgPct": 8,
        "ftPct": 8,
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
        "pts": 358.2,
        "reb": 123.1,
        "ast": 90.3,
        "stl": 26.4,
        "blk": 14.27,
        "tpm": 39,
        "to": 45.4,
        "fgPct": 47.1,
        "ftPct": 78.7
      },
      "rank": {
        "pts": 2,
        "reb": 5,
        "ast": 2,
        "stl": 2,
        "blk": 7,
        "tpm": 5,
        "fgPct": 7,
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
        "pts": 265.8,
        "reb": 84.8,
        "ast": 58.8,
        "stl": 19.51,
        "blk": 9.2,
        "tpm": 31.6,
        "to": 34.9,
        "fgPct": 45.7,
        "ftPct": 78.3
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 11,
        "fgPct": 12,
        "ftPct": 7,
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
