/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue"
  ],
  theme: { extend: {
    colors: {
      primary: '#1E3A8A',
      secondary: '#2563EB',
      accent: '#FBBF24',
      background: '#F3F4F6',
      text: '#111827',
      gold: 'rgb(202, 173, 19);',
      silver: '#C0C0C0',
      bronze: '#CD7F32',
    },
    fontFamily: {
      sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['Courier New', 'monospace'],
    },
  } },
  plugins: [],
}
