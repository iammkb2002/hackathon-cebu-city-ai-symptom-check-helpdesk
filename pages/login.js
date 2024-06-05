import React from 'react';
import LoginForm from '../components/LoginForm';
import NavBar from '../components/NavBar';

const Login = () => (
  <div className="min-h-screen bg-gray-50">
    <NavBar />
    <div className="container mx-auto p-6 mt-16">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <LoginForm />
    </div>
  </div>
);

export default Login;
