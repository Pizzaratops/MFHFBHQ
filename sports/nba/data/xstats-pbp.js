// ============================================================
//  x3PM / xFGM der laufenden Saison aus Play-by-Play
//  Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data (nicht unser Projekt, frei veröffentlichte Daten)
//  Methode: Josh Lloyd (joshlloydfantasy.com/research/xstats-method)
//  Erzeugt von scripts/xstats-pbp.py am 2026-11-12 · Saison 2026-27 · Stand 2026-11-11
//  Wird von scripts/build-live-projections.js gelesen (3PM, FG%).
//  META {"season": "2026-27", "assetUpdated": "Thu, 12 Nov 2026 13:22:17 GMT"}
// ============================================================
const XSTATS_PBP = {
 "meta": {
  "season": "2026-27",
  "through": "2026-11-11",
  "players": 464,
  "games": 170,
  "shots": 29857,
  "assetUpdated": "Thu, 12 Nov 2026 13:22:17 GMT",
  "zoneRates": {
   "C3": 0.3715,
   "AB3": 0.3516,
   "RA": 0.6596,
   "PAINT": 0.439,
   "MID": 0.4074
  },
  "source": "Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data"
 },
 "players": {
  "AJ Dybantsa": {
   "gp": 8,
   "tpm": 6,
   "xtpm": 9.2,
   "fgm": 48,
   "xfgm": 56.12,
   "fga": 112
  },
  "AJ Green": {
   "gp": 12,
   "tpm": 23,
   "xtpm": 18.83,
   "fgm": 26,
   "xfgm": 21.62,
   "fga": 59
  },
  "AJ Johnson": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 3.87,
   "fga": 7
  },
  "Aaron Gordon": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 15.26,
   "fgm": 35,
   "xfgm": 42.72,
   "fga": 92
  },
  "Aaron Nesmith": {
   "gp": 10,
   "tpm": 18,
   "xtpm": 21.45,
   "fgm": 38,
   "xfgm": 44.33,
   "fga": 103
  },
  "Aaron Wiggins": {
   "gp": 12,
   "tpm": 36,
   "xtpm": 30.42,
   "fgm": 68,
   "xfgm": 61.2,
   "fga": 147
  },
  "Ace Bailey": {
   "gp": 12,
   "tpm": 18,
   "xtpm": 24.46,
   "fgm": 67,
   "xfgm": 63.02,
   "fga": 145
  },
  "Aday Mara": {
   "gp": 12,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 44,
   "xfgm": 43.14,
   "fga": 73
  },
  "Adem Bona": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 8,
   "xfgm": 12.04,
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
   "gp": 11,
   "tpm": 9,
   "xtpm": 12.09,
   "fgm": 81,
   "xfgm": 76.36,
   "fga": 155
  },
  "Al Horford": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 11.31,
   "fgm": 18,
   "xfgm": 18.72,
   "fga": 46
  },
  "Alex Caruso": {
   "gp": 9,
   "tpm": 15,
   "xtpm": 10.61,
   "fgm": 21,
   "xfgm": 17.14,
   "fga": 42
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
   "xfgm": 7.25,
   "fga": 15
  },
  "Alex Sarr": {
   "gp": 11,
   "tpm": 7,
   "xtpm": 12.03,
   "fgm": 41,
   "xfgm": 42.49,
   "fga": 86
  },
  "Alijah Martin": {
   "gp": 10,
   "tpm": 12,
   "xtpm": 7.09,
   "fgm": 23,
   "xfgm": 16.1,
   "fga": 34
  },
  "Allen Graves": {
   "gp": 11,
   "tpm": 7,
   "xtpm": 7.85,
   "fgm": 20,
   "xfgm": 21.45,
   "fga": 45
  },
  "Alperen Sengun": {
   "gp": 10,
   "tpm": 10,
   "xtpm": 7.4,
   "fgm": 81,
   "xfgm": 81.6,
   "fga": 156
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
   "gp": 12,
   "tpm": 2,
   "xtpm": 3.56,
   "fgm": 71,
   "xfgm": 76.79,
   "fga": 138
  },
  "Andre Drummond": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 20,
   "xfgm": 29.81,
   "fga": 48
  },
  "Andrew Nembhard": {
   "gp": 10,
   "tpm": 24,
   "xtpm": 19.75,
   "fgm": 58,
   "xfgm": 54.29,
   "fga": 125
  },
  "Andrew Wiggins": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 15.96,
   "fgm": 38,
   "xfgm": 37.92,
   "fga": 90
  },
  "Anfernee Simons": {
   "gp": 12,
   "tpm": 27,
   "xtpm": 24.3,
   "fgm": 39,
   "xfgm": 39.96,
   "fga": 98
  },
  "Anthony Black": {
   "gp": 8,
   "tpm": 17,
   "xtpm": 13.77,
   "fgm": 47,
   "xfgm": 42.48,
   "fga": 98
  },
  "Anthony Davis": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 9.53,
   "fgm": 96,
   "xfgm": 93.32,
   "fga": 187
  },
  "Anthony Edwards": {
   "gp": 4,
   "tpm": 18,
   "xtpm": 15.9,
   "fgm": 50,
   "xfgm": 46.49,
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
   "xfgm": 7.25,
   "fga": 15
  },
  "Ausar Thompson": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 34,
   "xfgm": 37.34,
   "fga": 70
  },
  "Austin Reaves": {
   "gp": 12,
   "tpm": 27,
   "xtpm": 23.3,
   "fgm": 97,
   "xfgm": 82.81,
   "fga": 189
  },
  "Ayo Dosunmu": {
   "gp": 11,
   "tpm": 21,
   "xtpm": 15.92,
   "fgm": 76,
   "xfgm": 72.04,
   "fga": 146
  },
  "Baba Miller": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 1.78,
   "fgm": 13,
   "xfgm": 11.23,
   "fga": 22
  },
  "Bam Adebayo": {
   "gp": 11,
   "tpm": 6,
   "xtpm": 12.43,
   "fgm": 71,
   "xfgm": 67.28,
   "fga": 140
  },
  "Baylor Scheierman": {
   "gp": 12,
   "tpm": 17,
   "xtpm": 12.84,
   "fgm": 26,
   "xfgm": 23.66,
   "fga": 58
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
   "xtpm": 9.18,
   "fgm": 23,
   "xfgm": 30.09,
   "fga": 63
  },
  "Bennett Stirtz": {
   "gp": 12,
   "tpm": 20,
   "xtpm": 15.55,
   "fgm": 32,
   "xfgm": 29.99,
   "fga": 70
  },
  "Bilal Coulibaly": {
   "gp": 11,
   "tpm": 4,
   "xtpm": 9.71,
   "fgm": 30,
   "xfgm": 32.51,
   "fga": 64
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
   "gp": 11,
   "tpm": 14,
   "xtpm": 15.61,
   "fgm": 28,
   "xfgm": 31.83,
   "fga": 77
  },
  "Bogdan Bogdanović": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 8.93,
   "fgm": 20,
   "xfgm": 15.8,
   "fga": 40
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
   "gp": 11,
   "tpm": 16,
   "xtpm": 16.58,
   "fgm": 33,
   "xfgm": 31.36,
   "fga": 75
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
   "gp": 6,
   "tpm": 0,
   "xtpm": 1.8,
   "fgm": 5,
   "xfgm": 5.06,
   "fga": 11
  },
  "Brandin Podziemski": {
   "gp": 10,
   "tpm": 29,
   "xtpm": 25.83,
   "fgm": 62,
   "xfgm": 54.13,
   "fga": 129
  },
  "Brandon Miller": {
   "gp": 10,
   "tpm": 27,
   "xtpm": 36.78,
   "fgm": 73,
   "xfgm": 87.11,
   "fga": 205
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
   "gp": 12,
   "tpm": 10,
   "xtpm": 14.87,
   "fgm": 40,
   "xfgm": 42.99,
   "fga": 94
  },
  "Brice Sensabaugh": {
   "gp": 12,
   "tpm": 18,
   "xtpm": 15.88,
   "fgm": 32,
   "xfgm": 32.82,
   "fga": 81
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
   "gp": 10,
   "tpm": 13,
   "xtpm": 10.59,
   "fgm": 53,
   "xfgm": 43.51,
   "fga": 93
  },
  "Brooks Barnhizer": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 3,
   "xfgm": 3.67,
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
   "xfgm": 11.82,
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
   "gp": 12,
   "tpm": 17,
   "xtpm": 13.13,
   "fgm": 19,
   "xfgm": 19.81,
   "fga": 50
  },
  "Buddy Hield": {
   "gp": 8,
   "tpm": 8,
   "xtpm": 7.38,
   "fgm": 18,
   "xfgm": 17.27,
   "fga": 37
  },
  "CJ McCollum": {
   "gp": 12,
   "tpm": 22,
   "xtpm": 21.82,
   "fgm": 60,
   "xfgm": 63.86,
   "fga": 145
  },
  "Cade Cunningham": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 22.91,
   "fgm": 80,
   "xfgm": 78.74,
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
   "xtpm": 3.62,
   "fgm": 9,
   "xfgm": 8.51,
   "fga": 20
  },
  "Caleb Wilson": {
   "gp": 10,
   "tpm": 23,
   "xtpm": 25.16,
   "fgm": 68,
   "xfgm": 75.19,
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
   "gp": 11,
   "tpm": 20,
   "xtpm": 13.05,
   "fgm": 37,
   "xfgm": 27.38,
   "fga": 68
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
   "gp": 11,
   "tpm": 20,
   "xtpm": 24.01,
   "fgm": 57,
   "xfgm": 68.41,
   "fga": 153
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
   "gp": 7,
   "tpm": 16,
   "xtpm": 13.13,
   "fgm": 32,
   "xfgm": 27.94,
   "fga": 64
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
   "gp": 11,
   "tpm": 10,
   "xtpm": 9.63,
   "fgm": 14,
   "xfgm": 15.53,
   "fga": 37
  },
  "Cason Wallace": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.56,
   "fgm": 8,
   "xfgm": 9.27,
   "fga": 20
  },
  "Cedric Coward": {
   "gp": 10,
   "tpm": 23,
   "xtpm": 18.01,
   "fgm": 46,
   "xfgm": 45.63,
   "fga": 103
  },
  "Chaney Johnson": {
   "gp": 11,
   "tpm": 7,
   "xtpm": 8.58,
   "fgm": 17,
   "xfgm": 22.33,
   "fga": 49
  },
  "Charles Bassey": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 30,
   "xfgm": 25.76,
   "fga": 45
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
   "xfgm": 14.63,
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
   "gp": 10,
   "tpm": 5,
   "xtpm": 9.18,
   "fgm": 14,
   "xfgm": 18.12,
   "fga": 44
  },
  "Christian Braun": {
   "gp": 10,
   "tpm": 16,
   "xtpm": 16.78,
   "fgm": 48,
   "xfgm": 47.33,
   "fga": 99
  },
  "Clint Capela": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 9,
   "xfgm": 8.79,
   "fga": 14
  },
  "Coby White": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 7.03,
   "fgm": 9,
   "xfgm": 17.08,
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
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.52,
   "fga": 6
  },
  "Collin Gillespie": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 21.19,
   "fgm": 26,
   "xfgm": 30.36,
   "fga": 78
  },
  "Collin Murray-Boyles": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 7.46,
   "fgm": 38,
   "xfgm": 41.68,
   "fga": 82
  },
  "Collin Sexton": {
   "gp": 12,
   "tpm": 11,
   "xtpm": 14.24,
   "fgm": 43,
   "xfgm": 46.95,
   "fga": 99
  },
  "Cooper Flagg": {
   "gp": 10,
   "tpm": 14,
   "xtpm": 16.96,
   "fgm": 90,
   "xfgm": 82.97,
   "fga": 180
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
   "gp": 9,
   "tpm": 1,
   "xtpm": 1.43,
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
   "gp": 8,
   "tpm": 4,
   "xtpm": 4.61,
   "fgm": 8,
   "xfgm": 7.47,
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
   "gp": 3,
   "tpm": 3,
   "xtpm": 2.15,
   "fgm": 5,
   "xfgm": 3.25,
   "fga": 8
  },
  "Damian Lillard": {
   "gp": 11,
   "tpm": 31,
   "xtpm": 32.74,
   "fgm": 64,
   "xfgm": 62.11,
   "fga": 150
  },
  "Daniel Gafford": {
   "gp": 11,
   "tpm": 1,
   "xtpm": 0.37,
   "fgm": 42,
   "xfgm": 35.03,
   "fga": 59
  },
  "Daniss Jenkins": {
   "gp": 10,
   "tpm": 21,
   "xtpm": 17.35,
   "fgm": 42,
   "xfgm": 39.03,
   "fga": 93
  },
  "Danny Wolf": {
   "gp": 6,
   "tpm": 11,
   "xtpm": 8.48,
   "fgm": 18,
   "xfgm": 17.49,
   "fga": 40
  },
  "Darius Acuff Jr.": {
   "gp": 11,
   "tpm": 34,
   "xtpm": 36.27,
   "fgm": 105,
   "xfgm": 109.21,
   "fga": 251
  },
  "Darius Garland": {
   "gp": 10,
   "tpm": 24,
   "xtpm": 23.95,
   "fgm": 71,
   "xfgm": 66.05,
   "fga": 152
  },
  "Darryn Peterson": {
   "gp": 12,
   "tpm": 25,
   "xtpm": 24.71,
   "fgm": 69,
   "xfgm": 72.33,
   "fga": 170
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
   "gp": 11,
   "tpm": 25,
   "xtpm": 21.88,
   "fgm": 68,
   "xfgm": 61.89,
   "fga": 137
  },
  "Day'Ron Sharpe": {
   "gp": 11,
   "tpm": 5,
   "xtpm": 5.04,
   "fgm": 32,
   "xfgm": 34.06,
   "fga": 61
  },
  "De'Aaron Fox": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 13.15,
   "fgm": 57,
   "xfgm": 51.94,
   "fga": 111
  },
  "De'Andre Hunter": {
   "gp": 10,
   "tpm": 21,
   "xtpm": 20.24,
   "fgm": 45,
   "xfgm": 43.71,
   "fga": 105
  },
  "De'Anthony Melton": {
   "gp": 12,
   "tpm": 27,
   "xtpm": 22.31,
   "fgm": 37,
   "xfgm": 36.78,
   "fga": 90
  },
  "DeAndre Jordan": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 2.64,
   "fga": 4
  },
  "DeMar DeRozan": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 5.02,
   "fgm": 32,
   "xfgm": 34.06,
   "fga": 78
  },
  "Dean Wade": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 7.11,
   "fgm": 13,
   "xfgm": 13.01,
   "fga": 30
  },
  "Deandre Ayton": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 27,
   "xfgm": 24.58,
   "fga": 41
  },
  "Dejounte Murray": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 9.63,
   "fgm": 44,
   "xfgm": 50.53,
   "fga": 102
  },
  "Deni Avdija": {
   "gp": 11,
   "tpm": 21,
   "xtpm": 21.84,
   "fgm": 82,
   "xfgm": 83.89,
   "fga": 173
  },
  "Dennis Schröder": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 12.39,
   "fgm": 32,
   "xfgm": 41.76,
   "fga": 88
  },
  "Derik Queen": {
   "gp": 12,
   "tpm": 4,
   "xtpm": 3.93,
   "fgm": 46,
   "xfgm": 50.79,
   "fga": 96
  },
  "Derrick Jones Jr.": {
   "gp": 9,
   "tpm": 17,
   "xtpm": 12.78,
   "fgm": 37,
   "xfgm": 34.47,
   "fga": 73
  },
  "Derrick White": {
   "gp": 12,
   "tpm": 21,
   "xtpm": 22.31,
   "fgm": 56,
   "xfgm": 55.22,
   "fga": 128
  },
  "Desmond Bane": {
   "gp": 10,
   "tpm": 39,
   "xtpm": 35.4,
   "fgm": 58,
   "xfgm": 59.71,
   "fga": 148
  },
  "Devin Booker": {
   "gp": 10,
   "tpm": 20,
   "xtpm": 19.73,
   "fgm": 86,
   "xfgm": 77.09,
   "fga": 178
  },
  "Devin Vassell": {
   "gp": 10,
   "tpm": 16,
   "xtpm": 15.98,
   "fgm": 39,
   "xfgm": 41.3,
   "fga": 96
  },
  "Dillon Brooks": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 15.88,
   "fgm": 55,
   "xfgm": 54.56,
   "fga": 124
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
   "gp": 10,
   "tpm": 2,
   "xtpm": 1.76,
   "fgm": 55,
   "xfgm": 45.14,
   "fga": 82
  },
  "Donovan Clingan": {
   "gp": 11,
   "tpm": 12,
   "xtpm": 9.16,
   "fgm": 47,
   "xfgm": 43.67,
   "fga": 82
  },
  "Donovan Mitchell": {
   "gp": 12,
   "tpm": 32,
   "xtpm": 29.92,
   "fgm": 94,
   "xfgm": 87.98,
   "fga": 194
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
   "gp": 4,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 3,
   "xfgm": 1.8,
   "fga": 4
  },
  "Draymond Green": {
   "gp": 10,
   "tpm": 3,
   "xtpm": 3.89,
   "fgm": 13,
   "xfgm": 15.75,
   "fga": 32
  },
  "Dru Smith": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 2.11,
   "fgm": 4,
   "xfgm": 3.65,
   "fga": 9
  },
  "Duncan Robinson": {
   "gp": 10,
   "tpm": 42,
   "xtpm": 32.51,
   "fgm": 55,
   "xfgm": 46.25,
   "fga": 118
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
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 8.79,
   "fga": 15
  },
  "Dylan Harper": {
   "gp": 12,
   "tpm": 14,
   "xtpm": 14.1,
   "fgm": 83,
   "xfgm": 83.59,
   "fga": 167
  },
  "Dyson Daniels": {
   "gp": 12,
   "tpm": 2,
   "xtpm": 5.67,
   "fgm": 52,
   "xfgm": 56.39,
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
   "gp": 5,
   "tpm": 10,
   "xtpm": 9.51,
   "fgm": 14,
   "xfgm": 15.41,
   "fga": 37
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
   "gp": 11,
   "tpm": 13,
   "xtpm": 11.29,
   "fgm": 18,
   "xfgm": 18.19,
   "fga": 47
  },
  "Evan Mobley": {
   "gp": 12,
   "tpm": 23,
   "xtpm": 16.94,
   "fgm": 76,
   "xfgm": 68.92,
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
   "gp": 11,
   "tpm": 14,
   "xtpm": 19.87,
   "fgm": 94,
   "xfgm": 97.12,
   "fga": 205
  },
  "Fred VanVleet": {
   "gp": 10,
   "tpm": 29,
   "xtpm": 26.47,
   "fgm": 46,
   "xfgm": 40.86,
   "fga": 107
  },
  "GG Jackson": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 8.89,
   "fgm": 22,
   "xfgm": 27.97,
   "fga": 59
  },
  "Gary Payton II": {
   "gp": 10,
   "tpm": 4,
   "xtpm": 6.37,
   "fgm": 22,
   "xfgm": 22.85,
   "fga": 47
  },
  "Gary Trent Jr.": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 3.16,
   "fgm": 6,
   "xfgm": 4.23,
   "fga": 11
  },
  "Georges Niang": {
   "gp": 12,
   "tpm": 16,
   "xtpm": 16.08,
   "fgm": 37,
   "xfgm": 34.28,
   "fga": 81
  },
  "Giannis Antetokounmpo": {
   "gp": 11,
   "tpm": 6,
   "xtpm": 9.49,
   "fgm": 119,
   "xfgm": 110.09,
   "fga": 210
  },
  "Goga Bitadze": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 10,
   "xfgm": 11.21,
   "fga": 18
  },
  "Gradey Dick": {
   "gp": 10,
   "tpm": 8,
   "xtpm": 6.76,
   "fgm": 27,
   "xfgm": 26.7,
   "fga": 53
  },
  "Graham Ike": {
   "gp": 9,
   "tpm": 4,
   "xtpm": 2.11,
   "fgm": 16,
   "xfgm": 16.58,
   "fga": 31
  },
  "Grayson Allen": {
   "gp": 11,
   "tpm": 38,
   "xtpm": 28.56,
   "fgm": 48,
   "xfgm": 40.2,
   "fga": 104
  },
  "Gui Santos": {
   "gp": 9,
   "tpm": 4,
   "xtpm": 5.31,
   "fgm": 16,
   "xfgm": 18.94,
   "fga": 39
  },
  "Hannes Steinbach": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 9.89,
   "fga": 16
  },
  "Harrison Barnes": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 10.3,
   "fgm": 16,
   "xfgm": 15.35,
   "fga": 38
  },
  "Herbert Jones": {
   "gp": 12,
   "tpm": 8,
   "xtpm": 10.71,
   "fgm": 28,
   "xfgm": 36.1,
   "fga": 75
  },
  "Hugo González": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 7.87,
   "fgm": 17,
   "xfgm": 18.21,
   "fga": 38
  },
  "Immanuel Quickley": {
   "gp": 9,
   "tpm": 22,
   "xtpm": 25.08,
   "fgm": 48,
   "xfgm": 50.3,
   "fga": 124
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
   "gp": 10,
   "tpm": 3,
   "xtpm": 7.17,
   "fgm": 14,
   "xfgm": 19.26,
   "fga": 39
  },
  "Isaiah Collier": {
   "gp": 12,
   "tpm": 5,
   "xtpm": 4.94,
   "fgm": 29,
   "xfgm": 30.07,
   "fga": 64
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
   "gp": 5,
   "tpm": 0,
   "xtpm": 1.07,
   "fgm": 0,
   "xfgm": 1.07,
   "fga": 3
  },
  "Isaiah Hartenstein": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 41,
   "xfgm": 44.98,
   "fga": 83
  },
  "Isaiah Jackson": {
   "gp": 9,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 32,
   "xfgm": 31.62,
   "fga": 55
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
   "gp": 8,
   "tpm": 9,
   "xtpm": 5.67,
   "fgm": 33,
   "xfgm": 25.85,
   "fga": 51
  },
  "Ivica Zubac": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 30,
   "xfgm": 30.33,
   "fga": 52
  },
  "Ja Morant": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 4.94,
   "fgm": 26,
   "xfgm": 22.04,
   "fga": 48
  },
  "Ja'Kobe Walter": {
   "gp": 11,
   "tpm": 26,
   "xtpm": 26.32,
   "fgm": 41,
   "xfgm": 42.48,
   "fga": 104
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
   "gp": 12,
   "tpm": 32,
   "xtpm": 26.84,
   "fgm": 71,
   "xfgm": 63.02,
   "fga": 145
  },
  "Jabari Walker": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 2.81,
   "fgm": 15,
   "xfgm": 16.0,
   "fga": 28
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
   "gp": 11,
   "tpm": 16,
   "xtpm": 17.59,
   "fgm": 77,
   "xfgm": 71.06,
   "fga": 150
  },
  "Jae'Sean Tate": {
   "gp": 7,
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
   "gp": 12,
   "tpm": 21,
   "xtpm": 18.62,
   "fgm": 69,
   "xfgm": 70.76,
   "fga": 145
  },
  "Jake LaRavia": {
   "gp": 12,
   "tpm": 12,
   "xtpm": 8.21,
   "fgm": 24,
   "xfgm": 24.63,
   "fga": 50
  },
  "Jakob Poeltl": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 34,
   "xfgm": 29.88,
   "fga": 53
  },
  "Jalen Brunson": {
   "gp": 11,
   "tpm": 29,
   "xtpm": 27.81,
   "fgm": 98,
   "xfgm": 101.82,
   "fga": 228
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
   "gp": 10,
   "tpm": 9,
   "xtpm": 11.64,
   "fgm": 46,
   "xfgm": 52.51,
   "fga": 108
  },
  "Jalen Johnson": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 13.73,
   "fgm": 62,
   "xfgm": 68.25,
   "fga": 138
  },
  "Jalen Pickett": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.05,
   "fgm": 4,
   "xfgm": 3.41,
   "fga": 8
  },
  "Jalen Slawson": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 3.56,
   "fgm": 11,
   "xfgm": 11.84,
   "fga": 24
  },
  "Jalen Smith": {
   "gp": 10,
   "tpm": 18,
   "xtpm": 17.39,
   "fgm": 49,
   "xfgm": 43.89,
   "fga": 92
  },
  "Jalen Suggs": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 3.24,
   "fgm": 10,
   "xfgm": 13.22,
   "fga": 28
  },
  "Jalen Williams": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.16,
   "fgm": 15,
   "xfgm": 19.14,
   "fga": 39
  },
  "Jamal Cain": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 13.19,
   "fgm": 24,
   "xfgm": 22.82,
   "fga": 58
  },
  "Jamal Murray": {
   "gp": 10,
   "tpm": 40,
   "xtpm": 27.54,
   "fgm": 87,
   "xfgm": 74.26,
   "fga": 171
  },
  "Jamal Shead": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 13.07,
   "fgm": 25,
   "xfgm": 31.9,
   "fga": 72
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
   "gp": 12,
   "tpm": 32,
   "xtpm": 29.2,
   "fgm": 57,
   "xfgm": 62.88,
   "fga": 146
  },
  "James Wiseman": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 5.9,
   "fga": 10
  },
  "Jamison Battle": {
   "gp": 11,
   "tpm": 23,
   "xtpm": 19.13,
   "fgm": 34,
   "xfgm": 28.98,
   "fga": 71
  },
  "Jarace Walker": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 15.24,
   "fgm": 29,
   "xfgm": 35.8,
   "fga": 80
  },
  "Jared McCain": {
   "gp": 12,
   "tpm": 23,
   "xtpm": 26.22,
   "fgm": 55,
   "xfgm": 59.42,
   "fga": 136
  },
  "Jaren Jackson Jr.": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 4.96,
   "fgm": 22,
   "xfgm": 20.12,
   "fga": 44
  },
  "Jaron Pierre Jr.": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 1,
   "xfgm": 3.03,
   "fga": 6
  },
  "Jarred Vanderbilt": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 5.94,
   "fga": 9
  },
  "Jarrett Allen": {
   "gp": 10,
   "tpm": 3,
   "xtpm": 1.41,
   "fgm": 50,
   "xfgm": 45.27,
   "fga": 78
  },
  "Jase Richardson": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 12.84,
   "fgm": 25,
   "xfgm": 34.3,
   "fga": 78
  },
  "Javon Small": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 4.92,
   "fgm": 9,
   "xfgm": 10.85,
   "fga": 26
  },
  "Javonte Green": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 13.17,
   "fgm": 19,
   "xfgm": 20.39,
   "fga": 49
  },
  "Jaxson Hayes": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 36,
   "xfgm": 31.99,
   "fga": 58
  },
  "Jay Huff": {
   "gp": 10,
   "tpm": 8,
   "xtpm": 10.3,
   "fgm": 26,
   "xfgm": 24.14,
   "fga": 52
  },
  "Jaylen Brown": {
   "gp": 11,
   "tpm": 21,
   "xtpm": 19.42,
   "fgm": 88,
   "xfgm": 88.93,
   "fga": 185
  },
  "Jaylen Clark": {
   "gp": 10,
   "tpm": 8,
   "xtpm": 7.6,
   "fgm": 15,
   "xfgm": 15.7,
   "fga": 37
  },
  "Jaylen Wells": {
   "gp": 11,
   "tpm": 24,
   "xtpm": 20.67,
   "fgm": 46,
   "xfgm": 38.28,
   "fga": 91
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
   "xfgm": 12.06,
   "fga": 30
  },
  "Jaylon Tyson": {
   "gp": 6,
   "tpm": 6,
   "xtpm": 9.59,
   "fgm": 17,
   "xfgm": 19.86,
   "fga": 44
  },
  "Jayson Kent": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 1.41,
   "fgm": 2,
   "xfgm": 4.92,
   "fga": 10
  },
  "Jayson Tatum": {
   "gp": 11,
   "tpm": 26,
   "xtpm": 29.96,
   "fgm": 88,
   "xfgm": 97.75,
   "fga": 214
  },
  "Jerami Grant": {
   "gp": 11,
   "tpm": 19,
   "xtpm": 14.73,
   "fgm": 42,
   "xfgm": 42.92,
   "fga": 92
  },
  "Jeremiah Fears": {
   "gp": 12,
   "tpm": 14,
   "xtpm": 16.6,
   "fgm": 72,
   "xfgm": 80.1,
   "fga": 160
  },
  "Jericho Sims": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 2,
   "xfgm": 2.79,
   "fga": 5
  },
  "Jett Howard": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.43,
   "fgm": 4,
   "xfgm": 2.93,
   "fga": 7
  },
  "Jevon Carter": {
   "gp": 7,
   "tpm": 9,
   "xtpm": 10.3,
   "fgm": 11,
   "xfgm": 13.31,
   "fga": 35
  },
  "Joan Beringer": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 25,
   "xfgm": 27.26,
   "fga": 43
  },
  "Jock Landale": {
   "gp": 8,
   "tpm": 4,
   "xtpm": 6.43,
   "fgm": 19,
   "xfgm": 20.24,
   "fga": 41
  },
  "Joel Embiid": {
   "gp": 10,
   "tpm": 4,
   "xtpm": 11.6,
   "fgm": 54,
   "xfgm": 68.58,
   "fga": 146
  },
  "John Collins": {
   "gp": 10,
   "tpm": 10,
   "xtpm": 9.28,
   "fgm": 44,
   "xfgm": 44.5,
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
   "xtpm": 17.73,
   "fgm": 48,
   "xfgm": 52.54,
   "fga": 110
  },
  "Jonathan Mogbo": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 2.17,
   "fgm": 6,
   "xfgm": 8.54,
   "fga": 17
  },
  "Jordan Clarkson": {
   "gp": 9,
   "tpm": 6,
   "xtpm": 3.58,
   "fgm": 23,
   "xfgm": 22.22,
   "fga": 44
  },
  "Jordan Goodwin": {
   "gp": 6,
   "tpm": 15,
   "xtpm": 10.96,
   "fgm": 21,
   "xfgm": 16.42,
   "fga": 41
  },
  "Jordan Hawkins": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 5.33,
   "fgm": 10,
   "xfgm": 10.04,
   "fga": 25
  },
  "Jordan McLaughlin": {
   "gp": 7,
   "tpm": 1,
   "xtpm": 1.8,
   "fgm": 4,
   "xfgm": 8.61,
   "fga": 17
  },
  "Jordan Poole": {
   "gp": 6,
   "tpm": 6,
   "xtpm": 7.05,
   "fgm": 10,
   "xfgm": 15.09,
   "fga": 34
  },
  "Jordan Walsh": {
   "gp": 12,
   "tpm": 8,
   "xtpm": 10.77,
   "fgm": 21,
   "xfgm": 23.89,
   "fga": 51
  },
  "Jose Alvarado": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 2.81,
   "fgm": 4,
   "xfgm": 6.99,
   "fga": 15
  },
  "Josh Dix": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 4.24,
   "fgm": 7,
   "xfgm": 9.26,
   "fga": 21
  },
  "Josh Giddey": {
   "gp": 10,
   "tpm": 10,
   "xtpm": 12.35,
   "fgm": 39,
   "xfgm": 45.27,
   "fga": 93
  },
  "Josh Green": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 7.56,
   "fgm": 13,
   "xfgm": 15.85,
   "fga": 36
  },
  "Josh Hart": {
   "gp": 8,
   "tpm": 13,
   "xtpm": 14.53,
   "fgm": 25,
   "xfgm": 28.54,
   "fga": 65
  },
  "Josh Minott": {
   "gp": 8,
   "tpm": 5,
   "xtpm": 7.44,
   "fgm": 11,
   "xfgm": 11.84,
   "fga": 28
  },
  "Josh Okogie": {
   "gp": 11,
   "tpm": 6,
   "xtpm": 6.41,
   "fgm": 11,
   "xfgm": 16.48,
   "fga": 38
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
   "gp": 11,
   "tpm": 28,
   "xtpm": 22.33,
   "fgm": 48,
   "xfgm": 40.31,
   "fga": 96
  },
  "Julian Champagnie": {
   "gp": 12,
   "tpm": 34,
   "xtpm": 27.7,
   "fgm": 40,
   "xfgm": 32.98,
   "fga": 88
  },
  "Julian Reese": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 2.2,
   "fga": 4
  },
  "Julius Randle": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 17.33,
   "fgm": 70,
   "xfgm": 76.01,
   "fga": 159
  },
  "Justin Champagnie": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.48,
   "fgm": 12,
   "xfgm": 10.83,
   "fga": 20
  },
  "Justin Edwards": {
   "gp": 5,
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
   "gp": 11,
   "tpm": 21,
   "xtpm": 18.65,
   "fgm": 82,
   "xfgm": 76.68,
   "fga": 149
  },
  "Karlo Matković": {
   "gp": 11,
   "tpm": 16,
   "xtpm": 12.94,
   "fgm": 36,
   "xfgm": 29.64,
   "fga": 62
  },
  "Kasparas Jakučionis": {
   "gp": 12,
   "tpm": 7,
   "xtpm": 10.63,
   "fgm": 24,
   "xfgm": 28.87,
   "fga": 59
  },
  "Kawhi Leonard": {
   "gp": 2,
   "tpm": 4,
   "xtpm": 4.92,
   "fgm": 12,
   "xfgm": 17.19,
   "fga": 37
  },
  "Keaton Wagler": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 16.94,
   "fgm": 28,
   "xfgm": 35.57,
   "fga": 85
  },
  "Keegan Murray": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 4.65,
   "fgm": 12,
   "xfgm": 15.09,
   "fga": 36
  },
  "Kel'el Ware": {
   "gp": 12,
   "tpm": 6,
   "xtpm": 11.29,
   "fgm": 38,
   "xfgm": 51.67,
   "fga": 97
  },
  "Keldon Johnson": {
   "gp": 12,
   "tpm": 2,
   "xtpm": 4.98,
   "fgm": 37,
   "xfgm": 45.2,
   "fga": 83
  },
  "Kelly Oubre Jr.": {
   "gp": 10,
   "tpm": 8,
   "xtpm": 13.48,
   "fgm": 38,
   "xfgm": 40.23,
   "fga": 85
  },
  "Kenrich Williams": {
   "gp": 12,
   "tpm": 17,
   "xtpm": 12.76,
   "fgm": 28,
   "xfgm": 28.17,
   "fga": 64
  },
  "Kentavious Caldwell-Pope": {
   "gp": 12,
   "tpm": 15,
   "xtpm": 11.72,
   "fgm": 21,
   "xfgm": 18.72,
   "fga": 47
  },
  "Keon Ellis": {
   "gp": 10,
   "tpm": 10,
   "xtpm": 11.31,
   "fgm": 18,
   "xfgm": 20.47,
   "fga": 49
  },
  "Kevin Durant": {
   "gp": 12,
   "tpm": 16,
   "xtpm": 16.29,
   "fgm": 78,
   "xfgm": 69.43,
   "fga": 158
  },
  "Kevin Huerter": {
   "gp": 10,
   "tpm": 16,
   "xtpm": 15.94,
   "fgm": 33,
   "xfgm": 30.94,
   "fga": 75
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
   "gp": 11,
   "tpm": 20,
   "xtpm": 23.6,
   "fgm": 73,
   "xfgm": 71.87,
   "fga": 169
  },
  "Khaman Maluach": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 2.5,
   "fgm": 32,
   "xfgm": 29.53,
   "fga": 52
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
   "gp": 11,
   "tpm": 9,
   "xtpm": 7.38,
   "fgm": 38,
   "xfgm": 35.79,
   "fga": 73
  },
  "Klay Thompson": {
   "gp": 11,
   "tpm": 42,
   "xtpm": 36.51,
   "fgm": 54,
   "xfgm": 46.2,
   "fga": 126
  },
  "Koa Peat": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 6,
   "xfgm": 5.93,
   "fga": 10
  },
  "Kobe Brown": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 4.26,
   "fgm": 10,
   "xfgm": 10.19,
   "fga": 23
  },
  "Kobe Sanders": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 16.94,
   "fgm": 32,
   "xfgm": 33.29,
   "fga": 78
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
   "gp": 10,
   "tpm": 10,
   "xtpm": 8.5,
   "fgm": 30,
   "xfgm": 30.03,
   "fga": 61
  },
  "Kris Murray": {
   "gp": 7,
   "tpm": 1,
   "xtpm": 4.34,
   "fgm": 3,
   "xfgm": 6.32,
   "fga": 15
  },
  "Kyle Anderson": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 7.4,
   "fga": 15
  },
  "Kyle Filipowski": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 2.15,
   "fgm": 10,
   "xfgm": 12.48,
   "fga": 25
  },
  "Kyle Kuzma": {
   "gp": 12,
   "tpm": 19,
   "xtpm": 21.31,
   "fgm": 50,
   "xfgm": 50.67,
   "fga": 109
  },
  "Kyrie Irving": {
   "gp": 9,
   "tpm": 30,
   "xtpm": 26.9,
   "fgm": 75,
   "xfgm": 65.52,
   "fga": 154
  },
  "Kyshawn George": {
   "gp": 12,
   "tpm": 29,
   "xtpm": 25.77,
   "fgm": 82,
   "xfgm": 76.95,
   "fga": 170
  },
  "LJ Cryer": {
   "gp": 9,
   "tpm": 10,
   "xtpm": 8.46,
   "fgm": 14,
   "xfgm": 12.97,
   "fga": 34
  },
  "LaMelo Ball": {
   "gp": 11,
   "tpm": 37,
   "xtpm": 33.93,
   "fgm": 70,
   "xfgm": 64.75,
   "fga": 156
  },
  "Labaron Philon Jr.": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 2.81,
   "fgm": 6,
   "xfgm": 6.98,
   "fga": 17
  },
  "Landry Shamet": {
   "gp": 11,
   "tpm": 24,
   "xtpm": 20.24,
   "fgm": 36,
   "xfgm": 32.7,
   "fga": 78
  },
  "Larry Nance Jr.": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 9.69,
   "fgm": 18,
   "xfgm": 16.88,
   "fga": 39
  },
  "Lauri Markkanen": {
   "gp": 8,
   "tpm": 29,
   "xtpm": 25.77,
   "fgm": 44,
   "xfgm": 46.38,
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
   "xfgm": 66.2,
   "fga": 132
  },
  "Leaky Black": {
   "gp": 7,
   "tpm": 10,
   "xtpm": 8.87,
   "fgm": 12,
   "xfgm": 11.29,
   "fga": 29
  },
  "Leonard Miller": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 9.55,
   "fgm": 23,
   "xfgm": 25.98,
   "fga": 53
  },
  "Liam McNeeley": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 4.24,
   "fgm": 7,
   "xfgm": 10.77,
   "fga": 24
  },
  "Luguentz Dort": {
   "gp": 12,
   "tpm": 21,
   "xtpm": 21.17,
   "fgm": 37,
   "xfgm": 45.73,
   "fga": 101
  },
  "Luka Dončić": {
   "gp": 11,
   "tpm": 60,
   "xtpm": 51.78,
   "fgm": 131,
   "xfgm": 109.06,
   "fga": 268
  },
  "Luka Garza": {
   "gp": 12,
   "tpm": 14,
   "xtpm": 10.0,
   "fgm": 24,
   "xfgm": 24.95,
   "fga": 53
  },
  "Luke Kennard": {
   "gp": 9,
   "tpm": 19,
   "xtpm": 13.85,
   "fgm": 25,
   "xfgm": 17.55,
   "fga": 47
  },
  "Luke Kornet": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 15,
   "xfgm": 19.75,
   "fga": 32
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
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 1,
   "xfgm": 3.8,
   "fga": 8
  },
  "Malik Monk": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 11.64,
   "fgm": 26,
   "xfgm": 31.03,
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
   "xtpm": 8.56,
   "fgm": 20,
   "xfgm": 17.28,
   "fga": 43
  },
  "Marcus Smart": {
   "gp": 9,
   "tpm": 16,
   "xtpm": 14.24,
   "fgm": 25,
   "xfgm": 22.97,
   "fga": 57
  },
  "Mario Hezonja": {
   "gp": 12,
   "tpm": 14,
   "xtpm": 17.41,
   "fgm": 38,
   "xfgm": 41.11,
   "fga": 90
  },
  "Marvin Bagley III": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 1.41,
   "fgm": 21,
   "xfgm": 21.34,
   "fga": 39
  },
  "Matas Buzelis": {
   "gp": 10,
   "tpm": 16,
   "xtpm": 18.05,
   "fgm": 42,
   "xfgm": 45.21,
   "fga": 98
  },
  "Matisse Thybulle": {
   "gp": 13,
   "tpm": 22,
   "xtpm": 19.58,
   "fgm": 31,
   "xfgm": 28.59,
   "fga": 71
  },
  "Max Christie": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 14.93,
   "fgm": 20,
   "xfgm": 25.22,
   "fga": 61
  },
  "Max Strus": {
   "gp": 4,
   "tpm": 9,
   "xtpm": 10.63,
   "fgm": 14,
   "xfgm": 16.34,
   "fga": 39
  },
  "Meleek Thomas": {
   "gp": 9,
   "tpm": 24,
   "xtpm": 17.68,
   "fgm": 45,
   "xfgm": 41.69,
   "fga": 94
  },
  "Micah Peavy": {
   "gp": 8,
   "tpm": 4,
   "xtpm": 5.06,
   "fgm": 10,
   "xfgm": 14.67,
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
   "xfgm": 71.43,
   "fga": 169
  },
  "Mikal Bridges": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 12.13,
   "fgm": 26,
   "xfgm": 35.38,
   "fga": 79
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
   "gp": 7,
   "tpm": 14,
   "xtpm": 15.86,
   "fgm": 28,
   "xfgm": 34.88,
   "fga": 81
  },
  "Miles Bridges": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 20.59,
   "fgm": 56,
   "xfgm": 55.61,
   "fga": 124
  },
  "Miles McBride": {
   "gp": 11,
   "tpm": 23,
   "xtpm": 18.48,
   "fgm": 30,
   "xfgm": 26.45,
   "fga": 67
  },
  "Mitchell Robinson": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 28,
   "xfgm": 28.58,
   "fga": 44
  },
  "Mo Bamba": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 24,
   "xfgm": 20.66,
   "fga": 33
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
   "gp": 10,
   "tpm": 2,
   "xtpm": 3.16,
   "fgm": 29,
   "xfgm": 29.91,
   "fga": 56
  },
  "Moritz Wagner": {
   "gp": 11,
   "tpm": 13,
   "xtpm": 8.13,
   "fgm": 42,
   "xfgm": 39.12,
   "fga": 73
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
   "xfgm": 32.53,
   "fga": 52
  },
  "Myles Turner": {
   "gp": 11,
   "tpm": 13,
   "xtpm": 18.05,
   "fgm": 28,
   "xfgm": 35.78,
   "fga": 85
  },
  "Myron Gardner": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.01,
   "fga": 2
  },
  "Naji Marshall": {
   "gp": 8,
   "tpm": 7,
   "xtpm": 8.52,
   "fgm": 37,
   "xfgm": 35.19,
   "fga": 77
  },
  "Nate Ament": {
   "gp": 10,
   "tpm": 10,
   "xtpm": 9.3,
   "fgm": 28,
   "xfgm": 28.89,
   "fga": 60
  },
  "Naz Reid": {
   "gp": 11,
   "tpm": 27,
   "xtpm": 26.2,
   "fgm": 74,
   "xfgm": 81.08,
   "fga": 180
  },
  "Neemias Queta": {
   "gp": 12,
   "tpm": 3,
   "xtpm": 1.45,
   "fgm": 40,
   "xfgm": 42.04,
   "fga": 72
  },
  "Nic Claxton": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 5.27,
   "fga": 9
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
   "xtpm": 44.66,
   "fgm": 85,
   "xfgm": 88.45,
   "fga": 204
  },
  "Nikola Jokić": {
   "gp": 10,
   "tpm": 10,
   "xtpm": 15.14,
   "fgm": 92,
   "xfgm": 85.42,
   "fga": 184
  },
  "Nikola Jović": {
   "gp": 7,
   "tpm": 1,
   "xtpm": 3.58,
   "fgm": 6,
   "xfgm": 9.26,
   "fga": 20
  },
  "Nikola Vučević": {
   "gp": 11,
   "tpm": 4,
   "xtpm": 6.04,
   "fgm": 12,
   "xfgm": 13.28,
   "fga": 32
  },
  "Nique Clifford": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 4.26,
   "fgm": 10,
   "xfgm": 10.94,
   "fga": 26
  },
  "Noa Essengue": {
   "gp": 9,
   "tpm": 4,
   "xtpm": 7.11,
   "fgm": 17,
   "xfgm": 20.49,
   "fga": 42
  },
  "Noah Clowney": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 9.24,
   "fgm": 21,
   "xfgm": 22.86,
   "fga": 50
  },
  "Nolan Traore": {
   "gp": 10,
   "tpm": 18,
   "xtpm": 13.81,
   "fgm": 49,
   "xfgm": 43.4,
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
   "xtpm": 19.36,
   "fgm": 41,
   "xfgm": 44.05,
   "fga": 103
  },
  "OG Anunoby": {
   "gp": 11,
   "tpm": 24,
   "xtpm": 25.65,
   "fgm": 50,
   "xfgm": 60.95,
   "fga": 129
  },
  "Obi Toppin": {
   "gp": 9,
   "tpm": 16,
   "xtpm": 15.34,
   "fgm": 43,
   "xfgm": 40.39,
   "fga": 84
  },
  "Olivier-Maxence Prosper": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 1.09,
   "fgm": 6,
   "xfgm": 6.59,
   "fga": 12
  },
  "Onyeka Okongwu": {
   "gp": 12,
   "tpm": 18,
   "xtpm": 19.42,
   "fgm": 62,
   "xfgm": 60.07,
   "fga": 126
  },
  "Oscar Tshiebwe": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 5.72,
   "fga": 9
  },
  "Oso Ighodaro": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 23,
   "xfgm": 22.82,
   "fga": 40
  },
  "Ousmane Dieng": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 6.74,
   "fgm": 14,
   "xfgm": 14.43,
   "fga": 33
  },
  "P.J. Washington": {
   "gp": 11,
   "tpm": 26,
   "xtpm": 25.96,
   "fgm": 52,
   "xfgm": 55.25,
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
   "gp": 3,
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
   "xfgm": 10.79,
   "fga": 23
  },
  "Pascal Siakam": {
   "gp": 11,
   "tpm": 19,
   "xtpm": 19.52,
   "fgm": 92,
   "xfgm": 84.06,
   "fga": 180
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
   "gp": 3,
   "tpm": 1,
   "xtpm": 2.81,
   "fgm": 8,
   "xfgm": 8.53,
   "fga": 17
  },
  "Paul George": {
   "gp": 10,
   "tpm": 37,
   "xtpm": 29.65,
   "fgm": 80,
   "xfgm": 70.13,
   "fga": 164
  },
  "Paul Reed": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 2.85,
   "fgm": 48,
   "xfgm": 44.59,
   "fga": 85
  },
  "Payton Pritchard": {
   "gp": 12,
   "tpm": 27,
   "xtpm": 26.08,
   "fgm": 53,
   "xfgm": 53.21,
   "fga": 129
  },
  "Pelle Larsson": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 11.27,
   "fgm": 36,
   "xfgm": 35.4,
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
   "gp": 10,
   "tpm": 10,
   "xtpm": 14.99,
   "fgm": 41,
   "xfgm": 51.99,
   "fga": 108
  },
  "Precious Achiuwa": {
   "gp": 11,
   "tpm": 4,
   "xtpm": 3.91,
   "fgm": 49,
   "xfgm": 46.68,
   "fga": 92
  },
  "Quentin Grimes": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 11.68,
   "fgm": 28,
   "xfgm": 30.24,
   "fga": 65
  },
  "Quenton Jackson": {
   "gp": 12,
   "tpm": 13,
   "xtpm": 12.72,
   "fgm": 40,
   "xfgm": 39.43,
   "fga": 84
  },
  "Quinten Post": {
   "gp": 8,
   "tpm": 5,
   "xtpm": 6.74,
   "fgm": 16,
   "xfgm": 15.47,
   "fga": 34
  },
  "RJ Barrett": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 19.77,
   "fgm": 85,
   "xfgm": 95.76,
   "fga": 191
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
   "gp": 9,
   "tpm": 21,
   "xtpm": 22.25,
   "fgm": 33,
   "xfgm": 33.3,
   "fga": 84
  },
  "Riley Minix": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.83,
   "fgm": 4,
   "xfgm": 4.59,
   "fga": 11
  },
  "Robert Williams III": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 29,
   "xfgm": 26.6,
   "fga": 43
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
   "gp": 10,
   "tpm": 7,
   "xtpm": 8.23,
   "fgm": 18,
   "xfgm": 22.29,
   "fga": 49
  },
  "Royce O'Neale": {
   "gp": 11,
   "tpm": 14,
   "xtpm": 16.96,
   "fgm": 19,
   "xfgm": 20.91,
   "fga": 54
  },
  "Rudy Gobert": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 28,
   "xfgm": 33.58,
   "fga": 56
  },
  "Rui Hachimura": {
   "gp": 8,
   "tpm": 18,
   "xtpm": 17.35,
   "fgm": 41,
   "xfgm": 47.06,
   "fga": 106
  },
  "Ryan Conwell": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 9.2,
   "fgm": 12,
   "xfgm": 13.34,
   "fga": 35
  },
  "Ryan Dunn": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 6.53,
   "fgm": 22,
   "xfgm": 21.47,
   "fga": 44
  },
  "Ryan Kalkbrenner": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 21,
   "xfgm": 18.47,
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
   "gp": 12,
   "tpm": 21,
   "xtpm": 20.18,
   "fgm": 48,
   "xfgm": 55.86,
   "fga": 123
  },
  "Saddiq Bey": {
   "gp": 12,
   "tpm": 22,
   "xtpm": 22.33,
   "fgm": 62,
   "xfgm": 59.2,
   "fga": 135
  },
  "Sam Hauser": {
   "gp": 12,
   "tpm": 27,
   "xtpm": 21.96,
   "fgm": 34,
   "xfgm": 28.01,
   "fga": 74
  },
  "Sam Merrill": {
   "gp": 9,
   "tpm": 14,
   "xtpm": 15.28,
   "fgm": 22,
   "xfgm": 22.94,
   "fga": 57
  },
  "Sandro Mamukelashvili": {
   "gp": 13,
   "tpm": 21,
   "xtpm": 18.09,
   "fgm": 51,
   "xfgm": 46.84,
   "fga": 103
  },
  "Santi Aldama": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.2,
   "fgm": 11,
   "xfgm": 9.58,
   "fga": 20
  },
  "Scoot Henderson": {
   "gp": 11,
   "tpm": 10,
   "xtpm": 15.63,
   "fgm": 28,
   "xfgm": 37.59,
   "fga": 89
  },
  "Scottie Barnes": {
   "gp": 8,
   "tpm": 4,
   "xtpm": 9.26,
   "fgm": 75,
   "xfgm": 76.0,
   "fga": 158
  },
  "Scotty Pippen Jr.": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 3.18,
   "fgm": 11,
   "xfgm": 11.09,
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
   "gp": 12,
   "tpm": 27,
   "xtpm": 28.15,
   "fgm": 124,
   "xfgm": 121.34,
   "fga": 274
  },
  "Sidy Cissoko": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 14.71,
   "fgm": 28,
   "xfgm": 25.92,
   "fga": 59
  },
  "Simone Fontecchio": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 2.81,
   "fgm": 2,
   "xfgm": 3.66,
   "fga": 10
  },
  "Sion James": {
   "gp": 11,
   "tpm": 14,
   "xtpm": 18.6,
   "fgm": 24,
   "xfgm": 29.37,
   "fga": 71
  },
  "Spencer Jones": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 2.89,
   "fgm": 6,
   "xfgm": 5.09,
   "fga": 12
  },
  "Stephen Curry": {
   "gp": 10,
   "tpm": 43,
   "xtpm": 33.17,
   "fgm": 80,
   "xfgm": 65.54,
   "fga": 160
  },
  "Stephon Castle": {
   "gp": 12,
   "tpm": 23,
   "xtpm": 25.79,
   "fgm": 65,
   "xfgm": 76.76,
   "fga": 166
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
   "gp": 12,
   "tpm": 8,
   "xtpm": 13.13,
   "fgm": 17,
   "xfgm": 24.39,
   "fga": 59
  },
  "T.J. McConnell": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 6.02,
   "fga": 13
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
   "gp": 12,
   "tpm": 10,
   "xtpm": 15.38,
   "fgm": 43,
   "xfgm": 51.32,
   "fga": 106
  },
  "Tarris Reed Jr.": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 7.03,
   "fga": 12
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
   "gp": 6,
   "tpm": 5,
   "xtpm": 2.85,
   "fgm": 8,
   "xfgm": 5.93,
   "fga": 13
  },
  "Terance Mann": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 3.58,
   "fgm": 3,
   "xfgm": 5.49,
   "fga": 14
  },
  "Terrence Shannon Jr": {
   "gp": 8,
   "tpm": 13,
   "xtpm": 12.76,
   "fgm": 26,
   "xfgm": 28.7,
   "fga": 66
  },
  "Thomas Bryant": {
   "gp": 6,
   "tpm": 8,
   "xtpm": 6.33,
   "fgm": 15,
   "xfgm": 13.33,
   "fga": 30
  },
  "Tidjane Salaün": {
   "gp": 10,
   "tpm": 14,
   "xtpm": 12.45,
   "fgm": 23,
   "xfgm": 21.68,
   "fga": 50
  },
  "Tim Hardaway Jr.": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 13.42,
   "fgm": 14,
   "xfgm": 20.45,
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
   "xfgm": 3.3,
   "fga": 5
  },
  "Tony Bradley": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 2.86,
   "fga": 5
  },
  "Toumani Camara": {
   "gp": 11,
   "tpm": 32,
   "xtpm": 26.34,
   "fgm": 50,
   "xfgm": 41.28,
   "fga": 100
  },
  "Trae Young": {
   "gp": 12,
   "tpm": 24,
   "xtpm": 28.58,
   "fgm": 62,
   "xfgm": 64.62,
   "fga": 155
  },
  "Trayce Jackson-Davis": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 12,
   "xfgm": 10.11,
   "fga": 17
  },
  "Tre Johnson": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 20.16,
   "fgm": 39,
   "xfgm": 43.31,
   "fga": 107
  },
  "Tre Jones": {
   "gp": 10,
   "tpm": 4,
   "xtpm": 3.54,
   "fgm": 36,
   "xfgm": 41.05,
   "fga": 74
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
   "xfgm": 12.44,
   "fga": 22
  },
  "Trevon Brazile": {
   "gp": 10,
   "tpm": 8,
   "xtpm": 8.56,
   "fgm": 28,
   "xfgm": 24.6,
   "fga": 50
  },
  "Trey Lyles": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 12.05,
   "fgm": 24,
   "xfgm": 21.63,
   "fga": 51
  },
  "Trey Murphy III": {
   "gp": 9,
   "tpm": 20,
   "xtpm": 18.67,
   "fgm": 47,
   "xfgm": 45.79,
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
   "gp": 9,
   "tpm": 32,
   "xtpm": 28.37,
   "fgm": 51,
   "xfgm": 45.19,
   "fga": 112
  },
  "Ty Jerome": {
   "gp": 10,
   "tpm": 26,
   "xtpm": 25.02,
   "fgm": 92,
   "xfgm": 76.2,
   "fga": 184
  },
  "Tyler Herro": {
   "gp": 11,
   "tpm": 33,
   "xtpm": 29.98,
   "fgm": 84,
   "xfgm": 81.42,
   "fga": 183
  },
  "Tyler Kolek": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 5.67,
   "fgm": 12,
   "xfgm": 12.48,
   "fga": 28
  },
  "Tyrese Haliburton": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 9.59,
   "fgm": 32,
   "xfgm": 26.85,
   "fga": 62
  },
  "Tyrese Maxey": {
   "gp": 12,
   "tpm": 31,
   "xtpm": 30.36,
   "fgm": 109,
   "xfgm": 104.55,
   "fga": 222
  },
  "Tyrese Proctor": {
   "gp": 11,
   "tpm": 14,
   "xtpm": 10.3,
   "fgm": 27,
   "xfgm": 23.98,
   "fga": 55
  },
  "Tyus Jones": {
   "gp": 10,
   "tpm": 3,
   "xtpm": 4.22,
   "fgm": 8,
   "xfgm": 10.31,
   "fga": 24
  },
  "VJ Edgecombe": {
   "gp": 11,
   "tpm": 19,
   "xtpm": 18.79,
   "fgm": 56,
   "xfgm": 59.29,
   "fga": 124
  },
  "Victor Wembanyama": {
   "gp": 12,
   "tpm": 23,
   "xtpm": 24.98,
   "fgm": 132,
   "xfgm": 123.17,
   "fga": 243
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
   "xfgm": 74.96,
   "fga": 120
  },
  "Walter Clayton Jr.": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 10.57,
   "fgm": 25,
   "xfgm": 22.49,
   "fga": 53
  },
  "Wendell Carter Jr.": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 9.22,
   "fgm": 53,
   "xfgm": 42.93,
   "fga": 87
  },
  "Will Richard": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 8.56,
   "fgm": 22,
   "xfgm": 21.46,
   "fga": 46
  },
  "Will Riley": {
   "gp": 9,
   "tpm": 1,
   "xtpm": 2.85,
   "fgm": 6,
   "xfgm": 7.0,
   "fga": 15
  },
  "Yang Hansen": {
   "gp": 7,
   "tpm": 5,
   "xtpm": 3.16,
   "fgm": 8,
   "xfgm": 7.56,
   "fga": 17
  },
  "Yaxel Lendeborg": {
   "gp": 12,
   "tpm": 29,
   "xtpm": 24.01,
   "fgm": 88,
   "xfgm": 78.49,
   "fga": 170
  },
  "Yves Missi": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 5.49,
   "fga": 9
  },
  "Zaccharie Risacher": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 12.7,
   "fgm": 31,
   "xfgm": 37.87,
   "fga": 80
  },
  "Zach Collins": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 2.48,
   "fgm": 5,
   "xfgm": 8.35,
   "fga": 17
  },
  "Zach Edey": {
   "gp": 10,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 27,
   "xfgm": 29.14,
   "fga": 52
  },
  "Zach LaVine": {
   "gp": 11,
   "tpm": 31,
   "xtpm": 28.6,
   "fgm": 81,
   "xfgm": 69.51,
   "fga": 161
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
   "xfgm": 32.06,
   "fga": 71
  },
  "Zion Williamson": {
   "gp": 11,
   "tpm": 4,
   "xtpm": 2.81,
   "fgm": 84,
   "xfgm": 80.08,
   "fga": 135
  },
  "Zuby Ejiofor": {
   "gp": 7,
   "tpm": 4,
   "xtpm": 3.18,
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
