import React from "react";
import Instagram from "../images/instagram-white.svg";
import Twitter from "../images/twitter-white.svg";
import GooglePlus from "../images/google-plus-white.svg";
import { generatePageUrl } from "./utils";

export const BASE_URL = "/";
export const PRODUCTS_PER_PAGE = 6;
export const SUPPORT_EMAIL = "support@example.com";
export const PROVIDERS = {
  BRAINTREE: {
    label: "Braintree",
  },
  DUMMY: {
    label: "Dummy",
  },
  STRIPE: {
    href: "https://js.stripe.com/v3/",
    label: "Stripe",
  },
};
export const STATIC_PAGES = [
  {
    label: "About",
    url: generatePageUrl("about"),
  },
];
export const SOCIAL_MEDIA = [
  {
    link: "https://www.facebook.com/mirumeelabs/",
    icon: <Instagram />,
  },
  {
    href: "https://www.instagram.com/mirumeelabs/",
    icon: <Twitter />,
  },
  {
    href: "https://twitter.com/getsaleor",
    icon: <GooglePlus />,
  },
];
export const META_DEFAULTS = {
  custom: [],
  description:
    "Open-source PWA storefront built with Saleor's e-commerce GraphQL API. Written with React and TypeScript.",
  image: `${window.location.origin}${require("../images/logo.svg")}`,
  title: "Demo PWA Storefront – Saleor Commerce",
  type: "website",
  url: window.location.origin,
};
export enum CheckoutStep {
  Details = 1,
  Delivery,
  Payment,
  Review,
}

export const CHECKOUT_STEPS: Step[] = [
  {
    index: 0,
    link: "/checkout/details",
    name: "Details",
    nextActionName: "Continue to Delivery",
    nextStepLink: "/checkout/delivery",
    onlyIfShippingRequired: true,
    step: CheckoutStep.Details,
  },
  {
    index: 1,
    link: "/checkout/delivery",
    name: "Delivery",
    nextActionName: "Continue to Payment",
    nextStepLink: "/checkout/payment",
    onlyIfShippingRequired: true,
    step: CheckoutStep.Delivery,
  },
  {
    index: 2,
    link: "/checkout/payment",
    name: "Payment",
    nextActionName: "Continue to Review",
    nextStepLink: "/checkout/review",
    onlyIfShippingRequired: false,
    step: CheckoutStep.Payment,
  },
  {
    index: 3,
    link: "/checkout/review",
    name: "Review",
    nextActionName: "Place order",
    nextStepLink: "/order-finalized",
    onlyIfShippingRequired: false,
    step: CheckoutStep.Review,
  },
];

export type Step = {
  index: number;
  link: string;
  name: string;
  nextActionName: string;
  nextStepLink: string;
  onlyIfShippingRequired: boolean;
  step: CheckoutStep;
};
