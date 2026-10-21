// ============================================================
//  xStats-Abruf im Browser (seit 21.10.2026) — NICHT mit node ausführen
// ============================================================
//  stats.nba.com blockt Cloud-/GitHub-IPs. Dieses Snippet läuft deshalb im
//  Claude-Browser auf Beyaz' Rechner (Seite www.nba.com geöffnet, dann den
//  Inhalt per javascript_tool ausführen). Es rechnet Josh Lloyds xStats
//  (joshlloydfantasy.com/research/xstats-method) für die bisherige Saison:
//    xSTL = a·MIN + c·Deflections   (a, c per Liga-Regression im Fenster)
//    xTO  = Touches · Liga-TO/Touch
//    x3PM = Σ Dreier-Zonen FGA · Liga-Quote der Zone
//    xFGM = Σ alle Zonen FGA · Liga-Quote der Zone (skaliert auf FGA)
//  Ausgabe (window.__xs.text): eine Zeile je Spieler
//    Name|GP|STL|xSTL|TOV|xTOV|3PM|x3PM|FGM|xFGM|FGA
//  Weiter mit: node sports/nba/scripts/import-xstats.js <datei.txt> --through=YYYY-MM-DD
//
//  Aufruf im Browser:  await window.__xstats('2026-27', '10/20/2026', '10/26/2026')
//  (Saison, Saisonstart, letzter Spieltag; Datumsformat MM/DD/YYYY)
// ============================================================
window.__xstats = async (S, df, dt) => {
  const H = { headers: { Accept: 'application/json', 'x-nba-stats-origin': 'stats', 'x-nba-stats-token': 'true' }, credentials: 'omit' };
  const P = `College=&Conference=&Country=&DateFrom=${df}&DateTo=${dt}&Division=&DraftPick=&DraftYear=&GameScope=&GameSegment=&Height=&LastNGames=0&LeagueID=00&Location=&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=Totals&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=${S}&SeasonSegment=&SeasonType=Regular%20Season&ShotClockRange=&StarterBench=&TeamID=0&TwoWay=0&VsConference=&VsDivision=&Weight=`;
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const get = async u => {
    for (let i = 0; i < 4; i++) {
      try { const r = await fetch('https://stats.nba.com/stats/' + u, H); if (r.ok) { await sleep(400); return r.json(); } } catch (e) { /* nochmal */ }
      await sleep(3000 * (i + 1));
    }
    throw new Error('stats.nba.com antwortet nicht: ' + u.slice(0, 60));
  };
  const tbl = j => { const rs = j.resultSets[0]; return rs.rowSet.map(r => Object.fromEntries(rs.headers.map((k, i) => [k, r[i]]))); };
  const byId = a => new Map(a.map(r => [r.PLAYER_ID, r]));
  const base = byId(tbl(await get('leaguedashplayerstats?MeasureType=Base&' + P)));
  const pos = byId(tbl(await get('leaguedashptstats?PlayerOrTeam=Player&PtMeasureType=Possessions&' + P)));
  const hus = byId(tbl(await get('leaguehustlestatsplayer?' + P)));
  const sj = await get('leaguedashplayershotlocations?DistanceRange=By%20Zone&MeasureType=Base&' + P);
  const zones = sj.resultSets.headers[0].columnNames, shots = new Map();
  sj.resultSets.rowSet.forEach(r => { const z = {}; zones.forEach((n, i) => { z[n] = { m: r[6 + 3 * i] || 0, a: r[7 + 3 * i] || 0 }; }); shots.set(r[0], z); });
  const Z2 = ['Restricted Area', 'In The Paint (Non-RA)', 'Mid-Range'], Z3 = ['Left Corner 3', 'Right Corner 3', 'Above the Break 3', 'Backcourt'];
  const lg = {}; [...Z2, ...Z3].forEach(z => { let m = 0, a = 0; shots.forEach(s => { m += s[z].m; a += s[z].a; }); lg[z] = a ? m / a : 0; });
  let sT = 0, sTo = 0, a11 = 0, a12 = 0, a22 = 0, b1 = 0, b2 = 0;
  base.forEach((b, id) => {
    const h = hus.get(id), q = pos.get(id);
    if (h) { const m = b.MIN, d = h.DEFLECTIONS, s = b.STL; a11 += m * m; a12 += m * d; a22 += d * d; b1 += m * s; b2 += d * s; }
    if (q) { sT += b.TOV; sTo += q.TOUCHES; }
  });
  const det = a11 * a22 - a12 * a12, ka = det ? (b1 * a22 - b2 * a12) / det : 0, kd = det ? (a11 * b2 - a12 * b1) / det : 0;
  const lines = [], f = x => Math.round(x * 100) / 100;
  base.forEach((b, id) => {
    const h = hus.get(id), q = pos.get(id), s = shots.get(id);
    if (!h || !q || !s || !b.GP) return;
    const x2 = Z2.reduce((t, z) => t + s[z].a * lg[z], 0), x3 = Z3.reduce((t, z) => t + s[z].a * lg[z], 0);
    const za = [...Z2, ...Z3].reduce((t, z) => t + s[z].a, 0);
    lines.push([b.PLAYER_NAME, b.GP, b.STL, f(ka * b.MIN + kd * h.DEFLECTIONS), b.TOV, f(sTo ? q.TOUCHES * sT / sTo : b.TOV),
      b.FG3M, f(x3), b.FGM, f((x2 + x3) * (za ? b.FGA / za : 1)), b.FGA].join('|'));
  });
  window.__xs = { text: lines.join('\n'), n: lines.length, ka, kd };
  return { n: lines.length, steal_per_min: +(ka).toFixed(4), steal_per_deflection: +kd.toFixed(3), len: window.__xs.text.length };
};
