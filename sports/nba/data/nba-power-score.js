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
  "generatedAt": "2026-10-22T22:14:32.683Z",
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
            "ortg": 106.3,
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
            "drtg": 106.3,
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
            "drtg": 99.5,
            "ptsPg": 123,
            "oppPtsPg": 103,
            "tovPg": 13,
            "drebPg": 40
          },
          "rank": {
            "ortg": 8,
            "drtg": 6,
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
            "ortg": 22,
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
            "drtg": 7,
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
            "ortg": 99.5,
            "drtg": 119,
            "ptsPg": 103,
            "oppPtsPg": 123,
            "tovPg": 18,
            "drebPg": 33
          },
          "rank": {
            "ortg": 23,
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
            "ortg": 106.3,
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
            "drtg": 106.3,
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
            "drtg": 99.5,
            "ptsPg": 123,
            "oppPtsPg": 103,
            "tovPg": 13,
            "drebPg": 40
          },
          "rank": {
            "ortg": 8,
            "drtg": 4,
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
            "ortg": 18,
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
            "drtg": 5,
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
            "ortg": 99.5,
            "drtg": 119,
            "ptsPg": 103,
            "oppPtsPg": 123,
            "tovPg": 18,
            "drebPg": 33
          },
          "rank": {
            "ortg": 19,
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
    }
  ]
};
