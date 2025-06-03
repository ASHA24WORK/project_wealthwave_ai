import React from 'react';
import { TrendingUp } from 'lucide-react';

interface BalanceCardProps {
  totalBalance: string;
  percentChange: string;
  income: string;
  expenses: string;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  totalBalance,
  percentChange,
  income,
  expenses,
}) => {
  const isPositive = !percentChange.startsWith('-');

  return (
    <div className="dark-card p-6 animate-fadeIn">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-200">Total Balance</h2>
        <div className={`flex items-center text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          <TrendingUp size={16} className="mr-1" />
          <span>{percentChange}</span>
        </div>
      </div>
      
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-white">{totalBalance}</h1>
      </div>
      
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-400 mb-1">Income</p>
          <p className="text-lg font-medium text-green-400">{income}</p>
        </div>
        
        <div className="h-10 border-r border-gray-700"></div>
        
        <div>
          <p className="text-sm text-gray-400 mb-1">Expenses</p>
          <p className="text-lg font-medium text-red-400">{expenses}</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;