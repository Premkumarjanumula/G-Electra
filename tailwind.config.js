/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgdark: '#0f0f0f',
        primary: '#00f6ff',
        secondary: '#ff00f6',
        glow: '#00fff7',
      },
      fontFamily: {
        techno: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
