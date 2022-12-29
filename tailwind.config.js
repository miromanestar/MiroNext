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
      }
    },
  },
  plugins: [],
}