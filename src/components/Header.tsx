import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Bell, Search, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <header className="bg-white dark:bg-[#1e1e2e] border-b border-gray-200 dark:border-gray-800 p-4 flex justify-between items-center">
      {/* Search bar */}
      <div className="relative flex-1 max-w-md">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search transactions, budgets..."
          className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      
      {/* Right section: notifications and profile */}
      <div className="flex items-center gap-4">
        {/* Dark mode toggle (already in sidebar) */}
        
        {/* Notifications */}
        <div className="relative">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 relative">
            <Bell size={20} className="text-gray-600 dark:text-gray-300" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>
        </div>
        
        {/* User profile dropdown */}
        <div className="flex items-center gap-2">
          <img
            src={currentUser?.photoURL || 'https://i.pravatar.cc/150?img=68'}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="hidden md:block">
            <span className="font-medium text-sm">{currentUser?.name || 'User'}</span>
          </div>
          <ChevronDown size={16} className="text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;