import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'sans': ['Roboto', 'sans-serif'],
        'lemonRegular': ['LEMONMILK', 'sans-serif'],
        'lemonBold': ['LEMONMILKBOLD', 'sans-serif'],
        'lemonLight': ['LEMONMILKLIGHT', 'sans-serif'],

      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        green: {
          400: '#B1CFAD',
          500: '#52886E',
          600: '#42794C',
        },
        orange: {
          400: '#0F243B'
        }
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),
  require("daisyui"),
  require('@tailwindcss/typography')],
};
export default config;
