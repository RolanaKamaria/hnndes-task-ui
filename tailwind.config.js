/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#262626",
        secondary: "#8e8e8e",
        bg: "#fafafa",
        border: "#dbdbdb",
        pink: "#e1306c",
      },
      backgroundImage: {
        "vivid-diagonal": "linear-gradient(202deg, #FF00D6 8%, #FF4D00 92%)",
        "vivid-diagonal-hover":
          "linear-gradient(202deg, #ff33e0 0%, #ff7733 100%)",
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
        "elevated-glow": "0 10px 25px -5px rgba(255, 77, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
