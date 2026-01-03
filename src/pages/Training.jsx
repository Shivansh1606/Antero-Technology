import { motion } from 'framer-motion';
import { coursesData } from '../data/coursesData';
import { Clock, Award, ArrowRight, BookOpen } from 'lucide-react';

const Training = () => {
  const categories = [
    { key: 'cisco', title: 'Cisco Certifications', color: 'from-blue-500 to-blue-600', icon: '🌐' },
    { key: 'microsoft', title: 'Microsoft Certifications', color: 'from-green-500 to-green-600', icon: '🪟' },
    { key: 'redhat', title: 'Red Hat Linux', color: 'from-red-500 to-red-600', icon: '🎩' },
    { key: 'networking', title: 'Networking Technologies', color: 'from-purple-500 to-purple-600', icon: '📡' },
    { key: 'hardware', title: 'Hardware Training', color: 'from-orange-500 to-orange-600', icon: '🔧' },
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
          <div className="inline-block mb-4">
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
              MSME Registered Training Institute
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Professional Training Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master hardware and networking technologies with industry-standard certifications from 
            Cisco, Microsoft, and Red Hat with 100% hands-on practical training
          </p>
        </motion.div>

        {/* Training Categories */}
        {categories.map((category, catIndex) => (
          <motion.div
            key={category.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="mb-16"
          >
            <div className={`bg-gradient-to-r ${category.color} text-white p-8 rounded-t-2xl shadow-lg`}>
              <div className="flex items-center gap-4">
                <span className="text-5xl">{category.icon}</span>
                <div>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                  <p className="text-sm opacity-90 mt-1">Industry-recognized professional certifications</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-8 rounded-b-2xl shadow-lg">
              {coursesData[category.key].map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{course.description}</p>
                  
                  <div className="space-y-2 mb-4">
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

                  {/* Topics */}
                  {course.topics && (
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Key Topics:</p>
                      <div className="flex flex-wrap gap-1">
                        {course.topics.slice(0, 3).map((topic, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="h-px bg-gray-200 mb-4"></div>

                 {/* <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                    <span>Enroll Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>*/}
                  <div className="mt-3">
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full inline-block">
                      ⭐ 100% Placement Support
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Why Choose Our Training */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-blue-800 text-white p-12 rounded-2xl shadow-2xl mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Antero Technology Group?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "👨‍🏫", title: "Expert Trainers", desc: "Industry professionals with 10+ years experience" },
              { icon: "💼", title: "Live Projects", desc: "Hands-on training with real networking scenarios" },
              { icon: "🎓", title: "Certification", desc: "Prepare for Cisco, Microsoft, Red Hat exams" },
              { icon: "🚀", title: "100% Placement", desc: "Dedicated placement cell with top IT companies" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Training;
