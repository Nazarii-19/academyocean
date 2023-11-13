/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '0.75rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '1500px'
      }
    },
    fontSize: {
      h1: ['3rem', '1'],
      h2: ['2.25rem', '2.5rem'],
      h3: ['1.875rem', '2.25rem'],
      h4: ['1.5rem', '1.75rem'],
      h5: ['1.25rem', '1.5rem'],
      h6: ['1.125rem', '1.75rem'],
      p: ['1rem', '1.5rem'],
      span: ['0.875rem', '1.25rem']
    },
    colors: {
      transparent: 'transparent',
      black: 'var(--black)',
      'black-opacity': 'var(--black-opacity)',
      white: 'var(--white)',
      'white-opacity': 'var(--white-opacity)',
      primary: 'var(--primary)',
      'primary-hover': 'var(--primary-hover)',
      blue: 'var(--blue)',
      red: 'var(--red)',
      'grey-50': 'var(--grey-50)',
      'grey-100': 'var(--grey-100)',
      'grey-200': 'var(--grey-200)',
      'grey-300': 'var(--grey-300)',
      'grey-400': 'var(--grey-400)',
      'grey-500': 'var(--grey-500)',
      'grey-600': 'var(--grey-600)',
      'grey-700': 'var(--grey-700)',
      'grey-800': 'var(--grey-800)',
      'grey-900': 'var(--grey-900)'
    },
    borderRadius: {
      none: '0',
      DEFAULT: 'var(--border-radius)',
      low: 'var(--border-radius-low)',
      medium: 'var(--border-radius-medium)',
      big: 'var(--border-radius-big)',
      infinity: 'var(--border-radius-infinity)'
    },
    transitionDuration: {
      0: '0s',
      DEFAULT: 'var(--transition)'
    },
    zIndex: {
      popup: 'var(--z-index-popup)',
      modal: 'var(--z-index-modal)',
      header: 'var(--z-index-header)',
      high: 'var(--z-index-high)',
      medium: 'var(--z-index-medium)',
      low: 'var(--z-index-low)',
      one: 'var(--z-index-one)',
      minus: 'var(--z-index-minus)'
    }
  },
  plugins: []
}
