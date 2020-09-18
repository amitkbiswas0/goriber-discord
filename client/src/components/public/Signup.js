import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

// components
import Navbar from "./Navbar";
// services
import { signupAuth } from "../../services/authentication";
// images
import signup from "../../static/images/signup.jpg";

// outside main function to prevent re-rendering
const initialValues = {
  name: "",
  email: "",
  password: "",
  repassword: "",
};
const validationSchema = Yup.object({
  name: Yup.string("Name Can't be just numbers!").required("REQUIRED"),
  email: Yup.string().email("Invalid Email address").required("REQUIRED"),
  password: Yup.string()
    .min(8, "Password must be at-least 8 characters long!")
    .required("REQUIRED"),
  repassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match!")
    .required("REQUIRED"),
});

function Signup() {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState(null);

  const submitHandler = async (values, submitProps) => {
    try {
      await signupAuth(values);
      submitProps.resetForm();
      history.push("/login");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <div className="h-screen ff-open-sans bg-white">
        <section className="w-full flex flex-wrap">
          {/* Login Section */}
          <section className="w-full md:w-1/2 flex flex-col">
            <Navbar />
            <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={submitHandler}
              >
                {(formik) => {
                  return (
                    <Form
                      className="flex flex-col pt-3 md:pt-8"
                      onChange={() => setErrorMessage(null)}
                    >
                      {errorMessage ? (
                        <p className="w-full px-2 py-4 mb-4 bg-red-500 text-center text-lg font-normal text-white">
                          {errorMessage}
                        </p>
                      ) : null}
                      <div className="flex flex-col pt-4">
                        <label htmlFor="name" className="text-lg">
                          Name
                        </label>
                        <Field
                          type="name"
                          id="name"
                          name="name"
                          placeholder="Full Name"
                          className="input"
                        />
                        <ErrorMessage name="name">
                          {(error) => <p className="error-msg">{error}</p>}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-col pt-4">
                        <label htmlFor="email" className="text-lg">
                          Email
                        </label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          placeholder="example@email.com"
                          className="input"
                        />
                        <ErrorMessage name="email">
                          {(error) => <p className="error-msg">{error}</p>}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-col pt-4">
                        <label htmlFor="password" className="text-lg">
                          Password
                        </label>
                        <Field
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Password"
                          className="input"
                        />
                        <ErrorMessage name="password">
                          {(error) => <p className="error-msg">{error}</p>}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-col pt-4">
                        <label htmlFor="repassword" className="text-lg">
                          Confirm Password
                        </label>
                        <Field
                          type="password"
                          id="repassword"
                          name="repassword"
                          placeholder="Confirm Password"
                          className="input"
                        />
                        <ErrorMessage name="repassword">
                          {(error) => <p className="error-msg">{error}</p>}
                        </ErrorMessage>
                      </div>
                      <button
                        type="submit"
                        disabled={!formik.isValid || formik.isSubmitting}
                        className="btn btn-transparent mt-8"
                      >
                        Sign Up
                      </button>
                    </Form>
                  );
                }}
              </Formik>
              <div className="text-center pt-12 pb-12">
                <p>
                  Already an user?{" "}
                  <Link to="/login" className="underline font-semibold">
                    Log in here.
                  </Link>
                </p>
              </div>
            </div>
          </section>
          {/* Image Section */}
          <section className="w-1/2 h-auto shadow-2xl">
            <img
              className="object-cover w-full h-screen hidden md:block"
              src={signup}
              alt="right-side cover"
            />
          </section>
        </section>
      </div>
    </div>
  );
}

export default Signup;
