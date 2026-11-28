// ============================================================
//  DYNASTY LIVE — Saison-Form gegen Erwartung
// ============================================================
//  AUTO-GENERIERT von scripts/build-dynasty-live.js (tthq-sync).
//  Nicht von Hand editieren. Zuletzt aktualisiert: 2026-11-28
//  Stand der Saisondaten: 2026-11-27
//
//  Nur signifikante Bewegungen (≥ 8 Spiele, |shift| ≥ 0.08).
//  liveRank ersetzt im Trade Analyzer/Finder den Dynasty-Rang, wenn
//  "Live-Form" eingeschaltet ist (Standard). data/rankings.js bleibt unverändert.
//
//  Shape: { name, baseRank, liveRank, delta, games, expRank, seasonRank, shift, source }
//  delta > 0 = besser als erwartet (Rang steigt), delta < 0 = schlechter.
//  expRank/seasonRank = Rang im gemeinsamen Pool (Projection vs. Saison).
// ============================================================

const DYNASTY_LIVE_META = {"mode":"season","date":"2026-11-27","pool":349,"expectation":"snapshots/projections-2026-27-opening-night.js"};

const DYNASTY_LIVE = [
  { name: "Alperen Şengün", baseRank: 14, liveRank: 12, delta: 2, games: 17, expRank: 56, seasonRank: 17, shift: 0.16, source: "season" },
  { name: "Amen Thompson", baseRank: 17, liveRank: 21, delta: -4, games: 18, expRank: 17, seasonRank: 70, shift: -0.2, source: "season" },
  { name: "Donovan Mitchell", baseRank: 20, liveRank: 22, delta: -2, games: 18, expRank: 8, seasonRank: 22, shift: -0.09, source: "season" },
  { name: "Darryn Peterson", baseRank: 21, liveRank: 19, delta: 2, games: 19, expRank: 161, seasonRank: 103, shift: 0.09, source: "season" },
  { name: "Trey Murphy III", baseRank: 25, liveRank: 28, delta: -3, games: 11, expRank: 14, seasonRank: 63, shift: -0.12, source: "season" },
  { name: "Trae Young", baseRank: 33, liveRank: 37, delta: -4, games: 19, expRank: 27, seasonRank: 66, shift: -0.11, source: "season" },
  { name: "LaMelo Ball", baseRank: 34, liveRank: 40, delta: -6, games: 19, expRank: 33, seasonRank: 87, shift: -0.15, source: "season" },
  { name: "Brandon Miller", baseRank: 35, liveRank: 40, delta: -5, games: 15, expRank: 41, seasonRank: 111, shift: -0.14, source: "season" },
  { name: "Josh Giddey", baseRank: 36, liveRank: 43, delta: -7, games: 18, expRank: 53, seasonRank: 157, shift: -0.18, source: "season" },
  { name: "VJ Edgecombe", baseRank: 41, liveRank: 36, delta: 5, games: 19, expRank: 65, seasonRank: 34, shift: 0.12, source: "season" },
  { name: "Darius Garland", baseRank: 42, liveRank: 48, delta: -6, games: 17, expRank: 37, seasonRank: 101, shift: -0.12, source: "season" },
  { name: "Stephon Castle", baseRank: 43, liveRank: 37, delta: 6, games: 19, expRank: 150, seasonRank: 74, shift: 0.14, source: "season" },
  { name: "Walker Kessler", baseRank: 44, liveRank: 41, delta: 3, games: 17, expRank: 36, seasonRank: 19, shift: 0.08, source: "season" },
  { name: "Darius Acuff Jr.", baseRank: 51, liveRank: 47, delta: 4, games: 18, expRank: 195, seasonRank: 126, shift: 0.09, source: "season" },
  { name: "Zach Edey", baseRank: 53, liveRank: 63, delta: -10, games: 15, expRank: 28, seasonRank: 104, shift: -0.18, source: "season" },
  { name: "Matas Buzelis", baseRank: 54, liveRank: 67, delta: -13, games: 18, expRank: 32, seasonRank: 109, shift: -0.22, source: "season" },
  { name: "Ivica Zubac", baseRank: 62, liveRank: 69, delta: -7, games: 14, expRank: 54, seasonRank: 179, shift: -0.11, source: "season" },
  { name: "Collin Murray-Boyles", baseRank: 63, liveRank: 69, delta: -6, games: 15, expRank: 81, seasonRank: 135, shift: -0.09, source: "season" },
  { name: "Kel'el Ware", baseRank: 66, liveRank: 88, delta: -22, games: 20, expRank: 30, seasonRank: 136, shift: -0.29, source: "season" },
  { name: "Naz Reid", baseRank: 67, liveRank: 77, delta: -10, games: 17, expRank: 59, seasonRank: 172, shift: -0.14, source: "season" },
  { name: "Kevin Durant", baseRank: 69, liveRank: 76, delta: -7, games: 19, expRank: 9, seasonRank: 27, shift: -0.1, source: "season" },
  { name: "Jaden McDaniels", baseRank: 70, liveRank: 59, delta: 11, games: 19, expRank: 51, seasonRank: 9, shift: 0.18, source: "season" },
  { name: "Derrick White", baseRank: 74, liveRank: 89, delta: -15, games: 17, expRank: 21, seasonRank: 97, shift: -0.18, source: "season" },
  { name: "Zion Williamson", baseRank: 76, liveRank: 65, delta: 11, games: 17, expRank: 97, seasonRank: 28, shift: 0.15, source: "season" },
  { name: "Jalen Suggs", baseRank: 82, liveRank: 93, delta: -11, games: 9, expRank: 70, seasonRank: 218, shift: -0.12, source: "season" },
  { name: "Reed Sheppard", baseRank: 84, liveRank: 96, delta: -12, games: 16, expRank: 95, seasonRank: 190, shift: -0.13, source: "season" },
  { name: "Kyshawn George", baseRank: 85, liveRank: 72, delta: 13, games: 19, expRank: 122, seasonRank: 52, shift: 0.17, source: "season" },
  { name: "Cedric Coward", baseRank: 87, liveRank: 72, delta: 15, games: 18, expRank: 100, seasonRank: 30, shift: 0.18, source: "season" },
  { name: "Ausar Thompson", baseRank: 90, liveRank: 82, delta: 8, games: 17, expRank: 68, seasonRank: 37, shift: 0.09, source: "season" },
  { name: "Jabari Smith Jr.", baseRank: 91, liveRank: 83, delta: 8, games: 19, expRank: 84, seasonRank: 46, shift: 0.1, source: "season" },
  { name: "Mikal Bridges", baseRank: 92, liveRank: 106, delta: -14, games: 19, expRank: 67, seasonRank: 185, shift: -0.14, source: "season" },
  { name: "Coby White", baseRank: 95, liveRank: 104, delta: -9, games: 10, expRank: 93, seasonRank: 237, shift: -0.09, source: "season" },
  { name: "Keegan Murray", baseRank: 97, liveRank: 107, delta: -10, games: 11, expRank: 60, seasonRank: 165, shift: -0.1, source: "season" },
  { name: "Ryan Rollins", baseRank: 103, liveRank: 129, delta: -26, games: 18, expRank: 52, seasonRank: 205, shift: -0.23, source: "season" },
  { name: "Ace Bailey", baseRank: 106, liveRank: 98, delta: 8, games: 19, expRank: 149, seasonRank: 99, shift: 0.08, source: "season" },
  { name: "Khaman Maluach", baseRank: 111, liveRank: 121, delta: -10, games: 17, expRank: 102, seasonRank: 161, shift: -0.09, source: "season" },
  { name: "Payton Pritchard", baseRank: 112, liveRank: 125, delta: -13, games: 18, expRank: 66, seasonRank: 148, shift: -0.11, source: "season" },
  { name: "Egor Dëmin", baseRank: 117, liveRank: 128, delta: -11, games: 11, expRank: 126, seasonRank: 234, shift: -0.09, source: "season" },
  { name: "Miles Bridges", baseRank: 120, liveRank: 105, delta: 15, games: 17, expRank: 104, seasonRank: 36, shift: 0.13, source: "season" },
  { name: "Rudy Gobert", baseRank: 123, liveRank: 145, delta: -22, games: 18, expRank: 88, seasonRank: 286, shift: -0.16, source: "season" },
  { name: "Aday Mara", baseRank: 126, liveRank: 107, delta: 19, games: 16, expRank: 269, seasonRank: 112, shift: 0.17, source: "season" },
  { name: "Ayo Dosunmu", baseRank: 133, liveRank: 118, delta: 15, games: 19, expRank: 103, seasonRank: 41, shift: 0.12, source: "season" },
  { name: "Christian Braun", baseRank: 142, liveRank: 122, delta: 20, games: 16, expRank: 94, seasonRank: 32, shift: 0.15, source: "season" },
  { name: "Wendell Carter Jr.", baseRank: 145, liveRank: 130, delta: 15, games: 17, expRank: 128, seasonRank: 56, shift: 0.11, source: "season" },
  { name: "Moussa Diabaté", baseRank: 147, liveRank: 127, delta: 20, games: 15, expRank: 136, seasonRank: 49, shift: 0.15, source: "season" },
  { name: "Davion Mitchell", baseRank: 154, liveRank: 124, delta: 30, games: 18, expRank: 175, seasonRank: 33, shift: 0.22, source: "season" },
  { name: "Neemias Queta", baseRank: 156, liveRank: 175, delta: -19, games: 17, expRank: 61, seasonRank: 146, shift: -0.11, source: "season" },
  { name: "Andrew Wiggins", baseRank: 157, liveRank: 177, delta: -20, games: 18, expRank: 71, seasonRank: 171, shift: -0.12, source: "season" },
  { name: "Daniel Gafford", baseRank: 161, liveRank: 148, delta: 13, games: 18, expRank: 154, seasonRank: 85, shift: 0.08, source: "season" },
  { name: "Aaron Nesmith", baseRank: 162, liveRank: 179, delta: -17, games: 16, expRank: 101, seasonRank: 216, shift: -0.1, source: "season" },
  { name: "Gui Santos", baseRank: 169, liveRank: 191, delta: -22, games: 15, expRank: 111, seasonRank: 248, shift: -0.12, source: "season" },
  { name: "Mitchell Robinson", baseRank: 175, liveRank: 191, delta: -16, games: 14, expRank: 116, seasonRank: 238, shift: -0.09, source: "season" },
  { name: "Daniss Jenkins", baseRank: 180, liveRank: 159, delta: 21, games: 18, expRank: 197, seasonRank: 95, shift: 0.12, source: "season" },
  { name: "Jaylen Wells", baseRank: 190, liveRank: 174, delta: 16, games: 19, expRank: 215, seasonRank: 129, shift: 0.09, source: "season" },
  { name: "Jalen Smith", baseRank: 197, liveRank: 162, delta: 35, games: 15, expRank: 145, seasonRank: 26, shift: 0.2, source: "season" },
  { name: "Cam Spencer", baseRank: 199, liveRank: 176, delta: 23, games: 19, expRank: 146, seasonRank: 59, shift: 0.13, source: "season" },
  { name: "DeMar DeRozan", baseRank: 210, liveRank: 239, delta: -29, games: 15, expRank: 99, seasonRank: 274, shift: -0.13, source: "season" },
  { name: "Nolan Traoré", baseRank: 229, liveRank: 199, delta: 30, games: 14, expRank: 311, seasonRank: 142, shift: 0.14, source: "season" },
  { name: "Bennett Stirtz", baseRank: 234, liveRank: 208, delta: 26, games: 19, expRank: 343, seasonRank: 180, shift: 0.12, source: "season" },
  { name: "Jordan Poole", baseRank: 244, liveRank: 222, delta: 22, games: 13, expRank: 236, seasonRank: 105, shift: 0.09, source: "season" },
  { name: "Meleek Thomas", baseRank: 252, liveRank: 211, delta: 41, games: 16, expRank: 312, seasonRank: 123, shift: 0.18, source: "season" },
  { name: "Nikola Vučević", baseRank: 253, liveRank: 277, delta: -24, games: 14, expRank: 134, seasonRank: 278, shift: -0.09, source: "season" },
  { name: "Luke Kornet", baseRank: 265, liveRank: 287, delta: -22, games: 19, expRank: 133, seasonRank: 233, shift: -0.08, source: "season" },
  { name: "Duncan Robinson", baseRank: 305, liveRank: 279, delta: 26, games: 12, expRank: 177, seasonRank: 48, shift: 0.09, source: "season" },
  { name: "Ziaire Williams", baseRank: 342, liveRank: 312, delta: 30, games: 15, expRank: 225, seasonRank: 125, shift: 0.09, source: "season" },
  { name: "Klay Thompson", baseRank: 358, liveRank: 330, delta: 28, games: 17, expRank: 237, seasonRank: 93, shift: 0.08, source: "season" },
  { name: "Matisse Thybulle", baseRank: 384, liveRank: 347, delta: 37, games: 18, expRank: 156, seasonRank: 60, shift: 0.1, source: "season" },
  { name: "Tyrese Proctor", baseRank: 388, liveRank: 357, delta: 31, games: 18, expRank: 290, seasonRank: 194, shift: 0.08, source: "season" },
  { name: "Sidy Cissoko", baseRank: 429, liveRank: 383, delta: 46, games: 18, expRank: 326, seasonRank: 188, shift: 0.11, source: "season" },
  { name: "Caleb Martin", baseRank: 481, liveRank: 435, delta: 46, games: 14, expRank: 327, seasonRank: 116, shift: 0.1, source: "season" },
  { name: "Quenton Jackson", baseRank: 521, liveRank: 468, delta: 53, games: 19, expRank: 277, seasonRank: 132, shift: 0.11, source: "season" },
  { name: "Jamison Battle", baseRank: 549, liveRank: 507, delta: 42, games: 17, expRank: 328, seasonRank: 204, shift: 0.08, source: "season" }
];
