import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Plus, Filter, Download, Calendar, ChevronDown, Search, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

// Mock data for investments
const investmentData = [
  {
    id: '1',
    name: 'S&P 500 ETF',
    amount: 10000,
    returns: 1200,
    returnPercentage: 12,
    trend: 'up',
    type: 'ETF',
    lastUpdated: '2025-05-20T10:30:00',
  },
  {
    id: '2',
    name: 'Tech Growth Fund',
    amount: 5000,
    returns: -300,
    returnPercentage: -6,
    trend: 'down',
    type: 'Mutual Fund',
    lastUpdated: '2025-05-20T10:30:00',
  },
  {
    id: '3',
    name: 'Blue Chip Portfolio',
    amount: 7500,
    returns: 600,
    returnPercentage: 8,
    trend: 'up',
    type: 'Stocks',
    lastUpdated: '2025-05-20T10:30:00',
  },
  {
    id: '4',
    name: 'Government Bonds',
    amount: 3000,
    returns: 90,
    returnPercentage: 3,
    trend: 'up',
    type: 'Bonds',
    lastUpdated: '2025-05-20T10:30:00',
  },
  {
    id: '5',
    name: 'Real Estate Fund',
    amount: 8000,
    returns: 400,
    returnPercentage: 5,
    trend: 'up',
    type: 'REIT',
    lastUpdated: '2025-05-20T10:30:00',
  },
];

// Form component for adding new investment
const AddInvestmentForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="bg-white dark:bg-[#1e1e2e] rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Add New Investment</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Investment Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-primary focus:border-primary"
            placeholder="Enter investment name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Investment Type
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-primary focus:border-primary"
          >
            <option value="stocks">Stocks</option>
            <option value="etf">ETF</option>
            <option value="mutual-fund">Mutual Fund</option>
            <option value="bonds">Bonds</option>
            <option value="reit">REIT</option>
          </select>
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
            Purchase Date
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
            Add Investment
          </button>
        </div>
      </form>
    </div>
  );
};

const InvestmentsPage: React.FC = () => {
  const [showAddInvestment, setShowAddInvestment] = useState(false);
  const [filterDate, setFilterDate] = useState('All Time');
  
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-[#121212]">
      <Sidebar />
      
      <div className="flex-1 flex flex-col h-screen overflow-auto">
        <Header />
        
        <main className="flex-1 p-4 md:p-6">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0">
              Investments
            </h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowAddInvestment(true)}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg"
              >
                <Plus size={16} />
                <span>Add Investment</span>
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
                placeholder="Search investments..."
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
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Invested</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">$33,500.00</h2>
                <p className="text-sm text-green-500 mt-2">+15% from last month</p>
              </div>
              <div className="bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Returns</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">$1,990.00</h2>
                <p className="text-sm text-green-500 mt-2">5.94% return</p>
              </div>
              <div className="bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Best Performer</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">S&P 500 ETF</h2>
                <p className="text-sm text-green-500 mt-2">+12% return</p>
              </div>
              <div className="bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Worst Performer</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tech Growth</h2>
                <p className="text-sm text-red-500 mt-2">-6% return</p>
              </div>
            </div>
            
            {/* Portfolio Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Portfolio Allocation</h2>
              <div className="h-64 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Pie chart will be rendered here</p>
              </div>
            </div>
            
            {/* Performance Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Performance History</h2>
              <div className="h-64 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Line chart will be rendered here</p>
              </div>
            </div>
            
            {/* Investments Table */}
            <div className="lg:col-span-4 bg-white dark:bg-[#1e1e2e] rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Investment Portfolio</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Investment
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Returns
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Performance
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-[#1e1e2e] divide-y divide-gray-200 dark:divide-gray-700">
                    {investmentData.map((investment) => (
                      <tr key={investment.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                              <DollarSign size={18} className={investment.trend === 'up' ? 'text-green-400' : 'text-red-400'} />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {investment.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">{investment.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">${investment.amount.toFixed(2)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`text-sm ${investment.returns >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            ${Math.abs(investment.returns).toFixed(2)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="flex items-center justify-end">
                            {investment.trend === 'up' ? (
                              <TrendingUp size={16} className="text-green-500 mr-1" />
                            ) : (
                              <TrendingDown size={16} className="text-red-500 mr-1" />
                            )}
                            <span className={`text-sm ${investment.returnPercentage >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                              {investment.returnPercentage >= 0 ? '+' : ''}{investment.returnPercentage}%
                            </span>
                          </div>
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
      
      {/* Add Investment Modal */}
      {showAddInvestment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <AddInvestmentForm onClose={() => setShowAddInvestment(false)} />
        </div>
      )}
    </div>
  );
};

export default InvestmentsPage;