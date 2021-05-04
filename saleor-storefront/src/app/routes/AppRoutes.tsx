import React from "react";
import { Route, Switch } from "react-router-dom";

import { NotFound } from "../../components";
import UserAccount, * as accountPaths from "../../userAccount/routes";
import { OrderDetails } from "../../userAccount/views";
import { ArticlePage } from "../../views/Article";
import { CategoryPage } from "../../views/Category";
import { CollectionPage } from "../../views/Collection";
import { HomePage } from "../../views/Home";
import { ProductPage } from "../../views/Product";
import { SearchPage } from "../../views/Search";

import { ContactPage } from "../../views/Contact";
import { AboutPage } from "../../views/About";
import { FAQPage } from "../../views/FAQ";
import { DeliveryPage } from "../../views/Delivery";
import { CheckoutPage } from "../../views/Checkout";
import { Account, AccountConfirm } from "../../views/Account";

import { CartPage, PasswordReset, ThankYouPage } from "@pages";

import * as paths from "./paths";

export const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />

    <Route path={paths.contactUrl} component={ContactPage} />
    <Route path={paths.aboutUrl} component={AboutPage} />
    <Route path={paths.faqUrl} component={FAQPage} />
    <Route path={paths.deliveryUrl} component={DeliveryPage} />

    <Route path={paths.accountConfirmUrl} component={AccountConfirm} />
    <Route path="/account" component={Account} />

    <Route path={paths.searchUrl} component={SearchPage} />
    <Route path={paths.categoryUrl} component={CategoryPage} />
    <Route path={paths.collectionUrl} component={CollectionPage} />
    <Route path={paths.productUrl} component={ProductPage} />
    <Route path={paths.cartUrl} component={CartPage} />
    {/* <Route path={paths.checkoutLoginUrl} component={CheckoutLogin} /> */}
    <Route path={paths.pageUrl} component={ArticlePage} />
    <Route path={accountPaths.baseUrl} component={UserAccount} />
    <Route path={accountPaths.userOrderDetailsUrl} component={OrderDetails} />
    <Route path={paths.guestOrderDetailsUrl} component={OrderDetails} />
    <Route path={paths.accountUrl} component={Account} />
    <Route path={paths.accountConfirmUrl} component={AccountConfirm} />
    <Route path={paths.orderHistoryUrl} component={Account} />
    <Route path={paths.addressBookUrl} component={Account} />
    <Route path={paths.passwordResetUrl} component={PasswordReset} />
    <Route path={paths.checkoutUrl} component={CheckoutPage} />
    <Route path={paths.orderFinalizedUrl} component={ThankYouPage} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
