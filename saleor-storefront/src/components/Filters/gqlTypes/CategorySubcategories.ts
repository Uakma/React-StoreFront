/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategorySubcategories
// ====================================================

export interface CategorySubcategories_category_children_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface CategorySubcategories_category_children_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: CategorySubcategories_category_children_edges_node;
}

export interface CategorySubcategories_category_children {
  __typename: "CategoryCountableConnection";
  edges: CategorySubcategories_category_children_edges[];
}

export interface CategorySubcategories_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of children of the category.
   */
  children: CategorySubcategories_category_children | null;
}

export interface CategorySubcategories {
  /**
   * Look up a category by ID or slug.
   */
  category: CategorySubcategories_category | null;
}

export interface CategorySubcategoriesVariables {
  id: string;
}
