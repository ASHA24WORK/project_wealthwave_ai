import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import BalanceCard from '../components/BalanceCard';
import SpendingChart from '../components/SpendingChart';
import BudgetProgress from '../components/BudgetProgress';
import RecentTransactions from '../components/RecentTransactions';
import SavingsGoals from '../components/SavingsGoals';
import { Coffee, ShoppingBag, Home, Car, Film, DollarSign, Package, Plane, Smartphone, ShieldCheck } from 'lucide-react';

// Mock data for spending categories
const spendingCategories = [
  { name: 'Food & Drinks', percentage: 35, color: '#8b5cf6' },
  { name: 'Shopping', percentage: 25, color: '#10b981' },
  { name: 'Housing', percentage: 15, color: '#f59e0b' },
  { name: 'Transportation', percentage: 10, color: '#ef4444' },
  { name: 'Entertainment', percentage: 8, color: '#06b6d4' },
  { name: 'Others', percentage: 7, color: '#ec4899' },
];

// Mock data for budget progress
const budgetItems = [
  {
    id: '1',
    name: 'Food & Drinks',
    icon: <Coffee size={16} />,
    current: 850,
    total: 1000,
    percentage: 85,
    color: '#8b5cf6',
  },
  {
    id: '2',
    name: 'Shopping',
    icon: <ShoppingBag size={16} />,
    current: 420,
    total: 500,
    percentage: 84,
    color: '#10b981',
  },
  {
    id: '3',
    name: 'Transportation',
    icon: <Car size={16} />,
    current: 320,
    total: 300,
    percentage: 107,
    color: '#ef4444',
  },
  {
    id: '4',
    name: 'Entertainment',
    icon: <Film size={16} />,
    current: 180,
    total: 400,
    percentage: 45,
    color: '#06b6d4',
  },
];

// Mock data for recent transactions
const recentTransactions = [
  {
    id: '1',
    title: 'Starbucks Coffee',
    amount: '24.50',
    type: 'expense' as const,
    category: 'Food & Drinks',
    date: 'Today',
    time: '10:30 AM',
    icon: <Coffee size={18} className="text-purple-400" />,
  },
  {
    id: '2',
    title: 'Salary Deposit',
    amount: '5200.00',
    type: 'income' as const,
    category: 'Income',
    date: 'Yesterday',
    time: '09:15 AM',
    icon: <DollarSign size={18} className="text-green-400" />,
  },
  {
    id: '3',
    title: 'Amazon Purchase',
    amount: '129.99',
    type: 'expense' as const,
    category: 'Shopping',
    date: 'May 20, 2025',
    time: '2:45 PM',
    icon: <Package size={18} className="text-blue-400" />,
  },
];

// Mock data for savings goals
const savingsGoals = [
  {
    id: '1',
    name: 'Vacation in Bali',
    icon: <Plane size={18} />,
    current: 3500,
    target: 5000,
    percentage: 70,
    date: 'Nov 2023',
    color: '#8b5cf6',
  },
  {
    id: '2',
    name: 'New iPhone',
    icon: <Smartphone size={18} />,
    current: 800,
    target: 1200,
    percentage: 67,
    date: 'Sep 2023',
    color: '#10b981',
  },
  {
    id: '3',
    name: 'Emergency Fund',
    icon: <ShieldCheck size={18} />,
    current: 8500,
    target: 10000,
    percentage: 85,
    date: 'Ongoing',
    color: '#f59e0b',
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-[#121212]">
      <Sidebar />
      
      <div className="flex-1 flex flex-col h-screen overflow-auto">
        <Header />
        
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {/* Welcome Section */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">Welcome back, Alex 👋</h1>
            <p className="text-gray-600 dark:text-gray-400">Track, analyze and optimize your finances</p>
          </div>
          
          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* First Column */}
            <div className="lg:col-span-1 space-y-6">
              <BalanceCard 
                totalBalance="$24,895.00" 
                percentChange="+2.4%" 
                income="$8,350" 
                expenses="$5,240" 
              />
              <BudgetProgress budgets={budgetItems} />
            </div>
            
            {/* Second Column */}
            <div className="lg:col-span-2 space-y-6">
              <SpendingChart categories={spendingCategories} />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RecentTransactions transactions={recentTransactions} />
                <SavingsGoals goals={savingsGoals} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;