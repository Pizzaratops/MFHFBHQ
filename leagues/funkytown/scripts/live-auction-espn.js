#!/usr/bin/env node
// ============================================================
//  FUNKYTOWN — Live-Auktion von ESPN mitschreiben (seit 09.10.2026)
// ============================================================
//  Pollt während des Drafts alle --interval Sekunden den ESPN-Endpoint
//  (mDraftDetail + mRoster + mTeam) und schreibt jeden neuen Stand nach
//  data/live-auction.js (LIVE_AUCTION). Bei jeder Änderung: commit + push,
//  die Auction-Seite (#/funkytown/auction, #/worldcup/auction) holt die
//  Datei mit „ESPN live“ alle 20 s. Verzögerung ≈ Intervall + GitHub-Pages-
//  Build (meist 30–90 s). Sofort geht es nur per Bookmarklet (siehe Seite).
//
//  ESPN liefert die Picks erst, wenn der Zuschlag fertig ist. Namen kommen
//  aus den Kadern; fehlt einer (z. B. Test mit alter Saison), wird die
//  Spielerliste der Saison einmal nachgeladen.
//
//  Usage (im Ordner leagues/funkytown):
//    node scripts/live-auction-espn.js [--minutes 210] [--interval 20] [--season 2027] [--once] [--no-push]
// ============================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const https = require('https');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'data', 'live-auction.js');
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const flag = k => process.argv.includes('--' + k);

function loadConfig() {
  const code = fs.readFileSync(path.join(ROOT, 'js', 'espn-sync.js'), 'utf8');
  const sb = {}; vm.createContext(sb);
  vm.runInContext(`${code}\nthis.__CFG__ = { ESPN_LEAGUE_ID, ESPN_SEASON, ESPN_TO_TT_TEAM };`, sb);
  return sb.__CFG__;
}
function getJson(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'mfhfb-hq-bot', Accept: 'application/json', ...headers } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) return getJson(res.headers.location, headers).then(resolve, reject);
      if (res.statusCode !== 200) { res.resume(); return reject(new Error(`HTTP ${res.statusCode}`)); }
      let d = ''; res.on('data', c => { d += c; }); res.on('end', () => { try { resolve(JSON.parse(d)); } catch (e) { reject(e); } });
    }).on('error', reject);
  });
}
const sleep = ms => new Promise(r => setTimeout(r, ms));
const sh = cmd => execSync(cmd, { cwd: ROOT, stdio: 'pipe' }).toString();

function push(msg) {
  if (flag('no-push')) return;
  try {
    sh('git add data/live-auction.js');
    if (!sh('git diff --cached --name-only').trim()) return;
    sh(`git commit -q -m "${msg}"`);
    for (let i = 0; i < 5; i++) {
      try { sh('git pull -q --rebase'); sh('git push -q'); return; } catch (e) { execSync('sleep 3'); }
    }
    console.warn('Push fehlgeschlagen (5 Versuche).');
  } catch (e) { console.warn('Git-Fehler:', e.message); }
}

(async () => {
  const cfg = loadConfig();
  const season = Number(arg('season', cfg.ESPN_SEASON));
  const minutes = Number(arg('minutes', 210));
  const interval = Number(arg('interval', 20));
  const base = `https://lm-api-reads.fantasy.espn.com/apis/v3/games/fba/seasons/${season}/segments/0/leagues/${cfg.ESPN_LEAGUE_ID}`;
  const names = new Map();
  let lastPlayersFetch = 0, last = null;
  const end = Date.now() + minutes * 60000;
  console.log(`Live-Auktion Liga ${cfg.ESPN_LEAGUE_ID}, Saison ${season}, ${minutes} min, alle ${interval} s`);

  while (Date.now() < end) {
    try {
      const data = await getJson(`${base}?view=mDraftDetail&view=mRoster&view=mTeam`);
      (data.teams || []).forEach(t => (t.roster?.entries || []).forEach(en => {
        const p = en.playerPoolEntry?.player; if (p && p.fullName) names.set(en.playerId || p.id, p.fullName);
      }));
      const dd = data.draftDetail || {};
      const raw = (dd.picks || []).filter(p => p.playerId > 0);
      if (raw.some(p => !names.has(p.playerId)) && Date.now() - lastPlayersFetch > 5 * 60000) {
        lastPlayersFetch = Date.now();
        try {
          const pl = await getJson(`https://lm-api-reads.fantasy.espn.com/apis/v3/games/fba/seasons/${season}/players?view=players_wl`, { 'x-fantasy-filter': JSON.stringify({ filterActive: null }) });
          (Array.isArray(pl) ? pl : []).forEach(p => { if (p.id && p.fullName) names.set(p.id, p.fullName); });
        } catch (e) { console.warn('Spielerliste nicht ladbar:', e.message); }
      }
      const picks = raw.map((p, i) => ({
        n: p.overallPickNumber || i + 1,
        player: names.get(p.playerId) || `ESPN #${p.playerId}`,
        espnId: p.playerId,
        team: cfg.ESPN_TO_TT_TEAM[p.teamId] ?? null,
        espnTeam: p.teamId,
        price: p.bidAmount || 0,
        nom: cfg.ESPN_TO_TT_TEAM[p.nominatingTeamId] ?? null,
      }));
      const state = { league: cfg.ESPN_LEAGUE_ID, season, inProgress: dd.inProgress === true, drafted: dd.drafted === true, picks };
      const sig = JSON.stringify(state);
      if (sig !== last) {
        last = sig;
        const out = { ...state, updated: new Date().toISOString() };
        fs.writeFileSync(OUT, `// AUTO-GENERIERT von scripts/live-auction-espn.js — nicht von Hand editieren\nconst LIVE_AUCTION = ${JSON.stringify(out)};\n`, 'utf8');
        console.log(`${new Date().toISOString()} · ${picks.length} Zuschläge · inProgress=${state.inProgress} drafted=${state.drafted}`);
        push(`chore: funkytown live-auction (${picks.length})`);
      }
      if (state.drafted || flag('once')) break;
    } catch (e) { console.warn(new Date().toISOString(), 'ESPN-Abruf fehlgeschlagen:', e.message); if (flag('once')) process.exitCode = 1; }
    await sleep(interval * 1000);
  }
  console.log('Fertig.');
})();
