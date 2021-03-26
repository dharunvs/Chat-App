import { Formik, Form } from "formik";
import { useHistory } from "react-router";
import { FormField } from "../FormField/FormField";
import { defaultValues, validationSchema } from "./formikConfig";
import "../../styles/authForm.css";

const Login = () => {
  const history = useHistory();
  function login({ username, password }, { setSubmitting }) {
    console.log("Logging in: ", username, password);
    console.log(setSubmitting);
  }

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <span id="css-reflection"></span>
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

                <div className="auth-link-conatiner">
                  Don't have an account?{" "}
                  <a
                    className="auth-link"
                    onClick={() => {
                      history.push("signup");
                    }}
                  >
                    Signup
                  </a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
