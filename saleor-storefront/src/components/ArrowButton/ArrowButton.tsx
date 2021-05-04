import React from "react";
import "./scss/index.scss";

import ArrowRightYellow from "../../images/arrow-right-yellow.svg";
import ArrowRightBlack from "../../images/arrow-right.svg";

type Props = {
  color?: "yellow";
  onClick?: () => void;
};

const ArrowButton: React.FC<Props> = ({ children, color, onClick }) => {
  return (
    <button className={`arrow-button arrow-button--${color}`} onClick={onClick}>
      {children}
      {color === "yellow" ? <ArrowRightBlack /> : <ArrowRightYellow />}
    </button>
  );
};

export default ArrowButton;
