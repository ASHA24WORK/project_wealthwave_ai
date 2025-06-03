import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Plus, Filter, Download, Calendar, ChevronDown, Search, BarChart2, PieChart, TrendingUp, FileText } from 'lucide-react';

// Mock data for reports
const reportData = [
  {
    id: '1',
    name: 'Monthly Expense Report',
    type: 'Expenses',
    date: 'May 2025',
    status: 'Generated',
    icon: <BarChart2 size={18} className="text-purple-400" />,
  },
  {
    id: '2',
    name: 'Income Analysis',
    type: 'Income',
    date: 'May 2025',
    status: 'Generated',
    icon: <TrendingUp size={18} className="text-green-400" />,
  },
  {
    id: '3',
    name: 'Budget Overview',
    type: 'Budgets',
    date: 'May 2025',
    status: 'Generated',
    icon: <PieChart size={18} className="text-blue-400" />,
  },
  {
    id: '4',
    name: 'Investment Performance',
    type: 'Investments',
    date: 'May 2025',
    status: 'Generated',
    icon: <TrendingUp size={18} className="text-yellow-400" />,
  },
  {
    id: '5',
    name: 'Savings Goals Progress',
    type: 'Savings',
    date: 'May 2025',
    status: 'Generated',
    icon: <BarChart2 size={18} className="text-red-400" />,
  },
];

// Form component for generating new report
const GenerateReportForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="bg-white dark:bg-[#1e1e2e] rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Generate New Report</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Report Type
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-primary focus:border-primary"
          >
            <option value="expenses">Expense Report</option>
            <option value="income">Income Analysis</option>
            <option value="budget">Budget Overview</option>
            <option value="investments">Investment Performance</option>
            <option value="savings">Savings Progress</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Time Period
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-primary focus:border-primary"
          >
            <option value="last-month">Last Month</option>
            <option value="last-quarter">Last Quarter</option>
            <option value="last-year">Last Year</option>
            <option value="ytd">Year to Date</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Format
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-primary focus:border-primary"
          >
            <option value="pdf">PDF</option>
            <option value="csv">CSV</option>
            <option value="excel">Excel</option>
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
            Generate
          </button>
        </div>
      </form>
    </div>
  );
};

const ReportsPage: React.FC = () => {
  const [showGenerateReport, setShowGenerateReport] = useState(false);
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
              Reports & Analytics
            </h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowGenerateReport(true)}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg"
              >
                <Plus size={16} />
                <span>Generate Report</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-white dark:bg-[#1e1e2e] text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700">
                <Filter size={16} />
                <span>Filter</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-white dark:bg-[#1e1e2e] text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700">
                <Download size={16} />
                <span>Export All</span>
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
                placeholder="Search reports..."
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
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Reports</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">25</h2>
                <p className="text-sm text-gray-500 mt-2">Generated this month</p>
              </div>
              <div className="bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Expense Reports</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">12</h2>
                <p className="text-sm text-green-500 mt-2">Most common type</p>
              </div>
              <div className="bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Scheduled Reports</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3</h2>
                <p className="text-sm text-gray-500 mt-2">Auto-generated monthly</p>
              </div>
              <div className="bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Storage Used</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">45 MB</h2>
                <p className="text-sm text-gray-500 mt-2">Of 1 GB limit</p>
              </div>
            </div>
            
            {/* Reports Overview Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Reports by Type</h2>
              <div className="h-64 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Pie chart will be rendered here</p>
              </div>
            </div>
            
            {/* Reports Timeline */}
            <div className="lg:col-span-2 bg-white dark:bg-[#1e1e2e] p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Generation Timeline</h2>
              <div className="h-64 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Line chart will be rendered here</p>
              </div>
            </div>
            
            {/* Reports Table */}
            <div className="lg:col-span-4 bg-white dark:bg-[#1e1e2e] rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Generated Reports</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Report Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-[#1e1e2e] divide-y divide-gray-200 dark:divide-gray-700">
                    {reportData.map((report) => (
                      <tr key={report.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                              {report.icon}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {report.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 dark:text-gray-400">{report.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 dark:text-gray-400">{report.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-primary hover:text-primary-dark mr-4">View</button>
                          <button className="text-primary hover:text-primary-dark">Download</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">25</span> results
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
      
      {/* Generate Report Modal */}
      {showGenerateReport && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <GenerateReportForm onClose={() => setShowGenerateReport(false)} />
        </div>
      )}
    </div>
  );
};

export default ReportsPage;