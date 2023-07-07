/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          dark: "#377375",
          light: "#DDEDE3",
        },
        grey: {
          primary: "#DAD7CD",
        },
      },
    },
  },
  plugins: [],
};
