// ============================================================
//  x3PM / xFGM der laufenden Saison aus Play-by-Play
//  Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data (nicht unser Projekt, frei veröffentlichte Daten)
//  Methode: Josh Lloyd (joshlloydfantasy.com/research/xstats-method)
//  Erzeugt von scripts/xstats-pbp.py am 2026-10-27 · Saison 2026-27 · Stand 2026-10-26
//  Wird von scripts/build-live-projections.js gelesen (3PM, FG%).
//  META {"season": "2026-27", "assetUpdated": "Tue, 27 Oct 2026 13:31:43 GMT"}
// ============================================================
const XSTATS_PBP = {
 "meta": {
  "season": "2026-27",
  "through": "2026-10-26",
  "players": 411,
  "games": 52,
  "shots": 9297,
  "assetUpdated": "Tue, 27 Oct 2026 13:31:43 GMT",
  "zoneRates": {
   "C3": 0.3744,
   "AB3": 0.3476,
   "RA": 0.67,
   "PAINT": 0.4403,
   "MID": 0.4076
  },
  "source": "Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data"
 },
 "players": {
  "AJ Green": {
   "gp": 4,
   "tpm": 9,
   "xtpm": 7.06,
   "fgm": 11,
   "xfgm": 8.61,
   "fga": 23
  },
  "Aaron Gordon": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 4.2,
   "fgm": 10,
   "xfgm": 12.59,
   "fga": 28
  },
  "Aaron Nesmith": {
   "gp": 3,
   "tpm": 6,
   "xtpm": 5.99,
   "fgm": 12,
   "xfgm": 11.72,
   "fga": 28
  },
  "Aaron Wiggins": {
   "gp": 4,
   "tpm": 12,
   "xtpm": 8.77,
   "fgm": 23,
   "xfgm": 17.81,
   "fga": 43
  },
  "Ace Bailey": {
   "gp": 4,
   "tpm": 7,
   "xtpm": 6.74,
   "fgm": 21,
   "xfgm": 18.87,
   "fga": 40
  },
  "Aday Mara": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 9,
   "xfgm": 9.8,
   "fga": 16
  },
  "Adem Bona": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 4,
   "xfgm": 5.16,
   "fga": 9
  },
  "Ajay Mitchell": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 3.5,
   "fgm": 25,
   "xfgm": 25.79,
   "fga": 49
  },
  "Al Horford": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 3.16,
   "fgm": 5,
   "xfgm": 4.0,
   "fga": 11
  },
  "Alex Caruso": {
   "gp": 4,
   "tpm": 8,
   "xtpm": 5.62,
   "fgm": 13,
   "xfgm": 9.85,
   "fga": 23
  },
  "Alex Karaban": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Alex Morales": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.67,
   "fga": 1
  },
  "Alex Sarr": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 2.81,
   "fgm": 14,
   "xfgm": 13.16,
   "fga": 26
  },
  "Alijah Martin": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 1.69,
   "fga": 3
  },
  "Allen Graves": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 1.82,
   "fgm": 8,
   "xfgm": 6.69,
   "fga": 13
  },
  "Alperen Sengun": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 3.13,
   "fgm": 36,
   "xfgm": 33.45,
   "fga": 62
  },
  "Alpha Diallo": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 2,
   "xfgm": 2.06,
   "fga": 4
  },
  "Amen Thompson": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 1.39,
   "fgm": 25,
   "xfgm": 26.46,
   "fga": 47
  },
  "Andre Drummond": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 11.37,
   "fga": 18
  },
  "Andrew Nembhard": {
   "gp": 3,
   "tpm": 5,
   "xtpm": 3.88,
   "fgm": 16,
   "xfgm": 13.08,
   "fga": 29
  },
  "Andrew Wiggins": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 5.7,
   "fgm": 16,
   "xfgm": 17.74,
   "fga": 40
  },
  "Anfernee Simons": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 7.33,
   "fgm": 8,
   "xfgm": 13.07,
   "fga": 31
  },
  "Anthony Black": {
   "gp": 1,
   "tpm": 5,
   "xtpm": 2.43,
   "fgm": 6,
   "xfgm": 4.42,
   "fga": 11
  },
  "Anthony Davis": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 4.2,
   "fgm": 33,
   "xfgm": 38.24,
   "fga": 75
  },
  "Anthony Edwards": {
   "gp": 4,
   "tpm": 18,
   "xtpm": 15.75,
   "fgm": 50,
   "xfgm": 46.62,
   "fga": 104
  },
  "Anthony Gill": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Asa Newell": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 1,
   "xfgm": 0.7,
   "fga": 2
  },
  "Ausar Thompson": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 6,
   "xfgm": 5.74,
   "fga": 13
  },
  "Austin Reaves": {
   "gp": 3,
   "tpm": 8,
   "xtpm": 4.55,
   "fgm": 23,
   "xfgm": 16.28,
   "fga": 36
  },
  "Ayo Dosunmu": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 3.16,
   "fgm": 20,
   "xfgm": 20.39,
   "fga": 41
  },
  "Baba Miller": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.34,
   "fga": 2
  },
  "Bam Adebayo": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 6.36,
   "fgm": 18,
   "xfgm": 21.11,
   "fga": 45
  },
  "Baylor Scheierman": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.49,
   "fgm": 5,
   "xfgm": 5.52,
   "fga": 13
  },
  "Ben Saraf": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.67,
   "fga": 1
  },
  "Ben Sheppard": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 1,
   "xfgm": 1.37,
   "fga": 3
  },
  "Bennedict Mathurin": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 3.16,
   "fgm": 9,
   "xfgm": 10.24,
   "fga": 21
  },
  "Bennett Stirtz": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 2.09,
   "fgm": 2,
   "xfgm": 4.31,
   "fga": 10
  },
  "Bilal Coulibaly": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 3.93,
   "fgm": 11,
   "xfgm": 12.13,
   "fga": 25
  },
  "Bobby Portis Jr.": {
   "gp": 4,
   "tpm": 9,
   "xtpm": 6.68,
   "fgm": 14,
   "xfgm": 15.48,
   "fga": 36
  },
  "Bogdan Bogdanović": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 3.58,
   "fgm": 9,
   "xfgm": 6.19,
   "fga": 16
  },
  "Bones Hyland": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.78,
   "fgm": 2,
   "xfgm": 3.89,
   "fga": 10
  },
  "Braden Smith": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Brandin Podziemski": {
   "gp": 2,
   "tpm": 5,
   "xtpm": 5.27,
   "fgm": 14,
   "xfgm": 13.82,
   "fga": 31
  },
  "Brandon Miller": {
   "gp": 4,
   "tpm": 12,
   "xtpm": 15.72,
   "fgm": 34,
   "xfgm": 39.47,
   "fga": 92
  },
  "Brandon Williams": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 3.82,
   "fgm": 11,
   "xfgm": 15.22,
   "fga": 33
  },
  "Brayden Burries": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 3.82,
   "fgm": 9,
   "xfgm": 9.11,
   "fga": 21
  },
  "Brice Sensabaugh": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 4.89,
   "fgm": 11,
   "xfgm": 9.28,
   "fga": 23
  },
  "Bronny James": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.44,
   "fga": 1
  },
  "Brook Lopez": {
   "gp": 3,
   "tpm": 6,
   "xtpm": 3.82,
   "fgm": 20,
   "xfgm": 15.09,
   "fga": 31
  },
  "Brooks Barnhizer": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Bruce Thornton": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 0,
   "xfgm": 0.7,
   "fga": 2
  },
  "Bryce Hopkins": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 1.42,
   "fgm": 6,
   "xfgm": 5.58,
   "fga": 11
  },
  "Bub Carrington": {
   "gp": 4,
   "tpm": 8,
   "xtpm": 5.96,
   "fgm": 9,
   "xfgm": 8.8,
   "fga": 23
  },
  "Buddy Hield": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 4.17,
   "fgm": 10,
   "xfgm": 8.63,
   "fga": 19
  },
  "CJ McCollum": {
   "gp": 4,
   "tpm": 11,
   "xtpm": 8.72,
   "fgm": 26,
   "xfgm": 20.99,
   "fga": 49
  },
  "Cade Cunningham": {
   "gp": 3,
   "tpm": 6,
   "xtpm": 5.94,
   "fgm": 22,
   "xfgm": 19.64,
   "fga": 45
  },
  "Caleb Love": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Caleb Wilson": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 9.92,
   "fgm": 31,
   "xfgm": 36.18,
   "fga": 74
  },
  "Cam Christie": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Cam Spencer": {
   "gp": 4,
   "tpm": 9,
   "xtpm": 5.24,
   "fgm": 13,
   "xfgm": 10.01,
   "fga": 25
  },
  "Cam Whitmore": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 4,
   "xfgm": 3.82,
   "fga": 7
  },
  "Cameron Boozer": {
   "gp": 4,
   "tpm": 7,
   "xtpm": 9.04,
   "fgm": 18,
   "xfgm": 25.99,
   "fga": 61
  },
  "Cameron Johnson": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 1.43,
   "fga": 3
  },
  "Carter Bryant": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.76,
   "fgm": 2,
   "xfgm": 3.1,
   "fga": 7
  },
  "Cason Wallace": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.53,
   "fgm": 8,
   "xfgm": 9.31,
   "fga": 20
  },
  "Cedric Coward": {
   "gp": 3,
   "tpm": 8,
   "xtpm": 3.82,
   "fgm": 15,
   "xfgm": 12.64,
   "fga": 29
  },
  "Chaney Johnson": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.57,
   "fgm": 6,
   "xfgm": 9.21,
   "fga": 18
  },
  "Charles Bassey": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 2.89,
   "fga": 5
  },
  "Chet Holmgren": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.11,
   "fgm": 11,
   "xfgm": 14.77,
   "fga": 27
  },
  "Chris Cenac Jr.": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.72,
   "fgm": 1,
   "xfgm": 0.72,
   "fga": 2
  },
  "Chris Mañon": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.69,
   "fga": 3
  },
  "Christian Anderson": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 3.13,
   "fgm": 2,
   "xfgm": 5.12,
   "fga": 13
  },
  "Christian Braun": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 4.65,
   "fgm": 14,
   "xfgm": 14.37,
   "fga": 30
  },
  "Clint Capela": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.11,
   "fga": 2
  },
  "Cody Williams": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.35,
   "fga": 1
  },
  "Colin Castleton": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 2.01,
   "fga": 3
  },
  "Collin Gillespie": {
   "gp": 3,
   "tpm": 5,
   "xtpm": 7.35,
   "fgm": 7,
   "xfgm": 9.36,
   "fga": 24
  },
  "Collin Murray-Boyles": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 6,
   "xfgm": 8.2,
   "fga": 16
  },
  "Collin Sexton": {
   "gp": 2,
   "tpm": 2,
   "xtpm": 2.78,
   "fgm": 7,
   "xfgm": 7.43,
   "fga": 17
  },
  "Cooper Flagg": {
   "gp": 3,
   "tpm": 5,
   "xtpm": 4.87,
   "fgm": 26,
   "xfgm": 20.89,
   "fga": 46
  },
  "Corey Kispert": {
   "gp": 2,
   "tpm": 4,
   "xtpm": 1.74,
   "fgm": 6,
   "xfgm": 2.62,
   "fga": 7
  },
  "Craig Porter Jr.": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 0.79,
   "fga": 2
  },
  "DaRon Holmes II": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 1,
   "xfgm": 1.04,
   "fga": 3
  },
  "Daeqwon Plowden": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 1.74,
   "fgm": 4,
   "xfgm": 3.75,
   "fga": 8
  },
  "Dailyn Swain": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.46,
   "fga": 3
  },
  "Damian Lillard": {
   "gp": 2,
   "tpm": 8,
   "xtpm": 6.98,
   "fgm": 14,
   "xfgm": 11.81,
   "fga": 30
  },
  "Daniel Gafford": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 12,
   "xfgm": 11.12,
   "fga": 19
  },
  "Daniss Jenkins": {
   "gp": 3,
   "tpm": 5,
   "xtpm": 2.43,
   "fgm": 12,
   "xfgm": 10.09,
   "fga": 22
  },
  "Danny Wolf": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.42,
   "fgm": 2,
   "xfgm": 1.42,
   "fga": 4
  },
  "Darius Acuff Jr.": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 9.41,
   "fgm": 24,
   "xfgm": 31.18,
   "fga": 73
  },
  "Darius Garland": {
   "gp": 3,
   "tpm": 9,
   "xtpm": 9.04,
   "fgm": 27,
   "xfgm": 23.32,
   "fga": 55
  },
  "Darryn Peterson": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 4.2,
   "fgm": 18,
   "xfgm": 22.44,
   "fga": 50
  },
  "David Jones Garcia": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.67,
   "fga": 1
  },
  "Davion Mitchell": {
   "gp": 4,
   "tpm": 9,
   "xtpm": 7.01,
   "fgm": 27,
   "xfgm": 23.59,
   "fga": 50
  },
  "Day'Ron Sharpe": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 1.04,
   "fgm": 10,
   "xfgm": 10.84,
   "fga": 19
  },
  "De'Aaron Fox": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 3.88,
   "fgm": 18,
   "xfgm": 14.03,
   "fga": 31
  },
  "De'Andre Hunter": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 2.81,
   "fgm": 6,
   "xfgm": 6.49,
   "fga": 16
  },
  "De'Anthony Melton": {
   "gp": 4,
   "tpm": 7,
   "xtpm": 6.28,
   "fgm": 13,
   "xfgm": 11.62,
   "fga": 27
  },
  "DeAndre Jordan": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 2.01,
   "fga": 3
  },
  "DeMar DeRozan": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.86,
   "fgm": 16,
   "xfgm": 14.64,
   "fga": 34
  },
  "Dean Wade": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 2.14,
   "fgm": 4,
   "xfgm": 2.81,
   "fga": 7
  },
  "Deandre Ayton": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 10,
   "xfgm": 8.46,
   "fga": 14
  },
  "Dejounte Murray": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 4.65,
   "fgm": 25,
   "xfgm": 25.72,
   "fga": 51
  },
  "Deni Avdija": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 3.13,
   "fgm": 15,
   "xfgm": 15.03,
   "fga": 32
  },
  "Dennis Schröder": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 5.96,
   "fgm": 20,
   "xfgm": 25.1,
   "fga": 51
  },
  "Derik Queen": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 1.07,
   "fgm": 12,
   "xfgm": 11.88,
   "fga": 23
  },
  "Derrick Jones Jr.": {
   "gp": 3,
   "tpm": 7,
   "xtpm": 4.57,
   "fgm": 13,
   "xfgm": 10.32,
   "fga": 23
  },
  "Derrick White": {
   "gp": 3,
   "tpm": 6,
   "xtpm": 5.27,
   "fgm": 14,
   "xfgm": 11.88,
   "fga": 28
  },
  "Desmond Bane": {
   "gp": 3,
   "tpm": 8,
   "xtpm": 9.87,
   "fgm": 13,
   "xfgm": 16.19,
   "fga": 39
  },
  "Devin Booker": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 3.16,
   "fgm": 25,
   "xfgm": 20.65,
   "fga": 45
  },
  "Devin Vassell": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 4.57,
   "fgm": 10,
   "xfgm": 10.95,
   "fga": 26
  },
  "Dillon Brooks": {
   "gp": 3,
   "tpm": 5,
   "xtpm": 5.21,
   "fgm": 14,
   "xfgm": 16.87,
   "fga": 37
  },
  "Domantas Sabonis": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 21,
   "xfgm": 12.93,
   "fga": 26
  },
  "Donovan Clingan": {
   "gp": 2,
   "tpm": 2,
   "xtpm": 1.39,
   "fgm": 7,
   "xfgm": 6.94,
   "fga": 14
  },
  "Donovan Mitchell": {
   "gp": 3,
   "tpm": 9,
   "xtpm": 6.6,
   "fgm": 28,
   "xfgm": 25.47,
   "fga": 55
  },
  "Dorian Finney-Smith": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 0.72,
   "fgm": 1,
   "xfgm": 0.72,
   "fga": 2
  },
  "Drake Powell": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Draymond Green": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 1.76,
   "fgm": 4,
   "xfgm": 4.43,
   "fga": 10
  },
  "Dru Smith": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 1.04,
   "fgm": 3,
   "xfgm": 1.48,
   "fga": 4
  },
  "Duncan Robinson": {
   "gp": 3,
   "tpm": 15,
   "xtpm": 9.76,
   "fgm": 16,
   "xfgm": 12.6,
   "fga": 34
  },
  "Duop Reath": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 1.39,
   "fgm": 3,
   "xfgm": 2.06,
   "fga": 5
  },
  "Dylan Harper": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 4.92,
   "fgm": 24,
   "xfgm": 24.97,
   "fga": 50
  },
  "Dyson Daniels": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.74,
   "fgm": 23,
   "xfgm": 22.62,
   "fga": 42
  },
  "Ebuka Okorie": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Egor Dëmin": {
   "gp": 3,
   "tpm": 6,
   "xtpm": 6.6,
   "fgm": 8,
   "xfgm": 10.57,
   "fga": 26
  },
  "Emanuel Sharp": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 2.81,
   "fgm": 6,
   "xfgm": 5.65,
   "fga": 14
  },
  "Evan Mobley": {
   "gp": 3,
   "tpm": 7,
   "xtpm": 4.2,
   "fgm": 20,
   "xfgm": 18.13,
   "fga": 37
  },
  "Felix Okpara": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Franz Wagner": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 6.07,
   "fgm": 25,
   "xfgm": 28.7,
   "fga": 57
  },
  "Fred VanVleet": {
   "gp": 3,
   "tpm": 5,
   "xtpm": 5.91,
   "fgm": 8,
   "xfgm": 10.02,
   "fga": 25
  },
  "GG Jackson": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 3.13,
   "fgm": 7,
   "xfgm": 9.54,
   "fga": 22
  },
  "Gary Payton II": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 3.48,
   "fgm": 12,
   "xfgm": 12.15,
   "fga": 25
  },
  "Georges Niang": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 6.42,
   "fgm": 10,
   "xfgm": 11.95,
   "fga": 29
  },
  "Giannis Antetokounmpo": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 3.48,
   "fgm": 44,
   "xfgm": 42.26,
   "fga": 79
  },
  "Goga Bitadze": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 3.35,
   "fga": 5
  },
  "Gradey Dick": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 2.11,
   "fgm": 8,
   "xfgm": 6.75,
   "fga": 14
  },
  "Graham Ike": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 1.39,
   "fgm": 12,
   "xfgm": 13.15,
   "fga": 24
  },
  "Grayson Allen": {
   "gp": 4,
   "tpm": 14,
   "xtpm": 10.08,
   "fgm": 18,
   "xfgm": 14.06,
   "fga": 37
  },
  "Gui Santos": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 2.81,
   "fgm": 12,
   "xfgm": 11.94,
   "fga": 23
  },
  "Hannes Steinbach": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 3.12,
   "fga": 5
  },
  "Harrison Barnes": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 1.44,
   "fgm": 1,
   "xfgm": 1.44,
   "fga": 4
  },
  "Herbert Jones": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 1.79,
   "fgm": 4,
   "xfgm": 4.24,
   "fga": 9
  },
  "Hugo González": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 1.76,
   "fgm": 4,
   "xfgm": 3.77,
   "fga": 8
  },
  "Immanuel Quickley": {
   "gp": 3,
   "tpm": 7,
   "xtpm": 8.05,
   "fgm": 18,
   "xfgm": 17.68,
   "fga": 43
  },
  "Isaac Okoro": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 2.57,
   "fgm": 4,
   "xfgm": 5.25,
   "fga": 11
  },
  "Isaiah Collier": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 2.43,
   "fgm": 9,
   "xfgm": 12.81,
   "fga": 27
  },
  "Isaiah Crawford": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 0.72,
   "fgm": 1,
   "xfgm": 0.72,
   "fga": 2
  },
  "Isaiah Evans": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 0,
   "xfgm": 0.72,
   "fga": 2
  },
  "Isaiah Hartenstein": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 16,
   "xfgm": 17.11,
   "fga": 30
  },
  "Isaiah Jackson": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 14,
   "xfgm": 12.43,
   "fga": 21
  },
  "Isaiah Joe": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 4.52,
   "fgm": 7,
   "xfgm": 7.29,
   "fga": 19
  },
  "Isaiah Stewart": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 1.39,
   "fgm": 8,
   "xfgm": 7.38,
   "fga": 15
  },
  "Ivica Zubac": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 12,
   "xfgm": 12.25,
   "fga": 20
  },
  "Ja Morant": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 2.78,
   "fgm": 11,
   "xfgm": 8.96,
   "fga": 21
  },
  "Ja'Kobe Walter": {
   "gp": 3,
   "tpm": 8,
   "xtpm": 7.03,
   "fgm": 13,
   "xfgm": 11.18,
   "fga": 28
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
   "gp": 4,
   "tpm": 9,
   "xtpm": 7.7,
   "fgm": 24,
   "xfgm": 22.02,
   "fga": 47
  },
  "Jabari Walker": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 2.68,
   "fga": 4
  },
  "Jaden Akins": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Jaden Bradley": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 1.11,
   "fga": 2
  },
  "Jaden Hardy": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 1,
   "xfgm": 1.1,
   "fga": 3
  },
  "Jaden McDaniels": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 4.97,
   "fgm": 26,
   "xfgm": 20.68,
   "fga": 44
  },
  "Jae'Sean Tate": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.41,
   "fga": 1
  },
  "Jaime Jaquez Jr.": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 4.6,
   "fgm": 26,
   "xfgm": 24.75,
   "fga": 49
  },
  "Jake LaRavia": {
   "gp": 2,
   "tpm": 2,
   "xtpm": 1.79,
   "fgm": 4,
   "xfgm": 3.8,
   "fga": 8
  },
  "Jakob Poeltl": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 3.33,
   "fga": 6
  },
  "Jalen Brunson": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 5.21,
   "fgm": 25,
   "xfgm": 29.55,
   "fga": 64
  },
  "Jalen Duren": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 10,
   "xfgm": 9.32,
   "fga": 17
  },
  "Jalen Green": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 4.2,
   "fgm": 17,
   "xfgm": 17.64,
   "fga": 35
  },
  "Jalen Johnson": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 6.63,
   "fgm": 29,
   "xfgm": 33.59,
   "fga": 68
  },
  "Jalen Pickett": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 0.35,
   "fga": 1
  },
  "Jalen Slawson": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 1.75,
   "fga": 3
  },
  "Jalen Smith": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 7.03,
   "fgm": 18,
   "xfgm": 18.81,
   "fga": 39
  },
  "Jalen Suggs": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 3.24,
   "fgm": 10,
   "xfgm": 13.31,
   "fga": 28
  },
  "Jalen Williams": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.13,
   "fgm": 15,
   "xfgm": 19.26,
   "fga": 39
  },
  "Jamal Cain": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 2.43,
   "fgm": 1,
   "xfgm": 2.87,
   "fga": 8
  },
  "Jamal Murray": {
   "gp": 3,
   "tpm": 11,
   "xtpm": 8.02,
   "fgm": 22,
   "xfgm": 21.54,
   "fga": 49
  },
  "Jamal Shead": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.39,
   "fgm": 3,
   "xfgm": 6.9,
   "fga": 13
  },
  "Jamaree Bouyea": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 0.85,
   "fga": 2
  },
  "James Harden": {
   "gp": 3,
   "tpm": 7,
   "xtpm": 7.3,
   "fgm": 13,
   "xfgm": 15.69,
   "fga": 37
  },
  "James Wiseman": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 2.63,
   "fga": 5
  },
  "Jamison Battle": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 3.18,
   "fgm": 6,
   "xfgm": 5.86,
   "fga": 13
  },
  "Jarace Walker": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 4.6,
   "fgm": 8,
   "xfgm": 12.77,
   "fga": 27
  },
  "Jared McCain": {
   "gp": 4,
   "tpm": 11,
   "xtpm": 8.05,
   "fgm": 15,
   "xfgm": 15.98,
   "fga": 37
  },
  "Jaren Jackson Jr.": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 4.92,
   "fgm": 22,
   "xfgm": 20.2,
   "fga": 44
  },
  "Jarrett Allen": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 16,
   "xfgm": 14.33,
   "fga": 25
  },
  "Jase Richardson": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 2.43,
   "fgm": 5,
   "xfgm": 7.33,
   "fga": 15
  },
  "Javonte Green": {
   "gp": 3,
   "tpm": 6,
   "xtpm": 4.63,
   "fgm": 7,
   "xfgm": 6.14,
   "fga": 16
  },
  "Jaxson Hayes": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 13,
   "xfgm": 9.02,
   "fga": 16
  },
  "Jay Huff": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.43,
   "fgm": 8,
   "xfgm": 7.79,
   "fga": 15
  },
  "Jaylen Brown": {
   "gp": 4,
   "tpm": 8,
   "xtpm": 6.66,
   "fgm": 31,
   "xfgm": 36.57,
   "fga": 73
  },
  "Jaylen Clark": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.23,
   "fga": 3
  },
  "Jaylen Wells": {
   "gp": 4,
   "tpm": 9,
   "xtpm": 6.28,
   "fgm": 21,
   "xfgm": 15.54,
   "fga": 35
  },
  "Jaylin Sellers": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 2.46,
   "fgm": 1,
   "xfgm": 3.8,
   "fga": 9
  },
  "Jaylin Williams": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 4.97,
   "fgm": 4,
   "xfgm": 6.31,
   "fga": 16
  },
  "Jaylon Tyson": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 5.29,
   "fgm": 12,
   "xfgm": 12.58,
   "fga": 27
  },
  "Jayson Kent": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 0,
   "xfgm": 1.81,
   "fga": 4
  },
  "Jayson Tatum": {
   "gp": 3,
   "tpm": 5,
   "xtpm": 7.73,
   "fgm": 27,
   "xfgm": 30.06,
   "fga": 66
  },
  "Jerami Grant": {
   "gp": 4,
   "tpm": 7,
   "xtpm": 6.34,
   "fgm": 12,
   "xfgm": 13.62,
   "fga": 32
  },
  "Jeremiah Fears": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 3.85,
   "fgm": 9,
   "xfgm": 14.2,
   "fga": 31
  },
  "Jericho Sims": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Jett Howard": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.72,
   "fgm": 2,
   "xfgm": 1.16,
   "fga": 3
  },
  "Jevon Carter": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.79,
   "fga": 2
  },
  "Joan Beringer": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 12,
   "xfgm": 12.5,
   "fga": 19
  },
  "Jock Landale": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 3.88,
   "fgm": 11,
   "xfgm": 13.01,
   "fga": 26
  },
  "Joel Embiid": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 4.87,
   "fgm": 20,
   "xfgm": 23.65,
   "fga": 51
  },
  "John Collins": {
   "gp": 3,
   "tpm": 7,
   "xtpm": 4.97,
   "fgm": 19,
   "xfgm": 18.22,
   "fga": 37
  },
  "Jonathan Kuminga": {
   "gp": 4,
   "tpm": 7,
   "xtpm": 5.37,
   "fgm": 16,
   "xfgm": 15.99,
   "fga": 35
  },
  "Jonathan Mogbo": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 1.9,
   "fga": 4
  },
  "Jordan Clarkson": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 2.34,
   "fga": 5
  },
  "Jordan Goodwin": {
   "gp": 3,
   "tpm": 6,
   "xtpm": 5.59,
   "fgm": 9,
   "xfgm": 8.48,
   "fga": 21
  },
  "Jordan Hawkins": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 2,
   "xfgm": 1.19,
   "fga": 3
  },
  "Jordan McLaughlin": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 1.11,
   "fga": 2
  },
  "Jordan Poole": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 4.55,
   "fgm": 3,
   "xfgm": 6.91,
   "fga": 18
  },
  "Jordan Walsh": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 1.79,
   "fgm": 4,
   "xfgm": 6.22,
   "fga": 12
  },
  "Jose Alvarado": {
   "gp": 2,
   "tpm": 2,
   "xtpm": 1.39,
   "fgm": 4,
   "xfgm": 4.28,
   "fga": 9
  },
  "Josh Dix": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 0,
   "xfgm": 1.37,
   "fga": 3
  },
  "Josh Giddey": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 4.55,
   "fgm": 11,
   "xfgm": 16.57,
   "fga": 33
  },
  "Josh Green": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 1.1,
   "fgm": 2,
   "xfgm": 1.77,
   "fga": 4
  },
  "Josh Hart": {
   "gp": 3,
   "tpm": 7,
   "xtpm": 7.38,
   "fgm": 14,
   "xfgm": 14.94,
   "fga": 34
  },
  "Josh Minott": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 4.2,
   "fgm": 6,
   "xfgm": 6.65,
   "fga": 16
  },
  "Josh Okogie": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.42,
   "fgm": 1,
   "xfgm": 2.97,
   "fga": 7
  },
  "Joshua Jefferson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 0,
   "xfgm": 1.83,
   "fga": 4
  },
  "Jrue Holiday": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 4.2,
   "fgm": 6,
   "xfgm": 6.42,
   "fga": 16
  },
  "Julian Champagnie": {
   "gp": 3,
   "tpm": 7,
   "xtpm": 6.31,
   "fgm": 9,
   "xfgm": 8.09,
   "fga": 21
  },
  "Julius Randle": {
   "gp": 3,
   "tpm": 5,
   "xtpm": 3.85,
   "fgm": 20,
   "xfgm": 17.92,
   "fga": 39
  },
  "Justin Champagnie": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.46,
   "fgm": 12,
   "xfgm": 10.94,
   "fga": 20
  },
  "Justin Edwards": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Karl-Anthony Towns": {
   "gp": 3,
   "tpm": 5,
   "xtpm": 3.82,
   "fgm": 23,
   "xfgm": 19.54,
   "fga": 37
  },
  "Karlo Matković": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 4,
   "xfgm": 2.36,
   "fga": 4
  },
  "Kasparas Jakučionis": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 3.88,
   "fgm": 12,
   "xfgm": 11.46,
   "fga": 23
  },
  "Kawhi Leonard": {
   "gp": 2,
   "tpm": 4,
   "xtpm": 4.87,
   "fgm": 12,
   "xfgm": 17.26,
   "fga": 37
  },
  "Keaton Wagler": {
   "gp": 3,
   "tpm": 6,
   "xtpm": 5.27,
   "fgm": 8,
   "xfgm": 8.92,
   "fga": 23
  },
  "Keegan Murray": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 2.49,
   "fgm": 5,
   "xfgm": 7.12,
   "fga": 17
  },
  "Kel'el Ware": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 4.17,
   "fgm": 21,
   "xfgm": 20.46,
   "fga": 37
  },
  "Keldon Johnson": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 11,
   "xfgm": 10.59,
   "fga": 20
  },
  "Kelly Oubre Jr.": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 5.7,
   "fgm": 12,
   "xfgm": 14.3,
   "fga": 31
  },
  "Kenrich Williams": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 2.11,
   "fgm": 4,
   "xfgm": 4.79,
   "fga": 10
  },
  "Kentavious Caldwell-Pope": {
   "gp": 4,
   "tpm": 8,
   "xtpm": 5.99,
   "fgm": 11,
   "xfgm": 9.97,
   "fga": 25
  },
  "Keon Ellis": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 3.48,
   "fgm": 9,
   "xfgm": 8.11,
   "fga": 18
  },
  "Kevin Durant": {
   "gp": 4,
   "tpm": 8,
   "xtpm": 6.02,
   "fgm": 29,
   "xfgm": 23.85,
   "fga": 54
  },
  "Kevin Huerter": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 4.22,
   "fgm": 7,
   "xfgm": 7.91,
   "fga": 20
  },
  "Kevon Looney": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 3.53,
   "fga": 6
  },
  "Keyonte George": {
   "gp": 4,
   "tpm": 9,
   "xtpm": 7.65,
   "fgm": 29,
   "xfgm": 22.26,
   "fga": 54
  },
  "Khaman Maluach": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 1.07,
   "fgm": 8,
   "xfgm": 9.11,
   "fga": 15
  },
  "Khris Middleton": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 2.65,
   "fga": 6
  },
  "Kingston Flemings": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.74,
   "fgm": 6,
   "xfgm": 8.77,
   "fga": 18
  },
  "Klay Thompson": {
   "gp": 4,
   "tpm": 11,
   "xtpm": 11.61,
   "fgm": 12,
   "xfgm": 13.24,
   "fga": 37
  },
  "Koa Peat": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 2.45,
   "fga": 4
  },
  "Kobe Brown": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.35,
   "fga": 1
  },
  "Kobe Sanders": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.16,
   "fgm": 7,
   "xfgm": 8.44,
   "fga": 19
  },
  "Kris Dunn": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 3.5,
   "fgm": 11,
   "xfgm": 8.4,
   "fga": 18
  },
  "Kris Murray": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 0,
   "xfgm": 0.72,
   "fga": 2
  },
  "Kyle Anderson": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.88,
   "fga": 2
  },
  "Kyle Filipowski": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 1,
   "xfgm": 2.71,
   "fga": 6
  },
  "Kyle Kuzma": {
   "gp": 4,
   "tpm": 7,
   "xtpm": 6.34,
   "fgm": 20,
   "xfgm": 20.28,
   "fga": 42
  },
  "Kyrie Irving": {
   "gp": 3,
   "tpm": 8,
   "xtpm": 8.74,
   "fgm": 21,
   "xfgm": 16.58,
   "fga": 41
  },
  "Kyshawn George": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 5.96,
   "fgm": 26,
   "xfgm": 27.01,
   "fga": 54
  },
  "LJ Cryer": {
   "gp": 3,
   "tpm": 5,
   "xtpm": 3.13,
   "fgm": 6,
   "xfgm": 5.49,
   "fga": 14
  },
  "LaMelo Ball": {
   "gp": 4,
   "tpm": 12,
   "xtpm": 11.23,
   "fgm": 21,
   "xfgm": 19.83,
   "fga": 49
  },
  "Labaron Philon Jr.": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 2,
   "xfgm": 1.92,
   "fga": 5
  },
  "Landry Shamet": {
   "gp": 3,
   "tpm": 5,
   "xtpm": 5.0,
   "fgm": 7,
   "xfgm": 7.63,
   "fga": 19
  },
  "Larry Nance Jr.": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 2.49,
   "fgm": 3,
   "xfgm": 4.5,
   "fga": 10
  },
  "Lauri Markkanen": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 9.76,
   "fgm": 19,
   "xfgm": 20.34,
   "fga": 48
  },
  "LeBron James": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 3.48,
   "fgm": 18,
   "xfgm": 23.24,
   "fga": 42
  },
  "Leaky Black": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Leonard Miller": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 5.59,
   "fgm": 16,
   "xfgm": 18.06,
   "fga": 35
  },
  "Liam McNeeley": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 1.07,
   "fgm": 0,
   "xfgm": 2.15,
   "fga": 5
  },
  "Luguentz Dort": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 5.91,
   "fgm": 11,
   "xfgm": 13.49,
   "fga": 29
  },
  "Luka Dončić": {
   "gp": 3,
   "tpm": 15,
   "xtpm": 13.21,
   "fgm": 32,
   "xfgm": 27.45,
   "fga": 69
  },
  "Luka Garza": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 1.76,
   "fgm": 5,
   "xfgm": 4.44,
   "fga": 9
  },
  "Luke Kennard": {
   "gp": 2,
   "tpm": 6,
   "xtpm": 3.5,
   "fgm": 7,
   "xfgm": 3.91,
   "fga": 11
  },
  "Luke Kornet": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 4.46,
   "fga": 7
  },
  "Malevy Leons": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 3.01,
   "fga": 6
  },
  "Malik Monk": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 1.39,
   "fgm": 3,
   "xfgm": 5.96,
   "fga": 14
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
   "gp": 4,
   "tpm": 8,
   "xtpm": 5.7,
   "fgm": 13,
   "xfgm": 9.79,
   "fga": 25
  },
  "Marcus Smart": {
   "gp": 2,
   "tpm": 2,
   "xtpm": 2.81,
   "fgm": 5,
   "xfgm": 5.03,
   "fga": 12
  },
  "Mario Hezonja": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.48,
   "fgm": 9,
   "xfgm": 10.81,
   "fga": 23
  },
  "Marvin Bagley III": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 5,
   "xfgm": 4.41,
   "fga": 8
  },
  "Matas Buzelis": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 6.66,
   "fgm": 14,
   "xfgm": 16.41,
   "fga": 36
  },
  "Matisse Thybulle": {
   "gp": 3,
   "tpm": 7,
   "xtpm": 5.4,
   "fgm": 10,
   "xfgm": 8.52,
   "fga": 20
  },
  "Max Christie": {
   "gp": 4,
   "tpm": 7,
   "xtpm": 8.08,
   "fgm": 14,
   "xfgm": 15.58,
   "fga": 37
  },
  "Meleek Thomas": {
   "gp": 1,
   "tpm": 4,
   "xtpm": 1.76,
   "fgm": 6,
   "xfgm": 4.39,
   "fga": 10
  },
  "Micah Potter": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 1.23,
   "fga": 3
  },
  "Michael Porter Jr.": {
   "gp": 3,
   "tpm": 9,
   "xtpm": 8.72,
   "fgm": 24,
   "xfgm": 23.43,
   "fga": 52
  },
  "Mikal Bridges": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 3.5,
   "fgm": 5,
   "xfgm": 10.34,
   "fga": 23
  },
  "Mike Conley": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 0.72,
   "fgm": 2,
   "xfgm": 0.72,
   "fga": 2
  },
  "Mikel Brown Jr.": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 3.16,
   "fgm": 5,
   "xfgm": 8.04,
   "fga": 18
  },
  "Miles Bridges": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 7.03,
   "fgm": 16,
   "xfgm": 18.38,
   "fga": 39
  },
  "Miles McBride": {
   "gp": 3,
   "tpm": 7,
   "xtpm": 4.25,
   "fgm": 7,
   "xfgm": 5.47,
   "fga": 15
  },
  "Mitchell Robinson": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 5.8,
   "fga": 9
  },
  "Mo Bamba": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 4.9,
   "fga": 8
  },
  "Morez Johnson Jr.": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 1.04,
   "fgm": 11,
   "xfgm": 10.33,
   "fga": 20
  },
  "Moritz Wagner": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 2.09,
   "fgm": 7,
   "xfgm": 9.0,
   "fga": 17
  },
  "Moussa Cissé": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 2.68,
   "fga": 4
  },
  "Moussa Diabaté": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 15,
   "xfgm": 14.28,
   "fga": 22
  },
  "Myles Turner": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 5.96,
   "fgm": 11,
   "xfgm": 13.43,
   "fga": 30
  },
  "Myron Gardner": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Naji Marshall": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.82,
   "fgm": 18,
   "xfgm": 15.88,
   "fga": 36
  },
  "Nate Ament": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 3,
   "xfgm": 4.37,
   "fga": 9
  },
  "Naz Reid": {
   "gp": 4,
   "tpm": 14,
   "xtpm": 11.95,
   "fgm": 32,
   "xfgm": 32.37,
   "fga": 73
  },
  "Neemias Queta": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 0.37,
   "fgm": 8,
   "xfgm": 9.51,
   "fga": 16
  },
  "Nick Martinelli": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.44,
   "fga": 1
  },
  "Nick Richards": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 1.46,
   "fga": 3
  },
  "Nickeil Alexander-Walker": {
   "gp": 4,
   "tpm": 13,
   "xtpm": 11.85,
   "fgm": 25,
   "xfgm": 23.96,
   "fga": 56
  },
  "Nikola Jokić": {
   "gp": 3,
   "tpm": 5,
   "xtpm": 8.02,
   "fgm": 25,
   "xfgm": 26.28,
   "fga": 60
  },
  "Nikola Jović": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.1,
   "fgm": 3,
   "xfgm": 4.83,
   "fga": 10
  },
  "Nikola Vučević": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 1.74,
   "fgm": 2,
   "xfgm": 2.62,
   "fga": 7
  },
  "Nique Clifford": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 3,
   "xfgm": 3.26,
   "fga": 7
  },
  "Noa Essengue": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.76,
   "fgm": 2,
   "xfgm": 4.22,
   "fga": 9
  },
  "Noah Clowney": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 2.81,
   "fgm": 5,
   "xfgm": 7.27,
   "fga": 15
  },
  "Nolan Traore": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 1.04,
   "fgm": 7,
   "xfgm": 9.04,
   "fga": 17
  },
  "Norman Powell": {
   "gp": 4,
   "tpm": 11,
   "xtpm": 11.12,
   "fgm": 19,
   "xfgm": 21.34,
   "fga": 52
  },
  "OG Anunoby": {
   "gp": 3,
   "tpm": 6,
   "xtpm": 7.43,
   "fgm": 14,
   "xfgm": 15.91,
   "fga": 34
  },
  "Obi Toppin": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 8.9,
   "fgm": 24,
   "xfgm": 20.94,
   "fga": 44
  },
  "Onyeka Okongwu": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 5.96,
   "fgm": 14,
   "xfgm": 16.2,
   "fga": 34
  },
  "Oso Ighodaro": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 4.0,
   "fga": 7
  },
  "Ousmane Dieng": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 2.11,
   "fgm": 3,
   "xfgm": 4.56,
   "fga": 10
  },
  "P.J. Washington": {
   "gp": 4,
   "tpm": 8,
   "xtpm": 8.48,
   "fgm": 22,
   "xfgm": 21.06,
   "fga": 47
  },
  "PJ Hall": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 0,
   "xfgm": 0.7,
   "fga": 2
  },
  "Paolo Banchero": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 2.11,
   "fgm": 16,
   "xfgm": 10.84,
   "fga": 23
  },
  "Pascal Siakam": {
   "gp": 4,
   "tpm": 8,
   "xtpm": 6.34,
   "fgm": 36,
   "xfgm": 32.75,
   "fga": 68
  },
  "Pat Spencer": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 0.79,
   "fga": 2
  },
  "Paul George": {
   "gp": 3,
   "tpm": 13,
   "xtpm": 9.09,
   "fgm": 23,
   "xfgm": 21.89,
   "fga": 50
  },
  "Paul Reed": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 0.7,
   "fgm": 14,
   "xfgm": 11.42,
   "fga": 23
  },
  "Payton Pritchard": {
   "gp": 3,
   "tpm": 10,
   "xtpm": 6.28,
   "fgm": 15,
   "xfgm": 11.86,
   "fga": 30
  },
  "Pelle Larsson": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 3.82,
   "fgm": 9,
   "xfgm": 11.38,
   "fga": 24
  },
  "Peyton Watson": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 4.97,
   "fgm": 11,
   "xfgm": 14.95,
   "fga": 31
  },
  "Precious Achiuwa": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 0.72,
   "fgm": 18,
   "xfgm": 15.54,
   "fga": 32
  },
  "Quentin Grimes": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 2.78,
   "fgm": 8,
   "xfgm": 6.78,
   "fga": 15
  },
  "Quenton Jackson": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 3.18,
   "fgm": 7,
   "xfgm": 8.52,
   "fga": 18
  },
  "Quinten Post": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 3.18,
   "fgm": 12,
   "xfgm": 8.93,
   "fga": 19
  },
  "RJ Barrett": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 3.88,
   "fgm": 26,
   "xfgm": 27.17,
   "fga": 51
  },
  "Rasheer Fleming": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 1.39,
   "fgm": 0,
   "xfgm": 2.27,
   "fga": 6
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
   "gp": 3,
   "tpm": 8,
   "xtpm": 8.37,
   "fgm": 13,
   "xfgm": 12.57,
   "fga": 31
  },
  "Robert Williams III": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 4.65,
   "fga": 9
  },
  "Ron Harper Jr.": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.1,
   "fgm": 1,
   "xfgm": 1.54,
   "fga": 4
  },
  "Ronald Holland II": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.42,
   "fgm": 4,
   "xfgm": 7.18,
   "fga": 15
  },
  "Royce O'Neale": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 4.57,
   "fgm": 5,
   "xfgm": 5.24,
   "fga": 14
  },
  "Rudy Gobert": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 10,
   "xfgm": 13.62,
   "fga": 23
  },
  "Rui Hachimura": {
   "gp": 3,
   "tpm": 6,
   "xtpm": 6.68,
   "fgm": 10,
   "xfgm": 16.4,
   "fga": 38
  },
  "Ryan Conwell": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 2,
   "xfgm": 1.92,
   "fga": 5
  },
  "Ryan Dunn": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 1.44,
   "fgm": 4,
   "xfgm": 3.89,
   "fga": 8
  },
  "Ryan Kalkbrenner": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 10,
   "xfgm": 8.25,
   "fga": 13
  },
  "Ryan Nembhard": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 2.1,
   "fga": 4
  },
  "Ryan Rollins": {
   "gp": 4,
   "tpm": 8,
   "xtpm": 8.8,
   "fgm": 20,
   "xfgm": 22.81,
   "fga": 51
  },
  "Saddiq Bey": {
   "gp": 3,
   "tpm": 7,
   "xtpm": 5.59,
   "fgm": 15,
   "xfgm": 12.15,
   "fga": 30
  },
  "Sam Hauser": {
   "gp": 3,
   "tpm": 8,
   "xtpm": 4.95,
   "fgm": 10,
   "xfgm": 7.57,
   "fga": 19
  },
  "Sam Merrill": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 4.25,
   "fgm": 7,
   "xfgm": 6.88,
   "fga": 17
  },
  "Sandro Mamukelashvili": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 1.74,
   "fgm": 7,
   "xfgm": 6.41,
   "fga": 13
  },
  "Scoot Henderson": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 3.18,
   "fgm": 8,
   "xfgm": 9.12,
   "fga": 21
  },
  "Scottie Barnes": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 4.95,
   "fgm": 20,
   "xfgm": 26.8,
   "fga": 57
  },
  "Scotty Pippen Jr.": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 3.16,
   "fgm": 10,
   "xfgm": 10.43,
   "fga": 25
  },
  "Sergio de Larrea": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 1.74,
   "fgm": 9,
   "xfgm": 7.63,
   "fga": 18
  },
  "Shai Gilgeous-Alexander": {
   "gp": 4,
   "tpm": 8,
   "xtpm": 9.73,
   "fgm": 43,
   "xfgm": 40.09,
   "fga": 90
  },
  "Sidy Cissoko": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 2.83,
   "fgm": 6,
   "xfgm": 4.38,
   "fga": 11
  },
  "Simone Fontecchio": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 0,
   "xfgm": 1.1,
   "fga": 3
  },
  "Sion James": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 6.39,
   "fgm": 4,
   "xfgm": 7.71,
   "fga": 21
  },
  "Stephen Curry": {
   "gp": 3,
   "tpm": 8,
   "xtpm": 6.98,
   "fgm": 20,
   "xfgm": 16.09,
   "fga": 38
  },
  "Stephon Castle": {
   "gp": 3,
   "tpm": 11,
   "xtpm": 10.11,
   "fgm": 23,
   "xfgm": 24.49,
   "fga": 54
  },
  "Steven Adams": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.34,
   "fga": 2
  },
  "Svi Mykhailiuk": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 3.16,
   "fgm": 6,
   "xfgm": 7.33,
   "fga": 17
  },
  "Tari Eason": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 2.83,
   "fgm": 17,
   "xfgm": 17.45,
   "fga": 33
  },
  "Tarris Reed Jr.": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 1.34,
   "fga": 2
  },
  "Taylor Hendricks": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 0,
   "xfgm": 0.7,
   "fga": 2
  },
  "Terrence Shannon Jr": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 7.03,
   "fgm": 16,
   "xfgm": 13.14,
   "fga": 32
  },
  "Tidjane Salaün": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.88,
   "fgm": 8,
   "xfgm": 7.44,
   "fga": 17
  },
  "Tim Hardaway Jr.": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 7.35,
   "fgm": 5,
   "xfgm": 9.05,
   "fga": 25
  },
  "Tobe Awaka": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 2.45,
   "fga": 4
  },
  "Tobi Lawal": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 2.04,
   "fga": 4
  },
  "Tolu Smith": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.67,
   "fga": 1
  },
  "Tony Bradley": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 1.34,
   "fga": 2
  },
  "Toumani Camara": {
   "gp": 2,
   "tpm": 9,
   "xtpm": 5.99,
   "fgm": 13,
   "xfgm": 8.21,
   "fga": 21
  },
  "Trae Young": {
   "gp": 4,
   "tpm": 9,
   "xtpm": 10.51,
   "fgm": 25,
   "xfgm": 25.54,
   "fga": 61
  },
  "Trayce Jackson-Davis": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 5,
   "xfgm": 3.79,
   "fga": 6
  },
  "Tre Johnson": {
   "gp": 4,
   "tpm": 7,
   "xtpm": 7.33,
   "fgm": 18,
   "xfgm": 15.3,
   "fga": 38
  },
  "Tre Jones": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 12,
   "xfgm": 13.91,
   "fga": 25
  },
  "Tre Mann": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Trevon Brazile": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 4.22,
   "fgm": 9,
   "xfgm": 8.68,
   "fga": 19
  },
  "Trey Lyles": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 3.18,
   "fgm": 5,
   "xfgm": 4.0,
   "fga": 11
  },
  "Trey Murphy III": {
   "gp": 3,
   "tpm": 7,
   "xtpm": 5.94,
   "fgm": 18,
   "xfgm": 17.2,
   "fga": 37
  },
  "Tristan da Silva": {
   "gp": 3,
   "tpm": 10,
   "xtpm": 9.09,
   "fgm": 14,
   "xfgm": 12.83,
   "fga": 33
  },
  "Ty Jerome": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 9.44,
   "fgm": 40,
   "xfgm": 33.42,
   "fga": 79
  },
  "Tyler Herro": {
   "gp": 4,
   "tpm": 13,
   "xtpm": 10.46,
   "fgm": 34,
   "xfgm": 34.08,
   "fga": 73
  },
  "Tyler Kolek": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 0,
   "xfgm": 1.58,
   "fga": 4
  },
  "Tyrese Haliburton": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 9.52,
   "fgm": 32,
   "xfgm": 26.9,
   "fga": 62
  },
  "Tyrese Maxey": {
   "gp": 4,
   "tpm": 9,
   "xtpm": 10.48,
   "fgm": 41,
   "xfgm": 42.75,
   "fga": 88
  },
  "Tyrese Proctor": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 0.72,
   "fgm": 2,
   "xfgm": 1.83,
   "fga": 4
  },
  "Tyus Jones": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.9,
   "fga": 4
  },
  "VJ Edgecombe": {
   "gp": 3,
   "tpm": 6,
   "xtpm": 5.94,
   "fgm": 13,
   "xfgm": 15.88,
   "fga": 34
  },
  "Victor Wembanyama": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 5.56,
   "fgm": 19,
   "xfgm": 27.22,
   "fga": 52
  },
  "Vít Krejčí": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 1.04,
   "fgm": 0,
   "xfgm": 1.48,
   "fga": 4
  },
  "Walker Kessler": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 23,
   "xfgm": 17.84,
   "fga": 28
  },
  "Walter Clayton Jr.": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 1.04,
   "fgm": 7,
   "xfgm": 4.55,
   "fga": 10
  },
  "Wendell Carter Jr.": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 2.83,
   "fgm": 19,
   "xfgm": 12.98,
   "fga": 25
  },
  "Will Richard": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 2.11,
   "fgm": 8,
   "xfgm": 7.68,
   "fga": 15
  },
  "Will Riley": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.02,
   "fga": 2
  },
  "Yang Hansen": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 1.81,
   "fga": 4
  },
  "Yaxel Lendeborg": {
   "gp": 4,
   "tpm": 9,
   "xtpm": 9.14,
   "fgm": 27,
   "xfgm": 28.22,
   "fga": 60
  },
  "Yves Missi": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 5.57,
   "fga": 9
  },
  "Zaccharie Risacher": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 5.94,
   "fgm": 12,
   "xfgm": 18.05,
   "fga": 39
  },
  "Zach Collins": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.42,
   "fgm": 2,
   "xfgm": 4.1,
   "fga": 8
  },
  "Zach Edey": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 7.56,
   "fga": 13
  },
  "Zach LaVine": {
   "gp": 3,
   "tpm": 9,
   "xtpm": 9.79,
   "fgm": 29,
   "xfgm": 25.14,
   "fga": 59
  },
  "Zeke Nnaji": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 0.35,
   "fga": 1
  },
  "Ziaire Williams": {
   "gp": 3,
   "tpm": 5,
   "xtpm": 4.17,
   "fgm": 12,
   "xfgm": 10.33,
   "fga": 23
  },
  "Zion Williamson": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.09,
   "fgm": 22,
   "xfgm": 21.6,
   "fga": 39
  },
  "Zuby Ejiofor": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 0.72,
   "fgm": 1,
   "xfgm": 1.39,
   "fga": 3
  },
  "Zyon Pullin": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.44,
   "fga": 1
  }
 }
};
