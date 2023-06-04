/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        "gilroy-light": ["Gilroy-Light", "sans-serif"],
      },
      colors: {
        white: "#F9FBFD",
        primary: "#005AE2",
        secondary: "#1E3448",
      },
    },
    plugins: [],
  },
};
