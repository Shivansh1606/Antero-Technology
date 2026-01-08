import { motion } from 'framer-motion';
import { coursesData } from '../data/coursesData';
import { Clock, Award, ArrowRight, BookOpen, Users, Trophy, Target, CheckCircle } from 'lucide-react';


const Training = () => {
  const categories = [
    { key: 'cisco', title: 'Cisco Certifications', color: 'from-blue-500 to-blue-600', icon: '🌐', bgColor: 'bg-blue-50' },
    { key: 'microsoft', title: 'Microsoft Certifications', color: 'from-green-500 to-green-600', icon: '🪟', bgColor: 'bg-green-50' },
    { key: 'redhat', title: 'Red Hat Linux', color: 'from-red-500 to-red-600', icon: '🎩', bgColor: 'bg-red-50' },
    { key: 'networking', title: 'Networking Technologies', color: 'from-purple-500 to-purple-600', icon: '📡', bgColor: 'bg-purple-50' },
    { key: 'hardware', title: 'Hardware Training', color: 'from-orange-500 to-orange-600', icon: '🔧', bgColor: 'bg-orange-50' },
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "10,000+", label: "Certified Professionals" },
    { icon: <Trophy className="w-8 h-8" />, value: "25+", label: "Certification Programs" },
    { icon: <Target className="w-8 h-8" />, value: "95%", label: "Success Rate" },
    { icon: <CheckCircle className="w-8 h-8" />, value: "100%", label: "Placement Support" },
  ];

  const whyChoose = [
    { icon: "👨‍🏫", title: "Expert Trainers", desc: "Industry professionals with 10+ years experience" },
    { icon: "💼", title: "Live Projects", desc: "Hands-on training with real networking scenarios" },
    { icon: "🎓", title: "Global Certification", desc: "Prepare for Cisco, Microsoft, Red Hat exams" },
    { icon: "🚀", title: "100% Placement", desc: "Dedicated placement cell with top IT companies" },
    { icon: "🏢", title: "MSME Registered", desc: "Government recognized training institute" },
    { icon: "⚡", title: "Modern Lab", desc: "Latest equipment and software for practice" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Background Image */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80")',
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

          </motion.div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Professional Training Programs
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
            Master hardware and networking technologies with industry-standard certifications from 
            Cisco, Microsoft, and Red Hat with 100% hands-on practical training
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

      {/* Training Programs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Training Categories */}
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
              <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center text-3xl shadow-lg transform hover:scale-110 transition-transform`}>
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
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-4xl mb-4 transform group-hover:scale-110 transition-transform">
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
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700 bg-blue-50 p-2 rounded-lg">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 bg-green-50 p-2 rounded-lg">
                      <Award className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="font-medium">{course.level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 bg-purple-50 p-2 rounded-lg">
                      <BookOpen className="w-4 h-4 text-purple-500 flex-shrink-0" />
                      <span className="font-medium">Certificate Included</span>
                    </div>
                  </div>

                  {/* Topics */}
                  {course.topics && course.topics.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Key Topics:</p>
                      <div className="flex flex-wrap gap-1">
                        {course.topics.slice(0, 3).map((topic, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="h-px bg-gray-200 mb-4"></div>

                  {/* Placement Badge */}
                  <div className="flex items-center justify-center">
                    <span className="bg-gradient-to-r from-green-100 to-green-50 text-green-700 text-xs font-semibold px-4 py-2 rounded-full inline-flex items-center gap-1 border border-green-200">
                      <span className="text-lg">⭐</span>
                      <span>100% Placement Support</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Antero Technology Group?
            </h2>
            <p className="text-xl text-gray-600">Industry-leading training with guaranteed career support</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80")',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Ready to Start Your Certification Journey?</h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 drop-shadow-md">
            Join thousands of certified professionals. Enroll today and transform your IT career
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
              <span>📞</span> Talk to Advisor
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


export default Training;
