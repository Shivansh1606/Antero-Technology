import { motion } from 'framer-motion';
import { Network, Server, Shield, Wifi, Phone, Wrench, HardDrive, Database, CheckCircle, Award, Zap, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Network className="w-12 h-12" />,
      title: "Network Implementation",
      description: "Complete network design, installation, and configuration for enterprises",
      features: ["LAN/WAN Setup", "Router Configuration", "Switch Management", "Network Planning"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Network Security",
      description: "Internet Security, Firewall, Anti-Virus solutions for businesses",
      features: ["Firewall Configuration", "VPN Implementation", "IDS/IPS Setup", "Security Audit"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "Server Solutions",
      description: "Server installation, configuration, and maintenance services",
      features: ["Windows Server", "Linux Server", "Virtualization", "Cloud Integration"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Wifi className="w-12 h-12" />,
      title: "Wireless Technology",
      description: "Wireless Network Implementation for offices and campuses",
      features: ["Access Point Setup", "Site Survey", "Guest Network", "Roaming Config"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Phone className="w-12 h-12" />,
      title: "VOIP Solutions",
      description: "Voice over IP telephone system installation and support",
      features: ["PBX Installation", "SIP Configuration", "Call Recording", "Auto Attendant"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "System Support",
      description: "Computer hardware repair and maintenance services",
      features: ["Hardware Repair", "Troubleshooting", "Preventive Maintenance", "Component Upgrade"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <HardDrive className="w-12 h-12" />,
      title: "Hardware Procurement",
      description: "Supply of networking equipment and computer hardware",
      features: ["Cisco Equipment", "Servers", "Networking Devices", "Accessories"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Backup Solutions",
      description: "Data backup and disaster recovery implementation",
      features: ["Cloud Backup", "Local Backup", "DR Planning", "Data Recovery"],
      color: "from-teal-500 to-teal-600"
    }
  ];

  const coreServices = [
    "Network Implementation",
    "Software Installation",
    "Anti-Virus Solutions",
    "Wireless Network Implementation",
    "E-commerce Solutions",
    "Internet Security & Firewall",
    "LAN Implementation",
    "Network Refresh and Upgrade",
    "Virtual Private Networks (VPN)",
    "Backup Solutions",
    "Hardware Procurement"
  ];

  const networkingServices = [
    "Network Design & Installation",
    "Cabling (Cat5, Cat6)",
    "Router & Switch Configuration",
    "Firewall Implementation",
    "VPN Setup",
    "Wireless Network",
    "Network Monitoring",
    "System Integration"
  ];

  const computerProducts = [
    "Desktop PCs & Workstations",
    "Notebooks & Laptops",
    "Servers (HP, IBM, Dell, Compaq)",
    "Hard Drives & Storage",
    "DVD Writers & Optical Drives",
    "TFT Panels & LCD Monitors",
    "Plasma Screens & Displays",
    "Multifunction Printers",
    "Color Laser Printers",
    "Dot Matrix Printers",
    "Projectors & Presentation Equipment"
  ];

  const networkingProducts = [
    {
      category: "Cisco Products",
      items: ["Routers", "Switches", "Wireless Access Points", "Security Appliances"]
    },
    {
      category: "D-Link Products",
      items: ["Switches", "Routers", "Wireless Products", "IP Cameras"]
    },
    {
      category: "Netgear Products",
      items: ["Routers", "Switches", "Wireless Solutions", "NAS Storage"]
    },
    {
      category: "Other Brands",
      items: ["3Com Equipment", "Belkin Products", "Nortel Solutions", "Network Accessories"]
    }
  ];

  const additionalProducts = [
    "LRE Switches",
    "Leased Line Modems",
    "Interface Converters",
    "Multiplexers",
    "ISDN & DSL Products",
    "Cat5 & Cat6 Copper Cables",
    "Fiber Optic Cables",
    "Wireless Products",
    "AudioCode VOIP Gateway Solutions",
    "APC & Emerson Liebert UPS Solutions"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Background Image - No Blue Layer */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image - Server Room/Data Center */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80")',
          }}
        >
          {/* Minimal dark overlay for text readability */}
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
              Professional IT Solutions
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Sales & Services</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-md mb-8">
            Comprehensive networking solutions for businesses - from design to implementation and support
          </p>
        </motion.div>

        {/* Animated Elements */}
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

      {/* Core Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600">Complete IT solutions tailored for your business needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="flex items-center gap-3 bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl hover:shadow-lg transition-all border border-gray-100"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Specialized Services</h2>
            <p className="text-xl text-gray-600">End-to-end networking and hardware solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-primary"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-4 transform hover:scale-110 hover:rotate-3 transition-all`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Design & Implementation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop" 
                alt="Network Infrastructure"
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Network Design | Installation | Cabling | System Integration</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                The accurate planning and design of a network is the primary key to overall network reliability 
                and performance. Antero Technology Group will evaluate your specific wants and needs, and create 
                a network solution catered to fit your business.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Using the latest technologies and techniques available, we will design a network that is secure, 
                efficient, and lucrative, as well as expandable and upgradeable - two vital components of a good network.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {networkingServices.map((service, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg hover:shadow-md transition-all"
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm font-medium">{service}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-primary p-4 rounded-lg">
                <p className="text-gray-700 font-medium">
                  <strong>Professional Cabling:</strong> Antero Technology Group is well versed in the art and 
                  implementation of cabling. Using the latest products available CAT 5, CAT5E, we provide reliable, 
                  long-lasting service with proper certification of cable and cabling systems.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Computer, Server & Notebooks */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Computer | Server | Notebooks</h2>
            <p className="text-xl text-gray-600">Complete range of computing equipment and accessories</p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {computerProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{product}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Networking Products by Brand */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Networking | Security & Peripheral Products
            </h2>
            <p className="text-xl text-gray-600">Cisco | D-Link | Netgear | Belkin | 3Com | Nortel</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {networkingProducts.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-primary/30">{brand.category}</h3>
                <ul className="space-y-2">
                  {brand.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span className="font-medium text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary/20"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Additional Networking Products</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalProducts.map((product, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.03 }}
                  className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-blue-50 p-3 rounded-lg hover:shadow-md transition-all"
                >
                  <Award className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{product}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Support & Maintenance */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Professional Support Services</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Certified in the latest technologies and programs, the employees at Antero Technology Group 
                ensure an excellent and swift installation of your network system. On-site work will be approached 
                with minimum disruption to your education or office environment.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Once your network is in place, Antero Technology Group offers a robust set of services for your 
                business or education facility. We offer excellent technical support and an emergency response 
                network to make sure your network and business runs smoothly and efficiently.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: <Target className="w-6 h-6" />, text: "24/7 Technical Support" },
                  { icon: <Zap className="w-6 h-6" />, text: "Emergency Response" },
                  { icon: <Shield className="w-6 h-6" />, text: "Preventive Maintenance" },
                  { icon: <Award className="w-6 h-6" />, text: "Certified Engineers" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <span className="text-gray-700 font-semibold">{item.text}</span>
                  </div>
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
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop"
                alt="Technical Support"
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image - No Blue Layer */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80")',
          }}
        >
          {/* Minimal dark overlay for text readability */}
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Need Networking Solutions?</h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 drop-shadow-md">
            Contact us for a free consultation and customized networking solution for your business
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-primary to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-primary transition-all transform hover:scale-105 shadow-2xl"
            >
              Get Free Consultation
            </a>
            <a 
              href="tel:+919458861655"
              className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2"
            >
              <span>📞</span> Call Now
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

export default Services;
