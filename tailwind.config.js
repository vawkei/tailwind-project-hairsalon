/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'widescreen':{'raw':'(min-aspect-ratio:3/2)'},
        'tallscreen':{'raw':'(max-aspect-ratio:1/2)'}
      }
    },
  },
  plugins: [],
}

