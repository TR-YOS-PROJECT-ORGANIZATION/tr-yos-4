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
          dark: "#1D4ED8",
          light: "#BCDEFA",
          base: "#DBEAFE",
          facebook: "#3B5998",
          twitter: "#00ACED",
          linkedin: "#1585B9",
        },
        white: {
          beige: "#2DCDDF",
          cream: "#FFFEEC",
          500: "#FFFFFF",
        },
        green: {
          dark: "#1A4731",
          light: "#51D88A",
          base: "#D1FAE5",
        },
        red: {
          base: "#C10000",
          light: "#FF4949",
          warm: "#C70039",
          retro: "#BB6464",
          google: "#DD4B39",
        },
        gray: {
          base: "#3D4852",
          light: "#F1F5F8",
        },
      },
    },
  },
  plugins: [],
};
