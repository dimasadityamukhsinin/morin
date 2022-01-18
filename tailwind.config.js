const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    zIndex: {
      '-1': '-1',
      '-10': '-10',
      0: 0,
      1: 1,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      auto: 'auto',
    },
    fontFamily: {
      default: ['Poppins', 'sans-serif'],
      nutmeg: ['Nutmeg', 'sans-serif'],
    },
    fontSize: {
      'h1': '72px',
      'h2': '52px',
      'body': '15px',
      'mtitle': '36px',
      'ctitle': '32px',
      'ctitleSmall': '24px',
      'ctitleBig': '40px',
      '26px': '26px',
    },
    // custom screens
    screens: {
      'max-sm': { max: '550px' },
      'max-md': { max: '768px' },
      'max-lg': { max: '1150px' },
      'max-xl': { max: '1280px' },
      ...defaultTheme.screens,
    },
    flexGrow: {
      1: 1,
      2: 1,
    },
    extend: {
      maxWidth: {
        '18rem': '18rem',
      },
      spacing: {
        '10px': '10px',
      },
      flexBasis: {
        '28%': '28%',
        '72%': '72%',
        '70%': '70%',
        '40%': '40%',
        '30%': '30%',
        '60%': '60%',
      },
      boxShadow: {
        darker:
          '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
        navbar: '2px 2px 2px 0px rgba(0,0,0,0.1)',
        normal: '2px 2px 4px 0px rgba(0,0,0,0.25)',
        product: '2px 2px 4px 0px rgba(0,0,0,0.1)'
      },
      height: {
        'screen-1/2': '50vh',
        's-30': '30vh',
        's-40': '40vh',
        's-50': '50vh',
        's-100': '100vh',
        's-150': '150vh',
        's-200': '200vh',
        '10vh': '10vh',
        '15vh': '15vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '30vh': '30vh',
        '50vh': '50vh',
        '55vh': '55vh',
        '60vh': '60vh',
        '65vh': '65vh',
        '70vh': '70vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '32px': '32px',
        '36px': '36px',
        '24px': '24px',
        '16px': '16px',
        '15rem': '15rem',
        '20rem': '20rem',
        '25rem': '25rem',
        '30rem': '30rem',
        '36rem': '36rem',
        '46rem': '46rem',
        '56rem': '56rem',
        '60rem': '60rem',
        header: '100px',
      },
      width: {
        '16px': '16px',
        '24px': '24px',
        '32px': '32px',
        '36px': '36px',
        '30rem': '30rem',
        '36rem': '36rem',
        '46rem': '46rem',
        '52rem': '56rem',
        '56rem': '56rem',
        '60rem': '60rem',
        content: '46rem',
        's-30': '30vw',
        's-40': '40vw',
        's-50': '50vw',
      },
      colors: {
        "m-blue": '#175BA7',
        "m-red": '#E82128',
        'm-l-blue': '#66C1EA',
        'm-b-lbue': '#66C1EA',
        'm-n-black': '#1D1D1B',
        'm-n-ivory': '#FFFEF9',
        'm-s-peach': '#FFECD8',
        'm-s-lblue': '#D1F1FF',
        'm-s-lyellow': '#FFF7B0',
        'm-s-lorange': '#FFE5BF',
        'm-s-lpurple': '#ECE3FF',
        'm-s-lpink': '#FFE4E3',
      },
      inset: {
        '-0.5': '-0.5px',
        '40%' : '40%',
      },
      scale: {
        '2': '2',
      },
      zIndex: {
        min1: '-1',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
      },
      borderRadius: {
        '50%': '50%',
        'round-product': '100% / 10%',
      },
    },
  },
  variants: {
    extend: {
      top: ['hover'],
    },
    margin: ['responsive', 'hover', 'first', 'last'],
  },
  plugins: [
    require('tailwindcss-padding-safe'),
    require('@tailwindcss/aspect-ratio'),
  ],
};