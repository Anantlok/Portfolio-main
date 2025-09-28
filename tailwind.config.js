/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ivory': '#F8F4E3',       // A soft, off-white cream
        'stone': '#D7CEC7',       // A muted, light taupe/off-white
        'charcoal': '#000000',    // A dark, slate blue-gray for text
        // Alias for consistency
        'window-frame': '#D7CEC7', 
        'window-bg': '#F8F4E3',
        'window-dark': '#3E4C59',
      },
      fontFamily: {
        'mixed': ['MixedRegular', 'sans-serif'],
        'hybrid': ['HybridPosterFont', 'serif'],
      }
    },
  },
  plugins: [],
}

