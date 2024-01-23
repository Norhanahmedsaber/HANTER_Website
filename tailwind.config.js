/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#6160B8",
        "secondary":"#0B8D66",
        "text":"#FFF"
      },
      fontFamily:{
        "Jomolhari": ["Jomolhari", "sans-serif"],
        "Next-Bravo": ["Next-Bravo", "sans-serif"]
      }
    },
  },
  plugins: [],
}