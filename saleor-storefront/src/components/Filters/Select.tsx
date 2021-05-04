import React from "react";
import ReactSelect from "react-select";
import "./scss/select.scss";

export type Option = {
  label: string;
  value: any;
};

type Props = {
  title: string;
  options: Option[];
  onChange: (value) => void;
};

const Select: React.FC<Props> = ({ title, options, onChange }) => {
  return (
    <div className="filter-select">
      <h5 className="filter-select__title">{title}</h5>
      <ReactSelect
        className="filter-select__select"
        classNamePrefix="filter-select"
        options={options}
        onChange={onChange}
      />
    </div>
  );
};

export default Select;
