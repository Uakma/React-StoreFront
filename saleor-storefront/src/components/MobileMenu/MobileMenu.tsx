import React from "react";
import { Link } from "react-router-dom";
import "./scss/index.scss";

import { MainCategoriesType } from "..";
import { useAuth } from "@temp/@sdk/react";
import CloseButton from "../../images/close-mobile-menu.svg";
import AngleRight from "../../images/angle-right.svg";
import { generateCategoryUrl } from "@temp/core/utils";

type Props = {
  opened: boolean;
  handleClose: () => void;
  mainCategories: MainCategoriesType;
};

const MobileMenu: React.FC<Props> = ({
  opened,
  mainCategories,
  handleClose,
}) => {
  const { authenticated } = useAuth();

  if (!opened) {
    return null;
  }

  const navItems = [
    { id: 1, name: "Delivery", link: "/" },
    { id: 2, name: "Returns", link: "/" },
    { id: 3, name: "Contact", link: "/contact" },
  ];

  if (authenticated) {
    navItems.push({ id: 4, name: "My Account", link: "/account" });
  }

  return (
    <div className="mobile-menu-wrapper">
      <div className="mobile-menu">
        <CloseButton
          className="mobile-menu__close-button"
          onClick={handleClose}
        />
        <nav className="mobile-menu__top-nav">
          {navItems.map(item => (
            <Link
              to={item.link}
              className="mobile-menu__top-nav__nav-item"
              key={item.id}
              onClick={handleClose}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <nav className="mobile-menu__main-nav">
          {mainCategories.map(category => (
            <Link
              to={generateCategoryUrl(category.slug, category.id)}
              className="mobile-menu__main-nav__nav-item"
              key={category.id}
            >
              {category.name}
              <AngleRight className="mobile-menu__dropdown-angle" />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
