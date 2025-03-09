
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import Transition from './Transition';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: '#121212',
      }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden opacity-60">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-orange/10 blur-3xl -top-20 -left-20" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-orange-light/10 blur-3xl -bottom-20 -right-20" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-8">
            <Transition animation="fade-in-up" delay={100}>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange/20 text-orange inline-block mb-6">
                September 19, 2025
              </span>
            </Transition>
            
            <Transition animation="fade-in-up" delay={300}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Join the Ultimate <span className="text-orange">HACKरण</span> Challenge!
              </h1>
            </Transition>
            
            <Transition animation="fade-in-up" delay={500}>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                Collaborate with innovators, build game-changing solutions, and win exciting prizes in this premier coding event organized by GEEK ROOM at JIMSEMTC.
              </p>
            </Transition>
            
            <Transition animation="fade-in-up" delay={700}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#register" className="button-primary">
                  Register Now
                </a>
                <a href="#about" className="button-outline">
                  Learn More
                </a>
              </div>
            </Transition>

            <Transition animation="fade-in-up" delay={900}>
              <div className="mt-8 bg-charcoal/50 p-4 rounded-lg border border-orange/20">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="text-center">
                    <p className="text-orange font-bold">Prize Pool</p>
                    <p className="text-white text-sm">₹30,000+</p>
                  </div>
                  <div className="text-center">
                    <p className="text-orange font-bold">Duration</p>
                    <p className="text-white text-sm">30 Hours</p>
                  </div>
                  <div className="text-center">
                    <p className="text-orange font-bold">Format</p>
                    <p className="text-white text-sm">Offline</p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <Transition animation="fade-in" delay={500} once={true}>
              <div className="relative">
                <div className="absolute inset-0 bg-orange/5 backdrop-blur-sm rounded-2xl transform rotate-3"></div>
                <img 
                  src="/lovable-uploads/8469c9e0-17e4-47a8-89b2-09a55d98d357.png" 
                  alt="Hackathon event with participants" 
                  className={`rounded-2xl shadow-xl object-cover w-full transition-all duration-1000 ${
                    loaded ? 'opacity-100' : 'opacity-0 blur-lg'
                  }`}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: 'perspective(1000px) rotateY(-5deg) rotateX(3deg)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                  }}
                />
              </div>
            </Transition>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <a 
            href="#about" 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-orange/20 shadow-md hover:bg-orange/30 transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-5 h-5 text-orange" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
