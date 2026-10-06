#!/usr/bin/env node
// ============================================================
//  Eine Quelle der Consensus-Projections austauschen (MFHFB HQ, 06.10.2026)
// ============================================================
//  Aktualisiert in einer bestehenden data/projections-consensus.js genau
//  EINE Quelle (a = Beyaz, b = Josh Lloyd/BBM, c = Hashtag) und rechnet
//  den Mittelwert neu, ohne die anderen Rohquellen erneut zu brauchen
//  (die stehen ja schon unter a/b/c in der Datei).
//
//  Mittelung (srcVals/averageVals) identisch zu
//  leagues/tthq/scripts/build-consensus-projections.js. Regeln:
//   - Spieler in der neuen Quelle: deren Werte ersetzen die alten.
//   - Spieler, die die neue Quelle nicht mehr führt: Quelle entfällt,
//     Mittelwert aus den übrigen (fällt damit keine Quelle mehr an: Zeile weg).
//   - Spieler nur in der neuen Quelle: neue Zeile mit nur dieser Quelle.
//   - team: bei Quelle b aus der neuen Datei, sonst unverändert.
//
//  Aufruf (im Hub-Root):
//    node sports/nba/scripts/replace-consensus-source.js b neu.json leagues/tthq/data/projections-consensus.js "Josh Lloyd (BBM), Stand 06.10.2026"
//  neu.json: { "Spielername": { team, pos, g, min, pts, reb, ast, stl, blk, tpm, tov, fga, fgm, fgPct, fta, ftm, ftPct } }
// ============================================================
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const [letter, inPath, consPath, label] = process.argv.slice(2);
if (!/^[abc]$/.test(letter || '') || !inPath || !consPath) {
  console.error('Aufruf: replace-consensus-source.js <a|b|c> <neu.json> <projections-consensus.js> [Bezeichnung]');
  process.exit(1);
}

// normalizeName aus den sportweiten Aliases
const ALIASES = path.join(__dirname, '..', 'data', 'aliases.js');
const sb = {}; vm.createContext(sb);
vm.runInContext(fs.readFileSync(ALIASES, 'utf8') + '\nthis.__N__ = normalizeName;', sb);
const norm = sb.__N__;

const round = (v, d = 2) => Math.round(v * Math.pow(10, d)) / Math.pow(10, d);
// --- identisch zu build-consensus-projections.js (TTHQ-Fassung) ---
function srcVals(o, fgaFallback, ftaFallback) {
  if (!o) return null;
  const fga = (o.fga > 0 ? o.fga : (fgaFallback || 0));
  const fta = (o.fta > 0 ? o.fta : (ftaFallback || 0));
  let fgPct = o.fgPct, ftPct = o.ftPct;
  if ((fgPct === undefined || fgPct === null) && o.fgm > 0 && fga > 0) fgPct = o.fgm / fga * 100;
  if ((ftPct === undefined || ftPct === null) && o.ftm > 0 && fta > 0) ftPct = o.ftm / fta * 100;
  fgPct = fgPct || 0; ftPct = ftPct || 0;
  return {
    min: round(o.min || 0, 1), pts: round(o.pts || 0, 1), reb: round(o.reb || 0, 1), ast: round(o.ast || 0, 1),
    stl: round(o.stl || 0, 2), blk: round(o.blk || 0, 2), tpm: round(o.tpm || 0, 2),
    tov: round((o.tov !== undefined ? o.tov : o.to) || 0, 2),
    fga: round(fga, 2), fgm: round(o.fgm > 0 ? o.fgm : fgPct / 100 * fga, 2),
    fta: round(fta, 2), ftm: round(o.ftm > 0 ? o.ftm : ftPct / 100 * fta, 2),
    fgPct: round(fgPct, 1), ftPct: round(ftPct, 1),
  };
}
const NUM_FIELDS = ['min', 'pts', 'reb', 'ast', 'stl', 'blk', 'tpm', 'tov'];
const DEC = { min: 1, pts: 1, reb: 1, ast: 1, stl: 2, blk: 2, tpm: 2, tov: 2 };
function averageVals(list) {
  const present = list.filter(Boolean);
  if (!present.length) return null;
  const out = {};
  NUM_FIELDS.forEach(f => { out[f] = round(present.reduce((s, v) => s + (v[f] || 0), 0) / present.length, DEC[f]); });
  const fgPct = round(present.reduce((s, v) => s + (v.fgPct || 0), 0) / present.length, 1);
  const ftPct = round(present.reduce((s, v) => s + (v.ftPct || 0), 0) / present.length, 1);
  const fgaSrc = present.map(v => v.fga).filter(x => x > 0);
  const ftaSrc = present.map(v => v.fta).filter(x => x > 0);
  const fga = fgaSrc.length ? round(fgaSrc.reduce((a, b) => a + b, 0) / fgaSrc.length, 2) : 0;
  const fta = ftaSrc.length ? round(ftaSrc.reduce((a, b) => a + b, 0) / ftaSrc.length, 2) : 0;
  out.fgPct = fgPct; out.ftPct = ftPct;
  out.fga = fga; out.fgm = round(fgPct / 100 * fga, 2);
  out.fta = fta; out.ftm = round(ftPct / 100 * fta, 2);
  return out;
}
// ------------------------------------------------------------------

const src = fs.readFileSync(consPath, 'utf8');
const m = src.match(/const PROJECTIONS_CONSENSUS = /);
if (!m) throw new Error('PROJECTIONS_CONSENSUS nicht gefunden');
let header = src.slice(0, m.index);
const cons = new Function(src + '\n;return PROJECTIONS_CONSENSUS;')();
const fresh = JSON.parse(fs.readFileSync(inPath, 'utf8'));
const freshByNorm = new Map(Object.keys(fresh).map(n => [norm(n), n]));
const used = new Set();
const out = {};
const stat = { updated: 0, removedSrc: 0, droppedRows: 0, added: 0 };

for (const [name, e] of Object.entries(cons)) {
  const k = norm(name);
  const fname = freshByNorm.get(k);
  const raw = fname ? fresh[fname] : null;
  if (fname) used.add(k);
  const v = srcVals(raw, raw && raw.fga, raw && raw.fta);
  if (v) stat.updated++; else if (e[letter]) stat.removedSrc++;
  const next = { ...e, [letter]: v };
  const parts = { a: e.aImplausible ? null : next.a, b: next.b, c: next.c };
  const merged = averageVals([parts.a, parts.b, parts.c]);
  if (!merged) { stat.droppedRows++; continue; }
  const contributing = ['a', 'b', 'c'].filter(x => parts[x]);
  const team = letter === 'b' && raw && raw.team ? raw.team : e.team;
  const g = e.c ? e.g : (raw && raw.g) || e.g;
  out[name] = { team, pos: e.pos, g, ...merged, sources: contributing.join(''), sourceCount: contributing.length, a: next.a, b: next.b, c: next.c };
  if (e.aImplausible) out[name].aImplausible = true;
}
for (const [k, fname] of freshByNorm) {
  if (used.has(k)) continue;
  const raw = fresh[fname];
  const v = srcVals(raw, raw.fga, raw.fta);
  if (!v) continue;
  out[fname] = { team: raw.team || '', pos: raw.pos || '', g: raw.g || null, ...averageVals([v]), sources: letter, sourceCount: 1,
    a: letter === 'a' ? v : null, b: letter === 'b' ? v : null, c: letter === 'c' ? v : null };
  stat.added++;
}

const counts = [1, 2, 3].map(n => Object.values(out).filter(e => e.sourceCount === n).length);
const NAMES = { a: 'a) data/projections-baseline.js (Beyaz)', b: 'b) Basketball Monster / Josh Lloyd', c: 'c) Hashtag Basketball' };
const line = `//  Quelle ${letter} ersetzt am ${new Date().toISOString().slice(0, 10)} (replace-consensus-source.js): ${label || NAMES[letter]}\n`;
header = header.replace(/(\/\/  Erzeugt am: .*\n)/, `$1${line}`)
  .replace(/3 Quellen: \d+ Spieler/, `3 Quellen: ${counts[2]} Spieler`)
  .replace(/2 Quellen: \d+ Spieler/, `2 Quellen: ${counts[1]} Spieler`)
  .replace(/1 Quelle:  \d+ Spieler/, `1 Quelle:  ${counts[0]} Spieler`);
if (letter === 'b' && label) header = header.replace(/b\) Basketball Monster \/ Josh Lloyd \([^)]*\)/, `b) ${label}`);
fs.writeFileSync(consPath, header + 'const PROJECTIONS_CONSENSUS = ' + JSON.stringify(out, null, 1) + ';\n', 'utf8');
console.log(`${consPath}: ${stat.updated} aktualisiert, ${stat.added} neu, Quelle entfernt bei ${stat.removedSrc}, Zeilen gestrichen ${stat.droppedRows} · Quellen 3/2/1: ${counts[2]}/${counts[1]}/${counts[0]}`);
