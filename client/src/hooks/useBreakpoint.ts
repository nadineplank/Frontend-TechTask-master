import { useState, useEffect } from "react";
import { theme } from "../styles/theme";

// Convert theme breakpoint strings to numbers
const breakpoints = {
  tablet: parseInt(theme.breakpoints.tablet),
  desktop: parseInt(theme.breakpoints.desktop),
};

export function useBreakpoint() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return {
    isMobileOrTablet: width <= breakpoints.tablet,
    isDesktop: width > breakpoints.tablet,
  };
}
