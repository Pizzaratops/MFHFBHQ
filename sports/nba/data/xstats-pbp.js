// ============================================================
//  x3PM / xFGM der laufenden Saison aus Play-by-Play
//  Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data (nicht unser Projekt, frei veröffentlichte Daten)
//  Methode: Josh Lloyd (joshlloydfantasy.com/research/xstats-method)
//  Erzeugt von scripts/xstats-pbp.py am 2026-11-10 · Saison 2026-27 · Stand 2026-11-09
//  Wird von scripts/build-live-projections.js gelesen (3PM, FG%).
//  META {"season": "2026-27", "assetUpdated": "Tue, 10 Nov 2026 13:32:12 GMT"}
// ============================================================
const XSTATS_PBP = {
 "meta": {
  "season": "2026-27",
  "through": "2026-11-09",
  "players": 462,
  "games": 154,
  "shots": 27115,
  "assetUpdated": "Tue, 10 Nov 2026 13:32:12 GMT",
  "zoneRates": {
   "C3": 0.3724,
   "AB3": 0.3492,
   "RA": 0.6611,
   "PAINT": 0.439,
   "MID": 0.4076
  },
  "source": "Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data"
 },
 "players": {
  "AJ Dybantsa": {
   "gp": 7,
   "tpm": 6,
   "xtpm": 7.75,
   "fgm": 42,
   "xfgm": 48.42,
   "fga": 97
  },
  "AJ Green": {
   "gp": 10,
   "tpm": 22,
   "xtpm": 18.04,
   "fgm": 25,
   "xfgm": 20.83,
   "fga": 57
  },
  "AJ Johnson": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 2.86,
   "fga": 5
  },
  "Aaron Gordon": {
   "gp": 9,
   "tpm": 10,
   "xtpm": 12.71,
   "fgm": 32,
   "xfgm": 38.02,
   "fga": 81
  },
  "Aaron Nesmith": {
   "gp": 9,
   "tpm": 18,
   "xtpm": 19.97,
   "fgm": 37,
   "xfgm": 41.56,
   "fga": 97
  },
  "Aaron Wiggins": {
   "gp": 12,
   "tpm": 36,
   "xtpm": 30.24,
   "fgm": 68,
   "xfgm": 61.05,
   "fga": 147
  },
  "Ace Bailey": {
   "gp": 10,
   "tpm": 12,
   "xtpm": 18.67,
   "fgm": 51,
   "xfgm": 49.68,
   "fga": 113
  },
  "Aday Mara": {
   "gp": 10,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 35,
   "xfgm": 32.43,
   "fga": 56
  },
  "Adem Bona": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 8,
   "xfgm": 12.06,
   "fga": 21
  },
  "Adou Thiero": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 4.63,
   "fga": 7
  },
  "Ajay Mitchell": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 11.69,
   "fgm": 75,
   "xfgm": 71.49,
   "fga": 145
  },
  "Al Horford": {
   "gp": 9,
   "tpm": 11,
   "xtpm": 9.47,
   "fgm": 17,
   "xfgm": 15.79,
   "fga": 39
  },
  "Alex Caruso": {
   "gp": 7,
   "tpm": 10,
   "xtpm": 7.73,
   "fgm": 16,
   "xfgm": 12.79,
   "fga": 31
  },
  "Alex Karaban": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.75,
   "fgm": 2,
   "xfgm": 2.41,
   "fga": 6
  },
  "Alex Morales": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 2,
   "xfgm": 2.48,
   "fga": 5
  },
  "Alex Sarr": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 10.92,
   "fgm": 39,
   "xfgm": 39.89,
   "fga": 80
  },
  "Alijah Martin": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 5.26,
   "fgm": 19,
   "xfgm": 14.29,
   "fga": 29
  },
  "Allen Graves": {
   "gp": 10,
   "tpm": 4,
   "xtpm": 6.42,
   "fgm": 15,
   "xfgm": 17.62,
   "fga": 37
  },
  "Alperen Sengun": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 6.66,
   "fgm": 73,
   "xfgm": 74.65,
   "fga": 142
  },
  "Alpha Diallo": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 1.07,
   "fgm": 2,
   "xfgm": 3.05,
   "fga": 6
  },
  "Amen Thompson": {
   "gp": 11,
   "tpm": 2,
   "xtpm": 3.19,
   "fgm": 63,
   "xfgm": 70.61,
   "fga": 127
  },
  "Andre Drummond": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 19,
   "xfgm": 27.88,
   "fga": 45
  },
  "Andrew Nembhard": {
   "gp": 9,
   "tpm": 21,
   "xtpm": 17.85,
   "fgm": 52,
   "xfgm": 49.2,
   "fga": 114
  },
  "Andrew Wiggins": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 14.48,
   "fgm": 33,
   "xfgm": 34.76,
   "fga": 82
  },
  "Anfernee Simons": {
   "gp": 11,
   "tpm": 24,
   "xtpm": 21.69,
   "fgm": 32,
   "xfgm": 34.39,
   "fga": 85
  },
  "Anthony Black": {
   "gp": 6,
   "tpm": 12,
   "xtpm": 9.85,
   "fgm": 31,
   "xfgm": 29.13,
   "fga": 67
  },
  "Anthony Davis": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 8.43,
   "fgm": 89,
   "xfgm": 84.16,
   "fga": 167
  },
  "Anthony Edwards": {
   "gp": 4,
   "tpm": 18,
   "xtpm": 15.81,
   "fgm": 50,
   "xfgm": 46.44,
   "fga": 104
  },
  "Anthony Gill": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 2.33,
   "fga": 4
  },
  "Asa Newell": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 2.84,
   "fgm": 7,
   "xfgm": 7.25,
   "fga": 15
  },
  "Ausar Thompson": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 34,
   "xfgm": 37.38,
   "fga": 70
  },
  "Austin Reaves": {
   "gp": 11,
   "tpm": 26,
   "xtpm": 22.09,
   "fgm": 91,
   "xfgm": 77.69,
   "fga": 179
  },
  "Ayo Dosunmu": {
   "gp": 11,
   "tpm": 21,
   "xtpm": 15.83,
   "fgm": 76,
   "xfgm": 72.04,
   "fga": 146
  },
  "Baba Miller": {
   "gp": 8,
   "tpm": 1,
   "xtpm": 1.42,
   "fgm": 9,
   "xfgm": 9.12,
   "fga": 18
  },
  "Bam Adebayo": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 11.66,
   "fgm": 70,
   "xfgm": 64.01,
   "fga": 132
  },
  "Baylor Scheierman": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 10.64,
   "fgm": 21,
   "xfgm": 20.37,
   "fga": 50
  },
  "Ben Saraf": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.66,
   "fga": 1
  },
  "Ben Sheppard": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 1,
   "xfgm": 1.36,
   "fga": 3
  },
  "Bennedict Mathurin": {
   "gp": 11,
   "tpm": 5,
   "xtpm": 9.12,
   "fgm": 23,
   "xfgm": 30.07,
   "fga": 63
  },
  "Bennett Stirtz": {
   "gp": 10,
   "tpm": 16,
   "xtpm": 12.66,
   "fgm": 25,
   "xfgm": 22.09,
   "fga": 53
  },
  "Bilal Coulibaly": {
   "gp": 10,
   "tpm": 4,
   "xtpm": 8.61,
   "fgm": 28,
   "xfgm": 30.36,
   "fga": 59
  },
  "Blake Wesley": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 0,
   "xfgm": 2.02,
   "fga": 4
  },
  "Bobby Portis Jr.": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 14.13,
   "fgm": 26,
   "xfgm": 29.08,
   "fga": 70
  },
  "Bogdan Bogdanović": {
   "gp": 11,
   "tpm": 12,
   "xtpm": 8.89,
   "fgm": 20,
   "xfgm": 15.76,
   "fga": 40
  },
  "Bogoljub Marković": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.66,
   "fga": 1
  },
  "Bones Hyland": {
   "gp": 11,
   "tpm": 16,
   "xtpm": 16.48,
   "fgm": 33,
   "xfgm": 31.28,
   "fga": 75
  },
  "Braden Smith": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 2.49,
   "fgm": 13,
   "xfgm": 13.58,
   "fga": 29
  },
  "Branden Carlson": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 1.07,
   "fgm": 4,
   "xfgm": 3.27,
   "fga": 7
  },
  "Brandin Podziemski": {
   "gp": 9,
   "tpm": 25,
   "xtpm": 21.79,
   "fgm": 55,
   "xfgm": 48.4,
   "fga": 114
  },
  "Brandon Miller": {
   "gp": 10,
   "tpm": 27,
   "xtpm": 36.57,
   "fgm": 73,
   "xfgm": 86.94,
   "fga": 205
  },
  "Brandon Williams": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 8.08,
   "fgm": 33,
   "xfgm": 36.97,
   "fga": 80
  },
  "Brayden Burries": {
   "gp": 10,
   "tpm": 8,
   "xtpm": 12.69,
   "fgm": 36,
   "xfgm": 37.39,
   "fga": 81
  },
  "Brice Sensabaugh": {
   "gp": 10,
   "tpm": 14,
   "xtpm": 12.64,
   "fgm": 24,
   "xfgm": 26.8,
   "fga": 66
  },
  "Bronny James": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 1.45,
   "fga": 3
  },
  "Brook Lopez": {
   "gp": 9,
   "tpm": 12,
   "xtpm": 9.82,
   "fgm": 50,
   "xfgm": 40.4,
   "fga": 86
  },
  "Brooks Barnhizer": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 3,
   "xfgm": 3.01,
   "fga": 6
  },
  "Bruce Thornton": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 1.4,
   "fgm": 5,
   "xfgm": 3.53,
   "fga": 9
  },
  "Bryce Hopkins": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 1.77,
   "fgm": 14,
   "xfgm": 11.83,
   "fga": 22
  },
  "Bryce McGowens": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 2.14,
   "fgm": 5,
   "xfgm": 6.76,
   "fga": 14
  },
  "Bub Carrington": {
   "gp": 11,
   "tpm": 17,
   "xtpm": 12.36,
   "fgm": 19,
   "xfgm": 19.05,
   "fga": 48
  },
  "Buddy Hield": {
   "gp": 8,
   "tpm": 8,
   "xtpm": 7.33,
   "fgm": 18,
   "xfgm": 17.24,
   "fga": 37
  },
  "CJ McCollum": {
   "gp": 12,
   "tpm": 22,
   "xtpm": 21.67,
   "fgm": 60,
   "xfgm": 63.76,
   "fga": 145
  },
  "Cade Cunningham": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 22.77,
   "fgm": 80,
   "xfgm": 78.66,
   "fga": 173
  },
  "Caleb Love": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Caleb Martin": {
   "gp": 7,
   "tpm": 5,
   "xtpm": 3.61,
   "fgm": 9,
   "xfgm": 8.51,
   "fga": 20
  },
  "Caleb Wilson": {
   "gp": 9,
   "tpm": 21,
   "xtpm": 24.32,
   "fgm": 63,
   "xfgm": 71.64,
   "fga": 155
  },
  "Cam Christie": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 1.42,
   "fgm": 2,
   "xfgm": 5.38,
   "fga": 11
  },
  "Cam Spencer": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 11.57,
   "fgm": 32,
   "xfgm": 24.59,
   "fga": 61
  },
  "Cam Whitmore": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 4,
   "xfgm": 3.78,
   "fga": 7
  },
  "Cameron Boozer": {
   "gp": 10,
   "tpm": 18,
   "xtpm": 21.39,
   "fgm": 52,
   "xfgm": 62.58,
   "fga": 140
  },
  "Cameron Carr": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 1,
   "xfgm": 1.36,
   "fga": 3
  },
  "Cameron Johnson": {
   "gp": 6,
   "tpm": 12,
   "xtpm": 10.57,
   "fgm": 23,
   "xfgm": 20.81,
   "fga": 49
  },
  "Carson Cooper": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Carter Bryant": {
   "gp": 10,
   "tpm": 8,
   "xtpm": 8.17,
   "fgm": 10,
   "xfgm": 12.35,
   "fga": 30
  },
  "Cason Wallace": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.54,
   "fgm": 8,
   "xfgm": 9.26,
   "fga": 20
  },
  "Cedric Coward": {
   "gp": 9,
   "tpm": 22,
   "xtpm": 16.5,
   "fgm": 41,
   "xfgm": 39.98,
   "fga": 91
  },
  "Chaney Johnson": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 8.19,
   "fgm": 16,
   "xfgm": 21.3,
   "fga": 47
  },
  "Charles Bassey": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 27,
   "xfgm": 23.15,
   "fga": 41
  },
  "Chaz Lanier": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 1.77,
   "fgm": 5,
   "xfgm": 2.87,
   "fga": 7
  },
  "Chet Holmgren": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.12,
   "fgm": 11,
   "xfgm": 14.64,
   "fga": 27
  },
  "Chris Cenac Jr.": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 0.72,
   "fgm": 3,
   "xfgm": 2.04,
   "fga": 4
  },
  "Chris Mañon": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.67,
   "fga": 3
  },
  "Chris Youngblood": {
   "gp": 5,
   "tpm": 6,
   "xtpm": 6.68,
   "fgm": 8,
   "xfgm": 8.22,
   "fga": 22
  },
  "Christian Anderson": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 9.12,
   "fgm": 14,
   "xfgm": 18.08,
   "fga": 44
  },
  "Christian Braun": {
   "gp": 9,
   "tpm": 14,
   "xtpm": 14.57,
   "fgm": 43,
   "xfgm": 41.02,
   "fga": 86
  },
  "Clint Capela": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 9,
   "xfgm": 8.81,
   "fga": 14
  },
  "Coby White": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 6.98,
   "fgm": 9,
   "xfgm": 17.04,
   "fga": 38
  },
  "Cody Williams": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 1.01,
   "fga": 2
  },
  "Colin Castleton": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.52,
   "fga": 6
  },
  "Collin Gillespie": {
   "gp": 9,
   "tpm": 15,
   "xtpm": 17.9,
   "fgm": 22,
   "xfgm": 27.07,
   "fga": 69
  },
  "Collin Murray-Boyles": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 5.63,
   "fgm": 37,
   "xfgm": 37.26,
   "fga": 73
  },
  "Collin Sexton": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 13.1,
   "fgm": 39,
   "xfgm": 43.0,
   "fga": 91
  },
  "Cooper Flagg": {
   "gp": 10,
   "tpm": 14,
   "xtpm": 16.85,
   "fgm": 90,
   "xfgm": 82.93,
   "fga": 180
  },
  "Corey Kispert": {
   "gp": 6,
   "tpm": 10,
   "xtpm": 6.28,
   "fgm": 17,
   "xfgm": 11.35,
   "fga": 27
  },
  "Craig Porter Jr.": {
   "gp": 9,
   "tpm": 1,
   "xtpm": 1.42,
   "fgm": 6,
   "xfgm": 4.94,
   "fga": 11
  },
  "DaRon Holmes II": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 1,
   "xfgm": 1.05,
   "fga": 3
  },
  "Daeqwon Plowden": {
   "gp": 7,
   "tpm": 4,
   "xtpm": 4.59,
   "fgm": 8,
   "xfgm": 7.45,
   "fga": 18
  },
  "Dailyn Swain": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 2.46,
   "fga": 5
  },
  "Dalen Terry": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.45,
   "fga": 3
  },
  "Dalton Knecht": {
   "gp": 2,
   "tpm": 2,
   "xtpm": 1.4,
   "fgm": 4,
   "xfgm": 2.5,
   "fga": 6
  },
  "Damian Lillard": {
   "gp": 9,
   "tpm": 25,
   "xtpm": 25.51,
   "fgm": 51,
   "xfgm": 49.92,
   "fga": 121
  },
  "Daniel Gafford": {
   "gp": 11,
   "tpm": 1,
   "xtpm": 0.37,
   "fgm": 42,
   "xfgm": 35.1,
   "fga": 59
  },
  "Daniss Jenkins": {
   "gp": 10,
   "tpm": 21,
   "xtpm": 17.25,
   "fgm": 42,
   "xfgm": 38.95,
   "fga": 93
  },
  "Danny Wolf": {
   "gp": 5,
   "tpm": 10,
   "xtpm": 7.73,
   "fgm": 15,
   "xfgm": 13.23,
   "fga": 32
  },
  "Darius Acuff Jr.": {
   "gp": 10,
   "tpm": 30,
   "xtpm": 32.89,
   "fgm": 95,
   "xfgm": 100.73,
   "fga": 230
  },
  "Darius Garland": {
   "gp": 9,
   "tpm": 23,
   "xtpm": 21.69,
   "fgm": 66,
   "xfgm": 61.31,
   "fga": 140
  },
  "Darryn Peterson": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 18.25,
   "fgm": 52,
   "xfgm": 55.41,
   "fga": 132
  },
  "David Jones Garcia": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 1,
   "xfgm": 3.78,
   "fga": 8
  },
  "Davion Mitchell": {
   "gp": 10,
   "tpm": 22,
   "xtpm": 19.3,
   "fgm": 63,
   "xfgm": 56.76,
   "fga": 124
  },
  "Day'Ron Sharpe": {
   "gp": 10,
   "tpm": 3,
   "xtpm": 3.96,
   "fgm": 27,
   "xfgm": 31.27,
   "fga": 55
  },
  "De'Aaron Fox": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 10.61,
   "fgm": 50,
   "xfgm": 43.95,
   "fga": 94
  },
  "De'Andre Hunter": {
   "gp": 9,
   "tpm": 18,
   "xtpm": 18.02,
   "fgm": 40,
   "xfgm": 39.31,
   "fga": 94
  },
  "De'Anthony Melton": {
   "gp": 11,
   "tpm": 24,
   "xtpm": 19.69,
   "fgm": 34,
   "xfgm": 34.18,
   "fga": 83
  },
  "DeAndre Jordan": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 2.64,
   "fga": 4
  },
  "DeMar DeRozan": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 4.28,
   "fgm": 28,
   "xfgm": 30.14,
   "fga": 69
  },
  "Dean Wade": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 5.66,
   "fgm": 10,
   "xfgm": 10.91,
   "fga": 25
  },
  "Deandre Ayton": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 26,
   "xfgm": 23.53,
   "fga": 39
  },
  "Dejounte Murray": {
   "gp": 8,
   "tpm": 7,
   "xtpm": 8.54,
   "fgm": 42,
   "xfgm": 48.22,
   "fga": 96
  },
  "Deni Avdija": {
   "gp": 9,
   "tpm": 15,
   "xtpm": 15.76,
   "fgm": 65,
   "xfgm": 67.16,
   "fga": 138
  },
  "Dennis Schröder": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 12.31,
   "fgm": 32,
   "xfgm": 41.74,
   "fga": 88
  },
  "Derik Queen": {
   "gp": 11,
   "tpm": 3,
   "xtpm": 3.54,
   "fgm": 44,
   "xfgm": 49.59,
   "fga": 93
  },
  "Derrick Jones Jr.": {
   "gp": 8,
   "tpm": 15,
   "xtpm": 10.94,
   "fgm": 33,
   "xfgm": 30.91,
   "fga": 65
  },
  "Derrick White": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 18.32,
   "fgm": 47,
   "xfgm": 45.61,
   "fga": 107
  },
  "Desmond Bane": {
   "gp": 8,
   "tpm": 28,
   "xtpm": 26.79,
   "fgm": 44,
   "xfgm": 46.43,
   "fga": 113
  },
  "Devin Booker": {
   "gp": 9,
   "tpm": 18,
   "xtpm": 17.5,
   "fgm": 80,
   "xfgm": 71.53,
   "fga": 164
  },
  "Devin Vassell": {
   "gp": 10,
   "tpm": 16,
   "xtpm": 15.9,
   "fgm": 39,
   "xfgm": 41.24,
   "fga": 96
  },
  "Dillon Brooks": {
   "gp": 9,
   "tpm": 19,
   "xtpm": 14.36,
   "fgm": 51,
   "xfgm": 49.41,
   "fga": 112
  },
  "Dillon Mitchell": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Domantas Sabonis": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 1.4,
   "fgm": 55,
   "xfgm": 44.19,
   "fga": 80
  },
  "Donovan Clingan": {
   "gp": 9,
   "tpm": 10,
   "xtpm": 7.68,
   "fgm": 42,
   "xfgm": 38.3,
   "fga": 72
  },
  "Donovan Mitchell": {
   "gp": 11,
   "tpm": 30,
   "xtpm": 27.28,
   "fgm": 86,
   "xfgm": 81.08,
   "fga": 179
  },
  "Dorian Finney-Smith": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 1.07,
   "fgm": 1,
   "xfgm": 1.07,
   "fga": 3
  },
  "Drake Powell": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 0.79,
   "fga": 2
  },
  "Draymond Green": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 3.51,
   "fgm": 10,
   "xfgm": 12.98,
   "fga": 27
  },
  "Dru Smith": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 2.09,
   "fgm": 4,
   "xfgm": 3.63,
   "fga": 9
  },
  "Duncan Robinson": {
   "gp": 10,
   "tpm": 42,
   "xtpm": 32.31,
   "fgm": 55,
   "xfgm": 46.07,
   "fga": 118
  },
  "Duop Reath": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 2.82,
   "fgm": 7,
   "xfgm": 5.46,
   "fga": 12
  },
  "Dylan Cardwell": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 7.27,
   "fga": 12
  },
  "Dylan Harper": {
   "gp": 11,
   "tpm": 12,
   "xtpm": 12.62,
   "fgm": 76,
   "xfgm": 74.86,
   "fga": 149
  },
  "Dyson Daniels": {
   "gp": 12,
   "tpm": 2,
   "xtpm": 5.63,
   "fgm": 52,
   "xfgm": 56.43,
   "fga": 108
  },
  "Ebuka Okorie": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 4,
   "xfgm": 6.33,
   "fga": 12
  },
  "Egor Dëmin": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 7.36,
   "fgm": 9,
   "xfgm": 11.95,
   "fga": 29
  },
  "Elijah Harkless": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Emanuel Sharp": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 10.87,
   "fgm": 17,
   "xfgm": 16.9,
   "fga": 44
  },
  "Evan Mobley": {
   "gp": 11,
   "tpm": 23,
   "xtpm": 16.13,
   "fgm": 72,
   "xfgm": 64.47,
   "fga": 129
  },
  "Felix Okpara": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 1.1,
   "fga": 2
  },
  "Franz Wagner": {
   "gp": 9,
   "tpm": 10,
   "xtpm": 15.22,
   "fgm": 70,
   "xfgm": 77.48,
   "fga": 159
  },
  "Fred VanVleet": {
   "gp": 9,
   "tpm": 25,
   "xtpm": 23.86,
   "fgm": 40,
   "xfgm": 37.19,
   "fga": 98
  },
  "GG Jackson": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 8.5,
   "fgm": 21,
   "xfgm": 26.51,
   "fga": 56
  },
  "Gary Payton II": {
   "gp": 10,
   "tpm": 4,
   "xtpm": 6.33,
   "fgm": 22,
   "xfgm": 22.84,
   "fga": 47
  },
  "Gary Trent Jr.": {
   "gp": 2,
   "tpm": 2,
   "xtpm": 1.4,
   "fgm": 2,
   "xfgm": 1.8,
   "fga": 5
  },
  "Georges Niang": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 14.97,
   "fgm": 36,
   "xfgm": 30.98,
   "fga": 74
  },
  "Giannis Antetokounmpo": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 8.73,
   "fgm": 107,
   "xfgm": 100.16,
   "fga": 189
  },
  "Goga Bitadze": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 9.47,
   "fga": 15
  },
  "Gradey Dick": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 5.33,
   "fgm": 23,
   "xfgm": 22.44,
   "fga": 44
  },
  "Graham Ike": {
   "gp": 8,
   "tpm": 4,
   "xtpm": 1.75,
   "fgm": 15,
   "xfgm": 15.8,
   "fga": 29
  },
  "Grayson Allen": {
   "gp": 11,
   "tpm": 38,
   "xtpm": 28.38,
   "fgm": 48,
   "xfgm": 40.03,
   "fga": 104
  },
  "Gui Santos": {
   "gp": 8,
   "tpm": 4,
   "xtpm": 4.56,
   "fgm": 16,
   "xfgm": 17.55,
   "fga": 36
  },
  "Hannes Steinbach": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 9.91,
   "fga": 16
  },
  "Harrison Barnes": {
   "gp": 9,
   "tpm": 10,
   "xtpm": 9.54,
   "fgm": 15,
   "xfgm": 13.94,
   "fga": 35
  },
  "Herbert Jones": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 9.96,
   "fgm": 27,
   "xfgm": 33.01,
   "fga": 69
  },
  "Hugo González": {
   "gp": 10,
   "tpm": 3,
   "xtpm": 6.05,
   "fgm": 13,
   "xfgm": 15.09,
   "fga": 31
  },
  "Immanuel Quickley": {
   "gp": 8,
   "tpm": 21,
   "xtpm": 22.11,
   "fgm": 45,
   "xfgm": 44.27,
   "fga": 110
  },
  "Isaac Jones": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 1,
   "xfgm": 1.03,
   "fga": 2
  },
  "Isaac Okoro": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 6.8,
   "fgm": 14,
   "xfgm": 18.25,
   "fga": 37
  },
  "Isaiah Collier": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 2.79,
   "fgm": 22,
   "xfgm": 24.69,
   "fga": 51
  },
  "Isaiah Crawford": {
   "gp": 7,
   "tpm": 4,
   "xtpm": 2.82,
   "fgm": 5,
   "xfgm": 3.48,
   "fga": 9
  },
  "Isaiah Evans": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 1.07,
   "fgm": 0,
   "xfgm": 1.07,
   "fga": 3
  },
  "Isaiah Hartenstein": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 28,
   "xfgm": 33.91,
   "fga": 63
  },
  "Isaiah Jackson": {
   "gp": 8,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 30,
   "xfgm": 29.91,
   "fga": 52
  },
  "Isaiah Joe": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 4.54,
   "fgm": 7,
   "xfgm": 7.3,
   "fga": 19
  },
  "Isaiah Stewart": {
   "gp": 7,
   "tpm": 8,
   "xtpm": 4.93,
   "fgm": 32,
   "xfgm": 24.49,
   "fga": 48
  },
  "Ivica Zubac": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 21,
   "xfgm": 21.35,
   "fga": 37
  },
  "Ja Morant": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 4.91,
   "fgm": 26,
   "xfgm": 22.03,
   "fga": 48
  },
  "Ja'Kobe Walter": {
   "gp": 10,
   "tpm": 21,
   "xtpm": 22.63,
   "fgm": 36,
   "xfgm": 38.15,
   "fga": 93
  },
  "Ja'Kobi Gillespie": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 2,
   "xfgm": 1.71,
   "fga": 4
  },
  "Jabari Smith Jr.": {
   "gp": 11,
   "tpm": 30,
   "xtpm": 23.51,
   "fgm": 66,
   "xfgm": 57.13,
   "fga": 131
  },
  "Jabari Walker": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 2.44,
   "fgm": 14,
   "xfgm": 14.34,
   "fga": 25
  },
  "Jaden Akins": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Jaden Bradley": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 3.52,
   "fga": 7
  },
  "Jaden Hardy": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 2.79,
   "fgm": 1,
   "xfgm": 3.64,
   "fga": 10
  },
  "Jaden McDaniels": {
   "gp": 11,
   "tpm": 16,
   "xtpm": 17.53,
   "fgm": 77,
   "xfgm": 71.07,
   "fga": 150
  },
  "Jae'Sean Tate": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 2.74,
   "fga": 5
  },
  "Jahmai Mashack": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.88,
   "fga": 2
  },
  "Jaime Jaquez Jr.": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 14.22,
   "fgm": 56,
   "xfgm": 56.76,
   "fga": 116
  },
  "Jake LaRavia": {
   "gp": 11,
   "tpm": 12,
   "xtpm": 7.82,
   "fgm": 24,
   "xfgm": 22.55,
   "fga": 46
  },
  "Jakob Poeltl": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 31,
   "xfgm": 27.07,
   "fga": 48
  },
  "Jalen Brunson": {
   "gp": 9,
   "tpm": 25,
   "xtpm": 23.79,
   "fgm": 79,
   "xfgm": 81.34,
   "fga": 187
  },
  "Jalen Duren": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 10,
   "xfgm": 9.24,
   "fga": 17
  },
  "Jalen Green": {
   "gp": 9,
   "tpm": 6,
   "xtpm": 10.17,
   "fgm": 41,
   "xfgm": 49.56,
   "fga": 101
  },
  "Jalen Johnson": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 13.64,
   "fgm": 62,
   "xfgm": 68.24,
   "fga": 138
  },
  "Jalen Pickett": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 3,
   "xfgm": 2.21,
   "fga": 5
  },
  "Jalen Slawson": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 3.54,
   "fgm": 10,
   "xfgm": 10.52,
   "fga": 22
  },
  "Jalen Smith": {
   "gp": 9,
   "tpm": 13,
   "xtpm": 15.48,
   "fgm": 41,
   "xfgm": 39.39,
   "fga": 83
  },
  "Jalen Suggs": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 3.24,
   "fgm": 10,
   "xfgm": 13.23,
   "fga": 28
  },
  "Jalen Williams": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.14,
   "fgm": 15,
   "xfgm": 19.14,
   "fga": 39
  },
  "Jamal Cain": {
   "gp": 9,
   "tpm": 10,
   "xtpm": 11.73,
   "fgm": 22,
   "xfgm": 20.93,
   "fga": 53
  },
  "Jamal Murray": {
   "gp": 9,
   "tpm": 36,
   "xtpm": 24.91,
   "fgm": 75,
   "xfgm": 66.09,
   "fga": 152
  },
  "Jamal Shead": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 11.59,
   "fgm": 24,
   "xfgm": 29.35,
   "fga": 66
  },
  "Jamaree Bouyea": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 0.37,
   "fgm": 5,
   "xfgm": 2.54,
   "fga": 5
  },
  "James Harden": {
   "gp": 11,
   "tpm": 27,
   "xtpm": 26.56,
   "fgm": 48,
   "xfgm": 56.99,
   "fga": 132
  },
  "James Wiseman": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 5.91,
   "fga": 10
  },
  "Jamison Battle": {
   "gp": 10,
   "tpm": 21,
   "xtpm": 17.25,
   "fgm": 30,
   "xfgm": 26.02,
   "fga": 64
  },
  "Jarace Walker": {
   "gp": 11,
   "tpm": 13,
   "xtpm": 14.8,
   "fgm": 29,
   "xfgm": 35.4,
   "fga": 79
  },
  "Jared McCain": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 20.09,
   "fgm": 46,
   "xfgm": 48.53,
   "fga": 110
  },
  "Jaren Jackson Jr.": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 4.93,
   "fgm": 22,
   "xfgm": 20.1,
   "fga": 44
  },
  "Jarred Vanderbilt": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 6,
   "xfgm": 4.63,
   "fga": 7
  },
  "Jarrett Allen": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 1.4,
   "fgm": 46,
   "xfgm": 41.16,
   "fga": 71
  },
  "Jase Richardson": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 10.33,
   "fgm": 21,
   "xfgm": 29.44,
   "fga": 66
  },
  "Javon Small": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 3.49,
   "fgm": 8,
   "xfgm": 8.99,
   "fga": 21
  },
  "Javonte Green": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 13.1,
   "fgm": 19,
   "xfgm": 20.34,
   "fga": 49
  },
  "Jaxson Hayes": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 29,
   "xfgm": 25.88,
   "fga": 46
  },
  "Jay Huff": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 9.89,
   "fgm": 24,
   "xfgm": 22.44,
   "fga": 49
  },
  "Jaylen Brown": {
   "gp": 10,
   "tpm": 20,
   "xtpm": 17.9,
   "fgm": 84,
   "xfgm": 84.21,
   "fga": 176
  },
  "Jaylen Clark": {
   "gp": 10,
   "tpm": 8,
   "xtpm": 7.59,
   "fgm": 15,
   "xfgm": 15.69,
   "fga": 37
  },
  "Jaylen Wells": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 17.02,
   "fgm": 40,
   "xfgm": 33.14,
   "fga": 78
  },
  "Jaylin Sellers": {
   "gp": 5,
   "tpm": 6,
   "xtpm": 5.66,
   "fgm": 7,
   "xfgm": 8.49,
   "fga": 21
  },
  "Jaylin Williams": {
   "gp": 7,
   "tpm": 5,
   "xtpm": 8.54,
   "fgm": 6,
   "xfgm": 12.03,
   "fga": 30
  },
  "Jaylon Tyson": {
   "gp": 5,
   "tpm": 5,
   "xtpm": 7.8,
   "fgm": 16,
   "xfgm": 18.09,
   "fga": 39
  },
  "Jayson Kent": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 1.4,
   "fgm": 2,
   "xfgm": 4.92,
   "fga": 10
  },
  "Jayson Tatum": {
   "gp": 9,
   "tpm": 21,
   "xtpm": 23.49,
   "fgm": 74,
   "xfgm": 80.74,
   "fga": 176
  },
  "Jerami Grant": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 13.59,
   "fgm": 36,
   "xfgm": 38.3,
   "fga": 83
  },
  "Jeremiah Fears": {
   "gp": 11,
   "tpm": 12,
   "xtpm": 15.46,
   "fgm": 66,
   "xfgm": 74.03,
   "fga": 148
  },
  "Jericho Sims": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 1,
   "xfgm": 1.47,
   "fga": 3
  },
  "Jett Howard": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.42,
   "fgm": 4,
   "xfgm": 2.93,
   "fga": 7
  },
  "Jevon Carter": {
   "gp": 5,
   "tpm": 6,
   "xtpm": 6.33,
   "fgm": 7,
   "xfgm": 8.28,
   "fga": 22
  },
  "Joan Beringer": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 25,
   "xfgm": 27.32,
   "fga": 43
  },
  "Jock Landale": {
   "gp": 8,
   "tpm": 4,
   "xtpm": 6.4,
   "fgm": 19,
   "xfgm": 20.24,
   "fga": 41
  },
  "Joel Embiid": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 10.47,
   "fgm": 52,
   "xfgm": 64.47,
   "fga": 137
  },
  "John Collins": {
   "gp": 10,
   "tpm": 10,
   "xtpm": 9.24,
   "fgm": 44,
   "xfgm": 44.52,
   "fga": 88
  },
  "John Tonje": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 1,
   "xfgm": 0.7,
   "fga": 2
  },
  "Jonathan Kuminga": {
   "gp": 11,
   "tpm": 20,
   "xtpm": 17.69,
   "fgm": 48,
   "xfgm": 52.56,
   "fga": 110
  },
  "Jonathan Mogbo": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 2.16,
   "fgm": 6,
   "xfgm": 8.55,
   "fga": 17
  },
  "Jordan Clarkson": {
   "gp": 8,
   "tpm": 6,
   "xtpm": 3.21,
   "fgm": 22,
   "xfgm": 19.68,
   "fga": 39
  },
  "Jordan Goodwin": {
   "gp": 5,
   "tpm": 9,
   "xtpm": 8.43,
   "fgm": 15,
   "xfgm": 13.9,
   "fga": 34
  },
  "Jordan Hawkins": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 3.54,
   "fgm": 7,
   "xfgm": 6.93,
   "fga": 17
  },
  "Jordan McLaughlin": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 1.79,
   "fgm": 3,
   "xfgm": 7.95,
   "fga": 16
  },
  "Jordan Poole": {
   "gp": 5,
   "tpm": 4,
   "xtpm": 5.96,
   "fgm": 5,
   "xfgm": 10.96,
   "fga": 26
  },
  "Jordan Walsh": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 8.64,
   "fgm": 15,
   "xfgm": 18.48,
   "fga": 40
  },
  "Jose Alvarado": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.44,
   "fgm": 4,
   "xfgm": 6.63,
   "fga": 14
  },
  "Josh Dix": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 4.21,
   "fgm": 7,
   "xfgm": 9.24,
   "fga": 21
  },
  "Josh Giddey": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 11.22,
   "fgm": 35,
   "xfgm": 41.13,
   "fga": 84
  },
  "Josh Green": {
   "gp": 8,
   "tpm": 5,
   "xtpm": 5.38,
   "fgm": 11,
   "xfgm": 12.36,
   "fga": 27
  },
  "Josh Hart": {
   "gp": 7,
   "tpm": 13,
   "xtpm": 13.34,
   "fgm": 22,
   "xfgm": 24.28,
   "fga": 57
  },
  "Josh Minott": {
   "gp": 7,
   "tpm": 5,
   "xtpm": 7.4,
   "fgm": 11,
   "xfgm": 11.81,
   "fga": 28
  },
  "Josh Okogie": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 4.61,
   "fgm": 9,
   "xfgm": 12.27,
   "fga": 28
  },
  "Joshua Jefferson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 0,
   "xfgm": 1.82,
   "fga": 4
  },
  "Jrue Holiday": {
   "gp": 9,
   "tpm": 21,
   "xtpm": 17.25,
   "fgm": 39,
   "xfgm": 31.55,
   "fga": 76
  },
  "Julian Champagnie": {
   "gp": 11,
   "tpm": 31,
   "xtpm": 25.42,
   "fgm": 36,
   "xfgm": 30.04,
   "fga": 81
  },
  "Julian Reese": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 2.2,
   "fga": 4
  },
  "Julius Randle": {
   "gp": 10,
   "tpm": 15,
   "xtpm": 15.48,
   "fgm": 64,
   "xfgm": 67.67,
   "fga": 143
  },
  "Justin Champagnie": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.47,
   "fgm": 12,
   "xfgm": 10.84,
   "fga": 20
  },
  "Justin Edwards": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 2.02,
   "fga": 4
  },
  "Karim López": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 1,
   "xfgm": 1.03,
   "fga": 2
  },
  "Karl-Anthony Towns": {
   "gp": 9,
   "tpm": 17,
   "xtpm": 13.62,
   "fgm": 70,
   "xfgm": 64.93,
   "fga": 124
  },
  "Karlo Matković": {
   "gp": 10,
   "tpm": 16,
   "xtpm": 11.5,
   "fgm": 34,
   "xfgm": 26.92,
   "fga": 56
  },
  "Kasparas Jakučionis": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 8.43,
   "fgm": 19,
   "xfgm": 21.64,
   "fga": 45
  },
  "Kawhi Leonard": {
   "gp": 2,
   "tpm": 4,
   "xtpm": 4.89,
   "fgm": 12,
   "xfgm": 17.18,
   "fga": 37
  },
  "Keaton Wagler": {
   "gp": 9,
   "tpm": 16,
   "xtpm": 14.39,
   "fgm": 25,
   "xfgm": 30.44,
   "fga": 73
  },
  "Keegan Murray": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 3.58,
   "fgm": 8,
   "xfgm": 11.49,
   "fga": 27
  },
  "Kel'el Ware": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 10.52,
   "fgm": 33,
   "xfgm": 43.31,
   "fga": 83
  },
  "Keldon Johnson": {
   "gp": 11,
   "tpm": 2,
   "xtpm": 4.96,
   "fgm": 33,
   "xfgm": 41.72,
   "fga": 77
  },
  "Kelly Oubre Jr.": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 11.66,
   "fgm": 31,
   "xfgm": 32.29,
   "fga": 70
  },
  "Kenrich Williams": {
   "gp": 10,
   "tpm": 14,
   "xtpm": 10.57,
   "fgm": 24,
   "xfgm": 22.3,
   "fga": 51
  },
  "Kentavious Caldwell-Pope": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 10.96,
   "fgm": 21,
   "xfgm": 17.97,
   "fga": 45
  },
  "Keon Ellis": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 10.2,
   "fgm": 15,
   "xfgm": 18.71,
   "fga": 45
  },
  "Kevin Durant": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 14.8,
   "fgm": 70,
   "xfgm": 61.7,
   "fga": 141
  },
  "Kevin Huerter": {
   "gp": 10,
   "tpm": 16,
   "xtpm": 15.85,
   "fgm": 33,
   "xfgm": 30.86,
   "fga": 75
  },
  "Kevon Looney": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 3.49,
   "fga": 6
  },
  "Keyonte George": {
   "gp": 10,
   "tpm": 18,
   "xtpm": 20.65,
   "fgm": 70,
   "xfgm": 66.76,
   "fga": 156
  },
  "Khaman Maluach": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 2.14,
   "fgm": 28,
   "xfgm": 26.8,
   "fga": 47
  },
  "Khris Middleton": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 1.77,
   "fgm": 3,
   "xfgm": 3.72,
   "fga": 9
  },
  "Kingston Flemings": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 7.33,
   "fgm": 38,
   "xfgm": 35.78,
   "fga": 73
  },
  "Klay Thompson": {
   "gp": 10,
   "tpm": 40,
   "xtpm": 32.77,
   "fgm": 51,
   "xfgm": 41.24,
   "fga": 113
  },
  "Koa Peat": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 4.18,
   "fga": 7
  },
  "Kobe Brown": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 4.24,
   "fgm": 10,
   "xfgm": 10.18,
   "fga": 23
  },
  "Kobe Sanders": {
   "gp": 9,
   "tpm": 16,
   "xtpm": 15.41,
   "fgm": 30,
   "xfgm": 30.69,
   "fga": 72
  },
  "Kon Knueppel": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.35,
   "fga": 1
  },
  "Kris Dunn": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 8.1,
   "fgm": 29,
   "xfgm": 27.91,
   "fga": 57
  },
  "Kris Murray": {
   "gp": 7,
   "tpm": 1,
   "xtpm": 4.33,
   "fgm": 3,
   "xfgm": 6.31,
   "fga": 15
  },
  "Kyle Anderson": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 6,
   "xfgm": 4.99,
   "fga": 11
  },
  "Kyle Filipowski": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 1.79,
   "fgm": 7,
   "xfgm": 10.15,
   "fga": 20
  },
  "Kyle Kuzma": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 18.04,
   "fgm": 47,
   "xfgm": 45.69,
   "fga": 97
  },
  "Kyrie Irving": {
   "gp": 9,
   "tpm": 30,
   "xtpm": 26.75,
   "fgm": 75,
   "xfgm": 65.41,
   "fga": 154
  },
  "Kyshawn George": {
   "gp": 11,
   "tpm": 24,
   "xtpm": 22.79,
   "fgm": 73,
   "xfgm": 68.33,
   "fga": 150
  },
  "LJ Cryer": {
   "gp": 8,
   "tpm": 7,
   "xtpm": 5.59,
   "fgm": 10,
   "xfgm": 9.67,
   "fga": 25
  },
  "LaMelo Ball": {
   "gp": 11,
   "tpm": 37,
   "xtpm": 33.73,
   "fgm": 70,
   "xfgm": 64.58,
   "fga": 156
  },
  "Labaron Philon Jr.": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 2.79,
   "fgm": 6,
   "xfgm": 6.53,
   "fga": 16
  },
  "Landry Shamet": {
   "gp": 9,
   "tpm": 20,
   "xtpm": 16.99,
   "fgm": 27,
   "xfgm": 25.74,
   "fga": 63
  },
  "Larry Nance Jr.": {
   "gp": 10,
   "tpm": 10,
   "xtpm": 9.31,
   "fgm": 16,
   "xfgm": 15.85,
   "fga": 37
  },
  "Lauri Markkanen": {
   "gp": 8,
   "tpm": 29,
   "xtpm": 25.61,
   "fgm": 44,
   "xfgm": 46.25,
   "fga": 113
  },
  "Lawson Lovering": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "LeBron James": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 11.2,
   "fgm": 53,
   "xfgm": 60.78,
   "fga": 120
  },
  "Leaky Black": {
   "gp": 6,
   "tpm": 10,
   "xtpm": 7.75,
   "fgm": 12,
   "xfgm": 9.51,
   "fga": 25
  },
  "Leonard Miller": {
   "gp": 8,
   "tpm": 5,
   "xtpm": 9.5,
   "fgm": 23,
   "xfgm": 25.96,
   "fga": 53
  },
  "Liam McNeeley": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 4.21,
   "fgm": 7,
   "xfgm": 10.75,
   "fga": 24
  },
  "Luguentz Dort": {
   "gp": 12,
   "tpm": 21,
   "xtpm": 21.04,
   "fgm": 37,
   "xfgm": 45.64,
   "fga": 101
  },
  "Luka Dončić": {
   "gp": 10,
   "tpm": 55,
   "xtpm": 47.23,
   "fgm": 121,
   "xfgm": 98.52,
   "fga": 243
  },
  "Luka Garza": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 8.54,
   "fgm": 22,
   "xfgm": 23.08,
   "fga": 48
  },
  "Luke Kennard": {
   "gp": 8,
   "tpm": 16,
   "xtpm": 12.01,
   "fgm": 20,
   "xfgm": 14.84,
   "fga": 40
  },
  "Luke Kornet": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 12,
   "xfgm": 15.16,
   "fga": 25
  },
  "Malachi Smith": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Malevy Leons": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 3.43,
   "fga": 7
  },
  "Malik Monk": {
   "gp": 9,
   "tpm": 11,
   "xtpm": 11.57,
   "fgm": 26,
   "xfgm": 30.98,
   "fga": 72
  },
  "Maliq Brown": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Marcus Sasser": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 8.52,
   "fgm": 20,
   "xfgm": 17.24,
   "fga": 43
  },
  "Marcus Smart": {
   "gp": 8,
   "tpm": 14,
   "xtpm": 13.45,
   "fgm": 23,
   "xfgm": 22.19,
   "fga": 55
  },
  "Mario Hezonja": {
   "gp": 11,
   "tpm": 14,
   "xtpm": 17.32,
   "fgm": 38,
   "xfgm": 40.65,
   "fga": 89
  },
  "Marvin Bagley III": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 1.4,
   "fgm": 19,
   "xfgm": 18.1,
   "fga": 33
  },
  "Matas Buzelis": {
   "gp": 9,
   "tpm": 13,
   "xtpm": 15.5,
   "fgm": 37,
   "xfgm": 39.62,
   "fga": 86
  },
  "Matisse Thybulle": {
   "gp": 12,
   "tpm": 20,
   "xtpm": 18.06,
   "fgm": 28,
   "xfgm": 25.99,
   "fga": 65
  },
  "Max Christie": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 14.85,
   "fgm": 20,
   "xfgm": 25.16,
   "fga": 61
  },
  "Max Strus": {
   "gp": 3,
   "tpm": 7,
   "xtpm": 7.75,
   "fgm": 9,
   "xfgm": 10.83,
   "fga": 27
  },
  "Meleek Thomas": {
   "gp": 8,
   "tpm": 22,
   "xtpm": 16.15,
   "fgm": 39,
   "xfgm": 36.46,
   "fga": 83
  },
  "Micah Peavy": {
   "gp": 6,
   "tpm": 4,
   "xtpm": 3.96,
   "fgm": 10,
   "xfgm": 12.03,
   "fga": 26
  },
  "Micah Potter": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.75,
   "fgm": 6,
   "xfgm": 4.38,
   "fga": 11
  },
  "Michael Porter Jr.": {
   "gp": 10,
   "tpm": 35,
   "xtpm": 32.96,
   "fgm": 70,
   "xfgm": 65.77,
   "fga": 155
  },
  "Mikal Bridges": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 12.08,
   "fgm": 23,
   "xfgm": 30.52,
   "fga": 70
  },
  "Mike Conley": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 2.12,
   "fgm": 4,
   "xfgm": 2.12,
   "fga": 6
  },
  "Mikel Brown Jr.": {
   "gp": 7,
   "tpm": 14,
   "xtpm": 15.76,
   "fgm": 28,
   "xfgm": 34.8,
   "fga": 81
  },
  "Miles Bridges": {
   "gp": 9,
   "tpm": 17,
   "xtpm": 19.04,
   "fgm": 53,
   "xfgm": 52.16,
   "fga": 116
  },
  "Miles McBride": {
   "gp": 9,
   "tpm": 16,
   "xtpm": 13.06,
   "fgm": 20,
   "xfgm": 18.62,
   "fga": 48
  },
  "Mitchell Robinson": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 26,
   "xfgm": 24.68,
   "fga": 38
  },
  "Mo Bamba": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 20,
   "xfgm": 16.74,
   "fga": 27
  },
  "Mohamed Diawara": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 2.84,
   "fgm": 3,
   "xfgm": 4.16,
   "fga": 10
  },
  "Morez Johnson Jr.": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 3.14,
   "fgm": 29,
   "xfgm": 29.93,
   "fga": 56
  },
  "Moritz Wagner": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 6.68,
   "fgm": 36,
   "xfgm": 35.32,
   "fga": 65
  },
  "Moussa Cissé": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.08,
   "fga": 5
  },
  "Moussa Diabaté": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 33,
   "xfgm": 32.6,
   "fga": 52
  },
  "Myles Turner": {
   "gp": 10,
   "tpm": 12,
   "xtpm": 15.83,
   "fgm": 27,
   "xfgm": 33.17,
   "fga": 78
  },
  "Myron Gardner": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Naji Marshall": {
   "gp": 8,
   "tpm": 7,
   "xtpm": 8.47,
   "fgm": 37,
   "xfgm": 35.17,
   "fga": 77
  },
  "Nate Ament": {
   "gp": 8,
   "tpm": 8,
   "xtpm": 7.12,
   "fgm": 23,
   "xfgm": 23.44,
   "fga": 49
  },
  "Naz Reid": {
   "gp": 11,
   "tpm": 27,
   "xtpm": 26.05,
   "fgm": 74,
   "xfgm": 81.0,
   "fga": 180
  },
  "Neemias Queta": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 1.07,
   "fgm": 36,
   "xfgm": 37.59,
   "fga": 64
  },
  "Nic Claxton": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.76,
   "fga": 3
  },
  "Nick Martinelli": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.05,
   "fgm": 7,
   "xfgm": 5.23,
   "fga": 11
  },
  "Nick Richards": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 1.45,
   "fga": 3
  },
  "Nickeil Alexander-Walker": {
   "gp": 12,
   "tpm": 47,
   "xtpm": 44.41,
   "fgm": 85,
   "xfgm": 88.27,
   "fga": 204
  },
  "Nikola Jokić": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 13.99,
   "fgm": 82,
   "xfgm": 78.06,
   "fga": 168
  },
  "Nikola Jović": {
   "gp": 7,
   "tpm": 1,
   "xtpm": 3.56,
   "fgm": 6,
   "xfgm": 9.25,
   "fga": 20
  },
  "Nikola Vučević": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 4.59,
   "fgm": 9,
   "xfgm": 9.86,
   "fga": 24
  },
  "Nique Clifford": {
   "gp": 8,
   "tpm": 1,
   "xtpm": 2.82,
   "fgm": 6,
   "xfgm": 7.09,
   "fga": 17
  },
  "Noa Essengue": {
   "gp": 8,
   "tpm": 3,
   "xtpm": 6.01,
   "fgm": 14,
   "xfgm": 18.09,
   "fga": 37
  },
  "Noah Clowney": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 8.12,
   "fgm": 16,
   "xfgm": 19.57,
   "fga": 43
  },
  "Nolan Traore": {
   "gp": 10,
   "tpm": 18,
   "xtpm": 13.73,
   "fgm": 49,
   "xfgm": 43.37,
   "fga": 95
  },
  "Norchad Omier": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.35,
   "fga": 1
  },
  "Norman Powell": {
   "gp": 8,
   "tpm": 17,
   "xtpm": 19.23,
   "fgm": 41,
   "xfgm": 43.95,
   "fga": 103
  },
  "OG Anunoby": {
   "gp": 9,
   "tpm": 17,
   "xtpm": 20.6,
   "fgm": 41,
   "xfgm": 51.56,
   "fga": 108
  },
  "Obi Toppin": {
   "gp": 8,
   "tpm": 14,
   "xtpm": 13.87,
   "fgm": 40,
   "xfgm": 37.0,
   "fga": 77
  },
  "Olivier-Maxence Prosper": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 1.09,
   "fgm": 6,
   "xfgm": 6.6,
   "fga": 12
  },
  "Onyeka Okongwu": {
   "gp": 12,
   "tpm": 18,
   "xtpm": 19.3,
   "fgm": 62,
   "xfgm": 60.02,
   "fga": 126
  },
  "Oscar Tshiebwe": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 5.73,
   "fga": 9
  },
  "Oso Ighodaro": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 20,
   "xfgm": 18.27,
   "fga": 32
  },
  "Ousmane Dieng": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 3.91,
   "fgm": 8,
   "xfgm": 9.19,
   "fga": 20
  },
  "P.J. Washington": {
   "gp": 11,
   "tpm": 26,
   "xtpm": 25.84,
   "fgm": 52,
   "xfgm": 55.16,
   "fga": 127
  },
  "PJ Hall": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 0,
   "xfgm": 1.05,
   "fga": 3
  },
  "Pacôme Dadiet": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 2,
   "xfgm": 2.36,
   "fga": 4
  },
  "Paolo Banchero": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 2.12,
   "fgm": 16,
   "xfgm": 10.79,
   "fga": 23
  },
  "Pascal Siakam": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 16.95,
   "fgm": 85,
   "xfgm": 76.55,
   "fga": 163
  },
  "Pat Spencer": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 2.87,
   "fga": 6
  },
  "Patrick Williams": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 2.79,
   "fgm": 4,
   "xfgm": 6.1,
   "fga": 13
  },
  "Paul George": {
   "gp": 9,
   "tpm": 31,
   "xtpm": 25.63,
   "fgm": 66,
   "xfgm": 60.5,
   "fga": 142
  },
  "Paul Reed": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 2.84,
   "fgm": 48,
   "xfgm": 44.64,
   "fga": 85
  },
  "Payton Pritchard": {
   "gp": 10,
   "tpm": 21,
   "xtpm": 20.65,
   "fgm": 41,
   "xfgm": 41.63,
   "fga": 101
  },
  "Pelle Larsson": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 10.15,
   "fgm": 32,
   "xfgm": 32.37,
   "fga": 70
  },
  "Peyton Watson": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 13.17,
   "fgm": 39,
   "xfgm": 46.53,
   "fga": 96
  },
  "Precious Achiuwa": {
   "gp": 10,
   "tpm": 3,
   "xtpm": 3.19,
   "fgm": 46,
   "xfgm": 43.82,
   "fga": 86
  },
  "Quentin Grimes": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 11.62,
   "fgm": 28,
   "xfgm": 30.2,
   "fga": 65
  },
  "Quenton Jackson": {
   "gp": 11,
   "tpm": 12,
   "xtpm": 11.94,
   "fgm": 39,
   "xfgm": 37.85,
   "fga": 80
  },
  "Quinten Post": {
   "gp": 8,
   "tpm": 5,
   "xtpm": 6.7,
   "fgm": 16,
   "xfgm": 15.45,
   "fga": 34
  },
  "RJ Barrett": {
   "gp": 10,
   "tpm": 15,
   "xtpm": 18.95,
   "fgm": 80,
   "xfgm": 87.68,
   "fga": 175
  },
  "Rasheer Fleming": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.75,
   "fgm": 1,
   "xfgm": 3.95,
   "fga": 9
  },
  "RayJ Dennis": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 1.54,
   "fga": 4
  },
  "Rayan Rupert": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.66,
   "fga": 1
  },
  "Reece Beekman": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Reed Sheppard": {
   "gp": 8,
   "tpm": 18,
   "xtpm": 20.0,
   "fgm": 28,
   "xfgm": 29.55,
   "fga": 75
  },
  "Riley Minix": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.82,
   "fgm": 4,
   "xfgm": 4.58,
   "fga": 11
  },
  "Robert Williams III": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 23,
   "xfgm": 22.02,
   "fga": 36
  },
  "Rocco Zikarsky": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Ron Harper Jr.": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 2.16,
   "fgm": 3,
   "xfgm": 4.14,
   "fga": 10
  },
  "Ronald Holland II": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 8.19,
   "fgm": 18,
   "xfgm": 22.27,
   "fga": 49
  },
  "Royce O'Neale": {
   "gp": 11,
   "tpm": 14,
   "xtpm": 16.85,
   "fgm": 19,
   "xfgm": 20.82,
   "fga": 54
  },
  "Rudy Gobert": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 28,
   "xfgm": 33.64,
   "fga": 56
  },
  "Rui Hachimura": {
   "gp": 7,
   "tpm": 15,
   "xtpm": 15.48,
   "fgm": 37,
   "xfgm": 42.91,
   "fga": 96
  },
  "Ryan Conwell": {
   "gp": 8,
   "tpm": 8,
   "xtpm": 7.03,
   "fgm": 11,
   "xfgm": 10.51,
   "fga": 28
  },
  "Ryan Dunn": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 5.8,
   "fgm": 18,
   "xfgm": 19.0,
   "fga": 39
  },
  "Ryan Kalkbrenner": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 21,
   "xfgm": 18.51,
   "fga": 29
  },
  "Ryan Nembhard": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 2.52,
   "fga": 5
  },
  "Ryan Rollins": {
   "gp": 10,
   "tpm": 15,
   "xtpm": 15.83,
   "fgm": 40,
   "xfgm": 47.86,
   "fga": 104
  },
  "Saddiq Bey": {
   "gp": 11,
   "tpm": 19,
   "xtpm": 19.41,
   "fgm": 57,
   "xfgm": 54.79,
   "fga": 124
  },
  "Sam Hauser": {
   "gp": 10,
   "tpm": 21,
   "xtpm": 18.34,
   "fgm": 28,
   "xfgm": 23.56,
   "fga": 62
  },
  "Sam Merrill": {
   "gp": 9,
   "tpm": 14,
   "xtpm": 15.2,
   "fgm": 22,
   "xfgm": 22.87,
   "fga": 57
  },
  "Sandro Mamukelashvili": {
   "gp": 12,
   "tpm": 16,
   "xtpm": 15.13,
   "fgm": 42,
   "xfgm": 39.74,
   "fga": 88
  },
  "Santi Aldama": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.19,
   "fgm": 11,
   "xfgm": 9.57,
   "fga": 20
  },
  "Scoot Henderson": {
   "gp": 9,
   "tpm": 6,
   "xtpm": 12.76,
   "fgm": 23,
   "xfgm": 29.56,
   "fga": 70
  },
  "Scottie Barnes": {
   "gp": 8,
   "tpm": 4,
   "xtpm": 9.22,
   "fgm": 75,
   "xfgm": 76.03,
   "fga": 158
  },
  "Scotty Pippen Jr.": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 3.17,
   "fgm": 11,
   "xfgm": 11.07,
   "fga": 26
  },
  "Sergio de Larrea": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 1.75,
   "fgm": 9,
   "xfgm": 7.61,
   "fga": 18
  },
  "Shai Gilgeous-Alexander": {
   "gp": 10,
   "tpm": 27,
   "xtpm": 24.12,
   "fgm": 107,
   "xfgm": 102.8,
   "fga": 232
  },
  "Sidy Cissoko": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 8.57,
   "fgm": 17,
   "xfgm": 15.83,
   "fga": 36
  },
  "Simone Fontecchio": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 2.09,
   "fgm": 1,
   "xfgm": 2.5,
   "fga": 7
  },
  "Sion James": {
   "gp": 11,
   "tpm": 14,
   "xtpm": 18.53,
   "fgm": 24,
   "xfgm": 29.31,
   "fga": 71
  },
  "Spencer Jones": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 1.82,
   "fgm": 5,
   "xfgm": 4.02,
   "fga": 9
  },
  "Stephen Curry": {
   "gp": 9,
   "tpm": 42,
   "xtpm": 32.26,
   "fgm": 79,
   "xfgm": 64.23,
   "fga": 157
  },
  "Stephon Castle": {
   "gp": 11,
   "tpm": 22,
   "xtpm": 23.88,
   "fgm": 60,
   "xfgm": 70.31,
   "fga": 153
  },
  "Steven Adams": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.32,
   "fga": 2
  },
  "Svi Mykhailiuk": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 10.27,
   "fgm": 13,
   "xfgm": 20.26,
   "fga": 48
  },
  "T.J. McConnell": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 2.98,
   "fga": 7
  },
  "Tacko Fall": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Tari Eason": {
   "gp": 11,
   "tpm": 10,
   "xtpm": 13.52,
   "fgm": 41,
   "xfgm": 46.23,
   "fga": 95
  },
  "Tarris Reed Jr.": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 6.61,
   "fga": 11
  },
  "Taurean Prince": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 1,
   "xfgm": 1.05,
   "fga": 3
  },
  "Taylor Hendricks": {
   "gp": 5,
   "tpm": 4,
   "xtpm": 2.49,
   "fgm": 7,
   "xfgm": 5.57,
   "fga": 12
  },
  "Terance Mann": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 2.51,
   "fgm": 1,
   "xfgm": 4.02,
   "fga": 10
  },
  "Terrence Shannon Jr": {
   "gp": 8,
   "tpm": 13,
   "xtpm": 12.69,
   "fgm": 26,
   "xfgm": 28.65,
   "fga": 66
  },
  "Thomas Bryant": {
   "gp": 6,
   "tpm": 8,
   "xtpm": 6.28,
   "fgm": 15,
   "xfgm": 13.3,
   "fga": 30
  },
  "Tidjane Salaün": {
   "gp": 10,
   "tpm": 14,
   "xtpm": 12.38,
   "fgm": 23,
   "xfgm": 21.63,
   "fga": 50
  },
  "Tim Hardaway Jr.": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 13.34,
   "fgm": 14,
   "xfgm": 20.37,
   "fga": 52
  },
  "Tobe Awaka": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 2.42,
   "fga": 4
  },
  "Tobi Lawal": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 4,
   "xfgm": 3.69,
   "fga": 7
  },
  "Tolu Smith": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 3.31,
   "fga": 5
  },
  "Tony Bradley": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 2.42,
   "fga": 4
  },
  "Toumani Camara": {
   "gp": 9,
   "tpm": 28,
   "xtpm": 22.0,
   "fgm": 42,
   "xfgm": 33.0,
   "fga": 81
  },
  "Trae Young": {
   "gp": 11,
   "tpm": 21,
   "xtpm": 25.61,
   "fgm": 57,
   "xfgm": 60.81,
   "fga": 145
  },
  "Trayce Jackson-Davis": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 12,
   "xfgm": 10.13,
   "fga": 17
  },
  "Tre Johnson": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 18.65,
   "fgm": 34,
   "xfgm": 39.01,
   "fga": 97
  },
  "Tre Jones": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 2.82,
   "fgm": 31,
   "xfgm": 35.12,
   "fga": 63
  },
  "Tre Mann": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 2,
   "xfgm": 4.35,
   "fga": 8
  },
  "Trendon Watford": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 2.09,
   "fgm": 12,
   "xfgm": 12.45,
   "fga": 22
  },
  "Trevon Brazile": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 7.77,
   "fgm": 25,
   "xfgm": 22.53,
   "fga": 46
  },
  "Trey Lyles": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 11.99,
   "fgm": 24,
   "xfgm": 21.58,
   "fga": 51
  },
  "Trey Murphy III": {
   "gp": 9,
   "tpm": 20,
   "xtpm": 18.55,
   "fgm": 47,
   "xfgm": 45.72,
   "fga": 101
  },
  "Tristan Enaruna": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.77,
   "fgm": 3,
   "xfgm": 5.07,
   "fga": 10
  },
  "Tristan da Silva": {
   "gp": 9,
   "tpm": 32,
   "xtpm": 28.21,
   "fgm": 51,
   "xfgm": 45.05,
   "fga": 112
  },
  "Ty Jerome": {
   "gp": 9,
   "tpm": 25,
   "xtpm": 23.11,
   "fgm": 83,
   "xfgm": 68.71,
   "fga": 166
  },
  "Tyler Herro": {
   "gp": 10,
   "tpm": 31,
   "xtpm": 27.35,
   "fgm": 76,
   "xfgm": 74.33,
   "fga": 167
  },
  "Tyler Kolek": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 4.21,
   "fgm": 5,
   "xfgm": 7.95,
   "fga": 19
  },
  "Tyrese Haliburton": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 9.54,
   "fgm": 32,
   "xfgm": 26.81,
   "fga": 62
  },
  "Tyrese Maxey": {
   "gp": 11,
   "tpm": 28,
   "xtpm": 28.77,
   "fgm": 101,
   "xfgm": 98.78,
   "fga": 210
  },
  "Tyrese Proctor": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 7.43,
   "fgm": 21,
   "xfgm": 19.21,
   "fga": 43
  },
  "Tyus Jones": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 3.84,
   "fgm": 8,
   "xfgm": 9.5,
   "fga": 22
  },
  "VJ Edgecombe": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 17.27,
   "fgm": 52,
   "xfgm": 53.94,
   "fga": 113
  },
  "Victor Wembanyama": {
   "gp": 11,
   "tpm": 21,
   "xtpm": 22.72,
   "fgm": 119,
   "xfgm": 115.05,
   "fga": 225
  },
  "Vít Krejčí": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 5.26,
   "fgm": 6,
   "xfgm": 7.87,
   "fga": 20
  },
  "Walker Kessler": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 76,
   "xfgm": 68.73,
   "fga": 110
  },
  "Walter Clayton Jr.": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 10.5,
   "fgm": 25,
   "xfgm": 22.44,
   "fga": 53
  },
  "Wendell Carter Jr.": {
   "gp": 9,
   "tpm": 11,
   "xtpm": 8.12,
   "fgm": 46,
   "xfgm": 36.42,
   "fga": 73
  },
  "Will Richard": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 7.45,
   "fgm": 19,
   "xfgm": 18.39,
   "fga": 40
  },
  "Will Riley": {
   "gp": 9,
   "tpm": 1,
   "xtpm": 2.84,
   "fgm": 6,
   "xfgm": 6.99,
   "fga": 15
  },
  "Yang Hansen": {
   "gp": 6,
   "tpm": 5,
   "xtpm": 3.14,
   "fgm": 8,
   "xfgm": 7.54,
   "fga": 17
  },
  "Yaxel Lendeborg": {
   "gp": 11,
   "tpm": 27,
   "xtpm": 21.42,
   "fgm": 79,
   "xfgm": 69.66,
   "fga": 151
  },
  "Yves Missi": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 5.51,
   "fga": 9
  },
  "Zaccharie Risacher": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 12.62,
   "fgm": 31,
   "xfgm": 37.84,
   "fga": 80
  },
  "Zach Collins": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 2.47,
   "fgm": 4,
   "xfgm": 7.28,
   "fga": 15
  },
  "Zach Edey": {
   "gp": 9,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 26,
   "xfgm": 26.98,
   "fga": 48
  },
  "Zach LaVine": {
   "gp": 10,
   "tpm": 25,
   "xtpm": 25.28,
   "fgm": 71,
   "xfgm": 63.01,
   "fga": 145
  },
  "Zeke Nnaji": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 0.35,
   "fga": 1
  },
  "Ziaire Williams": {
   "gp": 9,
   "tpm": 19,
   "xtpm": 14.76,
   "fgm": 36,
   "xfgm": 29.01,
   "fga": 66
  },
  "Zion Williamson": {
   "gp": 10,
   "tpm": 3,
   "xtpm": 2.44,
   "fgm": 76,
   "xfgm": 71.94,
   "fga": 121
  },
  "Zuby Ejiofor": {
   "gp": 7,
   "tpm": 4,
   "xtpm": 3.17,
   "fgm": 14,
   "xfgm": 12.64,
   "fga": 24
  },
  "Zyon Pullin": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 0.88,
   "fga": 2
  }
 }
};
