/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rosePink: "#E8B4B8",
        subtlePink: "#EED6D3",
        coffeePot1: "#A49393",
        coffeePot2: "#67595E",
        lavendar: "#7189ff",
      },
      fontFamily: {
        heading: ["Libre Baskerville", "serif"],
        brandName: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
