import React, { isValidElement } from "react";
import "./scss/index.scss";

import { Step } from "@temp/core/config";
import CheckoutStep from "./CheckoutStep";
import { CheckoutStep as CheckoutStepType } from "@temp/views/Checkout/constants";

export type CheckoutProgressBarProps = {
  steps: CheckoutStepType[];
  activeStep: number;
};

type Props = {
  mobile?: boolean;
  children: React.ReactElement;
} & CheckoutProgressBarProps;

const CheckoutProgressBar: React.FC<Props> = ({
  steps,
  activeStep,
  children,
  mobile,
}) => {
  const content: (Step | React.ReactNode)[] = [];

  if (!steps[activeStep].hasProgressBar) {
    return children;
  }

  for (let step of steps) {
    content.push(step);
    if (step.index === activeStep) {
      content.push(children);
    }
  }

  return (
    <div className="checkout-progress-bar">
      {mobile ? (
        content.map(item => {
          if (isValidElement(item)) {
            return <span key="react-node">{item}</span>;
          } else if ((item as CheckoutStepType).hasProgressBar) {
            return (
              <CheckoutStep
                name={(item as Step).name}
                number={(item as Step).index + 1}
                link={(item as Step).link}
                active={(item as Step).index <= activeStep}
                mobile
                key={(item as Step).index}
              />
            );
          } else {
            return null;
          }
        })
      ) : (
        <>
          <div className="checkout-progress-bar__desktop-child">
            {steps.map(step => {
              if (!step.hasProgressBar) {
                return null;
              }

              return (
                <CheckoutStep
                  name={step.name}
                  number={step.index + 1}
                  link={step.link}
                  active={step.index <= activeStep}
                  key={step.index}
                />
              );
            })}
          </div>
          {children}
        </>
      )}
    </div>
  );
};

export default CheckoutProgressBar;
