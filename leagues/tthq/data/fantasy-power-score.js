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
  "generatedAt": "2026-10-26T02:01:30.931Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 3 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 436.5,
        "reb": 163.2,
        "ast": 100.9,
        "stl": 28.96,
        "blk": 19.28,
        "tpm": 40.3,
        "to": 55.3,
        "fgPct": 47.9,
        "ftPct": 78.7
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
      "projCount": 28,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 2,
      "name": "Seagulls",
      "owner": "Möwe",
      "values": {
        "pts": 332.8,
        "reb": 129.4,
        "ast": 75.6,
        "stl": 23.71,
        "blk": 17,
        "tpm": 38.6,
        "to": 41.5,
        "fgPct": 47.8,
        "ftPct": 78
      },
      "rank": {
        "pts": 5,
        "reb": 4,
        "ast": 6,
        "stl": 5,
        "blk": 4,
        "tpm": 4,
        "fgPct": 4,
        "ftPct": 8,
        "to": 9
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
        "pts": 335.4,
        "reb": 111,
        "ast": 74.5,
        "stl": 23.88,
        "blk": 11.61,
        "tpm": 42.2,
        "to": 35.9,
        "fgPct": 46.4,
        "ftPct": 80.8
      },
      "rank": {
        "pts": 4,
        "reb": 9,
        "ast": 7,
        "stl": 4,
        "blk": 10,
        "tpm": 2,
        "fgPct": 11,
        "ftPct": 3,
        "to": 5
      },
      "includedCount": 26,
      "projCount": 26,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 4,
      "name": "Leaveland Cavaliers",
      "owner": "Sven",
      "values": {
        "pts": 359.4,
        "reb": 120.1,
        "ast": 77.4,
        "stl": 21.27,
        "blk": 11.39,
        "tpm": 44.1,
        "to": 40.5,
        "fgPct": 46.2,
        "ftPct": 81.1
      },
      "rank": {
        "pts": 2,
        "reb": 6,
        "ast": 5,
        "stl": 10,
        "blk": 11,
        "tpm": 1,
        "fgPct": 12,
        "ftPct": 1,
        "to": 7
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
        "pts": 320.7,
        "reb": 117.7,
        "ast": 72.1,
        "stl": 21.74,
        "blk": 11.86,
        "tpm": 37.5,
        "to": 37.1,
        "fgPct": 47.5,
        "ftPct": 80.9
      },
      "rank": {
        "pts": 7,
        "reb": 7,
        "ast": 8,
        "stl": 8,
        "blk": 9,
        "tpm": 5,
        "fgPct": 6,
        "ftPct": 2,
        "to": 6
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
        "pts": 276.3,
        "reb": 114.5,
        "ast": 60.5,
        "stl": 21.44,
        "blk": 14.85,
        "tpm": 36,
        "to": 34.6,
        "fgPct": 46.8,
        "ftPct": 77.1
      },
      "rank": {
        "pts": 11,
        "reb": 8,
        "ast": 10,
        "stl": 9,
        "blk": 5,
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
        "pts": 327.8,
        "reb": 140.7,
        "ast": 78.4,
        "stl": 22.89,
        "blk": 18.36,
        "tpm": 31.4,
        "to": 42.3,
        "fgPct": 47.7,
        "ftPct": 76.6
      },
      "rank": {
        "pts": 6,
        "reb": 3,
        "ast": 3,
        "stl": 6,
        "blk": 2,
        "tpm": 11,
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
        "pts": 318,
        "reb": 153,
        "ast": 77.8,
        "stl": 24.26,
        "blk": 18.06,
        "tpm": 31.7,
        "to": 40.7,
        "fgPct": 48.5,
        "ftPct": 75.5
      },
      "rank": {
        "pts": 8,
        "reb": 2,
        "ast": 4,
        "stl": 3,
        "blk": 3,
        "tpm": 10,
        "fgPct": 2,
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
        "pts": 290.3,
        "reb": 108.6,
        "ast": 61.5,
        "stl": 22.68,
        "blk": 12.1,
        "tpm": 28.7,
        "to": 32.8,
        "fgPct": 49,
        "ftPct": 78
      },
      "rank": {
        "pts": 9,
        "reb": 10,
        "ast": 9,
        "stl": 7,
        "blk": 8,
        "tpm": 12,
        "fgPct": 1,
        "ftPct": 9,
        "to": 1
      },
      "includedCount": 27,
      "projCount": 27,
      "skippedCount": 1,
      "skippedPlayers": [
        "Ebuka Okorie"
      ]
    },
    {
      "id": 10,
      "name": "S-Town Grizzlies",
      "owner": "Jan Schattschneider",
      "values": {
        "pts": 281.2,
        "reb": 108,
        "ast": 60.4,
        "stl": 20.67,
        "blk": 13.42,
        "tpm": 31.8,
        "to": 33.7,
        "fgPct": 46.5,
        "ftPct": 78.5
      },
      "rank": {
        "pts": 10,
        "reb": 11,
        "ast": 11,
        "stl": 11,
        "blk": 7,
        "tpm": 8,
        "fgPct": 10,
        "ftPct": 6,
        "to": 2
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
        "pts": 343.5,
        "reb": 120.8,
        "ast": 91.6,
        "stl": 26.98,
        "blk": 14.57,
        "tpm": 36,
        "to": 43.7,
        "fgPct": 47.2,
        "ftPct": 78.4
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 2,
        "blk": 6,
        "tpm": 7,
        "fgPct": 7,
        "ftPct": 7,
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
        "pts": 271.1,
        "reb": 84.2,
        "ast": 60.4,
        "stl": 19.14,
        "blk": 9.16,
        "tpm": 31.8,
        "to": 35.6,
        "fgPct": 46.6,
        "ftPct": 78.8
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 9,
        "fgPct": 9,
        "ftPct": 4,
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
