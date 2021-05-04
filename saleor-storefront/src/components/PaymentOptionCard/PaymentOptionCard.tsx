import React, { ChangeEvent } from "react";
import "./scss/index.scss";

import { Checkbox } from "..";

type Props = {
  title: string;
  icon: React.ReactNode;
  value: number;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const PaymentOptionCard: React.FC<Props> = ({
  title,
  icon,
  value,
  checked,
  onChange,
}) => {
  return (
    <div className="payment__option">
      <div>
        <Checkbox value={value} checked={checked} onChange={onChange} rounded />
      </div>
      <div className="payment__option__title">{title}</div>
      <div className="payment__option__icon">{icon}</div>
    </div>
  );
};

export default PaymentOptionCard;
