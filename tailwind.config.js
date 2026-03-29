/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F1A",
        accent: "#00E0FF",
        secondary: "#7C3AED",
        "dark-blue": "#0B0F1A",
        "neon-cyan": "#00E0FF",
        "violet": "#7C3AED",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        "h1": ["3.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "h2": ["2.5rem", { lineHeight: "1.3", fontWeight: "700" }],
        "h3": ["1.875rem", { lineHeight: "1.4", fontWeight: "600" }],
        "body": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
      },
      backdropBlur: {
        glass: "10px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 224, 255, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 224, 255, 0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
        slideUp: "slideUp 0.8s ease-out",
        glowPulse: "glowPulse 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      boxShadow: {
        glow: "0 0 30px rgba(0, 224, 255, 0.6)",
        "glow-sm": "0 0 15px rgba(0, 224, 255, 0.4)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
