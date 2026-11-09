#!/usr/bin/env node
// ============================================================
//  WOCHEN-KATEGORIEN für Fantrax-9-Cat-Ligen (World Cup seit 08.11., Dizzle CBB seit 09.11.2026)
// ============================================================
//  Fantrax liefert über die öffentliche API keine Kategorie-Werte je Matchup.
//  Wir rechnen sie selbst nach (wie sports/nba/scripts/sync-week-stats.js für ESPN):
//   • Aufstellung: getTeamRosters?period=<Roster-Periode>. Welche Periode ein Spieltag
//     hat, steht in getLeagueInfo.rosterPeriods (World Cup: täglich, Dizzle: wöchentlich);
//     gesucht wird die Periode, die den Spieltag um 23 Uhr ET enthält.
//   • Stats je Spieler und Tag: Hub-Box-Scores <box>/<prefix><YYYY-MM-DD>.games.json
//   • gezählt werden nur Spieler mit Status ACTIVE
//   • Matchup-Woche = Fantrax-Scoring-Periode [start, end) → Spiele am Enddatum
//     (Montag) zählen schon zur neuen Woche
//  Abgeschlossene Wochen bleiben aus dem letzten Lauf stehen, die laufende wird neu
//  gerechnet. Kontrolle: Kategorien-Bilanz aus unseren Wochen vs. Fantrax-Standings.
//
//  Ausgabe: leagues/<liga>/data/week-stats.js (WEEK_STATS, Format wie TTHQ/Funkytown)
//  Usage:   node scripts/fantrax-week-stats.js --league=worldcup|cbb   (nach sync-fantrax.js)
// ============================================================

const fs = require('fs');
const path = require('path');

const LEAGUES = {
  worldcup: { id: 'nq58zcxtmutve46g', sport: 'NBA', box: 'sports/nba/scripts/data', prefix: 'daily-9cat_nba_', schedule: 'WC_SCHEDULE', aliases: 'sports/nba/data/aliases.js' },
  cbb: { id: 'z8gwfku2mpmwh0xe', sport: 'NCAAB', box: 'sports/cbb/scripts/data', prefix: 'daily-9cat_ncaab_', schedule: 'CBB_SCHEDULE', aliases: null },
};
const LKEY = (process.argv.find(a => a.startsWith('--league=')) || '--league=worldcup').split('=')[1];
const CFG = LEAGUES[LKEY];
if (!CFG) { console.error(`Unbekannte Liga ${LKEY} (${Object.keys(LEAGUES).join(', ')})`); process.exit(1); }
const ROOT = path.join(__dirname, '..');
const DATA = `leagues/${LKEY}/data`;
const OUT = path.join(ROOT, DATA, 'week-stats.js');
const BOX = path.join(ROOT, CFG.box);
const BASE = 'https://www.fantrax.com/fxea/general';
const LEAGUE_ID = CFG.id;
const CATS = ['pts', 'reb', 'ast', 'stl', 'blk', 'tpm', 'fgp', 'ftp', 'tov'];

const load = (file, name) => {
  const p = path.join(ROOT, file);
  if (!fs.existsSync(p)) return null;
  return new Function(fs.readFileSync(p, 'utf8').replace(/^const /gm, 'var ') + `;return typeof ${name}!=='undefined'?${name}:null`)();
};
async function getJson(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'mfhfb-hq-bot', Accept: 'application/json' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} für ${url.replace(BASE, '')}`);
  return res.json();
}
const flipName = n => { const s = String(n || ''); const i = s.indexOf(', '); return i > 0 ? `${s.slice(i + 2)} ${s.slice(0, i)}` : s; };
const FIRST = (CFG.aliases && load(CFG.aliases, 'NAME_FIRST_ALIASES')) || {};
function key(raw) { // = MFHFB.nba.key
  if (!raw) return '';
  let s = String(raw).toLowerCase().trim().normalize('NFD').replace(/[̀-ͯ]/g, '');
  s = s.replace(/\./g, '').replace(/['’‘`]/g, '').replace(/\b(jr|sr|iii|ii)\b/g, '').replace(/\s+/g, ' ').trim();
  return FIRST[s] || s;
}
const CANON = { NOP: 'NOR', NO: 'NOR', PHX: 'PHO', WSH: 'WAS', GS: 'GSW', SA: 'SAS', NY: 'NYK', UTAH: 'UTA', BRK: 'BKN' };
const canon = a => { const u = String(a || '').toUpperCase(); return CANON[u] || u; };
const etToday = () => new Date().toLocaleDateString('en-CA', { timeZone: 'America/New_York' });
const addDay = (d, n) => { const x = new Date(d + 'T12:00:00Z'); x.setUTCDate(x.getUTCDate() + n); return x.toISOString().slice(0, 10); };
const zero = () => ({ pts: 0, blk: 0, stl: 0, ast: 0, reb: 0, tov: 0, fgm: 0, fga: 0, ftm: 0, fta: 0, tpm: 0, gp: 0, min: 0 });
const val = (t, c) => (c === 'fgp' ? (t.fga ? t.fgm / t.fga : 0) : c === 'ftp' ? (t.fta ? t.ftm / t.fta : 0) : t[c] || 0);
function compare(a, b) {
  let w = 0, l = 0, t = 0;
  CATS.forEach(c => {
    const x = Math.round(val(a, c) * 1e6), y = Math.round(val(b, c) * 1e6);
    if (x === y) t++; else if ((x > y) !== (c === 'tov')) w++; else l++;
  });
  return { w, l, t };
}

async function main() {
  const TEAMS = load(`${DATA}/teams-rosters.js`, 'TEAMS');
  const SCH = load(`${DATA}/fantasy-schedule.js`, CFG.schedule);
  const REC = load(`${DATA}/rosters-live.js`, 'TEAM_RECORDS_LIVE');
  const OLD = load(`${DATA}/week-stats.js`, 'WEEK_STATS');
  if (!TEAMS || !SCH) throw new Error('teams-rosters.js / fantasy-schedule.js fehlen — erst sync-fantrax.js laufen lassen');
  const idByFx = new Map(TEAMS.map(t => [t.fx, t.id]));

  const [info, ids] = await Promise.all([getJson(`${BASE}/getLeagueInfo?leagueId=${LEAGUE_ID}`), getJson(`${BASE}/getPlayerIds?sport=${CFG.sport}`)]);
  // Roster-Periode für einen Spieltag: die Periode, die den Tag um 23 Uhr ET enthält
  const fxTime = s => Date.parse(String(s).replace(/\.\d+(-\d{2})(\d{2})$/, '$1:$2'));
  const RP = (info.rosterPeriods || []).map(p => ({ n: p.number, a: fxTime(p.startDate), b: fxTime(p.endDate) }));
  const rpOf = day => { const t = Date.parse(day + 'T23:00:00-05:00'); const p = RP.find(x => x.a <= t && t <= x.b); return p ? p.n : null; };
  const nameOf = fx => flipName((ids[fx] || {}).name);
  const today = etToday();

  // Wochen: Tage [start, end) — Montag (Enddatum) gehört zur nächsten Woche
  const weeks = (SCH.periods || []).map(p => {
    const days = [];
    for (let d = p.start; d < p.end; d = addDay(d, 1)) days.push(d);
    return { n: p.n, days, playoff: p.playoff, matchups: p.matchups };
  });
  const cur = (weeks.find(w => w.days[0] <= today && today <= w.days[w.days.length - 1]) || weeks.filter(w => w.days[0] <= today).pop() || weeks[0]).n;

  const rosterCache = new Map();
  async function rosterOn(day) {
    const rp = rpOf(day);
    if (!rp) return null;
    if (!rosterCache.has(rp)) rosterCache.set(rp, await getJson(`${BASE}/getTeamRosters?leagueId=${LEAGUE_ID}&period=${rp}`));
    return rosterCache.get(rp);
  }

  const periods = {}, matchups = {}, unmatched = new Map(), seen = new Set();
  for (const w of weeks) {
    if (w.days[0] > today) break;
    const done = w.days[w.days.length - 1] < today;
    // nur Wochen mit echten Spielen aus dem letzten Lauf übernehmen
    const oldHasGames = OLD && OLD.periods && OLD.periods[w.n] && Object.values(OLD.periods[w.n]).some(t => t.gp > 0);
    // Wochen der letzten 18 Tage immer neu rechnen (Box Scores liegen 21 Tage vor; Nachträge,
    // verspätete Spiele und neue Namens-Zuordnungen landen so auch in abgeschlossenen Wochen)
    const settled = w.days[w.days.length - 1] < addDay(today, -18);
    if (done && settled && oldHasGames && OLD.complete && OLD.complete.includes(w.n)) { periods[w.n] = OLD.periods[w.n]; matchups[w.n] = OLD.matchups[w.n]; continue; }
    const tot = {};
    TEAMS.forEach(t => { tot[t.id] = zero(); });
    for (const day of w.days) {
      if (day > today) break;
      const f = path.join(BOX, `${CFG.prefix}${day}.games.json`);
      if (!fs.existsSync(f)) continue;
      const box = new Map(), played = new Set();
      const dup = new Set();
      JSON.parse(fs.readFileSync(f, 'utf8')).games.forEach(g => [g.away, g.home].forEach(side => { if ((side.players || []).length) played.add(canon(side.abbr)); (side.players || []).forEach(p => { const k = key(p.name); if (box.has(k)) dup.add(k); box.set(k, p); }); }));
      dup.forEach(k => box.delete(k)); // gleicher Name zweimal am selben Tag (College) → nicht raten
      // Ersatz-Index für Kurzformen (Will ↔ William, Matt ↔ Matthew …): Nachname + gleiche ersten 3 Buchstaben
      const byLast = new Map();
      box.forEach((p, k) => { const parts = k.split(' '); const last = parts.slice(1).join(' '); if (!last) return; if (!byLast.has(last)) byLast.set(last, []); byLast.get(last).push([parts[0], p]); });
      const lookup = nm => {
        const k = key(nm); if (box.has(k)) return box.get(k);
        const parts = k.split(' '), last = parts.slice(1).join(' '), first = parts[0] || '';
        const c = (byLast.get(last) || []).filter(([f]) => first.length >= 3 && f.length >= 3 && (f.startsWith(first.slice(0, 3)) || first.startsWith(f.slice(0, 3))));
        return c.length === 1 ? c[0][1] : null;
      };
      if (!box.size) continue;
      const ro = await rosterOn(day);
      if (!ro) continue;
      Object.entries(ro.rosters || {}).forEach(([fx, r]) => {
        const id = idByFx.get(fx);
        if (!id) return;
        (r.rosterItems || []).forEach(it => {
          if (it.status !== 'ACTIVE') return;
          const nm = nameOf(it.id), p = lookup(nm);
          if (!p) { if (nm) unmatched.set(nm, day); return; }
          seen.add(nm);
          if (!p.min) return; // nicht gespielt (DNP)
          const t = tot[id];
          t.pts += p.pts || 0; t.reb += p.reb || 0; t.ast += p.ast || 0; t.stl += p.stl || 0; t.blk += p.blk || 0;
          t.tov += p.to || 0; t.tpm += p.tpm || 0; t.fgm += p.fgm || 0; t.fga += p.fga || 0; t.ftm += p.ftm || 0; t.fta += p.fta || 0;
          t.min += p.min || 0; t.gp += 1;
        });
      });
    }
    periods[w.n] = tot;
    matchups[w.n] = (w.matchups || []).map(([away, home]) => {
      const c = compare(tot[home], tot[away]);
      return { home, away, hw: c.w, hl: c.l, ht: c.t, winner: c.w > c.l ? 'HOME' : c.l > c.w ? 'AWAY' : 'TIE', playoff: !!w.playoff };
    });
  }
  const complete = Object.keys(periods).map(Number).filter(n => { const w = weeks.find(x => x.n === n); return w && w.days[w.days.length - 1] < today; });

  // Kontrolle gegen Fantrax (Fantrax zählt nur abgeschlossene Wochen)
  const mine = {};
  complete.forEach(n => (matchups[n] || []).forEach(m => {
    [[m.home, m.hw, m.hl, m.ht], [m.away, m.hl, m.hw, m.ht]].forEach(([id, w, l, t]) => { const r = mine[id] = mine[id] || [0, 0, 0]; r[0] += w; r[1] += l; r[2] += t; });
  }));
  let same = 0, total = 0;
  const diffs = [];
  TEAMS.forEach(t => {
    const fx = String((REC && REC.records && REC.records[t.id]) || '');
    const ours = (mine[t.id] || [0, 0, 0]).join('-');
    total++; if (fx === ours) same++; else diffs.push(`${t.name}: Fantrax ${fx}, nachgerechnet ${ours}`);
  });
  console.log(`  Wochen ${Object.keys(periods).join(',')} (laufend: ${cur}) · Bilanz-Abgleich mit Fantrax: ${same}/${total} exakt`);
  if (diffs.length) console.log('  Abweichungen: ' + diffs.join(' · '));
  // aktive Spieler, die in den gerechneten Tagen NIE im Box Score auftauchten (verletzt, DNP oder Name abweichend)
  const never = [...unmatched.keys()].filter(n => !seen.has(n));
  if (never.length) console.log(`  ! Aktiv, aber nie im Box Score (${never.length}): ${never.slice(0, 25).join(', ')}`);

  const out = { season: Number(info.seasonYear) + 1, current: cur, updated: new Date().toISOString(), complete, check: `${same}/${total}`, periods, matchups };
  fs.writeFileSync(OUT, `// ============================================================
//  WEEK_STATS — Wochen-Kategorien je Team (${LKEY})
//  AUTO-GENERIERT von scripts/fantrax-week-stats.js --league=${LKEY}: tägliche
//  Fantrax-Aufstellung (nur ACTIVE) × Hub-Box-Scores. Kontrolle: check = Teams,
//  deren nachgerechnete Kategorien-Bilanz exakt Fantrax entspricht.
//  Shape: { season, current, complete[], periods: { woche: { teamId: Totals } },
//           matchups: { woche: [{ home, away, hw, hl, ht, winner, playoff }] } }
// ============================================================

const WEEK_STATS = ${JSON.stringify(out)};
`, 'utf8');
  console.log('  ✓ week-stats.js');
}

main().catch(err => {
  console.error('Wochen-Stats fehlgeschlagen (alte Daten bleiben):', err.message);
  console.log(`::warning title=Wochen-Stats ${LKEY}::${err.message}`);
});
