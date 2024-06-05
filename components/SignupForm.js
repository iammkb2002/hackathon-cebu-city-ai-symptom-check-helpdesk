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
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={formik.handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.email && formik.errors.email && <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.password && formik.errors.password && <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>}
        </div>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
