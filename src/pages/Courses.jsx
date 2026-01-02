import { motion } from 'framer-motion';
import { coursesData } from '../data/coursesData';
import { Clock, Award, ArrowRight } from 'lucide-react';

const Courses = () => {
  const categories = [
    { key: 'programming', title: 'Programming Languages', color: 'from-blue-500 to-blue-600' },
    { key: 'webFrontend', title: 'Web Development - Frontend', color: 'from-purple-500 to-purple-600' },
    { key: 'webBackend', title: 'Web Development - Backend', color: 'from-green-500 to-green-600' },
    { key: 'networking', title: 'Networking & Certifications', color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600">Industry-standard training programs to boost your career</p>
        </motion.div>

        {/* Course Categories */}
        {categories.map((category, catIndex) => (
          <motion.div
            key={category.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="mb-16"
          >
            <div className={`bg-gradient-to-r ${category.color} text-white p-6 rounded-t-xl`}>
              <h2 className="text-3xl font-bold">{category.title}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-6 rounded-b-xl shadow-lg">
              {coursesData[category.key].map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="text-4xl mb-4">{course.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Award className="w-4 h-4 text-secondary" />
                      <span>{course.level}</span>
                    </div>
                  </div>

                  <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
