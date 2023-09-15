/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    './public/index.html',
    './App.tsx',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  corePlugins: {
    preflight: false
  },
  safelist: ['w-4', 'h-4'],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      'inter-bold': ['Inter-Bold', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#fc5c65',
        secondary: '#4ecdc4',
        black: '#000',
        white: '#fff',
        medium: '#6e6969',
        light: '#f8f4f4',
        dark: '#243039',
        indigo: '#4650DF',
        slate: '#243039',
        skyblue: '#CDE9FF',
        bluehawkes: '#CDE4FD',
        lilac: '#E3D1FF',
        mint: '#CCF6E5',
        blossom: '#DEAFBD',
        orange: '#FC6E44',
        danger: '#ff5252',
        grey: '#929898',
        greylight: '#ECEEF2',
        greysuperlight: '#F5F5F5',
        lightgray: '#e2e5e8',
        amber: '#FAB347',
        brownmuddy: '#945900',
        whiteantique: '#FAEEDC'
      },
      spacing: {
        4.25: '17px',
        4.5: '18px',
        18: '72px',
        23: '92px',
        30: '120px',
        40: '165px'
      }
    }
  },
  plugins: []
}

