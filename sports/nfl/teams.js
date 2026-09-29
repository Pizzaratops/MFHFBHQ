// ============================================================
//  NFL-Teams — Namen, Farben, Kürzel-Normalisierung (sportweit)
// ============================================================
//  Zusammengeführt aus NFL_TEAM_NAMES/NFL_TEAM_ALIASES (alte app.js) und
//  MA_TEAM_COLORS/MA_TEAM_NAMES/_maAbbr (alte matchup-advantage.js).
//
//  Kanonisch sind die Kürzel der nflverse-Daten (Power Rankings, Power
//  Score, Matchup Advantage): … GB, JAX, LAR, LV, NE, NO, SF, TB, WSH.
//  canon() übersetzt ESPN/Sleeper/KTC-Varianten (WAS, LA, JAC, GBP …).
// ============================================================

window.MFHFB = window.MFHFB || {};
MFHFB.nfl = MFHFB.nfl || {};

MFHFB.nfl.teams = (function () {
  const NAMES = {
    ARI: 'Arizona Cardinals', ATL: 'Atlanta Falcons', BAL: 'Baltimore Ravens',
    BUF: 'Buffalo Bills', CAR: 'Carolina Panthers', CHI: 'Chicago Bears',
    CIN: 'Cincinnati Bengals', CLE: 'Cleveland Browns', DAL: 'Dallas Cowboys',
    DEN: 'Denver Broncos', DET: 'Detroit Lions', GB: 'Green Bay Packers',
    HOU: 'Houston Texans', IND: 'Indianapolis Colts', JAX: 'Jacksonville Jaguars',
    KC: 'Kansas City Chiefs', LAC: 'Los Angeles Chargers', LAR: 'Los Angeles Rams',
    LV: 'Las Vegas Raiders', MIA: 'Miami Dolphins', MIN: 'Minnesota Vikings',
    NE: 'New England Patriots', NO: 'New Orleans Saints', NYG: 'New York Giants',
    NYJ: 'New York Jets', PHI: 'Philadelphia Eagles', PIT: 'Pittsburgh Steelers',
    SEA: 'Seattle Seahawks', SF: 'San Francisco 49ers', TB: 'Tampa Bay Buccaneers',
    TEN: 'Tennessee Titans', WSH: 'Washington Commanders',
  };
  // Primärfarben, auf dunklem UND hellem Hintergrund lesbar (aus Matchup Advantage)
  const COLORS = {
    ARI: '#b0243f', ATL: '#c8102e', BAL: '#4b3a9c', BUF: '#1f5fbf', CAR: '#0085ca', CHI: '#d4561c',
    CIN: '#fb4f14', CLE: '#b8521c', DAL: '#2f5f9f', DEN: '#fb4f14', DET: '#0076b6', GB: '#2f7a4f',
    HOU: '#b3243a', IND: '#1f5fbf', JAX: '#0f8a96', KC: '#e31837', LAC: '#0080c6', LAR: '#2f5fbf',
    LV: '#8a929a', MIA: '#008e97', MIN: '#6b3fa0', NE: '#c60c30', NO: '#b39a5e', NYG: '#1f4fbf',
    NYJ: '#1f7a55', PHI: '#0f7a78', PIT: '#e0a800', SEA: '#4a9a3a', SF: '#bf2b2b', TB: '#d50a0a',
    TEN: '#4b92db', WSH: '#8f2a3a',
  };
  const ALIASES = { WAS: 'WSH', LA: 'LAR', JAC: 'JAX', GBP: 'GB', NEP: 'NE', NOS: 'NO', SFO: 'SF', TBB: 'TB', LVR: 'LV', OAK: 'LV', SD: 'LAC', STL: 'LAR' };

  const canon = a => { const k = String(a || '').toUpperCase(); return ALIASES[k] || k; };
  const name = a => NAMES[canon(a)] || a;
  const nick = a => { const n = NAMES[canon(a)]; return n ? n.split(' ').slice(-1)[0] : a; };
  const color = a => COLORS[canon(a)] || 'var(--league-accent)';
  const all = () => Object.keys(NAMES).sort();
  const isTeam = a => !!NAMES[canon(a)];
  return { NAMES, COLORS, canon, name, nick, color, all, isTeam };
})();
