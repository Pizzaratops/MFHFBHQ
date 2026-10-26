// ============================================================
//  x3PM / xFGM der laufenden Saison aus Play-by-Play
//  Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data (nicht unser Projekt, frei veröffentlichte Daten)
//  Methode: Josh Lloyd (joshlloydfantasy.com/research/xstats-method)
//  Erzeugt von scripts/xstats-pbp.py am 2026-10-26 · Saison 2026-27 · Stand 2026-10-22
//  Wird von scripts/build-live-projections.js gelesen (3PM, FG%).
//  META {"season": "2026-27", "assetUpdated": "Fri, 23 Oct 2026 12:24:00 GMT"}
// ============================================================
const XSTATS_PBP = {
 "meta": {
  "season": "2026-27",
  "through": "2026-10-22",
  "players": 345,
  "games": 16,
  "shots": 2820,
  "assetUpdated": "Fri, 23 Oct 2026 12:24:00 GMT",
  "zoneRates": {
   "C3": 0.3793,
   "AB3": 0.3462,
   "RA": 0.6739,
   "PAINT": 0.4357,
   "MID": 0.4084
  },
  "source": "Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data"
 },
 "players": {
  "AJ Green": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 0.73,
   "fgm": 2,
   "xfgm": 1.16,
   "fga": 3
  },
  "Aaron Gordon": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 1.42,
   "fgm": 6,
   "xfgm": 4.28,
   "fga": 9
  },
  "Aaron Wiggins": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 1.73,
   "fgm": 5,
   "xfgm": 3.95,
   "fga": 9
  },
  "Ace Bailey": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.83,
   "fgm": 5,
   "xfgm": 5.34,
   "fga": 11
  },
  "Aday Mara": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 4.48,
   "fga": 7
  },
  "Adem Bona": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.02,
   "fga": 2
  },
  "Ajay Mitchell": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 1.73,
   "fgm": 7,
   "xfgm": 9.68,
   "fga": 19
  },
  "Al Horford": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.04,
   "fgm": 0,
   "xfgm": 1.04,
   "fga": 3
  },
  "Alex Caruso": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 2.46,
   "fgm": 6,
   "xfgm": 4.91,
   "fga": 11
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
   "xtpm": 1.04,
   "fgm": 3,
   "xfgm": 4.34,
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
   "xfgm": 2.51,
   "fga": 5
  },
  "Alperen Sengun": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 0.69,
   "fgm": 9,
   "xfgm": 7.52,
   "fga": 15
  },
  "Alpha Diallo": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.73,
   "fgm": 2,
   "xfgm": 2.07,
   "fga": 4
  },
  "Amen Thompson": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.69,
   "fgm": 6,
   "xfgm": 6.72,
   "fga": 12
  },
  "Andre Drummond": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 5,
   "xfgm": 8.28,
   "fga": 13
  },
  "Andrew Nembhard": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.04,
   "fgm": 6,
   "xfgm": 4.8,
   "fga": 10
  },
  "Andrew Wiggins": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.45,
   "fgm": 5,
   "xfgm": 4.92,
   "fga": 11
  },
  "Anfernee Simons": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 4.19,
   "fgm": 5,
   "xfgm": 5.03,
   "fga": 14
  },
  "Anthony Davis": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 11,
   "xfgm": 10.51,
   "fga": 20
  },
  "Anthony Edwards": {
   "gp": 1,
   "tpm": 9,
   "xtpm": 5.95,
   "fgm": 16,
   "xfgm": 10.99,
   "fga": 29
  },
  "Ausar Thompson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 4,
   "xfgm": 3.61,
   "fga": 8
  },
  "Austin Reaves": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 6,
   "xfgm": 5.48,
   "fga": 11
  },
  "Ayo Dosunmu": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 6,
   "xfgm": 6.32,
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
   "xtpm": 1.8,
   "fgm": 6,
   "xfgm": 5.53,
   "fga": 12
  },
  "Baylor Scheierman": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 0.69,
   "fgm": 3,
   "xfgm": 1.54,
   "fga": 4
  },
  "Ben Sheppard": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.69,
   "fgm": 1,
   "xfgm": 1.37,
   "fga": 3
  },
  "Bennedict Mathurin": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.04,
   "fgm": 3,
   "xfgm": 3.26,
   "fga": 7
  },
  "Bennett Stirtz": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.35,
   "fga": 1
  },
  "Bilal Coulibaly": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.07,
   "fgm": 4,
   "xfgm": 3.09,
   "fga": 6
  },
  "Bobby Portis Jr.": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.69,
   "fgm": 3,
   "xfgm": 1.97,
   "fga": 5
  },
  "Bogdan Bogdanović": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.69,
   "fgm": 2,
   "xfgm": 1.13,
   "fga": 3
  },
  "Bones Hyland": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.69,
   "fgm": 1,
   "xfgm": 0.69,
   "fga": 2
  },
  "Brandon Miller": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 4.85,
   "fgm": 7,
   "xfgm": 8.11,
   "fga": 21
  },
  "Brandon Williams": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 3,
   "xfgm": 5.86,
   "fga": 12
  },
  "Brayden Burries": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 0.69,
   "fgm": 3,
   "xfgm": 2.67,
   "fga": 6
  },
  "Brice Sensabaugh": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.69,
   "fgm": 1,
   "xfgm": 1.8,
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
   "xtpm": 1.04,
   "fgm": 7,
   "xfgm": 5.91,
   "fga": 12
  },
  "Brooks Barnhizer": {
   "gp": 2,
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
  "Bryce Hopkins": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.0,
   "fga": 0
  },
  "Bub Carrington": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.04,
   "fgm": 3,
   "xfgm": 2.35,
   "fga": 6
  },
  "Buddy Hield": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.04,
   "fgm": 0,
   "xfgm": 1.71,
   "fga": 4
  },
  "CJ McCollum": {
   "gp": 1,
   "tpm": 4,
   "xtpm": 2.08,
   "fgm": 7,
   "xfgm": 3.86,
   "fga": 9
  },
  "Cade Cunningham": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 2.11,
   "fgm": 8,
   "xfgm": 7.47,
   "fga": 18
  },
  "Caleb Wilson": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 2.9,
   "fgm": 7,
   "xfgm": 10.44,
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
   "xfgm": 2.13,
   "fga": 4
  },
  "Cameron Boozer": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 2.08,
   "fgm": 2,
   "xfgm": 7.4,
   "fga": 15
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
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.04,
   "fgm": 0,
   "xfgm": 1.04,
   "fga": 3
  },
  "Cason Wallace": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 3.53,
   "fgm": 6,
   "xfgm": 6.86,
   "fga": 16
  },
  "Cedric Coward": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.69,
   "fgm": 3,
   "xfgm": 3.15,
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
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.69,
   "fgm": 8,
   "xfgm": 10.09,
   "fga": 17
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
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 1.22,
   "fga": 3
  },
  "Christian Braun": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 2.14,
   "fgm": 3,
   "xfgm": 4.6,
   "fga": 10
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
   "xtpm": 2.77,
   "fgm": 0,
   "xfgm": 2.77,
   "fga": 8
  },
  "Collin Murray-Boyles": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 3.44,
   "fga": 7
  },
  "Cooper Flagg": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.38,
   "fgm": 10,
   "xfgm": 7.21,
   "fga": 17
  },
  "Craig Porter Jr.": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.44,
   "fga": 1
  },
  "DaRon Holmes II": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.69,
   "fgm": 1,
   "xfgm": 0.69,
   "fga": 2
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
   "xtpm": 3.49,
   "fgm": 7,
   "xfgm": 4.6,
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
   "xfgm": 1.22,
   "fga": 3
  },
  "Darius Acuff Jr.": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 2.42,
   "fgm": 5,
   "xfgm": 11.42,
   "fga": 24
  },
  "Darius Garland": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 2.77,
   "fgm": 11,
   "xfgm": 8.28,
   "fga": 19
  },
  "Darryn Peterson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 3,
   "xfgm": 3.44,
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
   "xtpm": 0.69,
   "fgm": 4,
   "xfgm": 3.54,
   "fga": 8
  },
  "Day'Ron Sharpe": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 2.89,
   "fga": 5
  },
  "De'Aaron Fox": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.73,
   "fgm": 6,
   "xfgm": 4.25,
   "fga": 9
  },
  "De'Andre Hunter": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 0.69,
   "fgm": 2,
   "xfgm": 1.97,
   "fga": 5
  },
  "De'Anthony Melton": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.69,
   "fgm": 0,
   "xfgm": 0.69,
   "fga": 2
  },
  "DeMar DeRozan": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.38,
   "fgm": 5,
   "xfgm": 4.26,
   "fga": 9
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
   "xtpm": 1.8,
   "fgm": 9,
   "xfgm": 8.84,
   "fga": 18
  },
  "Deni Avdija": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.38,
   "fgm": 7,
   "xfgm": 8.49,
   "fga": 16
  },
  "Dennis Schröder": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.04,
   "fgm": 7,
   "xfgm": 6.8,
   "fga": 13
  },
  "Derik Queen": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 2.22,
   "fga": 4
  },
  "Derrick Jones Jr.": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.69,
   "fgm": 3,
   "xfgm": 1.8,
   "fga": 4
  },
  "Derrick White": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 2.42,
   "fgm": 7,
   "xfgm": 5.28,
   "fga": 13
  },
  "Desmond Bane": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 3.56,
   "fgm": 5,
   "xfgm": 6.67,
   "fga": 15
  },
  "Devin Booker": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 5.98,
   "fga": 13
  },
  "Devin Vassell": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.42,
   "fgm": 2,
   "xfgm": 3.4,
   "fga": 8
  },
  "Dillon Brooks": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.69,
   "fgm": 4,
   "xfgm": 5.06,
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
   "xtpm": 1.38,
   "fgm": 4,
   "xfgm": 4.28,
   "fga": 9
  },
  "Donovan Mitchell": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.38,
   "fgm": 11,
   "xfgm": 8.82,
   "fga": 19
  },
  "Draymond Green": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 2.13,
   "fga": 4
  },
  "Duncan Robinson": {
   "gp": 1,
   "tpm": 5,
   "xtpm": 3.12,
   "fgm": 5,
   "xfgm": 3.55,
   "fga": 10
  },
  "Duop Reath": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.69,
   "fgm": 2,
   "xfgm": 1.37,
   "fga": 3
  },
  "Dylan Harper": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.69,
   "fgm": 7,
   "xfgm": 9.11,
   "fga": 17
  },
  "Dyson Daniels": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.69,
   "fgm": 8,
   "xfgm": 6.91,
   "fga": 13
  },
  "Egor Dëmin": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.73,
   "fgm": 2,
   "xfgm": 4.83,
   "fga": 10
  },
  "Emanuel Sharp": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.38,
   "fgm": 3,
   "xfgm": 2.47,
   "fga": 6
  },
  "Evan Mobley": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.38,
   "fgm": 7,
   "xfgm": 6.68,
   "fga": 13
  },
  "Franz Wagner": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.84,
   "fgm": 9,
   "xfgm": 9.47,
   "fga": 20
  },
  "Fred VanVleet": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.08,
   "fgm": 2,
   "xfgm": 3.19,
   "fga": 8
  },
  "GG Jackson": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 0.69,
   "fgm": 4,
   "xfgm": 3.78,
   "fga": 8
  },
  "Gary Payton II": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.04,
   "fgm": 5,
   "xfgm": 4.84,
   "fga": 9
  },
  "Georges Niang": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.38,
   "fgm": 3,
   "xfgm": 3.37,
   "fga": 8
  },
  "Giannis Antetokounmpo": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.69,
   "fgm": 13,
   "xfgm": 9.98,
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
   "xtpm": 0.69,
   "fgm": 3,
   "xfgm": 1.77,
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
   "xtpm": 2.77,
   "fgm": 6,
   "xfgm": 3.21,
   "fga": 9
  },
  "Gui Santos": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.07,
   "fgm": 5,
   "xfgm": 5.55,
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
   "xfgm": 2.13,
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
   "xtpm": 3.18,
   "fgm": 6,
   "xfgm": 5.16,
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
   "xfgm": 3.91,
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
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 5,
   "xfgm": 7.77,
   "fga": 14
  },
  "Isaiah Jackson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 6,
   "xfgm": 4.91,
   "fga": 8
  },
  "Isaiah Joe": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.42,
   "fgm": 2,
   "xfgm": 3.27,
   "fga": 9
  },
  "Ivica Zubac": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 7,
   "xfgm": 7.61,
   "fga": 12
  },
  "Ja Morant": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.04,
   "fgm": 6,
   "xfgm": 3.69,
   "fga": 8
  },
  "Ja'Kobe Walter": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.76,
   "fgm": 4,
   "xfgm": 3.28,
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
   "xtpm": 2.77,
   "fgm": 11,
   "xfgm": 7.83,
   "fga": 17
  },
  "Jabari Walker": {
   "gp": 2,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 0.67,
   "fga": 1
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
   "xtpm": 0.69,
   "fgm": 1,
   "xfgm": 1.1,
   "fga": 3
  },
  "Jaden McDaniels": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.1,
   "fgm": 8,
   "xfgm": 4.83,
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
   "xtpm": 1.04,
   "fgm": 8,
   "xfgm": 7.1,
   "fga": 12
  },
  "Jake LaRavia": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.07,
   "fgm": 4,
   "xfgm": 2.42,
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
   "xtpm": 1.04,
   "fgm": 6,
   "xfgm": 8.64,
   "fga": 19
  },
  "Jalen Duren": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 8,
   "xfgm": 7.57,
   "fga": 13
  },
  "Jalen Green": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.08,
   "fgm": 4,
   "xfgm": 5.14,
   "fga": 12
  },
  "Jalen Johnson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.38,
   "fgm": 7,
   "xfgm": 10.04,
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
   "xtpm": 1.07,
   "fgm": 5,
   "xfgm": 5.55,
   "fga": 10
  },
  "Jalen Suggs": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.76,
   "fgm": 2,
   "xfgm": 3.53,
   "fga": 8
  },
  "Jalen Williams": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 2.77,
   "fgm": 12,
   "xfgm": 14.88,
   "fga": 31
  },
  "Jamal Cain": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.69,
   "fgm": 0,
   "xfgm": 1.13,
   "fga": 3
  },
  "Jamal Murray": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 5.55,
   "fga": 11
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
  "James Harden": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 2.08,
   "fgm": 5,
   "xfgm": 5.17,
   "fga": 12
  },
  "Jamison Battle": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 0.69,
   "fgm": 3,
   "xfgm": 2.04,
   "fga": 4
  },
  "Jarace Walker": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 1,
   "xfgm": 2.79,
   "fga": 6
  },
  "Jared McCain": {
   "gp": 2,
   "tpm": 6,
   "xtpm": 3.81,
   "fgm": 8,
   "xfgm": 6.0,
   "fga": 15
  },
  "Jaren Jackson Jr.": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.45,
   "fgm": 6,
   "xfgm": 4.54,
   "fga": 10
  },
  "Jarrett Allen": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 6,
   "xfgm": 5.52,
   "fga": 10
  },
  "Jase Richardson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.69,
   "fga": 3
  },
  "Javonte Green": {
   "gp": 1,
   "tpm": 5,
   "xtpm": 2.87,
   "fgm": 5,
   "xfgm": 3.98,
   "fga": 10
  },
  "Jaxson Hayes": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 1.69,
   "fga": 3
  },
  "Jaylen Brown": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 2.49,
   "fgm": 17,
   "xfgm": 17.45,
   "fga": 34
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
   "xtpm": 1.38,
   "fgm": 5,
   "xfgm": 4.9,
   "fga": 10
  },
  "Jaylin Sellers": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.73,
   "fgm": 1,
   "xfgm": 2.07,
   "fga": 4
  },
  "Jaylin Williams": {
   "gp": 2,
   "tpm": 2,
   "xtpm": 3.15,
   "fgm": 2,
   "xfgm": 3.82,
   "fga": 10
  },
  "Jaylon Tyson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.38,
   "fgm": 1,
   "xfgm": 2.73,
   "fga": 6
  },
  "Jayson Kent": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.69,
   "fgm": 0,
   "xfgm": 1.8,
   "fga": 4
  },
  "Jayson Tatum": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 2.46,
   "fgm": 6,
   "xfgm": 9.98,
   "fga": 23
  },
  "Jerami Grant": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.38,
   "fgm": 4,
   "xfgm": 4.25,
   "fga": 9
  },
  "Jeremiah Fears": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.73,
   "fgm": 2,
   "xfgm": 4.6,
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
   "xfgm": 3.04,
   "fga": 5
  },
  "Joel Embiid": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 3.81,
   "fgm": 12,
   "xfgm": 14.35,
   "fga": 31
  },
  "John Collins": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.04,
   "fgm": 3,
   "xfgm": 3.26,
   "fga": 7
  },
  "Jonathan Kuminga": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.45,
   "fgm": 5,
   "xfgm": 4.07,
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
   "xfgm": 1.98,
   "fga": 4
  },
  "Jordan Goodwin": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 1,
   "xfgm": 1.47,
   "fga": 4
  },
  "Jordan Poole": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.04,
   "fgm": 0,
   "xfgm": 1.71,
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
   "xtpm": 1.04,
   "fgm": 3,
   "xfgm": 3.5,
   "fga": 7
  },
  "Josh Giddey": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.42,
   "fgm": 1,
   "xfgm": 4.98,
   "fga": 10
  },
  "Josh Hart": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.73,
   "fgm": 5,
   "xfgm": 4.62,
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
   "xtpm": 1.04,
   "fgm": 2,
   "xfgm": 2.82,
   "fga": 6
  },
  "Julian Champagnie": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.14,
   "fgm": 3,
   "xfgm": 3.25,
   "fga": 8
  },
  "Julius Randle": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 1.76,
   "fgm": 11,
   "xfgm": 8.14,
   "fga": 18
  },
  "Justin Champagnie": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.69,
   "fgm": 3,
   "xfgm": 2.04,
   "fga": 4
  },
  "Karl-Anthony Towns": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 1.38,
   "fgm": 6,
   "xfgm": 4.01,
   "fga": 9
  },
  "Kasparas Jakučionis": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 4,
   "xfgm": 3.26,
   "fga": 7
  },
  "Kawhi Leonard": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.08,
   "fgm": 5,
   "xfgm": 7.74,
   "fga": 17
  },
  "Keaton Wagler": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 2.11,
   "fgm": 4,
   "xfgm": 3.19,
   "fga": 8
  },
  "Keegan Murray": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.42,
   "fgm": 1,
   "xfgm": 3.4,
   "fga": 8
  },
  "Kel'el Ware": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.69,
   "fgm": 3,
   "xfgm": 3.15,
   "fga": 6
  },
  "Keldon Johnson": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.69,
   "fgm": 4,
   "xfgm": 3.78,
   "fga": 8
  },
  "Kelly Oubre Jr.": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.1,
   "fgm": 2,
   "xfgm": 2.21,
   "fga": 5
  },
  "Kenrich Williams": {
   "gp": 2,
   "tpm": 2,
   "xtpm": 1.07,
   "fgm": 2,
   "xfgm": 1.07,
   "fga": 3
  },
  "Kentavious Caldwell-Pope": {
   "gp": 2,
   "tpm": 3,
   "xtpm": 2.46,
   "fgm": 4,
   "xfgm": 3.33,
   "fga": 9
  },
  "Keon Ellis": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 3,
   "xfgm": 3.23,
   "fga": 7
  },
  "Kevin Durant": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.42,
   "fgm": 10,
   "xfgm": 7.36,
   "fga": 16
  },
  "Kevin Huerter": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.45,
   "fgm": 1,
   "xfgm": 1.45,
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
   "xtpm": 2.08,
   "fgm": 7,
   "xfgm": 5.35,
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
   "xfgm": 2.06,
   "fga": 5
  },
  "Klay Thompson": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 2.08,
   "fgm": 3,
   "xfgm": 2.08,
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
   "xfgm": 2.33,
   "fga": 5
  },
  "Kris Dunn": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.76,
   "fgm": 2,
   "xfgm": 1.76,
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
   "xfgm": 1.05,
   "fga": 2
  },
  "Kyle Kuzma": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.38,
   "fgm": 2,
   "xfgm": 4.04,
   "fga": 9
  },
  "Kyrie Irving": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.42,
   "fgm": 6,
   "xfgm": 3.81,
   "fga": 9
  },
  "Kyshawn George": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 2.08,
   "fgm": 8,
   "xfgm": 7.23,
   "fga": 14
  },
  "LJ Cryer": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.38,
   "fgm": 3,
   "xfgm": 2.49,
   "fga": 6
  },
  "LaMelo Ball": {
   "gp": 1,
   "tpm": 5,
   "xtpm": 4.57,
   "fgm": 7,
   "xfgm": 6.31,
   "fga": 17
  },
  "Landry Shamet": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.38,
   "fgm": 2,
   "xfgm": 2.93,
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
   "xtpm": 2.42,
   "fgm": 4,
   "xfgm": 5.49,
   "fga": 13
  },
  "LeBron James": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 2.42,
   "fgm": 10,
   "xfgm": 14.42,
   "fga": 27
  },
  "Leonard Miller": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.38,
   "fgm": 2,
   "xfgm": 4.49,
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
   "xtpm": 1.73,
   "fgm": 2,
   "xfgm": 3.08,
   "fga": 7
  },
  "Luka Dončić": {
   "gp": 1,
   "tpm": 5,
   "xtpm": 4.15,
   "fgm": 7,
   "xfgm": 6.98,
   "fga": 18
  },
  "Luka Garza": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.69,
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
   "xfgm": 1.65,
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
   "xtpm": 1.8,
   "fgm": 6,
   "xfgm": 3.05,
   "fga": 8
  },
  "Marcus Smart": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.38,
   "fgm": 4,
   "xfgm": 2.26,
   "fga": 6
  },
  "Mario Hezonja": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.73,
   "fgm": 5,
   "xfgm": 6.41,
   "fga": 13
  },
  "Marvin Bagley III": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 1.78,
   "fga": 3
  },
  "Matas Buzelis": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.38,
   "fgm": 2,
   "xfgm": 3.6,
   "fga": 8
  },
  "Matisse Thybulle": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.73,
   "fgm": 1,
   "xfgm": 2.07,
   "fga": 4
  },
  "Max Christie": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 2.49,
   "fgm": 2,
   "xfgm": 2.93,
   "fga": 8
  },
  "Micah Potter": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 1.22,
   "fga": 3
  },
  "Michael Porter Jr.": {
   "gp": 1,
   "tpm": 5,
   "xtpm": 3.84,
   "fgm": 10,
   "xfgm": 9.33,
   "fga": 21
  },
  "Mikal Bridges": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.69,
   "fgm": 2,
   "xfgm": 4.02,
   "fga": 8
  },
  "Mikel Brown Jr.": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 2,
   "xfgm": 3.69,
   "fga": 8
  },
  "Miles Bridges": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.76,
   "fgm": 3,
   "xfgm": 5.09,
   "fga": 11
  },
  "Miles McBride": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.07,
   "fgm": 1,
   "xfgm": 1.89,
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
   "xfgm": 2.42,
   "fga": 5
  },
  "Moritz Wagner": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.69,
   "fgm": 1,
   "xfgm": 1.13,
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
   "xfgm": 6.94,
   "fga": 11
  },
  "Myles Turner": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.73,
   "fgm": 4,
   "xfgm": 3.08,
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
   "xtpm": 2.08,
   "fgm": 7,
   "xfgm": 5.58,
   "fga": 13
  },
  "Naz Reid": {
   "gp": 1,
   "tpm": 4,
   "xtpm": 3.49,
   "fgm": 8,
   "xfgm": 8.1,
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
   "xtpm": 2.77,
   "fgm": 8,
   "xfgm": 6.27,
   "fga": 15
  },
  "Nikola Jokić": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 2.46,
   "fgm": 5,
   "xfgm": 8.37,
   "fga": 19
  },
  "Nikola Jović": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.1,
   "fgm": 2,
   "xfgm": 3.49,
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
   "xtpm": 0.69,
   "fgm": 3,
   "xfgm": 3.27,
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
   "xfgm": 1.69,
   "fga": 3
  },
  "Nolan Traore": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 2.22,
   "fga": 4
  },
  "Norman Powell": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.08,
   "fgm": 3,
   "xfgm": 3.36,
   "fga": 9
  },
  "OG Anunoby": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 3.18,
   "fgm": 3,
   "xfgm": 4.97,
   "fga": 12
  },
  "Obi Toppin": {
   "gp": 1,
   "tpm": 4,
   "xtpm": 3.28,
   "fgm": 7,
   "xfgm": 5.3,
   "fga": 12
  },
  "Onyeka Okongwu": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.38,
   "fgm": 3,
   "xfgm": 3.6,
   "fga": 8
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
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.42,
   "fgm": 2,
   "xfgm": 2.77,
   "fga": 6
  },
  "P.J. Washington": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.08,
   "fgm": 4,
   "xfgm": 3.36,
   "fga": 9
  },
  "Paolo Banchero": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 1.38,
   "fgm": 10,
   "xfgm": 6.03,
   "fga": 12
  },
  "Pascal Siakam": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 13,
   "xfgm": 11.52,
   "fga": 23
  },
  "Pat Spencer": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 0.78,
   "fga": 2
  },
  "Paul George": {
   "gp": 1,
   "tpm": 7,
   "xtpm": 4.19,
   "fgm": 12,
   "xfgm": 8.21,
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
   "xtpm": 1.73,
   "fgm": 4,
   "xfgm": 3.42,
   "fga": 9
  },
  "Pelle Larsson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 0,
   "xfgm": 0.78,
   "fga": 2
  },
  "Peyton Watson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.1,
   "fgm": 2,
   "xfgm": 3.06,
   "fga": 7
  },
  "Precious Achiuwa": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.38,
   "fgm": 5,
   "xfgm": 4.38,
   "fga": 8
  },
  "Quentin Grimes": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.69,
   "fgm": 4,
   "xfgm": 3.82,
   "fga": 7
  },
  "Quenton Jackson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 2,
   "xfgm": 1.78,
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
   "xtpm": 1.1,
   "fgm": 8,
   "xfgm": 8.04,
   "fga": 14
  },
  "Rasheer Fleming": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.38,
   "fgm": 0,
   "xfgm": 1.82,
   "fga": 5
  },
  "Reed Sheppard": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 2.08,
   "fgm": 1,
   "xfgm": 2.08,
   "fga": 6
  },
  "Robert Williams III": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 1,
   "xfgm": 1.78,
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
   "xtpm": 1.73,
   "fgm": 3,
   "xfgm": 2.4,
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
   "xtpm": 2.49,
   "fgm": 3,
   "xfgm": 5.02,
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
   "xfgm": 1.78,
   "fga": 3
  },
  "Ryan Nembhard": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 1.69,
   "fga": 3
  },
  "Ryan Rollins": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.73,
   "fgm": 4,
   "xfgm": 6.29,
   "fga": 14
  },
  "Saddiq Bey": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.38,
   "fgm": 4,
   "xfgm": 3.8,
   "fga": 9
  },
  "Sam Hauser": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 1.73,
   "fgm": 4,
   "xfgm": 2.84,
   "fga": 7
  },
  "Sam Merrill": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 2,
   "xfgm": 1.88,
   "fga": 5
  },
  "Sandro Mamukelashvili": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 2,
   "xfgm": 2.8,
   "fga": 5
  },
  "Scoot Henderson": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 2.14,
   "fgm": 7,
   "xfgm": 6.32,
   "fga": 14
  },
  "Scottie Barnes": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.07,
   "fgm": 8,
   "xfgm": 9.36,
   "fga": 19
  },
  "Scotty Pippen Jr.": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.04,
   "fgm": 2,
   "xfgm": 2.78,
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
   "gp": 2,
   "tpm": 6,
   "xtpm": 6.23,
   "fgm": 19,
   "xfgm": 18.74,
   "fga": 46
  },
  "Sidy Cissoko": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.04,
   "fgm": 1,
   "xfgm": 1.04,
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
   "xtpm": 2.14,
   "fgm": 1,
   "xfgm": 2.58,
   "fga": 7
  },
  "Stephen Curry": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.46,
   "fgm": 7,
   "xfgm": 6.87,
   "fga": 15
  },
  "Stephon Castle": {
   "gp": 1,
   "tpm": 5,
   "xtpm": 4.15,
   "fgm": 9,
   "xfgm": 9.24,
   "fga": 21
  },
  "Svi Mykhailiuk": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.04,
   "fgm": 4,
   "xfgm": 2.39,
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
   "xtpm": 2.46,
   "fgm": 3,
   "xfgm": 3.57,
   "fga": 9
  },
  "Tim Hardaway Jr.": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 2.46,
   "fgm": 1,
   "xfgm": 2.46,
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
   "xtpm": 2.49,
   "fgm": 6,
   "xfgm": 3.84,
   "fga": 9
  },
  "Trae Young": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 2.08,
   "fgm": 4,
   "xfgm": 5.58,
   "fga": 13
  },
  "Trayce Jackson-Davis": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.13,
   "fga": 5
  },
  "Tre Johnson": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.69,
   "fgm": 3,
   "xfgm": 2.65,
   "fga": 6
  },
  "Tre Jones": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 5,
   "xfgm": 4.32,
   "fga": 8
  },
  "Trevon Brazile": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.38,
   "fgm": 1,
   "xfgm": 2.73,
   "fga": 6
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
   "xtpm": 1.73,
   "fgm": 4,
   "xfgm": 5.27,
   "fga": 11
  },
  "Tristan da Silva": {
   "gp": 1,
   "tpm": 4,
   "xtpm": 3.49,
   "fgm": 5,
   "xfgm": 3.93,
   "fga": 11
  },
  "Ty Jerome": {
   "gp": 1,
   "tpm": 5,
   "xtpm": 3.46,
   "fgm": 17,
   "xfgm": 11.19,
   "fga": 25
  },
  "Tyler Herro": {
   "gp": 1,
   "tpm": 4,
   "xtpm": 3.81,
   "fgm": 9,
   "xfgm": 9.09,
   "fga": 21
  },
  "Tyrese Haliburton": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 2.08,
   "fgm": 8,
   "xfgm": 6.69,
   "fga": 15
  },
  "Tyrese Maxey": {
   "gp": 2,
   "tpm": 4,
   "xtpm": 5.61,
   "fgm": 21,
   "xfgm": 20.87,
   "fga": 42
  },
  "Tyrese Proctor": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 0,
   "xfgm": 0.44,
   "fga": 1
  },
  "Tyus Jones": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.35,
   "fgm": 1,
   "xfgm": 1.46,
   "fga": 3
  },
  "VJ Edgecombe": {
   "gp": 2,
   "tpm": 1,
   "xtpm": 2.46,
   "fgm": 8,
   "xfgm": 10.88,
   "fga": 21
  },
  "Victor Wembanyama": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.38,
   "fgm": 1,
   "xfgm": 6.68,
   "fga": 13
  },
  "Vít Krejčí": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.69,
   "fgm": 0,
   "xfgm": 1.13,
   "fga": 3
  },
  "Walker Kessler": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 12,
   "xfgm": 7.85,
   "fga": 12
  },
  "Wendell Carter Jr.": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.07,
   "fgm": 8,
   "xfgm": 5.52,
   "fga": 10
  },
  "Will Richard": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 4,
   "xfgm": 3.13,
   "fga": 5
  },
  "Yang Hansen": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.69,
   "fgm": 2,
   "xfgm": 1.8,
   "fga": 4
  },
  "Yaxel Lendeborg": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 1.38,
   "fgm": 5,
   "xfgm": 4.88,
   "fga": 11
  },
  "Yves Missi": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 0.0,
   "fgm": 5,
   "xfgm": 4.04,
   "fga": 6
  },
  "Zaccharie Risacher": {
   "gp": 1,
   "tpm": 0,
   "xtpm": 1.38,
   "fgm": 2,
   "xfgm": 3.17,
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
   "xfgm": 2.89,
   "fga": 5
  },
  "Zach LaVine": {
   "gp": 1,
   "tpm": 3,
   "xtpm": 2.77,
   "fgm": 10,
   "xfgm": 8.88,
   "fga": 19
  },
  "Ziaire Williams": {
   "gp": 1,
   "tpm": 1,
   "xtpm": 0.69,
   "fgm": 4,
   "xfgm": 3.32,
   "fga": 7
  },
  "Zion Williamson": {
   "gp": 1,
   "tpm": 2,
   "xtpm": 1.38,
   "fgm": 7,
   "xfgm": 9.23,
   "fga": 16
  }
 }
};
