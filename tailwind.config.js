/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A202C",
        secondary: "#2D3748",
        lightBlue: "#3182CE",
        darkBlue: "#2B6CB0",
        textPrimary: "#E2E8F0",
        textSecondary: "#A0AEC0",
        textAccent: "#63B3ED",
        hoverPrimary: "#63B3ED",
        hoverSecondary: "#4299E1",
      },
    },
  },
  plugins: [],
};
