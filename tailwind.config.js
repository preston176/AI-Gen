/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: '400px',
      tablet: '640px',
      laptop: '1024px',
      small_mobile: '320px',
      desktop: '1280px',
      md: '768px',
      sm: '640px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {},
  },
  plugins: [],
}