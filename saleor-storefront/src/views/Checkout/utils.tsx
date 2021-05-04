import React from "react";

import { ITaxedMoney } from "@types";
import { Button, CartSummary } from "../../components";
// import { CheckoutProgressBar } from "../../components";
import { IItems } from "@sdk/api/Cart/types";
import { CHECKOUT_STEPS } from "./constants";

export const prepareCartSummary = (
  totalPrice?: ITaxedMoney | null,
  subtotalPrice?: ITaxedMoney | null,
  shippingTaxedPrice?: ITaxedMoney | null,
  promoTaxedPrice?: ITaxedMoney | null,
  items?: IItems
) => {
  const products = items?.map(({ id, variant, totalPrice, quantity }) => ({
    id: id || "",
    name: variant.name || "",
    price: {
      gross: {
        amount: totalPrice?.gross.amount || 0,
        currency: totalPrice?.gross.currency || "",
      },
      net: {
        amount: totalPrice?.net.amount || 0,
        currency: totalPrice?.net.currency || "",
      },
    },
    quantity,
    sku: variant.sku || "",
    thumbnail: {
      alt: variant.product?.thumbnail?.alt || undefined,
      url: variant.product?.thumbnail?.url,
      url2x: variant.product?.thumbnail2x?.url,
    },
  }));

  return (
    <CartSummary
      shipping={shippingTaxedPrice}
      subtotal={subtotalPrice}
      promoCode={promoTaxedPrice}
      total={totalPrice}
      products={products}
    />
  );
};

export const getCartSummaryProps = (
  totalPrice?: ITaxedMoney | null,
  subtotalPrice?: ITaxedMoney | null,
  shippingTaxedPrice?: ITaxedMoney | null,
  promoTaxedPrice?: ITaxedMoney | null,
  items?: IItems
) => {
  const products = items?.map(({ id, variant, totalPrice, quantity }) => ({
    id: id || "",
    name: variant.name || "",
    price: {
      gross: {
        amount: totalPrice?.gross.amount || 0,
        currency: totalPrice?.gross.currency || "",
      },
      net: {
        amount: totalPrice?.net.amount || 0,
        currency: totalPrice?.net.currency || "",
      },
    },
    quantity,
    sku: variant.sku || "",
    thumbnail: {
      alt: variant.product?.thumbnail?.alt || undefined,
      url: variant.product?.thumbnail?.url,
      url2x: variant.product?.thumbnail2x?.url,
    },
  }));

  return {
    shipping: shippingTaxedPrice,
    subtotal: subtotalPrice,
    promoCode: promoTaxedPrice,
    total: totalPrice,
    products,
  };
};

export const getCheckoutProgressBarProps = (
  loaded: boolean,
  activeStepIndex: number,
  isShippingRequired: boolean
) => {
  // const steps = isShippingRequired
  //   ? CHECKOUT_STEPS
  //   : CHECKOUT_STEPS.filter(
  //       ({ onlyIfShippingRequired }) => !onlyIfShippingRequired
  //     );

  console.log(loaded, isShippingRequired);

  // return loaded ? { steps, activeStep: activeStepIndex } : {};
  return { steps: CHECKOUT_STEPS, activeStep: activeStepIndex };
};

// export const getCheckoutProgress = (
//   loaded: boolean,
//   activeStepIndex: number,
//   isShippingRequired: boolean
// ) => {
//   const steps = isShippingRequired
//     ? CHECKOUT_STEPS
//     : CHECKOUT_STEPS.filter(
//         ({ onlyIfShippingRequired }) => !onlyIfShippingRequired
//       );

//   return loaded ? (
//     <CheckoutProgressBar steps={steps} activeStep={activeStepIndex} />
//   ) : null;
// };

export const getButton = (text: string, onClick: () => void) => {
  if (text) {
    return (
      <Button data-cy="checkoutPageBtnNextStep" onClick={onClick} type="submit">
        {text}
      </Button>
    );
  } else {
    return null;
  }
};
