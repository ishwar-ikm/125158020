/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customText: '#8D493A', 
        customBg: '#DFD3C3', 
      },
    },
  },
  plugins: [],
}
