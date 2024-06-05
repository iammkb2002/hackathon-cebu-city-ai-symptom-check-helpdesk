import React from 'react';
import withAuth from '../hoc/withAuth';
import UserDashboard from '../components/UserDashboard';
import NavBar from '../components/NavBar';

const Dashboard = () => (
  <div className="min-h-screen bg-gray-50">
    <NavBar />
    <UserDashboard />
  </div>
);

export default withAuth(Dashboard);
