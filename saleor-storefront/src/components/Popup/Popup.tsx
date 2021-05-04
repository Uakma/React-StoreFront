import React, { useContext } from "react";
import "./scss/index.scss";

import { popupManagerContext } from "../../PopupManager";
import CloseButton from "./CloseButton";
import { useClickedOutside } from "../../hooks";

type Props = {
  opened: boolean;
  handleClose?: () => void;
};

const Popup: React.FC<Props> = ({ children, opened, handleClose }) => {
  const context = useContext(popupManagerContext);
  const { clickedOutside, setElementRef } = useClickedOutside();

  if (!opened) {
    return null;
  }

  if (clickedOutside) {
    context.hide();
  }

  return (
    <div className="popup-wrapper">
      <div className="popup" ref={setElementRef()}>
        <div className="popup__close">
          <CloseButton handleClick={context.hide} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Popup;
