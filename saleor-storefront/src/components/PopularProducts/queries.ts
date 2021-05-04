import gql from "graphql-tag";
import { TypedQuery } from "../../core/queries";
import {
  PopularProducts,
  PopularProductsVariables,
} from "./gqlTypes/PopularProducts";
import { productPricingFragment } from "../../views/Product/queries";

export const popularProducts = gql`
  ${productPricingFragment}
  query PopularProducts($count: Int!) {
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

export const TypedPopularProductsQuery = TypedQuery<
  PopularProducts,
  PopularProductsVariables
>(popularProducts);
