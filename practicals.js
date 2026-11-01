/* =====================  AQA A-level Physics required practicals (7408)  =====================
   The 12 required practicals: aim, equipment, method, variables, analysis, accuracy and safety, plus quiz
   questions. Quiz format: [prompt, [correct, wrong, wrong, wrong], explanation]. Append only. */

const RPS=[
{t:'Stationary waves on a string',topic:2,
 aim:'Investigate how the frequency of the first harmonic depends on the length, tension and mass per unit length of a string.',
 kit:['String or wire over a pulley with hanging masses (tension T = mg)','Vibration generator and signal generator','Two bridges to set the vibrating length l','Metre rule; balance to find mass per unit length μ'],
 method:['Set a vibrating length l between the bridges and hang a mass to fix the tension.','Increase the signal-generator frequency from low until the string shows one clear loop (first harmonic) with maximum amplitude.','Record f. Repeat for several lengths (then several tensions, and strings of different μ), keeping the other two variables fixed.'],
 vars:'Independent: l (or T, or μ). Dependent: frequency of the first harmonic. Control: the other two of l, T, μ.',
 analysis:'f = (1/2l)√(T/μ). Plot f against 1/l: a straight line through the origin with gradient ½√(T/μ). Or plot f² against T (gradient 1/(4l²μ)).',
 accuracy:'Use a stroboscope or look for the largest amplitude to judge the harmonic precisely; measure l between the nodes; find μ by weighing a long length of string.',
 safety:'Hanging masses can fall: keep feet clear or use a box underneath. Wear goggles in case the string snaps under tension.',
 quiz:[['Which graph gives a straight line through the origin when only length l is varied?',['f against 1/l','f against l','f² against l','f against l²'],'f ∝ 1/l at fixed T and μ.'],
  ['If the tension is quadrupled, the first-harmonic frequency:',['Doubles','Quadruples','Halves','Is unchanged'],'f ∝ √T.'],
  ['How is the tension in the string set?',['By the weight of the hanging masses, T = mg','By the signal generator\'s amplitude','By the distance between the bridges','By the frequency'],'The string passes over a pulley to the masses.']]},
{t:'Interference: Young\'s slits and diffraction grating',topic:2,
 aim:'Measure the wavelength of laser light using Young\'s double slits and a diffraction grating.',
 kit:['Laser','Double slit (known separation s) and diffraction grating (known lines per mm)','Screen','Metre rule or tape measure'],
 method:['Young\'s slits: shine the laser through the slits onto a screen several metres away. Measure the distance D and the width across several fringes, then divide to get the fringe spacing w.','Grating: shine the laser normally onto the grating. Measure the distance to the screen and the positions of the orders to find the angle θ for each order n.','Repeat for different D (slits) or orders (grating).'],
 vars:'Young\'s slits: independent D, dependent w, control s and λ.',
 analysis:'Young\'s slits: w = λD/s, so plot w against D: gradient λ/s. Grating: d sinθ = nλ with d = 1/(lines per metre); find θ from tanθ = (distance to order) ÷ (distance to screen).',
 accuracy:'Measure across many fringes to reduce percentage uncertainty; use a large D; use the highest orders on the grating.',
 safety:'Never look into the laser beam or its reflections; remove shiny objects; use warning signs; point the beam away from people.',
 quiz:[['Why measure the width of several fringes instead of one?',['To reduce the percentage uncertainty in the fringe spacing','To make the fringes brighter','Because single fringes are invisible','To change the wavelength'],'A larger measured distance has a smaller percentage uncertainty.'],
  ['A grating has 300 lines per mm. What is the slit spacing d?',['3.3 × 10⁻⁶ m','3.0 × 10⁻⁴ m','300 m','3.3 × 10⁻³ m'],'d = 1/(300 000 m⁻¹).'],
  ['What is the main safety precaution with a laser?',['Never look into the beam or its reflections','Wear gloves','Keep it cold','Use it only in bright light'],'Laser light can permanently damage the retina.']]},
{t:'Determining g by free fall',topic:3,
 aim:'Measure the acceleration due to gravity, g, using an object in free fall.',
 kit:['Steel ball and electromagnet (or release mechanism)','Light gates or trapdoor and electronic timer','Metre rule, clamp stand'],
 method:['Hold the ball on the electromagnet a measured height h above the trapdoor or light gate.','Switching off the magnet starts the timer; the ball hitting the trapdoor stops it. Record the time t.','Repeat several times for each height, for a range of heights.'],
 vars:'Independent: height h. Dependent: fall time t. Control: same ball, same release method.',
 analysis:'From rest, h = ½gt². Plot h against t²: a straight line with gradient g/2, so g = 2 × gradient.',
 accuracy:'Electronic timing avoids reaction-time errors; a small, dense ball reduces air resistance; measure h to the bottom of the ball; a non-zero intercept reveals a systematic error such as magnet delay.',
 safety:'Place a cushion or tray to catch the ball; keep feet clear; clamp the stand securely.',
 quiz:[['Plotting h against t² gives a gradient equal to:',['g/2','g','2g','√g'],'h = ½gt².'],
  ['Why use a steel ball rather than a table-tennis ball?',['Air resistance is negligible compared with its weight','It falls at constant speed','It bounces less','It is easier to see'],'A dense, small ball has little drag relative to its weight.'],
  ['The graph of h against t² has a small non-zero intercept. This suggests:',['A systematic error, e.g. a delay as the magnet releases the ball','A random error only','That g is not constant','That the ball is too heavy'],'Systematic errors shift the whole line.']]},
{t:'Young modulus of a wire',topic:3,
 aim:'Determine the Young modulus of the material of a long, thin wire.',
 kit:['Long thin wire clamped at one end, over a pulley','Slotted masses','Marker on the wire with a fixed metre rule (or vernier scale)','Micrometer for the diameter'],
 method:['Measure the original length L from the clamp to the marker, and the diameter at several points with a micrometer.','Add masses one at a time and record the extension ΔL from the marker\'s movement.','Remove the masses to check the wire returns to its original length (it stayed elastic).'],
 vars:'Independent: load F. Dependent: extension ΔL. Control: same wire, original length, temperature.',
 analysis:'Stress = F/A with A = πd²/4; strain = ΔL/L. Plot stress against strain: the gradient of the straight section is the Young modulus E.',
 accuracy:'A long, thin wire gives a large, measurable extension; average the diameter over several positions and orientations; use a vernier scale for the extension.',
 safety:'Wear goggles: the wire may snap. Put a box of sand or a cushion under the masses.',
 quiz:[['The Young modulus is the gradient of which graph?',['Stress against strain (linear region)','Force against extension','Extension against length','Strain against stress'],'E = stress/strain.'],
  ['Why use a long, thin wire?',['To give a large extension that can be measured accurately','To make it stronger','To reduce the load needed to break it','Because it has a higher Young modulus'],'Larger extensions mean smaller percentage uncertainties.'],
  ['Why measure the diameter at several points?',['The wire may not be uniform; averaging reduces uncertainty','To find the length','To check for elasticity','To measure the stress directly'],'Area depends on d², so its uncertainty is doubled.']]},
{t:'Resistivity of a wire',topic:4,
 aim:'Determine the resistivity of the material of a wire.',
 kit:['Wire taped to a metre rule','Ammeter and voltmeter (or multimeter)','Power supply, crocodile clips','Micrometer'],
 method:['Measure the diameter in several places with a micrometer.','Connect one clip at zero and move the other to set the length L. Measure V and I to get R = V/I.','Repeat for a range of lengths, keeping the current small.'],
 vars:'Independent: length L. Dependent: resistance R. Control: same wire, temperature (small current).',
 analysis:'R = ρL/A. Plot R against L: gradient ρ/A, so ρ = gradient × A with A = πd²/4.',
 accuracy:'Use a small current and switch off between readings so the wire does not heat up (resistance rises with temperature); check the micrometer for zero error.',
 safety:'The wire can get hot at high currents; keep currents low.',
 quiz:[['The gradient of R against L equals:',['ρ/A','ρA','A/ρ','ρ'],'R = ρL/A.'],
  ['Why should the current be kept small?',['To stop the wire heating, which would change its resistance','To make the voltmeter more accurate','To save the battery','To increase the resistivity'],'Temperature must stay constant.'],
  ['The diameter is doubled. The resistance of the same length:',['Falls to a quarter','Halves','Doubles','Is unchanged'],'A ∝ d².']]},
{t:'EMF and internal resistance of a cell',topic:4,
 aim:'Measure the emf and internal resistance of a cell from how its terminal pd varies with current.',
 kit:['Cell','Variable resistor and a fixed protective resistor','Ammeter and voltmeter','Switch'],
 method:['Connect the cell to the variable resistor and ammeter in series, with the voltmeter across the cell\'s terminals.','Vary the resistance and record pairs of terminal pd V and current I.','Open the switch between readings.'],
 vars:'Independent: current I (set by the variable resistor). Dependent: terminal pd V.',
 analysis:'V = ε − Ir. Plot V against I: a straight line with y-intercept ε and gradient −r.',
 accuracy:'Open the switch between readings so the cell does not heat or run down; use a protective resistor; use a high-resistance voltmeter.',
 safety:'Never short-circuit the cell: large currents make it hot.',
 quiz:[['On a graph of V against I, the emf is:',['The y-intercept','The gradient','The x-intercept','The area under the line'],'When I = 0, V = ε.'],
  ['The gradient of V against I equals:',['−r','r','ε','1/r'],'V = ε − Ir.'],
  ['Why open the switch between readings?',['To stop the cell heating up, which would change its internal resistance','To reset the ammeter','To increase the emf','To discharge the voltmeter'],'Temperature changes affect r.']]},
{t:'Simple harmonic motion: mass–spring and pendulum',topic:5,
 aim:'Investigate how the period of a mass–spring system depends on mass, and of a pendulum on its length.',
 kit:['Spring, slotted masses, clamp stand','Pendulum bob on a string','Stopwatch (or light gate)','Fiducial marker; metre rule'],
 method:['Displace the mass (or pendulum, by a small angle under about 10°) and release.','Time 10 oscillations from a fiducial marker at the equilibrium position; divide by 10. Repeat and average.','Repeat for a range of masses (or pendulum lengths).'],
 vars:'Mass–spring: independent m, dependent T, control the spring. Pendulum: independent l, dependent T, control small amplitude.',
 analysis:'T = 2π√(m/k): plot T² against m, gradient 4π²/k. Pendulum T = 2π√(l/g): plot T² against l, gradient 4π²/g.',
 accuracy:'Time many oscillations; start timing at the equilibrium position, where the bob moves fastest; measure pendulum length to the centre of the bob; keep angles small.',
 safety:'Clamp the stand to the bench; keep feet clear of falling masses.',
 quiz:[['Why is the fiducial marker placed at the equilibrium position?',['The bob moves fastest there, so the crossing time is sharpest','It is the slowest point','To measure amplitude','Because the stopwatch is there'],'Timing errors are smallest at the fastest point.'],
  ['For a pendulum, a graph of T² against l has gradient:',['4π²/g','g/4π²','2π/g','4π²g'],'T² = (4π²/g) l.'],
  ['Why must the pendulum\'s amplitude be small?',['The formula assumes sinθ ≈ θ (small angles)','To reduce air resistance only','To make it faster','So it does not hit the clamp'],'Only small oscillations are simple harmonic.']]},
{t:'Boyle\'s law and Charles\'s law',topic:5,
 aim:'Investigate how gas pressure varies with volume at constant temperature, and volume with temperature at constant pressure.',
 kit:['Boyle: sealed air column above oil, pressure gauge and pump','Charles: capillary tube with a bead of concentrated sulfuric acid trapping air, in a water bath','Thermometer, ruler'],
 method:['Boyle: pump to change the pressure, wait for the temperature to settle, then record pressure and the air column length (∝ volume).','Charles: heat the water bath, stir, and record the temperature and the length of the trapped air column at intervals.'],
 vars:'Boyle: independent p, dependent V, control T and mass of gas. Charles: independent T, dependent V, control p and mass of gas.',
 analysis:'Boyle: plot p against 1/V, a straight line through the origin. Charles: plot V against θ (°C); extrapolating to V = 0 gives absolute zero, about −273 °C.',
 accuracy:'Wait after each change for the gas to reach the surrounding temperature; read the scale at eye level to avoid parallax; stir the water bath.',
 safety:'Concentrated sulfuric acid is corrosive: wear goggles and gloves. Hot water can scald. Do not over-pressurise the Boyle apparatus.',
 quiz:[['For Boyle\'s law, which graph is a straight line through the origin?',['p against 1/V','p against V','V against T','p against V²'],'pV = constant.'],
  ['Extrapolating V against temperature in °C to zero volume gives about:',['−273 °C','0 °C','−100 °C','273 °C'],'This is absolute zero.'],
  ['Why wait after pumping before taking a Boyle\'s law reading?',['Compression warms the gas; it must return to the surrounding temperature','To let the oil drain','To let the pressure rise','Because the gauge is slow'],'Temperature must be constant for Boyle\'s law.']]},
{t:'Charging and discharging capacitors',topic:6,
 aim:'Investigate capacitor discharge and find the time constant RC using a log-linear graph.',
 kit:['Capacitor (large, e.g. 1000 μF) and resistor (e.g. 10 kΩ)','DC supply, two-way switch','Voltmeter or data logger, stopwatch'],
 method:['Charge the capacitor fully, then switch to discharge through the resistor and start timing.','Record the pd across the capacitor at regular intervals (or use a data logger).','Repeat and average.'],
 vars:'Independent: time t. Dependent: pd V (or current). Control: R and C.',
 analysis:'V = V₀e^(−t/RC), so ln V = ln V₀ − t/RC. Plot ln V against t: a straight line with gradient −1/RC. Also, after t = RC the pd has fallen to 37% of V₀.',
 accuracy:'Choose RC of tens of seconds so readings can be taken by hand, or use a data logger; repeat and average; check the voltmeter has a very high resistance.',
 safety:'Do not exceed the capacitor\'s voltage rating; connect electrolytic capacitors the right way round; discharge before handling.',
 quiz:[['A graph of ln V against t for a discharging capacitor has gradient:',['−1/RC','−RC','RC','1/RC'],'ln V = ln V₀ − t/RC.'],
  ['After one time constant, the pd across a discharging capacitor is about:',['37% of its initial value','50% of its initial value','63% of its initial value','0'],'e⁻¹ ≈ 0.37.'],
  ['Why choose a large RC for manual timing?',['So the discharge is slow enough to read accurately','To store less charge','To make the graph curved','To increase the voltage'],'A time constant of tens of seconds suits a stopwatch.']]},
{t:'Force on a current-carrying wire',topic:6,
 aim:'Investigate how the force on a wire in a magnetic field depends on the current (and length), and find B.',
 kit:['U-shaped magnet (or magnets on a yoke) on a top-pan balance','Stiff wire clamped horizontally between the poles','Power supply, ammeter, variable resistor'],
 method:['Zero the balance with the magnet on it and no current.','Pass a current through the wire; the force on the wire produces an equal and opposite force on the magnet, changing the balance reading.','Record the change in mass for a range of currents, reversing the current to check.'],
 vars:'Independent: current I. Dependent: force F = (change in mass) × g. Control: length of wire in the field, B.',
 analysis:'F = BIl. Plot F against I: gradient Bl, so B = gradient ÷ l.',
 accuracy:'Zero the balance first; keep the wire perpendicular to the field; use moderate currents so the wire does not heat.',
 safety:'High currents heat the wire; switch off between readings.',
 quiz:[['Why does the top-pan balance reading change?',['By Newton\'s third law, the magnet feels an equal and opposite force to the wire','The wire gets heavier','The current adds mass','Gravity changes'],'The wire is clamped, so the force shows up on the magnet.'],
  ['The gradient of F against I equals:',['Bl','B/l','Il','B'],'F = BIl.'],
  ['Reversing the current makes the balance reading:',['Change in the opposite direction','Stay the same','Go to zero','Double'],'Fleming\'s left-hand rule: the force reverses.']]},
{t:'Search coil and flux linkage',topic:6,
 aim:'Investigate how the emf induced in a search coil depends on the angle between the coil and an alternating magnetic field.',
 kit:['Search coil connected to an oscilloscope','Large coil (or solenoid) driven by a low-voltage AC supply','Protractor'],
 method:['Place the search coil in the field of the AC coil, with its plane perpendicular to the field.','Measure the peak emf on the oscilloscope.','Rotate the search coil in steps and record the peak emf at each angle θ.'],
 vars:'Independent: angle θ. Dependent: peak induced emf. Control: position, current and frequency in the field coil.',
 analysis:'Flux linkage NBA cosθ, so the peak emf ∝ cosθ. Plot peak emf against cosθ: a straight line through the origin.',
 accuracy:'Keep the coil at the same position; read the peak-to-peak value and halve it; use the oscilloscope\'s vertical scale to fill the screen.',
 safety:'Use a low-voltage AC supply, not mains.',
 quiz:[['The peak induced emf is proportional to:',['cos θ, where θ is the angle between the field and the normal to the coil','sin θ only','θ','1/θ'],'Flux linkage = NBA cosθ.'],
  ['Why must the field coil be supplied with AC?',['A changing flux is needed to induce an emf in a stationary coil','AC is safer than DC','DC cannot make a magnetic field','To reduce heating'],'Faraday\'s law: emf ∝ rate of change of flux linkage.'],
  ['Which graph is a straight line through the origin?',['Peak emf against cos θ','Peak emf against θ','Peak emf against sin θ','Peak emf against 1/θ'],'emf ∝ cosθ.']]},
{t:'Inverse-square law for gamma radiation',topic:7,
 aim:'Investigate how the intensity of gamma radiation varies with distance from a point source.',
 kit:['Sealed gamma source (e.g. cobalt-60) in a holder','Geiger–Müller tube and counter','Metre rule; tongs; lead-lined box'],
 method:['Measure the background count rate with no source present.','Place the source at a measured distance d from the GM tube and record the count over a fixed time. Repeat.','Repeat for a range of distances. Subtract background from every reading.'],
 vars:'Independent: distance d. Dependent: corrected count rate C. Control: same source and GM tube, same counting time.',
 analysis:'C ∝ 1/(d + e)², where e is the unknown extra distance to the source inside its holder. Plot 1/√C against d: a straight line whose x-intercept gives −e.',
 accuracy:'Subtract background; count for long times (radioactive decay is random); repeat and average.',
 safety:'Handle the source only with long tongs; keep it pointing away from people; minimise time near it; return it to the lead-lined box straight away.',
 quiz:[['Why is the background count measured first?',['So it can be subtracted to give the count rate due to the source alone','To calibrate the source','To warm up the counter','Because gamma rays need background'],'Background radiation is always present.'],
  ['Why plot 1/√C against d?',['It gives a straight line even though the true source position inside the holder is unknown','To make the counts larger','Because C is proportional to d','To remove background'],'C ∝ 1/(d + e)² so 1/√C ∝ d + e.'],
  ['How should the source be handled?',['With long tongs, pointing away from people, and returned to its box quickly','With bare hands for a short time','With gloves only','Held close to the eyes to read the label'],'Distance, shielding and minimal time reduce exposure.']]}
];

function rpHome(){
  leave();
  const done=loadJSON('rp-quiz',{});
  app.innerHTML=
  '<div class="stack"><div class="stack" style="gap:8px"><p class="eyebrow">AQA A-level Physics</p><h1>Required practicals</h1>'+
  '<p class="muted">All 12 required practicals: method, variables, graphs, accuracy and safety, each with a quick quiz. Practical questions are worth marks across all three papers.</p></div>'+
  '<div class="card">'+RPS.map((r,i)=>{const d=done[i];return '<button class="qrow" data-i="'+i+'"><span class="mark '+(d?(d.best===3?'ok':'sk'):'sk')+'">'+(d?(d.best===3?'✓':d.best+'/3'):(i+1))+'</span><span class="qt"><b>'+r.t+'</b><br><span class="note">'+AL_PHY_TOPICS[r.topic]+'</span></span><span></span></button>';}).join('')+'</div>'+
  '<button class="btn" id="rpall">Quiz on all practicals (10 questions)</button>'+
  '</div>';
  app.querySelectorAll('.qrow').forEach(b=>b.onclick=()=>rpView(+b.dataset.i));
  document.getElementById('rpall').onclick=()=>rpQuiz(-1);
}
function rpView(i){
  leave();setBack(rpHome);
  const r=RPS[i],sec=(h,b)=>'<div class="stack" style="gap:6px"><p class="eyebrow">'+h+'</p>'+b+'</div>';
  app.innerHTML=
  '<div class="stack"><p class="eyebrow">Required practical '+(i+1)+'</p><h1>'+r.t+'</h1>'+
  '<div class="card stack lesson">'+
   sec('Aim','<p>'+r.aim+'</p>')+
   sec('Equipment','<ul class="rules">'+r.kit.map(k=>'<li>'+k+'</li>').join('')+'</ul>')+
   sec('Method','<ol class="rules">'+r.method.map(k=>'<li>'+k+'</li>').join('')+'</ol>')+
   sec('Variables','<p>'+r.vars+'</p>')+
   sec('Analysis','<p>'+r.analysis+'</p>')+
   sec('Improving accuracy','<p>'+r.accuracy+'</p>')+
   sec('Safety','<p>'+r.safety+'</p>')+
  '</div>'+
  '<button class="btn" id="rpq">Quiz on this practical</button></div>';
  document.getElementById('rpq').onclick=()=>rpQuiz(i);
  window.scrollTo(0,0);
}
let RQ=null;
function rpQuiz(i){
  const pool=i<0?RPS.flatMap((r,ri)=>r.quiz.map(q=>[ri,q])):RPS[i].quiz.map(q=>[i,q]);
  const pick10=shuffle(pool.slice()).slice(0,i<0?10:3);
  RQ={which:i,items:pick10.map(([ri,q])=>({ri,prompt:q[0],right:q[1][0],wrong:q[1].slice(1),explain:q[2],opts:shuffle([{h:q[1][0],ok:true}].concat(q[1].slice(1).map(w=>({h:w,ok:false}))))})),k:0,ok:0,res:[]};
  rqRender();
}
function rqRender(){
  setBack(()=>{if(confirm('Leave this quiz?'))(RQ.which<0?rpHome():rpView(RQ.which));});
  setScratch(true);
  const it=RQ.items[RQ.k];
  app.innerHTML=
  '<div class="stack"><div class="top"><span class="count">'+(RQ.k+1)+' / '+RQ.items.length+'</span><span class="eyebrow">'+RPS[it.ri].t+'</span></div>'+
  '<div class="bar"><i style="width:'+(RQ.k/RQ.items.length*100)+'%"></i></div>'+
  '<div class="card"><p class="prompt">'+it.prompt+'</p><div class="opts">'+it.opts.map((o,k)=>'<button class="opt" data-k="'+k+'"><span class="k">'+LETTERS[k]+'</span><span>'+o.h+'</span></button>').join('')+'</div><div id="rqfb"></div></div></div>';
  const btns=[...app.querySelectorAll('.opt')];
  btns.forEach(b=>b.onclick=()=>{
    const k=+b.dataset.k,ok=it.opts[k].ok;
    btns.forEach((x,j)=>{x.disabled=true;if(it.opts[j].ok)x.classList.add('right');});
    if(!ok)b.classList.add('wrong');
    if(ok)RQ.ok++;
    const vid=videoFor('phy',RPS[it.ri].topic);
    if(!ok)mbAdd({src:'Required practicals',prompt:it.prompt,right:it.right,wrong:it.wrong,explain:it.explain,vid,yt:'AQA A level physics required practical '+RPS[it.ri].t});
    RQ.res.push({ok,prompt:it.prompt,chosen:it.opts[k].h,right:it.right,explain:it.explain,vid,yt:'AQA A level physics required practical '+RPS[it.ri].t});
    document.getElementById('rqfb').innerHTML='<div class="fb"><b class="'+(ok?'ok':'no')+'">'+(ok?'Correct.':'Not quite.')+'</b><p class="note">'+it.explain+'</p><button class="btn" id="rqnx">'+(RQ.k+1<RQ.items.length?'Next':'Finish')+'</button></div>';
    document.getElementById('rqnx').onclick=()=>{RQ.k++;if(RQ.k<RQ.items.length)rqRender();else rqDone();};
  });
  window.scrollTo(0,0);
}
function rqDone(){
  setScratch(false);setBack(()=>RQ.which<0?rpHome():rpView(RQ.which));
  if(RQ.which>=0){const d=loadJSON('rp-quiz',{}),c=d[RQ.which]||{best:0};c.best=Math.max(c.best,RQ.ok);d[RQ.which]=c;saveJSON('rp-quiz',d);}
  app.innerHTML='<div class="stack"><p class="eyebrow">Required practicals</p><h1>'+RQ.ok+' / '+RQ.items.length+'</h1>'+reviewHtml(RQ.res)+
   '<button class="btn" id="rqagain">Try again</button><button class="btn ghost" id="rqback">Back</button></div>';
  document.getElementById('rqagain').onclick=()=>rpQuiz(RQ.which);
  document.getElementById('rqback').onclick=()=>RQ.which<0?rpHome():rpView(RQ.which);
  window.scrollTo(0,0);
}
