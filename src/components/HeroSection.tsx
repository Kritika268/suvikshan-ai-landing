
import { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section id="hero" className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-blue-50/80 backdrop-blur-sm rounded-full text-primary font-medium mb-2 shadow-sm">
              Digital Transformation Partner
            </div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Innovative <span className="text-gradient">IT Solutions</span> for Modern Business
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 max-w-xl"
            >
              Empowering businesses with cutting-edge technology services, custom software development, and strategic IT consulting.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                className="px-6 py-6 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium transition-all flex items-center justify-center group hover:shadow-lg hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Explore Services
                <ArrowRight size={18} className={`ml-2 transition-transform duration-300 ${isHovered ? 'transform translate-x-1' : ''}`} />
              </Button>
              
              <Button variant="outline" className="px-6 py-6 rounded-lg border border-gray-300 text-gray-700 font-medium hover:border-primary hover:text-primary transition-all flex items-center justify-center hover:bg-gray-50/50 hover:scale-105">
                <Play size={18} className="mr-2" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:w-1/2 animate-float"
          >
            <div className="relative">
              {/* Main illustration with glassmorphism effect */}
              <div className="glass-card p-2 rounded-xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80" 
                  alt="IT Solutions" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              {/* Decorative elements with neumorphism */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent rounded-lg shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.1)] -z-10"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-50 rounded-lg shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.1)] -z-10"></div>
              
              {/* Stats with glassmorphism */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 glass-card rounded-lg p-4 flex gap-8 w-4/5 bg-white/70 backdrop-blur-md border border-white/20 shadow-lg"
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-gradient">10+</p>
                  <p className="text-xs text-gray-500">Years of Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gradient">200+</p>
                  <p className="text-xs text-gray-500">Projects Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gradient">50+</p>
                  <p className="text-xs text-gray-500">IT Professionals</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full filter blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default HeroSection;
