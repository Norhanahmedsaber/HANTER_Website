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
        "buttons":"#1C7ED6",
        "text":"#FFF"
      },
      fontFamily:{
        "Jomolhari": ["Jomolhari", "sans-serif"],
        "sem1": ["sem1", "sans-serif"],
        "sem2": ["sem2", "sans-serif"],
        "Next-Bravo": ["Next-Bravo", "sans-serif"]
      }
    },
  },
  plugins: [],
}