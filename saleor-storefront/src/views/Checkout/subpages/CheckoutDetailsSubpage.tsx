import React from "react";
import "./scss/details.scss";

import { Redirect, RouteComponentProps } from "react-router";

import { useUserDetails } from "@sdk/react";
import { CheckoutDetailsForm } from "../../../components/Forms";

type Props = {} & RouteComponentProps<any>;

const CheckoutDetailsSubpage: React.FC<Props> = () => {
  const { data: user } = useUserDetails();

  if (user) {
    return <Redirect to="/checkout/delivery" />;
  }

  return (
    <div className="checkout-details-view">
      <CheckoutDetailsForm />
    </div>
  );
};

export { CheckoutDetailsSubpage };
