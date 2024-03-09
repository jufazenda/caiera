import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        purple: '#4568dc',
        pink: '#b06ab3',
        dark: '#141E42',
        'shadow-black': 'rgb(20, 30, 66, 0.5)',
        'shadow-darker': 'rgb(20, 30, 66, 1)',
      },
      screens: {
        sm: '640px',
        'sm-xl': '700px',
        md: '900px',
        lg: '1200px',
        xl: '1500px',
        '2xl': '2000px',
      },
      width: {
        section: '70vh',
        600: '600px',
        500: '500px',
        400: '400px',
      },
      height: {
        section: '70vh',
        'mini-footer': '40vh',
        footer: '30vh',
        500: '500px',
        400: '400px',
      },
      fontSize: {
        title: '2.5rem',
      },
      maxWidth: {
        '30%': '30%',
        '50%': '50%',
      },
      margin: {
        '1/4': '25%',
        '30%': '30%',
        '50%': '50%',
      },
    },
  },
  plugins: [],
}
export default config
