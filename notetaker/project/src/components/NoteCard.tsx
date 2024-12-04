import React, { useEffect } from 'react';
import { Eye, ThumbsUp, Clock } from 'lucide-react';
import { Note } from '../types';
import { useStore } from '../store/useStore';
import { calculateReadingTime } from '../utils/readingTime';

interface NoteCardProps {
  note: Note;
}

export const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const { incrementLikes, trackView, completeView } = useStore();
  const readingTime = calculateReadingTime(note.content);

  useEffect(() => {
    trackView(note.id, note.content);
    const timer = setTimeout(() => {
      completeView(note.id);
    }, 1000); // Check every second

    return () => clearTimeout(timer);
  }, [note.id, note.content]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{note.title}</h2>
        {note.status === 'pending' && (
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
            Pending Review
          </span>
        )}
      </div>
      
      <p className="text-gray-600 mb-6">{note.content}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-500">
            <Eye className="w-5 h-5 mr-2" />
            <span>{note.views}</span>
          </div>
          <button
            onClick={() => incrementLikes(note.id)}
            className="flex items-center text-gray-500 hover:text-blue-500 transition-colors"
          >
            <ThumbsUp className="w-5 h-5 mr-2" />
            <span>{note.likes}</span>
          </button>
          <div className="flex items-center text-gray-500">
            <Clock className="w-5 h-5 mr-2" />
            <span>{readingTime} min read</span>
          </div>
        </div>
      </div>
    </div>
  );
};