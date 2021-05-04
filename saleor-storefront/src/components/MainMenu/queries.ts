import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import {
  SubcategoriesByCategoryID,
  SubcategoriesByCategoryIDVariables,
} from "./gqlTypes/SubcategoriesByCategoryID";

export const subcategoriesByCategoryID = gql`
  query SubcategoriesByCategoryID($id: ID!) {
    category(id: $id) {
      id
      children(first: 100) {
        edges {
          node {
            id
            slug
            name
            children(first: 100) {
              edges {
                node {
                  id
                  slug
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const TypedSubcategoriesByCategoryIDQuery = TypedQuery<
  SubcategoriesByCategoryID,
  SubcategoriesByCategoryIDVariables
>(subcategoriesByCategoryID);
