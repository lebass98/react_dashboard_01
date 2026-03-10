import React from 'react';
import { MoreVertical } from 'lucide-react';

const MonthlySalesChart: React.FC = () => {
    const data = [
        { month: 'Jan', value: 35 },
        { month: 'Feb', value: 85 },
        { month: 'Mar', value: 45 },
        { month: 'Apr', value: 65 },
        { month: 'May', value: 40 },
        { month: 'Jun', value: 45 },
        { month: 'Jul', value: 65 },
        { month: 'Aug', value: 25 },
        { month: 'Sep', value: 50 },
        { month: 'Oct', value: 90 },
        { month: 'Nov', value: 60 },
        { month: 'Dec', value: 25 },
    ];

    return (
        <div className="bg-white dark:bg-[#1A222C] rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-300 flex flex-col h-full">
            <div className="flex justify-between items-start mb-10">
                <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">Monthly Sales</h3>
                </div>
                <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                    < MoreVertical className="w-5 h-5" />
                </button>
            </div>

            <div className="flex-1 relative min-h-[220px]">
                {/* Y-axis labels */}
                <div className="absolute inset-y-0 left-0 flex flex-col justify-between text-xs font-bold text-slate-400 pr-4">
                    <span>400</span>
                    <span>300</span>
                    <span>200</span>
                    <span>100</span>
                    <span>0</span>
                </div>

                {/* Bars and grid lines */}
                <div className="ml-10 h-full flex flex-col">
                    <div className="flex-1 relative flex items-end justify-between px-2">
                        {/* Grid lines */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-full border-t border-slate-50 dark:border-slate-800"></div>
                            ))}
                        </div>

                        {/* Bars */}
                        {data.map((item, idx) => (
                            <div key={idx} className="relative flex flex-col items-center flex-1 group">
                                <div
                                    className="w-full max-w-[14px] bg-[#3C50E0] rounded-sm hover:bg-[#3C50E0]/90 transition-all cursor-pointer relative z-10"
                                    style={{ height: `${item.value}%` }}
                                >
                                    <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-20 transition-opacity">
                                        {item.value * 4} sales
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* X-axis labels */}
                    <div className="flex justify-between mt-6 px-1">
                        {data.map((item, idx) => (
                            <span key={idx} className="text-[11px] font-bold text-slate-400 flex-1 text-center">
                                {item.month}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonthlySalesChart;
