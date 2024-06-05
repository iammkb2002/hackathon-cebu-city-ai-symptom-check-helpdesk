import React from 'react';
import NavBar from './NavBar';
import UserSidebar from './UserSidebar';

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="flex">
        <UserSidebar />
        <div className="flex-grow p-6 ml-64 mt-16">
          <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>Welcome to your dashboard! Here you can find an overview of your activities.</p>
            {/* Add more user-specific content and features here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
