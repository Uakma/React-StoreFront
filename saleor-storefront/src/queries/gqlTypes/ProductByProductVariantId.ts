/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProductByProductVariantId
// ====================================================

export interface ProductByProductVariantId_productVariant_product_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Alt text for an image.
   */
  alt: string | null;
}

export interface ProductByProductVariantId_productVariant_product_pricing_priceRangeUndiscounted_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductByProductVariantId_productVariant_product_pricing_priceRangeUndiscounted_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductByProductVariantId_productVariant_product_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductByProductVariantId_productVariant_product_pricing_priceRangeUndiscounted_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductByProductVariantId_productVariant_product_pricing_priceRangeUndiscounted_start_net;
}

export interface ProductByProductVariantId_productVariant_product_pricing_priceRangeUndiscounted_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductByProductVariantId_productVariant_product_pricing_priceRangeUndiscounted_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductByProductVariantId_productVariant_product_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductByProductVariantId_productVariant_product_pricing_priceRangeUndiscounted_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductByProductVariantId_productVariant_product_pricing_priceRangeUndiscounted_stop_net;
}

export interface ProductByProductVariantId_productVariant_product_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductByProductVariantId_productVariant_product_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductByProductVariantId_productVariant_product_pricing_priceRangeUndiscounted_stop | null;
}

export interface ProductByProductVariantId_productVariant_product_pricing_priceRange_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductByProductVariantId_productVariant_product_pricing_priceRange_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductByProductVariantId_productVariant_product_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductByProductVariantId_productVariant_product_pricing_priceRange_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductByProductVariantId_productVariant_product_pricing_priceRange_start_net;
}

export interface ProductByProductVariantId_productVariant_product_pricing_priceRange_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductByProductVariantId_productVariant_product_pricing_priceRange_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductByProductVariantId_productVariant_product_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductByProductVariantId_productVariant_product_pricing_priceRange_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductByProductVariantId_productVariant_product_pricing_priceRange_stop_net;
}

export interface ProductByProductVariantId_productVariant_product_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductByProductVariantId_productVariant_product_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductByProductVariantId_productVariant_product_pricing_priceRange_stop | null;
}

export interface ProductByProductVariantId_productVariant_product_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: ProductByProductVariantId_productVariant_product_pricing_priceRangeUndiscounted | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: ProductByProductVariantId_productVariant_product_pricing_priceRange | null;
}

export interface ProductByProductVariantId_productVariant_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: ProductByProductVariantId_productVariant_product_thumbnail | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: ProductByProductVariantId_productVariant_product_pricing | null;
}

export interface ProductByProductVariantId_productVariant {
  __typename: "ProductVariant";
  product: ProductByProductVariantId_productVariant_product;
}

export interface ProductByProductVariantId {
  /**
   * Look up a product variant by ID.
   */
  productVariant: ProductByProductVariantId_productVariant | null;
}

export interface ProductByProductVariantIdVariables {
  id: string;
}
