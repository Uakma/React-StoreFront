import React, { useContext } from "react";
import { Formik, FormikErrors } from "formik";
import "./scss/index.scss";

import { Input } from ".";
import { Button, Switch } from "..";
import Facebook from "../../images/facebook-white.svg";
import Google from "../../images/google-icon.svg";
import { useSignIn } from "@temp/@sdk/react";
import { maybe } from "@temp/@next/utils/misc";
import {
  popupManagerContext,
  AUTH_POPUPS,
  PopupTypes,
} from "@temp/PopupManager";

const LoginForm: React.FC = () => {
  const context = useContext(popupManagerContext);
  const [signIn, { error }] = useSignIn();

  const authErrors = maybe(() => error.extraInfo.userInputErrors, []);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={values => {
        // TODO
        const errors: FormikErrors<typeof values> = {};

        if (!values.email) {
          errors.email = "Email is required";
        }
        if (!values.password) {
          errors.password = "Password is required";
        }

        return errors;
      }}
      onSubmit={async ({ email, password }) => {
        const authenticated = await signIn({ email, password });
        if (authenticated) {
          context.hide();
        }
      }}
      validateOnChange={false}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <form className="auth-card__form" onSubmit={handleSubmit}>
          <div style={{ color: "red" }}>
            {authErrors && authErrors[0]?.message}
          </div>
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            variant="border-left"
            error={!!errors.email}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
            variant="border-left"
            error={!!errors.password}
            withPasswordEye
          />
          <div className="auth-card__form__actions">
            <div>
              Stay logged in <Switch />
            </div>
            <div className="reset-my-password">Reset my password</div>
          </div>
          <div className="auth-card__buttons">
            <Button type="submit" color="yellow">
              Login
            </Button>
            <Button type="button" color="blue" icon={<Facebook />}>
              Sign in with facebook
            </Button>
            <Button type="button" color="white" icon={<Google />}>
              Create Account
            </Button>
            <div className="auth-card__buttons__text">not registered yet?</div>
            <Button
              type="button"
              color="black"
              onClick={() =>
                context.show(AUTH_POPUPS.CREATE_ACCOUNT as PopupTypes)
              }
            >
              Create Account
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
