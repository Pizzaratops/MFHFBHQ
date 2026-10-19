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
  "generatedAt": "2026-10-19T16:54:24.901Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, noch ohne Saisonspiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 440.9,
        "reb": 159.6,
        "ast": 100.5,
        "stl": 28.25,
        "blk": 19.63,
        "tpm": 39.5,
        "to": 53.4,
        "fgPct": 48.5,
        "ftPct": 78.4
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
      "includedCount": 27,
      "projCount": 27,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 2,
      "name": "Seagulls",
      "owner": "Möwe",
      "values": {
        "pts": 335,
        "reb": 126.2,
        "ast": 73.3,
        "stl": 23.25,
        "blk": 16.47,
        "tpm": 39.4,
        "to": 39.6,
        "fgPct": 47.8,
        "ftPct": 78.4
      },
      "rank": {
        "pts": 6,
        "reb": 4,
        "ast": 8,
        "stl": 4,
        "blk": 4,
        "tpm": 4,
        "fgPct": 4,
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
        "pts": 338.2,
        "reb": 113.4,
        "ast": 76.8,
        "stl": 22.33,
        "blk": 11.42,
        "tpm": 42.5,
        "to": 36.3,
        "fgPct": 46.8,
        "ftPct": 81
      },
      "rank": {
        "pts": 5,
        "reb": 11,
        "ast": 6,
        "stl": 7,
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
        "pts": 364.7,
        "reb": 119.2,
        "ast": 80.4,
        "stl": 20.86,
        "blk": 11.33,
        "tpm": 45.4,
        "to": 39.6,
        "fgPct": 46.5,
        "ftPct": 81.5
      },
      "rank": {
        "pts": 2,
        "reb": 7,
        "ast": 3,
        "stl": 11,
        "blk": 11,
        "tpm": 1,
        "fgPct": 11,
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
        "pts": 329.5,
        "reb": 117.8,
        "ast": 73.8,
        "stl": 21.49,
        "blk": 11.82,
        "tpm": 37.9,
        "to": 36.5,
        "fgPct": 47.8,
        "ftPct": 81.2
      },
      "rank": {
        "pts": 8,
        "reb": 8,
        "ast": 7,
        "stl": 10,
        "blk": 9,
        "tpm": 5,
        "fgPct": 5,
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
        "pts": 284.9,
        "reb": 119.4,
        "ast": 63.5,
        "stl": 21.9,
        "blk": 15.65,
        "tpm": 35.7,
        "to": 35.7,
        "fgPct": 46.8,
        "ftPct": 77.5
      },
      "rank": {
        "pts": 11,
        "reb": 6,
        "ast": 11,
        "stl": 9,
        "blk": 5,
        "tpm": 7,
        "fgPct": 9,
        "ftPct": 10,
        "to": 4
      },
      "includedCount": 28,
      "projCount": 27,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 7,
      "name": "Always Money In The BananaStand",
      "owner": "KraftPaket Knödel",
      "values": {
        "pts": 339.3,
        "reb": 142,
        "ast": 79.1,
        "stl": 22.75,
        "blk": 19.09,
        "tpm": 32.3,
        "to": 41.4,
        "fgPct": 48.1,
        "ftPct": 77.1
      },
      "rank": {
        "pts": 4,
        "reb": 3,
        "ast": 5,
        "stl": 6,
        "blk": 2,
        "tpm": 11,
        "fgPct": 3,
        "ftPct": 11,
        "to": 9
      },
      "includedCount": 27,
      "projCount": 27,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 8,
      "name": "Kawhi So Serious",
      "owner": "Harald Peterson",
      "values": {
        "pts": 331.7,
        "reb": 157.1,
        "ast": 79.6,
        "stl": 24.36,
        "blk": 18.53,
        "tpm": 33.3,
        "to": 41.7,
        "fgPct": 47.7,
        "ftPct": 74.8
      },
      "rank": {
        "pts": 7,
        "reb": 2,
        "ast": 4,
        "stl": 3,
        "blk": 3,
        "tpm": 10,
        "fgPct": 6,
        "ftPct": 12,
        "to": 10
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
        "pts": 309.7,
        "reb": 113.8,
        "ast": 67.6,
        "stl": 22.89,
        "blk": 12.18,
        "tpm": 31.9,
        "to": 34,
        "fgPct": 48.4,
        "ftPct": 78.4
      },
      "rank": {
        "pts": 9,
        "reb": 10,
        "ast": 9,
        "stl": 5,
        "blk": 8,
        "tpm": 12,
        "fgPct": 2,
        "ftPct": 7,
        "to": 2
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
        "pts": 303.5,
        "reb": 114.6,
        "ast": 62.9,
        "stl": 22.27,
        "blk": 14.1,
        "tpm": 34.6,
        "to": 34.7,
        "fgPct": 46.7,
        "ftPct": 78.4
      },
      "rank": {
        "pts": 10,
        "reb": 9,
        "ast": 12,
        "stl": 8,
        "blk": 7,
        "tpm": 8,
        "fgPct": 10,
        "ftPct": 8,
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
        "pts": 341.8,
        "reb": 120.1,
        "ast": 91.1,
        "stl": 25.41,
        "blk": 14.27,
        "tpm": 36.9,
        "to": 43.8,
        "fgPct": 47.7,
        "ftPct": 77.8
      },
      "rank": {
        "pts": 3,
        "reb": 5,
        "ast": 2,
        "stl": 2,
        "blk": 6,
        "tpm": 6,
        "fgPct": 7,
        "ftPct": 9,
        "to": 11
      },
      "includedCount": 27,
      "projCount": 27,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 12,
      "name": "Vancouver Curry-Wurst",
      "owner": "German Bratwurst",
      "values": {
        "pts": 280.2,
        "reb": 85.7,
        "ast": 63.8,
        "stl": 18.89,
        "blk": 9.09,
        "tpm": 33.4,
        "to": 33.8,
        "fgPct": 46.4,
        "ftPct": 78.7
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 10,
        "stl": 12,
        "blk": 12,
        "tpm": 9,
        "fgPct": 12,
        "ftPct": 4,
        "to": 1
      },
      "includedCount": 25,
      "projCount": 25,
      "skippedCount": 1,
      "skippedPlayers": [
        "Ben Simmons"
      ]
    }
  ]
};
