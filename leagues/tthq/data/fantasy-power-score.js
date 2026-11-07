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
  "generatedAt": "2026-11-07T06:01:15.853Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 10 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 443.9,
        "reb": 162,
        "ast": 107.5,
        "stl": 30.12,
        "blk": 19.18,
        "tpm": 40.7,
        "to": 56.6,
        "fgPct": 48,
        "ftPct": 79.1
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
        "pts": 314.2,
        "reb": 121,
        "ast": 73.5,
        "stl": 22.17,
        "blk": 14.6,
        "tpm": 38.1,
        "to": 39.6,
        "fgPct": 47.3,
        "ftPct": 78.7
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
        "pts": 345.6,
        "reb": 116.5,
        "ast": 80.2,
        "stl": 25.83,
        "blk": 13.22,
        "tpm": 44.7,
        "to": 40.2,
        "fgPct": 46,
        "ftPct": 79.7
      },
      "rank": {
        "pts": 4,
        "reb": 8,
        "ast": 4,
        "stl": 2,
        "blk": 8,
        "tpm": 2,
        "fgPct": 11,
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
        "pts": 381.1,
        "reb": 127.6,
        "ast": 85.9,
        "stl": 25.22,
        "blk": 12.11,
        "tpm": 48.1,
        "to": 46.2,
        "fgPct": 46.2,
        "ftPct": 81.1
      },
      "rank": {
        "pts": 2,
        "reb": 4,
        "ast": 3,
        "stl": 4,
        "blk": 9,
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
        "pts": 303.8,
        "reb": 110.2,
        "ast": 68.8,
        "stl": 20.64,
        "blk": 11.44,
        "tpm": 34.1,
        "to": 36.6,
        "fgPct": 47,
        "ftPct": 81.3
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
        "pts": 281,
        "reb": 116.7,
        "ast": 59.2,
        "stl": 21.07,
        "blk": 15.3,
        "tpm": 35.6,
        "to": 36,
        "fgPct": 46.9,
        "ftPct": 76.7
      },
      "rank": {
        "pts": 11,
        "reb": 7,
        "ast": 11,
        "stl": 10,
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
        "pts": 332.6,
        "reb": 147.1,
        "ast": 80.1,
        "stl": 23.77,
        "blk": 19.13,
        "tpm": 33,
        "to": 44,
        "fgPct": 47.8,
        "ftPct": 76.5
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
        "pts": 323.4,
        "reb": 154.6,
        "ast": 77.1,
        "stl": 22.64,
        "blk": 17.64,
        "tpm": 32.5,
        "to": 41.3,
        "fgPct": 48.2,
        "ftPct": 76.1
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
        "pts": 288,
        "reb": 110,
        "ast": 64.1,
        "stl": 22.6,
        "blk": 12.09,
        "tpm": 29.6,
        "to": 33.6,
        "fgPct": 48.2,
        "ftPct": 77.6
      },
      "rank": {
        "pts": 9,
        "reb": 11,
        "ast": 10,
        "stl": 7,
        "blk": 10,
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
        "reb": 114.5,
        "ast": 66.5,
        "stl": 21.17,
        "blk": 14.86,
        "tpm": 30,
        "to": 37.4,
        "fgPct": 47.2,
        "ftPct": 78.3
      },
      "rank": {
        "pts": 10,
        "reb": 9,
        "ast": 9,
        "stl": 9,
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
        "pts": 355.7,
        "reb": 123.1,
        "ast": 90.1,
        "stl": 25.37,
        "blk": 14.53,
        "tpm": 39.1,
        "to": 47.1,
        "fgPct": 46.9,
        "ftPct": 79.2
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
        "pts": 256.6,
        "reb": 86,
        "ast": 59,
        "stl": 18.42,
        "blk": 9.45,
        "tpm": 30.3,
        "to": 35.8,
        "fgPct": 46,
        "ftPct": 78.4
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 10,
        "fgPct": 12,
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
