// ============================================================
//  ROOKIE_DRAFT_CURVE — NFL-Draft-Pick -> Dynasty-Rookie-Rang
// ============================================================
//  GENERIERT von sports/nfl/scripts/build-rookie-draft-curve.py
//  (2026-10-01). Nicht von Hand editieren.
//  Quelle: FantasyPros Dynasty-Rookie-ECR (Mai–Juli nach dem NFL-Draft)
//  der Jahrgänge 2020–2026, via DynastyProcess (offene Daten).
//  Je Position: Rang = exp(a + b·ln(Pick)), Band = exp(… + q25 / q75).
//  pos   = 1QB (FantasyPros-Dynasty-Rookie-Rankings)  — Standard
//  posSF = Superflex (FantasyPros-Dynasty-Superflex, nur Rookies des Jahrgangs,
//          Jahrgänge 2021–2026) — für Ligen mit superflex: true
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
 "yearsSF": [
  2021,
  2022,
  2023,
  2024,
  2025,
  2026
 ],
 "pos": {
  "QB": {
   "a": 2.0678,
   "b": 0.419,
   "q25": -0.1941,
   "q75": 0.2098,
   "n": 108,
   "r2": 0.849
  },
  "RB": {
   "a": -2.96,
   "b": 1.2956,
   "q25": -0.1841,
   "q75": 0.2328,
   "n": 213,
   "r2": 0.863
  },
  "WR": {
   "a": -0.7423,
   "b": 0.9273,
   "q25": -0.2156,
   "q75": 0.2245,
   "n": 327,
   "r2": 0.89
  },
  "TE": {
   "a": 0.0912,
   "b": 0.8091,
   "q25": -0.1615,
   "q75": 0.1885,
   "n": 113,
   "r2": 0.819
  }
 },
 "posSF": {
  "QB": {
   "a": 1.0332,
   "b": 0.5566,
   "q25": -0.2594,
   "q75": 0.2891,
   "n": 62,
   "r2": 0.862
  },
  "RB": {
   "a": -2.5553,
   "b": 1.2135,
   "q25": -0.1711,
   "q75": 0.1921,
   "n": 167,
   "r2": 0.868
  },
  "WR": {
   "a": -0.1757,
   "b": 0.8111,
   "q25": -0.2195,
   "q75": 0.2095,
   "n": 223,
   "r2": 0.867
  },
  "TE": {
   "a": 0.6609,
   "b": 0.6782,
   "q25": -0.1899,
   "q75": 0.1486,
   "n": 86,
   "r2": 0.789
  }
 }
};
