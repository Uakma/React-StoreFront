import React from "react";
import "./scss/index.scss";

import Hero from "./Hero";
import Canvas from "./Canvas";
import { Categories, CatalogProducts, PopularProducts } from "../../components";

const Page: React.FC = () => {
  return (
    <>
      <Hero />
      <Canvas />
      <Categories />
      <CatalogProducts />
      <PopularProducts />
    </>
  );
};

export default Page;
