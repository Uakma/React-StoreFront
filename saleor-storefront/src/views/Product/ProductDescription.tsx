import React, { useState, useContext } from "react";
import isEqual from "lodash/isEqual";
import "./scss/product-description.scss";

import { popupManagerContext, PRODUCT_INFO_POPUP } from "../../PopupManager";
import {
  SocialLinks,
  Button,
  ArrowButton,
  QuantityManager,
  Details,
  ProductInfo,
} from "../../components";
import { ProductDetails_product } from "./gqlTypes/ProductDetails";
import { RichTextContent } from "@components/atoms";
import { useCart } from "@sdk/react";
import { TaxedMoney } from "@temp/@next/components/containers";
import Heart from "../../images/heart.svg";

type Props = {
  product: ProductDetails_product;
};

const ProductDescription: React.FC<Props> = ({ product }) => {
  const context = useContext(popupManagerContext);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const subtractHandler = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  const addHandler = () => {
    setQuantity(quantity + 1);
  };

  const price = product.pricing.priceRange.start;
  const priceUndiscounted = product.pricing.priceRangeUndiscounted.start;

  const getProductPrice = () => {
    if (isEqual(price, priceUndiscounted) || true) {
      return <TaxedMoney taxedMoney={price} />;
    } else {
      return (
        <>
          <span className="product-card__undiscounted_price">
            <TaxedMoney taxedMoney={priceUndiscounted} />
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <TaxedMoney taxedMoney={price} />
        </>
      );
    }
  };

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

  const deliveryDetails = product.attributes.find(
    attribute => attribute.attribute.name === "delivery"
  )?.values[0]?.name;

  return (
    <div className="product-desc">
      <div className="product-desc__social-links">
        <SocialLinks />
      </div>
      <h3 className="product-desc__name">{product.name}</h3>
      <div className="product-desc__info">
        <h6 className="product-desc__info__title">Product info</h6>
        <div className="product-desc__info__desc">
          <RichTextContent descriptionJson={product.descriptionJson} />
        </div>
        <div className="product-desc__info__read-more">
          <ArrowButton onClick={() => context.show(PRODUCT_INFO_POPUP)}>
            Read more
          </ArrowButton>
        </div>
        <Details summary="Made from: " details={madeFromDetails} />
        <Details summary="Dimensions: " details={dimensionsDetails} />
        <Details summary="Delivery info: " details={deliveryDetails} />
      </div>

      <div className="product-desc__quantity-and-price">
        <QuantityManager
          count={quantity}
          subtractHandler={subtractHandler}
          addHandler={addHandler}
        />
        <div className="product-desc__price">{getProductPrice()}</div>
      </div>

      <div className="product-desc__actions">
        <Button
          type="button"
          color="black"
          onClick={() => {
            addItem(product.variants[0].id, 1);
          }}
          fixed
        >
          ADD TO CART
        </Button>
        <Heart
          className="product-desc__heart"
          onClick={() => context.wishList.toggleItem(product.id)}
        />
      </div>
      <ProductInfo product={product} />
    </div>
  );
};

export default ProductDescription;
