import React from "react";
import { useMediaQuery } from "react-responsive";
import "./scss/index.scss";

import { Loader } from "@components/atoms";

import { CheckoutProgressBar, CartSummary } from "..";
import { Props as CartSummaryProps } from "../CartSummary/CartSummary";
import { CheckoutProgressBarProps } from "../CheckoutProgressBar/CheckoutProgressBar";

type Props = {
  loading?: boolean;
  checkoutView: React.ReactNode;
  checkoutProgressBarProps: CheckoutProgressBarProps;
  cartSummaryProps: CartSummaryProps;
};

const Checkout: React.FC<Props> = ({
  loading,
  checkoutView,
  checkoutProgressBarProps,
  cartSummaryProps,
}: Props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <div className="checkout">
      {loading && <Loader fullScreen={true} />}
      <CheckoutProgressBar {...checkoutProgressBarProps} mobile={isMobile}>
        <div className="checkout-view">{checkoutView}</div>
      </CheckoutProgressBar>
      <CartSummary {...cartSummaryProps} />
    </div>
  );
};

export default Checkout;
