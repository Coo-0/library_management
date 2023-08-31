// src/components/SignupForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSubmit = (values, actions) => {
    // Submit form logic
    console.log('Form values:', values);
    actions.setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>
        <div>
          <label>Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" className="error" />
        </div>
        <div>
          <label>Confirm Password</label>
          <Field type="password" name="confirmPassword" />
          <ErrorMessage name="confirmPassword" component="div" className="error" />
        </div>
        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};

export default SignupForm;
