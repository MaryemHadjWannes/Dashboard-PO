"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Logo centered horizontally */}
      <div className="flex justify-center p-6">
        <Image
          src="/logoGEX.png" // Path to the image in the public folder
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      
      {/* Navigation links */}
      <nav className="flex-1 p-6 space-y-2">
        <Link 
          href="/dashboard" 
          className={`sidebar-link ${isActive('/dashboard') ? 'active' : ''}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Dashboard</span>
        </Link>
        
        <Link 
          href="/plants" 
          className={`sidebar-link ${isActive('/plants') ? 'active' : ''}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span>Manage Plants</span>
        </Link>
        
        <Link 
          href="/certifications" 
          className={`sidebar-link ${isActive('/certifications') ? 'active' : ''}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>Certifications</span>
        </Link>
        
        <Link 
          href="/recommendations" 
          className={`sidebar-link ${isActive('/recommendations') ? 'active' : ''}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span>Recommendations</span>
        </Link>
        
        <Link 
          href="/settings" 
          className={`sidebar-link ${isActive('/settings') ? 'active' : ''}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Settings</span>
        </Link>
      </nav>
      
      {/* Sign Out link */}
      <div className="p-4 border-t border-gray-200">
        <Link 
          href="/logout" 
          className="sidebar-link text-gray-600 hover:text-red-600 hover:bg-red-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Sign Out</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;