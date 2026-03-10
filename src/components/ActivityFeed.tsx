import React from 'react';
import { UserPlus, Server, CheckCircle2, AlertTriangle } from 'lucide-react';

const ActivityFeed: React.FC = () => {
  const activities = [
    { 
      type: 'user', 
      title: 'New user registered', 
      desc: 'Alex Johnson joined the platform.', 
      time: '2 mins ago',
      icon: <UserPlus className="w-4 h-4 text-indigo-600" />,
      bg: 'bg-indigo-50 border-indigo-100'
    },
    { 
      type: 'system', 
      title: 'Database backup completed', 
      desc: 'Weekly automated backup finished.', 
      time: '1 hour ago',
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
      bg: 'bg-emerald-50 border-emerald-100'
    },
    { 
      type: 'alert', 
      title: 'High CPU usage detected', 
      desc: 'Server-01 reached 90% CPU load.', 
      time: '3 hours ago',
      icon: <AlertTriangle className="w-4 h-4 text-amber-600" />,
      bg: 'bg-amber-50 border-amber-100'
    },
    { 
      type: 'system', 
      title: 'Server maintenance', 
      desc: 'Scheduled maintenance completed.', 
      time: '5 hours ago',
      icon: <Server className="w-4 h-4 text-slate-600" />,
      bg: 'bg-slate-50 border-slate-200'
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-slate-100 h-full flex flex-col">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800">Activity Feed</h3>
          <p className="text-sm text-slate-500 font-medium mt-0.5">Recent system activities</p>
        </div>
        <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
          View all
        </button>
      </div>

      <div className="flex-1 space-y-5">
        {activities.map((activity, idx) => (
          <div key={idx} className="flex gap-4">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center border shrink-0 ${activity.bg}`}>
              {activity.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-0.5">
                <p className="text-sm font-bold text-slate-800 truncate">{activity.title}</p>
                <span className="text-xs font-medium text-slate-400 shrink-0 ml-2">{activity.time}</span>
              </div>
              <p className="text-sm text-slate-500 truncate">{activity.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
