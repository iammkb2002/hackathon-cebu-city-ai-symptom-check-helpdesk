import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';

const Home = () => {
  useEffect(() => {
    // Initialize Flowbite components if necessary
    import('flowbite');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="flex items-center justify-center h-full mt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to my Next.js app!</h1>
          <button className="btn btn-blue mt-4">Flowbite Button</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
