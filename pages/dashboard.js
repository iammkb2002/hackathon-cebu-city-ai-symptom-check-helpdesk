// pages/dashboard.js
import React from 'react';
import withAuth from '../hoc/withAuth';
import NavBar from '../components/NavBar';

const Dashboard = () => (
  <div>
    <NavBar />
    <h1>Dashboard</h1>
  </div>
);

export default withAuth(Dashboard);
