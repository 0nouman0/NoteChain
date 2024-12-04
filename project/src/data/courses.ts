import { Course } from '../types';

const generateCoursesForDomain = (domain: string, baseId: string): Course[] => {
  const platforms = ['Coursera', 'edX', 'Udacity', 'LinkedIn Learning', 'Udemy'];
  const durations = ['4 weeks', '6 weeks', '8 weeks', '10 weeks', '12 weeks'];
  const images = [
    'photo-1677442136019-21780ecad995',
    'photo-1676277791608-ac54525aa94d',
    'photo-1675226159321-48f0cf7c19cd',
    'photo-1674027444485-cec3da58aef1',
    'photo-1673187456578-3807e658d4ab',
  ];

  return Array.from({ length: 10 }, (_, i) => ({
    id: `${baseId}-${i + 1}`,
    title: `${i < 5 ? 'Introduction to' : 'Advanced'} ${domain} ${i + 1}`,
    description: `${i < 5 ? 'Learn the fundamentals' : 'Master advanced concepts'} of ${domain} with hands-on projects and real-world applications`,
    platform: platforms[i % platforms.length],
    duration: durations[i % durations.length],
    imageUrl: `https://images.unsplash.com/${images[i % images.length]}`,
  }));
};

export const courses: Record<string, Course[]> = {
  'ai-ml': generateCoursesForDomain('Artificial Intelligence & ML', 'ai'),
  'blockchain': generateCoursesForDomain('Blockchain & Web3', 'bc'),
  'cybersecurity': generateCoursesForDomain('Cybersecurity', 'cs'),
  'data-science': generateCoursesForDomain('Data Science & Analytics', 'ds'),
  'it': generateCoursesForDomain('Information Technology', 'it'),
  'software-engineering': generateCoursesForDomain('Software Engineering', 'se'),
  'web-dev': generateCoursesForDomain('Web Development', 'wd'),
  'mobile-dev': generateCoursesForDomain('Mobile App Development', 'md'),
  'devops': generateCoursesForDomain('DevOps', 'do'),
  'cloud': generateCoursesForDomain('Cloud Computing', 'cc'),
  'iot': generateCoursesForDomain('Internet of Things', 'iot'),
  'quantum': generateCoursesForDomain('Quantum Computing', 'qc'),
};