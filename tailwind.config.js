/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        // Academy theme (light)
        parchment: "#F3EEDF",
        "parchment-dark": "#E9E2CD",
        olive: "#474F36",
        "olive-light": "#828A67",
        "olive-dark": "#3A4030",
        gold: "#B49763",
        "gold-light": "#D4BC96",
        "gold-dark": "#9A7D4E",
        charcoal: "#292927",
        "charcoal-light": "#63635C",
        alert: "#7C3C32",

        // Combat theme (dark)
        "void-black": "#1C1E18",
        "combat-card": "#2D3025",
        "combat-olive": "#3A412F",
        "combat-gold": "#C8A868",
        "combat-alert": "#943E34",
        "combat-text": "#E6E2D3",
        "combat-muted": "#99927F",
      },
      fontFamily: {
        serif: ["Times New Roman", "Noto Serif SC", "serif"],
        "serif-cn": ["Noto Serif SC", "Source Han Serif SC", "serif"],
        sans: ["Noto Sans SC", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      backgroundImage: {
        "paper-texture": "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "gold-glow": "0 0 12px rgba(180, 151, 99, 0.35)",
        "paper": "0 2px 12px rgba(71, 79, 54, 0.08)",
      },
      transitionTimingFunction: {
        "cassell": "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
