/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FAF9F6",
          surface: "#F4F3F0",
          card: "#FFFFFF",
          text: "#1F242A",
          muted: "#667080",
          navy: "#132338",
          navyDark: "#0B1522",
          navyDeep: "#070E18",
          blueAccent: "#1E3A5F",
          bronze: "#9E7844",
          gold: "#B88E52",
          goldLight: "#D4B07B",
          border: "#E8E6E1",
          borderDark: "#263548",
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
