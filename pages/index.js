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
      <div className="flex flex-col items-center justify-center h-full mt-16 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Welcome to Ask for Health!</h1>
          <p className="mt-4 text-lg text-gray-700">
            Your go-to app for health assistance. Start by exploring the options in the menu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
