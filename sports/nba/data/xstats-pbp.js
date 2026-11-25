// ============================================================
//  x3PM / xFGM der laufenden Saison aus Play-by-Play
//  Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data (nicht unser Projekt, frei veröffentlichte Daten)
//  Methode: Josh Lloyd (joshlloydfantasy.com/research/xstats-method)
//  Erzeugt von scripts/xstats-pbp.py am 2026-11-25 · Saison 2026-27 · Stand 2026-11-24
//  Wird von scripts/build-live-projections.js gelesen (3PM, FG%).
//  META {"season": "2026-27", "assetUpdated": "Wed, 25 Nov 2026 12:49:47 GMT"}
// ============================================================
const XSTATS_PBP = {
 "meta": {
  "season": "2026-27",
  "through": "2026-11-24",
  "players": 481,
  "games": 261,
  "shots": 45921,
  "assetUpdated": "Wed, 25 Nov 2026 12:49:47 GMT",
  "zoneRates": {
   "C3": 0.3719,
   "AB3": 0.3534,
   "RA": 0.6615,
   "PAINT": 0.4376,
   "MID": 0.4052
  },
  "source": "Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data"
 },
 "players": {
  "AJ Dybantsa": {
   "gp": 15,
   "tpm": 14,
   "xtpm": 20.27,
   "fgm": 92,
   "xfgm": 107.25,
   "fga": 219
  },
  "AJ Green": {
   "gp": 17,
   "tpm": 29,
   "xtpm": 23.16,
   "fgm": 32,
   "xfgm": 26.35,
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
   "gp": 16,
   "tpm": 16,
   "xtpm": 21.74,
   "fgm": 62,
   "xfgm": 70.97,
   "fga": 145
  },
  "Aaron Nesmith": {
   "gp": 15,
   "tpm": 20,
   "xtpm": 27.21,
   "fgm": 53,
   "xfgm": 64.51,
   "fga": 144
  },
  "Aaron Wiggins": {
   "gp": 17,
   "tpm": 47,
   "xtpm": 41.24,
   "fgm": 91,
   "xfgm": 83.82,
   "fga": 200
  },
  "Ace Bailey": {
   "gp": 19,
   "tpm": 29,
   "xtpm": 38.93,
   "fgm": 103,
   "xfgm": 102.18,
   "fga": 229
  },
  "Aday Mara": {
   "gp": 16,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 72,
   "xfgm": 65.66,
   "fga": 111
  },
  "Adem Bona": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 10,
   "xfgm": 14.06,
   "fga": 24
  },
  "Adou Thiero": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.74,
   "fgm": 4,
   "xfgm": 8.46,
   "fga": 14
  },
  "Ajay Mitchell": {
   "gp": 16,
   "tpm": 15,
   "xtpm": 17.47,
   "fgm": 105,
   "xfgm": 109.72,
   "fga": 223
  },
  "Al Horford": {
   "gp": 14,
   "tpm": 12,
   "xtpm": 14.94,
   "fgm": 22,
   "xfgm": 26.84,
   "fga": 66
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
   "gp": 8,
   "tpm": 2,
   "xtpm": 3.55,
   "fgm": 2,
   "xfgm": 4.21,
   "fga": 11
  },
  "Alex Morales": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 3.24,
   "fgm": 7,
   "xfgm": 8.71,
   "fga": 18
  },
  "Alex Sarr": {
   "gp": 18,
   "tpm": 22,
   "xtpm": 22.4,
   "fgm": 76,
   "xfgm": 68.03,
   "fga": 142
  },
  "Alijah Martin": {
   "gp": 16,
   "tpm": 13,
   "xtpm": 9.67,
   "fgm": 27,
   "xfgm": 22.67,
   "fga": 48
  },
  "Allen Graves": {
   "gp": 17,
   "tpm": 13,
   "xtpm": 14.66,
   "fgm": 34,
   "xfgm": 34.61,
   "fga": 76
  },
  "Alperen Sengun": {
   "gp": 16,
   "tpm": 16,
   "xtpm": 11.37,
   "fgm": 130,
   "xfgm": 126.54,
   "fga": 236
  },
  "Alpha Diallo": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 1.08,
   "fgm": 3,
   "xfgm": 3.72,
   "fga": 7
  },
  "Amen Thompson": {
   "gp": 17,
   "tpm": 6,
   "xtpm": 6.1,
   "fgm": 109,
   "xfgm": 107.24,
   "fga": 192
  },
  "Andre Drummond": {
   "gp": 17,
   "tpm": 1,
   "xtpm": 1.06,
   "fgm": 28,
   "xfgm": 41.59,
   "fga": 68
  },
  "Andrew Nembhard": {
   "gp": 14,
   "tpm": 32,
   "xtpm": 27.29,
   "fgm": 76,
   "xfgm": 76.25,
   "fga": 177
  },
  "Andrew Wiggins": {
   "gp": 16,
   "tpm": 21,
   "xtpm": 22.12,
   "fgm": 53,
   "xfgm": 52.85,
   "fga": 122
  },
  "Anfernee Simons": {
   "gp": 18,
   "tpm": 41,
   "xtpm": 35.79,
   "fgm": 68,
   "xfgm": 62.83,
   "fga": 152
  },
  "Anthony Black": {
   "gp": 14,
   "tpm": 27,
   "xtpm": 24.59,
   "fgm": 72,
   "xfgm": 74.54,
   "fga": 167
  },
  "Anthony Davis": {
   "gp": 17,
   "tpm": 14,
   "xtpm": 14.17,
   "fgm": 166,
   "xfgm": 156.32,
   "fga": 310
  },
  "Anthony Edwards": {
   "gp": 4,
   "tpm": 18,
   "xtpm": 15.98,
   "fgm": 50,
   "xfgm": 46.55,
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
   "xfgm": 7.27,
   "fga": 15
  },
  "Ausar Thompson": {
   "gp": 16,
   "tpm": 0,
   "xtpm": 2.14,
   "fgm": 74,
   "xfgm": 75.58,
   "fga": 134
  },
  "Austin Reaves": {
   "gp": 12,
   "tpm": 27,
   "xtpm": 23.42,
   "fgm": 97,
   "xfgm": 82.84,
   "fga": 189
  },
  "Ayo Dosunmu": {
   "gp": 18,
   "tpm": 39,
   "xtpm": 31.08,
   "fgm": 127,
   "xfgm": 120.68,
   "fga": 243
  },
  "Baba Miller": {
   "gp": 14,
   "tpm": 3,
   "xtpm": 2.85,
   "fgm": 15,
   "xfgm": 13.62,
   "fga": 27
  },
  "Bam Adebayo": {
   "gp": 16,
   "tpm": 12,
   "xtpm": 17.48,
   "fgm": 105,
   "xfgm": 94.12,
   "fga": 196
  },
  "Baylor Scheierman": {
   "gp": 18,
   "tpm": 22,
   "xtpm": 21.04,
   "fgm": 34,
   "xfgm": 35.35,
   "fga": 89
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
   "xfgm": 30.55,
   "fga": 64
  },
  "Bennett Stirtz": {
   "gp": 18,
   "tpm": 33,
   "xtpm": 25.95,
   "fgm": 52,
   "xfgm": 45.86,
   "fga": 109
  },
  "Bilal Coulibaly": {
   "gp": 18,
   "tpm": 12,
   "xtpm": 16.91,
   "fgm": 48,
   "xfgm": 50.91,
   "fga": 103
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
   "xtpm": 23.27,
   "fgm": 47,
   "xfgm": 52.87,
   "fga": 123
  },
  "Bogdan Bogdanović": {
   "gp": 18,
   "tpm": 19,
   "xtpm": 17.19,
   "fgm": 30,
   "xfgm": 25.28,
   "fga": 66
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
   "gp": 18,
   "tpm": 33,
   "xtpm": 29.45,
   "fgm": 59,
   "xfgm": 55.09,
   "fga": 130
  },
  "Braden Smith": {
   "gp": 12,
   "tpm": 6,
   "xtpm": 4.99,
   "fgm": 22,
   "xfgm": 22.25,
   "fga": 49
  },
  "Branden Carlson": {
   "gp": 12,
   "tpm": 2,
   "xtpm": 4.32,
   "fgm": 11,
   "xfgm": 11.55,
   "fga": 24
  },
  "Brandin Podziemski": {
   "gp": 15,
   "tpm": 38,
   "xtpm": 37.35,
   "fgm": 82,
   "xfgm": 77.65,
   "fga": 186
  },
  "Brandon Ingram": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 2.12,
   "fgm": 6,
   "xfgm": 7.37,
   "fga": 18
  },
  "Brandon Miller": {
   "gp": 14,
   "tpm": 42,
   "xtpm": 50.78,
   "fgm": 97,
   "xfgm": 112.93,
   "fga": 271
  },
  "Brandon Williams": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 8.17,
   "fgm": 33,
   "xfgm": 37.01,
   "fga": 80
  },
  "Brayden Burries": {
   "gp": 18,
   "tpm": 21,
   "xtpm": 23.83,
   "fgm": 71,
   "xfgm": 70.83,
   "fga": 156
  },
  "Brice Sensabaugh": {
   "gp": 19,
   "tpm": 34,
   "xtpm": 28.05,
   "fgm": 75,
   "xfgm": 65.95,
   "fga": 160
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
   "gp": 16,
   "tpm": 28,
   "xtpm": 23.05,
   "fgm": 92,
   "xfgm": 77.33,
   "fga": 168
  },
  "Brooks Barnhizer": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 7,
   "xfgm": 6.98,
   "fga": 12
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
   "xtpm": 1.79,
   "fgm": 14,
   "xfgm": 12.72,
   "fga": 24
  },
  "Bryce McGowens": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 2.51,
   "fgm": 6,
   "xfgm": 8.23,
   "fga": 17
  },
  "Bub Carrington": {
   "gp": 18,
   "tpm": 21,
   "xtpm": 17.09,
   "fgm": 25,
   "xfgm": 26.27,
   "fga": 67
  },
  "Buddy Hield": {
   "gp": 15,
   "tpm": 34,
   "xtpm": 28.29,
   "fgm": 59,
   "xfgm": 50.85,
   "fga": 117
  },
  "CJ McCollum": {
   "gp": 14,
   "tpm": 25,
   "xtpm": 25.11,
   "fgm": 74,
   "xfgm": 75.29,
   "fga": 171
  },
  "Cade Cunningham": {
   "gp": 15,
   "tpm": 29,
   "xtpm": 32.63,
   "fgm": 128,
   "xfgm": 125.24,
   "fga": 274
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
   "gp": 14,
   "tpm": 19,
   "xtpm": 12.87,
   "fgm": 35,
   "xfgm": 29.41,
   "fga": 67
  },
  "Caleb Wilson": {
   "gp": 10,
   "tpm": 23,
   "xtpm": 25.28,
   "fgm": 68,
   "xfgm": 75.33,
   "fga": 162
  },
  "Cam Christie": {
   "gp": 8,
   "tpm": 3,
   "xtpm": 2.85,
   "fgm": 4,
   "xfgm": 6.8,
   "fga": 15
  },
  "Cam Spencer": {
   "gp": 18,
   "tpm": 36,
   "xtpm": 23.4,
   "fgm": 71,
   "xfgm": 51.82,
   "fga": 127
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
   "xtpm": 31.9,
   "fgm": 88,
   "xfgm": 97.83,
   "fga": 211
  },
  "Cameron Carr": {
   "gp": 8,
   "tpm": 3,
   "xtpm": 4.59,
   "fgm": 8,
   "xfgm": 8.08,
   "fga": 19
  },
  "Cameron Johnson": {
   "gp": 13,
   "tpm": 27,
   "xtpm": 26.75,
   "fgm": 59,
   "xfgm": 57.49,
   "fga": 131
  },
  "Caris LeVert": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.41,
   "fgm": 4,
   "xfgm": 5.37,
   "fga": 11
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
   "gp": 17,
   "tpm": 15,
   "xtpm": 16.83,
   "fgm": 21,
   "xfgm": 25.83,
   "fga": 62
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
   "gp": 17,
   "tpm": 42,
   "xtpm": 33.33,
   "fgm": 93,
   "xfgm": 87.27,
   "fga": 196
  },
  "Chaney Johnson": {
   "gp": 14,
   "tpm": 7,
   "xtpm": 8.97,
   "fgm": 18,
   "xfgm": 24.92,
   "fga": 54
  },
  "Charles Bassey": {
   "gp": 15,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 53,
   "xfgm": 43.58,
   "fga": 76
  },
  "Chaz Lanier": {
   "gp": 8,
   "tpm": 7,
   "xtpm": 5.36,
   "fgm": 10,
   "xfgm": 7.52,
   "fga": 19
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
   "gp": 9,
   "tpm": 2,
   "xtpm": 3.24,
   "fgm": 11,
   "xfgm": 11.39,
   "fga": 22
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
   "gp": 15,
   "tpm": 19,
   "xtpm": 19.53,
   "fgm": 35,
   "xfgm": 34.8,
   "fga": 85
  },
  "Christian Braun": {
   "gp": 16,
   "tpm": 29,
   "xtpm": 28.63,
   "fgm": 84,
   "xfgm": 81.14,
   "fga": 168
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
   "gp": 9,
   "tpm": 13,
   "xtpm": 19.49,
   "fgm": 42,
   "xfgm": 51.58,
   "fga": 114
  },
  "Cody Williams": {
   "gp": 10,
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
   "gp": 16,
   "tpm": 37,
   "xtpm": 35.44,
   "fgm": 58,
   "xfgm": 54.86,
   "fga": 139
  },
  "Collin Murray-Boyles": {
   "gp": 15,
   "tpm": 7,
   "xtpm": 9.62,
   "fgm": 52,
   "xfgm": 60.57,
   "fga": 115
  },
  "Collin Sexton": {
   "gp": 17,
   "tpm": 17,
   "xtpm": 21.78,
   "fgm": 63,
   "xfgm": 68.27,
   "fga": 147
  },
  "Cooper Flagg": {
   "gp": 17,
   "tpm": 27,
   "xtpm": 29.78,
   "fgm": 139,
   "xfgm": 135.86,
   "fga": 291
  },
  "Corey Kispert": {
   "gp": 10,
   "tpm": 20,
   "xtpm": 14.53,
   "fgm": 33,
   "xfgm": 25.09,
   "fga": 59
  },
  "Craig Porter Jr.": {
   "gp": 13,
   "tpm": 1,
   "xtpm": 2.16,
   "fgm": 10,
   "xfgm": 11.55,
   "fga": 23
  },
  "DaRon Holmes II": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 1.41,
   "fgm": 1,
   "xfgm": 1.41,
   "fga": 4
  },
  "Daeqwon Plowden": {
   "gp": 12,
   "tpm": 8,
   "xtpm": 7.11,
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
   "gp": 17,
   "tpm": 51,
   "xtpm": 53.83,
   "fgm": 99,
   "xfgm": 105.59,
   "fga": 251
  },
  "Daniel Gafford": {
   "gp": 18,
   "tpm": 2,
   "xtpm": 0.73,
   "fgm": 66,
   "xfgm": 55.21,
   "fga": 95
  },
  "Daniss Jenkins": {
   "gp": 17,
   "tpm": 35,
   "xtpm": 31.03,
   "fgm": 85,
   "xfgm": 85.48,
   "fga": 197
  },
  "Danny Wolf": {
   "gp": 11,
   "tpm": 24,
   "xtpm": 16.41,
   "fgm": 36,
   "xfgm": 34.67,
   "fga": 77
  },
  "Darius Acuff Jr.": {
   "gp": 17,
   "tpm": 50,
   "xtpm": 55.19,
   "fgm": 152,
   "xfgm": 161.06,
   "fga": 377
  },
  "Darius Garland": {
   "gp": 16,
   "tpm": 41,
   "xtpm": 40.33,
   "fgm": 117,
   "xfgm": 106.42,
   "fga": 250
  },
  "Darryn Peterson": {
   "gp": 19,
   "tpm": 35,
   "xtpm": 40.07,
   "fgm": 107,
   "xfgm": 113.91,
   "fga": 267
  },
  "David Jones Garcia": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 2,
   "xfgm": 4.54,
   "fga": 10
  },
  "Davion Mitchell": {
   "gp": 16,
   "tpm": 39,
   "xtpm": 31.99,
   "fgm": 99,
   "xfgm": 89.81,
   "fga": 194
  },
  "Day'Ron Sharpe": {
   "gp": 16,
   "tpm": 5,
   "xtpm": 6.49,
   "fgm": 54,
   "xfgm": 57.16,
   "fga": 99
  },
  "De'Aaron Fox": {
   "gp": 16,
   "tpm": 13,
   "xtpm": 17.48,
   "fgm": 64,
   "xfgm": 62.85,
   "fga": 136
  },
  "De'Andre Hunter": {
   "gp": 15,
   "tpm": 32,
   "xtpm": 28.48,
   "fgm": 79,
   "xfgm": 71.52,
   "fga": 168
  },
  "De'Anthony Melton": {
   "gp": 17,
   "tpm": 32,
   "xtpm": 30.99,
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
   "gp": 15,
   "tpm": 3,
   "xtpm": 6.86,
   "fgm": 50,
   "xfgm": 54.7,
   "fga": 125
  },
  "Dean Wade": {
   "gp": 14,
   "tpm": 13,
   "xtpm": 12.82,
   "fgm": 22,
   "xfgm": 23.13,
   "fga": 53
  },
  "Deandre Ayton": {
   "gp": 19,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 31,
   "xfgm": 29.25,
   "fga": 49
  },
  "Dejounte Murray": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 9.67,
   "fgm": 44,
   "xfgm": 50.58,
   "fga": 102
  },
  "Deni Avdija": {
   "gp": 15,
   "tpm": 34,
   "xtpm": 29.07,
   "fgm": 123,
   "xfgm": 116.86,
   "fga": 237
  },
  "Dennis Schröder": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 12.44,
   "fgm": 32,
   "xfgm": 41.84,
   "fga": 88
  },
  "Derik Queen": {
   "gp": 19,
   "tpm": 10,
   "xtpm": 9.62,
   "fgm": 79,
   "xfgm": 85.22,
   "fga": 162
  },
  "Derrick Jones Jr.": {
   "gp": 15,
   "tpm": 26,
   "xtpm": 20.68,
   "fgm": 54,
   "xfgm": 52.06,
   "fga": 111
  },
  "Derrick White": {
   "gp": 17,
   "tpm": 30,
   "xtpm": 36.57,
   "fgm": 79,
   "xfgm": 83.64,
   "fga": 198
  },
  "Desmond Bane": {
   "gp": 16,
   "tpm": 67,
   "xtpm": 55.1,
   "fgm": 100,
   "xfgm": 91.01,
   "fga": 227
  },
  "Devin Booker": {
   "gp": 16,
   "tpm": 30,
   "xtpm": 31.49,
   "fgm": 134,
   "xfgm": 122.41,
   "fga": 285
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
   "gp": 16,
   "tpm": 25,
   "xtpm": 27.05,
   "fgm": 63,
   "xfgm": 67.22,
   "fga": 157
  },
  "Dillon Brooks": {
   "gp": 16,
   "tpm": 34,
   "xtpm": 27.68,
   "fgm": 91,
   "xfgm": 88.15,
   "fga": 201
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
   "gp": 16,
   "tpm": 4,
   "xtpm": 4.61,
   "fgm": 92,
   "xfgm": 76.56,
   "fga": 143
  },
  "Dominick Barlow": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 0.73,
   "fgm": 8,
   "xfgm": 7.12,
   "fga": 12
  },
  "Donovan Clingan": {
   "gp": 17,
   "tpm": 17,
   "xtpm": 14.51,
   "fgm": 82,
   "xfgm": 74.16,
   "fga": 138
  },
  "Donovan Mitchell": {
   "gp": 17,
   "tpm": 44,
   "xtpm": 43.92,
   "fgm": 149,
   "xfgm": 138.22,
   "fga": 301
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
   "gp": 14,
   "tpm": 7,
   "xtpm": 7.44,
   "fgm": 20,
   "xfgm": 22.07,
   "fga": 48
  },
  "Dru Smith": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 2.85,
   "fgm": 4,
   "xfgm": 5.04,
   "fga": 12
  },
  "Duncan Robinson": {
   "gp": 12,
   "tpm": 47,
   "xtpm": 38.71,
   "fgm": 63,
   "xfgm": 55.06,
   "fga": 140
  },
  "Duop Reath": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 2.85,
   "fgm": 7,
   "xfgm": 5.49,
   "fga": 12
  },
  "Dylan Cardwell": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 16,
   "xfgm": 16.19,
   "fga": 29
  },
  "Dylan Harper": {
   "gp": 15,
   "tpm": 17,
   "xtpm": 19.14,
   "fgm": 107,
   "xfgm": 104.81,
   "fga": 212
  },
  "Dyson Daniels": {
   "gp": 17,
   "tpm": 3,
   "xtpm": 8.89,
   "fgm": 71,
   "xfgm": 78.34,
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
   "gp": 10,
   "tpm": 20,
   "xtpm": 22.69,
   "fgm": 33,
   "xfgm": 41.52,
   "fga": 96
  },
  "Elijah Harkless": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.08,
   "fgm": 3,
   "xfgm": 5.62,
   "fga": 12
  },
  "Emanuel Sharp": {
   "gp": 17,
   "tpm": 17,
   "xtpm": 19.87,
   "fgm": 27,
   "xfgm": 31.32,
   "fga": 81
  },
  "Evan Mobley": {
   "gp": 12,
   "tpm": 23,
   "xtpm": 17.02,
   "fgm": 76,
   "xfgm": 69.08,
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
   "gp": 17,
   "tpm": 20,
   "xtpm": 30.24,
   "fgm": 156,
   "xfgm": 158.59,
   "fga": 333
  },
  "Fred VanVleet": {
   "gp": 15,
   "tpm": 42,
   "xtpm": 38.26,
   "fgm": 73,
   "xfgm": 65.75,
   "fga": 168
  },
  "GG Jackson": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 11.07,
   "fgm": 27,
   "xfgm": 33.46,
   "fga": 71
  },
  "Gabe Vincent": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.79,
   "fga": 2
  },
  "Gary Payton II": {
   "gp": 15,
   "tpm": 6,
   "xtpm": 8.56,
   "fgm": 32,
   "xfgm": 30.11,
   "fga": 62
  },
  "Gary Trent Jr.": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 9.6,
   "fgm": 13,
   "xfgm": 16.28,
   "fga": 40
  },
  "Georges Niang": {
   "gp": 17,
   "tpm": 20,
   "xtpm": 23.25,
   "fgm": 45,
   "xfgm": 46.89,
   "fga": 112
  },
  "Giannis Antetokounmpo": {
   "gp": 15,
   "tpm": 8,
   "xtpm": 11.66,
   "fgm": 162,
   "xfgm": 144.67,
   "fga": 269
  },
  "Goga Bitadze": {
   "gp": 15,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 27,
   "xfgm": 24.9,
   "fga": 39
  },
  "Gradey Dick": {
   "gp": 15,
   "tpm": 12,
   "xtpm": 8.93,
   "fgm": 41,
   "xfgm": 41.37,
   "fga": 80
  },
  "Graham Ike": {
   "gp": 13,
   "tpm": 5,
   "xtpm": 3.91,
   "fgm": 20,
   "xfgm": 22.79,
   "fga": 44
  },
  "Grant Nelson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.66,
   "fga": 1
  },
  "Grant Williams": {
   "gp": 3,
   "tpm": 7,
   "xtpm": 7.16,
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
   "gp": 14,
   "tpm": 9,
   "xtpm": 10.71,
   "fgm": 31,
   "xfgm": 36.66,
   "fga": 76
  },
  "Hannes Steinbach": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 11.01,
   "fga": 18
  },
  "Harrison Barnes": {
   "gp": 16,
   "tpm": 16,
   "xtpm": 16.74,
   "fgm": 28,
   "xfgm": 32.14,
   "fga": 74
  },
  "Harrison Ingram": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Herbert Jones": {
   "gp": 19,
   "tpm": 20,
   "xtpm": 22.43,
   "fgm": 48,
   "xfgm": 62.54,
   "fga": 135
  },
  "Hugo González": {
   "gp": 18,
   "tpm": 10,
   "xtpm": 14.02,
   "fgm": 25,
   "xfgm": 27.68,
   "fga": 61
  },
  "Immanuel Quickley": {
   "gp": 15,
   "tpm": 39,
   "xtpm": 41.2,
   "fgm": 89,
   "xfgm": 89.14,
   "fga": 217
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
   "gp": 17,
   "tpm": 18,
   "xtpm": 20.83,
   "fgm": 40,
   "xfgm": 45.73,
   "fga": 97
  },
  "Isaiah Collier": {
   "gp": 16,
   "tpm": 7,
   "xtpm": 6.03,
   "fgm": 35,
   "xfgm": 37.25,
   "fga": 79
  },
  "Isaiah Crawford": {
   "gp": 11,
   "tpm": 5,
   "xtpm": 3.94,
   "fgm": 10,
   "xfgm": 8.13,
   "fga": 18
  },
  "Isaiah Evans": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 2.88,
   "fgm": 2,
   "xfgm": 4.87,
   "fga": 11
  },
  "Isaiah Hartenstein": {
   "gp": 18,
   "tpm": 0,
   "xtpm": 0.73,
   "fgm": 64,
   "xfgm": 65.45,
   "fga": 119
  },
  "Isaiah Jackson": {
   "gp": 15,
   "tpm": 2,
   "xtpm": 2.12,
   "fgm": 48,
   "xfgm": 48.15,
   "fga": 84
  },
  "Isaiah Joe": {
   "gp": 7,
   "tpm": 15,
   "xtpm": 15.61,
   "fgm": 27,
   "xfgm": 24.6,
   "fga": 62
  },
  "Isaiah Stewart": {
   "gp": 13,
   "tpm": 10,
   "xtpm": 10.7,
   "fgm": 56,
   "xfgm": 48.48,
   "fga": 95
  },
  "Ivica Zubac": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 60,
   "xfgm": 66.06,
   "fga": 109
  },
  "Ja Morant": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 4.97,
   "fgm": 26,
   "xfgm": 22.05,
   "fga": 48
  },
  "Ja'Kobe Walter": {
   "gp": 17,
   "tpm": 42,
   "xtpm": 43.6,
   "fgm": 68,
   "xfgm": 71.41,
   "fga": 174
  },
  "Ja'Kobi Gillespie": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.12,
   "fgm": 3,
   "xfgm": 2.78,
   "fga": 7
  },
  "Jabari Smith Jr.": {
   "gp": 18,
   "tpm": 42,
   "xtpm": 37.65,
   "fgm": 100,
   "xfgm": 93.26,
   "fga": 210
  },
  "Jabari Walker": {
   "gp": 14,
   "tpm": 8,
   "xtpm": 8.93,
   "fgm": 37,
   "xfgm": 37.14,
   "fga": 69
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
   "xfgm": 4.73,
   "fga": 13
  },
  "Jaden McDaniels": {
   "gp": 18,
   "tpm": 29,
   "xtpm": 27.42,
   "fgm": 135,
   "xfgm": 117.73,
   "fga": 243
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
   "xtpm": 1.79,
   "fgm": 2,
   "xfgm": 5.05,
   "fga": 11
  },
  "Jaime Jaquez Jr.": {
   "gp": 18,
   "tpm": 32,
   "xtpm": 27.96,
   "fgm": 90,
   "xfgm": 95.23,
   "fga": 199
  },
  "Jake LaRavia": {
   "gp": 17,
   "tpm": 16,
   "xtpm": 13.24,
   "fgm": 40,
   "xfgm": 40.71,
   "fga": 82
  },
  "Jakob Poeltl": {
   "gp": 15,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 56,
   "xfgm": 53.6,
   "fga": 95
  },
  "Jalen Brunson": {
   "gp": 17,
   "tpm": 51,
   "xtpm": 44.62,
   "fgm": 155,
   "xfgm": 155.81,
   "fga": 355
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
   "gp": 16,
   "tpm": 21,
   "xtpm": 23.83,
   "fgm": 78,
   "xfgm": 86.46,
   "fga": 182
  },
  "Jalen Johnson": {
   "gp": 14,
   "tpm": 12,
   "xtpm": 20.18,
   "fgm": 97,
   "xfgm": 109.32,
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
   "gp": 16,
   "tpm": 7,
   "xtpm": 6.75,
   "fgm": 26,
   "xfgm": 25.56,
   "fga": 50
  },
  "Jalen Smith": {
   "gp": 15,
   "tpm": 31,
   "xtpm": 27.47,
   "fgm": 81,
   "xfgm": 71.65,
   "fga": 148
  },
  "Jalen Suggs": {
   "gp": 9,
   "tpm": 11,
   "xtpm": 14.27,
   "fgm": 28,
   "xfgm": 35.99,
   "fga": 83
  },
  "Jalen Williams": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.18,
   "fgm": 15,
   "xfgm": 19.15,
   "fga": 39
  },
  "Jamal Cain": {
   "gp": 15,
   "tpm": 11,
   "xtpm": 13.95,
   "fgm": 25,
   "xfgm": 24.65,
   "fga": 62
  },
  "Jamal Murray": {
   "gp": 16,
   "tpm": 52,
   "xtpm": 40.44,
   "fgm": 135,
   "xfgm": 118.15,
   "fga": 270
  },
  "Jamal Shead": {
   "gp": 17,
   "tpm": 18,
   "xtpm": 20.96,
   "fgm": 46,
   "xfgm": 53.72,
   "fga": 121
  },
  "Jamaree Bouyea": {
   "gp": 7,
   "tpm": 1,
   "xtpm": 0.73,
   "fgm": 7,
   "xfgm": 3.99,
   "fga": 8
  },
  "James Harden": {
   "gp": 17,
   "tpm": 49,
   "xtpm": 43.58,
   "fgm": 89,
   "xfgm": 94.93,
   "fga": 219
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
   "gp": 17,
   "tpm": 36,
   "xtpm": 29.24,
   "fgm": 55,
   "xfgm": 46.99,
   "fga": 113
  },
  "Jarace Walker": {
   "gp": 17,
   "tpm": 14,
   "xtpm": 18.84,
   "fgm": 33,
   "xfgm": 44.26,
   "fga": 98
  },
  "Jared McCain": {
   "gp": 18,
   "tpm": 41,
   "xtpm": 44.88,
   "fgm": 93,
   "xfgm": 97.73,
   "fga": 225
  },
  "Jaren Jackson Jr.": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 4.99,
   "fgm": 22,
   "xfgm": 20.13,
   "fga": 44
  },
  "Jaron Pierre Jr.": {
   "gp": 7,
   "tpm": 9,
   "xtpm": 9.23,
   "fgm": 16,
   "xfgm": 20.81,
   "fga": 47
  },
  "Jarred Vanderbilt": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 13,
   "xfgm": 11.25,
   "fga": 17
  },
  "Jarrett Allen": {
   "gp": 15,
   "tpm": 3,
   "xtpm": 1.77,
   "fgm": 75,
   "xfgm": 71.7,
   "fga": 120
  },
  "Jase Richardson": {
   "gp": 13,
   "tpm": 8,
   "xtpm": 12.89,
   "fgm": 26,
   "xfgm": 35.65,
   "fga": 81
  },
  "Javon Small": {
   "gp": 10,
   "tpm": 12,
   "xtpm": 12.41,
   "fgm": 30,
   "xfgm": 34.59,
   "fga": 77
  },
  "Javonte Green": {
   "gp": 17,
   "tpm": 22,
   "xtpm": 22.8,
   "fgm": 37,
   "xfgm": 35.54,
   "fga": 85
  },
  "Jaxson Hayes": {
   "gp": 15,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 53,
   "xfgm": 46.29,
   "fga": 82
  },
  "Jay Huff": {
   "gp": 15,
   "tpm": 13,
   "xtpm": 14.62,
   "fgm": 36,
   "xfgm": 33.12,
   "fga": 71
  },
  "Jaylen Brown": {
   "gp": 15,
   "tpm": 28,
   "xtpm": 26.0,
   "fgm": 125,
   "xfgm": 119.23,
   "fga": 251
  },
  "Jaylen Clark": {
   "gp": 12,
   "tpm": 9,
   "xtpm": 9.06,
   "fgm": 18,
   "xfgm": 18.47,
   "fga": 43
  },
  "Jaylen Wells": {
   "gp": 18,
   "tpm": 36,
   "xtpm": 30.43,
   "fgm": 69,
   "xfgm": 59.59,
   "fga": 139
  },
  "Jaylin Sellers": {
   "gp": 7,
   "tpm": 8,
   "xtpm": 6.77,
   "fgm": 12,
   "xfgm": 11.76,
   "fga": 28
  },
  "Jaylin Williams": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 10.77,
   "fgm": 8,
   "xfgm": 14.92,
   "fga": 37
  },
  "Jaylon Tyson": {
   "gp": 9,
   "tpm": 13,
   "xtpm": 15.74,
   "fgm": 28,
   "xfgm": 31.71,
   "fga": 71
  },
  "Jayson Kent": {
   "gp": 8,
   "tpm": 8,
   "xtpm": 6.79,
   "fgm": 13,
   "xfgm": 14.02,
   "fga": 31
  },
  "Jayson Tatum": {
   "gp": 16,
   "tpm": 47,
   "xtpm": 48.53,
   "fgm": 139,
   "xfgm": 144.8,
   "fga": 321
  },
  "Jerami Grant": {
   "gp": 15,
   "tpm": 26,
   "xtpm": 20.53,
   "fgm": 55,
   "xfgm": 53.54,
   "fga": 117
  },
  "Jeremiah Fears": {
   "gp": 19,
   "tpm": 23,
   "xtpm": 28.37,
   "fgm": 117,
   "xfgm": 133.87,
   "fga": 269
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
   "gp": 13,
   "tpm": 18,
   "xtpm": 18.17,
   "fgm": 21,
   "xfgm": 22.46,
   "fga": 60
  },
  "Joan Beringer": {
   "gp": 18,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 32,
   "xfgm": 34.15,
   "fga": 54
  },
  "Jock Landale": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 7.87,
   "fgm": 22,
   "xfgm": 23.47,
   "fga": 48
  },
  "Joel Embiid": {
   "gp": 14,
   "tpm": 6,
   "xtpm": 14.86,
   "fgm": 88,
   "xfgm": 105.53,
   "fga": 220
  },
  "John Collins": {
   "gp": 17,
   "tpm": 25,
   "xtpm": 19.31,
   "fgm": 69,
   "xfgm": 69.49,
   "fga": 142
  },
  "John Tonje": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.85,
   "fgm": 4,
   "xfgm": 5.71,
   "fga": 13
  },
  "Johni Broome": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Jonas Aidoo": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Jonathan Kuminga": {
   "gp": 17,
   "tpm": 27,
   "xtpm": 24.66,
   "fgm": 80,
   "xfgm": 87.65,
   "fga": 177
  },
  "Jonathan Mogbo": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 2.18,
   "fgm": 6,
   "xfgm": 8.56,
   "fga": 17
  },
  "Jordan Clarkson": {
   "gp": 12,
   "tpm": 6,
   "xtpm": 4.3,
   "fgm": 25,
   "xfgm": 24.92,
   "fga": 50
  },
  "Jordan Goodwin": {
   "gp": 12,
   "tpm": 22,
   "xtpm": 20.33,
   "fgm": 36,
   "xfgm": 34.96,
   "fga": 84
  },
  "Jordan Hawkins": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 10.71,
   "fgm": 19,
   "xfgm": 18.01,
   "fga": 45
  },
  "Jordan McLaughlin": {
   "gp": 12,
   "tpm": 3,
   "xtpm": 4.67,
   "fgm": 13,
   "xfgm": 16.76,
   "fga": 35
  },
  "Jordan Poole": {
   "gp": 13,
   "tpm": 23,
   "xtpm": 20.54,
   "fgm": 42,
   "xfgm": 43.48,
   "fga": 98
  },
  "Jordan Walsh": {
   "gp": 18,
   "tpm": 12,
   "xtpm": 16.16,
   "fgm": 28,
   "xfgm": 32.84,
   "fga": 72
  },
  "Jose Alvarado": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 7.46,
   "fgm": 13,
   "xfgm": 15.14,
   "fga": 36
  },
  "Josh Dix": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 8.18,
   "fgm": 12,
   "xfgm": 16.7,
   "fga": 38
  },
  "Josh Giddey": {
   "gp": 17,
   "tpm": 19,
   "xtpm": 22.3,
   "fgm": 69,
   "xfgm": 79.13,
   "fga": 164
  },
  "Josh Green": {
   "gp": 17,
   "tpm": 15,
   "xtpm": 14.01,
   "fgm": 29,
   "xfgm": 27.09,
   "fga": 64
  },
  "Josh Hart": {
   "gp": 14,
   "tpm": 17,
   "xtpm": 22.1,
   "fgm": 36,
   "xfgm": 46.91,
   "fga": 106
  },
  "Josh Minott": {
   "gp": 11,
   "tpm": 5,
   "xtpm": 7.83,
   "fgm": 11,
   "xfgm": 12.24,
   "fga": 29
  },
  "Josh Okogie": {
   "gp": 18,
   "tpm": 11,
   "xtpm": 13.69,
   "fgm": 21,
   "xfgm": 29.25,
   "fga": 68
  },
  "Joshua Jefferson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.73,
   "fgm": 0,
   "xfgm": 1.82,
   "fga": 4
  },
  "Jrue Holiday": {
   "gp": 17,
   "tpm": 42,
   "xtpm": 33.8,
   "fgm": 81,
   "xfgm": 75.0,
   "fga": 170
  },
  "Julian Champagnie": {
   "gp": 18,
   "tpm": 53,
   "xtpm": 45.26,
   "fgm": 67,
   "xfgm": 57.97,
   "fga": 150
  },
  "Julian Reese": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 2.6,
   "fga": 5
  },
  "Julius Randle": {
   "gp": 16,
   "tpm": 26,
   "xtpm": 26.3,
   "fgm": 116,
   "xfgm": 118.44,
   "fga": 241
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
   "gp": 8,
   "tpm": 2,
   "xtpm": 1.79,
   "fgm": 5,
   "xfgm": 4.18,
   "fga": 9
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
   "xtpm": 29.02,
   "fgm": 126,
   "xfgm": 118.32,
   "fga": 232
  },
  "Karlo Matković": {
   "gp": 18,
   "tpm": 19,
   "xtpm": 19.1,
   "fgm": 42,
   "xfgm": 39.37,
   "fga": 85
  },
  "Kasparas Jakučionis": {
   "gp": 17,
   "tpm": 17,
   "xtpm": 19.55,
   "fgm": 46,
   "xfgm": 47.27,
   "fga": 100
  },
  "Kawhi Leonard": {
   "gp": 2,
   "tpm": 4,
   "xtpm": 4.95,
   "fgm": 12,
   "xfgm": 17.22,
   "fga": 37
  },
  "Keaton Wagler": {
   "gp": 16,
   "tpm": 24,
   "xtpm": 24.81,
   "fgm": 45,
   "xfgm": 55.31,
   "fga": 131
  },
  "Keegan Murray": {
   "gp": 10,
   "tpm": 10,
   "xtpm": 15.03,
   "fgm": 45,
   "xfgm": 45.18,
   "fga": 105
  },
  "Kel'el Ware": {
   "gp": 18,
   "tpm": 13,
   "xtpm": 16.69,
   "fgm": 60,
   "xfgm": 72.32,
   "fga": 137
  },
  "Keldon Johnson": {
   "gp": 18,
   "tpm": 7,
   "xtpm": 11.44,
   "fgm": 60,
   "xfgm": 67.54,
   "fga": 129
  },
  "Kelly Oubre Jr.": {
   "gp": 16,
   "tpm": 20,
   "xtpm": 24.31,
   "fgm": 74,
   "xfgm": 72.42,
   "fga": 152
  },
  "Kenrich Williams": {
   "gp": 18,
   "tpm": 26,
   "xtpm": 21.32,
   "fgm": 56,
   "xfgm": 53.8,
   "fga": 117
  },
  "Kentavious Caldwell-Pope": {
   "gp": 18,
   "tpm": 25,
   "xtpm": 20.67,
   "fgm": 35,
   "xfgm": 30.86,
   "fga": 78
  },
  "Keon Ellis": {
   "gp": 15,
   "tpm": 15,
   "xtpm": 13.84,
   "fgm": 24,
   "xfgm": 24.33,
   "fga": 58
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
   "gp": 18,
   "tpm": 30,
   "xtpm": 25.3,
   "fgm": 123,
   "xfgm": 104.75,
   "fga": 241
  },
  "Kevin Huerter": {
   "gp": 17,
   "tpm": 25,
   "xtpm": 27.38,
   "fgm": 65,
   "xfgm": 64.52,
   "fga": 148
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
   "gp": 18,
   "tpm": 38,
   "xtpm": 41.8,
   "fgm": 117,
   "xfgm": 115.23,
   "fga": 274
  },
  "Khaman Maluach": {
   "gp": 16,
   "tpm": 2,
   "xtpm": 2.51,
   "fgm": 50,
   "xfgm": 46.75,
   "fga": 79
  },
  "Khris Middleton": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 6.83,
   "fgm": 16,
   "xfgm": 14.61,
   "fga": 36
  },
  "Kingston Flemings": {
   "gp": 13,
   "tpm": 10,
   "xtpm": 8.87,
   "fgm": 41,
   "xfgm": 40.54,
   "fga": 84
  },
  "Klay Thompson": {
   "gp": 15,
   "tpm": 60,
   "xtpm": 49.53,
   "fgm": 76,
   "xfgm": 64.03,
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
   "gp": 9,
   "tpm": 3,
   "xtpm": 4.28,
   "fgm": 12,
   "xfgm": 11.53,
   "fga": 25
  },
  "Kobe Bufkin": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Kobe Sanders": {
   "gp": 16,
   "tpm": 23,
   "xtpm": 22.73,
   "fgm": 42,
   "xfgm": 44.23,
   "fga": 104
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
   "gp": 16,
   "tpm": 12,
   "xtpm": 13.19,
   "fgm": 42,
   "xfgm": 44.89,
   "fga": 90
  },
  "Kris Murray": {
   "gp": 14,
   "tpm": 5,
   "xtpm": 9.5,
   "fgm": 13,
   "xfgm": 15.89,
   "fga": 36
  },
  "Kyle Anderson": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 8.27,
   "fga": 17
  },
  "Kyle Filipowski": {
   "gp": 12,
   "tpm": 3,
   "xtpm": 4.28,
   "fgm": 20,
   "xfgm": 21.86,
   "fga": 44
  },
  "Kyle Kuzma": {
   "gp": 17,
   "tpm": 29,
   "xtpm": 31.01,
   "fgm": 79,
   "xfgm": 83.19,
   "fga": 176
  },
  "Kyrie Irving": {
   "gp": 15,
   "tpm": 48,
   "xtpm": 46.58,
   "fgm": 116,
   "xfgm": 110.52,
   "fga": 261
  },
  "Kyshawn George": {
   "gp": 19,
   "tpm": 50,
   "xtpm": 43.66,
   "fgm": 128,
   "xfgm": 122.12,
   "fga": 270
  },
  "LJ Cryer": {
   "gp": 14,
   "tpm": 22,
   "xtpm": 19.87,
   "fgm": 30,
   "xfgm": 30.23,
   "fga": 78
  },
  "LaMelo Ball": {
   "gp": 18,
   "tpm": 58,
   "xtpm": 58.87,
   "fgm": 111,
   "xfgm": 113.41,
   "fga": 272
  },
  "Labaron Philon Jr.": {
   "gp": 13,
   "tpm": 5,
   "xtpm": 4.59,
   "fgm": 13,
   "xfgm": 11.61,
   "fga": 28
  },
  "Landry Shamet": {
   "gp": 17,
   "tpm": 42,
   "xtpm": 33.76,
   "fgm": 67,
   "xfgm": 58.03,
   "fga": 136
  },
  "Larry Nance Jr.": {
   "gp": 17,
   "tpm": 15,
   "xtpm": 13.32,
   "fgm": 26,
   "xfgm": 23.6,
   "fga": 54
  },
  "Lauri Markkanen": {
   "gp": 8,
   "tpm": 29,
   "xtpm": 25.89,
   "fgm": 44,
   "xfgm": 46.5,
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
   "gp": 14,
   "tpm": 14,
   "xtpm": 18.08,
   "fgm": 87,
   "xfgm": 91.89,
   "fga": 183
  },
  "Leaky Black": {
   "gp": 13,
   "tpm": 16,
   "xtpm": 13.6,
   "fgm": 19,
   "xfgm": 18.4,
   "fga": 47
  },
  "Leonard Miller": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 10.34,
   "fgm": 26,
   "xfgm": 29.45,
   "fga": 59
  },
  "Liam McNeeley": {
   "gp": 10,
   "tpm": 4,
   "xtpm": 6.4,
   "fgm": 9,
   "xfgm": 14.03,
   "fga": 32
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
   "gp": 16,
   "tpm": 77,
   "xtpm": 74.72,
   "fgm": 184,
   "xfgm": 164.39,
   "fga": 400
  },
  "Luka Garza": {
   "gp": 18,
   "tpm": 16,
   "xtpm": 14.99,
   "fgm": 35,
   "xfgm": 36.55,
   "fga": 80
  },
  "Luke Kennard": {
   "gp": 15,
   "tpm": 28,
   "xtpm": 24.2,
   "fgm": 45,
   "xfgm": 34.53,
   "fga": 90
  },
  "Luke Kornet": {
   "gp": 18,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 27,
   "xfgm": 31.03,
   "fga": 50
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
   "gp": 16,
   "tpm": 18,
   "xtpm": 20.22,
   "fgm": 42,
   "xfgm": 46.53,
   "fga": 111
  },
  "Maliq Brown": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Marcus Sasser": {
   "gp": 12,
   "tpm": 10,
   "xtpm": 11.81,
   "fgm": 23,
   "xfgm": 21.61,
   "fga": 54
  },
  "Marcus Smart": {
   "gp": 12,
   "tpm": 18,
   "xtpm": 18.25,
   "fgm": 29,
   "xfgm": 29.75,
   "fga": 74
  },
  "Mario Hezonja": {
   "gp": 18,
   "tpm": 21,
   "xtpm": 22.88,
   "fgm": 66,
   "xfgm": 65.89,
   "fga": 137
  },
  "Marvin Bagley III": {
   "gp": 16,
   "tpm": 3,
   "xtpm": 3.22,
   "fgm": 36,
   "xfgm": 37.0,
   "fga": 68
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
   "gp": 17,
   "tpm": 38,
   "xtpm": 35.64,
   "fgm": 83,
   "xfgm": 83.9,
   "fga": 182
  },
  "Matisse Thybulle": {
   "gp": 18,
   "tpm": 32,
   "xtpm": 28.18,
   "fgm": 49,
   "xfgm": 43.57,
   "fga": 107
  },
  "Max Christie": {
   "gp": 15,
   "tpm": 17,
   "xtpm": 19.68,
   "fgm": 29,
   "xfgm": 32.4,
   "fga": 78
  },
  "Max Strus": {
   "gp": 10,
   "tpm": 21,
   "xtpm": 20.61,
   "fgm": 29,
   "xfgm": 31.58,
   "fga": 77
  },
  "Meleek Thomas": {
   "gp": 15,
   "tpm": 35,
   "xtpm": 30.62,
   "fgm": 75,
   "xfgm": 70.07,
   "fga": 159
  },
  "Micah Peavy": {
   "gp": 12,
   "tpm": 7,
   "xtpm": 8.26,
   "fgm": 18,
   "xfgm": 23.99,
   "fga": 52
  },
  "Micah Potter": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 2.47,
   "fgm": 7,
   "xfgm": 6.2,
   "fga": 15
  },
  "Michael Porter Jr.": {
   "gp": 15,
   "tpm": 45,
   "xtpm": 43.28,
   "fgm": 95,
   "xfgm": 91.9,
   "fga": 212
  },
  "Mikal Bridges": {
   "gp": 17,
   "tpm": 19,
   "xtpm": 21.54,
   "fgm": 54,
   "xfgm": 59.22,
   "fga": 134
  },
  "Mike Conley": {
   "gp": 6,
   "tpm": 10,
   "xtpm": 4.3,
   "fgm": 12,
   "xfgm": 7.11,
   "fga": 18
  },
  "Mikel Brown Jr.": {
   "gp": 12,
   "tpm": 26,
   "xtpm": 25.13,
   "fgm": 47,
   "xfgm": 55.34,
   "fga": 129
  },
  "Miles Bridges": {
   "gp": 16,
   "tpm": 27,
   "xtpm": 29.95,
   "fgm": 89,
   "xfgm": 86.77,
   "fga": 186
  },
  "Miles McBride": {
   "gp": 16,
   "tpm": 29,
   "xtpm": 24.61,
   "fgm": 37,
   "xfgm": 33.45,
   "fga": 86
  },
  "Mitchell Robinson": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 32,
   "xfgm": 31.74,
   "fga": 49
  },
  "Mo Bamba": {
   "gp": 15,
   "tpm": 7,
   "xtpm": 4.63,
   "fgm": 54,
   "xfgm": 45.6,
   "fga": 79
  },
  "Mohamed Diawara": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 5.36,
   "fgm": 6,
   "xfgm": 9.1,
   "fga": 21
  },
  "Morez Johnson Jr.": {
   "gp": 17,
   "tpm": 5,
   "xtpm": 7.42,
   "fgm": 42,
   "xfgm": 49.73,
   "fga": 97
  },
  "Moritz Wagner": {
   "gp": 16,
   "tpm": 20,
   "xtpm": 11.03,
   "fgm": 56,
   "xfgm": 48.92,
   "fga": 92
  },
  "Moussa Cissé": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.74,
   "fga": 6
  },
  "Moussa Diabaté": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 55,
   "xfgm": 53.5,
   "fga": 86
  },
  "Myles Turner": {
   "gp": 16,
   "tpm": 24,
   "xtpm": 26.67,
   "fgm": 48,
   "xfgm": 53.25,
   "fga": 125
  },
  "Myron Gardner": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 6.08,
   "fgm": 10,
   "xfgm": 10.05,
   "fga": 23
  },
  "Naji Marshall": {
   "gp": 15,
   "tpm": 15,
   "xtpm": 18.92,
   "fgm": 61,
   "xfgm": 63.89,
   "fga": 140
  },
  "Nate Ament": {
   "gp": 16,
   "tpm": 15,
   "xtpm": 15.4,
   "fgm": 43,
   "xfgm": 45.61,
   "fga": 95
  },
  "Naz Reid": {
   "gp": 16,
   "tpm": 40,
   "xtpm": 42.67,
   "fgm": 107,
   "xfgm": 123.23,
   "fga": 280
  },
  "Neemias Queta": {
   "gp": 17,
   "tpm": 5,
   "xtpm": 2.55,
   "fgm": 68,
   "xfgm": 65.21,
   "fga": 113
  },
  "Nic Claxton": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 24,
   "xfgm": 23.55,
   "fga": 40
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
   "gp": 17,
   "tpm": 61,
   "xtpm": 60.49,
   "fgm": 121,
   "xfgm": 129.32,
   "fga": 292
  },
  "Nikola Jokić": {
   "gp": 16,
   "tpm": 20,
   "xtpm": 23.7,
   "fgm": 152,
   "xfgm": 132.88,
   "fga": 287
  },
  "Nikola Jović": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 7.16,
   "fgm": 11,
   "xfgm": 15.27,
   "fga": 34
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
   "gp": 14,
   "tpm": 8,
   "xtpm": 9.6,
   "fgm": 20,
   "xfgm": 19.47,
   "fga": 47
  },
  "Nique Clifford": {
   "gp": 16,
   "tpm": 4,
   "xtpm": 7.46,
   "fgm": 22,
   "xfgm": 23.1,
   "fga": 52
  },
  "Noa Essengue": {
   "gp": 16,
   "tpm": 9,
   "xtpm": 11.09,
   "fgm": 28,
   "xfgm": 32.38,
   "fga": 66
  },
  "Noah Clowney": {
   "gp": 16,
   "tpm": 16,
   "xtpm": 19.36,
   "fgm": 37,
   "xfgm": 38.72,
   "fga": 88
  },
  "Nolan Traore": {
   "gp": 14,
   "tpm": 21,
   "xtpm": 18.51,
   "fgm": 69,
   "xfgm": 61.42,
   "fga": 135
  },
  "Norchad Omier": {
   "gp": 7,
   "tpm": 1,
   "xtpm": 1.43,
   "fgm": 10,
   "xfgm": 8.92,
   "fga": 16
  },
  "Norman Powell": {
   "gp": 13,
   "tpm": 30,
   "xtpm": 31.16,
   "fgm": 86,
   "xfgm": 87.01,
   "fga": 193
  },
  "OG Anunoby": {
   "gp": 15,
   "tpm": 30,
   "xtpm": 33.29,
   "fgm": 71,
   "xfgm": 83.39,
   "fga": 177
  },
  "Obi Toppin": {
   "gp": 15,
   "tpm": 21,
   "xtpm": 24.01,
   "fgm": 66,
   "xfgm": 65.64,
   "fga": 135
  },
  "Olivier-Maxence Prosper": {
   "gp": 12,
   "tpm": 4,
   "xtpm": 6.51,
   "fgm": 27,
   "xfgm": 29.1,
   "fga": 55
  },
  "Onyeka Okongwu": {
   "gp": 17,
   "tpm": 31,
   "xtpm": 33.02,
   "fgm": 94,
   "xfgm": 89.33,
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
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 35,
   "xfgm": 34.73,
   "fga": 60
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
   "gp": 16,
   "tpm": 35,
   "xtpm": 34.73,
   "fgm": 75,
   "xfgm": 76.5,
   "fga": 175
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
   "xtpm": 2.53,
   "fgm": 9,
   "xfgm": 8.44,
   "fga": 17
  },
  "Paolo Banchero": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 2.14,
   "fgm": 16,
   "xfgm": 10.79,
   "fga": 23
  },
  "Pascal Siakam": {
   "gp": 17,
   "tpm": 30,
   "xtpm": 28.81,
   "fgm": 145,
   "xfgm": 136.06,
   "fga": 286
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
   "gp": 10,
   "tpm": 8,
   "xtpm": 9.26,
   "fgm": 23,
   "xfgm": 25.49,
   "fga": 53
  },
  "Paul George": {
   "gp": 15,
   "tpm": 52,
   "xtpm": 43.3,
   "fgm": 110,
   "xfgm": 101.7,
   "fga": 241
  },
  "Paul Reed": {
   "gp": 17,
   "tpm": 5,
   "xtpm": 3.57,
   "fgm": 80,
   "xfgm": 76.77,
   "fga": 140
  },
  "Payton Pritchard": {
   "gp": 18,
   "tpm": 41,
   "xtpm": 42.49,
   "fgm": 80,
   "xfgm": 82.78,
   "fga": 204
  },
  "Pelle Larsson": {
   "gp": 13,
   "tpm": 19,
   "xtpm": 14.51,
   "fgm": 46,
   "xfgm": 43.28,
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
   "gp": 14,
   "tpm": 16,
   "xtpm": 21.13,
   "fgm": 57,
   "xfgm": 69.29,
   "fga": 144
  },
  "Precious Achiuwa": {
   "gp": 14,
   "tpm": 4,
   "xtpm": 4.28,
   "fgm": 55,
   "xfgm": 52.33,
   "fga": 102
  },
  "Quentin Grimes": {
   "gp": 16,
   "tpm": 29,
   "xtpm": 25.54,
   "fgm": 62,
   "xfgm": 60.95,
   "fga": 134
  },
  "Quenton Jackson": {
   "gp": 18,
   "tpm": 19,
   "xtpm": 20.61,
   "fgm": 58,
   "xfgm": 58.5,
   "fga": 125
  },
  "Quinten Post": {
   "gp": 12,
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
   "xfgm": 118.07,
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
   "gp": 15,
   "tpm": 32,
   "xtpm": 33.0,
   "fgm": 48,
   "xfgm": 50.87,
   "fga": 128
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
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 37,
   "xfgm": 34.14,
   "fga": 55
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
   "gp": 10,
   "tpm": 6,
   "xtpm": 7.2,
   "fgm": 11,
   "xfgm": 11.59,
   "fga": 28
  },
  "Ronald Holland II": {
   "gp": 14,
   "tpm": 10,
   "xtpm": 11.1,
   "fgm": 27,
   "xfgm": 37.03,
   "fga": 76
  },
  "Royce O'Neale": {
   "gp": 16,
   "tpm": 24,
   "xtpm": 24.5,
   "fgm": 29,
   "xfgm": 28.47,
   "fga": 75
  },
  "Rudy Gobert": {
   "gp": 17,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 46,
   "xfgm": 58.12,
   "fga": 94
  },
  "Rui Hachimura": {
   "gp": 14,
   "tpm": 31,
   "xtpm": 26.67,
   "fgm": 72,
   "xfgm": 73.79,
   "fga": 165
  },
  "Ryan Conwell": {
   "gp": 14,
   "tpm": 21,
   "xtpm": 20.68,
   "fgm": 32,
   "xfgm": 33.58,
   "fga": 82
  },
  "Ryan Dunn": {
   "gp": 16,
   "tpm": 12,
   "xtpm": 10.12,
   "fgm": 28,
   "xfgm": 28.6,
   "fga": 60
  },
  "Ryan Kalkbrenner": {
   "gp": 16,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 26,
   "xfgm": 24.24,
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
   "gp": 16,
   "tpm": 22,
   "xtpm": 24.52,
   "fgm": 63,
   "xfgm": 73.75,
   "fga": 159
  },
  "Saddiq Bey": {
   "gp": 19,
   "tpm": 43,
   "xtpm": 42.41,
   "fgm": 105,
   "xfgm": 107.23,
   "fga": 245
  },
  "Sam Hauser": {
   "gp": 18,
   "tpm": 42,
   "xtpm": 34.91,
   "fgm": 51,
   "xfgm": 42.94,
   "fga": 114
  },
  "Sam Merrill": {
   "gp": 12,
   "tpm": 19,
   "xtpm": 20.65,
   "fgm": 29,
   "xfgm": 30.95,
   "fga": 76
  },
  "Sandro Mamukelashvili": {
   "gp": 18,
   "tpm": 21,
   "xtpm": 23.88,
   "fgm": 60,
   "xfgm": 65.19,
   "fga": 141
  },
  "Santi Aldama": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 9.64,
   "fgm": 19,
   "xfgm": 20.19,
   "fga": 46
  },
  "Scoot Henderson": {
   "gp": 17,
   "tpm": 20,
   "xtpm": 27.1,
   "fgm": 54,
   "xfgm": 67.23,
   "fga": 155
  },
  "Scottie Barnes": {
   "gp": 12,
   "tpm": 11,
   "xtpm": 14.3,
   "fgm": 121,
   "xfgm": 116.34,
   "fga": 245
  },
  "Scotty Pippen Jr.": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 3.2,
   "fgm": 11,
   "xfgm": 11.09,
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
   "gp": 17,
   "tpm": 42,
   "xtpm": 39.64,
   "fgm": 193,
   "xfgm": 180.22,
   "fga": 403
  },
  "Sidy Cissoko": {
   "gp": 17,
   "tpm": 24,
   "xtpm": 22.62,
   "fgm": 42,
   "xfgm": 40.46,
   "fga": 92
  },
  "Simone Fontecchio": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 8.22,
   "fgm": 14,
   "xfgm": 14.79,
   "fga": 34
  },
  "Sion James": {
   "gp": 16,
   "tpm": 17,
   "xtpm": 24.72,
   "fgm": 33,
   "xfgm": 42.33,
   "fga": 99
  },
  "Spencer Jones": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 6.12,
   "fgm": 13,
   "xfgm": 12.29,
   "fga": 27
  },
  "Stephen Curry": {
   "gp": 10,
   "tpm": 43,
   "xtpm": 33.33,
   "fgm": 80,
   "xfgm": 65.66,
   "fga": 160
  },
  "Stephon Castle": {
   "gp": 18,
   "tpm": 41,
   "xtpm": 37.98,
   "fgm": 109,
   "xfgm": 114.0,
   "fga": 252
  },
  "Steven Adams": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 9,
   "xfgm": 10.35,
   "fga": 17
  },
  "Svi Mykhailiuk": {
   "gp": 19,
   "tpm": 29,
   "xtpm": 28.5,
   "fgm": 43,
   "xfgm": 46.27,
   "fga": 115
  },
  "T.J. McConnell": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 24,
   "xfgm": 21.39,
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
   "gp": 18,
   "tpm": 19,
   "xtpm": 23.01,
   "fgm": 72,
   "xfgm": 81.82,
   "fga": 165
  },
  "Tarris Reed Jr.": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 9,
   "xfgm": 8.93,
   "fga": 16
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
   "gp": 13,
   "tpm": 10,
   "xtpm": 9.3,
   "fgm": 37,
   "xfgm": 33.29,
   "fga": 67
  },
  "Terance Mann": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 4.32,
   "fgm": 4,
   "xfgm": 6.89,
   "fga": 17
  },
  "Terrence Shannon Jr": {
   "gp": 15,
   "tpm": 22,
   "xtpm": 19.66,
   "fgm": 63,
   "xfgm": 63.3,
   "fga": 132
  },
  "Thomas Bryant": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 11.01,
   "fgm": 33,
   "xfgm": 30.32,
   "fga": 63
  },
  "Tidjane Salaün": {
   "gp": 15,
   "tpm": 14,
   "xtpm": 14.97,
   "fgm": 26,
   "xfgm": 26.65,
   "fga": 61
  },
  "Tim Hardaway Jr.": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 14.19,
   "fgm": 15,
   "xfgm": 23.63,
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
   "xtpm": 2.16,
   "fgm": 5,
   "xfgm": 6.13,
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
   "gp": 17,
   "tpm": 42,
   "xtpm": 40.72,
   "fgm": 70,
   "xfgm": 67.99,
   "fga": 162
  },
  "Trae Young": {
   "gp": 19,
   "tpm": 39,
   "xtpm": 42.19,
   "fgm": 86,
   "xfgm": 97.3,
   "fga": 234
  },
  "Trayce Jackson-Davis": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 17,
   "xfgm": 15.18,
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
   "gp": 17,
   "tpm": 21,
   "xtpm": 27.72,
   "fgm": 52,
   "xfgm": 57.0,
   "fga": 141
  },
  "Tre Jones": {
   "gp": 17,
   "tpm": 6,
   "xtpm": 8.18,
   "fgm": 67,
   "xfgm": 75.92,
   "fga": 137
  },
  "Tre Mann": {
   "gp": 9,
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
   "gp": 16,
   "tpm": 11,
   "xtpm": 10.73,
   "fgm": 39,
   "xfgm": 34.08,
   "fga": 68
  },
  "Trey Lyles": {
   "gp": 18,
   "tpm": 18,
   "xtpm": 19.38,
   "fgm": 38,
   "xfgm": 33.81,
   "fga": 79
  },
  "Trey Murphy III": {
   "gp": 11,
   "tpm": 24,
   "xtpm": 23.74,
   "fgm": 56,
   "xfgm": 56.15,
   "fga": 125
  },
  "Tristan Enaruna": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.79,
   "fgm": 3,
   "xfgm": 5.09,
   "fga": 10
  },
  "Tristan da Silva": {
   "gp": 15,
   "tpm": 49,
   "xtpm": 43.15,
   "fgm": 78,
   "xfgm": 67.01,
   "fga": 165
  },
  "Ty Jerome": {
   "gp": 13,
   "tpm": 38,
   "xtpm": 35.06,
   "fgm": 115,
   "xfgm": 98.7,
   "fga": 240
  },
  "Tyler Herro": {
   "gp": 17,
   "tpm": 50,
   "xtpm": 44.66,
   "fgm": 127,
   "xfgm": 124.24,
   "fga": 276
  },
  "Tyler Kolek": {
   "gp": 15,
   "tpm": 8,
   "xtpm": 11.01,
   "fgm": 22,
   "xfgm": 24.64,
   "fga": 56
  },
  "Tyrese Haliburton": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 9.64,
   "fgm": 32,
   "xfgm": 26.87,
   "fga": 62
  },
  "Tyrese Maxey": {
   "gp": 17,
   "tpm": 43,
   "xtpm": 41.82,
   "fgm": 144,
   "xfgm": 137.22,
   "fga": 293
  },
  "Tyrese Proctor": {
   "gp": 17,
   "tpm": 28,
   "xtpm": 22.75,
   "fgm": 57,
   "xfgm": 49.68,
   "fga": 114
  },
  "Tyus Jones": {
   "gp": 16,
   "tpm": 4,
   "xtpm": 6.36,
   "fgm": 12,
   "xfgm": 16.14,
   "fga": 38
  },
  "VJ Edgecombe": {
   "gp": 17,
   "tpm": 27,
   "xtpm": 29.22,
   "fgm": 90,
   "xfgm": 93.12,
   "fga": 195
  },
  "Victor Wembanyama": {
   "gp": 17,
   "tpm": 35,
   "xtpm": 39.29,
   "fgm": 191,
   "xfgm": 176.42,
   "fga": 353
  },
  "Vít Krejčí": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 5.32,
   "fgm": 6,
   "xfgm": 7.92,
   "fga": 20
  },
  "Walker Kessler": {
   "gp": 17,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 99,
   "xfgm": 92.44,
   "fga": 148
  },
  "Walter Clayton Jr.": {
   "gp": 17,
   "tpm": 23,
   "xtpm": 20.93,
   "fgm": 44,
   "xfgm": 42.38,
   "fga": 100
  },
  "Wendell Carter Jr.": {
   "gp": 17,
   "tpm": 17,
   "xtpm": 15.79,
   "fgm": 75,
   "xfgm": 67.46,
   "fga": 137
  },
  "Will Richard": {
   "gp": 16,
   "tpm": 17,
   "xtpm": 16.09,
   "fgm": 43,
   "xfgm": 41.83,
   "fga": 89
  },
  "Will Riley": {
   "gp": 16,
   "tpm": 5,
   "xtpm": 5.73,
   "fgm": 16,
   "xfgm": 16.0,
   "fga": 34
  },
  "Yang Hansen": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 3.53,
   "fgm": 10,
   "xfgm": 9.47,
   "fga": 21
  },
  "Yanic Konan Niederhäuser": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 4,
   "xfgm": 5.08,
   "fga": 9
  },
  "Yaxel Lendeborg": {
   "gp": 17,
   "tpm": 33,
   "xtpm": 31.92,
   "fgm": 112,
   "xfgm": 116.06,
   "fga": 248
  },
  "Yves Missi": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 20,
   "xfgm": 22.01,
   "fga": 37
  },
  "Zaccharie Risacher": {
   "gp": 18,
   "tpm": 18,
   "xtpm": 22.36,
   "fgm": 67,
   "xfgm": 69.96,
   "fga": 144
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
   "gp": 14,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 49,
   "xfgm": 45.88,
   "fga": 81
  },
  "Zach LaVine": {
   "gp": 16,
   "tpm": 42,
   "xtpm": 37.96,
   "fgm": 112,
   "xfgm": 97.99,
   "fga": 226
  },
  "Zeke Nnaji": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.86,
   "fga": 4
  },
  "Ziaire Williams": {
   "gp": 15,
   "tpm": 24,
   "xtpm": 20.27,
   "fgm": 49,
   "xfgm": 40.91,
   "fga": 91
  },
  "Zion Williamson": {
   "gp": 17,
   "tpm": 6,
   "xtpm": 4.61,
   "fgm": 134,
   "xfgm": 136.83,
   "fga": 230
  },
  "Zuby Ejiofor": {
   "gp": 11,
   "tpm": 6,
   "xtpm": 5.67,
   "fgm": 20,
   "xfgm": 21.76,
   "fga": 41
  },
  "Zyon Pullin": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 2.07,
   "fga": 5
  }
 }
};
