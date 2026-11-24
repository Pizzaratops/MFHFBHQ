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
  "generatedAt": "2026-11-24T03:01:32.713Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 18 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "reb": 163.6,
        "ast": 104.3,
        "stl": 28.37,
        "blk": 19.21,
        "tpm": 41.5,
        "to": 54.8,
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
        "ftPct": 7,
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
        "pts": 328.1,
        "reb": 118.4,
        "ast": 75.6,
        "stl": 23.4,
        "blk": 14.29,
        "tpm": 41.1,
        "to": 40.6,
        "fgPct": 46.9,
        "ftPct": 78.7
      },
      "rank": {
        "pts": 6,
        "reb": 6,
        "ast": 7,
        "stl": 6,
        "blk": 7,
        "tpm": 4,
        "fgPct": 6,
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
        "pts": 344.8,
        "reb": 112.5,
        "ast": 79.7,
        "stl": 26.36,
        "blk": 12.32,
        "tpm": 45.5,
        "to": 39.3,
        "fgPct": 45.4,
        "ftPct": 79
      },
      "rank": {
        "pts": 4,
        "reb": 9,
        "ast": 5,
        "stl": 2,
        "blk": 9,
        "tpm": 2,
        "fgPct": 12,
        "ftPct": 4,
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
        "pts": 382.9,
        "reb": 131.6,
        "ast": 87.1,
        "stl": 24.19,
        "blk": 13.49,
        "tpm": 48.4,
        "to": 45.5,
        "fgPct": 46.4,
        "ftPct": 81.4
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
        "pts": 302.1,
        "reb": 108.1,
        "ast": 67.1,
        "stl": 19.34,
        "blk": 11.09,
        "tpm": 34.2,
        "to": 35.4,
        "fgPct": 46.6,
        "ftPct": 82
      },
      "rank": {
        "pts": 9,
        "reb": 10,
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
        "pts": 277.6,
        "reb": 113.3,
        "ast": 59.4,
        "stl": 20.06,
        "blk": 14.96,
        "tpm": 35.4,
        "to": 35,
        "fgPct": 46.6,
        "ftPct": 76.4
      },
      "rank": {
        "pts": 11,
        "reb": 8,
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
        "pts": 336.9,
        "reb": 146.2,
        "ast": 81.7,
        "stl": 23.46,
        "blk": 19.06,
        "tpm": 33.7,
        "to": 44.1,
        "fgPct": 47.7,
        "ftPct": 76.1
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 4,
        "stl": 5,
        "blk": 2,
        "tpm": 9,
        "fgPct": 4,
        "ftPct": 12,
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
        "pts": 321.7,
        "reb": 148.8,
        "ast": 76,
        "stl": 22.75,
        "blk": 17.08,
        "tpm": 33.3,
        "to": 41.8,
        "fgPct": 48.1,
        "ftPct": 76.4
      },
      "rank": {
        "pts": 7,
        "reb": 2,
        "ast": 6,
        "stl": 7,
        "blk": 3,
        "tpm": 10,
        "fgPct": 1,
        "ftPct": 11,
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
        "pts": 289.4,
        "reb": 106.6,
        "ast": 63.7,
        "stl": 22.06,
        "blk": 11.79,
        "tpm": 30,
        "to": 34.2,
        "fgPct": 47.8,
        "ftPct": 78.4
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 10,
        "stl": 9,
        "blk": 10,
        "tpm": 12,
        "fgPct": 3,
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
        "pts": 302.3,
        "reb": 118.3,
        "ast": 68.5,
        "stl": 22.38,
        "blk": 15.07,
        "tpm": 33.8,
        "to": 39.1,
        "fgPct": 47.1,
        "ftPct": 78
      },
      "rank": {
        "pts": 8,
        "reb": 7,
        "ast": 8,
        "stl": 8,
        "blk": 4,
        "tpm": 8,
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
        "pts": 357.3,
        "reb": 121.9,
        "ast": 91.2,
        "stl": 24.82,
        "blk": 14.47,
        "tpm": 39.2,
        "to": 46.1,
        "fgPct": 46.7,
        "ftPct": 79.1
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 3,
        "blk": 6,
        "tpm": 5,
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
        "pts": 259,
        "reb": 81.4,
        "ast": 58.6,
        "stl": 17.83,
        "blk": 8.89,
        "tpm": 30.4,
        "to": 34.5,
        "fgPct": 46.1,
        "ftPct": 79
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 11,
        "fgPct": 11,
        "ftPct": 5,
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
