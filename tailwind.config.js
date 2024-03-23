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
      categoryStyles: {
        'artificial-intelligence': {
          backgroundColor: '#dbeafe',
          color: '#1e40af',
          '&:hover': {
            backgroundColor: '#bfdbfe',
          },
        },
        programming: {
          // ... (programming styles)
        },
        tutorial: {
          // ... (tutorial styles)
        },
        interview: {
          // ... (interview styles)
        },
        marketing: {
          // ... (marketing styles)
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
} 