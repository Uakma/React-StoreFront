import React from "react";
import "./scss/index.scss";

import { MarginHelpers, getStylesFromMargins } from ".";

type Props = {
  className?: string;
} & MarginHelpers;

const Grid: React.FC<Props> = ({ children, className, mt, mr, mb, ml }) => {
  return (
    <div className={className} style={getStylesFromMargins(mt, mr, mb, ml)}>
      {children}
    </div>
  );
};

export { Grid };
