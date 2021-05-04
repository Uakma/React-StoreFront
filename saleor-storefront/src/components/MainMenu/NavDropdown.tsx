import React, { useState, useContext, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "./scss/nav-dropdown.scss";

import { popupManagerContext } from "../../PopupManager";
import ArrowDown from "../../images/arrow-down.svg";
import boyImg from "../../images/boy.png";
import pointer from "../../images/pointer.png";
import { generateCategoryUrl } from "@temp/core/utils";
import { TypedSubcategoriesByCategoryIDQuery } from "./queries";

type Props = {
  categoryID: string;
  url: string;
  name: string;
};

type DropdownProps = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  leftOffset: number | "unset";
};

const Dropdown: React.FC<DropdownProps> = ({
  onMouseEnter,
  onMouseLeave,
  leftOffset,
  children,
}) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="dropdown"
    style={{
      cursor: `url(${pointer}), auto`,
      left: leftOffset,
    }}
  >
    <div>{children}</div>
    <img
      className="dropdown__image"
      src={boyImg}
      alt=""
      width={125}
      height={204}
    />
  </div>
);

const NavDropdown: React.FC<Props> = ({ name, url, categoryID }) => {
  const context = useContext(popupManagerContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [leftOffset, setLeftOffset] = useState<number | "unset">("unset");
  const navItemEl = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const navRect = navItemEl.current.parentElement.getBoundingClientRect();

    setLeftOffset(navRect.left + (navRect.width - 1215) / 2);
  }, [setLeftOffset, navItemEl.current, isOpen]);

  const handleMouseEnter = () => {
    setIsOpen(true);
    context.darken();
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    context.unDarken();
  };

  return (
    <div
      className="main-menu__nav-item"
      style={{ zIndex: 10001 }}
      ref={navItemEl}
    >
      <div className="main-menu__nav-item__layer"></div>
      <Link to={url} className="main-menu__nav-item__link">
        <div
          className={classnames("main-menu__nav-item__colored", {
            "main-menu__nav-item__colored--colored": isOpen,
          })}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {name}
          <ArrowDown />
        </div>
      </Link>
      {isOpen && (
        <Dropdown
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          leftOffset={leftOffset}
        >
          <TypedSubcategoriesByCategoryIDQuery variables={{ id: categoryID }}>
            {({ data }) => {
              const subcategories = data.category.children.edges.map(
                edge => edge.node
              );

              return subcategories.map(subcategory => (
                <div className="dropdown__column" key={subcategory.id}>
                  <Link
                    to={generateCategoryUrl(subcategory.slug, subcategory.id)}
                  >
                    <h5 className="dropdown__column__heading">
                      {subcategory.name}
                    </h5>
                  </Link>
                  <ul>
                    {subcategory.children.edges.map(({ node }) => (
                      <li className="dropdown__column__list-item" key={node.id}>
                        {node.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ));
            }}
          </TypedSubcategoriesByCategoryIDQuery>
        </Dropdown>
      )}
    </div>
  );
};

export default NavDropdown;
