/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Darkcyan': 'hsl(185, 75%, 39%)',
        'Verydarkdesaturatedblue': 'hsl(229, 23%, 23%)',
        'Darkgrayishblue': 'hsl(227, 10%, 46%)'
      }
    },
  },
  plugins: [],
}