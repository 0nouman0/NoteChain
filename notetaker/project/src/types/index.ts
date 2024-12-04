export interface Note {
  id: string;
  title: string;
  content: string;
  likes: number;
  views: number;
  moduleId: string;
  wordCount?: number;
  status: 'published' | 'pending';
  createdAt: string;
}

export interface Module {
  id: string;
  title: string;
  notes: Note[];
}

export interface ViewTracking {
  noteId: string;
  startTime: number;
  minimumReadTime: number;
  hasValidView: boolean;
}