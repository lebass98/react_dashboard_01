import React from 'react';
import { Calendar } from 'lucide-react';
import CustomDatePicker from './CustomDatePicker';

const StatisticsChart: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState('Revenue');
    const [dateRange, setDateRange] = React.useState<{ start: Date; end: Date }>({
        start: new Date(2024, 2, 29), // Mar 29
        end: new Date(2024, 2, 31)   // Mar 31
    });

    const formatDateShort = (date: Date) => {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    };

    // Chart data paths for each tab
    const chartData: { [key: string]: { line1: string; line2: string; fill1: string; fill2: string } } = {
        'Overview': {
            line1: "M 0 120 L 142 100 L 285 140 L 428 110 L 571 130 L 714 80 L 857 110 L 1000 70",
            line2: "M 0 220 L 142 240 L 285 210 L 428 230 L 571 200 L 714 220 L 857 180 L 1000 200",
            fill1: "M 0 120 L 142 100 L 285 140 L 428 110 L 571 130 L 714 80 L 857 110 L 1000 70 L 1000 300 L 0 300 Z",
            fill2: "M 0 220 L 142 240 L 285 210 L 428 230 L 571 200 L 714 220 L 857 180 L 1000 200 L 1000 300 L 0 300 Z"
        },
        'Sales': {
            line1: "M 0 180 L 142 160 L 285 170 L 428 140 L 571 150 L 714 120 L 857 130 L 1000 90",
            line2: "M 0 260 L 142 250 L 285 265 L 428 245 L 571 255 L 714 235 L 857 245 L 1000 220",
            fill1: "M 0 180 L 142 160 L 285 170 L 428 140 L 571 150 L 714 120 L 857 130 L 1000 90 L 1000 300 L 0 300 Z",
            fill2: "M 0 260 L 142 250 L 285 265 L 428 245 L 571 255 L 714 235 L 857 245 L 1000 220 L 1000 300 L 0 300 Z"
        },
        'Revenue': {
            line1: "M 0 84 L 142 72 L 285 96 L 428 108 L 571 90 L 714 102 L 857 96 L 1000 54",
            line2: "M 0 252 L 142 264 L 285 240 L 428 252 L 571 234 L 714 252 L 857 216 L 1000 180",
            fill1: "M 0 84 L 142 72 L 285 96 L 428 108 L 571 90 L 714 102 L 857 96 L 1000 54 L 1000 300 L 0 300 Z",
            fill2: "M 0 252 L 142 264 L 285 240 L 428 252 L 571 234 L 714 252 L 857 216 L 1000 180 L 1000 300 L 0 300 Z"
        }
    };

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
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-md text-[13px] font-bold transition-all ${activeTab === tab ? 'bg-white dark:bg-slate-700 text-[#1C2434] dark:text-white shadow-sm' : 'text-[#64748B] hover:text-[#1C2434] dark:hover:text-slate-200'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <CustomDatePicker 
                        isRange 
                        defaultRange={dateRange}
                        onChange={(val) => {
                            if (typeof val === 'object' && 'start' in val) {
                                setDateRange(val);
                            }
                        }}
                        customTrigger={
                            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800/50 border border-[#E2E8F0] dark:border-slate-700 rounded-md text-[13px] font-bold text-[#64748B] dark:text-slate-300 shadow-sm hover:bg-slate-50 transition-all">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDateShort(dateRange.start)} - {formatDateShort(dateRange.end)}</span>
                            </button>
                        }
                    />
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
                            d={chartData[activeTab].fill1}
                            fill="url(#gradient1)"
                            className="opacity-100 transition-all duration-500 ease-in-out"
                        />
                        {/* Fill for Line 2 */}
                        <path
                            d={chartData[activeTab].fill2}
                            fill="url(#gradient2)"
                            className="opacity-100 transition-all duration-500 ease-in-out"
                        />

                        {/* Line 1 (Upper) */}
                        <path
                            d={chartData[activeTab].line1}
                            fill="transparent"
                            stroke="#3C50E0"
                            strokeWidth="2.5"
                            className="opacity-100 transition-all duration-500 ease-in-out"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        />

                        {/* Line 2 (Lower) */}
                        <path
                            d={chartData[activeTab].line2}
                            fill="transparent"
                            stroke="#80CAEE"
                            strokeWidth="2.5"
                            className="opacity-100 transition-all duration-500 ease-in-out"
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
