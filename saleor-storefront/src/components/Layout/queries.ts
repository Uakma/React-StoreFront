import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import { MainCategories } from "./gqlTypes/MainCategories";

export const mainCategories = gql`
  query MainCategories {
    categories(level: 0, first: 30) {
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

export const TypedMainCategoriesQuery = TypedQuery<MainCategories, {}>(
  mainCategories
);
