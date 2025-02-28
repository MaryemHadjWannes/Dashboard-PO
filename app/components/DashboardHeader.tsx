import React from 'react';
import Image from 'next/image';

interface DashboardHeaderProps {
  title: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      
      {/* Rounded white box for search, notification, and avatar */}
      <div className="flex items-center space-x-4 bg-white rounded-full p-2 shadow-sm">
        {/* Search bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute left-3 top-2.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {/* Notification icon */}
        <div className="relative">
          <button className="text-gray-500 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
        
        {/* User avatar */}
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium overflow-hidden">
          <Image src="/avatar.png" alt="User" width={32} height={32} />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;