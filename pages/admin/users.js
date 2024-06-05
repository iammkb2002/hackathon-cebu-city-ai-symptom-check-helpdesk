// pages/admin/users.js
import React from 'react';
import withAuth from '../../hoc/withAuth';
import AdminDashboard from '../../components/AdminDashboard';

const Users = () => (
  <div className="min-h-screen bg-gray-50">
    <AdminDashboard />
  </div>
);

export default withAuth(Users, true);
