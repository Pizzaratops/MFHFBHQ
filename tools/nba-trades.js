// ============================================================
//  Tools (NBA, Keeper/Dynasty): Trade Analyzer, Trade Finder, Trade-Historie
// ============================================================
//  #/<liga>/trade[/<teamId>]   Trade Analyzer (optional: Seite A vorauswählen)
//  #/<liga>/tradefinder        Trade Finder
//  #/<liga>/tradehistory       Trade-Historie (read-only)
//
//  Port von TTHQ js/trade-analyzer.js, js/trade-finder.js,
//  js/trade-history.js + den Pick-Helfern aus data/stats.js
//  (PICK_VALUES, buildPickPool, pickTradeValue). Bewertung seit 23.11.2026
//  neu (Backtest, sports/nba/scripts/trade-backtest/):
//   - TRADE_VALUE_TABLE = √(Matt-Sheet × historisch realisierter Wert)
//   - Dynasty ohne Alters-Faktor (steckt im Ranking), Win-Now mit Alters-Kurve
//   - Picks: Wert je Slot (SLOT_VALUES) × 0,9 je Jahr; ohne Slot Erwartungswert
//     über die TTHQ-Lottery (LOTTERY_P), nächster Draft aus der Tabelle projiziert
//   - Konsolidierung: KTC-Raw-Adjustment (compareVals) statt Paket-Abschlag
//   - Urteil: < 5 %-Punkte von 50/50 fair, < 12 leicht, sonst deutlich
//
//  Neu (16.10.2026): „Live-Form“ — mit DYNASTY_LIVE (Saison gegen Erwartung)
//  zählt bei deutlich über-/unterperformenden Spielern der Live-Rang statt des
//  Dynasty-Rangs (Schalter, Standard an; Trade-Historie bleibt eingefroren).
//  Nicht übernommen: Share-Bild (html2canvas) → „Als Text kopieren“;
//  Trade speichern / Admin-Staging / Löschen / Export der Historie
//  (die Historie wird in data/trade-history.js im Repo gepflegt).
//  Nur für Keeper-/Dynasty-NBA-Ligen (Funkytown = Redraft → keine Trade-Tools).
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const APPLIES = { sport: ['nba'], keepers: [true] };
  const DATA = ['teams', '?rosters-live', '?sport:aliases', 'rankings', '?hashtag', '?picks', '?picks-live', '?dynasty-live', '?season-matchups', '?./sports/nba/data/prospect-board-nba'];
  // Live-Form (seit 16.10.2026): Live-Rang aus DYNASTY_LIVE (Saison gegen Erwartung, nur
  // signifikante Abweichungen) ersetzt den Dynasty-Rang für den Wert. Ligaweiter Schalter.
  const liveOn = ctx => ctx.store.getJSON('dynlive', true) !== false;
  const hasLive = data => Array.isArray(data.DYNASTY_LIVE) && data.DYNASTY_LIVE.length > 0;
  function liveToggle(ctx) {
    if (!hasLive(ctx.data)) return '';
    const on = liveOn(ctx), n = ctx.data.DYNASTY_LIVE.length;
    return `<label class="tr-nba-cb tr-nba-live" title="Spieler, die in dieser Saison deutlich besser oder schlechter spielen als erwartet, werden mit ihrem Live-Rang bewertet (${n} Spieler, siehe Dynasty Rankings → Spalte Live)."><input type="checkbox" data-live${on ? ' checked' : ''}> 📈 Live-Form einrechnen <small class="muted">(${n} Spieler)</small></label>`;
  }

  // Trade values from MFHFBs spreadsheet (rank → value lookup) — wörtlich aus trade-analyzer.js
  const TRADE_VALUE_TABLE = {"1": 1590, "2": 1464, "3": 1373, "4": 1279, "5": 1115, "6": 1051, "7": 992, "8": 905, "9": 855, "10": 827, "11": 795, "12": 783, "13": 740, "14": 735, "15": 703, "16": 678, "17": 678, "18": 661, "19": 661, "20": 661, "21": 661, "22": 636, "23": 609, "24": 602, "25": 580, "26": 567, "27": 547, "28": 534, "29": 507, "30": 503, "31": 501, "32": 482, "33": 468, "34": 459, "35": 445, "36": 442, "37": 431, "38": 429, "39": 419, "40": 409, "41": 401, "42": 394, "43": 384, "44": 377, "45": 370, "46": 368, "47": 365, "48": 360, "49": 353, "50": 351, "51": 342, "52": 342, "53": 338, "54": 332, "55": 332, "56": 332, "57": 331, "58": 330, "59": 330, "60": 326, "61": 315, "62": 309, "63": 309, "64": 305, "65": 300, "66": 293, "67": 285, "68": 263, "69": 260, "70": 256, "71": 247, "72": 242, "73": 234, "74": 230, "75": 227, "76": 226, "77": 221, "78": 218, "79": 212, "80": 207, "81": 203, "82": 201, "83": 187, "84": 183, "85": 176, "86": 172, "87": 169, "88": 169, "89": 168, "90": 168, "91": 168, "92": 165, "93": 163, "94": 161, "95": 159, "96": 158, "97": 156, "98": 155, "99": 152, "100": 149, "101": 148, "102": 148, "103": 145, "104": 144, "105": 142, "106": 140, "107": 140, "108": 138, "109": 138, "110": 137, "111": 136, "112": 135, "113": 135, "114": 135, "115": 135, "116": 135, "117": 135, "118": 135, "119": 133, "120": 133, "121": 131, "122": 129, "123": 128, "124": 128, "125": 127, "126": 126, "127": 125, "128": 124, "129": 123, "130": 122, "131": 122, "132": 122, "133": 122, "134": 121, "135": 119, "136": 119, "137": 118, "138": 116, "139": 115, "140": 114, "141": 113, "142": 111, "143": 111, "144": 109, "145": 109, "146": 109, "147": 109, "148": 108, "149": 108, "150": 107, "151": 106, "152": 105, "153": 102, "154": 102, "155": 102, "156": 100, "157": 99, "158": 97, "159": 97, "160": 96, "161": 95, "162": 94, "163": 93, "164": 93, "165": 93, "166": 92, "167": 90, "168": 89, "169": 88, "170": 87, "171": 87, "172": 86, "173": 86, "174": 86, "175": 85, "176": 85, "177": 83, "178": 83, "179": 83, "180": 82, "181": 81, "182": 81, "183": 80, "184": 79, "185": 78, "186": 77, "187": 77, "188": 77, "189": 76, "190": 75, "191": 74, "192": 74, "193": 73, "194": 73, "195": 72, "196": 71, "197": 70, "198": 69, "199": 68, "200": 67, "201": 67, "202": 66, "203": 65, "204": 65, "205": 64, "206": 64, "207": 62, "208": 62, "209": 62, "210": 61, "211": 60, "212": 60, "213": 59, "214": 58, "215": 58, "216": 58, "217": 58, "218": 58, "219": 57, "220": 57, "221": 57, "222": 57, "223": 56, "224": 56, "225": 56, "226": 56, "227": 55, "228": 55, "229": 54, "230": 54, "231": 53, "232": 52, "233": 52, "234": 51, "235": 51, "236": 50, "237": 50, "238": 50, "239": 50, "240": 50, "241": 49, "242": 49, "243": 49, "244": 49, "245": 49, "246": 48, "247": 48, "248": 48, "249": 48, "250": 48, "251": 48, "252": 48, "253": 48, "254": 48, "255": 48, "256": 48, "257": 48, "258": 48, "259": 48, "260": 48, "261": 48, "262": 48, "263": 48, "264": 48, "265": 48, "266": 48, "267": 47, "268": 47, "269": 47, "270": 46, "271": 46, "272": 46, "273": 45, "274": 45, "275": 45, "276": 44, "277": 43, "278": 43, "279": 43, "280": 43, "281": 42, "282": 42, "283": 41, "284": 41, "285": 41, "286": 41, "287": 40, "288": 40, "289": 40, "290": 39, "291": 39, "292": 38, "293": 37, "294": 37, "295": 37, "296": 37, "297": 36, "298": 36, "299": 35, "300": 35, "301": 35, "302": 35, "303": 35, "304": 35, "305": 35, "306": 35, "307": 35, "308": 35, "309": 35, "310": 35, "311": 35, "312": 34, "313": 34, "314": 34, "315": 34, "316": 33, "317": 33, "318": 33, "319": 32, "320": 32, "321": 31, "322": 31, "323": 31, "324": 30, "325": 30, "326": 30, "327": 30, "328": 30, "329": 30, "330": 29, "331": 29, "332": 29, "333": 28, "334": 28, "335": 28, "336": 27, "337": 27, "338": 26, "339": 24, "340": 23, "341": 23, "342": 23, "343": 23, "344": 23, "345": 23, "346": 22, "347": 22, "348": 22, "349": 22, "350": 22, "351": 22, "352": 21, "353": 21, "354": 21, "355": 21, "356": 21, "357": 20, "358": 20, "359": 20, "360": 19.7, "361": 19.6, "362": 19.6, "363": 19.6, "364": 19.6, "365": 19.5, "366": 19.3, "367": 19.3, "368": 19.3, "369": 19.3, "370": 19.3, "371": 19.3, "372": 19.2, "373": 19.1, "374": 19.1, "375": 19.1, "376": 19.1, "377": 19.1, "378": 18.9, "379": 18.9, "380": 18.9, "381": 18.8, "382": 18.8, "383": 18.8, "384": 18.8, "385": 18.8, "386": 18.8, "387": 18.8, "388": 18.8, "389": 18.4, "390": 18.4, "391": 18.4, "392": 18.3, "393": 18.3, "394": 18.3, "395": 18.2, "396": 18.2, "397": 18.0, "398": 18.0, "399": 17.7, "400": 17.3, "401": 17.1, "402": 17.0, "403": 16.9, "404": 16.7, "405": 16.6, "406": 16.5, "407": 16.3, "408": 16.2, "409": 16.1, "410": 15.9, "411": 15.8, "412": 15.7, "413": 15.5, "414": 15.4, "415": 15.3, "416": 15.1, "417": 15.0, "418": 14.9, "419": 14.7, "420": 14.6, "421": 14.4, "422": 14.3, "423": 14.2, "424": 14.0, "425": 13.9, "426": 13.8, "427": 13.6, "428": 13.5, "429": 13.4, "430": 13.2, "431": 13.1, "432": 13.0, "433": 12.8, "434": 12.7, "435": 12.6, "436": 12.4, "437": 12.3, "438": 12.2, "439": 12.0, "440": 11.9, "441": 11.8, "442": 11.6, "443": 11.5, "444": 11.4, "445": 11.2, "446": 11.1, "447": 11.0, "448": 10.8, "449": 10.7, "450": 10.5, "451": 10.4, "452": 10.3, "453": 10.1, "454": 10.0, "455": 9.9, "456": 9.7, "457": 9.6, "458": 9.5, "459": 9.3, "460": 9.2, "461": 9.1, "462": 8.9, "463": 8.8, "464": 8.7, "465": 8.5, "466": 8.4, "467": 8.3, "468": 8.1, "469": 8.0, "470": 7.9, "471": 7.7, "472": 7.6, "473": 7.5, "474": 7.3, "475": 7.2, "476": 7.1, "477": 6.9, "478": 6.8, "479": 6.7, "480": 6.5, "481": 6.4, "482": 6.2, "483": 6.1, "484": 6.0, "485": 5.8, "486": 5.7, "487": 5.6, "488": 5.4, "489": 5.3, "490": 5.2, "491": 5.0, "492": 4.9, "493": 4.8, "494": 4.6, "495": 4.5, "496": 4.4, "497": 4.2, "498": 4.1, "499": 4.0, "500": 3.8, "501": 3.7, "502": 3.6, "503": 3.4, "504": 3.3, "505": 3.2, "506": 3.0, "507": 2.9, "508": 2.8, "509": 2.6, "510": 2.5, "511": 2.4, "512": 2.2, "513": 2.1, "514": 1.9, "515": 1.8, "516": 1.7, "517": 1.5, "518": 1.4, "519": 1.3, "520": 1.1, "521": 1.0, "522": 0.9, "523": 0.7, "524": 0.6, "525": 0.5, "526": 0.3, "527": 0.2, "528": 0.0, "529": 0.0, "530": 0.0, "531": 0.0, "532": 0.0, "533": 0.0, "534": 0.0, "535": 0.0, "536": 0.0, "537": 0.0, "538": 0.0, "539": 0.0, "540": 0.0, "541": 0.0, "542": 0.0, "543": 0.0, "544": 0.0, "545": 0.0, "546": 0.0, "547": 0.0, "548": 0.0, "549": 0.0, "550": 0.0, "551": 0.0, "552": 0.0, "553": 0.0, "554": 0.0, "555": 0.0, "556": 0.0, "557": 0.0, "558": 0.0, "559": 0.0, "560": 0.0, "561": 0.0, "562": 0.0, "563": 0.0, "564": 0.0, "565": 0.0, "566": 0.0, "567": 0.0, "568": 0.0, "569": 0.0, "570": 0.0, "571": 0.0, "572": 0.0, "573": 0.0, "574": 0.0, "575": 0.0, "576": 0.0, "577": 0.0, "578": 0.0, "579": 0.0, "580": 0.0, "581": 0.0, "582": 0.0, "583": 0.0, "584": 0.0, "585": 0.0, "586": 0.0, "587": 0.0, "588": 0.0, "589": 0.0, "590": 0.0, "591": 0.0, "592": 0.0, "593": 0.0, "594": 0.0, "595": 0.0, "596": 0.0, "597": 0.0, "598": 0.0, "599": 0.0, "600": 0.0, "601": 0.0, "602": 0.0, "603": 0.0, "604": 0.0, "605": 0.0, "606": 0.0, "607": 0.0, "608": 0.0, "609": 0.0, "610": 0.0, "611": 0.0, "612": 0.0, "613": 0.0, "614": 0.0, "615": 0.0, "616": 0.0, "617": 0.0, "618": 0.0, "619": 0.0, "620": 0.0, "621": 0.0, "622": 0.0, "623": 0.0, "624": 0.0, "625": 0.0, "626": 0.0, "627": 0.0, "628": 0.0, "629": 0.0, "630": 0.0, "631": 0.0, "632": 0.0, "633": 0.0, "634": 0.0, "635": 0.0, "636": 0.0, "637": 0.0, "638": 0.0, "639": 0.0, "640": 0.0, "641": 0.0, "642": 0.0, "643": 0.0, "644": 0.0, "645": 0.0, "646": 0.0, "647": 0.0, "648": 0.0, "649": 0.0, "650": 0.0, "651": 0.0, "652": 0.0, "653": 0.0, "654": 0.0, "655": 0.0, "656": 0.0, "657": 0.0};

  // Seit 23.11.2026 (Backtest, siehe sports/nba/scripts/trade-backtest/ + Projekt-Doc
  // claude/trade-values-research.md):
  //  - TRADE_VALUE_TABLE = geometrisches Mittel aus Matt-Sheet und historisch realisiertem Wert
  //    (BBM 2004–2026, 7 Jahre, Abzinsung 0,85, Ersatzniveau Rang 156), monoton geglättet.
  //  - SLOT_VALUES: Wert je TTHQ-Slot 1–48 für den NÄCHSTEN Draft = Wert des Dynasty-Rangs, den ein
  //    NBA-Pick dieser Position historisch erreicht hat (#1 ≈ Rang 46, #5 ≈ 75, #12 ≈ 119).
  //    Jedes weitere Jahr bis zum Draft ×0,9. Kein Rookie-Faktor mehr.
  //  - LOTTERY_P[k][s]: P(TTHQ-Slot s | k-te Wahl im NBA-Team-Picking), k=0 = Letzter. Regel: der
  //    Letzte wählt zuerst ein NBA-Team und bekommt dessen Lottery-Ergebnis (200k Simulationen).
  //    Champion = Slot 12. Alle Runden in derselben Reihenfolge.
  const SLOT_VALUES = [368, 332, 315, 263, 227, 201, 169, 159, 148, 140, 135, 133, 129, 127, 123, 121, 118, 111, 108, 107, 105, 102, 102, 95, 92, 86, 86, 85, 83, 79, 76, 74, 72, 67, 62, 62, 61, 60, 48, 48, 48, 48, 48, 48, 48, 35, 22, 22];
  const LOTTERY_P = [[0.145, 0.138, 0.134, 0.185, 0.398, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.144, 0.138, 0.134, 0.147, 0.279, 0.159, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.145, 0.139, 0.132, 0.123, 0.18, 0.23, 0.051, 0.0, 0.0, 0.0, 0.0, 0.0], [0.129, 0.127, 0.122, 0.108, 0.104, 0.261, 0.135, 0.014, 0.0, 0.0, 0.0, 0.0], [0.108, 0.109, 0.109, 0.095, 0.039, 0.229, 0.244, 0.062, 0.003, 0.0, 0.0, 0.0], [0.092, 0.095, 0.097, 0.086, 0.0, 0.121, 0.317, 0.169, 0.022, 0.0, 0.0, 0.0], [0.077, 0.081, 0.085, 0.076, 0.0, 0.0, 0.252, 0.333, 0.09, 0.006, 0.0, 0.0], [0.061, 0.066, 0.07, 0.065, 0.0, 0.0, 0.0, 0.422, 0.279, 0.036, 0.001, 0.0], [0.047, 0.05, 0.055, 0.052, 0.0, 0.0, 0.0, 0.0, 0.606, 0.183, 0.008, 0.0], [0.031, 0.034, 0.037, 0.037, 0.0, 0.0, 0.0, 0.0, 0.0, 0.776, 0.085, 0.0], [0.021, 0.023, 0.025, 0.025, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.906, 0.0]];
  const YEAR_DISC = 0.9;
  // Kompatibilität (Export/Tests): Ø früh/mitte/spät je Runde für den nächsten Draft
  const PICK_VALUES = {};
  for (let r = 1; r <= 4; r++) [['early', 1, 4], ['mid', 5, 8], ['late', 9, 12]].forEach(([k, lo, hi]) => {
    let t = 0; for (let sl = lo; sl <= hi; sl++) t += SLOT_VALUES[(r - 1) * 12 + sl - 1];
    PICK_VALUES[`R${r}_${k}`] = Math.round(t / (hi - lo + 1));
  });



  const MODES = [
    { key: 'dynasty', label: '🏗️ Dynasty', desc: '<b>Dynasty:</b> reiner Wert des Dynasty-Rangs (Alter steckt schon im Ranking) — die neutrale Konsens-Sicht für langfristige Trades.' },
    { key: 'winnow', label: '🏆 Win-Now', desc: '<b>Win-Now:</b> Veteranen bekommen einen Bonus, unerprobte Youngster einen Abschlag. Ideal für Contender mit Blick auf die nächsten 2–3 Saisons.' },
  ];
  const modeOk = m => MODES.some(x => x.key === m) ? m : 'dynasty';
  const fmt = v => Math.round(v).toLocaleString('de-DE');

  // ============================================================
  //  Bewertung (1:1 aus trade-analyzer.js / data/stats.js)
  // ============================================================
  function playerAgeToday(dobStr) {
    if (!dobStr) return 26; // fallback to neutral age
    const dob = new Date(dobStr);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
    return age;
  }

  function ageMultiplier(dobStr, mode) {
    // Seit 23.11.2026: Dynasty = Rang-Wert ohne Alters-Faktor (das Alter steckt schon im Dynasty-Ranking;
    // Matt, Hashtag und KTC rechnen auch so). Nur Win-Now gewichtet um.
    if (mode !== 'winnow') return 1.0;
    const age = playerAgeToday(dobStr);
    {
      if (age <= 19) return 0.70;
      if (age <= 21) return 0.82;
      if (age <= 23) return 0.92;
      if (age <= 25) return 1.00;
      if (age <= 27) return 1.10;
      if (age <= 29) return 1.15;
      if (age <= 31) return 1.08;
      if (age <= 33) return 0.88;
      if (age <= 35) return 0.62;
      return 0.30;
    }
    return 1.0;
  }

  let NEXT = 2026; // nächster Draft, in model() gesetzt
  let BOARD = null; // Konsens-Board NBA-Draft (prospect-board-nba.js) → Prospects je Pick-Slot
  // Welche Prospects landen (laut Konsens-Board + TTHQ-Kurve) etwa auf dem Slot dieses Picks?
  function prospectsFor(pick, max = 3) {
    const B = BOARD;
    if (!B || !B.tthq || !B.players || pick.year !== B.draft || pick.round > 3) return [];
    const x = B.tthq.nba, y = B.tthq.slot;
    const slotOf = r => { if (r <= x[0]) return y[0]; if (r > x[x.length - 1]) return null; for (let i = 1; i < x.length; i++) if (r <= x[i]) return y[i - 1] + (y[i] - y[i - 1]) * (r - x[i - 1]) / (x[i] - x[i - 1]); return null; };
    const within = pick.slot ? ((pick.slot - 1) % 12) + 1 : pick.expSlot;
    if (within == null) return [];
    const target = (pick.round - 1) * 12 + within;
    const tol = pick.slot ? 1 : 1.5;
    const L = B.players.map(p => ({ p, s: slotOf(p.rank) })).filter(o => o.s != null);
    let hit = L.filter(o => Math.abs(o.s - target) <= tol);
    if (!hit.length) hit = L.sort((a, b) => Math.abs(a.s - target) - Math.abs(b.s - target)).slice(0, 2);
    return hit.slice(0, max).map(o => o.p);
  }
  const prospectsLine = pick => { const L = prospectsFor(pick); return L.length ? `<span class="tr-nba-prosp" title="Laut Konsens-Board ${BOARD.draft} (Stand ${BOARD.asof.split('-').reverse().join('.')}) und TTHQ-Draft-Kurve typischerweise auf diesem Slot">🎓 z. B. ${L.map(p => esc(p.name) + ' <small>#' + p.rank + '</small>').join(', ')}</span>` : ''; };
  let PROJ = new Map(); // teamId → P(Wahl-Position 0..11) für den nächsten Draft (aus der laufenden Saison)
  const slotValue = (round, slot) => SLOT_VALUES[(round - 1) * 12 + slot - 1] || 0;
  // Verteilung über Slot 1..12 (Index 0..11)
  function slotDist(pick) {
    if (pick.slot) {
      const sl = Math.min(12, ((pick.slot - 1) % 12) + 1);
      return Array.from({ length: 12 }, (_, i) => (i === sl - 1 ? 1 : 0));
    }
    const pos = pick.year === NEXT ? PROJ.get(pick.originalOwner) : null;
    if (!pos) return Array(12).fill(1 / 12);
    const d = Array(12).fill(0);
    pos.forEach((pp, k) => {
      if (!pp) return;
      if (k >= 11) { d[11] += pp; return; } // Champion
      LOTTERY_P[k].forEach((q, sl) => { d[sl] += pp * q; });
    });
    const tot = d.reduce((x, y) => x + y, 0) || 1;
    return d.map(x => x / tot);
  }
  const expSlot = pick => slotDist(pick).reduce((t, q, i) => t + q * (i + 1), 0);
  function slotRange(slot) {
    if (slot == null) return 'mid';
    if (slot <= 4) return 'early';
    if (slot <= 8) return 'mid';
    return 'late';
  }
  // Grundwert eines Picks: Erwartungswert über die Slot-Verteilung × 0,9 je Jahr bis zum Draft
  function slotAwarePickValue(pick) {
    if (!pick || !pick.year || !pick.round || pick.round > 4) return 0;
    const ev = slotDist(pick).reduce((t, q, i) => t + q * slotValue(pick.round, i + 1), 0);
    return Math.round(ev * Math.pow(YEAR_DISC, Math.max(0, pick.year - NEXT)));
  }
  function pickTradeValue(pick, mode) {
    let val = pick.baseValue;
    if (mode === 'winnow') {
      const m = { 0: 1.00, 1: 0.85, 2: 0.72, 3: 0.60 }; // Contender: Zukunft zusätzlich abwerten
      val = Math.round(val * (m[pick.year - NEXT] ?? 0.55));
    }
    return val;
  }
  function dynastyValue(rank, dob, mode) {
    const v = TRADE_VALUE_TABLE[rank];
    if (v === undefined) return 0;
    return Math.round(v * ageMultiplier(dob, mode));
  }
  const itemValue = (p, mode) => (p.isPick ? pickTradeValue(p, mode) : dynastyValue(p.rank, p.dob, mode));

  // ---------- Konsolidierung: KTC-Raw-Adjustment (rekonstruiert, Backtest 23.11.2026) ----------
  // Jedes Asset bekommt einen „Rohwert“ RA = v·(0,10 + 0,076·(v/Gmax)^8 + c·(v/tmax)^1,3),
  // tmax = bestes Asset im ganzen Trade. Fair = gleiche RA-Summen. Die Seite mit der höheren
  // RA-Summe bekommt einen Wertausgleich x (der Wert, dessen RA die Differenz schließt) —
  // drei Mittelklasse-Spieler kaufen so keinen Star, ein Star ist mehr als die Summe seiner Teile.
  // KTC_C: KTC selbst ≈ 0,24; an den echten TTHQ-Mehrfach-Trades kalibriert 0,18 (Fehler ±11 % statt ±26 % beim Paket-Abschlag)
  const KTC_C = 0.18;
  const GMAX = TRADE_VALUE_TABLE[1];
  const ra = (v, t) => (v <= 0 || t <= 0 ? 0 : v * (0.10 + 0.076 * Math.pow(v / GMAX, 8) + KTC_C * Math.pow(Math.min(v / t, 1.5), 1.3)));
  function solveX(d, t) {
    if (d <= 0) return 0;
    let lo = 0, hi = Math.max(t, 1);
    while (ra(hi, t) < d && hi < 1e6) hi *= 2;
    for (let i = 0; i < 28; i++) { const mid = (lo + hi) / 2; if (ra(mid, t) < d) lo = mid; else hi = mid; }
    return (lo + hi) / 2;
  }
  // vals: Zahlenlisten je Seite → Summen, Wertausgleich, effektive Werte für das Urteil
  function compareVals(valsA, valsB) {
    const sumA = valsA.reduce((x, y) => x + y, 0), sumB = valsB.reduce((x, y) => x + y, 0);
    const t = Math.max(0, ...valsA, ...valsB);
    const raA = valsA.reduce((x, v) => x + ra(v, t), 0), raB = valsB.reduce((x, v) => x + ra(v, t), 0);
    let adjA = 0, adjB = 0, effA = sumA, effB = sumB;
    if (raA >= raB) { const x = solveX(raA - raB, t); effA = sumB + x; effB = sumB; adjA = Math.max(0, effA - sumA); }
    else { const x = solveX(raB - raA, t); effB = sumA + x; effA = sumA; adjB = Math.max(0, effB - sumB); }
    return { sumA, sumB, effA: Math.round(effA), effB: Math.round(effB), adjA: Math.round(adjA), adjB: Math.round(adjB) };
  }
  function compareSides(itemsA, itemsB, mode) {
    return compareVals(itemsA.map(p => itemValue(p, mode)), itemsB.map(p => itemValue(p, mode)));
  }
  // Summe der Einzelwerte (ohne Ausgleich) — für Anzeigen/Export
  function tradeSideValue(items, mode) {
    return Math.round(items.reduce((t, p) => t + itemValue(p, mode), 0));
  }
  function verdictOf(valA, valB) {
    const total = valA + valB;
    const pctA = total > 0 ? (valA / total * 100) : 50;
    const pctB = 100 - pctA;
    const diff = Math.abs(pctA - 50);
    const aWins = valA > valB;
    const w = aWins ? 'A' : 'B';
    if (diff < 5) return { cls: 'fair', pctA, pctB, aWins, label: 'Fairer Trade', share: '✅ Fair Trade', sub: 'Beide Seiten bekommen ungefähr gleich viel Dynasty-Wert.' };
    if (diff < 12) return { cls: 'slight', pctA, pctB, aWins, label: `Leichter Vorteil: Seite ${w}`, share: `🟡 Leichter Edge: Side ${w}`, sub: `Das Paket von Seite ${w} ist etwas mehr wert, aber es ist recht knapp.` };
    return { cls: 'lopsided', pctA, pctB, aWins, label: `Seite ${w} gewinnt deutlich`, share: `🔥 Side ${w} gewinnt deutlich`, sub: `Das Paket von Seite ${w} hat deutlich mehr Dynasty-Wert.` };
  }


  // Projektion der Wahl-Position für den nächsten Draft aus der laufenden Saison
  // (Monte Carlo über die Rest-Wochen; Stärke = Kategorie-Quote, mit 36 Kategorien à 50 % eingemittelt;
  // Champion aus den Top 4 ∝ Stärke³). Ergebnis: teamId → [P(Pos 0 = Letzter) … P(Pos 10), P(Champion)].
  function projectPositions(data) {
    const S = (data.SEASON_MATCHUPS || []).find(x => x.current);
    const out = new Map();
    if (!S || Number(S.espnSeason) !== NEXT) return out;
    const tot = {};
    Object.keys(S.teams || {}).forEach(k => { const id = S.teams[k].teamId; if (id != null) tot[k] = { id, cw: 0, cl: 0, mw: 0, wk: 0 }; });
    let played = 0;
    Object.keys(S.weeks || {}).forEach(w => {
      let any = false;
      (S.weeks[w] || []).forEach(x => {
        if (x.playoff || !x.res || !tot[x.team]) return; any = true;
        const t = tot[x.team]; t.cw += x.w; t.cl += x.l; t.wk++; if (x.res === 'W') t.mw++; else if (x.res === 'T') t.mw += 0.5;
      });
      if (any) played++;
    });
    const T = Object.values(tot); const n = T.length;
    if (n < 4 || !played) return out;
    const rem = Math.max(0, (S.regularSeasonWeeks || 17) - played);
    const pr = T.map(t => (t.cw + 18) / (t.cw + t.cl + 36));
    let seed = 20271; const rnd = () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let z = Math.imul(seed ^ seed >>> 15, 1 | seed); z = z + Math.imul(z ^ z >>> 7, 61 | z) ^ z; return ((z ^ z >>> 14) >>> 0) / 4294967296; };
    const gauss = () => Math.sqrt(-2 * Math.log(rnd() + 1e-12)) * Math.cos(2 * Math.PI * rnd());
    const cnt = T.map(() => Array(12).fill(0)); const SIMS = 1500;
    for (let sim = 0; sim < SIMS; sim++) {
      const ps = pr.map(x => Math.min(0.8, Math.max(0.2, x + 0.04 * gauss())));
      const w = T.map(t => t.mw);
      for (let k = 0; k < rem; k++) {
        const idx = T.map((_, i) => i).sort(() => rnd() - 0.5);
        for (let j = 0; j + 1 < n; j += 2) {
          const a = idx[j], b = idx[j + 1], pa = ps[a] / (ps[a] + ps[b]);
          let ca = 0; for (let c = 0; c < 9; c++) if (rnd() < pa) ca++;
          if (ca >= 5) w[a]++; else w[b]++;
        }
      }
      const order = T.map((_, i) => i).sort((a, b) => (w[b] - w[a]) || (rnd() - 0.5)); // bester zuerst
      const top = order.slice(0, 4), sw = top.map(i => Math.pow(ps[i], 3)), sum = sw.reduce((x, y) => x + y, 0);
      let r = rnd() * sum, champ = top[3];
      for (let q = 0; q < 4; q++) { r -= sw[q]; if (r <= 0) { champ = top[q]; break; } }
      const rest = order.filter(i => i !== champ).reverse(); // schlechtester zuerst
      rest.forEach((i, k) => { cnt[i][Math.min(k, 10)]++; });
      cnt[champ][11]++;
    }
    T.forEach((t, i) => out.set(t.id, cnt[i].map(c => c / SIMS)));
    return out;
  }

  // ============================================================
  //  Datenmodell (pro geladenem Datensatz gecacht)
  // ============================================================
  const models = new WeakMap();
  function model(data, live = true) {
    const cache = models.get(data) || {};
    const ck = live ? 'live' : 'base';
    if (cache[ck]) return cache[ck];
    const nba = N().init(data);
    const allTeams = nba.leagueTeams(data, true);
    const teamById = new Map(allTeams.map(t => [t.id, t]));
    const team = id => teamById.get(id) || { id, name: 'Team ' + id, color: null };
    const owner = nba.ownerIndex(data);
    const LV = live ? new Map((data.DYNASTY_LIVE || []).filter(x => x.liveRank).map(x => [nba.key(x.name), x])) : null;
    const players = (data.DYNASTY_PLAYERS || []).map(p => {
      const o = owner(p[1]), lv = LV && LV.get(nba.key(p[1]));
      return { isPick: false, rank: lv ? lv.liveRank : p[0], baseRank: p[0], live: lv || null, name: p[1], nba: p[2], pos: p[3], dob: p[4] || null, owner: o, ownerId: o ? o.id : null };
    });
    if (LV && LV.size) players.sort((a, b) => a.rank - b.rank || a.baseRank - b.baseRank);
    const byName = new Map(players.map(p => [p.name, p]));
    NEXT = nba.nextDraftYear(data) || NEXT;
    PROJ = projectPositions(data);
    BOARD = data.PROSPECT_BOARD_NBA || null;
    const picks = nba.openPicks(data).map(p => {
      const orig = team(p.originalOwner), curr = team(p.currentOwner);
      return {
        isPick: true, pickKey: `${p.year}_R${p.round}_T${p.originalOwner}`, year: p.year, round: p.round, slot: p.slot || null,
        originalOwner: p.originalOwner, currentOwner: p.currentOwner, traded: p.originalOwner !== p.currentOwner,
        note: p.note || null, orig, curr, name: `${p.year} R${p.round} · ${orig.name}`, pickRange: slotRange(p.slot), expSlot: p.slot ? null : expSlot(p),
        projected: !p.slot && p.year === NEXT && PROJ.has(p.originalOwner),
        baseValue: slotAwarePickValue(p), owner: curr, ownerId: p.currentOwner,
      };
    }).sort((a, b) => a.year - b.year || a.round - b.round || a.originalOwner - b.originalOwner);
    const pickByKey = new Map(picks.map(p => [p.pickKey, p]));
    const hash = new Map((data.HASHTAG_RANKINGS || []).map(p => [nba.key(p[1]), p[0]]));
    const matt = new Map(Object.entries(data.MATT_RANKS || {}).map(([n, r]) => [nba.key(n), r]));
    const nbaTeams = [...new Set(players.map(p => p.nba))].filter(a => a && a !== 'FA').sort();
    const m = {
      nba, teams: nba.leagueTeams(data), allTeams, team, players, byName, picks, pickByKey, nbaTeams,
      hashRank: n => hash.get(nba.key(n)) ?? null,
      mattRank: n => matt.get(nba.key(n)) ?? null,
    };
    cache[ck] = m; models.set(data, cache);
    return m;
  }
  // Auswahl als Referenz speichern ({t:'p', n:name} | {t:'k', k:pickKey}) → Objekt
  const ref = p => (p.isPick ? { t: 'k', k: p.pickKey } : { t: 'p', n: p.name });
  const resolve = (m, r) => (r && r.t === 'k' ? m.pickByKey.get(r.k) : r && r.t === 'p' ? m.byName.get(r.n) : null) || null;
  const sameRef = (a, b) => a.t === b.t && (a.t === 'k' ? a.k === b.k : a.n === b.n);

  // ---------- kleine Render-Helfer ----------
  const esc = s => MFHFB.ui.esc(s);
  // MFHFB-Rang + (falls Live-Form aktiv und signifikant) Live-Rang, dazu Matt/Hashtag
  function rankBadges(m, p) {
    const lv = p.live ? `<span class="nba-rk ${N().rankTier(p.rank)} tr-nba-lv ${p.live.delta > 0 ? 'up' : 'down'}" title="Live-Form: Saison-Rang ${p.live.seasonRank} statt erwartet ${p.live.expRank} (${p.live.games} Spiele)">Live #${p.rank} ${p.live.delta > 0 ? '▲' : '▼'}${Math.abs(p.live.delta)}</span>` : '';
    return `${badge('MFHFB', p.baseRank ?? p.rank)}${lv}${badge('Matt', m.mattRank(p.name))}${badge('#️⃣', m.hashRank(p.name))}`;
  }
  function badge(label, r) {
    const nba = N();
    return `<span class="nba-rk ${r == null ? 'none' : nba.rankTier(r)}">${label} ${r == null ? '—' : '#' + r}</span>`;
  }
  function teamTag(t) {
    if (!t) return '<span class="nba-tag fa">frei</span>';
    return `<span class="tr-nba-team"><span class="nba-tdot" style="${N().tcStyle(t)}"></span>${esc(t.name)}</span>`;
  }
  function modeSeg(mode, attr) {
    return `<div class="seg" role="group" aria-label="Bewertung">${MODES.map(x => `<button type="button" class="seg-btn${x.key === mode ? ' active' : ''}" ${attr}="${x.key}" aria-pressed="${x.key === mode}">${x.label}</button>`).join('')}</div>`;
  }
  const modeDesc = mode => MODES.find(x => x.key === mode).desc;
  const check = on => `<span class="tr-nba-check${on ? ' on' : ''}" aria-hidden="true">${on ? '✓' : ''}</span>`;

  async function copyText(txt, btn) {
    let ok = false;
    try { await navigator.clipboard.writeText(txt); ok = true; } catch (e) {
      try {
        const ta = document.createElement('textarea');
        ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select(); ok = document.execCommand('copy'); ta.remove();
      } catch (e2) { ok = false; }
    }
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = ok ? '✓ Kopiert!' : '⚠️ Kopieren fehlgeschlagen';
      setTimeout(() => { btn.textContent = orig; }, 1500);
    }
  }

  // ============================================================
  //  1) TRADE ANALYZER
  // ============================================================
  const emptySide = () => ({ tt: '', nba: '', q: '', sel: [] });
  const TKEY = 'nbatrade';
  function tState(ctx) {
    const s = ctx.store.getJSON(TKEY, {}) || {};
    return { mode: modeOk(s.mode), A: { ...emptySide(), ...(s.A || {}) }, B: { ...emptySide(), ...(s.B || {}) } };
  }
  const listScroll = { A: 0, B: 0 };

  function sideList(ctx, m, st, side) {
    const s = st[side], mode = st.mode;
    const q = (s.q || '').toLowerCase().trim();
    const tid = s.tt && s.tt !== 'unowned' ? Number(s.tt) : null;
    const selected = s.sel;
    const isSel = p => selected.some(r => sameRef(r, ref(p)));
    let pickHtml = '';
    if (tid) {
      const matching = m.picks.filter(p => p.currentOwner === tid).filter(p => !q
        || String(p.year).includes(q) || String(p.round).includes(q) || p.orig.name.toLowerCase().includes(q));
      if (matching.length) {
        pickHtml = `<div class="tr-nba-sec">📋 Draft Picks · ${matching.length}</div>` + matching.map(p => {
          const on = isSel(p);
          return `<button type="button" class="tr-nba-item pk${on ? ' on' : ''}" data-toggle="${side}" data-kind="k" data-id="${esc(p.pickKey)}" aria-pressed="${on}">
            ${check(on)}
            <span class="tr-nba-main"><span class="tr-nba-name"><span class="tr-nba-year">${p.year}</span> Runde ${p.round}${p.slot ? ` <span class="nba-tag rk">Pick #${p.slot}</span>` : ''}${p.note ? ` <span class="tr-nba-note">${esc(p.note)}</span>` : ''}</span>
              <span class="tr-nba-detail">${p.traded ? `<span class="tr-nba-pst traded">→ von ${esc(p.orig.name)}</span>` : '<span class="tr-nba-pst">Eigener Pick</span>'}</span></span>
            <span class="tr-nba-val pk">~${fmt(p.baseValue)}</span>
          </button>`;
        }).join('');
      }
    }
    const filtered = m.players.filter(p => {
      if (s.nba && p.nba !== s.nba) return false;
      if (s.tt === 'unowned' && p.ownerId !== null) return false;
      if (tid && p.ownerId !== tid) return false;
      if (q && !(p.name.toLowerCase().includes(q) || String(p.nba).toLowerCase().includes(q) || (p.owner && p.owner.name.toLowerCase().includes(q)))) return false;
      return true;
    });
    let playerHtml = pickHtml && filtered.length ? `<div class="tr-nba-sec">👤 Spieler · ${filtered.length}</div>` : '';
    playerHtml += filtered.map(p => {
      const on = isSel(p);
      return `<button type="button" class="tr-nba-item${on ? ' on' : ''}" data-toggle="${side}" data-kind="p" data-id="${esc(p.name)}" aria-pressed="${on}">
        ${check(on)}
        <span class="tr-nba-main"><span class="tr-nba-name">${esc(p.name)}</span>
          <span class="tr-nba-detail">${esc(p.nba)} · ${p.owner ? teamTag(p.owner) : 'frei'}</span>
          <span class="tr-nba-badges">${rankBadges(m, p)}</span></span>
        <span class="tr-nba-val">${fmt(dynastyValue(p.rank, p.dob, mode))}</span>
      </button>`;
    }).join('');
    const html = pickHtml + playerHtml;
    return html || `<div class="tr-nba-none">${tid ? 'Dieses Team hat weder passende Spieler noch Picks.' : 'Keine Spieler gefunden.'}</div>`;
  }

  function sideCard(ctx, m, st, side) {
    const s = st[side], e = esc;
    const items = s.sel.map(r => resolve(m, r)).filter(Boolean);
    const pills = items.length ? items.map(p => p.isPick
      ? `<button type="button" class="tr-nba-pill pk" data-remove="${side}" data-kind="k" data-id="${e(p.pickKey)}" title="Entfernen">📋 ${e(p.name)}${p.slot ? ` #${p.slot}` : ''} <small>(${fmt(pickTradeValue(p, st.mode))})</small> <b aria-hidden="true">×</b></button>`
      : `<button type="button" class="tr-nba-pill" data-remove="${side}" data-kind="p" data-id="${e(p.name)}" title="Entfernen">${e(p.name)} <b aria-hidden="true">×</b></button>`).join('')
      : '<span class="muted">Noch nichts ausgewählt</span>';
    return `<div class="card tr-nba-side">
      <div class="card-head"><h2>Seite ${side}</h2><span class="muted tr-nba-cnt">${items.length} ausgewählt</span></div>
      <div class="tr-body">
        <div class="tr-nba-filters">
          <select class="tr-select${s.tt ? ' tr-nba-has' : ''}" data-tt="${side}" aria-label="Fantasy-Team Seite ${side}">
            <option value="">🌮 Alle Fantasy-Teams</option>
            <option value="unowned"${s.tt === 'unowned' ? ' selected' : ''}>👻 frei (Unowned)</option>
            ${m.teams.map(t => `<option value="${t.id}"${String(t.id) === String(s.tt) ? ' selected' : ''}>${e(t.name)}</option>`).join('')}
          </select>
          <select class="tr-select${s.nba ? ' tr-nba-has' : ''}" data-nba="${side}" aria-label="NBA-Team Seite ${side}">
            <option value="">🏀 Alle NBA-Teams</option>
            ${m.nbaTeams.map(a => `<option value="${e(a)}"${a === s.nba ? ' selected' : ''}>${e(a)} – ${e(N().teamName(a))}</option>`).join('')}
          </select>
        </div>
        <input type="search" class="search tr-nba-q" data-q="${side}" value="${e(s.q)}" placeholder="Spieler, NBA-Team, Fantasy-Team …" aria-label="Suchen Seite ${side}" autocomplete="off">
        <div class="tr-nba-list" data-list="${side}">${sideList(ctx, m, st, side)}</div>
        <div class="tr-nba-sel"><div class="tr-pool-label">Ausgewählt</div><div class="tr-nba-pills">${pills}</div></div>
      </div>
    </div>`;
  }

  function breakdownSide(m, items, label, sideVal, adj, mode) {
    const sorted = [...items].sort((a, b) => itemValue(b, mode) - itemValue(a, mode));
    const rows = sorted.map((p, i) => {
      const eff = itemValue(p, mode);
      let badges, detail;
      if (p.isPick) {
        badges = `<span class="tr-nba-note">📋 ${p.slot ? 'Slot ' + p.slot : (p.projected ? 'proj. Ø Slot ' : 'Ø Slot ') + String(p.expSlot.toFixed(1)).replace('.', ',')} · ${p.year}</span> ${teamTag(p.curr)}${p.traded ? ' <small class="muted">(via Trade)</small>' : ''}`;
        detail = `📋 Draft Pick · ${esc(p.curr.name)} ${prospectsLine(p)}`;
      } else {
        const mult = ageMultiplier(p.dob, mode);
        const age = p.dob ? playerAgeToday(p.dob) : null;
        const cls = mult >= 1.20 ? 'a-hi' : mult >= 1.05 ? 'a-up' : mult <= 0.50 ? 'a-lo' : mult <= 0.80 ? 'a-dn' : '';
        const ageLbl = mode === 'winnow' && age ? `<span class="tr-nba-age ${cls}">${age} J. · ${mult >= 1 ? '+' : ''}${Math.round((mult - 1) * 100)} %</span>` : '';
        badges = `${rankBadges(m, p)}${ageLbl}`;
        detail = `${esc(p.nba)} · ${p.owner ? esc(p.owner.name) : 'frei'}`;
      }
      return `<div class="tr-nba-bdrow">
        <div class="tr-nba-main"><div class="tr-nba-name">${esc(p.name)}</div><div class="tr-nba-detail">${detail}</div><div class="tr-nba-badges">${badges}</div></div>
        <div class="tr-nba-eff"><b>${fmt(eff)}</b></div>
      </div>`;
    }).join('');
    const adjRow = adj > 0 ? `<div class="tr-nba-bdrow"><div class="tr-nba-main"><div class="tr-nba-name">⭐ Star-Ausgleich</div><div class="tr-nba-detail">bestes Asset im Trade — Konsolidierungs-Bonus (KTC-Methode)</div></div><div class="tr-nba-eff"><b>+${fmt(adj)}</b></div></div>` : '';
    return `<div class="tr-nba-bdside"><div class="tr-nba-bdhead"><span>${label}</span><b>${fmt(sideVal + adj)}</b></div>${rows}${adjRow}</div>`;
  }

  // buildTradeShareText (unverändert bis auf den Liga-Namen im Kopf)
  function buildTradeShareText(league, selA, selB, valA, valB, verdict) {
    function fmtSide(items) {
      return items.map(p => {
        if (p.isPick) {
          const slotLabel = p.slot ? ` Pick #${p.slot}` : '';
          const via = p.orig ? ` (via ${p.orig.name})` : '';
          return `  • ${p.year} R${p.round}${slotLabel}${via}`;
        }
        const owner = p.owner ? ` (${p.owner.name})` : '';
        return `  • ${p.name}${owner}`;
      }).join('\n');
    }
    return [
      `${league.emoji} ${league.name} · Trade Analyzer`,
      verdict.replace(/[^\w\s\-:äöüÄÖÜß]/g, '').trim(),
      '',
      `Side A (${valA.toLocaleString()}):`,
      fmtSide(selA),
      '',
      `Side B (${valB.toLocaleString()}):`,
      fmtSide(selB),
    ].join('\n');
  }

  function resultBox(ctx, m, st) {
    const selA = st.A.sel.map(r => resolve(m, r)).filter(Boolean);
    const selB = st.B.sel.map(r => resolve(m, r)).filter(Boolean);
    if (!selA.length || !selB.length) {
      return `<div class="card tr-nba-result is-empty">${(selA.length || selB.length) ? 'Jetzt noch die andere Seite befüllen …' : 'Wähle auf beiden Seiten mindestens einen Spieler oder Pick aus, um den Trade zu bewerten.'}</div>`;
    }
    const mode = st.mode;
    const c = compareSides(selA, selB, mode);
    const valA = c.effA, valB = c.effB;
    const v = verdictOf(valA, valB);
    const ageNote = {
      dynasty: 'Kein Alters-Faktor — das Alter steckt schon im Dynasty-Ranking.',
      winnow: 'Spieler zwischen 26 und 31 bekommen einen Bonus, Teenager und Spieler ab 34 einen deutlichen Abschlag; Zukunfts-Picks zusätzlich abgewertet.',
    }[mode];
    return `<div class="card tr-nba-result ${v.cls}">
      <div class="tr-nba-verdict">${v.label}</div>
      <div class="tr-nba-subtext">${v.sub}</div>
      <div class="tr-nba-bar">
        <div class="tr-nba-barlbl"><span>Seite A <b>${fmt(valA)}</b></span><span><b>${fmt(valB)}</b> Seite B</span></div>
        <div class="tr-nba-track"><div class="tr-nba-fill${v.aWins ? ' win' : ''}" style="width:${v.pctA.toFixed(1)}%"></div></div>
        <div class="tr-nba-barlbl small"><span class="${v.aWins ? 'tr-nba-w' : ''}">${v.pctA.toFixed(1).replace('.', ',')} %${v.aWins ? ' ← Seite A vorne' : ''}</span><span class="${!v.aWins ? 'tr-nba-w' : ''}">${!v.aWins ? 'Seite B vorne → ' : ''}${v.pctB.toFixed(1).replace('.', ',')} %</span></div>
      </div>
      <div class="tr-nba-bd">
        ${breakdownSide(m, selA, 'Seite A', c.sumA, c.adjA, mode)}
        <div class="tr-nba-vs">vs</div>
        ${breakdownSide(m, selB, 'Seite B', c.sumB, c.adjB, mode)}
      </div>
      <div class="tr-nba-explain"><b>${MODES.find(x => x.key === mode).label.replace(/^\S+\s/, '')}: so wird gerechnet.</b> Jeder Spieler bekommt den Wert seines MFHFB-Dynasty-Rangs (Kurve aus Matt-Sheet × historischem Backtest, Ränge 1–${Object.keys(TRADE_VALUE_TABLE).length}, danach 0)${selA.concat(selB).some(p => p.live) ? ' — bei „Live #“ zählt der Live-Rang (Saison-Form gegen Erwartung)' : ''}. ${ageNote} Picks: Wert je Slot aus dem Backtest (was NBA-Picks dieser Position historisch wert wurden), ×0,9 je Jahr bis zum Draft. Ohne festen Slot zählt der Erwartungswert über die TTHQ-Lottery (Letzter wählt zuerst ein NBA-Team); für den nächsten Draft (${NEXT}) aus der aktuellen Tabelle hochgerechnet. Konsolidierung nach KTC: Die Seite mit dem besten Asset bekommt einen Star-Ausgleich — mehrere Mittelklasse-Assets ergeben keinen Star. Hintergrund: Projekt-Doc „trade-values-research“.</div>
      <div class="tr-nba-actions"><button type="button" class="seg-btn" data-copy>📋 Als Text kopieren</button><button type="button" class="seg-btn" data-reset>↺ Neuer Trade</button></div>
    </div>`;
  }

  function analyzerPage(ctx) {
    const { data, ui } = ctx;
    if (!data.DYNASTY_PLAYERS) return ui.empty('Keine Dynasty-Rangliste', 'DYNASTY_PLAYERS fehlt für diese Liga.', '⚖️');
    const m = model(data, liveOn(ctx));
    const st = tState(ctx);
    return `<div class="tr-nba" data-trnba>
      <div class="page-head"><h1 class="page-title display">⚖️ Trade Analyzer</h1>
        <div class="page-sub"><span class="explain">Schwierig, einen Dynasty-Calc zu bauen, der alles berücksichtigt. Nehmt dies hier als Anlaufpunkt.</span> Siehe auch <a href="${ctx.href('tradefinder')}">Trade Finder</a> und <a href="${ctx.href('tradehistory')}">Trade-Historie</a>.</div></div>
      <div class="controls tr-nba-modebar">${modeSeg(st.mode, 'data-mode')}${liveToggle(ctx)}<div class="tr-nba-desc">${modeDesc(st.mode)}</div></div>
      <div class="tr-cols">${sideCard(ctx, m, st, 'A')}${sideCard(ctx, m, st, 'B')}</div>
      ${resultBox(ctx, m, st)}
    </div>`;
  }

  function analyzerMount(root, ctx) {
    const wrap = root.querySelector('[data-trnba]');
    if (!wrap) return;
    const m = model(ctx.data, liveOn(ctx));
    const save = (st, full = true) => { ctx.store.setJSON(TKEY, st); if (full) ctx.refresh(); };
    // Route-Parameter: #/<liga>/trade/<teamId> → Seite A vorauswählen (einmal pro Aufruf)
    if (ctx.params[0] && !ctx._trParam) {
      ctx._trParam = true;
      const t = m.teams.find(x => String(x.id) === String(ctx.params[0]));
      if (t) { const st = tState(ctx); if (st.A.tt !== String(t.id)) { st.A = { ...emptySide(), tt: String(t.id) }; listScroll.A = 0; save(st); return; } }
    }
    ['A', 'B'].forEach(side => {
      const list = wrap.querySelector(`[data-list="${side}"]`);
      if (!list) return;
      list.scrollTop = listScroll[side] || 0;
      list.addEventListener('scroll', () => { listScroll[side] = list.scrollTop; }, { passive: true });
    });
    wrap.addEventListener('click', ev => {
      const b = ev.target.closest('button');
      if (!b || !wrap.contains(b)) return;
      const st = tState(ctx);
      if (b.dataset.mode) { st.mode = modeOk(b.dataset.mode); save(st); return; }
      if (b.dataset.toggle || b.dataset.remove) {
        const side = b.dataset.toggle || b.dataset.remove;
        const r = b.dataset.kind === 'k' ? { t: 'k', k: b.dataset.id } : { t: 'p', n: b.dataset.id };
        const i = st[side].sel.findIndex(x => sameRef(x, r));
        if (i > -1) st[side].sel.splice(i, 1); else if (b.dataset.toggle && resolve(m, r)) st[side].sel.push(r);
        save(st); return;
      }
      if (b.hasAttribute('data-reset')) { listScroll.A = listScroll.B = 0; save({ mode: st.mode, A: emptySide(), B: emptySide() }); return; }
      if (b.hasAttribute('data-copy')) {
        const selA = st.A.sel.map(r => resolve(m, r)).filter(Boolean), selB = st.B.sel.map(r => resolve(m, r)).filter(Boolean);
        if (!selA.length || !selB.length) return;
        const c = compareSides(selA, selB, st.mode), valA = c.effA, valB = c.effB;
        copyText(buildTradeShareText(ctx.league, selA, selB, valA, valB, verdictOf(valA, valB).share), b);
      }
    });
    wrap.addEventListener('change', ev => {
      const el = ev.target;
      if (el.hasAttribute('data-live')) { ctx.store.setJSON('dynlive', el.checked); ctx.refresh(); return; }
      const side = el.dataset.tt || el.dataset.nba;
      if (!side) return;
      const st = tState(ctx);
      if (el.dataset.tt) st[side].tt = el.value; else st[side].nba = el.value;
      listScroll[side] = 0;
      save(st);
    });
    wrap.addEventListener('input', ev => {
      const el = ev.target, side = el.dataset.q;
      if (!side) return;
      const st = tState(ctx);
      st[side].q = el.value;
      save(st, false);
      const list = wrap.querySelector(`[data-list="${side}"]`);
      list.innerHTML = sideList(ctx, m, st, side);
      list.scrollTop = 0;
    });
  }

  // ============================================================
  //  2) TRADE FINDER (Logik 1:1 aus trade-finder.js)
  // ============================================================
  const FKEY = 'nbatradefinder';
  const PICK_MODES = [
    { key: 'with_picks', label: '⚡ Mit Picks', title: 'Gegenwert aus Spielern und/oder R1/R2-Picks' },
    { key: 'none', label: '🚫 Keine Picks', title: 'Gegenwert nur aus Spielern' },
    { key: 'for_picks', label: '🎟️ Nur Picks zurück', title: 'Du gibst Spieler ab und bekommst nur Picks' },
    { key: 'give_picks', label: '📤 Picks abgeben', title: 'Du gibst Picks ab und bekommst Spieler' },
  ];
  function fState(ctx) {
    const s = ctx.store.getJSON(FKEY, {}) || {};
    const clamp = (v, d, max) => Math.max(1, Math.min(max, parseInt(v, 10) || d));
    return {
      mode: modeOk(s.mode),
      pickMode: PICK_MODES.some(x => x.key === s.pickMode) ? s.pickMode : 'with_picks',
      give: Array.isArray(s.give) ? s.give : [],
      target: s.target || null, giveTeam: s.giveTeam || null,
      sameTeam: s.sameTeam !== false,
      nGive: clamp(s.nGive, 2, 5), nGet: clamp(s.nGet, 1, 3),
      q: s.q || '', ran: !!s.ran,
    };
  }

  function buildTFPickPool(m, mode) {
    return m.picks
      .filter(p => p.year >= NEXT && p.round <= 2) // nur künftige R1/R2-Picks
      .map(p => {
        return { ...p, dynVal: pickTradeValue(p, mode) };
      })
      .filter(p => p.dynVal > 0)
      .sort((a, b) => a.year - b.year || a.round - b.round || a.originalOwner - b.originalOwner);
  }
  function buildTFPlayerPool(m, mode) {
    return m.players
      .filter(p => p.rank <= 300)
      .map(p => ({ ...p, dynVal: dynastyValue(p.rank, p.dob, mode) }))
      .filter(p => p.dynVal > 0);
  }
  const giveTotalOf = give => give.reduce((t, p) => t + p.dynVal, 0);

  function giveItems(m, st) {
    const players = buildTFPlayerPool(m, st.mode), picks = buildTFPickPool(m, st.mode);
    const pn = new Map(players.map(p => [p.name, p])), pk = new Map(picks.map(p => [p.pickKey, p]));
    return st.give.map(r => (r.t === 'k' ? pk.get(r.k) : pn.get(r.n))).filter(Boolean);
  }

  function runCore(m, st, give) {
    const giveNames = new Set(give.filter(p => !p.isPick).map(p => p.name));
    const giveKeys = new Set(give.filter(p => p.isPick).map(p => p.pickKey));
    const gVals = give.map(p => p.dynVal);
    const giveTotal = giveTotalOf(give);
    const gMax = Math.max(0, ...gVals);
    const TOL = 13; // % Abweichung (effektiv, inkl. Star-Ausgleich)
    const k = st.nGet, pickMode = st.pickMode;
    const target = st.target, giveTeam = st.giveTeam, sameTeam = st.sameTeam;

    const players = pickMode === 'for_picks' ? [] : buildTFPlayerPool(m, st.mode).filter(p => {
      if (giveNames.has(p.name)) return false;
      if (target) return p.ownerId === target;
      if (giveTeam && p.ownerId === giveTeam) return false;
      return true;
    });
    const picks = (pickMode === 'for_picks' || pickMode === 'with_picks') ? buildTFPickPool(m, st.mode).filter(p => {
      if (giveKeys.has(p.pickKey)) return false;
      if (target) return p.currentOwner === target;
      if (giveTeam && p.currentOwner === giveTeam) return false;
      return true;
    }) : [];
    const pool = [...players, ...picks].sort((a, b) => b.dynVal - a.dynVal);
    const keyOf = p => (p.isPick ? p.pickKey : p.name);

    const results = [];
    let steps = 0;
    // RA-Werte je tmax zwischenspeichern (Pool fix, tmax meist = bestes abgegebenes Asset)
    const raCache = new Map();
    const raAt = (j, tt) => {
      let arr = raCache.get(tt);
      if (!arr) { arr = new Float64Array(pool.length).fill(-1); raCache.set(tt, arr); }
      if (arr[j] < 0) arr[j] = ra(pool[j].dynVal, tt);
      return arr[j];
    };
    const rgCache = new Map();
    const rgAt = tt => { let v = rgCache.get(tt); if (v === undefined) { v = gVals.reduce((x, g) => x + ra(g, tt), 0); rgCache.set(tt, v); } return v; };
    // Suche nach Kombis mit genau k Assets; RA-Schranken zum Abschneiden, exakte Prüfung am Ende
    function rec(start, chosen, raSum, t, raG) {
      if (results.length >= 400 || steps > 3e6) return;
      if (chosen.length === k) {
        // Schnellfilter: Abweichung ≥ x/(M+x) mit M = größere Summe → x > TOL·M/(1−TOL) ist sicher zu weit weg
        const cs = chosen.reduce((x, p) => x + p.dynVal, 0), q = TOL / 100;
        if (Math.abs(raSum - raG) > ra(q * Math.max(giveTotal, cs) / (1 - q), t)) return;
        const c = compareVals(gVals, chosen.map(p => p.dynVal));
        const diffPct = Math.round(Math.abs(c.effB - c.effA) / Math.max(c.effA, c.effB, 1) * 100);
        if (diffPct <= TOL) results.push({ players: chosen.slice(), total: c.effB, giveEff: c.effA, diffPct });
        return;
      }
      const left = k - chosen.length;
      const lvl0 = !chosen.length;
      const ttOf = v => (lvl0 ? Math.max(gMax, v) : t);
      const rgOf = tt => (lvl0 ? rgAt(tt) : raG);
      const tooBig = j => { const tt = ttOf(pool[j].dynVal); return raSum + raAt(j, tt) > rgOf(tt) * 1.25; };
      // erstes passendes Element per Binärsuche (Pool absteigend sortiert → „zu groß“ ist monoton)
      let lo = start, hi = pool.length;
      while (lo < hi) { const mid = (lo + hi) >> 1; if (tooBig(mid)) lo = mid + 1; else hi = mid; }
      for (let j = lo; j < pool.length; j++) {
        steps++;
        const p = pool[j];
        if (sameTeam && !p.isPick && chosen.some(q => !q.isPick && q.ownerId !== p.ownerId)) continue;
        const tt = ttOf(p.dynVal), rg = rgOf(tt), r = raAt(j, tt);
        if (raSum + r * left < rg * 0.85) break;        // Rest ist kleiner → reicht nicht mehr
        if (raSum + r > rg * 1.25) continue;
        chosen.push(p); rec(j + 1, chosen, raSum + r, tt, rg); chosen.pop();
        if (results.length >= 400) return;
      }
    }
    if (give.length) rec(0, [], 0, 0, 0);
    const seen = new Set();
    results.sort((a, b) => a.diffPct - b.diffPct || b.total - a.total);
    const anchor = new Map(); // Vielfalt: dasselbe Top-Asset höchstens 2× in der Liste
    const uniq = results.filter(r => {
      const key = r.players.map(keyOf).sort().join('|'); if (seen.has(key)) return false; seen.add(key);
      const a = keyOf(r.players[0]), c = anchor.get(a) || 0; if (k > 1 && c >= 2) return false; anchor.set(a, c + 1); return true;
    });
    return { top: uniq.slice(0, 10), giveTotal };
  }

  let lastFinder = null; // { give, top } für „Im Trade Analyzer öffnen“

  function giveList(m, st, give) {
    const e = esc;
    const q = st.q.toLowerCase().trim();
    const isMaxed = give.length >= st.nGive;
    if (st.pickMode === 'give_picks') {
      const pool = buildTFPickPool(m, st.mode).filter(p => (st.giveTeam ? p.currentOwner === st.giveTeam : true));
      const filtered = q ? pool.filter(p => String(p.year).includes(q) || p.name.toLowerCase().includes(q)
        || (p.curr && p.curr.name.toLowerCase().includes(q)) || (p.orig && p.orig.name.toLowerCase().includes(q))) : pool;
      if (!filtered.length) return '<div class="tr-nba-none">Keine Picks verfügbar.</div>';
      const selKeys = new Set(give.filter(p => p.isPick).map(p => p.pickKey));
      return filtered.map(p => {
        const on = selKeys.has(p.pickKey), dis = !on && isMaxed;
        return `<button type="button" class="tr-nba-item pk${on ? ' on' : ''}" data-give="k" data-id="${e(p.pickKey)}"${dis ? ' disabled' : ''} aria-pressed="${on}">
          ${check(on)}
          <span class="tr-nba-main"><span class="tr-nba-name"><span class="tr-nba-year">${p.year}</span> Runde ${p.round}</span>
            <span class="tr-nba-detail">${teamTag(p.curr)} ${p.traded ? `<span class="tr-nba-pst traded">→ von ${e(p.orig.name)}</span>` : '<span class="tr-nba-pst">Eigener Pick</span>'}</span></span>
          <span class="tr-nba-val pk">~${fmt(p.dynVal)}</span>
        </button>`;
      }).join('');
    }
    const pool = buildTFPlayerPool(m, st.mode).filter(p => !(st.giveTeam && p.ownerId !== st.giveTeam));
    const filtered = q ? pool.filter(p => p.name.toLowerCase().includes(q) || String(p.nba).toLowerCase().includes(q)) : pool;
    // Original: Liste erst nach Eingabe. Hier zusätzlich, sobald ein Team gewählt ist.
    if (!q && !st.giveTeam) return '<div class="tr-nba-none">Tippe zum Suchen … (oder oben ein Team wählen)</div>';
    if (!filtered.length) return '<div class="tr-nba-none">Keine Spieler gefunden.</div>';
    const selNames = new Set(give.filter(p => !p.isPick).map(p => p.name));
    return filtered.slice(0, 80).map(p => {
      const on = selNames.has(p.name), dis = !on && isMaxed;
      return `<button type="button" class="tr-nba-item${on ? ' on' : ''}" data-give="p" data-id="${e(p.name)}"${dis ? ' disabled' : ''} aria-pressed="${on}">
        ${check(on)}
        <span class="tr-nba-main"><span class="tr-nba-name">${e(p.name)}</span>
          <span class="tr-nba-detail">${e(p.nba)} · ${p.owner ? teamTag(p.owner) : 'frei'}</span></span>
        <span class="tr-nba-rk">${N().rankBadge(p.rank)}</span>
      </button>`;
    }).join('');
  }

  function resultCards(m, st, res) {
    const e = esc, nba = N();
    if (!res.top.length) {
      return `<div class="card tr-nba-result is-empty">😔 Keine fairen Trades gefunden<br><small class="muted">Versuche einen anderen Trade-Typ, andere Spieler oder deaktiviere den Team-Filter.</small></div>`;
    }
    return res.top.map((r, idx) => {
      const diff = r.diffPct;
      const cls = diff <= 4 ? 'fair' : diff <= 8 ? 'slight' : 'close';
      const lbl = diff <= 4 ? '✅ Fair' : diff <= 8 ? '🟡 Fast fair' : '🟠 Nah dran';
      const chips = r.players.map(p => (p.isPick
        ? `<span class="tr-nba-chip pk">📋 ${p.year} R${p.round}${p.owner ? ` <span class="nba-tdot" style="${nba.tcStyle(p.owner)}"></span><small>${e(p.owner.name.split(' ')[0])}</small>` : ''}</span>`
        : `<span class="tr-nba-chip">${nba.rankBadge(p.rank)} ${e(p.name)}${p.owner ? ` <span class="nba-tdot" style="${nba.tcStyle(p.owner)}"></span><small>${e(p.owner.name.split(' ')[0])}</small>` : ''}</span>`)).join('');
      const groups = new Map();
      r.players.forEach(p => {
        const k = p.owner ? p.owner.name : 'Free Agent / Unowned';
        if (!groups.has(k)) groups.set(k, { owner: p.owner, players: [] });
        groups.get(k).players.push(p);
      });
      const detail = [...groups.values()].map(g => `<div class="tr-nba-grp">
        <div class="tr-nba-grphead">${g.owner ? `Von: ${teamTag(g.owner)}` : 'Free Agent'}</div>
        ${g.players.map(p => {
          if (p.isPick) {
            return `<div class="tr-nba-grprow"><span class="tr-nba-note">📋 R${p.round}</span><div class="tr-nba-main"><div class="tr-nba-name">${p.year} · Runde ${p.round}</div><div class="tr-nba-detail">${p.traded ? `→ von ${e(p.orig.name)}` : 'Eigener Pick'}</div></div><span class="tr-nba-val pk">~${fmt(p.dynVal)}</span></div>`;
          }
          const mr = m.mattRank(p.name), hr = m.hashRank(p.name), age = p.dob ? nba.age(p.dob) : null;
          return `<div class="tr-nba-grprow">${nba.rankBadge(p.rank)}<div class="tr-nba-main"><div class="tr-nba-name">${e(p.name)}</div><div class="tr-nba-detail">${e(p.nba)} · ${e(p.pos)}${age !== null ? ` · ${age} J.` : ''}</div></div><span class="tr-nba-ranks">${mr ? `Matt #${mr}` : ''}${mr && hr ? '<br>' : ''}${hr ? `#️⃣ ${hr}` : ''}</span></div>`;
        }).join('')}
      </div>`).join('');
      return `<details class="card tr-nba-res ${cls}">
        <summary>
          <span class="tr-nba-ring">${diff} %</span>
          <span class="tr-nba-main"><span class="tr-nba-reslbl">${lbl} · Du bekommst</span><span class="tr-nba-chips">${chips}</span></span>
          <span class="tr-nba-restot"><b>${fmt(r.total)}</b><small>vs ${fmt(r.giveEff ?? res.giveTotal)}</small><span class="tr-nba-chev" aria-hidden="true">▾</span></span>
        </summary>
        <div class="tr-nba-resbody">${detail}
          <button type="button" class="seg-btn tr-nba-load" data-load="${idx}">⚖️ Im Trade Analyzer öffnen</button></div>
      </details>`;
    }).join('');
  }

  function finderPage(ctx) {
    const { data, ui } = ctx, e = esc;
    if (!data.DYNASTY_PLAYERS) return ui.empty('Keine Dynasty-Rangliste', 'DYNASTY_PLAYERS fehlt für diese Liga.', '🔍');
    const m = model(data, liveOn(ctx));
    const st = fState(ctx);
    const give = giveItems(m, st);
    const giveTotal = giveTotalOf(give);
    const word = st.pickMode === 'give_picks' ? 'Picks' : 'Spieler';
    const teamOpts = cur => m.teams.map(t => `<option value="${t.id}"${t.id === cur ? ' selected' : ''}>${e(t.name)}${t.owner ? ` (${e(t.owner)})` : ''}</option>`).join('');
    let results = '<div class="card tr-nba-result is-empty">Wähle aus, was du abgeben willst, und klicke „Faire Trades finden“.</div>', count = '';
    lastFinder = null;
    if (st.ran && give.length === st.nGive) {
      const res = runCore(m, st, give);
      lastFinder = { give, top: res.top, mode: st.mode };
      results = resultCards(m, st, res);
      count = res.top.length ? `${res.top.length} gefunden` : '';
    }
    return `<div class="tr-nba" data-trfind>
      <div class="page-head"><h1 class="page-title display">🔍 Trade Finder</h1>
        <div class="page-sub"><span class="explain">Gib an, was du abgeben willst, der Finder sucht faire Gegenleistungen (±13 %).</span> Feinschliff dann im <a href="${ctx.href('trade')}">Trade Analyzer</a>.</div></div>
      <div class="card tr-nba-cfg">
        <div class="tr-nba-cfgrow">
          <div class="tr-nba-field"><div class="tr-pool-label">Bewertung</div>${modeSeg(st.mode, 'data-fmode')}</div>
          <div class="tr-nba-field"><div class="tr-pool-label">Trade mit</div>
            <select class="tr-select" data-target aria-label="Trade mit"><option value="">🌮 Alle Teams</option>${teamOpts(st.target)}</select></div>
        </div>
        <div class="tr-nba-desc">${modeDesc(st.mode)}</div>
        ${liveToggle(ctx)}
        <div class="tr-nba-cfgrow">
          <div class="tr-nba-field"><div class="tr-pool-label">Trade-Format</div>
            <div class="tr-nba-fmt"><label>Ich gebe <input type="number" min="1" max="5" value="${st.nGive}" data-ngive inputmode="numeric"></label><span>für</span><label>Ich bekomme <input type="number" min="1" max="3" value="${st.nGet}" data-nget inputmode="numeric"></label></div></div>
          <div class="tr-nba-field"><div class="tr-pool-label">Picks</div>
            <div class="seg tr-nba-wrapseg" role="group" aria-label="Picks">${PICK_MODES.map(x => `<button type="button" class="seg-btn${x.key === st.pickMode ? ' active' : ''}" data-pmode="${x.key}" title="${x.title}" aria-pressed="${x.key === st.pickMode}">${x.label}</button>`).join('')}</div></div>
        </div>
        <label class="tr-nba-cb"><input type="checkbox" data-same${st.sameTeam ? ' checked' : ''}> Mehrere Spieler als Gegenwert nur vom selben Team</label>
      </div>
      <div class="tr-nba-fgrid">
        <div class="card tr-nba-give">
          <div class="card-head"><h2>Du gibst ab</h2><span class="tr-nba-count${give.length === st.nGive ? ' ok' : ''}">${give.length} / ${st.nGive}</span></div>
          <div class="tr-body">
            <select class="tr-select" data-giveteam aria-label="Team, das abgibt"><option value="">🌮 Alle Teams</option>${teamOpts(st.giveTeam)}</select>
            <input type="search" class="search tr-nba-q" data-fq value="${e(st.q)}" placeholder="${st.pickMode === 'give_picks' ? 'Pick suchen (Jahr, Team) …' : 'Spieler oder NBA-Team suchen …'}" aria-label="Suchen" autocomplete="off">
            <div class="tr-nba-list short" data-glist>${giveList(m, st, give)}</div>
            <div class="tr-nba-pills">${give.length ? give.map(p => `<button type="button" class="tr-nba-pill${p.isPick ? ' pk' : ''}" data-give="${p.isPick ? 'k' : 'p'}" data-id="${e(p.isPick ? p.pickKey : p.name)}" title="Entfernen">${p.isPick ? `📋 ${p.year} R${p.round}` : e(p.name)} <b aria-hidden="true">×</b></button>`).join('') : '<span class="muted">Noch nichts ausgewählt</span>'}</div>
            ${give.length ? `<div class="tr-total">Gesamtwert (${MODES.find(x => x.key === st.mode).label.replace(/^\S+\s/, '')}) <b>${fmt(giveTotal)}</b></div>` : ''}
            <button type="button" class="tr-nba-find" data-find${give.length !== st.nGive ? ' disabled' : ''}>${give.length !== st.nGive ? `Wähle genau ${st.nGive} ${word} aus` : '🔍 Faire Trades finden'}</button>
          </div>
        </div>
        <div class="tr-nba-results">
          <h2 class="group-title">Ergebnisse ${count ? `<span>${count}</span>` : ''}</h2>
          ${results}
        </div>
      </div>
    </div>`;
  }

  function finderMount(root, ctx) {
    const wrap = root.querySelector('[data-trfind]');
    if (!wrap) return;
    const m = model(ctx.data, liveOn(ctx));
    const save = (patch, full = true) => { ctx.store.setJSON(FKEY, { ...fState(ctx), ...patch }); if (full) ctx.refresh(); };
    wrap.addEventListener('click', ev => {
      const b = ev.target.closest('button');
      if (!b || !wrap.contains(b) || b.disabled) return;
      const st = fState(ctx);
      if (b.dataset.fmode) { save({ mode: modeOk(b.dataset.fmode) }); return; }
      if (b.dataset.pmode) { save({ pickMode: b.dataset.pmode, give: [], ran: false, q: '' }); return; }
      if (b.dataset.give) {
        const r = b.dataset.give === 'k' ? { t: 'k', k: b.dataset.id } : { t: 'p', n: b.dataset.id };
        const give = st.give.slice();
        const i = give.findIndex(x => sameRef(x, r));
        if (i > -1) give.splice(i, 1); else if (give.length < st.nGive) give.push(r); else return;
        save({ give, ran: false }); return;
      }
      if (b.hasAttribute('data-find')) { save({ ran: true }); return; }
      if (b.dataset.load && lastFinder) {
        const r = lastFinder.top[Number(b.dataset.load)];
        if (!r || !lastFinder.give.length) return;
        ctx.store.setJSON(TKEY, {
          mode: lastFinder.mode,
          A: { ...emptySide(), sel: lastFinder.give.map(ref) },
          B: { ...emptySide(), sel: r.players.map(ref) },
        });
        listScroll.A = listScroll.B = 0;
        location.hash = ctx.href('trade');
      }
    });
    wrap.addEventListener('change', ev => {
      const el = ev.target;
      if (el.hasAttribute('data-live')) { ctx.store.setJSON('dynlive', el.checked); ctx.refresh(); return; }
      if (el.hasAttribute('data-target')) save({ target: el.value ? Number(el.value) : null });
      else if (el.hasAttribute('data-giveteam')) save({ giveTeam: el.value ? Number(el.value) : null, give: [], ran: false });
      else if (el.hasAttribute('data-same')) save({ sameTeam: el.checked });
      else if (el.hasAttribute('data-ngive') || el.hasAttribute('data-nget')) {
        // setTFFormatFree: Format ändern leert die Auswahl
        save({ nGive: el.hasAttribute('data-ngive') ? el.value : fState(ctx).nGive, nGet: el.hasAttribute('data-nget') ? el.value : fState(ctx).nGet, give: [], ran: false });
      }
    });
    wrap.addEventListener('input', ev => {
      const el = ev.target;
      if (!el.hasAttribute('data-fq')) return;
      save({ q: el.value }, false);
      const st = fState(ctx);
      wrap.querySelector('[data-glist]').innerHTML = giveList(m, st, giveItems(m, st));
    });
  }

  // ============================================================
  //  3) TRADE-HISTORIE (read-only, TRADE_HISTORY_BASE)
  // ============================================================
  const HKEY = 'nbatradehistory';
  const VERDICT_DE = v => String(v || '')
    .replace(/^Fair Trade$/, 'Fairer Trade')
    .replace(/^Slight Edge: Side ([AB])$/, 'Leichter Vorteil: Seite $1')
    .replace(/^Side ([AB]) Wins Big$/, 'Seite $1 gewinnt deutlich');

  // Eine Trade-Karte (Historie + Popup in Teams/Pick-Übersicht)
  function historyCard(t, mode, nba, hlKey) {
    const e = esc;
    const savedLbl = { dynasty: '🏗️ Dynasty', raw: '📊 Raw', winnow: '🏆 Win-Now' };
    const pctFmt = x => String(x).replace('.', ',');
    const sideOwner = players => { const n = [...new Set(players.filter(p => !p.isPick).map(p => p.ownerName).filter(Boolean))]; return n.length === 1 ? n[0] : ''; };
    const renderSide = (players, label, val) => `<div class="tr-nba-hside">
      <div class="tr-nba-bdhead"><span>${label}${sideOwner(players) ? ` · <small>von ${e(sideOwner(players))}</small>` : ''}</span><b>${fmt(val)}</b></div>
      ${players.map(p => (p.isPick
        ? `<div class="tr-nba-grprow${hlKey && p.pickKey === hlKey ? ' hl' : ''}"><span class="tr-nba-note">📋 R${p.round}</span><div class="tr-nba-main"><div class="tr-nba-name">${e(p.year)} · Runde ${e(p.round)}</div><div class="tr-nba-detail">${p.traded ? '→ von ' + e(p.origName) : e(p.currName)}</div></div><span class="tr-nba-val pk">~${fmt(p.baseValue || 0)}</span></div>`
        : `<div class="tr-nba-grprow">${nba.rankBadge(p.rank ?? null)}<div class="tr-nba-main"><div class="tr-nba-name">${e(p.name)}</div><div class="tr-nba-detail">${e(p.nba)} · ${e(p.ownerName)}</div></div></div>`)).join('')}
    </div>`;
    const card = t => {
      const d = (t.frozen && t.frozen[mode]) || { valA: t.valA || 0, valB: t.valB || 0, verdict: t.verdict || '', cls: t.cls || 'fair', pctA: t.pctA || '50', pctB: t.pctB || '50' };
      const cls = ['fair', 'slight', 'lopsided'].includes(d.cls) ? d.cls : 'fair';
      const src = t.source === 'espn-sync' || t.source === 'espn-sync-auto' ? '<span class="tr-nba-src">🔄 ESPN Auto</span>' : '';
      return `<div class="card tr-nba-hcard ${cls}">
        <div class="tr-nba-hhead"><span class="tr-nba-hverdict">${e(VERDICT_DE(d.verdict))}</span>
          ${savedLbl[t.savedMode || t.mode] ? `<span class="tr-nba-hmode">gespeichert: ${savedLbl[t.savedMode || t.mode]}</span>` : ''}${src}
          <span class="muted tr-nba-hdate">${e(t.date || '')}</span></div>
        <div class="tr-nba-track"><div class="tr-nba-fill${parseFloat(d.pctA) >= 50 ? ' win' : ''}" style="width:${parseFloat(d.pctA) || 0}%"></div></div>
        <div class="tr-nba-barlbl small"><span>Seite A <b>${fmt(d.valA)}</b> (${pctFmt(d.pctA)} %)</span><span><b>${fmt(d.valB)}</b> Seite B (${pctFmt(d.pctB)} %)</span></div>
        <div class="tr-nba-hsides">${renderSide(t.sideA || [], 'Seite A', d.valA)}<div class="tr-nba-vs">⟷</div>${renderSide(t.sideB || [], 'Seite B', d.valB)}</div>
      </div>`;
    };
    return card(t);
  }

  function historyPage(ctx) {
    const { data, ui } = ctx, e = esc, nba = N().init(data);
    const trades = data.TRADE_HISTORY_BASE || [];
    const mode = modeOk((ctx.store.getJSON(HKEY, {}) || {}).mode);
    const head = `<div class="page-head"><h1 class="page-title display">📜 Trade-Historie</h1>
      <div class="page-sub">${trades.length} Trades<span class="explain"> · Werte eingefroren zum Zeitpunkt des Trades</span> · neu bewerten im <a href="${ctx.href('trade')}">Trade Analyzer</a></div></div>`;
    if (!trades.length) return head + ui.empty('Noch keine Trades', 'data/trade-history.js ist leer oder fehlt für diese Liga.', '📋');
    const cards = trades.map(t => historyCard(t, mode, nba)).join('');
    return `<div class="tr-nba" data-trhist>${head}
      <div class="controls">${modeSeg(mode, 'data-hmode')}</div>
      <div class="note explain">ℹ️ Nur zum Nachlesen: Die Historie wird in <code>data/trade-history.js</code> im Repo gepflegt (täglicher ESPN-Sync bzw. von Hand). Speichern, Löschen und Export im Browser gibt es hier nicht mehr.</div>
      ${cards}</div>`;
  }

  function historyMount(root, ctx) {
    const wrap = root.querySelector('[data-trhist]');
    if (!wrap) return;
    wrap.addEventListener('click', ev => {
      const b = ev.target.closest('[data-hmode]');
      if (!b) return;
      ctx.store.setJSON(HKEY, { mode: modeOk(b.dataset.hmode) });
      ctx.refresh();
    });
  }

  // ============================================================
  MFHFB.pages.register({
    id: 'trade', section: 'trade', label: 'Trade Analyzer', icon: '⚖️', applies: APPLIES,
    data: DATA, title: () => 'Trade Analyzer', render: analyzerPage, mount: analyzerMount,
  });
  MFHFB.pages.register({
    id: 'tradefinder', section: 'trade', label: 'Trade Finder', icon: '🔍', applies: APPLIES,
    data: DATA, title: () => 'Trade Finder', render: finderPage, mount: finderMount,
  });
  MFHFB.pages.register({
    id: 'tradehistory', section: 'trade', label: 'Trade-Historie', icon: '📜', applies: APPLIES,
    data: ['teams', '?rosters-live', '?sport:aliases', '?trade-history'], title: () => 'Trade-Historie', render: historyPage, mount: historyMount,
  });

  // Für Tests (Node/VM): reine Rechenfunktionen
  MFHFB.nbaTrades = { historyCard, TRADE_VALUE_TABLE, PICK_VALUES, SLOT_VALUES, LOTTERY_P, compareVals, compareSides, slotDist, playerAgeToday, ageMultiplier, slotAwarePickValue, pickTradeValue, dynastyValue, tradeSideValue, verdictOf, runCore, buildTFPlayerPool, buildTFPickPool, giveTotalOf, model };
})();
