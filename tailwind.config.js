/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./*.html"],
  theme: {
    extend: {
      colors: {
        black: '#505050',
        white: '#FAFAFA',
        background_primary: '#E0E0E0',
        background_secondary: '#C0C0C0',
        primary: '#F0F0F0',
        outline: '#707070',
        divider: '#D0D0D0',
        text: '#0a0a0a',
        text_secondary: '#F0F0F0',
      },
      backgroundImage: {
        custom_gradient: 'linear-gradient(0deg, rgba(224,224,224,1) 48%, rgba(61,149,103,1) 48%)',
        hero_pattern: "url('assets/person.png')",
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
