/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        saira: ["Saira Stencil One", "cursive"],
        hostgrotesk: ["Host Grotesk", "sans-serif"],
      },

      colors: {
        whitegrey: "hsla(22 0% 81% / 0.93)",
        white: "hsl(0, 0%, 100%)",
        dark: "hsl(0, 0%, 12%)",
        ash: "hsl(0, 0%, 37%)",
        cream: "#F6F1E9",
        offwhite: "#FAF7F0",
        magenta: "#982B1C",
        navy: "#0C1844",
        lightGreen: "#004225",
        hazel: "#FBFBFB",
        gray: "#F5EDED",

        orange: "hsl(24, 74%, 58%)",
        yellow: "hsl(51, 95%, 54%)",
        scarlet: "hsl(13, 96%, 47%)",
        black: "hsl(0, 0%, 0%)",
        brightRed: "#AF1740",
        offBlack: "#4A4947",
        lightPurple: "#522258",
      },
      boxShadow: {
        "3xl": "-5px 5px 10px rgba(0, 0, 0, 0.5);",
      },
    },
  },
  plugins: [],
};
