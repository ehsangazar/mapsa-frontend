import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import fetchHandler from "../../utils/fetchHandler";

const LoginPage = () => {
  const handleLogin = async ({ username, password }) => {
    const response = await fetchHandler("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    document.cookie = `token=${response.token}`;
    document.cookie = `id=${response.id}`;

    localStorage.setItem("token", response.token);
    localStorage.setItem("id", response.id);
  };

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {}}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleLogin({
              username: values.username,
              password: values.password,
            });
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
