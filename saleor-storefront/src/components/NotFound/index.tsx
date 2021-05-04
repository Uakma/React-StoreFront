import React from "react";
import "./scss/index.scss";

import NotFoundSvg from "../../images/NotFound.svg";

interface NotFoundProps {
  message?: string;
}

const NotFound: React.FC<NotFoundProps> = () => (
  <section className="not-found-page">
    <NotFoundSvg />
  </section>
);

export default NotFound;
