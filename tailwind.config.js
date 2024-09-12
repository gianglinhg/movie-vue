/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "color-main": "#e4d804",
      "white": "#ffffff",
      "dark": "#16191d",
      "dark-main": "#171d22",
      "gray": "#2d303d",
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [],
}