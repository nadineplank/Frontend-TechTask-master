export const theme = {
  colors: {
    primary: "#0066cc",
    primaryHover: "#0052a3",
    secondary: "#ffd700",
    secondaryHover: "#ffed4e",
    error: "#d73a49",
    text: {
      primary: "#333",
      secondary: "#666",
      white: "#fff",
    },
    background: {
      primary: "#fafafa",
      white: "#fff",
      gray: "#f5f5f5",
      lightGray: "#f8f8f8",
    },
    border: {
      light: "#f0f0f0",
      default: "#e0e0e0",
      secondary: "#e5c100",
      input: "#e0e0e0",
    },
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    full: "50%",
  },
  shadows: {
    sm: "0 2px 10px rgba(0, 0, 0, 0.1)",
    md: "0 4px 12px rgba(0, 0, 0, 0.1)",
    focus: "0 0 0 2px rgba(0, 102, 204, 0.3)",
    focusSecondary: "0 0 0 3px rgba(255, 215, 0, 0.3)",
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1280px",
  },
  transitions: {
    fast: "0.1s",
    normal: "0.2s",
    slow: "0.3s",
  },
} as const;

export type Theme = typeof theme;
