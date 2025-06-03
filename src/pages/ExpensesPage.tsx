import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Plus, Filter, Download, Calendar, ChevronDown, Search, CreditCard, ShoppingBag, Coffee, Film, DollarSign, Home, Car } from 'lucide-react';

// Mock data for transactions
const expenseData = [
  {
    id: '1',
    title: 'Starbucks Coffee',
    amount: '24.50',
    category: 'Food & Drinks',
    date: 'Today',
    time: '10:30 AM',
    icon: <Coffee size={18} className="text-purple-400" />,
  },
  {
    id: '2',
    title: 'Amazon Purchase',
    amount: '129.99',
    category: 'Shopping',
    date: 'May 20, 2025',
    time: '2:45 PM',
    icon: <ShoppingBag size={18} className="text-green-400" />,
  },
  {
    id: '3',
    title: 'Movie Tickets',
    amount: '32.00',
    category: 'Entertainment',
    date: 'May 18, 2025',
    time: '7:30 PM',
    icon: <Film size={18} className="text-blue-400" />,
  },
  {
    id: '4',
    title: 'Apartment Rent',
    amount: '1200.00',
    category: 'Housing',
    date: 'May 1, 2025',
    time: '9:00 AM',
    icon: <Home size={18} className="text-yellow-400" />,
  },
  {
    id: '5',
    title: 'Car Insurance',
    amount: '85.00',
    category: 'Transportation',
    date: 'May 5, 2025',
    time: '3:15 PM',
    icon: <Car size={18} className="text-red-400" />,
  },
  {
    id: '6',
    title: 'Grocery Shopping',
    amount: '87.50',
    category: 'Food & Drinks',
    date: 'May 10, 2025',
    time: '11:20 AM',
    icon: <Coffee size={18} className="text-purple-400" />,
  },
];

// Mock data for categories
const categories = [
  { id: '1', name: 'Food & Drinks', icon: <Coffee size={16} />, color: '#8b5cf6' },
  { id: '2', name: 'Shopping', icon: <ShoppingBag size={16} />, color: '#10b981' },
  { id: '3', name: 'Housing', icon: <Home size={16} />, color: '#f59e0b' },
  { id: '4', name: 'Transportation', icon: <Car size={16} />, color: '#ef4444' },
  { id: '5', name: 'Entertainment', icon: <Film size={16} />, color: '#06b6d4' },
  { id: '6', name: 'Others', icon: <CreditCard size={16} />, color: '#ec4899' },
];

// Form component for adding new expense
const AddExpenseForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="bg-white dark:bg-[#1e1e2e] rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Add New Expense</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Description
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-primary focus:border-primary"
            placeholder="What did you spend on?"
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
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

const ExpensesPage: React.FC = () => {
  const [showAddExpense, setShowAddExpense] = useState(false);
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
              Expenses
            </h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowAddExpense(true)}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg"
              >
                <Plus size={16} />
                <span>Add Expense</span>
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
                placeholder="Search expenses..."
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
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Expenses</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">$5,240.00</h2>
                <p className="text-sm text-red-500 mt-2">+12% from last month</p>
              </div>
              <div className="bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Food & Drinks</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">$1,834.00</h2>
                <p className="text-sm text-green-500 mt-2">-5% from last month</p>
              </div>
              <div className="bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Shopping</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">$1,310.00</h2>
                <p className="text-sm text-red-500 mt-2">+23% from last month</p>
              </div>
              <div className="bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Housing</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">$786.00</h2>
                <p className="text-sm text-gray-500 mt-2">No change from last month</p>
              </div>
            </div>
            
            {/* Expense Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Expenses by Category</h2>
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
            
            {/* Recent Expenses Table */}
            <div className="lg:col-span-4 bg-white dark:bg-[#1e1e2e] rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Expenses</h2>
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
                    {expenseData.map((expense) => (
                      <tr key={expense.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                              {expense.icon}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {expense.title}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 dark:text-gray-400">{expense.category}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 dark:text-gray-400">{expense.date}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{expense.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-red-500">
                          -${expense.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">24</span> results
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
      
      {/* Add Expense Modal */}
      {showAddExpense && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <AddExpenseForm onClose={() => setShowAddExpense(false)} />
        </div>
      )}
    </div>
  );
};

export default ExpensesPage;