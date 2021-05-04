import React from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import classnames from "classnames";
import "./scss/index.scss";

import { Button } from "..";
import { useSignOut, useUserDetails } from "@temp/@sdk/react";
import { Loader } from "@temp/@next/components/atoms";
import { LINKS } from "../../views/Account/constants";

const AccountMenu = () => {
  const { data: user, loading } = useUserDetails();
  const [signOut] = useSignOut();
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Redirect to="/" />;
  }

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <div className="account-menu">
      <h3 className="account-menu__heading">Hello {fullName}</h3>
      <div className="account-menu__links">
        {LINKS.map((link, index) => (
          <Link
            to={link.link}
            className={classnames("account-menu__link", {
              "account-menu__link--active": location.pathname === link.link,
            })}
            key={index}
          >
            <span className="account-menu__link__text">{link.text}</span>
            {link.icon}
          </Link>
        ))}
      </div>
      <div className="account-menu__buttons">
        <button className="privacy-policy-button">PRIVATE POLICY</button>
        <Button color="black" variant="outlined">
          Back to home
        </Button>
        <Button color="black" onClick={signOut}>
          Log out
        </Button>
      </div>
    </div>
  );
};

export default AccountMenu;
