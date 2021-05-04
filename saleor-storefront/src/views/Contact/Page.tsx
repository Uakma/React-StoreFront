import React from "react";
import "./scss/index.scss";

import { PageHero } from "../../components";

import map from "../../images/map.png";
import Location from "../../images/location.svg";
import Email from "../../images/email.svg";
import Phone from "../../images/phone.svg";
import Time from "../../images/time.svg";
import Facebook from "../../images/facebook.svg";
import Linkedin from "../../images/linkedin.svg";
import Twitter from "../../images/twitter.svg";

const Page: React.FC = () => {
  return (
    <>
      <PageHero
        title="Contact us"
        breadcrumbs={[{ text: "Contact Us", link: "/contact" }]}
      />
      <div className="contact-page">
        <div
          className="contact-page__map"
          style={{ background: `url(${map})` }}
        ></div>
        <div className="contact-box">
          <div className="contact-box__social">
            <h5 className="contact-box__social__title">Find us on:</h5>
            <div className="contact-box__social__items">
              <div className="contact-box__social__item">
                <Facebook />
              </div>
              <div className="contact-box__social__item">
                <Linkedin />
              </div>
              <div className="contact-box__social__item">
                <Twitter />
              </div>
            </div>
          </div>
          <h2 className="contact-box__title">Contact with us</h2>
          <div className="contact-box__subtitle">
            Use this form to address your concerns regarding an existing order,
            and get a fast response.
          </div>
          <div className="contact-box__info">
            <div className="contact-box__info__item">
              <div className="circle-svg">
                <Location />
              </div>
              West Sussex BN14 8NP UK
            </div>
            <div className="contact-box__info__item">
              <div className="circle-svg circle-svg--highlighted">
                <Email />
              </div>
              Info@gift.co.uk
            </div>
            <div className="contact-box__info__item">
              <div className="circle-svg">
                <Phone />
              </div>
              +44 (0)1525 713 532
            </div>
            <div className="contact-box__info__item">
              <div className="circle-svg">
                <Time />
              </div>
              8.30am – 5.00pm Monday – Friday
            </div>
          </div>
          {/* <ContactForm /> */}
        </div>
      </div>
    </>
  );
};

export default Page;
