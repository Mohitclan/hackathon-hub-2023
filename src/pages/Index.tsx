
import React, { useEffect } from 'react';
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
  useEffect(() => {
    // Update page title
    document.title = 'Avengers Assemble: Code for the Multiverse - 2025';
    
    // Add Google font for Marvel style
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Anton&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-black to-marvel-navy/95">
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
      
      {/* Avengers logo in the corner */}
      <div className="fixed top-0 left-0 w-24 h-24 pointer-events-none">
        <img 
          src="/lovable-uploads/a34081ee-992f-41f8-ac2a-cb0f992bd76d.png" 
          alt="Avengers Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Index;
