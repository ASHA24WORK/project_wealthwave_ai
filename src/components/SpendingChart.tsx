import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChevronDown } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

interface SpendingCategory {
  name: string;
  percentage: number;
  color: string;
}

interface SpendingChartProps {
  categories: SpendingCategory[];
}

const SpendingChart: React.FC<SpendingChartProps> = ({ categories }) => {
  const data = {
    labels: categories.map(cat => cat.name),
    datasets: [
      {
        data: categories.map(cat => cat.percentage),
        backgroundColor: categories.map(cat => cat.color),
        borderColor: 'transparent',
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      }
    },
    cutout: '70%',
  };

  return (
    <div className="dark-card p-6 animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-200">Spending Overview</h2>
        <button className="flex items-center text-sm text-gray-400 bg-gray-800 rounded-lg px-3 py-1">
          <span>This Month</span>
          <ChevronDown size={16} className="ml-2" />
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-48 h-48 relative mx-auto md:mx-0">
          <Doughnut data={data} options={options} />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-6 md:mt-0 md:ml-8 w-full">
          {categories.map((category) => (
            <div key={category.name} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: category.color }}
              ></div>
              <div>
                <p className="text-sm text-gray-300">{category.name}</p>
                <p className="text-sm font-medium text-white">{category.percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpendingChart;