import React, { useState, ChangeEvent } from "react";
import "./scss/payment.scss";

import CardPayment from "../../../images/card-payment.svg";
import PaypalPayment from "../../../images/paypal-payment.svg";
import GiftCardPayment from "../../../images/gift-card-payment.svg";
import DiscountPayment from "../../../images/discount-payment.svg";
import { PaymentOptionCard } from "../../../components";
import { CardDetailsForm } from "@temp/components/Forms";
import { useCheckout } from "@temp/@sdk/react";

type PaymentMethodState = {
  method: number | null;
  chosen: boolean;
};

type PaymentMethod = {
  index: number;
  name: string;
  icon: React.ReactNode;
  view?: React.ReactNode;
};

const PAYMENT_METHODS: PaymentMethod[] = [
  {
    index: 0,
    name: "Debit or credit card",
    icon: <CardPayment />,
    view: <CardDetailsForm />,
  },
  {
    index: 1,
    name: "Paypal",
    icon: <PaypalPayment />,
  },
  {
    index: 2,
    name: "Giftcard",
    icon: <GiftCardPayment />,
  },
  {
    index: 3,
    name: "Discount",
    icon: <DiscountPayment />,
  },
];

const CheckoutPaymentSubpage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodState>({
    method: null,
    chosen: false,
  });
  const {
    // setShippingAddress,
    // setShippingMethod,
    availablePaymentGateways,
    availableShippingMethods,
    // checkout,
    completeCheckout,
  } = useCheckout();
  console.log(availablePaymentGateways);

  if (paymentMethod.chosen) {
    return PAYMENT_METHODS[paymentMethod.method].view as React.ReactElement;
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedMethod = e.target.checked ? +e.target.value : null;

    setPaymentMethod({
      ...paymentMethod,
      method: updatedMethod,
    });
    setTimeout(() => {
      setPaymentMethod({
        chosen: true,
        method: updatedMethod,
      });
    }, 500);
  };

  console.log({ availableShippingMethods });

  const handleCompleteCheckout = async () => {
    const { data, dataError } = await completeCheckout();
    console.log(data, dataError);
  };

  return (
    <div className="payment-options" onClick={handleCompleteCheckout}>
      {PAYMENT_METHODS.map(method => (
        <PaymentOptionCard
          title={method.name}
          icon={method.icon}
          value={method.index}
          checked={paymentMethod.method === method.index}
          onChange={handleChange}
          key={method.index}
        />
      ))}
    </div>
  );
};

export { CheckoutPaymentSubpage };
