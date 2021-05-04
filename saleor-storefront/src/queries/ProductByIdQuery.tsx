import React from "react";

import {
  TypedProductByIdQuery,
  TypedProductByProductVariantIdQuery,
} from "./queries";
import { ProductById_product } from "./gqlTypes/ProductById";

type Props = {
  productId?: string;
  productVariantId?: string;
  children: ({ product }: { product: ProductById_product }) => React.ReactNode;
};

const ProductByIdQuery: React.FC<Props> = ({
  productId,
  productVariantId,
  children,
}) => {
  if (productId) {
    return (
      <TypedProductByIdQuery variables={{ id: productId }}>
        {({ data }) => children(data)}
      </TypedProductByIdQuery>
    );
  }

  if (productVariantId) {
    return (
      <TypedProductByProductVariantIdQuery variables={{ id: productVariantId }}>
        {({ data }) => children(data.productVariant)}
      </TypedProductByProductVariantIdQuery>
    );
  }

  return null;
};

export default ProductByIdQuery;
