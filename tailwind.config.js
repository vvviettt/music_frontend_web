/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-base": "#ffffff",
        "text-none-active": "#b3b3b3",
        "bg-base": "#000000",
        "bg-dark": "#121212",
        "bg-gray": "#282828",
        blue: "rgb(24, 119, 242)",
        "border-gray": "#878787",
        error: "#d31225",
        success: "#1ed760",
      },
      backgroundColor: {
        collection: "linear-gradient(135deg,#450af5,#c4efd9)",
      },
      fontFamily: {
        CircularSp: "CircularSp",
      },
    },
  },
  plugins: [],
};
