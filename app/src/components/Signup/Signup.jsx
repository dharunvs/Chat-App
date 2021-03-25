import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema, defaultValues } from "./formikConfig";

const Signup = () => {
  return (
    <div className="auth-form">
      <h1>Sign up</h1>
      <Formik
        onSubmit={() => console.log("Submitting")}
        validateOnMount={true}
        initialValues={defaultValues}
        validationSchema={validationSchema}
      >
        <Form>
          <label>
            Username <br />
            <Field type="text" name="username" />
            <ErrorMessage component="div" name="username" />
          </label>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
