import React from "react";

import { TypedMainCategoriesQuery } from "./queries";
import { Header, Footer } from "..";
import { MainCategories_categories_edges_node } from "./gqlTypes/MainCategories";

export type MainCategoriesType = MainCategories_categories_edges_node[];

const Layout: React.FC = ({ children }) => {
  return (
    <TypedMainCategoriesQuery>
      {({ data }) => {
        const mainCategories: MainCategoriesType = data.categories.edges.map(
          edge => edge.node
        );
        return (
          <>
            <Header mainCategories={mainCategories} />
            {children}
            <Footer mainCategories={mainCategories} />
          </>
        );
      }}
    </TypedMainCategoriesQuery>
  );
};

export default Layout;
