/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    fontFamily: {
      main: ['Poppins', 'serif'], // Define custom font family
    },
    extend: {
      width: {
        main: '1220px', // Custom width
      },
      backgroundColor: {
        main: '#ee3131', // Custom background color
      },
      color: {
        main: '#ee3131', // Custom text color
      },
    },
  },
  plugins: [],
}