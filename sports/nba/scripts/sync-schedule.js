#!/usr/bin/env node
// ============================================================
//  SPIELPLAN NFL + NBA → sports/nba/data/schedule.js (SCHEDULE)
// ============================================================
//  Für die Seite #/<liga>/schedule (tools/schedule.js). Der Browser kann
//  die ESPN-Scoreboard-API nicht direkt lesen (CORS/Proxy-Sperren), daher
//  holt dieses Script den Spielplan serverseitig: 7 Tage zurück bis 28 Tage
//  voraus, NFL und NBA (inkl. Preseason). Keine Secrets, keine npm-Pakete.
//  Läuft bei jedem NBA-Sync mit (aufgerufen am Anfang von
//  scripts/build-offseason-rankings.js, nicht fatal). Schreibt nur, wenn
//  sich etwas geändert hat. Manuell: node sports/nba/scripts/sync-schedule.js
// ============================================================
const fs = require('fs');
const path = require('path');
const https = require('https');

const OUT = path.join(__dirname, '..', 'data', 'schedule.js');
const SPORTS = { nfl: 'football/nfl', nba: 'basketball/nba' };
const DAY = 864e5;
const ymd = d => d.toISOString().slice(0, 10).replace(/-/g, '');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'mfhfb-hq-bot', Accept: 'application/json' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) return get(res.headers.location).then(resolve, reject);
      if (res.statusCode !== 200) { res.resume(); return reject(new Error('HTTP ' + res.statusCode)); }
      let d = ''; res.on('data', c => { d += c; }); res.on('end', () => { try { resolve(JSON.parse(d)); } catch (e) { reject(e); } });
    }).on('error', reject);
  });
}

function parse(ev) {
  const c = (ev.competitions || [])[0] || {};
  const side = ha => (c.competitors || []).find(x => x.homeAway === ha) || {};
  const team = x => { const t = x.team || {}; return { a: t.abbreviation || '?', n: t.shortDisplayName || t.displayName || '?', l: t.logo || null, s: x.score != null && x.score !== '' ? String(x.score) : null, w: !!x.winner }; };
  const st = (ev.status || c.status || {}).type || {};
  return {
    id: ev.id, d: ev.date, away: team(side('away')), home: team(side('home')),
    st: st.state || 'pre', det: st.shortDetail || '', tbd: ev.timeValid === false || st.name === 'STATUS_TBD',
    tv: [...new Set((c.broadcasts || []).flatMap(b => b.names || []))].slice(0, 2),
    t: (ev.season || {}).type || null, wk: (ev.week || {}).number || null,
    note: ((c.notes || [])[0] || {}).headline || '', ns: !!c.neutralSite, city: ((c.venue || {}).address || {}).city || '',
  };
}

async function main() {
  const now = Date.now();
  const from = new Date(now - 7 * DAY), to = new Date(now + 28 * DAY);
  const out = { from: from.toISOString().slice(0, 10), to: to.toISOString().slice(0, 10) };
  for (const [k, p] of Object.entries(SPORTS)) {
    try {
      const d = await get(`https://site.api.espn.com/apis/site/v2/sports/${p}/scoreboard?dates=${ymd(from)}-${ymd(to)}&limit=1000`);
      out[k] = (d.events || []).map(parse).sort((a, b) => a.d.localeCompare(b.d));
      console.log(`Spielplan ${k}: ${out[k].length} Spiele`);
    } catch (e) {
      console.warn(`Spielplan ${k} nicht ladbar (nicht kritisch): ${e.message}`);
      out[k] = null;
    }
  }
  // Fehlt ein Sport, den alten Stand behalten
  let old = null;
  if (fs.existsSync(OUT)) { try { old = new Function(fs.readFileSync(OUT, 'utf8') + ';return SCHEDULE')(); } catch (e) { /* neu schreiben */ } }
  for (const k of Object.keys(SPORTS)) if (!out[k]) out[k] = (old && old[k]) || [];
  const body = JSON.stringify({ from: out.from, to: out.to, nfl: out.nfl, nba: out.nba });
  if (old && JSON.stringify({ from: old.from, to: old.to, nfl: old.nfl, nba: old.nba }) === body) { console.log('Spielplan unverändert.'); return; }
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, `// AUTO-GENERIERT von sports/nba/scripts/sync-schedule.js (NBA-Sync). Nicht von Hand editieren.\n// Zeiten in UTC (d), Anzeige in Europe/Berlin macht tools/schedule.js.\nconst SCHEDULE = ${JSON.stringify({ updatedAt: new Date().toISOString(), ...JSON.parse(body) })};\n`, 'utf8');
  console.log('sports/nba/data/schedule.js geschrieben.');
}

main().catch(e => { console.warn('Spielplan-Sync fehlgeschlagen (nicht kritisch):', e.message); process.exit(0); });
