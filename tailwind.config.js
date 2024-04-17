/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cmnBG: "#0369a1",
      },
    },
  },
  plugins: [require("daisyui")],
}