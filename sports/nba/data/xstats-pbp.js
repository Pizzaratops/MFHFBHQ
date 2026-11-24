// ============================================================
//  x3PM / xFGM der laufenden Saison aus Play-by-Play
//  Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data (nicht unser Projekt, frei veröffentlichte Daten)
//  Methode: Josh Lloyd (joshlloydfantasy.com/research/xstats-method)
//  Erzeugt von scripts/xstats-pbp.py am 2026-11-24 · Saison 2026-27 · Stand 2026-11-23
//  Wird von scripts/build-live-projections.js gelesen (3PM, FG%).
//  META {"season": "2026-27", "assetUpdated": "Tue, 24 Nov 2026 13:12:50 GMT"}
// ============================================================
const XSTATS_PBP = {
 "meta": {
  "season": "2026-27",
  "through": "2026-11-23",
  "players": 481,
  "games": 258,
  "shots": 45384,
  "assetUpdated": "Tue, 24 Nov 2026 13:12:50 GMT",
  "zoneRates": {
   "C3": 0.3714,
   "AB3": 0.3535,
   "RA": 0.6611,
   "PAINT": 0.438,
   "MID": 0.4064
  },
  "source": "Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data"
 },
 "players": {
  "AJ Dybantsa": {
   "gp": 14,
   "tpm": 12,
   "xtpm": 18.16,
   "fgm": 85,
   "xfgm": 99.54,
   "fga": 201
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
   "gp": 15,
   "tpm": 16,
   "xtpm": 20.68,
   "fgm": 62,
   "xfgm": 69.91,
   "fga": 142
  },
  "Aaron Nesmith": {
   "gp": 15,
   "tpm": 20,
   "xtpm": 27.21,
   "fgm": 53,
   "xfgm": 64.52,
   "fga": 144
  },
  "Aaron Wiggins": {
   "gp": 17,
   "tpm": 47,
   "xtpm": 41.24,
   "fgm": 91,
   "xfgm": 83.84,
   "fga": 200
  },
  "Ace Bailey": {
   "gp": 19,
   "tpm": 29,
   "xtpm": 38.93,
   "fgm": 103,
   "xfgm": 102.2,
   "fga": 229
  },
  "Aday Mara": {
   "gp": 16,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 72,
   "xfgm": 65.65,
   "fga": 111
  },
  "Adem Bona": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 10,
   "xfgm": 14.05,
   "fga": 24
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
   "gp": 16,
   "tpm": 15,
   "xtpm": 17.47,
   "fgm": 105,
   "xfgm": 109.75,
   "fga": 223
  },
  "Al Horford": {
   "gp": 14,
   "tpm": 12,
   "xtpm": 14.94,
   "fgm": 22,
   "xfgm": 26.85,
   "fga": 66
  },
  "Alex Caruso": {
   "gp": 12,
   "tpm": 17,
   "xtpm": 14.2,
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
   "gp": 9,
   "tpm": 2,
   "xtpm": 3.24,
   "fgm": 7,
   "xfgm": 7.64,
   "fga": 16
  },
  "Alex Sarr": {
   "gp": 17,
   "tpm": 21,
   "xtpm": 21.32,
   "fgm": 73,
   "xfgm": 65.41,
   "fga": 136
  },
  "Alijah Martin": {
   "gp": 16,
   "tpm": 13,
   "xtpm": 9.67,
   "fgm": 27,
   "xfgm": 22.66,
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
   "gp": 4,
   "tpm": 0,
   "xtpm": 1.08,
   "fgm": 2,
   "xfgm": 3.06,
   "fga": 6
  },
  "Amen Thompson": {
   "gp": 17,
   "tpm": 6,
   "xtpm": 6.1,
   "fgm": 109,
   "xfgm": 107.23,
   "fga": 192
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
   "gp": 14,
   "tpm": 32,
   "xtpm": 27.29,
   "fgm": 76,
   "xfgm": 76.3,
   "fga": 177
  },
  "Andrew Wiggins": {
   "gp": 16,
   "tpm": 21,
   "xtpm": 22.12,
   "fgm": 53,
   "xfgm": 52.86,
   "fga": 122
  },
  "Anfernee Simons": {
   "gp": 18,
   "tpm": 41,
   "xtpm": 35.8,
   "fgm": 68,
   "xfgm": 62.85,
   "fga": 152
  },
  "Anthony Black": {
   "gp": 13,
   "tpm": 27,
   "xtpm": 23.87,
   "fgm": 70,
   "xfgm": 70.35,
   "fga": 159
  },
  "Anthony Davis": {
   "gp": 16,
   "tpm": 13,
   "xtpm": 13.12,
   "fgm": 154,
   "xfgm": 145.78,
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
   "xfgm": 7.27,
   "fga": 15
  },
  "Ausar Thompson": {
   "gp": 15,
   "tpm": 0,
   "xtpm": 2.14,
   "fgm": 71,
   "xfgm": 73.59,
   "fga": 131
  },
  "Austin Reaves": {
   "gp": 12,
   "tpm": 27,
   "xtpm": 23.42,
   "fgm": 97,
   "xfgm": 82.88,
   "fga": 189
  },
  "Ayo Dosunmu": {
   "gp": 18,
   "tpm": 39,
   "xtpm": 31.08,
   "fgm": 127,
   "xfgm": 120.67,
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
   "xfgm": 94.15,
   "fga": 196
  },
  "Baylor Scheierman": {
   "gp": 17,
   "tpm": 20,
   "xtpm": 19.62,
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
   "gp": 18,
   "tpm": 33,
   "xtpm": 25.95,
   "fgm": 52,
   "xfgm": 45.86,
   "fga": 109
  },
  "Bilal Coulibaly": {
   "gp": 17,
   "tpm": 10,
   "xtpm": 15.12,
   "fgm": 44,
   "xfgm": 48.01,
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
   "xtpm": 23.27,
   "fgm": 47,
   "xfgm": 52.88,
   "fga": 123
  },
  "Bogdan Bogdanović": {
   "gp": 18,
   "tpm": 19,
   "xtpm": 17.18,
   "fgm": 30,
   "xfgm": 25.29,
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
   "xfgm": 55.11,
   "fga": 130
  },
  "Braden Smith": {
   "gp": 12,
   "tpm": 6,
   "xtpm": 4.99,
   "fgm": 22,
   "xfgm": 22.26,
   "fga": 49
  },
  "Branden Carlson": {
   "gp": 12,
   "tpm": 2,
   "xtpm": 4.31,
   "fgm": 11,
   "xfgm": 11.55,
   "fga": 24
  },
  "Brandin Podziemski": {
   "gp": 15,
   "tpm": 38,
   "xtpm": 37.35,
   "fgm": 82,
   "xfgm": 77.68,
   "fga": 186
  },
  "Brandon Ingram": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 2.12,
   "fgm": 6,
   "xfgm": 7.38,
   "fga": 18
  },
  "Brandon Miller": {
   "gp": 14,
   "tpm": 42,
   "xtpm": 50.79,
   "fgm": 97,
   "xfgm": 112.98,
   "fga": 271
  },
  "Brandon Williams": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 8.17,
   "fgm": 33,
   "xfgm": 37.02,
   "fga": 80
  },
  "Brayden Burries": {
   "gp": 18,
   "tpm": 21,
   "xtpm": 23.83,
   "fgm": 71,
   "xfgm": 70.85,
   "fga": 156
  },
  "Brice Sensabaugh": {
   "gp": 19,
   "tpm": 34,
   "xtpm": 28.05,
   "fgm": 75,
   "xfgm": 65.99,
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
   "xfgm": 77.35,
   "fga": 168
  },
  "Brooks Barnhizer": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 7,
   "xfgm": 6.97,
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
   "gp": 17,
   "tpm": 21,
   "xtpm": 16.74,
   "fgm": 25,
   "xfgm": 25.93,
   "fga": 66
  },
  "Buddy Hield": {
   "gp": 15,
   "tpm": 34,
   "xtpm": 28.3,
   "fgm": 59,
   "xfgm": 50.85,
   "fga": 117
  },
  "CJ McCollum": {
   "gp": 14,
   "tpm": 25,
   "xtpm": 25.12,
   "fgm": 74,
   "xfgm": 75.33,
   "fga": 171
  },
  "Cade Cunningham": {
   "gp": 15,
   "tpm": 29,
   "xtpm": 32.63,
   "fgm": 128,
   "xfgm": 125.3,
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
   "xtpm": 10.75,
   "fgm": 30,
   "xfgm": 25.97,
   "fga": 59
  },
  "Caleb Wilson": {
   "gp": 10,
   "tpm": 23,
   "xtpm": 25.28,
   "fgm": 68,
   "xfgm": 75.34,
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
   "xfgm": 51.85,
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
   "xtpm": 31.91,
   "fgm": 88,
   "xfgm": 97.85,
   "fga": 211
  },
  "Cameron Carr": {
   "gp": 8,
   "tpm": 3,
   "xtpm": 4.6,
   "fgm": 8,
   "xfgm": 8.08,
   "fga": 19
  },
  "Cameron Johnson": {
   "gp": 12,
   "tpm": 23,
   "xtpm": 22.81,
   "fgm": 54,
   "xfgm": 51.13,
   "fga": 116
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
   "xfgm": 25.82,
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
   "xtpm": 33.34,
   "fgm": 93,
   "xfgm": 87.29,
   "fga": 196
  },
  "Chaney Johnson": {
   "gp": 14,
   "tpm": 7,
   "xtpm": 8.96,
   "fgm": 18,
   "xfgm": 24.92,
   "fga": 54
  },
  "Charles Bassey": {
   "gp": 15,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 53,
   "xfgm": 43.57,
   "fga": 76
  },
  "Chaz Lanier": {
   "gp": 7,
   "tpm": 7,
   "xtpm": 5.36,
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
   "xtpm": 3.24,
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
   "gp": 15,
   "tpm": 19,
   "xtpm": 19.53,
   "fgm": 35,
   "xfgm": 34.81,
   "fga": 85
  },
  "Christian Braun": {
   "gp": 15,
   "tpm": 26,
   "xtpm": 26.48,
   "fgm": 79,
   "xfgm": 77.92,
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
   "gp": 9,
   "tpm": 13,
   "xtpm": 19.5,
   "fgm": 42,
   "xfgm": 51.59,
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
   "xfgm": 54.89,
   "fga": 139
  },
  "Collin Murray-Boyles": {
   "gp": 15,
   "tpm": 7,
   "xtpm": 9.62,
   "fgm": 52,
   "xfgm": 60.56,
   "fga": 115
  },
  "Collin Sexton": {
   "gp": 17,
   "tpm": 17,
   "xtpm": 21.78,
   "fgm": 63,
   "xfgm": 68.28,
   "fga": 147
  },
  "Cooper Flagg": {
   "gp": 16,
   "tpm": 26,
   "xtpm": 28.37,
   "fgm": 131,
   "xfgm": 127.38,
   "fga": 274
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
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.06,
   "fgm": 1,
   "xfgm": 1.06,
   "fga": 3
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
   "xtpm": 53.84,
   "fgm": 99,
   "xfgm": 105.62,
   "fga": 251
  },
  "Daniel Gafford": {
   "gp": 17,
   "tpm": 2,
   "xtpm": 0.72,
   "fgm": 60,
   "xfgm": 50.58,
   "fga": 87
  },
  "Daniss Jenkins": {
   "gp": 16,
   "tpm": 34,
   "xtpm": 28.87,
   "fgm": 79,
   "xfgm": 77.68,
   "fga": 181
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
   "xtpm": 55.2,
   "fgm": 152,
   "xfgm": 161.16,
   "fga": 377
  },
  "Darius Garland": {
   "gp": 16,
   "tpm": 41,
   "xtpm": 40.34,
   "fgm": 117,
   "xfgm": 106.48,
   "fga": 250
  },
  "Darryn Peterson": {
   "gp": 19,
   "tpm": 35,
   "xtpm": 40.07,
   "fgm": 107,
   "xfgm": 113.97,
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
   "xtpm": 32.0,
   "fgm": 99,
   "xfgm": 89.82,
   "fga": 194
  },
  "Day'Ron Sharpe": {
   "gp": 16,
   "tpm": 5,
   "xtpm": 6.49,
   "fgm": 54,
   "xfgm": 57.14,
   "fga": 99
  },
  "De'Aaron Fox": {
   "gp": 16,
   "tpm": 13,
   "xtpm": 17.48,
   "fgm": 64,
   "xfgm": 62.86,
   "fga": 136
  },
  "De'Andre Hunter": {
   "gp": 15,
   "tpm": 32,
   "xtpm": 28.48,
   "fgm": 79,
   "xfgm": 71.55,
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
   "gp": 14,
   "tpm": 3,
   "xtpm": 6.49,
   "fgm": 46,
   "xfgm": 51.2,
   "fga": 117
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
   "gp": 18,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 31,
   "xfgm": 28.58,
   "fga": 48
  },
  "Dejounte Murray": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 9.67,
   "fgm": 44,
   "xfgm": 50.59,
   "fga": 102
  },
  "Deni Avdija": {
   "gp": 15,
   "tpm": 34,
   "xtpm": 29.08,
   "fgm": 123,
   "xfgm": 116.86,
   "fga": 237
  },
  "Dennis Schröder": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 12.45,
   "fgm": 32,
   "xfgm": 41.84,
   "fga": 88
  },
  "Derik Queen": {
   "gp": 19,
   "tpm": 10,
   "xtpm": 9.62,
   "fgm": 79,
   "xfgm": 85.23,
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
   "gp": 16,
   "tpm": 28,
   "xtpm": 34.45,
   "fgm": 77,
   "xfgm": 79.6,
   "fga": 188
  },
  "Desmond Bane": {
   "gp": 15,
   "tpm": 63,
   "xtpm": 52.59,
   "fgm": 92,
   "xfgm": 85.3,
   "fga": 214
  },
  "Devin Booker": {
   "gp": 16,
   "tpm": 30,
   "xtpm": 31.5,
   "fgm": 134,
   "xfgm": 122.53,
   "fga": 285
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
   "gp": 16,
   "tpm": 25,
   "xtpm": 27.05,
   "fgm": 63,
   "xfgm": 67.25,
   "fga": 157
  },
  "Dillon Brooks": {
   "gp": 16,
   "tpm": 34,
   "xtpm": 27.68,
   "fgm": 91,
   "xfgm": 88.19,
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
   "xfgm": 76.57,
   "fga": 143
  },
  "Dominick Barlow": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 0.72,
   "fgm": 8,
   "xfgm": 7.11,
   "fga": 12
  },
  "Donovan Clingan": {
   "gp": 17,
   "tpm": 17,
   "xtpm": 14.51,
   "fgm": 82,
   "xfgm": 74.15,
   "fga": 138
  },
  "Donovan Mitchell": {
   "gp": 17,
   "tpm": 44,
   "xtpm": 43.93,
   "fgm": 149,
   "xfgm": 138.26,
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
   "xfgm": 55.07,
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
   "xfgm": 104.83,
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
   "xtpm": 22.7,
   "fgm": 33,
   "xfgm": 41.53,
   "fga": 96
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
   "gp": 17,
   "tpm": 17,
   "xtpm": 19.87,
   "fgm": 27,
   "xfgm": 31.33,
   "fga": 81
  },
  "Evan Mobley": {
   "gp": 12,
   "tpm": 23,
   "xtpm": 17.02,
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
   "gp": 16,
   "tpm": 20,
   "xtpm": 28.48,
   "fgm": 147,
   "xfgm": 149.44,
   "fga": 313
  },
  "Fred VanVleet": {
   "gp": 15,
   "tpm": 42,
   "xtpm": 38.27,
   "fgm": 73,
   "xfgm": 65.8,
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
   "xtpm": 11.67,
   "fgm": 162,
   "xfgm": 144.68,
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
   "xtpm": 34.01,
   "fgm": 56,
   "xfgm": 48.5,
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
   "gp": 17,
   "tpm": 10,
   "xtpm": 14.02,
   "fgm": 25,
   "xfgm": 27.23,
   "fga": 60
  },
  "Immanuel Quickley": {
   "gp": 15,
   "tpm": 39,
   "xtpm": 41.21,
   "fgm": 89,
   "xfgm": 89.18,
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
   "xfgm": 45.72,
   "fga": 97
  },
  "Isaiah Collier": {
   "gp": 16,
   "tpm": 7,
   "xtpm": 6.03,
   "fgm": 35,
   "xfgm": 37.26,
   "fga": 79
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
   "xtpm": 0.72,
   "fgm": 64,
   "xfgm": 65.45,
   "fga": 119
  },
  "Isaiah Jackson": {
   "gp": 15,
   "tpm": 2,
   "xtpm": 2.12,
   "fgm": 48,
   "xfgm": 48.14,
   "fga": 84
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
   "gp": 13,
   "tpm": 10,
   "xtpm": 10.7,
   "fgm": 56,
   "xfgm": 48.47,
   "fga": 95
  },
  "Ivica Zubac": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 60,
   "xfgm": 66.04,
   "fga": 109
  },
  "Ja Morant": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 4.97,
   "fgm": 26,
   "xfgm": 22.06,
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
   "xfgm": 93.28,
   "fga": 210
  },
  "Jabari Walker": {
   "gp": 14,
   "tpm": 8,
   "xtpm": 8.93,
   "fgm": 37,
   "xfgm": 37.12,
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
   "xtpm": 27.41,
   "fgm": 135,
   "xfgm": 117.73,
   "fga": 243
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
   "xtpm": 1.79,
   "fgm": 2,
   "xfgm": 5.05,
   "fga": 11
  },
  "Jaime Jaquez Jr.": {
   "gp": 18,
   "tpm": 32,
   "xtpm": 27.95,
   "fgm": 90,
   "xfgm": 95.23,
   "fga": 199
  },
  "Jake LaRavia": {
   "gp": 17,
   "tpm": 16,
   "xtpm": 13.24,
   "fgm": 40,
   "xfgm": 40.7,
   "fga": 82
  },
  "Jakob Poeltl": {
   "gp": 15,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 56,
   "xfgm": 53.59,
   "fga": 95
  },
  "Jalen Brunson": {
   "gp": 17,
   "tpm": 51,
   "xtpm": 44.63,
   "fgm": 155,
   "xfgm": 155.92,
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
   "xfgm": 86.48,
   "fga": 182
  },
  "Jalen Johnson": {
   "gp": 14,
   "tpm": 12,
   "xtpm": 20.19,
   "fgm": 97,
   "xfgm": 109.33,
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
   "xfgm": 71.64,
   "fga": 148
  },
  "Jalen Suggs": {
   "gp": 8,
   "tpm": 11,
   "xtpm": 13.54,
   "fgm": 26,
   "xfgm": 32.24,
   "fga": 75
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
   "gp": 14,
   "tpm": 11,
   "xtpm": 13.95,
   "fgm": 25,
   "xfgm": 24.66,
   "fga": 62
  },
  "Jamal Murray": {
   "gp": 15,
   "tpm": 50,
   "xtpm": 37.6,
   "fgm": 129,
   "xfgm": 110.79,
   "fga": 253
  },
  "Jamal Shead": {
   "gp": 17,
   "tpm": 18,
   "xtpm": 20.97,
   "fgm": 46,
   "xfgm": 53.73,
   "fga": 121
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
   "gp": 17,
   "tpm": 49,
   "xtpm": 43.59,
   "fgm": 89,
   "xfgm": 94.95,
   "fga": 219
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
   "xtpm": 44.89,
   "fgm": 93,
   "xfgm": 97.75,
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
   "xfgm": 20.82,
   "fga": 47
  },
  "Jarred Vanderbilt": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 13,
   "xfgm": 11.24,
   "fga": 17
  },
  "Jarrett Allen": {
   "gp": 15,
   "tpm": 3,
   "xtpm": 1.77,
   "fgm": 75,
   "xfgm": 71.68,
   "fga": 120
  },
  "Jase Richardson": {
   "gp": 12,
   "tpm": 8,
   "xtpm": 12.89,
   "fgm": 26,
   "xfgm": 35.66,
   "fga": 81
  },
  "Javon Small": {
   "gp": 10,
   "tpm": 12,
   "xtpm": 12.41,
   "fgm": 30,
   "xfgm": 34.6,
   "fga": 77
  },
  "Javonte Green": {
   "gp": 16,
   "tpm": 20,
   "xtpm": 21.39,
   "fgm": 35,
   "xfgm": 33.69,
   "fga": 80
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
   "xfgm": 33.11,
   "fga": 71
  },
  "Jaylen Brown": {
   "gp": 15,
   "tpm": 28,
   "xtpm": 26.0,
   "fgm": 125,
   "xfgm": 119.28,
   "fga": 251
  },
  "Jaylen Clark": {
   "gp": 12,
   "tpm": 9,
   "xtpm": 9.05,
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
   "xfgm": 11.77,
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
   "xtpm": 15.73,
   "fgm": 28,
   "xfgm": 31.7,
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
   "gp": 15,
   "tpm": 41,
   "xtpm": 43.24,
   "fgm": 126,
   "xfgm": 133.39,
   "fga": 296
  },
  "Jerami Grant": {
   "gp": 15,
   "tpm": 26,
   "xtpm": 20.53,
   "fgm": 55,
   "xfgm": 53.53,
   "fga": 117
  },
  "Jeremiah Fears": {
   "gp": 19,
   "tpm": 23,
   "xtpm": 28.37,
   "fgm": 117,
   "xfgm": 133.88,
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
   "xfgm": 4.71,
   "fga": 12
  },
  "Jevon Carter": {
   "gp": 12,
   "tpm": 15,
   "xtpm": 16.03,
   "fgm": 18,
   "xfgm": 20.33,
   "fga": 54
  },
  "Joan Beringer": {
   "gp": 18,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 32,
   "xfgm": 34.14,
   "fga": 54
  },
  "Jock Landale": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 7.87,
   "fgm": 22,
   "xfgm": 23.46,
   "fga": 48
  },
  "Joel Embiid": {
   "gp": 14,
   "tpm": 6,
   "xtpm": 14.87,
   "fgm": 88,
   "xfgm": 105.59,
   "fga": 220
  },
  "John Collins": {
   "gp": 16,
   "tpm": 23,
   "xtpm": 17.87,
   "fgm": 66,
   "xfgm": 67.39,
   "fga": 137
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
   "xtpm": 24.65,
   "fgm": 80,
   "xfgm": 87.63,
   "fga": 177
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
   "xfgm": 18.02,
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
   "gp": 17,
   "tpm": 12,
   "xtpm": 16.16,
   "fgm": 28,
   "xfgm": 32.17,
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
   "xtpm": 22.31,
   "fgm": 69,
   "xfgm": 79.14,
   "fga": 164
  },
  "Josh Green": {
   "gp": 17,
   "tpm": 15,
   "xtpm": 14.0,
   "fgm": 29,
   "xfgm": 27.09,
   "fga": 64
  },
  "Josh Hart": {
   "gp": 14,
   "tpm": 17,
   "xtpm": 22.1,
   "fgm": 36,
   "xfgm": 46.92,
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
   "xtpm": 13.68,
   "fgm": 21,
   "xfgm": 29.25,
   "fga": 68
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
   "xfgm": 57.98,
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
   "xfgm": 118.45,
   "fga": 241
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
   "xtpm": 29.03,
   "fgm": 126,
   "xfgm": 118.31,
   "fga": 232
  },
  "Karlo Matković": {
   "gp": 18,
   "tpm": 19,
   "xtpm": 19.1,
   "fgm": 42,
   "xfgm": 39.36,
   "fga": 85
  },
  "Kasparas Jakučionis": {
   "gp": 17,
   "tpm": 17,
   "xtpm": 19.55,
   "fgm": 46,
   "xfgm": 47.26,
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
   "xtpm": 24.82,
   "fgm": 45,
   "xfgm": 55.33,
   "fga": 131
  },
  "Keegan Murray": {
   "gp": 10,
   "tpm": 10,
   "xtpm": 15.03,
   "fgm": 45,
   "xfgm": 45.21,
   "fga": 105
  },
  "Kel'el Ware": {
   "gp": 18,
   "tpm": 13,
   "xtpm": 16.69,
   "fgm": 60,
   "xfgm": 72.3,
   "fga": 137
  },
  "Keldon Johnson": {
   "gp": 18,
   "tpm": 7,
   "xtpm": 11.44,
   "fgm": 60,
   "xfgm": 67.53,
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
   "xfgm": 53.81,
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
   "xfgm": 104.84,
   "fga": 241
  },
  "Kevin Huerter": {
   "gp": 16,
   "tpm": 24,
   "xtpm": 26.3,
   "fgm": 59,
   "xfgm": 59.31,
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
   "gp": 18,
   "tpm": 38,
   "xtpm": 41.81,
   "fgm": 117,
   "xfgm": 115.31,
   "fga": 274
  },
  "Khaman Maluach": {
   "gp": 16,
   "tpm": 2,
   "xtpm": 2.51,
   "fgm": 50,
   "xfgm": 46.73,
   "fga": 79
  },
  "Khris Middleton": {
   "gp": 10,
   "tpm": 8,
   "xtpm": 6.47,
   "fgm": 16,
   "xfgm": 13.86,
   "fga": 34
  },
  "Kingston Flemings": {
   "gp": 13,
   "tpm": 10,
   "xtpm": 8.87,
   "fgm": 41,
   "xfgm": 40.55,
   "fga": 84
  },
  "Klay Thompson": {
   "gp": 15,
   "tpm": 60,
   "xtpm": 49.54,
   "fgm": 76,
   "xfgm": 64.06,
   "fga": 172
  },
  "Koa Peat": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 12,
   "xfgm": 10.78,
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
   "xfgm": 44.24,
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
   "xfgm": 44.88,
   "fga": 90
  },
  "Kris Murray": {
   "gp": 14,
   "tpm": 5,
   "xtpm": 9.5,
   "fgm": 13,
   "xfgm": 15.88,
   "fga": 36
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
   "gp": 14,
   "tpm": 47,
   "xtpm": 43.72,
   "fgm": 111,
   "xfgm": 102.79,
   "fga": 242
  },
  "Kyshawn George": {
   "gp": 18,
   "tpm": 46,
   "xtpm": 39.39,
   "fgm": 119,
   "xfgm": 113.05,
   "fga": 250
  },
  "LJ Cryer": {
   "gp": 14,
   "tpm": 22,
   "xtpm": 19.87,
   "fgm": 30,
   "xfgm": 30.24,
   "fga": 78
  },
  "LaMelo Ball": {
   "gp": 18,
   "tpm": 58,
   "xtpm": 58.88,
   "fgm": 111,
   "xfgm": 113.44,
   "fga": 272
  },
  "Labaron Philon Jr.": {
   "gp": 13,
   "tpm": 5,
   "xtpm": 4.6,
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
   "xtpm": 13.31,
   "fgm": 26,
   "xfgm": 23.6,
   "fga": 54
  },
  "Lauri Markkanen": {
   "gp": 8,
   "tpm": 29,
   "xtpm": 25.9,
   "fgm": 44,
   "xfgm": 46.51,
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
   "xfgm": 91.9,
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
   "xfgm": 29.44,
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
   "xtpm": 28.73,
   "fgm": 53,
   "xfgm": 64.92,
   "fga": 141
  },
  "Luka Dončić": {
   "gp": 16,
   "tpm": 77,
   "xtpm": 74.74,
   "fgm": 184,
   "xfgm": 164.48,
   "fga": 400
  },
  "Luka Garza": {
   "gp": 17,
   "tpm": 15,
   "xtpm": 14.64,
   "fgm": 32,
   "xfgm": 35.09,
   "fga": 77
  },
  "Luke Kennard": {
   "gp": 15,
   "tpm": 28,
   "xtpm": 24.2,
   "fgm": 45,
   "xfgm": 34.54,
   "fga": 90
  },
  "Luke Kornet": {
   "gp": 18,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 27,
   "xfgm": 31.02,
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
   "xfgm": 46.55,
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
   "xfgm": 21.62,
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
   "xfgm": 65.88,
   "fga": 137
  },
  "Marvin Bagley III": {
   "gp": 15,
   "tpm": 2,
   "xtpm": 2.85,
   "fgm": 32,
   "xfgm": 33.1,
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
   "gp": 17,
   "tpm": 38,
   "xtpm": 35.64,
   "fgm": 83,
   "xfgm": 83.89,
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
   "gp": 14,
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
   "xfgm": 70.08,
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
   "xtpm": 43.29,
   "fgm": 95,
   "xfgm": 91.93,
   "fga": 212
  },
  "Mikal Bridges": {
   "gp": 17,
   "tpm": 19,
   "xtpm": 21.53,
   "fgm": 54,
   "xfgm": 59.24,
   "fga": 134
  },
  "Mike Conley": {
   "gp": 6,
   "tpm": 10,
   "xtpm": 4.3,
   "fgm": 12,
   "xfgm": 7.12,
   "fga": 18
  },
  "Mikel Brown Jr.": {
   "gp": 12,
   "tpm": 26,
   "xtpm": 25.14,
   "fgm": 47,
   "xfgm": 55.36,
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
   "xfgm": 33.46,
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
   "gp": 15,
   "tpm": 7,
   "xtpm": 4.63,
   "fgm": 54,
   "xfgm": 45.59,
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
   "gp": 16,
   "tpm": 4,
   "xtpm": 6.01,
   "fgm": 38,
   "xfgm": 46.34,
   "fga": 90
  },
  "Moritz Wagner": {
   "gp": 16,
   "tpm": 20,
   "xtpm": 11.03,
   "fgm": 56,
   "xfgm": 48.9,
   "fga": 92
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
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 55,
   "xfgm": 53.48,
   "fga": 86
  },
  "Myles Turner": {
   "gp": 16,
   "tpm": 24,
   "xtpm": 26.68,
   "fgm": 48,
   "xfgm": 53.26,
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
   "gp": 14,
   "tpm": 14,
   "xtpm": 17.13,
   "fgm": 55,
   "xfgm": 57.76,
   "fga": 127
  },
  "Nate Ament": {
   "gp": 16,
   "tpm": 15,
   "xtpm": 15.4,
   "fgm": 43,
   "xfgm": 45.6,
   "fga": 95
  },
  "Naz Reid": {
   "gp": 16,
   "tpm": 40,
   "xtpm": 42.67,
   "fgm": 107,
   "xfgm": 123.28,
   "fga": 280
  },
  "Neemias Queta": {
   "gp": 16,
   "tpm": 5,
   "xtpm": 2.55,
   "fgm": 59,
   "xfgm": 58.59,
   "fga": 102
  },
  "Nic Claxton": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 24,
   "xfgm": 23.54,
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
   "xfgm": 129.33,
   "fga": 292
  },
  "Nikola Jokić": {
   "gp": 15,
   "tpm": 19,
   "xtpm": 22.29,
   "fgm": 146,
   "xfgm": 126.71,
   "fga": 273
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
   "xfgm": 23.11,
   "fga": 52
  },
  "Noa Essengue": {
   "gp": 16,
   "tpm": 9,
   "xtpm": 11.08,
   "fgm": 28,
   "xfgm": 32.38,
   "fga": 66
  },
  "Noah Clowney": {
   "gp": 16,
   "tpm": 16,
   "xtpm": 19.36,
   "fgm": 37,
   "xfgm": 38.71,
   "fga": 88
  },
  "Nolan Traore": {
   "gp": 14,
   "tpm": 21,
   "xtpm": 18.51,
   "fgm": 69,
   "xfgm": 61.43,
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
   "xfgm": 87.04,
   "fga": 193
  },
  "OG Anunoby": {
   "gp": 15,
   "tpm": 30,
   "xtpm": 33.29,
   "fgm": 71,
   "xfgm": 83.38,
   "fga": 177
  },
  "Obi Toppin": {
   "gp": 15,
   "tpm": 21,
   "xtpm": 24.01,
   "fgm": 66,
   "xfgm": 65.62,
   "fga": 135
  },
  "Olivier-Maxence Prosper": {
   "gp": 12,
   "tpm": 4,
   "xtpm": 6.51,
   "fgm": 27,
   "xfgm": 29.09,
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
   "gp": 15,
   "tpm": 34,
   "xtpm": 33.63,
   "fgm": 69,
   "xfgm": 71.04,
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
   "xfgm": 10.8,
   "fga": 23
  },
  "Pascal Siakam": {
   "gp": 17,
   "tpm": 30,
   "xtpm": 28.82,
   "fgm": 145,
   "xfgm": 136.11,
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
   "gp": 14,
   "tpm": 46,
   "xtpm": 40.13,
   "fgm": 99,
   "xfgm": 93.3,
   "fga": 221
  },
  "Paul Reed": {
   "gp": 16,
   "tpm": 5,
   "xtpm": 3.57,
   "fgm": 77,
   "xfgm": 73.25,
   "fga": 134
  },
  "Payton Pritchard": {
   "gp": 17,
   "tpm": 37,
   "xtpm": 38.61,
   "fgm": 76,
   "xfgm": 77.69,
   "fga": 190
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
   "xfgm": 52.34,
   "fga": 102
  },
  "Quentin Grimes": {
   "gp": 16,
   "tpm": 29,
   "xtpm": 25.54,
   "fgm": 62,
   "xfgm": 60.96,
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
   "xtpm": 26.27,
   "fgm": 113,
   "xfgm": 118.08,
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
   "xfgm": 50.89,
   "fga": 128
  },
  "Riley Minix": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 3.91,
   "fgm": 5,
   "xfgm": 7.4,
   "fga": 17
  },
  "Robert Williams III": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 37,
   "xfgm": 34.13,
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
   "gp": 9,
   "tpm": 6,
   "xtpm": 6.47,
   "fgm": 10,
   "xfgm": 10.21,
   "fga": 25
  },
  "Ronald Holland II": {
   "gp": 13,
   "tpm": 8,
   "xtpm": 9.32,
   "fgm": 22,
   "xfgm": 32.82,
   "fga": 67
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
   "xfgm": 58.1,
   "fga": 94
  },
  "Rui Hachimura": {
   "gp": 14,
   "tpm": 31,
   "xtpm": 26.68,
   "fgm": 72,
   "xfgm": 73.82,
   "fga": 165
  },
  "Ryan Conwell": {
   "gp": 14,
   "tpm": 21,
   "xtpm": 20.68,
   "fgm": 32,
   "xfgm": 33.59,
   "fga": 82
  },
  "Ryan Dunn": {
   "gp": 16,
   "tpm": 12,
   "xtpm": 10.11,
   "fgm": 28,
   "xfgm": 28.59,
   "fga": 60
  },
  "Ryan Kalkbrenner": {
   "gp": 16,
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
   "gp": 16,
   "tpm": 22,
   "xtpm": 24.52,
   "fgm": 63,
   "xfgm": 73.76,
   "fga": 159
  },
  "Saddiq Bey": {
   "gp": 19,
   "tpm": 43,
   "xtpm": 42.41,
   "fgm": 105,
   "xfgm": 107.26,
   "fga": 245
  },
  "Sam Hauser": {
   "gp": 17,
   "tpm": 41,
   "xtpm": 33.84,
   "fgm": 50,
   "xfgm": 41.2,
   "fga": 110
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
   "gp": 8,
   "tpm": 7,
   "xtpm": 8.93,
   "fgm": 18,
   "xfgm": 19.48,
   "fga": 44
  },
  "Scoot Henderson": {
   "gp": 17,
   "tpm": 20,
   "xtpm": 27.1,
   "fgm": 54,
   "xfgm": 67.25,
   "fga": 155
  },
  "Scottie Barnes": {
   "gp": 12,
   "tpm": 11,
   "xtpm": 14.3,
   "fgm": 121,
   "xfgm": 116.41,
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
   "xtpm": 39.65,
   "fgm": 193,
   "xfgm": 180.36,
   "fga": 403
  },
  "Sidy Cissoko": {
   "gp": 17,
   "tpm": 24,
   "xtpm": 22.61,
   "fgm": 42,
   "xfgm": 40.45,
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
   "xfgm": 42.32,
   "fga": 99
  },
  "Spencer Jones": {
   "gp": 8,
   "tpm": 6,
   "xtpm": 5.06,
   "fgm": 11,
   "xfgm": 10.56,
   "fga": 23
  },
  "Stephen Curry": {
   "gp": 10,
   "tpm": 43,
   "xtpm": 33.34,
   "fgm": 80,
   "xfgm": 65.69,
   "fga": 160
  },
  "Stephon Castle": {
   "gp": 18,
   "tpm": 41,
   "xtpm": 37.99,
   "fgm": 109,
   "xfgm": 114.03,
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
   "xfgm": 46.28,
   "fga": 115
  },
  "T.J. McConnell": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 24,
   "xfgm": 21.42,
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
   "xtpm": 23.0,
   "fgm": 72,
   "xfgm": 81.81,
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
   "xfgm": 33.28,
   "fga": 67
  },
  "Terance Mann": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 4.31,
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
   "xfgm": 26.64,
   "fga": 61
  },
  "Tim Hardaway Jr.": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 14.2,
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
   "xtpm": 2.16,
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
   "gp": 17,
   "tpm": 42,
   "xtpm": 40.71,
   "fgm": 70,
   "xfgm": 67.99,
   "fga": 162
  },
  "Trae Young": {
   "gp": 18,
   "tpm": 38,
   "xtpm": 41.49,
   "fgm": 82,
   "xfgm": 93.23,
   "fga": 225
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
   "gp": 16,
   "tpm": 21,
   "xtpm": 27.01,
   "fgm": 52,
   "xfgm": 55.93,
   "fga": 138
  },
  "Tre Jones": {
   "gp": 17,
   "tpm": 6,
   "xtpm": 8.18,
   "fgm": 67,
   "xfgm": 75.9,
   "fga": 137
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
   "xtpm": 10.73,
   "fgm": 39,
   "xfgm": 34.07,
   "fga": 68
  },
  "Trey Lyles": {
   "gp": 18,
   "tpm": 18,
   "xtpm": 19.38,
   "fgm": 38,
   "xfgm": 33.8,
   "fga": 79
  },
  "Trey Murphy III": {
   "gp": 11,
   "tpm": 24,
   "xtpm": 23.74,
   "fgm": 56,
   "xfgm": 56.16,
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
   "gp": 14,
   "tpm": 45,
   "xtpm": 39.19,
   "fgm": 72,
   "xfgm": 61.96,
   "fga": 152
  },
  "Ty Jerome": {
   "gp": 13,
   "tpm": 38,
   "xtpm": 35.07,
   "fgm": 115,
   "xfgm": 98.78,
   "fga": 240
  },
  "Tyler Herro": {
   "gp": 17,
   "tpm": 50,
   "xtpm": 44.67,
   "fgm": 127,
   "xfgm": 124.27,
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
   "xtpm": 9.63,
   "fgm": 32,
   "xfgm": 26.88,
   "fga": 62
  },
  "Tyrese Maxey": {
   "gp": 17,
   "tpm": 43,
   "xtpm": 41.82,
   "fgm": 144,
   "xfgm": 137.25,
   "fga": 293
  },
  "Tyrese Proctor": {
   "gp": 17,
   "tpm": 28,
   "xtpm": 22.75,
   "fgm": 57,
   "xfgm": 49.69,
   "fga": 114
  },
  "Tyus Jones": {
   "gp": 15,
   "tpm": 4,
   "xtpm": 6.01,
   "fgm": 11,
   "xfgm": 14.29,
   "fga": 34
  },
  "VJ Edgecombe": {
   "gp": 17,
   "tpm": 27,
   "xtpm": 29.22,
   "fgm": 90,
   "xfgm": 93.13,
   "fga": 195
  },
  "Victor Wembanyama": {
   "gp": 17,
   "tpm": 35,
   "xtpm": 39.3,
   "fgm": 191,
   "xfgm": 176.44,
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
   "gp": 17,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 99,
   "xfgm": 92.4,
   "fga": 148
  },
  "Walter Clayton Jr.": {
   "gp": 16,
   "tpm": 22,
   "xtpm": 19.85,
   "fgm": 42,
   "xfgm": 40.47,
   "fga": 95
  },
  "Wendell Carter Jr.": {
   "gp": 16,
   "tpm": 16,
   "xtpm": 14.69,
   "fgm": 72,
   "xfgm": 62.66,
   "fga": 127
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
   "gp": 15,
   "tpm": 4,
   "xtpm": 5.37,
   "fgm": 14,
   "xfgm": 13.89,
   "fga": 30
  },
  "Yang Hansen": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 3.54,
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
   "xtpm": 31.93,
   "fgm": 112,
   "xfgm": 116.08,
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
   "gp": 17,
   "tpm": 17,
   "xtpm": 21.66,
   "fgm": 62,
   "xfgm": 65.28,
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
   "xtpm": 37.97,
   "fgm": 112,
   "xfgm": 98.04,
   "fga": 226
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
   "gp": 15,
   "tpm": 24,
   "xtpm": 20.28,
   "fgm": 49,
   "xfgm": 40.91,
   "fga": 91
  },
  "Zion Williamson": {
   "gp": 17,
   "tpm": 6,
   "xtpm": 4.61,
   "fgm": 134,
   "xfgm": 136.79,
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
