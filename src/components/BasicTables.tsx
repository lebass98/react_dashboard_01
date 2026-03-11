import React from 'react';
import { 
  MoreHorizontal, 
  Search, 
  Filter, 
  Trash2, 
  ChevronLeft, 
  ChevronRight,
  MoreVertical
} from 'lucide-react';

const BasicTables: React.FC = () => {
  return (
    <div className="space-y-10 pb-10">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Basic Tables</h2>
        <nav className="flex items-center gap-2 text-sm font-medium">
          <span className="text-slate-400 font-normal">Home</span>
          <span className="text-slate-400 font-normal">/</span>
          <span className="text-indigo-600 font-bold">Basic Tables</span>
        </nav>
      </div>

      {/* Basic Table 1 Section */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-4">Basic Table 1</h3>
        <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-50 dark:border-slate-800">
            <h4 className="text-lg font-bold text-slate-800 dark:text-white">Top Channels</h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">User</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Project Name</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Team</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Budget</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                {[
                  {
                    user: { name: 'Lindsey Curtis', role: 'Web Designer', avatar: 'https://images.unsplash.com/photo-1535711603863-10d97bc7a2d4?w=100&h=100&fit=crop' },
                    project: 'Agency Website',
                    team: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop'],
                    status: 'Active',
                    budget: '3.9K'
                  },
                  {
                    user: { name: 'Kaiya George', role: 'Project Manager', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
                    project: 'Technology',
                    team: ['https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'],
                    status: 'Pending',
                    budget: '24.9K'
                  },
                  {
                    user: { name: 'Zain Geidt', role: 'Content Writer', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop' },
                    project: 'Blog Writing',
                    team: ['https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop'],
                    status: 'Active',
                    budget: '12.7K'
                  },
                  {
                    user: { name: 'Abram Schleifer', role: 'Digital Marketer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
                    project: 'Social Media',
                    team: ['https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop', 'https://images.unsplash.com/photo-1535711603863-10d97bc7a2d4?w=100&h=100&fit=crop', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'],
                    status: 'Cancel',
                    budget: '2.8K'
                  },
                  {
                    user: { name: 'Carla George', role: 'Front-end Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
                    project: 'Website',
                    team: ['https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop'],
                    status: 'Active',
                    budget: '4.5K'
                  }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={row.user.avatar} className="w-10 h-10 rounded-full object-cover" alt="" />
                        <div>
                          <div className="text-sm font-bold text-slate-800 dark:text-white">{row.user.name}</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">{row.user.role}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">{row.project}</td>
                    <td className="px-6 py-4">
                      <div className="flex -space-x-2">
                        {row.team.map((avatar, idx) => (
                          <img key={idx} src={avatar} className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900 object-cover" alt="" />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold ${
                        row.status === 'Active' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600' :
                        row.status === 'Pending' ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-600' :
                        'bg-red-50 dark:bg-red-500/10 text-red-600'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-700 dark:text-slate-200">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Basic Table 2 Section */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-4">Basic Table 2</h3>
        <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h4 className="text-lg font-bold text-slate-800 dark:text-white">Recent Orders</h4>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="pl-9 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm outline-none w-full sm:w-64 focus:border-indigo-500 transition-all"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                    <th className="px-4 py-4 w-10">
                      <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4" />
                    </th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">Deal ID</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">Customer</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">Product/Service</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">Deal Value</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">Close Date</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">Status</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                  {[
                    { id: 'DE124321', customer: { name: 'John Doe', email: 'johndoe@gmail.com', avatar: 'JD' }, product: 'Software License', value: '$18,50.34', date: '2024-06-15', status: 'Complete' },
                    { id: 'DE124321', customer: { name: 'Kierra Franci', email: 'kierra@gmail.com', avatar: 'KF' }, product: 'Software License', value: '$18,50.34', date: '2024-06-15', status: 'Complete' },
                    { id: 'DE124321', customer: { name: 'Emerson Workman', email: 'emerson@gmail.com', avatar: 'EW' }, product: 'Software License', value: '$18,50.34', date: '2024-06-15', status: 'Pending' },
                    { id: 'DE124321', customer: { name: 'Chance Philips', email: 'chance@gmail.com', avatar: 'CP' }, product: 'Software License', value: '$18,50.34', date: '2024-06-15', status: 'Complete' },
                    { id: 'DE124321', customer: { name: 'Terry Geidt', email: 'terry@gmail.com', avatar: 'TG' }, product: 'Software License', value: '$18,50.34', date: '2024-06-15', status: 'Complete' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-4 py-4">
                        <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4" />
                      </td>
                      <td className="px-4 py-4 text-sm font-bold text-slate-800 dark:text-200">{row.id}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-[10px] font-bold shrink-0">{row.customer.avatar}</div>
                          <div>
                            <div className="text-[13px] font-bold text-slate-800 dark:text-white">{row.customer.name}</div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400">{row.customer.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-[13px] font-medium text-slate-600 dark:text-slate-300">{row.product}</td>
                      <td className="px-4 py-4 text-[13px] font-bold text-slate-800 dark:text-white">{row.value}</td>
                      <td className="px-4 py-4 text-[13px] font-medium text-slate-500 dark:text-slate-400">{row.date}</td>
                      <td className="px-4 py-4">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold ${row.status === 'Complete' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600' : 'bg-orange-50 dark:bg-orange-500/10 text-orange-600'}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button className="text-slate-400 hover:text-red-500 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Table 3 Section */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-4">Basic Table 3</h3>
        <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h4 className="text-lg font-bold text-slate-800 dark:text-white">Latest Transactions</h4>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-9 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm outline-none w-full sm:w-64 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/10 dark:bg-slate-800/20">
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                  {[
                    { name: 'Bought PYPL', date: 'Nov 23, 01:00 PM', price: '$2,567.88', category: 'Finance', status: 'Success', iconColor: 'bg-blue-600', icon: 'P' },
                    { name: 'Bought AAPL', date: 'Nov 22, 09:00 PM', price: '$2,567.88', category: 'Technology', status: 'Pending', iconColor: 'bg-slate-900', icon: 'A' },
                    { name: 'Sell KKST', date: 'Oct 12, 03:54 PM', price: '$6,754.88', category: 'Finance', status: 'Success', iconColor: 'bg-emerald-600', icon: 'K' },
                    { name: 'Bought FB', date: 'Sep 09, 02:00 AM', price: '$1,445.41', category: 'Social media', status: 'Success', iconColor: 'bg-blue-500', icon: 'F' },
                    { name: 'Sell AMZN', date: 'Feb 15, 08:00 PM', price: '$5,698.55', category: 'E-commerce', status: 'Failed', iconColor: 'bg-orange-600', icon: 'a' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg ${row.iconColor} text-white flex items-center justify-center font-bold text-sm`}>{row.icon}</div>
                          <span className="text-sm font-bold text-slate-800 dark:text-white">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[13px] font-medium text-slate-500 dark:text-slate-400">{row.date}</td>
                      <td className="px-6 py-4 text-sm font-bold text-slate-800 dark:text-white">{row.price}</td>
                      <td className="px-6 py-4 text-[13px] font-medium text-slate-500 dark:text-slate-400">{row.category}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold ${
                          row.status === 'Success' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600' :
                          row.status === 'Pending' ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-600' :
                          'bg-red-50 dark:bg-red-500/10 text-red-600'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[13px] font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors disabled:opacity-50">
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <div className="flex items-center gap-1">
                {[1, 2, 3, '...', 8, 9, 10].map((p, i) => (
                  <button key={i} className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${p === 1 ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600' : 'text-slate-400 dark:text-slate-500 hover:text-indigo-600 hover:bg-indigo-50'}`}>
                    {p}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[13px] font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors">
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Table 4 Section */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-4">Basic Table 4</h3>
        <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
            <h4 className="text-lg font-bold text-slate-800 dark:text-white">Featured Campaigns</h4>
            <button className="text-slate-400 hover:text-slate-600 transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-50 dark:border-slate-800">
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Creator</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Campaign</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                  {[
                    { name: 'Wilson Gouse', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', campaign: 'Grow your brand by...', type: 'Ads campaign', platform: 'Slack', status: 'Success' },
                    { name: 'Terry Franci', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop', campaign: 'Make Better Ideas...', type: 'Ads campaign', platform: 'Facebook', status: 'Pending' },
                    { name: 'Alena Franci', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop', campaign: 'Increase your website tra...', type: 'Ads campaign', platform: 'Google', status: 'Success' },
                    { name: 'Jocelyn Kenter', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop', campaign: 'Digital Marketing that...', type: 'Ads campaign', platform: 'Instagram', status: 'Failed' },
                    { name: 'Brandon Philips', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', campaign: 'Self branding', type: 'Ads campaign', platform: 'Facebook', status: 'Success' },
                    { name: 'James Lipshutz', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop', campaign: 'Increase your website tra...', type: 'Ads campaign', platform: 'Google', status: 'Success' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <img src={row.avatar} className="w-9 h-9 rounded-full object-cover" alt="" />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs ${
                            row.platform === 'Slack' ? 'bg-[#4A154B]' :
                            row.platform === 'Facebook' ? 'bg-[#1877F2]' :
                            row.platform === 'Google' ? 'bg-[#4285F4]' :
                            'bg-[#E1306C]'
                          }`}>
                            {row.platform[0]}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-800 dark:text-white">{row.campaign}</div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400">{row.type}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                          row.status === 'Success' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600' :
                          row.status === 'Pending' ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-600' :
                          'bg-red-50 dark:bg-red-500/10 text-red-600'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Table 5 Section */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-4">Basic Table 5</h3>
        <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-50 dark:border-slate-800">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-bold text-slate-800 dark:text-white">Recent Orders</h4>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>
                <button className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors">
                  See all
                </button>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-50 dark:border-slate-800">
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Products</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Category</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Country</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">CR</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                  {[
                    { product: 'TailGrids', category: 'UI Kit', country: '🇺🇸', cr: 'Dashboard', value: '$12,499' },
                    { product: 'GrayGrids', category: 'Templates', country: '🇸🇬', cr: 'Dashboard', value: '$5,498' },
                    { product: 'Uideck', category: 'Templates', country: '🇬🇧', cr: 'Dashboard', value: '$4,521' },
                    { product: 'FormBold', category: 'SaaS', country: '🇪🇬', cr: 'Dashboard', value: '$13,843' },
                    { product: 'NextAdmin', category: 'Dashboard', country: '🇫🇮', cr: 'Dashboard', value: '$7,523' },
                    { product: 'FormBuilder', category: 'SaaS', country: '🇧🇪', cr: 'Dashboard', value: '$1,377' },
                    { product: 'AyroUI', category: 'UI Kit', country: '🇧🇩', cr: 'Dashboard', value: '$599,00' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-4 py-4 text-sm font-bold text-slate-800 dark:text-white">{row.product}</td>
                      <td className="px-4 py-4 text-sm text-slate-500 dark:text-slate-400">{row.category}</td>
                      <td className="px-4 py-4 text-xl">{row.country}</td>
                      <td className="px-4 py-4 text-sm text-slate-500 dark:text-slate-400">{row.cr}</td>
                      <td className="px-4 py-4 text-sm font-bold text-emerald-500">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicTables;
