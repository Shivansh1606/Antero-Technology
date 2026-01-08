import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Award, CheckCircle, Building2, DollarSign, Target, Users, Zap, Mail } from 'lucide-react';

const Placement = () => {
  const companies = [
    "TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra", 
    "Accenture", "IBM", "Cognizant", "Capgemini", "L&T Infotech",
    "Cisco", "Microsoft", "Oracle", "HP", "Dell"
  ];

  const placementStats = [
    { icon: Briefcase, value: "95%", label: "Placement Rate", color: "from-blue-500 to-blue-600", bgColor: "bg-blue-50" },
    { icon: Building2, value: "200+", label: "Partner Companies", color: "from-green-500 to-green-600", bgColor: "bg-green-50" },
    { icon: DollarSign, value: "₹4.5 LPA", label: "Average Package", color: "from-purple-500 to-purple-600", bgColor: "bg-purple-50" },
    { icon: TrendingUp, value: "₹12 LPA", label: "Highest Package", color: "from-orange-500 to-orange-600", bgColor: "bg-orange-50" },
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
      description: "Professional resume preparation by industry experts with ATS optimization"
    },
    {
      icon: "💼",
      title: "Interview Preparation",
      description: "Mock interviews, aptitude tests and soft skills training sessions"
    },
    {
      icon: "🤝",
      title: "Direct Recruitment",
      description: "On-campus recruitment drives with MNCs and growing startups"
    },
    {
      icon: "📈",
      title: "Career Guidance",
      description: "One-on-one career counseling and job search strategy planning"
    }
  ];

  const salaryRanges = [
    { level: "Entry Level", salary: "₹10,000 - ₹15,000/month", color: "border-yellow-400" },
    { level: "With Experience", salary: "₹3 - ₹6 LPA", color: "border-green-400" },
    { level: "Senior Roles", salary: "₹8 - ₹12 LPA", color: "border-blue-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* HERO SECTION WITH IMAGE */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=900&fit=crop&q=80"
          alt="Career Placement"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/75 to-slate-900/80"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-3 rounded-full text-sm font-bold shadow-lg mb-6"
            >
              <Briefcase className="w-4 h-4" />
              100% Placement Assistance
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Career Placement Services
            </h1>
            <p className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Launch your IT career with our comprehensive placement support.
              <span className="block mt-2 text-yellow-300 font-semibold">
                We connect trained professionals with top MNCs and growing companies.
              </span>
            </p>
          </div>
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
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
        ></motion.div>
      </section>

      {/* STATS SECTION - FLOATING CARDS */}
      <section className="-mt-16 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {placementStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group"
                >
                  <div className="text-center p-6 md:p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary">
                    <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                      <IconComponent className={`w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`} style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Placement Support Benefits</h2>
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
                whileHover={{ y: -10, scale: 1.03 }}
                className="group"
              >
                <div className="h-full bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY & SALARY SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Who Can Apply?</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
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
                    className="flex items-start gap-3 bg-green-50 p-4 rounded-xl"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-base font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Salary Range */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-blue-700 p-8 rounded-3xl text-white shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold">Salary Packages</h3>
              </div>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Competitive salary packages based on skills, experience, and certification levels
              </p>
              <div className="space-y-6">
                {salaryRanges.map((range, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`border-l-4 ${range.color} pl-6 bg-white/10 backdrop-blur-sm p-4 rounded-r-xl`}
                  >
                    <p className="text-sm text-blue-100 mb-1 font-semibold">{range.level}</p>
                    <p className="text-2xl font-bold">{range.salary}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="text-sm text-blue-100 mb-2">💡 <strong>Pro Tip:</strong></p>
                <p className="text-sm leading-relaxed">
                  Complete multiple certifications (CCNA, MCSA, RHCSA) to qualify for higher salary brackets
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PARTNER COMPANIES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Hiring Partners</h2>
            <p className="text-xl text-gray-600">Top companies that recruit our trained professionals</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-gray-100"
          >
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
              {companies.map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white p-4 md:p-6 rounded-xl text-center font-bold text-gray-700 hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 hover:text-white transition-all cursor-pointer shadow-md hover:shadow-xl"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION WITH IMAGE (NO GREEN OVERLAY) */}
{/* CTA SECTION - LIGHT OVERLAY (BLUE LAYER REMOVED) */}
<section className="relative py-16 md:py-20 overflow-hidden">
  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&h=600&fit=crop&q=80"
    alt="Join Our Team"
    className="absolute inset-0 w-full h-full object-cover"
  />
  {/* Very Light Overlay - NO HEAVY BLUE */}
  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900/40"></div>

  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white"
  >
    <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-5 py-2 rounded-full font-bold text-sm mb-6">
      <Target className="w-4 h-4" />
      Ready to Start Your Career?
    </div>

    <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">
      Launch Your Career Today!
    </h2>
    <p className="text-lg md:text-2xl mb-8 leading-relaxed drop-shadow-md">
      Send your resume to <span className="font-bold text-yellow-300">career@antero.in</span> with your photo ID and passport-size photograph
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="mailto:career@antero.in"
        className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
      >
        <Mail className="w-5 h-5" />
        Email Your Resume
      </a>
      <a 
        href="/contact"
        className="inline-flex items-center justify-center gap-2 border-2 border-white bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-2xl transform hover:scale-105"
      >
        <Zap className="w-5 h-5" />
        Contact Us
      </a>
    </div>

    <div className="mt-10 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
      <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30 shadow-lg">
        <p className="text-3xl font-bold text-yellow-300">95%</p>
        <p className="text-sm text-white font-medium">Success Rate</p>
      </div>
      <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30 shadow-lg">
        <p className="text-3xl font-bold text-yellow-300">200+</p>
        <p className="text-sm text-white font-medium">Companies</p>
      </div>
      <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30 shadow-lg">
        <p className="text-3xl font-bold text-yellow-300">24hrs</p>
        <p className="text-sm text-white font-medium">Response Time</p>
      </div>
    </div>
  </motion.div>
</section>

    </div>
  );
};

export default Placement;
