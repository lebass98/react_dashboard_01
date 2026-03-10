import React from 'react';
import { Package } from 'lucide-react';

const RecentOrders: React.FC = () => {
  const orders = [
    { id: '#ORD-001', customer: 'Sarah Connor', product: 'MacBook Pro 16"', amount: '$2,499.00', status: 'Paid', date: 'Oct 24, 2023' },
    { id: '#ORD-002', customer: 'John Smith', product: 'iPhone 15 Pro Max', amount: '$1,199.00', status: 'Pending', date: 'Oct 24, 2023' },
    { id: '#ORD-003', customer: 'Emma Watson', product: 'AirPods Pro 2', amount: '$249.00', status: 'Paid', date: 'Oct 23, 2023' },
    { id: '#ORD-004', customer: 'Michael Jordan', product: 'iPad Air', amount: '$599.00', status: 'Failed', date: 'Oct 23, 2023' },
    { id: '#ORD-005', customer: 'Bruce Wayne', product: 'Apple Watch Ultra', amount: '$799.00', status: 'Paid', date: 'Oct 22, 2023' },
  ];

  const statusStyles: { [key: string]: string } = {
    'Paid': 'bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-700',
    'Pending': 'bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-700',
    'Failed': 'bg-rose-50 text-rose-600 border border-rose-200 dark:bg-rose-900/20 dark:text-rose-400 dark:border-rose-700',
    'default': 'bg-slate-50 text-slate-600 border border-slate-200 dark:bg-slate-900/20 dark:text-slate-400 dark:border-slate-700',
  };

  return (
    <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden h-full flex flex-col transition-colors duration-300">
      <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">Recent Orders</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Latest transactions</p>
        </div>
        <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
          View All
        </button>
      </div>

      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Product</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Date</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-white dark:group-hover:bg-slate-700 shadow-sm transition-colors">
                      <Package className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800 dark:text-white">{order.product}</div>
                      <div className="text-xs font-medium text-slate-500 dark:text-slate-400">{order.customer}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-600 dark:text-slate-300">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-500 dark:text-slate-400">
                  {order.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-800 dark:text-white">
                  {order.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold ${statusStyles[order.status] || statusStyles.default}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
