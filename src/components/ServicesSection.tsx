
import { useState } from 'react';
import { Database, Globe, Monitor, Shield, Settings, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  index: number 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-6 rounded-xl transition-all duration-300 ${
        isHovered 
          ? 'bg-gradient-to-br from-blue-50/90 to-white/95 shadow-lg transform -translate-y-1'
          : 'glass-card'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-14 h-14 mb-5 flex items-center justify-center rounded-lg transition-all duration-300 ${
        isHovered 
          ? 'bg-gradient-to-r from-primary to-secondary'
          : 'bg-gradient-to-r from-primary/10 to-secondary/10'
      }`}>
        <Icon size={24} className={`transition-colors duration-300 ${isHovered ? 'text-white' : 'text-primary'}`} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className={`transition-colors duration-300 ${isHovered ? 'text-gray-700' : 'text-gray-600'}`}>
        {description}
      </p>
      {isHovered && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4"
        >
          <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
            Learn more <span className="ml-1">→</span>
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Monitor,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to address your unique business challenges and requirements."
    },
    {
      icon: Globe,
      title: "Web & Mobile Applications",
      description: "Responsive web applications and native mobile apps that deliver exceptional user experiences."
    },
    {
      icon: Database,
      title: "Cloud Services",
      description: "Strategic cloud migration, infrastructure design, and managed cloud services for optimal performance."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security assessments, implementation, and monitoring to protect your digital assets."
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Expert guidance for technology strategy, digital transformation, and operational excellence."
    },
    {
      icon: Settings,
      title: "DevOps Services",
      description: "Streamlined development and operations through continuous integration and delivery pipelines."
    },
  ];

  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50/50 rounded-full filter blur-3xl opacity-30 z-0"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-50/50 rounded-full filter blur-3xl opacity-30 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1 bg-blue-50/80 backdrop-blur-sm rounded-full text-primary font-medium mb-4 shadow-sm">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive <span className="text-gradient">IT Solutions</span> for Your Business
          </h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of IT services tailored to meet the unique needs of your business, helping you stay competitive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-16"
        >
          <Button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
