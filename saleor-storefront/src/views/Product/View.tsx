import React from "react";
import { useParams } from "react-router-dom";
import "./scss/index.scss";

import { NotFound, OfflinePlaceholder } from "../../components";
import NetworkStatus from "../../components/NetworkStatus";
import { maybe } from "../../core/utils";
import { ProductDetails_product } from "./gqlTypes/ProductDetails";
import Page from "./Page";
import { TypedProductDetailsQuery } from "./queries";

export const extractMeta = (product: ProductDetails_product) => ({
  custom: [
    {
      content: product.pricing.priceRange.start.gross.amount.toString(),
      property: "product:price:amount",
    },
    {
      content: product.pricing.priceRange.start.gross.currency,
      property: "product:price:currency",
    },
    {
      content: product.isAvailable ? "in stock" : "out off stock",
      property: "product:isAvailable",
    },
    {
      content: product.category.name,
      property: "product:category",
    },
  ],
  description: product.seoDescription || product.descriptionJson,
  image: maybe(() => product.thumbnail.url, null),
  title: product.seoTitle || product.name,
  type: "product.item",
  url: window.location.href,
});

type Params = {
  slug: string;
  id: string;
};

const View: React.FC = () => {
  const params = useParams<Params>();

  return (
    <TypedProductDetailsQuery
      loaderFull
      variables={{
        id: params.id,
      }}
      errorPolicy="all"
      key={params.id}
    >
      {({ data }) => (
        <NetworkStatus>
          {isOnline => {
            const { product } = data;

            if (product === product) {
              return (
                // <MetaWrapper meta={extractMeta(product)}>
                <Page product={product} />
                // </MetaWrapper>
              );
            }

            if (product === null) {
              return <NotFound />;
            }

            if (!isOnline) {
              return <OfflinePlaceholder />;
            }
          }}
        </NetworkStatus>
      )}
    </TypedProductDetailsQuery>
  );
};

export default View;
