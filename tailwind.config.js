/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "ig-primary": "#262626",
        "ig-secondary": "#8e8e8e",
        "ig-bg": "#fafafa",
        "ig-border": "#dbdbdb",
        "ig-pink": "#e1306c",
        "ig-gradient-start": "#f58529",
        "ig-gradient-mid": "#dd2a7b",
        "ig-gradient-end": "#8134af",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      spacing: {
        "safe-bottom": "env(safe-area-inset-bottom)",
      },
      boxShadow: {
        soft: "0 1px 3px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
