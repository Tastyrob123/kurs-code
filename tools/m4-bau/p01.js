/* ---------- L4.0 · Dein Backoffice bekommt Haende ---------- */
(function(){
  var N=window.__tsn4; if(!N) return;
  var I=N.IMG, R=N.RING, P=function(x,y,w,h){ return N.pos(x,y,w,h,470); };
  var MED=[
    {x:140,img:R+'lieferanten.webp',l:'Lieferanten'},
    {x:320,img:R+'inventar.webp',l:'Inventur'},
    {x:500,img:I+'z-tomate.webp',l:'Zutaten'},
    {x:680,img:R+'rezepte.webp',l:'Rezepturen'},
    {x:860,img:I+'g-burrata.webp',l:'Gerichte'}
  ];
  var meds=MED.map(function(m,i){
    return '<div class="md br m'+i+'" data-s="1" style="'+P(m.x-55,40,110,110)+'"><img src="'+m.img+'" alt="'+m.l+'" loading="lazy" decoding="async"></div>'+
           '<div class="lbl" data-s="1" style="'+P(m.x-80,158,160,16)+'">'+m.l+'</div>';
  }).join('');
  var gaps=[[195,265],[375,445],[555,625],[735,805]];
  var chain=gaps.map(function(g,i){ return '<path class="ln" pathLength="1" data-s="1" d="M'+g[0]+' 95 H'+g[1]+'"/><path class="sp" pathLength="1" style="animation-delay:'+(i*0.55)+'s" d="M'+g[0]+' 95 H'+g[1]+'"/>'; }).join('');
  var HL=[
    {d:'M185 300 C185 262 320 262 320 220', s:3},
    {d:'M500 300 C500 262 680 262 680 220', s:5},
    {d:'M815 300 C815 262 860 262 860 220', s:6}
  ];
  var hl=HL.map(function(h,i){ return '<path class="ln" pathLength="1" data-s="'+h.s+'" d="'+h.d+'"/><path class="sp" pathLength="1" style="animation-delay:'+(1+i*0.9)+'s" d="'+h.d+'"/>'; }).join('');
  var CARDS=[
    {x:60, k:'Claude Code', t:'Holt, was von außen kommt', c:'c0'},
    {x:375,k:'Notion Agent', t:'Bereitet im Hintergrund vor', c:'c1'},
    {x:690,k:'Automation', t:'Macht immer exakt dasselbe', c:'c2'}
  ];
  var cards=CARDS.map(function(c){
    return '<div class="cardx hc '+c.c+'" data-s="1" style="'+P(c.x,300,250,112)+'"><span class="hk">'+c.k+'</span><span class="ht">'+c.t+'</span></div>';
  }).join('');
  var html='<div class="sc"><div class="st" style="aspect-ratio:1000/470">'+
    '<svg class="lines" viewBox="0 0 1000 470" preserveAspectRatio="none">'+chain+hl+'</svg>'+meds+cards+
    '<div class="paper" data-s="3" style="'+P(236,6,40,54)+'"><i></i><i></i><i></i><i></i></div>'+
    '<div class="pw" data-s="3" style="'+P(220,186,200,28)+'"><span class="pill">Neue Preise</span></div>'+
    '<div class="pw" data-s="5" style="'+P(580,186,200,28)+'"><span class="pill">Vorschlag</span></div>'+
    '<div class="pw" data-s="6" style="'+P(760,186,200,28)+'"><span class="pill">Datum gesetzt</span></div>'+
    '<div class="you" data-s="1" style="'+P(392,424,216,34)+'"><b>Du</b> prüfst und gibst frei</div>'+
  '</div></div>';
  var css=`
  #tsn4a0anim .hc{display:flex;flex-direction:column;justify-content:center;padding:0 22px;gap:8px}
  #tsn4a0anim .hk{font-family:${N.DISP};font-weight:600;font-size:19px;color:#fff}
  #tsn4a0anim .ht{font-size:13.5px;line-height:1.4;color:rgba(255,255,255,.86)}
  #tsn4a0anim .paper{border-radius:5px;background:linear-gradient(#efe6d2,#d8c9ab);box-shadow:0 14px 28px -10px rgba(0,0,0,.9);padding:9px 7px;display:flex;flex-direction:column;gap:5px;z-index:3}
  #tsn4a0anim .paper i{display:block;height:3px;border-radius:2px;background:rgba(5,6,11,.32)}
  #tsn4a0anim .paper i:nth-child(2){width:70%}#tsn4a0anim .paper i:nth-child(4){width:55%}
  #tsn4a0anim.js .paper{transform:translate(-220px,60px) rotate(-16deg)}
  #tsn4a0anim .pw{display:flex;justify-content:center;align-items:center;z-index:4}
  #tsn4a0anim .you{display:flex;align-items:center;justify-content:center;gap:8px;border-radius:999px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.03);font-size:13.5px;color:rgba(255,255,255,.86);transition:all .7s cubic-bezier(.16,1,.3,1)}
  #tsn4a0anim .you.on{border-color:rgba(199,180,137,.7);background:rgba(199,180,137,.14);color:#efe6d2;box-shadow:0 0 26px rgba(199,180,137,.22)}
  #tsn4a0anim .you b{color:#c7b489;font-family:${N.DISP};font-size:15px}
  `;
  function lit(el,sel,on){ var x=el.querySelector(sel); if(x) x.classList.toggle('lit',on); }
  N.page({
    key:'tsn4a0', re:/\/(?:lektionen\/)?dein-backoffice-bekommt-h[a-z]*nde\/?$/,
    eyebrow:'L 4.0', title:'Hände für dein <span class="ts-gold">System</span>', alt:'Claude Code und Notion Agents arbeiten im Backoffice',
    intro:
      '<p>Dein Backoffice steht. Die Vorlage aus Modul zwei ist befüllt, die Zutaten hängen an ihren Lieferanten, und jedes Gericht rechnet seinen Wareneinsatz selbst. Bis jetzt bist aber du derjenige, der jede neue Zahl einträgt und jeden Preis nachzieht.</p>'+
      '<p>In diesem Modul bekommt dein System <b>Hände</b>. Claude Code liest und pflegt deine Datenbanken, Notion Agents erledigen Vorarbeit im Hintergrund, und Automationen übernehmen, was immer gleich abläuft. Du entscheidest weiterhin. Was sich ändert, ist deine Rolle am Rechner: Du prüfst, was vorbereitet wurde, und gibst es frei.</p>',
    anim:{
      id:'tsn4a0anim', eyebrow:'Drei Helfer, ein System', title:'Dein Backoffice, drei <span class="g">Hände</span>.',
      sub:'Oben die Vorlage aus Modul zwei, unten die drei Helfer aus diesem Modul. Jeder greift an einer anderen Stelle zu.',
      html:html, css:css, settle:1600,
      beats:[
        {t:200, s:1, cap:'Das ist dein Backoffice aus Modul zwei. Lieferanten, Inventur, Zutaten, Rezepturen und Gerichte hängen aneinander, und die Formeln rechnen jede Änderung von selbst weiter.'},
        {t:3000, s:1, cap:'Darunter stehen die drei Helfer aus diesem Modul. Jeder arbeitet auf seine Art, und jeder hat seine eigene Stelle im System.'},
        {t:5600, s:3, cap:'<b>Claude Code</b> holt, was von außen kommt. Der Lieferschein als PDF wird zu neuen Preisen in deiner Inventur, sobald du die Vorschau freigegeben hast.'},
        {t:8600, s:4, cap:'Ab hier rechnet dein System selbst weiter. Die Formeln aus Modul zwei ziehen den neuen Einkaufspreis bis in jedes Gericht durch.'},
        {t:11400, s:5, cap:'<b>Ein Notion Agent</b> arbeitet im Hintergrund, auch wenn du schläfst. Legst du eine neue Rezeptur an, schreibt er einen ersten Vorschlag und markiert ihn als ungeprüft.'},
        {t:14400, s:6, cap:'<b>Eine Automation</b> macht jedes Mal exakt dasselbe. Wechselt ein Gericht auf die Karte, setzt sie das Datum, ohne KI und ohne Kosten je Durchlauf.'},
        {t:17400, s:7, cap:'Und du? Du bekommst Vorschauen, Vorschläge und Berichte, und du entscheidest, was davon ins System geht.'}
      ],
      reset:function(el){ ['.m0','.m1','.m2','.m3','.m4','.c0','.c1','.c2','.you'].forEach(function(s){ lit(el,s,false); }); el.querySelector('.you').classList.remove('on'); },
      onBeat:function(el,i,T){
        if(i===2){ lit(el,'.c0',true); T.at(700,function(){ lit(el,'.m0',true); lit(el,'.m1',true); }); }
        if(i===3){ T.at(0,function(){ lit(el,'.m2',true); }); T.at(450,function(){ lit(el,'.m3',true); }); T.at(900,function(){ lit(el,'.m4',true); }); }
        if(i===4){ lit(el,'.c1',true); }
        if(i===5){ lit(el,'.c2',true); }
        if(i===6){ el.querySelector('.you').classList.add('on'); }
      },
      final:function(el){ ['.m0','.m1','.m2','.m3','.m4','.c0','.c1','.c2'].forEach(function(s){ lit(el,s,true); }); el.querySelector('.you').classList.add('on'); }
    },
    secs:[
      {id:'tsn4a0-was', html:
        '<div class="tsn4-eb">Was sich ändert</div>'+
        '<h3>Wo deine Zeit im Backoffice <span class="g">heute hingeht</span></h3>'+
        '<p class="lead">Ein gepflegtes Backoffice kostet Zeit, und zwar an immer denselben Stellen. Diese Stellen nehmen wir uns in den nächsten Lektionen vor, eine nach der anderen.</p>'+
        '<div class="tsn4-cards c2">'+
          '<div class="tsn4-card"><div class="ph"><img src="'+R+'lieferanten.webp" alt=""></div><span class="k">Einkauf</span><div class="n">Preise nachtragen</div><hr><p>Der Lieferant passt seine Preise an, und du tippst die neuen Zahlen von Hand in die Inventur. Ab Lektion fünf liest Claude den Lieferschein und legt dir die Änderungen als Vorschau hin.</p></div>'+
          '<div class="tsn4-card"><div class="ph"><img src="'+I+'g-short-rib.webp" alt=""></div><span class="k">Kalkulation</span><div class="n">Auswertungen zusammensuchen</div><hr><p>Welches Gericht rutscht unter deine Zielmarge, welche Zutat ist teurer geworden? Diese Fragen stellst du ab Lektion drei in normaler Sprache und bekommst belegte Zahlen zurück.</p></div>'+
          '<div class="tsn4-card"><div class="ph"><img src="'+R+'rezepte.webp" alt=""></div><span class="k">Küche</span><div class="n">Leere Felder füllen</div><hr><p>Neue Rezepturen ohne Beschreibung, Gerichte ohne Kartentext. Ein Notion Agent schreibt dir ab Lektion sechs erste Vorschläge, die du nur noch prüfst.</p></div>'+
          '<div class="tsn4-card"><div class="ph"><img src="'+I+'g-rinderfilet.webp" alt=""></div><span class="k">Betrieb</span><div class="n">Den Wochenblick nicht vergessen</div><hr><p>Die Zahlen der Woche anzuschauen ist nie dringend und passiert deshalb selten. Ab Lektion acht liegt der Bericht montags früh von allein bereit.</p></div>'+
        '</div>'
      },
      {id:'tsn4a0-vor', html:
        '<div class="tsn4-eb">Bevor wir starten</div>'+
        '<h3>Was du für dieses Modul <span class="g">brauchst</span></h3>'+
        '<p class="lead">Modul vier baut auf zwei Dingen auf, die du schon hast. Wenn eines davon fehlt, holst du es zuerst nach, weil jede Lektion hier darauf zurückgreift.</p>'+
        '<table class="tsn4-tbl"><tr><th>Was</th><th>Woher</th><th>Wofür</th></tr>'+
          '<tr><td><b>Deine befüllte Backoffice-Vorlage</b></td><td>Modul zwei</td><td>Claude arbeitet mit dieser Vorlage. Je vollständiger sie ist, desto besser die Antworten.</td></tr>'+
          '<tr><td><b>Claude Code mit deiner CLAUDE.md</b></td><td>Modul drei</td><td>Hier legen wir einen eigenen Ordner für dein Backoffice an und schreiben die Regeln in sein Briefing.</td></tr>'+
          '<tr><td><b>Ein Notion-Tarif</b></td><td>notion.com</td><td>Verbinden und auswerten geht mit jedem Tarif. Datenbank-Automationen brauchen mindestens Plus, Notion Agents den Business-Tarif.</td></tr>'+
          '<tr><td><b>Ein Claude-Tarif</b></td><td>Modul drei</td><td>Claude Code und die zeitgesteuerten Aufgaben aus Lektion acht laufen ab dem Pro-Tarif.</td></tr>'+
        '</table>'+
        '<p class="tsn4-note">Stand November 2026, geprüft auf notion.com/pricing und in der Claude-Code-Dokumentation. Die aktuellen Preise der Claude-Tarife stehen in Modul drei.</p>'+
        '<h4>Wie dieses Modul <span class="g">aufgebaut ist</span>.</h4>'+
        '<p>Wir gehen in der Reihenfolge, in der du dem System Schritt für Schritt mehr zutraust. Zuerst verbinden wir Claude mit Notion und bringen ihm deine Vorlage bei. Dann lesen wir nur, und erst danach lassen wir schreiben, mit einer Vorschau vor jeder Änderung. Am Ende kommen die Helfer, die ohne dich laufen, und eine Regel, mit der du jede neue Idee dem richtigen Werkzeug zuordnest.</p>'+
        '<ul class="tsn4-ul"><li><b>Lektion 1 und 2</b>: anschließen und die Systemkarte anlegen</li><li><b>Lektion 3 bis 5</b>: befragen, sicher schreiben, Lieferscheine einpflegen</li><li><b>Lektion 6 bis 8</b>: Notion Agents, Automationen und zeitgesteuerte Berichte</li><li><b>Lektion 9</b>: wer was macht, was es kostet, dein Wochenplan</li></ul>'
      }
    ],
    emp:{ id:'tsn4a0emp', kind:'Einrichtung', animTitle:'Bevor du', animGold:'loslegst',
      steps:['Vorlage prüfen','Ordner anlegen','Tarife klären','Eine Stunde blocken'],
      intro:'So bereitest du dich auf dieses Modul vor, damit du in den nächsten Lektionen nicht unterbrechen musst.',
      points:[
        'Schau einmal durch deine <b>Vorlage</b>: Stehen in Inventur, Zutaten und Gerichten echte Einträge? Leere Datenbanken liefern leere Antworten.',
        'Leg auf deinem Rechner einen eigenen <b>Ordner „Backoffice“</b> an. Dort startest du Claude Code für alles aus diesem Modul.',
        'Prüf deinen <b>Notion-Tarif</b>, bevor du zu Lektion sechs kommst. Agents gibt es erst im Business-Tarif.',
        'Plan für Lektion eins und zwei eine <b>ruhige Stunde</b> ein, außerhalb des Service. Danach geht jede weitere Lektion schneller.'
      ]
    },
    learn:[
      'Du weißt, an welchen <b>vier Stellen</b> dein Backoffice heute deine Zeit kostet.',
      'Du kennst die <b>drei Helfer</b> dieses Moduls und weißt, dass jeder anders arbeitet.',
      'Du weißt, welche <b>Tarife</b> du für welche Lektion brauchst.',
      'Du verstehst deine neue Rolle: <b>prüfen und freigeben</b> statt alles selbst eintragen.'
    ],
    next:'/lektionen/notion-mit-claude-code-verbinden'
  });
})();

/* ---------- L4.1 · Notion anschliessen ---------- */
(function(){
  var N=window.__tsn4; if(!N) return;
  var P=function(x,y,w,h){ return N.pos(x,y,w,h,430); };
  var term='<div class="tw pn" data-s="1" style="'+P(30,40,290,330)+'"><div class="tbar"><i></i><i></i><i></i><span>Backoffice — zsh</span></div>'+
    '<div class="tl" data-s="2">~/Backoffice % claude mcp add --transport http --scope user notion https://mcp.notion.com/mcp</div>'+
    '<div class="tl" data-s="2">Added HTTP MCP server notion with URL: https://mcp.notion.com/mcp to user config</div>'+
    '<div class="tl" data-s="3">~/Backoffice % claude mcp list</div>'+
    '<div class="tl st1" data-s="3"><span class="w">notion: https://mcp.notion.com/mcp (HTTP) - ! Needs authentication</span><span class="c">notion: https://mcp.notion.com/mcp (HTTP) - ✔ Connected</span></div></div>';
  var login='<div class="nw pn lgw" data-s="1" style="'+P(355,40,290,330)+'"><div class="url"><i></i><i></i><i></i><span>notion.com</span></div>'+
    '<div class="lg" data-s="3"><div class="nlogo">N</div><div class="lgt">Claude Code möchte auf deinen Notion-Workspace zugreifen.</div>'+
    '<div class="ws"><span>Workspace</span><b>Trattoria Lindenhof</b></div><div class="nbtn btn">Zugriff erlauben</div><div class="lgf">Einmal anmelden, danach bleibt die Verbindung bestehen.</div></div></div>';
  var PAGES=['Foodquartier','Drinksquartier','Finance Studio','Key Metrics','Operations Area'];
  var ws='<div class="nw pn wsw" data-s="1" style="'+P(680,40,290,330)+'"><div class="nside">'+
    '<div class="nrow wsn"><span class="wsl">T</span>Trattoria Lindenhof</div><div class="nsec">Teamspaces</div>'+
    PAGES.map(function(p,i){ return '<div class="nrow g'+i+'">'+N.NCHEV+N.NPAGE+'<span>'+p+'</span></div>'; }).join('')+
    '<div class="nsec">Privat</div><div class="nrow">'+N.NCHEV+N.NPAGE+'<span>Notizen</span></div></div></div>'+
    '<div class="rule" data-s="5" style="'+P(680,382,290,34)+'">Was dein Konto nicht sieht, sieht Claude nicht</div>';
  var lines='<svg class="lines" viewBox="0 0 1000 430" preserveAspectRatio="none">'+
    '<path class="ln" pathLength="1" data-s="3" d="M322 205 H353"/><path class="sp" pathLength="1" d="M322 205 H353"/>'+
    '<path class="ln" pathLength="1" data-s="4" d="M647 205 H678"/><path class="sp" pathLength="1" style="animation-delay:1.2s" d="M647 205 H678"/></svg>';
  var html='<div class="sc"><div class="st" style="aspect-ratio:1000/430">'+lines+term+login+ws+'</div></div>';
  var css=N.nCSS('tsn4a1anim')+`
  #tsn4a1anim .pn{transition:box-shadow .7s cubic-bezier(.16,1,.3,1),border-color .7s cubic-bezier(.16,1,.3,1)}
  #tsn4a1anim .pn.lit{border-color:rgba(199,180,137,.7);box-shadow:0 30px 70px -30px rgba(0,0,0,.95),0 0 0 4px rgba(199,180,137,.12),0 0 40px rgba(199,180,137,.2)}
  #tsn4a1anim .st1 .c{display:none}
  #tsn4a1anim.done .st1 .w{display:none}#tsn4a1anim.done .st1 .c{display:inline}
  #tsn4a1anim .lgw .url{height:28px;flex:0 0 28px;display:flex;align-items:center;gap:7px;padding:0 10px;background:#2b2b2b}
  #tsn4a1anim .lgw .url i{width:11px;height:11px;border-radius:50%;background:rgba(255,255,255,.18)}
  #tsn4a1anim .lgw .url span{flex:1;margin:0 30px 0 6px;height:18px;border-radius:5px;background:#1e1e1e;font:500 11px/18px -apple-system,BlinkMacSystemFont,sans-serif;color:rgba(255,255,255,.7);text-align:center}
  #tsn4a1anim .lg{display:flex;flex-direction:column;align-items:center;text-align:center;padding:24px 22px;gap:14px}
  #tsn4a1anim .nlogo{width:40px;height:40px;border-radius:8px;background:#fff;color:#191919;font:700 24px/40px Georgia,serif}
  #tsn4a1anim .lgt{font-size:14px;line-height:21px;color:rgb(240,239,237)}
  #tsn4a1anim .ws{width:100%;display:flex;justify-content:space-between;align-items:center;padding:8px 10px;border-radius:6px;border:1px solid rgba(255,255,243,.082);font-size:14px;color:rgb(173,169,163)}
  #tsn4a1anim .ws b{color:rgb(240,239,237);font-weight:500}
  #tsn4a1anim .btn{width:100%;justify-content:center;transition:transform .25s cubic-bezier(.34,1.56,.64,1)}
  #tsn4a1anim.press .btn{transform:scale(.95)}
  #tsn4a1anim .lgf{font-size:12px;line-height:18px;color:rgb(173,169,163)}
  #tsn4a1anim .wsw .nside{flex:1}
  #tsn4a1anim .nrow.wsn{font-weight:500;color:rgb(240,239,237)}
  #tsn4a1anim .wsl{width:20px;height:20px;border-radius:4px;background:rgb(173,169,163);color:#191919;font-size:12px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;margin-right:4px}
  #tsn4a1anim .rule{display:flex;align-items:center;justify-content:center;padding:0 10px;border-radius:999px;border:1px solid rgba(199,180,137,.5);background:rgba(199,180,137,.1);font-size:12px;color:#efe6d2;text-align:center}
  `;
  function setG(el,n){ for(var i=0;i<5;i++){ var g=el.querySelector('.g'+i); if(g) g.classList.toggle('on', i<n); } var w=el.querySelector('.wsw'); if(w) w.classList.toggle('lit', n>0); }
  N.page({
    key:'tsn4a1', re:/\/(?:lektionen\/)?notion-mit-claude-code-verbinden\/?$/,
    eyebrow:'L 4.1', title:'Notion <span class="ts-gold">anschließen</span>', alt:'Claude Code mit dem Notion-Backoffice verbinden',
    intro:
      '<p>Claude Code lebt auf deinem Rechner und kennt von sich aus nur den Ordner, in dem du es startest. Deine Backoffice-Vorlage liegt in der Cloud bei Notion. Damit die beiden miteinander reden, hängen wir einen Anschluss ein, und dafür gibt es von Notion einen fertigen Weg.</p>'+
      '<p>In dieser Lektion stellen wir die Verbindung her, melden uns einmal an und prüfen, ob die Leitung steht. Und wir klären die Frage, die vor allem anderen kommt: <b>Was darf Claude in deinem Notion sehen</b>? Die Antwort ist einfacher, als viele denken, und sie hat Folgen dafür, wie du deinen Workspace ordnest.</p>',
    anim:{
      id:'tsn4a1anim', eyebrow:'Die Verbindung', title:'Deine Rechte sind <span class="g">seine Rechte</span>.',
      sub:'Vom Terminal über die Anmeldung bis in deinen Workspace. Am Ende sieht Claude genau das, was du mit deinem Konto auch siehst.',
      html:html, css:css,
      beats:[
        {t:200, s:1, cap:'Drei Stationen gehören zu dieser Verbindung: dein Rechner mit Claude Code, die Anmeldung im Browser und dein Notion-Workspace.'},
        {t:2800, s:2, cap:'Eine Zeile im Terminal hängt den Anschluss ein. Mit dem Zusatz <b>scope user</b> gilt er in all deinen Projekten.'},
        {t:5600, s:3, cap:'Beim ersten Aufruf von <b>/mcp</b> öffnet sich der Browser. Du meldest dich bei Notion an und erlaubst den Zugriff, einmal und nie wieder.'},
        {t:8800, s:4, cap:'Ab jetzt steht die Leitung. Claude sieht deine Teamspaces, Seiten und Datenbanken, und zwar alles, was du mit deinem Konto auch öffnen kannst.'},
        {t:12000, s:5, cap:'Was für dich gesperrt ist, bleibt auch für Claude zu. Deshalb sind deine Notion-Rechte und deine Teamspaces die eigentliche Grenze.'}
      ],
      reset:function(el){ setG(el,0); el.classList.remove('done','press'); },
      onBeat:function(el,i,T,jump){
        if(i===2){ T.at(jump?0:1500,function(){ el.classList.add('press'); }); T.at(jump?0:1900,function(){ el.classList.remove('press'); }); }
        if(i===3){ el.classList.add('done'); for(var k=0;k<5;k++){ (function(k){ T.at(jump?0:k*260,function(){ setG(el,k+1); }); })(k); } }
      },
      final:function(el){ setG(el,5); el.classList.add('done'); }
    },
    secs:[
      {id:'tsn4a1-weg', html:
        '<div class="tsn4-eb">Der Anschluss</div>'+
        '<h3>Eine Zeile, dann <span class="g">einmal anmelden</span></h3>'+
        '<p class="lead">Notion betreibt einen eigenen Anschluss für KI-Werkzeuge, den sogenannten Notion MCP. Den hängst du in Claude Code ein, und danach kann Claude in deinem Workspace suchen, lesen und auf deinen Wunsch auch schreiben.</p>'+
        '<p><span class="gl">Öffne dein Terminal und gib diese Zeile ein.</span> Wie du Claude Code installierst und startest, kennst du aus Modul drei. Der Befehl kommt so von Notion selbst, nur den Zusatz <span class="tsn4-mono">--scope user</span> hängen wir an, damit die Verbindung in allen deinen Ordnern da ist und nicht nur in dem, in dem du gerade stehst.</p>'+
        N.cmd('Terminal', 'claude mcp add --transport http --scope user notion https://mcp.notion.com/mcp')+
        '<p><span class="gl">Dann startest du Claude Code und tippst /mcp.</span> In der Liste steht Notion mit dem Hinweis, dass noch eine Anmeldung fehlt. Du wählst Notion aus, der Browser öffnet sich, du meldest dich mit deinem Notion-Konto an und erlaubst den Zugriff. Das passiert ein einziges Mal, danach bleibt die Verbindung bestehen.</p>'+
        N.cmd('In Claude Code', '/mcp')+
        '<h4>Zwei weitere Wege zum <span class="g">selben Anschluss</span>.</h4>'+
        '<div class="tsn4-cards c2">'+
          '<div class="tsn4-card"><span class="k">Für Claude Code</span><div class="n">Das Notion-Plugin</div><hr><p>Notion bietet ein eigenes Plugin an. Es hängt denselben Anschluss ein und bringt fertige Befehle für die Suche und für neue Datenbankeinträge mit. Wenn du das nutzt, brauchst du die Zeile oben nicht.</p><p class="f">Danach Claude Code einmal neu starten.</p></div>'+
          '<div class="tsn4-card"><span class="k">Für die Claude-App</span><div class="n">Die Verbindung in den Einstellungen</div><hr><p>In der Claude-App und auf claude.ai verbindest du Notion unter <b>Anpassen</b> bei den <b>Konnektoren</b>. Diese Verbindung brauchst du in Lektion acht, weil zeitgesteuerte Aufgaben in der Cloud laufen und dort nicht auf deinen Rechner zugreifen.</p></div>'+
        '</div>'+
        N.cmd('Notion-Plugin in Claude Code', '/plugin marketplace add makenotion/claude-code-notion-plugin\n/plugin install notion-workspace-plugin@notion-plugin-marketplace')+
        '<p class="tsn4-note">Alle Befehle auf dieser Seite haben wir am 01.11.2026 mit Claude Code 2.1.245 ausgeführt. Quelle: developers.notion.com, Abschnitt Notion MCP.</p>'
      },
      {id:'tsn4a1-grenze', html:
        '<div class="tsn4-eb">Die Grenze</div>'+
        '<h3>Was Claude in deinem Notion <span class="g">sehen darf</span></h3>'+
        '<p class="lead">Der Notion-Anschluss arbeitet mit deinen Rechten. Notion schreibt es selbst so: Die Werkzeuge haben Zugriff auf alles, worauf du Zugriff hast. Eine Auswahl einzelner Seiten gibt es dabei nicht.</p>'+
        '<p><span class="gl">Das ist eine gute Nachricht und eine Aufgabe zugleich.</span> Gut ist sie, weil du nichts freischalten musst, damit Claude deine Inventur, deine Zutaten und deine Gerichte findet. Eine Aufgabe ist sie, weil damit auch die Seiten mitgelesen werden können, die nichts mit dem Backoffice zu tun haben, wenn du sie in deinem Konto offen hast.</p>'+
        '<p><span class="gl">Die Grenze ziehst du deshalb in Notion selbst.</span> Was nur dich etwas angeht, gehört in einen eigenen, privaten Teamspace oder auf eine private Seite. Wie du Bereiche in getrennte Teamspaces legst, hast du in Modul zwei bei den mehreren Standorten gesehen, und dort gilt dasselbe: Was ein Konto nicht sieht, sieht auch Claude nicht.</p>'+
        '<div class="tsn4-cards c3">'+
          '<div class="tsn4-card"><span class="k">Bleibt offen</span><div class="n">Dein Backoffice</div><hr><p>Foodquartier, Drinksquartier, Finance Studio und Key Metrics. Hier arbeitet Claude in den nächsten Lektionen.</p></div>'+
          '<div class="tsn4-card"><span class="k">Prüfen</span><div class="n">Operations Area</div><hr><p>Passwortablage und Verträge liegen in der Vorlage hier. Was nur du sehen sollst, verschiebst du auf eine private Seite.</p></div>'+
          '<div class="tsn4-card"><span class="k">Gehört raus</span><div class="n">Privates</div><hr><p>Notizen, Bankdaten, alles Persönliche. Das liegt in einem privaten Bereich, den du nicht für die Arbeit brauchst.</p></div>'+
        '</div>'+
        '<p>Wer ganz sichergehen will, verbindet Claude mit einem zweiten Notion-Konto, das nur die Backoffice-Teamspaces sieht. Das kostet einen weiteren Platz in deinem Notion-Tarif, und für die meisten Betriebe reicht ein sauber geordneter Workspace völlig.</p>'
      },
      {id:'tsn4a1-test', html:
        '<div class="tsn4-eb">Der Test</div>'+
        '<h3>Steht die <span class="g">Leitung</span>?</h3>'+
        '<p class="lead">Bevor wir irgendetwas Ernstes machen, prüfen wir die Verbindung mit einer Frage, bei der nichts passieren kann.</p>'+
        N.cmd('Prompt', 'Welche Notion-Datenbanken kannst du sehen? Nenne mir zu jeder den Namen und den Teamspace, in dem sie liegt. Ändere nichts.')+
        '<p>Tauchen deine Inventurliste, deine Zutaten und deine Gerichte in der Antwort auf, steht die Verbindung. Diesen Test stellst du auch später jedes Mal, wenn etwas nicht klappt, weil er dir in einer Minute sagt, ob das Problem an der Verbindung liegt oder an deiner Frage.</p>'+
        '<div class="tsn4-err">'+
          '<div><b>Claude findet gar nichts.</b> Die Anmeldung ist nicht durchgelaufen. Tipp <span class="tsn4-mono">/mcp</span>, wähl Notion und melde dich noch einmal an.</div>'+
          '<div><b>Eine Datenbank fehlt.</b> Dein eigenes Konto hat keinen Zugriff darauf, oder sie liegt in einem anderen Workspace. Öffne sie in Notion und prüf, ob du sie sehen kannst.</div>'+
          '<div><b>Claude kennt Notion gar nicht.</b> Du hast Claude Code vor dem Einhängen gestartet. Beende die Sitzung und starte neu.</div>'+
        '</div>'
      }
    ],
    emp:{ id:'tsn4a1emp', kind:'Einrichtung', animTitle:'Vier Schritte bis zur', animGold:'Leitung',
      steps:['Anschluss einhängen','Einmal anmelden','Workspace ordnen','Verbindung testen'],
      intro:'In dieser Reihenfolge richte ich den Anschluss bei jedem neuen Betrieb ein, weil jeder Schritt den nächsten erst möglich macht.',
      points:[
        'Häng den Anschluss mit <b>scope user</b> ein, dann musst du ihn nicht in jedem Ordner wiederholen.',
        'Melde dich mit dem Konto an, mit dem du auch im Backoffice arbeitest. <b>Seine Rechte</b> bekommt Claude.',
        'Räum vorher auf: Privates und alles, was mit dem Backoffice nichts zu tun hat, kommt in einen <b>privaten Bereich</b>.',
        'Stell zum Schluss den <b>Test-Prompt</b> und heb ihn dir auf. Er ist der erste Griff bei jedem Problem.'
      ]
    },
    learn:[
      'Du kannst Notion mit <b>einer Zeile</b> an Claude Code anschließen und dich einmal anmelden.',
      'Du kennst das <b>Notion-Plugin</b> und die Verbindung in der Claude-App als zweite und dritte Möglichkeit.',
      'Du weißt: Claude sieht <b>alles, was du siehst</b>, die Grenze ziehst du über Teamspaces.',
      'Du kannst mit einer Frage prüfen, ob die <b>Verbindung steht</b>, und kennst die drei häufigsten Fehler.'
    ],
    next:'/lektionen/die-systemkarte-anlegen'
  });
})();
