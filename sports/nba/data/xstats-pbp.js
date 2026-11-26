// ============================================================
//  x3PM / xFGM der laufenden Saison aus Play-by-Play
//  Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data (nicht unser Projekt, frei veröffentlichte Daten)
//  Methode: Josh Lloyd (joshlloydfantasy.com/research/xstats-method)
//  Erzeugt von scripts/xstats-pbp.py am 2026-11-26 · Saison 2026-27 · Stand 2026-11-25
//  Wird von scripts/build-live-projections.js gelesen (3PM, FG%).
//  META {"season": "2026-27", "assetUpdated": "Thu, 26 Nov 2026 13:06:12 GMT"}
// ============================================================
const XSTATS_PBP = {
 "meta": {
  "season": "2026-27",
  "through": "2026-11-25",
  "players": 482,
  "games": 270,
  "shots": 47519,
  "assetUpdated": "Thu, 26 Nov 2026 13:06:12 GMT",
  "zoneRates": {
   "C3": 0.3715,
   "AB3": 0.3526,
   "RA": 0.6613,
   "PAINT": 0.4376,
   "MID": 0.4052
  },
  "source": "Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data"
 },
 "players": {
  "AJ Dybantsa": {
   "gp": 15,
   "tpm": 14,
   "xtpm": 20.23,
   "fgm": 92,
   "xfgm": 107.18,
   "fga": 219
  },
  "AJ Green": {
   "gp": 18,
   "tpm": 29,
   "xtpm": 24.16,
   "fgm": 32,
   "xfgm": 27.35,
   "fga": 75
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
   "xtpm": 21.7,
   "fgm": 62,
   "xfgm": 70.91,
   "fga": 145
  },
  "Aaron Nesmith": {
   "gp": 15,
   "tpm": 20,
   "xtpm": 27.16,
   "fgm": 53,
   "xfgm": 64.45,
   "fga": 144
  },
  "Aaron Wiggins": {
   "gp": 17,
   "tpm": 47,
   "xtpm": 41.14,
   "fgm": 91,
   "xfgm": 83.71,
   "fga": 200
  },
  "Ace Bailey": {
   "gp": 19,
   "tpm": 29,
   "xtpm": 38.85,
   "fgm": 103,
   "xfgm": 102.09,
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
   "gp": 11,
   "tpm": 0,
   "xtpm": 1.43,
   "fgm": 10,
   "xfgm": 15.74,
   "fga": 27
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
   "gp": 17,
   "tpm": 17,
   "xtpm": 19.19,
   "fgm": 116,
   "xfgm": 118.32,
   "fga": 242
  },
  "Al Horford": {
   "gp": 15,
   "tpm": 12,
   "xtpm": 15.26,
   "fgm": 23,
   "xfgm": 28.23,
   "fga": 69
  },
  "Alex Caruso": {
   "gp": 13,
   "tpm": 20,
   "xtpm": 15.94,
   "fgm": 31,
   "xfgm": 29.94,
   "fga": 71
  },
  "Alex Karaban": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 3.54,
   "fgm": 2,
   "xfgm": 4.21,
   "fga": 11
  },
  "Alex Morales": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 3.23,
   "fgm": 7,
   "xfgm": 8.7,
   "fga": 18
  },
  "Alex Sarr": {
   "gp": 18,
   "tpm": 22,
   "xtpm": 22.34,
   "fgm": 76,
   "xfgm": 67.97,
   "fga": 142
  },
  "Alijah Martin": {
   "gp": 16,
   "tpm": 13,
   "xtpm": 9.65,
   "fgm": 27,
   "xfgm": 22.64,
   "fga": 48
  },
  "Allen Graves": {
   "gp": 17,
   "tpm": 13,
   "xtpm": 14.63,
   "fgm": 34,
   "xfgm": 34.57,
   "fga": 76
  },
  "Alperen Sengun": {
   "gp": 17,
   "tpm": 19,
   "xtpm": 13.1,
   "fgm": 139,
   "xfgm": 134.17,
   "fga": 253
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
   "gp": 18,
   "tpm": 6,
   "xtpm": 6.09,
   "fgm": 116,
   "xfgm": 115.31,
   "fga": 206
  },
  "Andre Drummond": {
   "gp": 18,
   "tpm": 2,
   "xtpm": 1.41,
   "fgm": 29,
   "xfgm": 41.93,
   "fga": 69
  },
  "Andrew Nembhard": {
   "gp": 14,
   "tpm": 32,
   "xtpm": 27.22,
   "fgm": 76,
   "xfgm": 76.18,
   "fga": 177
  },
  "Andrew Wiggins": {
   "gp": 17,
   "tpm": 21,
   "xtpm": 22.77,
   "fgm": 57,
   "xfgm": 55.92,
   "fga": 128
  },
  "Anfernee Simons": {
   "gp": 19,
   "tpm": 43,
   "xtpm": 37.84,
   "fgm": 70,
   "xfgm": 64.88,
   "fga": 158
  },
  "Anthony Black": {
   "gp": 14,
   "tpm": 27,
   "xtpm": 24.54,
   "fgm": 72,
   "xfgm": 74.48,
   "fga": 167
  },
  "Anthony Davis": {
   "gp": 17,
   "tpm": 14,
   "xtpm": 14.14,
   "fgm": 166,
   "xfgm": 156.27,
   "fga": 310
  },
  "Anthony Edwards": {
   "gp": 4,
   "tpm": 18,
   "xtpm": 15.94,
   "fgm": 50,
   "xfgm": 46.51,
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
   "gp": 16,
   "tpm": 0,
   "xtpm": 2.13,
   "fgm": 74,
   "xfgm": 75.56,
   "fga": 134
  },
  "Austin Reaves": {
   "gp": 12,
   "tpm": 27,
   "xtpm": 23.36,
   "fgm": 97,
   "xfgm": 82.77,
   "fga": 189
  },
  "Ayo Dosunmu": {
   "gp": 19,
   "tpm": 43,
   "xtpm": 33.5,
   "fgm": 133,
   "xfgm": 127.26,
   "fga": 257
  },
  "Baba Miller": {
   "gp": 15,
   "tpm": 3,
   "xtpm": 2.84,
   "fgm": 16,
   "xfgm": 14.28,
   "fga": 28
  },
  "Bam Adebayo": {
   "gp": 17,
   "tpm": 13,
   "xtpm": 18.54,
   "fgm": 111,
   "xfgm": 102.86,
   "fga": 212
  },
  "Baylor Scheierman": {
   "gp": 18,
   "tpm": 22,
   "xtpm": 20.99,
   "fgm": 34,
   "xfgm": 35.3,
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
   "xtpm": 9.2,
   "fgm": 23,
   "xfgm": 30.53,
   "fga": 64
  },
  "Bennett Stirtz": {
   "gp": 19,
   "tpm": 34,
   "xtpm": 27.3,
   "fgm": 54,
   "xfgm": 48.3,
   "fga": 115
  },
  "Bilal Coulibaly": {
   "gp": 18,
   "tpm": 12,
   "xtpm": 16.87,
   "fgm": 48,
   "xfgm": 50.87,
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
   "gp": 17,
   "tpm": 21,
   "xtpm": 24.28,
   "fgm": 49,
   "xfgm": 54.53,
   "fga": 127
  },
  "Bogdan Bogdanović": {
   "gp": 19,
   "tpm": 20,
   "xtpm": 17.86,
   "fgm": 32,
   "xfgm": 26.8,
   "fga": 70
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
   "gp": 19,
   "tpm": 34,
   "xtpm": 31.16,
   "fgm": 63,
   "xfgm": 59.6,
   "fga": 140
  },
  "Braden Smith": {
   "gp": 12,
   "tpm": 6,
   "xtpm": 4.97,
   "fgm": 22,
   "xfgm": 22.23,
   "fga": 49
  },
  "Branden Carlson": {
   "gp": 12,
   "tpm": 2,
   "xtpm": 4.31,
   "fgm": 11,
   "xfgm": 11.54,
   "fga": 24
  },
  "Brandin Podziemski": {
   "gp": 16,
   "tpm": 41,
   "xtpm": 39.38,
   "fgm": 87,
   "xfgm": 81.21,
   "fga": 195
  },
  "Brandon Ingram": {
   "gp": 2,
   "tpm": 2,
   "xtpm": 4.29,
   "fgm": 12,
   "xfgm": 15.77,
   "fga": 37
  },
  "Brandon Miller": {
   "gp": 15,
   "tpm": 46,
   "xtpm": 53.84,
   "fgm": 110,
   "xfgm": 124.48,
   "fga": 296
  },
  "Brandon Williams": {
   "gp": 11,
   "tpm": 7,
   "xtpm": 8.85,
   "fgm": 40,
   "xfgm": 43.81,
   "fga": 94
  },
  "Brayden Burries": {
   "gp": 19,
   "tpm": 21,
   "xtpm": 24.48,
   "fgm": 72,
   "xfgm": 73.19,
   "fga": 162
  },
  "Brice Sensabaugh": {
   "gp": 19,
   "tpm": 34,
   "xtpm": 27.99,
   "fgm": 75,
   "xfgm": 65.88,
   "fga": 160
  },
  "Bronny James": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 2,
   "xfgm": 1.8,
   "fga": 4
  },
  "Brook Lopez": {
   "gp": 17,
   "tpm": 29,
   "xtpm": 23.7,
   "fgm": 94,
   "xfgm": 78.63,
   "fga": 171
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
   "xfgm": 6.65,
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
   "gp": 8,
   "tpm": 2,
   "xtpm": 2.51,
   "fgm": 6,
   "xfgm": 8.22,
   "fga": 17
  },
  "Bub Carrington": {
   "gp": 18,
   "tpm": 21,
   "xtpm": 17.06,
   "fgm": 25,
   "xfgm": 26.23,
   "fga": 67
  },
  "Buddy Hield": {
   "gp": 16,
   "tpm": 37,
   "xtpm": 30.34,
   "fgm": 62,
   "xfgm": 53.33,
   "fga": 124
  },
  "CJ McCollum": {
   "gp": 14,
   "tpm": 25,
   "xtpm": 25.05,
   "fgm": 74,
   "xfgm": 75.23,
   "fga": 171
  },
  "Cade Cunningham": {
   "gp": 15,
   "tpm": 29,
   "xtpm": 32.55,
   "fgm": 128,
   "xfgm": 125.15,
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
   "xtpm": 12.84,
   "fgm": 35,
   "xfgm": 29.38,
   "fga": 67
  },
  "Caleb Wilson": {
   "gp": 10,
   "tpm": 23,
   "xtpm": 25.22,
   "fgm": 68,
   "xfgm": 75.26,
   "fga": 162
  },
  "Cam Christie": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 3.19,
   "fgm": 4,
   "xfgm": 7.81,
   "fga": 17
  },
  "Cam Spencer": {
   "gp": 19,
   "tpm": 38,
   "xtpm": 24.76,
   "fgm": 78,
   "xfgm": 55.99,
   "fga": 137
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
   "xtpm": 31.83,
   "fgm": 88,
   "xfgm": 97.75,
   "fga": 211
  },
  "Cameron Carr": {
   "gp": 8,
   "tpm": 3,
   "xtpm": 4.58,
   "fgm": 8,
   "xfgm": 8.07,
   "fga": 19
  },
  "Cameron Johnson": {
   "gp": 13,
   "tpm": 27,
   "xtpm": 26.69,
   "fgm": 59,
   "xfgm": 57.42,
   "fga": 131
  },
  "Caris LeVert": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 1.41,
   "fgm": 5,
   "xfgm": 6.69,
   "fga": 13
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
   "gp": 18,
   "tpm": 15,
   "xtpm": 17.52,
   "fgm": 22,
   "xfgm": 27.18,
   "fga": 65
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
   "gp": 18,
   "tpm": 42,
   "xtpm": 35.37,
   "fgm": 99,
   "xfgm": 93.25,
   "fga": 210
  },
  "Chaney Johnson": {
   "gp": 14,
   "tpm": 7,
   "xtpm": 8.95,
   "fgm": 18,
   "xfgm": 24.9,
   "fga": 54
  },
  "Charles Bassey": {
   "gp": 16,
   "tpm": 0,
   "xtpm": 1.08,
   "fgm": 57,
   "xfgm": 48.11,
   "fga": 85
  },
  "Chaz Lanier": {
   "gp": 8,
   "tpm": 7,
   "xtpm": 5.35,
   "fgm": 10,
   "xfgm": 7.51,
   "fga": 19
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
   "gp": 9,
   "tpm": 2,
   "xtpm": 3.23,
   "fgm": 11,
   "xfgm": 11.38,
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
   "xtpm": 8.17,
   "fgm": 10,
   "xfgm": 10.36,
   "fga": 27
  },
  "Christian Anderson": {
   "gp": 16,
   "tpm": 22,
   "xtpm": 21.95,
   "fgm": 40,
   "xfgm": 38.1,
   "fga": 94
  },
  "Christian Braun": {
   "gp": 16,
   "tpm": 29,
   "xtpm": 28.57,
   "fgm": 84,
   "xfgm": 81.07,
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
   "gp": 10,
   "tpm": 13,
   "xtpm": 21.21,
   "fgm": 45,
   "xfgm": 57.4,
   "fga": 127
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
   "gp": 17,
   "tpm": 37,
   "xtpm": 36.76,
   "fgm": 60,
   "xfgm": 57.72,
   "fga": 146
  },
  "Collin Murray-Boyles": {
   "gp": 15,
   "tpm": 7,
   "xtpm": 9.6,
   "fgm": 52,
   "xfgm": 60.53,
   "fga": 115
  },
  "Collin Sexton": {
   "gp": 17,
   "tpm": 17,
   "xtpm": 21.73,
   "fgm": 63,
   "xfgm": 68.22,
   "fga": 147
  },
  "Cooper Flagg": {
   "gp": 17,
   "tpm": 27,
   "xtpm": 29.71,
   "fgm": 139,
   "xfgm": 135.77,
   "fga": 291
  },
  "Corey Kispert": {
   "gp": 10,
   "tpm": 20,
   "xtpm": 14.49,
   "fgm": 33,
   "xfgm": 25.05,
   "fga": 59
  },
  "Craig Porter Jr.": {
   "gp": 13,
   "tpm": 1,
   "xtpm": 2.15,
   "fgm": 10,
   "xfgm": 11.54,
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
   "xtpm": 7.09,
   "fgm": 13,
   "xfgm": 11.26,
   "fga": 28
  },
  "Dailyn Swain": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 1.76,
   "fgm": 2,
   "xfgm": 4.18,
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
   "xfgm": 3.6,
   "fga": 9
  },
  "Damian Lillard": {
   "gp": 18,
   "tpm": 56,
   "xtpm": 57.93,
   "fgm": 106,
   "xfgm": 114.21,
   "fga": 271
  },
  "Daniel Gafford": {
   "gp": 18,
   "tpm": 2,
   "xtpm": 0.72,
   "fgm": 66,
   "xfgm": 55.19,
   "fga": 95
  },
  "Daniss Jenkins": {
   "gp": 17,
   "tpm": 35,
   "xtpm": 30.96,
   "fgm": 85,
   "xfgm": 85.41,
   "fga": 197
  },
  "Danny Wolf": {
   "gp": 12,
   "tpm": 25,
   "xtpm": 17.82,
   "fgm": 38,
   "xfgm": 38.28,
   "fga": 85
  },
  "Darius Acuff Jr.": {
   "gp": 18,
   "tpm": 53,
   "xtpm": 59.29,
   "fgm": 161,
   "xfgm": 170.78,
   "fga": 401
  },
  "Darius Garland": {
   "gp": 17,
   "tpm": 43,
   "xtpm": 42.35,
   "fgm": 122,
   "xfgm": 111.72,
   "fga": 262
  },
  "Darryn Peterson": {
   "gp": 19,
   "tpm": 35,
   "xtpm": 39.97,
   "fgm": 107,
   "xfgm": 113.81,
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
   "gp": 17,
   "tpm": 42,
   "xtpm": 33.68,
   "fgm": 106,
   "xfgm": 97.19,
   "fga": 208
  },
  "Day'Ron Sharpe": {
   "gp": 17,
   "tpm": 6,
   "xtpm": 6.83,
   "fgm": 59,
   "xfgm": 63.22,
   "fga": 109
  },
  "De'Aaron Fox": {
   "gp": 16,
   "tpm": 13,
   "xtpm": 17.45,
   "fgm": 64,
   "xfgm": 62.8,
   "fga": 136
  },
  "De'Andre Hunter": {
   "gp": 16,
   "tpm": 35,
   "xtpm": 30.53,
   "fgm": 84,
   "xfgm": 75.73,
   "fga": 178
  },
  "De'Anthony Melton": {
   "gp": 18,
   "tpm": 40,
   "xtpm": 35.17,
   "fgm": 54,
   "xfgm": 57.18,
   "fga": 142
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
   "xtpm": 6.85,
   "fgm": 50,
   "xfgm": 54.69,
   "fga": 125
  },
  "Dean Wade": {
   "gp": 15,
   "tpm": 14,
   "xtpm": 14.2,
   "fgm": 24,
   "xfgm": 25.83,
   "fga": 59
  },
  "Deandre Ayton": {
   "gp": 19,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 31,
   "xfgm": 29.24,
   "fga": 49
  },
  "Dejounte Murray": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 9.65,
   "fgm": 44,
   "xfgm": 50.55,
   "fga": 102
  },
  "Deni Avdija": {
   "gp": 16,
   "tpm": 39,
   "xtpm": 31.83,
   "fgm": 134,
   "xfgm": 127.26,
   "fga": 258
  },
  "Dennis Schröder": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 12.42,
   "fgm": 32,
   "xfgm": 41.8,
   "fga": 88
  },
  "Derik Queen": {
   "gp": 19,
   "tpm": 10,
   "xtpm": 9.6,
   "fgm": 79,
   "xfgm": 85.19,
   "fga": 162
  },
  "Derrick Jones Jr.": {
   "gp": 16,
   "tpm": 26,
   "xtpm": 21.7,
   "fgm": 56,
   "xfgm": 54.83,
   "fga": 117
  },
  "Derrick White": {
   "gp": 17,
   "tpm": 30,
   "xtpm": 36.48,
   "fgm": 79,
   "xfgm": 83.55,
   "fga": 198
  },
  "Desmond Bane": {
   "gp": 16,
   "tpm": 67,
   "xtpm": 54.97,
   "fgm": 100,
   "xfgm": 90.88,
   "fga": 227
  },
  "Devin Booker": {
   "gp": 17,
   "tpm": 32,
   "xtpm": 34.59,
   "fgm": 140,
   "xfgm": 129.82,
   "fga": 303
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
   "gp": 17,
   "tpm": 28,
   "xtpm": 29.14,
   "fgm": 69,
   "xfgm": 74.16,
   "fga": 173
  },
  "Dillon Brooks": {
   "gp": 17,
   "tpm": 34,
   "xtpm": 28.67,
   "fgm": 96,
   "xfgm": 94.11,
   "fga": 214
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
   "gp": 17,
   "tpm": 5,
   "xtpm": 4.95,
   "fgm": 100,
   "xfgm": 81.48,
   "fga": 152
  },
  "Dominick Barlow": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 0.72,
   "fgm": 12,
   "xfgm": 11.92,
   "fga": 20
  },
  "Donovan Clingan": {
   "gp": 18,
   "tpm": 17,
   "xtpm": 14.47,
   "fgm": 84,
   "xfgm": 77.2,
   "fga": 143
  },
  "Donovan Mitchell": {
   "gp": 18,
   "tpm": 45,
   "xtpm": 46.28,
   "fgm": 161,
   "xfgm": 150.02,
   "fga": 325
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
   "gp": 15,
   "tpm": 9,
   "xtpm": 9.22,
   "fgm": 22,
   "xfgm": 23.85,
   "fga": 53
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
   "xtpm": 38.62,
   "fgm": 63,
   "xfgm": 54.96,
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
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 16,
   "xfgm": 16.85,
   "fga": 30
  },
  "Dylan Harper": {
   "gp": 15,
   "tpm": 17,
   "xtpm": 19.1,
   "fgm": 107,
   "xfgm": 104.75,
   "fga": 212
  },
  "Dyson Daniels": {
   "gp": 17,
   "tpm": 3,
   "xtpm": 8.87,
   "fgm": 71,
   "xfgm": 78.3,
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
   "gp": 11,
   "tpm": 20,
   "xtpm": 24.4,
   "fgm": 38,
   "xfgm": 46.72,
   "fga": 107
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
   "gp": 18,
   "tpm": 20,
   "xtpm": 21.93,
   "fgm": 30,
   "xfgm": 33.38,
   "fga": 87
  },
  "Evan Mobley": {
   "gp": 12,
   "tpm": 23,
   "xtpm": 16.98,
   "fgm": 76,
   "xfgm": 69.03,
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
   "xtpm": 30.18,
   "fgm": 156,
   "xfgm": 158.5,
   "fga": 333
  },
  "Fred VanVleet": {
   "gp": 16,
   "tpm": 45,
   "xtpm": 41.34,
   "fgm": 78,
   "xfgm": 70.11,
   "fga": 180
  },
  "GG Jackson": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 11.04,
   "fgm": 27,
   "xfgm": 33.44,
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
   "gp": 16,
   "tpm": 7,
   "xtpm": 9.26,
   "fgm": 35,
   "xfgm": 33.23,
   "fga": 68
  },
  "Gary Trent Jr.": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 9.58,
   "fgm": 13,
   "xfgm": 16.25,
   "fga": 40
  },
  "Georges Niang": {
   "gp": 18,
   "tpm": 23,
   "xtpm": 25.32,
   "fgm": 49,
   "xfgm": 50.05,
   "fga": 120
  },
  "Giannis Antetokounmpo": {
   "gp": 16,
   "tpm": 8,
   "xtpm": 11.99,
   "fgm": 173,
   "xfgm": 155.06,
   "fga": 287
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
   "gp": 16,
   "tpm": 12,
   "xtpm": 8.91,
   "fgm": 42,
   "xfgm": 42.45,
   "fga": 82
  },
  "Graham Ike": {
   "gp": 13,
   "tpm": 5,
   "xtpm": 3.9,
   "fgm": 20,
   "xfgm": 22.78,
   "fga": 44
  },
  "Grant Nelson": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 1.1,
   "fga": 2
  },
  "Grant Williams": {
   "gp": 4,
   "tpm": 7,
   "xtpm": 7.89,
   "fgm": 12,
   "xfgm": 12.19,
   "fga": 30
  },
  "Grayson Allen": {
   "gp": 13,
   "tpm": 44,
   "xtpm": 33.92,
   "fgm": 56,
   "xfgm": 48.4,
   "fga": 125
  },
  "Gui Santos": {
   "gp": 15,
   "tpm": 11,
   "xtpm": 12.1,
   "fgm": 39,
   "xfgm": 41.78,
   "fga": 87
  },
  "Hannes Steinbach": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 9,
   "xfgm": 11.67,
   "fga": 19
  },
  "Harrison Barnes": {
   "gp": 17,
   "tpm": 17,
   "xtpm": 17.07,
   "fgm": 30,
   "xfgm": 33.13,
   "fga": 76
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
   "xtpm": 22.38,
   "fgm": 48,
   "xfgm": 62.48,
   "fga": 135
  },
  "Hugo González": {
   "gp": 18,
   "tpm": 10,
   "xtpm": 14.0,
   "fgm": 25,
   "xfgm": 27.65,
   "fga": 61
  },
  "Immanuel Quickley": {
   "gp": 15,
   "tpm": 39,
   "xtpm": 41.11,
   "fgm": 89,
   "xfgm": 89.03,
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
   "gp": 18,
   "tpm": 19,
   "xtpm": 21.87,
   "fgm": 44,
   "xfgm": 50.07,
   "fga": 105
  },
  "Isaiah Collier": {
   "gp": 16,
   "tpm": 7,
   "xtpm": 6.01,
   "fgm": 35,
   "xfgm": 37.23,
   "fga": 79
  },
  "Isaiah Crawford": {
   "gp": 12,
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
   "xfgm": 4.86,
   "fga": 11
  },
  "Isaiah Hartenstein": {
   "gp": 19,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 68,
   "xfgm": 69.62,
   "fga": 126
  },
  "Isaiah Jackson": {
   "gp": 16,
   "tpm": 2,
   "xtpm": 2.12,
   "fgm": 50,
   "xfgm": 49.23,
   "fga": 86
  },
  "Isaiah Joe": {
   "gp": 7,
   "tpm": 15,
   "xtpm": 15.57,
   "fgm": 27,
   "xfgm": 24.56,
   "fga": 62
  },
  "Isaiah Stewart": {
   "gp": 14,
   "tpm": 12,
   "xtpm": 11.73,
   "fgm": 60,
   "xfgm": 50.82,
   "fga": 101
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
   "xtpm": 4.95,
   "fgm": 26,
   "xfgm": 22.04,
   "fga": 48
  },
  "Ja'Kobe Walter": {
   "gp": 17,
   "tpm": 42,
   "xtpm": 43.51,
   "fgm": 68,
   "xfgm": 71.31,
   "fga": 174
  },
  "Ja'Kobi Gillespie": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.47,
   "fgm": 3,
   "xfgm": 3.79,
   "fga": 9
  },
  "Jabari Smith Jr.": {
   "gp": 19,
   "tpm": 44,
   "xtpm": 38.97,
   "fgm": 104,
   "xfgm": 96.98,
   "fga": 219
  },
  "Jabari Walker": {
   "gp": 15,
   "tpm": 9,
   "xtpm": 9.26,
   "fgm": 40,
   "xfgm": 38.79,
   "fga": 72
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
   "xtpm": 3.88,
   "fgm": 2,
   "xfgm": 4.72,
   "fga": 13
  },
  "Jaden McDaniels": {
   "gp": 19,
   "tpm": 33,
   "xtpm": 29.16,
   "fgm": 146,
   "xfgm": 124.93,
   "fga": 258
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
   "gp": 9,
   "tpm": 1,
   "xtpm": 1.78,
   "fgm": 2,
   "xfgm": 5.05,
   "fga": 11
  },
  "Jaime Jaquez Jr.": {
   "gp": 19,
   "tpm": 33,
   "xtpm": 29.66,
   "fgm": 99,
   "xfgm": 102.83,
   "fga": 214
  },
  "Jake LaRavia": {
   "gp": 17,
   "tpm": 16,
   "xtpm": 13.22,
   "fgm": 40,
   "xfgm": 40.67,
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
   "gp": 18,
   "tpm": 53,
   "xtpm": 47.38,
   "fgm": 161,
   "xfgm": 165.44,
   "fga": 377
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
   "gp": 17,
   "tpm": 21,
   "xtpm": 25.18,
   "fgm": 86,
   "xfgm": 96.49,
   "fga": 203
  },
  "Jalen Johnson": {
   "gp": 14,
   "tpm": 12,
   "xtpm": 20.13,
   "fgm": 97,
   "xfgm": 109.25,
   "fga": 217
  },
  "Jalen Pickett": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 1.06,
   "fgm": 4,
   "xfgm": 3.4,
   "fga": 8
  },
  "Jalen Slawson": {
   "gp": 16,
   "tpm": 7,
   "xtpm": 6.74,
   "fgm": 26,
   "xfgm": 25.54,
   "fga": 50
  },
  "Jalen Smith": {
   "gp": 15,
   "tpm": 31,
   "xtpm": 27.41,
   "fgm": 81,
   "xfgm": 71.58,
   "fga": 148
  },
  "Jalen Suggs": {
   "gp": 9,
   "tpm": 11,
   "xtpm": 14.24,
   "fgm": 28,
   "xfgm": 35.96,
   "fga": 83
  },
  "Jalen Williams": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.17,
   "fgm": 15,
   "xfgm": 19.14,
   "fga": 39
  },
  "Jamal Cain": {
   "gp": 15,
   "tpm": 11,
   "xtpm": 13.92,
   "fgm": 25,
   "xfgm": 24.62,
   "fga": 62
  },
  "Jamal Murray": {
   "gp": 16,
   "tpm": 52,
   "xtpm": 40.34,
   "fgm": 135,
   "xfgm": 118.04,
   "fga": 270
  },
  "Jamal Shead": {
   "gp": 17,
   "tpm": 18,
   "xtpm": 20.92,
   "fgm": 46,
   "xfgm": 53.66,
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
   "gp": 18,
   "tpm": 50,
   "xtpm": 46.32,
   "fgm": 96,
   "xfgm": 103.78,
   "fga": 238
  },
  "James Wiseman": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 9,
   "xfgm": 10.98,
   "fga": 18
  },
  "Jamison Battle": {
   "gp": 17,
   "tpm": 36,
   "xtpm": 29.18,
   "fgm": 55,
   "xfgm": 46.93,
   "fga": 113
  },
  "Jarace Walker": {
   "gp": 17,
   "tpm": 14,
   "xtpm": 18.8,
   "fgm": 33,
   "xfgm": 44.21,
   "fga": 98
  },
  "Jared McCain": {
   "gp": 19,
   "tpm": 42,
   "xtpm": 46.57,
   "fgm": 96,
   "xfgm": 102.86,
   "fga": 236
  },
  "Jaren Jackson Jr.": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 4.97,
   "fgm": 22,
   "xfgm": 20.11,
   "fga": 44
  },
  "Jaron Pierre Jr.": {
   "gp": 7,
   "tpm": 9,
   "xtpm": 9.2,
   "fgm": 16,
   "xfgm": 20.79,
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
   "gp": 16,
   "tpm": 3,
   "xtpm": 1.76,
   "fgm": 80,
   "xfgm": 76.08,
   "fga": 127
  },
  "Jase Richardson": {
   "gp": 13,
   "tpm": 8,
   "xtpm": 12.86,
   "fgm": 26,
   "xfgm": 35.62,
   "fga": 81
  },
  "Javon Small": {
   "gp": 11,
   "tpm": 14,
   "xtpm": 14.14,
   "fgm": 32,
   "xfgm": 38.26,
   "fga": 86
  },
  "Javonte Green": {
   "gp": 17,
   "tpm": 22,
   "xtpm": 22.75,
   "fgm": 37,
   "xfgm": 35.49,
   "fga": 85
  },
  "Jaxson Hayes": {
   "gp": 15,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 53,
   "xfgm": 46.28,
   "fga": 82
  },
  "Jay Huff": {
   "gp": 15,
   "tpm": 13,
   "xtpm": 14.59,
   "fgm": 36,
   "xfgm": 33.08,
   "fga": 71
  },
  "Jaylen Brown": {
   "gp": 16,
   "tpm": 28,
   "xtpm": 26.3,
   "fgm": 127,
   "xfgm": 123.02,
   "fga": 259
  },
  "Jaylen Clark": {
   "gp": 12,
   "tpm": 9,
   "xtpm": 9.04,
   "fgm": 18,
   "xfgm": 18.45,
   "fga": 43
  },
  "Jaylen Wells": {
   "gp": 19,
   "tpm": 39,
   "xtpm": 31.81,
   "fgm": 77,
   "xfgm": 65.14,
   "fga": 151
  },
  "Jaylin Sellers": {
   "gp": 7,
   "tpm": 8,
   "xtpm": 6.76,
   "fgm": 12,
   "xfgm": 11.75,
   "fga": 28
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
   "gp": 10,
   "tpm": 15,
   "xtpm": 17.84,
   "fgm": 30,
   "xfgm": 34.9,
   "fga": 79
  },
  "Jayson Kent": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 7.48,
   "fgm": 13,
   "xfgm": 14.71,
   "fga": 33
  },
  "Jayson Tatum": {
   "gp": 16,
   "tpm": 47,
   "xtpm": 48.42,
   "fgm": 139,
   "xfgm": 144.66,
   "fga": 321
  },
  "Jerami Grant": {
   "gp": 15,
   "tpm": 26,
   "xtpm": 20.49,
   "fgm": 55,
   "xfgm": 53.49,
   "fga": 117
  },
  "Jeremiah Fears": {
   "gp": 19,
   "tpm": 23,
   "xtpm": 28.3,
   "fgm": 117,
   "xfgm": 133.78,
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
   "xtpm": 3.19,
   "fgm": 5,
   "xfgm": 4.7,
   "fga": 12
  },
  "Jevon Carter": {
   "gp": 13,
   "tpm": 18,
   "xtpm": 18.13,
   "fgm": 21,
   "xfgm": 22.42,
   "fga": 60
  },
  "Joan Beringer": {
   "gp": 19,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 32,
   "xfgm": 34.58,
   "fga": 55
  },
  "Jock Landale": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 7.85,
   "fgm": 22,
   "xfgm": 23.45,
   "fga": 48
  },
  "Joel Embiid": {
   "gp": 14,
   "tpm": 6,
   "xtpm": 14.83,
   "fgm": 88,
   "xfgm": 105.48,
   "fga": 220
  },
  "John Collins": {
   "gp": 17,
   "tpm": 25,
   "xtpm": 19.27,
   "fgm": 69,
   "xfgm": 69.44,
   "fga": 142
  },
  "John Tonje": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.84,
   "fgm": 4,
   "xfgm": 5.7,
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
   "gp": 18,
   "tpm": 27,
   "xtpm": 25.68,
   "fgm": 83,
   "xfgm": 91.51,
   "fga": 185
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
   "xfgm": 24.91,
   "fga": 50
  },
  "Jordan Goodwin": {
   "gp": 13,
   "tpm": 24,
   "xtpm": 21.7,
   "fgm": 39,
   "xfgm": 37.83,
   "fga": 91
  },
  "Jordan Hawkins": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 12.45,
   "fgm": 22,
   "xfgm": 20.19,
   "fga": 51
  },
  "Jordan McLaughlin": {
   "gp": 13,
   "tpm": 3,
   "xtpm": 5.01,
   "fgm": 15,
   "xfgm": 18.42,
   "fga": 38
  },
  "Jordan Poole": {
   "gp": 13,
   "tpm": 23,
   "xtpm": 20.49,
   "fgm": 42,
   "xfgm": 43.42,
   "fga": 98
  },
  "Jordan Walsh": {
   "gp": 18,
   "tpm": 12,
   "xtpm": 16.13,
   "fgm": 28,
   "xfgm": 32.8,
   "fga": 72
  },
  "Jose Alvarado": {
   "gp": 11,
   "tpm": 12,
   "xtpm": 9.93,
   "fgm": 21,
   "xfgm": 19.15,
   "fga": 46
  },
  "Josh Dix": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 8.17,
   "fgm": 12,
   "xfgm": 16.68,
   "fga": 38
  },
  "Josh Giddey": {
   "gp": 18,
   "tpm": 19,
   "xtpm": 23.68,
   "fgm": 74,
   "xfgm": 84.2,
   "fga": 175
  },
  "Josh Green": {
   "gp": 17,
   "tpm": 15,
   "xtpm": 13.98,
   "fgm": 29,
   "xfgm": 27.06,
   "fga": 64
  },
  "Josh Hart": {
   "gp": 15,
   "tpm": 18,
   "xtpm": 23.81,
   "fgm": 42,
   "xfgm": 53.58,
   "fga": 120
  },
  "Josh Minott": {
   "gp": 11,
   "tpm": 5,
   "xtpm": 7.81,
   "fgm": 11,
   "xfgm": 12.22,
   "fga": 29
  },
  "Josh Okogie": {
   "gp": 18,
   "tpm": 11,
   "xtpm": 13.66,
   "fgm": 21,
   "xfgm": 29.22,
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
   "gp": 18,
   "tpm": 45,
   "xtpm": 36.95,
   "fgm": 85,
   "xfgm": 80.78,
   "fga": 184
  },
  "Julian Champagnie": {
   "gp": 19,
   "tpm": 54,
   "xtpm": 47.62,
   "fgm": 71,
   "xfgm": 63.42,
   "fga": 162
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
   "gp": 17,
   "tpm": 28,
   "xtpm": 28.36,
   "fgm": 126,
   "xfgm": 125.23,
   "fga": 257
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
   "xtpm": 1.78,
   "fgm": 5,
   "xfgm": 4.17,
   "fga": 9
  },
  "Karim López": {
   "gp": 7,
   "tpm": 1,
   "xtpm": 1.78,
   "fgm": 3,
   "xfgm": 3.1,
   "fga": 7
  },
  "Karl-Anthony Towns": {
   "gp": 17,
   "tpm": 35,
   "xtpm": 29.65,
   "fgm": 130,
   "xfgm": 122.68,
   "fga": 240
  },
  "Karlo Matković": {
   "gp": 18,
   "tpm": 19,
   "xtpm": 19.07,
   "fgm": 42,
   "xfgm": 39.33,
   "fga": 85
  },
  "Kasparas Jakučionis": {
   "gp": 18,
   "tpm": 17,
   "xtpm": 21.27,
   "fgm": 48,
   "xfgm": 49.86,
   "fga": 107
  },
  "Kawhi Leonard": {
   "gp": 2,
   "tpm": 4,
   "xtpm": 4.94,
   "fgm": 12,
   "xfgm": 17.2,
   "fga": 37
  },
  "Keaton Wagler": {
   "gp": 17,
   "tpm": 24,
   "xtpm": 25.46,
   "fgm": 47,
   "xfgm": 58.12,
   "fga": 137
  },
  "Keegan Murray": {
   "gp": 11,
   "tpm": 12,
   "xtpm": 17.11,
   "fgm": 53,
   "xfgm": 53.56,
   "fga": 124
  },
  "Kel'el Ware": {
   "gp": 19,
   "tpm": 14,
   "xtpm": 17.35,
   "fgm": 66,
   "xfgm": 78.26,
   "fga": 147
  },
  "Keldon Johnson": {
   "gp": 19,
   "tpm": 7,
   "xtpm": 12.14,
   "fgm": 60,
   "xfgm": 68.67,
   "fga": 132
  },
  "Kelly Oubre Jr.": {
   "gp": 16,
   "tpm": 20,
   "xtpm": 24.26,
   "fgm": 74,
   "xfgm": 72.36,
   "fga": 152
  },
  "Kenrich Williams": {
   "gp": 19,
   "tpm": 29,
   "xtpm": 23.38,
   "fgm": 60,
   "xfgm": 57.19,
   "fga": 125
  },
  "Kentavious Caldwell-Pope": {
   "gp": 19,
   "tpm": 26,
   "xtpm": 22.03,
   "fgm": 37,
   "xfgm": 33.06,
   "fga": 84
  },
  "Keon Ellis": {
   "gp": 16,
   "tpm": 16,
   "xtpm": 14.86,
   "fgm": 26,
   "xfgm": 26.45,
   "fga": 63
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
   "gp": 19,
   "tpm": 31,
   "xtpm": 27.71,
   "fgm": 130,
   "xfgm": 111.01,
   "fga": 256
  },
  "Kevin Huerter": {
   "gp": 17,
   "tpm": 25,
   "xtpm": 27.32,
   "fgm": 65,
   "xfgm": 64.46,
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
   "xtpm": 41.7,
   "fgm": 117,
   "xfgm": 115.12,
   "fga": 274
  },
  "Khaman Maluach": {
   "gp": 17,
   "tpm": 2,
   "xtpm": 2.51,
   "fgm": 54,
   "xfgm": 48.93,
   "fga": 83
  },
  "Khris Middleton": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 6.81,
   "fgm": 16,
   "xfgm": 14.6,
   "fga": 36
  },
  "Kingston Flemings": {
   "gp": 13,
   "tpm": 10,
   "xtpm": 8.85,
   "fgm": 41,
   "xfgm": 40.51,
   "fga": 84
  },
  "Klay Thompson": {
   "gp": 16,
   "tpm": 61,
   "xtpm": 51.89,
   "fgm": 79,
   "xfgm": 69.24,
   "fga": 184
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
   "xtpm": 4.27,
   "fgm": 12,
   "xfgm": 11.52,
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
   "gp": 17,
   "tpm": 23,
   "xtpm": 23.03,
   "fgm": 42,
   "xfgm": 44.96,
   "fga": 106
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
   "gp": 17,
   "tpm": 12,
   "xtpm": 13.51,
   "fgm": 47,
   "xfgm": 48.71,
   "fga": 98
  },
  "Kris Murray": {
   "gp": 15,
   "tpm": 5,
   "xtpm": 10.6,
   "fgm": 17,
   "xfgm": 20.3,
   "fga": 44
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
   "xtpm": 4.27,
   "fgm": 20,
   "xfgm": 21.85,
   "fga": 44
  },
  "Kyle Kuzma": {
   "gp": 18,
   "tpm": 32,
   "xtpm": 33.41,
   "fgm": 84,
   "xfgm": 88.23,
   "fga": 187
  },
  "Kyrie Irving": {
   "gp": 15,
   "tpm": 48,
   "xtpm": 46.47,
   "fgm": 116,
   "xfgm": 110.41,
   "fga": 261
  },
  "Kyshawn George": {
   "gp": 19,
   "tpm": 50,
   "xtpm": 43.56,
   "fgm": 128,
   "xfgm": 122.0,
   "fga": 270
  },
  "LJ Cryer": {
   "gp": 14,
   "tpm": 22,
   "xtpm": 19.82,
   "fgm": 30,
   "xfgm": 30.18,
   "fga": 78
  },
  "LaMelo Ball": {
   "gp": 19,
   "tpm": 63,
   "xtpm": 61.95,
   "fgm": 118,
   "xfgm": 121.05,
   "fga": 290
  },
  "Labaron Philon Jr.": {
   "gp": 13,
   "tpm": 5,
   "xtpm": 4.58,
   "fgm": 13,
   "xfgm": 11.59,
   "fga": 28
  },
  "Landry Shamet": {
   "gp": 18,
   "tpm": 45,
   "xtpm": 34.74,
   "fgm": 70,
   "xfgm": 59.01,
   "fga": 139
  },
  "Larry Nance Jr.": {
   "gp": 17,
   "tpm": 15,
   "xtpm": 13.29,
   "fgm": 26,
   "xfgm": 23.57,
   "fga": 54
  },
  "Lauri Markkanen": {
   "gp": 8,
   "tpm": 29,
   "xtpm": 25.83,
   "fgm": 44,
   "xfgm": 46.43,
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
   "gp": 15,
   "tpm": 18,
   "xtpm": 20.15,
   "fgm": 96,
   "xfgm": 99.2,
   "fga": 198
  },
  "Leaky Black": {
   "gp": 14,
   "tpm": 17,
   "xtpm": 15.35,
   "fgm": 20,
   "xfgm": 20.81,
   "fga": 53
  },
  "Leonard Miller": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 10.32,
   "fgm": 26,
   "xfgm": 29.42,
   "fga": 59
  },
  "Liam McNeeley": {
   "gp": 10,
   "tpm": 4,
   "xtpm": 6.38,
   "fgm": 9,
   "xfgm": 14.01,
   "fga": 32
  },
  "Luguentz Dort": {
   "gp": 17,
   "tpm": 27,
   "xtpm": 28.65,
   "fgm": 53,
   "xfgm": 64.85,
   "fga": 141
  },
  "Luka Dončić": {
   "gp": 16,
   "tpm": 77,
   "xtpm": 74.54,
   "fgm": 184,
   "xfgm": 164.2,
   "fga": 400
  },
  "Luka Garza": {
   "gp": 18,
   "tpm": 16,
   "xtpm": 14.96,
   "fgm": 35,
   "xfgm": 36.51,
   "fga": 80
  },
  "Luke Kennard": {
   "gp": 16,
   "tpm": 29,
   "xtpm": 24.85,
   "fgm": 48,
   "xfgm": 36.46,
   "fga": 95
  },
  "Luke Kornet": {
   "gp": 19,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 28,
   "xfgm": 31.68,
   "fga": 51
  },
  "Malachi Smith": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 1,
   "xfgm": 1.8,
   "fga": 4
  },
  "Malevy Leons": {
   "gp": 11,
   "tpm": 1,
   "xtpm": 1.43,
   "fgm": 3,
   "xfgm": 6.92,
   "fga": 14
  },
  "Malik Dia": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 2,
   "xfgm": 2.61,
   "fga": 6
  },
  "Malik Monk": {
   "gp": 17,
   "tpm": 18,
   "xtpm": 20.88,
   "fgm": 44,
   "xfgm": 48.92,
   "fga": 116
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
   "xtpm": 11.79,
   "fgm": 23,
   "xfgm": 21.58,
   "fga": 54
  },
  "Marcus Smart": {
   "gp": 13,
   "tpm": 18,
   "xtpm": 19.62,
   "fgm": 31,
   "xfgm": 31.96,
   "fga": 80
  },
  "Mario Hezonja": {
   "gp": 19,
   "tpm": 21,
   "xtpm": 22.83,
   "fgm": 66,
   "xfgm": 66.27,
   "fga": 138
  },
  "Marvin Bagley III": {
   "gp": 16,
   "tpm": 3,
   "xtpm": 3.21,
   "fgm": 36,
   "xfgm": 36.99,
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
   "gp": 18,
   "tpm": 38,
   "xtpm": 37.36,
   "fgm": 91,
   "xfgm": 91.97,
   "fga": 197
  },
  "Matisse Thybulle": {
   "gp": 18,
   "tpm": 32,
   "xtpm": 28.12,
   "fgm": 49,
   "xfgm": 43.5,
   "fga": 107
  },
  "Max Christie": {
   "gp": 15,
   "tpm": 17,
   "xtpm": 19.64,
   "fgm": 29,
   "xfgm": 32.35,
   "fga": 78
  },
  "Max Strus": {
   "gp": 11,
   "tpm": 21,
   "xtpm": 21.62,
   "fgm": 29,
   "xfgm": 33.69,
   "fga": 82
  },
  "Meleek Thomas": {
   "gp": 16,
   "tpm": 37,
   "xtpm": 31.64,
   "fgm": 78,
   "xfgm": 72.85,
   "fga": 165
  },
  "Micah Peavy": {
   "gp": 13,
   "tpm": 7,
   "xtpm": 8.59,
   "fgm": 19,
   "xfgm": 25.42,
   "fga": 55
  },
  "Micah Potter": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 2.47,
   "fgm": 7,
   "xfgm": 6.19,
   "fga": 15
  },
  "Michael Porter Jr.": {
   "gp": 16,
   "tpm": 47,
   "xtpm": 45.3,
   "fgm": 99,
   "xfgm": 98.27,
   "fga": 226
  },
  "Mikal Bridges": {
   "gp": 18,
   "tpm": 20,
   "xtpm": 22.92,
   "fgm": 63,
   "xfgm": 65.77,
   "fga": 149
  },
  "Mike Conley": {
   "gp": 6,
   "tpm": 10,
   "xtpm": 4.29,
   "fgm": 12,
   "xfgm": 7.1,
   "fga": 18
  },
  "Mikel Brown Jr.": {
   "gp": 13,
   "tpm": 26,
   "xtpm": 26.83,
   "fgm": 49,
   "xfgm": 58.91,
   "fga": 138
  },
  "Miles Bridges": {
   "gp": 17,
   "tpm": 27,
   "xtpm": 32.0,
   "fgm": 90,
   "xfgm": 90.13,
   "fga": 194
  },
  "Miles McBride": {
   "gp": 16,
   "tpm": 29,
   "xtpm": 24.55,
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
   "gp": 15,
   "tpm": 7,
   "xtpm": 4.62,
   "fgm": 54,
   "xfgm": 45.58,
   "fga": 79
  },
  "Mohamed Diawara": {
   "gp": 8,
   "tpm": 3,
   "xtpm": 5.7,
   "fgm": 7,
   "xfgm": 9.44,
   "fga": 22
  },
  "Morez Johnson Jr.": {
   "gp": 17,
   "tpm": 5,
   "xtpm": 7.4,
   "fgm": 42,
   "xfgm": 49.7,
   "fga": 97
  },
  "Moritz Wagner": {
   "gp": 17,
   "tpm": 20,
   "xtpm": 11.36,
   "fgm": 56,
   "xfgm": 49.24,
   "fga": 93
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
   "gp": 15,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 60,
   "xfgm": 58.99,
   "fga": 95
  },
  "Myles Turner": {
   "gp": 17,
   "tpm": 25,
   "xtpm": 27.32,
   "fgm": 49,
   "xfgm": 53.89,
   "fga": 127
  },
  "Myron Gardner": {
   "gp": 11,
   "tpm": 5,
   "xtpm": 6.07,
   "fgm": 10,
   "xfgm": 10.04,
   "fga": 23
  },
  "Naji Marshall": {
   "gp": 15,
   "tpm": 15,
   "xtpm": 18.88,
   "fgm": 61,
   "xfgm": 63.85,
   "fga": 140
  },
  "Nate Ament": {
   "gp": 17,
   "tpm": 17,
   "xtpm": 17.13,
   "fgm": 46,
   "xfgm": 47.99,
   "fga": 101
  },
  "Naz Reid": {
   "gp": 17,
   "tpm": 42,
   "xtpm": 43.63,
   "fgm": 113,
   "xfgm": 131.44,
   "fga": 296
  },
  "Neemias Queta": {
   "gp": 17,
   "tpm": 5,
   "xtpm": 2.54,
   "fgm": 68,
   "xfgm": 65.19,
   "fga": 113
  },
  "Nic Claxton": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 29,
   "xfgm": 27.28,
   "fga": 47
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
   "xtpm": 60.35,
   "fgm": 121,
   "xfgm": 129.17,
   "fga": 292
  },
  "Nikola Jokić": {
   "gp": 16,
   "tpm": 20,
   "xtpm": 23.64,
   "fgm": 152,
   "xfgm": 132.81,
   "fga": 287
  },
  "Nikola Jović": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 7.15,
   "fgm": 11,
   "xfgm": 15.25,
   "fga": 34
  },
  "Nikola Topić": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 4,
   "xfgm": 4.34,
   "fga": 10
  },
  "Nikola Vučević": {
   "gp": 14,
   "tpm": 8,
   "xtpm": 9.58,
   "fgm": 20,
   "xfgm": 19.45,
   "fga": 47
  },
  "Nique Clifford": {
   "gp": 17,
   "tpm": 4,
   "xtpm": 7.44,
   "fgm": 22,
   "xfgm": 26.39,
   "fga": 57
  },
  "Noa Essengue": {
   "gp": 17,
   "tpm": 10,
   "xtpm": 11.41,
   "fgm": 30,
   "xfgm": 34.03,
   "fga": 69
  },
  "Noah Clowney": {
   "gp": 17,
   "tpm": 19,
   "xtpm": 21.81,
   "fgm": 44,
   "xfgm": 44.23,
   "fga": 101
  },
  "Nolan Traore": {
   "gp": 14,
   "tpm": 21,
   "xtpm": 18.47,
   "fgm": 69,
   "xfgm": 61.37,
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
   "xtpm": 31.08,
   "fgm": 86,
   "xfgm": 86.93,
   "fga": 193
  },
  "OG Anunoby": {
   "gp": 15,
   "tpm": 30,
   "xtpm": 33.22,
   "fgm": 71,
   "xfgm": 83.3,
   "fga": 177
  },
  "Obi Toppin": {
   "gp": 15,
   "tpm": 21,
   "xtpm": 23.96,
   "fgm": 66,
   "xfgm": 65.58,
   "fga": 135
  },
  "Olivier-Maxence Prosper": {
   "gp": 13,
   "tpm": 5,
   "xtpm": 7.59,
   "fgm": 29,
   "xfgm": 31.27,
   "fga": 60
  },
  "Onyeka Okongwu": {
   "gp": 17,
   "tpm": 31,
   "xtpm": 32.94,
   "fgm": 94,
   "xfgm": 89.25,
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
   "gp": 15,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 41,
   "xfgm": 39.34,
   "fga": 68
  },
  "Ousmane Dieng": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 7.11,
   "fgm": 14,
   "xfgm": 14.8,
   "fga": 34
  },
  "P.J. Washington": {
   "gp": 16,
   "tpm": 35,
   "xtpm": 34.65,
   "fgm": 75,
   "xfgm": 76.42,
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
   "gp": 7,
   "tpm": 4,
   "xtpm": 3.58,
   "fgm": 12,
   "xfgm": 11.66,
   "fga": 24
  },
  "Paolo Banchero": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 2.13,
   "fgm": 16,
   "xfgm": 10.79,
   "fga": 23
  },
  "Pascal Siakam": {
   "gp": 17,
   "tpm": 30,
   "xtpm": 28.75,
   "fgm": 145,
   "xfgm": 135.98,
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
   "gp": 11,
   "tpm": 11,
   "xtpm": 10.65,
   "fgm": 27,
   "xfgm": 29.04,
   "fga": 61
  },
  "Paul George": {
   "gp": 15,
   "tpm": 52,
   "xtpm": 43.2,
   "fgm": 110,
   "xfgm": 101.59,
   "fga": 241
  },
  "Paul Reed": {
   "gp": 17,
   "tpm": 5,
   "xtpm": 3.56,
   "fgm": 80,
   "xfgm": 76.75,
   "fga": 140
  },
  "Payton Pritchard": {
   "gp": 18,
   "tpm": 41,
   "xtpm": 42.38,
   "fgm": 80,
   "xfgm": 82.68,
   "fga": 204
  },
  "Pelle Larsson": {
   "gp": 14,
   "tpm": 20,
   "xtpm": 15.92,
   "fgm": 49,
   "xfgm": 46.67,
   "fga": 100
  },
  "Pete Nance": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 2.12,
   "fgm": 4,
   "xfgm": 4.31,
   "fga": 10
  },
  "Peyton Watson": {
   "gp": 15,
   "tpm": 18,
   "xtpm": 22.14,
   "fgm": 59,
   "xfgm": 70.73,
   "fga": 148
  },
  "Precious Achiuwa": {
   "gp": 15,
   "tpm": 5,
   "xtpm": 4.97,
   "fgm": 60,
   "xfgm": 55.2,
   "fga": 109
  },
  "Quentin Grimes": {
   "gp": 16,
   "tpm": 29,
   "xtpm": 25.48,
   "fgm": 62,
   "xfgm": 60.88,
   "fga": 134
  },
  "Quenton Jackson": {
   "gp": 18,
   "tpm": 19,
   "xtpm": 20.56,
   "fgm": 58,
   "xfgm": 58.44,
   "fga": 125
  },
  "Quinten Post": {
   "gp": 13,
   "tpm": 6,
   "xtpm": 8.87,
   "fgm": 21,
   "xfgm": 20.02,
   "fga": 45
  },
  "RJ Barrett": {
   "gp": 14,
   "tpm": 21,
   "xtpm": 26.2,
   "fgm": 113,
   "xfgm": 117.99,
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
   "xfgm": 8.6,
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
   "gp": 16,
   "tpm": 33,
   "xtpm": 34.33,
   "fgm": 51,
   "xfgm": 53.04,
   "fga": 134
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
   "gp": 15,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 39,
   "xfgm": 35.46,
   "fga": 57
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
   "xtpm": 7.18,
   "fgm": 11,
   "xfgm": 11.58,
   "fga": 28
  },
  "Ronald Holland II": {
   "gp": 14,
   "tpm": 10,
   "xtpm": 11.08,
   "fgm": 27,
   "xfgm": 37.0,
   "fga": 76
  },
  "Royce O'Neale": {
   "gp": 17,
   "tpm": 24,
   "xtpm": 25.5,
   "fgm": 29,
   "xfgm": 29.47,
   "fga": 78
  },
  "Rudy Gobert": {
   "gp": 18,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 50,
   "xfgm": 62.07,
   "fga": 100
  },
  "Rui Hachimura": {
   "gp": 15,
   "tpm": 32,
   "xtpm": 28.38,
   "fgm": 77,
   "xfgm": 80.29,
   "fga": 178
  },
  "Ryan Conwell": {
   "gp": 15,
   "tpm": 22,
   "xtpm": 22.05,
   "fgm": 35,
   "xfgm": 36.93,
   "fga": 89
  },
  "Ryan Dunn": {
   "gp": 17,
   "tpm": 12,
   "xtpm": 10.1,
   "fgm": 28,
   "xfgm": 28.58,
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
   "gp": 17,
   "tpm": 22,
   "xtpm": 25.87,
   "fgm": 63,
   "xfgm": 76.59,
   "fga": 166
  },
  "Saddiq Bey": {
   "gp": 19,
   "tpm": 43,
   "xtpm": 42.32,
   "fgm": 105,
   "xfgm": 107.13,
   "fga": 245
  },
  "Sam Hauser": {
   "gp": 18,
   "tpm": 42,
   "xtpm": 34.84,
   "fgm": 51,
   "xfgm": 42.86,
   "fga": 114
  },
  "Sam Merrill": {
   "gp": 13,
   "tpm": 20,
   "xtpm": 23.11,
   "fgm": 31,
   "xfgm": 34.07,
   "fga": 84
  },
  "Sandro Mamukelashvili": {
   "gp": 18,
   "tpm": 21,
   "xtpm": 23.83,
   "fgm": 60,
   "xfgm": 65.13,
   "fga": 141
  },
  "Santi Aldama": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 9.61,
   "fgm": 19,
   "xfgm": 20.17,
   "fga": 46
  },
  "Scoot Henderson": {
   "gp": 18,
   "tpm": 21,
   "xtpm": 28.8,
   "fgm": 57,
   "xfgm": 71.13,
   "fga": 164
  },
  "Scottie Barnes": {
   "gp": 12,
   "tpm": 11,
   "xtpm": 14.27,
   "fgm": 121,
   "xfgm": 116.29,
   "fga": 245
  },
  "Scotty Pippen Jr.": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 3.19,
   "fgm": 11,
   "xfgm": 11.08,
   "fga": 26
  },
  "Sergio de Larrea": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 1.76,
   "fgm": 9,
   "xfgm": 7.61,
   "fga": 18
  },
  "Shai Gilgeous-Alexander": {
   "gp": 18,
   "tpm": 43,
   "xtpm": 42.01,
   "fgm": 206,
   "xfgm": 192.29,
   "fga": 429
  },
  "Sidy Cissoko": {
   "gp": 18,
   "tpm": 28,
   "xtpm": 26.14,
   "fgm": 48,
   "xfgm": 46.39,
   "fga": 106
  },
  "Simone Fontecchio": {
   "gp": 11,
   "tpm": 7,
   "xtpm": 8.91,
   "fgm": 14,
   "xfgm": 15.48,
   "fga": 36
  },
  "Sion James": {
   "gp": 17,
   "tpm": 18,
   "xtpm": 25.76,
   "fgm": 35,
   "xfgm": 45.13,
   "fga": 105
  },
  "Spencer Jones": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 6.11,
   "fgm": 13,
   "xfgm": 12.27,
   "fga": 27
  },
  "Stephen Curry": {
   "gp": 10,
   "tpm": 43,
   "xtpm": 33.25,
   "fgm": 80,
   "xfgm": 65.58,
   "fga": 160
  },
  "Stephon Castle": {
   "gp": 19,
   "tpm": 43,
   "xtpm": 40.36,
   "fgm": 115,
   "xfgm": 121.82,
   "fga": 270
  },
  "Steven Adams": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 11,
   "xfgm": 12.55,
   "fga": 21
  },
  "Svi Mykhailiuk": {
   "gp": 19,
   "tpm": 29,
   "xtpm": 28.43,
   "fgm": 43,
   "xfgm": 46.21,
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
   "gp": 19,
   "tpm": 20,
   "xtpm": 23.31,
   "fgm": 75,
   "xfgm": 83.21,
   "fga": 168
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
   "gp": 14,
   "tpm": 10,
   "xtpm": 9.63,
   "fgm": 39,
   "xfgm": 35.15,
   "fga": 71
  },
  "Terance Mann": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 4.31,
   "fgm": 4,
   "xfgm": 7.31,
   "fga": 18
  },
  "Terrence Shannon Jr": {
   "gp": 16,
   "tpm": 22,
   "xtpm": 21.05,
   "fgm": 65,
   "xfgm": 67.98,
   "fga": 142
  },
  "Thomas Bryant": {
   "gp": 13,
   "tpm": 14,
   "xtpm": 11.71,
   "fgm": 34,
   "xfgm": 31.02,
   "fga": 65
  },
  "Tidjane Salaün": {
   "gp": 16,
   "tpm": 15,
   "xtpm": 15.66,
   "fgm": 27,
   "xfgm": 27.77,
   "fga": 64
  },
  "Tim Hardaway Jr.": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 14.16,
   "fgm": 15,
   "xfgm": 23.6,
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
   "gp": 18,
   "tpm": 43,
   "xtpm": 42.04,
   "fgm": 72,
   "xfgm": 70.63,
   "fga": 168
  },
  "Trae Young": {
   "gp": 19,
   "tpm": 39,
   "xtpm": 42.09,
   "fgm": 86,
   "xfgm": 97.19,
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
   "xtpm": 27.65,
   "fgm": 52,
   "xfgm": 56.94,
   "fga": 141
  },
  "Tre Jones": {
   "gp": 18,
   "tpm": 6,
   "xtpm": 8.17,
   "fgm": 70,
   "xfgm": 80.25,
   "fga": 145
  },
  "Tre Mann": {
   "gp": 9,
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
   "gp": 16,
   "tpm": 11,
   "xtpm": 10.71,
   "fgm": 39,
   "xfgm": 34.05,
   "fga": 68
  },
  "Trey Lyles": {
   "gp": 19,
   "tpm": 21,
   "xtpm": 21.48,
   "fgm": 41,
   "xfgm": 35.9,
   "fga": 85
  },
  "Trey Murphy III": {
   "gp": 11,
   "tpm": 24,
   "xtpm": 23.68,
   "fgm": 56,
   "xfgm": 56.09,
   "fga": 125
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
   "gp": 15,
   "tpm": 49,
   "xtpm": 43.06,
   "fgm": 78,
   "xfgm": 66.91,
   "fga": 165
  },
  "Ty Jerome": {
   "gp": 14,
   "tpm": 39,
   "xtpm": 37.8,
   "fgm": 122,
   "xfgm": 104.84,
   "fga": 256
  },
  "Tyler Herro": {
   "gp": 18,
   "tpm": 53,
   "xtpm": 47.75,
   "fgm": 137,
   "xfgm": 133.47,
   "fga": 296
  },
  "Tyler Kolek": {
   "gp": 16,
   "tpm": 8,
   "xtpm": 11.34,
   "fgm": 22,
   "xfgm": 24.96,
   "fga": 57
  },
  "Tyler Nickel": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.71,
   "fgm": 2,
   "xfgm": 1.37,
   "fga": 3
  },
  "Tyrese Haliburton": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 9.61,
   "fgm": 32,
   "xfgm": 26.85,
   "fga": 62
  },
  "Tyrese Maxey": {
   "gp": 18,
   "tpm": 46,
   "xtpm": 43.48,
   "fgm": 156,
   "xfgm": 147.11,
   "fga": 314
  },
  "Tyrese Proctor": {
   "gp": 18,
   "tpm": 28,
   "xtpm": 23.4,
   "fgm": 58,
   "xfgm": 52.04,
   "fga": 120
  },
  "Tyus Jones": {
   "gp": 16,
   "tpm": 4,
   "xtpm": 6.35,
   "fgm": 12,
   "xfgm": 16.12,
   "fga": 38
  },
  "VJ Edgecombe": {
   "gp": 18,
   "tpm": 29,
   "xtpm": 31.62,
   "fgm": 96,
   "xfgm": 98.77,
   "fga": 208
  },
  "Victor Wembanyama": {
   "gp": 18,
   "tpm": 38,
   "xtpm": 42.36,
   "fgm": 208,
   "xfgm": 189.9,
   "fga": 383
  },
  "Vít Krejčí": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 5.31,
   "fgm": 6,
   "xfgm": 7.91,
   "fga": 20
  },
  "Walker Kessler": {
   "gp": 17,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 99,
   "xfgm": 92.42,
   "fga": 148
  },
  "Walter Clayton Jr.": {
   "gp": 17,
   "tpm": 23,
   "xtpm": 20.88,
   "fgm": 44,
   "xfgm": 42.33,
   "fga": 100
  },
  "Wendell Carter Jr.": {
   "gp": 17,
   "tpm": 17,
   "xtpm": 15.76,
   "fgm": 75,
   "xfgm": 67.41,
   "fga": 137
  },
  "Will Richard": {
   "gp": 17,
   "tpm": 18,
   "xtpm": 16.76,
   "fgm": 44,
   "xfgm": 42.5,
   "fga": 91
  },
  "Will Riley": {
   "gp": 16,
   "tpm": 5,
   "xtpm": 5.72,
   "fgm": 16,
   "xfgm": 15.99,
   "fga": 34
  },
  "Yang Hansen": {
   "gp": 11,
   "tpm": 5,
   "xtpm": 3.53,
   "fgm": 10,
   "xfgm": 10.12,
   "fga": 22
  },
  "Yanic Konan Niederhäuser": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.71,
   "fgm": 6,
   "xfgm": 7.28,
   "fga": 13
  },
  "Yaxel Lendeborg": {
   "gp": 18,
   "tpm": 33,
   "xtpm": 32.9,
   "fgm": 118,
   "xfgm": 121.2,
   "fga": 259
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
   "xtpm": 22.31,
   "fgm": 67,
   "xfgm": 69.89,
   "fga": 144
  },
  "Zach Collins": {
   "gp": 12,
   "tpm": 4,
   "xtpm": 6.4,
   "fgm": 17,
   "xfgm": 23.28,
   "fga": 47
  },
  "Zach Edey": {
   "gp": 15,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 52,
   "xfgm": 48.3,
   "fga": 85
  },
  "Zach LaVine": {
   "gp": 16,
   "tpm": 42,
   "xtpm": 37.88,
   "fgm": 112,
   "xfgm": 97.89,
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
   "xtpm": 20.23,
   "fgm": 49,
   "xfgm": 40.86,
   "fga": 91
  },
  "Zion Williamson": {
   "gp": 17,
   "tpm": 6,
   "xtpm": 4.6,
   "fgm": 134,
   "xfgm": 136.79,
   "fga": 230
  },
  "Zuby Ejiofor": {
   "gp": 11,
   "tpm": 6,
   "xtpm": 5.66,
   "fgm": 20,
   "xfgm": 21.75,
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
