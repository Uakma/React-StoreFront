import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import {
  CheckoutDetailsSubpage,
  CheckoutDeliverySubpage,
  CheckoutPaymentSubpage,
  CheckoutOrderSummarySubpage,
} from "./subpages";

const CheckoutRouter: React.FC = () => {
  return (
    <Switch>
      <Route path="/checkout/details" component={CheckoutDetailsSubpage} />
      <Route path="/checkout/delivery" component={CheckoutDeliverySubpage} />
      <Route path="/checkout/payment" component={CheckoutPaymentSubpage} />
      <Route
        path="/checkout/order-summary"
        component={CheckoutOrderSummarySubpage}
      />
      <Route render={props => <Redirect {...props} to="/checkout/details" />} />
    </Switch>
  );
};

export default CheckoutRouter;
