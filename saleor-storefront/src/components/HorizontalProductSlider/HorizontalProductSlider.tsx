import React, { useState } from "react";
import "./scss/index.scss";

type Props = {
  title: string;
  children: ({ value, setValue }) => React.ReactNode;
};

const HorizontalProductSlider: React.FC<Props> = ({ title, children }) => {
  const [value, setValue] = useState(0);

  return (
    <div className="hp-slider">
      <div className="hp-slider__header">
        <h3 className="hp-slider__title">{title}</h3>
        <div className="hp-slider__slider-bar-container">
          <input
            className="hp-slider__slider-bar"
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={e => setValue(+e.target.value)}
          />
        </div>
      </div>
      {children({ value, setValue })}
    </div>
  );
};

export default HorizontalProductSlider;
