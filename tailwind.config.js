module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-200": "var(--gray-200)",
        "gray-900": "var(--gray-900)",
        "neutral-600": "var(--neutral-600)",
        palettesbasicwhite: "var(--palettesbasicwhite)",
        "palettesneutralneutral-900": "var(--palettesneutralneutral-900)",
        tokensaccentcolor: "var(--tokensaccentcolor)",
        "tokensseparator-colour": "var(--tokensseparator-colour)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "desktop-b1-16px": "var(--desktop-b1-16px-font-family)",
        "desktop-b2-14px": "var(--desktop-b2-14px-font-family)",
        "desktop-h1-56px": "var(--desktop-h1-56px-font-family)",
        "desktop-h2-44px": "var(--desktop-h2-44px-font-family)",
        "desktop-h3-36px": "var(--desktop-h3-36px-font-family)",
        "desktop-h4-20px": "var(--desktop-h4-20px-font-family)",
        "desktop-l1-18px": "var(--desktop-l1-18px-font-family)",
        "desktop-l2-16px": "var(--desktop-l2-16px-font-family)",
        "desktop-p1-22px": "var(--desktop-p1-22px-font-family)",
        "desktop-p2-18px": "var(--desktop-p2-18px-font-family)",
        "desktop-p3-14px": "var(--desktop-p3-14px-font-family)",
        "desktop-p4-14px-SB": "var(--desktop-p4-14px-SB-font-family)",
        "desktop-p5-12-px": "var(--desktop-p5-12-px-font-family)",
        "small-regular": "var(--small-regular-font-family)",
        "tiny-regular": "var(--tiny-regular-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "shaddow-button": "var(--shaddow-button)",
        "shadow-raised": "var(--shadow-raised)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
