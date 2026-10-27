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
//     Die Seite bettet alle Spieler + Rookie-Picks als JSON ein
//     (<script id="ktc-players">), Wert = oneQBValues.value.
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
  const tag = '<script type="application/json" id="ktc-players">';
  let i = html.indexOf(tag), start;
  if (i >= 0) start = i + tag.length;
  else { i = html.indexOf('id="ktc-players">'); if (i < 0) throw new Error('KTC: ktc-players-Block nicht gefunden'); start = i + 'id="ktc-players">'.length; }
  const end = html.indexOf('</script>', start);
  return JSON.parse(html.slice(start, end));
}
async function loadKtc() {
  if (process.env.KTC_HTML) return parseKtc(fs.readFileSync(process.env.KTC_HTML, 'utf8'));
  const all = new Map();
  for (let page = 0; page < 6; page++) {
    const html = await get(`https://keeptradecut.com/dynasty-rankings?page=${page}&filters=QB|WR|RB|TE|RDP&format=1`);
    let added = 0;
    parseKtc(html).forEach(p => { if (!all.has(p.playerID)) { all.set(p.playerID, p); added++; } });
    if (!added) break; // Seite liefert nur Bekanntes → Ende
  }
  return [...all.values()];
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
  const PICK_VALUES = {}, PICK_TIERS = {};
  Object.entries(picks).forEach(([round, years]) => {
    Object.entries(years).forEach(([year, tiers]) => {
      const tv = {}; ['early', 'mid', 'late'].forEach(t => { if (tiers[t]) tv[t] = avgOf(tiers[t]); });
      const mid = tv.mid ?? (tv.early && tv.late ? Math.round((tv.early + tv.late) / 2) : tv.early ?? tv.late);
      if (mid == null) return;
      (PICK_VALUES[round] = PICK_VALUES[round] || {})[year] = mid;
      (PICK_TIERS[round] = PICK_TIERS[round] || {})[year] = tv;
    });
  });

  const now = new Date().toISOString();
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

const TRADE_VALUES_META = ${JSON.stringify({ updated: now, ktc: nK, dd: nD, ddMarket: Number(DD_MARKET), errors })};

const TRADE_VALUES = ${JSON.stringify(list)};

const PICK_VALUES = ${JSON.stringify(PICK_VALUES)};

const PICK_TIERS = ${JSON.stringify(PICK_TIERS)};
`;
  fs.writeFileSync(OUT, out, 'utf8');
  console.log(`Geschrieben: ${list.length} Spieler (KTC ${nK}, DD ${nD}), Picks: ${Object.keys(PICK_VALUES).map(r => r + ' ' + Object.keys(PICK_VALUES[r]).join('/')).join(', ')}`);
  if (errors.length) process.exitCode = 2; // geschrieben, aber eine Quelle fehlte → im Actions-Tab sichtbar
})().catch(e => { console.error(e); process.exit(1); });
