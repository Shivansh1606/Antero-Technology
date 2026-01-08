import { motion } from 'framer-motion';
import { Users, Award, Globe, Target, CheckCircle, TrendingUp, Star, Shield, Zap, BookOpen } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
      description: "Microsoft Registered Partner for Enterprise Solutions",
      category: "Technology Partner",
      partnership: "Gold Partner",
      since: "2010"
    },
    {
      name: "Cisco",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/512px-Cisco_logo.svg.png",
      description: "Cisco Networking Academy & Authorized Partner",
      category: "Networking Partner",
      partnership: "Premier Partner",
      since: "2008"
    },
    {
      name: "Red Hat",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Red_Hat_logo.svg/512px-Red_Hat_logo.svg.png",
      description: "Red Hat Training Partner for Linux Solutions",
      category: "Linux Partner",
      partnership: "Certified Partner",
      since: "2012"
    },
    {
      name: "3Com",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwjCPCwjnp1-E9_TuMKywmU-PAKK-URodyeQ&s",
      description: "3Com Focus Partner for Network Infrastructure",
      category: "Hardware Partner",
      partnership: "Focus Partner",
      since: "2009"
    },
    {
      name: "Netgear",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUe5HchEMotWBrsCYnywKahfdhPEP9hF66Q&s",
      description: "Netgear PowerShift Partner for Business Networks",
      category: "Network Solutions",
      partnership: "PowerShift Partner",
      since: "2011"
    },
    {
      name: "D-Link",
      logo: "https://download.logo.wine/logo/D-Link/D-Link-Logo.wine.png",
      description: "D-Link Authorized Partner for Networking Equipment",
      category: "Hardware Partner",
      partnership: "Authorized Partner",
      since: "2010"
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "15+",
      label: "Years Partnership",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      value: "6+",
      label: "Global Partners",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Award,
      value: "100%",
      label: "Certified Solutions",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Target,
      value: "500+",
      label: "Projects Delivered",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Certified Expertise",
      description: "Highly trained professionals with industry certifications from all partner companies",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      title: "Proven Track Record",
      description: "15+ years of successful implementations with enterprise clients",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "100% genuine products and services from authorized partners",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Zap,
      title: "Fast Deployment",
      description: "Quick turnaround time with dedicated technical support",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: BookOpen,
      title: "Training Support",
      description: "Comprehensive training programs for all partnered technologies",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Enterprise-grade solutions that grow with your business",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const partnershipValues = [
    {
      title: "Collaborative Approach",
      description: "Working together with partners to deliver best-in-class solutions",
      icon: "🤝"
    },
    {
      title: "Technical Excellence",
      description: "Maintaining highest standards of technical expertise and certifications",
      icon: "⚡"
    },
    {
      title: "Customer Success",
      description: "Putting customer satisfaction at the heart of every partnership",
      icon: "🎯"
    },
    {
      title: "Innovation Focus",
      description: "Staying ahead with latest technologies and industry trends",
      icon: "🚀"
    }
  ];

  const successMetrics = [
    { value: "1000+", label: "Certified Professionals Trained" },
    { value: "500+", label: "Enterprise Deployments" },
    { value: "95%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Technical Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - No Blue Layer */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80")',
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
              <Users className="w-4 h-4" />
              Trusted Partnerships
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
              Our Technology <span className="text-yellow-300">Partners</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Collaborating with industry leaders to deliver world-class IT solutions and training
            </p>
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
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2 text-center">{stat.value}</h3>
                  <p className="text-gray-600 font-medium text-center text-sm">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Antero Technology Group is proud to partner with industry-leading technology companies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group border-2 border-gray-100 hover:border-primary"
              >
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 flex items-center justify-center h-40 border-b-4 border-primary">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-20 max-w-full object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {partner.category}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">Since {partner.since}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{partner.name}</h3>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">{partner.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-700 font-semibold">{partner.partnership}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Partnership Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Why businesses trust our partner ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
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
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-white">
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Partnership"
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why Companies Partner With Us
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We maintain strategic partnerships with leading technology vendors to provide our clients 
                with authentic, certified solutions and training programs.
              </p>
              <div className="space-y-4">
                {partnershipValues.map((value, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl hover:shadow-md transition-all"
                  >
                    <div className="text-3xl flex-shrink-0">{value.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{value.title}</h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Partnership Success
            </h2>
            <p className="text-xl text-gray-600">
              Delivering excellence through trusted partnerships
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                  {metric.value}
                </div>
                <p className="text-gray-600 font-medium">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Ecosystem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Complete Technology Ecosystem
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our partnerships enable us to provide end-to-end solutions covering networking, 
                servers, security, cloud, and enterprise applications.
              </p>
              <div className="space-y-3">
                {[
                  "Networking Infrastructure (Cisco, D-Link, Netgear)",
                  "Server Solutions (Microsoft, Red Hat, Linux)",
                  "Security Systems (Firewall, VPN, IDS/IPS)",
                  "Cloud Integration (Azure, AWS Compatible)",
                  "Training & Certifications (All Technologies)",
                  "24/7 Technical Support & Maintenance"
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-2xl transform -rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=600&fit=crop"
                alt="Technology Ecosystem"
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - No Blue Layer */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Interested in Partnership?
            </h2>
            <p className="text-xl md:text-2xl text-gray-100 mb-10 drop-shadow-md">
              Let's discuss how we can collaborate to deliver exceptional IT solutions
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-primary transition-all transform hover:scale-105 shadow-2xl"
              >
                <Users className="w-5 h-5" />
                Get in Touch
              </a>
              <a 
                href="tel:+919458861655"
                className="inline-flex items-center gap-2 bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                📞 Call Us
              </a>
            </div>
          </motion.div>
        </div>

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

export default Partners;
