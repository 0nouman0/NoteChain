import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { domains } from '../data/domains';

export default function DomainGrid() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
      >
        Explore Computer Science Domains
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
        {domains.map((domain, index) => (
          <motion.div
            key={domain.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)'
            }}
            className="bg-blue-800/30 backdrop-blur-sm p-8 rounded-xl border-2 border-blue-700/50 cursor-pointer transition-all duration-300 hover:border-blue-400 shadow-lg hover:shadow-blue-500/25"
            onClick={() => navigate(`/courses/${domain.id}`)}
          >
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">{domain.title}</h2>
            <p className="text-blue-200/80 text-lg">{domain.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}