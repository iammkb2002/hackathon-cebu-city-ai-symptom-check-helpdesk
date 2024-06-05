import React from 'react';
import LoginForm from '../components/LoginForm';
import NavBar from '../components/NavBar';

const Login = () => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <NavBar />
    <div className="flex-grow flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <LoginForm />
      </div>
    </div>
  </div>
);

export default Login;
