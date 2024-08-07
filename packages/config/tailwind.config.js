const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.stories.tsx",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.stories.tsx",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "var(--color-brand-50)",
          100: "var(--color-brand-100)",
          200: "var(--color-brand-200)",
          300: "var(--color-brand-300)",
          400: "var(--color-brand-400)",
          500: "var(--color-brand-500)",
          600: "var(--color-brand-600)",
          700: "var(--color-brand-700)",
          800: "var(--color-brand-800)",
          900: "var(--color-brand-900)",
          950: "var(--color-brand-950)",
        },
        neutral: {
          0: "var(--color-neutral-0)",
          50: "var(--color-neutral-50)",
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)",
          950: "var(--color-neutral-950)",
          1000: "var(--color-neutral-1000)",
        },
      },
      backgroundColor: {
        background: "var(--color-bg-background)",
        card: "var(--color-bg-card)",
        subtle: "var(--color-bg-subtle)",
        muted: "var(--color-bg-muted)",
        inverse: "var(--color-bg-inverse)",
        elevated: "var(--color-bg-elevated)",
        mask: "var(--color-bg-mask)",
        item: "var(--color-bg-item)",
        "item-hover": "var(--color-bg-item-hover)",
        "item-selected": "var(--color-bg-item-selected)",
        brand: "var(--color-bg-brand-default)",
        "brand-hover": "var(--color-bg-brand-hover)",
        "brand-active": "var(--color-bg-brand-active)",
        "brand-subtle": "var(--color-bg-brand-subtle)",
        "brand-subtlest": "var(--color-bg-brand-subtlest)",
        danger: "var(--color-bg-danger-default)",
        "danger-hover": "var(--color-bg-danger-hover)",
        "danger-active": "var(--color-bg-danger-active)",
        "danger-subtle": "var(--color-bg-danger-subtle)",
        "danger-subtlest": "var(--color-bg-danger-subtlest)",
        warning: "var(--color-bg-warning-default)",
        "warning-hover": "var(--color-bg-warning-hover)",
        "warning-active": "var(--color-bg-warning-active)",
        "warning-subtle": "var(--color-bg-warning-subtle)",
        "warning-subtlest": "var(--color-bg-warning-subtlest)",
        border: "var(--color-border-default)",
        "border-hover": "var(--color-border-hover)",
        chart: {
          red: "var(--color-bg-chart-red)",
          orange: "var(--color-bg-chart-orange)",
          amber: "var(--color-bg-chart-amber)",
          yellow: "var(--color-bg-chart-yellow)",
          lime: "var(--color-bg-chart-lime)",
          green: "var(--color-bg-chart-green)",
          emerald: "var(--color-bg-chart-emerald)",
          teal: "var(--color-bg-chart-teal)",
          cyan: "var(--color-bg-chart-cyan)",
          sky: "var(--color-bg-chart-sky)",
          blue: "var(--color-bg-chart-blue)",
          indigo: "var(--color-bg-chart-indigo)",
          violet: "var(--color-bg-chart-violet)",
          purple: "var(--color-bg-chart-purple)",
          fuchsia: "var(--color-bg-chart-fuchsia)",
          pink: "var(--color-bg-chart-pink)",
          rose: "var(--color-bg-chart-rose)",
        },
      },
      textColor: {
        DEFAULT: "var(--color-text-default)",
        description: "var(--color-text-description)",
        placeholder: "var(--color-text-placeholder)",
        inverse: "var(--color-text-inverse)",
        brand: "var(--color-text-brand-default)",
        "brand-hover": "var(--color-text-brand-hover)",
        "brand-active": "var(--color-text-brand-active)",
        "brand-strong": "var(--color-text-brand-strong)",
        "brand-inverse": "var(--color-text-brand-inverse)",
        danger: "var(--color-text-danger-default)",
        "danger-hover": "var(--color-text-danger-hover)",
        "danger-active": "var(--color-text-danger-active)",
        "danger-strong": "var(--color-text-danger-strong)",
        "danger-inverse": "var(--color-text-danger-inverse)",
        warning: "var(--color-text-warning-default)",
        "warning-hover": "var(--color-text-warning-hover)",
        "warning-active": "var(--color-text-warning-active)",
        "warning-strong": "var(--color-text-warning-strong)",
        "warning-inverse": "var(--color-text-warning-inverse)",
        chart: {
          red: "var(--color-text-chart-red)",
          orange: "var(--color-text-chart-orange)",
          amber: "var(--color-text-chart-amber)",
          yellow: "var(--color-text-chart-yellow)",
          lime: "var(--color-text-chart-lime)",
          green: "var(--color-text-chart-green)",
          emerald: "var(--color-text-chart-emerald)",
          teal: "var(--color-text-chart-teal)",
          cyan: "var(--color-text-chart-cyan)",
          sky: "var(--color-text-chart-sky)",
          blue: "var(--color-text-chart-blue)",
          indigo: "var(--color-text-chart-indigo)",
          violet: "var(--color-text-chart-violet)",
          purple: "var(--color-text-chart-purple)",
          fuchsia: "var(--color-text-chart-fuchsia)",
          pink: "var(--color-text-chart-pink)",
          rose: "var(--color-text-chart-rose)",
        },
      },
      borderColor: {
        default: "var(--color-border-default)",
        hover: "var(--color-border-hover)",
        secondary: "var(--color-border-secondary)",
        brand: "var(--color-border-brand-default)",
        "brand-hover": "var(--color-border-brand-hover)",
        "brand-active": "var(--color-border-brand-active)",
        "brand-subtle": "var(--color-border-brand-subtle)",
        "brand-subtlest": "var(--color-border-brand-subtlest)",
        danger: "var(--color-border-danger-default)",
        "danger-hover": "var(--color-border-danger-hover)",
        "danger-active": "var(--color-border-danger-active)",
        "danger-subtle": "var(--color-border-danger-subtle)",
        "danger-subtlest": "var(--color-border-danger-subtlest)",
        warning: "var(--color-border-warning-default)",
        "warning-hover": "var(--color-border-warning-hover)",
        "warning-active": "var(--color-border-warning-active)",
        "warning-subtle": "var(--color-border-warning-subtle)",
        "warning-subtlest": "var(--color-border-warning-subtlest)",
        chart: {
          red: "var(--color-border-chart-red)",
          orange: "var(--color-border-chart-orange)",
          amber: "var(--color-border-chart-amber)",
          yellow: "var(--color-border-chart-yellow)",
          lime: "var(--color-border-chart-lime)",
          green: "var(--color-border-chart-green)",
          emerald: "var(--color-border-chart-emerald)",
          teal: "var(--color-border-chart-teal)",
          cyan: "var(--color-border-chart-cyan)",
          sky: "var(--color-border-chart-sky)",
          blue: "var(--color-border-chart-blue)",
          indigo: "var(--color-border-chart-indigo)",
          violet: "var(--color-border-chart-violet)",
          purple: "var(--color-border-chart-purple)",
          fuchsia: "var(--color-border-chart-fuchsia)",
          pink: "var(--color-border-chart-pink)",
          rose: "var(--color-border-chart-rose)",
        },
        background: "var(--color-bg-background)",
      },
      ringColor: {
        brand: "var(--color-border-brand-default)",
        "brand-subtlest": "var(--color-border-brand-subtlest)",
        "danger-subtlest": "var(--color-border-danger-subtlest)",
        "warning-subtlest": "var(--color-border-warning-subtlest)",
      },
      ringOffsetColor: {
        background: "var(--color-bg-background)",
        elevated: "var(--color-bg-elevated)",
        brand: "var(--color-bg-brand-default)",
        danger: "var(--color-bg-danger-default)",
        warning: "var(--color-bg-warning-default)",
      },
      stroke: {
        icon: "var(--color-icon-default)",
        "icon-hover": "var(--color-icon-hover)",
        "icon-active": "var(--color-icon-active)",
        "icon-inverse": "var(--color-icon-inverse)",
        "icon-brand": "var(--color-icon-brand-default)",
        "icon-brand-hover": "var(--color-icon-brand-hover)",
        "icon-brand-active": "var(--color-icon-brand-active)",
        "icon-brand-strong": "var(--color-icon-brand-strong)",
        "icon-brand-inverse": "var(--color-icon-brand-inverse)",
        "icon-danger": "var(--color-icon-danger-default)",
        "icon-danger-hover": "var(--color-icon-danger-hover)",
        "icon-danger-active": "var(--color-icon-danger-active)",
        "icon-danger-strong": "var(--color-icon-danger-strong)",
        "icon-danger-inverse": "var(--color-icon-danger-inverse)",
        "icon-warning": "var(--color-icon-warning-default)",
        "icon-warning-hover": "var(--color-icon-warning-hover)",
        "icon-warning-active": "var(--color-icon-warning-active)",
        "icon-warning-strong": "var(--color-icon-warning-strong)",
        "icon-warning-inverse": "var(--color-icon-warning-inverse)",
        "icon-chart": {
          red: "var(--color-icon-chart-red)",
          orange: "var(--color-icon-chart-orange)",
          amber: "var(--color-icon-chart-amber)",
          yellow: "var(--color-icon-chart-yellow)",
          lime: "var(--color-icon-chart-lime)",
          green: "var(--color-icon-chart-green)",
          emerald: "var(--color-icon-chart-emerald)",
          teal: "var(--color-icon-chart-teal)",
          cyan: "var(--color-icon-chart-cyan)",
          sky: "var(--color-icon-chart-sky)",
          blue: "var(--color-icon-chart-blue)",
          indigo: "var(--color-icon-chart-indigo)",
          violet: "var(--color-icon-chart-violet)",
          purple: "var(--color-icon-chart-purple)",
          fuchsia: "var(--color-icon-chart-fuchsia)",
          pink: "var(--color-icon-chart-pink)",
          rose: "var(--color-icon-chart-rose)",
        },
      },
      fill: {
        icon: "var(--color-icon-default)",
        "icon-hover": "var(--color-icon-hover)",
        "icon-active": "var(--color-icon-active)",
        "icon-inverse": "var(--color-icon-inverse)",
        "icon-brand": "var(--color-icon-brand-default)",
        "icon-brand-hover": "var(--color-icon-brand-hover)",
        "icon-brand-active": "var(--color-icon-brand-active)",
        "icon-brand-strong": "var(--color-icon-brand-strong)",
        "icon-brand-inverse": "var(--color-icon-brand-inverse)",
        "icon-danger": "var(--color-icon-danger-default)",
        "icon-danger-hover": "var(--color-icon-danger-hover)",
        "icon-danger-active": "var(--color-icon-danger-active)",
        "icon-danger-strong": "var(--color-icon-danger-strong)",
        "icon-danger-inverse": "var(--color-icon-danger-inverse)",
        "icon-warning": "var(--color-icon-warning-default)",
        "icon-warning-hover": "var(--color-icon-warning-hover)",
        "icon-warning-active": "var(--color-icon-warning-active)",
        "icon-warning-strong": "var(--color-icon-warning-strong)",
        "icon-warning-inverse": "var(--color-icon-warning-inverse)",
        "icon-chart": {
          red: "var(--color-icon-chart-red)",
          orange: "var(--color-icon-chart-orange)",
          amber: "var(--color-icon-chart-amber)",
          yellow: "var(--color-icon-chart-yellow)",
          lime: "var(--color-icon-chart-lime)",
          green: "var(--color-icon-chart-green)",
          emerald: "var(--color-icon-chart-emerald)",
          teal: "var(--color-icon-chart-teal)",
          cyan: "var(--color-icon-chart-cyan)",
          sky: "var(--color-icon-chart-sky)",
          blue: "var(--color-icon-chart-blue)",
          indigo: "var(--color-icon-chart-indigo)",
          violet: "var(--color-icon-chart-violet)",
          purple: "var(--color-icon-chart-purple)",
          fuchsia: "var(--color-icon-chart-fuchsia)",
          pink: "var(--color-icon-chart-pink)",
          rose: "var(--color-icon-chart-rose)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
      fontSize: {
        "display-website": [
          "3rem",
          {
            lineHeight: "1",
            letterSpacing: "-2.5%",
            fontWeight: "700",
          },
        ],
        "heading-screen": [
          "2.25rem",
          {
            lineHeight: "2.5rem",
            letterSpacing: "-2.5%",
            fontWeight: "600",
          },
        ],
        "heading-section": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-1.5%",
            fontWeight: "600",
          },
        ],
        "heading-subsection": [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-1.5%",
            fontWeight: "600",
          },
        ],
        "heading-body": [
          "1.125rem",
          {
            lineHeight: "1.75rem",
            letterSpacing: "-1%",
            fontWeight: "600",
          },
        ],
        "heading-group": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "1.5%",
            fontWeight: "500",
          },
        ],
        "md-semibold": [
          "0.875rem",
          {
            lineHeight: "1.375rem",
            letterSpacing: "1.25%",
            fontWeight: "600",
          },
        ],
        "md-medium": [
          "0.875rem",
          {
            lineHeight: "1.375rem",
            letterSpacing: "1.25%",
            fontWeight: "500",
          },
        ],
        md: [
          "0.875rem",
          {
            lineHeight: "1.375rem",
            letterSpacing: "1%",
            fontWeight: "400",
          },
        ],
        "lg-semibold": [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.5%",
            fontWeight: "600",
          },
        ],
        "lg-medium": [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.5%",
            fontWeight: "500",
          },
        ],
        lg: [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "-0.5%",
            fontWeight: "400",
          },
        ],
        "sm-medium": [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: "500",
          },
        ],
        sm: [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: "400",
          },
        ],
        xs: [
          "0.5rem",
          {
            lineHeight: "0.75rem",
            fontWeight: "400",
          },
        ],
      },
      borderRadius: {
        sm: "var(--border-radius-sm)",
        DEFAULT: "var(--border-radius-default)",
        lg: "var(--border-radius-lg)",
      },
      opacity: {
        visible: "var(--opacity-visible)",
        hover: "var(--opacity-hover)",
        disabled: "var(--opacity-disabled)",
        invisible: "var(--opacity-invisible)",
      },
      screens: {
        xs: "390px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transformOrigin: {
        "top-center": "top center",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};
