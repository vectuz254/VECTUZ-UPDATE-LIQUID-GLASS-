import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#090B0E',
          light: '#F8FAFC',
        },
        surface: {
          dark: '#141920',
          light: '#FFFFFF',
          darkMuted: '#1A2129',
          lightMuted: '#F1F5F9',
        },
        accent: {
          green: '#00E87A',
          gold: '#F5C842',
          red: '#E84444',
          blue: '#3A8FE8',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;