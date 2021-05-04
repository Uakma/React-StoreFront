/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MainCategoriesDELETE
// ====================================================

export interface MainCategoriesDELETE_categories_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface MainCategoriesDELETE_categories_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: MainCategoriesDELETE_categories_edges_node;
}

export interface MainCategoriesDELETE_categories {
  __typename: "CategoryCountableConnection";
  edges: MainCategoriesDELETE_categories_edges[];
}

export interface MainCategoriesDELETE {
  /**
   * List of the shop's categories.
   */
  categories: MainCategoriesDELETE_categories | null;
}
