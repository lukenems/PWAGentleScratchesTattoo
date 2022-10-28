const config = {
  mode: 'jit',
  purge: ["./src/**/*.{html,js, jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

export default {config}