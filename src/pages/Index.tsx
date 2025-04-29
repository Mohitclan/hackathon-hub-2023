
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Sponsors from '../components/Sponsors';
import Prizes from '../components/Prizes';
import Mentors from '../components/Mentors';
import Schedule from '../components/Schedule';
import FAQ from '../components/FAQ';
import Registration from '../components/Registration';
import Footer from '../components/Footer';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update page title
    document.title = 'HackQuanta 2025 - Data. Dystopia. Dominance.';
    
    // Add subtle parallax effect based on mouse position (reduced effect)
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="overflow-x-hidden bg-gradient-to-b from-black to-marvel-navy/95"
      style={{ perspective: '1000px' }}
    >
      {/* Background overlay with reduced parallax grid pattern */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-5"
        style={{ transform: `translateX(${mousePosition.x * -10}px) translateY(${mousePosition.y * -10}px)` }}
      >
        <div className="absolute inset-0 tech-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/40"></div>
      </div>
      
      {/* Content with reduced 3D depth */}
      <div>
        <Navbar />
        <Hero />
        <About />
        <Sponsors />
        <Prizes />
        <Mentors />
        <Schedule />
        <FAQ />
        <Registration />
        <Footer />
      </div>
      
      {/* Marvel-style corner emblem with reduced 3D effect */}
      <div 
        className="fixed top-0 left-0 w-16 h-16 pointer-events-none"
        style={{ 
          transform: `rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-marvel-red"></div>
        <div 
          className="absolute top-0 left-0 w-full h-full transform rotate-45 origin-top-left bg-marvel-red"
          style={{ filter: 'brightness(1.2)' }}
        ></div>
        <div 
          className="absolute top-[14px] left-[14px] text-white font-orbitron text-xs font-bold"
          style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
        >
          HACK
        </div>
      </div>
    </div>
  );
};

export default Index;
