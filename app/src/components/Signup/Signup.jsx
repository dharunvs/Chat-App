// import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/authForm.css";
import { Formik, Form } from "formik";
import { validationSchema, defaultValues } from "./formikConfig";
import { FormField } from "../FormField/FormField";

function Signup() {
  const history = useHistory();

  function signup({ email, username, password }, { setSubmitting }) {
    console.log("Signing up: ", email, username, password);
    console.log(setSubmitting);
  }

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <span className="css-reflection"></span>
        <div className="content">
          <h1>Sign up</h1>
          <Formik
            onSubmit={signup}
            validateOnMount={true}
            initialValues={defaultValues}
            validationSchema={validationSchema}
          >
            {({ isValid, isSubmitting }) => (
              <Form>
                <FormField label="Email" name="username" />
                <FormField label="Email" name="email" />
                <FormField label="Password" name="password" type="password" />
                <FormField
                  label="Confirm Password"
                  name="verifyPassword"
                  type="password"
                />

                <button
                  className="auth-button"
                  disabled={isSubmitting || !isValid}
                  type="submit"
                >
                  Sign up
                </button>

                <div className="auth-link-container">
                  Already have an account?{" "}
                  <span
                    className="auth-link"
                    onClick={() => {
                      history.push("login");
                    }}
                  >
                    Login
                  </span>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Signup;
