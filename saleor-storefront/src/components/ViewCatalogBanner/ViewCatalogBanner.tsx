import React from "react";
import classnames from "classnames";
import "./scss/index.scss";

// import image from "../../images/catalog-banner-image.png";
import imageDesktop from "../../images/view-catalog-banner-desktop.png";
import imageTablet from "../../images/view-catalog-banner-tablet.png";
import ArrowRight from "../../images/arrow-right-yellow.svg";

type Props = {
  withText?: boolean;
  isDesktop?: boolean;
  isTablet?: boolean;
};

const ViewCatalogBanner: React.FC<Props> = ({
  withText,
  isTablet,
  isDesktop,
}) => {
  const button = (
    <button className="view-catalog-banner__button">
      <span className="view-catalog-banner__button__text">View catalog</span>
      <ArrowRight />
    </button>
  );

  return (
    <div
      className={classnames("view-catalog-banner", {
        "view-catalog-banner--tablet": isTablet,
        "view-catalog-banner--desktop": isDesktop,
        "view-catalog-banner--with-text": withText,
      })}
    >
      {withText ? (
        <div className="view-catalog-banner__border">
          <div className="view-catalog-banner__text">Best sellers</div>
          {button}
        </div>
      ) : (
        button
      )}
      <div
        className="view-catalog-banner__image"
        style={{
          backgroundImage: `url(${isDesktop ? imageDesktop : imageTablet})`,
        }}
      ></div>
    </div>
  );
};

export default ViewCatalogBanner;
