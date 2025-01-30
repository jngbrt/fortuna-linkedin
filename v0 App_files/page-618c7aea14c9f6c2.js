(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1538:function(e,t,i){Promise.resolve().then(i.bind(i,5702))},5702:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return O}});var n=i(7437),r=i(2265),s=i(9194),a=i(9653),l=i(6697),o=i(5447),d=i(8819),c=i(1994),h=i(3335);function m(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,h.m6)((0,c.W)(t))}r.forwardRef((e,t)=>{let{className:i,...r}=e;return(0,n.jsx)("div",{ref:t,className:m("rounded-lg border bg-card text-card-foreground shadow-sm",i),...r})}).displayName="Card";let u=r.forwardRef((e,t)=>{let{className:i,...r}=e;return(0,n.jsx)("div",{ref:t,className:m("flex flex-col space-y-1.5 p-6",i),...r})});u.displayName="CardHeader";let x=r.forwardRef((e,t)=>{let{className:i,...r}=e;return(0,n.jsx)("div",{ref:t,className:m("text-2xl font-semibold leading-none tracking-tight",i),...r})});x.displayName="CardTitle",r.forwardRef((e,t)=>{let{className:i,...r}=e;return(0,n.jsx)("div",{ref:t,className:m("text-sm text-muted-foreground",i),...r})}).displayName="CardDescription";let f=r.forwardRef((e,t)=>{let{className:i,...r}=e;return(0,n.jsx)("div",{ref:t,className:m("p-6 pt-0",i),...r})});f.displayName="CardContent",r.forwardRef((e,t)=>{let{className:i,...r}=e;return(0,n.jsx)("div",{ref:t,className:m("flex items-center p-6 pt-0",i),...r})}).displayName="CardFooter";let g=r.forwardRef((e,t)=>{let{className:i,...r}=e;return(0,n.jsx)("div",{className:"relative w-full overflow-auto",children:(0,n.jsx)("table",{ref:t,className:m("w-full caption-bottom text-sm",i),...r})})});g.displayName="Table";let p=r.forwardRef((e,t)=>{let{className:i,...r}=e;return(0,n.jsx)("thead",{ref:t,className:m("[&_tr]:border-b",i),...r})});p.displayName="TableHeader";let w=r.forwardRef((e,t)=>{let{className:i,...r}=e;return(0,n.jsx)("tbody",{ref:t,className:m("[&_tr:last-child]:border-0",i),...r})});w.displayName="TableBody",r.forwardRef((e,t)=>{let{className:i,...r}=e;return(0,n.jsx)("tfoot",{ref:t,className:m("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",i),...r})}).displayName="TableFooter";let j=r.forwardRef((e,t)=>{let{className:i,...r}=e;return(0,n.jsx)("tr",{ref:t,className:m("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",i),...r})});j.displayName="TableRow";let k=r.forwardRef((e,t)=>{let{className:i,...r}=e;return(0,n.jsx)("th",{ref:t,className:m("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",i),...r})});k.displayName="TableHead";let b=r.forwardRef((e,t)=>{let{className:i,...r}=e;return(0,n.jsx)("td",{ref:t,className:m("p-4 align-middle [&:has([role=checkbox])]:pr-0",i),...r})});b.displayName="TableCell",r.forwardRef((e,t)=>{let{className:i,...r}=e;return(0,n.jsx)("caption",{ref:t,className:m("mt-4 text-sm text-muted-foreground",i),...r})}).displayName="TableCaption";var N=i(458);let v=N.zt,R=N.fC,y=N.xz,D=r.forwardRef((e,t)=>{let{className:i,sideOffset:r=4,...s}=e;return(0,n.jsx)(N.VY,{ref:t,sideOffset:r,className:m("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",i),...s})});D.displayName=N.VY.displayName;var E=i(2135),F=i(875),P=i(1047),I=i(1723),A=i(1810),T=i(8335),z=i(6818),C=i(1217),H=i(7806),L=i(5846);let V={whileHover:{scale:1.2,rotate:5},whileTap:{scale:.9},transition:{type:"spring",stiffness:400,damping:17}},S=e=>{let{children:t,className:i=""}=e;return(0,n.jsx)("div",{className:"backdrop-blur-md bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg ".concat(i),children:t})},Z=e=>{let{children:t,icon:i,title:s}=e,o=(0,a._)(),[c,h]=(0,d.YD)({triggerOnce:!0,threshold:.1});return(0,r.useEffect)(()=>{h&&o.start("visible")},[o,h]),(0,n.jsx)(l.E.div,{ref:c,animate:o,initial:"hidden",variants:{visible:{opacity:1,y:0},hidden:{opacity:0,y:50}},transition:{duration:.5,ease:"easeOut"},children:(0,n.jsxs)(S,{className:"mb-8 overflow-hidden transition-all duration-300 hover:shadow-xl",children:[(0,n.jsx)(u,{className:"bg-gradient-to-r from-[#D90416]/70 to-[#0D0D0D]/70 p-6",children:(0,n.jsxs)(x,{className:"text-2xl font-bold flex items-center text-white",children:[(0,n.jsx)(l.E.span,{...V,className:"mr-2 text-white",children:i}),s]})}),(0,n.jsx)(f,{className:"p-6",children:t})]})})},B=e=>{let{children:t}=e,[i,r]=(0,d.YD)({triggerOnce:!0,threshold:.1}),a=(0,s.q_)({opacity:r?1:0,transform:r?"translateX(0)":"translateX(-50px)",config:s.vc.gentle});return(0,n.jsx)(s.q.li,{ref:i,style:a,className:"mb-2",children:t})},K=e=>{let{data:t,tooltips:i}=e;return(0,n.jsxs)(g,{children:[(0,n.jsx)(p,{children:(0,n.jsx)(j,{children:Object.keys(t[0]).map((e,t)=>(0,n.jsx)(k,{className:"font-bold text-[#D90416]",children:e},t))})}),(0,n.jsx)(w,{children:t.map((e,t)=>(0,n.jsx)(l.E.tr,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},whileHover:{scale:1.02,backgroundColor:"rgba(13, 13, 13, 0.1)"},className:"transition-all duration-200",children:Object.entries(e).map((e,r)=>{let[s,a]=e;return(0,n.jsx)(b,{children:(0,n.jsx)(v,{children:(0,n.jsxs)(R,{children:[(0,n.jsx)(y,{asChild:!0,children:(0,n.jsx)("span",{className:"cursor-help",children:a})}),(0,n.jsx)(D,{children:(0,n.jsx)("p",{children:i[t][s]})})]})})},r)})},t))})]})},M=e=>{let{title:t,content:i}=e,[a,o]=(0,r.useState)(!1),d=(0,s.q_)({maxHeight:a?1e3:0,opacity:a?1:0,config:{tension:300,friction:30}});return(0,n.jsxs)(S,{className:"mb-4 overflow-hidden",children:[(0,n.jsxs)(l.E.div,{className:"p-4 flex justify-between items-center cursor-pointer",onClick:()=>o(!a),whileHover:{backgroundColor:"rgba(13, 13, 13, 0.1)"},children:[(0,n.jsx)("h3",{className:"text-lg font-semibold",children:t}),a?(0,n.jsx)(E.Z,{}):(0,n.jsx)(F.Z,{})]}),(0,n.jsx)(s.q.div,{style:d,children:(0,n.jsx)("div",{className:"p-4 border-t border-gray-200 dark:border-gray-700",children:i})})]})},U=()=>{let{scrollYProgress:e}=(0,o.v)();return(0,n.jsx)(l.E.div,{className:"fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D90416] to-[#0D0D0D] z-50",style:{scaleX:e}})};function _(){let[e,t]=(0,r.useState)(!1),i=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=()=>{i.current&&t(window.scrollY>i.current.offsetHeight)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.jsxs)("div",{className:"min-h-screen p-4 md:p-8 font-sans bg-cover bg-center bg-no-repeat",style:{backgroundImage:"url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fortuna-teams-hintergrund-5.jpg-DcTgFNP1f8Z4z8zk3XQSiMfy9oVEvR.jpeg')",backgroundAttachment:"fixed"},children:[(0,n.jsx)(U,{}),(0,n.jsxs)(S,{className:"max-w-5xl mx-auto overflow-hidden transition-all duration-300",children:[(0,n.jsx)(u,{ref:i,className:"bg-gradient-to-r from-[#D90416]/70 to-[#0D0D0D]/70 py-8 px-6 transition-all duration-300 ".concat(e?"sticky top-0 z-10 shadow-md":""),children:(0,n.jsx)(x,{className:"text-4xl font-bold text-center text-white",children:"LinkedIn Cheat Sheet 2024/2025 \uD83D\uDCCA"})}),(0,n.jsxs)(f,{className:"p-6 space-y-8",children:[(0,n.jsx)(Z,{icon:(0,n.jsx)(P.Z,{className:"w-6 h-6"}),title:"Posting-Frequenz",children:(0,n.jsxs)("ul",{className:"list-disc pl-6 space-y-2",children:[(0,n.jsxs)(B,{children:[(0,n.jsx)("strong",{children:"Empfohlen:"})," 2 bis 5 Posts pro Woche"]}),(0,n.jsxs)(B,{children:[(0,n.jsx)("strong",{children:"Hinweis:"})," Nicht mehr als 1x pro Tag, aber nicht weniger als 2x pro Woche."]}),(0,n.jsxs)(B,{children:[(0,n.jsx)("strong",{className:"bg-[#D90416]/50 text-[#F2F2F2] px-2 py-1 rounded",children:"Wichtig:"})," Regelm\xe4\xdfigkeit ist entscheidend!"]})]})}),(0,n.jsx)(Z,{icon:(0,n.jsx)(I.Z,{className:"w-6 h-6"}),title:"Bester Posting-Zeitpunkt",children:(0,n.jsxs)("div",{className:"grid md:grid-cols-2 gap-6",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{className:"text-lg font-medium mb-2 text-[#D90416]",children:"Nach Format:"}),(0,n.jsxs)("ul",{className:"list-disc pl-6 space-y-2",children:[(0,n.jsxs)(B,{children:[(0,n.jsx)("strong",{children:"Text, Bild, Video:"})," Mo-Fr, 08:00 - 10:30 Uhr"]}),(0,n.jsxs)(B,{children:[(0,n.jsx)("strong",{children:"Dokument:"})," Mo-Fr, 08:00 - 11:00 Uhr"]}),(0,n.jsxs)(B,{children:[(0,n.jsx)("strong",{children:"Umfrage:"})," Mo-Fr, 10:00 - 12:00 Uhr"]}),(0,n.jsxs)(B,{children:[(0,n.jsx)("strong",{children:"Externes Video:"})," Di-Do, 11:00 - 13:00 Uhr"]})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{className:"text-lg font-medium mb-2 text-[#D90416]",children:"Allgemein:"}),(0,n.jsxs)("ul",{className:"list-disc pl-6 space-y-2",children:[(0,n.jsxs)(B,{children:[(0,n.jsx)("strong",{children:"Tage:"})," Dienstag und Donnerstag"]}),(0,n.jsxs)(B,{children:[(0,n.jsx)("strong",{children:"Zeiten:"})," 09:00 - 10:00 Uhr & 11:00 - 12:00 Uhr"]})]}),(0,n.jsxs)(l.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"bg-[#0D0D0D]/20 border-l-4 border-[#0D0D0D] p-4 mt-4 rounded",children:[(0,n.jsx)("strong",{children:"Tipp:"})," Am Wochenende oft weniger Reichweite, aber mehr Interaktionen!"]})]})]})}),(0,n.jsx)(Z,{icon:(0,n.jsx)(A.Z,{className:"w-6 h-6"}),title:"Gewichtung der Interaktionen",children:(0,n.jsx)(K,{data:[{Aktion:"Like",Punktewert:"1 Punkt"},{Aktion:"Klick auf 'Mehr'",Punktewert:"4 Punkte"},{Aktion:"Teilen mit Kommentar",Punktewert:"5 Punkte"},{Aktion:"Speichern",Punktewert:"6 Punkte"},{Aktion:"Direkt teilen",Punktewert:"10 Punkte"},{Aktion:"Kommentar",Punktewert:"12 Punkte"}],tooltips:[{Aktion:"Einfachste Form der Interaktion",Punktewert:"Geringster Einfluss auf die Reichweite"},{Aktion:"Zeigt Interesse am vollst\xe4ndigen Inhalt",Punktewert:"Mittlerer Einfluss auf die Reichweite"},{Aktion:"Verbreitet den Inhalt mit pers\xf6nlicher Note",Punktewert:"Hoher Einfluss auf die Reichweite"},{Aktion:"Nutzer m\xf6chte den Inhalt sp\xe4ter wieder finden",Punktewert:"Sehr guter Einfluss auf die Reichweite"},{Aktion:"Schnelle Verbreitung des Inhalts",Punktewert:"Sehr hoher Einfluss auf die Reichweite"},{Aktion:"H\xf6chste Form der Interaktion",Punktewert:"St\xe4rkster Einfluss auf die Reichweite"}]})}),(0,n.jsxs)(Z,{icon:(0,n.jsx)(T.Z,{className:"w-6 h-6"}),title:"Umgang mit Links",children:[(0,n.jsx)("p",{className:"font-semibold text-[#F25260] mb-2",children:"Externe Links reduzieren die Reichweite um 40%!"}),(0,n.jsx)("p",{children:"Nur zwingend n\xf6tige Links einbauen."}),(0,n.jsx)("h4",{className:"text-lg font-medium mt-4 mb-2 text-[#D90416]",children:"Link-Platzierung & Einfluss:"}),(0,n.jsxs)("ul",{className:"list-none pl-0 space-y-2",children:[(0,n.jsx)(B,{children:"❌ Link-Post mit Vorschau: (Reichweite), ❌ (Conversion)"}),(0,n.jsx)(B,{children:"⚠️ Link nachtr\xe4glich einf\xfcgen: (Reichweite), ✅ (Conversion)"}),(0,n.jsx)(B,{children:"✅ Link im Kommentar: (Reichweite), ⚠️ (Conversion)"}),(0,n.jsx)(B,{children:'✅ „Link kommt per DM": (Reichweite), ❌ (Conversion)'}),(0,n.jsx)(B,{children:'✅ „Zur Website"-Button: (Reichweite), ✅ (Conversion)'})]})]}),(0,n.jsx)(Z,{icon:(0,n.jsx)(z.Z,{className:"w-6 h-6"}),title:"Reichweite pro Format",children:(0,n.jsx)(K,{data:[{Format:"Umfragen",Reichweite:"1,46x Reichweite"},{Format:"Dokument-Post",Reichweite:"1,26x Reichweite"},{Format:"Text-Bild-Post",Reichweite:"1,16x Reichweite"},{Format:"Natives Video",Reichweite:"1,14x Reichweite"},{Format:"Nur Text",Reichweite:"0,89x Reichweite"},{Format:"Externes Video",Reichweite:"0,66x Reichweite"},{Format:"Andere Formate",Reichweite:"0,58x Reichweite"}],tooltips:[{Format:"Interaktive Posts f\xf6rdern Engagement",Reichweite:"H\xf6chste Reichweite durch aktive Beteiligung"},{Format:"Informative Inhalte in Dokumentenform",Reichweite:"Sehr gute Reichweite f\xfcr detaillierte Informationen"},{Format:"Kombination aus visuellem und textuellem Inhalt",Reichweite:"Gute Balance zwischen Aufmerksamkeit und Information"},{Format:"Direkt auf LinkedIn hochgeladene Videos",Reichweite:"Bevorzugt vom LinkedIn-Algorithmus"},{Format:"Reine Textbeitr\xe4ge ohne Medien",Reichweite:"Mittlere Reichweite, abh\xe4ngig von der Qualit\xe4t des Inhalts"},{Format:"Videos von externen Plattformen",Reichweite:"Geringere Reichweite, da LinkedIn interne Inhalte bevorzugt"},{Format:"Sonstige Beitragsarten",Reichweite:"Niedrigste durchschnittliche Reichweite"}]})}),(0,n.jsx)(Z,{icon:(0,n.jsx)(C.Z,{className:"w-6 h-6"}),title:"Hashtags",children:(0,n.jsxs)("ul",{className:"list-disc pl-6 space-y-2",children:[(0,n.jsxs)(B,{children:[(0,n.jsx)("strong",{children:"Einfluss auf Reichweite:"})," Kein Einfluss mehr"]}),(0,n.jsxs)(B,{children:[(0,n.jsx)("strong",{children:"Empfohlene Hashtags pro Post:"}),(0,n.jsxs)("ul",{className:"list-circle pl-6 space-y-1 mt-2",children:[(0,n.jsx)("li",{children:"Normaler Post: 2,2 Hashtags"}),(0,n.jsx)("li",{children:"Top 5% Post: 0,9 Hashtags"})]})]})]})}),(0,n.jsxs)(Z,{icon:(0,n.jsx)(H.Z,{className:"w-6 h-6"}),title:"Markieren",children:[(0,n.jsx)("p",{className:"mb-2",children:(0,n.jsx)("strong",{children:"Auswirkung auf Reichweite abh\xe4ngig von Reaktion der markierten Personen:"})}),(0,n.jsxs)("ul",{className:"list-none pl-0 space-y-2",children:[(0,n.jsx)(B,{children:"❌ < 33% Reaktionsrate: (negative Auswirkung)"}),(0,n.jsx)(B,{children:"⚠️ 33-66% Reaktionsrate: (teilweise negative Auswirkung)"}),(0,n.jsx)(B,{children:"✅ > 66% Reaktionsrate: (positive Auswirkung)"})]}),(0,n.jsxs)(l.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"bg-[#0D0D0D]/20 border-l-4 border-[#0D0D0D] p-4 mt-4 rounded",children:[(0,n.jsx)("strong",{children:"Tipp:"})," Tags in Kommentaren haben ",(0,n.jsx)("strong",{children:"keinen direkten Einfluss auf Reichweite!"})]})]}),(0,n.jsx)(Z,{icon:(0,n.jsx)(L.Z,{className:"w-6 h-6"}),title:"11 Top-Empfehlungen",children:[{title:"Fr\xfche Interaktionen",content:"Erzeuge Interaktionen in den ersten 60-120 Minuten. Dies signalisiert dem Algorithmus, dass dein Inhalt wertvoll ist."},{title:"Kommentar-Diskussionen",content:"Verschachtelte Kommentare haben den gr\xf6\xdften Impact auf die Reichweite. F\xf6rdere aktiv Diskussionen in deinen Beitr\xe4gen."},{title:"Beitrag erneut teilen",content:"Teile deinen Beitrag nach einem Tag erneut (direkt), wenn kein neuer Post geplant ist. Dies gibt deinem Inhalt eine zweite Chance auf Sichtbarkeit."},{title:"Qualit\xe4t der Kontakte",content:"Sei w\xe4hlerisch bei Kontakten (mind. 1,5x mehr Follower als Kontakte). Qualit\xe4t ist wichtiger als Quantit\xe4t in deinem Netzwerk."},{title:"Kommentare beantworten",content:"Beantworte Kommentare unbedingt (+30% Reichweite). Dies f\xf6rdert Engagement und signalisiert Aktivit\xe4t."},{title:"Nach dem Posten interagieren",content:"Interagiere nach dem Posten mit anderen Accounts. Dies erh\xf6ht deine Sichtbarkeit und f\xf6rdert Gegenseitigkeit."},{title:"Verweildauer",content:"Hohe Verweildauer auf Beitrag = hohe Reichweite. Erstelle Inhalte, die Nutzer zum l\xe4ngeren Lesen oder Ansehen animieren."},{title:"Erfolgreiche Formate",content:"Selfies, Infografiken & Flowcharts funktionieren top. Visuelle Inhalte sind oft besonders erfolgreich."},{title:"Video-Optimierung",content:"Wenn Video, dann Hochformat (9:16), max. 60 Sekunden. Kurze, vertikale Videos passen am besten zum Nutzungsverhalten auf LinkedIn."},{title:"Textl\xe4nge und Struktur",content:"L\xe4ngere Texte performen gut, aber achte auf Lesbarkeit und Struktur (kurze S\xe4tze, h\xe4ufige Abs\xe4tze, Leerzeilen). Mache lange Texte leicht konsumierbar."},{title:"Der Hook",content:"Der Hook ist das wichtigste Element bei Texten und Videos! Fessle deine Zielgruppe von Anfang an mit einem starken Einstieg."}].map((e,t)=>(0,n.jsx)(M,{title:e.title,content:e.content},t))}),(0,n.jsxs)(l.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1},className:"text-sm text-[#0D0D0D] dark:text-[#F2F2F2] mt-8 text-center",children:[(0,n.jsx)("strong",{children:"Quellen:"})," 5th Algorithm Insights 2024 & Update Oktober 2024, Richard van der Blom; AuthoredUp / Ivana Todorović; eigene Erfahrungen."]})]})]})]})}function O(){return(0,n.jsx)(_,{})}}},function(e){e.O(0,[417,971,117,744],function(){return e(e.s=1538)}),_N_E=e.O()}]);