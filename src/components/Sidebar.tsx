import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, 
  CreditCard, 
  DollarSign, 
  PieChart, 
  TrendingUp, 
  PiggyBank, 
  BarChart2, 
  Menu, 
  X, 
  LogOut, 
  Settings, 
  HelpCircle, 
  Moon, 
  Sun, 
  Wallet
} from 'lucide-react';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, active, onClick }) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
        active 
          ? 'bg-primary/10 text-primary font-medium' 
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
      }`}
      onClick={onClick}
    >
      <span className={`${active ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`}>
        {icon}
      </span>
      <span>{label}</span>
    </Link>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const navItems = [
    { to: '/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { to: '/expenses', icon: <CreditCard size={20} />, label: 'Expenses' },
    { to: '/income', icon: <DollarSign size={20} />, label: 'Income' },
    { to: '/budgets', icon: <PieChart size={20} />, label: 'Budgets' },
    { to: '/investments', icon: <TrendingUp size={20} />, label: 'Investments' },
    { to: '/savings', icon: <PiggyBank size={20} />, label: 'Savings' },
    { to: '/reports', icon: <BarChart2 size={20} />, label: 'Reports' },
  ];

  return (
    <>
      {/* Mobile header with hamburger menu */}
      <div className="lg:hidden flex justify-between items-center p-4 bg-white dark:bg-[#1e1e2e] shadow-sm">
        <div className="flex items-center gap-2">
          <Wallet className="text-primary" size={28} />
          <span className="font-bold text-xl">WealthWave</span>
        </div>
        <button 
          onClick={toggleSidebar} 
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Menu size={24} className="text-gray-700 dark:text-gray-300" />
        </button>
      </div>
      
      {/* Overlay for mobile sidebar */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full bg-white dark:bg-[#1e1e2e] z-50 w-64 shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:sticky lg:top-0 lg:h-screen`}
      >
        {/* Sidebar header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Wallet className="text-primary" size={28} />
            <span className="font-bold text-xl">WealthWave</span>
          </div>
          <button 
            onClick={toggleSidebar}
            className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
          >
            <X size={20} className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        
        {/* User profile */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <img 
              src={currentUser?.photoURL || 'https://i.pravatar.cc/150?img=68'} 
              alt="Profile" 
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">{currentUser?.name || 'User'}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{currentUser?.email || 'user@example.com'}</p>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="p-2">
          <div className="space-y-1">
            {navItems.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                active={location.pathname === item.to}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </div>
          
          {/* Settings section */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button 
              onClick={toggleDarkMode}
              className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="text-gray-500 dark:text-gray-400">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </span>
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            
            <Link
              to="/settings"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-gray-500 dark:text-gray-400">
                <Settings size={20} />
              </span>
              <span>Settings</span>
            </Link>
            
            <Link
              to="/help"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-gray-500 dark:text-gray-400">
                <HelpCircle size={20} />
              </span>
              <span>Help & Support</span>
            </Link>
            
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;