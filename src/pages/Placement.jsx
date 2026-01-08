import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Award, CheckCircle, Building2, DollarSign, Target, Users, Zap, Mail, GraduationCap, Star, Rocket, FileText, Clock, Phone } from 'lucide-react';

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
    { text: "B.Tech / BCA / MCA graduates", icon: GraduationCap },
    { text: "BBA / MBA professionals", icon: Briefcase },
    { text: "B.A. / B.Sc / B.Com graduates", icon: Award },
    { text: "Polytechnic diploma holders", icon: FileText },
    { text: "Minimum 6 months work experience preferred", icon: Star }
  ];

  const benefits = [
    {
      icon: FileText,
      title: "Resume Building",
      description: "Professional resume preparation by industry experts with ATS optimization",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Interview Preparation",
      description: "Mock interviews, aptitude tests and soft skills training sessions",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Building2,
      title: "Direct Recruitment",
      description: "On-campus recruitment drives with MNCs and growing startups",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Career Guidance",
      description: "One-on-one career counseling and job search strategy planning",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Industry-Focused Training",
      description: "High-end technical and certification training exclusively designed for IT careers",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: TrendingUp,
      title: "High-Paying Careers",
      description: "IT careers are among the most sought after and highly paid with excellent job satisfaction",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: Rocket,
      title: "Rapidly Growing Company",
      description: "Highly profitable firm with huge credentials and national support infrastructure",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: Star,
      title: "Optimal Learning Experience",
      description: "Built from ground up to offer the best learning experience focusing exclusively on IT careers",
      color: "text-orange-600",
      bg: "bg-orange-50"
    }
  ];

  const salaryRanges = [
    { level: "Entry Level (Freshers)", salary: "₹10,000 - ₹15,000/month", color: "border-yellow-400", bg: "bg-yellow-50" },
    { level: "With Experience (1-3 years)", salary: "₹3 - ₹6 LPA", color: "border-green-400", bg: "bg-green-50" },
    { level: "Senior Roles (3+ years)", salary: "₹8 - ₹12 LPA", color: "border-blue-400", bg: "bg-blue-50" }
  ];

  const applicationSteps = [
    { step: "1", title: "Prepare Resume", description: "Update your CV with latest skills and certifications" },
    { step: "2", title: "Attach Documents", description: "Photo ID and passport-size photograph" },
    { step: "3", title: "Email Application", description: "Send complete application to career@antero.in" },
    { step: "4", title: "Interview Call", description: "Get response within 24-48 hours" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* HERO SECTION WITH IMAGE */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80  to-slate-900/80"></div>
        </div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        </div>

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

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
              Career Placement Services
            </h1>
            <p className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-2 drop-shadow-md">
              Launch your IT career with our comprehensive placement support.
            </p>
            <p className="text-xl md:text-3xl text-yellow-300 font-bold max-w-4xl mx-auto drop-shadow-lg">
              We connect trained professionals with top MNCs and growing companies.
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
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${stat.bgColor} transform group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                      <IconComponent className={`w-8 h-8 bg-gradient-to-r ${stat.color} text-white`} strokeWidth={2} />
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

      {/* ABOUT ANTERO PLACEMENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Career Opportunity at Antero</h2>
            <p className="text-xl text-gray-600">Your gateway to MNCs & BPO Industry</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                alt="Career Success"
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Antero Technology Group?</h3>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Antero Technology Group was built from the ground up to be the best, most focused firm of its kind 
                in the industry, focusing exclusively on high-end technical and certification training, allowing us 
                to offer the optimal learning experience to our clients.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                There are many careers one can pursue, but for many years now IT careers have been among the most 
                sought after and the most highly paid. This combination of high pay, good benefits and excellent 
                job satisfaction has led to an increase in competition for a limited number of jobs.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-primary p-5 rounded-lg">
                <p className="text-gray-700 font-medium leading-relaxed">
                  <strong className="text-primary">Our Advantage:</strong> We are a highly profitable, rapidly growing 
                  company with huge credentials, offering the benefits of both a small and a more established firm with 
                  national support and infrastructure.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Why Choose Us Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className={`h-full ${item.bg} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary`}>
                    <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-4 ring-4 ring-white shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                      <IconComponent className={`w-7 h-7 ${item.color}`} strokeWidth={2} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
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
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                      <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY & SALARY SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-2xl border-2 border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Who Can Apply?</h2>
              </div>
              <p className="text-lg text-gray-600 mb-2 leading-relaxed">
                We are looking for full-time Graduates and Diploma holders:
              </p>
              <p className="text-base text-gray-500 mb-6 italic">
                Qualifications & Experience Requirements
              </p>
              <div className="space-y-4">
                {eligibility.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 bg-green-50 p-4 rounded-xl hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-white" strokeWidth={2} />
                      </div>
                      <span className="text-gray-700 text-base font-medium pt-1">{item.text}</span>
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <p className="text-gray-700 font-semibold flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-600" />
                  <span>Priority: Minimum 6 months work experience will get priority</span>
                </p>
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
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <DollarSign className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-3xl font-bold">Salary Packages</h3>
              </div>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Get on-the-spot-offers with competitive salary packages based on skills, experience, and certification levels
              </p>
              <div className="space-y-6">
                {salaryRanges.map((range, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border-l-4 border-white/50 hover:bg-white/20 transition-all"
                  >
                    <p className="text-sm text-blue-100 mb-2 font-semibold flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      {range.level}
                    </p>
                    <p className="text-2xl font-bold">{range.salary}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="text-sm text-blue-100 mb-2 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  <strong>Pro Tip:</strong>
                </p>
                <p className="text-sm leading-relaxed">
                  Complete multiple certifications (CCNA, MCSA, RHCSA) to qualify for higher salary brackets 
                  and get on-the-spot job offers
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">Simple 4-step process to start your career</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < applicationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 text-primary">→</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER COMPANIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Hiring Partners</h2>
            <p className="text-xl text-gray-600">Top MNCs & companies that recruit our trained professionals</p>
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

      {/* CTA SECTION - NO HEAVY OVERLAY */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80")',
          }}
        >
          {/* Light overlay only */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/60"></div>
        </div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-3 rounded-full font-bold text-sm mb-6 shadow-lg">
            <Target className="w-5 h-5" strokeWidth={2} />
            Ready to Start Your Career?
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Launch Your Career Today!
          </h2>
          <p className="text-lg md:text-2xl mb-4 leading-relaxed drop-shadow-md">
            To get on-the-spot-offers @ ₹10,000 to ₹15,000
          </p>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Carry your Resume, Photo ID and Passport-size photograph
            <br />
            <span className="font-bold text-yellow-300">Email CV at: career@antero.in</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a 
              href="mailto:career@antero.in"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              <Mail className="w-5 h-5" strokeWidth={2} />
              Email Your Resume
            </a>
            <a 
              href="tel:+919458861655"
              className="inline-flex items-center justify-center gap-2 border-2 border-white bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-2xl transform hover:scale-105"
            >
              <Phone className="w-5 h-5" strokeWidth={2} />
              Call: +91 9458861655
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30 shadow-lg">
              <TrendingUp className="w-8 h-8 text-yellow-300 mx-auto mb-2" strokeWidth={2} />
              <p className="text-2xl font-bold text-yellow-300">95%</p>
              <p className="text-sm text-white font-medium">Success Rate</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30 shadow-lg">
              <Building2 className="w-8 h-8 text-yellow-300 mx-auto mb-2" strokeWidth={2} />
              <p className="text-2xl font-bold text-yellow-300">200+</p>
              <p className="text-sm text-white font-medium">Companies</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30 shadow-lg">
              <Clock className="w-8 h-8 text-yellow-300 mx-auto mb-2" strokeWidth={2} />
              <p className="text-2xl font-bold text-yellow-300">24hrs</p>
              <p className="text-sm text-white font-medium">Response Time</p>
            </div>
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

export default Placement;
