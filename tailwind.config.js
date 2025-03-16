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
        san_francisco: "url('https://i.postimg.cc/BvrgpMh4/sanfrancisco.jpg')",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        "kanit-thin": ["Kanit", "sans-serif"],
        "archivo-black-regular": ["Archivo Black", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0rem)" },
          "33%": { transform: "translateY(-2rem)" },
          "66%": { transform: "translateX(4rem)" },
          "100%": { transform: "translateX(-1rem)" },
        },
        climb: {
          "0%": { transform: "translateY(1rem)" },
          "20%": { transform: "translateX(4rem)" },
          "40%": { transform: "translateY(1rem)" },
          "60%": { transform: "translateX(4rem)" },
          "80%": { transform: "translateY(1rem)" },
          "100%": { transform: "translateX(4rem)" },
        },
        jump: {
          "0%": { transform: "translateY(0rem)" },
          "100%": { transform: "translateY(-1rem)" },
        },
        turn: {
          "0%": { transform: "translateX(0rem)" },
          "100%": { transform: "translateX(-0.5rem)" },
        },
        show: {
          "0%": { opacity: "0%" },
          "50%": { opacity: "50%" },
          "100%": { opacity: "100%" },
        },
        slide: {
          "0%": { transform: "translateY(-36rem)" },
          "100%": { transform: "translateY(0rem)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite alternate",
        climb: "climb 20s ease-in-out infinite alternate",
        jump: "jump 2s ease-in-out infinite alternate",
        turn: "turn 2s ease-in-out infinite alternate",
        show: "show 1.5s ease-in-out",
        slide: "slide 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
