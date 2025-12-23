/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue': '#201F24', // Primary Color (hsl(255deg 6.06% 12.94%))
        'grey': '#AFAFB0',
        'text-blue': '#202022',
        "background": '#F8F5F0', // Background Color (hsl(45deg 33.33% 95.29%))
        'green': '#2F7266', // Icon Color (hsl(178.54deg 48.24% 33.33%))
        "offWhite": "#FFFFFF", // Secondary Color (hsl(0deg 0% 100%))
        "navy": "#615F6D",
        "cyan":"#87C7D2" ,
        "yellow":"#CAB461",
        "purple":"#ECCCAE"
      },
    },
  },
  plugins: [],
}
