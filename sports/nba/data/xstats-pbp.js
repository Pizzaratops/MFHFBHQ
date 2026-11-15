// ============================================================
//  x3PM / xFGM der laufenden Saison aus Play-by-Play
//  Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data (nicht unser Projekt, frei veröffentlichte Daten)
//  Methode: Josh Lloyd (joshlloydfantasy.com/research/xstats-method)
//  Erzeugt von scripts/xstats-pbp.py am 2026-11-15 · Saison 2026-27 · Stand 2026-11-14
//  Wird von scripts/build-live-projections.js gelesen (3PM, FG%).
//  META {"season": "2026-27", "assetUpdated": "Sun, 15 Nov 2026 14:26:37 GMT"}
// ============================================================
const XSTATS_PBP = {
 "meta": {
  "season": "2026-27",
  "through": "2026-11-14",
  "players": 469,
  "games": 188,
  "shots": 33095,
  "assetUpdated": "Sun, 15 Nov 2026 14:26:37 GMT",
  "zoneRates": {
   "C3": 0.3711,
   "AB3": 0.3516,
   "RA": 0.6583,
   "PAINT": 0.4389,
   "MID": 0.407
  },
  "source": "Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data"
 },
 "players": {
  "AJ Dybantsa": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 10.61,
   "fgm": 50,
   "xfgm": 60.04,
   "fga": 122
  },
  "AJ Green": {
   "gp": 13,
   "tpm": 23,
   "xtpm": 19.18,
   "fgm": 26,
   "xfgm": 22.38,
   "fga": 61
  },
  "AJ Johnson": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 3.86,
   "fga": 7
  },
  "Aaron Gordon": {
   "gp": 11,
   "tpm": 12,
   "xtpm": 15.61,
   "fgm": 39,
   "xfgm": 45.88,
   "fga": 98
  },
  "Aaron Nesmith": {
   "gp": 11,
   "tpm": 20,
   "xtpm": 22.52,
   "fgm": 45,
   "xfgm": 49.51,
   "fga": 113
  },
  "Aaron Wiggins": {
   "gp": 13,
   "tpm": 37,
   "xtpm": 32.52,
   "fgm": 72,
   "xfgm": 65.44,
   "fga": 157
  },
  "Ace Bailey": {
   "gp": 13,
   "tpm": 21,
   "xtpm": 27.31,
   "fgm": 74,
   "xfgm": 68.65,
   "fga": 158
  },
  "Aday Mara": {
   "gp": 13,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 49,
   "xfgm": 46.81,
   "fga": 79
  },
  "Adem Bona": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 8,
   "xfgm": 12.03,
   "fga": 21
  },
  "Adou Thiero": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 4,
   "xfgm": 6.3,
   "fga": 10
  },
  "Ajay Mitchell": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 12.09,
   "fgm": 81,
   "xfgm": 76.28,
   "fga": 155
  },
  "Al Horford": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 11.66,
   "fgm": 18,
   "xfgm": 19.5,
   "fga": 48
  },
  "Alex Caruso": {
   "gp": 10,
   "tpm": 16,
   "xtpm": 12.72,
   "fgm": 22,
   "xfgm": 20.77,
   "fga": 51
  },
  "Alex Karaban": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.76,
   "fgm": 2,
   "xfgm": 2.42,
   "fga": 6
  },
  "Alex Morales": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 2.85,
   "fgm": 7,
   "xfgm": 7.24,
   "fga": 15
  },
  "Alex Sarr": {
   "gp": 12,
   "tpm": 11,
   "xtpm": 14.14,
   "fgm": 53,
   "xfgm": 49.16,
   "fga": 100
  },
  "Alijah Martin": {
   "gp": 11,
   "tpm": 13,
   "xtpm": 8.17,
   "fgm": 26,
   "xfgm": 18.92,
   "fga": 40
  },
  "Allen Graves": {
   "gp": 12,
   "tpm": 7,
   "xtpm": 8.56,
   "fgm": 20,
   "xfgm": 22.13,
   "fga": 47
  },
  "Alperen Sengun": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 8.48,
   "fgm": 98,
   "xfgm": 94.65,
   "fga": 180
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
   "gp": 13,
   "tpm": 2,
   "xtpm": 3.93,
   "fgm": 75,
   "xfgm": 80.94,
   "fga": 146
  },
  "Andre Drummond": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 20,
   "xfgm": 30.41,
   "fga": 49
  },
  "Andrew Nembhard": {
   "gp": 11,
   "tpm": 25,
   "xtpm": 21.86,
   "fgm": 62,
   "xfgm": 60.22,
   "fga": 139
  },
  "Andrew Wiggins": {
   "gp": 13,
   "tpm": 16,
   "xtpm": 17.72,
   "fgm": 43,
   "xfgm": 44.27,
   "fga": 103
  },
  "Anfernee Simons": {
   "gp": 13,
   "tpm": 32,
   "xtpm": 26.41,
   "fgm": 45,
   "xfgm": 43.77,
   "fga": 107
  },
  "Anthony Black": {
   "gp": 9,
   "tpm": 18,
   "xtpm": 15.92,
   "fgm": 48,
   "xfgm": 45.92,
   "fga": 107
  },
  "Anthony Davis": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 9.88,
   "fgm": 109,
   "xfgm": 103.72,
   "fga": 208
  },
  "Anthony Edwards": {
   "gp": 4,
   "tpm": 18,
   "xtpm": 15.9,
   "fgm": 50,
   "xfgm": 46.45,
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
   "xtpm": 2.85,
   "fgm": 7,
   "xfgm": 7.24,
   "fga": 15
  },
  "Ausar Thompson": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 1.41,
   "fgm": 47,
   "xfgm": 50.99,
   "fga": 93
  },
  "Austin Reaves": {
   "gp": 12,
   "tpm": 27,
   "xtpm": 23.3,
   "fgm": 97,
   "xfgm": 82.77,
   "fga": 189
  },
  "Ayo Dosunmu": {
   "gp": 13,
   "tpm": 23,
   "xtpm": 18.11,
   "fgm": 94,
   "xfgm": 90.39,
   "fga": 177
  },
  "Baba Miller": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 1.78,
   "fgm": 13,
   "xfgm": 11.21,
   "fga": 22
  },
  "Bam Adebayo": {
   "gp": 13,
   "tpm": 9,
   "xtpm": 14.2,
   "fgm": 89,
   "xfgm": 80.34,
   "fga": 167
  },
  "Baylor Scheierman": {
   "gp": 12,
   "tpm": 17,
   "xtpm": 12.83,
   "fgm": 26,
   "xfgm": 22.99,
   "fga": 57
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
   "xfgm": 30.46,
   "fga": 64
  },
  "Bennett Stirtz": {
   "gp": 13,
   "tpm": 21,
   "xtpm": 16.62,
   "fgm": 34,
   "xfgm": 31.48,
   "fga": 74
  },
  "Bilal Coulibaly": {
   "gp": 12,
   "tpm": 4,
   "xtpm": 10.41,
   "fgm": 32,
   "xfgm": 34.92,
   "fga": 69
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
   "xtpm": 18.09,
   "fgm": 32,
   "xfgm": 38.18,
   "fga": 91
  },
  "Bogdan Bogdanović": {
   "gp": 13,
   "tpm": 15,
   "xtpm": 10.33,
   "fgm": 23,
   "xfgm": 17.2,
   "fga": 44
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
   "xtpm": 20.45,
   "fgm": 43,
   "xfgm": 38.44,
   "fga": 92
  },
  "Braden Smith": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 2.5,
   "fgm": 13,
   "xfgm": 13.56,
   "fga": 29
  },
  "Branden Carlson": {
   "gp": 7,
   "tpm": 1,
   "xtpm": 2.15,
   "fgm": 6,
   "xfgm": 5.41,
   "fga": 12
  },
  "Brandin Podziemski": {
   "gp": 11,
   "tpm": 31,
   "xtpm": 27.6,
   "fgm": 64,
   "xfgm": 58.0,
   "fga": 139
  },
  "Brandon Miller": {
   "gp": 10,
   "tpm": 27,
   "xtpm": 36.78,
   "fgm": 73,
   "xfgm": 87.06,
   "fga": 205
  },
  "Brandon Williams": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 8.13,
   "fgm": 33,
   "xfgm": 36.96,
   "fga": 80
  },
  "Brayden Burries": {
   "gp": 13,
   "tpm": 11,
   "xtpm": 15.57,
   "fgm": 41,
   "xfgm": 44.5,
   "fga": 98
  },
  "Brice Sensabaugh": {
   "gp": 13,
   "tpm": 19,
   "xtpm": 17.29,
   "fgm": 35,
   "xfgm": 36.81,
   "fga": 91
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
   "gp": 11,
   "tpm": 16,
   "xtpm": 13.4,
   "fgm": 64,
   "xfgm": 53.02,
   "fga": 114
  },
  "Brooks Barnhizer": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 3,
   "xfgm": 3.66,
   "fga": 7
  },
  "Bruce Thornton": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 1.41,
   "fgm": 5,
   "xfgm": 3.54,
   "fga": 9
  },
  "Bryce Hopkins": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 1.78,
   "fgm": 14,
   "xfgm": 11.81,
   "fga": 22
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
   "gp": 13,
   "tpm": 17,
   "xtpm": 14.18,
   "fgm": 20,
   "xfgm": 22.11,
   "fga": 56
  },
  "Buddy Hield": {
   "gp": 10,
   "tpm": 14,
   "xtpm": 11.97,
   "fgm": 29,
   "xfgm": 25.73,
   "fga": 57
  },
  "CJ McCollum": {
   "gp": 13,
   "tpm": 24,
   "xtpm": 23.93,
   "fgm": 69,
   "xfgm": 70.88,
   "fga": 161
  },
  "Cade Cunningham": {
   "gp": 12,
   "tpm": 25,
   "xtpm": 27.5,
   "fgm": 104,
   "xfgm": 100.59,
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
   "gp": 9,
   "tpm": 7,
   "xtpm": 5.41,
   "fgm": 18,
   "xfgm": 15.09,
   "fga": 33
  },
  "Caleb Wilson": {
   "gp": 10,
   "tpm": 23,
   "xtpm": 25.16,
   "fgm": 68,
   "xfgm": 75.12,
   "fga": 162
  },
  "Cam Christie": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 1.43,
   "fgm": 2,
   "xfgm": 5.38,
   "fga": 11
  },
  "Cam Spencer": {
   "gp": 13,
   "tpm": 26,
   "xtpm": 15.9,
   "fgm": 46,
   "xfgm": 33.45,
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
   "xtpm": 25.77,
   "fgm": 67,
   "xfgm": 79.99,
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
   "xtpm": 15.26,
   "fgm": 35,
   "xfgm": 32.21,
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
   "gp": 12,
   "tpm": 12,
   "xtpm": 11.76,
   "fgm": 17,
   "xfgm": 20.07,
   "fga": 47
  },
  "Cason Wallace": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.56,
   "fgm": 8,
   "xfgm": 9.26,
   "fga": 20
  },
  "Cedric Coward": {
   "gp": 12,
   "tpm": 27,
   "xtpm": 21.88,
   "fgm": 59,
   "xfgm": 57.8,
   "fga": 130
  },
  "Chaney Johnson": {
   "gp": 12,
   "tpm": 7,
   "xtpm": 8.58,
   "fgm": 17,
   "xfgm": 22.96,
   "fga": 50
  },
  "Charles Bassey": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 35,
   "xfgm": 29.89,
   "fga": 52
  },
  "Chaz Lanier": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 1.78,
   "fgm": 5,
   "xfgm": 2.87,
   "fga": 7
  },
  "Chet Holmgren": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.13,
   "fgm": 11,
   "xfgm": 14.6,
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
   "gp": 6,
   "tpm": 8,
   "xtpm": 8.15,
   "fgm": 10,
   "xfgm": 10.34,
   "fga": 27
  },
  "Christian Anderson": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 11.29,
   "fgm": 18,
   "xfgm": 21.54,
   "fga": 53
  },
  "Christian Braun": {
   "gp": 11,
   "tpm": 17,
   "xtpm": 17.85,
   "fgm": 54,
   "xfgm": 54.93,
   "fga": 113
  },
  "Clint Capela": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 9,
   "xfgm": 8.78,
   "fga": 14
  },
  "Coby White": {
   "gp": 5,
   "tpm": 4,
   "xtpm": 9.51,
   "fgm": 17,
   "xfgm": 24.12,
   "fga": 54
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
   "xfgm": 3.51,
   "fga": 6
  },
  "Collin Gillespie": {
   "gp": 11,
   "tpm": 22,
   "xtpm": 24.36,
   "fgm": 31,
   "xfgm": 35.14,
   "fga": 91
  },
  "Collin Murray-Boyles": {
   "gp": 11,
   "tpm": 7,
   "xtpm": 7.81,
   "fgm": 43,
   "xfgm": 46.78,
   "fga": 91
  },
  "Collin Sexton": {
   "gp": 12,
   "tpm": 11,
   "xtpm": 14.24,
   "fgm": 43,
   "xfgm": 46.9,
   "fga": 99
  },
  "Cooper Flagg": {
   "gp": 12,
   "tpm": 15,
   "xtpm": 19.79,
   "fgm": 101,
   "xfgm": 97.89,
   "fga": 211
  },
  "Corey Kispert": {
   "gp": 6,
   "tpm": 10,
   "xtpm": 6.33,
   "fgm": 17,
   "xfgm": 11.38,
   "fga": 27
  },
  "Craig Porter Jr.": {
   "gp": 11,
   "tpm": 1,
   "xtpm": 1.78,
   "fgm": 9,
   "xfgm": 8.36,
   "fga": 17
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
   "gp": 9,
   "tpm": 4,
   "xtpm": 4.96,
   "fgm": 8,
   "xfgm": 7.81,
   "fga": 19
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
   "xtpm": 37.31,
   "fgm": 70,
   "xfgm": 68.81,
   "fga": 168
  },
  "Daniel Gafford": {
   "gp": 13,
   "tpm": 2,
   "xtpm": 0.72,
   "fgm": 47,
   "xfgm": 38.84,
   "fga": 66
  },
  "Daniss Jenkins": {
   "gp": 12,
   "tpm": 25,
   "xtpm": 20.94,
   "fgm": 52,
   "xfgm": 50.56,
   "fga": 118
  },
  "Danny Wolf": {
   "gp": 7,
   "tpm": 15,
   "xtpm": 11.37,
   "fgm": 23,
   "xfgm": 23.66,
   "fga": 53
  },
  "Darius Acuff Jr.": {
   "gp": 12,
   "tpm": 37,
   "xtpm": 39.79,
   "fgm": 111,
   "xfgm": 116.7,
   "fga": 270
  },
  "Darius Garland": {
   "gp": 11,
   "tpm": 27,
   "xtpm": 26.41,
   "fgm": 79,
   "xfgm": 73.42,
   "fga": 169
  },
  "Darryn Peterson": {
   "gp": 13,
   "tpm": 29,
   "xtpm": 28.58,
   "fgm": 78,
   "xfgm": 80.33,
   "fga": 190
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
   "xtpm": 26.16,
   "fgm": 79,
   "xfgm": 71.61,
   "fga": 158
  },
  "Day'Ron Sharpe": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 5.76,
   "fgm": 39,
   "xfgm": 41.97,
   "fga": 75
  },
  "De'Aaron Fox": {
   "gp": 13,
   "tpm": 13,
   "xtpm": 14.2,
   "fgm": 58,
   "xfgm": 54.7,
   "fga": 117
  },
  "De'Andre Hunter": {
   "gp": 11,
   "tpm": 23,
   "xtpm": 22.01,
   "fgm": 52,
   "xfgm": 49.19,
   "fga": 118
  },
  "De'Anthony Melton": {
   "gp": 13,
   "tpm": 29,
   "xtpm": 24.44,
   "fgm": 40,
   "xfgm": 41.27,
   "fga": 101
  },
  "DeAndre Jordan": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 6,
   "xfgm": 4.61,
   "fga": 7
  },
  "DeMar DeRozan": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 5.02,
   "fgm": 35,
   "xfgm": 36.51,
   "fga": 84
  },
  "Dean Wade": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 8.89,
   "fgm": 15,
   "xfgm": 15.44,
   "fga": 36
  },
  "Deandre Ayton": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 28,
   "xfgm": 25.2,
   "fga": 42
  },
  "Dejounte Murray": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 9.63,
   "fgm": 44,
   "xfgm": 50.47,
   "fga": 102
  },
  "Deni Avdija": {
   "gp": 12,
   "tpm": 24,
   "xtpm": 23.62,
   "fgm": 93,
   "xfgm": 89.54,
   "fga": 186
  },
  "Dennis Schröder": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 12.38,
   "fgm": 32,
   "xfgm": 41.72,
   "fga": 88
  },
  "Derik Queen": {
   "gp": 14,
   "tpm": 6,
   "xtpm": 5.7,
   "fgm": 54,
   "xfgm": 59.05,
   "fga": 114
  },
  "Derrick Jones Jr.": {
   "gp": 10,
   "tpm": 21,
   "xtpm": 15.28,
   "fgm": 42,
   "xfgm": 38.91,
   "fga": 83
  },
  "Derrick White": {
   "gp": 12,
   "tpm": 21,
   "xtpm": 22.31,
   "fgm": 56,
   "xfgm": 55.19,
   "fga": 128
  },
  "Desmond Bane": {
   "gp": 11,
   "tpm": 45,
   "xtpm": 38.93,
   "fgm": 65,
   "xfgm": 64.47,
   "fga": 161
  },
  "Devin Booker": {
   "gp": 11,
   "tpm": 24,
   "xtpm": 22.54,
   "fgm": 98,
   "xfgm": 85.06,
   "fga": 198
  },
  "Devin Vassell": {
   "gp": 11,
   "tpm": 16,
   "xtpm": 17.03,
   "fgm": 42,
   "xfgm": 44.08,
   "fga": 102
  },
  "Dillon Brooks": {
   "gp": 11,
   "tpm": 22,
   "xtpm": 17.99,
   "fgm": 61,
   "xfgm": 60.3,
   "fga": 137
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
   "gp": 11,
   "tpm": 3,
   "xtpm": 2.81,
   "fgm": 64,
   "xfgm": 52.03,
   "fga": 98
  },
  "Donovan Clingan": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 10.57,
   "fgm": 53,
   "xfgm": 49.37,
   "fga": 95
  },
  "Donovan Mitchell": {
   "gp": 13,
   "tpm": 37,
   "xtpm": 34.15,
   "fgm": 103,
   "xfgm": 96.3,
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
   "xfgm": 17.98,
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
   "xtpm": 38.52,
   "fgm": 63,
   "xfgm": 54.85,
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
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 9,
   "xfgm": 10.75,
   "fga": 19
  },
  "Dylan Harper": {
   "gp": 13,
   "tpm": 15,
   "xtpm": 15.18,
   "fgm": 87,
   "xfgm": 87.42,
   "fga": 175
  },
  "Dyson Daniels": {
   "gp": 13,
   "tpm": 2,
   "xtpm": 5.66,
   "fgm": 55,
   "xfgm": 59.17,
   "fga": 113
  },
  "Ebuka Okorie": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 4,
   "xfgm": 6.32,
   "fga": 12
  },
  "Egor Dëmin": {
   "gp": 6,
   "tpm": 13,
   "xtpm": 11.97,
   "fgm": 17,
   "xfgm": 18.31,
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
   "gp": 12,
   "tpm": 13,
   "xtpm": 11.64,
   "fgm": 20,
   "xfgm": 19.41,
   "fga": 50
  },
  "Evan Mobley": {
   "gp": 12,
   "tpm": 23,
   "xtpm": 16.94,
   "fgm": 76,
   "xfgm": 68.84,
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
   "xtpm": 22.7,
   "fgm": 107,
   "xfgm": 107.3,
   "fga": 227
  },
  "Fred VanVleet": {
   "gp": 11,
   "tpm": 32,
   "xtpm": 28.58,
   "fgm": 52,
   "xfgm": 45.06,
   "fga": 118
  },
  "GG Jackson": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 11.02,
   "fgm": 27,
   "xfgm": 33.37,
   "fga": 71
  },
  "Gary Payton II": {
   "gp": 11,
   "tpm": 4,
   "xtpm": 7.07,
   "fgm": 23,
   "xfgm": 24.19,
   "fga": 50
  },
  "Gary Trent Jr.": {
   "gp": 5,
   "tpm": 5,
   "xtpm": 3.87,
   "fgm": 6,
   "xfgm": 5.78,
   "fga": 15
  },
  "Georges Niang": {
   "gp": 13,
   "tpm": 17,
   "xtpm": 16.78,
   "fgm": 39,
   "xfgm": 35.84,
   "fga": 85
  },
  "Giannis Antetokounmpo": {
   "gp": 13,
   "tpm": 8,
   "xtpm": 10.9,
   "fgm": 147,
   "xfgm": 131.44,
   "fga": 247
  },
  "Goga Bitadze": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 15,
   "xfgm": 14.26,
   "fga": 23
  },
  "Gradey Dick": {
   "gp": 11,
   "tpm": 10,
   "xtpm": 7.46,
   "fgm": 32,
   "xfgm": 30.19,
   "fga": 60
  },
  "Graham Ike": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 3.16,
   "fgm": 18,
   "xfgm": 19.81,
   "fga": 38
  },
  "Grant Williams": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.41,
   "fgm": 3,
   "xfgm": 2.06,
   "fga": 5
  },
  "Grayson Allen": {
   "gp": 12,
   "tpm": 42,
   "xtpm": 31.37,
   "fgm": 53,
   "xfgm": 44.32,
   "fga": 115
  },
  "Gui Santos": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 6.37,
   "fgm": 19,
   "xfgm": 22.83,
   "fga": 47
  },
  "Hannes Steinbach": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 9.87,
   "fga": 16
  },
  "Harrison Barnes": {
   "gp": 11,
   "tpm": 14,
   "xtpm": 12.42,
   "fgm": 20,
   "xfgm": 19.23,
   "fga": 47
  },
  "Herbert Jones": {
   "gp": 14,
   "tpm": 10,
   "xtpm": 14.22,
   "fgm": 35,
   "xfgm": 44.63,
   "fga": 94
  },
  "Hugo González": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 7.87,
   "fgm": 17,
   "xfgm": 18.18,
   "fga": 38
  },
  "Immanuel Quickley": {
   "gp": 10,
   "tpm": 25,
   "xtpm": 27.54,
   "fgm": 56,
   "xfgm": 57.54,
   "fga": 140
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
   "xtpm": 10.35,
   "fgm": 22,
   "xfgm": 28.56,
   "fga": 58
  },
  "Isaiah Collier": {
   "gp": 13,
   "tpm": 6,
   "xtpm": 5.65,
   "fgm": 30,
   "xfgm": 32.07,
   "fga": 68
  },
  "Isaiah Crawford": {
   "gp": 8,
   "tpm": 4,
   "xtpm": 2.83,
   "fgm": 5,
   "xfgm": 3.49,
   "fga": 9
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
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 50,
   "xfgm": 50.63,
   "fga": 93
  },
  "Isaiah Jackson": {
   "gp": 10,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 34,
   "xfgm": 34.69,
   "fga": 61
  },
  "Isaiah Joe": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 4.57,
   "fgm": 7,
   "xfgm": 7.33,
   "fga": 19
  },
  "Isaiah Stewart": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 7.79,
   "fgm": 43,
   "xfgm": 34.97,
   "fga": 69
  },
  "Ivica Zubac": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 36,
   "xfgm": 37.74,
   "fga": 64
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
   "gp": 12,
   "tpm": 27,
   "xtpm": 28.44,
   "fgm": 43,
   "xfgm": 45.68,
   "fga": 112
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
   "gp": 13,
   "tpm": 33,
   "xtpm": 28.6,
   "fgm": 73,
   "xfgm": 66.71,
   "fga": 154
  },
  "Jabari Walker": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 3.54,
   "fgm": 19,
   "xfgm": 20.21,
   "fga": 36
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
   "xfgm": 4.71,
   "fga": 13
  },
  "Jaden McDaniels": {
   "gp": 13,
   "tpm": 18,
   "xtpm": 20.47,
   "fgm": 91,
   "xfgm": 82.66,
   "fga": 173
  },
  "Jae'Sean Tate": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 2.73,
   "fga": 5
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
   "gp": 13,
   "tpm": 26,
   "xtpm": 21.12,
   "fgm": 77,
   "xfgm": 77.76,
   "fga": 160
  },
  "Jake LaRavia": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 8.2,
   "fgm": 24,
   "xfgm": 24.6,
   "fga": 50
  },
  "Jakob Poeltl": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 37,
   "xfgm": 33.54,
   "fga": 60
  },
  "Jalen Brunson": {
   "gp": 12,
   "tpm": 33,
   "xtpm": 30.98,
   "fgm": 109,
   "xfgm": 111.05,
   "fga": 250
  },
  "Jalen Duren": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 10,
   "xfgm": 9.22,
   "fga": 17
  },
  "Jalen Green": {
   "gp": 11,
   "tpm": 10,
   "xtpm": 13.05,
   "fgm": 49,
   "xfgm": 56.46,
   "fga": 117
  },
  "Jalen Johnson": {
   "gp": 10,
   "tpm": 8,
   "xtpm": 14.79,
   "fgm": 73,
   "xfgm": 82.3,
   "fga": 164
  },
  "Jalen Pickett": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.05,
   "fgm": 4,
   "xfgm": 3.4,
   "fga": 8
  },
  "Jalen Slawson": {
   "gp": 11,
   "tpm": 2,
   "xtpm": 3.56,
   "fgm": 11,
   "xfgm": 13.15,
   "fga": 26
  },
  "Jalen Smith": {
   "gp": 11,
   "tpm": 19,
   "xtpm": 19.49,
   "fgm": 55,
   "xfgm": 51.65,
   "fga": 107
  },
  "Jalen Suggs": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 5.35,
   "fgm": 11,
   "xfgm": 16.13,
   "fga": 36
  },
  "Jalen Williams": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.16,
   "fgm": 15,
   "xfgm": 19.12,
   "fga": 39
  },
  "Jamal Cain": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 13.54,
   "fgm": 24,
   "xfgm": 23.16,
   "fga": 59
  },
  "Jamal Murray": {
   "gp": 11,
   "tpm": 40,
   "xtpm": 28.6,
   "fgm": 96,
   "xfgm": 81.4,
   "fga": 187
  },
  "Jamal Shead": {
   "gp": 12,
   "tpm": 10,
   "xtpm": 14.47,
   "fgm": 26,
   "xfgm": 34.59,
   "fga": 78
  },
  "Jamaree Bouyea": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 0.37,
   "fgm": 7,
   "xfgm": 3.63,
   "fga": 7
  },
  "James Harden": {
   "gp": 13,
   "tpm": 34,
   "xtpm": 32.02,
   "fgm": 62,
   "xfgm": 68.28,
   "fga": 159
  },
  "James Wiseman": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 5.89,
   "fga": 10
  },
  "Jamison Battle": {
   "gp": 12,
   "tpm": 26,
   "xtpm": 21.25,
   "fgm": 39,
   "xfgm": 33.07,
   "fga": 80
  },
  "Jarace Walker": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 15.24,
   "fgm": 29,
   "xfgm": 35.77,
   "fga": 80
  },
  "Jared McCain": {
   "gp": 13,
   "tpm": 30,
   "xtpm": 30.1,
   "fgm": 63,
   "xfgm": 66.3,
   "fga": 153
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
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.16,
   "fgm": 6,
   "xfgm": 8.15,
   "fga": 18
  },
  "Jarred Vanderbilt": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 5.92,
   "fga": 9
  },
  "Jarrett Allen": {
   "gp": 11,
   "tpm": 3,
   "xtpm": 1.41,
   "fgm": 53,
   "xfgm": 47.61,
   "fga": 82
  },
  "Jase Richardson": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 12.83,
   "fgm": 25,
   "xfgm": 34.27,
   "fga": 78
  },
  "Javon Small": {
   "gp": 6,
   "tpm": 10,
   "xtpm": 8.13,
   "fgm": 17,
   "xfgm": 17.12,
   "fga": 41
  },
  "Javonte Green": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 14.22,
   "fgm": 21,
   "xfgm": 22.09,
   "fga": 53
  },
  "Jaxson Hayes": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 41,
   "xfgm": 35.9,
   "fga": 64
  },
  "Jay Huff": {
   "gp": 11,
   "tpm": 10,
   "xtpm": 11.72,
   "fgm": 29,
   "xfgm": 26.2,
   "fga": 57
  },
  "Jaylen Brown": {
   "gp": 12,
   "tpm": 21,
   "xtpm": 19.79,
   "fgm": 96,
   "xfgm": 96.76,
   "fga": 200
  },
  "Jaylen Clark": {
   "gp": 12,
   "tpm": 9,
   "xtpm": 9.02,
   "fgm": 18,
   "xfgm": 18.43,
   "fga": 43
  },
  "Jaylen Wells": {
   "gp": 13,
   "tpm": 27,
   "xtpm": 24.63,
   "fgm": 50,
   "xfgm": 42.87,
   "fga": 103
  },
  "Jaylin Sellers": {
   "gp": 6,
   "tpm": 7,
   "xtpm": 6.04,
   "fgm": 8,
   "xfgm": 8.86,
   "fga": 22
  },
  "Jaylin Williams": {
   "gp": 7,
   "tpm": 5,
   "xtpm": 8.58,
   "fgm": 6,
   "xfgm": 12.05,
   "fga": 30
  },
  "Jaylon Tyson": {
   "gp": 8,
   "tpm": 13,
   "xtpm": 14.61,
   "fgm": 28,
   "xfgm": 30.53,
   "fga": 68
  },
  "Jayson Kent": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 1.78,
   "fgm": 3,
   "xfgm": 5.29,
   "fga": 11
  },
  "Jayson Tatum": {
   "gp": 11,
   "tpm": 26,
   "xtpm": 29.97,
   "fgm": 88,
   "xfgm": 97.66,
   "fga": 214
  },
  "Jerami Grant": {
   "gp": 12,
   "tpm": 22,
   "xtpm": 16.9,
   "fgm": 49,
   "xfgm": 46.8,
   "fga": 101
  },
  "Jeremiah Fears": {
   "gp": 14,
   "tpm": 15,
   "xtpm": 19.42,
   "fgm": 84,
   "xfgm": 95.24,
   "fga": 190
  },
  "Jericho Sims": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 2,
   "xfgm": 2.78,
   "fga": 5
  },
  "Jett Howard": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 2.83,
   "fgm": 5,
   "xfgm": 4.34,
   "fga": 11
  },
  "Jevon Carter": {
   "gp": 8,
   "tpm": 10,
   "xtpm": 11.7,
   "fgm": 13,
   "xfgm": 15.15,
   "fga": 40
  },
  "Joan Beringer": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 30,
   "xfgm": 30.94,
   "fga": 49
  },
  "Jock Landale": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 7.83,
   "fgm": 22,
   "xfgm": 23.38,
   "fga": 48
  },
  "Joel Embiid": {
   "gp": 11,
   "tpm": 4,
   "xtpm": 12.66,
   "fgm": 61,
   "xfgm": 76.68,
   "fga": 163
  },
  "John Collins": {
   "gp": 12,
   "tpm": 14,
   "xtpm": 12.85,
   "fgm": 50,
   "xfgm": 54.82,
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
   "xtpm": 19.55,
   "fgm": 57,
   "xfgm": 63.75,
   "fga": 131
  },
  "Jonathan Mogbo": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 2.17,
   "fgm": 6,
   "xfgm": 8.53,
   "fga": 17
  },
  "Jordan Clarkson": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 3.93,
   "fgm": 23,
   "xfgm": 22.98,
   "fga": 46
  },
  "Jordan Goodwin": {
   "gp": 7,
   "tpm": 17,
   "xtpm": 13.11,
   "fgm": 23,
   "xfgm": 21.38,
   "fga": 52
  },
  "Jordan Hawkins": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 5.33,
   "fgm": 10,
   "xfgm": 10.03,
   "fga": 25
  },
  "Jordan McLaughlin": {
   "gp": 8,
   "tpm": 1,
   "xtpm": 2.15,
   "fgm": 6,
   "xfgm": 10.05,
   "fga": 20
  },
  "Jordan Poole": {
   "gp": 8,
   "tpm": 8,
   "xtpm": 10.24,
   "fgm": 14,
   "xfgm": 21.11,
   "fga": 48
  },
  "Jordan Walsh": {
   "gp": 12,
   "tpm": 8,
   "xtpm": 10.76,
   "fgm": 21,
   "xfgm": 23.86,
   "fga": 51
  },
  "Jose Alvarado": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 2.81,
   "fgm": 4,
   "xfgm": 6.98,
   "fga": 15
  },
  "Josh Dix": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 5.66,
   "fgm": 7,
   "xfgm": 11.75,
   "fga": 27
  },
  "Josh Giddey": {
   "gp": 12,
   "tpm": 15,
   "xtpm": 16.21,
   "fgm": 47,
   "xfgm": 53.7,
   "fga": 113
  },
  "Josh Green": {
   "gp": 11,
   "tpm": 6,
   "xtpm": 8.26,
   "fgm": 14,
   "xfgm": 17.41,
   "fga": 40
  },
  "Josh Hart": {
   "gp": 9,
   "tpm": 13,
   "xtpm": 15.59,
   "fgm": 25,
   "xfgm": 29.97,
   "fga": 69
  },
  "Josh Minott": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 7.79,
   "fgm": 11,
   "xfgm": 12.18,
   "fga": 29
  },
  "Josh Okogie": {
   "gp": 12,
   "tpm": 8,
   "xtpm": 8.56,
   "fgm": 13,
   "xfgm": 19.06,
   "fga": 45
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
   "xtpm": 23.38,
   "fgm": 50,
   "xfgm": 43.32,
   "fga": 103
  },
  "Julian Champagnie": {
   "gp": 13,
   "tpm": 35,
   "xtpm": 29.46,
   "fgm": 43,
   "xfgm": 36.45,
   "fga": 96
  },
  "Julian Reese": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 2.19,
   "fga": 4
  },
  "Julius Randle": {
   "gp": 12,
   "tpm": 18,
   "xtpm": 19.48,
   "fgm": 78,
   "xfgm": 83.79,
   "fga": 175
  },
  "Justin Champagnie": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.48,
   "fgm": 12,
   "xfgm": 10.82,
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
   "gp": 12,
   "tpm": 24,
   "xtpm": 21.12,
   "fgm": 91,
   "xfgm": 85.5,
   "fga": 168
  },
  "Karlo Matković": {
   "gp": 13,
   "tpm": 17,
   "xtpm": 14.36,
   "fgm": 38,
   "xfgm": 31.69,
   "fga": 67
  },
  "Kasparas Jakučionis": {
   "gp": 12,
   "tpm": 7,
   "xtpm": 10.63,
   "fgm": 24,
   "xfgm": 28.84,
   "fga": 59
  },
  "Kawhi Leonard": {
   "gp": 2,
   "tpm": 4,
   "xtpm": 4.92,
   "fgm": 12,
   "xfgm": 17.18,
   "fga": 37
  },
  "Keaton Wagler": {
   "gp": 11,
   "tpm": 19,
   "xtpm": 18.71,
   "fgm": 32,
   "xfgm": 38.4,
   "fga": 92
  },
  "Keegan Murray": {
   "gp": 5,
   "tpm": 4,
   "xtpm": 6.76,
   "fgm": 19,
   "xfgm": 21.11,
   "fga": 50
  },
  "Kel'el Ware": {
   "gp": 13,
   "tpm": 8,
   "xtpm": 12.35,
   "fgm": 42,
   "xfgm": 54.41,
   "fga": 103
  },
  "Keldon Johnson": {
   "gp": 13,
   "tpm": 4,
   "xtpm": 7.09,
   "fgm": 43,
   "xfgm": 50.32,
   "fga": 94
  },
  "Kelly Oubre Jr.": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 14.88,
   "fgm": 43,
   "xfgm": 46.64,
   "fga": 98
  },
  "Kenrich Williams": {
   "gp": 13,
   "tpm": 17,
   "xtpm": 14.16,
   "fgm": 32,
   "xfgm": 33.5,
   "fga": 75
  },
  "Kentavious Caldwell-Pope": {
   "gp": 13,
   "tpm": 18,
   "xtpm": 13.48,
   "fgm": 25,
   "xfgm": 21.53,
   "fga": 54
  },
  "Keon Ellis": {
   "gp": 11,
   "tpm": 10,
   "xtpm": 11.31,
   "fgm": 18,
   "xfgm": 20.46,
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
   "gp": 13,
   "tpm": 18,
   "xtpm": 17.72,
   "fgm": 83,
   "xfgm": 75.07,
   "fga": 172
  },
  "Kevin Huerter": {
   "gp": 12,
   "tpm": 19,
   "xtpm": 19.48,
   "fgm": 45,
   "xfgm": 41.04,
   "fga": 97
  },
  "Kevon Looney": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 3.48,
   "fga": 6
  },
  "Keyonte George": {
   "gp": 12,
   "tpm": 24,
   "xtpm": 26.08,
   "fgm": 81,
   "xfgm": 79.73,
   "fga": 187
  },
  "Khaman Maluach": {
   "gp": 11,
   "tpm": 2,
   "xtpm": 2.5,
   "fgm": 34,
   "xfgm": 31.9,
   "fga": 56
  },
  "Khris Middleton": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 1.78,
   "fgm": 3,
   "xfgm": 3.72,
   "fga": 9
  },
  "Kingston Flemings": {
   "gp": 12,
   "tpm": 9,
   "xtpm": 7.38,
   "fgm": 38,
   "xfgm": 36.19,
   "fga": 74
  },
  "Klay Thompson": {
   "gp": 12,
   "tpm": 48,
   "xtpm": 40.43,
   "fgm": 64,
   "xfgm": 53.06,
   "fga": 143
  },
  "Koa Peat": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 6,
   "xfgm": 5.92,
   "fga": 10
  },
  "Kobe Brown": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 4.26,
   "fgm": 10,
   "xfgm": 10.18,
   "fga": 23
  },
  "Kobe Sanders": {
   "gp": 11,
   "tpm": 18,
   "xtpm": 17.29,
   "fgm": 34,
   "xfgm": 34.43,
   "fga": 81
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
   "gp": 11,
   "tpm": 10,
   "xtpm": 8.87,
   "fgm": 31,
   "xfgm": 32.35,
   "fga": 65
  },
  "Kris Murray": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 5.82,
   "fgm": 4,
   "xfgm": 8.23,
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
   "xfgm": 12.9,
   "fga": 26
  },
  "Kyle Kuzma": {
   "gp": 13,
   "tpm": 20,
   "xtpm": 23.07,
   "fgm": 53,
   "xfgm": 54.79,
   "fga": 118
  },
  "Kyrie Irving": {
   "gp": 11,
   "tpm": 39,
   "xtpm": 34.65,
   "fgm": 90,
   "xfgm": 80.44,
   "fga": 190
  },
  "Kyshawn George": {
   "gp": 13,
   "tpm": 32,
   "xtpm": 26.82,
   "fgm": 87,
   "xfgm": 79.89,
   "fga": 177
  },
  "LJ Cryer": {
   "gp": 10,
   "tpm": 16,
   "xtpm": 12.36,
   "fgm": 21,
   "xfgm": 19.7,
   "fga": 51
  },
  "LaMelo Ball": {
   "gp": 13,
   "tpm": 47,
   "xtpm": 44.15,
   "fgm": 85,
   "xfgm": 80.57,
   "fga": 195
  },
  "Labaron Philon Jr.": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 2.81,
   "fgm": 6,
   "xfgm": 7.42,
   "fga": 18
  },
  "Landry Shamet": {
   "gp": 12,
   "tpm": 25,
   "xtpm": 21.99,
   "fgm": 38,
   "xfgm": 35.1,
   "fga": 84
  },
  "Larry Nance Jr.": {
   "gp": 12,
   "tpm": 11,
   "xtpm": 10.04,
   "fgm": 19,
   "xfgm": 17.88,
   "fga": 41
  },
  "Lauri Markkanen": {
   "gp": 8,
   "tpm": 29,
   "xtpm": 25.77,
   "fgm": 44,
   "xfgm": 46.36,
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
   "gp": 10,
   "tpm": 9,
   "xtpm": 13.4,
   "fgm": 57,
   "xfgm": 66.12,
   "fga": 132
  },
  "Leaky Black": {
   "gp": 8,
   "tpm": 10,
   "xtpm": 8.87,
   "fgm": 12,
   "xfgm": 12.13,
   "fga": 31
  },
  "Leonard Miller": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 9.92,
   "fgm": 24,
   "xfgm": 27.63,
   "fga": 56
  },
  "Liam McNeeley": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 4.24,
   "fgm": 7,
   "xfgm": 10.76,
   "fga": 24
  },
  "Luguentz Dort": {
   "gp": 13,
   "tpm": 22,
   "xtpm": 22.23,
   "fgm": 41,
   "xfgm": 51.1,
   "fga": 111
  },
  "Luka Dončić": {
   "gp": 11,
   "tpm": 60,
   "xtpm": 51.78,
   "fgm": 131,
   "xfgm": 109.01,
   "fga": 268
  },
  "Luka Garza": {
   "gp": 12,
   "tpm": 14,
   "xtpm": 10.0,
   "fgm": 24,
   "xfgm": 25.58,
   "fga": 54
  },
  "Luke Kennard": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 15.61,
   "fgm": 29,
   "xfgm": 21.03,
   "fga": 56
  },
  "Luke Kornet": {
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 17,
   "xfgm": 21.69,
   "fga": 35
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
   "xfgm": 4.5,
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
   "gp": 11,
   "tpm": 11,
   "xtpm": 12.35,
   "fgm": 28,
   "xfgm": 33.0,
   "fga": 77
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
   "gp": 10,
   "tpm": 9,
   "xtpm": 9.98,
   "fgm": 21,
   "xfgm": 19.35,
   "fga": 48
  },
  "Marcus Smart": {
   "gp": 9,
   "tpm": 16,
   "xtpm": 14.24,
   "fgm": 25,
   "xfgm": 22.95,
   "fga": 57
  },
  "Mario Hezonja": {
   "gp": 14,
   "tpm": 16,
   "xtpm": 18.11,
   "fgm": 49,
   "xfgm": 48.54,
   "fga": 104
  },
  "Marvin Bagley III": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 1.41,
   "fgm": 24,
   "xfgm": 24.38,
   "fga": 44
  },
  "Matas Buzelis": {
   "gp": 12,
   "tpm": 21,
   "xtpm": 21.98,
   "fgm": 50,
   "xfgm": 52.82,
   "fga": 115
  },
  "Matisse Thybulle": {
   "gp": 13,
   "tpm": 22,
   "xtpm": 19.57,
   "fgm": 31,
   "xfgm": 28.57,
   "fga": 71
  },
  "Max Christie": {
   "gp": 11,
   "tpm": 12,
   "xtpm": 15.65,
   "fgm": 21,
   "xfgm": 25.93,
   "fga": 63
  },
  "Max Strus": {
   "gp": 5,
   "tpm": 9,
   "xtpm": 11.33,
   "fgm": 14,
   "xfgm": 18.13,
   "fga": 43
  },
  "Meleek Thomas": {
   "gp": 11,
   "tpm": 29,
   "xtpm": 22.62,
   "fgm": 58,
   "xfgm": 51.99,
   "fga": 119
  },
  "Micah Peavy": {
   "gp": 8,
   "tpm": 4,
   "xtpm": 5.06,
   "fgm": 10,
   "xfgm": 14.65,
   "fga": 32
  },
  "Micah Potter": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 2.11,
   "fgm": 6,
   "xfgm": 4.74,
   "fga": 12
  },
  "Michael Porter Jr.": {
   "gp": 11,
   "tpm": 39,
   "xtpm": 36.68,
   "fgm": 77,
   "xfgm": 71.38,
   "fga": 169
  },
  "Mikal Bridges": {
   "gp": 12,
   "tpm": 11,
   "xtpm": 13.54,
   "fgm": 34,
   "xfgm": 40.58,
   "fga": 91
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
   "xtpm": 16.92,
   "fgm": 30,
   "xfgm": 36.76,
   "fga": 86
  },
  "Miles Bridges": {
   "gp": 11,
   "tpm": 19,
   "xtpm": 22.01,
   "fgm": 59,
   "xfgm": 60.29,
   "fga": 133
  },
  "Miles McBride": {
   "gp": 12,
   "tpm": 26,
   "xtpm": 20.96,
   "fgm": 33,
   "xfgm": 29.36,
   "fga": 75
  },
  "Mitchell Robinson": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 28,
   "xfgm": 28.52,
   "fga": 44
  },
  "Mo Bamba": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 28,
   "xfgm": 23.92,
   "fga": 38
  },
  "Mohamed Diawara": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 4.98,
   "fgm": 6,
   "xfgm": 8.05,
   "fga": 19
  },
  "Morez Johnson Jr.": {
   "gp": 12,
   "tpm": 2,
   "xtpm": 3.52,
   "fgm": 29,
   "xfgm": 33.29,
   "fga": 62
  },
  "Moritz Wagner": {
   "gp": 12,
   "tpm": 15,
   "xtpm": 8.83,
   "fgm": 45,
   "xfgm": 41.08,
   "fga": 77
  },
  "Moussa Cissé": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.73,
   "fga": 6
  },
  "Moussa Diabaté": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 36,
   "xfgm": 36.83,
   "fga": 59
  },
  "Myles Turner": {
   "gp": 12,
   "tpm": 17,
   "xtpm": 20.51,
   "fgm": 33,
   "xfgm": 39.28,
   "fga": 94
  },
  "Myron Gardner": {
   "gp": 8,
   "tpm": 1,
   "xtpm": 3.2,
   "fgm": 3,
   "xfgm": 4.52,
   "fga": 11
  },
  "Naji Marshall": {
   "gp": 10,
   "tpm": 8,
   "xtpm": 11.0,
   "fgm": 45,
   "xfgm": 45.1,
   "fga": 97
  },
  "Nate Ament": {
   "gp": 11,
   "tpm": 12,
   "xtpm": 11.06,
   "fgm": 31,
   "xfgm": 31.96,
   "fga": 67
  },
  "Naz Reid": {
   "gp": 12,
   "tpm": 28,
   "xtpm": 27.95,
   "fgm": 80,
   "xfgm": 89.1,
   "fga": 198
  },
  "Neemias Queta": {
   "gp": 12,
   "tpm": 3,
   "xtpm": 1.45,
   "fgm": 40,
   "xfgm": 41.98,
   "fga": 72
  },
  "Nic Claxton": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 7.24,
   "fga": 12
  },
  "Nick Martinelli": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.05,
   "fgm": 7,
   "xfgm": 5.22,
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
   "gp": 13,
   "tpm": 48,
   "xtpm": 48.52,
   "fgm": 91,
   "xfgm": 97.26,
   "fga": 223
  },
  "Nikola Jokić": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 15.49,
   "fgm": 101,
   "xfgm": 91.53,
   "fga": 198
  },
  "Nikola Jović": {
   "gp": 8,
   "tpm": 1,
   "xtpm": 3.93,
   "fgm": 6,
   "xfgm": 10.04,
   "fga": 22
  },
  "Nikola Topić": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 0,
   "xfgm": 1.8,
   "fga": 4
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
   "gp": 11,
   "tpm": 2,
   "xtpm": 4.61,
   "fgm": 10,
   "xfgm": 11.29,
   "fga": 27
  },
  "Noa Essengue": {
   "gp": 11,
   "tpm": 5,
   "xtpm": 7.83,
   "fgm": 19,
   "xfgm": 21.84,
   "fga": 45
  },
  "Noah Clowney": {
   "gp": 12,
   "tpm": 11,
   "xtpm": 13.18,
   "fgm": 27,
   "xfgm": 28.33,
   "fga": 64
  },
  "Nolan Traore": {
   "gp": 11,
   "tpm": 18,
   "xtpm": 15.22,
   "fgm": 54,
   "xfgm": 48.88,
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
   "xtpm": 23.95,
   "fgm": 63,
   "xfgm": 61.68,
   "fga": 141
  },
  "OG Anunoby": {
   "gp": 12,
   "tpm": 26,
   "xtpm": 28.48,
   "fgm": 54,
   "xfgm": 66.75,
   "fga": 142
  },
  "Obi Toppin": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 16.39,
   "fgm": 47,
   "xfgm": 43.38,
   "fga": 90
  },
  "Olivier-Maxence Prosper": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 1.8,
   "fgm": 11,
   "xfgm": 10.73,
   "fga": 20
  },
  "Onyeka Okongwu": {
   "gp": 13,
   "tpm": 20,
   "xtpm": 21.9,
   "fgm": 69,
   "xfgm": 66.22,
   "fga": 139
  },
  "Oscar Tshiebwe": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 6.36,
   "fga": 10
  },
  "Oso Ighodaro": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 24,
   "xfgm": 24.11,
   "fga": 42
  },
  "Ousmane Dieng": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 7.09,
   "fgm": 14,
   "xfgm": 14.77,
   "fga": 34
  },
  "P.J. Washington": {
   "gp": 13,
   "tpm": 29,
   "xtpm": 28.83,
   "fgm": 59,
   "xfgm": 62.46,
   "fga": 143
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
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.45,
   "fgm": 5,
   "xfgm": 4.49,
   "fga": 9
  },
  "Paolo Banchero": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 2.13,
   "fgm": 16,
   "xfgm": 10.78,
   "fga": 23
  },
  "Pascal Siakam": {
   "gp": 12,
   "tpm": 21,
   "xtpm": 20.92,
   "fgm": 97,
   "xfgm": 89.59,
   "fga": 193
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
   "xfgm": 15.53,
   "fga": 33
  },
  "Paul George": {
   "gp": 10,
   "tpm": 37,
   "xtpm": 29.65,
   "fgm": 80,
   "xfgm": 70.08,
   "fga": 164
  },
  "Paul Reed": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 3.2,
   "fgm": 56,
   "xfgm": 54.55,
   "fga": 101
  },
  "Payton Pritchard": {
   "gp": 12,
   "tpm": 27,
   "xtpm": 26.08,
   "fgm": 53,
   "xfgm": 53.19,
   "fga": 129
  },
  "Pelle Larsson": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 11.27,
   "fgm": 36,
   "xfgm": 35.38,
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
   "xtpm": 16.74,
   "fgm": 43,
   "xfgm": 56.49,
   "fga": 118
  },
  "Precious Achiuwa": {
   "gp": 11,
   "tpm": 4,
   "xtpm": 3.91,
   "fgm": 49,
   "xfgm": 46.63,
   "fga": 92
  },
  "Quentin Grimes": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 11.68,
   "fgm": 28,
   "xfgm": 30.2,
   "fga": 65
  },
  "Quenton Jackson": {
   "gp": 13,
   "tpm": 14,
   "xtpm": 13.77,
   "fgm": 41,
   "xfgm": 41.1,
   "fga": 88
  },
  "Quinten Post": {
   "gp": 8,
   "tpm": 5,
   "xtpm": 6.74,
   "fgm": 16,
   "xfgm": 15.45,
   "fga": 34
  },
  "RJ Barrett": {
   "gp": 12,
   "tpm": 19,
   "xtpm": 22.23,
   "fgm": 98,
   "xfgm": 105.08,
   "fga": 211
  },
  "Rasheer Fleming": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 2.13,
   "fgm": 2,
   "xfgm": 4.32,
   "fga": 10
  },
  "RayJ Dennis": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 1.55,
   "fga": 4
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
   "gp": 10,
   "tpm": 21,
   "xtpm": 24.36,
   "fgm": 33,
   "xfgm": 35.83,
   "fga": 91
  },
  "Riley Minix": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 3.89,
   "fgm": 5,
   "xfgm": 7.37,
   "fga": 17
  },
  "Robert Williams III": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 30,
   "xfgm": 27.43,
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
   "gp": 6,
   "tpm": 2,
   "xtpm": 2.87,
   "fgm": 3,
   "xfgm": 4.85,
   "fga": 12
  },
  "Ronald Holland II": {
   "gp": 12,
   "tpm": 8,
   "xtpm": 9.28,
   "fgm": 21,
   "xfgm": 29.0,
   "fga": 61
  },
  "Royce O'Neale": {
   "gp": 12,
   "tpm": 16,
   "xtpm": 18.71,
   "fgm": 21,
   "xfgm": 22.66,
   "fga": 59
  },
  "Rudy Gobert": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 32,
   "xfgm": 41.87,
   "fga": 69
  },
  "Rui Hachimura": {
   "gp": 9,
   "tpm": 19,
   "xtpm": 19.51,
   "fgm": 43,
   "xfgm": 50.91,
   "fga": 115
  },
  "Ryan Conwell": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 14.88,
   "fgm": 21,
   "xfgm": 22.06,
   "fga": 57
  },
  "Ryan Dunn": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 6.88,
   "fgm": 22,
   "xfgm": 22.45,
   "fga": 46
  },
  "Ryan Kalkbrenner": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 21,
   "xfgm": 18.87,
   "fga": 30
  },
  "Ryan Nembhard": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 2.51,
   "fga": 5
  },
  "Ryan Rollins": {
   "gp": 13,
   "tpm": 21,
   "xtpm": 21.58,
   "fgm": 51,
   "xfgm": 59.16,
   "fga": 131
  },
  "Saddiq Bey": {
   "gp": 14,
   "tpm": 30,
   "xtpm": 28.05,
   "fgm": 77,
   "xfgm": 74.81,
   "fga": 170
  },
  "Sam Hauser": {
   "gp": 12,
   "tpm": 27,
   "xtpm": 21.96,
   "fgm": 34,
   "xfgm": 28.0,
   "fga": 74
  },
  "Sam Merrill": {
   "gp": 9,
   "tpm": 14,
   "xtpm": 15.28,
   "fgm": 22,
   "xfgm": 22.92,
   "fga": 57
  },
  "Sandro Mamukelashvili": {
   "gp": 13,
   "tpm": 21,
   "xtpm": 18.09,
   "fgm": 51,
   "xfgm": 46.8,
   "fga": 103
  },
  "Santi Aldama": {
   "gp": 5,
   "tpm": 6,
   "xtpm": 6.41,
   "fgm": 14,
   "xfgm": 14.53,
   "fga": 32
  },
  "Scoot Henderson": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 18.11,
   "fgm": 31,
   "xfgm": 41.36,
   "fga": 99
  },
  "Scottie Barnes": {
   "gp": 8,
   "tpm": 4,
   "xtpm": 9.26,
   "fgm": 75,
   "xfgm": 75.92,
   "fga": 158
  },
  "Scotty Pippen Jr.": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 3.18,
   "fgm": 11,
   "xfgm": 11.08,
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
   "gp": 13,
   "tpm": 29,
   "xtpm": 29.56,
   "fgm": 139,
   "xfgm": 133.59,
   "fga": 300
  },
  "Sidy Cissoko": {
   "gp": 12,
   "tpm": 16,
   "xtpm": 16.11,
   "fgm": 29,
   "xfgm": 27.74,
   "fga": 64
  },
  "Simone Fontecchio": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 3.52,
   "fgm": 4,
   "xfgm": 5.68,
   "fga": 14
  },
  "Sion James": {
   "gp": 12,
   "tpm": 14,
   "xtpm": 19.3,
   "fgm": 25,
   "xfgm": 31.81,
   "fga": 76
  },
  "Spencer Jones": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 2.89,
   "fgm": 8,
   "xfgm": 7.06,
   "fga": 15
  },
  "Stephen Curry": {
   "gp": 10,
   "tpm": 43,
   "xtpm": 33.17,
   "fgm": 80,
   "xfgm": 65.51,
   "fga": 160
  },
  "Stephon Castle": {
   "gp": 13,
   "tpm": 28,
   "xtpm": 28.62,
   "fgm": 77,
   "xfgm": 85.01,
   "fga": 184
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
   "gp": 13,
   "tpm": 8,
   "xtpm": 13.13,
   "fgm": 17,
   "xfgm": 24.38,
   "fga": 59
  },
  "T.J. McConnell": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 10,
   "xfgm": 10.22,
   "fga": 22
  },
  "Tacko Fall": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Tari Eason": {
   "gp": 13,
   "tpm": 12,
   "xtpm": 17.15,
   "fgm": 49,
   "xfgm": 58.09,
   "fga": 119
  },
  "Tarris Reed Jr.": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 8.12,
   "fga": 14
  },
  "Taurean Prince": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 1.43,
   "fgm": 2,
   "xfgm": 2.52,
   "fga": 6
  },
  "Taylor Hendricks": {
   "gp": 8,
   "tpm": 7,
   "xtpm": 4.67,
   "fgm": 20,
   "xfgm": 15.86,
   "fga": 31
  },
  "Terance Mann": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 4.3,
   "fgm": 4,
   "xfgm": 6.87,
   "fga": 17
  },
  "Terrence Shannon Jr": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 13.48,
   "fgm": 35,
   "xfgm": 38.8,
   "fga": 83
  },
  "Thomas Bryant": {
   "gp": 8,
   "tpm": 10,
   "xtpm": 8.81,
   "fgm": 25,
   "xfgm": 23.67,
   "fga": 50
  },
  "Tidjane Salaün": {
   "gp": 11,
   "tpm": 14,
   "xtpm": 13.15,
   "fgm": 24,
   "xfgm": 23.02,
   "fga": 53
  },
  "Tim Hardaway Jr.": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 14.12,
   "fgm": 15,
   "xfgm": 23.55,
   "fga": 58
  },
  "Tobe Awaka": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 2.41,
   "fga": 4
  },
  "Tobi Lawal": {
   "gp": 7,
   "tpm": 1,
   "xtpm": 1.43,
   "fgm": 4,
   "xfgm": 4.72,
   "fga": 9
  },
  "Tolu Smith": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 3.95,
   "fga": 6
  },
  "Tony Bradley": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 3.51,
   "fga": 6
  },
  "Toumani Camara": {
   "gp": 12,
   "tpm": 34,
   "xtpm": 27.76,
   "fgm": 55,
   "xfgm": 43.99,
   "fga": 107
  },
  "Trae Young": {
   "gp": 13,
   "tpm": 28,
   "xtpm": 31.39,
   "fgm": 70,
   "xfgm": 74.61,
   "fga": 178
  },
  "Trayce Jackson-Davis": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 12,
   "xfgm": 10.09,
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
   "xtpm": 23.34,
   "fgm": 44,
   "xfgm": 48.82,
   "fga": 121
  },
  "Tre Jones": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 4.61,
   "fgm": 45,
   "xfgm": 49.53,
   "fga": 90
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
   "xtpm": 2.11,
   "fgm": 12,
   "xfgm": 12.42,
   "fga": 22
  },
  "Trevon Brazile": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 8.93,
   "fgm": 30,
   "xfgm": 26.26,
   "fga": 53
  },
  "Trey Lyles": {
   "gp": 13,
   "tpm": 11,
   "xtpm": 13.15,
   "fgm": 26,
   "xfgm": 24.02,
   "fga": 56
  },
  "Trey Murphy III": {
   "gp": 9,
   "tpm": 20,
   "xtpm": 18.67,
   "fgm": 47,
   "xfgm": 45.76,
   "fga": 101
  },
  "Tristan Enaruna": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.78,
   "fgm": 3,
   "xfgm": 5.07,
   "fga": 10
  },
  "Tristan da Silva": {
   "gp": 10,
   "tpm": 34,
   "xtpm": 31.21,
   "fgm": 55,
   "xfgm": 49.55,
   "fga": 123
  },
  "Ty Jerome": {
   "gp": 11,
   "tpm": 28,
   "xtpm": 27.48,
   "fgm": 98,
   "xfgm": 83.74,
   "fga": 202
  },
  "Tyler Herro": {
   "gp": 12,
   "tpm": 35,
   "xtpm": 32.47,
   "fgm": 89,
   "xfgm": 88.35,
   "fga": 200
  },
  "Tyler Kolek": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 6.37,
   "fgm": 14,
   "xfgm": 14.27,
   "fga": 32
  },
  "Tyrese Haliburton": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 9.59,
   "fgm": 32,
   "xfgm": 26.83,
   "fga": 62
  },
  "Tyrese Maxey": {
   "gp": 13,
   "tpm": 32,
   "xtpm": 31.76,
   "fgm": 117,
   "xfgm": 110.87,
   "fga": 235
  },
  "Tyrese Proctor": {
   "gp": 13,
   "tpm": 23,
   "xtpm": 17.35,
   "fgm": 44,
   "xfgm": 35.34,
   "fga": 83
  },
  "Tyus Jones": {
   "gp": 11,
   "tpm": 3,
   "xtpm": 4.57,
   "fgm": 9,
   "xfgm": 11.09,
   "fga": 26
  },
  "VJ Edgecombe": {
   "gp": 12,
   "tpm": 20,
   "xtpm": 20.22,
   "fgm": 63,
   "xfgm": 65.7,
   "fga": 136
  },
  "Victor Wembanyama": {
   "gp": 13,
   "tpm": 23,
   "xtpm": 25.69,
   "fgm": 137,
   "xfgm": 128.49,
   "fga": 254
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
   "gp": 13,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 81,
   "xfgm": 74.82,
   "fga": 120
  },
  "Walter Clayton Jr.": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 13.75,
   "fgm": 27,
   "xfgm": 28.08,
   "fga": 66
  },
  "Wendell Carter Jr.": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 10.67,
   "fgm": 58,
   "xfgm": 47.4,
   "fga": 96
  },
  "Will Richard": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 9.26,
   "fgm": 24,
   "xfgm": 22.96,
   "fga": 50
  },
  "Will Riley": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 3.2,
   "fgm": 7,
   "xfgm": 7.34,
   "fga": 16
  },
  "Yang Hansen": {
   "gp": 7,
   "tpm": 5,
   "xtpm": 3.16,
   "fgm": 8,
   "xfgm": 7.55,
   "fga": 17
  },
  "Yaxel Lendeborg": {
   "gp": 13,
   "tpm": 29,
   "xtpm": 24.73,
   "fgm": 89,
   "xfgm": 85.23,
   "fga": 183
  },
  "Yves Missi": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 9,
   "xfgm": 7.46,
   "fga": 13
  },
  "Zaccharie Risacher": {
   "gp": 13,
   "tpm": 14,
   "xtpm": 16.62,
   "fgm": 42,
   "xfgm": 46.81,
   "fga": 99
  },
  "Zach Collins": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 2.83,
   "fgm": 9,
   "xfgm": 14.84,
   "fga": 28
  },
  "Zach Edey": {
   "gp": 10,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 27,
   "xfgm": 29.1,
   "fga": 52
  },
  "Zach LaVine": {
   "gp": 12,
   "tpm": 34,
   "xtpm": 30.71,
   "fgm": 85,
   "xfgm": 72.86,
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
   "gp": 10,
   "tpm": 20,
   "xtpm": 15.2,
   "fgm": 40,
   "xfgm": 32.03,
   "fga": 71
  },
  "Zion Williamson": {
   "gp": 13,
   "tpm": 6,
   "xtpm": 4.59,
   "fgm": 100,
   "xfgm": 97.28,
   "fga": 166
  },
  "Zuby Ejiofor": {
   "gp": 7,
   "tpm": 4,
   "xtpm": 3.18,
   "fgm": 14,
   "xfgm": 12.62,
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
