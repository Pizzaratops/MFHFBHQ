#!/usr/bin/env node
// ============================================================
//  MFHFB DYNASTY RANKING = Ø aus MFHFB + Hashtag + Matt Lawson
// ============================================================
//  Seit 29.10.2026 (auf Wunsch): Das MFHFB-Ranking ist der Durchschnitt
//  der drei Ranglisten
//    - MFHFB (Basis, Standard: aktuelles data/rankings.js, oder --base=<datei>)
//    - Hashtag Basketball (HASHTAG_RANKINGS in data/hashtag.js, ohne
//      Draft-Platzhalter wie „2027 Draft (Pick 1)“)
//    - Matt Lawson (MATT_RANKS in data/hashtag.js)
//  danach neu sortiert und 1..N durchnummeriert (Gleichstand → bisheriger
//  MFHFB-Rang, dann Name).
//
//  Fehlt ein Spieler in einer Quelle: Liegt sein Schnitt der übrigen
//  Quellen hinter 75 % der Listenlänge dieser Quelle, zählt er dort als
//  „knapp hinter dem Listenende“ (Länge + 1) — er ist dort schlicht nicht
//  mehr gerankt. Sonst wird die Quelle für ihn ausgelassen (wahrscheinlich
//  Lücke/Namensproblem, z. B. ein Top-100-Spieler fehlt bei Hashtag).
//
//  Namensabgleich: NAME_ALIASES + normalizeName() aus
//  sports/nba/data/aliases.js (Kevin Porter Jr. = Kevin Porter Jr = …).
//  Team/Pos/Geburtsdatum: aus der Basis bzw. data/rankings.js; nur bei
//  Spielern, die NUR bei Hashtag stehen, aus Hashtag (ohne Geburtsdatum).
//
//  Overrides (nach dem Mischen, Name → Zielrang), z. B. vereinslose Spieler:
//    --override="Kevin Porter Jr.=300"
//
//  Usage:
//    node leagues/tthq/scripts/blend-three-sources.js [--base=<rankings.js>] [--override="Name=Rang" …]
//  Danach: node leagues/tthq/scripts/build-dynasty-rolling.js (Snapshot)
// ============================================================

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const RANKINGS = path.join(ROOT, 'data', 'rankings.js');
const HASHTAG = path.join(ROOT, 'data', 'hashtag.js');
const ALIASES = path.join(__dirname, '..', '..', '..', 'sports', 'nba', 'data', 'aliases.js');

const args = process.argv.slice(2);
const arg = k => (args.find(a => a.startsWith(`--${k}=`)) || '').slice(k.length + 3) || null;
const overrides = args.filter(a => a.startsWith('--override=')).map(a => { const [n, r] = a.slice(11).split('='); return { name: n, rank: Number(r) }; });

const load = (file, names) => new Function(fs.readFileSync(file, 'utf8') + `;return {${names.map(n => `${n}: typeof ${n} !== 'undefined' ? ${n} : null`).join(',')}}`)();
const A = load(ALIASES, ['NAME_ALIASES', 'normalizeName']);
const keyOf = raw => { const lower = String(raw || '').toLowerCase().trim(); return A.normalizeName((A.NAME_ALIASES || {})[lower] || raw); };

const base = load(arg('base') || RANKINGS, ['DYNASTY_PLAYERS']).DYNASTY_PLAYERS;
const meta = load(RANKINGS, ['DYNASTY_PLAYERS']).DYNASTY_PLAYERS; // aktuelle Teams/Pos/DOB
const H = load(HASHTAG, ['HASHTAG_RANKINGS', 'MATT_RANKS']);
const hashtag = (H.HASHTAG_RANKINGS || []).filter(r => r[2] !== 'DRA' && !/Draft/.test(r[1]));
const matt = Object.entries(H.MATT_RANKS || {});

// Hashtag-Ränge ohne Draft-Platzhalter neu durchzählen (sonst „springen“ Spieler um die Platzhalter)
const hashtagRank = new Map(); hashtag.forEach((r, i) => { const k = keyOf(r[1]); if (!hashtagRank.has(k)) hashtagRank.set(k, i + 1); });
const mattRank = new Map(); matt.forEach(([n, r]) => { const k = keyOf(n); if (!mattRank.has(k) || r < mattRank.get(k)) mattRank.set(k, r); });
const baseRank = new Map(); base.forEach(p => { const k = keyOf(p[1]); if (!baseRank.has(k)) baseRank.set(k, p[0]); });
const SRC = [
  { id: 'mfhfb', ranks: baseRank, len: base.length },
  { id: 'hashtag', ranks: hashtagRank, len: hashtag.length },
  { id: 'matt', ranks: mattRank, len: matt.length },
];

// Stammdaten je Spieler
const info = new Map();
meta.forEach(p => info.set(keyOf(p[1]), { name: p[1], team: p[2], pos: p[3], dob: p[4] }));
base.forEach(p => { const k = keyOf(p[1]); if (!info.has(k)) info.set(k, { name: p[1], team: p[2], pos: p[3], dob: p[4] }); });
hashtag.forEach(r => { const k = keyOf(r[1]); if (!info.has(k)) info.set(k, { name: r[1], team: r[2], pos: String(r[3] || '').replace(/,/g, '/'), dob: null, onlyHashtag: true }); });
matt.forEach(([n]) => { const k = keyOf(n); if (!info.has(k)) info.set(k, { name: n, team: 'FA', pos: '', dob: null }); });

const rows = [...info.keys()].map(k => {
  const have = SRC.filter(s => s.ranks.has(k)).map(s => s.ranks.get(k));
  const avgHave = have.reduce((a, b) => a + b, 0) / have.length;
  const used = SRC.map(s => s.ranks.has(k) ? s.ranks.get(k) : (avgHave > 0.75 * s.len ? s.len + 1 : null)).filter(v => v != null);
  const score = used.reduce((a, b) => a + b, 0) / used.length;
  return { k, ...info.get(k), score, n: have.length, by: SRC.map(s => s.ranks.get(k) ?? null), baseRank: baseRank.get(k) ?? 9999 };
}).sort((a, b) => (a.score - b.score) || (a.baseRank - b.baseRank) || a.name.localeCompare(b.name));

// Overrides: Spieler herausnehmen und am Zielrang einsetzen
overrides.forEach(o => {
  const k = keyOf(o.name), i = rows.findIndex(r => r.k === k);
  if (i < 0) { console.warn(`⚠️ Override: ${o.name} nicht gefunden`); return; }
  const [r] = rows.splice(i, 1); r.override = o.rank;
  rows.splice(Math.max(0, Math.min(rows.length, o.rank - 1)), 0, r);
});

const today = new Date().toISOString().slice(0, 10);
const out = `// ============================================================
//  MFHFBs DYNASTY RANKING
// ============================================================
//  Seit 29.10.2026: Durchschnitt aus drei Ranglisten — MFHFB (bisheriger
//  Stand), Hashtag Basketball und Matt Lawson (9-Cat) — neu sortiert,
//  1..N durchnummeriert. Erzeugt von leagues/tthq/scripts/blend-three-sources.js
//  (Regeln für fehlende Spieler + Overrides dort im Kopf).
//  Zuletzt gemischt: ${today} · ${rows.length} Spieler · Hashtag ${hashtag.length}, Matt ${matt.length}, MFHFB-Basis ${base.length}
//  Overrides: ${overrides.length ? overrides.map(o => `${o.name} → ${o.rank}`).join(', ') : 'keine'}
//
//  Teams am 29.10.2026 geprüft: letztes Saisonspiel (ESPN-Boxscores) > Matt
//  Lawson 23.10. > ESPN-Kader.
//
//  Format: [rank, name, team, pos, dob]
//  dob teils aus dem Alter einer xlsx errechnet (kein exaktes Geburtsdatum).
// ============================================================

const DYNASTY_PLAYERS = [
${rows.map((r, i) => '  ' + JSON.stringify([i + 1, r.name, r.team, r.pos, r.dob])).join(',\n')}
];
`;
fs.writeFileSync(RANKINGS, out, 'utf8');
const dropped = rows.filter(r => r.n === 1 && r.by[0] != null).length;
console.log(`Geschrieben: ${rows.length} Spieler. In allen 3 Quellen: ${rows.filter(r => r.n === 3).length}, in 2: ${rows.filter(r => r.n === 2).length}, nur MFHFB: ${dropped}, nur Hashtag/Matt neu: ${rows.filter(r => r.by[0] == null).length}.`);
if (process.env.BLEND_DEBUG) fs.writeFileSync(process.env.BLEND_DEBUG, JSON.stringify(rows.map((r, i) => ({ rank: i + 1, name: r.name, team: r.team, score: Math.round(r.score * 10) / 10, mfhfb: r.by[0], hashtag: r.by[1], matt: r.by[2], override: r.override || null }))));
