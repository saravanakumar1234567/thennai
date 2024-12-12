// components/LoadingSpinner.js
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-transparent border-t-blue-500 border-b-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full animate-ping"></div>
        </div>
        <p className="mt-4 text-gray-700 text-lg font-medium">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
