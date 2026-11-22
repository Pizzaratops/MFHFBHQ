// ============================================================
//  x3PM / xFGM der laufenden Saison aus Play-by-Play
//  Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data (nicht unser Projekt, frei veröffentlichte Daten)
//  Methode: Josh Lloyd (joshlloydfantasy.com/research/xstats-method)
//  Erzeugt von scripts/xstats-pbp.py am 2026-11-22 · Saison 2026-27 · Stand 2026-11-21
//  Wird von scripts/build-live-projections.js gelesen (3PM, FG%).
//  META {"season": "2026-27", "assetUpdated": "Sun, 22 Nov 2026 14:57:06 GMT"}
// ============================================================
const XSTATS_PBP = {
 "meta": {
  "season": "2026-27",
  "through": "2026-11-21",
  "players": 474,
  "games": 241,
  "shots": 42346,
  "assetUpdated": "Sun, 22 Nov 2026 14:57:06 GMT",
  "zoneRates": {
   "C3": 0.3685,
   "AB3": 0.353,
   "RA": 0.6611,
   "PAINT": 0.4389,
   "MID": 0.4077
  },
  "source": "Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data"
 },
 "players": {
  "AJ Dybantsa": {
   "gp": 13,
   "tpm": 12,
   "xtpm": 18.11,
   "fgm": 81,
   "xfgm": 95.03,
   "fga": 191
  },
  "AJ Green": {
   "gp": 16,
   "tpm": 29,
   "xtpm": 23.1,
   "fgm": 32,
   "xfgm": 26.3,
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
   "gp": 14,
   "tpm": 15,
   "xtpm": 18.83,
   "fgm": 54,
   "xfgm": 59.05,
   "fga": 123
  },
  "Aaron Nesmith": {
   "gp": 14,
   "tpm": 20,
   "xtpm": 26.06,
   "fgm": 51,
   "xfgm": 61.2,
   "fga": 137
  },
  "Aaron Wiggins": {
   "gp": 16,
   "tpm": 46,
   "xtpm": 39.38,
   "fgm": 87,
   "xfgm": 79.18,
   "fga": 189
  },
  "Ace Bailey": {
   "gp": 17,
   "tpm": 25,
   "xtpm": 35.64,
   "fgm": 89,
   "xfgm": 89.78,
   "fga": 203
  },
  "Aday Mara": {
   "gp": 16,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 72,
   "xfgm": 65.68,
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
   "gp": 14,
   "tpm": 11,
   "xtpm": 15.3,
   "fgm": 95,
   "xfgm": 94.14,
   "fga": 192
  },
  "Al Horford": {
   "gp": 13,
   "tpm": 11,
   "xtpm": 13.48,
   "fgm": 19,
   "xfgm": 23.28,
   "fga": 57
  },
  "Alex Caruso": {
   "gp": 12,
   "tpm": 17,
   "xtpm": 14.17,
   "fgm": 27,
   "xfgm": 26.2,
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
   "xtpm": 2.85,
   "fgm": 7,
   "xfgm": 7.26,
   "fga": 15
  },
  "Alex Sarr": {
   "gp": 16,
   "tpm": 19,
   "xtpm": 20.21,
   "fgm": 70,
   "xfgm": 63.49,
   "fga": 131
  },
  "Alijah Martin": {
   "gp": 15,
   "tpm": 13,
   "xtpm": 9.64,
   "fgm": 27,
   "xfgm": 21.97,
   "fga": 47
  },
  "Allen Graves": {
   "gp": 16,
   "tpm": 11,
   "xtpm": 12.83,
   "fgm": 32,
   "xfgm": 32.8,
   "fga": 71
  },
  "Alperen Sengun": {
   "gp": 15,
   "tpm": 15,
   "xtpm": 10.62,
   "fgm": 123,
   "xfgm": 120.15,
   "fga": 225
  },
  "Alpha Diallo": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 1.07,
   "fgm": 2,
   "xfgm": 3.06,
   "fga": 6
  },
  "Amen Thompson": {
   "gp": 16,
   "tpm": 5,
   "xtpm": 5.71,
   "fgm": 100,
   "xfgm": 100.52,
   "fga": 180
  },
  "Andre Drummond": {
   "gp": 16,
   "tpm": 1,
   "xtpm": 1.06,
   "fgm": 27,
   "xfgm": 39.6,
   "fga": 65
  },
  "Andrew Nembhard": {
   "gp": 12,
   "tpm": 28,
   "xtpm": 24.06,
   "fgm": 65,
   "xfgm": 64.23,
   "fga": 149
  },
  "Andrew Wiggins": {
   "gp": 15,
   "tpm": 20,
   "xtpm": 21.33,
   "fgm": 51,
   "xfgm": 50.58,
   "fga": 117
  },
  "Anfernee Simons": {
   "gp": 17,
   "tpm": 41,
   "xtpm": 35.37,
   "fgm": 67,
   "xfgm": 61.65,
   "fga": 149
  },
  "Anthony Black": {
   "gp": 12,
   "tpm": 25,
   "xtpm": 22.39,
   "fgm": 65,
   "xfgm": 64.98,
   "fga": 147
  },
  "Anthony Davis": {
   "gp": 15,
   "tpm": 11,
   "xtpm": 11.33,
   "fgm": 146,
   "xfgm": 140.19,
   "fga": 276
  },
  "Anthony Edwards": {
   "gp": 4,
   "tpm": 18,
   "xtpm": 15.95,
   "fgm": 50,
   "xfgm": 46.58,
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
   "xtpm": 2.85,
   "fgm": 7,
   "xfgm": 7.26,
   "fga": 15
  },
  "Ausar Thompson": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 2.13,
   "fgm": 64,
   "xfgm": 67.47,
   "fga": 121
  },
  "Austin Reaves": {
   "gp": 12,
   "tpm": 27,
   "xtpm": 23.37,
   "fgm": 97,
   "xfgm": 82.92,
   "fga": 189
  },
  "Ayo Dosunmu": {
   "gp": 17,
   "tpm": 35,
   "xtpm": 28.5,
   "fgm": 119,
   "xfgm": 114.43,
   "fga": 230
  },
  "Baba Miller": {
   "gp": 13,
   "tpm": 3,
   "xtpm": 2.84,
   "fgm": 15,
   "xfgm": 13.62,
   "fga": 27
  },
  "Bam Adebayo": {
   "gp": 15,
   "tpm": 12,
   "xtpm": 17.44,
   "fgm": 97,
   "xfgm": 88.31,
   "fga": 185
  },
  "Baylor Scheierman": {
   "gp": 16,
   "tpm": 19,
   "xtpm": 18.86,
   "fgm": 31,
   "xfgm": 31.89,
   "fga": 80
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
   "xtpm": 9.21,
   "fgm": 23,
   "xfgm": 30.56,
   "fga": 64
  },
  "Bennett Stirtz": {
   "gp": 16,
   "tpm": 27,
   "xtpm": 20.21,
   "fgm": 43,
   "xfgm": 38.38,
   "fga": 90
  },
  "Bilal Coulibaly": {
   "gp": 16,
   "tpm": 6,
   "xtpm": 12.89,
   "fgm": 40,
   "xfgm": 45.4,
   "fga": 89
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
   "xtpm": 22.09,
   "fgm": 43,
   "xfgm": 48.73,
   "fga": 114
  },
  "Bogdan Bogdanović": {
   "gp": 17,
   "tpm": 19,
   "xtpm": 15.7,
   "fgm": 29,
   "xfgm": 23.42,
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
   "xtpm": 27.62,
   "fgm": 54,
   "xfgm": 51.98,
   "fga": 123
  },
  "Braden Smith": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 4.27,
   "fgm": 18,
   "xfgm": 17.3,
   "fga": 38
  },
  "Branden Carlson": {
   "gp": 11,
   "tpm": 2,
   "xtpm": 3.59,
   "fgm": 11,
   "xfgm": 10.17,
   "fga": 21
  },
  "Brandin Podziemski": {
   "gp": 14,
   "tpm": 34,
   "xtpm": 33.72,
   "fgm": 77,
   "xfgm": 72.41,
   "fga": 172
  },
  "Brandon Miller": {
   "gp": 13,
   "tpm": 38,
   "xtpm": 47.84,
   "fgm": 91,
   "xfgm": 105.42,
   "fga": 252
  },
  "Brandon Williams": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 8.15,
   "fgm": 33,
   "xfgm": 37.04,
   "fga": 80
  },
  "Brayden Burries": {
   "gp": 17,
   "tpm": 20,
   "xtpm": 23.07,
   "fgm": 67,
   "xfgm": 67.31,
   "fga": 149
  },
  "Brice Sensabaugh": {
   "gp": 17,
   "tpm": 32,
   "xtpm": 26.23,
   "fgm": 68,
   "xfgm": 59.9,
   "fga": 146
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
   "xtpm": 22.65,
   "fgm": 91,
   "xfgm": 76.16,
   "fga": 165
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
   "xtpm": 2.5,
   "fgm": 6,
   "xfgm": 8.22,
   "fga": 17
  },
  "Bub Carrington": {
   "gp": 16,
   "tpm": 21,
   "xtpm": 16.7,
   "fgm": 25,
   "xfgm": 25.9,
   "fga": 66
  },
  "Buddy Hield": {
   "gp": 13,
   "tpm": 23,
   "xtpm": 19.78,
   "fgm": 40,
   "xfgm": 36.24,
   "fga": 83
  },
  "CJ McCollum": {
   "gp": 14,
   "tpm": 25,
   "xtpm": 25.08,
   "fgm": 74,
   "xfgm": 75.36,
   "fga": 171
  },
  "Cade Cunningham": {
   "gp": 14,
   "tpm": 28,
   "xtpm": 31.49,
   "fgm": 126,
   "xfgm": 121.46,
   "fga": 265
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
   "gp": 12,
   "tpm": 13,
   "xtpm": 8.95,
   "fgm": 25,
   "xfgm": 22.53,
   "fga": 50
  },
  "Caleb Wilson": {
   "gp": 10,
   "tpm": 23,
   "xtpm": 25.22,
   "fgm": 68,
   "xfgm": 75.32,
   "fga": 162
  },
  "Cam Christie": {
   "gp": 8,
   "tpm": 3,
   "xtpm": 2.84,
   "fgm": 4,
   "xfgm": 6.8,
   "fga": 15
  },
  "Cam Spencer": {
   "gp": 17,
   "tpm": 33,
   "xtpm": 21.59,
   "fgm": 66,
   "xfgm": 49.21,
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
   "xtpm": 31.84,
   "fgm": 88,
   "xfgm": 97.84,
   "fga": 211
  },
  "Cameron Carr": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 3.53,
   "fgm": 5,
   "xfgm": 5.26,
   "fga": 13
  },
  "Cameron Johnson": {
   "gp": 11,
   "tpm": 19,
   "xtpm": 20.97,
   "fgm": 48,
   "xfgm": 46.89,
   "fga": 107
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
   "xtpm": 15.72,
   "fgm": 21,
   "xfgm": 24.71,
   "fga": 59
  },
  "Cason Wallace": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.56,
   "fgm": 8,
   "xfgm": 9.28,
   "fga": 20
  },
  "Cedric Coward": {
   "gp": 16,
   "tpm": 42,
   "xtpm": 31.51,
   "fgm": 87,
   "xfgm": 80.24,
   "fga": 181
  },
  "Chaney Johnson": {
   "gp": 14,
   "tpm": 7,
   "xtpm": 8.93,
   "fgm": 18,
   "xfgm": 24.9,
   "fga": 54
  },
  "Charles Bassey": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 47,
   "xfgm": 39.89,
   "fga": 69
  },
  "Chaz Lanier": {
   "gp": 7,
   "tpm": 7,
   "xtpm": 5.34,
   "fgm": 9,
   "xfgm": 6.85,
   "fga": 18
  },
  "Chet Holmgren": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.13,
   "fgm": 11,
   "xfgm": 14.65,
   "fga": 27
  },
  "Chris Cenac Jr.": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 2.87,
   "fgm": 11,
   "xfgm": 10.36,
   "fga": 20
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
   "xtpm": 8.16,
   "fgm": 10,
   "xfgm": 10.37,
   "fga": 27
  },
  "Christian Anderson": {
   "gp": 14,
   "tpm": 13,
   "xtpm": 16.65,
   "fgm": 26,
   "xfgm": 29.78,
   "fga": 73
  },
  "Christian Braun": {
   "gp": 14,
   "tpm": 23,
   "xtpm": 24.27,
   "fgm": 71,
   "xfgm": 70.89,
   "fga": 146
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
   "xtpm": 15.91,
   "fgm": 35,
   "xfgm": 43.89,
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
   "xtpm": 33.26,
   "fgm": 51,
   "xfgm": 49.68,
   "fga": 128
  },
  "Collin Murray-Boyles": {
   "gp": 14,
   "tpm": 7,
   "xtpm": 8.89,
   "fgm": 49,
   "xfgm": 54.79,
   "fga": 105
  },
  "Collin Sexton": {
   "gp": 16,
   "tpm": 15,
   "xtpm": 19.6,
   "fgm": 60,
   "xfgm": 64.39,
   "fga": 137
  },
  "Cooper Flagg": {
   "gp": 15,
   "tpm": 23,
   "xtpm": 25.84,
   "fgm": 123,
   "xfgm": 120.43,
   "fga": 257
  },
  "Corey Kispert": {
   "gp": 9,
   "tpm": 16,
   "xtpm": 10.96,
   "fgm": 26,
   "xfgm": 19.76,
   "fga": 46
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
   "xtpm": 7.09,
   "fgm": 13,
   "xfgm": 11.27,
   "fga": 28
  },
  "Dailyn Swain": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 1.76,
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
   "xtpm": 2.5,
   "fgm": 5,
   "xfgm": 3.6,
   "fga": 9
  },
  "Damian Lillard": {
   "gp": 16,
   "tpm": 50,
   "xtpm": 51.61,
   "fgm": 95,
   "xfgm": 98.71,
   "fga": 236
  },
  "Daniel Gafford": {
   "gp": 16,
   "tpm": 2,
   "xtpm": 0.72,
   "fgm": 55,
   "xfgm": 46.68,
   "fga": 79
  },
  "Daniss Jenkins": {
   "gp": 15,
   "tpm": 33,
   "xtpm": 26.67,
   "fgm": 75,
   "xfgm": 72.52,
   "fga": 169
  },
  "Danny Wolf": {
   "gp": 10,
   "tpm": 21,
   "xtpm": 14.58,
   "fgm": 32,
   "xfgm": 31.53,
   "fga": 70
  },
  "Darius Acuff Jr.": {
   "gp": 16,
   "tpm": 50,
   "xtpm": 53.7,
   "fgm": 147,
   "xfgm": 155.54,
   "fga": 363
  },
  "Darius Garland": {
   "gp": 15,
   "tpm": 37,
   "xtpm": 36.74,
   "fgm": 107,
   "xfgm": 97.87,
   "fga": 229
  },
  "Darryn Peterson": {
   "gp": 17,
   "tpm": 35,
   "xtpm": 36.8,
   "fgm": 98,
   "xfgm": 104.0,
   "fga": 245
  },
  "David Jones Garcia": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 1,
   "xfgm": 3.78,
   "fga": 8
  },
  "Davion Mitchell": {
   "gp": 15,
   "tpm": 38,
   "xtpm": 30.85,
   "fgm": 94,
   "xfgm": 84.57,
   "fga": 184
  },
  "Day'Ron Sharpe": {
   "gp": 15,
   "tpm": 5,
   "xtpm": 6.11,
   "fgm": 52,
   "xfgm": 54.13,
   "fga": 94
  },
  "De'Aaron Fox": {
   "gp": 16,
   "tpm": 13,
   "xtpm": 17.44,
   "fgm": 64,
   "xfgm": 62.86,
   "fga": 136
  },
  "De'Andre Hunter": {
   "gp": 14,
   "tpm": 31,
   "xtpm": 27.35,
   "fgm": 72,
   "xfgm": 66.57,
   "fga": 156
  },
  "De'Anthony Melton": {
   "gp": 16,
   "tpm": 32,
   "xtpm": 29.15,
   "fgm": 46,
   "xfgm": 49.25,
   "fga": 121
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
   "gp": 13,
   "tpm": 3,
   "xtpm": 6.46,
   "fgm": 45,
   "xfgm": 49.14,
   "fga": 112
  },
  "Dean Wade": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 11.37,
   "fgm": 22,
   "xfgm": 21.25,
   "fga": 48
  },
  "Deandre Ayton": {
   "gp": 17,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 31,
   "xfgm": 28.59,
   "fga": 48
  },
  "Dejounte Murray": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 9.64,
   "fgm": 44,
   "xfgm": 50.6,
   "fga": 102
  },
  "Deni Avdija": {
   "gp": 14,
   "tpm": 29,
   "xtpm": 25.84,
   "fgm": 111,
   "xfgm": 107.52,
   "fga": 218
  },
  "Dennis Schröder": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 12.42,
   "fgm": 32,
   "xfgm": 41.84,
   "fga": 88
  },
  "Derik Queen": {
   "gp": 18,
   "tpm": 10,
   "xtpm": 8.89,
   "fgm": 74,
   "xfgm": 80.59,
   "fga": 153
  },
  "Derrick Jones Jr.": {
   "gp": 14,
   "tpm": 25,
   "xtpm": 18.49,
   "fgm": 51,
   "xfgm": 47.72,
   "fga": 101
  },
  "Derrick White": {
   "gp": 15,
   "tpm": 26,
   "xtpm": 30.13,
   "fgm": 71,
   "xfgm": 71.42,
   "fga": 167
  },
  "Desmond Bane": {
   "gp": 14,
   "tpm": 60,
   "xtpm": 49.65,
   "fgm": 85,
   "xfgm": 79.58,
   "fga": 200
  },
  "Devin Booker": {
   "gp": 15,
   "tpm": 28,
   "xtpm": 29.33,
   "fgm": 126,
   "xfgm": 114.32,
   "fga": 265
  },
  "Devin Carter": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 0,
   "xfgm": 1.14,
   "fga": 3
  },
  "Devin Vassell": {
   "gp": 15,
   "tpm": 21,
   "xtpm": 23.8,
   "fgm": 57,
   "xfgm": 61.02,
   "fga": 142
  },
  "Dillon Brooks": {
   "gp": 15,
   "tpm": 32,
   "xtpm": 26.18,
   "fgm": 86,
   "xfgm": 82.01,
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
   "xtpm": 4.6,
   "fgm": 84,
   "xfgm": 71.56,
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
   "xtpm": 14.13,
   "fgm": 75,
   "xfgm": 69.38,
   "fga": 130
  },
  "Donovan Mitchell": {
   "gp": 16,
   "tpm": 43,
   "xtpm": 41.71,
   "fgm": 141,
   "xfgm": 130.49,
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
   "xfgm": 2.24,
   "fga": 5
  },
  "Draymond Green": {
   "gp": 13,
   "tpm": 4,
   "xtpm": 5.31,
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
   "xtpm": 38.63,
   "fgm": 63,
   "xfgm": 55.0,
   "fga": 140
  },
  "Duop Reath": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 2.84,
   "fgm": 7,
   "xfgm": 5.48,
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
   "xtpm": 19.11,
   "fgm": 107,
   "xfgm": 104.88,
   "fga": 212
  },
  "Dyson Daniels": {
   "gp": 16,
   "tpm": 3,
   "xtpm": 7.81,
   "fgm": 69,
   "xfgm": 74.01,
   "fga": 141
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
   "xtpm": 19.81,
   "fgm": 30,
   "xfgm": 35.57,
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
   "xtpm": 18.4,
   "fgm": 27,
   "xfgm": 29.88,
   "fga": 77
  },
  "Evan Mobley": {
   "gp": 12,
   "tpm": 23,
   "xtpm": 16.99,
   "fgm": 76,
   "xfgm": 69.07,
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
   "gp": 15,
   "tpm": 20,
   "xtpm": 27.35,
   "fgm": 140,
   "xfgm": 140.78,
   "fga": 295
  },
  "Fred VanVleet": {
   "gp": 14,
   "tpm": 40,
   "xtpm": 36.08,
   "fgm": 71,
   "xfgm": 63.67,
   "fga": 162
  },
  "GG Jackson": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 11.04,
   "fgm": 27,
   "xfgm": 33.45,
   "fga": 71
  },
  "Gary Payton II": {
   "gp": 14,
   "tpm": 6,
   "xtpm": 8.16,
   "fgm": 28,
   "xfgm": 27.75,
   "fga": 57
  },
  "Gary Trent Jr.": {
   "gp": 8,
   "tpm": 9,
   "xtpm": 9.22,
   "fgm": 13,
   "xfgm": 15.48,
   "fga": 38
  },
  "Georges Niang": {
   "gp": 16,
   "tpm": 20,
   "xtpm": 22.47,
   "fgm": 45,
   "xfgm": 45.74,
   "fga": 109
  },
  "Giannis Antetokounmpo": {
   "gp": 15,
   "tpm": 8,
   "xtpm": 11.65,
   "fgm": 162,
   "xfgm": 144.77,
   "fga": 269
  },
  "Goga Bitadze": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 26,
   "xfgm": 22.91,
   "fga": 36
  },
  "Gradey Dick": {
   "gp": 15,
   "tpm": 12,
   "xtpm": 8.9,
   "fgm": 41,
   "xfgm": 41.36,
   "fga": 80
  },
  "Graham Ike": {
   "gp": 13,
   "tpm": 5,
   "xtpm": 3.9,
   "fgm": 20,
   "xfgm": 22.8,
   "fga": 44
  },
  "Grant Williams": {
   "gp": 3,
   "tpm": 7,
   "xtpm": 7.14,
   "fgm": 12,
   "xfgm": 11.44,
   "fga": 28
  },
  "Grayson Allen": {
   "gp": 13,
   "tpm": 44,
   "xtpm": 33.95,
   "fgm": 56,
   "xfgm": 48.45,
   "fga": 125
  },
  "Gui Santos": {
   "gp": 13,
   "tpm": 6,
   "xtpm": 8.89,
   "fgm": 26,
   "xfgm": 33.31,
   "fga": 68
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
   "xtpm": 14.93,
   "fgm": 25,
   "xfgm": 28.15,
   "fga": 64
  },
  "Herbert Jones": {
   "gp": 18,
   "tpm": 19,
   "xtpm": 21.67,
   "fgm": 46,
   "xfgm": 59.61,
   "fga": 129
  },
  "Hugo González": {
   "gp": 16,
   "tpm": 8,
   "xtpm": 11.83,
   "fgm": 23,
   "xfgm": 25.05,
   "fga": 54
  },
  "Immanuel Quickley": {
   "gp": 14,
   "tpm": 37,
   "xtpm": 37.59,
   "fgm": 84,
   "xfgm": 82.15,
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
   "gp": 15,
   "tpm": 13,
   "xtpm": 16.12,
   "fgm": 33,
   "xfgm": 39.03,
   "fga": 81
  },
  "Isaiah Collier": {
   "gp": 14,
   "tpm": 6,
   "xtpm": 5.66,
   "fgm": 30,
   "xfgm": 32.14,
   "fga": 68
  },
  "Isaiah Crawford": {
   "gp": 11,
   "tpm": 5,
   "xtpm": 3.93,
   "fgm": 10,
   "xfgm": 8.11,
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
   "gp": 16,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 56,
   "xfgm": 55.82,
   "fga": 102
  },
  "Isaiah Jackson": {
   "gp": 14,
   "tpm": 2,
   "xtpm": 1.76,
   "fgm": 45,
   "xfgm": 44.73,
   "fga": 78
  },
  "Isaiah Joe": {
   "gp": 5,
   "tpm": 7,
   "xtpm": 8.49,
   "fgm": 12,
   "xfgm": 12.1,
   "fga": 32
  },
  "Isaiah Stewart": {
   "gp": 12,
   "tpm": 9,
   "xtpm": 9.61,
   "fgm": 51,
   "xfgm": 43.89,
   "fga": 86
  },
  "Ivica Zubac": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 49,
   "xfgm": 50.86,
   "fga": 85
  },
  "Ja Morant": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 4.96,
   "fgm": 26,
   "xfgm": 22.07,
   "fga": 48
  },
  "Ja'Kobe Walter": {
   "gp": 16,
   "tpm": 40,
   "xtpm": 40.64,
   "fgm": 63,
   "xfgm": 66.51,
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
   "xtpm": 36.14,
   "fgm": 94,
   "xfgm": 87.93,
   "fga": 199
  },
  "Jabari Walker": {
   "gp": 13,
   "tpm": 8,
   "xtpm": 7.47,
   "fgm": 34,
   "xfgm": 33.25,
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
   "xtpm": 3.88,
   "fgm": 2,
   "xfgm": 4.73,
   "fga": 13
  },
  "Jaden McDaniels": {
   "gp": 17,
   "tpm": 25,
   "xtpm": 25.87,
   "fgm": 123,
   "xfgm": 109.49,
   "fga": 227
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
   "xtpm": 26.09,
   "fgm": 89,
   "xfgm": 92.58,
   "fga": 192
  },
  "Jake LaRavia": {
   "gp": 16,
   "tpm": 15,
   "xtpm": 11.79,
   "fgm": 34,
   "xfgm": 35.29,
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
   "gp": 16,
   "tpm": 50,
   "xtpm": 42.42,
   "fgm": 147,
   "xfgm": 148.3,
   "fga": 337
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
   "xtpm": 20.58,
   "fgm": 69,
   "xfgm": 78.48,
   "fga": 165
  },
  "Jalen Johnson": {
   "gp": 13,
   "tpm": 12,
   "xtpm": 19.08,
   "fgm": 93,
   "xfgm": 104.33,
   "fga": 207
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
   "gp": 14,
   "tpm": 4,
   "xtpm": 5.33,
   "fgm": 18,
   "xfgm": 18.7,
   "fga": 37
  },
  "Jalen Smith": {
   "gp": 13,
   "tpm": 24,
   "xtpm": 23.5,
   "fgm": 67,
   "xfgm": 61.29,
   "fga": 127
  },
  "Jalen Suggs": {
   "gp": 7,
   "tpm": 11,
   "xtpm": 11.39,
   "fgm": 24,
   "xfgm": 27.47,
   "fga": 64
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
   "gp": 13,
   "tpm": 11,
   "xtpm": 13.91,
   "fgm": 24,
   "xfgm": 23.54,
   "fga": 60
  },
  "Jamal Murray": {
   "gp": 14,
   "tpm": 44,
   "xtpm": 33.63,
   "fgm": 116,
   "xfgm": 101.28,
   "fga": 231
  },
  "Jamal Shead": {
   "gp": 16,
   "tpm": 15,
   "xtpm": 19.51,
   "fgm": 42,
   "xfgm": 50.37,
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
   "xtpm": 40.68,
   "fgm": 84,
   "xfgm": 88.79,
   "fga": 205
  },
  "James Wiseman": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 6,
   "xfgm": 7.9,
   "fga": 13
  },
  "Jamison Battle": {
   "gp": 16,
   "tpm": 33,
   "xtpm": 27.38,
   "fgm": 50,
   "xfgm": 44.05,
   "fga": 106
  },
  "Jarace Walker": {
   "gp": 15,
   "tpm": 14,
   "xtpm": 18.09,
   "fgm": 32,
   "xfgm": 40.89,
   "fga": 92
  },
  "Jared McCain": {
   "gp": 16,
   "tpm": 38,
   "xtpm": 39.41,
   "fgm": 80,
   "xfgm": 83.38,
   "fga": 193
  },
  "Jaren Jackson Jr.": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 4.97,
   "fgm": 22,
   "xfgm": 20.14,
   "fga": 44
  },
  "Jaron Pierre Jr.": {
   "gp": 7,
   "tpm": 9,
   "xtpm": 9.21,
   "fgm": 16,
   "xfgm": 20.81,
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
   "xtpm": 1.76,
   "fgm": 69,
   "xfgm": 67.3,
   "fga": 113
  },
  "Jase Richardson": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 12.85,
   "fgm": 25,
   "xfgm": 34.33,
   "fga": 78
  },
  "Javon Small": {
   "gp": 9,
   "tpm": 12,
   "xtpm": 11.33,
   "fgm": 29,
   "xfgm": 31.34,
   "fga": 70
  },
  "Javonte Green": {
   "gp": 15,
   "tpm": 18,
   "xtpm": 19.57,
   "fgm": 33,
   "xfgm": 31.87,
   "fga": 75
  },
  "Jaxson Hayes": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 50,
   "xfgm": 44.33,
   "fga": 79
  },
  "Jay Huff": {
   "gp": 14,
   "tpm": 13,
   "xtpm": 14.23,
   "fgm": 35,
   "xfgm": 32.07,
   "fga": 69
  },
  "Jaylen Brown": {
   "gp": 14,
   "tpm": 27,
   "xtpm": 24.88,
   "fgm": 117,
   "xfgm": 112.64,
   "fga": 237
  },
  "Jaylen Clark": {
   "gp": 12,
   "tpm": 9,
   "xtpm": 9.01,
   "fgm": 18,
   "xfgm": 18.44,
   "fga": 43
  },
  "Jaylen Wells": {
   "gp": 17,
   "tpm": 34,
   "xtpm": 29.27,
   "fgm": 66,
   "xfgm": 57.4,
   "fga": 134
  },
  "Jaylin Sellers": {
   "gp": 6,
   "tpm": 7,
   "xtpm": 6.05,
   "fgm": 8,
   "xfgm": 8.88,
   "fga": 22
  },
  "Jaylin Williams": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 10.73,
   "fgm": 8,
   "xfgm": 14.88,
   "fga": 37
  },
  "Jaylon Tyson": {
   "gp": 8,
   "tpm": 13,
   "xtpm": 14.63,
   "fgm": 28,
   "xfgm": 30.61,
   "fga": 68
  },
  "Jayson Kent": {
   "gp": 7,
   "tpm": 5,
   "xtpm": 4.97,
   "fgm": 10,
   "xfgm": 12.21,
   "fga": 26
  },
  "Jayson Tatum": {
   "gp": 14,
   "tpm": 37,
   "xtpm": 39.27,
   "fgm": 118,
   "xfgm": 125.21,
   "fga": 276
  },
  "Jerami Grant": {
   "gp": 15,
   "tpm": 26,
   "xtpm": 20.45,
   "fgm": 55,
   "xfgm": 53.48,
   "fga": 117
  },
  "Jeremiah Fears": {
   "gp": 18,
   "tpm": 23,
   "xtpm": 27.26,
   "fgm": 114,
   "xfgm": 124.74,
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
   "xtpm": 3.19,
   "fgm": 5,
   "xfgm": 4.7,
   "fga": 12
  },
  "Jevon Carter": {
   "gp": 11,
   "tpm": 14,
   "xtpm": 14.58,
   "fgm": 17,
   "xfgm": 18.47,
   "fga": 49
  },
  "Joan Beringer": {
   "gp": 17,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 32,
   "xfgm": 34.15,
   "fga": 54
  },
  "Jock Landale": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 7.84,
   "fgm": 22,
   "xfgm": 23.45,
   "fga": 48
  },
  "Joel Embiid": {
   "gp": 14,
   "tpm": 6,
   "xtpm": 14.84,
   "fgm": 88,
   "xfgm": 105.69,
   "fga": 220
  },
  "John Collins": {
   "gp": 15,
   "tpm": 19,
   "xtpm": 16.05,
   "fgm": 60,
   "xfgm": 63.41,
   "fga": 128
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
   "xtpm": 22.75,
   "fgm": 75,
   "xfgm": 81.36,
   "fga": 165
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
   "gp": 12,
   "tpm": 6,
   "xtpm": 4.28,
   "fgm": 25,
   "xfgm": 24.93,
   "fga": 50
  },
  "Jordan Goodwin": {
   "gp": 11,
   "tpm": 20,
   "xtpm": 18.49,
   "fgm": 34,
   "xfgm": 33.14,
   "fga": 79
  },
  "Jordan Hawkins": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 5.69,
   "fgm": 10,
   "xfgm": 10.4,
   "fga": 26
  },
  "Jordan McLaughlin": {
   "gp": 11,
   "tpm": 3,
   "xtpm": 4.3,
   "fgm": 10,
   "xfgm": 13.98,
   "fga": 29
  },
  "Jordan Poole": {
   "gp": 12,
   "tpm": 17,
   "xtpm": 17.68,
   "fgm": 33,
   "xfgm": 38.24,
   "fga": 86
  },
  "Jordan Walsh": {
   "gp": 16,
   "tpm": 12,
   "xtpm": 16.1,
   "fgm": 27,
   "xfgm": 31.68,
   "fga": 70
  },
  "Jose Alvarado": {
   "gp": 9,
   "tpm": 4,
   "xtpm": 5.33,
   "fgm": 9,
   "xfgm": 12.58,
   "fga": 29
  },
  "Josh Dix": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 5.68,
   "fgm": 7,
   "xfgm": 11.78,
   "fga": 27
  },
  "Josh Giddey": {
   "gp": 15,
   "tpm": 17,
   "xtpm": 19.44,
   "fgm": 57,
   "xfgm": 65.41,
   "fga": 136
  },
  "Josh Green": {
   "gp": 15,
   "tpm": 13,
   "xtpm": 11.83,
   "fgm": 26,
   "xfgm": 24.5,
   "fga": 57
  },
  "Josh Hart": {
   "gp": 13,
   "tpm": 17,
   "xtpm": 20.61,
   "fgm": 31,
   "xfgm": 41.3,
   "fga": 95
  },
  "Josh Minott": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 7.81,
   "fgm": 11,
   "xfgm": 12.22,
   "fga": 29
  },
  "Josh Okogie": {
   "gp": 16,
   "tpm": 11,
   "xtpm": 11.82,
   "fgm": 21,
   "xfgm": 26.74,
   "fga": 62
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
   "xtpm": 31.94,
   "fgm": 74,
   "xfgm": 68.58,
   "fga": 157
  },
  "Julian Champagnie": {
   "gp": 17,
   "tpm": 47,
   "xtpm": 40.55,
   "fgm": 60,
   "xfgm": 52.62,
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
   "xtpm": 25.17,
   "fgm": 105,
   "xfgm": 110.35,
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
   "xtpm": 1.07,
   "fgm": 2,
   "xfgm": 1.74,
   "fga": 4
  },
  "Karl-Anthony Towns": {
   "gp": 15,
   "tpm": 30,
   "xtpm": 27.56,
   "fgm": 117,
   "xfgm": 111.49,
   "fga": 218
  },
  "Karlo Matković": {
   "gp": 17,
   "tpm": 18,
   "xtpm": 18.3,
   "fgm": 40,
   "xfgm": 37.9,
   "fga": 82
  },
  "Kasparas Jakučionis": {
   "gp": 16,
   "tpm": 17,
   "xtpm": 19.51,
   "fgm": 46,
   "xfgm": 47.23,
   "fga": 100
  },
  "Kawhi Leonard": {
   "gp": 2,
   "tpm": 4,
   "xtpm": 4.94,
   "fgm": 12,
   "xfgm": 17.23,
   "fga": 37
  },
  "Keaton Wagler": {
   "gp": 15,
   "tpm": 24,
   "xtpm": 24.42,
   "fgm": 44,
   "xfgm": 53.03,
   "fga": 126
  },
  "Keegan Murray": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 13.22,
   "fgm": 39,
   "xfgm": 40.4,
   "fga": 93
  },
  "Kel'el Ware": {
   "gp": 17,
   "tpm": 12,
   "xtpm": 15.93,
   "fgm": 56,
   "xfgm": 68.92,
   "fga": 131
  },
  "Keldon Johnson": {
   "gp": 17,
   "tpm": 7,
   "xtpm": 10.33,
   "fgm": 56,
   "xfgm": 63.16,
   "fga": 119
  },
  "Kelly Oubre Jr.": {
   "gp": 14,
   "tpm": 16,
   "xtpm": 20.31,
   "fgm": 62,
   "xfgm": 61.62,
   "fga": 129
  },
  "Kenrich Williams": {
   "gp": 16,
   "tpm": 20,
   "xtpm": 17.73,
   "fgm": 43,
   "xfgm": 42.63,
   "fga": 94
  },
  "Kentavious Caldwell-Pope": {
   "gp": 17,
   "tpm": 25,
   "xtpm": 19.2,
   "fgm": 34,
   "xfgm": 29.0,
   "fga": 73
  },
  "Keon Ellis": {
   "gp": 14,
   "tpm": 13,
   "xtpm": 13.11,
   "fgm": 22,
   "xfgm": 23.61,
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
   "xtpm": 23.1,
   "fgm": 112,
   "xfgm": 96.8,
   "fga": 222
  },
  "Kevin Huerter": {
   "gp": 15,
   "tpm": 24,
   "xtpm": 24.83,
   "fgm": 58,
   "xfgm": 55.68,
   "fga": 130
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
   "gp": 16,
   "tpm": 34,
   "xtpm": 37.14,
   "fgm": 109,
   "xfgm": 107.95,
   "fga": 255
  },
  "Khaman Maluach": {
   "gp": 15,
   "tpm": 2,
   "xtpm": 2.5,
   "fgm": 47,
   "xfgm": 44.32,
   "fga": 75
  },
  "Khris Middleton": {
   "gp": 9,
   "tpm": 6,
   "xtpm": 5.37,
   "fgm": 14,
   "xfgm": 12.12,
   "fga": 30
  },
  "Kingston Flemings": {
   "gp": 12,
   "tpm": 9,
   "xtpm": 7.41,
   "fgm": 38,
   "xfgm": 36.3,
   "fga": 74
  },
  "Klay Thompson": {
   "gp": 14,
   "tpm": 57,
   "xtpm": 46.93,
   "fgm": 73,
   "xfgm": 60.65,
   "fga": 163
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
   "xtpm": 21.61,
   "fgm": 40,
   "xfgm": 43.14,
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
   "xtpm": 12.09,
   "fgm": 38,
   "xfgm": 41.16,
   "fga": 83
  },
  "Kris Murray": {
   "gp": 13,
   "tpm": 4,
   "xtpm": 8.37,
   "fgm": 9,
   "xfgm": 12.77,
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
   "gp": 10,
   "tpm": 2,
   "xtpm": 2.15,
   "fgm": 11,
   "xfgm": 12.93,
   "fga": 26
  },
  "Kyle Kuzma": {
   "gp": 16,
   "tpm": 27,
   "xtpm": 29.87,
   "fgm": 71,
   "xfgm": 75.03,
   "fga": 161
  },
  "Kyrie Irving": {
   "gp": 13,
   "tpm": 43,
   "xtpm": 40.79,
   "fgm": 105,
   "xfgm": 97.83,
   "fga": 229
  },
  "Kyshawn George": {
   "gp": 17,
   "tpm": 40,
   "xtpm": 35.41,
   "fgm": 110,
   "xfgm": 106.36,
   "fga": 233
  },
  "LJ Cryer": {
   "gp": 13,
   "tpm": 21,
   "xtpm": 18.77,
   "fgm": 29,
   "xfgm": 29.16,
   "fga": 75
  },
  "LaMelo Ball": {
   "gp": 17,
   "tpm": 56,
   "xtpm": 55.23,
   "fgm": 105,
   "xfgm": 105.89,
   "fga": 256
  },
  "Labaron Philon Jr.": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 4.59,
   "fgm": 12,
   "xfgm": 10.96,
   "fga": 27
  },
  "Landry Shamet": {
   "gp": 16,
   "tpm": 39,
   "xtpm": 30.51,
   "fgm": 60,
   "xfgm": 51.3,
   "fga": 121
  },
  "Larry Nance Jr.": {
   "gp": 15,
   "tpm": 14,
   "xtpm": 12.89,
   "fgm": 24,
   "xfgm": 22.52,
   "fga": 52
  },
  "Lauri Markkanen": {
   "gp": 8,
   "tpm": 29,
   "xtpm": 25.84,
   "fgm": 44,
   "xfgm": 46.48,
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
   "xtpm": 16.27,
   "fgm": 79,
   "xfgm": 85.97,
   "fga": 170
  },
  "Leaky Black": {
   "gp": 12,
   "tpm": 15,
   "xtpm": 12.49,
   "fgm": 18,
   "xfgm": 17.3,
   "fga": 44
  },
  "Leonard Miller": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 10.31,
   "fgm": 26,
   "xfgm": 29.42,
   "fga": 59
  },
  "Liam McNeeley": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 4.97,
   "fgm": 8,
   "xfgm": 12.61,
   "fga": 28
  },
  "Luguentz Dort": {
   "gp": 16,
   "tpm": 25,
   "xtpm": 26.2,
   "fgm": 49,
   "xfgm": 60.65,
   "fga": 131
  },
  "Luka Dončić": {
   "gp": 15,
   "tpm": 74,
   "xtpm": 69.66,
   "fgm": 176,
   "xfgm": 154.75,
   "fga": 376
  },
  "Luka Garza": {
   "gp": 16,
   "tpm": 15,
   "xtpm": 14.6,
   "fgm": 28,
   "xfgm": 32.87,
   "fga": 72
  },
  "Luke Kennard": {
   "gp": 14,
   "tpm": 28,
   "xtpm": 22.73,
   "fgm": 43,
   "xfgm": 32.02,
   "fga": 84
  },
  "Luke Kornet": {
   "gp": 17,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 20,
   "xfgm": 25.08,
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
   "xtpm": 17.36,
   "fgm": 37,
   "xfgm": 42.88,
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
   "xtpm": 11.77,
   "fgm": 23,
   "xfgm": 21.6,
   "fga": 54
  },
  "Marcus Smart": {
   "gp": 11,
   "tpm": 18,
   "xtpm": 16.75,
   "fgm": 27,
   "xfgm": 26.73,
   "fga": 67
  },
  "Mario Hezonja": {
   "gp": 17,
   "tpm": 21,
   "xtpm": 22.45,
   "fgm": 64,
   "xfgm": 62.18,
   "fga": 131
  },
  "Marvin Bagley III": {
   "gp": 14,
   "tpm": 2,
   "xtpm": 2.49,
   "fgm": 31,
   "xfgm": 31.67,
   "fga": 58
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
   "gp": 15,
   "tpm": 30,
   "xtpm": 29.15,
   "fgm": 71,
   "xfgm": 72.2,
   "fga": 155
  },
  "Matisse Thybulle": {
   "gp": 17,
   "tpm": 30,
   "xtpm": 26.34,
   "fgm": 43,
   "xfgm": 39.76,
   "fga": 98
  },
  "Max Christie": {
   "gp": 13,
   "tpm": 16,
   "xtpm": 17.82,
   "fgm": 28,
   "xfgm": 30.55,
   "fga": 73
  },
  "Max Strus": {
   "gp": 9,
   "tpm": 20,
   "xtpm": 19.86,
   "fgm": 26,
   "xfgm": 29.73,
   "fga": 73
  },
  "Meleek Thomas": {
   "gp": 14,
   "tpm": 34,
   "xtpm": 28.78,
   "fgm": 69,
   "xfgm": 65.45,
   "fga": 149
  },
  "Micah Peavy": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 6.82,
   "fgm": 12,
   "xfgm": 17.97,
   "fga": 40
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
   "gp": 14,
   "tpm": 45,
   "xtpm": 42.5,
   "fgm": 92,
   "xfgm": 88.86,
   "fga": 205
  },
  "Mikal Bridges": {
   "gp": 16,
   "tpm": 17,
   "xtpm": 18.62,
   "fgm": 51,
   "xfgm": 54.43,
   "fga": 122
  },
  "Mike Conley": {
   "gp": 5,
   "tpm": 8,
   "xtpm": 3.58,
   "fgm": 10,
   "xfgm": 5.12,
   "fga": 13
  },
  "Mikel Brown Jr.": {
   "gp": 11,
   "tpm": 22,
   "xtpm": 22.97,
   "fgm": 41,
   "xfgm": 49.99,
   "fga": 117
  },
  "Miles Bridges": {
   "gp": 15,
   "tpm": 25,
   "xtpm": 28.46,
   "fgm": 85,
   "xfgm": 82.9,
   "fga": 178
  },
  "Miles McBride": {
   "gp": 16,
   "tpm": 29,
   "xtpm": 24.54,
   "fgm": 37,
   "xfgm": 33.4,
   "fga": 86
  },
  "Mitchell Robinson": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 32,
   "xfgm": 31.73,
   "fga": 49
  },
  "Mo Bamba": {
   "gp": 13,
   "tpm": 7,
   "xtpm": 3.91,
   "fgm": 48,
   "xfgm": 38.5,
   "fga": 66
  },
  "Mohamed Diawara": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 4.99,
   "fgm": 6,
   "xfgm": 8.07,
   "fga": 19
  },
  "Morez Johnson Jr.": {
   "gp": 15,
   "tpm": 3,
   "xtpm": 5.65,
   "fgm": 35,
   "xfgm": 44.47,
   "fga": 86
  },
  "Moritz Wagner": {
   "gp": 15,
   "tpm": 18,
   "xtpm": 10.28,
   "fgm": 52,
   "xfgm": 46.41,
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
   "xfgm": 51.29,
   "fga": 82
  },
  "Myles Turner": {
   "gp": 15,
   "tpm": 19,
   "xtpm": 24.48,
   "fgm": 39,
   "xfgm": 47.83,
   "fga": 113
  },
  "Myron Gardner": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 5.0,
   "fgm": 8,
   "xfgm": 7.65,
   "fga": 18
  },
  "Naji Marshall": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 15.67,
   "fgm": 53,
   "xfgm": 55.47,
   "fga": 121
  },
  "Nate Ament": {
   "gp": 15,
   "tpm": 15,
   "xtpm": 15.35,
   "fgm": 41,
   "xfgm": 42.93,
   "fga": 90
  },
  "Naz Reid": {
   "gp": 15,
   "tpm": 37,
   "xtpm": 39.0,
   "fgm": 99,
   "xfgm": 112.71,
   "fga": 255
  },
  "Neemias Queta": {
   "gp": 15,
   "tpm": 5,
   "xtpm": 2.53,
   "fgm": 56,
   "xfgm": 56.41,
   "fga": 98
  },
  "Nic Claxton": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 21,
   "xfgm": 19.82,
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
   "gp": 16,
   "tpm": 55,
   "xtpm": 56.79,
   "fgm": 113,
   "xfgm": 120.86,
   "fga": 274
  },
  "Nikola Jokić": {
   "gp": 14,
   "tpm": 18,
   "xtpm": 21.19,
   "fgm": 132,
   "xfgm": 115.45,
   "fga": 251
  },
  "Nikola Jović": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 4.99,
   "fgm": 7,
   "xfgm": 11.78,
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
   "gp": 13,
   "tpm": 7,
   "xtpm": 8.16,
   "fgm": 18,
   "xfgm": 16.95,
   "fga": 41
  },
  "Nique Clifford": {
   "gp": 14,
   "tpm": 3,
   "xtpm": 6.03,
   "fgm": 17,
   "xfgm": 16.67,
   "fga": 39
  },
  "Noa Essengue": {
   "gp": 14,
   "tpm": 7,
   "xtpm": 9.99,
   "fgm": 23,
   "xfgm": 27.14,
   "fga": 56
  },
  "Noah Clowney": {
   "gp": 15,
   "tpm": 13,
   "xtpm": 16.79,
   "fgm": 33,
   "xfgm": 35.5,
   "fga": 80
  },
  "Nolan Traore": {
   "gp": 14,
   "tpm": 21,
   "xtpm": 18.46,
   "fgm": 69,
   "xfgm": 61.43,
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
   "xtpm": 31.11,
   "fgm": 86,
   "xfgm": 87.04,
   "fga": 193
  },
  "OG Anunoby": {
   "gp": 15,
   "tpm": 30,
   "xtpm": 33.18,
   "fgm": 71,
   "xfgm": 83.3,
   "fga": 177
  },
  "Obi Toppin": {
   "gp": 13,
   "tpm": 19,
   "xtpm": 20.35,
   "fgm": 57,
   "xfgm": 54.49,
   "fga": 113
  },
  "Olivier-Maxence Prosper": {
   "gp": 11,
   "tpm": 4,
   "xtpm": 6.12,
   "fgm": 26,
   "xfgm": 27.39,
   "fga": 52
  },
  "Onyeka Okongwu": {
   "gp": 16,
   "tpm": 30,
   "xtpm": 31.54,
   "fgm": 92,
   "xfgm": 85.47,
   "fga": 182
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
   "xtpm": 7.11,
   "fgm": 14,
   "xfgm": 14.81,
   "fga": 34
  },
  "P.J. Washington": {
   "gp": 15,
   "tpm": 34,
   "xtpm": 33.52,
   "fgm": 69,
   "xfgm": 70.98,
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
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.8,
   "fgm": 7,
   "xfgm": 5.95,
   "fga": 12
  },
  "Paolo Banchero": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 2.13,
   "fgm": 16,
   "xfgm": 10.8,
   "fga": 23
  },
  "Pascal Siakam": {
   "gp": 15,
   "tpm": 25,
   "xtpm": 24.86,
   "fgm": 127,
   "xfgm": 117.21,
   "fga": 246
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
   "gp": 8,
   "tpm": 7,
   "xtpm": 8.16,
   "fgm": 20,
   "xfgm": 21.31,
   "fga": 45
  },
  "Paul George": {
   "gp": 14,
   "tpm": 46,
   "xtpm": 40.04,
   "fgm": 99,
   "xfgm": 93.3,
   "fga": 221
  },
  "Paul Reed": {
   "gp": 15,
   "tpm": 5,
   "xtpm": 3.56,
   "fgm": 71,
   "xfgm": 66.94,
   "fga": 123
  },
  "Payton Pritchard": {
   "gp": 16,
   "tpm": 36,
   "xtpm": 37.12,
   "fgm": 74,
   "xfgm": 74.58,
   "fga": 182
  },
  "Pelle Larsson": {
   "gp": 12,
   "tpm": 16,
   "xtpm": 12.02,
   "fgm": 37,
   "xfgm": 36.18,
   "fga": 79
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
   "xtpm": 20.71,
   "fgm": 54,
   "xfgm": 65.41,
   "fga": 137
  },
  "Precious Achiuwa": {
   "gp": 13,
   "tpm": 4,
   "xtpm": 3.91,
   "fgm": 51,
   "xfgm": 48.27,
   "fga": 95
  },
  "Quentin Grimes": {
   "gp": 15,
   "tpm": 28,
   "xtpm": 24.08,
   "fgm": 61,
   "xfgm": 57.79,
   "fga": 126
  },
  "Quenton Jackson": {
   "gp": 16,
   "tpm": 18,
   "xtpm": 18.42,
   "fgm": 54,
   "xfgm": 53.47,
   "fga": 114
  },
  "Quinten Post": {
   "gp": 11,
   "tpm": 6,
   "xtpm": 7.81,
   "fgm": 21,
   "xfgm": 18.97,
   "fga": 42
  },
  "RJ Barrett": {
   "gp": 14,
   "tpm": 21,
   "xtpm": 26.21,
   "fgm": 113,
   "xfgm": 118.1,
   "fga": 239
  },
  "Rasheer Fleming": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 2.13,
   "fgm": 2,
   "xfgm": 4.33,
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
   "xtpm": 32.23,
   "fgm": 46,
   "xfgm": 48.44,
   "fga": 122
  },
  "Riley Minix": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 3.9,
   "fgm": 5,
   "xfgm": 7.39,
   "fga": 17
  },
  "Robert Williams III": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 35,
   "xfgm": 32.82,
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
   "gp": 8,
   "tpm": 5,
   "xtpm": 5.73,
   "fgm": 8,
   "xfgm": 8.8,
   "fga": 22
  },
  "Ronald Holland II": {
   "gp": 12,
   "tpm": 8,
   "xtpm": 9.29,
   "fgm": 21,
   "xfgm": 29.06,
   "fga": 61
  },
  "Royce O'Neale": {
   "gp": 15,
   "tpm": 24,
   "xtpm": 24.45,
   "fgm": 29,
   "xfgm": 28.41,
   "fga": 75
  },
  "Rudy Gobert": {
   "gp": 16,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 43,
   "xfgm": 55.47,
   "fga": 90
  },
  "Rui Hachimura": {
   "gp": 13,
   "tpm": 29,
   "xtpm": 25.2,
   "fgm": 65,
   "xfgm": 69.64,
   "fga": 155
  },
  "Ryan Conwell": {
   "gp": 13,
   "tpm": 19,
   "xtpm": 19.2,
   "fgm": 28,
   "xfgm": 30.13,
   "fga": 75
  },
  "Ryan Dunn": {
   "gp": 15,
   "tpm": 11,
   "xtpm": 9.72,
   "fgm": 27,
   "xfgm": 27.77,
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
   "xtpm": 23.76,
   "fgm": 60,
   "xfgm": 69.52,
   "fga": 151
  },
  "Saddiq Bey": {
   "gp": 18,
   "tpm": 41,
   "xtpm": 39.12,
   "fgm": 97,
   "xfgm": 99.05,
   "fga": 227
  },
  "Sam Hauser": {
   "gp": 16,
   "tpm": 40,
   "xtpm": 31.28,
   "fgm": 49,
   "xfgm": 38.66,
   "fga": 103
  },
  "Sam Merrill": {
   "gp": 11,
   "tpm": 17,
   "xtpm": 19.18,
   "fgm": 26,
   "xfgm": 28.18,
   "fga": 70
  },
  "Sandro Mamukelashvili": {
   "gp": 17,
   "tpm": 21,
   "xtpm": 23.11,
   "fgm": 59,
   "xfgm": 63.13,
   "fga": 137
  },
  "Santi Aldama": {
   "gp": 7,
   "tpm": 6,
   "xtpm": 7.84,
   "fgm": 14,
   "xfgm": 15.99,
   "fga": 36
  },
  "Scoot Henderson": {
   "gp": 16,
   "tpm": 17,
   "xtpm": 25.26,
   "fgm": 48,
   "xfgm": 61.28,
   "fga": 143
  },
  "Scottie Barnes": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 12.85,
   "fgm": 109,
   "xfgm": 105.0,
   "fga": 220
  },
  "Scotty Pippen Jr.": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 3.19,
   "fgm": 11,
   "xfgm": 11.1,
   "fga": 26
  },
  "Sergio de Larrea": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 1.76,
   "fgm": 9,
   "xfgm": 7.63,
   "fga": 18
  },
  "Shai Gilgeous-Alexander": {
   "gp": 16,
   "tpm": 38,
   "xtpm": 36.02,
   "fgm": 180,
   "xfgm": 166.19,
   "fga": 373
  },
  "Sidy Cissoko": {
   "gp": 16,
   "tpm": 23,
   "xtpm": 21.47,
   "fgm": 41,
   "xfgm": 39.31,
   "fga": 89
  },
  "Simone Fontecchio": {
   "gp": 9,
   "tpm": 6,
   "xtpm": 7.12,
   "fgm": 10,
   "xfgm": 11.27,
   "fga": 27
  },
  "Sion James": {
   "gp": 15,
   "tpm": 16,
   "xtpm": 23.22,
   "fgm": 31,
   "xfgm": 39.51,
   "fga": 93
  },
  "Spencer Jones": {
   "gp": 7,
   "tpm": 6,
   "xtpm": 4.68,
   "fgm": 11,
   "xfgm": 10.19,
   "fga": 22
  },
  "Stephen Curry": {
   "gp": 10,
   "tpm": 43,
   "xtpm": 33.27,
   "fgm": 80,
   "xfgm": 65.68,
   "fga": 160
  },
  "Stephon Castle": {
   "gp": 17,
   "tpm": 37,
   "xtpm": 35.08,
   "fgm": 100,
   "xfgm": 104.66,
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
   "gp": 17,
   "tpm": 19,
   "xtpm": 20.97,
   "fgm": 30,
   "xfgm": 34.19,
   "fga": 85
  },
  "T.J. McConnell": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 24,
   "xfgm": 21.46,
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
   "xtpm": 22.18,
   "fgm": 68,
   "xfgm": 77.53,
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
   "xtpm": 7.86,
   "fgm": 36,
   "xfgm": 31.19,
   "fga": 62
  },
  "Terance Mann": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 4.3,
   "fgm": 4,
   "xfgm": 6.87,
   "fga": 17
  },
  "Terrence Shannon Jr": {
   "gp": 14,
   "tpm": 20,
   "xtpm": 18.16,
   "fgm": 56,
   "xfgm": 57.42,
   "fga": 121
  },
  "Thomas Bryant": {
   "gp": 11,
   "tpm": 13,
   "xtpm": 10.64,
   "fgm": 33,
   "xfgm": 29.95,
   "fga": 62
  },
  "Tidjane Salaün": {
   "gp": 14,
   "tpm": 14,
   "xtpm": 14.58,
   "fgm": 26,
   "xfgm": 25.81,
   "fga": 59
  },
  "Tim Hardaway Jr.": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 14.17,
   "fgm": 15,
   "xfgm": 23.62,
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
   "gp": 16,
   "tpm": 41,
   "xtpm": 38.48,
   "fgm": 68,
   "xfgm": 64.45,
   "fga": 154
  },
  "Trae Young": {
   "gp": 17,
   "tpm": 35,
   "xtpm": 38.92,
   "fgm": 79,
   "xfgm": 89.53,
   "fga": 215
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
   "xtpm": 1.07,
   "fgm": 0,
   "xfgm": 1.92,
   "fga": 5
  },
  "Tre Johnson": {
   "gp": 15,
   "tpm": 18,
   "xtpm": 25.89,
   "fgm": 48,
   "xfgm": 54.01,
   "fga": 133
  },
  "Tre Jones": {
   "gp": 15,
   "tpm": 5,
   "xtpm": 6.4,
   "fgm": 61,
   "xfgm": 67.32,
   "fga": 121
  },
  "Tre Mann": {
   "gp": 7,
   "tpm": 1,
   "xtpm": 1.76,
   "fgm": 3,
   "xfgm": 5.07,
   "fga": 10
  },
  "Trendon Watford": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 2.12,
   "fgm": 12,
   "xfgm": 12.47,
   "fga": 22
  },
  "Trevon Brazile": {
   "gp": 14,
   "tpm": 9,
   "xtpm": 9.99,
   "fgm": 36,
   "xfgm": 31.35,
   "fga": 63
  },
  "Trey Lyles": {
   "gp": 17,
   "tpm": 18,
   "xtpm": 18.57,
   "fgm": 35,
   "xfgm": 31.02,
   "fga": 74
  },
  "Trey Murphy III": {
   "gp": 10,
   "tpm": 23,
   "xtpm": 21.58,
   "fgm": 52,
   "xfgm": 49.84,
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
   "gp": 13,
   "tpm": 41,
   "xtpm": 36.6,
   "fgm": 66,
   "xfgm": 57.63,
   "fga": 142
  },
  "Ty Jerome": {
   "gp": 12,
   "tpm": 31,
   "xtpm": 30.75,
   "fgm": 105,
   "xfgm": 90.55,
   "fga": 219
  },
  "Tyler Herro": {
   "gp": 16,
   "tpm": 46,
   "xtpm": 42.82,
   "fgm": 117,
   "xfgm": 115.9,
   "fga": 260
  },
  "Tyler Kolek": {
   "gp": 14,
   "tpm": 7,
   "xtpm": 9.93,
   "fgm": 20,
   "xfgm": 22.69,
   "fga": 51
  },
  "Tyrese Haliburton": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 9.61,
   "fgm": 32,
   "xfgm": 26.88,
   "fga": 62
  },
  "Tyrese Maxey": {
   "gp": 16,
   "tpm": 41,
   "xtpm": 39.27,
   "fgm": 137,
   "xfgm": 130.47,
   "fga": 277
  },
  "Tyrese Proctor": {
   "gp": 16,
   "tpm": 28,
   "xtpm": 21.99,
   "fgm": 55,
   "xfgm": 46.79,
   "fga": 108
  },
  "Tyus Jones": {
   "gp": 14,
   "tpm": 4,
   "xtpm": 5.65,
   "fgm": 11,
   "xfgm": 13.5,
   "fga": 32
  },
  "VJ Edgecombe": {
   "gp": 16,
   "tpm": 26,
   "xtpm": 27.73,
   "fgm": 85,
   "xfgm": 87.76,
   "fga": 184
  },
  "Victor Wembanyama": {
   "gp": 17,
   "tpm": 35,
   "xtpm": 39.23,
   "fgm": 191,
   "xfgm": 176.48,
   "fga": 353
  },
  "Vít Krejčí": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 5.31,
   "fgm": 6,
   "xfgm": 7.92,
   "fga": 20
  },
  "Walker Kessler": {
   "gp": 16,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 95,
   "xfgm": 89.34,
   "fga": 143
  },
  "Walter Clayton Jr.": {
   "gp": 15,
   "tpm": 20,
   "xtpm": 18.4,
   "fgm": 39,
   "xfgm": 37.76,
   "fga": 88
  },
  "Wendell Carter Jr.": {
   "gp": 15,
   "tpm": 15,
   "xtpm": 13.94,
   "fgm": 68,
   "xfgm": 59.77,
   "fga": 121
  },
  "Will Richard": {
   "gp": 15,
   "tpm": 16,
   "xtpm": 14.27,
   "fgm": 42,
   "xfgm": 39.19,
   "fga": 82
  },
  "Will Riley": {
   "gp": 14,
   "tpm": 4,
   "xtpm": 5.0,
   "fgm": 12,
   "xfgm": 12.02,
   "fga": 26
  },
  "Yang Hansen": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 3.53,
   "fgm": 9,
   "xfgm": 8.81,
   "fga": 20
  },
  "Yanic Konan Niederhäuser": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 4.07,
   "fga": 7
  },
  "Yaxel Lendeborg": {
   "gp": 16,
   "tpm": 32,
   "xtpm": 30.45,
   "fgm": 107,
   "xfgm": 110.52,
   "fga": 235
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
   "gp": 16,
   "tpm": 17,
   "xtpm": 19.84,
   "fgm": 56,
   "xfgm": 59.75,
   "fga": 125
  },
  "Zach Collins": {
   "gp": 10,
   "tpm": 1,
   "xtpm": 4.27,
   "fgm": 13,
   "xfgm": 19.62,
   "fga": 38
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
   "xtpm": 35.77,
   "fgm": 104,
   "xfgm": 90.47,
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
   "xtpm": 18.8,
   "fgm": 46,
   "xfgm": 38.78,
   "fga": 86
  },
  "Zion Williamson": {
   "gp": 16,
   "tpm": 6,
   "xtpm": 4.6,
   "fgm": 124,
   "xfgm": 125.15,
   "fga": 212
  },
  "Zuby Ejiofor": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 4.25,
   "fgm": 18,
   "xfgm": 17.03,
   "fga": 32
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
