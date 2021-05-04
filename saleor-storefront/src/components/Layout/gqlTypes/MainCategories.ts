/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MainCategories
// ====================================================

export interface MainCategories_categories_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  slug: string;
  name: string;
}

export interface MainCategories_categories_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: MainCategories_categories_edges_node;
}

export interface MainCategories_categories {
  __typename: "CategoryCountableConnection";
  edges: MainCategories_categories_edges[];
}

export interface MainCategories {
  /**
   * List of the shop's categories.
   */
  categories: MainCategories_categories | null;
}
