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
        'ice-blue': '#7bebff',
        'frosted-blue': '#54e5ff',
        'caribbean-blue': '#2cdfff',
        'electric-cyan': '#0cd4f7',
        'tropical-teal': '#06b6d4',
        'sea-breeze': '#0c9eb8',
        'deep-teal': '#10889d',
        'forest-teal': '#127283',
        'dark-teal': '#135d6a',
        'midnight-teal': '#124a53'
      }
    }
  },
  plugins: []
}
