import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'antique-white': '#FCF5EF',
        'orange-yellow': '#FEA734',
        'dark-orange-yellow': '#C2812A',
        'red-orange': '#FF7B41',
        'dodger-blue': '#01C3FF',
        'royal-blue': '#355085',
        'dark-blue': '#1B1A35',
        azure: '#0077FF',
        available: '#81C784',
        'not-available': '#808080',
        reserved: '#E59473',
        'usage-history': '#6495ED'
      },
      boxShadow: {
        'effect-1': '0px 5px 7px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        text: 'text-transition 1s linear',
        modal: 'modal-opacity 0.2s ease-out',
      },
      keyframes: {
        'text-transition': {
          '0%': {
            opacity: '0',
            transform: 'translate(0px, 150px)',
          },
          '50%': {
            opacity: '0.3',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0px, 0px)',
          },
        },
        'modal-opacity': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '100',
          },
        },
      },
    },
  },
};
