import React from "react";
import "./scss/product-item.scss";

import { TaxedMoney } from "@components/containers";
// import { CachedImage } from "../CachedImage";

import * as S from "./ProductItem/styles";

import { IImage, ITaxedMoney } from "@types";

type Props = {
  index?: number;
  name: string;
  sku: string;
  quantity: number;
  price: ITaxedMoney;
  thumbnail?: IImage;
};

const ProductItem: React.FC<Props> = ({
  index,
  sku,
  name,
  price,
  quantity,
  thumbnail,
}) => {
  return (
    <div className="product-item">
      <div className="product-item__image">
        <img src={thumbnail.url} alt="" width={139} height={141} />
      </div>
      <div className="product-item__info">
        <div className="product-item__name">{name}</div>
        <div className="product-item__sku">Product code: {sku}</div>
        <S.Quantity>
          Quantity: <span>{quantity}</span>
        </S.Quantity>
        <div className="product-item__price">
          <TaxedMoney taxedMoney={price} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
