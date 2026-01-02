import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [courseDropdown, setCourseDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('programming');

  const courseCategories = {
    java: {
      title: "Java",
      courses: [
        "Java For Beginners",
        "Java Expert",
        "Java Full Stack + ReactJS",
        "Java Full Stack + ReactJS + DSA",
        "Spring Boot & Microservices Security With Hibernate & JPA"
      ]
    },
    webDevelopment: {
      title: "Web Designing - Full Stack Development",
      courses: [
        "HTML, CSS & JavaScript",
        "React JS Development",
        "Node.js & Express",
        "MERN Stack Development",
        "Django Backend Development",
        "Full Stack Web Development"
      ]
    },
    programming: {
      title: "Programming",
      courses: [
        "C Programming",
        "C++ Programming",
        "Python Programming",
        "Data Structures & Algorithms",
        "Object-Oriented Programming"
      ]
    },
    digitalMarketing: {
      title: "Digital Marketing",
      courses: [
        "SEO - Search Engine Optimization",
        "Social Media Marketing",
        "Google Ads & PPC",
        "Content Marketing",
        "Email Marketing"
      ]
    },
    graphicsDesigning: {
      title: "Graphics Designing",
      courses: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "CorelDRAW",
        "UI/UX Design",
        "Video Editing"
      ]
    },
    cadTraining: {
      title: "CAD Training",
      courses: [
        "AutoCAD 2D & 3D",
        "SolidWorks",
        "CATIA",
        "Revit Architecture",
        "3D Max"
      ]
    },
    appDevelopment: {
      title: "App Development",
      courses: [
        "Android Development",
        "iOS Development",
        "React Native",
        "Flutter Development",
        "Mobile App UI/UX"
      ]
    },
    erp: {
      title: "ERP",
      courses: [
        "SAP",
        "Oracle ERP",
        "Tally ERP",
        "Microsoft Dynamics",
        "ERP Implementation"
      ]
    },
    softwareTesting: {
      title: "Software Testing",
      courses: [
        "Manual Testing",
        "Automation Testing - Selenium",
        "API Testing",
        "Performance Testing",
        "Mobile App Testing"
      ]
    },
    networkSecurity: {
      title: "Network & Security",
      courses: [
        "CCNA - Cisco Certified",
        "CCNP - Advanced Networking",
        "Ethical Hacking",
        "Cyber Security",
        "Network Administration"
      ]
    },
    cloudComputing: {
      title: "Cloud Computing",
      courses: [
        "AWS Cloud",
        "Microsoft Azure",
        "Google Cloud Platform",
        "DevOps",
        "Cloud Architecture"
      ]
    },
    database: {
      title: "Database",
      courses: [
        "SQL & MySQL",
        "PostgreSQL",
        "MongoDB",
        "Oracle Database",
        "Database Administration"
      ]
    },
    mis: {
      title: "MIS - Advanced Excel - BI Tools",
      courses: [
        "Advanced Excel & VBA",
        "Power BI",
        "Tableau",
        "Data Analytics",
        "Business Intelligence"
      ]
    },
    others: {
      title: "Others",
      courses: [
        "Machine Learning",
        "Artificial Intelligence",
        "Data Science",
        "Blockchain",
        "IoT - Internet of Things"
      ]
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold text-gray-800">
              Antero Technology
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
              About
            </Link>
            
            {/* Courses Mega Menu Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCourseDropdown(true)}
              onMouseLeave={() => setCourseDropdown(false)}
            >
              <button className="text-gray-700 hover:text-primary transition-colors font-medium flex items-center gap-1">
                Courses
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {courseDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-lg shadow-2xl overflow-hidden"
                  >
                    <div className="flex">
                      {/* Left Sidebar - Categories */}
                      <div className="w-80 bg-primary text-white p-4 max-h-[500px] overflow-y-auto">
                        <h3 className="text-xs font-semibold uppercase mb-3 opacity-75">
                          Course Categories
                        </h3>
                        <ul className="space-y-1">
                          {Object.keys(courseCategories).map((key) => (
                            <li key={key}>
                              <button
                                onMouseEnter={() => setSelectedCategory(key)}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                                  selectedCategory === key
                                    ? 'bg-white text-primary font-semibold'
                                    : 'hover:bg-blue-700 text-white'
                                }`}
                              >
                                {courseCategories[key].title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Side - Subcourses */}
                      <div className="flex-1 p-6 bg-gray-50 max-h-[500px] overflow-y-auto">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
                          {courseCategories[selectedCategory].title}
                        </h3>
                        <ul className="space-y-2">
                          {courseCategories[selectedCategory].courses.map((course, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.03 }}
                            >
                              <Link 
                                to="/courses" 
                                className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white rounded-lg transition-all text-sm"
                              >
                                {course}
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/placement" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Placement
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden pb-4 overflow-hidden"
            >
              <Link to="/" className="block py-2 text-gray-700 hover:text-primary">
                Home
              </Link>
              <Link to="/about" className="block py-2 text-gray-700 hover:text-primary">
                About
              </Link>
              <Link to="/courses" className="block py-2 text-gray-700 hover:text-primary">
                Courses
              </Link>
              <Link to="/placement" className="block py-2 text-gray-700 hover:text-primary">
                Placement
              </Link>
              <Link to="/contact" className="block py-2 text-primary font-semibold">
                Contact Us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
