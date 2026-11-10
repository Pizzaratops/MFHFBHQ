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
  "generatedAt": "2026-11-10T02:23:01.266Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 11 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 449.8,
        "reb": 165,
        "ast": 109.3,
        "stl": 30.25,
        "blk": 20.41,
        "tpm": 41.1,
        "to": 57,
        "fgPct": 48,
        "ftPct": 79.2
      },
      "rank": {
        "pts": 1,
        "reb": 1,
        "ast": 1,
        "stl": 1,
        "blk": 1,
        "tpm": 3,
        "fgPct": 2,
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
        "pts": 312.4,
        "reb": 118.7,
        "ast": 72.9,
        "stl": 21.5,
        "blk": 14.2,
        "tpm": 37.9,
        "to": 39.1,
        "fgPct": 47.2,
        "ftPct": 78.8
      },
      "rank": {
        "pts": 7,
        "reb": 6,
        "ast": 7,
        "stl": 9,
        "blk": 7,
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
        "pts": 347.4,
        "reb": 114,
        "ast": 79,
        "stl": 26.6,
        "blk": 12.61,
        "tpm": 44.7,
        "to": 39.7,
        "fgPct": 45.9,
        "ftPct": 79.1
      },
      "rank": {
        "pts": 4,
        "reb": 8,
        "ast": 5,
        "stl": 2,
        "blk": 9,
        "tpm": 2,
        "fgPct": 11,
        "ftPct": 5,
        "to": 7
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
        "pts": 374.3,
        "reb": 128.4,
        "ast": 84.2,
        "stl": 23.87,
        "blk": 12.71,
        "tpm": 47.4,
        "to": 45,
        "fgPct": 46.1,
        "ftPct": 81.2
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
        "pts": 296.5,
        "reb": 106.9,
        "ast": 66.9,
        "stl": 20.06,
        "blk": 10.77,
        "tpm": 33.2,
        "to": 36.3,
        "fgPct": 46.8,
        "ftPct": 81.9
      },
      "rank": {
        "pts": 8,
        "reb": 11,
        "ast": 9,
        "stl": 11,
        "blk": 11,
        "tpm": 7,
        "fgPct": 8,
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
        "pts": 278.8,
        "reb": 114,
        "ast": 59.1,
        "stl": 20.71,
        "blk": 14.93,
        "tpm": 35,
        "to": 36.2,
        "fgPct": 46.6,
        "ftPct": 76.4
      },
      "rank": {
        "pts": 11,
        "reb": 9,
        "ast": 11,
        "stl": 10,
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
        "pts": 331.7,
        "reb": 146.9,
        "ast": 82.2,
        "stl": 23.52,
        "blk": 19.2,
        "tpm": 32.7,
        "to": 44.3,
        "fgPct": 47.6,
        "ftPct": 76.2
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 4,
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
        "pts": 325.2,
        "reb": 154.1,
        "ast": 77.8,
        "stl": 23.18,
        "blk": 17.59,
        "tpm": 32.7,
        "to": 42.1,
        "fgPct": 48,
        "ftPct": 76
      },
      "rank": {
        "pts": 6,
        "reb": 2,
        "ast": 6,
        "stl": 6,
        "blk": 3,
        "tpm": 9,
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
        "pts": 286.1,
        "reb": 107.3,
        "ast": 62.5,
        "stl": 22.5,
        "blk": 11.62,
        "tpm": 29.6,
        "to": 33.8,
        "fgPct": 48.1,
        "ftPct": 77.9
      },
      "rank": {
        "pts": 10,
        "reb": 10,
        "ast": 10,
        "stl": 7,
        "blk": 10,
        "tpm": 11,
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
        "pts": 286.4,
        "reb": 116.5,
        "ast": 68.7,
        "stl": 21.72,
        "blk": 15.1,
        "tpm": 30.4,
        "to": 38.9,
        "fgPct": 47.1,
        "ftPct": 78.2
      },
      "rank": {
        "pts": 9,
        "reb": 7,
        "ast": 8,
        "stl": 8,
        "blk": 4,
        "tpm": 10,
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
        "pts": 361.9,
        "reb": 123.4,
        "ast": 92.2,
        "stl": 25.59,
        "blk": 14.51,
        "tpm": 39.2,
        "to": 47.2,
        "fgPct": 46.9,
        "ftPct": 79.5
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 3,
        "blk": 6,
        "tpm": 4,
        "fgPct": 7,
        "ftPct": 3,
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
        "pts": 252.2,
        "reb": 84.9,
        "ast": 59.1,
        "stl": 17.44,
        "blk": 9.1,
        "tpm": 29.3,
        "to": 35.4,
        "fgPct": 45.9,
        "ftPct": 78.4
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 12,
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
