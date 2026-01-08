import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Training", path: "/training" },
    { name: "Services", path: "/services" },
    { name: "Placement", path: "/placement" },
    { name: "Career", path: "/career" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contact" }
  ];

  const popularTraining = [
    "CCNA Certification",
    "CCNP Enterprise",
    "Microsoft MCSA",
    "Red Hat RHCSA",
    "Network Security",
    "Hardware Maintenance"
  ];

  const contactInfo = {
    phones: ["+91 94588 61655", "+91 87551 53225"],
    email: "admin@antero.in",
    address: "SA-9, Shastri Nagar, Beside Sona Mart, Opposite Pahalwan Dhaba, Near Hapur Chungi, Ghaziabad-201002"
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <img
                  src="/logo.jpg"
                  alt="Antero Technology Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">
                Antero Technology
              </span>
            </div>

            <p className="text-sm mb-4 leading-relaxed">
              Antero Technology Group provides industry-standard training in Cisco, Microsoft, and Red Hat technologies, helping organizations recruit skilled and job-ready professionals for today’s evolving IT landscape.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    aria-label={social.label}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="hover:text-primary transition-colors duration-300 text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Training */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Popular Training</h3>
            <ul className="space-y-2">
              {popularTraining.map((training, index) => (
                <li key={index}>
                  <Link 
                    to="/training"
                    className="hover:text-primary transition-colors duration-300 text-sm block"
                  >
                    {training}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  {contactInfo.phones.map((phone, index) => (
                    <a 
                      key={index}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="block hover:text-primary transition-colors duration-300"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>

              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {contactInfo.email}
                </a>
              </li>

              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {contactInfo.address}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between text-sm">
            <p className="text-center md:text-left">
              © {currentYear} Antero Technology Group. All rights reserved. | Registered under  Govt. of India
            </p>
            <div className="flex justify-center md:justify-end space-x-6 mt-4 md:mt-0">
              <Link 
                to="/privacy-policy" 
                className="hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
