import React from "react";
import classnames from "classnames";
import "./scss/index.scss";

type ButtonType = "submit" | "reset" | "button";
export type ButtonProps = {
  color?: "yellow" | "blue" | "white" | "black";
  variant?: "outlined" | "contained";
  icon?: React.ReactElement;
  fixed?: boolean;
  secondary?: boolean;
} & React.HTMLProps<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  className = "",
  children,
  type,
  color,
  variant,
  icon,
  fixed,
  ...otherProps
}) => (
  <button
    type={type as ButtonType}
    className={classnames("button", {
      [`button--${color || "yellow"}`]: true,
      "button--fixed": fixed,
      [`button--outlined`]: variant === "outlined",
    })}
    {...otherProps}
  >
    <div>
      {icon && <span className="button__icon">{icon}</span>}
      {children}
    </div>
  </button>
);

export default Button;
