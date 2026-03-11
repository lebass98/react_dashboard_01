import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

interface CustomDatePickerProps {
  placeholder?: string;
  onChange?: (date: Date | { start: Date; end: Date }) => void;
  isRange?: boolean;
  defaultRange?: { start: Date; end: Date };
  customTrigger?: React.ReactNode;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ 
  placeholder = "Select date",
  onChange,
  isRange = false,
  defaultRange,
  customTrigger
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>(
    defaultRange ? { start: defaultRange.start, end: defaultRange.end } : { start: null, end: null }
  );
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const dropdownRef = useRef<HTMLDivElement>(null);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const daysInPrevMonth = getDaysInMonth(year, month - 1);

    const days = [];

    // Previous month's trailing days
    for (let i = 0; i < firstDay; i++) {
       days.push({
        day: daysInPrevMonth - firstDay + i + 1,
        isCurrentMonth: false,
        date: new Date(year, month - 1, daysInPrevMonth - firstDay + i + 1)
      });
    }

    // Current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i)
      });
    }

    // Next month's leading days to complete the 6x7 grid
    const remainingCells = 42 - days.length;
    for (let i = 1; i <= remainingCells; i++) {
        days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i)
      });
    }

    return days;
  };

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateSelect = (date: Date) => {
    if (isRange) {
      if (!range.start || (range.start && range.end)) {
        setRange({ start: date, end: null });
      } else {
        const start = range.start;
        const end = date;
        if (end < start) {
          setRange({ start: end, end: start });
          if (onChange) onChange({ start: end, end: start });
        } else {
          setRange({ start, end });
          if (onChange) onChange({ start, end });
        }
        setIsOpen(false);
      }
    } else {
      setSelectedDate(date);
      setIsOpen(false);
      if (onChange) onChange(date);
    }
    setCurrentMonth(new Date(date.getFullYear(), date.getMonth(), 1));
  };

  const isSelected = (date: Date) => {
    if (isRange) {
      if (!range.start) return false;
      const d = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
      const s = new Date(range.start.getFullYear(), range.start.getMonth(), range.start.getDate()).getTime();
      if (range.end) {
        const e = new Date(range.end.getFullYear(), range.end.getMonth(), range.end.getDate()).getTime();
        return d === s || d === e;
      }
      return d === s;
    }
    if (!selectedDate) return false;
    return date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  };

  const isInRange = (date: Date) => {
    if (!isRange || !range.start || !range.end) return false;
    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
    const s = new Date(range.start.getFullYear(), range.start.getMonth(), range.start.getDate()).getTime();
    const e = new Date(range.end.getFullYear(), range.end.getMonth(), range.end.getDate()).getTime();
    return d > s && d < e;
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const getLabel = () => {
    if (isRange) {
      if (range.start && range.end) {
        return `${formatDate(range.start)} - ${formatDate(range.end)}`;
      }
      if (range.start) return `${formatDate(range.start)} - ...`;
      return placeholder;
    }
    return selectedDate ? formatDate(selectedDate) : placeholder;
  };

  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Input Field / Trigger */}
      <div 
        className="relative cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {customTrigger ? customTrigger : (
          <div className="relative">
            <input 
              type="text" 
              readOnly
              value={isRange ? (range.start && range.end ? `${formatDate(range.start)} - ${formatDate(range.end)}` : "") : (selectedDate ? formatDate(selectedDate) : "")}
              placeholder={placeholder} 
              className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900/50 outline-none transition-all cursor-pointer bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500" 
            />
            <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        )}
      </div>

      {/* Calendar Dropdown / Modal */}
      {isOpen && (
        <>
          {/* Mobile Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-900/50 z-[99] sm:hidden backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <div className={`
            bg-white dark:bg-[#1A222C] rounded-xl shadow-[0_10px_40px_-10px_#00000020] dark:shadow-none border border-slate-100 dark:border-slate-800 p-5 z-[100] 
            transition-colors duration-300
            /* Mobile: Fixed Center Modal */
            fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[320px]
            /* Desktop: Absolute Dropdown */
            sm:absolute sm:top-full sm:left-auto sm:right-0 sm:mt-2 sm:translate-x-0 sm:translate-y-0 sm:w-[320px] 
            ${!customTrigger ? 'sm:left-0 sm:right-auto' : ''}
          `}>
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6 px-1">
              <button 
                type="button"
                onClick={handlePrevMonth}
                className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <h4 className="font-bold text-slate-800 dark:text-white text-[15px]">
                {formatMonthYear(currentMonth)}
              </h4>
              <button 
                type="button"
                onClick={handleNextMonth}
                className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 mb-4">
              {daysOfWeek.map(day => (
                <div key={day} className="text-center text-[13px] font-semibold text-slate-500">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-y-2">
              {generateCalendarDays().map((dayObj, index) => {
                const selected = isSelected(dayObj.date);
                const inRange = isInRange(dayObj.date);
                return (
                  <div key={index} className="flex justify-center">
                    <button
                      type="button"
                      onClick={() => handleDateSelect(dayObj.date)}
                      className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-semibold transition-all
                        ${selected 
                          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none' 
                          : inRange
                            ? 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300'
                            : dayObj.isCurrentMonth
                              ? 'text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                              : 'text-slate-400 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-600 dark:hover:text-slate-300'
                        }
                      `}
                    >
                      {dayObj.day}
                    </button>
                  </div>
                );
              })}
            </div>

          </div>
        </>
      )}
    </div>
  );
};

export default CustomDatePicker;
