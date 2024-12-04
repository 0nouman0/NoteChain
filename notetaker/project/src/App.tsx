import React, { useState } from 'react';
import { BookOpen, Menu, PlusCircle } from 'lucide-react';
import { useStore } from './store/useStore';
import { NoteCard } from './components/NoteCard';
import { Navigation } from './components/Navigation';
import { Sidebar } from './components/Sidebar';
import { AddNoteModal } from './components/AddNoteModal';

function App() {
  const { currentModule, toggleSidebar } = useStore();
  const [isAddNoteModalOpen, setIsAddNoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-lg hover:bg-gray-100 mr-2"
              >
                <Menu className="w-6 h-6" />
              </button>
              <BookOpen className="w-8 h-8 text-blue-500 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Decentralized Learning Platform</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentModule && (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{currentModule.title}</h2>
              <div className="h-1 w-20 bg-blue-500"></div>
            </div>

            <div className="space-y-6">
              {currentModule.notes.map((note) => (
                <NoteCard key={note.id} note={note} />
              ))}
            </div>

            <Navigation />

            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => setIsAddNoteModalOpen(true)}
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
              >
                <PlusCircle className="w-5 h-5 mr-2" />
                Add Note
              </button>
            </div>
          </>
        )}
      </main>

      <AddNoteModal
        isOpen={isAddNoteModalOpen}
        onClose={() => setIsAddNoteModalOpen(false)}
      />
    </div>
  );
}

export default App;