import React from "react";
import { Redirect, useLocation } from "react-router-dom";

import { Loader } from "@components/atoms";
import { useCart, useCheckout } from "@sdk/react";
import { CHECKOUT_STEPS } from "@temp/core/config";
import CheckoutRouter from "./CheckoutRouter";
import { History } from "history";
import { getCheckoutProgressBarProps, getCartSummaryProps } from "./utils";
import { Checkout } from "../../components";

type Props = {
  history: History;
};

const CheckoutPage: React.FC<Props> = ({}) => {
  const { pathname } = useLocation();
  const {
    loaded: cartLoaded,
    shippingPrice,
    discount,
    subtotalPrice,
    totalPrice,
    items,
  } = useCart();
  const { loaded: checkoutLoaded, checkout } = useCheckout();

  if (cartLoaded && (!items || !items?.length)) {
    return <Redirect to="/cart/" />;
  }

  const matchingStepIndex = CHECKOUT_STEPS.findIndex(
    ({ link }) => link === pathname
  );
  const activeStepIndex = matchingStepIndex !== -1 ? matchingStepIndex : 3;
  const shippingTaxedPrice =
    checkout?.shippingMethod?.id && shippingPrice
      ? {
          gross: shippingPrice,
          net: shippingPrice,
        }
      : null;
  const promoTaxedPrice = discount && {
    gross: discount,
    net: discount,
  };
  const isShippingRequiredForProducts =
    items &&
    items.some(
      ({ variant }) => variant.product?.productType.isShippingRequired
    );

  const currentCheckoutView =
    cartLoaded && checkoutLoaded ? <CheckoutRouter /> : <Loader />;

  return (
    <Checkout
      checkoutView={currentCheckoutView}
      checkoutProgressBarProps={getCheckoutProgressBarProps(
        cartLoaded && checkoutLoaded,
        activeStepIndex,
        !!isShippingRequiredForProducts
      )}
      cartSummaryProps={getCartSummaryProps(
        totalPrice,
        subtotalPrice,
        shippingTaxedPrice,
        promoTaxedPrice,
        items
      )}
    />
  );
};

export { CheckoutPage };
