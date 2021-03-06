module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: ["Montserrat", "Helvetica"],
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
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        main: "var(--main)",
        background: "var(--base-content)",
        header: "var(--header)",
        "primary-focus": "var(--primary-focus)",
        "primary-content": "var(--primary-content)",
        secondary: "var(--secondary)",
        "secondary-focus": "var(--secondary-focus)",
        "secondary-content": "var(--secondary-content)",
        "link-color": "var(--link-color)",
        "accent-focus": "var(--link-color-focus)",
        "accent-content": "var(--link-color-content)",
        neutral: "var(--neutral)",
        "neutral-focus": "var(--neutral-focus)",
        "neutral-content": "var(--neutral-content)",
        "base-100": "var(--base-100)",
        "base-200": "var(--base-200)",
        "base-300": "var(--base-300)",
        "base-content": "var(--base-content)",
        info: "var(--info)",
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
        white: "var(--base-100)",
        black: "var(--base-100)",
        "body-background": "var(--body-background)",
        "body-text": "var(--body-text)",
        "footer-background": "var(--footer-background)",
        "footer-text": "var(--footer-text)",
        "button-background": "var(--button-background)",
        "button-text": "var(--button-text)",
      },
      spacing: {
        7: "1.75rem",
        9: "2.25rem",
        11: "2.75rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        28: "7rem",
        80: "20rem",
        96: "24rem",
      },
      height: {
        "1/2": "50%",
      },
      scale: {
        30: ".3",
      },
      boxShadow: {
        outline: "0 0 0 3px rgba(101, 31, 255, 0.4)",
      },
      borderRadius: {
        "1rem": "1rem",
      },
    },
  },
  variants: {
    scale: ["responsive", "hover", "focus", "group-hover"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
    opacity: ["responsive", "hover", "focus", "group-hover"],
    backgroundColor: ["responsive", "hover", "focus", "group-hover"],
  },
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
