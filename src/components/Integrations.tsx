import React, { useState, useEffect, useRef } from 'react';
import { 
  Plus, 
  MoreHorizontal, 
  Settings, 
  Mail, 
  Video, 
  Box, 
  CheckSquare, 
  Clipboard,
  X,
  ChevronDown
} from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  description: string;
  isEnabled: boolean;
  icon: React.ReactNode;
  iconBg: string;
}

const Integrations: React.FC = () => {
  const [integrations, setIntegrations] = useState<Integration[]>([
    { 
      id: '1', 
      name: 'Mailchimp', 
      description: 'Connect Mailchimp to streamline your email marketing—automate campaigns.', 
      isEnabled: true, 
      icon: <span className="text-2xl">🐵</span>, 
      iconBg: 'bg-white' 
    },
    { 
      id: '2', 
      name: 'Google Meet', 
      description: 'Connect your Google Meet account for seamless video conferencing.', 
      isEnabled: false, 
      icon: <Video className="w-6 h-6 text-emerald-500" />, 
      iconBg: 'bg-white' 
    },
    { 
      id: '3', 
      name: 'Zoom', 
      description: 'Integrate Zoom to streamline your virtual meetings and team collaborations.', 
      isEnabled: false, 
      icon: <Video className="w-6 h-6 text-blue-500" />, 
      iconBg: 'bg-blue-500' 
    },
    { 
      id: '4', 
      name: 'Loom', 
      description: 'Integrate Loom to easily record, share, and manage video messages.', 
      isEnabled: false, 
      icon: <Box className="w-6 h-6 text-indigo-500" />, 
      iconBg: 'bg-white' 
    },
    { 
      id: '5', 
      name: 'Linear', 
      description: 'Integrate Linear to manage issues, track progress, and streamline your team\'s.', 
      isEnabled: false, 
      icon: <CheckSquare className="w-6 h-6 text-indigo-600" />, 
      iconBg: 'bg-indigo-600' 
    },
    { 
      id: '6', 
      name: 'Gmail', 
      description: 'Integrate Gmail to send, receive, and manage emails directly from your workspace.', 
      isEnabled: false, 
      icon: <Mail className="w-6 h-6 text-red-500" />, 
      iconBg: 'bg-white' 
    },
    { 
      id: '7', 
      name: 'Trello', 
      description: 'Capture, organize, and tackle your to-dos from anywhere.', 
      isEnabled: false, 
      icon: <Clipboard className="w-6 h-6 text-blue-600" />, 
      iconBg: 'bg-blue-600' 
    },
    { 
      id: '8', 
      name: 'Notion', 
      description: 'Capture, organize, and tackle your to-dos from anywhere.', 
      isEnabled: false, 
      icon: <CheckSquare className="w-6 h-6 text-black" />, 
      iconBg: 'bg-white' 
    },
    { 
      id: '9', 
      name: 'Jira', 
      description: 'Track issues and manage projects with ease and full team visibility.', 
      isEnabled: false, 
      icon: <Box className="w-6 h-6 text-blue-500" />, 
      iconBg: 'bg-white' 
    },
  ]);

  const [activeModal, setActiveModal] = useState<'none' | 'new' | 'settings' | 'details' | 'remove'>('none');
  const [selectedApp, setSelectedApp] = useState<Integration | null>(null);
  const [dropdownOpenId, setDropdownOpenId] = useState<string | null>(null);

  // States for New Integration form
  const [newAppName, setNewAppName] = useState('');
  const [newClientId, setNewClientId] = useState('');
  const [newClientSecret, setNewClientSecret] = useState('');
  const [newAuthUri, setNewAuthUri] = useState('');

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpenId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleIntegration = (id: string) => {
    setIntegrations(prev => prev.map(item => 
      item.id === id ? { ...item, isEnabled: !item.isEnabled } : item
    ));
  };

  const handleRemove = () => {
    if (selectedApp) {
      setIntegrations(prev => prev.filter(item => item.id !== selectedApp.id));
      setActiveModal('none');
      setSelectedApp(null);
    }
  };

  const handleAddIntegration = () => {
    if (!newAppName || newAppName === 'Select Option') return;

    // Find the base app to steal its icon if it exists in the template list
    const templateApp = integrations.find(app => app.name === newAppName);
    
    const newIntegration: Integration = {
      id: Date.now().toString(),
      name: newAppName,
      description: templateApp ? templateApp.description : 'Custom integration added by team.',
      isEnabled: true,
      icon: templateApp ? templateApp.icon : <Box className="w-6 h-6 text-slate-500" />,
      iconBg: templateApp ? templateApp.iconBg : 'bg-white'
    };

    setIntegrations(prev => [newIntegration, ...prev]);
    
    // Reset form and close
    setNewAppName('');
    setNewClientId('');
    setNewClientSecret('');
    setNewAuthUri('');
    setActiveModal('none');
  };

  return (
    <div className="space-y-8 pb-10">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Integrations</h2>
          <nav className="flex items-center gap-2 text-sm font-medium mt-1">
            <span className="text-slate-400 font-normal">Home</span>
            <span className="text-slate-400 font-normal">/</span>
            <span className="text-indigo-600 font-bold">Integrations</span>
          </nav>
        </div>
        <button 
          onClick={() => setActiveModal('new')}
          className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold text-sm transition-all shadow-md shadow-indigo-200 dark:shadow-none"
        >
          <Plus className="w-4 h-4" />
          Add New Integration
        </button>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {integrations.map((item) => (
          <div key={item.id} className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border border-slate-50 dark:border-slate-800 ${item.id === '3' || item.id === '5' || item.id === '7' ? item.iconBg : 'bg-white dark:bg-slate-800'} shadow-sm`}>
                  {item.id === '3' || item.id === '5' || item.id === '7' ? (
                    <div className="text-white">{item.icon}</div>
                  ) : item.icon}
                </div>
                <div className="relative" ref={dropdownOpenId === item.id ? dropdownRef : null}>
                  <button 
                    onClick={() => setDropdownOpenId(dropdownOpenId === item.id ? null : item.id)}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                  >
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                  {dropdownOpenId === item.id && (
                    <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-100 dark:border-slate-700 py-1 z-10 animate-in fade-in zoom-in duration-100">
                      <button 
                        onClick={() => {
                          setSelectedApp(item);
                          setActiveModal('remove');
                          setDropdownOpenId(null);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{item.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="px-6 py-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between bg-slate-50/30 dark:bg-slate-800/20">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => { setSelectedApp(item); setActiveModal('settings'); }}
                  className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-indigo-600 transition-all"
                >
                  <Settings className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => { setSelectedApp(item); setActiveModal('details'); }}
                  className="px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all"
                >
                  Details
                </button>
              </div>

              {/* Toggle Switch */}
              <button 
                onClick={() => toggleIntegration(item.id)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${item.isEnabled ? 'bg-indigo-600' : 'bg-slate-200 dark:bg-slate-700'}`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${item.isEnabled ? 'translate-x-5' : 'translate-x-0'}`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modals Backdrop */}
      {activeModal !== 'none' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          
          {/* Settings Modal */}
          {activeModal === 'settings' && selectedApp && (
            <div className="bg-white dark:bg-[#1A222C] w-full max-w-[500px] rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-8 pb-6 relative">
                <button 
                  onClick={() => setActiveModal('none')}
                  className="absolute right-6 top-6 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Integration settings</h3>
                <p className="text-[13px] text-slate-500 dark:text-slate-400">Manage and configure your connected apps and services</p>
              </div>

              <div className="px-8 py-2 space-y-5">
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">Select App</label>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-[13px] text-slate-600 dark:text-slate-300 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all">
                      <option>{selectedApp.name}</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">Client ID</label>
                  <input 
                    type="text" 
                    defaultValue="872364219810-abc123xyz456.apps.googleusercontent.com"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-[13px] text-slate-600 dark:text-slate-300 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">Client Secret</label>
                  <input 
                    type="text" 
                    defaultValue="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e"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-[13px] text-slate-600 dark:text-slate-300 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">Authentication base URI</label>
                  <input 
                    type="text" 
                    defaultValue="https://accounts.application.com/o/oauth2/auth"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-[13px] text-slate-600 dark:text-slate-300 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div className="p-8 pt-6 space-y-6">
                <p className="text-[13px] text-slate-500 dark:text-slate-400">Save your changes by clicking 'Save Changes'</p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setActiveModal('none')}
                    className="flex-1 py-3 rounded-lg border border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600 text-[13px] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                  >
                    Close
                  </button>
                  <button 
                    onClick={() => setActiveModal('none')}
                    className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-[13px] font-bold transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Details Modal */}
          {activeModal === 'details' && selectedApp && (
            <div className="bg-white dark:bg-[#1A222C] w-full max-w-[500px] rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-8 pb-6 relative">
                <button 
                  onClick={() => setActiveModal('none')}
                  className="absolute right-6 top-6 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Integration details</h3>
                <p className="text-[13px] text-slate-500 dark:text-slate-400">Check the credentials and settings for your connected app.</p>
              </div>

              <div className="px-8 py-4">
                <div className="divide-y divide-slate-100 dark:divide-slate-800 border-t border-b border-slate-100 dark:border-slate-800">
                  <div className="py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="w-[180px] shrink-0 text-[13px] text-slate-500 dark:text-slate-400">App Name</span>
                    <span className="text-[14px] font-medium text-slate-800 dark:text-slate-200">{selectedApp.name}</span>
                  </div>
                  <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                    <span className="w-[180px] shrink-0 text-[13px] text-slate-500 dark:text-slate-400">Client ID</span>
                    <span className="text-[14px] font-medium text-slate-800 dark:text-slate-200 break-all leading-relaxed">
                      872364219810-abc123xyz456.apps.usercontent.com
                    </span>
                  </div>
                  <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                    <span className="w-[180px] shrink-0 text-[13px] text-slate-500 dark:text-slate-400">Client Secret</span>
                    <span className="text-[14px] font-medium text-slate-800 dark:text-slate-200 break-all leading-relaxed">
                      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e
                    </span>
                  </div>
                  <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                    <span className="w-[180px] shrink-0 text-[13px] text-slate-500 dark:text-slate-400">Authentication base URI</span>
                    <span className="text-[14px] font-medium text-slate-800 dark:text-slate-200 break-all leading-relaxed">
                      https://accounts.app.com/o/oauth2/auth
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-4"></div>
            </div>
          )}

          {/* New Integration Modal */}
          {activeModal === 'new' && (
            <div className="bg-white dark:bg-[#1A222C] w-full max-w-[500px] rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-8 pb-6 relative">
                <button 
                  onClick={() => setActiveModal('none')}
                  className="absolute right-6 top-6 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">New integration</h3>
                <p className="text-[13px] text-slate-500 dark:text-slate-400">Set up an integration and add a brief explanation for the team.</p>
              </div>

              <div className="px-8 py-2 space-y-5">
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">Select App</label>
                  <div className="relative">
                    <select 
                      value={newAppName}
                      onChange={(e) => setNewAppName(e.target.value)}
                      className="w-full appearance-none rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-[13px] text-slate-600 dark:text-slate-300 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    >
                      <option value="">Select Option</option>
                      {integrations.map(app => (
                        <option key={app.id} value={app.name}>{app.name}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">Client ID</label>
                  <input 
                    type="text" 
                    value={newClientId}
                    onChange={(e) => setNewClientId(e.target.value)}
                    placeholder="Enter client ID here"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-[13px] text-slate-600 dark:text-slate-300 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">Client Secret</label>
                  <input 
                    type="text" 
                    value={newClientSecret}
                    onChange={(e) => setNewClientSecret(e.target.value)}
                    placeholder="Enter client secret here"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-[13px] text-slate-600 dark:text-slate-300 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">Authentication base URI</label>
                  <input 
                    type="text" 
                    value={newAuthUri}
                    onChange={(e) => setNewAuthUri(e.target.value)}
                    placeholder="Paste URL here"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-[13px] text-slate-600 dark:text-slate-300 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="p-8 pt-6 space-y-6">
                <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  Paste the full URI, and we'll automatically pull out and show only the subdomain for quick reference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setActiveModal('none')}
                    className="flex-1 py-3 rounded-lg border border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600 text-[13px] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                  >
                    Close
                  </button>
                  <button 
                    onClick={handleAddIntegration}
                    disabled={!newAppName}
                    className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-[13px] font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Add Integration
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Remove Confirmation Modal */}
          {activeModal === 'remove' && (
            <div className="bg-white dark:bg-[#1A222C] w-full max-w-[480px] rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-8 pb-4 relative flex flex-col items-center text-center">
                <button 
                  onClick={() => setActiveModal('none')}
                  className="absolute right-6 top-6 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                
                {/* Decorative Icon */}
                <div className="w-24 h-24 mt-6 mb-8 relative flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-red-50 dark:text-red-900/20 fill-current">
                    <path d="M50 0 C60 0 65 10 75 15 C85 20 95 30 95 40 C95 50 90 60 85 70 C80 80 65 90 50 90 C35 90 20 80 15 70 C10 60 5 50 5 40 C5 30 15 20 25 15 C35 10 40 0 50 0 Z" />
                  </svg>
                  <X className="w-8 h-8 text-red-500 relative z-10 stroke-[2.5]" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Action Needed!</h3>
                <p className="text-[15px] font-medium text-slate-500 dark:text-slate-400">
                  Are you sure you want to remove this integration?
                </p>
              </div>

              <div className="p-8 pt-6 flex justify-center gap-4">
                <button 
                  onClick={() => setActiveModal('none')}
                  className="px-6 py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600 text-[14px] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                >
                  No, cancel
                </button>
                <button 
                  onClick={handleRemove}
                  className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-[14px] font-bold transition-colors"
                >
                  Yes, I'm sure
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Integrations;
