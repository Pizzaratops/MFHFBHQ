// ============================================================
//  MFHFB HQ — gemeinsame SVG-Diagramme
// ============================================================
//  radar(): Spinnennetz für 1–3 Profile auf einer 0..1-Skala je Achse
//  (Perzentile, umgerechnete Ränge …). Farben über die CVD-sichere
//  Auswahl-Palette (.sel-1/.sel-2/.sel-3 in app.css), Stil = .rd-*
//  (wie Player DNA / College Scouting).
//
//  MFHFB.charts.radar({
//    axes:   [{ label }],
//    series: [{ name, vals: [0..1 | null, …], tips: ['…', …] }],   // max. 3
//    size:   300 (optional), label: 'Aria-Label'
//  })
// ============================================================

window.MFHFB = window.MFHFB || {};

MFHFB.charts = (function () {
  const SEL = ['sel-1', 'sel-2', 'sel-3'];

  function wrapLabel(txt, co) {
    if (Math.abs(co) <= 0.5 || txt.length <= 11) return [txt];
    const cuts = [...txt.matchAll(/[\/ -]/g)].map(m => m.index);
    if (!cuts.length) return [txt];
    const cut = cuts.sort((p, q) => Math.abs(p - txt.length / 2) - Math.abs(q - txt.length / 2))[0];
    return [txt.slice(0, cut + (txt[cut] === ' ' ? 0 : 1)).trim(), txt.slice(cut + 1).trim()];
  }

  function radar({ axes, series, size = 300, label = 'Radar' }) {
    const e = MFHFB.ui.esc;
    const n = axes.length, cx = size / 2, cy = size / 2, R = size * 0.375;
    const ang = i => -Math.PI / 2 + (i * 2 * Math.PI) / n;
    const pt = (i, f) => [cx + Math.cos(ang(i)) * R * f, cy + Math.sin(ang(i)) * R * f];
    const f1 = v => v.toFixed(1);
    const rings = [0.25, 0.5, 0.75, 1].map(f => `<polygon class="rd-ring" points="${axes.map((_, i) => pt(i, f).map(f1).join(',')).join(' ')}"/>`).join('');
    const lines = axes.map((_, i) => { const [x, y] = pt(i, 1); return `<line class="rd-axis" x1="${cx}" y1="${cy}" x2="${f1(x)}" y2="${f1(y)}"/>`; }).join('');
    const labels = axes.map((ax, i) => {
      const [x, y] = pt(i, 1.2); const co = Math.cos(ang(i));
      const anchor = Math.abs(co) < 0.2 ? 'middle' : co > 0 ? 'start' : 'end';
      const parts = wrapLabel(ax.label, co);
      const y0 = y + 4 - (parts.length - 1) * 7;
      return `<text class="rd-label" x="${f1(x)}" y="${f1(y0)}" text-anchor="${anchor}">${parts.map((l, k) => `<tspan x="${f1(x)}" dy="${k ? 14 : 0}">${e(l)}</tspan>`).join('')}</text>`;
    }).join('');
    const multi = series.length > 1;
    // Erste Serie zuletzt zeichnen (liegt oben)
    const polys = series.map((s, k) => ({ s, k })).reverse().map(({ s, k }) => {
      const pts = axes.map((_, i) => pt(i, Math.max(0, Math.min(1, s.vals[i] == null ? 0 : s.vals[i]))));
      const dots = axes.map((_, i) => s.vals[i] == null ? '' :
        `<circle class="rd-pt" cx="${f1(pts[i][0])}" cy="${f1(pts[i][1])}" r="4.5"><title>${e((s.tips && s.tips[i]) || s.name)}</title></circle>`).join('');
      return `<g class="rd-series ${SEL[k]}${multi ? ' multi' : ''}"><polygon points="${pts.map(p => p.map(f1).join(',')).join(' ')}"/>${dots}</g>`;
    }).join('');
    const pad = Math.round(size * 0.22);
    return `<svg class="rd" viewBox="${-pad} -14 ${size + 2 * pad} ${size + 28}" role="img" aria-label="${e(label)}">${rings}${lines}${polys}${labels}</svg>`;
  }

  // Legende als Chips (gleiche Klassen wie Player DNA)
  function chips(names) {
    const e = MFHFB.ui.esc;
    return `<div class="dna-chips">${names.map((nm, i) => `<span class="dna-chip ${SEL[i]}"><i></i>${e(nm)}</span>`).join('')}</div>`;
  }

  return { radar, chips, SEL };
})();

// ---------- Modal (Erklär-Fenster, wie der Player-DNA-Glossar) ----------
//  MFHFB.ui.modal(id, html, { focus: 'elementId', onClick(ev, close) })
//  Schließen per ✕ ([data-close]), Klick daneben oder Escape.
MFHFB.ui = MFHFB.ui || {};
MFHFB.ui.modal = function (id, html, opts = {}) {
  let m = document.getElementById(id);
  const close = () => { m.classList.remove('open'); document.body.style.overflow = ''; };
  if (!m) {
    m = document.createElement('div');
    m.id = id; m.className = 'dna-modal';
    document.body.appendChild(m);
    m.addEventListener('click', ev => {
      if (ev.target === m || ev.target.closest('[data-close]')) { close(); return; }
      if (m._onClick) m._onClick(ev, close);
    });
    document.addEventListener('keydown', ev => { if (ev.key === 'Escape' && m.classList.contains('open')) close(); });
  }
  m._onClick = opts.onClick || null;
  m.innerHTML = html;
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (opts.focus) setTimeout(() => { const el = document.getElementById(opts.focus); if (el) el.scrollIntoView({ block: 'center' }); }, 30);
  else m.scrollTop = 0;
  const x = m.querySelector('[data-close]'); if (x) x.focus({ preventScroll: true });
  return close;
};
