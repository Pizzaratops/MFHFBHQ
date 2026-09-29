// ============================================================
//  MFHFB HQ — Daten-Loader (liga-namespaced)
// ============================================================
//  Lädt die Datendateien einer Liga (z.B. "teams", "weekly-scores") und
//  gibt deren Inhalt als Objekt zurück — OHNE sie als globale Variablen
//  ins Fenster zu kippen. Wichtig, weil mehrere Ligen dieselben Namen
//  verwenden (LEAGUE_TEAMS, WEEKLY_SCORES …) und man ohne Reload zwischen
//  Ligen wechseln kann.
//
//  Format: die bisherigen Datendateien sind JS mit `const NAME = …;`.
//  Sie werden per fetch geholt und in einem Funktions-Scope ausgeführt,
//  der alle deklarierten Großbuchstaben-Konstanten zurückgibt. Gleiche
//  Vertrauensstufe wie ein <script>-Tag (eigene Dateien, gleiche Origin).
//
//  Übergangsphase: league.dataBase zeigt auf den data/-Ordner der
//  bisherigen Seite (deren GitHub Actions synchronisieren weiter). Nach
//  dem Umzug der Sync-Scripts wird dataBase auf ./leagues/<liga>/data/
//  umgestellt — die Tools merken davon nichts.
// ============================================================

window.MFHFB = window.MFHFB || {};

MFHFB.data = (function () {
  const cache = new Map(); // "<liga>|<datei>" -> Promise<Object>

  function evaluate(src, file) {
    const names = [...src.matchAll(/^\s*(?:const|let|var)\s+([A-Z_][A-Z0-9_]*)\s*=/gm)].map(m => m[1]);
    if (!names.length) throw new Error(`${file}: keine Daten-Konstanten gefunden`);
    // eslint-disable-next-line no-new-func
    return new Function(`${src}\n;return {${[...new Set(names)].join(',')}};`)();
  }

  function loadFile(league, file) {
    const key = league.key + '|' + file;
    if (!cache.has(key)) {
      const v = Math.floor(Date.now() / 3600000); // stündlich frisch, sonst Browser-Cache
      const url = `${league.dataBase}${file}.js?v=${v}`;
      const p = fetch(url, { cache: 'no-cache' })
        .then(r => {
          if (!r.ok) throw new Error(`${file}.js nicht ladbar (HTTP ${r.status})`);
          return r.text();
        })
        .then(src => evaluate(src, file + '.js'))
        .catch(err => { cache.delete(key); throw err; });
      cache.set(key, p);
    }
    return cache.get(key);
  }

  // Mehrere Dateien laden und zu einem Objekt zusammenführen:
  // load(league, ['teams','weekly-scores']) -> { LEAGUE_TEAMS, WEEKLY_SCORES }
  // Ein "?" vor dem Namen macht die Datei optional ('?league-info'): fehlt
  // sie bei einer Liga, wird sie still übersprungen statt die Seite
  // scheitern zu lassen.
  async function load(league, files) {
    const parts = await Promise.all((files || []).map(f => {
      const optional = f.startsWith('?');
      const name = optional ? f.slice(1) : f;
      return optional ? loadFile(league, name).catch(() => ({})) : loadFile(league, name);
    }));
    return Object.assign({}, ...parts);
  }

  function clear(leagueKey) {
    for (const k of [...cache.keys()]) if (!leagueKey || k.startsWith(leagueKey + '|')) cache.delete(k);
  }

  return { load, clear, _evaluate: evaluate };
})();
