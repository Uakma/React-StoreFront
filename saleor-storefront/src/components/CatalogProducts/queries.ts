import gql from "graphql-tag";
import { TypedQuery } from "../../core/queries";
import {
  CatalogProducts,
  CatalogProductsVariables,
} from "./gqlTypes/CatalogProducts";
import { productPricingFragment } from "../../views/Product/queries";

export const catalogProducts = gql`
  ${productPricingFragment}
  query CatalogProducts($count: Int!) {
    shop {
      homepageCollection {
        id
        products(first: $count) {
          edges {
            node {
              id
              name
              slug
              thumbnail {
                url
                alt
              }
              variants {
                id
              }
              ...ProductPricingField
            }
          }
        }
      }
    }
  }
`;

export const TypedCatalogProductsQuery = TypedQuery<
  CatalogProducts,
  CatalogProductsVariables
>(catalogProducts);
