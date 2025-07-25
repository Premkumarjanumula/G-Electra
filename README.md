# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# 🌌 G‑ELECTRA — Smart Systems Club Website

A futuristic, cyberpunk‑inspired website for the **G‑ELECTRA (Smart Systems Club)**, built with ⚡ Vue 3, Tailwind CSS, Vite, and Firebase.

This site is highly interactive and immersive, designed to showcase the club's projects, community, events, and more.

---

## 🛠️ Tech Stack
- **Frontend:** Vue 3 + Vite
- **Styling:** Tailwind CSS (with custom theme)
- **Routing:** Vue Router
- **State Management (optional):** Pinia
- **Auth & DB (optional):** Firebase
- **Animations:** Tailwind transitions, (optionally GSAP for advanced scroll effects)

---

## 📁 Folder Structure Overview

g-electra/
├── public/ # Static assets served as-is
│ ├── g-electra.png # Club logo
│ ├── particles.json # Background particles config
│ ├── clubs/ # Other clubs' logos
│ ├── teams/ # Internal team icons
│ ├── members/ # Core team member photos
│ ├── media/ # Media gallery images
│ └── icons/ # Trophy/achievement icons

├── src/
│ ├── assets/ # Optional reusable graphics, SVGs
│ ├── components/
│ │ ├── layout/ # Header, Footer, Sidebar
│ │ └── ui/ # Reusable UI cards, timeline items
│ ├── layouts/ # DefaultLayout, AuthLayout
│ ├── router/
│ │ └── index.js # Vue Router configuration
│ ├── store/ # Pinia store (e.g. authStore.js)
│ ├── views/ # Route-level pages
│ │ ├── Landing.vue
│ │ ├── Home.vue
│ │ ├── Community.vue
│ │ ├── Media.vue
│ │ ├── Achievements.vue
│ │ ├── Domains.vue
│ │ ├── Calendar.vue
│ │ ├── Registrations.vue
│ │ └── Auth.vue
│ ├── App.vue
│ ├── main.js # App entry point
│ └── tailwind.css # Tailwind setup
│
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── vite.config.js
├── .gitignore
└── LICENSE


---

## 🗺️ Routing
All routes are configured in:  
📄 `src/router/index.js`

Routes:
| Path              | View Component            |
|-------------------|---------------------------|
| `/`               | `Landing.vue`            |
| `/home`           | `Home.vue`               |
| `/community`      | `Community.vue`          |
| `/media`          | `Media.vue`              |
| `/achievements`   | `Achievements.vue`       |
| `/domains`        | `Domains.vue`            |
| `/calendar`       | `Calendar.vue`           |
| `/registrations`  | `Registrations.vue`      |
| `/auth`           | `Auth.vue`               |

These views use reusable components from:
📁 `src/components/ui/` and layout wrappers from:
📁 `src/layouts/`

---

## 🎨 Components
| File                         | Purpose |
|------------------------------|---------|
| `layout/Header.vue`          | Site header, navigation links |
| `layout/Footer.vue`          | Footer with copyright |
| `layout/DefaultLayout.vue`   | Main layout wrapper |
| `ui/TeamCard.vue`            | Card for internal teams |
| `ui/MemberCard.vue`          | Card for core team members |
| `ui/TimelineItem.vue`        | Card for media timeline events |
| `ui/EventCard.vue`           | Card for event registrations |

Each view imports and uses the relevant UI components to keep code modular and maintainable.

---

## 🚀 Setup & Run

### Install dependencies:
```bash
npm install
#   G - E l e c t r a  
 