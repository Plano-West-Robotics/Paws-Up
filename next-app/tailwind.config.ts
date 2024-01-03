import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  safelist: [
    'text-[3rem]/[1]',
    'text-[4rem]/[1]',
    'text-[5rem]/[1]',
    'text-[6rem]/[1]',
    'text-[7rem]/[1]',
    'text-[8rem]/[1]',
    'text-[9rem]/[1]',
    'text-[10rem]/[1]',
    'text-[11rem]/[1]',
    'text-[12rem]/[1]',
    'text-[13rem]/[1]',
    'text-[14rem]/[1]',
    'text-[15rem]/[1]',
  ]
}

export default config
