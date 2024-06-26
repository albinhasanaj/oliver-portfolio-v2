module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'theme-blue': '#66FCF1',
      },
      fontFamily: {
        'Aldrich': ['Aldrich', 'sans-serif'],
        'Monda': ['Monda', 'sans-serif'],
        'Chathura': ['Chathura', 'sans-serif'],
      },
    },
    screens: {
      'xs': '425px',
      'xs2': '510px',
      'sm': '640px',
      'md': '768px',
      'md2': '960px',
      'lg': '1024px',
      'lg2': '1120px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
