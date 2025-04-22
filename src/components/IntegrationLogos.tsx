
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PartnerLogos = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const logoContainerRef = useRef<HTMLDivElement>(null);
  
  // Simple marquee effect for logos
  useEffect(() => {
    if (!logoContainerRef.current) return;
    
    const scrollWidth = logoContainerRef.current.scrollWidth;
    const clientWidth = logoContainerRef.current.clientWidth;
    
    if (scrollWidth <= clientWidth) return;
    
    let animationId: number;
    let scrollPos = 0;
    
    const animate = () => {
      if (!logoContainerRef.current) return;
      
      scrollPos += 0.5;
      if (scrollPos >= scrollWidth / 2) scrollPos = 0;
      
      logoContainerRef.current.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const logos = [
    'Microsoft', 'AWS', 'Google Cloud', 'Oracle', 'SAP', 'IBM', 
    'Salesforce', 'Adobe', 'Cisco', 'VMware', 'Red Hat', 'Dell'
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="absolute -bottom-1/2 -left-1/4 w-full h-full rounded-full bg-blue-50/50 filter blur-3xl opacity-30"></div>
      <div className="absolute -top-1/2 -right-1/4 w-full h-full rounded-full bg-orange-50/50 filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto relative">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div 
            variants={logoVariants} 
            custom={0}
            className="inline-block px-4 py-1 bg-blue-50/80 backdrop-blur-sm rounded-full text-primary font-medium mb-4 shadow-sm"
          >
            Our Technology Partners
          </motion.div>
          
          <motion.h2 
            variants={logoVariants}
            custom={1}
            className="text-2xl md:text-3xl font-bold mb-2"
          >
            Trusted <span className="text-gradient">Partners</span>
          </motion.h2>
          
          <motion.p 
            variants={logoVariants}
            custom={2}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We collaborate with industry-leading technology companies to deliver cutting-edge solutions for our clients
          </motion.p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div ref={logoContainerRef} className="flex space-x-8 pb-4 overflow-x-auto scrollbar-hide">
            {/* Add duplicate logos for seamless infinite scroll effect */}
            {[...logos, ...logos].map((name, index) => (
              <motion.div 
                key={`${name}-${index}`}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={logoVariants}
                custom={index % logos.length}
                className="flex-shrink-0 flex flex-col items-center justify-center p-6 glass-card rounded-lg h-28 w-40 bg-white/80 backdrop-blur-sm border border-white/20 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gray-100 rounded mb-3 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-200 rounded" />
                </div>
                <span className="text-sm text-gray-700 font-medium">{name}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Add gradient fade effect on edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
