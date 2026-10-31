/* =====================  Daily drill  =====================
   Ten quick generated questions a day to build fluency: arithmetic, standard form,
   orders of magnitude, differentiation, integration, units and graph recognition. */

const sup=n=>'<sup>'+String(n).replace('-','−')+'</sup>';
const DRILL_TYPES=['Mental arithmetic','Standard form','Orders of magnitude','Differentiation','Integration','Units','Graphs'];

/* ---- helpers ---- */
function uniqOpts(right,cands){
  const out=[],seen=new Set([right]);
  for(const c of cands){if(out.length===3)break;if(c==null||seen.has(c))continue;seen.add(c);out.push(c);}
  return out.length===3?out:null;
}
function q(type,prompt,right,wrong,explain,extra){return Object.assign({type,prompt,right,wrong,explain},extra||{});}

/* ---- 0. mental arithmetic ---- */
function dArith(){
  const k=rnd(5);
  if(k===0){const a=rint(12,49),b=rint(3,9),r=a*b;
    return q(0,'What is '+a+' × '+b+'?',String(r),uniqOpts(String(r),[r+b,r-b,r+10,r-10,r+1].map(String)),a+' × '+b+' = '+(Math.floor(a/10)*10)+' × '+b+' + '+(a%10)+' × '+b+' = '+r+'.');}
  if(k===1){const p=pick([5,15,20,25,35,45,60,75]),n=pick([40,80,120,160,240,360,480]),r=p*n/100;
    return q(0,'What is '+p+'% of '+n+'?',String(r),uniqOpts(String(r),[r+n/20,r-n/20,r*2,r/2,r+5].map(v=>String(Math.round(v*100)/100))),p+'% of '+n+' = '+p+' × '+n+' ÷ 100 = '+r+'.');}
  if(k===2){const a=rint(21,79),r=a*a;
    return q(0,'What is '+a+'²?',String(r),uniqOpts(String(r),[r+10,r-10,r+a,r-a,r+100].map(String)),'('+(a-a%10)+' + '+a%10+')² = '+(a-a%10)**2+' + '+2*(a-a%10)*(a%10)+' + '+(a%10)**2+' = '+r+'.');}
  if(k===3){const pairs=[[1,2,1,3,'5/6'],[1,4,1,6,'5/12'],[2,3,1,4,'11/12'],[3,4,1,6,'11/12'],[1,3,2,5,'11/15'],[1,6,1,9,'5/18']];
    const [a,b,c,d,r]=pick(pairs);
    return q(0,'What is '+a+'/'+b+' + '+c+'/'+d+'?',r,uniqOpts(r,[(a+c)+'/'+(b+d),(a+c)+'/'+(b*d),'1/2','2/3','3/4','7/12'].filter(x=>x!==r)),'Use a common denominator: '+a+'/'+b+' + '+c+'/'+d+' = '+r+'.');}
  const a=rint(101,999),b=rint(101,999),r=a+b;
  return q(0,'What is '+a+' + '+b+'?',String(r),uniqOpts(String(r),[r+10,r-10,r+100,r-1,r+1].map(String)),a+' + '+b+' = '+r+'.');
}

/* ---- 1. standard form ---- */
const sf=(m,e)=>m+' × 10'+sup(e);
function dStd(){
  const ma=rint(2,9),mb=rint(2,9),ea=rint(-9,9),eb=rint(-9,9);
  if(Math.random()<.5){
    let m=ma*mb,e=ea+eb;const mm=m>=10?m/10:m,ee=m>=10?e+1:e;
    const r=sf(mm,ee);
    return q(1,'('+sf(ma,ea)+') × ('+sf(mb,eb)+') = ?',r,uniqOpts(r,[sf(mm,ee+1),sf(mm,ee-1),sf(ma+mb,ee),sf(mm,ea*eb)]),
      'Multiply the numbers ('+ma+' × '+mb+' = '+m+') and add the powers ('+ea+' + '+eb+' = '+e+'), then tidy to '+r+'.');
  }
  const m=ma*mb,r=sf(ma,ea); /* (m × 10^(ea+eb)) / (mb × 10^eb) = ma × 10^ea */
  const top=m>=10?sf(m/10,ea+eb+1):sf(m,ea+eb);
  return q(1,'('+top+') ÷ ('+sf(mb,eb)+') = ?',r,uniqOpts(r,[sf(ma,ea+1),sf(ma,ea-1),sf(ma,ea+2*eb),sf(mb,ea)]),
    'Divide the numbers and subtract the powers: the answer is '+r+'.');
}

/* ---- 2. orders of magnitude ---- */
const OOM=[
 ['Seconds in a year','3 × 10'+sup(7),'365 × 24 × 3600 ≈ 3.15 × 10⁷ s ("π × 10⁷").'],
 ['Diameter of an atom (m)','10'+sup(-10),'About 0.1 nm, the ångström.'],
 ['Diameter of an atomic nucleus (m)','10'+sup(-15),'About a femtometre: 100 000 times smaller than the atom.'],
 ['Mass of a proton (kg)','10'+sup(-27),'1.67 × 10⁻²⁷ kg.'],
 ['Mass of an electron (kg)','10'+sup(-30),'9.1 × 10⁻³¹ kg, about 1/1836 of a proton.'],
 ['Radius of the Earth (m)','6 × 10'+sup(6),'6400 km.'],
 ['Earth–Sun distance (m)','1.5 × 10'+sup(11),'One astronomical unit.'],
 ['Mass of the Earth (kg)','6 × 10'+sup(24),'From g = GM/R².'],
 ['Mass of the Sun (kg)','2 × 10'+sup(30),'About 330 000 Earth masses.'],
 ['Power output of the Sun (W)','4 × 10'+sup(26),'From the solar constant and the Earth–Sun distance.'],
 ['Molecules in a glass of water','10'+sup(25),'250 g ÷ 18 g/mol ≈ 14 mol, times 6 × 10²³.'],
 ['Age of the universe (s)','4 × 10'+sup(17),'13.8 billion years × 3 × 10⁷ s.'],
 ['Wavelength of visible light (m)','5 × 10'+sup(-7),'About 400–700 nm.'],
 ['One light year (m)','10'+sup(16),'3 × 10⁸ m/s × 3 × 10⁷ s ≈ 9.5 × 10¹⁵ m.'],
 ['People who have ever lived','10'+sup(11),'Roughly 100 billion.'],
 ['Heartbeats in a lifetime','3 × 10'+sup(9),'About 70 per minute for 80 years.'],
 ['Energy in a chocolate bar (J)','10'+sup(6),'About 250 kcal ≈ 10⁶ J.'],
 ['Power of a hairdryer (W)','2 × 10'+sup(3),'About 1–2 kW.'],
 ['Speed of sound in air (m/s)','3 × 10'+sup(2),'About 340 m/s.'],
 ['Avogadro\'s number','6 × 10'+sup(23),'Particles per mole.'],
 ['Stars in the Milky Way','10'+sup(11),'A few hundred billion.'],
 ['Density of air (kg/m³)','1','About 1.2 kg/m³.'],
 ['Atmospheric pressure (Pa)','10'+sup(5),'101 kPa.'],
 ['Charge on an electron (C)','1.6 × 10'+sup(-19),'The elementary charge.']
];
function dOom(){
  const [p,r,ex]=pick(OOM);
  const m=r.match(/10<sup>(−?-?\d+)<\/sup>/),e=m?parseInt(m[1].replace('−','-')):0;
  const mant=r.includes('×')?r.split(' × ')[0]+' × ':'';
  const mk=d=>r==='1'?(d===0?'1':'10'+sup(d)):mant+'10'+sup(e+d);
  return q(2,'Roughly: '+p+'?',r,uniqOpts(r,shuffle([-3,-2,2,3,-1,1]).map(mk)),ex);
}

/* ---- 3. differentiation ---- */
function dDiff(){
  const k=rint(2,5),a=rint(2,6),n=rint(2,6);
  const T=[
   ()=>[a+'x'+sup(n),a*n+'x'+sup(n-1),[a+'x'+sup(n-1),a*n+'x'+sup(n+1),(a*(n-1))+'x'+sup(n-1)],'Power rule: bring down the power and reduce it by one.'],
   ()=>['sin('+k+'x)',k+'cos('+k+'x)',['cos('+k+'x)','−'+k+'cos('+k+'x)',k+'sin('+k+'x)'],'Chain rule: the derivative of sin(kx) is k cos(kx).'],
   ()=>['cos('+k+'x)','−'+k+'sin('+k+'x)',[k+'sin('+k+'x)','−sin('+k+'x)','−'+k+'cos('+k+'x)'],'The derivative of cos(kx) is −k sin(kx).'],
   ()=>['e'+sup(k+'x'),k+'e'+sup(k+'x'),['e'+sup(k+'x'),k+'x e'+sup(k+'x−1'),'e'+sup(k+'x')+'/'+k],'d/dx e^(kx) = k e^(kx).'],
   ()=>['ln('+k+'x)','1/x',[k+'/x','1/('+k+'x)','ln('+k+')/x'],'ln(kx) = ln k + ln x, and ln k is a constant.'],
   ()=>['x e'+sup(k+'x'),'(1 + '+k+'x)e'+sup(k+'x'),[k+'e'+sup(k+'x'),'(1 + x)e'+sup(k+'x'),k+'x e'+sup(k+'x')],'Product rule: e^(kx) + x · k e^(kx).'],
   ()=>['x² sin x','2x sin x + x² cos x',['2x cos x','2x sin x − x² cos x','x² cos x'],'Product rule: (x²)′ sin x + x² (sin x)′.'],
   ()=>['sin² x','2 sin x cos x',['2 sin x','cos² x','−2 sin x cos x'],'Chain rule: 2 sin x × cos x (which equals sin 2x).'],
   ()=>['1/x'+sup(n),'−'+n+'/x'+sup(n+1),['−'+n+'/x'+sup(n-1),n+'/x'+sup(n+1),'−1/('+n+'x'+sup(n+1)+')'],'Write it as x^(−n); the derivative is −n x^(−n−1).'],
   ()=>['√x','1/(2√x)',['2√x','1/√x','√x/2'],'√x = x^(1/2), so the derivative is ½x^(−1/2).'],
   ()=>['tan x','sec² x',['cot x','−sec² x','sec x tan x'],'d/dx tan x = 1/cos² x = sec² x.'],
   ()=>['ln(x² + 1)','2x/(x² + 1)',['1/(x² + 1)','2x ln(x² + 1)','2/(x² + 1)'],'Chain rule: (2x) × 1/(x² + 1).']
  ];
  const [f,r,w,ex]=pick(T)();
  return q(3,'Differentiate with respect to x: <span class="mathx">'+f+'</span>',r,w,ex);
}

/* ---- 4. integration ---- */
function dInt(){
  const k=rint(2,5),n=rint(2,5);
  const defs=[[2,1,'2'],[3,1,'9/2'],[2,2,'8/3'],[3,2,'9'],[1,3,'1/4'],[2,3,'4'],[1,1,'1/2']];
  const T=[
   ()=>['∫ x'+sup(n)+' dx','x'+sup(n+1)+'/'+(n+1)+' + C',[n+'x'+sup(n-1)+' + C','x'+sup(n+1)+' + C','x'+sup(n)+'/'+n+' + C'],'Raise the power by one and divide by the new power.'],
   ()=>['∫ e'+sup(k+'x')+' dx','e'+sup(k+'x')+'/'+k+' + C',[k+'e'+sup(k+'x')+' + C','e'+sup(k+'x')+' + C','e'+sup(k+'x')+'/'+(k+1)+' + C'],'Reverse the chain rule: divide by k.'],
   ()=>['∫ cos('+k+'x) dx','sin('+k+'x)/'+k+' + C',['−sin('+k+'x)/'+k+' + C',k+'sin('+k+'x) + C','sin('+k+'x) + C'],'The integral of cos(kx) is sin(kx)/k.'],
   ()=>['∫ sin('+k+'x) dx','−cos('+k+'x)/'+k+' + C',['cos('+k+'x)/'+k+' + C','−'+k+'cos('+k+'x) + C','−cos('+k+'x) + C'],'The integral of sin(kx) is −cos(kx)/k.'],
   ()=>['∫ 1/x dx','ln|x| + C',['−1/x² + C','x ln x + C','1/x² + C'],'The one power the power rule cannot handle: the answer is ln|x|.'],
   ()=>['∫ x eˣ dx','(x − 1)eˣ + C',['(x + 1)eˣ + C','x eˣ + C','x²eˣ/2 + C'],'By parts: x eˣ − ∫eˣ dx.'],
   ()=>['∫₀<sup>π</sup> sin x dx','2',['0','1','π'],'[−cos x] from 0 to π = 1 − (−1) = 2.'],
   ()=>{const [a,m,r]=pick(defs);const wr=[String(a**(m+1)),String(a**m),(a**(m+1))+'/'+m].filter(x=>x!==r);
     return ['∫₀<sup>'+a+'</sup> x'+(m>1?sup(m):'')+' dx',r,wr.concat(['1','3/2','16/3']),'['+'x'+sup(m+1)+'/'+(m+1)+'] from 0 to '+a+' = '+r+'.'];},
   ()=>['∫ 2x e'+sup('x²')+' dx','e'+sup('x²')+' + C',['x²e'+sup('x²')+' + C','2e'+sup('x²')+' + C','e'+sup('2x')+' + C'],'Substitute u = x²: du = 2x dx.']
  ];
  const [f,r,w,ex]=pick(T)();
  return q(4,'Evaluate: <span class="mathx">'+f+'</span>',r,uniqOpts(r,w),ex);
}

/* ---- 5. units / dimensions [kg, m, s, A] ---- */
const UNITQ={
 Energy:[1,2,-2,0],Power:[1,2,-3,0],Force:[1,1,-2,0],Pressure:[1,-1,-2,0],Momentum:[1,1,-1,0],Velocity:[0,1,-1,0],Acceleration:[0,1,-2,0],Charge:[0,0,1,1],Frequency:[0,0,-1,0]
};
const UEXPR=[
 ['½mv²',[1,2,-2,0]],['mgh',[1,2,-2,0]],['pV',[1,2,-2,0]],['qV',[1,2,-2,0]],['Fd',[1,2,-2,0]],
 ['Fv',[1,2,-3,0]],['I²R',[1,2,-3,0]],['V²/R',[1,2,-3,0]],['mgh/t',[1,2,-3,0]],
 ['ma',[1,1,-2,0]],['pA',[1,1,-2,0]],['mv²/r',[1,1,-2,0]],['qvB',[1,1,-2,0]],
 ['F/A',[1,-1,-2,0]],['ρgh',[1,-1,-2,0]],['E/V (energy per volume)',[1,-1,-2,0]],
 ['mv',[1,1,-1,0]],['Ft',[1,1,-1,0]],
 ['√(gh)',[0,1,-1,0]],['fλ',[0,1,-1,0]],['√(F/μ) (μ = mass per length)',[0,1,-1,0]],
 ['v²/r',[0,1,-2,0]],['F/m',[0,1,-2,0]],['ω²r',[0,1,-2,0]],
 ['It',[0,0,1,1]],['CV',[0,0,1,1]],
 ['v/λ',[0,0,-1,0]],['√(k/m)',[0,0,-1,0]],['√(g/L)',[0,0,-1,0]],
 ['mv²',[1,2,-2,0]],['m/v',[1,-1,1,0]],['gh',[0,2,-2,0]],['ρv',[1,-2,-1,0]],['Fv²',[1,3,-4,0]],['mg/t',[1,1,-3,0]],['v/t²',[0,1,-3,0]]
];
const unitStr=d=>{const n=['kg','m','s','A'],p=[];d.forEach((e,i)=>{if(e)p.push(n[i]+(e===1?'':sup(e)));});return p.join(' ')||'dimensionless';};
const same=(a,b)=>a.every((v,i)=>v===b[i]);
function dUnits(){
  const name=pick(Object.keys(UNITQ)),dim=UNITQ[name];
  const right=pick(UEXPR.filter(e=>same(e[1],dim)));
  const wrong=shuffle(UEXPR.filter(e=>!same(e[1],dim))).filter((e,i,a)=>a.findIndex(x=>same(x[1],e[1]))===i).slice(0,3);
  return q(5,'Which expression has the units of <b>'+name.toLowerCase()+'</b>?',right[0],wrong.map(e=>e[0]),
    right[0]+' has units '+unitStr(right[1])+'. The others: '+wrong.map(e=>e[0]+' → '+unitStr(e[1])).join('; ')+'.');
}

/* ---- 6. graph recognition ---- */
const GF=[
 ['y = x²',x=>x*x],['y = x³',x=>x*x*x],['y = 1/x',x=>1/x],['y = eˣ',x=>Math.exp(x)],['y = e⁻ˣ',x=>Math.exp(-x)],
 ['y = ln x',x=>x>0?Math.log(x):NaN],['y = sin x',Math.sin],['y = cos x',Math.cos],['y = x sin x',x=>x*Math.sin(x)],
 ['y = (sin x)/x',x=>x===0?1:Math.sin(x)/x],['y = e^(−x²)',x=>Math.exp(-x*x)],['y = x e⁻ˣ',x=>x*Math.exp(-x)],
 ['y = |x|',Math.abs],['y = 1/(1 + x²)',x=>1/(1+x*x)],['y = √x',x=>x>=0?Math.sqrt(x):NaN],['y = tan x',Math.tan],
 ['y = −x²',x=>-x*x],['y = sin 2x',x=>Math.sin(2*x)],['y = x² − 2',x=>x*x-2],['y = 1/x²',x=>1/(x*x)]
];
function plotSvg(fn){
  const X0=-5,X1=5,Y0=-3.5,Y1=3.5,W=240,H=170,sx=x=>(x-X0)/(X1-X0)*W,sy=y=>H-(y-Y0)/(Y1-Y0)*H;
  let d='',pen=false,prev=null;
  for(let i=0;i<=600;i++){
    const x=X0+(X1-X0)*i/600,y=fn(x);
    if(!isFinite(y)||y>Y1+3||y<Y0-3||(prev!=null&&Math.abs(y-prev)>3)){pen=false;prev=isFinite(y)?y:null;continue;}
    d+=(pen?'L':'M')+sx(x).toFixed(1)+' '+sy(clamp(y,Y0-1,Y1+1)).toFixed(1);pen=true;prev=y;
  }
  let ticks='';for(let t=-4;t<=4;t++)if(t)ticks+='<line x1="'+sx(t)+'" x2="'+sx(t)+'" y1="'+(sy(0)-3)+'" y2="'+(sy(0)+3)+'" class="ax"/>';
  for(let t=-3;t<=3;t++)if(t)ticks+='<line y1="'+sy(t)+'" y2="'+sy(t)+'" x1="'+(sx(0)-3)+'" x2="'+(sx(0)+3)+'" class="ax"/>';
  return '<svg class="plot" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Graph of a function"><defs><clipPath id="pc"><rect width="'+W+'" height="'+H+'"/></clipPath></defs>'+
    '<line x1="0" x2="'+W+'" y1="'+sy(0)+'" y2="'+sy(0)+'" class="ax"/><line y1="0" y2="'+H+'" x1="'+sx(0)+'" x2="'+sx(0)+'" class="ax"/>'+ticks+
    '<text x="'+(sx(1)-3)+'" y="'+(sy(0)+14)+'">1</text><text x="'+(sx(0)+6)+'" y="'+(sy(1)+4)+'">1</text>'+
    '<path d="'+d+'" class="cv" clip-path="url(#pc)"/></svg>';
}
function dGraph(){
  const [name,fn]=pick(GF);
  const wrong=shuffle(GF.filter(g=>g[0]!==name)).slice(0,3).map(g=>g[0]);
  return q(6,'Which function is plotted?',name,wrong,'The plot shows '+name+'. Check where it crosses the axes, its symmetry, and what happens for large |x|.',{stem:plotSvg(fn)});
}

const DGEN=[dArith,dStd,dOom,dDiff,dInt,dUnits,dGraph];
/* regenerate until there are exactly four distinct options */
function drillGen(t){
  for(let i=0;i<100;i++){const it=DGEN[t]();if(it.wrong&&it.wrong.length===3&&new Set([it.right].concat(it.wrong)).size===4)return it;}
  return DGEN[0]();
}
function drillSet(){
  /* two of each of three rotating "focus" types plus one of each of the others, ten in total */
  const order=shuffle([0,1,2,3,4,5,6]),items=[];
  order.forEach((t,i)=>{items.push(drillGen(t));if(i<3)items.push(drillGen(t));});
  return shuffle(items).map(it=>{
    const opts=shuffle([{h:it.right,ok:true}].concat(it.wrong.map(w=>({h:w,ok:false}))));
    return Object.assign(it,{opts});
  });
}

/* ---- streak bookkeeping ---- */
const dayKey=(t=Date.now())=>{const d=new Date(t);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');};
function drillState(){return loadJSON('drill',{days:{},streak:0,last:null,best:0,types:{}});}
function drillStreak(st){
  if(!st.last)return 0;
  const y=dayKey(Date.now()-864e5);
  return st.last===dayKey()||st.last===y?st.streak:0;
}

let D=null;
function drillHome(){
  leave();
  const st=drillState(),streak=drillStreak(st),done=!!st.days[dayKey()];
  const days=[...Array(14)].map((_,i)=>dayKey(Date.now()-(13-i)*864e5));
  app.innerHTML=
  '<div class="stack">'+
  '<div class="stack" style="gap:8px"><p class="eyebrow">Daily training</p><h1>Daily drill</h1>'+
  '<p class="muted">Ten quick questions, about five minutes. Short daily practice builds the speed and fluency interviews reward.</p></div>'+
  '<div class="facts"><div class="fact"><b>'+streak+'</b><span>day streak</span></div><div class="fact"><b>'+(st.best||0)+'</b><span>best streak</span></div><div class="fact"><b>'+Object.keys(st.days).length+'</b><span>days done</span></div></div>'+
  '<div class="card"><p class="eyebrow" style="margin-bottom:8px">Last 14 days</p><div class="days">'+days.map(d=>'<i class="'+(st.days[d]?'on':'')+(d===dayKey()?' today':'')+'" title="'+d+'"></i>').join('')+'</div></div>'+
  '<button class="btn" id="dgo">'+(done?'Do another drill':'Start today\'s drill')+'</button>'+
  '<div class="card stack"><h2>Accuracy by type</h2><div class="cats">'+DRILL_TYPES.map((n,i)=>{const s=st.types[i]||{ok:0,n:0};
    return '<div class="cr"><span class="n">'+n+'</span><span class="v">'+(s.n?Math.round(100*s.ok/s.n)+'%':'–')+'</span><div class="t"><i style="width:'+(s.n?100*s.ok/s.n:0)+'%"></i></div></div>';}).join('')+'</div></div>'+
  '<button class="btn ghost" id="dback">Home</button>'+
  '</div>';
  document.getElementById('dgo').onclick=drillStart;
  document.getElementById('dback').onclick=home;
}
function drillStart(){D={items:drillSet(),i:0,ok:0,t0:Date.now(),res:[]};drillRender();}
function drillRender(){
  const it=D.items[D.i];
  app.innerHTML=
  '<div class="stack">'+
  '<div class="top"><span class="count">'+(D.i+1)+' / '+D.items.length+'</span><span class="eyebrow">'+DRILL_TYPES[it.type]+'</span></div>'+
  '<div class="bar"><i style="width:'+(D.i/D.items.length*100)+'%"></i></div>'+
  '<div class="card"><p class="prompt">'+it.prompt+'</p>'+(it.stem||'')+
   '<div class="opts">'+it.opts.map((o,k)=>'<button class="opt" data-k="'+k+'"><span class="k">'+LETTERS[k]+'</span><span>'+o.h+'</span></button>').join('')+'</div>'+
   '<div id="dfb"></div></div>'+
  '</div>';
  const btns=[...app.querySelectorAll('.opt')];
  btns.forEach(b=>b.onclick=()=>{
    const k=+b.dataset.k,ok=it.opts[k].ok;
    btns.forEach((x,j)=>{x.disabled=true;if(it.opts[j].ok)x.classList.add('right');});
    if(!ok)b.classList.add('wrong');
    if(ok)D.ok++;D.res.push({type:it.type,ok});
    document.getElementById('dfb').innerHTML='<div class="fb"><b class="'+(ok?'ok':'no')+'">'+(ok?'Correct.':'Not quite.')+'</b><p class="note">'+it.explain+'</p><button class="btn" id="dnx">'+(D.i+1<D.items.length?'Next':'Finish')+'</button></div>';
    document.getElementById('dnx').onclick=()=>{D.i++;if(D.i<D.items.length)drillRender();else drillFinish();};
  });
  window.scrollTo(0,0);
}
function drillFinish(){
  const st=drillState(),today=dayKey(),secs=(Date.now()-D.t0)/1000;
  if(!st.days[today]){
    st.streak=drillStreak(st)+1;st.last=today;st.best=Math.max(st.best||0,st.streak);
  }
  st.days[today]=(st.days[today]||0)+1;
  D.res.forEach(r=>{const s=st.types[r.type]||{ok:0,n:0};s.n++;if(r.ok)s.ok++;st.types[r.type]=s;});
  saveJSON('drill',st);
  app.innerHTML=
  '<div class="stack"><p class="eyebrow">Drill complete</p><h1>'+D.ok+' / '+D.items.length+'</h1>'+
  '<div class="facts"><div class="fact"><b>'+fmt(secs)+'</b><span>time</span></div><div class="fact"><b>'+st.streak+'</b><span>day streak</span></div><div class="fact"><b>'+Math.round(100*D.ok/D.items.length)+'%</b><span>accuracy</span></div></div>'+
  '<p class="note">Come back tomorrow to keep the streak going.</p>'+
  '<button class="btn" id="dagain">Another drill</button><button class="btn ghost" id="dhome">Back</button></div>';
  document.getElementById('dagain').onclick=drillStart;
  document.getElementById('dhome').onclick=drillHome;
}
