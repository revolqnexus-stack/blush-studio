/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Blush Fine Makeup Art — logo-led palette */
        bg: '#F8F5EF',
        'bg-alt': '#EFE5E0',
        ivory: '#F8F5EF',
        beige: '#EFE5E0',
        brand: {
          DEFAULT: '#5E9F98',
          deep: '#315F5A',
        },
        champagne: '#C8A978',
        dark: '#202321',
        'dark-2': '#3a3d3b',
        text: '#202321',
        'text-muted': '#6E706B',
        blush: '#EFE5E0',
        'blush-row': '#F8F5EF',
        peach: '#EFE5E0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        brand: '0 8px 32px rgba(49, 95, 90, 0.22)',
        'brand-soft': '0 10px 36px rgba(94, 159, 152, 0.28)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
