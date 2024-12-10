/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#eaeef1',
        'secondary': '#34C759',
        'tertiary': '#ecf0f3',
      },
      boxShadow: {
        'outside': '-3px -3px 7px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.25)',
        'inside': 'inset -3px -3px 7px #ffffff, inset 3px 3px 5px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide'),
  ],
}

