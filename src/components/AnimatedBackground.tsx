
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-orange-50 to-white animate-gradient-shift overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-200/30 blur-3xl animate-float top-[-100px] left-[-100px]" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-orange-200/30 blur-3xl animate-float-delayed top-[20%] right-[-100px]" />
          <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-100/30 blur-3xl animate-float-slow bottom-[-200px] left-[20%]" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
