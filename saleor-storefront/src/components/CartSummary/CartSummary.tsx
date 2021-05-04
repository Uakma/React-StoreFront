import React from "react";
import "./scss/index.scss";

import { IImage, ITaxedMoney } from "@types";
import ProductItem from "./ProductItem";

type Costs = {
  subtotal?: ITaxedMoney | null;
  promoCode?: ITaxedMoney | null;
  shipping?: ITaxedMoney | null;
  total?: ITaxedMoney | null;
};

type Product = {
  id: string;
  name: string;
  quantity: number;
  sku: string;
  price: ITaxedMoney;
  thumbnail: IImage;
};

export type Props = {
  products?: Product[];
} & Costs;

const CartSummary: React.FC<Props> = ({
  subtotal,
  total,
  shipping,
  promoCode,
  products,
}) => {
  return (
    <div className="cart-summary">
      <div className="cart-summary__title">Cart summary</div>
      <div className="cart-summary__products">
        {products?.map((product, index) => (
          <div key={product.sku}>
            <ProductItem
              index={index}
              sku={product.sku}
              quantity={product.quantity}
              name={product.name}
              price={product.price}
              thumbnail={product.thumbnail}
            />
          </div>
        ))}
      </div>
      <div className="cart-sumary__total"></div>
    </div>
  );
};

export default CartSummary;
