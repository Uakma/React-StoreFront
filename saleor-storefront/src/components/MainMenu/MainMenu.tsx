import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./scss/index.scss";

import { MainCategoriesType } from "..";
import Logo from "../../images/logo.svg";
import Hamburger from "../../images/hamburger.svg";
import NavDropdown from "./NavDropdown";
import { generateCategoryUrl } from "@temp/core/utils";

type Props = {
  toggleMobileMenu: () => void;
  mainCategories: MainCategoriesType;
};

const MainMenu: React.FC<Props> = ({ mainCategories, toggleMobileMenu }) => {
  const isDesktop = useMediaQuery({ minWidth: 1000 });

  return (
    <div className="container container--main-menu">
      <div className="main-menu">
        <Link to="/">
          <Logo className="main-menu__logo" />
        </Link>
        {isDesktop && (
          <nav className="main-menu__nav">
            {mainCategories.map(({ id, slug, name }) => (
              <NavDropdown
                name={name}
                url={generateCategoryUrl(slug, id)}
                categoryID={id}
                key={id}
              />
            ))}
          </nav>
        )}
        {isDesktop || (
          <>
            <Hamburger
              className="main-menu__hamburger"
              onClick={toggleMobileMenu}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MainMenu;
