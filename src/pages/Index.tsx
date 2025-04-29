
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
      
      {/* Marvel-style corner emblem with reduced 3D effect - updated with HackQuanta poster */}
      <div 
        className="fixed top-0 left-0 w-16 h-16 pointer-events-none"
        style={{ 
          transform: `rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <img 
          src="/lovable-uploads/a9837f4b-a011-42b9-95c5-4b364d20b8e5.png"
          alt="HackQuanta Emblem"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Index;
