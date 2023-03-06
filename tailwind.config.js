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
      },
      backgroundColor: {
        collection: "linear-gradient(135deg,#450af5,#c4efd9)",
      },
    },
  },
  plugins: [],
};
