// ============================================================
//  DYNASTY LIVE — Saison-Form gegen Erwartung
// ============================================================
//  AUTO-GENERIERT von scripts/build-dynasty-live.js (tthq-sync).
//  Nicht von Hand editieren. Zuletzt aktualisiert: 2026-11-25
//  Stand der Saisondaten: 2026-11-24
//
//  Nur signifikante Bewegungen (≥ 8 Spiele, |shift| ≥ 0.08).
//  liveRank ersetzt im Trade Analyzer/Finder den Dynasty-Rang, wenn
//  "Live-Form" eingeschaltet ist (Standard). data/rankings.js bleibt unverändert.
//
//  Shape: { name, baseRank, liveRank, delta, games, expRank, seasonRank, shift, source }
//  delta > 0 = besser als erwartet (Rang steigt), delta < 0 = schlechter.
//  expRank/seasonRank = Rang im gemeinsamen Pool (Projection vs. Saison).
// ============================================================

const DYNASTY_LIVE_META = {"mode":"season","date":"2026-11-24","pool":353,"expectation":"snapshots/projections-2026-27-opening-night.js"};

const DYNASTY_LIVE = [
  { name: "Alperen Şengün", baseRank: 14, liveRank: 12, delta: 2, games: 16, expRank: 56, seasonRank: 13, shift: 0.18, source: "season" },
  { name: "Amen Thompson", baseRank: 17, liveRank: 20, delta: -3, games: 17, expRank: 17, seasonRank: 62, shift: -0.17, source: "season" },
  { name: "Donovan Mitchell", baseRank: 20, liveRank: 22, delta: -2, games: 17, expRank: 8, seasonRank: 23, shift: -0.09, source: "season" },
  { name: "Darryn Peterson", baseRank: 21, liveRank: 19, delta: 2, games: 19, expRank: 161, seasonRank: 106, shift: 0.09, source: "season" },
  { name: "Trey Murphy III", baseRank: 25, liveRank: 28, delta: -3, games: 11, expRank: 14, seasonRank: 64, shift: -0.13, source: "season" },
  { name: "Trae Young", baseRank: 33, liveRank: 37, delta: -4, games: 18, expRank: 27, seasonRank: 73, shift: -0.12, source: "season" },
  { name: "LaMelo Ball", baseRank: 34, liveRank: 40, delta: -6, games: 18, expRank: 33, seasonRank: 91, shift: -0.15, source: "season" },
  { name: "Brandon Miller", baseRank: 35, liveRank: 41, delta: -6, games: 14, expRank: 41, seasonRank: 127, shift: -0.16, source: "season" },
  { name: "Josh Giddey", baseRank: 36, liveRank: 43, delta: -7, games: 17, expRank: 53, seasonRank: 160, shift: -0.17, source: "season" },
  { name: "VJ Edgecombe", baseRank: 41, liveRank: 37, delta: 4, games: 17, expRank: 65, seasonRank: 36, shift: 0.1, source: "season" },
  { name: "Darius Garland", baseRank: 42, liveRank: 47, delta: -5, games: 16, expRank: 37, seasonRank: 93, shift: -0.11, source: "season" },
  { name: "Stephon Castle", baseRank: 43, liveRank: 38, delta: 5, games: 18, expRank: 150, seasonRank: 75, shift: 0.13, source: "season" },
  { name: "Darius Acuff Jr.", baseRank: 51, liveRank: 46, delta: 5, games: 17, expRank: 196, seasonRank: 113, shift: 0.11, source: "season" },
  { name: "Zach Edey", baseRank: 53, liveRank: 63, delta: -10, games: 14, expRank: 28, seasonRank: 107, shift: -0.18, source: "season" },
  { name: "Matas Buzelis", baseRank: 54, liveRank: 67, delta: -13, games: 17, expRank: 32, seasonRank: 108, shift: -0.21, source: "season" },
  { name: "Ivica Zubac", baseRank: 62, liveRank: 67, delta: -5, games: 13, expRank: 54, seasonRank: 137, shift: -0.08, source: "season" },
  { name: "Collin Murray-Boyles", baseRank: 63, liveRank: 69, delta: -6, games: 15, expRank: 81, seasonRank: 135, shift: -0.09, source: "season" },
  { name: "Kel'el Ware", baseRank: 66, liveRank: 89, delta: -23, games: 18, expRank: 30, seasonRank: 152, shift: -0.3, source: "season" },
  { name: "Naz Reid", baseRank: 67, liveRank: 77, delta: -10, games: 16, expRank: 59, seasonRank: 176, shift: -0.14, source: "season" },
  { name: "Kevin Durant", baseRank: 69, liveRank: 75, delta: -6, games: 18, expRank: 9, seasonRank: 24, shift: -0.09, source: "season" },
  { name: "Jaden McDaniels", baseRank: 70, liveRank: 62, delta: 8, games: 18, expRank: 51, seasonRank: 16, shift: 0.13, source: "season" },
  { name: "Derrick White", baseRank: 74, liveRank: 88, delta: -14, games: 16, expRank: 21, seasonRank: 94, shift: -0.17, source: "season" },
  { name: "Zion Williamson", baseRank: 76, liveRank: 66, delta: 10, games: 17, expRank: 97, seasonRank: 30, shift: 0.14, source: "season" },
  { name: "Jalen Suggs", baseRank: 82, liveRank: 93, delta: -11, games: 9, expRank: 70, seasonRank: 223, shift: -0.13, source: "season" },
  { name: "Reed Sheppard", baseRank: 84, liveRank: 95, delta: -11, games: 15, expRank: 95, seasonRank: 185, shift: -0.12, source: "season" },
  { name: "Kyshawn George", baseRank: 85, liveRank: 74, delta: 11, games: 18, expRank: 122, seasonRank: 58, shift: 0.14, source: "season" },
  { name: "Cedric Coward", baseRank: 87, liveRank: 73, delta: 14, games: 17, expRank: 100, seasonRank: 31, shift: 0.17, source: "season" },
  { name: "Ausar Thompson", baseRank: 90, liveRank: 82, delta: 8, games: 16, expRank: 68, seasonRank: 35, shift: 0.09, source: "season" },
  { name: "Jabari Smith Jr.", baseRank: 91, liveRank: 81, delta: 10, games: 18, expRank: 84, seasonRank: 39, shift: 0.12, source: "season" },
  { name: "Mikal Bridges", baseRank: 92, liveRank: 106, delta: -14, games: 17, expRank: 67, seasonRank: 200, shift: -0.15, source: "season" },
  { name: "Coby White", baseRank: 95, liveRank: 104, delta: -9, games: 9, expRank: 93, seasonRank: 253, shift: -0.09, source: "season" },
  { name: "Keegan Murray", baseRank: 97, liveRank: 107, delta: -10, games: 10, expRank: 60, seasonRank: 162, shift: -0.09, source: "season" },
  { name: "Anthony Black", baseRank: 100, liveRank: 92, delta: 8, games: 14, expRank: 135, seasonRank: 84, shift: 0.08, source: "season" },
  { name: "Ryan Rollins", baseRank: 103, liveRank: 128, delta: -25, games: 16, expRank: 52, seasonRank: 214, shift: -0.22, source: "season" },
  { name: "Ace Bailey", baseRank: 106, liveRank: 98, delta: 8, games: 19, expRank: 149, seasonRank: 100, shift: 0.08, source: "season" },
  { name: "Payton Pritchard", baseRank: 112, liveRank: 124, delta: -12, games: 17, expRank: 66, seasonRank: 144, shift: -0.1, source: "season" },
  { name: "Egor Dëmin", baseRank: 117, liveRank: 128, delta: -11, games: 10, expRank: 126, seasonRank: 236, shift: -0.09, source: "season" },
  { name: "Miles Bridges", baseRank: 120, liveRank: 104, delta: 16, games: 16, expRank: 104, seasonRank: 32, shift: 0.14, source: "season" },
  { name: "Rudy Gobert", baseRank: 123, liveRank: 143, delta: -20, games: 17, expRank: 88, seasonRank: 273, shift: -0.15, source: "season" },
  { name: "Aday Mara", baseRank: 126, liveRank: 106, delta: 20, games: 16, expRank: 272, seasonRank: 109, shift: 0.17, source: "season" },
  { name: "Ayo Dosunmu", baseRank: 133, liveRank: 117, delta: 16, games: 18, expRank: 103, seasonRank: 37, shift: 0.13, source: "season" },
  { name: "Christian Braun", baseRank: 142, liveRank: 123, delta: 19, games: 15, expRank: 94, seasonRank: 34, shift: 0.14, source: "season" },
  { name: "Wendell Carter Jr.", baseRank: 145, liveRank: 130, delta: 15, games: 17, expRank: 128, seasonRank: 54, shift: 0.11, source: "season" },
  { name: "Moussa Diabaté", baseRank: 147, liveRank: 128, delta: 19, games: 14, expRank: 136, seasonRank: 50, shift: 0.14, source: "season" },
  { name: "Davion Mitchell", baseRank: 154, liveRank: 122, delta: 32, games: 16, expRank: 176, seasonRank: 25, shift: 0.23, source: "season" },
  { name: "Neemias Queta", baseRank: 156, liveRank: 179, delta: -23, games: 16, expRank: 61, seasonRank: 179, shift: -0.14, source: "season" },
  { name: "Andrew Wiggins", baseRank: 157, liveRank: 177, delta: -20, games: 16, expRank: 71, seasonRank: 184, shift: -0.12, source: "season" },
  { name: "Daniel Gafford", baseRank: 161, liveRank: 147, delta: 14, games: 17, expRank: 154, seasonRank: 78, shift: 0.09, source: "season" },
  { name: "Aaron Nesmith", baseRank: 162, liveRank: 178, delta: -16, games: 15, expRank: 101, seasonRank: 215, shift: -0.1, source: "season" },
  { name: "Gui Santos", baseRank: 169, liveRank: 195, delta: -26, games: 14, expRank: 111, seasonRank: 293, shift: -0.14, source: "season" },
  { name: "Mitchell Robinson", baseRank: 175, liveRank: 191, delta: -16, games: 14, expRank: 116, seasonRank: 242, shift: -0.09, source: "season" },
  { name: "Daniss Jenkins", baseRank: 180, liveRank: 159, delta: 21, games: 17, expRank: 199, seasonRank: 92, shift: 0.13, source: "season" },
  { name: "Jalen Smith", baseRank: 197, liveRank: 162, delta: 35, games: 15, expRank: 145, seasonRank: 26, shift: 0.2, source: "season" },
  { name: "Cam Spencer", baseRank: 199, liveRank: 173, delta: 26, games: 18, expRank: 146, seasonRank: 51, shift: 0.14, source: "season" },
  { name: "DeMar DeRozan", baseRank: 210, liveRank: 238, delta: -28, games: 14, expRank: 99, seasonRank: 279, shift: -0.13, source: "season" },
  { name: "Pelle Larsson", baseRank: 211, liveRank: 193, delta: 18, games: 13, expRank: 195, seasonRank: 103, shift: 0.09, source: "season" },
  { name: "Nolan Traoré", baseRank: 229, liveRank: 199, delta: 30, games: 14, expRank: 314, seasonRank: 142, shift: 0.14, source: "season" },
  { name: "Bennett Stirtz", baseRank: 234, liveRank: 206, delta: 28, games: 18, expRank: 347, seasonRank: 169, shift: 0.13, source: "season" },
  { name: "Jordan Poole", baseRank: 244, liveRank: 222, delta: 22, games: 13, expRank: 238, seasonRank: 104, shift: 0.1, source: "season" },
  { name: "Meleek Thomas", baseRank: 252, liveRank: 210, delta: 42, games: 15, expRank: 315, seasonRank: 117, shift: 0.18, source: "season" },
  { name: "Nikola Vučević", baseRank: 253, liveRank: 277, delta: -24, games: 14, expRank: 134, seasonRank: 277, shift: -0.09, source: "season" },
  { name: "Luke Kornet", baseRank: 265, liveRank: 287, delta: -22, games: 18, expRank: 133, seasonRank: 235, shift: -0.08, source: "season" },
  { name: "Duncan Robinson", baseRank: 305, liveRank: 278, delta: 27, games: 12, expRank: 178, seasonRank: 46, shift: 0.09, source: "season" },
  { name: "Ziaire Williams", baseRank: 342, liveRank: 311, delta: 31, games: 15, expRank: 227, seasonRank: 122, shift: 0.1, source: "season" },
  { name: "Klay Thompson", baseRank: 358, liveRank: 328, delta: 30, games: 15, expRank: 239, seasonRank: 82, shift: 0.09, source: "season" },
  { name: "Matisse Thybulle", baseRank: 384, liveRank: 347, delta: 37, games: 18, expRank: 156, seasonRank: 60, shift: 0.1, source: "season" },
  { name: "Tyrese Proctor", baseRank: 388, liveRank: 355, delta: 33, games: 17, expRank: 293, seasonRank: 186, shift: 0.09, source: "season" },
  { name: "Sidy Cissoko", baseRank: 429, liveRank: 390, delta: 39, games: 17, expRank: 329, seasonRank: 205, shift: 0.09, source: "season" },
  { name: "Quenton Jackson", baseRank: 521, liveRank: 469, delta: 52, games: 18, expRank: 280, seasonRank: 133, shift: 0.11, source: "season" }
];
