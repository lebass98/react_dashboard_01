import React from 'react';
import { MoreVertical } from 'lucide-react';

const MonthlySalesChart: React.FC = () => {
    // The data roughly matches the bars shown in the provided image.
    // Assuming max value is 400, the percentages represent (value / 400) * 100
    const data = [
        { month: 'Jan', value: 40 }, // ~160
        { month: 'Feb', value: 95 }, // ~380
        { month: 'Mar', value: 48 }, // ~190
        { month: 'Apr', value: 72 }, // ~290
        { month: 'May', value: 45 }, // ~180
        { month: 'Jun', value: 47 }, // ~188
        { month: 'Jul', value: 70 }, // ~280
        { month: 'Aug', value: 25 }, // ~100
        { month: 'Sep', value: 52 }, // ~208
        { month: 'Oct', value: 96 }, // ~384
        { month: 'Nov', value: 68 }, // ~272
        { month: 'Dec', value: 26 }, // ~104
    ];

    return (
        <div className="bg-white dark:bg-[#1A222C] rounded-sm p-7 border border-[#E2E8F0] dark:border-[#2E3A47] transition-all duration-300 flex flex-col h-full">
            <div className="flex justify-between items-start mb-10">
                <div>
                    <h3 className="text-xl font-bold text-[#1C2434] dark:text-white">Monthly Sales</h3>
                </div>
                <button className="text-[#64748B] hover:text-[#1C2434] dark:hover:text-white">
                    <MoreVertical className="w-5 h-5" />
                </button>
            </div>

            <div className="flex-1 relative min-h-[260px]">
                {/* Y-axis labels */}
                <div className="absolute inset-y-0 left-0 flex flex-col justify-between text-[13px] font-medium text-[#64748B] dark:text-[#8A99AF] pr-4 pb-8">
                    <span>400</span>
                    <span>300</span>
                    <span>200</span>
                    <span>100</span>
                    <span>0</span>
                </div>

                {/* Bars and grid lines */}
                <div className="ml-12 h-full flex flex-col">
                    <div className="flex-1 relative flex items-end justify-between px-2 pb-8">
                        {/* Horizontal Grid lines */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-full border-t border-[#E2E8F0] dark:border-[#2E3A47]"></div>
                            ))}
                        </div>

                        {/* Bars */}
                        {data.map((item, idx) => (
                            <div key={idx} className="relative flex flex-col items-center flex-1 group z-10 h-full justify-end">
                                <div
                                    className="w-full max-w-[16px] bg-[#3C50E0] rounded-t-sm hover:bg-[#3C50E0]/90 transition-all cursor-pointer relative"
                                    style={{ height: `${item.value}%` }}
                                >
                                    {/* Tooltip on hover */}
                                    <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1C2434] text-white text-[11px] font-medium py-1 px-2.5 rounded whitespace-nowrap z-20 transition-opacity pointer-events-none">
                                        {item.value * 4} sales
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-12 right-0 flex justify-between px-2">
                        {data.map((item, idx) => (
                            <span key={idx} className="text-[13px] font-medium text-[#64748B] dark:text-[#8A99AF] flex-1 text-center">
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
