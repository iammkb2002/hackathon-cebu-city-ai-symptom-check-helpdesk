import React from 'react';
import SignupForm from '../components/SignupForm';
import NavBar from '../components/NavBar';

const Signup = () => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <NavBar />
    <div className="flex-grow flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
        <SignupForm />
      </div>
    </div>
  </div>
);

export default Signup;
