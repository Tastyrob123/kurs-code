/* ---------- L4.6 · Notion Agents ---------- */
(function(){
  var N=window.__tsn4; if(!N) return;
  var I=N.IMG, P=function(x,y,w,h){ return N.pos(x,y,w,h,450); };
  var tl='<div class="tl" data-s="1" style="'+P(30,28,940,58)+'"><span class="moon"></span><span class="sun"></span><div class="tr"><i class="mk" style="left:14%"></i><i class="mk" style="left:88.9%"></i><span class="run"><i class="dot"></i></span></div><span class="t0">22:00</span><span class="t1">07:00</span></div>';
  var trig='<div class="cardx tg" data-s="1" style="'+P(30,120,300,300)+'"><span class="k">Auslöser</span>'+
    '<div class="ti x1"><i></i><span>Wenn eine neue<br><b>Rezeptur</b> entsteht</span></div><div class="ti x2"><i></i><span>Wiederkehrend<br><b>montags früh</b></span></div>'+
    '<span class="f">Der Agent startet von selbst, du musst nichts anstoßen.</span></div>';
  var ag='<div class="cardx agc" data-s="1" style="'+P(350,120,300,300)+'"><div class="av"><span>A</span></div><div class="an">Küchen-Vorarbeiter</div><div class="ad">Custom Agent in deinem Notion</div>'+
    '<div class="acc"><span class="ok">Rezepturen</span><span class="ok">Zutaten</span><span class="ok">Key Metrics</span><span class="no lk">Mitarbeiterlöhne</span></div>'+
    '<div class="cr">Notion schätzt je Aufgabe <b>5 bis 25 Credits</b></div></div>';
  var log='<div class="cardx lg" data-s="1" style="'+P(670,120,300,300)+'"><span class="k">Aktivitätsprotokoll</span>'+
    '<div class="le e1"><span class="md"><img src="'+I+'g-kuerbis-veloute.webp" alt=""></span><span><b>23:10</b> Rezeptur Kürbis-Velouté: Zubereitung vorgeschlagen<em>Vorschlag, ungeprüft</em></span></div>'+
    '<div class="le e2"><span class="md"><img src="'+N.RING+'zutaten.webp" alt=""></span><span><b>06:00</b> Pflegebericht abgelegt: drei Zutaten ohne Einkaufspreis</span></div>'+
    '<div class="le e3"><span class="md"><img src="'+N.RING+'mitarbeiter.webp" alt=""></span><span><b>08:15</b> Du prüfst beides beim ersten Kaffee</span></div></div>';
  var lines='<svg class="lines" viewBox="0 0 1000 450" preserveAspectRatio="none"><path class="ln" pathLength="1" data-s="1" d="M330 270 H350"/><path class="ln" pathLength="1" data-s="1" d="M650 270 H670"/>'+
    '<path class="sp" pathLength="1" d="M330 270 H350"/><path class="sp" pathLength="1" style="animation-delay:1s" d="M650 270 H670"/></svg>';
  var html='<div class="sc"><div class="st" style="aspect-ratio:1000/450">'+lines+tl+trig+ag+log+'</div></div>';
  var css=`
  #tsn4a6anim .tl .tr{position:absolute;left:44px;right:44px;top:22px;height:2px;background:linear-gradient(90deg,rgba(120,140,200,.35),rgba(199,180,137,.5))}
  #tsn4a6anim .tl .run{position:absolute;left:0;right:0;top:0;height:0;transform:translateX(calc((var(--p,0) - 1) * 100%));transition:transform 1.8s ${N.EASE}}
  #tsn4a6anim .tl .dot{position:absolute;left:100%;top:-5px;width:12px;height:12px;margin-left:-6px;border-radius:50%;background:#efe6d2;box-shadow:0 0 16px rgba(239,230,210,.9)}
  #tsn4a6anim .tl .mk{position:absolute;top:-4px;width:2px;height:10px;margin-left:-1px;background:rgba(199,180,137,.7)}
  #tsn4a6anim .tl .t0,#tsn4a6anim .tl .t1{position:absolute;top:44px;font:600 9.5px/1 ${N.SANS};letter-spacing:.1em;color:rgba(255,255,255,.62)}
  #tsn4a6anim .tl .t0{left:30px}#tsn4a6anim .tl .t1{right:30px}
  #tsn4a6anim .moon,#tsn4a6anim .sun{position:absolute;top:10px;width:24px;height:24px;border-radius:50%}
  #tsn4a6anim .moon{left:0;box-shadow:inset -6px -3px 0 0 #d8c9ab}
  #tsn4a6anim .sun{right:0;background:radial-gradient(circle,#efe6d2,#c7b489);opacity:.35;transition:opacity 1.2s cubic-bezier(.16,1,.3,1),box-shadow 1.2s cubic-bezier(.16,1,.3,1)}
  #tsn4a6anim.k6 .sun{opacity:1;box-shadow:0 0 24px rgba(239,230,210,.8)}
  #tsn4a6anim .k{display:block;font:600 9.5px/1 ${N.SANS};letter-spacing:.14em;text-transform:uppercase;color:#c7b489;margin-bottom:14px}
  #tsn4a6anim .tg,#tsn4a6anim .lg{padding:18px 18px;display:flex;flex-direction:column;gap:12px}
  #tsn4a6anim .ti{display:flex;gap:12px;align-items:center;padding:12px;border-radius:11px;border:1px solid rgba(255,255,255,.1);font-size:12.5px;line-height:1.4;color:rgba(255,255,255,.86);transition:all .6s ${N.EASE}}
  #tsn4a6anim .ti b{color:#fff}
  #tsn4a6anim .ti i{width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,.2);flex:0 0 10px;transition:all .6s cubic-bezier(.16,1,.3,1)}
  #tsn4a6anim .ti.on{border-color:rgba(199,180,137,.55);background:rgba(199,180,137,.08)}
  #tsn4a6anim .ti.on i{background:#c7b489;box-shadow:0 0 12px rgba(199,180,137,.9)}
  #tsn4a6anim .f{margin-top:auto;font-size:11.5px;line-height:1.45;color:rgba(255,255,255,.86)}
  #tsn4a6anim .agc{display:flex;flex-direction:column;align-items:center;text-align:center;padding:22px 18px;gap:8px}
  #tsn4a6anim .av{position:relative;width:76px;height:76px;border-radius:50%;border:1.5px solid rgba(199,180,137,.6);display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 35% 30%,rgba(199,180,137,.25),#0b0d14 70%)}
  #tsn4a6anim .av span{font-family:${N.DISP};font-size:30px;color:#efe6d2}
  #tsn4a6anim .av::after{content:"";position:absolute;inset:-9px;border-radius:50%;border:1px solid rgba(199,180,137,.35);opacity:0}
  #tsn4a6anim.work:not(.hid) .av::after,#tsn4a6anim.built:not(.hid) .av::after{animation:tsn4a6halo 2.6s ease-out infinite}
  @keyframes tsn4a6halo{0%{opacity:.8;transform:scale(.9)}80%{opacity:0;transform:scale(1.25)}100%{opacity:0}}
  #tsn4a6anim .an{font-family:${N.DISP};font-weight:600;font-size:18px;color:#fff;margin-top:6px}
  #tsn4a6anim .ad{font-size:11.5px;color:rgba(255,255,255,.86)}
  #tsn4a6anim .acc{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;margin-top:8px}
  #tsn4a6anim .acc span{font:600 10.5px/1 ${N.SANS};padding:6px 8px;border-radius:6px;border:1px solid rgba(143,203,170,.45)}
  #tsn4a6anim .acc .no{border-color:rgba(227,37,82,.5)}
  #tsn4a6anim.k4 .acc .lk{box-shadow:0 0 18px rgba(227,37,82,.35);background:rgba(227,37,82,.1)}
  #tsn4a6anim .cr{margin-top:auto;font-size:11.5px;color:rgba(255,255,255,.86)}#tsn4a6anim .cr b{color:#efe6d2}
  #tsn4a6anim .le{display:flex;gap:10px;align-items:flex-start;font-size:12px;line-height:1.45;color:rgba(255,255,255,.86);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s ${N.EASE}}
  #tsn4a6anim .le .md{width:36px;height:36px;flex:0 0 36px;display:block}
  #tsn4a6anim .le b{color:#c7b489;margin-right:4px}
  #tsn4a6anim .le em{display:inline-block;margin-top:5px;font-style:normal;font:700 9px/1 ${N.SANS};letter-spacing:.1em;text-transform:uppercase;color:#05060b;background:#c7b489;padding:4px 6px;border-radius:4px}
  #tsn4a6anim.js .le{opacity:0;transform:translateY(10px)}
  #tsn4a6anim.js.k3 .e1,#tsn4a6anim.js.k5 .e2,#tsn4a6anim.js.k6 .e3{opacity:1;transform:none}
  `;
  function dot(el,p){ el.querySelector('.tl .run').style.setProperty('--p',p); }
  function ti(el,a,b){ el.querySelector('.x1').classList.toggle('on',a); el.querySelector('.x2').classList.toggle('on',b); }
  N.page({
    key:'tsn4a6', re:/\/(?:lektionen\/)?notion-agents-(?:im-betrieb-)?einsetzen\/?$/,
    eyebrow:'L 4.6', title:'Agenten <span class="ts-gold">beauftragen</span>', alt:'Notion Custom Agents im Backoffice einsetzen',
    intro:
      '<p>Alles, was wir bis hierher gebaut haben, passiert, wenn du am Rechner sitzt und Claude Code startest. Notion hat inzwischen eigene Agenten, die ohne dich arbeiten. Sie sitzen in deinem Workspace, warten auf einen Auslöser und erledigen dann ihre Aufgabe, nachts, am Wochenende oder während du im Service stehst.</p>'+
      '<p>In dieser Lektion richten wir einen solchen Agenten ein, geben ihm eine klare Aufgabe und einen eng begrenzten Bereich, und binden ihn an dieselben Regeln wie Claude. Wir klären auch ehrlich, <b>was er kostet</b> und in welchem Tarif es ihn gibt.</p>',
    anim:{
      id:'tsn4a6anim', eyebrow:'Die Nachtschicht', title:'Er arbeitet, während du <span class="g">schläfst</span>.',
      sub:'Ein Custom Agent wartet auf seinen Auslöser, arbeitet nur in den Bereichen, die du ihm gibst, und schreibt alles in sein Protokoll.',
      html:html, css:css,
      beats:[
        {t:200, s:1, cap:'Oben die Nacht von zehn Uhr abends bis sieben Uhr morgens. Darunter die Auslöser, der Agent mit seinem Bereich und sein Protokoll.'},
        {t:2800, s:1, cap:'Um zehn nach elf legt dein Küchenchef eine neue Rezeptur an. Das ist der Auslöser, der Agent startet von selbst.'},
        {t:5600, s:1, cap:'Er liest die verknüpften Zutaten und schreibt eine erste Zubereitung als Vorschlag, markiert mit dem Prüfstatus aus Lektion vier.'},
        {t:8400, s:1, cap:'Die Mitarbeiterlöhne sind nicht in seinem Bereich, also sieht er sie nicht. Ein Agent arbeitet nur mit dem, was du ihm ausdrücklich gibst.'},
        {t:11200, s:1, cap:'Montag, sechs Uhr: Der zweite Auslöser ist ein fester Termin. Der Agent prüft deine Zutaten auf Lücken und legt einen kurzen Bericht in die Key Metrics.'},
        {t:14000, s:1, cap:'Wenn du morgens kommst, liegt beides im Protokoll. Du prüfst, was er vorbereitet hat, und entscheidest.'}
      ],
      reset:function(el){ el.classList.remove('k3','k4','k5','k6','work'); ti(el,false,false); dot(el,0); },
      onBeat:function(el,i,T,jump){
        if(i===1){ dot(el,.14); T.at(jump?0:1200,function(){ ti(el,true,false); el.classList.add('work'); }); }
        if(i===2){ el.classList.add('k3'); }
        if(i===3){ el.classList.add('k4'); }
        if(i===4){ dot(el,.889); T.at(jump?0:1300,function(){ ti(el,true,true); el.classList.add('k5'); }); }
        if(i===5){ dot(el,1); el.classList.add('k6'); }
      },
      final:function(el){ el.classList.add('k3','k4','k5','k6'); ti(el,true,true); dot(el,1); }
    },
    secs:[
      {id:'tsn4a6-was', html:
        '<div class="tsn4-eb">Was ein Agent ist</div>'+
        '<h3>Ein Mitarbeiter, der nur in Notion <span class="g">arbeitet</span></h3>'+
        '<p class="lead">Notion unterscheidet zwei Arten. Den Notion Agent kennst du aus Modul zwei, das ist der Assistent, mit dem du in Notion sprichst. Die Custom Agents sind etwas anderes: Sie laufen im Hintergrund, ausgelöst durch einen Termin oder ein Ereignis in deinem Workspace.</p>'+
        '<p><span class="gl">Stell ihn dir als Mitarbeiter mit einer einzigen Aufgabe vor.</span> Er bekommt eine schriftliche Anweisung, einen Bereich, in dem er arbeiten darf, und einen oder mehrere Auslöser. Er sucht in deinen Datenbanken, liest Zusammenhänge über mehrere Seiten, legt Einträge an, füllt Felder und schreibt Texte. Und er wartet nicht auf dich.</p>'+
        '<p>Aus der Einführung kennst du den Unterschied zwischen einem Agenten und einer Automation. Hier kommt ein Punkt dazu, der für die Praxis zählt: Ein Custom Agent läuft auf den Rechnern von Notion. Dein Laptop kann zugeklappt im Büro liegen.</p>'
      },
      {id:'tsn4a6-kosten', html:
        '<div class="tsn4-eb">Tarif und Kosten</div>'+
        '<h3>Was ein Agent <span class="g">kostet</span></h3>'+
        '<p class="lead">Custom Agents gibt es nur im Business- und im Enterprise-Tarif von Notion. Sie rechnen in Credits ab, und das solltest du verstehen, bevor du den ersten einrichtest.</p>'+
        '<table class="tsn4-tbl"><tr><th>Was</th><th>Stand November 2026</th></tr>'+
          '<tr><td>Tarif</td><td>Business oder Enterprise</td></tr>'+
          '<tr><td>Credits im Tarif</td><td>Jedes Mitglied hat ein monatliches Kontingent. Ein Agent, den du einrichtest, verbraucht dein Kontingent, auch wenn dein Team ihn nutzt.</td></tr>'+
          '<tr><td>Wenn es aufgebraucht ist</td><td>Weiter geht es mit Notion-Credits, die dein Workspace zukauft: zehn US-Dollar je tausend Credits, sofern der Admin das erlaubt.</td></tr>'+
          '<tr><td>Verbrauch je Aufgabe</td><td>Notion schätzt etwa fünf Credits für einfache, zehn für mittlere und fünfundzwanzig für komplexe Aufgaben.</td></tr>'+
          '<tr><td>Wo du nachschaust</td><td>Einstellungen, Notion AI, Nutzung</td></tr>'+
        '</table>'+
        '<p class="tsn4-note">Quellen: notion.com/pricing und Notion-Hilfe zu Custom Agents und Credits, geprüft am 01.11.2026. Preise ändern sich, prüf sie vor der Einrichtung noch einmal.</p>'+
        '<p><span class="gl">Für die Rechnung heißt das:</span> Ein Agent, der jede neue Rezeptur vorbereitet, läuft bei einer Handvoll neuer Rezepturen im Monat nur ein paar Mal und verbraucht entsprechend wenig. Ein Agent, der bei jeder Änderung an jedem Eintrag anspringt, kann dagegen schnell teuer werden. Wähl deine Auslöser deshalb so eng, wie es die Aufgabe zulässt.</p>'
      },
      {id:'tsn4a6-bau', html:
        '<div class="tsn4-eb">Einrichten</div>'+
        '<h3>Deinen ersten Agenten <span class="g">anlegen</span></h3>'+
        '<p class="lead">Wir bauen den Küchen-Vorarbeiter aus der Animation. Er bereitet jede neue Rezeptur vor, damit du abends prüfst, statt bei null anzufangen.</p>'+
        '<div class="tsn4-do"><span class="k">Schritt für Schritt</span><ol>'+
          '<li>In der Notion-Seitenleiste unter <b>Agents</b> auf das Plus klicken. Du kannst den Agenten im Chat mit Notion AI beschreiben, eine Vorlage nehmen oder leer starten. Wir starten leer, damit du jede Einstellung selbst siehst.</li>'+
          '<li>Die <b>Anweisung</b> aus dem Kasten unten einfügen und an deine Felder anpassen.</li>'+
          '<li>Unter <b>Auslöser</b> einen Notion-Auslöser wählen: Seite zu einer Datenbank hinzugefügt, Datenbank Rezepturen.</li>'+
          '<li>Unter <b>Werkzeuge und Zugriff</b> nur Rezepturen und Zutaten hinzufügen. Alles andere bleibt draußen, und den Zugriff aufs Internet lässt du aus.</li>'+
          '<li>Speichern, eine Test-Rezeptur anlegen und im <b>Aktivitätsprotokoll</b> nachsehen, was der Agent getan hat.</li>'+
        '</ol></div>'+
        N.cmd('Anweisung für den Küchen-Vorarbeiter', 'Du arbeitest ausschließlich in den Datenbanken „TB V : Rezepturen“ und „DB IV : Zutaten“.\n\nWenn eine neue Rezeptur angelegt wird, schreibst du in das Feld Zubereitung einen Vorschlag, der sich nur aus den verknüpften Zutaten und ihren Mengen ergibt. Du erfindest keine Zutaten und keine Mengen.\n\nDu setzt den Prüfstatus auf „Vorschlag, ungeprüft“.\n\nDu änderst keine Preise, keine Mengen und keine Portionsgrößen. Fehlen Angaben, schreibst du in die Zubereitung, was fehlt, statt es zu ergänzen.')+
        '<p class="tsn4-note">Gibt es in deiner Vorlage noch kein Feld für die Zubereitung, legst du es als Textfeld in den Rezepturen an. Den Prüfstatus hast du in Lektion vier angelegt.</p>'+
        '<h4>Zwei weitere Agenten, die sich im Betrieb <span class="g">lohnen</span>.</h4>'+
        '<div class="tsn4-cards c2">'+
          '<div class="tsn4-card"><div class="ph"><img src="'+I+'g-entenbrust.webp" alt=""></div><span class="k">Auslöser: Feld geändert</span><div class="n">Der Kartentext-Schreiber</div><hr><p>Setzt du bei einem Gericht ein Häkchen „Kartentext gewünscht“, schreibt er eine Beschreibung aus Zutaten und Zubereitung, in deinem Ton. Gib ihm zwei, drei deiner besten Texte als Vorbild in die Anweisung, sonst klingt es nach Katalog.</p></div>'+
          '<div class="tsn4-card"><div class="ph"><img src="'+N.RING+'zutaten.webp" alt=""></div><span class="k">Auslöser: wiederkehrend</span><div class="n">Der Montags-Pflegebericht</div><hr><p>Jeden Montag früh prüft er Zutaten ohne Einkaufspreis, Rezepturen ohne Zutaten und Gerichte ohne Verkaufspreis, und legt eine kurze Liste in die Key Metrics. Er ändert dabei nichts.</p></div>'+
        '</div>'
      },
      {id:'tsn4a6-grenze', html:
        '<div class="tsn4-eb">Die Grenze</div>'+
        '<h3>Wann der Agent, wann <span class="g">Claude Code</span></h3>'+
        '<p class="lead">Ein Notion Agent ist stark, solange alles in Notion liegt. Sobald etwas von außen dazukommt, ist er der falsche Weg.</p>'+
        '<p>Der Lieferschein aus Lektion fünf liegt als Datei auf deinem Rechner, also kann der Agent ihn nicht lesen. Ein Bericht, der Notion-Zahlen mit dem Export deines Kassensystems vergleicht, braucht ebenfalls eine Datei von außen. Beides bleibt Aufgabe für Claude Code.</p>'+
        '<p>Auch beim Ausbau deines Systems hat er eine Grenze. Automationen, Datenbankvorlagen und Seitenlayouts legt der Agent nicht an. Die richtest du selbst ein, die Automationen zeige ich dir in der nächsten Lektion.</p>'+
        '<p><span class="gl">Die Merkregel:</span> Bleibt die Arbeit vollständig in Notion und muss jemand mitdenken, nimm den Agenten. Kommt etwas von außen dazu, nimm Claude Code. Die vollständige Regel mit allen drei Wegen bauen wir in Lektion neun.</p>'+
        '<div class="tsn4-err">'+
          '<div><b>Zu breiter Zugriff.</b> „Seiten, die mit allen geteilt sind“ als Bereich zu wählen ist bequem, gibt dem Agenten aber fast deinen ganzen Workspace. Gib ihm nur die Datenbanken, die er für seine Aufgabe braucht.</div>'+
          '<div><b>Zu häufiger Auslöser.</b> Ein Agent, der bei jeder Feldänderung startet, verbraucht Credits bei jeder Kleinigkeit. Nimm ein bestimmtes Feld oder einen Status als Auslöser.</div>'+
          '<div><b>Kein Blick ins Protokoll.</b> Schau in den ersten Wochen nach jedem Lauf ins Aktivitätsprotokoll. Dort siehst du, was er getan hat, und schärfst die Anweisung nach.</div>'+
        '</div>'
      }
    ],
    emp:{ id:'tsn4a6emp', kind:'Einrichtung', animTitle:'Ein Agent,', animGold:'ein Revier',
      steps:['Eine Aufgabe','Enger Bereich','Gezielter Auslöser','Protokoll lesen'],
      intro:'So richte ich jeden neuen Agenten ein, damit er zuverlässig arbeitet und nicht mehr Credits verbraucht als nötig.',
      points:[
        'Gib jedem Agenten <b>genau eine Aufgabe</b>. Zwei Aufgaben sind zwei Agenten.',
        'Gib ihm nur die <b>Datenbanken</b>, die er braucht, und lass den Internetzugriff aus.',
        'Wähl einen <b>gezielten Auslöser</b>: eine neue Seite, ein bestimmtes Feld oder einen festen Termin.',
        'Lies in den ersten Wochen das <b>Aktivitätsprotokoll</b> und passe die Anweisung an, bis die Vorschläge sitzen.'
      ]
    },
    learn:[
      'Du kennst den Unterschied zwischen dem <b>Notion Agent</b> und einem Custom Agent.',
      'Du weißt, dass Custom Agents den <b>Business-Tarif</b> brauchen und in Credits abrechnen.',
      'Du richtest einen Agenten mit <b>Anweisung, Bereich und Auslöser</b> ein.',
      'Du ziehst die Grenze: alles in Notion heißt Agent, <b>etwas von außen</b> heißt Claude Code.'
    ],
    next:'/lektionen/notion-automationen-bauen'
  });
})();

/* ---------- L4.7 · Notion Automationen und Buttons ---------- */
(function(){
  var N=window.__tsn4; if(!N) return;
  var I=N.IMG, R=N.RING, P=function(x,y,w,h){ return N.pos(x,y,w,h,430); };
  var RW=[
    {img:R+'inventar.webp', a:'Bestand steht auf „Nachbestellen“', b:'Meldung an den Einkauf'},
    {img:I+'g-rote-bete-risotto.webp', a:'Gericht kommt auf die Karte', b:'Datum „Auf der Karte seit“'},
    {img:R+'mitarbeiter.webp', a:'Button „Neue Zählrunde“', b:'Zählfelder leer, Inventur-Seite neu'},
    {img:I+'i-olivenoel.webp', a:'Einkaufspreis geändert', b:'Datum gesetzt, Meldung an dich'}
  ];
  var rows='<div class="hdr" data-s="1" style="'+P(40,8,360,22)+'">Wenn</div><div class="hdr" data-s="1" style="'+P(560,8,300,22)+'">Dann</div>'+RW.map(function(r,i){ var y=40+i*88;
    return '<div class="cardx ra r'+i+'" data-s="1" style="'+P(40,y,360,70)+'"><span class="md"><img src="'+r.img+'" alt=""></span><span class="t">'+r.a+'</span></div>'+
           '<div class="sw sw'+i+'" data-s="1" style="'+P(424,y+21,56,28)+'"><i></i></div>'+
           '<div class="cardx rb b'+i+'" data-s="1" style="'+P(560,y,300,70)+'"><span class="t">'+r.b+'</span><span class="lamp"></span></div>';
  }).join('');
  var lines='<svg class="lines" viewBox="0 0 1000 430" preserveAspectRatio="none">'+RW.map(function(r,i){ var y=40+i*88+35; return '<path class="ln" pathLength="1" data-s="1" d="M482 '+y+' H558"/><path class="sp pk'+i+'" pathLength="1" style="animation-delay:'+(i*0.7)+'s" d="M482 '+y+' H558"/>'; }).join('')+'</svg>';
  var meter='<div class="cardx mt" data-s="1" style="'+P(884,40,96,334)+'"><span class="k">KI je Lauf</span><b class="z">0</b><span class="k">Kosten je Lauf</span><b class="z">0</b><span class="f">immer gleich</span></div>';
  var html='<div class="sc"><div class="st" style="aspect-ratio:1000/430">'+lines+rows+meter+'</div></div>';
  var css=`
  #tsn4a7anim .ra,#tsn4a7anim .rb{display:flex;align-items:center;gap:12px;padding:0 16px 0 12px}
  #tsn4a7anim .ra .md{width:46px;height:46px;flex:0 0 46px;display:block}
  #tsn4a7anim .hdr{display:flex;align-items:center;justify-content:center;font:700 10px/1 ${N.SANS};letter-spacing:.16em;text-transform:uppercase;color:#c7b489}
  #tsn4a7anim .t{font-size:13px;line-height:1.35;color:#fff;font-weight:600}
  #tsn4a7anim .rb .t{flex:1}
  #tsn4a7anim .lamp{width:12px;height:12px;border-radius:50%;background:rgba(255,255,255,.14);transition:all .5s cubic-bezier(.16,1,.3,1);flex:0 0 12px}
  #tsn4a7anim .rb.lit .lamp{background:#8FCBAA;box-shadow:0 0 14px rgba(143,203,170,.9)}
  #tsn4a7anim .sw{border-radius:999px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.16);transition:background .4s cubic-bezier(.16,1,.3,1),border-color .4s cubic-bezier(.16,1,.3,1)}
  #tsn4a7anim .sw i{position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#efe6d2;transition:transform .45s ${N.BACK}}
  #tsn4a7anim .sw.on{background:rgba(199,180,137,.55);border-color:rgba(199,180,137,.8)}
  #tsn4a7anim .sw.on i{transform:translateX(28px)}
  #tsn4a7anim .mt{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center;padding:12px 8px}
  #tsn4a7anim .mt .k{font:700 8.5px/1.3 ${N.SANS};letter-spacing:.12em;text-transform:uppercase;color:#c7b489}
  #tsn4a7anim .mt .z{font-family:${N.SANS};font-weight:700;font-size:38px;line-height:1;color:#efe6d2;margin-bottom:10px}
  #tsn4a7anim .mt .f{font-size:11px;color:rgba(255,255,255,.86)}
  #tsn4a7anim.k5 .mt{border-color:rgba(199,180,137,.62);box-shadow:0 0 30px rgba(199,180,137,.16)}
  `;
  function on(el,i,v){ var a=el.querySelector('.r'+i),w=el.querySelector('.sw'+i),b=el.querySelector('.b'+i); if(a) a.classList.toggle('lit',v); if(w) w.classList.toggle('on',v); if(b) b.classList.toggle('lit',v); }
  N.page({
    key:'tsn4a7', re:/\/(?:lektionen\/)?notion-automationen-bauen\/?$/,
    eyebrow:'L 4.7', title:'Den Alltag <span class="ts-gold">verdrahten</span>', alt:'Notion-Automationen und Buttons im Backoffice',
    intro:
      '<p>Zwei Werkzeuge, die mitdenken, hast du jetzt. Und wie das so ist mit einem guten Werkzeug: Man nimmt es schnell auch für Dinge, für die es viel zu groß ist. Die dritte Stufe dieses Moduls kommt ganz ohne KI aus, und im laufenden Betrieb ist sie die zuverlässigste.</p>'+
      '<p>Eine Notion-Automation ist eine Regel in einer Datenbank: Wenn das passiert, mach das. Sie interpretiert nichts, sie kostet nichts je Durchlauf, und sie tut jedes Mal <b>exakt dasselbe</b>. In dieser Lektion bauen wir vier davon für dein Backoffice und einen Button für dein Team.</p>',
    anim:{
      id:'tsn4a7anim', eyebrow:'Der Schaltschrank', title:'Wenn das, dann <span class="g">das</span>.',
      sub:'Vier Regeln für dein Backoffice. Jede hat einen Auslöser und eine Aktion, und dazwischen sitzt nur ein Schalter.',
      html:html, css:css,
      beats:[
        {t:200, s:1, cap:'Vier Regeln, jede mit einem Auslöser links und einer Aktion rechts. Dazwischen ein Schalter und sonst nichts.'},
        {t:2600, s:1, cap:'Setzt jemand in der Inventur den Bestand auf „Nachbestellen“, bekommt der Einkauf eine Meldung. Kein Zettel mehr, der verloren geht.'},
        {t:5000, s:1, cap:'Kommt ein Gericht auf die Karte, setzt Notion das Datum. Damit weißt du drei Monate später, seit wann es läuft.'},
        {t:7400, s:1, cap:'Der Button für dein Team leert die Zählfelder und legt die Seite für die neue Inventur an. Ein Klick statt einer Vorlage, die jemand vergisst.'},
        {t:9800, s:1, cap:'Ändert sich ein Einkaufspreis, setzt Notion das Datum und meldet es dir. Die Rechnung in Prozent übernimmt eine Formel daneben.'},
        {t:12200, s:1, cap:'Rechts der Zähler: keine KI je Lauf und keine Kosten je Lauf. Das ist der Grund, warum diese Stufe im Alltag zuerst kommt.'}
      ],
      reset:function(el){ for(var i=0;i<4;i++) on(el,i,false); el.classList.remove('k5'); },
      onBeat:function(el,i){ if(i>=1&&i<=4) on(el,i-1,true); if(i===5) el.classList.add('k5'); },
      final:function(el){ for(var i=0;i<4;i++) on(el,i,true); el.classList.add('k5'); }
    },
    secs:[
      {id:'tsn4a7-grund', html:
        '<div class="tsn4-eb">Auslöser und Aktion</div>'+
        '<h3>Wie eine Automation <span class="g">gebaut ist</span></h3>'+
        '<p class="lead">Du öffnest eine Datenbank, klickst oben auf das Blitz-Symbol und legst eine neue Automation an. Sie besteht aus einem oder mehreren Auslösern und einer oder mehreren Aktionen.</p>'+
        '<div class="tsn4-cards c2">'+
          '<div class="tsn4-card"><span class="k">Auslöser</span><div class="n">Wann sie startet</div><hr><p><b>Seite hinzugefügt</b>: ein neuer Eintrag entsteht.</p><p><b>Eigenschaft bearbeitet</b>: ein bestimmtes Feld ändert sich, etwa ein Status.</p><p><b>Wiederkehrend</b>: jeden Tag, jede Woche, jeden Monat zu einer festen Uhrzeit. Dieser Auslöser lässt sich nicht mit den anderen kombinieren.</p></div>'+
          '<div class="tsn4-card"><span class="k">Aktion</span><div class="n">Was sie tut</div><hr><p><b>Eigenschaft bearbeiten</b> im selben Eintrag, <b>Seite hinzufügen</b> in einer anderen Datenbank oder <b>Seiten bearbeiten</b> dort.</p><p><b>Benachrichtigung</b> an bis zu zwanzig Personen, <b>E-Mail</b> über dein Gmail-Konto, Nachricht an Slack oder an eine Webadresse.</p></div>'+
        '</div>'+
        '<p style="margin-top:18px"><span class="gl">Welchen Tarif du brauchst.</span> Datenbank-Automationen gibt es in allen bezahlten Tarifen, also ab Plus. Im Free-Tarif gehen nur Benachrichtigungen an Slack und einfache Buttons. Wie Buttons grundsätzlich funktionieren, kennst du aus Modul eins.</p>'+
        '<p class="tsn4-note">Quelle: Notion-Hilfe zu Datenbank-Automationen und notion.com/pricing, Stand November 2026. Die deutschen Menünamen können in deiner Notion-Version leicht abweichen.</p>'
      },
      {id:'tsn4a7-vier', html:
        '<div class="tsn4-eb">Die vier für dein Backoffice</div>'+
        '<h3>Was ich in jedem Betrieb <span class="g">einrichte</span></h3>'+
        '<p class="lead">Alle vier hängen an der Vorlage aus Modul zwei. Wo ein Feld noch fehlt, legst du es vorher an, oder du lässt es Claude mit Vorschau anlegen.</p>'+
        '<table class="tsn4-tbl"><tr><th>Datenbank</th><th>Wenn</th><th>Dann</th></tr>'+
          '<tr><td><b>Inventurliste</b></td><td>das Auswahlfeld Bestand auf „Nachbestellen“ gesetzt wird</td><td>Benachrichtigung an die Person, die bestellt, mit dem Artikel und dem Lieferpartner</td></tr>'+
          '<tr><td><b>DB Gerichte</b></td><td>der Status auf „Auf der Karte“ wechselt</td><td>Eigenschaft „Auf der Karte seit“ auf das heutige Datum setzen</td></tr>'+
          '<tr><td><b>Inventurliste („TB Inventory“)</b></td><td>„Preis pro Unit (€)“ bearbeitet wird</td><td>„Preis geändert am“ auf heute setzen und dich benachrichtigen</td></tr>'+
          '<tr><td><b>Key Metrics</b></td><td>wiederkehrend, am ersten Tag des Monats</td><td>Seite für die Monatsauswertung anlegen, mit Datum im Titel</td></tr>'+
        '</table>'+
        '<p>Die dritte Automation arbeitet mit den Feldern aus Lektion fünf zusammen. Trägt Claude einen Preis ein, setzt es das Datum ohnehin. Ändert jemand den Preis von Hand, sorgt die Automation dafür, dass das Datum trotzdem stimmt.</p>'+
        '<p><span class="gl">Eine Grenze, die du kennen solltest.</span> Eine Automation erkennt, dass sich ein Feld geändert hat, aber sie vergleicht keinen alten mit einem neuen Wert. „Melde dich nur, wenn der Preis um mehr als fünf Prozent steigt“ kann sie nicht. Dafür nimmst du eine Formel, die aus Einkaufspreis und vorherigem Preis die Abweichung rechnet, und eine gefilterte Ansicht, die nur die großen Sprünge zeigt.</p>'
      },
      {id:'tsn4a7-button', html:
        '<div class="tsn4-eb">Für dein Team</div>'+
        '<h3>Der Button „Neue <span class="g">Zählrunde</span>“</h3>'+
        '<p class="lead">Nicht alles soll von allein passieren. Die Inventur startet dein Team, wenn es so weit ist, und dafür ist ein Button richtig.</p>'+
        '<div class="tsn4-do"><span class="k">So baust du ihn</span><ol>'+
          '<li>Auf der Seite, auf der dein Team zählt, einen <b>Button</b> einfügen und „Neue Zählrunde“ nennen.</li>'+
          '<li>Erste Aktion: <b>Seiten bearbeiten in</b> der Inventurliste, gefiltert auf alles, was gezählt wird, und die Felder für die gezählte Menge leeren.</li>'+
          '<li>Zweite Aktion: <b>Seite hinzufügen</b> in deiner Datenbank für die monatliche Inventur, mit dem heutigen Datum.</li>'+
          '<li>Einmal selbst drücken und prüfen, ob die richtigen Felder leer sind, bevor dein Team ihn nutzt.</li>'+
        '</ol></div>'+
        '<div class="tsn4-err">'+
          '<div><b>Die Automation pausiert.</b> Fällt ein Feld weg, auf das sie sich bezieht, hält Notion sie an und meldet sich. Nach der Reparatur musst du sie selbst wieder einschalten.</div>'+
          '<div><b>Ein Button für zu viel.</b> Ein Button, der alle Felder aller Einträge leert, ist schnell gebaut und schwer rückgängig zu machen. Setz immer einen Filter auf die Einträge, die er wirklich treffen soll.</div>'+
        '</div>'
      }
    ],
    emp:{ id:'tsn4a7emp', kind:'Einrichtung', animTitle:'Die Reihenfolge', animGold:'im Betrieb',
      steps:['Feld prüfen','Auslöser wählen','Aktion setzen','Einmal auslösen'],
      intro:'So baue ich jede neue Automation, damit sie ab dem ersten Tag zuverlässig läuft.',
      points:[
        'Prüf zuerst, ob das <b>Feld</b>, an dem die Regel hängt, in deiner Vorlage existiert und so heißt, wie du denkst.',
        'Nimm den <b>engsten Auslöser</b>: ein bestimmtes Feld mit einem bestimmten Wert, nicht jede Änderung.',
        'Halte die <b>Aktion</b> klein. Eine Meldung oder ein Datum reicht in den meisten Fällen.',
        'Löse sie einmal mit einem <b>Testeintrag</b> aus und lösch den Testeintrag danach selbst wieder.'
      ]
    },
    learn:[
      'Du weißt, dass eine Automation aus <b>Auslöser und Aktion</b> besteht und ohne KI läuft.',
      'Du hast vier Automationen für <b>Inventur, Gerichte und Key Metrics</b> eingerichtet.',
      'Du baust einen <b>Button</b>, mit dem dein Team die Zählrunde startet.',
      'Du kennst die Grenze: Eine Automation vergleicht <b>keine Werte</b>, das macht eine Formel.'
    ],
    next:'/lektionen/wiederkehrende-routinen-einrichten'
  });
})();
