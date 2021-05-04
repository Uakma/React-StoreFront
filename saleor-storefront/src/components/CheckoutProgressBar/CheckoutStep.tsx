import React from "react";
import { Link } from "react-router-dom";
import "./scss/checkout-step.scss";

type Props = {
  name: string;
  number: number;
  link: string;
  active?: boolean;
  mobile?: boolean;
};

const CheckoutStep: React.FC<Props> = ({
  name,
  number,
  link,
  active,
  mobile,
}) => {
  return (
    <Link
      to={link}
      className={`checkout-step checkout-step--${mobile ? "mobile" : "desktop"}
      ${active ? "" : "disabled-link"}
      `}
    >
      <div
        className={`checkout-step__number ${
          active ? "checkout-step__number--active" : ""
        }`}
      >
        {number}
      </div>
      <div className="checkout-step__name">{name}</div>
    </Link>
  );
};

export default CheckoutStep;
