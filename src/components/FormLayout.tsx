import React, { useState } from 'react';
import { Mail, User, Lock, Send, ChevronDown, Check } from 'lucide-react';
import CustomDatePicker from './CustomDatePicker';

const FormLayout: React.FC = () => {
  // Checkbox state for "Remember me"
  const [rememberMe, setRememberMe] = useState(false);
  
  // Radio state for Membership
  const [membership, setMembership] = useState('free');

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Form Layout</h2>
        <nav className="flex items-center gap-2 text-sm font-medium">
          <span className="text-slate-400">Home</span>
          <span className="text-slate-400">/</span>
          <span className="text-indigo-600">Form Layout</span>
        </nav>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 pb-20">
        
        {/* Left Column */}
        <div className="space-y-6">
          
          {/* Basic Form */}
          <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col transition-colors duration-300">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-50 dark:border-slate-800 p-6">Basic Form</h3>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
                <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
              </div>
              <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
              <input type="password" placeholder="Confirm Password" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
              <button type="button" className="w-full py-3 px-4 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-medium rounded-lg transition-colors flex justify-center items-center">
                Submit
              </button>
            </div>
          </div>

          {/* Example Form (Message) */}
          <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col transition-colors duration-300">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-50 dark:border-slate-800 p-6">Example Form</h3>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name</label>
                  <input type="text" placeholder="Enter first name" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name</label>
                  <input type="text" placeholder="Enter last name" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</label>
                <input type="email" placeholder="Enter email address" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Select Subject</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                <textarea rows={5} placeholder="Enter your message" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500"></textarea>
              </div>
              <button type="button" className="w-full py-3 px-4 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-medium rounded-lg transition-colors flex justify-center items-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="space-y-6">
          
          {/* Example Form with Icons */}
          <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col transition-colors duration-300">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-50 dark:border-slate-800 p-6">Example Form with Icons</h3>
            <div className="p-6 space-y-6">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
                  <User className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                </div>
                <input type="text" placeholder="Username" className="w-full pl-14 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
                  <Mail className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                </div>
                <input type="email" placeholder="Email address" className="w-full pl-14 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
                  <Lock className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                </div>
                <input type="password" placeholder="Password" className="w-full pl-14 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
                  <Lock className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                </div>
                <input type="password" placeholder="Confirm Password" className="w-full pl-14 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
              </div>
              <div className="flex items-center justify-between mt-2 pt-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="hidden" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                  <div className={`w-5 h-5 rounded-[0.25rem] border flex items-center justify-center transition-all ${rememberMe ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500 dark:border-slate-600 dark:group-hover:border-blue-500'}`}>
                    {rememberMe && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                  </div>
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white">Remember me</span>
                </label>
                <button type="button" className="py-2.5 px-6 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-medium rounded-lg transition-colors">
                  Create Account
                </button>
              </div>
            </div>
          </div>

          {/* Example Form (Personal Info Base) */}
          <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col transition-colors duration-300">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-50 dark:border-slate-800 p-6">Example Form</h3>
            <div className="p-6 space-y-8">
              
              {/* Personal Info section */}
              <div className="space-y-6">
                <h4 className="font-bold text-slate-800 dark:text-white text-[15px]">Personal Info</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name</label>
                    <input type="text" placeholder="Enter first name" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name</label>
                    <input type="text" placeholder="Enter last name" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Gender</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2 relative z-50">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Date of Birth</label>
                  <CustomDatePicker placeholder="Select date" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Category</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                      <option>Category 1</option>
                      <option>Category 2</option>
                      <option>Category 3</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Address section */}
              <div className="space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-white text-[15px]">Address</h4>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Street</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">City</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">State</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Post Code</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Country</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                        <option>--Select Country--</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>Korea</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-2">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Membership:</span>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="membership" value="free" checked={membership === 'free'} onChange={(e) => setMembership(e.target.value)} className="hidden" />
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${membership === 'free' ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500 dark:border-slate-600 dark:group-hover:border-blue-500'}`}>
                         {membership === 'free' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                      </div>
                      <span className={`text-sm font-medium ${membership === 'free' ? 'text-slate-800 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>Free</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="membership" value="paid" checked={membership === 'paid'} onChange={(e) => setMembership(e.target.value)} className="hidden" />
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${membership === 'paid' ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500 dark:border-slate-600 dark:group-hover:border-blue-500'}`}>
                        {membership === 'paid' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                      </div>
                      <span className={`text-sm font-medium ${membership === 'paid' ? 'text-slate-800 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>Paid</span>
                    </label>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <button type="button" className="py-2.5 px-6 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-medium rounded-lg transition-colors">
                    Save Changes
                  </button>
                  <button type="button" className="py-2.5 px-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 text-slate-600 dark:text-slate-300 font-medium rounded-lg transition-colors">
                    Cancel
                  </button>
                </div>
              </div>

            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default FormLayout;
