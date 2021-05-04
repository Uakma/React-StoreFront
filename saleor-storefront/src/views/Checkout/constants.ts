export enum CheckoutSteps {
  Details = 0,
  Delivery,
  Payment,
  Review,
}

export type CheckoutStep = {
  index: number;
  name: string;
  link: string;
  nextStepLink: string;
  hasProgressBar: boolean;
};

export const CHECKOUT_STEPS: CheckoutStep[] = [
  {
    index: 0,
    link: "/checkout/details",
    name: "Details",
    nextStepLink: "/checkout/delivery",
    hasProgressBar: true,
  },
  {
    index: 1,
    link: "/checkout/delivery",
    name: "Delivery",
    nextStepLink: "/checkout/payment",
    hasProgressBar: true,
  },
  {
    index: 2,
    link: "/checkout/payment",
    name: "Payment",
    nextStepLink: "/checkout/review",
    hasProgressBar: true,
  },
  {
    index: 3,
    link: "/checkout/review",
    name: "Review",
    nextStepLink: "/order-finalized",
    hasProgressBar: false,
  },
];
