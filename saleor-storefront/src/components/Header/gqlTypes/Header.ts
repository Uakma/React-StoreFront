/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Header
// ====================================================

export interface Header_shop_navigation_main_items_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  slug: string;
  name: string;
}

export interface Header_shop_navigation_main_items_collection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  slug: string;
  name: string;
}

export interface Header_shop_navigation_main_items_page {
  __typename: "Page";
  slug: string;
}

export interface Header_shop_navigation_main_items_parent {
  __typename: "MenuItem";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface Header_shop_navigation_main_items_children_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  slug: string;
  name: string;
}

export interface Header_shop_navigation_main_items_children_collection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  slug: string;
  name: string;
}

export interface Header_shop_navigation_main_items_children_page {
  __typename: "Page";
  slug: string;
}

export interface Header_shop_navigation_main_items_children_parent {
  __typename: "MenuItem";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface Header_shop_navigation_main_items_children_children_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  slug: string;
  name: string;
}

export interface Header_shop_navigation_main_items_children_children_collection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  slug: string;
  name: string;
}

export interface Header_shop_navigation_main_items_children_children_page {
  __typename: "Page";
  slug: string;
}

export interface Header_shop_navigation_main_items_children_children_parent {
  __typename: "MenuItem";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface Header_shop_navigation_main_items_children_children {
  __typename: "MenuItem";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  category: Header_shop_navigation_main_items_children_children_category | null;
  /**
   * URL to the menu item.
   */
  url: string | null;
  collection: Header_shop_navigation_main_items_children_children_collection | null;
  page: Header_shop_navigation_main_items_children_children_page | null;
  parent: Header_shop_navigation_main_items_children_children_parent | null;
}

export interface Header_shop_navigation_main_items_children {
  __typename: "MenuItem";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  category: Header_shop_navigation_main_items_children_category | null;
  /**
   * URL to the menu item.
   */
  url: string | null;
  collection: Header_shop_navigation_main_items_children_collection | null;
  page: Header_shop_navigation_main_items_children_page | null;
  parent: Header_shop_navigation_main_items_children_parent | null;
  children: (Header_shop_navigation_main_items_children_children | null)[] | null;
}

export interface Header_shop_navigation_main_items {
  __typename: "MenuItem";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  category: Header_shop_navigation_main_items_category | null;
  /**
   * URL to the menu item.
   */
  url: string | null;
  collection: Header_shop_navigation_main_items_collection | null;
  page: Header_shop_navigation_main_items_page | null;
  parent: Header_shop_navigation_main_items_parent | null;
  children: (Header_shop_navigation_main_items_children | null)[] | null;
}

export interface Header_shop_navigation_main {
  __typename: "Menu";
  /**
   * The ID of the object.
   */
  id: string;
  items: (Header_shop_navigation_main_items | null)[] | null;
}

export interface Header_shop_navigation_secondary_items_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  slug: string;
  name: string;
}

export interface Header_shop_navigation_secondary_items_collection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  slug: string;
  name: string;
}

export interface Header_shop_navigation_secondary_items_page {
  __typename: "Page";
  slug: string;
}

export interface Header_shop_navigation_secondary_items_parent {
  __typename: "MenuItem";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface Header_shop_navigation_secondary_items {
  __typename: "MenuItem";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  category: Header_shop_navigation_secondary_items_category | null;
  /**
   * URL to the menu item.
   */
  url: string | null;
  collection: Header_shop_navigation_secondary_items_collection | null;
  page: Header_shop_navigation_secondary_items_page | null;
  parent: Header_shop_navigation_secondary_items_parent | null;
}

export interface Header_shop_navigation_secondary {
  __typename: "Menu";
  /**
   * The ID of the object.
   */
  id: string;
  items: (Header_shop_navigation_secondary_items | null)[] | null;
}

export interface Header_shop_navigation {
  __typename: "Navigation";
  /**
   * Main navigation bar.
   */
  main: Header_shop_navigation_main | null;
  /**
   * Secondary navigation bar.
   */
  secondary: Header_shop_navigation_secondary | null;
}

export interface Header_shop {
  __typename: "Shop";
  /**
   * Shop's navigation.
   */
  navigation: Header_shop_navigation | null;
}

export interface Header {
  /**
   * Return information about the shop.
   */
  shop: Header_shop;
}
