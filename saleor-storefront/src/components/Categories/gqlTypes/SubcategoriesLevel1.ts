/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SubcategoriesLevel1
// ====================================================

export interface SubcategoriesLevel1_categories_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  slug: string;
  name: string;
}

export interface SubcategoriesLevel1_categories_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: SubcategoriesLevel1_categories_edges_node;
}

export interface SubcategoriesLevel1_categories {
  __typename: "CategoryCountableConnection";
  edges: SubcategoriesLevel1_categories_edges[];
}

export interface SubcategoriesLevel1 {
  /**
   * List of the shop's categories.
   */
  categories: SubcategoriesLevel1_categories | null;
}
