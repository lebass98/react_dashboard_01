import React from 'react';
import { MoreVertical } from 'lucide-react';
import MapOne from './MapOne';

const CustomersDemographic: React.FC = () => {
    return (
        <div className="bg-white dark:bg-[#1A222C] rounded-sm p-7 border border-[#E2E8F0] dark:border-[#2E3A47] transition-all duration-300 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-xl font-bold text-[#1C2434] dark:text-white mb-1">Customers Demographic</h3>
                    <p className="text-sm text-[#64748B] dark:text-[#8A99AF] font-medium">Number of customer based on country</p>
                </div>
                <button className="text-[#64748B] hover:text-[#1C2434] dark:hover:text-white mt-1">
                    <MoreVertical className="w-5 h-5" />
                </button>
            </div>

            <div className="flex-1 pb-2">
                {/* World Map Component */}
                <div className="w-full bg-[#F7F9FC] dark:bg-[#1A222C] border border-[#E2E8F0] dark:border-[#2E3A47] rounded-xl mb-8 flex justify-center items-center">
                    <MapOne />
                </div>

                {/* Country List Rows */}
                <div className="space-y-6">
                    {/* USA */}
                    <div className="flex items-center justify-between group">
                        <div className="flex items-center gap-4 w-[200px]">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border border-[#E2E8F0] dark:border-[#2E3A47] shrink-0">
                                {/* SVG Flag Placeholder for USA */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full object-cover">
                                    <path fill="#e31d1c" d="M0 0h512v512H0z" />
                                    <path fill="#f8f9fa" d="M0 58.18h512v58.18H0zm0 116.36h512v58.18H0zm0 116.36h512v58.18H0zm0 116.36h512v58.18H0z" />
                                    <path fill="#0b1b95" d="M0 0h244.36v290.9H0z" />
                                    <path fill="#f8f9fa" d="M34.9 34.9h23.2v23.2H34.9zm58.1 0h23.2v23.2H93.1zm58.1 0h23.2v23.2h-23.2zm-87.2 46.5h23.2v23.2H64zm58.1 0h23.2v23.2h-23.2zm58.1 0h23.2v23.2h-23.2zm-87.2 46.5h23.2v23.2H64zm58.1 0h23.2v23.2h-23.2zm58.1 0h23.2v23.2h-23.2zm-87.2 46.6h23.2v23.2H64zm58.1 0h23.2v23.2h-23.2zm58.1 0h23.2v23.2h-23.2zm-87.2 46.5h23.2v23.2H64zm58.1 0h23.2v23.2h-23.2zm58.1 0h23.2v23.2h-23.2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-[15px] font-bold text-[#1C2434] dark:text-white mb-0.5">USA</p>
                                <p className="text-[13px] text-[#64748B] dark:text-[#8A99AF] font-medium">2,379 Customers</p>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-end gap-5">
                            <div className="w-[120px] max-w-full h-2.5 bg-[#E2E8F0] dark:bg-[#2E3A47] rounded-full overflow-hidden flex">
                                <div className="h-full bg-[#3C50E0] rounded-full" style={{ width: '79%' }}></div>
                            </div>
                            <span className="text-[15px] font-bold text-[#1C2434] dark:text-white w-10 text-right">79%</span>
                        </div>
                    </div>

                    {/* France */}
                    <div className="flex items-center justify-between group">
                        <div className="flex items-center gap-4 w-[200px]">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border border-[#E2E8F0] dark:border-[#2E3A47] shrink-0">
                                {/* SVG Flag Placeholder for France */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full object-cover">
                                    <path fill="#f8f9fa" d="M0 0h512v512H0z" />
                                    <path fill="#0b1b95" d="M0 0h170.6v512H0z" />
                                    <path fill="#e31d1c" d="M341.3 0h170.7v512H341.3z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-[15px] font-bold text-[#1C2434] dark:text-white mb-0.5">France</p>
                                <p className="text-[13px] text-[#64748B] dark:text-[#8A99AF] font-medium">589 Customers</p>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-end gap-5">
                            <div className="w-[120px] max-w-full h-2.5 bg-[#E2E8F0] dark:bg-[#2E3A47] rounded-full overflow-hidden flex">
                                <div className="h-full bg-[#3C50E0] rounded-full" style={{ width: '23%' }}></div>
                            </div>
                            <span className="text-[15px] font-bold text-[#1C2434] dark:text-white w-10 text-right">23%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomersDemographic;
