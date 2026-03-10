import React from 'react';
import { MoreVertical } from 'lucide-react';

const CustomersDemographic: React.FC = () => {
    return (
        <div className="bg-white dark:bg-[#1A222C] rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-300 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">Customers Demographic</h3>
                    <p className="text-sm text-slate-400 font-medium">Number of customer based on country</p>
                </div>
                <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                    <MoreVertical className="w-5 h-5" />
                </button>
            </div>

            <div className="flex-1 py-8">
                {/* Simplified World Map PlaceHolder */}
                <div className="w-full h-40 bg-slate-50 dark:bg-slate-800/50 rounded-2xl relative overflow-hidden mb-8">
                    <svg className="w-full h-full text-slate-200 dark:text-slate-700 opacity-50" viewBox="0 0 400 200" fill="currentColor">
                        <path d="M50 80h20l10 20h20l10-20h30v40H50z M200 60h40l10 30h30v50h-80z M300 100h50v40h-50z" />
                    </svg>
                    {/* Pins */}
                    <div className="absolute top-[85px] left-[65px] w-2 h-2 bg-[#3C50E0] rounded-full border-2 border-white shadow-sm"></div>
                    <div className="absolute top-[65px] left-[185px] w-2 h-2 bg-[#3C50E0] rounded-full border-2 border-white shadow-sm"></div>
                    <div className="absolute top-[105px] left-[205px] w-2 h-2 bg-[#3C50E0] rounded-full border-2 border-white shadow-sm"></div>
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-6 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700">
                                    <span className="text-[10px] font-bold">🇺🇸</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800 dark:text-white leading-tight">USA</p>
                                    <p className="text-xs text-slate-400 font-medium">2,379 Customers</p>
                                </div>
                            </div>
                            <span className="text-sm font-bold text-slate-800 dark:text-white">79%</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-[#3C50E0] rounded-full" style={{ width: '79%' }}></div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-6 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700">
                                    <span className="text-[10px] font-bold">🇫🇷</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800 dark:text-white leading-tight">France</p>
                                    <p className="text-xs text-slate-400 font-medium">589 Customers</p>
                                </div>
                            </div>
                            <span className="text-sm font-bold text-slate-800 dark:text-white">23%</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-[#80CAEE] rounded-full" style={{ width: '23%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomersDemographic;
