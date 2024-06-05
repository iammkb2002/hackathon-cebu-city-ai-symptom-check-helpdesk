// components/LoginForm.js
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { auth } from '../firebase';

const LoginForm = () => {
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required')
    }),
    onSubmit: async (values) => {
      setError('');
      try {
        await auth.signInWithEmailAndPassword(values.email, values.password);
      } catch (error) {
        setError({
          'auth/user-not-found': 'No user found with this email.',
          'auth/wrong-password': 'Incorrect password.',
          'auth/invalid-email': 'Invalid email address.',
          'auth/user-disabled': 'This account has been disabled.',
          'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
        }[error.code] || 'Failed to login. Please try again.');
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
      {error && <div>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
