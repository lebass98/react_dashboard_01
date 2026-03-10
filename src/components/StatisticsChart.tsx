import React from 'react';
import { Calendar } from 'lucide-react';

const StatisticsChart: React.FC = () => {
    return (
        <div className="bg-white dark:bg-[#1A222C] rounded-sm p-7 border border-[#E2E8F0] dark:border-[#2E3A47] transition-all duration-300 flex flex-col w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
                <div>
                    <h3 className="text-xl font-bold text-[#1C2434] dark:text-white mb-1">Statistics</h3>
                    <p className="text-sm text-[#64748B] dark:text-[#8A99AF] font-medium">Target you've set for each month</p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex space-x-1 p-1 bg-[#F7F9FC] dark:bg-[#1A222C]/50 rounded-md">
                        {['Overview', 'Sales', 'Revenue'].map((tab) => (
                            <button
                                key={tab}
                                className={`px-4 py-2 rounded-md text-[13px] font-bold transition-all ${tab === 'Revenue' ? 'bg-white dark:bg-slate-700 text-[#1C2434] dark:text-white shadow-sm' : 'text-[#64748B] hover:text-[#1C2434] dark:hover:text-slate-200'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800/50 border border-[#E2E8F0] dark:border-slate-700 rounded-md text-[13px] font-bold text-[#64748B] dark:text-slate-300 shadow-sm hover:bg-slate-50 transition-all">
                        <Calendar className="w-4 h-4" />
                        <span>Mar 29 - Mar 31</span>
                    </button>
                </div>
            </div>

            <div className="flex-1 relative min-h-[350px] mt-4 mb-10">
                {/* Y-axis labels and grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                    {[250, 200, 150, 100, 50, 0].map((val, i) => (
                        <div key={i} className="flex items-center w-full h-0">
                            <span className="text-[13px] font-medium text-[#64748B] dark:text-[#8A99AF] w-10 text-left shrink-0 pb-1">
                                {val}
                            </span>
                            <div className="flex-1 border-t border-[#E2E8F0] dark:border-[#2E3A47]"></div>
                        </div>
                    ))}
                </div>

                {/* Main Chart SVG */}
                <div className="absolute inset-0 left-10 pt-2">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 300">
                        {/* Area Gradients */}
                        <defs>
                            <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3C50E0" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#3C50E0" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#80CAEE" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#80CAEE" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Fill for Line 1 */}
                        <path
                            d="M 0 84 L 142 72 L 285 96 L 428 108 L 571 90 L 714 102 L 857 96 L 1000 54 L 1000 300 L 0 300 Z"
                            fill="url(#gradient1)"
                            className="opacity-100"
                        />
                        {/* Fill for Line 2 */}
                        <path
                            d="M 0 252 L 142 264 L 285 240 L 428 252 L 571 234 L 714 252 L 857 216 L 1000 180 L 1000 300 L 0 300 Z"
                            fill="url(#gradient2)"
                            className="opacity-100"
                        />

                        {/* Line 1 (Upper) */}
                        <path
                            d="M 0 84 L 142 72 L 285 96 L 428 108 L 571 90 L 714 102 L 857 96 L 1000 54"
                            fill="transparent"
                            stroke="#3C50E0"
                            strokeWidth="2.5"
                            className="opacity-100"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        />

                        {/* Line 2 (Lower) */}
                        <path
                            d="M 0 252 L 142 264 L 285 240 L 428 252 L 571 234 L 714 252 L 857 216 L 1000 180"
                            fill="transparent"
                            stroke="#80CAEE"
                            strokeWidth="2.5"
                            className="opacity-100"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                {/* X-axis labels */}
                <div className="absolute bottom-[-30px] left-10 right-0 h-4">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map((month, i) => (
                        <span key={i} className="absolute text-[13px] font-medium text-[#64748B] dark:text-[#8A99AF] -translate-x-1/2" style={{ left: `${(i / 7) * 100}%` }}>
                            {month}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatisticsChart;
