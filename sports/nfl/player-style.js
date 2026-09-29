// ============================================================
//  NFL · Spielstil (FTN-Charting) — Karte im Player-DNA-Profil
// ============================================================
//  Aus Bear-Witch-Project-HQ/js/player-style.js übernommen (in BWP und
//  DOPE identisch). Daten PLAYER_STYLE kommen über "sport:player-style".
//
//    MFHFB.nfl.playerStyleCard(PLAYER_STYLE, gsisId, pos, season, displayName) → HTML
// ============================================================

(function () {
const _psDiv = (a, b) => (b > 0 ? a / b : null);
// num/den liefern Zaehler/Nenner aus c; minDen = Mindest-Nenner fuers Perzentil
const PS_METRICS = {
  QB: [
    { k: 'blitz', label: 'EPA vs Blitz', fmt: 'epa', better: 'high', minDen: 10, num: c => c.blE, den: c => c.blN,
      sub: c => `ohne Blitz ${_psFmt(_psDiv(c.noE, c.noN), 'epa')}`, unit: 'Dropbacks' },
    { k: 'iw', label: 'Interception-worthy', fmt: 'pct', better: 'low', minDen: 20, num: c => c.iw, den: c => c.att, unit: 'Pässe',
      sub: c => (c.iw === 1 ? '1 Wurf, der hätte abgefangen werden müssen' : `${c.iw} Würfe, die hätten abgefangen werden müssen`) },
    { k: 'pa', label: 'Play-Action-Anteil', fmt: 'pct', better: null, minDen: 20, num: c => c.pa, den: c => c.db,
      sub: c => `EPA mit PA ${_psFmt(_psDiv(c.paE, c.pa), 'epa')} · ohne ${_psFmt(_psDiv(c.npaE, c.db - c.pa), 'epa')}`, unit: 'Dropbacks' },
    { k: 'oop', label: 'Out of Pocket', fmt: 'pct', better: null, minDen: 20, num: c => c.oop, den: c => c.db, unit: 'Dropbacks' },
    { k: 'ta', label: 'Throwaways', fmt: 'pct', better: null, minDen: 20, num: c => c.ta, den: c => c.att, unit: 'Pässe' },
  ],
  REC: [
    { k: 'drop', label: 'Drop-Quote', fmt: 'pct', better: 'low', minDen: 10, num: c => c.drop, den: c => c.ctch, unit: 'fangbare Bälle',
      sub: c => `${c.drop} Drops bei ${c.ctch} fangbaren Bällen` },
    { k: 'contC', label: 'Contested Catch', fmt: 'pct', better: 'high', minDen: 5, num: c => c.contC, den: c => c.cont, unit: 'umkämpfte Bälle',
      sub: c => `${c.contC} von ${c.cont} gefangen` },
    { k: 'cre', label: 'Created Receptions', fmt: 'pct', better: 'high', minDen: 10, num: c => c.cre, den: c => c.tgt, unit: 'Targets',
      sub: c => `${c.cre} Catches, die er selbst möglich gemacht hat` },
    { k: 'cont', label: 'Contested-Anteil', fmt: 'pct', better: null, minDen: 10, num: c => c.cont, den: c => c.tgt, unit: 'Targets' },
    { k: 'ctch', label: 'Fangbare Targets', fmt: 'pct', better: null, minDen: 10, num: c => c.ctch, den: c => c.tgt, unit: 'Targets',
      sub: () => 'sagt v.a. etwas über die Zuspiele' },
    { k: 'scr', label: 'Screen-Anteil', fmt: 'pct', better: null, minDen: 10, num: c => c.scr, den: c => c.tgt, unit: 'Targets' },
  ],
};

function _psFmt(v, fmt) {
  if (v == null || !isFinite(v)) return '—';
  if (fmt === 'epa') return (v >= 0 ? '+' : '') + v.toFixed(2);
  return (v * 100).toFixed(1) + '%';
}

function _psPercentile(S, pos, m, val) {
  const pool = Object.values(S.players).filter(p => p.pos === pos && m.den(p.c) >= m.minDen)
    .map(p => _psDiv(m.num(p.c), m.den(p.c))).filter(v => v != null);
  if (pool.length < 5) return null;
  const below = pool.filter(v => (m.better === 'high' ? v < val : v > val)).length;
  const equal = pool.filter(v => v === val).length;
  return Math.round(100 * (below + equal / 2) / pool.length);
}

function _psTile(S, pos, me, m) {
  const c = me.c, avgC = S.avg[pos];
  const den = m.den(c), val = _psDiv(m.num(c), den);
  const avgVal = _psDiv(m.num(avgC), m.den(avgC));
  const enough = den >= m.minDen;
  const pct = m.better && enough && val != null ? _psPercentile(S, pos, m, val) : null;
  const cls = pct == null ? '' : pct >= 67 ? 'ps-good' : pct <= 33 ? 'ps-bad' : 'ps-mid';
  return `
    <div class="ps-tile ${m.better ? '' : 'ps-style'}">
      <div class="ps-label">${m.better ? '' : '◇ '}${m.label}</div>
      <div class="ps-val ${enough ? '' : 'ps-thin'}">${_psFmt(val, m.fmt)}${pct != null ? `<span class="ps-pct ${cls}" title="Perzentil gegen alle ${pos} mit mind. ${m.minDen} ${m.unit}">P${pct}</span>` : ''}</div>
      <div class="ps-avg">Ø ${pos} ${_psFmt(avgVal, m.fmt)} · ${den} ${m.unit}${enough ? '' : ' · <b>wenig Daten</b>'}</div>
      ${m.sub ? `<div class="ps-sub">${m.sub(c)}</div>` : ''}
    </div>`;
}


  function playerStyleCard(PLAYER_STYLE, gsisId, pos, season, displayName) {
    if (!PLAYER_STYLE || !PLAYER_STYLE.seasons) return '';
    const S = PLAYER_STYLE.seasons[season];
    if (!S) return `<div class="ay-note">🎯 FTN-Spielstil gibt es für ${Object.keys(PLAYER_STYLE.seasons).join(' und ')}.</div>`;
    const me = S.players[gsisId];
    if (!me) return `<div class="ay-note">🎯 Für diesen Spieler gibt es ${season} noch zu wenige gecharte ${pos === 'QB' ? 'Dropbacks' : 'Targets'} für den FTN-Spielstil.</div>`;
    const metrics = pos === 'QB' ? PS_METRICS.QB : PS_METRICS.REC;
    return `
      <div class="ps-card">
        <div class="ps-head">
          <div class="ps-title">🎯 Spielstil · FTN-Charting ${season}</div>
          <div class="ps-meta">${displayName || me.n} · ${pos === 'QB' ? `${me.c.db} Dropbacks` : `${me.c.tgt} Targets`}</div>
        </div>
        <div class="ps-grid">${metrics.map(m => _psTile(S, pos, me, m)).join('')}</div>
        <div class="ps-foot">P = Perzentil gegen alle ${pos} der Saison mit genug Volumen (P90 = besser als 90 %). ◇ = Stil-Wert ohne besser/schlechter, nur mit Ø verglichen.</div>
      </div>`;
  }

  function playerStyleExplainHtml() {
    return `
      <p style="margin:0 0 10px;font-size:13px">Im Player-DNA-Profil zeigt die Karte <b>🎯 Spielstil</b> Werte aus dem FTN-Charting. Dort wird jeder NFL-Spielzug von Hand ausgewertet, etwa ob ein Ball fangbar war oder ob der QB einen Wurf hätte abgefangen bekommen müssen. Das sind Dinge, die in normalen Stats nicht stehen.</p>
      <div class="section-label">Quarterbacks</div>
      <ul style="margin:0 0 10px 18px;padding:0;font-size:13px;line-height:1.5">
        <li style="margin-bottom:4px"><b>EPA vs Blitz</b>: EPA pro Dropback, wenn die Defense mindestens einen zusätzlichen Blitzer schickt, darunter der Wert ohne Blitz. Zeigt, wer unter Druck einbricht.</li>
        <li style="margin-bottom:4px"><b>Interception-worthy</b>: Anteil der Pässe, die hätten abgefangen werden müssen, egal ob die Defense den Ball tatsächlich gefangen hat. Ehrlicher als die reine INT-Zahl. Niedrig ist gut.</li>
        <li style="margin-bottom:4px"><b>◇ Play-Action-Anteil, Out of Pocket, Throwaways</b>: Stil. Wie oft mit Play Action, außerhalb der Pocket bzw. mit bewusst weggeworfenen Bällen.</li>
      </ul>
      <div class="section-label">WR / TE / RB</div>
      <ul style="margin:0 0 10px 18px;padding:0;font-size:13px;line-height:1.5">
        <li style="margin-bottom:4px"><b>Drop-Quote</b>: Drops je fangbarem Ball. Niedrig ist gut.</li>
        <li style="margin-bottom:4px"><b>Contested Catch</b>: Fangquote bei umkämpften Bällen (Verteidiger direkt dran).</li>
        <li style="margin-bottom:4px"><b>Created Receptions</b>: Catches, die nur durch eine besondere Leistung des Receivers zustande kamen (z. B. schwieriger Ball), je Target.</li>
        <li style="margin-bottom:4px"><b>◇ Contested-Anteil, Fangbare Targets, Screen-Anteil</b>: Stil bzw. Rolle. „Fangbare Targets“ sagt vor allem etwas über die Qualität der Zuspiele.</li>
      </ul>
      <p style="margin:0;font-size:12px;color:var(--muted)">P = Perzentil gegen alle Spieler derselben Position der Saison mit genug Volumen (z. B. mind. 10 fangbare Bälle für die Drop-Quote). Darunter steht „wenig Daten“. Quelle: FTN-Charting über nflverse, laufende und Vorsaison, Regular Season.</p>`;
  }
  

  window.MFHFB = window.MFHFB || {};
  MFHFB.nfl = Object.assign(MFHFB.nfl || {}, { playerStyleCard, playerStyleExplainHtml });
})();
