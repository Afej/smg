import React from 'react';
import { Link } from 'react-router-dom';

const notFound = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        class="w-12 h-12 mt-8 text-purple-700"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
          clip-rule="evenodd"
        ></path>
      </svg>

      <h1 className="text-6xl font-semibold text-gray-900">404</h1>
      <p className="text-gray-700 ">
        Page not found. Check the address or{' '}
        <Link className="text-purple-600 hover:underline" to="/">
          go back
        </Link>
        .
      </p>
    </div>
  );
};

export default notFound;
