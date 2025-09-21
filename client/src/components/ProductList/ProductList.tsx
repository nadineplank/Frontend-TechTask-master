import React, { memo } from "react";
import styled from "@emotion/styled";
import { Article, Category } from "../../types";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { theme } from "../../styles/theme";

const CategoryTitle = styled.h1`
  font-size: 2rem;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  font-weight: 600;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const ArticleCount = styled.small`
  font-size: 1.25rem;
  font-weight: normal;
  color: ${theme.colors.text.secondary};
  margin-left: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-gap: ${theme.spacing.lg};
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-gap: ${theme.spacing.md};
  }
`;

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  text-align: center;

  p {
    color: ${theme.colors.text.secondary};
    font-size: 1.125rem;
  }
`;

interface ProductListProps {
  category: Category;
  onAddToCart?: (article: Article) => void;
  searchTerm?: string;
}

export const ProductList: React.FC<ProductListProps> = memo(
  ({ category, onAddToCart, searchTerm = "" }) => {
    const articles = category.categoryArticles.articles;

    const filteredArticles = articles.filter(
      (article) =>
        article.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.variantName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredArticles.length === 0) {
      return (
        <EmptyStateContainer>
          <p>
            {searchTerm
              ? `No products found matching "${searchTerm}"`
              : "No products available in this category."}
          </p>
        </EmptyStateContainer>
      );
    }

    return (
      <>
        <CategoryTitle>
          {category.name}
          <ArticleCount>({filteredArticles.length})</ArticleCount>
        </CategoryTitle>

        <ArticlesGrid>
          {filteredArticles.map((article, index) => (
            <ArticleCard
              key={`${article.name}-${article.variantName || index}`}
              article={article}
              onAddToCart={onAddToCart}
            />
          ))}
        </ArticlesGrid>
      </>
    );
  }
);

ProductList.displayName = "ProductList";
