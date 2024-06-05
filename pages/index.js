import React from 'react';
import NavBar from '../components/NavBar';

const Home = () => (
  <div className="min-h-screen bg-gray-50">
    <NavBar />
    <div className="flex items-center justify-center h-full mt-16">
      <h1 className="text-4xl font-bold">Welcome to my Next.js app!</h1>
    </div>
  </div>
);

export default Home;
