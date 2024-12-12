// components/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-500">404</h1>
        <p className="text-2xl font-bold text-gray-800 mt-4">Page Not Found</p>
        <p className="text-gray-600 mt-2">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-md text-lg font-semibold hover:bg-blue-600 transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
