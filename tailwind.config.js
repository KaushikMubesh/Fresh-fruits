/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#de2c4d",
        secondary:"#fb923c",
      },
      screens:{
        'max-md-lg': {'max': '900px'}, 
        'max-md-sg' : {'max':'800px'},
        'max-md-kg' : {'max':'780px'},
        'min-md-po' :{'min':'780px'},
        'md-jk' : '300px'
      },
      fontFamily:{
        poppins:["Poppins","san-serif"],
        averia:["Averia Serif Libre","serif"]
      }
    },
  },
  plugins: [],
}