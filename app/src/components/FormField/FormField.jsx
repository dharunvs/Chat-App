import { Field, ErrorMessage } from "formik";
import "../../styles/formField.css";

function FormField({ name, label, type = "text" }) {
  return (
    <label>
      {label}
      <Field className="form-field" type={type} name={name} />
      <div className="error-container">
        <ErrorMessage className="error" component="div" name={name} />
      </div>
    </label>
  );
}

export default FormField;
