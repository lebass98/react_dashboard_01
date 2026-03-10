import React from 'react';
import { Calendar } from 'lucide-react';

const StatisticsChart: React.FC = () => {
    return (
        <div className="bg-white dark:bg-[#1A222C] rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-300 flex flex-col w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">Statistics</h3>
                    <p className="text-sm text-slate-400 font-medium">Target you've set for each month</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <div className="flex p-1 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                        {['Overview', 'Sales', 'Revenue'].map((tab) => (
                            <button
                                key={tab}
                                className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${tab === 'Overview' ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 shadow-sm hover:bg-slate-50 transition-all">
                        <Calendar className="w-4 h-4" />
                        <span>Mar 4 - Mar 10</span>
                    </button>
                </div>
            </div>

            <div className="flex-1 relative min-h-[300px] mt-4">
                {/* Y-axis labels and grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                    {[250, 200, 150, 100, 50, 0].map((val, i) => (
                        <div key={i} className="flex items-center w-full h-0">
                            <span className="text-[11px] font-bold text-slate-400 w-8 text-left shrink-0">
                                {val}
                            </span>
                            <div className="flex-1 border-t border-slate-50 dark:border-slate-800"></div>
                        </div>
                    ))}
                </div>

                {/* Main Chart SVG */}
                <div className="absolute inset-0 left-8 pt-2">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 300">
                        {/* Area Gradients */}
                        <defs>
                            <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3C50E0" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#3C50E0" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Line 1 (Upper) */}
                        <path
                            d="M 0 120 Q 250 130 500 125 Q 750 110 1000 125"
                            fill="transparent"
                            stroke="#3C50E0"
                            strokeWidth="2.5"
                            className="opacity-100"
                        />
                        {/* Fill for Line 1 */}
                        <path
                            d="M 0 120 Q 250 130 500 125 Q 750 110 1000 125 L 1000 300 L 0 300 Z"
                            fill="url(#gradient1)"
                            className="opacity-50"
                        />

                        {/* Line 2 (Lower) */}
                        <path
                            d="M 0 250 Q 250 260 500 270 Q 750 255 1000 265"
                            fill="transparent"
                            stroke="#80CAEE"
                            strokeWidth="1.5"
                            className="opacity-100"
                        />
                    </svg>
                </div>

                {/* X-axis labels */}
                <div className="absolute bottom-[-30px] left-8 right-0 flex justify-between px-2">
                    {['Mar', 'Apr', 'May', 'Jun'].map((month, i) => (
                        <span key={i} className="text-xs font-bold text-slate-400">{month}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatisticsChart;
