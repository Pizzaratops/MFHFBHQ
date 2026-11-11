// ============================================================
//  x3PM / xFGM der laufenden Saison aus Play-by-Play
//  Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data (nicht unser Projekt, frei veröffentlichte Daten)
//  Methode: Josh Lloyd (joshlloydfantasy.com/research/xstats-method)
//  Erzeugt von scripts/xstats-pbp.py am 2026-11-11 · Saison 2026-27 · Stand 2026-11-10
//  Wird von scripts/build-live-projections.js gelesen (3PM, FG%).
//  META {"season": "2026-27", "assetUpdated": "Wed, 11 Nov 2026 12:59:36 GMT"}
// ============================================================
const XSTATS_PBP = {
 "meta": {
  "season": "2026-27",
  "through": "2026-11-10",
  "players": 462,
  "games": 160,
  "shots": 28148,
  "assetUpdated": "Wed, 11 Nov 2026 12:59:36 GMT",
  "zoneRates": {
   "C3": 0.3729,
   "AB3": 0.35,
   "RA": 0.6605,
   "PAINT": 0.4395,
   "MID": 0.406
  },
  "source": "Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data"
 },
 "players": {
  "AJ Dybantsa": {
   "gp": 7,
   "tpm": 6,
   "xtpm": 7.77,
   "fgm": 42,
   "xfgm": 48.42,
   "fga": 97
  },
  "AJ Green": {
   "gp": 11,
   "tpm": 22,
   "xtpm": 18.43,
   "fgm": 25,
   "xfgm": 21.22,
   "fga": 58
  },
  "AJ Johnson": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 2.86,
   "fga": 5
  },
  "Aaron Gordon": {
   "gp": 9,
   "tpm": 10,
   "xtpm": 12.74,
   "fgm": 32,
   "xfgm": 38.03,
   "fga": 81
  },
  "Aaron Nesmith": {
   "gp": 9,
   "tpm": 18,
   "xtpm": 20.01,
   "fgm": 37,
   "xfgm": 41.59,
   "fga": 97
  },
  "Aaron Wiggins": {
   "gp": 12,
   "tpm": 36,
   "xtpm": 30.31,
   "fgm": 68,
   "xfgm": 61.12,
   "fga": 147
  },
  "Ace Bailey": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 20.49,
   "fgm": 61,
   "xfgm": 56.02,
   "fga": 128
  },
  "Aday Mara": {
   "gp": 11,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 40,
   "xfgm": 38.36,
   "fga": 65
  },
  "Adem Bona": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 8,
   "xfgm": 12.05,
   "fga": 21
  },
  "Adou Thiero": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 4.62,
   "fga": 7
  },
  "Ajay Mitchell": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 12.06,
   "fgm": 81,
   "xfgm": 76.38,
   "fga": 155
  },
  "Al Horford": {
   "gp": 9,
   "tpm": 11,
   "xtpm": 9.5,
   "fgm": 17,
   "xfgm": 15.81,
   "fga": 39
  },
  "Alex Caruso": {
   "gp": 8,
   "tpm": 11,
   "xtpm": 8.82,
   "fgm": 17,
   "xfgm": 14.95,
   "fga": 36
  },
  "Alex Karaban": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.75,
   "fgm": 2,
   "xfgm": 2.41,
   "fga": 6
  },
  "Alex Morales": {
   "gp": 7,
   "tpm": 1,
   "xtpm": 1.8,
   "fgm": 5,
   "xfgm": 5.54,
   "fga": 11
  },
  "Alex Sarr": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 10.94,
   "fgm": 39,
   "xfgm": 39.89,
   "fga": 80
  },
  "Alijah Martin": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 5.27,
   "fgm": 19,
   "xfgm": 14.3,
   "fga": 29
  },
  "Allen Graves": {
   "gp": 10,
   "tpm": 4,
   "xtpm": 6.44,
   "fgm": 15,
   "xfgm": 17.63,
   "fga": 37
  },
  "Alperen Sengun": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 6.67,
   "fgm": 73,
   "xfgm": 74.64,
   "fga": 142
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
   "gp": 11,
   "tpm": 2,
   "xtpm": 3.2,
   "fgm": 63,
   "xfgm": 70.58,
   "fga": 127
  },
  "Andre Drummond": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 20,
   "xfgm": 28.52,
   "fga": 46
  },
  "Andrew Nembhard": {
   "gp": 9,
   "tpm": 21,
   "xtpm": 17.9,
   "fgm": 52,
   "xfgm": 49.22,
   "fga": 114
  },
  "Andrew Wiggins": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 15.91,
   "fgm": 38,
   "xfgm": 37.89,
   "fga": 90
  },
  "Anfernee Simons": {
   "gp": 12,
   "tpm": 27,
   "xtpm": 24.2,
   "fgm": 39,
   "xfgm": 39.87,
   "fga": 98
  },
  "Anthony Black": {
   "gp": 7,
   "tpm": 14,
   "xtpm": 11.62,
   "fgm": 41,
   "xfgm": 36.84,
   "fga": 84
  },
  "Anthony Davis": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 8.45,
   "fgm": 89,
   "xfgm": 84.13,
   "fga": 167
  },
  "Anthony Edwards": {
   "gp": 4,
   "tpm": 18,
   "xtpm": 15.84,
   "fgm": 50,
   "xfgm": 46.44,
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
   "xfgm": 37.37,
   "fga": 70
  },
  "Austin Reaves": {
   "gp": 11,
   "tpm": 26,
   "xtpm": 22.14,
   "fgm": 91,
   "xfgm": 77.74,
   "fga": 179
  },
  "Ayo Dosunmu": {
   "gp": 11,
   "tpm": 21,
   "xtpm": 15.87,
   "fgm": 76,
   "xfgm": 72.06,
   "fga": 146
  },
  "Baba Miller": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 1.77,
   "fgm": 13,
   "xfgm": 11.23,
   "fga": 22
  },
  "Bam Adebayo": {
   "gp": 11,
   "tpm": 6,
   "xtpm": 12.39,
   "fgm": 71,
   "xfgm": 67.28,
   "fga": 140
  },
  "Baylor Scheierman": {
   "gp": 11,
   "tpm": 14,
   "xtpm": 11.03,
   "fgm": 23,
   "xfgm": 21.86,
   "fga": 53
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
   "xtpm": 9.15,
   "fgm": 23,
   "xfgm": 30.07,
   "fga": 63
  },
  "Bennett Stirtz": {
   "gp": 11,
   "tpm": 18,
   "xtpm": 13.74,
   "fgm": 30,
   "xfgm": 26.0,
   "fga": 61
  },
  "Bilal Coulibaly": {
   "gp": 10,
   "tpm": 4,
   "xtpm": 8.63,
   "fgm": 28,
   "xfgm": 30.35,
   "fga": 59
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
   "xtpm": 15.56,
   "fgm": 28,
   "xfgm": 31.79,
   "fga": 77
  },
  "Bogdan Bogdanović": {
   "gp": 11,
   "tpm": 12,
   "xtpm": 8.91,
   "fgm": 20,
   "xfgm": 15.78,
   "fga": 40
  },
  "Bogoljub Marković": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.66,
   "fga": 1
  },
  "Bones Hyland": {
   "gp": 11,
   "tpm": 16,
   "xtpm": 16.52,
   "fgm": 33,
   "xfgm": 31.31,
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
   "gp": 5,
   "tpm": 0,
   "xtpm": 1.42,
   "fgm": 5,
   "xfgm": 4.69,
   "fga": 10
  },
  "Brandin Podziemski": {
   "gp": 9,
   "tpm": 25,
   "xtpm": 21.84,
   "fgm": 55,
   "xfgm": 48.44,
   "fga": 114
  },
  "Brandon Miller": {
   "gp": 10,
   "tpm": 27,
   "xtpm": 36.66,
   "fgm": 73,
   "xfgm": 87.02,
   "fga": 205
  },
  "Brandon Williams": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 8.1,
   "fgm": 33,
   "xfgm": 36.99,
   "fga": 80
  },
  "Brayden Burries": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 14.12,
   "fgm": 37,
   "xfgm": 39.65,
   "fga": 87
  },
  "Brice Sensabaugh": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 13.72,
   "fgm": 26,
   "xfgm": 28.98,
   "fga": 71
  },
  "Bronny James": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 1.45,
   "fga": 3
  },
  "Brook Lopez": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 10.55,
   "fgm": 53,
   "xfgm": 43.49,
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
   "gp": 7,
   "tpm": 2,
   "xtpm": 1.4,
   "fgm": 5,
   "xfgm": 3.53,
   "fga": 9
  },
  "Bryce Hopkins": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 1.77,
   "fgm": 14,
   "xfgm": 11.83,
   "fga": 22
  },
  "Bryce McGowens": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 2.15,
   "fgm": 5,
   "xfgm": 6.77,
   "fga": 14
  },
  "Bub Carrington": {
   "gp": 11,
   "tpm": 17,
   "xtpm": 12.39,
   "fgm": 19,
   "xfgm": 19.07,
   "fga": 48
  },
  "Buddy Hield": {
   "gp": 8,
   "tpm": 8,
   "xtpm": 7.35,
   "fgm": 18,
   "xfgm": 17.26,
   "fga": 37
  },
  "CJ McCollum": {
   "gp": 12,
   "tpm": 22,
   "xtpm": 21.73,
   "fgm": 60,
   "xfgm": 63.8,
   "fga": 145
  },
  "Cade Cunningham": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 22.82,
   "fgm": 80,
   "xfgm": 78.68,
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
   "xtpm": 3.61,
   "fgm": 9,
   "xfgm": 8.51,
   "fga": 20
  },
  "Caleb Wilson": {
   "gp": 9,
   "tpm": 21,
   "xtpm": 24.38,
   "fgm": 63,
   "xfgm": 71.65,
   "fga": 155
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
   "gp": 10,
   "tpm": 17,
   "xtpm": 11.6,
   "fgm": 32,
   "xfgm": 24.62,
   "fga": 61
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
   "gp": 10,
   "tpm": 18,
   "xtpm": 21.44,
   "fgm": 52,
   "xfgm": 62.63,
   "fga": 140
  },
  "Cameron Carr": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 1,
   "xfgm": 1.36,
   "fga": 3
  },
  "Cameron Johnson": {
   "gp": 6,
   "tpm": 12,
   "xtpm": 10.59,
   "fgm": 23,
   "xfgm": 20.83,
   "fga": 49
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
   "gp": 10,
   "tpm": 8,
   "xtpm": 8.19,
   "fgm": 10,
   "xfgm": 12.37,
   "fga": 30
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
   "gp": 9,
   "tpm": 22,
   "xtpm": 16.54,
   "fgm": 41,
   "xfgm": 40.01,
   "fga": 91
  },
  "Chaney Johnson": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 8.21,
   "fgm": 16,
   "xfgm": 21.31,
   "fga": 47
  },
  "Charles Bassey": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 27,
   "xfgm": 23.14,
   "fga": 41
  },
  "Chaz Lanier": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 1.77,
   "fgm": 5,
   "xfgm": 2.87,
   "fga": 7
  },
  "Chet Holmgren": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.12,
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
   "xtpm": 8.12,
   "fgm": 10,
   "xfgm": 10.32,
   "fga": 27
  },
  "Christian Anderson": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 9.15,
   "fgm": 14,
   "xfgm": 18.1,
   "fga": 44
  },
  "Christian Braun": {
   "gp": 9,
   "tpm": 14,
   "xtpm": 14.6,
   "fgm": 43,
   "xfgm": 41.03,
   "fga": 86
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
   "gp": 4,
   "tpm": 2,
   "xtpm": 7.0,
   "fgm": 9,
   "xfgm": 17.05,
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
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.52,
   "fga": 6
  },
  "Collin Gillespie": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 21.12,
   "fgm": 26,
   "xfgm": 30.29,
   "fga": 78
  },
  "Collin Murray-Boyles": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 5.65,
   "fgm": 37,
   "xfgm": 37.26,
   "fga": 73
  },
  "Collin Sexton": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 13.13,
   "fgm": 39,
   "xfgm": 43.02,
   "fga": 91
  },
  "Cooper Flagg": {
   "gp": 10,
   "tpm": 14,
   "xtpm": 16.89,
   "fgm": 90,
   "xfgm": 82.94,
   "fga": 180
  },
  "Corey Kispert": {
   "gp": 6,
   "tpm": 10,
   "xtpm": 6.3,
   "fgm": 17,
   "xfgm": 11.36,
   "fga": 27
  },
  "Craig Porter Jr.": {
   "gp": 9,
   "tpm": 1,
   "xtpm": 1.42,
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
   "xtpm": 4.6,
   "fgm": 8,
   "xfgm": 7.46,
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
   "gp": 10,
   "tpm": 29,
   "xtpm": 29.08,
   "fgm": 59,
   "xfgm": 56.05,
   "fga": 136
  },
  "Daniel Gafford": {
   "gp": 11,
   "tpm": 1,
   "xtpm": 0.37,
   "fgm": 42,
   "xfgm": 35.08,
   "fga": 59
  },
  "Daniss Jenkins": {
   "gp": 10,
   "tpm": 21,
   "xtpm": 17.29,
   "fgm": 42,
   "xfgm": 38.98,
   "fga": 93
  },
  "Danny Wolf": {
   "gp": 5,
   "tpm": 10,
   "xtpm": 7.75,
   "fgm": 15,
   "xfgm": 13.25,
   "fga": 32
  },
  "Darius Acuff Jr.": {
   "gp": 11,
   "tpm": 34,
   "xtpm": 36.12,
   "fgm": 105,
   "xfgm": 109.09,
   "fga": 251
  },
  "Darius Garland": {
   "gp": 10,
   "tpm": 24,
   "xtpm": 23.85,
   "fgm": 71,
   "xfgm": 65.98,
   "fga": 152
  },
  "Darryn Peterson": {
   "gp": 11,
   "tpm": 23,
   "xtpm": 21.44,
   "fgm": 62,
   "xfgm": 64.07,
   "fga": 151
  },
  "David Jones Garcia": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 1,
   "xfgm": 3.78,
   "fga": 8
  },
  "Davion Mitchell": {
   "gp": 11,
   "tpm": 25,
   "xtpm": 21.79,
   "fgm": 68,
   "xfgm": 61.85,
   "fga": 137
  },
  "Day'Ron Sharpe": {
   "gp": 10,
   "tpm": 3,
   "xtpm": 3.96,
   "fgm": 27,
   "xfgm": 31.26,
   "fga": 55
  },
  "De'Aaron Fox": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 10.64,
   "fgm": 50,
   "xfgm": 43.97,
   "fga": 94
  },
  "De'Andre Hunter": {
   "gp": 10,
   "tpm": 21,
   "xtpm": 20.18,
   "fgm": 45,
   "xfgm": 43.66,
   "fga": 105
  },
  "De'Anthony Melton": {
   "gp": 11,
   "tpm": 24,
   "xtpm": 19.74,
   "fgm": 34,
   "xfgm": 34.22,
   "fga": 83
  },
  "DeAndre Jordan": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 2.64,
   "fga": 4
  },
  "DeMar DeRozan": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 4.29,
   "fgm": 28,
   "xfgm": 30.12,
   "fga": 69
  },
  "Dean Wade": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 7.09,
   "fgm": 13,
   "xfgm": 13.0,
   "fga": 30
  },
  "Deandre Ayton": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 26,
   "xfgm": 23.52,
   "fga": 39
  },
  "Dejounte Murray": {
   "gp": 8,
   "tpm": 7,
   "xtpm": 8.56,
   "fgm": 42,
   "xfgm": 48.2,
   "fga": 96
  },
  "Deni Avdija": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 17.2,
   "fgm": 73,
   "xfgm": 75.15,
   "fga": 153
  },
  "Dennis Schröder": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 12.34,
   "fgm": 32,
   "xfgm": 41.74,
   "fga": 88
  },
  "Derik Queen": {
   "gp": 11,
   "tpm": 3,
   "xtpm": 3.55,
   "fgm": 44,
   "xfgm": 49.58,
   "fga": 93
  },
  "Derrick Jones Jr.": {
   "gp": 9,
   "tpm": 17,
   "xtpm": 12.74,
   "fgm": 37,
   "xfgm": 34.46,
   "fga": 73
  },
  "Derrick White": {
   "gp": 11,
   "tpm": 18,
   "xtpm": 19.76,
   "fgm": 49,
   "xfgm": 48.15,
   "fga": 113
  },
  "Desmond Bane": {
   "gp": 9,
   "tpm": 32,
   "xtpm": 31.43,
   "fgm": 49,
   "xfgm": 53.61,
   "fga": 132
  },
  "Devin Booker": {
   "gp": 10,
   "tpm": 20,
   "xtpm": 19.65,
   "fgm": 86,
   "xfgm": 77.0,
   "fga": 178
  },
  "Devin Vassell": {
   "gp": 10,
   "tpm": 16,
   "xtpm": 15.93,
   "fgm": 39,
   "xfgm": 41.26,
   "fga": 96
  },
  "Dillon Brooks": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 15.82,
   "fgm": 55,
   "xfgm": 54.53,
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
   "xtpm": 1.75,
   "fgm": 55,
   "xfgm": 45.18,
   "fga": 82
  },
  "Donovan Clingan": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 8.4,
   "fgm": 45,
   "xfgm": 41.64,
   "fga": 78
  },
  "Donovan Mitchell": {
   "gp": 11,
   "tpm": 30,
   "xtpm": 27.35,
   "fgm": 86,
   "xfgm": 81.11,
   "fga": 179
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
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 0.79,
   "fga": 2
  },
  "Draymond Green": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 3.52,
   "fgm": 10,
   "xfgm": 12.98,
   "fga": 27
  },
  "Dru Smith": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 2.1,
   "fgm": 4,
   "xfgm": 3.64,
   "fga": 9
  },
  "Duncan Robinson": {
   "gp": 10,
   "tpm": 42,
   "xtpm": 32.39,
   "fgm": 55,
   "xfgm": 46.14,
   "fga": 118
  },
  "Duop Reath": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 2.82,
   "fgm": 7,
   "xfgm": 5.47,
   "fga": 12
  },
  "Dylan Cardwell": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 8.8,
   "fga": 15
  },
  "Dylan Harper": {
   "gp": 11,
   "tpm": 12,
   "xtpm": 12.65,
   "fgm": 76,
   "xfgm": 74.85,
   "fga": 149
  },
  "Dyson Daniels": {
   "gp": 12,
   "tpm": 2,
   "xtpm": 5.65,
   "fgm": 52,
   "xfgm": 56.43,
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
   "gp": 4,
   "tpm": 6,
   "xtpm": 7.37,
   "fgm": 9,
   "xfgm": 11.96,
   "fga": 29
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
   "xtpm": 11.25,
   "fgm": 18,
   "xfgm": 18.15,
   "fga": 47
  },
  "Evan Mobley": {
   "gp": 11,
   "tpm": 23,
   "xtpm": 16.17,
   "fgm": 72,
   "xfgm": 64.48,
   "fga": 129
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
   "gp": 10,
   "tpm": 11,
   "xtpm": 17.01,
   "fgm": 81,
   "xfgm": 87.38,
   "fga": 182
  },
  "Fred VanVleet": {
   "gp": 9,
   "tpm": 25,
   "xtpm": 23.92,
   "fgm": 40,
   "xfgm": 37.23,
   "fga": 98
  },
  "GG Jackson": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 8.52,
   "fgm": 21,
   "xfgm": 26.52,
   "fga": 56
  },
  "Gary Payton II": {
   "gp": 10,
   "tpm": 4,
   "xtpm": 6.35,
   "fgm": 22,
   "xfgm": 22.85,
   "fga": 47
  },
  "Gary Trent Jr.": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 2.45,
   "fgm": 4,
   "xfgm": 3.52,
   "fga": 9
  },
  "Georges Niang": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 15.0,
   "fgm": 36,
   "xfgm": 31.02,
   "fga": 74
  },
  "Giannis Antetokounmpo": {
   "gp": 11,
   "tpm": 6,
   "xtpm": 9.45,
   "fgm": 119,
   "xfgm": 110.12,
   "fga": 210
  },
  "Goga Bitadze": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 9,
   "xfgm": 10.13,
   "fga": 16
  },
  "Gradey Dick": {
   "gp": 10,
   "tpm": 8,
   "xtpm": 6.74,
   "fgm": 27,
   "xfgm": 26.7,
   "fga": 53
  },
  "Graham Ike": {
   "gp": 8,
   "tpm": 4,
   "xtpm": 1.75,
   "fgm": 15,
   "xfgm": 15.8,
   "fga": 29
  },
  "Grayson Allen": {
   "gp": 11,
   "tpm": 38,
   "xtpm": 28.44,
   "fgm": 48,
   "xfgm": 40.1,
   "fga": 104
  },
  "Gui Santos": {
   "gp": 8,
   "tpm": 4,
   "xtpm": 4.57,
   "fgm": 16,
   "xfgm": 17.55,
   "fga": 36
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
   "gp": 9,
   "tpm": 10,
   "xtpm": 9.57,
   "fgm": 15,
   "xfgm": 13.97,
   "fga": 35
  },
  "Herbert Jones": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 9.98,
   "fgm": 27,
   "xfgm": 33.02,
   "fga": 69
  },
  "Hugo González": {
   "gp": 11,
   "tpm": 5,
   "xtpm": 7.49,
   "fgm": 17,
   "xfgm": 17.83,
   "fga": 37
  },
  "Immanuel Quickley": {
   "gp": 8,
   "tpm": 21,
   "xtpm": 22.17,
   "fgm": 45,
   "xfgm": 44.32,
   "fga": 110
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
   "gp": 9,
   "tpm": 3,
   "xtpm": 6.81,
   "fgm": 14,
   "xfgm": 18.26,
   "fga": 37
  },
  "Isaiah Collier": {
   "gp": 11,
   "tpm": 4,
   "xtpm": 4.22,
   "fgm": 27,
   "xfgm": 28.97,
   "fga": 61
  },
  "Isaiah Crawford": {
   "gp": 7,
   "tpm": 4,
   "xtpm": 2.82,
   "fgm": 5,
   "xfgm": 3.48,
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
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 31,
   "xfgm": 37.17,
   "fga": 69
  },
  "Isaiah Jackson": {
   "gp": 9,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 32,
   "xfgm": 31.65,
   "fga": 55
  },
  "Isaiah Joe": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 4.55,
   "fgm": 7,
   "xfgm": 7.31,
   "fga": 19
  },
  "Isaiah Stewart": {
   "gp": 7,
   "tpm": 8,
   "xtpm": 4.95,
   "fgm": 32,
   "xfgm": 24.5,
   "fga": 48
  },
  "Ivica Zubac": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 21,
   "xfgm": 21.34,
   "fga": 37
  },
  "Ja Morant": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 4.92,
   "fgm": 26,
   "xfgm": 22.04,
   "fga": 48
  },
  "Ja'Kobe Walter": {
   "gp": 10,
   "tpm": 21,
   "xtpm": 22.68,
   "fgm": 36,
   "xfgm": 38.19,
   "fga": 93
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
   "gp": 11,
   "tpm": 30,
   "xtpm": 23.57,
   "fgm": 66,
   "xfgm": 57.16,
   "fga": 131
  },
  "Jabari Walker": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 2.8,
   "fgm": 15,
   "xfgm": 16.01,
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
   "xfgm": 3.52,
   "fga": 7
  },
  "Jaden Hardy": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 2.8,
   "fgm": 1,
   "xfgm": 3.65,
   "fga": 10
  },
  "Jaden McDaniels": {
   "gp": 11,
   "tpm": 16,
   "xtpm": 17.56,
   "fgm": 77,
   "xfgm": 71.1,
   "fga": 150
  },
  "Jae'Sean Tate": {
   "gp": 6,
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
   "gp": 11,
   "tpm": 19,
   "xtpm": 16.03,
   "fgm": 62,
   "xfgm": 63.16,
   "fga": 129
  },
  "Jake LaRavia": {
   "gp": 11,
   "tpm": 12,
   "xtpm": 7.84,
   "fgm": 24,
   "xfgm": 22.55,
   "fga": 46
  },
  "Jakob Poeltl": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 31,
   "xfgm": 27.06,
   "fga": 48
  },
  "Jalen Brunson": {
   "gp": 10,
   "tpm": 26,
   "xtpm": 24.9,
   "fgm": 86,
   "xfgm": 90.88,
   "fga": 205
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
   "gp": 10,
   "tpm": 9,
   "xtpm": 11.6,
   "fgm": 46,
   "xfgm": 52.49,
   "fga": 108
  },
  "Jalen Johnson": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 13.67,
   "fgm": 62,
   "xfgm": 68.25,
   "fga": 138
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
   "gp": 9,
   "tpm": 2,
   "xtpm": 3.55,
   "fgm": 10,
   "xfgm": 10.52,
   "fga": 22
  },
  "Jalen Smith": {
   "gp": 9,
   "tpm": 13,
   "xtpm": 15.52,
   "fgm": 41,
   "xfgm": 39.41,
   "fga": 83
  },
  "Jalen Suggs": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 3.24,
   "fgm": 10,
   "xfgm": 13.23,
   "fga": 28
  },
  "Jalen Williams": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.15,
   "fgm": 15,
   "xfgm": 19.14,
   "fga": 39
  },
  "Jamal Cain": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 13.16,
   "fgm": 24,
   "xfgm": 22.8,
   "fga": 58
  },
  "Jamal Murray": {
   "gp": 9,
   "tpm": 36,
   "xtpm": 24.97,
   "fgm": 75,
   "xfgm": 66.1,
   "fga": 152
  },
  "Jamal Shead": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 11.62,
   "fgm": 24,
   "xfgm": 29.36,
   "fga": 66
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
   "gp": 11,
   "tpm": 27,
   "xtpm": 26.63,
   "fgm": 48,
   "xfgm": 57.04,
   "fga": 132
  },
  "James Wiseman": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 5.91,
   "fga": 10
  },
  "Jamison Battle": {
   "gp": 10,
   "tpm": 21,
   "xtpm": 17.29,
   "fgm": 30,
   "xfgm": 26.06,
   "fga": 64
  },
  "Jarace Walker": {
   "gp": 11,
   "tpm": 13,
   "xtpm": 14.84,
   "fgm": 29,
   "xfgm": 35.42,
   "fga": 79
  },
  "Jared McCain": {
   "gp": 11,
   "tpm": 21,
   "xtpm": 22.59,
   "fgm": 52,
   "xfgm": 53.65,
   "fga": 122
  },
  "Jaren Jackson Jr.": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 4.95,
   "fgm": 22,
   "xfgm": 20.12,
   "fga": 44
  },
  "Jarred Vanderbilt": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 6,
   "xfgm": 4.62,
   "fga": 7
  },
  "Jarrett Allen": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 1.4,
   "fgm": 46,
   "xfgm": 41.13,
   "fga": 71
  },
  "Jase Richardson": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 10.71,
   "fgm": 23,
   "xfgm": 31.09,
   "fga": 70
  },
  "Javon Small": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 3.5,
   "fgm": 8,
   "xfgm": 9.0,
   "fga": 21
  },
  "Javonte Green": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 13.13,
   "fgm": 19,
   "xfgm": 20.36,
   "fga": 49
  },
  "Jaxson Hayes": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 32,
   "xfgm": 28.51,
   "fga": 51
  },
  "Jay Huff": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 9.92,
   "fgm": 24,
   "xfgm": 22.46,
   "fga": 49
  },
  "Jaylen Brown": {
   "gp": 11,
   "tpm": 21,
   "xtpm": 19.34,
   "fgm": 88,
   "xfgm": 88.9,
   "fga": 185
  },
  "Jaylen Clark": {
   "gp": 10,
   "tpm": 8,
   "xtpm": 7.6,
   "fgm": 15,
   "xfgm": 15.71,
   "fga": 37
  },
  "Jaylen Wells": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 17.05,
   "fgm": 40,
   "xfgm": 33.16,
   "fga": 78
  },
  "Jaylin Sellers": {
   "gp": 5,
   "tpm": 6,
   "xtpm": 5.67,
   "fgm": 7,
   "xfgm": 8.5,
   "fga": 21
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
   "gp": 5,
   "tpm": 5,
   "xtpm": 7.82,
   "fgm": 16,
   "xfgm": 18.09,
   "fga": 39
  },
  "Jayson Kent": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 1.4,
   "fgm": 2,
   "xfgm": 4.92,
   "fga": 10
  },
  "Jayson Tatum": {
   "gp": 10,
   "tpm": 24,
   "xtpm": 25.99,
   "fgm": 82,
   "xfgm": 88.61,
   "fga": 193
  },
  "Jerami Grant": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 13.62,
   "fgm": 36,
   "xfgm": 38.31,
   "fga": 83
  },
  "Jeremiah Fears": {
   "gp": 11,
   "tpm": 12,
   "xtpm": 15.49,
   "fgm": 66,
   "xfgm": 74.02,
   "fga": 148
  },
  "Jericho Sims": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 2,
   "xfgm": 2.13,
   "fga": 4
  },
  "Jett Howard": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.42,
   "fgm": 4,
   "xfgm": 2.93,
   "fga": 7
  },
  "Jevon Carter": {
   "gp": 6,
   "tpm": 6,
   "xtpm": 6.72,
   "fgm": 7,
   "xfgm": 8.66,
   "fga": 23
  },
  "Joan Beringer": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 25,
   "xfgm": 27.3,
   "fga": 43
  },
  "Jock Landale": {
   "gp": 8,
   "tpm": 4,
   "xtpm": 6.42,
   "fgm": 19,
   "xfgm": 20.25,
   "fga": 41
  },
  "Joel Embiid": {
   "gp": 10,
   "tpm": 4,
   "xtpm": 11.55,
   "fgm": 54,
   "xfgm": 68.54,
   "fga": 146
  },
  "John Collins": {
   "gp": 10,
   "tpm": 10,
   "xtpm": 9.26,
   "fgm": 44,
   "xfgm": 44.52,
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
   "xtpm": 17.72,
   "fgm": 48,
   "xfgm": 52.58,
   "fga": 110
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
   "gp": 9,
   "tpm": 6,
   "xtpm": 3.57,
   "fgm": 23,
   "xfgm": 22.24,
   "fga": 44
  },
  "Jordan Goodwin": {
   "gp": 6,
   "tpm": 15,
   "xtpm": 10.92,
   "fgm": 21,
   "xfgm": 16.39,
   "fga": 41
  },
  "Jordan Hawkins": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 3.55,
   "fgm": 7,
   "xfgm": 6.93,
   "fga": 17
  },
  "Jordan McLaughlin": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 1.8,
   "fgm": 3,
   "xfgm": 7.96,
   "fga": 16
  },
  "Jordan Poole": {
   "gp": 5,
   "tpm": 4,
   "xtpm": 5.97,
   "fgm": 5,
   "xfgm": 10.97,
   "fga": 26
  },
  "Jordan Walsh": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 10.4,
   "fgm": 18,
   "xfgm": 21.56,
   "fga": 47
  },
  "Jose Alvarado": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 2.8,
   "fgm": 4,
   "xfgm": 6.98,
   "fga": 15
  },
  "Josh Dix": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 4.22,
   "fgm": 7,
   "xfgm": 9.25,
   "fga": 21
  },
  "Josh Giddey": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 11.25,
   "fgm": 35,
   "xfgm": 41.14,
   "fga": 84
  },
  "Josh Green": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 6.48,
   "fgm": 12,
   "xfgm": 14.34,
   "fga": 32
  },
  "Josh Hart": {
   "gp": 7,
   "tpm": 13,
   "xtpm": 13.37,
   "fgm": 22,
   "xfgm": 24.31,
   "fga": 57
  },
  "Josh Minott": {
   "gp": 7,
   "tpm": 5,
   "xtpm": 7.42,
   "fgm": 11,
   "xfgm": 11.82,
   "fga": 28
  },
  "Josh Okogie": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 5.69,
   "fgm": 10,
   "xfgm": 15.77,
   "fga": 36
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
   "gp": 10,
   "tpm": 23,
   "xtpm": 19.44,
   "fgm": 43,
   "xfgm": 35.05,
   "fga": 84
  },
  "Julian Champagnie": {
   "gp": 11,
   "tpm": 31,
   "xtpm": 25.48,
   "fgm": 36,
   "xfgm": 30.1,
   "fga": 81
  },
  "Julian Reese": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 2.2,
   "fga": 4
  },
  "Julius Randle": {
   "gp": 10,
   "tpm": 15,
   "xtpm": 15.52,
   "fgm": 64,
   "xfgm": 67.69,
   "fga": 143
  },
  "Justin Champagnie": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.47,
   "fgm": 12,
   "xfgm": 10.84,
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
   "gp": 10,
   "tpm": 19,
   "xtpm": 16.82,
   "fgm": 75,
   "xfgm": 71.39,
   "fga": 138
  },
  "Karlo Matković": {
   "gp": 10,
   "tpm": 16,
   "xtpm": 11.52,
   "fgm": 34,
   "xfgm": 26.93,
   "fga": 56
  },
  "Kasparas Jakučionis": {
   "gp": 11,
   "tpm": 7,
   "xtpm": 10.59,
   "fgm": 23,
   "xfgm": 27.54,
   "fga": 57
  },
  "Kawhi Leonard": {
   "gp": 2,
   "tpm": 4,
   "xtpm": 4.9,
   "fgm": 12,
   "xfgm": 17.17,
   "fga": 37
  },
  "Keaton Wagler": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 16.87,
   "fgm": 28,
   "xfgm": 35.52,
   "fga": 85
  },
  "Keegan Murray": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 4.64,
   "fgm": 12,
   "xfgm": 15.09,
   "fga": 36
  },
  "Kel'el Ware": {
   "gp": 11,
   "tpm": 6,
   "xtpm": 10.55,
   "fgm": 35,
   "xfgm": 47.02,
   "fga": 89
  },
  "Keldon Johnson": {
   "gp": 11,
   "tpm": 2,
   "xtpm": 4.97,
   "fgm": 33,
   "xfgm": 41.72,
   "fga": 77
  },
  "Kelly Oubre Jr.": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 11.69,
   "fgm": 31,
   "xfgm": 32.3,
   "fga": 70
  },
  "Kenrich Williams": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 10.94,
   "fgm": 25,
   "xfgm": 23.54,
   "fga": 54
  },
  "Kentavious Caldwell-Pope": {
   "gp": 12,
   "tpm": 15,
   "xtpm": 11.69,
   "fgm": 21,
   "xfgm": 18.69,
   "fga": 47
  },
  "Keon Ellis": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 10.22,
   "fgm": 15,
   "xfgm": 18.73,
   "fga": 45
  },
  "Kevin Durant": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 14.84,
   "fgm": 70,
   "xfgm": 61.7,
   "fga": 141
  },
  "Kevin Huerter": {
   "gp": 10,
   "tpm": 16,
   "xtpm": 15.89,
   "fgm": 33,
   "xfgm": 30.9,
   "fga": 75
  },
  "Kevon Looney": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 3.49,
   "fga": 6
  },
  "Keyonte George": {
   "gp": 10,
   "tpm": 18,
   "xtpm": 20.7,
   "fgm": 70,
   "xfgm": 66.78,
   "fga": 156
  },
  "Khaman Maluach": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 2.5,
   "fgm": 32,
   "xfgm": 29.57,
   "fga": 52
  },
  "Khris Middleton": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 1.77,
   "fgm": 3,
   "xfgm": 3.72,
   "fga": 9
  },
  "Kingston Flemings": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 7.35,
   "fgm": 38,
   "xfgm": 35.77,
   "fga": 73
  },
  "Klay Thompson": {
   "gp": 11,
   "tpm": 42,
   "xtpm": 36.4,
   "fgm": 54,
   "xfgm": 46.06,
   "fga": 126
  },
  "Koa Peat": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 6,
   "xfgm": 5.94,
   "fga": 10
  },
  "Kobe Brown": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 4.25,
   "fgm": 10,
   "xfgm": 10.19,
   "fga": 23
  },
  "Kobe Sanders": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 16.87,
   "fgm": 32,
   "xfgm": 33.24,
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
   "xtpm": 8.47,
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
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 6,
   "xfgm": 4.99,
   "fga": 11
  },
  "Kyle Filipowski": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 2.15,
   "fgm": 10,
   "xfgm": 12.49,
   "fga": 25
  },
  "Kyle Kuzma": {
   "gp": 11,
   "tpm": 18,
   "xtpm": 19.13,
   "fgm": 48,
   "xfgm": 47.2,
   "fga": 101
  },
  "Kyrie Irving": {
   "gp": 9,
   "tpm": 30,
   "xtpm": 26.81,
   "fgm": 75,
   "xfgm": 65.44,
   "fga": 154
  },
  "Kyshawn George": {
   "gp": 11,
   "tpm": 24,
   "xtpm": 22.84,
   "fgm": 73,
   "xfgm": 68.36,
   "fga": 150
  },
  "LJ Cryer": {
   "gp": 8,
   "tpm": 7,
   "xtpm": 5.6,
   "fgm": 10,
   "xfgm": 9.68,
   "fga": 25
  },
  "LaMelo Ball": {
   "gp": 11,
   "tpm": 37,
   "xtpm": 33.81,
   "fgm": 70,
   "xfgm": 64.65,
   "fga": 156
  },
  "Labaron Philon Jr.": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 2.8,
   "fgm": 6,
   "xfgm": 6.98,
   "fga": 17
  },
  "Landry Shamet": {
   "gp": 10,
   "tpm": 22,
   "xtpm": 18.78,
   "fgm": 31,
   "xfgm": 28.84,
   "fga": 70
  },
  "Larry Nance Jr.": {
   "gp": 10,
   "tpm": 10,
   "xtpm": 9.33,
   "fgm": 16,
   "xfgm": 15.87,
   "fga": 37
  },
  "Lauri Markkanen": {
   "gp": 8,
   "tpm": 29,
   "xtpm": 25.67,
   "fgm": 44,
   "xfgm": 46.29,
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
   "xtpm": 13.35,
   "fgm": 57,
   "xfgm": 66.19,
   "fga": 132
  },
  "Leaky Black": {
   "gp": 7,
   "tpm": 10,
   "xtpm": 8.84,
   "fgm": 12,
   "xfgm": 11.26,
   "fga": 29
  },
  "Leonard Miller": {
   "gp": 8,
   "tpm": 5,
   "xtpm": 9.52,
   "fgm": 23,
   "xfgm": 25.96,
   "fga": 53
  },
  "Liam McNeeley": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 4.22,
   "fgm": 7,
   "xfgm": 10.76,
   "fga": 24
  },
  "Luguentz Dort": {
   "gp": 12,
   "tpm": 21,
   "xtpm": 21.09,
   "fgm": 37,
   "xfgm": 45.68,
   "fga": 101
  },
  "Luka Dončić": {
   "gp": 10,
   "tpm": 55,
   "xtpm": 47.35,
   "fgm": 121,
   "xfgm": 98.62,
   "fga": 243
  },
  "Luka Garza": {
   "gp": 11,
   "tpm": 13,
   "xtpm": 8.91,
   "fgm": 23,
   "xfgm": 23.88,
   "fga": 50
  },
  "Luke Kennard": {
   "gp": 9,
   "tpm": 19,
   "xtpm": 13.81,
   "fgm": 25,
   "xfgm": 17.52,
   "fga": 47
  },
  "Luke Kornet": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 12,
   "xfgm": 15.15,
   "fga": 25
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
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 3.43,
   "fga": 7
  },
  "Malik Monk": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 11.6,
   "fgm": 26,
   "xfgm": 31.0,
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
   "xtpm": 8.54,
   "fgm": 20,
   "xfgm": 17.25,
   "fga": 43
  },
  "Marcus Smart": {
   "gp": 8,
   "tpm": 14,
   "xtpm": 13.48,
   "fgm": 23,
   "xfgm": 22.21,
   "fga": 55
  },
  "Mario Hezonja": {
   "gp": 11,
   "tpm": 14,
   "xtpm": 17.36,
   "fgm": 38,
   "xfgm": 40.68,
   "fga": 89
  },
  "Marvin Bagley III": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 1.4,
   "fgm": 19,
   "xfgm": 18.09,
   "fga": 33
  },
  "Matas Buzelis": {
   "gp": 9,
   "tpm": 13,
   "xtpm": 15.54,
   "fgm": 37,
   "xfgm": 39.64,
   "fga": 86
  },
  "Matisse Thybulle": {
   "gp": 12,
   "tpm": 20,
   "xtpm": 18.1,
   "fgm": 28,
   "xfgm": 26.02,
   "fga": 65
  },
  "Max Christie": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 14.88,
   "fgm": 20,
   "xfgm": 25.19,
   "fga": 61
  },
  "Max Strus": {
   "gp": 4,
   "tpm": 9,
   "xtpm": 10.59,
   "fgm": 14,
   "xfgm": 16.32,
   "fga": 39
  },
  "Meleek Thomas": {
   "gp": 8,
   "tpm": 22,
   "xtpm": 16.19,
   "fgm": 39,
   "xfgm": 36.49,
   "fga": 83
  },
  "Micah Peavy": {
   "gp": 7,
   "tpm": 4,
   "xtpm": 4.69,
   "fgm": 10,
   "xfgm": 13.86,
   "fga": 30
  },
  "Micah Potter": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 2.1,
   "fgm": 6,
   "xfgm": 4.74,
   "fga": 12
  },
  "Michael Porter Jr.": {
   "gp": 10,
   "tpm": 35,
   "xtpm": 33.04,
   "fgm": 70,
   "xfgm": 65.82,
   "fga": 155
  },
  "Mikal Bridges": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 12.11,
   "fgm": 25,
   "xfgm": 33.61,
   "fga": 76
  },
  "Mike Conley": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 2.12,
   "fgm": 4,
   "xfgm": 2.12,
   "fga": 6
  },
  "Mikel Brown Jr.": {
   "gp": 7,
   "tpm": 14,
   "xtpm": 15.8,
   "fgm": 28,
   "xfgm": 34.83,
   "fga": 81
  },
  "Miles Bridges": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 20.53,
   "fgm": 56,
   "xfgm": 55.59,
   "fga": 124
  },
  "Miles McBride": {
   "gp": 10,
   "tpm": 18,
   "xtpm": 14.86,
   "fgm": 23,
   "xfgm": 20.85,
   "fga": 54
  },
  "Mitchell Robinson": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 27,
   "xfgm": 27.96,
   "fga": 43
  },
  "Mo Bamba": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 22,
   "xfgm": 18.71,
   "fga": 30
  },
  "Mohamed Diawara": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 4.27,
   "fgm": 5,
   "xfgm": 6.69,
   "fga": 16
  },
  "Morez Johnson Jr.": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 3.15,
   "fgm": 29,
   "xfgm": 29.93,
   "fga": 56
  },
  "Moritz Wagner": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 6.7,
   "fgm": 36,
   "xfgm": 35.31,
   "fga": 65
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
   "xfgm": 32.58,
   "fga": 52
  },
  "Myles Turner": {
   "gp": 11,
   "tpm": 13,
   "xtpm": 17.99,
   "fgm": 28,
   "xfgm": 35.72,
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
   "xtpm": 8.49,
   "fgm": 37,
   "xfgm": 35.19,
   "fga": 77
  },
  "Nate Ament": {
   "gp": 9,
   "tpm": 10,
   "xtpm": 8.93,
   "fgm": 27,
   "xfgm": 27.22,
   "fga": 57
  },
  "Naz Reid": {
   "gp": 11,
   "tpm": 27,
   "xtpm": 26.11,
   "fgm": 74,
   "xfgm": 81.03,
   "fga": 180
  },
  "Neemias Queta": {
   "gp": 11,
   "tpm": 2,
   "xtpm": 1.07,
   "fgm": 38,
   "xfgm": 39.96,
   "fga": 68
  },
  "Nic Claxton": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.76,
   "fga": 3
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
   "xtpm": 44.52,
   "fgm": 85,
   "xfgm": 88.35,
   "fga": 204
  },
  "Nikola Jokić": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 14.02,
   "fgm": 82,
   "xfgm": 78.08,
   "fga": 168
  },
  "Nikola Jović": {
   "gp": 7,
   "tpm": 1,
   "xtpm": 3.57,
   "fgm": 6,
   "xfgm": 9.26,
   "fga": 20
  },
  "Nikola Vučević": {
   "gp": 10,
   "tpm": 4,
   "xtpm": 5.67,
   "fgm": 11,
   "xfgm": 12.05,
   "fga": 29
  },
  "Nique Clifford": {
   "gp": 9,
   "tpm": 1,
   "xtpm": 3.17,
   "fgm": 8,
   "xfgm": 8.98,
   "fga": 21
  },
  "Noa Essengue": {
   "gp": 8,
   "tpm": 3,
   "xtpm": 6.02,
   "fgm": 14,
   "xfgm": 18.09,
   "fga": 37
  },
  "Noah Clowney": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 8.14,
   "fgm": 16,
   "xfgm": 19.58,
   "fga": 43
  },
  "Nolan Traore": {
   "gp": 10,
   "tpm": 18,
   "xtpm": 13.77,
   "fgm": 49,
   "xfgm": 43.39,
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
   "xtpm": 19.28,
   "fgm": 41,
   "xfgm": 43.98,
   "fga": 103
  },
  "OG Anunoby": {
   "gp": 10,
   "tpm": 22,
   "xtpm": 23.49,
   "fgm": 47,
   "xfgm": 57.07,
   "fga": 120
  },
  "Obi Toppin": {
   "gp": 8,
   "tpm": 14,
   "xtpm": 13.9,
   "fgm": 40,
   "xfgm": 37.01,
   "fga": 77
  },
  "Olivier-Maxence Prosper": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 1.1,
   "fgm": 6,
   "xfgm": 6.6,
   "fga": 12
  },
  "Onyeka Okongwu": {
   "gp": 12,
   "tpm": 18,
   "xtpm": 19.34,
   "fgm": 62,
   "xfgm": 60.05,
   "fga": 126
  },
  "Oscar Tshiebwe": {
   "gp": 6,
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
   "xfgm": 22.85,
   "fga": 40
  },
  "Ousmane Dieng": {
   "gp": 8,
   "tpm": 5,
   "xtpm": 5.67,
   "fgm": 11,
   "xfgm": 12.49,
   "fga": 28
  },
  "P.J. Washington": {
   "gp": 11,
   "tpm": 26,
   "xtpm": 25.9,
   "fgm": 52,
   "xfgm": 55.21,
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
   "xtpm": 2.12,
   "fgm": 16,
   "xfgm": 10.79,
   "fga": 23
  },
  "Pascal Siakam": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 16.98,
   "fgm": 85,
   "xfgm": 76.55,
   "fga": 163
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
   "gp": 2,
   "tpm": 1,
   "xtpm": 2.8,
   "fgm": 4,
   "xfgm": 6.1,
   "fga": 13
  },
  "Paul George": {
   "gp": 10,
   "tpm": 37,
   "xtpm": 29.54,
   "fgm": 80,
   "xfgm": 70.02,
   "fga": 164
  },
  "Paul Reed": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 2.85,
   "fgm": 48,
   "xfgm": 44.63,
   "fga": 85
  },
  "Payton Pritchard": {
   "gp": 11,
   "tpm": 25,
   "xtpm": 23.52,
   "fgm": 48,
   "xfgm": 48.16,
   "fga": 116
  },
  "Pelle Larsson": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 11.22,
   "fgm": 36,
   "xfgm": 35.39,
   "fga": 77
  },
  "Peyton Watson": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 13.2,
   "fgm": 39,
   "xfgm": 46.55,
   "fga": 96
  },
  "Precious Achiuwa": {
   "gp": 11,
   "tpm": 4,
   "xtpm": 3.9,
   "fgm": 49,
   "xfgm": 46.72,
   "fga": 92
  },
  "Quentin Grimes": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 11.64,
   "fgm": 28,
   "xfgm": 30.21,
   "fga": 65
  },
  "Quenton Jackson": {
   "gp": 11,
   "tpm": 12,
   "xtpm": 11.97,
   "fgm": 39,
   "xfgm": 37.87,
   "fga": 80
  },
  "Quinten Post": {
   "gp": 8,
   "tpm": 5,
   "xtpm": 6.72,
   "fgm": 16,
   "xfgm": 15.45,
   "fga": 34
  },
  "RJ Barrett": {
   "gp": 10,
   "tpm": 15,
   "xtpm": 18.99,
   "fgm": 80,
   "xfgm": 87.7,
   "fga": 175
  },
  "Rasheer Fleming": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 2.12,
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
   "gp": 8,
   "tpm": 18,
   "xtpm": 20.04,
   "fgm": 28,
   "xfgm": 29.59,
   "fga": 75
  },
  "Riley Minix": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.82,
   "fgm": 4,
   "xfgm": 4.58,
   "fga": 11
  },
  "Robert Williams III": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 26,
   "xfgm": 23.99,
   "fga": 39
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
   "xtpm": 8.21,
   "fgm": 18,
   "xfgm": 22.29,
   "fga": 49
  },
  "Royce O'Neale": {
   "gp": 11,
   "tpm": 14,
   "xtpm": 16.89,
   "fgm": 19,
   "xfgm": 20.86,
   "fga": 54
  },
  "Rudy Gobert": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 28,
   "xfgm": 33.62,
   "fga": 56
  },
  "Rui Hachimura": {
   "gp": 8,
   "tpm": 18,
   "xtpm": 17.29,
   "fgm": 41,
   "xfgm": 47.01,
   "fga": 106
  },
  "Ryan Conwell": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 9.17,
   "fgm": 12,
   "xfgm": 13.31,
   "fga": 35
  },
  "Ryan Dunn": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 6.53,
   "fgm": 22,
   "xfgm": 21.49,
   "fga": 44
  },
  "Ryan Kalkbrenner": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 21,
   "xfgm": 18.49,
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
   "gp": 11,
   "tpm": 19,
   "xtpm": 17.99,
   "fgm": 45,
   "xfgm": 51.5,
   "fga": 113
  },
  "Saddiq Bey": {
   "gp": 11,
   "tpm": 19,
   "xtpm": 19.46,
   "fgm": 57,
   "xfgm": 54.82,
   "fga": 124
  },
  "Sam Hauser": {
   "gp": 11,
   "tpm": 25,
   "xtpm": 20.49,
   "fgm": 32,
   "xfgm": 25.7,
   "fga": 68
  },
  "Sam Merrill": {
   "gp": 9,
   "tpm": 14,
   "xtpm": 15.23,
   "fgm": 22,
   "xfgm": 22.9,
   "fga": 57
  },
  "Sandro Mamukelashvili": {
   "gp": 12,
   "tpm": 16,
   "xtpm": 15.17,
   "fgm": 42,
   "xfgm": 39.77,
   "fga": 88
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
   "gp": 10,
   "tpm": 9,
   "xtpm": 14.53,
   "fgm": 26,
   "xfgm": 34.78,
   "fga": 82
  },
  "Scottie Barnes": {
   "gp": 8,
   "tpm": 4,
   "xtpm": 9.24,
   "fgm": 75,
   "xfgm": 75.99,
   "fga": 158
  },
  "Scotty Pippen Jr.": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 3.17,
   "fgm": 11,
   "xfgm": 11.09,
   "fga": 26
  },
  "Sergio de Larrea": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 1.75,
   "fgm": 9,
   "xfgm": 7.62,
   "fga": 18
  },
  "Shai Gilgeous-Alexander": {
   "gp": 11,
   "tpm": 27,
   "xtpm": 25.58,
   "fgm": 115,
   "xfgm": 112.3,
   "fga": 254
  },
  "Sidy Cissoko": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 12.15,
   "fgm": 22,
   "xfgm": 22.06,
   "fga": 50
  },
  "Simone Fontecchio": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 2.8,
   "fgm": 2,
   "xfgm": 3.65,
   "fga": 10
  },
  "Sion James": {
   "gp": 11,
   "tpm": 14,
   "xtpm": 18.57,
   "fgm": 24,
   "xfgm": 29.35,
   "fga": 71
  },
  "Spencer Jones": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 1.82,
   "fgm": 5,
   "xfgm": 4.02,
   "fga": 9
  },
  "Stephen Curry": {
   "gp": 9,
   "tpm": 42,
   "xtpm": 32.34,
   "fgm": 79,
   "xfgm": 64.28,
   "fga": 157
  },
  "Stephon Castle": {
   "gp": 11,
   "tpm": 22,
   "xtpm": 23.94,
   "fgm": 60,
   "xfgm": 70.34,
   "fga": 153
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
   "gp": 11,
   "tpm": 7,
   "xtpm": 12.04,
   "fgm": 16,
   "xfgm": 23.31,
   "fga": 56
  },
  "T.J. McConnell": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 2.98,
   "fga": 7
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
   "gp": 11,
   "tpm": 10,
   "xtpm": 13.55,
   "fgm": 41,
   "xfgm": 46.24,
   "fga": 95
  },
  "Tarris Reed Jr.": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 6.6,
   "fga": 11
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
   "gp": 5,
   "tpm": 4,
   "xtpm": 2.5,
   "fgm": 7,
   "xfgm": 5.58,
   "fga": 12
  },
  "Terance Mann": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 2.52,
   "fgm": 1,
   "xfgm": 4.02,
   "fga": 10
  },
  "Terrence Shannon Jr": {
   "gp": 8,
   "tpm": 13,
   "xtpm": 12.72,
   "fgm": 26,
   "xfgm": 28.67,
   "fga": 66
  },
  "Thomas Bryant": {
   "gp": 6,
   "tpm": 8,
   "xtpm": 6.3,
   "fgm": 15,
   "xfgm": 13.31,
   "fga": 30
  },
  "Tidjane Salaün": {
   "gp": 10,
   "tpm": 14,
   "xtpm": 12.41,
   "fgm": 23,
   "xfgm": 21.66,
   "fga": 50
  },
  "Tim Hardaway Jr.": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 13.37,
   "fgm": 14,
   "xfgm": 20.39,
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
   "gp": 10,
   "tpm": 30,
   "xtpm": 24.52,
   "fgm": 45,
   "xfgm": 36.4,
   "fga": 90
  },
  "Trae Young": {
   "gp": 11,
   "tpm": 21,
   "xtpm": 25.67,
   "fgm": 57,
   "xfgm": 60.84,
   "fga": 145
  },
  "Trayce Jackson-Davis": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 12,
   "xfgm": 10.12,
   "fga": 17
  },
  "Tre Johnson": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 18.69,
   "fgm": 34,
   "xfgm": 39.04,
   "fga": 97
  },
  "Tre Jones": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 2.82,
   "fgm": 31,
   "xfgm": 35.11,
   "fga": 63
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
   "xtpm": 2.1,
   "fgm": 12,
   "xfgm": 12.45,
   "fga": 22
  },
  "Trevon Brazile": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 7.79,
   "fgm": 25,
   "xfgm": 22.54,
   "fga": 46
  },
  "Trey Lyles": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 12.02,
   "fgm": 24,
   "xfgm": 21.6,
   "fga": 51
  },
  "Trey Murphy III": {
   "gp": 9,
   "tpm": 20,
   "xtpm": 18.6,
   "fgm": 47,
   "xfgm": 45.75,
   "fga": 101
  },
  "Tristan Enaruna": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.77,
   "fgm": 3,
   "xfgm": 5.08,
   "fga": 10
  },
  "Tristan da Silva": {
   "gp": 9,
   "tpm": 32,
   "xtpm": 28.28,
   "fgm": 51,
   "xfgm": 45.11,
   "fga": 112
  },
  "Ty Jerome": {
   "gp": 9,
   "tpm": 25,
   "xtpm": 23.17,
   "fgm": 83,
   "xfgm": 68.75,
   "fga": 166
  },
  "Tyler Herro": {
   "gp": 10,
   "tpm": 31,
   "xtpm": 27.42,
   "fgm": 76,
   "xfgm": 74.37,
   "fga": 167
  },
  "Tyler Kolek": {
   "gp": 8,
   "tpm": 5,
   "xtpm": 5.3,
   "fgm": 10,
   "xfgm": 11.02,
   "fga": 25
  },
  "Tyrese Haliburton": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 9.57,
   "fgm": 32,
   "xfgm": 26.84,
   "fga": 62
  },
  "Tyrese Maxey": {
   "gp": 12,
   "tpm": 31,
   "xtpm": 30.24,
   "fgm": 109,
   "xfgm": 104.48,
   "fga": 222
  },
  "Tyrese Proctor": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 7.44,
   "fgm": 21,
   "xfgm": 19.22,
   "fga": 43
  },
  "Tyus Jones": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 3.85,
   "fgm": 8,
   "xfgm": 9.5,
   "fga": 22
  },
  "VJ Edgecombe": {
   "gp": 11,
   "tpm": 19,
   "xtpm": 18.74,
   "fgm": 56,
   "xfgm": 59.26,
   "fga": 124
  },
  "Victor Wembanyama": {
   "gp": 11,
   "tpm": 21,
   "xtpm": 22.78,
   "fgm": 119,
   "xfgm": 115.02,
   "fga": 225
  },
  "Vít Krejčí": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 5.27,
   "fgm": 6,
   "xfgm": 7.88,
   "fga": 20
  },
  "Walker Kessler": {
   "gp": 12,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 76,
   "xfgm": 68.68,
   "fga": 110
  },
  "Walter Clayton Jr.": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 10.52,
   "fgm": 25,
   "xfgm": 22.45,
   "fga": 53
  },
  "Wendell Carter Jr.": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 8.84,
   "fgm": 50,
   "xfgm": 40.39,
   "fga": 82
  },
  "Will Richard": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 7.47,
   "fgm": 19,
   "xfgm": 18.4,
   "fga": 40
  },
  "Will Riley": {
   "gp": 9,
   "tpm": 1,
   "xtpm": 2.85,
   "fgm": 6,
   "xfgm": 6.99,
   "fga": 15
  },
  "Yang Hansen": {
   "gp": 7,
   "tpm": 5,
   "xtpm": 3.15,
   "fgm": 8,
   "xfgm": 7.55,
   "fga": 17
  },
  "Yaxel Lendeborg": {
   "gp": 11,
   "tpm": 27,
   "xtpm": 21.47,
   "fgm": 79,
   "xfgm": 69.69,
   "fga": 151
  },
  "Yves Missi": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 5.5,
   "fga": 9
  },
  "Zaccharie Risacher": {
   "gp": 11,
   "tpm": 9,
   "xtpm": 12.65,
   "fgm": 31,
   "xfgm": 37.85,
   "fga": 80
  },
  "Zach Collins": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 2.47,
   "fgm": 4,
   "xfgm": 7.28,
   "fga": 15
  },
  "Zach Edey": {
   "gp": 9,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 26,
   "xfgm": 26.97,
   "fga": 48
  },
  "Zach LaVine": {
   "gp": 11,
   "tpm": 31,
   "xtpm": 28.49,
   "fgm": 81,
   "xfgm": 69.41,
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
   "gp": 9,
   "tpm": 19,
   "xtpm": 14.79,
   "fgm": 36,
   "xfgm": 29.03,
   "fga": 66
  },
  "Zion Williamson": {
   "gp": 10,
   "tpm": 3,
   "xtpm": 2.45,
   "fgm": 76,
   "xfgm": 71.9,
   "fga": 121
  },
  "Zuby Ejiofor": {
   "gp": 7,
   "tpm": 4,
   "xtpm": 3.17,
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
