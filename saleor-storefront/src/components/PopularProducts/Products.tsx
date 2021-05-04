import React, { useRef, useLayoutEffect } from "react";

import { ProductCard } from "..";
import { PopularProducts_shop_homepageCollection_products_edges } from "./gqlTypes/PopularProducts";

type Props = {
  products: PopularProducts_shop_homepageCollection_products_edges[];
  value: number;
  setValue: (scrollPercentage: number) => void;
};

const Products: React.FC<Props> = ({ products, value, setValue }) => {
  const productsEl = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const onePercent = productsEl.current.scrollWidth / 100;

    productsEl.current.scroll({
      left: value * onePercent,
      behavior: "smooth",
    });
  }, [value]);

  return (
    <div ref={productsEl} className="popular-products__products">
      {products.map(({ node }) => (
        <ProductCard
          id={node.id}
          name={node.name}
          slug={node.slug}
          thumbnailUrl={!node.thumbnail ? "http://localhost:8000/media/__sized__/products/saleordemoproduct_paints_01-thumbnail-255x255.png" : node.thumbnail.url }
          pricing={node.pricing}
          variantsIDs={node.variants}
          key={node.id}
        />
      ))}
    </div>
  );
};

export default Products;
