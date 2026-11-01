/* ---------- L4.4 · Sicher schreiben ---------- */
(function(){
  var N=window.__tsn4; if(!N) return;
  var I=N.IMG, P=function(x,y,w,h){ return N.pos(x,y,w,h,400); };
  var html='<div class="sc"><div class="st" style="aspect-ratio:1000/400">'+
    '<svg class="lines" viewBox="0 0 1000 400" preserveAspectRatio="none">'+
      '<path class="ln" pathLength="1" data-s="1" d="M205 200 H232"/><path class="ln" pathLength="1" data-s="1" d="M397 200 H432"/><path class="ln" pathLength="1" data-s="1" d="M597 200 H632"/><path class="ln" pathLength="1" data-s="1" d="M797 200 H832"/>'+
      '<path class="ln dash" pathLength="1" data-s="5" d="M914 342 C914 388 714 388 714 342"/><path class="sp" pathLength="1" d="M914 342 C914 388 714 388 714 342"/>'+
    '</svg>'+
    '<div class="cardx src" data-s="1" style="'+P(20,120,185,160)+'"><span class="md"><img src="'+I+'z-tomate.webp" alt=""></span><span class="k">Vorschlag von Claude</span><span class="t">Tomaten, Einkaufspreis</span><span class="v mono">2,40 € → 2,65 €</span></div>'+
    '<div class="cardx gt g1" data-s="1" style="'+P(232,60,165,280)+'"><span class="n">01</span><span class="h">Vorschau</span><div class="pv"><div><span>Feld</span><b>Preis pro Unit&nbsp;(€)</b></div><div><span>Alt</span><s>2,40 €</s></div><div><span>Neu</span><b>2,65 €</b></div></div><span class="f">Du siehst jede Änderung, bevor sie passiert.</span></div>'+
    '<div class="cardx gt g2" data-s="1" style="'+P(432,60,165,280)+'"><span class="n">02</span><span class="h">Dein Okay</span><div class="yes">Ja, schreiben</div><span class="f">Claude Code fragt zusätzlich vor jedem Schreibzugriff.</span></div>'+
    '<div class="cardx gt g3 row" data-s="1" style="'+P(632,60,165,280)+'"><div class="nw mini"><div class="nbar">'+N.nic('table')+'<span>TB Inventory</span></div><table class="nt"><colgroup><col style="width:40%"><col style="width:60%"></colgroup><tr><th><span>'+N.nic('title')+'Name</span></th><th><span>'+N.nic('num')+'<em class="cl">Preis pro Unit (€)</em></span></th></tr><tr><td>Tomaten</td><td class="r nv">2,40 €</td></tr></table></div><span class="f">Geschrieben wird erst nach deinem Okay.</span></div>'+
    '<div class="cardx gt g4" data-s="1" style="'+P(832,60,165,280)+'"><span class="n">03</span><span class="h">Verlauf</span><div class="clk"><i></i></div><span class="f">Jede Änderung lässt sich zurückholen.</span></div>'+
    '<div class="mv" style="'+P(0,0,1000,400)+'"><span class="tok mono">2,65 €</span></div>'+
  '</div></div>';
  var css=N.nCSS('tsn4a4anim')+`
  #tsn4a4anim .mini{width:100%;margin-top:6px}
  #tsn4a4anim .mini .nbar{height:34px;flex-basis:34px;font-size:12px;padding:0 10px}
  #tsn4a4anim .mini table.nt{font-size:11px;table-layout:fixed}
  #tsn4a4anim .mini table.nt th{height:28px;font-size:10px;padding:0 4px}
  #tsn4a4anim .mini table.nt th>span{gap:4px;max-width:100%;overflow:hidden}
  #tsn4a4anim .mini .cl{font-style:normal;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  #tsn4a4anim .mini table.nt td{height:32px;padding:0 5px}
  #tsn4a4anim .mini .ni{width:12px;height:12px;flex-basis:12px}
  #tsn4a4anim .src{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;padding:12px;text-align:center}
  #tsn4a4anim .src .md{width:54px;height:54px;display:block}
  #tsn4a4anim .src .k{font:600 9px/1 ${N.SANS};letter-spacing:.12em;text-transform:uppercase;color:#c7b489}
  #tsn4a4anim .src .t{font-size:12.5px;color:#fff;font-weight:600}
  #tsn4a4anim .src .v{font-size:12.5px;color:#efe6d2}
  #tsn4a4anim .gt{display:flex;flex-direction:column;align-items:center;gap:12px;padding:18px 14px;text-align:center}
  #tsn4a4anim .gt .n{width:30px;height:30px;border-radius:50%;border:1px solid rgba(199,180,137,.55);font:700 11px/28px ${N.SANS};color:#c7b489}
  #tsn4a4anim .gt .h{font-family:${N.DISP};font-weight:600;font-size:17px;color:#fff}
  #tsn4a4anim .gt .f{margin-top:auto;font-size:11.5px;line-height:1.45;color:rgba(255,255,255,.86)}
  #tsn4a4anim .pv{width:100%;display:flex;flex-direction:column;gap:6px;font-size:11.5px}
  #tsn4a4anim .pv div{display:flex;justify-content:space-between;padding:6px 8px;border-radius:7px;background:rgba(255,255,255,.04)}
  #tsn4a4anim .pv span{color:rgba(255,255,255,.62)}#tsn4a4anim .pv b{color:#efe6d2}#tsn4a4anim .pv s{color:rgba(255,255,255,.62)}
  #tsn4a4anim .yes{margin-top:14px;padding:10px 14px;border-radius:10px;background:#c7b489;color:#05060b;font:700 13px/1 ${N.SANS};transition:transform .25s ${N.BACK},box-shadow .5s cubic-bezier(.16,1,.3,1)}
  #tsn4a4anim.press .yes{transform:scale(.94);box-shadow:0 0 0 7px rgba(199,180,137,.2)}
  #tsn4a4anim .clk{position:relative;width:62px;height:62px;border-radius:50%;border:1.5px solid rgba(199,180,137,.5)}
  #tsn4a4anim .clk i{position:absolute;left:50%;top:50%;width:2px;height:24px;margin-left:-1px;background:#c7b489;transform-origin:50% 0;transform:rotate(180deg);transition:transform 1.4s ${N.EASE}}
  #tsn4a4anim.k5 .clk i{transform:rotate(-60deg)}
  #tsn4a4anim .mv{pointer-events:none;z-index:5;transform:translateX(var(--x,7%));transition:transform 1.3s ${N.EASE}}
  #tsn4a4anim .tok{position:absolute;left:0;top:47%;padding:5px 9px;border-radius:999px;background:#efe6d2;color:#05060b;font-size:11.5px;font-weight:700;box-shadow:0 0 22px rgba(239,230,210,.55);opacity:0;transition:opacity .5s cubic-bezier(.16,1,.3,1)}
  #tsn4a4anim.moving .tok{opacity:1}
  `;
  function gl(el,n){ for(var i=1;i<=4;i++){ var g=el.querySelector('.g'+i); if(g) g.classList.toggle('lit', n.indexOf(i)>-1); } }
  function to(el,x){ el.querySelector('.mv').style.setProperty('--x',x); }
  N.page({
    key:'tsn4a4', re:/\/(?:lektionen\/)?datenbanken-automatisch-aktualisieren\/?$/,
    img:N.COV('l44'), eyebrow:'L 4.4', title:'Sicher <span class="ts-gold">schreiben</span>', alt:'Claude schreibt mit Vorschau in die Notion-Datenbanken',
    intro:
      '<p>Bis hierher hat Claude nur gelesen. Ab dieser Lektion schreibt es in dein System, und das ist ein anderer Schritt. Ein Werkzeug mit Schreibrechten in deiner Kalkulation kann dir viel Arbeit abnehmen, und es kann mit einem falsch verstandenen Satz dreihundert Zeilen ändern statt drei.</p>'+
      '<p>Deshalb spannen wir zuerst die Netze, bevor wir irgendetwas schreiben lassen. Es sind drei, und zwei davon hast du in Lektion zwei schon festgelegt: <b>die Vorschau</b>, dein ausdrückliches Okay und der Verlauf, den Notion für jede Änderung führt.</p>',
    anim:{
      id:'tsn4a4anim', eyebrow:'Drei Netze', title:'Erst zeigen, dann <span class="g">schreiben</span>.',
      sub:'Jede Änderung von Claude läuft durch dieselben Stationen, bevor sie in deiner Inventur steht, und bleibt danach zurückholbar.',
      html:html, css:css, note:'Beispielwerte',
      beats:[
        {t:200, s:1, cap:'Claude schlägt eine Änderung vor: Laut Lieferschein steigt der Einkaufspreis der Tomaten von 2,40 auf 2,65 Euro je Kilo.'},
        {t:2600, s:1, cap:'<b>Erstes Netz, die Vorschau</b>. Claude zeigt dir Datenbank, Eintrag, Feld, alten und neuen Wert. Noch ist nichts passiert.'},
        {t:5400, s:1, cap:'<b>Zweites Netz, dein Okay</b>. Geschrieben wird erst nach „Ja, schreiben“, und Claude Code fragt dich zusätzlich, bevor es das Notion-Werkzeug benutzt.'},
        {t:8200, s:1, cap:'Erst jetzt landet der neue Preis in deiner Inventurliste, und deine Formeln rechnen ihn bis ins Gericht weiter.'},
        {t:11000, s:5, cap:'<b>Drittes Netz, der Verlauf</b>. Notion merkt sich jede Änderung, auch die von Claude, und du holst jeden früheren Stand mit ein paar Klicks zurück.'}
      ],
      reset:function(el){ gl(el,[]); el.classList.remove('k4','k5','press','moving'); to(el,'2%'); el.querySelector('.nv').textContent='2,40 €'; },
      onBeat:function(el,i,T,jump){
        if(i===0){ el.classList.add('moving'); to(el,'8%'); }
        if(i===1){ el.classList.add('moving'); to(el,'28.4%'); gl(el,[1]); }
        if(i===2){ el.classList.add('moving'); to(el,'48.4%'); gl(el,[1,2]); T.at(jump?0:1300,function(){ el.classList.add('press'); }); T.at(jump?0:1700,function(){ el.classList.remove('press'); }); }
        if(i===3){ el.classList.add('moving'); to(el,'68.4%'); gl(el,[1,2,3]); T.at(jump?0:1200,function(){ el.classList.add('k4'); el.querySelector('.nv').textContent='2,65 €'; }); }
        if(i===4){ gl(el,[1,2,3,4]); el.classList.add('k5'); el.classList.remove('moving'); }
      },
      final:function(el){ gl(el,[1,2,3,4]); el.classList.add('k4','k5'); el.classList.remove('moving'); el.querySelector('.nv').textContent='2,65 €'; }
    },
    secs:[
      {id:'tsn4a4-vorschau', html:
        '<div class="tsn4-eb">Das erste Netz</div>'+
        '<h3>So sieht eine <span class="g">Vorschau</span> aus</h3>'+
        '<p class="lead">Wegen der Regel aus Lektion zwei legt Claude dir vor jeder Änderung eine Tabelle hin. Die liest du in Ruhe, und erst deine Antwort löst das Schreiben aus.</p>'+
        '<table class="tsn4-tbl"><tr><th>Datenbank</th><th>Eintrag</th><th>Feld</th><th>Alt</th><th>Neu</th></tr>'+
          '<tr><td>DB 0 Inventurliste</td><td>Olivenöl</td><td>Lagerort</td><td class="old">leer</td><td><b>Trockenlager</b></td></tr>'+
          '<tr><td>DB 0 Inventurliste</td><td>Balsamico</td><td>Lagerort</td><td class="old">leer</td><td><b>Trockenlager</b></td></tr>'+
          '<tr><td>DB 0 Inventurliste</td><td>Burrata</td><td>Lagerort</td><td class="old">leer</td><td><b>Kühlhaus</b></td></tr>'+
        '</table>'+
        '<p class="tsn4-note">Beispiel. In deiner Vorlage heißt das Feld so, wie es in deiner Systemkarte steht.</p>'+
        '<p><span class="gl">Du antwortest in normaler Sprache.</span> „Ja, schreiben“ übernimmt alles. „Ja, aber die Burrata ins Kühlhaus zwei“ ändert eine Zeile vorher. „Nur die ersten beiden“ schreibt einen Teil. Und wenn dir an der Vorschau etwas komisch vorkommt, fragst du nach, bevor du zustimmst.</p>'+
        '<h4>Eine Pflegearbeit, die <span class="g">liegen bleibt</span>.</h4>'+
        '<p>Jedes Backoffice hat Felder, die nie jemand vollständig füllt, weil es mühsam ist. Der Lagerort in der Inventur ist so ein Fall. So lässt du ihn ausfüllen, mit Vorschau:</p>'+
        N.cmd('Prompt', 'Geh meine Inventurliste durch. Trag bei allen Artikeln, bei denen der Lagerort leer ist, einen Vorschlag ein: Trockenlager, Kühlhaus, Tiefkühler oder Getränkelager, abgeleitet aus dem Namen und der Kategorie. Zeig mir zuerst die Vorschau als Tabelle und nenne mir die Anzahl der Einträge. Schreib erst nach meinem „Ja, schreiben“.')
      },
      {id:'tsn4a4-netz', html:
        '<div class="tsn4-eb">Das dritte Netz</div>'+
        '<h3>Was Notion selbst <span class="g">mitbringt</span></h3>'+
        '<p class="lead">Selbst wenn eine Änderung durchrutscht, ist sie nicht verloren. Notion führt für jede Seite einen Verlauf, und Claude kann ihn für dich lesen.</p>'+
        '<div class="tsn4-cards c3">'+
          '<div class="tsn4-card"><span class="k">Seitenverlauf</span><div class="n">Frühere Stände</div><hr><p>Notion hebt frühere Fassungen deiner Seiten auf: sieben Tage im Free-Tarif, dreißig Tage in Plus, neunzig Tage in Business.</p></div>'+
          '<div class="tsn4-card"><span class="k">Papierkorb</span><div class="n">Gelöschtes</div><hr><p>Was in den Papierkorb wandert, holst du von dort zurück. Claude darf ihn durch die Rechte aus Lektion zwei gar nicht erst füllen.</p></div>'+
          '<div class="tsn4-card"><span class="k">Änderungsliste</span><div class="n">Wer was geändert hat</div><hr><p>Claude listet dir auf, was sich in einer Datenbank geändert hat und von wem, auch Änderungen durch Notion AI und durch Claude selbst.</p></div>'+
        '</div>'+
        N.cmd('Prompt', 'Was wurde heute in meiner Inventurliste geändert, und von wem? Zeig mir je Änderung Eintrag, Feld, alten und neuen Wert. Ändere nichts.')+
        '<p class="tsn4-note">Stand November 2026, Quellen: notion.com/pricing und Notion-Dokumentation zu den MCP-Werkzeugen. Die Änderungsliste reicht so weit zurück, wie dein Tarif den Verlauf aufhebt.</p>'+
        '<p><span class="gl">Vor großen Durchgängen duplizierst du die Datenbank.</span> Das kostet dich in Notion einen Klick, und du hast eine vollständige Kopie, bevor Claude fünfzig Zeilen anfasst. Ich mache das bei allem, was mehr als eine Handvoll Einträge betrifft.</p>'
      },
      {id:'tsn4a4-ungeprueft', html:
        '<div class="tsn4-eb">Ungeprüftes erkennen</div>'+
        '<h3>Was Claude erzeugt, ist <span class="g">markiert</span></h3>'+
        '<p class="lead">Bei Zahlen aus dem Lieferschein prüfst du die Vorschau. Bei Texten, die Claude selbst formuliert, brauchst du etwas anderes: einen sichtbaren Hinweis, dass sie noch niemand gelesen hat.</p>'+
        '<p>Dafür legen wir in den Datenbanken, in die Claude Texte schreibt, ein Auswahlfeld <b>Prüfstatus</b> an, mit den Werten „Vorschlag, ungeprüft“ und „Geprüft“. Alles, was Claude schreibt, bekommt den ersten Wert. Erst du setzt den zweiten. Mit einer gefilterten Ansicht siehst du jederzeit, was noch auf dich wartet.</p>'+
        N.cmd('Prompt', 'Leg in „TB V : Rezepturen“ und in „DB Gerichte“ ein Auswahlfeld „Prüfstatus“ an, mit den Werten „Vorschlag, ungeprüft“ und „Geprüft“. Zeig mir vorher, was du anlegst. Ergänze danach in der CLAUDE.md die Regel: Jeder Text, den du in Notion schreibst, bekommt den Prüfstatus „Vorschlag, ungeprüft“.')+
        '<p>Arbeitest du im Business-Tarif, gibt es zusätzlich die Vorschläge direkt in Notion: Claude schreibt eine Änderung als Vorschlag in den Text, und du nimmst sie in Notion an oder lehnst sie ab, so wie in einem Dokument mit Änderungsverfolgung.</p>'+
        '<h4>Wo ich die <span class="g">Grenze</span> ziehe.</h4>'+
        '<table class="tsn4-tbl"><tr><th>Was</th><th>Wie</th></tr>'+
          '<tr><td>Beschreibungen, Lagerorte, Kategorien, Kartentexte</td><td>Claude schreibt nach Vorschau, Texte mit Prüfstatus</td></tr>'+
          '<tr><td>Preise, Mengen, Portionsgrößen</td><td>nur nach Vorschau, Zeile für Zeile gelesen</td></tr>'+
          '<tr><td>Formeln und Rollups</td><td>nie, die rechnet Notion</td></tr>'+
          '<tr><td>Löschen</td><td>nie, das machst du selbst in Notion</td></tr>'+
        '</table>'+
        '<div class="tsn4-err">'+
          '<div><b>„Ja“ statt Lesen.</b> Wer die Vorschau ungelesen bestätigt, hat das Netz abgeschaltet. Lies wenigstens die Anzahl und drei Zeilen.</div>'+
          '<div><b>Zu viel auf einmal.</b> Ein Durchgang über alle Datenbanken ist schwer zu prüfen. Arbeite je Datenbank, bei großen Listen je Kategorie.</div>'+
          '<div><b>Ohne Kopie gestartet.</b> Vor dem ersten großen Durchgang die Datenbank duplizieren. Den Klick bereust du nie.</div>'+
        '</div>'
      }
    ],
    emp:{ id:'tsn4a4emp', kind:'Nutzung', animTitle:'Vor jedem', animGold:'Durchgang',
      steps:['Datenbank kopieren','Vorschau lesen','Freigeben','Stichprobe machen'],
      intro:'Diese vier Handgriffe gehören zu jeder Änderung, die mehr als eine Handvoll Einträge betrifft.',
      points:[
        'Dupliziere die Datenbank in Notion, bevor ein <b>großer Durchgang</b> startet.',
        'Lies in der Vorschau zuerst die <b>Anzahl</b>. Weicht sie von deiner Erwartung ab, stimmt die Anweisung nicht.',
        'Gib mit <b>„Ja, schreiben“</b> frei, oder schränk ein: „Nur die Zeilen eins bis fünf“.',
        'Schau danach <b>zwei Einträge</b> in Notion an. Stimmen sie, stimmt in aller Regel der ganze Durchgang.'
      ]
    },
    learn:[
      'Du lässt Claude nur <b>nach einer Vorschau</b> schreiben und antwortest in normaler Sprache.',
      'Du kennst den <b>Seitenverlauf</b> in deinem Tarif und lässt dir Änderungen auflisten.',
      'Du markierst alles, was Claude formuliert, mit dem <b>Prüfstatus</b>.',
      'Du weißt, was Claude bei dir schreiben darf und was <b>nie</b>.'
    ],
    next:'/lektionen/lieferscheine-und-preise-einpflegen'
  });
})();

/* ---------- L4.5 · Lieferscheine und Preise einpflegen ---------- */
(function(){
  var N=window.__tsn4; if(!N) return;
  var I=N.IMG, R=N.RING, P=function(x,y,w,h){ return N.pos(x,y,w,h,470); };
  var SL=[['Tomaten Rispe','5 kg','2,65'],['Basilikum Topf','6 St','1,90'],['Parm. Regg. 24M','2 kg','21,40'],['Zitronen Bio','3 kg','3,10']];
  var paper='<div class="paper" data-s="1" style="'+P(20,30,230,238)+'"><div class="ph"><b>Gemüse Bauer</b><span>Lieferschein</span></div>'+
    SL.map(function(r,i){ return '<div class="pl l'+i+'"><span>'+r[0]+'</span><span>'+r[1]+'</span><b>'+r[2]+'</b></div>'; }).join('')+
    '<div class="psum">Preise netto je Einheit</div><i class="scan"></i></div>';
  var inv='<div class="tw iv" data-s="1" style="'+P(288,30,692,238)+'"><div class="tbar"><i></i><i></i><i></i><span>Backoffice — claude</span></div>'+
    '<div class="tl dim">&gt; Lies alle Lieferscheine im Ordner „Lieferscheine neu“ …</div>'+
    '<div class="tl p3">Vorschau · Gemüse Bauer, Lieferschein</div>'+
    '<div class="tl p3 dim">Artikel            alt       neu       Abweichung</div>'+
    '<div class="tl p3">Tomaten            2,40 €    2,65 €    +10,4 %</div>'+
    '<div class="tl p3">Basilikum          1,90 €    1,90 €    unverändert</div>'+
    '<div class="tl p3">Zitronen           2,80 €    3,10 €    +10,7 %</div>'+
    '<div class="tl p3">Nicht sicher zugeordnet: „Parm. Regg. 24M“</div>'+
    '<div class="tl p4">&gt; Ja, schreiben</div>'+
    '<div class="tl p4">Zwei Preise aktualisiert. Eine Position wartet auf dich.</div></div>';
  var CH=[{x:400,img:I+'z-tomate.webp',l:'Zutat',v:'2,40 € je kg',v2:'2,65 € je kg'},{x:600,img:R+'zutaten.webp',l:'Portion 120 g',v:'0,29 €',v2:'0,32 €'},{x:800,img:I+'g-burrata.webp',l:'Burrata',v:'24,1 % Wareneinsatz',v2:'24,3 % Wareneinsatz'}];
  var chain=CH.map(function(c,i){ return '<div class="md br ch c'+i+'" data-s="1" style="'+P(c.x-46,300,92,92)+'"><img src="'+c.img+'" alt=""></div><div class="lbl" data-s="1" style="'+P(c.x-90,400,180,14)+'">'+c.l+'</div><div class="cv cvv'+i+'" data-s="1" style="'+P(c.x-90,420,180,22)+'"><span class="o">'+c.v+'</span><span class="n">'+c.v2+'</span></div>'; }).join('');
  var lines='<svg class="lines" viewBox="0 0 1000 470" preserveAspectRatio="none">'+
    '<path class="ln" pathLength="1" data-s="1" d="M252 150 H286"/><path class="sp" pathLength="1" d="M252 150 H286"/>'+
    '<path class="ln" pathLength="1" data-s="1" d="M400 270 V298"/><path class="ln" pathLength="1" data-s="1" d="M448 346 H552"/><path class="ln" pathLength="1" data-s="1" d="M648 346 H752"/>'+
    '<path class="sp" pathLength="1" style="animation-delay:.6s" d="M448 346 H552"/><path class="sp" pathLength="1" style="animation-delay:1.2s" d="M648 346 H752"/></svg>';
  var side='<div class="cardx sm" data-s="1" style="'+P(20,300,230,150)+'"><span class="k">Ergebnis</span><div class="sr"><b class="c1n">0</b><span>Preise neu</span></div><div class="sr"><b class="c2n">0</b><span>unverändert</span></div><div class="sr miss2"><b class="c3n">0</b><span>zu klären</span></div></div>';
  var html='<div class="sc"><div class="st" style="aspect-ratio:1000/470">'+lines+paper+inv+side+chain+'</div></div>';
  var css=N.nCSS('tsn4a5anim')+`
  #tsn4a5anim .iv .tl{font-size:11.5px;line-height:1.7;white-space:pre}
  #tsn4a5anim.js:not(.k3) .iv .p3,#tsn4a5anim.js:not(.k4) .iv .p4{opacity:0}
  #tsn4a5anim .iv .p3,#tsn4a5anim .iv .p4{transition:opacity .6s cubic-bezier(.16,1,.3,1)}
  #tsn4a5anim .paper{border-radius:7px;background:linear-gradient(#efe6d2,#d8c9ab);box-shadow:0 26px 50px -24px rgba(0,0,0,.95);padding:18px 16px;color:#05060b;overflow:hidden}
  #tsn4a5anim .ph{display:flex;flex-direction:column;gap:3px;padding-bottom:12px;margin-bottom:10px;border-bottom:1px dashed rgba(5,6,11,.35)}
  #tsn4a5anim .ph b{font:700 15px/1.2 Georgia,serif}#tsn4a5anim .ph span{font:600 9px/1 ${N.SANS};letter-spacing:.14em;text-transform:uppercase;color:rgba(5,6,11,.7)}
  #tsn4a5anim .pl{display:grid;grid-template-columns:1fr auto auto;gap:8px;font:500 11.5px/1.4 ${N.MONO};padding:7px 4px;border-radius:4px;transition:background .5s cubic-bezier(.16,1,.3,1)}
  #tsn4a5anim .pl b{font-weight:700}
  #tsn4a5anim.k2 .pl{background:rgba(199,180,137,.22)}
  #tsn4a5anim .psum{margin-top:14px;font:500 10px/1.4 ${N.SANS};color:rgba(5,6,11,.7)}
  #tsn4a5anim .scan{position:absolute;left:0;right:0;top:0;height:2px;background:#c7b489;box-shadow:0 0 18px 3px rgba(199,180,137,.75);opacity:0}
  #tsn4a5anim.scanning .scan{animation:tsn4a5scan 2.4s cubic-bezier(.45,.05,.55,.95) 1 both}
  @keyframes tsn4a5scan{0%{opacity:0;transform:translateY(60px)}10%{opacity:1}90%{opacity:1}100%{opacity:0;transform:translateY(330px)}}
  #tsn4a5anim .sm{display:flex;flex-direction:column;gap:6px;padding:14px 18px}
  #tsn4a5anim .sm .k{font:600 9.5px/1 ${N.SANS};letter-spacing:.14em;text-transform:uppercase;color:#c7b489;margin-bottom:4px}
  #tsn4a5anim .sr{display:flex;align-items:baseline;gap:10px;font-size:13px;color:rgba(255,255,255,.86)}
  #tsn4a5anim .sr b{font-family:${N.DISP};font-size:24px;line-height:1;color:#efe6d2;min-width:30px;font-variant-numeric:tabular-nums}
  #tsn4a5anim .sr.miss2 b{color:#e35d76}
  #tsn4a5anim .cv{display:flex;justify-content:center;font:600 11.5px/22px ${N.SANS};color:#efe6d2;font-variant-numeric:tabular-nums}
  #tsn4a5anim .cv .n{display:none}
  #tsn4a5anim .cv.up .o{display:none}#tsn4a5anim .cv.up .n{display:inline;color:#fff;text-shadow:0 0 14px rgba(199,180,137,.8)}
  `;
  function chainUp(el,n){ for(var i=0;i<3;i++){ var c=el.querySelector('.c'+i), v=el.querySelector('.cvv'+i); if(c) c.classList.toggle('lit',i<n); if(v) v.classList.toggle('up',i<n); } }
  function counts(el,anim){ var a=[[ '.c1n',2],['.c2n',1],['.c3n',1]]; a.forEach(function(x,k){ var e=el.querySelector(x[0]); if(anim) N.count(e,x[1],null,k*160,700); else e.textContent=x[1]; }); }
  N.page({
    key:'tsn4a5', re:/\/(?:lektionen\/)?lieferscheine-und-preise-einpflegen\/?$/,
    img:N.COV('l45'), eyebrow:'L 4.5', title:'Lieferscheine <span class="ts-gold">einlesen</span>', alt:'Lieferscheine und Preislisten mit Claude in die Inventur übernehmen',
    intro:
      '<p>Wie Notion AI einen einzelnen Lieferschein als PDF einliest, kennst du aus den ersten Modulen. Hier geht es um den Alltag dahinter: viele Scheine im Monat, verschiedene Lieferanten, die ihre Artikel anders nennen als du, und Preise, die sich still verändern.</p>'+
      '<p>Wir bauen einen festen Ablauf, mit dem Claude Code deine Lieferscheine aus einem Ordner liest, jeden Artikel deiner Inventur zuordnet und dir die Preisänderungen als Vorschau hinlegt. Nach deiner Freigabe rechnet deine Vorlage den neuen Preis bis in jedes Gericht durch, und du siehst, <b>was dich die Erhöhung wirklich kostet</b>.</p>',
    anim:{
      id:'tsn4a5anim', eyebrow:'Ein Schein, die ganze Kette', title:'Vom Lieferschein bis in den <span class="g">Teller</span>.',
      sub:'Claude liest, ordnet zu und zeigt dir die Änderungen. Nach deinem Okay rechnet deine Vorlage den neuen Preis bis in den Wareneinsatz durch.',
      html:html, css:css, note:'Beispielwerte',
      beats:[
        {t:200, s:1, cap:'Links ein Lieferschein deines Gemüsehändlers, in der Mitte deine Inventurliste, darunter die Kette aus Modul zwei bis zum fertigen Gericht.'},
        {t:2700, s:1, cap:'Claude liest den Schein Zeile für Zeile, egal ob als PDF aus der Mail oder als Foto vom Handy.'},
        {t:5500, s:1, cap:'Jede Zeile wird einem Artikel deiner Inventur zugeordnet. Der Parmesan steht beim Händler unter einem anderen Namen, deshalb landet er auf der Liste zum Klären, statt geraten zu werden.'},
        {t:8800, s:1, cap:'Du liest die Vorschau, klärst den Parmesan selbst und gibst die neuen Preise frei. Erst dann schreibt Claude.'},
        {t:11600, s:1, cap:'Ab hier rechnet deine Vorlage. Der neue Kilopreis landet in der Zutat, in der Portion und am Ende im Wareneinsatz der Burrata.'}
      ],
      reset:function(el){ el.classList.remove('k2','k3','k4','scanning'); chainUp(el,0); ['.c1n','.c2n','.c3n'].forEach(function(s){ el.querySelector(s).textContent='0'; }); },
      onBeat:function(el,i,T,jump){
        if(i===1){ if(!jump){ el.classList.remove('scanning'); void el.offsetWidth; el.classList.add('scanning'); } T.at(jump?0:1600,function(){ el.classList.add('k2'); }); }
        if(i===2){ el.classList.add('k3'); counts(el,!jump); }
        if(i===3){ el.classList.add('k4'); }
        if(i===4){ for(var k=1;k<=3;k++){ (function(k){ T.at(jump?0:(k-1)*700,function(){ chainUp(el,k); }); })(k); } }
      },
      final:function(el){ el.classList.add('k2','k3','k4'); chainUp(el,3); counts(el,false); }
    },
    secs:[
      {id:'tsn4a5-ablauf', html:
        '<div class="tsn4-eb">Der Ablauf</div>'+
        '<h3>Ein Ordner, ein Prompt, eine <span class="g">Vorschau</span></h3>'+
        '<p class="lead">Leg in deinem Backoffice-Ordner zwei Unterordner an: <b>Lieferscheine neu</b> und <b>Lieferscheine erledigt</b>. In den ersten kommt alles, was im Lauf der Woche reinkommt, als PDF aus der Mail oder als Foto vom Handy. Gerade die Fotos sind ein Fall für Claude, denn Notion AI nimmt Dateien wie PDF und Excel an, Fotos aber nicht.</p>'+
        '<p>Einmal in der Woche, oder wann immer es für dich passt, startest du Claude Code im Backoffice-Ordner und gibst diesen Auftrag:</p>'+
        N.cmd('Prompt', 'Lies alle Lieferscheine im Ordner „Lieferscheine neu“.\n\nOrdne jede Position dem passenden Artikel in meinem Backoffice zu. Nutze dafür die Namensliste meiner Lieferanten in der CLAUDE.md. Positionen, die du nicht sicher zuordnen kannst, schreibst du auf eine eigene Liste und rätst nichts.\n\nZeig mir dann eine Vorschau aller Artikel, deren Einkaufspreis sich geändert hat: Artikel, Lieferant, alter Preis, neuer Preis, Abweichung in Prozent. Achte darauf, dass Einheit und Preis zu meiner Inventurliste passen, und nenne mir jede Abweichung bei der Einheit.\n\nSchreib erst nach meinem „Ja, schreiben“. Trag den neuen Preis in „Preis pro Unit (€)“ der Inventurliste ein und setz bei jedem geänderten Artikel „Vorheriger Preis“ auf den alten Wert und „Preis geändert am“ auf heute. Verschieb danach die erledigten Scheine in „Lieferscheine erledigt“.')+
        '<p>Du bekommst die Vorschau, liest sie, klärst die offenen Positionen und gibst frei. Den Rest erledigt deine Vorlage: Die Zutat übernimmt den neuen Preis, jede Rezeptur und jedes Gericht rechnet neu, und dein Wareneinsatz steht aktuell da.</p>'
      },
      {id:'tsn4a5-felder', html:
        '<div class="tsn4-eb">Einmal vorbereiten</div>'+
        '<h3>Zwei Felder für die <span class="g">Preisgeschichte</span></h3>'+
        '<p class="lead">Damit du später sehen kannst, was sich wann verändert hat, braucht deine Inventurliste ein Gedächtnis für den alten Preis. In der Vorlage heißt sie „TB Inventory“, der Einkaufspreis steht dort im Feld „Preis pro Unit (€)“. Dafür legst du einmal zwei zusätzliche Felder an.</p>'+
        '<div class="tsn4-cards c2">'+
          '<div class="tsn4-card"><span class="k">Zahl</span><div class="n">Vorheriger Preis</div><hr><p>Hier schreibt Claude beim Aktualisieren den bisherigen Einkaufspreis hinein. So lässt sich jede Erhöhung in Euro und Prozent nachvollziehen.</p></div>'+
          '<div class="tsn4-card"><span class="k">Datum</span><div class="n">Preis geändert am</div><hr><p>Das Datum der letzten Änderung. Darauf greifen die Automation in Lektion sieben und der Wochenbericht in Lektion acht zurück.</p></div>'+
        '</div>'+
        N.cmd('Prompt', 'Leg in meiner Inventurliste („TB Inventory“) zwei neue Felder an: „Vorheriger Preis“ als Zahl im Euro-Format und „Preis geändert am“ als Datum. Zeig mir vorher, was du anlegst. Ergänze danach die Systemkarte in der CLAUDE.md um beide Felder.')
      },
      {id:'tsn4a5-namen', html:
        '<div class="tsn4-eb">Die eigentliche Arbeit</div>'+
        '<h3>Wenn dein Lieferant es <span class="g">anders nennt</span></h3>'+
        '<p class="lead">Der häufigste Grund für offene Positionen ist der Name. Beim Händler heißt es „Parm. Regg. 24M“, in deiner Inventur „Parmigiano Reggiano“. Einmal geklärt, soll Claude das nie wieder fragen müssen.</p>'+
        '<p>Dafür führst du in der CLAUDE.md eine Namensliste je Lieferant. Du musst sie nicht selbst schreiben. Sobald du eine offene Position geklärt hast, trägt Claude sie ein, und beim nächsten Schein ist sie bekannt.</p>'+
        N.cmd('Prompt', 'Die offene Position „Parm. Regg. 24M“ von Gemüse Bauer ist in meiner Inventurliste „Parmigiano Reggiano“. Trag diese Zuordnung in die Namensliste für Gemüse Bauer in der CLAUDE.md ein und zeig mir vorher die neue Zeile.')+
        N.cmd('So sieht die Namensliste in der CLAUDE.md aus', '## Namensliste Lieferanten\nGemüse Bauer\n- Parm. Regg. 24M = Parmigiano Reggiano\n- Tomaten Rispe = Tomaten\nFeinkost Rossi\n- Olio EV 5L = Olivenöl')+
        '<h4>Neue Artikel auf dem <span class="g">Schein</span>.</h4>'+
        '<p>Steht ein Artikel auf dem Schein, den es in deiner Inventur noch nicht gibt, legt Claude ihn nach Vorschau als neuen Eintrag an und verknüpft ihn mit dem Lieferanten. Die passende Zutat mit Portionsgrößen legst du selbst an, so wie in Modul zwei, weil dort deine Entscheidung über die Verwendung in der Küche drinsteckt.</p>'
      },
      {id:'tsn4a5-folgen', html:
        '<div class="tsn4-eb">Was es dich kostet</div>'+
        '<h3>Welche Gerichte die Erhöhung <span class="g">trifft</span></h3>'+
        '<p class="lead">Ein neuer Preis in der Inventur ist erst die halbe Information. Die Frage, die dich als Gastronom interessiert, ist, welche Gerichte jetzt unter dein Ziel rutschen.</p>'+
        N.cmd('Prompt', 'Welche Gerichte sind von den Preisänderungen betroffen, die heute in der Inventurliste eingetragen wurden? Zeig mir je Gericht den „Wareneinsatz ( % )“, wie er jetzt in Notion steht, und markiere alle Gerichte über [deine Grenze] Prozent. Ändere nichts.')+
        '<p>Dasselbe funktioniert mit der jährlichen Preisliste deines Großhändlers als Excel-Datei oder PDF. Leg sie in den Ordner „Lieferscheine neu“ und gib denselben Auftrag. Bei einer langen Liste lässt du Claude nur die Artikel abgleichen, die in deiner Inventur stehen.</p>'+
        '<div class="tsn4-err">'+
          '<div><b>Einheiten passen nicht.</b> Der Händler liefert die Kiste, deine Inventur rechnet in Kilo. Claude meldet jede Abweichung, die Umrechnung entscheidest du einmal und lässt sie in die Namensliste eintragen.</div>'+
          '<div><b>Netto und Brutto gemischt.</b> Deine Vorlage rechnet mit Nettopreisen. Steht auf dem Schein ein Bruttopreis, sag es Claude im Auftrag dazu.</div>'+
          '<div><b>Rabatte und Pfand.</b> Aktionspreise, Rückvergütungen und Pfand gehören nicht in den Einkaufspreis. Lass sie in der Vorschau getrennt ausweisen.</div>'+
        '</div>'
      }
    ],
    emp:{ id:'tsn4a5emp', kind:'Nutzung', animTitle:'Dein', animGold:'Lieferschein-Tag',
      steps:['Scheine sammeln','Auftrag geben','Offene klären','Freigeben'],
      intro:'So wird das Einpflegen zu einem festen Termin, der im Alltag kaum noch Zeit kostet.',
      points:[
        'Leg jeden Schein sofort in <b>„Lieferscheine neu“</b>, als PDF oder als Foto. Mehr musst du im Lauf der Woche nicht tun.',
        'Gib einmal pro Woche den <b>Auftrag</b>, immer am selben Tag. Dann liegen die Preise nie lange zurück.',
        'Kläre <b>offene Positionen</b> sofort und lass sie in die Namensliste eintragen. Jede geklärte Zeile fehlt beim nächsten Mal.',
        'Frag nach jeder Freigabe, welche <b>Gerichte</b> betroffen sind. Dort entscheidest du, ob ein Verkaufspreis angepasst wird.'
      ]
    },
    learn:[
      'Du lässt Claude <b>Lieferscheine aus einem Ordner</b> lesen und jeder Inventurzeile zuordnen.',
      'Du führst eine <b>Namensliste</b> je Lieferant, damit dieselbe Frage nie zweimal kommt.',
      'Du hältst mit zwei Feldern die <b>Preisgeschichte</b> deiner Inventur fest.',
      'Du siehst nach jeder Freigabe, welche <b>Gerichte</b> die Erhöhung trifft.'
    ],
    next:'/lektionen/notion-agents-im-betrieb-einsetzen'
  });
})();
