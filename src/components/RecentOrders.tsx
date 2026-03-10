import React from 'react';

const RecentOrders: React.FC = () => {
  const orders = [
    { id: '#ORD-001', customer: 'Sarah Connor', product: 'MacBook Pro 16"', amount: '$2,499.00', status: 'Paid', date: 'Oct 24, 2023' },
    { id: '#ORD-002', customer: 'John Smith', product: 'iPhone 15 Pro Max', amount: '$1,199.00', status: 'Pending', date: 'Oct 24, 2023' },
    { id: '#ORD-003', customer: 'Emma Watson', product: 'AirPods Pro 2', amount: '$249.00', status: 'Paid', date: 'Oct 23, 2023' },
    { id: '#ORD-004', customer: 'Michael Jordan', product: 'iPad Air', amount: '$599.00', status: 'Failed', date: 'Oct 23, 2023' },
    { id: '#ORD-005', customer: 'Bruce Wayne', product: 'Apple Watch Ultra', amount: '$799.00', status: 'Paid', date: 'Oct 22, 2023' },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-emerald-50 text-emerald-600 border border-emerald-200';
      case 'Pending':
        return 'bg-amber-50 text-amber-600 border border-amber-200';
      case 'Failed':
        return 'bg-rose-50 text-rose-600 border border-rose-200';
      default:
        return 'bg-slate-50 text-slate-600 border border-slate-200';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-slate-100 h-full flex flex-col">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800">Recent Orders</h3>
          <p className="text-sm text-slate-500 font-medium mt-0.5">Latest customer orders</p>
        </div>
        <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
          View all
        </button>
      </div>

      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="pb-3 text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">Order ID</th>
              <th className="pb-3 text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">Customer</th>
              <th className="pb-3 text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">Product</th>
              <th className="pb-3 text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">Amount</th>
              <th className="pb-3 text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">Status</th>
              <th className="pb-3 text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap text-right">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {orders.map((order, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 text-sm font-semibold text-slate-700 whitespace-nowrap">{order.id}</td>
                <td className="py-4 text-sm font-medium text-slate-600 whitespace-nowrap">{order.customer}</td>
                <td className="py-4 text-sm font-medium text-slate-600 whitespace-nowrap">{order.product}</td>
                <td className="py-4 text-sm font-bold text-slate-800 whitespace-nowrap">{order.amount}</td>
                <td className="py-4 whitespace-nowrap">
                  <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${getStatusStyle(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-4 text-sm font-medium text-slate-500 whitespace-nowrap text-right">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
