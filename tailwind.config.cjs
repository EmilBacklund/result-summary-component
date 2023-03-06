/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hankenGrotesk: ['Hanken Grotesk', 'sans-serif'],
      },
      colors: {
        blueText: '#1125D6',
        greenText: '#00BB8F',
        yellowText: '#FFB21E',
        redText: '#FF5555',
        lightBlueText: '#CAC9FF',
        darkNavyText: '#303B59',
        darkNavyButton: '#303B59',
        gradientTopColor: '#7755FF',
        gradientBotColor: '#2F2CE9',
        circleTopGradient: '#4D21C9',
        circleBotGradient: '#2521C9',
      },
      maxWidth: {
        summaryComponent: '736px',
      },
      borderRadius: {
        xxxxl: '32px',
      },
    },
  },
  plugins: [],
};
