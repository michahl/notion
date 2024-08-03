/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'pomodoro': ['Space Grotesk'],
      'retro-clock': ['Bebas Neue', 'cursive']
    },
    extend: {},
  },
  plugins: [],
}