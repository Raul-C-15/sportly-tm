/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      colors: {
        forest: {
          DEFAULT: '#064E3B',
          900: '#064E3B',
          950: '#022C22',
        },
        mint: {
          DEFAULT: '#ECFDF5',
          50: '#F0FDF4',
          100: '#DCFCE7',
        },
      },
      boxShadow: {
        sport: '0 8px 30px -6px rgba(6, 78, 59, 0.08), 0 4px 12px -4px rgba(16, 185, 129, 0.06)',
        'sport-hover': '0 14px 36px -6px rgba(6, 78, 59, 0.14), 0 6px 16px -4px rgba(16, 185, 129, 0.12)',
      },
    },
  },
  plugins: [],
};
