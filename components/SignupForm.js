// components/SignupForm.js
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { auth, firestore } from '../firebase';
import firebase from 'firebase/app'; // Import firebase for FieldValue

const SignupForm = () => {
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: { email: '', password: '', confirmPassword: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')
    }),
    onSubmit: async (values) => {
      setError('');
      try {
        const userCredential = await auth.createUserWithEmailAndPassword(values.email, values.password);
        const user = userCredential.user;

        // Set user document in Firestore
        await firestore.collection('users').doc(user.uid).set({
          email: user.email,
          role: 'user',  // Default role
          displayName: user.displayName || '', // Optional
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

      } catch (error) {
        setError({
          'auth/email-already-in-use': 'Email is already in use.',
          'auth/invalid-email': 'Invalid email address.',
          'auth/weak-password': 'Password is too weak. It must be at least 6 characters.'
        }[error.code] || 'Failed to sign up. Please try again.');
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
        value={formik.values.email}
      />
      {formik.errors.email && <div>{formik.errors.email}</div>}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password && <div>{formik.errors.password}</div>}
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
      />
      {formik.errors.confirmPassword && <div>{formik.errors.confirmPassword}</div>}
      {error && <div>{error}</div>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
