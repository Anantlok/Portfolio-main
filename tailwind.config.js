/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'window-bg': '#fdeca6',
        'window-frame': '#e7d8b4',
        'window-light': '#ffffff',
        'window-dark': '#8a8987',
      },
      fontFamily: {
        mixed: ['"MixedRegular"', 'sans-serif'],
        poster: ['"HybridPosterFont"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}