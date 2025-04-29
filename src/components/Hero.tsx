
import React, { useState, useEffect } from 'react';
import { ArrowDown, Shield, Star, Calendar, Clock, MapPin } from 'lucide-react';
import Transition from './Transition';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="hero-section" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden md:pl-16"
    >
      {/* Background imagery */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/a9837f4b-a011-42b9-95c5-4b364d20b8e5.png" 
          alt="Marvel Heroes" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      </div>
      
      {/* Subtle floating glowing effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-marvel-blue/10 blur-[100px] -top-40 -left-40" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-marvel-red/5 blur-[100px] -bottom-40 -right-40" />
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 md:pr-8">
            {/* Event tag */}
            <Transition animation="fade-in-up" delay={100}>
              <div className="flex items-center gap-2 mb-6">
                <Shield className="h-5 w-5 text-marvel-red" />
                <div className="px-3 py-1 rounded-full text-sm font-medium bg-marvel-navy/50 text-marvel-cyan border border-marvel-grey/30 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>September 5-6, 2025</span>
                </div>
              </div>
            </Transition>
            
            {/* Heading */}
            <Transition animation="fade-in-up" delay={300}>
              <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6 text-white">
                <span className="block mb-2 text-white font-orbitron">Hack</span>
                <span className="block text-marvel-cyan text-5xl md:text-6xl">Quanta</span>
              </h1>
            </Transition>
            
            {/* Description */}
            <Transition animation="fade-in-up" delay={500}>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                Join India's most ambitious student hackathon where innovation meets technology. Build revolutionary solutions and win exciting prizes.
              </p>
              <p className="text-md text-marvel-cyan mb-4">
                DATA. DYSTOPIA. DOMINANCE.
              </p>
            </Transition>
            
            {/* Call to action */}
            <Transition animation="fade-in-up" delay={700}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#register" className="bg-marvel-red text-white py-3 px-8 rounded hover:bg-marvel-red/90 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
                  Register Now
                  <Star className="w-4 h-4 animate-pulse-slow" />
                </a>
                <a href="#about" className="border border-marvel-cyan text-marvel-cyan py-3 px-8 rounded hover:bg-marvel-cyan/10 transition-all duration-300 flex items-center justify-center">
                  Learn More
                </a>
              </div>
            </Transition>

            {/* Event details */}
            <Transition animation="fade-in-up" delay={900}>
              <div className="mt-8 bg-marvel-navy/50 backdrop-blur-md p-4 rounded-lg border border-marvel-grey/30 hover:border-marvel-cyan/50 transition-all duration-300">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Clock className="w-5 h-5 text-marvel-cyan mx-auto mb-1" />
                    <p className="text-marvel-cyan font-bold">Duration</p>
                    <p className="text-white text-sm">30 Hours</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-5 h-5 text-marvel-cyan mx-auto mb-1" />
                    <p className="text-marvel-cyan font-bold">Format</p>
                    <p className="text-white text-sm">Offline</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-5 h-5 text-marvel-cyan mx-auto mb-1" />
                    <p className="text-marvel-cyan font-bold">Prize Pool</p>
                    <p className="text-white text-sm">₹30,000+</p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <Transition animation="fade-in" delay={500} once={true}>
              <div className="relative">
                {/* Modern flat frame */}
                <div className="absolute inset-0 border-[2px] border-marvel-blue rounded-lg shadow-md -m-2 opacity-30"></div>
                <div className="absolute inset-0 border-[2px] border-white rounded-lg shadow-md m-2 opacity-10"></div>
                
                {/* Hero image - updated to HackQuanta poster */}
                <div className="relative z-10 overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/lovable-uploads/8469c9e0-17e4-47a8-89b2-09a55d98d357.png" 
                    alt="HackQuanta poster" 
                    className={`rounded-lg object-cover w-full transition-all duration-1000 ${
                      loaded ? 'opacity-100' : 'opacity-0 blur-lg'
                    }`}
                  />
                </div>
                
                {/* Event tag */}
                <div className="absolute -bottom-5 -right-5 bg-marvel-blue text-white py-2 px-4 rounded font-orbitron shadow-md">
                  JIMSEMTC
                </div>
              </div>
            </Transition>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <a 
            href="#about" 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-marvel-blue/20 hover:bg-marvel-blue/30 transition-colors duration-300 hover:scale-110"
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
