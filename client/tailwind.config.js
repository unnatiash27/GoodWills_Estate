/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    // Remove the line below as the line-clamp plugin is included by default in Tailwind CSS v3.3
    // require('@tailwindcss/line-clamp'),
    // ...
  ],
};
