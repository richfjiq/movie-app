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
      platinum: '#E3E3E3',
      black: '#000000',
      'dark-jungle-green': '#081C22',
      'ufo-green': '#1ED07A',
      'dogwood-rose': '#DA2360',
      pear: '#D3D530',
      cyan: '#01B4E4',
    },
    extend: {
      fontFamily: {
        source: ['Source Sans Pro', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        lg: '0 2px 8px rgba(0,0,0,.1)',
      },
    },
  },
  plugins: [],
};
