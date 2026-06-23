/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a1a',
          800: '#0f0f2a',
          700: '#141432',
          600: '#1a1a3e',
        },
        accent: {
          primary: '#7c3aed',
          secondary: '#06b6d4',
          tertiary: '#8b5cf6',
          light: '#c084fc',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        portfolio: {
          "primary": "#7c3aed",
          "secondary": "#06b6d4",
          "accent": "#8b5cf6",
          "neutral": "#0f0f2a",
          "base-100": "#0a0a1a",
          "info": "#06b6d4",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
  },
}
