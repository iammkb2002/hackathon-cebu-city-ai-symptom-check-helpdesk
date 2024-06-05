// pages/admin/users.js
import React from 'react';
import withAuth from '../../hoc/withAuth';
import AdminDashboard from '../../components/AdminDashboard';

const Users = () => (
  <AdminDashboard />
);

export default withAuth(Users, true);
