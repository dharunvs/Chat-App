import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import { validationSchema, defaultValues } from "./formikConfig";
import { FormField } from "../FormField/FormField";

const Signup = () => {
  const history = useHistory();
  return (
    <div className="auth-form">
      <h1>Sign up</h1>
      <Formik
        onSubmit={() => console.log("Submitting")}
        validateOnMount={true}
        initialValues={defaultValues}
        validationSchema={validationSchema}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <FormField label="Username" name="username" />
            <FormField label="Email" name="email" />
            <FormField label="Password" name="password" type="password" />
            <FormField
              label="Confirm Password"
              name="verifyPassword"
              type="password"
            />

            <button disabled={isSubmitting || !isValid} type="submit">
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
                Sign in
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
