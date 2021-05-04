import React from "react";
import { useMediaQuery } from "react-responsive";
import "./scss/index.scss";

import { TypedSubcategoriesLevel1Query } from "./queries";
import Category from "./Category";
import { ViewCatalogBanner } from "..";

const Categories: React.FC = () => {
  const isTablet = useMediaQuery({ minWidth: 600 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  return (
    <section className="categories-section">
      <ViewCatalogBanner isTablet={isTablet} isDesktop={isDesktop} />
      <div className="categories-section__categories">
        <TypedSubcategoriesLevel1Query renderOnError displayLoader={false}>
          {({ data }) => {
            const edges = data.categories.edges.map(
              ({ node: { id, slug, name } }) => ({
                id,
                slug,
                name,
              })
            );

            edges.splice(3, 0, {
              id: "0",
              slug: "all",
              name: "See All",
            });
            return edges.map(category => (
              <Category
                name={category.name}
                url={`/category/${category.slug}`}
                key={category.id}
              />
            ));
          }}
        </TypedSubcategoriesLevel1Query>
      </div>
    </section>
  );
};

export default Categories;
