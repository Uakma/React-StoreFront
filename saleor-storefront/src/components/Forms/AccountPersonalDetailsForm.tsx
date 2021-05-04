import React from "react";
import { Formik } from "formik";
import { useMediaQuery } from "react-responsive";
import "./scss/account-personal-details-form.scss";

import { Input } from ".";
import { useUserDetails } from "@temp/@sdk/react";
import { Grid, Row, Col } from "../../components/Grid";
import { Loader, Button } from "../../components";

const AccountPersonalDetailsForm = () => {
  const { data: user, loading } = useUserDetails();
  const isTablet = useMediaQuery({ query: "(min-width: 900px)" });

  if (loading) {
    return <Loader />;
  }

  const responsiveCol = isTablet ? 6 : 12;

  return (
    <Formik
      initialValues={{
        company: false,
        gender: undefined,
        firstName: user ? user.firstName : "",
        lastName: user ? user.lastName : "",
        dateOfBirth: undefined,
        email: "",
        newPassword: "",
        password: "",
        phonePrefix: "",
        phone: "",
      }}
      validate={values => {}}
      onSubmit={values => {}}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <form className="account-personal-details-form" onSubmit={handleSubmit}>
          <h3 className="account-personal-details-form__title">
            Personal details:
          </h3>
          <Grid mt={100}>
            <Row>
              <Col col={responsiveCol}>Are you a company:</Col>
              <Col col={responsiveCol}>Woman | Men</Col>
            </Row>
            <Row mt={40}>
              <Col col={responsiveCol} pr={10}>
                <Input
                  type="text"
                  placeholder=""
                  label="Name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                />
              </Col>
              <Col col={responsiveCol}>
                <Input
                  type="text"
                  placeholder=""
                  label="Surname"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Grid>

          <Input
            type="email"
            placeholder=""
            label="E-mail address"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <Row>
            <Col col={responsiveCol}>
              <Button variant="outlined" color="black">
                Return
              </Button>
            </Col>
            <Col col={responsiveCol}>
              <Button color="black">Continue</Button>
            </Col>
          </Row>
        </form>
      )}
    </Formik>
  );
};

export default AccountPersonalDetailsForm;
