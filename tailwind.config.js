/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#1b2023",
        "secondary":"#504F4F",
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