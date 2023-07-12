/** @type {import('tailwindcss').Config} */


// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme')
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          base: "#6C00FF",
          light: "#9681EB",
          lila: "#C4B0FF",
        },
        blue: {
          dark: "#6C00FF",
          light: "#2DCDDF",
        },
        white: {
          beige: "#2DCDDF",
          cream: "#FFFEEC",
          500: "#FFFFFF",
        },
        green: {
          dark: "#4E6C50",
        },
        red: {
          base: "#C10000",
          light: "#FF4949",
          warm: "#C70039",
          retro: "#BB6464",
        },
        gray: {
          base: "#DEDEDE",
        },
      },
      screens: {
        'xs': '320px',
        // eslint-disable-next-line no-undef
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
