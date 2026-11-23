// ============================================================
//  DYNASTY LIVE — Saison-Form gegen Erwartung
// ============================================================
//  AUTO-GENERIERT von scripts/build-dynasty-live.js (tthq-sync).
//  Nicht von Hand editieren. Zuletzt aktualisiert: 2026-11-23
//  Stand der Saisondaten: 2026-11-22
//
//  Nur signifikante Bewegungen (≥ 8 Spiele, |shift| ≥ 0.08).
//  liveRank ersetzt im Trade Analyzer/Finder den Dynasty-Rang, wenn
//  "Live-Form" eingeschaltet ist (Standard). data/rankings.js bleibt unverändert.
//
//  Shape: { name, baseRank, liveRank, delta, games, expRank, seasonRank, shift, source }
//  delta > 0 = besser als erwartet (Rang steigt), delta < 0 = schlechter.
//  expRank/seasonRank = Rang im gemeinsamen Pool (Projection vs. Saison).
// ============================================================

const DYNASTY_LIVE_META = {"mode":"season","date":"2026-11-22","pool":350,"expectation":"snapshots/projections-2026-27-opening-night.js"};

const DYNASTY_LIVE = [
  { name: "Alperen Şengün", baseRank: 14, liveRank: 12, delta: 2, games: 15, expRank: 56, seasonRank: 12, shift: 0.18, source: "season" },
  { name: "Amen Thompson", baseRank: 17, liveRank: 20, delta: -3, games: 16, expRank: 17, seasonRank: 68, shift: -0.18, source: "season" },
  { name: "Donovan Mitchell", baseRank: 20, liveRank: 22, delta: -2, games: 16, expRank: 8, seasonRank: 28, shift: -0.1, source: "season" },
  { name: "Darryn Peterson", baseRank: 21, liveRank: 19, delta: 2, games: 17, expRank: 159, seasonRank: 85, shift: 0.12, source: "season" },
  { name: "Trey Murphy III", baseRank: 25, liveRank: 28, delta: -3, games: 10, expRank: 14, seasonRank: 53, shift: -0.1, source: "season" },
  { name: "Trae Young", baseRank: 33, liveRank: 37, delta: -4, games: 17, expRank: 27, seasonRank: 74, shift: -0.12, source: "season" },
  { name: "LaMelo Ball", baseRank: 34, liveRank: 40, delta: -6, games: 17, expRank: 33, seasonRank: 97, shift: -0.16, source: "season" },
  { name: "Brandon Miller", baseRank: 35, liveRank: 41, delta: -6, games: 13, expRank: 41, seasonRank: 135, shift: -0.16, source: "season" },
  { name: "Josh Giddey", baseRank: 36, liveRank: 43, delta: -7, games: 15, expRank: 53, seasonRank: 181, shift: -0.18, source: "season" },
  { name: "VJ Edgecombe", baseRank: 41, liveRank: 37, delta: 4, games: 16, expRank: 65, seasonRank: 35, shift: 0.1, source: "season" },
  { name: "Darius Garland", baseRank: 42, liveRank: 47, delta: -5, games: 15, expRank: 37, seasonRank: 102, shift: -0.12, source: "season" },
  { name: "Stephon Castle", baseRank: 43, liveRank: 39, delta: 4, games: 17, expRank: 148, seasonRank: 92, shift: 0.09, source: "season" },
  { name: "Walker Kessler", baseRank: 44, liveRank: 40, delta: 4, games: 16, expRank: 36, seasonRank: 16, shift: 0.1, source: "season" },
  { name: "Darius Acuff Jr.", baseRank: 51, liveRank: 45, delta: 6, games: 16, expRank: 194, seasonRank: 103, shift: 0.12, source: "season" },
  { name: "Zach Edey", baseRank: 53, liveRank: 63, delta: -10, games: 13, expRank: 28, seasonRank: 108, shift: -0.17, source: "season" },
  { name: "Matas Buzelis", baseRank: 54, liveRank: 67, delta: -13, games: 15, expRank: 32, seasonRank: 116, shift: -0.21, source: "season" },
  { name: "Kel'el Ware", baseRank: 66, liveRank: 89, delta: -23, games: 17, expRank: 30, seasonRank: 158, shift: -0.3, source: "season" },
  { name: "Naz Reid", baseRank: 67, liveRank: 76, delta: -9, games: 15, expRank: 59, seasonRank: 171, shift: -0.13, source: "season" },
  { name: "Kevin Durant", baseRank: 69, liveRank: 77, delta: -8, games: 17, expRank: 9, seasonRank: 31, shift: -0.11, source: "season" },
  { name: "Jaden McDaniels", baseRank: 70, liveRank: 64, delta: 6, games: 17, expRank: 51, seasonRank: 22, shift: 0.09, source: "season" },
  { name: "Derrick White", baseRank: 74, liveRank: 86, delta: -12, games: 15, expRank: 21, seasonRank: 84, shift: -0.15, source: "season" },
  { name: "Zion Williamson", baseRank: 76, liveRank: 65, delta: 11, games: 16, expRank: 97, seasonRank: 24, shift: 0.16, source: "season" },
  { name: "Reed Sheppard", baseRank: 84, liveRank: 93, delta: -9, games: 14, expRank: 95, seasonRank: 175, shift: -0.1, source: "season" },
  { name: "Kyshawn George", baseRank: 85, liveRank: 74, delta: 11, games: 17, expRank: 121, seasonRank: 56, shift: 0.14, source: "season" },
  { name: "Cedric Coward", baseRank: 87, liveRank: 72, delta: 15, games: 16, expRank: 100, seasonRank: 26, shift: 0.19, source: "season" },
  { name: "Jabari Smith Jr.", baseRank: 91, liveRank: 79, delta: 12, games: 17, expRank: 84, seasonRank: 33, shift: 0.14, source: "season" },
  { name: "Mikal Bridges", baseRank: 92, liveRank: 105, delta: -13, games: 16, expRank: 67, seasonRank: 189, shift: -0.13, source: "season" },
  { name: "Coby White", baseRank: 95, liveRank: 104, delta: -9, games: 8, expRank: 93, seasonRank: 280, shift: -0.09, source: "season" },
  { name: "Keegan Murray", baseRank: 97, liveRank: 106, delta: -9, games: 9, expRank: 60, seasonRank: 160, shift: -0.09, source: "season" },
  { name: "Anthony Black", baseRank: 100, liveRank: 88, delta: 12, games: 12, expRank: 133, seasonRank: 55, shift: 0.13, source: "season" },
  { name: "Ryan Rollins", baseRank: 103, liveRank: 126, delta: -23, games: 15, expRank: 52, seasonRank: 203, shift: -0.2, source: "season" },
  { name: "Payton Pritchard", baseRank: 112, liveRank: 123, delta: -11, games: 16, expRank: 66, seasonRank: 141, shift: -0.1, source: "season" },
  { name: "Egor Dëmin", baseRank: 117, liveRank: 127, delta: -10, games: 9, expRank: 125, seasonRank: 237, shift: -0.08, source: "season" },
  { name: "Miles Bridges", baseRank: 120, liveRank: 104, delta: 16, games: 15, expRank: 104, seasonRank: 29, shift: 0.14, source: "season" },
  { name: "Rudy Gobert", baseRank: 123, liveRank: 144, delta: -21, games: 16, expRank: 88, seasonRank: 285, shift: -0.15, source: "season" },
  { name: "Aday Mara", baseRank: 126, liveRank: 106, delta: 20, games: 16, expRank: 270, seasonRank: 107, shift: 0.17, source: "season" },
  { name: "Ayo Dosunmu", baseRank: 133, liveRank: 118, delta: 15, games: 17, expRank: 103, seasonRank: 39, shift: 0.12, source: "season" },
  { name: "Christian Braun", baseRank: 142, liveRank: 125, delta: 17, games: 14, expRank: 94, seasonRank: 36, shift: 0.13, source: "season" },
  { name: "Wendell Carter Jr.", baseRank: 145, liveRank: 131, delta: 14, games: 15, expRank: 127, seasonRank: 54, shift: 0.1, source: "season" },
  { name: "Moussa Diabaté", baseRank: 147, liveRank: 132, delta: 15, games: 13, expRank: 134, seasonRank: 61, shift: 0.11, source: "season" },
  { name: "Joan Beringer", baseRank: 148, liveRank: 163, delta: -15, games: 17, expRank: 129, seasonRank: 210, shift: -0.09, source: "season" },
  { name: "Davion Mitchell", baseRank: 154, liveRank: 119, delta: 35, games: 15, expRank: 174, seasonRank: 18, shift: 0.25, source: "season" },
  { name: "Neemias Queta", baseRank: 156, liveRank: 176, delta: -20, games: 15, expRank: 61, seasonRank: 163, shift: -0.12, source: "season" },
  { name: "Andrew Wiggins", baseRank: 157, liveRank: 175, delta: -18, games: 15, expRank: 71, seasonRank: 172, shift: -0.11, source: "season" },
  { name: "Aaron Nesmith", baseRank: 162, liveRank: 178, delta: -16, games: 14, expRank: 101, seasonRank: 221, shift: -0.1, source: "season" },
  { name: "Gui Santos", baseRank: 169, liveRank: 195, delta: -26, games: 13, expRank: 111, seasonRank: 304, shift: -0.14, source: "season" },
  { name: "Mitchell Robinson", baseRank: 175, liveRank: 191, delta: -16, games: 14, expRank: 116, seasonRank: 238, shift: -0.09, source: "season" },
  { name: "Daniss Jenkins", baseRank: 180, liveRank: 160, delta: 20, games: 16, expRank: 197, seasonRank: 94, shift: 0.12, source: "season" },
  { name: "Jalen Smith", baseRank: 197, liveRank: 168, delta: 29, games: 13, expRank: 143, seasonRank: 32, shift: 0.16, source: "season" },
  { name: "Cam Spencer", baseRank: 199, liveRank: 179, delta: 20, games: 17, expRank: 144, seasonRank: 63, shift: 0.11, source: "season" },
  { name: "Malik Monk", baseRank: 208, liveRank: 226, delta: -18, games: 15, expRank: 140, seasonRank: 271, shift: -0.08, source: "season" },
  { name: "DeMar DeRozan", baseRank: 210, liveRank: 234, delta: -24, games: 13, expRank: 99, seasonRank: 254, shift: -0.11, source: "season" },
  { name: "Nolan Traoré", baseRank: 229, liveRank: 199, delta: 30, games: 14, expRank: 312, seasonRank: 140, shift: 0.14, source: "season" },
  { name: "Bennett Stirtz", baseRank: 234, liveRank: 214, delta: 20, games: 16, expRank: 344, seasonRank: 197, shift: 0.09, source: "season" },
  { name: "Meleek Thomas", baseRank: 252, liveRank: 211, delta: 41, games: 14, expRank: 313, seasonRank: 113, shift: 0.18, source: "season" },
  { name: "Nikola Vučević", baseRank: 253, liveRank: 277, delta: -24, games: 13, expRank: 132, seasonRank: 284, shift: -0.09, source: "season" },
  { name: "Luke Kornet", baseRank: 265, liveRank: 290, delta: -25, games: 17, expRank: 131, seasonRank: 251, shift: -0.09, source: "season" },
  { name: "Duncan Robinson", baseRank: 305, liveRank: 278, delta: 27, games: 12, expRank: 176, seasonRank: 45, shift: 0.09, source: "season" },
  { name: "Jaxson Hayes", baseRank: 311, liveRank: 284, delta: 27, games: 14, expRank: 190, seasonRank: 89, shift: 0.09, source: "season" },
  { name: "Ziaire Williams", baseRank: 342, liveRank: 308, delta: 34, games: 14, expRank: 225, seasonRank: 111, shift: 0.1, source: "season" },
  { name: "Tyrese Proctor", baseRank: 388, liveRank: 347, delta: 41, games: 16, expRank: 291, seasonRank: 161, shift: 0.11, source: "season" },
  { name: "Sidy Cissoko", baseRank: 429, liveRank: 389, delta: 40, games: 16, expRank: 326, seasonRank: 196, shift: 0.1, source: "season" },
  { name: "Quenton Jackson", baseRank: 521, liveRank: 468, delta: 53, games: 16, expRank: 278, seasonRank: 123, shift: 0.11, source: "season" }
];
