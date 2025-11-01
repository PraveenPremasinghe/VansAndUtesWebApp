"use client";

import React from "react";

const FullPageLoader = ({ message = "Loading..." }: { message?: string }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center">
        {/* Simple Spinner */}
        <div className="relative mb-4">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-gray-200 border-t-primary dark:border-gray-700 dark:border-t-blue-400"></div>
        </div>
        
        {/* Loading Text */}
        {message && (
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default FullPageLoader;

