import React from 'react';
import { ShoppingBag, Coffee, Car, Film } from 'lucide-react';

interface BudgetItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  current: number;
  total: number;
  percentage: number;
  color: string;
}

interface BudgetProgressProps {
  budgets: BudgetItem[];
}

const BudgetProgress: React.FC<BudgetProgressProps> = ({ budgets }) => {
  return (
    <div className="dark-card p-6 animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-200">Budget Progress</h2>
        <button className="text-sm text-primary hover:text-primary-light">
          View All
        </button>
      </div>
      
      <div className="space-y-6">
        {budgets.map((budget) => (
          <div key={budget.id} className="animate-slideIn" style={{ animationDelay: `${budgets.indexOf(budget) * 100}ms` }}>
            <div className="flex items-center mb-2">
              <div className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center bg-opacity-20`} style={{ backgroundColor: `${budget.color}30` }}>
                <span style={{ color: budget.color }}>{budget.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="text-sm font-medium text-gray-200">{budget.name}</p>
                  <p className="text-sm text-gray-400">
                    ${budget.current} <span className="text-gray-500">/ ${budget.total}</span>
                  </p>
                </div>
                <div className="progress-bar mt-2">
                  <div 
                    className="progress-value" 
                    style={{ 
                      width: `${budget.percentage}%`,
                      backgroundColor: budget.color,
                    }}
                  ></div>
                </div>
                <p className="text-xs text-right mt-1 text-gray-400">{budget.percentage}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetProgress;