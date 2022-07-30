/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {

      colors: {
        amarillo: '#FFEFAE',
        naraja: "#EAA664",
        rosaClaro: '#FFC4A9',
        rosaOscuro: '#FA8D74',
        rojo: "#BE5944",
        rojoOscuro: "#670000",
        verdeoOscuro: "#62C8B7",
        verdeClaro: "#7AE4D9",
        
        grisAzulado: "96B1AD",

        naranja: "#FFB152",
        azulClaro: "#59B3FF",

        darkMode1: "#394855",
        darkMode2: "#2C2F32",
        
        
        verdeClaro1: "#7EECCB",
        verdeClaro2: "#91F3B7",
        verdeClaro3: "#AEF89F",
        verdeClaro4: "#D1F986",
        azul1: "#36ADE4",
        azul2: "#628AD4",
        azul3: "#8864AF",
        azul4: "#993B79",
      
      },

      fontFamily: {
        fontPrincipal: ['Inter', 'sans-serif'],
        fontSecundaria: ['Fira Code', 'monospace'],

      },

      fontSize: {
        '11xl': '13rem',
        '10xl': '10rem',
      }
    },
  },
  plugins: [],
}
