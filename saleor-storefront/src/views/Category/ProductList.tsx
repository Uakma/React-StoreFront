import React from "react";
import "./scss/product-list.scss";

import { Loader } from "@components/atoms";
import { ProductCard, ArrowButton } from "../../components";
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
  return (
    <>
      <div className="product-list">
        {products.map(product => (
          <ProductCard
            id={product.id}
            slug={product.slug}
            name={product.name}
            thumbnailUrl={product.thumbnail?.url}
            pricing={product.pricing}
            variantsIDs={product.variants}
            key={product.id}
          />
        ))}
      </div>
      <>
        {loading ? (
          <Loader />
        ) : (
          canLoadMore && (
            <div className="product-list__view-more" onClick={onLoadMore}>
              <ArrowButton color="yellow">View More</ArrowButton>
            </div>
          )
        )}
      </>
    </>
  );
};

export default ProductList;
