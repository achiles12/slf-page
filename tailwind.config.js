/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {'slf': {
        100: '#FFF0D6',
        200: '#F47DB2',
        300: '#19105A',
        400: '#FF5954',
        500: '#D01645',
        600: '#630A04',
        700: '#FFCA00',
        800: '#ECAB23',
        900: '#0E3846',
      }},
    },
    fontFamily: {
      signature: ["Great Vibes"],
      written: ["Sacramento"],
      blocky: ["Catamaran"],
      other: ["Gloock"],
      display:["Londrina Solid"],
    },
    
  },
  plugins: [],
}
