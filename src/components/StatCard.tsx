import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: number;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  trend,
  className = "",
}) => {
  const isPositive = trend >= 0;

  return (
    <div className={`bg-white dark:bg-[#1A222C] rounded-sm p-7 border border-[#E2E8F0] dark:border-[#2E3A47] transition-all duration-300 ${className}`}>
      <div className={`w-11.5 h-11.5 rounded-full bg-[#EFF4FB] dark:bg-[#2E3A47] flex items-center justify-center`}>
        {icon}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-2xl font-bold text-[#1C2434] dark:text-white mb-1 leading-none">{value}</h4>
          <span className="text-sm font-medium text-[#64748B] dark:text-[#8A99AF] leading-none">{title}</span>
        </div>

        <span className={`flex items-center gap-1 text-sm font-semibold px-2 py-0.5 rounded-md ${isPositive ? 'text-[#10B981] bg-[#10B981]/10' : 'text-[#F64E60] bg-[#F64E60]/10'}`}>
          {isPositive ? <ArrowUp className="w-3.5 h-3.5" /> : <ArrowDown className="w-3.5 h-3.5" />}
          {Math.abs(trend)}%
        </span>
      </div>
    </div>
  );
};

export default StatCard;
