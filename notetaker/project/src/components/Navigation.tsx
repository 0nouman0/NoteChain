import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Navigation: React.FC = () => {
  const { modules, currentModule, setCurrentModule } = useStore();

  const currentIndex = modules.findIndex(m => m.id === currentModule?.id);
  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < modules.length - 1;

  const handleNavigation = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex >= 0 && newIndex < modules.length) {
      setCurrentModule(modules[newIndex].id);
    }
  };

  return (
    <div className="flex justify-between mt-8">
      <button
        onClick={() => handleNavigation('prev')}
        disabled={!canGoPrevious}
        className={`flex items-center px-4 py-2 rounded-lg ${
          canGoPrevious
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        <ChevronLeft className="w-5 h-5 mr-2" />
        Previous Module
      </button>
      <button
        onClick={() => handleNavigation('next')}
        disabled={!canGoNext}
        className={`flex items-center px-4 py-2 rounded-lg ${
          canGoNext
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Next Module
        <ChevronRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
};