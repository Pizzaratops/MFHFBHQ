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
  "generatedAt": "2026-10-30T11:35:50.393Z",
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
        "pts": 453.6,
        "reb": 166.3,
        "ast": 109.4,
        "stl": 30.71,
        "blk": 19.53,
        "tpm": 42.3,
        "to": 58.9,
        "fgPct": 47.7,
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
        "pts": 324.9,
        "reb": 126.7,
        "ast": 74.4,
        "stl": 23.9,
        "blk": 15.35,
        "tpm": 39.7,
        "to": 40.6,
        "fgPct": 47.2,
        "ftPct": 78.7
      },
      "rank": {
        "pts": 6,
        "reb": 4,
        "ast": 7,
        "stl": 4,
        "blk": 4,
        "tpm": 4,
        "fgPct": 6,
        "ftPct": 5,
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
        "reb": 119.2,
        "ast": 78.8,
        "stl": 25.91,
        "blk": 12.6,
        "tpm": 44.3,
        "to": 38.9,
        "fgPct": 46.3,
        "ftPct": 80.3
      },
      "rank": {
        "pts": 3,
        "reb": 7,
        "ast": 5,
        "stl": 2,
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
        "pts": 355.5,
        "reb": 121,
        "ast": 80.8,
        "stl": 23.54,
        "blk": 11.58,
        "tpm": 45.2,
        "to": 41.6,
        "fgPct": 45.9,
        "ftPct": 81.2
      },
      "rank": {
        "pts": 2,
        "reb": 5,
        "ast": 3,
        "stl": 5,
        "blk": 10,
        "tpm": 1,
        "fgPct": 12,
        "ftPct": 1,
        "to": 8
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
        "pts": 320.4,
        "reb": 115.2,
        "ast": 70.7,
        "stl": 20.32,
        "blk": 11.55,
        "tpm": 36.9,
        "to": 38,
        "fgPct": 47.2,
        "ftPct": 81
      },
      "rank": {
        "pts": 8,
        "reb": 9,
        "ast": 8,
        "stl": 11,
        "blk": 11,
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
        "pts": 283.2,
        "reb": 115.8,
        "ast": 60.3,
        "stl": 21.7,
        "blk": 14.73,
        "tpm": 35.8,
        "to": 34.9,
        "fgPct": 46.8,
        "ftPct": 77.1
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
        "pts": 331.8,
        "reb": 142.1,
        "ast": 80.3,
        "stl": 22.73,
        "blk": 18.35,
        "tpm": 32.4,
        "to": 44.9,
        "fgPct": 47.6,
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
        "to": 11
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
        "pts": 323,
        "reb": 155.7,
        "ast": 78.8,
        "stl": 23.23,
        "blk": 18.22,
        "tpm": 32.8,
        "to": 41.7,
        "fgPct": 48,
        "ftPct": 75.4
      },
      "rank": {
        "pts": 7,
        "reb": 2,
        "ast": 6,
        "stl": 6,
        "blk": 3,
        "tpm": 8,
        "fgPct": 2,
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
        "pts": 285.8,
        "reb": 108,
        "ast": 62.1,
        "stl": 22.25,
        "blk": 11.88,
        "tpm": 29,
        "to": 33.1,
        "fgPct": 48.4,
        "ftPct": 77.8
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
        "pts": 288.2,
        "reb": 114.9,
        "ast": 64.5,
        "stl": 20.9,
        "blk": 14.59,
        "tpm": 32.1,
        "to": 36,
        "fgPct": 46.9,
        "ftPct": 78.1
      },
      "rank": {
        "pts": 9,
        "reb": 10,
        "ast": 9,
        "stl": 10,
        "blk": 6,
        "tpm": 10,
        "fgPct": 8,
        "ftPct": 7,
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
        "pts": 344.7,
        "reb": 120.7,
        "ast": 87,
        "stl": 25.79,
        "blk": 14.32,
        "tpm": 36.1,
        "to": 43.2,
        "fgPct": 47.4,
        "ftPct": 78
      },
      "rank": {
        "pts": 4,
        "reb": 6,
        "ast": 2,
        "stl": 3,
        "blk": 7,
        "tpm": 6,
        "fgPct": 5,
        "ftPct": 8,
        "to": 10
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
        "pts": 266.7,
        "reb": 84.4,
        "ast": 59.2,
        "stl": 19.76,
        "blk": 9.25,
        "tpm": 31.6,
        "to": 35.1,
        "fgPct": 46,
        "ftPct": 78.7
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 11,
        "fgPct": 11,
        "ftPct": 6,
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
