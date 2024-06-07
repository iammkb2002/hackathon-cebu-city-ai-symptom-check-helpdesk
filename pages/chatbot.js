import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Chatbot from '../components/Chatbot';

const ChatbotPage = () => {
  useEffect(() => {
    // Initialize Flowbite components if necessary
    import('flowbite');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="flex flex-col items-center justify-center h-full mt-16 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Welcome to Ask for Health Chatbot!</h1>
          <p className="mt-4 text-lg text-gray-700">
            Your go-to app for health assistance. Start by asking a question below.
          </p>
        </div>
        <Chatbot />
      </div>
    </div>
  );
};

export default ChatbotPage;
