import React from 'react';

const RevenueChart: React.FC = () => {
  // Mock data for the chart
  const data = [
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
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-slate-100 h-full flex flex-col">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-lg font-bold text-slate-800">Revenue Overview</h3>
          <p className="text-sm text-slate-500 font-medium mt-0.5">Monthly revenue and expenses</p>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
            <span className="text-slate-500">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
            <span className="text-slate-500">Expenses</span>
          </div>
        </div>
      </div>

      <div className="flex-1 relative mt-4">
        {/* Y-axis grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[100, 75, 50, 25, 0].map((val, i) => (
            <div key={i} className="flex items-center w-full h-0">
              <span className="text-xs text-slate-400 w-10 text-right pr-4 shrink-0 font-medium">
                ${val}k
              </span>
              {i !== 4 && <div className="flex-1 border-t border-slate-100"></div>}
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
              <span className="mt-4 text-xs font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
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
