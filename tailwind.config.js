/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { "50": "#2A3188", "100": "#2A3188", "200": "#2A3188", "300": "#2A3188", "400": "#2A3188", "500": "#2A3188", "600": "#2A3188", "700": "#2A3188", "800": "#2A3188", "900": "#2A3188" },
        gray: {
          "50": "#f9fafb",
          "100": "#f4f5f7",
          "200": "#e5e7eb",
          "300": "#d2d6dc",
          "400": "#9fa6b2",
          "500": "#6b7280",
          "600": "#4b5563",
          "700": "#374151",
          "800": "#252f3f",
          "900": "#161e2e",
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
