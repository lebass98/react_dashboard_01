import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

interface CustomDatePickerProps {
  placeholder?: string;
  onChange?: (date: Date) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ 
  placeholder = "Select date",
  onChange 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
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

    // Next month's leading days to complete the 6x7 grid (42 cells always keeps the grid height stable)
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
    setSelectedDate(date);
    setIsOpen(false);
    if (onChange) onChange(date);
    // Align current month view with selected date's month
    setCurrentMonth(new Date(date.getFullYear(), date.getMonth(), 1));
  };

  const isSelected = (date: Date) => {
    if (!selectedDate) return false;
    return date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  };

  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Input Field */}
      <div 
        className="relative cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <input 
          type="text" 
          readOnly
          value={formatDate(selectedDate)}
          placeholder={placeholder} 
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all cursor-pointer bg-white text-slate-800 placeholder-slate-400" 
        />
        <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
      </div>

      {/* Calendar Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-[0_10px_40px_-10px_#00000020] border border-slate-100 p-5 z-50 w-[320px]">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-6 px-1">
            <button 
              onClick={handlePrevMonth}
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-600 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <h4 className="font-bold text-slate-800 text-[15px]">
              {formatMonthYear(currentMonth)}
            </h4>
            <button 
              onClick={handleNextMonth}
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-600 transition-colors"
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
              return (
                <div key={index} className="flex justify-center">
                  <button
                    onClick={() => handleDateSelect(dayObj.date)}
                    className={`
                      w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-semibold transition-all
                      ${selected 
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
                        : dayObj.isCurrentMonth
                          ? 'text-slate-800 hover:bg-slate-100'
                          : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
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
      )}
    </div>
  );
};

export default CustomDatePicker;
