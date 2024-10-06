/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#5f6FFF"
      },
      gridTemplateColumns:{
        'auto' : 'repeat(auto-fill, minmax(250px, 1fr))'
      }
    },
  },
  plugins: [],
}