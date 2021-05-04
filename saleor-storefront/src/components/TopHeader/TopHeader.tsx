import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./scss/index.scss";

import {
  popupManagerContext,
  AUTH_POPUPS,
  WISHLIST_POPUP,
  SHOPPING_BAG_POPUP,
  PopupTypes,
} from "../../PopupManager";
import { AuthCard, WishList, ShoppingBag } from "..";
import InstagramIcon from "../../images/instagram.svg";
import FacebookIcon from "../../images/facebook-black.svg";
// import SearchIcon from "../../images/search-icon.svg";
import HeartIcon from "../../images/heart.svg";
import AccountIcon from "../../images/account-icon.svg";
import ShoppingBagIcon from "../../images/shopping-bag.svg";
import { Header_shop_navigation_secondary_items } from "../Header/gqlTypes/Header";
import { useCart, useAuth } from "@temp/@sdk/react";
import SearchBox from "../SearchBox/SearchBox";

type Props = {
  items: Header_shop_navigation_secondary_items[];
};

const TopHeader: React.FC<Props> = () => {
  const context = useContext(popupManagerContext);
  const isDesktop = useMediaQuery({ minWidth: 1000 });
  const { items } = useCart();
  const { authenticated } = useAuth();

  const navItems = [
    { id: 1, name: "Delivery", link: "/" },
    { id: 2, name: "Returns", link: "/" },
    { id: 3, name: "Contact", link: "/contact" },
  ];

  if (authenticated) {
    navItems.push({ id: 4, name: "My Account", link: "/account" });
  }

  return (
    <>
      <div className="container container--top-header">
        <div className="top-header">
          <div className="top-header__left">
            <a href="/" className="top-header__social">
              <InstagramIcon />
            </a>
            <a href="/" className="top-header__social">
              <FacebookIcon />
            </a>
          </div>
          {isDesktop && (
            <nav className="top-header__center">
              {navItems.map(({ id, name, link }) => (
                <Link to={link} className="top-header__nav-item" key={id}>
                  {name}
                </Link>
              ))}
            </nav>
          )}

          <div className="top-header__right">
            <SearchBox />
            {/* <SearchIcon className="top-header__search" /> */}
            <HeartIcon
              className="top-header__heart"
              onClick={() => context.show(WISHLIST_POPUP)}
            />
            <AccountIcon
              className="top-header__account"
              onClick={() => context.show(AUTH_POPUPS.LOGIN as PopupTypes)}
            />
            <div
              className="top-header__shopping-bag"
              onClick={() => context.show(SHOPPING_BAG_POPUP)}
            >
              <ShoppingBagIcon />
              {items && items.length ? (
                <span className="top-header__shopping-bag__badge">
                  {items.length}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <WishList />
      <AuthCard />
      <ShoppingBag />
    </>
  );
};

export default TopHeader;
