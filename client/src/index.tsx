import React from "react";
import * as ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import ProductListPage from "./pages/ProductListPage";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ProductListPage />
    </ThemeProvider>
  </React.StrictMode>
);
