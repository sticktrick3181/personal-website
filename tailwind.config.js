module.exports = {
  important: true, // to override mui styles (will be removed post change)
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['last'],
      boxShadow: ['focus'],
    },
  },
  plugins: [],
}
