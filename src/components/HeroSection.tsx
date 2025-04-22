
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="pt-28 pb-20 px-4 md:px-8 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              AI-powered <span className="gradient-text">Testing Revolution</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Revolutionize your testing workflow with self-healing automation, intelligent alerts, and seamless integration with your CI/CD pipeline.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#demo" 
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-electricBlue to-softPurple text-white font-medium hover:shadow-lg transition-all flex items-center justify-center w-full sm:w-auto"
              >
                Try Demo
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a 
                href="#features" 
                className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:border-electricBlue hover:text-electricBlue transition-all flex items-center justify-center w-full sm:w-auto"
              >
                Explore Features
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-scale-in">
            <div className="relative">
              {/* Main illustration */}
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="AI-powered Testing Automation" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-softPurple-light rounded-lg -z-10"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent rounded-lg -z-10"></div>
              
              {/* Stats */}
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 flex gap-8 w-4/5">
                <div className="text-center">
                  <p className="text-2xl font-bold gradient-text">98%</p>
                  <p className="text-xs text-gray-500">Test Recovery</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold gradient-text">75%</p>
                  <p className="text-xs text-gray-500">Time Saved</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold gradient-text">500+</p>
                  <p className="text-xs text-gray-500">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-softPurple-light rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default HeroSection;
