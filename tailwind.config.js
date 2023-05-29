/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url(/public/images/background-home-desktop.jpg)",
        "home-tablet": "url(/public/images/background-home-tablet.jpg)",
        "home-mobile": "url(/public/images/background-home-mobile.jpg)",
        "technology-bg":
          "url(/public/images/background-technology-desktop.jpg)",
        "technology-tablet":
          "url(/public/images/background-technology-tablet.jpg)",
        "technology-mobile":
          "url(/public/images/background-technology-mobile.jpg)",
        "crew-bg": "url(/public/images/background-crew-desktop.jpg)",
        "crew-tablet": "url(/public/images/background-crew-tablet.jpg)",
        "crew-mobile": "url(/public/images/background-crew-mobile.jpg)",
        "destination-bg":
          "url(/public/images/background-destination-desktop.jpg)",
        "destination-tablet":
          "url(/public/images/background-destination-tablet.jpg)",
        "destination-mobile":
          "url(/public/images/background-destination-mobile.jpg)",
      },

      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        condensed: ["Barlow", "Condensed", "sans-serif"],
        belle: ["Bellefair", "serif"],
      },
      colors: {
        "light-black": "rgba(255, 255, 255, 0.04)",
        "home-head": "#D0D6F9",
      },
    },
  },
  plugins: [],
};
