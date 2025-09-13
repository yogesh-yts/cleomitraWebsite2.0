import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'main': '#660033',
        'primary': '#3b82f6',
        'primary-light': '#60a5fa',
        'primary-dark': '#1d4ed8',
        'secondary': '#10b981',
        'secondary-light': '#34d399',
        'secondary-dark': '#059669',
        'accent': '#f59e0b',
        'accent-light': '#fbbf24',
        'accent-dark': '#d97706',

        // Custom blacks and grays
        'black-100': '#202020',
        'black-200': '#f3f3f3',
        'black-300': '#a7a7a7',
        'black-400': '#fbfbfb',

        // Status Colors
        'success': '#10b981',
        'warning': '#f59e0b',
        'error': '#ef4444',

        // Pink Shades
        'pink-950': '#6a0135',
        'pink-900': '#660033',
        'pink-700': '#bb045f',
        'pink-750': '#bd0460',

        // Additional colors
        'maroon': '#660033',
        'orange': '#ea4335',
      }
    },
  },
  plugins: [],
}

export default config