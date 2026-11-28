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
  { name: "Alperen Şengün", baseRank: 14, liveRank: 12, delta: 2, games: 17, expRank: 56, seasonRank: 15, shift: 0.17, source: "season" },
  { name: "Amen Thompson", baseRank: 17, liveRank: 21, delta: -4, games: 18, expRank: 17, seasonRank: 74, shift: -0.21, source: "season" },
  { name: "Donovan Mitchell", baseRank: 20, liveRank: 22, delta: -2, games: 18, expRank: 8, seasonRank: 21, shift: -0.08, source: "season" },
  { name: "Darryn Peterson", baseRank: 21, liveRank: 19, delta: 2, games: 20, expRank: 161, seasonRank: 100, shift: 0.1, source: "season" },
  { name: "Trey Murphy III", baseRank: 25, liveRank: 27, delta: -2, games: 12, expRank: 14, seasonRank: 39, shift: -0.08, source: "season" },
  { name: "Trae Young", baseRank: 33, liveRank: 37, delta: -4, games: 19, expRank: 27, seasonRank: 67, shift: -0.11, source: "season" },
  { name: "LaMelo Ball", baseRank: 34, liveRank: 40, delta: -6, games: 19, expRank: 33, seasonRank: 87, shift: -0.15, source: "season" },
  { name: "Brandon Miller", baseRank: 35, liveRank: 40, delta: -5, games: 15, expRank: 41, seasonRank: 110, shift: -0.14, source: "season" },
  { name: "Josh Giddey", baseRank: 36, liveRank: 43, delta: -7, games: 18, expRank: 53, seasonRank: 155, shift: -0.17, source: "season" },
  { name: "VJ Edgecombe", baseRank: 41, liveRank: 37, delta: 4, games: 19, expRank: 65, seasonRank: 35, shift: 0.11, source: "season" },
  { name: "Darius Garland", baseRank: 42, liveRank: 48, delta: -6, games: 18, expRank: 37, seasonRank: 105, shift: -0.13, source: "season" },
  { name: "Stephon Castle", baseRank: 43, liveRank: 36, delta: 7, games: 20, expRank: 150, seasonRank: 66, shift: 0.17, source: "season" },
  { name: "Walker Kessler", baseRank: 44, liveRank: 40, delta: 4, games: 18, expRank: 36, seasonRank: 17, shift: 0.1, source: "season" },
  { name: "Darius Acuff Jr.", baseRank: 51, liveRank: 47, delta: 4, games: 18, expRank: 195, seasonRank: 124, shift: 0.09, source: "season" },
  { name: "Zach Edey", baseRank: 53, liveRank: 65, delta: -12, games: 16, expRank: 28, seasonRank: 112, shift: -0.2, source: "season" },
  { name: "Matas Buzelis", baseRank: 54, liveRank: 67, delta: -13, games: 18, expRank: 32, seasonRank: 107, shift: -0.22, source: "season" },
  { name: "Ivica Zubac", baseRank: 62, liveRank: 69, delta: -7, games: 14, expRank: 54, seasonRank: 176, shift: -0.11, source: "season" },
  { name: "Collin Murray-Boyles", baseRank: 63, liveRank: 68, delta: -5, games: 16, expRank: 81, seasonRank: 128, shift: -0.08, source: "season" },
  { name: "Nickeil Alexander-Walker", baseRank: 64, liveRank: 70, delta: -6, games: 18, expRank: 25, seasonRank: 53, shift: -0.09, source: "season" },
  { name: "Kel'el Ware", baseRank: 66, liveRank: 89, delta: -23, games: 20, expRank: 30, seasonRank: 140, shift: -0.3, source: "season" },
  { name: "Naz Reid", baseRank: 67, liveRank: 77, delta: -10, games: 17, expRank: 59, seasonRank: 172, shift: -0.14, source: "season" },
  { name: "Kevin Durant", baseRank: 69, liveRank: 76, delta: -7, games: 19, expRank: 9, seasonRank: 26, shift: -0.1, source: "season" },
  { name: "Jaden McDaniels", baseRank: 70, liveRank: 60, delta: 10, games: 20, expRank: 51, seasonRank: 12, shift: 0.16, source: "season" },
  { name: "Derrick White", baseRank: 74, liveRank: 89, delta: -15, games: 18, expRank: 21, seasonRank: 96, shift: -0.18, source: "season" },
  { name: "Zion Williamson", baseRank: 76, liveRank: 65, delta: 11, games: 18, expRank: 97, seasonRank: 27, shift: 0.16, source: "season" },
  { name: "Jalen Suggs", baseRank: 82, liveRank: 93, delta: -11, games: 9, expRank: 70, seasonRank: 216, shift: -0.12, source: "season" },
  { name: "Reed Sheppard", baseRank: 84, liveRank: 95, delta: -11, games: 16, expRank: 95, seasonRank: 186, shift: -0.12, source: "season" },
  { name: "Kyshawn George", baseRank: 85, liveRank: 73, delta: 12, games: 19, expRank: 122, seasonRank: 54, shift: 0.16, source: "season" },
  { name: "Cedric Coward", baseRank: 87, liveRank: 71, delta: 16, games: 19, expRank: 100, seasonRank: 28, shift: 0.2, source: "season" },
  { name: "Jabari Smith Jr.", baseRank: 91, liveRank: 83, delta: 8, games: 19, expRank: 84, seasonRank: 48, shift: 0.09, source: "season" },
  { name: "Mikal Bridges", baseRank: 92, liveRank: 106, delta: -14, games: 19, expRank: 67, seasonRank: 183, shift: -0.14, source: "season" },
  { name: "Coby White", baseRank: 95, liveRank: 104, delta: -9, games: 10, expRank: 93, seasonRank: 237, shift: -0.09, source: "season" },
  { name: "Keegan Murray", baseRank: 97, liveRank: 107, delta: -10, games: 11, expRank: 60, seasonRank: 165, shift: -0.1, source: "season" },
  { name: "Ryan Rollins", baseRank: 103, liveRank: 129, delta: -26, games: 18, expRank: 52, seasonRank: 201, shift: -0.22, source: "season" },
  { name: "Khaman Maluach", baseRank: 111, liveRank: 122, delta: -11, games: 18, expRank: 102, seasonRank: 166, shift: -0.1, source: "season" },
  { name: "Payton Pritchard", baseRank: 112, liveRank: 126, delta: -14, games: 19, expRank: 66, seasonRank: 152, shift: -0.12, source: "season" },
  { name: "Egor Dëmin", baseRank: 117, liveRank: 130, delta: -13, games: 12, expRank: 126, seasonRank: 242, shift: -0.1, source: "season" },
  { name: "Miles Bridges", baseRank: 120, liveRank: 107, delta: 13, games: 18, expRank: 104, seasonRank: 42, shift: 0.12, source: "season" },
  { name: "Rudy Gobert", baseRank: 123, liveRank: 146, delta: -23, games: 19, expRank: 88, seasonRank: 285, shift: -0.17, source: "season" },
  { name: "Aday Mara", baseRank: 126, liveRank: 107, delta: 19, games: 16, expRank: 269, seasonRank: 111, shift: 0.17, source: "season" },
  { name: "Ayo Dosunmu", baseRank: 133, liveRank: 115, delta: 18, games: 20, expRank: 103, seasonRank: 34, shift: 0.15, source: "season" },
  { name: "Santi Aldama", baseRank: 141, liveRank: 153, delta: -12, games: 10, expRank: 157, seasonRank: 303, shift: -0.08, source: "season" },
  { name: "Christian Braun", baseRank: 142, liveRank: 121, delta: 21, games: 17, expRank: 94, seasonRank: 32, shift: 0.16, source: "season" },
  { name: "Wendell Carter Jr.", baseRank: 145, liveRank: 131, delta: 14, games: 17, expRank: 128, seasonRank: 57, shift: 0.1, source: "season" },
  { name: "Moussa Diabaté", baseRank: 147, liveRank: 127, delta: 20, games: 15, expRank: 136, seasonRank: 50, shift: 0.15, source: "season" },
  { name: "Davion Mitchell", baseRank: 154, liveRank: 124, delta: 30, games: 18, expRank: 175, seasonRank: 33, shift: 0.22, source: "season" },
  { name: "Neemias Queta", baseRank: 156, liveRank: 175, delta: -19, games: 18, expRank: 61, seasonRank: 146, shift: -0.12, source: "season" },
  { name: "Andrew Wiggins", baseRank: 157, liveRank: 177, delta: -20, games: 18, expRank: 71, seasonRank: 169, shift: -0.12, source: "season" },
  { name: "Daniel Gafford", baseRank: 161, liveRank: 148, delta: 13, games: 19, expRank: 154, seasonRank: 83, shift: 0.09, source: "season" },
  { name: "Aaron Nesmith", baseRank: 162, liveRank: 179, delta: -17, games: 16, expRank: 101, seasonRank: 215, shift: -0.1, source: "season" },
  { name: "Gui Santos", baseRank: 169, liveRank: 192, delta: -23, games: 16, expRank: 111, seasonRank: 249, shift: -0.13, source: "season" },
  { name: "Mitchell Robinson", baseRank: 175, liveRank: 191, delta: -16, games: 14, expRank: 116, seasonRank: 238, shift: -0.09, source: "season" },
  { name: "Daniss Jenkins", baseRank: 180, liveRank: 159, delta: 21, games: 18, expRank: 197, seasonRank: 94, shift: 0.12, source: "season" },
  { name: "Jaylen Wells", baseRank: 190, liveRank: 174, delta: 16, games: 20, expRank: 215, seasonRank: 133, shift: 0.09, source: "season" },
  { name: "Zaccharie Risacher", baseRank: 191, liveRank: 175, delta: 16, games: 19, expRank: 208, seasonRank: 135, shift: 0.09, source: "season" },
  { name: "Sandro Mamukelashvili", baseRank: 193, liveRank: 210, delta: -17, games: 19, expRank: 98, seasonRank: 175, shift: -0.08, source: "season" },
  { name: "Jalen Smith", baseRank: 197, liveRank: 161, delta: 36, games: 15, expRank: 145, seasonRank: 24, shift: 0.2, source: "season" },
  { name: "Cam Spencer", baseRank: 199, liveRank: 172, delta: 27, games: 20, expRank: 146, seasonRank: 51, shift: 0.15, source: "season" },
  { name: "DeMar DeRozan", baseRank: 210, liveRank: 239, delta: -29, games: 16, expRank: 99, seasonRank: 263, shift: -0.13, source: "season" },
  { name: "Nolan Traoré", baseRank: 229, liveRank: 199, delta: 30, games: 14, expRank: 311, seasonRank: 142, shift: 0.14, source: "season" },
  { name: "Bennett Stirtz", baseRank: 234, liveRank: 208, delta: 26, games: 19, expRank: 343, seasonRank: 180, shift: 0.12, source: "season" },
  { name: "Jordan Poole", baseRank: 244, liveRank: 218, delta: 26, games: 14, expRank: 236, seasonRank: 95, shift: 0.11, source: "season" },
  { name: "Meleek Thomas", baseRank: 252, liveRank: 211, delta: 41, games: 16, expRank: 312, seasonRank: 122, shift: 0.18, source: "season" },
  { name: "Nikola Vučević", baseRank: 253, liveRank: 277, delta: -24, games: 14, expRank: 134, seasonRank: 277, shift: -0.09, source: "season" },
  { name: "Luke Kornet", baseRank: 265, liveRank: 288, delta: -23, games: 20, expRank: 133, seasonRank: 232, shift: -0.08, source: "season" },
  { name: "Duncan Robinson", baseRank: 305, liveRank: 279, delta: 26, games: 12, expRank: 177, seasonRank: 49, shift: 0.09, source: "season" },
  { name: "Klay Thompson", baseRank: 358, liveRank: 330, delta: 28, games: 17, expRank: 237, seasonRank: 93, shift: 0.08, source: "season" },
  { name: "Matisse Thybulle", baseRank: 384, liveRank: 347, delta: 37, games: 19, expRank: 156, seasonRank: 61, shift: 0.1, source: "season" },
  { name: "Tyrese Proctor", baseRank: 388, liveRank: 357, delta: 31, games: 18, expRank: 290, seasonRank: 192, shift: 0.08, source: "season" },
  { name: "Sidy Cissoko", baseRank: 429, liveRank: 385, delta: 44, games: 19, expRank: 326, seasonRank: 195, shift: 0.11, source: "season" },
  { name: "Caleb Martin", baseRank: 481, liveRank: 437, delta: 44, games: 15, expRank: 327, seasonRank: 125, shift: 0.1, source: "season" },
  { name: "Quenton Jackson", baseRank: 521, liveRank: 467, delta: 54, games: 19, expRank: 277, seasonRank: 131, shift: 0.11, source: "season" },
  { name: "Jamison Battle", baseRank: 549, liveRank: 505, delta: 44, games: 18, expRank: 328, seasonRank: 204, shift: 0.08, source: "season" }
];
