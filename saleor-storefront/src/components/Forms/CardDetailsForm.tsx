import React from "react";
import { Formik } from "formik";

import { Input } from ".";
import { useCheckout } from "@temp/@sdk/react";

type Props = {};

const CardDetailsForm: React.FC<Props> = () => {
  const { setBillingAddress } = useCheckout();

  return (
    <Formik
      initialValues={{
        name: "",
        cardNumber: "",
        expireMonth: "",
        expireYear: "",
        cvv: "",
      }}
      validate={values => {}}
      onSubmit={values => {
        setBillingAddress({});
      }}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="cardNumber"
            value={values.cardNumber}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="expireMonth"
            value={values.expireMonth}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="expireYear"
            value={values.expireYear}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="cvv"
            value={values.cvv}
            onChange={handleChange}
          />
        </form>
      )}
    </Formik>
  );
};

export default CardDetailsForm;
