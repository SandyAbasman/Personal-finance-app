/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue': '#201F24',
        'grey': '#AFAFB0',
        'white': '#FFFFFF',
        'text-blue': '#202022',
        "background": '#F8F5F0',
        'green': '#2F7266',
      },
    },
  },
  plugins: [],
}
