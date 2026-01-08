import { motion } from 'framer-motion';
import { Target, Users, Award, Zap, CheckCircle, TrendingUp, Globe, Shield, Cpu, Building2, GraduationCap, Briefcase } from 'lucide-react';


const About = () => {
  const features = [
    { 
      icon: <Target className="w-12 h-12" />, 
      title: "Our Mission", 
      desc: "Provide world-class IT training and empower careers through quality education",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    { 
      icon: <Users className="w-12 h-12" />, 
      title: "Expert Team", 
      desc: "Industry professionals with 10+ years of experience as certified trainers",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    { 
      icon: <Award className="w-12 h-12" />, 
      title: "Certifications", 
      desc: "Globally recognized industry certifications from Cisco, Microsoft, Red Hat",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    { 
      icon: <Zap className="w-12 h-12" />, 
      title: "Modern Tech", 
      desc: "Latest technology stack with hands-on practical training approach",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    },
  ];


  const achievements = [
    { icon: <GraduationCap className="w-8 h-8" />, value: "10,000+", label: "Students Trained" },
    { icon: <Briefcase className="w-8 h-8" />, value: "95%", label: "Placement Rate" },
    { icon: <Building2 className="w-8 h-8" />, value: "500+", label: "Partner Companies" },
    { icon: <Award className="w-8 h-8" />, value: "25+", label: "Certifications" },
  ];


  const services = [
    { icon: "🌐", title: "Core Networking", desc: "Cisco routing, switching, and network infrastructure" },
    { icon: "📞", title: "VOIP Solutions", desc: "Voice over IP telephone systems and SIP configuration" },
    { icon: "🔒", title: "VPN & Security", desc: "Virtual Private Networks and security implementations" },
    { icon: "📡", title: "Wireless Technology", desc: "WiFi networks, access points, and roaming config" },
    { icon: "💻", title: "System Support", desc: "Windows, Linux server administration and maintenance" },
    { icon: "🛡️", title: "Security Systems", desc: "Firewall, IDS/IPS, and cybersecurity solutions" },
  ];


  const whyChoose = [
    { icon: <CheckCircle className="w-6 h-6" />, text: "MSME Registered under Government of India" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "100% Hands-on Practical Training" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Industry Expert Certified Trainers" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Live Project Experience" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "100% Job Placement Assistance" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Latest Lab Equipment & Software" },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - No Blue Layer */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image with Minimal Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80")',
          }}
        >
          {/* Light overlay for text readability only */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >

          </motion.div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            About Antero Technology Group
          </h1>
          <p className="text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
            Premier Technology Training Provider specialized in Networking & Hardware Certifications
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


      {/* Achievements Stats */}
      <section className="py-16 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100"
              >
                <div className="text-primary mb-3 flex justify-center transform transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2 text-center">{stat.value}</div>
                <div className="text-gray-600 font-medium text-center text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <strong>Antero Technology Group</strong> is registered under <span className="text-primary font-semibold">MSME Government of India</span>. We specialize in 
                  projects like Core Networking, VOIP Solutions, VPN, Wireless Technology, System Support, 
                  and Security Systems.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our latest surveys show that top-notch multinational companies in telecommunication and 
                  networking require thousands of professionals annually for project maintenance and development.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&q=80" 
                  alt="Training" 
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&q=80" 
                  alt="Certifications" 
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Do</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  In today's rapidly changing IT environment, obtaining proper training and certification is 
                  essential for career growth.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We offer training on all latest industry-standard technologies including <strong>Cisco, Microsoft, 
                  and Red Hat Technologies</strong> to help networking support companies and solution providers recruit 
                  well-trained candidates.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Core Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="group"
                >
                  <div className="h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary">
                    <div className={`w-20 h-20 ${item.bgColor} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                      <div className={`text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Specializations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 md:p-12 text-white"
          >
            <h2 className="text-4xl font-bold text-center mb-12">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyChoose.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all"
                >
                  <div className="text-green-400 flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <span className="text-white font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* CTA Section - No Blue Layer, Different Image */}
      <section className="relative py-20 overflow-hidden">
        {/* New Background Image - Professional Business/Training Setting */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80")',
          }}
        >
          {/* Minimal dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 text-center text-white relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-10 text-gray-100 drop-shadow-md">
            Join thousands of successful professionals who started their journey with us
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-primary to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-primary transition-all transform hover:scale-105 shadow-2xl"
            >
              Get Started Today
            </a>
            <a 
              href="tel:+919876543210" 
              className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2"
            >
              <span>📞</span> Call Now
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};


export default About;
