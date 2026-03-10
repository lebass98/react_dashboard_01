import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
  trend: number;
  trendText: string;
  progress: number;
  progressColor: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  iconBgColor,
  iconColor,
  trend,
  trendText,
  progress,
  progressColor,
}) => {
  const isPositive = trend >= 0;

  return (
    <div className="bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 shadow-sm border border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${iconBgColor} dark:bg-opacity-10 flex items-center justify-center ${iconColor}`}>
          {icon}
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white leading-none mb-1">{value}</span>
          <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">{title}</span>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2 mb-4">
          <div className={`flex items-center text-xs font-bold px-1.5 py-0.5 rounded ${isPositive ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400' : 'text-red-600 bg-red-50 dark:bg-red-500/10 dark:text-red-400'}`}>
            {isPositive ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
            {Math.abs(trend)}%
          </div>
          <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">{trendText}</span>
        </div>
        
        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full ${progressColor}`} 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
