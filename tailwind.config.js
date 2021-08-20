const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      primary: {
        50: '#FFF1E0',
        100: '#FFDCB3',
        200: '#FFC580',
        300: '#FFAE4D',
        400: '#FF9C26',
        500: '#FF8B00',
        600: '#FF8300',
        700: '#FF7800',
        800: '#FF6E00',
        900: '#FF5B00',
      },

      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
