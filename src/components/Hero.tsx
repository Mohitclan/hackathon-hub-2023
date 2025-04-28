
import React, { useEffect, useState } from 'react';
import { ArrowDown, Shield, Star } from 'lucide-react';
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
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-marvel-blue/20 to-marvel-navy tech-pattern"></div>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-marvel-blue/10 blur-[100px] -top-40 -left-40" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-marvel-red/5 blur-[100px] -bottom-40 -right-40" />
      </div>
      
      {/* Animated particles - subtle tech feel */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-marvel-cyan rounded-full animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-8">
            <Transition animation="fade-in-up" delay={100}>
              <div className="flex items-center gap-2 mb-6">
                <Shield className="h-5 w-5 text-marvel-red" />
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-marvel-navy/50 text-marvel-cyan border border-marvel-grey/30 inline-block">
                  September 19, 2025
                </span>
              </div>
            </Transition>
            
            <Transition animation="fade-in-up" delay={300}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Join the Ultimate <span className="gradient-text">HACKरण</span> Challenge!
              </h1>
            </Transition>
            
            <Transition animation="fade-in-up" delay={500}>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                Collaborate with innovators, build game-changing solutions, and win exciting prizes in this premier coding event organized by GEEK ROOM at JIMSEMTC.
              </p>
            </Transition>
            
            <Transition animation="fade-in-up" delay={700}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#register" className="button-danger flex items-center justify-center gap-2">
                  Register Now
                  <Star className="w-4 h-4 animate-pulse-slow" />
                </a>
                <a href="#about" className="button-outline">
                  Learn More
                </a>
              </div>
            </Transition>

            <Transition animation="fade-in-up" delay={900}>
              <div className="mt-8 glass p-4 rounded-lg border border-marvel-grey/30">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="text-center">
                    <p className="text-marvel-cyan font-bold">Prize Pool</p>
                    <p className="text-white text-sm">₹30,000+</p>
                  </div>
                  <div className="text-center">
                    <p className="text-marvel-cyan font-bold">Duration</p>
                    <p className="text-white text-sm">30 Hours</p>
                  </div>
                  <div className="text-center">
                    <p className="text-marvel-cyan font-bold">Format</p>
                    <p className="text-white text-sm">Offline</p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <Transition animation="fade-in" delay={500} once={true}>
              <div className="relative">
                <div className="absolute inset-0 bg-marvel-blue/20 backdrop-blur-sm rounded-2xl transform rotate-3 border border-marvel-cyan/30"></div>
                <img 
                  src="/lovable-uploads/8469c9e0-17e4-47a8-89b2-09a55d98d357.png" 
                  alt="Hackathon event with participants" 
                  className={`rounded-2xl shadow-glow object-cover w-full transition-all duration-1000 ${
                    loaded ? 'opacity-100' : 'opacity-0 blur-lg'
                  }`}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: 'perspective(1000px) rotateY(-5deg) rotateX(3deg)',
                    boxShadow: '0 20px 40px rgba(0, 123, 255, 0.3)'
                  }}
                />
                {/* Tech circuit overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0, 207, 255, 0.2) 10px, rgba(0, 207, 255, 0.2) 11px),
                      repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0, 207, 255, 0.2) 10px, rgba(0, 207, 255, 0.2) 11px)
                    `
                  }}
                ></div>
              </div>
            </Transition>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
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
