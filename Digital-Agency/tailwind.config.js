/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        fontColor: '#272D38',
        buttonColor: '#8EADD5',
        fontColor1: '#667085'
      },
    },
  },
  plugins: [],
}

