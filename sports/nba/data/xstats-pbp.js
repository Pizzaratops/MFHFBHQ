// ============================================================
//  x3PM / xFGM der laufenden Saison aus Play-by-Play
//  Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data (nicht unser Projekt, frei veröffentlichte Daten)
//  Methode: Josh Lloyd (joshlloydfantasy.com/research/xstats-method)
//  Erzeugt von scripts/xstats-pbp.py am 2026-10-23 · Saison 2026-27 · Stand 2026-10-21
//  Wird von scripts/build-live-projections.js gelesen (3PM, FG%).
//  META {"season": "2026-27", "assetUpdated": "Thu, 22 Oct 2026 13:31:16 GMT"}
// ============================================================
const XSTATS_PBP = {
 "meta": {
  "season": "2026-27",
  "through": "2026-10-21",
  "players": 322,
  "games": 14,
  "shots": 2464,
  "assetUpdated": "Thu, 22 Oct 2026 13:31:16 GMT",
  "zoneRates": {
   "C3": 0.3807,
   "AB3": 0.3495,
   "RA": 0.6745,
   "PAINT": 0.4387,
   "MID": 0.4094
  },
  "source": "Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data"
 },
 "players": {
  "AJ Green": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 0.73,
   "fgm": 2,
   "xfgm": 1.17,
   "fga": 3
  },
  "Aaron Wiggins": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 1.75,
   "fgm": 5,
   "xfgm": 3.97,
   "fga": 9
  },
  "Ace Bailey": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.84,
   "fgm": 5,
   "xfgm": 5.36,
   "fga": 11
  },
  "Aday Mara": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 2.46,
   "fga": 4
  },
  "Adem Bona": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Ajay Mitchell": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 4.13,
   "fga": 8
  },
  "Al Horford": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 0,
   "xfgm": 1.05,
   "fga": 3
  },
  "Alex Caruso": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 0.7,
   "fgm": 3,
   "xfgm": 1.81,
   "fga": 4
  },
  "Alex Karaban": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Alex Sarr": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 3,
   "xfgm": 4.36,
   "fga": 9
  },
  "Alijah Martin": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.67,
   "fga": 1
  },
  "Allen Graves": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.76,
   "fgm": 2,
   "xfgm": 2.52,
   "fga": 5
  },
  "Alperen Sengun": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 0.7,
   "fgm": 9,
   "xfgm": 7.55,
   "fga": 15
  },
  "Amen Thompson": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 6,
   "xfgm": 6.74,
   "fga": 12
  },
  "Andre Drummond": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 5,
   "xfgm": 8.3,
   "fga": 13
  },
  "Andrew Nembhard": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 6,
   "xfgm": 4.83,
   "fga": 10
  },
  "Andrew Wiggins": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.46,
   "fgm": 5,
   "xfgm": 4.94,
   "fga": 11
  },
  "Anfernee Simons": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 2.83,
   "fgm": 5,
   "xfgm": 3.68,
   "fga": 10
  },
  "Anthony Davis": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 11,
   "xfgm": 10.54,
   "fga": 20
  },
  "Anthony Edwards": {
   "gp": 1,
   "tpm": 9,
   "xtpm": 6.0,
   "fgm": 16,
   "xfgm": 11.06,
   "fga": 29
  },
  "Ausar Thompson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 4,
   "xfgm": 3.63,
   "fga": 8
  },
  "Austin Reaves": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 6,
   "xfgm": 5.5,
   "fga": 11
  },
  "Ayo Dosunmu": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 6,
   "xfgm": 6.35,
   "fga": 13
  },
  "Baba Miller": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.35,
   "fga": 2
  },
  "Bam Adebayo": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.81,
   "fgm": 6,
   "xfgm": 5.56,
   "fga": 12
  },
  "Baylor Scheierman": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 0.7,
   "fgm": 3,
   "xfgm": 1.55,
   "fga": 4
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
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 3,
   "xfgm": 3.27,
   "fga": 7
  },
  "Bennett Stirtz": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Bilal Coulibaly": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.08,
   "fgm": 4,
   "xfgm": 3.1,
   "fga": 6
  },
  "Bobby Portis Jr.": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 3,
   "xfgm": 1.99,
   "fga": 5
  },
  "Bogdan Bogdanović": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 1.14,
   "fga": 3
  },
  "Bones Hyland": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 1,
   "xfgm": 0.7,
   "fga": 2
  },
  "Brandon Miller": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 4.89,
   "fgm": 7,
   "xfgm": 8.17,
   "fga": 21
  },
  "Brandon Williams": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 3,
   "xfgm": 5.88,
   "fga": 12
  },
  "Brayden Burries": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 0.7,
   "fgm": 3,
   "xfgm": 2.69,
   "fga": 6
  },
  "Brice Sensabaugh": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 1,
   "xfgm": 1.81,
   "fga": 4
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
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 7,
   "xfgm": 5.94,
   "fga": 12
  },
  "Brooks Barnhizer": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Bruce Thornton": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.35,
   "fga": 1
  },
  "Bub Carrington": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.05,
   "fgm": 3,
   "xfgm": 2.36,
   "fga": 6
  },
  "Buddy Hield": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 0,
   "xfgm": 1.72,
   "fga": 4
  },
  "CJ McCollum": {
   "gp": 1,
   "tpm": 4,
   "xtpm": 2.1,
   "fgm": 7,
   "xfgm": 3.88,
   "fga": 9
  },
  "Cade Cunningham": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 2.13,
   "fgm": 8,
   "xfgm": 7.51,
   "fga": 18
  },
  "Caleb Wilson": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 2.92,
   "fgm": 7,
   "xfgm": 10.48,
   "fga": 21
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
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 2.14,
   "fga": 4
  },
  "Cameron Boozer": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 2.1,
   "fgm": 2,
   "xfgm": 7.43,
   "fga": 15
  },
  "Carter Bryant": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 0,
   "xfgm": 1.05,
   "fga": 3
  },
  "Cason Wallace": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.43,
   "fgm": 3,
   "xfgm": 3.42,
   "fga": 8
  },
  "Cedric Coward": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 3,
   "xfgm": 3.16,
   "fga": 6
  },
  "Chaney Johnson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.38,
   "fgm": 0,
   "xfgm": 0.38,
   "fga": 1
  },
  "Chet Holmgren": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 4.6,
   "fga": 8
  },
  "Chris Mañon": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.7,
   "fga": 3
  },
  "Christian Anderson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 1.23,
   "fga": 3
  },
  "Clint Capela": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Cody Williams": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.35,
   "fga": 1
  },
  "Collin Gillespie": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 2.8,
   "fgm": 0,
   "xfgm": 2.8,
   "fga": 8
  },
  "Collin Murray-Boyles": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 3.45,
   "fga": 7
  },
  "Cooper Flagg": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.4,
   "fgm": 10,
   "xfgm": 7.25,
   "fga": 17
  },
  "Daeqwon Plowden": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 2.02,
   "fga": 3
  },
  "Damian Lillard": {
   "gp": 1,
   "tpm": 6,
   "xtpm": 3.53,
   "fgm": 7,
   "xfgm": 4.64,
   "fga": 12
  },
  "Daniel Gafford": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.67,
   "fga": 1
  },
  "Daniss Jenkins": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.23,
   "fga": 3
  },
  "Darius Acuff Jr.": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 2.45,
   "fgm": 5,
   "xfgm": 11.47,
   "fga": 24
  },
  "Darius Garland": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 2.8,
   "fgm": 11,
   "xfgm": 8.33,
   "fga": 19
  },
  "Darryn Peterson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 3.45,
   "fga": 7
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
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 4,
   "xfgm": 3.57,
   "fga": 8
  },
  "Day'Ron Sharpe": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 2.9,
   "fga": 5
  },
  "De'Aaron Fox": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.73,
   "fgm": 6,
   "xfgm": 4.27,
   "fga": 9
  },
  "De'Andre Hunter": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 1.99,
   "fga": 5
  },
  "De'Anthony Melton": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 0,
   "xfgm": 0.7,
   "fga": 2
  },
  "Deandre Ayton": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 5,
   "xfgm": 3.81,
   "fga": 6
  },
  "Dejounte Murray": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.81,
   "fgm": 9,
   "xfgm": 8.87,
   "fga": 18
  },
  "Deni Avdija": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.4,
   "fgm": 7,
   "xfgm": 8.52,
   "fga": 16
  },
  "Dennis Schröder": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 7,
   "xfgm": 6.82,
   "fga": 13
  },
  "Derik Queen": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 2.23,
   "fga": 4
  },
  "Derrick Jones Jr.": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 3,
   "xfgm": 1.81,
   "fga": 4
  },
  "Derrick White": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 2.45,
   "fgm": 7,
   "xfgm": 5.31,
   "fga": 13
  },
  "Desmond Bane": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 3.59,
   "fgm": 5,
   "xfgm": 6.7,
   "fga": 15
  },
  "Devin Booker": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 6.0,
   "fga": 13
  },
  "Devin Vassell": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.43,
   "fgm": 2,
   "xfgm": 3.42,
   "fga": 8
  },
  "Dillon Brooks": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 4,
   "xfgm": 5.09,
   "fga": 11
  },
  "Domantas Sabonis": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 5,
   "xfgm": 3.37,
   "fga": 5
  },
  "Donovan Clingan": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.4,
   "fgm": 4,
   "xfgm": 4.3,
   "fga": 9
  },
  "Draymond Green": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 2.14,
   "fga": 4
  },
  "Duncan Robinson": {
   "gp": 1,
   "tpm": 5,
   "xtpm": 3.15,
   "fgm": 5,
   "xfgm": 3.58,
   "fga": 10
  },
  "Duop Reath": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 1.37,
   "fga": 3
  },
  "Dylan Harper": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 7,
   "xfgm": 9.14,
   "fga": 17
  },
  "Dyson Daniels": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 8,
   "xfgm": 6.94,
   "fga": 13
  },
  "Egor Dëmin": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.75,
   "fgm": 2,
   "xfgm": 4.85,
   "fga": 10
  },
  "Emanuel Sharp": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.4,
   "fgm": 3,
   "xfgm": 2.48,
   "fga": 6
  },
  "Franz Wagner": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.86,
   "fgm": 9,
   "xfgm": 9.51,
   "fga": 20
  },
  "Fred VanVleet": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.1,
   "fgm": 2,
   "xfgm": 3.21,
   "fga": 8
  },
  "GG Jackson": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 0.7,
   "fgm": 4,
   "xfgm": 3.8,
   "fga": 8
  },
  "Gary Payton II": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 5,
   "xfgm": 4.86,
   "fga": 9
  },
  "Georges Niang": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.4,
   "fgm": 3,
   "xfgm": 3.39,
   "fga": 8
  },
  "Giannis Antetokounmpo": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 13,
   "xfgm": 10.01,
   "fga": 19
  },
  "Goga Bitadze": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 2.02,
   "fga": 3
  },
  "Gradey Dick": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 3,
   "xfgm": 1.78,
   "fga": 4
  },
  "Graham Ike": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 1.46,
   "fga": 3
  },
  "Grayson Allen": {
   "gp": 1,
   "tpm": 5,
   "xtpm": 2.8,
   "fgm": 6,
   "xfgm": 3.23,
   "fga": 9
  },
  "Gui Santos": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.08,
   "fgm": 5,
   "xfgm": 5.57,
   "fga": 10
  },
  "Harrison Barnes": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.38,
   "fgm": 1,
   "xfgm": 0.38,
   "fga": 1
  },
  "Herbert Jones": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 2.14,
   "fga": 4
  },
  "Hugo González": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.35,
   "fga": 1
  },
  "Immanuel Quickley": {
   "gp": 1,
   "tpm": 4,
   "xtpm": 3.21,
   "fgm": 6,
   "xfgm": 5.2,
   "fga": 13
  },
  "Isaac Okoro": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.35,
   "fga": 1
  },
  "Isaiah Collier": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 3.92,
   "fga": 7
  },
  "Isaiah Crawford": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.38,
   "fgm": 1,
   "xfgm": 0.38,
   "fga": 1
  },
  "Isaiah Evans": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Isaiah Hartenstein": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.99,
   "fga": 4
  },
  "Isaiah Jackson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 6,
   "xfgm": 4.92,
   "fga": 8
  },
  "Isaiah Joe": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.45,
   "fgm": 2,
   "xfgm": 3.29,
   "fga": 9
  },
  "Ivica Zubac": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 7.62,
   "fga": 12
  },
  "Ja Morant": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.05,
   "fgm": 6,
   "xfgm": 3.71,
   "fga": 8
  },
  "Ja'Kobe Walter": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.78,
   "fgm": 4,
   "xfgm": 3.3,
   "fga": 8
  },
  "Ja'Kobi Gillespie": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.02,
   "fga": 2
  },
  "Jabari Smith Jr.": {
   "gp": 1,
   "tpm": 4,
   "xtpm": 2.8,
   "fgm": 11,
   "xfgm": 7.86,
   "fga": 17
  },
  "Jabari Walker": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Jaden Bradley": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.44,
   "fga": 1
  },
  "Jaden Hardy": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 1,
   "xfgm": 1.11,
   "fga": 3
  },
  "Jaden McDaniels": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.11,
   "fgm": 8,
   "xfgm": 4.86,
   "fga": 11
  },
  "Jae'Sean Tate": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.41,
   "fga": 1
  },
  "Jaime Jaquez Jr.": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 8,
   "xfgm": 7.12,
   "fga": 12
  },
  "Jake LaRavia": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.08,
   "fgm": 4,
   "xfgm": 2.43,
   "fga": 5
  },
  "Jakob Poeltl": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.67,
   "fga": 1
  },
  "Jalen Brunson": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 6,
   "xfgm": 8.69,
   "fga": 19
  },
  "Jalen Duren": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 7.59,
   "fga": 13
  },
  "Jalen Green": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.1,
   "fgm": 4,
   "xfgm": 5.17,
   "fga": 12
  },
  "Jalen Johnson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.4,
   "fgm": 7,
   "xfgm": 10.07,
   "fga": 19
  },
  "Jalen Pickett": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 0.35,
   "fga": 1
  },
  "Jalen Smith": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.08,
   "fgm": 5,
   "xfgm": 5.57,
   "fga": 10
  },
  "Jalen Suggs": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.76,
   "fgm": 2,
   "xfgm": 3.54,
   "fga": 8
  },
  "Jalen Williams": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 5,
   "xfgm": 7.99,
   "fga": 16
  },
  "Jamal Cain": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 0,
   "xfgm": 1.14,
   "fga": 3
  },
  "Jamal Shead": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 1.35,
   "fga": 2
  },
  "Jamaree Bouyea": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.44,
   "fga": 1
  },
  "Jamison Battle": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 0.7,
   "fgm": 3,
   "xfgm": 2.05,
   "fga": 4
  },
  "Jarace Walker": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 1,
   "xfgm": 2.81,
   "fga": 6
  },
  "Jared McCain": {
   "gp": 1,
   "tpm": 6,
   "xtpm": 2.8,
   "fgm": 7,
   "xfgm": 3.21,
   "fga": 9
  },
  "Jaren Jackson Jr.": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.46,
   "fgm": 6,
   "xfgm": 4.56,
   "fga": 10
  },
  "Jase Richardson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.7,
   "fga": 3
  },
  "Javonte Green": {
   "gp": 1,
   "tpm": 5,
   "xtpm": 2.89,
   "fgm": 5,
   "xfgm": 4.0,
   "fga": 10
  },
  "Jaxson Hayes": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 1.7,
   "fga": 3
  },
  "Jaylen Brown": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.43,
   "fgm": 7,
   "xfgm": 7.17,
   "fga": 14
  },
  "Jaylen Clark": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.44,
   "fga": 1
  },
  "Jaylen Wells": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.4,
   "fgm": 5,
   "xfgm": 4.91,
   "fga": 10
  },
  "Jaylin Sellers": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.73,
   "fgm": 1,
   "xfgm": 2.08,
   "fga": 4
  },
  "Jaylin Williams": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.78,
   "fgm": 1,
   "xfgm": 2.45,
   "fga": 6
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
   "gp": 1,
   "tpm": 0,
   "xtpm": 2.48,
   "fgm": 6,
   "xfgm": 10.03,
   "fga": 23
  },
  "Jerami Grant": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.4,
   "fgm": 4,
   "xfgm": 4.27,
   "fga": 9
  },
  "Jeremiah Fears": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.75,
   "fgm": 2,
   "xfgm": 4.62,
   "fga": 10
  },
  "Jericho Sims": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Joan Beringer": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 1.35,
   "fga": 2
  },
  "Jock Landale": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 4,
   "xfgm": 3.05,
   "fga": 5
  },
  "Joel Embiid": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.45,
   "fgm": 4,
   "xfgm": 6.4,
   "fga": 15
  },
  "John Collins": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 3,
   "xfgm": 3.27,
   "fga": 7
  },
  "Jonathan Kuminga": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.46,
   "fgm": 5,
   "xfgm": 4.09,
   "fga": 10
  },
  "Jonathan Mogbo": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Jordan Clarkson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.99,
   "fga": 4
  },
  "Jordan Goodwin": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 1,
   "xfgm": 1.49,
   "fga": 4
  },
  "Jordan Poole": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 0,
   "xfgm": 1.72,
   "fga": 4
  },
  "Jordan Walsh": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 1.02,
   "fga": 2
  },
  "Jose Alvarado": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.05,
   "fgm": 3,
   "xfgm": 3.51,
   "fga": 7
  },
  "Josh Giddey": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.43,
   "fgm": 1,
   "xfgm": 5.0,
   "fga": 10
  },
  "Josh Hart": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.75,
   "fgm": 5,
   "xfgm": 4.65,
   "fga": 10
  },
  "Josh Okogie": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.35,
   "fga": 1
  },
  "Jrue Holiday": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 2,
   "xfgm": 2.84,
   "fga": 6
  },
  "Julian Champagnie": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.16,
   "fgm": 3,
   "xfgm": 3.27,
   "fga": 8
  },
  "Julius Randle": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 1.78,
   "fgm": 11,
   "xfgm": 8.19,
   "fga": 18
  },
  "Justin Champagnie": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 3,
   "xfgm": 2.05,
   "fga": 4
  },
  "Karl-Anthony Towns": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 1.4,
   "fgm": 6,
   "xfgm": 4.03,
   "fga": 9
  },
  "Kasparas Jakučionis": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 4,
   "xfgm": 3.27,
   "fga": 7
  },
  "Kawhi Leonard": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.1,
   "fgm": 5,
   "xfgm": 7.78,
   "fga": 17
  },
  "Keaton Wagler": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 2.13,
   "fgm": 4,
   "xfgm": 3.21,
   "fga": 8
  },
  "Keegan Murray": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.43,
   "fgm": 1,
   "xfgm": 3.42,
   "fga": 8
  },
  "Kel'el Ware": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 3,
   "xfgm": 3.16,
   "fga": 6
  },
  "Keldon Johnson": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 4,
   "xfgm": 3.8,
   "fga": 8
  },
  "Kelly Oubre Jr.": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.11,
   "fgm": 2,
   "xfgm": 2.22,
   "fga": 5
  },
  "Kenrich Williams": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 0.35,
   "fga": 1
  },
  "Kentavious Caldwell-Pope": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.13,
   "fgm": 3,
   "xfgm": 3.01,
   "fga": 8
  },
  "Keon Ellis": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 3,
   "xfgm": 3.25,
   "fga": 7
  },
  "Kevin Durant": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.43,
   "fgm": 10,
   "xfgm": 7.4,
   "fga": 16
  },
  "Kevin Huerter": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.46,
   "fgm": 1,
   "xfgm": 1.46,
   "fga": 4
  },
  "Kevon Looney": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 2.87,
   "fga": 5
  },
  "Keyonte George": {
   "gp": 1,
   "tpm": 4,
   "xtpm": 2.1,
   "fgm": 7,
   "xfgm": 5.38,
   "fga": 12
  },
  "Khaman Maluach": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 1.35,
   "fga": 2
  },
  "Khris Middleton": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 1.08,
   "fga": 2
  },
  "Kingston Flemings": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 2.08,
   "fga": 5
  },
  "Klay Thompson": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 2.1,
   "fgm": 3,
   "xfgm": 2.1,
   "fga": 6
  },
  "Koa Peat": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 2.46,
   "fga": 4
  },
  "Kobe Sanders": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 2.34,
   "fga": 5
  },
  "Kris Dunn": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.78,
   "fgm": 2,
   "xfgm": 1.78,
   "fga": 5
  },
  "Kyle Anderson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.44,
   "fga": 1
  },
  "Kyle Filipowski": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.38,
   "fgm": 1,
   "xfgm": 1.06,
   "fga": 2
  },
  "Kyle Kuzma": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.4,
   "fgm": 2,
   "xfgm": 4.06,
   "fga": 9
  },
  "Kyrie Irving": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.43,
   "fgm": 6,
   "xfgm": 3.83,
   "fga": 9
  },
  "Kyshawn George": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 2.1,
   "fgm": 8,
   "xfgm": 7.26,
   "fga": 14
  },
  "LJ Cryer": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.4,
   "fgm": 3,
   "xfgm": 2.51,
   "fga": 6
  },
  "LaMelo Ball": {
   "gp": 1,
   "tpm": 5,
   "xtpm": 4.61,
   "fgm": 7,
   "xfgm": 6.36,
   "fga": 17
  },
  "Landry Shamet": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.4,
   "fgm": 2,
   "xfgm": 2.95,
   "fga": 7
  },
  "Larry Nance Jr.": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.35,
   "fga": 1
  },
  "Lauri Markkanen": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 2.45,
   "fgm": 4,
   "xfgm": 5.52,
   "fga": 13
  },
  "LeBron James": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 5,
   "xfgm": 7.29,
   "fga": 13
  },
  "Leonard Miller": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.4,
   "fgm": 2,
   "xfgm": 4.51,
   "fga": 9
  },
  "Liam McNeeley": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.38,
   "fgm": 0,
   "xfgm": 0.38,
   "fga": 1
  },
  "Luguentz Dort": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.75,
   "fgm": 2,
   "xfgm": 3.1,
   "fga": 7
  },
  "Luka Dončić": {
   "gp": 1,
   "tpm": 5,
   "xtpm": 4.19,
   "fgm": 7,
   "xfgm": 7.03,
   "fga": 18
  },
  "Luka Garza": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 1,
   "xfgm": 1.37,
   "fga": 3
  },
  "Luke Kornet": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.35,
   "fga": 2
  },
  "Malevy Leons": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 1.67,
   "fga": 4
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
   "gp": 1,
   "tpm": 4,
   "xtpm": 1.81,
   "fgm": 6,
   "xfgm": 3.07,
   "fga": 8
  },
  "Marcus Smart": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.4,
   "fgm": 4,
   "xfgm": 2.28,
   "fga": 6
  },
  "Matas Buzelis": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.4,
   "fgm": 2,
   "xfgm": 3.62,
   "fga": 8
  },
  "Matisse Thybulle": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.73,
   "fgm": 1,
   "xfgm": 2.08,
   "fga": 4
  },
  "Max Christie": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 2.51,
   "fgm": 2,
   "xfgm": 2.95,
   "fga": 8
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
   "gp": 1,
   "tpm": 5,
   "xtpm": 3.88,
   "fgm": 10,
   "xfgm": 9.38,
   "fga": 21
  },
  "Mikal Bridges": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 2,
   "xfgm": 4.04,
   "fga": 8
  },
  "Mikel Brown Jr.": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 2,
   "xfgm": 3.71,
   "fga": 8
  },
  "Miles Bridges": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.78,
   "fgm": 3,
   "xfgm": 5.12,
   "fga": 11
  },
  "Miles McBride": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.08,
   "fgm": 1,
   "xfgm": 1.9,
   "fga": 5
  },
  "Mitchell Robinson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.35,
   "fga": 2
  },
  "Morez Johnson Jr.": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 2.43,
   "fga": 5
  },
  "Moritz Wagner": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 1,
   "xfgm": 1.14,
   "fga": 3
  },
  "Moussa Cisse": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.67,
   "fga": 1
  },
  "Moussa Diabaté": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 6.95,
   "fga": 11
  },
  "Myles Turner": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.75,
   "fgm": 4,
   "xfgm": 3.1,
   "fga": 7
  },
  "Myron Gardner": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Naji Marshall": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.1,
   "fgm": 7,
   "xfgm": 5.61,
   "fga": 13
  },
  "Naz Reid": {
   "gp": 1,
   "tpm": 4,
   "xtpm": 3.53,
   "fgm": 8,
   "xfgm": 8.15,
   "fga": 19
  },
  "Neemias Queta": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 1.55,
   "fga": 3
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
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.11,
   "fga": 2
  },
  "Nickeil Alexander-Walker": {
   "gp": 1,
   "tpm": 5,
   "xtpm": 2.8,
   "fgm": 8,
   "xfgm": 6.31,
   "fga": 15
  },
  "Nikola Jović": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.11,
   "fgm": 2,
   "xfgm": 3.51,
   "fga": 8
  },
  "Nikola Vučević": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Nique Clifford": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 3,
   "xfgm": 3.28,
   "fga": 7
  },
  "Noa Essengue": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Noah Clowney": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 1.7,
   "fga": 3
  },
  "Nolan Traore": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 2.23,
   "fga": 4
  },
  "Norman Powell": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.1,
   "fgm": 3,
   "xfgm": 3.38,
   "fga": 9
  },
  "OG Anunoby": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 3.21,
   "fgm": 3,
   "xfgm": 5.0,
   "fga": 12
  },
  "Obi Toppin": {
   "gp": 1,
   "tpm": 4,
   "xtpm": 3.3,
   "fgm": 7,
   "xfgm": 5.32,
   "fga": 12
  },
  "Onyeka Okongwu": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.4,
   "fgm": 3,
   "xfgm": 3.62,
   "fga": 8
  },
  "Oso Ighodaro": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 4.01,
   "fga": 7
  },
  "Ousmane Dieng": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.43,
   "fgm": 2,
   "xfgm": 2.78,
   "fga": 6
  },
  "P.J. Washington": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.1,
   "fgm": 4,
   "xfgm": 3.38,
   "fga": 9
  },
  "Paolo Banchero": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 1.4,
   "fgm": 10,
   "xfgm": 6.06,
   "fga": 12
  },
  "Pascal Siakam": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 13,
   "xfgm": 11.56,
   "fga": 23
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
   "gp": 1,
   "tpm": 7,
   "xtpm": 4.22,
   "fgm": 12,
   "xfgm": 8.26,
   "fga": 21
  },
  "Paul Reed": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.55,
   "fga": 3
  },
  "Payton Pritchard": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.75,
   "fgm": 4,
   "xfgm": 3.44,
   "fga": 9
  },
  "Pelle Larsson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.79,
   "fga": 2
  },
  "Precious Achiuwa": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.38,
   "fgm": 5,
   "xfgm": 4.39,
   "fga": 8
  },
  "Quentin Grimes": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 4,
   "xfgm": 3.84,
   "fga": 7
  },
  "Quenton Jackson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.79,
   "fga": 3
  },
  "Quinten Post": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.76,
   "fgm": 3,
   "xfgm": 2.11,
   "fga": 4
  },
  "RJ Barrett": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.11,
   "fgm": 8,
   "xfgm": 8.06,
   "fga": 14
  },
  "Rasheer Fleming": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.4,
   "fgm": 0,
   "xfgm": 1.84,
   "fga": 5
  },
  "Reed Sheppard": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 2.1,
   "fgm": 1,
   "xfgm": 2.1,
   "fga": 6
  },
  "Robert Williams III": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 1.79,
   "fga": 3
  },
  "Ronald Holland II": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.35,
   "fga": 1
  },
  "Royce O'Neale": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.75,
   "fgm": 3,
   "xfgm": 2.42,
   "fga": 6
  },
  "Rudy Gobert": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 1.11,
   "fga": 2
  },
  "Rui Hachimura": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.51,
   "fgm": 3,
   "xfgm": 5.05,
   "fga": 13
  },
  "Ryan Conwell": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.35,
   "fga": 1
  },
  "Ryan Dunn": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.35,
   "fga": 1
  },
  "Ryan Kalkbrenner": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.79,
   "fga": 3
  },
  "Ryan Rollins": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.75,
   "fgm": 4,
   "xfgm": 6.32,
   "fga": 14
  },
  "Saddiq Bey": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.4,
   "fgm": 4,
   "xfgm": 3.83,
   "fga": 9
  },
  "Sam Hauser": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 1.75,
   "fgm": 4,
   "xfgm": 2.86,
   "fga": 7
  },
  "Sandro Mamukelashvili": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 2.81,
   "fga": 5
  },
  "Scoot Henderson": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 2.16,
   "fgm": 7,
   "xfgm": 6.35,
   "fga": 14
  },
  "Scottie Barnes": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.08,
   "fgm": 8,
   "xfgm": 9.4,
   "fga": 19
  },
  "Scotty Pippen Jr.": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.05,
   "fgm": 2,
   "xfgm": 2.8,
   "fga": 7
  },
  "Sergio de Larrea": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.35,
   "fga": 1
  },
  "Shai Gilgeous-Alexander": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 2.45,
   "fgm": 13,
   "xfgm": 11.37,
   "fga": 27
  },
  "Sidy Cissoko": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.05,
   "fgm": 1,
   "xfgm": 1.05,
   "fga": 3
  },
  "Simone Fontecchio": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Sion James": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 2.16,
   "fgm": 1,
   "xfgm": 2.6,
   "fga": 7
  },
  "Stephen Curry": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.48,
   "fgm": 7,
   "xfgm": 6.9,
   "fga": 15
  },
  "Stephon Castle": {
   "gp": 1,
   "tpm": 5,
   "xtpm": 4.19,
   "fgm": 9,
   "xfgm": 9.29,
   "fga": 21
  },
  "Svi Mykhailiuk": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.05,
   "fgm": 4,
   "xfgm": 2.4,
   "fga": 5
  },
  "Tari Eason": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 1.11,
   "fga": 2
  },
  "Tarris Reed Jr.": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Terrence Shannon Jr": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.48,
   "fgm": 3,
   "xfgm": 3.59,
   "fga": 9
  },
  "Tim Hardaway Jr.": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 2.48,
   "fgm": 1,
   "xfgm": 2.48,
   "fga": 7
  },
  "Tobe Awaka": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.67,
   "fga": 1
  },
  "Toumani Camara": {
   "gp": 1,
   "tpm": 4,
   "xtpm": 2.51,
   "fgm": 6,
   "xfgm": 3.86,
   "fga": 9
  },
  "Trae Young": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 2.1,
   "fgm": 4,
   "xfgm": 5.61,
   "fga": 13
  },
  "Trayce Jackson-Davis": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.14,
   "fga": 5
  },
  "Tre Johnson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 3,
   "xfgm": 2.66,
   "fga": 6
  },
  "Tre Jones": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 5,
   "xfgm": 4.33,
   "fga": 8
  },
  "Trey Lyles": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.41,
   "fga": 1
  },
  "Trey Murphy III": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.75,
   "fgm": 4,
   "xfgm": 5.29,
   "fga": 11
  },
  "Tristan da Silva": {
   "gp": 1,
   "tpm": 4,
   "xtpm": 3.53,
   "fgm": 5,
   "xfgm": 3.96,
   "fga": 11
  },
  "Ty Jerome": {
   "gp": 1,
   "tpm": 5,
   "xtpm": 3.49,
   "fgm": 17,
   "xfgm": 11.25,
   "fga": 25
  },
  "Tyler Herro": {
   "gp": 1,
   "tpm": 4,
   "xtpm": 3.84,
   "fgm": 9,
   "xfgm": 9.15,
   "fga": 21
  },
  "Tyrese Haliburton": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.1,
   "fgm": 8,
   "xfgm": 6.72,
   "fga": 15
  },
  "Tyrese Maxey": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 3.18,
   "fgm": 9,
   "xfgm": 8.65,
   "fga": 19
  },
  "VJ Edgecombe": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.08,
   "fgm": 4,
   "xfgm": 5.3,
   "fga": 10
  },
  "Victor Wembanyama": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.4,
   "fgm": 1,
   "xfgm": 6.7,
   "fga": 13
  },
  "Vít Krejčí": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.7,
   "fgm": 0,
   "xfgm": 1.14,
   "fga": 3
  },
  "Walker Kessler": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 12,
   "xfgm": 7.86,
   "fga": 12
  },
  "Wendell Carter Jr.": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.08,
   "fgm": 8,
   "xfgm": 5.54,
   "fga": 10
  },
  "Will Richard": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.14,
   "fga": 5
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
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.4,
   "fgm": 5,
   "xfgm": 4.91,
   "fga": 11
  },
  "Yves Missi": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 5,
   "xfgm": 4.05,
   "fga": 6
  },
  "Zaccharie Risacher": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.4,
   "fgm": 2,
   "xfgm": 3.19,
   "fga": 7
  },
  "Zach Collins": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Zach Edey": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 3,
   "xfgm": 2.9,
   "fga": 5
  },
  "Zach LaVine": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 2.8,
   "fgm": 10,
   "xfgm": 8.92,
   "fga": 19
  },
  "Ziaire Williams": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.7,
   "fgm": 4,
   "xfgm": 3.33,
   "fga": 7
  },
  "Zion Williamson": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.4,
   "fgm": 7,
   "xfgm": 9.26,
   "fga": 16
  }
 }
};
