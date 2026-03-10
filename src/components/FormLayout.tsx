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
        <h2 className="text-2xl font-bold text-slate-800">Form Layout</h2>
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
          <div className="bg-white rounded-xl border border-slate-100 flex flex-col">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 p-6">Basic Form</h3>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder-slate-400" />
                <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder-slate-400" />
              </div>
              <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder-slate-400" />
              <input type="password" placeholder="Confirm Password" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder-slate-400" />
              <button type="button" className="w-full py-3 px-4 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-medium rounded-lg transition-colors flex justify-center items-center">
                Submit
              </button>
            </div>
          </div>

          {/* Example Form (Message) */}
          <div className="bg-white rounded-xl border border-slate-100 flex flex-col">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 p-6">Example Form</h3>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">First Name</label>
                  <input type="text" placeholder="Enter first name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder-slate-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Last Name</label>
                  <input type="text" placeholder="Enter last name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder-slate-400" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email</label>
                <input type="email" placeholder="Enter email address" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder-slate-400" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Select Subject</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all appearance-none cursor-pointer bg-white text-slate-800">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea rows={5} placeholder="Enter your message" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all resize-none placeholder-slate-400"></textarea>
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
          <div className="bg-white rounded-xl border border-slate-100 flex flex-col">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 p-6">Example Form with Icons</h3>
            <div className="p-6 space-y-6">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 pr-3 my-1">
                  <User className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                </div>
                <input type="text" placeholder="Username" className="w-full pl-14 pr-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder-slate-400" />
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 pr-3 my-1">
                  <Mail className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                </div>
                <input type="email" placeholder="Email address" className="w-full pl-14 pr-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder-slate-400" />
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 pr-3 my-1">
                  <Lock className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                </div>
                <input type="password" placeholder="Password" className="w-full pl-14 pr-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder-slate-400" />
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 pr-3 my-1">
                  <Lock className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                </div>
                <input type="password" placeholder="Confirm Password" className="w-full pl-14 pr-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder-slate-400" />
              </div>
              <div className="flex items-center justify-between mt-2 pt-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="hidden" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                  <div className={`w-5 h-5 rounded-[0.25rem] border flex items-center justify-center transition-all ${rememberMe ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500'}`}>
                    {rememberMe && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                  </div>
                  <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-800">Remember me</span>
                </label>
                <button type="button" className="py-2.5 px-6 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-medium rounded-lg transition-colors">
                  Create Account
                </button>
              </div>
            </div>
          </div>

          {/* Example Form (Personal Info Base) */}
          <div className="bg-white rounded-xl border border-slate-100 flex flex-col">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 p-6">Example Form</h3>
            <div className="p-6 space-y-8">
              
              {/* Personal Info section */}
              <div className="space-y-6">
                <h4 className="font-bold text-slate-800 text-[15px]">Personal Info</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">First Name</label>
                    <input type="text" placeholder="Enter first name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder-slate-400" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Last Name</label>
                    <input type="text" placeholder="Enter last name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder-slate-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Gender</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all appearance-none cursor-pointer bg-white text-slate-800">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2 relative z-50">
                  <label className="text-sm font-semibold text-slate-700">Date of Birth</label>
                  <CustomDatePicker placeholder="Select date" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Category</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all appearance-none cursor-pointer bg-white text-slate-800">
                      <option>Category 1</option>
                      <option>Category 2</option>
                      <option>Category 3</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Address section */}
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <h4 className="font-bold text-slate-800 text-[15px]">Address</h4>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Street</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">City</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">State</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Post Code</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Country</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all appearance-none cursor-pointer bg-white text-slate-600">
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
                  <span className="text-sm font-semibold text-slate-700">Membership:</span>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="membership" value="free" checked={membership === 'free'} onChange={(e) => setMembership(e.target.value)} className="hidden" />
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${membership === 'free' ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500'}`}>
                         {membership === 'free' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                      </div>
                      <span className={`text-sm font-medium ${membership === 'free' ? 'text-slate-800' : 'text-slate-600'}`}>Free</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="membership" value="paid" checked={membership === 'paid'} onChange={(e) => setMembership(e.target.value)} className="hidden" />
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${membership === 'paid' ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500'}`}>
                        {membership === 'paid' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                      </div>
                      <span className={`text-sm font-medium ${membership === 'paid' ? 'text-slate-800' : 'text-slate-600'}`}>Paid</span>
                    </label>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <button type="button" className="py-2.5 px-6 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-medium rounded-lg transition-colors">
                    Save Changes
                  </button>
                  <button type="button" className="py-2.5 px-6 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 font-medium rounded-lg transition-colors">
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
