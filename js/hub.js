// ============================================================
//  MFHFB HQ — Shell (Routing, Landing, Liga-Ansicht, Switch Leagues)
// ============================================================
//  Routen (hash-basiert, wie in den bisherigen Seiten):
//    #/                 → Landing mit den Liga-Kacheln
//    #/<liga>           → Liga-Ansicht
//    #/<liga>/<rest>    → Liga-Ansicht, <rest> wird als Hash an die
//                         eingebettete Seite durchgereicht (Deep-Links,
//                         Reload bleibt auf derselben Unterseite).
//
//  Phase 0: jede Liga hat mode 'legacy' → bisherige Seite im iframe.
//  Gleiche Origin (pizzaratops.github.io), daher können wir den Hash der
//  eingebetteten Seite lesen und in die äußere URL spiegeln.
//
//  localStorage: alle Seiten unter pizzaratops.github.io teilen sich die
//  Origin → Keys hier IMMER mit Präfix "mfhfb:".
// ============================================================

(function () {
  'use strict';

  const store = {
    get(k) { try { return localStorage.getItem('mfhfb:' + k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem('mfhfb:' + k, v); } catch (e) { /* privat/blockiert: egal */ } },
  };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const byKey = key => LEAGUES.find(l => l.key === key) || null;

  const el = {
    landing: document.getElementById('viewLanding'),
    league: document.getElementById('viewLeague'),
    groups: document.getElementById('leagueGroups'),
    resume: document.getElementById('resume'),
    current: document.getElementById('currentLeague'),
    openTab: document.getElementById('openTab'),
    switchBtn: document.getElementById('switchBtn'),
    switchMenu: document.getElementById('switchMenu'),
    frame: document.getElementById('leagueFrame'),
    frameWrap: document.getElementById('frameWrap'),
    loading: document.getElementById('frameLoading'),
    versionBtn: document.getElementById('versionBtn'),
    native: document.getElementById('nativeView'),
    nativeNav: document.getElementById('nativeNav'),
    nativeMain: document.getElementById('nativeMain'),
  };

  let activeKey = null;      // Liga, die gerade im iframe geladen ist
  let frameInnerHash = '';   // zuletzt gesehener Hash der eingebetteten Seite

  // ---------------- Routing ----------------
  function parseRoute() {
    const h = location.hash.replace(/^#\/?/, '');
    if (!h) return { league: null, sub: '' };
    const i = h.indexOf('/');
    const key = i < 0 ? h : h.slice(0, i);
    return { league: byKey(key), sub: i < 0 ? '' : h.slice(i + 1) };
  }

  function route() {
    const { league, sub } = parseRoute();
    closeMenu();
    if (!league) {
      if (location.hash && location.hash !== '#/' && location.hash !== '#') history.replaceState(null, '', '#/');
      showLanding();
    } else {
      showLeague(league, sub);
    }
  }

  // ---------------- Landing ----------------
  function leagueCard(l) {
    const native = l.mode === 'native';
    return `
      <a class="league-card" href="#/${l.key}" style="--card-accent:${l.accent};--card-accent2:${l.accent2}">
        <div class="league-card-head">
          <div class="league-emoji" aria-hidden="true">${l.emoji}</div>
          <div>
            <div class="league-name display">${esc(l.name)}</div>
            <div class="league-short">${esc(l.short)}</div>
          </div>
        </div>
        <div class="chips">
          <span class="chip">${esc(l.platform)}</span>
          <span class="chip">${esc(l.format)}</span>
        </div>
        <div class="league-card-foot">
          <span class="status${native ? ' native' : ''}">${native ? 'Im HQ' : 'Bisherige Seite'}</span>
          <span class="go">Öffnen →</span>
        </div>
      </a>`;
  }

  function renderLanding() {
    el.groups.innerHTML = Object.keys(SPORTS).map(sport => {
      const leagues = LEAGUES.filter(l => l.sport === sport);
      if (!leagues.length) return '';
      return `
        <section class="sport-group">
          <h2 class="sport-title">${SPORTS[sport].emoji} ${esc(SPORTS[sport].label)}</h2>
          <div class="league-grid">${leagues.map(leagueCard).join('')}</div>
        </section>`;
    }).join('');
  }

  function showLanding() {
    document.title = 'MFHFB HQ';
    document.body.removeAttribute('data-league');
    el.league.hidden = true;
    el.landing.hidden = false;
    const last = byKey(store.get('lastLeague'));
    if (last) {
      el.resume.innerHTML = `<a href="#/${last.key}">${last.emoji} Weiter zu ${esc(last.name)} →</a>`;
      el.resume.hidden = false;
    } else {
      el.resume.hidden = true;
    }
  }

  // ---------------- Liga-Ansicht ----------------
  function frameUrl(l, sub) { return l.legacyUrl + (sub ? '#' + sub : ''); }

  function showLeague(l, sub) {
    el.landing.hidden = true;
    el.league.hidden = false;
    document.body.setAttribute('data-league', l.key);
    document.documentElement.style.setProperty('--league-accent', l.accent);
    document.documentElement.style.setProperty('--league-accent2', l.accent2);
    el.current.innerHTML = `<span aria-hidden="true">${l.emoji}</span><span class="name">${esc(l.name)}</span>`;
    el.openTab.href = frameUrl(l, sub);
    store.set('lastLeague', l.key);
    renderMenu(l.key);

    const native = useNative(l);
    // Umschalter alte/neue Seite: bei Vorschau-Ligen (neu testen) und bei
    // umgestellten Ligen, solange die alte Seite noch erreichbar ist (legacyUrl).
    el.versionBtn.hidden = !(l.legacyUrl && (l.nativePreview || l.mode === 'native'));
    el.versionBtn.title = l.mode === 'native'
      ? 'Zur alten Seite wechseln (Archiv — Daten dort werden nicht mehr aktualisiert)'
      : 'Zwischen bisheriger Seite und neuer Version wechseln';
    el.versionBtn.setAttribute('aria-pressed', String(native));
    el.versionBtn.innerHTML = native
      ? (l.mode === 'native' ? '↩ <span class="hide-sm">Alte Seite</span>' : '↩ <span class="hide-sm">Bisherige Seite</span>')
      : '✨ <span class="hide-sm">Neue Version</span>';
    el.openTab.hidden = native;
    el.frameWrap.hidden = native;
    el.native.hidden = !native;

    if (native) {
      // Eingebettete Seite abräumen (spart Speicher, und beim Zurückwechseln
      // wird sie frisch geladen statt einen alten Stand zu zeigen).
      if (activeKey) { loadFrame('about:blank', ''); activeKey = null; }
      renderNative(l, sub);
      return;
    }

    if (activeKey === l.key) {
      // Gleiche Liga, nur andere Unterseite (z.B. Browser-Zurück / Deep-Link).
      if (sub !== frameInnerHash) {
        try { el.frame.contentWindow.location.hash = sub; } catch (e) { el.frame.src = frameUrl(l, sub); }
      }
      return;
    }
    activeKey = l.key;
    frameInnerHash = sub;
    document.title = `${l.short} · MFHFB HQ`;
    el.loading.hidden = false;
    loadFrame(frameUrl(l, sub), l.name);
  }

  // ---------------- Native Liga-Ansicht ----------------
  // 'native' für alle, oder Vorschau per Button (pro Liga gemerkt).
  function useNative(l) {
    // Umgestellte Ligen: neu, außer man hat bewusst auf die alte Seite gewechselt
    if (l.mode === 'native') return !l.legacyUrl || store.get(l.key + ':native') !== '0';
    return !!l.nativePreview && store.get(l.key + ':native') === '1';
  }

  let renderSeq = 0; // verwirft verspätete Antworten, wenn man schnell weiterklickt

  function renderNative(l, sub) {
    const parts = sub.split('/').filter(Boolean).map(decodeURIComponent);
    let page = MFHFB.pages.find(l, parts[0] || 'home');
    if (!page) {
      page = MFHFB.pages.find(l, 'home') || MFHFB.pages.forLeague(l)[0]?.pages[0];
      if (sub) history.replaceState(null, '', '#/' + l.key);
    }
    const params = page && page.id === parts[0] ? parts.slice(1) : [];
    const href = (id, ...p) => '#/' + [l.key, id, ...p.map(x => encodeURIComponent(x))].join('/');

    // Navigation
    //  Desktop: Seitenleiste nach Bereichen gruppiert; Bereiche mit mehreren
    //  Seiten sind auf-/zuklappbar (standardmäßig zu, aufgeklappte gemerkt pro
    //  Liga; der Bereich der aktiven Seite ist immer offen). Mobil: oben die Bereiche als Chips, darunter
    //  die Seiten des aktiven Bereichs. Ein Bereich-Chip öffnet die zuletzt
    //  besuchte Seite dieses Bereichs.
    const sections = MFHFB.pages.forLeague(l);
    const curSec = page ? sections.find(s => s.pages.some(p => p.id === page.id)) : null;
    if (curSec && page) store.set(l.key + ':navlast:' + curSec.key, page.id);
    let opened = [];
    try { opened = JSON.parse(store.get(l.key + ':navopen') || '[]'); } catch (e) { opened = []; }
    const item = (p, s, cls) => `
      <a class="nav-item${cls || ''}${page && p.id === page.id ? ' active' : ''}" href="${href(p.id)}" title="${esc(p.label)}"
         ${page && p.id === page.id ? 'aria-current="page"' : ''}>
        <span class="nav-icon" aria-hidden="true">${p.icon || s.icon}</span><span>${esc(p.label)}</span>
      </a>`;
    const desk = sections.map(s => {
      if (s.pages.length === 1 || s.key === 'home') return s.pages.map(p => item(p, s)).join('');
      const open = s === curSec || opened.includes(s.key);
      return `<div class="nav-group${open ? ' open' : ''}${s === curSec ? ' current' : ''}">
        <button type="button" class="nav-head" data-navsec="${s.key}" aria-expanded="${open}" title="${esc(s.label)}">
          <span class="nav-icon" aria-hidden="true">${s.icon}</span><span>${esc(s.label)}</span><span class="nav-count">${s.pages.length}</span><span class="nav-caret" aria-hidden="true">▾</span>
        </button>
        <div class="nav-pages">${s.pages.map(p => item(p, s, ' sub')).join('')}</div>
      </div>`;
    }).join('');
    const secHref = s => href(s.pages.some(p => p.id === store.get(l.key + ':navlast:' + s.key)) ? store.get(l.key + ':navlast:' + s.key) : s.pages[0].id);
    const mob = `<div class="nav-secs">${sections.map(s => `<a class="nav-sec${s === curSec ? ' active' : ''}" href="${secHref(s)}"${s === curSec ? ' aria-current="true"' : ''}>
        <span aria-hidden="true">${s.pages.length === 1 ? (s.pages[0].icon || s.icon) : s.icon}</span><span>${esc(s.pages.length === 1 ? s.pages[0].label : s.label)}</span></a>`).join('')}</div>
      ${curSec && curSec.pages.length > 1 ? `<div class="nav-sub">${curSec.pages.map(p => `<a class="nav-subitem${page && p.id === page.id ? ' active' : ''}" href="${href(p.id)}">${esc(p.label)}</a>`).join('')}</div>` : ''}`;
    const mini = store.get('navmini') === '1';
    el.native.classList.toggle('nav-mini', mini);
    const toggle = `<button type="button" class="nav-toggle" data-navmini aria-pressed="${mini}" title="${mini ? 'Seitenleiste ausklappen' : 'Seitenleiste einklappen'}">${mini ? '»' : '«'}<span>Einklappen</span></button>`;
    el.nativeNav.innerHTML = `<div class="nav-desk">${toggle}${desk}</div><div class="nav-mob">${mob}</div>`;
    // Mobil: aktiven Bereich und aktive Seite ins Bild holen
    el.nativeNav.querySelectorAll('.nav-secs, .nav-sub').forEach(row => {
      const act = row.querySelector('.active');
      if (act && row.scrollWidth > row.clientWidth) row.scrollLeft = act.offsetLeft - (row.clientWidth - act.offsetWidth) / 2;
    });
    el.nativeNav.dataset.league = l.key;

    if (!page) {
      el.nativeMain.innerHTML = MFHFB.ui.empty('Noch keine Seiten', 'Für diese Liga ist noch kein Tool freigeschaltet.', '🚧');
      return;
    }

    const seq = ++renderSeq;
    el.nativeMain.innerHTML = `<div class="native-loading"><div class="spinner"></div>Lade ${esc(page.label)} …</div>`;
    // Liga-bezogener Speicher für Tool-Einstellungen (mfhfb:<liga>:<key>)
    const leagueStore = {
      get: k => store.get(l.key + ':' + k),
      set: (k, v) => store.set(l.key + ':' + k, v),
      getJSON(k, fallback) { try { const v = store.get(l.key + ':' + k); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; } },
      setJSON(k, v) { store.set(l.key + ':' + k, JSON.stringify(v)); },
    };
    let firstPaint = true;
    MFHFB.data.load(l, typeof page.data === 'function' ? page.data(l) : page.data)
      .then(data => {
        const ctx = { league: l, data, params, href, ui: MFHFB.ui, store: leagueStore };
        // Neu zeichnen ohne Routenwechsel (z.B. nach Klick auf einen
        // Modus-Umschalter). Daten sind gecacht, daher sofort.
        ctx.refresh = () => {
          if (seq !== renderSeq) return;
          const y = el.native.scrollTop, my = el.nativeMain.scrollTop;
          paint(ctx).then(() => { el.native.scrollTop = y; el.nativeMain.scrollTop = my; })
            .catch(err => { console.error(err); el.nativeMain.innerHTML = MFHFB.ui.empty('Fehler beim Anzeigen', err.message, '⚠️'); });
        };
        return ctx;
      })
      .then(ctx => (seq === renderSeq ? paint(ctx) : null))
      .catch(err => {
        if (seq !== renderSeq) return;
        console.error(err);
        el.nativeMain.innerHTML = MFHFB.ui.empty('Daten konnten nicht geladen werden', err.message, '⚠️');
      });

    function paint(ctx) {
      return Promise.resolve().then(() => page.render(ctx)).then(html => {
        if (seq !== renderSeq) return;
        el.nativeMain.innerHTML = html;
        if (page.mount) page.mount(el.nativeMain, ctx);
        MFHFB.ui.explainify(el.nativeMain); // class="explain" → Tooltip an der Überschrift
        const t = page.title ? page.title(ctx) : page.label;
        document.title = `${t} · ${l.short} · MFHFB HQ`;
        if (MFHFB.share) MFHFB.share.decorate(el.nativeMain, l);
        if (firstPaint) {
          firstPaint = false;
          el.nativeMain.focus({ preventScroll: true });
          el.native.scrollTop = 0; el.nativeMain.scrollTop = 0;
        }
      });
    }
  }

  // Später nachgeladene Teile (mount, Teil-Updates) ebenfalls „entschlacken“
  new MutationObserver(muts => {
    if (muts.some(m => [...m.addedNodes].some(n => n.nodeType === 1 && (n.classList.contains('explain') || n.querySelector('.explain'))))) MFHFB.ui.explainify(el.nativeMain);
  }).observe(el.nativeMain, { childList: true, subtree: true });

  // Bereiche in der Seitenleiste auf-/zuklappen (einmal delegiert)
  el.nativeNav.addEventListener('click', e => {
    // Seitenleiste ein-/ausklappen (Desktop, gilt für alle Ligen)
    const t = e.target.closest('[data-navmini]');
    if (t) {
      const mini = !el.native.classList.contains('nav-mini');
      store.set('navmini', mini ? '1' : '0');
      el.native.classList.toggle('nav-mini', mini);
      t.setAttribute('aria-pressed', String(mini));
      t.title = mini ? 'Seitenleiste ausklappen' : 'Seitenleiste einklappen';
      t.firstChild.textContent = mini ? '»' : '«';
      return;
    }
    const b = e.target.closest('[data-navsec]');
    if (!b) return;
    // Eingeklappt: Klick auf einen Bereich klappt die Leiste wieder aus
    if (el.native.classList.contains('nav-mini')) {
      store.set('navmini', '0'); el.native.classList.remove('nav-mini');
      const tg = el.nativeNav.querySelector('[data-navmini]');
      if (tg) { tg.setAttribute('aria-pressed', 'false'); tg.title = 'Seitenleiste einklappen'; tg.firstChild.textContent = '«'; }
      if (b.closest('.nav-group').classList.contains('open')) return;
    }
    const key = el.nativeNav.dataset.league, sec = b.dataset.navsec;
    let opened = [];
    try { opened = JSON.parse(store.get(key + ':navopen') || '[]'); } catch (err) { opened = []; }
    const g = b.closest('.nav-group');
    const open = !g.classList.contains('open');
    g.classList.toggle('open', open);
    b.setAttribute('aria-expanded', String(open));
    opened = open ? [...new Set([...opened, sec])] : opened.filter(x => x !== sec);
    store.set(key + ':navopen', JSON.stringify(opened));
  });

  el.versionBtn.addEventListener('click', () => {
    const l = byKey(parseRoute().league?.key);
    if (!l) return;
    store.set(l.key + ':native', useNative(l) ? '0' : '1');
    // Unterseiten-Namen der alten und neuen Version passen nicht zusammen →
    // beim Umschalten auf der Startseite der Liga landen.
    if (location.hash === '#/' + l.key) route(); else location.hash = '#/' + l.key;
  });

  // Bei jedem Liga-Wechsel ein FRISCHES iframe statt nur src zu ändern:
  // eine src-Änderung an einem bestehenden iframe legt einen eigenen
  // History-Eintrag an → "Zurück" würde dann nur den iframe-Inhalt auf die
  // vorige Liga zurückschalten, während oben noch die neue Liga steht.
  // Ein neu eingefügtes iframe navigiert ohne History-Eintrag.
  function loadFrame(url, title) {
    const f = document.createElement('iframe');
    f.id = 'leagueFrame';
    f.title = title;
    f.setAttribute('referrerpolicy', 'same-origin');
    f.addEventListener('load', onFrameLoad);
    f.src = url;
    el.frame.replaceWith(f);
    el.frame = f;
  }

  // Hash + Titel der eingebetteten Seite in die äußere URL spiegeln, damit
  // Reload/Teilen auf derselben Unterseite landet. replaceState statt
  // pushState: die Navigation im iframe erzeugt schon selbst einen
  // History-Eintrag, sonst müsste man für jeden Schritt zweimal "Zurück".
  function syncFromFrame() {
    const l = byKey(activeKey);
    if (!l) return;
    let inner = '', title = '', href = '';
    try {
      href = el.frame.contentWindow.location.href;
      inner = el.frame.contentWindow.location.hash.replace(/^#/, '');
      title = el.frame.contentDocument.title || '';
    } catch (e) { return; } // andere Origin (z.B. lokal als Datei geöffnet) → kein Spiegeln
    // Absicherung: nur spiegeln, wenn das iframe wirklich die aktive Liga zeigt.
    if (!href.startsWith(l.legacyUrl)) return;
    frameInnerHash = inner;
    const want = '#/' + l.key + (inner ? '/' + inner : '');
    if (location.hash !== want && parseRoute().league) history.replaceState(null, '', want);
    el.openTab.href = frameUrl(l, inner);
    document.title = (title ? title + ' · ' : l.short + ' · ') + 'MFHFB HQ';
  }

  function onFrameLoad(e) {
    if (e.currentTarget !== el.frame) return; // Load eines bereits ersetzten iframes
    if (el.frame.getAttribute('src') === 'about:blank' || !el.frame.getAttribute('src')) return;
    el.loading.hidden = true;
    try {
      el.frame.contentWindow.addEventListener('hashchange', syncFromFrame);
    } catch (err) { /* andere Origin */ }
    syncFromFrame();
  }

  // ---------------- Switch Leagues ----------------
  function renderMenu(currentKey) {
    el.switchMenu.innerHTML = Object.keys(SPORTS).map(sport => {
      const leagues = LEAGUES.filter(l => l.sport === sport);
      return `
        <div class="switch-group-label">${SPORTS[sport].emoji} ${esc(SPORTS[sport].label)}</div>
        ${leagues.map(l => `
          <a class="switch-item" role="menuitem" href="#/${l.key}" style="--item-accent:${l.accent}"
             aria-current="${l.key === currentKey}">
            <span class="dot"></span><span>${l.emoji} ${esc(l.name)}</span><span class="meta">${esc(l.platform)}</span>
          </a>`).join('')}`;
    }).join('') + `
      <div class="switch-divider"></div>
      <a class="switch-item" role="menuitem" href="#/" style="--item-accent:var(--brand)"><span class="dot"></span><span>🏠 Übersicht</span></a>`;
  }

  function openMenu() {
    el.switchMenu.hidden = false;
    el.switchBtn.setAttribute('aria-expanded', 'true');
    const cur = el.switchMenu.querySelector('[aria-current="true"]') || el.switchMenu.querySelector('.switch-item');
    if (cur) cur.focus();
  }
  function closeMenu() {
    if (el.switchMenu.hidden) return;
    el.switchMenu.hidden = true;
    el.switchBtn.setAttribute('aria-expanded', 'false');
  }
  el.switchBtn.addEventListener('click', e => {
    e.stopPropagation();
    el.switchMenu.hidden ? openMenu() : closeMenu();
  });
  el.switchMenu.addEventListener('click', e => { if (e.target.closest('.switch-item')) closeMenu(); });
  el.switchMenu.addEventListener('keydown', e => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    const items = [...el.switchMenu.querySelectorAll('.switch-item')];
    const i = items.indexOf(document.activeElement);
    items[(i + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length].focus();
  });
  document.addEventListener('click', e => { if (!e.target.closest('.switch-wrap')) closeMenu(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !el.switchMenu.hidden) { closeMenu(); el.switchBtn.focus(); }
  });
  // Klicks im iframe erreichen das äußere document nicht → Menü beim
  // Fokuswechsel ins iframe ebenfalls schließen.
  window.addEventListener('blur', () => setTimeout(() => { if (document.activeElement === el.frame) closeMenu(); }, 0));

  // ---------------- Theme ----------------
  function effectiveTheme() {
    const set = document.documentElement.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => btn.addEventListener('click', () => {
    const next = effectiveTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    store.set('theme', next);
  }));

  // ---------------- Start ----------------
  renderLanding();
  window.addEventListener('hashchange', route);
  // ---------------- „📲 Installieren“ ----------------
  //  Chrome/Edge/Android: eigener Installations-Dialog (beforeinstallprompt).
  //  iPhone/iPad (Safari kann das nicht per Knopf): Anleitung „Teilen →
  //  Zum Home-Bildschirm“. Als App geöffnet → Knopf bleibt versteckt.
  (function install() {
    const btns = [...document.querySelectorAll('[data-install]')];
    const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
    if (standalone || !btns.length) return;
    let deferred = null;
    const show = on => btns.forEach(b => { b.hidden = !on; });
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferred = e; show(true); });
    window.addEventListener('appinstalled', () => { deferred = null; show(false); });
    if (ios) show(true);
    btns.forEach(b => b.addEventListener('click', async () => {
      if (deferred) {
        deferred.prompt();
        try { await deferred.userChoice; } catch (e) { /* egal */ }
        deferred = null; show(false);
        return;
      }
      MFHFB.ui.modal('installHelp', `<div class="dna-modal-box" style="max-width:460px">
        <div class="dna-modal-head"><h2 style="margin:0">📲 MFHFB HQ installieren</h2><button type="button" class="dna-modal-x" data-close aria-label="Schließen">✕</button></div>
        ${ios
          ? '<ol style="line-height:1.8;padding-left:20px;margin:0"><li>In Safari unten auf <b>Teilen</b> <span aria-hidden="true">⬆️</span> tippen</li><li><b>„Zum Home-Bildschirm“</b> wählen</li><li>Oben rechts <b>Hinzufügen</b></li></ol><p class="muted small">Danach startet MFHFB HQ wie eine App — direkt in Deiner zuletzt genutzten Liga.</p>'
          : '<p style="margin:0;line-height:1.6">Im Browser-Menü <b>„App installieren“</b> bzw. <b>„Zum Startbildschirm hinzufügen“</b> wählen (Chrome/Edge: Symbol rechts in der Adressleiste).</p>'}
      </div>`);
    }));
  })();

  // Als App installiert (manifest start_url ?app=1): direkt die zuletzt
  // genutzte Liga öffnen statt der Übersicht.
  if (/[?&]app=1/.test(location.search) && (!location.hash || location.hash === '#/' || location.hash === '#')) {
    const last = byKey(store.get('lastLeague'));
    if (last) history.replaceState(null, '', '#/' + last.key);
  }
  // Link von einer alten Liga-Seite (?neu=1#/tthq/livedraft): für diese Liga
  // direkt die neue Version zeigen (wie Klick auf „✨ Neue Version“).
  if (/[?&]neu=1/.test(location.search)) {
    const l = byKey((location.hash.match(/^#\/([^/?]+)/) || [])[1]);
    if (l && l.nativePreview) store.set(l.key + ':native', '1');
    history.replaceState(null, '', location.pathname + location.hash);
  }
  route();
})();
