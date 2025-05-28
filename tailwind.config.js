/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A6741',
          light: '#6B8A5A',
          dark: '#2D3E26'
        },
        secondary: {
          DEFAULT: '#8B4513',
          light: '#CD853F',
          dark: '#654321'
        },
        accent: '#E8A87C',
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        },
        mushroom: {
          50: '#faf9f7',
          100: '#f4f1ed',
          200: '#e6ddd4',
          300: '#d3c7b8',
          400: '#b8a896',
          500: '#a0917b',
          600: '#8b7f6f',
          700: '#73695c',
          800: '#5e584f',
          900: '#4d4843'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'neu-light': '5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff',
        'neu-dark': '5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.05)',
        'glow': '0 0 20px rgba(74, 103, 65, 0.15)'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem'
      },
      backgroundImage: {
        'organic-gradient': 'linear-gradient(135deg, #4A6741 0%, #6B8A5A 50%, #8B7355 100%)',
        'mushroom-pattern': 'radial-gradient(circle at 20% 50%, rgba(74, 103, 65, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 69, 19, 0.1) 0%, transparent 50%)'
      }
    }
  },
  plugins: [],
  darkMode: 'class',
}