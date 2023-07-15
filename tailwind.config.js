/** @type {import('tailwindcss').Config} */
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
          dark: "#1C3D5A",
          light: "#BCDEFA",
        },
        white: {
          beige: "#2DCDDF",
          cream: "#FFFEEC",
          500: "#FFFFFF",
        },
        green: {
          dark: "#1A4731",
          light: "#51D88A",
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
    },
  },
  plugins: [],
};