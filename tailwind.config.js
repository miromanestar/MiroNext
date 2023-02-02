/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#2E3440',
        secondaryBg: '#3B4252',
        tertiaryBg: '#434C5E',
        highlight: '#88C0D0',
        highlight2: '#81A1C1',
        nordgreen: '#A3BE8C',
        nordred: '#BF616A',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    },
  },
  plugins: [],
}