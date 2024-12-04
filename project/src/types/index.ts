export interface Domain {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  platform: string;
  duration: string;
  imageUrl: string;
}