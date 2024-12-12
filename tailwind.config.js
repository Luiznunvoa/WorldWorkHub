/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./*.html"],
  theme: {
    extend: {
      colors: {
        black: '#505050',
        white: '#FAFAFA',
        green: '#3c9366',
        background_primary: '#E0E0E0',
        background_secondary: '#C0C0C0',
        primary: '#F0F0F0',
        outline: '#707070',
        divider: '#D0D0D0',
        text: '#0a0a0a',
        text_secondary: '#F0F0F0',
      },
      backgroundImage: {
        custom_gradient: 'linear-gradient(0deg, #C0C0C0 48%, #3c9366 48%)',
        hero_pattern: "url('assets/person.png')",
        hand: "url('assets/hand.png')",
      },
      keyframes: {
        colorAnimation: { 
          '0%':  {color: '#ff006e'},
          '25%': {color: '#1982c4'},
          '50%': {color: '#06d6a0'},
          '75%': {color: '#ffca3a'},
          '100%':{color: '#ff006e'},
        },
      },
      animation: {
        colorAnimation: 'colorAnimation 2s linear infinite',
      },
      fontFamily: {
        'Roboto': ["Roboto", "sans-serif"],
        'kanit-thin': ["Kanit", "sans-serif"],
        'archivo-black-regular': ["Archivo Black", "sans-serif"],
      },
      screens: {
        'tablet': '800px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [],
};
