import React from "react";
import "./scss/index.scss";

import { Link } from "react-router-dom";

export type Breadcrumb = {
  text: string;
  link: string;
};

const Breadcrumbs: React.FC<{
  breadcrumbs: Breadcrumb[];
}> = ({ breadcrumbs }) => (
  <ul className="breadcrumbs">
    <li>
      <Link to="/">Home</Link>
    </li>
    {breadcrumbs.map((item, index) => (
      <li key={index}>
        <Link to={item.link}>{item.text}</Link>
      </li>
    ))}
  </ul>
);

export default Breadcrumbs;
