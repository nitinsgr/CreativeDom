module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily : {
        Panchang_Bold: ['Panchang Bold'],
        Panchang_Light: ['Panchang light'],
        Panchang_Extralight : ['Panchang Extralight'],
        Neue : ['Neue Machina'],
        Gangster : ['Gangster Grotesk']
      },
      fontSize : {
        '11xl' : '18rem',
        '10xl' : '12rem',
        '9xl' : '9rem',
        '1xl' : '1.1rem'
      },
      colors : {
        primaryColor : ['#00539CFF'],
        secColor : ['#EEA47FFF'],
        editorialPrimary : ['#FDD20EFF'],
        editorialSec : ['#F93822FF'],
        analogColor : ['#FFFF4D'],
        combiColor : ['#71FF4D']
      }
    },
  },
  plugins: [],
}
