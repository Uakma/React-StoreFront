import gql from "graphql-tag";
import { TypedQuery } from "../../core/queries";
import {
  CategorySubcategories,
  CategorySubcategoriesVariables,
} from "./gqlTypes/CategorySubcategories";
import { MainCategories } from "./gqlTypes/MainCategories";

export const subcategories = gql`
  query CategorySubcategories($id: ID!) {
    category(id: $id) {
      id
      children(first: 15) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;

export const mainCategories = gql`
  query MainCategoriesDELETE {
    categories(level: 0, first: 30) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

export const TypedCategorySubcategoriesQuery = TypedQuery<
  CategorySubcategories,
  CategorySubcategoriesVariables
>(subcategories);

export const TypedMainCategoriesQuery = TypedQuery<MainCategories, {}>(
  mainCategories
);
