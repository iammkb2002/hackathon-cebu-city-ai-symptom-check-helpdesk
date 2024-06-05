import React from 'react';
import withAuth from '../hoc/withAuth';
import AdminDashboard from '../components/AdminDashboard';
import NavBar from '../components/NavBar';

const Admin = () => (
  <div className="min-h-screen bg-gray-50">
    <NavBar />
    <AdminDashboard />
  </div>
);

export default withAuth(Admin, true);
