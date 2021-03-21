import * as yup from "yup";

export const defaultValues = {
  email: "",
  username: "",
  password: "",
  verifyPassword: "",
};

export const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  username: yup
    .string()
    .required("Required")
    .matches(/^\S*$/, "No Spaces")
    .min(4, "Must atleast be 4 characters"),
  password: yup
    .string()
    .required("Required")
    .min(8, "Must atleast be 8 characters"),
  verifyPassword: yup
    .string()
    .required("Required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
