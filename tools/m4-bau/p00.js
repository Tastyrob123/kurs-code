/* ---------- Modul 4 · Uebersicht (/modul-4-claude-claude-code) ---------- */
(function(){
  var N=window.__tsn4; if(!N) return;
  var P=function(x,y,w,h){ return N.pos(x,y,w,h,372); };
  /* Opener: eine Woche im Backoffice nach Modul 4. Sieben Tage, darunter das Fundament,
     dann faellt jede Aufgabe auf ihren Tag, mit der Lektion, in der sie gebaut wird. */
  var DAYS=['Mo','Di','Mi','Do','Fr','Sa','So'];
  var cols=DAYS.map(function(d,i){
    return '<div class="dy'+(i>4?' off':'')+'" data-s="1" style="'+P(14+i*140,20,132,252)+'"><span class="dn">'+d+'</span></div>';
  }).join('');
  var TASKS=[
    {d:0,s:3,l:'L 4.8',t:'Der Wochenblick liegt bereit',h:'Zeitplan, 6 Uhr'},
    {d:1,s:4,l:'L 4.5',t:'Lieferscheine der Woche einlesen',h:'Claude Code'},
    {d:2,s:5,l:'L 4.7',t:'Preis geändert, Datum gesetzt',h:'Automation'},
    {d:3,s:6,l:'L 4.6',t:'Neue Rezeptur, erster Vorschlag',h:'Notion Agent'},
    {d:4,s:6,l:'L 4.3',t:'Welches Gericht liegt über dem Ziel?',h:'Claude Code'}
  ];
  var tasks=TASKS.map(function(k,i){
    return '<div class="tk t'+i+'" data-s="'+k.s+'" style="'+P(22+k.d*140,72,116,184)+'"><span class="tl">'+k.l+'</span><span class="tt">'+k.t+'</span><span class="th">'+k.h+'</span></div>';
  }).join('');
  var rest='<div class="rs" data-s="2" style="'+P(14+5*140,126,272,40)+'">Service. Das Backoffice läuft ohne dich.</div>';
  var base='<div class="fd" data-s="2" style="'+P(14,292,972,62)+'"><span class="fk">Fundament</span>'+
    '<span class="fc">L 4.1 Verbindung</span><span class="fc">L 4.2 Systemkarte</span><span class="fc">L 4.4 Vorschau vor jeder Änderung</span><span class="fc">L 4.9 Wer macht was</span></div>';
  var html='<div class="sc"><div class="st" style="aspect-ratio:1000/372">'+cols+rest+tasks+base+'</div></div>';
  var css=`
  #tsn4movanim .dy{border-radius:14px;border:1px solid rgba(255,255,255,.1);background:linear-gradient(rgba(255,255,255,.025),rgba(255,255,255,.025)),#05060b}
  #tsn4movanim .dy.off{border-style:dashed;border-color:rgba(255,255,255,.08);background:transparent}
  #tsn4movanim .dn{position:absolute;left:0;right:0;top:16px;text-align:center;font-family:${N.DISP};font-weight:600;font-size:18px;color:#fff}
  #tsn4movanim .dy.off .dn{color:rgba(255,255,255,.55)}
  #tsn4movanim .rs{display:flex;align-items:center;justify-content:center;text-align:center;font-size:13px;line-height:1.35;color:rgba(255,255,255,.62);padding:0 18px}
  #tsn4movanim .tk{display:flex;flex-direction:column;gap:10px;padding:16px 14px;border-radius:12px;border:1px solid rgba(199,180,137,.3);background:linear-gradient(rgba(199,180,137,.06),rgba(199,180,137,.06)),#0b0d14;
    box-shadow:0 22px 40px -24px rgba(0,0,0,.95);transition:border-color .6s cubic-bezier(.16,1,.3,1),box-shadow .6s cubic-bezier(.16,1,.3,1)}
  #tsn4movanim .tk.lit{border-color:rgba(199,180,137,.8);box-shadow:0 22px 40px -24px rgba(0,0,0,.95),0 0 28px rgba(199,180,137,.24)}
  #tsn4movanim .tl{font:700 11px/1 ${N.SANS};letter-spacing:.12em;color:#c7b489}
  #tsn4movanim .tt{font-family:${N.DISP};font-weight:600;font-size:16px;line-height:1.25;color:#fff}
  #tsn4movanim .th{margin-top:auto;font-size:12px;line-height:1.3;color:rgba(255,255,255,.72)}
  #tsn4movanim .fd{display:flex;align-items:center;gap:12px;padding:0 18px;border-radius:14px;border:1px solid rgba(199,180,137,.4);background:rgba(199,180,137,.07)}
  #tsn4movanim .fk{font:700 11px/1 ${N.SANS};letter-spacing:.14em;text-transform:uppercase;color:#c7b489;margin-right:6px}
  #tsn4movanim .fc{display:inline-flex;align-items:center;height:30px;padding:0 13px;border-radius:999px;border:1px solid rgba(255,255,255,.14);background:#05060b;font-size:12.5px;color:#efe6d2;white-space:nowrap}
  `;
  /* Die zehn Lektionen, in vier Etappen */
  var GR=[
    ['Anschließen',[
      ['0','dein-backoffice-bekommt-hnde','Dein Backoffice bekommt Hände','Wo deine Zeit heute hingeht und welcher Helfer welche Stelle übernimmt.'],
      ['1','notion-mit-claude-code-verbinden','Notion mit Claude Code verbinden','Der Anschluss in wenigen Minuten, und was Claude in deinem Notion sehen darf.'],
      ['2','die-systemkarte-anlegen','Die Systemkarte anlegen','Claude lernt deine Vorlage einmal kennen und weiß danach, was es nie schreibt.']]],
    ['Lesen und schreiben',[
      ['3','dein-backoffice-befragen','Dein Backoffice befragen','Fragen in deinen eigenen Worten, Antworten aus deinen Zahlen, auf Wunsch als Excel-Datei.'],
      ['4','datenbanken-automatisch-aktualisieren','Datenbanken automatisch aktualisieren','Vorschau, dein Okay, Verlauf: drei Netze, bevor Claude etwas in Notion ändert.'],
      ['5','lieferscheine-und-preise-einpflegen','Lieferscheine und Preise einpflegen','Die Scheine der Woche in einem Durchgang, und was eine Preiserhöhung im Teller bedeutet.']]],
    ['Helfer im Hintergrund',[
      ['6','notion-agents-im-betrieb-einsetzen','Notion Agents im Betrieb einsetzen','Ein Agent mit klarem Auftrag, der auch arbeitet, wenn dein Laptop zugeklappt ist.'],
      ['7','notion-automationen-bauen','Notion Automationen bauen','Was immer gleich abläuft, erledigt Notion selbst, ohne KI und ohne Kosten je Durchlauf.'],
      ['8','wiederkehrende-routinen-einrichten','Wiederkehrende Routinen einrichten','Montags früh liegt dein Wochenblick bereit, ohne dass du daran denken musst.']]],
    ['Den Überblick behalten',[
      ['9','wer-macht-was-im-backoffice','Wer macht was im Backoffice','Eine Regel für jede neue Idee, was das alles kostet, und dein Wochenplan.']]]
  ];
  var list='<div class="tsn4-ov">'+GR.map(function(g,gi){
    return '<div class="ov-g" style="--g:'+gi+'"><div class="ov-gh"><span class="ov-gn">'+(gi+1)+'</span><span class="ov-gt">'+g[0]+'</span></div>'+
      g[1].map(function(l,li){
        return '<a class="ov-r" style="--i:'+li+'" href="/lektionen/'+l[1]+'"><span class="ov-th"><img src="'+N.COV('l4'+l[0]+'-s')+'" alt="" width="640" height="254" loading="lazy" decoding="async"></span>'+
          '<span class="ov-m"><span class="ov-no">L 4.'+l[0]+'</span><span class="ov-t">'+l[2]+'</span><span class="ov-d">'+l[3]+'</span></span>'+
          '<span class="ov-go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>';
      }).join('')+'</div>';
  }).join('')+'</div>';
  N.addCSS('tsn4mov-list-css', `
  .tsn4-sec.tsn4-wide{max-width:1000px}
  .tsn4-ov{display:flex;flex-direction:column;gap:34px}
  .tsn4-ov .ov-gh{display:flex;align-items:center;gap:12px;margin:0 0 14px}
  .tsn4-ov .ov-gn{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid rgba(199,180,137,.6);font:700 12px/1 ${N.SANS};color:#c7b489}
  .tsn4-ov .ov-gt{font:600 13px/1 ${N.SANS};letter-spacing:.16em;text-transform:uppercase;color:#c7b489}
  .tsn4-ov .ov-r{display:grid;grid-template-columns:minmax(0,220px) minmax(0,1fr) 40px;align-items:center;gap:22px;padding:14px;margin:0 0 10px;border-radius:16px;
    border:1px solid rgba(255,255,255,.1);background:linear-gradient(rgba(255,255,255,.03),rgba(255,255,255,.03)),#05060b;text-decoration:none;color:#fff;
    transition:border-color .5s cubic-bezier(.16,1,.3,1),transform .5s cubic-bezier(.34,1.56,.64,1),box-shadow .5s cubic-bezier(.16,1,.3,1)}
  .tsn4-ov .ov-r:hover{border-color:rgba(199,180,137,.6);transform:translateY(-3px);box-shadow:0 24px 50px -28px rgba(0,0,0,.95),0 0 26px rgba(199,180,137,.14)}
  .tsn4-ov .ov-th{display:block;border-radius:10px;overflow:hidden;background:#0b0d14;aspect-ratio:640/254}
  .tsn4-ov .ov-th img{display:block;width:100%;height:100%;object-fit:cover}
  .tsn4-ov .ov-m{display:flex;flex-direction:column;gap:6px;min-width:0}
  .tsn4-ov .ov-no{font:700 11px/1 ${N.SANS};letter-spacing:.12em;color:#c7b489}
  .tsn4-ov .ov-t{font-family:${N.DISP};font-weight:600;font-size:20px;line-height:1.2}
  .tsn4-ov .ov-d{font-size:15px;line-height:1.5;color:rgba(255,255,255,.82)}
  .tsn4-ov .ov-go{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid rgba(199,180,137,.5);color:#c7b489;
    box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 8px 18px -10px rgba(0,0,0,.9);transition:background .4s,color .4s}
  .tsn4-ov .ov-go svg{width:18px;height:18px}
  .tsn4-ov .ov-r:hover .ov-go{background:#c7b489;color:#05060b}
  .tsn4-ov.js .ov-r{opacity:0;transform:translateX(28px)}
  .tsn4-ov.js.in .ov-r{opacity:1;transform:none;transition:opacity .7s cubic-bezier(.16,1,.3,1) calc(var(--g)*.22s + var(--i)*.08s),transform .8s cubic-bezier(.34,1.56,.64,1) calc(var(--g)*.22s + var(--i)*.08s),border-color .5s,box-shadow .5s}
  @media(max-width:640px){
    .tsn4-ov .ov-r{grid-template-columns:minmax(0,1fr);gap:12px}
    .tsn4-ov .ov-go{display:none}
  }
  @media(prefers-reduced-motion:reduce){ .tsn4-ov.js .ov-r{opacity:1;transform:none} }
  `);
  function lit(el,sel,on){ var x=el.querySelector(sel); if(x) x.classList.toggle('lit',on); }
  N.page({
    key:'tsn4mov', re:/^\/modul-4-claude-claude-code\/?$/, img:N.COV('m4'),
    eyebrow:'Modul 4', title:'Die <span class="ts-gold">Helfer</span>', alt:'Modul 4: Claude Code und Notion Agents arbeiten in deinem Backoffice',
    intro:
      '<p>Dein Backoffice aus Modul zwei rechnet zuverlässig, aber jede neue Zahl trägst bisher du ein. In diesem Modul gibst du einen Teil dieser Arbeit ab: an Claude Code, an Notion Agents, an Automationen und an Aufgaben, die zu einer festen Uhrzeit von selbst laufen.</p>'+
      '<p>Jede Lektion nimmt sich eine Stelle vor, an der heute deine Zeit hängen bleibt, vom Lieferschein bis zum Wochenblick am Montagmorgen. Am Ende weißt du, welcher Helfer welche Aufgabe übernimmt. Was ins System geht, entscheidest weiterhin du.</p>',
    anim:{
      id:'tsn4movanim', eyebrow:'Zehn Lektionen', title:'Deine Woche nach <span class="g">Modul vier</span>.',
      sub:'Sieben Tage im Backoffice. Jede Aufgabe trägt die Lektion, in der du sie einrichtest.',
      html:html, css:css, settle:1600,
      beats:[
        {t:200, s:1, cap:'Eine ganz normale Woche in deinem Betrieb. Fünf Tage mit Backoffice, das Wochenende gehört dem Service.'},
        {t:2800, s:2, cap:'Darunter liegt das <b>Fundament</b>: die Verbindung zu Notion, die Systemkarte, die Vorschau vor jeder Änderung und eine klare Regel, wer was übernimmt.'},
        {t:5600, s:3, cap:'<b>Montag, sechs Uhr.</b> Dein Wochenblick liegt fertig in Notion, bevor du den ersten Kaffee getrunken hast.'},
        {t:8200, s:4, cap:'<b>Dienstag.</b> Die Lieferscheine der Woche gehen in einem Durchgang in deine Inventur, nach deiner Freigabe.'},
        {t:10800, s:5, cap:'<b>Mittwoch.</b> Jemand ändert einen Preis von Hand, und Notion setzt das Datum dazu. Ohne KI, jedes Mal gleich.'},
        {t:13400, s:6, cap:'<b>Donnerstag und Freitag.</b> Der Agent bereitet eine neue Rezeptur vor, und du fragst dein Backoffice, welches Gericht über deinem Ziel liegt.'},
        {t:16200, s:6, cap:'So sieht deine Woche aus, wenn du alle zehn Lektionen durchgearbeitet hast. Wir fangen beim Anschluss an.'}
      ],
      reset:function(el){ for(var i=0;i<5;i++) lit(el,'.t'+i,false); },
      onBeat:function(el,i){
        if(i>=2 && i<=5){ for(var k=0;k<5;k++) lit(el,'.t'+k,false); }
        if(i===2) lit(el,'.t0',true);
        if(i===3) lit(el,'.t1',true);
        if(i===4) lit(el,'.t2',true);
        if(i===5){ lit(el,'.t3',true); lit(el,'.t4',true); }
        if(i===6){ for(var j=0;j<5;j++) lit(el,'.t'+j,false); }
      },
      final:function(el){ for(var i=0;i<5;i++) lit(el,'.t'+i,false); }
    },
    secs:[
      {id:'tsn4mov-list', wide:true, html:
        '<div class="tsn4-eb">Die Lektionen</div>'+
        '<h3>Zehn Schritte, vier <span class="g">Etappen</span></h3>'+
        '<p class="lead">Jede Etappe baut auf der vorigen auf. Erst anschließen und lesen, dann schreiben lassen, zuletzt die Helfer im Hintergrund.</p>'+
        list }
    ],
    learn:[
      'Du verbindest Claude Code mit deinem Backoffice und bringst ihm deine <b>Vorlage</b> bei.',
      'Du lässt Claude <b>lesen und schreiben</b>, mit einer Vorschau vor jeder Änderung.',
      'Du richtest <b>Agents, Automationen</b> und Aufgaben mit festem Zeitplan ein.',
      'Du weißt bei jeder neuen Idee, <b>welcher Helfer</b> sie übernimmt.'
    ],
    next:'/lektionen/dein-backoffice-bekommt-hnde'
  });
  /* Liste kaskadiert beim Erscheinen herein (eigener Auftritt, Etappe fuer Etappe) */
  function arm(){
    var o=document.querySelector('#tsn4mov-list .tsn4-ov'); if(!o||o.__a) return; o.__a=1;
    if(N.reduced()) return; o.classList.add('js'); N.tsReveal(o,function(){ o.classList.add('in'); });
  }
  window.__tsMO(arm).observe(document.documentElement,{childList:true,subtree:true});
})();
