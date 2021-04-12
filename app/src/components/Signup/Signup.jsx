import { useState } from "react";
import { useHistory } from "react-router";
import fb from "../../service/firebase";
import { Formik, Form } from "formik";
import { FormField, ServerError } from "../FormField/FormField";
import { defaultValues, validationSchema } from "./formikConfig";
import "../../styles/authForm.css";
import { createUser1 } from "../../api/createUser";

function Signup() {
  const history = useHistory();
  const [serverError, setServerError] = useState("");

  function signup({ email, username, password }, { setSubmitting }) {
    fb.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res?.user?.uid) {
          fetch("/api/createUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userName: username,
              userId: res.user.uid,
            }),
          });

          // () => {
          //   fb.firestore.collection("chatUsers").doc(res.user.uid).set({
          //     userName: username,
          //     avatar: "",
          //   });
          // };

          createUser1(username, res.user.uid).then(() => {
            fb.firestore.collection("chatUsers").doc(res.user.uid).set({
              userName: username,
              avatar: "",
            });
          });
        } else {
          setServerError("Trouble signing up. Try again");
        }
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          setServerError("Email already exists");
        } else {
          setServerError("Trouble signing up. Try again");
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <span className="css-reflection"></span>
        <div className="content">
          <h1>Sign up</h1>
          <Formik
            onSubmit={signup}
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

                <button
                  className="auth-button"
                  disabled={isSubmitting || !isValid}
                  type="submit"
                >
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
                    Login
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

export default Signup;
