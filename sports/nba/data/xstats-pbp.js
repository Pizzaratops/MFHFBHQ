// ============================================================
//  x3PM / xFGM der laufenden Saison aus Play-by-Play
//  Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data (nicht unser Projekt, frei veröffentlichte Daten)
//  Methode: Josh Lloyd (joshlloydfantasy.com/research/xstats-method)
//  Erzeugt von scripts/xstats-pbp.py am 2026-11-09 · Saison 2026-27 · Stand 2026-11-08
//  Wird von scripts/build-live-projections.js gelesen (3PM, FG%).
//  META {"season": "2026-27", "assetUpdated": "Mon, 09 Nov 2026 12:48:02 GMT"}
// ============================================================
const XSTATS_PBP = {
 "meta": {
  "season": "2026-27",
  "through": "2026-11-08",
  "players": 461,
  "games": 146,
  "shots": 25729,
  "assetUpdated": "Mon, 09 Nov 2026 12:48:02 GMT",
  "zoneRates": {
   "C3": 0.3708,
   "AB3": 0.3482,
   "RA": 0.6625,
   "PAINT": 0.4383,
   "MID": 0.4058
  },
  "source": "Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data"
 },
 "players": {
  "AJ Dybantsa": {
   "gp": 6,
   "tpm": 5,
   "xtpm": 6.31,
   "fgm": 34,
   "xfgm": 39.35,
   "fga": 80
  },
  "AJ Green": {
   "gp": 10,
   "tpm": 22,
   "xtpm": 17.99,
   "fgm": 25,
   "xfgm": 20.77,
   "fga": 57
  },
  "AJ Johnson": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 1.1,
   "fga": 2
  },
  "Aaron Gordon": {
   "gp": 8,
   "tpm": 10,
   "xtpm": 11.95,
   "fgm": 31,
   "xfgm": 34.63,
   "fga": 75
  },
  "Aaron Nesmith": {
   "gp": 8,
   "tpm": 14,
   "xtpm": 16.31,
   "fgm": 32,
   "xfgm": 36.24,
   "fga": 83
  },
  "Aaron Wiggins": {
   "gp": 11,
   "tpm": 32,
   "xtpm": 27.71,
   "fgm": 63,
   "xfgm": 56.54,
   "fga": 136
  },
  "Ace Bailey": {
   "gp": 10,
   "tpm": 12,
   "xtpm": 18.61,
   "fgm": 51,
   "xfgm": 49.61,
   "fga": 113
  },
  "Aday Mara": {
   "gp": 10,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 35,
   "xfgm": 32.46,
   "fga": 56
  },
  "Adem Bona": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 1.04,
   "fgm": 8,
   "xfgm": 12.07,
   "fga": 21
  },
  "Adou Thiero": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 3.31,
   "fga": 5
  },
  "Ajay Mitchell": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 11.65,
   "fgm": 75,
   "xfgm": 71.46,
   "fga": 145
  },
  "Al Horford": {
   "gp": 8,
   "tpm": 10,
   "xtpm": 8.4,
   "fgm": 15,
   "xfgm": 13.39,
   "fga": 34
  },
  "Alex Caruso": {
   "gp": 7,
   "tpm": 10,
   "xtpm": 7.71,
   "fgm": 16,
   "xfgm": 12.77,
   "fga": 31
  },
  "Alex Karaban": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.74,
   "fgm": 2,
   "xfgm": 2.4,
   "fga": 6
  },
  "Alex Morales": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 2,
   "xfgm": 2.48,
   "fga": 5
  },
  "Alex Sarr": {
   "gp": 9,
   "tpm": 6,
   "xtpm": 10.17,
   "fgm": 37,
   "xfgm": 37.4,
   "fga": 75
  },
  "Alijah Martin": {
   "gp": 8,
   "tpm": 8,
   "xtpm": 4.55,
   "fgm": 18,
   "xfgm": 12.28,
   "fga": 25
  },
  "Allen Graves": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 5.68,
   "fgm": 14,
   "xfgm": 15.79,
   "fga": 33
  },
  "Alperen Sengun": {
   "gp": 8,
   "tpm": 8,
   "xtpm": 5.59,
   "fgm": 64,
   "xfgm": 65.73,
   "fga": 125
  },
  "Alpha Diallo": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.07,
   "fgm": 2,
   "xfgm": 3.05,
   "fga": 6
  },
  "Amen Thompson": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 3.18,
   "fgm": 60,
   "xfgm": 66.25,
   "fga": 119
  },
  "Andre Drummond": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 19,
   "xfgm": 27.93,
   "fga": 45
  },
  "Andrew Nembhard": {
   "gp": 8,
   "tpm": 20,
   "xtpm": 17.11,
   "fgm": 47,
   "xfgm": 44.28,
   "fga": 104
  },
  "Andrew Wiggins": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 14.44,
   "fgm": 33,
   "xfgm": 34.71,
   "fga": 82
  },
  "Anfernee Simons": {
   "gp": 11,
   "tpm": 24,
   "xtpm": 21.64,
   "fgm": 32,
   "xfgm": 34.34,
   "fga": 85
  },
  "Anthony Black": {
   "gp": 6,
   "tpm": 12,
   "xtpm": 9.82,
   "fgm": 31,
   "xfgm": 29.09,
   "fga": 67
  },
  "Anthony Davis": {
   "gp": 8,
   "tpm": 7,
   "xtpm": 7.01,
   "fgm": 73,
   "xfgm": 72.18,
   "fga": 146
  },
  "Anthony Edwards": {
   "gp": 4,
   "tpm": 18,
   "xtpm": 15.76,
   "fgm": 50,
   "xfgm": 46.38,
   "fga": 104
  },
  "Anthony Gill": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 2.34,
   "fga": 4
  },
  "Asa Newell": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 2.83,
   "fgm": 7,
   "xfgm": 7.24,
   "fga": 15
  },
  "Ausar Thompson": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 1.04,
   "fgm": 31,
   "xfgm": 32.09,
   "fga": 62
  },
  "Austin Reaves": {
   "gp": 11,
   "tpm": 26,
   "xtpm": 22.03,
   "fgm": 91,
   "xfgm": 77.57,
   "fga": 179
  },
  "Ayo Dosunmu": {
   "gp": 11,
   "tpm": 21,
   "xtpm": 15.78,
   "fgm": 76,
   "xfgm": 72.03,
   "fga": 146
  },
  "Baba Miller": {
   "gp": 8,
   "tpm": 1,
   "xtpm": 1.42,
   "fgm": 9,
   "xfgm": 9.12,
   "fga": 18
  },
  "Bam Adebayo": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 11.63,
   "fgm": 70,
   "xfgm": 63.98,
   "fga": 132
  },
  "Baylor Scheierman": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 10.6,
   "fgm": 21,
   "xfgm": 20.33,
   "fga": 50
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
   "gp": 10,
   "tpm": 5,
   "xtpm": 8.4,
   "fgm": 22,
   "xfgm": 25.2,
   "fga": 54
  },
  "Bennett Stirtz": {
   "gp": 10,
   "tpm": 16,
   "xtpm": 12.63,
   "fgm": 25,
   "xfgm": 22.06,
   "fga": 53
  },
  "Bilal Coulibaly": {
   "gp": 10,
   "tpm": 4,
   "xtpm": 8.58,
   "fgm": 28,
   "xfgm": 30.36,
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
   "gp": 10,
   "tpm": 13,
   "xtpm": 14.09,
   "fgm": 26,
   "xfgm": 29.03,
   "fga": 70
  },
  "Bogdan Bogdanović": {
   "gp": 10,
   "tpm": 10,
   "xtpm": 8.14,
   "fgm": 17,
   "xfgm": 13.69,
   "fga": 35
  },
  "Bogoljub Marković": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.66,
   "fga": 1
  },
  "Bones Hyland": {
   "gp": 11,
   "tpm": 16,
   "xtpm": 16.43,
   "fgm": 33,
   "xfgm": 31.23,
   "fga": 75
  },
  "Braden Smith": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 2.48,
   "fgm": 13,
   "xfgm": 13.56,
   "fga": 29
  },
  "Branden Carlson": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 1.07,
   "fgm": 4,
   "xfgm": 3.27,
   "fga": 7
  },
  "Brandin Podziemski": {
   "gp": 8,
   "tpm": 20,
   "xtpm": 17.9,
   "fgm": 45,
   "xfgm": 40.76,
   "fga": 95
  },
  "Brandon Miller": {
   "gp": 10,
   "tpm": 27,
   "xtpm": 36.46,
   "fgm": 73,
   "xfgm": 86.81,
   "fga": 205
  },
  "Brandon Williams": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 8.05,
   "fgm": 31,
   "xfgm": 35.63,
   "fga": 77
  },
  "Brayden Burries": {
   "gp": 10,
   "tpm": 8,
   "xtpm": 12.65,
   "fgm": 36,
   "xfgm": 37.37,
   "fga": 81
  },
  "Brice Sensabaugh": {
   "gp": 10,
   "tpm": 14,
   "xtpm": 12.6,
   "fgm": 24,
   "xfgm": 26.74,
   "fga": 66
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
   "gp": 9,
   "tpm": 12,
   "xtpm": 9.8,
   "fgm": 50,
   "xfgm": 40.37,
   "fga": 86
  },
  "Brooks Barnhizer": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 3,
   "xfgm": 3.01,
   "fga": 6
  },
  "Bruce Thornton": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 1.39,
   "fgm": 5,
   "xfgm": 3.52,
   "fga": 9
  },
  "Bryce Hopkins": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 1.76,
   "fgm": 13,
   "xfgm": 10.74,
   "fga": 20
  },
  "Bryce McGowens": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 3.12,
   "fga": 6
  },
  "Bub Carrington": {
   "gp": 10,
   "tpm": 16,
   "xtpm": 11.28,
   "fgm": 18,
   "xfgm": 17.56,
   "fga": 44
  },
  "Buddy Hield": {
   "gp": 8,
   "tpm": 8,
   "xtpm": 7.31,
   "fgm": 18,
   "xfgm": 17.24,
   "fga": 37
  },
  "CJ McCollum": {
   "gp": 11,
   "tpm": 19,
   "xtpm": 19.87,
   "fgm": 52,
   "xfgm": 56.92,
   "fga": 130
  },
  "Cade Cunningham": {
   "gp": 9,
   "tpm": 19,
   "xtpm": 21.31,
   "fgm": 73,
   "xfgm": 71.1,
   "fga": 157
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
   "gp": 6,
   "tpm": 5,
   "xtpm": 3.6,
   "fgm": 9,
   "xfgm": 7.39,
   "fga": 18
  },
  "Caleb Wilson": {
   "gp": 9,
   "tpm": 21,
   "xtpm": 24.25,
   "fgm": 63,
   "xfgm": 71.58,
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
   "gp": 9,
   "tpm": 16,
   "xtpm": 10.84,
   "fgm": 29,
   "xfgm": 22.53,
   "fga": 56
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
   "gp": 9,
   "tpm": 18,
   "xtpm": 19.57,
   "fgm": 43,
   "xfgm": 54.66,
   "fga": 124
  },
  "Cameron Carr": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.35,
   "fga": 1
  },
  "Cameron Johnson": {
   "gp": 5,
   "tpm": 10,
   "xtpm": 8.77,
   "fgm": 21,
   "xfgm": 18.58,
   "fga": 43
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
   "gp": 9,
   "tpm": 6,
   "xtpm": 7.45,
   "fgm": 8,
   "xfgm": 10.54,
   "fga": 26
  },
  "Cason Wallace": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.53,
   "fgm": 8,
   "xfgm": 9.26,
   "fga": 20
  },
  "Cedric Coward": {
   "gp": 8,
   "tpm": 21,
   "xtpm": 15.04,
   "fgm": 40,
   "xfgm": 37.42,
   "fga": 85
  },
  "Chaney Johnson": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 8.17,
   "fgm": 16,
   "xfgm": 21.28,
   "fga": 47
  },
  "Charles Bassey": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 21,
   "xfgm": 18.32,
   "fga": 33
  },
  "Chaz Lanier": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 1.76,
   "fgm": 5,
   "xfgm": 2.86,
   "fga": 7
  },
  "Chet Holmgren": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.11,
   "fgm": 11,
   "xfgm": 14.65,
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
   "gp": 5,
   "tpm": 6,
   "xtpm": 6.66,
   "fgm": 8,
   "xfgm": 8.2,
   "fga": 22
  },
  "Christian Anderson": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 7.68,
   "fgm": 11,
   "xfgm": 16.22,
   "fga": 39
  },
  "Christian Braun": {
   "gp": 8,
   "tpm": 14,
   "xtpm": 13.11,
   "fgm": 41,
   "xfgm": 37.6,
   "fga": 79
  },
  "Clint Capela": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 9,
   "xfgm": 8.83,
   "fga": 14
  },
  "Coby White": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 5.57,
   "fgm": 6,
   "xfgm": 11.46,
   "fga": 26
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
   "xfgm": 3.53,
   "fga": 6
  },
  "Collin Gillespie": {
   "gp": 8,
   "tpm": 13,
   "xtpm": 16.46,
   "fgm": 20,
   "xfgm": 24.75,
   "fga": 63
  },
  "Collin Murray-Boyles": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 5.62,
   "fgm": 37,
   "xfgm": 37.26,
   "fga": 73
  },
  "Collin Sexton": {
   "gp": 10,
   "tpm": 8,
   "xtpm": 11.63,
   "fgm": 33,
   "xfgm": 37.38,
   "fga": 80
  },
  "Cooper Flagg": {
   "gp": 9,
   "tpm": 11,
   "xtpm": 14.69,
   "fgm": 74,
   "xfgm": 70.75,
   "fga": 155
  },
  "Corey Kispert": {
   "gp": 6,
   "tpm": 10,
   "xtpm": 6.27,
   "fgm": 17,
   "xfgm": 11.33,
   "fga": 27
  },
  "Craig Porter Jr.": {
   "gp": 8,
   "tpm": 1,
   "xtpm": 1.07,
   "fgm": 2,
   "xfgm": 1.94,
   "fga": 5
  },
  "DaRon Holmes II": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 1,
   "xfgm": 1.04,
   "fga": 3
  },
  "Daeqwon Plowden": {
   "gp": 7,
   "tpm": 4,
   "xtpm": 4.57,
   "fgm": 8,
   "xfgm": 7.44,
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
   "gp": 2,
   "tpm": 2,
   "xtpm": 1.39,
   "fgm": 4,
   "xfgm": 2.49,
   "fga": 6
  },
  "Damian Lillard": {
   "gp": 9,
   "tpm": 25,
   "xtpm": 25.44,
   "fgm": 51,
   "xfgm": 49.84,
   "fga": 121
  },
  "Daniel Gafford": {
   "gp": 10,
   "tpm": 1,
   "xtpm": 0.37,
   "fgm": 40,
   "xfgm": 33.15,
   "fga": 56
  },
  "Daniss Jenkins": {
   "gp": 9,
   "tpm": 19,
   "xtpm": 15.06,
   "fgm": 35,
   "xfgm": 31.72,
   "fga": 77
  },
  "Danny Wolf": {
   "gp": 5,
   "tpm": 10,
   "xtpm": 7.71,
   "fgm": 15,
   "xfgm": 13.21,
   "fga": 32
  },
  "Darius Acuff Jr.": {
   "gp": 10,
   "tpm": 30,
   "xtpm": 32.8,
   "fgm": 95,
   "xfgm": 100.59,
   "fga": 230
  },
  "Darius Garland": {
   "gp": 9,
   "tpm": 23,
   "xtpm": 21.64,
   "fgm": 66,
   "xfgm": 61.23,
   "fga": 140
  },
  "Darryn Peterson": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 18.2,
   "fgm": 52,
   "xfgm": 55.31,
   "fga": 132
  },
  "David Jones Garcia": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 1.45,
   "fga": 3
  },
  "Davion Mitchell": {
   "gp": 10,
   "tpm": 22,
   "xtpm": 19.24,
   "fgm": 63,
   "xfgm": 56.72,
   "fga": 124
  },
  "Day'Ron Sharpe": {
   "gp": 10,
   "tpm": 3,
   "xtpm": 3.94,
   "fgm": 27,
   "xfgm": 31.3,
   "fga": 55
  },
  "De'Aaron Fox": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 9.17,
   "fgm": 45,
   "xfgm": 40.3,
   "fga": 86
  },
  "De'Andre Hunter": {
   "gp": 9,
   "tpm": 18,
   "xtpm": 17.96,
   "fgm": 40,
   "xfgm": 39.24,
   "fga": 94
  },
  "De'Anthony Melton": {
   "gp": 10,
   "tpm": 20,
   "xtpm": 16.81,
   "fgm": 29,
   "xfgm": 29.76,
   "fga": 72
  },
  "DeAndre Jordan": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 2.65,
   "fga": 4
  },
  "DeMar DeRozan": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 3.92,
   "fgm": 26,
   "xfgm": 26.79,
   "fga": 61
  },
  "Dean Wade": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 5.64,
   "fgm": 10,
   "xfgm": 10.9,
   "fga": 25
  },
  "Deandre Ayton": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 25,
   "xfgm": 21.57,
   "fga": 36
  },
  "Dejounte Murray": {
   "gp": 7,
   "tpm": 5,
   "xtpm": 7.47,
   "fgm": 37,
   "xfgm": 43.64,
   "fga": 86
  },
  "Deni Avdija": {
   "gp": 9,
   "tpm": 15,
   "xtpm": 15.72,
   "fgm": 65,
   "xfgm": 67.14,
   "fga": 138
  },
  "Dennis Schröder": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 12.28,
   "fgm": 32,
   "xfgm": 41.72,
   "fga": 88
  },
  "Derik Queen": {
   "gp": 10,
   "tpm": 3,
   "xtpm": 3.18,
   "fgm": 40,
   "xfgm": 45.29,
   "fga": 85
  },
  "Derrick Jones Jr.": {
   "gp": 8,
   "tpm": 15,
   "xtpm": 10.91,
   "fgm": 33,
   "xfgm": 30.9,
   "fga": 65
  },
  "Derrick White": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 18.27,
   "fgm": 47,
   "xfgm": 45.54,
   "fga": 107
  },
  "Desmond Bane": {
   "gp": 8,
   "tpm": 28,
   "xtpm": 26.71,
   "fgm": 44,
   "xfgm": 46.35,
   "fga": 113
  },
  "Devin Booker": {
   "gp": 8,
   "tpm": 15,
   "xtpm": 15.72,
   "fgm": 70,
   "xfgm": 64.09,
   "fga": 147
  },
  "Devin Vassell": {
   "gp": 10,
   "tpm": 16,
   "xtpm": 15.85,
   "fgm": 39,
   "xfgm": 41.18,
   "fga": 96
  },
  "Dillon Brooks": {
   "gp": 8,
   "tpm": 18,
   "xtpm": 13.6,
   "fgm": 48,
   "xfgm": 43.21,
   "fga": 98
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
   "gp": 9,
   "tpm": 2,
   "xtpm": 1.39,
   "fgm": 55,
   "xfgm": 44.21,
   "fga": 80
  },
  "Donovan Clingan": {
   "gp": 9,
   "tpm": 10,
   "xtpm": 7.66,
   "fgm": 42,
   "xfgm": 38.32,
   "fga": 72
  },
  "Donovan Mitchell": {
   "gp": 10,
   "tpm": 29,
   "xtpm": 26.16,
   "fgm": 82,
   "xfgm": 75.82,
   "fga": 168
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
   "gp": 8,
   "tpm": 2,
   "xtpm": 3.5,
   "fgm": 9,
   "xfgm": 12.31,
   "fga": 26
  },
  "Dru Smith": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 2.09,
   "fgm": 4,
   "xfgm": 3.63,
   "fga": 9
  },
  "Duncan Robinson": {
   "gp": 9,
   "tpm": 38,
   "xtpm": 29.43,
   "fgm": 49,
   "xfgm": 41.91,
   "fga": 107
  },
  "Duop Reath": {
   "gp": 5,
   "tpm": 3,
   "xtpm": 2.11,
   "fgm": 6,
   "xfgm": 4.1,
   "fga": 9
  },
  "Dylan Cardwell": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 7.28,
   "fga": 12
  },
  "Dylan Harper": {
   "gp": 10,
   "tpm": 12,
   "xtpm": 11.89,
   "fgm": 69,
   "xfgm": 70.49,
   "fga": 139
  },
  "Dyson Daniels": {
   "gp": 11,
   "tpm": 1,
   "xtpm": 5.27,
   "fgm": 48,
   "xfgm": 54.56,
   "fga": 104
  },
  "Ebuka Okorie": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 1.04,
   "fgm": 2,
   "xfgm": 4.57,
   "fga": 9
  },
  "Egor Dëmin": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 7.34,
   "fgm": 9,
   "xfgm": 11.93,
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
   "gp": 10,
   "tpm": 13,
   "xtpm": 10.84,
   "fgm": 17,
   "xfgm": 16.86,
   "fga": 44
  },
  "Evan Mobley": {
   "gp": 10,
   "tpm": 21,
   "xtpm": 15.39,
   "fgm": 69,
   "xfgm": 62.27,
   "fga": 124
  },
  "Felix Okpara": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.66,
   "fga": 1
  },
  "Franz Wagner": {
   "gp": 9,
   "tpm": 10,
   "xtpm": 15.18,
   "fgm": 70,
   "xfgm": 77.45,
   "fga": 159
  },
  "Fred VanVleet": {
   "gp": 8,
   "tpm": 22,
   "xtpm": 21.68,
   "fgm": 36,
   "xfgm": 33.7,
   "fga": 89
  },
  "GG Jackson": {
   "gp": 8,
   "tpm": 9,
   "xtpm": 8.1,
   "fgm": 21,
   "xfgm": 24.8,
   "fga": 53
  },
  "Gary Payton II": {
   "gp": 10,
   "tpm": 4,
   "xtpm": 6.31,
   "fgm": 22,
   "xfgm": 22.83,
   "fga": 47
  },
  "Gary Trent Jr.": {
   "gp": 2,
   "tpm": 2,
   "xtpm": 1.39,
   "fgm": 2,
   "xfgm": 1.8,
   "fga": 5
  },
  "Georges Niang": {
   "gp": 10,
   "tpm": 14,
   "xtpm": 13.85,
   "fgm": 32,
   "xfgm": 28.11,
   "fga": 67
  },
  "Giannis Antetokounmpo": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 8.71,
   "fgm": 107,
   "xfgm": 100.17,
   "fga": 189
  },
  "Goga Bitadze": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 9.49,
   "fga": 15
  },
  "Gradey Dick": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 5.31,
   "fgm": 23,
   "xfgm": 22.44,
   "fga": 44
  },
  "Graham Ike": {
   "gp": 7,
   "tpm": 4,
   "xtpm": 1.39,
   "fgm": 13,
   "xfgm": 13.7,
   "fga": 25
  },
  "Grayson Allen": {
   "gp": 10,
   "tpm": 32,
   "xtpm": 24.1,
   "fgm": 40,
   "xfgm": 34.65,
   "fga": 90
  },
  "Gui Santos": {
   "gp": 7,
   "tpm": 4,
   "xtpm": 4.2,
   "fgm": 16,
   "xfgm": 16.32,
   "fga": 33
  },
  "Hannes Steinbach": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 6,
   "xfgm": 8.16,
   "fga": 13
  },
  "Harrison Barnes": {
   "gp": 8,
   "tpm": 8,
   "xtpm": 7.38,
   "fgm": 12,
   "xfgm": 10.68,
   "fga": 27
  },
  "Herbert Jones": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 8.89,
   "fgm": 23,
   "xfgm": 29.09,
   "fga": 60
  },
  "Hugo González": {
   "gp": 10,
   "tpm": 3,
   "xtpm": 6.03,
   "fgm": 13,
   "xfgm": 15.08,
   "fga": 31
  },
  "Immanuel Quickley": {
   "gp": 8,
   "tpm": 21,
   "xtpm": 22.05,
   "fgm": 45,
   "xfgm": 44.19,
   "fga": 110
  },
  "Isaac Jones": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 1,
   "xfgm": 1.03,
   "fga": 2
  },
  "Isaac Okoro": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 6.77,
   "fgm": 14,
   "xfgm": 18.25,
   "fga": 37
  },
  "Isaiah Collier": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 2.79,
   "fgm": 22,
   "xfgm": 24.67,
   "fga": 51
  },
  "Isaiah Crawford": {
   "gp": 6,
   "tpm": 4,
   "xtpm": 2.81,
   "fgm": 5,
   "xfgm": 3.47,
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
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 28,
   "xfgm": 33.92,
   "fga": 63
  },
  "Isaiah Jackson": {
   "gp": 8,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 30,
   "xfgm": 29.94,
   "fga": 52
  },
  "Isaiah Joe": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 4.53,
   "fgm": 7,
   "xfgm": 7.28,
   "fga": 19
  },
  "Isaiah Stewart": {
   "gp": 7,
   "tpm": 8,
   "xtpm": 4.92,
   "fgm": 32,
   "xfgm": 24.5,
   "fga": 48
  },
  "Ivica Zubac": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 16,
   "xfgm": 17.63,
   "fga": 30
  },
  "Ja Morant": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 4.9,
   "fgm": 26,
   "xfgm": 22.01,
   "fga": 48
  },
  "Ja'Kobe Walter": {
   "gp": 9,
   "tpm": 19,
   "xtpm": 20.07,
   "fgm": 32,
   "xfgm": 32.52,
   "fga": 80
  },
  "Ja'Kobi Gillespie": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 2,
   "xfgm": 1.71,
   "fga": 4
  },
  "Jabari Smith Jr.": {
   "gp": 10,
   "tpm": 28,
   "xtpm": 20.64,
   "fgm": 60,
   "xfgm": 51.87,
   "fga": 118
  },
  "Jabari Walker": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 2.44,
   "fgm": 14,
   "xfgm": 14.36,
   "fga": 25
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
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 3.52,
   "fga": 7
  },
  "Jaden Hardy": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 2.79,
   "fgm": 1,
   "xfgm": 3.63,
   "fga": 10
  },
  "Jaden McDaniels": {
   "gp": 11,
   "tpm": 16,
   "xtpm": 17.47,
   "fgm": 77,
   "xfgm": 71.02,
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
   "gp": 10,
   "tpm": 17,
   "xtpm": 14.18,
   "fgm": 56,
   "xfgm": 56.74,
   "fga": 116
  },
  "Jake LaRavia": {
   "gp": 10,
   "tpm": 12,
   "xtpm": 7.43,
   "fgm": 22,
   "xfgm": 18.86,
   "fga": 40
  },
  "Jakob Poeltl": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 22,
   "xfgm": 20.26,
   "fga": 36
  },
  "Jalen Brunson": {
   "gp": 9,
   "tpm": 25,
   "xtpm": 23.72,
   "fgm": 79,
   "xfgm": 81.21,
   "fga": 187
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
   "gp": 8,
   "tpm": 6,
   "xtpm": 9.8,
   "fgm": 39,
   "xfgm": 45.97,
   "fga": 93
  },
  "Jalen Johnson": {
   "gp": 8,
   "tpm": 8,
   "xtpm": 12.56,
   "fgm": 56,
   "xfgm": 60.83,
   "fga": 124
  },
  "Jalen Pickett": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 3,
   "xfgm": 2.2,
   "fga": 5
  },
  "Jalen Slawson": {
   "gp": 9,
   "tpm": 2,
   "xtpm": 3.53,
   "fgm": 10,
   "xfgm": 10.52,
   "fga": 22
  },
  "Jalen Smith": {
   "gp": 9,
   "tpm": 13,
   "xtpm": 15.43,
   "fgm": 41,
   "xfgm": 39.38,
   "fga": 83
  },
  "Jalen Suggs": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 3.22,
   "fgm": 10,
   "xfgm": 13.22,
   "fga": 28
  },
  "Jalen Williams": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.13,
   "fgm": 15,
   "xfgm": 19.13,
   "fga": 39
  },
  "Jamal Cain": {
   "gp": 9,
   "tpm": 10,
   "xtpm": 11.69,
   "fgm": 22,
   "xfgm": 20.88,
   "fga": 53
  },
  "Jamal Murray": {
   "gp": 8,
   "tpm": 31,
   "xtpm": 22.03,
   "fgm": 61,
   "xfgm": 56.17,
   "fga": 129
  },
  "Jamal Shead": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 8.05,
   "fgm": 18,
   "xfgm": 22.17,
   "fga": 49
  },
  "Jamaree Bouyea": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 0.37,
   "fgm": 3,
   "xfgm": 1.21,
   "fga": 3
  },
  "James Harden": {
   "gp": 10,
   "tpm": 25,
   "xtpm": 24.05,
   "fgm": 45,
   "xfgm": 53.42,
   "fga": 123
  },
  "James Wiseman": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 5.92,
   "fga": 10
  },
  "Jamison Battle": {
   "gp": 9,
   "tpm": 16,
   "xtpm": 13.35,
   "fgm": 24,
   "xfgm": 21.47,
   "fga": 52
  },
  "Jarace Walker": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 13.0,
   "fgm": 27,
   "xfgm": 32.5,
   "fga": 72
  },
  "Jared McCain": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 20.03,
   "fgm": 46,
   "xfgm": 48.48,
   "fga": 110
  },
  "Jaren Jackson Jr.": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 4.92,
   "fgm": 22,
   "xfgm": 20.09,
   "fga": 44
  },
  "Jarred Vanderbilt": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.31,
   "fga": 5
  },
  "Jarrett Allen": {
   "gp": 8,
   "tpm": 2,
   "xtpm": 1.04,
   "fgm": 41,
   "xfgm": 38.42,
   "fga": 66
  },
  "Jase Richardson": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 10.3,
   "fgm": 21,
   "xfgm": 29.4,
   "fga": 66
  },
  "Javon Small": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 2.79,
   "fgm": 5,
   "xfgm": 6.74,
   "fga": 16
  },
  "Javonte Green": {
   "gp": 9,
   "tpm": 11,
   "xtpm": 12.37,
   "fgm": 16,
   "xfgm": 17.63,
   "fga": 44
  },
  "Jaxson Hayes": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 29,
   "xfgm": 25.9,
   "fga": 46
  },
  "Jay Huff": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 9.86,
   "fgm": 24,
   "xfgm": 22.43,
   "fga": 49
  },
  "Jaylen Brown": {
   "gp": 10,
   "tpm": 20,
   "xtpm": 17.85,
   "fgm": 84,
   "xfgm": 84.16,
   "fga": 176
  },
  "Jaylen Clark": {
   "gp": 10,
   "tpm": 8,
   "xtpm": 7.56,
   "fgm": 15,
   "xfgm": 15.66,
   "fga": 37
  },
  "Jaylen Wells": {
   "gp": 9,
   "tpm": 15,
   "xtpm": 15.15,
   "fgm": 35,
   "xfgm": 29.77,
   "fga": 70
  },
  "Jaylin Sellers": {
   "gp": 5,
   "tpm": 6,
   "xtpm": 5.64,
   "fgm": 7,
   "xfgm": 8.47,
   "fga": 21
  },
  "Jaylin Williams": {
   "gp": 7,
   "tpm": 5,
   "xtpm": 8.52,
   "fgm": 6,
   "xfgm": 12.01,
   "fga": 30
  },
  "Jaylon Tyson": {
   "gp": 5,
   "tpm": 5,
   "xtpm": 7.77,
   "fgm": 16,
   "xfgm": 18.07,
   "fga": 39
  },
  "Jayson Kent": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 1.39,
   "fgm": 2,
   "xfgm": 4.92,
   "fga": 10
  },
  "Jayson Tatum": {
   "gp": 9,
   "tpm": 21,
   "xtpm": 23.42,
   "fgm": 74,
   "xfgm": 80.66,
   "fga": 176
  },
  "Jerami Grant": {
   "gp": 9,
   "tpm": 14,
   "xtpm": 12.44,
   "fgm": 30,
   "xfgm": 33.88,
   "fga": 74
  },
  "Jeremiah Fears": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 13.67,
   "fgm": 62,
   "xfgm": 69.06,
   "fga": 136
  },
  "Jericho Sims": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 1,
   "xfgm": 1.47,
   "fga": 3
  },
  "Jett Howard": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.42,
   "fgm": 4,
   "xfgm": 2.92,
   "fga": 7
  },
  "Jevon Carter": {
   "gp": 5,
   "tpm": 6,
   "xtpm": 6.31,
   "fgm": 7,
   "xfgm": 8.26,
   "fga": 22
  },
  "Joan Beringer": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 25,
   "xfgm": 27.37,
   "fga": 43
  },
  "Jock Landale": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 6.03,
   "fgm": 17,
   "xfgm": 18.82,
   "fga": 38
  },
  "Joel Embiid": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 10.45,
   "fgm": 52,
   "xfgm": 64.41,
   "fga": 137
  },
  "John Collins": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 8.12,
   "fgm": 35,
   "xfgm": 37.73,
   "fga": 75
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
   "xtpm": 17.63,
   "fgm": 48,
   "xfgm": 52.53,
   "fga": 110
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
   "gp": 8,
   "tpm": 6,
   "xtpm": 3.2,
   "fgm": 22,
   "xfgm": 19.68,
   "fga": 39
  },
  "Jordan Goodwin": {
   "gp": 5,
   "tpm": 9,
   "xtpm": 8.4,
   "fgm": 15,
   "xfgm": 13.87,
   "fga": 34
  },
  "Jordan Hawkins": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 3.53,
   "fgm": 7,
   "xfgm": 6.91,
   "fga": 17
  },
  "Jordan McLaughlin": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 1.44,
   "fgm": 1,
   "xfgm": 5.4,
   "fga": 11
  },
  "Jordan Poole": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 4.9,
   "fgm": 4,
   "xfgm": 8.57,
   "fga": 21
  },
  "Jordan Walsh": {
   "gp": 10,
   "tpm": 7,
   "xtpm": 8.61,
   "fgm": 15,
   "xfgm": 18.47,
   "fga": 40
  },
  "Jose Alvarado": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.44,
   "fgm": 4,
   "xfgm": 6.63,
   "fga": 14
  },
  "Josh Dix": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 4.2,
   "fgm": 7,
   "xfgm": 9.23,
   "fga": 21
  },
  "Josh Giddey": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 11.19,
   "fgm": 35,
   "xfgm": 41.12,
   "fga": 84
  },
  "Josh Green": {
   "gp": 8,
   "tpm": 5,
   "xtpm": 5.36,
   "fgm": 11,
   "xfgm": 12.35,
   "fga": 27
  },
  "Josh Hart": {
   "gp": 7,
   "tpm": 13,
   "xtpm": 13.3,
   "fgm": 22,
   "xfgm": 24.25,
   "fga": 57
  },
  "Josh Minott": {
   "gp": 7,
   "tpm": 5,
   "xtpm": 7.38,
   "fgm": 11,
   "xfgm": 11.79,
   "fga": 28
  },
  "Josh Okogie": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 4.59,
   "fgm": 9,
   "xfgm": 12.26,
   "fga": 28
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
   "gp": 9,
   "tpm": 21,
   "xtpm": 17.2,
   "fgm": 39,
   "xfgm": 31.5,
   "fga": 76
  },
  "Julian Champagnie": {
   "gp": 10,
   "tpm": 28,
   "xtpm": 22.16,
   "fgm": 32,
   "xfgm": 25.9,
   "fga": 70
  },
  "Julian Reese": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.66,
   "fga": 1
  },
  "Julius Randle": {
   "gp": 10,
   "tpm": 15,
   "xtpm": 15.43,
   "fgm": 64,
   "xfgm": 67.63,
   "fga": 143
  },
  "Justin Champagnie": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.46,
   "fgm": 12,
   "xfgm": 10.85,
   "fga": 20
  },
  "Justin Edwards": {
   "gp": 4,
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
   "gp": 9,
   "tpm": 17,
   "xtpm": 13.58,
   "fgm": 70,
   "xfgm": 64.96,
   "fga": 124
  },
  "Karlo Matković": {
   "gp": 9,
   "tpm": 16,
   "xtpm": 10.76,
   "fgm": 32,
   "xfgm": 24.89,
   "fga": 52
  },
  "Kasparas Jakučionis": {
   "gp": 10,
   "tpm": 5,
   "xtpm": 8.4,
   "fgm": 19,
   "xfgm": 21.64,
   "fga": 45
  },
  "Kawhi Leonard": {
   "gp": 2,
   "tpm": 4,
   "xtpm": 4.88,
   "fgm": 12,
   "xfgm": 17.16,
   "fga": 37
  },
  "Keaton Wagler": {
   "gp": 9,
   "tpm": 16,
   "xtpm": 14.35,
   "fgm": 25,
   "xfgm": 30.39,
   "fga": 73
  },
  "Keegan Murray": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 3.57,
   "fgm": 8,
   "xfgm": 11.47,
   "fga": 27
  },
  "Kel'el Ware": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 10.49,
   "fgm": 33,
   "xfgm": 43.33,
   "fga": 83
  },
  "Keldon Johnson": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 4.59,
   "fgm": 31,
   "xfgm": 38.31,
   "fga": 71
  },
  "Kelly Oubre Jr.": {
   "gp": 8,
   "tpm": 7,
   "xtpm": 10.58,
   "fgm": 25,
   "xfgm": 27.92,
   "fga": 61
  },
  "Kenrich Williams": {
   "gp": 10,
   "tpm": 14,
   "xtpm": 10.54,
   "fgm": 24,
   "xfgm": 22.27,
   "fga": 51
  },
  "Kentavious Caldwell-Pope": {
   "gp": 11,
   "tpm": 15,
   "xtpm": 10.93,
   "fgm": 21,
   "xfgm": 17.93,
   "fga": 45
  },
  "Keon Ellis": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 10.17,
   "fgm": 15,
   "xfgm": 18.68,
   "fga": 45
  },
  "Kevin Durant": {
   "gp": 10,
   "tpm": 14,
   "xtpm": 13.72,
   "fgm": 64,
   "xfgm": 54.94,
   "fga": 126
  },
  "Kevin Huerter": {
   "gp": 9,
   "tpm": 16,
   "xtpm": 14.04,
   "fgm": 28,
   "xfgm": 25.11,
   "fga": 63
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
   "xtpm": 20.59,
   "fgm": 70,
   "xfgm": 66.65,
   "fga": 156
  },
  "Khaman Maluach": {
   "gp": 8,
   "tpm": 1,
   "xtpm": 1.76,
   "fgm": 24,
   "xfgm": 23.6,
   "fga": 41
  },
  "Khris Middleton": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 1.76,
   "fgm": 3,
   "xfgm": 3.71,
   "fga": 9
  },
  "Kingston Flemings": {
   "gp": 10,
   "tpm": 8,
   "xtpm": 6.62,
   "fgm": 36,
   "xfgm": 33.56,
   "fga": 68
  },
  "Klay Thompson": {
   "gp": 10,
   "tpm": 40,
   "xtpm": 32.68,
   "fgm": 51,
   "xfgm": 41.12,
   "fga": 113
  },
  "Koa Peat": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 2.43,
   "fga": 4
  },
  "Kobe Brown": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 4.22,
   "fgm": 10,
   "xfgm": 10.17,
   "fga": 23
  },
  "Kobe Sanders": {
   "gp": 9,
   "tpm": 16,
   "xtpm": 15.37,
   "fgm": 30,
   "xfgm": 30.65,
   "fga": 72
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
   "gp": 9,
   "tpm": 9,
   "xtpm": 8.08,
   "fgm": 29,
   "xfgm": 27.91,
   "fga": 57
  },
  "Kris Murray": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 4.31,
   "fgm": 3,
   "xfgm": 6.3,
   "fga": 15
  },
  "Kyle Anderson": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 3.23,
   "fga": 7
  },
  "Kyle Filipowski": {
   "gp": 7,
   "tpm": 2,
   "xtpm": 1.79,
   "fgm": 7,
   "xfgm": 10.15,
   "fga": 20
  },
  "Kyle Kuzma": {
   "gp": 10,
   "tpm": 17,
   "xtpm": 17.99,
   "fgm": 47,
   "xfgm": 45.67,
   "fga": 97
  },
  "Kyrie Irving": {
   "gp": 8,
   "tpm": 23,
   "xtpm": 23.12,
   "fgm": 64,
   "xfgm": 58.08,
   "fga": 136
  },
  "Kyshawn George": {
   "gp": 10,
   "tpm": 22,
   "xtpm": 20.64,
   "fgm": 68,
   "xfgm": 63.1,
   "fga": 138
  },
  "LJ Cryer": {
   "gp": 7,
   "tpm": 5,
   "xtpm": 3.48,
   "fgm": 6,
   "xfgm": 6.27,
   "fga": 16
  },
  "LaMelo Ball": {
   "gp": 11,
   "tpm": 37,
   "xtpm": 33.63,
   "fgm": 70,
   "xfgm": 64.48,
   "fga": 156
  },
  "Labaron Philon Jr.": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 2.79,
   "fgm": 6,
   "xfgm": 6.52,
   "fga": 16
  },
  "Landry Shamet": {
   "gp": 9,
   "tpm": 20,
   "xtpm": 16.94,
   "fgm": 27,
   "xfgm": 25.69,
   "fga": 63
  },
  "Larry Nance Jr.": {
   "gp": 9,
   "tpm": 10,
   "xtpm": 8.56,
   "fgm": 15,
   "xfgm": 14.45,
   "fga": 34
  },
  "Lauri Markkanen": {
   "gp": 8,
   "tpm": 29,
   "xtpm": 25.53,
   "fgm": 44,
   "xfgm": 46.17,
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
   "gp": 9,
   "tpm": 8,
   "xtpm": 11.17,
   "fgm": 53,
   "xfgm": 60.78,
   "fga": 120
  },
  "Leaky Black": {
   "gp": 6,
   "tpm": 10,
   "xtpm": 7.73,
   "fgm": 12,
   "xfgm": 9.49,
   "fga": 25
  },
  "Leonard Miller": {
   "gp": 8,
   "tpm": 5,
   "xtpm": 9.47,
   "fgm": 23,
   "xfgm": 25.96,
   "fga": 53
  },
  "Liam McNeeley": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 3.5,
   "fgm": 4,
   "xfgm": 9.64,
   "fga": 21
  },
  "Luguentz Dort": {
   "gp": 11,
   "tpm": 20,
   "xtpm": 18.85,
   "fgm": 36,
   "xfgm": 43.48,
   "fga": 95
  },
  "Luka Dončić": {
   "gp": 9,
   "tpm": 52,
   "xtpm": 43.27,
   "fgm": 110,
   "xfgm": 89.07,
   "fga": 221
  },
  "Luka Garza": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 8.52,
   "fgm": 22,
   "xfgm": 23.07,
   "fga": 48
  },
  "Luke Kennard": {
   "gp": 7,
   "tpm": 15,
   "xtpm": 10.93,
   "fgm": 19,
   "xfgm": 13.31,
   "fga": 36
  },
  "Luke Kornet": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 11,
   "xfgm": 14.52,
   "fga": 24
  },
  "Malevy Leons": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 2.99,
   "fga": 6
  },
  "Malik Monk": {
   "gp": 9,
   "tpm": 11,
   "xtpm": 11.54,
   "fgm": 26,
   "xfgm": 30.93,
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
   "xtpm": 8.49,
   "fgm": 20,
   "xfgm": 17.2,
   "fga": 43
  },
  "Marcus Smart": {
   "gp": 7,
   "tpm": 13,
   "xtpm": 12.35,
   "fgm": 21,
   "xfgm": 19.98,
   "fga": 50
  },
  "Mario Hezonja": {
   "gp": 10,
   "tpm": 14,
   "xtpm": 16.22,
   "fgm": 33,
   "xfgm": 34.51,
   "fga": 78
  },
  "Marvin Bagley III": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 1.39,
   "fgm": 17,
   "xfgm": 16.78,
   "fga": 31
  },
  "Matas Buzelis": {
   "gp": 9,
   "tpm": 13,
   "xtpm": 15.46,
   "fgm": 37,
   "xfgm": 39.6,
   "fga": 86
  },
  "Matisse Thybulle": {
   "gp": 11,
   "tpm": 18,
   "xtpm": 16.27,
   "fgm": 26,
   "xfgm": 24.2,
   "fga": 60
  },
  "Max Christie": {
   "gp": 9,
   "tpm": 11,
   "xtpm": 14.81,
   "fgm": 20,
   "xfgm": 25.12,
   "fga": 61
  },
  "Max Strus": {
   "gp": 3,
   "tpm": 7,
   "xtpm": 7.73,
   "fgm": 9,
   "xfgm": 10.82,
   "fga": 27
  },
  "Meleek Thomas": {
   "gp": 7,
   "tpm": 18,
   "xtpm": 14.02,
   "fgm": 32,
   "xfgm": 31.29,
   "fga": 71
  },
  "Micah Peavy": {
   "gp": 6,
   "tpm": 4,
   "xtpm": 3.94,
   "fgm": 10,
   "xfgm": 12.02,
   "fga": 26
  },
  "Micah Potter": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.74,
   "fgm": 6,
   "xfgm": 4.37,
   "fga": 11
  },
  "Michael Porter Jr.": {
   "gp": 10,
   "tpm": 35,
   "xtpm": 32.87,
   "fgm": 70,
   "xfgm": 65.68,
   "fga": 155
  },
  "Mikal Bridges": {
   "gp": 9,
   "tpm": 9,
   "xtpm": 12.04,
   "fgm": 23,
   "xfgm": 30.48,
   "fga": 70
  },
  "Mike Conley": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 2.11,
   "fgm": 4,
   "xfgm": 2.11,
   "fga": 6
  },
  "Mikel Brown Jr.": {
   "gp": 7,
   "tpm": 14,
   "xtpm": 15.72,
   "fgm": 28,
   "xfgm": 34.76,
   "fga": 81
  },
  "Miles Bridges": {
   "gp": 8,
   "tpm": 17,
   "xtpm": 17.59,
   "fgm": 50,
   "xfgm": 48.31,
   "fga": 107
  },
  "Miles McBride": {
   "gp": 9,
   "tpm": 16,
   "xtpm": 13.02,
   "fgm": 20,
   "xfgm": 18.58,
   "fga": 48
  },
  "Mitchell Robinson": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 26,
   "xfgm": 24.73,
   "fga": 38
  },
  "Mo Bamba": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 20,
   "xfgm": 16.77,
   "fga": 27
  },
  "Mohamed Diawara": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 2.83,
   "fgm": 3,
   "xfgm": 4.16,
   "fga": 10
  },
  "Morez Johnson Jr.": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 3.13,
   "fgm": 29,
   "xfgm": 29.95,
   "fga": 56
  },
  "Moritz Wagner": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 6.66,
   "fgm": 36,
   "xfgm": 35.34,
   "fga": 65
  },
  "Moussa Cissé": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.09,
   "fga": 5
  },
  "Moussa Diabaté": {
   "gp": 9,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 33,
   "xfgm": 32.66,
   "fga": 52
  },
  "Myles Turner": {
   "gp": 10,
   "tpm": 12,
   "xtpm": 15.78,
   "fgm": 27,
   "xfgm": 33.13,
   "fga": 78
  },
  "Myron Gardner": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Naji Marshall": {
   "gp": 7,
   "tpm": 7,
   "xtpm": 8.45,
   "fgm": 35,
   "xfgm": 32.71,
   "fga": 73
  },
  "Nate Ament": {
   "gp": 8,
   "tpm": 8,
   "xtpm": 7.1,
   "fgm": 23,
   "xfgm": 23.43,
   "fga": 49
  },
  "Naz Reid": {
   "gp": 10,
   "tpm": 23,
   "xtpm": 22.82,
   "fgm": 64,
   "xfgm": 70.02,
   "fga": 154
  },
  "Neemias Queta": {
   "gp": 10,
   "tpm": 2,
   "xtpm": 1.07,
   "fgm": 36,
   "xfgm": 37.63,
   "fga": 64
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
   "xtpm": 1.04,
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
   "gp": 11,
   "tpm": 43,
   "xtpm": 39.34,
   "fgm": 79,
   "xfgm": 80.14,
   "fga": 185
  },
  "Nikola Jokić": {
   "gp": 8,
   "tpm": 8,
   "xtpm": 12.21,
   "fgm": 71,
   "xfgm": 67.95,
   "fga": 147
  },
  "Nikola Jović": {
   "gp": 7,
   "tpm": 1,
   "xtpm": 3.55,
   "fgm": 6,
   "xfgm": 9.25,
   "fga": 20
  },
  "Nikola Vučević": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 4.57,
   "fgm": 9,
   "xfgm": 9.84,
   "fga": 24
  },
  "Nique Clifford": {
   "gp": 8,
   "tpm": 1,
   "xtpm": 2.81,
   "fgm": 6,
   "xfgm": 7.07,
   "fga": 17
  },
  "Noa Essengue": {
   "gp": 8,
   "tpm": 3,
   "xtpm": 5.99,
   "fgm": 14,
   "xfgm": 18.08,
   "fga": 37
  },
  "Noah Clowney": {
   "gp": 10,
   "tpm": 6,
   "xtpm": 8.1,
   "fgm": 16,
   "xfgm": 19.56,
   "fga": 43
  },
  "Nolan Traore": {
   "gp": 10,
   "tpm": 18,
   "xtpm": 13.69,
   "fgm": 49,
   "xfgm": 43.33,
   "fga": 95
  },
  "Norchad Omier": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Norman Powell": {
   "gp": 8,
   "tpm": 17,
   "xtpm": 19.18,
   "fgm": 41,
   "xfgm": 43.89,
   "fga": 103
  },
  "OG Anunoby": {
   "gp": 9,
   "tpm": 17,
   "xtpm": 20.54,
   "fgm": 41,
   "xfgm": 51.54,
   "fga": 108
  },
  "Obi Toppin": {
   "gp": 7,
   "tpm": 14,
   "xtpm": 13.11,
   "fgm": 35,
   "xfgm": 32.52,
   "fga": 69
  },
  "Olivier-Maxence Prosper": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 1.09,
   "fgm": 6,
   "xfgm": 6.6,
   "fga": 12
  },
  "Onyeka Okongwu": {
   "gp": 11,
   "tpm": 16,
   "xtpm": 17.5,
   "fgm": 56,
   "xfgm": 54.73,
   "fga": 115
  },
  "Oscar Tshiebwe": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 5.74,
   "fga": 9
  },
  "Oso Ighodaro": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 18,
   "xfgm": 15.42,
   "fga": 27
  },
  "Ousmane Dieng": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 3.9,
   "fgm": 8,
   "xfgm": 9.19,
   "fga": 20
  },
  "P.J. Washington": {
   "gp": 10,
   "tpm": 24,
   "xtpm": 22.95,
   "fgm": 48,
   "xfgm": 50.34,
   "fga": 115
  },
  "PJ Hall": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 1.04,
   "fgm": 0,
   "xfgm": 1.04,
   "fga": 3
  },
  "Pacôme Dadiet": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 2,
   "xfgm": 2.36,
   "fga": 4
  },
  "Paolo Banchero": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 2.11,
   "fgm": 16,
   "xfgm": 10.78,
   "fga": 23
  },
  "Pascal Siakam": {
   "gp": 9,
   "tpm": 12,
   "xtpm": 14.06,
   "fgm": 76,
   "xfgm": 69.99,
   "fga": 147
  },
  "Pat Spencer": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 1,
   "xfgm": 1.13,
   "fga": 3
  },
  "Patrick Williams": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 2.79,
   "fgm": 4,
   "xfgm": 6.1,
   "fga": 13
  },
  "Paul George": {
   "gp": 9,
   "tpm": 31,
   "xtpm": 25.56,
   "fgm": 66,
   "xfgm": 60.4,
   "fga": 142
  },
  "Paul Reed": {
   "gp": 9,
   "tpm": 5,
   "xtpm": 2.83,
   "fgm": 47,
   "xfgm": 42.66,
   "fga": 82
  },
  "Payton Pritchard": {
   "gp": 10,
   "tpm": 21,
   "xtpm": 20.59,
   "fgm": 41,
   "xfgm": 41.56,
   "fga": 101
  },
  "Pelle Larsson": {
   "gp": 10,
   "tpm": 13,
   "xtpm": 10.12,
   "fgm": 32,
   "xfgm": 32.35,
   "fga": 70
  },
  "Peyton Watson": {
   "gp": 8,
   "tpm": 6,
   "xtpm": 11.74,
   "fgm": 34,
   "xfgm": 42.48,
   "fga": 87
  },
  "Precious Achiuwa": {
   "gp": 10,
   "tpm": 3,
   "xtpm": 3.18,
   "fgm": 46,
   "xfgm": 43.81,
   "fga": 86
  },
  "Quentin Grimes": {
   "gp": 11,
   "tpm": 8,
   "xtpm": 11.58,
   "fgm": 28,
   "xfgm": 30.19,
   "fga": 65
  },
  "Quenton Jackson": {
   "gp": 10,
   "tpm": 10,
   "xtpm": 10.86,
   "fgm": 35,
   "xfgm": 35.28,
   "fga": 74
  },
  "Quinten Post": {
   "gp": 7,
   "tpm": 5,
   "xtpm": 6.68,
   "fgm": 16,
   "xfgm": 15.44,
   "fga": 34
  },
  "RJ Barrett": {
   "gp": 9,
   "tpm": 14,
   "xtpm": 16.81,
   "fgm": 73,
   "xfgm": 77.23,
   "fga": 154
  },
  "Rasheer Fleming": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 1.39,
   "fgm": 0,
   "xfgm": 2.27,
   "fga": 6
  },
  "RayJ Dennis": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 1.54,
   "fga": 4
  },
  "Rayan Rupert": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.66,
   "fga": 1
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
   "gp": 7,
   "tpm": 16,
   "xtpm": 17.43,
   "fgm": 25,
   "xfgm": 26.55,
   "fga": 67
  },
  "Riley Minix": {
   "gp": 2,
   "tpm": 2,
   "xtpm": 1.76,
   "fgm": 3,
   "xfgm": 3.09,
   "fga": 7
  },
  "Robert Williams III": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 23,
   "xfgm": 22.06,
   "fga": 36
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
   "gp": 5,
   "tpm": 2,
   "xtpm": 2.16,
   "fgm": 3,
   "xfgm": 4.13,
   "fga": 10
  },
  "Ronald Holland II": {
   "gp": 9,
   "tpm": 7,
   "xtpm": 7.1,
   "fgm": 18,
   "xfgm": 20.52,
   "fga": 45
  },
  "Royce O'Neale": {
   "gp": 10,
   "tpm": 12,
   "xtpm": 15.06,
   "fgm": 15,
   "xfgm": 17.05,
   "fga": 46
  },
  "Rudy Gobert": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 1.04,
   "fgm": 28,
   "xfgm": 33.69,
   "fga": 56
  },
  "Rui Hachimura": {
   "gp": 7,
   "tpm": 15,
   "xtpm": 15.43,
   "fgm": 37,
   "xfgm": 42.86,
   "fga": 96
  },
  "Ryan Conwell": {
   "gp": 8,
   "tpm": 8,
   "xtpm": 7.01,
   "fgm": 11,
   "xfgm": 10.48,
   "fga": 28
  },
  "Ryan Dunn": {
   "gp": 8,
   "tpm": 7,
   "xtpm": 4.68,
   "fgm": 17,
   "xfgm": 16.14,
   "fga": 33
  },
  "Ryan Kalkbrenner": {
   "gp": 10,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 17,
   "xfgm": 14.13,
   "fga": 22
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
   "gp": 10,
   "tpm": 15,
   "xtpm": 15.78,
   "fgm": 40,
   "xfgm": 47.82,
   "fga": 104
  },
  "Saddiq Bey": {
   "gp": 10,
   "tpm": 18,
   "xtpm": 17.59,
   "fgm": 54,
   "xfgm": 50.98,
   "fga": 115
  },
  "Sam Hauser": {
   "gp": 10,
   "tpm": 21,
   "xtpm": 18.29,
   "fgm": 28,
   "xfgm": 23.5,
   "fga": 62
  },
  "Sam Merrill": {
   "gp": 9,
   "tpm": 14,
   "xtpm": 15.15,
   "fgm": 22,
   "xfgm": 22.83,
   "fga": 57
  },
  "Sandro Mamukelashvili": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 12.3,
   "fgm": 35,
   "xfgm": 33.84,
   "fga": 75
  },
  "Santi Aldama": {
   "gp": 2,
   "tpm": 2,
   "xtpm": 1.42,
   "fgm": 7,
   "xfgm": 5.6,
   "fga": 11
  },
  "Scoot Henderson": {
   "gp": 9,
   "tpm": 6,
   "xtpm": 12.72,
   "fgm": 23,
   "xfgm": 29.51,
   "fga": 70
  },
  "Scottie Barnes": {
   "gp": 8,
   "tpm": 4,
   "xtpm": 9.19,
   "fgm": 75,
   "xfgm": 75.96,
   "fga": 158
  },
  "Scotty Pippen Jr.": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 3.16,
   "fgm": 11,
   "xfgm": 11.06,
   "fga": 26
  },
  "Sergio de Larrea": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 1.74,
   "fgm": 9,
   "xfgm": 7.6,
   "fga": 18
  },
  "Shai Gilgeous-Alexander": {
   "gp": 10,
   "tpm": 27,
   "xtpm": 24.05,
   "fgm": 107,
   "xfgm": 102.64,
   "fga": 232
  },
  "Sidy Cissoko": {
   "gp": 9,
   "tpm": 8,
   "xtpm": 8.54,
   "fgm": 17,
   "xfgm": 15.82,
   "fga": 36
  },
  "Simone Fontecchio": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 2.09,
   "fgm": 1,
   "xfgm": 2.5,
   "fga": 7
  },
  "Sion James": {
   "gp": 10,
   "tpm": 11,
   "xtpm": 16.31,
   "fgm": 20,
   "xfgm": 25.34,
   "fga": 62
  },
  "Spencer Jones": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 1.09,
   "fgm": 5,
   "xfgm": 2.63,
   "fga": 6
  },
  "Stephen Curry": {
   "gp": 8,
   "tpm": 38,
   "xtpm": 29.71,
   "fgm": 73,
   "xfgm": 60.37,
   "fga": 147
  },
  "Stephon Castle": {
   "gp": 10,
   "tpm": 22,
   "xtpm": 23.47,
   "fgm": 58,
   "xfgm": 65.33,
   "fga": 143
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
   "gp": 10,
   "tpm": 6,
   "xtpm": 10.23,
   "fgm": 13,
   "xfgm": 20.23,
   "fga": 48
  },
  "T.J. McConnell": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 2.09,
   "fga": 5
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
   "gp": 10,
   "tpm": 8,
   "xtpm": 11.35,
   "fgm": 36,
   "xfgm": 41.21,
   "fga": 84
  },
  "Tarris Reed Jr.": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 5,
   "xfgm": 4.63,
   "fga": 8
  },
  "Taurean Prince": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 1,
   "xfgm": 1.04,
   "fga": 3
  },
  "Taylor Hendricks": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 2.11,
   "fgm": 3,
   "xfgm": 2.55,
   "fga": 7
  },
  "Terance Mann": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 2.51,
   "fgm": 1,
   "xfgm": 4.01,
   "fga": 10
  },
  "Terrence Shannon Jr": {
   "gp": 8,
   "tpm": 13,
   "xtpm": 12.65,
   "fgm": 26,
   "xfgm": 28.61,
   "fga": 66
  },
  "Thomas Bryant": {
   "gp": 5,
   "tpm": 6,
   "xtpm": 5.22,
   "fgm": 12,
   "xfgm": 11.14,
   "fga": 25
  },
  "Tidjane Salaün": {
   "gp": 9,
   "tpm": 11,
   "xtpm": 10.95,
   "fgm": 19,
   "xfgm": 18.89,
   "fga": 44
  },
  "Tim Hardaway Jr.": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 13.3,
   "fgm": 14,
   "xfgm": 20.33,
   "fga": 52
  },
  "Tobe Awaka": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 2.43,
   "fga": 4
  },
  "Tobi Lawal": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 4,
   "xfgm": 3.69,
   "fga": 7
  },
  "Tolu Smith": {
   "gp": 7,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 3.31,
   "fga": 5
  },
  "Tony Bradley": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 2.43,
   "fga": 4
  },
  "Toumani Camara": {
   "gp": 9,
   "tpm": 28,
   "xtpm": 21.93,
   "fgm": 42,
   "xfgm": 32.95,
   "fga": 81
  },
  "Trae Young": {
   "gp": 10,
   "tpm": 18,
   "xtpm": 22.01,
   "fgm": 51,
   "xfgm": 53.95,
   "fga": 128
  },
  "Trayce Jackson-Davis": {
   "gp": 8,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 10,
   "xfgm": 8.15,
   "fga": 14
  },
  "Tre Johnson": {
   "gp": 9,
   "tpm": 13,
   "xtpm": 16.48,
   "fgm": 33,
   "xfgm": 35.94,
   "fga": 89
  },
  "Tre Jones": {
   "gp": 9,
   "tpm": 3,
   "xtpm": 2.81,
   "fgm": 31,
   "xfgm": 35.14,
   "fga": 63
  },
  "Tre Mann": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 4.01,
   "fga": 7
  },
  "Trendon Watford": {
   "gp": 6,
   "tpm": 2,
   "xtpm": 2.09,
   "fgm": 12,
   "xfgm": 12.46,
   "fga": 22
  },
  "Trevon Brazile": {
   "gp": 8,
   "tpm": 7,
   "xtpm": 7.4,
   "fgm": 23,
   "xfgm": 20.86,
   "fga": 43
  },
  "Trey Lyles": {
   "gp": 11,
   "tpm": 11,
   "xtpm": 11.95,
   "fgm": 24,
   "xfgm": 21.55,
   "fga": 51
  },
  "Trey Murphy III": {
   "gp": 9,
   "tpm": 20,
   "xtpm": 18.5,
   "fgm": 47,
   "xfgm": 45.69,
   "fga": 101
  },
  "Tristan Enaruna": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.76,
   "fgm": 3,
   "xfgm": 5.08,
   "fga": 10
  },
  "Tristan da Silva": {
   "gp": 9,
   "tpm": 32,
   "xtpm": 28.13,
   "fgm": 51,
   "xfgm": 44.97,
   "fga": 112
  },
  "Ty Jerome": {
   "gp": 8,
   "tpm": 20,
   "xtpm": 19.2,
   "fgm": 74,
   "xfgm": 61.08,
   "fga": 147
  },
  "Tyler Herro": {
   "gp": 10,
   "tpm": 31,
   "xtpm": 27.27,
   "fgm": 76,
   "xfgm": 74.25,
   "fga": 167
  },
  "Tyler Kolek": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 4.2,
   "fgm": 5,
   "xfgm": 7.94,
   "fga": 19
  },
  "Tyrese Haliburton": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 9.52,
   "fgm": 32,
   "xfgm": 26.78,
   "fga": 62
  },
  "Tyrese Maxey": {
   "gp": 11,
   "tpm": 28,
   "xtpm": 28.69,
   "fgm": 101,
   "xfgm": 98.71,
   "fga": 210
  },
  "Tyrese Proctor": {
   "gp": 9,
   "tpm": 11,
   "xtpm": 7.05,
   "fgm": 19,
   "xfgm": 17.34,
   "fga": 39
  },
  "Tyus Jones": {
   "gp": 8,
   "tpm": 3,
   "xtpm": 3.48,
   "fgm": 8,
   "xfgm": 8.7,
   "fga": 20
  },
  "VJ Edgecombe": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 17.22,
   "fgm": 52,
   "xfgm": 53.91,
   "fga": 113
  },
  "Victor Wembanyama": {
   "gp": 10,
   "tpm": 19,
   "xtpm": 21.61,
   "fgm": 104,
   "xfgm": 104.16,
   "fga": 206
  },
  "Vít Krejčí": {
   "gp": 7,
   "tpm": 3,
   "xtpm": 5.25,
   "fgm": 6,
   "xfgm": 7.85,
   "fga": 20
  },
  "Walker Kessler": {
   "gp": 11,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 68,
   "xfgm": 60.89,
   "fga": 98
  },
  "Walter Clayton Jr.": {
   "gp": 9,
   "tpm": 12,
   "xtpm": 9.08,
   "fgm": 23,
   "xfgm": 19.94,
   "fga": 47
  },
  "Wendell Carter Jr.": {
   "gp": 9,
   "tpm": 11,
   "xtpm": 8.1,
   "fgm": 46,
   "xfgm": 36.42,
   "fga": 73
  },
  "Will Richard": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 7.43,
   "fgm": 19,
   "xfgm": 18.38,
   "fga": 40
  },
  "Will Riley": {
   "gp": 8,
   "tpm": 1,
   "xtpm": 2.83,
   "fgm": 6,
   "xfgm": 6.99,
   "fga": 15
  },
  "Yang Hansen": {
   "gp": 6,
   "tpm": 5,
   "xtpm": 3.13,
   "fgm": 8,
   "xfgm": 7.54,
   "fga": 17
  },
  "Yaxel Lendeborg": {
   "gp": 10,
   "tpm": 23,
   "xtpm": 19.96,
   "fgm": 71,
   "xfgm": 65.36,
   "fga": 141
  },
  "Yves Missi": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 5.51,
   "fga": 9
  },
  "Zaccharie Risacher": {
   "gp": 10,
   "tpm": 9,
   "xtpm": 12.23,
   "fgm": 29,
   "xfgm": 35.49,
   "fga": 76
  },
  "Zach Collins": {
   "gp": 6,
   "tpm": 0,
   "xtpm": 2.46,
   "fgm": 4,
   "xfgm": 7.28,
   "fga": 15
  },
  "Zach Edey": {
   "gp": 8,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 24,
   "xfgm": 25.46,
   "fga": 45
  },
  "Zach LaVine": {
   "gp": 10,
   "tpm": 25,
   "xtpm": 25.21,
   "fgm": 71,
   "xfgm": 62.93,
   "fga": 145
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
   "gp": 8,
   "tpm": 17,
   "xtpm": 12.97,
   "fgm": 31,
   "xfgm": 24.15,
   "fga": 56
  },
  "Zion Williamson": {
   "gp": 10,
   "tpm": 3,
   "xtpm": 2.44,
   "fgm": 76,
   "xfgm": 72.03,
   "fga": 121
  },
  "Zuby Ejiofor": {
   "gp": 6,
   "tpm": 4,
   "xtpm": 3.16,
   "fgm": 14,
   "xfgm": 12.65,
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
