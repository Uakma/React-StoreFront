import gql from "graphql-tag";
import { TypedQuery } from "../../core/queries";
import { productPricingFragment } from "../../views/Product/queries";
import { ProductByID, ProductByIDVariables } from "./gqlTypes/ProductByID";

export const productByID = gql`
  ${productPricingFragment}
  query ProductByID($id: ID!) {
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

export const TypedProductByIDQuery = TypedQuery<
  ProductByID,
  ProductByIDVariables
>(productByID);
