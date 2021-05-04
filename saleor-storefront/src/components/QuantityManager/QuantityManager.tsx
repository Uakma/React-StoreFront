import React from "react";
import "./scss/index.scss";

type Props = {
  count: number;
  subtractHandler: () => void;
  addHandler: () => void;
  small?: boolean;
};

const QuantityManager: React.FC<Props> = ({
  count,
  subtractHandler,
  addHandler,
  small,
}) => {
  return (
    <div
      className={`quantity-manager ${small ? "quantity-manager--small" : ""}`}
    >
      <div className="quantity-manager__subtract" onClick={subtractHandler}>
        -
      </div>
      <div className="quantity-manager__count">{count}</div>
      <div className="quantity-manager__add" onClick={addHandler}>
        +
      </div>
    </div>
  );
};

export default QuantityManager;
