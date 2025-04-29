
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
    document.title = 'HackQuanta 2025 - Join the Ultimate Hackathon Challenge';
    
    // Add subtle parallax effect based on mouse position
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
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      {/* Background overlay with parallax grid pattern */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-10"
        style={{ transform: `translateZ(-20px) translateX(${mousePosition.x * -20}px) translateY(${mousePosition.y * -20}px) scale(1.1)` }}
      >
        <div className="absolute inset-0 tech-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/40"></div>
      </div>
      
      {/* Content with 3D depth */}
      <div style={{ transformStyle: 'preserve-3d' }}>
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
      
      {/* HackQuanta logo in the corner with 3D effect */}
      <div 
        className="fixed top-0 left-0 w-28 h-28 pointer-events-none"
        style={{ 
          transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.2s ease-out'
        }}
      >
        <img 
          src="/lovable-uploads/367d1ef1-5a54-49a3-8811-952d58a663cd.png" 
          alt="HackQuanta Logo" 
          className="w-full h-full object-contain"
          style={{ transform: 'translateZ(5px)' }}
        />
      </div>
    </div>
  );
};

export default Index;
