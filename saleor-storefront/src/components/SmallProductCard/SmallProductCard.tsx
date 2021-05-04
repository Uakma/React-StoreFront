import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./scss/index.scss";

import Heart from "../../images/heart-outlined-small.svg";
import Trash from "../../images/trash-outlined.svg";
import { Checkout_lines_variant_pricing } from "@temp/@sdk/fragments/gqlTypes/Checkout";
import { TaxedMoney } from "../../@next/components/containers";
import { QuantityManager } from "..";

type Props = {
  url: string;
  name: string;
  thumbnail: string;
  pricing: Checkout_lines_variant_pricing;
  initialProductCount: number;
  onQuantity: (quantity: number) => void;
  onRemove: () => void;
};

const WishListProductCard: React.FC<Props> = ({
  url,
  name,
  thumbnail,
  pricing,
  initialProductCount,
  onQuantity,
  onRemove,
}) => {
  const [count, setCount] = useState(initialProductCount);

  const addHandler = () => {
    const updatedQuantity = count + 1;
    setCount(updatedQuantity);
    onQuantity(updatedQuantity);
  };

  const subtractHandler = () => {
    const updatedQuantity = count - 1;
    setCount(updatedQuantity);
    onQuantity(updatedQuantity);
  };

  return (
    <div className="sm-product-card">
      <Link to={url}>
        <img
          src={thumbnail}
          alt=""
          className="sm-product-card__image"
          width={149}
          height={167}
        />
      </Link>
      <div className="sm-product-card__info">
        <h5>
          <Link className="sm-product-card__name" to={url}>
            {name}
          </Link>
        </h5>
        <div className="sm-product-card__delivery-time">Delivery 24th July</div>
        <QuantityManager
          addHandler={addHandler}
          subtractHandler={subtractHandler}
          count={initialProductCount}
          small
        />
        <div className="sm-product-card__bottom">
          <div className="sm-product-card__actions">
            <Trash onClick={onRemove} />
            <Heart />
          </div>
          <div className="sm-product-card__price">
            <div className="sm-product-card__price-undiscounted">
              <TaxedMoney taxedMoney={pricing.priceUndiscounted} />
            </div>
            <div className="sm-product-card__price-current">
              <TaxedMoney taxedMoney={pricing.price} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListProductCard;
