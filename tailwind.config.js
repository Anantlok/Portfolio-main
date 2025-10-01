/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- New Natural Green Palette ---
        'background': '#FDFBF4',      // Use for the main page background
        'surface': '#D0D8C3',         // Use for cards, modals, or secondary backgrounds
        'primary': '#008F4C',         // Use for primary buttons, links, and important accents
        'highlight-soft': '#D1DEA9',  // Use for hover states or subtle highlights
        'text-primary': '#073E1E',    // Use for headings and primary text for high contrast
      },
      fontFamily: {
        'mixed': ['MixedRegular', 'sans-serif'],
        'hybrid': ['HybridPosterFont', 'serif'],
      }
    },
  },
  plugins: [],
}