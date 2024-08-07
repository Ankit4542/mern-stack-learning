/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        playFair: "'Playfair Display', serif",
        lato : "'Lato', sans-serif",
      }
    },
  },
  plugins: [],
}