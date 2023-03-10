import React from "react";
import { Form, Formik } from "formik";
import MyTextField from "../../components/MyTextField/MyTextField";
import * as Yup from "yup";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Contact = () => {
  return (
    <div>
      <h1>My Form</h1>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Formik
        initialValues={{
          email: "",
          firstName: "red",
          lastName: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 3000);
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <MyTextField name="firstName" type="text" label="First Name" />
              <MyTextField name="lastName" type="text" label="Last Name" />
              <MyTextField name="email" type="email" label="Email" />
              <Button type="submit" loading={isSubmitting}>
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Contact;
