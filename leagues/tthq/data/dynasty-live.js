// ============================================================
//  DYNASTY LIVE — Saison-Form gegen Erwartung
// ============================================================
//  AUTO-GENERIERT von scripts/build-dynasty-live.js (tthq-sync).
//  Nicht von Hand editieren. Zuletzt aktualisiert: 2026-11-24
//  Stand der Saisondaten: 2026-11-23
//
//  Nur signifikante Bewegungen (≥ 8 Spiele, |shift| ≥ 0.08).
//  liveRank ersetzt im Trade Analyzer/Finder den Dynasty-Rang, wenn
//  "Live-Form" eingeschaltet ist (Standard). data/rankings.js bleibt unverändert.
//
//  Shape: { name, baseRank, liveRank, delta, games, expRank, seasonRank, shift, source }
//  delta > 0 = besser als erwartet (Rang steigt), delta < 0 = schlechter.
//  expRank/seasonRank = Rang im gemeinsamen Pool (Projection vs. Saison).
// ============================================================

const DYNASTY_LIVE_META = {"mode":"season","date":"2026-11-23","pool":351,"expectation":"snapshots/projections-2026-27-opening-night.js"};

const DYNASTY_LIVE = [
  { name: "Alperen Şengün", baseRank: 14, liveRank: 12, delta: 2, games: 15, expRank: 56, seasonRank: 12, shift: 0.18, source: "season" },
  { name: "Amen Thompson", baseRank: 17, liveRank: 20, delta: -3, games: 16, expRank: 17, seasonRank: 70, shift: -0.18, source: "season" },
  { name: "Donovan Mitchell", baseRank: 20, liveRank: 22, delta: -2, games: 16, expRank: 8, seasonRank: 29, shift: -0.11, source: "season" },
  { name: "Darryn Peterson", baseRank: 21, liveRank: 19, delta: 2, games: 18, expRank: 159, seasonRank: 98, shift: 0.1, source: "season" },
  { name: "Trey Murphy III", baseRank: 25, liveRank: 28, delta: -3, games: 10, expRank: 14, seasonRank: 56, shift: -0.11, source: "season" },
  { name: "Trae Young", baseRank: 33, liveRank: 37, delta: -4, games: 18, expRank: 27, seasonRank: 74, shift: -0.12, source: "season" },
  { name: "LaMelo Ball", baseRank: 34, liveRank: 40, delta: -6, games: 17, expRank: 33, seasonRank: 94, shift: -0.16, source: "season" },
  { name: "Brandon Miller", baseRank: 35, liveRank: 41, delta: -6, games: 14, expRank: 41, seasonRank: 126, shift: -0.15, source: "season" },
  { name: "Josh Giddey", baseRank: 36, liveRank: 42, delta: -6, games: 16, expRank: 53, seasonRank: 146, shift: -0.15, source: "season" },
  { name: "VJ Edgecombe", baseRank: 41, liveRank: 37, delta: 4, games: 17, expRank: 65, seasonRank: 36, shift: 0.1, source: "season" },
  { name: "Darius Garland", baseRank: 42, liveRank: 47, delta: -5, games: 15, expRank: 37, seasonRank: 101, shift: -0.12, source: "season" },
  { name: "Stephon Castle", baseRank: 43, liveRank: 39, delta: 4, games: 17, expRank: 148, seasonRank: 86, shift: 0.1, source: "season" },
  { name: "Walker Kessler", baseRank: 44, liveRank: 40, delta: 4, games: 16, expRank: 36, seasonRank: 18, shift: 0.08, source: "season" },
  { name: "Darius Acuff Jr.", baseRank: 51, liveRank: 45, delta: 6, games: 16, expRank: 194, seasonRank: 105, shift: 0.11, source: "season" },
  { name: "Zach Edey", baseRank: 53, liveRank: 63, delta: -10, games: 14, expRank: 28, seasonRank: 106, shift: -0.18, source: "season" },
  { name: "Matas Buzelis", baseRank: 54, liveRank: 67, delta: -13, games: 16, expRank: 32, seasonRank: 109, shift: -0.21, source: "season" },
  { name: "Kel'el Ware", baseRank: 66, liveRank: 89, delta: -23, games: 17, expRank: 30, seasonRank: 159, shift: -0.3, source: "season" },
  { name: "Naz Reid", baseRank: 67, liveRank: 77, delta: -10, games: 16, expRank: 59, seasonRank: 171, shift: -0.14, source: "season" },
  { name: "Kevin Durant", baseRank: 69, liveRank: 77, delta: -8, games: 17, expRank: 9, seasonRank: 32, shift: -0.11, source: "season" },
  { name: "Jaden McDaniels", baseRank: 70, liveRank: 64, delta: 6, games: 17, expRank: 51, seasonRank: 22, shift: 0.09, source: "season" },
  { name: "Derrick White", baseRank: 74, liveRank: 88, delta: -14, games: 16, expRank: 21, seasonRank: 95, shift: -0.17, source: "season" },
  { name: "Zion Williamson", baseRank: 76, liveRank: 65, delta: 11, games: 16, expRank: 97, seasonRank: 24, shift: 0.16, source: "season" },
  { name: "Jalen Suggs", baseRank: 82, liveRank: 92, delta: -10, games: 8, expRank: 70, seasonRank: 210, shift: -0.11, source: "season" },
  { name: "Reed Sheppard", baseRank: 84, liveRank: 93, delta: -9, games: 14, expRank: 95, seasonRank: 176, shift: -0.11, source: "season" },
  { name: "Kyshawn George", baseRank: 85, liveRank: 74, delta: 11, games: 18, expRank: 121, seasonRank: 57, shift: 0.14, source: "season" },
  { name: "Cedric Coward", baseRank: 87, liveRank: 73, delta: 14, games: 17, expRank: 100, seasonRank: 30, shift: 0.18, source: "season" },
  { name: "Jabari Smith Jr.", baseRank: 91, liveRank: 80, delta: 11, games: 17, expRank: 84, seasonRank: 34, shift: 0.13, source: "season" },
  { name: "Mikal Bridges", baseRank: 92, liveRank: 106, delta: -14, games: 17, expRank: 67, seasonRank: 195, shift: -0.14, source: "season" },
  { name: "Coby White", baseRank: 95, liveRank: 104, delta: -9, games: 9, expRank: 93, seasonRank: 253, shift: -0.09, source: "season" },
  { name: "Keegan Murray", baseRank: 97, liveRank: 106, delta: -9, games: 9, expRank: 60, seasonRank: 160, shift: -0.09, source: "season" },
  { name: "Anthony Black", baseRank: 100, liveRank: 88, delta: 12, games: 13, expRank: 133, seasonRank: 58, shift: 0.13, source: "season" },
  { name: "Ryan Rollins", baseRank: 103, liveRank: 126, delta: -23, games: 15, expRank: 52, seasonRank: 199, shift: -0.2, source: "season" },
  { name: "Payton Pritchard", baseRank: 112, liveRank: 124, delta: -12, games: 17, expRank: 66, seasonRank: 141, shift: -0.1, source: "season" },
  { name: "Egor Dëmin", baseRank: 117, liveRank: 127, delta: -10, games: 9, expRank: 125, seasonRank: 236, shift: -0.08, source: "season" },
  { name: "Miles Bridges", baseRank: 120, liveRank: 105, delta: 15, games: 15, expRank: 104, seasonRank: 31, shift: 0.14, source: "season" },
  { name: "Rudy Gobert", baseRank: 123, liveRank: 144, delta: -21, games: 16, expRank: 88, seasonRank: 288, shift: -0.16, source: "season" },
  { name: "Aday Mara", baseRank: 126, liveRank: 106, delta: 20, games: 16, expRank: 270, seasonRank: 108, shift: 0.17, source: "season" },
  { name: "Ayo Dosunmu", baseRank: 133, liveRank: 118, delta: 15, games: 17, expRank: 103, seasonRank: 39, shift: 0.12, source: "season" },
  { name: "Christian Braun", baseRank: 142, liveRank: 123, delta: 19, games: 15, expRank: 94, seasonRank: 33, shift: 0.14, source: "season" },
  { name: "Wendell Carter Jr.", baseRank: 145, liveRank: 132, delta: 13, games: 16, expRank: 127, seasonRank: 59, shift: 0.1, source: "season" },
  { name: "Moussa Diabaté", baseRank: 147, liveRank: 127, delta: 20, games: 14, expRank: 134, seasonRank: 46, shift: 0.15, source: "season" },
  { name: "Joan Beringer", baseRank: 148, liveRank: 162, delta: -14, games: 17, expRank: 129, seasonRank: 207, shift: -0.09, source: "season" },
  { name: "Davion Mitchell", baseRank: 154, liveRank: 122, delta: 32, games: 16, expRank: 174, seasonRank: 25, shift: 0.23, source: "season" },
  { name: "Neemias Queta", baseRank: 156, liveRank: 178, delta: -22, games: 16, expRank: 61, seasonRank: 170, shift: -0.13, source: "season" },
  { name: "Andrew Wiggins", baseRank: 157, liveRank: 177, delta: -20, games: 16, expRank: 71, seasonRank: 177, shift: -0.12, source: "season" },
  { name: "Daniel Gafford", baseRank: 161, liveRank: 148, delta: 13, games: 17, expRank: 152, seasonRank: 79, shift: 0.09, source: "season" },
  { name: "Aaron Nesmith", baseRank: 162, liveRank: 178, delta: -16, games: 15, expRank: 101, seasonRank: 216, shift: -0.1, source: "season" },
  { name: "Gui Santos", baseRank: 169, liveRank: 195, delta: -26, games: 14, expRank: 111, seasonRank: 292, shift: -0.14, source: "season" },
  { name: "Mitchell Robinson", baseRank: 175, liveRank: 191, delta: -16, games: 14, expRank: 116, seasonRank: 237, shift: -0.09, source: "season" },
  { name: "Daniss Jenkins", baseRank: 180, liveRank: 160, delta: 20, games: 16, expRank: 197, seasonRank: 92, shift: 0.12, source: "season" },
  { name: "Jalen Smith", baseRank: 197, liveRank: 161, delta: 36, games: 14, expRank: 143, seasonRank: 23, shift: 0.2, source: "season" },
  { name: "Cam Spencer", baseRank: 199, liveRank: 174, delta: 25, games: 18, expRank: 144, seasonRank: 52, shift: 0.14, source: "season" },
  { name: "Malik Monk", baseRank: 208, liveRank: 227, delta: -19, games: 15, expRank: 140, seasonRank: 278, shift: -0.09, source: "season" },
  { name: "DeMar DeRozan", baseRank: 210, liveRank: 238, delta: -28, games: 14, expRank: 99, seasonRank: 274, shift: -0.12, source: "season" },
  { name: "Pelle Larsson", baseRank: 211, liveRank: 193, delta: 18, games: 13, expRank: 193, seasonRank: 104, shift: 0.09, source: "season" },
  { name: "Nolan Traoré", baseRank: 229, liveRank: 198, delta: 31, games: 14, expRank: 312, seasonRank: 138, shift: 0.14, source: "season" },
  { name: "Bennett Stirtz", baseRank: 234, liveRank: 210, delta: 24, games: 17, expRank: 345, seasonRank: 180, shift: 0.11, source: "season" },
  { name: "Meleek Thomas", baseRank: 252, liveRank: 211, delta: 41, games: 14, expRank: 313, seasonRank: 114, shift: 0.18, source: "season" },
  { name: "Nikola Vučević", baseRank: 253, liveRank: 277, delta: -24, games: 14, expRank: 132, seasonRank: 273, shift: -0.09, source: "season" },
  { name: "Luke Kornet", baseRank: 265, liveRank: 290, delta: -25, games: 17, expRank: 131, seasonRank: 250, shift: -0.09, source: "season" },
  { name: "Duncan Robinson", baseRank: 305, liveRank: 278, delta: 27, games: 12, expRank: 176, seasonRank: 45, shift: 0.09, source: "season" },
  { name: "Ziaire Williams", baseRank: 342, liveRank: 308, delta: 34, games: 14, expRank: 225, seasonRank: 112, shift: 0.1, source: "season" },
  { name: "Klay Thompson", baseRank: 358, liveRank: 329, delta: 29, games: 15, expRank: 237, seasonRank: 84, shift: 0.08, source: "season" },
  { name: "Tyrese Proctor", baseRank: 388, liveRank: 347, delta: 41, games: 16, expRank: 291, seasonRank: 162, shift: 0.11, source: "season" },
  { name: "Sidy Cissoko", baseRank: 429, liveRank: 389, delta: 40, games: 17, expRank: 327, seasonRank: 201, shift: 0.1, source: "season" },
  { name: "Quenton Jackson", baseRank: 521, liveRank: 466, delta: 55, games: 17, expRank: 278, seasonRank: 123, shift: 0.11, source: "season" }
];
