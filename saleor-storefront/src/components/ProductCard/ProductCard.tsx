import React, { useContext } from "react";
import { Link } from "react-router-dom";
import isEqual from "lodash/isEqual";
import "./scss/index.scss";

import { popupManagerContext } from "../../PopupManager";
import Heart from "../../images/heart.svg";
import GoShop from "../../images/go-shop.svg";
import { ProductPricingField_pricing } from "../../views/Product/gqlTypes/ProductPricingField";
import { TaxedMoney } from "../../@next/components/containers";
import { generateProductUrl } from "@temp/core/utils";
import { useCart } from "@temp/@sdk/react";

export type Props = {
  id: string;
  slug: string;
  name: string;
  thumbnailUrl: string;
  pricing: ProductPricingField_pricing;
  variantsIDs: { id: string }[];
};

const ProductCard: React.FC<Props> = ({
  id,
  slug,
  name,
  thumbnailUrl,
  pricing,
  variantsIDs,
}: Props) => {
  const context = useContext(popupManagerContext);
  const price = pricing.priceRange.start;
  const priceUndiscounted = pricing.priceRangeUndiscounted.start;
  const { addItem } = useCart();

  const getProductPrice = () => {
    if (isEqual(price, priceUndiscounted)) {
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

  const url = generateProductUrl(slug, id);

  return (
    <div className="product-card">
      <Link to={url}>
        <div
          className="product-card__image"
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        ></div>
      </Link>
      <h4>
        <Link className="product-card__name" to={url}>
          {name}
        </Link>
      </h4>
      <div className="product-card__price">{getProductPrice()}</div>
      <div className="product-card__actions">
        <button onClick={() => addItem(variantsIDs[0].id, 1)}>
          ADD TO CART
        </button>
        <GoShop className="pointer" />
        <Heart
          className="pointer"
          onClick={() => context.wishList.toggleItem(id)}
        />
      </div>
    </div>
  );
};

export default ProductCard;
