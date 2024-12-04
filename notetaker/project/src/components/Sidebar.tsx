import React from 'react';
import { BookOpen, ChevronLeft } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Sidebar: React.FC = () => {
  const { modules, currentModule, setCurrentModule, isSidebarOpen, toggleSidebar } = useStore();

  return (
    <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
      w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-30`}>
      <div className="h-full flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center">
            <BookOpen className="w-6 h-6 text-blue-500 mr-2" />
            <h2 className="text-lg font-semibold">Modules</h2>
          </div>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => {
                setCurrentModule(module.id);
                toggleSidebar();
              }}
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 ${
                currentModule?.id === module.id ? 'bg-blue-50 text-blue-600' : ''
              }`}
            >
              <h3 className="font-medium">{module.title}</h3>
              <p className="text-sm text-gray-500">{module.notes.length} notes</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};