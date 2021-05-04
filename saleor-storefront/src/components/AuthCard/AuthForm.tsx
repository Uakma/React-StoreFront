import React from "react";

import { LoginForm, RegisterForm } from "../Forms";
import { AUTH_POPUPS, PopupTypes } from "@temp/PopupManager";
import Arrow from "../../images/arrow-left-black.svg";

type Props = {
  type: typeof AUTH_POPUPS.LOGIN | typeof AUTH_POPUPS.CREATE_ACCOUNT;
  show: (type: PopupTypes) => void;
};

const AuthForm: React.FC<Props> = ({ type, show }) => {
  let handleBackButtonClick: () => void;
  let title: string;
  let form: React.ReactElement;

  if (type === AUTH_POPUPS.LOGIN) {
    handleBackButtonClick = () =>
      show(AUTH_POPUPS.CREATE_ACCOUNT as PopupTypes);
    title = "Log in";
    form = <LoginForm />;
  } else if (type === AUTH_POPUPS.CREATE_ACCOUNT) {
    handleBackButtonClick = () => show(AUTH_POPUPS.LOGIN as PopupTypes);
    title = "Create Account";
    form = <RegisterForm />;
  }

  return (
    <div className="auth-card">
      <div className="auth-card__heading">
        <div className="auth-card__back-button" onClick={handleBackButtonClick}>
          <Arrow />
        </div>
        <h3 className="auth-card__title">{title}</h3>
      </div>
      {form}
    </div>
  );
};

export default AuthForm;
