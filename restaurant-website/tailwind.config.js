/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#1B4332',
          dark: '#0B2A1F',
          light: '#2D6A4F',
        },
        'accent': {
          DEFAULT: '#D4AF37',
          dark: '#B38F1D',
          light: '#E6C65C',
        },
      },
    },
  },
  plugins: [],
}
