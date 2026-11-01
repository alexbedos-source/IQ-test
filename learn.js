/* =====================  Flashcards, bridging topics, problem of the week, resources  ===================== */

/* ---------- flashcards (Leitner spaced repetition) ---------- */
/* AQA A-level Physics (7408) only: what you must learn yourself. Constants and formulas printed on the
   AQA data and formulae booklet are deliberately left out. Ids are 'a' + index: append only. */
const CARD_CATS=['Measurements and errors','Particles and radiation','Waves','Mechanics and materials','Electricity','Further mechanics and thermal','Fields','Nuclear physics'];
const CARDS=[
 [0,'The six SI base units used in AQA Physics','kg (mass), m (length), s (time), A (current), K (temperature), mol (amount of substance)'],
 [0,'Precision','Measurements are precise if they are close to each other (little spread). Says nothing about the true value.'],
 [0,'Accuracy','A measurement is accurate if it is close to the true value.'],
 [0,'Repeatable vs reproducible','Repeatable: same person, method and equipment gives the same result. Reproducible: the same result with a different person, method or equipment.'],
 [0,'Systematic vs random errors','Systematic: the same shift every time (e.g. zero error); not reduced by repeating. Random: unpredictable scatter; reduced by averaging repeats.'],
 [0,'Combining uncertainties','Adding or subtracting: add absolute uncertainties. Multiplying or dividing: add percentage uncertainties. Raising to a power n: multiply the percentage uncertainty by n.'],
 [0,'Resolution of an instrument','The smallest change in the quantity that it can detect.'],
 [1,'Specific charge','Charge ÷ mass of a particle or nucleus, in C kg⁻¹.'],
 [1,'Isotopes','Atoms with the same number of protons but different numbers of neutrons.'],
 [1,'Range and nature of the strong nuclear force','Attractive up to about 3 fm; repulsive below about 0.5 fm. Holds nucleons together.'],
 [1,'Hadrons, baryons and mesons','Hadrons feel the strong force. Baryons are three quarks (proton, neutron); mesons are a quark and an antiquark (pions, kaons).'],
 [1,'Quark content of the proton and neutron','Proton: uud. Neutron: udd.'],
 [1,'Quark content of π⁺, π⁰ and K⁺','π⁺ = ud̄; π⁰ = uū or dd̄; K⁺ = us̄.'],
 [1,'Leptons','Electron, muon and neutrinos (plus antiparticles). They do not feel the strong force. Muons decay into electrons.'],
 [1,'What is conserved in particle interactions','Always: charge, baryon number, lepton number (electron and muon separately), energy and momentum. Strangeness: conserved in strong interactions, can change by ±1 in weak.'],
 [1,'Exchange particles (AQA)','Electromagnetic: virtual photon. Weak: W⁺ and W⁻ bosons. Strong force between nucleons: pions.'],
 [1,'Pair production and annihilation','Pair production: a photon with energy ≥ 2mc² creates a particle–antiparticle pair. Annihilation: a particle and antiparticle meet and become two photons.'],
 [1,'Threshold frequency','The minimum frequency of light that releases photoelectrons from a metal surface.'],
 [1,'Why the photoelectric effect supports the photon model','Emission is instant and needs f above a threshold, however bright the light; one photon gives all its energy to one electron.'],
 [1,'The electronvolt','The energy gained by an electron accelerated through a pd of 1 V.'],
 [1,'Excitation vs ionisation','Excitation: an electron moves to a higher energy level. Ionisation: an electron is removed from the atom completely.'],
 [1,'How a fluorescent tube produces visible light','Electrons excite mercury atoms, which emit UV when they de-excite. The phosphor coating absorbs UV and re-emits visible light.'],
 [1,'What line spectra show','Atoms have discrete energy levels: each line is a photon whose energy equals the difference between two levels.'],
 [1,'Evidence for wave–particle duality','Light: diffraction and interference (wave); photoelectric effect (particle). Electrons: electron diffraction (wave); deflection by fields (particle).'],
 [2,'Transverse vs longitudinal waves','Transverse: oscillations perpendicular to the direction of energy transfer (EM waves). Longitudinal: parallel (sound).'],
 [2,'Polarisation','Restricting oscillations to one plane. Only transverse waves can be polarised. Uses: Polaroid sunglasses, aligning TV aerials.'],
 [2,'How a stationary wave forms','Two waves of the same frequency and amplitude travelling in opposite directions superpose, giving fixed nodes and antinodes. No net energy transfer.'],
 [2,'Phase in a stationary wave','All points between two adjacent nodes oscillate in phase; points in adjacent loops are in antiphase.'],
 [2,'Coherent sources','Same frequency (wavelength) and a constant phase difference.'],
 [2,'Path difference for constructive and destructive interference','Constructive: a whole number of wavelengths, nλ. Destructive: (n + ½)λ.'],
 [2,'Single-slit diffraction pattern (monochromatic light)','A bright central maximum twice as wide as the others, with dimmer side maxima. A narrower slit or longer wavelength widens it. White light gives a white centre with coloured fringes.'],
 [2,'Optical fibre: role of the cladding','Lower refractive index than the core so total internal reflection occurs. It also protects the core and stops signals crossing between fibres.'],
 [2,'Modal and material dispersion','Modal: rays taking different paths arrive at different times (fix: a narrow core). Material: different wavelengths travel at different speeds (fix: monochromatic light).'],
 [2,'Laser safety','Never look into the beam or its reflections; wear safety goggles; display warning signs; avoid reflective surfaces.'],
 [3,'Scalars vs vectors','Scalars have size only (speed, mass, energy). Vectors have size and direction (velocity, force, momentum).'],
 [3,'Principle of moments','For an object in equilibrium, the sum of clockwise moments equals the sum of anticlockwise moments about any point.'],
 [3,'Centre of mass','The single point through which the whole weight of an object appears to act.'],
 [3,'Couple','Two equal, opposite, parallel forces that do not act along the same line. Moment = one force × perpendicular distance between them.'],
 [3,'Newton\'s three laws','1: an object stays at rest or constant velocity unless a resultant force acts. 2: resultant force = rate of change of momentum. 3: if A exerts a force on B, B exerts an equal and opposite force on A.'],
 [3,'What the gradient and area of a velocity–time graph give','Gradient: acceleration. Area under the graph: displacement.'],
 [3,'Elastic vs inelastic collisions','Elastic: kinetic energy is conserved. Inelastic: some kinetic energy is transferred to other forms. Momentum is conserved in both (no external forces).'],
 [3,'Limit of proportionality, elastic limit and yield point','Limit of proportionality: Hooke\'s law stops applying. Elastic limit: beyond it, deformation is permanent. Yield point: the material stretches a lot for little extra force.'],
 [3,'Brittle, ductile and plastic','Brittle: breaks with little or no plastic deformation (glass). Ductile: can be drawn into wires (copper). Plastic deformation: permanent.'],
 [3,'Breaking stress (ultimate tensile stress)','The maximum stress a material can withstand before it breaks.'],
 [3,'Loading and unloading curves for rubber','They differ (hysteresis). The area between them is the energy dissipated as heat.'],
 [3,'Terminal speed','Drag (plus upthrust) balances the driving force or weight, so the resultant force is zero and the speed is constant.'],
 [3,'Projectile motion (no air resistance)','Horizontal and vertical motions are independent: constant horizontal velocity, vertical acceleration g downwards.'],
 [4,'Ohm\'s law','The current through a conductor is directly proportional to the pd across it, provided the temperature and other physical conditions stay constant.'],
 [4,'I–V characteristic of a filament lamp','An S-shaped curve through the origin: the gradient falls as current rises, because resistance increases as the filament heats up.'],
 [4,'I–V characteristic of a semiconductor diode','Conducts in the forward direction above about 0.6 V (silicon); very high resistance in the reverse direction.'],
 [4,'Resistivity','A property of the material: the resistance of a sample 1 m long with 1 m² cross-sectional area. Units Ω m.'],
 [4,'Superconductor','A material with zero resistivity below its critical temperature. Uses: strong magnetic fields (MRI, particle accelerators), loss-free power cables.'],
 [4,'Kirchhoff\'s laws','First: total current into a junction = total current out (conservation of charge). Second: sum of emfs = sum of pds round any closed loop (conservation of energy).'],
 [4,'Potential divider with an LDR or thermistor','The output pd is shared in proportion to resistance. LDR resistance falls as light increases; NTC thermistor resistance falls as temperature rises.'],
 [4,'Emf vs terminal pd','Emf: energy transferred per coulomb by the source. Terminal pd = emf minus the "lost volts" across the internal resistance.'],
 [4,'The volt and the ohm','1 V = 1 J C⁻¹. 1 Ω = 1 V A⁻¹.'],
 [5,'The radian','The angle subtended at the centre of a circle by an arc equal in length to the radius.'],
 [5,'Condition for simple harmonic motion','Acceleration is directly proportional to displacement from equilibrium and always directed towards it.'],
 [5,'SHM: where speed and acceleration are greatest','Speed is greatest at equilibrium; acceleration is greatest at maximum displacement (where speed is zero).'],
 [5,'Light, critical and heavy damping','Light: amplitude decays gradually. Critical: returns to equilibrium in the shortest time without oscillating. Heavy: returns slowly without oscillating.'],
 [5,'Free vs forced oscillations','Free: no external driving force; oscillates at its natural frequency. Forced: driven by a periodic external force at the driving frequency.'],
 [5,'Resonance','Amplitude becomes very large when the driving frequency equals the natural frequency. More damping lowers and broadens the peak.'],
 [5,'Internal energy','The sum of the randomly distributed kinetic and potential energies of all the particles in a body.'],
 [5,'Specific heat capacity (definition)','The energy needed to raise the temperature of 1 kg of a substance by 1 K without a change of state.'],
 [5,'Specific latent heat (definition)','The energy needed to change the state of 1 kg of a substance without a change of temperature.'],
 [5,'Absolute zero','0 K (−273 °C): the lowest possible temperature, where particles have minimum internal energy.'],
 [5,'Boyle\'s law, Charles\'s law and the pressure law','Boyle: pV constant at constant T. Charles: V/T constant at constant p. Pressure law: p/T constant at constant V.'],
 [5,'Assumptions of the kinetic theory of gases','Many molecules in random motion; negligible molecular volume; elastic collisions; collision time negligible; no forces between molecules except during collisions.'],
 [5,'Brownian motion','The random motion of smoke particles, caused by collisions with fast-moving air molecules: evidence for the existence of atoms.'],
 [6,'Gravitational field strength (definition)','The force per unit mass on a small test mass placed at that point.'],
 [6,'Gravitational potential (definition)','The work done per unit mass to move a small mass from infinity to that point. Zero at infinity and negative elsewhere.'],
 [6,'Equipotentials','Surfaces of equal potential. No work is done moving along them; they are perpendicular to field lines.'],
 [6,'Geostationary satellite','Orbits above the equator with a 24-hour period in the same direction as the Earth rotates, so it stays above one point. Used for communications.'],
 [6,'Escape velocity (derive it)','Kinetic energy = energy needed to reach infinity: ½mv² = GMm/r, so v = √(2GM/r). It is independent of the object\'s mass.'],
 [6,'Electric field strength (definition)','The force per unit positive charge on a small test charge placed at that point.'],
 [6,'Capacitor charging and discharging graphs','Discharging: Q, V and I all decay exponentially. Charging: Q and V rise towards a maximum while I decays. After one time constant, values fall to 37% (or rise to 63%).'],
 [6,'Dielectric in a capacitor','Polar molecules in the insulator align with the field, opposing it, so more charge is stored for the same pd. Measured by relative permittivity εr.'],
 [6,'Fleming\'s left-hand rule','First finger: field (N to S). Second finger: conventional current. Thumb: motion (force).'],
 [6,'Magnetic flux density (definition)','The force per unit length per unit current on a conductor perpendicular to the field. 1 T = 1 N A⁻¹ m⁻¹.'],
 [6,'Faraday\'s law and Lenz\'s law','Faraday: induced emf is proportional to the rate of change of flux linkage. Lenz: the induced current opposes the change that produces it.'],
 [6,'Charged particle moving across a magnetic field','It moves in a circle, because the force is always perpendicular to its velocity. Used in cyclotrons.'],
 [6,'Energy losses in a transformer and how to reduce them','Eddy currents: laminated core. Coil resistance: thick, low-resistance wire. Hysteresis: soft iron core. Flux leakage: wind coils on the same core.'],
 [6,'Why power is transmitted at high voltage','Lower current for the same power, so less I²R heating in the cables.'],
 [7,'Conclusions from Rutherford scattering','Most alpha particles pass straight through: the atom is mostly empty space. A few are deflected through large angles: there is a small, dense, positive nucleus.'],
 [7,'Penetrating power of α, β and γ','Alpha: stopped by paper or a few cm of air. Beta: stopped by a few mm of aluminium. Gamma: reduced by several cm of lead.'],
 [7,'Ionising power of α, β and γ','Alpha is most strongly ionising, then beta; gamma is the least.'],
 [7,'Sources of background radiation','Radon gas, rocks and buildings, cosmic rays, food and drink, medical sources, the nuclear industry.'],
 [7,'Why gamma intensity follows an inverse-square law','From a point source, the radiation spreads out over a sphere of area 4πr², and air barely absorbs it.'],
 [7,'Binding energy','The energy needed to separate a nucleus into its individual nucleons; equivalent to the mass defect.'],
 [7,'Binding energy per nucleon curve','Peaks near iron-56. Fusing light nuclei or splitting heavy nuclei increases it, releasing energy.'],
 [7,'Induced fission and the chain reaction','U-235 absorbs a thermal neutron, splits into two daughter nuclei and releases 2–3 neutrons, which can cause further fissions.'],
 [7,'Critical mass','The minimum mass of fissile fuel needed to sustain a chain reaction.'],
 [7,'Moderator, control rods and coolant','Moderator (water or graphite) slows neutrons to thermal speeds. Control rods (boron) absorb neutrons. Coolant transfers heat away.'],
 [7,'Methods of estimating nuclear radius','Distance of closest approach of alpha particles (an upper limit), and electron diffraction (more accurate).'],
 [7,'Nuclear density','Roughly the same for all nuclei (about 10¹⁷ kg m⁻³), because R ∝ A^(1/3) so volume ∝ A.'],
 [0,'Zero error','A reading shown when the true value is zero, e.g. a micrometer that does not read 0.00 mm when closed. It is a systematic error: subtract it from every reading.'],
 [0,'Anomalous result','A reading that does not fit the pattern. Check it and repeat it; leave it out of the mean if it was a mistake.'],
 [4,'Why ammeters have very low resistance and voltmeters very high resistance','An ammeter is in series, so it must not reduce the current. A voltmeter is in parallel, so it must draw almost no current and not change the pd it measures.'],
 [4,'Current and pd in series and parallel','Series: the same current through each component, and the pds add up. Parallel: the same pd across each branch, and the currents add up.'],
 [2,'Monochromatic vs coherent light','Monochromatic: a single wavelength. Coherent: the same frequency with a constant phase difference. Lasers are both.'],
 [2,'Double-slit pattern with white light','A white central maximum with coloured fringes either side, blue nearest the centre and red furthest out, because fringe spacing depends on wavelength.'],
 [0,'Uncertainty from repeated readings','Half the range: (largest value − smallest value) ÷ 2.'],
 [0,'Percentage difference from an accepted value','(Experimental − accepted) ÷ accepted × 100%. If it is smaller than the percentage uncertainty, the result agrees with the accepted value.'],
 [4,'Adding a resistor in parallel','The total resistance decreases: the current has an extra path, so the total is less than the smallest branch resistance.'],
 [4,'Why terminal pd falls as more current is drawn','More current means more lost volts (Ir) across the internal resistance, so less pd is left for the external circuit.'],
 [2,'What sets the pitch and loudness of a sound','Pitch: frequency. Loudness: amplitude (intensity is proportional to amplitude squared).'],
 [2,'Why a diffraction grating gives sharp maxima','With many slits, waves only reinforce at exact angles where d sinθ = nλ and cancel almost everywhere else, giving bright, narrow maxima.']
].map((c,i)=>({id:'a'+i,cat:c[0],front:c[1],back:c[2]}));
const BOX_DAYS=[0,1,2,4,8,16,32];
const NEW_PER_DAY=10;
function cardState(){return loadJSON('cards',{s:{},newDay:null,newCount:0});}
function cardsDue(st,topic=-1){
  const now=Date.now(),pool=CARDS.filter(c=>topic<0||c.cat===topic);
  const due=pool.filter(c=>st.s[c.id]&&st.s[c.id].due<=now);
  const today=dayKey();
  const newLeft=st.newDay===today?Math.max(0,NEW_PER_DAY-st.newCount):NEW_PER_DAY;
  const fresh=pool.filter(c=>!st.s[c.id]).slice(0,newLeft);
  return {due,fresh};
}
let CS=null,cardTopic=-1;
function cardsHome(){
  leave();
  const st=cardState(),{due,fresh}=cardsDue(st,cardTopic);
  const pool=CARDS.filter(c=>cardTopic<0||c.cat===cardTopic),unseen=pool.filter(c=>!st.s[c.id]);
  const boxes=[0,0,0,0,0,0,0];CARDS.forEach(c=>{const s=st.s[c.id];boxes[s?s.box:0]++;});
  app.innerHTML=
  '<div class="stack">'+
  '<div class="stack" style="gap:8px"><p class="eyebrow">Daily training</p><h1>Flashcards</h1>'+
  '<p class="muted">AQA A-level Physics: definitions, laws, particle facts and graph shapes you have to learn. Constants and formulas on the AQA data booklet are left out. Cards you know come back less and less often; cards you miss come back tomorrow.</p></div>'+
  '<div class="chips">'+['All topics'].concat(CARD_CATS).map((n,i)=>'<button class="chip'+(cardTopic===i-1?' on':'')+'" data-t="'+(i-1)+'">'+n+'</button>').join('')+'</div>'+
  '<div class="facts"><div class="fact"><b>'+due.length+'</b><span>due now</span></div><div class="fact"><b>'+fresh.length+'</b><span>new today</span></div><div class="fact"><b>'+(boxes[4]+boxes[5]+boxes[6])+'</b><span>well known</span></div></div>'+
  '<button class="btn" id="cgo"'+(due.length+fresh.length?'':' disabled')+'>'+(due.length+fresh.length?'Review '+(due.length+fresh.length)+' cards':'Today\'s cards done')+'</button>'+
  '<div class="row2"><button class="btn ghost" id="cmore"'+(unseen.length>fresh.length?'':' disabled')+'>Learn 10 more</button><button class="btn ghost" id="cprac">Practise 20 cards</button></div>'+
  '<p class="note">10 new cards a day is the suggested pace for spaced repetition, but you can learn more or practise any time.</p>'+
  '<div class="card stack"><h2>Your deck</h2><div class="cats">'+['New','1-day box','2-day box','4-day box','8-day box','16-day box','32-day box'].map((n,i)=>{const v=boxes[i];
    return '<div class="cr"><span class="n">'+n+'</span><span class="v">'+v+'</span><div class="t"><i style="width:'+(100*v/CARDS.length)+'%"></i></div></div>';}).join('')+'</div>'+
   '<p class="note">'+CARDS.length+' cards across '+CARD_CATS.length+' AQA topics.</p></div>'+
  '<button class="btn ghost" id="cback">Home</button>'+
  '</div>';
  app.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{cardTopic=+b.dataset.t;cardsHome();});
  document.getElementById('cgo').onclick=()=>{CS={list:shuffle(due.concat(fresh)),i:0,ok:0};cardRender();};
  /* beyond the daily suggestion: the next 10 unseen cards, ignoring the new-card limit */
  document.getElementById('cmore').onclick=()=>{CS={list:shuffle(unseen.filter(c=>!fresh.includes(c)).slice(0,10).concat(fresh)).slice(0,10+fresh.length),i:0,ok:0};cardRender();};
  /* free practice: any 20 cards from this topic, weakest first */
  document.getElementById('cprac').onclick=()=>{const box=c=>st.s[c.id]?st.s[c.id].box:0;
    CS={list:shuffle(pool.slice().sort((a,b)=>box(a)-box(b)).slice(0,20)),i:0,ok:0};cardRender();};
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
  setBack(topicsHome);setScratch(true);
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
,
 ['A ball is thrown upwards at 20 m/s from the top of a 25 m cliff, and misses the edge on the way down. When does it hit the ground below, and how fast is it going?',
  'Taking up as positive: −25 = 20t − 4.9t², so 4.9t² − 20t − 25 = 0 and t = (20 + √890)/9.8 ≈ <b>5.1 s</b>. Energy (or v² = u² + 2as): v² = 20² + 2 × 9.8 × 25 = 890, so <b>v ≈ 29.8 m/s</b>, whatever the launch direction.'],
 ['A uniform 4 m plank of mass 20 kg rests on two supports, each 1 m from an end. A 60 kg person walks out past one support. How far past it can they go before the plank tips?',
  'At the point of tipping, the far support carries no load, so take moments about the near support. The plank\'s centre of mass is 1 m on the other side: 20g × 1 = 60g × x, giving <b>x = 1/3 m</b>. They can only go a third of a metre past the support, not to the end.'],
 ['(University level) Find the moment of inertia of a uniform solid sphere of mass M and radius R about a diameter.',
  'Slice it into thin discs perpendicular to the axis. A disc at height z has radius r with r² = R² − z² and mass dm = ρπr² dz, and contributes ½r² dm. So I = ½ρπ ∫ (R² − z²)² dz from −R to R = ½ρπ × 16R⁵/15 = 8ρπR⁵/15. With M = (4/3)πR³ρ, <b>I = (2/5)MR²</b>.'],
 ['(University level) A capacitor C is charged through a resistor R by a battery of emf ε. Show that exactly half the energy supplied by the battery is lost as heat, whatever R is.',
  'The battery moves charge Q = Cε through emf ε, supplying W = Cε². The capacitor stores ½Cε². With I = (ε/R)e^(−t/RC), the heat is ∫I²R dt = (ε²/R) × RC/2 = ½Cε². <b>Half is lost</b>, independent of R: a smaller R just means a bigger current for a shorter time.'],
 ['(University level) Show that a planet moving under any central force sweeps out equal areas in equal times (Kepler\'s second law).',
  'A central force acts along r, so the torque r × F = 0 and the angular momentum L = mr²θ̇ is constant. The area swept in time dt is dA = ½r²dθ, so dA/dt = ½r²θ̇ = <b>L/2m = constant</b>. This works for any central force, not just inverse-square ones.'],
 ['(University level) A rocket in deep space ejects exhaust at speed u relative to itself. Show that its final speed depends only on u and the ratio of initial to final mass, not on how quickly the fuel is burned.',
  'In time dt, mass dm of exhaust leaves backwards at u relative to the rocket. Momentum conservation gives m dv = −u dm. Integrating from m₀ to m: <b>v = u ln(m₀/m)</b>. Only u and the mass ratio appear, so burning quickly or slowly gives the same final speed (with no gravity or drag).'],
 ['A tennis ball sits on top of a basketball and they are dropped together from height h. Assuming perfectly elastic bounces and a much lighter tennis ball, how high does the tennis ball go?',
  'Both hit the ground at speed v. The basketball rebounds upwards at v and meets the tennis ball still coming down at v. In the basketball\'s frame the tennis ball approaches at 2v and bounces back at 2v, so in the ground frame it leaves at 3v. Height ∝ v², so it rises to <b>9h</b> (in reality much less, because of energy losses).'],
 ['(University level) The period of a pendulum only stays the same for small swings. Estimate how much longer the period is for a 30° amplitude.',
  'The next term in the series is T ≈ T₀(1 + θ₀²/16), with θ₀ in radians. For 30°, θ₀ = 0.524, so θ₀²/16 ≈ 0.017: the period is about <b>1.7% longer</b>. A pendulum clock with a wide swing therefore loses about 25 minutes a day compared with a small swing.'],
 ['A uniform rope of length L hangs vertically from a ceiling. How long does a small transverse pulse take to travel from the bottom to the top?',
  'At height y above the bottom, the tension supports the rope below: T = μgy, so the wave speed is v = √(T/μ) = √(gy). Then t = ∫₀^L dy/√(gy) = <b>2√(L/g)</b>. For a 4 m rope that is about 1.3 s.']
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
  setScratch(true);
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
