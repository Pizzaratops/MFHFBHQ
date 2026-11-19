// ============================================================
//  x3PM / xFGM der laufenden Saison aus Play-by-Play
//  Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data (nicht unser Projekt, frei veröffentlichte Daten)
//  Methode: Josh Lloyd (joshlloydfantasy.com/research/xstats-method)
//  Erzeugt von scripts/xstats-pbp.py am 2026-11-19 · Saison 2026-27 · Stand 2026-11-18
//  Wird von scripts/build-live-projections.js gelesen (3PM, FG%).
//  META {"season": "2026-27", "assetUpdated": "Thu, 19 Nov 2026 13:12:05 GMT"}
// ============================================================
const XSTATS_PBP = {
 "meta": {
  "season": "2026-27",
  "through": "2026-11-18",
  "players": 472,
  "games": 222,
  "shots": 39055,
  "assetUpdated": "Thu, 19 Nov 2026 13:12:05 GMT",
  "zoneRates": {
   "C3": 0.3689,
   "AB3": 0.3535,
   "RA": 0.6617,
   "PAINT": 0.4373,
   "MID": 0.4098
  },
  "source": "Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data"
 },
 "players": {
  "AJ Dybantsa": {
   "gp": 12,
   "tpm": 10,
   "xtpm": 16.71,
   "fgm": 72,
   "xfgm": 84.81,
   "fga": 173
  },
  "AJ Green": {
   "gp": 15,
   "tpm": 26,
   "xtpm": 22.07,
   "fgm": 29,
   "xfgm": 25.28,
   "fga": 69
  },
  "AJ Johnson": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 4.54,
   "fga": 8
  },
  "Aaron Gordon": {
   "gp": 13,
   "tpm": 14,
   "xtpm": 17.43,
   "fgm": 48,
   "xfgm": 54.84,
   "fga": 114
  },
  "Aaron Nesmith": {
   "gp": 13,
   "tpm": 20,
   "xtpm": 25.39,
   "fgm": 50,
   "xfgm": 57.89,
   "fga": 131
  },
  "Aaron Wiggins": {
   "gp": 15,
   "tpm": 42,
   "xtpm": 37.32,
   "fgm": 80,
   "xfgm": 74.0,
   "fga": 177
  },
  "Ace Bailey": {
   "gp": 16,
   "tpm": 25,
   "xtpm": 33.19,
   "fgm": 86,
   "xfgm": 84.91,
   "fga": 192
  },
  "Aday Mara": {
   "gp": 15,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 61,
   "xfgm": 55.98,
   "fga": 96
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
   "gp": 13,
   "tpm": 10,
   "xtpm": 14.25,
   "fgm": 92,
   "xfgm": 87.99,
   "fga": 180
  },
  "Al Horford": {
   "gp": 12,
   "tpm": 11,
   "xtpm": 12.42,
   "fgm": 18,
   "xfgm": 21.12,
   "fga": 52
  },
  "Alex Caruso": {
   "gp": 12,
   "tpm": 17,
   "xtpm": 14.19,
   "fgm": 27,
   "xfgm": 26.22,
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
   "gp": 8,
   "tpm": 2,
   "xtpm": 2.86,
   "fgm": 7,
   "xfgm": 7.27,
   "fga": 15
  },
  "Alex Sarr": {
   "gp": 15,
   "tpm": 18,
   "xtpm": 19.54,
   "fgm": 69,
   "xfgm": 62.37,
   "fga": 128
  },
  "Alijah Martin": {
   "gp": 14,
   "tpm": 13,
   "xtpm": 8.55,
   "fgm": 27,
   "xfgm": 20.45,
   "fga": 43
  },
  "Allen Graves": {
   "gp": 15,
   "tpm": 9,
   "xtpm": 11.44,
   "fgm": 26,
   "xfgm": 28.99,
   "fga": 62
  },
  "Alperen Sengun": {
   "gp": 14,
   "tpm": 14,
   "xtpm": 9.93,
   "fgm": 114,
   "xfgm": 111.05,
   "fga": 209
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
   "gp": 15,
   "tpm": 5,
   "xtpm": 5.36,
   "fgm": 90,
   "xfgm": 93.79,
   "fga": 168
  },
  "Andre Drummond": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 22,
   "xfgm": 32.53,
   "fga": 52
  },
  "Andrew Nembhard": {
   "gp": 11,
   "tpm": 25,
   "xtpm": 21.97,
   "fgm": 62,
   "xfgm": 60.42,
   "fga": 139
  },
  "Andrew Wiggins": {
   "gp": 15,
   "tpm": 20,
   "xtpm": 21.37,
   "fgm": 51,
   "xfgm": 50.59,
   "fga": 117
  },
  "Anfernee Simons": {
   "gp": 16,
   "tpm": 37,
   "xtpm": 31.9,
   "fgm": 61,
   "xfgm": 56.42,
   "fga": 136
  },
  "Anthony Black": {
   "gp": 11,
   "tpm": 23,
   "xtpm": 20.29,
   "fgm": 61,
   "xfgm": 59.94,
   "fga": 136
  },
  "Anthony Davis": {
   "gp": 14,
   "tpm": 11,
   "xtpm": 11.34,
   "fgm": 130,
   "xfgm": 126.09,
   "fga": 250
  },
  "Anthony Edwards": {
   "gp": 4,
   "tpm": 18,
   "xtpm": 15.97,
   "fgm": 50,
   "xfgm": 46.64,
   "fga": 104
  },
  "Anthony Gill": {
   "gp": 5,
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
   "xfgm": 7.27,
   "fga": 15
  },
  "Ausar Thompson": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 1.78,
   "fgm": 58,
   "xfgm": 62.49,
   "fga": 112
  },
  "Austin Reaves": {
   "gp": 12,
   "tpm": 27,
   "xtpm": 23.41,
   "fgm": 97,
   "xfgm": 82.87,
   "fga": 189
  },
  "Ayo Dosunmu": {
   "gp": 15,
   "tpm": 32,
   "xtpm": 24.61,
   "fgm": 108,
   "xfgm": 103.47,
   "fga": 207
  },
  "Baba Miller": {
   "gp": 11,
   "tpm": 3,
   "xtpm": 2.84,
   "fgm": 15,
   "xfgm": 13.62,
   "fga": 27
  },
  "Bam Adebayo": {
   "gp": 15,
   "tpm": 12,
   "xtpm": 17.46,
   "fgm": 97,
   "xfgm": 88.31,
   "fga": 185
  },
  "Baylor Scheierman": {
   "gp": 15,
   "tpm": 19,
   "xtpm": 16.06,
   "fgm": 29,
   "xfgm": 27.77,
   "fga": 69
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
   "xtpm": 9.22,
   "fgm": 23,
   "xfgm": 30.59,
   "fga": 64
  },
  "Bennett Stirtz": {
   "gp": 15,
   "tpm": 23,
   "xtpm": 18.12,
   "fgm": 36,
   "xfgm": 33.89,
   "fga": 80
  },
  "Bilal Coulibaly": {
   "gp": 15,
   "tpm": 6,
   "xtpm": 12.91,
   "fgm": 39,
   "xfgm": 43.45,
   "fga": 86
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
   "gp": 15,
   "tpm": 19,
   "xtpm": 22.12,
   "fgm": 43,
   "xfgm": 48.77,
   "fga": 114
  },
  "Bogdan Bogdanović": {
   "gp": 16,
   "tpm": 19,
   "xtpm": 15.37,
   "fgm": 29,
   "xfgm": 23.09,
   "fga": 60
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
   "gp": 15,
   "tpm": 27,
   "xtpm": 24.47,
   "fgm": 49,
   "xfgm": 46.67,
   "fga": 110
  },
  "Braden Smith": {
   "gp": 9,
   "tpm": 4,
   "xtpm": 3.92,
   "fgm": 16,
   "xfgm": 15.41,
   "fga": 34
  },
  "Branden Carlson": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 3.24,
   "fgm": 10,
   "xfgm": 8.5,
   "fga": 18
  },
  "Brandin Podziemski": {
   "gp": 13,
   "tpm": 34,
   "xtpm": 31.99,
   "fgm": 72,
   "xfgm": 67.4,
   "fga": 160
  },
  "Brandon Miller": {
   "gp": 12,
   "tpm": 33,
   "xtpm": 43.32,
   "fgm": 84,
   "xfgm": 98.45,
   "fga": 234
  },
  "Brandon Williams": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 8.16,
   "fgm": 33,
   "xfgm": 37.02,
   "fga": 80
  },
  "Brayden Burries": {
   "gp": 15,
   "tpm": 16,
   "xtpm": 19.2,
   "fgm": 50,
   "xfgm": 52.57,
   "fga": 116
  },
  "Brice Sensabaugh": {
   "gp": 16,
   "tpm": 27,
   "xtpm": 23.79,
   "fgm": 62,
   "xfgm": 54.63,
   "fga": 133
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
   "gp": 13,
   "tpm": 21,
   "xtpm": 18.06,
   "fgm": 75,
   "xfgm": 64.79,
   "fga": 140
  },
  "Brooks Barnhizer": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 3,
   "xfgm": 3.67,
   "fga": 7
  },
  "Bruce Thornton": {
   "gp": 11,
   "tpm": 2,
   "xtpm": 2.12,
   "fgm": 7,
   "xfgm": 6.66,
   "fga": 16
  },
  "Bryce Hopkins": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 1.78,
   "fgm": 14,
   "xfgm": 12.73,
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
   "gp": 15,
   "tpm": 20,
   "xtpm": 16.02,
   "fgm": 24,
   "xfgm": 25.23,
   "fga": 64
  },
  "Buddy Hield": {
   "gp": 12,
   "tpm": 19,
   "xtpm": 16.63,
   "fgm": 35,
   "xfgm": 32.44,
   "fga": 73
  },
  "CJ McCollum": {
   "gp": 14,
   "tpm": 25,
   "xtpm": 25.12,
   "fgm": 74,
   "xfgm": 75.36,
   "fga": 171
  },
  "Cade Cunningham": {
   "gp": 13,
   "tpm": 26,
   "xtpm": 29.05,
   "fgm": 116,
   "xfgm": 112.38,
   "fga": 243
  },
  "Caleb Love": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 0.71,
   "fgm": 1,
   "xfgm": 1.14,
   "fga": 3
  },
  "Caleb Martin": {
   "gp": 11,
   "tpm": 13,
   "xtpm": 8.61,
   "fgm": 25,
   "xfgm": 21.14,
   "fga": 47
  },
  "Caleb Wilson": {
   "gp": 10,
   "tpm": 23,
   "xtpm": 25.25,
   "fgm": 68,
   "xfgm": 75.38,
   "fga": 162
  },
  "Cam Christie": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 2.49,
   "fgm": 3,
   "xfgm": 6.45,
   "fga": 14
  },
  "Cam Spencer": {
   "gp": 15,
   "tpm": 32,
   "xtpm": 19.51,
   "fgm": 59,
   "xfgm": 42.48,
   "fga": 104
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
   "gp": 15,
   "tpm": 29,
   "xtpm": 31.9,
   "fgm": 82,
   "xfgm": 94.59,
   "fga": 205
  },
  "Cameron Carr": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 2.12,
   "fgm": 3,
   "xfgm": 3.19,
   "fga": 8
  },
  "Cameron Johnson": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 18.86,
   "fgm": 41,
   "xfgm": 40.64,
   "fga": 94
  },
  "Caris LeVert": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.71,
   "fgm": 3,
   "xfgm": 2.69,
   "fga": 5
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
   "gp": 14,
   "tpm": 12,
   "xtpm": 12.51,
   "fgm": 17,
   "xfgm": 20.85,
   "fga": 49
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
   "gp": 14,
   "tpm": 33,
   "xtpm": 25.87,
   "fgm": 72,
   "xfgm": 67.08,
   "fga": 151
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
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 41,
   "xfgm": 35.47,
   "fga": 62
  },
  "Chaz Lanier": {
   "gp": 6,
   "tpm": 7,
   "xtpm": 5.0,
   "fgm": 9,
   "xfgm": 6.5,
   "fga": 17
  },
  "Chet Holmgren": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.14,
   "fgm": 11,
   "xfgm": 14.66,
   "fga": 27
  },
  "Chris Cenac Jr.": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 2.17,
   "fgm": 10,
   "xfgm": 8.12,
   "fga": 15
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
   "gp": 13,
   "tpm": 13,
   "xtpm": 15.97,
   "fgm": 25,
   "xfgm": 28.64,
   "fga": 70
  },
  "Christian Braun": {
   "gp": 13,
   "tpm": 20,
   "xtpm": 22.53,
   "fgm": 64,
   "xfgm": 66.13,
   "fga": 136
  },
  "Clint Capela": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 9,
   "xfgm": 8.82,
   "fga": 14
  },
  "Coby White": {
   "gp": 7,
   "tpm": 8,
   "xtpm": 14.17,
   "fgm": 30,
   "xfgm": 35.38,
   "fga": 79
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
   "gp": 14,
   "tpm": 31,
   "xtpm": 30.83,
   "fgm": 45,
   "xfgm": 45.09,
   "fga": 116
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
   "gp": 15,
   "tpm": 15,
   "xtpm": 19.28,
   "fgm": 56,
   "xfgm": 60.96,
   "fga": 130
  },
  "Cooper Flagg": {
   "gp": 14,
   "tpm": 20,
   "xtpm": 23.76,
   "fgm": 117,
   "xfgm": 113.14,
   "fga": 241
  },
  "Corey Kispert": {
   "gp": 8,
   "tpm": 15,
   "xtpm": 9.91,
   "fgm": 23,
   "xfgm": 16.73,
   "fga": 40
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
   "xfgm": 11.27,
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
   "gp": 3,
   "tpm": 3,
   "xtpm": 2.15,
   "fgm": 5,
   "xfgm": 3.25,
   "fga": 8
  },
  "Damian Lillard": {
   "gp": 14,
   "tpm": 44,
   "xtpm": 44.25,
   "fgm": 80,
   "xfgm": 83.85,
   "fga": 202
  },
  "Daniel Gafford": {
   "gp": 15,
   "tpm": 2,
   "xtpm": 0.72,
   "fgm": 51,
   "xfgm": 43.6,
   "fga": 74
  },
  "Daniss Jenkins": {
   "gp": 14,
   "tpm": 31,
   "xtpm": 25.29,
   "fgm": 70,
   "xfgm": 66.55,
   "fga": 155
  },
  "Danny Wolf": {
   "gp": 9,
   "tpm": 17,
   "xtpm": 12.47,
   "fgm": 26,
   "xfgm": 26.99,
   "fga": 60
  },
  "Darius Acuff Jr.": {
   "gp": 14,
   "tpm": 46,
   "xtpm": 47.42,
   "fgm": 132,
   "xfgm": 136.17,
   "fga": 317
  },
  "Darius Garland": {
   "gp": 13,
   "tpm": 32,
   "xtpm": 30.79,
   "fgm": 94,
   "xfgm": 87.35,
   "fga": 202
  },
  "Darryn Peterson": {
   "gp": 16,
   "tpm": 35,
   "xtpm": 34.39,
   "fgm": 91,
   "xfgm": 95.11,
   "fga": 225
  },
  "David Jones Garcia": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 1,
   "xfgm": 3.78,
   "fga": 8
  },
  "Davion Mitchell": {
   "gp": 15,
   "tpm": 38,
   "xtpm": 30.9,
   "fgm": 94,
   "xfgm": 84.6,
   "fga": 184
  },
  "Day'Ron Sharpe": {
   "gp": 14,
   "tpm": 5,
   "xtpm": 5.76,
   "fgm": 45,
   "xfgm": 48.51,
   "fga": 85
  },
  "De'Aaron Fox": {
   "gp": 14,
   "tpm": 13,
   "xtpm": 16.03,
   "fgm": 61,
   "xfgm": 58.99,
   "fga": 127
  },
  "De'Andre Hunter": {
   "gp": 12,
   "tpm": 24,
   "xtpm": 23.5,
   "fgm": 55,
   "xfgm": 54.4,
   "fga": 129
  },
  "De'Anthony Melton": {
   "gp": 15,
   "tpm": 31,
   "xtpm": 27.76,
   "fgm": 43,
   "xfgm": 45.28,
   "fga": 111
  },
  "DeAndre Jordan": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 6.62,
   "fga": 10
  },
  "DeMar DeRozan": {
   "gp": 12,
   "tpm": 3,
   "xtpm": 6.12,
   "fgm": 41,
   "xfgm": 44.11,
   "fga": 101
  },
  "Dean Wade": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 11.39,
   "fgm": 22,
   "xfgm": 21.28,
   "fga": 48
  },
  "Deandre Ayton": {
   "gp": 16,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 31,
   "xfgm": 28.16,
   "fga": 47
  },
  "Dejounte Murray": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 9.65,
   "fgm": 44,
   "xfgm": 50.62,
   "fga": 102
  },
  "Deni Avdija": {
   "gp": 13,
   "tpm": 27,
   "xtpm": 24.81,
   "fgm": 104,
   "xfgm": 100.32,
   "fga": 205
  },
  "Dennis Schröder": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 12.44,
   "fgm": 32,
   "xfgm": 41.87,
   "fga": 88
  },
  "Derik Queen": {
   "gp": 16,
   "tpm": 10,
   "xtpm": 7.84,
   "fgm": 64,
   "xfgm": 66.81,
   "fga": 129
  },
  "Derrick Jones Jr.": {
   "gp": 12,
   "tpm": 24,
   "xtpm": 16.74,
   "fgm": 48,
   "xfgm": 42.88,
   "fga": 91
  },
  "Derrick White": {
   "gp": 15,
   "tpm": 26,
   "xtpm": 30.17,
   "fgm": 71,
   "xfgm": 71.42,
   "fga": 167
  },
  "Desmond Bane": {
   "gp": 13,
   "tpm": 53,
   "xtpm": 45.11,
   "fgm": 78,
   "xfgm": 73.09,
   "fga": 183
  },
  "Devin Booker": {
   "gp": 14,
   "tpm": 27,
   "xtpm": 27.96,
   "fgm": 117,
   "xfgm": 105.56,
   "fga": 244
  },
  "Devin Carter": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.79,
   "fga": 2
  },
  "Devin Vassell": {
   "gp": 13,
   "tpm": 18,
   "xtpm": 20.29,
   "fgm": 49,
   "xfgm": 52.98,
   "fga": 123
  },
  "Dillon Brooks": {
   "gp": 14,
   "tpm": 30,
   "xtpm": 23.75,
   "fgm": 79,
   "xfgm": 76.1,
   "fga": 174
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
   "gp": 13,
   "tpm": 3,
   "xtpm": 3.89,
   "fgm": 71,
   "xfgm": 58.93,
   "fga": 111
  },
  "Donovan Clingan": {
   "gp": 14,
   "tpm": 13,
   "xtpm": 12.39,
   "fgm": 64,
   "xfgm": 60.6,
   "fga": 114
  },
  "Donovan Mitchell": {
   "gp": 15,
   "tpm": 41,
   "xtpm": 39.3,
   "fgm": 133,
   "xfgm": 123.05,
   "fga": 267
  },
  "Dorian Finney-Smith": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.08,
   "fgm": 1,
   "xfgm": 1.08,
   "fga": 3
  },
  "Drake Powell": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 0.71,
   "fgm": 4,
   "xfgm": 2.24,
   "fga": 5
  },
  "Draymond Green": {
   "gp": 13,
   "tpm": 4,
   "xtpm": 5.32,
   "fgm": 17,
   "xfgm": 19.55,
   "fga": 41
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
   "xtpm": 38.69,
   "fgm": 63,
   "xfgm": 55.05,
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
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 16,
   "xfgm": 15.31,
   "fga": 27
  },
  "Dylan Harper": {
   "gp": 15,
   "tpm": 17,
   "xtpm": 19.14,
   "fgm": 107,
   "xfgm": 104.91,
   "fga": 212
  },
  "Dyson Daniels": {
   "gp": 15,
   "tpm": 2,
   "xtpm": 6.76,
   "fgm": 64,
   "xfgm": 69.18,
   "fga": 131
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
   "gp": 8,
   "tpm": 18,
   "xtpm": 18.78,
   "fgm": 29,
   "xfgm": 32.56,
   "fga": 77
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
   "gp": 14,
   "tpm": 15,
   "xtpm": 14.89,
   "fgm": 25,
   "xfgm": 25.93,
   "fga": 66
  },
  "Evan Mobley": {
   "gp": 12,
   "tpm": 23,
   "xtpm": 17.02,
   "fgm": 76,
   "xfgm": 69.1,
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
   "gp": 14,
   "tpm": 18,
   "xtpm": 25.62,
   "fgm": 127,
   "xfgm": 128.66,
   "fga": 270
  },
  "Fred VanVleet": {
   "gp": 13,
   "tpm": 37,
   "xtpm": 32.96,
   "fgm": 61,
   "xfgm": 54.8,
   "fga": 141
  },
  "GG Jackson": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 11.05,
   "fgm": 27,
   "xfgm": 33.45,
   "fga": 71
  },
  "Gary Payton II": {
   "gp": 13,
   "tpm": 6,
   "xtpm": 7.82,
   "fgm": 27,
   "xfgm": 26.74,
   "fga": 55
  },
  "Gary Trent Jr.": {
   "gp": 7,
   "tpm": 9,
   "xtpm": 9.24,
   "fgm": 13,
   "xfgm": 14.65,
   "fga": 36
  },
  "Georges Niang": {
   "gp": 15,
   "tpm": 19,
   "xtpm": 21.09,
   "fgm": 43,
   "xfgm": 42.35,
   "fga": 101
  },
  "Giannis Antetokounmpo": {
   "gp": 15,
   "tpm": 8,
   "xtpm": 11.67,
   "fgm": 162,
   "xfgm": 144.85,
   "fga": 269
  },
  "Goga Bitadze": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 24,
   "xfgm": 21.6,
   "fga": 34
  },
  "Gradey Dick": {
   "gp": 13,
   "tpm": 12,
   "xtpm": 8.21,
   "fgm": 37,
   "xfgm": 35.2,
   "fga": 69
  },
  "Graham Ike": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 3.9,
   "fgm": 19,
   "xfgm": 22.36,
   "fga": 43
  },
  "Grant Williams": {
   "gp": 3,
   "tpm": 7,
   "xtpm": 7.15,
   "fgm": 12,
   "xfgm": 11.46,
   "fga": 28
  },
  "Grayson Allen": {
   "gp": 13,
   "tpm": 44,
   "xtpm": 34.0,
   "fgm": 56,
   "xfgm": 48.48,
   "fga": 125
  },
  "Gui Santos": {
   "gp": 12,
   "tpm": 6,
   "xtpm": 8.19,
   "fgm": 23,
   "xfgm": 28.87,
   "fga": 59
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
   "gp": 13,
   "tpm": 14,
   "xtpm": 12.82,
   "fgm": 20,
   "xfgm": 20.96,
   "fga": 50
  },
  "Herbert Jones": {
   "gp": 16,
   "tpm": 15,
   "xtpm": 18.17,
   "fgm": 41,
   "xfgm": 52.39,
   "fga": 112
  },
  "Hugo González": {
   "gp": 15,
   "tpm": 7,
   "xtpm": 10.79,
   "fgm": 21,
   "xfgm": 23.58,
   "fga": 50
  },
  "Immanuel Quickley": {
   "gp": 13,
   "tpm": 34,
   "xtpm": 35.17,
   "fgm": 78,
   "xfgm": 78.37,
   "fga": 190
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
   "gp": 14,
   "tpm": 12,
   "xtpm": 15.08,
   "fgm": 31,
   "xfgm": 37.34,
   "fga": 77
  },
  "Isaiah Collier": {
   "gp": 14,
   "tpm": 6,
   "xtpm": 5.67,
   "fgm": 30,
   "xfgm": 32.12,
   "fga": 68
  },
  "Isaiah Crawford": {
   "gp": 11,
   "tpm": 5,
   "xtpm": 3.93,
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
   "gp": 15,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 54,
   "xfgm": 54.25,
   "fga": 99
  },
  "Isaiah Jackson": {
   "gp": 12,
   "tpm": 2,
   "xtpm": 1.41,
   "fgm": 42,
   "xfgm": 41.09,
   "fga": 72
  },
  "Isaiah Joe": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 6.36,
   "fgm": 10,
   "xfgm": 9.54,
   "fga": 25
  },
  "Isaiah Stewart": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 7.82,
   "fgm": 43,
   "xfgm": 35.08,
   "fga": 69
  },
  "Ivica Zubac": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 41,
   "xfgm": 44.03,
   "fga": 74
  },
  "Ja Morant": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 4.96,
   "fgm": 26,
   "xfgm": 22.05,
   "fga": 48
  },
  "Ja'Kobe Walter": {
   "gp": 15,
   "tpm": 38,
   "xtpm": 37.87,
   "fgm": 61,
   "xfgm": 62.41,
   "fga": 151
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
   "gp": 16,
   "tpm": 38,
   "xtpm": 34.75,
   "fgm": 87,
   "xfgm": 84.13,
   "fga": 191
  },
  "Jabari Walker": {
   "gp": 12,
   "tpm": 8,
   "xtpm": 6.76,
   "fgm": 30,
   "xfgm": 29.25,
   "fga": 54
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
   "xfgm": 3.51,
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
   "gp": 15,
   "tpm": 20,
   "xtpm": 23.02,
   "fgm": 106,
   "xfgm": 96.05,
   "fga": 200
  },
  "Jae'Sean Tate": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 5.17,
   "fga": 9
  },
  "Jahmai Mashack": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 1.43,
   "fgm": 2,
   "xfgm": 3.38,
   "fga": 8
  },
  "Jaime Jaquez Jr.": {
   "gp": 15,
   "tpm": 29,
   "xtpm": 23.99,
   "fgm": 82,
   "xfgm": 84.09,
   "fga": 174
  },
  "Jake LaRavia": {
   "gp": 15,
   "tpm": 14,
   "xtpm": 10.74,
   "fgm": 32,
   "xfgm": 33.59,
   "fga": 68
  },
  "Jakob Poeltl": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 46,
   "xfgm": 44.15,
   "fga": 78
  },
  "Jalen Brunson": {
   "gp": 14,
   "tpm": 40,
   "xtpm": 37.18,
   "fgm": 128,
   "xfgm": 129.71,
   "fga": 294
  },
  "Jalen Duren": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 10,
   "xfgm": 9.23,
   "fga": 17
  },
  "Jalen Green": {
   "gp": 14,
   "tpm": 17,
   "xtpm": 19.2,
   "fgm": 64,
   "xfgm": 72.58,
   "fga": 152
  },
  "Jalen Johnson": {
   "gp": 12,
   "tpm": 9,
   "xtpm": 17.69,
   "fgm": 83,
   "xfgm": 96.54,
   "fga": 192
  },
  "Jalen Pickett": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.06,
   "fgm": 4,
   "xfgm": 3.42,
   "fga": 8
  },
  "Jalen Slawson": {
   "gp": 13,
   "tpm": 4,
   "xtpm": 5.33,
   "fgm": 16,
   "xfgm": 16.95,
   "fga": 34
  },
  "Jalen Smith": {
   "gp": 13,
   "tpm": 24,
   "xtpm": 23.53,
   "fgm": 67,
   "xfgm": 61.35,
   "fga": 127
  },
  "Jalen Suggs": {
   "gp": 6,
   "tpm": 9,
   "xtpm": 8.92,
   "fgm": 21,
   "xfgm": 23.45,
   "fga": 54
  },
  "Jalen Williams": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.18,
   "fgm": 15,
   "xfgm": 19.16,
   "fga": 39
  },
  "Jamal Cain": {
   "gp": 13,
   "tpm": 11,
   "xtpm": 13.93,
   "fgm": 24,
   "xfgm": 23.53,
   "fga": 60
  },
  "Jamal Murray": {
   "gp": 13,
   "tpm": 43,
   "xtpm": 32.97,
   "fgm": 112,
   "xfgm": 96.86,
   "fga": 221
  },
  "Jamal Shead": {
   "gp": 15,
   "tpm": 15,
   "xtpm": 18.81,
   "fgm": 42,
   "xfgm": 48.81,
   "fga": 109
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
   "gp": 15,
   "tpm": 39,
   "xtpm": 36.8,
   "fgm": 69,
   "xfgm": 76.61,
   "fga": 179
  },
  "James Wiseman": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 5.92,
   "fga": 10
  },
  "Jamison Battle": {
   "gp": 15,
   "tpm": 31,
   "xtpm": 25.98,
   "fgm": 46,
   "xfgm": 41.77,
   "fga": 100
  },
  "Jarace Walker": {
   "gp": 14,
   "tpm": 13,
   "xtpm": 17.77,
   "fgm": 30,
   "xfgm": 40.12,
   "fga": 90
  },
  "Jared McCain": {
   "gp": 15,
   "tpm": 35,
   "xtpm": 36.26,
   "fgm": 73,
   "xfgm": 77.12,
   "fga": 179
  },
  "Jaren Jackson Jr.": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 4.98,
   "fgm": 22,
   "xfgm": 20.12,
   "fga": 44
  },
  "Jaron Pierre Jr.": {
   "gp": 5,
   "tpm": 6,
   "xtpm": 6.73,
   "fgm": 13,
   "xfgm": 16.57,
   "fga": 37
  },
  "Jarred Vanderbilt": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 11,
   "xfgm": 9.93,
   "fga": 15
  },
  "Jarrett Allen": {
   "gp": 13,
   "tpm": 3,
   "xtpm": 1.77,
   "fgm": 66,
   "xfgm": 62.69,
   "fga": 106
  },
  "Jase Richardson": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 12.87,
   "fgm": 25,
   "xfgm": 34.32,
   "fga": 78
  },
  "Javon Small": {
   "gp": 8,
   "tpm": 10,
   "xtpm": 10.28,
   "fgm": 24,
   "xfgm": 24.76,
   "fga": 58
  },
  "Javonte Green": {
   "gp": 14,
   "tpm": 15,
   "xtpm": 18.17,
   "fgm": 30,
   "xfgm": 30.48,
   "fga": 71
  },
  "Jaxson Hayes": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 43,
   "xfgm": 39.94,
   "fga": 71
  },
  "Jay Huff": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 14.25,
   "fgm": 35,
   "xfgm": 32.09,
   "fga": 69
  },
  "Jaylen Brown": {
   "gp": 14,
   "tpm": 27,
   "xtpm": 24.92,
   "fgm": 117,
   "xfgm": 112.69,
   "fga": 237
  },
  "Jaylen Clark": {
   "gp": 12,
   "tpm": 9,
   "xtpm": 9.02,
   "fgm": 18,
   "xfgm": 18.44,
   "fga": 43
  },
  "Jaylen Wells": {
   "gp": 15,
   "tpm": 30,
   "xtpm": 26.81,
   "fgm": 55,
   "xfgm": 47.3,
   "fga": 113
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
   "gp": 8,
   "tpm": 6,
   "xtpm": 9.31,
   "fgm": 7,
   "xfgm": 13.47,
   "fga": 33
  },
  "Jaylon Tyson": {
   "gp": 8,
   "tpm": 13,
   "xtpm": 14.65,
   "fgm": 28,
   "xfgm": 30.64,
   "fga": 68
  },
  "Jayson Kent": {
   "gp": 5,
   "tpm": 5,
   "xtpm": 4.27,
   "fgm": 9,
   "xfgm": 10.19,
   "fga": 22
  },
  "Jayson Tatum": {
   "gp": 14,
   "tpm": 37,
   "xtpm": 39.34,
   "fgm": 118,
   "xfgm": 125.35,
   "fga": 276
  },
  "Jerami Grant": {
   "gp": 14,
   "tpm": 25,
   "xtpm": 20.12,
   "fgm": 54,
   "xfgm": 52.71,
   "fga": 115
  },
  "Jeremiah Fears": {
   "gp": 16,
   "tpm": 18,
   "xtpm": 22.7,
   "fgm": 96,
   "xfgm": 107.77,
   "fga": 215
  },
  "Jericho Sims": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 5,
   "xfgm": 6.09,
   "fga": 11
  },
  "Jett Howard": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 3.2,
   "fgm": 5,
   "xfgm": 4.71,
   "fga": 12
  },
  "Jevon Carter": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 14.25,
   "fgm": 16,
   "xfgm": 18.14,
   "fga": 48
  },
  "Joan Beringer": {
   "gp": 15,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 31,
   "xfgm": 33.5,
   "fga": 53
  },
  "Jock Landale": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 7.85,
   "fgm": 22,
   "xfgm": 23.46,
   "fga": 48
  },
  "Joel Embiid": {
   "gp": 13,
   "tpm": 6,
   "xtpm": 14.51,
   "fgm": 81,
   "xfgm": 96.68,
   "fga": 203
  },
  "John Collins": {
   "gp": 14,
   "tpm": 19,
   "xtpm": 15.37,
   "fgm": 59,
   "xfgm": 61.62,
   "fga": 124
  },
  "John Tonje": {
   "gp": 2,
   "tpm": 2,
   "xtpm": 1.78,
   "fgm": 3,
   "xfgm": 3.98,
   "fga": 9
  },
  "Jonathan Kuminga": {
   "gp": 14,
   "tpm": 22,
   "xtpm": 20.26,
   "fgm": 62,
   "xfgm": 70.31,
   "fga": 143
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
   "xfgm": 24.92,
   "fga": 50
  },
  "Jordan Goodwin": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 17.08,
   "fgm": 32,
   "xfgm": 29.97,
   "fga": 71
  },
  "Jordan Hawkins": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 5.7,
   "fgm": 10,
   "xfgm": 10.41,
   "fga": 26
  },
  "Jordan McLaughlin": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 3.23,
   "fgm": 10,
   "xfgm": 12.24,
   "fga": 25
  },
  "Jordan Poole": {
   "gp": 10,
   "tpm": 12,
   "xtpm": 13.82,
   "fgm": 22,
   "xfgm": 29.8,
   "fga": 67
  },
  "Jordan Walsh": {
   "gp": 15,
   "tpm": 12,
   "xtpm": 15.06,
   "fgm": 27,
   "xfgm": 30.65,
   "fga": 67
  },
  "Jose Alvarado": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 3.2,
   "fgm": 5,
   "xfgm": 8.69,
   "fga": 19
  },
  "Josh Dix": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 5.69,
   "fgm": 7,
   "xfgm": 11.79,
   "fga": 27
  },
  "Josh Giddey": {
   "gp": 14,
   "tpm": 17,
   "xtpm": 19.12,
   "fgm": 56,
   "xfgm": 62.2,
   "fga": 130
  },
  "Josh Green": {
   "gp": 14,
   "tpm": 11,
   "xtpm": 10.77,
   "fgm": 24,
   "xfgm": 23.43,
   "fga": 54
  },
  "Josh Hart": {
   "gp": 11,
   "tpm": 14,
   "xtpm": 17.43,
   "fgm": 27,
   "xfgm": 34.45,
   "fga": 79
  },
  "Josh Minott": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 7.82,
   "fgm": 11,
   "xfgm": 12.23,
   "fga": 29
  },
  "Josh Okogie": {
   "gp": 15,
   "tpm": 11,
   "xtpm": 11.13,
   "fgm": 20,
   "xfgm": 25.37,
   "fga": 59
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
   "gp": 14,
   "tpm": 35,
   "xtpm": 28.08,
   "fgm": 60,
   "xfgm": 55.53,
   "fga": 129
  },
  "Julian Champagnie": {
   "gp": 15,
   "tpm": 40,
   "xtpm": 33.86,
   "fgm": 49,
   "xfgm": 42.84,
   "fga": 112
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
   "gp": 14,
   "tpm": 23,
   "xtpm": 22.73,
   "fgm": 96,
   "xfgm": 100.42,
   "fga": 205
  },
  "Justin Champagnie": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.49,
   "fgm": 12,
   "xfgm": 10.87,
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
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 1,
   "xfgm": 1.03,
   "fga": 2
  },
  "Karl-Anthony Towns": {
   "gp": 14,
   "tpm": 28,
   "xtpm": 24.78,
   "fgm": 108,
   "xfgm": 101.07,
   "fga": 198
  },
  "Karlo Matković": {
   "gp": 15,
   "tpm": 17,
   "xtpm": 16.54,
   "fgm": 39,
   "xfgm": 35.49,
   "fga": 76
  },
  "Kasparas Jakučionis": {
   "gp": 14,
   "tpm": 14,
   "xtpm": 16.0,
   "fgm": 39,
   "xfgm": 39.32,
   "fga": 83
  },
  "Kawhi Leonard": {
   "gp": 2,
   "tpm": 4,
   "xtpm": 4.95,
   "fgm": 12,
   "xfgm": 17.26,
   "fga": 37
  },
  "Keaton Wagler": {
   "gp": 13,
   "tpm": 22,
   "xtpm": 21.27,
   "fgm": 40,
   "xfgm": 45.55,
   "fga": 108
  },
  "Keegan Murray": {
   "gp": 7,
   "tpm": 6,
   "xtpm": 9.64,
   "fgm": 27,
   "xfgm": 29.86,
   "fga": 69
  },
  "Kel'el Ware": {
   "gp": 15,
   "tpm": 10,
   "xtpm": 14.19,
   "fgm": 49,
   "xfgm": 61.72,
   "fga": 117
  },
  "Keldon Johnson": {
   "gp": 15,
   "tpm": 5,
   "xtpm": 8.19,
   "fgm": 49,
   "xfgm": 55.51,
   "fga": 104
  },
  "Kelly Oubre Jr.": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 18.54,
   "fgm": 56,
   "xfgm": 56.98,
   "fga": 119
  },
  "Kenrich Williams": {
   "gp": 15,
   "tpm": 19,
   "xtpm": 15.99,
   "fgm": 41,
   "xfgm": 40.24,
   "fga": 88
  },
  "Kentavious Caldwell-Pope": {
   "gp": 16,
   "tpm": 22,
   "xtpm": 17.82,
   "fgm": 30,
   "xfgm": 26.29,
   "fga": 67
  },
  "Keon Ellis": {
   "gp": 13,
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
   "gp": 16,
   "tpm": 26,
   "xtpm": 22.78,
   "fgm": 106,
   "xfgm": 92.62,
   "fga": 213
  },
  "Kevin Huerter": {
   "gp": 14,
   "tpm": 20,
   "xtpm": 22.04,
   "fgm": 51,
   "xfgm": 49.79,
   "fga": 115
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
   "gp": 15,
   "tpm": 34,
   "xtpm": 34.69,
   "fgm": 105,
   "xfgm": 100.96,
   "fga": 238
  },
  "Khaman Maluach": {
   "gp": 14,
   "tpm": 2,
   "xtpm": 2.51,
   "fgm": 43,
   "xfgm": 40.36,
   "fga": 69
  },
  "Khris Middleton": {
   "gp": 8,
   "tpm": 6,
   "xtpm": 5.03,
   "fgm": 12,
   "xfgm": 10.09,
   "fga": 25
  },
  "Kingston Flemings": {
   "gp": 12,
   "tpm": 9,
   "xtpm": 7.42,
   "fgm": 38,
   "xfgm": 36.33,
   "fga": 74
  },
  "Klay Thompson": {
   "gp": 14,
   "tpm": 57,
   "xtpm": 47.0,
   "fgm": 73,
   "xfgm": 60.77,
   "fga": 163
  },
  "Koa Peat": {
   "gp": 9,
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
   "gp": 13,
   "tpm": 18,
   "xtpm": 18.78,
   "fgm": 37,
   "xfgm": 38.12,
   "fga": 89
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
   "gp": 13,
   "tpm": 10,
   "xtpm": 9.62,
   "fgm": 35,
   "xfgm": 37.81,
   "fga": 74
  },
  "Kris Murray": {
   "gp": 11,
   "tpm": 3,
   "xtpm": 7.27,
   "fgm": 6,
   "xfgm": 10.35,
   "fga": 25
  },
  "Kyle Anderson": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 8.28,
   "fga": 17
  },
  "Kyle Filipowski": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 2.15,
   "fgm": 11,
   "xfgm": 12.92,
   "fga": 26
  },
  "Kyle Kuzma": {
   "gp": 15,
   "tpm": 25,
   "xtpm": 27.08,
   "fgm": 67,
   "xfgm": 67.44,
   "fga": 145
  },
  "Kyrie Irving": {
   "gp": 12,
   "tpm": 40,
   "xtpm": 36.92,
   "fgm": 97,
   "xfgm": 87.19,
   "fga": 205
  },
  "Kyshawn George": {
   "gp": 16,
   "tpm": 39,
   "xtpm": 32.62,
   "fgm": 105,
   "xfgm": 98.72,
   "fga": 216
  },
  "LJ Cryer": {
   "gp": 12,
   "tpm": 20,
   "xtpm": 17.74,
   "fgm": 26,
   "xfgm": 26.58,
   "fga": 69
  },
  "LaMelo Ball": {
   "gp": 15,
   "tpm": 52,
   "xtpm": 50.37,
   "fgm": 94,
   "xfgm": 92.7,
   "fga": 225
  },
  "Labaron Philon Jr.": {
   "gp": 11,
   "tpm": 5,
   "xtpm": 4.24,
   "fgm": 11,
   "xfgm": 10.15,
   "fga": 25
  },
  "Landry Shamet": {
   "gp": 14,
   "tpm": 31,
   "xtpm": 25.96,
   "fgm": 50,
   "xfgm": 43.94,
   "fga": 103
  },
  "Larry Nance Jr.": {
   "gp": 14,
   "tpm": 13,
   "xtpm": 11.84,
   "fgm": 21,
   "xfgm": 19.71,
   "fga": 46
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
   "gp": 12,
   "tpm": 10,
   "xtpm": 15.94,
   "fgm": 70,
   "xfgm": 77.28,
   "fga": 156
  },
  "Leaky Black": {
   "gp": 10,
   "tpm": 15,
   "xtpm": 12.14,
   "fgm": 17,
   "xfgm": 16.07,
   "fga": 41
  },
  "Leonard Miller": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 10.33,
   "fgm": 26,
   "xfgm": 29.45,
   "fga": 59
  },
  "Liam McNeeley": {
   "gp": 8,
   "tpm": 3,
   "xtpm": 4.63,
   "fgm": 7,
   "xfgm": 11.17,
   "fga": 25
  },
  "Luguentz Dort": {
   "gp": 15,
   "tpm": 25,
   "xtpm": 25.53,
   "fgm": 48,
   "xfgm": 58.24,
   "fga": 126
  },
  "Luka Dončić": {
   "gp": 14,
   "tpm": 72,
   "xtpm": 66.59,
   "fgm": 167,
   "xfgm": 147.04,
   "fga": 358
  },
  "Luka Garza": {
   "gp": 15,
   "tpm": 15,
   "xtpm": 13.2,
   "fgm": 26,
   "xfgm": 30.37,
   "fga": 66
  },
  "Luke Kennard": {
   "gp": 13,
   "tpm": 27,
   "xtpm": 21.7,
   "fgm": 41,
   "xfgm": 30.55,
   "fga": 80
  },
  "Luke Kornet": {
   "gp": 15,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 19,
   "xfgm": 24.43,
   "fga": 39
  },
  "Malachi Smith": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 0,
   "xfgm": 1.37,
   "fga": 3
  },
  "Malevy Leons": {
   "gp": 10,
   "tpm": 1,
   "xtpm": 1.43,
   "fgm": 3,
   "xfgm": 6.49,
   "fga": 13
  },
  "Malik Dia": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 2,
   "xfgm": 2.63,
   "fga": 6
  },
  "Malik Monk": {
   "gp": 13,
   "tpm": 14,
   "xtpm": 16.32,
   "fgm": 37,
   "xfgm": 40.72,
   "fga": 96
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
   "xfgm": 21.62,
   "fga": 54
  },
  "Marcus Smart": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 15.0,
   "fgm": 26,
   "xfgm": 24.57,
   "fga": 61
  },
  "Mario Hezonja": {
   "gp": 16,
   "tpm": 19,
   "xtpm": 21.06,
   "fgm": 60,
   "xfgm": 58.14,
   "fga": 123
  },
  "Marvin Bagley III": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 1.41,
   "fgm": 27,
   "xfgm": 28.42,
   "fga": 51
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
   "gp": 14,
   "tpm": 29,
   "xtpm": 27.42,
   "fgm": 67,
   "xfgm": 67.4,
   "fga": 145
  },
  "Matisse Thybulle": {
   "gp": 16,
   "tpm": 26,
   "xtpm": 24.59,
   "fgm": 38,
   "xfgm": 36.47,
   "fga": 90
  },
  "Max Christie": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 16.42,
   "fgm": 23,
   "xfgm": 27.38,
   "fga": 66
  },
  "Max Strus": {
   "gp": 7,
   "tpm": 14,
   "xtpm": 14.91,
   "fgm": 20,
   "xfgm": 23.71,
   "fga": 57
  },
  "Meleek Thomas": {
   "gp": 13,
   "tpm": 34,
   "xtpm": 27.39,
   "fgm": 67,
   "xfgm": 61.42,
   "fga": 141
  },
  "Micah Peavy": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 6.47,
   "fgm": 11,
   "xfgm": 16.96,
   "fga": 38
  },
  "Micah Potter": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 2.47,
   "fgm": 7,
   "xfgm": 6.2,
   "fga": 15
  },
  "Michael Porter Jr.": {
   "gp": 13,
   "tpm": 42,
   "xtpm": 40.44,
   "fgm": 86,
   "xfgm": 82.23,
   "fga": 191
  },
  "Mikal Bridges": {
   "gp": 14,
   "tpm": 13,
   "xtpm": 16.11,
   "fgm": 43,
   "xfgm": 48.25,
   "fga": 107
  },
  "Mike Conley": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 2.14,
   "fgm": 4,
   "xfgm": 2.14,
   "fga": 6
  },
  "Mikel Brown Jr.": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 20.18,
   "fgm": 35,
   "xfgm": 44.37,
   "fga": 103
  },
  "Miles Bridges": {
   "gp": 14,
   "tpm": 24,
   "xtpm": 27.08,
   "fgm": 78,
   "xfgm": 76.88,
   "fga": 166
  },
  "Miles McBride": {
   "gp": 14,
   "tpm": 28,
   "xtpm": 22.46,
   "fgm": 35,
   "xfgm": 30.89,
   "fga": 79
  },
  "Mitchell Robinson": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 32,
   "xfgm": 31.75,
   "fga": 49
  },
  "Mo Bamba": {
   "gp": 12,
   "tpm": 7,
   "xtpm": 3.21,
   "fgm": 47,
   "xfgm": 37.15,
   "fga": 63
  },
  "Mohamed Diawara": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 5.0,
   "fgm": 6,
   "xfgm": 8.08,
   "fga": 19
  },
  "Morez Johnson Jr.": {
   "gp": 14,
   "tpm": 2,
   "xtpm": 5.3,
   "fgm": 31,
   "xfgm": 39.96,
   "fga": 77
  },
  "Moritz Wagner": {
   "gp": 14,
   "tpm": 17,
   "xtpm": 9.58,
   "fgm": 51,
   "xfgm": 45.05,
   "fga": 84
  },
  "Moussa Cissé": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.75,
   "fga": 6
  },
  "Moussa Diabaté": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 43,
   "xfgm": 43.83,
   "fga": 70
  },
  "Myles Turner": {
   "gp": 14,
   "tpm": 18,
   "xtpm": 22.38,
   "fgm": 38,
   "xfgm": 44.68,
   "fga": 105
  },
  "Myron Gardner": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 5.01,
   "fgm": 8,
   "xfgm": 7.66,
   "fga": 18
  },
  "Naji Marshall": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 14.62,
   "fgm": 53,
   "xfgm": 53.28,
   "fga": 116
  },
  "Nate Ament": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 13.22,
   "fgm": 34,
   "xfgm": 36.41,
   "fga": 77
  },
  "Naz Reid": {
   "gp": 14,
   "tpm": 35,
   "xtpm": 35.52,
   "fgm": 95,
   "xfgm": 104.83,
   "fga": 236
  },
  "Neemias Queta": {
   "gp": 14,
   "tpm": 4,
   "xtpm": 2.17,
   "fgm": 51,
   "xfgm": 52.1,
   "fga": 89
  },
  "Nic Claxton": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 17,
   "xfgm": 15.2,
   "fga": 25
  },
  "Nick Martinelli": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 1.06,
   "fgm": 7,
   "xfgm": 5.23,
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
   "gp": 15,
   "tpm": 53,
   "xtpm": 54.04,
   "fgm": 106,
   "xfgm": 111.62,
   "fga": 254
  },
  "Nikola Jokić": {
   "gp": 13,
   "tpm": 16,
   "xtpm": 20.17,
   "fgm": 122,
   "xfgm": 108.42,
   "fga": 236
  },
  "Nikola Jović": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 5.0,
   "fgm": 7,
   "xfgm": 11.79,
   "fga": 26
  },
  "Nikola Topić": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 4,
   "xfgm": 4.35,
   "fga": 10
  },
  "Nikola Vučević": {
   "gp": 12,
   "tpm": 4,
   "xtpm": 7.12,
   "fgm": 13,
   "xfgm": 15.01,
   "fga": 36
  },
  "Nique Clifford": {
   "gp": 13,
   "tpm": 3,
   "xtpm": 5.69,
   "fgm": 16,
   "xfgm": 15.88,
   "fga": 37
  },
  "Noa Essengue": {
   "gp": 13,
   "tpm": 5,
   "xtpm": 9.28,
   "fgm": 20,
   "xfgm": 25.78,
   "fga": 53
  },
  "Noah Clowney": {
   "gp": 14,
   "tpm": 13,
   "xtpm": 15.72,
   "fgm": 33,
   "xfgm": 33.98,
   "fga": 76
  },
  "Nolan Traore": {
   "gp": 13,
   "tpm": 21,
   "xtpm": 17.77,
   "fgm": 67,
   "xfgm": 58.94,
   "fga": 129
  },
  "Norchad Omier": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 1.43,
   "fgm": 8,
   "xfgm": 6.27,
   "fga": 12
  },
  "Norman Powell": {
   "gp": 12,
   "tpm": 29,
   "xtpm": 29.37,
   "fgm": 79,
   "xfgm": 77.89,
   "fga": 175
  },
  "OG Anunoby": {
   "gp": 14,
   "tpm": 29,
   "xtpm": 32.14,
   "fgm": 65,
   "xfgm": 77.54,
   "fga": 165
  },
  "Obi Toppin": {
   "gp": 12,
   "tpm": 17,
   "xtpm": 18.6,
   "fgm": 51,
   "xfgm": 48.99,
   "fga": 102
  },
  "Olivier-Maxence Prosper": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 2.89,
   "fgm": 17,
   "xfgm": 15.36,
   "fga": 29
  },
  "Onyeka Okongwu": {
   "gp": 15,
   "tpm": 28,
   "xtpm": 29.47,
   "fgm": 86,
   "xfgm": 80.73,
   "fga": 172
  },
  "Oscar Tshiebwe": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 14,
   "xfgm": 12.79,
   "fga": 20
  },
  "Oso Ighodaro": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 32,
   "xfgm": 31.22,
   "fga": 54
  },
  "Ousmane Dieng": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 7.12,
   "fgm": 14,
   "xfgm": 14.81,
   "fga": 34
  },
  "P.J. Washington": {
   "gp": 15,
   "tpm": 34,
   "xtpm": 33.57,
   "fgm": 69,
   "xfgm": 71.0,
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
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.44,
   "fgm": 5,
   "xfgm": 4.5,
   "fga": 9
  },
  "Paolo Banchero": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 2.14,
   "fgm": 16,
   "xfgm": 10.81,
   "fga": 23
  },
  "Pascal Siakam": {
   "gp": 14,
   "tpm": 23,
   "xtpm": 22.76,
   "fgm": 119,
   "xfgm": 108.55,
   "fga": 229
  },
  "Pat Spencer": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 0.71,
   "fgm": 2,
   "xfgm": 2.88,
   "fga": 6
  },
  "Patrick Williams": {
   "gp": 7,
   "tpm": 7,
   "xtpm": 6.73,
   "fgm": 18,
   "xfgm": 17.49,
   "fga": 37
  },
  "Paul George": {
   "gp": 13,
   "tpm": 44,
   "xtpm": 36.92,
   "fgm": 93,
   "xfgm": 85.01,
   "fga": 200
  },
  "Paul Reed": {
   "gp": 14,
   "tpm": 5,
   "xtpm": 3.57,
   "fgm": 68,
   "xfgm": 64.52,
   "fga": 118
  },
  "Payton Pritchard": {
   "gp": 15,
   "tpm": 36,
   "xtpm": 34.36,
   "fgm": 70,
   "xfgm": 68.03,
   "fga": 165
  },
  "Pelle Larsson": {
   "gp": 12,
   "tpm": 16,
   "xtpm": 12.04,
   "fgm": 37,
   "xfgm": 36.18,
   "fga": 79
  },
  "Pete Nance": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.02,
   "fga": 2
  },
  "Peyton Watson": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 18.57,
   "fgm": 48,
   "xfgm": 61.51,
   "fga": 128
  },
  "Precious Achiuwa": {
   "gp": 12,
   "tpm": 4,
   "xtpm": 3.92,
   "fgm": 49,
   "xfgm": 47.13,
   "fga": 93
  },
  "Quentin Grimes": {
   "gp": 14,
   "tpm": 27,
   "xtpm": 22.35,
   "fgm": 59,
   "xfgm": 54.75,
   "fga": 119
  },
  "Quenton Jackson": {
   "gp": 15,
   "tpm": 17,
   "xtpm": 16.66,
   "fgm": 53,
   "xfgm": 51.72,
   "fga": 109
  },
  "Quinten Post": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 7.47,
   "fgm": 19,
   "xfgm": 17.53,
   "fga": 39
  },
  "RJ Barrett": {
   "gp": 14,
   "tpm": 21,
   "xtpm": 26.25,
   "fgm": 113,
   "xfgm": 118.11,
   "fga": 239
  },
  "Rasheer Fleming": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 2.14,
   "fgm": 2,
   "xfgm": 4.33,
   "fga": 10
  },
  "RayJ Dennis": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.49,
   "fgm": 5,
   "xfgm": 7.3,
   "fga": 16
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
   "gp": 13,
   "tpm": 31,
   "xtpm": 31.57,
   "fgm": 46,
   "xfgm": 46.73,
   "fga": 118
  },
  "Riley Minix": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 3.9,
   "fgm": 5,
   "xfgm": 7.4,
   "fga": 17
  },
  "Robert Williams III": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 33,
   "xfgm": 31.5,
   "fga": 51
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
   "gp": 7,
   "tpm": 4,
   "xtpm": 4.3,
   "fgm": 7,
   "xfgm": 7.38,
   "fga": 18
  },
  "Ronald Holland II": {
   "gp": 12,
   "tpm": 8,
   "xtpm": 9.3,
   "fgm": 21,
   "xfgm": 29.07,
   "fga": 61
  },
  "Royce O'Neale": {
   "gp": 14,
   "tpm": 21,
   "xtpm": 22.35,
   "fgm": 26,
   "xfgm": 26.32,
   "fga": 69
  },
  "Rudy Gobert": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 37,
   "xfgm": 50.2,
   "fga": 82
  },
  "Rui Hachimura": {
   "gp": 11,
   "tpm": 23,
   "xtpm": 22.06,
   "fgm": 51,
   "xfgm": 58.17,
   "fga": 130
  },
  "Ryan Conwell": {
   "gp": 13,
   "tpm": 19,
   "xtpm": 19.23,
   "fgm": 28,
   "xfgm": 30.15,
   "fga": 75
  },
  "Ryan Dunn": {
   "gp": 14,
   "tpm": 11,
   "xtpm": 9.38,
   "fgm": 27,
   "xfgm": 27.42,
   "fga": 57
  },
  "Ryan Kalkbrenner": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 24,
   "xfgm": 22.92,
   "fga": 36
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
   "gp": 13,
   "tpm": 21,
   "xtpm": 21.67,
   "fgm": 51,
   "xfgm": 59.36,
   "fga": 131
  },
  "Saddiq Bey": {
   "gp": 16,
   "tpm": 37,
   "xtpm": 33.51,
   "fgm": 88,
   "xfgm": 87.36,
   "fga": 198
  },
  "Sam Hauser": {
   "gp": 15,
   "tpm": 36,
   "xtpm": 27.41,
   "fgm": 44,
   "xfgm": 33.91,
   "fga": 90
  },
  "Sam Merrill": {
   "gp": 10,
   "tpm": 15,
   "xtpm": 16.74,
   "fgm": 24,
   "xfgm": 25.73,
   "fga": 63
  },
  "Sandro Mamukelashvili": {
   "gp": 16,
   "tpm": 21,
   "xtpm": 22.43,
   "fgm": 55,
   "xfgm": 58.89,
   "fga": 129
  },
  "Santi Aldama": {
   "gp": 6,
   "tpm": 6,
   "xtpm": 7.13,
   "fgm": 14,
   "xfgm": 15.27,
   "fga": 34
  },
  "Scoot Henderson": {
   "gp": 14,
   "tpm": 12,
   "xtpm": 21.38,
   "fgm": 39,
   "xfgm": 52.75,
   "fga": 123
  },
  "Scottie Barnes": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 12.87,
   "fgm": 95,
   "xfgm": 95.22,
   "fga": 199
  },
  "Scotty Pippen Jr.": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 3.2,
   "fgm": 11,
   "xfgm": 11.08,
   "fga": 26
  },
  "Sergio de Larrea": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 1.77,
   "fgm": 9,
   "xfgm": 7.62,
   "fga": 18
  },
  "Shai Gilgeous-Alexander": {
   "gp": 15,
   "tpm": 34,
   "xtpm": 33.6,
   "fgm": 166,
   "xfgm": 155.92,
   "fga": 349
  },
  "Sidy Cissoko": {
   "gp": 14,
   "tpm": 19,
   "xtpm": 18.28,
   "fgm": 33,
   "xfgm": 31.94,
   "fga": 73
  },
  "Simone Fontecchio": {
   "gp": 9,
   "tpm": 6,
   "xtpm": 7.13,
   "fgm": 10,
   "xfgm": 11.29,
   "fga": 27
  },
  "Sion James": {
   "gp": 14,
   "tpm": 15,
   "xtpm": 21.83,
   "fgm": 27,
   "xfgm": 35.69,
   "fga": 85
  },
  "Spencer Jones": {
   "gp": 6,
   "tpm": 5,
   "xtpm": 3.61,
   "fgm": 10,
   "xfgm": 9.12,
   "fga": 19
  },
  "Stephen Curry": {
   "gp": 10,
   "tpm": 43,
   "xtpm": 33.33,
   "fgm": 80,
   "xfgm": 65.73,
   "fga": 160
  },
  "Stephon Castle": {
   "gp": 15,
   "tpm": 30,
   "xtpm": 31.25,
   "fgm": 86,
   "xfgm": 94.76,
   "fga": 205
  },
  "Steven Adams": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 6.61,
   "fga": 11
  },
  "Svi Mykhailiuk": {
   "gp": 16,
   "tpm": 16,
   "xtpm": 19.58,
   "fgm": 26,
   "xfgm": 31.96,
   "fga": 79
  },
  "T.J. McConnell": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 23,
   "xfgm": 19.78,
   "fga": 42
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
   "gp": 16,
   "tpm": 16,
   "xtpm": 21.49,
   "fgm": 65,
   "xfgm": 74.85,
   "fga": 152
  },
  "Tarris Reed Jr.": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 8.14,
   "fga": 14
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
   "gp": 10,
   "tpm": 9,
   "xtpm": 6.46,
   "fgm": 30,
   "xfgm": 21.87,
   "fga": 44
  },
  "Terance Mann": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 4.3,
   "fgm": 4,
   "xfgm": 6.88,
   "fga": 17
  },
  "Terrence Shannon Jr": {
   "gp": 12,
   "tpm": 17,
   "xtpm": 16.02,
   "fgm": 46,
   "xfgm": 47.8,
   "fga": 101
  },
  "Thomas Bryant": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 9.93,
   "fgm": 30,
   "xfgm": 27.93,
   "fga": 58
  },
  "Tidjane Salaün": {
   "gp": 13,
   "tpm": 14,
   "xtpm": 13.19,
   "fgm": 24,
   "xfgm": 23.1,
   "fga": 53
  },
  "Tim Hardaway Jr.": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 14.19,
   "fgm": 15,
   "xfgm": 23.66,
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
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 7.64,
   "fga": 14
  },
  "Toumani Camara": {
   "gp": 14,
   "tpm": 36,
   "xtpm": 33.22,
   "fgm": 60,
   "xfgm": 55.87,
   "fga": 133
  },
  "Trae Young": {
   "gp": 16,
   "tpm": 31,
   "xtpm": 36.14,
   "fgm": 75,
   "xfgm": 84.59,
   "fga": 202
  },
  "Trayce Jackson-Davis": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 13,
   "xfgm": 12.99,
   "fga": 22
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
   "gp": 14,
   "tpm": 18,
   "xtpm": 25.58,
   "fgm": 47,
   "xfgm": 53.05,
   "fga": 131
  },
  "Tre Jones": {
   "gp": 14,
   "tpm": 5,
   "xtpm": 6.06,
   "fgm": 56,
   "xfgm": 59.05,
   "fga": 107
  },
  "Tre Mann": {
   "gp": 7,
   "tpm": 1,
   "xtpm": 1.77,
   "fgm": 3,
   "xfgm": 5.08,
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
   "gp": 13,
   "tpm": 9,
   "xtpm": 9.65,
   "fgm": 34,
   "xfgm": 28.82,
   "fga": 58
  },
  "Trey Lyles": {
   "gp": 15,
   "tpm": 15,
   "xtpm": 16.06,
   "fgm": 31,
   "xfgm": 28.08,
   "fga": 66
  },
  "Trey Murphy III": {
   "gp": 9,
   "tpm": 20,
   "xtpm": 18.77,
   "fgm": 47,
   "xfgm": 45.93,
   "fga": 101
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
   "gp": 12,
   "tpm": 39,
   "xtpm": 34.51,
   "fgm": 64,
   "xfgm": 55.52,
   "fga": 136
  },
  "Ty Jerome": {
   "gp": 11,
   "tpm": 28,
   "xtpm": 27.62,
   "fgm": 98,
   "xfgm": 83.89,
   "fga": 202
  },
  "Tyler Herro": {
   "gp": 14,
   "tpm": 35,
   "xtpm": 36.17,
   "fgm": 95,
   "xfgm": 99.57,
   "fga": 224
  },
  "Tyler Kolek": {
   "gp": 12,
   "tpm": 6,
   "xtpm": 8.18,
   "fgm": 16,
   "xfgm": 17.41,
   "fga": 40
  },
  "Tyrese Haliburton": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 9.62,
   "fgm": 32,
   "xfgm": 26.87,
   "fga": 62
  },
  "Tyrese Maxey": {
   "gp": 15,
   "tpm": 41,
   "xtpm": 38.27,
   "fgm": 133,
   "xfgm": 125.12,
   "fga": 266
  },
  "Tyrese Proctor": {
   "gp": 15,
   "tpm": 27,
   "xtpm": 20.95,
   "fgm": 53,
   "xfgm": 44.0,
   "fga": 102
  },
  "Tyus Jones": {
   "gp": 13,
   "tpm": 3,
   "xtpm": 4.95,
   "fgm": 9,
   "xfgm": 12.35,
   "fga": 29
  },
  "VJ Edgecombe": {
   "gp": 15,
   "tpm": 25,
   "xtpm": 26.36,
   "fgm": 80,
   "xfgm": 81.35,
   "fga": 172
  },
  "Victor Wembanyama": {
   "gp": 15,
   "tpm": 28,
   "xtpm": 32.93,
   "fgm": 158,
   "xfgm": 148.71,
   "fga": 298
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
   "gp": 15,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 88,
   "xfgm": 82.86,
   "fga": 132
  },
  "Walter Clayton Jr.": {
   "gp": 14,
   "tpm": 18,
   "xtpm": 17.37,
   "fgm": 34,
   "xfgm": 33.93,
   "fga": 80
  },
  "Wendell Carter Jr.": {
   "gp": 14,
   "tpm": 15,
   "xtpm": 13.22,
   "fgm": 66,
   "xfgm": 57.72,
   "fga": 117
  },
  "Will Richard": {
   "gp": 14,
   "tpm": 15,
   "xtpm": 13.2,
   "fgm": 37,
   "xfgm": 34.83,
   "fga": 74
  },
  "Will Riley": {
   "gp": 13,
   "tpm": 4,
   "xtpm": 5.01,
   "fgm": 12,
   "xfgm": 12.03,
   "fga": 26
  },
  "Yang Hansen": {
   "gp": 8,
   "tpm": 5,
   "xtpm": 3.54,
   "fgm": 8,
   "xfgm": 7.93,
   "fga": 18
  },
  "Yaxel Lendeborg": {
   "gp": 15,
   "tpm": 31,
   "xtpm": 29.08,
   "fgm": 104,
   "xfgm": 105.89,
   "fga": 224
  },
  "Yves Missi": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 14,
   "xfgm": 13.2,
   "fga": 23
  },
  "Zaccharie Risacher": {
   "gp": 15,
   "tpm": 16,
   "xtpm": 19.17,
   "fgm": 51,
   "xfgm": 53.82,
   "fga": 114
  },
  "Zach Collins": {
   "gp": 9,
   "tpm": 1,
   "xtpm": 3.2,
   "fgm": 10,
   "xfgm": 16.35,
   "fga": 31
  },
  "Zach Edey": {
   "gp": 12,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 42,
   "xfgm": 41.93,
   "fga": 74
  },
  "Zach LaVine": {
   "gp": 13,
   "tpm": 36,
   "xtpm": 32.99,
   "fgm": 93,
   "xfgm": 78.52,
   "fga": 182
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
   "gp": 13,
   "tpm": 21,
   "xtpm": 16.71,
   "fgm": 44,
   "xfgm": 35.6,
   "fga": 78
  },
  "Zion Williamson": {
   "gp": 15,
   "tpm": 6,
   "xtpm": 4.61,
   "fgm": 115,
   "xfgm": 114.19,
   "fga": 193
  },
  "Zuby Ejiofor": {
   "gp": 9,
   "tpm": 6,
   "xtpm": 4.26,
   "fgm": 16,
   "xfgm": 15.72,
   "fga": 30
  },
  "Zyon Pullin": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.31,
   "fga": 3
  }
 }
};
