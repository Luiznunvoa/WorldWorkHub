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
        custom_gradient: 'linear-gradient(0deg, #E0E0E0 48%, #3c9366 48%)',    
      },
      keyframes: {
        colorAnimation: { 
          '0%':  {color: '#ff006e', fill: '#ff006e'},
          '25%': {color: '#1982c4', fill: '#1982c4'},
          '50%': {color: '#06d6a0', fill: '#06d6a0'},
          '75%': {color: '#ffca3a', fill: '#ffca3a'},
          '100%':{color: '#ff006e', fill: '#ff006e'},
        },
        float: {
          '0%':   { transform: 'translateY(0rem)' },
          '33%':  { transform: 'translateY(-2rem)' },
          '66%':  { transform: 'translateX(4rem)' },
          '100%':  { transform: 'translateX(-1rem)' },
        },
        climb: {
          '0%':   { transform: 'translateY(1rem)' },
          '20%':  { transform: 'translateX(4rem)' },
          '40%':  { transform: 'translateY(1rem)' },
          '60%':  { transform: 'translateX(4rem)' },
          '80%':  { transform: 'translateY(1rem)' },
          '100%': { transform: 'translateX(4rem)' },
        },
        updown: {
          '0%':   { transform: 'translateY(0rem)' },
          '100%':  { transform: 'translateY(-1rem)' },
        },
        lefright: {
          '0%':   { transform: 'translateX(0rem)' },
          '100%': { transform: 'translateX(-0.5rem)' },
        },

      },
      animation: {
        colorAnimation: 'colorAnimation 2s linear infinite',
        float:   'float 6s ease-in-out infinite alternate',
        climb:   'climb 20s ease-in-out infinite alternate',
        updown: 'updown 2s ease-in-out infinite alternate',
        lefright: 'lefright 2s ease-in-out infinite alternate',
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
