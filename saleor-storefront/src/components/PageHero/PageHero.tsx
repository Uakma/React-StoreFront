import React from "react";
import "./scss/index.scss";

import heroImage from "../../images/rear-view-of-man-sitting-on-rock-by-sea.png";
import { Breadcrumb, Breadcrumbs } from "../../components";

type Props = {
  breadcrumbs: Breadcrumb[];
  title: string;
};

const Hero: React.FC<Props> = ({ breadcrumbs, title }) => {
  return (
    <div className="page-hero">
      <div
        style={{
          background: `url(${heroImage})`,
        }}
        className="page-hero__background"
      ></div>
      <div className="page-hero__text">
        <h2 className="page-hero__title">{title}</h2>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
    </div>
  );
};

export default Hero;
