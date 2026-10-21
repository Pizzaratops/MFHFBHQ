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
  "generatedAt": "2026-10-21T13:11:23.535Z",
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
    }
  ]
};
