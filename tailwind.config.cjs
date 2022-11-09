module.exports = {
  mode: 'jit',
  purge: ["./src/components/*.{jsx}",
    "./src/pages/*.{jsx}",
    "./*.{html,jsx, js}",
    "./*{html"
],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}