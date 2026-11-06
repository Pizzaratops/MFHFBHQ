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
  "generatedAt": "2026-11-06T22:21:18.255Z",
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
        "pts": 442.7,
        "reb": 161.2,
        "ast": 106.9,
        "stl": 29.82,
        "blk": 19.25,
        "tpm": 40.2,
        "to": 56.8,
        "fgPct": 48.1,
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
        "ftPct": 5,
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
        "pts": 312.3,
        "reb": 121.7,
        "ast": 73.7,
        "stl": 22.04,
        "blk": 14.64,
        "tpm": 38.2,
        "to": 39.6,
        "fgPct": 47.2,
        "ftPct": 78.8
      },
      "rank": {
        "pts": 7,
        "reb": 6,
        "ast": 7,
        "stl": 8,
        "blk": 6,
        "tpm": 5,
        "fgPct": 5,
        "ftPct": 6,
        "to": 6
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
        "pts": 345.9,
        "reb": 116.2,
        "ast": 80.4,
        "stl": 26.16,
        "blk": 13.21,
        "tpm": 44.8,
        "to": 39.8,
        "fgPct": 46,
        "ftPct": 79.5
      },
      "rank": {
        "pts": 4,
        "reb": 8,
        "ast": 4,
        "stl": 2,
        "blk": 8,
        "tpm": 2,
        "fgPct": 12,
        "ftPct": 3,
        "to": 7
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
        "pts": 381.5,
        "reb": 127.5,
        "ast": 85.4,
        "stl": 25.08,
        "blk": 12.17,
        "tpm": 48.1,
        "to": 46,
        "fgPct": 46.2,
        "ftPct": 81
      },
      "rank": {
        "pts": 2,
        "reb": 4,
        "ast": 3,
        "stl": 4,
        "blk": 10,
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
        "pts": 305.2,
        "reb": 110.3,
        "ast": 69.1,
        "stl": 20.69,
        "blk": 11.34,
        "tpm": 34.2,
        "to": 36.8,
        "fgPct": 47,
        "ftPct": 81.4
      },
      "rank": {
        "pts": 8,
        "reb": 10,
        "ast": 8,
        "stl": 11,
        "blk": 11,
        "tpm": 7,
        "fgPct": 7,
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
        "pts": 281.1,
        "reb": 116.4,
        "ast": 58.9,
        "stl": 21.41,
        "blk": 15.31,
        "tpm": 35.5,
        "to": 35.8,
        "fgPct": 46.9,
        "ftPct": 76.9
      },
      "rank": {
        "pts": 11,
        "reb": 7,
        "ast": 12,
        "stl": 9,
        "blk": 4,
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
        "pts": 333.6,
        "reb": 147.3,
        "ast": 80,
        "stl": 23.79,
        "blk": 19.19,
        "tpm": 33.1,
        "to": 44.2,
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
        "pts": 325,
        "reb": 156.4,
        "ast": 77.6,
        "stl": 22.91,
        "blk": 17.79,
        "tpm": 32.7,
        "to": 41.4,
        "fgPct": 48.3,
        "ftPct": 75.8
      },
      "rank": {
        "pts": 6,
        "reb": 2,
        "ast": 6,
        "stl": 6,
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
        "pts": 286.7,
        "reb": 109.6,
        "ast": 63.1,
        "stl": 22.54,
        "blk": 12.19,
        "tpm": 29.4,
        "to": 33.7,
        "fgPct": 48.2,
        "ftPct": 77.6
      },
      "rank": {
        "pts": 9,
        "reb": 11,
        "ast": 10,
        "stl": 7,
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
        "pts": 282.8,
        "reb": 115.7,
        "ast": 66.7,
        "stl": 20.98,
        "blk": 14.86,
        "tpm": 30.5,
        "to": 37.2,
        "fgPct": 47.1,
        "ftPct": 78.2
      },
      "rank": {
        "pts": 10,
        "reb": 9,
        "ast": 9,
        "stl": 10,
        "blk": 5,
        "tpm": 11,
        "fgPct": 6,
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
        "pts": 359.3,
        "reb": 123.9,
        "ast": 91.1,
        "stl": 25.68,
        "blk": 14.58,
        "tpm": 39.2,
        "to": 47.3,
        "fgPct": 46.9,
        "ftPct": 79.1
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 3,
        "blk": 7,
        "tpm": 4,
        "fgPct": 9,
        "ftPct": 4,
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
        "pts": 258.5,
        "reb": 85.8,
        "ast": 59.6,
        "stl": 18.54,
        "blk": 9.5,
        "tpm": 30.6,
        "to": 35.4,
        "fgPct": 46.2,
        "ftPct": 78.4
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 11,
        "stl": 12,
        "blk": 12,
        "tpm": 10,
        "fgPct": 11,
        "ftPct": 7,
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
