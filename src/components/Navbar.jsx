import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [trainingDropdown, setTrainingDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('cisco');

  const trainingCategories = {
    cisco: {
      title: "Cisco Certifications",
      courses: [
        "CCNA - Cisco Certified Network Associate",
        "CCNP Enterprise (Routing & Switching)",
        "CCNP Security",
        "CCIE - Expert Level"
      ]
    },
    microsoft: {
      title: "Microsoft Certifications",
      courses: [
        "MCSA - Microsoft Certified Solutions Associate",
        "MCSE - Server Infrastructure",
        "Microsoft Azure Administrator",
        "Exchange Server Administration"
      ]
    },
    redhat: {
      title: "Red Hat Linux",
      courses: [
        "RHCSA - Red Hat Certified System Administrator",
        "RHCE - Red Hat Certified Engineer",
        "Linux Server Administration"
      ]
    },
    networking: {
      title: "Networking Technologies",
      courses: [
        "Core Networking Fundamentals",
        "Network Security & Firewall",
        "Wireless Network Technology",
        "VOIP Solutions"
      ]
    },
    hardware: {
      title: "Hardware Training",
      courses: [
        "Computer Hardware & Maintenance",
        "Server Hardware & Configuration",
        "Laptop Chip Level Repairing"
      ]
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
{/* Logo */}
<Link to="/" className="flex items-center space-x-3">
  <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-white">
    <img
      src="/logo.jpg"
      alt="Antero Technology Logo"
      className="w-full h-full object-contain"
    />
  </div>
  <div className="flex flex-col">
    <span className="text-lg font-bold text-gray-800 leading-tight">
      Antero Technology
    </span>
    <span className="text-xs text-gray-500">MSME Registered</span>
  </div>
</Link>


          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Home
            </Link>
                        <Link to="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
              About
            </Link>
            
            {/* Training Mega Menu Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setTrainingDropdown(true)}
              onMouseLeave={() => setTrainingDropdown(false)}
            >
              <button className="text-gray-700 hover:text-primary transition-colors font-medium flex items-center gap-1">
                Training
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {trainingDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[750px] bg-white rounded-lg shadow-2xl overflow-hidden border-t-4 border-primary"
                  >
                    <div className="flex">
                      {/* Left Sidebar - Categories */}
                      <div className="w-72 bg-gradient-to-br from-primary to-blue-800 text-white p-4 max-h-[450px] overflow-y-auto">
                        <h3 className="text-xs font-semibold uppercase mb-4 opacity-75 tracking-wider">
                          Training Programs
                        </h3>
                        <ul className="space-y-1">
                          {Object.keys(trainingCategories).map((key) => (
                            <li key={key}>
                              <button
                                onMouseEnter={() => setSelectedCategory(key)}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm ${
                                  selectedCategory === key
                                    ? 'bg-white text-primary font-semibold shadow-lg'
                                    : 'hover:bg-blue-700 text-white'
                                }`}
                              >
                                {trainingCategories[key].title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Side - Courses */}
                      <div className="flex-1 p-6 bg-gray-50 max-h-[450px] overflow-y-auto">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-primary">
                          {trainingCategories[selectedCategory].title}
                        </h3>
                        <ul className="space-y-2">
                          {trainingCategories[selectedCategory].courses.map((course, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.03 }}
                            >
                              <Link 
                                to="/training" 
                                className="block px-4 py-3 text-gray-700 hover:bg-primary hover:text-white rounded-lg transition-all text-sm font-medium group"
                              >
                                <span className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-secondary rounded-full group-hover:bg-white"></span>
                                  {course}
                                </span>
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


            <Link to="/services" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Services
            </Link>
            <Link to="/placement" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Placement
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700"
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
              className="lg:hidden pb-4 overflow-hidden"
            >
              <Link to="/" className="block py-2 text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/training" className="block py-2 text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>
                Training
              </Link>
              <Link to="/about" className="block py-2 text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/services" className="block py-2 text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link to="/placement" className="block py-2 text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>
                Placement
              </Link>
              <Link to="/contact" className="block py-2 text-primary font-semibold" onClick={() => setIsOpen(false)}>
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
