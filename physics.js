/* =====================  Physics interview practice  =====================
   Open-ended questions in the style used at Oxford physics interviews.
   These are written for this app (not copied from Oxford), each with
   progressive hints and a worked answer. Official material is linked, not copied. */

const PHY_TOPICS=['Estimation','Mechanics','Maths and graphs','Waves and optics','Electricity and magnetism','Thermal physics','Gravity and astrophysics','Everyday physics'];

const PHY=[
/* ---------- Estimation ---------- */
{id:'e1',t:0,l:1,q:'Estimate the mass of the air in the room you are sitting in.',
 h:['Break it into two numbers you can estimate separately: the volume of the room and the density of air.',
    'A typical room might be 5 m × 4 m × 2.5 m. Air density at room conditions is about 1.2 kg/m³. If you did not know that, you could get it from the molar mass of air (≈ 29 g/mol) and the fact that a mole of gas occupies about 24 litres.'],
 a:'<p>Volume ≈ 5 × 4 × 2.5 = 50 m³. Density of air ≈ 1.2 kg/m³ (29 g per 24 litres).</p><p>Mass ≈ 50 × 1.2 ≈ <b>60 kg</b>, roughly the mass of a person, which surprises most people.</p><p>What tutors look for: stating assumptions clearly, sensible round numbers, and a sanity check at the end.</p>'},
{id:'e2',t:0,l:2,q:'Roughly how many atoms are there in your body?',
 h:['Your body is mostly water. Start from your mass.',
    'One mole of water (18 g) contains three atoms per molecule, so the average mass per atom is about 6 g/mol. Avogadro\'s number is 6 × 10²³.'],
 a:'<p>Take 70 kg, treated as water. Average atomic mass ≈ 18/3 = 6 g/mol, so moles of atoms ≈ 70 000 / 6 ≈ 1.2 × 10⁴.</p><p>Atoms ≈ 1.2 × 10⁴ × 6 × 10²³ ≈ <b>7 × 10²⁷</b>.</p><p>Including heavier carbon and oxygen in tissue barely changes the order of magnitude: the answer is "about 10²⁸".</p>'},
{id:'e3',t:0,l:2,q:'How much does the Earth\'s atmosphere weigh?',
 h:['What does atmospheric pressure actually measure?',
    'Pressure at the surface is the weight of the air above each square metre: about 10⁵ Pa. Multiply by the surface area of the Earth (radius ≈ 6400 km).'],
 a:'<p>Surface area = 4πR² ≈ 4π × (6.4 × 10⁶)² ≈ 5 × 10¹⁴ m².</p><p>Total weight = pressure × area ≈ 10⁵ × 5 × 10¹⁴ = 5 × 10¹⁹ N, so the mass is about 5 × 10¹⁹ / 10 ≈ <b>5 × 10¹⁸ kg</b>.</p><p>A neat follow-up: this is about a millionth of the Earth\'s mass (6 × 10²⁴ kg).</p>'},
{id:'e4',t:0,l:2,q:'Estimate the power output of the Sun, using only things you could measure on Earth.',
 h:['How much solar power falls on each square metre at the top of the atmosphere? (It is a little over 1 kW.)',
    'That power is spread evenly over a sphere whose radius is the Earth–Sun distance, 1.5 × 10¹¹ m.'],
 a:'<p>Solar constant ≈ 1.4 kW/m². Sphere area = 4π(1.5 × 10¹¹)² ≈ 2.8 × 10²³ m².</p><p>Power ≈ 1.4 × 10³ × 2.8 × 10²³ ≈ <b>4 × 10²⁶ W</b>.</p><p>You could then ask how long the Sun could shine by burning chemical fuel (thousands of years) versus fusion (billions), which is how nuclear energy was inferred historically.</p>'},
{id:'e5',t:0,l:1,q:'How fast does human hair grow, in metres per second?',
 h:['Think about how often people get haircuts, and how much is cut off.',
    'About 1 cm per month is a reasonable figure. How many seconds are in a month?'],
 a:'<p>About 1 cm per month. A month ≈ 30 × 24 × 3600 ≈ 2.6 × 10⁶ s.</p><p>Speed ≈ 0.01 / 2.6 × 10⁶ ≈ <b>4 × 10⁻⁹ m/s</b>, or about 4 nm per second.</p><p>Fun comparison: that is a few atomic diameters every second.</p>'},
{id:'e6',t:0,l:3,q:'How many of the air molecules from Julius Caesar\'s last breath are in your next breath?',
 h:['You need two numbers: how many molecules are in one breath, and how many are in the whole atmosphere.',
    'A breath is about half a litre, and a mole of gas is about 24 litres. The atmosphere has mass ≈ 5 × 10¹⁸ kg and molar mass ≈ 0.029 kg/mol.',
    'Assume Caesar\'s breath has had 2000 years to mix evenly through the atmosphere. The expected number you inhale is (molecules per breath)² / (molecules in atmosphere).'],
 a:'<p>One breath ≈ 0.5/24 mol ≈ 0.02 mol ≈ 1.2 × 10²² molecules.</p><p>Atmosphere ≈ 5 × 10¹⁸ / 0.029 ≈ 1.7 × 10²⁰ mol ≈ 10⁴⁴ molecules.</p><p>The fraction of the atmosphere that was Caesar\'s breath is 1.2 × 10²² / 10⁴⁴ ≈ 10⁻²². Your breath of 10²² molecules therefore contains about <b>one</b> of his molecules on average.</p><p>Good things to mention: the mixing assumption, and that some molecules (e.g. CO₂, water) are recycled by plants and the sea.</p>'},
{id:'e7',t:0,l:1,q:'Roughly how much energy is stored in an AA battery? Is that a lot?',
 h:['Batteries are labelled with a voltage and sometimes a capacity in milliamp-hours.',
    'An AA cell is 1.5 V with a capacity of about 2000 mAh. Energy = voltage × charge.'],
 a:'<p>Charge = 2 A·h = 2 × 3600 = 7200 C. Energy = 1.5 × 7200 ≈ <b>10⁴ J</b>.</p><p>Comparison: lifting yourself (70 kg) up about 15 m, or a single biscuit (≈ 2 × 10⁵ J) contains twenty times more energy. Chemical fuels are far more energy-dense than batteries.</p>'},

/* ---------- Mechanics ---------- */
{id:'m1',t:1,l:3,q:'Imagine a straight tunnel drilled through the centre of the Earth. You jump in. Describe your motion and estimate how long it takes to reach the other side.',
 h:['Assume uniform density and no air resistance. Inside a uniform sphere, only the mass closer to the centre than you pulls on you.',
    'The enclosed mass scales as r³ and gravity as M/r², so the force is proportional to r. What kind of motion has a restoring force proportional to displacement?',
    'Simple harmonic motion with ω² = g/R. The period is 2π√(R/g).'],
 a:'<p>At radius r, enclosed mass is M(r/R)³, so g(r) = g·r/R. The force points to the centre and is proportional to distance: simple harmonic motion with ω = √(g/R).</p><p>Period T = 2π√(R/g) = 2π√(6.4 × 10⁶ / 9.8) ≈ 2π × 800 ≈ 5000 s ≈ 84 minutes. The trip across is half a period: <b>about 42 minutes</b>.</p><p>Nice extras: you pass the centre at about 8 km/s, and the period equals that of a satellite skimming the surface. In fact the trip takes 42 minutes for <em>any</em> straight tunnel between two points, not just through the centre.</p>'},
{id:'m2',t:1,l:1,q:'Ignoring air resistance, at what angle should you throw a ball to get it as far as possible? What changes if there is air resistance?',
 h:['Split the launch velocity into horizontal and vertical parts. Time in the air depends on the vertical part; distance depends on both.',
    'Range R = v² sin(2θ) / g. When is sin(2θ) largest?'],
 a:'<p>Time of flight = 2v sinθ / g, horizontal speed = v cosθ, so R = 2v² sinθ cosθ / g = v² sin2θ / g. This is maximised at <b>θ = 45°</b>.</p><p>With air resistance, the ball loses speed faster on long, high paths, so the best angle is lower (often 35–40° for a ball). Launching from a height above the landing point also lowers the optimum, which is why shot-putters release at about 37°.</p>'},
{id:'m3',t:1,l:2,q:'You are in a rowing boat on a small pond, holding a heavy rock. You throw the rock into the water. Does the water level of the pond go up, down, or stay the same?',
 h:['While the rock is in the boat, how much water does it displace? (Think about floating.)',
    'A floating object displaces its own weight of water. A sunken object displaces its own volume. Which is bigger for a rock?'],
 a:'<p>In the boat, the rock adds to the floating weight, so it displaces water equal to its <em>weight</em>. Rock is about 2.5 times denser than water, so that is 2.5 times its own volume.</p><p>On the bottom, it displaces only its own <em>volume</em>.</p><p>So less water is displaced afterwards: the level <b>falls</b>, slightly.</p>'},
{id:'m4',t:1,l:2,q:'A solid ball rolls without slipping down a ramp. An identical block slides down an identical, frictionless ramp. Which reaches the bottom first, and why?',
 h:['Use energy conservation. Where does the lost gravitational energy go in each case?',
    'For the rolling ball, some energy goes into spinning. For a solid sphere the rotational energy is (1/5)mv², compared with (1/2)mv² translational.'],
 a:'<p>Sliding block: mgh = ½mv², so v² = 2gh.</p><p>Rolling solid sphere: mgh = ½mv² + ½Iω² with I = (2/5)mr², ω = v/r, giving mgh = (7/10)mv², so v² = (10/7)gh.</p><p>The block is faster at every height, so <b>the sliding block wins</b>. The rolling ball "wastes" 2/7 of its energy on spinning. Notice the answer does not depend on mass or radius, only on the shape (a hollow ball would be slower still).</p>'},
{id:'m5',t:1,l:1,q:'If you can jump 50 cm high on Earth, how high could you jump on the Moon?',
 h:['Your legs give you the same take-off speed on the Moon as on Earth.',
    'The height reached is v²/2g. The Moon\'s surface gravity is about one sixth of Earth\'s.'],
 a:'<p>Same take-off speed v, height h = v²/2g. With g six times smaller, h is <b>six times larger: about 3 m</b>.</p><p>Refinements to mention: "jump height" usually means the rise of your centre of mass; a bulky spacesuit would reduce it a lot; and the time in the air, 2v/g, is also six times longer.</p>'},
{id:'m6',t:1,l:3,q:'A ladder leans against a smooth (frictionless) wall, standing on a rough floor. What is the smallest coefficient of friction that stops it slipping, if it makes angle θ with the floor?',
 h:['Draw the forces: weight at the middle, a horizontal push from the wall, and a normal force plus friction at the floor.',
    'Balance horizontal and vertical forces, then take moments about the foot of the ladder to avoid unknowns there.'],
 a:'<p>Let the ladder have length L and weight W. Floor: normal N, friction F. Wall: horizontal force P.</p><p>Vertical: N = W. Horizontal: F = P. Moments about the foot: P·L sinθ = W·(L/2) cosθ, so P = W / (2 tanθ).</p><p>No slip needs F ≤ μN, i.e. <b>μ ≥ 1 / (2 tanθ)</b>.</p><p>Check: a steep ladder (θ near 90°) needs almost no friction; a nearly flat one needs huge friction. That matches experience.</p>'},
{id:'m7',t:1,l:1,q:'Gravity on the International Space Station is about 90% as strong as on the ground. So why do astronauts float?',
 h:['What is the ISS actually doing?',
    'Think about what you feel in a lift whose cable has snapped.'],
 a:'<p>At 400 km altitude, g is about (6371/6771)² ≈ 0.88 of its surface value. The astronauts are not weightless in the sense of "no gravity".</p><p>They and the station are both in <b>free fall</b>, moving sideways fast enough (about 7.7 km/s) that they keep missing the Earth. Everything falls together, so nothing pushes on anything else, and that is what we feel as weightlessness.</p>'},

/* ---------- Maths and graphs ---------- */
{id:'g1',t:2,l:2,q:'Sketch the graph of y = x sin x.',
 h:['Is the function odd, even, or neither?',
    'Where is it zero? Between which two lines does it oscillate?'],
 a:'<p><b>Even</b> (x and sin x are both odd, so the product is even): the graph is symmetric about the y-axis.</p><p>Zero at x = 0 (where it touches zero like x², since x sin x ≈ x² near 0) and at every x = nπ.</p><p>It oscillates between the lines y = x and y = −x, touching them near x = (n + ½)π. So it is a wave whose amplitude grows linearly: a "widening funnel" shape.</p>'},
{id:'g2',t:2,l:2,q:'Sketch y = x e<sup>−x</sup>. Where is its maximum?',
 h:['What happens as x → +∞ and x → −∞?',
    'Differentiate with the product rule and set the derivative to zero.'],
 a:'<p>For large positive x, e<sup>−x</sup> beats x, so y → 0 from above. For large negative x, both factors grow in size with x negative, so y → −∞. It passes through the origin.</p><p>dy/dx = e<sup>−x</sup>(1 − x) = 0 at <b>x = 1</b>, where y = 1/e ≈ 0.37.</p><p>There is also a point of inflection at x = 2 (second derivative e<sup>−x</sup>(x − 2) = 0).</p>'},
{id:'g3',t:2,l:3,q:'Without a calculator, which is bigger: e<sup>π</sup> or π<sup>e</sup>?',
 h:['Take logarithms. Compare π ln e with e ln π.',
    'Dividing by eπ, you are comparing (ln x)/x at x = e and x = π. Where is (ln x)/x largest?'],
 a:'<p>Compare ln(e<sup>π</sup>) = π with ln(π<sup>e</sup>) = e ln π. Divide both by eπ: compare 1/e = (ln e)/e with (ln π)/π.</p><p>f(x) = (ln x)/x has f′(x) = (1 − ln x)/x², which is zero at x = e: f has its maximum at e. So (ln π)/π &lt; (ln e)/e.</p><p>Therefore <b>e<sup>π</sup> &gt; π<sup>e</sup></b>. (Numerically 23.1 vs 22.5.)</p>'},
{id:'g4',t:2,l:2,q:'Does 1 + 1/2 + 1/3 + 1/4 + … add up to a finite number?',
 h:['Try grouping the terms: 1/3 + 1/4, then 1/5 + … + 1/8, and so on.',
    'Each group is at least as big as one half.'],
 a:'<p>Group: 1/3 + 1/4 &gt; 2 × 1/4 = 1/2. Then 1/5 + 1/6 + 1/7 + 1/8 &gt; 4 × 1/8 = 1/2. Each doubling block adds more than 1/2.</p><p>Infinitely many halves means the sum <b>diverges</b>, even though the terms go to zero. It grows very slowly, like ln n: a million terms only sum to about 14.4.</p><p>Contrast with 1 + 1/4 + 1/9 + … which converges (to π²/6).</p>'},
{id:'g5',t:2,l:3,q:'Sketch y = sin(1/x).',
 h:['What happens for large |x|? (1/x is small.)',
    'As x approaches 0, how fast does 1/x change? How many oscillations are there between x = 0.01 and x = 0.02?'],
 a:'<p>For large |x|, sin(1/x) ≈ 1/x: the graph approaches 0, from above on the right and below on the left. The function is <b>odd</b>.</p><p>The largest value 1 occurs last at x = 2/π ≈ 0.64. Zeros sit at x = 1/(nπ), which crowd together near 0.</p><p>Close to the origin the graph oscillates between −1 and +1 infinitely often, ever faster. It is undefined at x = 0 and has no limit there.</p>'},
{id:'g6',t:2,l:2,q:'How many zeros are there at the end of 100! (100 factorial)?',
 h:['A trailing zero comes from a factor of 10 = 2 × 5. Which is rarer among the numbers 1 to 100: factors of 2 or of 5?',
    'Count multiples of 5, then remember that 25, 50, 75 and 100 each contribute an extra 5.'],
 a:'<p>Factors of 2 are plentiful, so count factors of 5.</p><p>Multiples of 5 up to 100: 20. Multiples of 25: 4 more. Total <b>24</b>.</p><p>General rule: ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + …</p>'},
{id:'g7',t:2,l:3,q:'Differentiate y = x<sup>x</sup>.',
 h:['Neither the power rule nor the exponential rule applies directly, because both base and exponent vary.',
    'Take logs first: ln y = x ln x, then differentiate both sides.'],
 a:'<p>ln y = x ln x. Differentiating: (1/y)(dy/dx) = ln x + 1.</p><p>So <b>dy/dx = x<sup>x</sup>(ln x + 1)</b>.</p><p>Follow-up: the minimum of x<sup>x</sup> for x &gt; 0 is at ln x = −1, i.e. x = 1/e.</p>'},

/* ---------- Waves and optics ---------- */
{id:'w1',t:3,l:2,q:'Why is the sky blue? And why are sunsets red?',
 h:['Sunlight contains all colours. Something in the atmosphere scatters some colours more than others.',
    'Scattering by molecules much smaller than the wavelength (Rayleigh scattering) is proportional to 1/λ⁴.'],
 a:'<p>Air molecules scatter short wavelengths much more strongly: intensity ∝ 1/λ⁴, so blue (450 nm) is scattered about 4–5 times more than red (700 nm). Looking away from the Sun, you see this scattered light, so the sky looks blue.</p><p>Why not violet? The Sun emits less violet, some is absorbed high up, and our eyes are less sensitive to it.</p><p>At sunset, light travels through far more atmosphere to reach you. Most of the blue is scattered out of the direct beam on the way, leaving <b>red and orange</b>.</p>'},
{id:'w2',t:3,l:2,q:'Why does a rainbow form an arc, and where must the Sun be when you see one?',
 h:['Light enters a spherical raindrop, reflects once off the back, and comes out again. The angle it is deviated by has a "preferred" value.',
    'That angle is about 42° for red light, measured from the point directly opposite the Sun.'],
 a:'<p>Light refracts into a drop, reflects once inside and refracts out. The returning light piles up near a deviation of about 138°, i.e. <b>42° from the antisolar point</b> (the shadow of your head). Different colours have slightly different angles because of dispersion: red on the outside (42°), violet inside (40°).</p><p>All drops that send light to your eye at 42° lie on a cone around your line of sight, so you see a circle, cut off by the ground into an arc.</p><p>The Sun must be <b>behind you</b> and fairly low: if it is higher than 42°, the whole bow is below the horizon. From a plane you can see a full circle.</p>'},
{id:'w3',t:3,l:1,q:'Why does a straw look bent where it enters a glass of water?',
 h:['Light from the underwater part of the straw changes direction as it crosses from water into air.',
    'Your brain assumes light travels in straight lines.'],
 a:'<p>Light from the submerged part refracts away from the normal as it leaves water (n ≈ 1.33) into air. Your eye traces the rays back in straight lines, so the underwater part appears higher than it is.</p><p>Looking straight down, objects appear at about <b>3/4 of their real depth</b> (real depth ÷ n). So the straw appears bent upwards at the surface.</p>'},
{id:'w4',t:3,l:2,q:'Why can you hear someone talking around a corner, but you cannot see them?',
 h:['Both sound and light are waves. What determines how much a wave spreads after passing through a gap?',
    'Compare the wavelength of each wave with the size of a doorway.'],
 a:'<p>Waves spread significantly (diffract) when the gap is comparable to their wavelength.</p><p>Speech has wavelengths around 0.3–3 m (λ = v/f with v = 340 m/s), similar to a doorway, so it diffracts strongly round corners. Visible light has λ ≈ 500 nm, about a million times smaller than the door, so it barely diffracts and travels in effectively straight lines.</p><p>Bonus: low notes go round corners better than high ones, which is why you hear the bass from a distant party.</p>'},
{id:'w5',t:3,l:1,q:'Why does a guitar string sound higher when you tighten it or press it against a fret?',
 h:['The note is set by the frequency of the standing wave on the string.',
    'The fundamental has a wavelength of twice the vibrating length, and wave speed on a string is √(T/μ), where T is tension and μ is mass per unit length.'],
 a:'<p>Fundamental frequency f = v/2L = (1/2L)√(T/μ).</p><p><b>Tightening</b> increases T, so f rises. <b>Pressing a fret</b> shortens L, so f rises. Thicker strings (larger μ) give lower notes.</p><p>Each fret shortens the string by a factor of 2<sup>1/12</sup>, so 12 frets halve the length and raise the note by an octave.</p>'},
{id:'w6',t:3,l:2,q:'How do noise-cancelling headphones work? Why are they better at blocking a low hum than a sudden clap?',
 h:['A microphone listens to the outside noise. What could the speaker play to cancel it?',
    'Producing the exact inverse wave takes processing time. Is that delay more of a problem for long or short wavelengths?'],
 a:'<p>A microphone picks up ambient sound, and the electronics play the same wave inverted (180° out of phase). The two superpose and <b>interfere destructively</b>.</p><p>Steady, low-frequency sound is predictable and has long wavelengths, so a small timing delay is a tiny fraction of a cycle. Sudden or high-pitched sounds change too quickly to predict, and a fixed delay is a large fraction of their period, so cancellation fails. The ear cups block high frequencies passively instead.</p>'},

/* ---------- Electricity and magnetism ---------- */
{id:'x1',t:4,l:1,q:'Why can a bird sit safely on a high-voltage power line?',
 h:['Current flows because of a potential difference. What is the potential difference between the bird\'s two feet?',
    'The wire between its feet has a tiny resistance compared with the bird\'s body.'],
 a:'<p>Both feet touch the same wire, a few centimetres apart. The voltage drop along that short length of thick copper is minute (millivolts), so almost no current goes through the bird.</p><p>Danger comes from touching two things at different potentials at once: a wire and the pylon, or two wires. That is why large birds with wide wingspans are at risk.</p>'},
{id:'x2',t:4,l:2,q:'If you drop a strong magnet down a vertical copper pipe, it falls very slowly. Why? Copper is not magnetic.',
 h:['As the magnet falls, the magnetic flux through each ring of the pipe is changing.',
    'A changing flux induces a current (Faraday). Which way does that current\'s own magnetic field push (Lenz)?'],
 a:'<p>The falling magnet changes the flux through rings of copper above and below it, inducing circulating <b>eddy currents</b>. By Lenz\'s law these currents create fields that oppose the change: the ring below repels the magnet and the ring above attracts it, both slowing it down.</p><p>The braking force grows with speed, so the magnet quickly reaches a slow terminal velocity. Its lost gravitational energy becomes heat in the pipe. The same principle is used in train and roller-coaster brakes.</p>'},
{id:'x3',t:4,l:2,q:'How does a microwave oven heat food?',
 h:['Water molecules have a permanent electric dipole.',
    'The oven fills with an electromagnetic wave oscillating at about 2.45 GHz. What does an oscillating electric field do to a dipole?'],
 a:'<p>The oven\'s field oscillates billions of times a second. Polar molecules, mainly water, keep trying to rotate to line up with it. Their jostling against neighbouring molecules converts that motion into random thermal energy: <b>dielectric heating</b>.</p><p>Common misconception: it is not a resonance of the water molecule. 2.45 GHz is chosen as a practical compromise for penetration depth (a few cm) and licensing. Dry foods and ice heat poorly because their molecules cannot rotate freely.</p>'},
{id:'x4',t:4,l:1,q:'After rubbing a balloon on your hair, it sticks to a neutral wall. How can a charged object attract something with no charge?',
 h:['The wall has no net charge, but its charges can still move a little.',
    'Which charges in the wall end up closer to the balloon?'],
 a:'<p>The balloon picks up extra electrons (negative). Near it, the molecules of the wall become slightly <b>polarised</b>: their positive ends shift towards the balloon and negative ends away.</p><p>The attracted positive charges are closer than the repelled negative ones, and electric force falls with distance, so attraction wins. This is <b>induced polarisation</b>, the same reason a charged comb picks up bits of paper.</p>'},
{id:'x5',t:4,l:1,q:'Why is electricity sent across the country at hundreds of thousands of volts?',
 h:['The power delivered is P = VI. Energy is lost as heat in the cables.',
    'The power lost in a cable of resistance R is I²R.'],
 a:'<p>For a fixed power P = VI, raising the voltage lowers the current. Cable losses are I²R, so <b>10 times the voltage means 100 times less heating loss</b>.</p><p>Transformers make it easy to step voltage up for transmission and back down for homes. That is a big reason the grid uses alternating current.</p>'},

/* ---------- Thermal physics ---------- */
{id:'h1',t:5,l:1,q:'A metal bench and a wooden bench have been outside all night at the same temperature. Why does the metal one feel much colder to sit on?',
 h:['Your skin senses heat flow, not temperature directly.',
    'Which material carries heat away from your skin faster?'],
 a:'<p>Both are at the same temperature, below your skin temperature. Metal has a much higher thermal conductivity, so it draws heat from your skin quickly and your skin surface cools. Wood is a poor conductor, so the contact point warms up to near skin temperature almost immediately.</p><p>Your nerves sense the rate of heat loss, so metal <b>feels</b> colder. On a hot day, the metal bench feels hotter for the same reason.</p>'},
{id:'h2',t:5,l:2,q:'Why does ice float, and why does that matter for life on Earth?',
 h:['Floating means the solid is less dense than the liquid. That is unusual. What is special about how water molecules bond?',
    'Think about what happens to a lake in winter if ice were denser and sank.'],
 a:'<p>In ice, hydrogen bonds lock water molecules into an open hexagonal lattice, which takes up more space than the disordered liquid. Ice is about 9% less dense, so it floats.</p><p>Lakes freeze from the top down. The ice layer insulates the water below, which stays liquid (near 4 °C, where water is densest). If ice sank, lakes would fill with ice from the bottom up and could freeze solid, making aquatic life much harder.</p>'},
{id:'h3',t:5,l:1,q:'Why does food cook faster in a pressure cooker?',
 h:['What sets the temperature of boiling water?',
    'Boiling happens when the vapour pressure of the water equals the surrounding pressure.'],
 a:'<p>Water boils when its vapour pressure equals the pressure above it. Sealing the pot raises the pressure to about 2 atmospheres, which pushes the boiling point up to about <b>120 °C</b>.</p><p>Cooking chemistry speeds up strongly with temperature, so food cooks in roughly a third of the time. On a high mountain the opposite happens: water boils below 100 °C and pasta takes longer.</p>'},
{id:'h4',t:5,l:2,q:'Could you cool a sealed, insulated room by leaving the fridge door open?',
 h:['A fridge is a heat pump: it moves heat from inside to the coils at the back. Where are both of those now?',
    'Consider the room plus fridge as one system. What energy goes into it?'],
 a:'<p>No: the room <b>warms up</b>. With the door open, the fridge just moves heat from one part of the room to another. Meanwhile it draws electrical energy, which all ends up as heat in the room.</p><p>Energy conservation for the sealed room: the only energy flow in is electrical work, so its temperature must rise. An air conditioner works because it dumps its heat outside.</p>'},
{id:'h5',t:5,l:2,q:'Why can you put your hand into a 200 °C oven for a moment, but you would be badly scalded by 100 °C water?',
 h:['What matters is how quickly heat flows into your hand, not just the temperature.',
    'Compare the density, heat capacity and thermal conductivity of air and water. Is there anything else hot steam or water can do?'],
 a:'<p>Air is about a thousand times less dense than water and a poor conductor, so it can deliver heat only slowly. A thin layer of air next to your skin cools down quickly.</p><p>Water conducts about 25 times better and has huge heat capacity per volume, so it keeps delivering heat. Steam is even worse: when it condenses on your skin it releases latent heat (2.3 MJ/kg).</p>'},
{id:'h6',t:5,l:1,q:'Why does blowing on hot soup cool it down?',
 h:['Soup cools mainly by evaporation from its surface.',
    'What does the air just above the soup contain, and what does blowing do to it?'],
 a:'<p>Evaporation removes the fastest molecules, taking latent heat with them. Above the soup, a layer of humid air builds up and slows further evaporation.</p><p>Blowing <b>replaces that humid layer with drier air</b>, so evaporation speeds up. It also increases convective heat loss. (Your breath is warmer than the room, but that matters much less.)</p>'},

/* ---------- Gravity and astrophysics ---------- */
{id:'a1',t:6,l:2,q:'Why do we always see the same face of the Moon?',
 h:['It is not because the Moon does not spin. How long does one spin take compared with one orbit?',
    'The Earth\'s gravity raises tidal bulges on the Moon. What happens if they are not lined up with the Earth?'],
 a:'<p>The Moon spins exactly once per orbit (about 27 days), so the same side always faces us: it is <b>tidally locked</b>.</p><p>Early on it spun faster. Earth\'s gravity stretched it into a slight bulge; friction dragged the bulge ahead of the Earth–Moon line, and Earth\'s pull on the misaligned bulge created a torque that slowed the spin until it matched the orbit. The same process is slowly lengthening Earth\'s day.</p>'},
{id:'a2',t:6,l:2,q:'How could you work out the mass of the Earth?',
 h:['You know g at the surface and the radius of the Earth. What else do you need?',
    'Newton\'s law gives g = GM/R². G was measured in the lab by Cavendish.'],
 a:'<p>g = GM/R², so M = gR²/G = 9.8 × (6.4 × 10⁶)² / (6.7 × 10⁻¹¹) ≈ <b>6 × 10²⁴ kg</b>.</p><p>The hard part historically was G, measured by Cavendish with a torsion balance in 1798 (sometimes described as "weighing the Earth"). Alternatively, the Moon\'s orbit gives GM directly from Kepler\'s third law. Dividing by the volume gives an average density of about 5500 kg/m³, twice that of surface rock, so the core must be dense.</p>'},
{id:'a3',t:6,l:3,q:'Why are there two high tides a day, not one?',
 h:['The tide is caused not by the Moon\'s gravity itself, but by how its strength varies across the Earth.',
    'The near side is pulled more than the centre; the centre is pulled more than the far side. What does each look like from the Earth\'s point of view?'],
 a:'<p>Relative to the Earth\'s centre, water on the near side is pulled towards the Moon a bit more strongly, and water on the far side a bit less strongly. Both stretch the oceans along the Earth–Moon line, making <b>two bulges</b> on opposite sides.</p><p>The Earth turns under both bulges each day, giving two high tides about 12 h 25 min apart (the extra 25 min because the Moon moves along its orbit). The Sun adds a smaller tidal effect: spring tides happen when the two line up.</p>'},
{id:'a4',t:6,l:1,q:'How long does sunlight take to reach us? What does that tell you about looking at the night sky?',
 h:['Earth–Sun distance ≈ 1.5 × 10¹¹ m; speed of light ≈ 3 × 10⁸ m/s.'],
 a:'<p>t = 1.5 × 10¹¹ / 3 × 10⁸ = 500 s ≈ <b>8 minutes 20 seconds</b>.</p><p>Every observation is of the past. The nearest stars appear as they were years ago; distant galaxies as they were millions or billions of years ago. That is how astronomers can study the early universe directly.</p>'},
{id:'a5',t:6,l:2,q:'If the Sun suddenly collapsed into a black hole of the same mass, what would happen to the Earth\'s orbit?',
 h:['Outside a spherical mass, how does gravity depend on its size?',
    'Newton\'s shell theorem: a spherical body attracts external objects as if all its mass were at its centre.'],
 a:'<p>Nothing would change about the orbit. Outside the Sun, its gravity depends only on its mass and our distance, not its radius. The Earth would keep orbiting once a year.</p><p>Of course, it would get very cold and dark. A black hole of the Sun\'s mass would be only about 6 km across. Black holes only "suck things in" if you get very close.</p>'},
{id:'a6',t:6,l:3,q:'Why are planets round, but small asteroids are lumpy and potato-shaped?',
 h:['Think about a competition between two things: gravity and the strength of rock.',
    'The pressure from gravity at the centre of a body grows roughly as density² × radius². At what size does it beat the strength of rock?'],
 a:'<p>Gravity pulls every bit of a body towards the centre, which would make it a sphere. Rock resists deformation with a strength of roughly 10⁷–10⁸ Pa.</p><p>Central pressure ~ Gρ²R². With ρ ≈ 3000 kg/m³, this reaches 10⁷–10⁸ Pa when R is a few hundred kilometres. Bodies larger than <b>about 200–400 km</b> are crushed into spheres; smaller ones keep irregular shapes. Ice is weaker, so icy moons become round at smaller sizes.</p>'},

/* ---------- Everyday physics ---------- */
{id:'d1',t:7,l:1,q:'Why does a spinning ice skater speed up when they pull their arms in? Where does the extra kinetic energy come from?',
 h:['Is there any external torque on the skater?',
    'Angular momentum L = Iω is conserved. Rotational kinetic energy is L²/2I.'],
 a:'<p>With no external torque, angular momentum Iω is conserved. Pulling the arms in reduces the moment of inertia I, so ω increases.</p><p>Kinetic energy L²/2I <b>increases</b>. The extra energy comes from the work the skater\'s muscles do pulling their arms inwards against the "outward" tendency of the spinning arms.</p>'},
{id:'d2',t:7,l:2,q:'Why does a kettle get noisy and then quieter just before it boils?',
 h:['Bubbles first form at the hot element at the bottom. What happens when they rise into cooler water above?',
    'Steam bubbles that suddenly condense collapse violently.'],
 a:'<p>Early on, steam bubbles form at the element but rise into cooler water, where the steam condenses and the bubbles <b>collapse</b> with a sharp snap. Thousands of these give the loud hissing roar.</p><p>As the whole kettle approaches 100 °C, bubbles survive all the way to the surface without collapsing. The violent implosions stop, so it gets quieter, then you hear the gentler bubbling of a full boil.</p>'},
{id:'d3',t:7,l:2,q:'Should you walk or run in the rain to stay drier?',
 h:['Split the rain hitting you into rain landing on your head and shoulders, and rain you walk into with your front.',
    'How does each part depend on your speed, for a fixed distance?'],
 a:'<p>Rain on <b>top</b> of you is proportional to the time spent in the rain, so going faster reduces it.</p><p>Rain hitting your <b>front</b> is the rain in the volume you sweep through, which depends only on the distance, not your speed.</p><p>So overall, <b>run</b>. (If the wind blows rain at your back, there is an ideal speed matching the wind.) Good answers set up a simple model before concluding.</p>'},
{id:'d4',t:7,l:3,q:'A shower curtain blows inwards towards you when you turn on the shower. Why?',
 h:['There is no single agreed answer; tutors want to see you propose and test explanations.',
    'Candidates: hot air rising (convection), moving air and Bernoulli\'s principle, and a vortex set up by the spray.'],
 a:'<p>Possible explanations:</p><p>• <b>Convection</b>: hot water warms the air, which rises and draws in air at the bottom. But the effect also happens with cold water, so this cannot be the whole story.</p><p>• <b>Bernoulli</b>: the spray drags air along, and faster-moving air is at lower pressure, so the curtain is pushed in.</p><p>• <b>Vortex</b>: computer simulations (2001) suggest the spray drives a rotating vortex with a low-pressure core that pulls the curtain inwards.</p><p>The point is to reason: suggest an experiment to tell them apart, such as using cold water to rule out convection.</p>'}
];

const PHY_SOURCES=[
 ['Oxford Physics mock interview pack (official)','https://www.physics.ox.ac.uk/system/files/file_attachments/mock%20interview%20pack%20211122.pdf'],
 ['University of Oxford: interviews and sample questions','https://www.ox.ac.uk/interviews'],
 ['Oxford PAT past papers (useful for interview practice)','https://www.physics.ox.ac.uk/study/undergraduates/how-apply/physics-aptitude-test/pat-past-papers']
];

/* ---------- state ---------- */
const RATE={got:['Got it','ok'],hint:['Needed hints','sk'],stuck:['Stuck','no']};
let phyFilter=-1, phyTick=null;
const phyRatings=()=>loadJSON('phy-ratings',{});
function phyPool(){return PHY.filter(q=>phyFilter<0||q.t===phyFilter);}
function phyNext(exclude){
  const R=phyRatings(),pool=phyPool().filter(q=>q.id!==exclude);
  if(!pool.length)return phyPool()[0];
  const rank=q=>{const r=R[q.id];return !r?0:r.r==='stuck'?1:r.r==='hint'?2:3;};
  const best=Math.min(...pool.map(rank));
  let cand=pool.filter(q=>rank(q)===best);
  if(best===3){const oldest=Math.min(...cand.map(q=>R[q.id].t));cand=cand.filter(q=>R[q.id].t===oldest);}
  return pick(cand);
}
const lvl=l=>'●'.repeat(l)+'○'.repeat(3-l);

function phyHome(){
  clearInterval(tick);clearInterval(phyTick);S=null;
  const R=phyRatings(),pool=phyPool();
  const cnt={got:0,hint:0,stuck:0};pool.forEach(q=>{if(R[q.id])cnt[R[q.id].r]++;});
  const unseen=pool.length-cnt.got-cnt.hint-cnt.stuck;
  app.innerHTML=
  '<div class="stack">'+
  '<div class="stack" style="gap:8px"><p class="eyebrow">Practice · not scored</p><h1>Physics interview</h1>'+
  '<p class="muted">Open-ended questions in the style of Oxford physics interviews. Think aloud, work on paper, use hints the way an interviewer would nudge you, then compare with the worked answer.</p></div>'+
  '<div class="chips">'+['All'].concat(PHY_TOPICS).map((n,i)=>'<button class="chip'+(phyFilter===i-1?' on':'')+'" data-t="'+(i-1)+'">'+n+'</button>').join('')+'</div>'+
  '<div class="facts four"><div class="fact"><b>'+unseen+'</b><span>new</span></div><div class="fact"><b class="no">'+cnt.stuck+'</b><span>stuck</span></div><div class="fact"><b class="sk">'+cnt.hint+'</b><span>hints</span></div><div class="fact"><b class="ok">'+cnt.got+'</b><span>got it</span></div></div>'+
  '<button class="btn" id="pnext">Next question</button>'+
  '<div class="card"><h2 style="margin-bottom:6px">All questions</h2>'+
   pool.map(q=>{const r=R[q.id];return '<button class="qrow" data-id="'+q.id+'"><span class="mark '+(r?RATE[r.r][1]:'sk')+'">'+(r?(r.r==='got'?'✓':r.r==='hint'?'~':'✗'):'·')+'</span><span class="qt">'+q.q+'</span><span class="lv">'+lvl(q.l)+'</span></button>';}).join('')+'</div>'+
  '<div class="card stack"><h2>Official resources</h2><ul class="src">'+PHY_SOURCES.map(s=>'<li><a href="'+s[1]+'" target="_blank" rel="noopener">'+s[0]+'</a></li>').join('')+'</ul>'+
   '<p class="note">Questions here are written for practice in the style tutors use; they are not official Oxford questions. Interviews reward clear reasoning and responding to hints far more than knowing the answer already.</p></div>'+
  '<button class="btn ghost" id="phome">Home</button>'+
  '</div>';
  app.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{phyFilter=+b.dataset.t;phyHome();});
  app.querySelectorAll('.qrow').forEach(b=>b.onclick=()=>phyQuestion(PHY.find(q=>q.id===b.dataset.id)));
  document.getElementById('pnext').onclick=()=>phyQuestion(phyNext());
  document.getElementById('phome').onclick=home;
  window.scrollTo(0,0);
}

function phyQuestion(q){
  clearInterval(phyTick);
  let shown=0,end=0;
  app.innerHTML=
  '<div class="stack">'+
  '<div class="top"><span class="eyebrow">'+PHY_TOPICS[q.t]+' · '+lvl(q.l)+'</span><span class="timer" id="ptimer"></span></div>'+
  '<div class="card stack"><p class="prompt">'+q.q+'</p>'+
   '<div id="hints" class="stack" style="gap:10px"></div>'+
   '<div id="ans"></div></div>'+
  '<div class="row2"><button class="btn ghost" id="ptime">Start 5 min timer</button><button class="btn ghost" id="phint">Hint 1 of '+q.h.length+'</button></div>'+
  '<button class="btn" id="pans">Show worked answer</button>'+
  '<div id="rate"></div>'+
  '<button class="btn ghost" id="pback">Back to questions</button>'+
  '</div>';
  const $=id=>document.getElementById(id);
  $('ptime').onclick=()=>{
    if(end){clearInterval(phyTick);end=0;$('ptimer').textContent='';$('ptime').textContent='Start 5 min timer';return;}
    end=Date.now()+300000;$('ptime').textContent='Stop timer';
    const up=()=>{const left=(end-Date.now())/1000,el=$('ptimer');if(!el){clearInterval(phyTick);return;}
      el.textContent=fmt(left);el.classList.toggle('low',left<=60);if(left<=0){clearInterval(phyTick);el.textContent='Time';}};
    up();phyTick=setInterval(up,250);
  };
  $('phint').onclick=()=>{
    if(shown>=q.h.length)return;
    $('hints').insertAdjacentHTML('beforeend','<div class="hint"><b>Hint '+(shown+1)+'</b><p>'+q.h[shown]+'</p></div>');
    shown++;
    $('phint').textContent=shown<q.h.length?'Hint '+(shown+1)+' of '+q.h.length:'No more hints';
    $('phint').disabled=shown>=q.h.length;
  };
  $('pans').onclick=()=>{
    $('ans').innerHTML='<div class="answer"><b>Worked answer</b>'+q.a+'</div>';
    $('pans').style.display='none';
    $('rate').innerHTML='<div class="card stack"><p class="prompt" style="font-size:1rem">How did you do?</p><div class="row3">'+
      Object.entries(RATE).map(([k,v])=>'<button class="btn ghost rate '+v[1]+'" data-r="'+k+'">'+v[0]+'</button>').join('')+'</div></div>';
    $('rate').querySelectorAll('.rate').forEach(b=>b.onclick=()=>{
      const R=phyRatings();R[q.id]={r:b.dataset.r,t:Date.now()};saveJSON('phy-ratings',R);
      phyQuestion(phyNext(q.id));
    });
    $('ans').scrollIntoView({behavior:'smooth',block:'start'});
  };
  $('pback').onclick=phyHome;
  window.scrollTo(0,0);
}
