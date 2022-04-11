const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    extend: {},
    colors: {
      ...defaultColors,
      red: '#e8513e',
      green: '#26a0a9',
    },
  },
  plugins: [],
}
