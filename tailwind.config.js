const { max } = require('lodash');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        '51': '3.1875rem',
      },
      maxWidth: {
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%',
      },
      colors: {
        'primary': 'rgb(12, 10, 29)',
        'shadow-purple': 'rgb(136 134 168)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
} 