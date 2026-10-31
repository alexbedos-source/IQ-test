/* =====================  Flashcards, bridging topics, problem of the week, resources  ===================== */

/* ---------- flashcards (Leitner spaced repetition) ---------- */
const CARD_CATS=['Constants','Formulas','Magnitudes','Maths','Economics'];
const CARDS=[
 [0,'Speed of light, c','3.00 × 10⁸ m/s'],[0,'Gravitational constant, G','6.67 × 10⁻¹¹ N m² kg⁻²'],[0,'Planck constant, h','6.63 × 10⁻³⁴ J s'],
 [0,'Elementary charge, e','1.60 × 10⁻¹⁹ C'],[0,'Electron mass, mₑ','9.11 × 10⁻³¹ kg'],[0,'Proton mass, mₚ','1.67 × 10⁻²⁷ kg (≈ 1836 mₑ)'],
 [0,'Avogadro constant, N_A','6.02 × 10²³ mol⁻¹'],[0,'Boltzmann constant, k_B','1.38 × 10⁻²³ J/K'],[0,'Molar gas constant, R','8.31 J mol⁻¹ K⁻¹ (= N_A k_B)'],
 [0,'Permittivity of free space, ε₀','8.85 × 10⁻¹² F/m'],[0,'Permeability of free space, μ₀','4π × 10⁻⁷ H/m ≈ 1.26 × 10⁻⁶ H/m'],[0,'Stefan–Boltzmann constant, σ','5.67 × 10⁻⁸ W m⁻² K⁻⁴'],
 [0,'1 electronvolt in joules','1.60 × 10⁻¹⁹ J'],[0,'hc in eV nm (handy for photons)','≈ 1240 eV nm'],[0,'Coulomb constant, 1/(4πε₀)','8.99 × 10⁹ N m² C⁻²'],
 [1,'SUVAT without time','v² = u² + 2as'],[1,'SUVAT without final velocity','s = ut + ½at²'],[1,'Centripetal acceleration','a = v²/r = ω²r'],
 [1,'Newton\'s law of gravitation','F = GMm/r²'],[1,'Gravitational potential energy (far from Earth)','U = −GMm/r'],[1,'Escape velocity','v = √(2GM/R)'],
 [1,'Kepler\'s third law','T² = 4π²r³/(GM)'],[1,'Period of a simple pendulum','T = 2π√(L/g)'],[1,'Period of a mass on a spring','T = 2π√(m/k)'],
 [1,'Coulomb\'s law','F = q₁q₂/(4πε₀r²)'],[1,'Energy stored in a capacitor','E = ½CV² = Q²/(2C)'],[1,'Force on a moving charge in a magnetic field','F = qvB sinθ'],
 [1,'Photon energy','E = hf = hc/λ'],[1,'de Broglie wavelength','λ = h/p'],[1,'Mass–energy equivalence','E = mc² (rest energy)'],
 [1,'Ideal gas law','pV = nRT = Nk_BT'],[1,'Mean kinetic energy of a gas molecule','½m⟨v²⟩ = (3/2)k_BT'],[1,'Stefan–Boltzmann law','P = σAT⁴'],
 [1,'Wien\'s displacement law','λ_max T ≈ 2.9 × 10⁻³ m K'],[1,'Lorentz factor','γ = 1/√(1 − v²/c²)'],[1,'Snell\'s law','n₁ sinθ₁ = n₂ sinθ₂'],
 [1,'Wave speed on a string','v = √(T/μ)'],[1,'Hydrogen energy levels','Eₙ = −13.6 eV / n²'],[1,'Radioactive decay and half-life','N = N₀e^(−λt), t½ = ln2/λ'],
 [1,'Moment of inertia of a solid sphere','I = (2/5)mr²'],[1,'Rotational kinetic energy','E = ½Iω²'],[1,'Angular momentum','L = Iω = mvr (point mass)'],
 [2,'Radius of the Earth','6400 km'],[2,'Earth–Moon distance','3.8 × 10⁵ km (≈ 60 Earth radii)'],[2,'Earth–Sun distance (1 AU)','1.5 × 10¹¹ m'],
 [2,'Mass of the Earth','6.0 × 10²⁴ kg'],[2,'Mass of the Sun','2.0 × 10³⁰ kg'],[2,'Solar constant at Earth','≈ 1.4 kW/m²'],
 [2,'Size of an atom','≈ 10⁻¹⁰ m'],[2,'Size of a nucleus','≈ 10⁻¹⁵ m'],[2,'Seconds in a year','≈ 3.15 × 10⁷ s (≈ π × 10⁷)'],
 [2,'Human resting power output','≈ 100 W'],[2,'Density of air at sea level','≈ 1.2 kg/m³'],[2,'Atmospheric pressure','≈ 1.0 × 10⁵ Pa'],
 [2,'Speed of sound in air','≈ 340 m/s'],[2,'Specific heat capacity of water','4200 J kg⁻¹ K⁻¹'],[2,'Latent heat of vaporisation of water','2.26 MJ/kg'],
 [3,'Taylor series of eˣ','1 + x + x²/2! + x³/3! + …'],[3,'Taylor series of sin x','x − x³/3! + x⁵/5! − …'],[3,'Taylor series of cos x','1 − x²/2! + x⁴/4! − …'],
 [3,'ln(1 + x) for small x','x − x²/2 + x³/3 − …'],[3,'Binomial approximation','(1 + x)ⁿ ≈ 1 + nx for |x| ≪ 1'],[3,'Euler\'s formula','e^(iθ) = cosθ + i sinθ'],
 [3,'Sum of a geometric series','a/(1 − r) for |r| &lt; 1'],[3,'Integration by parts','∫u dv = uv − ∫v du'],[3,'d/dx of tan x','sec² x'],
 [3,'∫ ln x dx','x ln x − x + C'],[3,'Gaussian integral ∫e^(−x²) dx over all x','√π'],[3,'sin 2θ and cos 2θ','2 sinθ cosθ; cos²θ − sin²θ = 1 − 2sin²θ'],
 [3,'Small-angle approximations','sinθ ≈ θ, tanθ ≈ θ, cosθ ≈ 1 − θ²/2'],[3,'Volume and surface area of a sphere','(4/3)πr³ and 4πr²'],[3,'Solution of dy/dx = ky','y = Ae^(kx)']
,
 [3,'Quadratic formula','x = (−b ± √(b² − 4ac)) / 2a'],[3,'Discriminant conditions','b² − 4ac > 0: two roots; = 0: one repeated; < 0: none real'],
 [3,'cos 2θ (three forms)','cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ'],[3,'Sum of first n terms of a geometric series','a(1 − rⁿ)/(1 − r)'],
 [1,'Photoelectric equation','hf = φ + Ek(max)'],[1,'Young modulus','E = (F/A)/(ΔL/L) = stress/strain'],
 [1,'Capacitor discharge','Q = Q₀e^(−t/RC)'],[1,'Fringe spacing (Young\'s slits)','w = λD/s'],
 [4,'Price elasticity of demand','%ΔQd / %ΔP'],[4,'Income elasticity of demand','%ΔQd / %ΔY (negative for inferior goods)'],
 [4,'Cross elasticity of demand','%ΔQd of A / %ΔP of B (positive: substitutes; negative: complements)'],[4,'Aggregate demand','AD = C + I + G + (X − M)'],
 [4,'The multiplier','1 / MPW, where MPW = MPS + MPT + MPM'],[4,'Real interest rate (approx.)','Nominal interest rate − inflation'],
 [4,'Profit maximisation rule','MC = MR'],[4,'Marshall–Lerner condition','|PEDx| + |PEDm| > 1 for a depreciation to improve the current account']
].map((c,i)=>({id:'c'+i,cat:c[0],front:c[1],back:c[2]}));
const BOX_DAYS=[0,1,2,4,8,16,32];
const NEW_PER_DAY=10;
function cardState(){return loadJSON('cards',{s:{},newDay:null,newCount:0});}
function cardsDue(st){
  const now=Date.now();
  const due=CARDS.filter(c=>st.s[c.id]&&st.s[c.id].due<=now);
  const today=dayKey();
  const newLeft=st.newDay===today?Math.max(0,NEW_PER_DAY-st.newCount):NEW_PER_DAY;
  const fresh=CARDS.filter(c=>!st.s[c.id]).slice(0,newLeft);
  return {due,fresh};
}
let CS=null;
function cardsHome(){
  leave();
  const st=cardState(),{due,fresh}=cardsDue(st);
  const boxes=[0,0,0,0,0,0,0];CARDS.forEach(c=>{const s=st.s[c.id];boxes[s?s.box:0]++;});
  app.innerHTML=
  '<div class="stack">'+
  '<div class="stack" style="gap:8px"><p class="eyebrow">Daily training</p><h1>Flashcards</h1>'+
  '<p class="muted">Constants, key formulas, typical sizes and maths you should know without thinking. Cards you know come back less and less often; cards you miss come back tomorrow.</p></div>'+
  '<div class="facts"><div class="fact"><b>'+due.length+'</b><span>due now</span></div><div class="fact"><b>'+fresh.length+'</b><span>new today</span></div><div class="fact"><b>'+(boxes[4]+boxes[5]+boxes[6])+'</b><span>well known</span></div></div>'+
  '<button class="btn" id="cgo"'+(due.length+fresh.length?'':' disabled')+'>'+(due.length+fresh.length?'Review '+(due.length+fresh.length)+' cards':'All done for today')+'</button>'+
  '<div class="card stack"><h2>Your deck</h2><div class="cats">'+['New','1-day box','2-day box','4-day box','8-day box','16-day box','32-day box'].map((n,i)=>{const v=boxes[i];
    return '<div class="cr"><span class="n">'+n+'</span><span class="v">'+v+'</span><div class="t"><i style="width:'+(100*v/CARDS.length)+'%"></i></div></div>';}).join('')+'</div>'+
   '<p class="note">'+CARDS.length+' cards: '+CARD_CATS.map((n,i)=>CARDS.filter(c=>c.cat===i).length+' '+n.toLowerCase()).join(', ')+'.</p></div>'+
  '<button class="btn ghost" id="cback">Home</button>'+
  '</div>';
  document.getElementById('cgo').onclick=()=>{CS={list:shuffle(due.concat(fresh)),i:0,ok:0};cardRender();};
  document.getElementById('cback').onclick=home;
}
function cardRender(){
  setBack(cardsHome);
  if(CS.i>=CS.list.length){
    app.innerHTML='<div class="stack"><p class="eyebrow">Session complete</p><h1>'+CS.ok+' / '+CS.list.length+' known</h1><button class="btn" id="cdone">Back to flashcards</button></div>';
    document.getElementById('cdone').onclick=cardsHome;return;
  }
  const c=CS.list[CS.i];
  app.innerHTML=
  '<div class="stack">'+
  '<div class="top"><span class="count">'+(CS.i+1)+' / '+CS.list.length+'</span><span class="eyebrow">'+CARD_CATS[c.cat]+'</span></div>'+
  '<div class="card flash"><p class="prompt">'+c.front+'</p><div id="cback2" class="cardback"></div></div>'+
  '<button class="btn" id="cshow">Show answer</button>'+
  '<div class="row2" id="cgrade" style="display:none"><button class="btn ghost rate no" id="cno">Didn\'t know</button><button class="btn ghost rate ok" id="cyes">Knew it</button></div>'+
  '<button class="btn ghost" id="cquit">Stop</button>'+
  '</div>';
  const $=id=>document.getElementById(id);
  $('cshow').onclick=()=>{$('cback2').innerHTML='<p>'+c.back+'</p>';$('cshow').style.display='none';$('cgrade').style.display='grid';};
  const grade=ok=>{
    const st=cardState(),s=st.s[c.id];
    if(!s){const today=dayKey();if(st.newDay!==today){st.newDay=today;st.newCount=0;}st.newCount++;}
    const box=ok?Math.min(6,(s?s.box:0)+1):1;
    st.s[c.id]={box,due:Date.now()+BOX_DAYS[box]*864e5-36e5};
    saveJSON('cards',st);if(ok)CS.ok++;CS.i++;cardRender();
  };
  $('cno').onclick=()=>grade(false);$('cyes').onclick=()=>grade(true);
  $('cquit').onclick=cardsHome;
}

/* ---------- bridging topics ---------- */
const TOPICS=[
{title:'Complex numbers',blurb:'The language of waves, AC circuits and quantum mechanics.',
 body:'<p>Define i with i² = −1. A complex number z = a + bi can be drawn as the point (a, b) on the Argand diagram. Its modulus |z| = √(a² + b²) is the distance from the origin; its argument θ is the angle from the positive real axis.</p><p><b>Euler\'s formula</b>, e<sup>iθ</sup> = cosθ + i sinθ, lets you write any complex number as z = re<sup>iθ</sup>. Multiplying complex numbers multiplies their moduli and adds their arguments, so multiplication by e<sup>iθ</sup> is a rotation.</p><p><b>De Moivre</b>: (cosθ + i sinθ)ⁿ = cos nθ + i sin nθ, which gives quick proofs of trig identities.</p><p>In physics, oscillations are written as Ae<sup>iωt</sup> because differentiating just multiplies by iω, turning differential equations into algebra.</p>',
 probs:[['Calculate (2 + 3i)(1 − i).','2 − 2i + 3i − 3i² = 2 + i + 3 = 5 + i.'],
        ['Find all solutions of z³ = 1.','z = e^(2πik/3) for k = 0, 1, 2: that is 1 and −½ ± (√3/2)i, equally spaced round the unit circle.'],
        ['Use de Moivre to express cos 2θ in terms of cosθ and sinθ.','(cosθ + i sinθ)² = cos²θ − sin²θ + 2i sinθ cosθ. The real part gives cos 2θ = cos²θ − sin²θ.']]},
{title:'Taylor series and approximations',blurb:'How physicists simplify almost everything.',
 body:'<p>A smooth function near x = 0 can be written as f(x) = f(0) + f′(0)x + f″(0)x²/2! + … Keeping only the first one or two terms gives powerful approximations when x is small.</p><p>Key examples: eˣ ≈ 1 + x, sin x ≈ x, cos x ≈ 1 − x²/2, ln(1 + x) ≈ x, and the binomial approximation (1 + x)ⁿ ≈ 1 + nx.</p><p>Physics uses: the pendulum equation becomes simple harmonic motion because sinθ ≈ θ; gravity at height h is g(1 + h/R)⁻² ≈ g(1 − 2h/R); and relativistic kinetic energy (γ − 1)mc² reduces to ½mv² at low speed.</p>',
 probs:[['Estimate √1.02 without a calculator.','(1 + 0.02)^(1/2) ≈ 1 + 0.01 = 1.01 (true value 1.00995).'],
        ['By what percentage is g smaller at an altitude of 32 km?','g(1 − 2h/R) with h/R = 32/6400 = 0.005, so about 1% smaller.'],
        ['Show that (γ − 1)mc² ≈ ½mv² when v ≪ c.','γ = (1 − v²/c²)^(−1/2) ≈ 1 + v²/(2c²), so (γ − 1)mc² ≈ ½mv².']]},
{title:'Vectors',blurb:'Dot and cross products: work, torque and magnetic forces.',
 body:'<p>Vectors have size and direction; in components a = (a₁, a₂, a₃) with magnitude √(a₁² + a₂² + a₃²).</p><p>The <b>dot product</b> a · b = a₁b₁ + a₂b₂ + a₃b₃ = |a||b|cosθ gives a number. It measures how much two vectors point the same way: work is W = F · d.</p><p>The <b>cross product</b> a × b is a vector perpendicular to both, with size |a||b|sinθ and direction from the right-hand rule. It appears in torque τ = r × F, angular momentum L = r × p and the magnetic force F = qv × B.</p>',
 probs:[['Find the magnitude of (1, 2, 2).','√(1 + 4 + 4) = 3.'],
        ['Find the angle between (1, 0, 1) and (0, 1, 1).','Dot product = 1; each has magnitude √2. cosθ = 1/2, so θ = 60°.'],
        ['A 0.3 m spanner is pushed with 20 N at 90° to the handle. What is the torque?','τ = rF sinθ = 0.3 × 20 × 1 = 6 N m.']]},
{title:'Differential equations',blurb:'Exponential growth, decay and oscillations.',
 body:'<p>Many laws say how fast something changes. <b>dy/dt = ky</b> (rate proportional to amount) has solution y = y₀e<sup>kt</sup>: radioactive decay, capacitor discharge and Newton\'s law of cooling all follow this pattern.</p><p><b>Separation of variables</b>: put all the y on one side and all the t on the other, then integrate both sides.</p><p><b>Simple harmonic motion</b>: d²x/dt² = −ω²x has solution x = A cos(ωt + φ). A mass on a spring has ω = √(k/m). Add damping and you get oscillations that die away exponentially.</p>',
 probs:[['A sample has a half-life of 5 hours. What fraction remains after 15 hours?','Three half-lives: (1/2)³ = 1/8.'],
        ['Solve dy/dx = xy.','Separate: dy/y = x dx, so ln y = x²/2 + c and y = Ae^(x²/2).'],
        ['A 0.5 kg mass hangs on a spring with k = 50 N/m. What is its period?','ω = √(50/0.5) = 10 rad/s, so T = 2π/10 ≈ 0.63 s.']]},
{title:'Calculus toolkit',blurb:'Integration techniques you will use constantly.',
 body:'<p><b>Chain rule</b>: d/dx f(g(x)) = f′(g(x)) g′(x). Its reverse is <b>substitution</b>: if the integrand contains a function and its derivative, substitute u for the function.</p><p><b>Integration by parts</b>: ∫u dv = uv − ∫v du. Choose u to be something that gets simpler when differentiated (like x or ln x).</p><p>Physics uses integration to add up contributions: work = ∫F dx, charge = ∫I dt, and the mass of an object with varying density = ∫ρ dV.</p>',
 probs:[['Find ∫ x cos x dx.','By parts with u = x: x sin x − ∫sin x dx = x sin x + cos x + C.'],
        ['Find ∫ 2x e^(x²) dx.','Substitute u = x², du = 2x dx: ∫eᵘ du = e^(x²) + C.'],
        ['Evaluate ∫₀¹ x/(1 + x²) dx.','The numerator is half the derivative of the denominator: [½ ln(1 + x²)] from 0 to 1 = ½ ln 2 ≈ 0.35.']]},
{title:'Special relativity',blurb:'Time dilation, length contraction and E = mc².',
 body:'<p>Two postulates: the laws of physics are the same in every inertial frame, and light travels at c in every frame. Everything else follows.</p><p>Moving clocks run slow by the <b>Lorentz factor</b> γ = 1/√(1 − v²/c²): a time τ in the clock\'s own frame is measured as γτ. Moving objects are shortened along their motion by the same factor.</p><p>Energy and mass are linked: a particle at rest has energy mc², and a moving one has total energy γmc². Nothing with mass can reach c, because γ → ∞.</p>',
 probs:[['What is γ at v = 0.6c?','1/√(1 − 0.36) = 1/0.8 = 1.25.'],
        ['Muons live 2.2 μs at rest. At 0.995c (γ ≈ 10), roughly how far do they travel in one lifetime, as seen from Earth?','Lifetime ≈ 22 μs, so distance ≈ 3 × 10⁸ × 22 × 10⁻⁶ ≈ 6.6 km. Without time dilation it would be only 660 m, which is why muons from the upper atmosphere reach the ground.'],
        ['How much energy is equivalent to 1 g of mass?','E = mc² = 10⁻³ × 9 × 10¹⁶ = 9 × 10¹³ J, comparable to a large nuclear weapon.']]},
{title:'Quantum basics',blurb:'Photons, matter waves and energy levels.',
 body:'<p>Light comes in packets (photons) with energy E = hf. In the <b>photoelectric effect</b>, electrons are only emitted if a single photon has enough energy, however bright the light.</p><p>Matter has wave properties too: the <b>de Broglie wavelength</b> is λ = h/p. Electrons accelerated through about 100 V have wavelengths similar to atomic spacings, so crystals diffract them.</p><p>Electrons in atoms occupy discrete energy levels. In hydrogen, Eₙ = −13.6 eV/n², and jumps between levels emit photons of exactly the energy difference, giving sharp spectral lines.</p>',
 probs:[['What is the energy of a 500 nm photon in eV?','E = hc/λ ≈ 1240 eV nm / 500 nm ≈ 2.5 eV.'],
        ['Estimate the de Broglie wavelength of an electron accelerated through 100 V.','p = √(2meV) ≈ √(2 × 9.1 × 10⁻³¹ × 1.6 × 10⁻¹⁷) ≈ 5.4 × 10⁻²⁴ kg m/s, so λ = h/p ≈ 1.2 × 10⁻¹⁰ m.'],
        ['What wavelength is emitted when hydrogen drops from n = 3 to n = 2?','ΔE = 13.6(1/4 − 1/9) ≈ 1.89 eV, so λ ≈ 1240/1.89 ≈ 656 nm: the red H-alpha line.']]},
{title:'Dimensional analysis',blurb:'Getting answers from units alone, a favourite interview trick.',
 body:'<p>Any physical equation must have the same units on both sides. If you know which quantities matter, you can often find the form of the answer without solving anything.</p><p>Example: a pendulum\'s period might depend on its length L, mass m and g. Write T ∝ L<sup>a</sup>m<sup>b</sup>g<sup>c</sup> and match the units of time: the only solution is T ∝ √(L/g). Mass cannot appear.</p><p>The method misses dimensionless factors (like 2π) but gives the scaling, which is often what matters, and makes a great sanity check.</p>',
 probs:[['Deep-water wave speed depends on g and wavelength λ. Find the form.','v ∝ √(gλ): the only combination with units of m/s.'],
        ['A planet orbits a star. How does the period depend on r and GM?','GM has units m³/s². T ∝ √(r³/GM), which is Kepler\'s third law up to the factor 2π.'],
        ['A droplet oscillates due to surface tension γ (N/m). How does its frequency depend on γ, density ρ and radius r?','f ∝ √(γ/(ρr³)): smaller drops vibrate faster.']]}
];
function topicsHome(){
  leave();
  const read=loadJSON('topics-read',{});
  app.innerHTML=
  '<div class="stack">'+
  '<div class="stack" style="gap:8px"><p class="eyebrow">Daily training</p><h1>Bridging topics</h1>'+
  '<p class="muted">Short introductions to ideas first-year university physics takes for granted, each with practice problems. Interviewers like to see you can pick up new ideas quickly.</p></div>'+
  '<div class="card">'+TOPICS.map((t,i)=>'<button class="qrow" data-i="'+i+'"><span class="mark '+(read[i]?'ok':'sk')+'">'+(read[i]?'✓':'·')+'</span><span class="qt"><b>'+t.title+'</b><br><span class="note">'+t.blurb+'</span></span><span></span></button>').join('')+'</div>'+
  '<button class="btn ghost" id="tback">Home</button></div>';
  app.querySelectorAll('.qrow').forEach(b=>b.onclick=()=>topicView(+b.dataset.i));
  document.getElementById('tback').onclick=home;
}
function topicView(i){
  setBack(topicsHome);
  const t=TOPICS[i];
  app.innerHTML=
  '<div class="stack"><p class="eyebrow">Bridging topic</p><h1>'+t.title+'</h1>'+
  '<div class="card stack lesson">'+t.body+'</div>'+
  '<div class="card stack"><h2>Practice</h2>'+t.probs.map((p,k)=>'<div class="stack" style="gap:6px"><p><b>'+(k+1)+'.</b> '+p[0]+'</p><details class="fu"><summary>Show solution</summary><p>'+p[1]+'</p></details></div>').join('')+'</div>'+
  '<button class="btn" id="tdone">Mark as read</button><button class="btn ghost" id="tback">All topics</button></div>';
  document.getElementById('tdone').onclick=()=>{const r=loadJSON('topics-read',{});r[i]=Date.now();saveJSON('topics-read',r);topicsHome();};
  document.getElementById('tback').onclick=topicsHome;
  window.scrollTo(0,0);
}

/* ---------- problem of the week ---------- */
const POTW=[
 ['A uniform chain of length L lies on a smooth table with half of it hanging over the edge. It is released. How fast is it moving when the last link leaves the table?',
  'Use energy. Initially the hanging half (mass M/2) has its centre of mass L/4 below the table: U = −MgL/8. Finally the whole chain hangs with its centre at L/2: U = −MgL/2. Energy released = 3MgL/8 = ½Mv², so <b>v = √(3gL/4)</b>.'],
 ['A ball is dropped from height h and each bounce returns it with a fraction e of its speed. What total distance does it travel, and how long until it stops?',
  'Each rebound height is e² times the last. Distance = h + 2h(e² + e⁴ + …) = <b>h(1 + e²)/(1 − e²)</b>. With t₀ = √(2h/g), each flight time scales by e: total = t₀ + 2t₀(e + e² + …) = <b>t₀(1 + e)/(1 − e)</b>. Finite time for infinitely many bounces!'],
 ['Twelve 1 Ω resistors form the edges of a cube. What is the resistance between opposite corners?',
  'By symmetry, current I splits equally into 3 edges (I/3 each), then into 6 edges (I/6 each), then recombines through 3 edges (I/3). Voltage = (I/3 + I/6 + I/3) × 1 Ω = 5I/6, so <b>R = 5/6 Ω</b>.'],
 ['An infinite ladder network has resistors R along each rung and each side rail segment (series R, then shunt R, repeating). What is its resistance?',
  'Adding one more section does not change an infinite ladder: R_eq = R + (R × R_eq)/(R + R_eq). Solving R_eq² − R R_eq − R² = 0 gives <b>R_eq = R(1 + √5)/2</b>, the golden ratio times R.'],
 ['A capacitor C charged to voltage V is connected to an identical uncharged capacitor. Compare the stored energy before and after. Where did the difference go?',
  'Before: ½CV². Charge is shared, so each ends at V/2: total 2 × ½C(V/2)² = ¼CV². <b>Half the energy is lost</b>, whatever the resistance of the wires: it is dissipated as heat in the wires and radiated as electromagnetic waves.'],
 ['A rocket\'s exhaust leaves at 3 km/s. Roughly what fraction of its launch mass must be fuel to reach 8 km/s (ignoring gravity and drag)?',
  'The rocket equation: Δv = u ln(m₀/m_f). m₀/m_f = e^(8/3) ≈ 14, so about <b>93% of the launch mass is fuel</b>. This is why rockets use stages.'],
 ['A pendulum clock keeps perfect time at sea level. It is carried to the top of a 1 km mountain. How much time does it lose per day?',
  'T ∝ 1/√g and g ∝ 1/r², so T ∝ r. The period increases by a fraction h/R = 1/6400. Per day: 86 400/6400 ≈ <b>13.5 seconds lost</b> (a bit less in reality, because the mountain\'s own mass adds gravity).'],
 ['A bead slides without friction on a vertical circular hoop of radius R, which spins about its vertical diameter at angular speed ω. Where can the bead rest?',
  'At angle θ from the bottom, balancing gravity and the required centripetal force gives cosθ = g/(ω²R). This only exists if <b>ω² &gt; g/R</b>; otherwise the bead stays at the bottom. Above the critical speed, the bottom becomes unstable and the bead rises to the new position.'],
 ['Two identical springs (constant k) hold a mass m, first connected in series, then in parallel. Compare the periods.',
  'Series: k/2. Parallel: 2k. T ∝ 1/√k, so T_series/T_parallel = √(2k/(k/2)) = <b>2</b>.'],
 ['What is the shortest flat mirror on a wall in which you can see your whole body? Does it depend on how far away you stand?',
  'Light from your feet reflects at a point halfway between your eyes and feet in height; light from the top of your head reflects halfway between head and eyes. So the mirror needs to be <b>half your height</b>, at any distance.'],
 ['How deep would you have to dig for gravity to drop by 1%? How high would you have to fly?',
  'Inside a uniform Earth, g ∝ r, so a 1% drop needs depth 1% of R ≈ <b>64 km</b>. Above the surface g ∝ 1/r², so (1 + h/R)⁻² = 0.99 gives h ≈ 0.5% of R ≈ <b>32 km</b>.'],
 ['A ladder slides down a wall, its top on the wall and foot on the floor. What path does its midpoint trace?',
  'With the foot at (x, 0) and top at (0, y), x² + y² = L². The midpoint (x/2, y/2) satisfies (x/2)² + (y/2)² = (L/2)²: <b>a quarter-circle of radius L/2</b> centred on the corner.'],
 ['Estimate the lift of a 1000 m³ hot-air balloon heated to 100 °C on a 20 °C day.',
  'At fixed pressure, density ∝ 1/T. Hot air density = 1.2 × 293/373 ≈ 0.94 kg/m³. Difference ≈ 0.26 kg/m³, so lift ≈ <b>260 kg</b> for 1000 m³. Real balloons are 2000–3000 m³.'],
 ['A spring of stiffness k is cut in half. What is the stiffness of each half?',
  'Each half stretches half as much under the same force, so its stiffness is <b>2k</b>. (Two halves in series must give back k: 1/k = 1/k₁ + 1/k₁.)'],
 ['A 1 kg ball on a 1 m string is swung in a vertical circle. What is the smallest speed at the top that keeps the string taut, and what is the tension at the bottom in that case?',
  'At the top, gravity alone provides the centripetal force: v² = gR, so <b>v = √(gR) ≈ 3.1 m/s</b>. Energy conservation gives v² at the bottom = gR + 4gR = 5gR. Then T − mg = mv²/R = 5mg, so <b>T = 6mg ≈ 59 N</b>.'],
 ['Two identical bulbs are in series with a battery. A third identical bulb is then connected in parallel with one of them. What happens to the brightness of each bulb?',
  'Before: each bulb has V/2. After: the parallel pair has resistance R/2, so the total is 3R/2. The single bulb now gets 2V/3 (<b>brighter</b>: power up by a factor of 16/9), and each bulb of the pair gets V/3 (<b>dimmer</b>: 4/9 of the original power).'],
 ['A small block starts at rest at the top of a smooth hemisphere of radius R and slides off. At what height above the centre does it leave the surface?',
  'At angle θ from the top, energy gives v² = 2gR(1 − cosθ). It leaves when the normal force reaches zero: mg cosθ = mv²/R. So cosθ = 2(1 − cosθ), giving cosθ = 2/3. It leaves at a height of <b>2R/3</b> above the centre.'],
 ['Water leaks from a small hole at depth h below the surface of a tank. How fast does it come out? If the tank has height H, where should the hole be to make the jet land furthest away?',
  'Energy conservation (Torricelli): <b>v = √(2gh)</b>. A hole at depth h has height H − h above the ground, so the range is 2√(h(H − h)). This is greatest when <b>h = H/2</b>, giving a range of H.'],
 ['What is the escape velocity from the Earth? Why doesn\'t it matter which direction you launch in (ignoring the atmosphere)?',
  '½mv² = GMm/R gives v = √(2gR) = √(2 × 9.8 × 6.4 × 10⁶) ≈ <b>11.2 km/s</b>. Energy is a scalar, so only speed matters: any direction that does not hit the planet escapes.'],
 ['A uniform rod of length L, pivoted at one end, is released from horizontal. What is the speed of its free end as it passes through the vertical?',
  'The centre of mass falls L/2: mg(L/2) = ½Iω² with I = mL²/3, so ω² = 3g/L. The tip moves at v = ωL = <b>√(3gL)</b>: faster than a ball dropped through the same height L (√(2gL)).']

];
function weekIndex(){
  const d=new Date(),start=new Date(d.getFullYear(),0,1);
  return Math.floor(((d-start)/864e5+start.getDay())/7);
}
function potwHome(){
  leave();
  const w=weekIndex(),cur=w%POTW.length,seen=loadJSON('potw',{});
  const prev=[1,2,3,4].map(k=>(cur-k+POTW.length*10)%POTW.length);
  const block=(i,label)=>'<div class="card stack"><p class="eyebrow">'+label+'</p><p class="prompt">'+POTW[i][0]+'</p>'+
    '<details class="fu" data-i="'+i+'"'+(seen[i]?' open':'')+'><summary>'+(seen[i]?'Solution':'Reveal solution (try for a few days first)')+'</summary><p>'+POTW[i][1]+'</p></details></div>';
  app.innerHTML=
  '<div class="stack"><div class="stack" style="gap:8px"><p class="eyebrow">Interview prep</p><h1>Problem of the week</h1>'+
  '<p class="muted">A harder problem in the style of physics olympiads and interviews. Work on it over several days before looking at the solution.</p></div>'+
  block(cur,'This week')+
  '<h2>Earlier weeks</h2>'+prev.map(i=>block(i,'Earlier')).join('')+
  '<button class="btn ghost" id="pback">Home</button></div>';
  app.querySelectorAll('details.fu').forEach(d=>d.addEventListener('toggle',()=>{if(d.open){const s=loadJSON('potw',{});s[d.dataset.i]=Date.now();saveJSON('potw',s);}}));
  document.getElementById('pback').onclick=home;
}

/* ---------- resources ---------- */
const RESOURCES=[
 ['Interview preparation',[
  ['Oxford Physics mock interview pack','https://www.physics.ox.ac.uk/system/files/file_attachments/mock%20interview%20pack%20211122.pdf','Official sample questions with hints and solutions.'],
  ['University of Oxford: interviews','https://www.ox.ac.uk/interviews','What to expect, sample questions from tutors, and advice.'],
  ['Oxford PAT past papers','https://www.physics.ox.ac.uk/study/undergraduates/how-apply/physics-aptitude-test/pat-past-papers','Good problems to talk through aloud.']]],
 ['Problem practice',[
  ['Isaac Physics','https://isaacphysics.org','Free, high-quality problems from A-level to university entrance.'],
  ['British Physics Olympiad','https://www.bpho.org.uk','Past papers and solutions: excellent harder problems.'],
  ['UK Mathematics Trust','https://www.ukmt.org.uk','Mathematical problem solving and olympiad papers.']]],
 ['Going further',[
  ['The Feynman Lectures on Physics (free online)','https://www.feynmanlectures.caltech.edu','Classic first-year physics, beautifully explained.'],
  ['MIT OpenCourseWare','https://ocw.mit.edu','Full university physics and maths courses with lectures and problem sets.'],
  ['3Blue1Brown','https://www.3blue1brown.com','Visual explanations of calculus, linear algebra and more.']]]
];
function resourcesHome(){
  leave();
  app.innerHTML='<div class="stack"><div class="stack" style="gap:8px"><p class="eyebrow">Study tools</p><h1>Resources</h1><p class="muted">Trusted, free resources. Links open in your browser.</p></div>'+
  RESOURCES.map(([h,l])=>'<div class="card stack"><h2>'+h+'</h2>'+l.map(([n,u,d])=>'<a class="res" href="'+u+'" target="_blank" rel="noopener"><b>'+n+'</b><span>'+d+'</span></a>').join('')+'</div>').join('')+
  '<button class="btn ghost" id="rback">Home</button></div>';
  document.getElementById('rback').onclick=home;
}
