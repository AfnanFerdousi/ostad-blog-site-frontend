/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [require("daisyui")],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans'],
        mulish: ['Mulish', 'sans'],
      },
    },
  },
}
