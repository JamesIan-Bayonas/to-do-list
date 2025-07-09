/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- IMPORTANT: Ensure this covers all your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
