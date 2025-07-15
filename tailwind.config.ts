import type { Config } from 'tailwindcss';

const config: Config = {
  // Ensure these paths correctly point to where your components and pages are.
  // 'src/app' is common when choosing the 'src' directory option.
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Explicitly include src/app
  ],
  theme: {
    extend: {
      colors: {
        'green-400': '#4CAF50',
        'green-700': '#2E7D32',
        'green-800': '#1B5E20',
        'neutral-900': '#171717',
        'neutral-800': '#262626',
        'neutral-700': '#404040',
        'neutral-400': '#A3A3A3',
        'neutral-300': '#D4D4D4',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
};

export default config;
