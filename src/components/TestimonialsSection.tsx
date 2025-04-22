
import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
  stars: number;
}

const Testimonial = ({ quote, name, role, company, image, stars }: TestimonialProps) => (
  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md border border-white/20 h-full">
    <div className="flex mb-4">
      {Array(stars).fill(0).map((_, i) => (
        <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
      ))}
    </div>
    <p className="text-gray-700 mb-6 italic">"{quote}"</p>
    <div className="flex items-center">
      <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-600">{role}, {company}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const isMobile = useIsMobile();

  const testimonials: TestimonialProps[] = [
    {
      quote: "Suviksan Technologies transformed our outdated systems into a modern, efficient infrastructure. Their team demonstrated exceptional technical expertise and professionalism throughout the project.",
      name: "Sarah Johnson",
      role: "CIO",
      company: "TechNova",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      stars: 5
    },
    {
      quote: "The custom software solution delivered by Suviksan increased our operational efficiency by 40%. Their agile development approach ensured we were involved at every stage of the process.",
      name: "Michael Chen",
      role: "Operations Director",
      company: "CloudScale",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      stars: 5
    },
    {
      quote: "We've seen a remarkable improvement in our cybersecurity posture since implementing Suviksan's recommendations. Their ongoing support has been invaluable to maintaining our security standards.",
      name: "Emma Rodriguez",
      role: "IT Security Manager",
      company: "FinTech Solutions",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      stars: 5
    },
    {
      quote: "Suviksan's cloud migration strategy saved us 30% on infrastructure costs while improving system reliability. They guided us through every step of the transition with expert knowledge.",
      name: "David Park",
      role: "CTO",
      company: "RetailAI",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      stars: 5
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100/50 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-100/50 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto relative">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1 bg-blue-50/80 backdrop-blur-sm rounded-full text-primary font-medium mb-4 shadow-sm">
            Client Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-600">
            We take pride in delivering exceptional service and solutions that exceed our clients' expectations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {isMobile ? (
            <div className="px-4">
              <Carousel className="w-full max-w-sm mx-auto">
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="pl-4">
                      <Testimonial {...testimonial} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-8">
                  <CarouselPrevious className="static transform-none bg-white shadow-md hover:bg-blue-50 mr-4" />
                  <CarouselNext className="static transform-none bg-white shadow-md hover:bg-blue-50" />
                </div>
              </Carousel>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Testimonial {...testimonial} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
        
        {/* Trusted By Logos */}
        <div className="mt-20">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center text-sm text-gray-500 mb-8"
          >
            TRUSTED BY INNOVATIVE COMPANIES
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70"
          >
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
