import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Plus, Filter, Download, Calendar, ChevronDown, Search, Coffee, ShoppingBag, Home, Car, Film } from 'lucide-react';

// Mock data for budgets
const budgetData = [
  {
    id: '1',
    category: 'Food & Drinks',
    allocated: 1000,
    spent: 850,
    remaining: 150,
    percentage: 85,
    icon: <Coffee size={18} className="text-purple-400" />,
  },
  {
    id: '2',
    category: 'Shopping',
    allocated: 500,
    spent: 420,
    remaining: 80,
    percentage: 84,
    icon: <ShoppingBag size={18} className="text-green-400" />,
  },
  {
    id: '3',
    category: 'Housing',
    allocated: 2000,
    spent: 1800,
    remaining: 200,
    percentage: 90,
    icon: <Home size={18} className="text-yellow-400" />,
  },
  {
    id: '4',
    category: 'Transportation',
    allocated: 300,
    spent: 320,
    remaining: -20,
    percentage: 107,
    icon: <Car size={18} className="text-red-400" />,
  },
  {
    id: '5',
    category: 'Entertainment',
    allocated: 400,
    spent: 180,
    remaining: 220,
    percentage: 45,
    icon: <Film size={18} className="text-blue-400" />,
  },
];

// Form component for adding new budget
const AddBudgetForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="bg-white dark:bg-[#1e1e2e] rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Add New Budget</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Category
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-primary focus:border-primary"
          >
            <option value="food">Food & Drinks</option>
            <option value="shopping">Shopping</option>
            <option value="housing">Housing</option>
            <option value="transportation">Transportation</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Budget Amount
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
            Period
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-primary focus:border-primary"
          >
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
            <option value="yearly">Yearly</option>
          </select>
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
            Add Budget
          </button>
        </div>
      </form>
    </div>
  );
};

const BudgetsPage: React.FC = () => {
  const [showAddBudget, setShowAddBudget] = useState(false);
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
              Budgets
            </h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowAddBudget(true)}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg"
              >
                <Plus size={16} />
                <span>Add Budget</span>
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
                placeholder="Search budgets..."
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
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Budget</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">$4,200.00</h2>
                <p className="text-sm text-gray-500 mt-2">For this month</p>
              </div>
              <div className="bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Spent</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">$3,570.00</h2>
                <p className="text-sm text-red-500 mt-2">85% of total budget</p>
              </div>
              <div className="bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Remaining</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">$630.00</h2>
                <p className="text-sm text-green-500 mt-2">15% of total budget</p>
              </div>
              <div className="bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Over Budget Categories</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1</h2>
                <p className="text-sm text-red-500 mt-2">Transportation</p>
              </div>
            </div>
            
            {/* Budget Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Budget Overview</h2>
              <div className="h-64 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Doughnut chart will be rendered here</p>
              </div>
            </div>
            
            {/* Monthly Trend */}
            <div className="lg:col-span-2 bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Spending Trend</h2>
              <div className="h-64 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Line chart will be rendered here</p>
              </div>
            </div>
            
            {/* Budget Table */}
            <div className="lg:col-span-4 bg-white dark:bg-[#1e1e2e] rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Budget Categories</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Allocated
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Spent
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Remaining
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Progress
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-[#1e1e2e] divide-y divide-gray-200 dark:divide-gray-700">
                    {budgetData.map((budget) => (
                      <tr key={budget.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                              {budget.icon}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {budget.category}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">${budget.allocated.toFixed(2)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">${budget.spent.toFixed(2)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`text-sm ${budget.remaining >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            ${budget.remaining.toFixed(2)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                            <div
                              className={`h-2.5 rounded-full ${
                                budget.percentage > 100
                                  ? 'bg-red-500'
                                  : budget.percentage > 80
                                  ? 'bg-yellow-500'
                                  : 'bg-green-500'
                              }`}
                              style={{ width: `${Math.min(budget.percentage, 100)}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{budget.percentage}%</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* Add Budget Modal */}
      {showAddBudget && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <AddBudgetForm onClose={() => setShowAddBudget(false)} />
        </div>
      )}
    </div>
  );
};

export default BudgetsPage;