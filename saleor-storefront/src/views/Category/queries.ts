import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import {
  basicProductFragment,
  productPricingFragment,
} from "../Product/queries";
import { Category, CategoryVariables } from "./gqlTypes/Category";
import { CategoryID, CategoryIDVariables } from "./gqlTypes/CategoryID";

const categoryIDQuery = gql`
  query CategoryID($slug: String!) {
    category(slug: $slug) {
      id
    }
  }
`;

export const categoryProductsQuery = gql`
  ${basicProductFragment}
  ${productPricingFragment}
  query Category(
    $id: ID
    $after: String
    $sortBy: ProductOrder
    $pageSize: Int
    $categories: [ID]!
    $isCategory: Boolean!
  ) {
    products(
      after: $after
      first: $pageSize
      sortBy: $sortBy
      filter: { categories: $categories }
    ) {
      totalCount
      edges {
        node {
          ...BasicProductFields
          ...ProductPricingField
          slug # for links
          variants {
            id
          }
          category {
            id
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
    category(id: $id) @include(if: $isCategory) {
      seoDescription
      seoTitle
      id
      name
      backgroundImage {
        url
      }
      ancestors(last: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
    attributes(filter: { inCategory: $id }, first: 100) {
      edges {
        node {
          id
          name
          slug
          values {
            id
            name
            slug
          }
        }
      }
    }
  }
`;

export const TypeCategoryIDQuery = TypedQuery<CategoryID, CategoryIDVariables>(
  categoryIDQuery
);

export const TypedCategoryProductsQuery = TypedQuery<
  Category,
  CategoryVariables
>(categoryProductsQuery);
