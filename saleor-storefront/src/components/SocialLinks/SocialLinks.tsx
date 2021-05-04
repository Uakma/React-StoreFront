import React from "react";
import { Link } from "react-router-dom";
import "./scss/index.scss";

import Facebook from "../../images/facebook.svg";
import Linkedin from "../../images/linkedin.svg";
import Twitter from "../../images/twitter.svg";

const SocialLinks: React.FC = () => {
  return (
    <div className="social-links">
      <Link to="/" className="social-links__link">
        <Facebook />
      </Link>
      <Link to="/" className="social-links__link">
        <Linkedin />
      </Link>
      <Link to="/" className="social-links__link">
        <Twitter />
      </Link>
    </div>
  );
};

export default SocialLinks;
