import { Formik, Form } from "formik";
import { useHistory } from "react-router";
import { FormField } from "../FormField/FormField";
import { defaultValues, validationSchema } from "./formikConfig";

const Login = () => {
  const history = useHistory();
  function login({ username, password }, { setSubmitting }) {
    console.log("Logging in: ", username, password);
    console.log(setSubmitting);
  }

  return (
    <div className="auth-form">
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

            <button disabled={isSubmitting || !isValid} type="submit">
              Login
            </button>

            <div className="auth-link-conatiner">
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
    </div>
  );
};

export default Login;
