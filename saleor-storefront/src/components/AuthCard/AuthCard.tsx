import React, { useContext } from "react";
import "./scss/index.scss";

import { popupManagerContext, AUTH_POPUPS } from "../../PopupManager";
import AuthForm from "./AuthForm";
import UserCardContent from "./UserCardContent";
import { Popup } from "..";
import { useUserDetails } from "@temp/@sdk/react";

const AuthCard: React.FC = () => {
  const context = useContext(popupManagerContext);
  const { data: user } = useUserDetails();

  let content: React.ReactElement;

  switch (context.openedPopup) {
    case AUTH_POPUPS.LOGIN:
    case AUTH_POPUPS.CREATE_ACCOUNT:
      content = <AuthForm type={context.openedPopup} show={context.show} />;
      break;
    default:
      content = <AuthForm type={AUTH_POPUPS.LOGIN} show={context.show} />;
  }

  if (user) {
    content = <UserCardContent user={user} />;
  }

  return (
    <Popup
      opened={context.openedPopup in AUTH_POPUPS}
      handleClose={context.hide}
    >
      {content}
    </Popup>
  );
};

export default AuthCard;
