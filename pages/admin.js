// pages/admin.js
import React from 'react';
import withAuth from '../hoc/withAuth';
import AdminDashboard from '../components/AdminDashboard';

const Admin = () => (
  <div>
    <AdminDashboard />
  </div>
);

export default withAuth(Admin, true);
