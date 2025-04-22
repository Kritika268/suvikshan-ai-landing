
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const AnimatedBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();
  
  // Track scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY * 0.2);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark gradient overlay with blues and oranges */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-gray-900/95 to-black">
        {/* Circuit pattern layer */}
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.8 8.544l1.414 1.414 9.9-9.9h-2.77zm22.628 0L53.8 8.828l-1.415 1.415L41.515 0h3.457zm-17.656 0l12.728 12.728-1.414 1.414L25.515 0h2.8zM28.657 0L41.385 12.728l-1.414 1.414L26.243 0h2.414zm-9.9 0L33.8 18.9l-1.415 1.415L15.343 0h3.414zM38.657 0l15.556 15.557-1.414 1.414L36.243 0h2.414zM13.414 0L42 28.586l-1.414 1.414L0 0h13.414zM50.97 0L60 9.031V7.314L52.385 0h-1.415zm-36.97 0l36.97 36.97-1.414 1.414L0 0h13.999zM15.029 0L60 44.97V42.25L16.443 0h-1.414zM14.015 0L60 45.985V43.27L15.429 0h-1.414zM12.015 0L60 47.985V45.27L13.429 0h-1.414zM9.029 0L60 50.97V48.254L10.443 0H9.03zM6.015 0L60 53.985V51.27L7.429 0H6.015zM4.015 0L60 55.985V53.27L5.429 0H4.015zM2.015 0L60 57.985V55.27L3.429 0H2.015zM0 0l60 60H57.985L0 2.015V0z' fill='%2320232a' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Animated orbs and nodes */}
        <div className="absolute inset-0">
          {/* Large glowing orbs with parallax effect */}
          <div 
            className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/20 blur-3xl animate-float-slow" 
            style={{ 
              top: `${Math.max(10, 25 - scrollY * 0.05)}%`, 
              left: `${Math.max(10, 25 - scrollY * 0.02)}%` 
            }}
          />
          <div 
            className="absolute w-[250px] h-[250px] rounded-full bg-orange-400/20 blur-3xl animate-float-delayed" 
            style={{ 
              top: `${Math.min(70, 50 + scrollY * 0.03)}%`, 
              right: `${Math.min(30, 25 + scrollY * 0.01)}%` 
            }}
          />
          <div 
            className="absolute w-[200px] h-[200px] rounded-full bg-blue-400/20 blur-3xl animate-float" 
            style={{ 
              bottom: `${Math.max(10, 25 - scrollY * 0.04)}%`, 
              left: `${Math.min(40, 33 + scrollY * 0.02)}%` 
            }}
          />
          
          {/* Small tech nodes with pulse animations */}
          <div className="absolute inset-0 opacity-75">
            {/* Nodes */}
            <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-1/4 left-1/4 animate-pulse" />
            <div className="absolute w-2 h-2 bg-orange-400 rounded-full top-1/2 right-1/4 animate-pulse" />
            <div className="absolute w-2 h-2 bg-blue-300 rounded-full bottom-1/4 left-1/3 animate-pulse" />
            <div className="absolute w-2 h-2 bg-orange-300 rounded-full bottom-1/3 right-1/3 animate-pulse" />
            <div className="absolute w-2 h-2 bg-blue-200 rounded-full top-1/3 left-1/2 animate-pulse" />
            
            {/* Connecting lines */}
            <div className="absolute top-1/4 left-1/4 w-[200px] h-[1px] bg-gradient-to-r from-blue-400/50 to-transparent transform rotate-45 animate-pulse" />
            <div className="absolute top-1/2 right-1/4 w-[200px] h-[1px] bg-gradient-to-r from-orange-400/50 to-transparent transform -rotate-45 animate-pulse" />
            <div className="absolute bottom-1/3 right-1/3 w-[150px] h-[1px] bg-gradient-to-r from-orange-300/50 to-transparent transform rotate-20 animate-pulse" />
            <div className="absolute top-1/3 left-1/2 w-[180px] h-[1px] bg-gradient-to-r from-blue-200/50 to-transparent transform -rotate-30 animate-pulse" />
          </div>

          {/* Digital particles - only on desktop */}
          {!isMobile && (
            <div className="absolute inset-0 opacity-30">
              {[...Array(15)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-1 h-1 bg-white rounded-full animate-float"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${5 + Math.random() * 10}s`
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
