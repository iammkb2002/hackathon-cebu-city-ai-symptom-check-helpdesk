// pages/login.js
import React from 'react';
import LoginForm from '../components/LoginForm';
import NavBar from '../components/NavBar';

const Login = () => (
  <div>
    <NavBar />
    <h1>Login</h1>
    <LoginForm />
  </div>
);

export default Login;
