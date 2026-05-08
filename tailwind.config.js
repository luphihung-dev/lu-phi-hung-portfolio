/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        navy: '#102136',
        paper: '#f7f4ed',
        sage: '#6f8f76',
        mint: '#b7d0bd',
        steel: '#75a7c7',
        line: 'rgba(247,244,237,0.14)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 60px rgba(7, 17, 31, 0.12)'
      }
    }
  },
  plugins: []
};
