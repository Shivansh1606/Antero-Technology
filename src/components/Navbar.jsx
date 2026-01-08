import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [trainingDropdown, setTrainingDropdown] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const navigate = useNavigate();

  const trainingCategories = [
    {
      id: 'cisco',
      title: "Cisco Certifications",
      courses: [
        "CCNA - Network Associate",
        "CCNP Enterprise (Routing & Switching)",
        "CCNP Security",
        "CCIE - Expert Level"
      ]
    },
    {
      id: 'microsoft',
      title: "Microsoft Certifications",
      courses: [
        "MCSA - Solutions Associate",
        "MCSE - Server Infrastructure",
        "Microsoft Azure Administrator",
        "Exchange Server Administration"
      ]
    },
    {
      id: 'redhat',
      title: "Red Hat Linux",
      courses: [
        "RHCSA - System Administrator",
        "RHCE - Certified Engineer",
        "Linux Server Administration"
      ]
    },
    {
      id: 'networking',
      title: "Networking Technologies",
      courses: [
        "Core Networking Fundamentals",
        "Network Security & Firewall",
        "Wireless Network Technology",
        "VOIP Solutions"
      ]
    },
    {
      id: 'hardware',
      title: "Hardware Training",
      courses: [
        "Computer Hardware & Maintenance",
        "Server Hardware Configuration",
        "Laptop Chip Level Repairing"
      ]
    }
  ];

  const handleCategoryClick = (e) => {
    e.preventDefault();
    setTrainingDropdown(false);
    setActiveSubmenu(null);
    navigate('/training');
  };

  const handleCourseClick = (e) => {
    e.preventDefault();
    setTrainingDropdown(false);
    setActiveSubmenu(null);
    navigate('/training');
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
            
            {/* WORKING MULTI-LEVEL DROPDOWN */}
            <div 
              className="relative group"
              onMouseEnter={() => setTrainingDropdown(true)}
              onMouseLeave={() => {
                setTrainingDropdown(false);
                setActiveSubmenu(null);
              }}
            >
              <button className="text-gray-700 hover:text-primary transition-colors font-medium flex items-center gap-1">
                Training
                <ChevronDown className={`w-4 h-4 transition-transform ${trainingDropdown ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {trainingDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100"
                  >
                    {trainingCategories.map((category, index) => (
                      <div 
                        key={category.id}
                        className="relative"
                      >
                        {/* Main Category - CLICKABLE */}
                        <button
                          onClick={handleCategoryClick}
                          onMouseEnter={() => setActiveSubmenu(category.id)}
                          className="w-full px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer flex items-center justify-between group/item text-left"
                        >
                          <span className="text-gray-700 font-medium group-hover/item:text-primary">
                            {category.title}
                          </span>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover/item:text-primary" />
                        </button>

                        {/* Courses Submenu on Hover */}
                        {activeSubmenu === category.id && (
                          <div
                            className="absolute left-full top-0 ml-1 w-80 bg-white rounded-lg shadow-2xl border border-gray-100 z-50"
                            onMouseEnter={() => setActiveSubmenu(category.id)}
                            onMouseLeave={() => setActiveSubmenu(null)}
                          >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-primary to-blue-700 px-4 py-3">
                              <h4 className="font-bold text-white text-sm">{category.title}</h4>
                            </div>
                            
                            {/* Courses List - ALL CLICKABLE */}
                            <div className="p-2 max-h-96 overflow-y-auto">
                              {category.courses.map((course, idx) => (
                                <button
                                  key={idx}
                                  onClick={handleCourseClick}
                                  className="w-full text-left block px-4 py-3 text-gray-700 hover:bg-primary hover:text-white rounded-md transition-all text-sm group/course"
                                >
                                  <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover/course:bg-white"></span>
                                    <span>{course}</span>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Separator */}
                        {index < trainingCategories.length - 1 && (
                          <div className="border-b border-gray-100"></div>
                        )}
                      </div>
                    ))}
                    
                    {/* View All Link - CLICKABLE */}
                    <button
                      onClick={handleCategoryClick}
                      className="w-full text-left block bg-gray-50 px-4 py-3 border-t border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-primary font-semibold text-sm flex items-center gap-1">
                        View All Training Programs
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </button>
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
              <Link to="/about" className="block py-2 text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>
                About
              </Link>
              
              {/* Mobile Training - CLICKABLE */}
              <div className="py-2">
                <button 
                  className="w-full flex items-center justify-between text-gray-700 font-medium"
                  onClick={() => setTrainingDropdown(!trainingDropdown)}
                >
                  Training
                  <ChevronDown className={`w-4 h-4 transition-transform ${trainingDropdown ? 'rotate-180' : ''}`} />
                </button>
                {trainingDropdown && (
                  <div className="pl-4 mt-2 space-y-3">
                    {trainingCategories.map((category) => (
                      <div key={category.id}>
                        <button
                          onClick={() => {
                            navigate('/training');
                            setIsOpen(false);
                          }}
                          className="text-sm font-semibold text-gray-800 hover:text-primary text-left w-full mb-2"
                        >
                          {category.title}
                        </button>
                        <div className="pl-3 space-y-1">
                          {category.courses.map((course, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                navigate('/training');
                                setIsOpen(false);
                              }}
                              className="block text-sm text-gray-600 hover:text-primary py-1 text-left w-full"
                            >
                              • {course}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        navigate('/training');
                        setIsOpen(false);
                      }}
                      className="block text-sm text-primary font-semibold pt-2 text-left w-full"
                    >
                      View All Programs →
                    </button>
                  </div>
                )}
              </div>

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
