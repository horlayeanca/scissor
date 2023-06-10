/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        gil: ["Gilroy-Light", "sans-serif"],
      },
      colors: {
        white: "#F9FBFD",
        primary: "#005AE2",
        secondary: "#1E3448",
        linear:
          "linear-gradient(180deg, #1E3448 99.99%, rgba(30, 52, 72, 0) 100%)",
      },
    },
    plugins: [],
  },
};
