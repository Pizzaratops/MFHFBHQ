#!/usr/bin/env node
// ============================================================
//  US-Manager (basketball.de) — tägliche Übersicht
// ============================================================
//  Läuft per GitHub Action (usm-sync.yml) täglich 12:30 Berlin, also kurz
//  nach dem offiziellen FP-Update von basketball.de (12:00). Loggt mit den
//  Repo-Secrets USM_USER / USM_PASS ein (legt Beyaz selbst an) und liest:
//
//    /app/usmanager/team         eigener Kader (Gehalt, Spiele, FP LS, FP G, FP PS),
//                                Trades übrig, Restbudget
//    /app/usmanager/ranking?p=N  komplette Manager-Rangliste (30 je Seite)
//    /app/usmanager/top-spieler  nur montags (bzw. --snapshot): Gehalts-Snapshot
//                                nach dem Sonntags-Update → usm-snapshots.js
//
//  Schreibt:
//    leagues/usm/data/usm-live.js     USM_LIVE (aktueller Stand) + USM_HISTORY (je Tag)
//    leagues/usm/data/usm-ranking.js  USM_RANKING (komplette Rangliste, aktuell)
//    leagues/usm/data/usm-snapshots.js  (montags neuer Snapshot hinten angehängt)
//
//  Tagesrang = Rang nach „Punkte letztes Spiel“ unter allen Managern (die
//  Spieltagssieger-Seite ist Premium). Spielerpunkte des Tages = Differenz der
//  Saison-FP zum Vortag (FP LS als Fallback am ersten Tag).
//
//  Aufruf: node leagues/usm/scripts/sync-usm.js [--force] [--snapshot] [--dry]
//    --force     auch vor 12:00 Berlin laufen (manueller Start)
//    --snapshot  Gehalts-Snapshot erzwingen
//    --dry       nichts schreiben, nur ausgeben
//  Keine npm-Abhängigkeiten (Node 20: fetch).
// ============================================================

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../..');
const DATA = path.join(ROOT, 'leagues/usm/data');
const CONFIG = JSON.parse(fs.readFileSync(path.join(ROOT, 'leagues/usm/usm-config.json'), 'utf8'));
const BASE = 'https://basketball.de';
const ARGS = new Set(process.argv.slice(2));
const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

// ---------- Zeit (Berlin) ----------
function berlinParts(d = new Date()) {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', weekday: 'short', hour12: false,
  }).formatToParts(d).map(x => [x.type, x.value]));
  return { date: `${p.year}-${p.month}-${p.day}`, hour: +p.hour % 24, weekday: p.weekday };
}
const addDays = (iso, n) => { const d = new Date(iso + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };

// ---------- HTTP mit Cookie-Jar ----------
const jar = new Map();
function storeCookies(res) {
  const list = typeof res.headers.getSetCookie === 'function' ? res.headers.getSetCookie() : [];
  for (const c of list) {
    const [kv] = c.split(';');
    const i = kv.indexOf('=');
    if (i > 0) jar.set(kv.slice(0, i).trim(), kv.slice(i + 1).trim());
  }
}
const cookieHeader = () => [...jar].map(([k, v]) => `${k}=${v}`).join('; ');
async function req(url, opts = {}, hops = 0) {
  const res = await fetch(url.startsWith('http') ? url : BASE + url, {
    ...opts, redirect: 'manual',
    headers: { 'User-Agent': UA, 'Accept-Language': 'de-DE,de;q=0.9', Cookie: cookieHeader(), ...(opts.headers || {}) },
  });
  storeCookies(res);
  if (res.status >= 300 && res.status < 400 && res.headers.get('location') && hops < 6) {
    return req(new URL(res.headers.get('location'), BASE).toString(), { method: 'GET' }, hops + 1);
  }
  return { status: res.status, url: res.url, html: await res.text() };
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

// ---------- HTML-Helfer (ohne DOM-Bibliothek) ----------
const decode = s => s
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'")
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&#(\d+);?/g, (m, n) => String.fromCharCode(+n))
  .replace(/\s+/g, ' ').trim();
function tables(html) {
  return [...html.matchAll(/<table[\s\S]*?<\/table>/gi)].map(m =>
    [...m[0].matchAll(/<tr[\s\S]*?<\/tr>/gi)].map(r => [...r[0].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi)].map(c => decode(c[1]))));
}
const num = s => { const v = parseFloat(String(s).replace(/,/g, '').replace(/^\+/, '')); return Number.isFinite(v) ? v : 0; };

// ---------- Login ----------
async function login() {
  const user = process.env.USM_USER, pass = process.env.USM_PASS;
  if (!user || !pass) throw new Error('Secrets USM_USER / USM_PASS fehlen (Repo → Settings → Secrets and variables → Actions).');
  await req('/app/auth/login');
  // Das Login-Formular schickt per jQuery.post an /app/auth/logon und bekommt JSON {status, notactivated}
  const body = new URLSearchParams({ username: user, password: pass }).toString();
  const r = await req('/app/auth/logon', { method: 'POST', body, headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json, text/javascript, */*; q=0.01', Origin: BASE, Referer: BASE + '/app/auth/login' } });
  let js = null;
  try { js = JSON.parse(r.html.trim()); } catch (e) { /* kein JSON */ }
  if (!js) throw new Error(`Login: unerwartete Antwort (HTTP ${r.status}, ${r.html.length} Zeichen, Anfang: ${r.html.slice(0, 80).replace(/\s+/g, ' ')})`);
  if (!js.status) throw new Error(js.notactivated ? 'Login: Konto nicht aktiviert' : 'Login: Falsche Logindaten (USM_USER / USM_PASS prüfen)');
  const t = await req('/app/usmanager/team');
  if (!/FP PS|FP LS/.test(t.html)) throw new Error('Login fehlgeschlagen (Team-Seite ohne Kader). Benutzername/Passwort prüfen.');
  return t.html;
}

// ---------- Parser ----------
function parseTeam(html) {
  const text = decode(html);
  const name = (html.match(/class="sc-text"[^>]*>\s*<h3>([^<]+)<\/h3>/i) || [])[1] || CONFIG.myTeam;
  const trades = (text.match(/noch\s+(\d+)\s+Trade/i) || [])[1];
  const budget = (text.match(/([\d.,]+)\s+Millionen\s+Euro\s+an\s+Budget/i) || [])[1];
  const POS = ['G', 'F', 'C'];
  const roster = [], sold = [];
  tables(html).filter(t => t.length > 1 && /Spieler/.test((t[0] || []).join(' ')) && /(FP|MP) LS/.test(t[0].join(' ')))
    .forEach((t, ti) => {
      const isSold = /MP LS/.test(t[0].join(' ')) || ti > 2;
      for (const c of t.slice(1)) {
        if (c.length < 8) continue;
        const p = { name: c[0], team: c[1], rookie: c[2] ? 1 : 0, sal: num(c[3]), gp: num(c[4]), last: num(c[5]), fp: num(c[6]), fpg: num(c[7]) };
        if (isSold) sold.push(p); else roster.push({ pos: POS[ti] || '', ...p });
      }
    });
  return { name: decode(name), trades: trades != null ? +trades : null, budget: budget != null ? num(budget) : null, roster, sold };
}
function parseRankingPage(html) {
  const t = tables(html).find(t => t.length && /Rang/.test((t[0] || []).join(' ')) && /Manager/.test(t[0].join(' ')));
  if (!t) return [];
  return t.slice(1).filter(c => c.length >= 7 && /^\d+$/.test(c[0]))
    .map(c => [+c[0], num(c[1]), c[2], c[3].replace(/\s*♔\s*$/, ''), num(c[4]), num(c[5]), num(c[6]), /♔/.test(c[3]) ? 1 : 0]);
}

async function fetchRanking() {
  const first = await req('/app/usmanager/ranking');
  let pages = 1;
  for (const m of first.html.matchAll(/ranking\/?\?p=(\d+)/g)) pages = Math.max(pages, +m[1]);
  const rows = parseRankingPage(first.html);
  for (let p = 2; p <= pages; p++) {
    await sleep(250);
    rows.push(...parseRankingPage((await req('/app/usmanager/ranking/?p=' + p)).html));
  }
  // Tagesrang (Wettkampf-Rang nach „Punkte letztes Spiel“)
  const byDay = rows.map(r => r[5]).sort((a, b) => b - a);
  const dayRank = v => byDay.indexOf(v) + 1;
  return rows.map(r => ({ rank: r[0], diff: r[1], team: r[2], mgr: r[3], pts: r[4], day: r[5], avg: r[6], premium: r[7], dayRank: dayRank(r[5]) }));
}

async function fetchTopPlayers() {
  const out = [];
  const first = await req('/app/usmanager/top-spieler/?p=1');
  let pages = 1;
  for (const m of first.html.matchAll(/top-spieler\/?\?p=(\d+)/g)) pages = Math.max(pages, +m[1]);
  const grab = html => {
    const t = tables(html).find(t => t.length && /Gehalt/.test((t[0] || []).join(' ')));
    if (!t) return 0;
    // Rookie-Spalte: Häkchen ist ein Bild/Icon → im Rohtext leer; Rohzeilen separat prüfen
    const raw = [...(html.match(/<table[\s\S]*?<\/table>/i) || [''])[0].matchAll(/<tr[\s\S]*?<\/tr>/gi)].slice(1);
    let k = 0;
    t.slice(1).forEach((c, i) => {
      if (c.length < 7) return;
      const cells = raw[i] ? [...raw[i][0].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map(x => x[1]) : [];
      const rookie = cells[2] && (decode(cells[2]) || /<(img|svg|i|span)\b/i.test(cells[2])) ? 1 : 0;
      out.push([c[0], c[1], c[3], num(c[4]), rookie, num(c[5]), num(c[6])]);
      k++;
    });
    return k;
  };
  if (!grab(first.html)) throw new Error('Top-Spieler-Tabelle nicht gefunden');
  for (let p = 2; p <= pages; p++) { await sleep(250); grab((await req('/app/usmanager/top-spieler/?p=' + p)).html); }
  return out;
}

// ---------- Dateien ----------
function readConst(file, name) {
  const f = path.join(DATA, file);
  if (!fs.existsSync(f)) return null;
  try { return new Function(fs.readFileSync(f, 'utf8') + `;return typeof ${name}!=='undefined'?${name}:null;`)(); } catch (e) { return null; }
}
const jsonLine = v => JSON.stringify(v);

function writeLive(live, history) {
  const head = '// US-Manager (basketball.de) — tägliche Übersicht, erzeugt von leagues/usm/scripts/sync-usm.js\n'
    + '// (GitHub Action usm-sync.yml, täglich 12:30 Berlin nach dem FP-Update von basketball.de). Nicht von Hand bearbeiten.\n';
  const src = head
    + 'const USM_LIVE = ' + JSON.stringify(live, null, 1) + ';\n'
    + 'const USM_HISTORY = [\n' + history.map(h => ' ' + jsonLine(h)).join(',\n') + '\n];\n';
  fs.writeFileSync(path.join(DATA, 'usm-live.js'), src);
}
function writeRanking(date, rows) {
  const src = '// US-Manager — komplette Manager-Rangliste (aktuell), erzeugt von leagues/usm/scripts/sync-usm.js\n'
    + '// Zeile: [Rang, +/-, Team, Manager, Punkte, Punkte letztes Spiel, MP/Spiel, Tagesrang]\n'
    + `const USM_RANKING = { date: ${jsonLine(date)}, rows: [\n`
    + rows.map(r => ' ' + jsonLine([r.rank, r.diff, r.team, r.mgr, r.pts, r.day, r.avg, r.dayRank])).join(',\n') + '\n] };\n';
  fs.writeFileSync(path.join(DATA, 'usm-ranking.js'), src);
}
function appendSnapshot(date, through, players) {
  const f = path.join(DATA, 'usm-snapshots.js');
  const src = fs.readFileSync(f, 'utf8');
  if (src.includes(`date: "${date}"`)) return false;
  const cmp = (x, y) => x[0] < y[0] ? -1 : x[0] > y[0] ? 1 : x[1] < y[1] ? -1 : x[1] > y[1] ? 1 : 0;
  const block = ` { date: "${date}", through: "${through}", note: "automatisch (usm-sync.yml)", players: [\n`
    + players.slice().sort(cmp).map(p => '   ' + jsonLine(p)).join(',\n') + '\n ] },\n];';
  const i = src.lastIndexOf('];');
  fs.writeFileSync(f, src.slice(0, i).replace(/\s*$/, '') .replace(/\}\s*$/, '},') + '\n' + block + src.slice(i + 2));
  return true;
}

// ---------- Hauptlauf ----------
(async () => {
  const now = berlinParts();
  if (now.hour < 12 && !ARGS.has('--force')) {
    console.log(`Berlin ${now.hour} Uhr: vor dem 12:00-Update von basketball.de — übersprungen.`);
    return;
  }
  const gameday = addDays(now.date, -1); // FP-Update 12:00 enthält die US-Spiele der Nacht
  const teamHtml = await login();
  const team = parseTeam(teamHtml);
  if (!team.roster.length) throw new Error('Kader nicht gefunden (Seitenaufbau geändert?)');
  const ranking = await fetchRanking();
  if (ranking.length < 100) throw new Error(`Rangliste unvollständig (${ranking.length} Zeilen)`);
  const me = ranking.find(r => r.team === team.name) || ranking.find(r => r.team === CONFIG.myTeam);
  if (!me) throw new Error(`Eigenes Team "${team.name}" nicht in der Rangliste`);

  const history = readConst('usm-live.js', 'USM_HISTORY') || [];
  const prev = history.filter(h => h.d < now.date).slice(-1)[0] || null;
  // Spielerpunkte des Tages: Differenz der Saison-FP zum Vortag (bei gleichem Spieler)
  const players = team.roster.map(p => {
    const before = prev && prev.roster && prev.roster[p.name];
    const played = before ? p.gp - before[1] : null;
    const today = before ? Math.round((p.fp - before[0]) * 100) / 100 : null;
    return { ...p, today, played };
  });

  // Kaderwechsel gegenüber dem Vortag = Trades (wirksam am Vortag 22:00)
  let moves = [];
  if (prev && prev.roster) {
    const now = new Set(players.map(p => p.name)), before = Object.keys(prev.roster);
    const outs = before.filter(n => !now.has(n)), ins = players.filter(p => !prev.roster[p.name]);
    const salOf = n => { const s = team.sold.find(x => x.name === n); return s ? s.sal : (prev.roster[n][2] ?? null); };
    moves = ins.map((p, i) => ({ out: outs[i] || null, outSal: outs[i] ? salOf(outs[i]) : null, in: p.name, inSal: p.sal }));
    outs.slice(ins.length).forEach(n => moves.push({ out: n, outSal: salOf(n), in: null, inSal: null }));
  }
  const watch = (CONFIG.watch || []).map(t => ranking.find(r => r.team === t)).filter(Boolean);
  const live = {
    updated: new Date().toISOString(), date: now.date, gameday,
    team: { name: team.name, manager: me.mgr, trades: team.trades, budget: team.budget, value: Math.round(players.reduce((s, p) => s + p.sal, 0) * 100) / 100 },
    me, managers: ranking.length,
    players, sold: team.sold,
    top: ranking.slice(0, 25),
    around: ranking.filter(r => Math.abs(r.rank - me.rank) <= 5),
    watch,
    labels: CONFIG.labels || {},
    dayTop: ranking.slice().sort((a, b) => a.dayRank - b.dayRank || a.rank - b.rank).slice(0, 15),
  };
  // Verlauf: ein Eintrag je Berlin-Tag (gleicher Tag wird überschrieben)
  const entry = {
    d: now.date, g: gameday, rank: me.rank, pts: me.pts, day: me.day, dayRank: me.dayRank, n: ranking.length,
    top: ranking[0] ? ranking[0].pts : null, dayBest: live.dayTop[0] ? live.dayTop[0].day : null,
    avgDay: Math.round(ranking.reduce((s, r) => s + r.day, 0) / ranking.length * 10) / 10,
    roster: Object.fromEntries(players.map(p => [p.name, [p.fp, p.gp, p.sal]])),
    ...(moves.length ? { moves } : {}),
    watch: Object.fromEntries(watch.map(r => [r.team, [r.rank, r.pts, r.day]])),
  };
  const hist = history.filter(h => h.d !== now.date).concat(entry).sort((a, b) => a.d < b.d ? -1 : 1);

  console.log(`${team.name}: Rang ${me.rank}/${ranking.length} (${me.diff >= 0 ? '+' : ''}${me.diff}), ${me.pts} Punkte, Spieltag ${gameday}: +${me.day} (Tagesrang ${me.dayRank})`);
  moves.forEach(m => console.log(`  Trade: ${m.out} → ${m.in}`));
  players.forEach(p => console.log(`  ${p.pos} ${p.name.padEnd(26)} LS ${String(p.last).padStart(6)}  heute ${p.today == null ? '–' : p.today}`));

  // Montags (nach dem Sonntags-Gehaltsupdate) Snapshot der Gehälter
  let snap = false;
  if (now.weekday === 'Mon' || ARGS.has('--snapshot')) {
    const top = await fetchTopPlayers();
    if (top.length > 500 && !ARGS.has('--dry')) snap = appendSnapshot(now.date, gameday, top);
    console.log(`Snapshot: ${top.length} Spieler${snap ? ' angehängt' : ' (schon vorhanden oder Testlauf)'}`);
  }

  if (ARGS.has('--dry')) { console.log('--dry: nichts geschrieben'); return; }
  writeLive(live, hist);
  writeRanking(now.date, ranking);
  console.log('Geschrieben: usm-live.js, usm-ranking.js' + (snap ? ', usm-snapshots.js' : ''));
})().catch(err => { console.error('FEHLER:', err.message); process.exit(1); });
