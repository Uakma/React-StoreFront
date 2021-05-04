import React from "react";
import "./scss/index.scss";

import { MarginHelpers, getStylesFromMargins } from ".";

type Props = {
  className?: string;
} & MarginHelpers;

const Row: React.FC<Props> = ({ children, mt, mr, mb, ml }) => {
  return (
    <div className="row" style={getStylesFromMargins(mt, mr, mb, ml)}>
      {children}
    </div>
  );
};

export { Row };
