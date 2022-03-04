module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      qwigley: ['Qwigley', 'cursive'],
      ubuntu: ['Ubuntu', 'sans-serif']
    }
  },
  prefix: 'tw-',
  plugins: [],
}
