import React, { ChangeEvent } from "react";
import "./scss/index.scss";

type Props = {
  value?: any;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  rounded?: boolean;
};

const Checkbox: React.FC<Props> = ({ value, checked, onChange, rounded }) => {
  return (
    <label className="checkbox-wrapper pointer">
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className="checkbox"></span>
    </label>
  );
};

export default Checkbox;
