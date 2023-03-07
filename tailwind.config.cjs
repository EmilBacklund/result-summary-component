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
        gradientTopColor: 'rgba(119, 85, 255, 1)',
        fadedTopColor: 'rgba(119, 85, 255, 0)',
        fadedBotColor: 'rgba(47, 44, 233, 0)',
        gradientBotColor: 'rgba(47, 44, 233, 1)',
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
