// ============================================================
//  Tools (NBA, Keeper/Dynasty): Trade Analyzer, Trade Finder, Trade-Historie
// ============================================================
//  #/<liga>/trade[/<teamId>]   Trade Analyzer (optional: Seite A vorauswählen)
//  #/<liga>/tradefinder        Trade Finder
//  #/<liga>/tradehistory       Trade-Historie (read-only)
//
//  Port von TTHQ js/trade-analyzer.js, js/trade-finder.js,
//  js/trade-history.js + den Pick-Helfern aus data/stats.js
//  (PICK_VALUES, buildPickPool, pickTradeValue). Die Bewertungs-Mathematik
//  ist UNVERÄNDERT übernommen:
//   - TRADE_VALUE_TABLE (Rang → Wert, MFHFB-Sheet) wörtlich kopiert
//   - Alters-Multiplikator je Modus (dynasty | raw | winnow), ohne
//     Geburtsdatum gilt Alter 26 (wie playerAgeToday)
//   - Picks: slot-abhängig early/mid/late (Analyzer) bzw. immer "mid"
//     (Finder), Jahres-Faktor je Modus (pickTradeValue)
//   - Analyzer: Paket-Abschlag 0.80^i, Finder: 0.70^i (wie im Original)
//   - Urteil: < 5 %-Punkte von 50/50 fair, < 12 leicht, sonst deutlich
//
//  Nicht übernommen: Share-Bild (html2canvas) → „Als Text kopieren“;
//  Trade speichern / Admin-Staging / Löschen / Export der Historie
//  (die Historie wird in data/trade-history.js im Repo gepflegt).
//  Nur für Keeper-/Dynasty-NBA-Ligen (Funkytown = Redraft → keine Trade-Tools).
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const APPLIES = { sport: ['nba'], keepers: [true] };
  const DATA = ['teams', '?rosters-live', '?sport:aliases', 'rankings', '?hashtag', '?picks', '?picks-live'];

  // Trade values from MFHFBs spreadsheet (rank → value lookup) — wörtlich aus trade-analyzer.js
  const TRADE_VALUE_TABLE = {"1": 1590, "2": 1375, "3": 1350, "4": 1325, "5": 1050, "6": 970, "7": 930, "8": 860, "9": 840, "10": 780, "11": 770, "12": 760, "13": 750, "14": 740, "15": 730, "16": 690, "17": 680, "18": 670, "19": 660, "20": 650, "21": 640, "22": 630, "23": 620, "24": 610, "25": 600, "26": 590, "27": 560, "28": 530, "29": 490, "30": 475, "31": 460, "32": 445, "33": 430, "34": 415, "35": 400, "36": 395, "37": 390, "38": 385, "39": 380, "40": 375, "41": 370, "42": 365, "43": 360, "44": 355, "45": 350, "46": 345, "47": 340, "48": 335, "49": 330, "50": 325, "51": 320, "52": 315, "53": 295, "54": 290, "55": 285, "56": 280, "57": 275, "58": 270, "59": 265, "60": 260, "61": 255, "62": 250, "63": 245, "64": 240, "65": 235, "66": 230, "67": 225, "68": 199, "69": 197, "70": 195, "71": 193, "72": 191, "73": 189, "74": 187, "75": 185, "76": 183, "77": 181, "78": 179, "79": 177, "80": 175, "81": 173, "82": 171, "83": 150, "84": 149, "85": 148, "86": 147, "87": 146, "88": 145, "89": 144, "90": 143, "91": 142, "92": 141, "93": 140, "94": 139, "95": 138, "96": 137, "97": 136, "98": 135, "99": 134, "100": 133, "101": 132, "102": 131, "103": 130, "104": 129, "105": 128, "106": 127, "107": 126, "108": 125, "109": 124, "110": 123, "111": 122, "112": 120, "113": 119.5, "114": 119, "115": 118.5, "116": 118, "117": 117.5, "118": 117, "119": 116.5, "120": 116, "121": 115.5, "122": 115, "123": 114.5, "124": 114, "125": 113.5, "126": 113, "127": 112.5, "128": 112, "129": 111.5, "130": 111, "131": 110.5, "132": 110, "133": 109.5, "134": 109, "135": 108.5, "136": 108, "137": 107.5, "138": 107, "139": 106.5, "140": 106, "141": 105.5, "142": 105, "143": 104.5, "144": 104, "145": 103.5, "146": 103, "147": 102.5, "148": 102, "149": 101.5, "150": 101, "151": 100.5, "152": 100, "153": 99.5, "154": 99, "155": 98.5, "156": 98, "157": 97.5, "158": 97, "159": 96.5, "160": 96, "161": 95.5, "162": 95, "163": 94.5, "164": 94, "165": 93.5, "166": 93, "167": 92.5, "168": 92, "169": 91.5, "170": 91, "171": 90.5, "172": 90, "173": 89.5, "174": 89, "175": 88.5, "176": 88, "177": 87.5, "178": 87, "179": 86.5, "180": 86, "181": 85.5, "182": 85, "183": 84.5, "184": 84, "185": 83.5, "186": 83, "187": 82.5, "188": 82, "189": 81.5, "190": 81, "191": 80.5, "192": 80, "193": 79.5, "194": 79, "195": 78.5, "196": 78, "197": 77.5, "198": 77, "199": 76.5, "200": 76, "201": 75.5, "202": 75, "203": 74.5, "204": 74, "205": 73.5, "206": 73, "207": 72.5, "208": 72, "209": 71.5, "210": 71, "211": 70.5, "212": 70, "213": 69.5, "214": 69, "215": 68.5, "216": 68, "217": 67.5, "218": 67, "219": 66.5, "220": 66, "221": 65.5, "222": 65, "223": 64.5, "224": 64, "225": 63.5, "226": 63, "227": 62.5, "228": 62, "229": 61.5, "230": 61, "231": 60.5, "232": 60, "233": 59.5, "234": 59, "235": 58.8, "236": 58.6, "237": 58.4, "238": 58.2, "239": 58, "240": 57.8, "241": 57.6, "242": 57.4, "243": 57.2, "244": 57, "245": 56.8, "246": 56.6, "247": 56.4, "248": 56.2, "249": 56, "250": 55.8, "251": 55.6, "252": 55.4, "253": 55.2, "254": 55, "255": 54.8, "256": 54.6, "257": 54.4, "258": 54.2, "259": 54, "260": 53.8, "261": 53.6, "262": 53.4, "263": 53.2, "264": 53, "265": 52.8, "266": 52.6, "267": 52.4, "268": 52.2, "269": 52, "270": 51.8, "271": 51.6, "272": 51.4, "273": 51.2, "274": 51, "275": 50.8, "276": 50.6, "277": 50.4, "278": 50.2, "279": 50, "280": 49.8, "281": 49.6, "282": 49.4, "283": 49.2, "284": 49, "285": 48.8, "286": 48.6, "287": 48.4, "288": 48.2, "289": 48, "290": 47.8, "291": 47.6, "292": 47.4, "293": 47.2, "294": 47, "295": 46.8, "296": 46.6, "297": 46.4, "298": 46.2, "299": 46, "300": 45.8, "301": 45.6, "302": 45.4, "303": 45.2, "304": 45, "305": 44.8, "306": 44.6, "307": 44.4, "308": 44.2, "309": 44, "310": 43.8, "311": 43.6, "312": 43.4, "313": 43.2, "314": 43, "315": 42.8, "316": 42.6, "317": 42.4, "318": 42.2, "319": 42, "320": 41.8, "321": 41.6, "322": 41.4, "323": 41.2, "324": 41, "325": 40.8, "326": 40.6, "327": 40.4, "328": 40.2, "329": 40, "330": 39.8, "331": 39.6, "332": 39.4, "333": 39.2, "334": 39, "335": 38.8, "336": 38.6, "337": 38.4, "338": 38.2, "339": 38, "340": 37.8, "341": 37.6, "342": 37.4, "343": 37.2, "344": 37, "345": 36.8, "346": 36.6, "347": 36.4, "348": 36.2, "349": 36, "350": 35.8, "351": 35.6, "352": 35.4, "353": 35.2, "354": 35, "355": 34.8, "356": 34.6, "357": 34.4, "358": 34.2, "359": 34, "360": 33.8, "361": 33.6, "362": 33.4, "363": 33.2, "364": 33, "365": 32.8, "366": 32.6, "367": 32.4, "368": 32.2, "369": 32, "370": 31.8, "371": 31.6, "372": 31.4, "373": 31.2, "374": 31, "375": 30.8, "376": 30.6, "377": 30.4, "378": 30.2, "379": 30, "380": 29.8, "381": 29.6, "382": 29.4, "383": 29.2, "384": 29, "385": 28.8, "386": 28.6, "387": 28.4, "388": 28.2, "389": 28, "390": 27.8, "391": 27.6, "392": 27.4, "393": 27.2, "394": 27, "395": 26.8, "396": 26.6, "397": 26.4, "398": 26.2, "399": 26, "400": 25.8, "401": 25.6, "402": 25.4, "403": 25.2, "404": 25, "405": 24.8, "406": 24.6, "407": 24.4, "408": 24.2, "409": 24, "410": 23.8, "411": 23.6, "412": 23.4, "413": 23.2, "414": 23, "415": 22.8, "416": 22.6, "417": 22.4, "418": 22.2, "419": 22, "420": 21.8, "421": 21.6, "422": 21.4, "423": 21.2, "424": 21, "425": 20.8, "426": 20.6, "427": 20.4, "428": 20.2, "429": 20, "430": 19.8, "431": 19.6, "432": 19.4, "433": 19.2, "434": 19, "435": 18.8, "436": 18.6, "437": 18.4, "438": 18.2, "439": 18, "440": 17.8, "441": 17.6, "442": 17.4, "443": 17.2, "444": 17, "445": 16.8, "446": 16.6, "447": 16.4, "448": 16.2, "449": 16, "450": 15.8, "451": 15.6, "452": 15.4, "453": 15.2, "454": 15, "455": 14.8, "456": 14.6, "457": 14.4, "458": 14.2, "459": 14, "460": 13.8, "461": 13.6, "462": 13.4, "463": 13.2, "464": 13, "465": 12.8, "466": 12.6, "467": 12.4, "468": 12.2, "469": 12, "470": 11.8, "471": 11.6, "472": 11.4, "473": 11.2, "474": 11, "475": 10.8, "476": 10.6, "477": 10.4, "478": 10.2, "479": 10, "480": 9.8, "481": 9.6, "482": 9.4, "483": 9.2, "484": 9, "485": 8.8, "486": 8.6, "487": 8.4, "488": 8.2, "489": 8, "490": 7.8, "491": 7.6, "492": 7.4, "493": 7.2, "494": 7, "495": 6.8, "496": 6.6, "497": 6.4, "498": 6.2, "499": 6, "500": 5.8, "501": 5.6, "502": 5.4, "503": 5.2, "504": 5, "505": 4.8, "506": 4.6, "507": 4.4, "508": 4.2, "509": 4, "510": 3.8, "511": 3.6, "512": 3.4, "513": 3.2, "514": 3, "515": 2.8, "516": 2.6, "517": 2.4, "518": 2.2, "519": 2, "520": 1.8, "521": 1.6, "522": 1.4, "523": 1.2, "524": 1, "525": 0.8, "526": 0.6, "527": 0.4, "528": 0, "529": 0, "530": 0, "531": 0, "532": 0, "533": 0, "534": 0, "535": 0, "536": 0, "537": 0, "538": 0, "539": 0, "540": 0, "541": 0, "542": 0, "543": 0, "544": 0, "545": 0, "546": 0, "547": 0, "548": 0, "549": 0, "550": 0, "551": 0, "552": 0, "553": 0, "554": 0, "555": 0, "556": 0, "557": 0, "558": 0, "559": 0, "560": 0, "561": 0, "562": 0, "563": 0, "564": 0, "565": 0, "566": 0, "567": 0, "568": 0, "569": 0, "570": 0, "571": 0, "572": 0, "573": 0, "574": 0, "575": 0, "576": 0, "577": 0, "578": 0, "579": 0, "580": 0, "581": 0, "582": 0, "583": 0, "584": 0, "585": 0, "586": 0, "587": 0, "588": 0, "589": 0, "590": 0, "591": 0, "592": 0, "593": 0, "594": 0, "595": 0, "596": 0, "597": 0, "598": 0, "599": 0, "600": 0, "601": 0, "602": 0, "603": 0, "604": 0, "605": 0, "606": 0, "607": 0, "608": 0, "609": 0, "610": 0, "611": 0, "612": 0, "613": 0, "614": 0, "615": 0, "616": 0, "617": 0, "618": 0, "619": 0, "620": 0, "621": 0, "622": 0, "623": 0, "624": 0, "625": 0, "626": 0, "627": 0, "628": 0, "629": 0, "630": 0, "631": 0, "632": 0, "633": 0, "634": 0, "635": 0, "636": 0, "637": 0, "638": 0, "639": 0, "640": 0, "641": 0, "642": 0, "643": 0, "644": 0, "645": 0, "646": 0, "647": 0, "648": 0, "649": 0, "650": 0, "651": 0, "652": 0, "653": 0, "654": 0, "655": 0, "656": 0, "657": 0};

  // Pick-Werte — wörtlich aus data/stats.js
  const PICK_VALUES = {
    "2026_R1_early":  678, "2026_R1_mid":  266, "2026_R1_late":  112,
    "2026_R2_early":   88, "2026_R2_mid":   60, "2026_R2_late":   35,
    "2026_R3_early":   30, "2026_R3_mid":   25, "2026_R3_late":   20,
    "2026_R4_early":   15, "2026_R4_mid":   10, "2026_R4_late":    5,
    "2027_R1_early":  550, "2027_R1_mid":  200, "2027_R1_late":  100,
    "2027_R2_early":   85, "2027_R2_mid":   55, "2027_R2_late":   30,
    "2027_R3_early":   25, "2027_R3_mid":   22, "2027_R3_late":   20,
    "2027_R4_early":   12, "2027_R4_mid":    8, "2027_R4_late":    4,
    "2028_R1_early":  506, "2028_R1_mid":  184, "2028_R1_late":   92,
    "2028_R2_early":   78, "2028_R2_mid":   50, "2028_R2_late":   27,
    "2028_R3_early":   23, "2028_R3_mid":   20, "2028_R3_late":   18,
    "2028_R4_early":   11, "2028_R4_mid":    7, "2028_R4_late":    3,
    "2029_R1_early":  467, "2029_R1_mid":  170, "2029_R1_late":   85,
    "2029_R2_early":   72, "2029_R2_mid":   46, "2029_R2_late":   25,
    "2029_R3_early":   21, "2029_R3_mid":   18, "2029_R3_late":   17,
    "2029_R4_early":   10, "2029_R4_mid":    6, "2029_R4_late":    3,
  };

  const MODES = [
    { key: 'dynasty', label: '🏗️ Dynasty', desc: '<b>Dynasty:</b> altersbereinigt für den langfristigen Wert. Junge Spieler bekommen einen deutlichen Boost, Veteranen werden abgewertet. Ideal für Rebuild-Teams.' },
    { key: 'raw', label: '📊 Raw', desc: '<b>Raw:</b> reiner Rang-Wert ohne Altersanpassung. Neutrale Konsens-Sicht, gut als Baseline, wenn sich beide Seiten uneinig sind.' },
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
    if (mode === 'raw') return 1.0;
    const age = playerAgeToday(dobStr);
    if (mode === 'dynasty') {
      if (age <= 19) return 1.50;
      if (age <= 21) return 1.35;
      if (age <= 23) return 1.20;
      if (age <= 25) return 1.08;
      if (age <= 27) return 1.00;
      if (age <= 29) return 0.82;
      if (age <= 31) return 0.62;
      if (age <= 33) return 0.42;
      if (age <= 35) return 0.22;
      return 0.08;
    }
    if (mode === 'winnow') {
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

  function slotRange(slot) {
    if (slot == null) return 'mid';
    if (slot <= 4) return 'early';
    if (slot <= 8) return 'mid';
    return 'late';
  }
  // slotAwarePickValue (trade-analyzer.js): ohne Fallback auf "mid"
  function slotAwarePickValue(pick) {
    if (!pick || !pick.year || !pick.round) return 0;
    const key = `${String(pick.year)}_R${pick.round}_${slotRange(pick.slot)}`;
    return PICK_VALUES[key] || 0;
  }
  // pickTradeValue (data/stats.js)
  function pickTradeValue(pick, mode) {
    let val = pick.baseValue;
    if (mode === 'winnow') {
      const m = { 2026: 1.15, 2027: 1.00, 2028: 0.85, 2029: 0.70 };
      val = Math.round(val * (m[pick.year] || 0.65));
    } else if (mode === 'dynasty') {
      const m = { 2026: 0.95, 2027: 1.00, 2028: 1.05, 2029: 1.08 };
      val = Math.round(val * (m[pick.year] || 1.00));
    }
    return val;
  }
  function dynastyValue(rank, dob, mode) {
    const v = TRADE_VALUE_TABLE[rank];
    if (v === undefined) return 0;
    return Math.round(v * ageMultiplier(dob, mode));
  }
  const itemValue = (p, mode) => (p.isPick ? pickTradeValue(p, mode) : dynastyValue(p.rank, p.dob, mode));
  // tradeSideValue: Paket-Abschlag 0.80 je weiterem Asset
  function tradeSideValue(items, mode) {
    if (!items.length) return 0;
    const vals = items.map(p => itemValue(p, mode)).sort((a, b) => b - a);
    let total = 0;
    vals.forEach((v, i) => { total += v * Math.pow(0.80, i); });
    return Math.round(total);
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

  // ============================================================
  //  Datenmodell (pro geladenem Datensatz gecacht)
  // ============================================================
  const models = new WeakMap();
  function model(data) {
    if (models.has(data)) return models.get(data);
    const nba = N().init(data);
    const allTeams = nba.leagueTeams(data, true);
    const teamById = new Map(allTeams.map(t => [t.id, t]));
    const team = id => teamById.get(id) || { id, name: 'Team ' + id, color: null };
    const owner = nba.ownerIndex(data);
    const players = (data.DYNASTY_PLAYERS || []).map(p => {
      const o = owner(p[1]);
      return { isPick: false, rank: p[0], name: p[1], nba: p[2], pos: p[3], dob: p[4] || null, owner: o, ownerId: o ? o.id : null };
    });
    const byName = new Map(players.map(p => [p.name, p]));
    const picks = nba.picks(data).map(p => {
      const orig = team(p.originalOwner), curr = team(p.currentOwner);
      return {
        isPick: true, pickKey: `${p.year}_R${p.round}_T${p.originalOwner}`, year: p.year, round: p.round, slot: p.slot || null,
        originalOwner: p.originalOwner, currentOwner: p.currentOwner, traded: p.originalOwner !== p.currentOwner,
        note: p.note || null, orig, curr, name: `${p.year} R${p.round} · ${orig.name}`, pickRange: slotRange(p.slot),
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
    models.set(data, m);
    return m;
  }
  // Auswahl als Referenz speichern ({t:'p', n:name} | {t:'k', k:pickKey}) → Objekt
  const ref = p => (p.isPick ? { t: 'k', k: p.pickKey } : { t: 'p', n: p.name });
  const resolve = (m, r) => (r && r.t === 'k' ? m.pickByKey.get(r.k) : r && r.t === 'p' ? m.byName.get(r.n) : null) || null;
  const sameRef = (a, b) => a.t === b.t && (a.t === 'k' ? a.k === b.k : a.n === b.n);

  // ---------- kleine Render-Helfer ----------
  const esc = s => MFHFB.ui.esc(s);
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
          <span class="tr-nba-badges">${badge('MFHFB', p.rank)}${badge('Matt', m.mattRank(p.name))}${badge('#️⃣', m.hashRank(p.name))}</span></span>
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

  function breakdownSide(m, items, label, sideVal, mode) {
    const sorted = [...items].sort((a, b) => itemValue(b, mode) - itemValue(a, mode));
    const rows = sorted.map((p, i) => {
      const raw = itemValue(p, mode);
      const eff = Math.round(raw * Math.pow(0.80, i));
      let badges, detail;
      if (p.isPick) {
        badges = `<span class="tr-nba-note">📋 ${{ early: 'Early', mid: 'Mid', late: 'Late' }[p.pickRange]} · ${p.year}</span> ${teamTag(p.curr)}${p.traded ? ' <small class="muted">(via Trade)</small>' : ''}`;
        detail = `📋 Draft Pick · ${esc(p.curr.name)}`;
      } else {
        const mult = ageMultiplier(p.dob, mode);
        const age = p.dob ? playerAgeToday(p.dob) : null;
        const cls = mult >= 1.20 ? 'a-hi' : mult >= 1.05 ? 'a-up' : mult <= 0.50 ? 'a-lo' : mult <= 0.80 ? 'a-dn' : '';
        const ageLbl = mode !== 'raw' && age ? `<span class="tr-nba-age ${cls}">${age} J. · ${mult >= 1 ? '+' : ''}${Math.round((mult - 1) * 100)} %</span>` : '';
        badges = `${badge('MFHFB', p.rank)}${badge('Matt', m.mattRank(p.name))}${badge('#️⃣', m.hashRank(p.name))}${ageLbl}`;
        detail = `${esc(p.nba)} · ${p.owner ? esc(p.owner.name) : 'frei'}`;
      }
      return `<div class="tr-nba-bdrow">
        <div class="tr-nba-main"><div class="tr-nba-name">${esc(p.name)}</div><div class="tr-nba-detail">${detail}</div><div class="tr-nba-badges">${badges}</div></div>
        <div class="tr-nba-eff"><b>${fmt(eff)}</b>${i > 0 ? `<small>×0,8${i > 1 ? '<sup>' + i + '</sup>' : ''} Tiefe</small>` : ''}</div>
      </div>`;
    }).join('');
    return `<div class="tr-nba-bdside"><div class="tr-nba-bdhead"><span>${label}</span><b>${fmt(sideVal)}</b></div>${rows}</div>`;
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
    const valA = tradeSideValue(selA, mode), valB = tradeSideValue(selB, mode);
    const v = verdictOf(valA, valB);
    const ageNote = {
      dynasty: 'Junge Spieler (≤ 21) bekommen bis zu +50 %, ab 28 wird abgewertet, ab 32 stark.',
      raw: 'Keine Altersanpassung, nur der reine Rang-Wert.',
      winnow: 'Spieler zwischen 26 und 31 bekommen einen Bonus, Teenager und Spieler ab 34 einen deutlichen Abschlag.',
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
        ${breakdownSide(m, selA, 'Seite A', valA, mode)}
        <div class="tr-nba-vs">vs</div>
        ${breakdownSide(m, selB, 'Seite B', valB, mode)}
      </div>
      <div class="tr-nba-explain"><b>${MODES.find(x => x.key === mode).label.replace(/^\S+\s/, '')}: so wird gerechnet.</b> Jeder Spieler bekommt den Wert seines MFHFB-Dynasty-Rangs aus dem Trade-Sheet (nur Ränge 1–${Object.keys(TRADE_VALUE_TABLE).length}, danach 0), multipliziert mit dem Alters-Faktor. ${ageNote} Picks: fester Wert je Jahr/Runde/Slot (early 1–4, mid 5–8, late 9–12; ohne Slot „mid“) mit Jahres-Faktor je Modus. Pro Seite zählt das wertvollste Asset voll, jedes weitere mit ×0,8, ×0,8², … (Paket-Abschlag).</div>
      <div class="tr-nba-actions"><button type="button" class="seg-btn" data-copy>📋 Als Text kopieren</button><button type="button" class="seg-btn" data-reset>↺ Neuer Trade</button></div>
    </div>`;
  }

  function analyzerPage(ctx) {
    const { data, ui } = ctx;
    if (!data.DYNASTY_PLAYERS) return ui.empty('Keine Dynasty-Rangliste', 'DYNASTY_PLAYERS fehlt für diese Liga.', '⚖️');
    const m = model(data);
    const st = tState(ctx);
    return `<div class="tr-nba" data-trnba>
      <div class="page-head"><h1 class="page-title display">⚖️ Trade Analyzer</h1>
        <div class="page-sub"><span class="explain">Schwierig, einen Dynasty-Calc zu bauen, der alles berücksichtigt. Nehmt dies hier als Anlaufpunkt.</span> Siehe auch <a href="${ctx.href('tradefinder')}">Trade Finder</a> und <a href="${ctx.href('tradehistory')}">Trade-Historie</a>.</div></div>
      <div class="controls tr-nba-modebar">${modeSeg(st.mode, 'data-mode')}<div class="tr-nba-desc">${modeDesc(st.mode)}</div></div>
      <div class="tr-cols">${sideCard(ctx, m, st, 'A')}${sideCard(ctx, m, st, 'B')}</div>
      ${resultBox(ctx, m, st)}
    </div>`;
  }

  function analyzerMount(root, ctx) {
    const wrap = root.querySelector('[data-trnba]');
    if (!wrap) return;
    const m = model(ctx.data);
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
        const valA = tradeSideValue(selA, st.mode), valB = tradeSideValue(selB, st.mode);
        copyText(buildTradeShareText(ctx.league, selA, selB, valA, valB, verdictOf(valA, valB).share), b);
      }
    });
    wrap.addEventListener('change', ev => {
      const el = ev.target;
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
      .filter(p => p.year >= 2026 && p.round <= 2) // only valuable picks
      .map(p => {
        const baseVal = PICK_VALUES[`${p.year}_R${p.round}_mid`] || 0;
        return { ...p, baseValue: baseVal, dynVal: pickTradeValue({ baseValue: baseVal, year: p.year }, mode) };
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
  const giveTotalOf = give => [...give].sort((a, b) => b.dynVal - a.dynVal).reduce((s, p, i) => s + Math.round(p.dynVal * Math.pow(0.70, i)), 0);

  function giveItems(m, st) {
    const players = buildTFPlayerPool(m, st.mode), picks = buildTFPickPool(m, st.mode);
    const pn = new Map(players.map(p => [p.name, p])), pk = new Map(picks.map(p => [p.pickKey, p]));
    return st.give.map(r => (r.t === 'k' ? pk.get(r.k) : pn.get(r.n))).filter(Boolean);
  }

  function runCore(m, st, give) {
    const fmtG = { give: st.nGive, get: st.nGet };
    const giveNames = new Set(give.filter(p => !p.isPick).map(p => p.name));
    const giveKeys = new Set(give.filter(p => p.isPick).map(p => p.pickKey));
    const giveTotal = giveTotalOf(give);
    const tol = 0.13;
    const minVal = Math.round(giveTotal * (1 - tol));
    const maxVal = Math.round(giveTotal * (1 + tol));
    const pickMode = st.pickMode;
    const target = st.target, giveTeam = st.giveTeam, sameTeam = st.sameTeam;
    const pctOf = tot => Math.round(Math.abs(tot - giveTotal) / Math.max(giveTotal, 1) * 100);

    const allPlayers = buildTFPlayerPool(m, st.mode).filter(p => {
      if (giveNames.has(p.name)) return false;
      if (target) return p.ownerId === target;
      if (giveTeam && p.ownerId === giveTeam) return false;
      return true;
    }).sort((a, b) => b.dynVal - a.dynVal);
    const allPicks = (pickMode === 'for_picks' || pickMode === 'with_picks')
      ? buildTFPickPool(m, st.mode).filter(p => {
        if (giveKeys.has(p.pickKey)) return false;
        if (target) return p.currentOwner === target;
        if (giveTeam && p.currentOwner === giveTeam) return false;
        return true;
      }).sort((a, b) => b.dynVal - a.dynVal)
      : [];

    const results = [];
    const seen = new Set();

    function playersOnly(pool) {
      if (fmtG.get === 1) {
        for (const p of pool) {
          if (p.dynVal < minVal) continue;
          if (p.dynVal > maxVal) continue;
          if (!seen.has(p.name)) { seen.add(p.name); results.push({ players: [p], total: p.dynVal, diffPct: pctOf(p.dynVal) }); }
        }
      } else if (fmtG.get === 2) {
        const n = pool.length;
        for (let i = 0; i < n && results.length < 200; i++) {
          const a = pool[i];
          if (a.dynVal > maxVal) continue;
          for (let j = i + 1; j < n; j++) {
            const b = pool[j];
            if (sameTeam && a.ownerId !== b.ownerId) continue;
            const tot = Math.round(a.dynVal + b.dynVal * 0.70);
            if (tot < minVal) break;
            if (tot <= maxVal) {
              const key = [a.name, b.name].sort().join('|');
              if (!seen.has(key)) { seen.add(key); results.push({ players: [a, b], total: tot, diffPct: pctOf(tot) }); }
            }
          }
        }
      } else if (fmtG.get === 3) {
        const n = pool.length;
        outer: for (let i = 0; i < n; i++) {
          const a = pool[i];
          if (a.dynVal > maxVal) continue;
          for (let j = i + 1; j < n; j++) {
            const b = pool[j];
            if (sameTeam && a.ownerId !== b.ownerId) continue;
            const partial = Math.round(a.dynVal + b.dynVal * 0.70);
            if (partial < minVal * 0.25) break;
            for (let k = j + 1; k < n; k++) {
              const c = pool[k];
              if (sameTeam && c.ownerId !== a.ownerId) continue;
              const tot = partial + Math.round(c.dynVal * 0.49);
              if (tot < minVal) break;
              if (tot <= maxVal) {
                const key = [a.name, b.name, c.name].sort().join('|');
                if (!seen.has(key)) { seen.add(key); results.push({ players: [a, b, c], total: tot, diffPct: pctOf(tot) }); }
              }
              if (results.length > 300) break outer;
            }
          }
        }
      }
    }

    if (pickMode === 'for_picks') {
      const pool = allPicks;
      if (fmtG.get === 1) {
        for (const p of pool) {
          if (p.dynVal < minVal || p.dynVal > maxVal) continue;
          if (!seen.has(p.pickKey)) { seen.add(p.pickKey); results.push({ players: [p], total: p.dynVal, diffPct: pctOf(p.dynVal) }); }
        }
      } else if (fmtG.get === 2) {
        const n = pool.length;
        for (let i = 0; i < n && results.length < 200; i++) {
          const a = pool[i];
          if (a.dynVal > maxVal) continue;
          for (let j = i + 1; j < n; j++) {
            const b = pool[j];
            const tot = Math.round(a.dynVal + b.dynVal * 0.70);
            if (tot < minVal) break;
            if (tot <= maxVal) {
              const key = [a.pickKey, b.pickKey].sort().join('|');
              if (!seen.has(key)) { seen.add(key); results.push({ players: [a, b], total: tot, diffPct: pctOf(tot) }); }
            }
          }
        }
      } else if (fmtG.get === 3) {
        const n = pool.length;
        outer: for (let i = 0; i < n; i++) {
          const a = pool[i];
          if (a.dynVal > maxVal) continue;
          for (let j = i + 1; j < n; j++) {
            const b = pool[j];
            const partial = Math.round(a.dynVal + b.dynVal * 0.70);
            if (partial < minVal * 0.25) break;
            for (let k = j + 1; k < n; k++) {
              const c = pool[k];
              const tot = partial + Math.round(c.dynVal * 0.49);
              if (tot < minVal) break;
              if (tot <= maxVal) {
                const key = [a.pickKey, b.pickKey, c.pickKey].sort().join('|');
                if (!seen.has(key)) { seen.add(key); results.push({ players: [a, b, c], total: tot, diffPct: pctOf(tot) }); }
              }
              if (results.length > 300) break outer;
            }
          }
        }
      }
    } else if (pickMode === 'with_picks') {
      if (fmtG.get === 1) {
        for (const p of [...allPlayers, ...allPicks]) {
          const v = p.dynVal;
          if (v < minVal || v > maxVal) continue;
          const key = p.isPick ? p.pickKey : p.name;
          if (!seen.has(key)) { seen.add(key); results.push({ players: [p], total: v, diffPct: pctOf(v) }); }
        }
      } else if (fmtG.get === 2) {
        const combined = [...allPlayers, ...allPicks];
        const n = combined.length;
        for (let i = 0; i < n && results.length < 300; i++) {
          const a = combined[i];
          if (a.dynVal > maxVal) continue;
          for (let j = i + 1; j < n; j++) {
            const b = combined[j];
            if (sameTeam && !a.isPick && !b.isPick && a.ownerId !== b.ownerId) continue;
            const tot = Math.round(a.dynVal + b.dynVal * 0.70);
            if (tot < minVal) break;
            if (tot <= maxVal) {
              const ka = a.isPick ? a.pickKey : a.name;
              const kb = b.isPick ? b.pickKey : b.name;
              const key = [ka, kb].sort().join('|');
              if (!seen.has(key)) { seen.add(key); results.push({ players: [a, b], total: tot, diffPct: pctOf(tot) }); }
            }
          }
        }
      } else {
        playersOnly(allPlayers);
      }
    } else {
      playersOnly(allPlayers);
    }

    results.sort((a, b) => a.diffPct - b.diffPct);
    return { top: results.slice(0, 10), giveTotal };
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
          <span class="tr-nba-restot"><b>${fmt(r.total)}</b><small>vs ${fmt(res.giveTotal)}</small><span class="tr-nba-chev" aria-hidden="true">▾</span></span>
        </summary>
        <div class="tr-nba-resbody">${detail}
          <button type="button" class="seg-btn tr-nba-load" data-load="${idx}">⚖️ Im Trade Analyzer öffnen</button></div>
      </details>`;
    }).join('');
  }

  function finderPage(ctx) {
    const { data, ui } = ctx, e = esc;
    if (!data.DYNASTY_PLAYERS) return ui.empty('Keine Dynasty-Rangliste', 'DYNASTY_PLAYERS fehlt für diese Liga.', '🔍');
    const m = model(data);
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
    const m = model(ctx.data);
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

  function historyPage(ctx) {
    const { data, ui } = ctx, e = esc, nba = N().init(data);
    const trades = data.TRADE_HISTORY_BASE || [];
    const mode = modeOk((ctx.store.getJSON(HKEY, {}) || {}).mode);
    const head = `<div class="page-head"><h1 class="page-title display">📜 Trade-Historie</h1>
      <div class="page-sub">${trades.length} Trades<span class="explain"> · Werte eingefroren zum Zeitpunkt des Trades</span> · neu bewerten im <a href="${ctx.href('trade')}">Trade Analyzer</a></div></div>`;
    if (!trades.length) return head + ui.empty('Noch keine Trades', 'data/trade-history.js ist leer oder fehlt für diese Liga.', '📋');
    const savedLbl = { dynasty: '🏗️ Dynasty', raw: '📊 Raw', winnow: '🏆 Win-Now' };
    const pctFmt = x => String(x).replace('.', ',');
    const sideOwner = players => { const n = [...new Set(players.filter(p => !p.isPick).map(p => p.ownerName).filter(Boolean))]; return n.length === 1 ? n[0] : ''; };
    const renderSide = (players, label, val) => `<div class="tr-nba-hside">
      <div class="tr-nba-bdhead"><span>${label}${sideOwner(players) ? ` · <small>von ${e(sideOwner(players))}</small>` : ''}</span><b>${fmt(val)}</b></div>
      ${players.map(p => (p.isPick
        ? `<div class="tr-nba-grprow"><span class="tr-nba-note">📋 R${p.round}</span><div class="tr-nba-main"><div class="tr-nba-name">${e(p.year)} · Runde ${e(p.round)}</div><div class="tr-nba-detail">${p.traded ? '→ von ' + e(p.origName) : e(p.currName)}</div></div><span class="tr-nba-val pk">~${fmt(p.baseValue || 0)}</span></div>`
        : `<div class="tr-nba-grprow">${nba.rankBadge(p.rank ?? null)}<div class="tr-nba-main"><div class="tr-nba-name">${e(p.name)}</div><div class="tr-nba-detail">${e(p.nba)} · ${e(p.ownerName)}</div></div></div>`)).join('')}
    </div>`;
    const cards = trades.map(t => {
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
    }).join('');
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
  MFHFB.nbaTrades = { TRADE_VALUE_TABLE, PICK_VALUES, playerAgeToday, ageMultiplier, slotAwarePickValue, pickTradeValue, dynastyValue, tradeSideValue, verdictOf, runCore, buildTFPlayerPool, buildTFPickPool, giveTotalOf, model };
})();
