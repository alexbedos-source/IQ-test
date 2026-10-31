/* =====================  Study timer, progress dashboard, processing speed  ===================== */

/* ---------- study timer ----------
   The running timer is stored as an end time, so it stays correct if the app is closed and reopened. */
const SUBJECTS=['Physics','Maths','Further Maths','Interview prep','Other'];
const FOCUS=[[25,5],[50,10],[15,3]];
let stTick=null;
function studyLog(){return loadJSON('study-log',[]);}
function studyRun(){return loadJSON('study-run',null);}
function studyHome(){
  leave();cleanups.push(()=>clearInterval(stTick));
  const run=studyRun(),log=studyLog();
  const today=dayKey(),weekAgo=Date.now()-7*864e5;
  const mins=(f)=>log.filter(f).reduce((a,x)=>a+x.min,0);
  const bySub=SUBJECTS.map(s=>[s,mins(x=>x.t>weekAgo&&x.sub===s)]);
  const maxSub=Math.max(1,...bySub.map(x=>x[1]));
  let sel=loadJSON('study-pref',{sub:0,f:0});
  app.innerHTML=
  '<div class="stack"><div class="stack" style="gap:8px"><p class="eyebrow">Study tools</p><h1>Study timer</h1>'+
  '<p class="muted">Focused blocks with short breaks. Time is logged by subject so you can see where your week went.</p></div>'+
  '<div class="card stack" id="strun"></div>'+
  '<div class="facts"><div class="fact"><b>'+mins(x=>dayKey(x.t)===today)+'</b><span>min today</span></div><div class="fact"><b>'+mins(x=>x.t>weekAgo)+'</b><span>min this week</span></div><div class="fact"><b>'+log.length+'</b><span>sessions</span></div></div>'+
  '<div class="card stack"><h2>This week by subject</h2><div class="cats">'+bySub.map(([s,m])=>'<div class="cr"><span class="n">'+s+'</span><span class="v">'+m+' min</span><div class="t"><i style="width:'+(100*m/maxSub)+'%"></i></div></div>').join('')+'</div></div>'+
  '<button class="btn ghost" id="sback">Home</button></div>';
  const box=document.getElementById('strun');
  const draw=()=>{
    const r=studyRun();
    if(!r){
      box.innerHTML='<h2>Start a session</h2>'+
       '<div class="chips" id="ssub">'+SUBJECTS.map((s,i)=>'<button class="chip'+(sel.sub===i?' on':'')+'" data-i="'+i+'">'+s+'</button>').join('')+'</div>'+
       '<div class="chips" id="sf">'+FOCUS.map((f,i)=>'<button class="chip'+(sel.f===i?' on':'')+'" data-i="'+i+'">'+f[0]+' / '+f[1]+' min</button>').join('')+'</div>'+
       '<button class="btn" id="sgo">Start focus</button>';
      box.querySelectorAll('#ssub .chip').forEach(b=>b.onclick=()=>{sel.sub=+b.dataset.i;saveJSON('study-pref',sel);draw();});
      box.querySelectorAll('#sf .chip').forEach(b=>b.onclick=()=>{sel.f=+b.dataset.i;saveJSON('study-pref',sel);draw();});
      document.getElementById('sgo').onclick=()=>{const [f,b]=FOCUS[sel.f];saveJSON('study-run',{phase:'focus',sub:SUBJECTS[sel.sub],focus:f,brk:b,start:Date.now(),end:Date.now()+f*6e4});draw();};
      return;
    }
    const left=(r.end-Date.now())/1000;
    if(left<=0){
      if(r.phase==='focus'){
        const l=studyLog();l.push({t:Date.now(),sub:r.sub,min:r.focus});saveJSON('study-log',l.slice(-1000));
        saveJSON('study-run',Object.assign(r,{phase:'break',start:Date.now(),end:Date.now()+r.brk*6e4}));
        if(navigator.vibrate)navigator.vibrate(300);
        studyHome();return;
      }
      saveJSON('study-run',null);studyHome();return;
    }
    box.innerHTML='<p class="eyebrow">'+(r.phase==='focus'?'Focus · '+r.sub:'Break')+'</p><div class="big center">'+fmt(left)+'</div>'+
      (r.phase==='focus'?'<p class="note center">Phone face down. One task only.</p>':'<p class="note center">Stand up, stretch, get some water.</p>')+
      '<button class="btn ghost" id="sstop">'+(r.phase==='focus'?'Stop (time so far is logged)':'Skip break')+'</button>';
    document.getElementById('sstop').onclick=()=>{
      if(r.phase==='focus'){const m=Math.floor((Date.now()-r.start)/6e4);if(m>0){const l=studyLog();l.push({t:Date.now(),sub:r.sub,min:m});saveJSON('study-log',l);}}
      saveJSON('study-run',null);studyHome();
    };
  };
  draw();
  clearInterval(stTick);stTick=setInterval(()=>{if(studyRun()){const el=box.querySelector('.big');const r=studyRun();if(el&&(r.end-Date.now())>0)el.textContent=fmt((r.end-Date.now())/1000);else draw();}},500);
  document.getElementById('sback').onclick=home;
}

/* ---------- processing speed ----------
   Symbol search: is either target symbol in the row? Scored as correct minus wrong in 60 s.
   Reported against your own history only: it is not folded into the IQ estimate, because
   there are no norms to convert it to an IQ-scale score honestly. */
const SYMS=['◆','◇','●','○','■','□','▲','△','▼','▽','★','☆','✚','✖','◐','◑','⬟','⬠'];
let SP=null;
function speedItem(){
  const t=shuffle(SYMS.slice()).slice(0,2);
  const yes=Math.random()<.5;
  const pool=SYMS.filter(s=>!t.includes(s));
  const row=shuffle(pool.slice()).slice(0,5);
  if(yes)row[rnd(5)]=pick(t);
  return {t,row,yes};
}
function speedHome(){
  leave();setBack(iqHome);
  const h=loadJSON('speed-history',[]),best=h.reduce((m,x)=>Math.max(m,x.score),0);
  app.innerHTML=
  '<div class="stack"><div class="stack" style="gap:8px"><p class="eyebrow">Intelligence</p><h1>Processing speed</h1>'+
  '<p class="muted">60 seconds. Is either of the two target symbols in the row? Answer as fast as you can while staying accurate. Wrong answers count against you.</p></div>'+
  '<div class="facts"><div class="fact"><b>'+best+'</b><span>best score</span></div><div class="fact"><b>'+h.length+'</b><span>attempts</span></div><div class="fact"><b>'+(h.length?h[h.length-1].score:'–')+'</b><span>last</span></div></div>'+
  '<button class="btn" id="spgo">Start</button>'+
  '<div class="card stack"><h2>About this task</h2><p class="note">Processing speed is one of the broad abilities in the CHC model. This task is modelled on the "symbol search" style used in standard tests. Your score is compared with your own past attempts, not converted to IQ points, because it has not been normed. Scores usually rise with practice at first, then level off.</p></div>'+
  (h.length>1?'<div class="card"><h2 style="margin-bottom:8px">History</h2>'+sparkSvg(h.slice(-20).map(x=>x.score))+'</div>':'')+
  '<button class="btn ghost" id="spback">Back to IQ test</button></div>';
  document.getElementById('spgo').onclick=speedStart;
  document.getElementById('spback').onclick=iqHome;
}
function speedStart(){
  SP={end:Date.now()+60000,ok:0,bad:0,it:speedItem()};
  setBack(speedHome);
  cleanups.push(()=>clearInterval(SP&&SP.tick));
  app.innerHTML=
  '<div class="stack"><div class="top"><span class="count" id="spc">0</span><span class="timer" id="spt">1:00</span></div>'+
  '<div class="card stack"><p class="eyebrow">Targets</p><div class="sym tgt" id="sptg"></div><p class="eyebrow">Row</p><div class="sym" id="sprow"></div></div>'+
  '<div class="row2"><button class="btn ghost big2" id="spno">No</button><button class="btn big2" id="spyes">Yes</button></div></div>';
  const show=()=>{document.getElementById('sptg').textContent=SP.it.t.join('  ');document.getElementById('sprow').textContent=SP.it.row.join(' ');document.getElementById('spc').textContent=(SP.ok-SP.bad)+' points';};
  const ans=y=>{if(Date.now()>SP.end)return;if(y===SP.it.yes)SP.ok++;else SP.bad++;SP.it=speedItem();show();};
  document.getElementById('spyes').onclick=()=>ans(true);
  document.getElementById('spno').onclick=()=>ans(false);
  show();
  SP.tick=setInterval(()=>{const left=(SP.end-Date.now())/1000;const el=document.getElementById('spt');if(el)el.textContent=fmt(left);if(left<=0){clearInterval(SP.tick);speedDone();}},200);
}
function speedDone(){
  setBack(speedHome);
  const score=Math.max(0,SP.ok-SP.bad),h=loadJSON('speed-history',[]);
  const prevBest=h.reduce((m,x)=>Math.max(m,x.score),0);
  h.push({t:Date.now(),score,ok:SP.ok,bad:SP.bad});saveJSON('speed-history',h.slice(-100));
  app.innerHTML='<div class="stack"><p class="eyebrow">Time</p><h1>'+score+' points</h1>'+
   '<div class="facts"><div class="fact"><b class="ok">'+SP.ok+'</b><span>correct</span></div><div class="fact"><b class="no">'+SP.bad+'</b><span>wrong</span></div><div class="fact"><b>'+(score>prevBest&&h.length>1?'New!':prevBest)+'</b><span>best</span></div></div>'+
   '<button class="btn" id="spagain">Try again</button><button class="btn ghost" id="spb">Back</button></div>';
  document.getElementById('spagain').onclick=speedStart;
  document.getElementById('spb').onclick=speedHome;
}

/* ---------- progress dashboard ---------- */
function sparkSvg(vals,lo,hi){
  const W=300,H=90,p=8;lo=lo==null?Math.min(...vals):lo;hi=hi==null?Math.max(...vals):hi;if(hi===lo){hi=lo+1;}
  const X=i=>p+(vals.length===1?0:(W-2*p)*i/(vals.length-1)),Y=v=>H-p-(H-2*p)*(v-lo)/(hi-lo);
  return '<svg class="spark" viewBox="0 0 '+W+' '+H+'"><polyline points="'+vals.map((v,i)=>X(i).toFixed(1)+','+Y(v).toFixed(1)).join(' ')+'"/>'+
    vals.map((v,i)=>'<circle cx="'+X(i).toFixed(1)+'" cy="'+Y(v).toFixed(1)+'" r="3"/>').join('')+
    '<text x="'+p+'" y="12">'+Math.round(hi)+'</text><text x="'+p+'" y="'+(H-2)+'">'+Math.round(lo)+'</text></svg>';
}
function progressHome(){
  leave();
  const iq=loadJSON('iq10-history',[]),R=loadJSON('phy-ratings',{}),dr=drillState(),cs=cardState(),iv=loadJSON('iv-history',[]),sl=studyLog(),sp=loadJSON('speed-history',[]);
  const topicRows=PHY_TOPICS.map((n,i)=>{const qs=PHY.filter(q=>q.t===i),got=qs.filter(q=>R[q.id]&&R[q.id].r==='got').length;return [n,got,qs.length];});
  const known=CARDS.filter(c=>cs.s[c.id]&&cs.s[c.id].box>=4).length,seen=CARDS.filter(c=>cs.s[c.id]).length;
  const week=sl.filter(x=>x.t>Date.now()-7*864e5).reduce((a,x)=>a+x.min,0);
  const ivAvg=iv.length?(iv.slice(-5).reduce((a,x)=>a+x.score,0)/Math.min(5,iv.length)).toFixed(1):'–';
  app.innerHTML=
  '<div class="stack"><div class="stack" style="gap:8px"><p class="eyebrow">Study tools</p><h1>Progress</h1></div>'+
  '<div class="facts four"><div class="fact"><b>'+drillStreak(dr)+'</b><span>drill streak</span></div><div class="fact"><b>'+week+'</b><span>study min/wk</span></div><div class="fact"><b>'+iv.length+'</b><span>mock interviews</span></div><div class="fact"><b>'+ivAvg+'</b><span>interview self-score</span></div></div>'+
  '<div class="card stack"><h2>Physics questions mastered</h2><div class="cats">'+topicRows.map(([n,g,t])=>'<div class="cr"><span class="n">'+n+'</span><span class="v">'+g+' / '+t+'</span><div class="t"><i style="width:'+(100*g/t)+'%"></i></div></div>').join('')+'</div><p class="note">"Mastered" means you last rated it "Got it".</p></div>'+
  '<div class="card stack"><h2>Flashcards</h2><p>'+known+' of '+CARDS.length+' well known · '+seen+' started</p><div class="t1"><i style="width:'+(100*known/CARDS.length)+'%"></i></div></div>'+
  '<div class="card stack"><h2>Drill accuracy</h2><div class="cats">'+DRILL_TYPES.map((n,i)=>{const s=dr.types[i]||{ok:0,n:0};return '<div class="cr"><span class="n">'+n+'</span><span class="v">'+(s.n?Math.round(100*s.ok/s.n)+'%':'–')+'</span><div class="t"><i style="width:'+(s.n?100*s.ok/s.n:0)+'%"></i></div></div>';}).join('')+'</div></div>'+
  '<div class="card stack"><h2>IQ estimates</h2>'+(iq.length>1?sparkSvg(iq.slice(-20).map(x=>x.iq)):'<p class="note">'+(iq.length?'Take another test to see a trend.':'No tests yet.')+'</p>')+'</div>'+
  '<div class="card stack"><h2>Processing speed</h2>'+(sp.length>1?sparkSvg(sp.slice(-20).map(x=>x.score)):'<p class="note">'+(sp.length?'Best so far: '+sp[0].score:'No attempts yet.')+'</p>')+'</div>'+
  '<button class="btn ghost" id="prback">Home</button></div>';
  document.getElementById('prback').onclick=home;
}
