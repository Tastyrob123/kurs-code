/* ---------- L4.2 · Die Systemkarte anlegen ---------- */
(function(){
  var N=window.__tsn4; if(!N) return;
  var I=N.IMG, P=function(x,y,w,h){ return N.pos(x,y,w,h,440); };
  /* Echte Spalten der Inventurliste (Notion-API 01.11.2026), Werte = Beispielwerte */
  var COLS=[{n:'Name',i:'title',t:'in',w:27},{n:'Lieferant',i:'rel',t:'rel',w:21},{n:'Gezählt Ltr./KG',i:'num',t:'in',w:18},{n:'Preis / KG',i:'rollup',t:'calc',w:15},{n:'Summe Monat',i:'formula',t:'calc',w:19}];
  var ROWS=[['z-tomate','Tomaten','Gemüse Bauer','12','2,40 €','28,80 €'],['z-parmesan','Parmesan','Feinkost Rossi','3','21,40 €','64,20 €'],
            ['z-mozzarella','Mozzarella','Feinkost Rossi','4','9,80 €','39,20 €'],['z-kartoffel','Kartoffeln','Gemüse Bauer','20','1,10 €','22,00 €']];
  var TX=20, TW=590, x=TX+0, tags='';
  COLS.forEach(function(c){ var w=TW*c.w/100; tags+='<div class="tgw" data-s="'+(c.t==='in'?2:c.t==='rel'?3:4)+'" style="'+P(x,40,w,24)+'"><em class="tg '+c.t+'">'+(c.t==='in'?'Eingabe':c.t==='rel'?'Verknüpfung':'Rechnet')+'</em></div>'; x+=w; });
  var table='<div class="nw tb" data-s="1" style="'+P(TX,74,TW,316)+'"><div class="nbar">'+N.nic('table')+'<span>Backoffice</span><span class="sep">/</span><span>Inventurliste</span></div>'+
    '<div class="dbt ntitle">Inventurliste</div>'+
    '<table class="nt"><colgroup>'+COLS.map(function(c){ return '<col style="width:'+c.w+'%">'; }).join('')+'</colgroup><tr>'+COLS.map(function(c){ return '<th><span>'+N.nic(c.i)+c.n+'</span></th>'; }).join('')+'</tr>'+
    ROWS.map(function(r){ return '<tr><td><span class="nm"><img src="'+I+r[0]+'.webp" alt="">'+r[1]+'</span></td><td class="lk">'+r[2]+'</td><td class="r">'+r[3]+'</td><td class="r">'+r[4]+'</td><td class="r">'+r[5]+'</td></tr>'; }).join('')+
    '</table><i class="scan"></i></div>';
  var file='<div class="tw fl" data-s="1" style="'+P(650,74,330,316)+'"><div class="tbar"><i></i><i></i><i></i><span>CLAUDE.md — Backoffice</span></div>'+
    '<div class="tl h" data-s="5">## Systemkarte</div><div class="tl" data-s="5">Inventurliste</div><div class="tl" data-s="5">  Eingabe: Name, Gezählt Ltr./KG</div><div class="tl" data-s="5">  Verknüpfung: Lieferant</div><div class="tl" data-s="5">  Rechnet: Preis / KG (Rollup),</div><div class="tl" data-s="5">  Summe Monat (Formel), nie schreiben</div>'+
    '<div class="tl h sp6" data-s="6">## Regeln</div><div class="tl" data-s="6">- Zahlen nur aus Notion-Feldern</div><div class="tl" data-s="6">- Vorschau vor jeder Änderung</div><div class="tl" data-s="6">- Nichts löschen</div></div>'+
    '<div class="rd" data-s="7" style="'+P(650,400,330,30)+'">Wird bei jedem Start gelesen</div>';
  var lines='<svg class="lines" viewBox="0 0 1000 440" preserveAspectRatio="none"><path class="ln" pathLength="1" data-s="5" d="M612 230 H648"/><path class="sp" pathLength="1" d="M612 230 H648"/></svg>';
  var html='<div class="sc"><div class="st" style="aspect-ratio:1000/440">'+lines+tags+table+file+'</div></div>';
  var css=N.nCSS('tsn4a2anim')+`
  #tsn4a2anim .tb{position:relative}
  #tsn4a2anim .dbt{font-size:24px;line-height:30px;padding:2px 14px 10px}
  #tsn4a2anim table.nt{font-size:12.5px}
  #tsn4a2anim table.nt th{height:32px;font-size:12.5px}
  #tsn4a2anim table.nt td{height:34px}
  #tsn4a2anim .nm{display:inline-flex;align-items:center;gap:7px}
  #tsn4a2anim .nm img{width:18px;height:18px;border-radius:4px;object-fit:cover}
  #tsn4a2anim td.lk{text-decoration:underline;text-decoration-color:rgba(255,255,243,.25);text-underline-offset:3px}
  #tsn4a2anim .tgw{display:flex;justify-content:center;align-items:center}
  #tsn4a2anim .tg{font:700 9.5px/1 ${N.SANS};letter-spacing:.1em;text-transform:uppercase;font-style:normal;padding:5px 7px;border-radius:5px}
  #tsn4a2anim .tg.in{color:#05060b;background:#c7b489}
  #tsn4a2anim .tg.rel{color:#efe6d2;border:1px solid rgba(199,180,137,.6)}
  #tsn4a2anim .tg.calc{color:#fff;border:1px solid rgba(255,255,255,.4)}
  #tsn4a2anim .scan{position:absolute;left:0;top:44px;width:2px;height:270px;background:linear-gradient(rgba(255,255,255,0),rgba(255,255,255,.8),rgba(255,255,255,0));opacity:0}
  #tsn4a2anim.scanning .scan{animation:tsn4a2scan 3.2s cubic-bezier(.45,.05,.55,.95) 1 both}
  @keyframes tsn4a2scan{0%{opacity:0;transform:translateX(0)}8%{opacity:1}92%{opacity:1}100%{opacity:0;transform:translateX(586px)}}
  #tsn4a2anim .fl .tl{font-size:11.5px;line-height:1.75}
  #tsn4a2anim .fl .h{font-weight:700}#tsn4a2anim .fl .sp6{margin-top:8px}
  #tsn4a2anim .rd{display:flex;align-items:center;justify-content:center;border-radius:999px;border:1px solid rgba(199,180,137,.5);background:rgba(199,180,137,.1);font-size:12px;color:#efe6d2}
  `;
  N.page({
    key:'tsn4a2', re:/\/(?:lektionen\/)?die-systemkarte-anlegen\/?$/,
    eyebrow:'L 4.2', title:'Die <span class="ts-gold">Systemkarte</span>', alt:'Claude lernt die Backoffice-Vorlage kennen',
    intro:
      '<p>Claude sieht jetzt deinen Workspace. Was es noch nicht weiß, ist, wie deine Vorlage gebaut ist. Welche Zahl trägst du von Hand ein, welche rechnet Notion selbst, und welche Datenbank hängt an welcher? Ohne dieses Wissen sucht Claude bei jeder Frage neu, und im schlimmsten Fall rechnet es eine Zahl selbst, die dein System längst geprüft ausrechnet.</p>'+
      '<p>Deshalb lassen wir Claude die Vorlage einmal gründlich lesen und daraus eine <b>Systemkarte</b> schreiben. Die legen wir zusammen mit ein paar festen Regeln in das Briefing deines Backoffice-Ordners, und ab dann kennt Claude dein System bei jedem Start.</p>',
    anim:{
      id:'tsn4a2anim', eyebrow:'Einmal lesen, immer wissen', title:'Was du einträgst, und was <span class="g">rechnet</span>.',
      sub:'Claude geht jede Spalte deiner Vorlage durch und schreibt auf, welche du füllst und welche Notion selbst berechnet.',
      html:html, css:css,
      beats:[
        {t:200, s:1, cap:'Links eine Datenbank aus deiner Vorlage, die Inventurliste, so wie sie in Notion aussieht. Rechts die CLAUDE.md, das Briefing, das Claude bei jedem Start in deinem Backoffice-Ordner liest.'},
        {t:2800, s:2, cap:'Claude liest jede Spalte. <b>Eingabefelder</b> sind die, die du von Hand füllst, hier der Name und die gezählte Menge.'},
        {t:5600, s:3, cap:'<b>Verknüpfungen</b> verbinden die Datenbanken miteinander, hier die Inventur mit dem Lieferanten. Sie schreibt Claude nur nach deiner Freigabe.'},
        {t:8000, s:4, cap:'Alles, was eine Formel oder ein Rollup ist, <b>rechnet Notion selbst</b>. Der Preis je Kilo kommt per Rollup aus einer anderen Datenbank, die Summe aus einer Formel. Diese Felder liest Claude nur.'},
        {t:10600, s:5, cap:'Daraus entsteht die Systemkarte: je Datenbank eine kurze Liste, was Eingabe ist, was verknüpft ist und was rechnet.'},
        {t:13200, s:6, cap:'Darunter stehen deine Regeln. Zahlen kommen nur aus Notion, vor jeder Änderung gibt es eine Vorschau, und gelöscht wird nichts.'},
        {t:15600, s:7, cap:'Die Datei liegt in deinem Backoffice-Ordner und wird bei jedem Start gelesen. Du erklärst dein System ein einziges Mal.'}
      ],
      reset:function(el){ el.classList.remove('k2','k3','k4','scanning'); },
      onBeat:function(el,i,T,jump){
        if(i===1){ if(!jump){ el.classList.remove('scanning'); void el.offsetWidth; el.classList.add('scanning'); } T.at(jump?0:900,function(){ el.classList.add('k2'); }); }
        if(i===2) el.classList.add('k3');
        if(i===3) el.classList.add('k4');
      },
      final:function(el){ el.classList.add('k2','k3','k4'); }
    },
    secs:[
      {id:'tsn4a2-karte', html:
        '<div class="tsn4-eb">Schritt eins</div>'+
        '<h3>Claude liest deine <span class="g">Vorlage</span></h3>'+
        '<p class="lead">Wir starten Claude Code im Ordner „Backoffice“, den du dir in der Einleitung angelegt hast. Alles, was wir in diesem Modul in die CLAUDE.md schreiben, gilt dann für jede Sitzung in diesem Ordner.</p>'+
        '<p><span class="gl">Warum Claude das wissen muss.</span> Ein Feld wie der Wareneinsatz in Prozent ist in deiner Vorlage eine Formel, die über Zutaten, Rezepturen und Portionsgrößen hinweg rechnet. Fragt man Claude ohne Systemkarte nach dem Wareneinsatz, kann es passieren, dass es die Zahl aus einzelnen Preisen selbst zusammenrechnet. Das Ergebnis sieht plausibel aus und weicht trotzdem von deiner geprüften Formel ab. Mit der Systemkarte weiß Claude, dass diese Zahl fertig in Notion steht und nur gelesen wird.</p>'+
        N.cmd('Prompt in Claude Code', 'Lies meine Backoffice-Vorlage in Notion und schreib mir daraus eine Systemkarte.\n\nÖffne dafür jede Datenbank im Backoffice und notiere je Datenbank:\n- wofür sie da ist, in einem Satz\n- die Felder, die ich von Hand eintrage\n- die Verknüpfungen und wohin sie zeigen\n- die Felder, die Notion selbst rechnet (Formel und Rollup)\n\nZeig mir die Systemkarte zuerst hier im Chat. Schreib sie erst nach meinem Okay als Abschnitt „Systemkarte“ in die CLAUDE.md in diesem Ordner. Ändere in Notion nichts.')+
        '<p>Bei einer vollständigen Vorlage liest Claude eine ganze Reihe von Datenbanken, und das dauert ein paar Minuten. Lass es in Ruhe durchlaufen und schau dir die Karte danach genau an. Stimmt ein Feld nicht, sag es Claude in einem Satz, und es korrigiert die Karte, bevor sie in die Datei geht.</p>'
      },
      {id:'tsn4a2-regeln', html:
        '<div class="tsn4-eb">Schritt zwei</div>'+
        '<h3>Die Regeln für dein <span class="g">Backoffice</span></h3>'+
        '<p class="lead">Unter die Systemkarte kommen die Regeln, die in diesem Modul für jede Arbeit gelten. Du schreibst sie einmal hinein, und Claude liest sie bei jedem Start mit.</p>'+
        N.cmd('Abschnitt für die CLAUDE.md', '## Regeln für mein Backoffice\n- Zahlen kommen ausschließlich aus den Feldern meiner Notion-Datenbanken. Fehlt ein Wert, schreibst du „fehlt“ und nennst Datenbank und Eintrag. Du schätzt nichts und ergänzt nichts aus Erfahrungswerten.\n- Zu jeder Zahl, die du nennst, gibst du Datenbank und Eintrag an.\n- Felder, die Notion rechnet (Formel, Rollup), schreibst du nie. Du liest nur ihr Ergebnis.\n- Vor jeder Änderung zeigst du mir eine Vorschau: Datenbank, Eintrag, Feld, alter Wert, neuer Wert. Geschrieben wird erst, wenn ich „Ja, schreiben“ antworte.\n- Betrifft eine Änderung mehr als zwanzig Einträge, nennst du mir vorher die Gesamtzahl.\n- Du löschst nichts. Soll etwas weg, sagst du es mir, und ich entscheide.')+
        '<p><span class="gl">Die erste Regel ist die wichtigste.</span> Ein Sprachmodell lässt ungern eine Lücke stehen. Fehlt bei drei Zutaten der Preis, liegt es nahe, einen plausiblen Wert anzunehmen und weiterzurechnen. Eine Kalkulation auf einem geratenen Einkaufspreis ist schlimmer als gar keine, weil du ihr vertraust. Deshalb muss jede Lücke als Lücke auf dem Tisch landen.</p>'+
        '<p><span class="gl">Die Vorschau-Regel schützt dich beim Schreiben.</span> Was sie im Alltag bedeutet und wie du sie prüfst, schauen wir uns in Lektion vier an. Hier legen wir nur fest, dass es sie gibt.</p>'
      },
      {id:'tsn4a2-rechte', html:
        '<div class="tsn4-eb">Schritt drei</div>'+
        '<h3>Lesen frei, Schreiben mit <span class="g">Rückfrage</span></h3>'+
        '<p class="lead">Regeln in der CLAUDE.md sind Anweisungen. Zusätzlich kannst du Claude Code technisch festlegen, welche Notion-Werkzeuge es ohne Nachfrage nutzen darf, welche nur mit deinem Klick und welche gar nicht.</p>'+
        '<p>Dafür legst du im Ordner Backoffice eine Datei <span class="tsn4-mono">.claude/settings.json</span> an. Am einfachsten sagst du Claude, dass es die Datei mit diesem Inhalt anlegen soll. Die Namen der Werkzeuge stammen aus der Notion-Dokumentation.</p>'+
        N.cmd('.claude/settings.json im Ordner Backoffice', '{\n  "permissions": {\n    "allow": [\n      "mcp__notion__notion-search",\n      "mcp__notion__notion-fetch",\n      "mcp__notion__notion-query-data-sources"\n    ],\n    "ask": [\n      "mcp__notion__notion-create-pages",\n      "mcp__notion__notion-update-page",\n      "mcp__notion__notion-update-data-source",\n      "mcp__notion__notion-duplicate-page"\n    ],\n    "deny": [\n      "mcp__notion__notion-delete-pages",\n      "mcp__notion__notion-delete-databases"\n    ]\n  }\n}')+
        '<table class="tsn4-tbl"><tr><th>Liste</th><th>Was passiert</th></tr>'+
          '<tr><td><b>allow</b></td><td>Suchen, öffnen und abfragen läuft ohne Nachfrage. Das sind die Werkzeuge, die nur lesen.</td></tr>'+
          '<tr><td><b>ask</b></td><td>Anlegen, ändern und duplizieren fragt dich jedes Mal, bevor es passiert, auch wenn Claude dir vorher schon eine Vorschau gezeigt hat.</td></tr>'+
          '<tr><td><b>deny</b></td><td>Seiten und Datenbanken in den Papierkorb legen ist gesperrt. Claude bekommt diese Werkzeuge gar nicht erst angeboten.</td></tr>'+
        '</table>'+
        '<p class="tsn4-note">Die Namen gelten, wenn du den Anschluss wie in Lektion eins unter dem Namen „notion“ eingehängt hast. Über das Notion-Plugin heißen sie anders, dann fragst du Claude nach den genauen Namen.</p>'+
        '<div class="tsn4-err">'+
          '<div><b>Die Systemkarte veraltet.</b> Fügst du der Vorlage eine Spalte hinzu, kennt Claude sie nicht. Sag nach jeder Änderung an der Vorlage „Aktualisiere die Systemkarte für die Datenbank …“.</div>'+
          '<div><b>Die Karte wird zu lang.</b> Ein Briefing sollte kurz bleiben, das kennst du aus Modul drei. Lass Claude je Datenbank nur die Felder aufnehmen, mit denen du wirklich arbeitest.</div>'+
        '</div>'
      }
    ],
    emp:{ id:'tsn4a2emp', kind:'Einrichtung', animTitle:'Deine Vorlage in', animGold:'vier Schritten',
      steps:['Ordner öffnen','Karte schreiben lassen','Regeln einfügen','Rechte festlegen'],
      intro:'Diese Einrichtung machst du einmal, und sie zahlt sich in jeder Lektion danach aus.',
      points:[
        'Starte Claude Code immer im <b>Ordner Backoffice</b>. Nur dort gelten Systemkarte, Regeln und Rechte.',
        'Prüf die Systemkarte, bevor sie in die Datei geht. Ein falsch eingeordnetes Feld ist <b>vor dem Speichern</b> in einem Satz korrigiert.',
        'Übernimm die Regeln <b>wörtlich</b>. Sie sind so formuliert, dass Claude sie ohne Spielraum anwenden kann.',
        'Lass das Löschen <b>gesperrt</b>. Was weg soll, entfernst du selbst in Notion.'
      ]
    },
    learn:[
      'Du lässt Claude deine <b>Vorlage lesen</b> und daraus eine Systemkarte schreiben.',
      'Du unterscheidest <b>Eingabefelder</b>, Verknüpfungen und Felder, die Notion rechnet.',
      'Du hast die <b>Regeln</b> gegen geratene Zahlen und für die Vorschau in deiner CLAUDE.md.',
      'Du legst fest, welche Notion-Werkzeuge Claude <b>frei, mit Rückfrage oder gar nicht</b> nutzt.'
    ],
    next:'/lektionen/dein-backoffice-befragen'
  });
})();

/* ---------- L4.3 · Dein Backoffice befragen ---------- */
(function(){
  var N=window.__tsn4; if(!N) return;
  var I=N.IMG;
  /* Beispielwerte, Wareneinsatz in Prozent. Pilz-Ravioli ohne Wert: Preis der Steinpilze fehlt. */
  var D=[{n:'Burrata, Tomate, Basilikum',img:'g-burrata',v:24.1,e:'Eintrag 4'},{n:'Lachs auf Erbsencreme',img:'g-lachs',v:28.4,e:'Eintrag 11'},
         {n:'Pilz-Ravioli',img:'g-pilz-ravioli',v:null,e:'Eintrag 7'},{n:'Rinderfilet, Spargel',img:'g-rinderfilet',v:34.2,e:'Eintrag 15'},{n:'Jakobsmuscheln',img:'g-jakobsmuscheln',v:31.5,e:'Eintrag 9'}];
  var SORT=[3,4,1,0,2];   /* Zielreihenfolge nach Wert absteigend, Luecke ans Ende */
  var rows=D.map(function(d,i){
    return '<div class="rw" data-i="'+i+'" style="--r:'+i+'"><div class="ri cardx"><span class="md"><img src="'+I+d.img+'.webp" alt="" loading="lazy"></span>'+
      '<span class="nm"><span class="nt2">'+d.n+'</span><em class="src">Beleg: '+d.e+'</em></span>'+
      (d.v==null?'<span class="miss">fehlt: Preis Steinpilze</span>':'<span class="bar"><i style="--w:'+(d.v/40*100)+'%"></i></span><b class="val" data-v="'+d.v+'">'+N.pct(d.v)+'</b>')+'</div></div>';
  }).join('');
  var html='<div class="st flow">'+
    '<div class="q cardx" data-s="1"><span class="qk">Deine Frage an DB XI · Gerichte &amp; Getränke</span><span class="qt mono">Welche Gerichte haben den höchsten Wareneinsatz in Prozent? Nimm die Werte nur aus Notion.</span></div>'+
    '<div class="list" data-s="1">'+rows+'</div></div>';
  var css=`
  #tsn4a3anim .st.flow{max-width:760px;margin:0 auto}
  #tsn4a3anim .q{display:flex;flex-direction:column;gap:8px;padding:16px 20px;margin:0 0 22px}
  #tsn4a3anim .qk{font:600 9.5px/1 ${N.SANS};letter-spacing:.14em;text-transform:uppercase;color:#c7b489}
  #tsn4a3anim .qt{font-size:13px;line-height:1.6;color:#efe6d2}
  #tsn4a3anim .list{position:relative;height:${5*72}px}
  #tsn4a3anim .rw{position:absolute;left:0;right:0;top:0;height:62px;transform:translateY(calc(var(--r)*72px));transition:transform 1s ${N.EASE}}
  #tsn4a3anim .ri{height:62px;display:flex;align-items:center;gap:14px;padding:0 18px 0 10px}
  #tsn4a3anim .ri .md{width:46px;height:46px;flex:0 0 46px;display:block}
  #tsn4a3anim .nm{flex:1;display:flex;flex-direction:column;gap:4px;font:600 14px/1.2 ${N.SANS};color:#fff;min-width:0}
  #tsn4a3anim .nt2,#tsn4a3anim .src{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  #tsn4a3anim .src{font-style:normal;font:600 9.5px/1 ${N.SANS};letter-spacing:.1em;text-transform:uppercase;color:#c7b489;opacity:0;transition:opacity .6s cubic-bezier(.16,1,.3,1)}
  #tsn4a3anim.k5 .src{opacity:1}
  #tsn4a3anim .bar{width:150px;height:6px;border-radius:3px;background:rgba(255,255,255,.08);overflow:hidden}
  #tsn4a3anim .bar i{display:block;height:100%;width:var(--w);border-radius:3px;background:linear-gradient(90deg,#d8c9ab,#c7b489);transition:width 1.1s ${N.EASE}}
  #tsn4a3anim.js:not(.k2) .bar i{width:0}
  #tsn4a3anim .val{width:72px;text-align:right;font:700 15px/1 ${N.SANS};color:#efe6d2;font-variant-numeric:tabular-nums}
  #tsn4a3anim.js:not(.k2) .val{opacity:0}
  #tsn4a3anim .miss{padding:6px 10px;border-radius:8px;border:1px solid rgba(227,37,82,.55);background:rgba(227,37,82,.08);font:600 11.5px/1 ${N.SANS};color:#fff;transition:opacity .6s cubic-bezier(.16,1,.3,1),box-shadow .6s cubic-bezier(.16,1,.3,1)}
  #tsn4a3anim.js:not(.k4) .miss{opacity:0}
  #tsn4a3anim.k4 .miss{box-shadow:0 0 22px rgba(227,37,82,.25)}
  #tsn4a3anim .rw.top .ri{border-color:rgba(199,180,137,.62);background:linear-gradient(rgba(199,180,137,.075),rgba(199,180,137,.075)),#05060b}
  @media(max-width:620px){ #tsn4a3anim .bar{width:70px} #tsn4a3anim .nm{font-size:12.5px} }
  `;
  function order(el,sorted){
    var rws=el.querySelectorAll('.rw');
    Array.prototype.forEach.call(rws,function(r){ var i=+r.getAttribute('data-i'); r.style.setProperty('--r', sorted?SORT.indexOf(i):i); r.classList.toggle('top', sorted && SORT.indexOf(i)===0); });
  }
  N.page({
    key:'tsn4a3', re:/\/(?:lektionen\/)?dein-backoffice-befragen\/?$/,
    eyebrow:'L 4.3', title:'Dein System <span class="ts-gold">befragen</span>', alt:'Auswertungen aus dem Notion-Backoffice in normaler Sprache',
    intro:
      '<p>Dein Backoffice weiß eine Menge über deinen Betrieb. Es kennt den Preis jeder Zutat, ihren Anteil an jeder Portion, den Wareneinsatz jedes Gerichts und den Lieferanten dahinter. Nur liegt dieses Wissen über viele Datenbanken verteilt, und die Frage, die dich wirklich interessiert, steht in keiner einzelnen Ansicht.</p>'+
      '<p>In dieser Lektion stellen wir diese Fragen in normaler Sprache. Wir lesen nur, wir ändern nichts. Und wir fragen so, dass jede Zahl, die zurückkommt, <b>belegt</b> ist und keine einzige geschätzt.</p>',
    anim:{
      id:'tsn4a3anim', flow:true, eyebrow:'Eine Frage, eine Antwort', title:'Die Karte <span class="g">sortiert sich</span>.',
      sub:'Du stellst eine Frage in normaler Sprache. Claude liest die fertigen Werte aus deinen Gerichten, ordnet sie und meldet Lücken, statt sie zu füllen.',
      html:html, css:css, note:'Beispielwerte',
      beats:[
        {t:200, s:1, cap:'Fünf Gerichte aus deiner Karte, so wie sie in der Datenbank stehen. Oben die Frage, die du Claude stellst.'},
        {t:2800, s:1, cap:'Claude liest den Wareneinsatz in Prozent, der in jedem Gericht schon fertig ausgerechnet steht. Es rechnet nichts selbst nach.'},
        {t:5600, s:1, cap:'Dann ordnet es die Gerichte nach dem Wert. Ganz oben steht das Gericht, bei dem der Einkauf den größten Teil des Preises ausmacht.'},
        {t:8400, s:1, cap:'Bei den Pilz-Ravioli fehlt der Preis der Steinpilze. Statt einen Wert anzunehmen, meldet Claude die Lücke und sagt dir, wo sie sitzt.'},
        {t:11200, s:1, cap:'Zu jeder Zahl steht die Herkunft: Datenbank und Eintrag. So prüfst du jeden Wert mit einem Klick in Notion nach.'}
      ],
      reset:function(el){ el.classList.remove('k2','k3','k4','k5'); order(el,false); Array.prototype.forEach.call(el.querySelectorAll('.val'),function(v){ v.textContent=N.pct(0); }); },
      onBeat:function(el,i,T,jump){
        if(i===1){ el.classList.add('k2'); Array.prototype.forEach.call(el.querySelectorAll('.val'),function(v,k){ if(jump) v.textContent=N.pct(+v.getAttribute('data-v')); else N.count(v,+v.getAttribute('data-v'),N.pct,k*90,1000); }); }
        if(i===2){ el.classList.add('k3'); order(el,true); }
        if(i===3) el.classList.add('k4');
        if(i===4) el.classList.add('k5');
      },
      final:function(el){ el.classList.add('k2','k3','k4','k5'); order(el,true); Array.prototype.forEach.call(el.querySelectorAll('.val'),function(v){ v.textContent=N.pct(+v.getAttribute('data-v')); }); }
    },
    secs:[
      {id:'tsn4a3-fragen', html:
        '<div class="tsn4-eb">Vier Fragen für den Anfang</div>'+
        '<h3>Was du dein Backoffice <span class="g">fragen kannst</span></h3>'+
        '<p class="lead">Diese vier Fragen bringen in fast jedem Betrieb etwas ans Licht, das im Alltag untergeht. Kopier sie, setz deine Werte ein und lass sie laufen.</p>'+
        '<h4>Welches Gericht frisst deine <span class="g">Marge</span>?</h4>'+
        '<p>Die Liste, für die du sonst filterst, sortierst, exportierst und in einer Tabelle nachrechnest.</p>'+
        N.cmd('Prompt', 'Lies meine Gerichte & Getränke in Notion. Liste mir die zehn Gerichte mit dem höchsten Wareneinsatz in Prozent auf, mit Verkaufspreis, Wareneinsatz in Euro und in Prozent und dem Deckungsbeitrag I. Sortiere absteigend nach Prozent. Nimm alle Werte aus den Feldern der Datenbank und rechne nichts selbst. Ändere nichts.')+
        '<h4>Wo steckt eine <span class="g">Zutat</span> überall drin?</h4>'+
        '<p>Die Frage, bevor du mit einem Lieferanten über einen Preis sprichst oder eine Zutat ersetzt.</p>'+
        N.cmd('Prompt', 'In welchen Rezepturen und Gerichten steckt die Zutat Burrata? Nenne mir je Gericht die Menge pro Portion und den Wareneinsatz in Prozent, beides aus Notion. Ändere nichts.')+
        '<h4>Wo hat dein System <span class="g">Lücken</span>?</h4>'+
        '<p>Die Frage, die dein Küchenchef stellen sollte, bevor er einer Kalkulation traut.</p>'+
        N.cmd('Prompt', 'Prüf mein Backoffice auf Lücken: Zutaten ohne Einkaufspreis, Rezepturen ohne Zutaten und Gerichte ohne Verkaufspreis. Gib mir je Lücke Datenbank und Eintrag. Rate keine Werte und ändere nichts.')+
        '<h4>Welche Gerichte liegen unter deinem <span class="g">Ziel</span>?</h4>'+
        '<p>Setz statt der Klammer deine eigene Grenze ein, zum Beispiel den Wareneinsatz, ab dem ein Gericht für dich zu teuer ist.</p>'+
        N.cmd('Prompt', 'Zeig mir alle Gerichte, deren Wareneinsatz in Prozent über [deine Grenze, zum Beispiel 32] Prozent liegt. Ordne sie nach Kategorie und nenne zu jedem Gericht die drei Zutaten mit dem größten Anteil am Wareneinsatz. Alle Zahlen aus Notion, ändere nichts.')
      },
      {id:'tsn4a3-wie', html:
        '<div class="tsn4-eb">So fragst du</div>'+
        '<h3>Drei Angaben machen die <span class="g">Antwort</span> brauchbar</h3>'+
        '<p class="lead">Jede der Fragen oben hat dieselben drei Bestandteile. Jeder kostet dich einen halben Satz und spart dir eine Rückfrage.</p>'+
        '<div class="tsn4-cards c3">'+
          '<div class="tsn4-card"><span class="k">Eins</span><div class="n">Die Datenbank</div><hr><p>„Lies meine Gerichte & Getränke“ ist präziser als „schau in mein Notion“. Claude muss nicht suchen, und die Antwort kommt schneller.</p></div>'+
          '<div class="tsn4-card"><span class="k">Zwei</span><div class="n">Die Form</div><hr><p>Sag, ob du eine Liste, eine Tabelle oder eine kurze Zusammenfassung willst, sortiert wonach und mit welchen Spalten.</p></div>'+
          '<div class="tsn4-card"><span class="k">Drei</span><div class="n">Die Absicht</div><hr><p>„Ändere nichts“ am Ende ist die günstigste Versicherung, die du hast, solange du nur auswerten willst.</p></div>'+
        '</div>'+
        '<p style="margin-top:20px"><span class="gl">Die Merkregel:</span> Datenbank, Form, Absicht. Und wenn eine Zahl in Notion schon als Formel existiert, lässt du sie dir ausgeben statt neu berechnen. Die Formel in deinem System ist geprüft, eine neu gerechnete Zahl ist es nicht.</p>'
      },
      {id:'tsn4a3-tarif', html:
        '<div class="tsn4-eb">Gut zu wissen</div>'+
        '<h3>Was dein Notion-Tarif dabei <span class="g">ausmacht</span></h3>'+
        '<p class="lead">Notion stellt für das Auslesen von Datenbanken verschiedene Werkzeuge bereit, und nicht alle stehen in jedem Tarif gleich zur Verfügung.</p>'+
        '<table class="tsn4-tbl"><tr><th>Was Claude tut</th><th>Free und Plus</th><th>Business und Enterprise</th></tr>'+
          '<tr><td>Eine Datenbank oder eine gespeicherte Ansicht lesen</td><td>möglich</td><td>möglich</td></tr>'+
          '<tr><td>Eine Datenbank gezielt filtern und abfragen</td><td>mit einem Kontingent je Workspace</td><td>ohne Kontingent, mit Notion AI</td></tr>'+
          '<tr><td>Mehrere Datenbanken in einer Abfrage verbinden</td><td>nicht verfügbar</td><td>möglich, mit Notion AI</td></tr>'+
        '</table>'+
        '<p>Für dich heißt das: Auch ohne Business-Tarif bekommst du deine Antworten. Claude liest dann Datenbank für Datenbank und setzt das Ergebnis selbst zusammen. Das dauert länger und verbraucht mehr von deinem Claude-Kontingent. Frag deshalb lieber nach einer Kategorie als nach allem auf einmal, also zum Beispiel nach den Hauptgängen statt nach der ganzen Karte.</p>'+
        '<p class="tsn4-note">Stand November 2026, Quelle: Notion-Dokumentation zu den MCP-Werkzeugen. Welche Werkzeuge in deinem Workspace laufen, fragst du Claude direkt: „Welche Notion-Werkzeuge kannst du in meinem Tarif nutzen?“</p>'
      },
      {id:'tsn4a3-datei', html:
        '<div class="tsn4-eb">Was Claude Code zusätzlich kann</div>'+
        '<h3>Die Antwort als <span class="g">Datei</span> mitnehmen</h3>'+
        '<p class="lead">Notion AI aus Modul zwei beantwortet dir Fragen direkt in Notion. Claude Code kann zusätzlich etwas, das in Notion nicht geht: Es legt dir das Ergebnis als Datei auf deinen Rechner.</p>'+
        '<p>Das ist der Punkt, an dem sich der Weg über Claude Code lohnt. Die Liste für deinen Steuerberater, die Übersicht für die Küchenbesprechung, die Tabelle, die du deinem Lieferanten schickst. Du bekommst sie als Excel-Datei in deinen Backoffice-Ordner.</p>'+
        N.cmd('Prompt', 'Erstelle aus meinen Gerichten & Getränken eine Excel-Datei „Wareneinsatz Hauptgänge.xlsx“ in diesem Ordner: Name, Verkaufspreis, Wareneinsatz in Euro und in Prozent, Deckungsbeitrag I. Nur Hauptgänge, sortiert nach Wareneinsatz in Prozent. Alle Werte aus Notion, ändere in Notion nichts.')
      }
    ],
    emp:{ id:'tsn4a3emp', kind:'Nutzung', animTitle:'Deine', animGold:'Fragerunde',
      steps:['Fragen sammeln','Festen Tag wählen','Nur lesen','Eine Zahl prüfen'],
      intro:'So machst du aus einzelnen Fragen eine feste Gewohnheit, ohne dass sie dich Zeit kostet.',
      points:[
        'Sammle die Fragen, die du wirklich brauchst, in einer <b>Notiz</b>. Die vier Fragen oben sind ein guter Anfang.',
        'Stell sie an einem <b>festen Tag</b>, zum Beispiel montags vor dem Service. In Lektion acht lässt du sie dann von allein laufen.',
        'Schließ jede Auswertung mit <b>„Ändere nichts“</b> ab, solange du nur liest.',
        'Prüf bei jeder neuen Frage <b>eine Zahl</b> von Hand in Notion nach. Nach ein paar Wochen weißt du, welchen Antworten du ohne Gegenprobe trauen kannst.'
      ]
    },
    learn:[
      'Du stellst <b>Auswertungen</b> in normaler Sprache, über mehrere Datenbanken hinweg.',
      'Du bekommst <b>belegte Zahlen</b>: jede mit Datenbank und Eintrag, jede Lücke als Lücke.',
      'Du fragst mit <b>Datenbank, Form und Absicht</b> und lässt fertige Formeln lesen statt neu rechnen.',
      'Du weißt, was dein <b>Notion-Tarif</b> ausmacht, und nimmst Ergebnisse als Datei mit.'
    ],
    next:'/lektionen/datenbanken-automatisch-aktualisieren'
  });
})();
