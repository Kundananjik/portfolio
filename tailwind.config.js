/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,css}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#0b0f14",
        night: "#0f1720",
        panel: "#121a23",
        accent: "#22d3ee",
        ember: "#f59e0b"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 10px 30px -20px rgba(34,211,238,0.45)",
        lift: "0 18px 50px -30px rgba(0,0,0,0.8)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        },
        reveal: {
          "0%": { opacity: "0", transform: "scale(0.98)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        float: "float 6s ease-in-out infinite",
        reveal: "reveal 0.6s ease-out both"
      }
    },
  },
  plugins: [],
}
