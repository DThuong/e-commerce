/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    fontFamily: {
      main: ["Poppins", "serif"], // Define custom font family
    },
    extend: {
      width: {
        main: "1220px", // Custom width
      },
      backgroundColor: {
        main: "#ee3131", // Custom background color
      },
      color: {
        main: "#ee3131", // Custom text color
      },
      textColor: {
        main: "#ee3131", // Custom text color
      },
      scale: {
        175: '1.75', // 175%
        200: '2',    // 200%
        250: '2.5',  // 250%
        300: '3',    // 300%
      },
    },
  },
  plugins: [],
};
