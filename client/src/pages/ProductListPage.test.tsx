import React from "react";
import { render } from "@testing-library/react";
import ProductListPage from "./ProductListPage";

test("renders the ProductList", () => {
  const { getByText } = render(<ProductListPage />);
  const linkElement = getByText(/home24/i);
  expect(linkElement).toBeInTheDocument();
});
