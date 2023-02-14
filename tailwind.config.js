/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'montserrat': ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage:{
        'shot1': "url('./shot1.jpg')",
        'bloggy': "url('./bloggy.png')",
        'bloggy1': "url('./bloggy1.png')",
        'shot2': "url('./shot2.jpg')",
        'shot3': "url('./shot3.jpg')",
        'shot4': "url('./shot4.jpg')",
      },
      colors:{
        'transparent-rgba': 'rgba(255,255,255,0.3)',
        'transparent-rgba2': 'rgba(29,33,35,0.03)',
      }
    },
  },
  plugins: [],
}
