#!/usr/bin/env node
// ============================================================
//  TRADE VALUES SYNC — KeepTradeCut + Dynasty Daddy (wöchentlich)
// ============================================================
//  Ersetzt den manuellen Upload vom 12.08.2026. Schreibt
//  sports/nfl/data/trade-values.js (TRADE_VALUES + PICK_VALUES) für den
//  Trade Analyzer und die Trade History beider Football-Ligen
//  (Bear Witch Project, DOPE).
//
//  Quellen (beide aus GitHub Actions erreichbar, geprüft 27.10.2026 per
//  .github/workflows/web-probe.yml; die Sandbox der Hub-Entwicklung kommt
//  nicht direkt dran):
//   - KTC: https://keeptradecut.com/dynasty-rankings (1QB, format=1).
//     Bis Nov. 2026 steckten alle Spieler + Rookie-Picks als JSON im HTML
//     (<script id="ktc-players">). Seit 24.11.2026 lädt die Seite sie aus
//     /dynasty-rankings/player-pool (mit Cookie der Seite, s. loadKtcPool).
//     Wert = oneQBValues.value.
//   - Dynasty Daddy: Öffentliche API /api/v1/player/all/today?market=N,
//     Wert = trade_value (1QB). market 0 spiegelt nur KTC; market 3 passt
//     zu den bisherigen DD-Werten (r = 0,945 gegen den Upload vom 12.08.,
//     die anderen Märkte 0,81–0,89) → Standard DD_MARKET=3 (änderbar).
//
//  avg = Schnitt der vorhandenen Quellen (wie bisher). Picks: Wert des
//  „Mid“-Picks je Runde/Jahr (Schnitt KTC/DD); Early/Late zusätzlich in
//  PICK_TIERS. Jahre ohne Wert fallen im Analyzer auf das letzte bekannte
//  Jahr zurück.
//
//  Fällt eine Quelle aus, werden ihre Werte (und die Pick-Werte) vom letzten
//  erfolgreichen Lauf übernommen; TRADE_VALUES_META.asof zeigt den Stand je
//  Quelle. Der Lauf endet trotzdem mit Exit 2 (Mail von GitHub).
//
//  Schutz: Weniger als 300 Spieler aus beiden Quellen → Abbruch ohne
//  Schreiben (lieber alte Werte als eine halbe Liste).
//
//  Usage:  node sports/nfl/scripts/sync-trade-values.js
//          KTC_HTML=datei.html DD_JSON=datei.json  (lokaler Test ohne Netz)
// ============================================================

const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'data', 'trade-values.js');
const DD_MARKET = process.env.DD_MARKET || '3';
const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';
const POS = new Set(['QB', 'RB', 'WR', 'TE']);
const ROUNDS = { '1st': '1st', '2nd': '2nd', '3rd': '3rd', '4th': '4th' };
// KTC nutzt teils eigene Kürzel → auf die üblichen (wie Dynasty Daddy/ESPN) bringen
const TEAM_FIX = { KCC: 'KC', LVR: 'LV', TBB: 'TB', GBP: 'GB', NEP: 'NE', NOS: 'NO', SFO: 'SF', JAC: 'JAX', LAR: 'LA', WSH: 'WAS' };
const team = t => TEAM_FIX[t] || t || 'FA';

const normKey = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '').replace(/[^a-z0-9]/g, '');

async function get(url) {
  for (let i = 1; i <= 3; i++) {
    try {
      const res = await fetch(url, { headers: { 'user-agent': UA, accept: '*/*' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.text();
    } catch (e) {
      if (i === 3) throw new Error(`${url}: ${e.message}`);
      await new Promise(r => setTimeout(r, 3000 * i));
    }
  }
}

// ---------- KTC ----------
function parseKtc(html) {
  // Format A (bis Nov. 2026): <script type="application/json" id="ktc-players">[…]</script>
  const tag = 'id="ktc-players">';
  let i = html.indexOf(tag);
  if (i >= 0) {
    const start = i + tag.length, end = html.indexOf('</script>', start);
    return JSON.parse(html.slice(start, end));
  }
  // Format B (ab 24.11.2026): var oneQBPlayers = […]; (älter: var playersArray = […];)  → Array per Klammerzählung ausschneiden
  i = html.search(/(?:var|let|const)\s+(?:oneQBPlayers|playersArray)\s*=\s*\[\s*\{/);
  if (i < 0) throw new Error('KTC: weder ktc-players-Block noch oneQBPlayers/playersArray gefunden (Seitenstruktur geändert?)');
  const start = html.indexOf('[', i);
  let depth = 0, inStr = false, esc = false, end = -1;
  for (let k = start; k < html.length; k++) {
    const c = html[k];
    if (inStr) { if (esc) esc = false; else if (c === '\\') esc = true; else if (c === '"') inStr = false; continue; }
    if (c === '"') inStr = true;
    else if (c === '[' || c === '{') depth++;
    else if (c === ']' || c === '}') { depth--; if (depth === 0) { end = k + 1; break; } }
  }
  if (end < 0) throw new Error('KTC: playersArray nicht vollständig');
  return JSON.parse(html.slice(start, end));
}
// Seit 24.11.2026 bettet KTC nur noch eine Handvoll Spieler ins HTML ein; der Rest kommt
// aus /dynasty-rankings/player-pool?v=<playersVersion>&sr=2. Der Endpunkt antwortet nur mit dem
// Affinity-Cookie der Instanz, die die Seite gerendert hat (sonst 403) → erst Seite laden,
// Set-Cookie + playersVersion merken, dann den Pool mit diesem Cookie holen.
async function loadKtcPool() {
  const page = 'https://keeptradecut.com/dynasty-rankings?page=0&filters=QB|WR|RB|TE|RDP&format=1';
  const res = await fetch(page, { headers: { 'user-agent': UA, accept: 'text/html' } });
  if (!res.ok) throw new Error(`Rankings-Seite HTTP ${res.status}`);
  const html = await res.text();
  const cookies = (res.headers.getSetCookie ? res.headers.getSetCookie() : [res.headers.get('set-cookie') || ''])
    .map(c => c.split(';')[0]).filter(Boolean).join('; ');
  const ver = (html.match(/playersVersion\s*=\s*'([^']+)'/) || html.match(/playersVersion\s*=\s*"([^"]+)"/) || [])[1];
  const rev = (html.match(/KTC_DATA_CACHE_SCHEMA_REV\s*=\s*'([^']+)'/) || [])[1] || '2';
  // Alte Variante: alles steckt noch im HTML
  try { const a = parseKtc(html); if (a.length >= 200) return a; } catch (_) { /* weiter mit Pool */ }
  if (!ver) throw new Error('playersVersion nicht gefunden');
  const url = `https://keeptradecut.com/dynasty-rankings/player-pool?v=${encodeURIComponent(ver)}&sr=${rev}`;
  const r2 = await fetch(url, { headers: { 'user-agent': UA, accept: 'application/json, */*', referer: page, ...(cookies ? { cookie: cookies } : {}) } });
  if (!r2.ok) throw new Error(`player-pool HTTP ${r2.status} (Cookie ${cookies ? 'gesetzt' : 'fehlt'})`);
  const data = await r2.json();
  const arr = Array.isArray(data) ? data : (data.players || data.pool || data.data || null);
  if (!Array.isArray(arr) || !arr.length) throw new Error('player-pool: unbekanntes Format, Schlüssel: ' + Object.keys(data || {}).slice(0, 10).join(','));
  const s0 = arr[0];
  if (!s0 || !s0.playerName || !s0.oneQBValues) throw new Error('player-pool: Felder unbekannt: ' + JSON.stringify(s0).slice(0, 300));
  return arr;
}
async function loadKtc() {
  if (process.env.KTC_HTML) return parseKtc(fs.readFileSync(process.env.KTC_HTML, 'utf8'));
  const pool = await loadKtcPool();
  // nur Spieler + Rookie-Picks
  return pool.filter(p => POS.has(p.position) || p.position === 'RDP');
}

// ---------- Dynasty Daddy ----------
async function loadDd() {
  const txt = process.env.DD_JSON ? fs.readFileSync(process.env.DD_JSON, 'utf8')
    : await get(`https://dynasty-daddy.com/api/v1/player/all/today?market=${DD_MARKET}`);
  const arr = JSON.parse(txt);
  if (!Array.isArray(arr)) throw new Error('Dynasty Daddy: keine Liste');
  return arr;
}

// "2027 Mid 1st" → { year: 2027, tier: 'mid', round: '1st' }
function pickOf(name) {
  const m = String(name).match(/^(\d{4})\s+(Early|Mid|Late)\s+(1st|2nd|3rd|4th)$/i);
  return m ? { year: Number(m[1]), tier: m[2].toLowerCase(), round: ROUNDS[m[3].toLowerCase()] } : null;
}

(async () => {
  const errors = [];
  const [ktc, dd] = await Promise.all([
    loadKtc().catch(e => { errors.push('KTC: ' + e.message); return []; }),
    loadDd().catch(e => { errors.push('Dynasty Daddy: ' + e.message); return []; }),
  ]);
  errors.forEach(m => console.error('⚠️ ' + m));

  // Fällt eine Quelle aus, bleiben ihre letzten Werte erhalten (statt sie zu löschen).
  let prev = null;
  try { prev = new Function(fs.readFileSync(OUT, 'utf8') + ';return { meta: TRADE_VALUES_META, list: TRADE_VALUES, pv: PICK_VALUES, pt: PICK_TIERS };')(); } catch (_) { /* erste Ausführung */ }
  const stale = {}; // Quelle → Stand der übernommenen Werte
  const prevAsof = src => (prev && prev.meta && (prev.meta.asof && prev.meta.asof[src])) || (prev && prev.meta && prev.meta.updated) || null;

  const players = new Map(); // normKey → Eintrag
  const picks = {};          // round → year → tier → { ktc, dd }
  const addPick = (pk, src, v) => {
    if (!pk || !v) return;
    const r = (picks[pk.round] = picks[pk.round] || {}), y = (r[pk.year] = r[pk.year] || {}), t = (y[pk.tier] = y[pk.tier] || {});
    t[src] = v;
  };

  ktc.forEach(p => {
    const v = p.oneQBValues && p.oneQBValues.value;
    if (p.position === 'RDP') { addPick(pickOf(p.playerName), 'ktc', v); return; }
    if (!POS.has(p.position) || !v) return;
    players.set(normKey(p.playerName), { name: p.playerName, team: team(p.team), pos: p.position, age: p.age || null, ktc: v });
  });
  if (!ktc.length && prev) {
    let n = 0;
    prev.list.forEach(p => { if (p.ktc == null) return; const k = normKey(p.name); const cur = players.get(k);
      if (cur) cur.ktc = p.ktc; else players.set(k, { name: p.name, team: p.team, pos: p.pos, age: p.age, ktc: p.ktc }); n++; });
    if (n) { stale.ktc = prevAsof('ktc'); console.error(`⚠️ KTC: ${n} Werte vom letzten erfolgreichen Lauf übernommen (${stale.ktc}).`); }
  }
  if (!dd.length && prev) {
    let n = 0;
    prev.list.forEach(p => { if (p.dd == null) return; const k = normKey(p.name); const cur = players.get(k);
      if (cur) cur.dd = p.dd; else players.set(k, { name: p.name, team: p.team, pos: p.pos, age: p.age, dd: p.dd }); n++; });
    if (n) { stale.dd = prevAsof('dd'); console.error(`⚠️ Dynasty Daddy: ${n} Werte vom letzten erfolgreichen Lauf übernommen (${stale.dd}).`); }
  }
  dd.forEach(p => {
    const v = p.trade_value;
    if (p.position === 'PI') { addPick(pickOf(p.full_name), 'dd', v); return; }
    if (!POS.has(p.position) || !v) return;
    const k = normKey(p.full_name), cur = players.get(k);
    if (cur) { cur.dd = v; if (p.team && p.team !== 'FA') cur.team = p.team; if (!cur.age && p.age) cur.age = p.age; }
    else players.set(k, { name: p.full_name, team: p.team || 'FA', pos: p.position, age: p.age || null, dd: v });
  });

  const list = [...players.values()].map(p => {
    const vals = [p.ktc, p.dd].filter(v => v != null);
    return { name: p.name, team: p.team, pos: p.pos, age: p.age, ktc: p.ktc ?? null, dd: p.dd ?? null, avg: Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) };
  }).filter(p => p.avg > 0).sort((a, b) => b.avg - a.avg);

  // Positionsrang nach avg (für „WR25“-Anzeige)
  const seen = {};
  list.forEach(p => { seen[p.pos] = (seen[p.pos] || 0) + 1; p.posRank = seen[p.pos]; });

  if (list.length < 300) {
    console.error(`Abbruch: nur ${list.length} Spieler (KTC ${ktc.length}, DD ${dd.length}) — trade-values.js bleibt unverändert.`);
    process.exit(1);
  }

  const avgOf = t => { const v = [t.ktc, t.dd].filter(x => x != null); return v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length) : null; };
  let PICK_VALUES = {}, PICK_TIERS = {};
  Object.entries(picks).forEach(([round, years]) => {
    Object.entries(years).forEach(([year, tiers]) => {
      const tv = {}; ['early', 'mid', 'late'].forEach(t => { if (tiers[t]) tv[t] = avgOf(tiers[t]); });
      const mid = tv.mid ?? (tv.early && tv.late ? Math.round((tv.early + tv.late) / 2) : tv.early ?? tv.late);
      if (mid == null) return;
      (PICK_VALUES[round] = PICK_VALUES[round] || {})[year] = mid;
      (PICK_TIERS[round] = PICK_TIERS[round] || {})[year] = tv;
    });
  });

  // Picks: fehlt eine Quelle, die alten Pick-Werte komplett behalten (sie sind KTC/DD-Mischwerte)
  if ((stale.ktc || stale.dd) && prev && prev.pv) { PICK_VALUES = prev.pv; PICK_TIERS = prev.pt || {}; }

  const now = new Date().toISOString();
  const asof = { ktc: stale.ktc || (ktc.length ? now : null), dd: stale.dd || (dd.length ? now : null) };
  const nK = list.filter(p => p.ktc != null).length, nD = list.filter(p => p.dd != null).length;
  const out = `// ============================================================
//  TRADE_VALUES — für den Trade Analyzer (Football)
// ============================================================
//  AUTO-GENERIERT von sports/nfl/scripts/sync-trade-values.js
//  (Workflow .github/workflows/nfl-trade-values.yml, wöchentlich).
//  Zuletzt synchronisiert: ${now}
//
//  avg = Schnitt aus KeepTradeCut (1QB) und Dynasty Daddy (1QB,
//  market=${DD_MARKET}); bei nur einer Quelle nur diese. posRank = Rang
//  innerhalb der Position nach avg. ${list.length} Spieler (KTC ${nK}, DD ${nD}).
//
//  PICK_VALUES[runde][jahr] = Mid-Pick (Schnitt KTC/DD), PICK_TIERS mit
//  early/mid/late. Fehlende Jahre → Analyzer nimmt das letzte bekannte.
// ============================================================

const TRADE_VALUES_META = ${JSON.stringify({ updated: now, ktc: nK, dd: nD, ddMarket: Number(DD_MARKET), asof, errors })};

const TRADE_VALUES = ${JSON.stringify(list)};

const PICK_VALUES = ${JSON.stringify(PICK_VALUES)};

const PICK_TIERS = ${JSON.stringify(PICK_TIERS)};
`;
  fs.writeFileSync(OUT, out, 'utf8');
  console.log(`Geschrieben: ${list.length} Spieler (KTC ${nK}, DD ${nD}), Picks: ${Object.keys(PICK_VALUES).map(r => r + ' ' + Object.keys(PICK_VALUES[r]).join('/')).join(', ')}`);
  if (errors.length) process.exitCode = 2; // geschrieben, aber eine Quelle fehlte → im Actions-Tab sichtbar
})().catch(e => { console.error(e); process.exit(1); });
