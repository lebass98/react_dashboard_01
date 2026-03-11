import React, { useState } from 'react';
import { 
  GripVertical, 
  MoreHorizontal, 
  Calendar, 
  MessageSquare, 
  Paperclip, 
  Plus, 
  Filter,
  Check,
  X,
  ChevronDown
} from 'lucide-react';
import CustomDatePicker from './CustomDatePicker';

interface Task {
  id: string;
  title: string;
  status: 'todo' | 'inprogress' | 'completed';
  tag?: {
    name: string;
    color: string;
  };
  dueDate?: string;
  comments?: number;
  attachments?: number;
  userAvatar: string;
  completed?: boolean;
}

const initialTasks: Task[] = [
  // To Do
  {
    id: '1',
    title: 'Finish user onboarding',
    status: 'todo',
    tag: { name: 'Marketing', color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10' },
    dueDate: 'Tomorrow',
    comments: 1,
    userAvatar: 'https://images.unsplash.com/photo-1535711603863-10d97bc7a2d4?w=100&h=100&fit=crop',
    completed: false
  },
  {
    id: '2',
    title: 'Solve the Dribbble prioritisation issue with the team',
    status: 'todo',
    dueDate: 'Jan 8, 2027',
    comments: 2,
    attachments: 1,
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    completed: true
  },
  {
    id: '3',
    title: 'Change license and remove products',
    status: 'todo',
    tag: { name: 'Marketing', color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10' },
    dueDate: 'Feb 12, 2027',
    comments: 1,
    userAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
    completed: true
  },
  // In Progress
  {
    id: '4',
    title: 'Work In Progress (WIP) Dashboard',
    status: 'inprogress',
    dueDate: 'Today',
    comments: 1,
    userAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
    completed: false
  },
  {
    id: '5',
    title: 'Kanban Flow Manager',
    status: 'inprogress',
    tag: { name: 'Template', color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10' },
    dueDate: 'Feb 12, 2027',
    comments: 8,
    attachments: 2,
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    completed: false
  },
  {
    id: '6',
    title: 'Product Update - Q4 2024',
    status: 'inprogress',
    dueDate: 'Feb 12, 2027',
    comments: 8,
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    completed: false
  },
  {
    id: '7',
    title: 'Make figbot send comment when ticket is auto-moved back to inbox',
    status: 'inprogress',
    dueDate: 'Mar 08, 2027',
    comments: 1,
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    completed: false
  },
  // Completed
  {
    id: '8',
    title: 'Manage internal feedback',
    status: 'completed',
    dueDate: 'Tomorrow',
    comments: 1,
    userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    completed: false
  },
  {
    id: '9',
    title: 'Do some projects on React Native with Flutter',
    status: 'completed',
    tag: { name: 'Development', color: 'text-orange-600 bg-orange-50 dark:bg-orange-500/10' },
    dueDate: 'Jan 8, 2027',
    userAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    completed: false
  },
  {
    id: '10',
    title: 'Design marketing assets',
    status: 'completed',
    tag: { name: 'Marketing', color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10' },
    dueDate: 'Jan 8, 2027',
    comments: 2,
    attachments: 1,
    userAvatar: 'https://images.unsplash.com/photo-1535711603863-10d97bc7a2d4?w=100&h=100&fit=crop',
    completed: false
  },
  {
    id: '11',
    title: 'Kanban Flow Manager',
    status: 'completed',
    tag: { name: 'Template', color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10' },
    dueDate: 'Feb 12, 2027',
    comments: 8,
    userAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
    completed: false
  }
];

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [activeFilter, setActiveFilter] = useState<'all' | 'todo' | 'inprogress' | 'completed'>('all');
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    dueDate: '',
    status: 'todo' as 'todo' | 'inprogress' | 'completed',
    tag: 'Marketing',
    assignee: 'Mayad Ahmed',
    description: ''
  });

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDragStart = (id: string) => {
    setDraggedTaskId(id);
  };

  const handleDrop = (status: 'todo' | 'inprogress' | 'completed') => {
    if (!draggedTaskId) return;
    
    setTasks(prev => prev.map(task => 
      task.id === draggedTaskId ? { ...task, status } : task
    ));
    setDraggedTaskId(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleCreateTask = () => {
    if (!newTask.title.trim()) return;

    const task: Task = {
      id: Date.now().toString(),
      title: newTask.title,
      status: newTask.status,
      tag: { 
        name: newTask.tag, 
        color: newTask.tag === 'Marketing' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10' : 
               newTask.tag === 'Template' ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10' : 
               'text-orange-600 bg-orange-50 dark:bg-orange-500/10' 
      },
      dueDate: newTask.dueDate || 'Today',
      comments: 0,
      userAvatar: 'https://images.unsplash.com/photo-1535711603863-10d97bc7a2d4?w=100&h=100&fit=crop',
      completed: false
    };

    setTasks([task, ...tasks]);
    setIsModalOpen(false);
    setNewTask({
      title: '',
      dueDate: '',
      status: 'todo',
      tag: 'Marketing',
      assignee: 'Mayad Ahmed',
      description: ''
    });
  };

  const filteredTasks = tasks.filter(task => {
    if (activeFilter === 'all') return true;
    return task.status === activeFilter;
  });

  const todoTasks = filteredTasks.filter(t => t.status === 'todo');
  const inProgressTasks = filteredTasks.filter(t => t.status === 'inprogress');
  const completedTasks = filteredTasks.filter(t => t.status === 'completed');

  const getTaskCount = (status: 'all' | 'todo' | 'inprogress' | 'completed') => {
    if (status === 'all') return tasks.length;
    return tasks.filter(t => t.status === status).length;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Task List</h2>
        <nav className="flex items-center gap-2 text-sm font-medium">
          <span className="text-slate-400">Home</span>
          <span className="text-slate-400">/</span>
          <span className="text-indigo-600">Task List</span>
        </nav>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-[#1A222C] p-2 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="flex flex-wrap gap-1 p-1">
          {[
            { id: 'all', label: 'All Tasks' },
            { id: 'todo', label: 'To do' },
            { id: 'inprogress', label: 'In Progress' },
            { id: 'completed', label: 'Completed' }
          ].map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as any)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${activeFilter === filter.id ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            >
              {filter.label}
              <span className={`px-1.5 py-0.5 rounded text-[10px] ${activeFilter === filter.id ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                {getTaskCount(filter.id as any)}
              </span>
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-3 px-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <Filter className="w-4 h-4" />
            Filter & Short
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors"
          >
            Add New Task
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Task Groups */}
      <div className="space-y-8 pb-10">
        {activeFilter !== 'inprogress' && activeFilter !== 'completed' && todoTasks.length > 0 && (
          <TaskGroup 
            title="To Do" 
            status="todo"
            count={todoTasks.length} 
            tasks={todoTasks} 
            onToggle={toggleTask} 
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        )}
        
        {activeFilter !== 'todo' && activeFilter !== 'completed' && inProgressTasks.length > 0 && (
          <TaskGroup 
            title="In Progress" 
            status="inprogress"
            count={inProgressTasks.length} 
            tasks={inProgressTasks} 
            onToggle={toggleTask} 
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        )}

        {activeFilter !== 'todo' && activeFilter !== 'inprogress' && completedTasks.length > 0 && (
          <TaskGroup 
            title="Completed" 
            status="completed"
            count={completedTasks.length} 
            tasks={completedTasks} 
            onToggle={toggleTask} 
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        )}
      </div>

      {/* Add New Task Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-all">
          <div className="bg-white dark:bg-[#1A222C] w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="p-8 pb-0 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Add a new task</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Effortlessly manage your to-do list: add a new task</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Task Title</label>
                <input 
                  type="text" 
                  value={newTask.title}
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                  placeholder="Enter task title"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 dark:focus:ring-indigo-900/20 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Due Date</label>
                  <CustomDatePicker 
                    placeholder="Select due date"
                    onChange={(date) => {
                      if (date instanceof Date) {
                        setNewTask({ ...newTask, dueDate: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) });
                      }
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Status</label>
                  <div className="relative">
                    <select 
                      value={newTask.status}
                      onChange={(e) => setNewTask({...newTask, status: e.target.value as any})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="todo">To Do</option>
                      <option value="inprogress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Tags</label>
                  <div className="relative">
                    <select 
                      value={newTask.tag}
                      onChange={(e) => setNewTask({...newTask, tag: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="Marketing">Marketing</option>
                      <option value="Template">Template</option>
                      <option value="Development">Development</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Assignees</label>
                  <div className="relative">
                    <select 
                      value={newTask.assignee}
                      onChange={(e) => setNewTask({...newTask, assignee: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="Mayad Ahmed">Mayad Ahmed</option>
                      <option value="Jhon Doe">Jhon Doe</option>
                      <option value="Jane Smith">Jane Smith</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Description</label>
                <textarea 
                  rows={4}
                  value={newTask.description}
                  onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                  placeholder="Enter task description"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all resize-none overflow-y-auto"
                ></textarea>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-8 pt-4 flex items-center justify-between border-t border-slate-50 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">Viewers:</span>
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1535711603863-10d97bc7a2d4?w=100&h=100&fit=crop"
                  ].map((url, i) => (
                    <img key={i} src={url} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 object-cover" alt="Viewer" />
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleCreateTask}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-lg shadow-indigo-200 dark:shadow-none transition-all active:scale-95"
                >
                  Create Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface TaskGroupProps {
  title: string;
  status: 'todo' | 'inprogress' | 'completed';
  count: number;
  tasks: Task[];
  onToggle: (id: string) => void;
  onDragStart: (id: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (status: 'todo' | 'inprogress' | 'completed') => void;
}

const TaskGroup: React.FC<TaskGroupProps> = ({ 
  title, 
  status, 
  count, 
  tasks, 
  onToggle, 
  onDragStart, 
  onDragOver, 
  onDrop 
}) => {
  return (
    <div 
      className="space-y-4 min-h-[100px]"
      onDragOver={onDragOver}
      onDrop={() => onDrop(status)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">{title}</h3>
          <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500 dark:text-slate-400">
            {count}
          </span>
        </div>
        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex flex-col gap-3">
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onToggle={onToggle} 
            onDragStart={onDragStart}
          />
        ))}
      </div>
    </div>
  );
};

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDragStart: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDragStart }) => {
  return (
    <div 
      draggable
      onDragStart={() => onDragStart(task.id)}
      className="group flex items-center gap-4 bg-white dark:bg-[#1A222C] p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all cursor-move active:opacity-50"
    >
      <div className="flex items-center gap-3 shrink-0">
        <button className="text-slate-300 dark:text-slate-600 cursor-grab active:cursor-grabbing hover:text-slate-400">
          <GripVertical className="w-5 h-5" />
        </button>
        
        <label className="flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="hidden" 
            checked={task.completed} 
            onChange={() => onToggle(task.id)} 
          />
          <div className={`w-5 h-5 rounded-[0.25rem] border flex items-center justify-center transition-all ${task.completed ? 'border-blue-500 bg-blue-500' : 'border-slate-300 dark:border-slate-600 hover:border-blue-500'}`}>
            {task.completed && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
          </div>
        </label>
      </div>

      <div className="flex-1 min-w-0">
        <span className={`text-sm font-semibold block truncate transition-all ${task.completed ? 'text-slate-400 dark:text-slate-500 line-through decoration-slate-400 decoration-1' : 'text-slate-700 dark:text-slate-200'}`}>
          {task.title}
        </span>
      </div>

      <div className="hidden sm:flex items-center gap-6 shrink-0 ml-4">
        {task.tag && (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${task.tag.color}`}>
            {task.tag.name}
          </span>
        )}
        
        {task.dueDate && (
          <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
            <Calendar className="w-4 h-4" />
            <span className="text-xs font-medium">{task.dueDate}</span>
          </div>
        )}

        {(task.comments !== undefined || task.attachments !== undefined) && (
          <div className="flex items-center gap-3">
            {task.comments !== undefined && (
              <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
                <MessageSquare className="w-4 h-4" />
                <span className="text-xs font-medium">{task.comments}</span>
              </div>
            )}
            {task.attachments !== undefined && (
              <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
                <Paperclip className="w-4 h-4" />
                <span className="text-xs font-medium">{task.attachments}</span>
              </div>
            )}
          </div>
        )}

        <img 
          src={task.userAvatar} 
          alt="Avatar" 
          className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800 object-cover" 
        />
      </div>
    </div>
  );
};

export default TaskList;
