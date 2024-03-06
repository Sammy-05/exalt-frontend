/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        georgia: ['Georgia', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
        // Add any other font weights you need here
      },
    },
    colors: {
      navyblue: "#051C2C",
      black: "#060200",
      lightblue: "#00A9F4",
      violet: "#2251FF",
      white: "#ffffff",
      grey: "#F0F0F0",
    },
  },
  plugins: [],
}

