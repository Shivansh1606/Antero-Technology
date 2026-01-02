import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Award, CheckCircle, Building2, DollarSign } from 'lucide-react';

const Placement = () => {
  const companies = [
    "TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra", 
    "Accenture", "IBM", "Cognizant", "Capgemini", "L&T Infotech",
    "Cisco", "Microsoft", "Oracle", "HP", "Dell"
  ];

  const placementStats = [
    { icon: <Briefcase className="w-8 h-8" />, value: "95%", label: "Placement Rate" },
    { icon: <Building2 className="w-8 h-8" />, value: "200+", label: "Partner Companies" },
    { icon: <DollarSign className="w-8 h-8" />, value: "₹4.5 LPA", label: "Average Package" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "₹12 LPA", label: "Highest Package" },
  ];

  const eligibility = [
    "B.Tech / BCA / MCA graduates",
    "BBA / MBA professionals",
    "B.A. / B.Sc / B.Com graduates",
    "Polytechnic diploma holders",
    "Minimum 6 months work experience preferred"
  ];

  const benefits = [
    {
      icon: "🎯",
      title: "Resume Building",
      description: "Professional resume preparation by experts"
    },
    {
      icon: "💼",
      title: "Interview Preparation",
      description: "Mock interviews and soft skills training"
    },
    {
      icon: "🤝",
      title: "Direct Recruitment",
      description: "On-campus recruitment drives with MNCs"
    },
    {
      icon: "📈",
      title: "Career Guidance",
      description: "One-on-one career counseling sessions"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl font-bold mb-6">Career Placement Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Launch your IT career with our comprehensive placement support. We connect 
            trained professionals with top MNCs and growing companies.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {placementStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="text-primary mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Placement Support Benefits</h2>
            <p className="text-xl text-gray-600">Complete career assistance from training to placement</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Who Can Apply?</h2>
              <p className="text-lg text-gray-600 mb-6">
                We welcome graduates and professionals from various educational backgrounds 
                to join our placement programs.
              </p>
              <div className="space-y-4">
                {eligibility.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white"
            >
              <Award className="w-16 h-16 mb-4" />
              <h3 className="text-3xl font-bold mb-4">Salary Range</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <p className="text-sm text-blue-100">Entry Level</p>
                  <p className="text-2xl font-bold">₹10,000 - ₹15,000/month</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <p className="text-sm text-blue-100">With Experience</p>
                  <p className="text-2xl font-bold">₹3 - ₹6 LPA</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <p className="text-sm text-blue-100">Senior Roles</p>
                  <p className="text-2xl font-bold">₹8 - ₹12 LPA</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Hiring Partners</h2>
            <p className="text-xl text-gray-600">Top companies that recruit our trained professionals</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
              {companies.map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-50 p-4 rounded-lg text-center font-semibold text-gray-700 hover:bg-primary hover:text-white transition-all cursor-pointer"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Career?</h2>
          <p className="text-xl mb-8 text-green-100">
            Send your resume to career@antero.in with your photo ID and passport-size photograph
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="mailto:career@antero.in"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Email Your Resume
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Placement;
