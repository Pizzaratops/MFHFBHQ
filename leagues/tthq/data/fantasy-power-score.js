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
  "generatedAt": "2026-10-18T07:01:13.174Z",
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
        "pts": 451.2,
        "reb": 162.5,
        "ast": 103.3,
        "stl": 28.43,
        "blk": 20.26,
        "tpm": 39.6,
        "to": 55,
        "fgPct": 48.8,
        "ftPct": 78.5
      },
      "rank": {
        "pts": 1,
        "reb": 1,
        "ast": 1,
        "stl": 1,
        "blk": 1,
        "tpm": 3,
        "fgPct": 1,
        "ftPct": 6,
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
        "pts": 338.8,
        "reb": 125.8,
        "ast": 74.3,
        "stl": 22.66,
        "blk": 16.52,
        "tpm": 39.2,
        "to": 40.3,
        "fgPct": 48.1,
        "ftPct": 78.6
      },
      "rank": {
        "pts": 6,
        "reb": 4,
        "ast": 8,
        "stl": 4,
        "blk": 4,
        "tpm": 4,
        "fgPct": 5,
        "ftPct": 5,
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
        "pts": 349.5,
        "reb": 114.8,
        "ast": 79.6,
        "stl": 22.29,
        "blk": 11.52,
        "tpm": 44.3,
        "to": 37.5,
        "fgPct": 46.8,
        "ftPct": 81.2
      },
      "rank": {
        "pts": 4,
        "reb": 9,
        "ast": 5,
        "stl": 6,
        "blk": 10,
        "tpm": 2,
        "fgPct": 11,
        "ftPct": 3,
        "to": 6
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
        "pts": 372.5,
        "reb": 119.2,
        "ast": 82,
        "stl": 20.46,
        "blk": 11.32,
        "tpm": 45.8,
        "to": 40.7,
        "fgPct": 46.7,
        "ftPct": 81.6
      },
      "rank": {
        "pts": 2,
        "reb": 6,
        "ast": 3,
        "stl": 11,
        "blk": 11,
        "tpm": 1,
        "fgPct": 12,
        "ftPct": 1,
        "to": 9
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
        "pts": 335.5,
        "reb": 119,
        "ast": 74.4,
        "stl": 21.04,
        "blk": 11.82,
        "tpm": 38.5,
        "to": 37.1,
        "fgPct": 48,
        "ftPct": 81.3
      },
      "rank": {
        "pts": 7,
        "reb": 7,
        "ast": 6,
        "stl": 10,
        "blk": 8,
        "tpm": 5,
        "fgPct": 6,
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
        "pts": 289.4,
        "reb": 118.9,
        "ast": 64.9,
        "stl": 21.36,
        "blk": 15.58,
        "tpm": 35.6,
        "to": 36.5,
        "fgPct": 47.2,
        "ftPct": 77.7
      },
      "rank": {
        "pts": 11,
        "reb": 8,
        "ast": 11,
        "stl": 9,
        "blk": 5,
        "tpm": 7,
        "fgPct": 8,
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
        "pts": 343.9,
        "reb": 142.2,
        "ast": 80.9,
        "stl": 22.4,
        "blk": 18.9,
        "tpm": 32,
        "to": 42.4,
        "fgPct": 48.2,
        "ftPct": 77.3
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 4,
        "stl": 5,
        "blk": 2,
        "tpm": 11,
        "fgPct": 4,
        "ftPct": 11,
        "to": 10
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
        "pts": 322.4,
        "reb": 150.6,
        "ast": 74.4,
        "stl": 22.77,
        "blk": 18.27,
        "tpm": 32.6,
        "to": 40.2,
        "fgPct": 48.5,
        "ftPct": 75.6
      },
      "rank": {
        "pts": 8,
        "reb": 2,
        "ast": 7,
        "stl": 3,
        "blk": 3,
        "tpm": 9,
        "fgPct": 3,
        "ftPct": 12,
        "to": 7
      },
      "includedCount": 26,
      "projCount": 25,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 9,
      "name": "Cooking Show",
      "owner": "Stefan Estepham",
      "values": {
        "pts": 310.8,
        "reb": 111.4,
        "ast": 67.7,
        "stl": 22.08,
        "blk": 11.71,
        "tpm": 31,
        "to": 33.8,
        "fgPct": 48.8,
        "ftPct": 78.4
      },
      "rank": {
        "pts": 9,
        "reb": 11,
        "ast": 10,
        "stl": 7,
        "blk": 9,
        "tpm": 12,
        "fgPct": 2,
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
        "pts": 307,
        "reb": 112.9,
        "ast": 62,
        "stl": 21.54,
        "blk": 14.03,
        "tpm": 34.6,
        "to": 34.6,
        "fgPct": 47,
        "ftPct": 78.7
      },
      "rank": {
        "pts": 10,
        "reb": 10,
        "ast": 12,
        "stl": 8,
        "blk": 7,
        "tpm": 8,
        "fgPct": 9,
        "ftPct": 4,
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
        "pts": 357.4,
        "reb": 124,
        "ast": 95.6,
        "stl": 25.77,
        "blk": 14.76,
        "tpm": 37.6,
        "to": 45.9,
        "fgPct": 48,
        "ftPct": 78
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
        "pts": 285.9,
        "reb": 87.8,
        "ast": 69.1,
        "stl": 18.63,
        "blk": 9.4,
        "tpm": 32.5,
        "to": 36.1,
        "fgPct": 47,
        "ftPct": 78.5
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 9,
        "stl": 12,
        "blk": 12,
        "tpm": 10,
        "fgPct": 10,
        "ftPct": 7,
        "to": 3
      },
      "includedCount": 25,
      "projCount": 25,
      "skippedCount": 0,
      "skippedPlayers": []
    }
  ]
};
