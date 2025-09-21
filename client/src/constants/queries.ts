export const GET_PRODUCT_LISTING = `
  query GetProductListing($categoryId: String!, $locale: String!, $limit: Int!) {
    categories: productLists(ids: $categoryId, locale: $locale) {
      name
      articleCount
      childrenCategories: childrenProductLists {
        list {
          name
          urlPath
        }
      }
      categoryArticles: articlesList(first: $limit) {
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
  }
`;

export const DEFAULT_QUERY_VARIABLES = {
  categoryId: "156126",
  locale: "de_DE",
  limit: 50,
};
