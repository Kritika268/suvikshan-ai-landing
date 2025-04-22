
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-xl md:text-2xl font-bold">
            <span className="text-gradient">Suviksan</span> Technologies
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Service dropdown */}
          <div className="relative group">
            <button 
              onClick={() => toggleDropdown('services')}
              className="flex items-center text-gray-700 hover:text-primary transition-colors"
            >
              Services <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-56 rounded-md glass-card py-2 bg-white/90 backdrop-blur-lg shadow-lg"
                >
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50/50 hover:text-primary transition-colors">Custom Software Development</a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50/50 hover:text-primary transition-colors">Web & Mobile Applications</a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50/50 hover:text-primary transition-colors">Cloud Services</a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50/50 hover:text-primary transition-colors">IT Consulting</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About Us</a>
          <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">Portfolio</a>
          <a href="#careers" className="text-gray-700 hover:text-primary transition-colors">Careers</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
          
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-md hover:shadow-lg transition-all">
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-700 hover:text-primary focus:outline-none p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 inset-x-0 glass-card shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 bg-white/90 backdrop-blur-lg">
              <a href="#about" className="text-gray-700 hover:text-primary py-2 transition-colors" onClick={toggleMenu}>About Us</a>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown('mobileServices')} 
                  className="flex items-center justify-between w-full text-gray-700 hover:text-primary py-2 transition-colors"
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === 'mobileServices' ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'mobileServices' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-2 mt-2"
                    >
                      <a href="#services" className="block py-2 text-gray-700 hover:text-primary transition-colors">Custom Software Development</a>
                      <a href="#services" className="block py-2 text-gray-700 hover:text-primary transition-colors">Web & Mobile Applications</a>
                      <a href="#services" className="block py-2 text-gray-700 hover:text-primary transition-colors">Cloud Services</a>
                      <a href="#services" className="block py-2 text-gray-700 hover:text-primary transition-colors">IT Consulting</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <a href="#portfolio" className="text-gray-700 hover:text-primary py-2 transition-colors" onClick={toggleMenu}>Portfolio</a>
              <a href="#careers" className="text-gray-700 hover:text-primary py-2 transition-colors" onClick={toggleMenu}>Careers</a>
              <a href="#contact" className="text-gray-700 hover:text-primary py-2 transition-colors" onClick={toggleMenu}>Contact</a>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
