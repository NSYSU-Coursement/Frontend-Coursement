/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg': "1140px"
    }
  },
  colors: {
    'gray': '#CDCDCD',
    "blue": '#19647E'
  },
  plugins: [],
}