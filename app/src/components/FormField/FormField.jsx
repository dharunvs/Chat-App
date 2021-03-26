import { Field, ErrorMessage } from "formik";
import "../../styles/formField.css";

export const FormField = ({ name, label, type = "text" }) => (
  <label>
    {label}
    <Field className="form-field" type={type} name={name} />
    <div className="error-container">
      <ErrorMessage className="error" component="div" name={name} />
    </div>
  </label>
);
