import React from "react";
import classnames from "classnames";
import "./scss/index.scss";

import { PaddingHelpers, getStylesFromPaddings } from ".";

type Cols = 2 | 4 | 6 | 8 | 12;

type Props = {
  children?: React.ReactNode | string;
  className?: string;
  col?: Cols;
} & PaddingHelpers;

const Col = ({ children, className, col, pt, pr, pb, pl }: Props) => {
  return (
    <div
      className={classnames(className, {
        [`col-${col}`]: !!col,
      })}
      style={getStylesFromPaddings(pt, pr, pb, pl)}
    >
      {children}
    </div>
  );
};

export { Col };
