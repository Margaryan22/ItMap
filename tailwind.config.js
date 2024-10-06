/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '320px',
      sm2: '654px',
      md: '768px',
      lg: '1030px',
      xl: '1440px',
    },
  },
  plugins: [],
};
