
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { HERO_IMAGE } from '@/assets';
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
        background: 'linear-gradient(135deg, hsl(var(--background)), hsl(var(--muted)))'
      }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden opacity-60">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl -top-20 -left-20" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-3xl -bottom-20 -right-20" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-8">
            <Transition animation="fade-in-up" delay={100} className="mb-6">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary inline-block mb-6">
                October 15-17, 2023
              </span>
            </Transition>
            
            <Transition animation="fade-in-up" delay={300} className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Join the Ultimate <span className="gradient-text">Hackathon</span> Challenge!
              </h1>
            </Transition>
            
            <Transition animation="fade-in-up" delay={500} className="mb-8">
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Collaborate with innovators, build game-changing solutions, and win exciting prizes in this premier coding event of the year.
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
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <Transition animation="fade-in" delay={500} once={true}>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 backdrop-blur-sm rounded-2xl transform rotate-3"></div>
                <img 
                  src={HERO_IMAGE} 
                  alt="Hackathon event with participants collaborating" 
                  className={`rounded-2xl shadow-xl object-cover transition-all duration-1000 ${
                    loaded ? 'opacity-100' : 'opacity-0 blur-lg'
                  }`}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: 'perspective(1000px) rotateY(-5deg) rotateX(3deg)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
            </Transition>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <a 
            href="#about" 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-5 h-5 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
