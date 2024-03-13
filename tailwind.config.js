module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(12, 10, 29)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
} 