import React from "react";
import { Redirect } from "react-router-dom";
import "./scss/index.scss";

import { getAuthToken } from "@sdk/auth";
import { AccountMenu } from "../../components";
import AccountRouter from "./AccountRouter";

const Account: React.FC = () => {
  if (!getAuthToken()) {
    return <Redirect to="/" />;
  }

  return (
    <div className="account-page">
      <AccountRouter />
      <AccountMenu />
    </div>
  );
};

export default Account;
