import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import "./scss/index.scss";

import { TypedAccountRegisterMutation } from "./mutations";
import { Input } from ".";
import { Button, Switch } from "..";
import { maybe } from "@temp/@next/utils/misc";

const CreateAccountForm: React.FC = () => {
  return (
    <TypedAccountRegisterMutation onCompleted={data => console.log(data)}>
      {(registerCustomer, { loading, data }) => {
        return (
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={values => {
              const errors: { email?: string; password?: string } = {};

              if (!values.email) {
                errors.email = "Email is required";
              }
              if (!values.password) {
                errors.password = "Password is required";
              }

              return errors;
            }}
            onSubmit={values => {
              registerCustomer({
                variables: { ...values, redirectUrl: "http://localhost:3000/" },
              });
            }}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <form className="auth-card__form" onSubmit={handleSubmit}>
                <div className="erros">
                  {maybe(() => data.accountRegister.errors.toString())}
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
                  autoComplete="new-password"
                  value={values.password}
                  onChange={handleChange}
                  variant="border-left"
                  error={!!errors.email}
                />
                <div className="auth-card__form__actions">
                  <div>
                    Stay logged in <Switch />
                  </div>
                  <div className="reset-my-password">Reset my password</div>
                </div>
                <div className="auth-card__consent">
                  <label>
                    <input type="checkbox" />
                    <span className="auth-card__consent__checkbox"></span>
                  </label>
                  <div className="auth-card__consent__text">
                    <p>
                      Yes, send me FREE email updates from USC about products,
                      services, promotions and offers inline with our &nbsp;
                      <Link to="privacy-policy">privacy policy</Link>.
                    </p>
                    <p>
                      By clicking register you are accepting our &nbsp;
                      <Link to="/">Terms & Conditions</Link> and &nbsp;
                      <Link to="">Security, Privacy & Cookie Policy</Link>.
                    </p>
                  </div>
                </div>
                <div className="auth-card__buttons">
                  <Button type="submit" color="yellow">
                    Create Account
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        );
      }}
    </TypedAccountRegisterMutation>
  );
};

export default CreateAccountForm;
