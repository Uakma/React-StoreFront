import React from "react";

import { ProductDetails_product } from "./gqlTypes/ProductDetails";
import { PageHero, PopularProducts } from "../../components";
import ProductGallery from "./ProductGallery";
import ProductDescription from "./ProductDescription";

type Props = {
  product: ProductDetails_product;
};

const Page: React.FC<Props> = ({ product }) => {
  return (
    <>
      <PageHero
        title="Product page"
        breadcrumbs={[{ text: "Product Page", link: "/" }]}
      />
      <div className="product-page">
        <ProductGallery images={product.images} />
        <ProductDescription product={product} />
      </div>
      <PopularProducts />
    </>
  );
};

export default Page;
