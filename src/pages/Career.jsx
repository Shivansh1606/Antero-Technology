import { motion } from 'framer-motion';
import { 
  Briefcase, 
  TrendingUp, 
  Award, 
  Users, 
  Target, 
  GraduationCap, 
  Mail, 
  Send, 
  Rocket, 
  Building2,
  Code, 
  BookOpen, 
  CheckCircle, 
  Star,
  Zap,
  Phone,
  Network,
  Shield,
  MapPin,
  Clock,
  Laptop
} from 'lucide-react';
import { Link } from 'react-router-dom';
;


const Career = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Rapid advancement opportunities in a growing IT company"
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Free training and certification programs for employees"
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Work with experienced professionals in the industry"
    },
    {
      icon: Briefcase,
      title: "Exciting Projects",
      description: "Work on cutting-edge networking and IT solutions"
    }
  ];

  const perks = [
    "Competitive Salary Packages",
    "Health Insurance Coverage",
    "Flexible Working Hours",
    "Performance Bonuses",
    "Learning & Development Programs",
    "Modern Work Environment",
    "Paid Time Off & Holidays",
    "Team Building Activities"
  ];

  const openPositions = [
    {
      title: "Network Engineer",
      department: "Technical",
      location: "Aligarh, UP",
      type: "Full Time",
      experience: "2-5 Years",
      icon: Network,
      skills: ["Cisco", "Routing", "Switching", "Firewall"]
    },
    {
      title: "System Administrator",
      department: "IT Operations",
      location: "Aligarh, UP",
      type: "Full Time",
      experience: "1-3 Years",
      icon: Shield,
      skills: ["Windows Server", "Linux", "VMware", "Active Directory"]
    },
    {
      title: "Technical Trainer",
      department: "Training",
      location: "Aligarh, UP",
      type: "Full Time",
      experience: "3+ Years",
      icon: Award,
      skills: ["CCNA", "MCSA", "Red Hat", "Communication"]
    },
    {
      title: "IT Support Engineer",
      department: "Support",
      location: "Aligarh, UP",
      type: "Full Time",
      experience: "0-2 Years",
      icon: Code,
      skills: ["Hardware", "Troubleshooting", "Customer Service"]
    }
  ];

  const growthPath = [
    {
      stage: "1",
      title: "Join & Onboard",
      description: "Comprehensive onboarding program with mentorship",
      icon: "🎯"
    },
    {
      stage: "2",
      title: "Learn & Train",
      description: "Free certifications and hands-on project experience",
      icon: "📚"
    },
    {
      stage: "3",
      title: "Grow & Lead",
      description: "Fast-track promotion based on performance",
      icon: "🚀"
    },
    {
      stage: "4",
      title: "Excel & Mentor",
      description: "Senior roles with team leadership opportunities",
      icon: "⭐"
    }
  ];

  const stats = [
    { value: "50+", label: "Team Members" },
    { value: "95%", label: "Employee Satisfaction" },
    { value: "10+", label: "Years in Business" },
    { value: "100%", label: "Growth Opportunities" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - No Blue Layer */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80")',
          }}
        >
          {/* Minimal dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-3 rounded-full font-bold text-sm mb-6 shadow-lg">
              <Target className="w-4 h-4" />
              Join Our Growing Team
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
              Build Your Career in <span className="text-yellow-300">IT Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Join Antero Technology Group and transform your IT career with industry-leading training, 
              certifications, and real-world project experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:career@antero.in"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-primary transition-all transform hover:scale-105 shadow-2xl"
              >
                <Mail className="w-5 h-5" />
                Email Your Resume
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                <Send className="w-5 h-5" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>

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
                className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer the perfect blend of startup culture and enterprise stability
            </p>
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
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-primary group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Current Job Openings
            </h2>
            <p className="text-xl text-gray-600">
              Explore exciting opportunities to grow your IT career
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => {
              const IconComponent = position.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{position.title}</h3>
                        <p className="text-sm text-gray-500">{position.department}</p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {position.type}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-primary" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Briefcase className="w-4 h-4 text-primary" />
                      {position.experience}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Required Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill, idx) => (
                        <span key={idx} className="bg-blue-50 text-primary text-xs font-medium px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a 
                    href="mailto:career@antero.in"
                    className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-primary transition-all flex items-center justify-center gap-2 group"
                  >
                    Apply Now
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Growth Path */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Your Career Growth Path
            </h2>
            <p className="text-xl text-gray-600">
              Clear progression from day one to leadership roles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {growthPath.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-primary transition-all text-center">
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.stage}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < growthPath.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6">
                    <div className="text-primary text-2xl">→</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Career Section with Image */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Your Dream IT Career Starts Here
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Antero Technology Group was built from the ground up to be the best, most focused firm 
                in high-end technical and certification training. We offer optimal learning experiences 
                and career growth opportunities.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                IT careers have been among the most sought after and highly paid positions. With our 
                combination of excellent training, good benefits, and job satisfaction, we help you 
                compete and excel in this competitive field.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-primary p-6 rounded-lg">
                <p className="text-gray-700 font-medium">
                  <strong>Ready to transform your career?</strong> Send your resume to{' '}
                  <a href="mailto:career@antero.in" className="text-primary font-bold hover:underline">
                    career@antero.in
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Perks & Benefits
            </h2>
            <p className="text-xl text-gray-600">
              We take care of our employees with excellent benefits
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="flex items-start gap-3 bg-gradient-to-br from-green-50 to-blue-50 p-5 rounded-xl hover:shadow-lg transition-all border border-gray-100"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{perk}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Career Ready */}
<section className="relative py-20 overflow-hidden">
  {/* Background Image - Professional Team/Office */}
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80")',
    }}
  >
    {/* Gradient overlay for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85  to-slate-900/85"></div>
  </div>

  {/* Pattern Overlay */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
  </div>

  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-3 rounded-full text-sm font-bold shadow-lg mb-6">
        <Rocket className="w-4 h-4" />
        Start Your IT Career Today
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
        Ready to Start Your Journey?
      </h2>
      <p className="text-xl md:text-2xl text-gray-100 mb-10 drop-shadow-md leading-relaxed">
        Join our team of IT professionals and take your career to the next level
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="mailto:career@antero.in"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-primary transition-all transform hover:scale-105 shadow-2xl"
        >
          <Mail className="w-5 h-5" strokeWidth={2} />
          Send Your Resume Now
        </a>
        <Link 
          to="/contact"
          className="inline-flex items-center justify-center gap-2 bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
        >
          <Send className="w-5 h-5" strokeWidth={2} />
          Get in Touch
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg">
          <Briefcase className="w-8 h-8 text-yellow-300 mx-auto mb-2" strokeWidth={2} />
          <p className="text-3xl font-bold text-yellow-300">500+</p>
          <p className="text-sm text-white font-medium">Placements</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg">
          <Building2 className="w-8 h-8 text-yellow-300 mx-auto mb-2" strokeWidth={2} />
          <p className="text-3xl font-bold text-yellow-300">200+</p>
          <p className="text-sm text-white font-medium">Companies</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg">
          <TrendingUp className="w-8 h-8 text-yellow-300 mx-auto mb-2" strokeWidth={2} />
          <p className="text-3xl font-bold text-yellow-300">₹12 LPA</p>
          <p className="text-sm text-white font-medium">Highest Package</p>
        </div>
      </div>
    </motion.div>
  </div>

  {/* Animated Background Elements */}
  <motion.div
    animate={{ y: [0, -20, 0], rotate: [0, 90, 0] }}
    transition={{ duration: 10, repeat: Infinity }}
    className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"
  ></motion.div>
  <motion.div
    animate={{ y: [0, 20, 0], rotate: [0, -90, 0] }}
    transition={{ duration: 8, repeat: Infinity }}
    className="absolute bottom-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
  ></motion.div>
</section>

    </div>
  );
};


export default Career;
