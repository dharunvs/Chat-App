import * as yup from "yup";

export const defaultValues = {
  username: "",
  password: "",
};

export const validationSchema = yup.object().shape({
  email: yup.string().required("Required"),
  password: yup.string().required("Required"),
});
