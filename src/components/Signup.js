import React from "react";
import * as yup from "yup";
import "./signupForm.css";
import { Formik, useFormik } from "formik";

const Signup = () => {
  // Step 2: Set initials variables

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },

    validationSchema: yup.object({
      name: yup
        .string()
        .required("Name is required")
        .min(2, "Name must be at least 2 charecter"),
      email: yup.string().email("Invalid email").required("Email is required"),
      password: yup
        .string()
        .min(4, "Password must be at least 4 characters")
        .required("Password is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  const nameError = formik.touched.name && formik.errors.name && (
    <span style={{ color: "red" }}>{formik.errors.name}</span>
  );
  const emailError = formik.touched.email && formik.errors.email && (
    <span style={{ color: "red" }}>{formik.errors.email}</span>
  );
  const passwordError = formik.touched.password && formik.errors.password && (
    <span style={{ color: "red" }}>{formik.errors.password}</span>
  );

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <h1>User Signup Form</h1>
        <div className="input-container">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="text-input"
          />
          <br />
          {nameError}
        </div>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="text-input"
          />
          <br />
          {emailError}
        </div>

        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="text-input"
          />
          <br />
          {passwordError}
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
