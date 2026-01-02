import { motion } from 'framer-motion';
import { Clock, Award, ArrowRight, BookOpen } from 'lucide-react';

const CourseCard = ({ course, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-primary group"
    >
      {/* Course Icon */}
      <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
        {course.icon}
      </div>

      {/* Course Name */}
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
        {course.name}
      </h3>

      {/* Course Description */}
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {course.description}
      </p>

      {/* Course Details */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Clock className="w-4 h-4 text-primary" />
          <span className="font-medium">Duration:</span>
          <span>{course.duration}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Award className="w-4 h-4 text-secondary" />
          <span className="font-medium">Level:</span>
          <span>{course.level}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-700">
          <BookOpen className="w-4 h-4 text-orange-500" />
          <span className="font-medium">Certificate:</span>
          <span>Included</span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200 mb-4"></div>

      {/* CTA Button */}
      <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
        <span>Learn More</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Badge */}
      <div className="mt-4 inline-block">
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
          ⭐ Popular Course
        </span>
      </div>
    </motion.div>
  );
};

export default CourseCard;
