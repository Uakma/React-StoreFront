import React from "react";
import { Link } from "react-router-dom";
import "./scss/index.scss";

import { MainCategoriesType } from "..";
import Logo from "../../images/logo-white.svg";
import { SOCIAL_MEDIA } from "../../core/config";
import { Subscription } from "..";
import { generateCategoryUrl } from "@temp/core/utils";

type Props = {
  mainCategories: MainCategoriesType;
};

const Footer: React.FC<Props> = ({ mainCategories }) => {
  return (
    <>
      <Subscription />
      <footer className="footer">
        <div className="footer__brand-info">
          <Logo className="footer__logo" />
          <div className="footer__social">
            <h4>Follow us in socials</h4>
            {SOCIAL_MEDIA.map(({ link, icon }, index) => (
              <a href={link} key={index}>
                {icon}
              </a>
            ))}
          </div>
          <div className="footer__legal">
            ©Copyright: 2020 Protect & Serve Products LTD.
            <br /> All Rights Reserved.
          </div>
        </div>
        <div className="footer__navigations">
          <div className="footer__navigation footer__navigation--contact-us">
            <h5>Contact us</h5>
            <ul>
              <li>
                Nibh praesent tristique
                <br />
                Volutpat lacus laoreetet
              </li>
              <li>
                General Enquiries:
                <br />
                +44 (0)1525 713 532
              </li>
              <li>
                Printing Enquiries:
                <br />
                +44 (0)1835 726 016
              </li>
            </ul>
          </div>
          <div className="footer__navigation">
            <h5>Category</h5>
            <ul>
              {mainCategories.map(category => (
                <li key={category.id}>
                  <Link to={generateCategoryUrl(category.slug, category.id)}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__navigation">
            <h5>Company</h5>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Delivery Charges</a>
            </li>
            <li>
              <a href="/">Vacancies</a>
            </li>
            <li>
              <a href="/">FAQs </a>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <a href="/">Our Services</a>
            </li>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
