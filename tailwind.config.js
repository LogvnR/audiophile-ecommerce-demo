/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      Manrope: ['Manrope', 'sans-serif'],
    },
    extend: {
      colors: {
        'burnt-orange': '#D87D4A',
        'off-black': '#101010',
        'light-grey': '#F1F1F1',
        'off-white': '#FAFAFA',
        peach: '#FBAF85',
        error: '#CD2C2C',
      },
    },
  },
  plugins: [],
};
