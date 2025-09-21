import styled from "@emotion/styled";
import { theme } from "./theme";

// Shared Button Styles
export const Button = styled.button<{ variant?: "primary" | "secondary" }>`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${theme.borderRadius.sm};
  cursor: pointer;
  transition: all ${theme.transitions.normal};
  border: 1px solid transparent;

  ${(props) =>
    props.variant === "primary"
      ? `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text.white};
    
    &:hover {
      background-color: ${theme.colors.primaryHover};
    }
  `
      : `
    background-color: ${theme.colors.secondary};
    border-color: ${theme.colors.border.secondary};
    color: ${theme.colors.text.primary};
    
    &:hover {
      background-color: ${theme.colors.secondaryHover};
    }
  `}

  &:focus {
    outline: none;
    box-shadow: ${(props) =>
      props.variant === "primary"
        ? theme.shadows.focus
        : theme.shadows.focusSecondary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Shared Container Styles
export const Container = styled.div<{ centered?: boolean }>`
  padding: ${theme.spacing.lg};
  ${(props) =>
    props.centered &&
    `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 300px;
  `}
`;

// Shared Grid Styles
export const Grid = styled.div<{ minWidth?: string; gap?: string }>`
  display: grid;
  grid-gap: ${(props) => props.gap || theme.spacing.lg};
  grid-template-columns: repeat(
    auto-fill,
    minmax(${(props) => props.minWidth || "220px"}, 1fr)
  );
`;

// Shared Card Styles
export const Card = styled.article`
  background-color: ${theme.colors.background.white};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.sm};
  padding: ${theme.spacing.md};
  transition: all ${theme.transitions.normal};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
  }
`;

// Shared Typography
export const Title = styled.h1<{ size?: "small" | "medium" | "large" }>`
  color: ${theme.colors.text.primary};
  font-weight: 600;
  margin: 0;

  ${(props) => {
    switch (props.size) {
      case "small":
        return "font-size: 1.25rem;";
      case "large":
        return "font-size: 2.5rem;";
      default:
        return "font-size: 2rem;";
    }
  }}
`;

export const Text = styled.p<{ muted?: boolean }>`
  color: ${(props) =>
    props.muted ? theme.colors.text.secondary : theme.colors.text.primary};
  margin: 0;
  font-size: ${(props) => (props.muted ? "0.875rem" : "1rem")};
`;
