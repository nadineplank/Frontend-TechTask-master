import React, { useEffect } from "react";

import { Category, Article } from "./types";
import "./ProductList.css";

var intlNumberFormatValues = ["de-DE", "currency", "EUR"];

export const formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
  style: intlNumberFormatValues[1] as "currency",
  currency: intlNumberFormatValues[2],
});

export const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <div className={"article"}>
      <img alt={article.name} src={article.images[0].path} />
      <div>{article.name}</div>
      <div>{formatter.format(article.prices.regular.value / 100)}</div>
      <section role="button">Add to cart</section>
    </div>
  );
};

const ProductList = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    var xhr = new XMLHttpRequest();

    xhr.open("POST", "/graphql");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(
      JSON.stringify({
        query: `{
        categories: productLists(ids: "156126", locale: de_DE) {
          name
          articleCount
          childrenCategories: childrenProductLists {
            list {
              name
              urlPath
            }
          }
          categoryArticles: articlesList(first: 50) {
            articles {
              name
              variantName
              prices {
                currency
                regular {
                  value
                }
              }
              images(
                format: WEBP
                maxWidth: 200
                maxHeight: 200
                limit: 1
              ) {
                path
              }
            }
          }
        }
      }`,
      })
    );

    xhr.onload = () => {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.response);

        setCategories(response.data.categories);
      }
    };
  }, []);

  const articles = categories.map((category) => {
    return category.categoryArticles.articles.map((article) => {
      return <ArticleCard article={article} />;
    });
  });

  return (
    <div className={"page"}>
      <div className={"header"}>
        <strong>home24</strong>
        <input placeholder={"Search"} />
      </div>

      <div className={"sidebar"}>
        <h3>Kategorien</h3>
        {categories.length ? (
          <ul>
            {categories[0].childrenCategories.list.map(({ name, urlPath }) => {
              return (
                <li>
                  <a href={`/${urlPath}`}>{name}</a>
                </li>
              );
            })}
          </ul>
        ) : (
          "Loading..."
        )}
      </div>

      <div className={"content"}>
        {categories.length ? (
          <h1>
            {categories[0].name}
            <small> ({categories[0].articleCount})</small>
          </h1>
        ) : (
          "Loading..."
        )}
        <div className={"articles"}>{articles}</div>
      </div>

      <div className={"footer"}>
        Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
        Versandkosten.
      </div>
    </div>
  );
};

var PLP = () => {
  return <ProductList />;
};

export default PLP;
