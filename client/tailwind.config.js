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
      textColor: {
        main: "#ee3131", // Custom text color
      },
      scale: {
        175: "1.75", // 175%
        200: "2",    // 200%
        250: "2.5",  // 250%
        300: "3",    // 300%
      },
      keyframes: {
        "slide-top": {
          "0%": {
            "-webkit-transform": "translateY(0)",
            transform: "translateY(0)", // Removed unnecessary semicolon
          },
          "100%": {
            "-webkit-transform": "translateY(-100px)",
            transform: "translateY(-100px)", // Removed unnecessary semicolon
          },
        },
      },
      animation: {
        "slide-top": "slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
  ],
};
