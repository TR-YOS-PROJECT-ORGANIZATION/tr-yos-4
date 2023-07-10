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
        white:{
          beige:'#2DCDDF',
          cream:'#FFFEEC'
        },
        green:{
          dark:'#4E6C50'
        },
        red:{
          base:'#C10000',
          light:'#FF4949',
          warm:'#C70039',
          retro:'#BB6464'
        },
        gray:{
          base:'#DEDEDE'
        }
      }
    },
  },
  plugins: [],
}