import { useState } from "react";
import { useHistory } from "react-router";
import fb from "../../service/firebase";
import { Formik, Form } from "formik";
import { FormField, ServerError } from "../FormField/FormField";
import { defaultValues, validationSchema } from "./formikConfig";
import "../../styles/authForm.css";

function Login() {
  const history = useHistory();

  const [serverError, setServerError] = useState("");

  function login({ username, password }, { setSubmitting }) {
    fb.auth
      .signInWithEmailAndPassword(username, password)
      .then((res) => {
        if (!res.user) {
          setServerError("Trouble logging in.");
        }
      })
      .catch((err) => {
        if (err.code === "auth/wrong-password") {
          setServerError("Invalid credentials");
        } else if (err.code === "auth/user-not-found") {
          setServerError("Email not registered");
        } else {
          setServerError("Something went wrong");
        }
      });
  }

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <span className="css-reflection"></span>
        <div className="content">
          <h1>Log in</h1>
          <Formik
            onSubmit={login}
            validateOnMount={true}
            initialValues={defaultValues}
            validationSchema={validationSchema}
          >
            {({ isValid, isSubmitting }) => (
              <Form>
                <FormField label="Username" name="username" />
                <FormField label="Password" name="password" type="password" />

                <button
                  className="auth-button"
                  disabled={isSubmitting || !isValid}
                  type="submit"
                >
                  Login
                </button>

                <div className="auth-link-container">
                  Don't have an account?{" "}
                  <span
                    className="auth-link"
                    onClick={() => {
                      history.push("signup");
                    }}
                  >
                    Signup
                  </span>
                </div>
              </Form>
            )}
          </Formik>
          <ServerError serverError={serverError} />
        </div>
      </div>
    </div>
  );
}

export default Login;
