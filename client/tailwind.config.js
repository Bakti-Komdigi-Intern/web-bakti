/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2A3479',
        secondary: '#C42126',
        tertiary: '#03958A'
      }
    },
  },
  plugins: [],
}