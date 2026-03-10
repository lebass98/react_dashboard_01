import React from 'react';
import { MoreVertical, ArrowDown, ArrowUp } from 'lucide-react';

const MonthlyTargetCard: React.FC = () => {
    return (
        <div className="bg-white dark:bg-[#1A222C] rounded-sm border border-[#E2E8F0] dark:border-[#2E3A47] transition-all duration-300 flex flex-col h-full overflow-hidden">
            <div className="px-7 pt-7 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-[#1C2434] dark:text-white mb-1">Monthly Target</h3>
                        <p className="text-sm text-[#64748B] dark:text-[#8A99AF] font-medium">Target you've set for each month</p>
                    </div>
                    <button className="text-[#64748B] hover:text-[#1C2434] dark:hover:text-white">
                        <MoreVertical className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center py-6">
                    {/* Semi-circle Gauge */}
                    <div className="relative w-64 mx-auto">
                        <svg className="w-full h-auto" viewBox="0 0 100 55">
                            {/* Background Path */}
                            <path
                                d="M 10 50 A 40 40 0 0 1 90 50"
                                fill="none"
                                stroke="#E2E8F0"
                                strokeWidth="6"
                                strokeLinecap="round"
                                className="dark:stroke-[#2E3A47]"
                            />
                            {/* Progress Path */}
                            <path
                                d="M 10 50 A 40 40 0 0 1 90 50"
                                fill="none"
                                stroke="#3C50E0"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeDasharray="94.93 125.66"
                            />
                        </svg>
                        <div className="absolute inset-x-0 bottom-2 flex flex-col items-center justify-end">
                            <h4 className="text-[34px] font-bold text-[#1C2434] dark:text-white leading-none mb-2">75.55%</h4>
                            <div className="flex items-center text-[12px] font-bold text-[#10B981] bg-[#10B981]/10 px-3 py-[3px] rounded-full">
                                <span className="mr-0.5">+</span>
                                <span>10%</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-[14px] text-[#64748B] dark:text-[#8A99AF] text-center max-w-[300px] mt-8 leading-relaxed font-medium">
                        You earn <span className="text-[#1C2434] dark:text-white font-bold">$3287</span> today, it's higher than last month. Keep up your good work!
                    </p>
                </div>
            </div>

            <div className="mt-auto bg-[#F7F9FC] dark:bg-[#1A222C]/50 px-7 py-6 grid grid-cols-3 gap-0">
                <div className="text-center">
                    <p className="text-xs font-bold text-[#64748B] dark:text-[#8A99AF] uppercase tracking-wider mb-2">Target</p>
                    <div className="flex items-center justify-center gap-1.5">
                        <span className="text-base font-bold text-[#1C2434] dark:text-white">$20K</span>
                        <ArrowDown className="w-4 h-4 text-[#F64E60]" />
                    </div>
                </div>
                <div className="text-center border-x border-[#E2E8F0] dark:border-[#2E3A47]">
                    <p className="text-xs font-bold text-[#64748B] dark:text-[#8A99AF] uppercase tracking-wider mb-2">Revenue</p>
                    <div className="flex items-center justify-center gap-1.5">
                        <span className="text-base font-bold text-[#1C2434] dark:text-white">$20K</span>
                        <ArrowUp className="w-4 h-4 text-[#10B981]" />
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-xs font-bold text-[#64748B] dark:text-[#8A99AF] uppercase tracking-wider mb-2">Today</p>
                    <div className="flex items-center justify-center gap-1.5">
                        <span className="text-base font-bold text-[#1C2434] dark:text-white">$20K</span>
                        <ArrowUp className="w-4 h-4 text-[#10B981]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonthlyTargetCard;
