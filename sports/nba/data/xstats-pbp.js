// ============================================================
//  x3PM / xFGM der laufenden Saison aus Play-by-Play
//  Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data (nicht unser Projekt, frei veröffentlichte Daten)
//  Methode: Josh Lloyd (joshlloydfantasy.com/research/xstats-method)
//  Erzeugt von scripts/xstats-pbp.py am 2026-11-16 · Saison 2026-27 · Stand 2026-11-15
//  Wird von scripts/build-live-projections.js gelesen (3PM, FG%).
//  META {"season": "2026-27", "assetUpdated": "Mon, 16 Nov 2026 12:29:41 GMT"}
// ============================================================
const XSTATS_PBP = {
 "meta": {
  "season": "2026-27",
  "through": "2026-11-15",
  "players": 471,
  "games": 197,
  "shots": 34685,
  "assetUpdated": "Mon, 16 Nov 2026 12:29:41 GMT",
  "zoneRates": {
   "C3": 0.3709,
   "AB3": 0.3519,
   "RA": 0.6601,
   "PAINT": 0.4397,
   "MID": 0.4091
  },
  "source": "Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data"
 },
 "players": {
  "AJ Dybantsa": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 13.1,
   "fgm": 56,
   "xfgm": 68.29,
   "fga": 140
  },
  "AJ Green": {
   "gp": 14,
   "tpm": 23,
   "xtpm": 20.25,
   "fgm": 26,
   "xfgm": 23.46,
   "fga": 64
  },
  "AJ Johnson": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 3.87,
   "fga": 7
  },
  "Aaron Gordon": {
   "gp": 11,
   "tpm": 12,
   "xtpm": 15.62,
   "fgm": 39,
   "xfgm": 45.98,
   "fga": 98
  },
  "Aaron Nesmith": {
   "gp": 12,
   "tpm": 20,
   "xtpm": 24.29,
   "fgm": 49,
   "xfgm": 54.62,
   "fga": 124
  },
  "Aaron Wiggins": {
   "gp": 14,
   "tpm": 38,
   "xtpm": 34.33,
   "fgm": 75,
   "xfgm": 68.42,
   "fga": 164
  },
  "Ace Bailey": {
   "gp": 14,
   "tpm": 22,
   "xtpm": 29.11,
   "fgm": 77,
   "xfgm": 71.63,
   "fga": 165
  },
  "Aday Mara": {
   "gp": 14,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 57,
   "xfgm": 52.21,
   "fga": 90
  },
  "Adem Bona": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 8,
   "xfgm": 12.06,
   "fga": 21
  },
  "Adou Thiero": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 4,
   "xfgm": 6.31,
   "fga": 10
  },
  "Ajay Mitchell": {
   "gp": 12,
   "tpm": 10,
   "xtpm": 13.51,
   "fgm": 87,
   "xfgm": 82.24,
   "fga": 169
  },
  "Al Horford": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 11.67,
   "fgm": 18,
   "xfgm": 19.53,
   "fga": 48
  },
  "Alex Caruso": {
   "gp": 11,
   "tpm": 17,
   "xtpm": 13.78,
   "fgm": 25,
   "xfgm": 23.18,
   "fga": 57
  },
  "Alex Karaban": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 2.83,
   "fgm": 2,
   "xfgm": 3.49,
   "fga": 9
  },
  "Alex Morales": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 2.85,
   "fgm": 7,
   "xfgm": 7.25,
   "fga": 15
  },
  "Alex Sarr": {
   "gp": 13,
   "tpm": 14,
   "xtpm": 16.26,
   "fgm": 62,
   "xfgm": 55.33,
   "fga": 113
  },
  "Alijah Martin": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 8.17,
   "fgm": 26,
   "xfgm": 19.61,
   "fga": 41
  },
  "Allen Graves": {
   "gp": 13,
   "tpm": 7,
   "xtpm": 9.26,
   "fgm": 21,
   "xfgm": 24.63,
   "fga": 52
  },
  "Alperen Sengun": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 9.19,
   "fgm": 103,
   "xfgm": 98.66,
   "fga": 188
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
   "gp": 14,
   "tpm": 5,
   "xtpm": 4.98,
   "fgm": 84,
   "xfgm": 87.26,
   "fga": 157
  },
  "Andre Drummond": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 21,
   "xfgm": 31.15,
   "fga": 50
  },
  "Andrew Nembhard": {
   "gp": 11,
   "tpm": 25,
   "xtpm": 21.88,
   "fgm": 62,
   "xfgm": 60.35,
   "fga": 139
  },
  "Andrew Wiggins": {
   "gp": 13,
   "tpm": 16,
   "xtpm": 17.73,
   "fgm": 43,
   "xfgm": 44.35,
   "fga": 103
  },
  "Anfernee Simons": {
   "gp": 14,
   "tpm": 33,
   "xtpm": 27.84,
   "fgm": 50,
   "xfgm": 47.86,
   "fga": 116
  },
  "Anthony Black": {
   "gp": 9,
   "tpm": 18,
   "xtpm": 15.93,
   "fgm": 48,
   "xfgm": 46.0,
   "fga": 107
  },
  "Anthony Davis": {
   "gp": 12,
   "tpm": 9,
   "xtpm": 9.89,
   "fgm": 113,
   "xfgm": 109.65,
   "fga": 219
  },
  "Anthony Edwards": {
   "gp": 4,
   "tpm": 18,
   "xtpm": 15.91,
   "fgm": 50,
   "xfgm": 46.56,
   "fga": 104
  },
  "Anthony Gill": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 3.65,
   "fga": 6
  },
  "Asa Newell": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 2.85,
   "fgm": 7,
   "xfgm": 7.25,
   "fga": 15
  },
  "Ausar Thompson": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 1.41,
   "fgm": 47,
   "xfgm": 51.12,
   "fga": 93
  },
  "Austin Reaves": {
   "gp": 12,
   "tpm": 27,
   "xtpm": 23.32,
   "fgm": 97,
   "xfgm": 82.93,
   "fga": 189
  },
  "Ayo Dosunmu": {
   "gp": 13,
   "tpm": 23,
   "xtpm": 18.12,
   "fgm": 94,
   "xfgm": 90.59,
   "fga": 177
  },
  "Baba Miller": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 2.13,
   "fgm": 14,
   "xfgm": 12.91,
   "fga": 25
  },
  "Bam Adebayo": {
   "gp": 13,
   "tpm": 9,
   "xtpm": 14.21,
   "fgm": 89,
   "xfgm": 80.52,
   "fga": 167
  },
  "Baylor Scheierman": {
   "gp": 13,
   "tpm": 19,
   "xtpm": 14.62,
   "fgm": 29,
   "xfgm": 25.46,
   "fga": 63
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
   "gp": 12,
   "tpm": 5,
   "xtpm": 9.19,
   "fgm": 23,
   "xfgm": 30.53,
   "fga": 64
  },
  "Bennett Stirtz": {
   "gp": 14,
   "tpm": 21,
   "xtpm": 17.36,
   "fgm": 34,
   "xfgm": 32.69,
   "fga": 77
  },
  "Bilal Coulibaly": {
   "gp": 13,
   "tpm": 5,
   "xtpm": 11.82,
   "fgm": 34,
   "xfgm": 38.13,
   "fga": 76
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
   "gp": 13,
   "tpm": 16,
   "xtpm": 18.1,
   "fgm": 32,
   "xfgm": 38.25,
   "fga": 91
  },
  "Bogdan Bogdanović": {
   "gp": 14,
   "tpm": 17,
   "xtpm": 11.75,
   "fgm": 27,
   "xfgm": 19.48,
   "fga": 50
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
   "gp": 13,
   "tpm": 24,
   "xtpm": 20.47,
   "fgm": 43,
   "xfgm": 38.51,
   "fga": 92
  },
  "Braden Smith": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 2.5,
   "fgm": 13,
   "xfgm": 13.6,
   "fga": 29
  },
  "Branden Carlson": {
   "gp": 7,
   "tpm": 1,
   "xtpm": 2.15,
   "fgm": 6,
   "xfgm": 5.42,
   "fga": 12
  },
  "Brandin Podziemski": {
   "gp": 11,
   "tpm": 31,
   "xtpm": 27.62,
   "fgm": 64,
   "xfgm": 58.1,
   "fga": 139
  },
  "Brandon Miller": {
   "gp": 11,
   "tpm": 28,
   "xtpm": 38.92,
   "fgm": 74,
   "xfgm": 91.08,
   "fga": 215
  },
  "Brandon Williams": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 8.13,
   "fgm": 33,
   "xfgm": 37.04,
   "fga": 80
  },
  "Brayden Burries": {
   "gp": 14,
   "tpm": 13,
   "xtpm": 17.36,
   "fgm": 44,
   "xfgm": 48.54,
   "fga": 107
  },
  "Brice Sensabaugh": {
   "gp": 14,
   "tpm": 19,
   "xtpm": 18.71,
   "fgm": 42,
   "xfgm": 42.43,
   "fga": 104
  },
  "Bronny James": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 1.8,
   "fga": 4
  },
  "Brook Lopez": {
   "gp": 12,
   "tpm": 17,
   "xtpm": 14.82,
   "fgm": 67,
   "xfgm": 57.62,
   "fga": 124
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
   "gp": 9,
   "tpm": 2,
   "xtpm": 1.41,
   "fgm": 5,
   "xfgm": 4.42,
   "fga": 11
  },
  "Bryce Hopkins": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 1.78,
   "fgm": 14,
   "xfgm": 11.84,
   "fga": 22
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
   "gp": 14,
   "tpm": 20,
   "xtpm": 15.97,
   "fgm": 24,
   "xfgm": 25.18,
   "fga": 64
  },
  "Buddy Hield": {
   "gp": 10,
   "tpm": 14,
   "xtpm": 11.98,
   "fgm": 29,
   "xfgm": 25.78,
   "fga": 57
  },
  "CJ McCollum": {
   "gp": 14,
   "tpm": 25,
   "xtpm": 25.01,
   "fgm": 74,
   "xfgm": 75.32,
   "fga": 171
  },
  "Cade Cunningham": {
   "gp": 12,
   "tpm": 25,
   "xtpm": 27.53,
   "fgm": 104,
   "xfgm": 100.82,
   "fga": 218
  },
  "Caleb Love": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Caleb Martin": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 7.19,
   "fgm": 22,
   "xfgm": 18.63,
   "fga": 41
  },
  "Caleb Wilson": {
   "gp": 10,
   "tpm": 23,
   "xtpm": 25.18,
   "fgm": 68,
   "xfgm": 75.28,
   "fga": 162
  },
  "Cam Christie": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 1.43,
   "fgm": 2,
   "xfgm": 5.39,
   "fga": 11
  },
  "Cam Spencer": {
   "gp": 13,
   "tpm": 26,
   "xtpm": 15.91,
   "fgm": 46,
   "xfgm": 33.51,
   "fga": 83
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
   "gp": 13,
   "tpm": 21,
   "xtpm": 25.79,
   "fgm": 67,
   "xfgm": 80.15,
   "fga": 174
  },
  "Cameron Carr": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 1.76,
   "fgm": 1,
   "xfgm": 2.42,
   "fga": 6
  },
  "Cameron Johnson": {
   "gp": 8,
   "tpm": 17,
   "xtpm": 15.27,
   "fgm": 35,
   "xfgm": 32.27,
   "fga": 75
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
   "gp": 13,
   "tpm": 12,
   "xtpm": 12.12,
   "fgm": 17,
   "xfgm": 20.45,
   "fga": 48
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
   "gp": 12,
   "tpm": 27,
   "xtpm": 21.9,
   "fgm": 59,
   "xfgm": 57.9,
   "fga": 130
  },
  "Chaney Johnson": {
   "gp": 12,
   "tpm": 7,
   "xtpm": 8.58,
   "fgm": 17,
   "xfgm": 23.0,
   "fga": 50
  },
  "Charles Bassey": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 35,
   "xfgm": 29.96,
   "fga": 52
  },
  "Chaz Lanier": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 1.78,
   "fgm": 5,
   "xfgm": 2.88,
   "fga": 7
  },
  "Chet Holmgren": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.13,
   "fgm": 11,
   "xfgm": 14.64,
   "fga": 27
  },
  "Chris Cenac Jr.": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.43,
   "fgm": 6,
   "xfgm": 4.73,
   "fga": 9
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
   "gp": 6,
   "tpm": 8,
   "xtpm": 8.15,
   "fgm": 10,
   "xfgm": 10.35,
   "fga": 27
  },
  "Christian Anderson": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 14.15,
   "fgm": 23,
   "xfgm": 25.75,
   "fga": 63
  },
  "Christian Braun": {
   "gp": 11,
   "tpm": 17,
   "xtpm": 17.86,
   "fgm": 54,
   "xfgm": 55.05,
   "fga": 113
  },
  "Clint Capela": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 9,
   "xfgm": 8.8,
   "fga": 14
  },
  "Coby White": {
   "gp": 6,
   "tpm": 6,
   "xtpm": 11.98,
   "fgm": 24,
   "xfgm": 30.59,
   "fga": 67
  },
  "Cody Williams": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 1.01,
   "fga": 2
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
   "gp": 12,
   "tpm": 27,
   "xtpm": 27.9,
   "fgm": 39,
   "xfgm": 40.88,
   "fga": 105
  },
  "Collin Murray-Boyles": {
   "gp": 12,
   "tpm": 7,
   "xtpm": 8.52,
   "fgm": 45,
   "xfgm": 50.22,
   "fga": 97
  },
  "Collin Sexton": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 16.01,
   "fgm": 49,
   "xfgm": 52.02,
   "fga": 110
  },
  "Cooper Flagg": {
   "gp": 13,
   "tpm": 17,
   "xtpm": 21.91,
   "fgm": 106,
   "xfgm": 104.98,
   "fga": 226
  },
  "Corey Kispert": {
   "gp": 7,
   "tpm": 13,
   "xtpm": 8.45,
   "fgm": 21,
   "xfgm": 14.61,
   "fga": 35
  },
  "Craig Porter Jr.": {
   "gp": 11,
   "tpm": 1,
   "xtpm": 1.78,
   "fgm": 9,
   "xfgm": 8.38,
   "fga": 17
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
   "gp": 10,
   "tpm": 7,
   "xtpm": 6.72,
   "fgm": 12,
   "xfgm": 10.02,
   "fga": 25
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
   "gp": 3,
   "tpm": 3,
   "xtpm": 2.15,
   "fgm": 5,
   "xfgm": 3.25,
   "fga": 8
  },
  "Damian Lillard": {
   "gp": 12,
   "tpm": 37,
   "xtpm": 37.34,
   "fgm": 70,
   "xfgm": 68.93,
   "fga": 168
  },
  "Daniel Gafford": {
   "gp": 14,
   "tpm": 2,
   "xtpm": 0.72,
   "fgm": 48,
   "xfgm": 40.04,
   "fga": 68
  },
  "Daniss Jenkins": {
   "gp": 12,
   "tpm": 25,
   "xtpm": 20.95,
   "fgm": 52,
   "xfgm": 50.65,
   "fga": 118
  },
  "Danny Wolf": {
   "gp": 7,
   "tpm": 15,
   "xtpm": 11.38,
   "fgm": 23,
   "xfgm": 23.69,
   "fga": 53
  },
  "Darius Acuff Jr.": {
   "gp": 13,
   "tpm": 40,
   "xtpm": 43.34,
   "fgm": 121,
   "xfgm": 127.19,
   "fga": 295
  },
  "Darius Garland": {
   "gp": 12,
   "tpm": 30,
   "xtpm": 28.9,
   "fgm": 89,
   "xfgm": 80.72,
   "fga": 187
  },
  "Darryn Peterson": {
   "gp": 14,
   "tpm": 32,
   "xtpm": 31.77,
   "fgm": 85,
   "xfgm": 88.7,
   "fga": 210
  },
  "David Jones Garcia": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 1,
   "xfgm": 3.78,
   "fga": 8
  },
  "Davion Mitchell": {
   "gp": 13,
   "tpm": 31,
   "xtpm": 26.18,
   "fgm": 79,
   "xfgm": 71.74,
   "fga": 158
  },
  "Day'Ron Sharpe": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 5.76,
   "fgm": 39,
   "xfgm": 42.06,
   "fga": 75
  },
  "De'Aaron Fox": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 14.21,
   "fgm": 58,
   "xfgm": 54.81,
   "fga": 117
  },
  "De'Andre Hunter": {
   "gp": 11,
   "tpm": 23,
   "xtpm": 22.03,
   "fgm": 52,
   "xfgm": 49.27,
   "fga": 118
  },
  "De'Anthony Melton": {
   "gp": 13,
   "tpm": 29,
   "xtpm": 24.45,
   "fgm": 40,
   "xfgm": 41.33,
   "fga": 101
  },
  "DeAndre Jordan": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 6,
   "xfgm": 4.62,
   "fga": 7
  },
  "DeMar DeRozan": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 5.02,
   "fgm": 35,
   "xfgm": 36.62,
   "fga": 84
  },
  "Dean Wade": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 10.3,
   "fgm": 19,
   "xfgm": 17.53,
   "fga": 41
  },
  "Deandre Ayton": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 29,
   "xfgm": 25.93,
   "fga": 43
  },
  "Dejounte Murray": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 9.64,
   "fgm": 44,
   "xfgm": 50.59,
   "fga": 102
  },
  "Deni Avdija": {
   "gp": 12,
   "tpm": 24,
   "xtpm": 23.64,
   "fgm": 93,
   "xfgm": 89.72,
   "fga": 186
  },
  "Dennis Schröder": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 12.39,
   "fgm": 32,
   "xfgm": 41.81,
   "fga": 88
  },
  "Derik Queen": {
   "gp": 14,
   "tpm": 6,
   "xtpm": 5.71,
   "fgm": 54,
   "xfgm": 59.19,
   "fga": 114
  },
  "Derrick Jones Jr.": {
   "gp": 11,
   "tpm": 24,
   "xtpm": 16.34,
   "fgm": 47,
   "xfgm": 41.14,
   "fga": 88
  },
  "Derrick White": {
   "gp": 13,
   "tpm": 25,
   "xtpm": 25.49,
   "fgm": 62,
   "xfgm": 59.33,
   "fga": 139
  },
  "Desmond Bane": {
   "gp": 11,
   "tpm": 45,
   "xtpm": 38.96,
   "fgm": 65,
   "xfgm": 64.58,
   "fga": 161
  },
  "Devin Booker": {
   "gp": 12,
   "tpm": 24,
   "xtpm": 23.97,
   "fgm": 102,
   "xfgm": 91.62,
   "fga": 212
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
   "gp": 12,
   "tpm": 16,
   "xtpm": 18.1,
   "fgm": 45,
   "xfgm": 48.68,
   "fga": 113
  },
  "Dillon Brooks": {
   "gp": 12,
   "tpm": 22,
   "xtpm": 18.36,
   "fgm": 61,
   "xfgm": 61.19,
   "fga": 139
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
   "gp": 12,
   "tpm": 3,
   "xtpm": 3.52,
   "fgm": 67,
   "xfgm": 54.83,
   "fga": 104
  },
  "Donovan Clingan": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 10.58,
   "fgm": 53,
   "xfgm": 49.48,
   "fga": 95
  },
  "Donovan Mitchell": {
   "gp": 13,
   "tpm": 37,
   "xtpm": 34.17,
   "fgm": 103,
   "xfgm": 96.5,
   "fga": 215
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
   "gp": 5,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 4,
   "xfgm": 2.24,
   "fga": 5
  },
  "Draymond Green": {
   "gp": 11,
   "tpm": 3,
   "xtpm": 4.59,
   "fgm": 15,
   "xfgm": 18.01,
   "fga": 37
  },
  "Dru Smith": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 2.83,
   "fgm": 4,
   "xfgm": 5.03,
   "fga": 12
  },
  "Duncan Robinson": {
   "gp": 12,
   "tpm": 47,
   "xtpm": 38.55,
   "fgm": 63,
   "xfgm": 54.92,
   "fga": 140
  },
  "Duop Reath": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 2.83,
   "fgm": 7,
   "xfgm": 5.47,
   "fga": 12
  },
  "Dylan Cardwell": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 14,
   "xfgm": 13.99,
   "fga": 25
  },
  "Dylan Harper": {
   "gp": 14,
   "tpm": 17,
   "xtpm": 17.65,
   "fgm": 99,
   "xfgm": 97.48,
   "fga": 198
  },
  "Dyson Daniels": {
   "gp": 14,
   "tpm": 2,
   "xtpm": 6.04,
   "fgm": 59,
   "xfgm": 64.08,
   "fga": 122
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
   "gp": 6,
   "tpm": 13,
   "xtpm": 11.98,
   "fgm": 17,
   "xfgm": 18.33,
   "fga": 45
  },
  "Elijah Harkless": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.44,
   "fga": 1
  },
  "Emanuel Sharp": {
   "gp": 13,
   "tpm": 14,
   "xtpm": 13.41,
   "fgm": 23,
   "xfgm": 22.93,
   "fga": 59
  },
  "Evan Mobley": {
   "gp": 12,
   "tpm": 23,
   "xtpm": 16.95,
   "fgm": 76,
   "xfgm": 68.99,
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
   "gp": 12,
   "tpm": 17,
   "xtpm": 22.71,
   "fgm": 107,
   "xfgm": 107.52,
   "fga": 227
  },
  "Fred VanVleet": {
   "gp": 11,
   "tpm": 32,
   "xtpm": 28.6,
   "fgm": 52,
   "xfgm": 45.14,
   "fga": 118
  },
  "GG Jackson": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 11.02,
   "fgm": 27,
   "xfgm": 33.43,
   "fga": 71
  },
  "Gary Payton II": {
   "gp": 11,
   "tpm": 4,
   "xtpm": 7.08,
   "fgm": 23,
   "xfgm": 24.23,
   "fga": 50
  },
  "Gary Trent Jr.": {
   "gp": 6,
   "tpm": 9,
   "xtpm": 8.15,
   "fgm": 13,
   "xfgm": 12.49,
   "fga": 31
  },
  "Georges Niang": {
   "gp": 13,
   "tpm": 17,
   "xtpm": 16.79,
   "fgm": 39,
   "xfgm": 35.89,
   "fga": 85
  },
  "Giannis Antetokounmpo": {
   "gp": 13,
   "tpm": 8,
   "xtpm": 10.91,
   "fgm": 147,
   "xfgm": 131.79,
   "fga": 247
  },
  "Goga Bitadze": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 15,
   "xfgm": 14.3,
   "fga": 23
  },
  "Gradey Dick": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 8.19,
   "fgm": 37,
   "xfgm": 33.84,
   "fga": 67
  },
  "Graham Ike": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 3.17,
   "fgm": 18,
   "xfgm": 19.85,
   "fga": 38
  },
  "Grant Williams": {
   "gp": 2,
   "tpm": 5,
   "xtpm": 3.89,
   "fgm": 7,
   "xfgm": 5.62,
   "fga": 14
  },
  "Grayson Allen": {
   "gp": 13,
   "tpm": 44,
   "xtpm": 33.86,
   "fgm": 56,
   "xfgm": 48.38,
   "fga": 125
  },
  "Gui Santos": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 6.37,
   "fgm": 19,
   "xfgm": 22.87,
   "fga": 47
  },
  "Hannes Steinbach": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 9.9,
   "fga": 16
  },
  "Harrison Barnes": {
   "gp": 12,
   "tpm": 14,
   "xtpm": 12.43,
   "fgm": 20,
   "xfgm": 19.25,
   "fga": 47
  },
  "Herbert Jones": {
   "gp": 14,
   "tpm": 10,
   "xtpm": 14.23,
   "fgm": 35,
   "xfgm": 44.71,
   "fga": 94
  },
  "Hugo González": {
   "gp": 13,
   "tpm": 7,
   "xtpm": 9.32,
   "fgm": 20,
   "xfgm": 20.76,
   "fga": 44
  },
  "Immanuel Quickley": {
   "gp": 11,
   "tpm": 28,
   "xtpm": 30.05,
   "fgm": 63,
   "xfgm": 65.08,
   "fga": 158
  },
  "Isaac Jones": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 1,
   "xfgm": 1.69,
   "fga": 3
  },
  "Isaac Okoro": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 10.36,
   "fgm": 22,
   "xfgm": 28.62,
   "fga": 58
  },
  "Isaiah Collier": {
   "gp": 13,
   "tpm": 6,
   "xtpm": 5.65,
   "fgm": 30,
   "xfgm": 32.14,
   "fga": 68
  },
  "Isaiah Crawford": {
   "gp": 9,
   "tpm": 4,
   "xtpm": 3.19,
   "fgm": 7,
   "xfgm": 5.17,
   "fga": 12
  },
  "Isaiah Evans": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 1.8,
   "fgm": 1,
   "xfgm": 2.46,
   "fga": 6
  },
  "Isaiah Hartenstein": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 51,
   "xfgm": 51.19,
   "fga": 94
  },
  "Isaiah Jackson": {
   "gp": 11,
   "tpm": 2,
   "xtpm": 1.41,
   "fgm": 38,
   "xfgm": 37.55,
   "fga": 66
  },
  "Isaiah Joe": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 4.58,
   "fgm": 7,
   "xfgm": 7.34,
   "fga": 19
  },
  "Isaiah Stewart": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 7.8,
   "fgm": 43,
   "xfgm": 35.05,
   "fga": 69
  },
  "Ivica Zubac": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 39,
   "xfgm": 41.36,
   "fga": 70
  },
  "Ja Morant": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 4.95,
   "fgm": 26,
   "xfgm": 22.07,
   "fga": 48
  },
  "Ja'Kobe Walter": {
   "gp": 13,
   "tpm": 28,
   "xtpm": 30.65,
   "fgm": 45,
   "xfgm": 49.03,
   "fga": 120
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
   "gp": 14,
   "tpm": 34,
   "xtpm": 31.1,
   "fgm": 76,
   "xfgm": 73.69,
   "fga": 169
  },
  "Jabari Walker": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 5.69,
   "fgm": 23,
   "xfgm": 23.73,
   "fga": 44
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
   "gp": 7,
   "tpm": 2,
   "xtpm": 3.87,
   "fgm": 2,
   "xfgm": 4.72,
   "fga": 13
  },
  "Jaden McDaniels": {
   "gp": 13,
   "tpm": 18,
   "xtpm": 20.48,
   "fgm": 91,
   "xfgm": 82.82,
   "fga": 173
  },
  "Jae'Sean Tate": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 3.84,
   "fga": 7
  },
  "Jahmai Mashack": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.88,
   "fga": 2
  },
  "Jaime Jaquez Jr.": {
   "gp": 14,
   "tpm": 28,
   "xtpm": 22.55,
   "fgm": 79,
   "xfgm": 80.88,
   "fga": 167
  },
  "Jake LaRavia": {
   "gp": 13,
   "tpm": 14,
   "xtpm": 10.38,
   "fgm": 28,
   "xfgm": 29.46,
   "fga": 60
  },
  "Jakob Poeltl": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 42,
   "xfgm": 38.02,
   "fga": 67
  },
  "Jalen Brunson": {
   "gp": 13,
   "tpm": 36,
   "xtpm": 33.14,
   "fgm": 118,
   "xfgm": 120.77,
   "fga": 272
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
   "gp": 12,
   "tpm": 11,
   "xtpm": 15.19,
   "fgm": 53,
   "xfgm": 61.33,
   "fga": 128
  },
  "Jalen Johnson": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 15.5,
   "fgm": 78,
   "xfgm": 89.35,
   "fga": 177
  },
  "Jalen Pickett": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.06,
   "fgm": 4,
   "xfgm": 3.41,
   "fga": 8
  },
  "Jalen Slawson": {
   "gp": 12,
   "tpm": 3,
   "xtpm": 3.91,
   "fgm": 14,
   "xfgm": 14.85,
   "fga": 29
  },
  "Jalen Smith": {
   "gp": 11,
   "tpm": 19,
   "xtpm": 19.51,
   "fgm": 55,
   "xfgm": 51.76,
   "fga": 107
  },
  "Jalen Suggs": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 5.35,
   "fgm": 11,
   "xfgm": 16.17,
   "fga": 36
  },
  "Jalen Williams": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.17,
   "fgm": 15,
   "xfgm": 19.16,
   "fga": 39
  },
  "Jamal Cain": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 13.54,
   "fgm": 24,
   "xfgm": 23.19,
   "fga": 59
  },
  "Jamal Murray": {
   "gp": 11,
   "tpm": 40,
   "xtpm": 28.62,
   "fgm": 96,
   "xfgm": 81.59,
   "fga": 187
  },
  "Jamal Shead": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 16.6,
   "fgm": 33,
   "xfgm": 39.83,
   "fga": 90
  },
  "Jamaree Bouyea": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 0.37,
   "fgm": 7,
   "xfgm": 3.64,
   "fga": 7
  },
  "James Harden": {
   "gp": 13,
   "tpm": 34,
   "xtpm": 32.04,
   "fgm": 62,
   "xfgm": 68.4,
   "fga": 159
  },
  "James Wiseman": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 5.91,
   "fga": 10
  },
  "Jamison Battle": {
   "gp": 13,
   "tpm": 26,
   "xtpm": 21.64,
   "fgm": 39,
   "xfgm": 34.34,
   "fga": 83
  },
  "Jarace Walker": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 16.65,
   "fgm": 30,
   "xfgm": 37.9,
   "fga": 85
  },
  "Jared McCain": {
   "gp": 14,
   "tpm": 31,
   "xtpm": 32.96,
   "fgm": 66,
   "xfgm": 70.98,
   "fga": 165
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
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.17,
   "fgm": 6,
   "xfgm": 8.17,
   "fga": 18
  },
  "Jarred Vanderbilt": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 9,
   "xfgm": 7.26,
   "fga": 11
  },
  "Jarrett Allen": {
   "gp": 11,
   "tpm": 3,
   "xtpm": 1.41,
   "fgm": 53,
   "xfgm": 47.73,
   "fga": 82
  },
  "Jase Richardson": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 12.84,
   "fgm": 25,
   "xfgm": 34.33,
   "fga": 78
  },
  "Javon Small": {
   "gp": 6,
   "tpm": 10,
   "xtpm": 8.13,
   "fgm": 17,
   "xfgm": 17.15,
   "fga": 41
  },
  "Javonte Green": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 14.23,
   "fgm": 21,
   "xfgm": 22.12,
   "fga": 53
  },
  "Jaxson Hayes": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 41,
   "xfgm": 35.99,
   "fga": 64
  },
  "Jay Huff": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 12.78,
   "fgm": 33,
   "xfgm": 28.62,
   "fga": 62
  },
  "Jaylen Brown": {
   "gp": 13,
   "tpm": 24,
   "xtpm": 21.93,
   "fgm": 108,
   "xfgm": 104.78,
   "fga": 218
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
   "gp": 13,
   "tpm": 27,
   "xtpm": 24.64,
   "fgm": 50,
   "xfgm": 42.94,
   "fga": 103
  },
  "Jaylin Sellers": {
   "gp": 6,
   "tpm": 7,
   "xtpm": 6.04,
   "fgm": 8,
   "xfgm": 8.87,
   "fga": 22
  },
  "Jaylin Williams": {
   "gp": 7,
   "tpm": 5,
   "xtpm": 8.58,
   "fgm": 6,
   "xfgm": 12.07,
   "fga": 30
  },
  "Jaylon Tyson": {
   "gp": 8,
   "tpm": 13,
   "xtpm": 14.62,
   "fgm": 28,
   "xfgm": 30.59,
   "fga": 68
  },
  "Jayson Kent": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 1.78,
   "fgm": 3,
   "xfgm": 5.3,
   "fga": 11
  },
  "Jayson Tatum": {
   "gp": 12,
   "tpm": 31,
   "xtpm": 32.81,
   "fgm": 99,
   "xfgm": 105.36,
   "fga": 232
  },
  "Jerami Grant": {
   "gp": 12,
   "tpm": 22,
   "xtpm": 16.9,
   "fgm": 49,
   "xfgm": 46.88,
   "fga": 101
  },
  "Jeremiah Fears": {
   "gp": 14,
   "tpm": 15,
   "xtpm": 19.43,
   "fgm": 84,
   "xfgm": 95.46,
   "fga": 190
  },
  "Jericho Sims": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 4,
   "xfgm": 4.33,
   "fga": 8
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
   "gp": 8,
   "tpm": 10,
   "xtpm": 11.71,
   "fgm": 13,
   "xfgm": 15.17,
   "fga": 40
  },
  "Joan Beringer": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 30,
   "xfgm": 31.02,
   "fga": 49
  },
  "Jock Landale": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 7.84,
   "fgm": 22,
   "xfgm": 23.43,
   "fga": 48
  },
  "Joel Embiid": {
   "gp": 11,
   "tpm": 4,
   "xtpm": 12.67,
   "fgm": 61,
   "xfgm": 76.89,
   "fga": 163
  },
  "John Collins": {
   "gp": 12,
   "tpm": 14,
   "xtpm": 12.86,
   "fgm": 50,
   "xfgm": 54.94,
   "fga": 109
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
   "gp": 13,
   "tpm": 21,
   "xtpm": 19.56,
   "fgm": 57,
   "xfgm": 63.87,
   "fga": 131
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
   "gp": 11,
   "tpm": 6,
   "xtpm": 3.93,
   "fgm": 24,
   "xfgm": 23.69,
   "fga": 47
  },
  "Jordan Goodwin": {
   "gp": 8,
   "tpm": 18,
   "xtpm": 15.97,
   "fgm": 26,
   "xfgm": 25.37,
   "fga": 62
  },
  "Jordan Hawkins": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 5.34,
   "fgm": 10,
   "xfgm": 10.05,
   "fga": 25
  },
  "Jordan McLaughlin": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 3.22,
   "fgm": 10,
   "xfgm": 12.24,
   "fga": 25
  },
  "Jordan Poole": {
   "gp": 8,
   "tpm": 8,
   "xtpm": 10.24,
   "fgm": 14,
   "xfgm": 21.15,
   "fga": 48
  },
  "Jordan Walsh": {
   "gp": 13,
   "tpm": 10,
   "xtpm": 12.56,
   "fgm": 25,
   "xfgm": 28.12,
   "fga": 60
  },
  "Jose Alvarado": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 3.19,
   "fgm": 4,
   "xfgm": 7.81,
   "fga": 17
  },
  "Josh Dix": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 5.67,
   "fgm": 7,
   "xfgm": 11.77,
   "fga": 27
  },
  "Josh Giddey": {
   "gp": 12,
   "tpm": 15,
   "xtpm": 16.23,
   "fgm": 47,
   "xfgm": 53.81,
   "fga": 113
  },
  "Josh Green": {
   "gp": 12,
   "tpm": 8,
   "xtpm": 9.67,
   "fgm": 16,
   "xfgm": 19.51,
   "fga": 45
  },
  "Josh Hart": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 15.97,
   "fgm": 25,
   "xfgm": 32.57,
   "fga": 74
  },
  "Josh Minott": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 7.8,
   "fgm": 11,
   "xfgm": 12.2,
   "fga": 29
  },
  "Josh Okogie": {
   "gp": 13,
   "tpm": 10,
   "xtpm": 9.64,
   "fgm": 15,
   "xfgm": 21.7,
   "fga": 51
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
   "gp": 12,
   "tpm": 28,
   "xtpm": 23.4,
   "fgm": 50,
   "xfgm": 43.38,
   "fga": 103
  },
  "Julian Champagnie": {
   "gp": 14,
   "tpm": 36,
   "xtpm": 30.53,
   "fgm": 44,
   "xfgm": 38.86,
   "fga": 102
  },
  "Julian Reese": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 2.2,
   "fga": 4
  },
  "Julius Randle": {
   "gp": 12,
   "tpm": 18,
   "xtpm": 19.49,
   "fgm": 78,
   "xfgm": 83.98,
   "fga": 175
  },
  "Justin Champagnie": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.48,
   "fgm": 12,
   "xfgm": 10.84,
   "fga": 20
  },
  "Justin Edwards": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 2.02,
   "fga": 4
  },
  "Karim López": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 1,
   "xfgm": 1.03,
   "fga": 2
  },
  "Karl-Anthony Towns": {
   "gp": 13,
   "tpm": 27,
   "xtpm": 23.95,
   "fgm": 101,
   "xfgm": 95.74,
   "fga": 189
  },
  "Karlo Matković": {
   "gp": 13,
   "tpm": 17,
   "xtpm": 14.36,
   "fgm": 38,
   "xfgm": 31.74,
   "fga": 67
  },
  "Kasparas Jakučionis": {
   "gp": 13,
   "tpm": 11,
   "xtpm": 14.17,
   "fgm": 33,
   "xfgm": 35.48,
   "fga": 75
  },
  "Kawhi Leonard": {
   "gp": 2,
   "tpm": 4,
   "xtpm": 4.93,
   "fgm": 12,
   "xfgm": 17.22,
   "fga": 37
  },
  "Keaton Wagler": {
   "gp": 12,
   "tpm": 21,
   "xtpm": 20.14,
   "fgm": 35,
   "xfgm": 41.41,
   "fga": 99
  },
  "Keegan Murray": {
   "gp": 6,
   "tpm": 6,
   "xtpm": 8.54,
   "fgm": 21,
   "xfgm": 24.63,
   "fga": 59
  },
  "Kel'el Ware": {
   "gp": 14,
   "tpm": 9,
   "xtpm": 13.43,
   "fgm": 44,
   "xfgm": 57.59,
   "fga": 110
  },
  "Keldon Johnson": {
   "gp": 14,
   "tpm": 5,
   "xtpm": 7.8,
   "fgm": 47,
   "xfgm": 52.67,
   "fga": 99
  },
  "Kelly Oubre Jr.": {
   "gp": 12,
   "tpm": 11,
   "xtpm": 16.71,
   "fgm": 49,
   "xfgm": 52.07,
   "fga": 109
  },
  "Kenrich Williams": {
   "gp": 14,
   "tpm": 19,
   "xtpm": 15.23,
   "fgm": 36,
   "xfgm": 35.5,
   "fga": 80
  },
  "Kentavious Caldwell-Pope": {
   "gp": 14,
   "tpm": 20,
   "xtpm": 15.28,
   "fgm": 27,
   "xfgm": 23.36,
   "fga": 59
  },
  "Keon Ellis": {
   "gp": 11,
   "tpm": 10,
   "xtpm": 11.32,
   "fgm": 18,
   "xfgm": 20.5,
   "fga": 49
  },
  "Keshad Johnson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Kevin Durant": {
   "gp": 14,
   "tpm": 20,
   "xtpm": 18.82,
   "fgm": 91,
   "xfgm": 81.06,
   "fga": 185
  },
  "Kevin Huerter": {
   "gp": 12,
   "tpm": 19,
   "xtpm": 19.49,
   "fgm": 45,
   "xfgm": 41.11,
   "fga": 97
  },
  "Kevon Looney": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 3.49,
   "fga": 6
  },
  "Keyonte George": {
   "gp": 13,
   "tpm": 25,
   "xtpm": 28.21,
   "fgm": 86,
   "xfgm": 86.95,
   "fga": 204
  },
  "Khaman Maluach": {
   "gp": 12,
   "tpm": 2,
   "xtpm": 2.5,
   "fgm": 37,
   "xfgm": 34.37,
   "fga": 60
  },
  "Khris Middleton": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 2.87,
   "fgm": 6,
   "xfgm": 5.23,
   "fga": 13
  },
  "Kingston Flemings": {
   "gp": 12,
   "tpm": 9,
   "xtpm": 7.39,
   "fgm": 38,
   "xfgm": 36.28,
   "fga": 74
  },
  "Klay Thompson": {
   "gp": 12,
   "tpm": 48,
   "xtpm": 40.46,
   "fgm": 64,
   "xfgm": 53.14,
   "fga": 143
  },
  "Koa Peat": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 11,
   "xfgm": 10.34,
   "fga": 17
  },
  "Kobe Brown": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 4.26,
   "fgm": 10,
   "xfgm": 10.2,
   "fga": 23
  },
  "Kobe Sanders": {
   "gp": 12,
   "tpm": 18,
   "xtpm": 17.65,
   "fgm": 35,
   "xfgm": 35.51,
   "fga": 83
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
   "gp": 12,
   "tpm": 10,
   "xtpm": 8.87,
   "fgm": 34,
   "xfgm": 35.05,
   "fga": 69
  },
  "Kris Murray": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 5.82,
   "fgm": 4,
   "xfgm": 8.24,
   "fga": 20
  },
  "Kyle Anderson": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 7.42,
   "fga": 15
  },
  "Kyle Filipowski": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 2.15,
   "fgm": 11,
   "xfgm": 12.93,
   "fga": 26
  },
  "Kyle Kuzma": {
   "gp": 14,
   "tpm": 23,
   "xtpm": 25.21,
   "fgm": 58,
   "xfgm": 59.66,
   "fga": 129
  },
  "Kyrie Irving": {
   "gp": 11,
   "tpm": 39,
   "xtpm": 34.68,
   "fgm": 90,
   "xfgm": 80.6,
   "fga": 190
  },
  "Kyshawn George": {
   "gp": 14,
   "tpm": 33,
   "xtpm": 28.25,
   "fgm": 91,
   "xfgm": 86.29,
   "fga": 190
  },
  "LJ Cryer": {
   "gp": 10,
   "tpm": 16,
   "xtpm": 12.37,
   "fgm": 21,
   "xfgm": 19.73,
   "fga": 51
  },
  "LaMelo Ball": {
   "gp": 13,
   "tpm": 47,
   "xtpm": 44.18,
   "fgm": 85,
   "xfgm": 80.7,
   "fga": 195
  },
  "Labaron Philon Jr.": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 3.17,
   "fgm": 7,
   "xfgm": 8.22,
   "fga": 20
  },
  "Landry Shamet": {
   "gp": 13,
   "tpm": 29,
   "xtpm": 24.47,
   "fgm": 46,
   "xfgm": 40.44,
   "fga": 96
  },
  "Larry Nance Jr.": {
   "gp": 13,
   "tpm": 12,
   "xtpm": 10.77,
   "fgm": 20,
   "xfgm": 18.63,
   "fga": 43
  },
  "Lauri Markkanen": {
   "gp": 8,
   "tpm": 29,
   "xtpm": 25.79,
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
   "gp": 11,
   "tpm": 9,
   "xtpm": 14.12,
   "fgm": 62,
   "xfgm": 70.22,
   "fga": 140
  },
  "Leaky Black": {
   "gp": 9,
   "tpm": 14,
   "xtpm": 10.67,
   "fgm": 16,
   "xfgm": 13.94,
   "fga": 36
  },
  "Leonard Miller": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 9.93,
   "fgm": 24,
   "xfgm": 27.69,
   "fga": 56
  },
  "Liam McNeeley": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 4.24,
   "fgm": 7,
   "xfgm": 10.78,
   "fga": 24
  },
  "Luguentz Dort": {
   "gp": 14,
   "tpm": 22,
   "xtpm": 23.32,
   "fgm": 42,
   "xfgm": 52.93,
   "fga": 115
  },
  "Luka Dončić": {
   "gp": 12,
   "tpm": 65,
   "xtpm": 56.44,
   "fgm": 144,
   "xfgm": 120.74,
   "fga": 296
  },
  "Luka Garza": {
   "gp": 13,
   "tpm": 14,
   "xtpm": 11.06,
   "fgm": 25,
   "xfgm": 27.78,
   "fga": 59
  },
  "Luke Kennard": {
   "gp": 11,
   "tpm": 22,
   "xtpm": 18.82,
   "fgm": 36,
   "xfgm": 26.84,
   "fga": 70
  },
  "Luke Kornet": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 18,
   "xfgm": 23.07,
   "fga": 37
  },
  "Malachi Smith": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.35,
   "fga": 1
  },
  "Malevy Leons": {
   "gp": 8,
   "tpm": 1,
   "xtpm": 1.43,
   "fgm": 2,
   "xfgm": 4.51,
   "fga": 10
  },
  "Malik Dia": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.42,
   "fga": 3
  },
  "Malik Monk": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 14.82,
   "fgm": 34,
   "xfgm": 38.16,
   "fga": 90
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
   "gp": 11,
   "tpm": 10,
   "xtpm": 11.77,
   "fgm": 23,
   "xfgm": 21.61,
   "fga": 54
  },
  "Marcus Smart": {
   "gp": 9,
   "tpm": 16,
   "xtpm": 14.25,
   "fgm": 25,
   "xfgm": 22.98,
   "fga": 57
  },
  "Mario Hezonja": {
   "gp": 14,
   "tpm": 16,
   "xtpm": 18.12,
   "fgm": 49,
   "xfgm": 48.63,
   "fga": 104
  },
  "Marvin Bagley III": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 1.41,
   "fgm": 24,
   "xfgm": 24.44,
   "fga": 44
  },
  "Mason Plumlee": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Matas Buzelis": {
   "gp": 12,
   "tpm": 21,
   "xtpm": 21.99,
   "fgm": 50,
   "xfgm": 52.92,
   "fga": 115
  },
  "Matisse Thybulle": {
   "gp": 14,
   "tpm": 24,
   "xtpm": 21.71,
   "fgm": 35,
   "xfgm": 32.49,
   "fga": 80
  },
  "Max Christie": {
   "gp": 11,
   "tpm": 12,
   "xtpm": 15.66,
   "fgm": 21,
   "xfgm": 25.96,
   "fga": 63
  },
  "Max Strus": {
   "gp": 6,
   "tpm": 13,
   "xtpm": 13.1,
   "fgm": 19,
   "xfgm": 21.46,
   "fga": 51
  },
  "Meleek Thomas": {
   "gp": 11,
   "tpm": 29,
   "xtpm": 22.64,
   "fgm": 58,
   "xfgm": 52.09,
   "fga": 119
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
   "gp": 6,
   "tpm": 2,
   "xtpm": 2.11,
   "fgm": 6,
   "xfgm": 4.75,
   "fga": 12
  },
  "Michael Porter Jr.": {
   "gp": 11,
   "tpm": 39,
   "xtpm": 36.71,
   "fgm": 77,
   "xfgm": 71.51,
   "fga": 169
  },
  "Mikal Bridges": {
   "gp": 13,
   "tpm": 11,
   "xtpm": 14.29,
   "fgm": 36,
   "xfgm": 42.92,
   "fga": 96
  },
  "Mike Conley": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 2.13,
   "fgm": 4,
   "xfgm": 2.13,
   "fga": 6
  },
  "Mikel Brown Jr.": {
   "gp": 8,
   "tpm": 16,
   "xtpm": 16.93,
   "fgm": 30,
   "xfgm": 36.82,
   "fga": 86
  },
  "Miles Bridges": {
   "gp": 12,
   "tpm": 21,
   "xtpm": 23.83,
   "fgm": 65,
   "xfgm": 65.27,
   "fga": 143
  },
  "Miles McBride": {
   "gp": 13,
   "tpm": 27,
   "xtpm": 22.05,
   "fgm": 34,
   "xfgm": 30.47,
   "fga": 78
  },
  "Mitchell Robinson": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 28,
   "xfgm": 28.6,
   "fga": 44
  },
  "Mo Bamba": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 2.13,
   "fgm": 38,
   "xfgm": 30.29,
   "fga": 51
  },
  "Mohamed Diawara": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 4.98,
   "fgm": 6,
   "xfgm": 8.06,
   "fga": 19
  },
  "Morez Johnson Jr.": {
   "gp": 13,
   "tpm": 2,
   "xtpm": 4.93,
   "fgm": 30,
   "xfgm": 37.61,
   "fga": 72
  },
  "Moritz Wagner": {
   "gp": 12,
   "tpm": 15,
   "xtpm": 8.84,
   "fgm": 45,
   "xfgm": 41.18,
   "fga": 77
  },
  "Moussa Cissé": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.74,
   "fga": 6
  },
  "Moussa Diabaté": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 41,
   "xfgm": 42.43,
   "fga": 68
  },
  "Myles Turner": {
   "gp": 13,
   "tpm": 18,
   "xtpm": 21.6,
   "fgm": 36,
   "xfgm": 42.41,
   "fga": 100
  },
  "Myron Gardner": {
   "gp": 8,
   "tpm": 1,
   "xtpm": 3.21,
   "fgm": 3,
   "xfgm": 4.53,
   "fga": 11
  },
  "Naji Marshall": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 12.8,
   "fgm": 49,
   "xfgm": 49.1,
   "fga": 107
  },
  "Nate Ament": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 12.14,
   "fgm": 33,
   "xfgm": 33.98,
   "fga": 72
  },
  "Naz Reid": {
   "gp": 13,
   "tpm": 31,
   "xtpm": 31.86,
   "fgm": 87,
   "xfgm": 97.79,
   "fga": 218
  },
  "Neemias Queta": {
   "gp": 13,
   "tpm": 4,
   "xtpm": 1.8,
   "fgm": 43,
   "xfgm": 43.75,
   "fga": 75
  },
  "Nic Claxton": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 7.26,
   "fga": 12
  },
  "Nick Martinelli": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.06,
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
   "gp": 14,
   "tpm": 50,
   "xtpm": 51.41,
   "fgm": 98,
   "xfgm": 104.18,
   "fga": 238
  },
  "Nikola Jokić": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 15.5,
   "fgm": 101,
   "xfgm": 91.74,
   "fga": 198
  },
  "Nikola Jović": {
   "gp": 8,
   "tpm": 1,
   "xtpm": 3.93,
   "fgm": 6,
   "xfgm": 10.06,
   "fga": 22
  },
  "Nikola Topić": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 4,
   "xfgm": 4.35,
   "fga": 10
  },
  "Nikola Vučević": {
   "gp": 12,
   "tpm": 4,
   "xtpm": 7.1,
   "fgm": 13,
   "xfgm": 15.01,
   "fga": 36
  },
  "Nique Clifford": {
   "gp": 12,
   "tpm": 2,
   "xtpm": 4.97,
   "fgm": 13,
   "xfgm": 13.2,
   "fga": 31
  },
  "Noa Essengue": {
   "gp": 11,
   "tpm": 5,
   "xtpm": 7.84,
   "fgm": 19,
   "xfgm": 21.89,
   "fga": 45
  },
  "Noah Clowney": {
   "gp": 12,
   "tpm": 11,
   "xtpm": 13.19,
   "fgm": 27,
   "xfgm": 28.37,
   "fga": 64
  },
  "Nolan Traore": {
   "gp": 11,
   "tpm": 18,
   "xtpm": 15.23,
   "fgm": 54,
   "xfgm": 48.97,
   "fga": 108
  },
  "Norchad Omier": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 5,
   "xfgm": 3.34,
   "fga": 6
  },
  "Norman Powell": {
   "gp": 10,
   "tpm": 24,
   "xtpm": 23.97,
   "fgm": 63,
   "xfgm": 61.81,
   "fga": 141
  },
  "OG Anunoby": {
   "gp": 13,
   "tpm": 28,
   "xtpm": 30.65,
   "fgm": 60,
   "xfgm": 72.04,
   "fga": 154
  },
  "Obi Toppin": {
   "gp": 11,
   "tpm": 17,
   "xtpm": 17.49,
   "fgm": 49,
   "xfgm": 46.75,
   "fga": 97
  },
  "Olivier-Maxence Prosper": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 1.8,
   "fgm": 11,
   "xfgm": 10.76,
   "fga": 20
  },
  "Onyeka Okongwu": {
   "gp": 14,
   "tpm": 23,
   "xtpm": 24.75,
   "fgm": 75,
   "xfgm": 71.6,
   "fga": 151
  },
  "Oscar Tshiebwe": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 10,
   "xfgm": 8.36,
   "fga": 13
  },
  "Oso Ighodaro": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 26,
   "xfgm": 26.15,
   "fga": 45
  },
  "Ousmane Dieng": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 7.1,
   "fgm": 14,
   "xfgm": 14.79,
   "fga": 34
  },
  "P.J. Washington": {
   "gp": 14,
   "tpm": 29,
   "xtpm": 30.98,
   "fgm": 62,
   "xfgm": 67.12,
   "fga": 154
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
   "xtpm": 1.45,
   "fgm": 5,
   "xfgm": 4.5,
   "fga": 9
  },
  "Paolo Banchero": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 2.13,
   "fgm": 16,
   "xfgm": 10.81,
   "fga": 23
  },
  "Pascal Siakam": {
   "gp": 13,
   "tpm": 21,
   "xtpm": 21.99,
   "fgm": 109,
   "xfgm": 99.56,
   "fga": 212
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
   "gp": 5,
   "tpm": 7,
   "xtpm": 6.35,
   "fgm": 17,
   "xfgm": 15.56,
   "fga": 33
  },
  "Paul George": {
   "gp": 11,
   "tpm": 38,
   "xtpm": 31.12,
   "fgm": 83,
   "xfgm": 74.91,
   "fga": 175
  },
  "Paul Reed": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 3.21,
   "fgm": 56,
   "xfgm": 54.68,
   "fga": 101
  },
  "Payton Pritchard": {
   "gp": 13,
   "tpm": 29,
   "xtpm": 28.21,
   "fgm": 57,
   "xfgm": 56.69,
   "fga": 138
  },
  "Pelle Larsson": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 11.28,
   "fgm": 36,
   "xfgm": 35.44,
   "fga": 77
  },
  "Pete Nance": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.01,
   "fga": 2
  },
  "Peyton Watson": {
   "gp": 11,
   "tpm": 10,
   "xtpm": 16.75,
   "fgm": 43,
   "xfgm": 56.6,
   "fga": 118
  },
  "Precious Achiuwa": {
   "gp": 11,
   "tpm": 4,
   "xtpm": 3.91,
   "fgm": 49,
   "xfgm": 46.74,
   "fga": 92
  },
  "Quentin Grimes": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 13.82,
   "fgm": 35,
   "xfgm": 34.6,
   "fga": 75
  },
  "Quenton Jackson": {
   "gp": 14,
   "tpm": 15,
   "xtpm": 15.54,
   "fgm": 47,
   "xfgm": 47.06,
   "fga": 100
  },
  "Quinten Post": {
   "gp": 8,
   "tpm": 5,
   "xtpm": 6.74,
   "fgm": 16,
   "xfgm": 15.48,
   "fga": 34
  },
  "RJ Barrett": {
   "gp": 13,
   "tpm": 19,
   "xtpm": 23.32,
   "fgm": 104,
   "xfgm": 110.56,
   "fga": 222
  },
  "Rasheer Fleming": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 2.13,
   "fgm": 2,
   "xfgm": 4.33,
   "fga": 10
  },
  "RayJ Dennis": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 1.76,
   "fgm": 4,
   "xfgm": 4.37,
   "fga": 10
  },
  "Rayan Rupert": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 1,
   "xfgm": 1.36,
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
   "gp": 11,
   "tpm": 24,
   "xtpm": 27.19,
   "fgm": 37,
   "xfgm": 39.36,
   "fga": 100
  },
  "Riley Minix": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 3.89,
   "fgm": 5,
   "xfgm": 7.38,
   "fga": 17
  },
  "Robert Williams III": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 30,
   "xfgm": 27.5,
   "fga": 45
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
   "xtpm": 9.28,
   "fgm": 21,
   "xfgm": 29.05,
   "fga": 61
  },
  "Royce O'Neale": {
   "gp": 13,
   "tpm": 17,
   "xtpm": 19.08,
   "fgm": 22,
   "xfgm": 23.04,
   "fga": 60
  },
  "Rudy Gobert": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 32,
   "xfgm": 41.98,
   "fga": 69
  },
  "Rui Hachimura": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 20.58,
   "fgm": 44,
   "xfgm": 53.18,
   "fga": 120
  },
  "Ryan Conwell": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 14.9,
   "fgm": 21,
   "xfgm": 22.09,
   "fga": 57
  },
  "Ryan Dunn": {
   "gp": 12,
   "tpm": 10,
   "xtpm": 7.93,
   "fgm": 23,
   "xfgm": 23.55,
   "fga": 49
  },
  "Ryan Kalkbrenner": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 22,
   "xfgm": 21.56,
   "fga": 34
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
   "xtpm": 21.6,
   "fgm": 51,
   "xfgm": 59.28,
   "fga": 131
  },
  "Saddiq Bey": {
   "gp": 14,
   "tpm": 30,
   "xtpm": 28.07,
   "fgm": 77,
   "xfgm": 74.96,
   "fga": 170
  },
  "Sam Hauser": {
   "gp": 13,
   "tpm": 29,
   "xtpm": 23.05,
   "fgm": 37,
   "xfgm": 29.55,
   "fga": 78
  },
  "Sam Merrill": {
   "gp": 9,
   "tpm": 14,
   "xtpm": 15.28,
   "fgm": 22,
   "xfgm": 22.95,
   "fga": 57
  },
  "Sandro Mamukelashvili": {
   "gp": 14,
   "tpm": 21,
   "xtpm": 19.53,
   "fgm": 53,
   "xfgm": 50.51,
   "fga": 111
  },
  "Santi Aldama": {
   "gp": 5,
   "tpm": 6,
   "xtpm": 6.41,
   "fgm": 14,
   "xfgm": 14.55,
   "fga": 32
  },
  "Scoot Henderson": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 18.12,
   "fgm": 31,
   "xfgm": 41.43,
   "fga": 99
  },
  "Scottie Barnes": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 12.14,
   "fgm": 88,
   "xfgm": 88.42,
   "fga": 185
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
   "gp": 14,
   "tpm": 33,
   "xtpm": 31.34,
   "fgm": 152,
   "xfgm": 142.08,
   "fga": 320
  },
  "Sidy Cissoko": {
   "gp": 12,
   "tpm": 16,
   "xtpm": 16.12,
   "fgm": 29,
   "xfgm": 27.78,
   "fga": 64
  },
  "Simone Fontecchio": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 3.52,
   "fgm": 4,
   "xfgm": 5.69,
   "fga": 14
  },
  "Sion James": {
   "gp": 13,
   "tpm": 15,
   "xtpm": 21.09,
   "fgm": 26,
   "xfgm": 34.29,
   "fga": 82
  },
  "Spencer Jones": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 2.89,
   "fgm": 8,
   "xfgm": 7.07,
   "fga": 15
  },
  "Stephen Curry": {
   "gp": 10,
   "tpm": 43,
   "xtpm": 33.2,
   "fgm": 80,
   "xfgm": 65.63,
   "fga": 160
  },
  "Stephon Castle": {
   "gp": 14,
   "tpm": 28,
   "xtpm": 29.34,
   "fgm": 83,
   "xfgm": 90.24,
   "fga": 195
  },
  "Steven Adams": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 5,
   "xfgm": 3.96,
   "fga": 6
  },
  "Svi Mykhailiuk": {
   "gp": 14,
   "tpm": 10,
   "xtpm": 14.19,
   "fgm": 19,
   "xfgm": 25.47,
   "fga": 62
  },
  "T.J. McConnell": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 16,
   "xfgm": 14.63,
   "fga": 32
  },
  "Tacko Fall": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Tari Eason": {
   "gp": 14,
   "tpm": 15,
   "xtpm": 18.96,
   "fgm": 59,
   "xfgm": 65.28,
   "fga": 133
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
   "gp": 8,
   "tpm": 7,
   "xtpm": 4.67,
   "fgm": 20,
   "xfgm": 15.89,
   "fga": 31
  },
  "Terance Mann": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 4.3,
   "fgm": 4,
   "xfgm": 6.88,
   "fga": 17
  },
  "Terrence Shannon Jr": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 13.49,
   "fgm": 35,
   "xfgm": 38.88,
   "fga": 83
  },
  "Thomas Bryant": {
   "gp": 8,
   "tpm": 10,
   "xtpm": 8.82,
   "fgm": 25,
   "xfgm": 23.72,
   "fga": 50
  },
  "Tidjane Salaün": {
   "gp": 12,
   "tpm": 14,
   "xtpm": 13.15,
   "fgm": 24,
   "xfgm": 23.05,
   "fga": 53
  },
  "Tim Hardaway Jr.": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 14.13,
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
   "xfgm": 6.11,
   "fga": 12
  },
  "Tolu Smith": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 3.96,
   "fga": 6
  },
  "Tony Bradley": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 6,
   "xfgm": 5.88,
   "fga": 11
  },
  "Toumani Camara": {
   "gp": 12,
   "tpm": 34,
   "xtpm": 27.77,
   "fgm": 55,
   "xfgm": 44.05,
   "fga": 107
  },
  "Trae Young": {
   "gp": 14,
   "tpm": 28,
   "xtpm": 32.47,
   "fgm": 70,
   "xfgm": 76.91,
   "fga": 183
  },
  "Trayce Jackson-Davis": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 12,
   "xfgm": 10.12,
   "fga": 17
  },
  "Tre Donaldson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Tre Johnson": {
   "gp": 12,
   "tpm": 16,
   "xtpm": 23.36,
   "fgm": 44,
   "xfgm": 48.92,
   "fga": 121
  },
  "Tre Jones": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 4.61,
   "fgm": 45,
   "xfgm": 49.65,
   "fga": 90
  },
  "Tre Mann": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 1.76,
   "fgm": 3,
   "xfgm": 5.06,
   "fga": 10
  },
  "Trendon Watford": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 2.11,
   "fgm": 12,
   "xfgm": 12.45,
   "fga": 22
  },
  "Trevon Brazile": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 8.93,
   "fgm": 30,
   "xfgm": 26.31,
   "fga": 53
  },
  "Trey Lyles": {
   "gp": 13,
   "tpm": 11,
   "xtpm": 13.15,
   "fgm": 26,
   "xfgm": 24.06,
   "fga": 56
  },
  "Trey Murphy III": {
   "gp": 9,
   "tpm": 20,
   "xtpm": 18.69,
   "fgm": 47,
   "xfgm": 45.84,
   "fga": 101
  },
  "Tristan Enaruna": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.78,
   "fgm": 3,
   "xfgm": 5.08,
   "fga": 10
  },
  "Tristan da Silva": {
   "gp": 10,
   "tpm": 34,
   "xtpm": 31.24,
   "fgm": 55,
   "xfgm": 49.62,
   "fga": 123
  },
  "Ty Jerome": {
   "gp": 11,
   "tpm": 28,
   "xtpm": 27.51,
   "fgm": 98,
   "xfgm": 83.92,
   "fga": 202
  },
  "Tyler Herro": {
   "gp": 13,
   "tpm": 35,
   "xtpm": 34.25,
   "fgm": 91,
   "xfgm": 94.43,
   "fga": 213
  },
  "Tyler Kolek": {
   "gp": 11,
   "tpm": 6,
   "xtpm": 7.08,
   "fgm": 14,
   "xfgm": 15.43,
   "fga": 35
  },
  "Tyrese Haliburton": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 9.6,
   "fgm": 32,
   "xfgm": 26.88,
   "fga": 62
  },
  "Tyrese Maxey": {
   "gp": 14,
   "tpm": 37,
   "xtpm": 35.31,
   "fgm": 126,
   "xfgm": 119.92,
   "fga": 254
  },
  "Tyrese Proctor": {
   "gp": 13,
   "tpm": 23,
   "xtpm": 17.36,
   "fgm": 44,
   "xfgm": 35.4,
   "fga": 83
  },
  "Tyus Jones": {
   "gp": 11,
   "tpm": 3,
   "xtpm": 4.58,
   "fgm": 9,
   "xfgm": 11.11,
   "fga": 26
  },
  "VJ Edgecombe": {
   "gp": 13,
   "tpm": 20,
   "xtpm": 21.66,
   "fgm": 68,
   "xfgm": 70.91,
   "fga": 147
  },
  "Victor Wembanyama": {
   "gp": 14,
   "tpm": 27,
   "xtpm": 29.95,
   "fgm": 147,
   "xfgm": 137.42,
   "fga": 275
  },
  "Vít Krejčí": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 5.3,
   "fgm": 6,
   "xfgm": 7.91,
   "fga": 20
  },
  "Walker Kessler": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 85,
   "xfgm": 78.1,
   "fga": 125
  },
  "Walter Clayton Jr.": {
   "gp": 13,
   "tpm": 16,
   "xtpm": 15.52,
   "fgm": 31,
   "xfgm": 31.43,
   "fga": 74
  },
  "Wendell Carter Jr.": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 10.67,
   "fgm": 58,
   "xfgm": 47.5,
   "fga": 96
  },
  "Will Richard": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 9.26,
   "fgm": 24,
   "xfgm": 23.0,
   "fga": 50
  },
  "Will Riley": {
   "gp": 11,
   "tpm": 4,
   "xtpm": 4.28,
   "fgm": 11,
   "xfgm": 10.19,
   "fga": 22
  },
  "Yang Hansen": {
   "gp": 7,
   "tpm": 5,
   "xtpm": 3.17,
   "fgm": 8,
   "xfgm": 7.57,
   "fga": 17
  },
  "Yaxel Lendeborg": {
   "gp": 13,
   "tpm": 29,
   "xtpm": 24.75,
   "fgm": 89,
   "xfgm": 85.4,
   "fga": 183
  },
  "Yves Missi": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 9,
   "xfgm": 7.48,
   "fga": 13
  },
  "Zaccharie Risacher": {
   "gp": 14,
   "tpm": 15,
   "xtpm": 17.34,
   "fgm": 50,
   "xfgm": 51.53,
   "fga": 108
  },
  "Zach Collins": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 2.83,
   "fgm": 9,
   "xfgm": 14.87,
   "fga": 28
  },
  "Zach Edey": {
   "gp": 10,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 27,
   "xfgm": 29.17,
   "fga": 52
  },
  "Zach LaVine": {
   "gp": 12,
   "tpm": 34,
   "xtpm": 30.73,
   "fgm": 85,
   "xfgm": 73.01,
   "fga": 170
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
   "gp": 11,
   "tpm": 20,
   "xtpm": 15.58,
   "fgm": 42,
   "xfgm": 33.78,
   "fga": 74
  },
  "Zion Williamson": {
   "gp": 13,
   "tpm": 6,
   "xtpm": 4.59,
   "fgm": 100,
   "xfgm": 97.53,
   "fga": 166
  },
  "Zuby Ejiofor": {
   "gp": 8,
   "tpm": 5,
   "xtpm": 3.54,
   "fgm": 15,
   "xfgm": 14.32,
   "fga": 27
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
