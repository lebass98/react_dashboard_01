import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import RecentOrders from './components/RecentOrders';
import FormElements from './components/FormElements';
import FormLayout from './components/FormLayout';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import MonthlyTargetCard from './components/MonthlyTargetCard';
import MonthlySalesChart from './components/MonthlySalesChart';
import StatisticsChart from './components/StatisticsChart';
import CustomersDemographic from './components/CustomersDemographic';
import TaskList from './components/TaskList';
import TaskKanban from './components/TaskKanban';
import BasicTables from './components/BasicTables';
import FAQ from './components/FAQ';
import Integrations from './components/Integrations';
import Calendar from './components/Calendar';
import { Users, Package } from 'lucide-react';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
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

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  const renderContent = () => {
    if (currentPage === 'form-elements') {
      return <FormElements />;
    }
    if (currentPage === 'form-layout') {
      return <FormLayout />;
    }
    if (currentPage === 'task-list') {
      return <TaskList />;
    }
    if (currentPage === 'task-kanban') {
      return <TaskKanban />;
    }
    if (currentPage === 'basic-tables') {
      return <BasicTables />;
    }
    if (currentPage === 'faq') {
      return <FAQ />;
    }
    if (currentPage === 'integrations') {
      return <Integrations />;
    }
    if (currentPage === 'calendar') {
      return <Calendar />;
    }

    return (
      <div className="space-y-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 flex flex-col gap-6">
            {/* Stat Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <StatCard
                title="Customers"
                value="3,782"
                icon={<Users className="w-5 h-5 text-[#3C50E0]" />}
                trend={11.01}
                className="h-full"
              />
              <StatCard
                title="Orders"
                value="5,359"
                icon={<Package className="w-5 h-5 text-[#3C50E0]" />}
                trend={-9.05}
                className="h-full"
              />
            </div>
            {/* Monthly Sales Chart takes remaining space */}
            <div className="flex-1 min-h-[350px]">
              <MonthlySalesChart />
            </div>
          </div>
          <div className="xl:col-span-1 h-full min-h-[514px]">
            <MonthlyTargetCard />
          </div>
        </div>

        {/* Middle Section: Statistics Chart */}
        <div className="w-full">
          <StatisticsChart />
        </div>

        {/* Bottom Section: Demographic and Orders */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 pb-8">
          <div className="xl:col-span-1">
            <CustomersDemographic />
          </div>
          <div className="xl:col-span-2 overflow-x-auto">
            <RecentOrders />
          </div>
        </div>
      </div>
    );
  };

  if (!isAuthenticated) {
    if (authMode === 'signin') {
      return (
        <LoginPage 
          onLoginSuccess={handleLoginSuccess} 
          onSignUpClick={() => setAuthMode('signup')} 
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      );
    } else {
      return (
        <SignUpPage 
          onSignUpSuccess={handleLoginSuccess} 
          onSignInClick={() => setAuthMode('signin')} 
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      );
    }
  }

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
          onLogout={handleLogout}
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
