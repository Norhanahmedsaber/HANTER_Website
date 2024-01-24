/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#303030",
        "secondary":"#8F8C8C",
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