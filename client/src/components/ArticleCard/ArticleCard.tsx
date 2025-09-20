import React from "react";
import { Article } from "../../types";
import { formatter } from "../../utils/formatter";

import "./ArticleCard.css";

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className={"article"}>
      <img alt={article.name} src={article.images[0].path} />
      <div>{article.name}</div>
      <div>{formatter.format(article.prices.regular.value / 100)}</div>
      <section role="button">Add to cart</section>
    </div>
  );
};
