import React from "react";

import PersonalDetailsIcon from "../../images/personal-details-link-icon.svg";
import YourOrdersIcon from "../../images/your-order-link-icon.svg";
import PaymentMethodsIcon from "../../images/payment-methods-link-icon.svg";
import NewsletterIcon from "../../images/newsletter-link-icon.svg";
import FavouriteStoriesIcon from "../../images/favourite-stories-link-icon.svg";

export type LinkType = {
  text: string;
  link: string;
  icon: React.ReactNode;
};

export const LINKS: LinkType[] = [
  {
    text: "Personal details",
    link: "/account/personal-details",
    icon: <PersonalDetailsIcon />,
  },
  { text: "Your orders", link: "/account/orders", icon: <YourOrdersIcon /> },
  {
    text: "Payment methods",
    link: "/account/payment-methods",
    icon: <PaymentMethodsIcon />,
  },
  { text: "Newsletter", link: "/account/newsletter", icon: <NewsletterIcon /> },
  {
    text: "Favourite stories",
    link: "/account/favourite-stories",
    icon: <FavouriteStoriesIcon />,
  },
];
