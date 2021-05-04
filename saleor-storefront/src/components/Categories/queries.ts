import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import { SubcategoriesLevel1 } from "./gqlTypes/SubcategoriesLevel1";

export const subcategoriesLevel1 = gql`
  query SubcategoriesLevel1 {
    categories(level: 1, first: 7) {
      edges {
        node {
          id
          slug
          name
        }
      }
    }
  }
`;

export const TypedSubcategoriesLevel1Query = TypedQuery<
  SubcategoriesLevel1,
  {}
>(subcategoriesLevel1);
