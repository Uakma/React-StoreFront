/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoryID
// ====================================================

export interface CategoryID_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface CategoryID {
  /**
   * Look up a category by ID or slug.
   */
  category: CategoryID_category | null;
}

export interface CategoryIDVariables {
  slug: string;
}
