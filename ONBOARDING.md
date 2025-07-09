🌌 G‑ELECTRA — Smart Systems Club Website
🚀 Project Overview
This is the official, futuristic website of the G‑ELECTRA — Smart Systems Club, built with Vue 3, Vite, and Tailwind CSS.

It’s a dark cyberpunk‑inspired interactive portal, showcasing:
✅ Club identity
✅ Projects, domains, workshops
✅ Media & achievements timeline
✅ Internal & external community
✅ Real‑time event calendar
✅ Event registrations
✅ Authentication for club members/students

🧭 User Journey & Flow
🟢 Landing Page
First page users see at /

Features:

Centered club logo

Glitch‑animated club name: G‑ELECTRA

Typing tagline: Initializing Smart Systems…

Futuristic glowing CTA button: Enter Site

Background: planned particles animation (to be completed later)

🚀 Clicking Enter Site routes the user to the Home page.

🟢 Home Page
Path: /home

Hero section with glitch tagline

Quick stats:

8+ Members

40+ Domains

8+ Workshops

Links to explore:

Projects

Domains

Calendar

Registrations

🟢 Authentication Flow
Path: /auth

Users can Sign In / Sign Up using:

🔷 Google OAuth — only emails ending in @gitam.in are allowed.

🔷 OTP via email — students enter roll number + verified email, receive OTP.

Roll number is a required field (either parsed from email or entered manually).

Once authenticated:

User state is maintained in Pinia store

Auth state can unlock additional pages (like admin event creation or member‑only content in future).

🟢 Community Page
Path: /community

Sections:

Other Clubs in College — grid of logos & descriptions

Internal Teams of G‑ELECTRA — cards for Design Team, Web Team, etc.

Core Team Members — member photos, roles, LinkedIn links

🟢 Media Page
Path: /media

Timeline of past events

Each item:

Event image

Title

Year

Description

Smooth scroll & fade‑in animations

🟢 Achievements Page
Path: /achievements

Timeline of key milestones

Includes title, year, description, and optional icon

🟢 Domains Page
Path: /domains

Grid of 40+ technical domains

Hover effects & optional category filters

🟢 Calendar Page
Path: /calendar

Shows real‑time calendar of upcoming workshops & events

Can integrate Google Calendar API

Links to register for upcoming sessions

🟢 Registrations Page
Path: /registrations

Top section: Upcoming events

Below: Grid of registration cards

Title

Date

“Register Now” button (Google Form or internal route)

Placeholder cards for Coming Soon…

🛠️ Technical Notes
✅ All routes are defined in src/router/index.js
✅ Authentication state managed in src/store/authStore.js (future)
✅ Layouts: src/layouts/DefaultLayout.vue wraps all pages
✅ Reusable components: src/components/ui/

📄 Next Steps for Collaborator
✅ Clone the repo:

bash
Copy
Edit
git clone https://github.com/Premkumarjanumula/G-Electra.git
cd G-Electra
npm install
npm run dev
✅ Test all routes (/, /home, /auth, etc.)

✅ Images: Make sure public/ has all club logos, team icons, media images, etc.

✅ Work with you to finish:

Particles.js on Landing Page

Firebase auth integration

Calendar integration