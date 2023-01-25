/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/containers/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //grey
        "theme-grey": "rgb(71, 69, 69)",
        "theme-blue": "#5959df",
      },
    },
  },
  plugins: [],
};
