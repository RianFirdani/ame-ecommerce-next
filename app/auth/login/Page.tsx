import LoginForm from '@/components/auth/LoginForm';
import React from 'react'

const Page = () => {
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="relative w-full max-w-md">
        {/* BG effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-xl transform -skew-y-6 sm:-rotate-6 sm:rounded-3xl"></div>

        {/* Card */}
        <div className="relative bg-white dark:bg-gray-800 shadow-xl sm:rounded-3xl p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Login
          </h1>

         <LoginForm/>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
            <span className="px-3 text-gray-500 dark:text-gray-300 text-sm">
              or continue with
            </span>
            <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
          </div>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 dark:border-gray-600 py-3 rounded-lg bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
           
            <span className="font-medium text-gray-800 dark:text-white">
              Continue with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );

}

export default Page