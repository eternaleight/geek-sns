module.exports = {
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      screens: {
        'max-xl': {'max': '1279px'},
        'max-lg': {'max': '1023px'},
        'max-md': {'max': '767px'},
        'max-sm': {'max': '639px'},
        'max-xs': {'max': '559px'},
      },
      fontFamily: {
        noto: ["Noto Sans JP"],
        dancing: ["Dancing Script"],
        alliance : ["alliance-black"],
      },
    },
  },
  plugins: [],
  important: true,
}
