import React from 'react';
import {
  Menu,
  Search,
  Filter,
  Plus,
  Moon,
  Sun,
  Bell,
  Settings
} from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, isDarkMode, toggleDarkMode, onLogout }) => {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-[280px] h-[72px] lg:h-[80px] px-4 sm:px-6 lg:px-8 flex items-center justify-between bg-white dark:bg-[#1A222C] border-b border-slate-200 dark:border-slate-800 z-10 transition-all duration-300">
      {/* Left side: Title and Greetings */}
      <div className="flex items-center gap-4 lg:gap-6">
        <button
          onClick={onMenuClick}
          className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white lg:hidden p-1 -ml-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div>
          <h2 className="text-lg sm:text-[22px] font-bold text-slate-800 dark:text-white leading-tight">Dashboard</h2>
          <p className="hidden sm:block text-[13px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Welcome back, Alex! Here's what's happening today.</p>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-xl px-4 lg:px-12 hidden md:block">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-[18px] w-[18px] text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-10 py-2 sm:py-2.5 bg-slate-100 dark:bg-slate-800/50 border-none rounded-full text-sm font-medium placeholder-slate-400 dark:placeholder-slate-500 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:bg-white dark:focus:bg-slate-800 transition-all outline-none"
            placeholder="Search anything..."
          />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
            <button className="text-slate-400 hover:text-indigo-500 transition-colors">
              <Filter className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Right side: Actions & Profile */}
      <div className="flex items-center gap-2 sm:gap-4">
        <button className="hidden sm:flex items-center gap-1.5 bg-indigo-500 hover:bg-indigo-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-sm transition-colors shadow-sm shadow-indigo-200">
          <Plus className="w-4 h-4" />
          New
        </button>

        <div className="flex items-center gap-0.5 sm:gap-1 mx-1 sm:mx-2">
          <button
            onClick={toggleDarkMode}
            className="hidden sm:block p-1.5 sm:p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <div className="relative">
            <button className="p-1.5 sm:p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all">
              <Bell className="w-5 h-5" />
            </button>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-white dark:border-[#1A222C]"></span>
          </div>

          <button className="hidden sm:block p-1.5 sm:p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* Profile block */}
        <div
          onClick={onLogout}
          className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4 border-l border-slate-200 dark:border-slate-800 cursor-pointer hover:opacity-80 group relative"
        >
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Alex Johnson"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white dark:border-slate-800 shadow-sm"
          />
          <div className="hidden md:block flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">Alex Johnson</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium group-hover:text-red-500 transition-colors">Logout</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
