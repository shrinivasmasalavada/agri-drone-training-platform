
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#07111f">
  <meta name="description" content="Explore agricultural drones, UAV technology and practical drone training.">
  <title>AgriDrone | Future of Farming</title>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

    :root {
      --bg: #07111f;
      --panel: #101f30;
      --green: #a3ff65;
      --cyan: #52e8ff;
      --purple: #a88bff;
      --text: #f4f8ff;
      --muted: #9cacc0;
    }

    * { box-sizing: border-box; }

    html { scroll-behavior: smooth; }

    body {
      margin: 0;
      font-family: Inter, sans-serif;
      background: var(--bg);
      color: var(--text);
      overflow-x: hidden;
    }

    a { color: inherit; text-decoration: none; }

    .glow {
      position: fixed;
      width: 380px;
      height: 380px;
      border-radius: 50%;
      filter: blur(110px);
      opacity: .16;
      pointer-events: none;
      z-index: -1;
    }

    .glow.one { background: #42ff91; top: 10%; left: -180px; }
    .glow.two { background: #745bff; top: 50%; right: -200px; }

    nav {
      max-width: 1200px;
      margin: auto;
      padding: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
    }

    .logo {
      font-size: 21px;
      font-weight: 900;
      letter-spacing: -1px;
    }

    .logo span { color: var(--green); }

    .nav-links {
      display: flex;
      gap: 25px;
      color: var(--muted);
      font-size: 13px;
    }

    .nav-links a:hover { color: var(--green); }

    .nav-button, .primary-btn {
      display: inline-block;
      background: var(--green);
      color: #081319;
      padding: 13px 20px;
      border-radius: 12px;
      font-size: 13px;
      font-weight: 800;
      transition: .25s;
    }

    .nav-button:hover, .primary-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 35px #a3ff6535;
    }

    .hero {
      max-width: 1200px;
      margin: auto;
      min-height: 590px;
      padding: 70px 24px 85px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: center;
    }

    .eyebrow {
      display: inline-flex;
      gap: 9px;
      align-items: center;
      padding: 9px 13px;
      border: 1px solid #a3ff653d;
      background: #a3ff650b;
      color: var(--green);
      border-radius: 40px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .dot {
      width: 7px;
      height: 7px;
      background: var(--green);
      border-radius: 50%;
      box-shadow: 0 0 12px var(--green);
    }

    h1 {
      font-size: clamp(43px, 6vw, 76px);
      line-height: 1.04;
      letter-spacing: -4px;
      margin: 25px 0;
    }

    h1 span {
      background: linear-gradient(90deg, var(--green), var(--cyan));
      -webkit-background-clip: text;
      color: transparent;
    }

    .hero p {
      max-width: 490px;
      line-height: 1.9;
      color: var(--muted);
      font-size: 15px;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 15px;
      margin-top: 30px;
    }

    .secondary-btn {
      border: 1px solid #ffffff25;
      border-radius: 12px;
      padding: 13px 20px;
      font-size: 13px;
      font-weight: 700;
    }

    .hero-visual {
      position: relative;
      perspective: 1000px;
    }

    .hero-image {
      height: 400px;
      border-radius: 28px;
      overflow: hidden;
      border: 1px solid #ffffff20;
      transform: rotateY(-7deg) rotateX(3deg);
      box-shadow: 20px 25px 70px #0008;
      position: relative;
    }

    .hero-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform .7s;
    }

    .hero-image:hover img { transform: scale(1.08); }

    .image-overlay {
      position: absolute;
      inset: 40% 0 0;
      background: linear-gradient(transparent, #06111ff5);
    }

    .floating-card {
      position: absolute;
      background: #112338eF;
      backdrop-filter: blur(15px);
      border: 1px solid #ffffff20;
      padding: 15px 18px;
      border-radius: 16px;
      box-shadow: 0 15px 40px #0005;
      animation: float 4s ease-in-out infinite;
    }

    .floating-card small {
      display: block;
      color: var(--muted);
      margin-bottom: 5px;
      font-size: 10px;
    }

    .floating-card strong { font-size: 14px; }

    .float-top { top: 25px; left: -25px; }
    .float-bottom { right: -15px; bottom: 25px; animation-delay: -2s; }

    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(-1deg); }
      50% { transform: translateY(-12px) rotate(1deg); }
    }

    .stats {
      max-width: 1150px;
      margin: 0 auto 80px;
      padding: 25px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      border: 1px solid #ffffff14;
      background: #ffffff05;
      border-radius: 20px;
      text-align: center;
    }

    .stat + .stat { border-left: 1px solid #ffffff18; }

    .stat strong {
      display: block;
      font-size: 24px;
      color: var(--green);
    }

    .stat span { color: var(--muted); font-size: 12px; }

    section.content {
      max-width: 1200px;
      padding: 40px 24px 90px;
      margin: auto;
    }

    .section-heading {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 20px;
      margin-bottom: 35px;
    }

    .section-heading h2 {
      font-size: clamp(30px, 4vw, 43px);
      letter-spacing: -1.8px;
      margin: 14px 0 8px;
    }

    .section-heading p {
      color: var(--muted);
      line-height: 1.7;
      font-size: 13px;
    }

    .drone-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 22px;
    }

    .drone-card {
      background: linear-gradient(145deg, #13253a, #0a1625);
      border: 1px solid #ffffff14;
      border-radius: 20px;
      overflow: hidden;
      transition: transform .35s, border-color .35s, box-shadow .35s;
    }

    .drone-card:hover {
      transform: translateY(-9px) rotateX(2deg);
      border-color: #a3ff6570;
      box-shadow: 0 20px 45px #0005, 0 0 25px #a3ff6510;
    }

    .drone-card img {
      width: 100%;
      height: 210px;
      object-fit: cover;
      display: block;
      transition: transform .5s;
    }

    .drone-card:hover img { transform: scale(1.05); }

    .card-body { padding: 22px; }

    .tag {
      color: var(--green);
      font-size: 10px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      font-weight: 800;
    }

    .card-body h3 { font-size: 19px; margin: 12px 0; }

    .card-body p {
      color: var(--muted);
      font-size: 12px;
      line-height: 1.8;
      min-height: 44px;
    }

    .card-link {
      display: inline-block;
      margin-top: 12px;
      color: var(--cyan);
      font-size: 12px;
      font-weight: 700;
    }

    .training {
      max-width: 1150px;
      margin: 0 auto 90px;
      padding: 50px;
      border-radius: 26px;
      border: 1px solid #ffffff17;
      background:
        radial-gradient(ellipse at top right, #6b56ff2a, transparent 50%),
        linear-gradient(120deg, #112a35, #10172b);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: center;
    }

    .training h2 {
      font-size: clamp(30px, 4vw, 44px);
      line-height: 1.15;
      letter-spacing: -2px;
    }

    .training p {
      color: var(--muted);
      line-height: 1.9;
      font-size: 13px;
    }

    .training img {
      width: 100%;
      height: 290px;
      object-fit: cover;
      border-radius: 20px;
      border: 1px solid #ffffff20;
    }

    footer {
      padding: 35px 24px;
      text-align: center;
      color: var(--muted);
      font-size: 12px;
      border-top: 1px solid #ffffff12;
    }

    footer strong { color: var(--green); }

    @media (max-width: 850px) {
      .hero { grid-template-columns: 1fr; padding-top: 45px; }
      .hero-visual { margin: 10px; }
      .drone-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .training { margin: 0 20px 70px; padding: 30px; }
      .stats { margin: 0 20px 60px; }
      .nav-links { gap: 12px; }
    }

    @media (max-width: 560px) {
      nav { padding: 20px; flex-wrap: wrap; }
      .nav-links { order: 3; width: 100%; justify-content: space-between; }
      .nav-button { padding: 10px 12px; }
      h1 { letter-spacing: -2.5px; }
      .hero-image { height: 300px; transform: none; }
      .float-top { left: -8px; }
      .float-bottom { right: -8px; }
      .drone-grid { grid-template-columns: 1fr; }
      .stats { padding: 20px 8px; }
      .stat strong { font-size: 19px; }
      .stat span { font-size: 10px; }
      .training { grid-template-columns: 1fr; padding: 24px; }
      .training img { height: 220px; }
      .section-heading { align-items: start; flex-direction: column; }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: .01ms !important;
        scroll-behavior: auto !important;
        transition-duration: .01ms !important;
      }
    }
  </style>
</head>

<body>
  <div class="glow one"></div>
  <div class="glow two"></div>

  <nav>
    <a class="logo" href="#">AGRI<span>DRONE</span> ✳</a>
    <div class="nav-links">
      <a href="#home">Home</a>
      <a href="#technology">Technology</a>
      <a href="#training">Training</a>
    </div>
    <a class="nav-button" href="#technology">Explore Drones ↗</a>
  </nav>

  <main>
    <section class="hero" id="home">
      <div>
        <div class="eyebrow"><span class="dot"></span> NEXT-GEN AGRICULTURE</div>

        <h1>Farming's Future Is <span>In The Air.</span></h1>

        <p>
          Discover agricultural drones, explore UAV technologies, and learn
          how intelligent aerial systems are transforming modern farming.
          Your journey into drone technology starts here.
        </p>

        <div class="hero-actions">
          <a class="primary-btn" href="#technology">Explore Technology ↗</a>
          <a class="secondary-btn" href="#training">Discover Training</a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-image">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=85"
            alt="Green agricultural fields from above"
          >
          <div class="image-overlay"></div>
        </div>

        <div class="floating-card float-top">
          <small>✳ AGRICULTURE TECH</small>
          <strong>Smart Farming</strong>
        </div>

        <div class="floating-card float-bottom">
          <small>UAV TECHNOLOGY</small>
          <strong>Explore. Learn. Build. 🚁</strong>
        </div>
      </div>
    </section>

    <div class="stats">
      <div class="stat">
        <strong>UAV</strong>
        <span>Drone Technology</span>
      </div>
      <div class="stat">
        <strong>AI + CV</strong>
        <span>Intelligent Systems</span>
      </div>
      <div class="stat">
        <strong>AgriTech</strong>
        <span>Precision Agriculture</span>
      </div>
    </div>

    <section class="content" id="technology">
      <div class="section-heading">
        <div>
          <div class="eyebrow">EXPLORE THE SKY</div>
          <h2>Discover Drone <span style="color:var(--green)">Technology.</span></h2>
          <p>Explore different UAV platforms and their real-world applications.</p>
        </div>
      </div>

      <div class="drone-grid">

        <article class="drone-card">
          <img src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80"
               alt="Quadcopter drone">
          <div class="card-body">
            <span class="tag">01 / MULTIROTOR</span>
            <h3>Quadcopter</h3>
            <p>Four-rotor UAVs used for aerial photography, mapping and training.</p>
            <a class="card-link" href="#training">Explore applications ↗</a>
          </div>
        </article>

        <article class="drone-card">
          <img src="https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=800&q=80"
               alt="Drone in flight">
          <div class="card-body">
            <span class="tag">02 / HEAVY LIFT</span>
            <h3>Hexacopter & Octocopter</h3>
            <p>Multirotor configurations designed for specialized payloads and aerial operations.</p>
            <a class="card-link" href="#training">Explore applications ↗</a>
          </div>
        </article>

        <article class="drone-card">
          <img src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80"
               alt="Compact drone platform">
          <div class="card-body">
            <span class="tag">03 / FPV SYSTEMS</span>
            <h3>FPV & Racing Drones</h3>
            <p>Explore first-person-view flight, radio control and high-speed maneuvering.</p>
            <a class="card-link" href="#training">Explore applications ↗</a>
          </div>
        </article>

        <article class="drone-card">
          <img src="https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=800&q=80"
               alt="Agricultural landscape">
          <div class="card-body">
            <span class="tag">04 / AGRICULTURE</span>
            <h3>Agri-Spraying Drones</h3>
            <p>Learn about spraying systems, flight planning and precision crop management.</p>
            <a class="card-link" href="#training">Explore applications ↗</a>
          </div>
        </article>

        <article class="drone-card">
          <img src="https://images.unsplash.com/photo-1521405924368-64c5b84bec60?auto=format&fit=crop&w=800&q=80"
               alt="Drone aerial technology">
          <div class="card-body">
            <span class="tag">05 / INTELLIGENCE</span>
            <h3>Surveillance & Mapping</h3>
            <p>Discover aerial imaging, mapping workflows and computer vision applications.</p>
            <a class="card-link" href="#training">Explore applications ↗</a>
          </div>
        </article>

        <article class="drone-card">
          <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80"
               alt="Drone flying outdoors">
          <div class="card-body">
            <span class="tag">06 / AUTONOMY</span>
            <h3>Delivery & Autonomous UAVs</h3>
            <p>Explore navigation, route planning, sensors and autonomous flight concepts.</p>
            <a class="card-link" href="#training">Explore applications ↗</a>
          </div>
        </article>

      </div>
    </section>

    <section class="training" id="training">
      <div>
        <div class="eyebrow">LEARN BY DOING</div>
        <h2>From Drone Basics to Real-World Skills.</h2>
        <p>
          Explore drone components, motors, ESCs, flight controllers,
          batteries, GPS, radio communication and maintenance.
          Build your knowledge through practical learning and UAV projects.
        </p>
        <a class="primary-btn" href="#technology">Start Exploring ↗</a>
      </div>

      <img
        src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1000&q=85"
        alt="Aerial technology and landscape"
        loading="lazy"
      >
    </section>
  </main>

  <footer>
    <p><strong>AGRIDRONE</strong> — Exploring the future of UAV technology.</p>
    <p>Built for drone learners, makers and AgriTech innovators.</p>
  </footer>
</body>
</html>

# Eagle Eye Agri Services – Website

## Folder structure
```
eagle-eye-agri/
├── index.html          (page structure)
├── css/style.css       (styles + animations)
├── js/config.js        (EDIT THIS: numbers, names, file paths)
├── js/main.js          (animations, WhatsApp form, video popup)
└── assets/
    ├── images/         (your photos)
    └── videos/         (your videos)
```

## Run in VS Code
1. File > Open Folder > select `eagle-eye-agri`
2. Extensions > install **Live Server** (Ritwick Dey)
3. Right-click `index.html` > **Open with Live Server**
(Internet is needed for Tailwind and Google Fonts.)

## Add your own files
Copy files into assets/ using these exact names, or change the paths in `js/config.js`:

images: hero-poster.jpg, founder.jpg, drone-1.jpg, drone-2.jpg, partner-logo.png,
paddy.jpg, sugarcane.jpg, cotton.jpg, maize.jpg, areca.jpg, groundnut.jpg, tur-dal.jpg, ragi.jpg
videos: hero.mp4, paddy.mp4, groundnut.mp4

Tips: hero video under ~10 MB, MP4 (H.264), 1080p or lower. Photos under 500 KB each (use .jpg/.webp).

## Must change in js/config.js
- whatsappNumber (91 + 10 digits, no spaces or +)
- founder name, drone model names, phone, email, Instagram/YouTube links, partner website

## Deploy
Upload the whole folder to Netlify, Vercel or GitHub Pages.
