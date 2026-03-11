import React, { useState } from 'react';
import {
  DndContext,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { 
  Calendar, 
  MessageSquare, 
  Link as LinkIcon, 
  Plus, 
  MoreHorizontal, 
  Filter,
  ChevronRight,
  X as CloseIcon
} from 'lucide-react';
import CustomDatePicker from './CustomDatePicker';

// --- Types ---

interface Task {
  id: string;
  title: string;
  columnId: string;
  date: string;
  comments: number;
  links?: number;
  tag: string;
  tagColor: string;
  userImage: string;
  imageUrl?: string;
  description?: string;
}

interface Column {
  id: string;
  title: string;
}

// --- Initial Data ---

const initialColumns: Column[] = [
  { id: 'todo', title: 'To Do' },
  { id: 'inProgress', title: 'In Progress' },
  { id: 'completed', title: 'Completed' },
];

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Finish user onboarding',
    columnId: 'todo',
    date: 'Tomorrow',
    comments: 1,
    tag: 'Development',
    tagColor: 'bg-orange-50 text-orange-500 border-orange-100',
    userImage: 'https://i.pravatar.cc/150?u=1'
  },
  {
    id: '2',
    title: 'Change license and remove products',
    columnId: 'todo',
    date: 'Jan 8, 2027',
    comments: 0,
    tag: 'Dev',
    tagColor: 'bg-blue-50 text-blue-500 border-blue-100',
    userImage: 'https://i.pravatar.cc/150?u=2'
  },
  {
    id: '3',
    title: 'Kanban manager',
    columnId: 'todo',
    date: 'Jan 8, 2027',
    comments: 8,
    links: 2,
    tag: 'Template',
    tagColor: 'bg-emerald-50 text-emerald-500 border-emerald-100',
    userImage: 'https://i.pravatar.cc/150?u=3'
  },
  {
    id: '4',
    title: 'Solve the dribble prioritization issue with the team',
    columnId: 'inProgress',
    date: 'Jan 08, 2027',
    comments: 1,
    tag: 'Marketing',
    tagColor: 'bg-purple-50 text-purple-500 border-purple-100',
    userImage: 'https://i.pravatar.cc/150?u=4'
  },
  {
    id: '5',
    title: 'Work in progress(WIP) Dashboard',
    columnId: 'inProgress',
    date: 'Today',
    comments: 1,
    tag: 'Development',
    tagColor: 'bg-orange-50 text-orange-500 border-orange-100',
    userImage: 'https://i.pravatar.cc/150?u=5'
  },
  {
    id: '6',
    title: 'Product Update - Q4 (2024)',
    columnId: 'inProgress',
    date: 'Today',
    comments: 1,
    description: 'Dedicated from a category of users that will perform actions.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400',
    tag: 'Development',
    tagColor: 'bg-orange-50 text-orange-500 border-orange-100',
    userImage: 'https://i.pravatar.cc/150?u=6'
  },
  {
    id: '7',
    title: 'Make figbot send comment when ticket is auto-moved back to inbox',
    columnId: 'inProgress',
    date: 'Mar 08, 2027',
    comments: 1,
    tag: 'Dev',
    tagColor: 'bg-blue-50 text-blue-500 border-blue-100',
    userImage: 'https://i.pravatar.cc/150?u=7'
  },
  {
    id: '8',
    title: 'Manage internal feedback',
    columnId: 'completed',
    date: 'Tomorrow',
    comments: 1,
    tag: 'Dev',
    tagColor: 'bg-blue-50 text-blue-500 border-blue-100',
    userImage: 'https://i.pravatar.cc/150?u=8'
  },
  {
    id: '9',
    title: 'Do some projects on React Native with Flutter',
    columnId: 'completed',
    date: 'Jan 8, 2027',
    comments: 1,
    tag: 'Development',
    tagColor: 'bg-orange-50 text-orange-500 border-orange-100',
    userImage: 'https://i.pravatar.cc/150?u=9'
  },
  {
    id: '10',
    title: 'Design marketing assets',
    columnId: 'completed',
    date: 'Jan 08, 2027',
    comments: 2,
    links: 1,
    tag: 'Marketing',
    tagColor: 'bg-purple-50 text-purple-500 border-purple-100',
    userImage: 'https://i.pravatar.cc/150?u=10'
  }
];

// --- Components ---

const TaskCard = ({ task, isOverlay = false }: { task: Task; isOverlay?: boolean }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: 'Task',
      task,
    },
  });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="opacity-30 bg-white dark:bg-slate-800 rounded-2xl border-2 border-dashed border-indigo-200 dark:border-indigo-900 h-[100px] w-full mb-4"
      />
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all active:scale-[0.98] group cursor-grab active:cursor-grabbing mb-4 ${isOverlay ? 'shadow-xl ring-2 ring-indigo-500/20 rotate-1' : ''}`}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {task.title}
        </h3>
        <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border-2 border-white dark:border-slate-700 shadow-sm">
          <img src={task.userImage} alt="user" className="w-full h-full object-cover" />
        </div>
      </div>

      {task.description && (
        <p className="text-[13px] text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
          {task.description}
        </p>
      )}

      {task.imageUrl && (
        <div className="mb-4 rounded-xl overflow-hidden aspect-[16/9] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
           <img src={task.imageUrl} alt="preview" className="w-full h-full object-cover" />
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-y-3 pt-1">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
            <Calendar className="w-4 h-4" />
            <span className="text-[13px] font-medium">{task.date}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
            <MessageSquare className="w-4 h-4" />
            <span className="text-[13px] font-medium">{task.comments}</span>
          </div>
          {task.links !== undefined && (
            <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
              <LinkIcon className="w-4 h-4" />
              <span className="text-[13px] font-medium">{task.links}</span>
            </div>
          )}
        </div>
        
        <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider border ${task.tagColor}`}>
          {task.tag}
        </span>
      </div>
    </div>
  );
};

const KanbanColumn = ({ column, tasks }: { column: Column; tasks: Task[] }) => {
  return (
    <div 
      className="flex flex-col w-full h-full bg-slate-50/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200/50 dark:border-slate-800/50"
    >
      <div className="p-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">
            {column.title}
          </h2>
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200/60 dark:bg-slate-800 text-[12px] font-bold text-slate-600 dark:text-slate-400">
            {tasks.length}
          </span>
        </div>
        <button className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <SortableContext
        id={column.id}
        items={tasks.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex-1 overflow-y-auto px-4 pb-4 min-h-[150px] custom-scrollbar">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
          {tasks.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full py-12 opacity-20">
               <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center mb-2">
                 <Plus className="w-6 h-6" />
               </div>
               <p className="text-xs font-bold uppercase tracking-wider">Empty</p>
            </div>
          )}
        </div>
      </SortableContext>
    </div>
  );
};

const TaskKanban: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [activeTab, setActiveTab] = useState('All Tasks');
  
  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
      title: '',
      date: '',
      columnId: 'todo',
      tag: 'Development',
      assignee: 'Mayad Ahmed',
      description: ''
  });

  const tagsList = [
      { name: 'Development', color: 'bg-orange-50 text-orange-500 border-orange-100' },
      { name: 'Dev', color: 'bg-blue-50 text-blue-500 border-blue-100' },
      { name: 'Template', color: 'bg-emerald-50 text-emerald-500 border-emerald-100' },
      { name: 'Marketing', color: 'bg-purple-50 text-purple-500 border-purple-100' }
  ];

  const assignees = [
      { name: 'Mayad Ahmed', image: 'https://i.pravatar.cc/150?u=1' },
      { name: 'John Doe', image: 'https://i.pravatar.cc/150?u=12' },
      { name: 'Jane Smith', image: 'https://i.pravatar.cc/150?u=13' }
  ];

  const sensors = useSensors(
    useSensor(PointerSensor, {
        activationConstraint: {
            distance: 8, // Reduce accidental drags
        },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const tabs = ['All Tasks', 'To do', 'In Progress', 'Completed'];

  const onDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === 'Task') {
      setActiveTask(event.active.data.current.task);
    }
  };

  const onDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === 'Task';
    const isOverATask = over.data.current?.type === 'Task';

    if (!isActiveATask) return;

    // Im dropping a Task over another Task
    if (isActiveATask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);

        if (tasks[activeIndex].columnId !== tasks[overIndex].columnId) {
          tasks[activeIndex].columnId = tasks[overIndex].columnId;
          return arrayMove(tasks, activeIndex, overIndex - 1);
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current?.type === 'Column';

    // Im dropping a Task over a column
    if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        tasks[activeIndex].columnId = overId as string;
        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  };

  const onDragEnd = (event: DragEndEvent) => {
      setActiveTask(null);
      
      const { active, over } = event;
      if (!over) return;

      const activeId = active.id;
      const overId = over.id;

      if (activeId === overId) return;

      const isActiveATask = active.data.current?.type === 'Task';
      const isOverATask = over.data.current?.type === 'Task';

      if (isActiveATask && isOverATask) {
          setTasks((tasks) => {
              const activeIndex = tasks.findIndex((t) => t.id === activeId);
              const overIndex = tasks.findIndex((t) => t.id === overId);
              
              if (tasks[activeIndex].columnId !== tasks[overIndex].columnId) {
                  tasks[activeIndex].columnId = tasks[overIndex].columnId;
              }

              return arrayMove(tasks, activeIndex, overIndex);
          });
      }
  };

  const handleCreateTask = (e: React.FormEvent) => {
      e.preventDefault();
      if (!formData.title) return;

      const selectedTag = tagsList.find(t => t.name === formData.tag) || tagsList[0];
      const selectedAssignee = assignees.find(a => a.name === formData.assignee) || assignees[0];

      const newTask: Task = {
          id: Math.random().toString(36).substr(2, 9),
          title: formData.title,
          columnId: formData.columnId,
          date: formData.date || 'Today',
          comments: 0,
          tag: formData.tag,
          tagColor: selectedTag.color,
          userImage: selectedAssignee.image,
          description: formData.description
      };

      setTasks([newTask, ...tasks]);
      setIsModalOpen(false);
      setFormData({
          title: '',
          date: '',
          columnId: 'todo',
          tag: 'Development',
          assignee: 'Mayad Ahmed',
          description: ''
      });
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            Task Kanban
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>Home</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">Task Kanban</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
                <Filter className="w-4 h-4" />
                Filter & Short
            </button>
            <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#4B62FA] hover:bg-indigo-600 rounded-xl text-sm font-bold text-white transition-all shadow-lg shadow-indigo-100 dark:shadow-none"
            >
                <Plus className="w-4 h-4" />
                Add New Task
            </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-1 w-full sm:w-fit shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-[14px] font-bold transition-all ${
              activeTab === tab
                ? 'bg-[#F3F5FF] dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            {tab}
            {tab === 'All Tasks' && (
               <span className="text-[11px] bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 px-1.5 py-0.5 rounded-md">14</span>
            )}
            {tab === 'To do' && (
               <span className="text-[11px] bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-1.5 py-0.5 rounded-md">3</span>
            )}
            {tab === 'In Progress' && (
               <span className="text-[11px] bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 px-1.5 py-0.5 rounded-md">4</span>
            )}
            {tab === 'Completed' && (
               <span className="text-[11px] bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded-md">4</span>
            )}
          </button>
        ))}
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 min-h-[70vh]">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
        >
          {initialColumns.map((col) => (
            <KanbanColumn
              key={col.id}
              column={col}
              tasks={tasks.filter((t) => t.columnId === col.id)}
            />
          ))}

          <DragOverlay dropAnimation={{
              sideEffects: defaultDropAnimationSideEffects({
                  styles: {
                      active: {
                          opacity: '0.5',
                      },
                  },
              }),
          }}>
            {activeTask ? <TaskCard task={activeTask} isOverlay /> : null}
          </DragOverlay>
        </DndContext>
      </div>

      {/* Add New Task Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div 
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                onClick={() => setIsModalOpen(false)}
            />
            
            <div className="relative w-full max-w-[640px] bg-white dark:bg-slate-900 rounded-[24px] shadow-2xl shadow-slate-900/20 overflow-hidden animate-in fade-in zoom-in duration-300">
                {/* Modal Header */}
                <div className="p-8 pb-4">
                    <div className="flex items-center justify-between mb-1">
                        <h2 className="text-[24px] font-bold text-slate-900 dark:text-white">Add a new task</h2>
                        <button 
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                        >
                            <CloseIcon className="w-5 h-5" />
                        </button>
                    </div>
                    <p className="text-[14px] text-slate-500 dark:text-slate-400">
                        Effortlessly manage your to-do list: add a new task
                    </p>
                </div>

                <form onSubmit={handleCreateTask} className="p-8 pt-0 space-y-6">
                    <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                        {/* Task Title */}
                        <div className="space-y-1.5">
                            <label className="text-[14px] font-bold text-slate-700 dark:text-slate-300 ml-1">Task Title</label>
                            <input
                                type="text"
                                required
                                value={formData.title}
                                onChange={(e) => setFormData({...formData, title: e.target.value})}
                                placeholder="Enter task title"
                                className="w-full px-4 py-3 rounded-xl border border-slate-100 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 transition-all focus:border-indigo-500"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Due Date */}
                            <div className="space-y-1.5">
                                <label className="text-[14px] font-bold text-slate-700 dark:text-slate-300 ml-1">Due Date</label>
                                <CustomDatePicker 
                                    placeholder="연도. 월. 일."
                                    onChange={(date) => {
                                        if (date instanceof Date) {
                                            const formatted = date.toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            });
                                            setFormData({...formData, date: formatted});
                                        }
                                    }}
                                />
                            </div>
                            {/* Status */}
                            <div className="space-y-1.5">
                                <label className="text-[14px] font-bold text-slate-700 dark:text-slate-300 ml-1">Status</label>
                                <div className="relative">
                                    <select 
                                        className="w-full px-4 py-3 rounded-xl border border-slate-100 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 appearance-none transition-all focus:border-indigo-500"
                                        value={formData.columnId}
                                        onChange={(e) => setFormData({...formData, columnId: e.target.value})}
                                    >
                                        <option value="todo">To Do</option>
                                        <option value="inProgress">In Progress</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Tags */}
                            <div className="space-y-1.5">
                                <label className="text-[14px] font-bold text-slate-700 dark:text-slate-300 ml-1">Tags</label>
                                <div className="relative">
                                    <select 
                                        className="w-full px-4 py-3 rounded-xl border border-slate-100 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 appearance-none transition-all focus:border-indigo-500"
                                        value={formData.tag}
                                        onChange={(e) => setFormData({...formData, tag: e.target.value})}
                                    >
                                        {tagsList.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
                                    </select>
                                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90 pointer-events-none" />
                                </div>
                            </div>
                            {/* Assignees */}
                            <div className="space-y-1.5">
                                <label className="text-[14px] font-bold text-slate-700 dark:text-slate-300 ml-1">Assignees</label>
                                <div className="relative">
                                    <select 
                                        className="w-full px-4 py-3 rounded-xl border border-slate-100 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 appearance-none transition-all focus:border-indigo-500"
                                        value={formData.assignee}
                                        onChange={(e) => setFormData({...formData, assignee: e.target.value})}
                                    >
                                        {assignees.map(a => <option key={a.name} value={a.name}>{a.name}</option>)}
                                    </select>
                                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-1.5">
                            <label className="text-[14px] font-bold text-slate-700 dark:text-slate-300 ml-1">Description</label>
                            <textarea
                                placeholder="Type your message here..."
                                rows={4}
                                value={formData.description}
                                onChange={(e) => setFormData({...formData, description: e.target.value})}
                                className="w-full px-4 py-3 rounded-xl border border-slate-100 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 resize-none transition-all focus:border-indigo-500"
                            />
                        </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800">
                        <div className="flex items-center gap-1">
                            <span className="text-[13px] font-medium text-slate-400 dark:text-slate-500 mr-2">Viewers:</span>
                            <div className="flex -space-x-2">
                                <img className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 object-cover" src="https://i.pravatar.cc/150?u=a" alt="" />
                                <img className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 object-cover" src="https://i.pravatar.cc/150?u=b" alt="" />
                                <img className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 object-cover" src="https://i.pravatar.cc/150?u=c" alt="" />
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button 
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit"
                                className="px-6 py-2.5 rounded-xl bg-[#4B62FA] hover:bg-indigo-600 text-sm font-bold text-white shadow-lg shadow-indigo-100 dark:shadow-none transition-all active:scale-95"
                            >
                                Create Task
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      )}
    </div>
  );
};

export default TaskKanban;
