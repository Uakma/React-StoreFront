import gql from "graphql-tag";

import { TypedQuery } from "../core/queries";
import { productPricingFragment } from "../views/Product/queries";
import {
  ProductByProductVariantId,
  ProductByProductVariantIdVariables,
} from "./gqlTypes/ProductByProductVariantId";
import { ProductById, ProductByIdVariables } from "./gqlTypes/ProductById";

const productVariant = gql`
  ${productPricingFragment}
  query ProductByProductVariantId($id: ID!) {
    productVariant(id: $id) {
      product {
        id
        name
        slug
        thumbnail {
          url
          alt
        }
        ...ProductPricingField
      }
    }
  }
`;

const product = gql`
  ${productPricingFragment}
  query ProductById($id: ID!) {
    product(id: $id) {
      id
      name
      slug
      thumbnail {
        url
        alt
      }
      ...ProductPricingField
    }
  }
`;

export const TypedProductByProductVariantIdQuery = TypedQuery<
  ProductByProductVariantId,
  ProductByProductVariantIdVariables
>(productVariant);

export const TypedProductByIdQuery = TypedQuery<
  ProductById,
  ProductByIdVariables
>(product);
