import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import RevenueChart from './components/RevenueChart';
import SalesChart from './components/SalesChart';
import RecentOrders from './components/RecentOrders';
import ActivityFeed from './components/ActivityFeed';
import FormElements from './components/FormElements';
import FormLayout from './components/FormLayout';
import { DollarSign, Users, ShoppingCart, Eye } from 'lucide-react';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const renderContent = () => {
    if (currentPage === 'form-elements') {
      return <FormElements />;
    }
    if (currentPage === 'form-layout') {
      return <FormLayout />;
    }

    return (
      <div className="space-y-6">
        {/* Top Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <StatCard 
            title="Total Revenue" 
            value="$124,563" 
            icon={<DollarSign className="w-5 h-5" />}
            iconBgColor="bg-emerald-50"
            iconColor="text-emerald-500"
            trend={12.5}
            trendText="vs last month"
            progress={80}
            progressColor="bg-emerald-500"
          />
          <StatCard 
            title="Active Users" 
            value="8,549" 
            icon={<Users className="w-5 h-5" />}
            iconBgColor="bg-blue-50"
            iconColor="text-blue-500"
            trend={8.2}
            trendText="vs last month"
            progress={65}
            progressColor="bg-gradient-to-r from-indigo-500 to-purple-500"
          />
          <StatCard 
            title="Total Orders" 
            value="2,847" 
            icon={<ShoppingCart className="w-5 h-5" />}
            iconBgColor="bg-purple-50"
            iconColor="text-purple-500"
            trend={15.3}
            trendText="vs last month"
            progress={90}
            progressColor="bg-gradient-to-r from-fuchsia-500 to-pink-500"
          />
          <StatCard 
            title="Page Views" 
            value="45,892" 
            icon={<Eye className="w-5 h-5" />}
            iconBgColor="bg-amber-50"
            iconColor="text-amber-500"
            trend={-2.1}
            trendText="vs last month"
            progress={45}
            progressColor="bg-gradient-to-r from-orange-500 to-red-500"
          />
        </div>

        {/* Middle Section: Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          <div className="lg:col-span-2 overflow-x-auto">
            <div className="min-w-[600px] h-full"> 
              <RevenueChart />
            </div>
          </div>
          <div className="lg:col-span-1">
            <SalesChart />
          </div>
        </div>

        {/* Bottom Section: Tables and Feeds */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6 pb-8">
          <div className="xl:col-span-2 overflow-x-auto">
            <RecentOrders />
          </div>
          <div className="xl:col-span-1">
            <ActivityFeed />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900 font-sans transition-colors duration-300">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={closeSidebar} 
        onPageChange={setCurrentPage}
        currentPage={currentPage}
      />
      
      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      <div className="flex-1 lg flex flex-col min-h-screen overflow-hidden transition-all duration-300">
        <Header 
          onMenuClick={toggleSidebar} 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode} 
        />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 pt-[100px] lg:pt-[112px] custom-scrollbar">
          <div className="w-full">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
