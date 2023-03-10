import React, { useState } from "react";

import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import CheckBox from "../../components/CheckBox/CheckBox";
import Alert from "../../components/Alert/Alert";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: {
      value: "",
      validation: {
        required: true,
        minLength: 3,
      },
      invalidMessage: "",
      valid: false,
    },
    email: {
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      invalidMessage: "",
      valid: false,
    },
    password: {
      value: "",
      validation: {
        required: true,
        minLength: 6,
      },
      invalidMessage: "",
      valid: false,
    },
    checkbox: {
      value: false,
      validation: {
        required: true,
      },
      invalidMessage: "",
      valid: false,
    },
  });
  const [responseFromApi, setResponseFromApi] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkValidity = (name, value) => {
    const rules = formData[name].validation;
    if (rules.minLength) {
      if (value.length < rules.minLength) {
        setFormData({
          ...formData,
          [name]: {
            ...formData[name],
            invalidMessage: `Please enter at least ${rules.minLength} characters`,
            valid: false,
          },
        });
      }
    }
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: {
        ...formData[name],
        value,
      },
    });
    checkValidity(name, value);
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const responseJSON = await fetch(
      "https://testapi.io/api/ehsangazar//register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: event.target[0].value,
          email: event.target[1].value,
          password: event.target[2].value,
          rememberMe: event.target[3].checked,
        }),
      }
    );
    const response = await responseJSON.json();
    if (response.status) {
      setResponseFromApi(response);
    }
    setLoading(false);
  };

  console.log("formData", formData);
  return (
    <div className="RegisterForm">
      <Heading as="h1">Register</Heading>
      <Form handleSubmit={handleSubmit}>
        <Input
          handleChange={handleChangeInput}
          isValid={formData.name.valid}
          invalidMessage={formData.name.invalidMessage}
          label="Name"
          id="name"
          name="name"
          type="name"
          placeholder="Name"
        />
        <Input
          handleChange={handleChangeInput}
          isValid={formData.email.valid}
          invalidMessage={formData.email.invalidMessage}
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
        />
        <Input
          handleChange={handleChangeInput}
          isValid={formData.password.valid}
          invalidMessage={formData.password.invalidMessage}
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
        <CheckBox
          handleChange={handleChangeInput}
          isValid={formData.checkbox.valid}
          invalidMessage={formData.checkbox.invalidMessage}
        >
          Remember ME
        </CheckBox>
        <Button type="click" id="submit" loading={loading}>
          Submit
        </Button>
        {responseFromApi && <Alert>{responseFromApi.message}</Alert>}
      </Form>
    </div>
  );
}

export default RegisterForm;
