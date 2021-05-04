import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Formik, FormikErrors } from "formik";
import ReactSelect from "react-select";
import { useMediaQuery } from "react-responsive";
import "./scss/delivery-form.scss";

import { Input } from ".";
import {
  useCheckout,
  useUserDetails,
  // useAccountUpdate,
} from "@temp/@sdk/react";
import { Button, Loader } from "..";
import { Grid, Row, Col } from "../Grid";
import { ShopContext } from "../ShopProvider/context";
import { Option } from "../Filters/Select";

export interface IAddress {
  id?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  streetAddress1?: string;
  streetAddress2?: string;
  city?: string;
  postalCode?: string;
  countryArea?: string;
  phone?: string;
  country?: {
    code?: string;
    country?: string;
  };
}

const DeliveryForm: React.FC = () => {
  const { data: user, loading } = useUserDetails();
  // const [setAccountUpdate, { data, error }] = useAccountUpdate();
  // const { setShippingAddress, setShippingMethod, checkout } = useCheckout();
  const { setShippingAddress } = useCheckout();
  const { countries } = useContext(ShopContext);
  const isTablet = useMediaQuery({ query: "(min-width: 900px)" });
  const history = useHistory();

  if (loading || !countries.length) {
    return <Loader />;
  }

  const handleReturnClick = () => {};

  const responsiveCol = isTablet ? 6 : 12;

  return (
    <Formik
      initialValues={{
        email: user ? user.email : "",
        firstName: user ? user.firstName : "",
        lastName: user ? user.lastName : "",
        phone: user ? user.defaultShippingAddress.phone : "",
        address: user ? user.defaultShippingAddress.streetAddress1 : "",
        postalCode: user ? user.defaultShippingAddress.postalCode : "",
        city: user ? user.defaultShippingAddress.city : "",
        country: {
          code: "",
          country: "",
        },
        furtherInfo: "",
      }}
      validate={values => {
        const errors: FormikErrors<typeof values> = {};

        if (user && !values.email) {
          errors.email = "Required";
        }
        if (!values.firstName) {
          errors.firstName = "Required";
        }
        if (!values.lastName) {
          errors.lastName = "Required";
        }
        if (!values.phone) {
          errors.phone = "Required";
        }
        if (!values.address) {
          errors.address = "Required";
        }
        if (!values.postalCode) {
          errors.postalCode = "Required";
        }
        if (!values.city) {
          errors.city = "Required";
        }
        if (!values.country.code || !values.country.country) {
          errors.country.code = "Required";
          errors.country.country = "Required";
        }

        console.log(errors);

        return errors;
      }}
      onSubmit={async values => {
        // const { data } = await setAccountUpdate({
        //   input: { firstName: values.firstName, lastName: values.lastName },
        // });
        const { dataError } = await setShippingAddress(
          {
            firstName: values.firstName,
            lastName: values.lastName,
            streetAddress1: values.address,
            city: values.city,
            country: values.country,
            postalCode: values.postalCode,
            phone: values.phone,
          },
          user ? user.email : values.email
        );
        console.log({ dataError });

        if (!dataError) {
          history.push("/checkout/payment");
        }
      }}
      validateOnChange
    >
      {({ values, errors, setFieldValue, handleChange, handleSubmit }) => (
        <form className="delivery-form" onSubmit={handleSubmit}>
          <div className="delivery-form__personal-details">
            <h3 className="delivery-form__title">Personal details:</h3>
            <Grid className="delivery-form__pesonal-details__inputs">
              <Row>
                <Col col={responsiveCol}>
                  <Input
                    type="text"
                    placeholder="Name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    error={!!errors.firstName}
                  />
                </Col>
                <Col col={responsiveCol}>
                  <Input
                    type="text"
                    placeholder="Surname"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    error={!!errors.lastName}
                  />
                </Col>
              </Row>
              <Row>
                <Col col={responsiveCol}>
                  <Input
                    type="tel"
                    placeholder="Mobile number"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    error={!!errors.phone}
                  />
                </Col>
                <Col col={responsiveCol}>
                  {!!user || (
                    <Input
                      type="email"
                      placeholder="E-mail"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      error={!!errors.email}
                    />
                  )}
                </Col>
              </Row>
            </Grid>
          </div>

          <div className="delivery-form__delivery-details">
            <h3 className="delivery-form__title">Delivery details:</h3>
            <Grid className="delivery-form__delivery-details__inputs">
              <Row>
                <Col col={responsiveCol}>
                  <Input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    error={!!errors.address}
                  />
                </Col>
                <Col col={responsiveCol}>
                  {/* <Input
                    type="text"
                    name="country"
                    label="Market"
                    labelVariant="accent"
                    value={values.country}
                    onChange={handleChange}
                  /> */}
                  <ReactSelect
                    name="country"
                    options={countries.map(country => ({
                      label: country.country,
                      value: country,
                    }))}
                    onChange={(option: Option) =>
                      setFieldValue("country", option.value, true)
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col col={responsiveCol}>
                  <Row>
                    <Col col={4}>
                      <Input
                        type="text"
                        placeholder="Zip/Postcode"
                        name="postalCode"
                        value={values.postalCode}
                        onChange={handleChange}
                        error={!!errors.postalCode}
                      />
                    </Col>
                    <Col col={8}>
                      <Input
                        type="text"
                        placeholder="Town"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        error={!!errors.city}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col col={responsiveCol}>
                  <Input
                    type="text"
                    placeholder="Further informations (Optional)"
                    name="furtherInfo"
                    value={values.furtherInfo}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col col={responsiveCol}>
                  <Button
                    type="button"
                    variant="outlined"
                    color="black"
                    onClick={handleReturnClick}
                  >
                    Return
                  </Button>
                </Col>
                <Col col={responsiveCol}>
                  <Button type="submit" color="black">
                    Continue
                  </Button>
                </Col>
              </Row>
            </Grid>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default DeliveryForm;
