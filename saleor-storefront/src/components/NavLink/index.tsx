import * as React from "react";
import { Link } from "react-router-dom";

import {
  generateCategoryUrl,
  generateCollectionUrl,
  generatePageUrl,
} from "../../core/utils";
import {
  SecondaryMenu_shop_navigation_secondary_items,
  SecondaryMenu_shop_navigation_secondary_items_children,
} from "../Footer/gqlTypes/SecondaryMenu";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  item:
    | SecondaryMenu_shop_navigation_secondary_items
    | SecondaryMenu_shop_navigation_secondary_items_children;
}
export const NavLink: React.FC<NavLinkProps> = ({ item, ...props }) => {
  const { name, url, category, collection, page } = item;
  const link = (url: string) => (
    <Link to={url} {...props}>
      {name}
    </Link>
  );

  if (url) {
    return (
      <a href={url} {...props}>
        {name}
      </a>
    );
  } else if (category) {
    return link(generateCategoryUrl(category.id, category.name));
  } else if (collection) {
    return link(generateCollectionUrl(collection.id, collection.name));
  } else if (page) {
    return link(generatePageUrl(page.slug));
  }

  return <span {...props}>{name}</span>;
};
