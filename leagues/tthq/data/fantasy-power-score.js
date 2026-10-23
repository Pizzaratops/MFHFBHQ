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
  "generatedAt": "2026-10-23T03:01:39.207Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 2 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 446.9,
        "reb": 165.2,
        "ast": 100.3,
        "stl": 29.16,
        "blk": 19.7,
        "tpm": 40.1,
        "to": 55,
        "fgPct": 48.3,
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
        "ftPct": 6,
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
        "pts": 333.9,
        "reb": 130.8,
        "ast": 74.6,
        "stl": 24,
        "blk": 16.82,
        "tpm": 39.4,
        "to": 40.8,
        "fgPct": 47.6,
        "ftPct": 78.8
      },
      "rank": {
        "pts": 5,
        "reb": 4,
        "ast": 7,
        "stl": 4,
        "blk": 4,
        "tpm": 4,
        "fgPct": 5,
        "ftPct": 4,
        "to": 8
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
        "pts": 340.4,
        "reb": 113.2,
        "ast": 76.7,
        "stl": 23.18,
        "blk": 11.58,
        "tpm": 41.9,
        "to": 36.3,
        "fgPct": 46.9,
        "ftPct": 80.4
      },
      "rank": {
        "pts": 4,
        "reb": 9,
        "ast": 6,
        "stl": 5,
        "blk": 10,
        "tpm": 2,
        "fgPct": 8,
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
        "pts": 364.1,
        "reb": 119.7,
        "ast": 78.8,
        "stl": 21.04,
        "blk": 11.4,
        "tpm": 44.7,
        "to": 39.7,
        "fgPct": 46.5,
        "ftPct": 81.1
      },
      "rank": {
        "pts": 2,
        "reb": 7,
        "ast": 4,
        "stl": 11,
        "blk": 11,
        "tpm": 1,
        "fgPct": 11,
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
        "pts": 326.6,
        "reb": 119.8,
        "ast": 73.5,
        "stl": 21.88,
        "blk": 11.89,
        "tpm": 37.4,
        "to": 36.7,
        "fgPct": 47.6,
        "ftPct": 80.9
      },
      "rank": {
        "pts": 7,
        "reb": 6,
        "ast": 8,
        "stl": 9,
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
        "pts": 276.1,
        "reb": 114.2,
        "ast": 61.5,
        "stl": 21.69,
        "blk": 14.81,
        "tpm": 35.4,
        "to": 34.3,
        "fgPct": 46.8,
        "ftPct": 77.4
      },
      "rank": {
        "pts": 12,
        "reb": 8,
        "ast": 11,
        "stl": 10,
        "blk": 6,
        "tpm": 7,
        "fgPct": 9,
        "ftPct": 10,
        "to": 4
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
        "pts": 331.6,
        "reb": 141.5,
        "ast": 78.6,
        "stl": 22.97,
        "blk": 18.42,
        "tpm": 31.8,
        "to": 41.2,
        "fgPct": 48.1,
        "ftPct": 77
      },
      "rank": {
        "pts": 6,
        "reb": 3,
        "ast": 5,
        "stl": 6,
        "blk": 3,
        "tpm": 9,
        "fgPct": 4,
        "ftPct": 11,
        "to": 9
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
        "pts": 323,
        "reb": 158.4,
        "ast": 79.4,
        "stl": 25.05,
        "blk": 18.7,
        "tpm": 31.8,
        "to": 41.3,
        "fgPct": 48.2,
        "ftPct": 75.1
      },
      "rank": {
        "pts": 8,
        "reb": 2,
        "ast": 3,
        "stl": 3,
        "blk": 2,
        "tpm": 10,
        "fgPct": 3,
        "ftPct": 12,
        "to": 10
      },
      "includedCount": 28,
      "projCount": 27,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 9,
      "name": "Cooking Show",
      "owner": "Stefan Estepham",
      "values": {
        "pts": 293.8,
        "reb": 109.4,
        "ast": 63.3,
        "stl": 22.16,
        "blk": 12.06,
        "tpm": 29.9,
        "to": 32.8,
        "fgPct": 48.7,
        "ftPct": 78.1
      },
      "rank": {
        "pts": 9,
        "reb": 11,
        "ast": 9,
        "stl": 7,
        "blk": 8,
        "tpm": 12,
        "fgPct": 1,
        "ftPct": 8,
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
        "pts": 293.6,
        "reb": 111.4,
        "ast": 61.2,
        "stl": 21.96,
        "blk": 13.82,
        "tpm": 33.8,
        "to": 33.8,
        "fgPct": 46.4,
        "ftPct": 78.2
      },
      "rank": {
        "pts": 10,
        "reb": 10,
        "ast": 12,
        "stl": 8,
        "blk": 7,
        "tpm": 8,
        "fgPct": 12,
        "ftPct": 7,
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
        "pts": 342.4,
        "reb": 122.8,
        "ast": 91.2,
        "stl": 26.56,
        "blk": 14.82,
        "tpm": 35.8,
        "to": 44.4,
        "fgPct": 47.4,
        "ftPct": 77.8
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 2,
        "blk": 5,
        "tpm": 6,
        "fgPct": 7,
        "ftPct": 9,
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
        "pts": 276.3,
        "reb": 85.5,
        "ast": 62.1,
        "stl": 19.53,
        "blk": 9.15,
        "tpm": 31.8,
        "to": 34.1,
        "fgPct": 46.7,
        "ftPct": 78.8
      },
      "rank": {
        "pts": 11,
        "reb": 12,
        "ast": 10,
        "stl": 12,
        "blk": 12,
        "tpm": 11,
        "fgPct": 10,
        "ftPct": 5,
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
