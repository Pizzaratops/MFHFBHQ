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
  "generatedAt": "2026-11-05T03:01:24.297Z",
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
        "pts": 448.4,
        "reb": 162.1,
        "ast": 107.4,
        "stl": 30.48,
        "blk": 19.42,
        "tpm": 40.5,
        "to": 56.7,
        "fgPct": 48.2,
        "ftPct": 78.9
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
        "pts": 322.7,
        "reb": 129.1,
        "ast": 75.6,
        "stl": 23.04,
        "blk": 15.68,
        "tpm": 39,
        "to": 41,
        "fgPct": 47.5,
        "ftPct": 78.5
      },
      "rank": {
        "pts": 7,
        "reb": 4,
        "ast": 7,
        "stl": 7,
        "blk": 4,
        "tpm": 5,
        "fgPct": 5,
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
        "pts": 350.4,
        "reb": 117.9,
        "ast": 80.5,
        "stl": 26.58,
        "blk": 13.2,
        "tpm": 45.1,
        "to": 40.1,
        "fgPct": 46.2,
        "ftPct": 79.6
      },
      "rank": {
        "pts": 4,
        "reb": 7,
        "ast": 4,
        "stl": 2,
        "blk": 8,
        "tpm": 2,
        "fgPct": 11,
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
        "pts": 372.9,
        "reb": 126.2,
        "ast": 83.7,
        "stl": 24.13,
        "blk": 11.94,
        "tpm": 47.5,
        "to": 43.7,
        "fgPct": 46.4,
        "ftPct": 81.1
      },
      "rank": {
        "pts": 2,
        "reb": 5,
        "ast": 3,
        "stl": 4,
        "blk": 10,
        "tpm": 1,
        "fgPct": 10,
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
        "pts": 306.6,
        "reb": 111,
        "ast": 69.4,
        "stl": 20.69,
        "blk": 11.41,
        "tpm": 34.5,
        "to": 37.6,
        "fgPct": 47.1,
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
        "pts": 281.1,
        "reb": 117.3,
        "ast": 58.9,
        "stl": 21.46,
        "blk": 15.37,
        "tpm": 35.8,
        "to": 35.4,
        "fgPct": 46.8,
        "ftPct": 77
      },
      "rank": {
        "pts": 11,
        "reb": 8,
        "ast": 12,
        "stl": 9,
        "blk": 5,
        "tpm": 6,
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
        "pts": 333.3,
        "reb": 146.9,
        "ast": 79.8,
        "stl": 23.85,
        "blk": 19.02,
        "tpm": 32.9,
        "to": 44.9,
        "fgPct": 47.7,
        "ftPct": 76.6
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 5,
        "stl": 5,
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
        "pts": 324.8,
        "reb": 156.1,
        "ast": 78.3,
        "stl": 23.19,
        "blk": 17.87,
        "tpm": 33.1,
        "to": 41.4,
        "fgPct": 48.2,
        "ftPct": 75.8
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
        "pts": 281.3,
        "reb": 109.5,
        "ast": 62.2,
        "stl": 22.23,
        "blk": 12.2,
        "tpm": 28.5,
        "to": 33.7,
        "fgPct": 48.4,
        "ftPct": 77.4
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
        "pts": 285.5,
        "reb": 116.4,
        "ast": 66.1,
        "stl": 20.73,
        "blk": 14.86,
        "tpm": 30.7,
        "to": 36.7,
        "fgPct": 47.3,
        "ftPct": 78.4
      },
      "rank": {
        "pts": 9,
        "reb": 9,
        "ast": 9,
        "stl": 10,
        "blk": 6,
        "tpm": 11,
        "fgPct": 6,
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
        "pts": 360.9,
        "reb": 123.1,
        "ast": 92.2,
        "stl": 25.37,
        "blk": 14.39,
        "tpm": 39.1,
        "to": 47,
        "fgPct": 47.1,
        "ftPct": 78.7
      },
      "rank": {
        "pts": 3,
        "reb": 6,
        "ast": 2,
        "stl": 3,
        "blk": 7,
        "tpm": 4,
        "fgPct": 8,
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
        "pts": 262,
        "reb": 86.9,
        "ast": 60,
        "stl": 18.75,
        "blk": 9.55,
        "tpm": 31.1,
        "to": 35.5,
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
        "fgPct": 12,
        "ftPct": 8,
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
