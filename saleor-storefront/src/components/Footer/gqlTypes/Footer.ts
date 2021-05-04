/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Footer
// ====================================================

export interface Footer_shop_navigation_main_items {
  __typename: "MenuItem";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface Footer_shop_navigation_main {
  __typename: "Menu";
  /**
   * The ID of the object.
   */
  id: string;
  items: (Footer_shop_navigation_main_items | null)[] | null;
}

export interface Footer_shop_navigation {
  __typename: "Navigation";
  /**
   * Main navigation bar.
   */
  main: Footer_shop_navigation_main | null;
}

export interface Footer_shop {
  __typename: "Shop";
  /**
   * Shop's navigation.
   */
  navigation: Footer_shop_navigation | null;
}

export interface Footer {
  /**
   * Return information about the shop.
   */
  shop: Footer_shop;
}
