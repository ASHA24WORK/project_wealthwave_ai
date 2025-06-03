import React from 'react';
import { Search, Coffee, ShoppingBag, DollarSign } from 'lucide-react';

interface Transaction {
  id: string;
  title: string;
  amount: string;
  type: 'expense' | 'income';
  category: string;
  date: string;
  time: string;
  icon: React.ReactNode;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({ transactions }) => {
  return (
    <div className="dark-card p-6 animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-200">Recent Transactions</h2>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 text-gray-200 text-sm rounded-lg pl-9 pr-4 py-2 w-full md:w-48 focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>
      
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div 
            key={transaction.id}
            className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors animate-slideIn"
            style={{ animationDelay: `${transactions.indexOf(transaction) * 100}ms` }}
          >
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
              {transaction.icon}
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium text-gray-200">{transaction.title}</p>
                  <div className="flex items-center text-xs text-gray-400">
                    <span>{transaction.date}</span>
                    <span className="mx-1">•</span>
                    <span>{transaction.time}</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className={`font-medium ${transaction.type === 'expense' ? 'text-red-400' : 'text-green-400'}`}>
                    {transaction.type === 'expense' ? '-' : '+'}${transaction.amount}
                  </p>
                  <p className="text-xs text-gray-400">{transaction.category}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;