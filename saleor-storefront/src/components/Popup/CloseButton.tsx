import React from "react";
import "./scss/close-button.scss";

import Cross from "../../images/close-button.svg";

type Props = {
  handleClick: () => void;
};

const CloseButton: React.FC<Props> = ({ handleClick }) => {
  return (
    <button className="close-button" onClick={handleClick}>
      <Cross />
    </button>
  );
};

export default CloseButton;
