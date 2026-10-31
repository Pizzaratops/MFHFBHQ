// ============================================================
//  NBA BOOTLEG POWER SCORE — automatisch generiert von
//  scripts/build-nba-power-score.js. NICHT MANUELL EDITIEREN.
//
//  NBA_POWER_SCORE.weeks[i].cumulative / .isolated = je 30 Teams mit
//  Rohwerten (values) + Liga-Rang (rank) je Kategorie (siehe categories).
//  Frontend berechnet daraus den Radar-Plot-Wert per (N+1)-Rang-Trick
//  (flipRankForRadar in scripts/lib/nba-sportsdataverse.js / js/nba-power-score.js).
//  Volle Team-Namen: NBA_TEAM_NAMES (js/nba-teams.js).
// ============================================================
const NBA_POWER_SCORE = {
  "season": 2027,
  "generatedAt": "2026-10-31T14:41:51.912Z",
  "categories": [
    {
      "key": "ortg",
      "label": "Offensive Rating",
      "lowerIsBetter": false
    },
    {
      "key": "drtg",
      "label": "Defensive Rating",
      "lowerIsBetter": true
    },
    {
      "key": "ptsPg",
      "label": "Points Scored",
      "lowerIsBetter": false
    },
    {
      "key": "oppPtsPg",
      "label": "Points Allowed",
      "lowerIsBetter": true
    },
    {
      "key": "tovPg",
      "label": "Turnovers",
      "lowerIsBetter": true
    },
    {
      "key": "drebPg",
      "label": "Def. Rebounds",
      "lowerIsBetter": false
    }
  ],
  "weeks": [
    {
      "matchupPeriodId": 1,
      "label": "Woche 1",
      "throughDate": "2026-10-20",
      "cumulative": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 113.9,
            "drtg": 117.4,
            "ptsPg": 113,
            "oppPtsPg": 121,
            "tovPg": 14,
            "drebPg": 27
          },
          "rank": {
            "ortg": 2,
            "drtg": 6,
            "ptsPg": 3,
            "oppPtsPg": 6,
            "tovPg": 4,
            "drebPg": 6
          }
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 117.4,
            "drtg": 113.9,
            "ptsPg": 121,
            "oppPtsPg": 113,
            "tovPg": 17,
            "drebPg": 35
          },
          "rank": {
            "ortg": 1,
            "drtg": 5,
            "ptsPg": 1,
            "oppPtsPg": 4,
            "tovPg": 6,
            "drebPg": 4
          }
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 94.4,
            "drtg": 101.1,
            "ptsPg": 100,
            "oppPtsPg": 106,
            "tovPg": 14,
            "drebPg": 39
          },
          "rank": {
            "ortg": 6,
            "drtg": 3,
            "ptsPg": 6,
            "oppPtsPg": 3,
            "tovPg": 5,
            "drebPg": 1
          }
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 110.7,
            "drtg": 97.2,
            "ptsPg": 116,
            "oppPtsPg": 104,
            "tovPg": 11,
            "drebPg": 37
          },
          "rank": {
            "ortg": 3,
            "drtg": 2,
            "ptsPg": 2,
            "oppPtsPg": 2,
            "tovPg": 2,
            "drebPg": 3
          }
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 101.1,
            "drtg": 94.4,
            "ptsPg": 106,
            "oppPtsPg": 100,
            "tovPg": 10,
            "drebPg": 39
          },
          "rank": {
            "ortg": 4,
            "drtg": 1,
            "ptsPg": 4,
            "oppPtsPg": 1,
            "tovPg": 1,
            "drebPg": 2
          }
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 97.2,
            "drtg": 110.7,
            "ptsPg": 104,
            "oppPtsPg": 116,
            "tovPg": 13,
            "drebPg": 35
          },
          "rank": {
            "ortg": 5,
            "drtg": 4,
            "ptsPg": 5,
            "oppPtsPg": 5,
            "tovPg": 3,
            "drebPg": 5
          }
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        }
      ],
      "isolated": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 113.9,
            "drtg": 117.4,
            "ptsPg": 113,
            "oppPtsPg": 121,
            "tovPg": 14,
            "drebPg": 27
          },
          "rank": {
            "ortg": 2,
            "drtg": 6,
            "ptsPg": 3,
            "oppPtsPg": 6,
            "tovPg": 4,
            "drebPg": 6
          }
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 117.4,
            "drtg": 113.9,
            "ptsPg": 121,
            "oppPtsPg": 113,
            "tovPg": 17,
            "drebPg": 35
          },
          "rank": {
            "ortg": 1,
            "drtg": 5,
            "ptsPg": 1,
            "oppPtsPg": 4,
            "tovPg": 6,
            "drebPg": 4
          }
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 94.4,
            "drtg": 101.1,
            "ptsPg": 100,
            "oppPtsPg": 106,
            "tovPg": 14,
            "drebPg": 39
          },
          "rank": {
            "ortg": 6,
            "drtg": 3,
            "ptsPg": 6,
            "oppPtsPg": 3,
            "tovPg": 5,
            "drebPg": 1
          }
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 110.7,
            "drtg": 97.2,
            "ptsPg": 116,
            "oppPtsPg": 104,
            "tovPg": 11,
            "drebPg": 37
          },
          "rank": {
            "ortg": 3,
            "drtg": 2,
            "ptsPg": 2,
            "oppPtsPg": 2,
            "tovPg": 2,
            "drebPg": 3
          }
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 101.1,
            "drtg": 94.4,
            "ptsPg": 106,
            "oppPtsPg": 100,
            "tovPg": 10,
            "drebPg": 39
          },
          "rank": {
            "ortg": 4,
            "drtg": 1,
            "ptsPg": 4,
            "oppPtsPg": 1,
            "tovPg": 1,
            "drebPg": 2
          }
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 97.2,
            "drtg": 110.7,
            "ptsPg": 104,
            "oppPtsPg": 116,
            "tovPg": 13,
            "drebPg": 35
          },
          "rank": {
            "ortg": 5,
            "drtg": 4,
            "ptsPg": 5,
            "oppPtsPg": 5,
            "tovPg": 3,
            "drebPg": 5
          }
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        }
      ]
    },
    {
      "matchupPeriodId": 2,
      "label": "Woche 2",
      "throughDate": "2026-10-21",
      "cumulative": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 118,
            "drtg": 110.5,
            "ptsPg": 132,
            "oppPtsPg": 125,
            "tovPg": 17,
            "drebPg": 31
          },
          "rank": {
            "ortg": 9,
            "drtg": 13,
            "ptsPg": 2,
            "oppPtsPg": 22,
            "tovPg": 16,
            "drebPg": 17
          }
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 113.9,
            "drtg": 117.4,
            "ptsPg": 113,
            "oppPtsPg": 121,
            "tovPg": 14,
            "drebPg": 27
          },
          "rank": {
            "ortg": 13,
            "drtg": 19,
            "ptsPg": 16,
            "oppPtsPg": 17,
            "tovPg": 8,
            "drebPg": 23
          }
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 101,
            "drtg": 105.2,
            "ptsPg": 103,
            "oppPtsPg": 110,
            "tovPg": 22,
            "drebPg": 27
          },
          "rank": {
            "ortg": 21,
            "drtg": 11,
            "ptsPg": 23,
            "oppPtsPg": 11,
            "tovPg": 27,
            "drebPg": 24
          }
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 105.2,
            "drtg": 101,
            "ptsPg": 110,
            "oppPtsPg": 103,
            "tovPg": 20,
            "drebPg": 29
          },
          "rank": {
            "ortg": 18,
            "drtg": 8,
            "ptsPg": 17,
            "oppPtsPg": 5,
            "tovPg": 24,
            "drebPg": 21
          }
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 82.4,
            "drtg": 120.3,
            "ptsPg": 92,
            "oppPtsPg": 135,
            "tovPg": 27,
            "drebPg": 36
          },
          "rank": {
            "ortg": 28,
            "drtg": 23,
            "ptsPg": 27,
            "oppPtsPg": 28,
            "tovPg": 28,
            "drebPg": 7
          }
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 105.3,
            "drtg": 132,
            "ptsPg": 110,
            "oppPtsPg": 128,
            "tovPg": 21,
            "drebPg": 25
          },
          "rank": {
            "ortg": 17,
            "drtg": 28,
            "ptsPg": 18,
            "oppPtsPg": 24,
            "tovPg": 26,
            "drebPg": 26
          }
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 117.4,
            "drtg": 113.9,
            "ptsPg": 121,
            "oppPtsPg": 113,
            "tovPg": 17,
            "drebPg": 35
          },
          "rank": {
            "ortg": 10,
            "drtg": 16,
            "ptsPg": 11,
            "oppPtsPg": 13,
            "tovPg": 17,
            "drebPg": 8
          }
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 101.1,
            "drtg": 125.9,
            "ptsPg": 105,
            "oppPtsPg": 127,
            "tovPg": 15,
            "drebPg": 21
          },
          "rank": {
            "ortg": 19,
            "drtg": 27,
            "ptsPg": 21,
            "oppPtsPg": 23,
            "tovPg": 12,
            "drebPg": 28
          }
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 132,
            "drtg": 105.3,
            "ptsPg": 128,
            "oppPtsPg": 110,
            "tovPg": 15,
            "drebPg": 25
          },
          "rank": {
            "ortg": 1,
            "drtg": 12,
            "ptsPg": 4,
            "oppPtsPg": 12,
            "tovPg": 13,
            "drebPg": 27
          }
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 115.2,
            "drtg": 114,
            "ptsPg": 123,
            "oppPtsPg": 120,
            "tovPg": 13,
            "drebPg": 34
          },
          "rank": {
            "ortg": 11,
            "drtg": 17,
            "ptsPg": 9,
            "oppPtsPg": 16,
            "tovPg": 5,
            "drebPg": 13
          }
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 119,
            "drtg": 92.9,
            "ptsPg": 121,
            "oppPtsPg": 96,
            "tovPg": 17,
            "drebPg": 38
          },
          "rank": {
            "ortg": 7,
            "drtg": 3,
            "ptsPg": 12,
            "oppPtsPg": 3,
            "tovPg": 18,
            "drebPg": 5
          }
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 125.9,
            "drtg": 101.1,
            "ptsPg": 127,
            "oppPtsPg": 105,
            "tovPg": 18,
            "drebPg": 33
          },
          "rank": {
            "ortg": 2,
            "drtg": 9,
            "ptsPg": 6,
            "oppPtsPg": 8,
            "tovPg": 21,
            "drebPg": 14
          }
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 119,
            "drtg": 100.5,
            "ptsPg": 123,
            "oppPtsPg": 103,
            "tovPg": 13,
            "drebPg": 40
          },
          "rank": {
            "ortg": 8,
            "drtg": 7,
            "ptsPg": 10,
            "oppPtsPg": 6,
            "tovPg": 6,
            "drebPg": 1
          }
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 99.6,
            "drtg": 121.6,
            "ptsPg": 106,
            "oppPtsPg": 131,
            "tovPg": 18,
            "drebPg": 30
          },
          "rank": {
            "ortg": 23,
            "drtg": 25,
            "ptsPg": 19,
            "oppPtsPg": 26,
            "tovPg": 22,
            "drebPg": 19
          }
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 111.4,
            "drtg": 124.2,
            "ptsPg": 116,
            "oppPtsPg": 128,
            "tovPg": 16,
            "drebPg": 28
          },
          "rank": {
            "ortg": 14,
            "drtg": 26,
            "ptsPg": 14,
            "oppPtsPg": 25,
            "tovPg": 15,
            "drebPg": 22
          }
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 121.6,
            "drtg": 99.6,
            "ptsPg": 131,
            "oppPtsPg": 106,
            "tovPg": 14,
            "drebPg": 35
          },
          "rank": {
            "ortg": 4,
            "drtg": 6,
            "ptsPg": 3,
            "oppPtsPg": 9,
            "tovPg": 9,
            "drebPg": 9
          }
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 114,
            "drtg": 115.2,
            "ptsPg": 120,
            "oppPtsPg": 123,
            "tovPg": 14,
            "drebPg": 35
          },
          "rank": {
            "ortg": 12,
            "drtg": 18,
            "ptsPg": 13,
            "oppPtsPg": 19,
            "tovPg": 10,
            "drebPg": 10
          }
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 94.4,
            "drtg": 101.1,
            "ptsPg": 100,
            "oppPtsPg": 106,
            "tovPg": 14,
            "drebPg": 39
          },
          "rank": {
            "ortg": 25,
            "drtg": 10,
            "ptsPg": 25,
            "oppPtsPg": 10,
            "tovPg": 11,
            "drebPg": 3
          }
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 110.7,
            "drtg": 97.2,
            "ptsPg": 116,
            "oppPtsPg": 104,
            "tovPg": 11,
            "drebPg": 37
          },
          "rank": {
            "ortg": 15,
            "drtg": 5,
            "ptsPg": 15,
            "oppPtsPg": 7,
            "tovPg": 3,
            "drebPg": 6
          }
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 110.5,
            "drtg": 118,
            "ptsPg": 125,
            "oppPtsPg": 132,
            "tovPg": 20,
            "drebPg": 30
          },
          "rank": {
            "ortg": 16,
            "drtg": 20,
            "ptsPg": 7,
            "oppPtsPg": 27,
            "tovPg": 25,
            "drebPg": 20
          }
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 101.1,
            "drtg": 94.4,
            "ptsPg": 106,
            "oppPtsPg": 100,
            "tovPg": 10,
            "drebPg": 39
          },
          "rank": {
            "ortg": 20,
            "drtg": 4,
            "ptsPg": 20,
            "oppPtsPg": 4,
            "tovPg": 1,
            "drebPg": 4
          }
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 86.4,
            "drtg": 120.5,
            "ptsPg": 83,
            "oppPtsPg": 124,
            "tovPg": 15,
            "drebPg": 26
          },
          "rank": {
            "ortg": 27,
            "drtg": 24,
            "ptsPg": 28,
            "oppPtsPg": 21,
            "tovPg": 14,
            "drebPg": 25
          }
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 120.5,
            "drtg": 86.4,
            "ptsPg": 124,
            "oppPtsPg": 83,
            "tovPg": 17,
            "drebPg": 40
          },
          "rank": {
            "ortg": 5,
            "drtg": 2,
            "ptsPg": 8,
            "oppPtsPg": 1,
            "tovPg": 19,
            "drebPg": 2
          }
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 92.9,
            "drtg": 119,
            "ptsPg": 96,
            "oppPtsPg": 121,
            "tovPg": 17,
            "drebPg": 31
          },
          "rank": {
            "ortg": 26,
            "drtg": 21,
            "ptsPg": 26,
            "oppPtsPg": 18,
            "tovPg": 20,
            "drebPg": 18
          }
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 97.2,
            "drtg": 110.7,
            "ptsPg": 104,
            "oppPtsPg": 116,
            "tovPg": 13,
            "drebPg": 35
          },
          "rank": {
            "ortg": 24,
            "drtg": 14,
            "ptsPg": 22,
            "oppPtsPg": 14,
            "tovPg": 7,
            "drebPg": 11
          }
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 120.3,
            "drtg": 82.4,
            "ptsPg": 135,
            "oppPtsPg": 92,
            "tovPg": 10,
            "drebPg": 35
          },
          "rank": {
            "ortg": 6,
            "drtg": 1,
            "ptsPg": 1,
            "oppPtsPg": 2,
            "tovPg": 2,
            "drebPg": 12
          }
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 100.5,
            "drtg": 119,
            "ptsPg": 103,
            "oppPtsPg": 123,
            "tovPg": 18,
            "drebPg": 33
          },
          "rank": {
            "ortg": 22,
            "drtg": 22,
            "ptsPg": 24,
            "oppPtsPg": 20,
            "tovPg": 23,
            "drebPg": 15
          }
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 124.2,
            "drtg": 111.4,
            "ptsPg": 128,
            "oppPtsPg": 116,
            "tovPg": 11,
            "drebPg": 32
          },
          "rank": {
            "ortg": 3,
            "drtg": 15,
            "ptsPg": 5,
            "oppPtsPg": 15,
            "tovPg": 4,
            "drebPg": 16
          }
        }
      ],
      "isolated": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 118,
            "drtg": 110.5,
            "ptsPg": 132,
            "oppPtsPg": 125,
            "tovPg": 17,
            "drebPg": 31
          },
          "rank": {
            "ortg": 9,
            "drtg": 10,
            "ptsPg": 2,
            "oppPtsPg": 16,
            "tovPg": 11,
            "drebPg": 12
          }
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 101,
            "drtg": 105.2,
            "ptsPg": 103,
            "oppPtsPg": 110,
            "tovPg": 22,
            "drebPg": 27
          },
          "rank": {
            "ortg": 17,
            "drtg": 8,
            "ptsPg": 18,
            "oppPtsPg": 8,
            "tovPg": 21,
            "drebPg": 18
          }
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 105.2,
            "drtg": 101,
            "ptsPg": 110,
            "oppPtsPg": 103,
            "tovPg": 20,
            "drebPg": 29
          },
          "rank": {
            "ortg": 15,
            "drtg": 6,
            "ptsPg": 14,
            "oppPtsPg": 4,
            "tovPg": 18,
            "drebPg": 16
          }
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 82.4,
            "drtg": 120.3,
            "ptsPg": 92,
            "oppPtsPg": 135,
            "tovPg": 27,
            "drebPg": 36
          },
          "rank": {
            "ortg": 22,
            "drtg": 17,
            "ptsPg": 21,
            "oppPtsPg": 22,
            "tovPg": 22,
            "drebPg": 4
          }
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 105.3,
            "drtg": 132,
            "ptsPg": 110,
            "oppPtsPg": 128,
            "tovPg": 21,
            "drebPg": 25
          },
          "rank": {
            "ortg": 14,
            "drtg": 22,
            "ptsPg": 15,
            "oppPtsPg": 18,
            "tovPg": 20,
            "drebPg": 20
          }
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 101.1,
            "drtg": 125.9,
            "ptsPg": 105,
            "oppPtsPg": 127,
            "tovPg": 15,
            "drebPg": 21
          },
          "rank": {
            "ortg": 16,
            "drtg": 21,
            "ptsPg": 17,
            "oppPtsPg": 17,
            "tovPg": 7,
            "drebPg": 22
          }
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 132,
            "drtg": 105.3,
            "ptsPg": 128,
            "oppPtsPg": 110,
            "tovPg": 15,
            "drebPg": 25
          },
          "rank": {
            "ortg": 1,
            "drtg": 9,
            "ptsPg": 4,
            "oppPtsPg": 9,
            "tovPg": 8,
            "drebPg": 21
          }
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 115.2,
            "drtg": 114,
            "ptsPg": 123,
            "oppPtsPg": 120,
            "tovPg": 13,
            "drebPg": 34
          },
          "rank": {
            "ortg": 10,
            "drtg": 12,
            "ptsPg": 9,
            "oppPtsPg": 11,
            "tovPg": 3,
            "drebPg": 8
          }
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 119,
            "drtg": 92.9,
            "ptsPg": 121,
            "oppPtsPg": 96,
            "tovPg": 17,
            "drebPg": 38
          },
          "rank": {
            "ortg": 7,
            "drtg": 3,
            "ptsPg": 11,
            "oppPtsPg": 3,
            "tovPg": 12,
            "drebPg": 3
          }
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 125.9,
            "drtg": 101.1,
            "ptsPg": 127,
            "oppPtsPg": 105,
            "tovPg": 18,
            "drebPg": 33
          },
          "rank": {
            "ortg": 2,
            "drtg": 7,
            "ptsPg": 6,
            "oppPtsPg": 6,
            "tovPg": 15,
            "drebPg": 9
          }
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 119,
            "drtg": 100.5,
            "ptsPg": 123,
            "oppPtsPg": 103,
            "tovPg": 13,
            "drebPg": 40
          },
          "rank": {
            "ortg": 8,
            "drtg": 5,
            "ptsPg": 10,
            "oppPtsPg": 5,
            "tovPg": 4,
            "drebPg": 1
          }
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 99.6,
            "drtg": 121.6,
            "ptsPg": 106,
            "oppPtsPg": 131,
            "tovPg": 18,
            "drebPg": 30
          },
          "rank": {
            "ortg": 19,
            "drtg": 19,
            "ptsPg": 16,
            "oppPtsPg": 20,
            "tovPg": 16,
            "drebPg": 14
          }
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 111.4,
            "drtg": 124.2,
            "ptsPg": 116,
            "oppPtsPg": 128,
            "tovPg": 16,
            "drebPg": 28
          },
          "rank": {
            "ortg": 12,
            "drtg": 20,
            "ptsPg": 13,
            "oppPtsPg": 19,
            "tovPg": 10,
            "drebPg": 17
          }
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 121.6,
            "drtg": 99.6,
            "ptsPg": 131,
            "oppPtsPg": 106,
            "tovPg": 14,
            "drebPg": 35
          },
          "rank": {
            "ortg": 4,
            "drtg": 4,
            "ptsPg": 3,
            "oppPtsPg": 7,
            "tovPg": 5,
            "drebPg": 5
          }
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 114,
            "drtg": 115.2,
            "ptsPg": 120,
            "oppPtsPg": 123,
            "tovPg": 14,
            "drebPg": 35
          },
          "rank": {
            "ortg": 11,
            "drtg": 13,
            "ptsPg": 12,
            "oppPtsPg": 13,
            "tovPg": 6,
            "drebPg": 6
          }
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 110.5,
            "drtg": 118,
            "ptsPg": 125,
            "oppPtsPg": 132,
            "tovPg": 20,
            "drebPg": 30
          },
          "rank": {
            "ortg": 13,
            "drtg": 14,
            "ptsPg": 7,
            "oppPtsPg": 21,
            "tovPg": 19,
            "drebPg": 15
          }
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 86.4,
            "drtg": 120.5,
            "ptsPg": 83,
            "oppPtsPg": 124,
            "tovPg": 15,
            "drebPg": 26
          },
          "rank": {
            "ortg": 21,
            "drtg": 18,
            "ptsPg": 22,
            "oppPtsPg": 15,
            "tovPg": 9,
            "drebPg": 19
          }
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 120.5,
            "drtg": 86.4,
            "ptsPg": 124,
            "oppPtsPg": 83,
            "tovPg": 17,
            "drebPg": 40
          },
          "rank": {
            "ortg": 5,
            "drtg": 2,
            "ptsPg": 8,
            "oppPtsPg": 1,
            "tovPg": 13,
            "drebPg": 2
          }
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 92.9,
            "drtg": 119,
            "ptsPg": 96,
            "oppPtsPg": 121,
            "tovPg": 17,
            "drebPg": 31
          },
          "rank": {
            "ortg": 20,
            "drtg": 15,
            "ptsPg": 20,
            "oppPtsPg": 12,
            "tovPg": 14,
            "drebPg": 13
          }
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 120.3,
            "drtg": 82.4,
            "ptsPg": 135,
            "oppPtsPg": 92,
            "tovPg": 10,
            "drebPg": 35
          },
          "rank": {
            "ortg": 6,
            "drtg": 1,
            "ptsPg": 1,
            "oppPtsPg": 2,
            "tovPg": 1,
            "drebPg": 7
          }
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 100.5,
            "drtg": 119,
            "ptsPg": 103,
            "oppPtsPg": 123,
            "tovPg": 18,
            "drebPg": 33
          },
          "rank": {
            "ortg": 18,
            "drtg": 16,
            "ptsPg": 19,
            "oppPtsPg": 14,
            "tovPg": 17,
            "drebPg": 10
          }
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 124.2,
            "drtg": 111.4,
            "ptsPg": 128,
            "oppPtsPg": 116,
            "tovPg": 11,
            "drebPg": 32
          },
          "rank": {
            "ortg": 3,
            "drtg": 11,
            "ptsPg": 5,
            "oppPtsPg": 10,
            "tovPg": 2,
            "drebPg": 11
          }
        }
      ]
    },
    {
      "matchupPeriodId": 3,
      "label": "Woche 3",
      "throughDate": "2026-10-22",
      "cumulative": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 118,
            "drtg": 110.5,
            "ptsPg": 132,
            "oppPtsPg": 125,
            "tovPg": 17,
            "drebPg": 31
          },
          "rank": {
            "ortg": 9,
            "drtg": 15,
            "ptsPg": 2,
            "oppPtsPg": 24,
            "tovPg": 16,
            "drebPg": 19
          }
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 113.9,
            "drtg": 117.4,
            "ptsPg": 113,
            "oppPtsPg": 121,
            "tovPg": 14,
            "drebPg": 27
          },
          "rank": {
            "ortg": 13,
            "drtg": 21,
            "ptsPg": 15,
            "oppPtsPg": 19,
            "tovPg": 8,
            "drebPg": 25
          }
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 101,
            "drtg": 105.2,
            "ptsPg": 103,
            "oppPtsPg": 110,
            "tovPg": 22,
            "drebPg": 27
          },
          "rank": {
            "ortg": 21,
            "drtg": 13,
            "ptsPg": 24,
            "oppPtsPg": 12,
            "tovPg": 28,
            "drebPg": 26
          }
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 105.2,
            "drtg": 101,
            "ptsPg": 110,
            "oppPtsPg": 103,
            "tovPg": 20,
            "drebPg": 29
          },
          "rank": {
            "ortg": 17,
            "drtg": 9,
            "ptsPg": 16,
            "oppPtsPg": 6,
            "tovPg": 24,
            "drebPg": 23
          }
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 82.4,
            "drtg": 120.3,
            "ptsPg": 92,
            "oppPtsPg": 135,
            "tovPg": 27,
            "drebPg": 36
          },
          "rank": {
            "ortg": 30,
            "drtg": 25,
            "ptsPg": 28,
            "oppPtsPg": 30,
            "tovPg": 30,
            "drebPg": 6
          }
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 96.1,
            "drtg": 101.6,
            "ptsPg": 106,
            "oppPtsPg": 114,
            "tovPg": 21,
            "drebPg": 36
          },
          "rank": {
            "ortg": 25,
            "drtg": 12,
            "ptsPg": 19,
            "oppPtsPg": 15,
            "tovPg": 26,
            "drebPg": 7
          }
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 105.3,
            "drtg": 132,
            "ptsPg": 110,
            "oppPtsPg": 128,
            "tovPg": 21,
            "drebPg": 25
          },
          "rank": {
            "ortg": 16,
            "drtg": 30,
            "ptsPg": 17,
            "oppPtsPg": 26,
            "tovPg": 27,
            "drebPg": 28
          }
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 88.7,
            "drtg": 98.8,
            "ptsPg": 84,
            "oppPtsPg": 96,
            "tovPg": 22,
            "drebPg": 34
          },
          "rank": {
            "ortg": 28,
            "drtg": 6,
            "ptsPg": 29,
            "oppPtsPg": 4,
            "tovPg": 29,
            "drebPg": 13
          }
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 117.4,
            "drtg": 113.9,
            "ptsPg": 121,
            "oppPtsPg": 113,
            "tovPg": 17,
            "drebPg": 35
          },
          "rank": {
            "ortg": 10,
            "drtg": 18,
            "ptsPg": 11,
            "oppPtsPg": 14,
            "tovPg": 17,
            "drebPg": 8
          }
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 101.1,
            "drtg": 125.9,
            "ptsPg": 105,
            "oppPtsPg": 127,
            "tovPg": 15,
            "drebPg": 21
          },
          "rank": {
            "ortg": 20,
            "drtg": 29,
            "ptsPg": 22,
            "oppPtsPg": 25,
            "tovPg": 12,
            "drebPg": 30
          }
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 132,
            "drtg": 105.3,
            "ptsPg": 128,
            "oppPtsPg": 110,
            "tovPg": 15,
            "drebPg": 25
          },
          "rank": {
            "ortg": 1,
            "drtg": 14,
            "ptsPg": 4,
            "oppPtsPg": 13,
            "tovPg": 13,
            "drebPg": 29
          }
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 115.2,
            "drtg": 114,
            "ptsPg": 123,
            "oppPtsPg": 120,
            "tovPg": 13,
            "drebPg": 34
          },
          "rank": {
            "ortg": 11,
            "drtg": 19,
            "ptsPg": 9,
            "oppPtsPg": 18,
            "tovPg": 4,
            "drebPg": 14
          }
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 119,
            "drtg": 92.9,
            "ptsPg": 121,
            "oppPtsPg": 96,
            "tovPg": 17,
            "drebPg": 38
          },
          "rank": {
            "ortg": 7,
            "drtg": 3,
            "ptsPg": 12,
            "oppPtsPg": 5,
            "tovPg": 18,
            "drebPg": 4
          }
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 125.9,
            "drtg": 101.1,
            "ptsPg": 127,
            "oppPtsPg": 105,
            "tovPg": 18,
            "drebPg": 33
          },
          "rank": {
            "ortg": 2,
            "drtg": 10,
            "ptsPg": 6,
            "oppPtsPg": 9,
            "tovPg": 21,
            "drebPg": 16
          }
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 119,
            "drtg": 100.5,
            "ptsPg": 123,
            "oppPtsPg": 103,
            "tovPg": 13,
            "drebPg": 40
          },
          "rank": {
            "ortg": 8,
            "drtg": 8,
            "ptsPg": 10,
            "oppPtsPg": 7,
            "tovPg": 5,
            "drebPg": 1
          }
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 99.6,
            "drtg": 121.6,
            "ptsPg": 106,
            "oppPtsPg": 131,
            "tovPg": 18,
            "drebPg": 30
          },
          "rank": {
            "ortg": 23,
            "drtg": 27,
            "ptsPg": 20,
            "oppPtsPg": 28,
            "tovPg": 22,
            "drebPg": 21
          }
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 111.4,
            "drtg": 124.2,
            "ptsPg": 116,
            "oppPtsPg": 128,
            "tovPg": 16,
            "drebPg": 28
          },
          "rank": {
            "ortg": 14,
            "drtg": 28,
            "ptsPg": 14,
            "oppPtsPg": 27,
            "tovPg": 15,
            "drebPg": 24
          }
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 121.6,
            "drtg": 99.6,
            "ptsPg": 131,
            "oppPtsPg": 106,
            "tovPg": 14,
            "drebPg": 35
          },
          "rank": {
            "ortg": 4,
            "drtg": 7,
            "ptsPg": 3,
            "oppPtsPg": 10,
            "tovPg": 9,
            "drebPg": 9
          }
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 114,
            "drtg": 115.2,
            "ptsPg": 120,
            "oppPtsPg": 123,
            "tovPg": 14,
            "drebPg": 35
          },
          "rank": {
            "ortg": 12,
            "drtg": 20,
            "ptsPg": 13,
            "oppPtsPg": 21,
            "tovPg": 10,
            "drebPg": 10
          }
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 94.4,
            "drtg": 101.1,
            "ptsPg": 100,
            "oppPtsPg": 106,
            "tovPg": 14,
            "drebPg": 39
          },
          "rank": {
            "ortg": 26,
            "drtg": 11,
            "ptsPg": 26,
            "oppPtsPg": 11,
            "tovPg": 11,
            "drebPg": 3
          }
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 2,
          "values": {
            "ortg": 105,
            "drtg": 93.2,
            "ptsPg": 106,
            "oppPtsPg": 94,
            "tovPg": 11.5,
            "drebPg": 33.5
          },
          "rank": {
            "ortg": 18,
            "drtg": 4,
            "ptsPg": 21,
            "oppPtsPg": 3,
            "tovPg": 3,
            "drebPg": 15
          }
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 110.5,
            "drtg": 118,
            "ptsPg": 125,
            "oppPtsPg": 132,
            "tovPg": 20,
            "drebPg": 30
          },
          "rank": {
            "ortg": 15,
            "drtg": 22,
            "ptsPg": 7,
            "oppPtsPg": 29,
            "tovPg": 25,
            "drebPg": 22
          }
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 2,
          "values": {
            "ortg": 101.3,
            "drtg": 95.3,
            "ptsPg": 110,
            "oppPtsPg": 103,
            "tovPg": 13,
            "drebPg": 37
          },
          "rank": {
            "ortg": 19,
            "drtg": 5,
            "ptsPg": 18,
            "oppPtsPg": 8,
            "tovPg": 6,
            "drebPg": 5
          }
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 86.4,
            "drtg": 120.5,
            "ptsPg": 83,
            "oppPtsPg": 124,
            "tovPg": 15,
            "drebPg": 26
          },
          "rank": {
            "ortg": 29,
            "drtg": 26,
            "ptsPg": 30,
            "oppPtsPg": 23,
            "tovPg": 14,
            "drebPg": 27
          }
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 120.5,
            "drtg": 86.4,
            "ptsPg": 124,
            "oppPtsPg": 83,
            "tovPg": 17,
            "drebPg": 40
          },
          "rank": {
            "ortg": 5,
            "drtg": 2,
            "ptsPg": 8,
            "oppPtsPg": 1,
            "tovPg": 19,
            "drebPg": 2
          }
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 92.9,
            "drtg": 119,
            "ptsPg": 96,
            "oppPtsPg": 121,
            "tovPg": 17,
            "drebPg": 31
          },
          "rank": {
            "ortg": 27,
            "drtg": 23,
            "ptsPg": 27,
            "oppPtsPg": 20,
            "tovPg": 20,
            "drebPg": 20
          }
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 97.2,
            "drtg": 110.7,
            "ptsPg": 104,
            "oppPtsPg": 116,
            "tovPg": 13,
            "drebPg": 35
          },
          "rank": {
            "ortg": 24,
            "drtg": 16,
            "ptsPg": 23,
            "oppPtsPg": 16,
            "tovPg": 7,
            "drebPg": 11
          }
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 120.3,
            "drtg": 82.4,
            "ptsPg": 135,
            "oppPtsPg": 92,
            "tovPg": 10,
            "drebPg": 35
          },
          "rank": {
            "ortg": 6,
            "drtg": 1,
            "ptsPg": 1,
            "oppPtsPg": 2,
            "tovPg": 1,
            "drebPg": 12
          }
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 100.5,
            "drtg": 119,
            "ptsPg": 103,
            "oppPtsPg": 123,
            "tovPg": 18,
            "drebPg": 33
          },
          "rank": {
            "ortg": 22,
            "drtg": 24,
            "ptsPg": 25,
            "oppPtsPg": 22,
            "tovPg": 23,
            "drebPg": 17
          }
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 124.2,
            "drtg": 111.4,
            "ptsPg": 128,
            "oppPtsPg": 116,
            "tovPg": 11,
            "drebPg": 32
          },
          "rank": {
            "ortg": 3,
            "drtg": 17,
            "ptsPg": 5,
            "oppPtsPg": 17,
            "tovPg": 2,
            "drebPg": 18
          }
        }
      ],
      "isolated": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 96.1,
            "drtg": 101.6,
            "ptsPg": 106,
            "oppPtsPg": 114,
            "tovPg": 21,
            "drebPg": 36
          },
          "rank": {
            "ortg": 3,
            "drtg": 4,
            "ptsPg": 2,
            "oppPtsPg": 4,
            "tovPg": 3,
            "drebPg": 1
          }
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 88.7,
            "drtg": 98.8,
            "ptsPg": 84,
            "oppPtsPg": 96,
            "tovPg": 22,
            "drebPg": 34
          },
          "rank": {
            "ortg": 4,
            "drtg": 3,
            "ptsPg": 4,
            "oppPtsPg": 2,
            "tovPg": 4,
            "drebPg": 3
          }
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 98.8,
            "drtg": 88.7,
            "ptsPg": 96,
            "oppPtsPg": 84,
            "tovPg": 12,
            "drebPg": 30
          },
          "rank": {
            "ortg": 2,
            "drtg": 1,
            "ptsPg": 3,
            "oppPtsPg": 1,
            "tovPg": 1,
            "drebPg": 4
          }
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 101.6,
            "drtg": 96.1,
            "ptsPg": 114,
            "oppPtsPg": 106,
            "tovPg": 16,
            "drebPg": 35
          },
          "rank": {
            "ortg": 1,
            "drtg": 2,
            "ptsPg": 1,
            "oppPtsPg": 3,
            "tovPg": 2,
            "drebPg": 2
          }
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        }
      ]
    },
    {
      "matchupPeriodId": 4,
      "label": "Woche 4",
      "throughDate": "2026-10-23",
      "cumulative": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 2,
          "values": {
            "ortg": 120.1,
            "drtg": 97.4,
            "ptsPg": 130,
            "oppPtsPg": 103,
            "tovPg": 14.5,
            "drebPg": 33.5
          },
          "rank": {
            "ortg": 4,
            "drtg": 5,
            "ptsPg": 1,
            "oppPtsPg": 6,
            "tovPg": 8,
            "drebPg": 10
          }
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 2,
          "values": {
            "ortg": 113.8,
            "drtg": 114.1,
            "ptsPg": 110,
            "oppPtsPg": 112,
            "tovPg": 12,
            "drebPg": 27
          },
          "rank": {
            "ortg": 7,
            "drtg": 19,
            "ptsPg": 17,
            "oppPtsPg": 14,
            "tovPg": 2,
            "drebPg": 27
          }
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 101,
            "drtg": 105.2,
            "ptsPg": 103,
            "oppPtsPg": 110,
            "tovPg": 22,
            "drebPg": 27
          },
          "rank": {
            "ortg": 24,
            "drtg": 10,
            "ptsPg": 26,
            "oppPtsPg": 10,
            "tovPg": 28,
            "drebPg": 28
          }
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 2,
          "values": {
            "ortg": 94.1,
            "drtg": 111.8,
            "ptsPg": 95.5,
            "oppPtsPg": 115.5,
            "tovPg": 22.5,
            "drebPg": 29
          },
          "rank": {
            "ortg": 28,
            "drtg": 17,
            "ptsPg": 28,
            "oppPtsPg": 19,
            "tovPg": 30,
            "drebPg": 26
          }
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 2,
          "values": {
            "ortg": 100.1,
            "drtg": 116.2,
            "ptsPg": 112,
            "oppPtsPg": 130,
            "tovPg": 20.5,
            "drebPg": 33.5
          },
          "rank": {
            "ortg": 26,
            "drtg": 23,
            "ptsPg": 15,
            "oppPtsPg": 29,
            "tovPg": 25,
            "drebPg": 11
          }
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 96.1,
            "drtg": 101.6,
            "ptsPg": 106,
            "oppPtsPg": 114,
            "tovPg": 21,
            "drebPg": 36
          },
          "rank": {
            "ortg": 27,
            "drtg": 8,
            "ptsPg": 24,
            "oppPtsPg": 16,
            "tovPg": 26,
            "drebPg": 4
          }
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 2,
          "values": {
            "ortg": 112.4,
            "drtg": 114.6,
            "ptsPg": 115.5,
            "oppPtsPg": 116.5,
            "tovPg": 17.5,
            "drebPg": 30
          },
          "rank": {
            "ortg": 12,
            "drtg": 20,
            "ptsPg": 12,
            "oppPtsPg": 20,
            "tovPg": 18,
            "drebPg": 25
          }
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 88.7,
            "drtg": 98.8,
            "ptsPg": 84,
            "oppPtsPg": 96,
            "tovPg": 22,
            "drebPg": 34
          },
          "rank": {
            "ortg": 29,
            "drtg": 6,
            "ptsPg": 29,
            "oppPtsPg": 2,
            "tovPg": 29,
            "drebPg": 9
          }
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 2,
          "values": {
            "ortg": 119.8,
            "drtg": 107.9,
            "ptsPg": 124.5,
            "oppPtsPg": 112,
            "tovPg": 18,
            "drebPg": 38
          },
          "rank": {
            "ortg": 5,
            "drtg": 15,
            "ptsPg": 4,
            "oppPtsPg": 15,
            "tovPg": 20,
            "drebPg": 1
          }
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 2,
          "values": {
            "ortg": 106.2,
            "drtg": 116.9,
            "ptsPg": 106.5,
            "oppPtsPg": 119,
            "tovPg": 17,
            "drebPg": 22
          },
          "rank": {
            "ortg": 17,
            "drtg": 26,
            "ptsPg": 23,
            "oppPtsPg": 21,
            "tovPg": 17,
            "drebPg": 30
          }
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 2,
          "values": {
            "ortg": 123.7,
            "drtg": 105.5,
            "ptsPg": 121,
            "oppPtsPg": 110,
            "tovPg": 15,
            "drebPg": 30.5
          },
          "rank": {
            "ortg": 1,
            "drtg": 11,
            "ptsPg": 7,
            "oppPtsPg": 11,
            "tovPg": 10,
            "drebPg": 21
          }
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 2,
          "values": {
            "ortg": 107,
            "drtg": 116.8,
            "ptsPg": 114,
            "oppPtsPg": 120.5,
            "tovPg": 16,
            "drebPg": 31.5
          },
          "rank": {
            "ortg": 16,
            "drtg": 25,
            "ptsPg": 14,
            "oppPtsPg": 22,
            "tovPg": 16,
            "drebPg": 16
          }
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 2,
          "values": {
            "ortg": 113.5,
            "drtg": 107.1,
            "ptsPg": 119,
            "oppPtsPg": 110.5,
            "tovPg": 21,
            "drebPg": 31
          },
          "rank": {
            "ortg": 10,
            "drtg": 13,
            "ptsPg": 10,
            "oppPtsPg": 12,
            "tovPg": 27,
            "drebPg": 19
          }
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 2,
          "values": {
            "ortg": 123.6,
            "drtg": 104.8,
            "ptsPg": 126,
            "oppPtsPg": 111,
            "tovPg": 19.5,
            "drebPg": 31
          },
          "rank": {
            "ortg": 2,
            "drtg": 9,
            "ptsPg": 2,
            "oppPtsPg": 13,
            "tovPg": 24,
            "drebPg": 20
          }
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 2,
          "values": {
            "ortg": 113.6,
            "drtg": 105.9,
            "ptsPg": 117,
            "oppPtsPg": 105.5,
            "tovPg": 19,
            "drebPg": 34.5
          },
          "rank": {
            "ortg": 9,
            "drtg": 12,
            "ptsPg": 11,
            "oppPtsPg": 8,
            "tovPg": 23,
            "drebPg": 7
          }
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 2,
          "values": {
            "ortg": 101,
            "drtg": 121.8,
            "ptsPg": 108.5,
            "oppPtsPg": 129.5,
            "tovPg": 15,
            "drebPg": 30.5
          },
          "rank": {
            "ortg": 25,
            "drtg": 30,
            "ptsPg": 20,
            "oppPtsPg": 28,
            "tovPg": 11,
            "drebPg": 22
          }
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 2,
          "values": {
            "ortg": 111.8,
            "drtg": 120.8,
            "ptsPg": 120.5,
            "oppPtsPg": 130,
            "tovPg": 17.5,
            "drebPg": 30.5
          },
          "rank": {
            "ortg": 13,
            "drtg": 29,
            "ptsPg": 8,
            "oppPtsPg": 30,
            "tovPg": 19,
            "drebPg": 23
          }
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 2,
          "values": {
            "ortg": 117.7,
            "drtg": 96.2,
            "ptsPg": 123,
            "oppPtsPg": 99.5,
            "tovPg": 13,
            "drebPg": 37
          },
          "rank": {
            "ortg": 6,
            "drtg": 4,
            "ptsPg": 6,
            "oppPtsPg": 4,
            "tovPg": 3,
            "drebPg": 2
          }
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 2,
          "values": {
            "ortg": 113.7,
            "drtg": 116.1,
            "ptsPg": 119.5,
            "oppPtsPg": 121.5,
            "tovPg": 14.5,
            "drebPg": 31.5
          },
          "rank": {
            "ortg": 8,
            "drtg": 22,
            "ptsPg": 9,
            "oppPtsPg": 24,
            "tovPg": 9,
            "drebPg": 17
          }
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 2,
          "values": {
            "ortg": 101.9,
            "drtg": 107.1,
            "ptsPg": 101.5,
            "oppPtsPg": 106.5,
            "tovPg": 15,
            "drebPg": 35.5
          },
          "rank": {
            "ortg": 21,
            "drtg": 14,
            "ptsPg": 27,
            "oppPtsPg": 9,
            "tovPg": 12,
            "drebPg": 6
          }
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 2,
          "values": {
            "ortg": 105,
            "drtg": 93.2,
            "ptsPg": 106,
            "oppPtsPg": 94,
            "tovPg": 11.5,
            "drebPg": 33.5
          },
          "rank": {
            "ortg": 18,
            "drtg": 2,
            "ptsPg": 25,
            "oppPtsPg": 1,
            "tovPg": 1,
            "drebPg": 12
          }
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 2,
          "values": {
            "ortg": 102.1,
            "drtg": 115.9,
            "ptsPg": 109,
            "oppPtsPg": 123.5,
            "tovPg": 18,
            "drebPg": 32.5
          },
          "rank": {
            "ortg": 19,
            "drtg": 21,
            "ptsPg": 19,
            "oppPtsPg": 25,
            "tovPg": 21,
            "drebPg": 15
          }
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 2,
          "values": {
            "ortg": 101.3,
            "drtg": 95.3,
            "ptsPg": 110,
            "oppPtsPg": 103,
            "tovPg": 13,
            "drebPg": 37
          },
          "rank": {
            "ortg": 23,
            "drtg": 3,
            "ptsPg": 18,
            "oppPtsPg": 7,
            "tovPg": 4,
            "drebPg": 3
          }
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 86.4,
            "drtg": 120.5,
            "ptsPg": 83,
            "oppPtsPg": 124,
            "tovPg": 15,
            "drebPg": 26
          },
          "rank": {
            "ortg": 30,
            "drtg": 28,
            "ptsPg": 30,
            "oppPtsPg": 26,
            "tovPg": 13,
            "drebPg": 29
          }
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 2,
          "values": {
            "ortg": 121.1,
            "drtg": 99.4,
            "ptsPg": 126,
            "oppPtsPg": 101.5,
            "tovPg": 13,
            "drebPg": 36
          },
          "rank": {
            "ortg": 3,
            "drtg": 7,
            "ptsPg": 3,
            "oppPtsPg": 5,
            "tovPg": 5,
            "drebPg": 5
          }
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 2,
          "values": {
            "ortg": 102.1,
            "drtg": 120.4,
            "ptsPg": 108,
            "oppPtsPg": 124.5,
            "tovPg": 15.5,
            "drebPg": 31.5
          },
          "rank": {
            "ortg": 20,
            "drtg": 27,
            "ptsPg": 21,
            "oppPtsPg": 27,
            "tovPg": 14,
            "drebPg": 18
          }
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 2,
          "values": {
            "ortg": 101.4,
            "drtg": 113.1,
            "ptsPg": 107,
            "oppPtsPg": 115,
            "tovPg": 14,
            "drebPg": 33
          },
          "rank": {
            "ortg": 22,
            "drtg": 18,
            "ptsPg": 22,
            "oppPtsPg": 18,
            "tovPg": 7,
            "drebPg": 13
          }
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 2,
          "values": {
            "ortg": 112.5,
            "drtg": 88.1,
            "ptsPg": 123.5,
            "oppPtsPg": 97,
            "tovPg": 13,
            "drebPg": 34.5
          },
          "rank": {
            "ortg": 11,
            "drtg": 1,
            "ptsPg": 5,
            "oppPtsPg": 3,
            "tovPg": 6,
            "drebPg": 8
          }
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 2,
          "values": {
            "ortg": 108.8,
            "drtg": 116.2,
            "ptsPg": 111.5,
            "oppPtsPg": 121,
            "tovPg": 18,
            "drebPg": 30.5
          },
          "rank": {
            "ortg": 14,
            "drtg": 24,
            "ptsPg": 16,
            "oppPtsPg": 23,
            "tovPg": 22,
            "drebPg": 24
          }
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 2,
          "values": {
            "ortg": 108.8,
            "drtg": 107.9,
            "ptsPg": 115,
            "oppPtsPg": 114,
            "tovPg": 15.5,
            "drebPg": 33
          },
          "rank": {
            "ortg": 15,
            "drtg": 16,
            "ptsPg": 13,
            "oppPtsPg": 17,
            "tovPg": 15,
            "drebPg": 14
          }
        }
      ],
      "isolated": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 122.3,
            "drtg": 82.4,
            "ptsPg": 128,
            "oppPtsPg": 81,
            "tovPg": 12,
            "drebPg": 36
          },
          "rank": {
            "ortg": 1,
            "drtg": 1,
            "ptsPg": 2,
            "oppPtsPg": 1,
            "tovPg": 3,
            "drebPg": 3
          }
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 113.8,
            "drtg": 110.5,
            "ptsPg": 107,
            "oppPtsPg": 103,
            "tovPg": 10,
            "drebPg": 27
          },
          "rank": {
            "ortg": 9,
            "drtg": 10,
            "ptsPg": 19,
            "oppPtsPg": 4,
            "tovPg": 2,
            "drebPg": 22
          }
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 82.4,
            "drtg": 122.3,
            "ptsPg": 81,
            "oppPtsPg": 128,
            "tovPg": 25,
            "drebPg": 29
          },
          "rank": {
            "ortg": 24,
            "drtg": 24,
            "ptsPg": 24,
            "oppPtsPg": 21,
            "tovPg": 22,
            "drebPg": 16
          }
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 117.6,
            "drtg": 112.2,
            "ptsPg": 132,
            "oppPtsPg": 125,
            "tovPg": 14,
            "drebPg": 31
          },
          "rank": {
            "ortg": 6,
            "drtg": 13,
            "ptsPg": 1,
            "oppPtsPg": 19,
            "tovPg": 6,
            "drebPg": 13
          }
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 119.7,
            "drtg": 98.8,
            "ptsPg": 121,
            "oppPtsPg": 105,
            "tovPg": 14,
            "drebPg": 35
          },
          "rank": {
            "ortg": 5,
            "drtg": 4,
            "ptsPg": 7,
            "oppPtsPg": 5,
            "tovPg": 7,
            "drebPg": 5
          }
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 122.1,
            "drtg": 102.5,
            "ptsPg": 128,
            "oppPtsPg": 111,
            "tovPg": 19,
            "drebPg": 41
          },
          "rank": {
            "ortg": 2,
            "drtg": 5,
            "ptsPg": 3,
            "oppPtsPg": 9,
            "tovPg": 16,
            "drebPg": 1
          }
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 111.6,
            "drtg": 108.1,
            "ptsPg": 108,
            "oppPtsPg": 111,
            "tovPg": 19,
            "drebPg": 23
          },
          "rank": {
            "ortg": 13,
            "drtg": 8,
            "ptsPg": 18,
            "oppPtsPg": 10,
            "tovPg": 17,
            "drebPg": 24
          }
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 115.6,
            "drtg": 105.8,
            "ptsPg": 114,
            "oppPtsPg": 110,
            "tovPg": 15,
            "drebPg": 36
          },
          "rank": {
            "ortg": 8,
            "drtg": 7,
            "ptsPg": 13,
            "oppPtsPg": 8,
            "tovPg": 9,
            "drebPg": 4
          }
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 98.8,
            "drtg": 119.7,
            "ptsPg": 105,
            "oppPtsPg": 121,
            "tovPg": 19,
            "drebPg": 29
          },
          "rank": {
            "ortg": 21,
            "drtg": 20,
            "ptsPg": 20,
            "oppPtsPg": 18,
            "tovPg": 18,
            "drebPg": 17
          }
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 108.3,
            "drtg": 121.4,
            "ptsPg": 117,
            "oppPtsPg": 125,
            "tovPg": 25,
            "drebPg": 24
          },
          "rank": {
            "ortg": 16,
            "drtg": 21,
            "ptsPg": 11,
            "oppPtsPg": 20,
            "tovPg": 23,
            "drebPg": 23
          }
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 121.4,
            "drtg": 108.3,
            "ptsPg": 125,
            "oppPtsPg": 117,
            "tovPg": 21,
            "drebPg": 29
          },
          "rank": {
            "ortg": 4,
            "drtg": 9,
            "ptsPg": 5,
            "oppPtsPg": 14,
            "tovPg": 21,
            "drebPg": 18
          }
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 108.1,
            "drtg": 111.6,
            "ptsPg": 111,
            "oppPtsPg": 108,
            "tovPg": 25,
            "drebPg": 29
          },
          "rank": {
            "ortg": 17,
            "drtg": 12,
            "ptsPg": 15,
            "oppPtsPg": 7,
            "tovPg": 24,
            "drebPg": 19
          }
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 102.5,
            "drtg": 122.1,
            "ptsPg": 111,
            "oppPtsPg": 128,
            "tovPg": 12,
            "drebPg": 31
          },
          "rank": {
            "ortg": 20,
            "drtg": 23,
            "ptsPg": 16,
            "oppPtsPg": 22,
            "tovPg": 4,
            "drebPg": 14
          }
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 112.2,
            "drtg": 117.6,
            "ptsPg": 125,
            "oppPtsPg": 132,
            "tovPg": 19,
            "drebPg": 33
          },
          "rank": {
            "ortg": 12,
            "drtg": 19,
            "ptsPg": 6,
            "oppPtsPg": 24,
            "tovPg": 19,
            "drebPg": 9
          }
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 113.6,
            "drtg": 92.7,
            "ptsPg": 115,
            "oppPtsPg": 93,
            "tovPg": 12,
            "drebPg": 39
          },
          "rank": {
            "ortg": 10,
            "drtg": 2,
            "ptsPg": 12,
            "oppPtsPg": 2,
            "tovPg": 5,
            "drebPg": 2
          }
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 113.5,
            "drtg": 117.1,
            "ptsPg": 119,
            "oppPtsPg": 120,
            "tovPg": 15,
            "drebPg": 28
          },
          "rank": {
            "ortg": 11,
            "drtg": 18,
            "ptsPg": 10,
            "oppPtsPg": 16,
            "tovPg": 10,
            "drebPg": 20
          }
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 110.5,
            "drtg": 113.8,
            "ptsPg": 103,
            "oppPtsPg": 107,
            "tovPg": 16,
            "drebPg": 32
          },
          "rank": {
            "ortg": 15,
            "drtg": 16,
            "ptsPg": 21,
            "oppPtsPg": 6,
            "tovPg": 12,
            "drebPg": 10
          }
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 92.7,
            "drtg": 113.6,
            "ptsPg": 93,
            "oppPtsPg": 115,
            "tovPg": 16,
            "drebPg": 35
          },
          "rank": {
            "ortg": 23,
            "drtg": 15,
            "ptsPg": 23,
            "oppPtsPg": 13,
            "tovPg": 13,
            "drebPg": 6
          }
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 121.7,
            "drtg": 110.9,
            "ptsPg": 128,
            "oppPtsPg": 120,
            "tovPg": 9,
            "drebPg": 32
          },
          "rank": {
            "ortg": 3,
            "drtg": 11,
            "ptsPg": 4,
            "oppPtsPg": 17,
            "tovPg": 1,
            "drebPg": 11
          }
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 110.9,
            "drtg": 121.7,
            "ptsPg": 120,
            "oppPtsPg": 128,
            "tovPg": 14,
            "drebPg": 32
          },
          "rank": {
            "ortg": 14,
            "drtg": 22,
            "ptsPg": 8,
            "oppPtsPg": 23,
            "tovPg": 8,
            "drebPg": 12
          }
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 105.8,
            "drtg": 115.6,
            "ptsPg": 110,
            "oppPtsPg": 114,
            "tovPg": 15,
            "drebPg": 31
          },
          "rank": {
            "ortg": 18,
            "drtg": 17,
            "ptsPg": 17,
            "oppPtsPg": 12,
            "tovPg": 11,
            "drebPg": 15
          }
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 104.4,
            "drtg": 94.1,
            "ptsPg": 112,
            "oppPtsPg": 102,
            "tovPg": 16,
            "drebPg": 34
          },
          "rank": {
            "ortg": 19,
            "drtg": 3,
            "ptsPg": 14,
            "oppPtsPg": 3,
            "tovPg": 14,
            "drebPg": 7
          }
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 117.1,
            "drtg": 113.5,
            "ptsPg": 120,
            "oppPtsPg": 119,
            "tovPg": 18,
            "drebPg": 28
          },
          "rank": {
            "ortg": 7,
            "drtg": 14,
            "ptsPg": 9,
            "oppPtsPg": 15,
            "tovPg": 15,
            "drebPg": 21
          }
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 94.1,
            "drtg": 104.4,
            "ptsPg": 102,
            "oppPtsPg": 112,
            "tovPg": 20,
            "drebPg": 34
          },
          "rank": {
            "ortg": 22,
            "drtg": 6,
            "ptsPg": 22,
            "oppPtsPg": 11,
            "tovPg": 20,
            "drebPg": 8
          }
        }
      ]
    },
    {
      "matchupPeriodId": 5,
      "label": "Woche 5",
      "throughDate": "2026-10-24",
      "cumulative": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 3,
          "values": {
            "ortg": 117.7,
            "drtg": 105,
            "ptsPg": 124.7,
            "oppPtsPg": 109,
            "tovPg": 14,
            "drebPg": 30.7
          },
          "rank": {
            "ortg": 5,
            "drtg": 7,
            "ptsPg": 3,
            "oppPtsPg": 8,
            "tovPg": 8,
            "drebPg": 23
          }
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 2,
          "values": {
            "ortg": 113.8,
            "drtg": 114.1,
            "ptsPg": 110,
            "oppPtsPg": 112,
            "tovPg": 12,
            "drebPg": 27
          },
          "rank": {
            "ortg": 8,
            "drtg": 19,
            "ptsPg": 23,
            "oppPtsPg": 12,
            "tovPg": 2,
            "drebPg": 29
          }
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 2,
          "values": {
            "ortg": 105.7,
            "drtg": 109.6,
            "ptsPg": 112,
            "oppPtsPg": 117.5,
            "tovPg": 20,
            "drebPg": 28.5
          },
          "rank": {
            "ortg": 21,
            "drtg": 16,
            "ptsPg": 19,
            "oppPtsPg": 18,
            "tovPg": 27,
            "drebPg": 28
          }
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 3,
          "values": {
            "ortg": 99.4,
            "drtg": 110.5,
            "ptsPg": 102,
            "oppPtsPg": 113.7,
            "tovPg": 20.3,
            "drebPg": 31.3
          },
          "rank": {
            "ortg": 30,
            "drtg": 17,
            "ptsPg": 29,
            "oppPtsPg": 15,
            "tovPg": 28,
            "drebPg": 18
          }
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 3,
          "values": {
            "ortg": 103.3,
            "drtg": 115.7,
            "ptsPg": 114.7,
            "oppPtsPg": 128,
            "tovPg": 17.7,
            "drebPg": 34
          },
          "rank": {
            "ortg": 25,
            "drtg": 21,
            "ptsPg": 15,
            "oppPtsPg": 28,
            "tovPg": 19,
            "drebPg": 12
          }
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 2,
          "values": {
            "ortg": 105,
            "drtg": 105.8,
            "ptsPg": 115.5,
            "oppPtsPg": 117.5,
            "tovPg": 22,
            "drebPg": 36
          },
          "rank": {
            "ortg": 23,
            "drtg": 8,
            "ptsPg": 14,
            "oppPtsPg": 19,
            "tovPg": 30,
            "drebPg": 3
          }
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 3,
          "values": {
            "ortg": 110.1,
            "drtg": 115.1,
            "ptsPg": 112.3,
            "oppPtsPg": 118.3,
            "tovPg": 17.7,
            "drebPg": 31.3
          },
          "rank": {
            "ortg": 15,
            "drtg": 20,
            "ptsPg": 18,
            "oppPtsPg": 20,
            "tovPg": 20,
            "drebPg": 19
          }
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 2,
          "values": {
            "ortg": 108.3,
            "drtg": 108.3,
            "ptsPg": 112.5,
            "oppPtsPg": 115.5,
            "tovPg": 16.5,
            "drebPg": 35.5
          },
          "rank": {
            "ortg": 17,
            "drtg": 14,
            "ptsPg": 17,
            "oppPtsPg": 16,
            "tovPg": 17,
            "drebPg": 5
          }
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 2,
          "values": {
            "ortg": 119.8,
            "drtg": 107.9,
            "ptsPg": 124.5,
            "oppPtsPg": 112,
            "tovPg": 18,
            "drebPg": 38
          },
          "rank": {
            "ortg": 4,
            "drtg": 12,
            "ptsPg": 5,
            "oppPtsPg": 13,
            "tovPg": 21,
            "drebPg": 1
          }
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 3,
          "values": {
            "ortg": 110.7,
            "drtg": 120.9,
            "ptsPg": 111.7,
            "oppPtsPg": 123,
            "tovPg": 16.7,
            "drebPg": 23
          },
          "rank": {
            "ortg": 12,
            "drtg": 30,
            "ptsPg": 21,
            "oppPtsPg": 23,
            "tovPg": 18,
            "drebPg": 30
          }
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 3,
          "values": {
            "ortg": 122.7,
            "drtg": 107.9,
            "ptsPg": 121,
            "oppPtsPg": 111.3,
            "tovPg": 14.7,
            "drebPg": 30.3
          },
          "rank": {
            "ortg": 2,
            "drtg": 13,
            "ptsPg": 8,
            "oppPtsPg": 11,
            "tovPg": 10,
            "drebPg": 25
          }
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 2,
          "values": {
            "ortg": 107,
            "drtg": 116.8,
            "ptsPg": 114,
            "oppPtsPg": 120.5,
            "tovPg": 16,
            "drebPg": 31.5
          },
          "rank": {
            "ortg": 19,
            "drtg": 24,
            "ptsPg": 16,
            "oppPtsPg": 21,
            "tovPg": 16,
            "drebPg": 16
          }
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 2,
          "values": {
            "ortg": 113.5,
            "drtg": 107.1,
            "ptsPg": 119,
            "oppPtsPg": 110.5,
            "tovPg": 21,
            "drebPg": 31
          },
          "rank": {
            "ortg": 10,
            "drtg": 10,
            "ptsPg": 9,
            "oppPtsPg": 9,
            "tovPg": 29,
            "drebPg": 21
          }
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 2,
          "values": {
            "ortg": 123.6,
            "drtg": 104.8,
            "ptsPg": 126,
            "oppPtsPg": 111,
            "tovPg": 19.5,
            "drebPg": 31
          },
          "rank": {
            "ortg": 1,
            "drtg": 6,
            "ptsPg": 1,
            "oppPtsPg": 10,
            "tovPg": 26,
            "drebPg": 22
          }
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 2,
          "values": {
            "ortg": 113.6,
            "drtg": 105.9,
            "ptsPg": 117,
            "oppPtsPg": 105.5,
            "tovPg": 19,
            "drebPg": 34.5
          },
          "rank": {
            "ortg": 9,
            "drtg": 9,
            "ptsPg": 12,
            "oppPtsPg": 5,
            "tovPg": 24,
            "drebPg": 8
          }
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 3,
          "values": {
            "ortg": 103.2,
            "drtg": 117.8,
            "ptsPg": 109,
            "oppPtsPg": 124.7,
            "tovPg": 14.3,
            "drebPg": 30
          },
          "rank": {
            "ortg": 26,
            "drtg": 25,
            "ptsPg": 24,
            "oppPtsPg": 27,
            "tovPg": 9,
            "drebPg": 26
          }
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 3,
          "values": {
            "ortg": 110.6,
            "drtg": 117.9,
            "ptsPg": 119,
            "oppPtsPg": 129,
            "tovPg": 19,
            "drebPg": 35.3
          },
          "rank": {
            "ortg": 14,
            "drtg": 26,
            "ptsPg": 10,
            "oppPtsPg": 30,
            "tovPg": 25,
            "drebPg": 7
          }
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 2,
          "values": {
            "ortg": 117.7,
            "drtg": 96.2,
            "ptsPg": 123,
            "oppPtsPg": 99.5,
            "tovPg": 13,
            "drebPg": 37
          },
          "rank": {
            "ortg": 6,
            "drtg": 3,
            "ptsPg": 7,
            "oppPtsPg": 3,
            "tovPg": 4,
            "drebPg": 2
          }
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 3,
          "values": {
            "ortg": 114.6,
            "drtg": 119.1,
            "ptsPg": 124.7,
            "oppPtsPg": 128,
            "tovPg": 15.7,
            "drebPg": 33
          },
          "rank": {
            "ortg": 7,
            "drtg": 27,
            "ptsPg": 4,
            "oppPtsPg": 29,
            "tovPg": 15,
            "drebPg": 14
          }
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 2,
          "values": {
            "ortg": 101.9,
            "drtg": 107.1,
            "ptsPg": 101.5,
            "oppPtsPg": 106.5,
            "tovPg": 15,
            "drebPg": 35.5
          },
          "rank": {
            "ortg": 29,
            "drtg": 11,
            "ptsPg": 30,
            "oppPtsPg": 6,
            "tovPg": 12,
            "drebPg": 6
          }
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 2,
          "values": {
            "ortg": 105,
            "drtg": 93.2,
            "ptsPg": 106,
            "oppPtsPg": 94,
            "tovPg": 11.5,
            "drebPg": 33.5
          },
          "rank": {
            "ortg": 24,
            "drtg": 2,
            "ptsPg": 28,
            "oppPtsPg": 1,
            "tovPg": 1,
            "drebPg": 13
          }
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 2,
          "values": {
            "ortg": 102.1,
            "drtg": 115.9,
            "ptsPg": 109,
            "oppPtsPg": 123.5,
            "tovPg": 18,
            "drebPg": 32.5
          },
          "rank": {
            "ortg": 27,
            "drtg": 22,
            "ptsPg": 25,
            "oppPtsPg": 25,
            "tovPg": 22,
            "drebPg": 15
          }
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 3,
          "values": {
            "ortg": 105.1,
            "drtg": 99.5,
            "ptsPg": 115.7,
            "oppPtsPg": 107.3,
            "tovPg": 12.3,
            "drebPg": 34.3
          },
          "rank": {
            "ortg": 22,
            "drtg": 5,
            "ptsPg": 13,
            "oppPtsPg": 7,
            "tovPg": 3,
            "drebPg": 10
          }
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 2,
          "values": {
            "ortg": 108.2,
            "drtg": 120,
            "ptsPg": 107,
            "oppPtsPg": 123,
            "tovPg": 15,
            "drebPg": 29.5
          },
          "rank": {
            "ortg": 18,
            "drtg": 28,
            "ptsPg": 27,
            "oppPtsPg": 24,
            "tovPg": 13,
            "drebPg": 27
          }
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 2,
          "values": {
            "ortg": 121.1,
            "drtg": 99.4,
            "ptsPg": 126,
            "oppPtsPg": 101.5,
            "tovPg": 13,
            "drebPg": 36
          },
          "rank": {
            "ortg": 3,
            "drtg": 4,
            "ptsPg": 2,
            "oppPtsPg": 4,
            "tovPg": 5,
            "drebPg": 4
          }
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 2,
          "values": {
            "ortg": 102.1,
            "drtg": 120.4,
            "ptsPg": 108,
            "oppPtsPg": 124.5,
            "tovPg": 15.5,
            "drebPg": 31.5
          },
          "rank": {
            "ortg": 28,
            "drtg": 29,
            "ptsPg": 26,
            "oppPtsPg": 26,
            "tovPg": 14,
            "drebPg": 17
          }
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 3,
          "values": {
            "ortg": 106.3,
            "drtg": 110.5,
            "ptsPg": 112,
            "oppPtsPg": 112,
            "tovPg": 13.3,
            "drebPg": 31.3
          },
          "rank": {
            "ortg": 20,
            "drtg": 18,
            "ptsPg": 20,
            "oppPtsPg": 14,
            "tovPg": 7,
            "drebPg": 20
          }
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 2,
          "values": {
            "ortg": 112.5,
            "drtg": 88.1,
            "ptsPg": 123.5,
            "oppPtsPg": 97,
            "tovPg": 13,
            "drebPg": 34.5
          },
          "rank": {
            "ortg": 11,
            "drtg": 1,
            "ptsPg": 6,
            "oppPtsPg": 2,
            "tovPg": 6,
            "drebPg": 9
          }
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 2,
          "values": {
            "ortg": 108.8,
            "drtg": 116.2,
            "ptsPg": 111.5,
            "oppPtsPg": 121,
            "tovPg": 18,
            "drebPg": 30.5
          },
          "rank": {
            "ortg": 16,
            "drtg": 23,
            "ptsPg": 22,
            "oppPtsPg": 22,
            "tovPg": 23,
            "drebPg": 24
          }
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 3,
          "values": {
            "ortg": 110.7,
            "drtg": 108.6,
            "ptsPg": 118,
            "oppPtsPg": 116,
            "tovPg": 14.7,
            "drebPg": 34.3
          },
          "rank": {
            "ortg": 13,
            "drtg": 15,
            "ptsPg": 11,
            "oppPtsPg": 17,
            "tovPg": 11,
            "drebPg": 11
          }
        }
      ],
      "isolated": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 112.6,
            "drtg": 120.9,
            "ptsPg": 114,
            "oppPtsPg": 121,
            "tovPg": 13,
            "drebPg": 25
          },
          "rank": {
            "ortg": 9,
            "drtg": 14,
            "ptsPg": 14,
            "oppPtsPg": 7,
            "tovPg": 5,
            "drebPg": 15
          }
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 110.1,
            "drtg": 113.9,
            "ptsPg": 121,
            "oppPtsPg": 125,
            "tovPg": 18,
            "drebPg": 30
          },
          "rank": {
            "ortg": 11,
            "drtg": 9,
            "ptsPg": 9,
            "oppPtsPg": 12,
            "tovPg": 12,
            "drebPg": 10
          }
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 109.5,
            "drtg": 107.8,
            "ptsPg": 115,
            "oppPtsPg": 110,
            "tovPg": 16,
            "drebPg": 36
          },
          "rank": {
            "ortg": 13,
            "drtg": 2,
            "ptsPg": 13,
            "oppPtsPg": 2,
            "tovPg": 10,
            "drebPg": 4
          }
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 109.9,
            "drtg": 114.5,
            "ptsPg": 120,
            "oppPtsPg": 124,
            "tovPg": 12,
            "drebPg": 35
          },
          "rank": {
            "ortg": 12,
            "drtg": 10,
            "ptsPg": 11,
            "oppPtsPg": 11,
            "tovPg": 3,
            "drebPg": 7
          }
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 113.9,
            "drtg": 110.1,
            "ptsPg": 125,
            "oppPtsPg": 121,
            "tovPg": 23,
            "drebPg": 36
          },
          "rank": {
            "ortg": 8,
            "drtg": 6,
            "ptsPg": 5,
            "oppPtsPg": 8,
            "tovPg": 16,
            "drebPg": 5
          }
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 105.5,
            "drtg": 116.1,
            "ptsPg": 106,
            "oppPtsPg": 122,
            "tovPg": 18,
            "drebPg": 34
          },
          "rank": {
            "ortg": 16,
            "drtg": 11,
            "ptsPg": 16,
            "oppPtsPg": 9,
            "tovPg": 13,
            "drebPg": 8
          }
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 124.6,
            "drtg": 116.2,
            "ptsPg": 141,
            "oppPtsPg": 135,
            "tovPg": 11,
            "drebPg": 37
          },
          "rank": {
            "ortg": 2,
            "drtg": 12,
            "ptsPg": 1,
            "oppPtsPg": 15,
            "tovPg": 1,
            "drebPg": 2
          }
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 119.5,
            "drtg": 128.8,
            "ptsPg": 122,
            "oppPtsPg": 131,
            "tovPg": 16,
            "drebPg": 25
          },
          "rank": {
            "ortg": 4,
            "drtg": 16,
            "ptsPg": 7,
            "oppPtsPg": 14,
            "tovPg": 11,
            "drebPg": 16
          }
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 120.9,
            "drtg": 112.6,
            "ptsPg": 121,
            "oppPtsPg": 114,
            "tovPg": 14,
            "drebPg": 30
          },
          "rank": {
            "ortg": 3,
            "drtg": 8,
            "ptsPg": 10,
            "oppPtsPg": 3,
            "tovPg": 8,
            "drebPg": 11
          }
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 107.8,
            "drtg": 109.5,
            "ptsPg": 110,
            "oppPtsPg": 115,
            "tovPg": 13,
            "drebPg": 29
          },
          "rank": {
            "ortg": 15,
            "drtg": 4,
            "ptsPg": 15,
            "oppPtsPg": 4,
            "tovPg": 6,
            "drebPg": 12
          }
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 108.1,
            "drtg": 112.4,
            "ptsPg": 116,
            "oppPtsPg": 127,
            "tovPg": 22,
            "drebPg": 45
          },
          "rank": {
            "ortg": 14,
            "drtg": 7,
            "ptsPg": 12,
            "oppPtsPg": 13,
            "tovPg": 15,
            "drebPg": 1
          }
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 116.2,
            "drtg": 124.6,
            "ptsPg": 135,
            "oppPtsPg": 141,
            "tovPg": 18,
            "drebPg": 36
          },
          "rank": {
            "ortg": 5,
            "drtg": 15,
            "ptsPg": 2,
            "oppPtsPg": 16,
            "tovPg": 14,
            "drebPg": 6
          }
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 112.4,
            "drtg": 108.1,
            "ptsPg": 127,
            "oppPtsPg": 116,
            "tovPg": 11,
            "drebPg": 29
          },
          "rank": {
            "ortg": 10,
            "drtg": 3,
            "ptsPg": 4,
            "oppPtsPg": 5,
            "tovPg": 2,
            "drebPg": 13
          }
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 128.8,
            "drtg": 119.5,
            "ptsPg": 131,
            "oppPtsPg": 122,
            "tovPg": 15,
            "drebPg": 33
          },
          "rank": {
            "ortg": 1,
            "drtg": 13,
            "ptsPg": 3,
            "oppPtsPg": 10,
            "tovPg": 9,
            "drebPg": 9
          }
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 116.1,
            "drtg": 105.5,
            "ptsPg": 122,
            "oppPtsPg": 106,
            "tovPg": 12,
            "drebPg": 28
          },
          "rank": {
            "ortg": 6,
            "drtg": 1,
            "ptsPg": 8,
            "oppPtsPg": 1,
            "tovPg": 4,
            "drebPg": 14
          }
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 114.5,
            "drtg": 109.9,
            "ptsPg": 124,
            "oppPtsPg": 120,
            "tovPg": 13,
            "drebPg": 37
          },
          "rank": {
            "ortg": 7,
            "drtg": 5,
            "ptsPg": 6,
            "oppPtsPg": 6,
            "tovPg": 7,
            "drebPg": 3
          }
        }
      ]
    },
    {
      "matchupPeriodId": 6,
      "label": "Woche 6",
      "throughDate": "2026-10-25",
      "cumulative": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 3,
          "values": {
            "ortg": 117.7,
            "drtg": 105,
            "ptsPg": 124.7,
            "oppPtsPg": 109,
            "tovPg": 14,
            "drebPg": 30.7
          },
          "rank": {
            "ortg": 4,
            "drtg": 7,
            "ptsPg": 3,
            "oppPtsPg": 9,
            "tovPg": 6,
            "drebPg": 20
          }
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 2,
          "values": {
            "ortg": 113.8,
            "drtg": 114.1,
            "ptsPg": 110,
            "oppPtsPg": 112,
            "tovPg": 12,
            "drebPg": 27
          },
          "rank": {
            "ortg": 10,
            "drtg": 20,
            "ptsPg": 22,
            "oppPtsPg": 12,
            "tovPg": 2,
            "drebPg": 29
          }
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 3,
          "values": {
            "ortg": 104.3,
            "drtg": 116.3,
            "ptsPg": 111,
            "oppPtsPg": 123.7,
            "tovPg": 18.3,
            "drebPg": 29
          },
          "rank": {
            "ortg": 24,
            "drtg": 23,
            "ptsPg": 21,
            "oppPtsPg": 24,
            "tovPg": 26,
            "drebPg": 28
          }
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 3,
          "values": {
            "ortg": 99.4,
            "drtg": 110.5,
            "ptsPg": 102,
            "oppPtsPg": 113.7,
            "tovPg": 20.3,
            "drebPg": 31.3
          },
          "rank": {
            "ortg": 30,
            "drtg": 17,
            "ptsPg": 29,
            "oppPtsPg": 14,
            "tovPg": 28,
            "drebPg": 16
          }
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 3,
          "values": {
            "ortg": 103.3,
            "drtg": 115.7,
            "ptsPg": 114.7,
            "oppPtsPg": 128,
            "tovPg": 17.7,
            "drebPg": 34
          },
          "rank": {
            "ortg": 26,
            "drtg": 22,
            "ptsPg": 14,
            "oppPtsPg": 28,
            "tovPg": 23,
            "drebPg": 11
          }
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 2,
          "values": {
            "ortg": 105,
            "drtg": 105.8,
            "ptsPg": 115.5,
            "oppPtsPg": 117.5,
            "tovPg": 22,
            "drebPg": 36
          },
          "rank": {
            "ortg": 22,
            "drtg": 8,
            "ptsPg": 12,
            "oppPtsPg": 20,
            "tovPg": 29,
            "drebPg": 3
          }
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 3,
          "values": {
            "ortg": 110.1,
            "drtg": 115.1,
            "ptsPg": 112.3,
            "oppPtsPg": 118.3,
            "tovPg": 17.7,
            "drebPg": 31.3
          },
          "rank": {
            "ortg": 15,
            "drtg": 21,
            "ptsPg": 18,
            "oppPtsPg": 21,
            "tovPg": 24,
            "drebPg": 17
          }
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 2,
          "values": {
            "ortg": 108.3,
            "drtg": 108.3,
            "ptsPg": 112.5,
            "oppPtsPg": 115.5,
            "tovPg": 16.5,
            "drebPg": 35.5
          },
          "rank": {
            "ortg": 16,
            "drtg": 13,
            "ptsPg": 17,
            "oppPtsPg": 16,
            "tovPg": 18,
            "drebPg": 5
          }
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 3,
          "values": {
            "ortg": 116.1,
            "drtg": 102.7,
            "ptsPg": 118.3,
            "oppPtsPg": 105.7,
            "tovPg": 17,
            "drebPg": 38.3
          },
          "rank": {
            "ortg": 7,
            "drtg": 6,
            "ptsPg": 10,
            "oppPtsPg": 5,
            "tovPg": 21,
            "drebPg": 1
          }
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 3,
          "values": {
            "ortg": 110.7,
            "drtg": 120.9,
            "ptsPg": 111.7,
            "oppPtsPg": 123,
            "tovPg": 16.7,
            "drebPg": 23
          },
          "rank": {
            "ortg": 12,
            "drtg": 29,
            "ptsPg": 20,
            "oppPtsPg": 22,
            "tovPg": 19,
            "drebPg": 30
          }
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 3,
          "values": {
            "ortg": 122.7,
            "drtg": 107.9,
            "ptsPg": 121,
            "oppPtsPg": 111.3,
            "tovPg": 14.7,
            "drebPg": 30.3
          },
          "rank": {
            "ortg": 2,
            "drtg": 12,
            "ptsPg": 6,
            "oppPtsPg": 11,
            "tovPg": 9,
            "drebPg": 22
          }
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 3,
          "values": {
            "ortg": 114.6,
            "drtg": 111.6,
            "ptsPg": 121.3,
            "oppPtsPg": 116.7,
            "tovPg": 15.3,
            "drebPg": 33
          },
          "rank": {
            "ortg": 8,
            "drtg": 19,
            "ptsPg": 5,
            "oppPtsPg": 19,
            "tovPg": 14,
            "drebPg": 12
          }
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 3,
          "values": {
            "ortg": 107.5,
            "drtg": 106.5,
            "ptsPg": 113,
            "oppPtsPg": 109.7,
            "tovPg": 22.7,
            "drebPg": 30.7
          },
          "rank": {
            "ortg": 18,
            "drtg": 9,
            "ptsPg": 16,
            "oppPtsPg": 10,
            "tovPg": 30,
            "drebPg": 21
          }
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 3,
          "values": {
            "ortg": 124.8,
            "drtg": 109.3,
            "ptsPg": 128,
            "oppPtsPg": 115,
            "tovPg": 16.3,
            "drebPg": 29.3
          },
          "rank": {
            "ortg": 1,
            "drtg": 15,
            "ptsPg": 1,
            "oppPtsPg": 15,
            "tovPg": 16,
            "drebPg": 27
          }
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 3,
          "values": {
            "ortg": 116.3,
            "drtg": 107.3,
            "ptsPg": 119,
            "oppPtsPg": 107.7,
            "tovPg": 16.7,
            "drebPg": 35.3
          },
          "rank": {
            "ortg": 6,
            "drtg": 10,
            "ptsPg": 8,
            "oppPtsPg": 7,
            "tovPg": 20,
            "drebPg": 6
          }
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 3,
          "values": {
            "ortg": 103.2,
            "drtg": 117.8,
            "ptsPg": 109,
            "oppPtsPg": 124.7,
            "tovPg": 14.3,
            "drebPg": 30
          },
          "rank": {
            "ortg": 27,
            "drtg": 24,
            "ptsPg": 26,
            "oppPtsPg": 26,
            "tovPg": 8,
            "drebPg": 24
          }
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 3,
          "values": {
            "ortg": 110.6,
            "drtg": 117.9,
            "ptsPg": 119,
            "oppPtsPg": 129,
            "tovPg": 19,
            "drebPg": 35.3
          },
          "rank": {
            "ortg": 14,
            "drtg": 25,
            "ptsPg": 9,
            "oppPtsPg": 30,
            "tovPg": 27,
            "drebPg": 7
          }
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 3,
          "values": {
            "ortg": 116.7,
            "drtg": 94.8,
            "ptsPg": 121,
            "oppPtsPg": 97.7,
            "tovPg": 16.3,
            "drebPg": 38
          },
          "rank": {
            "ortg": 5,
            "drtg": 2,
            "ptsPg": 7,
            "oppPtsPg": 2,
            "tovPg": 17,
            "drebPg": 2
          }
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 3,
          "values": {
            "ortg": 114.6,
            "drtg": 119.1,
            "ptsPg": 124.7,
            "oppPtsPg": 128,
            "tovPg": 15.7,
            "drebPg": 33
          },
          "rank": {
            "ortg": 9,
            "drtg": 26,
            "ptsPg": 4,
            "oppPtsPg": 29,
            "tovPg": 15,
            "drebPg": 13
          }
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 3,
          "values": {
            "ortg": 100.1,
            "drtg": 107.6,
            "ptsPg": 101.7,
            "oppPtsPg": 108,
            "tovPg": 14.7,
            "drebPg": 34.7
          },
          "rank": {
            "ortg": 29,
            "drtg": 11,
            "ptsPg": 30,
            "oppPtsPg": 8,
            "tovPg": 10,
            "drebPg": 8
          }
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 3,
          "values": {
            "ortg": 105.1,
            "drtg": 94.1,
            "ptsPg": 106.7,
            "oppPtsPg": 96.3,
            "tovPg": 13,
            "drebPg": 32.7
          },
          "rank": {
            "ortg": 21,
            "drtg": 1,
            "ptsPg": 28,
            "oppPtsPg": 1,
            "tovPg": 3,
            "drebPg": 15
          }
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 3,
          "values": {
            "ortg": 104.2,
            "drtg": 109.5,
            "ptsPg": 109.7,
            "oppPtsPg": 116.3,
            "tovPg": 17,
            "drebPg": 34.7
          },
          "rank": {
            "ortg": 25,
            "drtg": 16,
            "ptsPg": 24,
            "oppPtsPg": 18,
            "tovPg": 22,
            "drebPg": 9
          }
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 4,
          "values": {
            "ortg": 102.1,
            "drtg": 101.5,
            "ptsPg": 110,
            "oppPtsPg": 107,
            "tovPg": 11.8,
            "drebPg": 32.8
          },
          "rank": {
            "ortg": 28,
            "drtg": 5,
            "ptsPg": 23,
            "oppPtsPg": 6,
            "tovPg": 1,
            "drebPg": 14
          }
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 2,
          "values": {
            "ortg": 108.2,
            "drtg": 120,
            "ptsPg": 107,
            "oppPtsPg": 123,
            "tovPg": 15,
            "drebPg": 29.5
          },
          "rank": {
            "ortg": 17,
            "drtg": 28,
            "ptsPg": 27,
            "oppPtsPg": 23,
            "tovPg": 13,
            "drebPg": 26
          }
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 2,
          "values": {
            "ortg": 121.1,
            "drtg": 99.4,
            "ptsPg": 126,
            "oppPtsPg": 101.5,
            "tovPg": 13,
            "drebPg": 36
          },
          "rank": {
            "ortg": 3,
            "drtg": 4,
            "ptsPg": 2,
            "oppPtsPg": 3,
            "tovPg": 4,
            "drebPg": 4
          }
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 3,
          "values": {
            "ortg": 104.7,
            "drtg": 120.9,
            "ptsPg": 109.3,
            "oppPtsPg": 124,
            "tovPg": 14.7,
            "drebPg": 30.3
          },
          "rank": {
            "ortg": 23,
            "drtg": 30,
            "ptsPg": 25,
            "oppPtsPg": 25,
            "tovPg": 11,
            "drebPg": 23
          }
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 3,
          "values": {
            "ortg": 106.3,
            "drtg": 110.5,
            "ptsPg": 112,
            "oppPtsPg": 112,
            "tovPg": 13.3,
            "drebPg": 31.3
          },
          "rank": {
            "ortg": 19,
            "drtg": 18,
            "ptsPg": 19,
            "oppPtsPg": 13,
            "tovPg": 5,
            "drebPg": 18
          }
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 3,
          "values": {
            "ortg": 106,
            "drtg": 96.6,
            "ptsPg": 113.7,
            "oppPtsPg": 103.7,
            "tovPg": 14,
            "drebPg": 29.7
          },
          "rank": {
            "ortg": 20,
            "drtg": 3,
            "ptsPg": 15,
            "oppPtsPg": 4,
            "tovPg": 7,
            "drebPg": 25
          }
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 3,
          "values": {
            "ortg": 112,
            "drtg": 119.9,
            "ptsPg": 115.3,
            "oppPtsPg": 124.7,
            "tovPg": 17.7,
            "drebPg": 31
          },
          "rank": {
            "ortg": 11,
            "drtg": 27,
            "ptsPg": 13,
            "oppPtsPg": 27,
            "tovPg": 25,
            "drebPg": 19
          }
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 3,
          "values": {
            "ortg": 110.7,
            "drtg": 108.6,
            "ptsPg": 118,
            "oppPtsPg": 116,
            "tovPg": 14.7,
            "drebPg": 34.3
          },
          "rank": {
            "ortg": 13,
            "drtg": 14,
            "ptsPg": 11,
            "oppPtsPg": 17,
            "tovPg": 12,
            "drebPg": 10
          }
        }
      ],
      "isolated": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 101.6,
            "drtg": 129.9,
            "ptsPg": 109,
            "oppPtsPg": 136,
            "tovPg": 15,
            "drebPg": 30
          },
          "rank": {
            "ortg": 10,
            "drtg": 14,
            "ptsPg": 8,
            "oppPtsPg": 14,
            "tovPg": 7,
            "drebPg": 9
          }
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 108.2,
            "drtg": 92,
            "ptsPg": 106,
            "oppPtsPg": 93,
            "tovPg": 15,
            "drebPg": 39
          },
          "rank": {
            "ortg": 8,
            "drtg": 2,
            "ptsPg": 10,
            "oppPtsPg": 1,
            "tovPg": 8,
            "drebPg": 2
          }
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 129.9,
            "drtg": 101.6,
            "ptsPg": 136,
            "oppPtsPg": 109,
            "tovPg": 14,
            "drebPg": 36
          },
          "rank": {
            "ortg": 1,
            "drtg": 5,
            "ptsPg": 1,
            "oppPtsPg": 7,
            "tovPg": 5,
            "drebPg": 5
          }
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 95.6,
            "drtg": 105.4,
            "ptsPg": 101,
            "oppPtsPg": 108,
            "tovPg": 26,
            "drebPg": 30
          },
          "rank": {
            "ortg": 12,
            "drtg": 6,
            "ptsPg": 12,
            "oppPtsPg": 6,
            "tovPg": 14,
            "drebPg": 10
          }
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 127.3,
            "drtg": 118.4,
            "ptsPg": 132,
            "oppPtsPg": 123,
            "tovPg": 10,
            "drebPg": 26
          },
          "rank": {
            "ortg": 2,
            "drtg": 11,
            "ptsPg": 2,
            "oppPtsPg": 11,
            "tovPg": 1,
            "drebPg": 13
          }
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 121.9,
            "drtg": 110.1,
            "ptsPg": 123,
            "oppPtsPg": 112,
            "tovPg": 12,
            "drebPg": 37
          },
          "rank": {
            "ortg": 3,
            "drtg": 9,
            "ptsPg": 3,
            "oppPtsPg": 9,
            "tovPg": 3,
            "drebPg": 4
          }
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 114.7,
            "drtg": 91.9,
            "ptsPg": 117,
            "oppPtsPg": 94,
            "tovPg": 23,
            "drebPg": 40
          },
          "rank": {
            "ortg": 5,
            "drtg": 1,
            "ptsPg": 5,
            "oppPtsPg": 2,
            "tovPg": 13,
            "drebPg": 1
          }
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 96.6,
            "drtg": 108.6,
            "ptsPg": 102,
            "oppPtsPg": 111,
            "tovPg": 14,
            "drebPg": 33
          },
          "rank": {
            "ortg": 11,
            "drtg": 8,
            "ptsPg": 11,
            "oppPtsPg": 8,
            "tovPg": 6,
            "drebPg": 6
          }
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 105.4,
            "drtg": 95.6,
            "ptsPg": 108,
            "oppPtsPg": 101,
            "tovPg": 16,
            "drebPg": 31
          },
          "rank": {
            "ortg": 9,
            "drtg": 3,
            "ptsPg": 9,
            "oppPtsPg": 3,
            "tovPg": 10,
            "drebPg": 8
          }
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 108.6,
            "drtg": 96.6,
            "ptsPg": 111,
            "oppPtsPg": 102,
            "tovPg": 15,
            "drebPg": 39
          },
          "rank": {
            "ortg": 7,
            "drtg": 4,
            "ptsPg": 7,
            "oppPtsPg": 4,
            "tovPg": 9,
            "drebPg": 3
          }
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 92,
            "drtg": 108.2,
            "ptsPg": 93,
            "oppPtsPg": 106,
            "tovPg": 10,
            "drebPg": 28
          },
          "rank": {
            "ortg": 13,
            "drtg": 7,
            "ptsPg": 14,
            "oppPtsPg": 5,
            "tovPg": 2,
            "drebPg": 11
          }
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 110.1,
            "drtg": 121.9,
            "ptsPg": 112,
            "oppPtsPg": 123,
            "tovPg": 13,
            "drebPg": 28
          },
          "rank": {
            "ortg": 6,
            "drtg": 12,
            "ptsPg": 6,
            "oppPtsPg": 12,
            "tovPg": 4,
            "drebPg": 12
          }
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 91.9,
            "drtg": 114.7,
            "ptsPg": 94,
            "oppPtsPg": 117,
            "tovPg": 16,
            "drebPg": 20
          },
          "rank": {
            "ortg": 14,
            "drtg": 10,
            "ptsPg": 13,
            "oppPtsPg": 10,
            "tovPg": 11,
            "drebPg": 14
          }
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 118.4,
            "drtg": 127.3,
            "ptsPg": 123,
            "oppPtsPg": 132,
            "tovPg": 17,
            "drebPg": 32
          },
          "rank": {
            "ortg": 4,
            "drtg": 13,
            "ptsPg": 4,
            "oppPtsPg": 13,
            "tovPg": 12,
            "drebPg": 7
          }
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        }
      ]
    },
    {
      "matchupPeriodId": 7,
      "label": "Woche 7",
      "throughDate": "2026-10-26",
      "cumulative": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 4,
          "values": {
            "ortg": 113.9,
            "drtg": 107.5,
            "ptsPg": 121,
            "oppPtsPg": 111.8,
            "tovPg": 13.8,
            "drebPg": 28.5
          },
          "rank": {
            "ortg": 10,
            "drtg": 11,
            "ptsPg": 5,
            "oppPtsPg": 13,
            "tovPg": 4,
            "drebPg": 28
          }
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 3,
          "values": {
            "ortg": 116.4,
            "drtg": 106.3,
            "ptsPg": 118,
            "oppPtsPg": 107.7,
            "tovPg": 16,
            "drebPg": 29.7
          },
          "rank": {
            "ortg": 5,
            "drtg": 8,
            "ptsPg": 9,
            "oppPtsPg": 8,
            "tovPg": 16,
            "drebPg": 24
          }
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 3,
          "values": {
            "ortg": 104.3,
            "drtg": 116.3,
            "ptsPg": 111,
            "oppPtsPg": 123.7,
            "tovPg": 18.3,
            "drebPg": 29
          },
          "rank": {
            "ortg": 24,
            "drtg": 23,
            "ptsPg": 22,
            "oppPtsPg": 26,
            "tovPg": 27,
            "drebPg": 27
          }
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 4,
          "values": {
            "ortg": 103.1,
            "drtg": 109.8,
            "ptsPg": 104,
            "oppPtsPg": 111,
            "tovPg": 18,
            "drebPg": 32
          },
          "rank": {
            "ortg": 26,
            "drtg": 16,
            "ptsPg": 29,
            "oppPtsPg": 11,
            "tovPg": 26,
            "drebPg": 16
          }
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 4,
          "values": {
            "ortg": 100.5,
            "drtg": 117,
            "ptsPg": 110.8,
            "oppPtsPg": 129.5,
            "tovPg": 19.3,
            "drebPg": 32
          },
          "rank": {
            "ortg": 29,
            "drtg": 24,
            "ptsPg": 23,
            "oppPtsPg": 30,
            "tovPg": 29,
            "drebPg": 17
          }
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 3,
          "values": {
            "ortg": 108.1,
            "drtg": 107.7,
            "ptsPg": 119.3,
            "oppPtsPg": 120,
            "tovPg": 18.7,
            "drebPg": 36.3
          },
          "rank": {
            "ortg": 19,
            "drtg": 13,
            "ptsPg": 7,
            "oppPtsPg": 20,
            "tovPg": 28,
            "drebPg": 4
          }
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 4,
          "values": {
            "ortg": 110,
            "drtg": 111.7,
            "ptsPg": 112.5,
            "oppPtsPg": 116,
            "tovPg": 17.3,
            "drebPg": 33
          },
          "rank": {
            "ortg": 15,
            "drtg": 20,
            "ptsPg": 19,
            "oppPtsPg": 18,
            "tovPg": 25,
            "drebPg": 12
          }
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 3,
          "values": {
            "ortg": 111.9,
            "drtg": 117.1,
            "ptsPg": 113,
            "oppPtsPg": 121.7,
            "tovPg": 14.7,
            "drebPg": 31
          },
          "rank": {
            "ortg": 11,
            "drtg": 25,
            "ptsPg": 16,
            "oppPtsPg": 23,
            "tovPg": 10,
            "drebPg": 20
          }
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 3,
          "values": {
            "ortg": 116.1,
            "drtg": 102.7,
            "ptsPg": 118.3,
            "oppPtsPg": 105.7,
            "tovPg": 17,
            "drebPg": 38.3
          },
          "rank": {
            "ortg": 6,
            "drtg": 6,
            "ptsPg": 8,
            "oppPtsPg": 5,
            "tovPg": 22,
            "drebPg": 1
          }
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 4,
          "values": {
            "ortg": 117,
            "drtg": 120.6,
            "ptsPg": 117.3,
            "oppPtsPg": 120.8,
            "tovPg": 16.8,
            "drebPg": 25.3
          },
          "rank": {
            "ortg": 4,
            "drtg": 29,
            "ptsPg": 10,
            "oppPtsPg": 21,
            "tovPg": 21,
            "drebPg": 30
          }
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 4,
          "values": {
            "ortg": 120.8,
            "drtg": 106.5,
            "ptsPg": 120.8,
            "oppPtsPg": 111,
            "tovPg": 16.3,
            "drebPg": 32.8
          },
          "rank": {
            "ortg": 3,
            "drtg": 9,
            "ptsPg": 6,
            "oppPtsPg": 12,
            "tovPg": 17,
            "drebPg": 14
          }
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 4,
          "values": {
            "ortg": 110.8,
            "drtg": 111.4,
            "ptsPg": 116.5,
            "oppPtsPg": 115,
            "tovPg": 14.8,
            "drebPg": 33.3
          },
          "rank": {
            "ortg": 12,
            "drtg": 19,
            "ptsPg": 13,
            "oppPtsPg": 16,
            "tovPg": 13,
            "drebPg": 11
          }
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 3,
          "values": {
            "ortg": 107.5,
            "drtg": 106.5,
            "ptsPg": 113,
            "oppPtsPg": 109.7,
            "tovPg": 22.7,
            "drebPg": 30.7
          },
          "rank": {
            "ortg": 20,
            "drtg": 10,
            "ptsPg": 17,
            "oppPtsPg": 10,
            "tovPg": 30,
            "drebPg": 21
          }
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 3,
          "values": {
            "ortg": 124.8,
            "drtg": 109.3,
            "ptsPg": 128,
            "oppPtsPg": 115,
            "tovPg": 16.3,
            "drebPg": 29.3
          },
          "rank": {
            "ortg": 1,
            "drtg": 14,
            "ptsPg": 1,
            "oppPtsPg": 17,
            "tovPg": 18,
            "drebPg": 26
          }
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 4,
          "values": {
            "ortg": 114.6,
            "drtg": 106.2,
            "ptsPg": 116.8,
            "oppPtsPg": 107,
            "tovPg": 15.5,
            "drebPg": 35.5
          },
          "rank": {
            "ortg": 8,
            "drtg": 7,
            "ptsPg": 11,
            "oppPtsPg": 6,
            "tovPg": 14,
            "drebPg": 6
          }
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 4,
          "values": {
            "ortg": 102.9,
            "drtg": 115.8,
            "ptsPg": 109,
            "oppPtsPg": 121.8,
            "tovPg": 14.3,
            "drebPg": 30.5
          },
          "rank": {
            "ortg": 27,
            "drtg": 22,
            "ptsPg": 28,
            "oppPtsPg": 24,
            "tovPg": 8,
            "drebPg": 22
          }
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 4,
          "values": {
            "ortg": 110.6,
            "drtg": 113.4,
            "ptsPg": 116.8,
            "oppPtsPg": 122.3,
            "tovPg": 17,
            "drebPg": 37.8
          },
          "rank": {
            "ortg": 13,
            "drtg": 21,
            "ptsPg": 12,
            "oppPtsPg": 25,
            "tovPg": 23,
            "drebPg": 2
          }
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 4,
          "values": {
            "ortg": 115.3,
            "drtg": 100,
            "ptsPg": 122,
            "oppPtsPg": 105,
            "tovPg": 16.5,
            "drebPg": 37.8
          },
          "rank": {
            "ortg": 7,
            "drtg": 4,
            "ptsPg": 4,
            "oppPtsPg": 4,
            "tovPg": 19,
            "drebPg": 3
          }
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 3,
          "values": {
            "ortg": 114.6,
            "drtg": 119.1,
            "ptsPg": 124.7,
            "oppPtsPg": 128,
            "tovPg": 15.7,
            "drebPg": 33
          },
          "rank": {
            "ortg": 9,
            "drtg": 27,
            "ptsPg": 3,
            "oppPtsPg": 29,
            "tovPg": 15,
            "drebPg": 13
          }
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 3,
          "values": {
            "ortg": 100.1,
            "drtg": 107.6,
            "ptsPg": 101.7,
            "oppPtsPg": 108,
            "tovPg": 14.7,
            "drebPg": 34.7
          },
          "rank": {
            "ortg": 30,
            "drtg": 12,
            "ptsPg": 30,
            "oppPtsPg": 9,
            "tovPg": 11,
            "drebPg": 7
          }
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 4,
          "values": {
            "ortg": 109.3,
            "drtg": 98.9,
            "ptsPg": 111.3,
            "oppPtsPg": 100.8,
            "tovPg": 13.8,
            "drebPg": 33.5
          },
          "rank": {
            "ortg": 18,
            "drtg": 2,
            "ptsPg": 21,
            "oppPtsPg": 1,
            "tovPg": 5,
            "drebPg": 9
          }
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 3,
          "values": {
            "ortg": 104.2,
            "drtg": 109.5,
            "ptsPg": 109.7,
            "oppPtsPg": 116.3,
            "tovPg": 17,
            "drebPg": 34.7
          },
          "rank": {
            "ortg": 25,
            "drtg": 15,
            "ptsPg": 25,
            "oppPtsPg": 19,
            "tovPg": 24,
            "drebPg": 8
          }
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 4,
          "values": {
            "ortg": 102.1,
            "drtg": 101.5,
            "ptsPg": 110,
            "oppPtsPg": 107,
            "tovPg": 11.8,
            "drebPg": 32.8
          },
          "rank": {
            "ortg": 28,
            "drtg": 5,
            "ptsPg": 24,
            "oppPtsPg": 7,
            "tovPg": 1,
            "drebPg": 15
          }
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 3,
          "values": {
            "ortg": 110.1,
            "drtg": 120.5,
            "ptsPg": 109.3,
            "oppPtsPg": 123.7,
            "tovPg": 14,
            "drebPg": 27.7
          },
          "rank": {
            "ortg": 14,
            "drtg": 28,
            "ptsPg": 26,
            "oppPtsPg": 27,
            "tovPg": 6,
            "drebPg": 29
          }
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 2,
          "values": {
            "ortg": 121.1,
            "drtg": 99.4,
            "ptsPg": 126,
            "oppPtsPg": 101.5,
            "tovPg": 13,
            "drebPg": 36
          },
          "rank": {
            "ortg": 2,
            "drtg": 3,
            "ptsPg": 2,
            "oppPtsPg": 2,
            "tovPg": 2,
            "drebPg": 5
          }
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 3,
          "values": {
            "ortg": 104.7,
            "drtg": 120.9,
            "ptsPg": 109.3,
            "oppPtsPg": 124,
            "tovPg": 14.7,
            "drebPg": 30.3
          },
          "rank": {
            "ortg": 23,
            "drtg": 30,
            "ptsPg": 27,
            "oppPtsPg": 28,
            "tovPg": 12,
            "drebPg": 23
          }
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 3,
          "values": {
            "ortg": 106.3,
            "drtg": 110.5,
            "ptsPg": 112,
            "oppPtsPg": 112,
            "tovPg": 13.3,
            "drebPg": 31.3
          },
          "rank": {
            "ortg": 21,
            "drtg": 18,
            "ptsPg": 20,
            "oppPtsPg": 14,
            "tovPg": 3,
            "drebPg": 19
          }
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 3,
          "values": {
            "ortg": 106,
            "drtg": 96.6,
            "ptsPg": 113.7,
            "oppPtsPg": 103.7,
            "tovPg": 14,
            "drebPg": 29.7
          },
          "rank": {
            "ortg": 22,
            "drtg": 1,
            "ptsPg": 15,
            "oppPtsPg": 3,
            "tovPg": 7,
            "drebPg": 25
          }
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 4,
          "values": {
            "ortg": 109.8,
            "drtg": 117.3,
            "ptsPg": 112.8,
            "oppPtsPg": 121,
            "tovPg": 16.5,
            "drebPg": 32
          },
          "rank": {
            "ortg": 17,
            "drtg": 26,
            "ptsPg": 18,
            "oppPtsPg": 22,
            "tovPg": 20,
            "drebPg": 18
          }
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 4,
          "values": {
            "ortg": 110,
            "drtg": 110.1,
            "ptsPg": 114.3,
            "oppPtsPg": 114.5,
            "tovPg": 14.5,
            "drebPg": 33.5
          },
          "rank": {
            "ortg": 16,
            "drtg": 17,
            "ptsPg": 14,
            "oppPtsPg": 15,
            "tovPg": 9,
            "drebPg": 10
          }
        }
      ],
      "isolated": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 102.6,
            "drtg": 115.3,
            "ptsPg": 110,
            "oppPtsPg": 120,
            "tovPg": 13,
            "drebPg": 22
          },
          "rank": {
            "ortg": 15,
            "drtg": 14,
            "ptsPg": 10,
            "oppPtsPg": 13,
            "tovPg": 7,
            "drebPg": 17
          }
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 121,
            "drtg": 92,
            "ptsPg": 134,
            "oppPtsPg": 99,
            "tovPg": 24,
            "drebPg": 35
          },
          "rank": {
            "ortg": 3,
            "drtg": 1,
            "ptsPg": 1,
            "oppPtsPg": 1,
            "tovPg": 17,
            "drebPg": 8
          }
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 115.2,
            "drtg": 107.7,
            "ptsPg": 110,
            "oppPtsPg": 103,
            "tovPg": 11,
            "drebPg": 34
          },
          "rank": {
            "ortg": 6,
            "drtg": 6,
            "ptsPg": 11,
            "oppPtsPg": 3,
            "tovPg": 1,
            "drebPg": 10
          }
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 92,
            "drtg": 121,
            "ptsPg": 99,
            "oppPtsPg": 134,
            "tovPg": 24,
            "drebPg": 26
          },
          "rank": {
            "ortg": 18,
            "drtg": 16,
            "ptsPg": 18,
            "oppPtsPg": 17,
            "tovPg": 18,
            "drebPg": 15
          }
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 114.3,
            "drtg": 111.5,
            "ptsPg": 127,
            "oppPtsPg": 125,
            "tovPg": 12,
            "drebPg": 37
          },
          "rank": {
            "ortg": 7,
            "drtg": 10,
            "ptsPg": 3,
            "oppPtsPg": 14,
            "tovPg": 4,
            "drebPg": 4
          }
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 109.5,
            "drtg": 101.9,
            "ptsPg": 113,
            "oppPtsPg": 109,
            "tovPg": 16,
            "drebPg": 38
          },
          "rank": {
            "ortg": 11,
            "drtg": 3,
            "ptsPg": 9,
            "oppPtsPg": 5,
            "tovPg": 12,
            "drebPg": 3
          }
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 119.8,
            "drtg": 136.4,
            "ptsPg": 114,
            "oppPtsPg": 134,
            "tovPg": 11,
            "drebPg": 22
          },
          "rank": {
            "ortg": 4,
            "drtg": 18,
            "ptsPg": 7,
            "oppPtsPg": 18,
            "tovPg": 2,
            "drebPg": 18
          }
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 136.4,
            "drtg": 119.8,
            "ptsPg": 134,
            "oppPtsPg": 114,
            "tovPg": 17,
            "drebPg": 32
          },
          "rank": {
            "ortg": 1,
            "drtg": 15,
            "ptsPg": 2,
            "oppPtsPg": 11,
            "tovPg": 14,
            "drebPg": 12
          }
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 115.3,
            "drtg": 102.6,
            "ptsPg": 120,
            "oppPtsPg": 110,
            "tovPg": 21,
            "drebPg": 40
          },
          "rank": {
            "ortg": 5,
            "drtg": 4,
            "ptsPg": 6,
            "oppPtsPg": 6,
            "tovPg": 16,
            "drebPg": 2
          }
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 99.1,
            "drtg": 110.8,
            "ptsPg": 102,
            "oppPtsPg": 110,
            "tovPg": 13,
            "drebPg": 34
          },
          "rank": {
            "ortg": 17,
            "drtg": 9,
            "ptsPg": 17,
            "oppPtsPg": 7,
            "tovPg": 8,
            "drebPg": 11
          }
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 109.3,
            "drtg": 102.9,
            "ptsPg": 110,
            "oppPtsPg": 105,
            "tovPg": 12,
            "drebPg": 36
          },
          "rank": {
            "ortg": 12,
            "drtg": 5,
            "ptsPg": 12,
            "oppPtsPg": 4,
            "tovPg": 5,
            "drebPg": 6
          }
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 101.9,
            "drtg": 109.5,
            "ptsPg": 109,
            "oppPtsPg": 113,
            "tovPg": 14,
            "drebPg": 32
          },
          "rank": {
            "ortg": 16,
            "drtg": 8,
            "ptsPg": 14,
            "oppPtsPg": 10,
            "tovPg": 10,
            "drebPg": 13
          }
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 110.8,
            "drtg": 99.1,
            "ptsPg": 110,
            "oppPtsPg": 102,
            "tovPg": 11,
            "drebPg": 45
          },
          "rank": {
            "ortg": 10,
            "drtg": 2,
            "ptsPg": 13,
            "oppPtsPg": 2,
            "tovPg": 3,
            "drebPg": 1
          }
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 111.5,
            "drtg": 114.3,
            "ptsPg": 125,
            "oppPtsPg": 127,
            "tovPg": 17,
            "drebPg": 37
          },
          "rank": {
            "ortg": 9,
            "drtg": 12,
            "ptsPg": 4,
            "oppPtsPg": 16,
            "tovPg": 15,
            "drebPg": 5
          }
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 121.6,
            "drtg": 114,
            "ptsPg": 125,
            "oppPtsPg": 114,
            "tovPg": 16,
            "drebPg": 36
          },
          "rank": {
            "ortg": 2,
            "drtg": 11,
            "ptsPg": 5,
            "oppPtsPg": 12,
            "tovPg": 13,
            "drebPg": 7
          }
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 114,
            "drtg": 121.6,
            "ptsPg": 114,
            "oppPtsPg": 125,
            "tovPg": 12,
            "drebPg": 24
          },
          "rank": {
            "ortg": 8,
            "drtg": 17,
            "ptsPg": 8,
            "oppPtsPg": 15,
            "tovPg": 6,
            "drebPg": 16
          }
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 102.9,
            "drtg": 109.3,
            "ptsPg": 105,
            "oppPtsPg": 110,
            "tovPg": 13,
            "drebPg": 35
          },
          "rank": {
            "ortg": 14,
            "drtg": 7,
            "ptsPg": 15,
            "oppPtsPg": 8,
            "tovPg": 9,
            "drebPg": 9
          }
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 107.7,
            "drtg": 115.2,
            "ptsPg": 103,
            "oppPtsPg": 110,
            "tovPg": 14,
            "drebPg": 31
          },
          "rank": {
            "ortg": 13,
            "drtg": 13,
            "ptsPg": 16,
            "oppPtsPg": 9,
            "tovPg": 11,
            "drebPg": 14
          }
        }
      ]
    },
    {
      "matchupPeriodId": 8,
      "label": "Woche 8",
      "throughDate": "2026-10-27",
      "cumulative": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 4,
          "values": {
            "ortg": 113.9,
            "drtg": 107.5,
            "ptsPg": 121,
            "oppPtsPg": 111.8,
            "tovPg": 13.8,
            "drebPg": 28.5
          },
          "rank": {
            "ortg": 9,
            "drtg": 10,
            "ptsPg": 5,
            "oppPtsPg": 13,
            "tovPg": 4,
            "drebPg": 27
          }
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 4,
          "values": {
            "ortg": 114.9,
            "drtg": 108.1,
            "ptsPg": 119.8,
            "oppPtsPg": 111.8,
            "tovPg": 15.5,
            "drebPg": 31.3
          },
          "rank": {
            "ortg": 6,
            "drtg": 12,
            "ptsPg": 7,
            "oppPtsPg": 14,
            "tovPg": 13,
            "drebPg": 20
          }
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 4,
          "values": {
            "ortg": 106.6,
            "drtg": 114.9,
            "ptsPg": 114.3,
            "oppPtsPg": 124,
            "tovPg": 17.5,
            "drebPg": 30.8
          },
          "rank": {
            "ortg": 22,
            "drtg": 21,
            "ptsPg": 14,
            "oppPtsPg": 27,
            "tovPg": 26,
            "drebPg": 22
          }
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 4,
          "values": {
            "ortg": 103.1,
            "drtg": 109.8,
            "ptsPg": 104,
            "oppPtsPg": 111,
            "tovPg": 18,
            "drebPg": 32
          },
          "rank": {
            "ortg": 26,
            "drtg": 16,
            "ptsPg": 29,
            "oppPtsPg": 11,
            "tovPg": 27,
            "drebPg": 17
          }
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 4,
          "values": {
            "ortg": 100.5,
            "drtg": 117,
            "ptsPg": 110.8,
            "oppPtsPg": 129.5,
            "tovPg": 19.3,
            "drebPg": 32
          },
          "rank": {
            "ortg": 30,
            "drtg": 24,
            "ptsPg": 23,
            "oppPtsPg": 30,
            "tovPg": 29,
            "drebPg": 18
          }
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 3,
          "values": {
            "ortg": 108.1,
            "drtg": 107.7,
            "ptsPg": 119.3,
            "oppPtsPg": 120,
            "tovPg": 18.7,
            "drebPg": 36.3
          },
          "rank": {
            "ortg": 20,
            "drtg": 11,
            "ptsPg": 8,
            "oppPtsPg": 19,
            "tovPg": 28,
            "drebPg": 3
          }
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 4,
          "values": {
            "ortg": 110,
            "drtg": 111.7,
            "ptsPg": 112.5,
            "oppPtsPg": 116,
            "tovPg": 17.3,
            "drebPg": 33
          },
          "rank": {
            "ortg": 16,
            "drtg": 19,
            "ptsPg": 21,
            "oppPtsPg": 17,
            "tovPg": 25,
            "drebPg": 12
          }
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 3,
          "values": {
            "ortg": 111.9,
            "drtg": 117.1,
            "ptsPg": 113,
            "oppPtsPg": 121.7,
            "tovPg": 14.7,
            "drebPg": 31
          },
          "rank": {
            "ortg": 11,
            "drtg": 25,
            "ptsPg": 17,
            "oppPtsPg": 23,
            "tovPg": 11,
            "drebPg": 21
          }
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 4,
          "values": {
            "ortg": 112.3,
            "drtg": 104.9,
            "ptsPg": 113,
            "oppPtsPg": 107,
            "tovPg": 16.3,
            "drebPg": 36.3
          },
          "rank": {
            "ortg": 10,
            "drtg": 5,
            "ptsPg": 18,
            "oppPtsPg": 5,
            "tovPg": 18,
            "drebPg": 4
          }
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 4,
          "values": {
            "ortg": 117,
            "drtg": 120.6,
            "ptsPg": 117.3,
            "oppPtsPg": 120.8,
            "tovPg": 16.8,
            "drebPg": 25.3
          },
          "rank": {
            "ortg": 4,
            "drtg": 29,
            "ptsPg": 9,
            "oppPtsPg": 21,
            "tovPg": 22,
            "drebPg": 30
          }
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 4,
          "values": {
            "ortg": 120.8,
            "drtg": 106.5,
            "ptsPg": 120.8,
            "oppPtsPg": 111,
            "tovPg": 16.3,
            "drebPg": 32.8
          },
          "rank": {
            "ortg": 3,
            "drtg": 8,
            "ptsPg": 6,
            "oppPtsPg": 12,
            "tovPg": 19,
            "drebPg": 14
          }
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 4,
          "values": {
            "ortg": 110.8,
            "drtg": 111.4,
            "ptsPg": 116.5,
            "oppPtsPg": 115,
            "tovPg": 14.8,
            "drebPg": 33.3
          },
          "rank": {
            "ortg": 13,
            "drtg": 18,
            "ptsPg": 12,
            "oppPtsPg": 16,
            "tovPg": 12,
            "drebPg": 11
          }
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 3,
          "values": {
            "ortg": 107.5,
            "drtg": 106.5,
            "ptsPg": 113,
            "oppPtsPg": 109.7,
            "tovPg": 22.7,
            "drebPg": 30.7
          },
          "rank": {
            "ortg": 21,
            "drtg": 9,
            "ptsPg": 19,
            "oppPtsPg": 8,
            "tovPg": 30,
            "drebPg": 23
          }
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 4,
          "values": {
            "ortg": 125.2,
            "drtg": 114.9,
            "ptsPg": 128.3,
            "oppPtsPg": 120.3,
            "tovPg": 16,
            "drebPg": 28.3
          },
          "rank": {
            "ortg": 1,
            "drtg": 22,
            "ptsPg": 2,
            "oppPtsPg": 20,
            "tovPg": 17,
            "drebPg": 28
          }
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 4,
          "values": {
            "ortg": 114.6,
            "drtg": 106.2,
            "ptsPg": 116.8,
            "oppPtsPg": 107,
            "tovPg": 15.5,
            "drebPg": 35.5
          },
          "rank": {
            "ortg": 7,
            "drtg": 7,
            "ptsPg": 10,
            "oppPtsPg": 6,
            "tovPg": 14,
            "drebPg": 5
          }
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 4,
          "values": {
            "ortg": 102.9,
            "drtg": 115.8,
            "ptsPg": 109,
            "oppPtsPg": 121.8,
            "tovPg": 14.3,
            "drebPg": 30.5
          },
          "rank": {
            "ortg": 28,
            "drtg": 23,
            "ptsPg": 27,
            "oppPtsPg": 24,
            "tovPg": 8,
            "drebPg": 24
          }
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 4,
          "values": {
            "ortg": 110.6,
            "drtg": 113.4,
            "ptsPg": 116.8,
            "oppPtsPg": 122.3,
            "tovPg": 17,
            "drebPg": 37.8
          },
          "rank": {
            "ortg": 14,
            "drtg": 20,
            "ptsPg": 11,
            "oppPtsPg": 25,
            "tovPg": 23,
            "drebPg": 1
          }
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 4,
          "values": {
            "ortg": 115.3,
            "drtg": 100,
            "ptsPg": 122,
            "oppPtsPg": 105,
            "tovPg": 16.5,
            "drebPg": 37.8
          },
          "rank": {
            "ortg": 5,
            "drtg": 3,
            "ptsPg": 4,
            "oppPtsPg": 3,
            "tovPg": 20,
            "drebPg": 2
          }
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 3,
          "values": {
            "ortg": 114.6,
            "drtg": 119.1,
            "ptsPg": 124.7,
            "oppPtsPg": 128,
            "tovPg": 15.7,
            "drebPg": 33
          },
          "rank": {
            "ortg": 8,
            "drtg": 27,
            "ptsPg": 3,
            "oppPtsPg": 29,
            "tovPg": 16,
            "drebPg": 13
          }
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 4,
          "values": {
            "ortg": 103,
            "drtg": 105.9,
            "ptsPg": 104,
            "oppPtsPg": 105.3,
            "tovPg": 15.5,
            "drebPg": 33.5
          },
          "rank": {
            "ortg": 27,
            "drtg": 6,
            "ptsPg": 30,
            "oppPtsPg": 4,
            "tovPg": 15,
            "drebPg": 8
          }
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 4,
          "values": {
            "ortg": 109.3,
            "drtg": 98.9,
            "ptsPg": 111.3,
            "oppPtsPg": 100.8,
            "tovPg": 13.8,
            "drebPg": 33.5
          },
          "rank": {
            "ortg": 19,
            "drtg": 2,
            "ptsPg": 22,
            "oppPtsPg": 1,
            "tovPg": 5,
            "drebPg": 9
          }
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 3,
          "values": {
            "ortg": 104.2,
            "drtg": 109.5,
            "ptsPg": 109.7,
            "oppPtsPg": 116.3,
            "tovPg": 17,
            "drebPg": 34.7
          },
          "rank": {
            "ortg": 25,
            "drtg": 15,
            "ptsPg": 25,
            "oppPtsPg": 18,
            "tovPg": 24,
            "drebPg": 6
          }
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 4,
          "values": {
            "ortg": 102.1,
            "drtg": 101.5,
            "ptsPg": 110,
            "oppPtsPg": 107,
            "tovPg": 11.8,
            "drebPg": 32.8
          },
          "rank": {
            "ortg": 29,
            "drtg": 4,
            "ptsPg": 24,
            "oppPtsPg": 7,
            "tovPg": 1,
            "drebPg": 15
          }
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 3,
          "values": {
            "ortg": 110.1,
            "drtg": 120.5,
            "ptsPg": 109.3,
            "oppPtsPg": 123.7,
            "tovPg": 14,
            "drebPg": 27.7
          },
          "rank": {
            "ortg": 15,
            "drtg": 28,
            "ptsPg": 26,
            "oppPtsPg": 26,
            "tovPg": 6,
            "drebPg": 29
          }
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 3,
          "values": {
            "ortg": 124.7,
            "drtg": 108.3,
            "ptsPg": 129.3,
            "oppPtsPg": 110.7,
            "tovPg": 13.3,
            "drebPg": 34.3
          },
          "rank": {
            "ortg": 2,
            "drtg": 13,
            "ptsPg": 1,
            "oppPtsPg": 10,
            "tovPg": 2,
            "drebPg": 7
          }
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 4,
          "values": {
            "ortg": 104.6,
            "drtg": 122.4,
            "ptsPg": 107.8,
            "oppPtsPg": 125.5,
            "tovPg": 14.3,
            "drebPg": 29
          },
          "rank": {
            "ortg": 24,
            "drtg": 30,
            "ptsPg": 28,
            "oppPtsPg": 28,
            "tovPg": 9,
            "drebPg": 26
          }
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 4,
          "values": {
            "ortg": 111.4,
            "drtg": 109,
            "ptsPg": 116.5,
            "oppPtsPg": 109.8,
            "tovPg": 13.3,
            "drebPg": 32.8
          },
          "rank": {
            "ortg": 12,
            "drtg": 14,
            "ptsPg": 13,
            "oppPtsPg": 9,
            "tovPg": 3,
            "drebPg": 16
          }
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 3,
          "values": {
            "ortg": 106,
            "drtg": 96.6,
            "ptsPg": 113.7,
            "oppPtsPg": 103.7,
            "tovPg": 14,
            "drebPg": 29.7
          },
          "rank": {
            "ortg": 23,
            "drtg": 1,
            "ptsPg": 16,
            "oppPtsPg": 2,
            "tovPg": 7,
            "drebPg": 25
          }
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 4,
          "values": {
            "ortg": 109.8,
            "drtg": 117.3,
            "ptsPg": 112.8,
            "oppPtsPg": 121,
            "tovPg": 16.5,
            "drebPg": 32
          },
          "rank": {
            "ortg": 18,
            "drtg": 26,
            "ptsPg": 20,
            "oppPtsPg": 22,
            "tovPg": 21,
            "drebPg": 19
          }
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 4,
          "values": {
            "ortg": 110,
            "drtg": 110.1,
            "ptsPg": 114.3,
            "oppPtsPg": 114.5,
            "tovPg": 14.5,
            "drebPg": 33.5
          },
          "rank": {
            "ortg": 17,
            "drtg": 17,
            "ptsPg": 15,
            "oppPtsPg": 15,
            "tovPg": 10,
            "drebPg": 10
          }
        }
      ],
      "isolated": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 110.9,
            "drtg": 113.1,
            "ptsPg": 125,
            "oppPtsPg": 124,
            "tovPg": 14,
            "drebPg": 36
          },
          "rank": {
            "ortg": 6,
            "drtg": 5,
            "ptsPg": 4,
            "oppPtsPg": 4,
            "tovPg": 3,
            "drebPg": 2
          }
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 113.1,
            "drtg": 110.9,
            "ptsPg": 124,
            "oppPtsPg": 125,
            "tovPg": 15,
            "drebPg": 36
          },
          "rank": {
            "ortg": 4,
            "drtg": 3,
            "ptsPg": 5,
            "oppPtsPg": 5,
            "tovPg": 6,
            "drebPg": 3
          }
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 100.5,
            "drtg": 111.8,
            "ptsPg": 97,
            "oppPtsPg": 111,
            "tovPg": 14,
            "drebPg": 30
          },
          "rank": {
            "ortg": 8,
            "drtg": 4,
            "ptsPg": 8,
            "oppPtsPg": 3,
            "tovPg": 4,
            "drebPg": 5
          }
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 126.2,
            "drtg": 132,
            "ptsPg": 129,
            "oppPtsPg": 136,
            "tovPg": 15,
            "drebPg": 25
          },
          "rank": {
            "ortg": 3,
            "drtg": 8,
            "ptsPg": 3,
            "oppPtsPg": 8,
            "tovPg": 7,
            "drebPg": 7
          }
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 111.8,
            "drtg": 100.5,
            "ptsPg": 111,
            "oppPtsPg": 97,
            "tovPg": 18,
            "drebPg": 30
          },
          "rank": {
            "ortg": 5,
            "drtg": 1,
            "ptsPg": 6,
            "oppPtsPg": 1,
            "tovPg": 8,
            "drebPg": 6
          }
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 132,
            "drtg": 126.2,
            "ptsPg": 136,
            "oppPtsPg": 129,
            "tovPg": 14,
            "drebPg": 31
          },
          "rank": {
            "ortg": 1,
            "drtg": 6,
            "ptsPg": 1,
            "oppPtsPg": 6,
            "tovPg": 5,
            "drebPg": 4
          }
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 104.3,
            "drtg": 127,
            "ptsPg": 103,
            "oppPtsPg": 130,
            "tovPg": 13,
            "drebPg": 25
          },
          "rank": {
            "ortg": 7,
            "drtg": 7,
            "ptsPg": 7,
            "oppPtsPg": 7,
            "tovPg": 1,
            "drebPg": 8
          }
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 127,
            "drtg": 104.3,
            "ptsPg": 130,
            "oppPtsPg": 103,
            "tovPg": 13,
            "drebPg": 37
          },
          "rank": {
            "ortg": 2,
            "drtg": 2,
            "ptsPg": 2,
            "oppPtsPg": 2,
            "tovPg": 2,
            "drebPg": 1
          }
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        }
      ]
    },
    {
      "matchupPeriodId": 9,
      "label": "Woche 9",
      "throughDate": "2026-10-28",
      "cumulative": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 5,
          "values": {
            "ortg": 112.7,
            "drtg": 110,
            "ptsPg": 120.2,
            "oppPtsPg": 115.2,
            "tovPg": 14,
            "drebPg": 29
          },
          "rank": {
            "ortg": 8,
            "drtg": 17,
            "ptsPg": 5,
            "oppPtsPg": 18,
            "tovPg": 6,
            "drebPg": 26
          }
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 4,
          "values": {
            "ortg": 114.9,
            "drtg": 108.1,
            "ptsPg": 119.8,
            "oppPtsPg": 111.8,
            "tovPg": 15.5,
            "drebPg": 31.3
          },
          "rank": {
            "ortg": 5,
            "drtg": 10,
            "ptsPg": 6,
            "oppPtsPg": 13,
            "tovPg": 14,
            "drebPg": 22
          }
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 4,
          "values": {
            "ortg": 106.6,
            "drtg": 114.9,
            "ptsPg": 114.3,
            "oppPtsPg": 124,
            "tovPg": 17.5,
            "drebPg": 30.8
          },
          "rank": {
            "ortg": 23,
            "drtg": 23,
            "ptsPg": 14,
            "oppPtsPg": 27,
            "tovPg": 26,
            "drebPg": 24
          }
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 5,
          "values": {
            "ortg": 101.7,
            "drtg": 109.3,
            "ptsPg": 101,
            "oppPtsPg": 108.2,
            "tovPg": 19,
            "drebPg": 32.8
          },
          "rank": {
            "ortg": 30,
            "drtg": 14,
            "ptsPg": 30,
            "oppPtsPg": 8,
            "tovPg": 29,
            "drebPg": 16
          }
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 5,
          "values": {
            "ortg": 103.8,
            "drtg": 117.8,
            "ptsPg": 114,
            "oppPtsPg": 130.2,
            "tovPg": 17.8,
            "drebPg": 31.8
          },
          "rank": {
            "ortg": 26,
            "drtg": 28,
            "ptsPg": 15,
            "oppPtsPg": 30,
            "tovPg": 27,
            "drebPg": 20
          }
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 4,
          "values": {
            "ortg": 111.4,
            "drtg": 109.6,
            "ptsPg": 119.8,
            "oppPtsPg": 117.8,
            "tovPg": 17.3,
            "drebPg": 35.3
          },
          "rank": {
            "ortg": 10,
            "drtg": 15,
            "ptsPg": 7,
            "oppPtsPg": 20,
            "tovPg": 25,
            "drebPg": 4
          }
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 112.5,
            "drtg": 109.1,
            "ptsPg": 114,
            "oppPtsPg": 112,
            "tovPg": 15.6,
            "drebPg": 33.2
          },
          "rank": {
            "ortg": 9,
            "drtg": 13,
            "ptsPg": 16,
            "oppPtsPg": 14,
            "tovPg": 16,
            "drebPg": 12
          }
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 4,
          "values": {
            "ortg": 109.8,
            "drtg": 110.1,
            "ptsPg": 110.8,
            "oppPtsPg": 114,
            "tovPg": 15.3,
            "drebPg": 32.5
          },
          "rank": {
            "ortg": 15,
            "drtg": 18,
            "ptsPg": 21,
            "oppPtsPg": 16,
            "tovPg": 13,
            "drebPg": 17
          }
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 5,
          "values": {
            "ortg": 111.3,
            "drtg": 103.1,
            "ptsPg": 109.8,
            "oppPtsPg": 103.4,
            "tovPg": 15.6,
            "drebPg": 34.2
          },
          "rank": {
            "ortg": 11,
            "drtg": 4,
            "ptsPg": 23,
            "oppPtsPg": 2,
            "tovPg": 17,
            "drebPg": 6
          }
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 5,
          "values": {
            "ortg": 115.2,
            "drtg": 117,
            "ptsPg": 117.6,
            "oppPtsPg": 119.4,
            "tovPg": 16.8,
            "drebPg": 28.2
          },
          "rank": {
            "ortg": 4,
            "drtg": 27,
            "ptsPg": 8,
            "oppPtsPg": 21,
            "tovPg": 22,
            "drebPg": 29
          }
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 122.7,
            "drtg": 104.8,
            "ptsPg": 123,
            "oppPtsPg": 108.8,
            "tovPg": 15.8,
            "drebPg": 33.4
          },
          "rank": {
            "ortg": 2,
            "drtg": 6,
            "ptsPg": 3,
            "oppPtsPg": 9,
            "tovPg": 18,
            "drebPg": 9
          }
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 5,
          "values": {
            "ortg": 109.5,
            "drtg": 111.1,
            "ptsPg": 115,
            "oppPtsPg": 114.8,
            "tovPg": 14.8,
            "drebPg": 33.4
          },
          "rank": {
            "ortg": 16,
            "drtg": 19,
            "ptsPg": 13,
            "oppPtsPg": 17,
            "tovPg": 11,
            "drebPg": 10
          }
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 4,
          "values": {
            "ortg": 103.1,
            "drtg": 106.8,
            "ptsPg": 106.5,
            "oppPtsPg": 108,
            "tovPg": 23,
            "drebPg": 30.3
          },
          "rank": {
            "ortg": 28,
            "drtg": 8,
            "ptsPg": 29,
            "oppPtsPg": 7,
            "tovPg": 30,
            "drebPg": 25
          }
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 5,
          "values": {
            "ortg": 121.9,
            "drtg": 109.9,
            "ptsPg": 123.2,
            "oppPtsPg": 113.6,
            "tovPg": 16.6,
            "drebPg": 28.8
          },
          "rank": {
            "ortg": 3,
            "drtg": 16,
            "ptsPg": 2,
            "oppPtsPg": 15,
            "tovPg": 21,
            "drebPg": 28
          }
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 4,
          "values": {
            "ortg": 114.6,
            "drtg": 106.2,
            "ptsPg": 116.8,
            "oppPtsPg": 107,
            "tovPg": 15.5,
            "drebPg": 35.5
          },
          "rank": {
            "ortg": 6,
            "drtg": 7,
            "ptsPg": 10,
            "oppPtsPg": 4,
            "tovPg": 15,
            "drebPg": 2
          }
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 5,
          "values": {
            "ortg": 106.2,
            "drtg": 114.2,
            "ptsPg": 113,
            "oppPtsPg": 120.8,
            "tovPg": 14.2,
            "drebPg": 32.4
          },
          "rank": {
            "ortg": 24,
            "drtg": 22,
            "ptsPg": 19,
            "oppPtsPg": 24,
            "tovPg": 9,
            "drebPg": 18
          }
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 5,
          "values": {
            "ortg": 108.2,
            "drtg": 116.6,
            "ptsPg": 113.4,
            "oppPtsPg": 124.2,
            "tovPg": 16.8,
            "drebPg": 35.4
          },
          "rank": {
            "ortg": 20,
            "drtg": 26,
            "ptsPg": 18,
            "oppPtsPg": 28,
            "tovPg": 23,
            "drebPg": 3
          }
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 113,
            "drtg": 101.8,
            "ptsPg": 120.4,
            "oppPtsPg": 107.8,
            "tovPg": 16.2,
            "drebPg": 37.2
          },
          "rank": {
            "ortg": 7,
            "drtg": 2,
            "ptsPg": 4,
            "oppPtsPg": 6,
            "tovPg": 19,
            "drebPg": 1
          }
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 4,
          "values": {
            "ortg": 108.4,
            "drtg": 115.4,
            "ptsPg": 116.3,
            "oppPtsPg": 122,
            "tovPg": 16.5,
            "drebPg": 33
          },
          "rank": {
            "ortg": 18,
            "drtg": 24,
            "ptsPg": 12,
            "oppPtsPg": 25,
            "tovPg": 20,
            "drebPg": 14
          }
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 5,
          "values": {
            "ortg": 106.9,
            "drtg": 108.3,
            "ptsPg": 109.8,
            "oppPtsPg": 109.6,
            "tovPg": 14.8,
            "drebPg": 33.6
          },
          "rank": {
            "ortg": 22,
            "drtg": 11,
            "ptsPg": 24,
            "oppPtsPg": 10,
            "tovPg": 12,
            "drebPg": 8
          }
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 107.1,
            "drtg": 103.6,
            "ptsPg": 108.2,
            "oppPtsPg": 104.6,
            "tovPg": 13.6,
            "drebPg": 33
          },
          "rank": {
            "ortg": 21,
            "drtg": 5,
            "ptsPg": 26,
            "oppPtsPg": 3,
            "tovPg": 4,
            "drebPg": 15
          }
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 4,
          "values": {
            "ortg": 102,
            "drtg": 112.1,
            "ptsPg": 107,
            "oppPtsPg": 119.5,
            "tovPg": 17.8,
            "drebPg": 32.3
          },
          "rank": {
            "ortg": 29,
            "drtg": 20,
            "ptsPg": 28,
            "oppPtsPg": 22,
            "tovPg": 28,
            "drebPg": 19
          }
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 5,
          "values": {
            "ortg": 103.6,
            "drtg": 102.1,
            "ptsPg": 110.8,
            "oppPtsPg": 107.4,
            "tovPg": 12.6,
            "drebPg": 33.2
          },
          "rank": {
            "ortg": 27,
            "drtg": 3,
            "ptsPg": 22,
            "oppPtsPg": 5,
            "tovPg": 1,
            "drebPg": 13
          }
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 3,
          "values": {
            "ortg": 110.1,
            "drtg": 120.5,
            "ptsPg": 109.3,
            "oppPtsPg": 123.7,
            "tovPg": 14,
            "drebPg": 27.7
          },
          "rank": {
            "ortg": 14,
            "drtg": 29,
            "ptsPg": 25,
            "oppPtsPg": 26,
            "tovPg": 7,
            "drebPg": 30
          }
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 3,
          "values": {
            "ortg": 124.7,
            "drtg": 108.3,
            "ptsPg": 129.3,
            "oppPtsPg": 110.7,
            "tovPg": 13.3,
            "drebPg": 34.3
          },
          "rank": {
            "ortg": 1,
            "drtg": 12,
            "ptsPg": 1,
            "oppPtsPg": 12,
            "tovPg": 3,
            "drebPg": 5
          }
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 4,
          "values": {
            "ortg": 104.6,
            "drtg": 122.4,
            "ptsPg": 107.8,
            "oppPtsPg": 125.5,
            "tovPg": 14.3,
            "drebPg": 29
          },
          "rank": {
            "ortg": 25,
            "drtg": 30,
            "ptsPg": 27,
            "oppPtsPg": 29,
            "tovPg": 10,
            "drebPg": 27
          }
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 111.1,
            "drtg": 107.8,
            "ptsPg": 116.6,
            "oppPtsPg": 110,
            "tovPg": 12.8,
            "drebPg": 33.4
          },
          "rank": {
            "ortg": 13,
            "drtg": 9,
            "ptsPg": 11,
            "oppPtsPg": 11,
            "tovPg": 2,
            "drebPg": 11
          }
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 4,
          "values": {
            "ortg": 109.5,
            "drtg": 96.3,
            "ptsPg": 117.5,
            "oppPtsPg": 102.5,
            "tovPg": 14,
            "drebPg": 31.5
          },
          "rank": {
            "ortg": 17,
            "drtg": 1,
            "ptsPg": 9,
            "oppPtsPg": 1,
            "tovPg": 8,
            "drebPg": 21
          }
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 108.4,
            "drtg": 115.8,
            "ptsPg": 112.4,
            "oppPtsPg": 120.2,
            "tovPg": 17,
            "drebPg": 33.8
          },
          "rank": {
            "ortg": 19,
            "drtg": 25,
            "ptsPg": 20,
            "oppPtsPg": 23,
            "tovPg": 24,
            "drebPg": 7
          }
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 5,
          "values": {
            "ortg": 111.2,
            "drtg": 112.5,
            "ptsPg": 113.6,
            "oppPtsPg": 115.8,
            "tovPg": 13.6,
            "drebPg": 31.2
          },
          "rank": {
            "ortg": 12,
            "drtg": 21,
            "ptsPg": 17,
            "oppPtsPg": 19,
            "tovPg": 5,
            "drebPg": 23
          }
        }
      ],
      "isolated": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 108.2,
            "drtg": 119.3,
            "ptsPg": 117,
            "oppPtsPg": 129,
            "tovPg": 15,
            "drebPg": 31
          },
          "rank": {
            "ortg": 12,
            "drtg": 19,
            "ptsPg": 9,
            "oppPtsPg": 21,
            "tovPg": 12,
            "drebPg": 16
          }
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 95.3,
            "drtg": 106.8,
            "ptsPg": 89,
            "oppPtsPg": 97,
            "tovPg": 23,
            "drebPg": 36
          },
          "rank": {
            "ortg": 22,
            "drtg": 11,
            "ptsPg": 23,
            "oppPtsPg": 5,
            "tovPg": 23,
            "drebPg": 6
          }
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 117.4,
            "drtg": 121.1,
            "ptsPg": 127,
            "oppPtsPg": 133,
            "tovPg": 12,
            "drebPg": 31
          },
          "rank": {
            "ortg": 7,
            "drtg": 21,
            "ptsPg": 5,
            "oppPtsPg": 24,
            "tovPg": 4,
            "drebPg": 17
          }
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 122.6,
            "drtg": 116.3,
            "ptsPg": 121,
            "oppPtsPg": 111,
            "tovPg": 13,
            "drebPg": 32
          },
          "rank": {
            "ortg": 3,
            "drtg": 17,
            "ptsPg": 6,
            "oppPtsPg": 11,
            "tovPg": 6,
            "drebPg": 15
          }
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 123,
            "drtg": 97.8,
            "ptsPg": 120,
            "oppPtsPg": 96,
            "tovPg": 9,
            "drebPg": 34
          },
          "rank": {
            "ortg": 2,
            "drtg": 5,
            "ptsPg": 7,
            "oppPtsPg": 4,
            "tovPg": 1,
            "drebPg": 11
          }
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 103.6,
            "drtg": 88.6,
            "ptsPg": 104,
            "oppPtsPg": 91,
            "tovPg": 17,
            "drebPg": 37
          },
          "rank": {
            "ortg": 17,
            "drtg": 1,
            "ptsPg": 16,
            "oppPtsPg": 3,
            "tovPg": 17,
            "drebPg": 4
          }
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 106.8,
            "drtg": 95.3,
            "ptsPg": 97,
            "oppPtsPg": 89,
            "tovPg": 13,
            "drebPg": 26
          },
          "rank": {
            "ortg": 14,
            "drtg": 3,
            "ptsPg": 20,
            "oppPtsPg": 2,
            "tovPg": 7,
            "drebPg": 21
          }
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 108.9,
            "drtg": 103.7,
            "ptsPg": 119,
            "oppPtsPg": 114,
            "tovPg": 17,
            "drebPg": 40
          },
          "rank": {
            "ortg": 11,
            "drtg": 9,
            "ptsPg": 8,
            "oppPtsPg": 13,
            "tovPg": 18,
            "drebPg": 2
          }
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 130.1,
            "drtg": 98.1,
            "ptsPg": 132,
            "oppPtsPg": 100,
            "tovPg": 14,
            "drebPg": 36
          },
          "rank": {
            "ortg": 1,
            "drtg": 6,
            "ptsPg": 2,
            "oppPtsPg": 7,
            "tovPg": 9,
            "drebPg": 7
          }
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 104.4,
            "drtg": 110.1,
            "ptsPg": 109,
            "oppPtsPg": 114,
            "tovPg": 15,
            "drebPg": 34
          },
          "rank": {
            "ortg": 15,
            "drtg": 15,
            "ptsPg": 15,
            "oppPtsPg": 14,
            "tovPg": 13,
            "drebPg": 12
          }
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 88.9,
            "drtg": 107.8,
            "ptsPg": 87,
            "oppPtsPg": 103,
            "tovPg": 24,
            "drebPg": 29
          },
          "rank": {
            "ortg": 23,
            "drtg": 12,
            "ptsPg": 24,
            "oppPtsPg": 8,
            "tovPg": 24,
            "drebPg": 20
          }
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 107.8,
            "drtg": 88.9,
            "ptsPg": 103,
            "oppPtsPg": 87,
            "tovPg": 19,
            "drebPg": 31
          },
          "rank": {
            "ortg": 13,
            "drtg": 2,
            "ptsPg": 17,
            "oppPtsPg": 1,
            "tovPg": 19,
            "drebPg": 18
          }
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 119.3,
            "drtg": 108.2,
            "ptsPg": 129,
            "oppPtsPg": 117,
            "tovPg": 14,
            "drebPg": 40
          },
          "rank": {
            "ortg": 6,
            "drtg": 13,
            "ptsPg": 3,
            "oppPtsPg": 15,
            "tovPg": 10,
            "drebPg": 3
          }
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 98.1,
            "drtg": 130.1,
            "ptsPg": 100,
            "oppPtsPg": 132,
            "tovPg": 16,
            "drebPg": 26
          },
          "rank": {
            "ortg": 19,
            "drtg": 24,
            "ptsPg": 18,
            "oppPtsPg": 23,
            "tovPg": 15,
            "drebPg": 22
          }
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 103.7,
            "drtg": 108.9,
            "ptsPg": 114,
            "oppPtsPg": 119,
            "tovPg": 15,
            "drebPg": 35
          },
          "rank": {
            "ortg": 16,
            "drtg": 14,
            "ptsPg": 11,
            "oppPtsPg": 17,
            "tovPg": 14,
            "drebPg": 9
          }
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 88.6,
            "drtg": 103.6,
            "ptsPg": 91,
            "oppPtsPg": 104,
            "tovPg": 19,
            "drebPg": 33
          },
          "rank": {
            "ortg": 24,
            "drtg": 8,
            "ptsPg": 22,
            "oppPtsPg": 9,
            "tovPg": 20,
            "drebPg": 14
          }
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 121.1,
            "drtg": 117.4,
            "ptsPg": 133,
            "oppPtsPg": 127,
            "tovPg": 12,
            "drebPg": 34
          },
          "rank": {
            "ortg": 4,
            "drtg": 18,
            "ptsPg": 1,
            "oppPtsPg": 20,
            "tovPg": 5,
            "drebPg": 13
          }
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 97.8,
            "drtg": 123,
            "ptsPg": 96,
            "oppPtsPg": 120,
            "tovPg": 13,
            "drebPg": 31
          },
          "rank": {
            "ortg": 20,
            "drtg": 23,
            "ptsPg": 21,
            "oppPtsPg": 18,
            "tovPg": 8,
            "drebPg": 19
          }
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 95.4,
            "drtg": 119.8,
            "ptsPg": 99,
            "oppPtsPg": 129,
            "tovPg": 20,
            "drebPg": 25
          },
          "rank": {
            "ortg": 21,
            "drtg": 20,
            "ptsPg": 19,
            "oppPtsPg": 22,
            "tovPg": 22,
            "drebPg": 23
          }
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 110.1,
            "drtg": 104.4,
            "ptsPg": 114,
            "oppPtsPg": 109,
            "tovPg": 16,
            "drebPg": 35
          },
          "rank": {
            "ortg": 9,
            "drtg": 10,
            "ptsPg": 12,
            "oppPtsPg": 10,
            "tovPg": 16,
            "drebPg": 10
          }
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 110.1,
            "drtg": 103.4,
            "ptsPg": 117,
            "oppPtsPg": 111,
            "tovPg": 11,
            "drebPg": 36
          },
          "rank": {
            "ortg": 10,
            "drtg": 7,
            "ptsPg": 10,
            "oppPtsPg": 12,
            "tovPg": 3,
            "drebPg": 8
          }
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 119.8,
            "drtg": 95.4,
            "ptsPg": 129,
            "oppPtsPg": 99,
            "tovPg": 14,
            "drebPg": 37
          },
          "rank": {
            "ortg": 5,
            "drtg": 4,
            "ptsPg": 4,
            "oppPtsPg": 6,
            "tovPg": 11,
            "drebPg": 5
          }
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 103.4,
            "drtg": 110.1,
            "ptsPg": 111,
            "oppPtsPg": 117,
            "tovPg": 19,
            "drebPg": 41
          },
          "rank": {
            "ortg": 18,
            "drtg": 16,
            "ptsPg": 13,
            "oppPtsPg": 16,
            "tovPg": 21,
            "drebPg": 1
          }
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 116.3,
            "drtg": 122.6,
            "ptsPg": 111,
            "oppPtsPg": 121,
            "tovPg": 10,
            "drebPg": 22
          },
          "rank": {
            "ortg": 8,
            "drtg": 22,
            "ptsPg": 14,
            "oppPtsPg": 19,
            "tovPg": 2,
            "drebPg": 24
          }
        }
      ]
    },
    {
      "matchupPeriodId": 10,
      "label": "Woche 10",
      "throughDate": "2026-10-29",
      "cumulative": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 6,
          "values": {
            "ortg": 113.1,
            "drtg": 110.2,
            "ptsPg": 119.2,
            "oppPtsPg": 114.5,
            "tovPg": 13.5,
            "drebPg": 30.5
          },
          "rank": {
            "ortg": 7,
            "drtg": 16,
            "ptsPg": 7,
            "oppPtsPg": 17,
            "tovPg": 3,
            "drebPg": 25
          }
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 4,
          "values": {
            "ortg": 114.9,
            "drtg": 108.1,
            "ptsPg": 119.8,
            "oppPtsPg": 111.8,
            "tovPg": 15.5,
            "drebPg": 31.3
          },
          "rank": {
            "ortg": 6,
            "drtg": 10,
            "ptsPg": 5,
            "oppPtsPg": 12,
            "tovPg": 14,
            "drebPg": 22
          }
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 4,
          "values": {
            "ortg": 106.6,
            "drtg": 114.9,
            "ptsPg": 114.3,
            "oppPtsPg": 124,
            "tovPg": 17.5,
            "drebPg": 30.8
          },
          "rank": {
            "ortg": 23,
            "drtg": 24,
            "ptsPg": 14,
            "oppPtsPg": 27,
            "tovPg": 26,
            "drebPg": 24
          }
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 5,
          "values": {
            "ortg": 101.7,
            "drtg": 109.3,
            "ptsPg": 101,
            "oppPtsPg": 108.2,
            "tovPg": 19,
            "drebPg": 32.8
          },
          "rank": {
            "ortg": 30,
            "drtg": 13,
            "ptsPg": 30,
            "oppPtsPg": 8,
            "tovPg": 29,
            "drebPg": 16
          }
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 5,
          "values": {
            "ortg": 103.8,
            "drtg": 117.8,
            "ptsPg": 114,
            "oppPtsPg": 130.2,
            "tovPg": 17.8,
            "drebPg": 31.8
          },
          "rank": {
            "ortg": 26,
            "drtg": 28,
            "ptsPg": 15,
            "oppPtsPg": 30,
            "tovPg": 27,
            "drebPg": 20
          }
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 5,
          "values": {
            "ortg": 111.4,
            "drtg": 110.7,
            "ptsPg": 118,
            "oppPtsPg": 117,
            "tovPg": 15.6,
            "drebPg": 35.4
          },
          "rank": {
            "ortg": 10,
            "drtg": 17,
            "ptsPg": 9,
            "oppPtsPg": 20,
            "tovPg": 15,
            "drebPg": 3
          }
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 112.5,
            "drtg": 109.1,
            "ptsPg": 114,
            "oppPtsPg": 112,
            "tovPg": 15.6,
            "drebPg": 33.2
          },
          "rank": {
            "ortg": 9,
            "drtg": 12,
            "ptsPg": 16,
            "oppPtsPg": 13,
            "tovPg": 16,
            "drebPg": 12
          }
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 4,
          "values": {
            "ortg": 109.8,
            "drtg": 110.1,
            "ptsPg": 110.8,
            "oppPtsPg": 114,
            "tovPg": 15.3,
            "drebPg": 32.5
          },
          "rank": {
            "ortg": 16,
            "drtg": 15,
            "ptsPg": 21,
            "oppPtsPg": 15,
            "tovPg": 13,
            "drebPg": 17
          }
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 5,
          "values": {
            "ortg": 111.3,
            "drtg": 103.1,
            "ptsPg": 109.8,
            "oppPtsPg": 103.4,
            "tovPg": 15.6,
            "drebPg": 34.2
          },
          "rank": {
            "ortg": 11,
            "drtg": 4,
            "ptsPg": 24,
            "oppPtsPg": 2,
            "tovPg": 17,
            "drebPg": 5
          }
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 5,
          "values": {
            "ortg": 115.2,
            "drtg": 117,
            "ptsPg": 117.6,
            "oppPtsPg": 119.4,
            "tovPg": 16.8,
            "drebPg": 28.2
          },
          "rank": {
            "ortg": 5,
            "drtg": 27,
            "ptsPg": 10,
            "oppPtsPg": 21,
            "tovPg": 22,
            "drebPg": 29
          }
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 122.7,
            "drtg": 104.8,
            "ptsPg": 123,
            "oppPtsPg": 108.8,
            "tovPg": 15.8,
            "drebPg": 33.4
          },
          "rank": {
            "ortg": 1,
            "drtg": 7,
            "ptsPg": 2,
            "oppPtsPg": 9,
            "tovPg": 18,
            "drebPg": 9
          }
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 5,
          "values": {
            "ortg": 109.5,
            "drtg": 111.1,
            "ptsPg": 115,
            "oppPtsPg": 114.8,
            "tovPg": 14.8,
            "drebPg": 33.4
          },
          "rank": {
            "ortg": 17,
            "drtg": 18,
            "ptsPg": 13,
            "oppPtsPg": 18,
            "tovPg": 11,
            "drebPg": 10
          }
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 4,
          "values": {
            "ortg": 103.1,
            "drtg": 106.8,
            "ptsPg": 106.5,
            "oppPtsPg": 108,
            "tovPg": 23,
            "drebPg": 30.3
          },
          "rank": {
            "ortg": 28,
            "drtg": 8,
            "ptsPg": 29,
            "oppPtsPg": 7,
            "tovPg": 30,
            "drebPg": 26
          }
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 5,
          "values": {
            "ortg": 121.9,
            "drtg": 109.9,
            "ptsPg": 123.2,
            "oppPtsPg": 113.6,
            "tovPg": 16.6,
            "drebPg": 28.8
          },
          "rank": {
            "ortg": 2,
            "drtg": 14,
            "ptsPg": 1,
            "oppPtsPg": 14,
            "tovPg": 21,
            "drebPg": 28
          }
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 115.9,
            "drtg": 104.4,
            "ptsPg": 118.2,
            "oppPtsPg": 106.2,
            "tovPg": 14.4,
            "drebPg": 36.2
          },
          "rank": {
            "ortg": 4,
            "drtg": 6,
            "ptsPg": 8,
            "oppPtsPg": 4,
            "tovPg": 10,
            "drebPg": 2
          }
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 5,
          "values": {
            "ortg": 106.2,
            "drtg": 114.2,
            "ptsPg": 113,
            "oppPtsPg": 120.8,
            "tovPg": 14.2,
            "drebPg": 32.4
          },
          "rank": {
            "ortg": 24,
            "drtg": 23,
            "ptsPg": 19,
            "oppPtsPg": 24,
            "tovPg": 9,
            "drebPg": 18
          }
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 5,
          "values": {
            "ortg": 108.2,
            "drtg": 116.6,
            "ptsPg": 113.4,
            "oppPtsPg": 124.2,
            "tovPg": 16.8,
            "drebPg": 35.4
          },
          "rank": {
            "ortg": 20,
            "drtg": 26,
            "ptsPg": 18,
            "oppPtsPg": 28,
            "tovPg": 23,
            "drebPg": 4
          }
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 113,
            "drtg": 101.8,
            "ptsPg": 120.4,
            "oppPtsPg": 107.8,
            "tovPg": 16.2,
            "drebPg": 37.2
          },
          "rank": {
            "ortg": 8,
            "drtg": 2,
            "ptsPg": 4,
            "oppPtsPg": 6,
            "tovPg": 19,
            "drebPg": 1
          }
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 109.9,
            "drtg": 113.1,
            "ptsPg": 119.4,
            "oppPtsPg": 121.6,
            "tovPg": 17.2,
            "drebPg": 33
          },
          "rank": {
            "ortg": 15,
            "drtg": 22,
            "ptsPg": 6,
            "oppPtsPg": 25,
            "tovPg": 25,
            "drebPg": 14
          }
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 5,
          "values": {
            "ortg": 106.9,
            "drtg": 108.3,
            "ptsPg": 109.8,
            "oppPtsPg": 109.6,
            "tovPg": 14.8,
            "drebPg": 33.6
          },
          "rank": {
            "ortg": 22,
            "drtg": 11,
            "ptsPg": 25,
            "oppPtsPg": 10,
            "tovPg": 12,
            "drebPg": 8
          }
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 107.1,
            "drtg": 103.6,
            "ptsPg": 108.2,
            "oppPtsPg": 104.6,
            "tovPg": 13.6,
            "drebPg": 33
          },
          "rank": {
            "ortg": 21,
            "drtg": 5,
            "ptsPg": 27,
            "oppPtsPg": 3,
            "tovPg": 4,
            "drebPg": 15
          }
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 4,
          "values": {
            "ortg": 102,
            "drtg": 112.1,
            "ptsPg": 107,
            "oppPtsPg": 119.5,
            "tovPg": 17.8,
            "drebPg": 32.3
          },
          "rank": {
            "ortg": 29,
            "drtg": 20,
            "ptsPg": 28,
            "oppPtsPg": 22,
            "tovPg": 28,
            "drebPg": 19
          }
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 5,
          "values": {
            "ortg": 103.6,
            "drtg": 102.1,
            "ptsPg": 110.8,
            "oppPtsPg": 107.4,
            "tovPg": 12.6,
            "drebPg": 33.2
          },
          "rank": {
            "ortg": 27,
            "drtg": 3,
            "ptsPg": 22,
            "oppPtsPg": 5,
            "tovPg": 1,
            "drebPg": 13
          }
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 3,
          "values": {
            "ortg": 110.1,
            "drtg": 120.5,
            "ptsPg": 109.3,
            "oppPtsPg": 123.7,
            "tovPg": 14,
            "drebPg": 27.7
          },
          "rank": {
            "ortg": 14,
            "drtg": 29,
            "ptsPg": 26,
            "oppPtsPg": 26,
            "tovPg": 6,
            "drebPg": 30
          }
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 4,
          "values": {
            "ortg": 117.9,
            "drtg": 111.5,
            "ptsPg": 122.8,
            "oppPtsPg": 114,
            "tovPg": 14,
            "drebPg": 33.8
          },
          "rank": {
            "ortg": 3,
            "drtg": 19,
            "ptsPg": 3,
            "oppPtsPg": 16,
            "tovPg": 7,
            "drebPg": 6
          }
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 5,
          "values": {
            "ortg": 104.6,
            "drtg": 121,
            "ptsPg": 110.2,
            "oppPtsPg": 126.8,
            "tovPg": 16.4,
            "drebPg": 29.8
          },
          "rank": {
            "ortg": 25,
            "drtg": 30,
            "ptsPg": 23,
            "oppPtsPg": 29,
            "tovPg": 20,
            "drebPg": 27
          }
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 111.1,
            "drtg": 107.8,
            "ptsPg": 116.6,
            "oppPtsPg": 110,
            "tovPg": 12.8,
            "drebPg": 33.4
          },
          "rank": {
            "ortg": 13,
            "drtg": 9,
            "ptsPg": 12,
            "oppPtsPg": 11,
            "tovPg": 2,
            "drebPg": 11
          }
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 4,
          "values": {
            "ortg": 109.5,
            "drtg": 96.3,
            "ptsPg": 117.5,
            "oppPtsPg": 102.5,
            "tovPg": 14,
            "drebPg": 31.5
          },
          "rank": {
            "ortg": 18,
            "drtg": 1,
            "ptsPg": 11,
            "oppPtsPg": 1,
            "tovPg": 8,
            "drebPg": 21
          }
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 108.4,
            "drtg": 115.8,
            "ptsPg": 112.4,
            "oppPtsPg": 120.2,
            "tovPg": 17,
            "drebPg": 33.8
          },
          "rank": {
            "ortg": 19,
            "drtg": 25,
            "ptsPg": 20,
            "oppPtsPg": 23,
            "tovPg": 24,
            "drebPg": 7
          }
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 5,
          "values": {
            "ortg": 111.2,
            "drtg": 112.5,
            "ptsPg": 113.6,
            "oppPtsPg": 115.8,
            "tovPg": 13.6,
            "drebPg": 31.2
          },
          "rank": {
            "ortg": 12,
            "drtg": 21,
            "ptsPg": 17,
            "oppPtsPg": 19,
            "tovPg": 5,
            "drebPg": 23
          }
        }
      ],
      "isolated": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 115.2,
            "drtg": 111.3,
            "ptsPg": 114,
            "oppPtsPg": 111,
            "tovPg": 11,
            "drebPg": 38
          },
          "rank": {
            "ortg": 3,
            "drtg": 3,
            "ptsPg": 4,
            "oppPtsPg": 2,
            "tovPg": 3,
            "drebPg": 2
          }
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 111.3,
            "drtg": 115.2,
            "ptsPg": 111,
            "oppPtsPg": 114,
            "tovPg": 9,
            "drebPg": 36
          },
          "rank": {
            "ortg": 4,
            "drtg": 4,
            "ptsPg": 5,
            "oppPtsPg": 3,
            "tovPg": 1,
            "drebPg": 3
          }
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 121.2,
            "drtg": 97.7,
            "ptsPg": 124,
            "oppPtsPg": 103,
            "tovPg": 10,
            "drebPg": 39
          },
          "rank": {
            "ortg": 1,
            "drtg": 1,
            "ptsPg": 2,
            "oppPtsPg": 1,
            "tovPg": 2,
            "drebPg": 1
          }
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 115.7,
            "drtg": 104.5,
            "ptsPg": 132,
            "oppPtsPg": 120,
            "tovPg": 20,
            "drebPg": 33
          },
          "rank": {
            "ortg": 2,
            "drtg": 2,
            "ptsPg": 1,
            "oppPtsPg": 4,
            "tovPg": 5,
            "drebPg": 4
          }
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 97.7,
            "drtg": 121.2,
            "ptsPg": 103,
            "oppPtsPg": 124,
            "tovPg": 16,
            "drebPg": 32
          },
          "rank": {
            "ortg": 6,
            "drtg": 6,
            "ptsPg": 6,
            "oppPtsPg": 5,
            "tovPg": 4,
            "drebPg": 6
          }
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 104.5,
            "drtg": 115.7,
            "ptsPg": 120,
            "oppPtsPg": 132,
            "tovPg": 25,
            "drebPg": 33
          },
          "rank": {
            "ortg": 5,
            "drtg": 5,
            "ptsPg": 3,
            "oppPtsPg": 6,
            "tovPg": 6,
            "drebPg": 5
          }
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        }
      ]
    },
    {
      "matchupPeriodId": 11,
      "label": "Woche 11",
      "throughDate": "2026-10-30",
      "cumulative": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 6,
          "values": {
            "ortg": 113.1,
            "drtg": 110.2,
            "ptsPg": 119.2,
            "oppPtsPg": 114.5,
            "tovPg": 13.5,
            "drebPg": 30.5
          },
          "rank": {
            "ortg": 10,
            "drtg": 14,
            "ptsPg": 6,
            "oppPtsPg": 17,
            "tovPg": 4,
            "drebPg": 23
          }
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 5,
          "values": {
            "ortg": 115.9,
            "drtg": 107.5,
            "ptsPg": 120.8,
            "oppPtsPg": 111.6,
            "tovPg": 15.2,
            "drebPg": 31.4
          },
          "rank": {
            "ortg": 4,
            "drtg": 9,
            "ptsPg": 4,
            "oppPtsPg": 12,
            "tovPg": 14,
            "drebPg": 22
          }
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 5,
          "values": {
            "ortg": 103.7,
            "drtg": 112.8,
            "ptsPg": 110.2,
            "oppPtsPg": 121.2,
            "tovPg": 18.6,
            "drebPg": 32.8
          },
          "rank": {
            "ortg": 28,
            "drtg": 20,
            "ptsPg": 22,
            "oppPtsPg": 24,
            "tovPg": 29,
            "drebPg": 15
          }
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 6,
          "values": {
            "ortg": 98.2,
            "drtg": 108.1,
            "ptsPg": 97.3,
            "oppPtsPg": 106,
            "tovPg": 17.5,
            "drebPg": 33.5
          },
          "rank": {
            "ortg": 30,
            "drtg": 11,
            "ptsPg": 30,
            "oppPtsPg": 4,
            "tovPg": 27,
            "drebPg": 8
          }
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 6,
          "values": {
            "ortg": 104,
            "drtg": 118.1,
            "ptsPg": 113.5,
            "oppPtsPg": 129.3,
            "tovPg": 17.5,
            "drebPg": 31.7
          },
          "rank": {
            "ortg": 27,
            "drtg": 28,
            "ptsPg": 17,
            "oppPtsPg": 30,
            "tovPg": 28,
            "drebPg": 19
          }
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 5,
          "values": {
            "ortg": 111.4,
            "drtg": 110.7,
            "ptsPg": 118,
            "oppPtsPg": 117,
            "tovPg": 15.6,
            "drebPg": 35.4
          },
          "rank": {
            "ortg": 15,
            "drtg": 15,
            "ptsPg": 10,
            "oppPtsPg": 20,
            "tovPg": 17,
            "drebPg": 3
          }
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 6,
          "values": {
            "ortg": 113.4,
            "drtg": 108.9,
            "ptsPg": 114.3,
            "oppPtsPg": 111.8,
            "tovPg": 15.8,
            "drebPg": 32.5
          },
          "rank": {
            "ortg": 8,
            "drtg": 13,
            "ptsPg": 15,
            "oppPtsPg": 13,
            "tovPg": 18,
            "drebPg": 16
          }
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 113.4,
            "drtg": 112.3,
            "ptsPg": 114,
            "oppPtsPg": 115.2,
            "tovPg": 15.8,
            "drebPg": 31.6
          },
          "rank": {
            "ortg": 9,
            "drtg": 19,
            "ptsPg": 16,
            "oppPtsPg": 18,
            "tovPg": 19,
            "drebPg": 21
          }
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 6,
          "values": {
            "ortg": 110.1,
            "drtg": 101.2,
            "ptsPg": 109.8,
            "oppPtsPg": 101.8,
            "tovPg": 15,
            "drebPg": 33.8
          },
          "rank": {
            "ortg": 17,
            "drtg": 1,
            "ptsPg": 24,
            "oppPtsPg": 1,
            "tovPg": 13,
            "drebPg": 5
          }
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 6,
          "values": {
            "ortg": 115.4,
            "drtg": 114,
            "ptsPg": 116.7,
            "oppPtsPg": 115.3,
            "tovPg": 16.5,
            "drebPg": 28.3
          },
          "rank": {
            "ortg": 6,
            "drtg": 23,
            "ptsPg": 12,
            "oppPtsPg": 19,
            "tovPg": 21,
            "drebPg": 29
          }
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 6,
          "values": {
            "ortg": 120.2,
            "drtg": 107,
            "ptsPg": 121,
            "oppPtsPg": 110,
            "tovPg": 15.2,
            "drebPg": 32.5
          },
          "rank": {
            "ortg": 1,
            "drtg": 7,
            "ptsPg": 3,
            "oppPtsPg": 10,
            "tovPg": 15,
            "drebPg": 17
          }
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 6,
          "values": {
            "ortg": 111.6,
            "drtg": 115.9,
            "ptsPg": 116.7,
            "oppPtsPg": 119.8,
            "tovPg": 14.5,
            "drebPg": 31.7
          },
          "rank": {
            "ortg": 13,
            "drtg": 26,
            "ptsPg": 13,
            "oppPtsPg": 22,
            "tovPg": 10,
            "drebPg": 20
          }
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 5,
          "values": {
            "ortg": 102.6,
            "drtg": 111.1,
            "ptsPg": 105.4,
            "oppPtsPg": 111.8,
            "tovPg": 21.8,
            "drebPg": 30.4
          },
          "rank": {
            "ortg": 29,
            "drtg": 17,
            "ptsPg": 29,
            "oppPtsPg": 14,
            "tovPg": 30,
            "drebPg": 24
          }
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 6,
          "values": {
            "ortg": 118.1,
            "drtg": 110.9,
            "ptsPg": 118.5,
            "oppPtsPg": 113.3,
            "tovPg": 17.2,
            "drebPg": 28.8
          },
          "rank": {
            "ortg": 2,
            "drtg": 16,
            "ptsPg": 7,
            "oppPtsPg": 15,
            "tovPg": 25,
            "drebPg": 28
          }
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 115.9,
            "drtg": 104.4,
            "ptsPg": 118.2,
            "oppPtsPg": 106.2,
            "tovPg": 14.4,
            "drebPg": 36.2
          },
          "rank": {
            "ortg": 5,
            "drtg": 6,
            "ptsPg": 9,
            "oppPtsPg": 5,
            "tovPg": 9,
            "drebPg": 1
          }
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 6,
          "values": {
            "ortg": 111.6,
            "drtg": 115.6,
            "ptsPg": 118.3,
            "oppPtsPg": 121.5,
            "tovPg": 14.5,
            "drebPg": 32.5
          },
          "rank": {
            "ortg": 14,
            "drtg": 24,
            "ptsPg": 8,
            "oppPtsPg": 25,
            "tovPg": 11,
            "drebPg": 18
          }
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 5,
          "values": {
            "ortg": 108.2,
            "drtg": 116.6,
            "ptsPg": 113.4,
            "oppPtsPg": 124.2,
            "tovPg": 16.8,
            "drebPg": 35.4
          },
          "rank": {
            "ortg": 21,
            "drtg": 27,
            "ptsPg": 18,
            "oppPtsPg": 27,
            "tovPg": 22,
            "drebPg": 4
          }
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 6,
          "values": {
            "ortg": 115.4,
            "drtg": 101.6,
            "ptsPg": 121.5,
            "oppPtsPg": 106.7,
            "tovPg": 15.3,
            "drebPg": 36.2
          },
          "rank": {
            "ortg": 7,
            "drtg": 2,
            "ptsPg": 2,
            "oppPtsPg": 7,
            "tovPg": 16,
            "drebPg": 2
          }
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 109.9,
            "drtg": 113.1,
            "ptsPg": 119.4,
            "oppPtsPg": 121.6,
            "tovPg": 17.2,
            "drebPg": 33
          },
          "rank": {
            "ortg": 18,
            "drtg": 21,
            "ptsPg": 5,
            "oppPtsPg": 26,
            "tovPg": 26,
            "drebPg": 13
          }
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 6,
          "values": {
            "ortg": 106.1,
            "drtg": 108.2,
            "ptsPg": 107,
            "oppPtsPg": 107.7,
            "tovPg": 14.5,
            "drebPg": 33.2
          },
          "rank": {
            "ortg": 24,
            "drtg": 12,
            "ptsPg": 28,
            "oppPtsPg": 8,
            "tovPg": 12,
            "drebPg": 12
          }
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 107.1,
            "drtg": 103.6,
            "ptsPg": 108.2,
            "oppPtsPg": 104.6,
            "tovPg": 13.6,
            "drebPg": 33
          },
          "rank": {
            "ortg": 23,
            "drtg": 5,
            "ptsPg": 27,
            "oppPtsPg": 2,
            "tovPg": 5,
            "drebPg": 14
          }
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 5,
          "values": {
            "ortg": 107.6,
            "drtg": 113.9,
            "ptsPg": 109.8,
            "oppPtsPg": 118.4,
            "tovPg": 16.8,
            "drebPg": 30.4
          },
          "rank": {
            "ortg": 22,
            "drtg": 22,
            "ptsPg": 25,
            "oppPtsPg": 21,
            "tovPg": 23,
            "drebPg": 25
          }
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 6,
          "values": {
            "ortg": 104.2,
            "drtg": 102.1,
            "ptsPg": 108.7,
            "oppPtsPg": 105,
            "tovPg": 12.8,
            "drebPg": 33.3
          },
          "rank": {
            "ortg": 26,
            "drtg": 3,
            "ptsPg": 26,
            "oppPtsPg": 3,
            "tovPg": 1,
            "drebPg": 10
          }
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 4,
          "values": {
            "ortg": 112.9,
            "drtg": 122.4,
            "ptsPg": 112,
            "oppPtsPg": 124.5,
            "tovPg": 14.3,
            "drebPg": 27.5
          },
          "rank": {
            "ortg": 11,
            "drtg": 30,
            "ptsPg": 20,
            "oppPtsPg": 28,
            "tovPg": 8,
            "drebPg": 30
          }
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 4,
          "values": {
            "ortg": 117.9,
            "drtg": 111.5,
            "ptsPg": 122.8,
            "oppPtsPg": 114,
            "tovPg": 14,
            "drebPg": 33.8
          },
          "rank": {
            "ortg": 3,
            "drtg": 18,
            "ptsPg": 1,
            "oppPtsPg": 16,
            "tovPg": 7,
            "drebPg": 6
          }
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 5,
          "values": {
            "ortg": 104.6,
            "drtg": 121,
            "ptsPg": 110.2,
            "oppPtsPg": 126.8,
            "tovPg": 16.4,
            "drebPg": 29.8
          },
          "rank": {
            "ortg": 25,
            "drtg": 29,
            "ptsPg": 23,
            "oppPtsPg": 29,
            "tovPg": 20,
            "drebPg": 26
          }
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 111.1,
            "drtg": 107.8,
            "ptsPg": 116.6,
            "oppPtsPg": 110,
            "tovPg": 12.8,
            "drebPg": 33.4
          },
          "rank": {
            "ortg": 16,
            "drtg": 10,
            "ptsPg": 14,
            "oppPtsPg": 11,
            "tovPg": 2,
            "drebPg": 9
          }
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 5,
          "values": {
            "ortg": 111.7,
            "drtg": 102.8,
            "ptsPg": 116.8,
            "oppPtsPg": 106.2,
            "tovPg": 13.4,
            "drebPg": 29.8
          },
          "rank": {
            "ortg": 12,
            "drtg": 4,
            "ptsPg": 11,
            "oppPtsPg": 6,
            "tovPg": 3,
            "drebPg": 27
          }
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 5,
          "values": {
            "ortg": 108.4,
            "drtg": 115.8,
            "ptsPg": 112.4,
            "oppPtsPg": 120.2,
            "tovPg": 17,
            "drebPg": 33.8
          },
          "rank": {
            "ortg": 20,
            "drtg": 25,
            "ptsPg": 19,
            "oppPtsPg": 23,
            "tovPg": 24,
            "drebPg": 7
          }
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 6,
          "values": {
            "ortg": 109.7,
            "drtg": 107.3,
            "ptsPg": 110.5,
            "oppPtsPg": 109.7,
            "tovPg": 13.7,
            "drebPg": 33.3
          },
          "rank": {
            "ortg": 19,
            "drtg": 8,
            "ptsPg": 21,
            "oppPtsPg": 9,
            "tovPg": 6,
            "drebPg": 11
          }
        }
      ],
      "isolated": [
        {
          "abbr": "ATL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 119.5,
            "drtg": 105.1,
            "ptsPg": 125,
            "oppPtsPg": 111,
            "tovPg": 14,
            "drebPg": 32
          },
          "rank": {
            "ortg": 8,
            "drtg": 8,
            "ptsPg": 4,
            "oppPtsPg": 9,
            "tovPg": 9,
            "drebPg": 6
          }
        },
        {
          "abbr": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 91.8,
            "drtg": 104.4,
            "ptsPg": 94,
            "oppPtsPg": 110,
            "tovPg": 23,
            "drebPg": 41
          },
          "rank": {
            "ortg": 19,
            "drtg": 7,
            "ptsPg": 18,
            "oppPtsPg": 8,
            "tovPg": 20,
            "drebPg": 2
          }
        },
        {
          "abbr": "CHA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 80.4,
            "drtg": 101.7,
            "ptsPg": 79,
            "oppPtsPg": 95,
            "tovPg": 10,
            "drebPg": 37
          },
          "rank": {
            "ortg": 20,
            "drtg": 5,
            "ptsPg": 20,
            "oppPtsPg": 4,
            "tovPg": 1,
            "drebPg": 3
          }
        },
        {
          "abbr": "CHI",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 105.1,
            "drtg": 119.5,
            "ptsPg": 111,
            "oppPtsPg": 125,
            "tovPg": 16,
            "drebPg": 31
          },
          "rank": {
            "ortg": 13,
            "drtg": 13,
            "ptsPg": 11,
            "oppPtsPg": 16,
            "tovPg": 14,
            "drebPg": 8
          }
        },
        {
          "abbr": "CLE",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "DAL",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 118.5,
            "drtg": 108.3,
            "ptsPg": 116,
            "oppPtsPg": 111,
            "tovPg": 17,
            "drebPg": 29
          },
          "rank": {
            "ortg": 9,
            "drtg": 10,
            "ptsPg": 8,
            "oppPtsPg": 10,
            "tovPg": 16,
            "drebPg": 12
          }
        },
        {
          "abbr": "DEN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 128,
            "drtg": 121.4,
            "ptsPg": 127,
            "oppPtsPg": 120,
            "tovPg": 18,
            "drebPg": 28
          },
          "rank": {
            "ortg": 4,
            "drtg": 14,
            "ptsPg": 2,
            "oppPtsPg": 14,
            "tovPg": 18,
            "drebPg": 15
          }
        },
        {
          "abbr": "DET",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 104.4,
            "drtg": 91.8,
            "ptsPg": 110,
            "oppPtsPg": 94,
            "tovPg": 12,
            "drebPg": 32
          },
          "rank": {
            "ortg": 14,
            "drtg": 2,
            "ptsPg": 13,
            "oppPtsPg": 3,
            "tovPg": 4,
            "drebPg": 7
          }
        },
        {
          "abbr": "GSW",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 116.1,
            "drtg": 98.4,
            "ptsPg": 112,
            "oppPtsPg": 95,
            "tovPg": 15,
            "drebPg": 29
          },
          "rank": {
            "ortg": 10,
            "drtg": 3,
            "ptsPg": 10,
            "oppPtsPg": 5,
            "tovPg": 12,
            "drebPg": 13
          }
        },
        {
          "abbr": "HOU",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 108.3,
            "drtg": 118.5,
            "ptsPg": 111,
            "oppPtsPg": 116,
            "tovPg": 12,
            "drebPg": 28
          },
          "rank": {
            "ortg": 11,
            "drtg": 12,
            "ptsPg": 12,
            "oppPtsPg": 13,
            "tovPg": 5,
            "drebPg": 16
          }
        },
        {
          "abbr": "IND",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 1,
          "values": {
            "ortg": 122.7,
            "drtg": 139.3,
            "ptsPg": 125,
            "oppPtsPg": 145,
            "tovPg": 13,
            "drebPg": 23
          },
          "rank": {
            "ortg": 5,
            "drtg": 20,
            "ptsPg": 5,
            "oppPtsPg": 20,
            "tovPg": 6,
            "drebPg": 18
          }
        },
        {
          "abbr": "LAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 100.3,
            "drtg": 128.5,
            "ptsPg": 101,
            "oppPtsPg": 127,
            "tovPg": 17,
            "drebPg": 31
          },
          "rank": {
            "ortg": 17,
            "drtg": 18,
            "ptsPg": 14,
            "oppPtsPg": 18,
            "tovPg": 17,
            "drebPg": 9
          }
        },
        {
          "abbr": "LAL",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 98.4,
            "drtg": 116.1,
            "ptsPg": 95,
            "oppPtsPg": 112,
            "tovPg": 20,
            "drebPg": 29
          },
          "rank": {
            "ortg": 18,
            "drtg": 11,
            "ptsPg": 16,
            "oppPtsPg": 11,
            "tovPg": 19,
            "drebPg": 14
          }
        },
        {
          "abbr": "MEM",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIA",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 139.3,
            "drtg": 122.7,
            "ptsPg": 145,
            "oppPtsPg": 125,
            "tovPg": 16,
            "drebPg": 33
          },
          "rank": {
            "ortg": 1,
            "drtg": 16,
            "ptsPg": 1,
            "oppPtsPg": 17,
            "tovPg": 15,
            "drebPg": 5
          }
        },
        {
          "abbr": "MIL",
          "conference": "East",
          "division": "Central",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "MIN",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 1,
          "values": {
            "ortg": 128.5,
            "drtg": 100.3,
            "ptsPg": 127,
            "oppPtsPg": 101,
            "tovPg": 11,
            "drebPg": 31
          },
          "rank": {
            "ortg": 3,
            "drtg": 4,
            "ptsPg": 3,
            "oppPtsPg": 7,
            "tovPg": 2,
            "drebPg": 10
          }
        },
        {
          "abbr": "NOP",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 102,
            "drtg": 107.6,
            "ptsPg": 93,
            "oppPtsPg": 98,
            "tovPg": 13,
            "drebPg": 31
          },
          "rank": {
            "ortg": 15,
            "drtg": 9,
            "ptsPg": 19,
            "oppPtsPg": 6,
            "tovPg": 7,
            "drebPg": 11
          }
        },
        {
          "abbr": "OKC",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "ORL",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 133.3,
            "drtg": 121.8,
            "ptsPg": 121,
            "oppPtsPg": 114,
            "tovPg": 13,
            "drebPg": 23
          },
          "rank": {
            "ortg": 2,
            "drtg": 15,
            "ptsPg": 6,
            "oppPtsPg": 12,
            "tovPg": 8,
            "drebPg": 19
          }
        },
        {
          "abbr": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 107.6,
            "drtg": 102,
            "ptsPg": 98,
            "oppPtsPg": 93,
            "tovPg": 14,
            "drebPg": 34
          },
          "rank": {
            "ortg": 12,
            "drtg": 6,
            "ptsPg": 15,
            "oppPtsPg": 2,
            "tovPg": 10,
            "drebPg": 4
          }
        },
        {
          "abbr": "PHO",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 1,
          "values": {
            "ortg": 121.4,
            "drtg": 128,
            "ptsPg": 120,
            "oppPtsPg": 127,
            "tovPg": 15,
            "drebPg": 27
          },
          "rank": {
            "ortg": 7,
            "drtg": 17,
            "ptsPg": 7,
            "oppPtsPg": 19,
            "tovPg": 13,
            "drebPg": 17
          }
        },
        {
          "abbr": "POR",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "SAC",
          "conference": "West",
          "division": "Pacific",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "SAS",
          "conference": "West",
          "division": "Southwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "gamesPlayed": 1,
          "values": {
            "ortg": 121.8,
            "drtg": 133.3,
            "ptsPg": 114,
            "oppPtsPg": 121,
            "tovPg": 11,
            "drebPg": 23
          },
          "rank": {
            "ortg": 6,
            "drtg": 19,
            "ptsPg": 9,
            "oppPtsPg": 15,
            "tovPg": 3,
            "drebPg": 20
          }
        },
        {
          "abbr": "UTA",
          "conference": "West",
          "division": "Northwest",
          "gamesPlayed": 0,
          "values": null,
          "rank": null
        },
        {
          "abbr": "WAS",
          "conference": "East",
          "division": "Southeast",
          "gamesPlayed": 1,
          "values": {
            "ortg": 101.7,
            "drtg": 80.4,
            "ptsPg": 95,
            "oppPtsPg": 79,
            "tovPg": 14,
            "drebPg": 44
          },
          "rank": {
            "ortg": 16,
            "drtg": 1,
            "ptsPg": 17,
            "oppPtsPg": 1,
            "tovPg": 11,
            "drebPg": 1
          }
        }
      ]
    }
  ]
};
