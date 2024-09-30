/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue': '#201F24',
        'grey-900': '#201F24',
        'grey-500': '#696868',
        'grey-300': '#B3B3B3',
        'grey-100': '#F2F2F2',
        'text-blue': '#202022',
        "background": '#F8F4F0',
        'green': '#277C78',
        "offWhite": "#f8f8f8",
        "navy": "#626070",
        "cyan":"#87C7D2" ,
        "yellow":"#F2CDAC",
        "purple":"#826CB0",
        "red":"#C94736",
        "Turquoise":"#597C7C",
        "Brown":"#93674F",
        "Magenta":"#934F6F",
        
      },
      spacing: {
        '500': '2.5rem',
        '400': '2rem',
        '300': '1.5rem',
        '250': '1.25rem',
        '200': '1rem',
        '150': '0.75rem',
        '100': '0.5rem',
        '50': '0.25rem',
      },
    },
  },
  plugins: [],
}
