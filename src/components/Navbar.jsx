import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [courseDropdown, setCourseDropdown] = useState(false);

  const courseCategories = [
    {
      title: "Programming",
      items: ["Java", "Python", "C++", "C"]
    },
    {
      title: "Web Development - Frontend",
      items: ["React", "HTML", "CSS", "JavaScript", "Tailwind"]
    },
    {
      title: "Web Development - Backend",
      items: ["Django", "Node.js", "Express.js"]
    },
    {
      title: "Networking & Certifications",
      items: ["Cisco CCNA", "Microsoft MCSA", "Red Hat Linux"]
    }
  ];

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
            
            {/* Courses Dropdown */}
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
                    className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-2xl p-6 grid grid-cols-2 gap-6"
                  >
                    {courseCategories.map((category, idx) => (
                      <div key={idx} className="space-y-2">
                        <h3 className="font-semibold text-primary text-sm uppercase">
                          {category.title}
                        </h3>
                        <ul className="space-y-1">
                          {category.items.map((item, i) => (
                            <li key={i}>
                              <Link 
                                to="/courses" 
                                className="text-gray-600 hover:text-secondary text-sm hover:translate-x-1 inline-block transition-all"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
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
