import React from 'react';
import { Mail, Copy, Upload, ChevronDown, Calendar, Clock, CreditCard, Eye, X } from 'lucide-react';

const FormElements: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-slate-800">Form Elements</h2>
        <nav className="flex items-center gap-2 text-sm font-medium">
          <span className="text-slate-400">Home</span>
          <span className="text-slate-400">/</span>
          <span className="text-indigo-600">Form Elements</span>
        </nav>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
        
        {/* Left Column */}
        <div className="space-y-6">
          
          {/* Default Inputs */}
          <div className="bg-white rounded-xl border border-slate-100 p-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-4 -mx-6 px-6">Default Inputs</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Input</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Input with Placeholder</label>
                <input type="text" placeholder="info@gmail.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder-slate-400" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Select Input</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all appearance-none cursor-pointer bg-white">
                    <option>Select Option</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Password Input</label>
                <div className="relative">
                  <input type="password" placeholder="Enter your password" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
                  <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 cursor-pointer" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Date Picker Input</label>
                <div className="relative">
                  <input type="text" placeholder="Select date" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Time Select Input</label>
                <div className="relative">
                  <input type="text" placeholder="-- : --" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
                  <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Input with Payment</label>
                <div className="relative">
                  <input type="text" placeholder="Card number" className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Select Inputs */}
          <div className="bg-white rounded-xl border border-slate-100 p-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-4 -mx-6 px-6">Select Inputs</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Select Input</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all appearance-none cursor-pointer bg-white">
                    <option>Select Option</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Multiple Select Options</label>
                <div className="relative">
                  <div className="w-full px-4 py-3 rounded-lg border border-slate-200 flex flex-wrap gap-2 items-center bg-white cursor-pointer min-h-[50px]">
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1">Option 1 <X className="w-3 h-3" /></span>
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1">Option 3 <X className="w-3 h-3" /></span>
                  </div>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Textarea input field */}
          <div className="bg-white rounded-xl border border-slate-100 p-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-4 -mx-6 px-6">Textarea input field</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Description</label>
                <textarea placeholder="Enter a description..." rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all resize-none"></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Description</label>
                <textarea placeholder="Enter a description..." rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-50 bg-slate-50/50 outline-none transition-all resize-none"></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Description</label>
                <textarea placeholder="Enter a description..." rows={4} className="w-full px-4 py-3 rounded-lg border border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all resize-none"></textarea>
                <p className="text-xs text-red-500 font-medium">Please enter a message in the textarea.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="space-y-6">

          {/* Input Group */}
          <div className="bg-white rounded-xl border border-slate-100 p-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-4 -mx-6 px-6">Input Group</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                  </div>
                  <input type="text" placeholder="info@gmail.com" className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone</label>
                <div className="flex">
                  <div className="relative group min-w-[80px]">
                    <select className="w-full h-full pl-4 pr-8 py-3 rounded-l-lg border border-r-0 border-slate-200 bg-slate-50 outline-none appearance-none cursor-pointer">
                      <option>US</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                  <input type="text" placeholder="+1 (555) 000-0000" className="flex-1 px-4 py-3 rounded-r-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone</label>
                <div className="flex">
                  <input type="text" placeholder="+1 (555) 000-0000" className="flex-1 px-4 py-3 rounded-l-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
                  <div className="relative group min-w-[80px]">
                    <select className="w-full h-full pl-4 pr-8 py-3 rounded-r-lg border border-l-0 border-slate-200 bg-slate-50 outline-none appearance-none cursor-pointer">
                      <option>US</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">URL</label>
                <div className="flex">
                  <span className="px-4 py-3 rounded-l-lg border border-r-0 border-slate-200 bg-slate-50 text-slate-500 font-medium">http://</span>
                  <input type="text" placeholder="www.tailadmin.com" className="flex-1 px-4 py-3 rounded-r-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Website</label>
                <div className="flex">
                  <input type="text" value="www.tailadmin.com" readOnly className="flex-1 px-4 py-3 rounded-l-lg border border-slate-200 bg-white outline-none" />
                  <button className="px-4 py-3 rounded-r-lg border border-l-0 border-slate-200 bg-slate-50 text-slate-500 font-semibold flex items-center gap-2 hover:bg-slate-100 transition-colors">
                    <Copy className="w-4 h-4" /> Copy
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* File Input */}
          <div className="bg-white rounded-xl border border-slate-100 p-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-4 -mx-6 px-6">File Input</h3>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Upload file</label>
              <div className="relative">
                <input type="file" className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="flex items-center w-full px-4 py-3 rounded-lg border border-slate-200 cursor-pointer hover:border-indigo-500 transition-all">
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-sm font-semibold mr-4">파일 선택</span>
                  <span className="text-slate-400 text-sm">선택된 파일 없음</span>
                </label>
              </div>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="bg-white rounded-xl border border-slate-100 p-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-4 -mx-6 px-6">Checkboxes</h3>
            <div className="flex flex-wrap gap-8 items-center pt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="hidden" />
                <div className="w-5 h-5 rounded border border-slate-300 flex items-center justify-center group-hover:border-indigo-500 transition-all"></div>
                <span className="text-sm font-medium text-slate-600">Default</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" checked className="hidden" />
                <div className="w-5 h-5 rounded border-indigo-500 bg-indigo-500 flex items-center justify-center transition-all">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="text-sm font-medium text-slate-800">Checked</span>
              </label>
              <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
                <input type="checkbox" disabled className="hidden" />
                <div className="w-5 h-5 rounded border border-slate-200 bg-slate-50 flex items-center justify-center"></div>
                <span className="text-sm font-medium text-slate-400">Disabled</span>
              </label>
            </div>
          </div>

          {/* Radio Buttons */}
          <div className="bg-white rounded-xl border border-slate-100 p-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-4 -mx-6 px-6">Radio Buttons</h3>
            <div className="flex flex-wrap gap-8 items-center pt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="radio-test" className="hidden" />
                <div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-indigo-500 transition-all"></div>
                <span className="text-sm font-medium text-slate-600">Default</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="radio-test" checked className="hidden" />
                <div className="w-5 h-5 rounded-full border border-indigo-500 bg-indigo-500 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <span className="text-sm font-medium text-slate-800">Secondary</span>
              </label>
              <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
                <input type="radio" disabled className="hidden" />
                <div className="w-5 h-5 rounded-full border border-slate-200 bg-slate-50"></div>
                <span className="text-sm font-medium text-slate-400">Disabled Secondary</span>
              </label>
            </div>
          </div>

          {/* Toggle switch input */}
          <div className="bg-white rounded-xl border border-slate-100 p-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-4 -mx-6 px-6">Toggle switch input</h3>
            <div className="space-y-4 pt-2">
              <div className="flex gap-8 items-center">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative w-11 h-6 bg-slate-200 rounded-full transition-colors group-hover:bg-slate-300">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all"></div>
                  </div>
                  <span className="text-sm font-medium text-slate-600">Default</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group text-indigo-600">
                  <div className="relative w-11 h-6 bg-indigo-500 rounded-full transition-colors">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                  </div>
                  <span className="text-sm font-medium">Checked</span>
                </label>
                <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
                  <div className="relative w-11 h-6 bg-slate-100 rounded-full">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-slate-400">Disabled</span>
                </label>
              </div>

              <div className="flex gap-8 items-center">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative w-12 h-6 border-2 border-slate-200 rounded-full transition-colors group-hover:border-slate-300 flex items-center px-1">
                    <div className="w-2.5 h-2.5 bg-slate-200 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-slate-600">Default</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group text-slate-800 font-bold">
                  <div className="relative w-12 h-6 border-2 border-slate-800 rounded-full flex items-center justify-end px-1">
                    <div className="w-2.5 h-2.5 bg-slate-800 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">Checked</span>
                </label>
                <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
                   <div className="relative w-12 h-6 border-2 border-slate-100 rounded-full flex items-center px-1">
                    <div className="w-2.5 h-2.5 bg-slate-100 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-slate-400">Disabled</span>
                </label>
              </div>
            </div>
          </div>

          {/* Dropzone */}
          <div className="bg-white rounded-xl border border-slate-100 p-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-4 -mx-6 px-6">Dropzone</h3>
            <div className="border-2 border-dashed border-indigo-100 bg-indigo-50/5 rounded-xl p-10 flex flex-col items-center justify-center text-center space-y-4 hover:border-indigo-300 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                <Upload className="w-6 h-6 text-indigo-500" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-800">Drag & Drop File Here</p>
                <p className="text-sm text-slate-500 mt-1">Drag and drop your PNG, JPG, WEBP, SVG images here or browse</p>
              </div>
              <button className="text-indigo-600 font-bold text-sm hover:underline">Browse File</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default FormElements;
