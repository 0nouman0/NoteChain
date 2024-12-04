import { create } from 'zustand';
import { Note, Module, ViewTracking } from '../types';
import { calculateMinimumViewTime } from '../utils/readingTime';

interface Store {
  currentModule: Module | null;
  modules: Module[];
  isSidebarOpen: boolean;
  viewTracking: ViewTracking[];
  setCurrentModule: (moduleId: string) => void;
  toggleSidebar: () => void;
  incrementLikes: (noteId: string) => void;
  trackView: (noteId: string, content: string) => void;
  completeView: (noteId: string) => void;
  addNote: (note: { title: string; content: string; moduleId: string }) => void;
}

const mockModules: Module[] = [
  {
    id: '1',
    title: 'Introduction to Blockchain',
    notes: [
      {
        id: '1',
        title: 'What is Blockchain?',
        content: 'Blockchain is a decentralized, distributed ledger technology...',
        likes: 42,
        views: 156,
        moduleId: '1',
        status: 'published',
        createdAt: new Date().toISOString()
      }
    ]
  },
  {
    id: '2',
    title: 'Smart Contracts',
    notes: [
      {
        id: '2',
        title: 'Understanding Smart Contracts',
        content: 'Smart contracts are self-executing contracts with terms...',
        likes: 28,
        views: 98,
        moduleId: '2',
        status: 'published',
        createdAt: new Date().toISOString()
      }
    ]
  }
];

export const useStore = create<Store>((set) => ({
  currentModule: mockModules[0],
  modules: mockModules,
  isSidebarOpen: false,
  viewTracking: [],

  setCurrentModule: (moduleId) => {
    set((state) => ({
      currentModule: state.modules.find((m) => m.id === moduleId) || state.currentModule
    }));
  },

  toggleSidebar: () => {
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen }));
  },

  incrementLikes: (noteId) => {
    set((state) => ({
      modules: state.modules.map((module) => ({
        ...module,
        notes: module.notes.map((note) =>
          note.id === noteId ? { ...note, likes: note.likes + 1 } : note
        )
      })),
      currentModule: state.currentModule ? {
        ...state.currentModule,
        notes: state.currentModule.notes.map((note) =>
          note.id === noteId ? { ...note, likes: note.likes + 1 } : note
        )
      } : null
    }));
  },

  trackView: (noteId, content) => {
    const minimumReadTime = calculateMinimumViewTime(content);
    set((state) => ({
      viewTracking: [
        ...state.viewTracking,
        {
          noteId,
          startTime: Date.now(),
          minimumReadTime,
          hasValidView: false
        }
      ]
    }));
  },

  completeView: (noteId) => {
    set((state) => {
      const tracking = state.viewTracking.find(
        (t) => t.noteId === noteId && !t.hasValidView
      );

      if (!tracking) return state;

      const timeSpent = Date.now() - tracking.startTime;
      if (timeSpent < tracking.minimumReadTime) return state;

      return {
        modules: state.modules.map((module) => ({
          ...module,
          notes: module.notes.map((note) =>
            note.id === noteId ? { ...note, views: note.views + 1 } : note
          )
        })),
        currentModule: state.currentModule ? {
          ...state.currentModule,
          notes: state.currentModule.notes.map((note) =>
            note.id === noteId ? { ...note, views: note.views + 1 } : note
          )
        } : null,
        viewTracking: state.viewTracking.map((t) =>
          t === tracking ? { ...t, hasValidView: true } : t
        )
      };
    });
  },

  addNote: (note) => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: note.title,
      content: note.content,
      likes: 0,
      views: 0,
      moduleId: note.moduleId,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    set((state) => ({
      modules: state.modules.map((module) =>
        module.id === note.moduleId
          ? { ...module, notes: [...module.notes, newNote] }
          : module
      ),
      currentModule: state.currentModule?.id === note.moduleId
        ? { ...state.currentModule, notes: [...state.currentModule.notes, newNote] }
        : state.currentModule
    }));
  }
}));