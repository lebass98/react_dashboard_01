import React from 'react';

const RevenueChart: React.FC = () => {
  const [activePeriod, setActivePeriod] = React.useState('Month');

  // Mock data for the chart with period variations
  const periodData: { [key: string]: { month: string; revenue: number; expenses: number }[] } = {
    'Week': [
      { month: 'Mon', revenue: 65, expenses: 42 },
      { month: 'Tue', revenue: 72, expenses: 48 },
      { month: 'Wed', revenue: 58, expenses: 35 },
      { month: 'Thu', revenue: 81, expenses: 52 },
      { month: 'Fri', revenue: 75, expenses: 49 },
      { month: 'Sat', revenue: 87, expenses: 58 },
      { month: 'Sun', revenue: 92, expenses: 68 },
    ],
    'Month': [
      { month: 'Jan', revenue: 45, expenses: 32 },
      { month: 'Feb', revenue: 52, expenses: 38 },
      { month: 'Mar', revenue: 48, expenses: 35 },
      { month: 'Apr', revenue: 61, expenses: 42 },
      { month: 'May', revenue: 55, expenses: 39 },
      { month: 'Jun', revenue: 67, expenses: 48 },
      { month: 'Jul', revenue: 72, expenses: 48 },
      { month: 'Aug', revenue: 69, expenses: 45 },
      { month: 'Sep', revenue: 78, expenses: 52 },
      { month: 'Oct', revenue: 74, expenses: 50 },
      { month: 'Nov', revenue: 82, expenses: 55 },
      { month: 'Dec', revenue: 89, expenses: 58 },
    ],
    'Year': [
      { month: '2021', revenue: 75, expenses: 52 },
      { month: '2022', revenue: 82, expenses: 58 },
      { month: '2023', revenue: 95, expenses: 65 },
    ]
  };

  const data = periodData[activePeriod];

  return (
    <div className="bg-white dark:bg-[#1A222C] rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 h-full flex flex-col transition-colors duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">Revenue Overview</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{activePeriod}ly revenue analysis</p>
        </div>
        <div className="flex items-center gap-2">
          {['Week', 'Month', 'Year'].map((period) => (
            <button 
              key={period}
              onClick={() => setActivePeriod(period)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${period === activePeriod ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 relative mt-4">
        {/* Y-axis grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[100, 75, 50, 25, 0].map((val, i) => (
            <div key={i} className="flex items-center w-full h-0">
              <span className="text-xs text-slate-400 dark:text-slate-500 w-10 text-right pr-4 shrink-0 font-medium">
                ${val}k
              </span>
              {i !== 4 && <div className="flex-1 border-t border-slate-100 dark:border-slate-800"></div>}
            </div>
          ))}
        </div>

        {/* Bars Container */}
        <div className="absolute inset-x-0 bottom-0 top-0 left-10 flex justify-between items-end pb-[1px]">
          {data.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1 group">
              <div className="flex items-end justify-center w-full gap-1 h-[220px]">
                {/* Revenue Bar */}
                <div 
                  className="w-full max-w-[12px] bg-gradient-to-t from-indigo-500 to-purple-400 rounded-t-sm group-hover:opacity-80 transition-opacity"
                  style={{ height: `${item.revenue}%` }}
                ></div>
                {/* Expenses Bar */}
                <div 
                  className="w-full max-w-[12px] bg-slate-400 rounded-t-sm group-hover:opacity-80 transition-opacity"
                  style={{ height: `${item.expenses}%` }}
                ></div>
              </div>
              <span className="mt-4 text-xs font-semibold text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors">
                {item.month}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
