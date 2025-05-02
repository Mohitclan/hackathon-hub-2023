
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showShield, setShowShield] = useState(false);
  const [showLightning, setShowLightning] = useState(false);
  const [lightningPosition, setLightningPosition] = useState({ x: 0, y: 0 });
  const [lightningOpacity, setLightningOpacity] = useState(0);

  useEffect(() => {
    // Update page title
    document.title = 'HackQuanta: Code for the Multiverse - 2025';
    
    // Add professional fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Raleway:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Handle scroll effects
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Show shield after scrolling a bit
      if (window.scrollY > 300) {
        setShowShield(true);
      } else {
        setShowShield(false);
      }

      // Randomly show lightning effects during scroll
      if (window.scrollY > 200 && Math.random() < 0.05) {
        const x = Math.random() * window.innerWidth;
        const y = 100 + Math.random() * 400;
        setLightningPosition({ x, y });
        setLightningOpacity(0.8);
        setShowLightning(true);
        
        // Hide lightning after a short delay
        setTimeout(() => {
          setLightningOpacity(0);
          setTimeout(() => {
            setShowLightning(false);
          }, 300);
        }, 200 + Math.random() * 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial shield display check
    handleScroll();
    
    return () => {
      document.head.removeChild(link);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Generate a random lightning bolt path
  const generateLightningPath = () => {
    // Starting point
    let path = `M${30 + Math.random() * 10} 0`;
    
    // Generate zigzag path
    let currentY = 0;
    const segmentCount = 6 + Math.floor(Math.random() * 4);
    const segmentHeight = 100 / segmentCount;
    
    for (let i = 1; i <= segmentCount; i++) {
      const xOffset = 25 + Math.random() * 50;
      currentY += segmentHeight;
      path += ` L${xOffset} ${currentY}`;
    }
    
    return path;
  };

  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-black to-marvel-navy/95 font-body">
      {/* Modern grid pattern background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 tech-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/40"></div>
      </div>
      
      {/* Main content */}
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
      
     

      {/* Floating Captain America Shield - Updated with transparent PNG */}
      <div 
        className={`fixed right-0 bottom-40 z-10 transition-all duration-700 ease-in-out pointer-events-none ${showShield ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
        style={{ 
          transform: `translateY(${Math.sin(scrollPosition / 300) * 20}px) rotate(${scrollPosition * 0.05}deg)`,
        }}
      >
        <div className="w-32 h-32 md:w-40 md:h-40 relative">
          {/* Use the Captain America shield PNG */}
          <img 
            src="/lovable-uploads/61696365-a857-4321-9ced-000a7b25a3f2.png" 
            alt="Captain America Shield" 
            className="w-full h-full object-contain animate-pulse-slow"
            style={{ filter: 'drop-shadow(0px 0px 8px rgba(0, 123, 255, 0.6))' }}
          />
        </div>
      </div>
      
      {/* Iron Man Repulsor Beam */}
      <div 
        className="fixed left-0 bottom-1/4 z-10 pointer-events-none opacity-60"
        style={{ 
          transform: `translateX(${Math.sin(scrollPosition / 400) * 20 - 100}px) translateY(${Math.cos(scrollPosition / 300) * 15}px)`,
        }}
      >
        <div className="iron-man-repulsor"></div>
      </div>
      
      {/* Thor's Lightning Effects */}
      {showLightning && (
        <>
          {/* Main lightning bolt */}
          <div 
            className="fixed z-20 pointer-events-none"
            style={{ 
              left: `${lightningPosition.x}px`,
              top: `${lightningPosition.y}px`,
              transition: 'opacity 0.2s ease-out',
              opacity: lightningOpacity
            }}
          >
            <svg width="100" height="300" viewBox="0 0 100 300" fill="none">
              <path
                d={generateLightningPath()}
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d={generateLightningPath()}
                stroke="#1EAEDB"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          
          {/* Lightning flash/glow effect */}
          <div 
            className="fixed inset-0 pointer-events-none bg-gradient-to-b from-blue-500/5 to-transparent z-10"
            style={{ 
              transition: 'opacity 0.3s ease-out',
              opacity: lightningOpacity * 0.3
            }}
          ></div>
        </>
      )}
      
      {/* Add HackQuanta Poster - Updated with new hackathon poster */}
      
    </div>
  );
};

export default Index;
