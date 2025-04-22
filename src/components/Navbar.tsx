
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm px-4 md:px-8 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-xl md:text-2xl font-bold">
            <span className="gradient-text">SuVikshan</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-electricBlue transition-colors">About</a>
          <a href="#features" className="text-gray-700 hover:text-electricBlue transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-electricBlue transition-colors">How It Works</a>
          <a href="#pricing" className="text-gray-700 hover:text-electricBlue transition-colors">Pricing</a>
          <a href="#contact" className="text-gray-700 hover:text-electricBlue transition-colors">Contact</a>
          <a 
            href="#demo" 
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-electricBlue to-softPurple text-white font-medium hover:shadow-lg transition-all"
          >
            Try Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-700 hover:text-electricBlue focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="text-gray-700 hover:text-electricBlue py-2 transition-colors" onClick={toggleMenu}>About</a>
            <a href="#features" className="text-gray-700 hover:text-electricBlue py-2 transition-colors" onClick={toggleMenu}>Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-electricBlue py-2 transition-colors" onClick={toggleMenu}>How It Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-electricBlue py-2 transition-colors" onClick={toggleMenu}>Pricing</a>
            <a href="#contact" className="text-gray-700 hover:text-electricBlue py-2 transition-colors" onClick={toggleMenu}>Contact</a>
            <a 
              href="#demo" 
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-electricBlue to-softPurple text-white font-medium text-center"
              onClick={toggleMenu}
            >
              Try Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
