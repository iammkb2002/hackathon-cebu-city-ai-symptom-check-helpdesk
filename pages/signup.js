import React from 'react';
import SignupForm from '../components/SignupForm';
import NavBar from '../components/NavBar';

const Signup = () => (
  <div className="min-h-screen bg-gray-50">
    <NavBar />
    <div className="container mx-auto p-6 mt-16">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      <SignupForm />
    </div>
  </div>
);

export default Signup;
