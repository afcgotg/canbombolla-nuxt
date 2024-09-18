/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: '#03968C',
        secondary: '#F5F5F5',
      },
      fontSize: {
        'header': 'min(4.5rem, 10vw)',
      
      },
      width: {
        'content': 'min(100%, 1200px)',
      }
    }
  },
  plugins: [],
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
  ]
}

