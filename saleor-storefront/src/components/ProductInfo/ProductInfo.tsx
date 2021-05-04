import React, { useContext } from "react";
import "./scss/index.scss";

import { RichTextContent } from "@components/atoms";
import { popupManagerContext, PRODUCT_INFO_POPUP } from "../../PopupManager";
import { Popup } from "..";
import { ProductDetails_product } from "../../views/Product/gqlTypes/ProductDetails";

type Props = {
  product: ProductDetails_product;
};

const ProductInfo: React.FC<Props> = ({ product }) => {
  const context = useContext(popupManagerContext);

  const madeFromDetails = product.attributes.find(
    attribute => attribute.attribute.name === "Made from"
  )?.values[0]?.name;

  const _dimensionsDetails = product.attributes.find(
    attribute => attribute.attribute.name === "dimensions"
  )?.values;

  const dimensionsDetails = _dimensionsDetails ? (
    <>
      {_dimensionsDetails.map(value => (
        <div key={value.id}>{value.name}</div>
      ))}
    </>
  ) : null;

  // const deliveryDetails = product.attributes.find(
  //   attribute => attribute.attribute.name === "delivery"
  // )?.values[0]?.name;

  return (
    <Popup opened={context.openedPopup === PRODUCT_INFO_POPUP}>
      <div className="product-info">
        <h3 className="product-info__heading">Product info</h3>
      </div>
      <div className="product-info__desc">
        <RichTextContent descriptionJson={product.descriptionJson} />
      </div>
      <div className="product-info__attributes">
        <div className="product-info__attributes__title">Made from:</div>
        <div className="product-info__attributes__info">{madeFromDetails}</div>
      </div>
      <div className="product-info__attributes">
        <div className="product-info__attributes__title">Dimensions:</div>
        <div className="product-info__attributes__info">
          {dimensionsDetails}
        </div>
      </div>
    </Popup>
  );
};

export default ProductInfo;
