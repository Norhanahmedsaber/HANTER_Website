/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Jomolhari": ["Jomolhari", "sans-serif"],
        "Next-Bravo": ["Next-Bravo", "sans-serif"]
      }
    },
  },
  plugins: [],
}