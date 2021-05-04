import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import "./scss/index.scss";
import "./scss/checkout-details-form.scss";

import { Input } from ".";
import { Button, Switch } from "..";
import Facebook from "../../images/facebook-white.svg";
import { useSignIn } from "@temp/@sdk/react";
import { maybe } from "@temp/@next/utils/misc";

type Props = {};

const CheckoutDetailsForm: React.FC<Props> = () => {
  // const [signIn, { loading, error }] = useSignIn();
  const [signIn, { error }] = useSignIn();

  const authErrors = maybe(() => error.extraInfo.userInputErrors, []);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={values => {
        const errors: {
          email?: string;
          password?: string;
        } = {};

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
        const hide = () => {};
        if (authenticated && hide) {
          hide();
        }
      }}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <form
          className="auth-card__form checkout-details-form"
          onSubmit={handleSubmit}
        >
          {authErrors[0]?.message}
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            variant="border-bottom"
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
            variant="border-bottom"
          />
          <div className="auth-card__form__actions">
            <div className="reset-my-password">Reset my password</div>
            <div>
              Stay logged in <Switch />
            </div>
          </div>
          <div className="auth-card__buttons">
            <Button type="submit" color="black">
              Sign In
            </Button>
            <div className="horizontal-text-line">
              <div></div>
              Or, if you prefer
              <div></div>
            </div>
            <Button type="button" color="blue" icon={<Facebook />}>
              Sign in with facebook
            </Button>
            <Link to="/checkout/delivery">
              <Button type="button" color="yellow">
                Continue as guest
              </Button>
            </Link>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default CheckoutDetailsForm;
