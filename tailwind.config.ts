import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        synthwave: {
          bg: '#0F0C29',
          primary: '#FF00FF',
          accent: '#00FFFF',
          text: '#FFE7F9',
        },
        matrix: {
          bg: '#0d0d0d',
          primary: '#00FF41',
          accent: '#0077FF',
          text: '#BFFFBF',
        },
      },
    },
  },
  plugins: [],
};
export default config;