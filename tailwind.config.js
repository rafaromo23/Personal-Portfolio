/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkest: '#0b2d3b',
        darker: '#355463',
        dark: '#5f7e8e',
        light: '#8baabb',
        lighter: '#b9d9eb',
        lightest: '#e6f4f1',
      },
    },
  },
  plugins: [],
}