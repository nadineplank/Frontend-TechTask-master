// client/src/pages/ProductListPage.tsx

import React, { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { Layout } from "../components/Layout/Layout";
import { ProductList } from "../components/ProductList/ProductList";
import { LoadingState } from "../components/LoadingState/LoadingState";
import { ErrorState } from "../components/ErrorState/ErrorState";
import { Article } from "../types";
import { Header } from "../components/Header/Header";

const ProductListPageContent: React.FC = () => {
  const { categories, loading, error, refetch } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddToCart = (article: Article) => {
    // TODO: Implement actual cart functionality
    console.log("Adding to cart:", article);
  };

  return (
    <Layout
      categories={categories}
      header={<Header onSearch={setSearchTerm} searchTerm={searchTerm} />}
    >
      {loading && <LoadingState message="Loading products..." />}

      {error && (
        <ErrorState
          title="Unable to load products"
          message={error}
          onRetry={refetch}
        />
      )}

      {!loading && !error && categories.length > 0 && (
        <ProductList
          category={categories[0]}
          onAddToCart={handleAddToCart}
          searchTerm={searchTerm}
        />
      )}
    </Layout>
  );
};

const ProductListPage: React.FC = () => {
  return <ProductListPageContent />;
};

export default ProductListPage;
