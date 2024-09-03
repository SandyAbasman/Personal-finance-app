/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue': '#201F24',
        'grey': '#AFAFB0',
        'text-blue': '#202022',
        "background": '#F8F5F0',
        "green": '#2F7266',
        "offWhite": "#f8f8f8",
        "navy": "#615F6D",
        "cyan":"#87C7D2" ,
        "yellow":"#CAB461",
        "purple":"#ECCCAE",
      },
    },
  },
  plugins: [],
}
