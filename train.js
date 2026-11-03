/* ===================== Mental maths sprint + Read the graph ===================== */
const trN=x=>{const r=Math.round(x*1000)/1000;return String(r).replace('-','−');};
/* three distinct wrong options from candidates, padded if needed */
function trOpts(right,cands){
  const out=[];
  for(const c of cands){const s=String(c);if(s!==String(right)&&!out.includes(s)&&!/NaN|undefined|Infinity/.test(s))out.push(s);if(out.length===3)break;}
  let k=2;while(out.length<3){const s=String(right)+' ('+k+')';out.push(s);k++;}
  return out;
}

/* ---------- Mental maths sprint: 60 s of no-calculator questions ---------- */
const trSF=(m,e)=>m+' × 10^('+String(e).replace('-','−')+')';
const SPRINT_GEN=[
  ()=>{const a=rint(12,99),b=rint(3,9),r=a*b;return {q:a+' × '+b,a:r,w:[r+b,r-b,r+10,r-10]};},
  ()=>{const n=rint(11,25),r=n*n;return {q:n+'²',a:r,w:[r+n,r-n,(n+1)*(n+1),(n-1)*(n-1)]};},
  ()=>{const n=rint(6,30);return {q:'√'+(n*n),a:n,w:[n+1,n-1,n+2,n-2]};},
  ()=>{const a=rint(1,4),b=rint(1,2),p=rint(-6,8),q=rint(-6,8),m=a*b;return {q:'('+trSF(a,p)+') × ('+trSF(b,q)+')',a:trSF(m,p+q),w:[trSF(m,p+q+1),trSF(m,p+q-1),trSF(a+b,p+q),trSF(m,p*q)]};},
  ()=>{const b=pick([2,4]),m=pick([2,3,4]),a=b*m,p=rint(-4,9),q=rint(-5,6);return {q:'('+trSF(a,p)+') ÷ ('+trSF(b,q)+')',a:trSF(m,p-q),w:[trSF(m,p+q),trSF(m,p-q+1),trSF(m,p-q-1),trSF(a-b,p-q)]};},
  ()=>{const p=pick([5,10,15,20,25,30,40,60,75]),N=20*rint(2,20),r=p*N/100;return {q:p+'% of '+N,a:trN(r),w:[trN(r*2),trN(r/2),trN(r+p),trN(N-r),trN(r+10)]};},
  ()=>{const F=[['1/8','0.125'],['3/8','0.375'],['5/8','0.625'],['7/8','0.875'],['1/5','0.2'],['2/5','0.4'],['3/4','0.75'],['1/16','0.0625'],['3/5','0.6'],['1/3','0.333…'],['2/3','0.667…'],['1/6','0.167…']];
    const i=rnd(F.length);return {q:F[i][0]+' as a decimal',a:F[i][1],w:shuffle(F.filter((_,j)=>j!==i).map(f=>f[1]))};},
  ()=>{const n=rint(-6,9),v=n>=0?'1'+'0'.repeat(n):'0.'+'0'.repeat(-n-1)+'1';return {q:'log₁₀ '+v,a:trN(n),w:[trN(n+1),trN(n-1),trN(-n||10),trN(n*10||1)]};},
  ()=>{const n=rint(5,12),r=2**n;return {q:'2^('+n+')',a:r,w:[r*2,r/2,r+n,2*n]};},
  ()=>{const x=rint(101,899),r=1000-x;return {q:'1000 − '+x,a:r,w:[r+10,r-10,r+100,r+1]};},
  ()=>{const a=rint(2,9)*10,b=rint(2,9)*10,r=a*b;return {q:a+' × '+b,a:r,w:[r*10,r/10,r+100,r-100]};},
  ()=>{const d=pick([4,5,8,25]),r=rint(3,40),n=r*d;return {q:n+' ÷ '+d,a:r,w:[r+1,r-1,r+d,r*2]};}
];
function sprintItem(){
  for(;;){const g=pick(SPRINT_GEN)(),a=String(g.a),w=trOpts(a,shuffle(g.w.slice()));
    if(!w.some(x=>/ \(\d+\)$/.test(x)))return {q:g.q,right:a,opts:shuffle([{h:a,ok:true}].concat(w.map(x=>({h:x,ok:false}))))};}
}
let SPR=null;
function sprintHome(){
  leave();setBack(home);setScratch(false);
  const h=loadJSON('sprint-history',[]),best=h.reduce((m,x)=>Math.max(m,x.ok-x.bad),0);
  app.innerHTML=
  '<div class="stack"><div class="stack" style="gap:8px"><p class="eyebrow">Daily training</p><h1>Mental maths sprint</h1>'+
  '<p class="muted">60 seconds of no-calculator questions: times tables, squares and roots, standard form, percentages, fractions, logs and powers of 2. Score = correct − wrong, so stay accurate.</p></div>'+
  '<div class="facts"><div class="fact"><b>'+best+'</b><span>best score</span></div><div class="fact"><b>'+h.length+'</b><span>sprints</span></div><div class="fact"><b>'+(h.length?h[h.length-1].ok-h[h.length-1].bad:'–')+'</b><span>last</span></div></div>'+
  '<button class="btn" id="sprgo">Start</button>'+
  (h.length>1?'<div class="card"><h2 style="margin-bottom:8px">History</h2>'+sparkSvg(h.slice(-20).map(x=>Math.max(0,x.ok-x.bad)))+'</div>':'')+
  '<div class="card stack"><h2>Why bother?</h2><p class="note">Oxford interviews are done without a calculator. Quick, reliable arithmetic and standard form keep your attention on the physics instead of the sums.</p></div></div>';
  document.getElementById('sprgo').onclick=sprintStart;
}
function sprintStart(){
  SPR={end:Date.now()+60000,ok:0,bad:0,res:[],it:sprintItem()};
  setBack(()=>{if(confirm('Stop this sprint? It will not be saved.')){clearInterval(SPR.tick);sprintHome();}});
  cleanups.push(()=>clearInterval(SPR&&SPR.tick));
  app.innerHTML=
  '<div class="stack"><div class="top"><span class="count" id="sprc">0 points</span><span class="timer" id="sprt">1:00</span></div>'+
  '<div class="card stack"><p class="sprq" id="sprq"></p><div class="sprgrid" id="spro"></div></div></div>';
  const show=()=>{
    document.getElementById('sprq').innerHTML='<span></span>';document.querySelector('#sprq span').textContent=SPR.it.q;
    const o=document.getElementById('spro');
    o.innerHTML=SPR.it.opts.map((x,k)=>'<button class="opt sprb" data-k="'+k+'"><span>'+x.h+'</span></button>').join('');
    o.querySelectorAll('.sprb').forEach(b=>b.onclick=()=>ans(+b.dataset.k));
    document.getElementById('sprc').textContent=(SPR.ok-SPR.bad)+' points';
  };
  const ans=k=>{
    if(Date.now()>SPR.end)return;
    const o=SPR.it.opts[k],ok=o.ok;
    if(ok)SPR.ok++;else SPR.bad++;
    actLog('q',ok);
    SPR.res.push({prompt:SPR.it.q,chosen:o.h,right:SPR.it.right,ok,explain:''});
    const card=document.querySelector('#sprq').parentNode;card.classList.remove('flash-ok','flash-no');void card.offsetWidth;card.classList.add(ok?'flash-ok':'flash-no');
    SPR.it=sprintItem();show();
  };
  show();
  SPR.tick=setInterval(()=>{const left=(SPR.end-Date.now())/1000,el=document.getElementById('sprt');if(el)el.textContent=fmt(Math.max(0,left));if(left<=0){clearInterval(SPR.tick);sprintDone();}},200);
}
function sprintDone(){
  setBack(sprintHome);setScratch(false);
  const score=SPR.ok-SPR.bad,h=loadJSON('sprint-history',[]),prevBest=h.reduce((m,x)=>Math.max(m,x.ok-x.bad),0);
  h.push({t:Date.now(),ok:SPR.ok,bad:SPR.bad});saveJSON('sprint-history',h.slice(-100));
  app.innerHTML='<div class="stack"><p class="eyebrow">Time</p><h1>'+score+' points</h1>'+
   '<div class="facts"><div class="fact"><b class="ok">'+SPR.ok+'</b><span>correct</span></div><div class="fact"><b class="no">'+SPR.bad+'</b><span>wrong</span></div><div class="fact"><b>'+(score>prevBest&&h.length>1?'New!':Math.max(prevBest,score))+'</b><span>best</span></div></div>'+
   (SPR.res.some(r=>!r.ok)?reviewHtml(SPR.res.filter(r=>!r.ok)):'<p class="note">No mistakes. Nice.</p>')+
   '<button class="btn" id="spragain">Go again</button><button class="btn ghost" id="sprb">Back</button></div>';
  document.getElementById('spragain').onclick=sprintStart;
  document.getElementById('sprb').onclick=sprintHome;
}

/* ---------- Read the graph: gradients, areas and half-lives from plotted graphs ---------- */
function graphSvg(g){
  const W=320,H=220,L=46,B=38,T=12,R=14,pw=W-L-R,ph=H-T-B;
  const X=x=>L+pw*x/g.xmax,Y=y=>T+ph*(1-y/g.ymax);
  let s='<svg class="grsvg" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+g.yl+' against '+g.xl+'">';
  for(let x=0;x<=g.xmax+1e-9;x+=g.xt)s+='<line x1="'+X(x)+'" y1="'+T+'" x2="'+X(x)+'" y2="'+(T+ph)+'" class="grg"/><text x="'+X(x)+'" y="'+(T+ph+14)+'" text-anchor="middle" class="grt">'+trN(x)+'</text>';
  for(let y=0;y<=g.ymax+1e-9;y+=g.yt)s+='<line x1="'+L+'" y1="'+Y(y)+'" x2="'+(L+pw)+'" y2="'+Y(y)+'" class="grg"/><text x="'+(L-5)+'" y="'+(Y(y)+4)+'" text-anchor="end" class="grt">'+trN(y)+'</text>';
  s+='<line x1="'+L+'" y1="'+(T+ph)+'" x2="'+(L+pw)+'" y2="'+(T+ph)+'" class="gra"/><line x1="'+L+'" y1="'+T+'" x2="'+L+'" y2="'+(T+ph)+'" class="gra"/>';
  const pts=[];for(let i=0;i<=80;i++){const x=g.x0!=null?g.x0+(g.x1-g.x0)*i/80:g.xmax*i/80;pts.push(X(x).toFixed(1)+','+Y(g.fn(x)).toFixed(1));}
  s+='<polyline points="'+pts.join(' ')+'" class="grl"/>';
  s+='<text x="'+(L+pw/2)+'" y="'+(H-4)+'" text-anchor="middle" class="grx">'+g.xl+'</text>';
  s+='<text transform="translate(12 '+(T+ph/2)+') rotate(-90)" text-anchor="middle" class="grx">'+g.yl+'</text></svg>';
  return '<div class="grbox">'+s+'</div>';
}
/* what gradients and areas mean, for the concept questions */
const GR_MEAN=[
  {g:'velocity–time',xl:'t / s',yl:'v / m s⁻¹',grad:'Acceleration',area:'Displacement'},
  {g:'displacement–time',xl:'t / s',yl:'s / m',grad:'Velocity'},
  {g:'force–extension',xl:'ΔL / m',yl:'F / N',grad:'The spring constant (stiffness) k',area:'Elastic strain energy stored'},
  {g:'charge–time',xl:'t / s',yl:'Q / C',grad:'Current'},
  {g:'current–time',xl:'t / s',yl:'I / A',area:'Charge that has flowed'},
  {g:'power–time',xl:'t / s',yl:'P / W',area:'Energy transferred'},
  {g:'acceleration–time',xl:'t / s',yl:'a / m s⁻²',area:'Change in velocity'},
  {g:'force–time',xl:'t / s',yl:'F / N',area:'Impulse (change in momentum)'},
  {g:'stress–strain (in the elastic region)',xl:'strain',yl:'stress / Pa',grad:'The Young modulus'},
  {g:'momentum–time',xl:'t / s',yl:'p / N s',grad:'Resultant force'}
];
const GR_ALL=['Acceleration','Displacement','Velocity','The spring constant (stiffness) k','Elastic strain energy stored','Current','Charge that has flowed','Energy transferred','Change in velocity','Impulse (change in momentum)','The Young modulus','Resultant force','Power','Work done per unit charge'];
const GR_GEN=[
  /* concept: gradient or area */
  ()=>{const m=pick(GR_MEAN),useA=m.area&&(!m.grad||Math.random()<.5),right=useA?m.area:m.grad;
    const k=rint(1,4),fn=useA?(x=>2+k*x*0.6):(x=>k*x);
    return {prompt:'On a '+m.g+' graph, what does the '+(useA?'area under the line':'gradient')+' represent?',stem:graphSvg({xl:m.xl,yl:m.yl,xmax:5,xt:1,ymax:24,yt:4,fn}),
      right,wrong:trOpts(right,shuffle(GR_ALL.slice())),explain:(useA?'Area = y × x':'Gradient = Δy/Δx')+': for this graph that gives '+right.toLowerCase()+'.'};},
  /* v–t gradient */
  ()=>{let u,T,a,v,ym,yt;do{u=pick([0,2,4]);T=pick([4,5,8,10]);a=pick([0.5,1,1.5,2,2.5]);v=u+a*T;yt=v>20?5:2;ym=Math.ceil(v/yt)*yt+yt;}while(v%yt||u%yt);
    return {prompt:'The velocity–time graph is a straight line. What is the acceleration?',stem:graphSvg({xl:'t / s',yl:'v / m s⁻¹',xmax:T,xt:T>5?2:1,ymax:ym,yt,fn:x=>u+a*x}),
      right:trN(a)+' m/s²',wrong:trOpts(trN(a)+' m/s²',[trN(v/T)+' m/s²',trN((v+u)/T)+' m/s²',trN(a*2)+' m/s²',trN(a/2)+' m/s²',trN(a+1)+' m/s²',trN(a+0.5)+' m/s²',trN(a*3)+' m/s²']),
      explain:'Gradient = Δv/Δt = ('+trN(v)+' − '+trN(u)+')/'+T+' = '+trN(a)+' m/s².'};},
  /* v–t area */
  ()=>{let u,T,a,v,ym,yt;do{u=pick([0,2,4,6]);T=pick([4,5,8,10]);a=pick([1,1.5,2]);v=u+a*T;yt=v>20?5:2;ym=Math.ceil(v/yt)*yt+yt;}while(v%yt||u%yt);const d=(u+v)/2*T;
    return {prompt:'How far does the object travel in the '+T+' s shown?',stem:graphSvg({xl:'t / s',yl:'v / m s⁻¹',xmax:T,xt:T>5?2:1,ymax:ym,yt,fn:x=>u+a*x}),
      right:trN(d)+' m',wrong:trOpts(trN(d)+' m',[trN(v*T)+' m',trN(v*T/2)+' m',trN((v-u)/T)+' m',trN(d*2)+' m',trN(d+u)+' m',trN(d*1.5)+' m',trN(d+10)+' m',trN(d-T)+' m']),
      explain:'Distance = area under the graph, a trapezium: ½('+trN(u)+' + '+trN(v)+') × '+T+' = '+trN(d)+' m.'};},
  /* F–x: k and energy */
  ()=>{const k=pick([20,25,40,50,80,100]),xm=pick([0.1,0.2,0.4]),F=k*xm,ask=Math.random()<.5;
    const g=graphSvg({xl:'ΔL / m',yl:'F / N',xmax:xm,xt:xm/4,ymax:Math.ceil(F/4)*4+4,yt:Math.max(1,Math.ceil(F/4/2)*2),fn:x=>k*x});
    if(ask)return {prompt:'What is the spring constant of this spring?',stem:g,right:k+' N/m',wrong:trOpts(k+' N/m',[trN(F*xm)+' N/m',trN(xm/F)+' N/m',trN(k/2)+' N/m',trN(k*2)+' N/m']),explain:'k = gradient = '+trN(F)+' N / '+trN(xm)+' m = '+k+' N/m.'};
    const E=0.5*F*xm;return {prompt:'How much energy is stored when the spring is stretched by '+trN(xm)+' m?',stem:g,right:trN(E)+' J',wrong:trOpts(trN(E)+' J',[trN(F*xm)+' J',trN(E/2)+' J',trN(F/xm)+' J',trN(E*4)+' J']),explain:'Energy = area under the F–ΔL line = ½ × '+trN(F)+' × '+trN(xm)+' = '+trN(E)+' J.'};},
  /* exponential decay: read the half-life */
  ()=>{const h=pick([2,3,4,5]),cap=Math.random()<.5,y0=8,xm=h*4;
    const g=graphSvg({xl:'t / '+(cap?'s':'min'),yl:cap?'Q / µC':'activity / kBq',xmax:xm,xt:h,ymax:y0+2,yt:2,fn:x=>y0*Math.pow(0.5,x/h)});
    return {prompt:cap?'A capacitor discharges through a resistor. From the graph, how long does the charge take to halve?':'From the graph, what is the half-life of this sample?',stem:g,
      right:h+(cap?' s':' min'),wrong:trOpts(h+(cap?' s':' min'),[2*h,h/2,h+1,4*h,h-1].map(x=>trN(x)+(cap?' s':' min'))),
      explain:'Start at '+y0+', find '+(y0/2)+' on the y-axis, read across to the curve and down: '+h+(cap?' s':' min')+'. It halves again every '+h+(cap?' s':' min')+' ('+(y0/4)+' at '+(2*h)+').'};},
  /* I–V through origin: resistance (V on x-axis, so gradient = 1/R) */
  ()=>{const R=pick([2,4,5,10,20]),Vm=pick([4,5,10]),Im=Vm/R;
    return {prompt:'This I–V graph is for a resistor at constant temperature. What is its resistance?',stem:graphSvg({xl:'V / V',yl:'I / A',xmax:Vm,xt:Vm/5>1?Vm/5:1,ymax:Im*1.25,yt:Im/4,fn:x=>x/R}),
      right:R+' Ω',wrong:trOpts(R+' Ω',[trN(1/R)+' Ω',trN(Vm*Im)+' Ω',trN(R*2)+' Ω',trN(R/2)+' Ω']),explain:'With I on the y-axis the gradient is I/V = 1/R. R = V/I = '+Vm+'/'+trN(Im)+' = '+R+' Ω (not the gradient itself).'};}
];
function grItems(n=10){const out=[];let guard=0;while(out.length<n&&guard++<200){const g=pick(GR_GEN)();if(new Set([g.right].concat(g.wrong)).size===4&&!g.wrong.some(w=>/ \(\d+\)$/.test(w))&&!/NaN|undefined|Infinity/.test(g.right+g.wrong.join()+g.stem)&&!out.some(o=>o.prompt===g.prompt&&o.right===g.right))out.push(Object.assign({src:'Read the graph',yt:'A level physics gradient and area under graph'},g));}return out;}
function grHome(){
  leave();setBack(home);setScratch(false);
  const h=loadJSON('graph-history',[]),best=h.reduce((m,x)=>Math.max(m,Math.round(100*x.ok/x.n)),0);
  app.innerHTML='<div class="stack"><div class="stack" style="gap:8px"><p class="eyebrow">AQA Physics</p><h1>Read the graph</h1></div>'+
   '<p class="lede">10 questions on plotted graphs: what the gradient and the area mean, reading values off the axes, and half-lives from decay curves. Graphs are new each time.</p>'+
   '<button class="btn" id="grgo">Start</button>'+
   (h.length?'<p class="note">'+h.length+' round'+(h.length>1?'s':'')+' done · best '+best+'% · last '+Math.round(100*h[h.length-1].ok/h[h.length-1].n)+'%</p>':'')+'</div>';
  document.getElementById('grgo').onclick=grStart;
}
function grStart(){
  quizRun({title:'Read the graph',items:grItems(),back:grHome,again:grStart,
    onDone:q=>{const h=loadJSON('graph-history',[]);h.push({t:Date.now(),ok:q.ok,n:Math.max(1,q.res.filter(r=>!r.skip).length)});saveJSON('graph-history',h.slice(-100));}});
}
