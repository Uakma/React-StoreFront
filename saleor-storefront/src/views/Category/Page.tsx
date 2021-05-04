import React from "react";
import { useMediaQuery } from "react-responsive";
import "./scss/index.scss";

import {
  ProductsFeatured,
  PageHero,
  CategoryFilter,
  Select,
  ViewCatalogBanner,
} from "../../components";
import ProductList from "./ProductList";
import { maybe } from "../../core/utils";
import {
  Filters,
  FilterSetters,
  sortOptions,
  pageSizeOptions,
} from "../../hooks";
import { Category_category, Category_products } from "./gqlTypes/Category";
import MenuIcon from "../../images/filter-menu.svg";

type PageProps = {
  category: Category_category;
  displayLoader: boolean;
  hasNextPage: boolean;
  products: Category_products;
  onLoadMore: () => void;
  categoryID: string;
  filters: Filters;
  filterSetters: FilterSetters;
};

const Page: React.FC<PageProps> = ({
  filters,
  filterSetters,
  category,
  displayLoader,
  hasNextPage,
  onLoadMore,
  products,
  categoryID,
}) => {
  const isTablet = useMediaQuery({ query: "(min-width: 950px)" });

  const canDisplayProducts = maybe(
    () => !!products.edges && products.totalCount !== undefined
  );
  const hasProducts = canDisplayProducts && !!products.totalCount;

  const handleSortByChange = sortOption => {
    filterSetters.setSortBy(sortOption.value);
  };

  const handlePageSizeChange = pageSizeOption => {
    filterSetters.setPageSize(pageSizeOption.value);
  };

  return (
    <>
      <PageHero
        title={category ? category.name : "All Categories"}
        breadcrumbs={[{ text: "Category Page", link: "/category" }]}
      />
      <div className="category-page">
        {isTablet || (
          <div className="category-page__mobile-header">
            <h2>Category</h2>
            <MenuIcon />
          </div>
        )}
        <div className="category-page__aside">
          {isTablet && (
            <div className="category-page__category-filter">
              <CategoryFilter
                categoryID={categoryID}
                categories={filters.categories}
                onChange={filterSetters.setSubcategories}
              />
            </div>
          )}
          <ViewCatalogBanner isDesktop={isTablet} withText />
        </div>
        <div className="category-page__product-list">
          <div className="category-page__product-list__header">
            <div className="category-page__selects">
              <Select
                title="Sort By"
                options={sortOptions}
                onChange={handleSortByChange}
              />
              <Select
                title="Show"
                options={pageSizeOptions}
                onChange={handlePageSizeChange}
              />
            </div>
          </div>
          <ProductList
            products={products.edges.map(edge => edge.node)}
            canLoadMore={hasNextPage}
            loading={displayLoader}
            onLoadMore={onLoadMore}
          />
        </div>
        {!hasProducts && <ProductsFeatured title="You might like" />}
      </div>
    </>
  );
};

export default Page;
