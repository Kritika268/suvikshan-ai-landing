
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-gray-900 py-12 px-4 md:px-8 text-gray-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white">SuVikshan</h3>
            <p className="mb-4">
              AI-powered self-healing test automation for modern QA teams.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-electricBlue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-electricBlue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-electricBlue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-electricBlue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-electricBlue transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-electricBlue transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-electricBlue transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-electricBlue transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-electricBlue transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-electricBlue transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-electricBlue transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-electricBlue transition-colors">Case Studies</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-2">
              <li>contact@suvikshan.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 AI Avenue</li>
              <li>San Francisco, CA 94107</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} SuVikshan. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-electricBlue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-electricBlue transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-electricBlue transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
