/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './candidates/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'light-sky-blue': '#d9f5fb',
        cloudy: '#617173',
        'dark-cloudy': '#273132',

        'deep-ocean': '#006c9e',
        'navy-blue': '#00405e',
        'midnight-blue': '#032332',
        'blackish-blue': '#01090c',

        // Secondary Teals
        'secondary-teal': '#0d9488',
        'secondary-light': '#2dd4bf',
        'secondary-dark': '#0f766e',
        'secondary-very-light': '#ccfbf7',
        'secondary-very-dark': '#042f2c',

        // Accent Colors
        'accent-coral': '#f97316',
        'accent-light': '#fdba74',
        'accent-dark': '#ea580c',

        // Neutral Tones
        'neutral-50': '#f8fafc',
        'neutral-100': '#f1f5f9',
        'neutral-200': '#e2e8f0',
        'neutral-300': '#cbd5e1',
        'neutral-400': '#94a3b8',
        'neutral-500': '#64748b',
        'neutral-600': '#475569',
        'neutral-700': '#334155',
        'neutral-800': '#1e293b',
        'neutral-900': '#0f172a',

        // Success/Error States
        success: '#22c55e',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
      }
    }
  },
  plugins: []
}
