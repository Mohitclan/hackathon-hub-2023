
import React, { useEffect, useState } from 'react';
import { SPONSORS } from '@/assets';
import Transition from './Transition';

const Sponsors = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Add 3D mouse tracking effect
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const get3DTransform = (index) => {
    // Create varied 3D transforms for each sponsor card
    const baseZ = 10 + (index % 3) * 5;
    const rotateY = mousePosition.x * (3 + index % 2);
    const rotateX = -mousePosition.y * (2 + index % 3);
    
    return {
      transform: `perspective(1000px) translateZ(${baseZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.2s ease-out',
      transformStyle: 'preserve-3d'
    };
  };

  return (
    <section id="sponsors" className="section-padding bg-gradient-to-b from-marvel-black to-marvel-darkred relative">
      <div className="absolute inset-0 opacity-10 tech-pattern pointer-events-none"></div>
      
      <div 
        className="container mx-auto px-6 relative" 
        style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
      >
        <Transition animation="fade-in-up">
          <h2 
            className="section-heading text-marvel-gold"
            style={{ textShadow: '0 2px 10px rgba(253, 184, 39, 0.3)' }}
          >
            Our Amazing Sponsors
          </h2>
        </Transition>
        
        <Transition animation="fade-in-up" delay={200}>
          <p className="section-subheading">
            We're proud to partner with leading companies who share our vision of fostering innovation and supporting the next generation of tech talent.
          </p>
        </Transition>
        
        <div 
          className="mt-12"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <h3 
            className="text-xl font-medium text-center mb-10 text-marvel-gold font-orbitron"
            style={{ 
              textShadow: '0 2px 8px rgba(253, 184, 39, 0.2)',
              transform: `translateZ(15px) translateY(${mousePosition.y * -5}px)`,
              transformStyle: 'preserve-3d'
            }}
          >
            Platinum Sponsors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SPONSORS.main.map((sponsor, index) => (
              <Transition key={index} animation="fade-in-up" delay={300 + index * 100}>
                <div 
                  className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-marvel-red/20 hover:border-marvel-gold/50 transition-all duration-300 shadow-glow flex items-center justify-center h-40 transform-gpu"
                  style={get3DTransform(index)}
                >
                  <img 
                    src={sponsor} 
                    alt={`Sponsor ${index + 1}`} 
                    className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* 3D subtle highlight effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{ transform: 'translateZ(1px)' }}
                  ></div>
                </div>
              </Transition>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 
            className="text-xl font-medium text-center mb-10 text-marvel-gold font-orbitron"
            style={{ 
              textShadow: '0 2px 8px rgba(253, 184, 39, 0.2)',
              transform: `translateZ(15px) translateY(${mousePosition.y * -5}px)`,
              transformStyle: 'preserve-3d'
            }}
          >
            Gold Sponsors
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {SPONSORS.supporting.map((partner, index) => (
              <Transition key={index} animation="fade-in-up" delay={500 + index * 100}>
                <div 
                  className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-marvel-red/20 hover:border-marvel-gold/50 transition-all duration-300 shadow-glow flex items-center justify-center h-32 w-48"
                  style={get3DTransform(index + 4)}
                >
                  <img 
                    src={partner} 
                    alt={`Partner ${index + 1}`} 
                    className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* 3D subtle highlight effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{ transform: 'translateZ(1px)' }}
                  ></div>
                </div>
              </Transition>
            ))}
          </div>
        </div>
        
        <Transition animation="fade-in-up" delay={800}>
          <div 
            className="bg-black/40 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-marvel-red/20 hover:border-marvel-gold/50 transition-all duration-300 text-center max-w-3xl mx-auto mt-20"
            style={{ 
              transform: `perspective(1000px) rotateX(${mousePosition.y * -5}deg) rotateY(${mousePosition.x * 5}deg) translateZ(20px)`,
              boxShadow: '0 10px 30px -10px rgba(211, 47, 47, 0.3)',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out'
            }}
          >
            <h3 
              className="text-2xl font-semibold mb-4 text-marvel-gold font-orbitron"
              style={{ 
                textShadow: '0 2px 8px rgba(253, 184, 39, 0.2)',
                transform: 'translateZ(10px)',
              }}
            >
              Become a Sponsor
            </h3>
            <p 
              className="text-marvel-white/80 mb-8"
              style={{ transform: 'translateZ(5px)' }}
            >
              Support the next generation of innovators and gain exposure to top tech talent. 
              Showcase your brand at one of the most exciting hackathon events of the year.
            </p>
            <a 
              href="#contact" 
              className="button-outline inline-block transform-gpu hover:scale-105 hover:translate-y-[-2px] transition-all duration-300"
              style={{ transform: 'translateZ(15px)' }}
            >
              Contact Us
            </a>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default Sponsors;
