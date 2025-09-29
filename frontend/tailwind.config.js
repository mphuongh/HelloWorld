/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-custom': 'bounce 1s ease-in-out',
        'shake': 'shake 0.5s ease-in-out',
        'pulse-custom': 'pulse 1s ease-in-out',
        'spin-custom': 'spin 1s ease-in-out',
        'fade': 'fade 1s ease-in-out',
        'scale': 'scale 0.5s ease-in-out',
        'flip': 'flip 0.6s ease-in-out',
        'glow': 'glow 1s ease-in-out',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '1' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 5px currentColor' },
          '50%': { textShadow: '0 0 20px currentColor, 0 0 30px currentColor' },
        },
      }
    },
  },
  plugins: [],
}