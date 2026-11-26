// ============================================================
//  FIRST DOWN — NFL-Teamprofile für „Spiele der Woche“ (26.11.2026)
// ============================================================
//  Quellen (frei):
//   - nflverse play-by-play {season}  (EPA, Run/Pass, Down/Distance,
//     Shotgun, Air Yards, Lauf-Richtung/-Lücke, Sacks, INTs)
//   - FTN charting {season} via nflverse (Play-Action, Screen,
//     Pass Rusher, Box) — CC-BY-SA 4.0, Nennung „FTN Data via nflverse“
//   - nflverse schedules/games.csv (Spielplan, Ergebnisse, Head Coaches)
//   - nflverse teams_colors_logos.csv (nur Name + Farben, keine Logos)
//  Ausgabe: first-down/data/nfl-week.js (FD_NFL)
//  Ohne npm-Dependencies. Lokal testbar mit LOCAL_DIR=/pfad (pbp.csv.gz,
//  ftn.csv, games.csv, teams.csv).
// ============================================================
const https = require('https');
const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

const SEASON = +(process.env.SEASON || new Date().getFullYear() - (new Date().getMonth() < 2 ? 1 : 0));
const REL = 'https://github.com/nflverse/nflverse-data/releases/download';
const URLS = {
  pbp: `${REL}/pbp/play_by_play_${SEASON}.csv.gz`,
  ftn: `${REL}/ftn_charting/ftn_charting_${SEASON}.csv`,
  games: `${REL}/schedules/games.csv`,
  teams: `${REL}/teams/teams_colors_logos.csv`,
};
const LOCAL = { pbp: 'pbp.csv.gz', ftn: 'ftn.csv', games: 'games.csv', teams: 'teams.csv' };
const OUT = path.join(__dirname, '../../../first-down/data/nfl-week.js');

function getBuf(url, n = 0) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'mfhfb-hq-bot' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && n < 5) { res.resume(); return getBuf(res.headers.location, n + 1).then(resolve, reject); }
      if (res.statusCode !== 200) { res.resume(); return reject(new Error(`HTTP ${res.statusCode} für ${url}`)); }
      const chunks = []; res.on('data', c => chunks.push(c)); res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}
async function load(key) {
  if (process.env.LOCAL_DIR) return fs.readFileSync(path.join(process.env.LOCAL_DIR, LOCAL[key]));
  let last;
  for (let i = 0; i < 4; i++) { try { return await getBuf(URLS[key]); } catch (e) { last = e; await new Promise(r => setTimeout(r, [2000, 5000, 10000, 0][i])); } }
  throw last;
}

// CSV zeilenweise, nur benötigte Spalten (spart Speicher bei 370 Spalten)
function splitLine(line) {
  if (line.indexOf('"') < 0) return line.split(',');
  const out = []; let f = '', q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (q) { if (c === '"') { if (line[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
    else if (c === '"') q = true; else if (c === ',') { out.push(f); f = ''; } else f += c;
  }
  out.push(f); return out;
}
function readCsv(text, cols) {
  const lines = text.split(/\r?\n/);
  const head = splitLine(lines[0]);
  const idx = cols.map(c => head.indexOf(c));
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i]) continue;
    const r = splitLine(lines[i]), o = {};
    cols.forEach((c, k) => { o[c] = idx[k] >= 0 ? r[idx[k]] : ''; });
    rows.push(o);
  }
  return rows;
}
const num = v => (v === '' || v === 'NA' || v == null ? null : +v);
const mean = a => a.length ? a.reduce((s, v) => s + v, 0) / a.length : null;
const r3 = v => v == null || isNaN(v) ? null : Math.round(v * 1000) / 1000;

(async () => {
  const [pbpBuf, ftnBuf, gamesBuf, teamsBuf] = await Promise.all(['pbp', 'ftn', 'games', 'teams'].map(load));
  const pbp = readCsv(zlib.gunzipSync(pbpBuf).toString('utf8'), ['game_id', 'play_id', 'season_type', 'week', 'game_date', 'posteam', 'defteam', 'down', 'ydstogo', 'play_type', 'pass', 'rush', 'sack', 'interception', 'epa', 'success', 'wp', 'shotgun', 'air_yards', 'run_location', 'run_gap', 'two_point_attempt', 'qb_spike', 'qb_kneel']);
  let ftnRows = [];
  try { ftnRows = readCsv(ftnBuf.toString('utf8'), ['nflverse_game_id', 'nflverse_play_id', 'week', 'is_play_action', 'is_screen_pass', 'n_pass_rushers', 'n_defense_box']); } catch (e) { console.warn('FTN fehlt:', e.message); }
  const ftn = new Map(ftnRows.map(r => [r.nflverse_game_id + '|' + r.nflverse_play_id, r]));
  const games = readCsv(gamesBuf.toString('utf8'), ['game_id', 'season', 'game_type', 'week', 'gameday', 'gametime', 'away_team', 'home_team', 'away_score', 'home_score', 'away_coach', 'home_coach', 'stadium', 'roof']).filter(g => +g.season === SEASON);
  const teamsMeta = readCsv(teamsBuf.toString('utf8'), ['team_abbr', 'team_name', 'team_nick', 'team_color', 'team_color2', 'team_conf', 'team_division']);

  const T = {};
  const team = k => (T[k] = T[k] || { o: { sit: { normal: [0, 0], short: [0, 0], long: [0, 0] }, runIn: 0, runOut: 0, ucIn: 0, inAll: 0, gunRun: 0, runs: 0, dropbacks: 0, sacks: 0, ints: 0, att: 0, pa: 0, screen: 0, ftnAtt: 0, depth: { quick: 0, mid: 0, deep: 0 }, epaRun: [], epaPass: [], sucRun: [], sucPass: [] },
    d: { epaRun: [], epaPass: [], dropbacks: 0, sacks: 0, ftnDb: 0, blitz: 0, ftnPlays: 0, box8: 0 } });
  const L = { epaRun: [], epaPass: [], sacks: 0, dropbacks: 0, ints: 0, att: 0, runs: 0, plays: 0, pass: 0, blitz: 0, ftnDb: 0, box8: 0, ftnPlays: 0, pa: 0, screen: 0, ftnAtt: 0 };
  let asof = '';
  for (const p of pbp) {
    if (p.season_type !== 'REG') continue;
    const isPass = p.pass === '1', isRun = p.rush === '1' && !isPass;
    if (!isPass && !isRun) continue;
    if (p.two_point_attempt === '1' || p.qb_spike === '1' || p.qb_kneel === '1') continue;
    const down = num(p.down), togo = num(p.ydstogo), wp = num(p.wp), epa = num(p.epa);
    if (!down || epa == null) continue;
    if (wp != null && (wp < 0.05 || wp > 0.95)) continue; // Garbage Time raus
    if (p.game_date > asof) asof = p.game_date;
    const o = team(p.posteam).o, d = team(p.defteam).d;
    const sit = togo <= 2 ? 'short' : (down >= 2 && togo >= 7) ? 'long' : 'normal';
    o.sit[sit][isPass ? 1 : 0]++;
    L.plays++; if (isPass) L.pass++;
    const f = ftn.get(p.game_id + '|' + p.play_id);
    if (f) { d.ftnPlays++; L.ftnPlays++; if (num(f.n_defense_box) >= 8 && down <= 2) { d.box8++; L.box8++; } }
    if (isRun) {
      o.runs++; L.runs++;
      const inside = p.run_location === 'middle' || p.run_gap === 'guard';
      if (inside) { o.runIn++; o.inAll++; if (p.shotgun === '0') o.ucIn++; } else if (p.run_location) o.runOut++;
      if (p.shotgun === '1') o.gunRun++;
      o.epaRun.push(epa); o.sucRun.push(+p.success || 0); d.epaRun.push(epa); L.epaRun.push(epa);
    } else {
      o.dropbacks++; d.dropbacks++; L.dropbacks++;
      o.epaPass.push(epa); o.sucPass.push(+p.success || 0); d.epaPass.push(epa); L.epaPass.push(epa);
      if (p.sack === '1') { o.sacks++; d.sacks++; L.sacks++; }
      if (f) { d.ftnDb++; L.ftnDb++; if (num(f.n_pass_rushers) >= 5) { d.blitz++; L.blitz++; } }
      const air = num(p.air_yards);
      if (p.sack !== '1' && air != null) {
        o.att++; L.att++; if (p.interception === '1') { o.ints++; L.ints++; }
        let scr = false;
        if (f) { o.ftnAtt++; L.ftnAtt++; if (f.is_play_action === 'TRUE' || f.is_play_action === '1') { o.pa++; L.pa++; } if (f.is_screen_pass === 'TRUE' || f.is_screen_pass === '1') { o.screen++; L.screen++; scr = true; } }
        if (!scr) o.depth[air <= 5 ? 'quick' : air <= 15 ? 'mid' : 'deep']++;
      }
    }
  }
  const lg = {
    epaRun: r3(mean(L.epaRun)), epaPass: r3(mean(L.epaPass)), sackRate: r3(L.sacks / L.dropbacks), intRate: r3(L.ints / L.att), passRate: r3(L.pass / L.plays),
    blitz: r3(L.ftnDb ? L.blitz / L.ftnDb : null), box8: r3(L.ftnPlays ? L.box8 / L.ftnPlays : null), pa: r3(L.ftnAtt ? L.pa / L.ftnAtt : null), screen: r3(L.ftnAtt ? L.screen / L.ftnAtt : null),
  };
  // Bilanzen + aktueller Coach aus dem Spielplan
  const rec = {}, coach = {};
  games.filter(g => g.game_type === 'REG').sort((a, b) => a.gameday.localeCompare(b.gameday)).forEach(g => {
    [g.away_team, g.home_team].forEach(t => { rec[t] = rec[t] || [0, 0, 0]; });
    coach[g.away_team] = g.away_coach; coach[g.home_team] = g.home_coach;
    if (g.away_score === '' || g.away_score === 'NA') return;
    const a = +g.away_score, h = +g.home_score;
    if (a > h) { rec[g.away_team][0]++; rec[g.home_team][1]++; } else if (h > a) { rec[g.home_team][0]++; rec[g.away_team][1]++; } else { rec[g.away_team][2]++; rec[g.home_team][2]++; }
  });
  const meta = Object.fromEntries(teamsMeta.map(m => [m.team_abbr, m]));
  const out = {};
  Object.keys(T).sort().forEach(k => {
    const { o, d } = T[k], m = meta[k] || {};
    const rate = s => { const [r, p] = o.sit[s]; return r + p ? r3(p / (r + p)) : null; };
    const dep = o.depth.quick + o.depth.mid + o.depth.deep;
    out[k] = {
      name: m.team_name || k, nick: m.team_nick || k, color: m.team_color || '#444444', color2: m.team_color2 || '#cccccc', conf: m.team_conf || '', div: m.team_division || '',
      coach: coach[k] || '', record: rec[k] || [0, 0, 0],
      off: {
        passRate: { normal: rate('normal'), short: rate('short'), long: rate('long') },
        insideRun: r3((o.runIn) / Math.max(1, o.runIn + o.runOut)), ucInside: r3(o.ucIn / Math.max(1, o.inAll)), gunRun: r3(o.gunRun / Math.max(1, o.runs)),
        pa: o.ftnAtt ? r3(o.pa / o.ftnAtt) : null, screen: o.ftnAtt ? r3(o.screen / o.ftnAtt) : null,
        depth: { quick: r3(o.depth.quick / Math.max(1, dep)), mid: r3(o.depth.mid / Math.max(1, dep)), deep: r3(o.depth.deep / Math.max(1, dep)) },
        epaRun: r3(mean(o.epaRun)), epaPass: r3(mean(o.epaPass)), sucRun: r3(mean(o.sucRun)), sucPass: r3(mean(o.sucPass)),
        sackRate: r3(o.sacks / Math.max(1, o.dropbacks)), intRate: r3(o.ints / Math.max(1, o.att)), plays: o.runs + o.dropbacks,
      },
      def: {
        epaRun: r3(mean(d.epaRun)), epaPass: r3(mean(d.epaPass)), sackRate: r3(d.sacks / Math.max(1, d.dropbacks)),
        blitz: d.ftnDb ? r3(d.blitz / d.ftnDb) : null, box8: d.ftnPlays ? r3(d.box8 / d.ftnPlays) : null,
      },
    };
  });
  // Ränge (1 = Ligaspitze in dieser Kategorie)
  const rankBy = (get, desc) => { const ks = Object.keys(out).filter(k => get(out[k]) != null).sort((a, b) => desc ? get(out[b]) - get(out[a]) : get(out[a]) - get(out[b])); ks.forEach((k, i) => { (out[k].rank = out[k].rank || {})[get.key] = i + 1; }); };
  const R = (key, get, desc) => { get.key = key; rankBy(get, desc); };
  R('oRunEpa', t => t.off.epaRun, true); R('oPassEpa', t => t.off.epaPass, true); R('passRate', t => t.off.passRate.normal, true); R('pa', t => t.off.pa, true); R('screen', t => t.off.screen, true); R('deep', t => t.off.depth.deep, true);
  R('oSack', t => t.off.sackRate, false); R('dRunEpa', t => t.def.epaRun, false); R('dPassEpa', t => t.def.epaPass, false); R('dSack', t => t.def.sackRate, true); R('blitz', t => t.def.blitz, true); R('box8', t => t.def.box8, true);

  // Aktuelle Woche = früheste Woche mit noch nicht gespielten Spielen
  const reg = games.filter(g => g.game_type === 'REG');
  const open = reg.filter(g => g.away_score === '' || g.away_score === 'NA').map(g => +g.week);
  const week = open.length ? Math.min(...open) : Math.max(...reg.map(g => +g.week));
  const wk = reg.filter(g => +g.week === week).map(g => ({ id: g.game_id, day: g.gameday, time: g.gametime, away: g.away_team, home: g.home_team, as: num(g.away_score), hs: num(g.home_score), stadium: g.stadium, roof: g.roof }));
  const data = { season: SEASON, week, asof, built: new Date().toISOString(), league: lg, ftnWeek: ftnRows.reduce((m, r) => Math.max(m, +r.week || 0), 0), teams: out, games: wk,
    source: 'nflverse play-by-play + schedules (nflverse), FTN Data via nflverse (CC-BY-SA 4.0)' };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, `// Automatisch erzeugt von sports/nfl/scripts/build-fd-profiles.js — nicht von Hand ändern.\n// Quellen: ${data.source}\nconst FD_NFL = ${JSON.stringify(data)};\nif (typeof module !== 'undefined') module.exports = FD_NFL;\n`);
  console.log(`FD-Profile ${SEASON}: ${Object.keys(out).length} Teams, Woche ${week} (${wk.length} Spiele), Stand ${asof}, FTN-Plays ${ftnRows.length}`);
})().catch(e => { console.error(e); process.exit(1); });
