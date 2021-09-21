module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    fontFamily: {
      roboto: ["Roboto", "Helvetica"],
      "roboto-mono": ["Roboto Mono", "monospace"],
      "roboto-slab": ["Roboto Slab", "serif"],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 700,
      black: 900,
    },
    screens: {
      sm: { max: "767px" },
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      ld: { max: "1024px" },
      // => @media (min-width: 1024px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      spacing: {
        7: "1.75rem",
        9: "2.25rem",
        11: "2.75rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
      },
      borderRadius: {
        "1rem": "1rem",
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      // {
      //   mytheme: {
      //     primary: "#570df8",
      //     "primary-focus": "#4506cb",
      //     "primary-content": "#ffffff",
      //     secondary: "#f000b8",
      //     "secondary-focus": "#bd0091",
      //     "secondary-content": "#ffffff",
      //     accent: "#37cdbe",
      //     "accent-focus": "#2aa79b",
      //     "accent-content": "#ffffff",
      //     neutral: "#3d4451",
      //     "neutral-focus": "#2a2e37",
      //     "neutral-content": "#ffffff",
      //     "base-100": "#ffffff",
      //     "base-200": "#f9fafb",
      //     "base-300": "#d1d5db",
      //     "base-content": "#1f2937",
      //     info: "#2094f3",
      //     success: "#009485",
      //     warning: "#ff9900",
      //     error: "#ff5724",
      //   },
      // },
    ],
  },
}
