// ============================================================
//  x3PM / xFGM der laufenden Saison aus Play-by-Play
//  Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data (nicht unser Projekt, frei veröffentlichte Daten)
//  Methode: Josh Lloyd (joshlloydfantasy.com/research/xstats-method)
//  Erzeugt von scripts/xstats-pbp.py am 2026-11-17 · Saison 2026-27 · Stand 2026-11-16
//  Wird von scripts/build-live-projections.js gelesen (3PM, FG%).
//  META {"season": "2026-27", "assetUpdated": "Tue, 17 Nov 2026 18:13:13 GMT"}
// ============================================================
const XSTATS_PBP = {
 "meta": {
  "season": "2026-27",
  "through": "2026-11-16",
  "players": 471,
  "games": 205,
  "shots": 36116,
  "assetUpdated": "Tue, 17 Nov 2026 18:13:13 GMT",
  "zoneRates": {
   "C3": 0.3689,
   "AB3": 0.3518,
   "RA": 0.6608,
   "PAINT": 0.438,
   "MID": 0.4094
  },
  "source": "Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data"
 },
 "players": {
  "AJ Dybantsa": {
   "gp": 11,
   "tpm": 10,
   "xtpm": 15.57,
   "fgm": 63,
   "xfgm": 75.78,
   "fga": 156
  },
  "AJ Green": {
   "gp": 14,
   "tpm": 23,
   "xtpm": 20.23,
   "fgm": 26,
   "xfgm": 23.43,
   "fga": 64
  },
  "AJ Johnson": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 4.53,
   "fga": 8
  },
  "Aaron Gordon": {
   "gp": 12,
   "tpm": 14,
   "xtpm": 16.66,
   "fgm": 43,
   "xfgm": 49.0,
   "fga": 104
  },
  "Aaron Nesmith": {
   "gp": 12,
   "tpm": 20,
   "xtpm": 24.25,
   "fgm": 49,
   "xfgm": 54.56,
   "fga": 124
  },
  "Aaron Wiggins": {
   "gp": 14,
   "tpm": 38,
   "xtpm": 34.3,
   "fgm": 75,
   "xfgm": 68.34,
   "fga": 164
  },
  "Ace Bailey": {
   "gp": 14,
   "tpm": 22,
   "xtpm": 29.07,
   "fgm": 77,
   "xfgm": 71.57,
   "fga": 165
  },
  "Aday Mara": {
   "gp": 14,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 57,
   "xfgm": 52.2,
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
   "xfgm": 6.32,
   "fga": 10
  },
  "Ajay Mitchell": {
   "gp": 12,
   "tpm": 10,
   "xtpm": 13.49,
   "fgm": 87,
   "xfgm": 82.16,
   "fga": 169
  },
  "Al Horford": {
   "gp": 12,
   "tpm": 11,
   "xtpm": 12.37,
   "fgm": 18,
   "xfgm": 21.06,
   "fga": 52
  },
  "Alex Caruso": {
   "gp": 11,
   "tpm": 17,
   "xtpm": 13.77,
   "fgm": 25,
   "xfgm": 23.16,
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
   "gp": 14,
   "tpm": 15,
   "xtpm": 18.03,
   "fgm": 64,
   "xfgm": 59.51,
   "fga": 122
  },
  "Alijah Martin": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 8.16,
   "fgm": 26,
   "xfgm": 19.61,
   "fga": 41
  },
  "Allen Graves": {
   "gp": 13,
   "tpm": 7,
   "xtpm": 9.25,
   "fgm": 21,
   "xfgm": 24.62,
   "fga": 52
  },
  "Alperen Sengun": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 9.53,
   "fgm": 111,
   "xfgm": 104.89,
   "fga": 199
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
   "xfgm": 87.24,
   "fga": 157
  },
  "Andre Drummond": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 21,
   "xfgm": 31.17,
   "fga": 50
  },
  "Andrew Nembhard": {
   "gp": 11,
   "tpm": 25,
   "xtpm": 21.86,
   "fgm": 62,
   "xfgm": 60.31,
   "fga": 139
  },
  "Andrew Wiggins": {
   "gp": 14,
   "tpm": 19,
   "xtpm": 19.86,
   "fgm": 49,
   "xfgm": 48.42,
   "fga": 112
  },
  "Anfernee Simons": {
   "gp": 15,
   "tpm": 34,
   "xtpm": 29.25,
   "fgm": 54,
   "xfgm": 51.19,
   "fga": 124
  },
  "Anthony Black": {
   "gp": 10,
   "tpm": 21,
   "xtpm": 18.41,
   "fgm": 55,
   "xfgm": 52.15,
   "fga": 120
  },
  "Anthony Davis": {
   "gp": 13,
   "tpm": 9,
   "xtpm": 10.24,
   "fgm": 121,
   "xfgm": 117.74,
   "fga": 234
  },
  "Anthony Edwards": {
   "gp": 4,
   "tpm": 18,
   "xtpm": 15.9,
   "fgm": 50,
   "xfgm": 46.55,
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
   "xfgm": 7.25,
   "fga": 15
  },
  "Ausar Thompson": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 1.41,
   "fgm": 47,
   "xfgm": 51.11,
   "fga": 93
  },
  "Austin Reaves": {
   "gp": 12,
   "tpm": 27,
   "xtpm": 23.31,
   "fgm": 97,
   "xfgm": 82.79,
   "fga": 189
  },
  "Ayo Dosunmu": {
   "gp": 14,
   "tpm": 25,
   "xtpm": 20.56,
   "fgm": 97,
   "xfgm": 95.21,
   "fga": 188
  },
  "Baba Miller": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 2.13,
   "fgm": 14,
   "xfgm": 12.9,
   "fga": 25
  },
  "Bam Adebayo": {
   "gp": 14,
   "tpm": 9,
   "xtpm": 14.54,
   "fgm": 90,
   "xfgm": 81.67,
   "fga": 170
  },
  "Baylor Scheierman": {
   "gp": 14,
   "tpm": 19,
   "xtpm": 15.3,
   "fgm": 29,
   "xfgm": 26.13,
   "fga": 65
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
   "xtpm": 9.18,
   "fgm": 23,
   "xfgm": 30.53,
   "fga": 64
  },
  "Bennett Stirtz": {
   "gp": 14,
   "tpm": 21,
   "xtpm": 17.34,
   "fgm": 34,
   "xfgm": 32.67,
   "fga": 77
  },
  "Bilal Coulibaly": {
   "gp": 14,
   "tpm": 6,
   "xtpm": 12.5,
   "fgm": 38,
   "xfgm": 41.68,
   "fga": 83
  },
  "Blake Wesley": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 0,
   "xfgm": 2.03,
   "fga": 4
  },
  "Bobby Portis Jr.": {
   "gp": 14,
   "tpm": 18,
   "xtpm": 20.28,
   "fgm": 39,
   "xfgm": 44.74,
   "fga": 105
  },
  "Bogdan Bogdanović": {
   "gp": 15,
   "tpm": 19,
   "xtpm": 14.24,
   "fgm": 29,
   "xfgm": 21.96,
   "fga": 57
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
   "gp": 14,
   "tpm": 24,
   "xtpm": 22.25,
   "fgm": 45,
   "xfgm": 42.71,
   "fga": 101
  },
  "Braden Smith": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 2.5,
   "fgm": 13,
   "xfgm": 13.58,
   "fga": 29
  },
  "Branden Carlson": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 2.87,
   "fgm": 8,
   "xfgm": 6.79,
   "fga": 15
  },
  "Brandin Podziemski": {
   "gp": 12,
   "tpm": 34,
   "xtpm": 30.08,
   "fgm": 67,
   "xfgm": 61.18,
   "fga": 147
  },
  "Brandon Miller": {
   "gp": 11,
   "tpm": 28,
   "xtpm": 38.89,
   "fgm": 74,
   "xfgm": 90.97,
   "fga": 215
  },
  "Brandon Williams": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 8.13,
   "fgm": 33,
   "xfgm": 36.99,
   "fga": 80
  },
  "Brayden Burries": {
   "gp": 14,
   "tpm": 13,
   "xtpm": 17.34,
   "fgm": 44,
   "xfgm": 48.5,
   "fga": 107
  },
  "Brice Sensabaugh": {
   "gp": 14,
   "tpm": 19,
   "xtpm": 18.7,
   "fgm": 42,
   "xfgm": 42.37,
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
   "xtpm": 14.81,
   "fgm": 67,
   "xfgm": 57.57,
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
   "gp": 10,
   "tpm": 2,
   "xtpm": 2.11,
   "fgm": 7,
   "xfgm": 6.66,
   "fga": 16
  },
  "Bryce Hopkins": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 1.78,
   "fgm": 14,
   "xfgm": 12.71,
   "fga": 24
  },
  "Bryce McGowens": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 2.5,
   "fgm": 6,
   "xfgm": 8.21,
   "fga": 17
  },
  "Bub Carrington": {
   "gp": 15,
   "tpm": 20,
   "xtpm": 15.95,
   "fgm": 24,
   "xfgm": 25.16,
   "fga": 64
  },
  "Buddy Hield": {
   "gp": 11,
   "tpm": 16,
   "xtpm": 14.44,
   "fgm": 31,
   "xfgm": 28.91,
   "fga": 65
  },
  "CJ McCollum": {
   "gp": 14,
   "tpm": 25,
   "xtpm": 25.0,
   "fgm": 74,
   "xfgm": 75.25,
   "fga": 171
  },
  "Cade Cunningham": {
   "gp": 12,
   "tpm": 25,
   "xtpm": 27.51,
   "fgm": 104,
   "xfgm": 100.76,
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
   "xtpm": 7.17,
   "fgm": 22,
   "xfgm": 18.62,
   "fga": 41
  },
  "Caleb Wilson": {
   "gp": 10,
   "tpm": 23,
   "xtpm": 25.15,
   "fgm": 68,
   "xfgm": 75.25,
   "fga": 162
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
   "gp": 14,
   "tpm": 27,
   "xtpm": 17.31,
   "fgm": 50,
   "xfgm": 37.66,
   "fga": 93
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
   "gp": 14,
   "tpm": 28,
   "xtpm": 30.34,
   "fgm": 77,
   "xfgm": 89.28,
   "fga": 195
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
   "gp": 9,
   "tpm": 17,
   "xtpm": 17.73,
   "fgm": 39,
   "xfgm": 36.89,
   "fga": 86
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
   "xtpm": 12.1,
   "fgm": 17,
   "xfgm": 20.43,
   "fga": 48
  },
  "Cason Wallace": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.55,
   "fgm": 8,
   "xfgm": 9.27,
   "fga": 20
  },
  "Cedric Coward": {
   "gp": 13,
   "tpm": 29,
   "xtpm": 23.29,
   "fgm": 66,
   "xfgm": 62.08,
   "fga": 140
  },
  "Chaney Johnson": {
   "gp": 13,
   "tpm": 7,
   "xtpm": 8.56,
   "fgm": 17,
   "xfgm": 22.98,
   "fga": 50
  },
  "Charles Bassey": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 36,
   "xfgm": 31.05,
   "fga": 54
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
   "gp": 5,
   "tpm": 1,
   "xtpm": 1.79,
   "fgm": 8,
   "xfgm": 6.42,
   "fga": 12
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
   "xtpm": 8.14,
   "fgm": 10,
   "xfgm": 10.34,
   "fga": 27
  },
  "Christian Anderson": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 14.14,
   "fgm": 23,
   "xfgm": 25.72,
   "fga": 63
  },
  "Christian Braun": {
   "gp": 12,
   "tpm": 19,
   "xtpm": 19.24,
   "fgm": 58,
   "xfgm": 58.42,
   "fga": 120
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
   "gp": 6,
   "tpm": 6,
   "xtpm": 11.98,
   "fgm": 24,
   "xfgm": 30.58,
   "fga": 67
  },
  "Cody Williams": {
   "gp": 8,
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
   "gp": 13,
   "tpm": 29,
   "xtpm": 29.64,
   "fgm": 43,
   "xfgm": 43.46,
   "fga": 112
  },
  "Collin Murray-Boyles": {
   "gp": 12,
   "tpm": 7,
   "xtpm": 8.51,
   "fgm": 45,
   "xfgm": 50.2,
   "fga": 97
  },
  "Collin Sexton": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 15.99,
   "fgm": 49,
   "xfgm": 51.97,
   "fga": 110
  },
  "Cooper Flagg": {
   "gp": 13,
   "tpm": 17,
   "xtpm": 21.9,
   "fgm": 106,
   "xfgm": 104.87,
   "fga": 226
  },
  "Corey Kispert": {
   "gp": 7,
   "tpm": 13,
   "xtpm": 8.44,
   "fgm": 21,
   "xfgm": 14.6,
   "fga": 35
  },
  "Craig Porter Jr.": {
   "gp": 12,
   "tpm": 1,
   "xtpm": 1.78,
   "fgm": 10,
   "xfgm": 9.44,
   "fga": 19
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
   "gp": 3,
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
   "xfgm": 3.24,
   "fga": 8
  },
  "Damian Lillard": {
   "gp": 13,
   "tpm": 39,
   "xtpm": 40.18,
   "fgm": 72,
   "xfgm": 75.46,
   "fga": 183
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
   "xtpm": 20.93,
   "fgm": 52,
   "xfgm": 50.6,
   "fga": 118
  },
  "Danny Wolf": {
   "gp": 8,
   "tpm": 16,
   "xtpm": 12.06,
   "fgm": 24,
   "xfgm": 25.48,
   "fga": 57
  },
  "Darius Acuff Jr.": {
   "gp": 13,
   "tpm": 40,
   "xtpm": 43.33,
   "fgm": 121,
   "xfgm": 127.07,
   "fga": 295
  },
  "Darius Garland": {
   "gp": 12,
   "tpm": 30,
   "xtpm": 28.88,
   "fgm": 89,
   "xfgm": 80.65,
   "fga": 187
  },
  "Darryn Peterson": {
   "gp": 14,
   "tpm": 32,
   "xtpm": 31.75,
   "fgm": 85,
   "xfgm": 88.56,
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
   "gp": 14,
   "tpm": 32,
   "xtpm": 28.27,
   "fgm": 86,
   "xfgm": 79.52,
   "fga": 173
  },
  "Day'Ron Sharpe": {
   "gp": 13,
   "tpm": 5,
   "xtpm": 5.75,
   "fgm": 42,
   "xfgm": 46.03,
   "fga": 81
  },
  "De'Aaron Fox": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 14.19,
   "fgm": 58,
   "xfgm": 54.74,
   "fga": 117
  },
  "De'Andre Hunter": {
   "gp": 11,
   "tpm": 23,
   "xtpm": 22.0,
   "fgm": 52,
   "xfgm": 49.2,
   "fga": 118
  },
  "De'Anthony Melton": {
   "gp": 14,
   "tpm": 31,
   "xtpm": 26.59,
   "fgm": 43,
   "xfgm": 44.11,
   "fga": 108
  },
  "DeAndre Jordan": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 6,
   "xfgm": 4.63,
   "fga": 7
  },
  "DeMar DeRozan": {
   "gp": 11,
   "tpm": 2,
   "xtpm": 5.01,
   "fgm": 36,
   "xfgm": 39.61,
   "fga": 90
  },
  "Dean Wade": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 11.34,
   "fgm": 22,
   "xfgm": 21.22,
   "fga": 48
  },
  "Deandre Ayton": {
   "gp": 15,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 31,
   "xfgm": 27.7,
   "fga": 46
  },
  "Dejounte Murray": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 9.62,
   "fgm": 44,
   "xfgm": 50.56,
   "fga": 102
  },
  "Deni Avdija": {
   "gp": 13,
   "tpm": 27,
   "xtpm": 24.7,
   "fgm": 104,
   "xfgm": 100.17,
   "fga": 205
  },
  "Dennis Schröder": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 12.38,
   "fgm": 32,
   "xfgm": 41.8,
   "fga": 88
  },
  "Derik Queen": {
   "gp": 15,
   "tpm": 10,
   "xtpm": 7.46,
   "fgm": 60,
   "xfgm": 63.32,
   "fga": 123
  },
  "Derrick Jones Jr.": {
   "gp": 11,
   "tpm": 24,
   "xtpm": 16.32,
   "fgm": 47,
   "xfgm": 41.12,
   "fga": 88
  },
  "Derrick White": {
   "gp": 14,
   "tpm": 26,
   "xtpm": 27.58,
   "fgm": 66,
   "xfgm": 64.45,
   "fga": 151
  },
  "Desmond Bane": {
   "gp": 12,
   "tpm": 48,
   "xtpm": 41.74,
   "fgm": 73,
   "xfgm": 69.7,
   "fga": 174
  },
  "Devin Booker": {
   "gp": 13,
   "tpm": 25,
   "xtpm": 25.72,
   "fgm": 107,
   "xfgm": 97.06,
   "fga": 226
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
   "xtpm": 18.08,
   "fgm": 45,
   "xfgm": 48.62,
   "fga": 113
  },
  "Dillon Brooks": {
   "gp": 13,
   "tpm": 25,
   "xtpm": 20.47,
   "fgm": 67,
   "xfgm": 68.45,
   "fga": 156
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
   "xfgm": 54.8,
   "fga": 104
  },
  "Donovan Clingan": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 10.57,
   "fgm": 58,
   "xfgm": 52.79,
   "fga": 100
  },
  "Donovan Mitchell": {
   "gp": 14,
   "tpm": 39,
   "xtpm": 35.92,
   "fgm": 119,
   "xfgm": 109.1,
   "fga": 240
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
   "gp": 12,
   "tpm": 3,
   "xtpm": 4.94,
   "fgm": 16,
   "xfgm": 19.17,
   "fga": 40
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
   "xtpm": 38.52,
   "fgm": 63,
   "xfgm": 54.88,
   "fga": 140
  },
  "Duop Reath": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 2.83,
   "fgm": 7,
   "xfgm": 5.48,
   "fga": 12
  },
  "Dylan Cardwell": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 14,
   "xfgm": 13.98,
   "fga": 25
  },
  "Dylan Harper": {
   "gp": 14,
   "tpm": 17,
   "xtpm": 17.64,
   "fgm": 99,
   "xfgm": 97.43,
   "fga": 198
  },
  "Dyson Daniels": {
   "gp": 14,
   "tpm": 2,
   "xtpm": 6.03,
   "fgm": 59,
   "xfgm": 64.02,
   "fga": 122
  },
  "Ebuka Okorie": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 4,
   "xfgm": 6.33,
   "fga": 12
  },
  "Egor Dëmin": {
   "gp": 7,
   "tpm": 15,
   "xtpm": 14.44,
   "fgm": 20,
   "xfgm": 22.3,
   "fga": 55
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
   "xtpm": 13.4,
   "fgm": 23,
   "xfgm": 22.9,
   "fga": 59
  },
  "Evan Mobley": {
   "gp": 12,
   "tpm": 23,
   "xtpm": 16.94,
   "fgm": 76,
   "xfgm": 68.98,
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
   "gp": 13,
   "tpm": 17,
   "xtpm": 23.39,
   "fgm": 115,
   "xfgm": 117.97,
   "fga": 248
  },
  "Fred VanVleet": {
   "gp": 12,
   "tpm": 34,
   "xtpm": 30.34,
   "fgm": 55,
   "xfgm": 49.42,
   "fga": 128
  },
  "GG Jackson": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 11.01,
   "fgm": 27,
   "xfgm": 33.4,
   "fga": 71
  },
  "Gary Payton II": {
   "gp": 12,
   "tpm": 4,
   "xtpm": 7.07,
   "fgm": 24,
   "xfgm": 24.88,
   "fga": 51
  },
  "Gary Trent Jr.": {
   "gp": 6,
   "tpm": 9,
   "xtpm": 8.14,
   "fgm": 13,
   "xfgm": 12.48,
   "fga": 31
  },
  "Georges Niang": {
   "gp": 14,
   "tpm": 17,
   "xtpm": 18.18,
   "fgm": 39,
   "xfgm": 37.91,
   "fga": 90
  },
  "Giannis Antetokounmpo": {
   "gp": 14,
   "tpm": 8,
   "xtpm": 11.26,
   "fgm": 155,
   "xfgm": 138.24,
   "fga": 258
  },
  "Goga Bitadze": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 20,
   "xfgm": 18.27,
   "fga": 29
  },
  "Gradey Dick": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 8.18,
   "fgm": 37,
   "xfgm": 33.83,
   "fga": 67
  },
  "Graham Ike": {
   "gp": 11,
   "tpm": 5,
   "xtpm": 3.17,
   "fgm": 19,
   "xfgm": 20.51,
   "fga": 39
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
   "xtpm": 33.84,
   "fgm": 56,
   "xfgm": 48.33,
   "fga": 125
  },
  "Gui Santos": {
   "gp": 11,
   "tpm": 6,
   "xtpm": 7.44,
   "fgm": 21,
   "xfgm": 25.69,
   "fga": 53
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
   "xtpm": 12.42,
   "fgm": 20,
   "xfgm": 19.23,
   "fga": 47
  },
  "Herbert Jones": {
   "gp": 15,
   "tpm": 12,
   "xtpm": 16.32,
   "fgm": 38,
   "xfgm": 49.43,
   "fga": 105
  },
  "Hugo González": {
   "gp": 14,
   "tpm": 7,
   "xtpm": 9.67,
   "fgm": 20,
   "xfgm": 21.12,
   "fga": 45
  },
  "Immanuel Quickley": {
   "gp": 11,
   "tpm": 28,
   "xtpm": 30.03,
   "fgm": 63,
   "xfgm": 65.0,
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
   "gp": 13,
   "tpm": 8,
   "xtpm": 12.87,
   "fgm": 27,
   "xfgm": 34.45,
   "fga": 70
  },
  "Isaiah Collier": {
   "gp": 13,
   "tpm": 6,
   "xtpm": 5.65,
   "fgm": 30,
   "xfgm": 32.09,
   "fga": 68
  },
  "Isaiah Crawford": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 3.92,
   "fgm": 10,
   "xfgm": 7.66,
   "fga": 17
  },
  "Isaiah Evans": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 2.51,
   "fgm": 1,
   "xfgm": 3.84,
   "fga": 9
  },
  "Isaiah Hartenstein": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 51,
   "xfgm": 51.15,
   "fga": 94
  },
  "Isaiah Jackson": {
   "gp": 11,
   "tpm": 2,
   "xtpm": 1.41,
   "fgm": 38,
   "xfgm": 37.56,
   "fga": 66
  },
  "Isaiah Joe": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 4.57,
   "fgm": 7,
   "xfgm": 7.34,
   "fga": 19
  },
  "Isaiah Stewart": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 7.79,
   "fgm": 43,
   "xfgm": 35.03,
   "fga": 69
  },
  "Ivica Zubac": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 39,
   "xfgm": 41.35,
   "fga": 70
  },
  "Ja Morant": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 4.94,
   "fgm": 26,
   "xfgm": 22.03,
   "fga": 48
  },
  "Ja'Kobe Walter": {
   "gp": 13,
   "tpm": 28,
   "xtpm": 30.6,
   "fgm": 45,
   "xfgm": 48.97,
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
   "gp": 15,
   "tpm": 35,
   "xtpm": 32.49,
   "fgm": 80,
   "xfgm": 79.67,
   "fga": 181
  },
  "Jabari Walker": {
   "gp": 11,
   "tpm": 7,
   "xtpm": 6.03,
   "fgm": 28,
   "xfgm": 27.83,
   "fga": 51
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
   "gp": 7,
   "tpm": 2,
   "xtpm": 3.87,
   "fgm": 2,
   "xfgm": 4.72,
   "fga": 13
  },
  "Jaden McDaniels": {
   "gp": 14,
   "tpm": 18,
   "xtpm": 21.15,
   "fgm": 96,
   "xfgm": 88.23,
   "fga": 184
  },
  "Jae'Sean Tate": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 5.16,
   "fga": 9
  },
  "Jahmai Mashack": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.88,
   "fga": 2
  },
  "Jaime Jaquez Jr.": {
   "gp": 14,
   "tpm": 28,
   "xtpm": 22.51,
   "fgm": 79,
   "xfgm": 80.81,
   "fga": 167
  },
  "Jake LaRavia": {
   "gp": 13,
   "tpm": 14,
   "xtpm": 10.36,
   "fgm": 28,
   "xfgm": 29.45,
   "fga": 60
  },
  "Jakob Poeltl": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 42,
   "xfgm": 38.01,
   "fga": 67
  },
  "Jalen Brunson": {
   "gp": 13,
   "tpm": 36,
   "xtpm": 33.12,
   "fgm": 118,
   "xfgm": 120.68,
   "fga": 272
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
   "gp": 13,
   "tpm": 13,
   "xtpm": 16.59,
   "fgm": 58,
   "xfgm": 66.01,
   "fga": 138
  },
  "Jalen Johnson": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 15.5,
   "fgm": 78,
   "xfgm": 89.31,
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
   "xtpm": 3.9,
   "fgm": 14,
   "xfgm": 14.85,
   "fga": 29
  },
  "Jalen Smith": {
   "gp": 12,
   "tpm": 22,
   "xtpm": 21.65,
   "fgm": 61,
   "xfgm": 55.68,
   "fga": 116
  },
  "Jalen Suggs": {
   "gp": 5,
   "tpm": 4,
   "xtpm": 6.77,
   "fgm": 16,
   "xfgm": 19.55,
   "fga": 44
  },
  "Jalen Williams": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.17,
   "fgm": 15,
   "xfgm": 19.15,
   "fga": 39
  },
  "Jamal Cain": {
   "gp": 12,
   "tpm": 11,
   "xtpm": 13.88,
   "fgm": 24,
   "xfgm": 23.49,
   "fga": 60
  },
  "Jamal Murray": {
   "gp": 12,
   "tpm": 41,
   "xtpm": 30.71,
   "fgm": 105,
   "xfgm": 90.1,
   "fga": 206
  },
  "Jamal Shead": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 16.59,
   "fgm": 33,
   "xfgm": 39.81,
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
   "gp": 14,
   "tpm": 36,
   "xtpm": 34.14,
   "fgm": 65,
   "xfgm": 72.44,
   "fga": 169
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
   "xtpm": 21.62,
   "fgm": 39,
   "xfgm": 34.31,
   "fga": 83
  },
  "Jarace Walker": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 16.64,
   "fgm": 30,
   "xfgm": 37.88,
   "fga": 85
  },
  "Jared McCain": {
   "gp": 14,
   "tpm": 31,
   "xtpm": 32.93,
   "fgm": 66,
   "xfgm": 70.92,
   "fga": 165
  },
  "Jaren Jackson Jr.": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 4.96,
   "fgm": 22,
   "xfgm": 20.1,
   "fga": 44
  },
  "Jaron Pierre Jr.": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 5.65,
   "fgm": 10,
   "xfgm": 12.4,
   "fga": 28
  },
  "Jarred Vanderbilt": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 9,
   "xfgm": 7.27,
   "fga": 11
  },
  "Jarrett Allen": {
   "gp": 12,
   "tpm": 3,
   "xtpm": 1.41,
   "fgm": 59,
   "xfgm": 53.46,
   "fga": 91
  },
  "Jase Richardson": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 12.82,
   "fgm": 25,
   "xfgm": 34.28,
   "fga": 78
  },
  "Javon Small": {
   "gp": 7,
   "tpm": 10,
   "xtpm": 8.83,
   "fgm": 23,
   "xfgm": 22.21,
   "fga": 52
  },
  "Javonte Green": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 14.21,
   "fgm": 21,
   "xfgm": 22.1,
   "fga": 53
  },
  "Jaxson Hayes": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 41,
   "xfgm": 35.97,
   "fga": 64
  },
  "Jay Huff": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 12.77,
   "fgm": 33,
   "xfgm": 28.61,
   "fga": 62
  },
  "Jaylen Brown": {
   "gp": 14,
   "tpm": 27,
   "xtpm": 24.82,
   "fgm": 117,
   "xfgm": 112.56,
   "fga": 237
  },
  "Jaylen Clark": {
   "gp": 12,
   "tpm": 9,
   "xtpm": 9.0,
   "fgm": 18,
   "xfgm": 18.42,
   "fga": 43
  },
  "Jaylen Wells": {
   "gp": 14,
   "tpm": 29,
   "xtpm": 25.66,
   "fgm": 53,
   "xfgm": 45.04,
   "fga": 108
  },
  "Jaylin Sellers": {
   "gp": 6,
   "tpm": 7,
   "xtpm": 6.03,
   "fgm": 8,
   "xfgm": 8.86,
   "fga": 22
  },
  "Jaylin Williams": {
   "gp": 7,
   "tpm": 5,
   "xtpm": 8.56,
   "fgm": 6,
   "xfgm": 12.05,
   "fga": 30
  },
  "Jaylon Tyson": {
   "gp": 8,
   "tpm": 13,
   "xtpm": 14.6,
   "fgm": 28,
   "xfgm": 30.57,
   "fga": 68
  },
  "Jayson Kent": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 3.18,
   "fgm": 6,
   "xfgm": 7.36,
   "fga": 16
  },
  "Jayson Tatum": {
   "gp": 13,
   "tpm": 34,
   "xtpm": 36.32,
   "fgm": 108,
   "xfgm": 115.63,
   "fga": 254
  },
  "Jerami Grant": {
   "gp": 13,
   "tpm": 24,
   "xtpm": 18.99,
   "fgm": 52,
   "xfgm": 50.72,
   "fga": 110
  },
  "Jeremiah Fears": {
   "gp": 15,
   "tpm": 16,
   "xtpm": 20.84,
   "fgm": 90,
   "xfgm": 101.92,
   "fga": 203
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
   "xtpm": 3.18,
   "fgm": 5,
   "xfgm": 4.69,
   "fga": 12
  },
  "Jevon Carter": {
   "gp": 9,
   "tpm": 11,
   "xtpm": 13.12,
   "fgm": 14,
   "xfgm": 16.57,
   "fga": 44
  },
  "Joan Beringer": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 30,
   "xfgm": 31.7,
   "fga": 50
  },
  "Jock Landale": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 7.83,
   "fgm": 22,
   "xfgm": 23.42,
   "fga": 48
  },
  "Joel Embiid": {
   "gp": 12,
   "tpm": 6,
   "xtpm": 14.09,
   "fgm": 74,
   "xfgm": 87.82,
   "fga": 185
  },
  "John Collins": {
   "gp": 12,
   "tpm": 14,
   "xtpm": 12.84,
   "fgm": 50,
   "xfgm": 54.92,
   "fga": 109
  },
  "John Tonje": {
   "gp": 2,
   "tpm": 2,
   "xtpm": 1.78,
   "fgm": 3,
   "xfgm": 3.97,
   "fga": 9
  },
  "Jonathan Kuminga": {
   "gp": 14,
   "tpm": 22,
   "xtpm": 20.21,
   "fgm": 62,
   "xfgm": 70.24,
   "fga": 143
  },
  "Jonathan Mogbo": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 2.16,
   "fgm": 6,
   "xfgm": 8.54,
   "fga": 17
  },
  "Jordan Clarkson": {
   "gp": 11,
   "tpm": 6,
   "xtpm": 3.92,
   "fgm": 24,
   "xfgm": 23.67,
   "fga": 47
  },
  "Jordan Goodwin": {
   "gp": 9,
   "tpm": 19,
   "xtpm": 17.01,
   "fgm": 31,
   "xfgm": 28.57,
   "fga": 69
  },
  "Jordan Hawkins": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 5.68,
   "fgm": 10,
   "xfgm": 10.39,
   "fga": 26
  },
  "Jordan McLaughlin": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 3.22,
   "fgm": 10,
   "xfgm": 12.23,
   "fga": 25
  },
  "Jordan Poole": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 12.0,
   "fgm": 17,
   "xfgm": 24.67,
   "fga": 56
  },
  "Jordan Walsh": {
   "gp": 14,
   "tpm": 12,
   "xtpm": 14.31,
   "fgm": 27,
   "xfgm": 29.88,
   "fga": 65
  },
  "Jose Alvarado": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 3.18,
   "fgm": 4,
   "xfgm": 7.8,
   "fga": 17
  },
  "Josh Dix": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 5.66,
   "fgm": 7,
   "xfgm": 11.76,
   "fga": 27
  },
  "Josh Giddey": {
   "gp": 13,
   "tpm": 16,
   "xtpm": 17.63,
   "fgm": 48,
   "xfgm": 55.85,
   "fga": 118
  },
  "Josh Green": {
   "gp": 12,
   "tpm": 8,
   "xtpm": 9.65,
   "fgm": 16,
   "xfgm": 19.49,
   "fga": 45
  },
  "Josh Hart": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 15.95,
   "fgm": 25,
   "xfgm": 32.55,
   "fga": 74
  },
  "Josh Minott": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 7.79,
   "fgm": 11,
   "xfgm": 12.19,
   "fga": 29
  },
  "Josh Okogie": {
   "gp": 13,
   "tpm": 10,
   "xtpm": 9.62,
   "fgm": 15,
   "xfgm": 21.66,
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
   "gp": 13,
   "tpm": 30,
   "xtpm": 24.8,
   "fgm": 53,
   "xfgm": 46.3,
   "fga": 110
  },
  "Julian Champagnie": {
   "gp": 14,
   "tpm": 36,
   "xtpm": 30.5,
   "fgm": 44,
   "xfgm": 38.81,
   "fga": 102
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
   "gp": 13,
   "tpm": 20,
   "xtpm": 20.88,
   "fgm": 91,
   "xfgm": 95.45,
   "fga": 195
  },
  "Justin Champagnie": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.48,
   "fgm": 12,
   "xfgm": 10.85,
   "fga": 20
  },
  "Justin Edwards": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 2.03,
   "fga": 4
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
   "gp": 13,
   "tpm": 27,
   "xtpm": 23.94,
   "fgm": 101,
   "xfgm": 95.76,
   "fga": 189
  },
  "Karlo Matković": {
   "gp": 14,
   "tpm": 17,
   "xtpm": 15.77,
   "fgm": 39,
   "xfgm": 34.27,
   "fga": 73
  },
  "Kasparas Jakučionis": {
   "gp": 13,
   "tpm": 11,
   "xtpm": 14.16,
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
   "xtpm": 20.12,
   "fgm": 35,
   "xfgm": 41.38,
   "fga": 99
  },
  "Keegan Murray": {
   "gp": 6,
   "tpm": 6,
   "xtpm": 8.53,
   "fgm": 21,
   "xfgm": 24.58,
   "fga": 59
  },
  "Kel'el Ware": {
   "gp": 14,
   "tpm": 9,
   "xtpm": 13.42,
   "fgm": 44,
   "xfgm": 57.6,
   "fga": 110
  },
  "Keldon Johnson": {
   "gp": 14,
   "tpm": 5,
   "xtpm": 7.79,
   "fgm": 47,
   "xfgm": 52.66,
   "fga": 99
  },
  "Kelly Oubre Jr.": {
   "gp": 12,
   "tpm": 11,
   "xtpm": 16.69,
   "fgm": 49,
   "xfgm": 52.03,
   "fga": 109
  },
  "Kenrich Williams": {
   "gp": 14,
   "tpm": 19,
   "xtpm": 15.21,
   "fgm": 36,
   "xfgm": 35.48,
   "fga": 80
  },
  "Kentavious Caldwell-Pope": {
   "gp": 15,
   "tpm": 20,
   "xtpm": 16.32,
   "fgm": 27,
   "xfgm": 24.39,
   "fga": 62
  },
  "Keon Ellis": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 12.37,
   "fgm": 21,
   "xfgm": 22.86,
   "fga": 54
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
   "gp": 15,
   "tpm": 22,
   "xtpm": 20.93,
   "fgm": 99,
   "xfgm": 88.86,
   "fga": 204
  },
  "Kevin Huerter": {
   "gp": 12,
   "tpm": 19,
   "xtpm": 19.47,
   "fgm": 45,
   "xfgm": 41.06,
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
   "xtpm": 28.2,
   "fgm": 86,
   "xfgm": 86.86,
   "fga": 204
  },
  "Khaman Maluach": {
   "gp": 13,
   "tpm": 2,
   "xtpm": 2.5,
   "fgm": 39,
   "xfgm": 37.02,
   "fga": 64
  },
  "Khris Middleton": {
   "gp": 7,
   "tpm": 5,
   "xtpm": 3.94,
   "fgm": 9,
   "xfgm": 7.36,
   "fga": 18
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
   "gp": 13,
   "tpm": 53,
   "xtpm": 43.25,
   "fgm": 69,
   "xfgm": 57.0,
   "fga": 153
  },
  "Koa Peat": {
   "gp": 8,
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
   "xfgm": 10.19,
   "fga": 23
  },
  "Kobe Sanders": {
   "gp": 12,
   "tpm": 18,
   "xtpm": 17.64,
   "fgm": 35,
   "xfgm": 35.49,
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
   "xtpm": 8.86,
   "fgm": 34,
   "xfgm": 35.04,
   "fga": 69
  },
  "Kris Murray": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 5.8,
   "fgm": 4,
   "xfgm": 8.22,
   "fga": 20
  },
  "Kyle Anderson": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 7.4,
   "fga": 15
  },
  "Kyle Filipowski": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 2.15,
   "fgm": 11,
   "xfgm": 12.91,
   "fga": 26
  },
  "Kyle Kuzma": {
   "gp": 14,
   "tpm": 23,
   "xtpm": 25.18,
   "fgm": 58,
   "xfgm": 59.64,
   "fga": 129
  },
  "Kyrie Irving": {
   "gp": 11,
   "tpm": 39,
   "xtpm": 34.65,
   "fgm": 90,
   "xfgm": 80.53,
   "fga": 190
  },
  "Kyshawn George": {
   "gp": 15,
   "tpm": 35,
   "xtpm": 29.29,
   "fgm": 98,
   "xfgm": 91.42,
   "fga": 200
  },
  "LJ Cryer": {
   "gp": 11,
   "tpm": 17,
   "xtpm": 15.2,
   "fgm": 23,
   "xfgm": 23.63,
   "fga": 61
  },
  "LaMelo Ball": {
   "gp": 14,
   "tpm": 49,
   "xtpm": 47.33,
   "fgm": 87,
   "xfgm": 85.78,
   "fga": 208
  },
  "Labaron Philon Jr.": {
   "gp": 10,
   "tpm": 3,
   "xtpm": 3.17,
   "fgm": 7,
   "xfgm": 8.21,
   "fga": 20
  },
  "Landry Shamet": {
   "gp": 13,
   "tpm": 29,
   "xtpm": 24.45,
   "fgm": 46,
   "xfgm": 40.42,
   "fga": 96
  },
  "Larry Nance Jr.": {
   "gp": 13,
   "tpm": 12,
   "xtpm": 10.74,
   "fgm": 20,
   "xfgm": 18.61,
   "fga": 43
  },
  "Lauri Markkanen": {
   "gp": 8,
   "tpm": 29,
   "xtpm": 25.77,
   "fgm": 44,
   "xfgm": 46.4,
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
   "xtpm": 14.11,
   "fgm": 62,
   "xfgm": 70.21,
   "fga": 140
  },
  "Leaky Black": {
   "gp": 9,
   "tpm": 14,
   "xtpm": 10.66,
   "fgm": 16,
   "xfgm": 13.93,
   "fga": 36
  },
  "Leonard Miller": {
   "gp": 11,
   "tpm": 5,
   "xtpm": 9.92,
   "fgm": 24,
   "xfgm": 27.7,
   "fga": 56
  },
  "Liam McNeeley": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 4.24,
   "fgm": 7,
   "xfgm": 10.77,
   "fga": 24
  },
  "Luguentz Dort": {
   "gp": 14,
   "tpm": 22,
   "xtpm": 23.31,
   "fgm": 42,
   "xfgm": 52.93,
   "fga": 115
  },
  "Luka Dončić": {
   "gp": 12,
   "tpm": 65,
   "xtpm": 56.41,
   "fgm": 144,
   "xfgm": 120.61,
   "fga": 296
  },
  "Luka Garza": {
   "gp": 14,
   "tpm": 15,
   "xtpm": 12.8,
   "fgm": 26,
   "xfgm": 29.96,
   "fga": 65
  },
  "Luke Kennard": {
   "gp": 12,
   "tpm": 26,
   "xtpm": 20.21,
   "fgm": 40,
   "xfgm": 29.06,
   "fga": 76
  },
  "Luke Kornet": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 18,
   "xfgm": 23.08,
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
   "gp": 9,
   "tpm": 1,
   "xtpm": 1.42,
   "fgm": 3,
   "xfgm": 6.48,
   "fga": 13
  },
  "Malik Dia": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 2.62,
   "fga": 6
  },
  "Malik Monk": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 14.81,
   "fgm": 34,
   "xfgm": 38.11,
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
   "xtpm": 11.75,
   "fgm": 23,
   "xfgm": 21.58,
   "fga": 54
  },
  "Marcus Smart": {
   "gp": 9,
   "tpm": 16,
   "xtpm": 14.23,
   "fgm": 25,
   "xfgm": 22.95,
   "fga": 57
  },
  "Mario Hezonja": {
   "gp": 15,
   "tpm": 17,
   "xtpm": 19.19,
   "fgm": 53,
   "xfgm": 52.12,
   "fga": 111
  },
  "Marvin Bagley III": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 1.41,
   "fgm": 25,
   "xfgm": 25.98,
   "fga": 47
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
   "gp": 13,
   "tpm": 24,
   "xtpm": 24.1,
   "fgm": 58,
   "xfgm": 59.86,
   "fga": 129
  },
  "Matisse Thybulle": {
   "gp": 14,
   "tpm": 24,
   "xtpm": 21.68,
   "fgm": 35,
   "xfgm": 32.46,
   "fga": 80
  },
  "Max Christie": {
   "gp": 11,
   "tpm": 12,
   "xtpm": 15.63,
   "fgm": 21,
   "xfgm": 25.93,
   "fga": 63
  },
  "Max Strus": {
   "gp": 6,
   "tpm": 13,
   "xtpm": 13.09,
   "fgm": 19,
   "xfgm": 21.45,
   "fga": 51
  },
  "Meleek Thomas": {
   "gp": 12,
   "tpm": 30,
   "xtpm": 25.13,
   "fgm": 62,
   "xfgm": 57.39,
   "fga": 132
  },
  "Micah Peavy": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 6.45,
   "fgm": 11,
   "xfgm": 16.94,
   "fga": 38
  },
  "Micah Potter": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 2.46,
   "fgm": 7,
   "xfgm": 6.19,
   "fga": 15
  },
  "Michael Porter Jr.": {
   "gp": 12,
   "tpm": 41,
   "xtpm": 38.45,
   "fgm": 85,
   "xfgm": 79.12,
   "fga": 184
  },
  "Mikal Bridges": {
   "gp": 13,
   "tpm": 11,
   "xtpm": 14.26,
   "fgm": 36,
   "xfgm": 42.87,
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
   "gp": 9,
   "tpm": 17,
   "xtpm": 17.98,
   "fgm": 31,
   "xfgm": 39.99,
   "fga": 93
  },
  "Miles Bridges": {
   "gp": 13,
   "tpm": 23,
   "xtpm": 26.27,
   "fgm": 72,
   "xfgm": 72.31,
   "fga": 158
  },
  "Miles McBride": {
   "gp": 13,
   "tpm": 27,
   "xtpm": 22.02,
   "fgm": 34,
   "xfgm": 30.44,
   "fga": 78
  },
  "Mitchell Robinson": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 30,
   "xfgm": 30.39,
   "fga": 47
  },
  "Mo Bamba": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 2.13,
   "fgm": 38,
   "xfgm": 30.31,
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
   "xfgm": 37.6,
   "fga": 72
  },
  "Moritz Wagner": {
   "gp": 13,
   "tpm": 15,
   "xtpm": 8.83,
   "fgm": 47,
   "xfgm": 43.17,
   "fga": 80
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
   "xfgm": 42.46,
   "fga": 68
  },
  "Myles Turner": {
   "gp": 13,
   "tpm": 18,
   "xtpm": 21.58,
   "fgm": 36,
   "xfgm": 42.39,
   "fga": 100
  },
  "Myron Gardner": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 4.99,
   "fgm": 8,
   "xfgm": 7.64,
   "fga": 18
  },
  "Naji Marshall": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 13.14,
   "fgm": 49,
   "xfgm": 49.38,
   "fga": 108
  },
  "Nate Ament": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 12.12,
   "fgm": 33,
   "xfgm": 33.96,
   "fga": 72
  },
  "Naz Reid": {
   "gp": 13,
   "tpm": 31,
   "xtpm": 31.84,
   "fgm": 87,
   "xfgm": 97.69,
   "fga": 218
  },
  "Neemias Queta": {
   "gp": 13,
   "tpm": 4,
   "xtpm": 1.79,
   "fgm": 43,
   "xfgm": 43.76,
   "fga": 75
  },
  "Nic Claxton": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 11,
   "xfgm": 11.0,
   "fga": 18
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
   "gp": 6,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 1.45,
   "fga": 3
  },
  "Nickeil Alexander-Walker": {
   "gp": 14,
   "tpm": 50,
   "xtpm": 51.36,
   "fgm": 98,
   "xfgm": 104.12,
   "fga": 238
  },
  "Nikola Jokić": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 17.61,
   "fgm": 113,
   "xfgm": 101.16,
   "fga": 219
  },
  "Nikola Jović": {
   "gp": 8,
   "tpm": 1,
   "xtpm": 3.92,
   "fgm": 6,
   "xfgm": 10.05,
   "fga": 22
  },
  "Nikola Topić": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 4,
   "xfgm": 4.34,
   "fga": 10
  },
  "Nikola Vučević": {
   "gp": 12,
   "tpm": 4,
   "xtpm": 7.09,
   "fgm": 13,
   "xfgm": 14.99,
   "fga": 36
  },
  "Nique Clifford": {
   "gp": 12,
   "tpm": 2,
   "xtpm": 4.96,
   "fgm": 13,
   "xfgm": 13.18,
   "fga": 31
  },
  "Noa Essengue": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 8.88,
   "fgm": 19,
   "xfgm": 23.38,
   "fga": 49
  },
  "Noah Clowney": {
   "gp": 13,
   "tpm": 12,
   "xtpm": 14.24,
   "fgm": 30,
   "xfgm": 31.17,
   "fga": 70
  },
  "Nolan Traore": {
   "gp": 12,
   "tpm": 20,
   "xtpm": 16.64,
   "fgm": 61,
   "xfgm": 54.51,
   "fga": 120
  },
  "Norchad Omier": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.07,
   "fgm": 7,
   "xfgm": 5.25,
   "fga": 10
  },
  "Norman Powell": {
   "gp": 11,
   "tpm": 24,
   "xtpm": 26.07,
   "fgm": 73,
   "xfgm": 70.61,
   "fga": 159
  },
  "OG Anunoby": {
   "gp": 13,
   "tpm": 28,
   "xtpm": 30.6,
   "fgm": 60,
   "xfgm": 72.02,
   "fga": 154
  },
  "Obi Toppin": {
   "gp": 11,
   "tpm": 17,
   "xtpm": 17.46,
   "fgm": 49,
   "xfgm": 46.73,
   "fga": 97
  },
  "Olivier-Maxence Prosper": {
   "gp": 8,
   "tpm": 3,
   "xtpm": 2.16,
   "fgm": 15,
   "xfgm": 12.89,
   "fga": 24
  },
  "Onyeka Okongwu": {
   "gp": 14,
   "tpm": 23,
   "xtpm": 24.73,
   "fgm": 75,
   "xfgm": 71.57,
   "fga": 151
  },
  "Oscar Tshiebwe": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 13,
   "xfgm": 11.45,
   "fga": 18
  },
  "Oso Ighodaro": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 29,
   "xfgm": 28.78,
   "fga": 50
  },
  "Ousmane Dieng": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 7.09,
   "fgm": 14,
   "xfgm": 14.78,
   "fga": 34
  },
  "P.J. Washington": {
   "gp": 14,
   "tpm": 29,
   "xtpm": 30.93,
   "fgm": 62,
   "xfgm": 67.04,
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
   "xtpm": 1.44,
   "fgm": 5,
   "xfgm": 4.49,
   "fga": 9
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
   "gp": 13,
   "tpm": 21,
   "xtpm": 21.97,
   "fgm": 109,
   "xfgm": 99.48,
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
   "gp": 6,
   "tpm": 7,
   "xtpm": 6.7,
   "fgm": 17,
   "xfgm": 16.58,
   "fga": 35
  },
  "Paul George": {
   "gp": 12,
   "tpm": 43,
   "xtpm": 34.26,
   "fgm": 90,
   "xfgm": 79.98,
   "fga": 188
  },
  "Paul Reed": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 3.2,
   "fgm": 56,
   "xfgm": 54.66,
   "fga": 101
  },
  "Payton Pritchard": {
   "gp": 14,
   "tpm": 33,
   "xtpm": 32.08,
   "fgm": 64,
   "xfgm": 63.59,
   "fga": 154
  },
  "Pelle Larsson": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 11.28,
   "fgm": 36,
   "xfgm": 35.41,
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
   "gp": 12,
   "tpm": 12,
   "xtpm": 18.5,
   "fgm": 48,
   "xfgm": 61.42,
   "fga": 128
  },
  "Precious Achiuwa": {
   "gp": 11,
   "tpm": 4,
   "xtpm": 3.9,
   "fgm": 49,
   "xfgm": 46.68,
   "fga": 92
  },
  "Quentin Grimes": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 13.81,
   "fgm": 35,
   "xfgm": 34.59,
   "fga": 75
  },
  "Quenton Jackson": {
   "gp": 14,
   "tpm": 15,
   "xtpm": 15.53,
   "fgm": 47,
   "xfgm": 47.05,
   "fga": 100
  },
  "Quinten Post": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 7.09,
   "fgm": 18,
   "xfgm": 17.14,
   "fga": 38
  },
  "RJ Barrett": {
   "gp": 13,
   "tpm": 19,
   "xtpm": 23.31,
   "fgm": 104,
   "xfgm": 110.51,
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
   "gp": 3,
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
   "gp": 12,
   "tpm": 25,
   "xtpm": 28.97,
   "fgm": 39,
   "xfgm": 42.64,
   "fga": 108
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
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 31,
   "xfgm": 30.15,
   "fga": 49
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
   "xtpm": 4.29,
   "fgm": 7,
   "xfgm": 7.36,
   "fga": 18
  },
  "Ronald Holland II": {
   "gp": 12,
   "tpm": 8,
   "xtpm": 9.27,
   "fgm": 21,
   "xfgm": 29.02,
   "fga": 61
  },
  "Royce O'Neale": {
   "gp": 13,
   "tpm": 17,
   "xtpm": 19.07,
   "fgm": 22,
   "xfgm": 23.03,
   "fga": 60
  },
  "Rudy Gobert": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 1.06,
   "fgm": 37,
   "xfgm": 48.6,
   "fga": 79
  },
  "Rui Hachimura": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 20.56,
   "fgm": 44,
   "xfgm": 53.16,
   "fga": 120
  },
  "Ryan Conwell": {
   "gp": 12,
   "tpm": 16,
   "xtpm": 17.39,
   "fgm": 24,
   "xfgm": 26.56,
   "fga": 67
  },
  "Ryan Dunn": {
   "gp": 13,
   "tpm": 11,
   "xtpm": 8.63,
   "fgm": 25,
   "xfgm": 24.91,
   "fga": 52
  },
  "Ryan Kalkbrenner": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 22,
   "xfgm": 21.58,
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
   "xtpm": 21.58,
   "fgm": 51,
   "xfgm": 59.25,
   "fga": 131
  },
  "Saddiq Bey": {
   "gp": 15,
   "tpm": 35,
   "xtpm": 30.88,
   "fgm": 85,
   "xfgm": 81.65,
   "fga": 185
  },
  "Sam Hauser": {
   "gp": 14,
   "tpm": 33,
   "xtpm": 25.17,
   "fgm": 41,
   "xfgm": 31.67,
   "fga": 84
  },
  "Sam Merrill": {
   "gp": 9,
   "tpm": 14,
   "xtpm": 15.27,
   "fgm": 22,
   "xfgm": 22.93,
   "fga": 57
  },
  "Sandro Mamukelashvili": {
   "gp": 14,
   "tpm": 21,
   "xtpm": 19.5,
   "fgm": 53,
   "xfgm": 50.46,
   "fga": 111
  },
  "Santi Aldama": {
   "gp": 5,
   "tpm": 6,
   "xtpm": 6.4,
   "fgm": 14,
   "xfgm": 14.54,
   "fga": 32
  },
  "Scoot Henderson": {
   "gp": 13,
   "tpm": 12,
   "xtpm": 19.87,
   "fgm": 35,
   "xfgm": 46.41,
   "fga": 110
  },
  "Scottie Barnes": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 12.12,
   "fgm": 88,
   "xfgm": 88.36,
   "fga": 185
  },
  "Scotty Pippen Jr.": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 3.18,
   "fgm": 11,
   "xfgm": 11.07,
   "fga": 26
  },
  "Sergio de Larrea": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 1.76,
   "fgm": 9,
   "xfgm": 7.62,
   "fga": 18
  },
  "Shai Gilgeous-Alexander": {
   "gp": 14,
   "tpm": 33,
   "xtpm": 31.33,
   "fgm": 152,
   "xfgm": 141.97,
   "fga": 320
  },
  "Sidy Cissoko": {
   "gp": 13,
   "tpm": 17,
   "xtpm": 17.14,
   "fgm": 31,
   "xfgm": 30.13,
   "fga": 69
  },
  "Simone Fontecchio": {
   "gp": 8,
   "tpm": 4,
   "xtpm": 6.4,
   "fgm": 8,
   "xfgm": 9.89,
   "fga": 24
  },
  "Sion James": {
   "gp": 13,
   "tpm": 15,
   "xtpm": 21.05,
   "fgm": 26,
   "xfgm": 34.24,
   "fga": 82
  },
  "Spencer Jones": {
   "gp": 5,
   "tpm": 5,
   "xtpm": 3.6,
   "fgm": 9,
   "xfgm": 8.44,
   "fga": 18
  },
  "Stephen Curry": {
   "gp": 10,
   "tpm": 43,
   "xtpm": 33.17,
   "fgm": 80,
   "xfgm": 65.58,
   "fga": 160
  },
  "Stephon Castle": {
   "gp": 14,
   "tpm": 28,
   "xtpm": 29.32,
   "fgm": 83,
   "xfgm": 89.74,
   "fga": 194
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
   "xtpm": 14.18,
   "fgm": 19,
   "xfgm": 25.45,
   "fga": 62
  },
  "T.J. McConnell": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 16,
   "xfgm": 14.61,
   "fga": 32
  },
  "Tacko Fall": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Tari Eason": {
   "gp": 15,
   "tpm": 15,
   "xtpm": 20.34,
   "fgm": 61,
   "xfgm": 69.08,
   "fga": 141
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
   "xtpm": 1.42,
   "fgm": 2,
   "xfgm": 2.52,
   "fga": 6
  },
  "Taylor Hendricks": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 5.71,
   "fgm": 24,
   "xfgm": 18.48,
   "fga": 37
  },
  "Terance Mann": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 4.29,
   "fgm": 4,
   "xfgm": 6.87,
   "fga": 17
  },
  "Terrence Shannon Jr": {
   "gp": 11,
   "tpm": 16,
   "xtpm": 14.88,
   "fgm": 43,
   "xfgm": 44.45,
   "fga": 94
  },
  "Thomas Bryant": {
   "gp": 9,
   "tpm": 10,
   "xtpm": 8.81,
   "fgm": 29,
   "xfgm": 26.14,
   "fga": 54
  },
  "Tidjane Salaün": {
   "gp": 12,
   "tpm": 14,
   "xtpm": 13.14,
   "fgm": 24,
   "xfgm": 23.04,
   "fga": 53
  },
  "Tim Hardaway Jr.": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 14.12,
   "fgm": 15,
   "xfgm": 23.59,
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
   "xfgm": 5.87,
   "fga": 11
  },
  "Toumani Camara": {
   "gp": 13,
   "tpm": 34,
   "xtpm": 30.25,
   "fgm": 56,
   "xfgm": 48.27,
   "fga": 117
  },
  "Trae Young": {
   "gp": 15,
   "tpm": 30,
   "xtpm": 34.56,
   "fgm": 73,
   "xfgm": 80.7,
   "fga": 193
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
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 0,
   "xfgm": 1.14,
   "fga": 3
  },
  "Tre Johnson": {
   "gp": 13,
   "tpm": 18,
   "xtpm": 25.12,
   "fgm": 47,
   "xfgm": 52.15,
   "fga": 129
  },
  "Tre Jones": {
   "gp": 13,
   "tpm": 5,
   "xtpm": 5.68,
   "fgm": 51,
   "xfgm": 56.0,
   "fga": 101
  },
  "Tre Mann": {
   "gp": 7,
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
   "xfgm": 12.46,
   "fga": 22
  },
  "Trevon Brazile": {
   "gp": 12,
   "tpm": 9,
   "xtpm": 9.62,
   "fgm": 34,
   "xfgm": 28.77,
   "fga": 58
  },
  "Trey Lyles": {
   "gp": 14,
   "tpm": 13,
   "xtpm": 14.21,
   "fgm": 29,
   "xfgm": 26.22,
   "fga": 61
  },
  "Trey Murphy III": {
   "gp": 9,
   "tpm": 20,
   "xtpm": 18.68,
   "fgm": 47,
   "xfgm": 45.83,
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
   "gp": 11,
   "tpm": 37,
   "xtpm": 32.96,
   "fgm": 59,
   "xfgm": 51.98,
   "fga": 129
  },
  "Ty Jerome": {
   "gp": 11,
   "tpm": 28,
   "xtpm": 27.49,
   "fgm": 98,
   "xfgm": 83.79,
   "fga": 202
  },
  "Tyler Herro": {
   "gp": 13,
   "tpm": 35,
   "xtpm": 34.23,
   "fgm": 91,
   "xfgm": 94.35,
   "fga": 213
  },
  "Tyler Kolek": {
   "gp": 11,
   "tpm": 6,
   "xtpm": 7.07,
   "fgm": 14,
   "xfgm": 15.42,
   "fga": 35
  },
  "Tyrese Haliburton": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 9.58,
   "fgm": 32,
   "xfgm": 26.83,
   "fga": 62
  },
  "Tyrese Maxey": {
   "gp": 15,
   "tpm": 41,
   "xtpm": 38.1,
   "fgm": 133,
   "xfgm": 124.88,
   "fga": 266
  },
  "Tyrese Proctor": {
   "gp": 14,
   "tpm": 25,
   "xtpm": 19.45,
   "fgm": 50,
   "xfgm": 41.39,
   "fga": 96
  },
  "Tyus Jones": {
   "gp": 12,
   "tpm": 3,
   "xtpm": 4.57,
   "fgm": 9,
   "xfgm": 11.1,
   "fga": 26
  },
  "VJ Edgecombe": {
   "gp": 14,
   "tpm": 21,
   "xtpm": 23.06,
   "fgm": 72,
   "xfgm": 75.4,
   "fga": 157
  },
  "Victor Wembanyama": {
   "gp": 14,
   "tpm": 27,
   "xtpm": 29.94,
   "fgm": 147,
   "xfgm": 137.42,
   "fga": 275
  },
  "Vít Krejčí": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 5.29,
   "fgm": 6,
   "xfgm": 7.9,
   "fga": 20
  },
  "Walker Kessler": {
   "gp": 14,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 85,
   "xfgm": 78.15,
   "fga": 125
  },
  "Walter Clayton Jr.": {
   "gp": 13,
   "tpm": 16,
   "xtpm": 15.51,
   "fgm": 31,
   "xfgm": 30.97,
   "fga": 73
  },
  "Wendell Carter Jr.": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 11.73,
   "fgm": 61,
   "xfgm": 52.28,
   "fga": 106
  },
  "Will Richard": {
   "gp": 13,
   "tpm": 14,
   "xtpm": 11.38,
   "fgm": 28,
   "xfgm": 28.17,
   "fga": 61
  },
  "Will Riley": {
   "gp": 12,
   "tpm": 4,
   "xtpm": 4.27,
   "fgm": 12,
   "xfgm": 11.28,
   "fga": 24
  },
  "Yang Hansen": {
   "gp": 8,
   "tpm": 5,
   "xtpm": 3.52,
   "fgm": 8,
   "xfgm": 7.91,
   "fga": 18
  },
  "Yaxel Lendeborg": {
   "gp": 14,
   "tpm": 31,
   "xtpm": 27.9,
   "fgm": 98,
   "xfgm": 96.35,
   "fga": 206
  },
  "Yves Missi": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 12,
   "xfgm": 11.43,
   "fga": 20
  },
  "Zaccharie Risacher": {
   "gp": 14,
   "tpm": 15,
   "xtpm": 17.33,
   "fgm": 50,
   "xfgm": 51.52,
   "fga": 108
  },
  "Zach Collins": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 2.83,
   "fgm": 9,
   "xfgm": 14.88,
   "fga": 28
  },
  "Zach Edey": {
   "gp": 11,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 37,
   "xfgm": 37.95,
   "fga": 67
  },
  "Zach LaVine": {
   "gp": 12,
   "tpm": 34,
   "xtpm": 30.71,
   "fgm": 85,
   "xfgm": 72.98,
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
   "xtpm": 15.57,
   "fgm": 42,
   "xfgm": 33.77,
   "fga": 74
  },
  "Zion Williamson": {
   "gp": 14,
   "tpm": 6,
   "xtpm": 4.59,
   "fgm": 106,
   "xfgm": 105.26,
   "fga": 179
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
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.31,
   "fga": 3
  }
 }
};
