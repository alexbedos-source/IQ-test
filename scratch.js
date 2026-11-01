/* =====================  Scratchpad  =====================
   A pen button on question screens opens a full-screen drawing pad for working with your finger.
   "Over page" makes the pad see-through so you can annotate the question itself.
   Screens opt in with setScratch(true); leaving a screen (or a new question) clears it. */

(function(){
  const btn=document.createElement('button');
  btn.id='scratchbtn';btn.setAttribute('aria-label','Open scratchpad');
  btn.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l4-1 11-11-3-3L5 16l-1 4z"/><path d="M14 6l3 3"/></svg>';
  const pad=document.createElement('div');
  pad.id='scratch';
  pad.innerHTML=
   '<div class="sp-bar">'+
    '<button data-t="pen" class="on" aria-label="Pen">✎</button>'+
    '<button data-t="eraser" aria-label="Eraser">⌫</button>'+
    '<span class="sp-cols"><button data-c="ink" class="on" aria-label="Black ink"><i></i></button><button data-c="accent" aria-label="Purple ink"><i></i></button><button data-c="bad" aria-label="Red ink"><i></i></button></span>'+
    '<button data-a="undo" aria-label="Undo">↶</button>'+
    '<button data-a="clear" aria-label="Clear">Clear</button>'+
    '<button data-a="over" aria-label="Draw over the page">Over page</button>'+
    '<button data-a="close" class="sp-close" aria-label="Close scratchpad">Done</button>'+
   '</div><canvas></canvas>';
  document.body.appendChild(btn);document.body.appendChild(pad);
  const cv=pad.querySelector('canvas'),ctx=cv.getContext('2d');
  let strokes=[],cur=null,tool='pen',col='ink',over=false;
  const css=v=>getComputedStyle(document.documentElement).getPropertyValue('--'+v).trim()||'#000';
  function size(){
    const r=cv.getBoundingClientRect(),d=window.devicePixelRatio||1;
    cv.width=Math.round(r.width*d);cv.height=Math.round(r.height*d);redraw();
  }
  function line(s){
    if(s.pts.length<1)return;
    const d=window.devicePixelRatio||1;
    ctx.globalCompositeOperation=s.tool==='eraser'?'destination-out':'source-over';
    ctx.strokeStyle=css(s.col);ctx.fillStyle=css(s.col);
    ctx.lineWidth=(s.tool==='eraser'?22:2.6)*d;ctx.lineCap='round';ctx.lineJoin='round';
    ctx.beginPath();ctx.moveTo(s.pts[0][0]*d,s.pts[0][1]*d);
    if(s.pts.length===1){ctx.arc(s.pts[0][0]*d,s.pts[0][1]*d,ctx.lineWidth/2,0,7);ctx.fill();return;}
    for(let i=1;i<s.pts.length;i++)ctx.lineTo(s.pts[i][0]*d,s.pts[i][1]*d);
    ctx.stroke();
  }
  function redraw(){ctx.clearRect(0,0,cv.width,cv.height);strokes.forEach(line);ctx.globalCompositeOperation='source-over';}
  const pos=e=>{const r=cv.getBoundingClientRect();return [e.clientX-r.left,e.clientY-r.top];};
  cv.addEventListener('pointerdown',e=>{e.preventDefault();cv.setPointerCapture(e.pointerId);cur={tool,col,pts:[pos(e)]};strokes.push(cur);redraw();});
  cv.addEventListener('pointermove',e=>{if(!cur)return;e.preventDefault();cur.pts.push(pos(e));redraw();});
  const end=()=>{cur=null;};
  cv.addEventListener('pointerup',end);cv.addEventListener('pointercancel',end);
  pad.querySelector('.sp-bar').addEventListener('click',e=>{
    const b=e.target.closest('button');if(!b)return;
    if(b.dataset.t){tool=b.dataset.t;pad.querySelectorAll('[data-t]').forEach(x=>x.classList.toggle('on',x===b));}
    if(b.dataset.c){col=b.dataset.c;tool='pen';pad.querySelectorAll('[data-c]').forEach(x=>x.classList.toggle('on',x===b));pad.querySelectorAll('[data-t]').forEach(x=>x.classList.toggle('on',x.dataset.t==='pen'));}
    if(b.dataset.a==='undo'){strokes.pop();redraw();}
    if(b.dataset.a==='clear'){strokes=[];redraw();}
    if(b.dataset.a==='over'){over=!over;pad.classList.toggle('over',over);b.classList.toggle('on',over);}
    if(b.dataset.a==='close')close();
  });
  function open(){pad.classList.add('open');document.body.classList.add('sp-open');size();}
  function close(){pad.classList.remove('open');document.body.classList.remove('sp-open');}
  btn.onclick=()=>open();
  /* open the pad straight away, optionally with x and y axes drawn faintly (for graph sketching) */
  window.scratchOpen=axes=>{pad.classList.toggle('axes',!!axes);btn.classList.add('show');open();};
  window.addEventListener('resize',()=>{if(pad.classList.contains('open'))size();});
  /* on: show the pen button. A new screen or question always starts with a clean pad. */
  window.setScratch=on=>{strokes=[];redraw();close();pad.classList.remove('axes');btn.classList.toggle('show',!!on);};
  window.scratchReset=()=>setScratch(false);
  window.scratchStrokes=()=>strokes.length;
})();
