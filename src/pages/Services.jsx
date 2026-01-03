import { motion } from 'framer-motion';
import { Network, Server, Shield, Wifi, Phone, Wrench, HardDrive, Database } from 'lucide-react';

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
      description: "Comprehensive security solutions including firewall and VPN setup",
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
      description: "WiFi network design and implementation for offices and campuses",
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl font-bold mb-6">Sales & Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive networking solutions for businesses - from design to implementation and support
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
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
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Implementation Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop" 
                alt="Network Infrastructure"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Network Implementation</h2>
              <p className="text-lg text-gray-600 mb-6">
                We provide complete network solutions from planning to deployment. Our certified engineers 
                ensure your network infrastructure is reliable, secure, and scalable.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {networkingServices.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hardware Products */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hardware Products</h2>
            <p className="text-xl text-gray-600">Authorized dealer of leading brands</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Networking Equipment",
                items: ["Cisco Routers & Switches", "D-Link Products", "Netgear Devices", "3Com Equipment", "Cat5/Cat6 Cables"]
              },
              {
                title: "Servers & Storage",
                items: ["HP Servers", "Dell Servers", "IBM Servers", "Hard Drives", "Storage Solutions"]
              },
              {
                title: "Computers & Accessories",
                items: ["Desktop PCs", "Laptops", "Printers", "Projectors", "UPS Systems"]
              }
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 pb-3 border-b">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
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
          <h2 className="text-4xl font-bold mb-6">Need Networking Solutions?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us for a free consultation and customized networking solution for your business
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Get Free Consultation
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
