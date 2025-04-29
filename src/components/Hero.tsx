
import React, { useEffect, useState } from 'react';
import { ArrowDown, Shield, Star, Calendar, Clock, MapPin } from 'lucide-react';
import Transition from './Transition';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setLoaded(true);
    
    // Reduced 3D parallax effect
    const handleMouseMove = (e) => {
      const hero = document.getElementById('hero-section');
      if (hero) {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        
        // Update state for use in other elements (with reduced effect)
        setMousePosition({ x, y });
        
        // Apply more subtle 3D effect
        hero.style.transform = `perspective(1200px) rotateY(${x * 2}deg) rotateX(${-y * 2}deg)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="hero-section" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden transform-gpu transition-transform duration-300 ease-out"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Banner image - replaced with new banner */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/68f9c2f2-cea9-4e40-9dea-64ab9cad6ce0.png" 
          alt="HackQuanta Banner" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            transform: `translateZ(-5px) scale(1.05) translateX(${mousePosition.x * -5}px) translateY(${mousePosition.y * -5}px)`,
          }}
        />
      </div>
      
      {/* Reduced glowing effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute w-[400px] h-[400px] rounded-full bg-marvel-blue/5 blur-[80px] -top-40 -left-40"
          style={{ 
            transform: `translateZ(-5px) translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`,
          }}
        />
      </div>
      
      {/* Content container with "presents" banner effect */}
      <div className="container mx-auto px-6 relative z-10 py-12 md:py-20">
        <div className="flex flex-col items-center gap-8 mt-[45vh]">
          {/* Event details with less pronounced 3D card effect */}
          <Transition animation="fade-in-up" delay={900}>
            <div className="glass p-4 rounded-lg border border-marvel-grey/30 transform hover:translate-y-1 transition-transform duration-300 shadow-glow">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Clock className="w-5 h-5 text-marvel-cyan mx-auto mb-1" />
                  <p className="text-marvel-cyan font-bold">Duration</p>
                  <p className="text-white text-sm">36 Hours</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-5 h-5 text-marvel-cyan mx-auto mb-1" />
                  <p className="text-marvel-cyan font-bold">Format</p>
                  <p className="text-white text-sm">Offline</p>
                </div>
                <div className="text-center">
                  <Shield className="w-5 h-5 text-marvel-cyan mx-auto mb-1" />
                  <p className="text-marvel-cyan font-bold">Prize Pool</p>
                  <p className="text-white text-sm">₹50,000+</p>
                </div>
              </div>
            </div>
          </Transition>

          {/* Call to action with less pronounced 3D hover effect */}
          <Transition animation="fade-in-up" delay={700}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#register" className="bg-marvel-red text-white py-3 px-8 rounded hover:bg-marvel-red/90 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
                Register Now
                <Star className="w-4 h-4 animate-pulse-slow" />
              </a>
              <a href="#about" className="border border-marvel-cyan text-marvel-cyan py-3 px-8 rounded hover:bg-marvel-cyan/10 transition-all duration-300 flex items-center justify-center">
                Learn More
              </a>
            </div>
          </Transition>
        </div>
        
        {/* Scroll indicator with reduced float effect */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float"
          style={{ transform: 'translateX(-50%)' }}
        >
          <a 
            href="#about" 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-marvel-blue/20 shadow-glow hover:bg-marvel-blue/30 transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-5 h-5 text-marvel-cyan" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
