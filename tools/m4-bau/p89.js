/* ---------- L4.8 · Zeitgesteuerte Aufgaben ---------- */
(function(){
  var N=window.__tsn4; if(!N) return;
  var I=N.IMG, P=function(x,y,w,h){ return N.pos(x,y,w,h,450); };
  var ticks=''; for(var i=0;i<12;i++){ var a=i*30*Math.PI/180; ticks+='<line x1="'+(100+Math.sin(a)*84)+'" y1="'+(100-Math.cos(a)*84)+'" x2="'+(100+Math.sin(a)*(i%3?78:72))+'" y2="'+(100-Math.cos(a)*(i%3?78:72))+'" stroke="rgba(199,180,137,'+(i%3?'.4':'.8')+')" stroke-width="'+(i%3?1.2:2)+'" stroke-linecap="round"/>'; }
  var clock='<div class="ck" data-s="1" style="'+P(30,40,300,330)+'"><svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="92" fill="#0b0d14" stroke="rgba(199,180,137,.5)" stroke-width="1.5"/>'+ticks+
    '<line class="hh" x1="100" y1="100" x2="100" y2="58" stroke="#efe6d2" stroke-width="4" stroke-linecap="round"/><line class="mh" x1="100" y1="100" x2="100" y2="34" stroke="#c7b489" stroke-width="2.4" stroke-linecap="round"/><circle cx="100" cy="100" r="4.5" fill="#efe6d2"/></svg>'+
    '<div class="day"><span>Montag</span><b class="tm">00:00</b></div></div>';
  var dev='<div class="cardx dv lap" data-s="1" style="'+P(380,70,170,120)+'"><svg class="ic" viewBox="0 0 40 28" width="40" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="7" y="3" width="26" height="17" rx="2"/><path d="M3 23h34l-2 3H5z"/></svg><span class="dn">Dein Laptop</span><span class="ds">zugeklappt</span></div>'+
          '<div class="cardx dv cl" data-s="1" style="'+P(380,220,170,120)+'"><svg class="ic" viewBox="0 0 40 28" width="40" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 24h17a7 7 0 0 0 0-14 9 9 0 0 0-17-1 7 7 0 0 0 0 15z"/></svg><span class="dn">Claude in der Cloud</span><span class="ds">führt die Aufgabe aus</span></div>';
  var BL=[['Höchster Wareneinsatz',['g-rinderfilet','Rinderfilet 34,2 %'],['g-jakobsmuscheln','Jakobsmuscheln 31,5 %']],['Preise geändert',['z-tomate','Tomaten +10,4 %'],['z-zitrone','Zitronen +10,7 %']],['Über deiner Grenze',null,['','Ein Gericht über 32 %']],['Lücken',['g-pilz-ravioli','Pilz-Ravioli Steinpilze ohne Preis'],null]];
  var page='<div class="nw wb" data-s="1" style="'+P(600,16,380,390)+'"><div class="nbar">'+N.NPAGE+'<span>Key Metrics</span><span class="sep">/</span><span>Wochenblick</span></div>'+
    '<div class="pt ntitle">Wochenblick · Montag</div>'+
    BL.map(function(b,i){ function ln(x){ return x?'<div class="bv">'+(x[0]?'<span class="mn"><img src="'+I+x[0]+'.webp" alt=""><u>'+x[1].split(' ')[0].replace(/:$/,'')+'</u></span> '+x[1].split(' ').slice(1).join(' '):x[1])+'</div>':''; } return '<div class="bk b'+i+'"><div class="bt">'+b[0]+'</div>'+ln(b[1])+ln(b[2])+'</div>'; }).join('')+
    '</div><div class="ro" data-s="1" style="'+P(600,414,380,28)+'">Nur gelesen · in den Datenbanken nichts geändert</div>';
  var lines='<svg class="lines" viewBox="0 0 1000 450" preserveAspectRatio="none"><path class="ln dash" pathLength="1" data-s="1" d="M332 130 H378"/><path class="ln" pathLength="1" data-s="1" d="M332 280 H378"/><path class="ln" pathLength="1" data-s="1" d="M552 280 C576 280 576 225 598 225"/>'+
    '<path class="sp" pathLength="1" d="M332 280 H378"/><path class="sp" pathLength="1" style="animation-delay:.9s" d="M552 280 C576 280 576 225 598 225"/></svg>';
  var html='<div class="sc"><div class="st" style="aspect-ratio:1000/450">'+lines+clock+dev+page+'</div></div>';
  var css=N.nCSS('tsn4a8anim')+`
  #tsn4a8anim .wb .pt{font-size:26px;line-height:32px;padding:4px 22px 8px}
  #tsn4a8anim .bk{padding:4px 22px 6px;transition:opacity .6s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}
  #tsn4a8anim .bt{font-size:14px;font-weight:600;line-height:22px;color:rgb(240,239,237)}
  #tsn4a8anim .bv{font-size:13.5px;line-height:22px;color:rgb(240,239,237);font-variant-numeric:tabular-nums}
  #tsn4a8anim .mn{display:inline-flex;align-items:center;gap:5px}
  #tsn4a8anim .mn img{width:16px;height:16px;border-radius:3px;object-fit:cover}
  #tsn4a8anim .mn u{text-decoration-color:rgba(255,255,243,.25);text-underline-offset:3px}
  #tsn4a8anim .ro{display:flex;align-items:center;justify-content:center;border-radius:999px;border:1px solid rgba(143,203,170,.5);font-size:11.5px;color:#fff;transition:opacity .6s cubic-bezier(.16,1,.3,1)}
  #tsn4a8anim.js .bk,#tsn4a8anim.js .ro{opacity:0;transform:translateY(8px)}
  #tsn4a8anim.js.k3 .b0,#tsn4a8anim.js.k3 .b1,#tsn4a8anim.js.k4 .b2,#tsn4a8anim.js.k4 .b3,#tsn4a8anim.js.k5 .ro{opacity:1;transform:none}
  #tsn4a8anim.js.k3 .b1{transition-delay:.25s}
  #tsn4a8anim .ck{display:flex;flex-direction:column;align-items:center;gap:14px}
  #tsn4a8anim .ck svg{width:78%;height:auto;overflow:visible;filter:drop-shadow(0 26px 40px rgba(0,0,0,.8))}
  #tsn4a8anim .ck .hh,#tsn4a8anim .ck .mh{transform-origin:100px 100px;transition:transform 2.2s ${N.EASE}}
  #tsn4a8anim .ck .hh{transform:rotate(var(--h,0deg))}#tsn4a8anim .ck .mh{transform:rotate(var(--m,0deg))}
  #tsn4a8anim .day{display:flex;gap:10px;align-items:baseline;font:600 12px/1 ${N.SANS};letter-spacing:.12em;text-transform:uppercase;color:#c7b489}
  #tsn4a8anim .day b{font-family:${N.DISP};font-size:28px;letter-spacing:0;color:#efe6d2;font-variant-numeric:tabular-nums}
  #tsn4a8anim .dv{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;text-align:center}
  #tsn4a8anim .dv .ic{color:rgba(255,255,255,.45);transition:color .8s cubic-bezier(.16,1,.3,1),filter .8s cubic-bezier(.16,1,.3,1)}
  #tsn4a8anim .dv .dn{font-size:13px;font-weight:600;color:#fff}
  #tsn4a8anim .dv .ds{font-size:11px;color:rgba(255,255,255,.86)}
  #tsn4a8anim .lap{border-style:dashed}
  #tsn4a8anim .cl.lit .ic{color:#efe6d2;filter:drop-shadow(0 0 8px rgba(239,230,210,.8))}
  `;
  function hands(el,h,m,label){ var ck=el.querySelector('.ck'); ck.style.setProperty('--h',h+'deg'); ck.style.setProperty('--m',m+'deg'); el.querySelector('.tm').textContent=label; }
  N.page({
    key:'tsn4a8', re:/\/(?:lektionen\/)?wiederkehrende-routinen-einrichten\/?$/,
    img:N.COV('l48'), eyebrow:'L 4.8', title:'Berichte <span class="ts-gold">kommen lassen</span>', alt:'Zeitgesteuerte Aufgaben mit Claude für den Wochenbericht',
    intro:
      '<p>Es gibt eine Sorte Arbeit, die nie dringend ist und deshalb selten passiert. Der Blick auf die Zahlen der Woche gehört dazu. Die Auswertungen aus Lektion drei funktionieren, und trotzdem lässt du sie nach ein paar Wochen nicht mehr laufen, weil montags immer etwas dazwischenkommt.</p>'+
      '<p>In dieser Lektion hängen wir die Auswertung an eine Uhrzeit. Claude führt sie in der Cloud aus, auch wenn dein Laptop zugeklappt ist, und legt dir montags früh <b>eine Seite in deine Key Metrics</b>, die du in wenigen Minuten liest. Sie berichtet und ändert in deinen Datenbanken nichts.</p>',
    anim:{
      id:'tsn4a8anim', eyebrow:'Montag, kurz nach sechs', title:'Der Bericht wartet schon auf <span class="g">dich</span>.',
      sub:'Eine zeitgesteuerte Aufgabe startet zur festen Uhrzeit in der Cloud, liest dein Backoffice und schreibt eine einzige neue Seite.',
      html:html, css:css, note:'Beispielwerte',
      beats:[
        {t:200, s:1, cap:'Links die Uhr, in der Mitte dein Laptop und Claude in der Cloud, rechts die Seite, die gleich entsteht.'},
        {t:2600, s:1, cap:'Montag, sieben Minuten nach sechs. Die Aufgabe startet zu der Uhrzeit, die du einmal festgelegt hast.'},
        {t:5400, s:1, cap:'Dein Laptop bleibt zugeklappt. Die Aufgabe läuft bei Claude in der Cloud und erreicht Notion über die Verbindung aus deinem Claude-Konto.'},
        {t:8000, s:1, cap:'Zuerst kommen die Zahlen: die Gerichte mit dem höchsten Wareneinsatz und die Preise, die sich in der letzten Woche geändert haben.'},
        {t:10600, s:1, cap:'Dann das, was deine Aufmerksamkeit braucht: Gerichte über deiner Grenze und Lücken in deinen Daten.'},
        {t:13200, s:1, cap:'Die Seite ist fertig. In deinen Datenbanken hat sich nichts verändert, das ist bei einem Bericht die Regel.'}
      ],
      reset:function(el){ el.classList.remove('k3','k4','k5'); hands(el,0,0,'00:00'); el.querySelector('.cl').classList.remove('lit'); },
      onBeat:function(el,i,T,jump){
        if(i===1){ hands(el,183.5,42,'06:07'); }
        if(i===2){ el.querySelector('.cl').classList.add('lit'); }
        if(i===3) el.classList.add('k3');
        if(i===4) el.classList.add('k4');
        if(i===5) el.classList.add('k5');
      },
      final:function(el){ el.classList.add('k3','k4','k5'); hands(el,183.5,42,'06:07'); el.querySelector('.cl').classList.add('lit'); }
    },
    secs:[
      {id:'tsn4a8-was', html:
        '<div class="tsn4-eb">Was das ist</div>'+
        '<h3>Ein Auftrag, an eine <span class="g">Uhrzeit</span> gehängt</h3>'+
        '<p class="lead">Claude nennt das Scheduled tasks, zeitgesteuerte Aufgaben. Bis vor Kurzem hießen sie Routinen, und an manchen Stellen steht noch der alte Name. Es ist derselbe Auftrag, den du sonst selbst startest, nur mit einem Termin.</p>'+
        '<table class="tsn4-tbl"><tr><th>Was</th><th>Stand November 2026</th></tr>'+
          '<tr><td>Wo sie läuft</td><td>In der Cloud bei Anthropic. Dein Rechner darf aus sein.</td></tr>'+
          '<tr><td>Welcher Tarif</td><td>Pro, Max, Ultra, Team und Enterprise. Jeder Lauf zählt zu deinem normalen Claude-Kontingent.</td></tr>'+
          '<tr><td>Wo du sie anlegst</td><td>In der Claude-App in der Seitenleiste unter „Scheduled“ oder direkt im Gespräch, auf claude.ai/code/routines oder in Claude Code mit /schedule.</td></tr>'+
          '<tr><td>Wie sie an Notion kommt</td><td>Über die Notion-Verbindung in deinem Claude-Konto, die du in Lektion eins unter Anpassen, Konnektoren angelegt hast.</td></tr>'+
          '<tr><td>Wie oft</td><td>Höchstens einmal pro Stunde. Für einen Wochenbericht spielt das keine Rolle.</td></tr>'+
        '</table>'+
        '<p class="tsn4-note">Quelle: Claude-Code-Dokumentation zu Scheduled tasks, geprüft am 01.11.2026. Die Funktion ist dort als Vorschau gekennzeichnet, Details können sich ändern.</p>'+
        '<p><span class="gl">Leg die Uhrzeit ein paar Minuten nach der vollen Stunde.</span> Aufgaben, die genau zur vollen Stunde starten sollen, können laut Anthropic einige Minuten später beginnen. Deshalb steht in der Animation sieben nach sechs.</p>'
      },
      {id:'tsn4a8-bau', html:
        '<div class="tsn4-eb">Dein Wochenblick</div>'+
        '<h3>Die Aufgabe <span class="g">anlegen</span></h3>'+
        '<p class="lead">Für einen Bericht aus Notion brauchst du kein Code-Projekt. Legst du die Aufgabe ohne Repository an, läuft sie als Aufgabe in deinem Claude-Konto, mit deinen Verbindungen.</p>'+
        '<div class="tsn4-do"><span class="k">Schritt für Schritt</span><ol>'+
          '<li>Prüf in der Claude-App unter <b>Anpassen, Konnektoren</b>, dass Notion verbunden ist.</li>'+
          '<li>Öffne <b>claude.ai/code/routines</b> und leg eine neue Aufgabe an. Wähl kein Repository aus.</li>'+
          '<li>Gib ihr einen Namen wie „Wochenblick“ und füg den Auftrag aus dem Kasten ein.</li>'+
          '<li>Als Auslöser einen <b>Zeitplan</b> wählen: wöchentlich, Montag, 06:07 in deiner Zeitzone.</li>'+
          '<li>Unter den Verbindungen alles außer <b>Notion</b> entfernen. Sie sind standardmäßig alle eingeschlossen.</li>'+
          '<li>Speichern und mit <b>Run now</b> einmal sofort auslösen, statt bis Montag zu warten.</li>'+
        '</ol></div>'+
        N.cmd('Auftrag für den Wochenblick', 'Lies mein Backoffice in Notion und leg im Bereich Key Metrics eine neue Seite an, Titel „Wochenblick“ mit dem heutigen Datum.\n\nNimm ausschließlich Zahlen aus den Feldern der Datenbanken. Schätze nichts und nenne zu jeder Zahl den Eintrag, aus dem sie stammt.\n\nInhalt:\n1. Die fünf Gerichte mit dem höchsten „Wareneinsatz ( % )“.\n2. Alle Artikel, deren „Preis geändert am“ in den letzten sieben Tagen liegt, mit vorherigem und aktuellem Preis.\n3. Alle Gerichte mit einem „Wareneinsatz ( % )“ über [deine Grenze] Prozent.\n4. Alle Artikel ohne „Preis pro Unit (€)“ und alle Gerichte ohne „Verkaufspreis ( Eur )“.\n\nÄndere in keiner Datenbank etwas. Die neue Seite ist das Einzige, was du anlegst.')
      },
      {id:'tsn4a8-regel', html:
        '<div class="tsn4-eb">Die Regel</div>'+
        '<h3>Berichte ja, <span class="g">Änderungen</span> nein</h3>'+
        '<p class="lead">Bei allem, was du bis hierher gebaut hast, saß ein Mensch vor der Vorschau. Bei einer zeitgesteuerten Aufgabe sitzt niemand davor.</p>'+
        '<p>Eine Aufgabe in der Cloud läuft im automatischen Modus. Ein Prüfmodell lässt dabei vieles zu, was in deiner eigenen Sitzung eine Rückfrage auslösen würde, auch das Schreiben über eine Verbindung. Deshalb steht die Regel im Auftrag selbst, und deshalb liest du die ersten Läufe ganz.</p>'+
        '<p><span class="gl">Schreibende Aufgaben gibt es bei mir erst,</span> wenn ein Ablauf über Monate von Hand gelaufen ist und ich genau weiß, wie er sich verhält. Fang mit Berichten an. Jeder Lauf erscheint mit allem, was Claude getan hat, in der Liste der Aufgabe, und was in Notion passiert ist, zeigt dir die Änderungsliste aus Lektion vier.</p>'+
        '<h4>Wenn die Aufgabe deine <span class="g">Dateien</span> braucht.</h4>'+
        '<p>Eine Aufgabe in der Cloud sieht deinen Rechner nicht, also auch nicht den Ordner mit den Lieferscheinen. Dafür gibt es in der Claude-App die lokalen Aufgaben. Sie laufen auf deinem Rechner und nur, solange er wach und die App geöffnet ist. Eine sinnvolle lokale Aufgabe ist zum Beispiel: Montag früh die neuen Lieferscheine lesen und die Vorschau als Datei in den Ordner legen, damit du sie beim ersten Kaffee freigibst.</p>'+
        '<h4>Agent oder <span class="g">Aufgabe</span>?</h4>'+
        '<p>Einen Bericht, der nur Notion liest, kann auch ein Custom Agent aus Lektion sechs schreiben. Im Business-Tarif ist das der naheliegende Weg. Die zeitgesteuerte Aufgabe von Claude lohnt sich, wenn du Notion im Plus-Tarif nutzt oder wenn der Bericht Daten aus anderen Diensten braucht, die du mit Claude verbunden hast.</p>'+
        '<div class="tsn4-err">'+
          '<div><b>Verbindung fehlt.</b> Läuft die Aufgabe ohne Ergebnis durch, fehlt meist die Notion-Verbindung in deinem Claude-Konto. Die Verbindung in Claude Code auf deinem Rechner reicht für die Cloud nicht.</div>'+
          '<div><b>Zu viele Verbindungen.</b> Alles, was du verbunden hast, ist anfangs eingeschlossen. Entfern alles, was die Aufgabe nicht braucht.</div>'+
          '<div><b>Nicht gegengeprüft.</b> Prüf in den ersten vier Wochen zwei Zahlen je Bericht von Hand in Notion. Danach weißt du, ob du ihm trauen kannst.</div>'+
        '</div>'
      }
    ],
    emp:{ id:'tsn4a8emp', kind:'Nutzung', animTitle:'Die ersten', animGold:'vier Wochen',
      steps:['Sofort auslösen','Zwei Zahlen prüfen','Auftrag schärfen','Einfach lesen'],
      intro:'So wird aus der zeitgesteuerten Aufgabe ein Bericht, dem du vertraust.',
      points:[
        'Lös die Aufgabe nach dem Anlegen <b>sofort einmal aus</b> und lies das Ergebnis Zeile für Zeile.',
        'Prüf in den ersten vier Wochen je Bericht <b>zwei Zahlen</b> von Hand in Notion.',
        'Kommt dir etwas komisch vor, liegt es fast immer am <b>Auftrag</b>. Schärf ihn nach, statt das Werkzeug abzuschreiben.',
        'Ab dem zweiten Monat liest du den Bericht <b>einfach</b> und entscheidest, wo du handelst.'
      ]
    },
    learn:[
      'Du legst eine <b>zeitgesteuerte Aufgabe</b> an, die in der Cloud läuft, auch wenn dein Rechner aus ist.',
      'Du hast einen <b>Wochenblick</b>, der nur belegte Zahlen aus Notion enthält.',
      'Du hältst dich an die Regel: Aufgaben <b>berichten</b>, sie ändern nichts in deinen Datenbanken.',
      'Du weißt, wann eine <b>lokale Aufgabe</b> oder ein Notion Agent der bessere Weg ist.'
    ],
    next:'/lektionen/wer-macht-was-im-backoffice'
  });
})();

/* ---------- L4.9 · Wer macht was im Backoffice ---------- */
(function(){
  var N=window.__tsn4; if(!N) return;
  var I=N.IMG, R=N.RING, P=function(x,y,w,h){ return N.pos(x,y,w,h,470); };
  var ST=[{x:30,y:350,w:300,n:'Automation',c:'immer exakt gleich',k:'ab Notion Plus, keine Kosten je Lauf'},
          {x:350,y:240,w:300,n:'Notion Agent',c:'mitdenken, alles in Notion',k:'Business-Tarif, Credits je Aufgabe'},
          {x:670,y:130,w:300,n:'Claude Code',c:'etwas kommt von außen',k:'dein Claude-Tarif'}];
  var steps=ST.map(function(s,i){ return '<div class="cardx stp s'+i+'" data-s="1" style="'+P(s.x,s.y,s.w,96)+'"><span class="sn">'+(i+1)+'</span><span class="sh">'+s.n+'</span><span class="sc2">'+s.c+'</span><span class="sk">'+s.k+'</span></div>'; }).join('');
  var TK=[{t:'Karten-Datum setzen',img:I+'g-rote-bete-risotto.webp',x:40,y:296,b:2},
          {t:'Kartentext schreiben',img:I+'g-entenbrust.webp',x:360,y:186,b:3},
          {t:'Lieferschein-PDF einlesen',img:R+'lieferanten.webp',x:680,y:76,b:4},
          {t:'Meldung bei Preisänderung',img:I+'i-olivenoel.webp',x:185,y:296,b:5},
          {t:'Kassenexport abgleichen',img:I+'g-rinderfilet.webp',x:825,y:76,b:6}];
  var tasks=TK.map(function(t,i){ return '<div class="tk k'+i+'" data-s="'+t.b+'" style="'+P(t.x,t.y,140,48)+'"><span class="md"><img src="'+t.img+'" alt=""></span><span>'+t.t+'</span></div>'; }).join('');
  var lines='';
  var start='<div class="go" data-s="1" style="'+P(20,20,240,60)+'"><b>Fang unten an.</b><span>Mit jeder Stufe steigen Können und Kosten.</span></div>';
  var html='<div class="sc"><div class="st" style="aspect-ratio:1000/470">'+lines+start+steps+tasks+'</div></div>';
  var css=`
  #tsn4a9anim .stp{display:grid;grid-template-columns:34px 1fr;grid-template-rows:auto auto auto;column-gap:12px;row-gap:3px;align-content:center;padding:0 16px}
  #tsn4a9anim .sn{grid-row:1 / 4;width:34px;height:34px;border-radius:50%;border:1px solid rgba(199,180,137,.6);font:700 13px/32px ${N.SANS};text-align:center;color:#c7b489;align-self:center}
  #tsn4a9anim .sh{font-family:${N.DISP};font-weight:600;font-size:18px;color:#fff}
  #tsn4a9anim .sc2{font-size:12px;color:#efe6d2}
  #tsn4a9anim .sk{font-size:11px;color:rgba(255,255,255,.86)}
  #tsn4a9anim .tk{display:flex;align-items:center;gap:8px;padding:5px 8px 5px 5px;border-radius:12px;background:linear-gradient(rgba(199,180,137,.1),rgba(199,180,137,.1)),#05060b;border:1px solid rgba(199,180,137,.55);
    font-size:11.5px;font-weight:600;line-height:1.3;color:#fff;box-shadow:0 14px 30px -16px rgba(0,0,0,.9);z-index:4}
  #tsn4a9anim .tk .md{width:34px;height:34px;flex:0 0 34px;display:block;border-width:1px;box-shadow:none}
  #tsn4a9anim.js .tk{transform:translate(var(--dx),var(--dy)) scale(.9)}
  #tsn4a9anim .k0{--dx:-40px;--dy:120px}#tsn4a9anim .k1{--dx:-330px;--dy:230px}#tsn4a9anim .k2{--dx:-620px;--dy:340px}#tsn4a9anim .k3{--dx:-170px;--dy:120px}#tsn4a9anim .k4{--dx:-750px;--dy:340px}
  #tsn4a9anim.built:not(.hid) .tk{animation:tsn4a9f 6.5s ease-in-out infinite}
  #tsn4a9anim.built:not(.hid) .k1,#tsn4a9anim.built:not(.hid) .k4{animation-delay:-2.2s}#tsn4a9anim.built:not(.hid) .k2{animation-delay:-4.1s}
  @keyframes tsn4a9f{0%,100%{translate:0 0}50%{translate:0 -6px}}
  #tsn4a9anim .stp.lit .sn{background:#c7b489;color:#05060b}
  #tsn4a9anim .go{display:flex;flex-direction:column;gap:5px}
  #tsn4a9anim .go b{font-family:${N.DISP};font-size:20px;color:#fff;font-weight:600}
  #tsn4a9anim .go span{font-size:12px;color:rgba(255,255,255,.86)}
  `;
  function litS(el,n){ for(var i=0;i<3;i++){ var s=el.querySelector('.s'+i); if(s) s.classList.toggle('lit', n.indexOf(i)>-1); } }
  N.page({
    key:'tsn4a9', re:/\/(?:lektionen\/)?wer-macht-was-im-backoffice\/?$/,
    img:N.COV('l49'), eyebrow:'L 4.9', title:'Wer macht <span class="ts-gold">was</span>', alt:'Automation, Notion Agent oder Claude Code richtig zuordnen',
    intro:
      '<p>Du hast jetzt drei Helfer im Backoffice: Automationen, die immer dasselbe tun, Notion Agents, die im Hintergrund mitdenken, und Claude Code, das von außen holt, was dein System braucht. Ab jetzt wirst du im Alltag ständig Ideen haben, was sich noch abnehmen ließe.</p>'+
      '<p>In dieser letzten Lektion bekommst du die Regel, mit der du jede dieser Ideen dem richtigen Werkzeug zuordnest, und eine ehrliche Übersicht, <b>was jeder Weg kostet</b>. Am Ende steht dein Wochenplan, und wir lösen ein, was Modul zwei für mehrere Standorte versprochen hat.</p>',
    anim:{
      id:'tsn4a9anim', eyebrow:'Die Sortierregel', title:'Jede Aufgabe auf ihre <span class="g">Stufe</span>.',
      sub:'Drei Stufen, von unten nach oben. Eine Aufgabe steigt nur so weit, wie sie es wirklich braucht.',
      html:html, css:css,
      beats:[
        {t:200, s:1, cap:'Drei Stufen. Unten die Automation, in der Mitte der Notion Agent, oben Claude Code. Je höher, desto mehr kann das Werkzeug, und desto mehr kostet es.'},
        {t:2800, s:2, cap:'Ein Datum setzen, wenn ein Gericht auf die Karte kommt, ist jedes Mal exakt dasselbe. Die Aufgabe bleibt auf der untersten Stufe.'},
        {t:5200, s:3, cap:'Ein Kartentext braucht jemanden, der mitdenkt, und alles dafür liegt in Notion. Die Aufgabe steigt eine Stufe, zum Agenten.'},
        {t:7600, s:4, cap:'Der Lieferschein kommt als Datei von außen. Das kann nur Claude Code, also steigt diese Aufgabe bis ganz nach oben.'},
        {t:10000, s:5, cap:'Eine Meldung bei jeder Preisänderung ist wieder immer gleich. Auch wenn sie nach einer Aufgabe für die KI klingt, bleibt sie unten.'},
        {t:12400, s:6, cap:'Den Export aus deiner Kasse mit dem Wareneinsatz abgleichen braucht eine Datei von außen. Claude Code.'}
      ],
      reset:function(el){ litS(el,[]); },
      onBeat:function(el,i){ var m={1:[0],2:[0,1],3:[0,1,2],4:[0,1,2],5:[0,1,2]}; if(m[i]) litS(el,m[i]); },
      final:function(el){ litS(el,[0,1,2]); }
    },
    secs:[
      {id:'tsn4a9-regel', html:
        '<div class="tsn4-eb">Die Regel</div>'+
        '<h3>Drei Fragen, in dieser <span class="g">Reihenfolge</span></h3>'+
        '<p class="lead">Du stellst die Fragen von unten nach oben. Bei der ersten, die du mit Ja beantwortest, hast du dein Werkzeug.</p>'+
        '<div class="tsn4-do"><span class="k">Die Sortierregel</span><ol>'+
          '<li><b>Passiert jedes Mal exakt dasselbe</b>? Dann nimm eine Notion-Automation. Sie ist in jedem bezahlten Notion-Tarif enthalten und kostet nichts je Durchlauf.</li>'+
          '<li><b>Muss jemand mitdenken, und liegt alles in Notion</b>? Dann nimm einen Notion Agent. Er denkt mit und läuft im Hintergrund, im Business-Tarif und gegen Credits.</li>'+
          '<li><b>Kommt etwas von außen dazu, eine Datei, eine Mail, ein anderes Programm</b>? Dann nimm Claude Code, im Alltag selbst gestartet oder als zeitgesteuerte Aufgabe.</li>'+
        '</ol></div>'+
        '<p style="margin-top:18px">Der häufigste Fehler ist, oben anzufangen. Wer ein starkes Werkzeug hat, baut damit auch die Dinge, die eine schlichte Wenn-Dann-Regel besser und günstiger erledigt. Fang unten an.</p>'+
        '<p>Eine vierte Stufe lernst du in Modul fünf kennen: Wenn Gäste von außen rund um die Uhr eine Antwort in Sekunden erwarten, etwa bei Reservierungsanfragen, braucht es einen eigenen Agenten auf einem Server. Für dein Backoffice reichen die drei Stufen hier.</p>'
      },
      {id:'tsn4a9-kosten', html:
        '<div class="tsn4-eb">Was es kostet</div>'+
        '<h3>Jede Stufe hat ihren <span class="g">Preis</span></h3>'+
        '<p class="lead">Die Kosten sind ein Grund mehr, unten anzufangen. So sieht die Rechnung im November 2026 aus.</p>'+
        '<table class="tsn4-tbl"><tr><th>Stufe</th><th>Was du brauchst</th><th>Was jeder Lauf kostet</th></tr>'+
          '<tr><td><b>Automation</b></td><td>Notion Plus oder höher</td><td>nichts zusätzlich</td></tr>'+
          '<tr><td><b>Notion Agent</b></td><td>Notion Business oder Enterprise</td><td>Credits: nach Notions Schätzung etwa fünf bis fünfundzwanzig je Aufgabe, zugekauft zehn US-Dollar je tausend</td></tr>'+
          '<tr><td><b>Claude Code</b></td><td>ein Claude-Tarif ab Pro</td><td>Verbrauch aus deinem Claude-Kontingent, auch bei zeitgesteuerten Aufgaben</td></tr>'+
        '</table>'+
        '<p class="tsn4-note">Quellen: notion.com/pricing, Notion-Hilfe zu Custom Agents und Credits, Claude-Code-Dokumentation. Die Preise der Claude-Tarife stehen in Modul drei.</p>'
      },
      {id:'tsn4a9-zwoelf', html:
        '<div class="tsn4-eb">Eingeordnet</div>'+
        '<h3>Zwölf Aufgaben aus dem <span class="g">Backoffice</span></h3>'+
        '<p class="lead">So ordne ich die Aufgaben ein, die in fast jedem Betrieb anfallen. Nimm die Liste als Vorlage für deine eigenen Ideen.</p>'+
        '<table class="tsn4-tbl"><tr><th>Aufgabe</th><th>Stufe</th><th>Warum</th></tr>'+
          '<tr><td>Datum setzen, wenn ein Gericht auf die Karte kommt</td><td><b>Automation</b></td><td>immer gleich</td></tr>'+
          '<tr><td>Meldung, wenn ein Artikel nachbestellt werden muss</td><td><b>Automation</b></td><td>immer gleich</td></tr>'+
          '<tr><td>Zählfelder für die neue Inventur leeren</td><td><b>Automation</b> als Button</td><td>immer gleich, dein Team löst aus</td></tr>'+
          '<tr><td>Monatsseite in den Key Metrics anlegen</td><td><b>Automation</b></td><td>immer gleich, fester Termin</td></tr>'+
          '<tr><td>Zubereitung für eine neue Rezeptur vorschlagen</td><td><b>Notion Agent</b></td><td>mitdenken, alles in Notion</td></tr>'+
          '<tr><td>Kartentext für ein Gericht schreiben</td><td><b>Notion Agent</b></td><td>mitdenken, alles in Notion</td></tr>'+
          '<tr><td>Lücken in den Daten jeden Montag auflisten</td><td><b>Notion Agent</b></td><td>mitdenken, alles in Notion</td></tr>'+
          '<tr><td>Lieferscheine und Preislisten einlesen</td><td><b>Claude Code</b></td><td>Datei oder Foto von außen</td></tr>'+
          '<tr><td>Auswertung als Excel-Datei für den Steuerberater</td><td><b>Claude Code</b></td><td>Datei nach außen</td></tr>'+
          '<tr><td>Kassenexport mit dem Wareneinsatz abgleichen</td><td><b>Claude Code</b></td><td>Datei von außen</td></tr>'+
          '<tr><td>Wochenblick im Notion-Plus-Tarif</td><td><b>Claude Code</b>, zeitgesteuert</td><td>kein Agent im Tarif</td></tr>'+
          '<tr><td>Neue Artikel in die Zähllisten der Standorte übertragen</td><td><b>Claude Code</b></td><td>über getrennte Teamspaces hinweg</td></tr>'+
        '</table>'
      },
      {id:'tsn4a9-standorte', html:
        '<div class="tsn4-eb">Mehrere Standorte</div>'+
        '<h3>Der Abgleich zwischen <span class="g">Zentrale und Standort</span></h3>'+
        '<p class="lead">In Modul zwei hast du gesehen, warum die Zähllisten deiner Standorte bewusst ohne Verknüpfung zur Master-Inventur auskommen: Dein Standortleiter soll zählen, ohne deine Kalkulation zu sehen. Den Abgleich übernimmt Claude Code, weil es mit deinem Konto beide Teamspaces sieht.</p>'+
        '<p><span class="gl">In die eine Richtung gehen neue Artikel.</span> Nimmst du einen Artikel neu auf, landet er in der Zählliste jedes Standorts, mit Name, Einheit und Lagerort, aber ohne Preis.</p>'+
        N.cmd('Prompt', 'Vergleiche meine Master-Inventurliste mit den Zähllisten meiner Standorte. Liste mir alle Artikel auf, die in der Master-Inventur stehen, in einer Zählliste aber fehlen. Zeig mir je Standort eine Vorschau der neuen Einträge, nur mit Name, Einheit und Lagerort, ohne Preise. Schreib erst nach meinem „Ja, schreiben“.')+
        '<p><span class="gl">In die andere Richtung gehen die gezählten Mengen.</span> Nach der Inventur holst du die Zahlen aus den Standorten in deine Auswertung.</p>'+
        N.cmd('Prompt', 'Lies die gezählten Mengen aus den Zähllisten aller Standorte für die Inventur dieses Monats. Zeig mir je Artikel und Standort die Menge als Vorschau und trag sie nach meinem „Ja, schreiben“ in die Master-Inventur ein. Fehlt bei einem Artikel eine Zählung, nenne ihn, statt eine Menge anzunehmen.')
      },
      {id:'tsn4a9-plan', html:
        '<div class="tsn4-eb">Dein Wochenplan</div>'+
        '<h3>So läuft dein Backoffice <span class="g">ab jetzt</span></h3>'+
        '<p class="lead">Ein Beispiel, wie sich die drei Helfer in einer normalen Woche verteilen. Pass Tage und Uhrzeiten an deinen Betrieb an.</p>'+
        '<table class="tsn4-tbl"><tr><th>Wann</th><th>Was</th><th>Wer</th></tr>'+
          '<tr><td>Montag, 06:07</td><td>Wochenblick liegt in den Key Metrics</td><td>zeitgesteuerte Aufgabe oder Notion Agent</td></tr>'+
          '<tr><td>Montag, nach dem Kaffee</td><td>Lieferscheine der Woche einlesen und freigeben</td><td>Claude Code, du prüfst</td></tr>'+
          '<tr><td>Jeden Tag</td><td>Nachbestellen, Kartendaten, Preisänderungen</td><td>Automationen</td></tr>'+
          '<tr><td>Wenn eine Rezeptur entsteht</td><td>Zubereitung als Vorschlag</td><td>Notion Agent</td></tr>'+
          '<tr><td>Freitag</td><td>Vorschläge mit Prüfstatus durchsehen</td><td>du</td></tr>'+
          '<tr><td>Monatsende</td><td>Inventur zählen und abgleichen</td><td>dein Team mit dem Button, dann Claude Code</td></tr>'+
        '</table>'+
        '<h4>Was wir in diesem <span class="g">Modul</span> gebaut haben.</h4>'+
        '<p>Somit haben wir ein Backoffice, das mehr ist als ein Ablageort. Claude kennt deine Vorlage und ihre Regeln. Du fragst es in normaler Sprache und bekommst belegte Zahlen. Es pflegt deine Datenbanken mit einer Vorschau vor jeder Änderung, liest deine Lieferscheine und zeigt dir, was eine Preiserhöhung im Teller bedeutet. Ein Agent bereitet im Hintergrund vor, Automationen erledigen, was immer gleich ist, und montags früh liegt ein Bericht bereit, um den du dich nicht gekümmert hast.</p>'+
        '<p>In Modul fünf öffnen wir dein System nach außen. Dort beantwortet ein eigener Agent die Reservierungsanfragen deiner Gäste und trägt sie in dein Backoffice ein.</p>'
      }
    ],
    emp:{ id:'tsn4a9emp', kind:'Nutzung', animTitle:'Für jede', animGold:'neue Idee',
      steps:['Unten fragen','Mitte fragen','Oben fragen','Kosten prüfen'],
      intro:'Diese Reihenfolge gehe ich bei jeder neuen Idee durch, bevor ich irgendetwas baue.',
      points:[
        'Frag zuerst, ob die Aufgabe <b>immer exakt gleich</b> abläuft. Wenn ja, baust du eine Automation und bist fertig.',
        'Muss jemand <b>mitdenken</b> und liegt alles in Notion, prüfst du, ob dein Tarif Agents enthält.',
        'Kommt etwas <b>von außen</b>, schreibst du den Auftrag für Claude Code und entscheidest, ob du ihn selbst startest oder zeitgesteuert laufen lässt.',
        'Schau zum Schluss auf die <b>Kosten je Lauf</b>. Eine Aufgabe, die täglich läuft, rechnet sich anders als eine im Monat.'
      ]
    },
    learn:[
      'Du ordnest jede Idee mit der <b>Sortierregel</b> von unten nach oben ein.',
      'Du kennst die <b>Kosten</b> jeder Stufe und fängst deshalb unten an.',
      'Du hältst die Zähllisten deiner <b>Standorte</b> mit Claude Code abgeglichen.',
      'Du hast einen <b>Wochenplan</b>, in dem jeder Helfer seinen festen Platz hat.'
    ],
    next:'/modul-5-claude-code-notion'
  });
})();
