// ============================================================
//  ROOKIE_DRAFT_CURVE — NFL-Draft-Pick -> Dynasty-Rookie-Rang
// ============================================================
//  GENERIERT von sports/nfl/scripts/build-rookie-draft-curve.py
//  (2026-10-01). Nicht von Hand editieren.
//  Quelle: FantasyPros Dynasty-Rookie-ECR (Mai–Juli nach dem NFL-Draft)
//  der Jahrgänge 2020–2026, via DynastyProcess (offene Daten).
//  Je Position: Rang = exp(a + b·ln(Pick)), Band = exp(… + q25 / q75).
//  1QB-Basis (FantasyPros-Rookie-Rankings).
// ============================================================

const ROOKIE_DRAFT_CURVE = {
 "years": [
  2020,
  2021,
  2022,
  2023,
  2024,
  2025,
  2026
 ],
 "pos": {
  "QB": {
   "a": 2.0682,
   "b": 0.4188,
   "q25": -0.194,
   "q75": 0.21,
   "n": 107,
   "r2": 0.848
  },
  "RB": {
   "a": -2.9647,
   "b": 1.2968,
   "q25": -0.186,
   "q75": 0.2309,
   "n": 213,
   "r2": 0.863
  },
  "WR": {
   "a": -0.7391,
   "b": 0.9264,
   "q25": -0.216,
   "q75": 0.2141,
   "n": 324,
   "r2": 0.889
  },
  "TE": {
   "a": 0.1016,
   "b": 0.8066,
   "q25": -0.1704,
   "q75": 0.1866,
   "n": 111,
   "r2": 0.815
  }
 }
};
