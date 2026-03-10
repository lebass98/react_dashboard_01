import React from 'react';


const ActivityFeed: React.FC = () => {
  const activities = [
    {
      type: 'user',
      title: 'New user registered',
      desc: 'Alex Johnson joined the platform.',
      time: '2 mins ago',
      color: 'bg-indigo-500'
    },
    {
      type: 'system',
      title: 'Database backup completed',
      desc: 'Weekly automated backup finished.',
      time: '1 hour ago',
      color: 'bg-emerald-500'
    },
    {
      type: 'alert',
      title: 'High CPU usage detected',
      desc: 'Server-01 reached 90% CPU load.',
      time: '3 hours ago',
      color: 'bg-amber-500'
    },
    {
      type: 'system',
      title: 'Server maintenance',
      desc: 'Scheduled maintenance completed.',
      time: '5 hours ago',
      color: 'bg-slate-500'
    },
  ];

  return (
    <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm p-6 h-full flex flex-col transition-colors duration-300">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">Recent Activity</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">System updates</p>
        </div>
      </div>

      <div className="flex-1 relative">
        {/* Vertical Line */}
        <div className="absolute top-2 bottom-0 left-[11px] w-0.5 bg-slate-100 dark:bg-slate-800"></div>

        <div className="space-y-6 relative">
          {activities.map((activity, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="relative mt-1 shrink-0">
                <div className={`w-6 h-6 rounded-full border-4 border-white dark:border-[#1A222C] flex items-center justify-center ${activity.color} z-10 relative`}>
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-white leading-tight mb-0.5">{activity.title}</p>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{activity.time}</span>
                <p className="text-sm text-slate-500 dark:text-slate-400 truncate">{activity.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
