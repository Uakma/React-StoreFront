import React from "react";

import homepageHero from "../../images/homepage-hero.png";
import image2 from "../../images/hero-part-2.png";
import BestSellersSvg from "../../images/Best Sellers.svg";
import ArrowRight from "../../images/arrow-right.svg";
import { useMediaQuery } from "react-responsive";
import { ArrowButton } from "../../components";

const Hero: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 1500 });
  // const isTablet = useMediaQuery({ minWidth: 600 });

  return (
    <div className="hero">
      <div
        className="hero__part-1"
        style={{ background: `url(${homepageHero}), #000` }}
      >
        <div className="hero__part-1__text">
          <div className="hero__part-1__heading">
            Natural <span>woods</span> souvenirs
          </div>
          <p>
            Enjoy our new collection of natural woods souvenirs for all
            occasions. Enjoy our new collection of natural woods souvenirs for
            all occasions.
          </p>
          <div className="hero__part-1__buttons">
            <button className="hero__button">
              CATALOG <ArrowRight />
            </button>
          </div>
        </div>
        {isDesktop && <div className="hero__decor"></div>}
      </div>
      {isDesktop && (
        <div
          className="hero__part-2"
          style={{ backgroundImage: `url(${image2})` }}
        >
          <BestSellersSvg />
          <ArrowButton>VIEW CATALOG</ArrowButton>
        </div>
      )}
    </div>
  );
};

export default Hero;
