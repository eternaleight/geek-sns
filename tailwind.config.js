module.exports = {
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      screens: {
        'md': '893px',
        'xs': '560px',
        'xxs': '378px',
        'max-xl': {'max': '1279px'},
        'max-lg': {'max': '1023px'},
        'max-md': {'max': '892px'},
        'max-sm': {'max': '639px'},
        'max-xs': {'max': '559px'},
        'max-xxs': {'max': '377px'},
      },
      fontFamily: {
        noto: ["Noto Sans JP"],
        rubic: ["Rubic"],
        inter: ["Inter"],
        alliance : ["alliance-black"],
      },
    },
  },
  plugins: [],
  important: true
}
