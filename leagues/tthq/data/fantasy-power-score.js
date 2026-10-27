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
  "generatedAt": "2026-10-27T03:01:21.739Z",
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
        "pts": 440.8,
        "reb": 161.7,
        "ast": 100.8,
        "stl": 29.66,
        "blk": 19.37,
        "tpm": 40.7,
        "to": 56.7,
        "fgPct": 48.1,
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
        "pts": 332.4,
        "reb": 129.9,
        "ast": 75.1,
        "stl": 24.5,
        "blk": 16.74,
        "tpm": 38.8,
        "to": 41.3,
        "fgPct": 47.6,
        "ftPct": 77.8
      },
      "rank": {
        "pts": 5,
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
        "tpm": 1,
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
        "pts": 363.4,
        "reb": 121.3,
        "ast": 79.2,
        "stl": 22.16,
        "blk": 11.34,
        "tpm": 44.5,
        "to": 41.6,
        "fgPct": 46,
        "ftPct": 81.2
      },
      "rank": {
        "pts": 2,
        "reb": 6,
        "ast": 4,
        "stl": 8,
        "blk": 11,
        "tpm": 2,
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
        "pts": 320.5,
        "reb": 116.3,
        "ast": 71.4,
        "stl": 20.74,
        "blk": 11.44,
        "tpm": 37,
        "to": 36.8,
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
        "fgPct": 7,
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
        "pts": 279.9,
        "reb": 115.9,
        "ast": 60.8,
        "stl": 21.78,
        "blk": 14.78,
        "tpm": 36.1,
        "to": 35.2,
        "fgPct": 46.5,
        "ftPct": 76.9
      },
      "rank": {
        "pts": 11,
        "reb": 9,
        "ast": 12,
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
        "pts": 6,
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
        "pts": 322.6,
        "reb": 156,
        "ast": 79.2,
        "stl": 23.68,
        "blk": 18.44,
        "tpm": 32.1,
        "to": 42.2,
        "fgPct": 48,
        "ftPct": 75.5
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
        "pts": 288,
        "reb": 108.9,
        "ast": 63,
        "stl": 20.99,
        "blk": 13.26,
        "tpm": 33.5,
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
        "pts": 346.5,
        "reb": 121.7,
        "ast": 92.7,
        "stl": 26.5,
        "blk": 14.75,
        "tpm": 36.2,
        "to": 45.1,
        "fgPct": 47.4,
        "ftPct": 78.1
      },
      "rank": {
        "pts": 4,
        "reb": 5,
        "ast": 2,
        "stl": 2,
        "blk": 6,
        "tpm": 6,
        "fgPct": 6,
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
        "pts": 275.8,
        "reb": 87.4,
        "ast": 61,
        "stl": 20.31,
        "blk": 9.46,
        "tpm": 32.6,
        "to": 36.3,
        "fgPct": 46.1,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 11,
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
