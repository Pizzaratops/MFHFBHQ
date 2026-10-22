// ============================================================
//  QUELLEN & DANK — Pop-up (seit 22.10.2026)
// ============================================================
//  Öffnet sich über den Link ganz unten auf der Hauptseite (und über
//  „Alle Quellen“ auf einzelnen Seiten, z. B. Projections). Alles, was von
//  woanders kommt, auf etwas verweist oder übernommen und abgeändert wurde,
//  gehört hier rein. Neue Quelle im Code → hier ergänzen.
//  Aufruf: MFHFB.credits.open()  ·  Elemente mit [data-credits] öffnen es per Klick.
// ============================================================
(function () {
  const A = (href, t) => `<a href="${href}" target="_blank" rel="noopener">${t}</a>`;
  const SECTIONS = [
    ['🏠 MFHFB HQ', [
      '<b>Grundideen, Ligen, Konzepte und Bewertungslogik: MFHFB.</b> Welche Werkzeuge es gibt, was sie messen sollen und wie die Ligen laufen, kommt von uns.',
      `<b>Der komplette Code dieser Seite</b> (Oberfläche, Datenabrufe, Modelle, Automatik) ist mit ${A('https://claude.ai', 'Claude')} (Anthropic) geschrieben.`,
      'Eigene Werkzeuge mit eigenen Daten: Sticky Score / Summer-League-Modell, MFHFB Big Boards, Draft Guides.',
    ]],
    ['🏟️ Ligen & Plattformen', [
      `${A('https://www.espn.com/fantasy/', 'ESPN Fantasy')}: Kader, Matchups, Tabellen, Transaktionen und Draft-Ergebnisse von Taco Tuesday, Funkytown und Foodball.`,
      `${A('https://www.fantrax.com', 'Fantrax')}: Dizzle CBB – Liga, Kader, Rollen- und Positionszuweisungen, College-Stats.`,
      `${A('https://sleeper.com', 'Sleeper')}: DOPE – Liga, Kader, Trades; Projektionen dort von RotoWire.`,
      `${A('https://www.basketball.de', 'basketball.de')}: US-Manager (Spielregeln, Preise).`,
      'Google Sheets: Gebote der Dizzle-NIL-Auktion.',
    ]],
    ['🏀 NBA', [
      `${A('https://www.espn.com/nba/', 'ESPN')}: Kader, Spielpläne, Boxscores, Live Scores.`,
      `<b>Josh Lloyd</b> (${A('https://joshlloydfantasy.com', 'joshlloydfantasy.com')}, ${A('https://basketballmonster.com', 'Basketball Monster')}): Projections, Minuten-Projektionen aus seinem Podcast, DURANT H2H (bei uns „Rose-Metric“), Kategorie-Gewichte nach Konsistenz und die ${A('https://joshlloydfantasy.com/research/xstats-method/', 'xStats-Methode')}.`,
      `${A('https://hashtagbasketball.com', 'Hashtag Basketball')}: Projections und Dynasty-Rankings.`,
      `${A('https://www.nba.com/stats', 'NBA.com Stats')}: Tracking-Daten für xSTL/xTO, Preseason-Daten.`,
      `<b>Ramiro Bentes</b> (${A('https://github.com/ramirobentes/nba_data', 'nba_data')}, ${A('https://github.com/ramirobentes/nbadatar', 'nbadatar')}): Play-by-Play für x3PM/xFG%. Sein Projekt, nicht unseres – wir übernehmen die Daten unverändert und rechnen nur daraus.`,
      `${A('https://github.com/sportsdataverse', 'sportsdataverse / hoopR')}: historische Boxscores und Spielpläne (Baseline, Backtests, Power Rankings).`,
      '<b>Bootleg Power Score:</b> Idee von Brett Kollmann und EJ Snyder (NFL Bootleg), übernommen und für NBA-Teams und Fantasy-Teams abgeändert.',
      '<b>Unicorns:</b> nach Rotoballer, „Fantasy Basketball Unicorns“ (Dan Palyo) – Kategorie-Paare und Picks übernommen, Schwelle angepasst.',
      '<b>Gain</b> (Waiver) und die Team-Auswertung im World Cup: Idee von u/EdgiestOW (r/fantasybball).',
      '<b>Rollen &amp; Matchups</b> (Profiteure, Minuten-Trend, Gegner-Faktoren, Back-to-backs): eigene Auswertung auf dem Play-by-Play von Ramiro Bentes.',
    ]],
    ['🎓 College & NBA Draft', [
      `${A('https://www.fantrax.com', 'Fantrax')} und ${A('https://www.espn.com/mens-college-basketball/', 'ESPN')}: College-Stats, Kader, Trainer, Spielpläne.`,
      `${A('https://github.com/sportsdataverse/hoopR-mbb-data', 'hoopR-mbb-data')}: College-Boxscores seit 2006 (Modell, NBA-DNA, Vorsaison).`,
      'Meldungen zu Spielberechtigung, Transfers und NIL: On3, 247Sports, Sports Illustrated, CBS Sports und lokale Medien (jeweils am Spieler verlinkt).',
      `Draft Boards: ${A('https://grindingtape.com', 'Grinding Tape')} (Scouting-Reports), Dizzle Dynasty, Game Theory Rankings, Ben Pfeifers Archetyp-Board, ${A('https://www.tankathon.com', 'Tankathon')} – abgeglichen, die Fantasy-Einordnung ist unsere.`,
    ]],
    ['🏈 NFL', [
      `${A('https://github.com/nflverse', 'nflverse / ffverse')}: Spiel- und Spielerdaten, Draft, Combine.`,
      `${A('https://github.com/dynastyprocess', 'DynastyProcess')} mit ${A('https://www.fantasypros.com', 'FantasyPros')}-Konsens: Rookie-Kurve, Dynasty-Ränge.`,
      `Dynasty-Werte: ${A('https://keeptradecut.com', 'KeepTradeCut')}, ${A('https://dynasty-daddy.com', 'Dynasty Daddy')}, Fantasy Navigator, FantasyPros.`,
      `${A('https://collegefootballdata.com', 'CollegeFootballData.com')}: College Scouting, Comps, Draft Range.`,
      '<b>Bootleg Power Score:</b> Idee von Brett Kollmann und EJ Snyder (NFL Bootleg), übernommen und abgeändert (NFL-Teams und Fantasy-Positionen).',
    ]],
    ['🛠️ Technik', [
      `${A('https://html2canvas.hertzen.com', 'html2canvas')} (Niklas von Hertzen, MIT-Lizenz): Bilder zum Teilen.`,
      `${A('https://fonts.google.com', 'Google Fonts')}: Barlow Condensed, DM Sans.`,
      `GitHub Pages und GitHub Actions (Hosting, Automatik), ${A('https://cron-job.org', 'cron-job.org')} (Zeitplan), öffentliche CORS-Proxys (corsproxy.io, allorigins, codetabs).`,
    ]],
  ];
  const html = () => `<div class="dna-modal-box credits-box">
    <div class="dna-modal-head"><h2 class="display" style="margin:0">🙏 Quellen &amp; Dank</h2><button type="button" class="dna-modal-x" data-close aria-label="Schließen">✕</button></div>
    ${SECTIONS.map(([h, items]) => `<section class="credits-sec"><h3>${h}</h3><ul>${items.map(i => `<li>${i}</li>`).join('')}</ul></section>`).join('')}
    <p class="credits-foot">MFHFB HQ ist ein privates, nicht-kommerzielles Projekt ohne Verbindung zu den genannten Seiten und Personen. Daten, Namen und Marken gehören den jeweiligen Rechteinhabern. Danke an alle, die ihre Arbeit frei teilen.</p>
  </div>`;
  window.MFHFB = window.MFHFB || {};
  MFHFB.credits = { open: () => MFHFB.ui.modal('creditsModal', html()) };
  document.addEventListener('click', ev => {
    const t = ev.target.closest('[data-credits]');
    if (!t) return;
    ev.preventDefault();
    MFHFB.credits.open();
  });
})();
