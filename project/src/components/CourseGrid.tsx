import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { courses } from '../data/courses';
import { domains } from '../data/domains';
import { ExternalLink, Plus, Gift } from 'lucide-react';

export default function CourseGrid() {
  const { domainId } = useParams();
  const domain = domains.find(d => d.id === domainId);
  const domainCourses = courses[domainId || ''] || [];

  if (!domain) {
    return <div>Domain not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
      >
        {domain.title} Courses
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10 max-w-7xl mx-auto">
        {domainCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)',
              zIndex: 1
            }}
            className="bg-white rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:border-blue-500 border-2 border-transparent"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 min-h-[3.5rem]">
                {course.title}
              </h3>
              <p className="text-gray-600 line-clamp-2 min-h-[3rem]">
                {course.description}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="font-medium">{course.platform}</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full font-medium">
                  {course.duration}
                </span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  <ExternalLink className="w-4 h-4" />
                  View Course
                </button>
                <div className="flex gap-2">
                  <button className="p-2.5 rounded-lg hover:bg-gray-100 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                  <button className="p-2.5 rounded-lg hover:bg-gray-100 transition-colors">
                    <Gift className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}