/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SubcategoriesByCategoryID
// ====================================================

export interface SubcategoriesByCategoryID_category_children_edges_node_children_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  slug: string;
  name: string;
}

export interface SubcategoriesByCategoryID_category_children_edges_node_children_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: SubcategoriesByCategoryID_category_children_edges_node_children_edges_node;
}

export interface SubcategoriesByCategoryID_category_children_edges_node_children {
  __typename: "CategoryCountableConnection";
  edges: SubcategoriesByCategoryID_category_children_edges_node_children_edges[];
}

export interface SubcategoriesByCategoryID_category_children_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  slug: string;
  name: string;
  /**
   * List of children of the category.
   */
  children: SubcategoriesByCategoryID_category_children_edges_node_children | null;
}

export interface SubcategoriesByCategoryID_category_children_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: SubcategoriesByCategoryID_category_children_edges_node;
}

export interface SubcategoriesByCategoryID_category_children {
  __typename: "CategoryCountableConnection";
  edges: SubcategoriesByCategoryID_category_children_edges[];
}

export interface SubcategoriesByCategoryID_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of children of the category.
   */
  children: SubcategoriesByCategoryID_category_children | null;
}

export interface SubcategoriesByCategoryID {
  /**
   * Look up a category by ID or slug.
   */
  category: SubcategoriesByCategoryID_category | null;
}

export interface SubcategoriesByCategoryIDVariables {
  id: string;
}
