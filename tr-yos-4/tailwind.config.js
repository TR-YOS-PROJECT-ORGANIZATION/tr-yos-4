/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple:{
          base:'#6C00FF',
          light:'#9681EB',
          lila:'#C4B0FF'
        },
        blue:{
          dark:'#6C00FF',
          light:'#2DCDDF'
        },
        White:{
          beige:'#2DCDDF'
        }
      }
    },
  },
  plugins: [],
}