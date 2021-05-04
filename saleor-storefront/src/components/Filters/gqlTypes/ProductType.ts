/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProductType
// ====================================================

export interface ProductType_productTypes_edges_node {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface ProductType_productTypes_edges {
  __typename: "ProductTypeCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: ProductType_productTypes_edges_node;
}

export interface ProductType_productTypes {
  __typename: "ProductTypeCountableConnection";
  edges: ProductType_productTypes_edges[];
}

export interface ProductType {
  /**
   * List of the shop's product types.
   */
  productTypes: ProductType_productTypes | null;
}
