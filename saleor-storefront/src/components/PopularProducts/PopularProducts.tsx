import React from "react";
import "./scss/index.scss";

import { TypedPopularProductsQuery } from "./queries";
import { ArrowButton } from "../../components";

import { HorizontalProductSlider } from "..";
import Products from "./Products";
// import ProductSlider from "./ProductSlider";

const PopularProducts: React.FC = () => {
  return (
    <section className="popular-products">
      <HorizontalProductSlider title="Popular">
        {({ value, setValue }) => {
          return (
            <TypedPopularProductsQuery variables={{ count: 15 }}>
              {({ data }) => (
                <Products
                  products={data.shop.homepageCollection.products.edges}
                  value={value}
                  setValue={setValue}
                />
              )}
            </TypedPopularProductsQuery>
          );
        }}
      </HorizontalProductSlider>
      <div className="popular-products__view-more" onClick={() => {}}>
        <ArrowButton color="yellow">View More</ArrowButton>
      </div>
    </section>
  );
};

export default PopularProducts;
