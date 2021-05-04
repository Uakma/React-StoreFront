import React from "react";
import { Link } from "react-router-dom";

import FashionIcon from "../../images/shopping-bag.svg";
import ArrowRight from "../../images/arrow-right.svg";

type Props = {
  url: string;
  name: string;
};

const Category: React.FC<Props> = ({ url, name }) => {
  return (
    <div className="category-card">
      <FashionIcon className="categor-card__image" />
      <h4 className="category-card__title">{name}</h4>
      <Link to={url} className="category-card__arrow">
        <ArrowRight />
      </Link>
    </div>
  );
};

export default Category;
