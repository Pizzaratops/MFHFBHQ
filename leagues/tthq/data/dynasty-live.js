// ============================================================
//  DYNASTY LIVE — Saison-Form gegen Erwartung
// ============================================================
//  AUTO-GENERIERT von scripts/build-dynasty-live.js (tthq-sync).
//  Nicht von Hand editieren. Zuletzt aktualisiert: 2026-11-08
//  Stand der Saisondaten: 2026-11-07
//
//  Nur signifikante Bewegungen (≥ 8 Spiele, |shift| ≥ 0.08).
//  liveRank ersetzt im Trade Analyzer/Finder den Dynasty-Rang, wenn
//  "Live-Form" eingeschaltet ist (Standard). data/rankings.js bleibt unverändert.
//
//  Shape: { name, baseRank, liveRank, delta, games, expRank, seasonRank, shift, source }
//  delta > 0 = besser als erwartet (Rang steigt), delta < 0 = schlechter.
//  expRank/seasonRank = Rang im gemeinsamen Pool (Projection vs. Saison).
// ============================================================

const DYNASTY_LIVE_META = {"mode":"season","date":"2026-11-07","pool":346,"expectation":"snapshots/projections-2026-27-opening-night.js"};

const DYNASTY_LIVE = [
  { name: "Amen Thompson", baseRank: 17, liveRank: 20, delta: -3, games: 9, expRank: 19, seasonRank: 102, shift: -0.16, source: "season" },
  { name: "Donovan Mitchell", baseRank: 20, liveRank: 22, delta: -2, games: 10, expRank: 9, seasonRank: 32, shift: -0.08, source: "season" },
  { name: "Darryn Peterson", baseRank: 21, liveRank: 19, delta: 2, games: 9, expRank: 159, seasonRank: 83, shift: 0.08, source: "season" },
  { name: "Trey Murphy III", baseRank: 25, liveRank: 28, delta: -3, games: 8, expRank: 16, seasonRank: 86, shift: -0.12, source: "season" },
  { name: "Franz Wagner", baseRank: 31, liveRank: 35, delta: -4, games: 8, expRank: 42, seasonRank: 142, shift: -0.12, source: "season" },
  { name: "LaMelo Ball", baseRank: 34, liveRank: 37, delta: -3, games: 10, expRank: 36, seasonRank: 77, shift: -0.08, source: "season" },
  { name: "Brandon Miller", baseRank: 35, liveRank: 39, delta: -4, games: 10, expRank: 44, seasonRank: 127, shift: -0.12, source: "season" },
  { name: "Josh Giddey", baseRank: 36, liveRank: 41, delta: -5, games: 8, expRank: 56, seasonRank: 189, shift: -0.12, source: "season" },
  { name: "Darius Garland", baseRank: 42, liveRank: 47, delta: -5, games: 8, expRank: 40, seasonRank: 168, shift: -0.11, source: "season" },
  { name: "Walker Kessler", baseRank: 44, liveRank: 40, delta: 4, games: 10, expRank: 39, seasonRank: 13, shift: 0.1, source: "season" },
  { name: "Darius Acuff Jr.", baseRank: 51, liveRank: 47, delta: 4, games: 9, expRank: 193, seasonRank: 104, shift: 0.08, source: "season" },
  { name: "Zach Edey", baseRank: 53, liveRank: 60, delta: -7, games: 8, expRank: 31, seasonRank: 116, shift: -0.12, source: "season" },
  { name: "Matas Buzelis", baseRank: 54, liveRank: 66, delta: -12, games: 8, expRank: 35, seasonRank: 198, shift: -0.2, source: "season" },
  { name: "Desmond Bane", baseRank: 56, liveRank: 63, delta: -7, games: 8, expRank: 24, seasonRank: 112, shift: -0.11, source: "season" },
  { name: "Kel'el Ware", baseRank: 66, liveRank: 82, delta: -16, games: 9, expRank: 33, seasonRank: 190, shift: -0.21, source: "season" },
  { name: "Naz Reid", baseRank: 67, liveRank: 73, delta: -6, games: 10, expRank: 62, seasonRank: 162, shift: -0.09, source: "season" },
  { name: "James Harden", baseRank: 71, liveRank: 79, delta: -8, games: 10, expRank: 32, seasonRank: 110, shift: -0.11, source: "season" },
  { name: "Derrick White", baseRank: 74, liveRank: 82, delta: -8, games: 9, expRank: 23, seasonRank: 80, shift: -0.1, source: "season" },
  { name: "Zion Williamson", baseRank: 76, liveRank: 67, delta: 9, games: 9, expRank: 97, seasonRank: 19, shift: 0.13, source: "season" },
  { name: "Kyshawn George", baseRank: 85, liveRank: 73, delta: 12, games: 10, expRank: 122, seasonRank: 38, shift: 0.15, source: "season" },
  { name: "Jabari Smith Jr.", baseRank: 91, liveRank: 79, delta: 12, games: 9, expRank: 85, seasonRank: 18, shift: 0.15, source: "season" },
  { name: "Mikal Bridges", baseRank: 92, liveRank: 102, delta: -10, games: 9, expRank: 69, seasonRank: 213, shift: -0.1, source: "season" },
  { name: "Ryan Rollins", baseRank: 103, liveRank: 120, delta: -17, games: 9, expRank: 55, seasonRank: 219, shift: -0.15, source: "season" },
  { name: "Rudy Gobert", baseRank: 123, liveRank: 137, delta: -14, games: 9, expRank: 89, seasonRank: 296, shift: -0.11, source: "season" },
  { name: "Aday Mara", baseRank: 126, liveRank: 114, delta: 12, games: 10, expRank: 266, seasonRank: 131, shift: 0.1, source: "season" },
  { name: "Ayo Dosunmu", baseRank: 133, liveRank: 121, delta: 12, games: 10, expRank: 103, seasonRank: 36, shift: 0.09, source: "season" },
  { name: "Wendell Carter Jr.", baseRank: 145, liveRank: 131, delta: 14, games: 8, expRank: 128, seasonRank: 34, shift: 0.1, source: "season" },
  { name: "Moussa Diabaté", baseRank: 147, liveRank: 134, delta: 13, games: 9, expRank: 135, seasonRank: 55, shift: 0.1, source: "season" },
  { name: "Davion Mitchell", baseRank: 154, liveRank: 136, delta: 18, games: 9, expRank: 174, seasonRank: 41, shift: 0.13, source: "season" },
  { name: "Neemias Queta", baseRank: 156, liveRank: 170, delta: -14, games: 9, expRank: 63, seasonRank: 163, shift: -0.08, source: "season" },
  { name: "Andrew Wiggins", baseRank: 157, liveRank: 172, delta: -15, games: 9, expRank: 72, seasonRank: 200, shift: -0.09, source: "season" },
  { name: "Daniel Gafford", baseRank: 161, liveRank: 148, delta: 13, games: 9, expRank: 153, seasonRank: 59, shift: 0.08, source: "season" },
  { name: "Nolan Traoré", baseRank: 229, liveRank: 198, delta: 31, games: 9, expRank: 307, seasonRank: 103, shift: 0.14, source: "season" },
  { name: "Duncan Robinson", baseRank: 305, liveRank: 275, delta: 30, games: 8, expRank: 176, seasonRank: 22, shift: 0.1, source: "season" },
  { name: "Quenton Jackson", baseRank: 521, liveRank: 480, delta: 41, games: 10, expRank: 274, seasonRank: 121, shift: 0.08, source: "season" }
];
