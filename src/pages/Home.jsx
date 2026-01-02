import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Briefcase, TrendingUp } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "5000+", label: "Students Trained" },
    { icon: <Award className="w-8 h-8" />, value: "50+", label: "Courses Offered" },
    { icon: <Briefcase className="w-8 h-8" />, value: "95%", label: "Placement Rate" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "200+", label: "Partner Companies" },
  ];

  const features = [
    {
      title: "Industry Expert Trainers",
      description: "Learn from professionals with years of real-world experience",
      icon: "👨‍🏫"
    },
    {
      title: "Hands-on Projects",
      description: "Work on live projects to build your portfolio",
      icon: "💼"
    },
    {
      title: "Certification Programs",
      description: "Get certified in Cisco, Microsoft, and Red Hat technologies",
      icon: "🎓"
    },
    {
      title: "Job Placement Support",
      description: "100% placement assistance with top MNCs and companies",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold leading-tight"
              >
                Transform Your Career with
                <span className="text-yellow-400"> Expert Training</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-blue-100"
              >
                Premier technology training provider registered under MSME Government of India. 
                Master industry-standard technologies with Cisco, Microsoft, and Red Hat certifications.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link 
                  to="/courses"
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all flex items-center gap-2 group"
                >
                  Explore Courses
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden md:block"
            >
              <div className="relative w-full h-96 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-2xl"></div>
                <div className="relative z-10 flex flex-col justify-center h-full">
                  <h3 className="text-2xl font-bold mb-4">🎯 Your Success Journey</h3>
                  <ul className="space-y-3 text-lg">
                    <li>✅ Industry-Standard Training</li>
                    <li>✅ Hands-on Experience</li>
                    <li>✅ Certification Support</li>
                    <li>✅ Job Placement Assistance</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          ></motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Antero Technology?</h2>
            <p className="text-xl text-gray-600">Your gateway to a successful IT career</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-gray-100"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students who have transformed their careers with our expert training programs
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Enroll Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
