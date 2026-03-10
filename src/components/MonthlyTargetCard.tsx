import React from 'react';
import { MoreVertical, ArrowDown, ArrowUp } from 'lucide-react';

const MonthlyTargetCard: React.FC = () => {
    return (
        <div className="bg-white dark:bg-[#1A222C] rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-300 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">Monthly Target</h3>
                    <p className="text-sm text-slate-400 font-medium">Target you've set for each month</p>
                </div>
                <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                    <MoreVertical className="w-5 h-5" />
                </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center relative py-6">
                {/* Semi-circle Gauge */}
                <div className="relative w-48 h-24 overflow-hidden">
                    <svg className="w-48 h-48 transform -rotate-180" viewBox="0 0 100 100">
                        {/* Background Path */}
                        <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="transparent"
                            stroke="#E2E8F0"
                            strokeWidth="8"
                            strokeDasharray="125.6 251.2"
                            className="dark:stroke-slate-800"
                        />
                        {/* Progress Path */}
                        <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="transparent"
                            stroke="#3C50E0"
                            strokeWidth="8"
                            strokeDasharray="94.8 251.2"
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
                        <span className="text-3xl font-extrabold text-[#2F3367] dark:text-white">75.55%</span>
                        <div className="flex items-center text-xs font-bold text-emerald-500 mt-1">
                            <span className="mr-0.5">+</span>
                            <span>10%</span>
                        </div>
                    </div>
                </div>

                <p className="text-sm text-slate-400 text-center max-w-[200px] mt-6 leading-relaxed">
                    You earn <span className="text-[#2F3367] dark:text-white font-bold">$3287</span> today, it's higher than last month. Keep up your good work!
                </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-50 dark:border-slate-800">
                <div className="text-center">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Target</p>
                    <div className="flex items-center justify-center gap-1">
                        <span className="text-base font-bold text-[#2F3367] dark:text-white">$20K</span>
                        <ArrowDown className="w-4 h-4 text-red-500" />
                    </div>
                </div>
                <div className="text-center border-x border-slate-50 dark:border-slate-800">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Revenue</p>
                    <div className="flex items-center justify-center gap-1">
                        <span className="text-base font-bold text-[#2F3367] dark:text-white">$20K</span>
                        <ArrowUp className="w-4 h-4 text-emerald-500" />
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Today</p>
                    <div className="flex items-center justify-center gap-1">
                        <span className="text-base font-bold text-[#2F3367] dark:text-white">$20K</span>
                        <ArrowUp className="w-4 h-4 text-emerald-500" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonthlyTargetCard;
