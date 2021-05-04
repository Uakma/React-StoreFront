import React from "react";
import "./scss/index.scss";

import Svg from "../../images/subscription-svg.svg";

const Subscription: React.FC = () => {
  return (
    <section className="subscription">
      <div className="subscription__background"></div>
      <form className="subscription__form">
        <Svg className="subscription__svg" />
        <label htmlFor="" className="subscription__label">
          <h2>Subscribe now</h2>
          <p>Register to receive personalized offers</p>
        </label>
        <div className="subscription__form__flex">
          <input
            className="subscription__input"
            type="text"
            placeholder="Email..."
          />
          <button className="subscription__submit" type="submit">
            SUBSCRIBE
          </button>
        </div>
      </form>
    </section>
  );
};

export default Subscription;
