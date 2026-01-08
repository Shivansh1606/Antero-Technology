import { motion } from 'framer-motion';
import { coursesData } from '../data/coursesData';
import { Clock, Award, ArrowRight, BookOpen, Users, Trophy, Target } from 'lucide-react';


const Courses = () => {
  const categories = [
    { key: 'programming', title: 'Programming Languages', color: 'from-blue-500 to-blue-600', icon: '💻', bgColor: 'bg-blue-50' },
    { key: 'webFrontend', title: 'Web Development - Frontend', color: 'from-purple-500 to-purple-600', icon: '🎨', bgColor: 'bg-purple-50' },
    { key: 'webBackend', title: 'Web Development - Backend', color: 'from-green-500 to-green-600', icon: '⚙️', bgColor: 'bg-green-50' },
    { key: 'networking', title: 'Networking & Certifications', color: 'from-orange-500 to-orange-600', icon: '🌐', bgColor: 'bg-orange-50' },
  ];

  const stats = [
    { icon: <BookOpen className="w-8 h-8" />, value: "50+", label: "Courses Available" },
    { icon: <Users className="w-8 h-8" />, value: "10,000+", label: "Students Trained" },
    { icon: <Trophy className="w-8 h-8" />, value: "95%", label: "Success Rate" },
    { icon: <Target className="w-8 h-8" />, value: "100%", label: "Job Assistance" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Background Image */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80")',
          }}
        >
          {/* Minimal dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-3 rounded-full text-sm font-bold shadow-lg">
              🎓 Industry-Standard Training Programs
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Our Courses</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-md mb-8">
            Master in-demand skills with expert-led training and hands-on projects
          </p>
        </motion.div>

        {/* Animated Background Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        ></motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100"
              >
                <div className="text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2 text-center">{stat.value}</div>
                <div className="text-gray-600 font-medium text-center text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Course Categories */}
        {categories.map((category, catIndex) => (
          <motion.div
            key={category.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="mb-20"
          >
            {/* Modern Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                {category.icon}
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{category.title}</h2>
                <div className={`h-1 w-32 bg-gradient-to-r ${category.color} rounded-full mt-2`}></div>
              </div>
            </div>
            
            {/* Course Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coursesData[category.key].map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-primary cursor-pointer"
                >
                  {/* Course Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {course.icon}
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                    {course.name}
                  </h3>

                  {/* Course Description */}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                    {course.description}
                  </p>
                  
                  {/* Course Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-700 bg-blue-50 p-2 rounded-lg">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 bg-green-50 p-2 rounded-lg">
                      <Award className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="font-medium">{course.level}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-primary transition-all flex items-center justify-center gap-2 group/btn font-semibold shadow-md hover:shadow-lg">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 text-center text-white relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Ready to Start Learning?</h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 drop-shadow-md">
            Enroll now and get access to industry-leading training programs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-primary to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-primary transition-all transform hover:scale-105 shadow-2xl"
            >
              Enroll Now
            </a>
            <a 
              href="/contact"
              className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2"
            >
              <span>📞</span> Contact Us
            </a>
          </div>
        </motion.div>

        {/* Animated Background Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 90, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -90, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        ></motion.div>
      </section>
    </div>
  );
};


export default Courses;
