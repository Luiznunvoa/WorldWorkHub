/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./*.html"],
  theme: {
    extend: {
      colors: {
        black: "#505050",
        white: "#FAFAFA",
        green: "#3c9366",
        background_primary: "#E0E0E0",
        background_secondary: "#C0C0C0",
        primary: "#F0F0F0",
        outline: "#707070",
        divider: "#D0D0D0",
        text: "#0a0a0a",
        text_secondary: "#F0F0F0",
      },
      backgroundImage: {
        custom_gradient: "linear-gradient(0deg, #E0E0E0 48%, #3c9366 48%)",
      },
      fontFamily: {
        "Roboto": ["Roboto", "sans-serif"],
        "kanit-thin": ["Kanit", "sans-serif"],
        "archivo-black-regular": ["Archivo Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};


