// ============================================================
//  DYNASTY LIVE — Saison-Form gegen Erwartung
// ============================================================
//  AUTO-GENERIERT von scripts/build-dynasty-live.js (tthq-sync).
//  Nicht von Hand editieren. Zuletzt aktualisiert: 2026-11-09
//  Stand der Saisondaten: 2026-11-08
//
//  Nur signifikante Bewegungen (≥ 8 Spiele, |shift| ≥ 0.08).
//  liveRank ersetzt im Trade Analyzer/Finder den Dynasty-Rang, wenn
//  "Live-Form" eingeschaltet ist (Standard). data/rankings.js bleibt unverändert.
//
//  Shape: { name, baseRank, liveRank, delta, games, expRank, seasonRank, shift, source }
//  delta > 0 = besser als erwartet (Rang steigt), delta < 0 = schlechter.
//  expRank/seasonRank = Rang im gemeinsamen Pool (Projection vs. Saison).
// ============================================================

const DYNASTY_LIVE_META = {"mode":"season","date":"2026-11-08","pool":348,"expectation":"snapshots/projections-2026-27-opening-night.js"};

const DYNASTY_LIVE = [
  { name: "Alperen Şengün", baseRank: 14, liveRank: 12, delta: 2, games: 8, expRank: 59, seasonRank: 14, shift: 0.12, source: "season" },
  { name: "Amen Thompson", baseRank: 17, liveRank: 20, delta: -3, games: 10, expRank: 19, seasonRank: 82, shift: -0.15, source: "season" },
  { name: "Darryn Peterson", baseRank: 21, liveRank: 19, delta: 2, games: 10, expRank: 159, seasonRank: 74, shift: 0.1, source: "season" },
  { name: "Trey Murphy III", baseRank: 25, liveRank: 28, delta: -3, games: 9, expRank: 16, seasonRank: 66, shift: -0.1, source: "season" },
  { name: "Franz Wagner", baseRank: 31, liveRank: 34, delta: -3, games: 9, expRank: 42, seasonRank: 110, shift: -0.1, source: "season" },
  { name: "LaMelo Ball", baseRank: 34, liveRank: 37, delta: -3, games: 11, expRank: 36, seasonRank: 76, shift: -0.08, source: "season" },
  { name: "Brandon Miller", baseRank: 35, liveRank: 40, delta: -5, games: 10, expRank: 44, seasonRank: 131, shift: -0.12, source: "season" },
  { name: "Josh Giddey", baseRank: 36, liveRank: 40, delta: -4, games: 9, expRank: 56, seasonRank: 164, shift: -0.12, source: "season" },
  { name: "Darius Garland", baseRank: 42, liveRank: 47, delta: -5, games: 9, expRank: 40, seasonRank: 155, shift: -0.12, source: "season" },
  { name: "Walker Kessler", baseRank: 44, liveRank: 39, delta: 5, games: 11, expRank: 39, seasonRank: 11, shift: 0.12, source: "season" },
  { name: "Darius Acuff Jr.", baseRank: 51, liveRank: 45, delta: 6, games: 10, expRank: 193, seasonRank: 80, shift: 0.12, source: "season" },
  { name: "Zach Edey", baseRank: 53, liveRank: 60, delta: -7, games: 8, expRank: 31, seasonRank: 112, shift: -0.12, source: "season" },
  { name: "Matas Buzelis", baseRank: 54, liveRank: 65, delta: -11, games: 9, expRank: 35, seasonRank: 169, shift: -0.19, source: "season" },
  { name: "Desmond Bane", baseRank: 56, liveRank: 63, delta: -7, games: 8, expRank: 24, seasonRank: 109, shift: -0.11, source: "season" },
  { name: "Kel'el Ware", baseRank: 66, liveRank: 84, delta: -18, games: 10, expRank: 33, seasonRank: 203, shift: -0.24, source: "season" },
  { name: "Naz Reid", baseRank: 67, liveRank: 74, delta: -7, games: 10, expRank: 62, seasonRank: 165, shift: -0.09, source: "season" },
  { name: "James Harden", baseRank: 71, liveRank: 79, delta: -8, games: 10, expRank: 32, seasonRank: 111, shift: -0.11, source: "season" },
  { name: "Derrick White", baseRank: 74, liveRank: 81, delta: -7, games: 10, expRank: 23, seasonRank: 70, shift: -0.09, source: "season" },
  { name: "Zion Williamson", baseRank: 76, liveRank: 66, delta: 10, games: 10, expRank: 97, seasonRank: 17, shift: 0.14, source: "season" },
  { name: "Kyshawn George", baseRank: 85, liveRank: 73, delta: 12, games: 10, expRank: 122, seasonRank: 38, shift: 0.15, source: "season" },
  { name: "Yaxel Lendeborg", baseRank: 86, liveRank: 79, delta: 7, games: 10, expRank: 93, seasonRank: 42, shift: 0.09, source: "season" },
  { name: "Jabari Smith Jr.", baseRank: 91, liveRank: 77, delta: 14, games: 10, expRank: 85, seasonRank: 16, shift: 0.17, source: "season" },
  { name: "Mikal Bridges", baseRank: 92, liveRank: 102, delta: -10, games: 9, expRank: 69, seasonRank: 211, shift: -0.1, source: "season" },
  { name: "Ryan Rollins", baseRank: 103, liveRank: 120, delta: -17, games: 10, expRank: 55, seasonRank: 208, shift: -0.15, source: "season" },
  { name: "Miles Bridges", baseRank: 120, liveRank: 105, delta: 15, games: 8, expRank: 104, seasonRank: 15, shift: 0.14, source: "season" },
  { name: "Rudy Gobert", baseRank: 123, liveRank: 138, delta: -15, games: 10, expRank: 89, seasonRank: 293, shift: -0.12, source: "season" },
  { name: "Aday Mara", baseRank: 126, liveRank: 114, delta: 12, games: 10, expRank: 267, seasonRank: 135, shift: 0.1, source: "season" },
  { name: "Ayo Dosunmu", baseRank: 133, liveRank: 119, delta: 14, games: 11, expRank: 103, seasonRank: 31, shift: 0.11, source: "season" },
  { name: "Wendell Carter Jr.", baseRank: 145, liveRank: 132, delta: 13, games: 9, expRank: 128, seasonRank: 43, shift: 0.09, source: "season" },
  { name: "Moussa Diabaté", baseRank: 147, liveRank: 133, delta: 14, games: 9, expRank: 135, seasonRank: 52, shift: 0.1, source: "season" },
  { name: "Davion Mitchell", baseRank: 154, liveRank: 136, delta: 18, games: 10, expRank: 174, seasonRank: 45, shift: 0.13, source: "season" },
  { name: "Neemias Queta", baseRank: 156, liveRank: 171, delta: -15, games: 10, expRank: 63, seasonRank: 163, shift: -0.09, source: "season" },
  { name: "Andrew Wiggins", baseRank: 157, liveRank: 173, delta: -16, games: 10, expRank: 72, seasonRank: 202, shift: -0.1, source: "season" },
  { name: "Daniel Gafford", baseRank: 161, liveRank: 144, delta: 17, games: 10, expRank: 153, seasonRank: 46, shift: 0.11, source: "season" },
  { name: "Nolan Traoré", baseRank: 229, liveRank: 199, delta: 30, games: 10, expRank: 308, seasonRank: 114, shift: 0.14, source: "season" },
  { name: "Kris Dunn", baseRank: 303, liveRank: 279, delta: 24, games: 9, expRank: 156, seasonRank: 34, shift: 0.08, source: "season" },
  { name: "Duncan Robinson", baseRank: 305, liveRank: 278, delta: 27, games: 9, expRank: 176, seasonRank: 33, shift: 0.09, source: "season" },
  { name: "Jaxson Hayes", baseRank: 311, liveRank: 284, delta: 27, games: 9, expRank: 189, seasonRank: 69, shift: 0.09, source: "season" },
  { name: "Ziaire Williams", baseRank: 342, liveRank: 305, delta: 37, games: 8, expRank: 222, seasonRank: 72, shift: 0.11, source: "season" },
  { name: "Quenton Jackson", baseRank: 521, liveRank: 479, delta: 42, games: 10, expRank: 275, seasonRank: 118, shift: 0.08, source: "season" }
];
