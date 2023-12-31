/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {

      colors: {
        'cst-blue-hover': '#6ECFFF', // You can replace this with your custom color code
        'cst-blue-bg': '#3DBEFF', // You can replace this with your custom color code
        'cst-btn': '#FFF3BB', // You can replace this with your custom color code
        'cst-btn-horver': '#FD7666',
        'cst-crd-grn': '#23564A',
        'cst-ft-grn': '#90D4C5',
        'cst-crd-blu': '#16526F',
        'cst-nav-blu': '#3DBEFF',
        'cst-nav-yel': '#FDD601',
      },

      fontFamily: {
        'barwlow': ['Barlow', 'sans-serif'],
        'Fraunces': ['Fraunces', 'serif']

      }
    },
  },
  plugins: [],
}


