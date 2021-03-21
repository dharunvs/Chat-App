import { Formik } from "formik";
import validationSchema from "./formikConfig";
import defaultValues from "./formikConfig";

const Signup = () => {
  return (
    <div className="auth-form">
      <h1>Sign up</h1>
      <Formik
        onSubmit={() => console.log("Submitting")}
        validateOnMount={true}
        initialValues={defaultValues}
        validationSchema={validationSchema}
      ></Formik>
    </div>
  );
};

export default Signup;
