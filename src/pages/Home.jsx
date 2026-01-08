import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Briefcase, TrendingUp, CheckCircle, Network, Server, Shield, Star, Clock, BookOpen } from 'lucide-react';
import { placedStudents } from '../data/coursesData';
import { useState } from 'react';

const Home = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  
  // Video Configuration - YouTube Video
  const videoConfig = {
    type: 'youtube',
    youtubeId: 'DB8fzEm58x8', // Your YouTube video ID
    localPath: '/videos/antero-promo.mp4',
    poster: 'https://images.unsplash.com/photo-1560732488-6b0df240254a?w=1200&h=675&fit=crop&q=80'
  };

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "5,000+", label: "Students Trained" },
    { icon: <Award className="w-8 h-8" />, value: "25+", label: "Certifications" },
    { icon: <Briefcase className="w-8 h-8" />, value: "95%", label: "Placement Rate" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "50+", label: "Partner Companies" },
  ];

  const services = [
    {
      icon: <Network className="w-12 h-12" />,
      title: "Core Networking",
      description: "Expert training in Cisco, routing, switching, and network infrastructure",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "Server Management",
      description: "Windows Server, Linux, and cloud infrastructure administration",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Network Security",
      description: "Firewall, VPN, IDS/IPS, and cybersecurity implementation",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Industry Certifications",
      description: "Prepare for CCNA, CCNP, MCSA, MCSE, RHCSA, RHCE certifications",
      color: "from-purple-500 to-purple-600"
    }
  ];

const certifications = [
  { 
    name: "Cisco CCNA",
    fullName: "Cisco Certified Network Associate",
    provider: "Cisco",
    duration: "3-4 Months",
    topics: ["Routing & Switching", "Network Security", "IP Connectivity"],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    logo: "https://logotyp.us/file/cisco.svg"
  },
  { 
    name: "Cisco CCNP",
    fullName: "Cisco Certified Network Professional",
    provider: "Cisco",
    duration: "4-6 Months",
    topics: ["Enterprise Networks", "Advanced Routing", "Network Design"],
    color: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-50",
    logo: "https://logotyp.us/file/cisco.svg"
  },
  { 
    name: "Microsoft MCSA",
    fullName: "Microsoft Certified Solutions Associate",
    provider: "Microsoft",
    duration: "3-4 Months",
    topics: ["Windows Server", "Active Directory", "PowerShell"],
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ9Nzs4SiiuIppGOTKQM9uscOBmfVg42rYTA&s"
  },
  { 
    name: "Microsoft MCSE",
    fullName: "Microsoft Certified Solutions Expert",
    provider: "Microsoft",
    duration: "5-6 Months",
    topics: ["Cloud Infrastructure", "Data Management", "Server Admin"],
    color: "from-green-600 to-green-700",
    bgColor: "bg-green-50",
    logo: "https://msblogs.thesourcemediaassets.com/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen-1024x376.jpg"
  },
  { 
    name: "Red Hat RHCSA",
    fullName: "Red Hat Certified System Administrator",
    provider: "Red Hat",
    duration: "3-4 Months",
    topics: ["Linux Admin", "System Config", "Command Line"],
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ioaejeau6xcD67svCUY1JnGpVG8slFcsGw&s"
  },
  { 
    name: "Red Hat RHCE",
    fullName: "Red Hat Certified Engineer",
    provider: "Red Hat",
    duration: "4-5 Months",
    topics: ["Advanced Linux", "Automation", "Network Services"],
    color: "from-red-600 to-red-700",
    bgColor: "bg-red-50",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ioaejeau6xcD67svCUY1JnGpVG8slFcsGw&s"
  },
  { 
    name: "CompTIA Network+",
    fullName: "CompTIA Network+ Certification",
    provider: "CompTIA",
    duration: "2-3 Months",
    topics: ["Network Fundamentals", "Infrastructure", "Operations"],
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    logo: "https://www.trainotracksolutions.com/assets/img/Comptia/network-plus.webp"
  },
  { 
    name: "CompTIA Security+",
    fullName: "CompTIA Security+ Certification",
    provider: "CompTIA",
    duration: "2-3 Months",
    topics: ["Cybersecurity", "Threat Management", "Risk Assessment"],
    color: "from-purple-600 to-purple-700",
    bgColor: "bg-purple-50",
    logo: "https://www.trainotracksolutions.com/assets/img/Comptia/network-plus.webp"
  }
];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 overflow-hidden min-h-[600px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop&q=80" 
            alt="Network Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-block"
              >

              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-7xl font-extrabold leading-tight"
              >
                Transform Your Career in
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mt-2">
                  Networking & Hardware
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-200 leading-relaxed"
              >
                Premier technology training institute specializing in <strong>Cisco, Microsoft, and Red Hat</strong> certifications. 
                Master Core Networking, VOIP Solutions, VPN, Wireless Technology with <span className="text-yellow-400 font-bold">100% placement assistance</span>.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link 
                  to="/training"
                  className="group bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  Explore Training
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact"
                  className="border-2 border-white/30 backdrop-blur-sm bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all"
                >
                  Enroll Now
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-semibold">Certified Trainers</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-semibold">Live Projects</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-semibold">Job Guarantee</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop&q=80" 
                    alt="Networking Training" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-gray-800">95%</p>
                      <p className="text-sm text-gray-600 font-semibold">Placement Rate</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-400 p-4 rounded-2xl shadow-2xl"
                >
                  <div className="flex items-center gap-2">
                    <Star className="w-6 h-6 text-white fill-white" />
                    <div className="text-white">
                      <p className="text-2xl font-bold leading-none">4.9</p>
                      <p className="text-xs font-semibold">Rating</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          ></motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="text-primary mb-4 flex justify-center transform group-hover:scale-110 transition-transform">{stat.icon}</div>
                    <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - YouTube Embed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              See Our Training in Action
            </h2>
            <p className="text-xl text-gray-600">
              Watch how we transform careers through hands-on networking training
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
          >
            {videoConfig.type === 'youtube' ? (
              // YouTube Embed - Corrected
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-2xl"
                  src={`https://www.youtube.com/embed/${videoConfig.youtubeId}?rel=0&modestbranding=1`}
                  title="Antero Technology Training Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              // Local Video
              <video 
                controls
                poster={videoConfig.poster}
                className="w-full aspect-video object-cover"
                onPlay={() => setVideoPlaying(true)}
                onPause={() => setVideoPlaying(false)}
              >
                <source src={videoConfig.localPath} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Core Specializations</h2>
            <p className="text-xl text-gray-600">Industry-leading training in networking and hardware technologies</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section - Improved with Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Industry Recognized Certifications</h2>
            <p className="text-xl text-gray-600">Prepare for globally recognized IT certifications</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group"
              >
                <div className="h-full bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-primary transition-all shadow-lg hover:shadow-2xl">
                  {/* Icon with Background */}
                <div className={`w-20 h-20 mx-auto mb-4 ${cert.bgColor} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
  <img
    src={cert.logo}
    alt={cert.provider}
    className="w-12 h-12 object-contain"
  />
</div>

                  {/* Certification Name */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  
                  {/* Provider */}
                  <p className="text-sm text-gray-500 text-center mb-4">{cert.fullName}</p>
                  
                  {/* Duration */}
                  <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-medium">{cert.duration}</span>
                  </div>

                  {/* Topics */}
                  <div className="space-y-2 mb-4">
                    {cert.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>

                  {/* Enroll Button 
                  <Link 
                    to="/training"
                    className={`block w-full text-center bg-gradient-to-r ${cert.color} text-white px-4 py-2.5 rounded-lg text-sm font-bold hover:shadow-lg transition-all`}
                  >
                    Enroll Now
                  </Link> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placed Students Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Success Stories</h2>
            <p className="text-xl text-gray-600">Meet our successfully placed students in top IT companies</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placedStudents.map((student, index) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-primary">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <img 
                        src={student.image} 
                        alt={student.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-primary shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 group-hover:text-primary transition-colors">{student.name}</h3>
                      <p className="text-sm text-gray-600 font-medium">{student.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t-2 border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Company</p>
                      <p className="font-bold text-primary text-lg">{student.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Package</p>
                      <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 text-2xl">{student.package}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              to="/placement"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-700 text-white px-10 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
            >
              View All Placements
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=600&fit=crop&q=80"
          alt="Networking Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Networking Career?
          </h2>

          <p className="text-2xl mb-10 text-gray-100 font-medium">
            Join India's leading hardware and networking training institute with{" "}
            <span className="font-bold text-yellow-300">100% placement support</span>
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <Link 
              to="/contact"
              className="group bg-white text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl"
            >
              Enroll Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a 
              href="tel:+919876543210"
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all shadow-2xl"
            >
              📞 Call: +91 98765 43210
            </a>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
        ></motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl"
        ></motion.div>
      </section>
    </div>
  );
};

export default Home;
