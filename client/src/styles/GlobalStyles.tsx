import React from "react";
import { Global, css } from "@emotion/react";
import { theme } from "./theme";

export const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.background.primary};
      }

      * {
        box-sizing: border-box;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
      }

      button {
        font-family: inherit;
      }
    `}
  />
);
