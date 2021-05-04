import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import {
  AccountNewsletterSubpage,
  AccountPersonalDetailsSubpage,
  AccountOrdersSubpage,
  AccountPaymentMethodsSubpage,
  AccountFavouriteStoriesSubpage,
} from "./subpages";

const AccountRouter: React.FC = () => {
  return (
    <Switch>
      <Route
        path="/account/personal-details"
        component={AccountPersonalDetailsSubpage}
      />
      <Route
        path="/account/payment-methods"
        component={AccountPaymentMethodsSubpage}
      />
      <Route path="/account/newsletter" component={AccountNewsletterSubpage} />
      <Route path="/account/orders" component={AccountOrdersSubpage} />
      <Route
        path="/account/favourite-stories"
        component={AccountFavouriteStoriesSubpage}
      />
      <Route
        render={props => <Redirect {...props} to="/account/personal-details" />}
      />
    </Switch>
  );
};

export default AccountRouter;
