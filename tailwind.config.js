/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'oxford-blue': '#032541',
      white: '#ffffff',
      'ghost-white': '#FAF9F8',
    },
    extend: {
      fontFamily: {
        source: ['Source Sans Pro', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
