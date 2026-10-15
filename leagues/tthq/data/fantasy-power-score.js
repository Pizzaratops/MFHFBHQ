// ============================================================
//  FANTASY BOOTLEG POWER SCORE — automatisch generiert von
//  scripts/build-fantasy-power-score.js. NICHT MANUELL EDITIEREN.
//
//  9-Kategorien-Spinnennetz für die 12 TTHQ-Fantasy-Teams. Basis:
//  aktueller Kader (ROSTERS_LIVE) × echte Saison-2025/26-Boxscores
//  (LAST_SEASON_STATS_2025_26) -- siehe Kommentar im Sync-Script für
//  die Begründung dieser Datenquelle (kein ESPN-Netzwerkzugriff nötig).
//  FANTASY_POWER_SCORE.teams[i].values = Kader-Summe (PTS/REB/AST/
//  STL/BLK/3PM/TO) bzw. spielegewichteter Durchschnitt (FG%/FT%).
//  .rank = Liga-Rang (1-12) je Kategorie. Frontend berechnet daraus
//  den Radar-Plot-Wert per (N+1)-Rang-Trick.
// ============================================================
const FANTASY_POWER_SCORE = {
  "generatedAt": "2026-10-15T15:55:25.412Z",
  "sourceSeason": "2025-26 (letzte abgeschlossene Saison, BBM-Export — siehe data/last-season-stats-2025-26.js)",
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
        "pts": 348.6,
        "reb": 117.1,
        "ast": 85.5,
        "stl": 21.52,
        "blk": 14.75,
        "tpm": 30.6,
        "to": 41.8,
        "fgPct": 49.8,
        "ftPct": 78.3
      },
      "rank": {
        "pts": 3,
        "reb": 7,
        "ast": 2,
        "stl": 5,
        "blk": 5,
        "tpm": 8,
        "fgPct": 2,
        "ftPct": 5,
        "to": 10
      },
      "includedCount": 19,
      "skippedCount": 8,
      "skippedPlayers": [
        "Cameron Boozer",
        "Caleb Wilson",
        "AJ Dybantsa",
        "Darryn Peterson",
        "Keaton Wagler",
        "Morez Johnson Jr.",
        "Brayden Burries",
        "Bruce Thornton"
      ]
    },
    {
      "id": 2,
      "name": "Seagulls",
      "owner": "Möwe",
      "values": {
        "pts": 337.1,
        "reb": 120.7,
        "ast": 75.4,
        "stl": 21.25,
        "blk": 15.06,
        "tpm": 40.2,
        "to": 41.7,
        "fgPct": 47.9,
        "ftPct": 78.8
      },
      "rank": {
        "pts": 5,
        "reb": 3,
        "ast": 5,
        "stl": 6,
        "blk": 4,
        "tpm": 3,
        "fgPct": 7,
        "ftPct": 3,
        "to": 9
      },
      "includedCount": 27,
      "skippedCount": 1,
      "skippedPlayers": [
        "Allen Graves"
      ]
    },
    {
      "id": 3,
      "name": "Neukoelln Hustlers",
      "owner": "Timo Xtremo",
      "values": {
        "pts": 352.8,
        "reb": 119.9,
        "ast": 78.4,
        "stl": 22.3,
        "blk": 11.89,
        "tpm": 43,
        "to": 36.6,
        "fgPct": 46.9,
        "ftPct": 78.1
      },
      "rank": {
        "pts": 2,
        "reb": 4,
        "ast": 4,
        "stl": 2,
        "blk": 8,
        "tpm": 2,
        "fgPct": 10,
        "ftPct": 6,
        "to": 4
      },
      "includedCount": 26,
      "skippedCount": 0,
      "skippedPlayers": []
    },
    {
      "id": 4,
      "name": "Leaveland Cavaliers",
      "owner": "Sven",
      "values": {
        "pts": 377,
        "reb": 115.8,
        "ast": 83.2,
        "stl": 19.45,
        "blk": 11.19,
        "tpm": 46,
        "to": 42.2,
        "fgPct": 46.3,
        "ftPct": 79.6
      },
      "rank": {
        "pts": 1,
        "reb": 8,
        "ast": 3,
        "stl": 10,
        "blk": 10,
        "tpm": 1,
        "fgPct": 12,
        "ftPct": 2,
        "to": 11
      },
      "includedCount": 25,
      "skippedCount": 1,
      "skippedPlayers": [
        "Meleek Thomas"
      ]
    },
    {
      "id": 5,
      "name": "Anadolu Ballers",
      "owner": "Murat Oguz",
      "values": {
        "pts": 333.7,
        "reb": 114.9,
        "ast": 73.8,
        "stl": 20.84,
        "blk": 11.48,
        "tpm": 37.3,
        "to": 36.7,
        "fgPct": 47.3,
        "ftPct": 79.8
      },
      "rank": {
        "pts": 6,
        "reb": 9,
        "ast": 6,
        "stl": 7,
        "blk": 9,
        "tpm": 4,
        "fgPct": 9,
        "ftPct": 1,
        "to": 6
      },
      "includedCount": 24,
      "skippedCount": 2,
      "skippedPlayers": [
        "Kyrie Irving",
        "Yaxel Lendeborg"
      ]
    },
    {
      "id": 6,
      "name": "3-POINT MAFIA",
      "owner": "Patrick & Bennet",
      "values": {
        "pts": 291.6,
        "reb": 112.4,
        "ast": 65.4,
        "stl": 21.63,
        "blk": 15.2,
        "tpm": 36.5,
        "to": 37.6,
        "fgPct": 46.6,
        "ftPct": 76.2
      },
      "rank": {
        "pts": 9,
        "reb": 10,
        "ast": 8,
        "stl": 4,
        "blk": 3,
        "tpm": 5,
        "fgPct": 11,
        "ftPct": 10,
        "to": 8
      },
      "includedCount": 25,
      "skippedCount": 3,
      "skippedPlayers": [
        "Thomas Sorber",
        "Hannes Steinbach",
        "Trevon Brazile"
      ]
    },
    {
      "id": 7,
      "name": "Always Money In The BananaStand",
      "owner": "KraftPaket Knödel",
      "values": {
        "pts": 300.8,
        "reb": 126.3,
        "ast": 73.2,
        "stl": 20.66,
        "blk": 16.09,
        "tpm": 28.4,
        "to": 36.6,
        "fgPct": 48.8,
        "ftPct": 77.3
      },
      "rank": {
        "pts": 8,
        "reb": 2,
        "ast": 7,
        "stl": 8,
        "blk": 2,
        "tpm": 9,
        "fgPct": 4,
        "ftPct": 8,
        "to": 5
      },
      "includedCount": 22,
      "skippedCount": 4,
      "skippedPlayers": [
        "Darius Acuff Jr.",
        "Aday Mara",
        "Dailyn Swain",
        "Henri Veesaar"
      ]
    },
    {
      "id": 8,
      "name": "Kawhi So Serious",
      "owner": "Harald Peterson",
      "values": {
        "pts": 287.2,
        "reb": 135.8,
        "ast": 62.1,
        "stl": 20.2,
        "blk": 16.25,
        "tpm": 27.3,
        "to": 36.9,
        "fgPct": 49.1,
        "ftPct": 73.2
      },
      "rank": {
        "pts": 10,
        "reb": 1,
        "ast": 10,
        "stl": 9,
        "blk": 1,
        "tpm": 11,
        "fgPct": 3,
        "ftPct": 12,
        "to": 7
      },
      "includedCount": 22,
      "skippedCount": 4,
      "skippedPlayers": [
        "Fred VanVleet",
        "Mikel Brown Jr.",
        "Nate Ament",
        "Karim Lopez"
      ]
    },
    {
      "id": 9,
      "name": "Cooking Show",
      "owner": "Stefan Estepham",
      "values": {
        "pts": 254,
        "reb": 89.4,
        "ast": 59.7,
        "stl": 18.78,
        "blk": 8.36,
        "tpm": 24,
        "to": 29.6,
        "fgPct": 50,
        "ftPct": 78
      },
      "rank": {
        "pts": 11,
        "reb": 11,
        "ast": 11,
        "stl": 11,
        "blk": 11,
        "tpm": 12,
        "fgPct": 1,
        "ftPct": 7,
        "to": 1
      },
      "includedCount": 20,
      "skippedCount": 6,
      "skippedPlayers": [
        "Damian Lillard",
        "Jayden Quaintance",
        "Ebuka Okorie",
        "Chris Cenac Jr.",
        "Zuby Ejiofor",
        "Ryan Conwell"
      ]
    },
    {
      "id": 10,
      "name": "S-Town Grizzlies",
      "owner": "Jan Schattschneider",
      "values": {
        "pts": 304.1,
        "reb": 119.5,
        "ast": 63.7,
        "stl": 22.28,
        "blk": 13.36,
        "tpm": 31.6,
        "to": 36.4,
        "fgPct": 48,
        "ftPct": 76.8
      },
      "rank": {
        "pts": 7,
        "reb": 5,
        "ast": 9,
        "stl": 3,
        "blk": 6,
        "tpm": 7,
        "fgPct": 6,
        "ftPct": 9,
        "to": 3
      },
      "includedCount": 25,
      "skippedCount": 3,
      "skippedPlayers": [
        "Labaron Philon Jr.",
        "Joshua Jefferson",
        "Tarris Reed Jr."
      ]
    },
    {
      "id": 11,
      "name": "Double Dribble Trouble",
      "owner": "Nils",
      "values": {
        "pts": 339.2,
        "reb": 117.2,
        "ast": 85.6,
        "stl": 25.66,
        "blk": 12.98,
        "tpm": 34.6,
        "to": 44.9,
        "fgPct": 47.7,
        "ftPct": 76.1
      },
      "rank": {
        "pts": 4,
        "reb": 6,
        "ast": 1,
        "stl": 1,
        "blk": 7,
        "tpm": 6,
        "fgPct": 8,
        "ftPct": 11,
        "to": 12
      },
      "includedCount": 24,
      "skippedCount": 3,
      "skippedPlayers": [
        "Tyrese Haliburton",
        "Kingston Flemings",
        "Sergio de Larrea"
      ]
    },
    {
      "id": 12,
      "name": "Vancouver Curry-Wurst",
      "owner": "German Bratwurst",
      "values": {
        "pts": 251,
        "reb": 73.1,
        "ast": 56.4,
        "stl": 16.38,
        "blk": 7.71,
        "tpm": 27.7,
        "to": 31.5,
        "fgPct": 48.5,
        "ftPct": 78.5
      },
      "rank": {
        "pts": 12,
        "reb": 12,
        "ast": 12,
        "stl": 12,
        "blk": 12,
        "tpm": 10,
        "fgPct": 5,
        "ftPct": 4,
        "to": 2
      },
      "includedCount": 21,
      "skippedCount": 4,
      "skippedPlayers": [
        "Cameron Carr",
        "Christian Anderson",
        "Bennett Stirtz",
        "Ben Simmons"
      ]
    }
  ]
};
