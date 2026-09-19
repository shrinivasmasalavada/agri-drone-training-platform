# agri-drone-training-platform
Agricultural drone services, workshops, internships &amp; certificate verification platform.


Student registration
Workshop booking
Internship application
Payment integration
Admin dashboard
Automatic certificate generation
Certificate ID verification
QR code on certificate
Student database
Email confirmation
Workshop attendance
Internship completion tracking


Hobbywing X6 Plus G2 Motor with 2480 Propeller Combo
Suited to agriculture spraying, training fleets, logistics, firefighting support, surveying and inspection UAVs. Genuine Hobbywing hardware, sold and supported in India by Bharat Skytech.

| Program                | Duration | 
| ---------------------- | -------: | 
| Embedded Systems       |  1 month |      
| Arduino & ESP32        |  1 month |    
| AI + Computer Vision   | 2 months |      
| Drone/UAV Technology   | 2 months |     
| Embedded AI + Robotics | 3 months | 
![Uploading image.png…]()


Version: 5.0 (Enterprise Production Grade) 
Architecture: Next.js 14+ (App Router) / React 18+ / TypeScript strict / Tailwind CSS / Three.js / R3F / Drei / Framer Motion / GSAP / Zod / Prisma / PostgreSQL 
Visual Standard: World-class deep-tech aerospace / semiconductor aesthetic (Dark Graphite, Precision Monochrome + Electric Cyan / Aerospace Amber accents, Glassmorphism, Custom Shaders, Cinematic 3D interactive models).

EXECUTIVE SUMMARY & COMPLETE SCOPE CONTINUATION

This document is the 100x boosted, comprehensive production blueprint continuing and fully expanding upon your initial prompt. It provides exact component hierarchies, 3D rendering pipelines, state management, database schemas, API routes, security controls, and responsive UI/UX specifications for the entire deep-tech startup web platform.

1. COMPREHENSIVE REPO & DIRECTORY ARCHITECTURE

├── app/
│ ├── layout.tsx # Root layout with providers, font optimization, SEO metadata
│ ├── page.tsx # Cinematic 3D Landing Page (Hero, Trust Strip, What We Build, Interactive 3D Drone, Stats, Testimonials, CTA)
│ ├── globals.css # Tailwind custom utilities, custom scrollbar, glassmorphism classes
│ ├── api/
│ │ ├── internships/
│ │ │ └── route.ts # POST handler with Zod validation, rate limiting, and resume upload handling
│ │ ├── workshops/
│ │ │ └── route.ts # Workshop registration endpoint
│ │ └── contact/
│ │ └── route.ts # General inquiry endpoint
│ ├── drone-technology/
│ │ └── page.tsx # Dedicated UAV Architecture, Tech Stack, and Applications page
│ ├── internships/
│ │ ├── page.tsx # Internship Portal listing all tracks
│ │ └── [slug]/
│ │ └── page.tsx # Dynamic detailed page with weekly roadmap, prerequisites, deliverables
│ ├── workshops/
│ │ └── page.tsx # Hands-on workshop schedules, hardware kits preview, booking
│ ├── projects/
│ │ └── page.tsx # R&D project showcases (Autonomous mapping, Edge AI detection, swarm UAVs)
│ ├── about/
│ │ └── page.tsx # Engineering philosophy, founding team, labs, R&D vision
│ └── contact/
│ └── page.tsx # Secure contact form, lab location, inquiry routing
├── components/
│ ├── layout/
│ │ ├── Navbar.tsx # Sticky dynamic navbar with mobile slide-over menu & backdrop blur
│ │ └── Footer.tsx # Professional deep-tech footer with legal, quick links, newsletter
│ ├── three/
│ │ ├── SceneContainer.tsx # Canvas wrapper with DPR management, shadow maps, performance tiering
│ │ ├── DroneHeroModel.tsx # Optimized GLTF drone model with procedural propeller rotation & floating physics
│ │ ├── InteractiveDroneExploder.tsx # Hotspot raycasting, camera tweening, part highlighting
│ │ ├── ParticleField.tsx # InstancedMesh dust / technical grid particles
│ │ └── LightingRig.tsx # Cinematic 3-point lighting + rim light + subtle accent glow
│ ├── ui/
│ │ ├── Button.tsx # Primary/Secondary button with magnetic hover & ripple effect
│ │ ├── GlassCard.tsx # Reusable glassmorphic container with border gradient
│ │ ├── SectionHeader.tsx # Standardized deep-tech section title + subtitle + accent badge
│ │ ├── TechBadge.tsx # Micro-tag for technologies (ROS2, OpenCV, PyTorch, C++, PX4)
│ │ └── Modal.tsx # Reusable modal for application forms & quick views
│ └── forms/
│ ├── InternshipApplyForm.tsx # Multi-step secure application form with Zod & file validation
│ └── WorkshopBookingForm.tsx # Workshop seat reservation form
├── lib/
│ ├── db.ts # Prisma client singleton configuration
│ ├── s3.ts # AWS S3 / Cloudflare R2 upload helper for secure resume storage
│ ├── validations.ts # Zod schemas for all backend inputs
│ └── utils.ts # Class merging (clsx + tailwind-merge) & helper utilities
├── prisma/
│ └── schema.prisma # Database models (Applicant, WorkshopRegistration, Inquiry)
└── public/
  ├── models/
  │ ├── drone_hero.glb # High-poly optimized GLTF drone model (< 3.5MB)
  │ └── drone_detailed.glb # Disassemblable drone model with named meshes for hotspots
  └── textures/ # Normal maps, roughness maps, environment HDRIs

2. DESIGN SYSTEM & VISUAL TOKENS

Color Palette (Tailwind CSS Extensions)

// tailwind.config.js extension snippet
colors: {
  graphite: {
  950: '#030508', // Deep space background
  900: '#0a0e17', // Card background
  800: '#121926', // Elevated surface
  700: '#1e293b', // Borders & dividers
  },
  accent: {
  cyan: '#00f2fe', // Primary tech glow / interactive highlight
  blue: '#4facfe', // Secondary tech gradient
  amber: '#f59e0b', // Warning / status / hardware active indicator
  },
  neutral: {
  100: '#f8fafc',
  400: '#94a3b8',
  600: '#475569',
  }
}

Typography Scale
• Display Hero: text-5xl md:text-7xl font-bold tracking-tight uppercase (Font: Inter / Space Grotesk / JetBrains Mono for technical codes)
• Section Headings: text-3xl md:text-5xl font-semibold tracking-wide
• Body Technical: text-sm md:text-base text-neutral-400 font-normal leading-relaxed
• Code / Specs: font-mono text-xs text-accent-cyan tracking-wider

3. CORE PAGE SPECIFICATIONS & EXPANDED MODULES

3.1 HOME PAGE (app/page.tsx)
1. Hero Section:
  • Fullscreen 100vh container with absolute positioning for Three.js Canvas.
  • Cinematic lighting with directional lights casting soft shadows.
  • Headline: "ENGINEERING THE FUTURE OF AUTONOMOUS FLIGHT."
  • Subtitle: "Building practical UAV, Embedded AI and Computer Vision systems — while empowering the next generation of engineers through hands-on technology."
  • CTAs: "Explore Our Technology" (Primary) & "Explore Internships" (Secondary with subtle border glow).
  • Technical bottom ticker: LATENCY: < 12ms | AI INFERENCE: EDGE | FLIGHT STACK: PX4/MAVLINK | STATUS: OPERATIONAL.

2. Trust & Credibility Strip:
  • Horizontal scrolling or clean grid displaying core pillars: UAV SYSTEMS • EMBEDDED SYSTEMS • EDGE AI • COMPUTER VISION • ROBOTICS • WIRELESS COMMS • R&D LABS.

3. "What We Build" Section (6 Interactive Cards):
  • 01 — UAV SYSTEMS: Custom multirotor platforms, airframe aerodynamics, power distribution boards, and long-range telemetry links.
  • 02 — EMBEDDED SYSTEMS: Custom PCB design (Altium/KiCad), STM32/ESP32 firmware development, sensor fusion (IMU, LiDAR, Sonar).
  • 03 — EDGE AI: Quantized neural network models running on NVIDIA Jetson Orin Nano / Raspberry Pi AI HAT for real-time inference without cloud dependency.
  • 04 — COMPUTER VISION: Optical tracking, YOLOv8 object detection for aerial inspection, semantic segmentation, and stereo depth estimation.
  • 05 — ROBOTICS: Ground and aerial autonomous navigation using ROS2 (Robot Operating System), SLAM (Simultaneous Localization and Mapping), and path planning.
  • 06 — R&D & PROTOTYPING: Rapid hardware-in-the-loop (HIL) testing, wind-tunnel simulation validation, and custom payload integration.

4. Interactive 3D Drone Exploder Section (Inside The System):
  • Centered 3D model with OrbitControls locked to smooth damping.
  • Clickable HTML-annotated hotspots pinned to 3D world coordinates:
  • Camera: 4K Global Shutter optical sensor + 3-axis stabilized gimbal.
  • Flight Controller: High-frequency STM32H7 dual-core MCU running custom PID stabilization loop.
  • GPS / RTK Module: High-precision centimeter-level positioning module for autonomous waypoint navigation.
  • Motor / ESC: Brushless DC motors driven by BLHeli32 Electronic Speed Controllers with telemetry feedback.
  • Smart Battery: 6S LiPo intelligent battery pack with integrated BMS voltage and thermal monitoring.
  • Communication Link: Encrypted long-range OFDM video and telemetry transceiver.
  • Edge Computer: NVIDIA Jetson Orin Nano (40 TOPS AI compute) for real-time onboard computer vision.
  • Sensor Suite: Barometer, Magnetometer, Optical Flow, and Time-of-Flight distance sensors.

3.2 DRONE TECHNOLOGY PAGE (app/drone-technology/page.tsx)
• UAV Architecture Pipeline Diagram: Visual step-by-step interactive SVG/CSS flowchart:
  SENSORS (IMU/GPS/LiDAR) ➔ FLIGHT CONTROLLER (Stabilization & Mixer) ➔ EDGE COMPUTE (Jetson AI Board) ➔ COMPUTER VISION / INFERENCE ➔ DECISION ENGINE ➔ ACTUATION (Motors & Servos)
• Core Technologies Breakdown: Detailed technical specification blocks for Flight Control firmware, Embedded Electronics, Telemetry protocols (MAVLink), and Edge AI model quantization (TensorRT).
• Application Domains: Industrial inspection, precision agriculture mapping, search & rescue simulation, environmental monitoring, and academic research testbeds. (Explicitly notes: Non-commercial / experimental R&D focus unless specifically deployed).

3.3 INTERNSHIP PORTAL (app/internships/page.tsx)
• Headline: "BUILD. TEST. LEARN. DEPLOY."
• Subheading: "Project-based engineering internships designed around real hardware and embedded software workflows."
• Tracks Available:
  01. Drone & UAV Technology (Duration: 4/8 Weeks | Mode: Hybrid/Offline Labs | Tech: PX4, MAVLink, CAD, Flight Dynamics)
  02. Embedded Systems & Firmware (Duration: 4/8 Weeks | Mode: Hybrid/Offline | Tech: C/C++, STM32, FreeRTOS, PCB Design)
  03. AI & Computer Vision (Duration: 4/8 Weeks | Mode: Online/Hybrid | Tech: Python, OpenCV, PyTorch, YOLO)
  04. Autonomous Robotics (Duration: 4/8 Weeks | Mode: Offline Labs | Tech: ROS2, Gazebo Simulation, LIDAR, Navigation)
  05. Edge AI & Embedded ML (Duration: 4/8 Weeks | Mode: Hybrid | Tech: TensorRT, ONNX, Jetson Nano, Model Quantization)

• Detailed Internship Page (app/internships/[slug]/page.tsx):
  • Program Overview & Objectives
  • Who Can Apply (ECE, CSE, MECH, Robotics undergrads & enthusiasts)
  • Prerequisites (Basic programming or electronics fundamentals)
  • Weekly Roadmap:
  • Week 01: Theoretical Foundations & Toolchain Setup (Git, IDEs, Simulation environments).
  • Week 02: Hardware Integration & Peripheral Interfacing (Sensors, actuators, communication buses I2C/SPI/UART).
  • Week 03: Core Feature Development & Algorithm Implementation.
  • Week 04/End: Rigorous Testing, Hardware-in-Loop validation, Documentation, and Final Project Presentation.
  • Mentorship Structure: Direct guidance by senior embedded systems and drone architects.
  • Deliverables & Evaluation: Functional prototype, technical report, code repository, and verified Certificate of Completion.

• Application Form (components/forms/InternshipApplyForm.tsx):
  • Full Name, Email, Phone, College Name, Degree/Branch, Current Year, City.
  • Technical Interests (Dropdown selector).
  • Selected Internship Track.
  • Prior Experience / Projects Link (GitHub / Portfolio).
  • Why do you want to join? (Textarea).
  • Resume Upload (PDF/DOCX, max 5MB, validated via Zod).
  • Privacy consent checkbox.
  • Secure submission handler with success state modal and reference ID generation.

3.4 WORKSHOP PORTAL (app/workshops/page.tsx)
• Headline: "HANDS-ON TECHNOLOGY WORKSHOPS"
• Subheading: "Intensive weekend and multi-day hardware bootcamps where you build working prototypes with your own hands."
• Categories:
  • Drone Building & Flight Dynamics Bootcamp: Assemble a quadcopter from frame to first autonomous hover.
  • IoT & Smart Embedded Systems: Build connected IoT nodes using ESP32, MQTT, and cloud dashboards.
  • Edge AI & Computer Vision Masterclass: Train and deploy a real-time object detection model on Raspberry Pi.
  • Autonomous Robotics with ROS2: Program differential-drive robots for mapping and obstacle avoidance.
• Features per Workshop: Hardware kit included, take-home project board, expert mentor instruction, and completion certificate. Registration modal with instant seat reservation.

3.5 PROJECTS & R&D SHOWCASE (app/projects/page.tsx)
• Showcases internal engineering R&D initiatives:
  • Project AeroScan: Autonomous multispectral crop health mapping drone.
  • Project EdgeTrack: Real-time drone tracking gimbal using onboard neural network accelerator.
  • Project SwarmNode: Decentralized multi-drone communication protocol for synchronized flight.

3.6 ABOUT US & CONTACT (app/about/page.tsx & app/contact/page.tsx)
• About: Mission statement emphasizing practical engineering excellence over theoretical memorization. Details about our hardware lab, R&D facility, and engineering mentors.
• Contact: Physical lab address, direct corporate email, inquiry form, and operational hours.

4. DATABASE SCHEMA (Prisma ORM)

datasource db {
  provider = "postgresql"
  url = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Applicant {
  id String @id @default(cuid())
  fullName String
  email String
  phone String
  college String
  course String
  year String
  city String
  technicalInterests String[]
  selectedTrack String
  experience String?
  githubUrl String?
  linkedinUrl String?
  statement String
  resumeUrl String
  status String @default("PENDING") // PENDING, REVIEWED, ACCEPTED, REJECTED
  createdAt DateTime @default(now())
}

model WorkshopRegistration {
  id String @id @default(cuid())
  fullName String
  email String
  phone String
  college String
  workshopName String
  status String @default("CONFIRMED")
  createdAt DateTime @default(now())
}

model Inquiry {
  id String @id @default(cuid())
  name String
  email String
  subject String
  message String
  createdAt DateTime @default(now())
}

5. PERFORMANCE, OPTIMIZATION & SECURITY GUIDELINES

1. 3D Performance Optimization:
  • Dynamic Pixel Ratio (window.devicePixelRatio) capped at 2 to prevent mobile GPU throttling.
  • Geometry and texture compression using Draco loader and KTX2 textures.
  • Automatic pause of Three.js animation render loops when canvas is out of viewport (IntersectionObserver).
  • Fallback static high-res cinematic graphic for mobile devices with low WebGL capability.

2. Security:
  • Input sanitization and validation using Zod schemas on both client and server API endpoints.
  • Rate limiting on API routes to prevent spam on application and contact forms.
  • Secure file upload handling (storing resumes in private S3/R2 buckets with pre-signed secure URLs).
  • Strict CORS policy and environment variable isolation.

3. Accessibility & SEO:
  • Semantic HTML5 structure (<header>, <main>, <section>, <article>, <footer>).
  • ARIA labels on all interactive 3D hotspots and mobile menu toggles.
  • Complete OpenGraph (og:image, og:title, og:description) meta tags for stellar social sharing.

This complete specification gives you the exact 100x boosted blueprint required to build a world-class, production-ready deep-tech startup web application.
