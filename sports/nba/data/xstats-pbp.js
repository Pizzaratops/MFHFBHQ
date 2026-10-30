// ============================================================
//  x3PM / xFGM der laufenden Saison aus Play-by-Play
//  Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data (nicht unser Projekt, frei veröffentlichte Daten)
//  Methode: Josh Lloyd (joshlloydfantasy.com/research/xstats-method)
//  Erzeugt von scripts/xstats-pbp.py am 2026-10-30 · Saison 2026-27 · Stand 2026-10-29
//  Wird von scripts/build-live-projections.js gelesen (3PM, FG%).
//  META {"season": "2026-27", "assetUpdated": "Fri, 30 Oct 2026 13:20:10 GMT"}
// ============================================================
const XSTATS_PBP = {
 "meta": {
  "season": "2026-27",
  "through": "2026-10-29",
  "players": 430,
  "games": 71,
  "shots": 12650,
  "assetUpdated": "Fri, 30 Oct 2026 13:20:10 GMT",
  "zoneRates": {
   "C3": 0.3695,
   "AB3": 0.3487,
   "RA": 0.6652,
   "PAINT": 0.4426,
   "MID": 0.4056
  },
  "source": "Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data"
 },
 "players": {
  "AJ Dybantsa": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 8,
   "xfgm": 6.14,
   "fga": 12
  },
  "AJ Green": {
   "gp": 5,
   "tpm": 12,
   "xtpm": 8.84,
   "fgm": 14,
   "xfgm": 10.39,
   "fga": 28
  },
  "Aaron Gordon": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 6.3,
   "fgm": 13,
   "xfgm": 16.86,
   "fga": 38
  },
  "Aaron Nesmith": {
   "gp": 4,
   "tpm": 9,
   "xtpm": 9.19,
   "fgm": 17,
   "xfgm": 18.68,
   "fga": 44
  },
  "Aaron Wiggins": {
   "gp": 6,
   "tpm": 18,
   "xtpm": 13.72,
   "fgm": 35,
   "xfgm": 28.97,
   "fga": 68
  },
  "Ace Bailey": {
   "gp": 5,
   "tpm": 8,
   "xtpm": 8.82,
   "fgm": 30,
   "xfgm": 26.25,
   "fga": 58
  },
  "Aday Mara": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 11,
   "xfgm": 11.97,
   "fga": 20
  },
  "Adem Bona": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 4,
   "xfgm": 5.8,
   "fga": 10
  },
  "Ajay Mitchell": {
   "gp": 5,
   "tpm": 4,
   "xtpm": 5.27,
   "fgm": 37,
   "xfgm": 34.4,
   "fga": 69
  },
  "Al Horford": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 3.16,
   "fgm": 7,
   "xfgm": 5.78,
   "fga": 14
  },
  "Alex Caruso": {
   "gp": 4,
   "tpm": 8,
   "xtpm": 5.62,
   "fgm": 13,
   "xfgm": 9.83,
   "fga": 23
  },
  "Alex Karaban": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 1.05,
   "fgm": 2,
   "xfgm": 1.71,
   "fga": 4
  },
  "Alex Morales": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 1,
   "xfgm": 1.7,
   "fga": 3
  },
  "Alex Sarr": {
   "gp": 5,
   "tpm": 3,
   "xtpm": 4.6,
   "fgm": 21,
   "xfgm": 18.67,
   "fga": 37
  },
  "Alijah Martin": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 4,
   "xfgm": 3.04,
   "fga": 6
  },
  "Allen Graves": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 2.15,
   "fgm": 8,
   "xfgm": 8.32,
   "fga": 16
  },
  "Alperen Sengun": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 3.14,
   "fgm": 36,
   "xfgm": 33.35,
   "fga": 62
  },
  "Alpha Diallo": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 2,
   "xfgm": 2.05,
   "fga": 4
  },
  "Amen Thompson": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 2.11,
   "fgm": 35,
   "xfgm": 34.83,
   "fga": 63
  },
  "Andre Drummond": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 15,
   "xfgm": 19.64,
   "fga": 31
  },
  "Andrew Nembhard": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 6.32,
   "fgm": 21,
   "xfgm": 19.57,
   "fga": 45
  },
  "Andrew Wiggins": {
   "gp": 5,
   "tpm": 6,
   "xtpm": 8.15,
   "fgm": 22,
   "xfgm": 21.25,
   "fga": 49
  },
  "Anfernee Simons": {
   "gp": 5,
   "tpm": 11,
   "xtpm": 10.85,
   "fgm": 15,
   "xfgm": 17.02,
   "fga": 42
  },
  "Anthony Black": {
   "gp": 2,
   "tpm": 5,
   "xtpm": 3.51,
   "fgm": 10,
   "xfgm": 9.05,
   "fga": 20
  },
  "Anthony Davis": {
   "gp": 5,
   "tpm": 6,
   "xtpm": 5.95,
   "fgm": 41,
   "xfgm": 46.67,
   "fga": 93
  },
  "Anthony Edwards": {
   "gp": 4,
   "tpm": 18,
   "xtpm": 15.78,
   "fgm": 50,
   "xfgm": 46.53,
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
   "gp": 4,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 14,
   "xfgm": 13.34,
   "fga": 27
  },
  "Austin Reaves": {
   "gp": 5,
   "tpm": 13,
   "xtpm": 9.46,
   "fgm": 37,
   "xfgm": 27.94,
   "fga": 65
  },
  "Ayo Dosunmu": {
   "gp": 5,
   "tpm": 7,
   "xtpm": 5.6,
   "fgm": 26,
   "xfgm": 26.13,
   "fga": 53
  },
  "Baba Miller": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.1,
   "fga": 5
  },
  "Bam Adebayo": {
   "gp": 5,
   "tpm": 3,
   "xtpm": 6.71,
   "fgm": 26,
   "xfgm": 29.3,
   "fga": 61
  },
  "Baylor Scheierman": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 3.57,
   "fgm": 6,
   "xfgm": 7.7,
   "fga": 18
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
   "xfgm": 1.36,
   "fga": 3
  },
  "Bennedict Mathurin": {
   "gp": 5,
   "tpm": 4,
   "xtpm": 5.62,
   "fgm": 14,
   "xfgm": 14.89,
   "fga": 32
  },
  "Bennett Stirtz": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 3.14,
   "fgm": 5,
   "xfgm": 6.46,
   "fga": 15
  },
  "Bilal Coulibaly": {
   "gp": 5,
   "tpm": 3,
   "xtpm": 4.64,
   "fgm": 19,
   "xfgm": 17.46,
   "fga": 34
  },
  "Bobby Portis Jr.": {
   "gp": 5,
   "tpm": 10,
   "xtpm": 8.47,
   "fgm": 19,
   "xfgm": 20.29,
   "fga": 47
  },
  "Bogdan Bogdanović": {
   "gp": 5,
   "tpm": 10,
   "xtpm": 5.33,
   "fgm": 14,
   "xfgm": 8.62,
   "fga": 22
  },
  "Bogoljub Marković": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.67,
   "fga": 1
  },
  "Bones Hyland": {
   "gp": 5,
   "tpm": 5,
   "xtpm": 4.88,
   "fgm": 6,
   "xfgm": 6.4,
   "fga": 17
  },
  "Braden Smith": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Branden Carlson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.01,
   "fga": 2
  },
  "Brandin Podziemski": {
   "gp": 3,
   "tpm": 5,
   "xtpm": 5.62,
   "fgm": 16,
   "xfgm": 16.29,
   "fga": 36
  },
  "Brandon Miller": {
   "gp": 5,
   "tpm": 15,
   "xtpm": 19.28,
   "fgm": 46,
   "xfgm": 50.91,
   "fga": 118
  },
  "Brandon Williams": {
   "gp": 5,
   "tpm": 5,
   "xtpm": 5.23,
   "fgm": 15,
   "xfgm": 20.81,
   "fga": 44
  },
  "Brayden Burries": {
   "gp": 5,
   "tpm": 4,
   "xtpm": 4.53,
   "fgm": 12,
   "xfgm": 12.03,
   "fga": 27
  },
  "Brice Sensabaugh": {
   "gp": 5,
   "tpm": 10,
   "xtpm": 6.65,
   "fgm": 16,
   "xfgm": 12.77,
   "fga": 32
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
   "gp": 4,
   "tpm": 6,
   "xtpm": 4.53,
   "fgm": 21,
   "xfgm": 17.27,
   "fga": 36
  },
  "Brooks Barnhizer": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 1,
   "xfgm": 1.25,
   "fga": 3
  },
  "Bruce Thornton": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 2,
   "xfgm": 1.49,
   "fga": 4
  },
  "Bryce Hopkins": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.42,
   "fgm": 6,
   "xfgm": 5.55,
   "fga": 11
  },
  "Bryce McGowens": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 1.68,
   "fga": 3
  },
  "Bub Carrington": {
   "gp": 5,
   "tpm": 8,
   "xtpm": 7.39,
   "fgm": 9,
   "xfgm": 10.23,
   "fga": 27
  },
  "Buddy Hield": {
   "gp": 5,
   "tpm": 5,
   "xtpm": 4.88,
   "fgm": 11,
   "xfgm": 9.98,
   "fga": 22
  },
  "CJ McCollum": {
   "gp": 6,
   "tpm": 12,
   "xtpm": 10.83,
   "fgm": 33,
   "xfgm": 29.25,
   "fga": 66
  },
  "Cade Cunningham": {
   "gp": 5,
   "tpm": 12,
   "xtpm": 11.55,
   "fgm": 39,
   "xfgm": 38.13,
   "fga": 85
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
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.46,
   "fgm": 4,
   "xfgm": 2.27,
   "fga": 6
  },
  "Caleb Wilson": {
   "gp": 5,
   "tpm": 8,
   "xtpm": 12.72,
   "fgm": 38,
   "xfgm": 44.11,
   "fga": 92
  },
  "Cam Christie": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 0,
   "xfgm": 2.49,
   "fga": 5
  },
  "Cam Spencer": {
   "gp": 5,
   "tpm": 10,
   "xtpm": 5.95,
   "fgm": 16,
   "xfgm": 12.66,
   "fga": 31
  },
  "Cam Whitmore": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 4,
   "xfgm": 3.8,
   "fga": 7
  },
  "Cameron Boozer": {
   "gp": 5,
   "tpm": 11,
   "xtpm": 10.81,
   "fgm": 24,
   "xfgm": 30.41,
   "fga": 71
  },
  "Cameron Johnson": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 1.42,
   "fga": 3
  },
  "Carter Bryant": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 3.18,
   "fgm": 3,
   "xfgm": 4.51,
   "fga": 11
  },
  "Cason Wallace": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.53,
   "fgm": 8,
   "xfgm": 9.29,
   "fga": 20
  },
  "Cedric Coward": {
   "gp": 4,
   "tpm": 11,
   "xtpm": 5.58,
   "fgm": 22,
   "xfgm": 19.46,
   "fga": 43
  },
  "Chaney Johnson": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 4.64,
   "fgm": 11,
   "xfgm": 12.54,
   "fga": 27
  },
  "Charles Bassey": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 2.88,
   "fga": 5
  },
  "Chaz Lanier": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.44,
   "fga": 1
  },
  "Chet Holmgren": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.11,
   "fgm": 11,
   "xfgm": 14.71,
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
   "xfgm": 1.68,
   "fga": 3
  },
  "Christian Anderson": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 3.49,
   "fgm": 3,
   "xfgm": 5.89,
   "fga": 15
  },
  "Christian Braun": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 7.51,
   "fgm": 20,
   "xfgm": 19.99,
   "fga": 43
  },
  "Clint Capela": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 5.1,
   "fga": 8
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
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.55,
   "fga": 6
  },
  "Collin Gillespie": {
   "gp": 3,
   "tpm": 5,
   "xtpm": 7.36,
   "fgm": 7,
   "xfgm": 9.36,
   "fga": 24
  },
  "Collin Murray-Boyles": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 1.74,
   "fgm": 9,
   "xfgm": 10.35,
   "fga": 21
  },
  "Collin Sexton": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 7.06,
   "fgm": 17,
   "xfgm": 16.8,
   "fga": 39
  },
  "Cooper Flagg": {
   "gp": 4,
   "tpm": 7,
   "xtpm": 7.71,
   "fgm": 36,
   "xfgm": 30.96,
   "fga": 69
  },
  "Corey Kispert": {
   "gp": 2,
   "tpm": 4,
   "xtpm": 1.74,
   "fgm": 6,
   "xfgm": 2.63,
   "fga": 7
  },
  "Craig Porter Jr.": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 0.79,
   "fga": 2
  },
  "DaRon Holmes II": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 1,
   "xfgm": 1.05,
   "fga": 3
  },
  "Daeqwon Plowden": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.09,
   "fgm": 4,
   "xfgm": 4.09,
   "fga": 9
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
   "gp": 4,
   "tpm": 13,
   "xtpm": 12.92,
   "fgm": 22,
   "xfgm": 22.37,
   "fga": 55
  },
  "Daniel Gafford": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 0.37,
   "fgm": 15,
   "xfgm": 13.45,
   "fga": 23
  },
  "Daniss Jenkins": {
   "gp": 5,
   "tpm": 8,
   "xtpm": 5.95,
   "fgm": 21,
   "xfgm": 18.83,
   "fga": 42
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
   "gp": 5,
   "tpm": 10,
   "xtpm": 15.73,
   "fgm": 45,
   "xfgm": 53.05,
   "fga": 119
  },
  "Darius Garland": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 10.11,
   "fgm": 31,
   "xfgm": 29.01,
   "fga": 67
  },
  "Darryn Peterson": {
   "gp": 5,
   "tpm": 7,
   "xtpm": 7.0,
   "fgm": 22,
   "xfgm": 27.62,
   "fga": 63
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
   "gp": 5,
   "tpm": 9,
   "xtpm": 8.06,
   "fgm": 32,
   "xfgm": 30.15,
   "fga": 62
  },
  "Day'Ron Sharpe": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 1.42,
   "fgm": 12,
   "xfgm": 12.94,
   "fga": 23
  },
  "De'Aaron Fox": {
   "gp": 5,
   "tpm": 7,
   "xtpm": 6.36,
   "fgm": 26,
   "xfgm": 22.68,
   "fga": 49
  },
  "De'Andre Hunter": {
   "gp": 5,
   "tpm": 13,
   "xtpm": 8.8,
   "fgm": 21,
   "xfgm": 17.51,
   "fga": 42
  },
  "De'Anthony Melton": {
   "gp": 5,
   "tpm": 9,
   "xtpm": 7.71,
   "fgm": 15,
   "xfgm": 14.77,
   "fga": 34
  },
  "DeAndre Jordan": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 2.66,
   "fga": 4
  },
  "DeMar DeRozan": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.85,
   "fgm": 17,
   "xfgm": 17.94,
   "fga": 40
  },
  "Dean Wade": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 2.5,
   "fgm": 4,
   "xfgm": 3.17,
   "fga": 8
  },
  "Deandre Ayton": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 15,
   "xfgm": 11.3,
   "fga": 19
  },
  "Dejounte Murray": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 5.36,
   "fgm": 29,
   "xfgm": 31.65,
   "fga": 62
  },
  "Deni Avdija": {
   "gp": 4,
   "tpm": 7,
   "xtpm": 7.0,
   "fgm": 31,
   "xfgm": 30.85,
   "fga": 63
  },
  "Dennis Schröder": {
   "gp": 5,
   "tpm": 5,
   "xtpm": 7.02,
   "fgm": 26,
   "xfgm": 29.76,
   "fga": 61
  },
  "Derik Queen": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.76,
   "fgm": 19,
   "xfgm": 18.93,
   "fga": 36
  },
  "Derrick Jones Jr.": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 6.34,
   "fgm": 19,
   "xfgm": 15.39,
   "fga": 33
  },
  "Derrick White": {
   "gp": 4,
   "tpm": 7,
   "xtpm": 7.71,
   "fgm": 19,
   "xfgm": 18.97,
   "fga": 43
  },
  "Desmond Bane": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 12.7,
   "fgm": 16,
   "xfgm": 22.49,
   "fga": 53
  },
  "Devin Booker": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 3.16,
   "fgm": 25,
   "xfgm": 20.61,
   "fga": 45
  },
  "Devin Vassell": {
   "gp": 5,
   "tpm": 9,
   "xtpm": 9.54,
   "fgm": 23,
   "xfgm": 23.05,
   "fga": 55
  },
  "Dillon Brooks": {
   "gp": 3,
   "tpm": 5,
   "xtpm": 5.23,
   "fgm": 14,
   "xfgm": 16.86,
   "fga": 37
  },
  "Domantas Sabonis": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 35,
   "xfgm": 26.82,
   "fga": 49
  },
  "Donovan Clingan": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 3.14,
   "fgm": 15,
   "xfgm": 13.55,
   "fga": 27
  },
  "Donovan Mitchell": {
   "gp": 5,
   "tpm": 12,
   "xtpm": 11.53,
   "fgm": 41,
   "xfgm": 40.25,
   "fga": 87
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
   "gp": 4,
   "tpm": 2,
   "xtpm": 1.76,
   "fgm": 5,
   "xfgm": 6.42,
   "fga": 13
  },
  "Dru Smith": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 1.05,
   "fgm": 4,
   "xfgm": 2.6,
   "fga": 6
  },
  "Duncan Robinson": {
   "gp": 5,
   "tpm": 20,
   "xtpm": 16.1,
   "fgm": 24,
   "xfgm": 24.0,
   "fga": 61
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
   "gp": 5,
   "tpm": 6,
   "xtpm": 6.32,
   "fgm": 34,
   "xfgm": 37.67,
   "fga": 74
  },
  "Dyson Daniels": {
   "gp": 6,
   "tpm": 1,
   "xtpm": 2.44,
   "fgm": 28,
   "xfgm": 30.58,
   "fga": 57
  },
  "Ebuka Okorie": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Egor Dëmin": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 7.34,
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
   "gp": 5,
   "tpm": 5,
   "xtpm": 4.55,
   "fgm": 7,
   "xfgm": 7.84,
   "fga": 20
  },
  "Evan Mobley": {
   "gp": 5,
   "tpm": 12,
   "xtpm": 7.36,
   "fgm": 32,
   "xfgm": 28.56,
   "fga": 58
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
   "gp": 4,
   "tpm": 3,
   "xtpm": 7.1,
   "fgm": 29,
   "xfgm": 34.06,
   "fga": 68
  },
  "Fred VanVleet": {
   "gp": 4,
   "tpm": 9,
   "xtpm": 9.11,
   "fgm": 15,
   "xfgm": 15.23,
   "fga": 39
  },
  "GG Jackson": {
   "gp": 5,
   "tpm": 4,
   "xtpm": 4.55,
   "fgm": 11,
   "xfgm": 16.07,
   "fga": 34
  },
  "Gary Payton II": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 3.49,
   "fgm": 13,
   "xfgm": 13.24,
   "fga": 27
  },
  "Gary Trent Jr.": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 1,
   "xfgm": 1.1,
   "fga": 3
  },
  "Georges Niang": {
   "gp": 5,
   "tpm": 4,
   "xtpm": 7.49,
   "fgm": 13,
   "xfgm": 15.02,
   "fga": 35
  },
  "Giannis Antetokounmpo": {
   "gp": 5,
   "tpm": 3,
   "xtpm": 4.18,
   "fgm": 55,
   "xfgm": 53.23,
   "fga": 97
  },
  "Goga Bitadze": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 3.99,
   "fga": 6
  },
  "Gradey Dick": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 3.18,
   "fgm": 9,
   "xfgm": 8.46,
   "fga": 18
  },
  "Graham Ike": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 1.39,
   "fgm": 12,
   "xfgm": 13.1,
   "fga": 24
  },
  "Grayson Allen": {
   "gp": 5,
   "tpm": 16,
   "xtpm": 12.23,
   "fgm": 20,
   "xfgm": 17.1,
   "fga": 45
  },
  "Gui Santos": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 2.81,
   "fgm": 12,
   "xfgm": 11.9,
   "fga": 23
  },
  "Hannes Steinbach": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 3.1,
   "fga": 5
  },
  "Harrison Barnes": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.79,
   "fgm": 2,
   "xfgm": 2.45,
   "fga": 6
  },
  "Herbert Jones": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 3.2,
   "fgm": 12,
   "xfgm": 13.4,
   "fga": 26
  },
  "Hugo González": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 2.11,
   "fgm": 4,
   "xfgm": 4.77,
   "fga": 10
  },
  "Immanuel Quickley": {
   "gp": 4,
   "tpm": 11,
   "xtpm": 10.89,
   "fgm": 23,
   "xfgm": 23.99,
   "fga": 58
  },
  "Isaac Jones": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Isaac Okoro": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 3.24,
   "fgm": 5,
   "xfgm": 7.23,
   "fga": 15
  },
  "Isaiah Collier": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 2.79,
   "fgm": 11,
   "xfgm": 15.6,
   "fga": 33
  },
  "Isaiah Crawford": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 1.07,
   "fgm": 2,
   "xfgm": 1.07,
   "fga": 3
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
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 20,
   "xfgm": 20.61,
   "fga": 36
  },
  "Isaiah Jackson": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 15,
   "xfgm": 14.37,
   "fga": 24
  },
  "Isaiah Joe": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 4.53,
   "fgm": 7,
   "xfgm": 7.3,
   "fga": 19
  },
  "Isaiah Stewart": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 2.83,
   "fgm": 15,
   "xfgm": 12.58,
   "fga": 25
  },
  "Ivica Zubac": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 12,
   "xfgm": 12.19,
   "fga": 20
  },
  "Ja Morant": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 4.9,
   "fgm": 26,
   "xfgm": 22.14,
   "fga": 48
  },
  "Ja'Kobe Walter": {
   "gp": 4,
   "tpm": 11,
   "xtpm": 9.54,
   "fgm": 18,
   "xfgm": 15.0,
   "fga": 37
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
   "gp": 5,
   "tpm": 12,
   "xtpm": 9.81,
   "fgm": 28,
   "xfgm": 27.13,
   "fga": 59
  },
  "Jabari Walker": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 2.66,
   "fga": 4
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
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 1.55,
   "fga": 3
  },
  "Jaden Hardy": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 2.44,
   "fgm": 1,
   "xfgm": 3.29,
   "fga": 9
  },
  "Jaden McDaniels": {
   "gp": 5,
   "tpm": 7,
   "xtpm": 7.84,
   "fgm": 34,
   "xfgm": 28.58,
   "fga": 62
  },
  "Jae'Sean Tate": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.41,
   "fga": 1
  },
  "Jaime Jaquez Jr.": {
   "gp": 5,
   "tpm": 8,
   "xtpm": 6.73,
   "fgm": 33,
   "xfgm": 31.25,
   "fga": 62
  },
  "Jake LaRavia": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 2.15,
   "fgm": 7,
   "xfgm": 6.15,
   "fga": 12
  },
  "Jakob Poeltl": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.77,
   "fga": 7
  },
  "Jalen Brunson": {
   "gp": 5,
   "tpm": 10,
   "xtpm": 10.48,
   "fgm": 43,
   "xfgm": 48.87,
   "fga": 107
  },
  "Jalen Duren": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 10,
   "xfgm": 9.3,
   "fga": 17
  },
  "Jalen Green": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 4.21,
   "fgm": 17,
   "xfgm": 17.58,
   "fga": 35
  },
  "Jalen Johnson": {
   "gp": 6,
   "tpm": 7,
   "xtpm": 9.79,
   "fgm": 40,
   "xfgm": 46.86,
   "fga": 96
  },
  "Jalen Pickett": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 3,
   "xfgm": 1.77,
   "fga": 4
  },
  "Jalen Slawson": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 1.74,
   "fga": 3
  },
  "Jalen Smith": {
   "gp": 5,
   "tpm": 9,
   "xtpm": 9.5,
   "fgm": 25,
   "xfgm": 24.05,
   "fga": 51
  },
  "Jalen Suggs": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 3.22,
   "fgm": 10,
   "xfgm": 13.26,
   "fga": 28
  },
  "Jalen Williams": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 3.14,
   "fgm": 15,
   "xfgm": 19.24,
   "fga": 39
  },
  "Jamal Cain": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 3.14,
   "fgm": 3,
   "xfgm": 5.79,
   "fga": 15
  },
  "Jamal Murray": {
   "gp": 4,
   "tpm": 16,
   "xtpm": 11.92,
   "fgm": 31,
   "xfgm": 29.75,
   "fga": 68
  },
  "Jamal Shead": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 2.09,
   "fgm": 7,
   "xfgm": 9.88,
   "fga": 20
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
   "gp": 5,
   "tpm": 12,
   "xtpm": 13.6,
   "fgm": 25,
   "xfgm": 30.37,
   "fga": 69
  },
  "James Wiseman": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 2.62,
   "fga": 5
  },
  "Jamison Battle": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 4.23,
   "fgm": 7,
   "xfgm": 7.55,
   "fga": 17
  },
  "Jarace Walker": {
   "gp": 5,
   "tpm": 4,
   "xtpm": 5.64,
   "fgm": 10,
   "xfgm": 14.21,
   "fga": 31
  },
  "Jared McCain": {
   "gp": 5,
   "tpm": 11,
   "xtpm": 10.22,
   "fgm": 18,
   "xfgm": 21.81,
   "fga": 50
  },
  "Jaren Jackson Jr.": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 4.92,
   "fgm": 22,
   "xfgm": 20.2,
   "fga": 44
  },
  "Jarred Vanderbilt": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.67,
   "fga": 1
  },
  "Jarrett Allen": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 0.7,
   "fgm": 24,
   "xfgm": 22.34,
   "fga": 39
  },
  "Jase Richardson": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 3.53,
   "fgm": 9,
   "xfgm": 10.84,
   "fga": 23
  },
  "Javonte Green": {
   "gp": 5,
   "tpm": 8,
   "xtpm": 7.78,
   "fgm": 10,
   "xfgm": 10.62,
   "fga": 27
  },
  "Jaxson Hayes": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 13,
   "xfgm": 9.88,
   "fga": 18
  },
  "Jay Huff": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 3.88,
   "fgm": 9,
   "xfgm": 9.64,
   "fga": 20
  },
  "Jaylen Brown": {
   "gp": 5,
   "tpm": 9,
   "xtpm": 7.71,
   "fgm": 38,
   "xfgm": 42.57,
   "fga": 86
  },
  "Jaylen Clark": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.09,
   "fgm": 2,
   "xfgm": 1.97,
   "fga": 5
  },
  "Jaylen Wells": {
   "gp": 5,
   "tpm": 11,
   "xtpm": 8.8,
   "fgm": 25,
   "xfgm": 19.1,
   "fga": 44
  },
  "Jaylin Sellers": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 2.46,
   "fgm": 1,
   "xfgm": 3.79,
   "fga": 9
  },
  "Jaylin Williams": {
   "gp": 5,
   "tpm": 4,
   "xtpm": 5.66,
   "fgm": 4,
   "xfgm": 6.99,
   "fga": 18
  },
  "Jaylon Tyson": {
   "gp": 5,
   "tpm": 5,
   "xtpm": 7.78,
   "fgm": 16,
   "xfgm": 18.12,
   "fga": 39
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
   "gp": 4,
   "tpm": 7,
   "xtpm": 10.18,
   "fgm": 37,
   "xfgm": 38.93,
   "fga": 86
  },
  "Jerami Grant": {
   "gp": 5,
   "tpm": 7,
   "xtpm": 7.39,
   "fgm": 13,
   "xfgm": 17.98,
   "fga": 40
  },
  "Jeremiah Fears": {
   "gp": 5,
   "tpm": 6,
   "xtpm": 7.36,
   "fgm": 23,
   "xfgm": 29.11,
   "fga": 61
  },
  "Jericho Sims": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Jett Howard": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 0.72,
   "fgm": 2,
   "xfgm": 1.16,
   "fga": 3
  },
  "Jevon Carter": {
   "gp": 2,
   "tpm": 2,
   "xtpm": 2.48,
   "fgm": 2,
   "xfgm": 2.93,
   "fga": 8
  },
  "Joan Beringer": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 15,
   "xfgm": 14.41,
   "fga": 22
  },
  "Jock Landale": {
   "gp": 6,
   "tpm": 3,
   "xtpm": 6.03,
   "fgm": 17,
   "xfgm": 18.89,
   "fga": 38
  },
  "Joel Embiid": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 5.93,
   "fgm": 29,
   "xfgm": 31.39,
   "fga": 68
  },
  "John Collins": {
   "gp": 5,
   "tpm": 7,
   "xtpm": 6.03,
   "fgm": 22,
   "xfgm": 24.76,
   "fga": 49
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
   "gp": 5,
   "tpm": 10,
   "xtpm": 7.49,
   "fgm": 23,
   "xfgm": 23.11,
   "fga": 50
  },
  "Jonathan Mogbo": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 2.15,
   "fgm": 4,
   "xfgm": 6.37,
   "fga": 13
  },
  "Jordan Clarkson": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 1.42,
   "fgm": 9,
   "xfgm": 8.28,
   "fga": 16
  },
  "Jordan Goodwin": {
   "gp": 3,
   "tpm": 6,
   "xtpm": 5.6,
   "fgm": 9,
   "xfgm": 8.48,
   "fga": 21
  },
  "Jordan Hawkins": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 2,
   "xfgm": 1.18,
   "fga": 3
  },
  "Jordan McLaughlin": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 0,
   "xfgm": 1.48,
   "fga": 3
  },
  "Jordan Poole": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 4.9,
   "fgm": 4,
   "xfgm": 8.59,
   "fga": 21
  },
  "Jordan Walsh": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 3.57,
   "fgm": 9,
   "xfgm": 9.96,
   "fga": 20
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
   "gp": 2,
   "tpm": 0,
   "xtpm": 2.79,
   "fgm": 1,
   "xfgm": 4.53,
   "fga": 11
  },
  "Josh Giddey": {
   "gp": 5,
   "tpm": 3,
   "xtpm": 4.9,
   "fgm": 15,
   "xfgm": 20.82,
   "fga": 42
  },
  "Josh Green": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 1.44,
   "fgm": 3,
   "xfgm": 3.21,
   "fga": 7
  },
  "Josh Hart": {
   "gp": 5,
   "tpm": 9,
   "xtpm": 9.13,
   "fgm": 17,
   "xfgm": 18.4,
   "fga": 42
  },
  "Josh Minott": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 4.21,
   "fgm": 6,
   "xfgm": 6.64,
   "fga": 16
  },
  "Josh Okogie": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.76,
   "fgm": 3,
   "xfgm": 3.76,
   "fga": 9
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
   "gp": 4,
   "tpm": 7,
   "xtpm": 8.08,
   "fgm": 16,
   "xfgm": 14.51,
   "fga": 35
  },
  "Julian Champagnie": {
   "gp": 5,
   "tpm": 17,
   "xtpm": 12.29,
   "fgm": 20,
   "xfgm": 15.17,
   "fga": 40
  },
  "Julius Randle": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 6.32,
   "fgm": 30,
   "xfgm": 28.69,
   "fga": 62
  },
  "Justin Champagnie": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.46,
   "fgm": 12,
   "xfgm": 10.89,
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
  "Karim López": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.37,
   "fgm": 0,
   "xfgm": 0.37,
   "fga": 1
  },
  "Karl-Anthony Towns": {
   "gp": 5,
   "tpm": 9,
   "xtpm": 7.67,
   "fgm": 42,
   "xfgm": 38.11,
   "fga": 72
  },
  "Karlo Matković": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 3.24,
   "fgm": 10,
   "xfgm": 8.56,
   "fga": 17
  },
  "Kasparas Jakučionis": {
   "gp": 5,
   "tpm": 3,
   "xtpm": 4.57,
   "fgm": 13,
   "xfgm": 12.78,
   "fga": 26
  },
  "Kawhi Leonard": {
   "gp": 2,
   "tpm": 4,
   "xtpm": 4.88,
   "fgm": 12,
   "xfgm": 17.21,
   "fga": 37
  },
  "Keaton Wagler": {
   "gp": 4,
   "tpm": 9,
   "xtpm": 8.06,
   "fgm": 12,
   "xfgm": 15.48,
   "fga": 38
  },
  "Keegan Murray": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 2.48,
   "fgm": 5,
   "xfgm": 7.13,
   "fga": 17
  },
  "Kel'el Ware": {
   "gp": 5,
   "tpm": 3,
   "xtpm": 5.25,
   "fgm": 23,
   "xfgm": 25.2,
   "fga": 46
  },
  "Keldon Johnson": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 1.74,
   "fgm": 20,
   "xfgm": 21.02,
   "fga": 38
  },
  "Kelly Oubre Jr.": {
   "gp": 5,
   "tpm": 4,
   "xtpm": 7.08,
   "fgm": 17,
   "xfgm": 19.19,
   "fga": 41
  },
  "Kenrich Williams": {
   "gp": 5,
   "tpm": 4,
   "xtpm": 3.16,
   "fgm": 7,
   "xfgm": 8.0,
   "fga": 17
  },
  "Kentavious Caldwell-Pope": {
   "gp": 5,
   "tpm": 8,
   "xtpm": 7.06,
   "fgm": 12,
   "xfgm": 11.49,
   "fga": 29
  },
  "Keon Ellis": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 4.92,
   "fgm": 10,
   "xfgm": 10.43,
   "fga": 24
  },
  "Kevin Durant": {
   "gp": 5,
   "tpm": 10,
   "xtpm": 7.08,
   "fgm": 34,
   "xfgm": 27.93,
   "fga": 63
  },
  "Kevin Huerter": {
   "gp": 5,
   "tpm": 5,
   "xtpm": 5.97,
   "fgm": 11,
   "xfgm": 10.95,
   "fga": 28
  },
  "Kevon Looney": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 3.51,
   "fga": 6
  },
  "Keyonte George": {
   "gp": 5,
   "tpm": 14,
   "xtpm": 11.88,
   "fgm": 40,
   "xfgm": 32.94,
   "fga": 81
  },
  "Khaman Maluach": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 1.07,
   "fgm": 8,
   "xfgm": 9.05,
   "fga": 15
  },
  "Khris Middleton": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.42,
   "fgm": 3,
   "xfgm": 3.37,
   "fga": 8
  },
  "Kingston Flemings": {
   "gp": 6,
   "tpm": 4,
   "xtpm": 3.84,
   "fgm": 16,
   "xfgm": 16.5,
   "fga": 34
  },
  "Klay Thompson": {
   "gp": 5,
   "tpm": 12,
   "xtpm": 13.01,
   "fgm": 13,
   "xfgm": 14.63,
   "fga": 41
  },
  "Koa Peat": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 2.44,
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
   "gp": 4,
   "tpm": 4,
   "xtpm": 4.9,
   "fgm": 9,
   "xfgm": 11.29,
   "fga": 26
  },
  "Kris Dunn": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 4.21,
   "fgm": 13,
   "xfgm": 10.85,
   "fga": 23
  },
  "Kris Murray": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 1.07,
   "fgm": 0,
   "xfgm": 1.07,
   "fga": 3
  },
  "Kyle Anderson": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.89,
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
   "gp": 5,
   "tpm": 7,
   "xtpm": 7.06,
   "fgm": 22,
   "xfgm": 23.61,
   "fga": 48
  },
  "Kyrie Irving": {
   "gp": 4,
   "tpm": 11,
   "xtpm": 11.55,
   "fgm": 27,
   "xfgm": 22.44,
   "fga": 55
  },
  "Kyshawn George": {
   "gp": 5,
   "tpm": 4,
   "xtpm": 7.36,
   "fgm": 30,
   "xfgm": 31.66,
   "fga": 64
  },
  "LJ Cryer": {
   "gp": 3,
   "tpm": 5,
   "xtpm": 3.14,
   "fgm": 6,
   "xfgm": 5.5,
   "fga": 14
  },
  "LaMelo Ball": {
   "gp": 5,
   "tpm": 14,
   "xtpm": 14.03,
   "fgm": 24,
   "xfgm": 24.18,
   "fga": 60
  },
  "Labaron Philon Jr.": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 2,
   "xfgm": 1.93,
   "fga": 5
  },
  "Landry Shamet": {
   "gp": 5,
   "tpm": 12,
   "xtpm": 9.19,
   "fgm": 15,
   "xfgm": 15.32,
   "fga": 37
  },
  "Larry Nance Jr.": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 3.53,
   "fgm": 5,
   "xfgm": 6.85,
   "fga": 15
  },
  "Lauri Markkanen": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 9.79,
   "fgm": 19,
   "xfgm": 20.34,
   "fga": 48
  },
  "LeBron James": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 4.53,
   "fgm": 23,
   "xfgm": 28.28,
   "fga": 54
  },
  "Leaky Black": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.72,
   "fgm": 1,
   "xfgm": 1.16,
   "fga": 3
  },
  "Leonard Miller": {
   "gp": 5,
   "tpm": 5,
   "xtpm": 7.34,
   "fgm": 20,
   "xfgm": 21.46,
   "fga": 43
  },
  "Liam McNeeley": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 1.07,
   "fgm": 0,
   "xfgm": 2.14,
   "fga": 5
  },
  "Luguentz Dort": {
   "gp": 6,
   "tpm": 7,
   "xtpm": 8.74,
   "fgm": 16,
   "xfgm": 20.89,
   "fga": 45
  },
  "Luka Dončić": {
   "gp": 4,
   "tpm": 21,
   "xtpm": 18.52,
   "fgm": 44,
   "xfgm": 36.01,
   "fga": 91
  },
  "Luka Garza": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 2.11,
   "fgm": 6,
   "xfgm": 6.77,
   "fga": 13
  },
  "Luke Kennard": {
   "gp": 2,
   "tpm": 6,
   "xtpm": 3.51,
   "fgm": 7,
   "xfgm": 3.91,
   "fga": 11
  },
  "Luke Kornet": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 6.87,
   "fga": 11
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
   "gp": 4,
   "tpm": 1,
   "xtpm": 3.16,
   "fgm": 5,
   "xfgm": 10.58,
   "fga": 24
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
   "gp": 5,
   "tpm": 9,
   "xtpm": 6.75,
   "fgm": 17,
   "xfgm": 13.83,
   "fga": 34
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
   "gp": 5,
   "tpm": 6,
   "xtpm": 5.95,
   "fgm": 15,
   "xfgm": 15.25,
   "fga": 34
  },
  "Marvin Bagley III": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 8,
   "xfgm": 7.4,
   "fga": 14
  },
  "Matas Buzelis": {
   "gp": 5,
   "tpm": 7,
   "xtpm": 8.78,
   "fgm": 19,
   "xfgm": 22.48,
   "fga": 49
  },
  "Matisse Thybulle": {
   "gp": 5,
   "tpm": 12,
   "xtpm": 8.54,
   "fgm": 17,
   "xfgm": 12.75,
   "fga": 31
  },
  "Max Christie": {
   "gp": 5,
   "tpm": 10,
   "xtpm": 10.59,
   "fgm": 17,
   "xfgm": 18.75,
   "fga": 45
  },
  "Meleek Thomas": {
   "gp": 2,
   "tpm": 4,
   "xtpm": 2.11,
   "fgm": 10,
   "xfgm": 8.28,
   "fga": 17
  },
  "Micah Peavy": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Micah Potter": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 2.03,
   "fga": 5
  },
  "Michael Porter Jr.": {
   "gp": 4,
   "tpm": 15,
   "xtpm": 12.97,
   "fgm": 32,
   "xfgm": 30.28,
   "fga": 68
  },
  "Mikal Bridges": {
   "gp": 5,
   "tpm": 5,
   "xtpm": 7.08,
   "fgm": 10,
   "xfgm": 16.09,
   "fga": 37
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
   "gp": 3,
   "tpm": 7,
   "xtpm": 7.0,
   "fgm": 10,
   "xfgm": 14.97,
   "fga": 35
  },
  "Miles Bridges": {
   "gp": 3,
   "tpm": 4,
   "xtpm": 7.04,
   "fgm": 16,
   "xfgm": 18.34,
   "fga": 39
  },
  "Miles McBride": {
   "gp": 5,
   "tpm": 9,
   "xtpm": 7.76,
   "fgm": 10,
   "xfgm": 10.97,
   "fga": 28
  },
  "Mitchell Robinson": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 10,
   "xfgm": 8.42,
   "fga": 13
  },
  "Mo Bamba": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 11,
   "xfgm": 8.42,
   "fga": 14
  },
  "Mohamed Diawara": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Morez Johnson Jr.": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 15,
   "xfgm": 13.82,
   "fga": 26
  },
  "Moritz Wagner": {
   "gp": 4,
   "tpm": 6,
   "xtpm": 3.51,
   "fgm": 13,
   "xfgm": 13.48,
   "fga": 26
  },
  "Moussa Cissé": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.1,
   "fga": 5
  },
  "Moussa Diabaté": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 18,
   "xfgm": 16.85,
   "fga": 26
  },
  "Myles Turner": {
   "gp": 5,
   "tpm": 4,
   "xtpm": 7.71,
   "fgm": 13,
   "xfgm": 16.47,
   "fga": 37
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
   "xtpm": 3.84,
   "fgm": 18,
   "xfgm": 15.9,
   "fga": 36
  },
  "Nate Ament": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 2.09,
   "fgm": 5,
   "xfgm": 7.63,
   "fga": 17
  },
  "Naz Reid": {
   "gp": 5,
   "tpm": 15,
   "xtpm": 12.31,
   "fgm": 34,
   "xfgm": 34.86,
   "fga": 79
  },
  "Neemias Queta": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 0.37,
   "fgm": 11,
   "xfgm": 11.45,
   "fga": 19
  },
  "Nick Martinelli": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 1.33,
   "fga": 3
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
   "gp": 6,
   "tpm": 22,
   "xtpm": 19.37,
   "fgm": 41,
   "xfgm": 40.09,
   "fga": 91
  },
  "Nikola Jokić": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 8.04,
   "fgm": 33,
   "xfgm": 33.14,
   "fga": 73
  },
  "Nikola Jović": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.44,
   "fgm": 5,
   "xfgm": 5.83,
   "fga": 12
  },
  "Nikola Vučević": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 2.44,
   "fgm": 4,
   "xfgm": 4.88,
   "fga": 12
  },
  "Nique Clifford": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 4,
   "xfgm": 4.48,
   "fga": 10
  },
  "Noa Essengue": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 2.11,
   "fgm": 3,
   "xfgm": 4.55,
   "fga": 10
  },
  "Noah Clowney": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 3.16,
   "fgm": 6,
   "xfgm": 7.59,
   "fga": 16
  },
  "Nolan Traore": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 1.74,
   "fgm": 13,
   "xfgm": 13.49,
   "fga": 26
  },
  "Norman Powell": {
   "gp": 5,
   "tpm": 15,
   "xtpm": 14.3,
   "fgm": 29,
   "xfgm": 27.55,
   "fga": 67
  },
  "OG Anunoby": {
   "gp": 5,
   "tpm": 9,
   "xtpm": 11.67,
   "fgm": 26,
   "xfgm": 32.22,
   "fga": 65
  },
  "Obi Toppin": {
   "gp": 5,
   "tpm": 11,
   "xtpm": 9.58,
   "fgm": 28,
   "xfgm": 25.1,
   "fga": 52
  },
  "Olivier-Maxence Prosper": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 2.22,
   "fga": 4
  },
  "Onyeka Okongwu": {
   "gp": 6,
   "tpm": 8,
   "xtpm": 9.11,
   "fgm": 30,
   "xfgm": 29.94,
   "fga": 61
  },
  "Oscar Tshiebwe": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 2.0,
   "fga": 3
  },
  "Oso Ighodaro": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.99,
   "fga": 7
  },
  "Ousmane Dieng": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 2.46,
   "fgm": 5,
   "xfgm": 7.34,
   "fga": 15
  },
  "P.J. Washington": {
   "gp": 5,
   "tpm": 10,
   "xtpm": 10.96,
   "fgm": 29,
   "xfgm": 28.12,
   "fga": 63
  },
  "PJ Hall": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 0,
   "xfgm": 0.7,
   "fga": 2
  },
  "Pacôme Dadiet": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Paolo Banchero": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 2.11,
   "fgm": 16,
   "xfgm": 10.82,
   "fga": 23
  },
  "Pascal Siakam": {
   "gp": 5,
   "tpm": 8,
   "xtpm": 7.39,
   "fgm": 47,
   "xfgm": 41.35,
   "fga": 85
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
   "gp": 4,
   "tpm": 14,
   "xtpm": 11.24,
   "fgm": 31,
   "xfgm": 29.7,
   "fga": 66
  },
  "Paul Reed": {
   "gp": 5,
   "tpm": 5,
   "xtpm": 1.76,
   "fgm": 28,
   "xfgm": 21.48,
   "fga": 42
  },
  "Payton Pritchard": {
   "gp": 4,
   "tpm": 10,
   "xtpm": 7.34,
   "fgm": 17,
   "xfgm": 15.13,
   "fga": 37
  },
  "Pelle Larsson": {
   "gp": 5,
   "tpm": 5,
   "xtpm": 4.88,
   "fgm": 15,
   "xfgm": 17.74,
   "fga": 36
  },
  "Peyton Watson": {
   "gp": 5,
   "tpm": 3,
   "xtpm": 7.45,
   "fgm": 21,
   "xfgm": 27.28,
   "fga": 56
  },
  "Precious Achiuwa": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 1.79,
   "fgm": 32,
   "xfgm": 28.29,
   "fga": 55
  },
  "Quentin Grimes": {
   "gp": 5,
   "tpm": 3,
   "xtpm": 4.9,
   "fgm": 16,
   "xfgm": 16.31,
   "fga": 34
  },
  "Quenton Jackson": {
   "gp": 5,
   "tpm": 1,
   "xtpm": 3.53,
   "fgm": 8,
   "xfgm": 11.95,
   "fga": 24
  },
  "Quinten Post": {
   "gp": 5,
   "tpm": 5,
   "xtpm": 4.23,
   "fgm": 15,
   "xfgm": 11.28,
   "fga": 24
  },
  "RJ Barrett": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 6.32,
   "fgm": 35,
   "xfgm": 36.16,
   "fga": 69
  },
  "Rasheer Fleming": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 1.39,
   "fgm": 0,
   "xfgm": 2.28,
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
   "gp": 4,
   "tpm": 9,
   "xtpm": 11.18,
   "fgm": 15,
   "xfgm": 16.02,
   "fga": 40
  },
  "Robert Williams III": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 13,
   "xfgm": 9.97,
   "fga": 17
  },
  "Ron Harper Jr.": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.09,
   "fgm": 1,
   "xfgm": 1.53,
   "fga": 4
  },
  "Ronald Holland II": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 2.15,
   "fgm": 6,
   "xfgm": 10.13,
   "fga": 21
  },
  "Royce O'Neale": {
   "gp": 5,
   "tpm": 7,
   "xtpm": 7.39,
   "fgm": 8,
   "xfgm": 8.05,
   "fga": 22
  },
  "Rudy Gobert": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 10,
   "xfgm": 15.99,
   "fga": 27
  },
  "Rui Hachimura": {
   "gp": 3,
   "tpm": 6,
   "xtpm": 6.69,
   "fgm": 10,
   "xfgm": 16.36,
   "fga": 38
  },
  "Ryan Conwell": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 2,
   "xfgm": 1.93,
   "fga": 5
  },
  "Ryan Dunn": {
   "gp": 3,
   "tpm": 2,
   "xtpm": 1.44,
   "fgm": 4,
   "xfgm": 3.87,
   "fga": 8
  },
  "Ryan Kalkbrenner": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 10,
   "xfgm": 8.2,
   "fga": 13
  },
  "Ryan Nembhard": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 2.08,
   "fga": 4
  },
  "Ryan Rollins": {
   "gp": 5,
   "tpm": 8,
   "xtpm": 9.85,
   "fgm": 22,
   "xfgm": 30.19,
   "fga": 65
  },
  "Saddiq Bey": {
   "gp": 5,
   "tpm": 9,
   "xtpm": 8.43,
   "fgm": 21,
   "xfgm": 19.65,
   "fga": 47
  },
  "Sam Hauser": {
   "gp": 4,
   "tpm": 11,
   "xtpm": 7.76,
   "fgm": 14,
   "xfgm": 10.78,
   "fga": 28
  },
  "Sam Merrill": {
   "gp": 5,
   "tpm": 9,
   "xtpm": 9.17,
   "fgm": 15,
   "xfgm": 14.01,
   "fga": 35
  },
  "Sandro Mamukelashvili": {
   "gp": 5,
   "tpm": 5,
   "xtpm": 4.94,
   "fgm": 19,
   "xfgm": 17.54,
   "fga": 37
  },
  "Scoot Henderson": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 5.99,
   "fgm": 11,
   "xfgm": 13.45,
   "fga": 32
  },
  "Scottie Barnes": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 5.68,
   "fgm": 31,
   "xfgm": 35.29,
   "fga": 74
  },
  "Scotty Pippen Jr.": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 3.16,
   "fgm": 11,
   "xfgm": 11.13,
   "fga": 26
  },
  "Sergio de Larrea": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 1.74,
   "fgm": 9,
   "xfgm": 7.65,
   "fga": 18
  },
  "Shai Gilgeous-Alexander": {
   "gp": 5,
   "tpm": 9,
   "xtpm": 11.86,
   "fgm": 50,
   "xfgm": 47.91,
   "fga": 109
  },
  "Sidy Cissoko": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 4.64,
   "fgm": 10,
   "xfgm": 8.85,
   "fga": 20
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
   "gp": 5,
   "tpm": 4,
   "xtpm": 8.54,
   "fgm": 5,
   "xfgm": 9.86,
   "fga": 27
  },
  "Stephen Curry": {
   "gp": 4,
   "tpm": 14,
   "xtpm": 12.57,
   "fgm": 31,
   "xfgm": 27.56,
   "fga": 65
  },
  "Stephon Castle": {
   "gp": 5,
   "tpm": 15,
   "xtpm": 14.34,
   "fgm": 33,
   "xfgm": 34.83,
   "fga": 78
  },
  "Steven Adams": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.33,
   "fga": 2
  },
  "Svi Mykhailiuk": {
   "gp": 5,
   "tpm": 3,
   "xtpm": 4.9,
   "fgm": 7,
   "xfgm": 9.48,
   "fga": 23
  },
  "Tari Eason": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 3.88,
   "fgm": 19,
   "xfgm": 20.2,
   "fga": 39
  },
  "Tarris Reed Jr.": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 2.44,
   "fga": 4
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
   "gp": 2,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 0,
   "xfgm": 1.05,
   "fga": 3
  },
  "Terrence Shannon Jr": {
   "gp": 5,
   "tpm": 11,
   "xtpm": 8.78,
   "fgm": 21,
   "xfgm": 19.3,
   "fga": 45
  },
  "Tidjane Salaün": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 3.88,
   "fgm": 9,
   "xfgm": 8.09,
   "fga": 18
  },
  "Tim Hardaway Jr.": {
   "gp": 5,
   "tpm": 6,
   "xtpm": 8.41,
   "fgm": 11,
   "xfgm": 14.24,
   "fga": 35
  },
  "Tobe Awaka": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 2.44,
   "fga": 4
  },
  "Tobi Lawal": {
   "gp": 3,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 2.03,
   "fga": 4
  },
  "Tolu Smith": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 2.0,
   "fga": 3
  },
  "Tony Bradley": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 1.33,
   "fga": 2
  },
  "Toumani Camara": {
   "gp": 4,
   "tpm": 16,
   "xtpm": 10.63,
   "fgm": 22,
   "xfgm": 14.17,
   "fga": 36
  },
  "Trae Young": {
   "gp": 5,
   "tpm": 10,
   "xtpm": 12.97,
   "fgm": 28,
   "xfgm": 30.16,
   "fga": 73
  },
  "Trayce Jackson-Davis": {
   "gp": 4,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 6.43,
   "fga": 11
  },
  "Tre Johnson": {
   "gp": 4,
   "tpm": 7,
   "xtpm": 7.34,
   "fgm": 18,
   "xfgm": 15.31,
   "fga": 38
  },
  "Tre Jones": {
   "gp": 5,
   "tpm": 2,
   "xtpm": 1.39,
   "fgm": 16,
   "xfgm": 17.94,
   "fga": 33
  },
  "Tre Mann": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Trendon Watford": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 1.68,
   "fga": 3
  },
  "Trevon Brazile": {
   "gp": 4,
   "tpm": 5,
   "xtpm": 5.27,
   "fgm": 14,
   "xfgm": 13.47,
   "fga": 28
  },
  "Trey Lyles": {
   "gp": 5,
   "tpm": 5,
   "xtpm": 4.25,
   "fgm": 8,
   "xfgm": 6.17,
   "fga": 16
  },
  "Trey Murphy III": {
   "gp": 5,
   "tpm": 11,
   "xtpm": 10.83,
   "fgm": 26,
   "xfgm": 25.16,
   "fga": 56
  },
  "Tristan da Silva": {
   "gp": 4,
   "tpm": 14,
   "xtpm": 10.87,
   "fgm": 22,
   "xfgm": 17.48,
   "fga": 43
  },
  "Ty Jerome": {
   "gp": 5,
   "tpm": 11,
   "xtpm": 11.2,
   "fgm": 43,
   "xfgm": 38.2,
   "fga": 91
  },
  "Tyler Herro": {
   "gp": 5,
   "tpm": 17,
   "xtpm": 12.57,
   "fgm": 43,
   "xfgm": 39.9,
   "fga": 86
  },
  "Tyler Kolek": {
   "gp": 3,
   "tpm": 3,
   "xtpm": 2.44,
   "fgm": 3,
   "xfgm": 4.21,
   "fga": 11
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
   "gp": 5,
   "tpm": 12,
   "xtpm": 12.97,
   "fgm": 49,
   "xfgm": 50.78,
   "fga": 106
  },
  "Tyrese Proctor": {
   "gp": 4,
   "tpm": 2,
   "xtpm": 1.42,
   "fgm": 6,
   "xfgm": 4.92,
   "fga": 10
  },
  "Tyus Jones": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 3,
   "xfgm": 3.67,
   "fga": 8
  },
  "VJ Edgecombe": {
   "gp": 4,
   "tpm": 7,
   "xtpm": 8.08,
   "fgm": 16,
   "xfgm": 20.38,
   "fga": 44
  },
  "Victor Wembanyama": {
   "gp": 5,
   "tpm": 8,
   "xtpm": 10.11,
   "fgm": 47,
   "xfgm": 50.3,
   "fga": 98
  },
  "Vít Krejčí": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 2.44,
   "fgm": 1,
   "xfgm": 2.88,
   "fga": 8
  },
  "Walker Kessler": {
   "gp": 5,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 33,
   "xfgm": 27.71,
   "fga": 44
  },
  "Walter Clayton Jr.": {
   "gp": 4,
   "tpm": 3,
   "xtpm": 2.44,
   "fgm": 7,
   "xfgm": 5.95,
   "fga": 14
  },
  "Wendell Carter Jr.": {
   "gp": 4,
   "tpm": 4,
   "xtpm": 3.55,
   "fgm": 20,
   "xfgm": 14.74,
   "fga": 29
  },
  "Will Richard": {
   "gp": 5,
   "tpm": 3,
   "xtpm": 2.81,
   "fgm": 10,
   "xfgm": 10.12,
   "fga": 20
  },
  "Will Riley": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.01,
   "fga": 2
  },
  "Yang Hansen": {
   "gp": 2,
   "tpm": 2,
   "xtpm": 1.05,
   "fgm": 3,
   "xfgm": 2.15,
   "fga": 5
  },
  "Yaxel Lendeborg": {
   "gp": 5,
   "tpm": 11,
   "xtpm": 10.89,
   "fgm": 38,
   "xfgm": 38.74,
   "fga": 80
  },
  "Yves Missi": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 5.54,
   "fga": 9
  },
  "Zaccharie Risacher": {
   "gp": 5,
   "tpm": 5,
   "xtpm": 7.0,
   "fgm": 17,
   "xfgm": 21.07,
   "fga": 45
  },
  "Zach Collins": {
   "gp": 3,
   "tpm": 0,
   "xtpm": 1.42,
   "fgm": 2,
   "xfgm": 4.08,
   "fga": 8
  },
  "Zach Edey": {
   "gp": 4,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 13,
   "xfgm": 12.32,
   "fga": 21
  },
  "Zach LaVine": {
   "gp": 5,
   "tpm": 15,
   "xtpm": 14.71,
   "fgm": 43,
   "xfgm": 37.37,
   "fga": 86
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
   "gp": 4,
   "tpm": 7,
   "xtpm": 5.25,
   "fgm": 16,
   "xfgm": 12.71,
   "fga": 28
  },
  "Zion Williamson": {
   "gp": 5,
   "tpm": 3,
   "xtpm": 2.44,
   "fgm": 42,
   "xfgm": 37.83,
   "fga": 65
  },
  "Zuby Ejiofor": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 0.72,
   "fgm": 1,
   "xfgm": 1.38,
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
