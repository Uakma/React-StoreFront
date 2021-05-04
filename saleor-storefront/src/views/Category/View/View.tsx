import React from "react";

import { MetaWrapper, NotFound, OfflinePlaceholder } from "../../../components";
import NetworkStatus from "../../../components/NetworkStatus";
// import { PRODUCTS_PER_PAGE } from "../../../core/config";
import Page from "../Page";
import { TypedCategoryProductsQuery } from "../queries";
import { useCategoryFilter } from "../../../hooks";
import { maybe } from "@temp/@next/utils/misc";
import { CategoryVariables } from "../gqlTypes/Category";

type ViewProps = {
  categoryID?: string;
  all?: boolean;
};

export const FilterQuerySet = {
  encode(valueObj) {
    const str = [];
    Object.keys(valueObj).forEach(value => {
      str.push(value + "_" + valueObj[value].join("_"));
    });
    return str.join(".");
  },

  decode(strValue) {
    const obj = {};
    const propsWithValues = strValue.split(".").filter(n => n);
    propsWithValues.map(value => {
      const propWithValues = value.split("_").filter(n => n);
      obj[propWithValues[0]] = propWithValues.slice(1);
    });
    return obj;
  },
};

export const View: React.FC<ViewProps> = ({ categoryID, all }) => {
  const [filters, setters] = useCategoryFilter({ categoryID });

  const variables: CategoryVariables = {
    ...filters,
    id: categoryID,
    isCategory: !all,
  };

  return (
    <NetworkStatus>
      {isOnline => (
        <TypedCategoryProductsQuery
          variables={variables}
          errorPolicy="all"
          loaderFull
        >
          {({ loading, data, loadMore }) => {
            const canDisplayFilters = maybe(
              () => !!data.attributes.edges,
              false
            );

            if (canDisplayFilters) {
              const handleLoadMore = () =>
                loadMore(
                  (prev, next) => ({
                    ...prev,
                    products: {
                      ...prev.products,
                      edges: [...prev.products.edges, ...next.products.edges],
                      pageInfo: next.products.pageInfo,
                    },
                  }),
                  { after: data.products.pageInfo.endCursor }
                );

              return data.category ? (
                <MetaWrapper
                  meta={{
                    description: data.category.seoDescription,
                    title: data.category.seoTitle,
                    type: "product.category",
                  }}
                >
                  <Page
                    categoryID={categoryID}
                    filterSetters={setters}
                    filters={filters}
                    category={data.category}
                    displayLoader={loading}
                    hasNextPage={maybe(
                      () => data.products.pageInfo.hasNextPage,
                      false
                    )}
                    products={data.products}
                    onLoadMore={handleLoadMore}
                  />
                </MetaWrapper>
              ) : (
                <Page
                  categoryID={categoryID}
                  filterSetters={setters}
                  filters={filters}
                  category={data.category}
                  displayLoader={loading}
                  hasNextPage={maybe(
                    () => data.products.pageInfo.hasNextPage,
                    false
                  )}
                  products={data.products}
                  onLoadMore={handleLoadMore}
                />
              );
            }

            if (data && data.category === null) {
              return <NotFound />;
            }

            if (!isOnline) {
              return <OfflinePlaceholder />;
            }
          }}
        </TypedCategoryProductsQuery>
      )}
    </NetworkStatus>
  );
};

export default View;
