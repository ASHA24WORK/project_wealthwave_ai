import React from 'react';
import { Plane, Smartphone, ShieldCheck } from 'lucide-react';
import { Plus } from 'lucide-react';

interface SavingsGoal {
  id: string;
  name: string;
  icon: React.ReactNode;
  current: number;
  target: number;
  percentage: number;
  date: string;
  color: string;
}

interface SavingsGoalsProps {
  goals: SavingsGoal[];
}

const SavingsGoals: React.FC<SavingsGoalsProps> = ({ goals }) => {
  return (
    <div className="dark-card p-6 animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-200">Savings Goals</h2>
        <button className="flex items-center text-sm text-primary hover:text-primary-light bg-primary/10 rounded-lg px-3 py-1">
          <Plus size={16} className="mr-1" />
          <span>Add New</span>
        </button>
      </div>
      
      <div className="space-y-6">
        {goals.map((goal) => (
          <div key={goal.id} className="animate-slideIn" style={{ animationDelay: `${goals.indexOf(goal) * 100}ms` }}>
            <div className="flex items-center mb-2">
              <div className={`w-10 h-10 rounded-full mr-3 flex items-center justify-center bg-opacity-20`} style={{ backgroundColor: `${goal.color}30` }}>
                <span style={{ color: goal.color }}>{goal.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <p className="font-medium text-gray-200">{goal.name}</p>
                  <p className="text-right text-gray-200 font-medium">{goal.percentage}%</p>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-value" 
                    style={{ 
                      width: `${goal.percentage}%`,
                      backgroundColor: goal.color,
                    }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1">
                  <p className="text-xs text-gray-400">${goal.current} of ${goal.target}</p>
                  <p className="text-xs text-gray-400">{goal.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavingsGoals;