import React, { useState } from "react";
import classnames from "classnames";
import "./scss/input.scss";

import PasswordEye from "../../../images/password-eye.svg";

type Props = {
  type: "email" | "password" | "text" | "tel";
  name: string;
  autoComplete?: string;
  placeholder?: string;
  label?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
  variant?: "border-left" | "border-bottom";
  labelVariant?: "accent";
  withPasswordEye?: boolean;
  error?: boolean;
};

const Input: React.FC<Props> = ({
  type,
  name,
  autoComplete,
  placeholder,
  label,
  value,
  onChange,
  variant,
  labelVariant,
  error,
  withPasswordEye,
}) => {
  const [inputType, setInputType] = useState("password");

  const input = (
    <div
      className={classnames("input__input-wrapper", {
        "input__input-wrapper--with-password-eye": withPasswordEye,
      })}
    >
      <input
        type={withPasswordEye ? inputType : type}
        name={name}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {withPasswordEye && (
        <PasswordEye
          onClick={() =>
            setInputType(inputType === "password" ? "text" : "password")
          }
        />
      )}
    </div>
  );

  return (
    <div
      className={classnames("input", {
        [`input--${variant}`]: !!variant,
        "input--error": error,
      })}
    >
      {label ? (
        <label>
          <div
            className={classnames("input__label-text", {
              [`input__label-text--${labelVariant}`]: !!labelVariant,
            })}
          >
            {label}
          </div>
          {input}
        </label>
      ) : (
        input
      )}
    </div>
  );
};

export default Input;
