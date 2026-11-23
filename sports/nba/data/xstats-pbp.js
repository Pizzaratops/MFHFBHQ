// ============================================================
//  x3PM / xFGM der laufenden Saison aus Play-by-Play
//  Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data (nicht unser Projekt, frei veröffentlichte Daten)
//  Methode: Josh Lloyd (joshlloydfantasy.com/research/xstats-method)
//  Erzeugt von scripts/xstats-pbp.py am 2026-11-23 · Saison 2026-27 · Stand 2026-11-22
//  Wird von scripts/build-live-projections.js gelesen (3PM, FG%).
//  META {"season": "2026-27", "assetUpdated": "Mon, 23 Nov 2026 12:20:04 GMT"}
// ============================================================
const XSTATS_PBP = {
 "meta": {
  "season": "2026-27",
  "through": "2026-11-22",
  "players": 474,
  "games": 248,
  "shots": 43582,
  "assetUpdated": "Mon, 23 Nov 2026 12:20:04 GMT",
  "zoneRates": {
   "C3": 0.369,
   "AB3": 0.3537,
   "RA": 0.661,
   "PAINT": 0.439,
   "MID": 0.4063
  },
  "source": "Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data"
 },
 "players": {
  "AJ Dybantsa": {
   "gp": 14,
   "tpm": 12,
   "xtpm": 18.14,
   "fgm": 85,
   "xfgm": 99.58,
   "fga": 201
  },
  "AJ Green": {
   "gp": 16,
   "tpm": 29,
   "xtpm": 23.14,
   "fgm": 32,
   "xfgm": 26.34,
   "fga": 72
  },
  "AJ Johnson": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 3,
   "xfgm": 5.55,
   "fga": 10
  },
  "Aaron Gordon": {
   "gp": 15,
   "tpm": 16,
   "xtpm": 20.67,
   "fgm": 62,
   "xfgm": 69.9,
   "fga": 142
  },
  "Aaron Nesmith": {
   "gp": 15,
   "tpm": 20,
   "xtpm": 27.17,
   "fgm": 53,
   "xfgm": 64.5,
   "fga": 144
  },
  "Aaron Wiggins": {
   "gp": 17,
   "tpm": 47,
   "xtpm": 41.22,
   "fgm": 91,
   "xfgm": 83.86,
   "fga": 200
  },
  "Ace Bailey": {
   "gp": 18,
   "tpm": 28,
   "xtpm": 37.82,
   "fgm": 95,
   "xfgm": 94.13,
   "fga": 213
  },
  "Aday Mara": {
   "gp": 16,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 72,
   "xfgm": 65.67,
   "fga": 111
  },
  "Adem Bona": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 8,
   "xfgm": 12.07,
   "fga": 21
  },
  "Adou Thiero": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.74,
   "fgm": 4,
   "xfgm": 8.45,
   "fga": 14
  },
  "Ajay Mitchell": {
   "gp": 15,
   "tpm": 13,
   "xtpm": 16.39,
   "fgm": 101,
   "xfgm": 103.09,
   "fga": 209
  },
  "Al Horford": {
   "gp": 14,
   "tpm": 12,
   "xtpm": 14.93,
   "fgm": 22,
   "xfgm": 26.86,
   "fga": 66
  },
  "Alex Caruso": {
   "gp": 12,
   "tpm": 17,
   "xtpm": 14.19,
   "fgm": 27,
   "xfgm": 26.23,
   "fga": 62
  },
  "Alex Karaban": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 3.55,
   "fgm": 2,
   "xfgm": 4.21,
   "fga": 11
  },
  "Alex Morales": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 3.23,
   "fgm": 7,
   "xfgm": 7.63,
   "fga": 16
  },
  "Alex Sarr": {
   "gp": 17,
   "tpm": 21,
   "xtpm": 21.31,
   "fgm": 73,
   "xfgm": 65.42,
   "fga": 136
  },
  "Alijah Martin": {
   "gp": 15,
   "tpm": 13,
   "xtpm": 9.66,
   "fgm": 27,
   "xfgm": 21.99,
   "fga": 47
  },
  "Allen Graves": {
   "gp": 16,
   "tpm": 11,
   "xtpm": 12.85,
   "fgm": 32,
   "xfgm": 32.82,
   "fga": 71
  },
  "Alperen Sengun": {
   "gp": 15,
   "tpm": 15,
   "xtpm": 10.64,
   "fgm": 123,
   "xfgm": 120.15,
   "fga": 225
  },
  "Alpha Diallo": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 1.08,
   "fgm": 2,
   "xfgm": 3.06,
   "fga": 6
  },
  "Amen Thompson": {
   "gp": 16,
   "tpm": 5,
   "xtpm": 5.72,
   "fgm": 100,
   "xfgm": 100.51,
   "fga": 180
  },
  "Andre Drummond": {
   "gp": 17,
   "tpm": 1,
   "xtpm": 1.06,
   "fgm": 28,
   "xfgm": 41.58,
   "fga": 68
  },
  "Andrew Nembhard": {
   "gp": 13,
   "tpm": 30,
   "xtpm": 25.17,
   "fgm": 70,
   "xfgm": 70.23,
   "fga": 162
  },
  "Andrew Wiggins": {
   "gp": 16,
   "tpm": 21,
   "xtpm": 22.1,
   "fgm": 53,
   "xfgm": 52.87,
   "fga": 122
  },
  "Anfernee Simons": {
   "gp": 17,
   "tpm": 41,
   "xtpm": 35.44,
   "fgm": 67,
   "xfgm": 61.7,
   "fga": 149
  },
  "Anthony Black": {
   "gp": 13,
   "tpm": 27,
   "xtpm": 23.85,
   "fgm": 70,
   "xfgm": 70.39,
   "fga": 159
  },
  "Anthony Davis": {
   "gp": 16,
   "tpm": 13,
   "xtpm": 13.12,
   "fgm": 154,
   "xfgm": 145.86,
   "fga": 289
  },
  "Anthony Edwards": {
   "gp": 4,
   "tpm": 18,
   "xtpm": 15.98,
   "fgm": 50,
   "xfgm": 46.58,
   "fga": 104
  },
  "Anthony Gill": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 3.66,
   "fga": 6
  },
  "Asa Newell": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 2.86,
   "fgm": 7,
   "xfgm": 7.26,
   "fga": 15
  },
  "Ausar Thompson": {
   "gp": 15,
   "tpm": 0,
   "xtpm": 2.14,
   "fgm": 71,
   "xfgm": 73.62,
   "fga": 131
  },
  "Austin Reaves": {
   "gp": 12,
   "tpm": 27,
   "xtpm": 23.42,
   "fgm": 97,
   "xfgm": 82.95,
   "fga": 189
  },
  "Ayo Dosunmu": {
   "gp": 17,
   "tpm": 35,
   "xtpm": 28.55,
   "fgm": 119,
   "xfgm": 114.47,
   "fga": 230
  },
  "Baba Miller": {
   "gp": 13,
   "tpm": 3,
   "xtpm": 2.84,
   "fgm": 15,
   "xfgm": 13.63,
   "fga": 27
  },
  "Bam Adebayo": {
   "gp": 16,
   "tpm": 12,
   "xtpm": 17.47,
   "fgm": 105,
   "xfgm": 94.19,
   "fga": 196
  },
  "Baylor Scheierman": {
   "gp": 17,
   "tpm": 20,
   "xtpm": 19.6,
   "fgm": 32,
   "xfgm": 32.63,
   "fga": 82
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
   "xtpm": 0.71,
   "fgm": 1,
   "xfgm": 1.37,
   "fga": 3
  },
  "Bennedict Mathurin": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 9.23,
   "fgm": 23,
   "xfgm": 30.56,
   "fga": 64
  },
  "Bennett Stirtz": {
   "gp": 17,
   "tpm": 32,
   "xtpm": 24.52,
   "fgm": 50,
   "xfgm": 44.01,
   "fga": 104
  },
  "Bilal Coulibaly": {
   "gp": 17,
   "tpm": 10,
   "xtpm": 15.08,
   "fgm": 44,
   "xfgm": 47.98,
   "fga": 96
  },
  "Blake Wesley": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 0,
   "xfgm": 2.03,
   "fga": 4
  },
  "Bobby Portis Jr.": {
   "gp": 16,
   "tpm": 20,
   "xtpm": 23.23,
   "fgm": 47,
   "xfgm": 52.87,
   "fga": 123
  },
  "Bogdan Bogdanović": {
   "gp": 17,
   "tpm": 19,
   "xtpm": 15.73,
   "fgm": 29,
   "xfgm": 23.44,
   "fga": 61
  },
  "Bogoljub Marković": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.66,
   "fga": 1
  },
  "Bones Hyland": {
   "gp": 17,
   "tpm": 29,
   "xtpm": 27.68,
   "fgm": 54,
   "xfgm": 52.02,
   "fga": 123
  },
  "Braden Smith": {
   "gp": 11,
   "tpm": 5,
   "xtpm": 4.27,
   "fgm": 20,
   "xfgm": 18.81,
   "fga": 41
  },
  "Branden Carlson": {
   "gp": 11,
   "tpm": 2,
   "xtpm": 3.6,
   "fgm": 11,
   "xfgm": 10.17,
   "fga": 21
  },
  "Brandin Podziemski": {
   "gp": 15,
   "tpm": 38,
   "xtpm": 37.33,
   "fgm": 82,
   "xfgm": 77.7,
   "fga": 186
  },
  "Brandon Miller": {
   "gp": 13,
   "tpm": 38,
   "xtpm": 47.93,
   "fgm": 91,
   "xfgm": 105.49,
   "fga": 252
  },
  "Brandon Williams": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 8.16,
   "fgm": 33,
   "xfgm": 37.05,
   "fga": 80
  },
  "Brayden Burries": {
   "gp": 17,
   "tpm": 20,
   "xtpm": 23.11,
   "fgm": 67,
   "xfgm": 67.33,
   "fga": 149
  },
  "Brice Sensabaugh": {
   "gp": 18,
   "tpm": 34,
   "xtpm": 27.34,
   "fgm": 72,
   "xfgm": 62.28,
   "fga": 152
  },
  "Bronny James": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 2,
   "xfgm": 1.81,
   "fga": 4
  },
  "Brook Lopez": {
   "gp": 15,
   "tpm": 27,
   "xtpm": 22.7,
   "fgm": 91,
   "xfgm": 76.19,
   "fga": 165
  },
  "Brooks Barnhizer": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 5,
   "xfgm": 5.65,
   "fga": 10
  },
  "Bruce Thornton": {
   "gp": 11,
   "tpm": 2,
   "xtpm": 2.12,
   "fgm": 7,
   "xfgm": 6.67,
   "fga": 16
  },
  "Bryce Hopkins": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 1.78,
   "fgm": 14,
   "xfgm": 12.72,
   "fga": 24
  },
  "Bryce McGowens": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 2.51,
   "fgm": 6,
   "xfgm": 8.23,
   "fga": 17
  },
  "Bub Carrington": {
   "gp": 17,
   "tpm": 21,
   "xtpm": 16.73,
   "fgm": 25,
   "xfgm": 25.92,
   "fga": 66
  },
  "Buddy Hield": {
   "gp": 14,
   "tpm": 30,
   "xtpm": 24.42,
   "fgm": 53,
   "xfgm": 44.58,
   "fga": 102
  },
  "CJ McCollum": {
   "gp": 14,
   "tpm": 25,
   "xtpm": 25.12,
   "fgm": 74,
   "xfgm": 75.38,
   "fga": 171
  },
  "Cade Cunningham": {
   "gp": 15,
   "tpm": 29,
   "xtpm": 32.63,
   "fgm": 128,
   "xfgm": 125.36,
   "fga": 274
  },
  "Caleb Love": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 0.71,
   "fgm": 1,
   "xfgm": 1.15,
   "fga": 3
  },
  "Caleb Martin": {
   "gp": 13,
   "tpm": 16,
   "xtpm": 10.73,
   "fgm": 30,
   "xfgm": 25.96,
   "fga": 59
  },
  "Caleb Wilson": {
   "gp": 10,
   "tpm": 23,
   "xtpm": 25.26,
   "fgm": 68,
   "xfgm": 75.34,
   "fga": 162
  },
  "Cam Christie": {
   "gp": 8,
   "tpm": 3,
   "xtpm": 2.84,
   "fgm": 4,
   "xfgm": 6.81,
   "fga": 15
  },
  "Cam Spencer": {
   "gp": 17,
   "tpm": 33,
   "xtpm": 21.63,
   "fgm": 66,
   "xfgm": 49.24,
   "fga": 120
  },
  "Cam Whitmore": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 4,
   "xfgm": 3.79,
   "fga": 7
  },
  "Cameron Boozer": {
   "gp": 16,
   "tpm": 29,
   "xtpm": 31.91,
   "fgm": 88,
   "xfgm": 97.89,
   "fga": 211
  },
  "Cameron Carr": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 3.54,
   "fgm": 5,
   "xfgm": 5.26,
   "fga": 13
  },
  "Cameron Johnson": {
   "gp": 12,
   "tpm": 23,
   "xtpm": 22.79,
   "fgm": 54,
   "xfgm": 51.13,
   "fga": 116
  },
  "Caris LeVert": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 0.71,
   "fgm": 4,
   "xfgm": 4.23,
   "fga": 8
  },
  "Carson Cooper": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 1.32,
   "fga": 2
  },
  "Carter Bryant": {
   "gp": 16,
   "tpm": 15,
   "xtpm": 15.74,
   "fgm": 21,
   "xfgm": 24.74,
   "fga": 59
  },
  "Cason Wallace": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.57,
   "fgm": 8,
   "xfgm": 9.29,
   "fga": 20
  },
  "Cedric Coward": {
   "gp": 16,
   "tpm": 42,
   "xtpm": 31.57,
   "fgm": 87,
   "xfgm": 80.29,
   "fga": 181
  },
  "Chaney Johnson": {
   "gp": 14,
   "tpm": 7,
   "xtpm": 8.95,
   "fgm": 18,
   "xfgm": 24.91,
   "fga": 54
  },
  "Charles Bassey": {
   "gp": 15,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 53,
   "xfgm": 43.59,
   "fga": 76
  },
  "Chaz Lanier": {
   "gp": 7,
   "tpm": 7,
   "xtpm": 5.35,
   "fgm": 9,
   "xfgm": 6.86,
   "fga": 18
  },
  "Chet Holmgren": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.14,
   "fgm": 11,
   "xfgm": 14.65,
   "fga": 27
  },
  "Chris Cenac Jr.": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 3.23,
   "fgm": 11,
   "xfgm": 10.72,
   "fga": 21
  },
  "Chris Mañon": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.68,
   "fga": 3
  },
  "Chris Youngblood": {
   "gp": 6,
   "tpm": 8,
   "xtpm": 8.18,
   "fgm": 10,
   "xfgm": 10.38,
   "fga": 27
  },
  "Christian Anderson": {
   "gp": 14,
   "tpm": 13,
   "xtpm": 16.68,
   "fgm": 26,
   "xfgm": 29.81,
   "fga": 73
  },
  "Christian Braun": {
   "gp": 15,
   "tpm": 26,
   "xtpm": 26.45,
   "fgm": 79,
   "xfgm": 77.89,
   "fga": 160
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
   "gp": 8,
   "tpm": 8,
   "xtpm": 15.95,
   "fgm": 35,
   "xfgm": 43.91,
   "fga": 96
  },
  "Cody Williams": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 0,
   "xfgm": 2.38,
   "fga": 5
  },
  "Colin Castleton": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.52,
   "fga": 6
  },
  "Collin Gillespie": {
   "gp": 15,
   "tpm": 34,
   "xtpm": 33.32,
   "fgm": 51,
   "xfgm": 49.73,
   "fga": 128
  },
  "Collin Murray-Boyles": {
   "gp": 14,
   "tpm": 7,
   "xtpm": 8.9,
   "fgm": 49,
   "xfgm": 54.8,
   "fga": 105
  },
  "Collin Sexton": {
   "gp": 16,
   "tpm": 15,
   "xtpm": 19.63,
   "fgm": 60,
   "xfgm": 64.41,
   "fga": 137
  },
  "Cooper Flagg": {
   "gp": 16,
   "tpm": 26,
   "xtpm": 28.37,
   "fgm": 131,
   "xfgm": 127.45,
   "fga": 274
  },
  "Corey Kispert": {
   "gp": 10,
   "tpm": 20,
   "xtpm": 14.53,
   "fgm": 33,
   "xfgm": 25.1,
   "fga": 59
  },
  "Craig Porter Jr.": {
   "gp": 13,
   "tpm": 1,
   "xtpm": 2.15,
   "fgm": 10,
   "xfgm": 11.55,
   "fga": 23
  },
  "DaRon Holmes II": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.06,
   "fgm": 1,
   "xfgm": 1.06,
   "fga": 3
  },
  "Daeqwon Plowden": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 7.1,
   "fgm": 13,
   "xfgm": 11.28,
   "fga": 28
  },
  "Dailyn Swain": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 1.77,
   "fgm": 2,
   "xfgm": 4.19,
   "fga": 9
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
   "gp": 4,
   "tpm": 3,
   "xtpm": 2.51,
   "fgm": 5,
   "xfgm": 3.61,
   "fga": 9
  },
  "Damian Lillard": {
   "gp": 16,
   "tpm": 50,
   "xtpm": 51.71,
   "fgm": 95,
   "xfgm": 98.79,
   "fga": 236
  },
  "Daniel Gafford": {
   "gp": 17,
   "tpm": 2,
   "xtpm": 0.72,
   "fgm": 60,
   "xfgm": 50.59,
   "fga": 87
  },
  "Daniss Jenkins": {
   "gp": 16,
   "tpm": 34,
   "xtpm": 28.85,
   "fgm": 79,
   "xfgm": 77.7,
   "fga": 181
  },
  "Danny Wolf": {
   "gp": 10,
   "tpm": 21,
   "xtpm": 14.61,
   "fgm": 32,
   "xfgm": 31.56,
   "fga": 70
  },
  "Darius Acuff Jr.": {
   "gp": 16,
   "tpm": 50,
   "xtpm": 53.8,
   "fgm": 147,
   "xfgm": 155.58,
   "fga": 363
  },
  "Darius Garland": {
   "gp": 15,
   "tpm": 37,
   "xtpm": 36.81,
   "fgm": 107,
   "xfgm": 97.91,
   "fga": 229
  },
  "Darryn Peterson": {
   "gp": 18,
   "tpm": 35,
   "xtpm": 38.66,
   "fgm": 101,
   "xfgm": 107.82,
   "fga": 254
  },
  "David Jones Garcia": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 1,
   "xfgm": 3.79,
   "fga": 8
  },
  "Davion Mitchell": {
   "gp": 16,
   "tpm": 39,
   "xtpm": 31.98,
   "fgm": 99,
   "xfgm": 89.84,
   "fga": 194
  },
  "Day'Ron Sharpe": {
   "gp": 15,
   "tpm": 5,
   "xtpm": 6.12,
   "fgm": 52,
   "xfgm": 54.13,
   "fga": 94
  },
  "De'Aaron Fox": {
   "gp": 16,
   "tpm": 13,
   "xtpm": 17.47,
   "fgm": 64,
   "xfgm": 62.89,
   "fga": 136
  },
  "De'Andre Hunter": {
   "gp": 14,
   "tpm": 31,
   "xtpm": 27.4,
   "fgm": 72,
   "xfgm": 66.61,
   "fga": 156
  },
  "De'Anthony Melton": {
   "gp": 17,
   "tpm": 32,
   "xtpm": 30.97,
   "fgm": 46,
   "xfgm": 51.94,
   "fga": 128
  },
  "DeAndre Jordan": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 6.61,
   "fga": 10
  },
  "DeMar DeRozan": {
   "gp": 14,
   "tpm": 3,
   "xtpm": 6.47,
   "fgm": 46,
   "xfgm": 51.23,
   "fga": 117
  },
  "Dean Wade": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 11.39,
   "fgm": 22,
   "xfgm": 21.27,
   "fga": 48
  },
  "Deandre Ayton": {
   "gp": 18,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 31,
   "xfgm": 28.59,
   "fga": 48
  },
  "Dejounte Murray": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 9.66,
   "fgm": 44,
   "xfgm": 50.59,
   "fga": 102
  },
  "Deni Avdija": {
   "gp": 14,
   "tpm": 29,
   "xtpm": 25.89,
   "fgm": 111,
   "xfgm": 107.56,
   "fga": 218
  },
  "Dennis Schröder": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 12.44,
   "fgm": 32,
   "xfgm": 41.85,
   "fga": 88
  },
  "Derik Queen": {
   "gp": 18,
   "tpm": 10,
   "xtpm": 8.9,
   "fgm": 74,
   "xfgm": 80.59,
   "fga": 153
  },
  "Derrick Jones Jr.": {
   "gp": 14,
   "tpm": 25,
   "xtpm": 18.53,
   "fgm": 51,
   "xfgm": 47.74,
   "fga": 101
  },
  "Derrick White": {
   "gp": 16,
   "tpm": 28,
   "xtpm": 34.44,
   "fgm": 77,
   "xfgm": 79.65,
   "fga": 188
  },
  "Desmond Bane": {
   "gp": 15,
   "tpm": 63,
   "xtpm": 52.57,
   "fgm": 92,
   "xfgm": 85.3,
   "fga": 214
  },
  "Devin Booker": {
   "gp": 15,
   "tpm": 28,
   "xtpm": 29.38,
   "fgm": 126,
   "xfgm": 114.29,
   "fga": 265
  },
  "Devin Carter": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 0,
   "xfgm": 1.15,
   "fga": 3
  },
  "Devin Vassell": {
   "gp": 15,
   "tpm": 21,
   "xtpm": 23.85,
   "fgm": 57,
   "xfgm": 61.04,
   "fga": 142
  },
  "Dillon Brooks": {
   "gp": 15,
   "tpm": 32,
   "xtpm": 26.23,
   "fgm": 86,
   "xfgm": 82.03,
   "fga": 188
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
   "gp": 15,
   "tpm": 4,
   "xtpm": 4.61,
   "fgm": 84,
   "xfgm": 71.55,
   "fga": 134
  },
  "Dominick Barlow": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.72,
   "fgm": 5,
   "xfgm": 3.37,
   "fga": 6
  },
  "Donovan Clingan": {
   "gp": 16,
   "tpm": 16,
   "xtpm": 14.16,
   "fgm": 75,
   "xfgm": 69.4,
   "fga": 130
  },
  "Donovan Mitchell": {
   "gp": 16,
   "tpm": 43,
   "xtpm": 41.79,
   "fgm": 141,
   "xfgm": 130.53,
   "fga": 284
  },
  "Dorian Finney-Smith": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 1.43,
   "fgm": 1,
   "xfgm": 1.43,
   "fga": 4
  },
  "Drake Powell": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 0.71,
   "fgm": 4,
   "xfgm": 2.25,
   "fga": 5
  },
  "Draymond Green": {
   "gp": 14,
   "tpm": 7,
   "xtpm": 7.44,
   "fgm": 20,
   "xfgm": 22.08,
   "fga": 48
  },
  "Dru Smith": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 2.84,
   "fgm": 4,
   "xfgm": 5.04,
   "fga": 12
  },
  "Duncan Robinson": {
   "gp": 12,
   "tpm": 47,
   "xtpm": 38.7,
   "fgm": 63,
   "xfgm": 55.07,
   "fga": 140
  },
  "Duop Reath": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 2.84,
   "fgm": 7,
   "xfgm": 5.49,
   "fga": 12
  },
  "Dylan Cardwell": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 16,
   "xfgm": 15.32,
   "fga": 27
  },
  "Dylan Harper": {
   "gp": 15,
   "tpm": 17,
   "xtpm": 19.14,
   "fgm": 107,
   "xfgm": 104.88,
   "fga": 212
  },
  "Dyson Daniels": {
   "gp": 17,
   "tpm": 3,
   "xtpm": 8.89,
   "fgm": 71,
   "xfgm": 78.38,
   "fga": 150
  },
  "Ebuka Okorie": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 4,
   "xfgm": 6.34,
   "fga": 12
  },
  "Egor Dëmin": {
   "gp": 9,
   "tpm": 18,
   "xtpm": 19.85,
   "fgm": 30,
   "xfgm": 35.6,
   "fga": 83
  },
  "Elijah Harkless": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 1.54,
   "fga": 3
  },
  "Emanuel Sharp": {
   "gp": 16,
   "tpm": 17,
   "xtpm": 18.44,
   "fgm": 27,
   "xfgm": 29.91,
   "fga": 77
  },
  "Evan Mobley": {
   "gp": 12,
   "tpm": 23,
   "xtpm": 17.02,
   "fgm": 76,
   "xfgm": 69.09,
   "fga": 137
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
   "gp": 16,
   "tpm": 20,
   "xtpm": 28.46,
   "fgm": 147,
   "xfgm": 149.54,
   "fga": 313
  },
  "Fred VanVleet": {
   "gp": 14,
   "tpm": 40,
   "xtpm": 36.15,
   "fgm": 71,
   "xfgm": 63.7,
   "fga": 162
  },
  "GG Jackson": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 11.06,
   "fgm": 27,
   "xfgm": 33.47,
   "fga": 71
  },
  "Gary Payton II": {
   "gp": 15,
   "tpm": 6,
   "xtpm": 8.55,
   "fgm": 32,
   "xfgm": 30.11,
   "fga": 62
  },
  "Gary Trent Jr.": {
   "gp": 8,
   "tpm": 9,
   "xtpm": 9.24,
   "fgm": 13,
   "xfgm": 15.49,
   "fga": 38
  },
  "Georges Niang": {
   "gp": 17,
   "tpm": 20,
   "xtpm": 23.22,
   "fgm": 45,
   "xfgm": 46.89,
   "fga": 112
  },
  "Giannis Antetokounmpo": {
   "gp": 15,
   "tpm": 8,
   "xtpm": 11.67,
   "fgm": 162,
   "xfgm": 144.73,
   "fga": 269
  },
  "Goga Bitadze": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 26,
   "xfgm": 22.91,
   "fga": 36
  },
  "Gradey Dick": {
   "gp": 15,
   "tpm": 12,
   "xtpm": 8.92,
   "fgm": 41,
   "xfgm": 41.37,
   "fga": 80
  },
  "Graham Ike": {
   "gp": 13,
   "tpm": 5,
   "xtpm": 3.91,
   "fgm": 20,
   "xfgm": 22.8,
   "fga": 44
  },
  "Grant Williams": {
   "gp": 3,
   "tpm": 7,
   "xtpm": 7.15,
   "fgm": 12,
   "xfgm": 11.45,
   "fga": 28
  },
  "Grayson Allen": {
   "gp": 13,
   "tpm": 44,
   "xtpm": 34.01,
   "fgm": 56,
   "xfgm": 48.52,
   "fga": 125
  },
  "Gui Santos": {
   "gp": 14,
   "tpm": 9,
   "xtpm": 10.7,
   "fgm": 31,
   "xfgm": 36.67,
   "fga": 76
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
   "gp": 15,
   "tpm": 15,
   "xtpm": 14.96,
   "fgm": 25,
   "xfgm": 28.17,
   "fga": 64
  },
  "Herbert Jones": {
   "gp": 18,
   "tpm": 19,
   "xtpm": 21.71,
   "fgm": 46,
   "xfgm": 59.65,
   "fga": 129
  },
  "Hugo González": {
   "gp": 17,
   "tpm": 10,
   "xtpm": 13.99,
   "fgm": 25,
   "xfgm": 27.21,
   "fga": 60
  },
  "Immanuel Quickley": {
   "gp": 14,
   "tpm": 37,
   "xtpm": 37.66,
   "fgm": 84,
   "xfgm": 82.21,
   "fga": 200
  },
  "Isaac Jones": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 1,
   "xfgm": 1.69,
   "fga": 3
  },
  "Isaac Okoro": {
   "gp": 16,
   "tpm": 15,
   "xtpm": 18.99,
   "fgm": 36,
   "xfgm": 43.22,
   "fga": 91
  },
  "Isaiah Collier": {
   "gp": 15,
   "tpm": 7,
   "xtpm": 6.03,
   "fgm": 34,
   "xfgm": 34.22,
   "fga": 73
  },
  "Isaiah Crawford": {
   "gp": 11,
   "tpm": 5,
   "xtpm": 3.94,
   "fgm": 10,
   "xfgm": 8.12,
   "fga": 18
  },
  "Isaiah Evans": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 2.52,
   "fgm": 1,
   "xfgm": 3.84,
   "fga": 9
  },
  "Isaiah Hartenstein": {
   "gp": 17,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 57,
   "xfgm": 58.23,
   "fga": 107
  },
  "Isaiah Jackson": {
   "gp": 14,
   "tpm": 2,
   "xtpm": 1.77,
   "fgm": 45,
   "xfgm": 44.72,
   "fga": 78
  },
  "Isaiah Joe": {
   "gp": 6,
   "tpm": 10,
   "xtpm": 11.7,
   "fgm": 19,
   "xfgm": 18.57,
   "fga": 47
  },
  "Isaiah Stewart": {
   "gp": 12,
   "tpm": 9,
   "xtpm": 9.63,
   "fgm": 51,
   "xfgm": 43.9,
   "fga": 86
  },
  "Ivica Zubac": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 54,
   "xfgm": 57.68,
   "fga": 96
  },
  "Ja Morant": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 4.97,
   "fgm": 26,
   "xfgm": 22.08,
   "fga": 48
  },
  "Ja'Kobe Walter": {
   "gp": 16,
   "tpm": 40,
   "xtpm": 40.72,
   "fgm": 63,
   "xfgm": 66.57,
   "fga": 162
  },
  "Ja'Kobi Gillespie": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 1.06,
   "fgm": 2,
   "xfgm": 1.72,
   "fga": 4
  },
  "Jabari Smith Jr.": {
   "gp": 17,
   "tpm": 41,
   "xtpm": 36.21,
   "fgm": 94,
   "xfgm": 87.97,
   "fga": 199
  },
  "Jabari Walker": {
   "gp": 13,
   "tpm": 8,
   "xtpm": 7.49,
   "fgm": 34,
   "xfgm": 33.26,
   "fga": 61
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
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 3.52,
   "fga": 7
  },
  "Jaden Hardy": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 3.89,
   "fgm": 2,
   "xfgm": 4.74,
   "fga": 13
  },
  "Jaden McDaniels": {
   "gp": 17,
   "tpm": 25,
   "xtpm": 25.91,
   "fgm": 123,
   "xfgm": 109.52,
   "fga": 227
  },
  "Jae'Sean Tate": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 5.16,
   "fga": 9
  },
  "Jahmai Mashack": {
   "gp": 8,
   "tpm": 1,
   "xtpm": 1.78,
   "fgm": 2,
   "xfgm": 5.05,
   "fga": 11
  },
  "Jaime Jaquez Jr.": {
   "gp": 17,
   "tpm": 31,
   "xtpm": 26.14,
   "fgm": 89,
   "xfgm": 92.61,
   "fga": 192
  },
  "Jake LaRavia": {
   "gp": 16,
   "tpm": 15,
   "xtpm": 11.81,
   "fgm": 34,
   "xfgm": 35.3,
   "fga": 72
  },
  "Jakob Poeltl": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 51,
   "xfgm": 47.91,
   "fga": 85
  },
  "Jalen Brunson": {
   "gp": 17,
   "tpm": 51,
   "xtpm": 44.64,
   "fgm": 155,
   "xfgm": 156.01,
   "fga": 355
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
   "gp": 15,
   "tpm": 18,
   "xtpm": 20.62,
   "fgm": 69,
   "xfgm": 78.48,
   "fga": 165
  },
  "Jalen Johnson": {
   "gp": 14,
   "tpm": 12,
   "xtpm": 20.19,
   "fgm": 97,
   "xfgm": 109.38,
   "fga": 217
  },
  "Jalen Pickett": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 1.06,
   "fgm": 4,
   "xfgm": 3.41,
   "fga": 8
  },
  "Jalen Slawson": {
   "gp": 15,
   "tpm": 4,
   "xtpm": 5.69,
   "fgm": 21,
   "xfgm": 21.04,
   "fga": 41
  },
  "Jalen Smith": {
   "gp": 14,
   "tpm": 30,
   "xtpm": 26.03,
   "fgm": 77,
   "xfgm": 68.22,
   "fga": 141
  },
  "Jalen Suggs": {
   "gp": 8,
   "tpm": 11,
   "xtpm": 13.53,
   "fgm": 26,
   "xfgm": 32.24,
   "fga": 75
  },
  "Jalen Williams": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.18,
   "fgm": 15,
   "xfgm": 19.17,
   "fga": 39
  },
  "Jamal Cain": {
   "gp": 14,
   "tpm": 11,
   "xtpm": 13.93,
   "fgm": 25,
   "xfgm": 24.66,
   "fga": 62
  },
  "Jamal Murray": {
   "gp": 15,
   "tpm": 50,
   "xtpm": 37.59,
   "fgm": 129,
   "xfgm": 110.83,
   "fga": 253
  },
  "Jamal Shead": {
   "gp": 16,
   "tpm": 15,
   "xtpm": 19.54,
   "fgm": 42,
   "xfgm": 50.38,
   "fga": 113
  },
  "Jamaree Bouyea": {
   "gp": 7,
   "tpm": 1,
   "xtpm": 0.72,
   "fgm": 7,
   "xfgm": 3.99,
   "fga": 8
  },
  "James Harden": {
   "gp": 16,
   "tpm": 46,
   "xtpm": 40.76,
   "fgm": 84,
   "xfgm": 88.86,
   "fga": 205
  },
  "James Wiseman": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 6,
   "xfgm": 7.89,
   "fga": 13
  },
  "Jamison Battle": {
   "gp": 16,
   "tpm": 33,
   "xtpm": 27.43,
   "fgm": 50,
   "xfgm": 44.09,
   "fga": 106
  },
  "Jarace Walker": {
   "gp": 16,
   "tpm": 14,
   "xtpm": 18.13,
   "fgm": 32,
   "xfgm": 40.91,
   "fga": 92
  },
  "Jared McCain": {
   "gp": 17,
   "tpm": 40,
   "xtpm": 41.99,
   "fgm": 87,
   "xfgm": 91.38,
   "fga": 210
  },
  "Jaren Jackson Jr.": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 4.98,
   "fgm": 22,
   "xfgm": 20.15,
   "fga": 44
  },
  "Jaron Pierre Jr.": {
   "gp": 7,
   "tpm": 9,
   "xtpm": 9.23,
   "fgm": 16,
   "xfgm": 20.82,
   "fga": 47
  },
  "Jarred Vanderbilt": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 13,
   "xfgm": 11.24,
   "fga": 17
  },
  "Jarrett Allen": {
   "gp": 14,
   "tpm": 3,
   "xtpm": 1.77,
   "fgm": 69,
   "xfgm": 67.29,
   "fga": 113
  },
  "Jase Richardson": {
   "gp": 12,
   "tpm": 8,
   "xtpm": 12.87,
   "fgm": 26,
   "xfgm": 35.67,
   "fga": 81
  },
  "Javon Small": {
   "gp": 9,
   "tpm": 12,
   "xtpm": 11.35,
   "fgm": 29,
   "xfgm": 31.36,
   "fga": 70
  },
  "Javonte Green": {
   "gp": 16,
   "tpm": 20,
   "xtpm": 21.37,
   "fgm": 35,
   "xfgm": 33.67,
   "fga": 80
  },
  "Jaxson Hayes": {
   "gp": 15,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 53,
   "xfgm": 46.31,
   "fga": 82
  },
  "Jay Huff": {
   "gp": 15,
   "tpm": 13,
   "xtpm": 14.61,
   "fgm": 36,
   "xfgm": 33.1,
   "fga": 71
  },
  "Jaylen Brown": {
   "gp": 14,
   "tpm": 27,
   "xtpm": 24.92,
   "fgm": 117,
   "xfgm": 112.63,
   "fga": 237
  },
  "Jaylen Clark": {
   "gp": 12,
   "tpm": 9,
   "xtpm": 9.03,
   "fgm": 18,
   "xfgm": 18.45,
   "fga": 43
  },
  "Jaylen Wells": {
   "gp": 17,
   "tpm": 34,
   "xtpm": 29.32,
   "fgm": 66,
   "xfgm": 57.44,
   "fga": 134
  },
  "Jaylin Sellers": {
   "gp": 6,
   "tpm": 7,
   "xtpm": 6.06,
   "fgm": 8,
   "xfgm": 8.89,
   "fga": 22
  },
  "Jaylin Williams": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 10.75,
   "fgm": 8,
   "xfgm": 14.9,
   "fga": 37
  },
  "Jaylon Tyson": {
   "gp": 8,
   "tpm": 13,
   "xtpm": 14.65,
   "fgm": 28,
   "xfgm": 30.63,
   "fga": 68
  },
  "Jayson Kent": {
   "gp": 7,
   "tpm": 5,
   "xtpm": 4.98,
   "fgm": 10,
   "xfgm": 12.22,
   "fga": 26
  },
  "Jayson Tatum": {
   "gp": 15,
   "tpm": 41,
   "xtpm": 43.24,
   "fgm": 126,
   "xfgm": 133.43,
   "fga": 296
  },
  "Jerami Grant": {
   "gp": 15,
   "tpm": 26,
   "xtpm": 20.48,
   "fgm": 55,
   "xfgm": 53.51,
   "fga": 117
  },
  "Jeremiah Fears": {
   "gp": 18,
   "tpm": 23,
   "xtpm": 27.31,
   "fgm": 114,
   "xfgm": 124.76,
   "fga": 252
  },
  "Jericho Sims": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 5,
   "xfgm": 6.75,
   "fga": 12
  },
  "Jett Howard": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 3.2,
   "fgm": 5,
   "xfgm": 4.7,
   "fga": 12
  },
  "Jevon Carter": {
   "gp": 12,
   "tpm": 15,
   "xtpm": 16.02,
   "fgm": 18,
   "xfgm": 20.32,
   "fga": 54
  },
  "Joan Beringer": {
   "gp": 17,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 32,
   "xfgm": 34.14,
   "fga": 54
  },
  "Jock Landale": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 7.86,
   "fgm": 22,
   "xfgm": 23.46,
   "fga": 48
  },
  "Joel Embiid": {
   "gp": 14,
   "tpm": 6,
   "xtpm": 14.87,
   "fgm": 88,
   "xfgm": 105.65,
   "fga": 220
  },
  "John Collins": {
   "gp": 16,
   "tpm": 23,
   "xtpm": 17.85,
   "fgm": 66,
   "xfgm": 67.39,
   "fga": 137
  },
  "John Tonje": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.84,
   "fgm": 3,
   "xfgm": 5.04,
   "fga": 12
  },
  "Jonathan Kuminga": {
   "gp": 16,
   "tpm": 26,
   "xtpm": 22.79,
   "fgm": 75,
   "xfgm": 81.39,
   "fga": 165
  },
  "Jonathan Mogbo": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 2.17,
   "fgm": 6,
   "xfgm": 8.55,
   "fga": 17
  },
  "Jordan Clarkson": {
   "gp": 12,
   "tpm": 6,
   "xtpm": 4.29,
   "fgm": 25,
   "xfgm": 24.94,
   "fga": 50
  },
  "Jordan Goodwin": {
   "gp": 11,
   "tpm": 20,
   "xtpm": 18.53,
   "fgm": 34,
   "xfgm": 33.17,
   "fga": 79
  },
  "Jordan Hawkins": {
   "gp": 8,
   "tpm": 4,
   "xtpm": 7.12,
   "fgm": 12,
   "xfgm": 12.67,
   "fga": 32
  },
  "Jordan McLaughlin": {
   "gp": 11,
   "tpm": 3,
   "xtpm": 4.31,
   "fgm": 10,
   "xfgm": 13.99,
   "fga": 29
  },
  "Jordan Poole": {
   "gp": 12,
   "tpm": 17,
   "xtpm": 17.71,
   "fgm": 33,
   "xfgm": 38.27,
   "fga": 86
  },
  "Jordan Walsh": {
   "gp": 17,
   "tpm": 12,
   "xtpm": 16.13,
   "fgm": 28,
   "xfgm": 32.14,
   "fga": 71
  },
  "Jose Alvarado": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 7.46,
   "fgm": 13,
   "xfgm": 15.15,
   "fga": 36
  },
  "Josh Dix": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 7.47,
   "fgm": 12,
   "xfgm": 15.33,
   "fga": 35
  },
  "Josh Giddey": {
   "gp": 16,
   "tpm": 19,
   "xtpm": 21.25,
   "fgm": 67,
   "xfgm": 73.49,
   "fga": 153
  },
  "Josh Green": {
   "gp": 16,
   "tpm": 13,
   "xtpm": 12.92,
   "fgm": 26,
   "xfgm": 25.57,
   "fga": 60
  },
  "Josh Hart": {
   "gp": 14,
   "tpm": 17,
   "xtpm": 22.08,
   "fgm": 36,
   "xfgm": 46.91,
   "fga": 106
  },
  "Josh Minott": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 7.83,
   "fgm": 11,
   "xfgm": 12.23,
   "fga": 29
  },
  "Josh Okogie": {
   "gp": 17,
   "tpm": 11,
   "xtpm": 12.56,
   "fgm": 21,
   "xfgm": 27.48,
   "fga": 64
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
   "gp": 16,
   "tpm": 38,
   "xtpm": 32.0,
   "fgm": 74,
   "xfgm": 68.64,
   "fga": 157
  },
  "Julian Champagnie": {
   "gp": 17,
   "tpm": 47,
   "xtpm": 40.62,
   "fgm": 60,
   "xfgm": 52.69,
   "fga": 136
  },
  "Julian Reese": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 2.61,
   "fga": 5
  },
  "Julius Randle": {
   "gp": 15,
   "tpm": 24,
   "xtpm": 25.22,
   "fgm": 105,
   "xfgm": 110.38,
   "fga": 225
  },
  "Justin Champagnie": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.49,
   "fgm": 12,
   "xfgm": 10.86,
   "fga": 20
  },
  "Justin Edwards": {
   "gp": 7,
   "tpm": 1,
   "xtpm": 1.43,
   "fgm": 3,
   "xfgm": 3.41,
   "fga": 7
  },
  "Karim López": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 1.08,
   "fgm": 2,
   "xfgm": 1.74,
   "fga": 4
  },
  "Karl-Anthony Towns": {
   "gp": 16,
   "tpm": 34,
   "xtpm": 29.03,
   "fgm": 126,
   "xfgm": 118.33,
   "fga": 232
  },
  "Karlo Matković": {
   "gp": 17,
   "tpm": 18,
   "xtpm": 18.33,
   "fgm": 40,
   "xfgm": 37.93,
   "fga": 82
  },
  "Kasparas Jakučionis": {
   "gp": 16,
   "tpm": 17,
   "xtpm": 19.54,
   "fgm": 46,
   "xfgm": 47.26,
   "fga": 100
  },
  "Kawhi Leonard": {
   "gp": 2,
   "tpm": 4,
   "xtpm": 4.95,
   "fgm": 12,
   "xfgm": 17.23,
   "fga": 37
  },
  "Keaton Wagler": {
   "gp": 15,
   "tpm": 24,
   "xtpm": 24.46,
   "fgm": 44,
   "xfgm": 53.06,
   "fga": 126
  },
  "Keegan Murray": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 13.24,
   "fgm": 39,
   "xfgm": 40.41,
   "fga": 93
  },
  "Kel'el Ware": {
   "gp": 17,
   "tpm": 12,
   "xtpm": 15.96,
   "fgm": 56,
   "xfgm": 68.93,
   "fga": 131
  },
  "Keldon Johnson": {
   "gp": 17,
   "tpm": 7,
   "xtpm": 10.35,
   "fgm": 56,
   "xfgm": 63.18,
   "fga": 119
  },
  "Kelly Oubre Jr.": {
   "gp": 15,
   "tpm": 16,
   "xtpm": 21.76,
   "fgm": 66,
   "xfgm": 66.37,
   "fga": 139
  },
  "Kenrich Williams": {
   "gp": 17,
   "tpm": 22,
   "xtpm": 19.17,
   "fgm": 48,
   "xfgm": 47.52,
   "fga": 104
  },
  "Kentavious Caldwell-Pope": {
   "gp": 17,
   "tpm": 25,
   "xtpm": 19.24,
   "fgm": 34,
   "xfgm": 29.03,
   "fga": 73
  },
  "Keon Ellis": {
   "gp": 14,
   "tpm": 13,
   "xtpm": 13.13,
   "fgm": 22,
   "xfgm": 23.63,
   "fga": 56
  },
  "Keshad Johnson": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Kevin Durant": {
   "gp": 17,
   "tpm": 26,
   "xtpm": 23.14,
   "fgm": 112,
   "xfgm": 96.77,
   "fga": 222
  },
  "Kevin Huerter": {
   "gp": 16,
   "tpm": 24,
   "xtpm": 26.29,
   "fgm": 59,
   "xfgm": 59.33,
   "fga": 138
  },
  "Kevon Looney": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 5,
   "xfgm": 5.25,
   "fga": 9
  },
  "Keyonte George": {
   "gp": 17,
   "tpm": 36,
   "xtpm": 39.33,
   "fgm": 113,
   "xfgm": 111.41,
   "fga": 264
  },
  "Khaman Maluach": {
   "gp": 15,
   "tpm": 2,
   "xtpm": 2.51,
   "fgm": 47,
   "xfgm": 44.31,
   "fga": 75
  },
  "Khris Middleton": {
   "gp": 10,
   "tpm": 8,
   "xtpm": 6.46,
   "fgm": 16,
   "xfgm": 13.85,
   "fga": 34
  },
  "Kingston Flemings": {
   "gp": 13,
   "tpm": 10,
   "xtpm": 8.87,
   "fgm": 41,
   "xfgm": 40.56,
   "fga": 84
  },
  "Klay Thompson": {
   "gp": 15,
   "tpm": 60,
   "xtpm": 49.5,
   "fgm": 76,
   "xfgm": 64.02,
   "fga": 172
  },
  "Koa Peat": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 12,
   "xfgm": 10.79,
   "fga": 18
  },
  "Kobe Brown": {
   "gp": 8,
   "tpm": 3,
   "xtpm": 4.27,
   "fgm": 10,
   "xfgm": 10.21,
   "fga": 23
  },
  "Kobe Sanders": {
   "gp": 15,
   "tpm": 21,
   "xtpm": 21.65,
   "fgm": 40,
   "xfgm": 43.17,
   "fga": 101
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
   "gp": 15,
   "tpm": 12,
   "xtpm": 12.12,
   "fgm": 38,
   "xfgm": 41.17,
   "fga": 83
  },
  "Kris Murray": {
   "gp": 13,
   "tpm": 4,
   "xtpm": 8.38,
   "fgm": 9,
   "xfgm": 12.78,
   "fga": 30
  },
  "Kyle Anderson": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 8.29,
   "fga": 17
  },
  "Kyle Filipowski": {
   "gp": 11,
   "tpm": 2,
   "xtpm": 3.21,
   "fgm": 12,
   "xfgm": 14.43,
   "fga": 30
  },
  "Kyle Kuzma": {
   "gp": 16,
   "tpm": 27,
   "xtpm": 29.92,
   "fgm": 71,
   "xfgm": 75.07,
   "fga": 161
  },
  "Kyrie Irving": {
   "gp": 14,
   "tpm": 47,
   "xtpm": 43.7,
   "fgm": 111,
   "xfgm": 102.83,
   "fga": 242
  },
  "Kyshawn George": {
   "gp": 18,
   "tpm": 46,
   "xtpm": 39.38,
   "fgm": 119,
   "xfgm": 113.11,
   "fga": 250
  },
  "LJ Cryer": {
   "gp": 14,
   "tpm": 22,
   "xtpm": 19.87,
   "fgm": 30,
   "xfgm": 30.25,
   "fga": 78
  },
  "LaMelo Ball": {
   "gp": 17,
   "tpm": 56,
   "xtpm": 55.34,
   "fgm": 105,
   "xfgm": 105.98,
   "fga": 256
  },
  "Labaron Philon Jr.": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 4.6,
   "fgm": 12,
   "xfgm": 10.97,
   "fga": 27
  },
  "Landry Shamet": {
   "gp": 17,
   "tpm": 42,
   "xtpm": 33.75,
   "fgm": 67,
   "xfgm": 58.02,
   "fga": 136
  },
  "Larry Nance Jr.": {
   "gp": 16,
   "tpm": 15,
   "xtpm": 13.28,
   "fgm": 26,
   "xfgm": 23.57,
   "fga": 54
  },
  "Lauri Markkanen": {
   "gp": 8,
   "tpm": 29,
   "xtpm": 25.89,
   "fgm": 44,
   "xfgm": 46.52,
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
   "gp": 13,
   "tpm": 10,
   "xtpm": 16.3,
   "fgm": 79,
   "xfgm": 85.97,
   "fga": 170
  },
  "Leaky Black": {
   "gp": 12,
   "tpm": 15,
   "xtpm": 12.52,
   "fgm": 18,
   "xfgm": 17.32,
   "fga": 44
  },
  "Leonard Miller": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 10.33,
   "fgm": 26,
   "xfgm": 29.43,
   "fga": 59
  },
  "Liam McNeeley": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 4.98,
   "fgm": 8,
   "xfgm": 12.62,
   "fga": 28
  },
  "Luguentz Dort": {
   "gp": 17,
   "tpm": 27,
   "xtpm": 28.72,
   "fgm": 53,
   "xfgm": 64.92,
   "fga": 141
  },
  "Luka Dončić": {
   "gp": 15,
   "tpm": 74,
   "xtpm": 69.79,
   "fgm": 176,
   "xfgm": 154.84,
   "fga": 376
  },
  "Luka Garza": {
   "gp": 17,
   "tpm": 15,
   "xtpm": 14.62,
   "fgm": 32,
   "xfgm": 35.09,
   "fga": 77
  },
  "Luke Kennard": {
   "gp": 14,
   "tpm": 28,
   "xtpm": 22.77,
   "fgm": 43,
   "xfgm": 32.05,
   "fga": 84
  },
  "Luke Kornet": {
   "gp": 17,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 20,
   "xfgm": 25.07,
   "fga": 40
  },
  "Malachi Smith": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 1,
   "xfgm": 1.81,
   "fga": 4
  },
  "Malevy Leons": {
   "gp": 11,
   "tpm": 1,
   "xtpm": 1.43,
   "fgm": 3,
   "xfgm": 6.93,
   "fga": 14
  },
  "Malik Dia": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 2,
   "xfgm": 2.62,
   "fga": 6
  },
  "Malik Monk": {
   "gp": 15,
   "tpm": 14,
   "xtpm": 17.39,
   "fgm": 37,
   "xfgm": 42.91,
   "fga": 101
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
   "gp": 12,
   "tpm": 10,
   "xtpm": 11.79,
   "fgm": 23,
   "xfgm": 21.61,
   "fga": 54
  },
  "Marcus Smart": {
   "gp": 11,
   "tpm": 18,
   "xtpm": 16.78,
   "fgm": 27,
   "xfgm": 26.76,
   "fga": 67
  },
  "Mario Hezonja": {
   "gp": 17,
   "tpm": 21,
   "xtpm": 22.49,
   "fgm": 64,
   "xfgm": 62.21,
   "fga": 131
  },
  "Marvin Bagley III": {
   "gp": 15,
   "tpm": 2,
   "xtpm": 2.84,
   "fgm": 32,
   "xfgm": 33.12,
   "fga": 61
  },
  "Mason Plumlee": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Matas Buzelis": {
   "gp": 16,
   "tpm": 34,
   "xtpm": 33.46,
   "fgm": 78,
   "xfgm": 79.33,
   "fga": 172
  },
  "Matisse Thybulle": {
   "gp": 17,
   "tpm": 30,
   "xtpm": 26.39,
   "fgm": 43,
   "xfgm": 39.81,
   "fga": 98
  },
  "Max Christie": {
   "gp": 14,
   "tpm": 17,
   "xtpm": 19.65,
   "fgm": 29,
   "xfgm": 32.38,
   "fga": 78
  },
  "Max Strus": {
   "gp": 9,
   "tpm": 20,
   "xtpm": 19.9,
   "fgm": 26,
   "xfgm": 29.77,
   "fga": 73
  },
  "Meleek Thomas": {
   "gp": 14,
   "tpm": 34,
   "xtpm": 28.83,
   "fgm": 69,
   "xfgm": 65.49,
   "fga": 149
  },
  "Micah Peavy": {
   "gp": 11,
   "tpm": 6,
   "xtpm": 7.18,
   "fgm": 16,
   "xfgm": 21.85,
   "fga": 47
  },
  "Micah Potter": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 2.48,
   "fgm": 7,
   "xfgm": 6.21,
   "fga": 15
  },
  "Michael Porter Jr.": {
   "gp": 14,
   "tpm": 45,
   "xtpm": 42.58,
   "fgm": 92,
   "xfgm": 88.91,
   "fga": 205
  },
  "Mikal Bridges": {
   "gp": 17,
   "tpm": 19,
   "xtpm": 21.5,
   "fgm": 54,
   "xfgm": 59.23,
   "fga": 134
  },
  "Mike Conley": {
   "gp": 6,
   "tpm": 10,
   "xtpm": 4.29,
   "fgm": 12,
   "xfgm": 7.11,
   "fga": 18
  },
  "Mikel Brown Jr.": {
   "gp": 11,
   "tpm": 22,
   "xtpm": 23.02,
   "fgm": 41,
   "xfgm": 50.02,
   "fga": 117
  },
  "Miles Bridges": {
   "gp": 15,
   "tpm": 25,
   "xtpm": 28.51,
   "fgm": 85,
   "xfgm": 82.94,
   "fga": 178
  },
  "Miles McBride": {
   "gp": 16,
   "tpm": 29,
   "xtpm": 24.59,
   "fgm": 37,
   "xfgm": 33.44,
   "fga": 86
  },
  "Mitchell Robinson": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 32,
   "xfgm": 31.72,
   "fga": 49
  },
  "Mo Bamba": {
   "gp": 14,
   "tpm": 7,
   "xtpm": 4.27,
   "fgm": 51,
   "xfgm": 41.94,
   "fga": 72
  },
  "Mohamed Diawara": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 5.35,
   "fgm": 6,
   "xfgm": 9.09,
   "fga": 21
  },
  "Morez Johnson Jr.": {
   "gp": 16,
   "tpm": 4,
   "xtpm": 6.01,
   "fgm": 38,
   "xfgm": 46.36,
   "fga": 90
  },
  "Moritz Wagner": {
   "gp": 15,
   "tpm": 18,
   "xtpm": 10.3,
   "fgm": 52,
   "xfgm": 46.42,
   "fga": 87
  },
  "Moussa Cissé": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.74,
   "fga": 6
  },
  "Moussa Diabaté": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 52,
   "xfgm": 51.28,
   "fga": 82
  },
  "Myles Turner": {
   "gp": 15,
   "tpm": 19,
   "xtpm": 24.52,
   "fgm": 39,
   "xfgm": 47.86,
   "fga": 113
  },
  "Myron Gardner": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 6.07,
   "fgm": 10,
   "xfgm": 10.04,
   "fga": 23
  },
  "Naji Marshall": {
   "gp": 14,
   "tpm": 14,
   "xtpm": 17.11,
   "fgm": 55,
   "xfgm": 57.78,
   "fga": 127
  },
  "Nate Ament": {
   "gp": 15,
   "tpm": 15,
   "xtpm": 15.38,
   "fgm": 41,
   "xfgm": 42.95,
   "fga": 90
  },
  "Naz Reid": {
   "gp": 15,
   "tpm": 37,
   "xtpm": 39.07,
   "fgm": 99,
   "xfgm": 112.76,
   "fga": 255
  },
  "Neemias Queta": {
   "gp": 16,
   "tpm": 5,
   "xtpm": 2.54,
   "fgm": 59,
   "xfgm": 58.61,
   "fga": 102
  },
  "Nic Claxton": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 21,
   "xfgm": 19.81,
   "fga": 33
  },
  "Nick Martinelli": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 1.06,
   "fgm": 7,
   "xfgm": 5.24,
   "fga": 11
  },
  "Nick Richards": {
   "gp": 7,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 1.45,
   "fga": 3
  },
  "Nickeil Alexander-Walker": {
   "gp": 17,
   "tpm": 61,
   "xtpm": 60.46,
   "fgm": 121,
   "xfgm": 129.32,
   "fga": 292
  },
  "Nikola Jokić": {
   "gp": 15,
   "tpm": 19,
   "xtpm": 22.3,
   "fgm": 146,
   "xfgm": 126.83,
   "fga": 273
  },
  "Nikola Jović": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 7.15,
   "fgm": 11,
   "xfgm": 15.26,
   "fga": 34
  },
  "Nikola Topić": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 4,
   "xfgm": 4.36,
   "fga": 10
  },
  "Nikola Vučević": {
   "gp": 14,
   "tpm": 8,
   "xtpm": 9.59,
   "fgm": 20,
   "xfgm": 19.48,
   "fga": 47
  },
  "Nique Clifford": {
   "gp": 15,
   "tpm": 4,
   "xtpm": 7.1,
   "fgm": 22,
   "xfgm": 22.33,
   "fga": 50
  },
  "Noa Essengue": {
   "gp": 15,
   "tpm": 8,
   "xtpm": 10.72,
   "fgm": 26,
   "xfgm": 30.28,
   "fga": 62
  },
  "Noah Clowney": {
   "gp": 15,
   "tpm": 13,
   "xtpm": 16.82,
   "fgm": 33,
   "xfgm": 35.53,
   "fga": 80
  },
  "Nolan Traore": {
   "gp": 14,
   "tpm": 21,
   "xtpm": 18.5,
   "fgm": 69,
   "xfgm": 61.46,
   "fga": 135
  },
  "Norchad Omier": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 1.43,
   "fgm": 9,
   "xfgm": 8.26,
   "fga": 15
  },
  "Norman Powell": {
   "gp": 13,
   "tpm": 30,
   "xtpm": 31.17,
   "fgm": 86,
   "xfgm": 87.08,
   "fga": 193
  },
  "OG Anunoby": {
   "gp": 15,
   "tpm": 30,
   "xtpm": 33.24,
   "fgm": 71,
   "xfgm": 83.33,
   "fga": 177
  },
  "Obi Toppin": {
   "gp": 14,
   "tpm": 19,
   "xtpm": 21.1,
   "fgm": 60,
   "xfgm": 58.97,
   "fga": 121
  },
  "Olivier-Maxence Prosper": {
   "gp": 11,
   "tpm": 4,
   "xtpm": 6.13,
   "fgm": 26,
   "xfgm": 27.4,
   "fga": 52
  },
  "Onyeka Okongwu": {
   "gp": 17,
   "tpm": 31,
   "xtpm": 33.01,
   "fgm": 94,
   "xfgm": 89.35,
   "fga": 191
  },
  "Oscar Tshiebwe": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 14,
   "xfgm": 12.78,
   "fga": 20
  },
  "Oso Ighodaro": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 32,
   "xfgm": 31.66,
   "fga": 55
  },
  "Ousmane Dieng": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 7.12,
   "fgm": 14,
   "xfgm": 14.82,
   "fga": 34
  },
  "P.J. Washington": {
   "gp": 15,
   "tpm": 34,
   "xtpm": 33.58,
   "fgm": 69,
   "xfgm": 71.03,
   "fga": 164
  },
  "PJ Hall": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 0,
   "xfgm": 1.06,
   "fga": 3
  },
  "Pacôme Dadiet": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 2.52,
   "fgm": 9,
   "xfgm": 8.43,
   "fga": 17
  },
  "Paolo Banchero": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 2.14,
   "fgm": 16,
   "xfgm": 10.8,
   "fga": 23
  },
  "Pascal Siakam": {
   "gp": 16,
   "tpm": 28,
   "xtpm": 27.03,
   "fgm": 136,
   "xfgm": 127.2,
   "fga": 268
  },
  "Pat Spencer": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 0.71,
   "fgm": 2,
   "xfgm": 2.87,
   "fga": 6
  },
  "Patrick Williams": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 8.53,
   "fgm": 20,
   "xfgm": 22.78,
   "fga": 48
  },
  "Paul George": {
   "gp": 14,
   "tpm": 46,
   "xtpm": 40.12,
   "fgm": 99,
   "xfgm": 93.33,
   "fga": 221
  },
  "Paul Reed": {
   "gp": 16,
   "tpm": 5,
   "xtpm": 3.57,
   "fgm": 77,
   "xfgm": 73.28,
   "fga": 134
  },
  "Payton Pritchard": {
   "gp": 17,
   "tpm": 37,
   "xtpm": 38.61,
   "fgm": 76,
   "xfgm": 77.73,
   "fga": 190
  },
  "Pelle Larsson": {
   "gp": 13,
   "tpm": 19,
   "xtpm": 14.52,
   "fgm": 46,
   "xfgm": 43.3,
   "fga": 93
  },
  "Pete Nance": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 2.12,
   "fgm": 4,
   "xfgm": 4.32,
   "fga": 10
  },
  "Peyton Watson": {
   "gp": 13,
   "tpm": 15,
   "xtpm": 20.74,
   "fgm": 54,
   "xfgm": 65.44,
   "fga": 137
  },
  "Precious Achiuwa": {
   "gp": 13,
   "tpm": 4,
   "xtpm": 3.92,
   "fgm": 51,
   "xfgm": 48.28,
   "fga": 95
  },
  "Quentin Grimes": {
   "gp": 15,
   "tpm": 28,
   "xtpm": 24.13,
   "fgm": 61,
   "xfgm": 57.83,
   "fga": 126
  },
  "Quenton Jackson": {
   "gp": 17,
   "tpm": 18,
   "xtpm": 19.16,
   "fgm": 54,
   "xfgm": 54.21,
   "fga": 116
  },
  "Quinten Post": {
   "gp": 11,
   "tpm": 6,
   "xtpm": 7.83,
   "fgm": 21,
   "xfgm": 18.98,
   "fga": 42
  },
  "RJ Barrett": {
   "gp": 14,
   "tpm": 21,
   "xtpm": 26.26,
   "fgm": 113,
   "xfgm": 118.13,
   "fga": 239
  },
  "Rasheer Fleming": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 2.14,
   "fgm": 2,
   "xfgm": 4.34,
   "fga": 10
  },
  "RayJ Dennis": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.49,
   "fgm": 7,
   "xfgm": 8.61,
   "fga": 19
  },
  "Rayan Rupert": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 1,
   "xfgm": 1.37,
   "fga": 3
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
   "gp": 14,
   "tpm": 31,
   "xtpm": 32.29,
   "fgm": 46,
   "xfgm": 48.49,
   "fga": 122
  },
  "Riley Minix": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 3.91,
   "fgm": 5,
   "xfgm": 7.39,
   "fga": 17
  },
  "Robert Williams III": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 35,
   "xfgm": 32.81,
   "fga": 53
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
   "gp": 9,
   "tpm": 6,
   "xtpm": 6.46,
   "fgm": 10,
   "xfgm": 10.2,
   "fga": 25
  },
  "Ronald Holland II": {
   "gp": 13,
   "tpm": 8,
   "xtpm": 9.3,
   "fgm": 22,
   "xfgm": 32.82,
   "fga": 67
  },
  "Royce O'Neale": {
   "gp": 15,
   "tpm": 24,
   "xtpm": 24.49,
   "fgm": 29,
   "xfgm": 28.46,
   "fga": 75
  },
  "Rudy Gobert": {
   "gp": 16,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 43,
   "xfgm": 55.46,
   "fga": 90
  },
  "Rui Hachimura": {
   "gp": 13,
   "tpm": 29,
   "xtpm": 25.25,
   "fgm": 65,
   "xfgm": 69.64,
   "fga": 155
  },
  "Ryan Conwell": {
   "gp": 14,
   "tpm": 21,
   "xtpm": 20.67,
   "fgm": 32,
   "xfgm": 33.58,
   "fga": 82
  },
  "Ryan Dunn": {
   "gp": 15,
   "tpm": 11,
   "xtpm": 9.73,
   "fgm": 27,
   "xfgm": 27.78,
   "fga": 58
  },
  "Ryan Kalkbrenner": {
   "gp": 15,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 26,
   "xfgm": 24.23,
   "fga": 38
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
   "gp": 15,
   "tpm": 22,
   "xtpm": 23.8,
   "fgm": 60,
   "xfgm": 69.54,
   "fga": 151
  },
  "Saddiq Bey": {
   "gp": 18,
   "tpm": 41,
   "xtpm": 39.19,
   "fgm": 97,
   "xfgm": 99.1,
   "fga": 227
  },
  "Sam Hauser": {
   "gp": 17,
   "tpm": 41,
   "xtpm": 33.81,
   "fgm": 50,
   "xfgm": 41.19,
   "fga": 110
  },
  "Sam Merrill": {
   "gp": 11,
   "tpm": 17,
   "xtpm": 19.22,
   "fgm": 26,
   "xfgm": 28.21,
   "fga": 70
  },
  "Sandro Mamukelashvili": {
   "gp": 17,
   "tpm": 21,
   "xtpm": 23.16,
   "fgm": 59,
   "xfgm": 63.17,
   "fga": 137
  },
  "Santi Aldama": {
   "gp": 8,
   "tpm": 7,
   "xtpm": 8.92,
   "fgm": 18,
   "xfgm": 19.48,
   "fga": 44
  },
  "Scoot Henderson": {
   "gp": 16,
   "tpm": 17,
   "xtpm": 25.31,
   "fgm": 48,
   "xfgm": 61.32,
   "fga": 143
  },
  "Scottie Barnes": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 12.87,
   "fgm": 109,
   "xfgm": 104.95,
   "fga": 220
  },
  "Scotty Pippen Jr.": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 3.2,
   "fgm": 11,
   "xfgm": 11.11,
   "fga": 26
  },
  "Sergio de Larrea": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 1.77,
   "fgm": 9,
   "xfgm": 7.63,
   "fga": 18
  },
  "Shai Gilgeous-Alexander": {
   "gp": 16,
   "tpm": 38,
   "xtpm": 36.09,
   "fgm": 180,
   "xfgm": 166.13,
   "fga": 373
  },
  "Sidy Cissoko": {
   "gp": 16,
   "tpm": 23,
   "xtpm": 21.51,
   "fgm": 41,
   "xfgm": 39.35,
   "fga": 89
  },
  "Simone Fontecchio": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 8.21,
   "fgm": 14,
   "xfgm": 14.78,
   "fga": 34
  },
  "Sion James": {
   "gp": 15,
   "tpm": 16,
   "xtpm": 23.26,
   "fgm": 31,
   "xfgm": 39.55,
   "fga": 93
  },
  "Spencer Jones": {
   "gp": 8,
   "tpm": 6,
   "xtpm": 5.04,
   "fgm": 11,
   "xfgm": 10.55,
   "fga": 23
  },
  "Stephen Curry": {
   "gp": 10,
   "tpm": 43,
   "xtpm": 33.34,
   "fgm": 80,
   "xfgm": 65.72,
   "fga": 160
  },
  "Stephon Castle": {
   "gp": 17,
   "tpm": 37,
   "xtpm": 35.15,
   "fgm": 100,
   "xfgm": 104.7,
   "fga": 229
  },
  "Steven Adams": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 7.04,
   "fga": 12
  },
  "Svi Mykhailiuk": {
   "gp": 18,
   "tpm": 29,
   "xtpm": 26.34,
   "fgm": 42,
   "xfgm": 43.7,
   "fga": 108
  },
  "T.J. McConnell": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 24,
   "xfgm": 21.43,
   "fga": 46
  },
  "Tacko Fall": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.66,
   "fga": 1
  },
  "Tari Eason": {
   "gp": 17,
   "tpm": 17,
   "xtpm": 22.22,
   "fgm": 68,
   "xfgm": 77.56,
   "fga": 157
  },
  "Tarris Reed Jr.": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 8,
   "xfgm": 8.5,
   "fga": 15
  },
  "Taurean Prince": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 1.43,
   "fgm": 2,
   "xfgm": 2.53,
   "fga": 6
  },
  "Taylor Hendricks": {
   "gp": 12,
   "tpm": 9,
   "xtpm": 7.87,
   "fgm": 36,
   "xfgm": 31.2,
   "fga": 62
  },
  "Terance Mann": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 4.31,
   "fgm": 4,
   "xfgm": 6.88,
   "fga": 17
  },
  "Terrence Shannon Jr": {
   "gp": 14,
   "tpm": 20,
   "xtpm": 18.19,
   "fgm": 56,
   "xfgm": 57.45,
   "fga": 121
  },
  "Thomas Bryant": {
   "gp": 11,
   "tpm": 13,
   "xtpm": 10.66,
   "fgm": 33,
   "xfgm": 29.97,
   "fga": 62
  },
  "Tidjane Salaün": {
   "gp": 14,
   "tpm": 14,
   "xtpm": 14.61,
   "fgm": 26,
   "xfgm": 25.84,
   "fga": 59
  },
  "Tim Hardaway Jr.": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 14.19,
   "fgm": 15,
   "xfgm": 23.64,
   "fga": 58
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
   "gp": 8,
   "tpm": 1,
   "xtpm": 2.15,
   "fgm": 5,
   "xfgm": 6.12,
   "fga": 12
  },
  "Tolu Smith": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 4.63,
   "fga": 7
  },
  "Tony Bradley": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 7.63,
   "fga": 14
  },
  "Toumani Camara": {
   "gp": 16,
   "tpm": 41,
   "xtpm": 38.55,
   "fgm": 68,
   "xfgm": 64.51,
   "fga": 154
  },
  "Trae Young": {
   "gp": 18,
   "tpm": 38,
   "xtpm": 41.49,
   "fgm": 82,
   "xfgm": 93.28,
   "fga": 225
  },
  "Trayce Jackson-Davis": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 17,
   "xfgm": 15.19,
   "fga": 26
  },
  "Tre Donaldson": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.08,
   "fgm": 0,
   "xfgm": 1.92,
   "fga": 5
  },
  "Tre Johnson": {
   "gp": 16,
   "tpm": 21,
   "xtpm": 27.0,
   "fgm": 52,
   "xfgm": 55.94,
   "fga": 138
  },
  "Tre Jones": {
   "gp": 16,
   "tpm": 5,
   "xtpm": 6.41,
   "fgm": 63,
   "xfgm": 69.75,
   "fga": 125
  },
  "Tre Mann": {
   "gp": 8,
   "tpm": 1,
   "xtpm": 1.77,
   "fgm": 3,
   "xfgm": 5.07,
   "fga": 10
  },
  "Trendon Watford": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 2.12,
   "fgm": 12,
   "xfgm": 12.48,
   "fga": 22
  },
  "Trevon Brazile": {
   "gp": 15,
   "tpm": 11,
   "xtpm": 10.72,
   "fgm": 39,
   "xfgm": 34.06,
   "fga": 68
  },
  "Trey Lyles": {
   "gp": 17,
   "tpm": 18,
   "xtpm": 18.6,
   "fgm": 35,
   "xfgm": 31.05,
   "fga": 74
  },
  "Trey Murphy III": {
   "gp": 10,
   "tpm": 23,
   "xtpm": 21.62,
   "fgm": 52,
   "xfgm": 49.88,
   "fga": 111
  },
  "Tristan Enaruna": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.78,
   "fgm": 3,
   "xfgm": 5.09,
   "fga": 10
  },
  "Tristan da Silva": {
   "gp": 14,
   "tpm": 45,
   "xtpm": 39.16,
   "fgm": 72,
   "xfgm": 61.94,
   "fga": 152
  },
  "Ty Jerome": {
   "gp": 12,
   "tpm": 31,
   "xtpm": 30.81,
   "fgm": 105,
   "xfgm": 90.57,
   "fga": 219
  },
  "Tyler Herro": {
   "gp": 16,
   "tpm": 46,
   "xtpm": 42.9,
   "fgm": 117,
   "xfgm": 115.95,
   "fga": 260
  },
  "Tyler Kolek": {
   "gp": 15,
   "tpm": 8,
   "xtpm": 11.01,
   "fgm": 22,
   "xfgm": 24.65,
   "fga": 56
  },
  "Tyrese Haliburton": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 9.63,
   "fgm": 32,
   "xfgm": 26.89,
   "fga": 62
  },
  "Tyrese Maxey": {
   "gp": 16,
   "tpm": 41,
   "xtpm": 39.35,
   "fgm": 137,
   "xfgm": 130.49,
   "fga": 277
  },
  "Tyrese Proctor": {
   "gp": 16,
   "tpm": 28,
   "xtpm": 22.03,
   "fgm": 55,
   "xfgm": 46.82,
   "fga": 108
  },
  "Tyus Jones": {
   "gp": 15,
   "tpm": 4,
   "xtpm": 6.01,
   "fgm": 11,
   "xfgm": 14.3,
   "fga": 34
  },
  "VJ Edgecombe": {
   "gp": 16,
   "tpm": 26,
   "xtpm": 27.78,
   "fgm": 85,
   "xfgm": 87.78,
   "fga": 184
  },
  "Victor Wembanyama": {
   "gp": 17,
   "tpm": 35,
   "xtpm": 39.3,
   "fgm": 191,
   "xfgm": 176.48,
   "fga": 353
  },
  "Vít Krejčí": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 5.32,
   "fgm": 6,
   "xfgm": 7.93,
   "fga": 20
  },
  "Walker Kessler": {
   "gp": 16,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 95,
   "xfgm": 89.33,
   "fga": 143
  },
  "Walter Clayton Jr.": {
   "gp": 16,
   "tpm": 22,
   "xtpm": 19.85,
   "fgm": 42,
   "xfgm": 40.48,
   "fga": 95
  },
  "Wendell Carter Jr.": {
   "gp": 16,
   "tpm": 16,
   "xtpm": 14.67,
   "fgm": 72,
   "xfgm": 62.66,
   "fga": 127
  },
  "Will Richard": {
   "gp": 16,
   "tpm": 17,
   "xtpm": 16.07,
   "fgm": 43,
   "xfgm": 41.81,
   "fga": 89
  },
  "Will Riley": {
   "gp": 15,
   "tpm": 4,
   "xtpm": 5.37,
   "fgm": 14,
   "xfgm": 13.88,
   "fga": 30
  },
  "Yang Hansen": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 3.54,
   "fgm": 9,
   "xfgm": 8.81,
   "fga": 20
  },
  "Yanic Konan Niederhäuser": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 4.06,
   "fga": 7
  },
  "Yaxel Lendeborg": {
   "gp": 17,
   "tpm": 33,
   "xtpm": 31.92,
   "fgm": 112,
   "xfgm": 116.14,
   "fga": 248
  },
  "Yves Missi": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 18,
   "xfgm": 19.37,
   "fga": 33
  },
  "Zaccharie Risacher": {
   "gp": 17,
   "tpm": 17,
   "xtpm": 21.65,
   "fgm": 62,
   "xfgm": 65.29,
   "fga": 136
  },
  "Zach Collins": {
   "gp": 11,
   "tpm": 2,
   "xtpm": 5.34,
   "fgm": 15,
   "xfgm": 21.34,
   "fga": 42
  },
  "Zach Edey": {
   "gp": 13,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 46,
   "xfgm": 44.37,
   "fga": 78
  },
  "Zach LaVine": {
   "gp": 15,
   "tpm": 40,
   "xtpm": 35.84,
   "fgm": 104,
   "xfgm": 90.48,
   "fga": 209
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
   "gp": 14,
   "tpm": 22,
   "xtpm": 18.84,
   "fgm": 46,
   "xfgm": 38.81,
   "fga": 86
  },
  "Zion Williamson": {
   "gp": 16,
   "tpm": 6,
   "xtpm": 4.61,
   "fgm": 124,
   "xfgm": 125.14,
   "fga": 212
  },
  "Zuby Ejiofor": {
   "gp": 11,
   "tpm": 6,
   "xtpm": 5.67,
   "fgm": 20,
   "xfgm": 21.75,
   "fga": 41
  },
  "Zyon Pullin": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.32,
   "fga": 3
  }
 }
};
