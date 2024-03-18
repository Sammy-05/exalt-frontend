/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        georgia: ['Georgia', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'p': '18px',
        'subheading': '22px',
        'heading': '40px',
        'mainheading': '50px',
        'button': '20px',
        'mobile-p': '12px',
        'mobile-subheading': '18px',
        'mobile-heading': '26px',
        'mobile-mainheading': '32px',
        'mobile-button': '14px',
        // Add more font sizes as needed
      },
    },
    colors: {
      asterisk:"FF0000",
      navyblue: "#051C2C",
      black: "#060200",
      lightblue: "#00A9F4",
      violet: "#2251FF",
      white: "#ffffff",
      grey: "#F0F0F0",
      navbarscroll: "#313236",
    },
  },
  plugins: [],
}

