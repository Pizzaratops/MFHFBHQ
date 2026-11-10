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
  "generatedAt": "2026-11-10T02:52:45.738Z",
  "sourceSeason": "Live Projections 2026/27 (Projection + bisherige Saison, bis zu 12 Spiele) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26",
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
        "pts": 449.6,
        "reb": 165,
        "ast": 109,
        "stl": 30.25,
        "blk": 20.43,
        "tpm": 40.9,
        "to": 57.3,
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
        "pts": 313.4,
        "reb": 118.9,
        "ast": 73.3,
        "stl": 21.65,
        "blk": 14.16,
        "tpm": 38,
        "to": 39.2,
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
        "pts": 346.8,
        "reb": 113.8,
        "ast": 79,
        "stl": 26.71,
        "blk": 12.6,
        "tpm": 44.7,
        "to": 39.8,
        "fgPct": 45.9,
        "ftPct": 78.9
      },
      "rank": {
        "pts": 4,
        "reb": 9,
        "ast": 5,
        "stl": 2,
        "blk": 9,
        "tpm": 2,
        "fgPct": 12,
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
        "pts": 374.6,
        "reb": 128.4,
        "ast": 84.2,
        "stl": 23.82,
        "blk": 12.7,
        "tpm": 47.5,
        "to": 44.9,
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
        "pts": 278.7,
        "reb": 114.2,
        "ast": 59,
        "stl": 20.85,
        "blk": 14.93,
        "tpm": 35,
        "to": 36.2,
        "fgPct": 46.5,
        "ftPct": 76.4
      },
      "rank": {
        "pts": 11,
        "reb": 8,
        "ast": 12,
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
        "pts": 333.6,
        "reb": 147.1,
        "ast": 82.2,
        "stl": 23.55,
        "blk": 19.18,
        "tpm": 32.7,
        "to": 44.4,
        "fgPct": 47.7,
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
        "pts": 324.9,
        "reb": 154.2,
        "ast": 78,
        "stl": 23.4,
        "blk": 17.69,
        "tpm": 32.7,
        "to": 42.1,
        "fgPct": 47.9,
        "ftPct": 76.1
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
        "pts": 285.4,
        "reb": 106.9,
        "ast": 62.4,
        "stl": 22.48,
        "blk": 11.61,
        "tpm": 29.5,
        "to": 33.6,
        "fgPct": 48.1,
        "ftPct": 77.9
      },
      "rank": {
        "pts": 9,
        "reb": 11,
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
        "pts": 285.3,
        "reb": 116.4,
        "ast": 68.4,
        "stl": 21.7,
        "blk": 15.08,
        "tpm": 30.3,
        "to": 39,
        "fgPct": 47.1,
        "ftPct": 78.1
      },
      "rank": {
        "pts": 10,
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
        "pts": 362.7,
        "reb": 123.8,
        "ast": 92.4,
        "stl": 25.66,
        "blk": 14.56,
        "tpm": 39.4,
        "to": 47.4,
        "fgPct": 46.9,
        "ftPct": 79.6
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
        "pts": 254.2,
        "reb": 85,
        "ast": 59.5,
        "stl": 17.42,
        "blk": 9.11,
        "tpm": 29.5,
        "to": 35.3,
        "fgPct": 46,
        "ftPct": 78.4
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 11,
        "stl": 12,
        "blk": 12,
        "tpm": 12,
        "fgPct": 11,
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
