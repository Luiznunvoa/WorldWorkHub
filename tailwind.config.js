/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: 'var(--black)',
        white: 'var(--white)',
        background_primary: 'var(--background-primary)',
        background_secondary: 'var(--background-secondary)',
        primary: 'var(--primary)',
        text: 'var(--text)',
        text_secondary: 'var(--text-white)',
      },
    },
  },
  plugins: [],
}

