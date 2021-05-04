import React from "react";
import "./scss/index.scss";

import { TypedCatalogProductsQuery } from "./queries";

import { HorizontalProductSlider } from "..";
import Products from "./Products";
// import ProductSlider from "./ProductSlider";

const CatalogProducts: React.FC = () => {
  return (
    <section className="catalog-products">
      <HorizontalProductSlider title="Catalog">
        {({ value, setValue }) => {
          return (
            <TypedCatalogProductsQuery variables={{ count: 15 }}>               
              {({ data }) => (
                // <ProductSlider 
                //   products={data.shop.homepageCollection.products.edges}
                // />
                <Products
                  products={data.shop.homepageCollection.products.edges}
                  value={value}
                  setValue={setValue}
                />
              )}
            </TypedCatalogProductsQuery>
          );
        }}
      </HorizontalProductSlider>
    </section>
  );
};

export default CatalogProducts;
