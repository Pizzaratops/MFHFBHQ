// ============================================================
//  ESPN-Abruf aus dem Browser (über CORS-Proxy)
// ============================================================
//  Die ESPN-Fantasy-API sendet keine CORS-Header. Deshalb läuft der
//  Abruf über den eigenen Cloudflare Worker, mit öffentlichen Proxies
//  als Rückfall — 1:1 aus _fetchEspnViaProxy() (TTHQ espn-trade-detect.js).
//  Nur öffentliche Liga-Daten, keine Cookies/Secrets.
// ============================================================

window.MFHFB = window.MFHFB || {};

MFHFB.espn = (function () {
  const WORKER = 'https://pizzaratops.buniliga.workers.dev/';
  const PROXIES = [
    { name: 'cf-worker', build: u => `${WORKER}?url=${encodeURIComponent(u)}` },
    { name: 'codetabs', build: u => `https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(u)}` },
    { name: 'corsproxy.io', build: u => `https://corsproxy.io/?${encodeURIComponent(u)}` },
    { name: 'allorigins', build: u => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}` },
  ];

  async function fetchViaProxy(espnUrl) {
    const errors = [];
    for (const { name, build } of PROXIES) {
      try {
        const res = await fetch(build(espnUrl), { credentials: 'omit' });
        if (!res.ok) { errors.push(`${name}: HTTP ${res.status}`); continue; }
        let parsed;
        try { parsed = JSON.parse(await res.text()); } catch (e) { errors.push(`${name}: keine JSON-Antwort`); continue; }
        if (parsed && typeof parsed === 'object' && typeof parsed.contents === 'string') parsed = JSON.parse(parsed.contents);
        return parsed;
      } catch (err) { errors.push(`${name}: ${err.message}`); }
    }
    throw new Error('Kein Proxy erreichbar (' + errors.join(' | ') + ')');
  }

  const FBA = 'https://lm-api-reads.fantasy.espn.com/apis/v3/games/fba/seasons/';
  const fbaLeagueUrl = (season, leagueId, views) => `${FBA}${season}/segments/0/leagues/${leagueId}?${views.map(v => 'view=' + v).join('&')}`;
  const fbaProScheduleUrl = season => `${FBA}${season}?view=proTeamSchedules_${season}`;

  return { fetchViaProxy, fbaLeagueUrl, fbaProScheduleUrl };
})();
