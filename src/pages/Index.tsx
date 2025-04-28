
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
    document.title = 'HACKरण 2025 - Join the Ultimate Hackathon Challenge';
  }, []);

  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-black to-marvel-navy/95">
      {/* Background overlay with grid pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 tech-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/40"></div>
      </div>
      
      {/* Content */}
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
      
      {/* Marvel-style corner emblem */}
      <div className="fixed top-0 left-0 w-16 h-16 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-marvel-red"></div>
        <div className="absolute top-0 left-0 w-full h-full transform rotate-45 origin-top-left bg-marvel-red"></div>
        <div className="absolute top-[14px] left-[14px] text-white font-orbitron text-xs font-bold">HACK</div>
      </div>
    </div>
  );
};

export default Index;
