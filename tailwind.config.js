module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        my_bounce: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(-25%)', opacity: '75%' },
          '50%': { transform: 'translateX(-50%) translateY(-7%)', opacity: '100%' },
        },
      },
      animation: {
        my_bounce: 'my_bounce 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
