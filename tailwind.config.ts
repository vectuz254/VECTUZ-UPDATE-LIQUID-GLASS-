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
          darkMuted: '#1A212
