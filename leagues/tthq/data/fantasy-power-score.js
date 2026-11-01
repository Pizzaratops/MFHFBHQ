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
  "generatedAt": "2026-11-01T23:30:58.731Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 7 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 450.9,
        "reb": 161.2,
        "ast": 107.4,
        "stl": 30.3,
        "blk": 19.34,
        "tpm": 40.8,
        "to": 57.9,
        "fgPct": 48.2,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 1,
        "reb": 1,
        "ast": 1,
        "stl": 1,
        "blk": 1,
        "tpm": 3,
        "fgPct": 1,
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
        "pts": 321.9,
        "reb": 125.1,
        "ast": 76.3,
        "stl": 23.75,
        "blk": 15.16,
        "tpm": 39.5,
        "to": 40.1,
        "fgPct": 47.1,
        "ftPct": 78.9
      },
      "rank": {
        "pts": 7,
        "reb": 4,
        "ast": 7,
        "stl": 5,
        "blk": 4,
        "tpm": 4,
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
        "pts": 346.8,
        "reb": 117.5,
        "ast": 80.1,
        "stl": 26.17,
        "blk": 12.68,
        "tpm": 44.3,
        "to": 39.3,
        "fgPct": 46.2,
        "ftPct": 80.1
      },
      "rank": {
        "pts": 4,
        "reb": 7,
        "ast": 4,
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
        "pts": 360.5,
        "reb": 122.3,
        "ast": 82.4,
        "stl": 24.25,
        "blk": 11.63,
        "tpm": 45.7,
        "to": 42.1,
        "fgPct": 46,
        "ftPct": 81.1
      },
      "rank": {
        "pts": 2,
        "reb": 6,
        "ast": 3,
        "stl": 4,
        "blk": 10,
        "tpm": 1,
        "fgPct": 11,
        "ftPct": 2,
        "to": 9
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
        "pts": 312.1,
        "reb": 113,
        "ast": 70.3,
        "stl": 20.3,
        "blk": 11.36,
        "tpm": 35.6,
        "to": 38.7,
        "fgPct": 47.1,
        "ftPct": 81.2
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
        "pts": 283.3,
        "reb": 115.1,
        "ast": 59.9,
        "stl": 21.71,
        "blk": 14.61,
        "tpm": 36.1,
        "to": 34.8,
        "fgPct": 46.8,
        "ftPct": 76.9
      },
      "rank": {
        "pts": 10,
        "reb": 9,
        "ast": 11,
        "stl": 9,
        "blk": 5,
        "tpm": 6,
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
        "pts": 333.7,
        "reb": 143.3,
        "ast": 79.8,
        "stl": 23.1,
        "blk": 18.54,
        "tpm": 32.7,
        "to": 44.6,
        "fgPct": 47.6,
        "ftPct": 76.8
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 5,
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
        "pts": 324.9,
        "reb": 154.7,
        "ast": 77.7,
        "stl": 23.2,
        "blk": 18.08,
        "tpm": 33,
        "to": 41.1,
        "fgPct": 47.9,
        "ftPct": 75.6
      },
      "rank": {
        "pts": 6,
        "reb": 2,
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
        "pts": 282.4,
        "reb": 108.2,
        "ast": 61.6,
        "stl": 22.62,
        "blk": 11.86,
        "tpm": 28.9,
        "to": 33.5,
        "fgPct": 48.2,
        "ftPct": 77.6
      },
      "rank": {
        "pts": 11,
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
        "pts": 285.2,
        "reb": 115.6,
        "ast": 65.4,
        "stl": 20.86,
        "blk": 14.54,
        "tpm": 31.9,
        "to": 37.7,
        "fgPct": 46.8,
        "ftPct": 78
      },
      "rank": {
        "pts": 9,
        "reb": 8,
        "ast": 9,
        "stl": 10,
        "blk": 6,
        "tpm": 10,
        "fgPct": 9,
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
        "pts": 360.4,
        "reb": 123.5,
        "ast": 91.3,
        "stl": 26.86,
        "blk": 14.48,
        "tpm": 39.2,
        "to": 45.9,
        "fgPct": 46.9,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 2,
        "blk": 7,
        "tpm": 5,
        "fgPct": 7,
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
        "pts": 264.7,
        "reb": 85.6,
        "ast": 59.4,
        "stl": 19.77,
        "blk": 9.19,
        "tpm": 31.8,
        "to": 35.1,
        "fgPct": 45.7,
        "ftPct": 78.2
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
