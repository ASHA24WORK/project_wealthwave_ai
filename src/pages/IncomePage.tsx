import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Plus, Filter, Download, Calendar, ChevronDown, Search, Briefcase, DollarSign, Gift, Home, TrendingUp } from 'lucide-react';

// Mock data for income transactions
const incomeData = [
  {
    id: '1',
    title: 'Salary Deposit',
    amount: '5200.00',
    category: 'Salary',
    date: 'Today',
    time: '09:15 AM',
    icon: <Briefcase size={18} className="text-purple-400" />,
  },
  {
    id: '2',
    title: 'Freelance Payment',
    amount: '850.00',
    category: 'Freelance',
    date: 'Yesterday',
    time: '2:30 PM',
    icon: <DollarSign size={18} className="text-green-400" />,
  },
  {
    id: '3',
    title: 'Investment Returns',
    amount: '320.50',
    category: 'Investments',
    date: 'May 18, 2025',
    time: '11:45 AM',
    icon: <TrendingUp size={18} className="text-blue-400" />,
  },
  {
    id: '4',
    title: 'Rental Income',
    amount: '1200.00',
    category: 'Real Estate',
    date: 'May 1, 2025',
    time: '10:00 AM',
    icon: <Home size={18} className="text-yellow-400" />,
  },
  {
    id: '5',
    title: 'Birthday Gift',
    amount: '100.00',
    category: 'Gifts',
    date: 'May 5, 2025',
    time: '3:15 PM',
    icon: <Gift size={18} className="text-red-400" />,
  },
];

// Mock data for income categories
const categories = [
  { id: '1', name: 'Salary', icon: <Briefcase size={16} />, color: '#8b5cf6' },
  { id: '2', name: 'Freelance', icon: <DollarSign size={16} />, color: '#10b981' },
  { id: '3', name: 'Investments', icon: <TrendingUp size={16} />, color: '#3b82f6' },
  { id: '4', name: 'Real Estate', icon: <Home size={16} />, color: '#f59e0b' },
  { id: '5', name: 'Gifts', icon: <Gift size={16} />, color: '#ef4444' },
];

// Form component for adding new income
const AddIncomeForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="bg-white dark:bg-[#1e1e2e] rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Add New Income</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Description
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-primary focus:border-primary"
            placeholder="What's this income from?"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Amount
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 dark:text-gray-400">$</span>
            </div>
            <input
              type="number"
              className="w-full pl-8 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="0.00"
              step="0.01"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Category
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-primary focus:border-primary"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Date
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        
        <div className="flex gap-4 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-md shadow-sm focus:outline-none"
          >
            Add Income
          </button>
        </div>
      </form>
    </div>
  );
};

const IncomePage: React.FC = () => {
  const [showAddIncome, setShowAddIncome] = useState(false);
  const [filterDate, setFilterDate] = useState('This Month');
  
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-[#121212]">
      <Sidebar />
      
      <div className="flex-1 flex flex-col h-screen overflow-auto">
        <Header />
        
        <main className="flex-1 p-4 md:p-6">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0">
              Income
            </h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowAddIncome(true)}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg"
              >
                <Plus size={16} />
                <span>Add Income</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-white dark:bg-[#1e1e2e] text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700">
                <Filter size={16} />
                <span>Filter</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-white dark:bg-[#1e1e2e] text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700">
                <Download size={16} />
                <span>Export</span>
              </button>
            </div>
          </div>
          
          {/* Filter Row */}
          <div className="bg-white dark:bg-[#1e1e2e] p-4 rounded-lg shadow-sm mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center">
              <Calendar size={18} className="text-gray-500 dark:text-gray-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300 mr-2">Period:</span>
              <button className="flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md">
                <span className="text-gray-800 dark:text-gray-200">{filterDate}</span>
                <ChevronDown size={16} className="ml-2 text-gray-500" />
              </button>
            </div>
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search income..."
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white w-full sm:w-64"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Summary Cards */}
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Income</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">$8,350.00</h2>
                <p className="text-sm text-green-500 mt-2">+15% from last month</p>
              </div>
              <div className="bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Salary</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">$5,200.00</h2>
                <p className="text-sm text-gray-500 mt-2">Regular monthly income</p>
              </div>
              <div className="bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Freelance</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">$850.00</h2>
                <p className="text-sm text-green-500 mt-2">+23% from last month</p>
              </div>
              <div className="bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Investments</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">$320.50</h2>
                <p className="text-sm text-red-500 mt-2">-5% from last month</p>
              </div>
            </div>
            
            {/* Income Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Income by Category</h2>
              <div className="h-64 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Bar chart will be rendered here</p>
              </div>
            </div>
            
            {/* Monthly Trend */}
            <div className="lg:col-span-2 bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Monthly Trend</h2>
              <div className="h-64 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Line chart will be rendered here</p>
              </div>
            </div>
            
            {/* Recent Income Table */}
            <div className="lg:col-span-4 bg-white dark:bg-[#1e1e2e] rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Income</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-[#1e1e2e] divide-y divide-gray-200 dark:divide-gray-700">
                    {incomeData.map((income) => (
                      <tr key={income.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                              {income.icon}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {income.title}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 dark:text-gray-400">{income.category}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 dark:text-gray-400">{income.date}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{income.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-green-500">
                          +${income.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">20</span> results
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                    Previous
                  </button>
                  <button className="px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* Add Income Modal */}
      {showAddIncome && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <AddIncomeForm onClose={() => setShowAddIncome(false)} />
        </div>
      )}
    </div>
  );
};

export default IncomePage;