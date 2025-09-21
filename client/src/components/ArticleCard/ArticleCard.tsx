import React, { memo } from "react";
import styled from "@emotion/styled";
import { Article } from "../../types";
import { formatter } from "../../utils/formatter";
import { theme } from "../../styles/theme";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.border.light};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
  transition: transform ${theme.transitions.normal},
    box-shadow ${theme.transitions.normal};
  background-color: ${theme.colors.background.white};
  height: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: ${theme.spacing.sm};
  background-color: ${theme.colors.background.lightGray};
  border-radius: ${theme.borderRadius.sm};
`;

const ProductName = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  margin: 0 0 ${theme.spacing.sm} 0;
  color: ${theme.colors.text.primary};
  flex-grow: 1;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductPrice = styled.p`
  color: ${theme.colors.primary};
  font-weight: bold;
  font-size: 1.125rem;
  margin: 0 0 ${theme.spacing.md} 0;
`;

const AddToCartButton = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background-color: ${theme.colors.secondary};
  border: 1px solid ${theme.colors.border.secondary};
  border-radius: ${theme.borderRadius.sm};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color ${theme.transitions.normal},
    transform ${theme.transitions.fast};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background-color: ${theme.colors.secondaryHover};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: ${theme.shadows.focusSecondary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

interface ArticleCardProps {
  article: Article;
  onAddToCart?: (article: Article) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = memo(
  ({ article, onAddToCart }) => {
    const handleAddToCart = () => {
      if (onAddToCart) {
        onAddToCart(article);
      } else {
        console.log("Adding to cart:", article.name);
      }
    };

    const imagePath = article.images?.[0]?.path || "/placeholder.jpg";
    const price = article.prices?.regular?.value
      ? formatter.format(article.prices.regular.value / 100)
      : "Price not available";

    return (
      <Card>
        <ProductImage alt={article.name} src={imagePath} loading="lazy" />
        <ProductName>{article.name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
        <AddToCartButton
          onClick={handleAddToCart}
          aria-label={`Add ${article.name} to cart`}
        >
          Add to cart
        </AddToCartButton>
      </Card>
    );
  }
);

ArticleCard.displayName = "ArticleCard";
