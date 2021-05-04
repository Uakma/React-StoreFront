import React from "react";

import { Button, Loader } from "@components/atoms";
import ProductCard from "../ProductCard/ProductCard";
import { Category_products_edges_node } from "../../views/Category/gqlTypes/Category";

type Props = {
  products: Category_products_edges_node[];
  canLoadMore?: boolean;
  loading?: boolean;
  onLoadMore?: () => void;
};

const ProductList: React.FC<Props> = ({
  products,
  canLoadMore = false,
  loading = false,
  onLoadMore,
}) => {
  console.log(products);

  return (
    <>
      {products.map(product => (
        <ProductCard
          id={product.id}
          slug={product.slug}
          name={product.name}
          thumbnailUrl={product.thumbnail.url}
          variantsIDs={product.variants}
          pricing={product.pricing}
        />
      ))}
      <>
        {loading ? (
          <Loader />
        ) : (
          canLoadMore && (
            <Button
              data-cy="load-more_button"
              color="secondary"
              onClick={onLoadMore}
            >
              More +
            </Button>
          )
        )}
      </>
    </>
  );
};

export default ProductList;
